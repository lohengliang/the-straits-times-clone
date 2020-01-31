import React from 'react';
import './static/css/HeaderItem.css';

const HeaderItem = (props) => {
    return (
        <li className = "HeaderItem">
            {props.text}
        </li>
    );
};

export default HeaderItem;