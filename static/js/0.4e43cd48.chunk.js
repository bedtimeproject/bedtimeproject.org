(this["webpackJsonpthe-bedtime-project"]=this["webpackJsonpthe-bedtime-project"]||[]).push([[0],{103:function(e,s,t){},104:function(e,s,t){},69:function(e,s,t){"use strict";t.d(s,"a",(function(){return a}));t(1),t(70);var c=t(0);function a(e){var s=e.children;return Object(c.jsx)("div",{className:"PageTitle-Container",children:Object(c.jsx)("h1",{className:"PageTitle",children:s})})}},70:function(e,s,t){},71:function(e,s,t){"use strict";function c(e){if("string"===typeof e){var s=e;return"#"===s.slice(0,1)&&(s=s.slice(1)),3===s.length&&(s=s.split("").map((function(e){return e+e})).join("")),(299*parseInt(s.substr(0,2),16)+587*parseInt(s.substr(2,2),16)+114*parseInt(s.substr(4,2),16))/1e3>=128?"black":"white"}}t.d(s,"a",(function(){return c}))},74:function(e,s,t){"use strict";t.d(s,"a",(function(){return O}));var c=t(9),a=t(1),r=(t(77),t(78),t(22)),i=t(20),n=t(0);function l(e){var s=e.right,t=e.weather,c=void 0===t?"rain":t;return Object(n.jsx)("div",{className:"RainyWindow-Container ".concat(s?"Right":""),children:Object(n.jsxs)("div",{className:"frame",children:[Object(n.jsxs)("div",{className:"outside",children:[Object(n.jsx)(r.a,{minimal:!0,right:s}),"rain"==c&&Object(n.jsxs)("div",{className:"rain",children:[Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"}),Object(n.jsx)("div",{className:"drop"})]}),"snow"==c&&Object(n.jsx)(i.a,{})]}),Object(n.jsx)("div",{className:"window top"}),Object(n.jsx)("div",{className:"window bottom"}),Object(n.jsx)("div",{className:"sill",children:s&&Object(n.jsxs)("div",{className:"items",children:[Object(n.jsxs)("div",{className:"planter",children:[Object(n.jsx)("div",{className:"leaf"}),Object(n.jsx)("div",{className:"leaf"}),Object(n.jsx)("div",{className:"leaf"})]}),Object(n.jsxs)("div",{className:"books",children:[Object(n.jsx)("div",{className:"book"}),Object(n.jsx)("div",{className:"book"}),Object(n.jsx)("div",{className:"book"})]})]})})]})})}var j=t(6);t(79);function o(e){var s=e.link,t=e.title;return Object(n.jsx)("div",{className:"ShelfLabel-Container",children:Object(n.jsx)(j.b,{to:s,children:t})})}t(80);function d(e){var s=e.label,t=e.href;return Object(n.jsxs)("div",{className:"Drawers-wrap",children:[Object(n.jsx)("h2",{children:s}),Object(n.jsxs)("ul",{className:"drawers",children:[Object(n.jsx)(j.b,{className:"drawer",to:t,"aria-label":"Navigates to "+s,tabIndex:-1,children:Object(n.jsx)("span",{className:"handle"})}),Object(n.jsx)(j.b,{className:"drawer",to:t,"aria-label":"Navigates to "+s,children:Object(n.jsx)("span",{className:"handle"})}),Object(n.jsx)(j.b,{className:"drawer third",to:t,"aria-label":"Navigates to "+s,tabIndex:-1,children:Object(n.jsx)("span",{className:"handle"})})]})]})}var b=t(21);function O(e){var s=e.books1,t=e.books2,r=e.books3,i=e.pageTitle,j=e.drawerHref,O=e.drawerLabel,x=e.shelf1Link,v=e.shelf1Label,m=e.shelf2Link,u=e.shelf2Label,h=e.shelf3Link,p=e.shelf3Label,f=Object(a.useState)("rain"),N=Object(c.a)(f,2),k=N[0],w=N[1];return Object(a.useEffect)((function(){w(Object(b.a)())}),[]),Object(n.jsxs)("div",{className:"Bookshelf-Container",children:[Object(n.jsx)("div",{className:"RainyWindowLeft RainyWindow",children:Object(n.jsx)(l,{weather:k})}),Object(n.jsxs)("div",{className:"BooksContainer",children:[i&&Object(n.jsx)("h1",{className:"Bookshelf-Page-Title",children:i.toUpperCase()}),v&&Object(n.jsx)(o,{title:v,link:x}),Object(n.jsxs)("div",{className:"Row",children:[s,Object(n.jsx)("div",{className:"Shelf"})]}),u&&Object(n.jsx)(o,{title:u,link:m}),Object(n.jsxs)("div",{className:"Row",children:[t,Object(n.jsx)("div",{className:"Shelf"})]}),p&&Object(n.jsx)(o,{title:p,link:h}),Object(n.jsxs)("div",{className:"Row",children:[r,Object(n.jsx)("div",{className:"Shelf"})]}),j&&Object(n.jsx)(d,{href:j,label:O})]}),Object(n.jsx)("div",{className:"RainyWindowRight RainyWindow",children:Object(n.jsx)(l,{right:!0,weather:k})})]})}},75:function(e,s,t){"use strict";t.d(s,"a",(function(){return n}));t(1);var c=t(6);t(81);var a=t(71),r=t(0),i=["green","maroon","purple"];function n(e){var s,t=e.link,n=e.story,l=e.backgroundColor,j=l||(s=i)[Math.floor(Math.random()*s.length)];return Object(r.jsxs)(c.b,{className:"BookLink-Container",style:{backgroundColor:j},to:t,children:[Object(r.jsx)("div",{className:"TitleContainer",children:Object(r.jsx)("strong",{style:{color:Object(a.a)(j)},children:null===n||void 0===n?void 0:n.title})}),Object(r.jsx)("div",{style:{color:Object(a.a)(j)},children:null===n||void 0===n?void 0:n.field_author})]})}},76:function(e,s,t){"use strict";function c(e){return e.replaceAll(".","").replaceAll("-","").replaceAll("(","").replaceAll(")","").replaceAll("  "," ").replaceAll(" ","-").toLowerCase()}t.d(s,"a",(function(){return c}))},77:function(e,s,t){},78:function(e,s,t){},79:function(e,s,t){},80:function(e,s,t){},81:function(e,s,t){},82:function(e,s,t){"use strict";function c(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function a(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);s&&(c=c.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,c)}return t}function r(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?a(Object(t),!0).forEach((function(s){c(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}t.d(s,"a",(function(){return r}))},92:function(e,s,t){"use strict";t.d(s,"a",(function(){return n}));t(1),t(103);var c=t(69),a=t(6),r=(t(104),t(0));function i(e){var s=e.backLink,t=e.backLinkText;return Object(r.jsxs)("div",{className:"MoreContentSoon-Container",children:[Object(r.jsx)("div",{children:Object(r.jsx)("strong",{children:"More Coming Soon!"})}),s&&Object(r.jsx)("div",{className:"Backlink",children:Object(r.jsx)(a.b,{to:s,children:t})})]})}function n(e){var s=e.storyData,t=e.backLink,a=e.backLinkText;return s?Object(r.jsx)("div",{className:"PaperStory-Container",children:Object(r.jsxs)("article",{className:"Paper-Container",children:[Object(r.jsxs)("div",{className:"Heading-Information",children:[Object(r.jsx)(c.a,{children:s.title}),Object(r.jsxs)("div",{children:["By ",s.field_author]})]}),Object(r.jsx)("div",{className:"Chapters",children:s.field_chapters&&Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:s.field_chapters}})}),"True"==s.field_more_content_coming_soon&&Object(r.jsx)(i,{backLink:t,backLinkText:a})]})}):null}}}]);
//# sourceMappingURL=0.4e43cd48.chunk.js.map