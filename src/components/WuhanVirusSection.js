import React from 'react';
import './static/css/WuhanVirusSection.css';
import WuhanVirusSectionHeader from './WuhanVirusSectionHeader';
import WuhanVirusSectionContent from './WuhanVirusSectionContent';

const WuhanVirusSection = (props) => {
    return (
        <div>
            <WuhanVirusSectionHeader />
            <WuhanVirusSectionContent />
            <div className="wuhan-virus-section-footer">
                <span className="wuhan-virus-section-footer-words">></span>
                <span className="wuhan-virus-section-footer-words">READ MORE</span>
            </div>
        </div>
    );
};

export default WuhanVirusSection;
