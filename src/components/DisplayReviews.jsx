import React, { useEffect } from "react";


const DisplayReviews = (props) => {
    const {rating, comment, created_at, created_by} = props;


    return (
        <section className="reviewDisplay">
                <p className="reviesDisplayDetail">{created_at}</p>
                <p className="reviesDisplayDetail"><strong>Rating:</strong><br></br> {rating} </p>
                <p className="reviesDisplayDetail"><strong>Comment:</strong><br></br> {comment}</p>
                <p className="reviesDisplayDetail"><strong>Created by:</strong><br></br> {created_by}</p>
        </section>
    )
};

export default DisplayReviews;