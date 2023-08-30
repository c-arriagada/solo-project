import React, { useEffect, useState } from "react";
import mocha from '../assets/mocha1.jpg'


const Mocha = (props) => {
    const { description, created_at, location } = props;

    return (
        <article className="mochaCard">
            <div className="photoContainer">
                <img src={mocha} alt="mocha photo" />
            </div>
            <div className="mochaDetailList">
                <p className="mochaDetail">{created_at}</p>
                <p className="mochaLocation">{location}</p>
                <p className="mochaDetail">{description}</p>
            </div>
        </article>
    );
}

export default Mocha;