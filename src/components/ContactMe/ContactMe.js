import React from 'react';
// import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import apiKeys from '../../saveComponents/apikeys';
import './ContactMe.css';

const ContactMe = () => {
    const onSubmit = (e) => {
        e.preventDefault() // Prevents default refresh by the browser
        emailjs.sendForm(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
            .then(result => {
                alert('Message Sent, I\'ll get back to you shortly', result.text);
                console.log(apiKeys.TEMPLATE_ID)
            },
                error => {
                    alert('An error occured, Plese try again', error.text)
                })
    };

    return (
        <div>
            <h3 className="top">Get in Touch !</h3>
            <p className="top">Drop your message, please. I will get back to you.</p>
            <div style={{ marginTop: '20px', marginLeft: '100px', marginRight: '100px'}}>
                <form className='form p-2' onSubmit={onSubmit}>
                   
                    <h5 className="headings">Your Name:</h5>
                    <input name='name' type="text" placeholder=" Enter your name here. . . " className="form__input form-control inputs" />
                    <br />
                    <h5 className="headings">Your Email:</h5>
                    <input name='email' type="text" placeholder="Enter your email here . . ." className="form__input form-control inputs" />
                    <br />
                    <h5 className="headings">Subject:</h5>
                    <input name='subject' type="text" placeholder="Subject,please . . . " className="form__input form-control inputs" />
                    <br />
                    <h5 className="headings">Your Message:</h5>
                    <textarea name='message' type="text" placeholder="Your Message, please . . . " className="form__input-message form-control inputs" ></textarea>
                    <br />
                    <button className="form__input button btn btn-light btn-lg">Send Message</button>
                </form >
            </div>
        </div>

    );

};
export default ContactMe;
