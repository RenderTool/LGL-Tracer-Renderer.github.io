import{L as F,l as x,O as R,R as y,u as T,e as b,G as B,T as C,D as p}from"./stats.module.949be9f2.js";import{S,P as v,T as W,C as _,ae as E}from"./vendor.fd21b549.js";import{a as j}from"./lightConfig.3bd48602.js";const k=j,N=b.Powerplant,i=new F;i.bounces=8;i.renderWhenOffFocus=!0;document.body.appendChild(i.domElement);const h=new S;x(k,h);const d=new v(10,window.innerWidth/window.innerHeight,.001,1e3),f=new R(d,i.domElement);f.screenSpacePanning=!0;function q(e){const t=new p;t.color=new _(.9,.618,.1),t.map=e[1],t.normalMap=e[2],t.roughnessMap=e[3],t.metalness=1,t.roughness=1;const o=new p;o.map=e[7],o.normalMap=e[8],o.metalnessMap=e[9],o.roughnessMap=e[10],o.metalness=1,o.roughness=1;const n=new p;n.map=e[4],n.normalMap=e[5],n.roughnessMap=e[6],n.metalness=0,n.roughness=1;const a=new p;a.map=e[11],a.normalMap=e[12],a.roughnessMap=e[13],a.metalness=0,a.roughness=1;const r=new p;r.transmission=1,r.extinction=new _(.015,.5,.4),r.atDistance=.05,r.roughness=.02;const s=new p;return s.map=e[14],s.normalMap=e[15],s.roughnessMap=e[16],s.metalness=0,s.roughness=1,[t,o,n,r,a,s]}function z(e,t,o,n){const a=new E;return t.forEach((r,s)=>{const m=new E,g=e[1].clone(),M=e[2].clone();if(g.material=r,M.material=o,m.add(g),m.add(M),s==5){const u=e[3].clone();u.material=n,m.add(u)}a.add(m)}),h.add(a),a}async function O(){const e=[],t=new W;["/assets/models/teapot/textures/checker.png","/assets/models/teapot/textures/ScratchedGold01_4K_BaseColor.png","/assets/models/teapot/textures/ScratchedGold01_4K_Normal.png","/assets/models/teapot/textures/ScratchedGold01_4K_Roughness.png","/assets/models/teapot/textures/ParquetFlooring05_4K_BaseColor.png","/assets/models/teapot/textures/ParquetFlooring05_4K_Normal.png","/assets/models/teapot/textures/ParquetFlooring05_4K_Roughness.png","/assets/models/teapot/textures/RustyMetalPanel01_4K_BaseColor.png","/assets/models/teapot/textures/RustyMetalPanel01_4K_Normal.png","/assets/models/teapot/textures/RustyMetalPanel01_4K_Metallic.png","/assets/models/teapot/textures/RustyMetalPanel01_4K_Roughness.png","/assets/models/teapot/textures/Granite08large_4K_BaseColor.png","/assets/models/teapot/textures/Granite08large_4K_Normal.png","/assets/models/teapot/textures/Granite08large_4K_Roughness.png","/assets/models/teapot/textures/WoodenFloor01_2K_BaseColor.png","/assets/models/teapot/textures/WoodenFloor01_2K_Normal.png","/assets/models/teapot/textures/WoodenFloor01_2K_Roughness.png"].forEach(l=>{e.push(new Promise(c=>{t.load(l,c)}))});const n=[],a=new B;let r=[];Object.keys(C).map(l=>{const c=C[l];n.push(new Promise(P=>{a.load(c,P)}))}),await Promise.all(n).then(l=>{l.forEach(c=>{const P=c.scene.children[0];r.push(P)})});let s=[];await Promise.all(e).then(l=>{s=l});const m=s[0],g=new p;g.map=m,r[0].material=g;const M=q(s),u=new p;u.color=new _(.01,.01,.01),u.roughness=.5,u.metallic=1;const w=new p;w.color=new _(3100495),w.roughness=1,w.sheen=1;const K=z(r,M,u,w);K.children.forEach((l,c)=>{l.position.z-=(c%3-1)*.2,c>2&&(l.position.x-=.2)}),K.rotation.y=Math.PI}async function A(){{const e=new y,t=await new Promise(o=>{e.load(N,o)});h.environment=t}await O(),T(d,f,h),i.buildScene(h,d).then(()=>{L()})}function G(){if(i.domElement.parentElement){const e=i.domElement.parentElement.clientWidth,t=i.domElement.parentElement.clientHeight;i.setSize(e,t),d.aspect=e/t,d.updateProjectionMatrix()}}window.addEventListener("resize",G);G();function L(e){f.update(),d.focus=f.target.distanceTo(d.position),i.render(h,d),requestAnimationFrame(L)}A();