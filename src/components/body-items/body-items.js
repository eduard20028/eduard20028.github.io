import { withMovieService } from '../hoc';
import BodyFilms from '../body';

const mapMovieMethodsToProps = (movieService) => {
    return{
        data: movieService.getMovies,
        getDesired: movieService.getDesiredMovie
    }
}

const mapTvMethodsToProps = (movieService) => {
    return{
        data: movieService.getTVs,
        getDesired: movieService.getDesiredTv
    }
}

const mapTopRatedMethodsToProps = (movieService) => {
    return{
        data: movieService.getTopRated,
        getDesired: movieService.getDesiredMovie
    }
}

const mapUpcomingMethodsToProps = (movieService) => {
    return{
        data: movieService.getUpcoming,
        getDesired: movieService.getDesiredUpcoming
    }
}

const MovieItems = withMovieService(mapMovieMethodsToProps)(BodyFilms);

const TopRatedItems = withMovieService(mapTopRatedMethodsToProps)(BodyFilms);

const TvItems = withMovieService(mapTvMethodsToProps)(BodyFilms);

const UpcomingItems = withMovieService(mapUpcomingMethodsToProps)(BodyFilms);

export {
    UpcomingItems,
    MovieItems,
    TopRatedItems,
    TvItems
}