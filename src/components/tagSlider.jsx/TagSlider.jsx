import React from "react";
import "./TagSlider.css";

const TagSlider = () => {
    const tags = [
        "Handbags",
        "Tote Bags",
        "Clutches",
        "Crossbody Bags",
        "Shoulder Bags",
        "Sling Bags",
        "Leather Bags",
        "Canvas Bags",
        "Designer Bags",
        "Luxury Bags",
        "Casual Bags",
        "Evening Bags",
    ];

    // Join all tags into a single string to ensure continuous scrolling
    const tagText = tags.join(" • ");

    return (
        <div className="tag-slider">
            <div className="tag-row">
                <span>{tagText} • {tagText}</span>
            </div>
           
        </div>
    );
};

export default TagSlider;
