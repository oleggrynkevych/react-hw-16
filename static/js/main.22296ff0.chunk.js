(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},19:function(e,a,t){},21:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(6),l=t.n(c),o=(t(16),t(3)),m=(t(19),t(21),t(4)),s=t(2);var u=function(e){var a=e.contact,t=a.firstName,n=a.lastName,c=a.phone,l=a.gender;return r.a.createElement("div",{className:"info-about-contact"},r.a.createElement("div",{className:"name-and-gender"},r.a.createElement("span",{className:"name"},r.a.createElement("b",null,t," ",n)),r.a.createElement("span",null,"male"===l?r.a.createElement(m.a,{icon:s.a}):null,"female"===l?r.a.createElement(m.a,{icon:s.b}):null)),r.a.createElement("span",{className:"phone"},c))},i=[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",phone:"+380666666666"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380956319521",gender:"male"}];function f(){var e=Object(n.useState)(i),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),m=Object(o.a)(l,2),s=m[0],f=m[1];Object(n.useEffect)(function(){c(p())},[s]);var p=function(){return i.filter(function(e){return"".concat(e.firstName," ").concat(e.lastName," ").concat(e.phone).toLowerCase().includes(s)})};return r.a.createElement("div",{className:"wrapper"},r.a.createElement("input",{type:"text",placeholder:"Search...",className:"search-input",onChange:function(e){return f(e.target.value.toLowerCase())},value:s}),t.map(function(e,a){return r.a.createElement(u,{contact:e,key:a})}))}l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)))},7:function(e,a,t){e.exports=t(25)}},[[7,2,1]]]);
//# sourceMappingURL=main.22296ff0.chunk.js.map