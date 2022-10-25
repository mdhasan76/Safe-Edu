import React from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth'

const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const user = { userName: 'hasan' };
    const googleProvider = new GoogleAuthProvider();

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

    const authInfo = { user, googleSignIn, createNewUser, updateUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;