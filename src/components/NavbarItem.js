import React from 'react';
import './static/css/NavbarItem.css';

const NavbarItem = (props) => {
    return (
        <li className = "navbaritem">
            {props.text}
        </li>
    );
};

export default NavbarItem;