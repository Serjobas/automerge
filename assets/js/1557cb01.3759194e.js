"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8554],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(g,i(i({ref:t},s),{},{components:n})):o.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6416:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},u="Setup",p={unversionedId:"tutorial/setup",id:"tutorial/setup",isDocsHomePage:!1,title:"Setup",description:"We will build a small web app during this tutorial. This tutorial is designed to walk you through the basic concepts of Automerge so that you can use it in your own apps. For a deeper understanding and common patterns that you would likely need in a production application, see the Cookbook. You will find that these two resources are complementary.",source:"@site/docs/tutorial/setup.md",sourceDirName:"tutorial",slug:"/tutorial/setup",permalink:"/docs/tutorial/setup",editUrl:"https://github.com/automerge/automerge.github.io/edit/main/docs/tutorial/setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/tutorial/introduction"},next:{title:"Your first document",permalink:"/docs/tutorial/create-a-document"}},s=[{value:"What you need to know",id:"what-you-need-to-know",children:[],level:2},{value:"What are we building?",id:"what-are-we-building",children:[],level:2},{value:"Setup",id:"setup-1",children:[],level:2},{value:"React, vue, or package managers",id:"react-vue-or-package-managers",children:[],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup"},"Setup"),(0,a.kt)("p",null,"We will build a small web app during this tutorial. This tutorial is designed to walk you through the basic concepts of Automerge so that you can use it in your own apps. For a deeper understanding and common patterns that you would likely need in a production application, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/cookbook/modeling-data"},"Cookbook"),". You will find that these two resources are complementary."),(0,a.kt)("h2",{id:"what-you-need-to-know"},"What you need to know"),(0,a.kt)("p",null,"To complete this tutorial, we assume you have a working knowledge of HTML and JavaScript. If you're coming from another programming language, we've designed it to be simple enough that you should also be able to follow along."),(0,a.kt)("h2",{id:"what-are-we-building"},"What are we building?"),(0,a.kt)("p",null,"Today, you will build a simple to-do-list app with plain JavaScript. The resulting code from the tutorial will be less than 100 lines, and cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Modeling application state using an Automerge document"),(0,a.kt)("li",{parentName:"ul"},"Making changes to documents"),(0,a.kt)("li",{parentName:"ul"},"Persisting state in IndexedDB to preserve the document after restarting the browser tab (using ",(0,a.kt)("a",{parentName:"li",href:"https://localforage.github.io/localForage/"},"localForage"),")"),(0,a.kt)("li",{parentName:"ul"},"Supporting real-time collaboration in the same browser (using ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel"},"BroadcastChannel"),")")),(0,a.kt)("h2",{id:"setup-1"},"Setup"),(0,a.kt)("p",null,"Create an ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," file that includes ",(0,a.kt)("inlineCode",{parentName:"p"},"automerge.min.js")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),".  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n    <body>\n        <script type="application/javascript" src="https://cdn.jsdelivr.net/npm/automerge@1.0.1-preview.7/dist/automerge.min.js"><\/script>\n        <script type="module" src="./index.js"><\/script>\n    </body>\n</html>\n')),(0,a.kt)("p",null,"Create an ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," file. In this file, we will create our first document:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let doc = Automerge.init()\nconsole.log(doc)\n")),(0,a.kt)("p",null,"Because of the browser security model, you can't just open ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," as a local file. You will need to use a local HTTP server, for example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npx http-server")," for Node, or "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"python -m SimpleHTTPServer")," for Python")),(0,a.kt)("p",null,"Load the localhost page in your browser, open the JavaScript console, and you should see some representation of the Automerge document in the logs."),(0,a.kt)("h2",{id:"react-vue-or-package-managers"},"React, vue, or package managers"),(0,a.kt)("p",null,"This tutorial uses vanilla JavaScript, but you can also use a package manager or framework if you'd like. For example, use ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i automerge")," and import Automerge like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as Automerge from 'automerge'\n\nlet doc = Automerge.init()\nconsole.log(doc)\n")))}d.isMDXComponent=!0}}]);