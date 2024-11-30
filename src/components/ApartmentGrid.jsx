import React, { useEffect, useState } from 'react'
import "./ApartmentGrid.scss"
import Apartment from './Apartment.jsx'

function ApartmentGrid() {
    const [apartments, setApartments] = useState([]);

    useEffect(fetchApartments, []); //useffect avec array vide pour charger le composant une seul fois au chargement de la page

    function fetchApartments() {
        fetch("/Logements.json")
            .then((res) => res.json())
            .then((res) => setApartments(res))
            .catch(console.error);
    }

    // Si les appartements ne sont pas encore chargés, on peut afficher un message de chargement ou un spinner.
    if (apartments.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className='grid'>
            {apartments.map((apartment) => (
                <Apartment title={apartment.title} imageUrl={apartment.cover} id={apartment.id} key={apartment.id} />
            ))}
        </div>
    )
}

export default ApartmentGrid