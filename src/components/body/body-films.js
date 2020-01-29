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
            page: newPage,
         }, this.loadItems);
    }
    
    onChangePage = (e) => {
        const {page} = this.state;
        let btn = e.target.id;
        let nthPage = (i) => document.querySelector(`.pagination button:nth-child(${i})`);
        let pages = document.querySelectorAll(`.pagination #cur_b`);

        let rem = () => {
            for(let i = 0; i < pages.length; i++){ 
                if(pages[i].classList.contains('act-ive')){
                    pages[i].classList.remove('act-ive');
                }
            };
        }
        
        if(btn === 'prev_b'&&page !== 1){
            this.setNewPage(page-1);

            for(let i = 0; i < pages.length; i++){ 
                if(pages[i].classList.contains('act-ive')){
                    pages[i].classList.remove('act-ive');
                    pages[i-1].classList.add('act-ive');
                    break;
                }
            };

            for(let i = 0; i < pages.length; i++){ 
                if(pages[i].classList.contains('act-ive')&&pages[i]===nthPage(2)&&+nthPage(2).textContent !== 1){
                    for(let i = 0; i < pages.length; i++){
                        pages[i].innerHTML = +pages[i].innerHTML - 1;
                        rem();
                        this.setNewPage(+nthPage(3).textContent);
                        nthPage(3).classList.add('act-ive');
                    }
                }
            };

        }

        else if(btn === 'next_b'){
            this.setNewPage(page+1);
    
            for(let i = 0; i < pages.length; i++){ 
                if(pages[i].classList.contains('act-ive')&&nthPage(i+2)!==nthPage(6)){
                    pages[i].classList.remove('act-ive');
                    pages[i+1].classList.add('act-ive');
                    break;
                }
            };
            for(let i = 0; i < pages.length; i++){ 
                if(pages[i].classList.contains('act-ive')&&pages[i]===nthPage(6)){
                    for(let i = 0; i < pages.length; i++){
                        pages[i].innerHTML = +pages[i].innerHTML + 1;
                        rem();
                        this.setNewPage(+nthPage(5).textContent);
                        nthPage(5).classList.add('act-ive');
                    }
                }
            };
            
        }
        else if(e.target === nthPage(2)&&+nthPage(2).textContent !== 1){
            for(let i = 0; i < 5; i++){
                pages[i].innerHTML = +pages[i].innerHTML - 1;
            }
            rem();
            this.setNewPage(+nthPage(3).textContent);
            nthPage(3).classList.add('act-ive');
        }
        else if(e.target === nthPage(6)&&+nthPage(6).textContent !== 200){
            for(let i = 0; i < 5; i++){
                    pages[i].innerHTML = +pages[i].innerHTML + 1;
                }
            rem();
            this.setNewPage(+nthPage(5).textContent);
            nthPage(5).classList.add('act-ive');
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