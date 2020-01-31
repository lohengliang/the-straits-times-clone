import React from 'react';
import './static/css/TopStoriesHeaderDetails.css';

const TopStoriesHeaderDetails = (props) => {
    return (
        <li className="top-stories-header-details">{
            props.text}
        </li>
    );
};

export default TopStoriesHeaderDetails;
