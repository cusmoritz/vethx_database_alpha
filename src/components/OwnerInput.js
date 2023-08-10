import React from "react";

export const OwnerInput = () => {

    return (
        <div>
            <label htmlFor="owner-input-form">Input owner information:</label>
            <form className="owner-input-form">

            <label htmlFor="owner-first-name">First name:</label>
            <input className="owner-first-name" placeholder="Richard"></input>

            <label htmlFor="owner-last-name">Last name:</label>
            <input className="owner-last-name" placeholder="Nixon"></input>

            <label htmlFor="owner-phone-main">Main phone:</label>
            <input type="tel" className="owner-phone-main"></input>

            <label htmlFor="owner-phone-secondary">Secondary phone:</label>
            <input type="tel" className="owner-phone-secondary"></input>

            <label htmlFor="owner-email">Email:</label>
            <input type="email" className="owner-email"></input>

            </form>
        </div>
    )
}