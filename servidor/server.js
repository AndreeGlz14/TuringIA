import 'dotenv/config'
import app from './app.js';
import { conexionDB } from './DBconnection.js';


const host = process.env.APP_HOST;
const port = process.env.APP_PORT;

//Llamamos a la funcion para conectar a la base de datos
conexionDB()

//Preparamos nuestra aplicacion para que se conecte al host y al puerto indicado
app.listen(port, ()=>{
    console.log('servidor escuchando en: '+host+':'+port);
})