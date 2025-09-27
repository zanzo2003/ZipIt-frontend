import { useState, createContext } from "react";


const AuthContext = createContext();



export const AuthContextProvider = ({children})=>{
    const getToken =  localStorage.getItem("token")
                        ? JSON.parse(localStorage.getItem("token"))
                        : null;

    const [ token, setToken ] = useState(getToken);

    const sendData = {
        token,
        setToken
    }

    return <AuthContext.Provider value={sendData}> {children} </AuthContext.Provider>
};