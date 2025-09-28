import { useState, createContext, useEffect } from "react";


export const AuthContext = createContext();



export const AuthContextProvider = ({children})=>{
    const getToken =  localStorage.getItem("token")? localStorage.getItem("token"): null;
    console.log("Token from context : ", getToken)

    const [ token, setToken ] = useState(getToken);

    const sendData = {
        token,
        setToken
    }

     useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

    return <AuthContext.Provider value={sendData}> {children} </AuthContext.Provider>
};