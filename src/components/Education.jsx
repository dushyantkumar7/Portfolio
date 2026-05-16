import React from 'react';

const Education = () => {
    return (
        <section id="education" className="section alt-bg">
            <div className="container">
                <h2 className="section-title">Education & Certifications</h2>
                <div className="timeline">
                    <div className="timeline-item fade-in-up">
                        <div className="timeline-date">2024 – 2026</div>
                        <div className="timeline-content">
                            <h3>Master of Computer Applications</h3>
                            <p>Ajay Kumar Garg Engineering College, Ghaziabad</p>
                        </div>
                    </div>
                    <div className="timeline-item fade-in-up delay-100">
                        <div className="timeline-date">2021 – 2024</div>
                        <div className="timeline-content">
                            <h3>Bachelor of Computer Applications</h3>
                            <p>D.S. College, Aligarh</p>
                            <p className="score">Percentage: 70.78%</p>
                        </div>
                    </div>
                    <div className="timeline-item fade-in-up delay-200">
                        <div className="timeline-date">Certification</div>
                        <div className="timeline-content">
                            <h3>Introduction to Google Cloud Platform</h3>
                        </div>
                    </div>
                    <div className="timeline-item fade-in-up delay-300">
                        <div className="timeline-date">Platform</div>
                        <div className="timeline-content">
                            <h3>LeetCode</h3>
                            <p>leetcode.com/dushyantkumar7</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
