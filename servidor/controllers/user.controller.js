import jwt from 'jsonwebtoken';
import { createToken } from '../libs/jwt.js';
import user from '../models/user.model.js'
import bcrypt from 'bcryptjs'

//funcion para dar de alta un registro
export async function register(req, res){
    try {
        const {username, name,last_name, email, password, confirmPassword, age} = req.body;

    //Hacemos una consulta donde se verifica si hay un email
    const FindEmail = await user.findOne({email});
    
    if(FindEmail)
    return res.status(404).json({message:'email already exist'})
    
    const hashPassword = await bcrypt.hash(password,10)

    const newUser = new user({
        username,
        name,
        last_name,
        email,
        password: hashPassword,
        age
    });

    if(password !== confirmPassword)
    return res.status(404).json({message:'passwords do not match'});

    const userSaved = await newUser.save();

    const token = await createToken({id: userSaved._id})
    res.cookie('token', token)

    res.json({
        id: userSaved._id,
        username: userSaved.username,
        name: userSaved.name,
        last_name: userSaved.last_name,
        email: userSaved.email,
        password: userSaved.password,
        age: userSaved.age
    });
    } catch (error) {
        console.error("Error en el bloque catch:", error);
        return res.status(404).json({message:'Hubo un error al registrarse'});
    }
}

export async function login(req, res){
    try {
        const {email, password} = req.body;
        const userFound = await user.findOne({email});
        
        if (!userFound)
            return res.status(401).json({message:'email not found'});

        const passwordMatch = await bcrypt.compare(password, userFound.password);
        if(!passwordMatch)
        return res.status(401).json({message:'Password do not match'});
        
        const token = await createToken({id: userFound._id})
        res.cookie('token', token)

        res.json({
              id: userFound._id,
              username: userFound.username,
              email: userFound.email
        })

    } catch (error) {
        return res.status(404).json({message:'Hubo un error al momento de hacer un login'})
    }
}

export async function logout (req, res){
    res.cookie('token',"",{
        expires: new Date(0)
    })
    return res.sendStatus(200);
}

export async function verifyToken(req, res){
    const {token} = req.cookies;
    const secretKey = process.env.CLAVE_SECRETA;

    if(!token)
    return res.status(401).json({message: 'access denied'});

    jwt.verify(token, secretKey, async (err, User) =>{
        if(err)
        return res.status(401).json({message: 'access denied'});
        
        const userFound = await user.findByID(User.id);
        if(!userFound)
        return res.status(401).json({message: 'access denied'});
        return  res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
      })
    })
   
}