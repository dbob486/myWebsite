import React from 'react';
import './Navbar.css';
import {
    Route,
    NavLink,
    BrowserRouter as Router
} from 'react-router-dom';
import { FaSpaceShuttle } from 'react-icons/fa';
//page imports
import HomePage from '../HomePage/HomePage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';

const Navbar = () => {
    return (
        <Router>

            <div className='Navbar'>
                <h1> Daniel Garcia </h1>
                <p> <FaSpaceShuttle className='Space' /> </p>
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
            <Route path='/portfolio'>
                <PortfolioPage />
            </Route>
            <Route path='/resume'></Route>

        </Router>
    )
}

export default Navbar;