import { useState, createContext } from "react";


export const AuthContext = createContext();



export const AuthContextProvider = ({children})=>{
    const getToken =  localStorage.getItem("token")? localStorage.getItem("token"): null;
    console.log("Token from context : ", getToken)

    const [ token, setToken ] = useState(getToken);

    const sendData = {
        token,
        setToken
    }

    return <AuthContext.Provider value={sendData}> {children} </AuthContext.Provider>
};