import React from 'react';

const Search = ({search, results}) => {
    const win = window.location.pathname;
            let title;
            if(win.includes("/movies")||win.includes("/upcoming")||win.includes("/top-rated")){
                title = "Movie"
            }
            else if(win.includes("/tv")){
                title = "TV"
            }
    if(search&&!results){
        return (
            <div className="search">
                <h3>We can`t find this {title}</h3>
            </div>
        );
    }
    return null;
}

export default Search;