//import 'dotenv/config';
import axios from 'axios'

const baseUrl = 'http://turing-ia.onrender.com/api'

//Se crea una instancia para consumir la api
const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true
});

export default instance