(this["webpackJsonpimage-gallery"]=this["webpackJsonpimage-gallery"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(5),a=n.n(r),i=(n(10),n(2)),o=n(0),l=function(e){var t=e.image,n=t.tags.split(",");return Object(o.jsxs)("div",{className:"max-w-sm rounded overflow-hidden shadow-lg",children:[Object(o.jsx)("img",{src:t.webformatURL,alt:"",className:"w-full"}),Object(o.jsxs)("div",{className:"px-6 py-4",children:[Object(o.jsxs)("div",{className:"font-bold text-purple-500 text-xl mb-2",children:["Photo by ",t.user]}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Views: "}),t.views]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Downloads: "}),t.downloads]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Likes: "}),t.likes]})]})]}),Object(o.jsx)("div",{className:"px-6 py-4",children:n.map((function(e,t){return Object(o.jsxs)("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2",children:["#",e]},t)}))})]})},d=n(4),b=function(e){var t,n=e.searchText,s=Object(c.useState)(""),r=Object(i.a)(s,2),a=r[0],l=r[1];return Object(o.jsx)("div",{className:"max-w-sm rounded overflow-hidden my-10 mx-auto",children:Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(a)},className:"w-full max-w-sm",children:Object(o.jsxs)("div",{className:"flex items-center border-b border-b-2 border-indigo-500 py-2",children:[Object(o.jsx)("input",(t={onChange:function(e){return l(e.target.value)},type:"text",className:"appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"},Object(d.a)(t,"type","text"),Object(d.a)(t,"placeholder","Search Image Term..."),t)),Object(o.jsx)("button",{className:"flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded",type:"submit",children:"Search"})]})})})};var j=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!0),a=Object(i.a)(r,2),d=a[0],j=a[1],u=Object(c.useState)(""),x=Object(i.a)(u,2),m=x[0],h=x[1];return Object(c.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("24340710-b4363a82bb51e363e65d70dae","&q=").concat(m,"&image_type=photo&pretty=true")).then((function(e){return e.json()})).then((function(e){s(e.hits),j(!1)})).catch((function(e){return console.log(e)}))}),[m]),Object(o.jsxs)("div",{className:"container mx-auto",children:[Object(o.jsx)(b,{searchText:function(e){return h(e)}}),!d&&0===n.length&&Object(o.jsx)("h1",{className:"text-5xl text-center mx-auto mt-32",children:"No Images Found"}),d?Object(o.jsx)("h1",{className:"text-6xl text-center mx-auto mt-32",children:"Loading..."}):Object(o.jsx)("div",{className:"grid grid-cols-3 gap-4",children:n.map((function(e){return Object(o.jsx)(l,{image:e},e.id)}))})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),u()}},[[12,1,2]]]);
//# sourceMappingURL=main.d343a376.chunk.js.map