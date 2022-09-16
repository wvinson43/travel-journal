import React from "react"
import mapPin from "../images/location-dot.svg"

export default function Card(props) {
    const {imageUrl, location, googleMapsUrl, title, startDate, endDate, description} = props
    /* destructured props to add clarity */
    return (
        <div className="card">
            <img src={imageUrl} className="card--image" />
            <div className="card--deets">
                <div className="card--destination">
                    <img src={mapPin} className="card--logo" />
                    <p>{location}</p>
                    <a className="card--map" href={googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{title}</h1>
                <p className="card--calendar">{startDate}-{endDate}</p>
                <p className="card--desc">{description}</p>
            </div>
        </div>
    )
}