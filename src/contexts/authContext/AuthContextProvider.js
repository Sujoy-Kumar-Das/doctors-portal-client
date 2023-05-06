import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePhoneNumber, updateProfile } from "firebase/auth";
import app from '../../firebase/Firebase.init';

export const AuthProvider = createContext();
const auth = getAuth(app);
const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = ()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const createUser = (email,password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const loginUser = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    };
    const updateUser = (userInfo)=>{
        setLoader(true)
        return updateProfile(auth.currentUser,userInfo)
    };
    const updateUserPhone = (userPhone)=>{
        return updatePhoneNumber(auth.currentUser,userPhone)
    };
    const resetPassword = (email)=>{
        setLoader(true)
        return sendPasswordResetEmail(auth,email)
    };
    const logOut = ()=>{
        setLoader(true);
        localStorage.removeItem("Acess_Token");
        return signOut(auth)
    };
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentuser=>{
            setUser(currentuser)
            setLoader(false);
        })
        return ()=>unSubscribe();
    },[])
    const authInfo = {
        googleLogin,
        createUser,
        loginUser,
        updateUser,
        updateUserPhone,
        resetPassword,
        logOut,
        user,
        loader
    }
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContextProvider;