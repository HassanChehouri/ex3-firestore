(this["webpackJsonpex3-firestore"]=this["webpackJsonpex3-firestore"]||[]).push([[0],{53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},71:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(27),r=c.n(a),i=c(21),o=(c(53),c(54),c(12));c(55);var j=c(44),l=c.n(j),d=c(89),u=(c(56),c(2));function b(e){var t=function(e){var t={nbArticles:0,totalItems:0,st:0,tps:0,tvq:0,total:0};t.nbArticles=e.length,t.totalItems=e.reduce((function(e,t){return e+t.qte}),0);var c=e.reduce((function(e,t){return e+t.prix*t.qte}),0);t.st=c.toFixed(2);var n=.05*c;t.tps=n.toFixed(2);var s=.09975*c;return t.tvq=s.toFixed(2),t.total=(c+n+s).toFixed(2),t}(e.articles);return Object(u.jsxs)("div",{className:"SommairePanier",children:[Object(u.jsxs)("span",{children:["Articles diff\xe9rents : ",t.nbArticles]}),Object(u.jsxs)("span",{children:["Total # items : ",t.totalItems]}),Object(u.jsxs)("span",{children:["Sous-total : ",t.st]}),Object(u.jsxs)("span",{children:["TPS : ",t.tps]}),Object(u.jsxs)("span",{children:["TVQ : ",t.tvq]}),Object(u.jsxs)("span",{children:["Total : ",t.total]})]})}function O(e){var t=e.etatPanier,c=Object(o.a)(t,1)[0],s=Object.values(c),a=Object(n.useState)(!1),r=Object(o.a)(a,2),j=r[0],O=r[1];return Object(u.jsxs)("header",{className:"Entete",children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)(i.b,{to:"/",children:"Magasin"})}),Object(u.jsxs)("ul",{className:"navPrincipale",children:[Object(u.jsx)("li",{children:Object(u.jsx)(i.c,{to:"/nos-produits",activeClassName:"navActive",children:"Produits"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.c,{to:"/a-propos-de-nous",activeClassName:"navActive",children:"\xc0 propos de nous"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.c,{to:"/contactez-nous",activeClassName:"navActive",children:"Contactez-nous"})})]}),Object(u.jsxs)("ul",{className:"navUtilisateur",children:[Object(u.jsxs)("li",{children:[Object(u.jsx)(d.a,{onClick:function(){return O(!j)},badgeContent:s.reduce((function(e,t){return e+t.qte}),0),color:"secondary",children:Object(u.jsx)(l.a,{})}),j&&Object(u.jsx)(b,{articles:s})]}),Object(u.jsx)("li",{children:"Mon compte"})]})]})}var x=c(37),p=c.n(x),h=c(16),f=c(45),m=(c(67),c(19));c(68);function v(e){var t=e.onClick,c=e.qte,n=e.texte,s=e.classeCss;return Object(u.jsx)(d.a,{badgeContent:c,color:"primary",children:Object(u.jsx)("button",{onClick:t,className:"BtnAjoutPanier ".concat(s),children:n})})}var g=c(46),N=c.n(g);c(69);function P(e){var t=e.etatPanier,c=e.id,n=e.nom,s=e.prix,a=Object(o.a)(t,2),r=a[0],i=a[1];var j=r[c]?[r[c].qte,Object(u.jsx)(N.a,{}),"rouge"]:[0,"Ajouter au panier",""],l=Object(o.a)(j,3),d=l[0],b=l[1],O=l[2];return Object(u.jsxs)("li",{className:"Produit",children:[Object(u.jsx)("img",{src:"images-produits/"+c+".webp",alt:""}),Object(u.jsxs)("div",{className:"info",children:[Object(u.jsx)("p",{className:"nom",children:n}),Object(u.jsx)("p",{className:"prix",children:s})]}),Object(u.jsx)(v,{onClick:function(){r[c]?i(Object(h.a)(Object(h.a)({},r),{},Object(m.a)({},c,Object(h.a)(Object(h.a)({},r[c]),{},{qte:r[c].qte+1})))):i(Object(h.a)(Object(h.a)({},r),{},Object(m.a)({},c,{nom:n,prix:s,qte:1})))},qte:d,texte:b,classeCss:O})]})}var A=c(31);c(74);A.a.apps.length||A.a.initializeApp({apiKey:"AIzaSyAYkWjhJW0yQmRYDe5a5qIgPtGmibHImz8",authDomain:"ex3-produits-8aad0.firebaseapp.com",databaseURL:"https://ex3-produits-8aad0-default-rtdb.firebaseio.com",projectId:"ex3-produits-8aad0",storageBucket:"ex3-produits-8aad0.appspot.com",messagingSenderId:"593152970140",appId:"1:593152970140:web:bfb47e24f8e39d27398c59",measurementId:"G-TCZ1YQ7F12"});var C=A.a.firestore();function I(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),s=c[0],a=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,C.collection("produits").get();case 3:e.sent.forEach((function(e){return t.push(Object(h.a)({id:e.id},e.data()))})),a(t),console.log(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.jsxs)("div",{className:"ListeProduits",children:[Object(u.jsx)("h2",{children:"Produits disponibles"}),Object(u.jsxs)("ul",{children:["return (",Object(u.jsx)("ul",{className:"ListeProduits",children:s.map((function(t){return Object(u.jsx)("li",{children:Object(u.jsx)(P,Object(h.a)(Object(h.a)({},t),{},{etatPanier:e.etatPanier}))},t.id)}))}),");"]})]})}function q(){return Object(u.jsxs)("div",{className:"Accueil",children:[Object(u.jsx)("h2",{children:"Magasin"}),Object(u.jsx)("p",{children:"Page d'accueil en construction"})]})}function w(){return Object(u.jsxs)("div",{className:"Apropos",children:[Object(u.jsx)("h2",{children:"\xc0 propos de nous"}),Object(u.jsx)("p",{children:"Patati et patata"})]})}function S(){return Object(u.jsxs)("div",{className:"Contact",children:[Object(u.jsx)("h2",{children:"Contactez-nous"}),Object(u.jsx)("p",{children:"Formulaire de contact \xe0 venir"})]})}c(71);var k=(new Date).getFullYear();function y(e){return Object(u.jsxs)("footer",{className:"PiedDePage",children:["\xa9",k," - TIM - Tous droits r\xe9serv\xe9s."]})}var z=c(5);function F(){var e=function(e,t){var c=Object(n.useState)((function(){return JSON.parse(window.localStorage.getItem(t))||e})),s=Object(o.a)(c,2),a=s[0],r=s[1];return Object(n.useEffect)((function(){return window.localStorage.setItem(t,JSON.stringify(a))}),[a,t]),[a,r]}({},"pvt-ex3-panier");return Object(u.jsxs)("div",{className:"Appli",children:[Object(u.jsx)(O,{etatPanier:e}),Object(u.jsx)("section",{className:"contenuPrincipal",children:Object(u.jsxs)(z.c,{children:[Object(u.jsx)(z.a,{path:"/",component:q,exact:!0}),Object(u.jsx)(z.a,{path:"/nos-produits",children:Object(u.jsx)(I,{etatPanier:e,exact:!0})}),Object(u.jsx)(z.a,{path:"/a-propos-de-nous",exact:!0,children:Object(u.jsx)(w,{})}),Object(u.jsx)(z.a,{path:"/contactez-nous",component:S,exact:!0})]})}),Object(u.jsx)(y,{})]})}var T=-1!==window.location.href.search(/github\.io/)?"/".concat("pvt-ex3-firestore"):"";r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(i.a,{basename:T,children:Object(u.jsx)(F,{})})}),document.getElementById("racine"))}},[[73,1,2]]]);
//# sourceMappingURL=main.1e8fa9f1.chunk.js.map