import React from 'react';
import './Header.css';
import HeaderItem from './HeaderItem'
import Navbar from './Navbar';
import Offer from './Offer';

const Header = (props) => {
    return (
        <div>
            <div>
                <ul className="headerleft">
                    <HeaderItem text="EDITION:" />
                    <HeaderItem text="SINGAPORE" />
                    <HeaderItem text="INTERNATIONAL" />
                    <HeaderItem text="|" />
                    <HeaderItem text="ST CLASSIFIED" />
                    <HeaderItem text="|" />
                    <HeaderItem text="ST+ REWARDS" />
                    <HeaderItem text="|" />
                    <HeaderItem text="MORE" />
                </ul>
                <ul className="headerright">
                    <HeaderItem text="LOG IN" />
                    <HeaderItem text="|" />
                    <HeaderItem text="SUBSCRIBE" />
                    <HeaderItem text="|" />
                    <HeaderItem text="PRINT EDITION" />
                    <HeaderItem text="|" />
                    <HeaderItem text="EPAPER" />
                </ul>
            </div>
            <div>
                <div className="sitename"></div>
            </div>
            <div>
                <Navbar />
            </div>
            <div>
                <Offer />
            </div>
        </div>
    );
};

export default Header;
