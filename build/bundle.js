!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){var s;!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";var s=n(2);t.a=function(e){var t;e._svenjs.rootNode&&(t=e._svenjs.rootNode),e.hasOwnProperty("attrs")&&e.attrs.hasOwnProperty("sjxid")&&(t||(t=document.querySelector("[sjxid='"+e.attrs.sjxid+"']"))),e.isMounted&&(Object(s.render)(e,t),e.hasOwnProperty("_didUpdate")&&e._didUpdate.apply(e))}},function(e,t,n){t.version=n(11).version},function(e,t,n){"use strict";function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=n(12),i=r.isFunction,o=r.isObject,a=(r.isString,r.isArray),l=function(e,t){return t.appendChild(e)},c=Object.prototype.hasOwnProperty,d=function(e,t){if(c.call(e,"children")&&a(e.children)&&e.children.forEach(function(e){"string"!=typeof e&&"number"!=typeof e||t.appendChild(document.createTextNode(e))}),c.call(e,"attrs")){var n=e.attrs;for(var s in n)if("config"!==s&&"key"!==s&&("disabled"!==s||!1!==n[s]))if("class"==s||"className"==s)t.className=n[s].toString();else if(i(n[s])&&"on"==s.slice(0,2))t[s.toLowerCase()]=n[s];else{if("checked"===s&&(!1===n[s]||""===n[s]))continue;try{t.setAttribute(""+s,n[s].toString())}catch(e){console.error("e",e)}}}return t},u=function(e){void 0===e.tag&&(e.tag="span",e.attrs={sjxid:Math.floor(Math.random()*(new Date).getTime())});var t=document.createElement(e.tag);return d(e,t),t};t.renderToString=function(e,t){return f(e,t).innerHTML};var f=function(e,t){var n=document.createDocumentFragment(),r=document.createElement(e.tag);d(e,t.rootNode);var i=function e(t,n){var r;return c.call(t,"children")?a(t.children)&&t.children.forEach(function(t,i){null!==t&&"object"===s(t)&&(r=u(t),e(t,r),l(r,n)),a(t)&&(t.tag,t.forEach(function(t,s){c.call(t,"render")||(r=u(t),e(t,r),l(r,n))}))}):"object"===s(t)&&c.call(t,"render")&&e(t.render(),n),n}(e,r);return n.appendChild(i),n};t.render=function(e,t){var n,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t)return"Error: No node to attach";o(e)&&(c.call(e,"_svenjs")||(e._svenjs={rootNode:!1}),e._svenjs.rootNode=t),t.innerHTML="",n=o(s)?s:e.render(),t.appendChild(f(n,e._svenjs))}},function(e,t,n){"use strict";var s=n(5),r=n(6),i=n(0);t.a=function(e,t){t.state=function(e,t){var n=Object(s.deepCopy)(t);return Object(r.deepFreeze)(n),n}(0,e),Object(i.a)(t)}},function(e,t,n){"use strict";var s=n(1),r=n(3),i=n(0);t.a=function(e,t){return e._svenjs={rootNode:!1},e.props={},t&&(e._jsxid=e.props.sjxid,e.props=t,setTimeout(function(){return Object(i.a)(e)},0),delete e.props.sjxid),e.isBound||(e.version=s.version,e.isBound=!0,e.setState=function(e){return Object(r.a)(e,this)},"function"==typeof e._beforeMount&&e._beforeMount.apply(e)),e.isMounted||(e.time={history:[],pos:-1},e.isMounted=!0,void 0!==e.initialState&&(e.state=e.initialState),"function"==typeof e._didMount&&(e._didMount.apply(e),"function"==typeof i.a&&setTimeout(function(){return Object(i.a)(e)},100))),e}},function(e,t,n){"use strict";t.deepCopy=function(e){return JSON.parse(JSON.stringify(e))}},function(e,t,n){"use strict";function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=t.deepFreeze=function(e){return Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){!e.hasOwnProperty(t)||null===e[t]||"object"!==s(e[t])&&"function"!=typeof e[t]||Object.isFrozen(e[t])||r(e[t])}),e}},function(e,t){var n=[];t.createStore=function(e){return e.isMounted||(e.listenTo=function(e){n.push(e)},e.emit=function(e){n.forEach(function(t){t(e)})},"function"==typeof e.init&&e.init.apply(e)),e}},function(e,t,n){e.exports=n(9)},function(r,i,o){"use strict";o.r(i),function(r){var i=o(1),a=o(4),l=o(2),c=o(3),d=o(0),u=o(7);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}console.log("running svenjs version ".concat(i.version));var p={version:i.version,create:a.a,setState:c.a,createStore:u.createStore,render:l.render,renderToString:l.renderToString,lifeCycle:d.a};"object"===f(r)&&null!=r&&r.exports?r.exports=p:o(13)&&(void 0===(s=function(){return p}.call(t,n,t,e))||(e.exports=s))}.call(this,o(10)(r))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e){e.exports={name:"svenjs",version:"0.3.2",description:"Micro javascript framework for composable web apps",scripts:{test:"tape tests/*",_prebuild:"babel-cli src -d es5",build:"NODE_ENV=production webpack",postbuild:"cp assets/* npmbuild",watch:"sane 'npm run build' --glob='src/**/*.js'"},repository:{type:"git",url:"https://github.com/svenanders/svenjs.git"},main:"src/index.js",directories:{example:"example"},devDependencies:{"@babel/core":"^7.0.0-rc.1","@babel/preset-env":"^7.0.0-rc.1","@babel/preset-react":"^7.0.0-rc.1","babel-loader":"^8.0.0-beta.4",clone:"^2.1.2",eslint:"^5.4.0",glob:"~7.1.2",jsdom:"^12.0.0",jstransform:"^11.0.3","object-assign":"^4.0.1",rimraf:"^2.3.4","root-require":"^0.3.1",tape:"~4.9.1","uglify-js":"^3.4.7","webpack-cli":"^3.1.0",webpack:"^4.17.0","webpack-dev-server":"^3.1.5","webpack-serve":"^2.0.2"},author:"",license:"ISC",dependencies:{svenjsx:"^0.3.1","svenjsx-loader":"^0.3.1"}}},function(e,t,n){"use strict";var s={}.toString;t.isFunction=function(e){return"function"==typeof e},t.isObject=function(e){return"[object Object]"===s.call(e)},t.isString=function(e){return"[object String]"===s.call(e)},t.isArray=function(e){return"[object Array]"===s.call(e)},t.isDefined=function(e){return"undefined"!==s.call(e)}},function(e,t){(function(t){e.exports=t}).call(this,{})}])},function(e,t,n){e.exports=n(2)},function(e,t,n){const s=n(0),r=n(3),i=document.getElementById("myapp");s.render(r,i)},function(e,t,n){let s=!1,r=!1,i=0;let o=n(0).create({displayName:"TodoMVC App",initialState:{messages:[{id:1,message:"Answer all the mail",complete:!1,editing:!1},{id:2,message:"Get a cup of coffee",complete:!1,editing:!1}]},_didUpdate(){let e=document.getElementById("new-todo");null!==e&&r&&(r=!1,e.focus(),e.setSelectionRange(e.value.length,e.value.length))},_didMount(){var e=!0===self.history?self.getPath():window.location.hash.replace(/.*#\//,"");this.setState({messages:this.state.messages,url:e}),window.addEventListener("hashchange",this.onHashChange.bind(this),!1)},handleEditTodoKeyDown(e){27!==e.keyCode?13===e.keyCode&&(this.saveTodo(e),this.resetEditing(),e.preventDefault()):this.simpleResetEditing()},handleNewTodoKeyDown(e,t){13===t.keyCode&&(this.addTodo(t),t.innerHTML="",document.getElementById(e).focus(),t.preventDefault())},onHashChange(){var e=!0===self.history?self.getPath():window.location.hash.replace(/.*#\//,"");this.resetEditing(),this.setState({messages:this.state.messages,url:e})},saveTodo(e){let t=void 0===e.srcElement?e.target.value:e.srcElement.value,n=this.state.messages.filter(e=>(e.id===i&&(e.message=t),e));this.setState({messages:n,url:this.state.url})},addTodo(e){let t,n=function(e){return JSON.parse(JSON.stringify(e))}(this.state.messages),s=void 0===e.srcElement?e.target.value:e.srcElement.value;t=0===n.length?1:n[n.length-1].id,n.push({id:t+1,message:s,complete:!1,editing:!1}),this.setState({messages:n,url:this.state.url})},destroyMessage(e){let t=this.state.messages.filter(t=>t.id!==e.id);this.setState({messages:t})},destroyCompleted(){let e=this.state.messages.filter(e=>!1===e.complete);this.resetEditing(),this.setState({messages:e,url:this.state.url})},toggleOne(e,t){let n=this.state.messages.filter(t=>(t.id===e.id&&(t.complete=!t.complete),t));this.resetEditing(),this.setState({messages:n,url:this.state.url})},simpleResetEditing(){let e=this.state.messages.map(e=>(e.editing=!1,e));r=!1,this.setState({messages:e,url:this.state.url})},resetEditing(e){let t=!1,n=this.state.messages.map(e=>(e.editing&&(t=!0),e.editing=!1,e));t?(r=!0,this.setState({messages:n,url:this.state.url})):r=!1},onDoubleClick(e,t){if(i=e.id,!e.complete){let t=this.state.messages.map(t=>(t.editing=t.id===e.id&&!t.editing,t));this.setState({messages:t,url:this.state.url});let n=document.getElementsByClassName("edit active")[0];n.focus(),n.setSelectionRange(n.value.length,n.value.length)}},toggleAll(){s=!s;let e=this.state.messages.map(e=>(e.complete=s,e));this.resetEditing(),this.setState({messages:e})},listTodos(){return this.state.messages.filter(e=>{switch(this.state.url){case"active":return!e.complete;case"completed":return e.complete;default:return!0}},this).map(e=>{let t=e.message,n=!1,s="todo",r="edit";return e.editing&&(s="todo editing",r="edit active"),e.complete&&(t={tag:"del",attrs:{sjxid:"1503.0729399080194"},children:[e.message]},n=!0),{tag:"li",attrs:{sjxid:"254.0856304564012",className:s},children:[{tag:"div",attrs:{sjxid:"1313.676296504955",className:"view"},children:[{tag:"input",attrs:{sjxid:"469.88969716349646",className:"toggle",type:"checkbox",checked:n,onClick:this.toggleOne.bind(this,e)}},{tag:"label",attrs:{sjxid:"217.9042034779908",ondblclick:this.onDoubleClick.bind(this,e)},children:[t]},{tag:"button",attrs:{sjxid:"1155.273322416548",className:"destroy",onClick:this.destroyMessage.bind(this,e)}}]},{tag:"input",attrs:{sjxid:"1108.0717663753478",className:r,type:"text",onKeyDown:this.handleEditTodoKeyDown.bind(this),value:e.message}}]}})},render(){"use strict";this.state;let e="",t="",n="";return""!==this.state.url&&"all"!==this.state.url||(e="selected"),"active"===this.state.url&&(t="selected"),"completed"===this.state.url&&(n="selected"),{tag:"section",attrs:{sjxid:"1719.2867130810193",class:"todoapp"},children:[{tag:"header",attrs:{sjxid:"793.8427857943528",class:"header"},children:[{tag:"h1",attrs:{sjxid:"1325.0502635932846"},children:["todos"]},{tag:"input",attrs:{sjxid:"1736.6737351348145",className:"new-todo",id:"new-todo",onClick:this.resetEditing.bind(this),onKeyDown:this.handleNewTodoKeyDown.bind(this,"new-todo"),placeholder:"What needs to be done?",autofocus:!0}}]},{tag:"section",attrs:{sjxid:"353.17821398226636",className:"main"},children:[{tag:"input",attrs:{sjxid:"1338.5268188537477",className:"toggle-all",type:"checkbox",onClick:this.toggleAll.bind(this)}},{tag:"label",attrs:{sjxid:"1031.0363983803575",for:"toggle-all"},children:["Mark all as complete"]},{tag:"ul",attrs:{sjxid:"1462.386396626202",className:"todo-list"},children:[this.listTodos()]}]},{tag:"footer",attrs:{sjxid:"978.6138908206481",class:"footer"},children:[{tag:"span",attrs:{sjxid:"1244.2117016184047",class:"todo-count"},children:[this.state.messages.length,1===this.state.messages.length?" item":" items"," remaining"]},{tag:"ul",attrs:{sjxid:"1534.5933695803287",class:"filters"},children:[{tag:"li",attrs:{sjxid:"495.4866939188136"},children:[{tag:"a",attrs:{sjxid:"1555.2556948857537",href:"#/all",class:e},children:["All"]}]},{tag:"li",attrs:{sjxid:"1300.683529275182"},children:[{tag:"a",attrs:{sjxid:"251.62750038222325",href:"#/active",class:t},children:["Active"]}]},{tag:"li",attrs:{sjxid:"1618.0699773737329"},children:[{tag:"a",attrs:{sjxid:"1343.32418475212",href:"#/completed",class:n},children:["Completed"]}]}]},{tag:"button",attrs:{sjxid:"864.9202794577637",class:"clear-completed",onClick:this.destroyCompleted.bind(this)},children:["Clear completed"]}]}]}}});e.exports=o}]);