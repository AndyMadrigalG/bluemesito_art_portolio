import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';
import './App.css';

// Lazy load pages
const About = React.lazy(() => import('./Pages/About'));
const Contact = React.lazy(() => import('./Pages/Contact'));
const Gallery = React.lazy(() => import('./Pages/Gallery'));
const Illustrations = React.lazy(() => import('./Pages/Illustrations'));
const AnimalCharacters = React.lazy(() => import('./Pages/AnimalCharacters'));
const Fanarts = React.lazy(() => import('./Pages/Fanarts'));
const Sketches = React.lazy(() => import('./Pages/Sketches'));

// Loading component
const LoadingFallback = () => <div style={{padding: '2rem', textAlign: 'center'}}>Cargando...</div>;

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        {/* Página de Inicio (HeroSection actual) */}
                        <Route path="/" element={<HeroSection />} />
                        
                        {/* Nuevas Páginas */}
                        <Route path="/about" element={<Suspense fallback={<LoadingFallback />}><About /></Suspense>} />
                        <Route path="/contact" element={<Suspense fallback={<LoadingFallback />}><Contact /></Suspense>} />
                        <Route path="/gallery" element={<Suspense fallback={<LoadingFallback />}><Gallery /></Suspense>} />
                        <Route path="/illustrations" element={<Suspense fallback={<LoadingFallback />}><Illustrations /></Suspense>} />
                        <Route path="/animal-characters" element={<Suspense fallback={<LoadingFallback />}><AnimalCharacters /></Suspense>} />
                        <Route path="/fanarts" element={<Suspense fallback={<LoadingFallback />}><Fanarts /></Suspense>} />
                        <Route path="/sketches" element={<Suspense fallback={<LoadingFallback />}><Sketches /></Suspense>} />

                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;