import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loader, setLoader] = useState(true)
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [productLimit, setProductLimit] = useState(0);


    //signInWithGoogle
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
    //signInWithGoogle
    // const facebookProvider = new FacebookAuthProvider();
    // const signInWithFacebook = () => {
    //     setLoader(true)
    //     return signInWithPopup(auth, facebookProvider)
    // }

    // create user 
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }



    // log in 
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out 
    const logOut = () => {
        setLoader(true)
        return signOut(auth)

    }

    // update 
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // save user 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        });

        return () => {
            unSubscribe()
        }


    }, [])

    // forgot pass 
    const forgotPass = (email) => {
        setLoader(true)
        return sendPasswordResetEmail(auth, email)

    }

    console.log(user);

    const authInfo = {
        signInWithGoogle,
        createUser,
        login, logOut,
        user,
        loader,
        handleUpdateProfile,
        forgotPass,
        selectedPlan,
        setSelectedPlan,
        productLimit,
        setProductLimit

    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;