import React from 'react';
import './About.css'; // Make sure to style the page with appropriate CSS

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>

            <section className="about-section">
                <h2 className="about-subtitle">Welcome to Missty</h2>
                <p className="about-text">
                    At <strong>Missty</strong>, we believe in celebrating the beauty, strength, and individuality of women.
                    Our journey started with a simple idea: to offer high-quality, stylish, and affordable products that cater to the modern woman’s lifestyle.
                    Whether you're looking for fashion-forward clothing, elegant accessories, or beauty essentials, we are here to meet all your needs.
                </p>
            </section>

            <section className="about-section">
                <h2 className="about-subtitle">Our Mission</h2>
                <p className="about-text">
                    Our mission is to empower women by providing them with products that not only enhance their beauty but also reflect their confidence and uniqueness.
                    We curate our collections with care, ensuring that every piece aligns with our values of quality, style, and affordability.
                </p>
            </section>

            <section className="about-section">
                <h2 className="about-subtitle">Why Shop With Us?</h2>
                <p className="about-text">
                    - A wide variety of trendy and timeless products, from fashion to beauty.
                    <br />
                    - A seamless shopping experience with fast delivery.
                    <br />
                    - Exceptional customer service dedicated to making sure you're satisfied with your purchase.
                    <br />
                    - We believe in the power of self-expression and strive to help women feel their best every day.
                </p>
            </section>

            <section className="about-section">
                <h2 className="about-subtitle">Join Our Community</h2>
                <p className="about-text">
                    At <strong>Missty</strong>, we’re more than just a store — we’re a community of women who inspire and uplift each other. Follow us on social media for the latest trends, tips, and exclusive deals.
                    Let’s embrace beauty, confidence, and individuality together.
                </p>
            </section>
        </div>
    );
}

export default About;
