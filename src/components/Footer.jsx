import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <p>© 2025 SkillHub. All Rights Reserved.</p>
                <div className="footer-contact d-flex flex-column flex-lg-row align-items-center justify-content-center">
                    <h5 className="mb-2 mb-lg-0">Contact Us:</h5>
                    <p><i className="fa-solid fa-envelope"></i> Email: skillhub@gmail.com</p>
                    <p><i className="fa-solid fa-phone"></i> Phone: +91 9972143214</p>
                    <p><i className="fa-solid fa-location-dot"></i> Address: Bangalore, India</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;