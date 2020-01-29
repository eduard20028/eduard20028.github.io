import React, { Component } from 'react';
import { withMovieService } from '../../hoc';
import './item-page.css'
import Spinner from '../../spinner/';
import Stats from '../../stats';
import { FilmItemContainer } from '../../body-items';
import { Record, Recordf} from '../../record';

class ItemPage extends Component {
    state = { 
        item: [],
        image: null,
        similarItems: [],
        loading: true
     }
     
     componentDidMount(){
        this.loadItem();   
     }

     componentDidUpdate(prevProps){
        if(prevProps.itemId !== this.props.itemId){
            this.setState({loading: true})
            this.loadItem();
        }
     }

    loadItem(){
        const { getData, getItemImage, itemId, getSimilar} = this.props;

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getItemImage(item),
                })
            })
        getSimilar(itemId)
            .then((similarItems) => {
                this.setState({
                    similarItems,
                    loading: false
                })
            })
    }


    render() {
        const {loading, item, image, similarItems} = this.state;
        const {getItemImage} = this.props;

        if(loading) return <Spinner/>

        return (

            <div className="item-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 offset-md-3 film-poster d-flex align-items-end">
                            <h2>{item.title}{item.name}</h2>
                            <div className="poster-cont">
                                <img src={image} className="poster-img rounded" alt=""/>
                            </div>
                            <Stats votes={item.vote_average}/>
                        </div>

                        <div className="col-md-6 film-info">
                            <ul>
                                <Record label="Release Date" item={item} field='first_air_date'/>
                                <Record label="Release Date" item={item} field='release_date'/>
                                <Record label="Budget" item={item} field='budget' sign='$'/>
                                <Recordf label="Genres" item={item} field='genres' name='name'/>
                                <Record label="Tagline" item={item} field='tagline'/>
                                <Record label="Film description" item={item} field='overview'/>
                            </ul>
                        </div>
                    </div>

                    <h5 hidden={!similarItems.length}>Similar Films</h5>
                    <div className="row justify-content-sm-center">
                        {
                            similarItems.map((item) => {
                                return (
                                        <FilmItemContainer key={item.id} item={item} getItemImage={getItemImage}/>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        );
    }
}

const mapMethodsToProps = (movieService) => {
    return{
        getItemImage: movieService.getItemImage
        }
}

export default withMovieService(mapMethodsToProps)(ItemPage);