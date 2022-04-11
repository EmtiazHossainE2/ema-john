import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { auth } from "../Firebase/firebase.init"

const useFirebase = () => {
    const [user, setUser] = useState({})

    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    //google provider handle 
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                toast.success(`Welcome `, { id: "welcome" });
                navigate("/")
            })
            .catch(error => {
                console.log(error);
            })
    }

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
        handleGoogleSignIn,
        handleSignOut
    }
}

// export default useFirebase;