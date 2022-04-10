import { onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../Firebase/firebase.init"

const useFirebase = () => {
    const [user, setUser] = useState({})

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
        });
    }, []);


    return {
        user,
        handleSignOut
    }
}

export default useFirebase;