import React, { Component } from 'react';
import FilmItem from './film-item';

export default class FilmItemContainer extends Component {

    state = {
        item: [],
        id: null,
        image: null,
        likeNum: null,
        isLiked: false
    };
    
    componentDidMount(){
        this.loadItem();
    }

    componentDidUpdate(prevProps){
        if(this.props.item !== prevProps.item){
                this.loadItem();
        }
    }
    
    onActive = () => {
        const {isLiked, likeNum} = this.state;
        const divID =  document.getElementById(this.state.id).querySelector('span i');
        this.setState({
            isLiked: !isLiked,
            likeNum: isLiked === true ? likeNum-1 : likeNum+1
        })
        if(!isLiked){
            divID.classList.add('fa-heart');
            divID.classList.remove('fa-heart-o');
        }
        else divID.classList.add('fa-heart-o');
    }

    loadItem(){
        const {item, getItemImage} = this.props;
        const likeNum = Math.floor(1000+Math.random()*2000);
  
        this.setState({
            item: item,
            id: item.id,
            image: getItemImage(item),
            likeNum,
        })
    }
    
    render(){
        const {item, image, likeNum, id} = this.state;
        if(!image) return null;
        return <FilmItem id={id} item={item} image={image} likes={likeNum} onActive={this.onActive}/>
    }
}


