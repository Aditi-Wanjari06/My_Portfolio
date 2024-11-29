import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
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
                    console.log('SUCCESS!');
                    console.log("message sent")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='form-container'>
            <form ref={form} onSubmit={sendEmail}  >
            <h1>Contact Me</h1>
           
                <input type="text" name="from_name" placeholder='Your Name' className='field name' required/>
               
                <input type="email" name="from_email"  placeholder='Your Email' className='field email' required />
                
                <textarea  name="message" placeholder='Message' className='field message' required />
               
                <div className='btn-container'>
              <button type='submit' value='send'  className='btn-send'>Send</button>
              </div>
            </form>
            </div>
        
    )
}

export default Contact