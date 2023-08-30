import React, { Component, useState } from 'react';
import Mocha from './components/Mocha.jsx';
import Review from './components/Review.jsx';
import './stylesheets/styles.css';

const App = () => {
    const [isVisible, setVisible] = useState(false);

    const exampleMochas = [
        {
            "id": 2,
            "created_at": "2023-08-23T00:10:25.000Z",
            "photo": "abc",
            "description": "Great mocha!",
            "restaurant_id": "1"
        },
        {
            "id": 3,
            "created_at": "2023-08-23T00:10:25.000Z",
            "photo": "abc",
            "description": "Delicous mochas!",
            "restaurant_id": "1"
        },
        {
            "id": 4,
            "created_at": "2023-08-30T03:16:39.077Z",
            "photo": "abc",
            "description": "Lovely combination of chocolate and coffee!",
            "restaurant_id": "1"
        },
        {
            "id": 5,
            "created_at": "2023-08-30T03:16:59.035Z",
            "photo": "abc",
            "description": "Soo good!",
            "restaurant_id": "1"
        }
    ]

    const handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
        setVisible(true);
    }

// class App extends Component {
    

    // deleted the render that surrounded this and went from class to const 
        return (
            <div>
                <h1>Mocha App</h1>
                <header>
                    <button type="button" className='reviewButton' onClick={handleClick}>Add Review {
                        isVisible && <Review/> // add review form renders when button is clicked
                    }</button>
                    
                </header>
                <div className='mochasContainer'>
                    {
                        exampleMochas.map((el, index) => {
                            return <Mocha 
                            key={`mocha ${index}`} 
                            description={el.description} 
                            created_at={el.created_at}
                            location={el.restaurant_id}/>
                        })
                    }
                </div>
            </div>
        )
}

export default App;