import {C as J, W as b} from './lglTracer.es.v1.0.8.0820c289.js';
import {a as H, e as j, g as B, i as R, j as q, l as A, m as x, O as I, R as k, u as G} from './utils.684b27f5.js';
import {A as W, av as U, F as $, P as O, S as z} from './vendor.b603f603.js';
const K = [], N = j.Dirlight, Q = B.DamagedHelmet;
let h = null, m = null, l = !1;
const a = document.querySelector('#container'),
      v = document.querySelector('.loadingText'), n = new J;
n.bounces = 2;
n.renderWhenOffFocus = !0;
n.useTileRender = !1;
n.toneMapping = W;
n.envMapIntensity = 2;
n.enableTemporalDenoise = !1;
document.body.appendChild(n.domElement);
const L = !0;
let S = !1;
const {initStats: V, initGUI: X, initCameraDebugInfo: Y} = x();
n.loadingCallback = {
  onProgress: e => {
    console.log(e)
  },
  onComplete: e => {
    v.innerText = e, r(!1), S || (Z(), X(L, n), ee()), S = !0, console.log(e)
  }
};
const u = V(L), E = Y(L);
let T = null, f = null;
function Z() {
  n.setDenoiseColorFactor(2), n.setDenoisePositionFactor(.01)
}
const i = new z;
A(K, i);
const o = new O(45, window.innerWidth / window.innerHeight, .001, 1e3),
      g = new I(o, n.domElement);
g.screenSpacePanning = !0;
function M(e) {
  h && i.remove(h);
  const t = e.scene;
  te(t), i.add(t), h = t, G(o, g, i)
}
function w(e) {
  m && m.isTexture && m.dispose(), i.environment = e, m = e
}
function _() {
  const e = document.querySelector('#bubble');
  document.querySelector('#bubble-close').onclick =
      () => {
        e.style.display = 'none'
      },
  localStorage.getItem('bubble') ||
      (e.style.display = 'block',
       document.querySelector('.bubble-confirm').onclick =
           () => {e.style.display = 'none', localStorage.setItem('bubble', !0)})
}
function D(e) {
  const t = document.querySelector('#bubble');
  t.style.display = 'block',
  document.querySelector('.bubble-text').innerText = e
}
function y(e) {
  e ? a.classList.contains('isDroping') || a.classList.add('isDroping') :
      a.classList.contains('isDroping') && a.classList.remove('isDroping')
}
function r(e) {
  e ? a.classList.contains('isLoading') || a.classList.add('isLoading') :
      a.classList.contains('isLoading') && a.classList.remove('isLoading')
}
function ee() {
  const e = n.domElement;
  e.addEventListener('dragenter', s => {y(!0)}),
      e.addEventListener('dragleave', s => {y(!1)});
  const t = new U(e, e);
  t.on('drop', ({files: s}) => {
    if (y(!1), l) {
      D('previous assets no loading complete!');
      return
    }
    l = !0, v.innerText = 'Building...', r(!0);
    const c = Array.from(s);
    c.find(([p, d]) => d.name.match(/\.(gltf|glb)$/)) ?
        R(s).then(p => {M(p), n.buildScene(i, o).then(() => {l = !1, r(!1)})}) :
        c.find(([d, P]) => P.name.match(/\.(hdr)$/)) ?
        q(s).then(d => {
          w(d),
          n.updateEnvLight(),
          n.needsUpdate = !0,
          l = !1,
          r(!1)
        }) :
        (l = !1, r(!1),
         D('Incorrect resource type(support gltf/glb folder or hdr file)!'))
  }), t.on('droperror', () => {console.log('Drop Error')}), _()
}
function te(e) {
  e.traverse(t => {
    if (t.isMesh && t.material) {
      if (t.material.isRayTracingMaterial) return;
      t.material.isMeshStandardMaterial ?
          t.material = new b().fromStandardMaterial(t.material) :
          t.material.isMeshBasicMaterial || t.material.isMeshLambertMaterial ||
                  t.material.isMeshToonMaterial ?
          t.material = new b().fromBasicMaterial(t.material) :
          t.material = new b
    }
  })
}
async function ne() {
  const e = new k().setDataType($), t = await new Promise(c => {e.load(N, c)});
  w(t);
  const s = await H(Q);
  M(s), g.target.y -= .18, n.buildScene(i, o).then(() => {F()})
}
function C() {
  if (n.domElement.parentElement) {
    const e = n.domElement.parentElement.clientWidth,
          t = n.domElement.parentElement.clientHeight;
    n.setSize(e, t), o.aspect = e / t, o.updateProjectionMatrix()
  }
}
window.addEventListener('resize', C);
C();
function F(e) {
  g.update(), u && u.begin(), n.render(i, o), u && u.end(),
      E && E.dataBegin &&
      (f = n.getTotalSamples(),
       T != f && (E.innerText = `Samples: ${f}`, T = f)),
      requestAnimationFrame(F)
}
ne();
