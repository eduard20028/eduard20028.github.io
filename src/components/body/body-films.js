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
        search_status: false,
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
                    total_pages: items.total_pages > 5 ? 5:items.total_pages,
                    loading: false
                })
            })   
    }

    setNewPage = (newPage) => {
        this.setState({
            page: newPage
         }, this.loadItems);
    }
    
    onChangePage = (e) => {
        const {page} = this.state;
        let btn = e.target.id;
        let classes = document.querySelectorAll(`.pagination #cur_b`);
        let rem = () => {classes[page-1].classList.remove('act-ive')};
        if(+e.target.textContent === page){
            return null;
        }
        if(btn === 'prev_b'&&page !== 1){
            rem();
            this.setNewPage(page-1);
            classes[page-2].classList.add('act-ive');
        }
        else if(btn === 'next_b'&&page !== 5){
            rem();
            this.setNewPage(page+1);
            classes[page].classList.add('act-ive');
        }
        else if(btn === 'cur_b'&&+e.target.textContent !== page){
            rem();
            this.setNewPage(+e.target.textContent);
            e.target.classList.add('act-ive');
        }
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
                    total_results: items.total_results,
                    total_pages: items.total_pages > 5 ? 5:items.total_pages,
                    search_status: true,
                    loading:false
                })
            }) 
    }

    render(){
        const {items, loading, total_pages, search_status, total_results} = this.state;
        const {getItemImage} = this.props;
        
        if(loading) return <Spinner/>
        
        return (
            <div className="body-characters">          
                <div className="container">
                        <ItemSelection onSearchChange={this.onSearchChange} onChangeDesired={this.onChangeDesired}/>
                        <Search search={search_status} results={total_results}/>
                    <div className="row justify-content-sm-center">
                        {
                            items.map((item) => {
                                return (
                                        <FilmItemContainer key={item.id} item={item} getItemImage={getItemImage}/>
                                )
                            })
                        }
                    </div>
                    
                        <Pagination onChangePage={this.onChangePage} pages={total_pages}/>
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