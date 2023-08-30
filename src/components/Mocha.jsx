import React, { useEffect, useState } from "react";
import mocha from '../assets/mocha1.jpg'


const Mocha = () => {
    return (
        <article className="mochaCard">
            <div className="photoContainer">
                <img src={mocha} alt="mocha photo" />
            </div>
            <div className="mochaDetailList">
                <p className="mochaLocation">The Perfect Cup</p>
                <p className="mochaDetail">Delicious chocolaty mocha!</p>
            </div>
        </article>
    );
}

export default Mocha;