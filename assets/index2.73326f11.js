import{d,r as n,h as m,y as _,C as u,c as a,n as r,B as f,F as h,l as p,q as s,_ as v}from"./index.0c246030.js";import{G as B}from"./index.4b0cf2cf.js";import"./index.805c177c.js";import{B as g}from"./button.b72240fd.js";import"./uniq.91c8040d.js";import"./AntdIcon.a3b55369.js";const x={class:"pb-2"},b=u("div",{id:"container"},null,-1),k=d({__name:"index2",setup(w){const i={nodes:[{id:"node1",x:40,y:40,width:80,height:40,label:"hello"},{id:"node2",x:160,y:180,width:80,height:40,label:"world"}],edges:[{source:"node1",target:"node2"}]},e=n();m(()=>{e.value=new B({container:document.getElementById("container"),height:600,background:{color:"#fffbe6"},grid:{size:10,visible:!0}}),e.value.fromJSON(i)});function c(){e.value.translate(80,40)}const t=n(.5);function l(){t.value=t.value===.5?-.5:.5,e.value.zoom(t.value)}return(C,y)=>{const o=g;return p(),_(h,null,[u("div",x,[a(o,{onClick:c,class:"mr-2"},{default:r(()=>[s("\u5E73\u79FB")]),_:1}),a(o,{onClick:l},{default:r(()=>[s("\u7F29\u653E")]),_:1})]),f(" 1\u3001\u521B\u5EFA\u5BB9\u5668 "),b],64)}}}),X=v(k,[["__file","/home/runner/work/antvX6_vue3/antvX6_vue3/src/views/startedQuickly/index2.vue"]]);export{X as default};
