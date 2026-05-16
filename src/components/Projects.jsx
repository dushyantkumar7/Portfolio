import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    <div className="project-card fade-in-up">
                        <div className="project-info">
                            <h3>SmartHire System</h3>
                            <p className="tech-stack">Claude API — React — MySQL — Java 17 — Spring Boot 3.2 — Spring AI</p>
                            <ul>
                                <li>Built an AI recruitment platform for intelligent resume screening and candidate evaluation.</li>
                                <li>Integrated Anthropic Claude API with Spring AI for resume understanding, scoring, and job-role matching.</li>
                                <li>Developed an automated PDF resume parsing pipeline using Apache PDFBox.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="project-card fade-in-up delay-100">
                        <div className="project-info">
                            <h3>AI Resume Analyzer</h3>
                            <p className="tech-stack">Python — Scikit-learn — NLP — Pandas</p>
                            <ul>
                                <li>Built a machine learning pipeline for automated candidate-job matching.</li>
                                <li>Applied NLP preprocessing including tokenization, text cleaning, and feature extraction.</li>
                                <li>Developed a relevance scoring model for ranking candidates and supporting decision-making.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="project-card fade-in-up delay-200">
                        <div className="project-info">
                            <h3>Chatbot / LLM Assistant</h3>
                            <p className="tech-stack">Python — OpenAI API / Claude API — NLP</p>
                            <ul>
                                <li>Developed a conversational AI assistant for automated query resolution.</li>
                                <li>Designed prompt engineering workflows to improve response relevance.</li>
                                <li>Integrated LLM APIs for natural language interaction across use cases.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
