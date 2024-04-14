import { createUserWithEmailAndPassword, GithubAuthProvider, signInWithPopup, signOut, getAuth, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../fire-base-init.js/Fire-Base-Init";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()
    const [user, setUser] = useState('')
    const [loder, setLoder] = useState(true)

    const handleSingUpBtn = (email, password) => {
        setLoder(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handelLoginBtn = (email, password) => {
        setLoder(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const singInWithPopUp = () => {
        setLoder(true)
        return signInWithPopup(auth, googleProvider)
    }

    const singInWithGitHubPopup = () => {
        setLoder(true)
        return signInWithPopup(auth, gitHubProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const UnSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoder(false)
            console.log(currentUser);
        })
        return () => {
            UnSubscribe()
        }
    }, [])

    const authInfo = {
        handleSingUpBtn,
        handelLoginBtn,
        singInWithPopUp,
        user,
        logOut,
        singInWithGitHubPopup,
        loder
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {
                    children
                }
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;