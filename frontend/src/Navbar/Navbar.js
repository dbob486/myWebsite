import React from 'react';
import './Navbar.css';
import {
    Route,
    NavLink,
    BrowserRouter as Router
} from 'react-router-dom';
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//page imports
import HomePage from '../HomePage/HomePage';

const Navbar = () => {
    return (
        <Router>

            <div className='Navbar'>
                <h1> Daniel Garcia </h1>
                <p> <FontAwesomeIcon className='Space' icon={faSpaceShuttle} /></p>
                <ul className="Navbar-Menu">
                    <li > <NavLink exact to='/'
                        className="Nav_link"
                        activeClassName="activeRoute"
                        activeStyle={{ color: ' #001f3f ' }} > Home </NavLink> </li>
                    <li > <NavLink to='/portfolio'
                        className="Nav_link"
                        activeClassName="activeRoute"
                        activeStyle={{ color: ' #001f3f ' }}> Portfolio </NavLink></li>
                    <li > <NavLink to='/resume'
                        className="Nav_link"
                        activeClassName="activeRoute"
                        activeStyle={{ color: ' #001f3f ' }}> Resume </NavLink></li>
                </ul>
            </div>

            <Route exact path='/'>
                <HomePage />
            </Route>
            <Route path='/portfolio'></Route>
            <Route path='/resume'></Route>

        </Router>
    )
}

export default Navbar;