import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { toast, Toaster } from 'react-hot-toast';
import contactImg from './customer-service.png'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_dyy959e', 'template_hcla3jq', form.current, {
                publicKey: 'oLs-YdKN0eLVd5KAk',
            })
            .then(
                () => {
                    toast.success('Message sent successfully!', {
                        position: 'top-right',
                        duration: 3000,
                        style: {
                            background: '#4caf50',
                            color: '#fff',
                            borderRadius: '10px',
                            padding: '8px',
                        },
                    });
                },
                (error) => {
                    toast.error(`Failed to send message: ${error.text}`, {
                        position: 'top-right',
                        duration: 3000,
                        style: {
                            background: '#f44336',
                            color: '#fff',
                            borderRadius: '10px',
                            padding: '8px',
                        },
                    });
                    console.log('FAILED...', error.text);
                }
            );
    };


    return (
        <div >
            <div className='top-container'>
                <img src={contactImg} alt='contact-icon' style={{ height: '40px', margin: '3px' }} />
                <h1 className='contact-headng'>Contact</h1>

            </div>
            <p className='contact-para'>Feel free to reach out to me for any questions or opportunities!</p>

            <div className='form-container'>

                <form ref={form} onSubmit={sendEmail}  >
                    <h1>Email Me 📧</h1>

                    <input type="text" name="from_name" placeholder='Your Name' className='field name' required />

                    <input type="email" name="from_email" placeholder='Your Email' className='field email' required />

                    <textarea name="message" placeholder='Message' className='field message' required />

                    <div className='btn-container'>
                        <button type='submit' value='send' className='btn-send'>Send</button>
                    </div>
                </form>
            </div>
            <Toaster />
        </div>
    )
}

export default Contact