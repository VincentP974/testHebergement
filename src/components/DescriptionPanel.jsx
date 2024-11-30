import React, { useState } from 'react';
import "./DescriptionPanel.scss";

export function DescriptionPanel(props) {
    const [isContentVisible, setIsContentVisible] = useState(false);

    // Fonction pour basculer la visibilité du contenu
    const toggleContent = () => {
        setIsContentVisible(!isContentVisible);
    };

    return (
        <div className="description_panel">
            <p className='description_header' onClick={toggleContent}>
                <span>{props.title}</span>
                {/* Chevron qui change de direction selon l'état */}
                <i className={`fa-solid ${isContentVisible ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </p>
            {/* Ajout d'une classe dynamique pour gérer les animations */}
            <div className={`description_content ${isContentVisible ? 'show' : 'hide'}`}>
                {props.content}
            </div>
        </div>
    );
}