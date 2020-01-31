import React from 'react';
import './static/css/TopStoriesHeader.css';
import TopStoriesHeaderDetails from './TopStoriesHeaderDetails';

const TopStoriesHeader = (props) => {
    return (
        <div className="top-stories-header">
            <h2 className="top-stories-title">TOP STORIES</h2>
            <ul className="top-stories-details-list">
                <TopStoriesHeaderDetails text="FRIDAY JANUARY 31 2020" />
                <TopStoriesHeaderDetails text="|" />
                <TopStoriesHeaderDetails text="1-HR PM2.5: 5-15 WINDY" />
                <TopStoriesHeaderDetails text="SINGAPORE 34°C/24°C" />
                <TopStoriesHeaderDetails text="|" />
                <TopStoriesHeaderDetails text="ST INDEX 3,173.840 ▲ +3.160" />
            </ul>
        </div>
    );
};

export default TopStoriesHeader;
