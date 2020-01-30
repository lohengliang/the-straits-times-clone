import React from 'react';
import './HeaderItem.css';

const HeaderItem = (props) => {
    return (
        <li className = "HeaderItem">
            {props.text}
        </li>
    );
};

export default HeaderItem;