(this.webpackJsonpcitas=this.webpackJsonpcitas||[]).push([[0],{11:function(e,a,t){e.exports=t(25)},16:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(8),r=t.n(c),i=(t(16),t(10)),o=t(2),m=t(5),s=t(6),u=t(9),h=t.n(u),p=function(e){var a=e.crearCita,t=Object(n.useState)({paciente:"",sexo:"",fecha:"",hora:"",sintomas:""}),c=Object(o.a)(t,2),r=c[0],i=c[1],u=Object(n.useState)(!1),p=Object(o.a)(u,2),E=p[0],d=p[1],f=function(e){i(Object(s.a)(Object(s.a)({},r),{},Object(m.a)({},e.target.name,e.target.value)))},b=r.paciente,g=r.sexo,v=r.fecha,N=r.hora,w=r.sintomas;return l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Crear cita"),E?l.a.createElement("p",{className:"alerta-error"},"Todos los campos deben ser llenados"):null,l.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""===b.trim()||""===g.trim()||""===v.trim()||""===N.trim()||""===w.trim())return console.log(E),d(!0),console.log(E),void console.log(r);d(!1),r.id=h()(),a(r),i({paciente:"",sexo:"",fecha:"",hora:"",sintomas:""})}},l.a.createElement("label",null,"Nombre del paciente"),l.a.createElement("input",{type:"text",name:"paciente",className:"u-full-width",placeholder:"Nombre paciente",onChange:f,value:b}),l.a.createElement("label",null,"Sexo del paciente"),l.a.createElement("input",{type:"text",name:"sexo",className:"u-full-width",placeholder:"Masculino o Femenino",onChange:f,value:g}),l.a.createElement("label",null,"Fecha de la cita"),l.a.createElement("input",{type:"date",name:"fecha",className:"u-full-width",onChange:f,value:v}),l.a.createElement("label",null,"Hora de la cita"),l.a.createElement("input",{type:"time",name:"hora",className:"u-full-width",onChange:f,value:N}),l.a.createElement("label",null,"Sintomas"),l.a.createElement("textarea",{className:"u-full-width",name:"sintomas",onChange:f,value:w}),l.a.createElement("button",{type:"submit",className:"u-full-width button-primary"},"Agregar cita")))},E=function(e){var a=e.cita,t=e.eliminarCita;return l.a.createElement("div",{className:"cita"},l.a.createElement("p",null,"Paciente:",l.a.createElement("span",null,a.paciente)),l.a.createElement("p",null,"Sexo:",l.a.createElement("span",null,a.sexo)),l.a.createElement("p",null,"Fecha:",l.a.createElement("span",null,a.fecha)),l.a.createElement("p",null,"Hora:",l.a.createElement("span",null,a.hora)),l.a.createElement("p",null,"Sintomas:",l.a.createElement("span",null,a.sintomas)),l.a.createElement("button",{className:"button eliminar u-full-width",onClick:function(){return t(a.id)}},"Eliminar"))};var d=function(){var e=JSON.parse(localStorage.getItem("citas"));e||(e=[]);var a=Object(n.useState)(e),t=Object(o.a)(a,2),c=t[0],r=t[1];Object(n.useEffect)((function(){e?localStorage.setItem("citas",JSON.stringify(c)):localStorage.setItem("citas",JSON.stringify([]))}),[c,e]);var m=function(e){var a=c.filter((function(a){return a.id!==e}));r(a)},s=0===c.length?"No hay citas pendientes":"Administra tus citas";return l.a.createElement(n.Fragment,null,l.a.createElement("h1",{align:"center"},"Administrador pacientes"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"one-half column"},l.a.createElement(p,{crearCita:function(e){r([].concat(Object(i.a)(c),[e]))}})),l.a.createElement("div",{className:"one-half column"},l.a.createElement("h2",null,s),c.map((function(e){return l.a.createElement(E,{key:e.id,cita:e,eliminarCita:m})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.c6503df3.chunk.js.map