import React, { useEffect, useState } from 'react';
import { DescriptionPanel } from "../components/DescriptionPanel.jsx";
import './ApartmentPage.scss';
import { ApartmentHeader } from "../components/ApartmentHeader.jsx";
import { useLocation } from "react-router-dom";
import { ImageBanner } from '../components/ImageBanner.jsx';

export function ApartmentPage() {
    const location = useLocation(); // Récupère l'URL actuelle et les données passées via le state
    const [selectedLocation, setSelectedLocation] = useState(null); // State pour stocker l'appartement sélectionné

    useEffect(fetchApartmentData, []);

    function fetchApartmentData() {
        // Vérifier que location.state et location.state.apartmentId existent
        if (location.state && location.state.apartmentId) {
            fetch("/Logements.json")
                .then((res) => res.json())
                .then((locations) => {
                    // Recherche de l'appartement correspondant à l'ID
                    const selectedApartment = locations.find((loc) => loc.id === location.state.apartmentId);
                    setSelectedLocation(selectedApartment);
                })
                .catch(console.error);
        } else {
            // Si l'ID de l'appartement n'est pas trouvé, redirection vers la page 404
            window.location.href = "/404";
        }
    }

    // Si les données sont en cours de chargement, afficher un message
    if (!selectedLocation) return <div>...loading</div>;

    return (
        <div className='Apartment-page'>
            {/* Afficher les détails de l'appartement une fois que les données sont chargées */}
            <ImageBanner pictures={selectedLocation.pictures} />
            <ApartmentHeader selectedLocation={selectedLocation} />
            <div className="apartment_informations">
                <DescriptionPanel title="Description" content={selectedLocation.description} />
                <DescriptionPanel title="Equipements" content={selectedLocation.equipments.map((eq,i) => (
                    <li key={i}>{eq}</li>
                    ))} 
                    />
            </div>
        </div>
    );
}