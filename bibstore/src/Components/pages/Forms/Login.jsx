import React from 'react';
import './Login.css'
import { useState } from 'react'
//handle error 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom'





const Login = () => {
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showpassword, setShowpassword] = useState(false);
    const handlesubmit = (e) => {
        e.preventDefault();
        if (Email.trim() === "") return toast.error("email is required");
        if (password.trim() === "") return toast.error("Password is required ");

    }

    // function show password (icon)
    const showpasswordhandle = () => {
        setShowpassword(prev => !prev)
    }


    return (
        <div className='login'>
            <ToastContainer />

            <h2 className='login-title'>Login To Your Account</h2>

            <form onSubmit={handlesubmit} className='login-form'>

                <div className='login-input'>
                    <div className='login-Email'>
                        <input type="Email" placeholder='Email' value={Email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='login-password'>
                        <input type={showpassword ? "text" : "Password" } placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}
                        />
                        {showpassword ? <i onClick={showpasswordhandle} class="bi bi-eye show-password"></i>  :  <i  onClick={showpasswordhandle} class="bi bi-eye-slash show-password"></i>}
                         
                       
                    </div>
                    <button className='login-send-btn'>Login</button>
                
                </div>




            </form>
            <p className='register'>Don't have acoount ?     <Link to={"/register"}>Register</Link> </p>


        </div>
    );
}

export default Login;
