import React from 'react'
import "./Footer.scss"

function Footer() {
    return (
        <div className='footer'>
            <div className='logo'>
                <img src='src\assets\images\LOGOFooter.png' alt='Logo' />
            </div>
            <div className='text'>
                © 2020 Kasa. All rights reserved
            </div>
        </div>
    )
}

export default Footer