import React, { useState } from "react";
import "./Login.css";
import GoogleLogo from "../../images/google.svg";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";
import toast from "react-hot-toast";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
    const { handleGoogleSignIn } = useFirebase()
    const navigate = useNavigate();
    const [email, setEmail] = useState({ value: "", error: "" })
    const [password, setPassword] = useState({ value: "", error: "" })

    //handle email
    const handleEmail = event => {
        const emailValue = event.target.value
        if (/\S+@\S+\.\S+/.test(emailValue)) {
            setEmail({ value: emailValue, error: "" });
        } else {
            setEmail({ value: "", error: "Please Provide a valid Email" });
        }
    }

    //handle password
    const handlePassword = event => {
        const passwordValue = event.target.value
        if (passwordValue.length < 6) {
            setPassword({ value: "", error: "Password too short" });
        }
        else if (!/(?=.*[A-Z])/.test(passwordValue)) {
            setPassword({
                value: "", error: "Password must contain a capital letter",
            });
        }
        else {
            setPassword({ value: passwordValue, error: "" });
        }
    }

    //handle submit btn 
    const handleSubmit = event => {
        event.preventDefault()

        if (email.value === "") {
            setEmail({ value: "", error: "Email is required" });
        }
        if (password.value === "") {
            setPassword({ value: "", error: "Password is required" });
        }


        if (email.value && password.value) {
            signInWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    // console.log(user);
                    toast.success(`Welcome back `, { id: "welcome" });
                    navigate("/");
                })
                .catch((error) => {
                    const errorMessage = error.message;

                    if (errorMessage.includes("wrong-password")) {
                        toast.error("Wrong Password", { id: "error" });
                    } else {
                        toast.error(errorMessage, { id: "error" });
                    }
                });
        }
    }

    return (
        <div className='auth-form-container '>
            <div className='auth-form'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper' onBlur={handleEmail}>
                            <input type='text' name='email' id='email' />
                        </div>
                        {email?.error && <p className="error"> {email.error}</p>}
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper' onBlur={handlePassword}>
                            <input type='password' name='password' id='password' />
                        </div>
                        {password?.error && <p className="error"> {password.error}</p>}
                    </div>
                    <button type='submit' className='auth-form-submit'>
                        Login
                    </button>
                </form>
                <p className='redirect'>
                    New to Ema John ?{" "}
                    <span onClick={() => navigate("/signup")}>Create New Account</span>
                </p>
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>or</p>
                    <div className='line-right' />
                </div>
                <div className='input-wrapper'>
                    <button className='google-auth' onClick={handleGoogleSignIn}>
                        <img src={GoogleLogo} alt='' />
                        <p> Continue with Google </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
