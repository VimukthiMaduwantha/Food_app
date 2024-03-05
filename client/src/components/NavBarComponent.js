
import React, { useState } from 'react'
import '../styles/NavBarStyle.css'

function NavBarComponent() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="Navbar">
                <div className={`nav-items ${isOpen && "open"}`}>
                    <a href="/">Home</a>
                    <a href="/ourMenu">Our Menu</a>
                    <a href="/aboutUs">About Us</a>
                </div>
                <div
                    className={`nav-toggle ${isOpen && "open"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="bar"></div>
                </div>
            </div>
        </>
    )
}

export default NavBarComponent