(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{37:function(e,t,a){e.exports=a(82)},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},68:function(e,t,a){},71:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),s=a.n(c),l=a(5),u=a.n(l),i=a(8),o=a(9),p=a(13),m=a(10),f=a(31),E=a.n(f).a.create({baseURL:"https://api-scripts.herokuapp.com/"});a(59),a(60),a(61),a(62),a(63);var d=function(){return r.a.createElement("nav",{className:"menu"},r.a.createElement(p.b,{to:"/scripts",className:"menu-option"},"Listar Scripts"),r.a.createElement(p.b,{to:"/new",className:"menu-option"},"Cadastrar Scripts"))},b=(a(68),a(34)),h=a(35);a(71);var v=function(e){var t=e.script;function a(){return(a=Object(i.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,E.delete("/scripts/".concat(t._id));case 3:n=e.sent,alert(n.data.message);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("tr",null,r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.author),r.a.createElement("td",{className:"option"},r.a.createElement("button",{onClick:function(e){return a.apply(this,arguments)}},r.a.createElement(b.a,{icon:h.a}))))};var O=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/scripts");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"content-box"},r.a.createElement("span",{id:"title"},"Lista de scripts"),r.a.createElement("div",{className:"script-box"},r.a.createElement("input",{placeholder:"Pesquisar scripts"}),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nome script"),r.a.createElement("th",null,"Nome autor"),r.a.createElement("th",null,"Deletar")),a.map((function(e){return r.a.createElement(v,{script:e})})))))},j=a(36),g=a.n(j);a(80);var N=function(){a(81);var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],l=Object(n.useState)(""),p=Object(o.a)(l,2),m=p[0],f=p[1],d=Object(n.useState)(""),b=Object(o.a)(d,2),h=b[0],v=b[1];function O(){return(O=Object(i.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={name:m,content:c,author:h},e.next=4,E.post("/scripts",a);case 4:n=e.sent,alert(JSON.stringify(n));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{id:"title"},"Cadastro de Scripts"),r.a.createElement("div",{className:"code-editor"},r.a.createElement("div",{className:"input-block"},r.a.createElement("input",{placeholder:"Nome do script",onChange:function(e){return f(e.target.value)}}),r.a.createElement("input",{placeholder:"Autor do script",onChange:function(e){return v(e.target.value)}})),r.a.createElement(g.a,{options:{lineNumbers:!0,mode:"text/x-mssql"},onChange:function(e){s(e)}}),r.a.createElement("button",{onClick:function(e){return O.apply(this,arguments)},className:"button-register"},"Salvar script")))};var x=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/");case 2:t=e.sent,c(t.data.message);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),a||c("Failed to connect to API-Scripts")}),[]),r.a.createElement("div",{id:"app"},r.a.createElement(p.a,null,r.a.createElement("aside",null,r.a.createElement(p.b,{to:"/",class:"title"},r.a.createElement("strong",null,"API-Scripts")),r.a.createElement(d,null)),r.a.createElement("main",null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/scripts"},r.a.createElement(O,null)),r.a.createElement(m.a,{path:"/new"},r.a.createElement(N,null))))))};s.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.0a0583e2.chunk.js.map