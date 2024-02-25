import React from 'react';
//import './App.css'

const StoreCard = ({ name, image, location, link }) => {
    return (
        <div className="store-card">
            <img src={image} alt={name} className="store-image" />
            <div className="store-details">
                <h2>{name}</h2>
                <p>{location}</p>
                <a href={link}>
                    <button className="visit-website-button">Visit Website</button>
                </a>
            </div>
        </div>
    );
};

export default StoreCard;