(this["webpackJsonpre-movies"]=this["webpackJsonpre-movies"]||[]).push([[0],{21:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAAQCAMAAAD9P9seAAAAAXNSR0IB2cksfwAAAGxQTFRFAAAA1yAo2CQr2CIq2CMqP0ROPkNNPkVN2CMqPENLPkNNP0ROP0ROPEtLP0ROP0ROP0ROQENPP0VO2CQq2iUq2SMpQENPQUZQ2CMqV1xmVlxmV1xnV1xnWGBoV1xnVlxmWFxoWFxo2CMq2SMqu4rirgAAACR0Uk5TACCPz///ZneQIszduxGZ7qpEVdAwoIgz8OBQ/78g73+AwO+fnFDB2gAAAkZJREFUeJy1ldl2mzAQhgdbQizaTSCtuybv/46dRQjZIac3rc6xDWg03yw/Y4CPq7tclbpeupOtf7O01j39GrzgB4Mq6wIwaj0Vqxk/FsBqXracdn7WISbQ+zL4MEc8ZnjfzmRsnIDEIOG3p82pIG9KDQvA8oKZ8lMyR6v1DDkGvtsekF6upoZD1w/IQOFqQQ7qdRF3y6saYNU6SwlSRSZcm9igd5MyhoyPJt4ZyTamFClI4DPOcyQITmyAyIBRQq9nirZTatlLvijVJTlpKawd2XQl1ArXHRekFxjBWM7Idy1N1rOlGKL2lMmAmQF8+cp7L3gjDrj4p8jZPSH7oo1cUrNcQd8gDTaXvAbdE/LGSd7v375zmlcMBZuZ2U1b2FFOY93n9IhcpfsNhwq71cI6QmLx3KbnkZBKASPvP37iL9711Exx08rHFMHSrd1aZC1DqSatOR9KSoTEm2xYkf2BvP8S5EjurY5wisQqoWbD9hdkK96EmrNoZSLmQo72wv6Wwt5IBhYEcdJLShTLFhuWPwq7ypkUDg2JoaVMAyvSfJQPFTWx+D5BsjYbpCny6Y/++6MvYrjChu9JFOTzS8JTwIvsP0eGBul0fUl2DuuhRRqSq0RkaBS87aPgjTPGzcDv5oNii0zjmpMv42sPZn0eBZhSMwo2dCgjapSu8cB7p4H3rqiT5JYn2pN8qkSqOirSTWUmutrARkm7MrL1pa3QjPVB3PYyEc+Qzlga4A5aJLYToVN/nJGXuyJPVjdgprfhf/15/QFA7yKX0Kx7dgAAAABJRU5ErkJggg=="},24:function(e,t,a){e.exports=a.p+"static/media/sorry-image-not-available.345b7bba.jpg"},26:function(e,t,a){e.exports=a(48)},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),s=a(5),l=a(1),o=a.n(l),m=a(4),u=function e(){var t=this;Object(m.a)(this,e),this._apiKey="?api_key=4196b62e1a5611251c155f1f36c44274",this._apiBase="https://api.themoviedb.org/3",this._imgBase="https://image.tmdb.org/t/p",this.getResource=function(e,a){var n;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!a){r.next=6;break}return r.next=3,o.a.awrap(fetch("".concat(t._apiBase).concat(e).concat(t._apiKey).concat(a)));case 3:n=r.sent,r.next=9;break;case 6:return r.next=8,o.a.awrap(fetch("".concat(t._apiBase).concat(e).concat(t._apiKey)));case 8:n=r.sent;case 9:if(n.ok){r.next=11;break}throw new Error("Could not fetch url ".concat(e," received ").concat(n.status));case 11:return r.next=13,o.a.awrap(n.json());case 13:return r.abrupt("return",r.sent);case 14:case"end":return r.stop()}}))},this.getMovies=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/discover/movie","&page=".concat(e)));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}))},this.getMovie=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/movie/".concat(e)));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}))},this.getSimilarMovies=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/movie/".concat(e,"/similar")));case 2:return a=n.sent,n.abrupt("return",a.results.slice(0,5));case 4:case"end":return n.stop()}}))},this.getTVs=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/discover/tv","&page=".concat(e)));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}))},this.getTV=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/tv/".concat(e)));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}))},this.getSimilarTVs=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/tv/".concat(e,"/similar")));case 2:return a=n.sent,n.abrupt("return",a.results.slice(0,5));case 4:case"end":return n.stop()}}))},this.getTopRated=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/movie/top_rated","&page=".concat(e)));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}))},this.getUpcoming=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/movie/upcoming","&page=".concat(e,"&region=RU")));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}))},this.getDesiredMovie=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/search/movie","&query=".concat(e)));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}))},this.getDesiredTv=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/search/tv","&query=".concat(e)));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}))},this.getDesiredUpcoming=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/search/tv","&query=".concat(e,"&year=2020&region=RU&primary_release_year=2020")));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}))},this.getItemImage=function(e){var a;return e.poster_path?a=t._imgBase+"/w300"+e.poster_path:e.file_path&&(a=t._imgBase+"/w300"+e.file_path),a}},d=r.a.createContext(),p=d.Provider,g=d.Consumer,f=a(7),v=a(9),h=a(8),E=a(10),b=(a(32),function(){return r.a.createElement("div",{className:"error-indicator"},r.a.createElement("div",{className:"error"},r.a.createElement("span",null,r.a.createElement("h1",null,"404")),r.a.createElement("span",null,r.a.createElement("h1",null,"Something is going wrong!"))))}),N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(b,null):this.props.children}}]),t}(n.Component),y=a(21),w=a.n(y),I=(a(33),function(){return r.a.createElement("div",{className:"header bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-light justify-content-between"},r.a.createElement(s.b,{className:"navbar-brand",to:"/"},r.a.createElement("img",{src:w.a,className:"d-inline-block mr-sm-2",alt:"logo"})),r.a.createElement("div",{className:"nav-icons"},r.a.createElement(s.b,{to:"/tv","data-toggle":"tooltip",title:"TV"},r.a.createElement("i",{className:"fas fa-tv"})),r.a.createElement(s.b,{to:"/movies","data-toggle":"tooltip",title:"MOVIES"},r.a.createElement("i",{className:"fas fa-film"})),r.a.createElement(s.b,{to:"/top-rated","data-toggle":"tooltip",title:"TOP RATED"},r.a.createElement("i",{className:"fas fa-chart-bar"})),r.a.createElement(s.b,{to:"/upcoming","data-toggle":"tooltip",title:"UPCOMING"},r.a.createElement("i",{className:"fas fa-theater-masks"}))),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/login"},"LogIn")))))}),x=a(12),A=(a(39),function(e){return function(t){return function(a){return r.a.createElement(g,null,(function(n){var c=e(n);return r.a.createElement(t,Object.assign({},a,c))}))}}}),k=(a(40),a(41),function(){return r.a.createElement("div",{className:"container spinner d-flex justify-content-center"},r.a.createElement("div",{className:"loadingio-spinner-rolling-a1xr4c4t6q5"},r.a.createElement("div",{className:"ldio-kwj0k5ezx1"},r.a.createElement("div",null))))}),S=(a(42),function(e){var t=e.votes;return r.a.createElement("div",{className:"stats-item"},r.a.createElement("h4",null,"Rating:"),r.a.createElement("span",null,t),r.a.createElement("span",{className:"fa fa-star"}))}),O=a(2),j=(a(43),function(e){var t,a=Object(O.a)({},e),n=a.image,c=a.onActive,i=a.item,l=a.likes,o=a.id;return t=i.title?"/movies/".concat(o):"/tv/".concat(o),r.a.createElement("div",{className:"character-item card col-lg-2 col-md-3",id:o},r.a.createElement("img",{className:"card-img-top",src:n,alt:"Card"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"stats"},r.a.createElement("span",null,r.a.createElement("button",{className:"btn-heart",onClick:c},r.a.createElement("i",{className:"fa fa-heart-o"})),r.a.createElement("span",{className:"like-stat"},l)),r.a.createElement("span",null,r.a.createElement(s.b,{to:t,className:"link-excl"},r.a.createElement("i",{className:"fa fa-exclamation-circle"})))),r.a.createElement("div",{className:"name"},r.a.createElement("h5",{className:"card-title"},i.title,i.name))))}),D=a(24),P=a.n(D),R=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={item:[],id:null,image:null,likeNum:null,isLiked:!1},a.onActive=function(){var e=a.state,t=e.isLiked,n=e.likeNum,r=document.getElementById(a.state.id).querySelector("span i");a.setState({isLiked:!t,likeNum:!0===t?n-1:n+1}),t?r.classList.add("fa-heart-o"):(r.classList.add("fa-heart"),r.classList.remove("fa-heart-o"))},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.loadItem()}},{key:"componentDidUpdate",value:function(e){this.props.item!==e.item&&this.loadItem()}},{key:"loadItem",value:function(){var e=this.props,t=e.item,a=e.getItemImage,n=Math.floor(1e3+2e3*Math.random());this.setState({item:t,id:t.id,image:a(t)?a(t):P.a,likeNum:n})}},{key:"render",value:function(){var e=this.state,t=e.item,a=e.image,n=e.likeNum,c=e.id;return r.a.createElement(j,{id:c,item:t,image:a,likes:n,onActive:this.onActive})}}]),t}(n.Component),M=(a(44),function(e){var t,a=window.location.pathname;return t=a.includes("/movies")?"MOVIES":a.includes("/tv")?"TV":a.includes("/top-rated")?"TOP RATED":"UPCOMING",r.a.createElement("div",{className:"item-selection"},r.a.createElement("div",{className:"title"},r.a.createElement("h5",null,t)),r.a.createElement("div",{className:"search-panel d-flex flex-row align-items-center"},r.a.createElement("input",{className:"form-control form-control-sl mr-3",type:"text",placeholder:"Search","aria-label":"Search",onChange:e.onChangeDesired})))}),C=a(25),T=(a(45),function(e){var t=e.totalPages,a=e.setNewPage,n=e.currPage,c=function(e,r){if(n===r)return null;if("prev_page"===e&&n-1>0)r=n-1;else if("next_page"===e&&n<t)r=n+1;else if("btn"!==e)return null;a(r)};return t<2?null:r.a.createElement("div",{className:"pagination row justify-content-center"},r.a.createElement("div",{className:"btn-group btn-group-toggle"},r.a.createElement("button",{id:"prev_b",onClick:function(){c("prev_page")},className:"btn btn-outline-danger"},"\xab"),Object(C.a)(new Array(5)).map((function(e,a){var i;return 1+a>t?null:(i=t<5?1+a:n+a===a+1?n+a:n-1===1?1+a:n-2+a,r.a.createElement("button",{onClick:function(){c("btn",i)},key:a,className:"btn btn-outline-danger ".concat(i===n?"active":" ")},i))})),r.a.createElement("button",{id:"next_b",onClick:function(){c("next_page")},className:"btn btn-outline-danger"},"\xbb")))}),_=(a(46),function(e){var t,a=e.search,n=e.results,c=window.location.pathname;return c.includes("/movies")||c.includes("/upcoming")||c.includes("/top-rated")?t="Movie":c.includes("/tv")&&(t="TV"),a&&!n?r.a.createElement("div",{className:"search"},r.a.createElement("h3",null,"We can`t find this ",t)):null}),q=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],page:1,total_pages:0,term:"",searching:!1,loading:!0},a.loadItems=function(){(0,a.props.data)(a.state.page).then((function(e){a.setState({items:e.results,total_pages:e.total_pages,loading:!1})}))},a.setNewPage=function(e){a.setState({loading:!0,page:e},a.loadItems)},a.onChangeDesired=function(e){var t=a.props.getDesired,n=e.target.value;return a.setState({term:n}),n?n!==a.state.term&&t?void t(n).then((function(e){a.setState({items:e.results,total_pages:e.total_pages,total_results:e.total_results,searching:!0,loading:!1})})):null:(a.loadItems(),null)},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.loadItems()}},{key:"render",value:function(){var e=this.state,t=e.items,a=e.loading,n=e.total_pages,c=e.searching,i=e.page,s=e.total_results,l=this.props.getItemImage;return a?r.a.createElement(k,null):r.a.createElement("div",{className:"body-characters"},r.a.createElement("div",{className:"container"},r.a.createElement(M,{onSearchChange:this.onSearchChange,onChangeDesired:this.onChangeDesired}),r.a.createElement(_,{search:c,results:s}),r.a.createElement("div",{className:"row justify-content-sm-center"},t.map((function(e){return r.a.createElement(R,{key:e.id,item:e,getItemImage:l})}))),r.a.createElement(T,{setNewPage:this.setNewPage,totalPages:n,currPage:i})))}}]),t}(n.Component),Q=A((function(e){return{getItemImage:e.getItemImage}}))(q),B=A((function(e){return{data:e.getMovies,getDesired:e.getDesiredMovie}}))(Q),V=A((function(e){return{data:e.getTopRated,getDesired:e.getDesiredMovie}}))(Q),U=A((function(e){return{data:e.getTVs,getDesired:e.getDesiredTv}}))(Q),F=A((function(e){return{data:e.getUpcoming,getDesired:e.getDesiredUpcoming}}))(Q),L=function(e){var t=e.item,a=e.field,n=e.label,c=e.sign;return t[a]&&t[a].length?r.a.createElement("li",null,r.a.createElement("h4",{className:"term"},n,": "),r.a.createElement("span",{className:"field"},t[a],c)):null},Z=function(e){var t=e.item,a=e.field,n=e.label,c=e.name;return t[a]&&t[a].length?r.a.createElement("li",null,r.a.createElement("h4",{className:"term"},n,": "),r.a.createElement("span",{className:"field"},t[a].map((function(e){return r.a.createElement("span",{key:e[c]},(t=e[c])[0].toUpperCase()+t.slice(1));var t})))):null},J=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={item:[],image:null,similarItems:[],loading:!0},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.loadItem()}},{key:"componentDidUpdate",value:function(e){e.itemId!==this.props.itemId&&(this.setState({loading:!0}),this.loadItem())}},{key:"loadItem",value:function(){var e=this,t=this.props,a=t.getData,n=t.getItemImage,r=t.itemId,c=t.getSimilar;a(r).then((function(t){e.setState({item:t,image:n(t)})})),c(r).then((function(t){e.setState({similarItems:t,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.item,n=e.image,c=e.similarItems,i=this.props.getItemImage;return t?r.a.createElement(k,null):r.a.createElement("div",{className:"item-page"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 offset-md-3 film-poster d-flex align-items-end"},r.a.createElement("h2",null,a.title,a.name),r.a.createElement("div",{className:"poster-cont"},r.a.createElement("img",{src:n,className:"poster-img rounded",alt:""})),r.a.createElement(S,{votes:a.vote_average})),r.a.createElement("div",{className:"col-md-6 film-info"},r.a.createElement("ul",null,r.a.createElement(L,{label:"Release Date",item:a,field:"first_air_date"}),r.a.createElement(L,{label:"Release Date",item:a,field:"release_date"}),r.a.createElement(L,{label:"Budget",item:a,field:"budget",sign:"$"}),r.a.createElement(Z,{label:"Genres",item:a,field:"genres",name:"name"}),r.a.createElement(L,{label:"Tagline",item:a,field:"tagline"}),r.a.createElement(L,{label:"Film description",item:a,field:"overview"})))),r.a.createElement("h5",{hidden:!c.length},"Similar Films"),r.a.createElement("div",{className:"row justify-content-sm-center"},c.map((function(e){return r.a.createElement(R,{key:e.id,item:e,getItemImage:i})})))))}}]),t}(n.Component),G=A((function(e){return{getItemImage:e.getItemImage}}))(J),z=A((function(e){return{getMovie:e.getMovie,getSimilarMovies:e.getSimilarMovies}}))((function(e){var t=e.getMovie,a=e.getSimilarMovies,n=e.itemId;return r.a.createElement(G,{getData:t,getSimilar:a,itemId:n})})),K=A((function(e){return{getTv:e.getTV,getSimilarTVs:e.getSimilarTVs}}))((function(e){var t=e.getTv,a=e.itemId,n=e.getSimilarTVs;return r.a.createElement(G,{getData:t,itemId:a,getSimilar:n})})),W=(a(47),function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("h1",null,"Welcome to Movie Storage"),r.a.createElement("h3",null,"There you can see some info about films")))}),Y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={movieService:new u},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{role:"main"},r.a.createElement(I,null),r.a.createElement(x.d,null,r.a.createElement(x.b,{path:"/",exact:!0,component:W}),r.a.createElement(x.b,{path:"/movies/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(z,{itemId:t})}}),r.a.createElement(x.b,{path:"/movies",component:B,exact:!0}),r.a.createElement(x.b,{path:"/top-rated/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(V,{itemId:t})}}),r.a.createElement(x.b,{path:"/top-rated",component:V,exact:!0}),r.a.createElement(x.b,{path:"/upcoming/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(F,{itemId:t})}}),r.a.createElement(x.b,{path:"/upcoming",component:F,exact:!0}),r.a.createElement(x.b,{path:"/tv/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(K,{itemId:t})}}),r.a.createElement(x.b,{path:"/tv",component:U,exact:!0}),r.a.createElement(x.a,{to:"/"})))}}]),t}(n.Component),X=new u;i.a.render(r.a.createElement(p,{value:X},r.a.createElement(N,null,r.a.createElement(s.a,null,r.a.createElement(Y,null)))),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.aa23bf9e.chunk.js.map