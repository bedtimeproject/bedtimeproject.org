(this["webpackJsonpthe-bedtime-project"]=this["webpackJsonpthe-bedtime-project"]||[]).push([[20],{106:function(t,e,a){},107:function(t,e,a){},152:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return h}));var c=a(9),n=a(1),r=a(3),i=a(18),s=a(75),l=a(76),o=(a(106),a(11)),j=a(82),u=(a(107),a(92)),b=a(19),d=a(0);function f(t){var e=t.tale,a=Object(n.useState)(e),r=Object(c.a)(a,2),i=r[0],s=r[1];return Object(n.useEffect)((function(){fetch("https://drupal.bedtimeproject.dev/rest/views/tale?title="+(null===e||void 0===e?void 0:e.title)).then((function(t){return t.json()})).then((function(t){var e,a=Object(j.a)(Object(j.a)({},t[0]),{},{field_chapters:Object(b.a)(null===(e=t[0])||void 0===e?void 0:e.field_chapters)});s(a)}))}),[]),Object(d.jsx)(u.a,{storyData:i,backLink:"/read/stories",backLinkText:"Back to Stories"})}var O=a(74);function h(){var t=Object(n.useState)([]),e=Object(c.a)(t,2),a=e[0],j=e[1];return Object(n.useEffect)((function(){fetch("https://drupal.bedtimeproject.dev/rest/views/tales").then((function(t){return t.json()})).then((function(t){return j(t)}))}),[]),Object(d.jsx)(i.a,{children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{exact:!0,path:"/read/tales",children:Object(d.jsxs)("div",{className:"Tales-Container",children:[Object(d.jsx)(o.a,{title:"Tales"}),Object(d.jsx)(O.a,{pageTitle:"Tales",books1:a.map((function(t,e){if(e>2)return null;var a=Object(l.a)(t.title);return Object(d.jsx)(s.a,{link:"/read/tales/".concat(a),story:t},e)})),books2:a.map((function(t,e){if(e<=2||e>5)return null;var a=Object(l.a)(t.title);return Object(d.jsx)(s.a,{link:"/read/tales/".concat(a),story:t},e)})),books3:a.map((function(t,e){if(e<=5||e>8)return null;var a=Object(l.a)(t.title);return Object(d.jsx)(s.a,{link:"/read/tales/".concat(a),story:t},e)}))})]})}),a.map((function(t,e){var a=Object(l.a)(t.title);return Object(d.jsxs)(r.a,{exact:!0,path:"/read/tales/".concat(a),children:[Object(d.jsx)(o.a,{title:t.title}),Object(d.jsx)(f,{tale:t})]},e)}))]})})}}}]);
//# sourceMappingURL=20.c74e1d93.chunk.js.map