import React from 'react';
import './item-selection.css';

const ItemSelection = (props) => {
    
        const win = window.location.href;
            let title;
            if(win.includes("/movies")){
                title = "MOVIES"
            }
            else if(win.includes("/tv")){
                title = "TV"
            }
            else if(win.includes("/top-rated")){
                title = "TOP RATED"
            }
            else title = "UPCOMING"

        return (
            <div className="item-selection">
                <div className="title">
                    <h5>{title}</h5>
                </div>
                <div className='search-panel d-flex flex-row align-items-center'> 
                    <input className="form-control form-control-sl mr-3" type="text" placeholder={`Search`} aria-label="Search" onChange={props.onChangeDesired}/>
                </div>
            </div>
        );
}

export default ItemSelection;
