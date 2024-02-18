import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loader, setLoader] = useState(true)
    // const [selectedPlan, setSelectedPlan] = useState(null);
    // const [productLimit, setProductLimit] = useState(0);


    //signInWithGoogle
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
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
    const logOut = () => {
        setLoader(true)
        return signOut(auth)

    }


    // save user 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            // console.log("currentUser", currentUser);
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

    // console.log(user);

    const authInfo = {
        signInWithGoogle,
        createUser,
        login, logOut,
        user,
        loader,
        forgotPass,
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