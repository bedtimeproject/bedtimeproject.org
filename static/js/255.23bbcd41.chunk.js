"use strict";(self.webpackChunkthe_bedtime_project=self.webpackChunkthe_bedtime_project||[]).push([[255],{108:function(n,e,t){t.d(e,{Z:function(){return r}});t(9867);var i=t(2834);function r(n){var e=n.children;return(0,i.jsx)("div",{className:"PageTitle-Container",children:(0,i.jsx)("h1",{className:"PageTitle",children:e})})}},9255:function(n,e,t){t.r(e),t.d(e,{default:function(){return u}});var i=t(3430),r=t(9867);var a=t(2834);function s(n){var e=n.quip,t=n.index,i=n.openQuip,r=n.setOpenQuip,s=function(n){if(""!=n&&n)return n.replaceAll('src="/sites/default/files','src="https://drupal.bedtimeproject.dev/sites/default/files')}(e.field_main_image);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:"\n        .QuipsDisplay-Container.Quip".concat(t," {\n          z-index: ").concat(t+1,";\n          animation: sendBackToSpot").concat(t," 1s ease;\n        }\n\n        .QuipsDisplay-Container.Quip").concat(t,".Active {\n          animation: bringToFront").concat(t," 1s ease;\n          z-index: 1000;\n          transform: scale(1.1);\n        }\n\n        @keyframes bringToFront").concat(t," {\n          0% {\n            transform: translateY(0%) scale(1);\n            z-index: ").concat(t+1,";\n          }\n      \n          50% {\n            transform: translateY(-110%) rotate(5deg) rotateX(20deg);\n            z-index: ").concat(t+1,";\n          }\n          51% {\n            z-index: 1000;\n          }\n      \n          100% {\n            transform: translateY(0%) scale(1.1);\n            z-index: 1000;\n          }\n        }\n      \n        @keyframes sendBackToSpot").concat(t," {\n          0% {\n            transform: translateY(0%) scale(1.1);\n            z-index: 1000;\n          }\n      \n          49% {\n            z-index: 1000;\n          }\n\n          50% {\n            transform: translateY(-110%) rotate(5deg) rotateX(20deg);\n            z-index: ").concat(t+1,";\n          }\n      \n          100% {\n            transform: translatey(0%) scale(1);\n            z-index: ").concat(t+1,";\n          }\n        }\n      ")}),(0,a.jsx)("div",{className:"QuipsDisplay-Container Quip".concat(t," ").concat(i===t?"Active":""),style:{top:30*t+80},children:(0,a.jsxs)("div",{className:"QuipsInternalWrapper",children:[(0,a.jsx)("button",{className:"QuipTitleButton",onClick:function(){r(i===t?void 0:t)},children:(0,a.jsx)("h2",{children:e.title})}),(0,a.jsxs)("div",{className:"LeftBox",children:[(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}}),e.field_author&&(0,a.jsxs)("div",{className:"Author",children:["- ",e.field_author]})]}),s&&(0,a.jsx)("div",{className:"RightBox",children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})})]})})]})}var c=t(108),l=t(3624),o=t(2737),d=t(8212);function u(){var n=(0,r.useState)([]),e=(0,i.Z)(n,2),t=e[0],u=e[1],p=(0,r.useState)(void 0),h=(0,i.Z)(p,2),f=h[0],m=h[1],x=(0,r.useState)(!1),v=(0,i.Z)(x,2),j=v[0],Q=v[1];function g(n){var e=Array.from(document.querySelectorAll(".QuipTitleButton")),t=Array.from(document.querySelectorAll(".QuipTitleButton h2")),i=e.includes(n.target),r=t.includes(n.target);i||r||m(void 0)}return(0,r.useEffect)((function(){return fetch("https://drupal.bedtimeproject.dev/rest/views/quips").then((function(n){return n.json()})).then((function(n){u(n.reverse()),Q(!1)})).catch((function(){return Q(!0)})),window.addEventListener("click",g),function(){window.removeEventListener("click",g)}}),[]),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(o.Z,{title:"Quips"}),(0,a.jsx)("div",{className:"QuipsContainer",children:(0,a.jsx)("div",{className:"Limerick-Display-Container",children:(0,a.jsxs)("div",{className:"Drawer",children:[j?(0,a.jsx)("div",{className:"QuipErrorWrapper",children:(0,a.jsx)("p",{children:"Please check your connection and reload this page."})}):t.length?t.map((function(n,e){return(0,a.jsx)(s,{quip:n,index:e,openQuip:f,setOpenQuip:m},e)})):(0,a.jsx)("div",{className:"QuipsLoader",children:(0,a.jsx)(d.Z,{})}),(0,a.jsxs)("div",{className:"drawer",children:[(0,a.jsx)(c.Z,{children:"Quips"}),(0,a.jsx)("div",{className:"handle"})]})]})})})]})}}}]);
//# sourceMappingURL=255.23bbcd41.chunk.js.map