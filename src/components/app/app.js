import React, { Component } from 'react';
import Header from '../header';
import {Switch, Route, Redirect} from 'react-router-dom';
import './app.css'
import {MoviePage, TvPage, HomePage} from '../pages';
import MovieService from '../../services';
import { MovieItems, TvItems, TopRatedItems, UpcomingItems } from '../body-items';
export default class App extends Component {
   
    state = {
        movieService: new MovieService()
    }
    render() {
        return (
            <main role="main"> 
                <Header/>
                <Switch>
                    <Route path="" exact component={HomePage}/>

                    <Route path="/movies/:id" render={({match}) => {
                        const {id} = match.params;
                        return <MoviePage itemId={id}/>
                    }}/>
                    <Route path="/movies" component={MovieItems} exact/>
                    
                    <Route path="/top-rated/:id" render={({match}) => {
                        const {id} = match.params;
                        return <TopRatedItems itemId={id}/>
                    }}/>
                    <Route path="/top-rated" component={TopRatedItems} exact/>

                    <Route path="/upcoming/:id" render={({match}) => {
                        const {id} = match.params;
                        return <UpcomingItems itemId={id}/>
                    }}/>
                    <Route path="/upcoming" component={UpcomingItems} exact/>

                    <Route path="/tv/:id" render={({match}) => {
                        const {id} = match.params;
                        return <TvPage itemId={id}/>
                    }}/>
                    <Route path="/tv" component={TvItems} exact/>

                    <Redirect to='/'/>
                </Switch>
            </main>
        );
    }
}

