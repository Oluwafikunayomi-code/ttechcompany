import React, { useState } from 'react'
import "./Contact.css"
import { contacts } from '../../data'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Ttech Electrical',
            from_message: message,
        };

        try {

            const response = await emailjs.send(
                'service_okj3mn7',
                'template_hik4fr7',
                templateParams,
                'wu2aWT1pZOrMtPcDA'
            );

            console.log(response);

            alert("Message sent successfully!");

            setName('');
            setEmail('');
            setMessage('');

        } catch (error) {
            console.error(error);
            alert("Failed to send message");
        }
    };

    return (
        <section id='contact'>
            <div className="container">
                <div className="column">
                    {
                        contacts.map((contact,index) =>(
                            <div className="contact__info" key={index}>
                                <div className="icon__container">{contact.icon}</div>
                                <div className="details">
                                    <p className="text__muted">{contact.name}</p>
                                    <h3 className="value" address-group>
                                        {Array.isArray(contact.value) ? (
                                            contact.value.map((item, i) => (
                                                <p key={i} className="address-line">{item}</p>
                                            ))
                                        ) : (
                                            contact.value
                                        )}
                                    </h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="form">
                    <div className="form__top">
                        <h3 className="sub__title g-text">Keep In Touch</h3>
                        <p>
                            We are ready to offer our service, send us your details and its done.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className='form__middle'>
                        <div className="row">
                            <input 
                            type="text" 
                            placeholder='Full name' 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            name='fullname' 
                            className='control' />
                        </div>
                        <div className="row">
                            <input 
                            type="email" 
                            placeholder='Email address'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)} 
                            name='email' 
                            className='control' />
                        </div>
                        <textarea 
                        name="message" 
                        id="" 
                        cols={30} 
                        rows={5} 
                        placeholder='Your message' 
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        className='control'></textarea>
                        <div className="form__bottom">
                            <button type='submit' className="btn btn__primary">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact