import {createContext, useState, useContext, useEffect} from 'react';
import Cookies from 'js-cookie';
import { VerifyTokenRequest, registerRequest } from '../api/auth';

//Se crea un contexto
export const AuthContext = createContext();

export function useAuth() {
    const context = useContext(AuthContext);
    
    if(!context){
        throw new Error ("useAuth should be used with an AuthProvider")
    }

    return context
}
//Se crea el authprovider donde encapsula la aplicacion y proporciona el estado de la
//autenticacion. Es responsable de mantener un estado de autenticacion en los componentes 
//hijos

export function AuthProvider({children}){
    const [user, setUser] = useState(null); //Valores inicales del usuario
    const [isAuthenticated, setIsAuthenticated] = useState(false); //Se revisa si esta autenticado
    const [errors, setErrors] = useState([]); //Declaramos los errores
    const [loading, setLoading] = useState(true);

    //Funcion para el registro de un usuario
    async function signup (user) {
        try {
            const res = await registerRequest(user); 
            console.log(res.data);
            setUser(res.data); //se establece el valor del usuario
            setIsAuthenticated(true); //Se confirma que esta autenticado
        } catch (error) {
            setErrors(error.response.data);
        }
    }

    useEffect(() =>{

        //Funcion para checar si hay una cookie
        async function checkLogin(){
            const cookies = Cookies.get();
            console.log(cookies.token);

            //Si no hay un token se restablecen los estados
            if(!cookies.token){
                setIsAuthenticated(false);
                setLoading(false);
                return setUser(null) 
            }
            try {
                const res = await VerifyTokenRequest(cookies.token); //envia el token al backend
                if(!res.data){
                    setIsAuthenticated(false);
                    setLoading(false);
                    return
                }
                //Si hay datos del usuario
                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                //Si hay un error entonces no hay nada
                setIsAuthenticated(false);
                setUser(null)
                setLoading(false);
            }
        }
        checkLogin();
    },[])

    //Use effect que manda llamar a los errores
    useEffect(() =>{
        if(errors.length >0 ){
            const timer = setTimeout(()=>{
                setErrors([])
            }, 5000)
            return() => clearTimeout(timer);
        }
    },[errors])

    return (
        <AuthContext.Provider value = {{signup,loading,user,isAuthenticated,errors}}> 
            {children}
        </AuthContext.Provider>
    )

}