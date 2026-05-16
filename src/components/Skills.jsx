import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="section alt-bg">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    <div className="skill-category fade-in-up">
                        <h3><i className="fas fa-code"></i> Programming Languages</h3>
                        <div className="tags">
                            <span>Python</span>
                            <span>Java</span>
                            <span>JavaScript</span>
                        </div>
                    </div>
                    <div className="skill-category fade-in-up delay-100">
                        <h3><i className="fas fa-robot"></i> AI / Machine Learning</h3>
                        <div className="tags">
                            <span>Machine Learning</span>
                            <span>Supervised Learning</span>
                            <span>Classification</span>
                            <span>Regression</span>
                            <span>NLP</span>
                        </div>
                    </div>
                    <div className="skill-category fade-in-up delay-200">
                        <h3><i className="fas fa-brain"></i> Generative AI</h3>
                        <div className="tags">
                            <span>Spring AI</span>
                            <span>Anthropic Claude</span>
                            <span>OpenAI API</span>
                            <span>Prompt Engineering</span>
                        </div>
                    </div>
                    <div className="skill-category fade-in-up delay-300">
                        <h3><i className="fas fa-server"></i> Backend</h3>
                        <div className="tags">
                            <span>Spring Boot</span>
                            <span>REST APIs</span>
                            <span>Hibernate</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                        </div>
                    </div>
                    <div className="skill-category fade-in-up delay-400">
                        <h3><i className="fas fa-database"></i> Databases & Tools</h3>
                        <div className="tags">
                            <span>MySQL</span>
                            <span>MongoDB</span>
                            <span>Git</span>
                            <span>GitHub</span>
                            <span>VS Code</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
