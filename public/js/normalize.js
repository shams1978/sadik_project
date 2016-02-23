/*! jQuery v2.2.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!k.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c}catch(e){}O.set(a,b,c);
}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return this;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b];
},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){return n.trim(a.value)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var hb=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!hb.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,hb.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var ib=a.location,jb=n.now(),kb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return(!c||c.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+b),c};var lb=/#.*$/,mb=/([?&])_=[^&]*/,nb=/^(.*?):[ \t]*([^\r\n]*)$/gm,ob=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pb=/^(?:GET|HEAD)$/,qb=/^\/\//,rb={},sb={},tb="*/".concat("*"),ub=d.createElement("a");ub.href=ib.href;function vb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function wb(a,b,c,d){var e={},f=a===sb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function xb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function yb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function zb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ib.href,type:"GET",isLocal:ob.test(ib.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":tb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?xb(xb(a,n.ajaxSettings),b):xb(n.ajaxSettings,a)},ajaxPrefilter:vb(rb),ajaxTransport:vb(sb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=nb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||ib.href)+"").replace(lb,"").replace(qb,ib.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=ub.protocol+"//"+ub.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),wb(rb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!pb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(kb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=mb.test(f)?f.replace(mb,"$1_="+jb++):f+(kb.test(f)?"&":"?")+"_="+jb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+tb+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=wb(sb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=yb(m,x,d)),u=zb(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Ab=/%20/g,Bb=/\[\]$/,Cb=/\r?\n/g,Db=/^(?:submit|button|image|reset|file)$/i,Eb=/^(?:input|select|textarea|keygen)/i;function Fb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Bb.test(a)?d(a,e):Fb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Fb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Fb(c,a[c],b,e);return d.join("&").replace(Ab,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Eb.test(this.nodeName)&&!Db.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Cb,"\r\n")}}):{name:b.name,value:c.replace(Cb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Gb={0:200,1223:204},Hb=n.ajaxSettings.xhr();l.cors=!!Hb&&"withCredentials"in Hb,l.ajax=Hb=!!Hb,n.ajaxTransport(function(b){var c,d;return l.cors||Hb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Gb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Ib=[],Jb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Ib.pop()||n.expando+"_"+jb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Jb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Jb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Jb,"$1"+e):b.jsonp!==!1&&(b.url+=(kb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Ib.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Kb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Kb)return Kb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Lb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Lb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0)-a.scrollTop(),d.left+=n.css(a[0],"borderLeftWidth",!0)-a.scrollLeft()),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Lb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Mb=a.jQuery,Nb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Nb),b&&a.jQuery===n&&(a.jQuery=Mb),n},b||(a.jQuery=a.$=n),n});

//! moment.js
//! version : 2.11.2
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return Uc.apply(null,arguments)}function b(a){Uc=a}function c(a){return"[object Array]"===Object.prototype.toString.call(a)}function d(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function e(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function f(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function g(a,b){for(var c in b)f(b,c)&&(a[c]=b[c]);return f(b,"toString")&&(a.toString=b.toString),f(b,"valueOf")&&(a.valueOf=b.valueOf),a}function h(a,b,c,d){return Da(a,b,c,d,!0).utc()}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function j(a){return null==a._pf&&(a._pf=i()),a._pf}function k(a){if(null==a._isValid){var b=j(a);a._isValid=!(isNaN(a._d.getTime())||!(b.overflow<0)||b.empty||b.invalidMonth||b.invalidWeekday||b.nullInput||b.invalidFormat||b.userInvalidated),a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function l(a){var b=h(NaN);return null!=a?g(j(b),a):j(b).userInvalidated=!0,b}function m(a){return void 0===a}function n(a,b){var c,d,e;if(m(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),m(b._i)||(a._i=b._i),m(b._f)||(a._f=b._f),m(b._l)||(a._l=b._l),m(b._strict)||(a._strict=b._strict),m(b._tzm)||(a._tzm=b._tzm),m(b._isUTC)||(a._isUTC=b._isUTC),m(b._offset)||(a._offset=b._offset),m(b._pf)||(a._pf=j(b)),m(b._locale)||(a._locale=b._locale),Wc.length>0)for(c in Wc)d=Wc[c],e=b[d],m(e)||(a[d]=e);return a}function o(b){n(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),Xc===!1&&(Xc=!0,a.updateOffset(this),Xc=!1)}function p(a){return a instanceof o||null!=a&&null!=a._isAMomentObject}function q(a){return 0>a?Math.ceil(a):Math.floor(a)}function r(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=q(b)),c}function s(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&r(a[d])!==r(b[d]))&&g++;return g+f}function t(){}function u(a){return a?a.toLowerCase().replace("_","-"):a}function v(a){for(var b,c,d,e,f=0;f<a.length;){for(e=u(a[f]).split("-"),b=e.length,c=u(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=w(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&s(e,c,!0)>=b-1)break;b--}f++}return null}function w(a){var b=null;if(!Yc[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Vc._abbr,require("./locale/"+a),x(b)}catch(c){}return Yc[a]}function x(a,b){var c;return a&&(c=m(b)?z(a):y(a,b),c&&(Vc=c)),Vc._abbr}function y(a,b){return null!==b?(b.abbr=a,Yc[a]=Yc[a]||new t,Yc[a].set(b),x(a),Yc[a]):(delete Yc[a],null)}function z(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Vc;if(!c(a)){if(b=w(a))return b;a=[a]}return v(a)}function A(a,b){var c=a.toLowerCase();Zc[c]=Zc[c+"s"]=Zc[b]=a}function B(a){return"string"==typeof a?Zc[a]||Zc[a.toLowerCase()]:void 0}function C(a){var b,c,d={};for(c in a)f(a,c)&&(b=B(c),b&&(d[b]=a[c]));return d}function D(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function E(b,c){return function(d){return null!=d?(G(this,b,d),a.updateOffset(this,c),this):F(this,b)}}function F(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function G(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}function H(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=B(a),D(this[a]))return this[a](b);return this}function I(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function J(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(bd[a]=e),b&&(bd[b[0]]=function(){return I(e.apply(this,arguments),b[1],b[2])}),c&&(bd[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function K(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function L(a){var b,c,d=a.match($c);for(b=0,c=d.length;c>b;b++)bd[d[b]]?d[b]=bd[d[b]]:d[b]=K(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function M(a,b){return a.isValid()?(b=N(b,a.localeData()),ad[b]=ad[b]||L(b),ad[b](a)):a.localeData().invalidDate()}function N(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(_c.lastIndex=0;d>=0&&_c.test(a);)a=a.replace(_c,c),_c.lastIndex=0,d-=1;return a}function O(a,b,c){td[a]=D(b)?b:function(a,d){return a&&c?c:b}}function P(a,b){return f(td,a)?td[a](b._strict,b._locale):new RegExp(Q(a))}function Q(a){return R(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function R(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function S(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=r(a)}),c=0;c<a.length;c++)ud[a[c]]=d}function T(a,b){S(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function U(a,b,c){null!=b&&f(ud,a)&&ud[a](b,c._a,c,a)}function V(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function W(a,b){return c(this._months)?this._months[a.month()]:this._months[Ed.test(b)?"format":"standalone"][a.month()]}function X(a,b){return c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[Ed.test(b)?"format":"standalone"][a.month()]}function Y(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=h([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function Z(a,b){var c;return a.isValid()?"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),V(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a):a}function $(b){return null!=b?(Z(this,b),a.updateOffset(this,!0),this):F(this,"Month")}function _(){return V(this.year(),this.month())}function aa(a){return this._monthsParseExact?(f(this,"_monthsRegex")||ca.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex}function ba(a){return this._monthsParseExact?(f(this,"_monthsRegex")||ca.call(this),a?this._monthsStrictRegex:this._monthsRegex):this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex}function ca(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;12>b;b++)c=h([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(d.sort(a),e.sort(a),f.sort(a),b=0;12>b;b++)d[b]=R(d[b]),e[b]=R(e[b]),f[b]=R(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")$","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")$","i")}function da(a){var b,c=a._a;return c&&-2===j(a).overflow&&(b=c[wd]<0||c[wd]>11?wd:c[xd]<1||c[xd]>V(c[vd],c[wd])?xd:c[yd]<0||c[yd]>24||24===c[yd]&&(0!==c[zd]||0!==c[Ad]||0!==c[Bd])?yd:c[zd]<0||c[zd]>59?zd:c[Ad]<0||c[Ad]>59?Ad:c[Bd]<0||c[Bd]>999?Bd:-1,j(a)._overflowDayOfYear&&(vd>b||b>xd)&&(b=xd),j(a)._overflowWeeks&&-1===b&&(b=Cd),j(a)._overflowWeekday&&-1===b&&(b=Dd),j(a).overflow=b),a}function ea(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function fa(a,b){var c=!0;return g(function(){return c&&(ea(a+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error).stack),c=!1),b.apply(this,arguments)},b)}function ga(a,b){Jd[a]||(ea(b),Jd[a]=!0)}function ha(a){var b,c,d,e,f,g,h=a._i,i=Kd.exec(h)||Ld.exec(h);if(i){for(j(a).iso=!0,b=0,c=Nd.length;c>b;b++)if(Nd[b][1].exec(i[1])){e=Nd[b][0],d=Nd[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Od.length;c>b;b++)if(Od[b][1].exec(i[3])){f=(i[2]||" ")+Od[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!Md.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),wa(a)}else a._isValid=!1}function ia(b){var c=Pd.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(ha(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function ja(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 100>a&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function ka(a){var b=new Date(Date.UTC.apply(null,arguments));return 100>a&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function la(a){return ma(a)?366:365}function ma(a){return a%4===0&&a%100!==0||a%400===0}function na(){return ma(this.year())}function oa(a,b,c){var d=7+b-c,e=(7+ka(a,0,d).getUTCDay()-b)%7;return-e+d-1}function pa(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=oa(a,d,e),j=1+7*(b-1)+h+i;return 0>=j?(f=a-1,g=la(f)+j):j>la(a)?(f=a+1,g=j-la(a)):(f=a,g=j),{year:f,dayOfYear:g}}function qa(a,b,c){var d,e,f=oa(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return 1>g?(e=a.year()-1,d=g+ra(e,b,c)):g>ra(a.year(),b,c)?(d=g-ra(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function ra(a,b,c){var d=oa(a,b,c),e=oa(a+1,b,c);return(la(a)-d+e)/7}function sa(a,b,c){return null!=a?a:null!=b?b:c}function ta(b){var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}function ua(a){var b,c,d,e,f=[];if(!a._d){for(d=ta(a),a._w&&null==a._a[xd]&&null==a._a[wd]&&va(a),a._dayOfYear&&(e=sa(a._a[vd],d[vd]),a._dayOfYear>la(e)&&(j(a)._overflowDayOfYear=!0),c=ka(e,0,a._dayOfYear),a._a[wd]=c.getUTCMonth(),a._a[xd]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[yd]&&0===a._a[zd]&&0===a._a[Ad]&&0===a._a[Bd]&&(a._nextDay=!0,a._a[yd]=0),a._d=(a._useUTC?ka:ja).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[yd]=24)}}function va(a){var b,c,d,e,f,g,h,i;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=sa(b.GG,a._a[vd],qa(Ea(),1,4).year),d=sa(b.W,1),e=sa(b.E,1),(1>e||e>7)&&(i=!0)):(f=a._locale._week.dow,g=a._locale._week.doy,c=sa(b.gg,a._a[vd],qa(Ea(),f,g).year),d=sa(b.w,1),null!=b.d?(e=b.d,(0>e||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f),1>d||d>ra(c,f,g)?j(a)._overflowWeeks=!0:null!=i?j(a)._overflowWeekday=!0:(h=pa(c,d,e,f,g),a._a[vd]=h.year,a._dayOfYear=h.dayOfYear)}function wa(b){if(b._f===a.ISO_8601)return void ha(b);b._a=[],j(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,k=0;for(e=N(b._f,b._locale).match($c)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(P(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&j(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),k+=d.length),bd[f]?(d?j(b).empty=!1:j(b).unusedTokens.push(f),U(f,d,b)):b._strict&&!d&&j(b).unusedTokens.push(f);j(b).charsLeftOver=i-k,h.length>0&&j(b).unusedInput.push(h),j(b).bigHour===!0&&b._a[yd]<=12&&b._a[yd]>0&&(j(b).bigHour=void 0),b._a[yd]=xa(b._locale,b._a[yd],b._meridiem),ua(b),da(b)}function xa(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function ya(a){var b,c,d,e,f;if(0===a._f.length)return j(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],wa(b),k(b)&&(f+=j(b).charsLeftOver,f+=10*j(b).unusedTokens.length,j(b).score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function za(a){if(!a._d){var b=C(a._i);a._a=e([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),ua(a)}}function Aa(a){var b=new o(da(Ba(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function Ba(a){var b=a._i,e=a._f;return a._locale=a._locale||z(a._l),null===b||void 0===e&&""===b?l({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),p(b)?new o(da(b)):(c(e)?ya(a):e?wa(a):d(b)?a._d=b:Ca(a),k(a)||(a._d=null),a))}function Ca(b){var f=b._i;void 0===f?b._d=new Date(a.now()):d(f)?b._d=new Date(+f):"string"==typeof f?ia(b):c(f)?(b._a=e(f.slice(0),function(a){return parseInt(a,10)}),ua(b)):"object"==typeof f?za(b):"number"==typeof f?b._d=new Date(f):a.createFromInputFallback(b)}function Da(a,b,c,d,e){var f={};return"boolean"==typeof c&&(d=c,c=void 0),f._isAMomentObject=!0,f._useUTC=f._isUTC=e,f._l=c,f._i=a,f._f=b,f._strict=d,Aa(f)}function Ea(a,b,c,d){return Da(a,b,c,d,!1)}function Fa(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return Ea();for(d=b[0],e=1;e<b.length;++e)(!b[e].isValid()||b[e][a](d))&&(d=b[e]);return d}function Ga(){var a=[].slice.call(arguments,0);return Fa("isBefore",a)}function Ha(){var a=[].slice.call(arguments,0);return Fa("isAfter",a)}function Ia(a){var b=C(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=z(),this._bubble()}function Ja(a){return a instanceof Ia}function Ka(a,b){J(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+I(~~(a/60),2)+b+I(~~a%60,2)})}function La(a,b){var c=(b||"").match(a)||[],d=c[c.length-1]||[],e=(d+"").match(Ud)||["-",0,0],f=+(60*e[1])+r(e[2]);return"+"===e[0]?f:-f}function Ma(b,c){var e,f;return c._isUTC?(e=c.clone(),f=(p(b)||d(b)?+b:+Ea(b))-+e,e._d.setTime(+e._d+f),a.updateOffset(e,!1),e):Ea(b).local()}function Na(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Oa(b,c){var d,e=this._offset||0;return this.isValid()?null!=b?("string"==typeof b?b=La(qd,b):Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Na(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?cb(this,Za(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Na(this):null!=b?this:NaN}function Pa(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Qa(a){return this.utcOffset(0,a)}function Ra(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Na(this),"m")),this}function Sa(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(La(pd,this._i)),this}function Ta(a){return this.isValid()?(a=a?Ea(a).utcOffset():0,(this.utcOffset()-a)%60===0):!1}function Ua(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Va(){if(!m(this._isDSTShifted))return this._isDSTShifted;var a={};if(n(a,this),a=Ba(a),a._a){var b=a._isUTC?h(a._a):Ea(a._a);this._isDSTShifted=this.isValid()&&s(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Wa(){return this.isValid()?!this._isUTC:!1}function Xa(){return this.isValid()?this._isUTC:!1}function Ya(){return this.isValid()?this._isUTC&&0===this._offset:!1}function Za(a,b){var c,d,e,g=a,h=null;return Ja(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=Vd.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:r(h[xd])*c,h:r(h[yd])*c,m:r(h[zd])*c,s:r(h[Ad])*c,ms:r(h[Bd])*c}):(h=Wd.exec(a))?(c="-"===h[1]?-1:1,g={y:$a(h[2],c),M:$a(h[3],c),d:$a(h[4],c),h:$a(h[5],c),m:$a(h[6],c),s:$a(h[7],c),w:$a(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=ab(Ea(g.from),Ea(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new Ia(g),Ja(a)&&f(a,"_locale")&&(d._locale=a._locale),d}function $a(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function _a(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function ab(a,b){var c;return a.isValid()&&b.isValid()?(b=Ma(b,a),a.isBefore(b)?c=_a(a,b):(c=_a(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function bb(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(ga(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Za(c,d),cb(this,e,a),this}}function cb(b,c,d,e){var f=c._milliseconds,g=c._days,h=c._months;b.isValid()&&(e=null==e?!0:e,f&&b._d.setTime(+b._d+f*d),g&&G(b,"Date",F(b,"Date")+g*d),h&&Z(b,F(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function db(a,b){var c=a||Ea(),d=Ma(c,this).startOf("day"),e=this.diff(d,"days",!0),f=-6>e?"sameElse":-1>e?"lastWeek":0>e?"lastDay":1>e?"sameDay":2>e?"nextDay":7>e?"nextWeek":"sameElse",g=b&&(D(b[f])?b[f]():b[f]);return this.format(g||this.localeData().calendar(f,this,Ea(c)))}function eb(){return new o(this)}function fb(a,b){var c=p(a)?a:Ea(a);return this.isValid()&&c.isValid()?(b=B(m(b)?"millisecond":b),"millisecond"===b?+this>+c:+c<+this.clone().startOf(b)):!1}function gb(a,b){var c=p(a)?a:Ea(a);return this.isValid()&&c.isValid()?(b=B(m(b)?"millisecond":b),"millisecond"===b?+c>+this:+this.clone().endOf(b)<+c):!1}function hb(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)}function ib(a,b){var c,d=p(a)?a:Ea(a);return this.isValid()&&d.isValid()?(b=B(b||"millisecond"),"millisecond"===b?+this===+d:(c=+d,+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))):!1}function jb(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function kb(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function lb(a,b,c){var d,e,f,g;return this.isValid()?(d=Ma(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=B(b),"year"===b||"month"===b||"quarter"===b?(g=mb(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:q(g)):NaN):NaN}function mb(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function nb(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ob(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?D(Date.prototype.toISOString)?this.toDate().toISOString():M(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):M(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function pb(b){var c=M(this,b||a.defaultFormat);return this.localeData().postformat(c)}function qb(a,b){return this.isValid()&&(p(a)&&a.isValid()||Ea(a).isValid())?Za({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function rb(a){return this.from(Ea(),a)}function sb(a,b){return this.isValid()&&(p(a)&&a.isValid()||Ea(a).isValid())?Za({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function tb(a){return this.to(Ea(),a)}function ub(a){var b;return void 0===a?this._locale._abbr:(b=z(a),null!=b&&(this._locale=b),this)}function vb(){return this._locale}function wb(a){switch(a=B(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function xb(a){return a=B(a),void 0===a||"millisecond"===a?this:this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")}function yb(){return+this._d-6e4*(this._offset||0)}function zb(){return Math.floor(+this/1e3)}function Ab(){return this._offset?new Date(+this):this._d}function Bb(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function Cb(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function Db(){return this.isValid()?this.toISOString():"null"}function Eb(){return k(this)}function Fb(){return g({},j(this))}function Gb(){return j(this).overflow}function Hb(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Ib(a,b){J(0,[a,a.length],0,b)}function Jb(a){return Nb.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Kb(a){return Nb.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Lb(){return ra(this.year(),1,4)}function Mb(){var a=this.localeData()._week;return ra(this.year(),a.dow,a.doy)}function Nb(a,b,c,d,e){var f;return null==a?qa(this,d,e).year:(f=ra(a,d,e),b>f&&(b=f),Ob.call(this,a,b,c,d,e))}function Ob(a,b,c,d,e){var f=pa(a,b,c,d,e),g=ka(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}function Pb(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Qb(a){return qa(a,this._week.dow,this._week.doy).week}function Rb(){return this._week.dow}function Sb(){return this._week.doy}function Tb(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ub(a){var b=qa(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function Vb(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Wb(a,b){return c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]}function Xb(a){return this._weekdaysShort[a.day()]}function Yb(a){return this._weekdaysMin[a.day()]}function Zb(a,b,c){var d,e,f;for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;7>d;d++){if(e=Ea([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}function $b(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Vb(a,this.localeData()),this.add(a-b,"d")):b}function _b(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function ac(a){return this.isValid()?null==a?this.day()||7:this.day(this.day()%7?a:a-7):null!=a?this:NaN}function bc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function cc(){return this.hours()%12||12}function dc(a,b){J(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function ec(a,b){return b._meridiemParse}function fc(a){return"p"===(a+"").toLowerCase().charAt(0)}function gc(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function hc(a,b){b[Bd]=r(1e3*("0."+a))}function ic(){return this._isUTC?"UTC":""}function jc(){return this._isUTC?"Coordinated Universal Time":""}function kc(a){return Ea(1e3*a)}function lc(){return Ea.apply(null,arguments).parseZone()}function mc(a,b,c){var d=this._calendar[a];return D(d)?d.call(b,c):d}function nc(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function oc(){return this._invalidDate}function pc(a){return this._ordinal.replace("%d",a)}function qc(a){return a}function rc(a,b,c,d){var e=this._relativeTime[c];return D(e)?e(a,b,c,d):e.replace(/%d/i,a)}function sc(a,b){var c=this._relativeTime[a>0?"future":"past"];return D(c)?c(b):c.replace(/%s/i,b)}function tc(a){var b,c;for(c in a)b=a[c],D(b)?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function uc(a,b,c,d){var e=z(),f=h().set(d,b);return e[c](f,a)}function vc(a,b,c,d,e){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return uc(a,b,c,e);var f,g=[];for(f=0;d>f;f++)g[f]=uc(a,f,c,e);return g}function wc(a,b){return vc(a,b,"months",12,"month")}function xc(a,b){return vc(a,b,"monthsShort",12,"month")}function yc(a,b){return vc(a,b,"weekdays",7,"day")}function zc(a,b){return vc(a,b,"weekdaysShort",7,"day")}function Ac(a,b){return vc(a,b,"weekdaysMin",7,"day")}function Bc(){var a=this._data;return this._milliseconds=se(this._milliseconds),this._days=se(this._days),this._months=se(this._months),a.milliseconds=se(a.milliseconds),a.seconds=se(a.seconds),a.minutes=se(a.minutes),a.hours=se(a.hours),a.months=se(a.months),a.years=se(a.years),this}function Cc(a,b,c,d){var e=Za(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function Dc(a,b){return Cc(this,a,b,1)}function Ec(a,b){return Cc(this,a,b,-1)}function Fc(a){return 0>a?Math.floor(a):Math.ceil(a)}function Gc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*Fc(Ic(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=q(f/1e3),i.seconds=a%60,b=q(a/60),i.minutes=b%60,c=q(b/60),i.hours=c%24,g+=q(c/24),e=q(Hc(g)),h+=e,g-=Fc(Ic(e)),d=q(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function Hc(a){return 4800*a/146097}function Ic(a){return 146097*a/4800}function Jc(a){var b,c,d=this._milliseconds;if(a=B(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+Hc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(Ic(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function Kc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*r(this._months/12)}function Lc(a){return function(){return this.as(a)}}function Mc(a){return a=B(a),this[a+"s"]()}function Nc(a){return function(){return this._data[a]}}function Oc(){return q(this.days()/7)}function Pc(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function Qc(a,b,c){var d=Za(a).abs(),e=Ie(d.as("s")),f=Ie(d.as("m")),g=Ie(d.as("h")),h=Ie(d.as("d")),i=Ie(d.as("M")),j=Ie(d.as("y")),k=e<Je.s&&["s",e]||1>=f&&["m"]||f<Je.m&&["mm",f]||1>=g&&["h"]||g<Je.h&&["hh",g]||1>=h&&["d"]||h<Je.d&&["dd",h]||1>=i&&["M"]||i<Je.M&&["MM",i]||1>=j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,Pc.apply(null,k)}function Rc(a,b){return void 0===Je[a]?!1:void 0===b?Je[a]:(Je[a]=b,!0)}function Sc(a){var b=this.localeData(),c=Qc(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function Tc(){var a,b,c,d=Ke(this._milliseconds)/1e3,e=Ke(this._days),f=Ke(this._months);a=q(d/60),b=q(a/60),d%=60,a%=60,c=q(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var Uc,Vc,Wc=a.momentProperties=[],Xc=!1,Yc={},Zc={},$c=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,_c=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ad={},bd={},cd=/\d/,dd=/\d\d/,ed=/\d{3}/,fd=/\d{4}/,gd=/[+-]?\d{6}/,hd=/\d\d?/,id=/\d\d\d\d?/,jd=/\d\d\d\d\d\d?/,kd=/\d{1,3}/,ld=/\d{1,4}/,md=/[+-]?\d{1,6}/,nd=/\d+/,od=/[+-]?\d+/,pd=/Z|[+-]\d\d:?\d\d/gi,qd=/Z|[+-]\d\d(?::?\d\d)?/gi,rd=/[+-]?\d+(\.\d{1,3})?/,sd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,td={},ud={},vd=0,wd=1,xd=2,yd=3,zd=4,Ad=5,Bd=6,Cd=7,Dd=8;J("M",["MM",2],"Mo",function(){return this.month()+1}),J("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),J("MMMM",0,0,function(a){return this.localeData().months(this,a)}),A("month","M"),O("M",hd),O("MM",hd,dd),O("MMM",function(a,b){return b.monthsShortRegex(a)}),O("MMMM",function(a,b){return b.monthsRegex(a)}),S(["M","MM"],function(a,b){b[wd]=r(a)-1}),S(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[wd]=e:j(c).invalidMonth=a});var Ed=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,Fd="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Gd="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Hd=sd,Id=sd,Jd={};a.suppressDeprecationWarnings=!1;var Kd=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,Ld=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,Md=/Z|[+-]\d\d(?::?\d\d)?/,Nd=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Od=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Pd=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=fa("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),J("Y",0,0,function(){var a=this.year();return 9999>=a?""+a:"+"+a}),J(0,["YY",2],0,function(){return this.year()%100}),J(0,["YYYY",4],0,"year"),J(0,["YYYYY",5],0,"year"),J(0,["YYYYYY",6,!0],0,"year"),A("year","y"),O("Y",od),O("YY",hd,dd),O("YYYY",ld,fd),O("YYYYY",md,gd),O("YYYYYY",md,gd),S(["YYYYY","YYYYYY"],vd),S("YYYY",function(b,c){c[vd]=2===b.length?a.parseTwoDigitYear(b):r(b)}),S("YY",function(b,c){c[vd]=a.parseTwoDigitYear(b)}),S("Y",function(a,b){b[vd]=parseInt(a,10)}),a.parseTwoDigitYear=function(a){return r(a)+(r(a)>68?1900:2e3)};var Qd=E("FullYear",!1);a.ISO_8601=function(){};var Rd=fa("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=Ea.apply(null,arguments);return this.isValid()&&a.isValid()?this>a?this:a:l()}),Sd=fa("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=Ea.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:l()}),Td=function(){return Date.now?Date.now():+new Date};Ka("Z",":"),Ka("ZZ",""),O("Z",qd),O("ZZ",qd),S(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=La(qd,a)});var Ud=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var Vd=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,Wd=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
Za.fn=Ia.prototype;var Xd=bb(1,"add"),Yd=bb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var Zd=fa("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});J(0,["gg",2],0,function(){return this.weekYear()%100}),J(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Ib("gggg","weekYear"),Ib("ggggg","weekYear"),Ib("GGGG","isoWeekYear"),Ib("GGGGG","isoWeekYear"),A("weekYear","gg"),A("isoWeekYear","GG"),O("G",od),O("g",od),O("GG",hd,dd),O("gg",hd,dd),O("GGGG",ld,fd),O("gggg",ld,fd),O("GGGGG",md,gd),O("ggggg",md,gd),T(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=r(a)}),T(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),J("Q",0,"Qo","quarter"),A("quarter","Q"),O("Q",cd),S("Q",function(a,b){b[wd]=3*(r(a)-1)}),J("w",["ww",2],"wo","week"),J("W",["WW",2],"Wo","isoWeek"),A("week","w"),A("isoWeek","W"),O("w",hd),O("ww",hd,dd),O("W",hd),O("WW",hd,dd),T(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=r(a)});var $d={dow:0,doy:6};J("D",["DD",2],"Do","date"),A("date","D"),O("D",hd),O("DD",hd,dd),O("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),S(["D","DD"],xd),S("Do",function(a,b){b[xd]=r(a.match(hd)[0],10)});var _d=E("Date",!0);J("d",0,"do","day"),J("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),J("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),J("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),J("e",0,0,"weekday"),J("E",0,0,"isoWeekday"),A("day","d"),A("weekday","e"),A("isoWeekday","E"),O("d",hd),O("e",hd),O("E",hd),O("dd",sd),O("ddd",sd),O("dddd",sd),T(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);null!=e?b.d=e:j(c).invalidWeekday=a}),T(["d","e","E"],function(a,b,c,d){b[d]=r(a)});var ae="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),be="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),ce="Su_Mo_Tu_We_Th_Fr_Sa".split("_");J("DDD",["DDDD",3],"DDDo","dayOfYear"),A("dayOfYear","DDD"),O("DDD",kd),O("DDDD",ed),S(["DDD","DDDD"],function(a,b,c){c._dayOfYear=r(a)}),J("H",["HH",2],0,"hour"),J("h",["hh",2],0,cc),J("hmm",0,0,function(){return""+cc.apply(this)+I(this.minutes(),2)}),J("hmmss",0,0,function(){return""+cc.apply(this)+I(this.minutes(),2)+I(this.seconds(),2)}),J("Hmm",0,0,function(){return""+this.hours()+I(this.minutes(),2)}),J("Hmmss",0,0,function(){return""+this.hours()+I(this.minutes(),2)+I(this.seconds(),2)}),dc("a",!0),dc("A",!1),A("hour","h"),O("a",ec),O("A",ec),O("H",hd),O("h",hd),O("HH",hd,dd),O("hh",hd,dd),O("hmm",id),O("hmmss",jd),O("Hmm",id),O("Hmmss",jd),S(["H","HH"],yd),S(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),S(["h","hh"],function(a,b,c){b[yd]=r(a),j(c).bigHour=!0}),S("hmm",function(a,b,c){var d=a.length-2;b[yd]=r(a.substr(0,d)),b[zd]=r(a.substr(d)),j(c).bigHour=!0}),S("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[yd]=r(a.substr(0,d)),b[zd]=r(a.substr(d,2)),b[Ad]=r(a.substr(e)),j(c).bigHour=!0}),S("Hmm",function(a,b,c){var d=a.length-2;b[yd]=r(a.substr(0,d)),b[zd]=r(a.substr(d))}),S("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[yd]=r(a.substr(0,d)),b[zd]=r(a.substr(d,2)),b[Ad]=r(a.substr(e))});var de=/[ap]\.?m?\.?/i,ee=E("Hours",!0);J("m",["mm",2],0,"minute"),A("minute","m"),O("m",hd),O("mm",hd,dd),S(["m","mm"],zd);var fe=E("Minutes",!1);J("s",["ss",2],0,"second"),A("second","s"),O("s",hd),O("ss",hd,dd),S(["s","ss"],Ad);var ge=E("Seconds",!1);J("S",0,0,function(){return~~(this.millisecond()/100)}),J(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),J(0,["SSS",3],0,"millisecond"),J(0,["SSSS",4],0,function(){return 10*this.millisecond()}),J(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),J(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),J(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),J(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),J(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),A("millisecond","ms"),O("S",kd,cd),O("SS",kd,dd),O("SSS",kd,ed);var he;for(he="SSSS";he.length<=9;he+="S")O(he,nd);for(he="S";he.length<=9;he+="S")S(he,hc);var ie=E("Milliseconds",!1);J("z",0,0,"zoneAbbr"),J("zz",0,0,"zoneName");var je=o.prototype;je.add=Xd,je.calendar=db,je.clone=eb,je.diff=lb,je.endOf=xb,je.format=pb,je.from=qb,je.fromNow=rb,je.to=sb,je.toNow=tb,je.get=H,je.invalidAt=Gb,je.isAfter=fb,je.isBefore=gb,je.isBetween=hb,je.isSame=ib,je.isSameOrAfter=jb,je.isSameOrBefore=kb,je.isValid=Eb,je.lang=Zd,je.locale=ub,je.localeData=vb,je.max=Sd,je.min=Rd,je.parsingFlags=Fb,je.set=H,je.startOf=wb,je.subtract=Yd,je.toArray=Bb,je.toObject=Cb,je.toDate=Ab,je.toISOString=ob,je.toJSON=Db,je.toString=nb,je.unix=zb,je.valueOf=yb,je.creationData=Hb,je.year=Qd,je.isLeapYear=na,je.weekYear=Jb,je.isoWeekYear=Kb,je.quarter=je.quarters=Pb,je.month=$,je.daysInMonth=_,je.week=je.weeks=Tb,je.isoWeek=je.isoWeeks=Ub,je.weeksInYear=Mb,je.isoWeeksInYear=Lb,je.date=_d,je.day=je.days=$b,je.weekday=_b,je.isoWeekday=ac,je.dayOfYear=bc,je.hour=je.hours=ee,je.minute=je.minutes=fe,je.second=je.seconds=ge,je.millisecond=je.milliseconds=ie,je.utcOffset=Oa,je.utc=Qa,je.local=Ra,je.parseZone=Sa,je.hasAlignedHourOffset=Ta,je.isDST=Ua,je.isDSTShifted=Va,je.isLocal=Wa,je.isUtcOffset=Xa,je.isUtc=Ya,je.isUTC=Ya,je.zoneAbbr=ic,je.zoneName=jc,je.dates=fa("dates accessor is deprecated. Use date instead.",_d),je.months=fa("months accessor is deprecated. Use month instead",$),je.years=fa("years accessor is deprecated. Use year instead",Qd),je.zone=fa("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Pa);var ke=je,le={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},me={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},ne="Invalid date",oe="%d",pe=/\d{1,2}/,qe={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},re=t.prototype;re._calendar=le,re.calendar=mc,re._longDateFormat=me,re.longDateFormat=nc,re._invalidDate=ne,re.invalidDate=oc,re._ordinal=oe,re.ordinal=pc,re._ordinalParse=pe,re.preparse=qc,re.postformat=qc,re._relativeTime=qe,re.relativeTime=rc,re.pastFuture=sc,re.set=tc,re.months=W,re._months=Fd,re.monthsShort=X,re._monthsShort=Gd,re.monthsParse=Y,re._monthsRegex=Id,re.monthsRegex=ba,re._monthsShortRegex=Hd,re.monthsShortRegex=aa,re.week=Qb,re._week=$d,re.firstDayOfYear=Sb,re.firstDayOfWeek=Rb,re.weekdays=Wb,re._weekdays=ae,re.weekdaysMin=Yb,re._weekdaysMin=ce,re.weekdaysShort=Xb,re._weekdaysShort=be,re.weekdaysParse=Zb,re.isPM=fc,re._meridiemParse=de,re.meridiem=gc,x("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===r(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=fa("moment.lang is deprecated. Use moment.locale instead.",x),a.langData=fa("moment.langData is deprecated. Use moment.localeData instead.",z);var se=Math.abs,te=Lc("ms"),ue=Lc("s"),ve=Lc("m"),we=Lc("h"),xe=Lc("d"),ye=Lc("w"),ze=Lc("M"),Ae=Lc("y"),Be=Nc("milliseconds"),Ce=Nc("seconds"),De=Nc("minutes"),Ee=Nc("hours"),Fe=Nc("days"),Ge=Nc("months"),He=Nc("years"),Ie=Math.round,Je={s:45,m:45,h:22,d:26,M:11},Ke=Math.abs,Le=Ia.prototype;Le.abs=Bc,Le.add=Dc,Le.subtract=Ec,Le.as=Jc,Le.asMilliseconds=te,Le.asSeconds=ue,Le.asMinutes=ve,Le.asHours=we,Le.asDays=xe,Le.asWeeks=ye,Le.asMonths=ze,Le.asYears=Ae,Le.valueOf=Kc,Le._bubble=Gc,Le.get=Mc,Le.milliseconds=Be,Le.seconds=Ce,Le.minutes=De,Le.hours=Ee,Le.days=Fe,Le.weeks=Oc,Le.months=Ge,Le.years=He,Le.humanize=Sc,Le.toISOString=Tc,Le.toString=Tc,Le.toJSON=Tc,Le.locale=ub,Le.localeData=vb,Le.toIsoString=fa("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Tc),Le.lang=Zd,J("X",0,0,"unix"),J("x",0,0,"valueOf"),O("x",od),O("X",rd),S("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),S("x",function(a,b,c){c._d=new Date(r(a))}),a.version="2.11.2",b(Ea),a.fn=ke,a.min=Ga,a.max=Ha,a.now=Td,a.utc=h,a.unix=kc,a.months=wc,a.isDate=d,a.locale=x,a.invalid=l,a.duration=Za,a.isMoment=p,a.weekdays=yc,a.parseZone=lc,a.localeData=z,a.isDuration=Ja,a.monthsShort=xc,a.weekdaysMin=Ac,a.defineLocale=y,a.weekdaysShort=zc,a.normalizeUnits=B,a.relativeTimeThreshold=Rc,a.prototype=ke;var Me=a;return Me});
/**
 * Created by sadik on 2/17/16.
 */
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*! version : 4.17.37
 =========================================================
 bootstrap-datetimejs
 https://github.com/Eonasdan/bootstrap-datetimepicker
 Copyright (c) 2015 Jonathan Peterson
 =========================================================
 */
!function(a){"use strict";if("function"==typeof define&&define.amd)define(["jquery","moment"],a);else if("object"==typeof exports)a(require("jquery"),require("moment"));else{if("undefined"==typeof jQuery)throw"bootstrap-datetimepicker requires jQuery to be loaded first";if("undefined"==typeof moment)throw"bootstrap-datetimepicker requires Moment.js to be loaded first";a(jQuery,moment)}}(function(a,b){"use strict";if(!b)throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");var c=function(c,d){var e,f,g,h,i,j,k,l={},m=!0,n=!1,o=!1,p=0,q=[{clsName:"days",navFnc:"M",navStep:1},{clsName:"months",navFnc:"y",navStep:1},{clsName:"years",navFnc:"y",navStep:10},{clsName:"decades",navFnc:"y",navStep:100}],r=["days","months","years","decades"],s=["top","bottom","auto"],t=["left","right","auto"],u=["default","top","bottom"],v={up:38,38:"up",down:40,40:"down",left:37,37:"left",right:39,39:"right",tab:9,9:"tab",escape:27,27:"escape",enter:13,13:"enter",pageUp:33,33:"pageUp",pageDown:34,34:"pageDown",shift:16,16:"shift",control:17,17:"control",space:32,32:"space",t:84,84:"t","delete":46,46:"delete"},w={},x=function(a){var c,e,f,g,h,i=!1;return void 0!==b.tz&&void 0!==d.timeZone&&null!==d.timeZone&&""!==d.timeZone&&(i=!0),void 0===a||null===a?c=i?b().tz(d.timeZone).startOf("d"):b().startOf("d"):i?(e=b().tz(d.timeZone).utcOffset(),f=b(a,j,d.useStrict).utcOffset(),f!==e?(g=b().tz(d.timeZone).format("Z"),h=b(a,j,d.useStrict).format("YYYY-MM-DD[T]HH:mm:ss")+g,c=b(h,j,d.useStrict).tz(d.timeZone)):c=b(a,j,d.useStrict).tz(d.timeZone)):c=b(a,j,d.useStrict),c},y=function(a){if("string"!=typeof a||a.length>1)throw new TypeError("isEnabled expects a single character string parameter");switch(a){case"y":return-1!==i.indexOf("Y");case"M":return-1!==i.indexOf("M");case"d":return-1!==i.toLowerCase().indexOf("d");case"h":case"H":return-1!==i.toLowerCase().indexOf("h");case"m":return-1!==i.indexOf("m");case"s":return-1!==i.indexOf("s");default:return!1}},z=function(){return y("h")||y("m")||y("s")},A=function(){return y("y")||y("M")||y("d")},B=function(){var b=a("<thead>").append(a("<tr>").append(a("<th>").addClass("prev").attr("data-action","previous").append(a("<span>").addClass(d.icons.previous))).append(a("<th>").addClass("picker-switch").attr("data-action","pickerSwitch").attr("colspan",d.calendarWeeks?"6":"5")).append(a("<th>").addClass("next").attr("data-action","next").append(a("<span>").addClass(d.icons.next)))),c=a("<tbody>").append(a("<tr>").append(a("<td>").attr("colspan",d.calendarWeeks?"8":"7")));return[a("<div>").addClass("datepicker-days").append(a("<table>").addClass("table-condensed").append(b).append(a("<tbody>"))),a("<div>").addClass("datepicker-months").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())),a("<div>").addClass("datepicker-years").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())),a("<div>").addClass("datepicker-decades").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone()))]},C=function(){var b=a("<tr>"),c=a("<tr>"),e=a("<tr>");return y("h")&&(b.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.incrementHour}).addClass("btn").attr("data-action","incrementHours").append(a("<span>").addClass(d.icons.up)))),c.append(a("<td>").append(a("<span>").addClass("timepicker-hour").attr({"data-time-component":"hours",title:d.tooltips.pickHour}).attr("data-action","showHours"))),e.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.decrementHour}).addClass("btn").attr("data-action","decrementHours").append(a("<span>").addClass(d.icons.down))))),y("m")&&(y("h")&&(b.append(a("<td>").addClass("separator")),c.append(a("<td>").addClass("separator").html(":")),e.append(a("<td>").addClass("separator"))),b.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.incrementMinute}).addClass("btn").attr("data-action","incrementMinutes").append(a("<span>").addClass(d.icons.up)))),c.append(a("<td>").append(a("<span>").addClass("timepicker-minute").attr({"data-time-component":"minutes",title:d.tooltips.pickMinute}).attr("data-action","showMinutes"))),e.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.decrementMinute}).addClass("btn").attr("data-action","decrementMinutes").append(a("<span>").addClass(d.icons.down))))),y("s")&&(y("m")&&(b.append(a("<td>").addClass("separator")),c.append(a("<td>").addClass("separator").html(":")),e.append(a("<td>").addClass("separator"))),b.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.incrementSecond}).addClass("btn").attr("data-action","incrementSeconds").append(a("<span>").addClass(d.icons.up)))),c.append(a("<td>").append(a("<span>").addClass("timepicker-second").attr({"data-time-component":"seconds",title:d.tooltips.pickSecond}).attr("data-action","showSeconds"))),e.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.decrementSecond}).addClass("btn").attr("data-action","decrementSeconds").append(a("<span>").addClass(d.icons.down))))),h||(b.append(a("<td>").addClass("separator")),c.append(a("<td>").append(a("<button>").addClass("btn btn-primary").attr({"data-action":"togglePeriod",tabindex:"-1",title:d.tooltips.togglePeriod}))),e.append(a("<td>").addClass("separator"))),a("<div>").addClass("timepicker-picker").append(a("<table>").addClass("table-condensed").append([b,c,e]))},D=function(){var b=a("<div>").addClass("timepicker-hours").append(a("<table>").addClass("table-condensed")),c=a("<div>").addClass("timepicker-minutes").append(a("<table>").addClass("table-condensed")),d=a("<div>").addClass("timepicker-seconds").append(a("<table>").addClass("table-condensed")),e=[C()];return y("h")&&e.push(b),y("m")&&e.push(c),y("s")&&e.push(d),e},E=function(){var b=[];return d.showTodayButton&&b.push(a("<td>").append(a("<a>").attr({"data-action":"today",title:d.tooltips.today}).append(a("<span>").addClass(d.icons.today)))),!d.sideBySide&&A()&&z()&&b.push(a("<td>").append(a("<a>").attr({"data-action":"togglePicker",title:d.tooltips.selectTime}).append(a("<span>").addClass(d.icons.time)))),d.showClear&&b.push(a("<td>").append(a("<a>").attr({"data-action":"clear",title:d.tooltips.clear}).append(a("<span>").addClass(d.icons.clear)))),d.showClose&&b.push(a("<td>").append(a("<a>").attr({"data-action":"close",title:d.tooltips.close}).append(a("<span>").addClass(d.icons.close)))),a("<table>").addClass("table-condensed").append(a("<tbody>").append(a("<tr>").append(b)))},F=function(){var b=a("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),c=a("<div>").addClass("datepicker").append(B()),e=a("<div>").addClass("timepicker").append(D()),f=a("<ul>").addClass("list-unstyled"),g=a("<li>").addClass("picker-switch"+(d.collapse?" accordion-toggle":"")).append(E());return d.inline&&b.removeClass("dropdown-menu"),h&&b.addClass("usetwentyfour"),y("s")&&!h&&b.addClass("wider"),d.sideBySide&&A()&&z()?(b.addClass("timepicker-sbs"),"top"===d.toolbarPlacement&&b.append(g),b.append(a("<div>").addClass("row").append(c.addClass("col-md-6")).append(e.addClass("col-md-6"))),"bottom"===d.toolbarPlacement&&b.append(g),b):("top"===d.toolbarPlacement&&f.append(g),A()&&f.append(a("<li>").addClass(d.collapse&&z()?"collapse in":"").append(c)),"default"===d.toolbarPlacement&&f.append(g),z()&&f.append(a("<li>").addClass(d.collapse&&A()?"collapse":"").append(e)),"bottom"===d.toolbarPlacement&&f.append(g),b.append(f))},G=function(){var b,e={};return b=c.is("input")||d.inline?c.data():c.find("input").data(),b.dateOptions&&b.dateOptions instanceof Object&&(e=a.extend(!0,e,b.dateOptions)),a.each(d,function(a){var c="date"+a.charAt(0).toUpperCase()+a.slice(1);void 0!==b[c]&&(e[a]=b[c])}),e},H=function(){var b,e=(n||c).position(),f=(n||c).offset(),g=d.widgetPositioning.vertical,h=d.widgetPositioning.horizontal;if(d.widgetParent)b=d.widgetParent.append(o);else if(c.is("input"))b=c.after(o).parent();else{if(d.inline)return void(b=c.append(o));b=c,c.children().first().after(o)}if("auto"===g&&(g=f.top+1.5*o.height()>=a(window).height()+a(window).scrollTop()&&o.height()+c.outerHeight()<f.top?"top":"bottom"),"auto"===h&&(h=b.width()<f.left+o.outerWidth()/2&&f.left+o.outerWidth()>a(window).width()?"right":"left"),"top"===g?o.addClass("top").removeClass("bottom"):o.addClass("bottom").removeClass("top"),"right"===h?o.addClass("pull-right"):o.removeClass("pull-right"),"relative"!==b.css("position")&&(b=b.parents().filter(function(){return"relative"===a(this).css("position")}).first()),0===b.length)throw new Error("datetimepicker component should be placed within a relative positioned container");o.css({top:"top"===g?"auto":e.top+c.outerHeight(),bottom:"top"===g?e.top+c.outerHeight():"auto",left:"left"===h?b===c?0:e.left:"auto",right:"left"===h?"auto":b.outerWidth()-c.outerWidth()-(b===c?0:e.left)})},I=function(a){"dp.change"===a.type&&(a.date&&a.date.isSame(a.oldDate)||!a.date&&!a.oldDate)||c.trigger(a)},J=function(a){"y"===a&&(a="YYYY"),I({type:"dp.update",change:a,viewDate:f.clone()})},K=function(a){o&&(a&&(k=Math.max(p,Math.min(3,k+a))),o.find(".datepicker > div").hide().filter(".datepicker-"+q[k].clsName).show())},L=function(){var b=a("<tr>"),c=f.clone().startOf("w").startOf("d");for(d.calendarWeeks===!0&&b.append(a("<th>").addClass("cw").text("#"));c.isBefore(f.clone().endOf("w"));)b.append(a("<th>").addClass("dow").text(c.format("dd"))),c.add(1,"d");o.find(".datepicker-days thead").append(b)},M=function(a){return d.disabledDates[a.format("YYYY-MM-DD")]===!0},N=function(a){return d.enabledDates[a.format("YYYY-MM-DD")]===!0},O=function(a){return d.disabledHours[a.format("H")]===!0},P=function(a){return d.enabledHours[a.format("H")]===!0},Q=function(b,c){if(!b.isValid())return!1;if(d.disabledDates&&"d"===c&&M(b))return!1;if(d.enabledDates&&"d"===c&&!N(b))return!1;if(d.minDate&&b.isBefore(d.minDate,c))return!1;if(d.maxDate&&b.isAfter(d.maxDate,c))return!1;if(d.daysOfWeekDisabled&&"d"===c&&-1!==d.daysOfWeekDisabled.indexOf(b.day()))return!1;if(d.disabledHours&&("h"===c||"m"===c||"s"===c)&&O(b))return!1;if(d.enabledHours&&("h"===c||"m"===c||"s"===c)&&!P(b))return!1;if(d.disabledTimeIntervals&&("h"===c||"m"===c||"s"===c)){var e=!1;if(a.each(d.disabledTimeIntervals,function(){return b.isBetween(this[0],this[1])?(e=!0,!1):void 0}),e)return!1}return!0},R=function(){for(var b=[],c=f.clone().startOf("y").startOf("d");c.isSame(f,"y");)b.push(a("<span>").attr("data-action","selectMonth").addClass("month").text(c.format("MMM"))),c.add(1,"M");o.find(".datepicker-months td").empty().append(b)},S=function(){var b=o.find(".datepicker-months"),c=b.find("th"),g=b.find("tbody").find("span");c.eq(0).find("span").attr("title",d.tooltips.prevYear),c.eq(1).attr("title",d.tooltips.selectYear),c.eq(2).find("span").attr("title",d.tooltips.nextYear),b.find(".disabled").removeClass("disabled"),Q(f.clone().subtract(1,"y"),"y")||c.eq(0).addClass("disabled"),c.eq(1).text(f.year()),Q(f.clone().add(1,"y"),"y")||c.eq(2).addClass("disabled"),g.removeClass("active"),e.isSame(f,"y")&&!m&&g.eq(e.month()).addClass("active"),g.each(function(b){Q(f.clone().month(b),"M")||a(this).addClass("disabled")})},T=function(){var a=o.find(".datepicker-years"),b=a.find("th"),c=f.clone().subtract(5,"y"),g=f.clone().add(6,"y"),h="";for(b.eq(0).find("span").attr("title",d.tooltips.prevDecade),b.eq(1).attr("title",d.tooltips.selectDecade),b.eq(2).find("span").attr("title",d.tooltips.nextDecade),a.find(".disabled").removeClass("disabled"),d.minDate&&d.minDate.isAfter(c,"y")&&b.eq(0).addClass("disabled"),b.eq(1).text(c.year()+"-"+g.year()),d.maxDate&&d.maxDate.isBefore(g,"y")&&b.eq(2).addClass("disabled");!c.isAfter(g,"y");)h+='<span data-action="selectYear" class="year'+(c.isSame(e,"y")&&!m?" active":"")+(Q(c,"y")?"":" disabled")+'">'+c.year()+"</span>",c.add(1,"y");a.find("td").html(h)},U=function(){var a=o.find(".datepicker-decades"),c=a.find("th"),g=b({y:f.year()-f.year()%100-1}),h=g.clone().add(100,"y"),i=g.clone(),j="";for(c.eq(0).find("span").attr("title",d.tooltips.prevCentury),c.eq(2).find("span").attr("title",d.tooltips.nextCentury),a.find(".disabled").removeClass("disabled"),(g.isSame(b({y:1900}))||d.minDate&&d.minDate.isAfter(g,"y"))&&c.eq(0).addClass("disabled"),c.eq(1).text(g.year()+"-"+h.year()),(g.isSame(b({y:2e3}))||d.maxDate&&d.maxDate.isBefore(h,"y"))&&c.eq(2).addClass("disabled");!g.isAfter(h,"y");)j+='<span data-action="selectDecade" class="decade'+(g.isSame(e,"y")?" active":"")+(Q(g,"y")?"":" disabled")+'" data-selection="'+(g.year()+6)+'">'+(g.year()+1)+" - "+(g.year()+12)+"</span>",g.add(12,"y");j+="<span></span><span></span><span></span>",a.find("td").html(j),c.eq(1).text(i.year()+1+"-"+g.year())},V=function(){var b,c,g,h,i=o.find(".datepicker-days"),j=i.find("th"),k=[];if(A()){for(j.eq(0).find("span").attr("title",d.tooltips.prevMonth),j.eq(1).attr("title",d.tooltips.selectMonth),j.eq(2).find("span").attr("title",d.tooltips.nextMonth),i.find(".disabled").removeClass("disabled"),j.eq(1).text(f.format(d.dayViewHeaderFormat)),Q(f.clone().subtract(1,"M"),"M")||j.eq(0).addClass("disabled"),Q(f.clone().add(1,"M"),"M")||j.eq(2).addClass("disabled"),b=f.clone().startOf("M").startOf("w").startOf("d"),h=0;42>h;h++)0===b.weekday()&&(c=a("<tr>"),d.calendarWeeks&&c.append('<td class="cw">'+b.week()+"</td>"),k.push(c)),g="",b.isBefore(f,"M")&&(g+=" old"),b.isAfter(f,"M")&&(g+=" new"),b.isSame(e,"d")&&!m&&(g+=" active"),Q(b,"d")||(g+=" disabled"),b.isSame(x(),"d")&&(g+=" today"),(0===b.day()||6===b.day())&&(g+=" weekend"),c.append('<td data-action="selectDay" data-day="'+b.format("L")+'" class="day'+g+'">'+b.date()+"</td>"),b.add(1,"d");i.find("tbody").empty().append(k),S(),T(),U()}},W=function(){var b=o.find(".timepicker-hours table"),c=f.clone().startOf("d"),d=[],e=a("<tr>");for(f.hour()>11&&!h&&c.hour(12);c.isSame(f,"d")&&(h||f.hour()<12&&c.hour()<12||f.hour()>11);)c.hour()%4===0&&(e=a("<tr>"),d.push(e)),e.append('<td data-action="selectHour" class="hour'+(Q(c,"h")?"":" disabled")+'">'+c.format(h?"HH":"hh")+"</td>"),c.add(1,"h");b.empty().append(d)},X=function(){for(var b=o.find(".timepicker-minutes table"),c=f.clone().startOf("h"),e=[],g=a("<tr>"),h=1===d.stepping?5:d.stepping;f.isSame(c,"h");)c.minute()%(4*h)===0&&(g=a("<tr>"),e.push(g)),g.append('<td data-action="selectMinute" class="minute'+(Q(c,"m")?"":" disabled")+'">'+c.format("mm")+"</td>"),c.add(h,"m");b.empty().append(e)},Y=function(){for(var b=o.find(".timepicker-seconds table"),c=f.clone().startOf("m"),d=[],e=a("<tr>");f.isSame(c,"m");)c.second()%20===0&&(e=a("<tr>"),d.push(e)),e.append('<td data-action="selectSecond" class="second'+(Q(c,"s")?"":" disabled")+'">'+c.format("ss")+"</td>"),c.add(5,"s");b.empty().append(d)},Z=function(){var a,b,c=o.find(".timepicker span[data-time-component]");h||(a=o.find(".timepicker [data-action=togglePeriod]"),b=e.clone().add(e.hours()>=12?-12:12,"h"),a.text(e.format("A")),Q(b,"h")?a.removeClass("disabled"):a.addClass("disabled")),c.filter("[data-time-component=hours]").text(e.format(h?"HH":"hh")),c.filter("[data-time-component=minutes]").text(e.format("mm")),c.filter("[data-time-component=seconds]").text(e.format("ss")),W(),X(),Y()},$=function(){o&&(V(),Z())},_=function(a){var b=m?null:e;return a?(a=a.clone().locale(d.locale),1!==d.stepping&&a.minutes(Math.round(a.minutes()/d.stepping)*d.stepping%60).seconds(0),void(Q(a)?(e=a,f=e.clone(),g.val(e.format(i)),c.data("date",e.format(i)),m=!1,$(),I({type:"dp.change",date:e.clone(),oldDate:b})):(d.keepInvalid||g.val(m?"":e.format(i)),I({type:"dp.error",date:a})))):(m=!0,g.val(""),c.data("date",""),I({type:"dp.change",date:!1,oldDate:b}),void $())},aa=function(){var b=!1;return o?(o.find(".collapse").each(function(){var c=a(this).data("collapse");return c&&c.transitioning?(b=!0,!1):!0}),b?l:(n&&n.hasClass("btn")&&n.toggleClass("active"),o.hide(),a(window).off("resize",H),o.off("click","[data-action]"),o.off("mousedown",!1),o.remove(),o=!1,I({type:"dp.hide",date:e.clone()}),g.blur(),l)):l},ba=function(){_(null)},ca={next:function(){var a=q[k].navFnc;f.add(q[k].navStep,a),V(),J(a)},previous:function(){var a=q[k].navFnc;f.subtract(q[k].navStep,a),V(),J(a)},pickerSwitch:function(){K(1)},selectMonth:function(b){var c=a(b.target).closest("tbody").find("span").index(a(b.target));f.month(c),k===p?(_(e.clone().year(f.year()).month(f.month())),d.inline||aa()):(K(-1),V()),J("M")},selectYear:function(b){var c=parseInt(a(b.target).text(),10)||0;f.year(c),k===p?(_(e.clone().year(f.year())),d.inline||aa()):(K(-1),V()),J("YYYY")},selectDecade:function(b){var c=parseInt(a(b.target).data("selection"),10)||0;f.year(c),k===p?(_(e.clone().year(f.year())),d.inline||aa()):(K(-1),V()),J("YYYY")},selectDay:function(b){var c=f.clone();a(b.target).is(".old")&&c.subtract(1,"M"),a(b.target).is(".new")&&c.add(1,"M"),_(c.date(parseInt(a(b.target).text(),10))),z()||d.keepOpen||d.inline||aa()},incrementHours:function(){var a=e.clone().add(1,"h");Q(a,"h")&&_(a)},incrementMinutes:function(){var a=e.clone().add(d.stepping,"m");Q(a,"m")&&_(a)},incrementSeconds:function(){var a=e.clone().add(1,"s");Q(a,"s")&&_(a)},decrementHours:function(){var a=e.clone().subtract(1,"h");Q(a,"h")&&_(a)},decrementMinutes:function(){var a=e.clone().subtract(d.stepping,"m");Q(a,"m")&&_(a)},decrementSeconds:function(){var a=e.clone().subtract(1,"s");Q(a,"s")&&_(a)},togglePeriod:function(){_(e.clone().add(e.hours()>=12?-12:12,"h"))},togglePicker:function(b){var c,e=a(b.target),f=e.closest("ul"),g=f.find(".in"),h=f.find(".collapse:not(.in)");if(g&&g.length){if(c=g.data("collapse"),c&&c.transitioning)return;g.collapse?(g.collapse("hide"),h.collapse("show")):(g.removeClass("in"),h.addClass("in")),e.is("span")?e.toggleClass(d.icons.time+" "+d.icons.date):e.find("span").toggleClass(d.icons.time+" "+d.icons.date)}},showPicker:function(){o.find(".timepicker > div:not(.timepicker-picker)").hide(),o.find(".timepicker .timepicker-picker").show()},showHours:function(){o.find(".timepicker .timepicker-picker").hide(),o.find(".timepicker .timepicker-hours").show()},showMinutes:function(){o.find(".timepicker .timepicker-picker").hide(),o.find(".timepicker .timepicker-minutes").show()},showSeconds:function(){o.find(".timepicker .timepicker-picker").hide(),o.find(".timepicker .timepicker-seconds").show()},selectHour:function(b){var c=parseInt(a(b.target).text(),10);h||(e.hours()>=12?12!==c&&(c+=12):12===c&&(c=0)),_(e.clone().hours(c)),ca.showPicker.call(l)},selectMinute:function(b){_(e.clone().minutes(parseInt(a(b.target).text(),10))),ca.showPicker.call(l)},selectSecond:function(b){_(e.clone().seconds(parseInt(a(b.target).text(),10))),ca.showPicker.call(l)},clear:ba,today:function(){var a=x();Q(a,"d")&&_(a)},close:aa},da=function(b){return a(b.currentTarget).is(".disabled")?!1:(ca[a(b.currentTarget).data("action")].apply(l,arguments),!1)},ea=function(){var b,c={year:function(a){return a.month(0).date(1).hours(0).seconds(0).minutes(0)},month:function(a){return a.date(1).hours(0).seconds(0).minutes(0)},day:function(a){return a.hours(0).seconds(0).minutes(0)},hour:function(a){return a.seconds(0).minutes(0)},minute:function(a){return a.seconds(0)}};return g.prop("disabled")||!d.ignoreReadonly&&g.prop("readonly")||o?l:(void 0!==g.val()&&0!==g.val().trim().length?_(ga(g.val().trim())):d.useCurrent&&m&&(g.is("input")&&0===g.val().trim().length||d.inline)&&(b=x(),"string"==typeof d.useCurrent&&(b=c[d.useCurrent](b)),_(b)),o=F(),L(),R(),o.find(".timepicker-hours").hide(),o.find(".timepicker-minutes").hide(),o.find(".timepicker-seconds").hide(),$(),K(),a(window).on("resize",H),o.on("click","[data-action]",da),o.on("mousedown",!1),n&&n.hasClass("btn")&&n.toggleClass("active"),o.show(),H(),d.focusOnShow&&!g.is(":focus")&&g.focus(),I({type:"dp.show"}),l)},fa=function(){return o?aa():ea()},ga=function(a){return a=void 0===d.parseInputDate?b.isMoment(a)||a instanceof Date?b(a):x(a):d.parseInputDate(a),a.locale(d.locale),a},ha=function(a){var b,c,e,f,g=null,h=[],i={},j=a.which,k="p";w[j]=k;for(b in w)w.hasOwnProperty(b)&&w[b]===k&&(h.push(b),parseInt(b,10)!==j&&(i[b]=!0));for(b in d.keyBinds)if(d.keyBinds.hasOwnProperty(b)&&"function"==typeof d.keyBinds[b]&&(e=b.split(" "),e.length===h.length&&v[j]===e[e.length-1])){for(f=!0,c=e.length-2;c>=0;c--)if(!(v[e[c]]in i)){f=!1;break}if(f){g=d.keyBinds[b];break}}g&&(g.call(l,o),a.stopPropagation(),a.preventDefault())},ia=function(a){w[a.which]="r",a.stopPropagation(),a.preventDefault()},ja=function(b){var c=a(b.target).val().trim(),d=c?ga(c):null;return _(d),b.stopImmediatePropagation(),!1},ka=function(){g.on({change:ja,blur:d.debug?"":aa,keydown:ha,keyup:ia,focus:d.allowInputToggle?ea:""}),c.is("input")?g.on({focus:ea}):n&&(n.on("click",fa),n.on("mousedown",!1))},la=function(){g.off({change:ja,blur:blur,keydown:ha,keyup:ia,focus:d.allowInputToggle?aa:""}),c.is("input")?g.off({focus:ea}):n&&(n.off("click",fa),n.off("mousedown",!1))},ma=function(b){var c={};return a.each(b,function(){var a=ga(this);a.isValid()&&(c[a.format("YYYY-MM-DD")]=!0)}),Object.keys(c).length?c:!1},na=function(b){var c={};return a.each(b,function(){c[this]=!0}),Object.keys(c).length?c:!1},oa=function(){var a=d.format||"L LT";i=a.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(a){var b=e.localeData().longDateFormat(a)||a;return b.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(a){return e.localeData().longDateFormat(a)||a})}),j=d.extraFormats?d.extraFormats.slice():[],j.indexOf(a)<0&&j.indexOf(i)<0&&j.push(i),h=i.toLowerCase().indexOf("a")<1&&i.replace(/\[.*?\]/g,"").indexOf("h")<1,y("y")&&(p=2),y("M")&&(p=1),y("d")&&(p=0),k=Math.max(p,k),m||_(e)};if(l.destroy=function(){aa(),la(),c.removeData("DateTimePicker"),c.removeData("date")},l.toggle=fa,l.show=ea,l.hide=aa,l.disable=function(){return aa(),n&&n.hasClass("btn")&&n.addClass("disabled"),g.prop("disabled",!0),l},l.enable=function(){return n&&n.hasClass("btn")&&n.removeClass("disabled"),g.prop("disabled",!1),l},l.ignoreReadonly=function(a){if(0===arguments.length)return d.ignoreReadonly;if("boolean"!=typeof a)throw new TypeError("ignoreReadonly () expects a boolean parameter");return d.ignoreReadonly=a,l},l.options=function(b){if(0===arguments.length)return a.extend(!0,{},d);if(!(b instanceof Object))throw new TypeError("options() options parameter should be an object");return a.extend(!0,d,b),a.each(d,function(a,b){if(void 0===l[a])throw new TypeError("option "+a+" is not recognized!");l[a](b)}),l},l.date=function(a){if(0===arguments.length)return m?null:e.clone();if(!(null===a||"string"==typeof a||b.isMoment(a)||a instanceof Date))throw new TypeError("date() parameter must be one of [null, string, moment or Date]");return _(null===a?null:ga(a)),l},l.format=function(a){if(0===arguments.length)return d.format;if("string"!=typeof a&&("boolean"!=typeof a||a!==!1))throw new TypeError("format() expects a sting or boolean:false parameter "+a);return d.format=a,i&&oa(),l},l.timeZone=function(a){return 0===arguments.length?d.timeZone:(d.timeZone=a,l)},l.dayViewHeaderFormat=function(a){if(0===arguments.length)return d.dayViewHeaderFormat;if("string"!=typeof a)throw new TypeError("dayViewHeaderFormat() expects a string parameter");return d.dayViewHeaderFormat=a,l},l.extraFormats=function(a){if(0===arguments.length)return d.extraFormats;if(a!==!1&&!(a instanceof Array))throw new TypeError("extraFormats() expects an array or false parameter");return d.extraFormats=a,j&&oa(),l},l.disabledDates=function(b){if(0===arguments.length)return d.disabledDates?a.extend({},d.disabledDates):d.disabledDates;if(!b)return d.disabledDates=!1,$(),l;if(!(b instanceof Array))throw new TypeError("disabledDates() expects an array parameter");return d.disabledDates=ma(b),d.enabledDates=!1,$(),l},l.enabledDates=function(b){if(0===arguments.length)return d.enabledDates?a.extend({},d.enabledDates):d.enabledDates;if(!b)return d.enabledDates=!1,$(),l;if(!(b instanceof Array))throw new TypeError("enabledDates() expects an array parameter");return d.enabledDates=ma(b),d.disabledDates=!1,$(),l},l.daysOfWeekDisabled=function(a){if(0===arguments.length)return d.daysOfWeekDisabled.splice(0);if("boolean"==typeof a&&!a)return d.daysOfWeekDisabled=!1,$(),l;if(!(a instanceof Array))throw new TypeError("daysOfWeekDisabled() expects an array parameter");if(d.daysOfWeekDisabled=a.reduce(function(a,b){return b=parseInt(b,10),b>6||0>b||isNaN(b)?a:(-1===a.indexOf(b)&&a.push(b),a)},[]).sort(),d.useCurrent&&!d.keepInvalid){for(var b=0;!Q(e,"d");){if(e.add(1,"d"),7===b)throw"Tried 7 times to find a valid date";b++}_(e)}return $(),l},l.maxDate=function(a){if(0===arguments.length)return d.maxDate?d.maxDate.clone():d.maxDate;if("boolean"==typeof a&&a===!1)return d.maxDate=!1,$(),l;"string"==typeof a&&("now"===a||"moment"===a)&&(a=x());var b=ga(a);if(!b.isValid())throw new TypeError("maxDate() Could not parse date parameter: "+a);if(d.minDate&&b.isBefore(d.minDate))throw new TypeError("maxDate() date parameter is before options.minDate: "+b.format(i));return d.maxDate=b,d.useCurrent&&!d.keepInvalid&&e.isAfter(a)&&_(d.maxDate),f.isAfter(b)&&(f=b.clone().subtract(d.stepping,"m")),$(),l},l.minDate=function(a){if(0===arguments.length)return d.minDate?d.minDate.clone():d.minDate;if("boolean"==typeof a&&a===!1)return d.minDate=!1,$(),l;"string"==typeof a&&("now"===a||"moment"===a)&&(a=x());var b=ga(a);if(!b.isValid())throw new TypeError("minDate() Could not parse date parameter: "+a);if(d.maxDate&&b.isAfter(d.maxDate))throw new TypeError("minDate() date parameter is after options.maxDate: "+b.format(i));return d.minDate=b,d.useCurrent&&!d.keepInvalid&&e.isBefore(a)&&_(d.minDate),f.isBefore(b)&&(f=b.clone().add(d.stepping,"m")),$(),l},l.defaultDate=function(a){if(0===arguments.length)return d.defaultDate?d.defaultDate.clone():d.defaultDate;if(!a)return d.defaultDate=!1,l;"string"==typeof a&&("now"===a||"moment"===a)&&(a=x());var b=ga(a);if(!b.isValid())throw new TypeError("defaultDate() Could not parse date parameter: "+a);if(!Q(b))throw new TypeError("defaultDate() date passed is invalid according to component setup validations");return d.defaultDate=b,(d.defaultDate&&d.inline||""===g.val().trim())&&_(d.defaultDate),l},l.locale=function(a){if(0===arguments.length)return d.locale;if(!b.localeData(a))throw new TypeError("locale() locale "+a+" is not loaded from moment locales!");return d.locale=a,e.locale(d.locale),f.locale(d.locale),i&&oa(),o&&(aa(),ea()),l},l.stepping=function(a){return 0===arguments.length?d.stepping:(a=parseInt(a,10),(isNaN(a)||1>a)&&(a=1),d.stepping=a,l)},l.useCurrent=function(a){var b=["year","month","day","hour","minute"];if(0===arguments.length)return d.useCurrent;if("boolean"!=typeof a&&"string"!=typeof a)throw new TypeError("useCurrent() expects a boolean or string parameter");if("string"==typeof a&&-1===b.indexOf(a.toLowerCase()))throw new TypeError("useCurrent() expects a string parameter of "+b.join(", "));return d.useCurrent=a,l},l.collapse=function(a){if(0===arguments.length)return d.collapse;if("boolean"!=typeof a)throw new TypeError("collapse() expects a boolean parameter");return d.collapse===a?l:(d.collapse=a,o&&(aa(),ea()),l)},l.icons=function(b){if(0===arguments.length)return a.extend({},d.icons);if(!(b instanceof Object))throw new TypeError("icons() expects parameter to be an Object");return a.extend(d.icons,b),o&&(aa(),ea()),l},l.tooltips=function(b){if(0===arguments.length)return a.extend({},d.tooltips);if(!(b instanceof Object))throw new TypeError("tooltips() expects parameter to be an Object");return a.extend(d.tooltips,b),o&&(aa(),ea()),l},l.useStrict=function(a){if(0===arguments.length)return d.useStrict;if("boolean"!=typeof a)throw new TypeError("useStrict() expects a boolean parameter");return d.useStrict=a,l},l.sideBySide=function(a){if(0===arguments.length)return d.sideBySide;if("boolean"!=typeof a)throw new TypeError("sideBySide() expects a boolean parameter");return d.sideBySide=a,o&&(aa(),ea()),l},l.viewMode=function(a){if(0===arguments.length)return d.viewMode;if("string"!=typeof a)throw new TypeError("viewMode() expects a string parameter");if(-1===r.indexOf(a))throw new TypeError("viewMode() parameter must be one of ("+r.join(", ")+") value");return d.viewMode=a,k=Math.max(r.indexOf(a),p),K(),l},l.toolbarPlacement=function(a){if(0===arguments.length)return d.toolbarPlacement;if("string"!=typeof a)throw new TypeError("toolbarPlacement() expects a string parameter");if(-1===u.indexOf(a))throw new TypeError("toolbarPlacement() parameter must be one of ("+u.join(", ")+") value");return d.toolbarPlacement=a,o&&(aa(),ea()),l},l.widgetPositioning=function(b){if(0===arguments.length)return a.extend({},d.widgetPositioning);if("[object Object]"!=={}.toString.call(b))throw new TypeError("widgetPositioning() expects an object variable");if(b.horizontal){if("string"!=typeof b.horizontal)throw new TypeError("widgetPositioning() horizontal variable must be a string");if(b.horizontal=b.horizontal.toLowerCase(),-1===t.indexOf(b.horizontal))throw new TypeError("widgetPositioning() expects horizontal parameter to be one of ("+t.join(", ")+")");d.widgetPositioning.horizontal=b.horizontal}if(b.vertical){if("string"!=typeof b.vertical)throw new TypeError("widgetPositioning() vertical variable must be a string");if(b.vertical=b.vertical.toLowerCase(),-1===s.indexOf(b.vertical))throw new TypeError("widgetPositioning() expects vertical parameter to be one of ("+s.join(", ")+")");d.widgetPositioning.vertical=b.vertical}return $(),l},l.calendarWeeks=function(a){if(0===arguments.length)return d.calendarWeeks;if("boolean"!=typeof a)throw new TypeError("calendarWeeks() expects parameter to be a boolean value");return d.calendarWeeks=a,$(),l},l.showTodayButton=function(a){if(0===arguments.length)return d.showTodayButton;if("boolean"!=typeof a)throw new TypeError("showTodayButton() expects a boolean parameter");return d.showTodayButton=a,o&&(aa(),ea()),l},l.showClear=function(a){if(0===arguments.length)return d.showClear;if("boolean"!=typeof a)throw new TypeError("showClear() expects a boolean parameter");return d.showClear=a,o&&(aa(),ea()),l},l.widgetParent=function(b){if(0===arguments.length)return d.widgetParent;if("string"==typeof b&&(b=a(b)),null!==b&&"string"!=typeof b&&!(b instanceof a))throw new TypeError("widgetParent() expects a string or a jQuery object parameter");return d.widgetParent=b,o&&(aa(),ea()),l},l.keepOpen=function(a){if(0===arguments.length)return d.keepOpen;if("boolean"!=typeof a)throw new TypeError("keepOpen() expects a boolean parameter");return d.keepOpen=a,l},l.focusOnShow=function(a){if(0===arguments.length)return d.focusOnShow;if("boolean"!=typeof a)throw new TypeError("focusOnShow() expects a boolean parameter");return d.focusOnShow=a,l},l.inline=function(a){if(0===arguments.length)return d.inline;if("boolean"!=typeof a)throw new TypeError("inline() expects a boolean parameter");return d.inline=a,l},l.clear=function(){return ba(),l},l.keyBinds=function(a){return d.keyBinds=a,l},l.getMoment=function(a){return x(a)},l.debug=function(a){if("boolean"!=typeof a)throw new TypeError("debug() expects a boolean parameter");return d.debug=a,l},l.allowInputToggle=function(a){if(0===arguments.length)return d.allowInputToggle;if("boolean"!=typeof a)throw new TypeError("allowInputToggle() expects a boolean parameter");return d.allowInputToggle=a,l},l.showClose=function(a){if(0===arguments.length)return d.showClose;if("boolean"!=typeof a)throw new TypeError("showClose() expects a boolean parameter");return d.showClose=a,l},l.keepInvalid=function(a){if(0===arguments.length)return d.keepInvalid;if("boolean"!=typeof a)throw new TypeError("keepInvalid() expects a boolean parameter");return d.keepInvalid=a,l},l.datepickerInput=function(a){if(0===arguments.length)return d.datepickerInput;if("string"!=typeof a)throw new TypeError("datepickerInput() expects a string parameter");return d.datepickerInput=a,l},l.parseInputDate=function(a){if(0===arguments.length)return d.parseInputDate;
if("function"!=typeof a)throw new TypeError("parseInputDate() sholud be as function");return d.parseInputDate=a,l},l.disabledTimeIntervals=function(b){if(0===arguments.length)return d.disabledTimeIntervals?a.extend({},d.disabledTimeIntervals):d.disabledTimeIntervals;if(!b)return d.disabledTimeIntervals=!1,$(),l;if(!(b instanceof Array))throw new TypeError("disabledTimeIntervals() expects an array parameter");return d.disabledTimeIntervals=b,$(),l},l.disabledHours=function(b){if(0===arguments.length)return d.disabledHours?a.extend({},d.disabledHours):d.disabledHours;if(!b)return d.disabledHours=!1,$(),l;if(!(b instanceof Array))throw new TypeError("disabledHours() expects an array parameter");if(d.disabledHours=na(b),d.enabledHours=!1,d.useCurrent&&!d.keepInvalid){for(var c=0;!Q(e,"h");){if(e.add(1,"h"),24===c)throw"Tried 24 times to find a valid date";c++}_(e)}return $(),l},l.enabledHours=function(b){if(0===arguments.length)return d.enabledHours?a.extend({},d.enabledHours):d.enabledHours;if(!b)return d.enabledHours=!1,$(),l;if(!(b instanceof Array))throw new TypeError("enabledHours() expects an array parameter");if(d.enabledHours=na(b),d.disabledHours=!1,d.useCurrent&&!d.keepInvalid){for(var c=0;!Q(e,"h");){if(e.add(1,"h"),24===c)throw"Tried 24 times to find a valid date";c++}_(e)}return $(),l},l.viewDate=function(a){if(0===arguments.length)return f.clone();if(!a)return f=e.clone(),l;if(!("string"==typeof a||b.isMoment(a)||a instanceof Date))throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");return f=ga(a),J(),l},c.is("input"))g=c;else if(g=c.find(d.datepickerInput),0===g.size())g=c.find("input");else if(!g.is("input"))throw new Error('CSS class "'+d.datepickerInput+'" cannot be applied to non input element');if(c.hasClass("input-group")&&(n=0===c.find(".datepickerbutton").size()?c.find(".input-group-addon"):c.find(".datepickerbutton")),!d.inline&&!g.is("input"))throw new Error("Could not initialize DateTimePicker without an input element");return e=x(),f=e.clone(),a.extend(!0,d,G()),l.options(d),oa(),ka(),g.prop("disabled")&&l.disable(),g.is("input")&&0!==g.val().trim().length?_(ga(g.val().trim())):d.defaultDate&&void 0===g.attr("placeholder")&&_(d.defaultDate),d.inline&&ea(),l};a.fn.datetimepicker=function(b){return this.each(function(){var d=a(this);d.data("DateTimePicker")||(b=a.extend(!0,{},a.fn.datetimepicker.defaults,b),d.data("DateTimePicker",c(d,b)))})},a.fn.datetimepicker.defaults={timeZone:"Etc/UTC",format:!1,dayViewHeaderFormat:"MMMM YYYY",extraFormats:!1,stepping:1,minDate:!1,maxDate:!1,useCurrent:!0,collapse:!0,locale:b.locale(),defaultDate:!1,disabledDates:!1,enabledDates:!1,icons:{time:"glyphicon glyphicon-time",date:"glyphicon glyphicon-calendar",up:"glyphicon glyphicon-chevron-up",down:"glyphicon glyphicon-chevron-down",previous:"glyphicon glyphicon-chevron-left",next:"glyphicon glyphicon-chevron-right",today:"glyphicon glyphicon-screenshot",clear:"glyphicon glyphicon-trash",close:"glyphicon glyphicon-remove"},tooltips:{today:"Go to today",clear:"Clear selection",close:"Close the picker",selectMonth:"Select Month",prevMonth:"Previous Month",nextMonth:"Next Month",selectYear:"Select Year",prevYear:"Previous Year",nextYear:"Next Year",selectDecade:"Select Decade",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevCentury:"Previous Century",nextCentury:"Next Century",pickHour:"Pick Hour",incrementHour:"Increment Hour",decrementHour:"Decrement Hour",pickMinute:"Pick Minute",incrementMinute:"Increment Minute",decrementMinute:"Decrement Minute",pickSecond:"Pick Second",incrementSecond:"Increment Second",decrementSecond:"Decrement Second",togglePeriod:"Toggle Period",selectTime:"Select Time"},useStrict:!1,sideBySide:!1,daysOfWeekDisabled:!1,calendarWeeks:!1,viewMode:"days",toolbarPlacement:"default",showTodayButton:!1,showClear:!1,showClose:!1,widgetPositioning:{horizontal:"auto",vertical:"auto"},widgetParent:null,ignoreReadonly:!1,keepOpen:!1,focusOnShow:!0,inline:!1,keepInvalid:!1,datepickerInput:".datepickerinput",keyBinds:{up:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().subtract(7,"d")):this.date(b.clone().add(this.stepping(),"m"))}},down:function(a){if(!a)return void this.show();var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().add(7,"d")):this.date(b.clone().subtract(this.stepping(),"m"))},"control up":function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().subtract(1,"y")):this.date(b.clone().add(1,"h"))}},"control down":function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().add(1,"y")):this.date(b.clone().subtract(1,"h"))}},left:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().subtract(1,"d"))}},right:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().add(1,"d"))}},pageUp:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().subtract(1,"M"))}},pageDown:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().add(1,"M"))}},enter:function(){this.hide()},escape:function(){this.hide()},"control space":function(a){a.find(".timepicker").is(":visible")&&a.find('.btn[data-action="togglePeriod"]').click()},t:function(){this.date(this.getMoment())},"delete":function(){this.clear()}},debug:!1,allowInputToggle:!1,disabledTimeIntervals:!1,disabledHours:!1,enabledHours:!1,viewDate:!1}});
/*! DataTables 1.10.11
 * Â©2008-2015 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     DataTables
 * @description Paginate, search and order HTML tables
 * @version     1.10.11
 * @file        jquery.dataTables.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2008-2015 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

/*jslint evil: true, undef: true, browser: true */
/*globals $,require,jQuery,define,_selector_run,_selector_opts,_selector_first,_selector_row_indexes,_ext,_Api,_api_register,_api_registerPlural,_re_new_lines,_re_html,_re_formatted_numeric,_re_escape_regex,_empty,_intVal,_numToDecimal,_isNumber,_isHtml,_htmlNumeric,_pluck,_pluck_order,_range,_stripHtml,_unique,_fnBuildAjax,_fnAjaxUpdate,_fnAjaxParameters,_fnAjaxUpdateDraw,_fnAjaxDataSrc,_fnAddColumn,_fnColumnOptions,_fnAdjustColumnSizing,_fnVisibleToColumnIndex,_fnColumnIndexToVisible,_fnVisbleColumns,_fnGetColumns,_fnColumnTypes,_fnApplyColumnDefs,_fnHungarianMap,_fnCamelToHungarian,_fnLanguageCompat,_fnBrowserDetect,_fnAddData,_fnAddTr,_fnNodeToDataIndex,_fnNodeToColumnIndex,_fnGetCellData,_fnSetCellData,_fnSplitObjNotation,_fnGetObjectDataFn,_fnSetObjectDataFn,_fnGetDataMaster,_fnClearTable,_fnDeleteIndex,_fnInvalidate,_fnGetRowElements,_fnCreateTr,_fnBuildHead,_fnDrawHead,_fnDraw,_fnReDraw,_fnAddOptionsHtml,_fnDetectHeader,_fnGetUniqueThs,_fnFeatureHtmlFilter,_fnFilterComplete,_fnFilterCustom,_fnFilterColumn,_fnFilter,_fnFilterCreateSearch,_fnEscapeRegex,_fnFilterData,_fnFeatureHtmlInfo,_fnUpdateInfo,_fnInfoMacros,_fnInitialise,_fnInitComplete,_fnLengthChange,_fnFeatureHtmlLength,_fnFeatureHtmlPaginate,_fnPageChange,_fnFeatureHtmlProcessing,_fnProcessingDisplay,_fnFeatureHtmlTable,_fnScrollDraw,_fnApplyToChildren,_fnCalculateColumnWidths,_fnThrottle,_fnConvertToWidth,_fnGetWidestNode,_fnGetMaxLenString,_fnStringToCss,_fnSortFlatten,_fnSort,_fnSortAria,_fnSortListener,_fnSortAttachListener,_fnSortingClasses,_fnSortData,_fnSaveState,_fnLoadState,_fnSettingsFromNode,_fnLog,_fnMap,_fnBindAction,_fnCallbackReg,_fnCallbackFire,_fnLengthOverflow,_fnRenderer,_fnDataSource,_fnRowAttributes*/

(function( factory ) {
    "use strict";

    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( ['jquery'], function ( $ ) {
            return factory( $, window, document );
        } );
    }
    else if ( typeof exports === 'object' ) {
        // CommonJS
        module.exports = function (root, $) {
            if ( ! root ) {
                // CommonJS environments without a window global must pass a
                // root. This will give an error otherwise
                root = window;
            }

            if ( ! $ ) {
                $ = typeof window !== 'undefined' ? // jQuery's factory checks for a global window
                    require('jquery') :
                    require('jquery')( root );
            }

            return factory( $, root, root.document );
        };
    }
    else {
        // Browser
        factory( jQuery, window, document );
    }
}
(function( $, window, document, undefined ) {
    "use strict";

    /**
     * DataTables is a plug-in for the jQuery Javascript library. It is a highly
     * flexible tool, based upon the foundations of progressive enhancement,
     * which will add advanced interaction controls to any HTML table. For a
     * full list of features please refer to
     * [DataTables.net](href="http://datatables.net).
     *
     * Note that the `DataTable` object is not a global variable but is aliased
     * to `jQuery.fn.DataTable` and `jQuery.fn.dataTable` through which it may
     * be  accessed.
     *
     *  @class
     *  @param {object} [init={}] Configuration object for DataTables. Options
     *    are defined by {@link DataTable.defaults}
     *  @requires jQuery 1.7+
     *
     *  @example
     *    // Basic initialisation
     *    $(document).ready( function {
	 *      $('#example').dataTable();
	 *    } );
     *
     *  @example
     *    // Initialisation with configuration options - in this case, disable
     *    // pagination and sorting.
     *    $(document).ready( function {
	 *      $('#example').dataTable( {
	 *        "paginate": false,
	 *        "sort": false
	 *      } );
	 *    } );
     */
    var DataTable;


    /*
     * It is useful to have variables which are scoped locally so only the
     * DataTables functions can access them and they don't leak into global space.
     * At the same time these functions are often useful over multiple files in the
     * core and API, so we list, or at least document, all variables which are used
     * by DataTables as private variables here. This also ensures that there is no
     * clashing of variable names and that they can easily referenced for reuse.
     */


    // Defined else where
    //  _selector_run
    //  _selector_opts
    //  _selector_first
    //  _selector_row_indexes

    var _ext; // DataTable.ext
    var _Api; // DataTable.Api
    var _api_register; // DataTable.Api.register
    var _api_registerPlural; // DataTable.Api.registerPlural

    var _re_dic = {};
    var _re_new_lines = /[\r\n]/g;
    var _re_html = /<.*?>/g;
    var _re_date_start = /^[\w\+\-]/;
    var _re_date_end = /[\w\+\-]$/;

    // Escape regular expression special characters
    var _re_escape_regex = new RegExp( '(\\' + [ '/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^', '-' ].join('|\\') + ')', 'g' );

    // http://en.wikipedia.org/wiki/Foreign_exchange_market
    // - \u20BD - Russian ruble.
    // - \u20a9 - South Korean Won
    // - \u20BA - Turkish Lira
    // - \u20B9 - Indian Rupee
    // - R - Brazil (R$) and South Africa
    // - fr - Swiss Franc
    // - kr - Swedish krona, Norwegian krone and Danish krone
    // - \u2009 is thin space and \u202F is narrow no-break space, both used in many
    //   standards as thousands separators.
    var _re_formatted_numeric = /[',$Â£â‚¬Â¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi;


    var _empty = function ( d ) {
        return !d || d === true || d === '-' ? true : false;
    };


    var _intVal = function ( s ) {
        var integer = parseInt( s, 10 );
        return !isNaN(integer) && isFinite(s) ? integer : null;
    };

    // Convert from a formatted number with characters other than `.` as the
    // decimal place, to a Javascript number
    var _numToDecimal = function ( num, decimalPoint ) {
        // Cache created regular expressions for speed as this function is called often
        if ( ! _re_dic[ decimalPoint ] ) {
            _re_dic[ decimalPoint ] = new RegExp( _fnEscapeRegex( decimalPoint ), 'g' );
        }
        return typeof num === 'string' && decimalPoint !== '.' ?
            num.replace( /\./g, '' ).replace( _re_dic[ decimalPoint ], '.' ) :
            num;
    };


    var _isNumber = function ( d, decimalPoint, formatted ) {
        var strType = typeof d === 'string';

        // If empty return immediately so there must be a number if it is a
        // formatted string (this stops the string "k", or "kr", etc being detected
        // as a formatted number for currency
        if ( _empty( d ) ) {
            return true;
        }

        if ( decimalPoint && strType ) {
            d = _numToDecimal( d, decimalPoint );
        }

        if ( formatted && strType ) {
            d = d.replace( _re_formatted_numeric, '' );
        }

        return !isNaN( parseFloat(d) ) && isFinite( d );
    };


    // A string without HTML in it can be considered to be HTML still
    var _isHtml = function ( d ) {
        return _empty( d ) || typeof d === 'string';
    };


    var _htmlNumeric = function ( d, decimalPoint, formatted ) {
        if ( _empty( d ) ) {
            return true;
        }

        var html = _isHtml( d );
        return ! html ?
            null :
            _isNumber( _stripHtml( d ), decimalPoint, formatted ) ?
                true :
                null;
    };


    var _pluck = function ( a, prop, prop2 ) {
        var out = [];
        var i=0, ien=a.length;

        // Could have the test in the loop for slightly smaller code, but speed
        // is essential here
        if ( prop2 !== undefined ) {
            for ( ; i<ien ; i++ ) {
                if ( a[i] && a[i][ prop ] ) {
                    out.push( a[i][ prop ][ prop2 ] );
                }
            }
        }
        else {
            for ( ; i<ien ; i++ ) {
                if ( a[i] ) {
                    out.push( a[i][ prop ] );
                }
            }
        }

        return out;
    };


    // Basically the same as _pluck, but rather than looping over `a` we use `order`
    // as the indexes to pick from `a`
    var _pluck_order = function ( a, order, prop, prop2 )
    {
        var out = [];
        var i=0, ien=order.length;

        // Could have the test in the loop for slightly smaller code, but speed
        // is essential here
        if ( prop2 !== undefined ) {
            for ( ; i<ien ; i++ ) {
                if ( a[ order[i] ][ prop ] ) {
                    out.push( a[ order[i] ][ prop ][ prop2 ] );
                }
            }
        }
        else {
            for ( ; i<ien ; i++ ) {
                out.push( a[ order[i] ][ prop ] );
            }
        }

        return out;
    };


    var _range = function ( len, start )
    {
        var out = [];
        var end;

        if ( start === undefined ) {
            start = 0;
            end = len;
        }
        else {
            end = start;
            start = len;
        }

        for ( var i=start ; i<end ; i++ ) {
            out.push( i );
        }

        return out;
    };


    var _removeEmpty = function ( a )
    {
        var out = [];

        for ( var i=0, ien=a.length ; i<ien ; i++ ) {
            if ( a[i] ) { // careful - will remove all falsy values!
                out.push( a[i] );
            }
        }

        return out;
    };


    var _stripHtml = function ( d ) {
        return d.replace( _re_html, '' );
    };


    /**
     * Find the unique elements in a source array.
     *
     * @param  {array} src Source array
     * @return {array} Array of unique items
     * @ignore
     */
    var _unique = function ( src )
    {
        // A faster unique method is to use object keys to identify used values,
        // but this doesn't work with arrays or objects, which we must also
        // consider. See jsperf.com/compare-array-unique-versions/4 for more
        // information.
        var
            out = [],
            val,
            i, ien=src.length,
            j, k=0;

        again: for ( i=0 ; i<ien ; i++ ) {
            val = src[i];

            for ( j=0 ; j<k ; j++ ) {
                if ( out[j] === val ) {
                    continue again;
                }
            }

            out.push( val );
            k++;
        }

        return out;
    };



    /**
     * Create a mapping object that allows camel case parameters to be looked up
     * for their Hungarian counterparts. The mapping is stored in a private
     * parameter called `_hungarianMap` which can be accessed on the source object.
     *  @param {object} o
     *  @memberof DataTable#oApi
     */
    function _fnHungarianMap ( o )
    {
        var
            hungarian = 'a aa ai ao as b fn i m o s ',
            match,
            newKey,
            map = {};

        $.each( o, function (key, val) {
            match = key.match(/^([^A-Z]+?)([A-Z])/);

            if ( match && hungarian.indexOf(match[1]+' ') !== -1 )
            {
                newKey = key.replace( match[0], match[2].toLowerCase() );
                map[ newKey ] = key;

                if ( match[1] === 'o' )
                {
                    _fnHungarianMap( o[key] );
                }
            }
        } );

        o._hungarianMap = map;
    }


    /**
     * Convert from camel case parameters to Hungarian, based on a Hungarian map
     * created by _fnHungarianMap.
     *  @param {object} src The model object which holds all parameters that can be
     *    mapped.
     *  @param {object} user The object to convert from camel case to Hungarian.
     *  @param {boolean} force When set to `true`, properties which already have a
     *    Hungarian value in the `user` object will be overwritten. Otherwise they
     *    won't be.
     *  @memberof DataTable#oApi
     */
    function _fnCamelToHungarian ( src, user, force )
    {
        if ( ! src._hungarianMap ) {
            _fnHungarianMap( src );
        }

        var hungarianKey;

        $.each( user, function (key, val) {
            hungarianKey = src._hungarianMap[ key ];

            if ( hungarianKey !== undefined && (force || user[hungarianKey] === undefined) )
            {
                // For objects, we need to buzz down into the object to copy parameters
                if ( hungarianKey.charAt(0) === 'o' )
                {
                    // Copy the camelCase options over to the hungarian
                    if ( ! user[ hungarianKey ] ) {
                        user[ hungarianKey ] = {};
                    }
                    $.extend( true, user[hungarianKey], user[key] );

                    _fnCamelToHungarian( src[hungarianKey], user[hungarianKey], force );
                }
                else {
                    user[hungarianKey] = user[ key ];
                }
            }
        } );
    }


    /**
     * Language compatibility - when certain options are given, and others aren't, we
     * need to duplicate the values over, in order to provide backwards compatibility
     * with older language files.
     *  @param {object} oSettings dataTables settings object
     *  @memberof DataTable#oApi
     */
    function _fnLanguageCompat( lang )
    {
        var defaults = DataTable.defaults.oLanguage;
        var zeroRecords = lang.sZeroRecords;

        /* Backwards compatibility - if there is no sEmptyTable given, then use the same as
         * sZeroRecords - assuming that is given.
         */
        if ( ! lang.sEmptyTable && zeroRecords &&
            defaults.sEmptyTable === "No data available in table" )
        {
            _fnMap( lang, lang, 'sZeroRecords', 'sEmptyTable' );
        }

        /* Likewise with loading records */
        if ( ! lang.sLoadingRecords && zeroRecords &&
            defaults.sLoadingRecords === "Loading..." )
        {
            _fnMap( lang, lang, 'sZeroRecords', 'sLoadingRecords' );
        }

        // Old parameter name of the thousands separator mapped onto the new
        if ( lang.sInfoThousands ) {
            lang.sThousands = lang.sInfoThousands;
        }

        var decimal = lang.sDecimal;
        if ( decimal ) {
            _addNumericSort( decimal );
        }
    }


    /**
     * Map one parameter onto another
     *  @param {object} o Object to map
     *  @param {*} knew The new parameter name
     *  @param {*} old The old parameter name
     */
    var _fnCompatMap = function ( o, knew, old ) {
        if ( o[ knew ] !== undefined ) {
            o[ old ] = o[ knew ];
        }
    };


    /**
     * Provide backwards compatibility for the main DT options. Note that the new
     * options are mapped onto the old parameters, so this is an external interface
     * change only.
     *  @param {object} init Object to map
     */
    function _fnCompatOpts ( init )
    {
        _fnCompatMap( init, 'ordering',      'bSort' );
        _fnCompatMap( init, 'orderMulti',    'bSortMulti' );
        _fnCompatMap( init, 'orderClasses',  'bSortClasses' );
        _fnCompatMap( init, 'orderCellsTop', 'bSortCellsTop' );
        _fnCompatMap( init, 'order',         'aaSorting' );
        _fnCompatMap( init, 'orderFixed',    'aaSortingFixed' );
        _fnCompatMap( init, 'paging',        'bPaginate' );
        _fnCompatMap( init, 'pagingType',    'sPaginationType' );
        _fnCompatMap( init, 'pageLength',    'iDisplayLength' );
        _fnCompatMap( init, 'searching',     'bFilter' );

        // Boolean initialisation of x-scrolling
        if ( typeof init.sScrollX === 'boolean' ) {
            init.sScrollX = init.sScrollX ? '100%' : '';
        }
        if ( typeof init.scrollX === 'boolean' ) {
            init.scrollX = init.scrollX ? '100%' : '';
        }

        // Column search objects are in an array, so it needs to be converted
        // element by element
        var searchCols = init.aoSearchCols;

        if ( searchCols ) {
            for ( var i=0, ien=searchCols.length ; i<ien ; i++ ) {
                if ( searchCols[i] ) {
                    _fnCamelToHungarian( DataTable.models.oSearch, searchCols[i] );
                }
            }
        }
    }


    /**
     * Provide backwards compatibility for column options. Note that the new options
     * are mapped onto the old parameters, so this is an external interface change
     * only.
     *  @param {object} init Object to map
     */
    function _fnCompatCols ( init )
    {
        _fnCompatMap( init, 'orderable',     'bSortable' );
        _fnCompatMap( init, 'orderData',     'aDataSort' );
        _fnCompatMap( init, 'orderSequence', 'asSorting' );
        _fnCompatMap( init, 'orderDataType', 'sortDataType' );

        // orderData can be given as an integer
        var dataSort = init.aDataSort;
        if ( dataSort && ! $.isArray( dataSort ) ) {
            init.aDataSort = [ dataSort ];
        }
    }


    /**
     * Browser feature detection for capabilities, quirks
     *  @param {object} settings dataTables settings object
     *  @memberof DataTable#oApi
     */
    function _fnBrowserDetect( settings )
    {
        // We don't need to do this every time DataTables is constructed, the values
        // calculated are specific to the browser and OS configuration which we
        // don't expect to change between initialisations
        if ( ! DataTable.__browser ) {
            var browser = {};
            DataTable.__browser = browser;

            // Scrolling feature / quirks detection
            var n = $('<div/>')
                .css( {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: 1,
                    width: 1,
                    overflow: 'hidden'
                } )
                .append(
                $('<div/>')
                    .css( {
                        position: 'absolute',
                        top: 1,
                        left: 1,
                        width: 100,
                        overflow: 'scroll'
                    } )
                    .append(
                    $('<div/>')
                        .css( {
                            width: '100%',
                            height: 10
                        } )
                )
            )
                .appendTo( 'body' );

            var outer = n.children();
            var inner = outer.children();

            // Numbers below, in order, are:
            // inner.offsetWidth, inner.clientWidth, outer.offsetWidth, outer.clientWidth
            //
            // IE6 XP:                           100 100 100  83
            // IE7 Vista:                        100 100 100  83
            // IE 8+ Windows:                     83  83 100  83
            // Evergreen Windows:                 83  83 100  83
            // Evergreen Mac with scrollbars:     85  85 100  85
            // Evergreen Mac without scrollbars: 100 100 100 100

            // Get scrollbar width
            browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;

            // IE6/7 will oversize a width 100% element inside a scrolling element, to
            // include the width of the scrollbar, while other browsers ensure the inner
            // element is contained without forcing scrolling
            browser.bScrollOversize = inner[0].offsetWidth === 100 && outer[0].clientWidth !== 100;

            // In rtl text layout, some browsers (most, but not all) will place the
            // scrollbar on the left, rather than the right.
            browser.bScrollbarLeft = Math.round( inner.offset().left ) !== 1;

            // IE8- don't provide height and width for getBoundingClientRect
            browser.bBounding = n[0].getBoundingClientRect().width ? true : false;

            n.remove();
        }

        $.extend( settings.oBrowser, DataTable.__browser );
        settings.oScroll.iBarWidth = DataTable.__browser.barWidth;
    }


    /**
     * Array.prototype reduce[Right] method, used for browsers which don't support
     * JS 1.6. Done this way to reduce code size, since we iterate either way
     *  @param {object} settings dataTables settings object
     *  @memberof DataTable#oApi
     */
    function _fnReduce ( that, fn, init, start, end, inc )
    {
        var
            i = start,
            value,
            isSet = false;

        if ( init !== undefined ) {
            value = init;
            isSet = true;
        }

        while ( i !== end ) {
            if ( ! that.hasOwnProperty(i) ) {
                continue;
            }

            value = isSet ?
                fn( value, that[i], i, that ) :
                that[i];

            isSet = true;
            i += inc;
        }

        return value;
    }

    /**
     * Add a column to the list used for the table with default values
     *  @param {object} oSettings dataTables settings object
     *  @param {node} nTh The th element for this column
     *  @memberof DataTable#oApi
     */
    function _fnAddColumn( oSettings, nTh )
    {
        // Add column to aoColumns array
        var oDefaults = DataTable.defaults.column;
        var iCol = oSettings.aoColumns.length;
        var oCol = $.extend( {}, DataTable.models.oColumn, oDefaults, {
            "nTh": nTh ? nTh : document.createElement('th'),
            "sTitle":    oDefaults.sTitle    ? oDefaults.sTitle    : nTh ? nTh.innerHTML : '',
            "aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
            "mData": oDefaults.mData ? oDefaults.mData : iCol,
            idx: iCol
        } );
        oSettings.aoColumns.push( oCol );

        // Add search object for column specific search. Note that the `searchCols[ iCol ]`
        // passed into extend can be undefined. This allows the user to give a default
        // with only some of the parameters defined, and also not give a default
        var searchCols = oSettings.aoPreSearchCols;
        searchCols[ iCol ] = $.extend( {}, DataTable.models.oSearch, searchCols[ iCol ] );

        // Use the default column options function to initialise classes etc
        _fnColumnOptions( oSettings, iCol, $(nTh).data() );
    }


    /**
     * Apply options for a column
     *  @param {object} oSettings dataTables settings object
     *  @param {int} iCol column index to consider
     *  @param {object} oOptions object with sType, bVisible and bSearchable etc
     *  @memberof DataTable#oApi
     */
    function _fnColumnOptions( oSettings, iCol, oOptions )
    {
        var oCol = oSettings.aoColumns[ iCol ];
        var oClasses = oSettings.oClasses;
        var th = $(oCol.nTh);

        // Try to get width information from the DOM. We can't get it from CSS
        // as we'd need to parse the CSS stylesheet. `width` option can override
        if ( ! oCol.sWidthOrig ) {
            // Width attribute
            oCol.sWidthOrig = th.attr('width') || null;

            // Style attribute
            var t = (th.attr('style') || '').match(/width:\s*(\d+[pxem%]+)/);
            if ( t ) {
                oCol.sWidthOrig = t[1];
            }
        }

        /* User specified column options */
        if ( oOptions !== undefined && oOptions !== null )
        {
            // Backwards compatibility
            _fnCompatCols( oOptions );

            // Map camel case parameters to their Hungarian counterparts
            _fnCamelToHungarian( DataTable.defaults.column, oOptions );

            /* Backwards compatibility for mDataProp */
            if ( oOptions.mDataProp !== undefined && !oOptions.mData )
            {
                oOptions.mData = oOptions.mDataProp;
            }

            if ( oOptions.sType )
            {
                oCol._sManualType = oOptions.sType;
            }

            // `class` is a reserved word in Javascript, so we need to provide
            // the ability to use a valid name for the camel case input
            if ( oOptions.className && ! oOptions.sClass )
            {
                oOptions.sClass = oOptions.className;
            }

            $.extend( oCol, oOptions );
            _fnMap( oCol, oOptions, "sWidth", "sWidthOrig" );

            /* iDataSort to be applied (backwards compatibility), but aDataSort will take
             * priority if defined
             */
            if ( oOptions.iDataSort !== undefined )
            {
                oCol.aDataSort = [ oOptions.iDataSort ];
            }
            _fnMap( oCol, oOptions, "aDataSort" );
        }

        /* Cache the data get and set functions for speed */
        var mDataSrc = oCol.mData;
        var mData = _fnGetObjectDataFn( mDataSrc );
        var mRender = oCol.mRender ? _fnGetObjectDataFn( oCol.mRender ) : null;

        var attrTest = function( src ) {
            return typeof src === 'string' && src.indexOf('@') !== -1;
        };
        oCol._bAttrSrc = $.isPlainObject( mDataSrc ) && (
        attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter)
        );
        oCol._setter = null;

        oCol.fnGetData = function (rowData, type, meta) {
            var innerData = mData( rowData, type, undefined, meta );

            return mRender && type ?
                mRender( innerData, type, rowData, meta ) :
                innerData;
        };
        oCol.fnSetData = function ( rowData, val, meta ) {
            return _fnSetObjectDataFn( mDataSrc )( rowData, val, meta );
        };

        // Indicate if DataTables should read DOM data as an object or array
        // Used in _fnGetRowElements
        if ( typeof mDataSrc !== 'number' ) {
            oSettings._rowReadObject = true;
        }

        /* Feature sorting overrides column specific when off */
        if ( !oSettings.oFeatures.bSort )
        {
            oCol.bSortable = false;
            th.addClass( oClasses.sSortableNone ); // Have to add class here as order event isn't called
        }

        /* Check that the class assignment is correct for sorting */
        var bAsc = $.inArray('asc', oCol.asSorting) !== -1;
        var bDesc = $.inArray('desc', oCol.asSorting) !== -1;
        if ( !oCol.bSortable || (!bAsc && !bDesc) )
        {
            oCol.sSortingClass = oClasses.sSortableNone;
            oCol.sSortingClassJUI = "";
        }
        else if ( bAsc && !bDesc )
        {
            oCol.sSortingClass = oClasses.sSortableAsc;
            oCol.sSortingClassJUI = oClasses.sSortJUIAscAllowed;
        }
        else if ( !bAsc && bDesc )
        {
            oCol.sSortingClass = oClasses.sSortableDesc;
            oCol.sSortingClassJUI = oClasses.sSortJUIDescAllowed;
        }
        else
        {
            oCol.sSortingClass = oClasses.sSortable;
            oCol.sSortingClassJUI = oClasses.sSortJUI;
        }
    }


    /**
     * Adjust the table column widths for new data. Note: you would probably want to
     * do a redraw after calling this function!
     *  @param {object} settings dataTables settings object
     *  @memberof DataTable#oApi
     */
    function _fnAdjustColumnSizing ( settings )
    {
        /* Not interested in doing column width calculation if auto-width is disabled */
        if ( settings.oFeatures.bAutoWidth !== false )
        {
            var columns = settings.aoColumns;

            _fnCalculateColumnWidths( settings );
            for ( var i=0 , iLen=columns.length ; i<iLen ; i++ )
            {
                columns[i].nTh.style.width = columns[i].sWidth;
            }
        }

        var scroll = settings.oScroll;
        if ( scroll.sY !== '' || scroll.sX !== '')
        {
            _fnScrollDraw( settings );
        }

        _fnCallbackFire( settings, null, 'column-sizing', [settings] );
    }


    /**
     * Covert the index of a visible column to the index in the data array (take account
     * of hidden columns)
     *  @param {object} oSettings dataTables settings object
     *  @param {int} iMatch Visible column index to lookup
     *  @returns {int} i the data index
     *  @memberof DataTable#oApi
     */
    function _fnVisibleToColumnIndex( oSettings, iMatch )
    {
        var aiVis = _fnGetColumns( oSettings, 'bVisible' );

        return typeof aiVis[iMatch] === 'number' ?
            aiVis[iMatch] :
            null;
    }


    /**
     * Covert the index of an index in the data array and convert it to the visible
     *   column index (take account of hidden columns)
     *  @param {int} iMatch Column index to lookup
     *  @param {object} oSettings dataTables settings object
     *  @returns {int} i the data index
     *  @memberof DataTable#oApi
     */
    function _fnColumnIndexToVisible( oSettings, iMatch )
    {
        var aiVis = _fnGetColumns( oSettings, 'bVisible' );
        var iPos = $.inArray( iMatch, aiVis );

        return iPos !== -1 ? iPos : null;
    }


    /**
     * Get the number of visible columns
     *  @param {object} oSettings dataTables settings object
     *  @returns {int} i the number of visible columns
     *  @memberof DataTable#oApi
     */
    function _fnVisbleColumns( oSettings )
    {
        return $( _pluck( oSettings.aoColumns, 'nTh' ) ).filter(':visible').length;
    }


    /**
     * Get an array of column indexes that match a given property
     *  @param {object} oSettings dataTables settings object
     *  @param {string} sParam Parameter in aoColumns to look for - typically
     *    bVisible or bSearchable
     *  @returns {array} Array of indexes with matched properties
     *  @memberof DataTable#oApi
     */
    function _fnGetColumns( oSettings, sParam )
    {
        var a = [];

        $.map( oSettings.aoColumns, function(val, i) {
            if ( val[sParam] ) {
                a.push( i );
            }
        } );

        return a;
    }


    /**
     * Calculate the 'type' of a column
     *  @param {object} settings dataTables settings object
     *  @memberof DataTable#oApi
     */
    function _fnColumnTypes ( settings )
    {
        var columns = settings.aoColumns;
        var data = settings.aoData;
        var types = DataTable.ext.type.detect;
        var i, ien, j, jen, k, ken;
        var col, cell, detectedType, cache;

        // For each column, spin over the 
        for ( i=0, ien=columns.length ; i<ien ; i++ ) {
            col = columns[i];
            cache = [];

            if ( ! col.sType && col._sManualType ) {
                col.sType = col._sManualType;
            }
            else if ( ! col.sType ) {
                for ( j=0, jen=types.length ; j<jen ; j++ ) {
                    for ( k=0, ken=data.length ; k<ken ; k++ ) {
                        // Use a cache array so we only need to get the type data
                        // from the formatter once (when using multiple detectors)
                        if ( cache[k] === undefined ) {
                            cache[k] = _fnGetCellData( settings, k, i, 'type' );
                        }

                        detectedType = types[j]( cache[k], settings );

                        // If null, then this type can't apply to this column, so
                        // rather than testing all cells, break out. There is an
                        // exception for the last type which is `html`. We need to
                        // scan all rows since it is possible to mix string and HTML
                        // types
                        if ( ! detectedType && j !== types.length-1 ) {
                            break;
                        }

                        // Only a single match is needed for html type since it is
                        // bottom of the pile and very similar to string
                        if ( detectedType === 'html' ) {
                            break;
                        }
                    }

                    // Type is valid for all data points in the column - use this
                    // type
                    if ( detectedType ) {
                        col.sType = detectedType;
                        break;
                    }
                }

                // Fall back - if no type was detected, always use string
                if ( ! col.sType ) {
                    col.sType = 'string';
                }
            }
        }
    }


    /**
     * Take the column definitions and static columns arrays and calculate how
     * they relate to column indexes. The callback function will then apply the
     * definition found for a column to a suitable configuration object.
     *  @param {object} oSettings dataTables settings object
     *  @param {array} aoColDefs The aoColumnDefs array that is to be applied
     *  @param {array} aoCols The aoColumns array that defines columns individually
     *  @param {function} fn Callback function - takes two parameters, the calculated
     *    column index and the definition for that column.
     *  @memberof DataTable#oApi
     */
    function _fnApplyColumnDefs( oSettings, aoColDefs, aoCols, fn )
    {
        var i, iLen, j, jLen, k, kLen, def;
        var columns = oSettings.aoColumns;

        // Column definitions with aTargets
        if ( aoColDefs )
        {
            /* Loop over the definitions array - loop in reverse so first instance has priority */
            for ( i=aoColDefs.length-1 ; i>=0 ; i-- )
            {
                def = aoColDefs[i];

                /* Each definition can target multiple columns, as it is an array */
                var aTargets = def.targets !== undefined ?
                    def.targets :
                    def.aTargets;

                if ( ! $.isArray( aTargets ) )
                {
                    aTargets = [ aTargets ];
                }

                for ( j=0, jLen=aTargets.length ; j<jLen ; j++ )
                {
                    if ( typeof aTargets[j] === 'number' && aTargets[j] >= 0 )
                    {
                        /* Add columns that we don't yet know about */
                        while( columns.length <= aTargets[j] )
                        {
                            _fnAddColumn( oSettings );
                        }

                        /* Integer, basic index */
                        fn( aTargets[j], def );
                    }
                    else if ( typeof aTargets[j] === 'number' && aTargets[j] < 0 )
                    {
                        /* Negative integer, right to left column counting */
                        fn( columns.length+aTargets[j], def );
                    }
                    else if ( typeof aTargets[j] === 'string' )
                    {
                        /* Class name matching on TH element */
                        for ( k=0, kLen=columns.length ; k<kLen ; k++ )
                        {
                            if ( aTargets[j] == "_all" ||
                                $(columns[k].nTh).hasClass( aTargets[j] ) )
                            {
                                fn( k, def );
                            }
                        }
                    }
                }
            }
        }

        // Statically defined columns array
        if ( aoCols )
        {
            for ( i=0, iLen=aoCols.length ; i<iLen ; i++ )
            {
                fn( i, aoCols[i] );
            }
        }
    }

    /**
     * Add a data array to the table, creating DOM node etc. This is the parallel to
     * _fnGatherData, but for adding rows from a Javascript source, rather than a
     * DOM source.
     *  @param {object} oSettings dataTables settings object
     *  @param {array} aData data array to be added
     *  @param {node} [nTr] TR element to add to the table - optional. If not given,
     *    DataTables will create a row automatically
     *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
     *    if nTr is.
     *  @returns {int} >=0 if successful (index of new aoData entry), -1 if failed
     *  @memberof DataTable#oApi
     */
    function _fnAddData ( oSettings, aDataIn, nTr, anTds )
    {
        /* Create the object for storing information about this new row */
        var iRow = oSettings.aoData.length;
        var oData = $.extend( true, {}, DataTable.models.oRow, {
            src: nTr ? 'dom' : 'data',
            idx: iRow
        } );

        oData._aData = aDataIn;
        oSettings.aoData.push( oData );

        /* Create the cells */
        var nTd, sThisType;
        var columns = oSettings.aoColumns;

        // Invalidate the column types as the new data needs to be revalidated
        for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
        {
            columns[i].sType = null;
        }

        /* Add to the display array */
        oSettings.aiDisplayMaster.push( iRow );

        var id = oSettings.rowIdFn( aDataIn );
        if ( id !== undefined ) {
            oSettings.aIds[ id ] = oData;
        }

        /* Create the DOM information, or register it if already present */
        if ( nTr || ! oSettings.oFeatures.bDeferRender )
        {
            _fnCreateTr( oSettings, iRow, nTr, anTds );
        }

        return iRow;
    }


    /**
     * Add one or more TR elements to the table. Generally we'd expect to
     * use this for reading data from a DOM sourced table, but it could be
     * used for an TR element. Note that if a TR is given, it is used (i.e.
     * it is not cloned).
     *  @param {object} settings dataTables settings object
     *  @param {array|node|jQuery} trs The TR element(s) to add to the table
     *  @returns {array} Array of indexes for the added rows
     *  @memberof DataTable#oApi
     */
    function _fnAddTr( settings, trs )
    {
        var row;

        // Allow an individual node to be passed in
        if ( ! (trs instanceof $) ) {
            trs = $(trs);
        }

        return trs.map( function (i, el) {
            row = _fnGetRowElements( settings, el );
            return _fnAddData( settings, row.data, el, row.cells );
        } );
    }


    /**
     * Take a TR element and convert it to an index in aoData
     *  @param {object} oSettings dataTables settings object
     *  @param {node} n the TR element to find
     *  @returns {int} index if the node is found, null if not
     *  @memberof DataTable#oApi
     */
    function _fnNodeToDataIndex( oSettings, n )
    {
        return (n._DT_RowIndex!==undefined) ? n._DT_RowIndex : null;
    }


    /**
     * Take a TD element and convert it into a column data index (not the visible index)
     *  @param {object} oSettings dataTables settings object
     *  @param {int} iRow The row number the TD/TH can be found in
     *  @param {node} n The TD/TH element to find
     *  @returns {int} index if the node is found, -1 if not
     *  @memberof DataTable#oApi
     */
    function _fnNodeToColumnIndex( oSettings, iRow, n )
    {
        return $.inArray( n, oSettings.aoData[ iRow ].anCells );
    }


    /**
     * Get the data for a given cell from the internal cache, taking into account data mapping
     *  @param {object} settings dataTables settings object
     *  @param {int} rowIdx aoData row id
     *  @param {int} colIdx Column index
     *  @param {string} type data get type ('display', 'type' 'filter' 'sort')
     *  @returns {*} Cell data
     *  @memberof DataTable#oApi
     */
    function _fnGetCellData( settings, rowIdx, colIdx, type )
    {
        var draw           = settings.iDraw;
        var col            = settings.aoColumns[colIdx];
        var rowData        = settings.aoData[rowIdx]._aData;
        var defaultContent = col.sDefaultContent;
        var cellData       = col.fnGetData( rowData, type, {
            settings: settings,
            row:      rowIdx,
            col:      colIdx
        } );

        if ( cellData === undefined ) {
            if ( settings.iDrawError != draw && defaultContent === null ) {
                _fnLog( settings, 0, "Requested unknown parameter "+
                (typeof col.mData=='function' ? '{function}' : "'"+col.mData+"'")+
                " for row "+rowIdx+", column "+colIdx, 4 );
                settings.iDrawError = draw;
            }
            return defaultContent;
        }

        // When the data source is null and a specific data type is requested (i.e.
        // not the original data), we can use default column data
        if ( (cellData === rowData || cellData === null) && defaultContent !== null && type !== undefined ) {
            cellData = defaultContent;
        }
        else if ( typeof cellData === 'function' ) {
            // If the data source is a function, then we run it and use the return,
            // executing in the scope of the data object (for instances)
            return cellData.call( rowData );
        }

        if ( cellData === null && type == 'display' ) {
            return '';
        }
        return cellData;
    }


    /**
     * Set the value for a specific cell, into the internal data cache
     *  @param {object} settings dataTables settings object
     *  @param {int} rowIdx aoData row id
     *  @param {int} colIdx Column index
     *  @param {*} val Value to set
     *  @memberof DataTable#oApi
     */
    function _fnSetCellData( settings, rowIdx, colIdx, val )
    {
        var col     = settings.aoColumns[colIdx];
        var rowData = settings.aoData[rowIdx]._aData;

        col.fnSetData( rowData, val, {
            settings: settings,
            row:      rowIdx,
            col:      colIdx
        }  );
    }


    // Private variable that is used to match action syntax in the data property object
    var __reArray = /\[.*?\]$/;
    var __reFn = /\(\)$/;

    /**
     * Split string on periods, taking into account escaped periods
     * @param  {string} str String to split
     * @return {array} Split string
     */
    function _fnSplitObjNotation( str )
    {
        return $.map( str.match(/(\\.|[^\.])+/g) || [''], function ( s ) {
            return s.replace(/\\./g, '.');
        } );
    }


    /**
     * Return a function that can be used to get data from a source object, taking
     * into account the ability to use nested objects as a source
     *  @param {string|int|function} mSource The data source for the object
     *  @returns {function} Data get function
     *  @memberof DataTable#oApi
     */
    function _fnGetObjectDataFn( mSource )
    {
        if ( $.isPlainObject( mSource ) )
        {
            /* Build an object of get functions, and wrap them in a single call */
            var o = {};
            $.each( mSource, function (key, val) {
                if ( val ) {
                    o[key] = _fnGetObjectDataFn( val );
                }
            } );

            return function (data, type, row, meta) {
                var t = o[type] || o._;
                return t !== undefined ?
                    t(data, type, row, meta) :
                    data;
            };
        }
        else if ( mSource === null )
        {
            /* Give an empty string for rendering / sorting etc */
            return function (data) { // type, row and meta also passed, but not used
                return data;
            };
        }
        else if ( typeof mSource === 'function' )
        {
            return function (data, type, row, meta) {
                return mSource( data, type, row, meta );
            };
        }
        else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
            mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
        {
            /* If there is a . in the source string then the data source is in a
             * nested object so we loop over the data for each level to get the next
             * level down. On each loop we test for undefined, and if found immediately
             * return. This allows entire objects to be missing and sDefaultContent to
             * be used if defined, rather than throwing an error
             */
            var fetchData = function (data, type, src) {
                var arrayNotation, funcNotation, out, innerSrc;

                if ( src !== "" )
                {
                    var a = _fnSplitObjNotation( src );

                    for ( var i=0, iLen=a.length ; i<iLen ; i++ )
                    {
                        // Check if we are dealing with special notation
                        arrayNotation = a[i].match(__reArray);
                        funcNotation = a[i].match(__reFn);

                        if ( arrayNotation )
                        {
                            // Array notation
                            a[i] = a[i].replace(__reArray, '');

                            // Condition allows simply [] to be passed in
                            if ( a[i] !== "" ) {
                                data = data[ a[i] ];
                            }
                            out = [];

                            // Get the remainder of the nested object to get
                            a.splice( 0, i+1 );
                            innerSrc = a.join('.');

                            // Traverse each entry in the array getting the properties requested
                            if ( $.isArray( data ) ) {
                                for ( var j=0, jLen=data.length ; j<jLen ; j++ ) {
                                    out.push( fetchData( data[j], type, innerSrc ) );
                                }
                            }

                            // If a string is given in between the array notation indicators, that
                            // is used to join the strings together, otherwise an array is returned
                            var join = arrayNotation[0].substring(1, arrayNotation[0].length-1);
                            data = (join==="") ? out : out.join(join);

                            // The inner call to fetchData has already traversed through the remainder
                            // of the source requested, so we exit from the loop
                            break;
                        }
                        else if ( funcNotation )
                        {
                            // Function call
                            a[i] = a[i].replace(__reFn, '');
                            data = data[ a[i] ]();
                            continue;
                        }

                        if ( data === null || data[ a[i] ] === undefined )
                        {
                            return undefined;
                        }
                        data = data[ a[i] ];
                    }
                }

                return data;
            };

            return function (data, type) { // row and meta also passed, but not used
                return fetchData( data, type, mSource );
            };
        }
        else
        {
            /* Array or flat object mapping */
            return function (data, type) { // row and meta also passed, but not used
                return data[mSource];
            };
        }
    }


    /**
     * Return a function that can be used to set data from a source object, taking
     * into account the ability to use nested objects as a source
     *  @param {string|int|function} mSource The data source for the object
     *  @returns {function} Data set function
     *  @memberof DataTable#oApi
     */
    function _fnSetObjectDataFn( mSource )
    {
        if ( $.isPlainObject( mSource ) )
        {
            /* Unlike get, only the underscore (global) option is used for for
             * setting data since we don't know the type here. This is why an object
             * option is not documented for `mData` (which is read/write), but it is
             * for `mRender` which is read only.
             */
            return _fnSetObjectDataFn( mSource._ );
        }
        else if ( mSource === null )
        {
            /* Nothing to do when the data source is null */
            return function () {};
        }
        else if ( typeof mSource === 'function' )
        {
            return function (data, val, meta) {
                mSource( data, 'set', val, meta );
            };
        }
        else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
            mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
        {
            /* Like the get, we need to get data from a nested object */
            var setData = function (data, val, src) {
                var a = _fnSplitObjNotation( src ), b;
                var aLast = a[a.length-1];
                var arrayNotation, funcNotation, o, innerSrc;

                for ( var i=0, iLen=a.length-1 ; i<iLen ; i++ )
                {
                    // Check if we are dealing with an array notation request
                    arrayNotation = a[i].match(__reArray);
                    funcNotation = a[i].match(__reFn);

                    if ( arrayNotation )
                    {
                        a[i] = a[i].replace(__reArray, '');
                        data[ a[i] ] = [];

                        // Get the remainder of the nested object to set so we can recurse
                        b = a.slice();
                        b.splice( 0, i+1 );
                        innerSrc = b.join('.');

                        // Traverse each entry in the array setting the properties requested
                        if ( $.isArray( val ) )
                        {
                            for ( var j=0, jLen=val.length ; j<jLen ; j++ )
                            {
                                o = {};
                                setData( o, val[j], innerSrc );
                                data[ a[i] ].push( o );
                            }
                        }
                        else
                        {
                            // We've been asked to save data to an array, but it
                            // isn't array data to be saved. Best that can be done
                            // is to just save the value.
                            data[ a[i] ] = val;
                        }

                        // The inner call to setData has already traversed through the remainder
                        // of the source and has set the data, thus we can exit here
                        return;
                    }
                    else if ( funcNotation )
                    {
                        // Function call
                        a[i] = a[i].replace(__reFn, '');
                        data = data[ a[i] ]( val );
                    }

                    // If the nested object doesn't currently exist - since we are
                    // trying to set the value - create it
                    if ( data[ a[i] ] === null || data[ a[i] ] === undefined )
                    {
                        data[ a[i] ] = {};
                    }
                    data = data[ a[i] ];
                }

                // Last item in the input - i.e, the actual set
                if ( aLast.match(__reFn ) )
                {
                    // Function call
                    data = data[ aLast.replace(__reFn, '') ]( val );
                }
                else
                {
                    // If array notation is used, we just want to strip it and use the property name
                    // and assign the value. If it isn't used, then we get the result we want anyway
                    data[ aLast.replace(__reArray, '') ] = val;
                }
            };

            return function (data, val) { // meta is also passed in, but not used
                return setData( data, val, mSource );
            };
        }
        else
        {
            /* Array or flat object mapping */
            return function (data, val) { // meta is also passed in, but not used
                data[mSource] = val;
            };
        }
    }


    /**
     * Return an array with the full table data
     *  @param {object} oSettings dataTables settings object
     *  @returns array {array} aData Master data array
     *  @memberof DataTable#oApi
     */
    function _fnGetDataMaster ( settings )
    {
        return _pluck( settings.aoData, '_aData' );
    }


    /**
     * Nuke the table
     *  @param {object} oSettings dataTables settings object
     *  @memberof DataTable#oApi
     */
    function _fnClearTable( settings )
    {
        settings.aoData.length = 0;
        settings.aiDisplayMaster.length = 0;
        settings.aiDisplay.length = 0;
        settings.aIds = {};
    }


    /**
     * Take an array of integers (index array) and remove a target integer (value - not
     * the key!)
     *  @param {array} a Index array to target
     *  @param {int} iTarget value to find
     *  @memberof DataTable#oApi
     */
    function _fnDeleteIndex( a, iTarget, splice )
    {
        var iTargetIndex = -1;

        for ( var i=0, iLen=a.length ; i<iLen ; i++ )
        {
            if ( a[i] == iTarget )
            {
                iTargetIndex = i;
            }
            else if ( a[i] > iTarget )
            {
                a[i]--;
            }
        }

        if ( iTargetIndex != -1 && splice === undefined )
        {
            a.splice( iTargetIndex, 1 );
        }
    }


    /**
     * Mark cached data as invalid such that a re-read of the data will occur when
     * the cached data is next requested. Also update from the data source object.
     *
     * @param {object} settings DataTables settings object
     * @param {int}    rowIdx   Row index to invalidate
     * @param {string} [src]    Source to invalidate from: undefined, 'auto', 'dom'
     *     or 'data'
     * @param {int}    [colIdx] Column index to invalidate. If undefined the whole
     *     row will be invalidated
     * @memberof DataTable#oApi
     *
     * @todo For the modularisation of v1.11 this will need to become a callback, so
     *   the sort and filter methods can subscribe to it. That will required
     *   initialisation options for sorting, which is why it is not already baked in
     */
    function _fnInvalidate( settings, rowIdx, src, colIdx )
    {
        var row = settings.aoData[ rowIdx ];
        var i, ien;
        var cellWrite = function ( cell, col ) {
            // This is very frustrating, but in IE if you just write directly
            // to innerHTML, and elements that are overwritten are GC'ed,
            // even if there is a reference to them elsewhere
            while ( cell.childNodes.length ) {
                cell.removeChild( cell.firstChild );
            }

            cell.innerHTML = _fnGetCellData( settings, rowIdx, col, 'display' );
        };

        // Are we reading last data from DOM or the data object?
        if ( src === 'dom' || ((! src || src === 'auto') && row.src === 'dom') ) {
            // Read the data from the DOM
            row._aData = _fnGetRowElements(
                settings, row, colIdx, colIdx === undefined ? undefined : row._aData
            )
                .data;
        }
        else {
            // Reading from data object, update the DOM
            var cells = row.anCells;

            if ( cells ) {
                if ( colIdx !== undefined ) {
                    cellWrite( cells[colIdx], colIdx );
                }
                else {
                    for ( i=0, ien=cells.length ; i<ien ; i++ ) {
                        cellWrite( cells[i], i );
                    }
                }
            }
        }

        // For both row and cell invalidation, the cached data for sorting and
        // filtering is nulled out
        row._aSortData = null;
        row._aFilterData = null;

        // Invalidate the type for a specific column (if given) or all columns since
        // the data might have changed
        var cols = settings.aoColumns;
        if ( colIdx !== undefined ) {
            cols[ colIdx ].sType = null;
        }
        else {
            for ( i=0, ien=cols.length ; i<ien ; i++ ) {
                cols[i].sType = null;
            }

            // Update DataTables special `DT_*` attributes for the row
            _fnRowAttributes( settings, row );
        }
    }


    /**
     * Build a data source object from an HTML row, reading the contents of the
     * cells that are in the row.
     *
     * @param {object} settings DataTables settings object
     * @param {node|object} TR element from which to read data or existing row
     *   object from which to re-read the data from the cells
     * @param {int} [colIdx] Optional column index
     * @param {array|object} [d] Data source object. If `colIdx` is given then this
     *   parameter should also be given and will be used to write the data into.
     *   Only the column in question will be written
     * @returns {object} Object with two parameters: `data` the data read, in
     *   document order, and `cells` and array of nodes (they can be useful to the
     *   caller, so rather than needing a second traversal to get them, just return
     *   them from here).
     * @memberof DataTable#oApi
     */
    function _fnGetRowElements( settings, row, colIdx, d )
    {
        var
            tds = [],
            td = row.firstChild,
            name, col, o, i=0, contents,
            columns = settings.aoColumns,
            objectRead = settings._rowReadObject;

        // Allow the data object to be passed in, or construct
        d = d !== undefined ?
            d :
            objectRead ?
            {} :
                [];

        var attr = function ( str, td  ) {
            if ( typeof str === 'string' ) {
                var idx = str.indexOf('@');

                if ( idx !== -1 ) {
                    var attr = str.substring( idx+1 );
                    var setter = _fnSetObjectDataFn( str );
                    setter( d, td.getAttribute( attr ) );
                }
            }
        };

        // Read data from a cell and store into the data object
        var cellProcess = function ( cell ) {
            if ( colIdx === undefined || colIdx === i ) {
                col = columns[i];
                contents = $.trim(cell.innerHTML);

                if ( col && col._bAttrSrc ) {
                    var setter = _fnSetObjectDataFn( col.mData._ );
                    setter( d, contents );

                    attr( col.mData.sort, cell );
                    attr( col.mData.type, cell );
                    attr( col.mData.filter, cell );
                }
                else {
                    // Depending on the `data` option for the columns the data can
                    // be read to either an object or an array.
                    if ( objectRead ) {
                        if ( ! col._setter ) {
                            // Cache the setter function
                            col._setter = _fnSetObjectDataFn( col.mData );
                        }
                        col._setter( d, contents );
                    }
                    else {
                        d[i] = contents;
                    }
                }
            }

            i++;
        };

        if ( td ) {
            // `tr` element was passed in
            while ( td ) {
                name = td.nodeName.toUpperCase();

                if ( name == "TD" || name == "TH" ) {
                    cellProcess( td );
                    tds.push( td );
                }

                td = td.nextSibling;
            }
        }
        else {
            // Existing row object passed in
            tds = row.anCells;

            for ( var j=0, jen=tds.length ; j<jen ; j++ ) {
                cellProcess( tds[j] );
            }
        }

        // Read the ID from the DOM if present
        var rowNode = row.firstChild ? row : row.nTr;

        if ( rowNode ) {
            var id = rowNode.getAttribute( 'id' );

            if ( id ) {
                _fnSetObjectDataFn( settings.rowId )( d, id );
            }
        }

        return {
            data: d,
            cells: tds
        };
    }
    /**
     * Create a new TR element (and it's TD children) for a row
     *  @param {object} oSettings dataTables settings object
     *  @param {int} iRow Row to consider
     *  @param {node} [nTrIn] TR element to add to the table - optional. If not given,
     *    DataTables will create a row automatically
     *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
     *    if nTr is.
     *  @memberof DataTable#oApi
     */
    function _fnCreateTr ( oSettings, iRow, nTrIn, anTds )
    {
        var
            row = oSettings.aoData[iRow],
            rowData = row._aData,
            cells = [],
            nTr, nTd, oCol,
            i, iLen;

        if ( row.nTr === null )
        {
            nTr = nTrIn || document.createElement('tr');

            row.nTr = nTr;
            row.anCells = cells;

            /* Use a private property on the node to allow reserve mapping from the node
             * to the aoData array for fast look up
             */
            nTr._DT_RowIndex = iRow;

            /* Special parameters can be given by the data source to be used on the row */
            _fnRowAttributes( oSettings, row );

            /* Process each column */
            for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
            {
                oCol = oSettings.aoColumns[i];

                nTd = nTrIn ? anTds[i] : document.createElement( oCol.sCellType );
                nTd._DT_CellIndex = {
                    row: iRow,
                    column: i
                };

                cells.push( nTd );

                // Need to create the HTML if new, or if a rendering function is defined
                if ( (!nTrIn || oCol.mRender || oCol.mData !== i) &&
                    (!$.isPlainObject(oCol.mData) || oCol.mData._ !== i+'.display')
                ) {
                    nTd.innerHTML = _fnGetCellData( oSettings, iRow, i, 'display' );
                }

                /* Add user defined class */
                if ( oCol.sClass )
                {
                    nTd.className += ' '+oCol.sClass;
                }

                // Visibility - add or remove as required
                if ( oCol.bVisible && ! nTrIn )
                {
                    nTr.appendChild( nTd );
                }
                else if ( ! oCol.bVisible && nTrIn )
                {
                    nTd.parentNode.removeChild( nTd );
                }

                if ( oCol.fnCreatedCell )
                {
                    oCol.fnCreatedCell.call( oSettings.oInstance,
                        nTd, _fnGetCellData( oSettings, iRow, i ), rowData, iRow, i
                    );
                }
            }

            _fnCallbackFire( oSettings, 'aoRowCreatedCallback', null, [nTr, rowData, iRow] );
        }

        // Remove once webkit bug 131819 and Chromium bug 365619 have been resolved
        // and deployed
        row.nTr.setAttribute( 'role', 'row' );
    }


    /**
     * Add attributes to a row based on the special `DT_*` parameters in a data
     * source object.
     *  @param {object} settings DataTables settings object
     *  @param {object} DataTables row object for the row to be modified
     *  @memberof DataTable#oApi
     */
    function _fnRowAttributes( settings, row )
    {
        var tr = row.nTr;
        var data = row._aData;

        if ( tr ) {
            var id = settings.rowIdFn( data );

            if ( id ) {
                tr.id = id;
            }

            if ( data.DT_RowClass ) {
                // Remove any classes added by DT_RowClass before
                var a = data.DT_RowClass.split(' ');
                row.__rowc = row.__rowc ?
                    _unique( row.__rowc.concat( a ) ) :
                    a;

                $(tr)
                    .removeClass( row.__rowc.join(' ') )
                    .addClass( data.DT_RowClass );
            }

            if ( data.DT_RowAttr ) {
                $(tr).attr( data.DT_RowAttr );
            }

            if ( data.DT_RowData ) {
                $(tr).data( data.DT_RowData );
            }
        }
    }


    /**
     * Create the HTML header for the table
     *  @param {object} oSettings dataTables settings object
     *  @memberof DataTable#oApi
     */
    function _fnBuildHead( oSettings )
    {
        var i, ien, cell, row, column;
        var thead = oSettings.nTHead;
        var tfoot = oSettings.nTFoot;
        var createHeader = $('th, td', thead).length === 0;
        var classes = oSettings.oClasses;
        var columns = oSettings.aoColumns;

        if ( createHeader ) {
            row = $('<tr/>').appendTo( thead );
        }

        for ( i=0, ien=columns.length ; i<ien ; i++ ) {
            column = columns[i];
            cell = $( column.nTh ).addClass( column.sClass );

            if ( createHeader ) {
                cell.appendTo( row );
            }

            // 1.11 move into sorting
            if ( oSettings.oFeatures.bSort ) {
                cell.addClass( column.sSortingClass );

                if ( column.bSortable !== false ) {
                    cell
                        .attr( 'tabindex', oSettings.iTabIndex )
                        .attr( 'aria-controls', oSettings.sTableId );

                    _fnSortAttachListener( oSettings, column.nTh, i );
                }
            }

            if ( column.sTitle != cell[0].innerHTML ) {
                cell.html( column.sTitle );
            }

            _fnRenderer( oSettings, 'header' )(
                oSettings, cell, column, classes
            );
        }

        if ( createHeader ) {
            _fnDetectHeader( oSettings.aoHeader, thead );
        }

        /* ARIA role for the rows */
        $(thead).find('>tr').attr('role', 'row');

        /* Deal with the footer - add classes if required */
        $(thead).find('>tr>th, >tr>td').addClass( classes.sHeaderTH );
        $(tfoot).find('>tr>th, >tr>td').addClass( classes.sFooterTH );

        // Cache the footer cells. Note that we only take the cells from the first
        // row in the footer. If there is more than one row the user wants to
        // interact with, they need to use the table().foot() method. Note also this
        // allows cells to be used for multiple columns using colspan
        if ( tfoot !== null ) {
            var cells = oSettings.aoFooter[0];

            for ( i=0, ien=cells.length ; i<ien ; i++ ) {
                column = columns[i];
                column.nTf = cells[i].cell;

                if ( column.sClass ) {
                    $(column.nTf).addClass( column.sClass );
                }
            }
        }
    }


    /**
     * Draw the header (or footer) element based on the column visibility states. The
     * methodology here is to use the layout array from _fnDetectHeader, modified for
     * the instantaneous column visibility, to construct the new layout. The grid is
     * traversed over cell at a time in a rows x columns grid fashion, although each
     * cell insert can cover multiple elements in the grid - which is tracks using the
     * aApplied array. Cell inserts in the grid will only occur where there isn't
     * already a cell in that position.
     *  @param {object} oSettings dataTables settings object
     *  @param array {objects} aoSource Layout array from _fnDetectHeader
     *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc,
     *  @memberof DataTable#oApi
     */
    function _fnDrawHead( oSettings, aoSource, bIncludeHidden )
    {
        var i, iLen, j, jLen, k, kLen, n, nLocalTr;
        var aoLocal = [];
        var aApplied = [];
        var iColumns = oSettings.aoColumns.length;
        var iRowspan, iColspan;

        if ( ! aoSource )
        {
            return;
        }

        if (  bIncludeHidden === undefined )
        {
            bIncludeHidden = false;
        }

        /* Make a copy of the master layout array, but without the visible columns in it */
        for ( i=0, iLen=aoSource.length ; i<iLen ; i++ )
        {
            aoLocal[i] = aoSource[i].slice();
            aoLocal[i].nTr = aoSource[i].nTr;

            /* Remove any columns which are currently hidden */
            for ( j=iColumns-1 ; j>=0 ; j-- )
            {
                if ( !oSettings.aoColumns[j].bVisible && !bIncludeHidden )
                {
                    aoLocal[i].splice( j, 1 );
                }
            }

            /* Prep the applied array - it needs an element for each row */
            aApplied.push( [] );
        }

        for ( i=0, iLen=aoLocal.length ; i<iLen ; i++ )
        {
            nLocalTr = aoLocal[i].nTr;

            /* All cells are going to be replaced, so empty out the row */
            if ( nLocalTr )
            {
                while( (n = nLocalTr.firstChild) )
                {
                    nLocalTr.removeChild( n );
                }
            }

            for ( j=0, jLen=aoLocal[i].length ; j<jLen ; j++ )
            {
                iRowspan = 1;
                iColspan = 1;

                /* Check to see if there is already a cell (row/colspan) covering our target
                 * insert point. If there is, then there is nothing to do.
                 */
                if ( aApplied[i][j] === undefined )
                {
                    nLocalTr.appendChild( aoLocal[i][j].cell );
                    aApplied[i][j] = 1;

                    /* Expand the cell to cover as many rows as needed */
                    while ( aoLocal[i+iRowspan] !== undefined &&
                    aoLocal[i][j].cell == aoLocal[i+iRowspan][j].cell )
                    {
                        aApplied[i+iRowspan][j] = 1;
                        iRowspan++;
                    }

                    /* Expand the cell to cover as many columns as needed */
                    while ( aoLocal[i][j+iColspan] !== undefined &&
                    aoLocal[i][j].cell == aoLocal[i][j+iColspan].cell )
                    {
                        /* Must update the applied array over the rows for the columns */
                        for ( k=0 ; k<iRowspan ; k++ )
                        {
                            aApplied[i+k][j+iColspan] = 1;
                        }
                        iColspan++;
                    }

                    /* Do the actual expansion in the DOM */
                    $(aoLocal[i][j].cell)
                        .attr('rowspan', iRowspan)
                        .attr('colspan', iColspan);
                }
            }
        }
    }


    /**
     * Insert the required TR nodes into the table for display
     *  @param {object} oSettings dataTables settings object
     *  @memberof DataTable#oApi
     */
    function _fnDraw( oSettings )
    {
        /* Provide a pre-callback function which can be used to cancel the draw is false is returned */
        var aPreDraw = _fnCallbackFire( oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings] );
        if ( $.inArray( false, aPreDraw ) !== -1 )
        {
            _fnProcessingDisplay( oSettings, false );
            return;
        }

        var i, iLen, n;
        var anRows = [];
        var iRowCount = 0;
        var asStripeClasses = oSettings.asStripeClasses;
        var iStripes = asStripeClasses.length;
        var iOpenRows = oSettings.aoOpenRows.length;
        var oLang = oSettings.oLanguage;
        var iInitDisplayStart = oSettings.iInitDisplayStart;
        var bServerSide = _fnDataSource( oSettings ) == 'ssp';
        var aiDisplay = oSettings.aiDisplay;

        oSettings.bDrawing = true;

        /* Check and see if we have an initial draw position from state saving */
        if ( iInitDisplayStart !== undefined && iInitDisplayStart !== -1 )
        {
            oSettings._iDisplayStart = bServerSide ?
                iInitDisplayStart :
                iInitDisplayStart >= oSettings.fnRecordsDisplay() ?
                    0 :
                    iInitDisplayStart;

            oSettings.iInitDisplayStart = -1;
        }

        var iDisplayStart = oSettings._iDisplayStart;
        var iDisplayEnd = oSettings.fnDisplayEnd();

        /* Server-side processing draw intercept */
        if ( oSettings.bDeferLoading )
        {
            oSettings.bDeferLoading = false;
            oSettings.iDraw++;
            _fnProcessingDisplay( oSettings, false );
        }
        else if ( !bServerSide )
        {
            oSettings.iDraw++;
        }
        else if ( !oSettings.bDestroying && !_fnAjaxUpdate( oSettings ) )
        {
            return;
        }

        if ( aiDisplay.length !== 0 )
        {
            var iStart = bServerSide ? 0 : iDisplayStart;
            var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;

            for ( var j=iStart ; j<iEnd ; j++ )
            {
                var iDataIndex = aiDisplay[j];
                var aoData = oSettings.aoData[ iDataIndex ];
                if ( aoData.nTr === null )
                {
                    _fnCreateTr( oSettings, iDataIndex );
                }

                var nRow = aoData.nTr;

                /* Remove the old striping classes and then add the new one */
                if ( iStripes !== 0 )
                {
                    var sStripe = asStripeClasses[ iRowCount % iStripes ];
                    if ( aoData._sRowStripe != sStripe )
                    {
                        $(nRow).removeClass( aoData._sRowStripe ).addClass( sStripe );
                        aoData._sRowStripe = sStripe;
                    }
                }

                // Row callback functions - might want to manipulate the row
                // iRowCount and j are not currently documented. Are they at all
                // useful?
                _fnCallbackFire( oSettings, 'aoRowCallback', null,
                    [nRow, aoData._aData, iRowCount, j] );

                anRows.push( nRow );
                iRowCount++;
            }
        }
        else
        {
            /* Table is empty - create a row with an empty message in it */
            var sZero = oLang.sZeroRecords;
            if ( oSettings.iDraw == 1 &&  _fnDataSource( oSettings ) == 'ajax' )
            {
                sZero = oLang.sLoadingRecords;
            }
            else if ( oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0 )
            {
                sZero = oLang.sEmptyTable;
            }

            anRows[ 0 ] = $( '<tr/>', { 'class': iStripes ? asStripeClasses[0] : '' } )
                .append( $('<td />', {
                    'valign':  'top',
                    'colSpan': _fnVisbleColumns( oSettings ),
                    'class':   oSettings.oClasses.sRowEmpty
                } ).html( sZero ) )[0];
        }

        /* Header and footer callbacks */
        _fnCallbackFire( oSettings, 'aoHeaderCallback', 'header', [ $(oSettings.nTHead).children('tr')[0],
            _fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );

        _fnCallbackFire( oSettings, 'aoFooterCallback', 'footer', [ $(oSettings.nTFoot).children('tr')[0],
            _fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );

        var body = $(oSettings.nTBody);

        body.children().detach();
        body.append( $(anRows) );

        /* Call all required callback functions for the end of a draw */
        _fnCallbackFire( oSettings, 'aoDrawCallback', 'draw', [oSettings] );

        /* Draw is complete, sorting and filtering must be as well */
        oSettings.bSorted = false;
        oSettings.bFiltered = false;
        oSettings.bDrawing = false;
    }


    /**
     * Redraw the table - taking account of the various features which are enabled
     *  @param {object} oSettings dataTables settings object
     *  @param {boolean} [holdPosition] Keep the current paging position. By default
     *    the paging is reset to the first page
     *  @memberof DataTable#oApi
     */
    function _fnReDraw( settings, holdPosition )
    {
        var
            features = settings.oFeatures,
            sort     = features.bSort,
            filter   = features.bFilter;

        if ( sort ) {
            _fnSort( settings );
        }

        if ( filter ) {
            _fnFilterComplete( settings, settings.oPreviousSearch );
        }
        else {
            // No filtering, so we want to just use the display master
            settings.aiDisplay = settings.aiDisplayMaster.slice();
        }

        if ( holdPosition !== true ) {
            settings._iDisplayStart = 0;
        }

        // Let any modules know about the draw hold position state (used by
        // scrolling internally)
        settings._drawHold = holdPosition;

        _fnDraw( settings );

        settings._drawHold = false;
    }


    /**
     * Add the options to the page HTML for the table
     *  @param {object} oSettings dataTables settings object
     *  @memberof DataTable#oApi
     */
    function _fnAddOptionsHtml ( oSettings )
    {
        var classes = oSettings.oClasses;
        var table = $(oSettings.nTable);
        var holding = $('<div/>').insertBefore( table ); // Holding element for speed
        var features = oSettings.oFeatures;

        // All DataTables are wrapped in a div
        var insert = $('<div/>', {
            id:      oSettings.sTableId+'_wrapper',
            'class': classes.sWrapper + (oSettings.nTFoot ? '' : ' '+classes.sNoFooter)
        } );

        oSettings.nHolding = holding[0];
        oSettings.nTableWrapper = insert[0];
        oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;

        /* Loop over the user set positioning and place the elements as needed */
        var aDom = oSettings.sDom.split('');
        var featureNode, cOption, nNewNode, cNext, sAttr, j;
        for ( var i=0 ; i<aDom.length ; i++ )
        {
            featureNode = null;
            cOption = aDom[i];

            if ( cOption == '<' )
            {
                /* New container div */
                nNewNode = $('<div/>')[0];

                /* Check to see if we should append an id and/or a class name to the container */
                cNext = aDom[i+1];
                if ( cNext == "'" || cNext == '"' )
                {
                    sAttr = "";
                    j = 2;
                    while ( aDom[i+j] != cNext )
                    {
                        sAttr += aDom[i+j];
                        j++;
                    }

                    /* Replace jQuery UI constants @todo depreciated */
                    if ( sAttr == "H" )
                    {
                        sAttr = classes.sJUIHeader;
                    }
                    else if ( sAttr == "F" )
                    {
                        sAttr = classes.sJUIFooter;
                    }

                    /* The attribute can be in the format of "#id.class", "#id" or "class" This logic
                     * breaks the string into parts and applies them as needed
                     */
                    if ( sAttr.indexOf('.') != -1 )
                    {
                        var aSplit = sAttr.split('.');
                        nNewNode.id = aSplit[0].substr(1, aSplit[0].length-1);
                        nNewNode.className = aSplit[1];
                    }
                    else if ( sAttr.charAt(0) == "#" )
                    {
                        nNewNode.id = sAttr.substr(1, sAttr.length-1);
                    }
                    else
                    {
                        nNewNode.className = sAttr;
                    }

                    i += j; /* Move along the position array */
                }

                insert.append( nNewNode );
                insert = $(nNewNode);
            }
            else if ( cOption == '>' )
            {
                /* End container div */
                insert = insert.parent();
            }
            // @todo Move options into their own plugins?
            else if ( cOption == 'l' && features.bPaginate && features.bLengthChange )
            {
                /* Length */
                featureNode = _fnFeatureHtmlLength( oSettings );
            }
            else if ( cOption == 'f' && features.bFilter )
            {
                /* Filter */
                featureNode = _fnFeatureHtmlFilter( oSettings );
            }
            else if ( cOption == 'r' && features.bProcessing )
            {
                /* pRocessing */
                featureNode = _fnFeatureHtmlProcessing( oSettings );
            }
            else if ( cOption == 't' )
            {
                /* Table */
                featureNode = _fnFeatureHtmlTable( oSettings );
            }
            else if ( cOption ==  'i' && features.bInfo )
            {
                /* Info */
                featureNode = _fnFeatureHtmlInfo( oSettings );
            }
            else if ( cOption == 'p' && features.bPaginate )
            {
                /* Pagination */
                featureNode = _fnFeatureHtmlPaginate( oSettings );
            }
            else if ( DataTable.ext.feature.length !== 0 )
            {
                /* Plug-in features */
                var aoFeatures = DataTable.ext.feature;
                for ( var k=0, kLen=aoFeatures.length ; k<kLen ; k++ )
                {
                    if ( cOption == aoFeatures[k].cFeature )
                    {
                        featureNode = aoFeatures[k].fnInit( oSettings );
                        break;
                    }
                }
            }

            /* Add to the 2D features array */
            if ( featureNode )
            {
                var aanFeatures = oSettings.aanFeatures;

                if ( ! aanFeatures[cOption] )
                {
                    aanFeatures[cOption] = [];
                }

                aanFeatures[cOption].push( featureNode );
                insert.append( featureNode );
            }
        }

        /* Built our DOM structure - replace the holding div with what we want */
        holding.replaceWith( insert );
        oSettings.nHolding = null;
    }


    /**
     * Use the DOM source to create up an array of header cells. The idea here is to
     * create a layout grid (array) of rows x columns, which contains a reference
     * to the cell that that point in the grid (regardless of col/rowspan), such that
     * any column / row could be removed and the new grid constructed
     *  @param array {object} aLayout Array to store the calculated layout in
     *  @param {node} nThead The header/footer element for the table
     *  @memberof DataTable#oApi
     */
    function _fnDetectHeader ( aLayout, nThead )
    {
        var nTrs = $(nThead).children('tr');
        var nTr, nCell;
        var i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;
        var bUnique;
        var fnShiftCol = function ( a, i, j ) {
            var k = a[i];
            while ( k[j] ) {
                j++;
            }
            return j;
        };

        aLayout.splice( 0, aLayout.length );

        /* We know how many rows there are in the layout - so prep it */
        for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
        {
            aLayout.push( [] );
        }

        /* Calculate a layout array */
        for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
        {
            nTr = nTrs[i];
            iColumn = 0;

            /* For every cell in the row... */
            nCell = nTr.firstChild;
            while ( nCell ) {
                if ( nCell.nodeName.toUpperCase() == "TD" ||
                    nCell.nodeName.toUpperCase() == "TH" )
                {
                    /* Get the col and rowspan attributes from the DOM and sanitise them */
                    iColspan = nCell.getAttribute('colspan') * 1;
                    iRowspan = nCell.getAttribute('rowspan') * 1;
                    iColspan = (!iColspan || iColspan===0 || iColspan===1) ? 1 : iColspan;
                    iRowspan = (!iRowspan || iRowspan===0 || iRowspan===1) ? 1 : iRowspan;

                    /* There might be colspan cells already in this row, so shift our target
                     * accordingly
                     */
                    iColShifted = fnShiftCol( aLayout, i, iColumn );

                    /* Cache calculation for unique columns */
                    bUnique = iColspan === 1 ? true : false;

                    /* If there is col / rowspan, copy the information into the layout grid */
                    for ( l=0 ; l<iColspan ; l++ )
                    {
                        for ( k=0 ; k<iRowspan ; k++ )
                        {
                            aLayout[i+k][iColShifted+l] = {
                                "cell": nCell,
                                "unique": bUnique
                            };
                            aLayout[i+k].nTr = nTr;
                        }
                    }
                }
                nCell = nCell.nextSibling;
            }
        }
    }


    /**
     * Get an array of unique th elements, one for each column
     *  @param {object} oSettings dataTables settings object
     *  @param {node} nHeader automatically detect the layout from this node - optional
     *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional
     *  @returns array {node} aReturn list of unique th's
     *  @memberof DataTable#oApi
     */
    function _fnGetUniqueThs ( oSettings, nHeader, aLayout )
    {
        var aReturn = [];
        if ( !aLayout )
        {
            aLayout = oSettings.aoHeader;
            if ( nHeader )
            {
                aLayout = [];
                _fnDetectHeader( aLayout, nHeader );
            }
        }

        for ( var i=0, iLen=aLayout.length ; i<iLen ; i++ )
        {
            for ( var j=0, jLen=aLayout[i].length ; j<jLen ; j++ )
            {
                if ( aLayout[i][j].unique &&
                    (!aReturn[j] || !oSettings.bSortCellsTop) )
                {
                    aReturn[j] = aLayout[i][j].cell;
                }
            }
        }

        return aReturn;
    }

    /**
     * Create an Ajax call based on the table's settings, taking into account that
     * parameters can have multiple forms, and backwards compatibility.
     *
     * @param {object} oSettings dataTables settings object
     * @param {array} data Data to send to the server, required by
     *     DataTables - may be augmented by developer callbacks
     * @param {function} fn Callback function to run when data is obtained
     */
    function _fnBuildAjax( oSettings, data, fn )
    {
        // Compatibility with 1.9-, allow fnServerData and event to manipulate
        _fnCallbackFire( oSettings, 'aoServerParams', 'serverParams', [data] );

        // Convert to object based for 1.10+ if using the old array scheme which can
        // come from server-side processing or serverParams
        if ( data && $.isArray(data) ) {
            var tmp = {};
            var rbracket = /(.*?)\[\]$/;

            $.each( data, function (key, val) {
                var match = val.name.match(rbracket);

                if ( match ) {
                    // Support for arrays
                    var name = match[0];

                    if ( ! tmp[ name ] ) {
                        tmp[ name ] = [];
                    }
                    tmp[ name ].push( val.value );
                }
                else {
                    tmp[val.name] = val.value;
                }
            } );
            data = tmp;
        }

        var ajaxData;
        var ajax = oSettings.ajax;
        var instance = oSettings.oInstance;
        var callback = function ( json ) {
            _fnCallbackFire( oSettings, null, 'xhr', [oSettings, json, oSettings.jqXHR] );
            fn( json );
        };

        if ( $.isPlainObject( ajax ) && ajax.data )
        {
            ajaxData = ajax.data;

            var newData = $.isFunction( ajaxData ) ?
                ajaxData( data, oSettings ) :  // fn can manipulate data or return
                ajaxData;                      // an object object or array to merge

            // If the function returned something, use that alone
            data = $.isFunction( ajaxData ) && newData ?
                newData :
                $.extend( true, data, newData );

            // Remove the data property as we've resolved it already and don't want
            // jQuery to do it again (it is restored at the end of the function)
            delete ajax.data;
        }

        var baseAjax = {
            "data": data,
            "success": function (json) {
                var error = json.error || json.sError;
                if ( error ) {
                    _fnLog( oSettings, 0, error );
                }

                oSettings.json = json;
                callback( json );
            },
            "dataType": "json",
            "cache": false,
            "type": oSettings.sServerMethod,
            "error": function (xhr, error, thrown) {
                var ret = _fnCallbackFire( oSettings, null, 'xhr', [oSettings, null, oSettings.jqXHR] );

                if ( $.inArray( true, ret ) === -1 ) {
                    if ( error == "parsererror" ) {
                        _fnLog( oSettings, 0, 'Invalid JSON response', 1 );
                    }
                    else if ( xhr.readyState === 4 ) {
                        _fnLog( oSettings, 0, 'Ajax error', 7 );
                    }
                }

                _fnProcessingDisplay( oSettings, false );
            }
        };

        // Store the data submitted for the API
        oSettings.oAjaxData = data;

        // Allow plug-ins and external processes to modify the data
        _fnCallbackFire( oSettings, null, 'preXhr', [oSettings, data] );

        if ( oSettings.fnServerData )
        {
            // DataTables 1.9- compatibility
            oSettings.fnServerData.call( instance,
                oSettings.sAjaxSource,
                $.map( data, function (val, key) { // Need to convert back to 1.9 trad format
                    return { name: key, value: val };
                } ),
                callback,
                oSettings
            );
        }
        else if ( oSettings.sAjaxSource || typeof ajax === 'string' )
        {
            // DataTables 1.9- compatibility
            oSettings.jqXHR = $.ajax( $.extend( baseAjax, {
                url: ajax || oSettings.sAjaxSource
            } ) );
        }
        else if ( $.isFunction( ajax ) )
        {
            // Is a function - let the caller define what needs to be done
            oSettings.jqXHR = ajax.call( instance, data, callback, oSettings );
        }
        else
        {
            // Object to extend the base settings
            oSettings.jqXHR = $.ajax( $.extend( baseAjax, ajax ) );

            // Restore for next time around
            ajax.data = ajaxData;
        }
    }


    /**
     * Update the table using an Ajax call
     *  @param {object} settings dataTables settings object
     *  @returns {boolean} Block the table drawing or not
     *  @memberof DataTable#oApi
     */
    function _fnAjaxUpdate( settings )
    {
        if ( settings.bAjaxDataGet ) {
            settings.iDraw++;
            _fnProcessingDisplay( settings, true );

            _fnBuildAjax(
                settings,
                _fnAjaxParameters( settings ),
                function(json) {
                    _fnAjaxUpdateDraw( settings, json );
                }
            );

            return false;
        }
        return true;
    }


    /**
     * Build up the parameters in an object needed for a server-side processing
     * request. Note that this is basically done twice, is different ways - a modern
     * method which is used by default in DataTables 1.10 which uses objects and
     * arrays, or the 1.9- method with is name / value pairs. 1.9 method is used if
     * the sAjaxSource option is used in the initialisation, or the legacyAjax
     * option is set.
     *  @param {object} oSettings dataTables settings object
     *  @returns {bool} block the table drawing or not
     *  @memberof DataTable#oApi
     */
    function _fnAjaxParameters( settings )
    {
        var
            columns = settings.aoColumns,
            columnCount = columns.length,
            features = settings.oFeatures,
            preSearch = settings.oPreviousSearch,
            preColSearch = settings.aoPreSearchCols,
            i, data = [], dataProp, column, columnSearch,
            sort = _fnSortFlatten( settings ),
            displayStart = settings._iDisplayStart,
            displayLength = features.bPaginate !== false ?
                settings._iDisplayLength :
                -1;

        var param = function ( name, value ) {
            data.push( { 'name': name, 'value': value } );
        };

        // DataTables 1.9- compatible method
        param( 'sEcho',          settings.iDraw );
        param( 'iColumns',       columnCount );
        param( 'sColumns',       _pluck( columns, 'sName' ).join(',') );
        param( 'iDisplayStart',  displayStart );
        param( 'iDisplayLength', displayLength );

        // DataTables 1.10+ method
        var d = {
            draw:    settings.iDraw,
            columns: [],
            order:   [],
            start:   displayStart,
            length:  displayLength,
            search:  {
                value: preSearch.sSearch,
                regex: preSearch.bRegex
            }
        };

        for ( i=0 ; i<columnCount ; i++ ) {
            column = columns[i];
            columnSearch = preColSearch[i];
            dataProp = typeof column.mData=="function" ? 'function' : column.mData ;

            d.columns.push( {
                data:       dataProp,
                name:       column.sName,
                searchable: column.bSearchable,
                orderable:  column.bSortable,
                search:     {
                    value: columnSearch.sSearch,
                    regex: columnSearch.bRegex
                }
            } );

            param( "mDataProp_"+i, dataProp );

            if ( features.bFilter ) {
                param( 'sSearch_'+i,     columnSearch.sSearch );
                param( 'bRegex_'+i,      columnSearch.bRegex );
                param( 'bSearchable_'+i, column.bSearchable );
            }

            if ( features.bSort ) {
                param( 'bSortable_'+i, column.bSortable );
            }
        }

        if ( features.bFilter ) {
            param( 'sSearch', preSearch.sSearch );
            param( 'bRegex', preSearch.bRegex );
        }

        if ( features.bSort ) {
            $.each( sort, function ( i, val ) {
                d.order.push( { column: val.col, dir: val.dir } );

                param( 'iSortCol_'+i, val.col );
                param( 'sSortDir_'+i, val.dir );
            } );

            param( 'iSortingCols', sort.length );
        }

        // If the legacy.ajax parameter is null, then we automatically decide which
        // form to use, based on sAjaxSource
        var legacy = DataTable.ext.legacy.ajax;
        if ( legacy === null ) {
            return settings.sAjaxSource ? data : d;
        }

        // Otherwise, if legacy has been specified then we use that to decide on the
        // form
        return legacy ? data : d;
    }


    /**
     * Data the data from the server (nuking the old) and redraw the table
     *  @param {object} oSettings dataTables settings object
     *  @param {object} json json data return from the server.
     *  @param {string} json.sEcho Tracking flag for DataTables to match requests
     *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering
     *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering
     *  @param {array} json.aaData The data to display on this page
     *  @param {string} [json.sColumns] Column ordering (sName, comma separated)
     *  @memberof DataTable#oApi
     */
    function _fnAjaxUpdateDraw ( settings, json )
    {
        // v1.10 uses camelCase variables, while 1.9 uses Hungarian notation.
        // Support both
        var compat = function ( old, modern ) {
            return json[old] !== undefined ? json[old] : json[modern];
        };

        var data = _fnAjaxDataSrc( settings, json );
        var draw            = compat( 'sEcho',                'draw' );
        var recordsTotal    = compat( 'iTotalRecords',        'recordsTotal' );
        var recordsFiltered = compat( 'iTotalDisplayRecords', 'recordsFiltered' );

        if ( draw ) {
            // Protect against out of sequence returns
            if ( draw*1 < settings.iDraw ) {
                return;
            }
            settings.iDraw = draw * 1;
        }

        _fnClearTable( settings );
        settings._iRecordsTotal   = parseInt(recordsTotal, 10);
        settings._iRecordsDisplay = parseInt(recordsFiltered, 10);

        for ( var i=0, ien=data.length ; i<ien ; i++ ) {
            _fnAddData( settings, data[i] );
        }
        settings.aiDisplay = settings.aiDisplayMaster.slice();

        settings.bAjaxDataGet = false;
        _fnDraw( settings );

        if ( ! settings._bInitComplete ) {
            _fnInitComplete( settings, json );
        }

        settings.bAjaxDataGet = true;
        _fnProcessingDisplay( settings, false );
    }


    /**
     * Get the data from the JSON data source to use for drawing a table. Using
     * `_fnGetObjectDataFn` allows the data to be sourced from a property of the
     * source object, or from a processing function.
     *  @param {object} oSettings dataTables settings object
     *  @param  {object} json Data source object / array from the server
     *  @return {array} Array of data to use
     */
    function _fnAjaxDataSrc ( oSettings, json )
    {
        var dataSrc = $.isPlainObject( oSettings.ajax ) && oSettings.ajax.dataSrc !== undefined ?
            oSettings.ajax.dataSrc :
            oSettings.sAjaxDataProp; // Compatibility with 1.9-.

        // Compatibility with 1.9-. In order to read from aaData, check if the
        // default has been changed, if not, check for aaData
        if ( dataSrc === 'data' ) {
            return json.aaData || json[dataSrc];
        }

        return dataSrc !== "" ?
            _fnGetObjectDataFn( dataSrc )( json ) :
            json;
    }

    /**
     * Generate the node required for filtering text
     *  @returns {node} Filter control element
     *  @param {object} oSettings dataTables settings object
     *  @memberof DataTable#oApi
     */
    function _fnFeatureHtmlFilter ( settings )
    {
        var classes = settings.oClasses;
        var tableId = settings.sTableId;
        var language = settings.oLanguage;
        var previousSearch = settings.oPreviousSearch;
        var features = settings.aanFeatures;
        var input = '<input type="search" class="'+classes.sFilterInput+'"/>';

        var str = language.sSearch;
        str = str.match(/_INPUT_/) ?
            str.replace('_INPUT_', input) :
        str+input;

        var filter = $('<div/>', {
            'id': ! features.f ? tableId+'_filter' : null,
            'class': classes.sFilter
        } )
            .append( $('<label/>' ).append( str ) );

        var searchFn = function() {
            /* Update all other filter input elements for the new display */
            var n = features.f;
            var val = !this.value ? "" : this.value; // mental IE8 fix :-(

            /* Now do the filter */
            if ( val != previousSearch.sSearch ) {
                _fnFilterComplete( settings, {
                    "sSearch": val,
                    "bRegex": previousSearch.bRegex,
                    "bSmart": previousSearch.bSmart ,
                    "bCaseInsensitive": previousSearch.bCaseInsensitive
                } );

                // Need to redraw, without resorting
                settings._iDisplayStart = 0;
                _fnDraw( settings );
            }
        };

        var searchDelay = settings.searchDelay !== null ?
            settings.searchDelay :
            _fnDataSource( settings ) === 'ssp' ?
                400 :
                0;

        var jqFilter = $('input', filter)
            .val( previousSearch.sSearch )
            .attr( 'placeholder', language.sSearchPlaceholder )
            .bind(
            'keyup.DT search.DT input.DT paste.DT cut.DT',
            searchDelay ?
                _fnThrottle( searchFn, searchDelay ) :
                searchFn
        )
            .bind( 'keypress.DT', function(e) {
                /* Prevent form submission */
                if ( e.keyCode == 13 ) {
                    return false;
                }
            } )
            .attr('aria-controls', tableId);

        // Update the input elements whenever the table is filtered
        $(settings.nTable).on( 'search.dt.DT', function ( ev, s ) {
            if ( settings === s ) {
                // IE9 throws an 'unknown error' if document.activeElement is used
                // inside an iframe or frame...
                try {
                    if ( jqFilter[0] !== document.activeElement ) {
                        jqFilter.val( previousSearch.sSearch );
                    }
                }
                catch ( e ) {}
            }
        } );

        return filter[0];
    }


    /**
     * Filter the table using both the global filter and column based filtering
     *  @param {object} oSettings dataTables settings object
     *  @param {object} oSearch search information
     *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)
     *  @memberof DataTable#oApi
     */
    function _fnFilterComplete ( oSettings, oInput, iForce )
    {
        var oPrevSearch = oSettings.oPreviousSearch;
        var aoPrevSearch = oSettings.aoPreSearchCols;
        var fnSaveFilter = function ( oFilter ) {
            /* Save the filtering values */
            oPrevSearch.sSearch = oFilter.sSearch;
            oPrevSearch.bRegex = oFilter.bRegex;
            oPrevSearch.bSmart = oFilter.bSmart;
            oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
        };
        var fnRegex = function ( o ) {
            // Backwards compatibility with the bEscapeRegex option
            return o.bEscapeRegex !== undefined ? !o.bEscapeRegex : o.bRegex;
        };

        // Resolve any column types that are unknown due to addition or invalidation
        // @todo As per sort - can this be moved into an event handler?
        _fnColumnTypes( oSettings );

        /* In server-side processing all filtering is done by the server, so no point hanging around here */
        if ( _fnDataSource( oSettings ) != 'ssp' )
        {
            /* Global filter */
            _fnFilter( oSettings, oInput.sSearch, iForce, fnRegex(oInput), oInput.bSmart, oInput.bCaseInsensitive );
            fnSaveFilter( oInput );

            /* Now do the individual column filter */
            for ( var i=0 ; i<aoPrevSearch.length ; i++ )
            {
                _fnFilterColumn( oSettings, aoPrevSearch[i].sSearch, i, fnRegex(aoPrevSearch[i]),
                    aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive );
            }

            /* Custom filtering */
            _fnFilterCustom( oSettings );
        }
        else
        {
            fnSaveFilter( oInput );
        }

        /* Tell the draw function we have been filtering */
        oSettings.bFiltered = true;
        _fnCallbackFire( oSettings, null, 'search', [oSettings] );
    }


    /**
     * Apply custom filtering functions
     *  @param {object} oSettings dataTables settings object
     *  @memberof DataTable#oApi
     */
    function _fnFilterCustom( settings )
    {
        var filters = DataTable.ext.search;
        var displayRows = settings.aiDisplay;
        var row, rowIdx;

        for ( var i=0, ien=filters.length ; i<ien ; i++ ) {
            var rows = [];

            // Loop over each row and see if it should be included
            for ( var j=0, jen=displayRows.length ; j<jen ; j++ ) {
                rowIdx = displayRows[ j ];
                row = settings.aoData[ rowIdx ];

                if ( filters[i]( settings, row._aFilterData, rowIdx, row._aData, j ) ) {
                    rows.push( rowIdx );
                }
            }

            // So the array reference doesn't break set the results into the
            // existing array
            displayRows.length = 0;
            $.merge( displayRows, rows );
        }
    }


    /**
     * Filter the table on a per-column basis
     *  @param {object} oSettings dataTables settings object
     *  @param {string} sInput string to filter on
     *  @param {int} iColumn column to filter
     *  @param {bool} bRegex treat search string as a regular expression or not
     *  @param {bool} bSmart use smart filtering or not
     *  @param {bool} bCaseInsensitive Do case insenstive matching or not
     *  @memberof DataTable#oApi
     */
    function _fnFilterColumn ( settings, searchStr, colIdx, regex, smart, caseInsensitive )
    {
        if ( searchStr === '' ) {
            return;
        }

        var data;
        var display = settings.aiDisplay;
        var rpSearch = _fnFilterCreateSearch( searchStr, regex, smart, caseInsensitive );

        for ( var i=display.length-1 ; i>=0 ; i-- ) {
            data = settings.aoData[ display[i] ]._aFilterData[ colIdx ];

            if ( ! rpSearch.test( data ) ) {
                display.splice( i, 1 );
            }
        }
    }


    /**
     * Filter the data table based on user input and draw the table
     *  @param {object} settings dataTables settings object
     *  @param {string} input string to filter on
     *  @param {int} force optional - force a research of the master array (1) or not (undefined or 0)
     *  @param {bool} regex treat as a regular expression or not
     *  @param {bool} smart perform smart filtering or not
     *  @param {bool} caseInsensitive Do case insenstive matching or not
     *  @memberof DataTable#oApi
     */
    function _fnFilter( settings, input, force, regex, smart, caseInsensitive )
    {
        var rpSearch = _fnFilterCreateSearch( input, regex, smart, caseInsensitive );
        var prevSearch = settings.oPreviousSearch.sSearch;
        var displayMaster = settings.aiDisplayMaster;
        var display, invalidated, i;

        // Need to take account of custom filtering functions - always filter
        if ( DataTable.ext.search.length !== 0 ) {
            force = true;
        }

        // Check if any of the rows were invalidated
        invalidated = _fnFilterData( settings );

        // If the input is blank - we just want the full data set
        if ( input.length <= 0 ) {
            settings.aiDisplay = displayMaster.slice();
        }
        else {
            // New search - start from the master array
            if ( invalidated ||
                force ||
                prevSearch.length > input.length ||
                input.indexOf(prevSearch) !== 0 ||
                settings.bSorted // On resort, the display master needs to be
                                 // re-filtered since indexes will have changed
            ) {
                settings.aiDisplay = displayMaster.slice();
            }

            // Search the display array
            display = settings.aiDisplay;

            for ( i=display.length-1 ; i>=0 ; i-- ) {
                if ( ! rpSearch.test( settings.aoData[ display[i] ]._sFilterRow ) ) {
                    display.splice( i, 1 );
                }
            }
        }
    }


    /**
     * Build a regular expression object suitable for searching a table
     *  @param {string} sSearch string to search for
     *  @param {bool} bRegex treat as a regular expression or not
     *  @param {bool} bSmart perform smart filtering or not
     *  @param {bool} bCaseInsensitive Do case insensitive matching or not
     *  @returns {RegExp} constructed object
     *  @memberof DataTable#oApi
     */
    function _fnFilterCreateSearch( search, regex, smart, caseInsensitive )
    {
        search = regex ?
            search :
            _fnEscapeRegex( search );

        if ( smart ) {
            /* For smart filtering we want to allow the search to work regardless of
             * word order. We also want double quoted text to be preserved, so word
             * order is important - a la google. So this is what we want to
             * generate:
             * 
             * ^(?=.*?\bone\b)(?=.*?\btwo three\b)(?=.*?\bfour\b).*$
             */
            var a = $.map( search.match( /"[^"]+"|[^ ]+/g ) || [''], function ( word ) {
                if ( word.charAt(0) === '"' ) {
                    var m = word.match( /^"(.*)"$/ );
                    word = m ? m[1] : word;
                }

                return word.replace('"', '');
            } );

            search = '^(?=.*?'+a.join( ')(?=.*?' )+').*$';
        }

        return new RegExp( search, caseInsensitive ? 'i' : '' );
    }


    /**
     * Escape a string such that it can be used in a regular expression
     *  @param {string} sVal string to escape
     *  @returns {string} escaped string
     *  @memberof DataTable#oApi
     */
    function _fnEscapeRegex ( sVal )
    {
        return sVal.replace( _re_escape_regex, '\\$1' );
    }



    var __filter_div = $('<div>')[0];
    var __filter_div_textContent = __filter_div.textContent !== undefined;

    // Update the filtering data for each row if needed (by invalidation or first run)
    function _fnFilterData ( settings )
    {
        var columns = settings.aoColumns;
        var column;
        var i, j, ien, jen, filterData, cellData, row;
        var fomatters = DataTable.ext.type.search;
        var wasInvalidated = false;

        for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
            row = settings.aoData[i];

            if ( ! row._aFilterData ) {
                filterData = [];

                for ( j=0, jen=columns.length ; j<jen ; j++ ) {
                    column = columns[j];

                    if ( column.bSearchable ) {
                        cellData = _fnGetCellData( settings, i, j, 'filter' );

                        if ( fomatters[ column.sType ] ) {
                            cellData = fomatters[ column.sType ]( cellData );
                        }

                        // Search in DataTables 1.10 is string based. In 1.11 this
                        // should be altered to also allow strict type checking.
                        if ( cellData === null ) {
                            cellData = '';
                        }

                        if ( typeof cellData !== 'string' && cellData.toString ) {
                            cellData = cellData.toString();
                        }
                    }
                    else {
                        cellData = '';
                    }

                    // If it looks like there is an HTML entity in the string,
                    // attempt to decode it so sorting works as expected. Note that
                    // we could use a single line of jQuery to do this, but the DOM
                    // method used here is much faster http://jsperf.com/html-decode
                    if ( cellData.indexOf && cellData.indexOf('&') !== -1 ) {
                        __filter_div.innerHTML = cellData;
                        cellData = __filter_div_textContent ?
                            __filter_div.textContent :
                            __filter_div.innerText;
                    }

                    if ( cellData.replace ) {
                        cellData = cellData.replace(/[\r\n]/g, '');
                    }

                    filterData.push( cellData );
                }

                row._aFilterData = filterData;
                row._sFilterRow = filterData.join('  ');
                wasInvalidated = true;
            }
        }

        return wasInvalidated;
    }


    /**
     * Convert from the internal Hungarian notation to camelCase for external
     * interaction
     *  @param {object} obj Object to convert
     *  @returns {object} Inverted object
     *  @memberof DataTable#oApi
     */
    function _fnSearchToCamel ( obj )
    {
        return {
            search:          obj.sSearch,
            smart:           obj.bSmart,
            regex:           obj.bRegex,
            caseInsensitive: obj.bCaseInsensitive
        };
    }



    /**
     * Convert from camelCase notation to the internal Hungarian. We could use the
     * Hungarian convert function here, but this is cleaner
     *  @param {object} obj Object to convert
     *  @returns {object} Inverted object
     *  @memberof DataTable#oApi
     */
    function _fnSearchToHung ( obj )
    {
        return {
            sSearch:          obj.search,
            bSmart:           obj.smart,
            bRegex:           obj.regex,
            bCaseInsensitive: obj.caseInsensitive
        };
    }

    /**
     * Generate the node required for the info display
     *  @param {object} oSettings dataTables settings object
     *  @returns {node} Information element
     *  @memberof DataTable#oApi
     */
    function _fnFeatureHtmlInfo ( settings )
    {
        var
            tid = settings.sTableId,
            nodes = settings.aanFeatures.i,
            n = $('<div/>', {
                'class': settings.oClasses.sInfo,
                'id': ! nodes ? tid+'_info' : null
            } );

        if ( ! nodes ) {
            // Update display on each draw
            settings.aoDrawCallback.push( {
                "fn": _fnUpdateInfo,
                "sName": "information"
            } );

            n
                .attr( 'role', 'status' )
                .attr( 'aria-live', 'polite' );

            // Table is described by our info div
            $(settings.nTable).attr( 'aria-describedby', tid+'_info' );
        }

        return n[0];
    }


    /**
     * Update the information elements in the display
     *  @param {object} settings dataTables settings object
     *  @memberof DataTable#oApi
     */
    function _fnUpdateInfo ( settings )
    {
        /* Show information about the table */
        var nodes = settings.aanFeatures.i;
        if ( nodes.length === 0 ) {
            return;
        }

        var
            lang  = settings.oLanguage,
            start = settings._iDisplayStart+1,
            end   = settings.fnDisplayEnd(),
            max   = settings.fnRecordsTotal(),
            total = settings.fnRecordsDisplay(),
            out   = total ?
                lang.sInfo :
                lang.sInfoEmpty;

        if ( total !== max ) {
            /* Record set after filtering */
            out += ' ' + lang.sInfoFiltered;
        }

        // Convert the macros
        out += lang.sInfoPostFix;
        out = _fnInfoMacros( settings, out );

        var callback = lang.fnInfoCallback;
        if ( callback !== null ) {
            out = callback.call( settings.oInstance,
                settings, start, end, max, total, out
            );
        }

        $(nodes).html( out );
    }


    function _fnInfoMacros ( settings, str )
    {
        // When infinite scrolling, we are always starting at 1. _iDisplayStart is used only
        // internally
        var
            formatter  = settings.fnFormatNumber,
            start      = settings._iDisplayStart+1,
            len        = settings._iDisplayLength,
            vis        = settings.fnRecordsDisplay(),
            all        = len === -1;

        return str.
            replace(/_START_/g, formatter.call( settings, start ) ).
            replace(/_END_/g,   formatter.call( settings, settings.fnDisplayEnd() ) ).
            replace(/_MAX_/g,   formatter.call( settings, settings.fnRecordsTotal() ) ).
            replace(/_TOTAL_/g, formatter.call( settings, vis ) ).
            replace(/_PAGE_/g,  formatter.call( settings, all ? 1 : Math.ceil( start / len ) ) ).
            replace(/_PAGES_/g, formatter.call( settings, all ? 1 : Math.ceil( vis / len ) ) );
    }



    /**
     * Draw the table for the first time, adding all required features
     *  @param {object} settings dataTables settings object
     *  @memberof DataTable#oApi
     */
    function _fnInitialise ( settings )
    {
        var i, iLen, iAjaxStart=settings.iInitDisplayStart;
        var columns = settings.aoColumns, column;
        var features = settings.oFeatures;
        var deferLoading = settings.bDeferLoading; // value modified by the draw

        /* Ensure that the table data is fully initialised */
        if ( ! settings.bInitialised ) {
            setTimeout( function(){ _fnInitialise( settings ); }, 200 );
            return;
        }

        /* Show the display HTML options */
        _fnAddOptionsHtml( settings );

        /* Build and draw the header / footer for the table */
        _fnBuildHead( settings );
        _fnDrawHead( settings, settings.aoHeader );
        _fnDrawHead( settings, settings.aoFooter );

        /* Okay to show that something is going on now */
        _fnProcessingDisplay( settings, true );

        /* Calculate sizes for columns */
        if ( features.bAutoWidth ) {
            _fnCalculateColumnWidths( settings );
        }

        for ( i=0, iLen=columns.length ; i<iLen ; i++ ) {
            column = columns[i];

            if ( column.sWidth ) {
                column.nTh.style.width = _fnStringToCss( column.sWidth );
            }
        }

        _fnCallbackFire( settings, null, 'preInit', [settings] );

        // If there is default sorting required - let's do it. The sort function
        // will do the drawing for us. Otherwise we draw the table regardless of the
        // Ajax source - this allows the table to look initialised for Ajax sourcing
        // data (show 'loading' message possibly)
        _fnReDraw( settings );

        // Server-side processing init complete is done by _fnAjaxUpdateDraw
        var dataSrc = _fnDataSource( settings );
        if ( dataSrc != 'ssp' || deferLoading ) {
            // if there is an ajax source load the data
            if ( dataSrc == 'ajax' ) {
                _fnBuildAjax( settings, [], function(json) {
                    var aData = _fnAjaxDataSrc( settings, json );

                    // Got the data - add it to the table
                    for ( i=0 ; i<aData.length ; i++ ) {
                        _fnAddData( settings, aData[i] );
                    }

                    // Reset the init display for cookie saving. We've already done
                    // a filter, and therefore cleared it before. So we need to make
                    // it appear 'fresh'
                    settings.iInitDisplayStart = iAjaxStart;

                    _fnReDraw( settings );

                    _fnProcessingDisplay( settings, false );
                    _fnInitComplete( settings, json );
                }, settings );
            }
            else {
                _fnProcessingDisplay( settings, false );
                _fnInitComplete( settings );
            }
        }
    }


    /**
     * Draw the table for the first time, adding all required features
     *  @param {object} oSettings dataTables settings object
     *  @param {object} [json] JSON from the server that completed the table, if using Ajax source
     *    with client-side processing (optional)
     *  @memberof DataTable#oApi
     */
    function _fnInitComplete ( settings, json )
    {
        settings._bInitComplete = true;

        // When data was added after the initialisation (data or Ajax) we need to
        // calculate the column sizing
        if ( json || settings.oInit.aaData ) {
            _fnAdjustColumnSizing( settings );
        }

        _fnCallbackFire( settings, null, 'plugin-init', [settings, json] );
        _fnCallbackFire( settings, 'aoInitComplete', 'init', [settings, json] );
    }


    function _fnLengthChange ( settings, val )
    {
        var len = parseInt( val, 10 );
        settings._iDisplayLength = len;

        _fnLengthOverflow( settings );

        // Fire length change event
        _fnCallbackFire( settings, null, 'length', [settings, len] );
    }


    /**
     * Generate the node required for user display length changing
     *  @param {object} settings dataTables settings object
     *  @returns {node} Display length feature node
     *  @memberof DataTable#oApi
     */
    function _fnFeatureHtmlLength ( settings )
    {
        var
            classes  = settings.oClasses,
            tableId  = settings.sTableId,
            menu     = settings.aLengthMenu,
            d2       = $.isArray( menu[0] ),
            lengths  = d2 ? menu[0] : menu,
            language = d2 ? menu[1] : menu;

        var select = $('<select/>', {
            'name':          tableId+'_length',
            'aria-controls': tableId,
            'class':         classes.sLengthSelect
        } );

        for ( var i=0, ien=lengths.length ; i<ien ; i++ ) {
            select[0][ i ] = new Option( language[i], lengths[i] );
        }

        var div = $('<div><label/></div>').addClass( classes.sLength );
        if ( ! settings.aanFeatures.l ) {
            div[0].id = tableId+'_length';
        }

        div.children().append(
            settings.oLanguage.sLengthMenu.replace( '_MENU_', select[0].outerHTML )
        );

        // Can't use `select` variable as user might provide their own and the
        // reference is broken by the use of outerHTML
        $('select', div)
            .val( settings._iDisplayLength )
            .bind( 'change.DT', function(e) {
                _fnLengthChange( settings, $(this).val() );
                _fnDraw( settings );
            } );

        // Update node value whenever anything changes the table's length
        $(settings.nTable).bind( 'length.dt.DT', function (e, s, len) {
            if ( settings === s ) {
                $('select', div).val( len );
            }
        } );

        return div[0];
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Note that most of the paging logic is done in
     * DataTable.ext.pager
     */

    /**
     * Generate the node required for default pagination
     *  @param {object} oSettings dataTables settings object
     *  @returns {node} Pagination feature node
     *  @memberof DataTable#oApi
     */
    function _fnFeatureHtmlPaginate ( settings )
    {
        var
            type   = settings.sPaginationType,
            plugin = DataTable.ext.pager[ type ],
            modern = typeof plugin === 'function',
            redraw = function( settings ) {
                _fnDraw( settings );
            },
            node = $('<div/>').addClass( settings.oClasses.sPaging + type )[0],
            features = settings.aanFeatures;

        if ( ! modern ) {
            plugin.fnInit( settings, node, redraw );
        }

        /* Add a draw callback for the pagination on first instance, to update the paging display */
        if ( ! features.p )
        {
            node.id = settings.sTableId+'_paginate';

            settings.aoDrawCallback.push( {
                "fn": function( settings ) {
                    if ( modern ) {
                        var
                            start      = settings._iDisplayStart,
                            len        = settings._iDisplayLength,
                            visRecords = settings.fnRecordsDisplay(),
                            all        = len === -1,
                            page = all ? 0 : Math.ceil( start / len ),
                            pages = all ? 1 : Math.ceil( visRecords / len ),
                            buttons = plugin(page, pages),
                            i, ien;

                        for ( i=0, ien=features.p.length ; i<ien ; i++ ) {
                            _fnRenderer( settings, 'pageButton' )(
                                settings, features.p[i], i, buttons, page, pages
                            );
                        }
                    }
                    else {
                        plugin.fnUpdate( settings, redraw );
                    }
                },
                "sName": "pagination"
            } );
        }

        return node;
    }


    /**
     * Alter the display settings to change the page
     *  @param {object} settings DataTables settings object
     *  @param {string|int} action Paging action to take: "first", "previous",
     *    "next" or "last" or page number to jump to (integer)
     *  @param [bool] redraw Automatically draw the update or not
     *  @returns {bool} true page has changed, false - no change
     *  @memberof DataTable#oApi
     */
    function _fnPageChange ( settings, action, redraw )
    {
        var
            start     = settings._iDisplayStart,
            len       = settings._iDisplayLength,
            records   = settings.fnRecordsDisplay();

        if ( records === 0 || len === -1 )
        {
            start = 0;
        }
        else if ( typeof action === "number" )
        {
            start = action * len;

            if ( start > records )
            {
                start = 0;
            }
        }
        else if ( action == "first" )
        {
            start = 0;
        }
        else if ( action == "previous" )
        {
            start = len >= 0 ?
            start - len :
                0;

            if ( start < 0 )
            {
                start = 0;
            }
        }
        else if ( action == "next" )
        {
            if ( start + len < records )
            {
                start += len;
            }
        }
        else if ( action == "last" )
        {
            start = Math.floor( (records-1) / len) * len;
        }
        else
        {
            _fnLog( settings, 0, "Unknown paging action: "+action, 5 );
        }

        var changed = settings._iDisplayStart !== start;
        settings._iDisplayStart = start;

        if ( changed ) {
            _fnCallbackFire( settings, null, 'page', [settings] );

            if ( redraw ) {
                _fnDraw( settings );
            }
        }

        return changed;
    }



    /**
     * Generate the node required for the processing node
     *  @param {object} settings dataTables settings object
     *  @returns {node} Processing element
     *  @memberof DataTable#oApi
     */
    function _fnFeatureHtmlProcessing ( settings )
    {
        return $('<div/>', {
            'id': ! settings.aanFeatures.r ? settings.sTableId+'_processing' : null,
            'class': settings.oClasses.sProcessing
        } )
            .html( settings.oLanguage.sProcessing )
            .insertBefore( settings.nTable )[0];
    }


    /**
     * Display or hide the processing indicator
     *  @param {object} settings dataTables settings object
     *  @param {bool} show Show the processing indicator (true) or not (false)
     *  @memberof DataTable#oApi
     */
    function _fnProcessingDisplay ( settings, show )
    {
        if ( settings.oFeatures.bProcessing ) {
            $(settings.aanFeatures.r).css( 'display', show ? 'block' : 'none' );
        }

        _fnCallbackFire( settings, null, 'processing', [settings, show] );
    }

    /**
     * Add any control elements for the table - specifically scrolling
     *  @param {object} settings dataTables settings object
     *  @returns {node} Node to add to the DOM
     *  @memberof DataTable#oApi
     */
    function _fnFeatureHtmlTable ( settings )
    {
        var table = $(settings.nTable);

        // Add the ARIA grid role to the table
        table.attr( 'role', 'grid' );

        // Scrolling from here on in
        var scroll = settings.oScroll;

        if ( scroll.sX === '' && scroll.sY === '' ) {
            return settings.nTable;
        }

        var scrollX = scroll.sX;
        var scrollY = scroll.sY;
        var classes = settings.oClasses;
        var caption = table.children('caption');
        var captionSide = caption.length ? caption[0]._captionSide : null;
        var headerClone = $( table[0].cloneNode(false) );
        var footerClone = $( table[0].cloneNode(false) );
        var footer = table.children('tfoot');
        var _div = '<div/>';
        var size = function ( s ) {
            return !s ? null : _fnStringToCss( s );
        };

        if ( ! footer.length ) {
            footer = null;
        }

        /*
         * The HTML structure that we want to generate in this function is:
         *  div - scroller
         *    div - scroll head
         *      div - scroll head inner
         *        table - scroll head table
         *          thead - thead
         *    div - scroll body
         *      table - table (master table)
         *        thead - thead clone for sizing
         *        tbody - tbody
         *    div - scroll foot
         *      div - scroll foot inner
         *        table - scroll foot table
         *          tfoot - tfoot
         */
        var scroller = $( _div, { 'class': classes.sScrollWrapper } )
            .append(
            $(_div, { 'class': classes.sScrollHead } )
                .css( {
                    overflow: 'hidden',
                    position: 'relative',
                    border: 0,
                    width: scrollX ? size(scrollX) : '100%'
                } )
                .append(
                $(_div, { 'class': classes.sScrollHeadInner } )
                    .css( {
                        'box-sizing': 'content-box',
                        width: scroll.sXInner || '100%'
                    } )
                    .append(
                    headerClone
                        .removeAttr('id')
                        .css( 'margin-left', 0 )
                        .append( captionSide === 'top' ? caption : null )
                        .append(
                        table.children('thead')
                    )
                )
            )
        )
            .append(
            $(_div, { 'class': classes.sScrollBody } )
                .css( {
                    position: 'relative',
                    overflow: 'auto',
                    width: size( scrollX )
                } )
                .append( table )
        );

        if ( footer ) {
            scroller.append(
                $(_div, { 'class': classes.sScrollFoot } )
                    .css( {
                        overflow: 'hidden',
                        border: 0,
                        width: scrollX ? size(scrollX) : '100%'
                    } )
                    .append(
                    $(_div, { 'class': classes.sScrollFootInner } )
                        .append(
                        footerClone
                            .removeAttr('id')
                            .css( 'margin-left', 0 )
                            .append( captionSide === 'bottom' ? caption : null )
                            .append(
                            table.children('tfoot')
                        )
                    )
                )
            );
        }

        var children = scroller.children();
        var scrollHead = children[0];
        var scrollBody = children[1];
        var scrollFoot = footer ? children[2] : null;

        // When the body is scrolled, then we also want to scroll the headers
        if ( scrollX ) {
            $(scrollBody).on( 'scroll.DT', function (e) {
                var scrollLeft = this.scrollLeft;

                scrollHead.scrollLeft = scrollLeft;

                if ( footer ) {
                    scrollFoot.scrollLeft = scrollLeft;
                }
            } );
        }

        $(scrollBody).css(
            scrollY && scroll.bCollapse ? 'max-height' : 'height',
            scrollY
        );

        settings.nScrollHead = scrollHead;
        settings.nScrollBody = scrollBody;
        settings.nScrollFoot = scrollFoot;

        // On redraw - align columns
        settings.aoDrawCallback.push( {
            "fn": _fnScrollDraw,
            "sName": "scrolling"
        } );

        return scroller[0];
    }



    /**
     * Update the header, footer and body tables for resizing - i.e. column
     * alignment.
     *
     * Welcome to the most horrible function DataTables. The process that this
     * function follows is basically:
     *   1. Re-create the table inside the scrolling div
     *   2. Take live measurements from the DOM
     *   3. Apply the measurements to align the columns
     *   4. Clean up
     *
     *  @param {object} settings dataTables settings object
     *  @memberof DataTable#oApi
     */
    function _fnScrollDraw ( settings )
    {
        // Given that this is such a monster function, a lot of variables are use
        // to try and keep the minimised size as small as possible
        var
            scroll         = settings.oScroll,
            scrollX        = scroll.sX,
            scrollXInner   = scroll.sXInner,
            scrollY        = scroll.sY,
            barWidth       = scroll.iBarWidth,
            divHeader      = $(settings.nScrollHead),
            divHeaderStyle = divHeader[0].style,
            divHeaderInner = divHeader.children('div'),
            divHeaderInnerStyle = divHeaderInner[0].style,
            divHeaderTable = divHeaderInner.children('table'),
            divBodyEl      = settings.nScrollBody,
            divBody        = $(divBodyEl),
            divBodyStyle   = divBodyEl.style,
            divFooter      = $(settings.nScrollFoot),
            divFooterInner = divFooter.children('div'),
            divFooterTable = divFooterInner.children('table'),
            header         = $(settings.nTHead),
            table          = $(settings.nTable),
            tableEl        = table[0],
            tableStyle     = tableEl.style,
            footer         = settings.nTFoot ? $(settings.nTFoot) : null,
            browser        = settings.oBrowser,
            ie67           = browser.bScrollOversize,
            dtHeaderCells  = _pluck( settings.aoColumns, 'nTh' ),
            headerTrgEls, footerTrgEls,
            headerSrcEls, footerSrcEls,
            headerCopy, footerCopy,
            headerWidths=[], footerWidths=[],
            headerContent=[], footerContent=[],
            idx, correction, sanityWidth,
            zeroOut = function(nSizer) {
                var style = nSizer.style;
                style.paddingTop = "0";
                style.paddingBottom = "0";
                style.borderTopWidth = "0";
                style.borderBottomWidth = "0";
                style.height = 0;
            };

        // If the scrollbar visibility has changed from the last draw, we need to
        // adjust the column sizes as the table width will have changed to account
        // for the scrollbar
        var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;

        if ( settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== undefined ) {
            settings.scrollBarVis = scrollBarVis;
            _fnAdjustColumnSizing( settings );
            return; // adjust column sizing will call this function again
        }
        else {
            settings.scrollBarVis = scrollBarVis;
        }

        /*
         * 1. Re-create the table inside the scrolling div
         */

        // Remove the old minimised thead and tfoot elements in the inner table
        table.children('thead, tfoot').remove();

        if ( footer ) {
            footerCopy = footer.clone().prependTo( table );
            footerTrgEls = footer.find('tr'); // the original tfoot is in its own table and must be sized
            footerSrcEls = footerCopy.find('tr');
        }

        // Clone the current header and footer elements and then place it into the inner table
        headerCopy = header.clone().prependTo( table );
        headerTrgEls = header.find('tr'); // original header is in its own table
        headerSrcEls = headerCopy.find('tr');
        headerCopy.find('th, td').removeAttr('tabindex');


        /*
         * 2. Take live measurements from the DOM - do not alter the DOM itself!
         */

        // Remove old sizing and apply the calculated column widths
        // Get the unique column headers in the newly created (cloned) header. We want to apply the
        // calculated sizes to this header
        if ( ! scrollX )
        {
            divBodyStyle.width = '100%';
            divHeader[0].style.width = '100%';
        }

        $.each( _fnGetUniqueThs( settings, headerCopy ), function ( i, el ) {
            idx = _fnVisibleToColumnIndex( settings, i );
            el.style.width = settings.aoColumns[idx].sWidth;
        } );

        if ( footer ) {
            _fnApplyToChildren( function(n) {
                n.style.width = "";
            }, footerSrcEls );
        }

        // Size the table as a whole
        sanityWidth = table.outerWidth();
        if ( scrollX === "" ) {
            // No x scrolling
            tableStyle.width = "100%";

            // IE7 will make the width of the table when 100% include the scrollbar
            // - which is shouldn't. When there is a scrollbar we need to take this
            // into account.
            if ( ie67 && (table.find('tbody').height() > divBodyEl.offsetHeight ||
                divBody.css('overflow-y') == "scroll")
            ) {
                tableStyle.width = _fnStringToCss( table.outerWidth() - barWidth);
            }

            // Recalculate the sanity width
            sanityWidth = table.outerWidth();
        }
        else if ( scrollXInner !== "" ) {
            // legacy x scroll inner has been given - use it
            tableStyle.width = _fnStringToCss(scrollXInner);

            // Recalculate the sanity width
            sanityWidth = table.outerWidth();
        }

        // Hidden header should have zero height, so remove padding and borders. Then
        // set the width based on the real headers

        // Apply all styles in one pass
        _fnApplyToChildren( zeroOut, headerSrcEls );

        // Read all widths in next pass
        _fnApplyToChildren( function(nSizer) {
            headerContent.push( nSizer.innerHTML );
            headerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
        }, headerSrcEls );

        // Apply all widths in final pass
        _fnApplyToChildren( function(nToSize, i) {
            // Only apply widths to the DataTables detected header cells - this
            // prevents complex headers from having contradictory sizes applied
            if ( $.inArray( nToSize, dtHeaderCells ) !== -1 ) {
                nToSize.style.width = headerWidths[i];
            }
        }, headerTrgEls );

        $(headerSrcEls).height(0);

        /* Same again with the footer if we have one */
        if ( footer )
        {
            _fnApplyToChildren( zeroOut, footerSrcEls );

            _fnApplyToChildren( function(nSizer) {
                footerContent.push( nSizer.innerHTML );
                footerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
            }, footerSrcEls );

            _fnApplyToChildren( function(nToSize, i) {
                nToSize.style.width = footerWidths[i];
            }, footerTrgEls );

            $(footerSrcEls).height(0);
        }


        /*
         * 3. Apply the measurements
         */

        // "Hide" the header and footer that we used for the sizing. We need to keep
        // the content of the cell so that the width applied to the header and body
        // both match, but we want to hide it completely. We want to also fix their
        // width to what they currently are
        _fnApplyToChildren( function(nSizer, i) {
            nSizer.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+headerContent[i]+'</div>';
            nSizer.style.width = headerWidths[i];
        }, headerSrcEls );

        if ( footer )
        {
            _fnApplyToChildren( function(nSizer, i) {
                nSizer.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+footerContent[i]+'</div>';
                nSizer.style.width = footerWidths[i];
            }, footerSrcEls );
        }

        // Sanity check that the table is of a sensible width. If not then we are going to get
        // misalignment - try to prevent this by not allowing the table to shrink below its min width
        if ( table.outerWidth() < sanityWidth )
        {
            // The min width depends upon if we have a vertical scrollbar visible or not */
            correction = ((divBodyEl.scrollHeight > divBodyEl.offsetHeight ||
            divBody.css('overflow-y') == "scroll")) ?
            sanityWidth+barWidth :
                sanityWidth;

            // IE6/7 are a law unto themselves...
            if ( ie67 && (divBodyEl.scrollHeight >
                divBodyEl.offsetHeight || divBody.css('overflow-y') == "scroll")
            ) {
                tableStyle.width = _fnStringToCss( correction-barWidth );
            }

            // And give the user a warning that we've stopped the table getting too small
            if ( scrollX === "" || scrollXInner !== "" ) {
                _fnLog( settings, 1, 'Possible column misalignment', 6 );
            }
        }
        else
        {
            correction = '100%';
        }

        // Apply to the container elements
        divBodyStyle.width = _fnStringToCss( correction );
        divHeaderStyle.width = _fnStringToCss( correction );

        if ( footer ) {
            settings.nScrollFoot.style.width = _fnStringToCss( correction );
        }


        /*
         * 4. Clean up
         */
        if ( ! scrollY ) {
            /* IE7< puts a vertical scrollbar in place (when it shouldn't be) due to subtracting
             * the scrollbar height from the visible display, rather than adding it on. We need to
             * set the height in order to sort this. Don't want to do it in any other browsers.
             */
            if ( ie67 ) {
                divBodyStyle.height = _fnStringToCss( tableEl.offsetHeight+barWidth );
            }
        }

        /* Finally set the width's of the header and footer tables */
        var iOuterWidth = table.outerWidth();
        divHeaderTable[0].style.width = _fnStringToCss( iOuterWidth );
        divHeaderInnerStyle.width = _fnStringToCss( iOuterWidth );

        // Figure out if there are scrollbar present - if so then we need a the header and footer to
        // provide a bit more space to allow "overflow" scrolling (i.e. past the scrollbar)
        var bScrolling = table.height() > divBodyEl.clientHeight || divBody.css('overflow-y') == "scroll";
        var padding = 'padding' + (browser.bScrollbarLeft ? 'Left' : 'Right' );
        divHeaderInnerStyle[ padding ] = bScrolling ? barWidth+"px" : "0px";

        if ( footer ) {
            divFooterTable[0].style.width = _fnStringToCss( iOuterWidth );
            divFooterInner[0].style.width = _fnStringToCss( iOuterWidth );
            divFooterInner[0].style[padding] = bScrolling ? barWidth+"px" : "0px";
        }

        // Correct DOM ordering for colgroup - comes before the thead
        table.children('colgroup').insertBefore( table.children('thead') );

        /* Adjust the position of the header in case we loose the y-scrollbar */
        divBody.scroll();

        // If sorting or filtering has occurred, jump the scrolling back to the top
        // only if we aren't holding the position
        if ( (settings.bSorted || settings.bFiltered) && ! settings._drawHold ) {
            divBodyEl.scrollTop = 0;
        }
    }



    /**
     * Apply a given function to the display child nodes of an element array (typically
     * TD children of TR rows
     *  @param {function} fn Method to apply to the objects
     *  @param array {nodes} an1 List of elements to look through for display children
     *  @param array {nodes} an2 Another list (identical structure to the first) - optional
     *  @memberof DataTable#oApi
     */
    function _fnApplyToChildren( fn, an1, an2 )
    {
        var index=0, i=0, iLen=an1.length;
        var nNode1, nNode2;

        while ( i < iLen ) {
            nNode1 = an1[i].firstChild;
            nNode2 = an2 ? an2[i].firstChild : null;

            while ( nNode1 ) {
                if ( nNode1.nodeType === 1 ) {
                    if ( an2 ) {
                        fn( nNode1, nNode2, index );
                    }
                    else {
                        fn( nNode1, index );
                    }

                    index++;
                }

                nNode1 = nNode1.nextSibling;
                nNode2 = an2 ? nNode2.nextSibling : null;
            }

            i++;
        }
    }



    var __re_html_remove = /<.*?>/g;


    /**
     * Calculate the width of columns for the table
     *  @param {object} oSettings dataTables settings object
     *  @memberof DataTable#oApi
     */
    function _fnCalculateColumnWidths ( oSettings )
    {
        var
            table = oSettings.nTable,
            columns = oSettings.aoColumns,
            scroll = oSettings.oScroll,
            scrollY = scroll.sY,
            scrollX = scroll.sX,
            scrollXInner = scroll.sXInner,
            columnCount = columns.length,
            visibleColumns = _fnGetColumns( oSettings, 'bVisible' ),
            headerCells = $('th', oSettings.nTHead),
            tableWidthAttr = table.getAttribute('width'), // from DOM element
            tableContainer = table.parentNode,
            userInputs = false,
            i, column, columnIdx, width, outerWidth,
            browser = oSettings.oBrowser,
            ie67 = browser.bScrollOversize;

        var styleWidth = table.style.width;
        if ( styleWidth && styleWidth.indexOf('%') !== -1 ) {
            tableWidthAttr = styleWidth;
        }

        /* Convert any user input sizes into pixel sizes */
        for ( i=0 ; i<visibleColumns.length ; i++ ) {
            column = columns[ visibleColumns[i] ];

            if ( column.sWidth !== null ) {
                column.sWidth = _fnConvertToWidth( column.sWidthOrig, tableContainer );

                userInputs = true;
            }
        }

        /* If the number of columns in the DOM equals the number that we have to
         * process in DataTables, then we can use the offsets that are created by
         * the web- browser. No custom sizes can be set in order for this to happen,
         * nor scrolling used
         */
        if ( ie67 || ! userInputs && ! scrollX && ! scrollY &&
            columnCount == _fnVisbleColumns( oSettings ) &&
            columnCount == headerCells.length
        ) {
            for ( i=0 ; i<columnCount ; i++ ) {
                var colIdx = _fnVisibleToColumnIndex( oSettings, i );

                if ( colIdx !== null ) {
                    columns[ colIdx ].sWidth = _fnStringToCss( headerCells.eq(i).width() );
                }
            }
        }
        else
        {
            // Otherwise construct a single row, worst case, table with the widest
            // node in the data, assign any user defined widths, then insert it into
            // the DOM and allow the browser to do all the hard work of calculating
            // table widths
            var tmpTable = $(table).clone() // don't use cloneNode - IE8 will remove events on the main table
                .css( 'visibility', 'hidden' )
                .removeAttr( 'id' );

            // Clean up the table body
            tmpTable.find('tbody tr').remove();
            var tr = $('<tr/>').appendTo( tmpTable.find('tbody') );

            // Clone the table header and footer - we can't use the header / footer
            // from the cloned table, since if scrolling is active, the table's
            // real header and footer are contained in different table tags
            tmpTable.find('thead, tfoot').remove();
            tmpTable
                .append( $(oSettings.nTHead).clone() )
                .append( $(oSettings.nTFoot).clone() );

            // Remove any assigned widths from the footer (from scrolling)
            tmpTable.find('tfoot th, tfoot td').css('width', '');

            // Apply custom sizing to the cloned header
            headerCells = _fnGetUniqueThs( oSettings, tmpTable.find('thead')[0] );

            for ( i=0 ; i<visibleColumns.length ; i++ ) {
                column = columns[ visibleColumns[i] ];

                headerCells[i].style.width = column.sWidthOrig !== null && column.sWidthOrig !== '' ?
                    _fnStringToCss( column.sWidthOrig ) :
                    '';

                // For scrollX we need to force the column width otherwise the
                // browser will collapse it. If this width is smaller than the
                // width the column requires, then it will have no effect
                if ( column.sWidthOrig && scrollX ) {
                    $( headerCells[i] ).append( $('<div/>').css( {
                        width: column.sWidthOrig,
                        margin: 0,
                        padding: 0,
                        border: 0,
                        height: 1
                    } ) );
                }
            }

            // Find the widest cell for each column and put it into the table
            if ( oSettings.aoData.length ) {
                for ( i=0 ; i<visibleColumns.length ; i++ ) {
                    columnIdx = visibleColumns[i];
                    column = columns[ columnIdx ];

                    $( _fnGetWidestNode( oSettings, columnIdx ) )
                        .clone( false )
                        .append( column.sContentPadding )
                        .appendTo( tr );
                }
            }

            // Tidy the temporary table - remove name attributes so there aren't
            // duplicated in the dom (radio elements for example)
            $('[name]', tmpTable).removeAttr('name');

            // Table has been built, attach to the document so we can work with it.
            // A holding element is used, positioned at the top of the container
            // with minimal height, so it has no effect on if the container scrolls
            // or not. Otherwise it might trigger scrolling when it actually isn't
            // needed
            var holder = $('<div/>').css( scrollX || scrollY ?
                {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: 1,
                    right: 0,
                    overflow: 'hidden'
                } :
                {}
            )
                .append( tmpTable )
                .appendTo( tableContainer );

            // When scrolling (X or Y) we want to set the width of the table as 
            // appropriate. However, when not scrolling leave the table width as it
            // is. This results in slightly different, but I think correct behaviour
            if ( scrollX && scrollXInner ) {
                tmpTable.width( scrollXInner );
            }
            else if ( scrollX ) {
                tmpTable.css( 'width', 'auto' );
                tmpTable.removeAttr('width');

                // If there is no width attribute or style, then allow the table to
                // collapse
                if ( tmpTable.width() < tableContainer.clientWidth && tableWidthAttr ) {
                    tmpTable.width( tableContainer.clientWidth );
                }
            }
            else if ( scrollY ) {
                tmpTable.width( tableContainer.clientWidth );
            }
            else if ( tableWidthAttr ) {
                tmpTable.width( tableWidthAttr );
            }

            // Get the width of each column in the constructed table - we need to
            // know the inner width (so it can be assigned to the other table's
            // cells) and the outer width so we can calculate the full width of the
            // table. This is safe since DataTables requires a unique cell for each
            // column, but if ever a header can span multiple columns, this will
            // need to be modified.
            var total = 0;
            for ( i=0 ; i<visibleColumns.length ; i++ ) {
                var cell = $(headerCells[i]);
                var border = cell.outerWidth() - cell.width();

                // Use getBounding... where possible (not IE8-) because it can give
                // sub-pixel accuracy, which we then want to round up!
                var bounding = browser.bBounding ?
                    Math.ceil( headerCells[i].getBoundingClientRect().width ) :
                    cell.outerWidth();

                // Total is tracked to remove any sub-pixel errors as the outerWidth
                // of the table might not equal the total given here (IE!).
                total += bounding;

                // Width for each column to use
                columns[ visibleColumns[i] ].sWidth = _fnStringToCss( bounding - border );
            }

            table.style.width = _fnStringToCss( total );

            // Finished with the table - ditch it
            holder.remove();
        }

        // If there is a width attr, we want to attach an event listener which
        // allows the table sizing to automatically adjust when the window is
        // resized. Use the width attr rather than CSS, since we can't know if the
        // CSS is a relative value or absolute - DOM read is always px.
        if ( tableWidthAttr ) {
            table.style.width = _fnStringToCss( tableWidthAttr );
        }

        if ( (tableWidthAttr || scrollX) && ! oSettings._reszEvt ) {
            var bindResize = function () {
                $(window).bind('resize.DT-'+oSettings.sInstance, _fnThrottle( function () {
                    _fnAdjustColumnSizing( oSettings );
                } ) );
            };

            // IE6/7 will crash if we bind a resize event handler on page load.
            // To be removed in 1.11 which drops IE6/7 support
            if ( ie67 ) {
                setTimeout( bindResize, 1000 );
            }
            else {
                bindResize();
            }

            oSettings._reszEvt = true;
        }
    }


    /**
     * Throttle the calls to a function. Arguments and context are maintained for
     * the throttled function
     *  @param {function} fn Function to be called
     *  @param {int} [freq=200] call frequency in mS
     *  @returns {function} wrapped function
     *  @memberof DataTable#oApi
     */
    function _fnThrottle( fn, freq ) {
        var
            frequency = freq !== undefined ? freq : 200,
            last,
            timer;

        return function () {
            var
                that = this,
                now  = +new Date(),
                args = arguments;

            if ( last && now < last + frequency ) {
                clearTimeout( timer );

                timer = setTimeout( function () {
                    last = undefined;
                    fn.apply( that, args );
                }, frequency );
            }
            else {
                last = now;
                fn.apply( that, args );
            }
        };
    }


    /**
     * Convert a CSS unit width to pixels (e.g. 2em)
     *  @param {string} width width to be converted
     *  @param {node} parent parent to get the with for (required for relative widths) - optional
     *  @returns {int} width in pixels
     *  @memberof DataTable#oApi
     */
    function _fnConvertToWidth ( width, parent )
    {
        if ( ! width ) {
            return 0;
        }

        var n = $('<div/>')
            .css( 'width', _fnStringToCss( width ) )
            .appendTo( parent || document.body );

        var val = n[0].offsetWidth;
        n.remove();

        return val;
    }


    /**
     * Get the widest node
     *  @param {object} settings dataTables settings object
     *  @param {int} colIdx column of interest
     *  @returns {node} widest table node
     *  @memberof DataTable#oApi
     */
    function _fnGetWidestNode( settings, colIdx )
    {
        var idx = _fnGetMaxLenString( settings, colIdx );
        if ( idx < 0 ) {
            return null;
        }

        var data = settings.aoData[ idx ];
        return ! data.nTr ? // Might not have been created when deferred rendering
            $('<td/>').html( _fnGetCellData( settings, idx, colIdx, 'display' ) )[0] :
            data.anCells[ colIdx ];
    }


    /**
     * Get the maximum strlen for each data column
     *  @param {object} settings dataTables settings object
     *  @param {int} colIdx column of interest
     *  @returns {string} max string length for each column
     *  @memberof DataTable#oApi
     */
    function _fnGetMaxLenString( settings, colIdx )
    {
        var s, max=-1, maxIdx = -1;

        for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
            s = _fnGetCellData( settings, i, colIdx, 'display' )+'';
            s = s.replace( __re_html_remove, '' );
            s = s.replace( /&nbsp;/g, ' ' );

            if ( s.length > max ) {
                max = s.length;
                maxIdx = i;
            }
        }

        return maxIdx;
    }


    /**
     * Append a CSS unit (only if required) to a string
     *  @param {string} value to css-ify
     *  @returns {string} value with css unit
     *  @memberof DataTable#oApi
     */
    function _fnStringToCss( s )
    {
        if ( s === null ) {
            return '0px';
        }

        if ( typeof s == 'number' ) {
            return s < 0 ?
                '0px' :
            s+'px';
        }

        // Check it has a unit character already
        return s.match(/\d$/) ?
        s+'px' :
            s;
    }



    function _fnSortFlatten ( settings )
    {
        var
            i, iLen, k, kLen,
            aSort = [],
            aiOrig = [],
            aoColumns = settings.aoColumns,
            aDataSort, iCol, sType, srcCol,
            fixed = settings.aaSortingFixed,
            fixedObj = $.isPlainObject( fixed ),
            nestedSort = [],
            add = function ( a ) {
                if ( a.length && ! $.isArray( a[0] ) ) {
                    // 1D array
                    nestedSort.push( a );
                }
                else {
                    // 2D array
                    $.merge( nestedSort, a );
                }
            };

        // Build the sort array, with pre-fix and post-fix options if they have been
        // specified
        if ( $.isArray( fixed ) ) {
            add( fixed );
        }

        if ( fixedObj && fixed.pre ) {
            add( fixed.pre );
        }

        add( settings.aaSorting );

        if (fixedObj && fixed.post ) {
            add( fixed.post );
        }

        for ( i=0 ; i<nestedSort.length ; i++ )
        {
            srcCol = nestedSort[i][0];
            aDataSort = aoColumns[ srcCol ].aDataSort;

            for ( k=0, kLen=aDataSort.length ; k<kLen ; k++ )
            {
                iCol = aDataSort[k];
                sType = aoColumns[ iCol ].sType || 'string';

                if ( nestedSort[i]._idx === undefined ) {
                    nestedSort[i]._idx = $.inArray( nestedSort[i][1], aoColumns[iCol].asSorting );
                }

                aSort.push( {
                    src:       srcCol,
                    col:       iCol,
                    dir:       nestedSort[i][1],
                    index:     nestedSort[i]._idx,
                    type:      sType,
                    formatter: DataTable.ext.type.order[ sType+"-pre" ]
                } );
            }
        }

        return aSort;
    }

    /**
     * Change the order of the table
     *  @param {object} oSettings dataTables settings object
     *  @memberof DataTable#oApi
     *  @todo This really needs split up!
     */
    function _fnSort ( oSettings )
    {
        var
            i, ien, iLen, j, jLen, k, kLen,
            sDataType, nTh,
            aiOrig = [],
            oExtSort = DataTable.ext.type.order,
            aoData = oSettings.aoData,
            aoColumns = oSettings.aoColumns,
            aDataSort, data, iCol, sType, oSort,
            formatters = 0,
            sortCol,
            displayMaster = oSettings.aiDisplayMaster,
            aSort;

        // Resolve any column types that are unknown due to addition or invalidation
        // @todo Can this be moved into a 'data-ready' handler which is called when
        //   data is going to be used in the table?
        _fnColumnTypes( oSettings );

        aSort = _fnSortFlatten( oSettings );

        for ( i=0, ien=aSort.length ; i<ien ; i++ ) {
            sortCol = aSort[i];

            // Track if we can use the fast sort algorithm
            if ( sortCol.formatter ) {
                formatters++;
            }

            // Load the data needed for the sort, for each cell
            _fnSortData( oSettings, sortCol.col );
        }

        /* No sorting required if server-side or no sorting array */
        if ( _fnDataSource( oSettings ) != 'ssp' && aSort.length !== 0 )
        {
            // Create a value - key array of the current row positions such that we can use their
            // current position during the sort, if values match, in order to perform stable sorting
            for ( i=0, iLen=displayMaster.length ; i<iLen ; i++ ) {
                aiOrig[ displayMaster[i] ] = i;
            }

            /* Do the sort - here we want multi-column sorting based on a given data source (column)
             * and sorting function (from oSort) in a certain direction. It's reasonably complex to
             * follow on it's own, but this is what we want (example two column sorting):
             *  fnLocalSorting = function(a,b){
             *    var iTest;
             *    iTest = oSort['string-asc']('data11', 'data12');
             *      if (iTest !== 0)
             *        return iTest;
             *    iTest = oSort['numeric-desc']('data21', 'data22');
             *    if (iTest !== 0)
             *      return iTest;
             *    return oSort['numeric-asc']( aiOrig[a], aiOrig[b] );
             *  }
             * Basically we have a test for each sorting column, if the data in that column is equal,
             * test the next column. If all columns match, then we use a numeric sort on the row
             * positions in the original data array to provide a stable sort.
             *
             * Note - I know it seems excessive to have two sorting methods, but the first is around
             * 15% faster, so the second is only maintained for backwards compatibility with sorting
             * methods which do not have a pre-sort formatting function.
             */
            if ( formatters === aSort.length ) {
                // All sort types have formatting functions
                displayMaster.sort( function ( a, b ) {
                    var
                        x, y, k, test, sort,
                        len=aSort.length,
                        dataA = aoData[a]._aSortData,
                        dataB = aoData[b]._aSortData;

                    for ( k=0 ; k<len ; k++ ) {
                        sort = aSort[k];

                        x = dataA[ sort.col ];
                        y = dataB[ sort.col ];

                        test = x<y ? -1 : x>y ? 1 : 0;
                        if ( test !== 0 ) {
                            return sort.dir === 'asc' ? test : -test;
                        }
                    }

                    x = aiOrig[a];
                    y = aiOrig[b];
                    return x<y ? -1 : x>y ? 1 : 0;
                } );
            }
            else {
                // Depreciated - remove in 1.11 (providing a plug-in option)
                // Not all sort types have formatting methods, so we have to call their sorting
                // methods.
                displayMaster.sort( function ( a, b ) {
                    var
                        x, y, k, l, test, sort, fn,
                        len=aSort.length,
                        dataA = aoData[a]._aSortData,
                        dataB = aoData[b]._aSortData;

                    for ( k=0 ; k<len ; k++ ) {
                        sort = aSort[k];

                        x = dataA[ sort.col ];
                        y = dataB[ sort.col ];

                        fn = oExtSort[ sort.type+"-"+sort.dir ] || oExtSort[ "string-"+sort.dir ];
                        test = fn( x, y );
                        if ( test !== 0 ) {
                            return test;
                        }
                    }

                    x = aiOrig[a];
                    y = aiOrig[b];
                    return x<y ? -1 : x>y ? 1 : 0;
                } );
            }
        }

        /* Tell the draw function that we have sorted the data */
        oSettings.bSorted = true;
    }


    function _fnSortAria ( settings )
    {
        var label;
        var nextSort;
        var columns = settings.aoColumns;
        var aSort = _fnSortFlatten( settings );
        var oAria = settings.oLanguage.oAria;

        // ARIA attributes - need to loop all columns, to update all (removing old
        // attributes as needed)
        for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
        {
            var col = columns[i];
            var asSorting = col.asSorting;
            var sTitle = col.sTitle.replace( /<.*?>/g, "" );
            var th = col.nTh;

            // IE7 is throwing an error when setting these properties with jQuery's
            // attr() and removeAttr() methods...
            th.removeAttribute('aria-sort');

            /* In ARIA only the first sorting column can be marked as sorting - no multi-sort option */
            if ( col.bSortable ) {
                if ( aSort.length > 0 && aSort[0].col == i ) {
                    th.setAttribute('aria-sort', aSort[0].dir=="asc" ? "ascending" : "descending" );
                    nextSort = asSorting[ aSort[0].index+1 ] || asSorting[0];
                }
                else {
                    nextSort = asSorting[0];
                }

                label = sTitle + ( nextSort === "asc" ?
                    oAria.sSortAscending :
                    oAria.sSortDescending
                );
            }
            else {
                label = sTitle;
            }

            th.setAttribute('aria-label', label);
        }
    }


    /**
     * Function to run on user sort request
     *  @param {object} settings dataTables settings object
     *  @param {node} attachTo node to attach the handler to
     *  @param {int} colIdx column sorting index
     *  @param {boolean} [append=false] Append the requested sort to the existing
     *    sort if true (i.e. multi-column sort)
     *  @param {function} [callback] callback function
     *  @memberof DataTable#oApi
     */
    function _fnSortListener ( settings, colIdx, append, callback )
    {
        var col = settings.aoColumns[ colIdx ];
        var sorting = settings.aaSorting;
        var asSorting = col.asSorting;
        var nextSortIdx;
        var next = function ( a, overflow ) {
            var idx = a._idx;
            if ( idx === undefined ) {
                idx = $.inArray( a[1], asSorting );
            }

            return idx+1 < asSorting.length ?
            idx+1 :
                overflow ?
                    null :
                    0;
        };

        // Convert to 2D array if needed
        if ( typeof sorting[0] === 'number' ) {
            sorting = settings.aaSorting = [ sorting ];
        }

        // If appending the sort then we are multi-column sorting
        if ( append && settings.oFeatures.bSortMulti ) {
            // Are we already doing some kind of sort on this column?
            var sortIdx = $.inArray( colIdx, _pluck(sorting, '0') );

            if ( sortIdx !== -1 ) {
                // Yes, modify the sort
                nextSortIdx = next( sorting[sortIdx], true );

                if ( nextSortIdx === null && sorting.length === 1 ) {
                    nextSortIdx = 0; // can't remove sorting completely
                }

                if ( nextSortIdx === null ) {
                    sorting.splice( sortIdx, 1 );
                }
                else {
                    sorting[sortIdx][1] = asSorting[ nextSortIdx ];
                    sorting[sortIdx]._idx = nextSortIdx;
                }
            }
            else {
                // No sort on this column yet
                sorting.push( [ colIdx, asSorting[0], 0 ] );
                sorting[sorting.length-1]._idx = 0;
            }
        }
        else if ( sorting.length && sorting[0][0] == colIdx ) {
            // Single column - already sorting on this column, modify the sort
            nextSortIdx = next( sorting[0] );

            sorting.length = 1;
            sorting[0][1] = asSorting[ nextSortIdx ];
            sorting[0]._idx = nextSortIdx;
        }
        else {
            // Single column - sort only on this column
            sorting.length = 0;
            sorting.push( [ colIdx, asSorting[0] ] );
            sorting[0]._idx = 0;
        }

        // Run the sort by calling a full redraw
        _fnReDraw( settings );

        // callback used for async user interaction
        if ( typeof callback == 'function' ) {
            callback( settings );
        }
    }


    /**
     * Attach a sort handler (click) to a node
     *  @param {object} settings dataTables settings object
     *  @param {node} attachTo node to attach the handler to
     *  @param {int} colIdx column sorting index
     *  @param {function} [callback] callback function
     *  @memberof DataTable#oApi
     */
    function _fnSortAttachListener ( settings, attachTo, colIdx, callback )
    {
        var col = settings.aoColumns[ colIdx ];

        _fnBindAction( attachTo, {}, function (e) {
            /* If the column is not sortable - don't to anything */
            if ( col.bSortable === false ) {
                return;
            }

            // If processing is enabled use a timeout to allow the processing
            // display to be shown - otherwise to it synchronously
            if ( settings.oFeatures.bProcessing ) {
                _fnProcessingDisplay( settings, true );

                setTimeout( function() {
                    _fnSortListener( settings, colIdx, e.shiftKey, callback );

                    // In server-side processing, the draw callback will remove the
                    // processing display
                    if ( _fnDataSource( settings ) !== 'ssp' ) {
                        _fnProcessingDisplay( settings, false );
                    }
                }, 0 );
            }
            else {
                _fnSortListener( settings, colIdx, e.shiftKey, callback );
            }
        } );
    }


    /**
     * Set the sorting classes on table's body, Note: it is safe to call this function
     * when bSort and bSortClasses are false
     *  @param {object} oSettings dataTables settings object
     *  @memberof DataTable#oApi
     */
    function _fnSortingClasses( settings )
    {
        var oldSort = settings.aLastSort;
        var sortClass = settings.oClasses.sSortColumn;
        var sort = _fnSortFlatten( settings );
        var features = settings.oFeatures;
        var i, ien, colIdx;

        if ( features.bSort && features.bSortClasses ) {
            // Remove old sorting classes
            for ( i=0, ien=oldSort.length ; i<ien ; i++ ) {
                colIdx = oldSort[i].src;

                // Remove column sorting
                $( _pluck( settings.aoData, 'anCells', colIdx ) )
                    .removeClass( sortClass + (i<2 ? i+1 : 3) );
            }

            // Add new column sorting
            for ( i=0, ien=sort.length ; i<ien ; i++ ) {
                colIdx = sort[i].src;

                $( _pluck( settings.aoData, 'anCells', colIdx ) )
                    .addClass( sortClass + (i<2 ? i+1 : 3) );
            }
        }

        settings.aLastSort = sort;
    }


    // Get the data to sort a column, be it from cache, fresh (populating the
    // cache), or from a sort formatter
    function _fnSortData( settings, idx )
    {
        // Custom sorting function - provided by the sort data type
        var column = settings.aoColumns[ idx ];
        var customSort = DataTable.ext.order[ column.sSortDataType ];
        var customData;

        if ( customSort ) {
            customData = customSort.call( settings.oInstance, settings, idx,
                _fnColumnIndexToVisible( settings, idx )
            );
        }

        // Use / populate cache
        var row, cellData;
        var formatter = DataTable.ext.type.order[ column.sType+"-pre" ];

        for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
            row = settings.aoData[i];

            if ( ! row._aSortData ) {
                row._aSortData = [];
            }

            if ( ! row._aSortData[idx] || customSort ) {
                cellData = customSort ?
                    customData[i] : // If there was a custom sort function, use data from there
                    _fnGetCellData( settings, i, idx, 'sort' );

                row._aSortData[ idx ] = formatter ?
                    formatter( cellData ) :
                    cellData;
            }
        }
    }



    /**
     * Save the state of a table
     *  @param {object} oSettings dataTables settings object
     *  @memberof DataTable#oApi
     */
    function _fnSaveState ( settings )
    {
        if ( !settings.oFeatures.bStateSave || settings.bDestroying )
        {
            return;
        }

        /* Store the interesting variables */
        var state = {
            time:    +new Date(),
            start:   settings._iDisplayStart,
            length:  settings._iDisplayLength,
            order:   $.extend( true, [], settings.aaSorting ),
            search:  _fnSearchToCamel( settings.oPreviousSearch ),
            columns: $.map( settings.aoColumns, function ( col, i ) {
                return {
                    visible: col.bVisible,
                    search: _fnSearchToCamel( settings.aoPreSearchCols[i] )
                };
            } )
        };

        _fnCallbackFire( settings, "aoStateSaveParams", 'stateSaveParams', [settings, state] );

        settings.oSavedState = state;
        settings.fnStateSaveCallback.call( settings.oInstance, settings, state );
    }


    /**
     * Attempt to load a saved table state
     *  @param {object} oSettings dataTables settings object
     *  @param {object} oInit DataTables init object so we can override settings
     *  @memberof DataTable#oApi
     */
    function _fnLoadState ( settings, oInit )
    {
        var i, ien;
        var columns = settings.aoColumns;

        if ( ! settings.oFeatures.bStateSave ) {
            return;
        }

        var state = settings.fnStateLoadCallback.call( settings.oInstance, settings );
        if ( ! state || ! state.time ) {
            return;
        }

        /* Allow custom and plug-in manipulation functions to alter the saved data set and
         * cancelling of loading by returning false
         */
        var abStateLoad = _fnCallbackFire( settings, 'aoStateLoadParams', 'stateLoadParams', [settings, state] );
        if ( $.inArray( false, abStateLoad ) !== -1 ) {
            return;
        }

        /* Reject old data */
        var duration = settings.iStateDuration;
        if ( duration > 0 && state.time < +new Date() - (duration*1000) ) {
            return;
        }

        // Number of columns have changed - all bets are off, no restore of settings
        if ( columns.length !== state.columns.length ) {
            return;
        }

        // Store the saved state so it might be accessed at any time
        settings.oLoadedState = $.extend( true, {}, state );

        // Restore key features - todo - for 1.11 this needs to be done by
        // subscribed events
        if ( state.start !== undefined ) {
            settings._iDisplayStart    = state.start;
            settings.iInitDisplayStart = state.start;
        }
        if ( state.length !== undefined ) {
            settings._iDisplayLength   = state.length;
        }

        // Order
        if ( state.order !== undefined ) {
            settings.aaSorting = [];
            $.each( state.order, function ( i, col ) {
                settings.aaSorting.push( col[0] >= columns.length ?
                        [ 0, col[1] ] :
                        col
                );
            } );
        }

        // Search
        if ( state.search !== undefined ) {
            $.extend( settings.oPreviousSearch, _fnSearchToHung( state.search ) );
        }

        // Columns
        for ( i=0, ien=state.columns.length ; i<ien ; i++ ) {
            var col = state.columns[i];

            // Visibility
            if ( col.visible !== undefined ) {
                columns[i].bVisible = col.visible;
            }

            // Search
            if ( col.search !== undefined ) {
                $.extend( settings.aoPreSearchCols[i], _fnSearchToHung( col.search ) );
            }
        }

        _fnCallbackFire( settings, 'aoStateLoaded', 'stateLoaded', [settings, state] );
    }


    /**
     * Return the settings object for a particular table
     *  @param {node} table table we are using as a dataTable
     *  @returns {object} Settings object - or null if not found
     *  @memberof DataTable#oApi
     */
    function _fnSettingsFromNode ( table )
    {
        var settings = DataTable.settings;
        var idx = $.inArray( table, _pluck( settings, 'nTable' ) );

        return idx !== -1 ?
            settings[ idx ] :
            null;
    }


    /**
     * Log an error message
     *  @param {object} settings dataTables settings object
     *  @param {int} level log error messages, or display them to the user
     *  @param {string} msg error message
     *  @param {int} tn Technical note id to get more information about the error.
     *  @memberof DataTable#oApi
     */
    function _fnLog( settings, level, msg, tn )
    {
        msg = 'DataTables warning: '+
        (settings ? 'table id='+settings.sTableId+' - ' : '')+msg;

        if ( tn ) {
            msg += '. For more information about this error, please see '+
            'http://datatables.net/tn/'+tn;
        }

        if ( ! level  ) {
            // Backwards compatibility pre 1.10
            var ext = DataTable.ext;
            var type = ext.sErrMode || ext.errMode;

            if ( settings ) {
                _fnCallbackFire( settings, null, 'error', [ settings, tn, msg ] );
            }

            if ( type == 'alert' ) {
                alert( msg );
            }
            else if ( type == 'throw' ) {
                throw new Error(msg);
            }
            else if ( typeof type == 'function' ) {
                type( settings, tn, msg );
            }
        }
        else if ( window.console && console.log ) {
            console.log( msg );
        }
    }


    /**
     * See if a property is defined on one object, if so assign it to the other object
     *  @param {object} ret target object
     *  @param {object} src source object
     *  @param {string} name property
     *  @param {string} [mappedName] name to map too - optional, name used if not given
     *  @memberof DataTable#oApi
     */
    function _fnMap( ret, src, name, mappedName )
    {
        if ( $.isArray( name ) ) {
            $.each( name, function (i, val) {
                if ( $.isArray( val ) ) {
                    _fnMap( ret, src, val[0], val[1] );
                }
                else {
                    _fnMap( ret, src, val );
                }
            } );

            return;
        }

        if ( mappedName === undefined ) {
            mappedName = name;
        }

        if ( src[name] !== undefined ) {
            ret[mappedName] = src[name];
        }
    }


    /**
     * Extend objects - very similar to jQuery.extend, but deep copy objects, and
     * shallow copy arrays. The reason we need to do this, is that we don't want to
     * deep copy array init values (such as aaSorting) since the dev wouldn't be
     * able to override them, but we do want to deep copy arrays.
     *  @param {object} out Object to extend
     *  @param {object} extender Object from which the properties will be applied to
     *      out
     *  @param {boolean} breakRefs If true, then arrays will be sliced to take an
     *      independent copy with the exception of the `data` or `aaData` parameters
     *      if they are present. This is so you can pass in a collection to
     *      DataTables and have that used as your data source without breaking the
     *      references
     *  @returns {object} out Reference, just for convenience - out === the return.
     *  @memberof DataTable#oApi
     *  @todo This doesn't take account of arrays inside the deep copied objects.
     */
    function _fnExtend( out, extender, breakRefs )
    {
        var val;

        for ( var prop in extender ) {
            if ( extender.hasOwnProperty(prop) ) {
                val = extender[prop];

                if ( $.isPlainObject( val ) ) {
                    if ( ! $.isPlainObject( out[prop] ) ) {
                        out[prop] = {};
                    }
                    $.extend( true, out[prop], val );
                }
                else if ( breakRefs && prop !== 'data' && prop !== 'aaData' && $.isArray(val) ) {
                    out[prop] = val.slice();
                }
                else {
                    out[prop] = val;
                }
            }
        }

        return out;
    }


    /**
     * Bind an event handers to allow a click or return key to activate the callback.
     * This is good for accessibility since a return on the keyboard will have the
     * same effect as a click, if the element has focus.
     *  @param {element} n Element to bind the action to
     *  @param {object} oData Data object to pass to the triggered function
     *  @param {function} fn Callback function for when the event is triggered
     *  @memberof DataTable#oApi
     */
    function _fnBindAction( n, oData, fn )
    {
        $(n)
            .bind( 'click.DT', oData, function (e) {
                n.blur(); // Remove focus outline for mouse users
                fn(e);
            } )
            .bind( 'keypress.DT', oData, function (e){
                if ( e.which === 13 ) {
                    e.preventDefault();
                    fn(e);
                }
            } )
            .bind( 'selectstart.DT', function () {
                /* Take the brutal approach to cancelling text selection */
                return false;
            } );
    }


    /**
     * Register a callback function. Easily allows a callback function to be added to
     * an array store of callback functions that can then all be called together.
     *  @param {object} oSettings dataTables settings object
     *  @param {string} sStore Name of the array storage for the callbacks in oSettings
     *  @param {function} fn Function to be called back
     *  @param {string} sName Identifying name for the callback (i.e. a label)
     *  @memberof DataTable#oApi
     */
    function _fnCallbackReg( oSettings, sStore, fn, sName )
    {
        if ( fn )
        {
            oSettings[sStore].push( {
                "fn": fn,
                "sName": sName
            } );
        }
    }


    /**
     * Fire callback functions and trigger events. Note that the loop over the
     * callback array store is done backwards! Further note that you do not want to
     * fire off triggers in time sensitive applications (for example cell creation)
     * as its slow.
     *  @param {object} settings dataTables settings object
     *  @param {string} callbackArr Name of the array storage for the callbacks in
     *      oSettings
     *  @param {string} eventName Name of the jQuery custom event to trigger. If
     *      null no trigger is fired
     *  @param {array} args Array of arguments to pass to the callback function /
     *      trigger
     *  @memberof DataTable#oApi
     */
    function _fnCallbackFire( settings, callbackArr, eventName, args )
    {
        var ret = [];

        if ( callbackArr ) {
            ret = $.map( settings[callbackArr].slice().reverse(), function (val, i) {
                return val.fn.apply( settings.oInstance, args );
            } );
        }

        if ( eventName !== null ) {
            var e = $.Event( eventName+'.dt' );

            $(settings.nTable).trigger( e, args );

            ret.push( e.result );
        }

        return ret;
    }


    function _fnLengthOverflow ( settings )
    {
        var
            start = settings._iDisplayStart,
            end = settings.fnDisplayEnd(),
            len = settings._iDisplayLength;

        /* If we have space to show extra rows (backing up from the end point - then do so */
        if ( start >= end )
        {
            start = end - len;
        }

        // Keep the start record on the current page
        start -= (start % len);

        if ( len === -1 || start < 0 )
        {
            start = 0;
        }

        settings._iDisplayStart = start;
    }


    function _fnRenderer( settings, type )
    {
        var renderer = settings.renderer;
        var host = DataTable.ext.renderer[type];

        if ( $.isPlainObject( renderer ) && renderer[type] ) {
            // Specific renderer for this type. If available use it, otherwise use
            // the default.
            return host[renderer[type]] || host._;
        }
        else if ( typeof renderer === 'string' ) {
            // Common renderer - if there is one available for this type use it,
            // otherwise use the default
            return host[renderer] || host._;
        }

        // Use the default
        return host._;
    }


    /**
     * Detect the data source being used for the table. Used to simplify the code
     * a little (ajax) and to make it compress a little smaller.
     *
     *  @param {object} settings dataTables settings object
     *  @returns {string} Data source
     *  @memberof DataTable#oApi
     */
    function _fnDataSource ( settings )
    {
        if ( settings.oFeatures.bServerSide ) {
            return 'ssp';
        }
        else if ( settings.ajax || settings.sAjaxSource ) {
            return 'ajax';
        }
        return 'dom';
    }


    DataTable = function( options )
    {
        /**
         * Perform a jQuery selector action on the table's TR elements (from the tbody) and
         * return the resulting jQuery object.
         *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
         *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
         *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter
         *    criterion ("applied") or all TR elements (i.e. no filter).
         *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.
         *    Can be either 'current', whereby the current sorting of the table is used, or
         *    'original' whereby the original order the data was read into the table is used.
         *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
         *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
         *    'current' and filter is 'applied', regardless of what they might be given as.
         *  @returns {object} jQuery object, filtered by the given selector.
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Highlight every second row
		 *      oTable.$('tr:odd').css('backgroundColor', 'blue');
		 *    } );
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to rows with 'Webkit' in them, add a background colour and then
		 *      // remove the filter, thus highlighting the 'Webkit' rows only.
		 *      oTable.fnFilter('Webkit');
		 *      oTable.$('tr', {"search": "applied"}).css('backgroundColor', 'blue');
		 *      oTable.fnFilter('');
		 *    } );
         */
        this.$ = function ( sSelector, oOpts )
        {
            return this.api(true).$( sSelector, oOpts );
        };


        /**
         * Almost identical to $ in operation, but in this case returns the data for the matched
         * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes
         * rather than any descendants, so the data can be obtained for the row/cell. If matching
         * rows are found, the data returned is the original data array/object that was used to
         * create the row (or a generated array if from a DOM source).
         *
         * This method is often useful in-combination with $ where both functions are given the
         * same parameters and the array indexes will match identically.
         *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
         *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
         *  @param {string} [oOpts.filter=none] Select elements that meet the current filter
         *    criterion ("applied") or all elements (i.e. no filter).
         *  @param {string} [oOpts.order=current] Order of the data in the processed array.
         *    Can be either 'current', whereby the current sorting of the table is used, or
         *    'original' whereby the original order the data was read into the table is used.
         *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
         *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
         *    'current' and filter is 'applied', regardless of what they might be given as.
         *  @returns {array} Data for the matched elements. If any elements, as a result of the
         *    selector, were not TR, TD or TH elements in the DataTable, they will have a null
         *    entry in the array.
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the data from the first row in the table
		 *      var data = oTable._('tr:first');
		 *
		 *      // Do something useful with the data
		 *      alert( "First cell is: "+data[0] );
		 *    } );
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to 'Webkit' and get all data for
		 *      oTable.fnFilter('Webkit');
		 *      var data = oTable._('tr', {"search": "applied"});
		 *
		 *      // Do something with the data
		 *      alert( data.length+" rows matched the search" );
		 *    } );
         */
        this._ = function ( sSelector, oOpts )
        {
            return this.api(true).rows( sSelector, oOpts ).data();
        };


        /**
         * Create a DataTables Api instance, with the currently selected tables for
         * the Api's context.
         * @param {boolean} [traditional=false] Set the API instance's context to be
         *   only the table referred to by the `DataTable.ext.iApiIndex` option, as was
         *   used in the API presented by DataTables 1.9- (i.e. the traditional mode),
         *   or if all tables captured in the jQuery object should be used.
         * @return {DataTables.Api}
         */
        this.api = function ( traditional )
        {
            return traditional ?
                new _Api(
                    _fnSettingsFromNode( this[ _ext.iApiIndex ] )
                ) :
                new _Api( this );
        };


        /**
         * Add a single new row or multiple rows of data to the table. Please note
         * that this is suitable for client-side processing only - if you are using
         * server-side processing (i.e. "bServerSide": true), then to add data, you
         * must add it to the data source, i.e. the server-side, through an Ajax call.
         *  @param {array|object} data The data to be added to the table. This can be:
         *    <ul>
         *      <li>1D array of data - add a single row with the data provided</li>
         *      <li>2D array of arrays - add multiple rows in a single call</li>
         *      <li>object - data object when using <i>mData</i></li>
         *      <li>array of objects - multiple data objects when using <i>mData</i></li>
         *    </ul>
         *  @param {bool} [redraw=true] redraw the table or not
         *  @returns {array} An array of integers, representing the list of indexes in
         *    <i>aoData</i> ({@link DataTable.models.oSettings}) that have been added to
         *    the table.
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    // Global var for counter
         *    var giCount = 2;
         *
         *    $(document).ready(function() {
		 *      $('#example').dataTable();
		 *    } );
         *
         *    function fnClickAddRow() {
		 *      $('#example').dataTable().fnAddData( [
		 *        giCount+".1",
		 *        giCount+".2",
		 *        giCount+".3",
		 *        giCount+".4" ]
		 *      );
		 *
		 *      giCount++;
		 *    }
         */
        this.fnAddData = function( data, redraw )
        {
            var api = this.api( true );

            /* Check if we want to add multiple rows or not */
            var rows = $.isArray(data) && ( $.isArray(data[0]) || $.isPlainObject(data[0]) ) ?
                api.rows.add( data ) :
                api.row.add( data );

            if ( redraw === undefined || redraw ) {
                api.draw();
            }

            return rows.flatten().toArray();
        };


        /**
         * This function will make DataTables recalculate the column sizes, based on the data
         * contained in the table and the sizes applied to the columns (in the DOM, CSS or
         * through the sWidth parameter). This can be useful when the width of the table's
         * parent element changes (for example a window resize).
         *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "sScrollY": "200px",
		 *        "bPaginate": false
		 *      } );
		 *
		 *      $(window).bind('resize', function () {
		 *        oTable.fnAdjustColumnSizing();
		 *      } );
		 *    } );
         */
        this.fnAdjustColumnSizing = function ( bRedraw )
        {
            var api = this.api( true ).columns.adjust();
            var settings = api.settings()[0];
            var scroll = settings.oScroll;

            if ( bRedraw === undefined || bRedraw ) {
                api.draw( false );
            }
            else if ( scroll.sX !== "" || scroll.sY !== "" ) {
                /* If not redrawing, but scrolling, we want to apply the new column sizes anyway */
                _fnScrollDraw( settings );
            }
        };


        /**
         * Quickly and simply clear a table
         *  @param {bool} [bRedraw=true] redraw the table or not
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
		 *      oTable.fnClearTable();
		 *    } );
         */
        this.fnClearTable = function( bRedraw )
        {
            var api = this.api( true ).clear();

            if ( bRedraw === undefined || bRedraw ) {
                api.draw();
            }
        };


        /**
         * The exact opposite of 'opening' a row, this function will close any rows which
         * are currently 'open'.
         *  @param {node} nTr the table row to 'close'
         *  @returns {int} 0 on success, or 1 if failed (can't find the row)
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
         */
        this.fnClose = function( nTr )
        {
            this.api( true ).row( nTr ).child.hide();
        };


        /**
         * Remove a row for the table
         *  @param {mixed} target The index of the row from aoData to be deleted, or
         *    the TR element you want to delete
         *  @param {function|null} [callBack] Callback function
         *  @param {bool} [redraw=true] Redraw the table or not
         *  @returns {array} The row that was deleted
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately remove the first row
		 *      oTable.fnDeleteRow( 0 );
		 *    } );
         */
        this.fnDeleteRow = function( target, callback, redraw )
        {
            var api = this.api( true );
            var rows = api.rows( target );
            var settings = rows.settings()[0];
            var data = settings.aoData[ rows[0][0] ];

            rows.remove();

            if ( callback ) {
                callback.call( this, settings, data );
            }

            if ( redraw === undefined || redraw ) {
                api.draw();
            }

            return data;
        };


        /**
         * Restore the table to it's original state in the DOM by removing all of DataTables
         * enhancements, alterations to the DOM structure of the table and event listeners.
         *  @param {boolean} [remove=false] Completely remove the table from the DOM
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      // This example is fairly pointless in reality, but shows how fnDestroy can be used
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnDestroy();
		 *    } );
         */
        this.fnDestroy = function ( remove )
        {
            this.api( true ).destroy( remove );
        };


        /**
         * Redraw the table
         *  @param {bool} [complete=true] Re-filter and resort (if enabled) the table before the draw.
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)
		 *      oTable.fnDraw();
		 *    } );
         */
        this.fnDraw = function( complete )
        {
            // Note that this isn't an exact match to the old call to _fnDraw - it takes
            // into account the new data, but can hold position.
            this.api( true ).draw( complete );
        };


        /**
         * Filter the input based on data
         *  @param {string} sInput String to filter the table on
         *  @param {int|null} [iColumn] Column to limit filtering to
         *  @param {bool} [bRegex=false] Treat as regular expression or not
         *  @param {bool} [bSmart=true] Perform smart filtering or not
         *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)
         *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sometime later - filter...
		 *      oTable.fnFilter( 'test string' );
		 *    } );
         */
        this.fnFilter = function( sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive )
        {
            var api = this.api( true );

            if ( iColumn === null || iColumn === undefined ) {
                api.search( sInput, bRegex, bSmart, bCaseInsensitive );
            }
            else {
                api.column( iColumn ).search( sInput, bRegex, bSmart, bCaseInsensitive );
            }

            api.draw();
        };


        /**
         * Get the data for the whole table, an individual row or an individual cell based on the
         * provided parameters.
         *  @param {int|node} [src] A TR row node, TD/TH cell node or an integer. If given as
         *    a TR node then the data source for the whole row will be returned. If given as a
         *    TD/TH cell node then iCol will be automatically calculated and the data for the
         *    cell returned. If given as an integer, then this is treated as the aoData internal
         *    data index for the row (see fnGetPosition) and the data for that row used.
         *  @param {int} [col] Optional column index that you want the data of.
         *  @returns {array|object|string} If mRow is undefined, then the data for all rows is
         *    returned. If mRow is defined, just data for that row, and is iCol is
         *    defined, only data for the designated cell is returned.
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    // Row data
         *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('tr').click( function () {
		 *        var data = oTable.fnGetData( this );
		 *        // ... do something with the array / object of data for the row
		 *      } );
		 *    } );
         *
         *  @example
         *    // Individual cell data
         *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('td').click( function () {
		 *        var sData = oTable.fnGetData( this );
		 *        alert( 'The cell clicked on had the value of '+sData );
		 *      } );
		 *    } );
         */
        this.fnGetData = function( src, col )
        {
            var api = this.api( true );

            if ( src !== undefined ) {
                var type = src.nodeName ? src.nodeName.toLowerCase() : '';

                return col !== undefined || type == 'td' || type == 'th' ?
                    api.cell( src, col ).data() :
                api.row( src ).data() || null;
            }

            return api.data().toArray();
        };


        /**
         * Get an array of the TR nodes that are used in the table's body. Note that you will
         * typically want to use the '$' API method in preference to this as it is more
         * flexible.
         *  @param {int} [iRow] Optional row index for the TR element you want
         *  @returns {array|node} If iRow is undefined, returns an array of all TR elements
         *    in the table's body, or iRow is defined, just the TR element requested.
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the nodes from the table
		 *      var nNodes = oTable.fnGetNodes( );
		 *    } );
         */
        this.fnGetNodes = function( iRow )
        {
            var api = this.api( true );

            return iRow !== undefined ?
                api.row( iRow ).node() :
                api.rows().nodes().flatten().toArray();
        };


        /**
         * Get the array indexes of a particular cell from it's DOM element
         * and column index including hidden columns
         *  @param {node} node this can either be a TR, TD or TH in the table's body
         *  @returns {int} If nNode is given as a TR, then a single index is returned, or
         *    if given as a cell, an array of [row index, column index (visible),
         *    column index (all)] is given.
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      $('#example tbody td').click( function () {
		 *        // Get the position of the current data from the node
		 *        var aPos = oTable.fnGetPosition( this );
		 *
		 *        // Get the data array for this row
		 *        var aData = oTable.fnGetData( aPos[0] );
		 *
		 *        // Update the data array and return the value
		 *        aData[ aPos[1] ] = 'clicked';
		 *        this.innerHTML = 'clicked';
		 *      } );
		 *
		 *      // Init DataTables
		 *      oTable = $('#example').dataTable();
		 *    } );
         */
        this.fnGetPosition = function( node )
        {
            var api = this.api( true );
            var nodeName = node.nodeName.toUpperCase();

            if ( nodeName == 'TR' ) {
                return api.row( node ).index();
            }
            else if ( nodeName == 'TD' || nodeName == 'TH' ) {
                var cell = api.cell( node ).index();

                return [
                    cell.row,
                    cell.columnVisible,
                    cell.column
                ];
            }
            return null;
        };


        /**
         * Check to see if a row is 'open' or not.
         *  @param {node} nTr the table row to check
         *  @returns {boolean} true if the row is currently open, false otherwise
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
         */
        this.fnIsOpen = function( nTr )
        {
            return this.api( true ).row( nTr ).child.isShown();
        };


        /**
         * This function will place a new row directly after a row which is currently
         * on display on the page, with the HTML contents that is passed into the
         * function. This can be used, for example, to ask for confirmation that a
         * particular record should be deleted.
         *  @param {node} nTr The table row to 'open'
         *  @param {string|node|jQuery} mHtml The HTML to put into the row
         *  @param {string} sClass Class to give the new TD cell
         *  @returns {node} The row opened. Note that if the table row passed in as the
         *    first parameter, is not found in the table, this method will silently
         *    return.
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
         */
        this.fnOpen = function( nTr, mHtml, sClass )
        {
            return this.api( true )
                .row( nTr )
                .child( mHtml, sClass )
                .show()
                .child()[0];
        };


        /**
         * Change the pagination - provides the internal logic for pagination in a simple API
         * function. With this function you can have a DataTables table go to the next,
         * previous, first or last pages.
         *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
         *    or page number to jump to (integer), note that page 0 is the first page.
         *  @param {bool} [bRedraw=true] Redraw the table or not
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnPageChange( 'next' );
		 *    } );
         */
        this.fnPageChange = function ( mAction, bRedraw )
        {
            var api = this.api( true ).page( mAction );

            if ( bRedraw === undefined || bRedraw ) {
                api.draw(false);
            }
        };


        /**
         * Show a particular column
         *  @param {int} iCol The column whose display should be changed
         *  @param {bool} bShow Show (true) or hide (false) the column
         *  @param {bool} [bRedraw=true] Redraw the table or not
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Hide the second column after initialisation
		 *      oTable.fnSetColumnVis( 1, false );
		 *    } );
         */
        this.fnSetColumnVis = function ( iCol, bShow, bRedraw )
        {
            var api = this.api( true ).column( iCol ).visible( bShow );

            if ( bRedraw === undefined || bRedraw ) {
                api.columns.adjust().draw();
            }
        };


        /**
         * Get the settings for a particular table for external manipulation
         *  @returns {object} DataTables settings object. See
         *    {@link DataTable.models.oSettings}
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      var oSettings = oTable.fnSettings();
		 *
		 *      // Show an example parameter from the settings
		 *      alert( oSettings._iDisplayStart );
		 *    } );
         */
        this.fnSettings = function()
        {
            return _fnSettingsFromNode( this[_ext.iApiIndex] );
        };


        /**
         * Sort the table by a particular column
         *  @param {int} iCol the data index to sort on. Note that this will not match the
         *    'display index' if you have hidden data entries
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort immediately with columns 0 and 1
		 *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );
		 *    } );
         */
        this.fnSort = function( aaSort )
        {
            this.api( true ).order( aaSort ).draw();
        };


        /**
         * Attach a sort listener to an element for a given column
         *  @param {node} nNode the element to attach the sort listener to
         *  @param {int} iColumn the column that a click on this node will sort on
         *  @param {function} [fnCallback] callback function when sort is run
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort on column 1, when 'sorter' is clicked on
		 *      oTable.fnSortListener( document.getElementById('sorter'), 1 );
		 *    } );
         */
        this.fnSortListener = function( nNode, iColumn, fnCallback )
        {
            this.api( true ).order.listener( nNode, iColumn, fnCallback );
        };


        /**
         * Update a table cell or row - this method will accept either a single value to
         * update the cell with, an array of values with one element for each column or
         * an object in the same format as the original data source. The function is
         * self-referencing in order to make the multi column updates easier.
         *  @param {object|array|string} mData Data to update the cell/row with
         *  @param {node|int} mRow TR element you want to update or the aoData index
         *  @param {int} [iColumn] The column to update, give as null or undefined to
         *    update a whole row.
         *  @param {bool} [bRedraw=true] Redraw the table or not
         *  @param {bool} [bAction=true] Perform pre-draw actions or not
         *  @returns {int} 0 on success, 1 on error
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell
		 *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], $('tbody tr')[0] ); // Row
		 *    } );
         */
        this.fnUpdate = function( mData, mRow, iColumn, bRedraw, bAction )
        {
            var api = this.api( true );

            if ( iColumn === undefined || iColumn === null ) {
                api.row( mRow ).data( mData );
            }
            else {
                api.cell( mRow, iColumn ).data( mData );
            }

            if ( bAction === undefined || bAction ) {
                api.columns.adjust();
            }

            if ( bRedraw === undefined || bRedraw ) {
                api.draw();
            }
            return 0;
        };


        /**
         * Provide a common method for plug-ins to check the version of DataTables being used, in order
         * to ensure compatibility.
         *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
         *    formats "X" and "X.Y" are also acceptable.
         *  @returns {boolean} true if this version of DataTables is greater or equal to the required
         *    version, or false if this version of DataTales is not suitable
         *  @method
         *  @dtopt API
         *  @deprecated Since v1.10
         *
         *  @example
         *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      alert( oTable.fnVersionCheck( '1.9.0' ) );
		 *    } );
         */
        this.fnVersionCheck = _ext.fnVersionCheck;


        var _that = this;
        var emptyInit = options === undefined;
        var len = this.length;

        if ( emptyInit ) {
            options = {};
        }

        this.oApi = this.internal = _ext.internal;

        // Extend with old style plug-in API methods
        for ( var fn in DataTable.ext.internal ) {
            if ( fn ) {
                this[fn] = _fnExternApiFunc(fn);
            }
        }

        this.each(function() {
            // For each initialisation we want to give it a clean initialisation
            // object that can be bashed around
            var o = {};
            var oInit = len > 1 ? // optimisation for single table case
                _fnExtend( o, options, true ) :
                options;

            /*global oInit,_that,emptyInit*/
            var i=0, iLen, j, jLen, k, kLen;
            var sId = this.getAttribute( 'id' );
            var bInitHandedOff = false;
            var defaults = DataTable.defaults;
            var $this = $(this);


            /* Sanity check */
            if ( this.nodeName.toLowerCase() != 'table' )
            {
                _fnLog( null, 0, 'Non-table node initialisation ('+this.nodeName+')', 2 );
                return;
            }

            /* Backwards compatibility for the defaults */
            _fnCompatOpts( defaults );
            _fnCompatCols( defaults.column );

            /* Convert the camel-case defaults to Hungarian */
            _fnCamelToHungarian( defaults, defaults, true );
            _fnCamelToHungarian( defaults.column, defaults.column, true );

            /* Setting up the initialisation object */
            _fnCamelToHungarian( defaults, $.extend( oInit, $this.data() ) );



            /* Check to see if we are re-initialising a table */
            var allSettings = DataTable.settings;
            for ( i=0, iLen=allSettings.length ; i<iLen ; i++ )
            {
                var s = allSettings[i];

                /* Base check on table node */
                if ( s.nTable == this || s.nTHead.parentNode == this || (s.nTFoot && s.nTFoot.parentNode == this) )
                {
                    var bRetrieve = oInit.bRetrieve !== undefined ? oInit.bRetrieve : defaults.bRetrieve;
                    var bDestroy = oInit.bDestroy !== undefined ? oInit.bDestroy : defaults.bDestroy;

                    if ( emptyInit || bRetrieve )
                    {
                        return s.oInstance;
                    }
                    else if ( bDestroy )
                    {
                        s.oInstance.fnDestroy();
                        break;
                    }
                    else
                    {
                        _fnLog( s, 0, 'Cannot reinitialise DataTable', 3 );
                        return;
                    }
                }

                /* If the element we are initialising has the same ID as a table which was previously
                 * initialised, but the table nodes don't match (from before) then we destroy the old
                 * instance by simply deleting it. This is under the assumption that the table has been
                 * destroyed by other methods. Anyone using non-id selectors will need to do this manually
                 */
                if ( s.sTableId == this.id )
                {
                    allSettings.splice( i, 1 );
                    break;
                }
            }

            /* Ensure the table has an ID - required for accessibility */
            if ( sId === null || sId === "" )
            {
                sId = "DataTables_Table_"+(DataTable.ext._unique++);
                this.id = sId;
            }

            /* Create the settings object for this table and set some of the default parameters */
            var oSettings = $.extend( true, {}, DataTable.models.oSettings, {
                "sDestroyWidth": $this[0].style.width,
                "sInstance":     sId,
                "sTableId":      sId
            } );
            oSettings.nTable = this;
            oSettings.oApi   = _that.internal;
            oSettings.oInit  = oInit;

            allSettings.push( oSettings );

            // Need to add the instance after the instance after the settings object has been added
            // to the settings array, so we can self reference the table instance if more than one
            oSettings.oInstance = (_that.length===1) ? _that : $this.dataTable();

            // Backwards compatibility, before we apply all the defaults
            _fnCompatOpts( oInit );

            if ( oInit.oLanguage )
            {
                _fnLanguageCompat( oInit.oLanguage );
            }

            // If the length menu is given, but the init display length is not, use the length menu
            if ( oInit.aLengthMenu && ! oInit.iDisplayLength )
            {
                oInit.iDisplayLength = $.isArray( oInit.aLengthMenu[0] ) ?
                    oInit.aLengthMenu[0][0] : oInit.aLengthMenu[0];
            }

            // Apply the defaults and init options to make a single init object will all
            // options defined from defaults and instance options.
            oInit = _fnExtend( $.extend( true, {}, defaults ), oInit );


            // Map the initialisation options onto the settings object
            _fnMap( oSettings.oFeatures, oInit, [
                "bPaginate",
                "bLengthChange",
                "bFilter",
                "bSort",
                "bSortMulti",
                "bInfo",
                "bProcessing",
                "bAutoWidth",
                "bSortClasses",
                "bServerSide",
                "bDeferRender"
            ] );
            _fnMap( oSettings, oInit, [
                "asStripeClasses",
                "ajax",
                "fnServerData",
                "fnFormatNumber",
                "sServerMethod",
                "aaSorting",
                "aaSortingFixed",
                "aLengthMenu",
                "sPaginationType",
                "sAjaxSource",
                "sAjaxDataProp",
                "iStateDuration",
                "sDom",
                "bSortCellsTop",
                "iTabIndex",
                "fnStateLoadCallback",
                "fnStateSaveCallback",
                "renderer",
                "searchDelay",
                "rowId",
                [ "iCookieDuration", "iStateDuration" ], // backwards compat
                [ "oSearch", "oPreviousSearch" ],
                [ "aoSearchCols", "aoPreSearchCols" ],
                [ "iDisplayLength", "_iDisplayLength" ],
                [ "bJQueryUI", "bJUI" ]
            ] );
            _fnMap( oSettings.oScroll, oInit, [
                [ "sScrollX", "sX" ],
                [ "sScrollXInner", "sXInner" ],
                [ "sScrollY", "sY" ],
                [ "bScrollCollapse", "bCollapse" ]
            ] );
            _fnMap( oSettings.oLanguage, oInit, "fnInfoCallback" );

            /* Callback functions which are array driven */
            _fnCallbackReg( oSettings, 'aoDrawCallback',       oInit.fnDrawCallback,      'user' );
            _fnCallbackReg( oSettings, 'aoServerParams',       oInit.fnServerParams,      'user' );
            _fnCallbackReg( oSettings, 'aoStateSaveParams',    oInit.fnStateSaveParams,   'user' );
            _fnCallbackReg( oSettings, 'aoStateLoadParams',    oInit.fnStateLoadParams,   'user' );
            _fnCallbackReg( oSettings, 'aoStateLoaded',        oInit.fnStateLoaded,       'user' );
            _fnCallbackReg( oSettings, 'aoRowCallback',        oInit.fnRowCallback,       'user' );
            _fnCallbackReg( oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow,        'user' );
            _fnCallbackReg( oSettings, 'aoHeaderCallback',     oInit.fnHeaderCallback,    'user' );
            _fnCallbackReg( oSettings, 'aoFooterCallback',     oInit.fnFooterCallback,    'user' );
            _fnCallbackReg( oSettings, 'aoInitComplete',       oInit.fnInitComplete,      'user' );
            _fnCallbackReg( oSettings, 'aoPreDrawCallback',    oInit.fnPreDrawCallback,   'user' );

            oSettings.rowIdFn = _fnGetObjectDataFn( oInit.rowId );

            /* Browser support detection */
            _fnBrowserDetect( oSettings );

            var oClasses = oSettings.oClasses;

            // @todo Remove in 1.11
            if ( oInit.bJQueryUI )
            {
                /* Use the JUI classes object for display. You could clone the oStdClasses object if
                 * you want to have multiple tables with multiple independent classes
                 */
                $.extend( oClasses, DataTable.ext.oJUIClasses, oInit.oClasses );

                if ( oInit.sDom === defaults.sDom && defaults.sDom === "lfrtip" )
                {
                    /* Set the DOM to use a layout suitable for jQuery UI's theming */
                    oSettings.sDom = '<"H"lfr>t<"F"ip>';
                }

                if ( ! oSettings.renderer ) {
                    oSettings.renderer = 'jqueryui';
                }
                else if ( $.isPlainObject( oSettings.renderer ) && ! oSettings.renderer.header ) {
                    oSettings.renderer.header = 'jqueryui';
                }
            }
            else
            {
                $.extend( oClasses, DataTable.ext.classes, oInit.oClasses );
            }
            $this.addClass( oClasses.sTable );


            if ( oSettings.iInitDisplayStart === undefined )
            {
                /* Display start point, taking into account the save saving */
                oSettings.iInitDisplayStart = oInit.iDisplayStart;
                oSettings._iDisplayStart = oInit.iDisplayStart;
            }

            if ( oInit.iDeferLoading !== null )
            {
                oSettings.bDeferLoading = true;
                var tmp = $.isArray( oInit.iDeferLoading );
                oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
                oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
            }

            /* Language definitions */
            var oLanguage = oSettings.oLanguage;
            $.extend( true, oLanguage, oInit.oLanguage );

            if ( oLanguage.sUrl !== "" )
            {
                /* Get the language definitions from a file - because this Ajax call makes the language
                 * get async to the remainder of this function we use bInitHandedOff to indicate that
                 * _fnInitialise will be fired by the returned Ajax handler, rather than the constructor
                 */
                $.ajax( {
                    dataType: 'json',
                    url: oLanguage.sUrl,
                    success: function ( json ) {
                        _fnLanguageCompat( json );
                        _fnCamelToHungarian( defaults.oLanguage, json );
                        $.extend( true, oLanguage, json );
                        _fnInitialise( oSettings );
                    },
                    error: function () {
                        // Error occurred loading language file, continue on as best we can
                        _fnInitialise( oSettings );
                    }
                } );
                bInitHandedOff = true;
            }

            /*
             * Stripes
             */
            if ( oInit.asStripeClasses === null )
            {
                oSettings.asStripeClasses =[
                    oClasses.sStripeOdd,
                    oClasses.sStripeEven
                ];
            }

            /* Remove row stripe classes if they are already on the table row */
            var stripeClasses = oSettings.asStripeClasses;
            var rowOne = $this.children('tbody').find('tr').eq(0);
            if ( $.inArray( true, $.map( stripeClasses, function(el, i) {
                    return rowOne.hasClass(el);
                } ) ) !== -1 ) {
                $('tbody tr', this).removeClass( stripeClasses.join(' ') );
                oSettings.asDestroyStripes = stripeClasses.slice();
            }

            /*
             * Columns
             * See if we should load columns automatically or use defined ones
             */
            var anThs = [];
            var aoColumnsInit;
            var nThead = this.getElementsByTagName('thead');
            if ( nThead.length !== 0 )
            {
                _fnDetectHeader( oSettings.aoHeader, nThead[0] );
                anThs = _fnGetUniqueThs( oSettings );
            }

            /* If not given a column array, generate one with nulls */
            if ( oInit.aoColumns === null )
            {
                aoColumnsInit = [];
                for ( i=0, iLen=anThs.length ; i<iLen ; i++ )
                {
                    aoColumnsInit.push( null );
                }
            }
            else
            {
                aoColumnsInit = oInit.aoColumns;
            }

            /* Add the columns */
            for ( i=0, iLen=aoColumnsInit.length ; i<iLen ; i++ )
            {
                _fnAddColumn( oSettings, anThs ? anThs[i] : null );
            }

            /* Apply the column definitions */
            _fnApplyColumnDefs( oSettings, oInit.aoColumnDefs, aoColumnsInit, function (iCol, oDef) {
                _fnColumnOptions( oSettings, iCol, oDef );
            } );

            /* HTML5 attribute detection - build an mData object automatically if the
             * attributes are found
             */
            if ( rowOne.length ) {
                var a = function ( cell, name ) {
                    return cell.getAttribute( 'data-'+name ) !== null ? name : null;
                };

                $( rowOne[0] ).children('th, td').each( function (i, cell) {
                    var col = oSettings.aoColumns[i];

                    if ( col.mData === i ) {
                        var sort = a( cell, 'sort' ) || a( cell, 'order' );
                        var filter = a( cell, 'filter' ) || a( cell, 'search' );

                        if ( sort !== null || filter !== null ) {
                            col.mData = {
                                _:      i+'.display',
                                sort:   sort !== null   ? i+'.@data-'+sort   : undefined,
                                type:   sort !== null   ? i+'.@data-'+sort   : undefined,
                                filter: filter !== null ? i+'.@data-'+filter : undefined
                            };

                            _fnColumnOptions( oSettings, i );
                        }
                    }
                } );
            }

            var features = oSettings.oFeatures;

            /* Must be done after everything which can be overridden by the state saving! */
            if ( oInit.bStateSave )
            {
                features.bStateSave = true;
                _fnLoadState( oSettings, oInit );
                _fnCallbackReg( oSettings, 'aoDrawCallback', _fnSaveState, 'state_save' );
            }


            /*
             * Sorting
             * @todo For modularisation (1.11) this needs to do into a sort start up handler
             */

            // If aaSorting is not defined, then we use the first indicator in asSorting
            // in case that has been altered, so the default sort reflects that option
            if ( oInit.aaSorting === undefined )
            {
                var sorting = oSettings.aaSorting;
                for ( i=0, iLen=sorting.length ; i<iLen ; i++ )
                {
                    sorting[i][1] = oSettings.aoColumns[ i ].asSorting[0];
                }
            }

            /* Do a first pass on the sorting classes (allows any size changes to be taken into
             * account, and also will apply sorting disabled classes if disabled
             */
            _fnSortingClasses( oSettings );

            if ( features.bSort )
            {
                _fnCallbackReg( oSettings, 'aoDrawCallback', function () {
                    if ( oSettings.bSorted ) {
                        var aSort = _fnSortFlatten( oSettings );
                        var sortedColumns = {};

                        $.each( aSort, function (i, val) {
                            sortedColumns[ val.src ] = val.dir;
                        } );

                        _fnCallbackFire( oSettings, null, 'order', [oSettings, aSort, sortedColumns] );
                        _fnSortAria( oSettings );
                    }
                } );
            }

            _fnCallbackReg( oSettings, 'aoDrawCallback', function () {
                if ( oSettings.bSorted || _fnDataSource( oSettings ) === 'ssp' || features.bDeferRender ) {
                    _fnSortingClasses( oSettings );
                }
            }, 'sc' );


            /*
             * Final init
             * Cache the header, body and footer as required, creating them if needed
             */

            // Work around for Webkit bug 83867 - store the caption-side before removing from doc
            var captions = $this.children('caption').each( function () {
                this._captionSide = $this.css('caption-side');
            } );

            var thead = $this.children('thead');
            if ( thead.length === 0 )
            {
                thead = $('<thead/>').appendTo(this);
            }
            oSettings.nTHead = thead[0];

            var tbody = $this.children('tbody');
            if ( tbody.length === 0 )
            {
                tbody = $('<tbody/>').appendTo(this);
            }
            oSettings.nTBody = tbody[0];

            var tfoot = $this.children('tfoot');
            if ( tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "") )
            {
                // If we are a scrolling table, and no footer has been given, then we need to create
                // a tfoot element for the caption element to be appended to
                tfoot = $('<tfoot/>').appendTo(this);
            }

            if ( tfoot.length === 0 || tfoot.children().length === 0 ) {
                $this.addClass( oClasses.sNoFooter );
            }
            else if ( tfoot.length > 0 ) {
                oSettings.nTFoot = tfoot[0];
                _fnDetectHeader( oSettings.aoFooter, oSettings.nTFoot );
            }

            /* Check if there is data passing into the constructor */
            if ( oInit.aaData )
            {
                for ( i=0 ; i<oInit.aaData.length ; i++ )
                {
                    _fnAddData( oSettings, oInit.aaData[ i ] );
                }
            }
            else if ( oSettings.bDeferLoading || _fnDataSource( oSettings ) == 'dom' )
            {
                /* Grab the data from the page - only do this when deferred loading or no Ajax
                 * source since there is no point in reading the DOM data if we are then going
                 * to replace it with Ajax data
                 */
                _fnAddTr( oSettings, $(oSettings.nTBody).children('tr') );
            }

            /* Copy the data index array */
            oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();

            /* Initialisation complete - table can be drawn */
            oSettings.bInitialised = true;

            /* Check if we need to initialise the table (it might not have been handed off to the
             * language processor)
             */
            if ( bInitHandedOff === false )
            {
                _fnInitialise( oSettings );
            }
        } );
        _that = null;
        return this;
    };



    /**
     * Computed structure of the DataTables API, defined by the options passed to
     * `DataTable.Api.register()` when building the API.
     *
     * The structure is built in order to speed creation and extension of the Api
     * objects since the extensions are effectively pre-parsed.
     *
     * The array is an array of objects with the following structure, where this
     * base array represents the Api prototype base:
     *
     *     [
     *       {
	 *         name:      'data'                -- string   - Property name
	 *         val:       function () {},       -- function - Api method (or undefined if just an object
	 *         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	 *         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	 *       },
     *       {
	 *         name:     'row'
	 *         val:       {},
	 *         methodExt: [ ... ],
	 *         propExt:   [
	 *           {
	 *             name:      'data'
	 *             val:       function () {},
	 *             methodExt: [ ... ],
	 *             propExt:   [ ... ]
	 *           },
	 *           ...
	 *         ]
	 *       }
     *     ]
     *
     * @type {Array}
     * @ignore
     */
    var __apiStruct = [];


    /**
     * `Array.prototype` reference.
     *
     * @type object
     * @ignore
     */
    var __arrayProto = Array.prototype;


    /**
     * Abstraction for `context` parameter of the `Api` constructor to allow it to
     * take several different forms for ease of use.
     *
     * Each of the input parameter types will be converted to a DataTables settings
     * object where possible.
     *
     * @param  {string|node|jQuery|object} mixed DataTable identifier. Can be one
     *   of:
     *
     *   * `string` - jQuery selector. Any DataTables' matching the given selector
     *     with be found and used.
     *   * `node` - `TABLE` node which has already been formed into a DataTable.
     *   * `jQuery` - A jQuery object of `TABLE` nodes.
     *   * `object` - DataTables settings object
     *   * `DataTables.Api` - API instance
     * @return {array|null} Matching DataTables settings objects. `null` or
     *   `undefined` is returned if no matching DataTable is found.
     * @ignore
     */
    var _toSettings = function ( mixed )
    {
        var idx, jq;
        var settings = DataTable.settings;
        var tables = $.map( settings, function (el, i) {
            return el.nTable;
        } );

        if ( ! mixed ) {
            return [];
        }
        else if ( mixed.nTable && mixed.oApi ) {
            // DataTables settings object
            return [ mixed ];
        }
        else if ( mixed.nodeName && mixed.nodeName.toLowerCase() === 'table' ) {
            // Table node
            idx = $.inArray( mixed, tables );
            return idx !== -1 ? [ settings[idx] ] : null;
        }
        else if ( mixed && typeof mixed.settings === 'function' ) {
            return mixed.settings().toArray();
        }
        else if ( typeof mixed === 'string' ) {
            // jQuery selector
            jq = $(mixed);
        }
        else if ( mixed instanceof $ ) {
            // jQuery object (also DataTables instance)
            jq = mixed;
        }

        if ( jq ) {
            return jq.map( function(i) {
                idx = $.inArray( this, tables );
                return idx !== -1 ? settings[idx] : null;
            } ).toArray();
        }
    };


    /**
     * DataTables API class - used to control and interface with  one or more
     * DataTables enhanced tables.
     *
     * The API class is heavily based on jQuery, presenting a chainable interface
     * that you can use to interact with tables. Each instance of the API class has
     * a "context" - i.e. the tables that it will operate on. This could be a single
     * table, all tables on a page or a sub-set thereof.
     *
     * Additionally the API is designed to allow you to easily work with the data in
     * the tables, retrieving and manipulating it as required. This is done by
     * presenting the API class as an array like interface. The contents of the
     * array depend upon the actions requested by each method (for example
     * `rows().nodes()` will return an array of nodes, while `rows().data()` will
     * return an array of objects or arrays depending upon your table's
     * configuration). The API object has a number of array like methods (`push`,
     * `pop`, `reverse` etc) as well as additional helper methods (`each`, `pluck`,
     * `unique` etc) to assist your working with the data held in a table.
     *
     * Most methods (those which return an Api instance) are chainable, which means
     * the return from a method call also has all of the methods available that the
     * top level object had. For example, these two calls are equivalent:
     *
     *     // Not chained
     *     api.row.add( {...} );
     *     api.draw();
     *
     *     // Chained
     *     api.row.add( {...} ).draw();
     *
     * @class DataTable.Api
     * @param {array|object|string|jQuery} context DataTable identifier. This is
     *   used to define which DataTables enhanced tables this API will operate on.
     *   Can be one of:
     *
     *   * `string` - jQuery selector. Any DataTables' matching the given selector
     *     with be found and used.
     *   * `node` - `TABLE` node which has already been formed into a DataTable.
     *   * `jQuery` - A jQuery object of `TABLE` nodes.
     *   * `object` - DataTables settings object
     * @param {array} [data] Data to initialise the Api instance with.
     *
     * @example
     *   // Direct initialisation during DataTables construction
     *   var api = $('#example').DataTable();
     *
     * @example
     *   // Initialisation using a DataTables jQuery object
     *   var api = $('#example').dataTable().api();
     *
     * @example
     *   // Initialisation as a constructor
     *   var api = new $.fn.DataTable.Api( 'table.dataTable' );
     */
    _Api = function ( context, data )
    {
        if ( ! (this instanceof _Api) ) {
            return new _Api( context, data );
        }

        var settings = [];
        var ctxSettings = function ( o ) {
            var a = _toSettings( o );
            if ( a ) {
                settings = settings.concat( a );
            }
        };

        if ( $.isArray( context ) ) {
            for ( var i=0, ien=context.length ; i<ien ; i++ ) {
                ctxSettings( context[i] );
            }
        }
        else {
            ctxSettings( context );
        }

        // Remove duplicates
        this.context = _unique( settings );

        // Initial data
        if ( data ) {
            $.merge( this, data );
        }

        // selector
        this.selector = {
            rows: null,
            cols: null,
            opts: null
        };

        _Api.extend( this, this, __apiStruct );
    };

    DataTable.Api = _Api;

    // Don't destroy the existing prototype, just extend it. Required for jQuery 2's
    // isPlainObject.
    $.extend( _Api.prototype, {
        any: function ()
        {
            return this.count() !== 0;
        },


        concat:  __arrayProto.concat,


        context: [], // array of table settings objects


        count: function ()
        {
            return this.flatten().length;
        },


        each: function ( fn )
        {
            for ( var i=0, ien=this.length ; i<ien; i++ ) {
                fn.call( this, this[i], i, this );
            }

            return this;
        },


        eq: function ( idx )
        {
            var ctx = this.context;

            return ctx.length > idx ?
                new _Api( ctx[idx], this[idx] ) :
                null;
        },


        filter: function ( fn )
        {
            var a = [];

            if ( __arrayProto.filter ) {
                a = __arrayProto.filter.call( this, fn, this );
            }
            else {
                // Compatibility for browsers without EMCA-252-5 (JS 1.6)
                for ( var i=0, ien=this.length ; i<ien ; i++ ) {
                    if ( fn.call( this, this[i], i, this ) ) {
                        a.push( this[i] );
                    }
                }
            }

            return new _Api( this.context, a );
        },


        flatten: function ()
        {
            var a = [];
            return new _Api( this.context, a.concat.apply( a, this.toArray() ) );
        },


        join:    __arrayProto.join,


        indexOf: __arrayProto.indexOf || function (obj, start)
        {
            for ( var i=(start || 0), ien=this.length ; i<ien ; i++ ) {
                if ( this[i] === obj ) {
                    return i;
                }
            }
            return -1;
        },

        iterator: function ( flatten, type, fn, alwaysNew ) {
            var
                a = [], ret,
                i, ien, j, jen,
                context = this.context,
                rows, items, item,
                selector = this.selector;

            // Argument shifting
            if ( typeof flatten === 'string' ) {
                alwaysNew = fn;
                fn = type;
                type = flatten;
                flatten = false;
            }

            for ( i=0, ien=context.length ; i<ien ; i++ ) {
                var apiInst = new _Api( context[i] );

                if ( type === 'table' ) {
                    ret = fn.call( apiInst, context[i], i );

                    if ( ret !== undefined ) {
                        a.push( ret );
                    }
                }
                else if ( type === 'columns' || type === 'rows' ) {
                    // this has same length as context - one entry for each table
                    ret = fn.call( apiInst, context[i], this[i], i );

                    if ( ret !== undefined ) {
                        a.push( ret );
                    }
                }
                else if ( type === 'column' || type === 'column-rows' || type === 'row' || type === 'cell' ) {
                    // columns and rows share the same structure.
                    // 'this' is an array of column indexes for each context
                    items = this[i];

                    if ( type === 'column-rows' ) {
                        rows = _selector_row_indexes( context[i], selector.opts );
                    }

                    for ( j=0, jen=items.length ; j<jen ; j++ ) {
                        item = items[j];

                        if ( type === 'cell' ) {
                            ret = fn.call( apiInst, context[i], item.row, item.column, i, j );
                        }
                        else {
                            ret = fn.call( apiInst, context[i], item, i, j, rows );
                        }

                        if ( ret !== undefined ) {
                            a.push( ret );
                        }
                    }
                }
            }

            if ( a.length || alwaysNew ) {
                var api = new _Api( context, flatten ? a.concat.apply( [], a ) : a );
                var apiSelector = api.selector;
                apiSelector.rows = selector.rows;
                apiSelector.cols = selector.cols;
                apiSelector.opts = selector.opts;
                return api;
            }
            return this;
        },


        lastIndexOf: __arrayProto.lastIndexOf || function (obj, start)
        {
            // Bit cheeky...
            return this.indexOf.apply( this.toArray.reverse(), arguments );
        },


        length:  0,


        map: function ( fn )
        {
            var a = [];

            if ( __arrayProto.map ) {
                a = __arrayProto.map.call( this, fn, this );
            }
            else {
                // Compatibility for browsers without EMCA-252-5 (JS 1.6)
                for ( var i=0, ien=this.length ; i<ien ; i++ ) {
                    a.push( fn.call( this, this[i], i ) );
                }
            }

            return new _Api( this.context, a );
        },


        pluck: function ( prop )
        {
            return this.map( function ( el ) {
                return el[ prop ];
            } );
        },

        pop:     __arrayProto.pop,


        push:    __arrayProto.push,


        // Does not return an API instance
        reduce: __arrayProto.reduce || function ( fn, init )
        {
            return _fnReduce( this, fn, init, 0, this.length, 1 );
        },


        reduceRight: __arrayProto.reduceRight || function ( fn, init )
        {
            return _fnReduce( this, fn, init, this.length-1, -1, -1 );
        },


        reverse: __arrayProto.reverse,


        // Object with rows, columns and opts
        selector: null,


        shift:   __arrayProto.shift,


        sort:    __arrayProto.sort, // ? name - order?


        splice:  __arrayProto.splice,


        toArray: function ()
        {
            return __arrayProto.slice.call( this );
        },


        to$: function ()
        {
            return $( this );
        },


        toJQuery: function ()
        {
            return $( this );
        },


        unique: function ()
        {
            return new _Api( this.context, _unique(this) );
        },


        unshift: __arrayProto.unshift
    } );


    _Api.extend = function ( scope, obj, ext )
    {
        // Only extend API instances and static properties of the API
        if ( ! ext.length || ! obj || ( ! (obj instanceof _Api) && ! obj.__dt_wrapper ) ) {
            return;
        }

        var
            i, ien,
            j, jen,
            struct, inner,
            methodScoping = function ( scope, fn, struc ) {
                return function () {
                    var ret = fn.apply( scope, arguments );

                    // Method extension
                    _Api.extend( ret, ret, struc.methodExt );
                    return ret;
                };
            };

        for ( i=0, ien=ext.length ; i<ien ; i++ ) {
            struct = ext[i];

            // Value
            obj[ struct.name ] = typeof struct.val === 'function' ?
                methodScoping( scope, struct.val, struct ) :
                $.isPlainObject( struct.val ) ?
                {} :
                    struct.val;

            obj[ struct.name ].__dt_wrapper = true;

            // Property extension
            _Api.extend( scope, obj[ struct.name ], struct.propExt );
        }
    };


    // @todo - Is there need for an augment function?
    // _Api.augment = function ( inst, name )
    // {
    // 	// Find src object in the structure from the name
    // 	var parts = name.split('.');

    // 	_Api.extend( inst, obj );
    // };


    //     [
    //       {
    //         name:      'data'                -- string   - Property name
    //         val:       function () {},       -- function - Api method (or undefined if just an object
    //         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
    //         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
    //       },
    //       {
    //         name:     'row'
    //         val:       {},
    //         methodExt: [ ... ],
    //         propExt:   [
    //           {
    //             name:      'data'
    //             val:       function () {},
    //             methodExt: [ ... ],
    //             propExt:   [ ... ]
    //           },
    //           ...
    //         ]
    //       }
    //     ]

    _Api.register = _api_register = function ( name, val )
    {
        if ( $.isArray( name ) ) {
            for ( var j=0, jen=name.length ; j<jen ; j++ ) {
                _Api.register( name[j], val );
            }
            return;
        }

        var
            i, ien,
            heir = name.split('.'),
            struct = __apiStruct,
            key, method;

        var find = function ( src, name ) {
            for ( var i=0, ien=src.length ; i<ien ; i++ ) {
                if ( src[i].name === name ) {
                    return src[i];
                }
            }
            return null;
        };

        for ( i=0, ien=heir.length ; i<ien ; i++ ) {
            method = heir[i].indexOf('()') !== -1;
            key = method ?
                heir[i].replace('()', '') :
                heir[i];

            var src = find( struct, key );
            if ( ! src ) {
                src = {
                    name:      key,
                    val:       {},
                    methodExt: [],
                    propExt:   []
                };
                struct.push( src );
            }

            if ( i === ien-1 ) {
                src.val = val;
            }
            else {
                struct = method ?
                    src.methodExt :
                    src.propExt;
            }
        }
    };


    _Api.registerPlural = _api_registerPlural = function ( pluralName, singularName, val ) {
        _Api.register( pluralName, val );

        _Api.register( singularName, function () {
            var ret = val.apply( this, arguments );

            if ( ret === this ) {
                // Returned item is the API instance that was passed in, return it
                return this;
            }
            else if ( ret instanceof _Api ) {
                // New API instance returned, want the value from the first item
                // in the returned array for the singular result.
                return ret.length ?
                    $.isArray( ret[0] ) ?
                        new _Api( ret.context, ret[0] ) : // Array results are 'enhanced'
                        ret[0] :
                    undefined;
            }

            // Non-API return - just fire it back
            return ret;
        } );
    };


    /**
     * Selector for HTML tables. Apply the given selector to the give array of
     * DataTables settings objects.
     *
     * @param {string|integer} [selector] jQuery selector string or integer
     * @param  {array} Array of DataTables settings objects to be filtered
     * @return {array}
     * @ignore
     */
    var __table_selector = function ( selector, a )
    {
        // Integer is used to pick out a table by index
        if ( typeof selector === 'number' ) {
            return [ a[ selector ] ];
        }

        // Perform a jQuery selector on the table nodes
        var nodes = $.map( a, function (el, i) {
            return el.nTable;
        } );

        return $(nodes)
            .filter( selector )
            .map( function (i) {
                // Need to translate back from the table node to the settings
                var idx = $.inArray( this, nodes );
                return a[ idx ];
            } )
            .toArray();
    };



    /**
     * Context selector for the API's context (i.e. the tables the API instance
     * refers to.
     *
     * @name    DataTable.Api#tables
     * @param {string|integer} [selector] Selector to pick which tables the iterator
     *   should operate on. If not given, all tables in the current context are
     *   used. This can be given as a jQuery selector (for example `':gt(0)'`) to
     *   select multiple tables or as an integer to select a single table.
     * @returns {DataTable.Api} Returns a new API instance if a selector is given.
     */
    _api_register( 'tables()', function ( selector ) {
        // A new instance is created if there was a selector specified
        return selector ?
            new _Api( __table_selector( selector, this.context ) ) :
            this;
    } );


    _api_register( 'table()', function ( selector ) {
        var tables = this.tables( selector );
        var ctx = tables.context;

        // Truncate to the first matched table
        return ctx.length ?
            new _Api( ctx[0] ) :
            tables;
    } );


    _api_registerPlural( 'tables().nodes()', 'table().node()' , function () {
        return this.iterator( 'table', function ( ctx ) {
            return ctx.nTable;
        }, 1 );
    } );


    _api_registerPlural( 'tables().body()', 'table().body()' , function () {
        return this.iterator( 'table', function ( ctx ) {
            return ctx.nTBody;
        }, 1 );
    } );


    _api_registerPlural( 'tables().header()', 'table().header()' , function () {
        return this.iterator( 'table', function ( ctx ) {
            return ctx.nTHead;
        }, 1 );
    } );


    _api_registerPlural( 'tables().footer()', 'table().footer()' , function () {
        return this.iterator( 'table', function ( ctx ) {
            return ctx.nTFoot;
        }, 1 );
    } );


    _api_registerPlural( 'tables().containers()', 'table().container()' , function () {
        return this.iterator( 'table', function ( ctx ) {
            return ctx.nTableWrapper;
        }, 1 );
    } );



    /**
     * Redraw the tables in the current context.
     */
    _api_register( 'draw()', function ( paging ) {
        return this.iterator( 'table', function ( settings ) {
            if ( paging === 'page' ) {
                _fnDraw( settings );
            }
            else {
                if ( typeof paging === 'string' ) {
                    paging = paging === 'full-hold' ?
                        false :
                        true;
                }

                _fnReDraw( settings, paging===false );
            }
        } );
    } );



    /**
     * Get the current page index.
     *
     * @return {integer} Current page index (zero based)
     *//**
     * Set the current page.
     *
     * Note that if you attempt to show a page which does not exist, DataTables will
     * not throw an error, but rather reset the paging.
     *
     * @param {integer|string} action The paging action to take. This can be one of:
     *  * `integer` - The page index to jump to
     *  * `string` - An action to take:
     *    * `first` - Jump to first page.
     *    * `next` - Jump to the next page
     *    * `previous` - Jump to previous page
     *    * `last` - Jump to the last page.
     * @returns {DataTables.Api} this
     */
    _api_register( 'page()', function ( action ) {
        if ( action === undefined ) {
            return this.page.info().page; // not an expensive call
        }

        // else, have an action to take on all tables
        return this.iterator( 'table', function ( settings ) {
            _fnPageChange( settings, action );
        } );
    } );


    /**
     * Paging information for the first table in the current context.
     *
     * If you require paging information for another table, use the `table()` method
     * with a suitable selector.
     *
     * @return {object} Object with the following properties set:
     *  * `page` - Current page index (zero based - i.e. the first page is `0`)
     *  * `pages` - Total number of pages
     *  * `start` - Display index for the first record shown on the current page
     *  * `end` - Display index for the last record shown on the current page
     *  * `length` - Display length (number of records). Note that generally `start
     *    + length = end`, but this is not always true, for example if there are
     *    only 2 records to show on the final page, with a length of 10.
     *  * `recordsTotal` - Full data set length
     *  * `recordsDisplay` - Data set length once the current filtering criterion
     *    are applied.
     */
    _api_register( 'page.info()', function ( action ) {
        if ( this.context.length === 0 ) {
            return undefined;
        }

        var
            settings   = this.context[0],
            start      = settings._iDisplayStart,
            len        = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1,
            visRecords = settings.fnRecordsDisplay(),
            all        = len === -1;

        return {
            "page":           all ? 0 : Math.floor( start / len ),
            "pages":          all ? 1 : Math.ceil( visRecords / len ),
            "start":          start,
            "end":            settings.fnDisplayEnd(),
            "length":         len,
            "recordsTotal":   settings.fnRecordsTotal(),
            "recordsDisplay": visRecords,
            "serverSide":     _fnDataSource( settings ) === 'ssp'
        };
    } );


    /**
     * Get the current page length.
     *
     * @return {integer} Current page length. Note `-1` indicates that all records
     *   are to be shown.
     *//**
     * Set the current page length.
     *
     * @param {integer} Page length to set. Use `-1` to show all records.
     * @returns {DataTables.Api} this
     */
    _api_register( 'page.len()', function ( len ) {
        // Note that we can't call this function 'length()' because `length`
        // is a Javascript property of functions which defines how many arguments
        // the function expects.
        if ( len === undefined ) {
            return this.context.length !== 0 ?
                this.context[0]._iDisplayLength :
                undefined;
        }

        // else, set the page length
        return this.iterator( 'table', function ( settings ) {
            _fnLengthChange( settings, len );
        } );
    } );



    var __reload = function ( settings, holdPosition, callback ) {
        // Use the draw event to trigger a callback
        if ( callback ) {
            var api = new _Api( settings );

            api.one( 'draw', function () {
                callback( api.ajax.json() );
            } );
        }

        if ( _fnDataSource( settings ) == 'ssp' ) {
            _fnReDraw( settings, holdPosition );
        }
        else {
            _fnProcessingDisplay( settings, true );

            // Cancel an existing request
            var xhr = settings.jqXHR;
            if ( xhr && xhr.readyState !== 4 ) {
                xhr.abort();
            }

            // Trigger xhr
            _fnBuildAjax( settings, [], function( json ) {
                _fnClearTable( settings );

                var data = _fnAjaxDataSrc( settings, json );
                for ( var i=0, ien=data.length ; i<ien ; i++ ) {
                    _fnAddData( settings, data[i] );
                }

                _fnReDraw( settings, holdPosition );
                _fnProcessingDisplay( settings, false );
            } );
        }
    };


    /**
     * Get the JSON response from the last Ajax request that DataTables made to the
     * server. Note that this returns the JSON from the first table in the current
     * context.
     *
     * @return {object} JSON received from the server.
     */
    _api_register( 'ajax.json()', function () {
        var ctx = this.context;

        if ( ctx.length > 0 ) {
            return ctx[0].json;
        }

        // else return undefined;
    } );


    /**
     * Get the data submitted in the last Ajax request
     */
    _api_register( 'ajax.params()', function () {
        var ctx = this.context;

        if ( ctx.length > 0 ) {
            return ctx[0].oAjaxData;
        }

        // else return undefined;
    } );


    /**
     * Reload tables from the Ajax data source. Note that this function will
     * automatically re-draw the table when the remote data has been loaded.
     *
     * @param {boolean} [reset=true] Reset (default) or hold the current paging
     *   position. A full re-sort and re-filter is performed when this method is
     *   called, which is why the pagination reset is the default action.
     * @returns {DataTables.Api} this
     */
    _api_register( 'ajax.reload()', function ( callback, resetPaging ) {
        return this.iterator( 'table', function (settings) {
            __reload( settings, resetPaging===false, callback );
        } );
    } );


    /**
     * Get the current Ajax URL. Note that this returns the URL from the first
     * table in the current context.
     *
     * @return {string} Current Ajax source URL
     *//**
     * Set the Ajax URL. Note that this will set the URL for all tables in the
     * current context.
     *
     * @param {string} url URL to set.
     * @returns {DataTables.Api} this
     */
    _api_register( 'ajax.url()', function ( url ) {
        var ctx = this.context;

        if ( url === undefined ) {
            // get
            if ( ctx.length === 0 ) {
                return undefined;
            }
            ctx = ctx[0];

            return ctx.ajax ?
                $.isPlainObject( ctx.ajax ) ?
                    ctx.ajax.url :
                    ctx.ajax :
                ctx.sAjaxSource;
        }

        // set
        return this.iterator( 'table', function ( settings ) {
            if ( $.isPlainObject( settings.ajax ) ) {
                settings.ajax.url = url;
            }
            else {
                settings.ajax = url;
            }
            // No need to consider sAjaxSource here since DataTables gives priority
            // to `ajax` over `sAjaxSource`. So setting `ajax` here, renders any
            // value of `sAjaxSource` redundant.
        } );
    } );


    /**
     * Load data from the newly set Ajax URL. Note that this method is only
     * available when `ajax.url()` is used to set a URL. Additionally, this method
     * has the same effect as calling `ajax.reload()` but is provided for
     * convenience when setting a new URL. Like `ajax.reload()` it will
     * automatically redraw the table once the remote data has been loaded.
     *
     * @returns {DataTables.Api} this
     */
    _api_register( 'ajax.url().load()', function ( callback, resetPaging ) {
        // Same as a reload, but makes sense to present it for easy access after a
        // url change
        return this.iterator( 'table', function ( ctx ) {
            __reload( ctx, resetPaging===false, callback );
        } );
    } );




    var _selector_run = function ( type, selector, selectFn, settings, opts )
    {
        var
            out = [], res,
            a, i, ien, j, jen,
            selectorType = typeof selector;

        // Can't just check for isArray here, as an API or jQuery instance might be
        // given with their array like look
        if ( ! selector || selectorType === 'string' || selectorType === 'function' || selector.length === undefined ) {
            selector = [ selector ];
        }

        for ( i=0, ien=selector.length ; i<ien ; i++ ) {
            a = selector[i] && selector[i].split ?
                selector[i].split(',') :
                [ selector[i] ];

            for ( j=0, jen=a.length ; j<jen ; j++ ) {
                res = selectFn( typeof a[j] === 'string' ? $.trim(a[j]) : a[j] );

                if ( res && res.length ) {
                    out = out.concat( res );
                }
            }
        }

        // selector extensions
        var ext = _ext.selector[ type ];
        if ( ext.length ) {
            for ( i=0, ien=ext.length ; i<ien ; i++ ) {
                out = ext[i]( settings, opts, out );
            }
        }

        return _unique( out );
    };


    var _selector_opts = function ( opts )
    {
        if ( ! opts ) {
            opts = {};
        }

        // Backwards compatibility for 1.9- which used the terminology filter rather
        // than search
        if ( opts.filter && opts.search === undefined ) {
            opts.search = opts.filter;
        }

        return $.extend( {
            search: 'none',
            order: 'current',
            page: 'all'
        }, opts );
    };


    var _selector_first = function ( inst )
    {
        // Reduce the API instance to the first item found
        for ( var i=0, ien=inst.length ; i<ien ; i++ ) {
            if ( inst[i].length > 0 ) {
                // Assign the first element to the first item in the instance
                // and truncate the instance and context
                inst[0] = inst[i];
                inst[0].length = 1;
                inst.length = 1;
                inst.context = [ inst.context[i] ];

                return inst;
            }
        }

        // Not found - return an empty instance
        inst.length = 0;
        return inst;
    };


    var _selector_row_indexes = function ( settings, opts )
    {
        var
            i, ien, tmp, a=[],
            displayFiltered = settings.aiDisplay,
            displayMaster = settings.aiDisplayMaster;

        var
            search = opts.search,  // none, applied, removed
            order  = opts.order,   // applied, current, index (original - compatibility with 1.9)
            page   = opts.page;    // all, current

        if ( _fnDataSource( settings ) == 'ssp' ) {
            // In server-side processing mode, most options are irrelevant since
            // rows not shown don't exist and the index order is the applied order
            // Removed is a special case - for consistency just return an empty
            // array
            return search === 'removed' ?
                [] :
                _range( 0, displayMaster.length );
        }
        else if ( page == 'current' ) {
            // Current page implies that order=current and fitler=applied, since it is
            // fairly senseless otherwise, regardless of what order and search actually
            // are
            for ( i=settings._iDisplayStart, ien=settings.fnDisplayEnd() ; i<ien ; i++ ) {
                a.push( displayFiltered[i] );
            }
        }
        else if ( order == 'current' || order == 'applied' ) {
            a = search == 'none' ?
                displayMaster.slice() :                      // no search
                search == 'applied' ?
                    displayFiltered.slice() :                // applied search
                    $.map( displayMaster, function (el, i) { // removed search
                        return $.inArray( el, displayFiltered ) === -1 ? el : null;
                    } );
        }
        else if ( order == 'index' || order == 'original' ) {
            for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
                if ( search == 'none' ) {
                    a.push( i );
                }
                else { // applied | removed
                    tmp = $.inArray( i, displayFiltered );

                    if ((tmp === -1 && search == 'removed') ||
                        (tmp >= 0   && search == 'applied') )
                    {
                        a.push( i );
                    }
                }
            }
        }

        return a;
    };


    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Rows
     *
     * {}          - no selector - use all available rows
     * {integer}   - row aoData index
     * {node}      - TR node
     * {string}    - jQuery selector to apply to the TR elements
     * {array}     - jQuery array of nodes, or simply an array of TR nodes
     *
     */


    var __row_selector = function ( settings, selector, opts )
    {
        var run = function ( sel ) {
            var selInt = _intVal( sel );
            var i, ien;

            // Short cut - selector is a number and no options provided (default is
            // all records, so no need to check if the index is in there, since it
            // must be - dev error if the index doesn't exist).
            if ( selInt !== null && ! opts ) {
                return [ selInt ];
            }

            var rows = _selector_row_indexes( settings, opts );

            if ( selInt !== null && $.inArray( selInt, rows ) !== -1 ) {
                // Selector - integer
                return [ selInt ];
            }
            else if ( ! sel ) {
                // Selector - none
                return rows;
            }

            // Selector - function
            if ( typeof sel === 'function' ) {
                return $.map( rows, function (idx) {
                    var row = settings.aoData[ idx ];
                    return sel( idx, row._aData, row.nTr ) ? idx : null;
                } );
            }

            // Get nodes in the order from the `rows` array with null values removed
            var nodes = _removeEmpty(
                _pluck_order( settings.aoData, rows, 'nTr' )
            );

            // Selector - node
            if ( sel.nodeName ) {
                if ( sel._DT_RowIndex !== undefined ) {
                    return [ sel._DT_RowIndex ]; // Property added by DT for fast lookup
                }
                else if ( sel._DT_CellIndex ) {
                    return [ sel._DT_CellIndex.row ];
                }
                else {
                    var host = $(sel).closest('*[data-dt-row]');
                    return host.length ?
                        [ host.data('dt-row') ] :
                        [];
                }
            }

            // ID selector. Want to always be able to select rows by id, regardless
            // of if the tr element has been created or not, so can't rely upon
            // jQuery here - hence a custom implementation. This does not match
            // Sizzle's fast selector or HTML4 - in HTML5 the ID can be anything,
            // but to select it using a CSS selector engine (like Sizzle or
            // querySelect) it would need to need to be escaped for some characters.
            // DataTables simplifies this for row selectors since you can select
            // only a row. A # indicates an id any anything that follows is the id -
            // unescaped.
            if ( typeof sel === 'string' && sel.charAt(0) === '#' ) {
                // get row index from id
                var rowObj = settings.aIds[ sel.replace( /^#/, '' ) ];
                if ( rowObj !== undefined ) {
                    return [ rowObj.idx ];
                }

                // need to fall through to jQuery in case there is DOM id that
                // matches
            }

            // Selector - jQuery selector string, array of nodes or jQuery object/
            // As jQuery's .filter() allows jQuery objects to be passed in filter,
            // it also allows arrays, so this will cope with all three options
            return $(nodes)
                .filter( sel )
                .map( function () {
                    return this._DT_RowIndex;
                } )
                .toArray();
        };

        return _selector_run( 'row', selector, run, settings, opts );
    };


    _api_register( 'rows()', function ( selector, opts ) {
        // argument shifting
        if ( selector === undefined ) {
            selector = '';
        }
        else if ( $.isPlainObject( selector ) ) {
            opts = selector;
            selector = '';
        }

        opts = _selector_opts( opts );

        var inst = this.iterator( 'table', function ( settings ) {
            return __row_selector( settings, selector, opts );
        }, 1 );

        // Want argument shifting here and in __row_selector?
        inst.selector.rows = selector;
        inst.selector.opts = opts;

        return inst;
    } );

    _api_register( 'rows().nodes()', function () {
        return this.iterator( 'row', function ( settings, row ) {
            return settings.aoData[ row ].nTr || undefined;
        }, 1 );
    } );

    _api_register( 'rows().data()', function () {
        return this.iterator( true, 'rows', function ( settings, rows ) {
            return _pluck_order( settings.aoData, rows, '_aData' );
        }, 1 );
    } );

    _api_registerPlural( 'rows().cache()', 'row().cache()', function ( type ) {
        return this.iterator( 'row', function ( settings, row ) {
            var r = settings.aoData[ row ];
            return type === 'search' ? r._aFilterData : r._aSortData;
        }, 1 );
    } );

    _api_registerPlural( 'rows().invalidate()', 'row().invalidate()', function ( src ) {
        return this.iterator( 'row', function ( settings, row ) {
            _fnInvalidate( settings, row, src );
        } );
    } );

    _api_registerPlural( 'rows().indexes()', 'row().index()', function () {
        return this.iterator( 'row', function ( settings, row ) {
            return row;
        }, 1 );
    } );

    _api_registerPlural( 'rows().ids()', 'row().id()', function ( hash ) {
        var a = [];
        var context = this.context;

        // `iterator` will drop undefined values, but in this case we want them
        for ( var i=0, ien=context.length ; i<ien ; i++ ) {
            for ( var j=0, jen=this[i].length ; j<jen ; j++ ) {
                var id = context[i].rowIdFn( context[i].aoData[ this[i][j] ]._aData );
                a.push( (hash === true ? '#' : '' )+ id );
            }
        }

        return new _Api( context, a );
    } );

    _api_registerPlural( 'rows().remove()', 'row().remove()', function () {
        var that = this;

        this.iterator( 'row', function ( settings, row, thatIdx ) {
            var data = settings.aoData;
            var rowData = data[ row ];
            var i, ien, j, jen;
            var loopRow, loopCells;

            data.splice( row, 1 );

            // Update the cached indexes
            for ( i=0, ien=data.length ; i<ien ; i++ ) {
                loopRow = data[i];
                loopCells = loopRow.anCells;

                // Rows
                if ( loopRow.nTr !== null ) {
                    loopRow.nTr._DT_RowIndex = i;
                }

                // Cells
                if ( loopCells !== null ) {
                    for ( j=0, jen=loopCells.length ; j<jen ; j++ ) {
                        loopCells[j]._DT_CellIndex.row = i;
                    }
                }
            }

            // Delete from the display arrays
            _fnDeleteIndex( settings.aiDisplayMaster, row );
            _fnDeleteIndex( settings.aiDisplay, row );
            _fnDeleteIndex( that[ thatIdx ], row, false ); // maintain local indexes

            // Check for an 'overflow' they case for displaying the table
            _fnLengthOverflow( settings );

            // Remove the row's ID reference if there is one
            var id = settings.rowIdFn( rowData._aData );
            if ( id !== undefined ) {
                delete settings.aIds[ id ];
            }
        } );

        this.iterator( 'table', function ( settings ) {
            for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
                settings.aoData[i].idx = i;
            }
        } );

        return this;
    } );


    _api_register( 'rows.add()', function ( rows ) {
        var newRows = this.iterator( 'table', function ( settings ) {
            var row, i, ien;
            var out = [];

            for ( i=0, ien=rows.length ; i<ien ; i++ ) {
                row = rows[i];

                if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
                    out.push( _fnAddTr( settings, row )[0] );
                }
                else {
                    out.push( _fnAddData( settings, row ) );
                }
            }

            return out;
        }, 1 );

        // Return an Api.rows() extended instance, so rows().nodes() etc can be used
        var modRows = this.rows( -1 );
        modRows.pop();
        $.merge( modRows, newRows );

        return modRows;
    } );





    /**
     *
     */
    _api_register( 'row()', function ( selector, opts ) {
        return _selector_first( this.rows( selector, opts ) );
    } );


    _api_register( 'row().data()', function ( data ) {
        var ctx = this.context;

        if ( data === undefined ) {
            // Get
            return ctx.length && this.length ?
                ctx[0].aoData[ this[0] ]._aData :
                undefined;
        }

        // Set
        ctx[0].aoData[ this[0] ]._aData = data;

        // Automatically invalidate
        _fnInvalidate( ctx[0], this[0], 'data' );

        return this;
    } );


    _api_register( 'row().node()', function () {
        var ctx = this.context;

        return ctx.length && this.length ?
        ctx[0].aoData[ this[0] ].nTr || null :
            null;
    } );


    _api_register( 'row.add()', function ( row ) {
        // Allow a jQuery object to be passed in - only a single row is added from
        // it though - the first element in the set
        if ( row instanceof $ && row.length ) {
            row = row[0];
        }

        var rows = this.iterator( 'table', function ( settings ) {
            if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
                return _fnAddTr( settings, row )[0];
            }
            return _fnAddData( settings, row );
        } );

        // Return an Api.rows() extended instance, with the newly added row selected
        return this.row( rows[0] );
    } );



    var __details_add = function ( ctx, row, data, klass )
    {
        // Convert to array of TR elements
        var rows = [];
        var addRow = function ( r, k ) {
            // Recursion to allow for arrays of jQuery objects
            if ( $.isArray( r ) || r instanceof $ ) {
                for ( var i=0, ien=r.length ; i<ien ; i++ ) {
                    addRow( r[i], k );
                }
                return;
            }

            // If we get a TR element, then just add it directly - up to the dev
            // to add the correct number of columns etc
            if ( r.nodeName && r.nodeName.toLowerCase() === 'tr' ) {
                rows.push( r );
            }
            else {
                // Otherwise create a row with a wrapper
                var created = $('<tr><td/></tr>').addClass( k );
                $('td', created)
                    .addClass( k )
                    .html( r )
                    [0].colSpan = _fnVisbleColumns( ctx );

                rows.push( created[0] );
            }
        };

        addRow( data, klass );

        if ( row._details ) {
            row._details.remove();
        }

        row._details = $(rows);

        // If the children were already shown, that state should be retained
        if ( row._detailsShow ) {
            row._details.insertAfter( row.nTr );
        }
    };


    var __details_remove = function ( api, idx )
    {
        var ctx = api.context;

        if ( ctx.length ) {
            var row = ctx[0].aoData[ idx !== undefined ? idx : api[0] ];

            if ( row && row._details ) {
                row._details.remove();

                row._detailsShow = undefined;
                row._details = undefined;
            }
        }
    };


    var __details_display = function ( api, show ) {
        var ctx = api.context;

        if ( ctx.length && api.length ) {
            var row = ctx[0].aoData[ api[0] ];

            if ( row._details ) {
                row._detailsShow = show;

                if ( show ) {
                    row._details.insertAfter( row.nTr );
                }
                else {
                    row._details.detach();
                }

                __details_events( ctx[0] );
            }
        }
    };


    var __details_events = function ( settings )
    {
        var api = new _Api( settings );
        var namespace = '.dt.DT_details';
        var drawEvent = 'draw'+namespace;
        var colvisEvent = 'column-visibility'+namespace;
        var destroyEvent = 'destroy'+namespace;
        var data = settings.aoData;

        api.off( drawEvent +' '+ colvisEvent +' '+ destroyEvent );

        if ( _pluck( data, '_details' ).length > 0 ) {
            // On each draw, insert the required elements into the document
            api.on( drawEvent, function ( e, ctx ) {
                if ( settings !== ctx ) {
                    return;
                }

                api.rows( {page:'current'} ).eq(0).each( function (idx) {
                    // Internal data grab
                    var row = data[ idx ];

                    if ( row._detailsShow ) {
                        row._details.insertAfter( row.nTr );
                    }
                } );
            } );

            // Column visibility change - update the colspan
            api.on( colvisEvent, function ( e, ctx, idx, vis ) {
                if ( settings !== ctx ) {
                    return;
                }

                // Update the colspan for the details rows (note, only if it already has
                // a colspan)
                var row, visible = _fnVisbleColumns( ctx );

                for ( var i=0, ien=data.length ; i<ien ; i++ ) {
                    row = data[i];

                    if ( row._details ) {
                        row._details.children('td[colspan]').attr('colspan', visible );
                    }
                }
            } );

            // Table destroyed - nuke any child rows
            api.on( destroyEvent, function ( e, ctx ) {
                if ( settings !== ctx ) {
                    return;
                }

                for ( var i=0, ien=data.length ; i<ien ; i++ ) {
                    if ( data[i]._details ) {
                        __details_remove( api, i );
                    }
                }
            } );
        }
    };

    // Strings for the method names to help minification
    var _emp = '';
    var _child_obj = _emp+'row().child';
    var _child_mth = _child_obj+'()';

    // data can be:
    //  tr
    //  string
    //  jQuery or array of any of the above
    _api_register( _child_mth, function ( data, klass ) {
        var ctx = this.context;

        if ( data === undefined ) {
            // get
            return ctx.length && this.length ?
                ctx[0].aoData[ this[0] ]._details :
                undefined;
        }
        else if ( data === true ) {
            // show
            this.child.show();
        }
        else if ( data === false ) {
            // remove
            __details_remove( this );
        }
        else if ( ctx.length && this.length ) {
            // set
            __details_add( ctx[0], ctx[0].aoData[ this[0] ], data, klass );
        }

        return this;
    } );


    _api_register( [
        _child_obj+'.show()',
        _child_mth+'.show()' // only when `child()` was called with parameters (without
    ], function ( show ) {   // it returns an object and this method is not executed)
        __details_display( this, true );
        return this;
    } );


    _api_register( [
        _child_obj+'.hide()',
        _child_mth+'.hide()' // only when `child()` was called with parameters (without
    ], function () {         // it returns an object and this method is not executed)
        __details_display( this, false );
        return this;
    } );


    _api_register( [
        _child_obj+'.remove()',
        _child_mth+'.remove()' // only when `child()` was called with parameters (without
    ], function () {           // it returns an object and this method is not executed)
        __details_remove( this );
        return this;
    } );


    _api_register( _child_obj+'.isShown()', function () {
        var ctx = this.context;

        if ( ctx.length && this.length ) {
            // _detailsShown as false or undefined will fall through to return false
            return ctx[0].aoData[ this[0] ]._detailsShow || false;
        }
        return false;
    } );



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Columns
     *
     * {integer}           - column index (>=0 count from left, <0 count from right)
     * "{integer}:visIdx"  - visible column index (i.e. translate to column index)  (>=0 count from left, <0 count from right)
     * "{integer}:visible" - alias for {integer}:visIdx  (>=0 count from left, <0 count from right)
     * "{string}:name"     - column name
     * "{string}"          - jQuery selector on column header nodes
     *
     */

    // can be an array of these items, comma separated list, or an array of comma
    // separated lists

    var __re_column_selector = /^(.+):(name|visIdx|visible)$/;


    // r1 and r2 are redundant - but it means that the parameters match for the
    // iterator callback in columns().data()
    var __columnData = function ( settings, column, r1, r2, rows ) {
        var a = [];
        for ( var row=0, ien=rows.length ; row<ien ; row++ ) {
            a.push( _fnGetCellData( settings, rows[row], column ) );
        }
        return a;
    };


    var __column_selector = function ( settings, selector, opts )
    {
        var
            columns = settings.aoColumns,
            names = _pluck( columns, 'sName' ),
            nodes = _pluck( columns, 'nTh' );

        var run = function ( s ) {
            var selInt = _intVal( s );

            // Selector - all
            if ( s === '' ) {
                return _range( columns.length );
            }

            // Selector - index
            if ( selInt !== null ) {
                return [ selInt >= 0 ?
                    selInt : // Count from left
                columns.length + selInt // Count from right (+ because its a negative value)
                ];
            }

            // Selector = function
            if ( typeof s === 'function' ) {
                var rows = _selector_row_indexes( settings, opts );

                return $.map( columns, function (col, idx) {
                    return s(
                        idx,
                        __columnData( settings, idx, 0, 0, rows ),
                        nodes[ idx ]
                    ) ? idx : null;
                } );
            }

            // jQuery or string selector
            var match = typeof s === 'string' ?
                s.match( __re_column_selector ) :
                '';

            if ( match ) {
                switch( match[2] ) {
                    case 'visIdx':
                    case 'visible':
                        var idx = parseInt( match[1], 10 );
                        // Visible index given, convert to column index
                        if ( idx < 0 ) {
                            // Counting from the right
                            var visColumns = $.map( columns, function (col,i) {
                                return col.bVisible ? i : null;
                            } );
                            return [ visColumns[ visColumns.length + idx ] ];
                        }
                        // Counting from the left
                        return [ _fnVisibleToColumnIndex( settings, idx ) ];

                    case 'name':
                        // match by name. `names` is column index complete and in order
                        return $.map( names, function (name, i) {
                            return name === match[1] ? i : null;
                        } );

                    default:
                        return [];
                }
            }

            // Cell in the table body
            if ( s.nodeName && s._DT_CellIndex ) {
                return [ s._DT_CellIndex.column ];
            }

            // jQuery selector on the TH elements for the columns
            var jqResult = $( nodes )
                .filter( s )
                .map( function () {
                    return $.inArray( this, nodes ); // `nodes` is column index complete and in order
                } )
                .toArray();

            if ( jqResult.length || ! s.nodeName ) {
                return jqResult;
            }

            // Otherwise a node which might have a `dt-column` data attribute, or be
            // a child or such an element
            var host = $(s).closest('*[data-dt-column]');
            return host.length ?
                [ host.data('dt-column') ] :
                [];
        };

        return _selector_run( 'column', selector, run, settings, opts );
    };


    var __setColumnVis = function ( settings, column, vis, recalc ) {
        var
            cols = settings.aoColumns,
            col  = cols[ column ],
            data = settings.aoData,
            row, cells, i, ien, tr;

        // Get
        if ( vis === undefined ) {
            return col.bVisible;
        }

        // Set
        // No change
        if ( col.bVisible === vis ) {
            return;
        }

        if ( vis ) {
            // Insert column
            // Need to decide if we should use appendChild or insertBefore
            var insertBefore = $.inArray( true, _pluck(cols, 'bVisible'), column+1 );

            for ( i=0, ien=data.length ; i<ien ; i++ ) {
                tr = data[i].nTr;
                cells = data[i].anCells;

                if ( tr ) {
                    // insertBefore can act like appendChild if 2nd arg is null
                    tr.insertBefore( cells[ column ], cells[ insertBefore ] || null );
                }
            }
        }
        else {
            // Remove column
            $( _pluck( settings.aoData, 'anCells', column ) ).detach();
        }

        // Common actions
        col.bVisible = vis;
        _fnDrawHead( settings, settings.aoHeader );
        _fnDrawHead( settings, settings.aoFooter );

        if ( recalc === undefined || recalc ) {
            // Automatically adjust column sizing
            _fnAdjustColumnSizing( settings );
        }

        _fnCallbackFire( settings, null, 'column-visibility', [settings, column, vis, recalc] );

        _fnSaveState( settings );
    };


    _api_register( 'columns()', function ( selector, opts ) {
        // argument shifting
        if ( selector === undefined ) {
            selector = '';
        }
        else if ( $.isPlainObject( selector ) ) {
            opts = selector;
            selector = '';
        }

        opts = _selector_opts( opts );

        var inst = this.iterator( 'table', function ( settings ) {
            return __column_selector( settings, selector, opts );
        }, 1 );

        // Want argument shifting here and in _row_selector?
        inst.selector.cols = selector;
        inst.selector.opts = opts;

        return inst;
    } );

    _api_registerPlural( 'columns().header()', 'column().header()', function ( selector, opts ) {
        return this.iterator( 'column', function ( settings, column ) {
            return settings.aoColumns[column].nTh;
        }, 1 );
    } );

    _api_registerPlural( 'columns().footer()', 'column().footer()', function ( selector, opts ) {
        return this.iterator( 'column', function ( settings, column ) {
            return settings.aoColumns[column].nTf;
        }, 1 );
    } );

    _api_registerPlural( 'columns().data()', 'column().data()', function () {
        return this.iterator( 'column-rows', __columnData, 1 );
    } );

    _api_registerPlural( 'columns().dataSrc()', 'column().dataSrc()', function () {
        return this.iterator( 'column', function ( settings, column ) {
            return settings.aoColumns[column].mData;
        }, 1 );
    } );

    _api_registerPlural( 'columns().cache()', 'column().cache()', function ( type ) {
        return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
            return _pluck_order( settings.aoData, rows,
                type === 'search' ? '_aFilterData' : '_aSortData', column
            );
        }, 1 );
    } );

    _api_registerPlural( 'columns().nodes()', 'column().nodes()', function () {
        return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
            return _pluck_order( settings.aoData, rows, 'anCells', column ) ;
        }, 1 );
    } );

    _api_registerPlural( 'columns().visible()', 'column().visible()', function ( vis, calc ) {
        return this.iterator( 'column', function ( settings, column ) {
            if ( vis === undefined ) {
                return settings.aoColumns[ column ].bVisible;
            } // else
            __setColumnVis( settings, column, vis, calc );
        } );
    } );

    _api_registerPlural( 'columns().indexes()', 'column().index()', function ( type ) {
        return this.iterator( 'column', function ( settings, column ) {
            return type === 'visible' ?
                _fnColumnIndexToVisible( settings, column ) :
                column;
        }, 1 );
    } );

    _api_register( 'columns.adjust()', function () {
        return this.iterator( 'table', function ( settings ) {
            _fnAdjustColumnSizing( settings );
        }, 1 );
    } );

    _api_register( 'column.index()', function ( type, idx ) {
        if ( this.context.length !== 0 ) {
            var ctx = this.context[0];

            if ( type === 'fromVisible' || type === 'toData' ) {
                return _fnVisibleToColumnIndex( ctx, idx );
            }
            else if ( type === 'fromData' || type === 'toVisible' ) {
                return _fnColumnIndexToVisible( ctx, idx );
            }
        }
    } );

    _api_register( 'column()', function ( selector, opts ) {
        return _selector_first( this.columns( selector, opts ) );
    } );




    var __cell_selector = function ( settings, selector, opts )
    {
        var data = settings.aoData;
        var rows = _selector_row_indexes( settings, opts );
        var cells = _removeEmpty( _pluck_order( data, rows, 'anCells' ) );
        var allCells = $( [].concat.apply([], cells) );
        var row;
        var columns = settings.aoColumns.length;
        var a, i, ien, j, o, host;

        var run = function ( s ) {
            var fnSelector = typeof s === 'function';

            if ( s === null || s === undefined || fnSelector ) {
                // All cells and function selectors
                a = [];

                for ( i=0, ien=rows.length ; i<ien ; i++ ) {
                    row = rows[i];

                    for ( j=0 ; j<columns ; j++ ) {
                        o = {
                            row: row,
                            column: j
                        };

                        if ( fnSelector ) {
                            // Selector - function
                            host = data[ row ];

                            if ( s( o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null ) ) {
                                a.push( o );
                            }
                        }
                        else {
                            // Selector - all
                            a.push( o );
                        }
                    }
                }

                return a;
            }

            // Selector - index
            if ( $.isPlainObject( s ) ) {
                return [s];
            }

            // Selector - jQuery filtered cells
            var jqResult = allCells
                .filter( s )
                .map( function (i, el) {
                    return { // use a new object, in case someone changes the values
                        row:    el._DT_CellIndex.row,
                        column: el._DT_CellIndex.column
                    };
                } )
                .toArray();

            if ( jqResult.length || ! s.nodeName ) {
                return jqResult;
            }

            // Otherwise the selector is a node, and there is one last option - the
            // element might be a child of an element which has dt-row and dt-column
            // data attributes
            host = $(s).closest('*[data-dt-row]');
            return host.length ?
                [ {
                    row: host.data('dt-row'),
                    column: host.data('dt-column')
                } ] :
                [];
        };

        return _selector_run( 'cell', selector, run, settings, opts );
    };




    _api_register( 'cells()', function ( rowSelector, columnSelector, opts ) {
        // Argument shifting
        if ( $.isPlainObject( rowSelector ) ) {
            // Indexes
            if ( rowSelector.row === undefined ) {
                // Selector options in first parameter
                opts = rowSelector;
                rowSelector = null;
            }
            else {
                // Cell index objects in first parameter
                opts = columnSelector;
                columnSelector = null;
            }
        }
        if ( $.isPlainObject( columnSelector ) ) {
            opts = columnSelector;
            columnSelector = null;
        }

        // Cell selector
        if ( columnSelector === null || columnSelector === undefined ) {
            return this.iterator( 'table', function ( settings ) {
                return __cell_selector( settings, rowSelector, _selector_opts( opts ) );
            } );
        }

        // Row + column selector
        var columns = this.columns( columnSelector, opts );
        var rows = this.rows( rowSelector, opts );
        var a, i, ien, j, jen;

        var cells = this.iterator( 'table', function ( settings, idx ) {
            a = [];

            for ( i=0, ien=rows[idx].length ; i<ien ; i++ ) {
                for ( j=0, jen=columns[idx].length ; j<jen ; j++ ) {
                    a.push( {
                        row:    rows[idx][i],
                        column: columns[idx][j]
                    } );
                }
            }

            return a;
        }, 1 );

        $.extend( cells.selector, {
            cols: columnSelector,
            rows: rowSelector,
            opts: opts
        } );

        return cells;
    } );


    _api_registerPlural( 'cells().nodes()', 'cell().node()', function () {
        return this.iterator( 'cell', function ( settings, row, column ) {
            var data = settings.aoData[ row ];

            return data && data.anCells ?
                data.anCells[ column ] :
                undefined;
        }, 1 );
    } );


    _api_register( 'cells().data()', function () {
        return this.iterator( 'cell', function ( settings, row, column ) {
            return _fnGetCellData( settings, row, column );
        }, 1 );
    } );


    _api_registerPlural( 'cells().cache()', 'cell().cache()', function ( type ) {
        type = type === 'search' ? '_aFilterData' : '_aSortData';

        return this.iterator( 'cell', function ( settings, row, column ) {
            return settings.aoData[ row ][ type ][ column ];
        }, 1 );
    } );


    _api_registerPlural( 'cells().render()', 'cell().render()', function ( type ) {
        return this.iterator( 'cell', function ( settings, row, column ) {
            return _fnGetCellData( settings, row, column, type );
        }, 1 );
    } );


    _api_registerPlural( 'cells().indexes()', 'cell().index()', function () {
        return this.iterator( 'cell', function ( settings, row, column ) {
            return {
                row: row,
                column: column,
                columnVisible: _fnColumnIndexToVisible( settings, column )
            };
        }, 1 );
    } );


    _api_registerPlural( 'cells().invalidate()', 'cell().invalidate()', function ( src ) {
        return this.iterator( 'cell', function ( settings, row, column ) {
            _fnInvalidate( settings, row, src, column );
        } );
    } );



    _api_register( 'cell()', function ( rowSelector, columnSelector, opts ) {
        return _selector_first( this.cells( rowSelector, columnSelector, opts ) );
    } );


    _api_register( 'cell().data()', function ( data ) {
        var ctx = this.context;
        var cell = this[0];

        if ( data === undefined ) {
            // Get
            return ctx.length && cell.length ?
                _fnGetCellData( ctx[0], cell[0].row, cell[0].column ) :
                undefined;
        }

        // Set
        _fnSetCellData( ctx[0], cell[0].row, cell[0].column, data );
        _fnInvalidate( ctx[0], cell[0].row, 'data', cell[0].column );

        return this;
    } );



    /**
     * Get current ordering (sorting) that has been applied to the table.
     *
     * @returns {array} 2D array containing the sorting information for the first
     *   table in the current context. Each element in the parent array represents
     *   a column being sorted upon (i.e. multi-sorting with two columns would have
     *   2 inner arrays). The inner arrays may have 2 or 3 elements. The first is
     *   the column index that the sorting condition applies to, the second is the
     *   direction of the sort (`desc` or `asc`) and, optionally, the third is the
     *   index of the sorting order from the `column.sorting` initialisation array.
     *//**
     * Set the ordering for the table.
     *
     * @param {integer} order Column index to sort upon.
     * @param {string} direction Direction of the sort to be applied (`asc` or `desc`)
     * @returns {DataTables.Api} this
     *//**
     * Set the ordering for the table.
     *
     * @param {array} order 1D array of sorting information to be applied.
     * @param {array} [...] Optional additional sorting conditions
     * @returns {DataTables.Api} this
     *//**
     * Set the ordering for the table.
     *
     * @param {array} order 2D array of sorting information to be applied.
     * @returns {DataTables.Api} this
     */
    _api_register( 'order()', function ( order, dir ) {
        var ctx = this.context;

        if ( order === undefined ) {
            // get
            return ctx.length !== 0 ?
                ctx[0].aaSorting :
                undefined;
        }

        // set
        if ( typeof order === 'number' ) {
            // Simple column / direction passed in
            order = [ [ order, dir ] ];
        }
        else if ( ! $.isArray( order[0] ) ) {
            // Arguments passed in (list of 1D arrays)
            order = Array.prototype.slice.call( arguments );
        }
        // otherwise a 2D array was passed in

        return this.iterator( 'table', function ( settings ) {
            settings.aaSorting = order.slice();
        } );
    } );


    /**
     * Attach a sort listener to an element for a given column
     *
     * @param {node|jQuery|string} node Identifier for the element(s) to attach the
     *   listener to. This can take the form of a single DOM node, a jQuery
     *   collection of nodes or a jQuery selector which will identify the node(s).
     * @param {integer} column the column that a click on this node will sort on
     * @param {function} [callback] callback function when sort is run
     * @returns {DataTables.Api} this
     */
    _api_register( 'order.listener()', function ( node, column, callback ) {
        return this.iterator( 'table', function ( settings ) {
            _fnSortAttachListener( settings, node, column, callback );
        } );
    } );


    _api_register( 'order.fixed()', function ( set ) {
        if ( ! set ) {
            var ctx = this.context;
            var fixed = ctx.length ?
                ctx[0].aaSortingFixed :
                undefined;

            return $.isArray( fixed ) ?
            { pre: fixed } :
                fixed;
        }

        return this.iterator( 'table', function ( settings ) {
            settings.aaSortingFixed = $.extend( true, {}, set );
        } );
    } );


    // Order by the selected column(s)
    _api_register( [
        'columns().order()',
        'column().order()'
    ], function ( dir ) {
        var that = this;

        return this.iterator( 'table', function ( settings, i ) {
            var sort = [];

            $.each( that[i], function (j, col) {
                sort.push( [ col, dir ] );
            } );

            settings.aaSorting = sort;
        } );
    } );



    _api_register( 'search()', function ( input, regex, smart, caseInsen ) {
        var ctx = this.context;

        if ( input === undefined ) {
            // get
            return ctx.length !== 0 ?
                ctx[0].oPreviousSearch.sSearch :
                undefined;
        }

        // set
        return this.iterator( 'table', function ( settings ) {
            if ( ! settings.oFeatures.bFilter ) {
                return;
            }

            _fnFilterComplete( settings, $.extend( {}, settings.oPreviousSearch, {
                "sSearch": input+"",
                "bRegex":  regex === null ? false : regex,
                "bSmart":  smart === null ? true  : smart,
                "bCaseInsensitive": caseInsen === null ? true : caseInsen
            } ), 1 );
        } );
    } );


    _api_registerPlural(
        'columns().search()',
        'column().search()',
        function ( input, regex, smart, caseInsen ) {
            return this.iterator( 'column', function ( settings, column ) {
                var preSearch = settings.aoPreSearchCols;

                if ( input === undefined ) {
                    // get
                    return preSearch[ column ].sSearch;
                }

                // set
                if ( ! settings.oFeatures.bFilter ) {
                    return;
                }

                $.extend( preSearch[ column ], {
                    "sSearch": input+"",
                    "bRegex":  regex === null ? false : regex,
                    "bSmart":  smart === null ? true  : smart,
                    "bCaseInsensitive": caseInsen === null ? true : caseInsen
                } );

                _fnFilterComplete( settings, settings.oPreviousSearch, 1 );
            } );
        }
    );

    /*
     * State API methods
     */

    _api_register( 'state()', function () {
        return this.context.length ?
            this.context[0].oSavedState :
            null;
    } );


    _api_register( 'state.clear()', function () {
        return this.iterator( 'table', function ( settings ) {
            // Save an empty object
            settings.fnStateSaveCallback.call( settings.oInstance, settings, {} );
        } );
    } );


    _api_register( 'state.loaded()', function () {
        return this.context.length ?
            this.context[0].oLoadedState :
            null;
    } );


    _api_register( 'state.save()', function () {
        return this.iterator( 'table', function ( settings ) {
            _fnSaveState( settings );
        } );
    } );



    /**
     * Provide a common method for plug-ins to check the version of DataTables being
     * used, in order to ensure compatibility.
     *
     *  @param {string} version Version string to check for, in the format "X.Y.Z".
     *    Note that the formats "X" and "X.Y" are also acceptable.
     *  @returns {boolean} true if this version of DataTables is greater or equal to
     *    the required version, or false if this version of DataTales is not
     *    suitable
     *  @static
     *  @dtopt API-Static
     *
     *  @example
     *    alert( $.fn.dataTable.versionCheck( '1.9.0' ) );
     */
    DataTable.versionCheck = DataTable.fnVersionCheck = function( version )
    {
        var aThis = DataTable.version.split('.');
        var aThat = version.split('.');
        var iThis, iThat;

        for ( var i=0, iLen=aThat.length ; i<iLen ; i++ ) {
            iThis = parseInt( aThis[i], 10 ) || 0;
            iThat = parseInt( aThat[i], 10 ) || 0;

            // Parts are the same, keep comparing
            if (iThis === iThat) {
                continue;
            }

            // Parts are different, return immediately
            return iThis > iThat;
        }

        return true;
    };


    /**
     * Check if a `<table>` node is a DataTable table already or not.
     *
     *  @param {node|jquery|string} table Table node, jQuery object or jQuery
     *      selector for the table to test. Note that if more than more than one
     *      table is passed on, only the first will be checked
     *  @returns {boolean} true the table given is a DataTable, or false otherwise
     *  @static
     *  @dtopt API-Static
     *
     *  @example
     *    if ( ! $.fn.DataTable.isDataTable( '#example' ) ) {
	 *      $('#example').dataTable();
	 *    }
     */
    DataTable.isDataTable = DataTable.fnIsDataTable = function ( table )
    {
        var t = $(table).get(0);
        var is = false;

        $.each( DataTable.settings, function (i, o) {
            var head = o.nScrollHead ? $('table', o.nScrollHead)[0] : null;
            var foot = o.nScrollFoot ? $('table', o.nScrollFoot)[0] : null;

            if ( o.nTable === t || head === t || foot === t ) {
                is = true;
            }
        } );

        return is;
    };


    /**
     * Get all DataTable tables that have been initialised - optionally you can
     * select to get only currently visible tables.
     *
     *  @param {boolean} [visible=false] Flag to indicate if you want all (default)
     *    or visible tables only.
     *  @returns {array} Array of `table` nodes (not DataTable instances) which are
     *    DataTables
     *  @static
     *  @dtopt API-Static
     *
     *  @example
     *    $.each( $.fn.dataTable.tables(true), function () {
	 *      $(table).DataTable().columns.adjust();
	 *    } );
     */
    DataTable.tables = DataTable.fnTables = function ( visible )
    {
        var api = false;

        if ( $.isPlainObject( visible ) ) {
            api = visible.api;
            visible = visible.visible;
        }

        var a = $.map( DataTable.settings, function (o) {
            if ( !visible || (visible && $(o.nTable).is(':visible')) ) {
                return o.nTable;
            }
        } );

        return api ?
            new _Api( a ) :
            a;
    };


    /**
     * DataTables utility methods
     *
     * This namespace provides helper methods that DataTables uses internally to
     * create a DataTable, but which are not exclusively used only for DataTables.
     * These methods can be used by extension authors to save the duplication of
     * code.
     *
     *  @namespace
     */
    DataTable.util = {
        /**
         * Throttle the calls to a function. Arguments and context are maintained
         * for the throttled function.
         *
         * @param {function} fn Function to be called
         * @param {integer} freq Call frequency in mS
         * @return {function} Wrapped function
         */
        throttle: _fnThrottle,


        /**
         * Escape a string such that it can be used in a regular expression
         *
         *  @param {string} sVal string to escape
         *  @returns {string} escaped string
         */
        escapeRegex: _fnEscapeRegex
    };


    /**
     * Convert from camel case parameters to Hungarian notation. This is made public
     * for the extensions to provide the same ability as DataTables core to accept
     * either the 1.9 style Hungarian notation, or the 1.10+ style camelCase
     * parameters.
     *
     *  @param {object} src The model object which holds all parameters that can be
     *    mapped.
     *  @param {object} user The object to convert from camel case to Hungarian.
     *  @param {boolean} force When set to `true`, properties which already have a
     *    Hungarian value in the `user` object will be overwritten. Otherwise they
     *    won't be.
     */
    DataTable.camelToHungarian = _fnCamelToHungarian;



    /**
     *
     */
    _api_register( '$()', function ( selector, opts ) {
        var
            rows   = this.rows( opts ).nodes(), // Get all rows
            jqRows = $(rows);

        return $( [].concat(
            jqRows.filter( selector ).toArray(),
            jqRows.find( selector ).toArray()
        ) );
    } );


    // jQuery functions to operate on the tables
    $.each( [ 'on', 'one', 'off' ], function (i, key) {
        _api_register( key+'()', function ( /* event, handler */ ) {
            var args = Array.prototype.slice.call(arguments);

            // Add the `dt` namespace automatically if it isn't already present
            if ( ! args[0].match(/\.dt\b/) ) {
                args[0] += '.dt';
            }

            var inst = $( this.tables().nodes() );
            inst[key].apply( inst, args );
            return this;
        } );
    } );


    _api_register( 'clear()', function () {
        return this.iterator( 'table', function ( settings ) {
            _fnClearTable( settings );
        } );
    } );


    _api_register( 'settings()', function () {
        return new _Api( this.context, this.context );
    } );


    _api_register( 'init()', function () {
        var ctx = this.context;
        return ctx.length ? ctx[0].oInit : null;
    } );


    _api_register( 'data()', function () {
        return this.iterator( 'table', function ( settings ) {
            return _pluck( settings.aoData, '_aData' );
        } ).flatten();
    } );


    _api_register( 'destroy()', function ( remove ) {
        remove = remove || false;

        return this.iterator( 'table', function ( settings ) {
            var orig      = settings.nTableWrapper.parentNode;
            var classes   = settings.oClasses;
            var table     = settings.nTable;
            var tbody     = settings.nTBody;
            var thead     = settings.nTHead;
            var tfoot     = settings.nTFoot;
            var jqTable   = $(table);
            var jqTbody   = $(tbody);
            var jqWrapper = $(settings.nTableWrapper);
            var rows      = $.map( settings.aoData, function (r) { return r.nTr; } );
            var i, ien;

            // Flag to note that the table is currently being destroyed - no action
            // should be taken
            settings.bDestroying = true;

            // Fire off the destroy callbacks for plug-ins etc
            _fnCallbackFire( settings, "aoDestroyCallback", "destroy", [settings] );

            // If not being removed from the document, make all columns visible
            if ( ! remove ) {
                new _Api( settings ).columns().visible( true );
            }

            // Blitz all `DT` namespaced events (these are internal events, the
            // lowercase, `dt` events are user subscribed and they are responsible
            // for removing them
            jqWrapper.unbind('.DT').find(':not(tbody *)').unbind('.DT');
            $(window).unbind('.DT-'+settings.sInstance);

            // When scrolling we had to break the table up - restore it
            if ( table != thead.parentNode ) {
                jqTable.children('thead').detach();
                jqTable.append( thead );
            }

            if ( tfoot && table != tfoot.parentNode ) {
                jqTable.children('tfoot').detach();
                jqTable.append( tfoot );
            }

            settings.aaSorting = [];
            settings.aaSortingFixed = [];
            _fnSortingClasses( settings );

            $( rows ).removeClass( settings.asStripeClasses.join(' ') );

            $('th, td', thead).removeClass( classes.sSortable+' '+
                classes.sSortableAsc+' '+classes.sSortableDesc+' '+classes.sSortableNone
            );

            if ( settings.bJUI ) {
                $('th span.'+classes.sSortIcon+ ', td span.'+classes.sSortIcon, thead).detach();
                $('th, td', thead).each( function () {
                    var wrapper = $('div.'+classes.sSortJUIWrapper, this);
                    $(this).append( wrapper.contents() );
                    wrapper.detach();
                } );
            }

            // Add the TR elements back into the table in their original order
            jqTbody.children().detach();
            jqTbody.append( rows );

            // Remove the DataTables generated nodes, events and classes
            var removedMethod = remove ? 'remove' : 'detach';
            jqTable[ removedMethod ]();
            jqWrapper[ removedMethod ]();

            // If we need to reattach the table to the document
            if ( ! remove && orig ) {
                // insertBefore acts like appendChild if !arg[1]
                orig.insertBefore( table, settings.nTableReinsertBefore );

                // Restore the width of the original table - was read from the style property,
                // so we can restore directly to that
                jqTable
                    .css( 'width', settings.sDestroyWidth )
                    .removeClass( classes.sTable );

                // If the were originally stripe classes - then we add them back here.
                // Note this is not fool proof (for example if not all rows had stripe
                // classes - but it's a good effort without getting carried away
                ien = settings.asDestroyStripes.length;

                if ( ien ) {
                    jqTbody.children().each( function (i) {
                        $(this).addClass( settings.asDestroyStripes[i % ien] );
                    } );
                }
            }

            /* Remove the settings object from the settings array */
            var idx = $.inArray( settings, DataTable.settings );
            if ( idx !== -1 ) {
                DataTable.settings.splice( idx, 1 );
            }
        } );
    } );


    // Add the `every()` method for rows, columns and cells in a compact form
    $.each( [ 'column', 'row', 'cell' ], function ( i, type ) {
        _api_register( type+'s().every()', function ( fn ) {
            var opts = this.selector.opts;
            var api = this;

            return this.iterator( type, function ( settings, arg1, arg2, arg3, arg4 ) {
                // Rows and columns:
                //  arg1 - index
                //  arg2 - table counter
                //  arg3 - loop counter
                //  arg4 - undefined
                // Cells:
                //  arg1 - row index
                //  arg2 - column index
                //  arg3 - table counter
                //  arg4 - loop counter
                fn.call(
                    api[ type ](
                        arg1,
                        type==='cell' ? arg2 : opts,
                        type==='cell' ? opts : undefined
                    ),
                    arg1, arg2, arg3, arg4
                );
            } );
        } );
    } );


    // i18n method for extensions to be able to use the language object from the
    // DataTable
    _api_register( 'i18n()', function ( token, def, plural ) {
        var ctx = this.context[0];
        var resolved = _fnGetObjectDataFn( token )( ctx.oLanguage );

        if ( resolved === undefined ) {
            resolved = def;
        }

        if ( plural !== undefined && $.isPlainObject( resolved ) ) {
            resolved = resolved[ plural ] !== undefined ?
                resolved[ plural ] :
                resolved._;
        }

        return resolved.replace( '%d', plural ); // nb: plural might be undefined,
    } );

    /**
     * Version string for plug-ins to check compatibility. Allowed format is
     * `a.b.c-d` where: a:int, b:int, c:int, d:string(dev|beta|alpha). `d` is used
     * only for non-release builds. See http://semver.org/ for more information.
     *  @member
     *  @type string
     *  @default Version number
     */
    DataTable.version = "1.10.11";

    /**
     * Private data store, containing all of the settings objects that are
     * created for the tables on a given page.
     *
     * Note that the `DataTable.settings` object is aliased to
     * `jQuery.fn.dataTableExt` through which it may be accessed and
     * manipulated, or `jQuery.fn.dataTable.settings`.
     *  @member
     *  @type array
     *  @default []
     *  @private
     */
    DataTable.settings = [];

    /**
     * Object models container, for the various models that DataTables has
     * available to it. These models define the objects that are used to hold
     * the active state and configuration of the table.
     *  @namespace
     */
    DataTable.models = {};



    /**
     * Template object for the way in which DataTables holds information about
     * search information for the global filter and individual column filters.
     *  @namespace
     */
    DataTable.models.oSearch = {
        /**
         * Flag to indicate if the filtering should be case insensitive or not
         *  @type boolean
         *  @default true
         */
        "bCaseInsensitive": true,

        /**
         * Applied search term
         *  @type string
         *  @default <i>Empty string</i>
         */
        "sSearch": "",

        /**
         * Flag to indicate if the search term should be interpreted as a
         * regular expression (true) or not (false) and therefore and special
         * regex characters escaped.
         *  @type boolean
         *  @default false
         */
        "bRegex": false,

        /**
         * Flag to indicate if DataTables is to use its smart filtering or not.
         *  @type boolean
         *  @default true
         */
        "bSmart": true
    };




    /**
     * Template object for the way in which DataTables holds information about
     * each individual row. This is the object format used for the settings
     * aoData array.
     *  @namespace
     */
    DataTable.models.oRow = {
        /**
         * TR element for the row
         *  @type node
         *  @default null
         */
        "nTr": null,

        /**
         * Array of TD elements for each row. This is null until the row has been
         * created.
         *  @type array nodes
         *  @default []
         */
        "anCells": null,

        /**
         * Data object from the original data source for the row. This is either
         * an array if using the traditional form of DataTables, or an object if
         * using mData options. The exact type will depend on the passed in
         * data from the data source, or will be an array if using DOM a data
         * source.
         *  @type array|object
         *  @default []
         */
        "_aData": [],

        /**
         * Sorting data cache - this array is ostensibly the same length as the
         * number of columns (although each index is generated only as it is
         * needed), and holds the data that is used for sorting each column in the
         * row. We do this cache generation at the start of the sort in order that
         * the formatting of the sort data need be done only once for each cell
         * per sort. This array should not be read from or written to by anything
         * other than the master sorting methods.
         *  @type array
         *  @default null
         *  @private
         */
        "_aSortData": null,

        /**
         * Per cell filtering data cache. As per the sort data cache, used to
         * increase the performance of the filtering in DataTables
         *  @type array
         *  @default null
         *  @private
         */
        "_aFilterData": null,

        /**
         * Filtering data cache. This is the same as the cell filtering cache, but
         * in this case a string rather than an array. This is easily computed with
         * a join on `_aFilterData`, but is provided as a cache so the join isn't
         * needed on every search (memory traded for performance)
         *  @type array
         *  @default null
         *  @private
         */
        "_sFilterRow": null,

        /**
         * Cache of the class name that DataTables has applied to the row, so we
         * can quickly look at this variable rather than needing to do a DOM check
         * on className for the nTr property.
         *  @type string
         *  @default <i>Empty string</i>
         *  @private
         */
        "_sRowStripe": "",

        /**
         * Denote if the original data source was from the DOM, or the data source
         * object. This is used for invalidating data, so DataTables can
         * automatically read data from the original source, unless uninstructed
         * otherwise.
         *  @type string
         *  @default null
         *  @private
         */
        "src": null,

        /**
         * Index in the aoData array. This saves an indexOf lookup when we have the
         * object, but want to know the index
         *  @type integer
         *  @default -1
         *  @private
         */
        "idx": -1
    };


    /**
     * Template object for the column information object in DataTables. This object
     * is held in the settings aoColumns array and contains all the information that
     * DataTables needs about each individual column.
     *
     * Note that this object is related to {@link DataTable.defaults.column}
     * but this one is the internal data store for DataTables's cache of columns.
     * It should NOT be manipulated outside of DataTables. Any configuration should
     * be done through the initialisation options.
     *  @namespace
     */
    DataTable.models.oColumn = {
        /**
         * Column index. This could be worked out on-the-fly with $.inArray, but it
         * is faster to just hold it as a variable
         *  @type integer
         *  @default null
         */
        "idx": null,

        /**
         * A list of the columns that sorting should occur on when this column
         * is sorted. That this property is an array allows multi-column sorting
         * to be defined for a column (for example first name / last name columns
         * would benefit from this). The values are integers pointing to the
         * columns to be sorted on (typically it will be a single integer pointing
         * at itself, but that doesn't need to be the case).
         *  @type array
         */
        "aDataSort": null,

        /**
         * Define the sorting directions that are applied to the column, in sequence
         * as the column is repeatedly sorted upon - i.e. the first value is used
         * as the sorting direction when the column if first sorted (clicked on).
         * Sort it again (click again) and it will move on to the next index.
         * Repeat until loop.
         *  @type array
         */
        "asSorting": null,

        /**
         * Flag to indicate if the column is searchable, and thus should be included
         * in the filtering or not.
         *  @type boolean
         */
        "bSearchable": null,

        /**
         * Flag to indicate if the column is sortable or not.
         *  @type boolean
         */
        "bSortable": null,

        /**
         * Flag to indicate if the column is currently visible in the table or not
         *  @type boolean
         */
        "bVisible": null,

        /**
         * Store for manual type assignment using the `column.type` option. This
         * is held in store so we can manipulate the column's `sType` property.
         *  @type string
         *  @default null
         *  @private
         */
        "_sManualType": null,

        /**
         * Flag to indicate if HTML5 data attributes should be used as the data
         * source for filtering or sorting. True is either are.
         *  @type boolean
         *  @default false
         *  @private
         */
        "_bAttrSrc": false,

        /**
         * Developer definable function that is called whenever a cell is created (Ajax source,
         * etc) or processed for input (DOM source). This can be used as a compliment to mRender
         * allowing you to modify the DOM element (add background colour for example) when the
         * element is available.
         *  @type function
         *  @param {element} nTd The TD node that has been created
         *  @param {*} sData The Data for the cell
         *  @param {array|object} oData The data for the whole row
         *  @param {int} iRow The row index for the aoData data store
         *  @default null
         */
        "fnCreatedCell": null,

        /**
         * Function to get data from a cell in a column. You should <b>never</b>
         * access data directly through _aData internally in DataTables - always use
         * the method attached to this property. It allows mData to function as
         * required. This function is automatically assigned by the column
         * initialisation method
         *  @type function
         *  @param {array|object} oData The data array/object for the array
         *    (i.e. aoData[]._aData)
         *  @param {string} sSpecific The specific data type you want to get -
         *    'display', 'type' 'filter' 'sort'
         *  @returns {*} The data for the cell from the given row's data
         *  @default null
         */
        "fnGetData": null,

        /**
         * Function to set data for a cell in the column. You should <b>never</b>
         * set the data directly to _aData internally in DataTables - always use
         * this method. It allows mData to function as required. This function
         * is automatically assigned by the column initialisation method
         *  @type function
         *  @param {array|object} oData The data array/object for the array
         *    (i.e. aoData[]._aData)
         *  @param {*} sValue Value to set
         *  @default null
         */
        "fnSetData": null,

        /**
         * Property to read the value for the cells in the column from the data
         * source array / object. If null, then the default content is used, if a
         * function is given then the return from the function is used.
         *  @type function|int|string|null
         *  @default null
         */
        "mData": null,

        /**
         * Partner property to mData which is used (only when defined) to get
         * the data - i.e. it is basically the same as mData, but without the
         * 'set' option, and also the data fed to it is the result from mData.
         * This is the rendering method to match the data method of mData.
         *  @type function|int|string|null
         *  @default null
         */
        "mRender": null,

        /**
         * Unique header TH/TD element for this column - this is what the sorting
         * listener is attached to (if sorting is enabled.)
         *  @type node
         *  @default null
         */
        "nTh": null,

        /**
         * Unique footer TH/TD element for this column (if there is one). Not used
         * in DataTables as such, but can be used for plug-ins to reference the
         * footer for each column.
         *  @type node
         *  @default null
         */
        "nTf": null,

        /**
         * The class to apply to all TD elements in the table's TBODY for the column
         *  @type string
         *  @default null
         */
        "sClass": null,

        /**
         * When DataTables calculates the column widths to assign to each column,
         * it finds the longest string in each column and then constructs a
         * temporary table and reads the widths from that. The problem with this
         * is that "mmm" is much wider then "iiii", but the latter is a longer
         * string - thus the calculation can go wrong (doing it properly and putting
         * it into an DOM object and measuring that is horribly(!) slow). Thus as
         * a "work around" we provide this option. It will append its value to the
         * text that is found to be the longest string for the column - i.e. padding.
         *  @type string
         */
        "sContentPadding": null,

        /**
         * Allows a default value to be given for a column's data, and will be used
         * whenever a null data source is encountered (this can be because mData
         * is set to null, or because the data source itself is null).
         *  @type string
         *  @default null
         */
        "sDefaultContent": null,

        /**
         * Name for the column, allowing reference to the column by name as well as
         * by index (needs a lookup to work by name).
         *  @type string
         */
        "sName": null,

        /**
         * Custom sorting data type - defines which of the available plug-ins in
         * afnSortData the custom sorting will use - if any is defined.
         *  @type string
         *  @default std
         */
        "sSortDataType": 'std',

        /**
         * Class to be applied to the header element when sorting on this column
         *  @type string
         *  @default null
         */
        "sSortingClass": null,

        /**
         * Class to be applied to the header element when sorting on this column -
         * when jQuery UI theming is used.
         *  @type string
         *  @default null
         */
        "sSortingClassJUI": null,

        /**
         * Title of the column - what is seen in the TH element (nTh).
         *  @type string
         */
        "sTitle": null,

        /**
         * Column sorting and filtering type
         *  @type string
         *  @default null
         */
        "sType": null,

        /**
         * Width of the column
         *  @type string
         *  @default null
         */
        "sWidth": null,

        /**
         * Width of the column when it was first "encountered"
         *  @type string
         *  @default null
         */
        "sWidthOrig": null
    };


    /*
     * Developer note: The properties of the object below are given in Hungarian
     * notation, that was used as the interface for DataTables prior to v1.10, however
     * from v1.10 onwards the primary interface is camel case. In order to avoid
     * breaking backwards compatibility utterly with this change, the Hungarian
     * version is still, internally the primary interface, but is is not documented
     * - hence the @name tags in each doc comment. This allows a Javascript function
     * to create a map from Hungarian notation to camel case (going the other direction
     * would require each property to be listed, which would at around 3K to the size
     * of DataTables, while this method is about a 0.5K hit.
     *
     * Ultimately this does pave the way for Hungarian notation to be dropped
     * completely, but that is a massive amount of work and will break current
     * installs (therefore is on-hold until v2).
     */

    /**
     * Initialisation options that can be given to DataTables at initialisation
     * time.
     *  @namespace
     */
    DataTable.defaults = {
        /**
         * An array of data to use for the table, passed in at initialisation which
         * will be used in preference to any data which is already in the DOM. This is
         * particularly useful for constructing tables purely in Javascript, for
         * example with a custom Ajax call.
         *  @type array
         *  @default null
         *
         *  @dtopt Option
         *  @name DataTable.defaults.data
         *
         *  @example
         *    // Using a 2D array data source
         *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
		 *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine" },
		 *          { "title": "Browser" },
		 *          { "title": "Platform" },
		 *          { "title": "Version" },
		 *          { "title": "Grade" }
		 *        ]
		 *      } );
		 *    } );
         *
         *  @example
         *    // Using an array of objects as a data source (`data`)
         *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 4.0",
		 *            "platform": "Win 95+",
		 *            "version":  4,
		 *            "grade":    "X"
		 *          },
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 5.0",
		 *            "platform": "Win 95+",
		 *            "version":  5,
		 *            "grade":    "C"
		 *          }
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine",   "data": "engine" },
		 *          { "title": "Browser",  "data": "browser" },
		 *          { "title": "Platform", "data": "platform" },
		 *          { "title": "Version",  "data": "version" },
		 *          { "title": "Grade",    "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
         */
        "aaData": null,


        /**
         * If ordering is enabled, then DataTables will perform a first pass sort on
         * initialisation. You can define which column(s) the sort is performed
         * upon, and the sorting direction, with this variable. The `sorting` array
         * should contain an array for each column to be sorted initially containing
         * the column's index and a direction string ('asc' or 'desc').
         *  @type array
         *  @default [[0,'asc']]
         *
         *  @dtopt Option
         *  @name DataTable.defaults.order
         *
         *  @example
         *    // Sort by 3rd column first, and then 4th column
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": [[2,'asc'], [3,'desc']]
		 *      } );
		 *    } );
         *
         *    // No initial sorting
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": []
		 *      } );
		 *    } );
         */
        "aaSorting": [[0,'asc']],


        /**
         * This parameter is basically identical to the `sorting` parameter, but
         * cannot be overridden by user interaction with the table. What this means
         * is that you could have a column (visible or hidden) which the sorting
         * will always be forced on first - any sorting after that (from the user)
         * will then be performed as required. This can be useful for grouping rows
         * together.
         *  @type array
         *  @default null
         *
         *  @dtopt Option
         *  @name DataTable.defaults.orderFixed
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderFixed": [[0,'asc']]
		 *      } );
		 *    } )
         */
        "aaSortingFixed": [],


        /**
         * DataTables can be instructed to load data to display in the table from a
         * Ajax source. This option defines how that Ajax call is made and where to.
         *
         * The `ajax` property has three different modes of operation, depending on
         * how it is defined. These are:
         *
         * * `string` - Set the URL from where the data should be loaded from.
         * * `object` - Define properties for `jQuery.ajax`.
         * * `function` - Custom data get function
         *
         * `string`
         * --------
         *
         * As a string, the `ajax` property simply defines the URL from which
         * DataTables will load data.
         *
         * `object`
         * --------
         *
         * As an object, the parameters in the object are passed to
         * [jQuery.ajax](http://api.jquery.com/jQuery.ajax/) allowing fine control
         * of the Ajax request. DataTables has a number of default parameters which
         * you can override using this option. Please refer to the jQuery
         * documentation for a full description of the options available, although
         * the following parameters provide additional options in DataTables or
         * require special consideration:
         *
         * * `data` - As with jQuery, `data` can be provided as an object, but it
         *   can also be used as a function to manipulate the data DataTables sends
         *   to the server. The function takes a single parameter, an object of
         *   parameters with the values that DataTables has readied for sending. An
         *   object may be returned which will be merged into the DataTables
         *   defaults, or you can add the items to the object that was passed in and
         *   not return anything from the function. This supersedes `fnServerParams`
         *   from DataTables 1.9-.
         *
         * * `dataSrc` - By default DataTables will look for the property `data` (or
         *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
         *   from an Ajax source or for server-side processing - this parameter
         *   allows that property to be changed. You can use Javascript dotted
         *   object notation to get a data source for multiple levels of nesting, or
         *   it my be used as a function. As a function it takes a single parameter,
         *   the JSON returned from the server, which can be manipulated as
         *   required, with the returned value being that used by DataTables as the
         *   data source for the table. This supersedes `sAjaxDataProp` from
         *   DataTables 1.9-.
         *
         * * `success` - Should not be overridden it is used internally in
         *   DataTables. To manipulate / transform the data returned by the server
         *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
         *
         * `function`
         * ----------
         *
         * As a function, making the Ajax call is left up to yourself allowing
         * complete control of the Ajax request. Indeed, if desired, a method other
         * than Ajax could be used to obtain the required data, such as Web storage
         * or an AIR database.
         *
         * The function is given four parameters and no return is required. The
         * parameters are:
         *
         * 1. _object_ - Data to send to the server
         * 2. _function_ - Callback function that must be executed when the required
         *    data has been obtained. That data should be passed into the callback
         *    as the only parameter
         * 3. _object_ - DataTables settings object for the table
         *
         * Note that this supersedes `fnServerData` from DataTables 1.9-.
         *
         *  @type string|object|function
         *  @default null
         *
         *  @dtopt Option
         *  @name DataTable.defaults.ajax
         *  @since 1.10.0
         *
         * @example
         *   // Get JSON data from a file via Ajax.
         *   // Note DataTables expects data in the form `{ data: [ ...data... ] }` by default).
         *   $('#example').dataTable( {
		 *     "ajax": "data.json"
		 *   } );
         *
         * @example
         *   // Get JSON data from a file via Ajax, using `dataSrc` to change
         *   // `data` to `tableData` (i.e. `{ tableData: [ ...data... ] }`)
         *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": "tableData"
		 *     }
		 *   } );
         *
         * @example
         *   // Get JSON data from a file via Ajax, using `dataSrc` to read data
         *   // from a plain array rather than an array in an object
         *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": ""
		 *     }
		 *   } );
         *
         * @example
         *   // Manipulate the data returned from the server - add a link to data
         *   // (note this can, should, be done using `render` for the column - this
         *   // is just a simple example of how the data can be manipulated).
         *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": function ( json ) {
		 *         for ( var i=0, ien=json.length ; i<ien ; i++ ) {
		 *           json[i][0] = '<a href="/message/'+json[i][0]+'>View message</a>';
		 *         }
		 *         return json;
		 *       }
		 *     }
		 *   } );
         *
         * @example
         *   // Add data to the request
         *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "data": function ( d ) {
		 *         return {
		 *           "extra_search": $('#extra').val()
		 *         };
		 *       }
		 *     }
		 *   } );
         *
         * @example
         *   // Send request as POST
         *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "type": "POST"
		 *     }
		 *   } );
         *
         * @example
         *   // Get the data from localStorage (could interface with a form for
         *   // adding, editing and removing rows).
         *   $('#example').dataTable( {
		 *     "ajax": function (data, callback, settings) {
		 *       callback(
		 *         JSON.parse( localStorage.getItem('dataTablesData') )
		 *       );
		 *     }
		 *   } );
         */
        "ajax": null,


        /**
         * This parameter allows you to readily specify the entries in the length drop
         * down menu that DataTables shows when pagination is enabled. It can be
         * either a 1D array of options which will be used for both the displayed
         * option and the value, or a 2D array which will use the array in the first
         * position as the value, and the array in the second position as the
         * displayed options (useful for language strings such as 'All').
         *
         * Note that the `pageLength` property will be automatically set to the
         * first value given in this array, unless `pageLength` is also provided.
         *  @type array
         *  @default [ 10, 25, 50, 100 ]
         *
         *  @dtopt Option
         *  @name DataTable.defaults.lengthMenu
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
		 *      } );
		 *    } );
         */
        "aLengthMenu": [ 10, 25, 50, 100 ],


        /**
         * The `columns` option in the initialisation parameter allows you to define
         * details about the way individual columns behave. For a full list of
         * column options that can be set, please see
         * {@link DataTable.defaults.column}. Note that if you use `columns` to
         * define your columns, you must have an entry in the array for every single
         * column that you have in your table (these can be null if you don't which
         * to specify any options).
         *  @member
         *
         *  @name DataTable.defaults.column
         */
        "aoColumns": null,

        /**
         * Very similar to `columns`, `columnDefs` allows you to target a specific
         * column, multiple columns, or all columns, using the `targets` property of
         * each object in the array. This allows great flexibility when creating
         * tables, as the `columnDefs` arrays can be of any length, targeting the
         * columns you specifically want. `columnDefs` may use any of the column
         * options available: {@link DataTable.defaults.column}, but it _must_
         * have `targets` defined in each object in the array. Values in the `targets`
         * array may be:
         *   <ul>
         *     <li>a string - class name will be matched on the TH for the column</li>
         *     <li>0 or a positive integer - column index counting from the left</li>
         *     <li>a negative integer - column index counting from the right</li>
         *     <li>the string "_all" - all columns (i.e. assign a default)</li>
         *   </ul>
         *  @member
         *
         *  @name DataTable.defaults.columnDefs
         */
        "aoColumnDefs": null,


        /**
         * Basically the same as `search`, this parameter defines the individual column
         * filtering state at initialisation time. The array must be of the same size
         * as the number of columns, and each element be an object with the parameters
         * `search` and `escapeRegex` (the latter is optional). 'null' is also
         * accepted and the default will be used.
         *  @type array
         *  @default []
         *
         *  @dtopt Option
         *  @name DataTable.defaults.searchCols
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchCols": [
		 *          null,
		 *          { "search": "My filter" },
		 *          null,
		 *          { "search": "^[0-9]", "escapeRegex": false }
		 *        ]
		 *      } );
		 *    } )
         */
        "aoSearchCols": [],


        /**
         * An array of CSS classes that should be applied to displayed rows. This
         * array may be of any length, and DataTables will apply each class
         * sequentially, looping when required.
         *  @type array
         *  @default null <i>Will take the values determined by the `oClasses.stripe*`
         *    options</i>
         *
         *  @dtopt Option
         *  @name DataTable.defaults.stripeClasses
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stripeClasses": [ 'strip1', 'strip2', 'strip3' ]
		 *      } );
		 *    } )
         */
        "asStripeClasses": null,


        /**
         * Enable or disable automatic column width calculation. This can be disabled
         * as an optimisation (it takes some time to calculate the widths) if the
         * tables widths are passed in using `columns`.
         *  @type boolean
         *  @default true
         *
         *  @dtopt Features
         *  @name DataTable.defaults.autoWidth
         *
         *  @example
         *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "autoWidth": false
		 *      } );
		 *    } );
         */
        "bAutoWidth": true,


        /**
         * Deferred rendering can provide DataTables with a huge speed boost when you
         * are using an Ajax or JS data source for the table. This option, when set to
         * true, will cause DataTables to defer the creation of the table elements for
         * each row until they are needed for a draw - saving a significant amount of
         * time.
         *  @type boolean
         *  @default false
         *
         *  @dtopt Features
         *  @name DataTable.defaults.deferRender
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajax": "sources/arrays.txt",
		 *        "deferRender": true
		 *      } );
		 *    } );
         */
        "bDeferRender": false,


        /**
         * Replace a DataTable which matches the given selector and replace it with
         * one which has the properties of the new initialisation object passed. If no
         * table matches the selector, then the new DataTable will be constructed as
         * per normal.
         *  @type boolean
         *  @default false
         *
         *  @dtopt Options
         *  @name DataTable.defaults.destroy
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "srollY": "200px",
		 *        "paginate": false
		 *      } );
		 *
		 *      // Some time later....
		 *      $('#example').dataTable( {
		 *        "filter": false,
		 *        "destroy": true
		 *      } );
		 *    } );
         */
        "bDestroy": false,


        /**
         * Enable or disable filtering of data. Filtering in DataTables is "smart" in
         * that it allows the end user to input multiple words (space separated) and
         * will match a row containing those words, even if not in the order that was
         * specified (this allow matching across multiple columns). Note that if you
         * wish to use filtering in DataTables this must remain 'true' - to remove the
         * default filtering input box and retain filtering abilities, please use
         * {@link DataTable.defaults.dom}.
         *  @type boolean
         *  @default true
         *
         *  @dtopt Features
         *  @name DataTable.defaults.searching
         *
         *  @example
         *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "searching": false
		 *      } );
		 *    } );
         */
        "bFilter": true,


        /**
         * Enable or disable the table information display. This shows information
         * about the data that is currently visible on the page, including information
         * about filtered data if that action is being performed.
         *  @type boolean
         *  @default true
         *
         *  @dtopt Features
         *  @name DataTable.defaults.info
         *
         *  @example
         *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "info": false
		 *      } );
		 *    } );
         */
        "bInfo": true,


        /**
         * Enable jQuery UI ThemeRoller support (required as ThemeRoller requires some
         * slightly different and additional mark-up from what DataTables has
         * traditionally used).
         *  @type boolean
         *  @default false
         *
         *  @dtopt Features
         *  @name DataTable.defaults.jQueryUI
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "jQueryUI": true
		 *      } );
		 *    } );
         */
        "bJQueryUI": false,


        /**
         * Allows the end user to select the size of a formatted page from a select
         * menu (sizes are 10, 25, 50 and 100). Requires pagination (`paginate`).
         *  @type boolean
         *  @default true
         *
         *  @dtopt Features
         *  @name DataTable.defaults.lengthChange
         *
         *  @example
         *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "lengthChange": false
		 *      } );
		 *    } );
         */
        "bLengthChange": true,


        /**
         * Enable or disable pagination.
         *  @type boolean
         *  @default true
         *
         *  @dtopt Features
         *  @name DataTable.defaults.paging
         *
         *  @example
         *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "paging": false
		 *      } );
		 *    } );
         */
        "bPaginate": true,


        /**
         * Enable or disable the display of a 'processing' indicator when the table is
         * being processed (e.g. a sort). This is particularly useful for tables with
         * large amounts of data where it can take a noticeable amount of time to sort
         * the entries.
         *  @type boolean
         *  @default false
         *
         *  @dtopt Features
         *  @name DataTable.defaults.processing
         *
         *  @example
         *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "processing": true
		 *      } );
		 *    } );
         */
        "bProcessing": false,


        /**
         * Retrieve the DataTables object for the given selector. Note that if the
         * table has already been initialised, this parameter will cause DataTables
         * to simply return the object that has already been set up - it will not take
         * account of any changes you might have made to the initialisation object
         * passed to DataTables (setting this parameter to true is an acknowledgement
         * that you understand this). `destroy` can be used to reinitialise a table if
         * you need.
         *  @type boolean
         *  @default false
         *
         *  @dtopt Options
         *  @name DataTable.defaults.retrieve
         *
         *  @example
         *    $(document).ready( function() {
		 *      initTable();
		 *      tableActions();
		 *    } );
         *
         *    function initTable ()
         *    {
		 *      return $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false,
		 *        "retrieve": true
		 *      } );
		 *    }
         *
         *    function tableActions ()
         *    {
		 *      var table = initTable();
		 *      // perform API operations with oTable
		 *    }
         */
        "bRetrieve": false,


        /**
         * When vertical (y) scrolling is enabled, DataTables will force the height of
         * the table's viewport to the given height at all times (useful for layout).
         * However, this can look odd when filtering data down to a small data set,
         * and the footer is left "floating" further down. This parameter (when
         * enabled) will cause DataTables to collapse the table's viewport down when
         * the result set will fit within the given Y height.
         *  @type boolean
         *  @default false
         *
         *  @dtopt Options
         *  @name DataTable.defaults.scrollCollapse
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200",
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
         */
        "bScrollCollapse": false,


        /**
         * Configure DataTables to use server-side processing. Note that the
         * `ajax` parameter must also be given in order to give DataTables a
         * source to obtain the required data for each draw.
         *  @type boolean
         *  @default false
         *
         *  @dtopt Features
         *  @dtopt Server-side
         *  @name DataTable.defaults.serverSide
         *
         *  @example
         *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "xhr.php"
		 *      } );
		 *    } );
         */
        "bServerSide": false,


        /**
         * Enable or disable sorting of columns. Sorting of individual columns can be
         * disabled by the `sortable` option for each column.
         *  @type boolean
         *  @default true
         *
         *  @dtopt Features
         *  @name DataTable.defaults.ordering
         *
         *  @example
         *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "ordering": false
		 *      } );
		 *    } );
         */
        "bSort": true,


        /**
         * Enable or display DataTables' ability to sort multiple columns at the
         * same time (activated by shift-click by the user).
         *  @type boolean
         *  @default true
         *
         *  @dtopt Options
         *  @name DataTable.defaults.orderMulti
         *
         *  @example
         *    // Disable multiple column sorting ability
         *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderMulti": false
		 *      } );
		 *    } );
         */
        "bSortMulti": true,


        /**
         * Allows control over whether DataTables should use the top (true) unique
         * cell that is found for a single column, or the bottom (false - default).
         * This is useful when using complex headers.
         *  @type boolean
         *  @default false
         *
         *  @dtopt Options
         *  @name DataTable.defaults.orderCellsTop
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderCellsTop": true
		 *      } );
		 *    } );
         */
        "bSortCellsTop": false,


        /**
         * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
         * `sorting\_3` to the columns which are currently being sorted on. This is
         * presented as a feature switch as it can increase processing time (while
         * classes are removed and added) so for large data sets you might want to
         * turn this off.
         *  @type boolean
         *  @default true
         *
         *  @dtopt Features
         *  @name DataTable.defaults.orderClasses
         *
         *  @example
         *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderClasses": false
		 *      } );
		 *    } );
         */
        "bSortClasses": true,


        /**
         * Enable or disable state saving. When enabled HTML5 `localStorage` will be
         * used to save table display information such as pagination information,
         * display length, filtering and sorting. As such when the end user reloads
         * the page the display display will match what thy had previously set up.
         *
         * Due to the use of `localStorage` the default state saving is not supported
         * in IE6 or 7. If state saving is required in those browsers, use
         * `stateSaveCallback` to provide a storage solution such as cookies.
         *  @type boolean
         *  @default false
         *
         *  @dtopt Features
         *  @name DataTable.defaults.stateSave
         *
         *  @example
         *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "stateSave": true
		 *      } );
		 *    } );
         */
        "bStateSave": false,


        /**
         * This function is called when a TR element is created (and all TD child
         * elements have been inserted), or registered if using a DOM source, allowing
         * manipulation of the TR element (adding classes etc).
         *  @type function
         *  @param {node} row "TR" element for the current row
         *  @param {array} data Raw data array for this row
         *  @param {int} dataIndex The index of this row in the internal aoData array
         *
         *  @dtopt Callbacks
         *  @name DataTable.defaults.createdRow
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "createdRow": function( row, data, dataIndex ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" )
		 *          {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
         */
        "fnCreatedRow": null,


        /**
         * This function is called on every 'draw' event, and allows you to
         * dynamically modify any aspect you want about the created DOM.
         *  @type function
         *  @param {object} settings DataTables settings object
         *
         *  @dtopt Callbacks
         *  @name DataTable.defaults.drawCallback
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "drawCallback": function( settings ) {
		 *          alert( 'DataTables has redrawn the table' );
		 *        }
		 *      } );
		 *    } );
         */
        "fnDrawCallback": null,


        /**
         * Identical to fnHeaderCallback() but for the table footer this function
         * allows you to modify the table footer on every 'draw' event.
         *  @type function
         *  @param {node} foot "TR" element for the footer
         *  @param {array} data Full table data (as derived from the original HTML)
         *  @param {int} start Index for the current display starting point in the
         *    display array
         *  @param {int} end Index for the current display ending point in the
         *    display array
         *  @param {array int} display Index array to translate the visual position
         *    to the full data array
         *
         *  @dtopt Callbacks
         *  @name DataTable.defaults.footerCallback
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "footerCallback": function( tfoot, data, start, end, display ) {
		 *          tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
		 *        }
		 *      } );
		 *    } )
         */
        "fnFooterCallback": null,


        /**
         * When rendering large numbers in the information element for the table
         * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
         * to have a comma separator for the 'thousands' units (e.g. 1 million is
         * rendered as "1,000,000") to help readability for the end user. This
         * function will override the default method DataTables uses.
         *  @type function
         *  @member
         *  @param {int} toFormat number to be formatted
         *  @returns {string} formatted string for DataTables to show the number
         *
         *  @dtopt Callbacks
         *  @name DataTable.defaults.formatNumber
         *
         *  @example
         *    // Format a number using a single quote for the separator (note that
         *    // this can also be done with the language.thousands option)
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "formatNumber": function ( toFormat ) {
		 *          return toFormat.toString().replace(
		 *            /\B(?=(\d{3})+(?!\d))/g, "'"
		 *          );
		 *        };
		 *      } );
		 *    } );
         */
        "fnFormatNumber": function ( toFormat ) {
            return toFormat.toString().replace(
                /\B(?=(\d{3})+(?!\d))/g,
                this.oLanguage.sThousands
            );
        },


        /**
         * This function is called on every 'draw' event, and allows you to
         * dynamically modify the header row. This can be used to calculate and
         * display useful information about the table.
         *  @type function
         *  @param {node} head "TR" element for the header
         *  @param {array} data Full table data (as derived from the original HTML)
         *  @param {int} start Index for the current display starting point in the
         *    display array
         *  @param {int} end Index for the current display ending point in the
         *    display array
         *  @param {array int} display Index array to translate the visual position
         *    to the full data array
         *
         *  @dtopt Callbacks
         *  @name DataTable.defaults.headerCallback
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fheaderCallback": function( head, data, start, end, display ) {
		 *          head.getElementsByTagName('th')[0].innerHTML = "Displaying "+(end-start)+" records";
		 *        }
		 *      } );
		 *    } )
         */
        "fnHeaderCallback": null,


        /**
         * The information element can be used to convey information about the current
         * state of the table. Although the internationalisation options presented by
         * DataTables are quite capable of dealing with most customisations, there may
         * be times where you wish to customise the string further. This callback
         * allows you to do exactly that.
         *  @type function
         *  @param {object} oSettings DataTables settings object
         *  @param {int} start Starting position in data for the draw
         *  @param {int} end End position in data for the draw
         *  @param {int} max Total number of rows in the table (regardless of
         *    filtering)
         *  @param {int} total Total number of rows in the data set, after filtering
         *  @param {string} pre The string that DataTables has formatted using it's
         *    own rules
         *  @returns {string} The string to be displayed in the information element.
         *
         *  @dtopt Callbacks
         *  @name DataTable.defaults.infoCallback
         *
         *  @example
         *    $('#example').dataTable( {
		 *      "infoCallback": function( settings, start, end, max, total, pre ) {
		 *        return start +" to "+ end;
		 *      }
		 *    } );
         */
        "fnInfoCallback": null,


        /**
         * Called when the table has been initialised. Normally DataTables will
         * initialise sequentially and there will be no need for this function,
         * however, this does not hold true when using external language information
         * since that is obtained using an async XHR call.
         *  @type function
         *  @param {object} settings DataTables settings object
         *  @param {object} json The JSON object request from the server - only
         *    present if client-side Ajax sourced data is used
         *
         *  @dtopt Callbacks
         *  @name DataTable.defaults.initComplete
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "initComplete": function(settings, json) {
		 *          alert( 'DataTables has finished its initialisation.' );
		 *        }
		 *      } );
		 *    } )
         */
        "fnInitComplete": null,


        /**
         * Called at the very start of each table draw and can be used to cancel the
         * draw by returning false, any other return (including undefined) results in
         * the full draw occurring).
         *  @type function
         *  @param {object} settings DataTables settings object
         *  @returns {boolean} False will cancel the draw, anything else (including no
         *    return) will allow it to complete.
         *
         *  @dtopt Callbacks
         *  @name DataTable.defaults.preDrawCallback
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "preDrawCallback": function( settings ) {
		 *          if ( $('#test').val() == 1 ) {
		 *            return false;
		 *          }
		 *        }
		 *      } );
		 *    } );
         */
        "fnPreDrawCallback": null,


        /**
         * This function allows you to 'post process' each row after it have been
         * generated for each table draw, but before it is rendered on screen. This
         * function might be used for setting the row class name etc.
         *  @type function
         *  @param {node} row "TR" element for the current row
         *  @param {array} data Raw data array for this row
         *  @param {int} displayIndex The display index for the current table draw
         *  @param {int} displayIndexFull The index of the data in the full list of
         *    rows (after filtering)
         *
         *  @dtopt Callbacks
         *  @name DataTable.defaults.rowCallback
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "rowCallback": function( row, data, displayIndex, displayIndexFull ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" ) {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
         */
        "fnRowCallback": null,


        /**
         * __Deprecated__ The functionality provided by this parameter has now been
         * superseded by that provided through `ajax`, which should be used instead.
         *
         * This parameter allows you to override the default function which obtains
         * the data from the server so something more suitable for your application.
         * For example you could use POST data, or pull information from a Gears or
         * AIR database.
         *  @type function
         *  @member
         *  @param {string} source HTTP source to obtain the data from (`ajax`)
         *  @param {array} data A key/value pair object containing the data to send
         *    to the server
         *  @param {function} callback to be called on completion of the data get
         *    process that will draw the data on the page.
         *  @param {object} settings DataTables settings object
         *
         *  @dtopt Callbacks
         *  @dtopt Server-side
         *  @name DataTable.defaults.serverData
         *
         *  @deprecated 1.10. Please use `ajax` for this functionality now.
         */
        "fnServerData": null,


        /**
         * __Deprecated__ The functionality provided by this parameter has now been
         * superseded by that provided through `ajax`, which should be used instead.
         *
         *  It is often useful to send extra data to the server when making an Ajax
         * request - for example custom filtering information, and this callback
         * function makes it trivial to send extra information to the server. The
         * passed in parameter is the data set that has been constructed by
         * DataTables, and you can add to this or modify it as you require.
         *  @type function
         *  @param {array} data Data array (array of objects which are name/value
         *    pairs) that has been constructed by DataTables and will be sent to the
         *    server. In the case of Ajax sourced data with server-side processing
         *    this will be an empty array, for server-side processing there will be a
         *    significant number of parameters!
         *  @returns {undefined} Ensure that you modify the data array passed in,
         *    as this is passed by reference.
         *
         *  @dtopt Callbacks
         *  @dtopt Server-side
         *  @name DataTable.defaults.serverParams
         *
         *  @deprecated 1.10. Please use `ajax` for this functionality now.
         */
        "fnServerParams": null,


        /**
         * Load the table state. With this function you can define from where, and how, the
         * state of a table is loaded. By default DataTables will load from `localStorage`
         * but you might wish to use a server-side database or cookies.
         *  @type function
         *  @member
         *  @param {object} settings DataTables settings object
         *  @return {object} The DataTables state object to be loaded
         *
         *  @dtopt Callbacks
         *  @name DataTable.defaults.stateLoadCallback
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadCallback": function (settings) {
		 *          var o;
		 *
		 *          // Send an Ajax request to the server to get the data. Note that
		 *          // this is a synchronous request.
		 *          $.ajax( {
		 *            "url": "/state_load",
		 *            "async": false,
		 *            "dataType": "json",
		 *            "success": function (json) {
		 *              o = json;
		 *            }
		 *          } );
		 *
		 *          return o;
		 *        }
		 *      } );
		 *    } );
         */
        "fnStateLoadCallback": function ( settings ) {
            try {
                return JSON.parse(
                    (settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
                        'DataTables_'+settings.sInstance+'_'+location.pathname
                    )
                );
            } catch (e) {}
        },


        /**
         * Callback which allows modification of the saved state prior to loading that state.
         * This callback is called when the table is loading state from the stored data, but
         * prior to the settings object being modified by the saved state. Note that for
         * plug-in authors, you should use the `stateLoadParams` event to load parameters for
         * a plug-in.
         *  @type function
         *  @param {object} settings DataTables settings object
         *  @param {object} data The state object that is to be loaded
         *
         *  @dtopt Callbacks
         *  @name DataTable.defaults.stateLoadParams
         *
         *  @example
         *    // Remove a saved filter, so filtering is never loaded
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
         *
         *  @example
         *    // Disallow state loading by returning false
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          return false;
		 *        }
		 *      } );
		 *    } );
         */
        "fnStateLoadParams": null,


        /**
         * Callback that is called when the state has been loaded from the state saving method
         * and the DataTables settings object has been modified as a result of the loaded state.
         *  @type function
         *  @param {object} settings DataTables settings object
         *  @param {object} data The state object that was loaded
         *
         *  @dtopt Callbacks
         *  @name DataTable.defaults.stateLoaded
         *
         *  @example
         *    // Show an alert with the filtering value that was saved
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoaded": function (settings, data) {
		 *          alert( 'Saved filter was: '+data.oSearch.sSearch );
		 *        }
		 *      } );
		 *    } );
         */
        "fnStateLoaded": null,


        /**
         * Save the table state. This function allows you to define where and how the state
         * information for the table is stored By default DataTables will use `localStorage`
         * but you might wish to use a server-side database or cookies.
         *  @type function
         *  @member
         *  @param {object} settings DataTables settings object
         *  @param {object} data The state object to be saved
         *
         *  @dtopt Callbacks
         *  @name DataTable.defaults.stateSaveCallback
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveCallback": function (settings, data) {
		 *          // Send an Ajax request to the server with the state object
		 *          $.ajax( {
		 *            "url": "/state_save",
		 *            "data": data,
		 *            "dataType": "json",
		 *            "method": "POST"
		 *            "success": function () {}
		 *          } );
		 *        }
		 *      } );
		 *    } );
         */
        "fnStateSaveCallback": function ( settings, data ) {
            try {
                (settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
                    'DataTables_'+settings.sInstance+'_'+location.pathname,
                    JSON.stringify( data )
                );
            } catch (e) {}
        },


        /**
         * Callback which allows modification of the state to be saved. Called when the table
         * has changed state a new state save is required. This method allows modification of
         * the state saving object prior to actually doing the save, including addition or
         * other state properties or modification. Note that for plug-in authors, you should
         * use the `stateSaveParams` event to save parameters for a plug-in.
         *  @type function
         *  @param {object} settings DataTables settings object
         *  @param {object} data The state object to be saved
         *
         *  @dtopt Callbacks
         *  @name DataTable.defaults.stateSaveParams
         *
         *  @example
         *    // Remove a saved filter, so filtering is never saved
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
         */
        "fnStateSaveParams": null,


        /**
         * Duration for which the saved state information is considered valid. After this period
         * has elapsed the state will be returned to the default.
         * Value is given in seconds.
         *  @type int
         *  @default 7200 <i>(2 hours)</i>
         *
         *  @dtopt Options
         *  @name DataTable.defaults.stateDuration
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateDuration": 60*60*24; // 1 day
		 *      } );
		 *    } )
         */
        "iStateDuration": 7200,


        /**
         * When enabled DataTables will not make a request to the server for the first
         * page draw - rather it will use the data already on the page (no sorting etc
         * will be applied to it), thus saving on an XHR at load time. `deferLoading`
         * is used to indicate that deferred loading is required, but it is also used
         * to tell DataTables how many records there are in the full table (allowing
         * the information element and pagination to be displayed correctly). In the case
         * where a filtering is applied to the table on initial load, this can be
         * indicated by giving the parameter as an array, where the first element is
         * the number of records available after filtering and the second element is the
         * number of records without filtering (allowing the table information element
         * to be shown correctly).
         *  @type int | array
         *  @default null
         *
         *  @dtopt Options
         *  @name DataTable.defaults.deferLoading
         *
         *  @example
         *    // 57 records available in the table, no filtering applied
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": 57
		 *      } );
		 *    } );
         *
         *  @example
         *    // 57 records after filtering, 100 without filtering (an initial filter applied)
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": [ 57, 100 ],
		 *        "search": {
		 *          "search": "my_filter"
		 *        }
		 *      } );
		 *    } );
         */
        "iDeferLoading": null,


        /**
         * Number of rows to display on a single page when using pagination. If
         * feature enabled (`lengthChange`) then the end user will be able to override
         * this to a custom setting using a pop-up menu.
         *  @type int
         *  @default 10
         *
         *  @dtopt Options
         *  @name DataTable.defaults.pageLength
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pageLength": 50
		 *      } );
		 *    } )
         */
        "iDisplayLength": 10,


        /**
         * Define the starting point for data display when using DataTables with
         * pagination. Note that this parameter is the number of records, rather than
         * the page number, so if you have 10 records per page and want to start on
         * the third page, it should be "20".
         *  @type int
         *  @default 0
         *
         *  @dtopt Options
         *  @name DataTable.defaults.displayStart
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "displayStart": 20
		 *      } );
		 *    } )
         */
        "iDisplayStart": 0,


        /**
         * By default DataTables allows keyboard navigation of the table (sorting, paging,
         * and filtering) by adding a `tabindex` attribute to the required elements. This
         * allows you to tab through the controls and press the enter key to activate them.
         * The tabindex is default 0, meaning that the tab follows the flow of the document.
         * You can overrule this using this parameter if you wish. Use a value of -1 to
         * disable built-in keyboard navigation.
         *  @type int
         *  @default 0
         *
         *  @dtopt Options
         *  @name DataTable.defaults.tabIndex
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "tabIndex": 1
		 *      } );
		 *    } );
         */
        "iTabIndex": 0,


        /**
         * Classes that DataTables assigns to the various components and features
         * that it adds to the HTML table. This allows classes to be configured
         * during initialisation in addition to through the static
         * {@link DataTable.ext.oStdClasses} object).
         *  @namespace
         *  @name DataTable.defaults.classes
         */
        "oClasses": {},


        /**
         * All strings that DataTables uses in the user interface that it creates
         * are defined in this object, allowing you to modified them individually or
         * completely replace them all as required.
         *  @namespace
         *  @name DataTable.defaults.language
         */
        "oLanguage": {
            /**
             * Strings that are used for WAI-ARIA labels and controls only (these are not
             * actually visible on the page, but will be read by screenreaders, and thus
             * must be internationalised as well).
             *  @namespace
             *  @name DataTable.defaults.language.aria
             */
            "oAria": {
                /**
                 * ARIA label that is added to the table headers when the column may be
                 * sorted ascending by activing the column (click or return when focused).
                 * Note that the column header is prefixed to this string.
                 *  @type string
                 *  @default : activate to sort column ascending
                 *
                 *  @dtopt Language
                 *  @name DataTable.defaults.language.aria.sortAscending
                 *
                 *  @example
                 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortAscending": " - click/return to sort ascending"
				 *          }
				 *        }
				 *      } );
				 *    } );
                 */
                "sSortAscending": ": activate to sort column ascending",

                /**
                 * ARIA label that is added to the table headers when the column may be
                 * sorted descending by activing the column (click or return when focused).
                 * Note that the column header is prefixed to this string.
                 *  @type string
                 *  @default : activate to sort column ascending
                 *
                 *  @dtopt Language
                 *  @name DataTable.defaults.language.aria.sortDescending
                 *
                 *  @example
                 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortDescending": " - click/return to sort descending"
				 *          }
				 *        }
				 *      } );
				 *    } );
                 */
                "sSortDescending": ": activate to sort column descending"
            },

            /**
             * Pagination string used by DataTables for the built-in pagination
             * control types.
             *  @namespace
             *  @name DataTable.defaults.language.paginate
             */
            "oPaginate": {
                /**
                 * Text to use when using the 'full_numbers' type of pagination for the
                 * button to take the user to the first page.
                 *  @type string
                 *  @default First
                 *
                 *  @dtopt Language
                 *  @name DataTable.defaults.language.paginate.first
                 *
                 *  @example
                 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "first": "First page"
				 *          }
				 *        }
				 *      } );
				 *    } );
                 */
                "sFirst": "First",


                /**
                 * Text to use when using the 'full_numbers' type of pagination for the
                 * button to take the user to the last page.
                 *  @type string
                 *  @default Last
                 *
                 *  @dtopt Language
                 *  @name DataTable.defaults.language.paginate.last
                 *
                 *  @example
                 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "last": "Last page"
				 *          }
				 *        }
				 *      } );
				 *    } );
                 */
                "sLast": "Last",


                /**
                 * Text to use for the 'next' pagination button (to take the user to the
                 * next page).
                 *  @type string
                 *  @default Next
                 *
                 *  @dtopt Language
                 *  @name DataTable.defaults.language.paginate.next
                 *
                 *  @example
                 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "next": "Next page"
				 *          }
				 *        }
				 *      } );
				 *    } );
                 */
                "sNext": "Next",


                /**
                 * Text to use for the 'previous' pagination button (to take the user to
                 * the previous page).
                 *  @type string
                 *  @default Previous
                 *
                 *  @dtopt Language
                 *  @name DataTable.defaults.language.paginate.previous
                 *
                 *  @example
                 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "previous": "Previous page"
				 *          }
				 *        }
				 *      } );
				 *    } );
                 */
                "sPrevious": "Previous"
            },

            /**
             * This string is shown in preference to `zeroRecords` when the table is
             * empty of data (regardless of filtering). Note that this is an optional
             * parameter - if it is not given, the value of `zeroRecords` will be used
             * instead (either the default or given value).
             *  @type string
             *  @default No data available in table
             *
             *  @dtopt Language
             *  @name DataTable.defaults.language.emptyTable
             *
             *  @example
             *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "emptyTable": "No data available in table"
			 *        }
			 *      } );
			 *    } );
             */
            "sEmptyTable": "No data available in table",


            /**
             * This string gives information to the end user about the information
             * that is current on display on the page. The following tokens can be
             * used in the string and will be dynamically replaced as the table
             * display updates. This tokens can be placed anywhere in the string, or
             * removed as needed by the language requires:
             *
             * * `\_START\_` - Display index of the first record on the current page
             * * `\_END\_` - Display index of the last record on the current page
             * * `\_TOTAL\_` - Number of records in the table after filtering
             * * `\_MAX\_` - Number of records in the table without filtering
             * * `\_PAGE\_` - Current page number
             * * `\_PAGES\_` - Total number of pages of data in the table
             *
             *  @type string
             *  @default Showing _START_ to _END_ of _TOTAL_ entries
             *
             *  @dtopt Language
             *  @name DataTable.defaults.language.info
             *
             *  @example
             *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "info": "Showing page _PAGE_ of _PAGES_"
			 *        }
			 *      } );
			 *    } );
             */
            "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",


            /**
             * Display information string for when the table is empty. Typically the
             * format of this string should match `info`.
             *  @type string
             *  @default Showing 0 to 0 of 0 entries
             *
             *  @dtopt Language
             *  @name DataTable.defaults.language.infoEmpty
             *
             *  @example
             *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoEmpty": "No entries to show"
			 *        }
			 *      } );
			 *    } );
             */
            "sInfoEmpty": "Showing 0 to 0 of 0 entries",


            /**
             * When a user filters the information in a table, this string is appended
             * to the information (`info`) to give an idea of how strong the filtering
             * is. The variable _MAX_ is dynamically updated.
             *  @type string
             *  @default (filtered from _MAX_ total entries)
             *
             *  @dtopt Language
             *  @name DataTable.defaults.language.infoFiltered
             *
             *  @example
             *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoFiltered": " - filtering from _MAX_ records"
			 *        }
			 *      } );
			 *    } );
             */
            "sInfoFiltered": "(filtered from _MAX_ total entries)",


            /**
             * If can be useful to append extra information to the info string at times,
             * and this variable does exactly that. This information will be appended to
             * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
             * being used) at all times.
             *  @type string
             *  @default <i>Empty string</i>
             *
             *  @dtopt Language
             *  @name DataTable.defaults.language.infoPostFix
             *
             *  @example
             *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoPostFix": "All records shown are derived from real information."
			 *        }
			 *      } );
			 *    } );
             */
            "sInfoPostFix": "",


            /**
             * This decimal place operator is a little different from the other
             * language options since DataTables doesn't output floating point
             * numbers, so it won't ever use this for display of a number. Rather,
             * what this parameter does is modify the sort methods of the table so
             * that numbers which are in a format which has a character other than
             * a period (`.`) as a decimal place will be sorted numerically.
             *
             * Note that numbers with different decimal places cannot be shown in
             * the same table and still be sortable, the table must be consistent.
             * However, multiple different tables on the page can use different
             * decimal place characters.
             *  @type string
             *  @default
             *
             *  @dtopt Language
             *  @name DataTable.defaults.language.decimal
             *
             *  @example
             *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "decimal": ","
			 *          "thousands": "."
			 *        }
			 *      } );
			 *    } );
             */
            "sDecimal": "",


            /**
             * DataTables has a build in number formatter (`formatNumber`) which is
             * used to format large numbers that are used in the table information.
             * By default a comma is used, but this can be trivially changed to any
             * character you wish with this parameter.
             *  @type string
             *  @default ,
             *
             *  @dtopt Language
             *  @name DataTable.defaults.language.thousands
             *
             *  @example
             *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "thousands": "'"
			 *        }
			 *      } );
			 *    } );
             */
            "sThousands": ",",


            /**
             * Detail the action that will be taken when the drop down menu for the
             * pagination length option is changed. The '_MENU_' variable is replaced
             * with a default select list of 10, 25, 50 and 100, and can be replaced
             * with a custom select box if required.
             *  @type string
             *  @default Show _MENU_ entries
             *
             *  @dtopt Language
             *  @name DataTable.defaults.language.lengthMenu
             *
             *  @example
             *    // Language change only
             *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": "Display _MENU_ records"
			 *        }
			 *      } );
			 *    } );
             *
             *  @example
             *    // Language and options change
             *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": 'Display <select>'+
			 *            '<option value="10">10</option>'+
			 *            '<option value="20">20</option>'+
			 *            '<option value="30">30</option>'+
			 *            '<option value="40">40</option>'+
			 *            '<option value="50">50</option>'+
			 *            '<option value="-1">All</option>'+
			 *            '</select> records'
			 *        }
			 *      } );
			 *    } );
             */
            "sLengthMenu": "Show _MENU_ entries",


            /**
             * When using Ajax sourced data and during the first draw when DataTables is
             * gathering the data, this message is shown in an empty row in the table to
             * indicate to the end user the the data is being loaded. Note that this
             * parameter is not used when loading data by server-side processing, just
             * Ajax sourced data with client-side processing.
             *  @type string
             *  @default Loading...
             *
             *  @dtopt Language
             *  @name DataTable.defaults.language.loadingRecords
             *
             *  @example
             *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "loadingRecords": "Please wait - loading..."
			 *        }
			 *      } );
			 *    } );
             */
            "sLoadingRecords": "Loading...",


            /**
             * Text which is displayed when the table is processing a user action
             * (usually a sort command or similar).
             *  @type string
             *  @default Processing...
             *
             *  @dtopt Language
             *  @name DataTable.defaults.language.processing
             *
             *  @example
             *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "processing": "DataTables is currently busy"
			 *        }
			 *      } );
			 *    } );
             */
            "sProcessing": "Processing...",


            /**
             * Details the actions that will be taken when the user types into the
             * filtering input text box. The variable "_INPUT_", if used in the string,
             * is replaced with the HTML text box for the filtering input allowing
             * control over where it appears in the string. If "_INPUT_" is not given
             * then the input box is appended to the string automatically.
             *  @type string
             *  @default Search:
             *
             *  @dtopt Language
             *  @name DataTable.defaults.language.search
             *
             *  @example
             *    // Input text box will be appended at the end automatically
             *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Filter records:"
			 *        }
			 *      } );
			 *    } );
             *
             *  @example
             *    // Specify where the filter should appear
             *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Apply filter _INPUT_ to table"
			 *        }
			 *      } );
			 *    } );
             */
            "sSearch": "Search:",


            /**
             * Assign a `placeholder` attribute to the search `input` element
             *  @type string
             *  @default
             *
             *  @dtopt Language
             *  @name DataTable.defaults.language.searchPlaceholder
             */
            "sSearchPlaceholder": "",


            /**
             * All of the language information can be stored in a file on the
             * server-side, which DataTables will look up if this parameter is passed.
             * It must store the URL of the language file, which is in a JSON format,
             * and the object has the same properties as the oLanguage object in the
             * initialiser object (i.e. the above parameters). Please refer to one of
             * the example language files to see how this works in action.
             *  @type string
             *  @default <i>Empty string - i.e. disabled</i>
             *
             *  @dtopt Language
             *  @name DataTable.defaults.language.url
             *
             *  @example
             *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "url": "http://www.sprymedia.co.uk/dataTables/lang.txt"
			 *        }
			 *      } );
			 *    } );
             */
            "sUrl": "",


            /**
             * Text shown inside the table records when the is no information to be
             * displayed after filtering. `emptyTable` is shown when there is simply no
             * information in the table at all (regardless of filtering).
             *  @type string
             *  @default No matching records found
             *
             *  @dtopt Language
             *  @name DataTable.defaults.language.zeroRecords
             *
             *  @example
             *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "zeroRecords": "No records to display"
			 *        }
			 *      } );
			 *    } );
             */
            "sZeroRecords": "No matching records found"
        },


        /**
         * This parameter allows you to have define the global filtering state at
         * initialisation time. As an object the `search` parameter must be
         * defined, but all other parameters are optional. When `regex` is true,
         * the search string will be treated as a regular expression, when false
         * (default) it will be treated as a straight string. When `smart`
         * DataTables will use it's smart filtering methods (to word match at
         * any point in the data), when false this will not be done.
         *  @namespace
         *  @extends DataTable.models.oSearch
         *
         *  @dtopt Options
         *  @name DataTable.defaults.search
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "search": {"search": "Initial search"}
		 *      } );
		 *    } )
         */
        "oSearch": $.extend( {}, DataTable.models.oSearch ),


        /**
         * __Deprecated__ The functionality provided by this parameter has now been
         * superseded by that provided through `ajax`, which should be used instead.
         *
         * By default DataTables will look for the property `data` (or `aaData` for
         * compatibility with DataTables 1.9-) when obtaining data from an Ajax
         * source or for server-side processing - this parameter allows that
         * property to be changed. You can use Javascript dotted object notation to
         * get a data source for multiple levels of nesting.
         *  @type string
         *  @default data
         *
         *  @dtopt Options
         *  @dtopt Server-side
         *  @name DataTable.defaults.ajaxDataProp
         *
         *  @deprecated 1.10. Please use `ajax` for this functionality now.
         */
        "sAjaxDataProp": "data",


        /**
         * __Deprecated__ The functionality provided by this parameter has now been
         * superseded by that provided through `ajax`, which should be used instead.
         *
         * You can instruct DataTables to load data from an external
         * source using this parameter (use aData if you want to pass data in you
         * already have). Simply provide a url a JSON object can be obtained from.
         *  @type string
         *  @default null
         *
         *  @dtopt Options
         *  @dtopt Server-side
         *  @name DataTable.defaults.ajaxSource
         *
         *  @deprecated 1.10. Please use `ajax` for this functionality now.
         */
        "sAjaxSource": null,


        /**
         * This initialisation variable allows you to specify exactly where in the
         * DOM you want DataTables to inject the various controls it adds to the page
         * (for example you might want the pagination controls at the top of the
         * table). DIV elements (with or without a custom class) can also be added to
         * aid styling. The follow syntax is used:
         *   <ul>
         *     <li>The following options are allowed:
         *       <ul>
         *         <li>'l' - Length changing</li>
         *         <li>'f' - Filtering input</li>
         *         <li>'t' - The table!</li>
         *         <li>'i' - Information</li>
         *         <li>'p' - Pagination</li>
         *         <li>'r' - pRocessing</li>
         *       </ul>
         *     </li>
         *     <li>The following constants are allowed:
         *       <ul>
         *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
         *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
         *       </ul>
         *     </li>
         *     <li>The following syntax is expected:
         *       <ul>
         *         <li>'&lt;' and '&gt;' - div elements</li>
         *         <li>'&lt;"class" and '&gt;' - div with a class</li>
         *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
         *       </ul>
         *     </li>
         *     <li>Examples:
         *       <ul>
         *         <li>'&lt;"wrapper"flipt&gt;'</li>
         *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
         *       </ul>
         *     </li>
         *   </ul>
         *  @type string
         *  @default lfrtip <i>(when `jQueryUI` is false)</i> <b>or</b>
         *    <"H"lfr>t<"F"ip> <i>(when `jQueryUI` is true)</i>
         *
         *  @dtopt Options
         *  @name DataTable.defaults.dom
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "dom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
		 *      } );
		 *    } );
         */
        "sDom": "lfrtip",


        /**
         * Search delay option. This will throttle full table searches that use the
         * DataTables provided search input element (it does not effect calls to
         * `dt-api search()`, providing a delay before the search is made.
         *  @type integer
         *  @default 0
         *
         *  @dtopt Options
         *  @name DataTable.defaults.searchDelay
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchDelay": 200
		 *      } );
		 *    } )
         */
        "searchDelay": null,


        /**
         * DataTables features four different built-in options for the buttons to
         * display for pagination control:
         *
         * * `simple` - 'Previous' and 'Next' buttons only
         * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
         * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
         * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus
         *   page numbers
         *
         * Further methods can be added using {@link DataTable.ext.oPagination}.
         *  @type string
         *  @default simple_numbers
         *
         *  @dtopt Options
         *  @name DataTable.defaults.pagingType
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pagingType": "full_numbers"
		 *      } );
		 *    } )
         */
        "sPaginationType": "simple_numbers",


        /**
         * Enable horizontal scrolling. When a table is too wide to fit into a
         * certain layout, or you have a large number of columns in the table, you
         * can enable x-scrolling to show the table in a viewport, which can be
         * scrolled. This property can be `true` which will allow the table to
         * scroll horizontally when needed, or any CSS unit, or a number (in which
         * case it will be treated as a pixel measurement). Setting as simply `true`
         * is recommended.
         *  @type boolean|string
         *  @default <i>blank string - i.e. disabled</i>
         *
         *  @dtopt Features
         *  @name DataTable.defaults.scrollX
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": true,
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
         */
        "sScrollX": "",


        /**
         * This property can be used to force a DataTable to use more width than it
         * might otherwise do when x-scrolling is enabled. For example if you have a
         * table which requires to be well spaced, this parameter is useful for
         * "over-sizing" the table, and thus forcing scrolling. This property can by
         * any CSS unit, or a number (in which case it will be treated as a pixel
         * measurement).
         *  @type string
         *  @default <i>blank string - i.e. disabled</i>
         *
         *  @dtopt Options
         *  @name DataTable.defaults.scrollXInner
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": "100%",
		 *        "scrollXInner": "110%"
		 *      } );
		 *    } );
         */
        "sScrollXInner": "",


        /**
         * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
         * to the given height, and enable scrolling for any data which overflows the
         * current viewport. This can be used as an alternative to paging to display
         * a lot of data in a small area (although paging and scrolling can both be
         * enabled at the same time). This property can be any CSS unit, or a number
         * (in which case it will be treated as a pixel measurement).
         *  @type string
         *  @default <i>blank string - i.e. disabled</i>
         *
         *  @dtopt Features
         *  @name DataTable.defaults.scrollY
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false
		 *      } );
		 *    } );
         */
        "sScrollY": "",


        /**
         * __Deprecated__ The functionality provided by this parameter has now been
         * superseded by that provided through `ajax`, which should be used instead.
         *
         * Set the HTTP method that is used to make the Ajax call for server-side
         * processing or Ajax sourced data.
         *  @type string
         *  @default GET
         *
         *  @dtopt Options
         *  @dtopt Server-side
         *  @name DataTable.defaults.serverMethod
         *
         *  @deprecated 1.10. Please use `ajax` for this functionality now.
         */
        "sServerMethod": "GET",


        /**
         * DataTables makes use of renderers when displaying HTML elements for
         * a table. These renderers can be added or modified by plug-ins to
         * generate suitable mark-up for a site. For example the Bootstrap
         * integration plug-in for DataTables uses a paging button renderer to
         * display pagination buttons in the mark-up required by Bootstrap.
         *
         * For further information about the renderers available see
         * DataTable.ext.renderer
         *  @type string|object
         *  @default null
         *
         *  @name DataTable.defaults.renderer
         *
         */
        "renderer": null,


        /**
         * Set the data property name that DataTables should use to get a row's id
         * to set as the `id` property in the node.
         *  @type string
         *  @default DT_RowId
         *
         *  @name DataTable.defaults.rowId
         */
        "rowId": "DT_RowId"
    };

    _fnHungarianMap( DataTable.defaults );



    /*
     * Developer note - See note in model.defaults.js about the use of Hungarian
     * notation and camel case.
     */

    /**
     * Column options that can be given to DataTables at initialisation time.
     *  @namespace
     */
    DataTable.defaults.column = {
        /**
         * Define which column(s) an order will occur on for this column. This
         * allows a column's ordering to take multiple columns into account when
         * doing a sort or use the data from a different column. For example first
         * name / last name columns make sense to do a multi-column sort over the
         * two columns.
         *  @type array|int
         *  @default null <i>Takes the value of the column index automatically</i>
         *
         *  @name DataTable.defaults.column.orderData
         *  @dtopt Columns
         *
         *  @example
         *    // Using `columnDefs`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderData": [ 0, 1 ], "targets": [ 0 ] },
		 *          { "orderData": [ 1, 0 ], "targets": [ 1 ] },
		 *          { "orderData": 2, "targets": [ 2 ] }
		 *        ]
		 *      } );
		 *    } );
         *
         *  @example
         *    // Using `columns`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderData": [ 0, 1 ] },
		 *          { "orderData": [ 1, 0 ] },
		 *          { "orderData": 2 },
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
         */
        "aDataSort": null,
        "iDataSort": -1,


        /**
         * You can control the default ordering direction, and even alter the
         * behaviour of the sort handler (i.e. only allow ascending ordering etc)
         * using this parameter.
         *  @type array
         *  @default [ 'asc', 'desc' ]
         *
         *  @name DataTable.defaults.column.orderSequence
         *  @dtopt Columns
         *
         *  @example
         *    // Using `columnDefs`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderSequence": [ "asc" ], "targets": [ 1 ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ], "targets": [ 2 ] },
		 *          { "orderSequence": [ "desc" ], "targets": [ 3 ] }
		 *        ]
		 *      } );
		 *    } );
         *
         *  @example
         *    // Using `columns`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          { "orderSequence": [ "asc" ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ] },
		 *          { "orderSequence": [ "desc" ] },
		 *          null
		 *        ]
		 *      } );
		 *    } );
         */
        "asSorting": [ 'asc', 'desc' ],


        /**
         * Enable or disable filtering on the data in this column.
         *  @type boolean
         *  @default true
         *
         *  @name DataTable.defaults.column.searchable
         *  @dtopt Columns
         *
         *  @example
         *    // Using `columnDefs`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "searchable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
         *
         *  @example
         *    // Using `columns`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "searchable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
         */
        "bSearchable": true,


        /**
         * Enable or disable ordering on this column.
         *  @type boolean
         *  @default true
         *
         *  @name DataTable.defaults.column.orderable
         *  @dtopt Columns
         *
         *  @example
         *    // Using `columnDefs`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
         *
         *  @example
         *    // Using `columns`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
         */
        "bSortable": true,


        /**
         * Enable or disable the display of this column.
         *  @type boolean
         *  @default true
         *
         *  @name DataTable.defaults.column.visible
         *  @dtopt Columns
         *
         *  @example
         *    // Using `columnDefs`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "visible": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
         *
         *  @example
         *    // Using `columns`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "visible": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
         */
        "bVisible": true,


        /**
         * Developer definable function that is called whenever a cell is created (Ajax source,
         * etc) or processed for input (DOM source). This can be used as a compliment to mRender
         * allowing you to modify the DOM element (add background colour for example) when the
         * element is available.
         *  @type function
         *  @param {element} td The TD node that has been created
         *  @param {*} cellData The Data for the cell
         *  @param {array|object} rowData The data for the whole row
         *  @param {int} row The row index for the aoData data store
         *  @param {int} col The column index for aoColumns
         *
         *  @name DataTable.defaults.column.createdCell
         *  @dtopt Columns
         *
         *  @example
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [3],
		 *          "createdCell": function (td, cellData, rowData, row, col) {
		 *            if ( cellData == "1.7" ) {
		 *              $(td).css('color', 'blue')
		 *            }
		 *          }
		 *        } ]
		 *      });
		 *    } );
         */
        "fnCreatedCell": null,


        /**
         * This parameter has been replaced by `data` in DataTables to ensure naming
         * consistency. `dataProp` can still be used, as there is backwards
         * compatibility in DataTables for this option, but it is strongly
         * recommended that you use `data` in preference to `dataProp`.
         *  @name DataTable.defaults.column.dataProp
         */


        /**
         * This property can be used to read data from any data source property,
         * including deeply nested objects / properties. `data` can be given in a
         * number of different ways which effect its behaviour:
         *
         * * `integer` - treated as an array index for the data source. This is the
         *   default that DataTables uses (incrementally increased for each column).
         * * `string` - read an object property from the data source. There are
         *   three 'special' options that can be used in the string to alter how
         *   DataTables reads the data from the source object:
         *    * `.` - Dotted Javascript notation. Just as you use a `.` in
         *      Javascript to read from nested objects, so to can the options
         *      specified in `data`. For example: `browser.version` or
         *      `browser.name`. If your object parameter name contains a period, use
         *      `\\` to escape it - i.e. `first\\.name`.
         *    * `[]` - Array notation. DataTables can automatically combine data
         *      from and array source, joining the data with the characters provided
         *      between the two brackets. For example: `name[, ]` would provide a
         *      comma-space separated list from the source array. If no characters
         *      are provided between the brackets, the original array source is
         *      returned.
         *    * `()` - Function notation. Adding `()` to the end of a parameter will
         *      execute a function of the name given. For example: `browser()` for a
         *      simple function on the data source, `browser.version()` for a
         *      function in a nested property or even `browser().version` to get an
         *      object property if the function called returns an object. Note that
         *      function notation is recommended for use in `render` rather than
         *      `data` as it is much simpler to use as a renderer.
         * * `null` - use the original data source for the row rather than plucking
         *   data directly from it. This action has effects on two other
         *   initialisation options:
         *    * `defaultContent` - When null is given as the `data` option and
         *      `defaultContent` is specified for the column, the value defined by
         *      `defaultContent` will be used for the cell.
         *    * `render` - When null is used for the `data` option and the `render`
         *      option is specified for the column, the whole data source for the
         *      row is used for the renderer.
         * * `function` - the function given will be executed whenever DataTables
         *   needs to set or get the data for a cell in the column. The function
         *   takes three parameters:
         *    * Parameters:
         *      * `{array|object}` The data source for the row
         *      * `{string}` The type call data requested - this will be 'set' when
         *        setting data or 'filter', 'display', 'type', 'sort' or undefined
         *        when gathering data. Note that when `undefined` is given for the
         *        type DataTables expects to get the raw data for the object back<
         *      * `{*}` Data to set when the second parameter is 'set'.
         *    * Return:
         *      * The return value from the function is not required when 'set' is
         *        the type of call, but otherwise the return is what will be used
         *        for the data requested.
         *
         * Note that `data` is a getter and setter option. If you just require
         * formatting of data for output, you will likely want to use `render` which
         * is simply a getter and thus simpler to use.
         *
         * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
         * name change reflects the flexibility of this property and is consistent
         * with the naming of mRender. If 'mDataProp' is given, then it will still
         * be used by DataTables, as it automatically maps the old name to the new
         * if required.
         *
         *  @type string|int|function|null
         *  @default null <i>Use automatically calculated column index</i>
         *
         *  @name DataTable.defaults.column.data
         *  @dtopt Columns
         *
         *  @example
         *    // Read table data from objects
         *    // JSON structure for each row:
         *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {value},
		 *    //      "version": {value},
		 *    //      "grade": {value}
		 *    //   }
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/objects.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform" },
		 *          { "data": "version" },
		 *          { "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
         *
         *  @example
         *    // Read information from deeply nested objects
         *    // JSON structure for each row:
         *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {
		 *    //         "inner": {value}
		 *    //      },
		 *    //      "details": [
		 *    //         {value}, {value}
		 *    //      ]
		 *    //   }
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform.inner" },
		 *          { "data": "platform.details.0" },
		 *          { "data": "platform.details.1" }
		 *        ]
		 *      } );
		 *    } );
         *
         *  @example
         *    // Using `data` as a function to provide different information for
         *    // sorting, filtering and display. In this case, currency (price)
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": function ( source, type, val ) {
		 *            if (type === 'set') {
		 *              source.price = val;
		 *              // Store the computed dislay and filter values for efficiency
		 *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
		 *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
		 *              return;
		 *            }
		 *            else if (type === 'display') {
		 *              return source.price_display;
		 *            }
		 *            else if (type === 'filter') {
		 *              return source.price_filter;
		 *            }
		 *            // 'sort', 'type' and undefined all just use the integer
		 *            return source.price;
		 *          }
		 *        } ]
		 *      } );
		 *    } );
         *
         *  @example
         *    // Using default content
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null,
		 *          "defaultContent": "Click to edit"
		 *        } ]
		 *      } );
		 *    } );
         *
         *  @example
         *    // Using array notation - outputting a list from an array
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "name[, ]"
		 *        } ]
		 *      } );
		 *    } );
         *
         */
        "mData": null,


        /**
         * This property is the rendering partner to `data` and it is suggested that
         * when you want to manipulate data for display (including filtering,
         * sorting etc) without altering the underlying data for the table, use this
         * property. `render` can be considered to be the the read only companion to
         * `data` which is read / write (then as such more complex). Like `data`
         * this option can be given in a number of different ways to effect its
         * behaviour:
         *
         * * `integer` - treated as an array index for the data source. This is the
         *   default that DataTables uses (incrementally increased for each column).
         * * `string` - read an object property from the data source. There are
         *   three 'special' options that can be used in the string to alter how
         *   DataTables reads the data from the source object:
         *    * `.` - Dotted Javascript notation. Just as you use a `.` in
         *      Javascript to read from nested objects, so to can the options
         *      specified in `data`. For example: `browser.version` or
         *      `browser.name`. If your object parameter name contains a period, use
         *      `\\` to escape it - i.e. `first\\.name`.
         *    * `[]` - Array notation. DataTables can automatically combine data
         *      from and array source, joining the data with the characters provided
         *      between the two brackets. For example: `name[, ]` would provide a
         *      comma-space separated list from the source array. If no characters
         *      are provided between the brackets, the original array source is
         *      returned.
         *    * `()` - Function notation. Adding `()` to the end of a parameter will
         *      execute a function of the name given. For example: `browser()` for a
         *      simple function on the data source, `browser.version()` for a
         *      function in a nested property or even `browser().version` to get an
         *      object property if the function called returns an object.
         * * `object` - use different data for the different data types requested by
         *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
         *   of the object is the data type the property refers to and the value can
         *   defined using an integer, string or function using the same rules as
         *   `render` normally does. Note that an `_` option _must_ be specified.
         *   This is the default value to use if you haven't specified a value for
         *   the data type requested by DataTables.
         * * `function` - the function given will be executed whenever DataTables
         *   needs to set or get the data for a cell in the column. The function
         *   takes three parameters:
         *    * Parameters:
         *      * {array|object} The data source for the row (based on `data`)
         *      * {string} The type call data requested - this will be 'filter',
         *        'display', 'type' or 'sort'.
         *      * {array|object} The full data source for the row (not based on
         *        `data`)
         *    * Return:
         *      * The return value from the function is what will be used for the
         *        data requested.
         *
         *  @type string|int|function|object|null
         *  @default null Use the data source value.
         *
         *  @name DataTable.defaults.column.render
         *  @dtopt Columns
         *
         *  @example
         *    // Create a comma separated list from an array of objects
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          {
		 *            "data": "platform",
		 *            "render": "[, ].name"
		 *          }
		 *        ]
		 *      } );
		 *    } );
         *
         *  @example
         *    // Execute a function to obtain data
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": "browserName()"
		 *        } ]
		 *      } );
		 *    } );
         *
         *  @example
         *    // As an object, extracting different data for the different types
         *    // This would be used with a data source such as:
         *    //   { "phone": 5552368, "phone_filter": "5552368 555-2368", "phone_display": "555-2368" }
         *    // Here the `phone` integer is used for sorting and type detection, while `phone_filter`
         *    // (which has both forms) is used for filtering for if a user inputs either format, while
         *    // the formatted phone number is the one that is shown in the table.
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": {
		 *            "_": "phone",
		 *            "filter": "phone_filter",
		 *            "display": "phone_display"
		 *          }
		 *        } ]
		 *      } );
		 *    } );
         *
         *  @example
         *    // Use as a function to create a link from the data source
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "download_link",
		 *          "render": function ( data, type, full ) {
		 *            return '<a href="'+data+'">Download</a>';
		 *          }
		 *        } ]
		 *      } );
		 *    } );
         */
        "mRender": null,


        /**
         * Change the cell type created for the column - either TD cells or TH cells. This
         * can be useful as TH cells have semantic meaning in the table body, allowing them
         * to act as a header for a row (you may wish to add scope='row' to the TH elements).
         *  @type string
         *  @default td
         *
         *  @name DataTable.defaults.column.cellType
         *  @dtopt Columns
         *
         *  @example
         *    // Make the first column use TH cells
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "cellType": "th"
		 *        } ]
		 *      } );
		 *    } );
         */
        "sCellType": "td",


        /**
         * Class to give to each cell in this column.
         *  @type string
         *  @default <i>Empty string</i>
         *
         *  @name DataTable.defaults.column.class
         *  @dtopt Columns
         *
         *  @example
         *    // Using `columnDefs`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "class": "my_class", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
         *
         *  @example
         *    // Using `columns`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "class": "my_class" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
         */
        "sClass": "",

        /**
         * When DataTables calculates the column widths to assign to each column,
         * it finds the longest string in each column and then constructs a
         * temporary table and reads the widths from that. The problem with this
         * is that "mmm" is much wider then "iiii", but the latter is a longer
         * string - thus the calculation can go wrong (doing it properly and putting
         * it into an DOM object and measuring that is horribly(!) slow). Thus as
         * a "work around" we provide this option. It will append its value to the
         * text that is found to be the longest string for the column - i.e. padding.
         * Generally you shouldn't need this!
         *  @type string
         *  @default <i>Empty string<i>
         *
         *  @name DataTable.defaults.column.contentPadding
         *  @dtopt Columns
         *
         *  @example
         *    // Using `columns`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "contentPadding": "mmm"
		 *          }
		 *        ]
		 *      } );
		 *    } );
         */
        "sContentPadding": "",


        /**
         * Allows a default value to be given for a column's data, and will be used
         * whenever a null data source is encountered (this can be because `data`
         * is set to null, or because the data source itself is null).
         *  @type string
         *  @default null
         *
         *  @name DataTable.defaults.column.defaultContent
         *  @dtopt Columns
         *
         *  @example
         *    // Using `columnDefs`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit",
		 *            "targets": [ -1 ]
		 *          }
		 *        ]
		 *      } );
		 *    } );
         *
         *  @example
         *    // Using `columns`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit"
		 *          }
		 *        ]
		 *      } );
		 *    } );
         */
        "sDefaultContent": null,


        /**
         * This parameter is only used in DataTables' server-side processing. It can
         * be exceptionally useful to know what columns are being displayed on the
         * client side, and to map these to database fields. When defined, the names
         * also allow DataTables to reorder information from the server if it comes
         * back in an unexpected order (i.e. if you switch your columns around on the
         * client-side, your server-side code does not also need updating).
         *  @type string
         *  @default <i>Empty string</i>
         *
         *  @name DataTable.defaults.column.name
         *  @dtopt Columns
         *
         *  @example
         *    // Using `columnDefs`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "name": "engine", "targets": [ 0 ] },
		 *          { "name": "browser", "targets": [ 1 ] },
		 *          { "name": "platform", "targets": [ 2 ] },
		 *          { "name": "version", "targets": [ 3 ] },
		 *          { "name": "grade", "targets": [ 4 ] }
		 *        ]
		 *      } );
		 *    } );
         *
         *  @example
         *    // Using `columns`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "name": "engine" },
		 *          { "name": "browser" },
		 *          { "name": "platform" },
		 *          { "name": "version" },
		 *          { "name": "grade" }
		 *        ]
		 *      } );
		 *    } );
         */
        "sName": "",


        /**
         * Defines a data source type for the ordering which can be used to read
         * real-time information from the table (updating the internally cached
         * version) prior to ordering. This allows ordering to occur on user
         * editable elements such as form inputs.
         *  @type string
         *  @default std
         *
         *  @name DataTable.defaults.column.orderDataType
         *  @dtopt Columns
         *
         *  @example
         *    // Using `columnDefs`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderDataType": "dom-text", "targets": [ 2, 3 ] },
		 *          { "type": "numeric", "targets": [ 3 ] },
		 *          { "orderDataType": "dom-select", "targets": [ 4 ] },
		 *          { "orderDataType": "dom-checkbox", "targets": [ 5 ] }
		 *        ]
		 *      } );
		 *    } );
         *
         *  @example
         *    // Using `columns`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          { "orderDataType": "dom-text" },
		 *          { "orderDataType": "dom-text", "type": "numeric" },
		 *          { "orderDataType": "dom-select" },
		 *          { "orderDataType": "dom-checkbox" }
		 *        ]
		 *      } );
		 *    } );
         */
        "sSortDataType": "std",


        /**
         * The title of this column.
         *  @type string
         *  @default null <i>Derived from the 'TH' value for this column in the
         *    original HTML table.</i>
         *
         *  @name DataTable.defaults.column.title
         *  @dtopt Columns
         *
         *  @example
         *    // Using `columnDefs`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "title": "My column title", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
         *
         *  @example
         *    // Using `columns`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "title": "My column title" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
         */
        "sTitle": null,


        /**
         * The type allows you to specify how the data for this column will be
         * ordered. Four types (string, numeric, date and html (which will strip
         * HTML tags before ordering)) are currently available. Note that only date
         * formats understood by Javascript's Date() object will be accepted as type
         * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
         * 'numeric', 'date' or 'html' (by default). Further types can be adding
         * through plug-ins.
         *  @type string
         *  @default null <i>Auto-detected from raw data</i>
         *
         *  @name DataTable.defaults.column.type
         *  @dtopt Columns
         *
         *  @example
         *    // Using `columnDefs`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "type": "html", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
         *
         *  @example
         *    // Using `columns`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "type": "html" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
         */
        "sType": null,


        /**
         * Defining the width of the column, this parameter may take any CSS value
         * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
         * been given a specific width through this interface ensuring that the table
         * remains readable.
         *  @type string
         *  @default null <i>Automatic</i>
         *
         *  @name DataTable.defaults.column.width
         *  @dtopt Columns
         *
         *  @example
         *    // Using `columnDefs`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "width": "20%", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
         *
         *  @example
         *    // Using `columns`
         *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "width": "20%" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
         */
        "sWidth": null
    };

    _fnHungarianMap( DataTable.defaults.column );



    /**
     * DataTables settings object - this holds all the information needed for a
     * given table, including configuration, data and current application of the
     * table options. DataTables does not have a single instance for each DataTable
     * with the settings attached to that instance, but rather instances of the
     * DataTable "class" are created on-the-fly as needed (typically by a
     * $().dataTable() call) and the settings object is then applied to that
     * instance.
     *
     * Note that this object is related to {@link DataTable.defaults} but this
     * one is the internal data store for DataTables's cache of columns. It should
     * NOT be manipulated outside of DataTables. Any configuration should be done
     * through the initialisation options.
     *  @namespace
     *  @todo Really should attach the settings object to individual instances so we
     *    don't need to create new instances on each $().dataTable() call (if the
     *    table already exists). It would also save passing oSettings around and
     *    into every single function. However, this is a very significant
     *    architecture change for DataTables and will almost certainly break
     *    backwards compatibility with older installations. This is something that
     *    will be done in 2.0.
     */
    DataTable.models.oSettings = {
        /**
         * Primary features of DataTables and their enablement state.
         *  @namespace
         */
        "oFeatures": {

            /**
             * Flag to say if DataTables should automatically try to calculate the
             * optimum table and columns widths (true) or not (false).
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type boolean
             */
            "bAutoWidth": null,

            /**
             * Delay the creation of TR and TD elements until they are actually
             * needed by a driven page draw. This can give a significant speed
             * increase for Ajax source and Javascript source data, but makes no
             * difference at all fro DOM and server-side processing tables.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type boolean
             */
            "bDeferRender": null,

            /**
             * Enable filtering on the table or not. Note that if this is disabled
             * then there is no filtering at all on the table, including fnFilter.
             * To just remove the filtering input use sDom and remove the 'f' option.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type boolean
             */
            "bFilter": null,

            /**
             * Table information element (the 'Showing x of y records' div) enable
             * flag.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type boolean
             */
            "bInfo": null,

            /**
             * Present a user control allowing the end user to change the page size
             * when pagination is enabled.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type boolean
             */
            "bLengthChange": null,

            /**
             * Pagination enabled or not. Note that if this is disabled then length
             * changing must also be disabled.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type boolean
             */
            "bPaginate": null,

            /**
             * Processing indicator enable flag whenever DataTables is enacting a
             * user request - typically an Ajax request for server-side processing.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type boolean
             */
            "bProcessing": null,

            /**
             * Server-side processing enabled flag - when enabled DataTables will
             * get all data from the server for every draw - there is no filtering,
             * sorting or paging done on the client-side.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type boolean
             */
            "bServerSide": null,

            /**
             * Sorting enablement flag.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type boolean
             */
            "bSort": null,

            /**
             * Multi-column sorting
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type boolean
             */
            "bSortMulti": null,

            /**
             * Apply a class to the columns which are being sorted to provide a
             * visual highlight or not. This can slow things down when enabled since
             * there is a lot of DOM interaction.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type boolean
             */
            "bSortClasses": null,

            /**
             * State saving enablement flag.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type boolean
             */
            "bStateSave": null
        },


        /**
         * Scrolling settings for a table.
         *  @namespace
         */
        "oScroll": {
            /**
             * When the table is shorter in height than sScrollY, collapse the
             * table container down to the height of the table (when true).
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type boolean
             */
            "bCollapse": null,

            /**
             * Width of the scrollbar for the web-browser's platform. Calculated
             * during table initialisation.
             *  @type int
             *  @default 0
             */
            "iBarWidth": 0,

            /**
             * Viewport width for horizontal scrolling. Horizontal scrolling is
             * disabled if an empty string.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type string
             */
            "sX": null,

            /**
             * Width to expand the table to when using x-scrolling. Typically you
             * should not need to use this.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type string
             *  @deprecated
             */
            "sXInner": null,

            /**
             * Viewport height for vertical scrolling. Vertical scrolling is disabled
             * if an empty string.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type string
             */
            "sY": null
        },

        /**
         * Language information for the table.
         *  @namespace
         *  @extends DataTable.defaults.oLanguage
         */
        "oLanguage": {
            /**
             * Information callback function. See
             * {@link DataTable.defaults.fnInfoCallback}
             *  @type function
             *  @default null
             */
            "fnInfoCallback": null
        },

        /**
         * Browser support parameters
         *  @namespace
         */
        "oBrowser": {
            /**
             * Indicate if the browser incorrectly calculates width:100% inside a
             * scrolling element (IE6/7)
             *  @type boolean
             *  @default false
             */
            "bScrollOversize": false,

            /**
             * Determine if the vertical scrollbar is on the right or left of the
             * scrolling container - needed for rtl language layout, although not
             * all browsers move the scrollbar (Safari).
             *  @type boolean
             *  @default false
             */
            "bScrollbarLeft": false,

            /**
             * Flag for if `getBoundingClientRect` is fully supported or not
             *  @type boolean
             *  @default false
             */
            "bBounding": false,

            /**
             * Browser scrollbar width
             *  @type integer
             *  @default 0
             */
            "barWidth": 0
        },


        "ajax": null,


        /**
         * Array referencing the nodes which are used for the features. The
         * parameters of this object match what is allowed by sDom - i.e.
         *   <ul>
         *     <li>'l' - Length changing</li>
         *     <li>'f' - Filtering input</li>
         *     <li>'t' - The table!</li>
         *     <li>'i' - Information</li>
         *     <li>'p' - Pagination</li>
         *     <li>'r' - pRocessing</li>
         *   </ul>
         *  @type array
         *  @default []
         */
        "aanFeatures": [],

        /**
         * Store data information - see {@link DataTable.models.oRow} for detailed
         * information.
         *  @type array
         *  @default []
         */
        "aoData": [],

        /**
         * Array of indexes which are in the current display (after filtering etc)
         *  @type array
         *  @default []
         */
        "aiDisplay": [],

        /**
         * Array of indexes for display - no filtering
         *  @type array
         *  @default []
         */
        "aiDisplayMaster": [],

        /**
         * Map of row ids to data indexes
         *  @type object
         *  @default {}
         */
        "aIds": {},

        /**
         * Store information about each column that is in use
         *  @type array
         *  @default []
         */
        "aoColumns": [],

        /**
         * Store information about the table's header
         *  @type array
         *  @default []
         */
        "aoHeader": [],

        /**
         * Store information about the table's footer
         *  @type array
         *  @default []
         */
        "aoFooter": [],

        /**
         * Store the applied global search information in case we want to force a
         * research or compare the old search to a new one.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         *  @namespace
         *  @extends DataTable.models.oSearch
         */
        "oPreviousSearch": {},

        /**
         * Store the applied search for each column - see
         * {@link DataTable.models.oSearch} for the format that is used for the
         * filtering information for each column.
         *  @type array
         *  @default []
         */
        "aoPreSearchCols": [],

        /**
         * Sorting that is applied to the table. Note that the inner arrays are
         * used in the following manner:
         * <ul>
         *   <li>Index 0 - column number</li>
         *   <li>Index 1 - current sorting direction</li>
         * </ul>
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         *  @type array
         *  @todo These inner arrays should really be objects
         */
        "aaSorting": null,

        /**
         * Sorting that is always applied to the table (i.e. prefixed in front of
         * aaSorting).
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         *  @type array
         *  @default []
         */
        "aaSortingFixed": [],

        /**
         * Classes to use for the striping of a table.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         *  @type array
         *  @default []
         */
        "asStripeClasses": null,

        /**
         * If restoring a table - we should restore its striping classes as well
         *  @type array
         *  @default []
         */
        "asDestroyStripes": [],

        /**
         * If restoring a table - we should restore its width
         *  @type int
         *  @default 0
         */
        "sDestroyWidth": 0,

        /**
         * Callback functions array for every time a row is inserted (i.e. on a draw).
         *  @type array
         *  @default []
         */
        "aoRowCallback": [],

        /**
         * Callback functions for the header on each draw.
         *  @type array
         *  @default []
         */
        "aoHeaderCallback": [],

        /**
         * Callback function for the footer on each draw.
         *  @type array
         *  @default []
         */
        "aoFooterCallback": [],

        /**
         * Array of callback functions for draw callback functions
         *  @type array
         *  @default []
         */
        "aoDrawCallback": [],

        /**
         * Array of callback functions for row created function
         *  @type array
         *  @default []
         */
        "aoRowCreatedCallback": [],

        /**
         * Callback functions for just before the table is redrawn. A return of
         * false will be used to cancel the draw.
         *  @type array
         *  @default []
         */
        "aoPreDrawCallback": [],

        /**
         * Callback functions for when the table has been initialised.
         *  @type array
         *  @default []
         */
        "aoInitComplete": [],


        /**
         * Callbacks for modifying the settings to be stored for state saving, prior to
         * saving state.
         *  @type array
         *  @default []
         */
        "aoStateSaveParams": [],

        /**
         * Callbacks for modifying the settings that have been stored for state saving
         * prior to using the stored values to restore the state.
         *  @type array
         *  @default []
         */
        "aoStateLoadParams": [],

        /**
         * Callbacks for operating on the settings object once the saved state has been
         * loaded
         *  @type array
         *  @default []
         */
        "aoStateLoaded": [],

        /**
         * Cache the table ID for quick access
         *  @type string
         *  @default <i>Empty string</i>
         */
        "sTableId": "",

        /**
         * The TABLE node for the main table
         *  @type node
         *  @default null
         */
        "nTable": null,

        /**
         * Permanent ref to the thead element
         *  @type node
         *  @default null
         */
        "nTHead": null,

        /**
         * Permanent ref to the tfoot element - if it exists
         *  @type node
         *  @default null
         */
        "nTFoot": null,

        /**
         * Permanent ref to the tbody element
         *  @type node
         *  @default null
         */
        "nTBody": null,

        /**
         * Cache the wrapper node (contains all DataTables controlled elements)
         *  @type node
         *  @default null
         */
        "nTableWrapper": null,

        /**
         * Indicate if when using server-side processing the loading of data
         * should be deferred until the second draw.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         *  @type boolean
         *  @default false
         */
        "bDeferLoading": false,

        /**
         * Indicate if all required information has been read in
         *  @type boolean
         *  @default false
         */
        "bInitialised": false,

        /**
         * Information about open rows. Each object in the array has the parameters
         * 'nTr' and 'nParent'
         *  @type array
         *  @default []
         */
        "aoOpenRows": [],

        /**
         * Dictate the positioning of DataTables' control elements - see
         * {@link DataTable.model.oInit.sDom}.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         *  @type string
         *  @default null
         */
        "sDom": null,

        /**
         * Search delay (in mS)
         *  @type integer
         *  @default null
         */
        "searchDelay": null,

        /**
         * Which type of pagination should be used.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         *  @type string
         *  @default two_button
         */
        "sPaginationType": "two_button",

        /**
         * The state duration (for `stateSave`) in seconds.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         *  @type int
         *  @default 0
         */
        "iStateDuration": 0,

        /**
         * Array of callback functions for state saving. Each array element is an
         * object with the following parameters:
         *   <ul>
         *     <li>function:fn - function to call. Takes two parameters, oSettings
         *       and the JSON string to save that has been thus far created. Returns
         *       a JSON string to be inserted into a json object
         *       (i.e. '"param": [ 0, 1, 2]')</li>
         *     <li>string:sName - name of callback</li>
         *   </ul>
         *  @type array
         *  @default []
         */
        "aoStateSave": [],

        /**
         * Array of callback functions for state loading. Each array element is an
         * object with the following parameters:
         *   <ul>
         *     <li>function:fn - function to call. Takes two parameters, oSettings
         *       and the object stored. May return false to cancel state loading</li>
         *     <li>string:sName - name of callback</li>
         *   </ul>
         *  @type array
         *  @default []
         */
        "aoStateLoad": [],

        /**
         * State that was saved. Useful for back reference
         *  @type object
         *  @default null
         */
        "oSavedState": null,

        /**
         * State that was loaded. Useful for back reference
         *  @type object
         *  @default null
         */
        "oLoadedState": null,

        /**
         * Source url for AJAX data for the table.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         *  @type string
         *  @default null
         */
        "sAjaxSource": null,

        /**
         * Property from a given object from which to read the table data from. This
         * can be an empty string (when not server-side processing), in which case
         * it is  assumed an an array is given directly.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         *  @type string
         */
        "sAjaxDataProp": null,

        /**
         * Note if draw should be blocked while getting data
         *  @type boolean
         *  @default true
         */
        "bAjaxDataGet": true,

        /**
         * The last jQuery XHR object that was used for server-side data gathering.
         * This can be used for working with the XHR information in one of the
         * callbacks
         *  @type object
         *  @default null
         */
        "jqXHR": null,

        /**
         * JSON returned from the server in the last Ajax request
         *  @type object
         *  @default undefined
         */
        "json": undefined,

        /**
         * Data submitted as part of the last Ajax request
         *  @type object
         *  @default undefined
         */
        "oAjaxData": undefined,

        /**
         * Function to get the server-side data.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         *  @type function
         */
        "fnServerData": null,

        /**
         * Functions which are called prior to sending an Ajax request so extra
         * parameters can easily be sent to the server
         *  @type array
         *  @default []
         */
        "aoServerParams": [],

        /**
         * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
         * required).
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         *  @type string
         */
        "sServerMethod": null,

        /**
         * Format numbers for display.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         *  @type function
         */
        "fnFormatNumber": null,

        /**
         * List of options that can be used for the user selectable length menu.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         *  @type array
         *  @default []
         */
        "aLengthMenu": null,

        /**
         * Counter for the draws that the table does. Also used as a tracker for
         * server-side processing
         *  @type int
         *  @default 0
         */
        "iDraw": 0,

        /**
         * Indicate if a redraw is being done - useful for Ajax
         *  @type boolean
         *  @default false
         */
        "bDrawing": false,

        /**
         * Draw index (iDraw) of the last error when parsing the returned data
         *  @type int
         *  @default -1
         */
        "iDrawError": -1,

        /**
         * Paging display length
         *  @type int
         *  @default 10
         */
        "_iDisplayLength": 10,

        /**
         * Paging start point - aiDisplay index
         *  @type int
         *  @default 0
         */
        "_iDisplayStart": 0,

        /**
         * Server-side processing - number of records in the result set
         * (i.e. before filtering), Use fnRecordsTotal rather than
         * this property to get the value of the number of records, regardless of
         * the server-side processing setting.
         *  @type int
         *  @default 0
         *  @private
         */
        "_iRecordsTotal": 0,

        /**
         * Server-side processing - number of records in the current display set
         * (i.e. after filtering). Use fnRecordsDisplay rather than
         * this property to get the value of the number of records, regardless of
         * the server-side processing setting.
         *  @type boolean
         *  @default 0
         *  @private
         */
        "_iRecordsDisplay": 0,

        /**
         * Flag to indicate if jQuery UI marking and classes should be used.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         *  @type boolean
         */
        "bJUI": null,

        /**
         * The classes to use for the table
         *  @type object
         *  @default {}
         */
        "oClasses": {},

        /**
         * Flag attached to the settings object so you can check in the draw
         * callback if filtering has been done in the draw. Deprecated in favour of
         * events.
         *  @type boolean
         *  @default false
         *  @deprecated
         */
        "bFiltered": false,

        /**
         * Flag attached to the settings object so you can check in the draw
         * callback if sorting has been done in the draw. Deprecated in favour of
         * events.
         *  @type boolean
         *  @default false
         *  @deprecated
         */
        "bSorted": false,

        /**
         * Indicate that if multiple rows are in the header and there is more than
         * one unique cell per column, if the top one (true) or bottom one (false)
         * should be used for sorting / title by DataTables.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         *  @type boolean
         */
        "bSortCellsTop": null,

        /**
         * Initialisation object that is used for the table
         *  @type object
         *  @default null
         */
        "oInit": null,

        /**
         * Destroy callback functions - for plug-ins to attach themselves to the
         * destroy so they can clean up markup and events.
         *  @type array
         *  @default []
         */
        "aoDestroyCallback": [],


        /**
         * Get the number of records in the current record set, before filtering
         *  @type function
         */
        "fnRecordsTotal": function ()
        {
            return _fnDataSource( this ) == 'ssp' ?
            this._iRecordsTotal * 1 :
                this.aiDisplayMaster.length;
        },

        /**
         * Get the number of records in the current record set, after filtering
         *  @type function
         */
        "fnRecordsDisplay": function ()
        {
            return _fnDataSource( this ) == 'ssp' ?
            this._iRecordsDisplay * 1 :
                this.aiDisplay.length;
        },

        /**
         * Get the display end point - aiDisplay index
         *  @type function
         */
        "fnDisplayEnd": function ()
        {
            var
                len      = this._iDisplayLength,
                start    = this._iDisplayStart,
                calc     = start + len,
                records  = this.aiDisplay.length,
                features = this.oFeatures,
                paginate = features.bPaginate;

            if ( features.bServerSide ) {
                return paginate === false || len === -1 ?
                start + records :
                    Math.min( start+len, this._iRecordsDisplay );
            }
            else {
                return ! paginate || calc>records || len===-1 ?
                    records :
                    calc;
            }
        },

        /**
         * The DataTables object for this table
         *  @type object
         *  @default null
         */
        "oInstance": null,

        /**
         * Unique identifier for each instance of the DataTables object. If there
         * is an ID on the table node, then it takes that value, otherwise an
         * incrementing internal counter is used.
         *  @type string
         *  @default null
         */
        "sInstance": null,

        /**
         * tabindex attribute value that is added to DataTables control elements, allowing
         * keyboard navigation of the table and its controls.
         */
        "iTabIndex": 0,

        /**
         * DIV container for the footer scrolling table if scrolling
         */
        "nScrollHead": null,

        /**
         * DIV container for the footer scrolling table if scrolling
         */
        "nScrollFoot": null,

        /**
         * Last applied sort
         *  @type array
         *  @default []
         */
        "aLastSort": [],

        /**
         * Stored plug-in instances
         *  @type object
         *  @default {}
         */
        "oPlugins": {},

        /**
         * Function used to get a row's id from the row's data
         *  @type function
         *  @default null
         */
        "rowIdFn": null,

        /**
         * Data location where to store a row's id
         *  @type string
         *  @default null
         */
        "rowId": null
    };

    /**
     * Extension object for DataTables that is used to provide all extension
     * options.
     *
     * Note that the `DataTable.ext` object is available through
     * `jQuery.fn.dataTable.ext` where it may be accessed and manipulated. It is
     * also aliased to `jQuery.fn.dataTableExt` for historic reasons.
     *  @namespace
     *  @extends DataTable.models.ext
     */


    /**
     * DataTables extensions
     *
     * This namespace acts as a collection area for plug-ins that can be used to
     * extend DataTables capabilities. Indeed many of the build in methods
     * use this method to provide their own capabilities (sorting methods for
     * example).
     *
     * Note that this namespace is aliased to `jQuery.fn.dataTableExt` for legacy
     * reasons
     *
     *  @namespace
     */
    DataTable.ext = _ext = {
        /**
         * Buttons. For use with the Buttons extension for DataTables. This is
         * defined here so other extensions can define buttons regardless of load
         * order. It is _not_ used by DataTables core.
         *
         *  @type object
         *  @default {}
         */
        buttons: {},


        /**
         * Element class names
         *
         *  @type object
         *  @default {}
         */
        classes: {},


        /**
         * DataTables build type (expanded by the download builder)
         *
         *  @type string
         */
        builder: "-source-",


        /**
         * Error reporting.
         *
         * How should DataTables report an error. Can take the value 'alert',
         * 'throw', 'none' or a function.
         *
         *  @type string|function
         *  @default alert
         */
        errMode: "alert",


        /**
         * Feature plug-ins.
         *
         * This is an array of objects which describe the feature plug-ins that are
         * available to DataTables. These feature plug-ins are then available for
         * use through the `dom` initialisation option.
         *
         * Each feature plug-in is described by an object which must have the
         * following properties:
         *
         * * `fnInit` - function that is used to initialise the plug-in,
         * * `cFeature` - a character so the feature can be enabled by the `dom`
         *   instillation option. This is case sensitive.
         *
         * The `fnInit` function has the following input parameters:
         *
         * 1. `{object}` DataTables settings object: see
         *    {@link DataTable.models.oSettings}
         *
         * And the following return is expected:
         *
         * * {node|null} The element which contains your feature. Note that the
         *   return may also be void if your plug-in does not require to inject any
         *   DOM elements into DataTables control (`dom`) - for example this might
         *   be useful when developing a plug-in which allows table control via
         *   keyboard entry
         *
         *  @type array
         *
         *  @example
         *    $.fn.dataTable.ext.features.push( {
		 *      "fnInit": function( oSettings ) {
		 *        return new TableTools( { "oDTSettings": oSettings } );
		 *      },
		 *      "cFeature": "T"
		 *    } );
         */
        feature: [],


        /**
         * Row searching.
         *
         * This method of searching is complimentary to the default type based
         * searching, and a lot more comprehensive as it allows you complete control
         * over the searching logic. Each element in this array is a function
         * (parameters described below) that is called for every row in the table,
         * and your logic decides if it should be included in the searching data set
         * or not.
         *
         * Searching functions have the following input parameters:
         *
         * 1. `{object}` DataTables settings object: see
         *    {@link DataTable.models.oSettings}
         * 2. `{array|object}` Data for the row to be processed (same as the
         *    original format that was passed in as the data source, or an array
         *    from a DOM data source
         * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
         *    can be useful to retrieve the `TR` element if you need DOM interaction.
         *
         * And the following return is expected:
         *
         * * {boolean} Include the row in the searched result set (true) or not
         *   (false)
         *
         * Note that as with the main search ability in DataTables, technically this
         * is "filtering", since it is subtractive. However, for consistency in
         * naming we call it searching here.
         *
         *  @type array
         *  @default []
         *
         *  @example
         *    // The following example shows custom search being applied to the
         *    // fourth column (i.e. the data[3] index) based on two input values
         *    // from the end-user, matching the data in a certain range.
         *    $.fn.dataTable.ext.search.push(
         *      function( settings, data, dataIndex ) {
		 *        var min = document.getElementById('min').value * 1;
		 *        var max = document.getElementById('max').value * 1;
		 *        var version = data[3] == "-" ? 0 : data[3]*1;
		 *
		 *        if ( min == "" && max == "" ) {
		 *          return true;
		 *        }
		 *        else if ( min == "" && version < max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && "" == max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && version < max ) {
		 *          return true;
		 *        }
		 *        return false;
		 *      }
         *    );
         */
        search: [],


        /**
         * Selector extensions
         *
         * The `selector` option can be used to extend the options available for the
         * selector modifier options (`selector-modifier` object data type) that
         * each of the three built in selector types offer (row, column and cell +
         * their plural counterparts). For example the Select extension uses this
         * mechanism to provide an option to select only rows, columns and cells
         * that have been marked as selected by the end user (`{selected: true}`),
         * which can be used in conjunction with the existing built in selector
         * options.
         *
         * Each property is an array to which functions can be pushed. The functions
         * take three attributes:
         *
         * * Settings object for the host table
         * * Options object (`selector-modifier` object type)
         * * Array of selected item indexes
         *
         * The return is an array of the resulting item indexes after the custom
         * selector has been applied.
         *
         *  @type object
         */
        selector: {
            cell: [],
            column: [],
            row: []
        },


        /**
         * Internal functions, exposed for used in plug-ins.
         *
         * Please note that you should not need to use the internal methods for
         * anything other than a plug-in (and even then, try to avoid if possible).
         * The internal function may change between releases.
         *
         *  @type object
         *  @default {}
         */
        internal: {},


        /**
         * Legacy configuration options. Enable and disable legacy options that
         * are available in DataTables.
         *
         *  @type object
         */
        legacy: {
            /**
             * Enable / disable DataTables 1.9 compatible server-side processing
             * requests
             *
             *  @type boolean
             *  @default null
             */
            ajax: null
        },


        /**
         * Pagination plug-in methods.
         *
         * Each entry in this object is a function and defines which buttons should
         * be shown by the pagination rendering method that is used for the table:
         * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
         * buttons are displayed in the document, while the functions here tell it
         * what buttons to display. This is done by returning an array of button
         * descriptions (what each button will do).
         *
         * Pagination types (the four built in options and any additional plug-in
         * options defined here) can be used through the `paginationType`
         * initialisation parameter.
         *
         * The functions defined take two parameters:
         *
         * 1. `{int} page` The current page index
         * 2. `{int} pages` The number of pages in the table
         *
         * Each function is expected to return an array where each element of the
         * array can be one of:
         *
         * * `first` - Jump to first page when activated
         * * `last` - Jump to last page when activated
         * * `previous` - Show previous page when activated
         * * `next` - Show next page when activated
         * * `{int}` - Show page of the index given
         * * `{array}` - A nested array containing the above elements to add a
         *   containing 'DIV' element (might be useful for styling).
         *
         * Note that DataTables v1.9- used this object slightly differently whereby
         * an object with two functions would be defined for each plug-in. That
         * ability is still supported by DataTables 1.10+ to provide backwards
         * compatibility, but this option of use is now decremented and no longer
         * documented in DataTables 1.10+.
         *
         *  @type object
         *  @default {}
         *
         *  @example
         *    // Show previous, next and current page buttons only
         *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
		 *      return [ 'previous', page, 'next' ];
		 *    };
         */
        pager: {},


        renderer: {
            pageButton: {},
            header: {}
        },


        /**
         * Ordering plug-ins - custom data source
         *
         * The extension options for ordering of data available here is complimentary
         * to the default type based ordering that DataTables typically uses. It
         * allows much greater control over the the data that is being used to
         * order a column, but is necessarily therefore more complex.
         *
         * This type of ordering is useful if you want to do ordering based on data
         * live from the DOM (for example the contents of an 'input' element) rather
         * than just the static string that DataTables knows of.
         *
         * The way these plug-ins work is that you create an array of the values you
         * wish to be ordering for the column in question and then return that
         * array. The data in the array much be in the index order of the rows in
         * the table (not the currently ordering order!). Which order data gathering
         * function is run here depends on the `dt-init columns.orderDataType`
         * parameter that is used for the column (if any).
         *
         * The functions defined take two parameters:
         *
         * 1. `{object}` DataTables settings object: see
         *    {@link DataTable.models.oSettings}
         * 2. `{int}` Target column index
         *
         * Each function is expected to return an array:
         *
         * * `{array}` Data for the column to be ordering upon
         *
         *  @type array
         *
         *  @example
         *    // Ordering using `input` node values
         *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
         *    {
		 *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
		 *        return $('input', td).val();
		 *      } );
		 *    }
         */
        order: {},


        /**
         * Type based plug-ins.
         *
         * Each column in DataTables has a type assigned to it, either by automatic
         * detection or by direct assignment using the `type` option for the column.
         * The type of a column will effect how it is ordering and search (plug-ins
         * can also make use of the column type if required).
         *
         * @namespace
         */
        type: {
            /**
             * Type detection functions.
             *
             * The functions defined in this object are used to automatically detect
             * a column's type, making initialisation of DataTables super easy, even
             * when complex data is in the table.
             *
             * The functions defined take two parameters:
             *
             *  1. `{*}` Data from the column cell to be analysed
             *  2. `{settings}` DataTables settings object. This can be used to
             *     perform context specific type detection - for example detection
             *     based on language settings such as using a comma for a decimal
             *     place. Generally speaking the options from the settings will not
             *     be required
             *
             * Each function is expected to return:
             *
             * * `{string|null}` Data type detected, or null if unknown (and thus
             *   pass it on to the other type detection functions.
             *
             *  @type array
             *
             *  @example
             *    // Currency type detection plug-in:
             *    $.fn.dataTable.ext.type.detect.push(
             *      function ( data, settings ) {
			 *        // Check the numeric part
			 *        if ( ! $.isNumeric( data.substring(1) ) ) {
			 *          return null;
			 *        }
			 *
			 *        // Check prefixed by currency
			 *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
			 *          return 'currency';
			 *        }
			 *        return null;
			 *      }
             *    );
             */
            detect: [],


            /**
             * Type based search formatting.
             *
             * The type based searching functions can be used to pre-format the
             * data to be search on. For example, it can be used to strip HTML
             * tags or to de-format telephone numbers for numeric only searching.
             *
             * Note that is a search is not defined for a column of a given type,
             * no search formatting will be performed.
             *
             * Pre-processing of searching data plug-ins - When you assign the sType
             * for a column (or have it automatically detected for you by DataTables
             * or a type detection plug-in), you will typically be using this for
             * custom sorting, but it can also be used to provide custom searching
             * by allowing you to pre-processing the data and returning the data in
             * the format that should be searched upon. This is done by adding
             * functions this object with a parameter name which matches the sType
             * for that target column. This is the corollary of <i>afnSortData</i>
             * for searching data.
             *
             * The functions defined take a single parameter:
             *
             *  1. `{*}` Data from the column cell to be prepared for searching
             *
             * Each function is expected to return:
             *
             * * `{string|null}` Formatted string that will be used for the searching.
             *
             *  @type object
             *  @default {}
             *
             *  @example
             *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
			 *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
			 *    }
             */
            search: {},


            /**
             * Type based ordering.
             *
             * The column type tells DataTables what ordering to apply to the table
             * when a column is sorted upon. The order for each type that is defined,
             * is defined by the functions available in this object.
             *
             * Each ordering option can be described by three properties added to
             * this object:
             *
             * * `{type}-pre` - Pre-formatting function
             * * `{type}-asc` - Ascending order function
             * * `{type}-desc` - Descending order function
             *
             * All three can be used together, only `{type}-pre` or only
             * `{type}-asc` and `{type}-desc` together. It is generally recommended
             * that only `{type}-pre` is used, as this provides the optimal
             * implementation in terms of speed, although the others are provided
             * for compatibility with existing Javascript sort functions.
             *
             * `{type}-pre`: Functions defined take a single parameter:
             *
             *  1. `{*}` Data from the column cell to be prepared for ordering
             *
             * And return:
             *
             * * `{*}` Data to be sorted upon
             *
             * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
             * functions, taking two parameters:
             *
             *  1. `{*}` Data to compare to the second parameter
             *  2. `{*}` Data to compare to the first parameter
             *
             * And returning:
             *
             * * `{*}` Ordering match: <0 if first parameter should be sorted lower
             *   than the second parameter, ===0 if the two parameters are equal and
             *   >0 if the first parameter should be sorted height than the second
             *   parameter.
             *
             *  @type object
             *  @default {}
             *
             *  @example
             *    // Numeric ordering of formatted numbers with a pre-formatter
             *    $.extend( $.fn.dataTable.ext.type.order, {
			 *      "string-pre": function(x) {
			 *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
			 *        return parseFloat( a );
			 *      }
			 *    } );
             *
             *  @example
             *    // Case-sensitive string ordering, with no pre-formatting method
             *    $.extend( $.fn.dataTable.ext.order, {
			 *      "string-case-asc": function(x,y) {
			 *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			 *      },
			 *      "string-case-desc": function(x,y) {
			 *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
			 *      }
			 *    } );
             */
            order: {}
        },

        /**
         * Unique DataTables instance counter
         *
         * @type int
         * @private
         */
        _unique: 0,


        //
        // Depreciated
        // The following properties are retained for backwards compatiblity only.
        // The should not be used in new projects and will be removed in a future
        // version
        //

        /**
         * Version check function.
         *  @type function
         *  @depreciated Since 1.10
         */
        fnVersionCheck: DataTable.fnVersionCheck,


        /**
         * Index for what 'this' index API functions should use
         *  @type int
         *  @deprecated Since v1.10
         */
        iApiIndex: 0,


        /**
         * jQuery UI class container
         *  @type object
         *  @deprecated Since v1.10
         */
        oJUIClasses: {},


        /**
         * Software version
         *  @type string
         *  @deprecated Since v1.10
         */
        sVersion: DataTable.version
    };


    //
    // Backwards compatibility. Alias to pre 1.10 Hungarian notation counter parts
    //
    $.extend( _ext, {
        afnFiltering: _ext.search,
        aTypes:       _ext.type.detect,
        ofnSearch:    _ext.type.search,
        oSort:        _ext.type.order,
        afnSortData:  _ext.order,
        aoFeatures:   _ext.feature,
        oApi:         _ext.internal,
        oStdClasses:  _ext.classes,
        oPagination:  _ext.pager
    } );


    $.extend( DataTable.ext.classes, {
        "sTable": "dataTable",
        "sNoFooter": "no-footer",

        /* Paging buttons */
        "sPageButton": "paginate_button",
        "sPageButtonActive": "current",
        "sPageButtonDisabled": "disabled",

        /* Striping classes */
        "sStripeOdd": "odd",
        "sStripeEven": "even",

        /* Empty row */
        "sRowEmpty": "dataTables_empty",

        /* Features */
        "sWrapper": "dataTables_wrapper",
        "sFilter": "dataTables_filter",
        "sInfo": "dataTables_info",
        "sPaging": "dataTables_paginate paging_", /* Note that the type is postfixed */
        "sLength": "dataTables_length",
        "sProcessing": "dataTables_processing",

        /* Sorting */
        "sSortAsc": "sorting_asc",
        "sSortDesc": "sorting_desc",
        "sSortable": "sorting", /* Sortable in both directions */
        "sSortableAsc": "sorting_asc_disabled",
        "sSortableDesc": "sorting_desc_disabled",
        "sSortableNone": "sorting_disabled",
        "sSortColumn": "sorting_", /* Note that an int is postfixed for the sorting order */

        /* Filtering */
        "sFilterInput": "",

        /* Page length */
        "sLengthSelect": "",

        /* Scrolling */
        "sScrollWrapper": "dataTables_scroll",
        "sScrollHead": "dataTables_scrollHead",
        "sScrollHeadInner": "dataTables_scrollHeadInner",
        "sScrollBody": "dataTables_scrollBody",
        "sScrollFoot": "dataTables_scrollFoot",
        "sScrollFootInner": "dataTables_scrollFootInner",

        /* Misc */
        "sHeaderTH": "",
        "sFooterTH": "",

        // Deprecated
        "sSortJUIAsc": "",
        "sSortJUIDesc": "",
        "sSortJUI": "",
        "sSortJUIAscAllowed": "",
        "sSortJUIDescAllowed": "",
        "sSortJUIWrapper": "",
        "sSortIcon": "",
        "sJUIHeader": "",
        "sJUIFooter": ""
    } );


    (function() {

        // Reused strings for better compression. Closure compiler appears to have a
        // weird edge case where it is trying to expand strings rather than use the
        // variable version. This results in about 200 bytes being added, for very
        // little preference benefit since it this run on script load only.
        var _empty = '';
        _empty = '';

        var _stateDefault = _empty + 'ui-state-default';
        var _sortIcon     = _empty + 'css_right ui-icon ui-icon-';
        var _headerFooter = _empty + 'fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix';

        $.extend( DataTable.ext.oJUIClasses, DataTable.ext.classes, {
            /* Full numbers paging buttons */
            "sPageButton":         "fg-button ui-button "+_stateDefault,
            "sPageButtonActive":   "ui-state-disabled",
            "sPageButtonDisabled": "ui-state-disabled",

            /* Features */
            "sPaging": "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi "+
            "ui-buttonset-multi paging_", /* Note that the type is postfixed */

            /* Sorting */
            "sSortAsc":            _stateDefault+" sorting_asc",
            "sSortDesc":           _stateDefault+" sorting_desc",
            "sSortable":           _stateDefault+" sorting",
            "sSortableAsc":        _stateDefault+" sorting_asc_disabled",
            "sSortableDesc":       _stateDefault+" sorting_desc_disabled",
            "sSortableNone":       _stateDefault+" sorting_disabled",
            "sSortJUIAsc":         _sortIcon+"triangle-1-n",
            "sSortJUIDesc":        _sortIcon+"triangle-1-s",
            "sSortJUI":            _sortIcon+"carat-2-n-s",
            "sSortJUIAscAllowed":  _sortIcon+"carat-1-n",
            "sSortJUIDescAllowed": _sortIcon+"carat-1-s",
            "sSortJUIWrapper":     "DataTables_sort_wrapper",
            "sSortIcon":           "DataTables_sort_icon",

            /* Scrolling */
            "sScrollHead": "dataTables_scrollHead "+_stateDefault,
            "sScrollFoot": "dataTables_scrollFoot "+_stateDefault,

            /* Misc */
            "sHeaderTH":  _stateDefault,
            "sFooterTH":  _stateDefault,
            "sJUIHeader": _headerFooter+" ui-corner-tl ui-corner-tr",
            "sJUIFooter": _headerFooter+" ui-corner-bl ui-corner-br"
        } );

    }());



    var extPagination = DataTable.ext.pager;

    function _numbers ( page, pages ) {
        var
            numbers = [],
            buttons = extPagination.numbers_length,
            half = Math.floor( buttons / 2 ),
            i = 1;

        if ( pages <= buttons ) {
            numbers = _range( 0, pages );
        }
        else if ( page <= half ) {
            numbers = _range( 0, buttons-2 );
            numbers.push( 'ellipsis' );
            numbers.push( pages-1 );
        }
        else if ( page >= pages - 1 - half ) {
            numbers = _range( pages-(buttons-2), pages );
            numbers.splice( 0, 0, 'ellipsis' ); // no unshift in ie6
            numbers.splice( 0, 0, 0 );
        }
        else {
            numbers = _range( page-half+2, page+half-1 );
            numbers.push( 'ellipsis' );
            numbers.push( pages-1 );
            numbers.splice( 0, 0, 'ellipsis' );
            numbers.splice( 0, 0, 0 );
        }

        numbers.DT_el = 'span';
        return numbers;
    }


    $.extend( extPagination, {
        simple: function ( page, pages ) {
            return [ 'previous', 'next' ];
        },

        full: function ( page, pages ) {
            return [  'first', 'previous', 'next', 'last' ];
        },

        numbers: function ( page, pages ) {
            return [ _numbers(page, pages) ];
        },

        simple_numbers: function ( page, pages ) {
            return [ 'previous', _numbers(page, pages), 'next' ];
        },

        full_numbers: function ( page, pages ) {
            return [ 'first', 'previous', _numbers(page, pages), 'next', 'last' ];
        },

        // For testing and plug-ins to use
        _numbers: _numbers,

        // Number of number buttons (including ellipsis) to show. _Must be odd!_
        numbers_length: 7
    } );


    $.extend( true, DataTable.ext.renderer, {
        pageButton: {
            _: function ( settings, host, idx, buttons, page, pages ) {
                var classes = settings.oClasses;
                var lang = settings.oLanguage.oPaginate;
                var aria = settings.oLanguage.oAria.paginate || {};
                var btnDisplay, btnClass, counter=0;

                var attach = function( container, buttons ) {
                    var i, ien, node, button;
                    var clickHandler = function ( e ) {
                        _fnPageChange( settings, e.data.action, true );
                    };

                    for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
                        button = buttons[i];

                        if ( $.isArray( button ) ) {
                            var inner = $( '<'+(button.DT_el || 'div')+'/>' )
                                .appendTo( container );
                            attach( inner, button );
                        }
                        else {
                            btnDisplay = null;
                            btnClass = '';

                            switch ( button ) {
                                case 'ellipsis':
                                    container.append('<span class="ellipsis">&#x2026;</span>');
                                    break;

                                case 'first':
                                    btnDisplay = lang.sFirst;
                                    btnClass = button + (page > 0 ?
                                        '' : ' '+classes.sPageButtonDisabled);
                                    break;

                                case 'previous':
                                    btnDisplay = lang.sPrevious;
                                    btnClass = button + (page > 0 ?
                                        '' : ' '+classes.sPageButtonDisabled);
                                    break;

                                case 'next':
                                    btnDisplay = lang.sNext;
                                    btnClass = button + (page < pages-1 ?
                                        '' : ' '+classes.sPageButtonDisabled);
                                    break;

                                case 'last':
                                    btnDisplay = lang.sLast;
                                    btnClass = button + (page < pages-1 ?
                                        '' : ' '+classes.sPageButtonDisabled);
                                    break;

                                default:
                                    btnDisplay = button + 1;
                                    btnClass = page === button ?
                                        classes.sPageButtonActive : '';
                                    break;
                            }

                            if ( btnDisplay !== null ) {
                                node = $('<a>', {
                                    'class': classes.sPageButton+' '+btnClass,
                                    'aria-controls': settings.sTableId,
                                    'aria-label': aria[ button ],
                                    'data-dt-idx': counter,
                                    'tabindex': settings.iTabIndex,
                                    'id': idx === 0 && typeof button === 'string' ?
                                    settings.sTableId +'_'+ button :
                                        null
                                } )
                                    .html( btnDisplay )
                                    .appendTo( container );

                                _fnBindAction(
                                    node, {action: button}, clickHandler
                                );

                                counter++;
                            }
                        }
                    }
                };

                // IE9 throws an 'unknown error' if document.activeElement is used
                // inside an iframe or frame. Try / catch the error. Not good for
                // accessibility, but neither are frames.
                var activeEl;

                try {
                    // Because this approach is destroying and recreating the paging
                    // elements, focus is lost on the select button which is bad for
                    // accessibility. So we want to restore focus once the draw has
                    // completed
                    activeEl = $(host).find(document.activeElement).data('dt-idx');
                }
                catch (e) {}

                attach( $(host).empty(), buttons );

                if ( activeEl ) {
                    $(host).find( '[data-dt-idx='+activeEl+']' ).focus();
                }
            }
        }
    } );



    // Built in type detection. See model.ext.aTypes for information about
    // what is required from this methods.
    $.extend( DataTable.ext.type.detect, [
        // Plain numbers - first since V8 detects some plain numbers as dates
        // e.g. Date.parse('55') (but not all, e.g. Date.parse('22')...).
        function ( d, settings )
        {
            var decimal = settings.oLanguage.sDecimal;
            return _isNumber( d, decimal ) ? 'num'+decimal : null;
        },

        // Dates (only those recognised by the browser's Date.parse)
        function ( d, settings )
        {
            // V8 will remove any unknown characters at the start and end of the
            // expression, leading to false matches such as `$245.12` or `10%` being
            // a valid date. See forum thread 18941 for detail.
            if ( d && !(d instanceof Date) && ( ! _re_date_start.test(d) || ! _re_date_end.test(d) ) ) {
                return null;
            }
            var parsed = Date.parse(d);
            return (parsed !== null && !isNaN(parsed)) || _empty(d) ? 'date' : null;
        },

        // Formatted numbers
        function ( d, settings )
        {
            var decimal = settings.oLanguage.sDecimal;
            return _isNumber( d, decimal, true ) ? 'num-fmt'+decimal : null;
        },

        // HTML numeric
        function ( d, settings )
        {
            var decimal = settings.oLanguage.sDecimal;
            return _htmlNumeric( d, decimal ) ? 'html-num'+decimal : null;
        },

        // HTML numeric, formatted
        function ( d, settings )
        {
            var decimal = settings.oLanguage.sDecimal;
            return _htmlNumeric( d, decimal, true ) ? 'html-num-fmt'+decimal : null;
        },

        // HTML (this is strict checking - there must be html)
        function ( d, settings )
        {
            return _empty( d ) || (typeof d === 'string' && d.indexOf('<') !== -1) ?
                'html' : null;
        }
    ] );



    // Filter formatting functions. See model.ext.ofnSearch for information about
    // what is required from these methods.
    // 
    // Note that additional search methods are added for the html numbers and
    // html formatted numbers by `_addNumericSort()` when we know what the decimal
    // place is


    $.extend( DataTable.ext.type.search, {
        html: function ( data ) {
            return _empty(data) ?
                data :
                typeof data === 'string' ?
                    data
                        .replace( _re_new_lines, " " )
                        .replace( _re_html, "" ) :
                    '';
        },

        string: function ( data ) {
            return _empty(data) ?
                data :
                typeof data === 'string' ?
                    data.replace( _re_new_lines, " " ) :
                    data;
        }
    } );



    var __numericReplace = function ( d, decimalPlace, re1, re2 ) {
        if ( d !== 0 && (!d || d === '-') ) {
            return -Infinity;
        }

        // If a decimal place other than `.` is used, it needs to be given to the
        // function so we can detect it and replace with a `.` which is the only
        // decimal place Javascript recognises - it is not locale aware.
        if ( decimalPlace ) {
            d = _numToDecimal( d, decimalPlace );
        }

        if ( d.replace ) {
            if ( re1 ) {
                d = d.replace( re1, '' );
            }

            if ( re2 ) {
                d = d.replace( re2, '' );
            }
        }

        return d * 1;
    };


    // Add the numeric 'deformatting' functions for sorting and search. This is done
    // in a function to provide an easy ability for the language options to add
    // additional methods if a non-period decimal place is used.
    function _addNumericSort ( decimalPlace ) {
        $.each(
            {
                // Plain numbers
                "num": function ( d ) {
                    return __numericReplace( d, decimalPlace );
                },

                // Formatted numbers
                "num-fmt": function ( d ) {
                    return __numericReplace( d, decimalPlace, _re_formatted_numeric );
                },

                // HTML numeric
                "html-num": function ( d ) {
                    return __numericReplace( d, decimalPlace, _re_html );
                },

                // HTML numeric, formatted
                "html-num-fmt": function ( d ) {
                    return __numericReplace( d, decimalPlace, _re_html, _re_formatted_numeric );
                }
            },
            function ( key, fn ) {
                // Add the ordering method
                _ext.type.order[ key+decimalPlace+'-pre' ] = fn;

                // For HTML types add a search formatter that will strip the HTML
                if ( key.match(/^html\-/) ) {
                    _ext.type.search[ key+decimalPlace ] = _ext.type.search.html;
                }
            }
        );
    }


    // Default sort methods
    $.extend( _ext.type.order, {
        // Dates
        "date-pre": function ( d ) {
            return Date.parse( d ) || 0;
        },

        // html
        "html-pre": function ( a ) {
            return _empty(a) ?
                '' :
                a.replace ?
                    a.replace( /<.*?>/g, "" ).toLowerCase() :
                a+'';
        },

        // string
        "string-pre": function ( a ) {
            // This is a little complex, but faster than always calling toString,
            // http://jsperf.com/tostring-v-check
            return _empty(a) ?
                '' :
                typeof a === 'string' ?
                    a.toLowerCase() :
                    ! a.toString ?
                        '' :
                        a.toString();
        },

        // string-asc and -desc are retained only for compatibility with the old
        // sort methods
        "string-asc": function ( x, y ) {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        },

        "string-desc": function ( x, y ) {
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
        }
    } );


    // Numeric sorting types - order doesn't matter here
    _addNumericSort( '' );


    $.extend( true, DataTable.ext.renderer, {
        header: {
            _: function ( settings, cell, column, classes ) {
                // No additional mark-up required
                // Attach a sort listener to update on sort - note that using the
                // `DT` namespace will allow the event to be removed automatically
                // on destroy, while the `dt` namespaced event is the one we are
                // listening for
                $(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
                    if ( settings !== ctx ) { // need to check this this is the host
                        return;               // table, not a nested one
                    }

                    var colIdx = column.idx;

                    cell
                        .removeClass(
                        column.sSortingClass +' '+
                        classes.sSortAsc +' '+
                        classes.sSortDesc
                    )
                        .addClass( columns[ colIdx ] == 'asc' ?
                            classes.sSortAsc : columns[ colIdx ] == 'desc' ?
                            classes.sSortDesc :
                            column.sSortingClass
                    );
                } );
            },

            jqueryui: function ( settings, cell, column, classes ) {
                $('<div/>')
                    .addClass( classes.sSortJUIWrapper )
                    .append( cell.contents() )
                    .append( $('<span/>')
                        .addClass( classes.sSortIcon+' '+column.sSortingClassJUI )
                )
                    .appendTo( cell );

                // Attach a sort listener to update on sort
                $(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
                    if ( settings !== ctx ) {
                        return;
                    }

                    var colIdx = column.idx;

                    cell
                        .removeClass( classes.sSortAsc +" "+classes.sSortDesc )
                        .addClass( columns[ colIdx ] == 'asc' ?
                            classes.sSortAsc : columns[ colIdx ] == 'desc' ?
                            classes.sSortDesc :
                            column.sSortingClass
                    );

                    cell
                        .find( 'span.'+classes.sSortIcon )
                        .removeClass(
                        classes.sSortJUIAsc +" "+
                        classes.sSortJUIDesc +" "+
                        classes.sSortJUI +" "+
                        classes.sSortJUIAscAllowed +" "+
                        classes.sSortJUIDescAllowed
                    )
                        .addClass( columns[ colIdx ] == 'asc' ?
                            classes.sSortJUIAsc : columns[ colIdx ] == 'desc' ?
                            classes.sSortJUIDesc :
                            column.sSortingClassJUI
                    );
                } );
            }
        }
    } );

    /*
     * Public helper functions. These aren't used internally by DataTables, or
     * called by any of the options passed into DataTables, but they can be used
     * externally by developers working with DataTables. They are helper functions
     * to make working with DataTables a little bit easier.
     */

    var __htmlEscapeEntities = function ( d ) {
        return typeof d === 'string' ?
            d.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') :
            d;
    };

    /**
     * Helpers for `columns.render`.
     *
     * The options defined here can be used with the `columns.render` initialisation
     * option to provide a display renderer. The following functions are defined:
     *
     * * `number` - Will format numeric data (defined by `columns.data`) for
     *   display, retaining the original unformatted data for sorting and filtering.
     *   It takes 5 parameters:
     *   * `string` - Thousands grouping separator
     *   * `string` - Decimal point indicator
     *   * `integer` - Number of decimal points to show
     *   * `string` (optional) - Prefix.
     *   * `string` (optional) - Postfix (/suffix).
     * * `text` - Escape HTML to help prevent XSS attacks. It has no optional
     *   parameters.
     *
     * @example
     *   // Column definition using the number renderer
     *   {
	 *     data: "salary",
	 *     render: $.fn.dataTable.render.number( '\'', '.', 0, '$' )
	 *   }
     *
     * @namespace
     */
    DataTable.render = {
        number: function ( thousands, decimal, precision, prefix, postfix ) {
            return {
                display: function ( d ) {
                    if ( typeof d !== 'number' && typeof d !== 'string' ) {
                        return d;
                    }

                    var negative = d < 0 ? '-' : '';
                    var flo = parseFloat( d );

                    // If NaN then there isn't much formatting that we can do - just
                    // return immediately, escaping any HTML (this was supposed to
                    // be a number after all)
                    if ( isNaN( flo ) ) {
                        return __htmlEscapeEntities( d );
                    }

                    d = Math.abs( flo );

                    var intPart = parseInt( d, 10 );
                    var floatPart = precision ?
                    decimal+(d - intPart).toFixed( precision ).substring( 2 ):
                        '';

                    return negative + (prefix||'') +
                        intPart.toString().replace(
                            /\B(?=(\d{3})+(?!\d))/g, thousands
                        ) +
                        floatPart +
                        (postfix||'');
                }
            };
        },

        text: function () {
            return {
                display: __htmlEscapeEntities
            };
        }
    };


    /*
     * This is really a good bit rubbish this method of exposing the internal methods
     * publicly... - To be fixed in 2.0 using methods on the prototype
     */


    /**
     * Create a wrapper function for exporting an internal functions to an external API.
     *  @param {string} fn API function name
     *  @returns {function} wrapped function
     *  @memberof DataTable#internal
     */
    function _fnExternApiFunc (fn)
    {
        return function() {
            var args = [_fnSettingsFromNode( this[DataTable.ext.iApiIndex] )].concat(
                Array.prototype.slice.call(arguments)
            );
            return DataTable.ext.internal[fn].apply( this, args );
        };
    }


    /**
     * Reference to internal functions for use by plug-in developers. Note that
     * these methods are references to internal functions and are considered to be
     * private. If you use these methods, be aware that they are liable to change
     * between versions.
     *  @namespace
     */
    $.extend( DataTable.ext.internal, {
        _fnExternApiFunc: _fnExternApiFunc,
        _fnBuildAjax: _fnBuildAjax,
        _fnAjaxUpdate: _fnAjaxUpdate,
        _fnAjaxParameters: _fnAjaxParameters,
        _fnAjaxUpdateDraw: _fnAjaxUpdateDraw,
        _fnAjaxDataSrc: _fnAjaxDataSrc,
        _fnAddColumn: _fnAddColumn,
        _fnColumnOptions: _fnColumnOptions,
        _fnAdjustColumnSizing: _fnAdjustColumnSizing,
        _fnVisibleToColumnIndex: _fnVisibleToColumnIndex,
        _fnColumnIndexToVisible: _fnColumnIndexToVisible,
        _fnVisbleColumns: _fnVisbleColumns,
        _fnGetColumns: _fnGetColumns,
        _fnColumnTypes: _fnColumnTypes,
        _fnApplyColumnDefs: _fnApplyColumnDefs,
        _fnHungarianMap: _fnHungarianMap,
        _fnCamelToHungarian: _fnCamelToHungarian,
        _fnLanguageCompat: _fnLanguageCompat,
        _fnBrowserDetect: _fnBrowserDetect,
        _fnAddData: _fnAddData,
        _fnAddTr: _fnAddTr,
        _fnNodeToDataIndex: _fnNodeToDataIndex,
        _fnNodeToColumnIndex: _fnNodeToColumnIndex,
        _fnGetCellData: _fnGetCellData,
        _fnSetCellData: _fnSetCellData,
        _fnSplitObjNotation: _fnSplitObjNotation,
        _fnGetObjectDataFn: _fnGetObjectDataFn,
        _fnSetObjectDataFn: _fnSetObjectDataFn,
        _fnGetDataMaster: _fnGetDataMaster,
        _fnClearTable: _fnClearTable,
        _fnDeleteIndex: _fnDeleteIndex,
        _fnInvalidate: _fnInvalidate,
        _fnGetRowElements: _fnGetRowElements,
        _fnCreateTr: _fnCreateTr,
        _fnBuildHead: _fnBuildHead,
        _fnDrawHead: _fnDrawHead,
        _fnDraw: _fnDraw,
        _fnReDraw: _fnReDraw,
        _fnAddOptionsHtml: _fnAddOptionsHtml,
        _fnDetectHeader: _fnDetectHeader,
        _fnGetUniqueThs: _fnGetUniqueThs,
        _fnFeatureHtmlFilter: _fnFeatureHtmlFilter,
        _fnFilterComplete: _fnFilterComplete,
        _fnFilterCustom: _fnFilterCustom,
        _fnFilterColumn: _fnFilterColumn,
        _fnFilter: _fnFilter,
        _fnFilterCreateSearch: _fnFilterCreateSearch,
        _fnEscapeRegex: _fnEscapeRegex,
        _fnFilterData: _fnFilterData,
        _fnFeatureHtmlInfo: _fnFeatureHtmlInfo,
        _fnUpdateInfo: _fnUpdateInfo,
        _fnInfoMacros: _fnInfoMacros,
        _fnInitialise: _fnInitialise,
        _fnInitComplete: _fnInitComplete,
        _fnLengthChange: _fnLengthChange,
        _fnFeatureHtmlLength: _fnFeatureHtmlLength,
        _fnFeatureHtmlPaginate: _fnFeatureHtmlPaginate,
        _fnPageChange: _fnPageChange,
        _fnFeatureHtmlProcessing: _fnFeatureHtmlProcessing,
        _fnProcessingDisplay: _fnProcessingDisplay,
        _fnFeatureHtmlTable: _fnFeatureHtmlTable,
        _fnScrollDraw: _fnScrollDraw,
        _fnApplyToChildren: _fnApplyToChildren,
        _fnCalculateColumnWidths: _fnCalculateColumnWidths,
        _fnThrottle: _fnThrottle,
        _fnConvertToWidth: _fnConvertToWidth,
        _fnGetWidestNode: _fnGetWidestNode,
        _fnGetMaxLenString: _fnGetMaxLenString,
        _fnStringToCss: _fnStringToCss,
        _fnSortFlatten: _fnSortFlatten,
        _fnSort: _fnSort,
        _fnSortAria: _fnSortAria,
        _fnSortListener: _fnSortListener,
        _fnSortAttachListener: _fnSortAttachListener,
        _fnSortingClasses: _fnSortingClasses,
        _fnSortData: _fnSortData,
        _fnSaveState: _fnSaveState,
        _fnLoadState: _fnLoadState,
        _fnSettingsFromNode: _fnSettingsFromNode,
        _fnLog: _fnLog,
        _fnMap: _fnMap,
        _fnBindAction: _fnBindAction,
        _fnCallbackReg: _fnCallbackReg,
        _fnCallbackFire: _fnCallbackFire,
        _fnLengthOverflow: _fnLengthOverflow,
        _fnRenderer: _fnRenderer,
        _fnDataSource: _fnDataSource,
        _fnRowAttributes: _fnRowAttributes,
        _fnCalculateEnd: function () {} // Used by a lot of plug-ins, but redundant
                                        // in 1.10, so this dead-end function is
                                        // added to prevent errors
    } );


    // jQuery access
    $.fn.dataTable = DataTable;

    // Provide access to the host jQuery object (circular reference)
    DataTable.$ = $;

    // Legacy aliases
    $.fn.dataTableSettings = DataTable.settings;
    $.fn.dataTableExt = DataTable.ext;

    // With a capital `D` we return a DataTables API instance rather than a
    // jQuery object
    $.fn.DataTable = function ( opts ) {
        return $(this).dataTable( opts ).api();
    };

    // All properties that are available to $.fn.dataTable should also be
    // available on $.fn.DataTable
    $.each( DataTable, function ( prop, val ) {
        $.fn.DataTable[ prop ] = val;
    } );


    // Information about events fired by DataTables - for documentation.
    /**
     * Draw event, fired whenever the table is redrawn on the page, at the same
     * point as fnDrawCallback. This may be useful for binding events or
     * performing calculations when the table is altered at all.
     *  @name DataTable#draw.dt
     *  @event
     *  @param {event} e jQuery event object
     *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
     */

    /**
     * Search event, fired when the searching applied to the table (using the
     * built-in global search, or column filters) is altered.
     *  @name DataTable#search.dt
     *  @event
     *  @param {event} e jQuery event object
     *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
     */

    /**
     * Page change event, fired when the paging of the table is altered.
     *  @name DataTable#page.dt
     *  @event
     *  @param {event} e jQuery event object
     *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
     */

    /**
     * Order event, fired when the ordering applied to the table is altered.
     *  @name DataTable#order.dt
     *  @event
     *  @param {event} e jQuery event object
     *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
     */

    /**
     * DataTables initialisation complete event, fired when the table is fully
     * drawn, including Ajax data loaded, if Ajax data is required.
     *  @name DataTable#init.dt
     *  @event
     *  @param {event} e jQuery event object
     *  @param {object} oSettings DataTables settings object
     *  @param {object} json The JSON object request from the server - only
     *    present if client-side Ajax sourced data is used</li></ol>
     */

    /**
     * State save event, fired when the table has changed state a new state save
     * is required. This event allows modification of the state saving object
     * prior to actually doing the save, including addition or other state
     * properties (for plug-ins) or modification of a DataTables core property.
     *  @name DataTable#stateSaveParams.dt
     *  @event
     *  @param {event} e jQuery event object
     *  @param {object} oSettings DataTables settings object
     *  @param {object} json The state information to be saved
     */

    /**
     * State load event, fired when the table is loading state from the stored
     * data, but prior to the settings object being modified by the saved state
     * - allowing modification of the saved state is required or loading of
     * state for a plug-in.
     *  @name DataTable#stateLoadParams.dt
     *  @event
     *  @param {event} e jQuery event object
     *  @param {object} oSettings DataTables settings object
     *  @param {object} json The saved state information
     */

    /**
     * State loaded event, fired when state has been loaded from stored data and
     * the settings object has been modified by the loaded data.
     *  @name DataTable#stateLoaded.dt
     *  @event
     *  @param {event} e jQuery event object
     *  @param {object} oSettings DataTables settings object
     *  @param {object} json The saved state information
     */

    /**
     * Processing event, fired when DataTables is doing some kind of processing
     * (be it, order, searcg or anything else). It can be used to indicate to
     * the end user that there is something happening, or that something has
     * finished.
     *  @name DataTable#processing.dt
     *  @event
     *  @param {event} e jQuery event object
     *  @param {object} oSettings DataTables settings object
     *  @param {boolean} bShow Flag for if DataTables is doing processing or not
     */

    /**
     * Ajax (XHR) event, fired whenever an Ajax request is completed from a
     * request to made to the server for new data. This event is called before
     * DataTables processed the returned data, so it can also be used to pre-
     * process the data returned from the server, if needed.
     *
     * Note that this trigger is called in `fnServerData`, if you override
     * `fnServerData` and which to use this event, you need to trigger it in you
     * success function.
     *  @name DataTable#xhr.dt
     *  @event
     *  @param {event} e jQuery event object
     *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
     *  @param {object} json JSON returned from the server
     *
     *  @example
     *     // Use a custom property returned from the server in another DOM element
     *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       $('#status').html( json.status );
	 *     } );
     *
     *  @example
     *     // Pre-process the data returned from the server
     *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       for ( var i=0, ien=json.aaData.length ; i<ien ; i++ ) {
	 *         json.aaData[i].sum = json.aaData[i].one + json.aaData[i].two;
	 *       }
	 *       // Note no return - manipulate the data directly in the JSON object.
	 *     } );
     */

    /**
     * Destroy event, fired when the DataTable is destroyed by calling fnDestroy
     * or passing the bDestroy:true parameter in the initialisation object. This
     * can be used to remove bound events, added DOM nodes, etc.
     *  @name DataTable#destroy.dt
     *  @event
     *  @param {event} e jQuery event object
     *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
     */

    /**
     * Page length change event, fired when number of records to show on each
     * page (the length) is changed.
     *  @name DataTable#length.dt
     *  @event
     *  @param {event} e jQuery event object
     *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
     *  @param {integer} len New length
     */

    /**
     * Column sizing has changed.
     *  @name DataTable#column-sizing.dt
     *  @event
     *  @param {event} e jQuery event object
     *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
     */

    /**
     * Column visibility has changed.
     *  @name DataTable#column-visibility.dt
     *  @event
     *  @param {event} e jQuery event object
     *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
     *  @param {int} column Column index
     *  @param {bool} vis `false` if column now hidden, or `true` if visible
     */

    return $.fn.dataTable;
}));
/*!
 DataTables Bootstrap 3 integration
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function(b){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(a){return b(a,window,document)}):"object"===typeof exports?module.exports=function(a,d){a||(a=window);if(!d||!d.fn.dataTable)d=require("datatables.net")(a,d).$;return b(d,a,a.document)}:b(jQuery,window,document)})(function(b,a,d){var f=b.fn.dataTable;b.extend(!0,f.defaults,{dom:"<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",renderer:"bootstrap"});b.extend(f.ext.classes,
{sWrapper:"dataTables_wrapper form-inline dt-bootstrap",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm",sProcessing:"dataTables_processing panel panel-default"});f.ext.renderer.pageButton.bootstrap=function(a,h,r,m,j,n){var o=new f.Api(a),s=a.oClasses,k=a.oLanguage.oPaginate,t=a.oLanguage.oAria.paginate||{},e,g,p=0,q=function(d,f){var l,h,i,c,m=function(a){a.preventDefault();!b(a.currentTarget).hasClass("disabled")&&o.page()!=a.data.action&&o.page(a.data.action).draw("page")};
l=0;for(h=f.length;l<h;l++)if(c=f[l],b.isArray(c))q(d,c);else{g=e="";switch(c){case "ellipsis":e="&#x2026;";g="disabled";break;case "first":e=k.sFirst;g=c+(0<j?"":" disabled");break;case "previous":e=k.sPrevious;g=c+(0<j?"":" disabled");break;case "next":e=k.sNext;g=c+(j<n-1?"":" disabled");break;case "last":e=k.sLast;g=c+(j<n-1?"":" disabled");break;default:e=c+1,g=j===c?"active":""}e&&(i=b("<li>",{"class":s.sPageButton+" "+g,id:0===r&&"string"===typeof c?a.sTableId+"_"+c:null}).append(b("<a>",{href:"#",
"aria-controls":a.sTableId,"aria-label":t[c],"data-dt-idx":p,tabindex:a.iTabIndex}).html(e)).appendTo(d),a.oApi._fnBindAction(i,{action:c},m),p++)}},i;try{i=b(h).find(d.activeElement).data("dt-idx")}catch(u){}q(b(h).empty().html('<ul class="pagination"/>').children("ul"),m);i&&b(h).find("[data-dt-idx="+i+"]").focus()};return f});

$(function () {
    $('#datetimepicker1').datetimepicker({
        format: 'DD/MM/YYYY'
    });


    /* flash message */
    $(".alert").fadeTo(2000, 500).fadeOut(500, function(){
        $(".alert").alert('close');
    });


    /* Jquery DataTables */
    $('.datatable').DataTable({
        processing: true,
        serverSide: true,
        ajax: $(this).data('url')
    });


});




//# sourceMappingURL=normalize.js.map
