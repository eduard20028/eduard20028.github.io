(this["webpackJsonpre-movies"]=this["webpackJsonpre-movies"]||[]).push([[0],{31:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAAQCAMAAAD9P9seAAAAAXNSR0IB2cksfwAAAGxQTFRFAAAA1yAo2CQr2CIq2CMqP0ROPkNNPkVN2CMqPENLPkNNP0ROP0ROPEtLP0ROP0ROP0ROQENPP0VO2CQq2iUq2SMpQENPQUZQ2CMqV1xmVlxmV1xnV1xnWGBoV1xnVlxmWFxoWFxo2CMq2SMqu4rirgAAACR0Uk5TACCPz///ZneQIszduxGZ7qpEVdAwoIgz8OBQ/78g73+AwO+fnFDB2gAAAkZJREFUeJy1ldl2mzAQhgdbQizaTSCtuybv/46dRQjZIac3rc6xDWg03yw/Y4CPq7tclbpeupOtf7O01j39GrzgB4Mq6wIwaj0Vqxk/FsBqXracdn7WISbQ+zL4MEc8ZnjfzmRsnIDEIOG3p82pIG9KDQvA8oKZ8lMyR6v1DDkGvtsekF6upoZD1w/IQOFqQQ7qdRF3y6saYNU6SwlSRSZcm9igd5MyhoyPJt4ZyTamFClI4DPOcyQITmyAyIBRQq9nirZTatlLvijVJTlpKawd2XQl1ArXHRekFxjBWM7Idy1N1rOlGKL2lMmAmQF8+cp7L3gjDrj4p8jZPSH7oo1cUrNcQd8gDTaXvAbdE/LGSd7v375zmlcMBZuZ2U1b2FFOY93n9IhcpfsNhwq71cI6QmLx3KbnkZBKASPvP37iL9711Exx08rHFMHSrd1aZC1DqSatOR9KSoTEm2xYkf2BvP8S5EjurY5wisQqoWbD9hdkK96EmrNoZSLmQo72wv6Wwt5IBhYEcdJLShTLFhuWPwq7ypkUDg2JoaVMAyvSfJQPFTWx+D5BsjYbpCny6Y/++6MvYrjChu9JFOTzS8JTwIvsP0eGBul0fUl2DuuhRRqSq0RkaBS87aPgjTPGzcDv5oNii0zjmpMv42sPZn0eBZhSMwo2dCgjapSu8cB7p4H3rqiT5JYn2pN8qkSqOirSTWUmutrARkm7MrL1pa3QjPVB3PYyEc+Qzlga4A5aJLYToVN/nJGXuyJPVjdgprfhf/15/QFA7yKX0Kx7dgAAAABJRU5ErkJggg=="},32:function(e,t,a){e.exports=a.p+"static/media/sorry-image-not-available.345b7bba.jpg"},33:function(e,t,a){e.exports=a(55)},39:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),s=a(10),l=a(3),o=a.n(l),m=a(8),u=function e(){var t=this;Object(m.a)(this,e),this._apiKey="?api_key=4196b62e1a5611251c155f1f36c44274",this._apiBase="https://api.themoviedb.org/3",this._imgBase="https://image.tmdb.org/t/p",this.getResource=function(e,a){var n;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!a){r.next=6;break}return r.next=3,o.a.awrap(fetch("".concat(t._apiBase).concat(e).concat(t._apiKey).concat(a)));case 3:n=r.sent,r.next=9;break;case 6:return r.next=8,o.a.awrap(fetch("".concat(t._apiBase).concat(e).concat(t._apiKey)));case 8:n=r.sent;case 9:if(n.ok){r.next=11;break}throw new Error("Could not fetch url ".concat(e," received ").concat(n.status));case 11:return r.next=13,o.a.awrap(n.json());case 13:return r.abrupt("return",r.sent);case 14:case"end":return r.stop()}}))},this.getMovies=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/discover/movie","&page=".concat(e)));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}))},this.getMovie=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/movie/".concat(e)));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}))},this.getSimilarMovies=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/movie/".concat(e,"/similar")));case 2:return a=n.sent,n.abrupt("return",a.results.slice(0,5));case 4:case"end":return n.stop()}}))},this.getTVs=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/discover/tv","&page=".concat(e)));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}))},this.getTV=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/tv/".concat(e)));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}))},this.getSimilarTVs=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/tv/".concat(e,"/similar")));case 2:return a=n.sent,n.abrupt("return",a.results.slice(0,5));case 4:case"end":return n.stop()}}))},this.getTopRated=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/movie/top_rated","&page=".concat(e)));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}))},this.getUpcoming=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/movie/upcoming","&page=".concat(e,"&region=RU")));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}))},this.getDesiredMovie=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/search/movie","&query=".concat(e)));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}))},this.getDesiredTv=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/search/tv","&query=".concat(e)));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}))},this.getDesiredUpcoming=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(t.getResource("/search/tv","&query=".concat(e,"&year=2020&region=RU&primary_release_year=2020")));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}))},this.getItemImage=function(e){var a;return e.poster_path?a=t._imgBase+"/w300"+e.poster_path:e.file_path&&(a=t._imgBase+"/w300"+e.file_path),a}},d=r.a.createContext(),g=d.Provider,p=d.Consumer,v=a(11),f=a(13),h=a(12),E=a(14),b=(a(39),function(){return r.a.createElement("div",{className:"error-indicator"},r.a.createElement("div",{className:"error"},r.a.createElement("span",null,r.a.createElement("h1",null,"404")),r.a.createElement("span",null,r.a.createElement("h1",null,"Something is going wrong!"))))}),N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(b,null):this.props.children}}]),t}(n.Component),y=a(18),w=a(6),x=(a(17),a(28),Object(w.b)({hashType:"slash",getUserConfirmation:function(e,t){return t(window.confirm(e))}}));var I=a(31),k=a.n(I),A=(a(45),function(){return r.a.createElement("div",{className:"header bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-light justify-content-between"},r.a.createElement(s.b,{className:"navbar-brand",to:"/"},r.a.createElement("img",{src:k.a,className:"d-inline-block mr-sm-2",alt:"logo"})),r.a.createElement("div",{className:"nav-icons"},r.a.createElement(s.b,{to:"/tv","data-toggle":"tooltip",title:"TV"},r.a.createElement("i",{className:"fas fa-tv"})),r.a.createElement(s.b,{to:"/movies","data-toggle":"tooltip",title:"MOVIES"},r.a.createElement("i",{className:"fas fa-film"})),r.a.createElement(s.b,{to:"/top-rated","data-toggle":"tooltip",title:"TOP RATED"},r.a.createElement("i",{className:"fas fa-chart-bar"})),r.a.createElement(s.b,{to:"/upcoming","data-toggle":"tooltip",title:"UPCOMING"},r.a.createElement("i",{className:"fas fa-theater-masks"}))),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/login"},"LogIn")))))}),S=a(9),C=(a(46),function(e){return function(t){return function(a){return r.a.createElement(p,null,(function(n){var c=e(n);return r.a.createElement(t,Object.assign({},a,c))}))}}}),O=(a(47),a(48),function(){return r.a.createElement("div",{className:"container spinner d-flex justify-content-center"},r.a.createElement("div",{className:"loadingio-spinner-rolling-a1xr4c4t6q5"},r.a.createElement("div",{className:"ldio-kwj0k5ezx1"},r.a.createElement("div",null))))}),j=(a(49),function(e){var t=e.votes;return r.a.createElement("div",{className:"stats-item"},r.a.createElement("h4",null,"Rating:"),r.a.createElement("span",null,t),r.a.createElement("span",{className:"fa fa-star"}))}),M=a(1),P=(a(50),function(e){var t,a=Object(M.a)({},e),n=a.image,c=a.onActive,i=a.item,l=a.likes,o=a.id;return t=i.title?"/movies/".concat(o):"/tv/".concat(o),r.a.createElement("div",{className:"character-item card col-lg-2 col-md-3",id:o},r.a.createElement("img",{className:"card-img-top",src:n,alt:"Card"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"stats"},r.a.createElement("span",null,r.a.createElement("button",{className:"btn-heart",onClick:c},r.a.createElement("i",{className:"fa fa-heart-o"})),r.a.createElement("span",{className:"like-stat"},l)),r.a.createElement("span",null,r.a.createElement(s.b,{to:t,className:"link-excl"},r.a.createElement("i",{className:"fa fa-exclamation-circle"})))),r.a.createElement("div",{className:"name"},r.a.createElement("h5",{className:"card-title"},i.title,i.name))))}),T=a(32),D=a.n(T),R=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={item:[],id:null,image:null,likeNum:null,isLiked:!1},a.onActive=function(){var e=a.state,t=e.isLiked,n=e.likeNum,r=document.getElementById(a.state.id).querySelector("span i");a.setState({isLiked:!t,likeNum:!0===t?n-1:n+1}),t?r.classList.add("fa-heart-o"):(r.classList.add("fa-heart"),r.classList.remove("fa-heart-o"))},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.loadItem()}},{key:"componentDidUpdate",value:function(e){this.props.item!==e.item&&this.loadItem()}},{key:"loadItem",value:function(){var e=this.props,t=e.item,a=e.getItemImage,n=Math.floor(1e3+2e3*Math.random());this.setState({item:t,id:t.id,image:a(t)?a(t):D.a,likeNum:n})}},{key:"render",value:function(){var e=this.state,t=e.item,a=e.image,n=e.likeNum,c=e.id;return r.a.createElement(P,{id:c,item:t,image:a,likes:n,onActive:this.onActive})}}]),t}(n.Component),_=(a(51),function(e){var t,a=window.location.pathname;return t=a.includes("/movies")?"MOVIES":a.includes("/tv")?"TV":a.includes("/top-rated")?"TOP RATED":"UPCOMING",r.a.createElement("div",{className:"item-selection"},r.a.createElement("div",{className:"title"},r.a.createElement("h5",null,t)),r.a.createElement("div",{className:"search-panel d-flex flex-row align-items-center"},r.a.createElement("input",{className:"form-control form-control-sl mr-3",type:"text",placeholder:"Search","aria-label":"Search",onChange:e.onChangeDesired})))}),L=(a(52),function(e){var t=e.onChangePage,a=e.pages;return a<2?null:r.a.createElement("div",{className:"pagination row justify-content-center"},r.a.createElement("div",{className:"btn-group btn-group-toggle"},r.a.createElement("button",{id:"prev_b",onClick:t,className:"btn btn-outline-danger"},"\xab"),function(e){var a=[];a.push(r.a.createElement("button",{id:"cur_b",key:1,onClick:t,className:"btn btn-outline-danger act-ive"},1));for(var n=2;n<e+1;n++)a.push(r.a.createElement("button",{id:"cur_b",key:n,onClick:t,className:"btn btn-outline-danger"},n));return a}(a),r.a.createElement("button",{id:"next_b",onClick:t,className:"btn btn-outline-danger"},"\xbb")))}),q=(a(53),function(e){var t,a=e.search,n=e.results,c=window.location.pathname;return c.includes("/movies")||c.includes("/upcoming")||c.includes("/top-rated")?t="Movie":c.includes("/tv")&&(t="TV"),a&&!n?r.a.createElement("div",{className:"search"},r.a.createElement("h3",null,"We can`t find this ",t)):null}),Q=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],page:1,total_pages:0,term:"",search_status:!1,loading:!0},a.loadItems=function(){(0,a.props.data)(a.state.page).then((function(e){a.setState({items:e.results,total_pages:e.total_pages,pages:e.total_pages>5?5:e.total_pages,loading:!1})}))},a.setNewPage=function(e){a.setState({page:e},a.loadItems)},a.onChangePage=function(e){var t=a.state.page,n=e.target.id,r=function(e){return document.querySelector(".pagination button:nth-child(".concat(e,")"))},c=document.querySelectorAll(".pagination #cur_b"),i=function(){for(var e=0;e<c.length;e++)c[e].classList.contains("act-ive")&&c[e].classList.remove("act-ive")};if("prev_b"===n&&1!==t){a.setNewPage(t-1);for(var s=0;s<c.length;s++)if(c[s].classList.contains("act-ive")){c[s].classList.remove("act-ive"),c[s-1].classList.add("act-ive");break}for(var l=0;l<c.length;l++)if(c[l].classList.contains("act-ive")&&c[l]===r(2)&&1!==+r(2).textContent)for(var o=0;o<c.length;o++)c[o].innerHTML=+c[o].innerHTML-1,i(),a.setNewPage(+r(3).textContent),r(3).classList.add("act-ive")}else if("next_b"===n){for(var m=0;m<c.length;m++)if(c[m].classList.contains("act-ive")&&r(m+2)!==c[c.length-1]){c[m].classList.remove("act-ive"),c[m+1].classList.add("act-ive"),a.setNewPage(t+1);break}for(var u=0;u<c.length;u++)if(c[u].classList.contains("act-ive")&&c[u]===c[c.length-1]&&+c[u].textContent!==a.state.total_pages)for(var d=0;d<c.length;d++)c[d].innerHTML=+c[d].innerHTML+1,i(),a.setNewPage(+c[c.length-2].textContent),c[c.length-2].classList.add("act-ive")}else if(e.target===r(2)&&1!==+r(2).textContent){for(var g=0;g<5;g++)c[g].innerHTML=+c[g].innerHTML-1;i(),a.setNewPage(+r(3).textContent),r(3).classList.add("act-ive")}else if(e.target===c[c.length-1]&&+c[c.length-1].textContent!==a.state.total_pages){for(var p=0;p<5;p++)c[p].innerHTML=+c[p].innerHTML+1;i(),a.setNewPage(+c[c.length-2].textContent),c[c.length-2].classList.add("act-ive")}else"cur_b"===n&&+e.target.textContent!==t&&(i(),a.setNewPage(+e.target.textContent),e.target.classList.add("act-ive"))},a.onChangeDesired=function(e){var t=a.props.getDesired,n=e.target.value;return a.setState({term:n}),n?n!==a.state.term&&t?void t(n).then((function(e){a.setState({items:e.results,total_results:e.total_results,total_pages:e.total_pages>5?5:e.total_pages,search_status:!0,loading:!1})})):null:(a.loadItems(),null)},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.loadItems()}},{key:"render",value:function(){var e=this.state,t=e.items,a=e.loading,n=e.pages,c=e.search_status,i=e.total_results,s=this.props.getItemImage;return a?r.a.createElement(O,null):r.a.createElement("div",{className:"body-characters"},r.a.createElement("div",{className:"container"},r.a.createElement(_,{onSearchChange:this.onSearchChange,onChangeDesired:this.onChangeDesired}),r.a.createElement(q,{search:c,results:i}),r.a.createElement("div",{className:"row justify-content-sm-center"},t.map((function(e){return r.a.createElement(R,{key:e.id,item:e,getItemImage:s})}))),r.a.createElement(L,{onChangePage:this.onChangePage,pages:n})))}}]),t}(n.Component),B=C((function(e){return{getItemImage:e.getItemImage}}))(Q),V=C((function(e){return{data:e.getMovies,getDesired:e.getDesiredMovie}}))(B),U=C((function(e){return{data:e.getTopRated,getDesired:e.getDesiredMovie}}))(B),F=C((function(e){return{data:e.getTVs,getDesired:e.getDesiredTv}}))(B),Z=C((function(e){return{data:e.getUpcoming,getDesired:e.getDesiredUpcoming}}))(B),J=function(e){var t=e.item,a=e.field,n=e.label,c=e.sign;return t[a]&&t[a].length?r.a.createElement("li",null,r.a.createElement("h4",{className:"term"},n,": "),r.a.createElement("span",{className:"field"},t[a],c)):null},G=function(e){var t=e.item,a=e.field,n=e.label,c=e.name;return t[a]&&t[a].length?r.a.createElement("li",null,r.a.createElement("h4",{className:"term"},n,": "),r.a.createElement("span",{className:"field"},t[a].map((function(e){return r.a.createElement("span",{key:e[c]},(t=e[c])[0].toUpperCase()+t.slice(1));var t})))):null},z=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={item:[],image:null,similarItems:[],loading:!0},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.loadItem()}},{key:"componentDidUpdate",value:function(e){e.itemId!==this.props.itemId&&(this.setState({loading:!0}),this.loadItem())}},{key:"loadItem",value:function(){var e=this,t=this.props,a=t.getData,n=t.getItemImage,r=t.itemId,c=t.getSimilar;a(r).then((function(t){e.setState({item:t,image:n(t)})})),c(r).then((function(t){e.setState({similarItems:t,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.item,n=e.image,c=e.similarItems,i=this.props.getItemImage;return t?r.a.createElement(O,null):r.a.createElement("div",{className:"item-page"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 offset-md-3 film-poster d-flex align-items-end"},r.a.createElement("h2",null,a.title,a.name),r.a.createElement("div",{className:"poster-cont"},r.a.createElement("img",{src:n,className:"poster-img rounded",alt:""})),r.a.createElement(j,{votes:a.vote_average})),r.a.createElement("div",{className:"col-md-6 film-info"},r.a.createElement("ul",null,r.a.createElement(J,{label:"Release Date",item:a,field:"first_air_date"}),r.a.createElement(J,{label:"Release Date",item:a,field:"release_date"}),r.a.createElement(J,{label:"Budget",item:a,field:"budget",sign:"$"}),r.a.createElement(G,{label:"Genres",item:a,field:"genres",name:"name"}),r.a.createElement(J,{label:"Tagline",item:a,field:"tagline"}),r.a.createElement(J,{label:"Film description",item:a,field:"overview"})))),r.a.createElement("h5",{hidden:!c.length},"Similar Films"),r.a.createElement("div",{className:"row justify-content-sm-center"},c.map((function(e){return r.a.createElement(R,{key:e.id,item:e,getItemImage:i})})))))}}]),t}(n.Component),H=C((function(e){return{getItemImage:e.getItemImage}}))(z),K=C((function(e){return{getMovie:e.getMovie,getSimilarMovies:e.getSimilarMovies}}))((function(e){var t=e.getMovie,a=e.getSimilarMovies,n=e.itemId;return r.a.createElement(H,{getData:t,getSimilar:a,itemId:n})})),W=C((function(e){return{getTv:e.getTV,getSimilarTVs:e.getSimilarTVs}}))((function(e){var t=e.getTv,a=e.itemId,n=e.getSimilarTVs;return r.a.createElement(H,{getData:t,itemId:a,getSimilar:n})})),Y=(a(54),function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("h1",null,"Welcome to Movie Storage"),r.a.createElement("h3",null,"There you can see some info about films")))}),X=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={movieService:new u},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{role:"main"},r.a.createElement(A,null),r.a.createElement(S.d,null,r.a.createElement(S.b,{path:"/",exact:!0,component:Y}),r.a.createElement(S.b,{path:"/movies/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(K,{itemId:t})}}),r.a.createElement(S.b,{path:"/movies",component:V,exact:!0}),r.a.createElement(S.b,{path:"/top-rated/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(U,{itemId:t})}}),r.a.createElement(S.b,{path:"/top-rated",component:U,exact:!0}),r.a.createElement(S.b,{path:"/upcoming/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(Z,{itemId:t})}}),r.a.createElement(S.b,{path:"/upcoming",component:Z,exact:!0}),r.a.createElement(S.b,{path:"/tv/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(W,{itemId:t})}}),r.a.createElement(S.b,{path:"/tv",component:F,exact:!0}),r.a.createElement(S.a,{to:"/"})))}}]),t}(n.Component),$=new u;i.a.render(r.a.createElement(g,{value:$},r.a.createElement(y.a,{history:x},r.a.createElement(N,null,r.a.createElement(s.a,null,r.a.createElement(X,null))))),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.5a664a69.chunk.js.map