//import 'dotenv/config';
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:5050/api'

//Se crea una instancia para consumir la api
const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true
});

export default instance