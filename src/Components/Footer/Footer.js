import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <div className='footer-cont'>
            <div className='ft-left-cont'>
                <img src='./assets/svg/logo.svg' alt='GlossedByK' style={{ height: '25px' }} />
                <div className='ft-link-list-cont'>
                    <Link to='/'>Home</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='ft-social-cont'>
                    <h1 className='ft-social-header'>Follow Us</h1>
                    <a href='https://www.instagram.com/glossed_byk/'>
                        <div className='insta-cont'>
                            <i class="fab fa-instagram fa-lg"></i>
                        </div>
                    </a>
                </div>
            </div>
            <div className='ft-middle-cont'>

            </div>
            <div className='ft-right-cont'>
                <ContactForm />
            </div>
        </div>
    );
}

function ContactForm() {
    return (
        <div className='contact-cont' >
            <h1 className='contact-header'>Contact Us</h1>
            <form className='contact-form'>
                <div className='ct-info-cont'>

                    <div>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' id='name'></input>
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' id='email'></input>
                    </div>
                </div>
                <div className='ct-message-cont'>
                    <label htmlFor='message'>Message</label>
                    <textarea type='' name='message' id='message' rows='10'></textarea>
                </div>
            </form>
        </div>
    );
}