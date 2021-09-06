(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{44:function(n,e,t){"use strict";t.r(e);var r,o,i,a,c,d,s,l,u,h,p,x,b,m,j,f,g,O,k,w,v,y,B,M=t(0),C=t.n(M),z=t(18),A=t.n(z),E=t(15),L=t(3),S=t(2),T=S.c.div(r||(r=Object(L.a)(["\n    display: flex;\n    flex-direction: column;\n    max-width: 1600px;\n    margin: 0 auto;\n"]))),D=S.c.header(o||(o=Object(L.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 20px 50px;\n    background-color: ",";\n    transition: background-color .3s;\n\n    @media(max-width: 450px) {\n        padding: 20px 25px;\n    }\n"])),(function(n){var e=n.theme;return n.darkmode?e.colors.darkBlue:e.colors.white})),N=S.c.button(i||(i=Object(L.a)(["\n    padding: 5px 10px;\n    color: ",";\n    border-style: none;\n    background-color: transparent;\n    font-weight: 600;\n    cursor: pointer;\n    transition: color .3s;\n\n    @media(max-width: 450px) {\n        padding: 0;\n    }\n    \n    i{\n        padding-right: 10px;\n        transform: rotate(-20deg);\n    }\n"])),(function(n){var e=n.theme;return n.darkmode?e.colors.white:e.colors.lightModeBlue})),R=S.c.h1(a||(a=Object(L.a)(["\n    color: ",";\n    font-size: 20px;\n    font-weight: 800;\n    transition: color .3s;\n\n    @media(max-width: 450px) {\n        font-size: 18px;\n    }\n"])),(function(n){var e=n.theme;return n.darkmode?e.colors.white:e.colors.lightModeBlue})),F=t(1),_=function(n){var e=n.darkmode,t=n.switchMode;return Object(F.jsxs)(D,{darkmode:e,children:[Object(F.jsx)(R,{darkmode:e,children:"Where in the world?"}),Object(F.jsxs)(N,{darkmode:e,onClick:t,children:[Object(F.jsx)("i",{className:"".concat(e?"fas":"far"," fa-moon")}),"Dark Mode"]})]})},G={colors:{darkBlue:"hsl(209, 23%, 22%)",veryDarkBlue:"hsl(207, 26%, 17%)",lightModeBlue:"hsl(200, 15%, 8%)",darkGray:"hsl(0, 0%, 52%)",lightGray:"hsl(0, 0%, 98%)",white:"hsl(0, 0%, 100%)"}},I=Object(S.b)(c||(c=Object(L.a)(["\n    *, *::after, *::before {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n    \n    html {\n        scroll-behavior: smooth;\n    }\n    \n    body {\n        font-family: 'Nunito Sans', sans-serif;\n        background-color: ",";\n        transition: background-color .3s;\n    }\n\n    a, button {\n        font-family: 'Nunito Sans', sans-serif;\n    }\n"])),(function(n){var e=n.theme;return n.darkmode?e.colors.veryDarkBlue:e.colors.lightGray})),H=t(10),P=t(20),V=t(30),W=t(31),q=t(21),J=t(6),U="REQUEST_DATA",Q="GET_DATA",K="GET_DATA_FAILED",X="FILTER_DATA",Y="FILTER_SEARCHED",Z="SEARCH_COUNTRIES",$="SHOW_ALL",nn=function(n){return{type:X,region:n}},en=function(){return function(n){n({type:U}),setTimeout((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(n){if(n.ok)return n.json()})).then((function(e){return n(function(n){return{type:Q,data:n}}(e))})).catch((function(e){return n(function(n){return{type:K,error:n}}(e))}))}),2e3)}},tn={isLoading:!1,isError:!1,error:"",countries:[],filtered:[],searchedFiltered:[],searched:[],noMatches:!1},rn=Object(P.createStore)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case U:return Object(J.a)(Object(J.a)({},n),{},{isLoading:!0});case Q:return Object(J.a)(Object(J.a)({},n),{},{isLoading:!1,countries:e.data});case K:return Object(J.a)(Object(J.a)({},n),{},{isLoading:!1,isError:!0,error:e.error});case X:var t=Object(q.a)(n.countries);return t=t.filter((function(n){return n.region.toLowerCase()===e.region.toLowerCase()})),Object(J.a)(Object(J.a)({},n),{},{filtered:t,searched:[],noMatches:!1});case Y:var r=Object(q.a)(n.searched);return r=r.filter((function(n){return n.region.toLowerCase()===e.region.toLowerCase()})),Object(J.a)(Object(J.a)({},n),{},{filtered:[],searchedFiltered:r,noMatches:!r.length&&!0});case Z:var o=Object(q.a)(n.countries);return o=o.filter((function(n){return n.name.toLowerCase().includes(e.phrase)})),Object(J.a)(Object(J.a)({},n),{},{filtered:[],searched:o,searchedFiltered:[],noMatches:!o.length&&!0});case $:return Object(J.a)(Object(J.a)({},n),{},{filtered:[],searchedFiltered:[],searched:[],noMatches:!1});default:return n}}),Object(V.composeWithDevTools)(Object(P.applyMiddleware)(W.a))),on=function(n){var e=n.children;return Object(F.jsx)(H.a,{store:rn,children:e})},an=S.c.main(d||(d=Object(L.a)(["\n    padding: 25px 50px;\n    background-color: ",";\n    transition: background-color .3s;\n\n    @media(max-width: 850px) {\n        padding: 20px 40px;\n    }\n    @media(max-width: 650px) {\n        padding: 20px 30px;\n    }\n\n    @media(max-width: 450px) {\n        padding: 15px 25px;\n    }\n\n    & h2 {\n        color: ",";\n        transition: color .3s;\n    }\n"])),(function(n){var e=n.theme;return n.darkmode?e.colors.veryDarkBlue:e.colors.lightGray}),(function(n){var e=n.theme;return n.darkmode?e.colors.white:e.colors.lightModeBlue})),cn=S.c.section(s||(s=Object(L.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(4, 20%);\n    justify-content: space-between;\n    row-gap: 50px;\n\n    @media(max-width: 850px) {\n        display: block;\n        width: 80%;\n        margin: 50px auto;\n    }\n    @media(max-width: 650px) {\n        width: 90%;\n    }\n\n    @media(max-width: 450px) {\n        width: 95%;\n    }\n"]))),dn=S.c.div(l||(l=Object(L.a)(["\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    i {\n        font-size: 50px;\n        color: ",";\n        animation: rotation 1.5s linear infinite;\n        transition: color .3s;\n    }\n\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg);\n        }\n        to {\n            transform: rotate(360deg);\n        }\n    }\n"])),(function(n){var e=n.theme;return n.darkmode?e.colors.white:e.colors.lightModeBlue})),sn=S.c.button(u||(u=Object(L.a)(["\n    display: block;\n    margin: 30px 0 0 auto;\n    background-color: transparent;\n    border-style: none;\n    padding: 0;\n    color: rgba(0, 0, 0, 0.5);\n    transition: color .3s ;\n    cursor: pointer;\n\n    &:hover {\n        color: black;\n    }\n\n    i {\n        font-size: 50px;\n    }\n"]))),ln=t(14),un=Object(S.c)(ln.b)(h||(h=Object(L.a)(["\n    display: block;\n    background-color: ",";\n    border-radius: 5px;\n    text-decoration: none;\n    transition: background-color .3s;\n\n    @media(max-width: 850px) {\n        margin-bottom: 50px;\n    }\n        \n    & img {\n        border-radius: 5px 5px 0 0;\n        width: 100%;\n\n        @media(max-width: 850px) {\n            max-height: 400px;\n        }\n    }\n"])),(function(n){var e=n.theme;return"true"===n.darkmode?e.colors.darkBlue:e.colors.white})),hn=S.c.div(p||(p=Object(L.a)(["\n    padding: 15px;\n    color: ",";\n    transition: color .3s;\n\n    @media(max-width: 850px) {\n        padding: 25px;\n    }\n\n    & h2 {\n        font-size: 16px;\n        font-weight: 800;\n        margin-bottom: 10px;\n\n        @media(max-width: 850px) {\n            font-size: 20px;\n        }\n        @media(max-width: 400px) {\n            font-size: 18px;\n        }\n    }\n    & p {\n        font-size: 12px;\n        font-weight: 300;\n        margin: 3px  0;\n\n        @media(max-width: 850px) {\n            font-size: 14px;\n            margin: 5px 0;\n        }\n\n        @media(max-width: 400px) {\n            font-size: 16px;\n        }\n\n        & span {\n            font-weight: 600;\n            font-size: 14px;\n\n            @media(max-width: 850px) {\n            font-size: 16px;\n            }\n            @media(max-width: 400px) {\n            font-size: 15px;\n            }\n\n        }\n    }\n"])),(function(n){var e=n.theme;return n.darkmode?e.colors.white:e.colors.lightModeBlue})),pn=function(n){var e=n.country,t=n.darkmode,r=e.flag,o=e.name,i=e.population,a=e.region,c=e.capital;return Object(F.jsxs)(un,{darkmode:"".concat(t),to:"/country/".concat(o),children:[Object(F.jsx)("img",{src:r,alt:"country flag"}),Object(F.jsxs)(hn,{darkmode:t,children:[Object(F.jsx)("h2",{children:o}),Object(F.jsxs)("p",{children:[Object(F.jsx)("span",{children:"Population:"})," ",i]}),Object(F.jsxs)("p",{children:[Object(F.jsx)("span",{children:"Region:"})," ",a]}),Object(F.jsxs)("p",{children:[Object(F.jsx)("span",{children:"Capital:"})," ",c]})]})]})},xn=t(32),bn=t.n(xn),mn=function(n){var e=n.darkmode;bn.a.polyfill();var t=Object(M.useState)(0),r=Object(E.a)(t,2),o=r[0],i=r[1],a=Object(H.b)(),c=Object(H.c)((function(n){return n.isLoading})),d=Object(H.c)((function(n){return n.filtered.length?n.filtered:n.searchedFiltered.length?n.searchedFiltered:n.noMatches?void 0:n.searched.length?n.searched:n.noMatches?void 0:n.countries})),s=d?d.map((function(n){return Object(F.jsx)(pn,{darkmode:e,country:n},n.name)})):[];Object(M.useEffect)((function(){a(en())}),[a]),Object(M.useEffect)((function(){i(document.querySelector("main").offsetHeight)}),[d]);return Object(F.jsxs)(an,{darkmode:e,children:[Object(F.jsx)(cn,{children:s}),c&&!s.length?Object(F.jsx)(dn,{darkmode:e,children:Object(F.jsx)("i",{className:"fas fa-sync-alt"})}):null,o>window.innerHeight?Object(F.jsx)(sn,{onClick:function(){document.querySelector("header").scrollIntoView({behavior:"smooth"})},children:Object(F.jsx)("i",{className:"fas fa-chevron-circle-up"})}):null,d||c?null:Object(F.jsx)("h2",{children:"No matching countries"})]})},jn=S.c.div(x||(x=Object(L.a)(["\n    display: flex;\n    justify-content: space-between;\n    background-color: ",";\n    padding: 40px 50px 15px 50px;\n    transition: background-color .3s;\n\n    @media(max-width: 850px) {\n        flex-wrap: wrap;\n        padding: 40px 35px 15px 35px;\n    }\n"])),(function(n){var e=n.theme;return n.darkmode?e.colors.veryDarkBlue:e.colors.lightGray})),fn=S.c.form(b||(b=Object(L.a)(["\n    flex-basis: 30%;\n    background-color: ",";\n    border-radius: 5px;\n    transition: background-color .3s;\n\n    @media(max-width: 850px){\n        flex-basis: 100%;\n        height: 50px;\n        margin-bottom: 35px;\n    }\n\n    & button {\n        background-color: transparent;\n        color: ",";\n        border-style: none;\n        height: 100%;\n        width: 20%;\n        cursor: pointer;\n        transition: color .3s;\n\n        @media(max-width: 850px) {\n            width: 15%;\n        }\n    }\n\n    & input {\n        height: 100%;\n        width: 80%;\n        background-color: transparent;\n        border-style: none;\n        color: ",";\n        transition: color .3s;\n\n        @media(max-width: 850px) {\n            width: 85%;\n        }\n    }\n"])),(function(n){var e=n.theme;return n.darkmode?e.colors.darkBlue:e.colors.white}),(function(n){var e=n.theme;return n.darkmode?e.colors.white:e.colors.lightModeBlue}),(function(n){var e=n.theme;return n.darkmode?e.colors.white:e.colors.lightModeBlue})),gn=S.c.div(m||(m=Object(L.a)(["\n    position: relative;\n\n"]))),On=S.c.button(j||(j=Object(L.a)(["\n        background-color: ",";\n        border-radius: 5px;\n        border-style: none;\n        padding: 15px 20px;\n        color: ",";\n        cursor: pointer;\n        transition: background-color .3s, color .3s;\n\n        & i{\n            padding-left: 20px;\n            font-size: 10px;\n        }\n"])),(function(n){var e=n.theme;return n.darkmode?e.colors.darkBlue:e.colors.white}),(function(n){var e=n.theme;return n.darkmode?e.colors.white:e.colors.lightModeBlue})),kn=S.c.div(f||(f=Object(L.a)(["\n    position: absolute;\n    top: calc(100% + 5px);\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: ",";\n    color: ",";\n    border-radius: 5px;\n    padding: 15px;\n    transition: background-color .3s, color .3s;\n\n    & button {\n        position: relative;\n        color: inherit;\n        background-color: transparent;\n        border-style: none;\n        text-align: left;\n        cursor: pointer;\n\n        &::after {\n            position: absolute;\n            z-index: 1;\n            content: '';\n            right: 20%;\n            top: 0;\n            height: 100%;\n            width: 2px;\n            background-color: ",";\n            opacity: 0;\n            transition: opacity .2s, background-color .3s; \n        }\n\n        &:hover::after {\n            opacity: 1;\n        }\n    }\n    & button:not(:last-child) {\n        margin-bottom: 5px;\n    }\n"])),(function(n){var e=n.theme;return n.darkmode?e.colors.darkBlue:e.colors.white}),(function(n){var e=n.theme;return n.darkmode?e.colors.white:e.colors.lightModeBlue}),(function(n){var e=n.theme;return n.darkmode?e.colors.white:e.colors.lightModeBlue})),wn=function(n){var e=n.darkmode,t=n.value,r=n.setValue,o=Object(M.useState)(!1),i=Object(E.a)(o,2),a=i[0],c=i[1],d=Object(H.b)(),s=Object(H.c)((function(n){return n.searched})),l=function(n){var e=n.target.name;t&&s.length&&d(function(n){return{type:Y,region:n}}(e)),t&&!s.length&&(d(nn(e)),r("")),t||d(nn(e))};return Object(F.jsxs)(jn,{onClick:function(){return c(!1)},darkmode:e,children:[Object(F.jsxs)(fn,{onSubmit:function(n){n.preventDefault(),d(t?{type:Z,phrase:t.toLowerCase()}:{type:$})},darkmode:e,children:[Object(F.jsx)("button",{type:"submit",children:Object(F.jsx)("i",{className:"fas fa-search"})}),Object(F.jsx)("input",{value:t,onChange:function(n){return r(n.target.value)},type:"text",placeholder:"Search for a country..."})]}),Object(F.jsxs)(gn,{darkmode:e,children:[Object(F.jsxs)(On,{onClick:function(n){n.stopPropagation(),c(!a)},darkmode:e,children:["Filter by region ",Object(F.jsx)("i",{className:"fas fa-chevron-".concat(a?"up":"down")})]}),a?Object(F.jsxs)(kn,{darkmode:e,children:[Object(F.jsx)("button",{onClick:l,name:"Africa",children:"Africa"}),Object(F.jsx)("button",{onClick:l,name:"Americas",children:"America"}),Object(F.jsx)("button",{onClick:l,name:"Asia",children:"Asia"}),Object(F.jsx)("button",{onClick:l,name:"Europe",children:"Europe"}),Object(F.jsx)("button",{onClick:l,name:"Oceania",children:"Oceania"})]}):null]})]})},vn=t(5),yn=S.c.div(g||(g=Object(L.a)(["\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    margin: 50px 50px 0;\n    min-height: 300px;\n    padding-top: 100px;\n\n    @media(max-width: 850px) {\n        display: block;\n        min-height: 80vh;\n        margin: 50px 70px 0;\n    }\n\n    @media(max-width: 650px) {\n        margin: 50px 50px 0;\n    }\n    \n    @media(max-width: 450px) {\n        margin: 50px 30px 0;\n    }\n"]))),Bn=Object(S.c)(ln.b)(O||(O=Object(L.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: ",";\n    color: ",";\n    text-decoration: none;\n    padding: 10px 30px;\n    border-radius: 5px;\n    box-shadow: 0 0 2px black;\n    transition: background-color .3s, color .3s;\n\n    i{\n        margin-right: 10px;\n    }\n"])),(function(n){var e=n.theme;return"true"===n.darkmode?e.colors.darkBlue:e.colors.white}),(function(n){var e=n.theme;return"true"===n.darkmode?e.colors.white:e.colors.lightModeBlue})),Mn=S.c.div(k||(k=Object(L.a)(["\n    align-self: center;\n    flex-basis: 45%;\n    background-color: ",";\n    padding: 10px;\n    border-radius: 5px;\n    transition: background-color .3s;\n\n    @media(max-width: 1050px) {\n        flex-basis: 50%;\n    }\n    \n\n    & img {\n        width: 100%;\n        min-height: 100%;\n        display: block;\n    }\n"])),(function(n){var e=n.theme;return n.darkmode?e.colors.darkBlue:e.colors.white})),Cn=S.c.div(w||(w=Object(L.a)(["\n    flex-basis: 45%;\n    margin-top: 25px;\n    color: ",";\n    transition: color .3s;\n\n    @media(max-width: 950px) {\n        flex-basis: 40%;\n        font-size: 12px;\n    }\n\n    & h3 {\n        font-size: 20px;\n        margin-bottom: 20px;\n\n        @media(max-width: 850px) {\n            font-size: 22px;\n        }\n    }\n"])),(function(n){var e=n.theme;return n.darkmode?e.colors.white:e.colors.lightModeBlue})),zn=S.c.div(v||(v=Object(L.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    height: 50%;\n\n    & p {\n        flex-basis: 20%;\n        font-size: 13px;\n\n        @media(max-width: 950px) {\n        font-size: 12px;\n        }\n\n        @media(max-width: 850px) {\n            font-size: 15px;\n            margin-bottom: 5px;\n        }\n\n\n        & span {\n            font-weight: 600;\n        }\n    }\n"]))),An=S.c.div(y||(y=Object(L.a)(["\n    margin-top: 10px;\n    font-weight: 600;\n    font-size: 13px;\n    display: flex;\n    flex-wrap: wrap;\n\n    & h4 {\n        font-weight: 600;\n        padding: 5px 0;\n\n        @media(max-width: 850px) {\n            width: 100%;\n        }\n    }\n    & p {\n        margin-left: 5px;\n        padding: 5px 0;\n    }\n"]))),En=Object(S.c)(ln.b)(B||(B=Object(L.a)(["\n        margin: 0 5px 5px;\n        text-decoration: none;\n        color: ",";\n        padding: 5px 10px;\n        background-color: ",";\n        border-radius: 5px;\n        font-weight: 300;\n        box-shadow: 0 0 2px black;\n        transition: background-color .3s, color .3s;\n\n        @media(max-width: 850px) {\n            margin: 0 5px 5px 0;\n        }\n"])),(function(n){var e=n.theme;return"true"===n.darkmode?e.colors.white:e.colors.lightModeBlue}),(function(n){var e=n.theme;return"true"===n.darkmode?e.colors.darkBlue:e.colors.white})),Ln=function(n){var e=n.darkmode,t=Object(vn.f)().name,r=Object(H.c)((function(n){return n.countries.find((function(n){return n.name===t}))})),o=Object(H.c)((function(n){return n.countries})),i=r.name,a=r.population,c=r.nativeName,d=r.region,s=r.subRegion,l=r.subregion,u=r.capital,h=r.topLevelDomain,p=r.currencies,x=r.languages,b=r.flag,m=r.borders,j=function(){for(var n=[],e=function(e){var t=o.find((function(n){return n.alpha3Code===m[e]}));n.push(t.name)},t=0;t<m.length;t++)e(t);return n}();return Object(F.jsxs)(yn,{darkmode:e,children:[Object(F.jsxs)(Bn,{darkmode:"".concat(e),to:"/",children:[Object(F.jsx)("i",{className:"fas fa-long-arrow-alt-left"}),"Back"]}),Object(F.jsx)(Mn,{darkmode:e,children:Object(F.jsx)("img",{src:b,alt:"flag"})}),Object(F.jsxs)(Cn,{darkmode:e,children:[Object(F.jsx)("h3",{children:i}),Object(F.jsxs)(zn,{children:[Object(F.jsxs)("p",{children:[Object(F.jsx)("span",{children:"Native Name: "})," ",c]}),Object(F.jsxs)("p",{children:[Object(F.jsx)("span",{children:"Population: "}),a]}),Object(F.jsxs)("p",{children:[Object(F.jsx)("span",{children:"Region: "}),d]}),Object(F.jsxs)("p",{children:[Object(F.jsx)("span",{children:"Sub Region: "}),s||l]}),Object(F.jsxs)("p",{children:[Object(F.jsx)("span",{children:"Capital: "}),u]}),Object(F.jsxs)("p",{children:[Object(F.jsx)("span",{children:"Top Level Domain: "}),h]}),Object(F.jsxs)("p",{children:[Object(F.jsx)("span",{children:"Currencies: "}),p.map((function(n){return n.code}))]}),Object(F.jsxs)("p",{children:[Object(F.jsx)("span",{children:"Languages: "}),x.map((function(n){return n.name})).join(", ")]})]}),Object(F.jsxs)(An,{children:[Object(F.jsx)("h4",{children:"Border Countries: "}),j.length?j.map((function(n){return Object(F.jsx)(En,{darkmode:"".concat(e),to:"/country/".concat(n),children:n},n)})):Object(F.jsx)("p",{children:"There are not any border countries"})]})]})]})},Sn=function(){var n=Object(M.useState)(!0),e=Object(E.a)(n,2),t=e[0],r=e[1],o=Object(M.useState)(""),i=Object(E.a)(o,2),a=i[0],c=i[1];return Object(F.jsx)(on,{children:Object(F.jsxs)(S.a,{theme:G,children:[Object(F.jsx)(I,{darkmode:t}),Object(F.jsx)(ln.a,{basename:"/REST-Countries-Api-",children:Object(F.jsxs)(T,{children:[Object(F.jsx)(_,{darkmode:t,switchMode:function(){return r(!t)}}),Object(F.jsxs)(vn.c,{children:[Object(F.jsxs)(vn.a,{path:"/",exact:!0,children:[Object(F.jsx)(wn,{value:a,setValue:c,darkmode:t}),Object(F.jsx)(mn,{darkmode:t})]}),Object(F.jsx)(vn.a,{path:"/country/:name",children:Object(F.jsx)(Ln,{darkmode:t})}),Object(F.jsx)(vn.a,{render:function(){return Object(F.jsx)("h1",{style:{color:t?"white":"black",textAlign:"center"},children:"This site doesn't exist"})}})]})]})})]})})};A.a.render(Object(F.jsx)(C.a.StrictMode,{children:Object(F.jsx)(Sn,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.32e9a63e.chunk.js.map