import React from 'react';
import { FilmItemContainer, ItemSelection, Pagination } from '../body-items';
import './body-films.css'
import { Component } from 'react';
import {withMovieService} from '../hoc';
import Spinner from '../spinner';
import Search from '../search';

export class BodyFilms extends Component{
    state = { 
        items: [],
        page: 1,
        total_pages: 0,
        term: '',
        searching: false,
        loading: true
    }
    
    componentDidMount(){
        this.loadItems();
    }

    loadItems = () => {
        const {data} = this.props;
        const {page} = this.state;

        data(page)
            .then((items) => {
                this.setState({
                    items: items.results,
                    total_pages: items.total_pages,
                    loading: false
                })
            })   
    }

    setNewPage = (newPage) => {
        this.setState({
            loading: true,
            page: newPage
         }, this.loadItems);
    }

    onChangeDesired = (e) => {
        const {getDesired} = this.props;
        const term = e.target.value;
        this.setState({term});
        if(!term){this.loadItems(); return null;}
        if(term === this.state.term||!getDesired){ return null; }
        getDesired(term)
            .then((items) => {
                this.setState({
                    items: items.results,
                    total_pages: items.total_pages,
                    total_results: items.total_results,
                    searching: true,
                    loading:false
                })
            }) 
    }

    render(){
        const {items, loading, total_pages, searching, page, total_results} = this.state;
        const {getItemImage} = this.props;
        
        if(loading) return <Spinner/>
        
        return (
            <div className="body-characters">          
                <div className="container">
                        <ItemSelection onSearchChange={this.onSearchChange} onChangeDesired={this.onChangeDesired}/>
                        <Search search={searching} results={total_results}/>
                    <div className="row justify-content-sm-center">
                        {
                            items.map((item) => {
                                return (
                                        <FilmItemContainer key={item.id} item={item} getItemImage={getItemImage}/>
                                )
                            })
                        }
                    </div>
                        
                        <Pagination setNewPage={this.setNewPage} totalPages={total_pages} currPage={page}/>
                </div>  
            </div>
        );
    };
}

const mapMethodsToProps = (movieService) => {
    return{
        getItemImage: movieService.getItemImage
    }
}


export default withMovieService(mapMethodsToProps)(BodyFilms);