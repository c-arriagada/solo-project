import React, { Component, useState, useEffect } from 'react';
import Mocha from './components/Mocha.jsx';
import mochaLogo from './assets/mochaLogo.png';
import './stylesheets/styles.css';

const App = () => {
    const [isVisible, setVisible] = useState(false);
    const [mochas, setMochas] = useState([]);

    useEffect(() => {
        fetch('/mochas') //just need to include end point no need for <localhost:3000></localhost:3000>
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMochas(data);
            })
            .catch(error => console.log(error));
    }, []);

    // Mock data to populate mocha cards    
    // const exampleMochas = [
    //     {
    //         "id": 2,
    //         "created_at": "2023-08-23T00:10:25.000Z",
    //         "photo": "abc",
    //         "description": "Great mocha!",
    //         "restaurant_id": "1",
    //         "name":"The Perfect Cup"
    //     },
    //     {
    //         "id": 3,
    //         "created_at": "2023-08-23T00:10:25.000Z",
    //         "photo": "abc",
    //         "description": "Delicous mochas!",
    //         "restaurant_id": "1",
    //         "name":"The Perfect Cup"
    //     },
    //     {
    //         "id": 4,
    //         "created_at": "2023-08-30T03:16:39.077Z",
    //         "photo": "abc",
    //         "description": "Lovely combination of chocolate and coffee!",
    //         "restaurant_id": "1",
    //         "name":"The Perfect Cup"
    //     },
    //     {
    //         "id": 5,
    //         "created_at": "2023-08-30T03:16:59.035Z",
    //         "photo": "abc",
    //         "description": "Soo good!",
    //         "restaurant_id": "1",
    //         "name":"The Perfect Cup"
    //     }
    // ]

    // class App extends Component {
    // deleted the render that surrounded this and went from class to const 
    return (
        <div>
            <div className='header'>
                <img className="mochaLogo" src={mochaLogo} alt="" />
                <h1>Mocha App</h1>
            </div>
            <div className='mochasContainer'>
                {// add review form renders when button is clicked
                    mochas.map((el, index) => {
                        return <Mocha
                            key={`mocha ${index}`}
                            mocha_id={el.id}
                            description={el.description}
                            created_at={new Date(el.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            location={el.restaurant_id}
                            name={el.name} />
                    })
                }
            </div>
        </div>
    )
}

export default App;