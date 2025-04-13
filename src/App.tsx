import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />

            {/* Add this <main> wrapping your content */}
            <main>
                <HeroSection />
            </main>

            <Footer />
        </div>
    );
};

export default App;
