import {D as Y} from './DisneyMaterial.dae81f5f.js';
import {L as Ge} from './LGLTracerRenderer.383bc7f1.js';
import {T as Ue} from './TransformControls.75d40bd3.js';
import {b as Me, e as Re, g as we, h as Te, i as be, j as ye, l as ge, m as fe, O as pe, R as he, s as me, u as ve} from './utils.684b27f5.js';
import {A as X, at as Ee, au as Pe, av as Ie, aw as xe, d as De, F as ke, g as Se, P as Ce, s as Le, S as Fe} from './vendor.b603f603.js';
const Be = [], Ae = Re.Dirlight, qe = we.FantasyBook;
let F = null, b = !1;
const y = document.querySelector('#container'),
      U = document.querySelector('.loadingText'),
      je = document.querySelector('.switchButton'),
      z = document.querySelector('.curPipelineText');
let d = 'RayTracing', C = !1, P = !1, D = !1, v = !1, S = !1, V = null,
    J = null, G = new Map, B = !1;
const A = 2, t = new Ge({antialias: !0}); //t=render
let u = {
  bounces: 2,
  envIntensity: A,
  toneMapping: X,
  offFocusRender: !0,
  useTileRender: !0,
  tileSlicesNum: 4,
  movingDownsampling: !0
};
function $e() {
  let e = Te('lgl_editor_renderer_setting');
  e && (u = e)
}
$e();
t.bounces = u.bounces;
t.envMapIntensity = u.envIntensity;
t.toneMapping = u.toneMapping;
t.renderWhenOffFocus = u.offFocusRender;
t.useTileRender = u.useTileRender;
t.movingDownsampling = u.movingDownsampling;
t.tileSlicesNum = u.tileSlicesNum;
t.enableTemporalDenoise = !1;
t.enableDenoise = !1;
//t.enviromentVisible = false;
document.body.appendChild(t.domElement);
t.fullSampleCallback = () => {
  B && (B = !1, ue())
};
const q = !0;
let K = !1, M = null, f = null;
const {initStats: Ne, initGUI: He, initCameraDebugInfo: Oe, initNewGUI: _e} =
    fe();
t.loadingCallback = {
  onProgress: e => {
    console.log(e)
  },
  onComplete: e => {
    if (U.innerText = e, b = !1, h(!1), !K) {
      We();
      const {gui: a, params: i, settingFolder: n, denoiseFolder: l} = He(q, t);
      l.close(), M = a, i.saveSetting = () => {
        Object.keys(u).map(r => {
          switch (r) {
            case 'toneMapping':
              u[r] = Se[`${i[r]}ToneMapping`];
              break;
            default:
              u[r] = i[r];
              break
          }
        }),
            me('lgl_editor_renderer_setting', u)
      }, n.add(i, 'saveSetting'), M.close()
    }
    K = !0, console.log(e)
  }
};
const I = Ne(q), j = Oe(q);
let Q = null, k = null;
function We() {
  t.setDenoiseColorFactor(.05), t.setDenoisePositionFactor(.01)
}
const m = new Ee({
  canvas: t.domElement,
  context: t.gl,
  logarithmicDepthBuffer: !0,
  premultipliedAlpha: !0
});
m.toneMapping = X;
m.toneMappingExposure = A;
m.outputEncoding = Le;
m.setPixelRatio(1);
m.setClearAlpha(0);
f = _e();
f.add({envIntensity: A}, 'envIntensity', 0, 5, .5)
    .onChange(e => {m.toneMappingExposure = e});
let R = f.addFolder('Material');
f.hide();
let g = {};
const s = new Fe;
ge(Be, s);
const p = new Ce(45, window.innerWidth / window.innerHeight, .001, 1e3),
      w = new pe(p, t.domElement);
