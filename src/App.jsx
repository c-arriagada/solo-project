import React, { Component } from 'react';
import Mocha from './components/Mocha.jsx';
import './stylesheets/styles.css';

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

class App extends Component {
    render() {
        return (
            <div>
                <h1>Mocha App</h1>
                <header>
                    <button type="button" className='reviewButton'>Add Review</button>
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
}

export default App;