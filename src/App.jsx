import React, { Component } from 'react';
import Mocha from './components/Mocha.jsx';
import './stylesheets/styles.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Mocha App</h1>
                <header>
                    <button type="button" className='reviewButton'>Add Review</button>
                </header>
                <div className='mochasContainer'>
                < Mocha/>
                </div>
            </div>
        )
    }
}

export default App;