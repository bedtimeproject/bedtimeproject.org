(self.webpackChunkthe_bedtime_project=self.webpackChunkthe_bedtime_project||[]).push([[842],{3842:function(t,i,r){"use strict";r.d(i,{Z:function(){return f}});r(9867);var o=r(6394),n=r.n(o),e=r(9013),s=r(108),a=r(6175),h=r(2834);function p(t){var i=t.backLink,r=t.backLinkText;return(0,h.jsxs)("div",{className:"MoreContentSoon-Container",children:[(0,h.jsx)("div",{children:(0,h.jsx)("strong",{children:"More Coming Soon!"})}),i&&(0,h.jsx)("div",{className:"Backlink",children:(0,h.jsx)(a.rU,{to:i,children:r})})]})}var u=r(8212),c=r(4624);function f(t){var i=t.storyData,r=t.backLink,o=t.backLinkText;return i?(0,h.jsx)("div",{className:"PaperStory-Container",children:i.title?(0,h.jsxs)("article",{className:"Paper-Container",children:[(0,h.jsxs)("div",{className:"Heading-Information",children:[(0,h.jsx)(s.Z,{children:i.title}),i.author&&(0,h.jsxs)("div",{children:["By ",i.author]})]}),(0,h.jsxs)("div",{className:"Chapters",children:[(0,h.jsx)("img",{src:(0,c.s)(i.mainImage).url(),alt:i.alt}),(0,h.jsx)(n(),{blocks:i.body,projectId:e.Z.config().projectId,dataset:e.Z.config().dataset})]}),i.more&&(0,h.jsx)(p,{backLink:r,backLinkText:o})]}):(0,h.jsx)("div",{className:"PaperStory-Loading-Container",children:(0,h.jsx)(u.Z,{})})}):null}},108:function(t,i,r){"use strict";r.d(i,{Z:function(){return n}});r(9867);var o=r(2834);function n(t){var i=t.children;return(0,o.jsx)("div",{className:"PageTitle-Container",children:(0,o.jsx)("h1",{className:"PageTitle",children:i})})}},4624:function(t,i,r){"use strict";r.d(i,{s:function(){return a}});var o=r(9295),n=r.n(o),e=r(9013),s=n()(e.Z);function a(t){return s.image(t)}},9295:function(t){t.exports=function(){var t="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function i(i){var r=i.split("-"),o=r[1],n=r[2],e=r[3];if(!o||!n||!e)throw new Error("Malformed asset _ref '"+i+"'. Expected an id like \""+t+'".');var s=n.split("x"),a=+s[0],h=+s[1];if(!isFinite(a)||!isFinite(h))throw new Error("Malformed asset _ref '"+i+"'. Expected an id like \""+t+'".');return{id:o,width:a,height:h,format:e}}var r=function(t){return!!t&&"string"===typeof t._ref},o=function(t){return!!t&&"string"===typeof t._id},n=function(t){var i=t;return!(!i||!i.asset)&&"string"===typeof i.asset.url};function e(t){if(!t)return null;var i;if("string"===typeof t&&s(t))i={asset:{_ref:a(t)}};else if("string"===typeof t)i={asset:{_ref:t}};else if(r(t))i={asset:t};else if(o(t))i={asset:{_ref:t._id||""}};else if(n(t))i={asset:{_ref:a(t.asset.url)}};else{if("object"!==typeof t.asset)return null;i=t}var e=t;return e.crop&&(i.crop=e.crop),e.hotspot&&(i.hotspot=e.hotspot),h(i)}function s(t){return/^https?:\/\//.test(""+t)}function a(t){return("image-"+t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}function h(t){if(t.crop&&t.hotspot)return t;var i=Object.assign({},t);return i.crop||(i.crop={left:0,top:0,bottom:0,right:0}),i.hotspot||(i.hotspot={x:.5,y:.5,height:1,width:1}),i}var p=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"]];function u(t){var r=Object.assign({},t||{}),o=r.source;delete r.source;var n=e(o);if(!n)throw new Error("Unable to resolve image URL from source ("+JSON.stringify(o)+")");var s=i(n.asset._ref||n.asset._id||""),a=Math.round(n.crop.left*s.width),h=Math.round(n.crop.top*s.height),p={left:a,top:h,width:Math.round(s.width-n.crop.right*s.width-a),height:Math.round(s.height-n.crop.bottom*s.height-h)},u=n.hotspot.height*s.height/2,l=n.hotspot.width*s.width/2,d=n.hotspot.x*s.width,g=n.hotspot.y*s.height,w={left:d-l,top:g-u,right:d+l,bottom:g+u};return r.rect||r.focalPoint||r.ignoreImageParams||r.crop||(r=Object.assign({},r,f({crop:p,hotspot:w},r))),c(Object.assign({},r,{asset:s}))}function c(t){var i=t.baseUrl||"https://cdn.sanity.io",r=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,o=i+"/images/"+t.projectId+"/"+t.dataset+"/"+r,n=[];if(t.rect){var e=t.rect,s=e.left,a=e.top,h=e.width,u=e.height;(0!==s||0!==a||u!==t.asset.height||h!==t.asset.width)&&n.push("rect="+s+","+a+","+h+","+u)}t.bg&&n.push("bg="+t.bg),t.focalPoint&&(n.push("fp-x="+t.focalPoint.x),n.push("fp-y="+t.focalPoint.y));var c=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return c&&n.push("flip="+c),p.forEach((function(i){var r=i[0],o=i[1];"undefined"!==typeof t[r]?n.push(o+"="+encodeURIComponent(t[r])):"undefined"!==typeof t[o]&&n.push(o+"="+encodeURIComponent(t[o]))})),0===n.length?o:o+"?"+n.join("&")}function f(t,i){var r,o=i.width,n=i.height;if(!o||!n)return{width:o,height:n,rect:t.crop};var e=t.crop,s=t.hotspot,a=o/n;if(e.width/e.height>a){var h=Math.round(e.height),p=Math.round(h*a),u=Math.max(0,Math.round(e.top)),c=Math.round((s.right-s.left)/2+s.left),f=Math.max(0,Math.round(c-p/2));f<e.left?f=e.left:f+p>e.left+e.width&&(f=e.left+e.width-p),r={left:f,top:u,width:p,height:h}}else{var l=e.width,d=Math.round(l/a),g=Math.max(0,Math.round(e.left)),w=Math.round((s.bottom-s.top)/2+s.top),m=Math.max(0,Math.round(w-d/2));m<e.top?m=e.top:m+d>e.top+e.height&&(m=e.top+e.height-d),r={left:g,top:m,width:l,height:d}}return{width:o,height:n,rect:r}}var l=["clip","crop","fill","fillmax","max","scale","min"],d=["top","bottom","left","right","center","focalpoint","entropy"],g=["format"];function w(t){return!!t&&"object"===typeof t.clientConfig}function m(t){for(var i=0,r=p;i<r.length;i+=1){var o=r[i],n=o[0],e=o[1];if(t===n||t===e)return n}return t}function y(t){var i=t;if(w(i)){var r=i.clientConfig,o=r.apiHost,n=r.projectId,e=r.dataset;return new v(null,{baseUrl:(o||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:n,dataset:e})}return new v(null,t)}var v=function(t,i){this.options=t?Object.assign({},t.options||{},i||{}):Object.assign({},i||{})};return v.prototype.withOptions=function(t){var i=t.baseUrl||this.options.baseUrl,r={baseUrl:i};for(var o in t)t.hasOwnProperty(o)&&(r[m(o)]=t[o]);return new v(this,Object.assign({},{baseUrl:i},r))},v.prototype.image=function(t){return this.withOptions({source:t})},v.prototype.dataset=function(t){return this.withOptions({dataset:t})},v.prototype.projectId=function(t){return this.withOptions({projectId:t})},v.prototype.bg=function(t){return this.withOptions({bg:t})},v.prototype.dpr=function(t){return this.withOptions(t&&1!==t?{dpr:t}:{})},v.prototype.width=function(t){return this.withOptions({width:t})},v.prototype.height=function(t){return this.withOptions({height:t})},v.prototype.focalPoint=function(t,i){return this.withOptions({focalPoint:{x:t,y:i}})},v.prototype.maxWidth=function(t){return this.withOptions({maxWidth:t})},v.prototype.minWidth=function(t){return this.withOptions({minWidth:t})},v.prototype.maxHeight=function(t){return this.withOptions({maxHeight:t})},v.prototype.minHeight=function(t){return this.withOptions({minHeight:t})},v.prototype.size=function(t,i){return this.withOptions({width:t,height:i})},v.prototype.blur=function(t){return this.withOptions({blur:t})},v.prototype.sharpen=function(t){return this.withOptions({sharpen:t})},v.prototype.rect=function(t,i,r,o){return this.withOptions({rect:{left:t,top:i,width:r,height:o}})},v.prototype.format=function(t){return this.withOptions({format:t})},v.prototype.invert=function(t){return this.withOptions({invert:t})},v.prototype.orientation=function(t){return this.withOptions({orientation:t})},v.prototype.quality=function(t){return this.withOptions({quality:t})},v.prototype.forceDownload=function(t){return this.withOptions({download:t})},v.prototype.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},v.prototype.flipVertical=function(){return this.withOptions({flipVertical:!0})},v.prototype.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},v.prototype.fit=function(t){if(-1===l.indexOf(t))throw new Error('Invalid fit mode "'+t+'"');return this.withOptions({fit:t})},v.prototype.crop=function(t){if(-1===d.indexOf(t))throw new Error('Invalid crop mode "'+t+'"');return this.withOptions({crop:t})},v.prototype.saturation=function(t){return this.withOptions({saturation:t})},v.prototype.auto=function(t){if(-1===g.indexOf(t))throw new Error('Invalid auto mode "'+t+'"');return this.withOptions({auto:t})},v.prototype.pad=function(t){return this.withOptions({pad:t})},v.prototype.url=function(){return u(this.options)},v.prototype.toString=function(){return this.url()},y}()}}]);
//# sourceMappingURL=842.7a9a73a5.chunk.js.map