import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className='contact'>

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
            <form onSubmit={(e) => {
                e.preventDefault()
            }} className='form-contact'>
                <h2 className='contact-title-form'>Contact Us Form</h2>
                <div className='form-input'>
                <input  type="text" placeholder='Nom *' />
                <input type="text" placeholder='Prenom *' />
                <input type="text" placeholder='Email *'  />
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
