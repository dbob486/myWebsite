import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <h1>Daniel Garcia</h1>
            <ul>
                <li className='Special'> Home</li>
                <li className='Navbarli'> About</li>
                <li className='Navbarli'> Skills</li>
                <li className='Navbarli'> Portfolio</li>
                <li className='Navbarli'> Contact</li>
                <li className='Navbarli'> Resume</li>
            </ul>
        </div>
    )
}

export default Navbar;