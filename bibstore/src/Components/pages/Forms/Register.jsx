import React from 'react';
import "./Register.css"
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

const Register = () => {
    const [Nom, setNom] = useState("");
    const [Prenom, setPrenom] = useState("");
    const [Email, setEmail] = useState("");
    const [Pasword, setPassword] = useState("");
    const [confPasword, setConfpassword] = useState("");
    const handlsubmit = (e)=>{
        e.preventDefault()

        if (Nom.trim() === "") return toast.error('Nom is required');
        if (Prenom.trim() === "") return toast.error('Prenom is required');
        if (Email.trim() === "") return toast.error('Email is required');
        if (Pasword.trim() === "") return toast.error('Password is required');
        if (confPasword.trim() === "") return toast.error('Confirm Password is required');
     
     

    }
    return (
       
     
        <div className='register'>

<ToastContainer />
         
            <form onSubmit={handlsubmit} className='Register-form'>
           
            <h2 className='login-title'>Register To Your Account</h2>
           

                <div className='first-input'>
                    <input type="text" placeholder='Name*' value={Nom} onChange={e=>setNom(e.target.value)}  />
                    <input type="text"  placeholder='Prenom *' value={Prenom} onChange={e=>setPrenom(e.target.value)}  />

                </div>
                <div className='secende-input'>
                    <input type="Email" placeholder='Email *' value={Email} onChange={e=>setEmail(e.target.value)}  />
                    <input type="password" placeholder='Password *' value={Pasword} onChange={e=>setPassword(e.target.value)}  />
               

                </div>
                <div className='confimation'>
                <input type="password"  placeholder='confirmation password *' value={confPasword} onChange={e=>setConfpassword(e.target.value)}  />
               
                </div>
                <button className='Register-btn'>Register</button>
                <p className='register'>Don't have acoount ?     <Link to={"/login"}>Login</Link> </p>





            </form>
        </div>
    );
}

export default Register;
