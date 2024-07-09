import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const storeTokenInLS = (serverToken) => {return localStorage.setItem("token",serverToken);}
    const removeTokenInLS = () => {return localStorage.removeItem("token");}

    return (
        <AuthContext.Provider value={{storeTokenInLS,removeTokenInLS}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () =>{
    return useContext(AuthContext);
}