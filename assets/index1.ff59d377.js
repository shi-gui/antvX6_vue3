import{d as f,h,y as p,C as u,c as n,n as a,F as m,l as b,q as l,_ as x}from"./index.d9f76761.js";import{G as B,R as i}from"./index.0720c90c.js";import{B as g}from"./button.e8d57cc9.js";import"./uniq.91c8040d.js";import"./AntdIcon.02afef62.js";const w={class:"mb-4"},N=u("div",{id:"container"},null,-1),k=f({__name:"index1",setup(v){let e;h(()=>{e=new B({container:document.getElementById("container"),height:600,background:{color:"#fffbe6"},grid:{size:10,visible:!0}})});function r(){const d=new i({x:100,y:200,width:80,height:40,angle:30,attrs:{body:{fill:"blue"},label:{text:"Hello",fill:"white"}}});e.addNode(d)}let t;function c(){t=new i,e.addNode(t)}function s(){t.position(100,200).resize(80,40).rotate(30).attr({body:{fill:"blue"},label:{text:"Hello",fill:"white"}}),e.addNode(t)}function _(){e.addNode({shape:"rect",x:100,y:200,width:80,height:40,angle:30,attrs:{body:{fill:"blue"},label:{text:"Hello",fill:"white"}}})}return(d,C)=>{const o=g;return b(),p(m,null,[u("p",w,[n(o,{onClick:r},{default:a(()=>[l("\u6784\u9020\u51FD\u6570\u6DFB\u52A0")]),_:1}),n(o,{onClick:c},{default:a(()=>[l("\u521B\u5EFA\u8282\u70B9")]),_:1}),n(o,{onClick:s},{default:a(()=>[l("\u4E3A\u521B\u5EFA\u7684\u8282\u70B9\u8BBE\u7F6E\u5C5E\u6027")]),_:1}),n(o,{onClick:_},{default:a(()=>[l("graph.addNode")]),_:1})]),N],64)}}}),V=x(k,[["__file","/home/runner/work/antvX6_vue3/antvX6_vue3/src/views/node/index1.vue"]]);export{V as default};
