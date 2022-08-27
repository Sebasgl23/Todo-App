(()=>{"use strict";function a(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function b(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function c(a,c,d){return c&&b(a.prototype,c),d&&b(a,d),Object.defineProperty(a,"prototype",{writable:!1}),a}function d(a,b){var c="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!c){if(Array.isArray(a)||(c=e(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,f=function(){};return{s:f,n:function(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function(a){throw a},f:f}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var g,h=!0,i=!1;return{s:function(){c=c.call(a)},n:function(){var a=c.next();return h=a.done,a},e:function(a){i=!0,g=a},f:function(){try{h||null==c["return"]||c["return"]()}finally{if(i)throw g}}}}function e(a,b){if(a){if("string"==typeof a)return f(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?f(a,b):void 0}}function f(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function g(a,b){var c="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!c){if(Array.isArray(a)||(c=h(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,i=!1;return{s:function(){c=c.call(a)},n:function(){var a=c.next();return g=a.done,a},e:function(a){i=!0,f=a},f:function(){try{g||null==c["return"]||c["return"]()}finally{if(i)throw f}}}}function h(a,b){if(a){if("string"==typeof a)return i(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?i(a,b):void 0}}function i(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function j(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function k(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function l(a,b,c){return b&&k(a.prototype,b),c&&k(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}var m={};(()=>{m.d=(a,b)=>{for(var c in b)m.o(b,c)&&!m.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}})(),(()=>{m.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b)})();m.d({},{L:()=>v});var n=function(){function b(c){a(this,b),this.tarea=c,this.id=new Date().getTime(),this.completado=!1,this.creado=new Date}return c(b,null,[{key:"fromJson",value:function(a){var c=a.id,d=a.tarea,e=a.completado,f=a.creado,g=new b(d);return g.id=c,g.completado=e,g.creado=f,g}}]),b}();var o=document.querySelector(".todo-list"),p=document.querySelector(".new-todo"),q=document.querySelector(".clear-completed"),r=document.querySelector(".filters"),s=document.querySelectorAll(".filtro"),t=function(a){var b="\n    <li class=\"".concat(a.completado?"completed":"","\" data-id=\"").concat(a.id,"\">\n        <div class=\"view\">\n            <input class=\"toggle\" type=\"checkbox\" ").concat(a.completado?"checked":"",">\n            <label>").concat(a.tarea,"</label>\n            <button class=\"destroy\"></button>\n        </div>\n        <input class=\"edit\" value=\"Create a TodoMVC template\">\n    </li>\n    "),c=document.createElement("div");return c.innerHTML=b,o.append(c.firstElementChild),c.firstElementChild};p.addEventListener("keyup",function(a){if(0<p.value.length&&13===a.keyCode){var b=new n(p.value);v.nuevoTodo(b),t(b),p.value=""}}),o.addEventListener("click",function(a){var b=a.target.localName,c=a.target.parentElement.parentElement,d=c.getAttribute("data-id");b.includes("input")?(v.marcarCompletado(d),c.classList.toggle("completed")):b.includes("button")&&(v.eliminarTodo(d),o.removeChild(c),console.log(v))}),q.addEventListener("click",function(){v.eliminarCompletados();for(var a,b=o.children.length-1;0<=b;b--)a=o.children[b],a.classList.contains("completed")&&o.removeChild(a);r.addEventListener("click",function(a){var b=a.target.text;if(b){s.forEach(function(a){return a.classList.remove("selected")}),a.target.classList.add("selected");var c,e=d(o.children);try{for(e.s();!(c=e.n()).done;){var f=c.value;f.classList.remove("hidden");var g=f.classList.contains("completed");"Pendientes"===b?g&&f.classList.add("hidden"):"Completados"===b?g||f.classList.add("hidden"):void 0}}catch(a){e.e(a)}finally{e.f()}}})});var u=function(){function a(){j(this,a),this.cargarLocalStorage()}return l(a,[{key:"nuevoTodo",value:function(a){this.todos.push(a),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(a){this.todos=this.todos.filter(function(b){return b.id!=a}),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(a){var b,c=g(this.todos);try{for(c.s();!(b=c.n()).done;){var d=b.value;if(d.id==a){d.completado=!d.completado,this.guardarLocalStorage();break}}}catch(a){c.e(a)}finally{c.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter(function(a){return!a.completado}),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("Todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("Todo")?JSON.parse(localStorage.getItem("Todo")):[],this.todos=this.todos.map(n.fromJson)}}]),a}();var v=new u;v.todos.forEach(t)})();