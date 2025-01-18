import React from 'react';
import './Footer.css'; // Add CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-title">Missty eCommerce</h3>
                    <p className="footer-description">
                        Your one-stop shop for all things fashionable and trendy. Explore our collection of clothing, accessories, and beauty products.
                    </p>
                </div>
                <div className="footer-section">
                    <h4 className="footer-subtitle">Important Pages</h4>
                    <ul className="footer-links">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-conditions">Terms & Conditions</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4 className="footer-subtitle">Follow Us</h4>
                    <ul className="footer-social">
                        <li><a href="https://www.facebook.com/Missty" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.instagram.com/Missty" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://www.twitter.com/Missty" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://www.pinterest.com/Missty" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Mistty eCommerce | All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
