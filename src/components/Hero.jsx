import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <div className="hero-text fade-in-up">
                    <span className="greeting">Hello, I'm</span>
                    <h1>Dushyant Kumar</h1>
                    <p className="subtitle">Software Engineer & Java Developer</p>
                    <div className="cta-buttons">
                        <a href="#projects" className="btn primary">View My Work</a>
                        <a href="#contact" className="btn secondary">Contact Me</a>
                    </div>
                </div>
                <div className="hero-visual fade-in-up delay-200">
                    <div className="blob-wrapper">
                        <div className="blob"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
