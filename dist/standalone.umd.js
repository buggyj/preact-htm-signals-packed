!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t||self).preactHtmSignalsPacked={})}(this,function(t){var n,e;t.options=void 0,t.isValidElement=void 0;var o,i,_,r,u,f,l,s,c={},a=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(t,n){for(var e in n)t[e]=n[e];return t}function d(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function y(t,e,o){var i,_,r,u={};for(r in e)"key"==r?i=e[r]:"ref"==r?_=e[r]:u[r]=e[r];if(arguments.length>2&&(u.children=arguments.length>3?n.call(arguments,2):o),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===u[r]&&(u[r]=t.defaultProps[r]);return m(t,u,i,_,null)}function m(n,o,i,_,r){var u={type:n,props:o,key:i,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++e:r,__i:-1,__u:0};return null==r&&null!=t.options.vnode&&t.options.vnode(u),u}function g(t){return t.children}function b(t,n){this.props=t,this.context=n}function k(t,n){if(null==n)return t.__?k(t.__,t.__i+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof t.type?k(t):null}function w(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return w(t)}}function S(n){(!n.__d&&(n.__d=!0)&&o.push(n)&&!x.__r++||i!==t.options.debounceRendering)&&((i=t.options.debounceRendering)||_)(x)}function x(){var n,e,i,_,u,f,l,s;for(o.sort(r);n=o.shift();)n.__d&&(e=o.length,_=void 0,f=(u=(i=n).__v).__e,l=[],s=[],i.__P&&((_=v({},u)).__v=u.__v+1,t.options.vnode&&t.options.vnode(_),T(i.__P,_,u,i.__n,i.__P.namespaceURI,32&u.__u?[f]:null,l,null==f?k(u):f,!!(32&u.__u),s),_.__v=u.__v,_.__.__k[_.__i]=_,$(l,_,s),_.__e!=f&&w(_)),o.length>e&&o.sort(r));x.__r=0}function C(t,n,e,o,i,_,r,u,f,l,s){var p,v,d,y,b,w=o&&o.__k||a,S=n.length;for(e.__d=f,function(t,n,e){var o,i,_,r,u,f=n.length,l=e.length,s=l,c=0;for(t.__k=[],o=0;o<f;o++)null!=(i=n[o])&&"boolean"!=typeof i&&"function"!=typeof i?(r=o+c,(i=t.__k[o]="string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?m(null,i,null,null,null):h(i)?m(g,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?m(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=t,i.__b=t.__b+1,_=null,-1!==(u=i.__i=E(i,e,r,s))&&(s--,(_=e[u])&&(_.__u|=131072)),null==_||null===_.__v?(-1==u&&c--,"function"!=typeof i.type&&(i.__u|=65536)):u!==r&&(u==r-1?c--:u==r+1?c++:(u>r?c--:c++,i.__u|=65536))):i=t.__k[o]=null;if(s)for(o=0;o<l;o++)null!=(_=e[o])&&!(131072&_.__u)&&(_.__e==t.__d&&(t.__d=k(_)),M(_,_))}(e,n,w),f=e.__d,p=0;p<S;p++)null!=(d=e.__k[p])&&(v=-1===d.__i?c:w[d.__i]||c,d.__i=p,T(t,d,v,i,_,r,u,f,l,s),y=d.__e,d.ref&&v.ref!=d.ref&&(v.ref&&D(v.ref,null,d),s.push(d.ref,d.__c||y,d)),null==b&&null!=y&&(b=y),65536&d.__u||v.__k===d.__k?f=U(d,f,t):"function"==typeof d.type&&void 0!==d.__d?f=d.__d:y&&(f=y.nextSibling),d.__d=void 0,d.__u&=-196609);e.__d=f,e.__e=b}function U(t,n,e){var o,i;if("function"==typeof t.type){for(o=t.__k,i=0;o&&i<o.length;i++)o[i]&&(o[i].__=t,n=U(o[i],n,e));return n}t.__e!=n&&(n&&t.type&&!e.contains(n)&&(n=k(t)),e.insertBefore(t.__e,n||null),n=t.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function E(t,n,e,o){var i=t.key,_=t.type,r=e-1,u=e+1,f=n[e];if(null===f||f&&i==f.key&&_===f.type&&!(131072&f.__u))return e;if(o>(null==f||131072&f.__u?0:1))for(;r>=0||u<n.length;){if(r>=0){if((f=n[r])&&!(131072&f.__u)&&i==f.key&&_===f.type)return r;r--}if(u<n.length){if((f=n[u])&&!(131072&f.__u)&&i==f.key&&_===f.type)return u;u++}}return-1}function H(t,n,e){"-"===n[0]?t.setProperty(n,null==e?"":e):t[n]=null==e?"":"number"!=typeof e||p.test(n)?e:e+"px"}function P(t,n,e,o,i){var _;t:if("style"===n)if("string"==typeof e)t.style.cssText=e;else{if("string"==typeof o&&(t.style.cssText=o=""),o)for(n in o)e&&n in e||H(t.style,n,"");if(e)for(n in e)o&&e[n]===o[n]||H(t.style,n,e[n])}else if("o"===n[0]&&"n"===n[1])_=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in t||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+_]=e,e?o?e.u=o.u:(e.u=u,t.addEventListener(n,_?l:f,_)):t.removeEventListener(n,_?l:f,_);else{if("http://www.w3.org/2000/svg"==i)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&"popover"!=n&&n in t)try{t[n]=null==e?"":e;break t}catch(t){}"function"==typeof e||(null==e||!1===e&&"-"!==n[4]?t.removeAttribute(n):t.setAttribute(n,"popover"==n&&1==e?"":e))}}function N(n){return function(e){if(this.l){var o=this.l[e.type+n];if(null==e.t)e.t=u++;else if(e.t<o.u)return;return o(t.options.event?t.options.event(e):e)}}}function T(e,o,i,_,r,u,f,l,s,a){var p,y,m,w,S,x,U,E,H,N,T,$,D,M,F,W,L=o.type;if(void 0!==o.constructor)return null;128&i.__u&&(s=!!(32&i.__u),u=[l=o.__e=i.__e]),(p=t.options.__b)&&p(o);t:if("function"==typeof L)try{if(E=o.props,H="prototype"in L&&L.prototype.render,N=(p=L.contextType)&&_[p.__c],T=p?N?N.props.value:p.__:_,i.__c?U=(y=o.__c=i.__c).__=y.__E:(H?o.__c=y=new L(E,T):(o.__c=y=new b(E,T),y.constructor=L,y.render=A),N&&N.sub(y),y.props=E,y.state||(y.state={}),y.context=T,y.__n=_,m=y.__d=!0,y.__h=[],y._sb=[]),H&&null==y.__s&&(y.__s=y.state),H&&null!=L.getDerivedStateFromProps&&(y.__s==y.state&&(y.__s=v({},y.__s)),v(y.__s,L.getDerivedStateFromProps(E,y.__s))),w=y.props,S=y.state,y.__v=o,m)H&&null==L.getDerivedStateFromProps&&null!=y.componentWillMount&&y.componentWillMount(),H&&null!=y.componentDidMount&&y.__h.push(y.componentDidMount);else{if(H&&null==L.getDerivedStateFromProps&&E!==w&&null!=y.componentWillReceiveProps&&y.componentWillReceiveProps(E,T),!y.__e&&(null!=y.shouldComponentUpdate&&!1===y.shouldComponentUpdate(E,y.__s,T)||o.__v===i.__v)){for(o.__v!==i.__v&&(y.props=E,y.state=y.__s,y.__d=!1),o.__e=i.__e,o.__k=i.__k,o.__k.some(function(t){t&&(t.__=o)}),$=0;$<y._sb.length;$++)y.__h.push(y._sb[$]);y._sb=[],y.__h.length&&f.push(y);break t}null!=y.componentWillUpdate&&y.componentWillUpdate(E,y.__s,T),H&&null!=y.componentDidUpdate&&y.__h.push(function(){y.componentDidUpdate(w,S,x)})}if(y.context=T,y.props=E,y.__P=e,y.__e=!1,D=t.options.__r,M=0,H){for(y.state=y.__s,y.__d=!1,D&&D(o),p=y.render(y.props,y.state,y.context),F=0;F<y._sb.length;F++)y.__h.push(y._sb[F]);y._sb=[]}else do{y.__d=!1,D&&D(o),p=y.render(y.props,y.state,y.context),y.state=y.__s}while(y.__d&&++M<25);y.state=y.__s,null!=y.getChildContext&&(_=v(v({},_),y.getChildContext())),H&&!m&&null!=y.getSnapshotBeforeUpdate&&(x=y.getSnapshotBeforeUpdate(w,S)),C(e,h(W=null!=p&&p.type===g&&null==p.key?p.props.children:p)?W:[W],o,i,_,r,u,f,l,s,a),y.base=o.__e,o.__u&=-161,y.__h.length&&f.push(y),U&&(y.__E=y.__=null)}catch(e){if(o.__v=null,s||null!=u){for(o.__u|=s?160:32;l&&8===l.nodeType&&l.nextSibling;)l=l.nextSibling;u[u.indexOf(l)]=null,o.__e=l}else o.__e=i.__e,o.__k=i.__k;t.options.__e(e,o,i)}else null==u&&o.__v===i.__v?(o.__k=i.__k,o.__e=i.__e):o.__e=function(e,o,i,_,r,u,f,l,s){var a,p,v,y,m,g,b,w=i.props,S=o.props,x=o.type;if("svg"===x?r="http://www.w3.org/2000/svg":"math"===x?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),null!=u)for(a=0;a<u.length;a++)if((m=u[a])&&"setAttribute"in m==!!x&&(x?m.localName===x:3===m.nodeType)){e=m,u[a]=null;break}if(null==e){if(null===x)return document.createTextNode(S);e=document.createElementNS(r,x,S.is&&S),l&&(t.options.__m&&t.options.__m(o,u),l=!1),u=null}if(null===x)w===S||l&&e.data===S||(e.data=S);else{if(u=u&&n.call(e.childNodes),w=i.props||c,!l&&null!=u)for(w={},a=0;a<e.attributes.length;a++)w[(m=e.attributes[a]).name]=m.value;for(a in w)if(m=w[a],"children"==a);else if("dangerouslySetInnerHTML"==a)v=m;else if(!(a in S)){if("value"==a&&"defaultValue"in S||"checked"==a&&"defaultChecked"in S)continue;P(e,a,null,m,r)}for(a in S)m=S[a],"children"==a?y=m:"dangerouslySetInnerHTML"==a?p=m:"value"==a?g=m:"checked"==a?b=m:l&&"function"!=typeof m||w[a]===m||P(e,a,m,w[a],r);if(p)l||v&&(p.__html===v.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),o.__k=[];else if(v&&(e.innerHTML=""),C(e,h(y)?y:[y],o,i,_,"foreignObject"===x?"http://www.w3.org/1999/xhtml":r,u,f,u?u[0]:i.__k&&k(i,0),l,s),null!=u)for(a=u.length;a--;)d(u[a]);l||(a="value","progress"===x&&null==g?e.removeAttribute("value"):void 0!==g&&(g!==e[a]||"progress"===x&&!g||"option"===x&&g!==w[a])&&P(e,a,g,w[a],r),a="checked",void 0!==b&&b!==e[a]&&P(e,a,b,w[a],r))}return e}(i.__e,o,i,_,r,u,f,s,a);(p=t.options.diffed)&&p(o)}function $(n,e,o){e.__d=void 0;for(var i=0;i<o.length;i++)D(o[i],o[++i],o[++i]);t.options.__c&&t.options.__c(e,n),n.some(function(e){try{n=e.__h,e.__h=[],n.some(function(t){t.call(e)})}catch(n){t.options.__e(n,e.__v)}})}function D(n,e,o){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==e||(n.__u=n(e))}else n.current=e}catch(n){t.options.__e(n,o)}}function M(n,e,o){var i,_;if(t.options.unmount&&t.options.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||D(i,null,e)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){t.options.__e(n,e)}i.base=i.__P=null}if(i=n.__k)for(_=0;_<i.length;_++)i[_]&&M(i[_],e,o||"function"!=typeof n.type);o||d(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function A(t,n,e){return this.constructor(t,e)}function F(e,o,i){var _,r,u,f;t.options.__&&t.options.__(e,o),r=(_="function"==typeof i)?null:i&&i.__k||o.__k,u=[],f=[],T(o,e=(!_&&i||o).__k=y(g,null,[e]),r||c,c,o.namespaceURI,!_&&i?[i]:r?null:o.firstChild?n.call(o.childNodes):null,u,!_&&i?i:r?r.__e:o.firstChild,_,f),$(u,e,f)}n=a.slice,t.options={__e:function(t,n,e,o){for(var i,_,r;n=n.__;)if((i=n.__c)&&!i.__)try{if((_=i.constructor)&&null!=_.getDerivedStateFromError&&(i.setState(_.getDerivedStateFromError(t)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(t,o||{}),r=i.__d),r)return i.__E=i}catch(n){t=n}throw t}},e=0,t.isValidElement=function(t){return null!=t&&null==t.constructor},b.prototype.setState=function(t,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof t&&(t=t(v({},e),this.props)),t&&v(e,t),null!=t&&this.__v&&(n&&this._sb.push(n),S(this))},b.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),S(this))},b.prototype.render=g,o=[],_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=function(t,n){return t.__v.__b-n.__v.__b},x.__r=0,u=0,f=N(!1),l=N(!0),s=0;var W,L,O,R,I=0,V=[],j=t.options,q=j.__b,B=j.__r,z=j.diffed,G=j.__c,J=j.unmount,K=j.__;function Q(t,n){j.__h&&j.__h(L,t,I||n),I=0;var e=L.__H||(L.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({}),e.__[t]}function X(t){return I=1,Y(lt,t)}function Y(t,n,e){var o=Q(W++,2);if(o.t=t,!o.__c&&(o.__=[e?e(n):lt(void 0,n),function(t){var n=o.__N?o.__N[0]:o.__[0],e=o.t(n,t);n!==e&&(o.__N=[e,o.__[1]],o.__c.setState({}))}],o.__c=L,!L.u)){var i=function(t,n,e){if(!o.__c.__H)return!0;var i=o.__c.__H.__.filter(function(t){return!!t.__c});if(i.every(function(t){return!t.__N}))return!_||_.call(this,t,n,e);var r=!1;return i.forEach(function(t){if(t.__N){var n=t.__[0];t.__=t.__N,t.__N=void 0,n!==t.__[0]&&(r=!0)}}),!(!r&&o.__c.props===t)&&(!_||_.call(this,t,n,e))};L.u=!0;var _=L.shouldComponentUpdate,r=L.componentWillUpdate;L.componentWillUpdate=function(t,n,e){if(this.__e){var o=_;_=void 0,i(t,n,e),_=o}r&&r.call(this,t,n,e)},L.shouldComponentUpdate=i}return o.__N||o.__}function Z(t,n){var e=Q(W++,3);!j.__s&&ft(e.__H,n)&&(e.__=t,e.i=n,L.__H.__h.push(e))}function tt(t,n){var e=Q(W++,4);!j.__s&&ft(e.__H,n)&&(e.__=t,e.i=n,L.__h.push(e))}function nt(t){return I=5,et(function(){return{current:t}},[])}function et(t,n){var e=Q(W++,7);return ft(e.__H,n)&&(e.__=t(),e.__H=n,e.__h=t),e.__}function ot(){for(var t;t=V.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(rt),t.__H.__h.forEach(ut),t.__H.__h=[]}catch(n){t.__H.__h=[],j.__e(n,t.__v)}}j.__b=function(t){L=null,q&&q(t)},j.__=function(t,n){t&&n.__k&&n.__k.__m&&(t.__m=n.__k.__m),K&&K(t,n)},j.__r=function(t){B&&B(t),W=0;var n=(L=t.__c).__H;n&&(O===L?(n.__h=[],L.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.i=t.__N=void 0})):(n.__h.forEach(rt),n.__h.forEach(ut),n.__h=[],W=0)),O=L},j.diffed=function(t){z&&z(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(1!==V.push(n)&&R===j.requestAnimationFrame||((R=j.requestAnimationFrame)||_t)(ot)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.i=void 0})),O=L=null},j.__c=function(t,n){n.some(function(t){try{t.__h.forEach(rt),t.__h=t.__h.filter(function(t){return!t.__||ut(t)})}catch(e){n.some(function(t){t.__h&&(t.__h=[])}),n=[],j.__e(e,t.__v)}}),G&&G(t,n)},j.unmount=function(t){J&&J(t);var n,e=t.__c;e&&e.__H&&(e.__H.__.forEach(function(t){try{rt(t)}catch(t){n=t}}),e.__H=void 0,n&&j.__e(n,e.__v))};var it="function"==typeof requestAnimationFrame;function _t(t){var n,e=function(){clearTimeout(o),it&&cancelAnimationFrame(n),setTimeout(t)},o=setTimeout(e,100);it&&(n=requestAnimationFrame(e))}function rt(t){var n=L,e=t.__c;"function"==typeof e&&(t.__c=void 0,e()),L=n}function ut(t){var n=L;t.__c=t.__(),L=n}function ft(t,n){return!t||t.length!==n.length||n.some(function(n,e){return n!==t[e]})}function lt(t,n){return"function"==typeof n?n(t):n}var st=Symbol.for("preact-signals");function ct(){if(dt>1)dt--;else{for(var t,n=!1;void 0!==vt;){var e=vt;for(vt=void 0,yt++;void 0!==e;){var o=e.o;if(e.o=void 0,e.f&=-3,!(8&e.f)&&wt(e))try{e.c()}catch(e){n||(t=e,n=!0)}e=o}}if(yt=0,dt--,n)throw t}}var at,pt,ht=void 0,vt=void 0,dt=0,yt=0,mt=0;function gt(t){if(void 0!==ht){var n=t.n;if(void 0===n||n.t!==ht)return n={i:0,S:t,p:ht.s,n:void 0,t:ht,e:void 0,x:void 0,r:n},void 0!==ht.s&&(ht.s.n=n),ht.s=n,t.n=n,32&ht.f&&t.S(n),n;if(-1===n.i)return n.i=0,void 0!==n.n&&(n.n.p=n.p,void 0!==n.p&&(n.p.n=n.n),n.p=ht.s,n.n=void 0,ht.s.n=n,ht.s=n),n}}function bt(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function kt(t){return new bt(t)}function wt(t){for(var n=t.s;void 0!==n;n=n.n)if(n.S.i!==n.i||!n.S.h()||n.S.i!==n.i)return!0;return!1}function St(t){for(var n=t.s;void 0!==n;n=n.n){var e=n.S.n;if(void 0!==e&&(n.r=e),n.S.n=n,n.i=-1,void 0===n.n){t.s=n;break}}}function xt(t){for(var n=t.s,e=void 0;void 0!==n;){var o=n.p;-1===n.i?(n.S.U(n),void 0!==o&&(o.n=n.n),void 0!==n.n&&(n.n.p=o)):e=n,n.S.n=n.r,void 0!==n.r&&(n.r=void 0),n=o}t.s=e}function Ct(t){bt.call(this,void 0),this.x=t,this.s=void 0,this.g=mt-1,this.f=4}function Ut(t){return new Ct(t)}function Et(t){var n=t.u;if(t.u=void 0,"function"==typeof n){dt++;var e=ht;ht=void 0;try{n()}catch(n){throw t.f&=-2,t.f|=8,Ht(t),n}finally{ht=e,ct()}}}function Ht(t){for(var n=t.s;void 0!==n;n=n.n)n.S.U(n);t.x=void 0,t.s=void 0,Et(t)}function Pt(t){if(ht!==this)throw new Error("Out-of-order effect");xt(this),ht=t,this.f&=-2,8&this.f&&Ht(this),ct()}function Nt(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function Tt(t){var n=new Nt(t);try{n.c()}catch(t){throw n.d(),t}return n.d.bind(n)}function $t(n,e){t.options[n]=e.bind(null,t.options[n]||function(){})}function Dt(t){pt&&pt(),pt=t&&t.S()}function Mt(n){var e=this,o=n.data,i=Ft(o);i.value=o;var _=et(function(){for(var n=e.__v;n=n.__;)if(n.__c){n.__c.__$f|=4;break}return e.__$u.c=function(){var n;t.isValidElement(_.peek())||3!==(null==(n=e.base)?void 0:n.nodeType)?(e.__$f|=1,e.setState({})):e.base.data=_.peek()},Ut(function(){var t=i.value.value;return 0===t?0:!0===t?"":t||""})},[]);return _.value}function At(t,n,e,o){var i=n in t&&void 0===t.ownerSVGElement,_=kt(e);return{o:function(t,n){_.value=t,o=n},d:Tt(function(){var e=_.value.value;o[n]!==e&&(o[n]=e,i?t[n]=e:e?t.setAttribute(n,e):t.removeAttribute(n))})}}function Ft(t){return et(function(){return kt(t)},[])}bt.prototype.brand=st,bt.prototype.h=function(){return!0},bt.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},bt.prototype.U=function(t){if(void 0!==this.t){var n=t.e,e=t.x;void 0!==n&&(n.x=e,t.e=void 0),void 0!==e&&(e.e=n,t.x=void 0),t===this.t&&(this.t=e)}},bt.prototype.subscribe=function(t){var n=this;return Tt(function(){var e=n.value,o=ht;ht=void 0;try{t(e)}finally{ht=o}})},bt.prototype.valueOf=function(){return this.value},bt.prototype.toString=function(){return this.value+""},bt.prototype.toJSON=function(){return this.value},bt.prototype.peek=function(){var t=ht;ht=void 0;try{return this.value}finally{ht=t}},Object.defineProperty(bt.prototype,"value",{get:function(){var t=gt(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if(yt>100)throw new Error("Cycle detected");this.v=t,this.i++,mt++,dt++;try{for(var n=this.t;void 0!==n;n=n.x)n.t.N()}finally{ct()}}}}),(Ct.prototype=new bt).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===mt)return!0;if(this.g=mt,this.f|=1,this.i>0&&!wt(this))return this.f&=-2,!0;var t=ht;try{St(this),ht=this;var n=this.x();(16&this.f||this.v!==n||0===this.i)&&(this.v=n,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return ht=t,xt(this),this.f&=-2,!0},Ct.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var n=this.s;void 0!==n;n=n.n)n.S.S(n)}bt.prototype.S.call(this,t)},Ct.prototype.U=function(t){if(void 0!==this.t&&(bt.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var n=this.s;void 0!==n;n=n.n)n.S.U(n)}},Ct.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},Object.defineProperty(Ct.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=gt(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),Nt.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var n=this.x();"function"==typeof n&&(this.u=n)}finally{t()}},Nt.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Et(this),St(this),dt++;var t=ht;return ht=this,Pt.bind(this,t)},Nt.prototype.N=function(){2&this.f||(this.f|=2,this.o=vt,vt=this)},Nt.prototype.d=function(){this.f|=8,1&this.f||Ht(this)},Mt.displayName="_st",Object.defineProperties(bt.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Mt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),$t("__b",function(t,n){if("string"==typeof n.type){var e,o=n.props;for(var i in o)if("children"!==i){var _=o[i];_ instanceof bt&&(e||(n.__np=e={}),e[i]=_,o[i]=_.peek())}}t(n)}),$t("__r",function(t,n){Dt();var e,o=n.__c;o&&(o.__$f&=-2,void 0===(e=o.__$u)&&(o.__$u=e=function(){var t;return Tt(function(){t=this}),t.c=function(){o.__$f|=1,o.setState({})},t}())),at=o,Dt(e),t(n)}),$t("__e",function(t,n,e,o){Dt(),at=void 0,t(n,e,o)}),$t("diffed",function(t,n){var e;if(Dt(),at=void 0,"string"==typeof n.type&&(e=n.__e)){var o=n.__np,i=n.props;if(o){var _=e.U;if(_)for(var r in _){var u=_[r];void 0===u||r in o||(u.d(),_[r]=void 0)}else e.U=_={};for(var f in o){var l=_[f],s=o[f];void 0===l?(l=At(e,f,s,i),_[f]=l):l.o(s,i)}}}t(n)}),$t("unmount",function(t,n){if("string"==typeof n.type){var e=n.__e;if(e){var o=e.U;if(o)for(var i in e.U=void 0,o){var _=o[i];_&&_.d()}}}else{var r=n.__c;if(r){var u=r.__$u;u&&(r.__$u=void 0,u.d())}}t(n)}),$t("__h",function(t,n,e,o){(o<3||9===o)&&(n.__$f|=2),t(n,e,o)}),b.prototype.shouldComponentUpdate=function(t,n){var e=this.__$u;if(!(e&&void 0!==e.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var o in n)return!0;for(var i in t)if("__source"!==i&&t[i]!==this.props[i])return!0;for(var _ in this.props)if(!(_ in t))return!0;return!1};var Wt=function(t,n,e,o){var i;n[0]=0;for(var _=1;_<n.length;_++){var r=n[_++],u=n[_]?(n[0]|=r?1:2,e[n[_++]]):n[++_];3===r?o[0]=u:4===r?o[1]=Object.assign(o[1]||{},u):5===r?(o[1]=o[1]||{})[n[++_]]=u:6===r?o[1][n[++_]]+=u+"":r?(i=t.apply(u,Wt(t,u,e,["",null])),o.push(i),u[0]?n[0]|=2:(n[_-2]=0,n[_]=i)):o.push(u)}return o},Lt=new Map,Ot=function(t){var n=Lt.get(this);return n||(n=new Map,Lt.set(this,n)),(n=Wt(this,n.get(t)||(n.set(t,n=function(t){for(var n,e,o=1,i="",_="",r=[0],u=function(t){1===o&&(t||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?r.push(0,t,i):3===o&&(t||i)?(r.push(3,t,i),o=2):2===o&&"..."===i&&t?r.push(4,t,0):2===o&&i&&!t?r.push(5,0,!0,i):o>=5&&((i||!t&&5===o)&&(r.push(o,0,i,e),o=6),t&&(r.push(o,t,0,e),o=6)),i=""},f=0;f<t.length;f++){f&&(1===o&&u(),u(f));for(var l=0;l<t[f].length;l++)n=t[f][l],1===o?"<"===n?(u(),r=[r],o=3):i+=n:4===o?"--"===i&&">"===n?(o=1,i=""):i=n+i[0]:_?n===_?_="":i+=n:'"'===n||"'"===n?_=n:">"===n?(u(),o=1):o&&("="===n?(o=5,e=i,i=""):"/"===n&&(o<5||">"===t[f][l+1])?(u(),3===o&&(r=r[0]),o=r,(r=r[0]).push(2,0,o),o=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(u(),o=2):i+=n),3===o&&"!--"===i&&(o=4,r=r[0])}return u(),r}(t)),n),arguments,[])).length>1?n:n[0]}.bind(y);t.Component=b,t.Fragment=g,t.Signal=bt,t.batch=function(t){if(dt>0)return t();dt++;try{return t()}finally{ct()}},t.cloneElement=function(t,e,o){var i,_,r,u,f=v({},t.props);for(r in t.type&&t.type.defaultProps&&(u=t.type.defaultProps),e)"key"==r?i=e[r]:"ref"==r?_=e[r]:f[r]=void 0===e[r]&&void 0!==u?u[r]:e[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):o),m(t.type,f,i||t.key,_||t.ref,null)},t.computed=Ut,t.createContext=function(t,n){var e={__c:n="__cC"+s++,__:t,Consumer:function(t,n){return t.children(n)},Provider:function(t){var e,o;return this.getChildContext||(e=[],(o={})[n]=this,this.getChildContext=function(){return o},this.componentWillUnmount=function(){e=null},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&e.some(function(t){t.__e=!0,S(t)})},this.sub=function(t){e.push(t);var n=t.componentWillUnmount;t.componentWillUnmount=function(){e&&e.splice(e.indexOf(t),1),n&&n.call(t)}}),t.children}};return e.Provider.__=e.Consumer.contextType=e},t.createElement=y,t.createRef=function(){return{current:null}},t.effect=Tt,t.h=y,t.html=Ot,t.hydrate=function t(n,e){F(n,e,t)},t.render=F,t.signal=kt,t.toChildArray=function t(n,e){return e=e||[],null==n||"boolean"==typeof n||(h(n)?n.some(function(n){t(n,e)}):e.push(n)),e},t.untracked=function(t){var n=ht;ht=void 0;try{return t()}finally{ht=n}},t.useCallback=function(t,n){return I=8,et(function(){return t},n)},t.useComputed=function(t){var n=nt(t);return n.current=t,at.__$f|=4,et(function(){return Ut(function(){return n.current()})},[])},t.useContext=function(t){var n=L.context[t.__c],e=Q(W++,9);return e.c=t,n?(null==e.__&&(e.__=!0,n.sub(L)),n.props.value):t.__},t.useDebugValue=function(t,n){j.useDebugValue&&j.useDebugValue(n?n(t):t)},t.useEffect=Z,t.useErrorBoundary=function(t){var n=Q(W++,10),e=X();return n.__=t,L.componentDidCatch||(L.componentDidCatch=function(t,o){n.__&&n.__(t,o),e[1](t)}),[e[0],function(){e[1](void 0)}]},t.useId=function(){var t=Q(W++,11);if(!t.__){for(var n=L.__v;null!==n&&!n.__m&&null!==n.__;)n=n.__;var e=n.__m||(n.__m=[0,0]);t.__="P"+e[0]+"-"+e[1]++}return t.__},t.useImperativeHandle=function(t,n,e){I=6,tt(function(){return"function"==typeof t?(t(n()),function(){return t(null)}):t?(t.current=n(),function(){return t.current=null}):void 0},null==e?e:e.concat(t))},t.useLayoutEffect=tt,t.useMemo=et,t.useReducer=Y,t.useRef=nt,t.useSignal=Ft,t.useSignalEffect=function(t){var n=nt(t);n.current=t,Z(function(){return Tt(function(){return n.current()})},[])},t.useState=X});
