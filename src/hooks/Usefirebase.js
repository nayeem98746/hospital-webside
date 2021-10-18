import { useState,useEffect } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,signOut,createUserWithEmailAndPassword    } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error , setError] = useState("")

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const singInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
            setError("")
        })
        .catch((error) => setError(error.massage))
    }


   const handleRegister = (email, password) => {
        createUserWithEmailAndPassword(auth,email,password)
        .then((result) => {
            console.log(result.user)
        })
        .catch((error) => {
            const errorMessage = error.massage
        })
   }

    const logOut = () =>{
        signOut(auth)
        .then(()=> {
            setUser({})
        })

    }

    useEffect(() => {
        const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
     setUser(user)
    
     } 
        });

     },[])
        return{
            user,
            singInUsingGoogle, 
            logOut,
            handleRegister

        }

}

export default useFirebase;