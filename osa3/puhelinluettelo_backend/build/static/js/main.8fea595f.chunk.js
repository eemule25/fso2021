(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(17),o=n.n(c),u=(n(22),n(3)),r=n(8),a=n(4),i=n.n(a),l="http://localhost:3001/api/persons",b=function(){return i.a.get(l).then((function(e){return e.data}))},d=function(e){return i.a.post(l,e).then((function(e){return e.data}))},j=function(e,t){return i.a.put("".concat(l,"/").concat(e),t).then((function(e){return e.data}))},h=function(e){i.a.delete("".concat(l,"/").concat(e))},m=n(0),f=function(e){return Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=e.persons.find((function(t){return t.name===e.newName}));if(n){if(window.confirm("".concat(e.newName," is already added to phonebook, replace the old number with a new one?"))){var s=Object(r.a)(Object(r.a)({},n),{},{number:e.newNumber});j(n.id,s).then((function(t){e.setPersons(e.persons.map((function(e){return e.id!==n.id?e:t})))})).catch((function(t){e.setSuccessMessage("Information of ".concat(s.name," has already been removed from server"))})),e.setSuccessMessage("Person's ".concat(s.name," number updated")),setTimeout((function(){e.setSuccessMessage(null)}),3e3)}}else{var c={name:e.newName,number:e.newNumber};d(c).then((function(t){e.setPersons(e.persons.concat(t)),e.setNewName(""),e.setNewNumber("")})),e.setSuccessMessage("Added ".concat(c.name)),setTimeout((function(){e.setSuccessMessage(null)}),3e3)}},children:[Object(m.jsxs)("div",{children:["name: ",Object(m.jsx)("input",{value:e.newName,onChange:function(t){console.log(t.target.value),e.setNewName(t.target.value)}})]}),Object(m.jsxs)("div",{children:["number: ",Object(m.jsx)("input",{value:e.newNumber,onChange:function(t){e.setNewNumber(t.target.value)}})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",children:"add"})})]})},w=function(e){return Object(m.jsx)("form",{children:Object(m.jsxs)("div",{children:["filter shown with ",Object(m.jsx)("input",{value:e.show,onChange:function(t){console.log(t.target.value),e.setShow(t.target.value),""===t.target.value?e.setShowAll(!0):e.setShowAll(!1)}})]})})};var O=function(e){return(e.showAll?e.persons:e.persons.filter((function(t){return t.name.toLowerCase().includes(e.show.toLowerCase())}))).map((function(t){return Object(m.jsxs)("div",{children:[t.name," ",t.number,Object(m.jsx)("button",{onClick:function(){return function(e,t,n){window.confirm("Delete ".concat(e.name,"?"))&&(h(n),t.setPersons(t.persons.filter((function(e){return e.id!==n}))),t.setSuccessMessage("".concat(e.name," deleted!")),setTimeout((function(){t.setSuccessMessage(null)}),3e3))}(t,e,t.id)},children:"delete"})]},t.id)}))},p=function(e){var t=e.message;return null===t?null:t.includes("removed")?Object(m.jsx)("div",{className:"error",children:t}):Object(m.jsx)("div",{className:"success",children:t})},g=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(s.useState)(""),r=Object(u.a)(o,2),a=r[0],i=r[1],l=Object(s.useState)(""),d=Object(u.a)(l,2),j=d[0],h=d[1],g=Object(s.useState)(""),v=Object(u.a)(g,2),N=v[0],x=v[1],S=Object(s.useState)(!0),C=Object(u.a)(S,2),M=C[0],P=C[1],A=Object(s.useState)(null),k=Object(u.a)(A,2),T=k[0],y=k[1];return Object(s.useEffect)((function(){b().then((function(e){c(e)}))}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Phonebook"}),Object(m.jsx)(p,{message:T}),Object(m.jsx)(w,{show:N,setShow:x,persons:n,showAll:M,setShowAll:P}),Object(m.jsx)("h3",{children:"Add a new"}),Object(m.jsx)(f,{persons:n,setNewName:i,setNewNumber:h,newName:a,newNumber:j,setPersons:c,setSuccessMessage:y}),Object(m.jsx)("h2",{children:"Numbers"}),Object(m.jsx)(O,{persons:n,show:N,setPersons:c,setSuccessMessage:y})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,o=t.getLCP,u=t.getTTFB;n(e),s(e),c(e),o(e),u(e)}))};o.a.render(Object(m.jsx)(g,{}),document.getElementById("root")),v()}},[[42,1,2]]]);
//# sourceMappingURL=main.8fea595f.chunk.js.map