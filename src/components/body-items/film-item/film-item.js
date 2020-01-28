import React from 'react';
import './film-item.css';
import {Link} from 'react-router-dom';

const FilmItem = ({...props}) => {
    const {image, onActive, item, likes, id} = props;
    let href;
        if(item.title) href=`/movies/${id}`;
        else href=`/tv/${id}`;
        
    return(
         <div className="character-item card col-lg-2 col-md-3" id={id}>
             <img className="card-img-top" src={image} alt="Card"/>

            <div className="card-body">
                <div className="stats">
                    <span>
                        <button className="btn-heart" onClick={onActive}><i className="fa fa-heart-o"/></button>
                        <span className="like-stat">{likes}</span>
                    </span>
                    <span>
                        <Link to={href} className="link-excl"><i className="fa fa-exclamation-circle"></i></Link>
                    </span>
                </div>
                    
                <div className="name">
                    <h5 className="card-title">{item.title}{item.name}</h5>    
                </div>
            </div>
        </div>
)

}
export default FilmItem;