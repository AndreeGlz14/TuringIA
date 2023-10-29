import 'dotenv/config'
import jwt from 'jsonwebtoken';

//Funcion para crear un token de acceso a un usuario autenticado
export function createToken(payload){
    const secretKey = process.env.SECRET_KEY;

    //se retorna una promesa
    return new Promise((resolve, reject)=>{
        jwt.sign(payload, secretKey, {
            expiresIn: "1d"
        },
        (err, token) => {
            if (err)reject(err);
            resolve(token)
        }
        )
    })


}