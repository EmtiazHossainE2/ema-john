import React, { useState } from "react";
import "./Login.css";
import GoogleLogo from "../../images/google.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import toast from "react-hot-toast";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState({ value: "", error: "" })
    const [password, setPassword] = useState({ value: "", error: "" })

    //private route
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    //react-firebase-hooks
    const [signInWithEmailAndPassword, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth)

    //handle google sign in 
    const handleGoogle = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from)
            })
    }




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
            setPassword({ value: "", error: "Password must be 6 character or more" });
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

    //toast and navigate 
    if (user) {
        toast.success(`Welcome back `, { id: "welcome" });
        navigate(from, { replace: true });
    }
    if (hookError) {
        toast.error(`error`, { id: "error" });
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
            signInWithEmailAndPassword(email.value, password.value)
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
                        {/* error handle  */}
                        {password?.error && <p className="error"> {password.error}</p>}
                        {loading && <p>Loading...</p>}
                        {hookError && <p className="error"> Password is Wrong</p>}
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
                    <button className='google-auth' onClick={handleGoogle}>
                        <img src={GoogleLogo} alt='' />
                        <p> Continue with Google </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
