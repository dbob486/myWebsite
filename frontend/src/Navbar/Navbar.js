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
                <h1>Daniel <FontAwesomeIcon className='Space' icon={faSpaceShuttle} /> Garcia</h1>
                <ul className="Navbar-Menu">
                    <li > <NavLink exact to='/'
                        className="Nav_link"
                        activeClassName="activeRoute"
                        activeStyle={{ color: 'teal' }}
                    > Home </NavLink> </li>
                    <li > <NavLink to='/about'
                        className="Nav_link"
                        activeClassName="activeRoute"
                        activeStyle={{ color: 'teal' }}
                    > About </NavLink></li>
                    <li > <NavLink to='/portfolio'
                        className="Nav_link"
                        activeClassName="activeRoute"
                        activeStyle={{ color: 'teal' }}> Portfolio </NavLink></li>
                    <li > <NavLink to='/resume'
                        className="Nav_link"
                        activeClassName="activeRoute"
                        activeStyle={{ color: 'teal' }}> Resume </NavLink></li>
                </ul>
            </div>

            <Route exact path='/'>
                <HomePage />
            </Route>
            <Route path='/about'></Route>
            <Route path='/portfolio'></Route>
            <Route path='/resume'></Route>

        </Router>
    )
}

export default Navbar;