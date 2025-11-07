import { Navigate } from "react-router-dom";
import React, { useContext } from 'react'
import { AuthContext } from "../contexts/AuthContext";


function AuthGuard( {children, publicPage} ) {

    const { token}  = useContext(AuthContext);

    if(publicPage){
        return children;
    }

    return !token? <Navigate to="/login" /> : children;
}

export default AuthGuard