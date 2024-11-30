import React from 'react'
import "./ApartmentHeader.scss"

export function ApartmentHeader(props) {
    const { selectedLocation } = props;
    const { name } = selectedLocation.host;
    const [firstName, lastName] = name.split(" ");

    if (!selectedLocation) {
        return null;  // On ne retourne rien tant que selectedLocation n'est pas prêt
    }
    return (
        <div className="apartment_header">
            <div className="apartment_title">
                <h1> {selectedLocation.title}</h1>
                <h2>{selectedLocation.location}</h2>
                <div className="tags">
                    {selectedLocation.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    )
                    )}
                </div>
            </div>
            <div className="apartment_owner">
                <div className="apartment_owner_details">
                    <h3>
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                    </h3>
                    <div className="apartment_owner_badge">
                        <img src={selectedLocation.host.picture} />
                    </div>
                </div>
                <div className="apartment_owner_stars">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <span key={num} className={props.selectedLocation.rating >= num ? "on" : ""}><i class="fa-solid fa-star"></i></span>
                    ))}
                </div>
            </div>

        </div>
    )
}

