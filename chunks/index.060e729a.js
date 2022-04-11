import{g as de,at as ue,A as W,s as fe,S as ge,P as me,au as pe,d as Te,av as be,F as ye,aw as he}from"./vendor.b603f603.js";import{m as Me,s as Re,l as we,O as ve,h as Se,i as Ee,j as Le,R as Fe,b as Ce,e as Pe,g as De,u as Ie}from"./utils.684b27f5.js";import{T as ke}from"./TransformControls.75d40bd3.js";import{L as xe}from"./LGLTracerRenderer.e2c1c74c.js";import{D as X}from"./DisneyMaterial.dae81f5f.js";const Ue=[],Ge=Pe.Dirlight,Be=De.FantasyBook;let F=null,b=!1;const y=document.querySelector("#container"),U=document.querySelector(".loadingText"),Ae=document.querySelector(".switchButton"),Y=document.querySelector(".curPipelineText");let u="RayTracing",C=!1,P=!1,D=!1,v=!1,S=!1,z=null,V=null,G=new Map;const B=2,t=new xe({antialias:!0});let d={bounces:2,envIntensity:B,toneMapping:W,offFocusRender:!0,useTileRender:!0,tileSlicesNum:4,movingDownsampling:!0};function qe(){let e=Se("lgl_editor_renderer_setting");e&&(d=e)}qe();t.bounces=d.bounces;t.envMapIntensity=d.envIntensity;t.toneMapping=d.toneMapping;t.renderWhenOffFocus=d.offFocusRender;t.useTileRender=d.useTileRender;t.movingDownsampling=d.movingDownsampling;t.tileSlicesNum=d.tileSlicesNum;t.enableTemporalDenoise=!1;t.enableDenoise=!1;document.body.appendChild(t.domElement);const A=!0;let J=!1,M=null,f=null;const{initStats:je,initGUI:$e,initCameraDebugInfo:Ne,initNewGUI:He}=Me();t.loadingCallback={onProgress:e=>{console.log(e)},onComplete:e=>{if(U.innerText=e,b=!1,h(!1),!J){Oe();const{gui:a,params:i,settingFolder:n,denoiseFolder:s}=$e(A,t);s.close(),M=a,i.saveSetting=()=>{Object.keys(d).map(r=>{switch(r){case"toneMapping":d[r]=de[`${i[r]}ToneMapping`];break;default:d[r]=i[r];break}}),Re("lgl_editor_renderer_setting",d)},n.add(i,"saveSetting"),M.close()}J=!0,console.log(e)}};const I=je(A),q=Ne(A);let K=null,k=null;function Oe(){t.setDenoiseColorFactor(.05),t.setDenoisePositionFactor(.01)}const g=new ue({canvas:t.domElement,context:t.gl,logarithmicDepthBuffer:!0,premultipliedAlpha:!0});g.toneMapping=W;g.toneMappingExposure=B;g.outputEncoding=fe;g.setPixelRatio(1);g.setClearAlpha(0);f=He();f.add({envIntensity:B},"envIntensity",0,5,.5).onChange(e=>{g.toneMappingExposure=e});let R=f.addFolder("Material");f.hide();let m={};const l=new ge;we(Ue,l);const p=new me(45,window.innerWidth/window.innerHeight,.001,1e3),w=new ve(p,t.domElement);w.screenSpacePanning=!0;const c=new ke(p,t.domElement),j=new Te;let Q=new pe;function Z(e){F&&l.remove(F);const a=e.scene;l.add(a),F=a,Ie(p,w,l)}function ee(e){e.mapping=he,l.environment=e,l.background=e}function E(e){S=!0,e.needUpdateRayTracingMaterial=!0}function ae(e,a,i,n){Object.keys(a).map(s=>{switch(s){case"color":case"specular":e.addColor(a,s).onChange(r=>{n[`${s}`].set(r),E(i)});break;case"ior":e.add(a,s,1,1.8,.01).onChange(r=>{n[`${s}`]=r,E(i)});break;case"visible":e.add(a,s).onChange(r=>{i.visible=r,v=!0});break;default:e.add(a,s,0,1,.01).onChange(r=>{n[`${s}`]=r,E(i)});break}})}function _e(e){let a=e.material;f.removeFolder(R),R=f.addFolder(`Material: ${a.name}`),R.open(),m={};let i={};m.color=a.color.getHex(),a.isMeshStandardMaterial&&(m.roughness=a.roughness,m.metalness=a.metalness,i.transmission=a.transmission||0,i.ior=a.ior||1.5,i.clearcoat=a.clearcoat||0,i.clearcoatRoughness=a.clearcoatRoughness||0,i.sheen=a.sheen||0,i.sheenTint=a.sheenTint||.5,a.isGLTFSpecularGlossinessMaterial&&(delete m.roughness,delete m.metalness,m.glossiness=a.glossiness,m.specular=a.specular.getHex())),m.opacity=a.opacity,m.visible=e.visible,ae(R,m,e,a);let n={},s=R.addFolder(`Texture uvTransform: ${!!a.map}`);if(a.map){const o=a.map;n.offsetX=o.offset.x,n.offsetY=o.offset.y,n.repeatX=o.repeat.x,n.repeatY=o.repeat.y,n.rotation=o.rotation,n.centerX=o.center.x,n.centerY=o.center.y,Object.keys(n).map(T=>{let O,_;switch((T.slice(-1)=="X"||T.slice(-1)=="Y")&&(O=T.slice(-1).toLowerCase(),_=T.slice(0,-1)),T){case"rotation":s.add(n,T,0,Math.PI,.01).onChange(x=>{o.rotation=x,E(e)});break;default:s.add(n,T,0,1,.01).onChange(x=>{o[`${_}`][`${O}`]=x,E(e)});break}}),s.open()}else s.close();let r=R.addFolder(`isMeshPhysicalMaterial: ${!!a.isMeshPhysicalMaterial}`);a.isMeshPhysicalMaterial?(r.open(),ae(r,i,e,a)):r.close(),f.show()}function We(){const e=document.querySelector("#bubble"),a=document.querySelector("#editorBubble");document.querySelector("#bubble-close").onclick=()=>{e.style.display="none"},localStorage.getItem("editorLoadBubble")||(e.style.display="block",document.querySelector("#bubble-confirm").onclick=()=>{e.style.display="none",localStorage.setItem("editorLoadBubble",!0)}),document.querySelector("#editorBubble-close").onclick=()=>{a.style.display="none"},localStorage.getItem("editorUseBubble")||(a.style.display="block",document.querySelector("#editorBubble-confirm").onclick=()=>{a.style.display="none",localStorage.setItem("editorUseBubble",!0)})}function te(e){const a=document.querySelector("#bubble");a.style.display="block",document.querySelector(".bubble-text").innerText=e}function $(e){e?y.classList.contains("isDroping")||y.classList.add("isDroping"):y.classList.contains("isDroping")&&y.classList.remove("isDroping")}function h(e){e?y.classList.contains("isLoading")||y.classList.add("isLoading"):y.classList.contains("isLoading")&&y.classList.remove("isLoading")}function Xe(){const e=t.domElement;e.addEventListener("dragenter",i=>{$(!0)}),e.addEventListener("dragleave",i=>{$(!1)});const a=new be(e,e);a.on("drop",({files:i})=>{if($(!1),b){te("previous assets no loading complete!");return}b=!0,U.innerText="Building...",h(!0);const n=Array.from(i);n.find(([r,o])=>o.name.match(/\.(gltf|glb)$/))?Ee(i).then(r=>{c.detach(),l.remove(c),Z(r),se(),C=!1,P=!1,D=!1,v=!1,S=!1,u==="RayTracing"?(L("RayTracing"),t.buildScene(l,p).then(()=>{b=!1,C=!0,h(!1)})):(L("RealTime"),f.hide(),P=!0,b=!1,h(!1))}):n.find(([o,T])=>T.name.match(/\.(hdr)$/))?Le(i).then(o=>{ee(o),u==="RayTracing"?(t.updateEnvLight(),t.needsUpdate=!0):D=!0,b=!1,h(!1)}):(b=!1,h(!1),te("Incorrect resource type(support gltf/glb folder or hdr file)!"))}),a.on("droperror",()=>{console.log("Drop Error")}),We(),Ae.addEventListener("click",i=>{ce(),Y.innerText=u}),t.domElement.addEventListener("dblclick",i=>{if(u!=="RealTime")return;j.x=i.clientX/window.innerWidth*2-1,j.y=-(i.clientY/window.innerHeight)*2+1,Q.setFromCamera(j,p);const n=Q.intersectObjects(F.children);if(n.length){const s=n[0].object;c.attach(s),l.add(c),_e(s)}else l.remove(c),f.hide()}),c.addEventListener("dragging-changed",i=>{u==="RealTime"&&(w.enabled=!i.value,v=!0)}),window.addEventListener("keydown",i=>{if(i.keyCode==81){ce();return}if(u==="RealTime")switch(i.keyCode){case 87:c.setMode("translate");break;case 69:c.setMode("rotate");break;case 82:c.setMode("scale");break;case 32:c.enabled=!c.enabled;break}})}function ie(){if(t.domElement.parentElement){const e=t.domElement.parentElement.clientWidth,a=t.domElement.parentElement.clientHeight;t.setSize(e,a),g&&g.setSize(e,a),p.aspect=e/a,p.updateProjectionMatrix()}}window.addEventListener("resize",ie);ie();async function Ye(){const e=new Fe().setDataType(ye),a=await new Promise(n=>{e.load(Ge,n)});ee(a);const i=await Ce(Be);Z(i)}function ne(){b=!0,U.innerText="Building...",h(!0),L("RayTracing"),setTimeout(()=>{t.buildScene(l,p).then(()=>{C=!0,N()})},100)}function re(){h(!1),P=!0,H()}function se(){G=new Map,l.traverse(e=>{if(e.isMesh&&e.material){let a=G.get(e.material);a===void 0?(e.material.isMeshStandardMaterial?(e.realTimeMaterial=e.material,e.rayTracingMaterial=new X().fromStandardMaterial(e.material)):e.material.isRayTracingMaterial||(e.realTimeMaterial=e.material,e.rayTracingMaterial=new X().fromBasicMaterial(e.material)),G.set(e.material,e.rayTracingMaterial)):(e.realTimeMaterial=e.material,e.rayTracingMaterial=a)}})}function le(){l.traverse(e=>{e.isMesh&&e.needUpdateRayTracingMaterial&&(e.rayTracingMaterial.fromStandardMaterial(e.realTimeMaterial),e.needUpdateRayTracingMaterial=!1)})}function L(e){l.traverse(a=>{a.isMesh&&(e==="RealTime"?a.material.isRayTracingMaterial&&a.realTimeMaterial&&(a.material=a.realTimeMaterial):!a.material.isRayTracingMaterial&&a.rayTracingMaterial&&(a.material=a.rayTracingMaterial))})}function oe(e){e==="RayTracing"?(M&&M.show(),f&&f.hide()):M&&M.hide()}function ce(){cancelAnimationFrame(V),cancelAnimationFrame(z),u==="RealTime"?(l.remove(c),c.enabled=!1,L("RayTracing"),C?(D&&(t.updateEnvLight(),t.needsUpdate=!0,D=!1),v&&(t.updateMeshTransform(),t.needsUpdate=!0,v=!1),S&&(le(),t.updateMeshMaterial(),t.needsUpdate=!0,S=!1),N()):(S&&le(),ne()),oe("RayTracing"),u="RayTracing"):(g.resetState(),L("RealTime"),P?H():re(),c.enabled=!0,oe("RealTime"),u="RealTime"),w.enabled=!0}function N(e){w.update(),I&&I.begin(),t.render(l,p),I&&I.end(),q&&q.dataBegin&&(k=t.getTotalSamples(),K!=k&&(q.innerText=`Samples: ${k}`,K=k)),z=requestAnimationFrame(N)}function H(){w.update(),g&&g.render(l,p),V=requestAnimationFrame(H)}async function ze(){await Ye(),se(),u==="RealTime"?re():ne(),Xe(),Y.innerText=u}ze();
