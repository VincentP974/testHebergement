import React from 'react'
import "./Main.scss"

function Main(props) {
    const { children } = props || {}; // Ajout de la vérification pour props
    console.log('Children:', children);
    return (
        <div className='main'>{children}</div>
    );
}

export default Main