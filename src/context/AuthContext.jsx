// context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';


const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  
    const [user, setUser] = useState(
        () => JSON.parse(localStorage.getItem("user")) || null
      );

    const logout = ()=>{
        setUser(null)
        localStorage.removeItem("user")
     

    }
    return (
        <AuthContext.Provider value={{ user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
