import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Navbar from './components/Navbar';
import Facebook from './page/Facebook';
import Google from './page/Google';
import Contact from './page/Contact';
import './App.css';

const App = () => {
    return (
        <Router>
            <header>
                <Navbar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/facebook" element={<Facebook />} />
                    <Route path="/google" element={<Google />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
