import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);
    useEffect(() => {
        // Scroll Animations (Intersection Observer)
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-up').forEach(el => {
            observer.observe(el);
        });

        // Cleanup
        return () => observer.disconnect();
    }, []); // Run once on mount

    return (
        <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
