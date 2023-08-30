import React, { useEffect, useState } from "react";
import mocha from '../assets/mocha1.jpg'


const Mocha = () => {
    return (
        <article className="mochaCard">
            <div className="photoContainer">
                <img src={mocha} alt="mocha photo" />
            </div>
            <div className="mochaDetailList">
                <p className="mochaDetail">Description: Delicious chocolaty mocha!</p>
                <p className="mochaDetail">Location: The Perfect Cup</p>
            </div>
        </article>
    );
}

export default Mocha;