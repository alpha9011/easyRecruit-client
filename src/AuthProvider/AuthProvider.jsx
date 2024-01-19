
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState} from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {


    const [user, setUser] = useState()
    const[loader, setLoader] = useState(true)

    
    //signInWithGoogle
    const provider = new GoogleAuthProvider();
    const signInWithGoogle  = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }

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
    const logOut = ()=> {
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
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        });

        return ()=> {
            unSubscribe()
        }


    } ,[])
console.log(user);

    const authInfo = {
        signInWithGoogle, createUser, login,logOut, user, loader,handleUpdateProfile
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