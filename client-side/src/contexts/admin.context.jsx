import { createContext, useState, useContext, useEffect } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { auth } from '../utils/firebase/firebase.utils'

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(user)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    })

    return (
        <UserContext.Provider value={{signIn, user, logout}}>
            {children}
        </UserContext.Provider>
    )
};

export const UserAuth = () => {
    return useContext(UserContext)
}
