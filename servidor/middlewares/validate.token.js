import 'dotenv/config';
import jwt from 'jsonwebtoken';

//Funcion donde se obtienen las cookies
export function userVerifqued(req, res, next){
    const {token} = req.cookies;
    const secretKey = process.env.SECRET_KEY;

    if(!token)
    return res.status(401).json({message:'access denied'});

    jwt.verify(token, secretKey, (err, User)=>{
        if(err)
        return res.status(404).json({message:'Invalid Token'});
        
        req.User = User;
        next()
    })
}