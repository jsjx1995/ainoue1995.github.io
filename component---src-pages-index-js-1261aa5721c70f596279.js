(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{RXBc:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return Y}));var r=n("q1tI"),o=n.n(r),i=n("Zttt"),a=n("wtQ5"),s=n("o0o1"),c=n.n(s);n("ls82");function l(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(r,o)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){l(i,r,o,a,s,"next",t)}function s(t){l(i,r,o,a,s,"throw",t)}a(void 0)}))}}var u=n("dI71"),m=n("vOnD"),f=n("VuKL"),p=n("DSs8"),h=n("b6Qr"),g=function(t){var e=t.title,n=t.selectTag,r=t.selectedTag,i=(t.unmountTagsAnimation,function(){n(e)});return h.isMobile?o.a.createElement(y,{className:"tag-horizontal",onClick:i,selected:r===e},e):o.a.createElement(v,{className:"tag-vertical",onClick:i,selected:r===e},e)},v=m.d.div.withConfig({displayName:"Tag__StyledTagVertical",componentId:"sc-1rro27m-0"})(["cursor:pointer;padding:0.07rem 0;margin:0.6rem 0;padding-left:0.5rem;border-left-width:3px;border-left-style:solid;border-left-color:",";font-weight:",";position:sticky;transition:none;"],(function(t){return t.selected?""+p.b.mintColor:"transparent"}),(function(t){return t.selected?"bold":"400"})),y=m.d.div.withConfig({displayName:"Tag__StyledTagHorizontal",componentId:"sc-1rro27m-1"})(["position:relative;cursor:pointer;padding:0.5rem 0.9rem;margin:0 0.3rem;font-size:0.9rem;background:",";border-radius:15px;font-weight:",";white-space:nowrap;transition:none;"],(function(t){return!t.selected&&"none !important"}),(function(t){return t.selected?"bold":"400"})),w=n("IP2g"),b=n("wHSu"),x="All",E=function(t){function e(e){var n;return(n=t.call(this,e)||this).detectSticky=function(){var t=n.state,e=t.sticky,r=t.topPos-window.pageYOffset,o=r<=0;o&&r>=-55?e.classList.add("moveToBotAnimate"):o?e.classList.add("moveToBot"):n.unmountTagsAnimation()},n.unmountTagsAnimation=function(){var t=n.tagRef.current;t.classList.remove("moveToBot"),t.classList.remove("moveToBotAnimate")},n.handleScrollX=function(){if(n.state.sticky&&n.state.horizontalScroll){var t=n.state.sticky.clientWidth;if(n.state.horizontalScroll.scrollWidth>t){var e=n.state.horizontalScroll.scrollLeft;sessionStorage.setItem("scrollX_",e)}}},n.tagRef=o.a.createRef(),n.state={sticky:void 0,topPos:void 0,showSwipeIcon:!1},n}Object(u.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){if(h.isMobile){this.setState({sticky:this.tagRef.current,topPos:this.tagRef.current.getBoundingClientRect().y+window.pageYOffset,horizontalScroll:this.tagRef.current.querySelector(".tag-list-inner")});var t=this.tagRef.current.clientWidth,e=this.tagRef.current.querySelector(".tag-list-inner"),n=e.scrollWidth,r=sessionStorage.getItem("scrollX_")||0;e.scrollLeft=r;var o=parseInt(localStorage.getItem("swiped_"))||0;n>t&&o<2&&!sessionStorage.getItem("swiped__")&&(this.setState({showSwipeIcon:!0}),localStorage.setItem("swiped_",o+1),sessionStorage.setItem("swiped__",!0)),window.addEventListener("scroll",this.detectSticky)}},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.detectSticky)},n.render=function(){var t=this.props,e=t.tags,n=t.selectTag,r=t.selectedTag,i=o.a.createElement("div",{className:"tag-list",onScroll:this.handleScrollX},h.isMobile&&this.state.showSwipeIcon&&o.a.createElement(L,{className:"icon-hand-ptr",icon:b.e}),o.a.createElement("div",{className:"tag-list-inner"},o.a.createElement(g,{title:x,selectTag:n,selectedTag:r}),e.map((function(t,e){return o.a.createElement(g,{key:e,title:t,selectTag:n,selectedTag:r})}))));return h.isMobile?o.a.createElement(_,{className:"tags-horizontal",ref:this.tagRef},i):o.a.createElement(S,{className:"tags-vertical"},i)},e}(o.a.Component),S=m.d.div.withConfig({displayName:"Tags__StyledTagsVertical",componentId:"sc-1cr6zj8-0"})(["margin-top:0.5rem;background:none !important;.tag-list{position:sticky;top:50px;z-index:1;display:flex;flex-direction:column;justify-content:flex-start;padding:0.5rem;&-inner{width:120px;overflow-x:auto;}}@media (max-width:500px){.tag-list{&-inner{width:80px;font-size:0.75rem;}}}"]),_=m.d.div.withConfig({displayName:"Tags__StyledTagsHorizontal",componentId:"sc-1cr6zj8-1"})(["position:static;z-index:1;display:flex;align-items:center;padding:1.5rem 0.2rem;width:100%;height:46px;translate:transform 500ms ease-in;.tag-list{position:relative;width:100%;&-inner{display:flex;flex-direction:row;padding:1.3rem 0rem;width:inherit;overflow-x:auto;::-webkit-scrollbar{width:0px;display:none;}}}"]),T=Object(m.e)(["0%{opacity:1;}50%{opacity:1;right:35%;transform:translateX(-35%);bottom:5px;}100%{opacity:0;right:35%;transform:translateX(-35%);bottom:5px;}"]),L=Object(m.d)(w.a).withConfig({displayName:"Tags__StyledFA",componentId:"sc-1cr6zj8-2"})(["position:absolute;bottom:6px;right:20%;transform:translateX(-20%);animation:"," 2000ms forwards 1500ms ease-in;"],T),k=n("Wbzz"),C=n("xRap"),I=n("S+kE"),N=n.n(I),z=function(t){var e=t.id,n=t.title,r=t.date,i=t.path,a=t.excerpt,s=t.timeToRead,c=(t.pic,r.split(/\//)),l=c[0],d=c[1],u=c[2];return o.a.createElement(o.a.Fragment,null,o.a.createElement(k.Link,{to:i},o.a.createElement(j,{key:e},o.a.createElement("div",{style:{width:"100%"}},o.a.createElement("div",{style:{alignContent:"center",display:"flex",justifyContent:"space-between",width:"100%"}},o.a.createElement("h3",null,n),o.a.createElement("p",null,u,"/",l,"/",d)),N.a.showTimeToRead&&o.a.createElement("span",null,o.a.createElement(w.a,{className:"icon-clock",icon:b.d,size:"xs"}),s," minute read"),o.a.createElement("p",null,a)))))},j=m.d.div.withConfig({displayName:"PostCard__StyledPostCard",componentId:"bfopw6-0"})(["cursor:pointer;padding:1.5rem 1rem;transition:none;h3{font-weight:500;}&:hover{background:",";}span{font-size:0.8rem;.icon-clock{margin:0 0.1rem;}}p{margin-top:0.5rem;color:",";}@media (max-width:500px){padding:1.5rem 1.25rem;h3{font-size:1.15rem;}&:hover{background:transparent;}}"],(function(){return Object(C.a)(p.b.bgSubColorLight,p.b.darkerColor)}),(function(){return Object(C.a)(p.b.fontSubColorLight,p.b.fontSubColorDark)})),O=function(t){var e=t.posts.filter((function(t){return"/about/"!==t.node.fields.slug&&"/__do-not-remove/"!==t.node.fields.slug}));return o.a.createElement("div",{className:"posts-list"},e.map((function(t){return o.a.createElement(z,{key:t.node.id,title:t.node.frontmatter.title,date:t.node.frontmatter.date,path:t.node.fields.slug,excerpt:t.node.frontmatter.excerpt?t.node.frontmatter.excerpt:t.node.excerpt,timeToRead:t.node.timeToRead,pic:t.node.frontmatter.socialImage?t.node.frontmatter.socialImage.childImageSharp.fluid:null})})))},P=Object(m.e)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]),M=m.d.div.withConfig({displayName:"Loader__StyledLoader",componentId:"sc-8skdge-0"})(["display:inline-block;position:relative;width:64px;height:64px;& div{box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid ",";border-radius:50%;border-color:"," transparent transparent transparent;animation:"," 1200ms cubic-bezier(0.5,0,0.5,1) infinite;}& div:nth-child(1){animation-delay:-450ms;}& div:nth-child(2){animation-delay:-300ms;}& div:nth-child(3){animation-delay:-150ms;}"],p.b.lightGreyColor,p.b.lightGreyColor,P),R=function(){return o.a.createElement(M,null,o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))},A=n("D98b"),G=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state={selectedTag:x,filteredPosts:[],tags:[]},e.checkTag=function(t){if(!t)return!1;if(t===x)return!0;for(var n=e.props.posts,r=0;r<n.length;r++){var o=n[r].node.frontmatter.tags;if(o&&o.length>0&&o.includes(t))return!0}return!1},e.filterTags=function(){var t=e.props.posts,n={},r=[];t.filter((function(t){return"/about/"!==t.node.fields.slug&&"/__do-not-remove/"!==t.node.fields.slug})).forEach((function(t){var e=t.node.frontmatter.tags;e||(t.node.frontmatter.tags=["Uncategorized"],e=["Uncategorized"]),e.forEach((function(t){n[t]?n[t]=n[t]+1:(n[t]=1,r.push(t))}))})),r.sort((function(t,e){return n[e]-n[t]})),e.setState({tags:r})},e.filterPosts=function(){var t=e.props.posts.filter((function(t,n){var r=t.node;return e.state.selectedTag===x||r.frontmatter.tags&&r.frontmatter.tags.includes(e.state.selectedTag)}));e.setState({filteredPosts:t})},e.handleSelectTag=function(){var t=d(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return sessionStorage.setItem("curTag",n),t.next=3,e.setState({selectedTag:n});case 3:return t.next=5,e.filterPosts();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}Object(u.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this,e=sessionStorage.getItem("curTag")||x;this.checkTag(e)||(e=x),this.setState({selectedTag:e},(function(){t.filterPosts(),t.filterTags()}))},n.render=function(){return o.a.createElement(F,{className:"main-card"},o.a.createElement(W,{className:"switch-container"},o.a.createElement(A.a,null)),o.a.createElement(X,{className:"sub-main"},o.a.createElement(D,null,o.a.createElement(f.a,{home:!0}),this.state.filteredPosts.length>0?o.a.createElement(B,null,o.a.createElement(E,{selectedTag:this.state.selectedTag,selectTag:this.handleSelectTag,tags:this.state.tags}),o.a.createElement(O,{posts:this.state.filteredPosts.slice(0,this.props.loads)})):o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(R,null)))))},e}(r.Component),B=m.d.div.withConfig({displayName:"MainCard__StyledTagsPosts",componentId:"sc-18n6ohm-0"})([""]);B=m.d.div.withConfig({displayName:"MainCard__StyledTagsPosts",componentId:"sc-18n6ohm-1"})(["position:relative;display:flex;flex-direction:column;.moveToBot{position:sticky;top:0;padding-top:2.5rem;padding-bottom:2.5rem;.tag-list{.tag-horizontal{font-size:0.85rem;}}}.moveToBotAnimate{position:sticky;top:0;transition:padding 300ms ease-in;padding-top:2.5rem;padding-bottom:2.5rem;.tag-list{.tag-horizontal{transition:font-size 300ms ease-in;font-size:0.85rem;}}}"]),h.isMobile||(B=m.d.div.withConfig({displayName:"MainCard__StyledTagsPosts",componentId:"sc-18n6ohm-2"})(["position:relative;display:grid;grid-template-columns:0.25fr auto;padding:0.5rem 1.5rem 1.5rem 1.5rem;@media (max-width:500px){padding:0rem 1rem 1rem 1rem;}"]));var F=m.d.div.withConfig({displayName:"MainCard__StyledMainCard",componentId:"sc-18n6ohm-3"})(["position:relative;padding:0 1rem 1rem 1rem;@media (max-width:500px){padding:0;}"]),X=m.d.div.withConfig({displayName:"MainCard__StyledSubMain",componentId:"sc-18n6ohm-4"})(["position:relative;margin-top:3rem;border-radius:10px;@media (max-width:500px){margin-top:1rem;border-radius:0px;}"]),D=m.d.div.withConfig({displayName:"MainCard__StyledSubMainInner",componentId:"sc-18n6ohm-5"})([""]);h.isMobile||(D=m.d.div.withConfig({displayName:"MainCard__StyledSubMainInner",componentId:"sc-18n6ohm-6"})(["transform:translateY(-25px);"]));var W=m.d.div.withConfig({displayName:"MainCard__StyledSwitchContainer",componentId:"sc-18n6ohm-7"})(["position:absolute;text-align:end;margin:0 0.4rem;top:12px;right:25px;z-index:2;@media (max-width:500px){right:10px;}"]),Y="1334994837";e.default=function(t){var e=t.data,n=Object(r.useState)(void 0),s=n[0],c=n[1],l=e.allMdx.edges;Object(r.useEffect)((function(){var t=sessionStorage.getItem("curLoad")||15;c(parseInt(t))}),[]),Object(r.useEffect)((function(){return window.addEventListener("scroll",d),function(){window.removeEventListener("scroll",d)}}));var d=function(){var t=document.querySelector("div.posts-list > a:last-child"),e=t.offsetTop+t.clientHeight;window.pageYOffset+window.innerHeight>e&&l.length>s&&c((function(t){return sessionStorage.setItem("curLoad",t+15),t+15}))};return o.a.createElement(i.a,null,o.a.createElement(a.a,{title:"デフテックの語学旅"}),o.a.createElement(G,{posts:l,loads:s}))}},ls82:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(L){s=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof u?e:u,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=b(a,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=c;var d={};function u(){}function m(){}function f(){}var p={};p[o]=function(){return this};var h=Object.getPrototypeOf,g=h&&h(h(_([])));g&&g!==e&&n.call(g,o)&&(p=g);var v=f.prototype=u.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var r;this._invoke=function(o,i){function a(){return new e((function(r,a){!function r(o,i,a,s){var c=l(t[o],t,i);if("throw"!==c.type){var d=c.arg,u=d.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(u).then((function(t){d.value=t,a(d)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function _(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:void 0,done:!0}}return m.prototype=v.constructor=f,f.constructor=m,m.displayName=s(f,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,s(t,a,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(w.prototype),w.prototype[i]=function(){return this},t.AsyncIterator=w,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new w(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(v),s(v,a,"Generator"),v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},o0o1:function(t,e,n){t.exports=n("ls82")}}]);
//# sourceMappingURL=component---src-pages-index-js-1261aa5721c70f596279.js.map