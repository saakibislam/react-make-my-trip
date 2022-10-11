import initializeAuthentication from "../firebase/firbase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
    initializeAuthentication();
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        setIsLoading(true);
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
            setIsLoading(false);
        })
    }, [])
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                alert("Logout Successful")
            })
            .finally(() => setIsLoading(false))
    }
    return {
        user,
        isLoading,
        setIsLoading,
        googleLogin,
        logOut
    }
}
export default useFirebase;