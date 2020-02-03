import React from 'react';
import './static/css/PremiumSection.css';
import PremiumSectionContent from './PremiumSectionContent';

const PremiumSection = (props) => {
    return (
        <div>
            <div className="premium-header">
                <h2 className="premium-header-marker">Premium</h2>
            </div>
            <PremiumSectionContent />
            <div className="premium-footer">
                <span className="premium-footer-words">></span>
                <span className="premium-footer-words">READ MORE</span>
            </div>
        </div>
    );
};

export default PremiumSection;
