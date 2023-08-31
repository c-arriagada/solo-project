import React, { useEffect, useState } from "react";
import Review from "./Review.jsx";
import mocha from '../assets/mocha1.jpg'


const Mocha = (props) => {
    const { description, created_at, name } = props;
    const [showReview, setReview] = useState(false); // state management to show review on click

    const handleClick = (e) => {
        e.preventDefault();
        console.log('The add review button was clicked.');
        setReview(true);
    }

    const handleSeeReviewsClick = (e) => {
        e.preventDefault();
        console.log('The see reviews button was clicked.');
        setReview(true);
    }

    return (
        <article className="mochaCard">
            { showReview ?
            <Review/> :
            <div className="mochaInnerCard">
            <div className="photoContainer">
                <img src={mocha} alt="mocha photo" />
            </div>
            <div className="mochaDetailList">
                <p className="mochaDetail">{created_at}</p>
                <p className="mochaRestaurant">{name}</p>
                <p className="mochaDetail">{description}</p>
            </div>
            <div className="buttonContainer">
            <button type="button" className='reviewButton' onClick={handleClick}>Add Review </button>
            <button type="button" className='displayReviewsButton' onClick={handleSeeReviewsClick}>See Reviews </button>
            </div>
            </div> 
            }
        </article>
    );
}

export default Mocha;