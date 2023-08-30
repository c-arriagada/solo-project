import React from "react";

const Review = (props) => {
    // const {isVisible} = props;

    return (
        <form className="add_review" action="">
            <label for="comment">Comment:</label><br/>
            <input type="text" id="comment" name="comment" /><br />
            <label for="rating">Rating:</label><br />
            <select name="rating" id="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select><br />
            <label for="created_by">Created by:</label><br/> 
            <input type="text" id="created_by" name="created_by" /><br /> 
            <input type="submit" value="Submit"/>
        </form>
    );
};



export default Review;