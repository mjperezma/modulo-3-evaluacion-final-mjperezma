(this["webpackJsonpex-final"]=this["webpackJsonpex-final"]||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/title.35f4e68b.png"},21:function(e,a,t){e.exports=t.p+"static/media/logo.779837d7.png"},24:function(e,a,t){e.exports=t(43)},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(19),l=t.n(r),i=(t(29),t(16)),m=t(6),s=(t(30),function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,spiece:e.species,image:e.image,status:e.status,episode:e.episode,origin:e.origin.name}}))}))}),o=t(20),u=t.n(o),_=t(21),E=t.n(_),p=(t(31),function(){return c.a.createElement("header",{className:"header__container"},c.a.createElement("img",{className:"header__container__title",src:u.a,alt:"T\xedtulo Rick & Morty"}),c.a.createElement("img",{className:"header__container__logo",src:E.a,alt:"Logo Rick & Morty"}))}),h=t(7),d=(t(32),t(8)),f=t(9),g=function(e){var a=e.character,t=a.image,n=a.name,r=a.status,l=a.spiece,i=a.origin,m=a.episode,s="Dead"===r?c.a.createElement("span",{className:"icon__div"},"Dead",c.a.createElement(d.a,{className:"icon__dead",icon:f.b})):c.a.createElement("span",null,"Alive",c.a.createElement(d.a,{className:"icon__heart",icon:f.d})),o="Human"===l?c.a.createElement("span",null,"Human",c.a.createElement(d.a,{className:"icon__human",icon:f.e})):c.a.createElement("span",null,"Alien ",c.a.createElement("i",{className:"fab fa-reddit-alien icon__alien"}));return c.a.createElement("main",{className:"container__main"},c.a.createElement("div",{className:"container__main__div"},c.a.createElement(h.b,{to:"/",className:"container__main__link"},c.a.createElement("h3",null," Return to the starting box!"),c.a.createElement("span",null,c.a.createElement(d.a,{icon:f.a})))),c.a.createElement("article",{className:"container__article"},c.a.createElement("img",{src:t,alt:n,className:"container__article--img"}),c.a.createElement("ul",{className:"container__section"},c.a.createElement("li",null,"Name: ",n),c.a.createElement("li",null,"State: ",s),c.a.createElement("li",null,"Spiece: ",o),c.a.createElement("li",null,"Episodes: ",m.length),c.a.createElement("li",null,"Origin: ",i))))},N=(t(40),function(e){var a=e.character,t=a.image,n=a.name,r=a.spiece,l=a.id;return c.a.createElement("article",{className:"item__list",key:l},c.a.createElement("img",{className:"item__list--img",src:t,alt:"Foto de ".concat(n)}),c.a.createElement("section",{className:"item__text"},c.a.createElement(h.b,{to:"/character/".concat(l)},c.a.createElement("h3",{className:"item__list--name"},n),c.a.createElement("p",{className:"item__list--text"},r))))}),v=(t(41),function(e){var a=0===e.characters.length?c.a.createElement("h2",{className:"item__container--text"},"This character: ",e.value," doesn't exist.",c.a.createElement(d.a,{icon:f.c})):"";return c.a.createElement(c.a.Fragment,null,a,c.a.createElement("ul",{className:"item__container"},e.characters.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(N,{character:e}))}))))}),b=(t(42),function(e){return c.a.createElement("form",{className:"input__container",onSubmit:function(e){e.preventDefault()}},c.a.createElement("label",{className:"input__label"},"Search here for your character!"),c.a.createElement("input",{type:"text",placeholder:"Write here",className:"input__text",name:"name",id:"name",value:e.value,onChange:function(a){a.preventDefault(),e.handleFilter({value:a.target.value,key:"name"})}}))}),x=function(e){return c.a.createElement(n.Fragment,null,c.a.createElement(b,{handleFilter:e.handleFilter,value:e.value}),c.a.createElement(v,{characters:e.characters,value:e.value}))},y=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),o=Object(i.a)(l,2),u=o[0],_=o[1];Object(n.useEffect)((function(){s().then((function(e){r(e)}))}),[]);var E=t.sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0})),h=t.filter((function(e){return e.name.toUpperCase().includes(u.toUpperCase())}));return c.a.createElement("div",{className:"app__container"},c.a.createElement(p,null),c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/"},c.a.createElement(x,{characters:h,value:u,sort:E,handleFilter:function(e){"name"===e.key&&_(e.value)}})),c.a.createElement(m.a,{path:"/character/:id",render:function(e){var a=parseInt(e.match.params.id),n=t.find((function(e){return e.id===a}));return void 0===n?c.a.createElement("p",{className:"app__container--text"},"This character doesn't exist in this litle world"):c.a.createElement(g,{character:n})}})))};l.a.render(c.a.createElement(h.a,null,c.a.createElement(y,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.678afd8a.chunk.js.map