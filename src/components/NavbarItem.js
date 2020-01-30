import React from 'react';
import './NavbarItem.css';

const NavbarItem = (props) => {
    return (
        <li className = "navbaritem">
            {props.text}
        </li>
    );
};

export default NavbarItem;