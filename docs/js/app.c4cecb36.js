(function(e){function t(t){for(var r,n,c=t[0],s=t[1],l=t[2],u=0,p=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);i&&i(t);while(p.length)p.shift()();return d.push.apply(d,l||[]),o()}function o(){for(var e,t=0;t<d.length;t++){for(var o=d[t],r=!0,c=1;c<o.length;c++){var s=o[c];0!==a[s]&&(r=!1)}r&&(d.splice(t--,1),e=n(n.s=o[0]))}return e}var r={},a={app:0},d=[];function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/task-list/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var i=s;d.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"09bb":function(e,t,o){"use strict";o("3c5c")},"311a":function(e,t,o){e.exports=o.p+"img/trash.caa5ed5c.svg"},"3c5c":function(e,t,o){},4322:function(e,t,o){"use strict";o("578d")},"4a9f":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);var r=o("7a23");const a={class:"tasks"};function d(e,t,o,d,n,c){const s=Object(r["n"])("Creator"),l=Object(r["n"])("Task"),i=Object(r["n"])("Remover");return Object(r["h"])(),Object(r["c"])(r["a"],null,[Object(r["d"])(s),Object(r["d"])("div",a,[(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["l"])(e.tasks,(e,t)=>(Object(r["h"])(),Object(r["c"])(l,Object(r["f"])({key:t},{id:t,...e}),null,16))),128))]),Object(r["d"])(i)],64)}var n=o("5502");const c=Object(r["v"])("data-v-5bfab766");Object(r["j"])("data-v-5bfab766");const s={class:"creator__input"};Object(r["i"])();const l=c((e,t,o,a,d,n)=>(Object(r["h"])(),Object(r["c"])("form",{class:"creator",onSubmit:t[2]||(t[2]=Object(r["u"])((...e)=>n.createTask&&n.createTask(...e),["prevent"]))},[Object(r["d"])("div",s,[Object(r["t"])(Object(r["d"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>d.text=e)},null,512),[[r["q"],d.text]])]),Object(r["d"])("input",{class:"creator__button",type:"submit",value:"add",disabled:!d.text.length},null,8,["disabled"])],32)));var i={name:"Creator",data(){return{text:""}},methods:{...Object(n["b"])(["addTask"]),createTask(){this.addTask({text:this.text,done:!1}),this.text=""}}};o("4322");i.render=l,i.__scopeId="data-v-5bfab766";var u=i;const p=Object(r["v"])("data-v-052e5fdd");Object(r["j"])("data-v-052e5fdd");const g={class:"status"},b={class:"text"};Object(r["i"])();const v=p((e,t,o,a,d,n)=>{const c=Object(r["n"])("DragElement");return Object(r["h"])(),Object(r["c"])(c,{id:o.id,class:["task",{done:o.done}]},{default:p(()=>[Object(r["d"])("div",g,[Object(r["t"])(Object(r["d"])("input",{type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=e=>o.done=e)},null,512),[[r["p"],o.done]])]),Object(r["d"])("div",b,Object(r["o"])(o.text),1)]),_:1},8,["id","class"])});function h(e,t,o,a,d,n){return Object(r["t"])((Object(r["h"])(),Object(r["c"])("div",{class:"drag-element",draggable:"true",onDragstart:t[1]||(t[1]=e=>n.dragStart(e)),onDragend:t[2]||(t[2]=(...e)=>n.dragEnd&&n.dragEnd(...e)),onTouchstart:t[3]||(t[3]=(...e)=>n.touchStart&&n.touchStart(...e))},[Object(r["m"])(e.$slots,"default")],544)),[[r["r"],d.show]])}var f={props:["id"],data(){return{show:!0}},methods:{touchStart(e){const t=this,o=e.target.parentNode;o.addEventListener("touchmove",a,{once:!0}),o.addEventListener("touchend",a,{once:!0});const r=setTimeout(d,500);function a(){clearTimeout(r)}function d(){let{x:r,y:d,width:n,height:c}=o.getBoundingClientRect();const{clientX:s,clientY:l}=e.targetTouches[0];let i=s,u=l;function p(e){const{clientX:a,clientY:n}=e.targetTouches[0];r+=a-i,d+=n-u,o.style.top=d+"px",o.style.left=r+"px",i=a,u=n;const s=(e,t)=>!e&&t||e&&!t;s(d+c>t.dropFieldTop,t.dropHover)&&t.dropHoverToggle()}function g(){t.dropHover&&(t.deleteTask(t.id),t.dropHoverToggle()),document.body.style.overflow="",o.style.width="",o.style.height="",o.style.top="",o.style.left="",o.style.position="",t.dragModeToggle(),o.removeEventListener("touchmove",p)}o.removeEventListener("touchmove",a),o.removeEventListener("touchend",a),o.addEventListener("touchend",g,{once:!0}),o.style.width=n+"px",o.style.height=c+"px",o.style.top=d+"px",o.style.left=r+"px",o.style.position="fixed",document.body.style.overflow="hidden",t.setDragMode(),o.addEventListener("touchmove",p)}},dragStart(e){this.show=!1,e.dataTransfer.setData("id",this.id),this.dragModeToggle()},dragEnd(e){this.show=!0,this.dragModeToggle()},...Object(n["b"])(["dragModeToggle","setDragMode","dropHoverToggle","deleteTask"])},computed:{...Object(n["c"])(["dragMode","dropHover","dropElement","dropFieldTop"])}};f.render=h;var O=f,j={name:"Task",props:["id","text","done"],components:{DragElement:O},computed:{...Object(n["c"])(["tasks"])},watch:{done(){localStorage["task"+this.id]=JSON.stringify({text:this.text,done:this.done})}}};o("6a33");j.render=v,j.__scopeId="data-v-052e5fdd";var m=j,T=o("311a"),y=o.n(T);const k=Object(r["v"])("data-v-56dc7e52");Object(r["j"])("data-v-56dc7e52");const x=Object(r["d"])("img",{src:y.a,alt:""},null,-1);Object(r["i"])();const D=k((e,t,o,a,d,n)=>{const c=Object(r["n"])("DropField");return Object(r["h"])(),Object(r["c"])(c,{class:["remover",{remover_hover:e.dropHover}]},{default:k(()=>[x]),_:1},8,["class"])});function M(e,t,o,a,d,n){return Object(r["t"])((Object(r["h"])(),Object(r["c"])("div",{ref:"dropField",onDragenter:t[1]||(t[1]=(...e)=>n.dragEnter&&n.dragEnter(...e)),onDragleave:t[2]||(t[2]=(...e)=>n.dragLeave&&n.dragLeave(...e)),onDrop:t[3]||(t[3]=Object(r["u"])((...e)=>n.dragDrop&&n.dragDrop(...e),["prevent"])),onDragOver:t[4]||(t[4]=Object(r["u"])(()=>{},["prevent"]))},[Object(r["m"])(e.$slots,"default")],544)),[[r["r"],e.dragMode]])}var w={name:"DropField",methods:{...Object(n["b"])(["deleteTask","dropHoverToggle","setDropFieldTop","dragModeToggle"]),dragEnter(e){this.dropHoverToggle()},dragLeave(e){this.dropHoverToggle()},dragDrop(e){this.dropHoverToggle(),this.deleteTask(e.dataTransfer.getData("id"))}},computed:{...Object(n["c"])(["dragMode","dropHover"])},watch:{dragMode(){this.dragMode&&Object(r["g"])(()=>this.setDropFieldTop(this.$refs.dropField.getBoundingClientRect().top))}}};w.render=M;var S=w,_={name:"Remover",components:{DropField:S},computed:{...Object(n["c"])(["dropHover"])}};o("f96a");_.render=D,_.__scopeId="data-v-56dc7e52";var E=_,H={name:"App",components:{Creator:u,Task:m,Remover:E},methods:{...Object(n["b"])(["deleteTask","addTask"])},computed:{...Object(n["c"])(["tasks"])},mounted(){const e=[];for(let t=0;t<localStorage.length;t++){let o=localStorage.key(t);o.startsWith("task")&&e.unshift(JSON.parse(localStorage[o]))}e.forEach(e=>this.addTask(e)),console.log(e.length)}};o("09bb");H.render=d;var F=H,L=Object(n["a"])({state:{tasks:{},id:0,dragMode:!1,dropHover:!1,dropFieldTop:null},mutations:{addTask(e,{text:t,done:o}){e.tasks[e.id]={text:t,done:o},localStorage["task"+e.id]=JSON.stringify({text:t,done:o}),e.id++},deleteTask(e,t){delete e.tasks[t],delete localStorage["task"+t]},dragModeToggle(e){e.dragMode=!e.dragMode},setDragMode(e){e.dragMode=!0},dropHoverToggle(e){e.dropHover=!e.dropHover},setDropFieldTop(e,t){e.dropFieldTop=t}},getters:{},actions:{},modules:{}});Object(r["b"])(F).use(L).mount("#app")},"578d":function(e,t,o){},"6a33":function(e,t,o){"use strict";o("a017")},a017:function(e,t,o){},f96a:function(e,t,o){"use strict";o("4a9f")}});
//# sourceMappingURL=app.c4cecb36.js.map