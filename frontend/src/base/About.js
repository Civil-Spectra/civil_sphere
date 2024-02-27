import React from 'react';
import './HomePage.css';  // Make sure to create this CSS file in the same folder

const About = () => {
    const handleClick = () => {
        // Redirect to the home page
        window.location.href = "/";
    };

    return (
        <div className="main-content">
            <h1>Civil Spectra Team</h1>
            <p>Nishan Thapa</p>
            <p>Nav Paneru</p>
            <p><a href="mailto:nishan.idea23@gmail.com">civilspectra@gmail.com</a></p>
            <button  onClick={handleClick}>Go back to homepage</button>
            
            
        </div>
    );
};

export default About;

