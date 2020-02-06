import React from 'react';
import Header from './components/Header';
import TopStories from './components/TopStories';
import Banner from './components/Banner';
import WuhanVirusSection from './components/WuhanVirusSection';
import PremiumSection from './components/PremiumSection';
import Footer from './components/Footer';

const App = (props) => {
    return (
        <div>
            <Header />
            <TopStories />
            <Banner />
            <WuhanVirusSection />
            <PremiumSection />
            <Footer />
        </div>
    );
};

export default App;