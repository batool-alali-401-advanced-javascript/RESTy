(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{11:function(e,t,a){e.exports=a(24)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),o=a.n(r),c=(a(16),a(1)),s=a(2),i=a(4),u=a(3),m=a(5),h=a.n(m),d=a(8),p=(a(18),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target.value;console.log(t),console.log(n.state.url),n.setState({url:t})},n.handleClickGo=function(){var e=Object(d.a)(h.a.mark((function e(t){var a,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log("method",n.state.method),"get"!==n.state.method){e.next=12;break}return e.next=5,fetch(n.state.url);case 5:return a=e.sent,e.next=8,a.json();case 8:l=e.sent,n.props.handler(l),e.next=13;break;case 12:n.props.handler("Error");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),n.handleClickGet=function(e){n.setState({method:"get"})},n.handleClickPost=function(e){n.setState({method:"post"})},n.handleClickPut=function(e){n.setState({method:"put"})},n.handleClickDelete=function(e){n.setState({method:"delete"})},n.state={url:"",method:"get",full:{}},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("main",{className:"mainForm"},l.a.createElement("div",{className:"form"},l.a.createElement("label",{className:"urlLabel"},"URL:"),l.a.createElement("input",{type:"text",className:"urlInput",onChange:this.handleChange}),l.a.createElement("button",{className:"method",id:"go",onClick:this.handleClickGo},"Go!"),l.a.createElement("br",null),l.a.createElement("button",{className:"method",id:"get",onClick:this.handleClickGet},"GET"),l.a.createElement("button",{className:"method",id:"post",onClick:this.handleClickPost},"POST"),l.a.createElement("button",{className:"method",id:"put",onClick:this.handleClickPut},"PUT"),l.a.createElement("button",{className:"method",id:"delete",onClick:this.handleClickDelete},"DELETE")))}}]),a}(l.a.Component));a(19);function f(){return l.a.createElement("div",{className:"headerDiv"},l.a.createElement("h1",{className:"title"},"RESTy"))}a(20);var E=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",{className:"copyRight"}," \xa9 2020 Code Fellow"))},b=a(9),k=a.n(b),v=a(10),C=a.n(v);function g(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Results: "),l.a.createElement("span",null,l.a.createElement(k.a,{data:e.data,theme:C.a})))}var j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleForm=function(e){n.setState({obj:{Header:{Content_Type:"application/json"},Response:{results:e}}})},n.state={obj:{Header:{},Response:{results:[]}}},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement(p,{handler:this.handleForm}),l.a.createElement(g,{data:this.state.obj}),l.a.createElement(E,null))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.08cf5e58.chunk.js.map