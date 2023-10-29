//import 'dotenv/config'
import axios from 'axios'

//Se crea una instancia para consumir la api
const instance = axios.create({
    baseURL:'http://127.0.0.1:5050/api',
    withCredentials: true
});

export default instance