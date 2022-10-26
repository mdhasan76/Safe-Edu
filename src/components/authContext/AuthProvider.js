import React from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, updateProfile } from 'firebase/auth'
import { useEffect } from 'react';
import { useState } from 'react';

const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //sing in with google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //create user with email & password
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //update name & photourl
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    }

    useEffect(() => {
        const unsribscibe = onAuthStateChanged(auth, user => {
            if (user) {
                console.log(user)
                setUser(user)
            }
            else {
                console.log('not sign in user')
            }
        })

        return unsribscibe();
    }, [])

    const authInfo = { user, googleSignIn, createNewUser, updateUser, githubSignIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;