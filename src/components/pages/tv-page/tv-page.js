import React from 'react';
import { withMovieService } from '../../hoc';
import ItemPage from '../item-page/';

const TvPage = ({getTv, itemId, getSimilarTVs }) => {
    return (
        <ItemPage getData={getTv} itemId={itemId} getSimilar={getSimilarTVs}/>
    );
}

const mapMethodsToProps = (movieService) => {
    return{
        getTv: movieService.getTV,
        getSimilarTVs: movieService.getSimilarTVs 
    }
}

export default withMovieService(mapMethodsToProps)(TvPage);