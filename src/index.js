import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/resets.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/default.css';
import './css/index.css';
import './css/responsive.css';

import App from './App';
import { BlogProvider } from './context';


ReactDOM.render (
    <BlogProvider>
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>
    </BlogProvider>,
    document.getElementById('root')
);
