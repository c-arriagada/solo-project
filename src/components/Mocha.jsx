import React, { useEffect, useState } from "react";
import Review from "./Review.jsx";
import DisplayReviews from './DisplayReviews.jsx';
import mocha_0 from '../assets/mocha0.jpg';
import mocha_1 from '../assets/mocha1.jpg';
import mocha_2 from '../assets/mocha2.jpg';


const Mocha = (props) => {
    const { description, created_at, name, mocha_id} = props;
    // const [showReview, setReview] = useState(false); // state management to show review on click
    // const [displayReview, setDisplayReview] = useState(false);
    const [display, setDisplay] = useState("product"); // display will change based on this state - 3 possible states

    const handleClick = (e) => {
        e.preventDefault();
        console.log('The add review button was clicked.');
        // setReview("true");
        setDisplay("addReview");
    }

    const handleSeeReviewsClick = (e) => {
        e.preventDefault();
        console.log(e.target.tagName);
        console.log('The see reviews button was clicked.');
        // setDisplayReview(true);
        // setReview(false);
        setDisplay("seeReview");
    }

    useEffect(() => {
        
    });

    const exampleReview = [
        {
            "id": 1,
            "rating": 5,
            "comment": "Lovely combo of coffee and chocolate",
            "mocha_id": "2",
            "created_at": "2023-08-31T21:23:53.232Z",
            "created_by": "Caheri"
        }
    ];

    return (
        <article className="mochaCard"> 
        { { 
            'product':
            <div className="mochaInnerCard">
            <div className="photoContainer">
                <img src={mocha_1} alt="mocha photo" />
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
            </div>,
            'addReview': <Review />,
            'seeReview': exampleReview.map((el, index) => {
                return <DisplayReviews //don't forget to return
                key={`review ${index}`}
                rating={el.rating} 
                comment={el.comment} 
                created_by={el.created_by} 
                created_at={new Date(el.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}/>
            })
            } [display]
        }
        </article>
    );
}

export default Mocha;