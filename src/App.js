import React from 'react';
import Header from './components/Header';
import TopStories from './components/TopStories';
import Banner from './components/Banner';
import WuhanVirusSection from './components/WuhanVirusSection';
import PremiumSection from './components/PremiumSection';

const App = (props) => {
    return (
        <div>
            <Header />
            <TopStories />
            <Banner />
            <WuhanVirusSection />
            <PremiumSection />
        </div>
    );
};

export default App;