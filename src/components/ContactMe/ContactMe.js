import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import apiKeys from './apikeys';

const ContactMe = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = formData => {
    //     console.log(formData);
    // };
    const onSubmit = (formData, e) => {
        console.log(formData);
        e.preventDefault()// Prevents default refresh by the browser
        emailjs.sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
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
            {/* <form className=”form” onSubmit = {onSubmit}>
            service Id : service_ynp0vq5
            user id: user_bH6vMUhbc5uXgQ9sa9ouS
            template id: template_naeg3xt
            <p>Your Name:</p>
            <input name=’name’ type=”text” placeholder=”name…” className=”form__input” />
            <p>Subject:</p>
            <input name=’subject’ type=”text” placeholder=”Subject…” className=”form__input” />
            <p>Your Message:</p>
            <textarea name=’message’ type=”text” placeholder=”Your Message…” className=”form__input-message” ></textarea>
            <button className=”form__input — button”>Send Message</button>
        </form > */}

            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "50%" }} className="m-auto mt-5">
                <input className="form-control" placeholder="Name" {...register("name", { required: true })} />
                {errors.name && <span className='text-danger'>This field is required</span>}
                <br />
                <input className="form-control" placeholder="email" {...register("email", { required: true })} />
                {errors.email && <span className='text-danger'>This field is required</span>}
                <br />
                <input className="form-control" placeholder="Subject" {...register("subject", { required: true })} />
                {errors.subject && <span className='text-danger'>This field is required</span>}
                <br />
                <input className="form-control" placeholder="Your message please" {...register("message", { required: true })} />
                {errors.message && <span className='text-danger'>This field is required</span>}
                <br />
                <input className="form-control bg-light" type="submit" />
            </form>
        </div>
    );

};
export default ContactMe;
