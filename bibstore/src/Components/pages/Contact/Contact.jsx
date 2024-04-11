import React from 'react';
import './Contact.css'
import { useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => { 
    const [Email, setEmail] = useState("");
const [Nom, setNom] = useState("");
const [Prenom, setPrenom] = useState("");
    const handlesubmit = (e) => {
        e.preventDefault();
     
        if (Nom.trim() === "") return toast.error("Nom is required ");
        if (Prenom.trim() === "") return toast.error("Password is required ");
        if (Email.trim() === "") return toast.error("Email is required");




       



    }
    return (
        <div className='contact'>
              <ToastContainer  />

            <div className='contact-wrapper'>

                <div className='contact-item'>
                    <div className='contact-item-icon'>
                        <i class="bi bi-house-fill"></i>
                    </div>
                    <div className='contact-item-info'>
                        <h2 className='contact-item-title'>Address</h2>

                    </div>
                    <p className='contact-item-desc'>Marroc-Marrakech</p>
                </div>

                <div className='contact-item'>
                    <div className='contact-item-icon'>
                        <i class="bi bi-telephone-fill"></i>
                    </div>
                    <div className='contact-item-info'>
                        <h2 className='contact-item-title'>Phone</h2>

                    </div>
                    <p className='contact-item-desc'>+212 617 03 94 18</p>
                </div>

                <div className='contact-item'>
                    <div className='contact-item-icon'>
                        <i class="bi bi-envelope-fill"></i>
                    </div>
                    <div className='contact-item-info'>
                        <h2 className='contact-item-title'>Email</h2>

                    </div>
                    <p className='contact-item-desc'>younessbakka7@gmail.com</p>
                </div>

            </div>
            <form onSubmit={handlesubmit} className='form-contact'>
                <h2 className='contact-title-form'>Contact Us Form</h2>
                <div className='form-input'>
                <input  type="text" placeholder='Nom *'  value={Nom} onChange={e => setNom(e.target.value)}  />
                <input type="text" placeholder='Prenom *'  value={Prenom} onChange={e => setPrenom(e.target.value)}  />
                <input type="text" placeholder='Email *'  value={Email} onChange={e => setEmail(e.target.value)}   />
                </div>
           
             <div className='form-input-aria'>
               <textarea  cols="30" rows="10" placeholder='Comment'></textarea>
               <button className='btn-contact'>Send</button>
                </div>
           

            </form>

        </div>
    );
}

export default Contact;
