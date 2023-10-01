import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase.pconfig";

export const authContxt =createContext(true)

const Authprovider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)

    const  createUser = (email,password) =>{
        setLoader(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const LoginUser = (email,password) =>{
        setLoader(true)
        
        return signInWithEmailAndPassword(auth,email,password)
    }

    const LogOut = () =>{
        setLoader(true)
        signOut(auth)
    }
    useEffect(()=>{
        const unSubscrib =  onAuthStateChanged(auth ,(curentUser)=>{
            setLoader(false)
            setUser(curentUser)
        })
        return ()=>{
            unSubscrib()
        }
    },[])

const authInfo = {
    user,
    loader,
    createUser,
    LoginUser,
    LogOut,
}


    return (
        <div>
            <authContxt.Provider value={authInfo}>
            {children}
            </authContxt.Provider>
        </div>
    );
};

export default Authprovider;