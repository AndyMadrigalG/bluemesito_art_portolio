import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';
import NotFound from './Pages/NotFound';
import './App.css';

// Lazy load pages
const About = React.lazy(() => import('./Pages/About'));
const Contact = React.lazy(() => import('./Pages/Contact'));
const CategoryPage = React.lazy(() => import('./Pages/CategoryPage'));

// Loading component
const LoadingFallback = () => <div style={{padding: '2rem', textAlign: 'center'}}>Cargando...</div>;

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                <Suspense fallback={<LoadingFallback />}>
                    <Routes>
                        {/* Página de Inicio (HeroSection actual) */}
                        <Route path="/" element={<HeroSection />} />
                        
                        {/* Nuevas Páginas */}
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/gallery/:category" element={<CategoryPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;