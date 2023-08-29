import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx'; // needed to add jsx, if not it showed a compiled error

render(
    <App />, 
    document.getElementById('root')
);