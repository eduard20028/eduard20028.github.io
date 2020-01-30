import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import MovieService from './services';
import {MovieServiceProvider} from './components/movie-service-context';
import ErrorBoundry from './components/error-boundry';

import { ConnectedRouter } from 'connected-react-router'
import { history } from './configure-store'

import App from './components/app';

const movieService = new MovieService();

ReactDOM.render(
    <MovieServiceProvider value={movieService}>
        <ConnectedRouter history={history}> 
            <ErrorBoundry>
                <Router>
                    <App/>
                </Router>
            </ErrorBoundry>
        </ConnectedRouter>
    </MovieServiceProvider>,
    document.getElementById('root')
)
