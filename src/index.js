import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './resource/css/style.css'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';

const App = () => {
    return (
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

