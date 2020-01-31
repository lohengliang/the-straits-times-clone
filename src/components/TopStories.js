import React from 'react';
import './static/css/TopStories.css';
import TopStoriesHeader from './TopStoriesHeader';
import TopStoriesContent from './TopStoriesContent';

const TopStories = (props) => {
    return (
        <div>
            <TopStoriesHeader />
            <TopStoriesContent />
            <div className="top-stories-footer">
                <span className="top-stories-footer-words">></span>
                <span className="top-stories-footer-words">MORE HEADLINES</span>
            </div>
        </div>
    );
};

export default TopStories;
