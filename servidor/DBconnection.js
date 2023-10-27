import 'dotenv/config'
import mongoose from "mongoose";

const url_db = process.env.DB_URL;


//Funcion para conectar a la base de datos de mongo
export async function conexionDB(){
    try {
        await mongoose.connect(url_db);
        console.log('Conexion a la base de datos exitosa');
    } catch (error) {
        console.log(error);
    }
}