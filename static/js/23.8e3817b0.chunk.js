(this["webpackJsonpthe-bedtime-project"]=this["webpackJsonpthe-bedtime-project"]||[]).push([[23],{105:function(t,e,r){},151:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return h}));var c=r(9),n=r(1),a=r(3),s=r(11),i=r(18),o=r(75),j=r(74),u=r(82),b=r(92),l=r(19),d=r(0);function f(t){var e=t.story,r=Object(n.useState)(e),a=Object(c.a)(r,2),s=a[0],i=a[1];return Object(n.useEffect)((function(){fetch("https://drupal.bedtimeproject.dev/rest/views/story?title="+(null===e||void 0===e?void 0:e.title)).then((function(t){return t.json()})).then((function(t){var e,r=Object(u.a)(Object(u.a)({},t[0]),{},{field_chapters:Object(l.a)(null===(e=t[0])||void 0===e?void 0:e.field_chapters)});i(r)}))}),[]),Object(d.jsx)(b.a,{storyData:s,backLink:"/read/stories",backLinkText:"Back to Stories"})}r(105);var O=r(76);function h(){var t=Object(n.useState)([]),e=Object(c.a)(t,2),r=e[0],u=e[1];return Object(n.useEffect)((function(){fetch("https://drupal.bedtimeproject.dev/rest/views/stories").then((function(t){return t.json()})).then((function(t){return u(t)}))}),[]),Object(d.jsx)(i.a,{children:Object(d.jsxs)(a.c,{children:[Object(d.jsx)(a.a,{exact:!0,path:"/read/stories",children:Object(d.jsxs)("div",{className:"Stories-Container",children:[Object(d.jsx)(s.a,{title:"Stories"}),Object(d.jsx)(j.a,{pageTitle:"Stories",books1:r.map((function(t,e){if(e>2)return null;var r=Object(O.a)(t.title);return Object(d.jsx)(o.a,{link:"/read/stories/".concat(r),story:t},e)})),books2:r.map((function(t,e){if(e<=2||e>5)return null;var r=Object(O.a)(t.title);return Object(d.jsx)(o.a,{link:"/read/tales/".concat(r),story:t},e)})),books3:r.map((function(t,e){if(e<=5||e>8)return null;var r=Object(O.a)(t.title);return Object(d.jsx)(o.a,{link:"/read/tales/".concat(r),story:t},e)}))})]})}),r.map((function(t,e){var r=Object(O.a)(t.title);return Object(d.jsxs)(a.a,{exact:!0,path:"/read/stories/".concat(r),children:[Object(d.jsx)(s.a,{title:t.title}),Object(d.jsx)(f,{story:t})]},e)}))]})})}}}]);
//# sourceMappingURL=23.8e3817b0.chunk.js.map