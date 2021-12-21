import{L as T,l as P,D as f,O as v,R as D,d as G,u as x,e as I,g as F}from"./stats.module.4a77fa82.js";import{A as R,S as j,C as m,av as g,a7 as u,P as k}from"./vendor.fd21b549.js";import{c as z}from"./lightConfig.b74fa21b.js";import{m as A}from"./makeCommonGUI.f7eef3ea.js";const B=z,O=I.Sunset,U=F.CornellBox,e=new T;e.bounces=4;e.renderWhenOffFocus=!0;e.toneMapping=R;e.useTileRender=!1;e.envMapIntensity=2;e.enableDenoise=!0;e.enableTemporalDenoise=!0;e.enableSpatialDenoise=!0;document.body.appendChild(e.domElement);const i=document.querySelector("#container");function W(n){n?i.classList.contains("isLoading")||i.classList.add("isLoading"):i.classList.contains("isLoading")&&i.classList.remove("isLoading")}const d=!0,{initStats:q,initGUI:H,initCameraDebugInfo:$}=A();e.loadingCallback={onProgress:n=>console.log(n),onComplete:n=>{console.log(n),W(!1),J(),H(d,e)}};const s=q(d),h=$(d);let w=null,r=null;function J(){e.setDenoiseColorFactor(1),e.setDenoisePositionFactor(.3)}const o=new j;P(B,o);const M=new f({color:new m(1,1,1),roughness:.15,metalness:0,specularTint:0,sheen:0,sheenTint:0,clearcoat:0,subsurface:0,transmission:1,ior:1.45,anisotropic:0,extinction:new m(1,1,0)}),C=M.clone();C.extinction=new m(0,0,1);const K=new g(.2,128,64),p=new u(K,M);p.position.y=1.5;p.position.x=.3;o.add(p);const N=new g(.25,128,64),l=new u(N,C);l.position.y=.5;l.position.x=-.5;l.position.z=.5;o.add(l);const a=new k(45,window.innerWidth/window.innerHeight,.001,1e3),c=new v(a,e.domElement);c.screenSpacePanning=!0;function Q(n){n.traverse(t=>{t.isMesh&&t.material&&t.material.isMeshStandardMaterial&&(t.material=new f().fromStandardMaterial(t.material))})}async function V(){{const b=new D,y=await new Promise(E=>{b.load(O,E)});o.environment=y}const t=(await G(U)).scene;Q(t),o.add(t),x(a,c,o),e.buildScene(o,a).then(()=>{S()})}function L(){if(e.domElement.parentElement){const n=e.domElement.parentElement.clientWidth,t=e.domElement.parentElement.clientHeight;e.setSize(n,t),a.aspect=n/t,a.updateProjectionMatrix()}}window.addEventListener("resize",L);L();function S(n){c.update(),a.focus=c.target.distanceTo(a.position),s&&s.begin(),e.render(o,a),s&&s.end(),h&&(r=e.getTotalSamples(),w!=r&&(h.innerText=`Samples: ${r}`,w=r)),requestAnimationFrame(S)}V();
