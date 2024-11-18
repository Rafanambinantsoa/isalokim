import React from 'react'
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function AdminProtectRoute({children}) {

    const {user} = useAuth()
   
    if (user) {
        return children;
    }else{
        return <Navigate to="/connexion"/>;
    }
}
