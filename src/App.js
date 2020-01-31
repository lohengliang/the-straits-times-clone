import React from 'react';
import Header from './components/Header';
import TopStories from './components/TopStories';
import Banner from './components/Banner';
import WuhanVirusSection from './components/WuhanVirusSection';

const App = (props) => {
    return (
        <div>
            <Header />
            <TopStories />
            <Banner />
            <WuhanVirusSection />
        </div>
    );
};

export default App;