w.screenSpacePanning = !0;
const c = new Ue(p, t.domElement), $ = new De;
let Z = new Pe;
function ee(e) {
  F && s.remove(F);
  const a = e.scene;
  s.add(a), F = a, ve(p, w, s)
}
function ae(e) {
  e.mapping = xe, s.environment = e, s.background = e;//s = scene slt
}
function E(e) {
  S = !0, e.needUpdateRayTracingMaterial = !0
}
function te(e, a, i, n) {
  Object.keys(a).map(l => {
    switch (l) {
      case 'color':
      case 'specular':
        e.addColor(a, l).onChange(r => {n[`${l}`].set(r), E(i)});
        break;
      case 'ior':
        e.add(a, l, 1, 1.8, .01).onChange(r => {n[`${l}`] = r, E(i)});
        break;
      case 'visible':
        e.add(a, l).onChange(r => {i.visible = r, v = !0});
        break;
      default:
        e.add(a, l, 0, 1, .01).onChange(r => {n[`${l}`] = r, E(i)});
        break
    }
  })
}
function Xe(e) {
  let a = e.material;
  f.removeFolder(R), R = f.addFolder(`Material: ${a.name}`), R.open(), g = {};
  let i = {};
  g.color = a.color.getHex(),
  a.isMeshStandardMaterial &&
      (g.roughness = a.roughness, g.metalness = a.metalness,
       i.transmission = a.transmission || 0, i.ior = a.ior || 1.5,
       i.clearcoat = a.clearcoat || 0,
       i.clearcoatRoughness = a.clearcoatRoughness || 0, i.sheen = a.sheen || 0,
       i.sheenTint = a.sheenTint || .5,
       a.isGLTFSpecularGlossinessMaterial &&
           (delete g.roughness, delete g.metalness, g.glossiness = a.glossiness,
            g.specular = a.specular.getHex())),
  g.opacity = a.opacity, g.visible = e.visible, te(R, g, e, a);
  let n = {}, l = R.addFolder(`Texture uvTransform: ${!!a.map}`);
  if (a.map) {
    const o = a.map;
    n.offsetX = o.offset.x, n.offsetY = o.offset.y, n.repeatX = o.repeat.x,
    n.repeatY = o.repeat.y, n.rotation = o.rotation, n.centerX = o.center.x,
    n.centerY = o.center.y, Object.keys(n).map(T => {
      let _, W;
      switch ((T.slice(-1) == 'X' || T.slice(-1) == 'Y') &&
                  (_ = T.slice(-1).toLowerCase(), W = T.slice(0, -1)),
              T) {
        case 'rotation':
          l.add(n, T, 0, Math.PI, .01).onChange(x => {o.rotation = x, E(e)});
          break;
        default:
          l.add(n, T, 0, 1, .01).onChange(x => {o[`${W}`][`${_}`] = x, E(e)});
          break
      }
    }),
    l.open()
  } else
    l.close();
  let r = R.addFolder(`isMeshPhysicalMaterial: ${!!a.isMeshPhysicalMaterial}`);
  a.isMeshPhysicalMaterial ? (r.open(), te(r, i, e, a)) : r.close(), f.show()
}
function Ye() {
  const e = document.querySelector('#bubble'),
        a = document.querySelector('#editorBubble');
  document.querySelector('#bubble-close').onclick =
      () => {
        e.style.display = 'none'
      },
  localStorage.getItem('editorLoadBubble') ||
      (e.style.display = 'block',
       document.querySelector('#bubble-confirm').onclick = () => {
         e.style.display = 'none',
         localStorage.setItem('editorLoadBubble', !0)
       }),
  document.querySelector('#editorBubble-close').onclick =
      () => {
        a.style.display = 'none'
      },
  localStorage.getItem('editorUseBubble') ||
      (a.style.display = 'block',
       document.querySelector('#editorBubble-confirm').onclick = () => {
         a.style.display = 'none',
         localStorage.setItem('editorUseBubble', !0)
       })
}
function ie(e) {
  const a = document.querySelector('#bubble');
  a.style.display = 'block',
  document.querySelector('.bubble-text').innerText = e
}
function N(e) {
  e ? y.classList.contains('isDroping') || y.classList.add('isDroping') :
      y.classList.contains('isDroping') && y.classList.remove('isDroping')
}
function h(e) {
  e ? y.classList.contains('isLoading') || y.classList.add('isLoading') :
      y.classList.contains('isLoading') && y.classList.remove('isLoading')
}
function ze() {
  const e = t.domElement;
  e.addEventListener('dragenter', i => {N(!0)}),
      e.addEventListener('dragleave', i => {N(!1)});
  const a = new Ie(e, e);
  a.on(
      'drop',
      ({files: i}) => {
        if (N(!1), b) {
          ie('previous assets no loading complete!');
          return
        }
        b = !0, U.innerText = 'Building...', h(!0);
        const n = Array.from(i);
        n.find(([r, o]) => o.name.match(/\.(gltf|glb)$/)) ?
            be(i).then(r => {
              c.detach(),
              s.remove(c),
              ee(r),
              se(),
              C = !1,
              P = !1,
              D = !1,
              v = !1,
              S = !1,
              d === 'RayTracing' ?
                  (L('RayTracing'),
                   t.buildScene(s, p).then(() => {b = !1, C = !0, h(!1)})) :
                  (L('RealTime'), f.hide(), P = !0, b = !1, h(!1))
            }) :
            n.find(([o, T]) => T.name.match(/\.(hdr)$/)) ?
            ye(i).then(o => {
              ae(o),
              d === 'RayTracing' ? (t.updateEnvLight(), t.needsUpdate = !0) :
                                   D = !0,
              b = !1,
              h(!1)
            }) :
            (b = !1, h(!1),
             ie('Incorrect resource type(support gltf/glb folder or hdr file)!'))
      }),
      a.on('droperror', () => {console.log('Drop Error')}), Ye(),
      je.addEventListener('click', i => {de(), z.innerText = d}),
      t.domElement.addEventListener(
          'dblclick',
          i => {
            if (d !== 'RealTime') return;
            $.x = i.clientX / window.innerWidth * 2 - 1,
            $.y = -(i.clientY / window.innerHeight) * 2 + 1,
            Z.setFromCamera($, p);
            const n = Z.intersectObjects(F.children);
            if (n.length) {
              const l = n[0].object;
              c.attach(l), s.add(c), Xe(l)
            } else
              s.remove(c), f.hide()
          }),
      c.addEventListener(
          'dragging-changed',
          i => {d === 'RealTime' && (w.enabled = !i.value, v = !0)}),
      window.addEventListener('keydown', i => {
        if (i.keyCode == 81) {
          de();
          return
        }
        if (d === 'RealTime') switch (i.keyCode) {
            case 87:
              c.setMode('translate');
              break;
            case 69:
              c.setMode('rotate');
              break;
            case 82:
              c.setMode('scale');
              break;
            case 32:
              c.enabled = !c.enabled;
              break
          }
      })
}
function ne() {
  if (t.domElement.parentElement) {
    const e = t.domElement.parentElement.clientWidth,
          a = t.domElement.parentElement.clientHeight;
    t.setSize(e, a), m && m.setSize(e, a), p.aspect = e / a,
                                           p.updateProjectionMatrix()
  }
}
window.addEventListener('resize', ne);
ne();
async function Ve() {
  const e = new he().setDataType(ke),
        a = await new Promise(n => {e.load(Ae, n)});
  ae(a);
  const i = await Me(qe);
  ee(i)
}
function re() {
  b = !0, U.innerText = '构建中...', h(!0), L('RayTracing'),
  setTimeout(() => {t.buildScene(s, p).then(() => {C = !0, H()})}, 100)
}
function le() {
  h(!1), P = !0, O()
}
function se() {
  G = new Map, s.traverse(e => {
    if (e.isMesh && e.material) {
      let a = G.get(e.material);
      a === void 0 ? (e.material.isMeshStandardMaterial ?
                          (e.realTimeMaterial = e.material,
                           e.rayTracingMaterial =
                               new Y().fromStandardMaterial(e.material)) :
                          e.material.isRayTracingMaterial ||
                              (e.realTimeMaterial = e.material,
                               e.rayTracingMaterial =
                                   new Y().fromBasicMaterial(e.material)),
                      G.set(e.material, e.rayTracingMaterial)) :
                     (e.realTimeMaterial = e.material, e.rayTracingMaterial = a)
    }
  })
}
function oe() {
  s.traverse(
      e => {
          e.isMesh && e.needUpdateRayTracingMaterial &&
          (e.rayTracingMaterial.fromStandardMaterial(e.realTimeMaterial),
           e.needUpdateRayTracingMaterial = !1)})
}
function L(e) {
  s.traverse(
      a => {
          a.isMesh &&
          (e === 'RealTime' ?
               a.material.isRayTracingMaterial && a.realTimeMaterial &&
                   (a.material = a.realTimeMaterial) :
               !a.material.isRayTracingMaterial && a.rayTracingMaterial &&
                   (a.material = a.rayTracingMaterial))})
}
function ce(e) {
  e === 'RayTracing' ? (M && M.show(), f && f.hide()) : M && M.hide()
}
function de() {
  d === 'RealTime' ? ue() : B = !0
}
function ue() {
  cancelAnimationFrame(J), cancelAnimationFrame(V),
      d === 'RealTime' ?
      (s.remove(c), c.enabled = !1, L('RayTracing'),
       C ? (D && (t.updateEnvLight(), t.needsUpdate = !0, D = !1),
            v && (t.updateMeshTransform(), t.needsUpdate = !0, v = !1),
            S && (oe(), t.updateMeshMaterial(), t.needsUpdate = !0, S = !1),
            H()) :
           (S && oe(), re()),
       ce('RayTracing'), d = 'RayTracing') :
      (m.resetState(), L('RealTime'), P ? O() : le(), c.enabled = !0,
       ce('RealTime'), d = 'RealTime'),
      w.enabled = !0
}
function H(e) {
  V = requestAnimationFrame(H), w.update(), I && I.begin(), t.render(s, p),
  I && I.end(),
  j && j.dataBegin &&
      (k = t.getTotalSamples(),
       Q != k && (j.innerText = `Samples: ${k}`, Q = k))
}
function O() {
  J = requestAnimationFrame(O), w.update(), m && m.render(s, p)
}
async function Je() {
  await Ve(), se(), d === 'RealTime' ? le() : re(), ze(), z.innerText = d
}
Je();
