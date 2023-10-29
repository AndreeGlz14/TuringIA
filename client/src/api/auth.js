import axios from './axios'

//Exportamos la funcion del request del registro 
export const registerRequest = user => axios.post('/register', user);
export const VerifyTokenRequest = () => axios.get('/verifyToken');

//Nota: este axios es el archivo js que se creo . NO del modulo mismo