(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},40:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(32),i=n.n(c),r=n(8),o=n(2),j=(n(40),n(1));var l=function(){return Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)(r.b,{to:"/",children:"home"}),Object(j.jsx)(r.b,{to:{pathname:"/about",state:{fromLocation:!0}},children:"about the project"})]})},m=n(21),u=n.n(m),d=n(34),v=n(13),b=n(14),h=n(16),p=n(15),O=n(35),x=n.n(O);n(30),n(31);var f=function(e){var t=e.id,n=e.title,a=e.summary,s=e.poster,c=e.year,i=e.genres;return Object(j.jsx)("div",{className:"movie",children:Object(j.jsxs)(r.b,{to:{pathname:"/movie/:".concat(t),state:{year:c,title:n,summary:a,poster:s,genres:i}},children:[Object(j.jsx)("img",{src:s,alt:n,title:n}),Object(j.jsxs)("div",{className:"movie__column",children:[Object(j.jsx)("h3",{className:"movie__title",children:n}),Object(j.jsx)("h5",{className:"movie__year",children:c}),Object(j.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(j.jsxs)("li",{className:"genres_genre",children:[" ",e]},t)}))}),Object(j.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140),"..."]})]})]})})},y=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(j.jsx)("section",{className:"container",children:t?Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("span",{className:"loader__text",children:"loading..."})}):Object(j.jsx)("div",{className:"movies",children:n.map((function(e){return Object(j.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(s.a.Component),g=y;n(69);var _=function(){return Object(j.jsx)("div",{className:"about__container",children:Object(j.jsx)("span",{children:"information page"})})},N=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(j.jsxs)("span",{children:[e.state.title," - and other information"]}):null}}]),n}(s.a.Component),k=N;n(70);var w=function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(o.a,{path:"/",exact:!0,component:g}),Object(j.jsx)(o.a,{path:"/about",component:_}),Object(j.jsx)(o.a,{path:"/movie/:id",component:k})]})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.b0845c8c.chunk.js.map