(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{38:function(e,t,a){e.exports=a(83)},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},69:function(e,t,a){},72:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),s=a(3),u=a.n(s),o=a(8),i=a(4),m=a(13),p=a(10),d=a(35),E=a.n(d).a.create({baseURL:"https://api-scripts.herokuapp.com/"});a(60),a(61),a(62),a(63),a(64);var f=function(){return c.a.createElement("nav",{className:"menu"},c.a.createElement(m.b,{to:"/scripts",className:"menu-option"},"Listar Scripts"),c.a.createElement(m.b,{to:"/new",className:"menu-option"},"Cadastrar Scripts"))},b=(a(69),a(14)),h=a(15);a(72);var v=function(e){var t=e.script,a=e.updateList,n=e.handleModal,r=e.handleSelectScript;function l(){return(l=Object(o.a)(u.a.mark((function e(n){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,E.delete("/scripts/".concat(t._id));case 3:c=e.sent,alert(c.data.message),a();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){var e={_id:t._id,name:t.name,content:t.content,author:t.author};r(e)}return c.a.createElement("tr",null,c.a.createElement("td",null,t.name),c.a.createElement("td",null,t.author),c.a.createElement("td",{className:"option"},c.a.createElement("button",{onClick:function(e){e.preventDefault(),s(),n(!1)}},c.a.createElement(b.a,{icon:h.b}))),c.a.createElement("td",{className:"option"},c.a.createElement("button",{onClick:function(e){e.preventDefault(),s(),n(!0)}},c.a.createElement(b.a,{icon:h.a}))),c.a.createElement("td",{className:"option"},c.a.createElement("button",{onClick:function(e){return l.apply(this,arguments)}},c.a.createElement(b.a,{icon:h.d}))))},O=a(16),j=a.n(O);a(81);var N=function(e){var t=e.show,r=e.isEdit,l=e.handleModal,s=e.script,m=e.updateList;a(34);var p=Object(n.useState)(""),d=Object(i.a)(p,2),f=d[0],v=d[1],O=Object(n.useState)(""),N=Object(i.a)(O,2),S=N[0],y=N[1],g=t?"modal display-block":"modal display-none",x=r?"button-register display-block":"button-register display-none",k={lineNumbers:!0,value:s.content,mode:"text/x-mssql",readOnly:!r};function w(){l(!1)}function C(){return(C=Object(o.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={name:S||s.name,content:f||s.content,author:s.author},e.next=4,E.post("/scripts/".concat(s._id),a);case 4:e.sent,m(),w();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c.a.createElement("div",{className:g},c.a.createElement("section",{className:"modal-main"},c.a.createElement("div",{className:"name-author"},c.a.createElement("div",{className:"name"},c.a.createElement("label",null,"Nome Script"),c.a.createElement("input",{type:"text",defaultValue:s.name,readOnly:!r,onChange:function(e){return y(e.target.value)}})),c.a.createElement("div",{className:"author"},c.a.createElement("label",null,"Autor Script"),c.a.createElement("input",{type:"text",value:s.author,readonly:!0}))),c.a.createElement("div",{className:"content"},c.a.createElement("label",null,"Conteudo Script"),c.a.createElement(j.a,{options:k,onChange:function(e){v(e)}}),c.a.createElement("button",{className:x,onClick:function(e){return C.apply(this,arguments)}},"Salvar script")),c.a.createElement("button",{className:"close-button",onClick:w},c.a.createElement(b.a,{icon:h.c}))))};var S=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),s=Object(i.a)(l,2),m=s[0],p=s[1],d=Object(n.useState)(!1),f=Object(i.a)(d,2),b=f[0],h=f[1],O=Object(n.useState)(!1),j=Object(i.a)(O,2),S=j[0],y=j[1];function g(e){h(!b),y(!!e)}function x(e){p(e)}function k(){return w.apply(this,arguments)}function w(){return(w=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/scripts");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){k()}),[]),c.a.createElement("div",{className:"content-box"},c.a.createElement(N,{script:m,show:b,isEdit:S,handleModal:g,updateList:k}),c.a.createElement("span",{id:"title"},"Lista de scripts"),c.a.createElement("div",{className:"script-box"},c.a.createElement("input",{placeholder:"Pesquisar scripts"}),c.a.createElement("table",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Nome script"),c.a.createElement("th",null,"Nome autor"),c.a.createElement("th",null,"Visualizar"),c.a.createElement("th",null,"Editar"),c.a.createElement("th",null,"Deletar")),a.map((function(e){return c.a.createElement(v,{handleModal:g,handleSelectScript:x,updateList:k,script:e})})))))};a(82);var y=function(){a(34);var e=Object(n.useState)(""),t=Object(i.a)(e,2),r=t[0],l=t[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),p=m[0],d=m[1],f=Object(n.useState)(""),b=Object(i.a)(f,2),h=b[0],v=b[1];function O(){return(O=Object(o.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={name:p,content:r,author:h},e.next=4,E.post("/scripts",a);case 4:n=e.sent,alert(JSON.stringify(n));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{id:"title"},"Cadastro de Scripts"),c.a.createElement("div",{className:"code-editor"},c.a.createElement("div",{className:"input-block"},c.a.createElement("input",{placeholder:"Nome do script",onChange:function(e){return d(e.target.value)}}),c.a.createElement("input",{placeholder:"Autor do script",onChange:function(e){return v(e.target.value)}})),c.a.createElement(j.a,{options:{lineNumbers:!0,mode:"text/x-mssql"},onChange:function(e){l(e)}}),c.a.createElement("button",{onClick:function(e){return O.apply(this,arguments)},className:"button-register"},"Salvar script")))};var g=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/");case 2:t=e.sent,r(t.data.message);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),a||r("Failed to connect to API-Scripts")}),[]),c.a.createElement("div",{id:"app"},c.a.createElement(m.a,null,c.a.createElement("aside",null,c.a.createElement(m.b,{to:"/",class:"title"},c.a.createElement("strong",null,"API-Scripts")),c.a.createElement(f,null)),c.a.createElement("main",null,c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"/scripts"},c.a.createElement(S,null)),c.a.createElement(p.a,{path:"/new"},c.a.createElement(y,null))))))};l.a.render(c.a.createElement(g,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.a005cbcf.chunk.js.map