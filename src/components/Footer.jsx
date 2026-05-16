import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p>&copy; <span id="year">{new Date().getFullYear()}</span> Dushyant Kumar. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
