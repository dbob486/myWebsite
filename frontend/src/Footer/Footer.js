import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='Footer'>
            <h2> Contact me </h2>
            <br/>
            <div className='ContactInfo'>
                <h4>Name: </h4>
                <p>Daniel Garcia</p>
                <br />
                <h4>Email: </h4>
                <p> 
                    <a href="mailto:daniel.garcia.programming@gmail.com">daniel.garcia.programming@gmail.com </a>
                </p>

            </div>
        </div>
    )
}

export default Footer;