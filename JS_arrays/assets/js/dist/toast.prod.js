"use strict";var toast={success:function(t){this.show(t,"success")},error:function(t){this.show(t,"error")},warning:function(t){this.show(t,"warning")},info:function(t){this.show(t,"info")},hide:function(){document.getElementById("my-toast").remove()},show:function(t,n){var o=this;null!==document.getElementById("my-toast")&&this.hide(),document.body.insertAdjacentHTML("afterbegin",'<div id="my-toast" class="my-toast my-toast-'.concat(n,'">\n    ').concat(t,"\n        </div>")),setTimeout(function(){return o.hide()},5e3)}};