import React from 'react';
import { withMovieService } from '../../hoc';
import ItemPage from '../item-page/';

const MoviePage = ({getMovie, getSimilarMovies, itemId}) => {
    return (
        <ItemPage getData={getMovie} getSimilar={getSimilarMovies} itemId={itemId}/>
    );
}

const mapMethodsToProps = (movieService) => {
    return{
        getMovie: movieService.getMovie,
        getSimilarMovies: movieService.getSimilarMovies
    }
}

export default withMovieService(mapMethodsToProps)(MoviePage);