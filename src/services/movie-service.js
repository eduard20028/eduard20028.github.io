export default class MovieService{
    _apiKey = `?api_key=4196b62e1a5611251c155f1f36c44274`;
    _apiBase = `https://api.themoviedb.org/3`;
    _imgBase = `https://image.tmdb.org/t/p`;
    getResource = async (url, filters) => {
        let res;
        if(filters){
            res = await fetch(`${this._apiBase}${url}${this._apiKey}${filters}`);
        }
        else{
            res = await fetch(`${this._apiBase}${url}${this._apiKey}`)
        }

        if(!res.ok) {
            throw new Error(`Could not fetch url ${url} received ${res.status}`)
        }       
        return await res.json();
    }
    
    getMovies = async(page) => {
        const movies = await this.getResource('/discover/movie', `&page=${page}`);
        return movies;
    }
    getMovie = async(id) => {
        const movie = await this.getResource(`/movie/${id}`);
        return movie;
    }
    getSimilarMovies = async(id) => {
        let similar = await this.getResource(`/movie/${id}/similar`);
        return similar.results.slice(0,5);
    }

    getTVs = async(page) => {
        const tvs = await this.getResource('/discover/tv', `&page=${page}`);
        return tvs;
    }
    getTV = async(id) => {
        const tv = await this.getResource(`/tv/${id}`);
        return tv;
    }
    getSimilarTVs = async(id) => {
        let similar = await this.getResource(`/tv/${id}/similar`);
        return similar.results.slice(0,5);
    }

    getTopRated = async(page) => {
        const top_rated = await this.getResource('/movie/top_rated', `&page=${page}`);
        return top_rated;
    }
    getUpcoming = async(page) => {
        const upcoming = await this.getResource('/movie/upcoming', `&page=${page}&region=RU`);
        return upcoming;
    }
    
    getDesiredMovie = async(term) => {
        const desired = await this.getResource('/search/movie', `&query=${term}`);
        return desired;
    }
    getDesiredTv = async(term) => {
        const desired = await this.getResource('/search/tv', `&query=${term}`);
        return desired;
    }
    getDesiredUpcoming = async(term) => {
        const desired = await this.getResource('/search/tv', `&query=${term}&year=2020&region=RU&primary_release_year=2020`);
        return desired;
    }
    getItemImage = (item) =>  {
        let url;
         if(item.poster_path){
            url = this._imgBase + "/w300" + item.poster_path;
         }
         else if(item.file_path){
            url = this._imgBase + "/w300" + item.file_path;
         }
        return url;
    }
    
}