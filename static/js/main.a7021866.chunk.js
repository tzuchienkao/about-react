(this["webpackJsonpabout-react"]=this["webpackJsonpabout-react"]||[]).push([[0],{13:function(t,e,i){},15:function(t,e,i){"use strict";i.r(e);var c=i(1),a=i.n(c),o=i(8),n=i.n(o),s=(i(13),i(4)),u=i(2),b=i(0),h=function(){var t=x.filter((function(t){return t.label}));return Object(b.jsx)("nav",{children:t.map((function(t,e){var i=t.path,c=t.label;return Object(b.jsx)(s.c,{activeclassname:"active",to:i,children:c},e)}))})},g=function(t){var e=t.children;return document.getElementsByTagName("body")[0].setAttribute("id","body"),Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsxs)("div",{className:"aside grid content-between",children:[Object(b.jsx)(h,{}),Object(b.jsxs)("footer",{children:[Object(b.jsx)("div",{className:"w-8 h-8 flex justify-center rounded-full overflow-hidden",children:Object(b.jsx)("img",{className:"max-w-max max-h-full",src:"https://tzuchienkao.github.io/about-react/img/me.jpg",alt:"\u9ad8\u6148\u8b19 Agnes Kao"})}),Object(b.jsx)("span",{children:"oyan114@hotmail.com"})]})]}),e]})},r=function(t){var e=t.title,i=void 0===e?null:e,c=t.subTitle,a=void 0===c?null:c,o=t.content;return Object(b.jsxs)("div",{className:"link-card",children:[i?Object(b.jsx)("h6",{className:"font-bold",children:i}):Object(b.jsx)(b.Fragment,{}),a?Object(b.jsx)("p",{children:a}):Object(b.jsx)(b.Fragment,{}),"object"===typeof o?o.map((function(t,e){return(null===t||void 0===t?void 0:t.list)?Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:(null===t||void 0===t?void 0:t.content)||t}),Object(b.jsx)("ul",{children:t.list.map((function(t,e){return Object(b.jsx)("li",{children:t},"sub-content-".concat(e))}))},"sublist-".concat(e))]},"content-".concat(e)):Object(b.jsx)("ul",{children:Object(b.jsx)("li",{children:(null===t||void 0===t?void 0:t.content)||t})},"content-".concat(e))})):Object(b.jsx)("p",{children:o})]})},p=function(){var t=Object(u.g)().pathname,e=x.filter((function(e){return e.path!==t&&e.layout})).map((function(t){var e=t.label,i=t.path.replace("/","");switch(t.title=e,i){case"about":t.content="Bachelor Degree of NFU\nMultimedia Desgin";break;case"portfolio":t.content="HTML, CSS, Javascript, Vue.js, Vue-cli, Nuxt.js, GIT, ESLint, Postman";break;default:t.content=""}return t}));return Object(b.jsx)(b.Fragment,{children:e.map((function(t){return l(t)}))})},l=function(t){var e=t.path,i=t.title,c=t.content;return Object(b.jsx)(s.b,{to:e,children:Object(b.jsx)(r,{title:i,content:c})},i)},j={intro:{title:"\u9ad8\u6148\u8b19 Agnes Kao",description:[{content:"\u73fe\u8077\uff1a\u9177\u5824\u5eb7 QTCOMM \u524d\u7aef\u5de5\u7a0b\u5e2b"},{content:"\u570b\u7acb\u864e\u5c3e\u79d1\u6280\u5927\u5b78 NFU \u591a\u5a92\u9ad4\u8a2d\u8a08\u7cfb \u5b78\u58eb"},{content:"oyan114@hotmail.com",list:["\u5b78\u6821\u7562\u696d\u5f8c\uff0c\u4e00\u76f4\u5f9e\u4e8b\u8457\u7db2\u9801\u8a2d\u8a08\u7684\u8077\u4f4d","\u9014\u4e2d\u5275\u696d - \u300e\u679c\u7136\uff0c\u679c\u771f\u81ea\u7136\u300f (\u5171\u540c\u5275\u8fa6\u4eba)","\u91cd\u56de\u8077\u5834\u5f8c\uff0c\u9078\u64c7\u8f49\u8077\u70ba\u524d\u7aef\u5de5\u7a0b\u5e2b"]},{content:"\u9019\u4e9b\u6210\u9577\u90fd\u662f\u900f\u904e\u5b78\u7fd2\u4e14\u5be6\u4f5c\u51fa\u4f86\uff0c\u8b93\u4e0d\u64c5\u9577\u7684\u9818\u57df\u80fd\u6709\u767c\u63ee\u7684\u53ef\u80fd\u3002"}]},about:{title:"\u95dc\u65bc\u6211",description:[{content:"\u8c93\u5974\u4e00\u679a\u3002\u5317\u5712\u4e09\u8c93\u7ba1\u7406\u8005 (aka \u93df\u5c4e\u5b98)\u3002"},{content:"\u71b1\u611b\u5496\u5561\u3002\u5e73\u65e5\u5fc5\u5099\u624b\u6c96\uff0c\u5047\u65e5\u4f86\u676f\u7fa9\u5f0f\u6fc3\u7e2e\u3002"},{content:"\u559c\u6b61\u5065\u8eab\u3002\u7df4\u80f8\u6210\u5c31\u611f\u9060\u6bd4\u7df4\u817f\u9ad8 (2021 \u56e0\u80a9\u8180\u53d7\u50b7\u66ab\u505c\u4e2d)\u3002"}]},skill:{title:"\u5c08\u696d\u6280\u80fd",description:[{content:"\u719f\u6089 HTML, CSS \u9032\u884c\u6d41\u9ad4\u5e03\u5c40\uff0c\u900f\u904e Emmet \u53ca LESS / SCSS (OOCSS) \u7de8\u5beb\u7d50\u69cb\u5316\u7684\u7a0b\u5f0f\u78bc\uff0c\u80fd\u4e0d\u4f9d\u8cf4 Framework \u9032\u884c RWD \u5ba2\u88fd\u5316\uff0c\u4ea6\u80fd\u904b\u7528 UI Framework (Quasar, Bootstrap, Element UI) \u958b\u767c\uff0c\u4ea6\u80fd\u7e2e\u77ed\u958b\u767c\u6642\u7a0b\uff0c\u66f4\u52a9\u65bc\u7db2\u9801 SEO\u3002"},{content:"\u719f\u6089\u4f7f\u7528 Vue.js 1.0 / Vue.js 2.0 / Vue-cli 3.0 \u524d\u7aef\u6846\u67b6\uff0c\u4f7f\u7528 Vuex \u8de8\u7d44\u4ef6\u7ba1\u7406\uff0c\u4ea6\u4e86\u89e3 Nuxt.js\uff0c\u81ea\u5b78 React.js\u3002"},{content:"\u4e86\u89e3 Javascript (ES5 / ES6) \u57fa\u672c\u8a9e\u6cd5\uff0c\u4ea6\u80fd\u4f7f\u7528 jQuery / CSS3 \u5448\u73fe\u7db2\u9801\u8cc7\u8a0a\u53ca\u52d5\u614b\u6548\u679c\u3002"},{content:"\u5584\u8207\u5f8c\u7aef\u4ee5 Axios / AJAX \u65b9\u6cd5\u4e32\u63a5 json \u683c\u5f0f\u8cc7\u6599\uff0c\u4e26\u9075\u5faa RESTful API \u898f\u7bc4\uff0c\u4f7f\u7528 Promise \u7269\u4ef6\u5efa\u7acb\u975e\u540c\u6b65\u904b\u4f5c\u3002"},{content:"\u9075\u5faa ESLint / Prettier / Vetur Programming Style \u5718\u968a\u898f\u5247\uff0c\u4e26\u8207 git \u6574\u5408\uff0c\u5efa\u7acb\u6613\u65bc\u7dad\u8b77\u7684\u7a0b\u5f0f\u78bc\u3002"},{content:"\u4ef0\u8cf4 git / github / GitLab (command line / GUI) \u505a\u6a94\u6848\u7248\u672c\u63a7\u5236\u3002"},{content:"\u4e86\u89e3 CDD (Component-Driven Development) \u958b\u767c\u6cd5\uff0c\u900f\u904e Storybook \u7d71\u6574\u7d44\u4ef6\uff0c\u4e26\u9075\u5faa\u5143\u4ef6\u7684\u4f7f\u7528\u65b9\u6cd5\u3002"}]}},m={qtc:{title:"QTCOMM \u9177\u5824\u5eb7\u79d1\u6280\u6709\u9650\u516c\u53f8",description:[{content:"\u5e36\u9818\u65b0\u9032\u8cc7\u6dfa\u524d\u7aef\u5de5\u7a0b\u5e2b\u540c\u4ec1\uff0c\u5354\u52a9\u554f\u984c\u6392\u9664\u3001\u6280\u8853\u4ea4\u6d41\u3001\u7d93\u9a57\u5206\u4eab\u3002"},{content:"\u524d\u7aef\u5718\u968a\u4f7f\u7528\uff1a",list:["\u4f7f\u7528  CDD (Component Driven Development)  \u7d44\u4ef6\u9a45\u52d5\u958b\u767c\u6cd5\uff0c\u900f\u904e CLI (Command-Line\xa0Interface) \u5efa\u7acb components folder \u5b9a\u7fa9\u70ba\u5171\u7528\u5143\u4ef6\u5eab\uff0c\u85c9\u6b64\u9054\u5230\u5143\u4ef6\u7d71\u4e00\u5316\uff0c\u4e14\u4e0d\u91cd\u8907\u958b\u767c\u4e4b\u76ee\u7684\u3002","\u8cc7\u6599\u4e32\u63a5\u9075\u5faa  RESTful  API  \u898f\u7bc4\u3002","\u9075\u5faa  ESLint  Programming  Style  \u5718\u968a\u898f\u5247\uff0c\u5efa\u7acb\u6613\u65bc\u7dad\u8b77\u7684\u7a0b\u5f0f\u78bc\u3002","\u4ef0\u8cf4  git  (command  line  /  GUI)  \u505a\u6a94\u6848\u7248\u672c\u63a7\u5236\u3002"]},{content:"\u8de8\u90e8\u9580\u958b\u767c\u65b9\u5f0f\u70ba\uff1a",list:["\u8207\u5f8c\u7aef\u900f\u904e Swagger \u4e32\u63a5\u8cc7\u6599\u3002","\u6089\u77e5  CI  /  CD  \u6d41\u7a0b\uff0c\u900f\u904e  Github,  Jira,  Travis CI  \u5b8c\u6210\u6574\u5408\u81ea\u52d5\u5316\u767c\u4f48\u3002","\u8207  APP  \u5718\u968a\u5408\u4f5c\uff0c\u900f\u904e  deeplink \u7576\u4e2d\u7684 schema  \u5354\u8b70\u9054\u5230\u884c\u52d5\u88dd\u7f6e\u6253\u958b  APP\u3002","\u8207  UI  designer  \u900f\u904e  figma  \u6e9d\u901a\uff0c\u5c07\u7d71\u4e00\u7684\u8a2d\u8a08\u898f\u7bc4\u7d71\u6574\u70ba  CSS  \u5171\u7528\u6a23\u5f0f\u3002","\u900f\u904e Jira / Confluence \u8207 PM, QA \u5efa\u7acb\u968e\u6bb5\u6027\u4efb\u52d9\uff0c\u85c9\u6b64\u53ef\u4e86\u89e3\u5404\u90e8\u9580\u540c\u4ec1\u5f7c\u6b64\u7684\u9032\u5ea6\uff0c\u4e00\u540c\u958b\u767c\u5b8c\u6210\u5c08\u6848\u3002"]}],list:[{content:"TaxBI \u5370\u5c3c\u7a05\u52d9\u7cfb\u7d71"},{content:"CodeCert \u8b49\u66f8\u7ba1\u7406\u7cfb\u7d71"},{content:"\u5404\u7cfb\u7d71\u4e2d\u63a7\u7ba1\u7406\u5f8c\u53f0\u7dad\u8b77\u53ca\u958b\u767c",list:["CodeCert \u7ba1\u7406\u4ecb\u9762\u958b\u767c","TaxBI \u5404\u7cfb\u7d71\u7ba1\u7406\u4ecb\u9762\u958b\u767c","LuckyDraw \u958b\u734e\u7cfb\u7d71\u7ba1\u7406\u4ecb\u9762\u958b\u767c"]}],collection:[{type:"taxbi",label:"TaxBI",device:["Desktop"],tag:["Javascript","Vue.js","Quasar.js","Sass","Axios","HighChart","Google MAP","day.js","Jest","MSW"],cover:"https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_cover.jpg",title:"\u5370\u5c3c\u7a05\u52d9\u7cfb\u7d71 TaxBI (https://taxbi.ecomm-cloud.net/)",content:["\u7cfb\u7d71\u5e33\u865f\u6b0a\u9650\u63a7\u7ba1","\u5716\u8868\u8cc7\u6599\u6574\u5408","\u6a94\u6848\u4e0a\u50b3(\u55ae\u6b21/\u6279\u6b21)","\u5404\u5f0f\u5831\u8868 CSV \u532f\u51fa"],images:["https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_0.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_1.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_2.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_3.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_4.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_5.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_6.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_7.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_8.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_9.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_10.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_11.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_12.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_13.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_14.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_15.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_16.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_17.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_18.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_19.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_20.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_21.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_22.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_23.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_24.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_25.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_26.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_27.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_28.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_29.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_30.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_31.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_32.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/taxbi_33.jpg"]},{type:"admin",label:"QTCOMM \u4e2d\u63a7\u7ba1\u7406\u5f8c\u53f0",device:["Desktop"],tag:["Javascript","Vue.js","Quasar.js","Sass","Axios","vue-advanced-cropper"],cover:"https://tzuchienkao.github.io/about-react/img/case/qtc/admin_cover.jpg",title:"\u4e2d\u63a7\u7ba1\u7406\u5f8c\u53f0",content:["CodeCert \u7ba1\u7406\u4ecb\u9762\u958b\u767c\uff1a\u5efa\u7acb/\u67e5\u8a62\u5e33\u865f\u3001\u6b0a\u9650\u7ba1\u7406\u3001\u8b49\u66f8\u6578\u91cf\u7ba1\u7406","TaxBI \u5404\u7cfb\u7d71\u7ba1\u7406\u4ecb\u9762\u958b\u767c\uff1a\u5efa\u7acb/\u67e5\u8a62\u5e33\u865f\u3001\u6b0a\u9650\u7ba1\u7406","LuckyDraw \u958b\u734e\u7cfb\u7d71\u7ba1\u7406\u4ecb\u9762\u958b\u767c\uff1a\u5404\u985e\u734e\u9805\u8a2d\u7f6e\u3001\u5404\u5f0f\u5831\u8868\u532f\u51fa"],images:["https://tzuchienkao.github.io/about-react/img/case/qtc/admin_1.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/admin_2.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/admin_3.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/admin_4.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/admin_5.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/admin_6.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/admin_7.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/admin_8.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/admin_9.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/admin_10.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/admin_11.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/admin_12.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/admin_13.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/admin_14.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/admin_15.jpg"]},{type:"codecert",label:"CodeCert",device:["Desktop"],tag:["Javascript","Vue.js","Element-ui","Sass","Axios","Electron.js"],cover:"https://tzuchienkao.github.io/about-react/img/case/qtc/codecert_cover.jpg",title:"CodeCert \u8b49\u66f8\u7ba1\u7406\u7cfb\u7d71 (https://www.code-cert.com/)",content:["\u7cfb\u7d71\u5e33\u865f\u6b0a\u9650\u63a7\u7ba1","\u6a94\u6848\u4e0a\u50b3(\u55ae\u6b21/\u6279\u6b21)","\u547c\u53eb\u5370\u8868\u6a5f\u57f7\u884c(\u55ae\u6b21/\u6279\u6b21)\u5217\u5370"],images:["https://tzuchienkao.github.io/about-react/img/case/qtc/codecert_1.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/codecert_2.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/codecert_3.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/codecert_4.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/codecert_5.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/codecert_6.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/codecert_7.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/codecert_8.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/codecert_9.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/codecert_10.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/codecert_11.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/codecert_12.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/codecert_13.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/codecert_14.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/codecert_15.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/codecert_16.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/codecert_17.jpg","https://tzuchienkao.github.io/about-react/img/case/qtc/codecert_18.jpg"]}]},pl:{title:"PressLogic \u53f0\u7063\u908f\u8f2f\u5a92\u9ad4\u79d1\u6280",description:[{content:"\u654f\u6377\u5f0f\u958b\u767c\uff0c\u524d\u671f\u958b\u767c\u4f7f\u7528 Vue.js\uff0c\u4f7f\u7528 Vuex \u8de8\u7d44\u4ef6\u7ba1\u7406\uff0c\u4e26\u642d\u914d Laravel \u5efa\u69cb SPA \u5c08\u6848\u3002\u5f8c\u671f\u70ba\u9054\u5230 SSR \u4e4b\u76ee\u7684\uff0c\u7522\u54c1\u5168\u9762\u4f7f\u7528 Nuxt.js\uff0c\u68c4\u7528\u524d\u671f\u958b\u767c\u4f7f\u7528\u7684 jQuery\uff0c\u5b8c\u5168\u4f7f\u7528 Javascript (ES5 / ES6)\u3002"},{content:"\u524d\u7aef\u5718\u968a\u4f7f\u7528\uff1a",list:["\u4f7f\u7528  CDD (Component Driven Development)  \u7d44\u4ef6\u9a45\u52d5\u958b\u767c\u6cd5\uff0c\u900f\u904e Storybook \u9054\u5230\u5143\u4ef6\u7d71\u4e00\u5316\uff0c\u4e14\u4e0d\u91cd\u8907\u958b\u767c\u4e4b\u76ee\u7684\u3002","\u8cc7\u6599\u4e32\u63a5\u9075\u5faa  RESTful  API  \u898f\u7bc4\u3002","\u9075\u5faa  ESLint  Programming  Style  \u5718\u968a\u898f\u5247\uff0c\u5efa\u7acb\u6613\u65bc\u7dad\u8b77\u7684\u7a0b\u5f0f\u78bc\u3002","\u4ef0\u8cf4  git  (command  line  /  GUI)  \u505a\u6a94\u6848\u7248\u672c\u63a7\u5236\u3002"]},{content:"\u8de8\u90e8\u9580\u958b\u767c\u65b9\u5f0f\u70ba\uff1a",list:["\u8207\u5f8c\u7aef\u900f\u904e Swagger \u4e32\u63a5 json \u683c\u5f0f\u8cc7\u6599\u3002","\u6089\u77e5 CI / CD \u6d41\u7a0b\uff0c\u900f\u904e GitLab, Jenkins \u5b8c\u6210\u6574\u5408\u81ea\u52d5\u5316\u767c\u4f48\u3002","\u8207 APP \u5718\u968a\u5408\u4f5c\uff0c\u900f\u904e schema \u5354\u8b70\u9054\u5230\u884c\u52d5\u88dd\u7f6e\u7db2\u9801\u6253\u958b APP\uff1b\u4ea6\u652f\u63f4 webview \u9801\u9762\uff0c\u5728\u77ed\u6642\u9593\u5167\u5c07\u8907\u96dc\u7684\u9801\u9762\u5167\u5bb9\u7522\u51fa\u3002","\u8207 UI designer \u900f\u904e zeplin \u6e9d\u901a\uff0c\u5c07\u7d71\u4e00\u7684\u8a2d\u8a08\u898f\u7bc4\u7d71\u6574\u70ba CSS \u5171\u7528\u6a23\u5f0f\uff0c\u5716\u793a\u8f49\u51fa svg\uff0c\u907f\u514d\u5931\u771f\u53ca\u6e1b\u5c11\u6a94\u6848\u5927\u5c0f\u3002","\u900f\u904e Jira \u8207 PM, QA \u5efa\u7acb\u968e\u6bb5\u6027\u4efb\u52d9\uff0c\u85c9\u6b64\u53ef\u4e86\u89e3\u5404\u90e8\u9580\u540c\u4ec1\u5f7c\u6b64\u7684\u9032\u5ea6\uff0c\u4e00\u540c\u958b\u767c\u5b8c\u6210\u5c08\u6848\u3002"]}],list:[{content:"BeautyBee \u81ea\u6709\u793e\u7fa4\u5e73\u53f0"}],collection:[{type:"beautybee",label:"BeautyBee",device:["Desktop","Tablet","Mobile"],tag:["Javascript","Nuxt.js","Vue.js","Axios","HighChart","vue-cropper","Google/Facebook Login API","deeplink"],cover:"https://tzuchienkao.github.io/about-react/img/case/pl/beautybee_cover.jpg",title:"\u5973\u6027\u793e\u5340\u70ba\u4e3b\u6253\u7684 BeautyBee (https://www.beautybee.com)",content:["\u6587\u7ae0\u7ba1\u7406\u7cfb\u7d71\uff1a\u65b0\u589e\u3001\u7de8\u8f2f\u3001\u8349\u7a3f\u3001\u522a\u9664","Single sign-on (SSO) \u4e32\u63a5\u7b2c\u4e09\u65b9\u767b\u5165\u53ca\u81ea\u6709\u6703\u54e1\u7cfb\u7d71","\u7528\u6236\u500b\u4eba\u7ba1\u7406\u9801\u9762","\u8ffd\u8e64/\u597d\u53cb\u7cfb\u7d71"],images:["https://tzuchienkao.github.io/about-react/img/case/pl/bb_0.jpg","https://tzuchienkao.github.io/about-react/img/case/pl/bb_1.jpg","https://tzuchienkao.github.io/about-react/img/case/pl/bb_2.jpg","https://tzuchienkao.github.io/about-react/img/case/pl/bb_3.jpg","https://tzuchienkao.github.io/about-react/img/case/pl/bb_4.jpg","https://tzuchienkao.github.io/about-react/img/case/pl/bb_5.jpg","https://tzuchienkao.github.io/about-react/img/case/pl/bb_6.jpg","https://tzuchienkao.github.io/about-react/img/case/pl/bb_7.jpg","https://tzuchienkao.github.io/about-react/img/case/pl/bb_8.jpg","https://tzuchienkao.github.io/about-react/img/case/pl/bb_9.jpg","https://tzuchienkao.github.io/about-react/img/case/pl/bb_10.jpg","https://tzuchienkao.github.io/about-react/img/case/pl/bb_11.jpg","https://tzuchienkao.github.io/about-react/img/case/pl/bb_12.jpg","https://tzuchienkao.github.io/about-react/img/case/pl/bb_13.jpg","https://tzuchienkao.github.io/about-react/img/case/pl/bb_14.jpg","https://tzuchienkao.github.io/about-react/img/case/pl/bb_15.jpg","https://tzuchienkao.github.io/about-react/img/case/pl/bb_16.jpg","https://tzuchienkao.github.io/about-react/img/case/pl/bb_17.jpg","https://tzuchienkao.github.io/about-react/img/case/pl/bb_18.jpg","https://tzuchienkao.github.io/about-react/img/case/pl/bb_19.jpg"]}]},mn:{title:"Menai \u9382\u5948\u4e92\u52d5\u8a2d\u8a08",description:[{content:"\u4ecb\u9762\u4e92\u52d5"},{content:"\u4ef0\u8cf4  git  (command  line  /  GUI)  \u505a\u6a94\u6848\u7248\u672c\u63a7\u5236\u3002"},{content:"\u8207 UI designer \u900f\u904e zeplin \u6e9d\u901a\u3002"}],list:[{content:"TaiwanPLUS"}],collection:[{type:"taiwanplus",label:"TaiwanPLUS",device:["Desktop","Tablet","Mobile"],tag:["Javascript","Nuxt.js","Sass","GSAP"],cover:"https://tzuchienkao.github.io/about-react/img/case/mn/taiwanplus_cover.jpg",title:"2030 \u81fa\u7063\u666e\u62c9\u601d (https://2030.tw/taiwanplus/)",content:["CSS3 \u9801\u9762\u52d5\u756b\u8a2d\u8a08","\u4ecb\u9762\u4e92\u52d5\u8a2d\u8a08"],images:["https://tzuchienkao.github.io/about-react/img/case/mn/mn_0.jpg","https://tzuchienkao.github.io/about-react/img/case/mn/mn_1.jpg","https://tzuchienkao.github.io/about-react/img/case/mn/mn_2.jpg","https://tzuchienkao.github.io/about-react/img/case/mn/mn_3.jpg","https://tzuchienkao.github.io/about-react/img/case/mn/mn_4.jpg"]}]},red:{title:"RedSo \u7d05\u9b0d\u5b50\u6578\u4f4d",description:[{content:"\u4e3b\u8981\u8ca0\u8cac\u7dad\u8b77\u9999\u6e2f\u96fb\u5546\u7db2\u7ad9 big big shop\uff0c\u662f\u7531 Vue.js 1.0 \u5efa\u7f6e\u3002"},{content:"\u524d\u7aef\u5718\u968a\u4f7f\u7528\uff1a",list:["\u63a1\u7528 Axios \u65b9\u6cd5\u4e26\u9075\u5faa RESTful API \u898f\u7bc4\uff0c\u4e32\u63a5\u5f8c\u7aef\u8cc7\u6599\u3002","\u4ef0\u8cf4 git (command line / GUI) \u505a\u6a94\u6848\u7248\u672c\u63a7\u5236\u3002"]},{content:"\u8de8\u90e8\u9580\u958b\u767c\u65b9\u5f0f\u70ba\uff1a",list:["\u8207 UI designer \u900f\u904e overflow \u6e9d\u901a\uff0c\u5c07\u7d71\u4e00\u7684\u8a2d\u8a08\u898f\u7bc4\u7d71\u6574\u70ba CSS \u5171\u7528\u6a23\u5f0f\u3002","\u5c08\u6848\u4ee5\u654f\u6377\u5f0f\u958b\u767c\u6cd5 (Scrum) \u9032\u884c\uff0c\u4e3b\u8981\u8ca0\u8cac\u7dad\u8b77\u524d\u53f0\u4f7f\u7528\u8005\u4ecb\u9762\u5e73\u53f0\uff0c\u8207\u9999\u6e2f PM\u3001\u5f8c\u7aef\u3001QA \u900f\u904e JIRA, Swagger, Bugzilla \u6e9d\u901a\uff0c\u85c9\u6b64\u53ef\u4e86\u89e3\u5f7c\u6b64\u7684\u9032\u5ea6\u3002"]}],list:[{content:"\u9999\u6e2f\u96fb\u5546\u7db2\u7ad9 big big shop"},{content:"Boutir \u81ea\u52d5\u5316\u7269\u6d41"},{content:"CLUB Travel"}],collection:[{type:"bigbigshop",label:"big big shop",device:["Desktop","Tablet","Mobile"],tag:["Javascript","Vue.js","Axios","Pug"],cover:"https://tzuchienkao.github.io/about-react/img/case/red/bigbigshop_cover.jpg",title:"\u9999\u6e2f\u96fb\u5546\u7db2\u7ad9 big big shop (https://www.bigbigshop.com/)",content:["\u7dad\u8b77\u524d\u53f0\u4f7f\u7528\u8005\u4ecb\u9762","\u512a\u5316\u5b98\u7db2\u4ecb\u9762","\u641c\u5c0b\u7cfb\u7d71\u6539\u7248","\u8cfc\u7269\u8eca\u7cfb\u7d71\u6539\u7248","\u4ecb\u63a5\u7b2c\u4e09\u65b9\u91d1\u6d41 Stripe API","\u8a2d\u7f6e\u3001GTM \u8ffd\u8e64\u78bc","\u8abf\u6574\u53ca\u9664\u932f\u591a\u88dd\u7f6e\u76f8\u5bb9\u6027\u554f\u984c"],images:["https://tzuchienkao.github.io/about-react/img/case/red/bigbigshop_1.jpg"]},{type:"boutir",label:"Boutir \u638c\u8216",device:["Mobile"],tag:["Javascript","Vue.js","Sass","Axios","moment.js","vue-qrcode-reader"],cover:"https://tzuchienkao.github.io/about-react/img/case/red/boutir_cover.jpg",title:"\u81ea\u52d5\u5316\u7269\u6d41",content:["\u8a02\u55ae\u8ffd\u8e64\u529f\u80fd"],images:["https://tzuchienkao.github.io/about-react/img/case/red/boutir_1.jpg"]},{type:"clubtravel",label:"CLUB Travel",device:["Desktop","Tablet","Mobile"],tag:["Vue.js","Axios","Google MAP","Typescript"],cover:"https://tzuchienkao.github.io/about-react/img/case/red/clubtravel_cover.jpg",title:"CLUB Travel",content:["\u641c\u5c0b\u5217\u8868\uff1a\u5207\u7248","\u641c\u5c0b\u5217\u8868\uff1a\u4e32\u63a5 Google Map API"],images:["https://tzuchienkao.github.io/about-react/img/case/red/clubtravel_1.jpg","https://tzuchienkao.github.io/about-react/img/case/red/clubtravel_2.jpg"]}]},wlj:{title:"1828\u96c6\u5718-\u738b\u8001\u5409\u8336\u9928",description:[{content:"\u900f\u904e wireframe \u6e9d\u901a\u9032\u5165\u958b\u767c\u968e\u6bb5\uff0c\u8207\u5f8c\u7aef PHP \u5de5\u7a0b\u5e2b\u3001APP \u5de5\u7a0b\u5e2b\u3001\u7f8e\u8853\u8a2d\u8a08\u642d\u914d\uff0c\u4e26\u9075\u5faa\u8a2d\u8a08\u7684\u7db2\u7ad9\u8a2d\u8a08\u898f\u7bc4\u53ca POS \u7aef\u7684 API \u898f\u7bc4\u3002"},{content:"\u7dad\u8b77\u516c\u53f8\u81ea\u6709\u7684\u7db2\u8def\u8cfc\u7269\u7db2\u7ad9\uff0c\u4ee5RWD\u8a2d\u8a08\u5207\u7248\u53ca\u700f\u89bd\u5668\u517c\u5bb9\u6027\u7248\u9762\u8abf\u6574\uff0c\u4e26\u8207\u5f8c\u7aef PHP \u5de5\u7a0b\u5e2b\u642d\u914d\u4f7f\u7528API\u4e32\u63a5\u5b8c\u6210\u8cfc\u7269\u8eca\u6539\u7248\u3002"},{content:"\u8207\u5718\u968a\u5f9e\u4f7f\u7528\u8005\u9ad4\u9a57\u7684\u89d2\u5ea6\u51fa\u767c\uff0c\u5728\u958b\u767c\u968e\u6bb5\u6642\u89e3\u6c7a\u5404\u985e\u4ecb\u9762\u8a2d\u8a08\u3001\u9ad4\u9a57\u548c\u512a\u5316\u3002"},{content:"\u8207\u5718\u968a\u6839\u64da\u7522\u54c1\u9700\u6c42\u8a02\u5b9a\u4f7f\u7528\u8005\u7814\u7a76\u8a08\u756b\uff0c\u4e26\u9069\u5207\u63d0\u51fa\u7522\u54c1\u6539\u9032\u5efa\u8b70\u3002"}],list:[{content:"1828 \u738b\u8001\u5409\u6dbc\u6c34\u8216"}],collection:[{type:"wlj",label:"1828 \u738b\u8001\u5409\u6dbc\u6c34\u8216",device:["Mobile"],tag:["Javascript","jQuery","Sass"],cover:"https://tzuchienkao.github.io/about-react/img/case/wlj/wlj_cover.jpg",title:"\u98f2\u6599\u8a02\u8cfc\u7cfb\u7d71 1828 \u738b\u8001\u5409\u6dbc\u6c34\u8216",content:["\u8cfc\u7269\u8eca\u7cfb\u7d71","\u6d3b\u52d5\u7cfb\u7d71"],images:["https://tzuchienkao.github.io/about-react/img/case/wlj/wlj_app_1.jpg","https://tzuchienkao.github.io/about-react/img/case/wlj/wlj_app_2.jpg","https://tzuchienkao.github.io/about-react/img/case/wlj/wlj_app_3.jpg","https://tzuchienkao.github.io/about-react/img/case/wlj/wlj_app_4.jpg","https://tzuchienkao.github.io/about-react/img/case/wlj/wlj_app_5.jpg","https://tzuchienkao.github.io/about-react/img/case/wlj/wlj_app_6.jpg","https://tzuchienkao.github.io/about-react/img/case/wlj/wlj_app_7.jpg","https://tzuchienkao.github.io/about-react/img/case/wlj/wlj_app_8.jpg","https://tzuchienkao.github.io/about-react/img/case/wlj/wlj_app_9.jpg","https://tzuchienkao.github.io/about-react/img/case/wlj/wlj_app_10.jpg","https://tzuchienkao.github.io/about-react/img/case/wlj/wlj_app_11.jpg","https://tzuchienkao.github.io/about-react/img/case/wlj/wlj_app_12.jpg","https://tzuchienkao.github.io/about-react/img/case/wlj/wlj_app_13.jpg"]}]}},d=function(t){var e=t.collection,i=Object(u.i)(),c=i.type,a=i.case,o=e.filter((function(t){return t.type===a}))[0];return Object(b.jsxs)("div",{className:"half-section pr-0",children:[Object(b.jsx)("div",{className:"half-section__left",children:o.images.map((function(t,e){return Object(b.jsx)("img",{src:t||"https://tzuchienkao.github.io/about-react/img/me.jpg",alt:o.title},e)}))}),Object(b.jsxs)("div",{className:"half-section__right",children:[Object(b.jsxs)("div",{className:"top border-solid",children:[Object(b.jsx)("sub",{className:"tag-list top-2 mb-2 flex flex-wrap",children:o.device.map((function(t){return Object(b.jsx)("span",{className:"tag",children:t})}))}),Object(b.jsx)(r,{title:o.title,subTitle:"\u5de5\u4f5c\u5167\u5bb9\uff1a",content:o.content})]}),Object(b.jsxs)("div",{className:"bottom",children:[Object(b.jsx)("h6",{className:"font-bold",children:m[c].title}),Object(b.jsx)(r,{subTitle:"\u4efb\u8077\u671f\u9593\uff1a",content:m[c].description})]})]})]})},k=function(t){var e=t.cardInfo,i=e.data,c=e.item;return Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)(s.b,{to:{pathname:"/about-react/portfolio/".concat(i,"/").concat(c.type)},children:[Object(b.jsx)("img",{src:"".concat(c.cover)||"https://tzuchienkao.github.io/about-react/img/me.jpg",alt:c.title}),Object(b.jsx)("p",{children:c.label}),Object(b.jsx)("sub",{className:"tag-list font-normal flex flex-wrap",children:c.tag.map((function(t){return Object(b.jsx)("span",{className:"tag",children:"#".concat(t)},t)}))})]})})},x=[{path:"/about-react/",exact:!0,component:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"wrapper relative",children:[Object(b.jsx)("div",{className:"wrapper__left",children:Object(b.jsx)(p,{})}),Object(b.jsx)("div",{className:"wrapper__right",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Frontend Engineer"}),Object(b.jsx)("p",{children:"oyan114@hotmail.com"})]})})]}),Object(b.jsxs)("div",{className:"keyvisual",children:[Object(b.jsx)("div",{className:"keyvisual__photo",children:Object(b.jsx)("img",{src:"https://tzuchienkao.github.io/about-react/img/me.jpg",alt:"\u9ad8\u6148\u8b19 Agnes Kao"})}),Object(b.jsx)("b",{children:"Agnes Kao"})]})]})},layout:function(t){var e=t.children;return document.getElementsByTagName("body")[0].setAttribute("id","landing"),Object(b.jsx)(b.Fragment,{children:e})}},{path:"/about-react/about",component:function(){return Object(b.jsxs)("section",{id:"about",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"https://tzuchienkao.github.io/about-react/img/me.jpg",alt:"\u9ad8\u6148\u8b19 Agnes Kao"})}),Object(b.jsx)("div",{className:"bottom",children:Object.keys(j).map((function(t,e){return Object(b.jsx)(r,{title:j[t].title,content:j[t].description},e)}))})]})},layout:g,label:"Agnes Kao"},{path:"/about-react/portfolio",component:function(){var t,e=Object(u.i)(),i=e.type,c=e.case;return Object(b.jsx)(b.Fragment,{children:i&&c?(null===(t=m[i])||void 0===t?void 0:t.collection)?Object(b.jsx)(d,{collection:m[i].collection}):Object(b.jsx)(u.a,{replace:!0,to:"/"}):Object(b.jsx)("div",{className:"grid-list",children:Object.keys(m).map((function(t){return m[t].collection.map((function(e){return Object(b.jsx)(k,{cardInfo:{data:t,item:e}},"".concat(t).concat(e.type))}))}))})})},layout:g,label:"Frontend Engineer",childern:[{path:":type/:case",component:r}]},{path:"*",component:function(){return Object(b.jsx)(u.a,{replace:!0,to:"/about-react/"})}}],_=function(t){return t.layout?Object(b.jsx)(t.layout,{children:Object(b.jsx)(t.component,{})}):Object(b.jsx)(t.component,{})},z=function(){return Object(b.jsx)(s.a,{children:Object(b.jsx)(u.e,{children:x.map((function(t,e){return Object(b.jsx)(u.c,{exact:t.exact,path:t.path,element:_(t),children:(null===t||void 0===t?void 0:t.childern)?t.childern.map((function(t,e){return Object(b.jsx)(u.c,{path:t.path,element:Object(b.jsx)(t.component,{})},e)})):Object(b.jsx)(u.c,{element:Object(b.jsx)(u.b,{})})},e)}))})})},v=function(){return Object(b.jsx)(z,{})},O=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,16)).then((function(e){var i=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,n=e.getTTFB;i(t),c(t),a(t),o(t),n(t)}))};n.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.a7021866.chunk.js.map