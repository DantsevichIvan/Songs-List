(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],[,,function(e,t,a){e.exports={container:"search_container__3obQU",selects:"search_selects__1HJ0i",select:"search_select__2vG1h"}},function(e,t,a){e.exports={wrapper:"content_wrapper__GndHN",container:"content_container__26EEl",homeTr:"content_homeTr__1q48u",content:"content_content__3HHzt"}},,,function(e,t,a){e.exports={container:"paginator_container__2DheX",page:"paginator_page__JMSVl",selectedPage:"paginator_selectedPage__eS9wB"}},function(e,t,a){e.exports={container:"quartity_container__8eK1U",quartity:"quartity_quartity__3idRz",selectedAmount:"quartity_selectedAmount__3CtwT"}},,,,,,function(e,t,a){e.exports={container:"container_container__3EhA7"}},function(e,t,a){e.exports={container:"searchBar_container__F1rq6"}},function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),s=(a(20),a(9)),l=a.n(s),u=a(12),i=a(1),m=a(3),p=a.n(m),d=function(e){var t=e.arrSongs;return r.a.createElement("div",{className:p.a.wrapper},r.a.createElement("table",{className:p.a.container},r.a.createElement("tbody",null,r.a.createElement("tr",{className:p.a.homeTr},r.a.createElement("th",{width:100},"Singer"),r.a.createElement("th",{width:200},"Song"),r.a.createElement("th",{width:80},"Ganre"),r.a.createElement("th",{width:50},"Year")),t.map((function(e){return r.a.createElement("tr",{className:p.a.content,key:e.id},r.a.createElement("td",null,e.nameSinger),r.a.createElement("td",null,e.song),r.a.createElement("td",null,e.ganre),r.a.createElement("td",null,e.year))})))))},g=a(2),f=a.n(g),h=function(e){var t=e.arr,a=e.sort;return r.a.createElement("div",{className:f.a.selects},r.a.createElement("span",null,"Sort:"),r.a.createElement("select",{name:"",id:"",className:f.a.select,onChange:function(e){return a(e)}},t.map((function(e){return r.a.createElement("option",{value:e,key:e,onChange:function(){return a(e)}},e)}))))},_=function(e){var t=e.allSongs,a=e.updateSort,c=Object(n.useState)(["All","nameSinger","song","ganre","year"]),o=Object(i.a)(c,2),s=o[0],l=(o[1],Object(n.useState)([])),u=Object(i.a)(l,2),m=u[0],p=u[1];Object(n.useEffect)((function(){p(t)}),[t]);return r.a.createElement("div",{className:f.a.container},r.a.createElement(h,{arr:s,sort:function(e){var t=e.target.value,n=[].slice.call(m).sort((function(e,a){return e[t]<a[t]?-1:e[t]>a[t]?1:0}));a({data:n,type:t})}}))},E=a(13),v=a.n(E),S=function(e){var t=e.arrSongs,a=e.allSongs,n=e.updateSort;return r.a.createElement("div",{className:v.a.container},r.a.createElement(d,{arrSongs:t}),r.a.createElement(_,{allSongs:a,updateSort:n}))},b=a(4),j=a(6),y=a.n(j),O=a(5),w=a.n(O),N=(a(22),function(e){var t=e.pages,a=e.currentPage,n=e.changeCurrentPage;return r.a.createElement("div",{className:y.a.container},t.map((function(e){return r.a.createElement("span",{className:w()(Object(b.a)({},y.a.selectedPage,a===e),y.a.page),key:e,onClick:function(t){return n(e)}},e)})))}),x=a(7),k=a.n(x),C=function(e){var t=e.quartity,a=e.currentAmount,n=e.changeQuartityPage;return r.a.createElement("div",{className:k.a.container},t.map((function(e){return r.a.createElement("span",{className:w()(Object(b.a)({},k.a.selectedAmount,a===e),k.a.quartity),key:e,onClick:function(t){return n(e)}},e)})))},q=a(14),A=a.n(q),P=function(e){var t=e.data,a=e.term,n=e.update;return r.a.createElement("div",{className:A.a.container},r.a.createElement("input",{type:"text",placeholder:"Search ".concat(a),onChange:function(e){var r=e.target.value.toLowerCase(),c=t.filter((function(e){return e[a].toLowerCase().includes(r)}));n({data:c,term:r})}}))};a(28);var B=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),s=Object(i.a)(o,2),m=s[0],p=s[1],d=Object(n.useState)([]),g=Object(i.a)(d,2),f=g[0],h=g[1],_=Object(n.useState)(1),E=Object(i.a)(_,2),v=E[0],b=E[1],j=Object(n.useState)(5),y=Object(i.a)(j,2),O=y[0],w=y[1],x=Object(n.useState)([5,10,25,50,100]),k=Object(i.a)(x,1)[0],q=Object(n.useCallback)(Object(u.a)(l.a.mark((function e(){var t,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3001/songs");case 3:return t=e.sent,e.next=6,fetch("http://localhost:3001/songs?_page=".concat(v,"&_limit=").concat(O));case 6:return a=e.sent,e.next=9,t.json();case 9:return n=e.sent,A(n),e.next=13,a.json();case 13:return r=e.sent,e.next=16,p(n);case 16:return e.next=18,c(r);case 18:e.next=22;break;case 20:e.prev=20,e.t0=e.catch(0);case 22:case"end":return e.stop()}}),e,null,[[0,20]])}))),[v,O]),A=function(e){for(var t=Math.ceil(e.length/O),a=[],n=1;n<=t;n++)a.push(n);h(a)};function B(e){return e.slice(0,5)}Object(n.useEffect)((function(){q()}),[q]);var H=function(e){var t=e.data;""===e.term?(c(B(t)),b(1)):c(t)};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Container"},r.a.createElement(S,{arrSongs:a,allSongs:m,updateSort:function(e){var t=e.data;"All"===e.type?(c(B(t)),b(1)):c(t)}})),r.a.createElement("div",{className:"SearchBar"},r.a.createElement(P,{data:m,term:"nameSinger",update:H}),r.a.createElement(P,{data:m,term:"ganre",update:H}),r.a.createElement(P,{data:m,term:"year",update:H})),r.a.createElement("div",{className:"Navigation"},r.a.createElement(N,{pages:f,currentPage:v,changeCurrentPage:function(e){b(e),c([])}}),r.a.createElement(C,{quartity:k,currentAmount:O,changeQuartityPage:function(e){w(e),c([])}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[15,1,2]]]);
//# sourceMappingURL=main.5033a97f.chunk.js.map