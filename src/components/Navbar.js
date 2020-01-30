import React from 'react';
import './Navbar.css';
import NavbarItem from './NavbarItem';

const Navbar = (props) => {
    return (
        <div className="navbar">
            <ul className="navbarlist">
                <NavbarItem text="SINGAPORE"/>
                <NavbarItem text="POLITICS"/>
                <NavbarItem text="ASIA"/>
                <NavbarItem text="WORLD"/>
                <NavbarItem text="VIDEOS"/>
                <NavbarItem text="MULTIMEDIA"/>
                <NavbarItem text="LIFESTYLE"/>
                <NavbarItem text="FOOD"/>
                <NavbarItem text="FORUM"/>
                <NavbarItem text="OPINION"/>
                <NavbarItem text="BUSINESS"/>
                <NavbarItem text="SPORT"/>
                <NavbarItem text="MORE"/>
            </ul>
        </div>
    );
};

export default Navbar;