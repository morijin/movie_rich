(window.webpackJsonpmovie_rich=window.webpackJsonpmovie_rich||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),i=a.n(s),c=a(2),o=a.n(c),m=a(13),l=a(14),u=a(15),v=a(18),d=a(16),p=a(19),y=a(17),_=a.n(y);a(43);var f=function(e){var t=e.title,a=e.summary,n=e.poster,s=e.year,i=e.genres;return r.a.createElement("div",{className:"movie__cover"},r.a.createElement("img",{src:n,alt:t}),r.a.createElement("div",{className:"inner__movie"},r.a.createElement("div",{className:"movies__data"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("h5",{className:"movie__year"},s),r.a.createElement("ul",{className:"genres"},i.map(function(e,t){return r.a.createElement("li",{key:t},e)})),r.a.createElement("p",{className:"movie__summary"},a.slice(0,140),"..."))))},g=(a(44),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0},a.getMoives=Object(m.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:t=e.sent,n=t.data.data.movies,a.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}},e)})),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMoives()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"section"},t?r.a.createElement("div",{className:"loader"},"loading!!!"):r.a.createElement("div",{className:"movie"},a.map(function(e){return r.a.createElement(f,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})})))}}]),t}(r.a.Component));i.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.4862a95f.chunk.js.map