import React, { useState } from "react";
import "./Slider.css";

const Slider = () => {
    const images = [
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?t=st=1733507795~exp=1733511395~hmac=07aafe8e48bb3615f0b75193bdb20542173d2ce8b670397f643c7b8ddd6cb310&w=900",
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?t=st=1733507795~exp=1733511395~hmac=07aafe8e48bb3615f0b75193bdb20542173d2ce8b670397f643c7b8ddd6cb310&w=900",
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?t=st=1733507795~exp=1733511395~hmac=07aafe8e48bb3615f0b75193bdb20542173d2ce8b670397f643c7b8ddd6cb310&w=900",
        "https://source.unsplash.com/1920x1080/?women,bags,4",
        "https://source.unsplash.com/1920x1080/?women,bags,5",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slider">
            <div
                className="slider-images"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((image, index) => (
                    <img
                        src={image}
                        alt={`Women's bag ${index + 1}`}
                        className="slider-image"
                        key={index}
                    />
                ))}
            </div>
            <div className="slider-buttons">
                <button onClick={handlePrev}>&lt;</button>
                <button onClick={handleNext}>&gt;</button>
            </div>
        </div>
    );
};

export default Slider;
