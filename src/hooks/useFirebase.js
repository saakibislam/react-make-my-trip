import initializeAuthentication from "../firebase/firbase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
    initializeAuthentication();
    const [user, setUser] = useState();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
        })
    }, [])
    const logOut = () => {
        signOut(auth)
            .then(() => {
                alert("Logout Successful")
            })
    }
    return {
        user,
        googleLogin,
        logOut
    }
}
export default useFirebase;