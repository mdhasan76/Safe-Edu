import React from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
    signOut
} from 'firebase/auth'
import { useEffect } from 'react';
import { useState } from 'react';

const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //sing in with google
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //create user with email & password
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    //sign in 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    //update name & photourl
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }


    //sign out 
    const logOut = () => {
        return signOut(auth)
    }


    //save user when chenge state
    useEffect(() => {
        const unsribscibe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            setUser(user);
            setLoading(false)
        })

        return unsribscibe();
    }, [])

    const authInfo = { user, googleSignIn, createNewUser, updateUser, githubSignIn, signIn, logOut, setUser, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;