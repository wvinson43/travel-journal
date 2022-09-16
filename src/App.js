import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App () {
    const cards = data.map(item => <Card key={item.id} {...item} />) 
    /* spread item after mapping to eliminate from Card */
        return (
            <div>
                <Navbar />
                <div className="cards--list">
                    {cards}
                </div>
            </div>
    )
    
}
