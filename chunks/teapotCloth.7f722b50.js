import{L as T,l as F,O as S,u as G,S as j,G as k,T as L,D as w}from"./stats.module.4a77fa82.js";import{S as v,P as D,T as O,C as E,ae as P}from"./vendor.fd21b549.js";import{t as z}from"./lightConfig.b74fa21b.js";let o;const A=z,t=new T;t.bounces=2;t.renderWhenOffFocus=!0;t.envMapIntensity=1;document.body.appendChild(t.domElement);const d=new v;F(A,d);const a=new D(22,window.innerWidth/window.innerHeight,.001,1e3),x=new S(a,t.domElement);x.screenSpacePanning=!0;function W(){o=new j,o.setMode(0),o.domElement.style.position="absolute",o.domElement.style.left="0px",o.domElement.style.top="0px",document.body.appendChild(o.domElement)}function B(e){const n=new w;n.color=new E(.9,.618,.1),n.roughness=.02;const s=new w;return s.transmission=1,s.extinction=new E(.015,.38,.329),s.atDistance=.05,s.roughness=.02,[n]}function H(e,n,s,m){const p=new P;return n.forEach((c,f)=>{const l=new P,u=e[1].clone(),g=e[2].clone();if(u.material=c,g.material=s,l.add(u),l.add(g),f==0){const r=e[3].clone();r.material=m,l.add(r)}p.add(l)}),d.add(p),p}async function q(){const e=[],n=new O;["/assets/models/teapot/textures/checker.png"].forEach(i=>{e.push(new Promise(h=>{n.load(i,h)}))});const m=[],p=new k;let c=[];Object.keys(L).map(i=>{const h=L[i];m.push(new Promise(b=>{p.load(h,b)}))}),await Promise.all(m).then(i=>{i.forEach(h=>{const b=h.scene.children[0];c.push(b)})});let f=[];await Promise.all(e).then(i=>{f=i});const l=f[0],u=new w;u.map=l,c[0].material=u,d.add(c[0]);const g=B(),r=new w;r.color=new E(.01,.01,.01),r.roughness=.5,r.metallic=1;const M=new w;M.color=new E(3100495),M.roughness=1,M.sheen=1,H(c,g,r,M)}async function I(){await q(),G(a,x,d),W(),t.buildScene(d,a).then(()=>{y()})}function C(){if(t.domElement.parentElement){const e=t.domElement.parentElement.clientWidth,n=t.domElement.parentElement.clientHeight;t.setSize(e,n),a.aspect=e/n,a.updateProjectionMatrix()}}window.addEventListener("resize",C);C();function y(e){x.update(),a.focus=x.target.distanceTo(a.position),o.begin(),t.render(d,a),o.end(),requestAnimationFrame(y)}I();
