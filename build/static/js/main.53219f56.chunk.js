(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(16),s=n.n(a),i=(n(24),n(5)),l=n(2),o=(n(25),n(0));function u(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"About"}),Object(o.jsx)("p",{children:"This is the about page"})]})}function d(){return Object(o.jsxs)("div",{className:"contact",children:[Object(o.jsx)("h1",{children:"Contact"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quisquam."})]})}function h(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"dark:text-black text-black",children:"Home"}),Object(o.jsx)("p",{className:"dark:text-white text-black",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quisquam."})]})}var j=n(7),b=n(6),m=n.n(b),x=n(9),f=function(e){return e.map((function(e){return Object(o.jsx)(i.b,{to:e.url,className:"w-10/12 sm:w-1/2 md:w-1/3 flex flex-col p-3 align-middle",children:Object(o.jsx)("img",{src:"https://via.placeholder.com/650",alt:e.title,className:"w-full h-full items-center"})},e.url)}))};function p(e){var t=e.message,n=e.isShown,r=e.setIsShown;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"alert flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300 w-2/3 lg:w-1/5 sm:w-1/3 h-1/12 absolute top-20 right-2",style:{opacity:"".concat(n?.9:0),transition:"opacity 0.3s"},onClick:function(){return r(!1)},children:[Object(o.jsx)("div",{className:"alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full",children:Object(o.jsx)("span",{className:"text-red-500",children:Object(o.jsx)("svg",{fill:"currentColor",viewBox:"0 0 20 20",className:"h-6 w-6",children:Object(o.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})}),Object(o.jsxs)("div",{className:"alert-content ml-4",children:[Object(o.jsx)("div",{className:"alert-title font-semibold text-lg text-red-800",children:"Error"}),Object(o.jsx)("div",{className:"alert-description text-sm text-red-600",children:t})]})]})})}function g(e){return O.apply(this,arguments)}function O(){return(O=Object(x.a)(m.a.mark((function e(t){var n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}if(t.classList.contains("shake")){e.next=3;break}return e.abrupt("return");case 3:n=0,r=["translate(-2.5%, 2.5%)","translate(-2.5%, -2.5%)","translate(2.5%, 2.5%)","translate(2.5%, -2.5%)","translate(-2.5%, 0%)","translate(0%, -2.5%)","translate(0%, 2.5%)","translate(2.5%, 0%)"];case 4:if(!(n<r.length)){e.next=12;break}return c=r[n],e.next=8,new Promise((function(e){return setTimeout(e,80)}));case 8:document.getElementById("root").style.transform=c;case 9:n++,e.next=4;break;case 12:setTimeout((function(){document.getElementById("root").style.transform="translate(0, 0%)"}),80);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){var e=Object(l.g)(),t=Object(l.f)(),n=Object(r.useState)("/search"===e.pathname),c=Object(j.a)(n,2),a=c[0],s=c[1];return Object(r.useEffect)((function(){"/search"===e.pathname?s(!0):s(!1)}),[e.pathname]),Object(o.jsxs)("nav",{className:"flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-gray-600",children:[Object(o.jsx)("div",{className:"flex items-center flex-shrink-0 text-white mr-6",children:Object(o.jsx)("span",{className:"font-semibold text-xl tracking-tight",children:"Exim Studio"})}),Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),t.push("/search?q="+e.target.children[0].value)},children:Object(o.jsx)("input",{type:"text",formAction:"/search",formMethod:"get",className:"".concat(a?"hidden ":"","absolute top-30 right-10 outline-none")})}),Object(o.jsx)("div",{className:"w-full block flex-grow lg:flex lg:items-center lg:w-auto",children:Object(o.jsxs)("div",{className:"text-sm lg:flex-grow",children:[Object(o.jsx)(i.c,{onClick:function(e){return g(e.target)},to:"/",className:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",activeClassName:"text-white shake",exact:!0,children:"Home"}),Object(o.jsx)(i.c,{onClick:function(e){return g(e.target)},to:"/contact",activeClassName:"text-white shake",className:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",children:"Contact"}),Object(o.jsx)(i.c,{onClick:function(e){return g(e.target)},to:"/about",activeClassName:"text-white shake",className:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ",children:"About"})]})})]})}var w,k=null,y=new Map;function N(e){return S.apply(this,arguments)}function S(){return(S=Object(x.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.addEventListener("unhandledrejection",(function(e){return t(e.reason.message)})),!k){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,fetch("/models/config.json").then((function(e){return e.json()}));case 5:k=e.sent;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return L.apply(this,arguments)}function L(){return(L=Object(x.a)(m.a.mark((function e(t,n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(n);case 2:if(t){e.next=4;break}return e.abrupt("return",f(k));case 4:if(r=y.get(t)){e.next=10;break}return e.next=8,fetch("https://worker.exstd.workers.dev/search?origin="+window.location.origin+"&query="+t,{headers:{"Content-type":"application/json"}}).then((function(e){return e.json()}));case 8:r=e.sent,y.set(t,r);case 10:return e.abrupt("return",f(r.map((function(e){return k[e]}))));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(j.a)(a,2),i=s[0],u=s[1];function d(e){console.log(e),u(e),c(!0),clearTimeout(w),w=setTimeout((function(){return c(!1)}),5e3)}var h=Object(r.useState)(Object(o.jsx)("h2",{style:{textAlign:"center",position:"absolute",left:"50%",transform:"translate(-50%, 100%)",fontSize:"2rem"},children:"Loading..!"})),b=Object(j.a)(h,2),m=b[0],x=b[1],f=Object(r.useState)(new URLSearchParams(window.location.search).get("q")||""),g=Object(j.a)(f,2),O=g[0],v=g[1],k=Object(l.f)();return Object(r.useEffect)((function(){O?C(O,d).then((function(e){return x(Object(o.jsx)(o.Fragment,{children:e}))})):C(void 0,d).then((function(e){return x(Object(o.jsx)(o.Fragment,{children:e}))}))}),[O]),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{className:"w-3/6 p-2 text-black outline-none border-b-2 border-gray-600 h-20 text-2xl font-sans focus:border-collapse",type:"text",value:O,onChange:function(e){return v(e.target.value)},autoFocus:!0,placeholder:"Search",onKeyUp:function(e){k.push("?q=".concat(e.target.value)),C(e.target.value,d).then((function(e){return x(Object(o.jsx)(o.Fragment,{children:e}))}))}}),Object(o.jsx)(p,{isShown:n,message:i,setIsShown:c}),Object(o.jsx)("div",{className:"grid gap-3 mb-6 md:grid-cols-2 lg:grid-cols-4 justify-center container",children:m})]})}var q=n(19);var F,T,A,I,B=function(){return Object(o.jsx)(i.a,{children:Object(o.jsx)(q.a,{options:{sizeAutoCapable:!0,scrollbars:{visibility:"visible",clickScrolling:!0,autoHide:"never"}},children:Object(o.jsxs)("div",{className:"App dark:bg-gray-900 min-h-screen",children:[Object(o.jsx)(v,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/about",children:Object(o.jsx)(u,{})}),Object(o.jsx)(l.a,{path:"/contact",children:Object(o.jsx)(d,{})}),Object(o.jsx)(l.a,{path:"/search",children:Object(o.jsx)(E,{})}),Object(o.jsx)(l.a,{path:"/",children:Object(o.jsx)(h,{})})]})]})})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};n(33);"dark"===(null===(F=localStorage)||void 0===F?void 0:F.theme)||!("theme"in localStorage)&&(null===(T=(A=window).matchMedia)||void 0===T||null===(I=T.call(A,"(prefers-color-scheme: dark)"))||void 0===I?void 0:I.matches)?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(B,{})}),document.getElementById("root")),M()}},[[34,1,2]]]);
//# sourceMappingURL=main.53219f56.chunk.js.map