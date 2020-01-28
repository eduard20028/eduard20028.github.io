import React from 'react';
import {MovieServiceConsumer} from '../movie-service-context';

const withMovieService = (matMethodsToProps) => (Wrapped) => {
    return(props) => {
        return(
            <MovieServiceConsumer>
                {
                    (marvelService) => {
                        const serviceProps = matMethodsToProps(marvelService);
                        return(
                            <Wrapped {...props} {...serviceProps}/>
                        )
                    }
                }
            </MovieServiceConsumer>
        )
    };
}

export default withMovieService;