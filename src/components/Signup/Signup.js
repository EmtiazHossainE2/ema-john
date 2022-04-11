import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import GoogleLogo from "../../images/google.svg";
import toast from 'react-hot-toast';

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState({ value: "", error: "" })
    const [password, setPassword] = useState({ value: "", error: "" })
    const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "" })

    //react firebase hook
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    //handle google sign up 
    const handleGoogle = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
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

    //handle confirm password 
    const handleConfirmPassword = event => {
        const confirmValue = event.target.value
        if (confirmValue !== password.value) {
            setConfirmPassword({ value: "", error: "Password Not Match" });
        } else {
            setConfirmPassword({ value: confirmValue, error: "" });
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
        if (confirmPassword.value === "") {
            setConfirmPassword({
                value: "", error: "Password confirmation is required",
            });
        }

        if (email.value && password.value && confirmPassword.value === password.value) {
            createUserWithEmailAndPassword(email.value, password.value)
                .then(() => {
                    toast.success("Welcome to Ema John", { id: "success" });
                    navigate("/")
                })
        }
    }


    return (
        <div className='auth-form-container '>
            <div className='auth-form'>
                <h1>Sign Up</h1>
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
                    <div className='input-field'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <div className='input-wrapper' onBlur={handleConfirmPassword}>
                            <input
                                type='password'
                                name='confirmPassword'
                                id='confirm-password'
                            />
                        </div>
                        {confirmPassword?.error && <p className="error"> {confirmPassword.error}</p>}
                    </div>
                    <button type='submit' className='auth-form-submit'>
                        Sign Up
                    </button>
                </form>
                <p className='redirect'>
                    Already have an account?{" "}
                    <span onClick={() => navigate("/login")}>Login</span>
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

export default Signup;
