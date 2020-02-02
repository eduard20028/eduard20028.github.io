import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as HashRouter} from 'react-router-dom';
import MovieService from './services';
import {MovieServiceProvider} from './components/movie-service-context';
import ErrorBoundry from './components/error-boundry';

import App from './components/app';

const movieService = new MovieService();

ReactDOM.render(
    <MovieServiceProvider value={movieService}>
            <ErrorBoundry>
                <HashRouter>
                   <App/>
                </HashRouter>
            </ErrorBoundry>
    </MovieServiceProvider>,
    document.getElementById('root')
)
