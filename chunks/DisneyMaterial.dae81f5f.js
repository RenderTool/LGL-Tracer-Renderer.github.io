import{C as i,d as t}from"./vendor.b603f603.js";import{f as a}from"./utils.684b27f5.js";class l extends a{constructor(s){super();this.materialType="Disney",this.workflow="Metalness",this.color=new i(16777215),this.roughness=.5,this.metalness=0,this.map=null,this.emissive=new i(0),this.emissiveMap=null,this.normalMap=null,this.normalScale=new t(1,1),this.roughnessMap=null,this.metalnessMap=null,this.specularTint=0,this.sheen=0,this.sheenTint=.5,this.clearcoat=0,this.clearcoatRoughness=0,this.subsurface=0,this.alpha=1,this.ior=1.5,this.transmission=0,this.atDistance=1,this.extinction=new i(16777215),this.anisotropic=0,this.specularColor=new i(16777215),this.glossiness=1,this.specularMap=null,this.glossinessMap=null,this.setValues(s)}copy(s){return this.color=new i().copy(s.color),this.roughness=s.roughness,this.metalness=s.metalness,this.map=s.map,this.emissive=new i().copy(s.emissive),this.emissiveMap=s.emissiveMap,this.normalMap=s.normalMap,this.normalScale=new t().copy(s.normalScale),this.roughnessMap=s.roughnessMap,this.metalnessMap=s.metalnessMap,this.specularTint=s.specularTint,this.sheen=s.sheen,this.sheenTint=s.sheenTint,this.clearcoat=s.clearcoat,this.clearcoatRoughness=s.clearcoatRoughness,this.subsurface=s.subsurface,this.transmission=s.transmission,this.ior=s.ior,this.atDistance=s.atDistance,this.anisotropic=s.anisotropic,this.extinction=new i().copy(s.extinction),this.alpha=s.alpha,this}clone(){return new this.constructor().copy(this)}fromBasicMaterial(s){return this.name=s.name,s.color&&this.color.copy(s.color),s.map&&(this.map=s.map),this}fromStandardMaterial(s){return this.name=s.name,this.color.copy(s.color),this.roughness=s.roughness,this.metalness=s.metalness,this.transmission=s.transmission||0,this.ior=s.ior||1.5,this.clearcoat=s.clearcoat||0,this.clearcoatRoughness=s.clearcoatRoughness||0,this.sheen=s.sheen||0,this.sheenTint=s.sheenTint||.5,this.alpha=s.opacity,this.map=s.map,this.emissive.copy(s.emissive),this.emissiveMap=s.emissiveMap,this.normalMap=s.normalMap,this.normalScale.copy(s.normalScale),this.roughnessMap=s.roughnessMap,this.metalnessMap=s.metalnessMap,s.isGLTFSpecularGlossinessMaterial&&(this.workflow="Specular",this.specularColor.copy(s.specular),this.glossiness=s.glossiness,this.specularMap=s.specularMap,this.glossinessMap=s.glossinessMap),this}}export{l as D};