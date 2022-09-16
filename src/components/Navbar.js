import React from "react"
import travelLogo from "../images/travel.svg"

export default function Navbar() {
    return (
        <nav>
            <img src={travelLogo} className="nav--logo" />
            <h2>my travel journal</h2>
        </nav>
    )
}