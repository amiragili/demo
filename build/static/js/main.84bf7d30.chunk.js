(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),o=a(3),s=a.n(o),c=(a(14),a(4)),r=a(5),u=a(7),l=a(6),m=a(1),h=a(8),d=(a(15),function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).handleChange=function(t){a.setState({cui:t.target.value})},a.submit=function(t){t.preventDefault();var e=a.state.cui,n="https://api.openapi.ro/api/companies/".concat(e);fetch(n,{headers:{"x-api-key":"wbZPxsx7fJnfqye3dKvURA9fgv8D-_vWE2ExqxHugbyBGS4HhA"}}).then((function(t){return t.json()})).then((function(t){a.setState({data:t})})).catch((function(t){console.log(t)}))},a.state={cui:"",data:""},a.submit=a.submit.bind(Object(m.a)(a)),a}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{style:{margin:40}},i.a.createElement("form",{onSubmit:this.submit},i.a.createElement("label",null,"CUI:",i.a.createElement("input",{type:"text",value:this.state.cui,maxLength:9,onChange:this.handleChange})),i.a.createElement("input",{type:"submit",value:"Submit"})),i.a.createElement("div",{style:{marginTop:50}},i.a.createElement("p",null,"Bussines name: ",this.state.data.denumire),i.a.createElement("p",null,"Cui: ",this.state.data.cif),i.a.createElement("p",null,"Address: ",this.state.data.adresa," "),i.a.createElement("p",null,"Status: ",this.state.data.stare)))}}]),e}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},9:function(t,e,a){t.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.84bf7d30.chunk.js.map