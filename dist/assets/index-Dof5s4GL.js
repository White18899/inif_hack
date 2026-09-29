var Ed=Object.defineProperty;var Td=(s,t,e)=>t in s?Ed(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Zn=(s,t,e)=>Td(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wo="160",Hi={ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bd=0,Rl=1,wd=2,Fh=1,Ad=2,Gn=3,di=0,Ve=1,pn=2,qn=0,pr=1,Ue=2,Pl=3,Ll=4,Cd=5,Ci=100,Rd=101,Pd=102,Dl=103,Il=104,Ld=200,Dd=201,Id=202,Ud=203,xo=204,vo=205,Nd=206,Od=207,Fd=208,Bd=209,zd=210,kd=211,Gd=212,Hd=213,Vd=214,Wd=0,Xd=1,qd=2,Ks=3,Yd=4,jd=5,$d=6,Kd=7,Bh=0,Zd=1,Jd=2,li=0,zh=1,kh=2,Gh=3,Xo=4,Qd=5,Hh=6,Vh=300,vr=301,Mr=302,Zs=303,Mo=304,da=306,jr=1e3,Tn=1001,yo=1002,ze=1003,Ul=1004,ba=1005,fn=1006,tf=1007,$r=1008,ci=1009,ef=1010,nf=1011,qo=1012,Wh=1013,ii=1014,ri=1015,Yn=1016,Xh=1017,qh=1018,Li=1020,rf=1021,bn=1023,sf=1024,af=1025,Di=1026,yr=1027,of=1028,Yh=1029,lf=1030,jh=1031,$h=1033,wa=33776,Aa=33777,Ca=33778,Ra=33779,Nl=35840,Ol=35841,Fl=35842,Bl=35843,Kh=36196,zl=37492,kl=37496,Gl=37808,Hl=37809,Vl=37810,Wl=37811,Xl=37812,ql=37813,Yl=37814,jl=37815,$l=37816,Kl=37817,Zl=37818,Jl=37819,Ql=37820,tc=37821,Pa=36492,ec=36494,nc=36495,cf=36283,ic=36284,rc=36285,sc=36286,Zh=3e3,Ii=3001,hf=3200,uf=3201,Jh=0,df=1,mn="",Ce="srgb",jn="srgb-linear",Yo="display-p3",fa="display-p3-linear",Js="linear",ne="srgb",Qs="rec709",ta="p3",Wi=7680,ac=519,ff=512,pf=513,mf=514,Qh=515,gf=516,_f=517,xf=518,vf=519,oc=35044,lc="300 es",So=1035,Xn=2e3,ea=2001;class zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vr=Math.PI/180,Eo=180/Math.PI;function ss(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[s&255]+De[s>>8&255]+De[s>>16&255]+De[s>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Re(s,t,e){return Math.max(t,Math.min(e,s))}function Mf(s,t){return(s%t+t)%t}function La(s,t,e){return(1-e)*s+e*t}function cc(s){return(s&s-1)===0&&s!==0}function To(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ir(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ke(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const yf={DEG2RAD:Vr};class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,i,r,a,o,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],v=i[1],x=i[4],y=i[7],w=i[2],b=i[5],S=i[8];return r[0]=a*g+o*v+l*w,r[3]=a*m+o*x+l*b,r[6]=a*p+o*y+l*S,r[1]=c*g+h*v+d*w,r[4]=c*m+h*x+d*b,r[7]=c*p+h*y+d*S,r[2]=u*g+f*v+_*w,r[5]=u*m+f*x+_*b,r[8]=u*p+f*y+_*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,_=e*d+n*u+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=u*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-o*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Da.makeScale(t,e)),this}rotate(t){return this.premultiply(Da.makeRotation(-t)),this}translate(t,e){return this.premultiply(Da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Da=new Wt;function tu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function na(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sf(){const s=na("canvas");return s.style.display="block",s}const hc={};function Wr(s){s in hc||(hc[s]=!0,console.warn(s))}const uc=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dc=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ds={[jn]:{transfer:Js,primaries:Qs,toReference:s=>s,fromReference:s=>s},[Ce]:{transfer:ne,primaries:Qs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[fa]:{transfer:Js,primaries:ta,toReference:s=>s.applyMatrix3(dc),fromReference:s=>s.applyMatrix3(uc)},[Yo]:{transfer:ne,primaries:ta,toReference:s=>s.convertSRGBToLinear().applyMatrix3(dc),fromReference:s=>s.applyMatrix3(uc).convertLinearToSRGB()}},Ef=new Set([jn,fa]),Zt={enabled:!0,_workingColorSpace:jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ef.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=ds[t].toReference,i=ds[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return ds[s].primaries},getTransfer:function(s){return s===mn?Js:ds[s].transfer}};function mr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ia(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Xi;class eu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xi===void 0&&(Xi=na("canvas")),Xi.width=t.width,Xi.height=t.height;const n=Xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=na("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=mr(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mr(e[n]/255)*255):e[n]=mr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Tf=0;class nu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=ss(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ua(i[a].image)):r.push(Ua(i[a]))}else r=Ua(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ua(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?eu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bf=0;class We extends zi{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=Tn,i=Tn,r=fn,a=$r,o=bn,l=ci,c=We.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=ss(),this.name="",this.source=new nu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ii?Ce:mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jr:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jr:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ce?Ii:Zh}set encoding(t){Wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ii?Ce:mn}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Vh;We.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,i=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,y=(f+1)/2,w=(p+1)/2,b=(h+u)/4,S=(d+g)/4,D=(_+m)/4;return x>y&&x>w?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=b/n,r=S/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=D/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=S/r,i=D/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-g)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wf extends zi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Wr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ii?Ce:mn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new We(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends wf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class iu extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Af extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],f=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(d!==g||l!==u||c!==f||h!==_){let m=1-o;const p=l*u+c*f+h*_+d*g,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),b=Math.atan2(w,p*v);m=Math.sin(m*b)/w,o=Math.sin(o*b)/w}const y=o*v;if(l=l*m+u*y,c=c*m+f*y,h=h*m+_*y,d=d*m+g*y,m===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*d+l*f-c*u,t[e+1]=l*_+h*u+c*d-o*f,t[e+2]=c*_+h*f+o*u-l*d,t[e+3]=h*_-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Na.copy(this).projectOnVector(t),this.sub(Na)}reflect(t){return this.sub(Na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new L,fc=new Bi;class as{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox)),fs.applyMatrix4(t.matrixWorld),this.union(fs)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ur),ps.subVectors(this.max,Ur),qi.subVectors(t.a,Ur),Yi.subVectors(t.b,Ur),ji.subVectors(t.c,Ur),Jn.subVectors(Yi,qi),Qn.subVectors(ji,Yi),vi.subVectors(qi,ji);let e=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-vi.z,vi.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,vi.z,0,-vi.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-vi.y,vi.x,0];return!Oa(e,qi,Yi,ji,ps)||(e=[1,0,0,0,1,0,0,0,1],!Oa(e,qi,Yi,ji,ps))?!1:(ms.crossVectors(Jn,Qn),e=[ms.x,ms.y,ms.z],Oa(e,qi,Yi,ji,ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new L,new L,new L,new L,new L,new L,new L,new L],xn=new L,fs=new as,qi=new L,Yi=new L,ji=new L,Jn=new L,Qn=new L,vi=new L,Ur=new L,ps=new L,ms=new L,Mi=new L;function Oa(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Mi.fromArray(s,r);const o=i.x*Math.abs(Mi.x)+i.y*Math.abs(Mi.y)+i.z*Math.abs(Mi.z),l=t.dot(Mi),c=e.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Cf=new as,Nr=new L,Fa=new L;class os{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Cf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nr.subVectors(t,this.center);const e=Nr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Nr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nr.copy(t.center).add(Fa)),this.expandByPoint(Nr.copy(t.center).sub(Fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new L,Ba=new L,gs=new L,ti=new L,za=new L,_s=new L,ka=new L;class ls{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ba.copy(t).add(e).multiplyScalar(.5),gs.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(Ba);const r=t.distanceTo(e)*.5,a=-this.direction.dot(gs),o=ti.dot(this.direction),l=-ti.dot(gs),c=ti.lengthSq(),h=Math.abs(1-a*a);let d,u,f,_;if(h>0)if(d=a*l-o,u=a*o-l,_=r*h,d>=0)if(u>=-_)if(u<=_){const g=1/h;d*=g,u*=g,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ba).addScaledVector(gs,u),f}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),i=On.dot(On)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,i,r){za.subVectors(e,t),_s.subVectors(n,t),ka.crossVectors(za,_s);let a=this.direction.dot(ka),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ti.subVectors(this.origin,t);const l=o*this.direction.dot(_s.crossVectors(ti,_s));if(l<0)return null;const c=o*this.direction.dot(za.cross(ti));if(c<0||l+c>a)return null;const h=-o*ti.dot(ka);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,i,r,a,o,l,c,h,d,u,f,_,g,m){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,u,f,_,g,m)}set(t,e,n,i,r,a,o,l,c,h,d,u,f,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),a=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,_=o*h,g=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=u-g*c,e[9]=-o*l,e[2]=g-u*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,_=c*h,g=c*d;e[0]=u+g*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=g+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,_=c*h,g=c*d;e[0]=u-g*o,e[4]=-a*d,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=g-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,_=o*h,g=o*d;e[0]=l*h,e[4]=_*c-f,e[8]=u*c+g,e[1]=l*d,e[5]=g*c+u,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-u*d,e[8]=_*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+_,e[10]=u-g*d}else if(t.order==="XZY"){const u=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+g,e[5]=a*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=o*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rf,t,Pf)}lookAt(t,e,n){const i=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),ei.crossVectors(n,Je),ei.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),ei.crossVectors(n,Je)),ei.normalize(),xs.crossVectors(Je,ei),i[0]=ei.x,i[4]=xs.x,i[8]=Je.x,i[1]=ei.y,i[5]=xs.y,i[9]=Je.y,i[2]=ei.z,i[6]=xs.z,i[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],v=n[3],x=n[7],y=n[11],w=n[15],b=i[0],S=i[4],D=i[8],M=i[12],T=i[1],z=i[5],V=i[9],$=i[13],P=i[2],N=i[6],F=i[10],G=i[14],O=i[3],U=i[7],W=i[11],K=i[15];return r[0]=a*b+o*T+l*P+c*O,r[4]=a*S+o*z+l*N+c*U,r[8]=a*D+o*V+l*F+c*W,r[12]=a*M+o*$+l*G+c*K,r[1]=h*b+d*T+u*P+f*O,r[5]=h*S+d*z+u*N+f*U,r[9]=h*D+d*V+u*F+f*W,r[13]=h*M+d*$+u*G+f*K,r[2]=_*b+g*T+m*P+p*O,r[6]=_*S+g*z+m*N+p*U,r[10]=_*D+g*V+m*F+p*W,r[14]=_*M+g*$+m*G+p*K,r[3]=v*b+x*T+y*P+w*O,r[7]=v*S+x*z+y*N+w*U,r[11]=v*D+x*V+y*F+w*W,r[15]=v*M+x*$+y*G+w*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*l*d-i*c*d-r*o*u+n*c*u+i*o*f-n*l*f)+g*(+e*l*f-e*c*u+r*a*u-i*a*f+i*c*h-r*l*h)+m*(+e*c*d-e*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-e*l*d+e*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],v=d*m*c-g*u*c+g*l*f-o*m*f-d*l*p+o*u*p,x=_*u*c-h*m*c-_*l*f+a*m*f+h*l*p-a*u*p,y=h*g*c-_*d*c+_*o*f-a*g*f-h*o*p+a*d*p,w=_*d*l-h*g*l-_*o*u+a*g*u+h*o*m-a*d*m,b=e*v+n*x+i*y+r*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/b;return t[0]=v*S,t[1]=(g*u*r-d*m*r-g*i*f+n*m*f+d*i*p-n*u*p)*S,t[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*p+n*l*p)*S,t[3]=(d*l*r-o*u*r-d*i*c+n*u*c+o*i*f-n*l*f)*S,t[4]=x*S,t[5]=(h*m*r-_*u*r+_*i*f-e*m*f-h*i*p+e*u*p)*S,t[6]=(_*l*r-a*m*r-_*i*c+e*m*c+a*i*p-e*l*p)*S,t[7]=(a*u*r-h*l*r+h*i*c-e*u*c-a*i*f+e*l*f)*S,t[8]=y*S,t[9]=(_*d*r-h*g*r-_*n*f+e*g*f+h*n*p-e*d*p)*S,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*p+e*o*p)*S,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*f-e*o*f)*S,t[12]=w*S,t[13]=(h*g*i-_*d*i+_*n*u-e*g*u-h*n*m+e*d*m)*S,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*m-e*o*m)*S,t[15]=(a*d*i-h*o*i+h*n*l-e*d*l-a*n*u+e*o*u)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,_=r*d,g=a*h,m=a*d,p=o*d,v=l*c,x=l*h,y=l*d,w=n.x,b=n.y,S=n.z;return i[0]=(1-(g+p))*w,i[1]=(f+y)*w,i[2]=(_-x)*w,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(u+p))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(_+x)*S,i[9]=(m-v)*S,i[10]=(1-(u+g))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=$i.set(i[0],i[1],i[2]).length();const a=$i.set(i[4],i[5],i[6]).length(),o=$i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],vn.copy(this);const c=1/r,h=1/a,d=1/o;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,e.setFromRotationMatrix(vn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Xn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,_;if(o===Xn)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ea)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Xn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(a-r),u=(e+t)*c,f=(n+i)*h;let _,g;if(o===Xn)_=(a+r)*d,g=-2*d;else if(o===ea)_=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $i=new L,vn=new de,Rf=new L(0,0,0),Pf=new L(1,1,1),ei=new L,xs=new L,Je=new L,pc=new de,mc=new Bi;class pa{constructor(t=0,e=0,n=0,i=pa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mc.setFromEuler(this),this.setFromQuaternion(mc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pa.DEFAULT_ORDER="XYZ";class jo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lf=0;const gc=new L,Ki=new Bi,Fn=new de,vs=new L,Or=new L,Df=new L,If=new Bi,_c=new L(1,0,0),xc=new L(0,1,0),vc=new L(0,0,1),Uf={type:"added"},Nf={type:"removed"};class we extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new L,e=new pa,n=new Bi,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new Wt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(_c,t)}rotateY(t){return this.rotateOnAxis(xc,t)}rotateZ(t){return this.rotateOnAxis(vc,t)}translateOnAxis(t,e){return gc.copy(t).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_c,t)}translateY(t){return this.translateOnAxis(xc,t)}translateZ(t){return this.translateOnAxis(vc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vs.copy(t):vs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Or,vs,this.up):Fn.lookAt(vs,Or,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),Ki.setFromRotationMatrix(Fn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Uf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,t,Df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,If,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}we.DEFAULT_UP=new L(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new L,Bn=new L,Ga=new L,zn=new L,Zi=new L,Ji=new L,Mc=new L,Ha=new L,Va=new L,Wa=new L;let Ms=!1;class en{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Mn.subVectors(t,e),i.cross(Mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Mn.subVectors(i,e),Bn.subVectors(n,e),Ga.subVectors(t,e);const a=Mn.dot(Mn),o=Mn.dot(Bn),l=Mn.dot(Ga),c=Bn.dot(Bn),h=Bn.dot(Ga),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getUV(t,e,n,i,r,a,o,l){return Ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ms=!0),this.getInterpolation(t,e,n,i,r,a,o,l)}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static isFrontFacing(t,e,n,i){return Mn.subVectors(n,e),Bn.subVectors(t,e),Mn.cross(Bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),Mn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ms=!0),en.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return en.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Zi.subVectors(i,n),Ji.subVectors(r,n),Ha.subVectors(t,n);const l=Zi.dot(Ha),c=Ji.dot(Ha);if(l<=0&&c<=0)return e.copy(n);Va.subVectors(t,i);const h=Zi.dot(Va),d=Ji.dot(Va);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Zi,a);Wa.subVectors(t,r);const f=Zi.dot(Wa),_=Ji.dot(Wa);if(_>=0&&f<=_)return e.copy(r);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Ji,o);const m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return Mc.subVectors(r,i),o=(d-h)/(d-h+(f-_)),e.copy(i).addScaledVector(Mc,o);const p=1/(m+g+u);return a=g*p,o=u*p,e.copy(n).addScaledVector(Zi,a).addScaledVector(Ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Xa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=Mf(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Xa(a,r,t+1/3),this.g=Xa(a,r,t),this.b=Xa(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){const n=ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}copyLinearToSRGB(t){return this.r=Ia(t.r),this.g=Ia(t.g),this.b=Ia(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return Zt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Re(Ie.r*255,0,255))*65536+Math.round(Re(Ie.g*255,0,255))*256+Math.round(Re(Ie.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,i=Ie.g,r=Ie.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Ce){Zt.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,i=Ie.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(ys);const n=La(ni.h,ys.h,e),i=La(ni.s,ys.s,e),r=La(ni.l,ys.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new bt;bt.NAMES=ru;let Of=0;class ki extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=pr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=vo,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xo&&(n.blendSrc=this.blendSrc),this.blendDst!==vo&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class En extends ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new L,Ss=new xt;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ss.fromBufferAttribute(this,e),Ss.applyMatrix3(t),this.setXY(e,Ss.x,Ss.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ir(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oc&&(t.usage=this.usage),t}}class su extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class au extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ff=0;const un=new de,qa=new we,Qi=new L,Qe=new as,Fr=new as,be=new L;class ge extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tu(t)?au:su)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return qa.lookAt(t),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(Qe.min,Fr.min),Qe.expandByPoint(be),be.addVectors(Qe.max,Fr.max),Qe.expandByPoint(be)):(Qe.expandByPoint(Fr.min),Qe.expandByPoint(Fr.max))}Qe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)be.fromBufferAttribute(o,c),l&&(Qi.fromBufferAttribute(t,c),be.add(Qi)),i=Math.max(i,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new L,h[T]=new L;const d=new L,u=new L,f=new L,_=new xt,g=new xt,m=new xt,p=new L,v=new L;function x(T,z,V){d.fromArray(i,T*3),u.fromArray(i,z*3),f.fromArray(i,V*3),_.fromArray(a,T*2),g.fromArray(a,z*2),m.fromArray(a,V*2),u.sub(d),f.sub(d),g.sub(_),m.sub(_);const $=1/(g.x*m.y-m.x*g.y);isFinite($)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar($),v.copy(f).multiplyScalar(g.x).addScaledVector(u,-m.x).multiplyScalar($),c[T].add(p),c[z].add(p),c[V].add(p),h[T].add(v),h[z].add(v),h[V].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,z=y.length;T<z;++T){const V=y[T],$=V.start,P=V.count;for(let N=$,F=$+P;N<F;N+=3)x(n[N+0],n[N+1],n[N+2])}const w=new L,b=new L,S=new L,D=new L;function M(T){S.fromArray(r,T*3),D.copy(S);const z=c[T];w.copy(z),w.sub(S.multiplyScalar(S.dot(z))).normalize(),b.crossVectors(D,z);const $=b.dot(h[T])<0?-1:1;l[T*4]=w.x,l[T*4+1]=w.y,l[T*4+2]=w.z,l[T*4+3]=$}for(let T=0,z=y.length;T<z;++T){const V=y[T],$=V.start,P=V.count;for(let N=$,F=$+P;N<F;N+=3)M(n[N+0]),M(n[N+1]),M(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){const _=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)u[_++]=c[f++]}return new Xe(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ge,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yc=new de,yi=new ls,Es=new os,Sc=new L,tr=new L,er=new L,nr=new L,Ya=new L,Ts=new L,bs=new xt,ws=new xt,As=new xt,Ec=new L,Tc=new L,bc=new L,Cs=new L,Rs=new L;class Me extends we{constructor(t=new ge,e=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Ts.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Ya.fromBufferAttribute(d,t),a?Ts.addScaledVector(Ya,h):Ts.addScaledVector(Ya.sub(e),h))}e.add(Ts)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(Es.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Es,Sc)===null||yi.origin.distanceToSquared(Sc)>(t.far-t.near)**2))&&(yc.copy(r).invert(),yi.copy(t.ray).applyMatrix4(yc),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,w=x;y<w;y+=3){const b=o.getX(y),S=o.getX(y+1),D=o.getX(y+2);i=Ps(this,p,t,n,c,h,d,b,S,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);i=Ps(this,a,t,n,c,h,d,v,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,w=x;y<w;y+=3){const b=y,S=y+1,D=y+2;i=Ps(this,p,t,n,c,h,d,b,S,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=m,x=m+1,y=m+2;i=Ps(this,a,t,n,c,h,d,v,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Bf(s,t,e,n,i,r,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===di,o),l===null)return null;Rs.copy(o),Rs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Rs);return c<e.near||c>e.far?null:{distance:c,point:Rs.clone(),object:s}}function Ps(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,tr),s.getVertexPosition(l,er),s.getVertexPosition(c,nr);const h=Bf(s,t,e,n,tr,er,nr,Cs);if(h){i&&(bs.fromBufferAttribute(i,o),ws.fromBufferAttribute(i,l),As.fromBufferAttribute(i,c),h.uv=en.getInterpolation(Cs,tr,er,nr,bs,ws,As,new xt)),r&&(bs.fromBufferAttribute(r,o),ws.fromBufferAttribute(r,l),As.fromBufferAttribute(r,c),h.uv1=en.getInterpolation(Cs,tr,er,nr,bs,ws,As,new xt),h.uv2=h.uv1),a&&(Ec.fromBufferAttribute(a,o),Tc.fromBufferAttribute(a,l),bc.fromBufferAttribute(a,c),h.normal=en.getInterpolation(Cs,tr,er,nr,Ec,Tc,bc,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new L,materialIndex:0};en.getNormal(tr,er,nr,d.normal),h.face=d}return h}class Rr extends ge{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2));function _(g,m,p,v,x,y,w,b,S,D,M){const T=y/S,z=w/D,V=y/2,$=w/2,P=b/2,N=S+1,F=D+1;let G=0,O=0;const U=new L;for(let W=0;W<F;W++){const K=W*z-$;for(let Z=0;Z<N;Z++){const Y=Z*T-V;U[g]=Y*v,U[m]=K*x,U[p]=P,c.push(U.x,U.y,U.z),U[g]=0,U[m]=0,U[p]=b>0?1:-1,h.push(U.x,U.y,U.z),d.push(Z/S),d.push(1-W/D),G+=1}}for(let W=0;W<D;W++)for(let K=0;K<S;K++){const Z=u+K+N*W,Y=u+K+N*(W+1),J=u+(K+1)+N*(W+1),st=u+(K+1)+N*W;l.push(Z,Y,st),l.push(Y,J,st),O+=6}o.addGroup(f,O,M),f+=O,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Sr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Fe(s){const t={};for(let e=0;e<s.length;e++){const n=Sr(s[e]);for(const i in n)t[i]=n[i]}return t}function zf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ou(s){return s.getRenderTarget()===null?s.outputColorSpace:Zt.workingColorSpace}const Kr={clone:Sr,merge:Fe};var kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class He extends ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kf,this.fragmentShader=Gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Sr(t.uniforms),this.uniformsGroups=zf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class lu extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nn extends lu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ir=-90,rr=1;class Hf extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new nn(ir,rr,t,e);i.layers=this.layers,this.add(i);const r=new nn(ir,rr,t,e);r.layers=this.layers,this.add(r);const a=new nn(ir,rr,t,e);a.layers=this.layers,this.add(a);const o=new nn(ir,rr,t,e);o.layers=this.layers,this.add(o);const l=new nn(ir,rr,t,e);l.layers=this.layers,this.add(l);const c=new nn(ir,rr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class cu extends We{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:vr,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vf extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Wr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ii?Ce:mn),this.texture=new cu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Rr(5,5,5),r=new He({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:qn});r.uniforms.tEquirect.value=e;const a=new Me(i,r),o=e.minFilter;return e.minFilter===$r&&(e.minFilter=fn),new Hf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const ja=new L,Wf=new L,Xf=new Wt;class Vn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ja.subVectors(n,e).cross(Wf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ja),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xf.getNormalMatrix(t),i=this.coplanarPoint(ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new os,Ls=new L;class $o{constructor(t=new Vn,e=new Vn,n=new Vn,i=new Vn,r=new Vn,a=new Vn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],v=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-r,u-c,m-f,y-p).normalize(),n[1].setComponents(l+r,u+c,m+f,y+p).normalize(),n[2].setComponents(l+a,u+h,m+_,y+v).normalize(),n[3].setComponents(l-a,u-h,m-_,y-v).normalize(),n[4].setComponents(l-o,u-d,m-g,y-x).normalize(),e===Xn)n[5].setComponents(l+o,u+d,m+g,y+x).normalize();else if(e===ea)n[5].setComponents(o,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ls.x=i.normal.x>0?t.max.x:t.min.x,Ls.y=i.normal.y>0?t.max.y:t.min.y,Ls.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hu(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function qf(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,f=d.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=s.SHORT;else if(d instanceof Uint32Array)g=s.UNSIGNED_INT;else if(d instanceof Int32Array)g=s.INT;else if(d instanceof Int8Array)g=s.BYTE;else if(d instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,d){const u=h.array,f=h._updateRange,_=h.updateRanges;if(s.bindBuffer(d,c),f.count===-1&&_.length===0&&s.bufferSubData(d,0,u),_.length!==0){for(let g=0,m=_.length;g<m;g++){const p=_[g];e?s.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):s.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,i(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}class ma extends ge{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const v=p*u-a;for(let x=0;x<c;x++){const y=x*d-r;_.push(y,-v,0),g.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const x=v+c*p,y=v+c*(p+1),w=v+1+c*(p+1),b=v+1+c*p;f.push(x,y,b),f.push(y,w,b)}this.setIndex(f),this.setAttribute("position",new Jt(_,3)),this.setAttribute("normal",new Jt(g,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ma(t.width,t.height,t.widthSegments,t.heightSegments)}}var Yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ep=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ap=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,op=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_p=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Np=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,im=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,am=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,lm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ym=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ag=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ug=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_g=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:Yf,alphahash_pars_fragment:jf,alphamap_fragment:$f,alphamap_pars_fragment:Kf,alphatest_fragment:Zf,alphatest_pars_fragment:Jf,aomap_fragment:Qf,aomap_pars_fragment:tp,batching_pars_vertex:ep,batching_vertex:np,begin_vertex:ip,beginnormal_vertex:rp,bsdfs:sp,iridescence_fragment:ap,bumpmap_pars_fragment:op,clipping_planes_fragment:lp,clipping_planes_pars_fragment:cp,clipping_planes_pars_vertex:hp,clipping_planes_vertex:up,color_fragment:dp,color_pars_fragment:fp,color_pars_vertex:pp,color_vertex:mp,common:gp,cube_uv_reflection_fragment:_p,defaultnormal_vertex:xp,displacementmap_pars_vertex:vp,displacementmap_vertex:Mp,emissivemap_fragment:yp,emissivemap_pars_fragment:Sp,colorspace_fragment:Ep,colorspace_pars_fragment:Tp,envmap_fragment:bp,envmap_common_pars_fragment:wp,envmap_pars_fragment:Ap,envmap_pars_vertex:Cp,envmap_physical_pars_fragment:kp,envmap_vertex:Rp,fog_vertex:Pp,fog_pars_vertex:Lp,fog_fragment:Dp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Up,lightmap_fragment:Np,lightmap_pars_fragment:Op,lights_lambert_fragment:Fp,lights_lambert_pars_fragment:Bp,lights_pars_begin:zp,lights_toon_fragment:Gp,lights_toon_pars_fragment:Hp,lights_phong_fragment:Vp,lights_phong_pars_fragment:Wp,lights_physical_fragment:Xp,lights_physical_pars_fragment:qp,lights_fragment_begin:Yp,lights_fragment_maps:jp,lights_fragment_end:$p,logdepthbuf_fragment:Kp,logdepthbuf_pars_fragment:Zp,logdepthbuf_pars_vertex:Jp,logdepthbuf_vertex:Qp,map_fragment:tm,map_pars_fragment:em,map_particle_fragment:nm,map_particle_pars_fragment:im,metalnessmap_fragment:rm,metalnessmap_pars_fragment:sm,morphcolor_vertex:am,morphnormal_vertex:om,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:hm,normal_fragment_maps:um,normal_pars_fragment:dm,normal_pars_vertex:fm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:xm,iridescence_pars_fragment:vm,opaque_fragment:Mm,packing:ym,premultiplied_alpha_fragment:Sm,project_vertex:Em,dithering_fragment:Tm,dithering_pars_fragment:bm,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Cm,shadowmap_pars_vertex:Rm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Lm,skinbase_vertex:Dm,skinning_pars_vertex:Im,skinning_vertex:Um,skinnormal_vertex:Nm,specularmap_fragment:Om,specularmap_pars_fragment:Fm,tonemapping_fragment:Bm,tonemapping_pars_fragment:zm,transmission_fragment:km,transmission_pars_fragment:Gm,uv_pars_fragment:Hm,uv_pars_vertex:Vm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:qm,background_frag:Ym,backgroundCube_vert:jm,backgroundCube_frag:$m,cube_vert:Km,cube_frag:Zm,depth_vert:Jm,depth_frag:Qm,distanceRGBA_vert:tg,distanceRGBA_frag:eg,equirect_vert:ng,equirect_frag:ig,linedashed_vert:rg,linedashed_frag:sg,meshbasic_vert:ag,meshbasic_frag:og,meshlambert_vert:lg,meshlambert_frag:cg,meshmatcap_vert:hg,meshmatcap_frag:ug,meshnormal_vert:dg,meshnormal_frag:fg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:_g,meshtoon_vert:xg,meshtoon_frag:vg,points_vert:Mg,points_frag:yg,shadow_vert:Sg,shadow_frag:Eg,sprite_vert:Tg,sprite_frag:bg},ot={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Rn={basic:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new bt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Fe([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Fe([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new bt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Fe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Fe([ot.points,ot.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Fe([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Fe([ot.common,ot.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Fe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Fe([ot.sprite,ot.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Fe([ot.common,ot.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Fe([ot.lights,ot.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Rn.physical={uniforms:Fe([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Ds={r:0,b:0,g:0};function wg(s,t,e,n,i,r,a){const o=new bt(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function _(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?g(o,l):x&&x.isColor&&(g(x,1),v=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===da)?(h===void 0&&(h=new Me(new Rr(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:Sr(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,b,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(x.colorSpace)!==ne,(d!==x||u!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Me(new ma(2,2),new He({name:"BackgroundMaterial",uniforms:Sr(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(x.colorSpace)!==ne,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Ds,ou(s)),n.buffers.color.setClear(Ds.r,Ds.g,Ds.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function Ag(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,h=!1;function d(P,N,F,G,O){let U=!1;if(a){const W=g(G,F,N);c!==W&&(c=W,f(c.object)),U=p(P,G,F,O),U&&v(P,G,F,O)}else{const W=N.wireframe===!0;(c.geometry!==G.id||c.program!==F.id||c.wireframe!==W)&&(c.geometry=G.id,c.program=F.id,c.wireframe=W,U=!0)}O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(U||h)&&(h=!1,D(P,N,F,G),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function g(P,N,F){const G=F.wireframe===!0;let O=o[P.id];O===void 0&&(O={},o[P.id]=O);let U=O[N.id];U===void 0&&(U={},O[N.id]=U);let W=U[G];return W===void 0&&(W=m(u()),U[G]=W),W}function m(P){const N=[],F=[],G=[];for(let O=0;O<i;O++)N[O]=0,F[O]=0,G[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:G,object:P,attributes:{},index:null}}function p(P,N,F,G){const O=c.attributes,U=N.attributes;let W=0;const K=F.getAttributes();for(const Z in K)if(K[Z].location>=0){const J=O[Z];let st=U[Z];if(st===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(st=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(st=P.instanceColor)),J===void 0||J.attribute!==st||st&&J.data!==st.data)return!0;W++}return c.attributesNum!==W||c.index!==G}function v(P,N,F,G){const O={},U=N.attributes;let W=0;const K=F.getAttributes();for(const Z in K)if(K[Z].location>=0){let J=U[Z];J===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));const st={};st.attribute=J,J&&J.data&&(st.data=J.data),O[Z]=st,W++}c.attributes=O,c.attributesNum=W,c.index=G}function x(){const P=c.newAttributes;for(let N=0,F=P.length;N<F;N++)P[N]=0}function y(P){w(P,0)}function w(P,N){const F=c.newAttributes,G=c.enabledAttributes,O=c.attributeDivisors;F[P]=1,G[P]===0&&(s.enableVertexAttribArray(P),G[P]=1),O[P]!==N&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),O[P]=N)}function b(){const P=c.newAttributes,N=c.enabledAttributes;for(let F=0,G=N.length;F<G;F++)N[F]!==P[F]&&(s.disableVertexAttribArray(F),N[F]=0)}function S(P,N,F,G,O,U,W){W===!0?s.vertexAttribIPointer(P,N,F,O,U):s.vertexAttribPointer(P,N,F,G,O,U)}function D(P,N,F,G){if(n.isWebGL2===!1&&(P.isInstancedMesh||G.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const O=G.attributes,U=F.getAttributes(),W=N.defaultAttributeValues;for(const K in U){const Z=U[K];if(Z.location>=0){let Y=O[K];if(Y===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){const J=Y.normalized,st=Y.itemSize,mt=e.get(Y);if(mt===void 0)continue;const gt=mt.buffer,Pt=mt.type,Rt=mt.bytesPerElement,Mt=n.isWebGL2===!0&&(Pt===s.INT||Pt===s.UNSIGNED_INT||Y.gpuType===Wh);if(Y.isInterleavedBufferAttribute){const Ft=Y.data,k=Ft.stride,_e=Y.offset;if(Ft.isInstancedInterleavedBuffer){for(let St=0;St<Z.locationSize;St++)w(Z.location+St,Ft.meshPerAttribute);P.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let St=0;St<Z.locationSize;St++)y(Z.location+St);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let St=0;St<Z.locationSize;St++)S(Z.location+St,st/Z.locationSize,Pt,J,k*Rt,(_e+st/Z.locationSize*St)*Rt,Mt)}else{if(Y.isInstancedBufferAttribute){for(let Ft=0;Ft<Z.locationSize;Ft++)w(Z.location+Ft,Y.meshPerAttribute);P.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Ft=0;Ft<Z.locationSize;Ft++)y(Z.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Ft=0;Ft<Z.locationSize;Ft++)S(Z.location+Ft,st/Z.locationSize,Pt,J,st*Rt,st/Z.locationSize*Ft*Rt,Mt)}}else if(W!==void 0){const J=W[K];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(Z.location,J);break;case 3:s.vertexAttrib3fv(Z.location,J);break;case 4:s.vertexAttrib4fv(Z.location,J);break;default:s.vertexAttrib1fv(Z.location,J)}}}}b()}function M(){V();for(const P in o){const N=o[P];for(const F in N){const G=N[F];for(const O in G)_(G[O].object),delete G[O];delete N[F]}delete o[P]}}function T(P){if(o[P.id]===void 0)return;const N=o[P.id];for(const F in N){const G=N[F];for(const O in G)_(G[O].object),delete G[O];delete N[F]}delete o[P.id]}function z(P){for(const N in o){const F=o[N];if(F[P.id]===void 0)continue;const G=F[P.id];for(const O in G)_(G[O].object),delete G[O];delete F[P.id]}}function V(){$(),h=!0,c!==l&&(c=l,f(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:$,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:y,disableUnusedAttributes:b}}function Cg(s,t,e,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),e.update(d,r,1)}function l(h,d,u){if(u===0)return;let f,_;if(i)f=s,_="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](r,h,d,u),e.update(d,r,u)}function c(h,d,u){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<u;_++)this.render(h[_],d[_]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=d[g];e.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Rg(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,y=a||t.has("OES_texture_float"),w=x&&y,b=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:b}}function Pg(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Vn,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||_===null||_.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,x=v*4;let y=p.clippingState||null;l.value=y,y=h(_,u,x,f);for(let w=0;w!==x;++w)y[w]=e[w];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==g;++x,y+=4)a.copy(d[x]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Lg(s){let t=new WeakMap;function e(a,o){return o===Zs?a.mapping=vr:o===Mo&&(a.mapping=Mr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Zs||o===Mo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Vf(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ko extends lu{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cr=4,wc=[.125,.215,.35,.446,.526,.582],Ri=20,$a=new Ko,Ac=new bt;let Ka=null,Za=0,Ja=0;const wi=(1+Math.sqrt(5))/2,sr=1/wi,Cc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,wi,sr),new L(0,wi,-sr),new L(sr,0,wi),new L(-sr,0,wi),new L(wi,sr,0),new L(-wi,sr,0)];class bo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ka=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ka,Za,Ja),t.scissorTest=!1,Is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vr||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ka=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Yn,format:bn,colorSpace:jn,depthBuffer:!1},i=Rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dg(r)),this._blurMaterial=Ig(r,t,e)}return i}_compileMaterial(t){const e=new Me(this._lodPlanes[0],t);this._renderer.compile(e,$a)}_sceneToCubeUV(t,e,n,i){const o=new nn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Ac),h.toneMapping=li,h.autoClear=!1;const f=new En({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),_=new Me(new Rr,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(Ac),g=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Is(i,v*x,p>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===vr||t.mapping===Mr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Me(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Is(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,$a)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Cc[(i-1)%Cc.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Me(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ri-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Ri;m>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const p=[];let v=0;for(let S=0;S<Ri;++S){const D=S/g,M=Math.exp(-D*D/2);p.push(M),S===0?v+=M:S<m&&(v+=2*M)}for(let S=0;S<p.length;S++)p[S]=p[S]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=_,u.mipInt.value=x-n;const y=this._sizeLods[i],w=3*y*(i>x-cr?i-x+cr:0),b=4*(this._cubeSize-y);Is(e,w,b,3*y,2*y),l.setRenderTarget(e),l.render(d,$a)}}function Dg(s){const t=[],e=[],n=[];let i=s;const r=s-cr+1+wc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-cr?l=wc[a-s+cr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*f),x=new Float32Array(m*_*f),y=new Float32Array(p*_*f);for(let b=0;b<f;b++){const S=b%3*2/3-1,D=b>2?0:-1,M=[S,D,0,S+2/3,D,0,S+2/3,D+1,0,S,D,0,S+2/3,D+1,0,S,D+1,0];v.set(M,g*_*b),x.set(u,m*_*b);const T=[b,b,b,b,b,b];y.set(T,p*_*b)}const w=new ge;w.setAttribute("position",new Xe(v,g)),w.setAttribute("uv",new Xe(x,m)),w.setAttribute("faceIndex",new Xe(y,p)),t.push(w),i>cr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rc(s,t,e){const n=new wn(s,t,e);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Ig(s,t,e){const n=new Float32Array(Ri),i=new L(0,1,0);return new He({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Pc(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Lc(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Zo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ug(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Zs||l===Mo,h=l===vr||l===Mr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new bo(s)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new bo(s));const u=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ng(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Og(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);for(const _ in u.morphAttributes){const g=u.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const _ in u)t.update(u[_],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],s.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,_=d.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let x=0,y=v.length;x<y;x+=3){const w=v[x+0],b=v[x+1],S=v[x+2];u.push(w,b,b,S,S,w)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const w=x+0,b=x+1,S=x+2;u.push(w,b,b,S,S,w)}}else return;const m=new(tu(u)?au:su)(u,1);m.version=g;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Fg(s,t,e,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,_){s.drawElements(r,_,o,f*l),e.update(_,r,1)}function d(f,_,g){if(g===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,_,o,f*l,g),e.update(_,r,g)}function u(f,_,g){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<g;p++)this.render(f[p]/l,_[p]);else{m.multiDrawElementsWEBGL(r,_,0,o,f,0,g);let p=0;for(let v=0;v<g;v++)p+=_[v];e.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function Bg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function zg(s,t){return s[0]-t[0]}function kg(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Gg(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new ie,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(h);if(m===void 0||m.count!==g){let N=function(){$.dispose(),r.delete(h),h.removeEventListener("dispose",N)};var f=N;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),w===!0&&(M=3);let T=h.attributes.position.count*M,z=1;T>t.maxTextureSize&&(z=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const V=new Float32Array(T*z*4*g),$=new iu(V,T,z,g);$.type=ri,$.needsUpdate=!0;const P=M*4;for(let F=0;F<g;F++){const G=b[F],O=S[F],U=D[F],W=T*z*4*F;for(let K=0;K<G.count;K++){const Z=K*P;x===!0&&(a.fromBufferAttribute(G,K),V[W+Z+0]=a.x,V[W+Z+1]=a.y,V[W+Z+2]=a.z,V[W+Z+3]=0),y===!0&&(a.fromBufferAttribute(O,K),V[W+Z+4]=a.x,V[W+Z+5]=a.y,V[W+Z+6]=a.z,V[W+Z+7]=0),w===!0&&(a.fromBufferAttribute(U,K),V[W+Z+8]=a.x,V[W+Z+9]=a.y,V[W+Z+10]=a.z,V[W+Z+11]=U.itemSize===4?a.w:1)}}m={count:g,texture:$,size:new xt(T,z)},r.set(h,m),h.addEventListener("dispose",N)}let p=0;for(let x=0;x<u.length;x++)p+=u[x];const v=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",u),d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const _=u===void 0?0:u.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let y=0;y<_;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<_;y++){const w=g[y];w[0]=y,w[1]=u[y]}g.sort(kg);for(let y=0;y<8;y++)y<_&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(zg);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const w=o[y],b=w[0],S=w[1];b!==Number.MAX_SAFE_INTEGER&&S?(m&&h.getAttribute("morphTarget"+y)!==m[b]&&h.setAttribute("morphTarget"+y,m[b]),p&&h.getAttribute("morphNormal"+y)!==p[b]&&h.setAttribute("morphNormal"+y,p[b]),i[y]=S,v+=S):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),p&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const x=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Hg(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class uu extends We{constructor(t,e,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Di,h!==Di&&h!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Di&&(n=ii),n===void 0&&h===yr&&(n=Li),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const du=new We,fu=new uu(1,1);fu.compareFunction=Qh;const pu=new iu,mu=new Af,gu=new cu,Dc=[],Ic=[],Uc=new Float32Array(16),Nc=new Float32Array(9),Oc=new Float32Array(4);function Pr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Dc[i];if(r===void 0&&(r=new Float32Array(i),Dc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ee(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ga(s,t){let e=Ic[t];e===void 0&&(e=new Int32Array(t),Ic[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Vg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Wg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),Ee(e,t)}}function Xg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),Ee(e,t)}}function qg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),Ee(e,t)}}function Yg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Oc.set(n),s.uniformMatrix2fv(this.addr,!1,Oc),Ee(e,n)}}function jg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Nc.set(n),s.uniformMatrix3fv(this.addr,!1,Nc),Ee(e,n)}}function $g(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Uc.set(n),s.uniformMatrix4fv(this.addr,!1,Uc),Ee(e,n)}}function Kg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Zg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),Ee(e,t)}}function Jg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),Ee(e,t)}}function Qg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),Ee(e,t)}}function t_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function e_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),Ee(e,t)}}function n_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),Ee(e,t)}}function i_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),Ee(e,t)}}function r_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?fu:du;e.setTexture2D(t||r,i)}function s_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||mu,i)}function a_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||gu,i)}function o_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||pu,i)}function l_(s){switch(s){case 5126:return Vg;case 35664:return Wg;case 35665:return Xg;case 35666:return qg;case 35674:return Yg;case 35675:return jg;case 35676:return $g;case 5124:case 35670:return Kg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return Qg;case 5125:return t_;case 36294:return e_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return a_;case 36289:case 36303:case 36311:case 36292:return o_}}function c_(s,t){s.uniform1fv(this.addr,t)}function h_(s,t){const e=Pr(t,this.size,2);s.uniform2fv(this.addr,e)}function u_(s,t){const e=Pr(t,this.size,3);s.uniform3fv(this.addr,e)}function d_(s,t){const e=Pr(t,this.size,4);s.uniform4fv(this.addr,e)}function f_(s,t){const e=Pr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function p_(s,t){const e=Pr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function m_(s,t){const e=Pr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function g_(s,t){s.uniform1iv(this.addr,t)}function __(s,t){s.uniform2iv(this.addr,t)}function x_(s,t){s.uniform3iv(this.addr,t)}function v_(s,t){s.uniform4iv(this.addr,t)}function M_(s,t){s.uniform1uiv(this.addr,t)}function y_(s,t){s.uniform2uiv(this.addr,t)}function S_(s,t){s.uniform3uiv(this.addr,t)}function E_(s,t){s.uniform4uiv(this.addr,t)}function T_(s,t,e){const n=this.cache,i=t.length,r=ga(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||du,r[a])}function b_(s,t,e){const n=this.cache,i=t.length,r=ga(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||mu,r[a])}function w_(s,t,e){const n=this.cache,i=t.length,r=ga(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||gu,r[a])}function A_(s,t,e){const n=this.cache,i=t.length,r=ga(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||pu,r[a])}function C_(s){switch(s){case 5126:return c_;case 35664:return h_;case 35665:return u_;case 35666:return d_;case 35674:return f_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return __;case 35668:case 35672:return x_;case 35669:case 35673:return v_;case 5125:return M_;case 36294:return y_;case 36295:return S_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return A_}}class R_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=l_(e.type)}}class P_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=C_(e.type)}}class L_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function Fc(s,t){s.seq.push(t),s.map[t.id]=t}function D_(s,t,e){const n=s.name,i=n.length;for(Qa.lastIndex=0;;){const r=Qa.exec(n),a=Qa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Fc(e,c===void 0?new R_(o,s,t):new P_(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new L_(o),Fc(e,d)),e=d}}}class Xs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);D_(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Bc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const I_=37297;let U_=0;function N_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function O_(s){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(s);let n;switch(t===e?n="":t===ta&&e===Qs?n="LinearDisplayP3ToLinearSRGB":t===Qs&&e===ta&&(n="LinearSRGBToLinearDisplayP3"),s){case jn:case fa:return[n,"LinearTransferOETF"];case Ce:case Yo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function zc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+N_(s.getShaderSource(t),a)}else return i}function F_(s,t){const e=O_(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function B_(s,t){let e;switch(t){case zh:e="Linear";break;case kh:e="Reinhard";break;case Gh:e="OptimizedCineon";break;case Xo:e="ACESFilmic";break;case Hh:e="AgX";break;case Qd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function z_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hr).join(`
`)}function k_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(hr).join(`
`)}function G_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function H_(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function hr(s){return s!==""}function kc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const V_=/^[ \t]*#include +<([\w\d./]+)>/gm;function wo(s){return s.replace(V_,X_)}const W_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function X_(s,t){let e=kt[t];if(e===void 0){const n=W_.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wo(e)}const q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(s){return s.replace(q_,Y_)}function Y_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Vc(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function j_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Fh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ad?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function $_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case vr:case Mr:t="ENVMAP_TYPE_CUBE";break;case da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function K_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Mr:t="ENVMAP_MODE_REFRACTION";break}return t}function Z_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bh:t="ENVMAP_BLENDING_MULTIPLY";break;case Zd:t="ENVMAP_BLENDING_MIX";break;case Jd:t="ENVMAP_BLENDING_ADD";break}return t}function J_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Q_(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=j_(e),c=$_(e),h=K_(e),d=Z_(e),u=J_(e),f=e.isWebGL2?"":z_(e),_=k_(e),g=G_(r),m=i.createProgram();let p,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hr).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hr).join(`
`),v.length>0&&(v+=`
`)):(p=[Vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),v=[f,Vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?kt.tonemapping_pars_fragment:"",e.toneMapping!==li?B_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,F_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hr).join(`
`)),a=wo(a),a=kc(a,e),a=Gc(a,e),o=wo(o),o=kc(o,e),o=Gc(o,e),a=Hc(a),o=Hc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+p+a,w=x+v+o,b=Bc(i,i.VERTEX_SHADER,y),S=Bc(i,i.FRAGMENT_SHADER,w);i.attachShader(m,b),i.attachShader(m,S),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function D(V){if(s.debug.checkShaderErrors){const $=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(b).trim(),N=i.getShaderInfoLog(S).trim();let F=!0,G=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,b,S);else{const O=zc(i,b,"vertex"),U=zc(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+O+`
`+U)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(P===""||N==="")&&(G=!1);G&&(V.diagnostics={runnable:F,programLog:$,vertexShader:{log:P,prefix:p},fragmentShader:{log:N,prefix:v}})}i.deleteShader(b),i.deleteShader(S),M=new Xs(i,m),T=H_(i,m)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=i.getProgramParameter(m,I_)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=U_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=S,this}let t0=0;class e0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new n0(t),e.set(t,n)),n}}class n0{constructor(t){this.id=t0++,this.code=t,this.usedTimes=0}}function i0(s,t,e,n,i,r,a){const o=new jo,l=new e0,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,T,z,V,$){const P=V.fog,N=$.geometry,F=M.isMeshStandardMaterial?V.environment:null,G=(M.isMeshStandardMaterial?e:t).get(M.envMap||F),O=G&&G.mapping===da?G.image.height:null,U=_[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const W=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,K=W!==void 0?W.length:0;let Z=0;N.morphAttributes.position!==void 0&&(Z=1),N.morphAttributes.normal!==void 0&&(Z=2),N.morphAttributes.color!==void 0&&(Z=3);let Y,J,st,mt;if(U){const fe=Rn[U];Y=fe.vertexShader,J=fe.fragmentShader}else Y=M.vertexShader,J=M.fragmentShader,l.update(M),st=l.getVertexShaderID(M),mt=l.getFragmentShaderID(M);const gt=s.getRenderTarget(),Pt=$.isInstancedMesh===!0,Rt=$.isBatchedMesh===!0,Mt=!!M.map,Ft=!!M.matcap,k=!!G,_e=!!M.aoMap,St=!!M.lightMap,Lt=!!M.bumpMap,pt=!!M.normalMap,Qt=!!M.displacementMap,Nt=!!M.emissiveMap,C=!!M.metalnessMap,E=!!M.roughnessMap,H=M.anisotropy>0,et=M.clearcoat>0,tt=M.iridescence>0,nt=M.sheen>0,_t=M.transmission>0,lt=H&&!!M.anisotropyMap,ut=et&&!!M.clearcoatMap,Tt=et&&!!M.clearcoatNormalMap,Ot=et&&!!M.clearcoatRoughnessMap,Q=tt&&!!M.iridescenceMap,Gt=tt&&!!M.iridescenceThicknessMap,At=nt&&!!M.sheenColorMap,Ct=nt&&!!M.sheenRoughnessMap,vt=!!M.specularMap,ht=!!M.specularColorMap,R=!!M.specularIntensityMap,rt=_t&&!!M.transmissionMap,yt=_t&&!!M.thicknessMap,ft=!!M.gradientMap,it=!!M.alphaMap,I=M.alphaTest>0,at=!!M.alphaHash,ct=!!M.extensions,Dt=!!N.attributes.uv1,wt=!!N.attributes.uv2,Xt=!!N.attributes.uv3;let qt=li;return M.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(qt=s.toneMapping),{isWebGL2:h,shaderID:U,shaderType:M.type,shaderName:M.name,vertexShader:Y,fragmentShader:J,defines:M.defines,customVertexShaderID:st,customFragmentShaderID:mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Rt,instancing:Pt,instancingColor:Pt&&$.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:gt===null?s.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:jn,map:Mt,matcap:Ft,envMap:k,envMapMode:k&&G.mapping,envMapCubeUVHeight:O,aoMap:_e,lightMap:St,bumpMap:Lt,normalMap:pt,displacementMap:u&&Qt,emissiveMap:Nt,normalMapObjectSpace:pt&&M.normalMapType===df,normalMapTangentSpace:pt&&M.normalMapType===Jh,metalnessMap:C,roughnessMap:E,anisotropy:H,anisotropyMap:lt,clearcoat:et,clearcoatMap:ut,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Ot,iridescence:tt,iridescenceMap:Q,iridescenceThicknessMap:Gt,sheen:nt,sheenColorMap:At,sheenRoughnessMap:Ct,specularMap:vt,specularColorMap:ht,specularIntensityMap:R,transmission:_t,transmissionMap:rt,thicknessMap:yt,gradientMap:ft,opaque:M.transparent===!1&&M.blending===pr,alphaMap:it,alphaTest:I,alphaHash:at,combine:M.combine,mapUv:Mt&&g(M.map.channel),aoMapUv:_e&&g(M.aoMap.channel),lightMapUv:St&&g(M.lightMap.channel),bumpMapUv:Lt&&g(M.bumpMap.channel),normalMapUv:pt&&g(M.normalMap.channel),displacementMapUv:Qt&&g(M.displacementMap.channel),emissiveMapUv:Nt&&g(M.emissiveMap.channel),metalnessMapUv:C&&g(M.metalnessMap.channel),roughnessMapUv:E&&g(M.roughnessMap.channel),anisotropyMapUv:lt&&g(M.anisotropyMap.channel),clearcoatMapUv:ut&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:At&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&g(M.sheenRoughnessMap.channel),specularMapUv:vt&&g(M.specularMap.channel),specularColorMapUv:ht&&g(M.specularColorMap.channel),specularIntensityMapUv:R&&g(M.specularIntensityMap.channel),transmissionMapUv:rt&&g(M.transmissionMap.channel),thicknessMapUv:yt&&g(M.thicknessMap.channel),alphaMapUv:it&&g(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(pt||H),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:wt,vertexUv3s:Xt,pointsUvs:$.isPoints===!0&&!!N.attributes.uv&&(Mt||it),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:$.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:qt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Mt&&M.map.isVideoTexture===!0&&Zt.getTransfer(M.map.colorSpace)===ne,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pn,flipSided:M.side===Ve,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ct&&M.extensions.derivatives===!0,extensionFragDepth:ct&&M.extensions.fragDepth===!0,extensionDrawBuffers:ct&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ct&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ct&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)T.push(z),T.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(v(T,M),x(T,M),T.push(s.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function v(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const T=_[M.type];let z;if(T){const V=Rn[T];z=Kr.clone(V.uniforms)}else z=M.uniforms;return z}function w(M,T){let z;for(let V=0,$=c.length;V<$;V++){const P=c[V];if(P.cacheKey===T){z=P,++z.usedTimes;break}}return z===void 0&&(z=new Q_(s,T,M,r),c.push(z)),z}function b(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function S(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:w,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:D}}function r0(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function s0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Wc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Xc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,u,f,_,g,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=g,p.group=m),t++,p}function o(d,u,f,_,g,m){const p=a(d,u,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,_,g,m){const p=a(d,u,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||s0),n.length>1&&n.sort(u||Wc),i.length>1&&i.sort(u||Wc)}function h(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function a0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Xc,s.set(n,[a])):i>=r.length?(a=new Xc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function o0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new bt};break;case"SpotLight":e={position:new L,direction:new L,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function l0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let c0=0;function h0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function u0(s,t){const e=new o0,n=l0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);const r=new L,a=new de,o=new de;function l(h,d){let u=0,f=0,_=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let g=0,m=0,p=0,v=0,x=0,y=0,w=0,b=0,S=0,D=0,M=0;h.sort(h0);const T=d===!0?Math.PI:1;for(let V=0,$=h.length;V<$;V++){const P=h[V],N=P.color,F=P.intensity,G=P.distance,O=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=N.r*F*T,f+=N.g*F*T,_+=N.b*F*T;else if(P.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(P.sh.coefficients[U],F);M++}else if(P.isDirectionalLight){const U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const W=P.shadow,K=n.get(P);K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,i.directionalShadow[g]=K,i.directionalShadowMap[g]=O,i.directionalShadowMatrix[g]=P.shadow.matrix,y++}i.directional[g]=U,g++}else if(P.isSpotLight){const U=e.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(N).multiplyScalar(F*T),U.distance=G,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,i.spot[p]=U;const W=P.shadow;if(P.map&&(i.spotLightMap[S]=P.map,S++,W.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[p]=W.matrix,P.castShadow){const K=n.get(P);K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,i.spotShadow[p]=K,i.spotShadowMap[p]=O,b++}p++}else if(P.isRectAreaLight){const U=e.get(P);U.color.copy(N).multiplyScalar(F),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=U,v++}else if(P.isPointLight){const U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity*T),U.distance=P.distance,U.decay=P.decay,P.castShadow){const W=P.shadow,K=n.get(P);K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,K.shadowCameraNear=W.camera.near,K.shadowCameraFar=W.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=O,i.pointShadowMatrix[m]=P.shadow.matrix,w++}i.point[m]=U,m++}else if(P.isHemisphereLight){const U=e.get(P);U.skyColor.copy(P.color).multiplyScalar(F*T),U.groundColor.copy(P.groundColor).multiplyScalar(F*T),i.hemi[x]=U,x++}}v>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=_;const z=i.hash;(z.directionalLength!==g||z.pointLength!==m||z.spotLength!==p||z.rectAreaLength!==v||z.hemiLength!==x||z.numDirectionalShadows!==y||z.numPointShadows!==w||z.numSpotShadows!==b||z.numSpotMaps!==S||z.numLightProbes!==M)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=b+S-D,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=M,z.directionalLength=g,z.pointLength=m,z.spotLength=p,z.rectAreaLength=v,z.hemiLength=x,z.numDirectionalShadows=y,z.numPointShadows=w,z.numSpotShadows=b,z.numSpotMaps=S,z.numLightProbes=M,i.version=c0++)}function c(h,d){let u=0,f=0,_=0,g=0,m=0;const p=d.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const y=h[v];if(y.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),u++}else if(y.isSpotLight){const w=i.spot[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),_++}else if(y.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function qc(s,t){const e=new u0(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function d0(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new qc(s,t),e.set(r,[l])):a>=o.length?(l=new qc(s,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class f0 extends ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class p0 extends ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const m0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _0(s,t,e){let n=new $o;const i=new xt,r=new xt,a=new ie,o=new f0({depthPacking:uf}),l=new p0,c={},h=e.maxTextureSize,d={[di]:Ve,[Ve]:di,[pn]:pn},u=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:m0,fragmentShader:g0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new ge;_.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Me(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let p=this.type;this.render=function(b,S,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const M=s.getRenderTarget(),T=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),V=s.state;V.setBlending(qn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const $=p!==Gn&&this.type===Gn,P=p===Gn&&this.type!==Gn;for(let N=0,F=b.length;N<F;N++){const G=b[N],O=G.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const U=O.getFrameExtents();if(i.multiply(U),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/U.x),i.x=r.x*U.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/U.y),i.y=r.y*U.y,O.mapSize.y=r.y)),O.map===null||$===!0||P===!0){const K=this.type!==Gn?{minFilter:ze,magFilter:ze}:{};O.map!==null&&O.map.dispose(),O.map=new wn(i.x,i.y,K),O.map.texture.name=G.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const W=O.getViewportCount();for(let K=0;K<W;K++){const Z=O.getViewport(K);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),V.viewport(a),O.updateMatrices(G,K),n=O.getFrustum(),y(S,D,O.camera,G,this.type)}O.isPointLightShadow!==!0&&this.type===Gn&&v(O,D),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,T,z)};function v(b,S){const D=t.update(g);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new wn(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(S,null,D,u,g,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(S,null,D,f,g,null)}function x(b,S,D,M){let T=null;const z=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(z!==void 0)T=z;else if(T=D.isPointLight===!0?l:o,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const V=T.uuid,$=S.uuid;let P=c[V];P===void 0&&(P={},c[V]=P);let N=P[$];N===void 0&&(N=T.clone(),P[$]=N,S.addEventListener("dispose",w)),T=N}if(T.visible=S.visible,T.wireframe=S.wireframe,M===Gn?T.side=S.shadowSide!==null?S.shadowSide:S.side:T.side=S.shadowSide!==null?S.shadowSide:d[S.side],T.alphaMap=S.alphaMap,T.alphaTest=S.alphaTest,T.map=S.map,T.clipShadows=S.clipShadows,T.clippingPlanes=S.clippingPlanes,T.clipIntersection=S.clipIntersection,T.displacementMap=S.displacementMap,T.displacementScale=S.displacementScale,T.displacementBias=S.displacementBias,T.wireframeLinewidth=S.wireframeLinewidth,T.linewidth=S.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const V=s.properties.get(T);V.light=D}return T}function y(b,S,D,M,T){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===Gn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const $=t.update(b),P=b.material;if(Array.isArray(P)){const N=$.groups;for(let F=0,G=N.length;F<G;F++){const O=N[F],U=P[O.materialIndex];if(U&&U.visible){const W=x(b,U,M,T);b.onBeforeShadow(s,b,S,D,$,W,O),s.renderBufferDirect(D,null,$,W,b,O),b.onAfterShadow(s,b,S,D,$,W,O)}}}else if(P.visible){const N=x(b,P,M,T);b.onBeforeShadow(s,b,S,D,$,N,null),s.renderBufferDirect(D,null,$,N,b,null),b.onAfterShadow(s,b,S,D,$,N,null)}}const V=b.children;for(let $=0,P=V.length;$<P;$++)y(V[$],S,D,M,T)}function w(b){b.target.removeEventListener("dispose",w);for(const D in c){const M=c[D],T=b.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function x0(s,t,e){const n=e.isWebGL2;function i(){let I=!1;const at=new ie;let ct=null;const Dt=new ie(0,0,0,0);return{setMask:function(wt){ct!==wt&&!I&&(s.colorMask(wt,wt,wt,wt),ct=wt)},setLocked:function(wt){I=wt},setClear:function(wt,Xt,qt,ce,fe){fe===!0&&(wt*=ce,Xt*=ce,qt*=ce),at.set(wt,Xt,qt,ce),Dt.equals(at)===!1&&(s.clearColor(wt,Xt,qt,ce),Dt.copy(at))},reset:function(){I=!1,ct=null,Dt.set(-1,0,0,0)}}}function r(){let I=!1,at=null,ct=null,Dt=null;return{setTest:function(wt){wt?Rt(s.DEPTH_TEST):Mt(s.DEPTH_TEST)},setMask:function(wt){at!==wt&&!I&&(s.depthMask(wt),at=wt)},setFunc:function(wt){if(ct!==wt){switch(wt){case Wd:s.depthFunc(s.NEVER);break;case Xd:s.depthFunc(s.ALWAYS);break;case qd:s.depthFunc(s.LESS);break;case Ks:s.depthFunc(s.LEQUAL);break;case Yd:s.depthFunc(s.EQUAL);break;case jd:s.depthFunc(s.GEQUAL);break;case $d:s.depthFunc(s.GREATER);break;case Kd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ct=wt}},setLocked:function(wt){I=wt},setClear:function(wt){Dt!==wt&&(s.clearDepth(wt),Dt=wt)},reset:function(){I=!1,at=null,ct=null,Dt=null}}}function a(){let I=!1,at=null,ct=null,Dt=null,wt=null,Xt=null,qt=null,ce=null,fe=null;return{setTest:function(jt){I||(jt?Rt(s.STENCIL_TEST):Mt(s.STENCIL_TEST))},setMask:function(jt){at!==jt&&!I&&(s.stencilMask(jt),at=jt)},setFunc:function(jt,xe,An){(ct!==jt||Dt!==xe||wt!==An)&&(s.stencilFunc(jt,xe,An),ct=jt,Dt=xe,wt=An)},setOp:function(jt,xe,An){(Xt!==jt||qt!==xe||ce!==An)&&(s.stencilOp(jt,xe,An),Xt=jt,qt=xe,ce=An)},setLocked:function(jt){I=jt},setClear:function(jt){fe!==jt&&(s.clearStencil(jt),fe=jt)},reset:function(){I=!1,at=null,ct=null,Dt=null,wt=null,Xt=null,qt=null,ce=null,fe=null}}}const o=new i,l=new r,c=new a,h=new WeakMap,d=new WeakMap;let u={},f={},_=new WeakMap,g=[],m=null,p=!1,v=null,x=null,y=null,w=null,b=null,S=null,D=null,M=new bt(0,0,0),T=0,z=!1,V=null,$=null,P=null,N=null,F=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,U=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=U>=1):W.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=U>=2);let K=null,Z={};const Y=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),st=new ie().fromArray(Y),mt=new ie().fromArray(J);function gt(I,at,ct,Dt){const wt=new Uint8Array(4),Xt=s.createTexture();s.bindTexture(I,Xt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qt=0;qt<ct;qt++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(at,0,s.RGBA,1,1,Dt,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(at+qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return Xt}const Pt={};Pt[s.TEXTURE_2D]=gt(s.TEXTURE_2D,s.TEXTURE_2D,1),Pt[s.TEXTURE_CUBE_MAP]=gt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pt[s.TEXTURE_2D_ARRAY]=gt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pt[s.TEXTURE_3D]=gt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Rt(s.DEPTH_TEST),l.setFunc(Ks),Nt(!1),C(Rl),Rt(s.CULL_FACE),pt(qn);function Rt(I){u[I]!==!0&&(s.enable(I),u[I]=!0)}function Mt(I){u[I]!==!1&&(s.disable(I),u[I]=!1)}function Ft(I,at){return f[I]!==at?(s.bindFramebuffer(I,at),f[I]=at,n&&(I===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=at),I===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=at)),!0):!1}function k(I,at){let ct=g,Dt=!1;if(I)if(ct=_.get(at),ct===void 0&&(ct=[],_.set(at,ct)),I.isWebGLMultipleRenderTargets){const wt=I.texture;if(ct.length!==wt.length||ct[0]!==s.COLOR_ATTACHMENT0){for(let Xt=0,qt=wt.length;Xt<qt;Xt++)ct[Xt]=s.COLOR_ATTACHMENT0+Xt;ct.length=wt.length,Dt=!0}}else ct[0]!==s.COLOR_ATTACHMENT0&&(ct[0]=s.COLOR_ATTACHMENT0,Dt=!0);else ct[0]!==s.BACK&&(ct[0]=s.BACK,Dt=!0);Dt&&(e.isWebGL2?s.drawBuffers(ct):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ct))}function _e(I){return m!==I?(s.useProgram(I),m=I,!0):!1}const St={[Ci]:s.FUNC_ADD,[Rd]:s.FUNC_SUBTRACT,[Pd]:s.FUNC_REVERSE_SUBTRACT};if(n)St[Dl]=s.MIN,St[Il]=s.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&(St[Dl]=I.MIN_EXT,St[Il]=I.MAX_EXT)}const Lt={[Ld]:s.ZERO,[Dd]:s.ONE,[Id]:s.SRC_COLOR,[xo]:s.SRC_ALPHA,[zd]:s.SRC_ALPHA_SATURATE,[Fd]:s.DST_COLOR,[Nd]:s.DST_ALPHA,[Ud]:s.ONE_MINUS_SRC_COLOR,[vo]:s.ONE_MINUS_SRC_ALPHA,[Bd]:s.ONE_MINUS_DST_COLOR,[Od]:s.ONE_MINUS_DST_ALPHA,[kd]:s.CONSTANT_COLOR,[Gd]:s.ONE_MINUS_CONSTANT_COLOR,[Hd]:s.CONSTANT_ALPHA,[Vd]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(I,at,ct,Dt,wt,Xt,qt,ce,fe,jt){if(I===qn){p===!0&&(Mt(s.BLEND),p=!1);return}if(p===!1&&(Rt(s.BLEND),p=!0),I!==Cd){if(I!==v||jt!==z){if((x!==Ci||b!==Ci)&&(s.blendEquation(s.FUNC_ADD),x=Ci,b=Ci),jt)switch(I){case pr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ue:s.blendFunc(s.ONE,s.ONE);break;case Pl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ll:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case pr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ue:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Pl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ll:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,w=null,S=null,D=null,M.set(0,0,0),T=0,v=I,z=jt}return}wt=wt||at,Xt=Xt||ct,qt=qt||Dt,(at!==x||wt!==b)&&(s.blendEquationSeparate(St[at],St[wt]),x=at,b=wt),(ct!==y||Dt!==w||Xt!==S||qt!==D)&&(s.blendFuncSeparate(Lt[ct],Lt[Dt],Lt[Xt],Lt[qt]),y=ct,w=Dt,S=Xt,D=qt),(ce.equals(M)===!1||fe!==T)&&(s.blendColor(ce.r,ce.g,ce.b,fe),M.copy(ce),T=fe),v=I,z=!1}function Qt(I,at){I.side===pn?Mt(s.CULL_FACE):Rt(s.CULL_FACE);let ct=I.side===Ve;at&&(ct=!ct),Nt(ct),I.blending===pr&&I.transparent===!1?pt(qn):pt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const Dt=I.stencilWrite;c.setTest(Dt),Dt&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),H(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Rt(s.SAMPLE_ALPHA_TO_COVERAGE):Mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(I){V!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),V=I)}function C(I){I!==bd?(Rt(s.CULL_FACE),I!==$&&(I===Rl?s.cullFace(s.BACK):I===wd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Mt(s.CULL_FACE),$=I}function E(I){I!==P&&(O&&s.lineWidth(I),P=I)}function H(I,at,ct){I?(Rt(s.POLYGON_OFFSET_FILL),(N!==at||F!==ct)&&(s.polygonOffset(at,ct),N=at,F=ct)):Mt(s.POLYGON_OFFSET_FILL)}function et(I){I?Rt(s.SCISSOR_TEST):Mt(s.SCISSOR_TEST)}function tt(I){I===void 0&&(I=s.TEXTURE0+G-1),K!==I&&(s.activeTexture(I),K=I)}function nt(I,at,ct){ct===void 0&&(K===null?ct=s.TEXTURE0+G-1:ct=K);let Dt=Z[ct];Dt===void 0&&(Dt={type:void 0,texture:void 0},Z[ct]=Dt),(Dt.type!==I||Dt.texture!==at)&&(K!==ct&&(s.activeTexture(ct),K=ct),s.bindTexture(I,at||Pt[I]),Dt.type=I,Dt.texture=at)}function _t(){const I=Z[K];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function lt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ot(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function R(I){st.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),st.copy(I))}function rt(I){mt.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),mt.copy(I))}function yt(I,at){let ct=d.get(at);ct===void 0&&(ct=new WeakMap,d.set(at,ct));let Dt=ct.get(I);Dt===void 0&&(Dt=s.getUniformBlockIndex(at,I.name),ct.set(I,Dt))}function ft(I,at){const Dt=d.get(at).get(I);h.get(at)!==Dt&&(s.uniformBlockBinding(at,Dt,I.__bindingPointIndex),h.set(at,Dt))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},K=null,Z={},f={},_=new WeakMap,g=[],m=null,p=!1,v=null,x=null,y=null,w=null,b=null,S=null,D=null,M=new bt(0,0,0),T=0,z=!1,V=null,$=null,P=null,N=null,F=null,st.set(0,0,s.canvas.width,s.canvas.height),mt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Rt,disable:Mt,bindFramebuffer:Ft,drawBuffers:k,useProgram:_e,setBlending:pt,setMaterial:Qt,setFlipSided:Nt,setCullFace:C,setLineWidth:E,setPolygonOffset:H,setScissorTest:et,activeTexture:tt,bindTexture:nt,unbindTexture:_t,compressedTexImage2D:lt,compressedTexImage3D:ut,texImage2D:vt,texImage3D:ht,updateUBOMapping:yt,uniformBlockBinding:ft,texStorage2D:At,texStorage3D:Ct,texSubImage2D:Tt,texSubImage3D:Ot,compressedTexSubImage2D:Q,compressedTexSubImage3D:Gt,scissor:R,viewport:rt,reset:it}}function v0(s,t,e,n,i,r,a){const o=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return f?new OffscreenCanvas(C,E):na("canvas")}function g(C,E,H,et){let tt=1;if((C.width>et||C.height>et)&&(tt=et/Math.max(C.width,C.height)),tt<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const nt=E?To:Math.floor,_t=nt(tt*C.width),lt=nt(tt*C.height);d===void 0&&(d=_(_t,lt));const ut=H?_(_t,lt):d;return ut.width=_t,ut.height=lt,ut.getContext("2d").drawImage(C,0,0,_t,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+_t+"x"+lt+")."),ut}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return cc(C.width)&&cc(C.height)}function p(C){return o?!1:C.wrapS!==Tn||C.wrapT!==Tn||C.minFilter!==ze&&C.minFilter!==fn}function v(C,E){return C.generateMipmaps&&E&&C.minFilter!==ze&&C.minFilter!==fn}function x(C){s.generateMipmap(C)}function y(C,E,H,et,tt=!1){if(o===!1)return E;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let nt=E;if(E===s.RED&&(H===s.FLOAT&&(nt=s.R32F),H===s.HALF_FLOAT&&(nt=s.R16F),H===s.UNSIGNED_BYTE&&(nt=s.R8)),E===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(nt=s.R8UI),H===s.UNSIGNED_SHORT&&(nt=s.R16UI),H===s.UNSIGNED_INT&&(nt=s.R32UI),H===s.BYTE&&(nt=s.R8I),H===s.SHORT&&(nt=s.R16I),H===s.INT&&(nt=s.R32I)),E===s.RG&&(H===s.FLOAT&&(nt=s.RG32F),H===s.HALF_FLOAT&&(nt=s.RG16F),H===s.UNSIGNED_BYTE&&(nt=s.RG8)),E===s.RGBA){const _t=tt?Js:Zt.getTransfer(et);H===s.FLOAT&&(nt=s.RGBA32F),H===s.HALF_FLOAT&&(nt=s.RGBA16F),H===s.UNSIGNED_BYTE&&(nt=_t===ne?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(nt=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(nt=s.RGB5_A1)}return(nt===s.R16F||nt===s.R32F||nt===s.RG16F||nt===s.RG32F||nt===s.RGBA16F||nt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function w(C,E,H){return v(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==ze&&C.minFilter!==fn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function b(C){return C===ze||C===Ul||C===ba?s.NEAREST:s.LINEAR}function S(C){const E=C.target;E.removeEventListener("dispose",S),M(E),E.isVideoTexture&&h.delete(E)}function D(C){const E=C.target;E.removeEventListener("dispose",D),z(E)}function M(C){const E=n.get(C);if(E.__webglInit===void 0)return;const H=C.source,et=u.get(H);if(et){const tt=et[E.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&T(C),Object.keys(et).length===0&&u.delete(H)}n.remove(C)}function T(C){const E=n.get(C);s.deleteTexture(E.__webglTexture);const H=C.source,et=u.get(H);delete et[E.__cacheKey],a.memory.textures--}function z(C){const E=C.texture,H=n.get(C),et=n.get(E);if(et.__webglTexture!==void 0&&(s.deleteTexture(et.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(H.__webglFramebuffer[tt]))for(let nt=0;nt<H.__webglFramebuffer[tt].length;nt++)s.deleteFramebuffer(H.__webglFramebuffer[tt][nt]);else s.deleteFramebuffer(H.__webglFramebuffer[tt]);H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer[tt])}else{if(Array.isArray(H.__webglFramebuffer))for(let tt=0;tt<H.__webglFramebuffer.length;tt++)s.deleteFramebuffer(H.__webglFramebuffer[tt]);else s.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&s.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let tt=0;tt<H.__webglColorRenderbuffer.length;tt++)H.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(H.__webglColorRenderbuffer[tt]);H.__webglDepthRenderbuffer&&s.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let tt=0,nt=E.length;tt<nt;tt++){const _t=n.get(E[tt]);_t.__webglTexture&&(s.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(E[tt])}n.remove(E),n.remove(C)}let V=0;function $(){V=0}function P(){const C=V;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),V+=1,C}function N(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function F(C,E){const H=n.get(C);if(C.isVideoTexture&&Qt(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const et=C.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(H,C,E);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+E)}function G(C,E){const H=n.get(C);if(C.version>0&&H.__version!==C.version){st(H,C,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+E)}function O(C,E){const H=n.get(C);if(C.version>0&&H.__version!==C.version){st(H,C,E);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+E)}function U(C,E){const H=n.get(C);if(C.version>0&&H.__version!==C.version){mt(H,C,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+E)}const W={[jr]:s.REPEAT,[Tn]:s.CLAMP_TO_EDGE,[yo]:s.MIRRORED_REPEAT},K={[ze]:s.NEAREST,[Ul]:s.NEAREST_MIPMAP_NEAREST,[ba]:s.NEAREST_MIPMAP_LINEAR,[fn]:s.LINEAR,[tf]:s.LINEAR_MIPMAP_NEAREST,[$r]:s.LINEAR_MIPMAP_LINEAR},Z={[ff]:s.NEVER,[vf]:s.ALWAYS,[pf]:s.LESS,[Qh]:s.LEQUAL,[mf]:s.EQUAL,[xf]:s.GEQUAL,[gf]:s.GREATER,[_f]:s.NOTEQUAL};function Y(C,E,H){if(H?(s.texParameteri(C,s.TEXTURE_WRAP_S,W[E.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,W[E.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,W[E.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,K[E.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,K[E.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==Tn||E.wrapT!==Tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,b(E.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,b(E.minFilter)),E.minFilter!==ze&&E.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===ze||E.minFilter!==ba&&E.minFilter!==$r||E.type===ri&&t.has("OES_texture_float_linear")===!1||o===!1&&E.type===Yn&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(C,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function J(C,E){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",S));const et=E.source;let tt=u.get(et);tt===void 0&&(tt={},u.set(et,tt));const nt=N(E);if(nt!==C.__cacheKey){tt[nt]===void 0&&(tt[nt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),tt[nt].usedTimes++;const _t=tt[C.__cacheKey];_t!==void 0&&(tt[C.__cacheKey].usedTimes--,_t.usedTimes===0&&T(E)),C.__cacheKey=nt,C.__webglTexture=tt[nt].texture}return H}function st(C,E,H){let et=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(et=s.TEXTURE_3D);const tt=J(C,E),nt=E.source;e.bindTexture(et,C.__webglTexture,s.TEXTURE0+H);const _t=n.get(nt);if(nt.version!==_t.__version||tt===!0){e.activeTexture(s.TEXTURE0+H);const lt=Zt.getPrimaries(Zt.workingColorSpace),ut=E.colorSpace===mn?null:Zt.getPrimaries(E.colorSpace),Tt=E.colorSpace===mn||lt===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Ot=p(E)&&m(E.image)===!1;let Q=g(E.image,Ot,!1,i.maxTextureSize);Q=Nt(E,Q);const Gt=m(Q)||o,At=r.convert(E.format,E.colorSpace);let Ct=r.convert(E.type),vt=y(E.internalFormat,At,Ct,E.colorSpace,E.isVideoTexture);Y(et,E,Gt);let ht;const R=E.mipmaps,rt=o&&E.isVideoTexture!==!0&&vt!==Kh,yt=_t.__version===void 0||tt===!0,ft=w(E,Q,Gt);if(E.isDepthTexture)vt=s.DEPTH_COMPONENT,o?E.type===ri?vt=s.DEPTH_COMPONENT32F:E.type===ii?vt=s.DEPTH_COMPONENT24:E.type===Li?vt=s.DEPTH24_STENCIL8:vt=s.DEPTH_COMPONENT16:E.type===ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Di&&vt===s.DEPTH_COMPONENT&&E.type!==qo&&E.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ii,Ct=r.convert(E.type)),E.format===yr&&vt===s.DEPTH_COMPONENT&&(vt=s.DEPTH_STENCIL,E.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Li,Ct=r.convert(E.type))),yt&&(rt?e.texStorage2D(s.TEXTURE_2D,1,vt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,vt,Q.width,Q.height,0,At,Ct,null));else if(E.isDataTexture)if(R.length>0&&Gt){rt&&yt&&e.texStorage2D(s.TEXTURE_2D,ft,vt,R[0].width,R[0].height);for(let it=0,I=R.length;it<I;it++)ht=R[it],rt?e.texSubImage2D(s.TEXTURE_2D,it,0,0,ht.width,ht.height,At,Ct,ht.data):e.texImage2D(s.TEXTURE_2D,it,vt,ht.width,ht.height,0,At,Ct,ht.data);E.generateMipmaps=!1}else rt?(yt&&e.texStorage2D(s.TEXTURE_2D,ft,vt,Q.width,Q.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,At,Ct,Q.data)):e.texImage2D(s.TEXTURE_2D,0,vt,Q.width,Q.height,0,At,Ct,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){rt&&yt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,vt,R[0].width,R[0].height,Q.depth);for(let it=0,I=R.length;it<I;it++)ht=R[it],E.format!==bn?At!==null?rt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,ht.width,ht.height,Q.depth,At,ht.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,it,vt,ht.width,ht.height,Q.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,ht.width,ht.height,Q.depth,At,Ct,ht.data):e.texImage3D(s.TEXTURE_2D_ARRAY,it,vt,ht.width,ht.height,Q.depth,0,At,Ct,ht.data)}else{rt&&yt&&e.texStorage2D(s.TEXTURE_2D,ft,vt,R[0].width,R[0].height);for(let it=0,I=R.length;it<I;it++)ht=R[it],E.format!==bn?At!==null?rt?e.compressedTexSubImage2D(s.TEXTURE_2D,it,0,0,ht.width,ht.height,At,ht.data):e.compressedTexImage2D(s.TEXTURE_2D,it,vt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?e.texSubImage2D(s.TEXTURE_2D,it,0,0,ht.width,ht.height,At,Ct,ht.data):e.texImage2D(s.TEXTURE_2D,it,vt,ht.width,ht.height,0,At,Ct,ht.data)}else if(E.isDataArrayTexture)rt?(yt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,vt,Q.width,Q.height,Q.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,At,Ct,Q.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,vt,Q.width,Q.height,Q.depth,0,At,Ct,Q.data);else if(E.isData3DTexture)rt?(yt&&e.texStorage3D(s.TEXTURE_3D,ft,vt,Q.width,Q.height,Q.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,At,Ct,Q.data)):e.texImage3D(s.TEXTURE_3D,0,vt,Q.width,Q.height,Q.depth,0,At,Ct,Q.data);else if(E.isFramebufferTexture){if(yt)if(rt)e.texStorage2D(s.TEXTURE_2D,ft,vt,Q.width,Q.height);else{let it=Q.width,I=Q.height;for(let at=0;at<ft;at++)e.texImage2D(s.TEXTURE_2D,at,vt,it,I,0,At,Ct,null),it>>=1,I>>=1}}else if(R.length>0&&Gt){rt&&yt&&e.texStorage2D(s.TEXTURE_2D,ft,vt,R[0].width,R[0].height);for(let it=0,I=R.length;it<I;it++)ht=R[it],rt?e.texSubImage2D(s.TEXTURE_2D,it,0,0,At,Ct,ht):e.texImage2D(s.TEXTURE_2D,it,vt,At,Ct,ht);E.generateMipmaps=!1}else rt?(yt&&e.texStorage2D(s.TEXTURE_2D,ft,vt,Q.width,Q.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,At,Ct,Q)):e.texImage2D(s.TEXTURE_2D,0,vt,At,Ct,Q);v(E,Gt)&&x(et),_t.__version=nt.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function mt(C,E,H){if(E.image.length!==6)return;const et=J(C,E),tt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+H);const nt=n.get(tt);if(tt.version!==nt.__version||et===!0){e.activeTexture(s.TEXTURE0+H);const _t=Zt.getPrimaries(Zt.workingColorSpace),lt=E.colorSpace===mn?null:Zt.getPrimaries(E.colorSpace),ut=E.colorSpace===mn||_t===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Tt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ot=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let it=0;it<6;it++)!Tt&&!Ot?Q[it]=g(E.image[it],!1,!0,i.maxCubemapSize):Q[it]=Ot?E.image[it].image:E.image[it],Q[it]=Nt(E,Q[it]);const Gt=Q[0],At=m(Gt)||o,Ct=r.convert(E.format,E.colorSpace),vt=r.convert(E.type),ht=y(E.internalFormat,Ct,vt,E.colorSpace),R=o&&E.isVideoTexture!==!0,rt=nt.__version===void 0||et===!0;let yt=w(E,Gt,At);Y(s.TEXTURE_CUBE_MAP,E,At);let ft;if(Tt){R&&rt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,ht,Gt.width,Gt.height);for(let it=0;it<6;it++){ft=Q[it].mipmaps;for(let I=0;I<ft.length;I++){const at=ft[I];E.format!==bn?Ct!==null?R?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,I,0,0,at.width,at.height,Ct,at.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,I,ht,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,I,0,0,at.width,at.height,Ct,vt,at.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,I,ht,at.width,at.height,0,Ct,vt,at.data)}}}else{ft=E.mipmaps,R&&rt&&(ft.length>0&&yt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,ht,Q[0].width,Q[0].height));for(let it=0;it<6;it++)if(Ot){R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Q[it].width,Q[it].height,Ct,vt,Q[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ht,Q[it].width,Q[it].height,0,Ct,vt,Q[it].data);for(let I=0;I<ft.length;I++){const ct=ft[I].image[it].image;R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,I+1,0,0,ct.width,ct.height,Ct,vt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,I+1,ht,ct.width,ct.height,0,Ct,vt,ct.data)}}else{R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ct,vt,Q[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ht,Ct,vt,Q[it]);for(let I=0;I<ft.length;I++){const at=ft[I];R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,I+1,0,0,Ct,vt,at.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,I+1,ht,Ct,vt,at.image[it])}}}v(E,At)&&x(s.TEXTURE_CUBE_MAP),nt.__version=tt.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function gt(C,E,H,et,tt,nt){const _t=r.convert(H.format,H.colorSpace),lt=r.convert(H.type),ut=y(H.internalFormat,_t,lt,H.colorSpace);if(!n.get(E).__hasExternalTextures){const Ot=Math.max(1,E.width>>nt),Q=Math.max(1,E.height>>nt);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,nt,ut,Ot,Q,E.depth,0,_t,lt,null):e.texImage2D(tt,nt,ut,Ot,Q,0,_t,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),pt(E)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,tt,n.get(H).__webglTexture,0,Lt(E)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,tt,n.get(H).__webglTexture,nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(C,E,H){if(s.bindRenderbuffer(s.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let et=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(H||pt(E)){const tt=E.depthTexture;tt&&tt.isDepthTexture&&(tt.type===ri?et=s.DEPTH_COMPONENT32F:tt.type===ii&&(et=s.DEPTH_COMPONENT24));const nt=Lt(E);pt(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,et,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,et,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,et,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const et=Lt(E);H&&pt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,et,s.DEPTH24_STENCIL8,E.width,E.height):pt(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const et=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let tt=0;tt<et.length;tt++){const nt=et[tt],_t=r.convert(nt.format,nt.colorSpace),lt=r.convert(nt.type),ut=y(nt.internalFormat,_t,lt,nt.colorSpace),Tt=Lt(E);H&&pt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,ut,E.width,E.height):pt(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt,ut,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ut,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),F(E.depthTexture,0);const et=n.get(E.depthTexture).__webglTexture,tt=Lt(E);if(E.depthTexture.format===Di)pt(E)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(E.depthTexture.format===yr)pt(E)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Mt(C){const E=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Rt(E.__webglFramebuffer,C)}else if(H){E.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[et]),E.__webglDepthbuffer[et]=s.createRenderbuffer(),Pt(E.__webglDepthbuffer[et],C,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),Pt(E.__webglDepthbuffer,C,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(C,E,H){const et=n.get(C);E!==void 0&&gt(et.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Mt(C)}function k(C){const E=C.texture,H=n.get(C),et=n.get(E);C.addEventListener("dispose",D),C.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=E.version,a.memory.textures++);const tt=C.isWebGLCubeRenderTarget===!0,nt=C.isWebGLMultipleRenderTargets===!0,_t=m(C)||o;if(tt){H.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(o&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[lt]=[];for(let ut=0;ut<E.mipmaps.length;ut++)H.__webglFramebuffer[lt][ut]=s.createFramebuffer()}else H.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let lt=0;lt<E.mipmaps.length;lt++)H.__webglFramebuffer[lt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(nt)if(i.drawBuffers){const lt=C.texture;for(let ut=0,Tt=lt.length;ut<Tt;ut++){const Ot=n.get(lt[ut]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&pt(C)===!1){const lt=nt?E:[E];H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ut=0;ut<lt.length;ut++){const Tt=lt[ut];H.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[ut]);const Ot=r.convert(Tt.format,Tt.colorSpace),Q=r.convert(Tt.type),Gt=y(Tt.internalFormat,Ot,Q,Tt.colorSpace,C.isXRRenderTarget===!0),At=Lt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,At,Gt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,H.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Pt(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),Y(s.TEXTURE_CUBE_MAP,E,_t);for(let lt=0;lt<6;lt++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let ut=0;ut<E.mipmaps.length;ut++)gt(H.__webglFramebuffer[lt][ut],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut);else gt(H.__webglFramebuffer[lt],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);v(E,_t)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){const lt=C.texture;for(let ut=0,Tt=lt.length;ut<Tt;ut++){const Ot=lt[ut],Q=n.get(Ot);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),Y(s.TEXTURE_2D,Ot,_t),gt(H.__webglFramebuffer,C,Ot,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,0),v(Ot,_t)&&x(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?lt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,et.__webglTexture),Y(lt,E,_t),o&&E.mipmaps&&E.mipmaps.length>0)for(let ut=0;ut<E.mipmaps.length;ut++)gt(H.__webglFramebuffer[ut],C,E,s.COLOR_ATTACHMENT0,lt,ut);else gt(H.__webglFramebuffer,C,E,s.COLOR_ATTACHMENT0,lt,0);v(E,_t)&&x(lt),e.unbindTexture()}C.depthBuffer&&Mt(C)}function _e(C){const E=m(C)||o,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let et=0,tt=H.length;et<tt;et++){const nt=H[et];if(v(nt,E)){const _t=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,lt=n.get(nt).__webglTexture;e.bindTexture(_t,lt),x(_t),e.unbindTexture()}}}function St(C){if(o&&C.samples>0&&pt(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,et=C.height;let tt=s.COLOR_BUFFER_BIT;const nt=[],_t=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=n.get(C),ut=C.isWebGLMultipleRenderTargets===!0;if(ut)for(let Tt=0;Tt<E.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let Tt=0;Tt<E.length;Tt++){nt.push(s.COLOR_ATTACHMENT0+Tt),C.depthBuffer&&nt.push(_t);const Ot=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(Ot===!1&&(C.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),ut&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[Tt]),Ot===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[_t]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_t])),ut){const Q=n.get(E[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,H,et,0,0,H,et,tt,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let Tt=0;Tt<E.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,lt.__webglColorRenderbuffer[Tt]);const Ot=n.get(E[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,Ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function Lt(C){return Math.min(i.maxSamples,C.samples)}function pt(C){const E=n.get(C);return o&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Qt(C){const E=a.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function Nt(C,E){const H=C.colorSpace,et=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===So||H!==jn&&H!==mn&&(Zt.getTransfer(H)===ne?o===!1?t.has("EXT_sRGB")===!0&&et===bn?(C.format=So,C.minFilter=fn,C.generateMipmaps=!1):E=eu.sRGBToLinear(E):(et!==bn||tt!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}this.allocateTextureUnit=P,this.resetTextureUnits=$,this.setTexture2D=F,this.setTexture2DArray=G,this.setTexture3D=O,this.setTextureCube=U,this.rebindTextures=Ft,this.setupRenderTarget=k,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=pt}function M0(s,t,e){const n=e.isWebGL2;function i(r,a=mn){let o;const l=Zt.getTransfer(a);if(r===ci)return s.UNSIGNED_BYTE;if(r===Xh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===qh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ef)return s.BYTE;if(r===nf)return s.SHORT;if(r===qo)return s.UNSIGNED_SHORT;if(r===Wh)return s.INT;if(r===ii)return s.UNSIGNED_INT;if(r===ri)return s.FLOAT;if(r===Yn)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===rf)return s.ALPHA;if(r===bn)return s.RGBA;if(r===sf)return s.LUMINANCE;if(r===af)return s.LUMINANCE_ALPHA;if(r===Di)return s.DEPTH_COMPONENT;if(r===yr)return s.DEPTH_STENCIL;if(r===So)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===of)return s.RED;if(r===Yh)return s.RED_INTEGER;if(r===lf)return s.RG;if(r===jh)return s.RG_INTEGER;if(r===$h)return s.RGBA_INTEGER;if(r===wa||r===Aa||r===Ca||r===Ra)if(l===ne)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===wa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===wa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Aa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ca)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ra)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nl||r===Ol||r===Fl||r===Bl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Nl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ol)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===zl||r===kl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===zl)return l===ne?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===kl)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gl||r===Hl||r===Vl||r===Wl||r===Xl||r===ql||r===Yl||r===jl||r===$l||r===Kl||r===Zl||r===Jl||r===Ql||r===tc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Gl)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hl)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vl)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wl)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xl)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ql)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yl)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jl)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$l)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kl)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zl)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jl)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ql)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===tc)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Pa||r===ec||r===nc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Pa)return l===ne?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ec)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cf||r===ic||r===rc||r===sc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Pa)return o.COMPRESSED_RED_RGTC1_EXT;if(r===ic)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===rc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Li?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class y0 extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pn extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S0={type:"move"};class to{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(S0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class E0 extends zi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null;const g=e.getContextAttributes();let m=null,p=null;const v=[],x=[],y=new xt;let w=null;const b=new nn;b.layers.enable(1),b.viewport=new ie;const S=new nn;S.layers.enable(2),S.viewport=new ie;const D=[b,S],M=new y0;M.layers.enable(1),M.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=v[Y];return J===void 0&&(J=new to,v[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=v[Y];return J===void 0&&(J=new to,v[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=v[Y];return J===void 0&&(J=new to,v[Y]=J),J.getHandSpace()};function V(Y){const J=x.indexOf(Y.inputSource);if(J===-1)return;const st=v[J];st!==void 0&&(st.update(Y.inputSource,Y.frame,c||a),st.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",P);for(let Y=0;Y<v.length;Y++){const J=x[Y];J!==null&&(x[Y]=null,v[Y].disconnect(J))}T=null,z=null,t.setRenderTarget(m),f=null,u=null,d=null,i=null,p=null,Z.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",$),i.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(y),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new wn(f.framebufferWidth,f.framebufferHeight,{format:bn,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,st=null,mt=null;g.depth&&(mt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=g.stencil?yr:Di,st=g.stencil?Li:ii);const gt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(gt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),p=new wn(u.textureWidth,u.textureHeight,{format:bn,type:ci,depthTexture:new uu(u.textureWidth,u.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const Pt=t.properties.get(p);Pt.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(Y){for(let J=0;J<Y.removed.length;J++){const st=Y.removed[J],mt=x.indexOf(st);mt>=0&&(x[mt]=null,v[mt].disconnect(st))}for(let J=0;J<Y.added.length;J++){const st=Y.added[J];let mt=x.indexOf(st);if(mt===-1){for(let Pt=0;Pt<v.length;Pt++)if(Pt>=x.length){x.push(st),mt=Pt;break}else if(x[Pt]===null){x[Pt]=st,mt=Pt;break}if(mt===-1)break}const gt=v[mt];gt&&gt.connect(st)}}const N=new L,F=new L;function G(Y,J,st){N.setFromMatrixPosition(J.matrixWorld),F.setFromMatrixPosition(st.matrixWorld);const mt=N.distanceTo(F),gt=J.projectionMatrix.elements,Pt=st.projectionMatrix.elements,Rt=gt[14]/(gt[10]-1),Mt=gt[14]/(gt[10]+1),Ft=(gt[9]+1)/gt[5],k=(gt[9]-1)/gt[5],_e=(gt[8]-1)/gt[0],St=(Pt[8]+1)/Pt[0],Lt=Rt*_e,pt=Rt*St,Qt=mt/(-_e+St),Nt=Qt*-_e;J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Nt),Y.translateZ(Qt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const C=Rt+Qt,E=Mt+Qt,H=Lt-Nt,et=pt+(mt-Nt),tt=Ft*Mt/E*C,nt=k*Mt/E*C;Y.projectionMatrix.makePerspective(H,et,tt,nt,C,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function O(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;M.near=S.near=b.near=Y.near,M.far=S.far=b.far=Y.far,(T!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,z=M.far);const J=Y.parent,st=M.cameras;O(M,J);for(let mt=0;mt<st.length;mt++)O(st[mt],J);st.length===2?G(M,b,S):M.projectionMatrix.copy(b.projectionMatrix),U(Y,M,J)};function U(Y,J,st){st===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(st.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Eo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)};let W=null;function K(Y,J){if(h=J.getViewerPose(c||a),_=J,h!==null){const st=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let mt=!1;st.length!==M.cameras.length&&(M.cameras.length=0,mt=!0);for(let gt=0;gt<st.length;gt++){const Pt=st[gt];let Rt=null;if(f!==null)Rt=f.getViewport(Pt);else{const Ft=d.getViewSubImage(u,Pt);Rt=Ft.viewport,gt===0&&(t.setRenderTargetTextures(p,Ft.colorTexture,u.ignoreDepthValues?void 0:Ft.depthStencilTexture),t.setRenderTarget(p))}let Mt=D[gt];Mt===void 0&&(Mt=new nn,Mt.layers.enable(gt),Mt.viewport=new ie,D[gt]=Mt),Mt.matrix.fromArray(Pt.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(Pt.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),gt===0&&(M.matrix.copy(Mt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),mt===!0&&M.cameras.push(Mt)}}for(let st=0;st<v.length;st++){const mt=x[st],gt=v[st];mt!==null&&gt!==void 0&&gt.update(mt,J,c||a)}W&&W(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const Z=new hu;Z.setAnimationLoop(K),this.setAnimationLoop=function(Y){W=Y},this.dispose=function(){}}}function T0(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ou(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function b0(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(_(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",m));const w=x.program;n.updateUBOMapping(v,w);const b=t.render.frame;r[v.id]!==b&&(u(v),r[v.id]=b)}function h(v){const x=d();v.__bindingPointIndex=x;const y=s.createBuffer(),w=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,w,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=i[v.id],y=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,S=y.length;b<S;b++){const D=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,T=D.length;M<T;M++){const z=D[M];if(f(z,b,M,w)===!0){const V=z.__offset,$=Array.isArray(z.value)?z.value:[z.value];let P=0;for(let N=0;N<$.length;N++){const F=$[N],G=g(F);typeof F=="number"||typeof F=="boolean"?(z.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,V+P,z.__data)):F.isMatrix3?(z.__data[0]=F.elements[0],z.__data[1]=F.elements[1],z.__data[2]=F.elements[2],z.__data[3]=0,z.__data[4]=F.elements[3],z.__data[5]=F.elements[4],z.__data[6]=F.elements[5],z.__data[7]=0,z.__data[8]=F.elements[6],z.__data[9]=F.elements[7],z.__data[10]=F.elements[8],z.__data[11]=0):(F.toArray(z.__data,P),P+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,y,w){const b=v.value,S=x+"_"+y;if(w[S]===void 0)return typeof b=="number"||typeof b=="boolean"?w[S]=b:w[S]=b.clone(),!0;{const D=w[S];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return w[S]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function _(v){const x=v.uniforms;let y=0;const w=16;for(let S=0,D=x.length;S<D;S++){const M=Array.isArray(x[S])?x[S]:[x[S]];for(let T=0,z=M.length;T<z;T++){const V=M[T],$=Array.isArray(V.value)?V.value:[V.value];for(let P=0,N=$.length;P<N;P++){const F=$[P],G=g(F),O=y%w;O!==0&&w-O<G.boundary&&(y+=w-O),V.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=G.storage}}}const b=y%w;return b>0&&(y+=w-b),v.__size=y,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class _u{constructor(t={}){const{canvas:e=Sf(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this._useLegacyLights=!1,this.toneMapping=li,this.toneMappingExposure=1;const x=this;let y=!1,w=0,b=0,S=null,D=-1,M=null;const T=new ie,z=new ie;let V=null;const $=new bt(0);let P=0,N=e.width,F=e.height,G=1,O=null,U=null;const W=new ie(0,0,N,F),K=new ie(0,0,N,F);let Z=!1;const Y=new $o;let J=!1,st=!1,mt=null;const gt=new de,Pt=new xt,Rt=new L,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ft(){return S===null?G:1}let k=n;function _e(A,B){for(let q=0;q<A.length;q++){const j=A[q],X=e.getContext(j,B);if(X!==null)return X}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wo}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",at,!1),k===null){const B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),k=_e(B,A),k===null)throw _e(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let St,Lt,pt,Qt,Nt,C,E,H,et,tt,nt,_t,lt,ut,Tt,Ot,Q,Gt,At,Ct,vt,ht,R,rt;function yt(){St=new Ng(k),Lt=new Rg(k,St,t),St.init(Lt),ht=new M0(k,St,Lt),pt=new x0(k,St,Lt),Qt=new Bg(k),Nt=new r0,C=new v0(k,St,pt,Nt,Lt,ht,Qt),E=new Lg(x),H=new Ug(x),et=new qf(k,Lt),R=new Ag(k,St,et,Lt),tt=new Og(k,et,Qt,R),nt=new Hg(k,tt,et,Qt),At=new Gg(k,Lt,C),Ot=new Pg(Nt),_t=new i0(x,E,H,St,Lt,R,Ot),lt=new T0(x,Nt),ut=new a0,Tt=new d0(St,Lt),Gt=new wg(x,E,H,pt,nt,u,l),Q=new _0(x,nt,Lt),rt=new b0(k,Qt,Lt,pt),Ct=new Cg(k,St,Qt,Lt),vt=new Fg(k,St,Qt,Lt),Qt.programs=_t.programs,x.capabilities=Lt,x.extensions=St,x.properties=Nt,x.renderLists=ut,x.shadowMap=Q,x.state=pt,x.info=Qt}yt();const ft=new E0(x,k);this.xr=ft,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=St.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=St.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(N,F,!1))},this.getSize=function(A){return A.set(N,F)},this.setSize=function(A,B,q=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,F=B,e.width=Math.floor(A*G),e.height=Math.floor(B*G),q===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(N*G,F*G).floor()},this.setDrawingBufferSize=function(A,B,q){N=A,F=B,G=q,e.width=Math.floor(A*q),e.height=Math.floor(B*q),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(W)},this.setViewport=function(A,B,q,j){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,B,q,j),pt.viewport(T.copy(W).multiplyScalar(G).floor())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,B,q,j){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,B,q,j),pt.scissor(z.copy(K).multiplyScalar(G).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(A){pt.setScissorTest(Z=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(A=!0,B=!0,q=!0){let j=0;if(A){let X=!1;if(S!==null){const dt=S.texture.format;X=dt===$h||dt===jh||dt===Yh}if(X){const dt=S.texture.type,Et=dt===ci||dt===ii||dt===qo||dt===Li||dt===Xh||dt===qh,It=Gt.getClearColor(),Ut=Gt.getClearAlpha(),Ht=It.r,Bt=It.g,zt=It.b;Et?(f[0]=Ht,f[1]=Bt,f[2]=zt,f[3]=Ut,k.clearBufferuiv(k.COLOR,0,f)):(_[0]=Ht,_[1]=Bt,_[2]=zt,_[3]=Ut,k.clearBufferiv(k.COLOR,0,_))}else j|=k.COLOR_BUFFER_BIT}B&&(j|=k.DEPTH_BUFFER_BIT),q&&(j|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ut.dispose(),Tt.dispose(),Nt.dispose(),E.dispose(),H.dispose(),nt.dispose(),R.dispose(),rt.dispose(),_t.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",fe),ft.removeEventListener("sessionend",jt),mt&&(mt.dispose(),mt=null),xe.stop()};function it(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Qt.autoReset,B=Q.enabled,q=Q.autoUpdate,j=Q.needsUpdate,X=Q.type;yt(),Qt.autoReset=A,Q.enabled=B,Q.autoUpdate=q,Q.needsUpdate=j,Q.type=X}function at(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ct(A){const B=A.target;B.removeEventListener("dispose",ct),Dt(B)}function Dt(A){wt(A),Nt.remove(A)}function wt(A){const B=Nt.get(A).programs;B!==void 0&&(B.forEach(function(q){_t.releaseProgram(q)}),A.isShaderMaterial&&_t.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,q,j,X,dt){B===null&&(B=Mt);const Et=X.isMesh&&X.matrixWorld.determinant()<0,It=vd(A,B,q,j,X);pt.setMaterial(j,Et);let Ut=q.index,Ht=1;if(j.wireframe===!0){if(Ut=tt.getWireframeAttribute(q),Ut===void 0)return;Ht=2}const Bt=q.drawRange,zt=q.attributes.position;let pe=Bt.start*Ht,Ze=(Bt.start+Bt.count)*Ht;dt!==null&&(pe=Math.max(pe,dt.start*Ht),Ze=Math.min(Ze,(dt.start+dt.count)*Ht)),Ut!==null?(pe=Math.max(pe,0),Ze=Math.min(Ze,Ut.count)):zt!=null&&(pe=Math.max(pe,0),Ze=Math.min(Ze,zt.count));const Te=Ze-pe;if(Te<0||Te===1/0)return;R.setup(X,j,It,q,Ut);let Un,se=Ct;if(Ut!==null&&(Un=et.get(Ut),se=vt,se.setIndex(Un)),X.isMesh)j.wireframe===!0?(pt.setLineWidth(j.wireframeLinewidth*Ft()),se.setMode(k.LINES)):se.setMode(k.TRIANGLES);else if(X.isLine){let Vt=j.linewidth;Vt===void 0&&(Vt=1),pt.setLineWidth(Vt*Ft()),X.isLineSegments?se.setMode(k.LINES):X.isLineLoop?se.setMode(k.LINE_LOOP):se.setMode(k.LINE_STRIP)}else X.isPoints?se.setMode(k.POINTS):X.isSprite&&se.setMode(k.TRIANGLES);if(X.isBatchedMesh)se.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)se.renderInstances(pe,Te,X.count);else if(q.isInstancedBufferGeometry){const Vt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ya=Math.min(q.instanceCount,Vt);se.renderInstances(pe,Te,ya)}else se.render(pe,Te)};function Xt(A,B,q){A.transparent===!0&&A.side===pn&&A.forceSinglePass===!1?(A.side=Ve,A.needsUpdate=!0,us(A,B,q),A.side=di,A.needsUpdate=!0,us(A,B,q),A.side=pn):us(A,B,q)}this.compile=function(A,B,q=null){q===null&&(q=A),m=Tt.get(q),m.init(),v.push(m),q.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),A!==q&&A.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(x._useLegacyLights);const j=new Set;return A.traverse(function(X){const dt=X.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){const It=dt[Et];Xt(It,q,X),j.add(It)}else Xt(dt,q,X),j.add(dt)}),v.pop(),m=null,j},this.compileAsync=function(A,B,q=null){const j=this.compile(A,B,q);return new Promise(X=>{function dt(){if(j.forEach(function(Et){Nt.get(Et).currentProgram.isReady()&&j.delete(Et)}),j.size===0){X(A);return}setTimeout(dt,10)}St.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let qt=null;function ce(A){qt&&qt(A)}function fe(){xe.stop()}function jt(){xe.start()}const xe=new hu;xe.setAnimationLoop(ce),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(A){qt=A,ft.setAnimationLoop(A),A===null?xe.stop():xe.start()},ft.addEventListener("sessionstart",fe),ft.addEventListener("sessionend",jt),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(B),B=ft.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,B,S),m=Tt.get(A,v.length),m.init(),v.push(m),gt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix(gt),st=this.localClippingEnabled,J=Ot.init(this.clippingPlanes,st),g=ut.get(A,p.length),g.init(),p.push(g),An(A,B,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(O,U),this.info.render.frame++,J===!0&&Ot.beginShadows();const q=m.state.shadowsArray;if(Q.render(q,A,B),J===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),Gt.render(g,A),m.setupLights(x._useLegacyLights),B.isArrayCamera){const j=B.cameras;for(let X=0,dt=j.length;X<dt;X++){const Et=j[X];El(g,A,Et,Et.viewport)}}else El(g,A,B);S!==null&&(C.updateMultisampleRenderTarget(S),C.updateRenderTargetMipmap(S)),A.isScene===!0&&A.onAfterRender(x,A,B),R.resetDefaultState(),D=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function An(A,B,q,j){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){j&&Rt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(gt);const Et=nt.update(A),It=A.material;It.visible&&g.push(A,Et,It,q,Rt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const Et=nt.update(A),It=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Rt.copy(A.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Rt.copy(Et.boundingSphere.center)),Rt.applyMatrix4(A.matrixWorld).applyMatrix4(gt)),Array.isArray(It)){const Ut=Et.groups;for(let Ht=0,Bt=Ut.length;Ht<Bt;Ht++){const zt=Ut[Ht],pe=It[zt.materialIndex];pe&&pe.visible&&g.push(A,Et,pe,q,Rt.z,zt)}}else It.visible&&g.push(A,Et,It,q,Rt.z,null)}}const dt=A.children;for(let Et=0,It=dt.length;Et<It;Et++)An(dt[Et],B,q,j)}function El(A,B,q,j){const X=A.opaque,dt=A.transmissive,Et=A.transparent;m.setupLightsView(q),J===!0&&Ot.setGlobalState(x.clippingPlanes,q),dt.length>0&&xd(X,dt,B,q),j&&pt.viewport(T.copy(j)),X.length>0&&hs(X,B,q),dt.length>0&&hs(dt,B,q),Et.length>0&&hs(Et,B,q),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function xd(A,B,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const dt=Lt.isWebGL2;mt===null&&(mt=new wn(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?Yn:ci,minFilter:$r,samples:dt?4:0})),x.getDrawingBufferSize(Pt),dt?mt.setSize(Pt.x,Pt.y):mt.setSize(To(Pt.x),To(Pt.y));const Et=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor($),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const It=x.toneMapping;x.toneMapping=li,hs(A,q,j),C.updateMultisampleRenderTarget(mt),C.updateRenderTargetMipmap(mt);let Ut=!1;for(let Ht=0,Bt=B.length;Ht<Bt;Ht++){const zt=B[Ht],pe=zt.object,Ze=zt.geometry,Te=zt.material,Un=zt.group;if(Te.side===pn&&pe.layers.test(j.layers)){const se=Te.side;Te.side=Ve,Te.needsUpdate=!0,Tl(pe,q,j,Ze,Te,Un),Te.side=se,Te.needsUpdate=!0,Ut=!0}}Ut===!0&&(C.updateMultisampleRenderTarget(mt),C.updateRenderTargetMipmap(mt)),x.setRenderTarget(Et),x.setClearColor($,P),x.toneMapping=It}function hs(A,B,q){const j=B.isScene===!0?B.overrideMaterial:null;for(let X=0,dt=A.length;X<dt;X++){const Et=A[X],It=Et.object,Ut=Et.geometry,Ht=j===null?Et.material:j,Bt=Et.group;It.layers.test(q.layers)&&Tl(It,B,q,Ut,Ht,Bt)}}function Tl(A,B,q,j,X,dt){A.onBeforeRender(x,B,q,j,X,dt),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(x,B,q,j,A,dt),X.transparent===!0&&X.side===pn&&X.forceSinglePass===!1?(X.side=Ve,X.needsUpdate=!0,x.renderBufferDirect(q,B,j,X,A,dt),X.side=di,X.needsUpdate=!0,x.renderBufferDirect(q,B,j,X,A,dt),X.side=pn):x.renderBufferDirect(q,B,j,X,A,dt),A.onAfterRender(x,B,q,j,X,dt)}function us(A,B,q){B.isScene!==!0&&(B=Mt);const j=Nt.get(A),X=m.state.lights,dt=m.state.shadowsArray,Et=X.state.version,It=_t.getParameters(A,X.state,dt,B,q),Ut=_t.getProgramCacheKey(It);let Ht=j.programs;j.environment=A.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(A.isMeshStandardMaterial?H:E).get(A.envMap||j.environment),Ht===void 0&&(A.addEventListener("dispose",ct),Ht=new Map,j.programs=Ht);let Bt=Ht.get(Ut);if(Bt!==void 0){if(j.currentProgram===Bt&&j.lightsStateVersion===Et)return wl(A,It),Bt}else It.uniforms=_t.getUniforms(A),A.onBuild(q,It,x),A.onBeforeCompile(It,x),Bt=_t.acquireProgram(It,Ut),Ht.set(Ut,Bt),j.uniforms=It.uniforms;const zt=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(zt.clippingPlanes=Ot.uniform),wl(A,It),j.needsLights=yd(A),j.lightsStateVersion=Et,j.needsLights&&(zt.ambientLightColor.value=X.state.ambient,zt.lightProbe.value=X.state.probe,zt.directionalLights.value=X.state.directional,zt.directionalLightShadows.value=X.state.directionalShadow,zt.spotLights.value=X.state.spot,zt.spotLightShadows.value=X.state.spotShadow,zt.rectAreaLights.value=X.state.rectArea,zt.ltc_1.value=X.state.rectAreaLTC1,zt.ltc_2.value=X.state.rectAreaLTC2,zt.pointLights.value=X.state.point,zt.pointLightShadows.value=X.state.pointShadow,zt.hemisphereLights.value=X.state.hemi,zt.directionalShadowMap.value=X.state.directionalShadowMap,zt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,zt.spotShadowMap.value=X.state.spotShadowMap,zt.spotLightMatrix.value=X.state.spotLightMatrix,zt.spotLightMap.value=X.state.spotLightMap,zt.pointShadowMap.value=X.state.pointShadowMap,zt.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=Bt,j.uniformsList=null,Bt}function bl(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=Xs.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function wl(A,B){const q=Nt.get(A);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function vd(A,B,q,j,X){B.isScene!==!0&&(B=Mt),C.resetTextureUnits();const dt=B.fog,Et=j.isMeshStandardMaterial?B.environment:null,It=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:jn,Ut=(j.isMeshStandardMaterial?H:E).get(j.envMap||Et),Ht=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Bt=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),zt=!!q.morphAttributes.position,pe=!!q.morphAttributes.normal,Ze=!!q.morphAttributes.color;let Te=li;j.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Te=x.toneMapping);const Un=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,se=Un!==void 0?Un.length:0,Vt=Nt.get(j),ya=m.state.lights;if(J===!0&&(st===!0||A!==M)){const hn=A===M&&j.id===D;Ot.setState(j,A,hn)}let he=!1;j.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ya.state.version||Vt.outputColorSpace!==It||X.isBatchedMesh&&Vt.batching===!1||!X.isBatchedMesh&&Vt.batching===!0||X.isInstancedMesh&&Vt.instancing===!1||!X.isInstancedMesh&&Vt.instancing===!0||X.isSkinnedMesh&&Vt.skinning===!1||!X.isSkinnedMesh&&Vt.skinning===!0||X.isInstancedMesh&&Vt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Vt.instancingColor===!1&&X.instanceColor!==null||Vt.envMap!==Ut||j.fog===!0&&Vt.fog!==dt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Ot.numPlanes||Vt.numIntersection!==Ot.numIntersection)||Vt.vertexAlphas!==Ht||Vt.vertexTangents!==Bt||Vt.morphTargets!==zt||Vt.morphNormals!==pe||Vt.morphColors!==Ze||Vt.toneMapping!==Te||Lt.isWebGL2===!0&&Vt.morphTargetsCount!==se)&&(he=!0):(he=!0,Vt.__version=j.version);let _i=Vt.currentProgram;he===!0&&(_i=us(j,B,X));let Al=!1,Dr=!1,Sa=!1;const Le=_i.getUniforms(),xi=Vt.uniforms;if(pt.useProgram(_i.program)&&(Al=!0,Dr=!0,Sa=!0),j.id!==D&&(D=j.id,Dr=!0),Al||M!==A){Le.setValue(k,"projectionMatrix",A.projectionMatrix),Le.setValue(k,"viewMatrix",A.matrixWorldInverse);const hn=Le.map.cameraPosition;hn!==void 0&&hn.setValue(k,Rt.setFromMatrixPosition(A.matrixWorld)),Lt.logarithmicDepthBuffer&&Le.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Le.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Dr=!0,Sa=!0)}if(X.isSkinnedMesh){Le.setOptional(k,X,"bindMatrix"),Le.setOptional(k,X,"bindMatrixInverse");const hn=X.skeleton;hn&&(Lt.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Le.setValue(k,"boneTexture",hn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Le.setOptional(k,X,"batchingTexture"),Le.setValue(k,"batchingTexture",X._matricesTexture,C));const Ea=q.morphAttributes;if((Ea.position!==void 0||Ea.normal!==void 0||Ea.color!==void 0&&Lt.isWebGL2===!0)&&At.update(X,q,_i),(Dr||Vt.receiveShadow!==X.receiveShadow)&&(Vt.receiveShadow=X.receiveShadow,Le.setValue(k,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(xi.envMap.value=Ut,xi.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Dr&&(Le.setValue(k,"toneMappingExposure",x.toneMappingExposure),Vt.needsLights&&Md(xi,Sa),dt&&j.fog===!0&&lt.refreshFogUniforms(xi,dt),lt.refreshMaterialUniforms(xi,j,G,F,mt),Xs.upload(k,bl(Vt),xi,C)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Xs.upload(k,bl(Vt),xi,C),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Le.setValue(k,"center",X.center),Le.setValue(k,"modelViewMatrix",X.modelViewMatrix),Le.setValue(k,"normalMatrix",X.normalMatrix),Le.setValue(k,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const hn=j.uniformsGroups;for(let Ta=0,Sd=hn.length;Ta<Sd;Ta++)if(Lt.isWebGL2){const Cl=hn[Ta];rt.update(Cl,_i),rt.bind(Cl,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function Md(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function yd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(A,B,q){Nt.get(A.texture).__webglTexture=B,Nt.get(A.depthTexture).__webglTexture=q;const j=Nt.get(A);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=q===void 0,j.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,B){const q=Nt.get(A);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,q=0){S=A,w=B,b=q;let j=!0,X=null,dt=!1,Et=!1;if(A){const Ut=Nt.get(A);Ut.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(k.FRAMEBUFFER,null),j=!1):Ut.__webglFramebuffer===void 0?C.setupRenderTarget(A):Ut.__hasExternalTextures&&C.rebindTextures(A,Nt.get(A.texture).__webglTexture,Nt.get(A.depthTexture).__webglTexture);const Ht=A.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Et=!0);const Bt=Nt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Bt[B])?X=Bt[B][q]:X=Bt[B],dt=!0):Lt.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?X=Nt.get(A).__webglMultisampledFramebuffer:Array.isArray(Bt)?X=Bt[q]:X=Bt,T.copy(A.viewport),z.copy(A.scissor),V=A.scissorTest}else T.copy(W).multiplyScalar(G).floor(),z.copy(K).multiplyScalar(G).floor(),V=Z;if(pt.bindFramebuffer(k.FRAMEBUFFER,X)&&Lt.drawBuffers&&j&&pt.drawBuffers(A,X),pt.viewport(T),pt.scissor(z),pt.setScissorTest(V),dt){const Ut=Nt.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ut.__webglTexture,q)}else if(Et){const Ut=Nt.get(A.texture),Ht=B||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ut.__webglTexture,q||0,Ht)}D=-1},this.readRenderTargetPixels=function(A,B,q,j,X,dt,Et){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Nt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(It=It[Et]),It){pt.bindFramebuffer(k.FRAMEBUFFER,It);try{const Ut=A.texture,Ht=Ut.format,Bt=Ut.type;if(Ht!==bn&&ht.convert(Ht)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=Bt===Yn&&(St.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&St.has("EXT_color_buffer_float"));if(Bt!==ci&&ht.convert(Bt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===ri&&(Lt.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-j&&q>=0&&q<=A.height-X&&k.readPixels(B,q,j,X,ht.convert(Ht),ht.convert(Bt),dt)}finally{const Ut=S!==null?Nt.get(S).__webglFramebuffer:null;pt.bindFramebuffer(k.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(A,B,q=0){const j=Math.pow(2,-q),X=Math.floor(B.image.width*j),dt=Math.floor(B.image.height*j);C.setTexture2D(B,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,A.x,A.y,X,dt),pt.unbindTexture()},this.copyTextureToTexture=function(A,B,q,j=0){const X=B.image.width,dt=B.image.height,Et=ht.convert(q.format),It=ht.convert(q.type);C.setTexture2D(q,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment),B.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,j,A.x,A.y,X,dt,Et,It,B.image.data):B.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,j,A.x,A.y,B.mipmaps[0].width,B.mipmaps[0].height,Et,B.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,j,A.x,A.y,Et,It,B.image),j===0&&q.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),pt.unbindTexture()},this.copyTextureToTexture3D=function(A,B,q,j,X=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dt=A.max.x-A.min.x+1,Et=A.max.y-A.min.y+1,It=A.max.z-A.min.z+1,Ut=ht.convert(j.format),Ht=ht.convert(j.type);let Bt;if(j.isData3DTexture)C.setTexture3D(j,0),Bt=k.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)C.setTexture2DArray(j,0),Bt=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const zt=k.getParameter(k.UNPACK_ROW_LENGTH),pe=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ze=k.getParameter(k.UNPACK_SKIP_PIXELS),Te=k.getParameter(k.UNPACK_SKIP_ROWS),Un=k.getParameter(k.UNPACK_SKIP_IMAGES),se=q.isCompressedTexture?q.mipmaps[X]:q.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,se.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,se.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,A.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,A.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,A.min.z),q.isDataTexture||q.isData3DTexture?k.texSubImage3D(Bt,X,B.x,B.y,B.z,dt,Et,It,Ut,Ht,se.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Bt,X,B.x,B.y,B.z,dt,Et,It,Ut,se.data)):k.texSubImage3D(Bt,X,B.x,B.y,B.z,dt,Et,It,Ut,Ht,se),k.pixelStorei(k.UNPACK_ROW_LENGTH,zt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pe),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ze),k.pixelStorei(k.UNPACK_SKIP_ROWS,Te),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Un),X===0&&j.generateMipmaps&&k.generateMipmap(Bt),pt.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),pt.unbindTexture()},this.resetState=function(){w=0,b=0,S=null,pt.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Yo?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===fa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ce?Ii:Zh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ii?Ce:jn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class w0 extends _u{}w0.prototype.isWebGL1Renderer=!0;class Jo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(t),this.density=e}clone(){return new Jo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class A0 extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class kr extends ki{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Yc=new L,jc=new L,$c=new de,eo=new ls,Us=new os;class C0 extends we{constructor(t=new ge,e=new kr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Yc.fromBufferAttribute(e,i-1),jc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Yc.distanceTo(jc);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(i),Us.radius+=r,t.ray.intersectsSphere(Us)===!1)return;$c.copy(i).invert(),eo.copy(t.ray).applyMatrix4($c);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,h=new L,d=new L,u=new L,f=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const p=Math.max(0,a.start),v=Math.min(_.count,a.start+a.count);for(let x=p,y=v-1;x<y;x+=f){const w=_.getX(x),b=_.getX(x+1);if(c.fromBufferAttribute(m,w),h.fromBufferAttribute(m,b),eo.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(u);D<t.near||D>t.far||e.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let x=p,y=v-1;x<y;x+=f){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),eo.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(u);b<t.near||b>t.far||e.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Kc=new L,Zc=new L;class Ns extends C0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Kc.fromBufferAttribute(e,i),Zc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Kc.distanceTo(Zc);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qo extends ki{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Jc=new de,Ao=new ls,Os=new os,Fs=new L;class xu extends we{constructor(t=new ge,e=new Qo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(i),Os.radius+=r,t.ray.intersectsSphere(Os)===!1)return;Jc.copy(i).invert(),Ao.copy(t.ray).applyMatrix4(Jc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=u,g=f;_<g;_++){const m=c.getX(_);Fs.fromBufferAttribute(d,m),Qc(Fs,m,l,i,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let _=u,g=f;_<g;_++)Fs.fromBufferAttribute(d,_),Qc(Fs,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Qc(s,t,e,n,i,r,a){const o=Ao.distanceSqToPoint(s);if(o<e){const l=new L;Ao.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class ia extends We{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _a extends ge{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new L,y=new L,w=new L;for(let b=0;b<e.length;b+=3)f(e[b+0],x),f(e[b+1],y),f(e[b+2],w),l(x,y,w,v)}function l(v,x,y,w){const b=w+1,S=[];for(let D=0;D<=b;D++){S[D]=[];const M=v.clone().lerp(y,D/b),T=x.clone().lerp(y,D/b),z=b-D;for(let V=0;V<=z;V++)V===0&&D===b?S[D][V]=M:S[D][V]=M.clone().lerp(T,V/z)}for(let D=0;D<b;D++)for(let M=0;M<2*(b-D)-1;M++){const T=Math.floor(M/2);M%2===0?(u(S[D][T+1]),u(S[D+1][T]),u(S[D][T])):(u(S[D][T+1]),u(S[D+1][T+1]),u(S[D+1][T]))}}function c(v){const x=new L;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(v),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const v=new L;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const y=m(v)/2/Math.PI+.5,w=p(v)/Math.PI+.5;a.push(y,1-w)}_(),d()}function d(){for(let v=0;v<a.length;v+=6){const x=a[v+0],y=a[v+2],w=a[v+4],b=Math.max(x,y,w),S=Math.min(x,y,w);b>.9&&S<.1&&(x<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,x){const y=v*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function _(){const v=new L,x=new L,y=new L,w=new L,b=new xt,S=new xt,D=new xt;for(let M=0,T=0;M<r.length;M+=9,T+=6){v.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),b.set(a[T+0],a[T+1]),S.set(a[T+2],a[T+3]),D.set(a[T+4],a[T+5]),w.copy(v).add(x).add(y).divideScalar(3);const z=m(w);g(b,T+0,v,z),g(S,T+2,x,z),g(D,T+4,y,z)}}function g(v,x,y,w){w<0&&v.x===1&&(a[x]=v.x-1),y.x===0&&y.z===0&&(a[x]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _a(t.vertices,t.indices,t.radius,t.details)}}const Bs=new L,zs=new L,no=new L,ks=new en;class R0 extends ge{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Vr*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:m,c:p}=ks;if(g.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),ks.getNormal(no),d[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const x=(v+1)%3,y=d[v],w=d[x],b=ks[h[v]],S=ks[h[x]],D=`${y}_${w}`,M=`${w}_${y}`;M in u&&u[M]?(no.dot(u[M].normal)<=r&&(f.push(b.x,b.y,b.z),f.push(S.x,S.y,S.z)),u[M]=null):D in u||(u[D]={index0:c[v],index1:c[x],normal:no.clone()})}}for(const _ in u)if(u[_]){const{index0:g,index1:m}=u[_];Bs.fromBufferAttribute(o,g),zs.fromBufferAttribute(o,m),f.push(Bs.x,Bs.y,Bs.z),f.push(zs.x,zs.y,zs.z)}this.setAttribute("position",new Jt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class tl extends _a{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tl(t.radius,t.detail)}}class ra extends ge{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,f=new L,_=new xt;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}d+=u}for(let g=0;g<i;g++){const m=g*(n+1);for(let p=0;p<n;p++){const v=p+m,x=v,y=v+n+1,w=v+n+2,b=v+1;o.push(x,y,b),o.push(y,w,b)}}this.setIndex(o),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class el extends ge{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new L,u=new L,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let w=0;w<=e;w++){const b=w/e;d.x=-t*Math.cos(i+b*r)*Math.sin(a+x*o),d.y=t*Math.cos(a+x*o),d.z=t*Math.sin(i+b*r)*Math.sin(a+x*o),_.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(b+y,1-x),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const x=h[p][v+1],y=h[p][v],w=h[p+1][v],b=h[p+1][v+1];(p!==0||a>0)&&f.push(x,y,b),(p!==n-1||l<Math.PI)&&f.push(y,w,b)}this.setIndex(f),this.setAttribute("position",new Jt(_,3)),this.setAttribute("normal",new Jt(g,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class nl extends _a{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new nl(t.radius,t.detail)}}class ur extends ge{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new L,d=new L,u=new L;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const g=_/i*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(g),d.y=(t+e*Math.cos(m))*Math.sin(g),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const g=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,v=(i+1)*f+_;a.push(g,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ur(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class th extends ge{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new L,r=new L;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,f=d.count;for(let _=u,g=u+f;_<g;_+=3)for(let m=0;m<3;m++){const p=o.getX(_+m),v=o.getX(_+(m+1)%3);i.fromBufferAttribute(a,p),r.fromBufferAttribute(a,v),eh(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),eh(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Jt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function eh(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}class P0 extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class L0 extends ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class D0 extends L0{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class il extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const io=new de,nh=new L,ih=new L;class vu{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(nh),ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ih),e.updateMatrixWorld(),io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const rh=new de,Br=new L,ro=new L;class I0 extends vu{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Br.setFromMatrixPosition(t.matrixWorld),n.position.copy(Br),ro.copy(n.position),ro.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ro),n.updateMatrixWorld(),i.makeTranslation(-Br.x,-Br.y,-Br.z),rh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh)}}class Co extends il{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new I0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class U0 extends vu{constructor(){super(new Ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class so extends il{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new U0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class N0 extends il{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=sh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function sh(){return(typeof performance>"u"?Date:performance).now()}class O0{constructor(t,e,n=0,i=1/0){this.ray=new ls(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Ro(t,this,n,e),n.sort(ah),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Ro(t[i],this,n,e);return n.sort(ah),n}}function ah(s,t){return s.distance-t.distance}function Ro(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Ro(i[r],t,e,!0)}}class oh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const lh=new L,Gs=new L;class F0{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){lh.subVectors(t,this.start),Gs.subVectors(this.end,this.start);const n=Gs.dot(Gs);let r=Gs.dot(lh)/n;return e&&(r=Re(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wo);const ch={type:"change"},ao={type:"start"},hh={type:"end"},Hs=new ls,uh=new Vn,B0=Math.cos(70*yf.DEG2RAD);class z0 extends zi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Tt),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Tt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ch),n.update(),r=i.NONE},this.update=function(){const R=new L,rt=new Bi().setFromUnitVectors(t.up,new L(0,1,0)),yt=rt.clone().invert(),ft=new L,it=new Bi,I=new L,at=2*Math.PI;return function(Dt=null){const wt=n.object.position;R.copy(wt).sub(n.target),R.applyQuaternion(rt),o.setFromVector3(R),n.autoRotate&&r===i.NONE&&V(T(Dt)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Xt=n.minAzimuthAngle,qt=n.maxAzimuthAngle;isFinite(Xt)&&isFinite(qt)&&(Xt<-Math.PI?Xt+=at:Xt>Math.PI&&(Xt-=at),qt<-Math.PI?qt+=at:qt>Math.PI&&(qt-=at),Xt<=qt?o.theta=Math.max(Xt,Math.min(qt,o.theta)):o.theta=o.theta>(Xt+qt)/2?Math.max(Xt,o.theta):Math.min(qt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&b||n.object.isOrthographicCamera?o.radius=W(o.radius):o.radius=W(o.radius*c),R.setFromSpherical(o),R.applyQuaternion(yt),wt.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let ce=!1;if(n.zoomToCursor&&b){let fe=null;if(n.object.isPerspectiveCamera){const jt=R.length();fe=W(jt*c);const xe=jt-fe;n.object.position.addScaledVector(y,xe),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const jt=new L(w.x,w.y,0);jt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ce=!0;const xe=new L(w.x,w.y,0);xe.unproject(n.object),n.object.position.sub(xe).add(jt),n.object.updateMatrixWorld(),fe=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;fe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(fe).add(n.object.position):(Hs.origin.copy(n.object.position),Hs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Hs.direction))<B0?t.lookAt(n.target):(uh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Hs.intersectPlane(uh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ce=!0);return c=1,b=!1,ce||ft.distanceToSquared(n.object.position)>a||8*(1-it.dot(n.object.quaternion))>a||I.distanceToSquared(n.target)>0?(n.dispatchEvent(ch),ft.copy(n.object.position),it.copy(n.object.quaternion),I.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Gt),n.domElement.removeEventListener("pointerdown",C),n.domElement.removeEventListener("pointercancel",H),n.domElement.removeEventListener("wheel",nt),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",H),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Tt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new oh,l=new oh;let c=1;const h=new L,d=new xt,u=new xt,f=new xt,_=new xt,g=new xt,m=new xt,p=new xt,v=new xt,x=new xt,y=new L,w=new xt;let b=!1;const S=[],D={};let M=!1;function T(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function z(R){const rt=Math.abs(R*.01);return Math.pow(.95,n.zoomSpeed*rt)}function V(R){l.theta-=R}function $(R){l.phi-=R}const P=function(){const R=new L;return function(yt,ft){R.setFromMatrixColumn(ft,0),R.multiplyScalar(-yt),h.add(R)}}(),N=function(){const R=new L;return function(yt,ft){n.screenSpacePanning===!0?R.setFromMatrixColumn(ft,1):(R.setFromMatrixColumn(ft,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(yt),h.add(R)}}(),F=function(){const R=new L;return function(yt,ft){const it=n.domElement;if(n.object.isPerspectiveCamera){const I=n.object.position;R.copy(I).sub(n.target);let at=R.length();at*=Math.tan(n.object.fov/2*Math.PI/180),P(2*yt*at/it.clientHeight,n.object.matrix),N(2*ft*at/it.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(yt*(n.object.right-n.object.left)/n.object.zoom/it.clientWidth,n.object.matrix),N(ft*(n.object.top-n.object.bottom)/n.object.zoom/it.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function G(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(R,rt){if(!n.zoomToCursor)return;b=!0;const yt=n.domElement.getBoundingClientRect(),ft=R-yt.left,it=rt-yt.top,I=yt.width,at=yt.height;w.x=ft/I*2-1,w.y=-(it/at)*2+1,y.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function W(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function K(R){d.set(R.clientX,R.clientY)}function Z(R){U(R.clientX,R.clientX),p.set(R.clientX,R.clientY)}function Y(R){_.set(R.clientX,R.clientY)}function J(R){u.set(R.clientX,R.clientY),f.subVectors(u,d).multiplyScalar(n.rotateSpeed);const rt=n.domElement;V(2*Math.PI*f.x/rt.clientHeight),$(2*Math.PI*f.y/rt.clientHeight),d.copy(u),n.update()}function st(R){v.set(R.clientX,R.clientY),x.subVectors(v,p),x.y>0?G(z(x.y)):x.y<0&&O(z(x.y)),p.copy(v),n.update()}function mt(R){g.set(R.clientX,R.clientY),m.subVectors(g,_).multiplyScalar(n.panSpeed),F(m.x,m.y),_.copy(g),n.update()}function gt(R){U(R.clientX,R.clientY),R.deltaY<0?O(z(R.deltaY)):R.deltaY>0&&G(z(R.deltaY)),n.update()}function Pt(R){let rt=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),rt=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),rt=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),rt=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),rt=!0;break}rt&&(R.preventDefault(),n.update())}function Rt(R){if(S.length===1)d.set(R.pageX,R.pageY);else{const rt=ht(R),yt=.5*(R.pageX+rt.x),ft=.5*(R.pageY+rt.y);d.set(yt,ft)}}function Mt(R){if(S.length===1)_.set(R.pageX,R.pageY);else{const rt=ht(R),yt=.5*(R.pageX+rt.x),ft=.5*(R.pageY+rt.y);_.set(yt,ft)}}function Ft(R){const rt=ht(R),yt=R.pageX-rt.x,ft=R.pageY-rt.y,it=Math.sqrt(yt*yt+ft*ft);p.set(0,it)}function k(R){n.enableZoom&&Ft(R),n.enablePan&&Mt(R)}function _e(R){n.enableZoom&&Ft(R),n.enableRotate&&Rt(R)}function St(R){if(S.length==1)u.set(R.pageX,R.pageY);else{const yt=ht(R),ft=.5*(R.pageX+yt.x),it=.5*(R.pageY+yt.y);u.set(ft,it)}f.subVectors(u,d).multiplyScalar(n.rotateSpeed);const rt=n.domElement;V(2*Math.PI*f.x/rt.clientHeight),$(2*Math.PI*f.y/rt.clientHeight),d.copy(u)}function Lt(R){if(S.length===1)g.set(R.pageX,R.pageY);else{const rt=ht(R),yt=.5*(R.pageX+rt.x),ft=.5*(R.pageY+rt.y);g.set(yt,ft)}m.subVectors(g,_).multiplyScalar(n.panSpeed),F(m.x,m.y),_.copy(g)}function pt(R){const rt=ht(R),yt=R.pageX-rt.x,ft=R.pageY-rt.y,it=Math.sqrt(yt*yt+ft*ft);v.set(0,it),x.set(0,Math.pow(v.y/p.y,n.zoomSpeed)),G(x.y),p.copy(v);const I=(R.pageX+rt.x)*.5,at=(R.pageY+rt.y)*.5;U(I,at)}function Qt(R){n.enableZoom&&pt(R),n.enablePan&&Lt(R)}function Nt(R){n.enableZoom&&pt(R),n.enableRotate&&St(R)}function C(R){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",H)),At(R),R.pointerType==="touch"?Ot(R):et(R))}function E(R){n.enabled!==!1&&(R.pointerType==="touch"?Q(R):tt(R))}function H(R){Ct(R),S.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",H)),n.dispatchEvent(hh),r=i.NONE}function et(R){let rt;switch(R.button){case 0:rt=n.mouseButtons.LEFT;break;case 1:rt=n.mouseButtons.MIDDLE;break;case 2:rt=n.mouseButtons.RIGHT;break;default:rt=-1}switch(rt){case Hi.DOLLY:if(n.enableZoom===!1)return;Z(R),r=i.DOLLY;break;case Hi.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;Y(R),r=i.PAN}else{if(n.enableRotate===!1)return;K(R),r=i.ROTATE}break;case Hi.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;K(R),r=i.ROTATE}else{if(n.enablePan===!1)return;Y(R),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ao)}function tt(R){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;J(R);break;case i.DOLLY:if(n.enableZoom===!1)return;st(R);break;case i.PAN:if(n.enablePan===!1)return;mt(R);break}}function nt(R){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(R.preventDefault(),n.dispatchEvent(ao),gt(_t(R)),n.dispatchEvent(hh))}function _t(R){const rt=R.deltaMode,yt={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(rt){case 1:yt.deltaY*=16;break;case 2:yt.deltaY*=100;break}return R.ctrlKey&&!M&&(yt.deltaY*=10),yt}function lt(R){R.key==="Control"&&(M=!0,document.addEventListener("keyup",ut,{passive:!0,capture:!0}))}function ut(R){R.key==="Control"&&(M=!1,document.removeEventListener("keyup",ut,{passive:!0,capture:!0}))}function Tt(R){n.enabled===!1||n.enablePan===!1||Pt(R)}function Ot(R){switch(vt(R),S.length){case 1:switch(n.touches.ONE){case Vi.ROTATE:if(n.enableRotate===!1)return;Rt(R),r=i.TOUCH_ROTATE;break;case Vi.PAN:if(n.enablePan===!1)return;Mt(R),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Vi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;k(R),r=i.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(R),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ao)}function Q(R){switch(vt(R),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;St(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Lt(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Qt(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Nt(R),n.update();break;default:r=i.NONE}}function Gt(R){n.enabled!==!1&&R.preventDefault()}function At(R){S.push(R.pointerId)}function Ct(R){delete D[R.pointerId];for(let rt=0;rt<S.length;rt++)if(S[rt]==R.pointerId){S.splice(rt,1);return}}function vt(R){let rt=D[R.pointerId];rt===void 0&&(rt=new xt,D[R.pointerId]=rt),rt.set(R.pageX,R.pageY)}function ht(R){const rt=R.pointerId===S[0]?S[1]:S[0];return D[rt]}n.domElement.addEventListener("contextmenu",Gt),n.domElement.addEventListener("pointerdown",C),n.domElement.addEventListener("pointercancel",H),n.domElement.addEventListener("wheel",nt,{passive:!1}),document.addEventListener("keydown",lt,{passive:!0,capture:!0}),this.update()}}const yu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Lr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const k0=new Ko(-1,1,1,-1,0,1);class G0 extends ge{constructor(){super(),this.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jt([0,2,0,0,2,0],2))}}const H0=new G0;class rl{constructor(t){this._mesh=new Me(H0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,k0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class V0 extends Lr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof He?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Kr.clone(t.uniforms),this.material=new He({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new rl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class dh extends Lr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class W0 extends Lr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class X0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new xt);this._width=n.width,this._height=n.height,e=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Yn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new V0(yu),this.copyPass.material.blending=qn,this.clock=new Mu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}dh!==void 0&&(a instanceof dh?n=!0:a instanceof W0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class q0 extends Lr{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new bt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const Y0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new bt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Er extends Lr{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new xt(t.x,t.y):new xt(256,256),this.clearColor=new bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(r,a,{type:Yn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new wn(r,a,{type:Yn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new wn(r,a,{type:Yn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=Y0;this.highPassUniforms=Kr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new He({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new xt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=yu;this.copyUniforms=Kr.clone(h.uniforms),this.blendMaterial=new He({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ue,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new bt,this.oldClearAlpha=1,this.basic=new En,this.fsQuad=new rl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new xt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Er.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Er.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new He({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new xt(.5,.5)},direction:{value:new xt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new He({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Er.BlurDirectionX=new xt(1,0);Er.BlurDirectionY=new xt(0,1);const j0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class $0 extends Lr{constructor(){super();const t=j0;this.uniforms=Kr.clone(t.uniforms),this.material=new P0({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new rl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Zt.getTransfer(this._outputColorSpace)===ne&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===kh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Hn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Su(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var on={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zr={duration:.5,overwrite:!1,delay:0},sl,Pe,re,gn=1e8,ee=1/gn,Po=Math.PI*2,K0=Po/4,Z0=0,Eu=Math.sqrt,J0=Math.cos,Q0=Math.sin,Ae=function(t){return typeof t=="string"},ue=function(t){return typeof t=="function"},$n=function(t){return typeof t=="number"},al=function(t){return typeof t>"u"},In=function(t){return typeof t=="object"},qe=function(t){return t!==!1},ol=function(){return typeof window<"u"},Vs=function(t){return ue(t)||Ae(t)},Tu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Oe=Array.isArray,tx=/random\([^)]+\)/g,ex=/,\s*/g,fh=/(?:-?\.?\d|\.)+/gi,bu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,dr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,oo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wu=/[+-]=-?[.\d]+/,nx=/[^,'"\[\]\s]+/gi,ix=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,oe,Cn,Lo,ll,ln={},sa={},Au,Cu=function(t){return(sa=Tr(t,ln))&&Ke},cl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Jr=function(t,e){return!e&&console.warn(t)},Ru=function(t,e){return t&&(ln[t]=e)&&sa&&(sa[t]=e)||ln},Qr=function(){return 0},rx={suppressEvents:!0,isStart:!0,kill:!1},qs={suppressEvents:!0,kill:!1},sx={suppressEvents:!0},hl={},hi=[],Do={},Pu,tn={},lo={},ph=30,Ys=[],ul="",dl=function(t){var e=t[0],n,i;if(In(e)||ue(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ys.length;i--&&!Ys[i].targetTest(e););n=Ys[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ju(t[i],n)))||t.splice(i,1);return t},Ui=function(t){return t._gsap||dl(_n(t))[0]._gsap},Lu=function(t,e,n){return(n=t[e])&&ue(n)?t[e]():al(n)&&t.getAttribute&&t.getAttribute(e)||n},Ye=function(t,e){return(t=t.split(",")).forEach(e)||t},me=function(t){return Math.round(t*1e5)/1e5||0},ae=function(t){return Math.round(t*1e7)/1e7||0},gr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},ax=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},aa=function(){var t=hi.length,e=hi.slice(0),n,i;for(Do={},hi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},fl=function(t){return!!(t._initted||t._startAt||t.add)},Du=function(t,e,n,i){hi.length&&!Pe&&aa(),t.render(e,n,!!(Pe&&e<0&&fl(t))),hi.length&&!Pe&&aa()},Iu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(nx).length<2?e:Ae(t)?t.trim():t},Uu=function(t){return t},cn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ox=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Tr=function(t,e){for(var n in e)t[n]=e[n];return t},mh=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=In(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},oa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Xr=function(t){var e=t.parent||oe,n=t.keyframes?ox(Oe(t.keyframes)):cn;if(qe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},lx=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Nu=function(t,e,n,i,r){var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},xa=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},fi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ni=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},cx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Io=function(t,e,n,i){return t._startAt&&(Pe?t._startAt.revert(qs):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},hx=function s(t){return!t||t._ts&&s(t.parent)},gh=function(t){return t._repeat?br(t._tTime,t=t.duration()+t._rDelay)*t:0},br=function(t,e){var n=Math.floor(t=ae(t/e));return t&&n===t?n-1:n},la=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},va=function(t){return t._end=ae(t._start+(t._tDur/Math.abs(t._ts||t._rts||ee)||0))},Ma=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ae(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),va(t),n._dirty||Ni(n,t)),t},Ou=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=la(t.rawTime(),e),(!e._dur||cs(0,e.totalDuration(),n)-e._tTime>ee)&&e.render(n,!0)),Ni(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ee}},Ln=function(t,e,n,i){return e.parent&&fi(e),e._start=ae(($n(n)?n:n||t!==oe?dn(t,n,e):t._time)+e._delay),e._end=ae(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Nu(t,e,"_first","_last",t._sort?"_start":0),Uo(e)||(t._recent=e),i||Ou(t,e),t._ts<0&&Ma(t,t._tTime),t},Fu=function(t,e){return(ln.ScrollTrigger||cl("scrollTrigger",e))&&ln.ScrollTrigger.create(e,t)},Bu=function(t,e,n,i,r){if(ml(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Pe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Pu!==rn.frame)return hi.push(t),t._lazy=[r,i],1},ux=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Uo=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},dx=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&ux(t)&&!(!t._initted&&Uo(t))||(t._ts<0||t._dp._ts<0)&&!Uo(t))?0:1,o=t._rDelay,l=0,c,h,d;if(o&&t._repeat&&(l=cs(0,t._tDur,e),h=br(l,o),t._yoyo&&h&1&&(a=1-a),h!==br(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||Pe||i||t._zTime===ee||!e&&t._zTime){if(!t._initted&&Bu(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?ee:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Io(t,e,n,!0),t._onUpdate&&!n&&sn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&sn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&fi(t,1),!n&&!Pe&&(sn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},fx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},wr=function(t,e,n,i){var r=t._repeat,a=ae(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:ae(a*(r+1)+t._rDelay*r):a,o>0&&!i&&Ma(t,t._tTime=t._tDur*o),t.parent&&va(t),n||Ni(t.parent,t),t},_h=function(t){return t instanceof Ge?Ni(t):wr(t,t._dur)},px={_start:0,endTime:Qr,totalDuration:Qr},dn=function s(t,e,n){var i=t.labels,r=t._recent||px,a=t.duration()>=gn?r.endTime(!1):t._dur,o,l,c;return Ae(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Oe(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},qr=function(t,e,n){var i=$n(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=qe(l.vars.inherit)&&l.parent;a.immediateRender=qe(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new ye(e[0],a,e[r+1])},gi=function(t,e){return t||t===0?e(t):e},cs=function(t,e,n){return n<t?t:n>e?e:n},Ne=function(t,e){return!Ae(t)||!(e=ix.exec(t))?"":e[1]},mx=function(t,e,n){return gi(n,function(i){return cs(t,e,i)})},No=[].slice,zu=function(t,e){return t&&In(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&In(t[0]))&&!t.nodeType&&t!==Cn},gx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Ae(i)&&!e||zu(i,1)?(r=n).push.apply(r,_n(i)):n.push(i)})||n},_n=function(t,e,n){return re&&!e&&re.selector?re.selector(t):Ae(t)&&!n&&(Lo||!Ar())?No.call((e||ll).querySelectorAll(t),0):Oe(t)?gx(t,n):zu(t)?No.call(t,0):t?[t]:[]},Oo=function(t){return t=_n(t)[0]||Jr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return _n(e,n.querySelectorAll?n:n===t?Jr("Invalid scope")||ll.createElement("div"):t)}},ku=function(t){return t.sort(function(){return .5-Math.random()})},Gu=function(t){if(ue(t))return t;var e=In(t)?t:{each:t},n=Oi(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,d=i;return Ae(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(u,f,_){var g=(_||e).length,m=a[g],p,v,x,y,w,b,S,D,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,gn])[1],!M){for(S=-gn;S<(S=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=a[g]=[],p=l?Math.min(M,g)*h-.5:i%M,v=M===gn?0:l?g*d/M-.5:i/M|0,S=0,D=gn,b=0;b<g;b++)x=b%M-p,y=v-(b/M|0),m[b]=w=c?Math.abs(c==="y"?y:x):Eu(x*x+y*y),w>S&&(S=w),w<D&&(D=w);i==="random"&&ku(m),m.max=S-D,m.min=D,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Ne(e.amount||e.each)||0,n=n&&g<0?Rx(n):n}return g=(m[u]-m.min)/m.max||0,ae(m.b+(n?n(g):g)*m.v)+m.u}},Fo=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ae(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+($n(n)?0:Ne(n))}},Hu=function(t,e){var n=Oe(t),i,r;return!n&&In(t)&&(i=n=t.radius||gn,t.values?(t=_n(t.values),(r=!$n(t[0]))&&(i*=i)):t=Fo(t.increment)),gi(e,n?ue(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=gn,h=0,d=t.length,u,f;d--;)r?(u=t[d].x-o,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-o),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:a,r||h===a||$n(a)?h:h+Ne(a)}:Fo(t))},Vu=function(t,e,n,i){return gi(Oe(t)?!e:n===!0?!!(n=0):!i,function(){return Oe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},_x=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},xx=function(t,e){return function(n){return t(parseFloat(n))+(e||Ne(n))}},vx=function(t,e,n){return Xu(t,e,0,1,n)},Wu=function(t,e,n){return gi(n,function(i){return t[~~e(i)]})},Mx=function s(t,e,n){var i=e-t;return Oe(t)?Wu(t,s(0,t.length),e):gi(n,function(r){return(i+(r-t)%i)%i+t})},yx=function s(t,e,n){var i=e-t,r=i*2;return Oe(t)?Wu(t,s(0,t.length-1),e):gi(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},ts=function(t){return t.replace(tx,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(ex);return Vu(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Xu=function(t,e,n,i,r){var a=e-t,o=i-n;return gi(r,function(l){return n+((l-t)/a*o||0)})},Sx=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var a=Ae(t),o={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Oe(t)&&!Oe(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(_){_*=d;var g=Math.min(u,~~_);return h[g](_-g)},n=e}else i||(t=Tr(Oe(t)?[]:{},t));if(!h){for(l in e)pl.call(o,t,l,"get",e[l]);r=function(_){return xl(_,o)||(a?t.p:t)}}}return gi(n,r)},xh=function(t,e,n){var i=t.labels,r=gn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},sn=function(t,e,n){var i=t.vars,r=i[e],a=re,o=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&hi.length&&aa(),o&&(re=o),h=l?r.apply(c,l):r.call(c),re=a,h},Gr=function(t){return fi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Pe),t.progress()<1&&sn(t,"onInterrupt"),t},fr,qu=[],Yu=function(t){if(t)if(t=!t.name&&t.default||t,ol()||t.headless){var e=t.name,n=ue(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Qr,render:xl,add:pl,kill:zx,modifier:Bx,rawVars:0},a={targetTest:0,get:0,getSetter:_l,aliases:{},register:0};if(Ar(),t!==i){if(tn[e])return;cn(i,cn(oa(t,r),a)),Tr(i.prototype,Tr(r,oa(t,a))),tn[i.prop=e]=i,t.targetTest&&(Ys.push(i),hl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ru(e,i),t.register&&t.register(Ke,i,je)}else qu.push(t)},te=255,Hr={aqua:[0,te,te],lime:[0,te,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,te],navy:[0,0,128],white:[te,te,te],olive:[128,128,0],yellow:[te,te,0],orange:[te,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[te,0,0],pink:[te,192,203],cyan:[0,te,te],transparent:[te,te,te,0]},co=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*te+.5|0},ju=function(t,e,n){var i=t?$n(t)?[t>>16,t>>8&te,t&te]:0:Hr.black,r,a,o,l,c,h,d,u,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Hr[t])i=Hr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&te,i&te,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&te,t&te]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(fh),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=co(l+1/3,r,a),i[1]=co(l,r,a),i[2]=co(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(bu),n&&i.length<4&&(i[3]=1),i}else i=t.match(fh)||Hr.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/te,a=i[1]/te,o=i[2]/te,d=Math.max(r,a,o),u=Math.min(r,a,o),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(a-o)/f+(a<o?6:0):d===a?(o-r)/f+2:(r-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},$u=function(t){var e=[],n=[],i=-1;return t.split(ui).forEach(function(r){var a=r.match(dr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},vh=function(t,e,n){var i="",r=(t+i).match(ui),a=e?"hsla(":"rgba(",o=0,l,c,h,d;if(!r)return t;if(r=r.map(function(u){return(u=ju(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=$u(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ui,"1").split(dr),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(ui),d=c.length-1;o<d;o++)i+=c[o]+r[o];return i+c[d]},ui=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Hr)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),Ex=/hsl[a]?\(/,Ku=function(t){var e=t.join(" "),n;if(ui.lastIndex=0,ui.test(e))return n=Ex.test(e),t[1]=vh(t[1],n),t[0]=vh(t[0],n,$u(t[1])),!0},es,rn=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,d,u,f,_=function g(m){var p=s()-i,v=m===!0,x,y,w,b;if((p>t||p<0)&&(n+=p-e),i+=p,w=i-n,x=w-a,(x>0||v)&&(b=++d.frame,u=w-d.time*1e3,d.time=w=w/1e3,a+=x+(x>=r?4:r-x),y=1),v||(l=c(g)),y)for(f=0;f<o.length;f++)o[f](w,u,b,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Au&&(!Lo&&ol()&&(Cn=Lo=window,ll=Cn.document||{},ln.gsap=Ke,(Cn.gsapVersions||(Cn.gsapVersions=[])).push(Ke.version),Cu(sa||Cn.GreenSockGlobals||!Cn.gsap&&Cn||{}),qu.forEach(Yu)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,a-d.time*1e3+1|0)},es=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),es=0,c=Qr},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),a=d.time*1e3+r},add:function(m,p,v){var x=p?function(y,w,b,S){m(y,w,b,S),d.remove(x)}:m;return d.remove(m),o[v?"unshift":"push"](x),Ar(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},d}(),Ar=function(){return!es&&rn.wake()},Yt={},Tx=/^[\d.\-M][\d.\-,\s]/,bx=/["']/g,wx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(bx,"").trim():+c,i=l.substr(o+1).trim();return e},Ax=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Cx=function(t){var e=(t+"").split("("),n=Yt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[wx(e[1])]:Ax(t).split(",").map(Iu)):Yt._CE&&Tx.test(t)?Yt._CE("",t):n},Rx=function(t){return function(e){return 1-t(1-e)}},Oi=function(t,e){return t&&(ue(t)?t:Yt[t]||Cx(t))||e},Gi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return Ye(t,function(o){Yt[o]=ln[o]=r,Yt[a=o.toLowerCase()]=n;for(var l in r)Yt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Yt[o+"."+l]=r[l]}),r},Zu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ho=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/Po*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Q0((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Zu(o);return r=Po/r,l.config=function(c,h){return s(t,c,h)},l},uo=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Zu(n);return i.config=function(r){return s(t,r)},i};Ye("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Gi(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Yt.Linear.easeNone=Yt.none=Yt.Linear.easeIn;Gi("Elastic",ho("in"),ho("out"),ho());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};Gi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Gi("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Gi("Circ",function(s){return-(Eu(1-s*s)-1)});Gi("Sine",function(s){return s===1?1:-J0(s*K0)+1});Gi("Back",uo("in"),uo("out"),uo());Yt.SteppedEase=Yt.steps=ln.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-ee;return function(o){return((i*cs(0,a,o)|0)+r)*n}}};Zr.ease=Yt["quad.out"];Ye("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return ul+=s+","+s+"Params,"});var Ju=function(t,e){this.id=Z0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Lu,this.set=e?e.getSetter:_l},ns=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,wr(this,+e.duration,1,1),this.data=e.data,re&&(this._ctx=re,re.data.push(this)),es||rn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,wr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ar(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ma(this,n),!r._dp||r.parent||Ou(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ln(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ee||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Du(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+gh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+gh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?br(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ee?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?la(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ee?0:this._rts,this.totalTime(cs(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),va(this),cx(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ar(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ee&&(this._tTime-=ee)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ae(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ln(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(qe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?la(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=sx);var i=Pe;return Pe=n,fl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Pe=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,_h(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,_h(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(dn(this,n),qe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,qe(i)),this._dur||(this._zTime=-ee),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ee,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ee)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=ue(n)?n:Uu,l=function(){var h=i.then;i.then=null,r&&r(),ue(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Gr(this)},s}();cn(ns.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ee,_prom:0,_ps:!1,_rts:1});var Ge=function(s){Su(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=qe(n.sortChildren),oe&&Ln(n.parent||oe,Hn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Fu(Hn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return qr(0,arguments,this),this},e.from=function(i,r,a){return qr(1,arguments,this),this},e.fromTo=function(i,r,a,o){return qr(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,Xr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ye(i,r,dn(this,a),1),this},e.call=function(i,r,a){return Ln(this,ye.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new ye(i,a,dn(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,Xr(a).immediateRender=qe(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},e.staggerFromTo=function(i,r,a,o,l,c,h,d){return o.startAt=a,Xr(o).immediateRender=qe(o.immediateRender),this.staggerTo(i,r,o,l,c,h,d)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ae(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,_,g,m,p,v,x,y,w,b,S;if(this!==oe&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,y=this._start,x=this._ts,p=!x,d&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(u=ae(h%m),h===l?(g=this._repeat,u=c):(w=ae(h/m),g=~~w,g&&g===w&&(u=c,g--),u>c&&(u=c)),w=br(this._tTime,m),!o&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),b&&g&1&&(u=c-u,S=1),g!==w&&!this._lock){var D=b&&w&1,M=D===(b&&g&1);if(g<w&&(D=!D),o=D?0:h%c?c:h,this._lock=1,this.render(o||(S?0:ae(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&sn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1,w=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=D?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=fx(this,ae(o),ae(u)),v&&(h-=u-(u=v._start))),this._tTime=h,this._time=u,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!r&&!w&&(sn(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||u>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,a),u!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=-ee);break}}f=_}else{f=this._last;for(var T=i<0?i:u;f;){if(_=f._prev,(f._act||T<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(T-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(T-f._start)*f._ts,r,a||Pe&&fl(f)),u!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=T?-ee:ee);break}}f=_}}if(v&&!r&&(this.pause(),v.render(u>=o?0:-ee)._zTime=u>=o?1:-1,this._ts))return this._start=y,va(this),this.render(i,r,a);this._onUpdate&&!r&&sn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&fi(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(sn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if($n(r)||(r=dn(this,r,i)),!(i instanceof ns)){if(Oe(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Ae(i))return this.addLabel(i,r);if(ue(i))i=ye.delayedCall(0,i);else return this}return this!==i?Ln(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-gn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ye?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return Ae(i)?this.removeLabel(i):ue(i)?this.killTweensOf(i):(i.parent===this&&xa(this,i),i===this._recent&&(this._recent=this._last),Ni(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ae(rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=dn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=ye.delayedCall(0,r||Qr,a);return o.data="isPause",this._hasPause=1,Ln(this,o,dn(this,i))},e.removePause=function(i){var r=this._first;for(i=dn(this,i);r;)r._start===i&&r.data==="isPause"&&fi(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)si!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=_n(i),l=this._first,c=$n(r),h;l;)l instanceof ye?ax(l._targets,o)&&(c?(!si||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=dn(a,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,_=ye.to(a,cn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ee,onStart:function(){if(a.pause(),!f){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&wr(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,d||[])}},r));return u?_.render(0):_},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,cn({startAt:{time:dn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),xh(this,dn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),xh(this,dn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ee)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=ae(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Ni(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ni(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=gn,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ln(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=ae(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;wr(a,a===oe&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(oe._ts&&(Du(oe,la(i,oe)),Pu=rn.frame),rn.frame>=ph){ph+=on.autoSleep||120;var r=oe._first;if((!r||!r._ts)&&on.autoSleep&&rn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||rn.sleep()}}},t}(ns);cn(Ge.prototype,{_lock:0,_hasPause:0,_forcing:0});var Px=function(t,e,n,i,r,a,o){var l=new je(this._pt,t,e,0,1,rd,null,r),c=0,h=0,d,u,f,_,g,m,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ts(i)),a&&(v=[n,i],a(v,t,e),n=v[0],i=v[1]),u=n.match(oo)||[];d=oo.exec(i);)_=d[0],g=i.substring(c,d.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?gr(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=oo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(wu.test(i)||p)&&(l.e=0),this._pt=l,l},pl=function(t,e,n,i,r,a,o,l,c,h){ue(i)&&(i=i(r||0,t,a));var d=t[e],u=n!=="get"?n:ue(d)?c?t[e.indexOf("set")||!ue(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=ue(d)?c?Nx:nd:gl,_;if(Ae(i)&&(~i.indexOf("random(")&&(i=ts(i)),i.charAt(1)==="="&&(_=gr(u,i)+(Ne(u)||0),(_||_===0)&&(i=_))),!h||u!==i||Bo)return!isNaN(u*i)&&i!==""?(_=new je(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?Fx:id,0,f),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!d&&!(e in t)&&cl(e,i),Px.call(this,t,e,u,i,f,l||on.stringFilter,c))},Lx=function(t,e,n,i,r){if(ue(t)&&(t=Yr(t,r,e,n,i)),!In(t)||t.style&&t.nodeType||Oe(t)||Tu(t))return Ae(t)?Yr(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=Yr(t[o],r,e,n,i);return a},Qu=function(t,e,n,i,r,a){var o,l,c,h;if(tn[t]&&(o=new tn[t]).init(r,o.rawVars?e[t]:Lx(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new je(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==fr))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},si,Bo,ml=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,v=p&&p.data==="nested"?p.vars.targets:m,x=t._overwrite==="auto"&&!sl,y=t.timeline,w=i.easeReverse||d,b,S,D,M,T,z,V,$,P,N,F,G,O;if(y&&(!u||!r)&&(r="none"),t._ease=Oi(r,Zr.ease),t._rEase=w&&(Oi(w)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||u&&!i.stagger){if($=m[0]?Ui(m[0]).harness:0,G=$&&i[$.prop],b=oa(i,hl),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?qs:rx),g._lazy=0),a){if(fi(t._startAt=ye.set(m,cn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&qe(l),startAt:null,delay:0,onUpdate:c&&function(){return sn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Pe||!o&&!f)&&t._startAt.revert(qs),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),D=cn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&qe(l),immediateRender:o,stagger:0,parent:p},b),G&&(D[$.prop]=G),fi(t._startAt=ye.set(m,D)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Pe?t._startAt.revert(qs):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,ee,ee);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&qe(l)||l&&!_,S=0;S<m.length;S++){if(T=m[S],V=T._gsap||dl(m)[S]._gsap,t._ptLookup[S]=N={},Do[V.id]&&hi.length&&aa(),F=v===m?S:v.indexOf(T),$&&(P=new $).init(T,G||b,t,F,v)!==!1&&(t._pt=M=new je(t._pt,T,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(U){N[U]=M}),P.priority&&(z=1)),!$||G)for(D in b)tn[D]&&(P=Qu(D,b,t,F,T,v))?P.priority&&(z=1):N[D]=M=pl.call(t,T,D,"get",b[D],F,v,0,i.stringFilter);t._op&&t._op[S]&&t.kill(T,t._op[S]),x&&t._pt&&(si=t,oe.killTweensOf(T,N,t.globalTime(e)),O=!t.parent,si=0),t._pt&&l&&(Do[V.id]=1)}z&&sd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!O,u&&e<=0&&y.render(gn,!0,!0)},Dx=function(t,e,n,i,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Bo=1,t.vars[e]="+=0",ml(t,o),Bo=0,l?Jr(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=me(n)+Ne(d.e)),d.b&&(d.b=h.s+Ne(d.b))},Ix=function(t,e){var n=t[0]?Ui(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=Tr({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},Ux=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(Oe(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},Yr=function(t,e,n,i,r){return ue(t)?t.call(e,n,i,r):Ae(t)&&~t.indexOf("random(")?ts(t):t},td=ul+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ed={};Ye(td+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return ed[s]=1});var ye=function(s){Su(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Xr(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||oe,v=(Oe(n)||Tu(n)?$n(n[0]):"length"in i)?[n]:_n(n),x,y,w,b,S,D,M,T;if(o._targets=v.length?dl(v):Jr("GSAP target "+n+" not found. https://gsap.com",!on.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||u||Vs(c)||Vs(h)){i=o.vars;var z=i.easeReverse||i.yoyoEase;if(x=o.timeline=new Ge({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:v}),x.kill(),x.parent=x._dp=Hn(o),x._start=0,u||Vs(c)||Vs(h)){if(b=v.length,M=u&&Gu(u),In(u))for(S in u)~td.indexOf(S)&&(T||(T={}),T[S]=u[S]);for(y=0;y<b;y++)w=oa(i,ed),w.stagger=0,z&&(w.easeReverse=z),T&&Tr(w,T),D=v[y],w.duration=+Yr(c,Hn(o),y,D,v),w.delay=(+Yr(h,Hn(o),y,D,v)||0)-o._delay,!u&&b===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),x.to(D,w,M?M(y,D,v):0),x._ease=Yt.none;x.duration()?c=h=0:o.timeline=0}else if(_){Xr(cn(x.vars.defaults,{ease:"none"})),x._ease=Oi(_.ease||i.ease||"none");var V=0,$,P,N;if(Oe(_))_.forEach(function(F){return x.to(v,F,">")}),x.duration();else{w={};for(S in _)S==="ease"||S==="easeEach"||Ux(S,_[S],w,_.easeEach);for(S in w)for($=w[S].sort(function(F,G){return F.t-G.t}),V=0,y=0;y<$.length;y++)P=$[y],N={ease:P.e,duration:(P.t-(y?$[y-1].t:0))/100*c},N[S]=P.v,x.to(v,N,V),V+=N.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return f===!0&&!sl&&(si=Hn(o),oe.killTweensOf(v),si=0),Ln(p,Hn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!_&&o._start===ae(p._time)&&qe(d)&&hx(Hn(o))&&p.data!=="nested")&&(o._tTime=-ee,o.render(Math.max(0,-h)||0)),m&&Fu(Hn(o),m),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-ee&&!h?l:i<ee?0:i,u,f,_,g,m,p,v,x;if(!c)dx(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,a);if(u=ae(d%g),d===l?(_=this._repeat,u=c):(m=ae(d/g),_=~~m,_&&_===m?(u=c,_--):u>c&&(u=c)),p=this._yoyo&&_&1,p&&(u=c-u),m=br(this._tTime,g),u===o&&!a&&this._initted&&_===m)return this._tTime=d,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&u!==g&&this._initted&&(this._lock=a=1,this.render(ae(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Bu(this,h?i:u,a,r,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var y=u<o;if(y!==this._inv){var w=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=w?(y?-1:1)/w:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(u/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!r&&!m&&(sn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(u/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Io(this,i,r,a),sn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&sn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Io(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&fi(this,1),!r&&!(h&&!o)&&(d||o||p)&&(sn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,l){es||rn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||ml(this,c),h=this._ease(c/this._dur),Dx(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(Ma(this,0),this.parent||Nu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Gr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Pe),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,si&&si.vars.overwrite!==!0)._first||Gr(this),this.parent&&a!==this.timeline.totalDuration()&&wr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?_n(i):o,c=this._ptLookup,h=this._pt,d,u,f,_,g,m,p;if((!r||r==="all")&&lx(o,l))return r==="all"&&(this._pt=0),Gr(this);for(d=this._op=this._op||[],r!=="all"&&(Ae(r)&&(g={},Ye(r,function(v){return g[v]=1}),r=g),r=Ix(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){u=c[p],r==="all"?(d[p]=r,_=u,f={}):(f=d[p]=d[p]||{},_=r);for(g in _)m=u&&u[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&xa(this,m,"_pt"),delete u[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&Gr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return qr(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return qr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return oe.killTweensOf(i,r,a)},t}(ns);cn(ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ye("staggerTo,staggerFrom,staggerFromTo",function(s){ye[s]=function(){var t=new Ge,e=No.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var gl=function(t,e,n){return t[e]=n},nd=function(t,e,n){return t[e](n)},Nx=function(t,e,n,i){return t[e](i.fp,n)},Ox=function(t,e,n){return t.setAttribute(e,n)},_l=function(t,e){return ue(t[e])?nd:al(t[e])&&t.setAttribute?Ox:gl},id=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Fx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},rd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},xl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Bx=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},zx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?xa(this,e,"_pt"):e.dep||(n=1),e=i;return!n},kx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},sd=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},je=function(){function s(e,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||id,this.d=l||this,this.set=c||gl,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=kx,this.m=n,this.mt=r,this.tween=i},s}();Ye(ul+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return hl[s]=1});ln.TweenMax=ln.TweenLite=ye;ln.TimelineLite=ln.TimelineMax=Ge;oe=new Ge({sortChildren:!1,defaults:Zr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});on.stringFilter=Ku;var Fi=[],js={},Gx=[],Mh=0,Hx=0,fo=function(t){return(js[t]||Gx).map(function(e){return e()})},zo=function(){var t=Date.now(),e=[];t-Mh>2&&(fo("matchMediaInit"),Fi.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Cn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),fo("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Mh=t,fo("matchMedia"))},ad=function(){function s(e,n){this.selector=n&&Oo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Hx++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){ue(n)&&(r=i,i=n,n=ue);var a=this,o=function(){var c=re,h=a.selector,d;return c&&c!==a&&c.data.push(a),r&&(a.selector=Oo(r)),re=a,d=i.apply(a,arguments),ue(d)&&a._r.push(d),re=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===ue?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=re;re=null,n(this),re=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof ye&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Ge?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ye)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Fi.length;a--;)Fi[a].id===this.id&&Fi.splice(a,1)},t.revert=function(n){this.kill(n||{})},s}(),Vx=function(){function s(e){this.contexts=[],this.scope=e,re&&re.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){In(n)||(n={matches:n});var a=new ad(0,r||this.scope),o=a.conditions={},l,c,h;re&&!a.selector&&(a.selector=re.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Cn.matchMedia(n[c]),l&&(Fi.indexOf(a)<0&&Fi.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(zo):l.addEventListener("change",zo)));return h&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),ca={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Yu(i)})},timeline:function(t){return new Ge(t)},getTweensOf:function(t,e){return oe.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ae(t)&&(t=_n(t)[0]);var r=Ui(t||{}).get,a=n?Uu:Iu;return n==="native"&&(n=""),t&&(e?a((tn[e]&&tn[e].get||r)(t,e,n,i)):function(o,l,c){return a((tn[o]&&tn[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=_n(t),t.length>1){var i=t.map(function(h){return Ke.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var a=tn[e],o=Ui(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var d=new a;fr._pt=0,d.init(t,n?h+n:h,fr,0,[t]),d.render(1,d),fr._pt&&xl(1,fr)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=Ke.to(t,cn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return oe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Oi(t.ease,Zr.ease)),mh(Zr,t||{})},config:function(t){return mh(on,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!tn[o]&&!ln[o]&&Jr(e+" effect requires "+o+" plugin.")}),lo[e]=function(o,l,c){return n(_n(o),cn(l||{},r),c)},a&&(Ge.prototype[e]=function(o,l,c){return this.add(lo[e](o,In(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Yt[t]=Oi(e)},parseEase:function(t,e){return arguments.length?Oi(t,e):Yt},getById:function(t){return oe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ge(t),i,r;for(n.smoothChildTiming=qe(t.smoothChildTiming),oe.remove(n),n._dp=0,n._time=n._tTime=oe._time,i=oe._first;i;)r=i._next,(e||!(!i._dur&&i instanceof ye&&i.vars.onComplete===i._targets[0]))&&Ln(n,i,i._start-i._delay),i=r;return Ln(oe,n,0),n},context:function(t,e){return t?new ad(t,e):re},matchMedia:function(t){return new Vx(t)},matchMediaRefresh:function(){return Fi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||zo()},addEventListener:function(t,e){var n=js[t]||(js[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=js[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Mx,wrapYoyo:yx,distribute:Gu,random:Vu,snap:Hu,normalize:vx,getUnit:Ne,clamp:mx,splitColor:ju,toArray:_n,selector:Oo,mapRange:Xu,pipe:_x,unitize:xx,interpolate:Sx,shuffle:ku},install:Cu,effects:lo,ticker:rn,updateRoot:Ge.updateRoot,plugins:tn,globalTimeline:oe,core:{PropTween:je,globals:Ru,Tween:ye,Timeline:Ge,Animation:ns,getCache:Ui,_removeLinkedListItem:xa,reverting:function(){return Pe},context:function(t){return t&&re&&(re.data.push(t),t._ctx=re),re},suppressOverwrites:function(t){return sl=t}}};Ye("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ca[s]=ye[s]});rn.add(Ge.updateRoot);fr=ca.to({},{duration:0});var Wx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Xx=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Wx(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},po=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Ae(r)&&(l={},Ye(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Xx(o,r)}}}},Ke=ca.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Pe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},po("roundProps",Fo),po("modifiers"),po("snap",Hu))||ca;ye.version=Ge.version=Ke.version="3.15.0";Au=1;ol()&&Ar();Yt.Power0;Yt.Power1;Yt.Power2;Yt.Power3;Yt.Power4;Yt.Linear;Yt.Quad;Yt.Cubic;Yt.Quart;Yt.Quint;Yt.Strong;Yt.Elastic;Yt.Back;Yt.SteppedEase;Yt.Bounce;Yt.Sine;Yt.Expo;Yt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yh,ai,_r,vl,Pi,Sh,Ml,qx=function(){return typeof window<"u"},Kn={},Ai=180/Math.PI,xr=Math.PI/180,ar=Math.atan2,Eh=1e8,yl=/([A-Z])/g,Yx=/(left|right|width|margin|padding|x)/i,jx=/[\s,\(]\S/,Dn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ko=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},$x=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Kx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Zx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Jx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},od=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},ld=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Qx=function(t,e,n){return t.style[e]=n},tv=function(t,e,n){return t.style.setProperty(e,n)},ev=function(t,e,n){return t._gsap[e]=n},nv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},iv=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},rv=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},le="transform",$e=le+"Origin",sv=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in Kn&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Dn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Wn(i,o)}):this.tfm[t]=a.x?a[t]:Wn(i,t),t===$e&&(this.tfm.zOrigin=a.zOrigin);else return Dn.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(le)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push($e,e,"")),t=le}(r||e)&&this.props.push(t,e,r[t])},cd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},av=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(yl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Ml(),(!r||!r.isStart)&&!n[le]&&(cd(n),i.zOrigin&&n[$e]&&(n[$e]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},hd=function(t,e){var n={target:t,props:[],revert:av,save:sv};return t._gsap||Ke.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},ud,Go=function(t,e){var n=ai.createElementNS?ai.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ai.createElement(t);return n&&n.style?n:ai.createElement(t)},an=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(yl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Cr(e)||e,1)||""},Th="O,Moz,ms,Ms,Webkit".split(","),Cr=function(t,e,n){var i=e||Pi,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Th[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Th[a]:"")+t},Ho=function(){qx()&&window.document&&(yh=window,ai=yh.document,_r=ai.documentElement,Pi=Go("div")||{style:{}},Go("div"),le=Cr(le),$e=le+"Origin",Pi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ud=!!Cr("perspective"),Ml=Ke.core.reverting,vl=1)},bh=function(t){var e=t.ownerSVGElement,n=Go("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),_r.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),_r.removeChild(n),r},wh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},dd=function(t){var e,n;try{e=t.getBBox()}catch{e=bh(t),n=1}return e&&(e.width||e.height)||n||(e=bh(t)),e&&!e.width&&!e.x&&!e.y?{x:+wh(t,["x","cx","x1"])||0,y:+wh(t,["y","cy","y1"])||0,width:0,height:0}:e},fd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&dd(t))},pi=function(t,e){if(e){var n=t.style,i;e in Kn&&e!==$e&&(e=le),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(yl,"-$1").toLowerCase())):n.removeAttribute(e)}},oi=function(t,e,n,i,r,a){var o=new je(t._pt,e,n,0,1,a?ld:od);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},Ah={deg:1,rad:1,turn:1},ov={grid:1,flex:1},mi=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Pi.style,l=Yx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",_,g,m,p;if(i===a||!r||Ah[i]||Ah[a])return r;if(a!=="px"&&!u&&(r=s(t,e,n,"px")),p=t.getCTM&&fd(t),(f||a==="%")&&(Kn[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],me(f?r/_*d:r/100*_);if(o[l?"width":"height"]=d+(u?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===ai||!g.appendChild)&&(g=ai.body),m=g._gsap,m&&f&&m.width&&l&&m.time===rn.time&&!m.uncache)return me(r/m.width*d);if(f&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+i,_=t[h],v?t.style[e]=v:pi(t,e)}else(f||a==="%")&&!ov[an(g,"display")]&&(o.position=an(t,"position")),g===t&&(o.position="static"),g.appendChild(Pi),_=Pi[h],g.removeChild(Pi),o.position="absolute";return l&&f&&(m=Ui(g),m.time=rn.time,m.width=g[h]),me(u?_*r/d:_&&r?d/_*r:0)},Wn=function(t,e,n,i){var r;return vl||Ho(),e in Dn&&e!=="transform"&&(e=Dn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Kn[e]&&e!=="transform"?(r=rs(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:ua(an(t,$e))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ha[e]&&ha[e](t,e,n)||an(t,e)||Lu(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?mi(t,e,r,n)+n:r},lv=function(t,e,n,i){if(!n||n==="none"){var r=Cr(e,t,1),a=r&&an(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=an(t,"borderTopColor"))}var o=new je(this._pt,t.style,e,0,1,rd),l=0,c=0,h,d,u,f,_,g,m,p,v,x,y,w;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=an(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=an(t,e)||i,g?t.style[e]=g:pi(t,e)),h=[n,i],Ku(h),n=h[0],i=h[1],u=n.match(dr)||[],w=i.match(dr)||[],w.length){for(;d=dr.exec(i);)m=d[0],v=i.substring(l,d.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=u[c++]||"")&&(f=parseFloat(g)||0,y=g.substr((f+"").length),m.charAt(1)==="="&&(m=gr(f,m)+y),p=parseFloat(m),x=m.substr((p+"").length),l=dr.lastIndex-x.length,x||(x=x||on.units[e]||y,l===i.length&&(i+=x,o.e+=x)),y!==x&&(f=mi(t,e,g,x)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?ld:od;return wu.test(i)&&(o.e=0),this._pt=o,o},Ch={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},cv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ch[n]||n,e[1]=Ch[i]||i,e.join(" ")},hv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Kn[o]&&(l=1,o=o==="transformOrigin"?$e:le),pi(n,o);l&&(pi(n,le),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",rs(n,1),a.uncache=1,cd(i)))}},ha={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new je(t._pt,e,n,0,0,hv);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},is=[1,0,0,1,0,0],pd={},md=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Rh=function(t){var e=an(t,le);return md(e)?is:e.substr(7).match(bu).map(me)},Sl=function(t,e){var n=t._gsap||Ui(t),i=t.style,r=Rh(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?is:r):(r===is&&!t.offsetParent&&t!==_r&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,_r.appendChild(t)),r=Rh(t),l?i.display=l:pi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):_r.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Vo=function(t,e,n,i,r,a){var o=t._gsap,l=r||Sl(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],v=l[5],x=e.split(" "),y=parseFloat(x[0])||0,w=parseFloat(x[1])||0,b,S,D,M;n?l!==is&&(S=f*m-_*g)&&(D=y*(m/S)+w*(-g/S)+(g*v-m*p)/S,M=y*(-_/S)+w*(f/S)-(f*v-_*p)/S,y=D,w=M):(b=dd(t),y=b.x+(~x[0].indexOf("%")?y/100*b.width:y),w=b.y+(~(x[1]||x[0]).indexOf("%")?w/100*b.height:w)),i||i!==!1&&o.smooth?(p=y-c,v=w-h,o.xOffset=d+(p*f+v*g)-p,o.yOffset=u+(p*_+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=w,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[$e]="0px 0px",a&&(oi(a,o,"xOrigin",c,y),oi(a,o,"yOrigin",h,w),oi(a,o,"xOffset",d,o.xOffset),oi(a,o,"yOffset",u,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+w)},rs=function(t,e){var n=t._gsap||new Ju(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=an(t,$e)||"0",h,d,u,f,_,g,m,p,v,x,y,w,b,S,D,M,T,z,V,$,P,N,F,G,O,U,W,K,Z,Y,J,st;return h=d=u=g=m=p=v=x=y=0,f=_=1,n.svg=!!(t.getCTM&&fd(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[le]!=="none"?l[le]:"")),i.scale=i.rotate=i.translate="none"),S=Sl(t,n.svg),n.svg&&(n.uncache?(O=t.getBBox(),c=n.xOrigin-O.x+"px "+(n.yOrigin-O.y)+"px",G=""):G=!e&&t.getAttribute("data-svg-origin"),Vo(t,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,S)),w=n.xOrigin||0,b=n.yOrigin||0,S!==is&&(z=S[0],V=S[1],$=S[2],P=S[3],h=N=S[4],d=F=S[5],S.length===6?(f=Math.sqrt(z*z+V*V),_=Math.sqrt(P*P+$*$),g=z||V?ar(V,z)*Ai:0,v=$||P?ar($,P)*Ai+g:0,v&&(_*=Math.abs(Math.cos(v*xr))),n.svg&&(h-=w-(w*z+b*$),d-=b-(w*V+b*P))):(st=S[6],Y=S[7],W=S[8],K=S[9],Z=S[10],J=S[11],h=S[12],d=S[13],u=S[14],D=ar(st,Z),m=D*Ai,D&&(M=Math.cos(-D),T=Math.sin(-D),G=N*M+W*T,O=F*M+K*T,U=st*M+Z*T,W=N*-T+W*M,K=F*-T+K*M,Z=st*-T+Z*M,J=Y*-T+J*M,N=G,F=O,st=U),D=ar(-$,Z),p=D*Ai,D&&(M=Math.cos(-D),T=Math.sin(-D),G=z*M-W*T,O=V*M-K*T,U=$*M-Z*T,J=P*T+J*M,z=G,V=O,$=U),D=ar(V,z),g=D*Ai,D&&(M=Math.cos(D),T=Math.sin(D),G=z*M+V*T,O=N*M+F*T,V=V*M-z*T,F=F*M-N*T,z=G,N=O),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=me(Math.sqrt(z*z+V*V+$*$)),_=me(Math.sqrt(F*F+st*st)),D=ar(N,F),v=Math.abs(D)>2e-4?D*Ai:0,y=J?1/(J<0?-J:J):0),n.svg&&(G=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!md(an(t,le)),G&&t.setAttribute("transform",G))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=me(f),n.scaleY=me(_),n.rotation=me(g)+o,n.rotationX=me(m)+o,n.rotationY=me(p)+o,n.skewX=v+o,n.skewY=x+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[$e]=ua(c)),n.xOffset=n.yOffset=0,n.force3D=on.force3D,n.renderTransform=n.svg?dv:ud?gd:uv,n.uncache=0,n},ua=function(t){return(t=t.split(" "))[0]+" "+t[1]},mo=function(t,e,n){var i=Ne(e);return me(parseFloat(e)+parseFloat(mi(t,"x",n+"px",i)))+i},uv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,gd(t,e)},Ei="0deg",zr="0px",Ti=") ",gd=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,x=n.zOrigin,y="",w=p==="auto"&&t&&t!==1||p===!0;if(x&&(d!==Ei||h!==Ei)){var b=parseFloat(h)*xr,S=Math.sin(b),D=Math.cos(b),M;b=parseFloat(d)*xr,M=Math.cos(b),a=mo(v,a,S*M*-x),o=mo(v,o,-Math.sin(b)*-x),l=mo(v,l,D*M*-x+x)}m!==zr&&(y+="perspective("+m+Ti),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(w||a!==zr||o!==zr||l!==zr)&&(y+=l!==zr||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ti),c!==Ei&&(y+="rotate("+c+Ti),h!==Ei&&(y+="rotateY("+h+Ti),d!==Ei&&(y+="rotateX("+d+Ti),(u!==Ei||f!==Ei)&&(y+="skew("+u+", "+f+Ti),(_!==1||g!==1)&&(y+="scale("+_+", "+g+Ti),v.style[le]=y||"translate(0, 0)"},dv=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,x=parseFloat(a),y=parseFloat(o),w,b,S,D,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=xr,c*=xr,w=Math.cos(l)*d,b=Math.sin(l)*d,S=Math.sin(l-c)*-u,D=Math.cos(l-c)*u,c&&(h*=xr,M=Math.tan(c-h),M=Math.sqrt(1+M*M),S*=M,D*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),w*=M,b*=M)),w=me(w),b=me(b),S=me(S),D=me(D)):(w=d,D=u,b=S=0),(x&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(x=mi(f,"x",a,"px"),y=mi(f,"y",o,"px")),(_||g||m||p)&&(x=me(x+_-(_*w+g*S)+m),y=me(y+g-(_*b+g*D)+p)),(i||r)&&(M=f.getBBox(),x=me(x+i/100*M.width),y=me(y+r/100*M.height)),M="matrix("+w+","+b+","+S+","+D+","+x+","+y+")",f.setAttribute("transform",M),v&&(f.style[le]=M)},fv=function(t,e,n,i,r){var a=360,o=Ae(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Ai:1),c=l-i,h=i+c+"deg",d,u;return o&&(d=r.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Eh)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Eh)%a-~~(c/a)*a)),t._pt=u=new je(t._pt,e,n,i,c,$x),u.e=h,u.u="deg",t._props.push(n),u},Ph=function(t,e){for(var n in e)t[n]=e[n];return t},pv=function(t,e,n){var i=Ph({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,u,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[le]=e,o=rs(n,1),pi(n,le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[le],a[le]=e,o=rs(n,1),a[le]=c);for(l in Kn)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(f=Ne(c),_=Ne(h),d=f!==_?mi(n,l,c,_):parseFloat(c),u=parseFloat(h),t._pt=new je(t._pt,o,l,d,u-d,ko),t._pt.u=_||0,t._props.push(l));Ph(o,i)};Ye("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});ha[t>1?"border"+s:s]=function(o,l,c,h,d){var u,f;if(arguments.length<4)return u=a.map(function(_){return Wn(o,_,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=u[g]=u[g]||u[(g-1)/2|0]}),o.init(l,f,d)}});var _d={name:"css",register:Ho,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,h,d,u,f,_,g,m,p,v,x,y,w,b,S,D,M;vl||Ho(),this.styles=this.styles||hd(t),D=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(tn[g]&&Qu(g,e,n,i,t,r)))){if(f=typeof h,_=ha[g],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=ts(h)),_)_(this,t,g,h,n)&&(S=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",ui.lastIndex=0,ui.test(c)||(m=Ne(c),p=Ne(h),p?m!==p&&(c=mi(t,g,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,i,r,0,0,g),a.push(g),D.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],Ae(c)&&~c.indexOf("random(")&&(c=ts(c)),Ne(c+"")||c==="auto"||(c+=on.units[g]||Ne(Wn(t,g))||""),(c+"").charAt(1)==="="&&(c=Wn(t,g))):c=Wn(t,g),u=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),g in Dn&&(g==="autoAlpha"&&(u===1&&Wn(t,"visibility")==="hidden"&&d&&(u=0),D.push("visibility",0,o.visibility),oi(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Dn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Kn,x){if(this.styles.save(g),M=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=an(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var T=t.style.perspective;t.style.perspective=h,h=an(t,"perspective"),T?t.style.perspective=T:pi(t,"perspective")}d=parseFloat(h)}if(y||(w=t._gsap,w.renderTransform&&!e.parseTransform||rs(t,e.parseTransform),b=e.smoothOrigin!==!1&&w.smooth,y=this._pt=new je(this._pt,o,le,0,1,w.renderTransform,w,0,-1),y.dep=1),g==="scale")this._pt=new je(this._pt,w,"scaleY",w.scaleY,(v?gr(w.scaleY,v+d):d)-w.scaleY||0,ko),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){D.push($e,0,o[$e]),h=cv(h),w.svg?Vo(t,h,0,b,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==w.zOrigin&&oi(this,w,"zOrigin",w.zOrigin,p),oi(this,o,g,ua(c),ua(h)));continue}else if(g==="svgOrigin"){Vo(t,h,1,b,0,this);continue}else if(g in pd){fv(this,w,g,u,v?gr(u,v+h):h);continue}else if(g==="smoothOrigin"){oi(this,w,"smooth",w.smooth,h);continue}else if(g==="force3D"){w[g]=h;continue}else if(g==="transform"){pv(this,h,t);continue}}else g in o||(g=Cr(g)||g);if(x||(d||d===0)&&(u||u===0)&&!jx.test(h)&&g in o)m=(c+"").substr((u+"").length),d||(d=0),p=Ne(h)||(g in on.units?on.units[g]:m),m!==p&&(u=mi(t,g,c,p)),this._pt=new je(this._pt,x?w:o,g,u,(v?gr(u,v+d):d)-u,!x&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?Jx:ko),this._pt.u=p||0,x&&M!==h?(this._pt.b=c,this._pt.e=M,this._pt.r=Zx):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Kx);else if(g in o)lv.call(this,t,g,c,v?v+h:h);else if(g in t)this.add(t,g,c||t[g],v?v+h:h,i,r);else if(g!=="parseTransform"){cl(g,h);continue}x||(g in o?D.push(g,0,o[g]):typeof t[g]=="function"?D.push(g,2,t[g]()):D.push(g,1,c||t[g])),a.push(g)}}S&&sd(this)},render:function(t,e){if(e.tween._time||!Ml())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Wn,aliases:Dn,getSetter:function(t,e,n){var i=Dn[e];return i&&i.indexOf(",")<0&&(e=i),e in Kn&&e!==$e&&(t._gsap.x||Wn(t,"x"))?n&&Sh===n?e==="scale"?nv:ev:(Sh=n||{})&&(e==="scale"?iv:rv):t.style&&!al(t.style[e])?Qx:~e.indexOf("-")?tv:_l(t,e)},core:{_removeProperty:pi,_getMatrix:Sl}};Ke.utils.checkPrefix=Cr;Ke.core.getStyleSaver=hd;(function(s,t,e,n){var i=Ye(s+","+t+","+e,function(r){Kn[r]=1});Ye(t,function(r){on.units[r]="deg",pd[r]=1}),Dn[i[13]]=s+","+t,Ye(n,function(r){var a=r.split(":");Dn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ye("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){on.units[s]="px"});Ke.registerPlugin(_d);var $t=Ke.registerPlugin(_d)||Ke;$t.core.Tween;const Be=[{id:"mind",index:"01",name:"MIND STONE",roman:"I",colorHex:"#ffd000",colorThree:16764928,coreColor:16773258,darkColor:6706432,domainKey:"intelligence",domain:"INTELLIGENCE",domainTagline:"AI • ML • Decision Systems",marvelTheme:"Vision Neural Gold",entity:"The Scepter / Vision's Core",origin:"Chitauri Scepter / Neural Matrix",vessel:"The Scepter / Vision",frequency:"528.00 THz",refractiveIndex:"2.54",powerLevel:"98.5%",particleCount:180,techStack:["Python","PyTorch","LangChain","FastAPI","Gemini API","TensorFlow"],quote:"It contains an intellect of supreme cosmic density.",description:"Architect autonomous multi-agent networks, neural cognition models, self-refining LLM pipelines, and intelligent decision systems capable of enterprise-scale problem-solving.",stats:[{label:"SYNAPSE DENSITY",value:"Infinite"},{label:"MODEL CAPACITY",value:"Trillion Param"},{label:"HARMONIC",value:"528.00 THz"},{label:"SLOTS OPEN",value:"12 Squads"}]},{id:"space",index:"02",name:"SPACE STONE",roman:"II",colorHex:"#00d2ff",colorThree:54015,coreColor:8449279,darkColor:16486,domainKey:"connectivity",domain:"CONNECTIVITY",domainTagline:"Cybersecurity • Cloud • Networks",marvelTheme:"Tesseract Cyan",entity:"Tesseract (Cosmic Cube)",origin:"Pre-Universe Singularity / Asgardian Vault",vessel:"The Tesseract",frequency:"432.18 THz",refractiveIndex:"2.42",powerLevel:"99.2%",particleCount:160,techStack:["Rust","Go","Kubernetes","eBPF","Cloudflare Workers","WireGuard"],quote:"The Tesseract has awakened. It is on a little world, a human world.",description:"Forge zero-trust defense architectures, planet-scale cloud networks, high-throughput distributed protocols, and resilient cybersecurity fabrics.",stats:[{label:"LATENCY PROFILE",value:"Sub-5ms Mesh"},{label:"DEFENSE MATRIX",value:"Post-Quantum"},{label:"HARMONIC",value:"432.18 THz"},{label:"SLOTS OPEN",value:"10 Squads"}]},{id:"reality",index:"03",name:"REALITY STONE",roman:"III",colorHex:"#ff2a4b",colorThree:16722507,coreColor:16741768,darkColor:6684688,domainKey:"digital",domain:"DIGITAL",domainTagline:"Web • Mobile • Digital Platforms",marvelTheme:"Aether Crimson",entity:"The Aether (Fluid Crystal)",origin:"Pre-Universe Singularity / Svartalfheim",vessel:"The Aether Prism",frequency:"612.44 THz",refractiveIndex:"2.68",powerLevel:"97.8%",particleCount:220,techStack:["TypeScript","React","Flutter","Next.js","Node.js","WebGL"],quote:"It turns matter into dark matter, reshaping physical reality at will.",description:"Bend digital reality. Build hyper-responsive web applications, cross-platform mobile architectures, immersive real-time canvases, and scalable modern platforms.",stats:[{label:"RENDER TARGET",value:"120 FPS WebGL"},{label:"STATE CONFLICT",value:"Sub-30ms CRDT"},{label:"HARMONIC",value:"612.44 THz"},{label:"SLOTS OPEN",value:"14 Squads"}]},{id:"power",index:"04",name:"POWER STONE",roman:"IV",colorHex:"#b026ff",colorThree:11544319,coreColor:14714367,darkColor:4851058,domainKey:"automation",domain:"AUTOMATION",domainTagline:"IoT • Robotics • Embedded Systems",marvelTheme:"Thanos Void Purple",entity:"The Orb / Morag Temple",origin:"Pre-Universe Singularity / Celestial Eson",vessel:"The Orb of Morag",frequency:"741.89 THz",refractiveIndex:"2.75",powerLevel:"100.0%",particleCount:200,techStack:["C++","Rust","ESP32 / Arduino","ROS2","MQTT","FreeRTOS"],quote:"It contains an energy that destroys all organic matter it touches.",description:"Unleash physical and digital kinetic power. Develop autonomous robotics, smart hardware controllers, industrial IoT pipelines, and embedded real-time systems.",stats:[{label:"BUS TELEMETRY",value:"Microsecond"},{label:"KINETIC FAILOVER",value:"Autonomous Swarm"},{label:"HARMONIC",value:"741.89 THz"},{label:"SLOTS OPEN",value:"8 Squads"}]},{id:"time",index:"05",name:"TIME STONE",roman:"V",colorHex:"#00ff88",colorThree:65416,coreColor:9109441,darkColor:21803,domainKey:"analytics",domain:"ANALYTICS",domainTagline:"Data • Prediction • Optimization",marvelTheme:"Doctor Strange Emerald",entity:"Eye of Agamotto / Kamar-Taj",origin:"Pre-Universe Singularity / Sorcerer Supreme",vessel:"Eye of Agamotto",frequency:"852.12 THz",refractiveIndex:"2.48",powerLevel:"98.9%",particleCount:190,techStack:["Python","Kafka","ClickHouse","Pandas","DuckDB","Scikit-Learn"],quote:"Dormammu, I have come to bargain.",description:"Control temporal velocity. Engineer real-time streaming pipelines, high-throughput predictive time-series models, algorithmic optimization engines, and big data intelligence.",stats:[{label:"STREAM INGEST",value:"1M Events/sec"},{label:"ORACLE HORIZON",value:"14,000,605 Paths"},{label:"HARMONIC",value:"852.12 THz"},{label:"SLOTS OPEN",value:"11 Squads"}]},{id:"soul",index:"06",name:"SOUL STONE",roman:"VI",colorHex:"#ff7700",colorThree:16742144,coreColor:16765567,darkColor:10044416,domainKey:"impact",domain:"IMPACT",domainTagline:"Healthcare • Agriculture • Education • Social Good",marvelTheme:"Vormir Sunset Orange",entity:"Vormir Altar / Soul World",origin:"Pre-Universe Singularity / Red Skull Guardian",vessel:"Vormir Shrine",frequency:"963.00 THz",refractiveIndex:"2.62",powerLevel:"99.7%",particleCount:180,techStack:["Python","Flutter","PostgreSQL","FastAPI","Edge AI","OpenCV"],quote:"A soul for a soul. Great technological impact demands great purpose.",description:"Channel technology to transform lives. Pioneer accessible healthcare diagnostics, precision agricultural sensors, adaptive educational tools, and sustainable social impact networks.",stats:[{label:"COMMUNITY REACH",value:"Global Impact"},{label:"ETHICAL CORE",value:"Privacy-Preserving"},{label:"HARMONIC",value:"963.00 THz"},{label:"SLOTS OPEN",value:"15 Squads"}]}],$s=0,mv=1,gv=new L,Lh=new F0,go=new Vn,Dh=new L,Ws=new en;class _v{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Ih,this.unassigned=new Ih,this.vertices=[]}setFromPoints(t){if(t.length>=4){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.vertices.push(new xv(t[e]));this.compute()}return this}setFromObject(t){const e=[];return t.updateMatrixWorld(!0),t.traverse(function(n){const i=n.geometry;if(i!==void 0){const r=i.attributes.position;if(r!==void 0)for(let a=0,o=r.count;a<o;a++){const l=new L;l.fromBufferAttribute(r,a).applyMatrix4(n.matrixWorld),e.push(l)}}}),this.setFromPoints(e)}containsPoint(t){const e=this.faces;for(let n=0,i=e.length;n<i;n++)if(e[n].distanceToPoint(t)>this.tolerance)return!1;return!0}intersectRay(t,e){const n=this.faces;let i=-1/0,r=1/0;for(let a=0,o=n.length;a<o;a++){const l=n[a],c=l.distanceToPoint(t.origin),h=l.normal.dot(t.direction);if(c>0&&h>=0)return null;const d=h!==0?-c/h:0;if(!(d<=0)&&(h>0?r=Math.min(d,r):i=Math.max(d,i),i>r))return null}return i!==-1/0?t.at(i,e):t.at(r,e),e}intersectsRay(t){return this.intersectRay(t,gv)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}addVertexToFace(t,e){return t.face=e,e.outside===null?this.assigned.append(t):this.assigned.insertBefore(e.outside,t),e.outside=t,this}removeVertexFromFace(t,e){return t===e.outside&&(t.next!==null&&t.next.face===e?e.outside=t.next:e.outside=null),this.assigned.remove(t),this}removeAllVerticesFromFace(t){if(t.outside!==null){const e=t.outside;let n=t.outside;for(;n.next!==null&&n.next.face===t;)n=n.next;return this.assigned.removeSubList(e,n),e.prev=n.next=null,t.outside=null,e}}deleteFaceVertices(t,e){const n=this.removeAllVerticesFromFace(t);if(n!==void 0)if(e===void 0)this.unassigned.appendChain(n);else{let i=n;do{const r=i.next;e.distanceToPoint(i.point)>this.tolerance?this.addVertexToFace(i,e):this.unassigned.append(i),i=r}while(i!==null)}return this}resolveUnassignedPoints(t){if(this.unassigned.isEmpty()===!1){let e=this.unassigned.first();do{const n=e.next;let i=this.tolerance,r=null;for(let a=0;a<t.length;a++){const o=t[a];if(o.mark===$s){const l=o.distanceToPoint(e.point);if(l>i&&(i=l,r=o),i>1e3*this.tolerance)break}}r!==null&&this.addVertexToFace(e,r),e=n}while(e!==null)}return this}computeExtremes(){const t=new L,e=new L,n=[],i=[];for(let r=0;r<3;r++)n[r]=i[r]=this.vertices[0];t.copy(this.vertices[0].point),e.copy(this.vertices[0].point);for(let r=0,a=this.vertices.length;r<a;r++){const o=this.vertices[r],l=o.point;for(let c=0;c<3;c++)l.getComponent(c)<t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),n[c]=o);for(let c=0;c<3;c++)l.getComponent(c)>e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=o)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(t.x),Math.abs(e.x))+Math.max(Math.abs(t.y),Math.abs(e.y))+Math.max(Math.abs(t.z),Math.abs(e.z))),{min:n,max:i}}computeInitialHull(){const t=this.vertices,e=this.computeExtremes(),n=e.min,i=e.max;let r=0,a=0;for(let u=0;u<3;u++){const f=i[u].point.getComponent(u)-n[u].point.getComponent(u);f>r&&(r=f,a=u)}const o=n[a],l=i[a];let c,h;r=0,Lh.set(o.point,l.point);for(let u=0,f=this.vertices.length;u<f;u++){const _=t[u];if(_!==o&&_!==l){Lh.closestPointToPoint(_.point,!0,Dh);const g=Dh.distanceToSquared(_.point);g>r&&(r=g,c=_)}}r=-1,go.setFromCoplanarPoints(o.point,l.point,c.point);for(let u=0,f=this.vertices.length;u<f;u++){const _=t[u];if(_!==o&&_!==l&&_!==c){const g=Math.abs(go.distanceToPoint(_.point));g>r&&(r=g,h=_)}}const d=[];if(go.distanceToPoint(h.point)<0){d.push(Sn.create(o,l,c),Sn.create(h,l,o),Sn.create(h,c,l),Sn.create(h,o,c));for(let u=0;u<3;u++){const f=(u+1)%3;d[u+1].getEdge(2).setTwin(d[0].getEdge(f)),d[u+1].getEdge(1).setTwin(d[f+1].getEdge(0))}}else{d.push(Sn.create(o,c,l),Sn.create(h,o,l),Sn.create(h,l,c),Sn.create(h,c,o));for(let u=0;u<3;u++){const f=(u+1)%3;d[u+1].getEdge(2).setTwin(d[0].getEdge((3-u)%3)),d[u+1].getEdge(0).setTwin(d[f+1].getEdge(1))}}for(let u=0;u<4;u++)this.faces.push(d[u]);for(let u=0,f=t.length;u<f;u++){const _=t[u];if(_!==o&&_!==l&&_!==c&&_!==h){r=this.tolerance;let g=null;for(let m=0;m<4;m++){const p=this.faces[m].distanceToPoint(_.point);p>r&&(r=p,g=this.faces[m])}g!==null&&this.addVertexToFace(_,g)}}return this}reindexFaces(){const t=[];for(let e=0;e<this.faces.length;e++){const n=this.faces[e];n.mark===$s&&t.push(n)}return this.faces=t,this}nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let t,e=0;const n=this.assigned.first().face;let i=n.outside;do{const r=n.distanceToPoint(i.point);r>e&&(e=r,t=i),i=i.next}while(i!==null&&i.face===n);return t}}computeHorizon(t,e,n,i){this.deleteFaceVertices(n),n.mark=mv;let r;e===null?r=e=n.getEdge(0):r=e.next;do{const a=r.twin,o=a.face;o.mark===$s&&(o.distanceToPoint(t)>this.tolerance?this.computeHorizon(t,a,o,i):i.push(r)),r=r.next}while(r!==e);return this}addAdjoiningFace(t,e){const n=Sn.create(t,e.tail(),e.head());return this.faces.push(n),n.getEdge(-1).setTwin(e.twin),n.getEdge(0)}addNewFaces(t,e){this.newFaces=[];let n=null,i=null;for(let r=0;r<e.length;r++){const a=e[r],o=this.addAdjoiningFace(t,a);n===null?n=o:o.next.setTwin(i),this.newFaces.push(o.face),i=o}return n.next.setTwin(i),this}addVertexToHull(t){const e=[];return this.unassigned.clear(),this.removeVertexFromFace(t,t.face),this.computeHorizon(t.point,null,t.face,e),this.addNewFaces(t,e),this.resolveUnassignedPoints(this.newFaces),this}cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}compute(){let t;for(this.computeInitialHull();(t=this.nextVertexToAdd())!==void 0;)this.addVertexToHull(t);return this.reindexFaces(),this.cleanup(),this}}class Sn{constructor(){this.normal=new L,this.midpoint=new L,this.area=0,this.constant=0,this.outside=null,this.mark=$s,this.edge=null}static create(t,e,n){const i=new Sn,r=new _o(t,i),a=new _o(e,i),o=new _o(n,i);return r.next=o.prev=a,a.next=r.prev=o,o.next=a.prev=r,i.edge=r,i.compute()}getEdge(t){let e=this.edge;for(;t>0;)e=e.next,t--;for(;t<0;)e=e.prev,t++;return e}compute(){const t=this.edge.tail(),e=this.edge.head(),n=this.edge.next.head();return Ws.set(t.point,e.point,n.point),Ws.getNormal(this.normal),Ws.getMidpoint(this.midpoint),this.area=Ws.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(t){return this.normal.dot(t)-this.constant}}class _o{constructor(t,e){this.vertex=t,this.prev=null,this.next=null,this.twin=null,this.face=e}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){const t=this.head(),e=this.tail();return e!==null?e.point.distanceTo(t.point):-1}lengthSquared(){const t=this.head(),e=this.tail();return e!==null?e.point.distanceToSquared(t.point):-1}setTwin(t){return this.twin=t,t.twin=this,this}}class xv{constructor(t){this.point=t,this.prev=null,this.next=null,this.face=null}}class Ih{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(t,e){return e.prev=t.prev,e.next=t,e.prev===null?this.head=e:e.prev.next=e,t.prev=e,this}insertAfter(t,e){return e.prev=t,e.next=t.next,e.next===null?this.tail=e:e.next.prev=e,t.next=e,this}append(t){return this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t,this}appendChain(t){for(this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail;t.next!==null;)t=t.next;return this.tail=t,this}remove(t){return t.prev===null?this.head=t.next:t.prev.next=t.next,t.next===null?this.tail=t.prev:t.next.prev=t.prev,this}removeSubList(t,e){return t.prev===null?this.head=e.next:t.prev.next=e.next,e.next===null?this.tail=t.prev:e.next.prev=t.prev,this}isEmpty(){return this.head===null}}class vv extends ge{constructor(t=[]){super();const e=[],n=[],r=new _v().setFromPoints(t).faces;for(let a=0;a<r.length;a++){const o=r[a];let l=o.edge;do{const c=l.head().point;e.push(c.x,c.y,c.z),n.push(o.normal.x,o.normal.y,o.normal.z),l=l.next}while(l!==o.edge)}this.setAttribute("position",new Jt(e,3)),this.setAttribute("normal",new Jt(n,3))}}let bi=null;function Mv(){if(bi)return bi;const s=document.createElement("canvas");s.width=512,s.height=512;const t=s.getContext("2d");t.fillStyle="#808080",t.fillRect(0,0,512,512);const e=t.getImageData(0,0,512,512),n=e.data;for(let i=0;i<n.length;i+=4){const r=(Math.random()-.5)*48;n[i]=Math.min(255,Math.max(0,128+r)),n[i+1]=n[i],n[i+2]=n[i],n[i+3]=255}t.putImageData(e,0,0),t.strokeStyle="rgba(240, 240, 240, 0.35)",t.lineWidth=1.4;for(let i=0;i<22;i++){t.beginPath();let r=Math.random()*512,a=Math.random()*512;t.moveTo(r,a);for(let o=0;o<5;o++)r+=(Math.random()-.5)*90,a+=(Math.random()-.5)*90,t.lineTo(r,a);t.stroke()}return bi=new ia(s),bi.wrapS=jr,bi.wrapT=jr,bi.repeat.set(2,2),bi}function yv(s=12){const t=[],e=[];for(let f=0;f<s;f++)e.push(f/s*Math.PI*2+Math.PI/s);const n=e.map(f=>new L(Math.cos(f)*.72*(1+.12*Math.cos(2*f)),.58,Math.sin(f)*.6*(1-.12*Math.cos(2*f)))),i=new L(0,.59,0),r=e.map(f=>new L(Math.cos(f)*1.05*(1+.12*Math.cos(2*f)),.35,Math.sin(f)*.88*(1-.12*Math.cos(2*f)))),a=e.map(f=>new L(Math.cos(f)*1.3*(1+.12*Math.cos(2*f)),.12,Math.sin(f)*1.08*(1-.12*Math.cos(2*f)))),o=e.map(f=>new L(Math.cos(f)*1.3*(1+.12*Math.cos(2*f)),-.12,Math.sin(f)*1.08*(1-.12*Math.cos(2*f)))),l=e.map(f=>new L(Math.cos(f)*.8*(1+.12*Math.cos(2*f)),-.58,Math.sin(f)*.66*(1-.12*Math.cos(2*f)))),c=new L(0,-.98,0);function h(f,_,g){t.push(f.x,f.y,f.z,_.x,_.y,_.z,g.x,g.y,g.z)}function d(f,_,g,m){h(f,_,g),h(f,g,m)}for(let f=0;f<s;f++){const _=(f+1)%s;h(i,n[f],n[_]),d(n[f],r[f],r[_],n[_]),d(r[f],a[f],a[_],r[_]),d(a[f],o[f],o[_],a[_]),d(o[f],l[f],l[_],o[_]),h(l[f],c,l[_])}const u=new ge;return u.setAttribute("position",new Jt(t,3)),u.computeVertexNormals(),u}function or(s=42,t=1.15,e=1.35,n=1.05){let i=s;function r(){return i=(i*9301+49297)%233280,i/233280}const a=[],o=30;for(let d=0;d<o;d++){const u=r()*2-1,f=r()*Math.PI*2,_=Math.sqrt(Math.max(0,1-u*u)),g=_*Math.cos(f),m=u,p=_*Math.sin(f),v=g*t,x=m*e,y=p*n,w=Math.sqrt(v*v+x*x+y*y),b=d%4===0?.78+r()*.12:.9+r()*.22,S=w*b;a.push({nx:g,ny:m,nz:p,d:S})}a.push({nx:.55,ny:.65,nz:.4,d:1}),a.push({nx:-.6,ny:.5,nz:-.55,d:.95}),a.push({nx:.65,ny:-.6,nz:-.4,d:.98}),a.push({nx:-.5,ny:-.75,nz:.4,d:.92});const l=a.length,c=[];for(let d=0;d<l;d++)for(let u=d+1;u<l;u++)for(let f=u+1;f<l;f++){const _=a[d],g=a[u],m=a[f],p=_.nx*(g.ny*m.nz-g.nz*m.ny)-_.ny*(g.nx*m.nz-g.nz*m.nx)+_.nz*(g.nx*m.ny-g.ny*m.nx);if(Math.abs(p)<1e-4)continue;const v=(_.d*(g.ny*m.nz-g.nz*m.ny)-_.ny*(g.d*m.nz-g.nz*m.d)+_.nz*(g.d*m.ny-g.ny*m.d))/p,x=(_.nx*(g.d*m.nz-g.nz*m.d)-_.d*(g.nx*m.nz-g.nz*m.nx)+_.nz*(g.nx*m.d-g.d*m.nx))/p,y=(_.nx*(g.ny*m.d-g.d*m.ny)-_.ny*(g.nx*m.d-g.d*m.nx)+_.d*(g.nx*m.ny-g.ny*m.nx))/p;let w=!0;for(let b=0;b<l;b++){const S=a[b];if(S.nx*v+S.ny*x+S.nz*y>S.d+.001){w=!1;break}}w&&c.push(new L(v,x,y))}const h=new vv(c);return h.center(),h.computeVertexNormals(),h}function Sv(s){return s==="time"?yv(12):s==="soul"?or(42,1.15,1.35,1.05):s==="mind"?or(77,1.08,1.48,1.02):s==="power"?or(93,1.25,1.28,1.18):s==="space"?or(17,1.2,1.3,1.12):s==="reality"?or(51,1.16,1.34,1.14):or(42,1.2,1.2,1.2)}function Ev(s,t){s.computeBoundingBox();const e=s.boundingBox,n=e.min.y,i=e.max.y,r=Math.max(.001,i-n),a=e.min.x,o=e.max.x,l=Math.max(.001,o-a),c=e.min.z,h=e.max.z,d=Math.max(.001,h-c),u=s.attributes.position,f=new Float32Array(u.count*3);for(let b=0;b<u.count;b++)f[b*3]=(u.getX(b)-a)/l,f[b*3+1]=(u.getY(b)-n)/r,f[b*3+2]=(u.getZ(b)-c)/d;const _=new Float32Array(u.count*3),g=new Xe(_,3);s.setAttribute("color",g);const m=new bt(t.coreColor).lerp(new bt(16777215),.62),p=new bt(t.colorThree),v=new bt(t.darkColor).multiplyScalar(.36),x=new bt,y=new bt,w=b=>{const S=.5+Math.sin(b*4.6)*.3;y.copy(m).lerp(new bt(16777215),S);for(let D=0;D<u.count;D++){const M=f[D*3],T=f[D*3+1],z=f[D*3+2],V=Math.sin(b*4.5+M*3+z*2.4)*.22+Math.cos(b*3.5+T*2.6)*.13;let $=T*.88+M*.12+V;if($=Math.max(0,Math.min(1,$)),$<.5){const P=Math.pow($*2,1.25);x.copy(v).lerp(p,P)}else{const P=Math.pow(($-.5)*2,.82);x.copy(p).lerp(y,P)}_[D*3]=x.r,_[D*3+1]=x.g,_[D*3+2]=x.b}g.needsUpdate=!0};return w(0),w}function Tv(s){const t=new Pn;t.name=s.id,t.userData={stoneData:s};const e=Sv(s.id),n=Ev(e,s),i=Mv(),r=new D0({color:16777215,vertexColors:!0,emissive:s.colorThree,emissiveIntensity:.18,roughness:.14,metalness:.06,transmission:0,transparent:!1,opacity:1,depthWrite:!0,ior:1.76,specularIntensity:1,specularColor:new bt(16777215),clearcoat:.55,clearcoatRoughness:.06,bumpMap:i,bumpScale:.015,flatShading:!0}),a=new Me(e,r);a.castShadow=!0,a.receiveShadow=!0,t.add(a);const o=new th(new tl(1.05,1)),l=new kr({color:s.coreColor,transparent:!0,opacity:0,blending:Ue}),c=new Ns(o,l);c.visible=!1,t.add(c);const h=new kr({color:16777215,transparent:!0,opacity:.45,blending:Ue}),d=new Ns(new th(e),h);d.visible=!0,t.add(d);const u=new el(.24,18,18),f=new En({color:s.coreColor,transparent:!0,opacity:0}),_=new Me(u,f);_.visible=!1,t.add(_);const g=new Co(s.coreColor,1.8,10,1.4);g.position.set(0,1,2.6),t.add(g);const m=new Co(s.colorThree,1.3,8,1.4);m.position.set(0,-1,-2.6),t.add(m);const p=new Pn;if(p.name="artifacts",s.id==="space"){const P=new Rr(2.1,2.1,2.1),N=new R0(P),F=new Ns(N,new kr({color:54015,transparent:!0,opacity:.25,blending:Ue}));p.add(F)}else if(s.id==="mind"){const P=new ur(1.92,.005,6,64),N=new En({color:16771584,transparent:!0,opacity:.16,blending:Ue}),F=new Me(P,N);F.rotation.set(Math.PI/3.5,0,Math.PI/6);const G=new Me(P,N);G.rotation.set(-Math.PI/3.5,0,-Math.PI/6),p.add(F,G)}else if(s.id==="reality")for(let P=0;P<2;P++){const N=1.7+P*.35,F=new ur(N,.015,6,48),G=new En({color:16717636,transparent:!0,opacity:.3-P*.08,blending:Ue}),O=new Me(F,G);O.rotation.x=Math.random()*Math.PI,O.rotation.y=Math.random()*Math.PI,O.userData={speedX:.006+P*.004,speedY:.008+P*.003},p.add(O)}else if(s.id==="power"){const P=new Pn,N=new nl(.055,0),F=new En({color:14647551,transparent:!0,opacity:.55,blending:Ue});for(let G=0;G<18;G++){const O=.6+Math.random()*.7,U=new Me(N,F);U.scale.set(O,O,O);const W=G/18*Math.PI*2,K=1.85+(Math.random()-.5)*.4,Z=(Math.random()-.5)*.7;U.position.set(Math.cos(W)*K,Z,Math.sin(W)*K),P.add(U)}P.rotation.set(Math.PI/4,0,Math.PI/6),p.add(P)}else if(s.id==="time"){const P=new Pn,N=new ra(1.68,1.72,64),F=new ra(2.1,2.15,64),G=new En({color:65416,side:pn,transparent:!0,opacity:.65,blending:Ue}),O=new En({color:6942894,side:pn,transparent:!0,opacity:.45,blending:Ue}),U=new Me(N,G),W=new Me(F,O);U.rotation.x=Math.PI/2,W.rotation.x=Math.PI/2;const K=new ge,Z=1.18,Y=[-Z,0,-Z,Z,0,-Z,Z,0,-Z,Z,0,Z,Z,0,Z,-Z,0,Z,-Z,0,Z,-Z,0,-Z];K.setAttribute("position",new Jt(Y,3));const J=new kr({color:65416,transparent:!0,opacity:.55,blending:Ue}),st=new Ns(K,J),mt=st.clone();mt.rotation.y=Math.PI/4,U.add(st,mt);const gt=new ma(.025,.14),Pt=new En({color:9109441,side:pn,blending:Ue});for(let Rt=0;Rt<24;Rt++){const Mt=Rt/24*Math.PI*2,Ft=new Me(gt,Pt);Ft.position.set(Math.cos(Mt)*2.12,0,Math.sin(Mt)*2.12),Ft.rotation.y=-Mt,W.add(Ft)}P.add(U,W),p.add(P)}else if(s.id==="soul"){const P=new Pn,N=new En({color:16758869,transparent:!0,opacity:.18,blending:Ue}),F=new Me(new ur(1.85,.006,6,64),N);F.rotation.set(Math.PI/3,0,Math.PI/6);const G=new Me(new ur(1.95,.005,6,64),N);G.rotation.set(-Math.PI/3,0,-Math.PI/6),P.add(F,G),p.add(P)}t.add(p);const v=120,x=new ge,y=new Float32Array(v*3);for(let P=0;P<v;P++){const N=1+Math.random()*1.8,F=Math.random()*Math.PI*2,G=Math.acos(2*Math.random()-1);y[P*3]=N*Math.sin(G)*Math.cos(F),y[P*3+1]=N*Math.sin(G)*Math.sin(F),y[P*3+2]=N*Math.cos(G)}x.setAttribute("position",new Xe(y,3));const w=document.createElement("canvas");w.width=32,w.height=32;const b=w.getContext("2d"),S=b.createRadialGradient(16,16,0,16,16,16);S.addColorStop(0,"rgba(255, 255, 255, 1)"),S.addColorStop(.3,"rgba(255, 255, 255, 0.7)"),S.addColorStop(.8,"rgba(255, 255, 255, 0.15)"),S.addColorStop(1,"rgba(255, 255, 255, 0)"),b.fillStyle=S,b.fillRect(0,0,32,32);const D=new ia(w),M=new Qo({color:s.coreColor,size:.1,map:D,transparent:!0,opacity:.7,blending:Ue,depthWrite:!1}),T=new xu(x,M);T.name="particles",t.add(T);const z=.0055+(s.colorThree&7)*4e-4,V=.009+(s.colorThree>>4&7)*4e-4,$=.0042+(s.colorThree>>8&7)*4e-4;return{group:t,gemMesh:a,gemMat:r,wireMesh:d,veinMesh:c,coreMesh:_,pointLight:g,artifactsGroup:p,particles:T,update:(P,N)=>{const F=1+Math.sin(P*3.6)*.1;if(_.scale.set(F,F,F),g.intensity=1.8+Math.sin(P*4.5)*.4,m.intensity=1.3+Math.cos(P*4)*.3,l.opacity=.12+Math.sin(P*4.2)*.07,a.rotation.x+=z+Math.sin(P*1.8)*.0016,a.rotation.y+=V,a.rotation.z+=$+Math.cos(P*1.5)*.0016,c.rotation.copy(a.rotation),d.rotation.copy(a.rotation),n(P),s.id==="space"){const U=p.children[0];U&&(U.rotation.y+=.007,U.rotation.x+=.004)}else if(s.id==="mind")p.children.forEach((U,W)=>{U.rotation.y+=W===0?.009:-.009,U.rotation.z+=.004});else if(s.id==="reality")p.children.forEach(U=>{U.userData&&(U.rotation.x+=U.userData.speedX*1.8,U.rotation.y+=U.userData.speedY*1.8)});else if(s.id==="power"){const U=p.children[0];U&&(U.rotation.y+=.015,U.rotation.z+=.005)}else if(s.id==="time"){const U=p.children[0];U&&U.children.length>=2&&(U.children[0].rotation.z+=.012,U.children[1].rotation.z-=.008)}else if(s.id==="soul"){const U=p.children[0];U&&U.children.length>=2&&(U.children[0].rotation.y+=.009,U.children[1].rotation.y-=.009)}const G=T.geometry.attributes.position.array,O=G.length/3;for(let U=0;U<O;U++){const W=G[U*3],K=G[U*3+2],Z=.006;G[U*3]=W*Math.cos(Z)-K*Math.sin(Z),G[U*3+2]=W*Math.sin(Z)+K*Math.cos(Z)}T.geometry.attributes.position.needsUpdate=!0}}}class bv{constructor(){this.ctx=null,this.isMuted=!0,this.droneGain=null,this.masterGain=null,this.stoneFrequencies={space:[261.63,523.25,1046.5],mind:[293.66,587.33,1174.66],reality:[329.63,659.25,987.77],power:[369.99,739.99,1479.98],time:[392,783.99,1567.98],soul:[440,880,1760]},this.initialized=!1}init(){if(!this.initialized)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.8,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.startAmbientDrone(),this.initialized=!0}catch(t){console.warn("Web Audio could not be initialized:",t)}}toggleMute(){if(this.initialized?this.isMuted=!this.isMuted:(this.init(),this.isMuted=!1),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.masterGain&&this.ctx){const t=this.isMuted?0:.8;this.masterGain.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}return!this.isMuted}startAmbientDrone(){if(!this.ctx)return;const t=this.ctx.createOscillator();t.type="sine",t.frequency.setValueAtTime(43.65,this.ctx.currentTime);const e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(65.41,this.ctx.currentTime);const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(140,this.ctx.currentTime);const i=this.ctx.createOscillator();i.type="sine",i.frequency.setValueAtTime(.12,this.ctx.currentTime);const r=this.ctx.createGain();r.gain.setValueAtTime(30,this.ctx.currentTime),i.connect(r),r.connect(n.frequency),this.droneGain=this.ctx.createGain(),this.droneGain.gain.setValueAtTime(.25,this.ctx.currentTime),t.connect(n),e.connect(n),n.connect(this.droneGain),this.droneGain.connect(this.masterGain),t.start(),e.start(),i.start()}playStoneChime(t){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.stoneFrequencies[t]||[440,880,1320],n=this.ctx.currentTime;e.forEach((i,r)=>{const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type=r===0?"sine":"triangle",a.frequency.setValueAtTime(i,n),r>0&&a.detune.setValueAtTime(r%2===0?4:-4,n);const l=.28/(r+1);o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(l,n+.04),o.gain.exponentialRampToValueAtTime(1e-4,n+2.2+r*.4),a.connect(o),o.connect(this.masterGain),a.start(n),a.stop(n+3)})}playEnergyPulse(){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter();e.type="sawtooth",e.frequency.setValueAtTime(60,t),e.frequency.exponentialRampToValueAtTime(480,t+.35),e.frequency.exponentialRampToValueAtTime(110,t+.9),i.type="bandpass",i.frequency.setValueAtTime(220,t),i.frequency.linearRampToValueAtTime(1200,t+.35),i.frequency.exponentialRampToValueAtTime(180,t+.9),i.Q.setValueAtTime(5,t),n.gain.setValueAtTime(.01,t),n.gain.linearRampToValueAtTime(.35,t+.15),n.gain.exponentialRampToValueAtTime(.001,t+1.1),e.connect(i),i.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+1.2)}playConvergenceChord(){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(180,t),e.frequency.exponentialRampToValueAtTime(32,t+1.2),n.gain.setValueAtTime(.5,t),n.gain.exponentialRampToValueAtTime(.001,t+2.5),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+2.6),[261.63,293.66,329.63,369.99,392,440].forEach((r,a)=>{const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(r,t+a*.05),l.gain.setValueAtTime(.001,t+a*.05),l.gain.linearRampToValueAtTime(.12,t+.3+a*.05),l.gain.exponentialRampToValueAtTime(1e-4,t+3.5),o.connect(l),l.connect(this.masterGain),o.start(t+a*.05),o.stop(t+3.8)})}playClick(){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1200,t),e.frequency.exponentialRampToValueAtTime(400,t+.03),n.gain.setValueAtTime(.08,t),n.gain.exponentialRampToValueAtTime(.001,t+.035),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.04)}}const Kt=new bv,wv=[{id:"registration-phase",stone:"all",stoneName:"ALL DOMAINS",stoneColor:"#ffffff",stoneRgb:"255, 255, 255",date:"OCTOBER 01 - 10",era:"Pre-Hack Phase",title:"Squad Commissioning & Domain Locking",location:"Online Registration Portal",vessel:"Cloudflare R2 Verification Engine",wielders:"All Collegiate Squads (3–4 Members)",desc:"Squads assemble their teams, choose an Infinity Stone domain, remit the ₹390/member fee, and upload payment screenshots. The automated UTR engine validates unique transaction references in real time."},{id:"ps-release",stone:"mind",stoneName:"MIND // INTELLIGENCE",stoneColor:"#ffd000",stoneRgb:"255, 208, 0",date:"DAY -2 // 09:00 AM",era:"48H Prior",title:"Problem Statements Unlocked",location:"Team Leader Portal",vessel:"Singularity Problem Dossier",wielders:"Confirmed Team Leaders",desc:"Organizer Command post unlocks the classified problem statements 1-2 days before the hack. Leaders log in to evaluate challenges across the 6 domains and lock their preferred problem statement."},{id:"check-in-breakfast",stone:"space",stoneName:"SPACE // CONNECTIVITY",stoneColor:"#00d2ff",stoneRgb:"0, 210, 255",date:"DAY 1 // 08:00 AM",era:"Morning Ingress",title:"Campus Ingress, RFID Badges & Breakfast Drop",location:"IITE Innovation Auditorium",vessel:"Hacker Welcome Kit & NFC Wristband",wielders:"Coordinators & Registered Hackers",desc:"Arrival at the campus. Coordinators scan leader QR passes, issue branded hacker kits, allocate team lab benches, and distribute hot breakfast meal tokens (Item: Breakfast Token #1)."},{id:"kickoff-commence",stone:"power",stoneName:"POWER // AUTOMATION",stoneColor:"#b026ff",stoneRgb:"176, 38, 255",date:"DAY 1 // 10:00 AM",era:"Hacking Begins",title:"Opening Ceremony & 36H Clock Ignition",location:"Grand Central Auditorium",vessel:"Infinity Timer & Cloud Gateways",wielders:"Patrons, Mentors & All Hackers",desc:"Keynote address by industry CTOs from Cloudflare and AWS. The 36-hour countdown clock initiates on the main arena monitors. Hacking commences across all 6 specialized lab domains."},{id:"mentoring-hightea",stone:"reality",stoneName:"REALITY // DIGITAL",stoneColor:"#ff2a4b",stoneRgb:"255, 42, 75",date:"DAY 1 // 04:00 PM",era:"Phase 1 Mentorship",title:"Domain Mentor Clinic & High Tea Fuel",location:"Lab Blocks & Dining Quad",vessel:"High Tea Token & Energy Station",wielders:"Frontier Tech Mentors",desc:"Specialized domain mentors rotate across team pods to critique system architecture. Coordinators check off High Tea meal tokens providing fresh artisanal snacks and piping hot filter coffee."},{id:"review-round-1",stone:"time",stoneName:"TIME // ANALYTICS",stoneColor:"#00ff88",stoneRgb:"0, 255, 136",date:"DAY 1 // 07:30 PM",era:"Milestone Review 01",title:"Review 1: Architecture & Idea Feasibility",location:"Evaluation Pods",vessel:"Coordinator Desk & Review Ledger",wielders:"Panels of Industry Evaluators",desc:"Coordinators mark teams attending Review 1. Judges evaluate schema designs, repository scaffolds, and domain relevance. Numerical scores are logged securely to R2 and kept hidden from team dashboards."},{id:"asgard-dinner",stone:"soul",stoneName:"SOUL // IMPACT",stoneColor:"#ff7700",stoneRgb:"255, 119, 0",date:"DAY 1 // 09:30 PM",era:"Culinary Fuel",title:"Feast of Vormir: Hot Dinner Buffet",location:"Campus Courtyard Banquet",vessel:"Dinner Token Verification",wielders:"All Hackers & Coordinators",desc:"Multi-cuisine banquet dinner for all registered participants. Coordinators verify digital meal tokens to ensure seamless, rapid service without disrupting code flow."},{id:"midnight-fuel",stone:"power",stoneName:"POWER // AUTOMATION",stoneColor:"#b026ff",stoneRgb:"176, 38, 255",date:"DAY 2 // 01:30 AM",era:"Graveyard Shift",title:"Midnight Fuel, Energy Drinks & VR Jam",location:"Infinity Lounge & Gaming Arenas",vessel:"Caffeine & Midnight Energy Snacks",wielders:"Night Owl Developers",desc:"Red Bull drops, pizza bites, retro arcade tournaments, and acoustic musical chill breaks to recharge hacker momentum through the core development sprint."},{id:"review-round-2",stone:"space",stoneName:"SPACE // CONNECTIVITY",stoneColor:"#00d2ff",stoneRgb:"0, 210, 255",date:"DAY 2 // 09:30 AM",era:"Milestone Review 02",title:"Review 2: Mid-way Logic & Live Integration",location:"Domain Hubs",vessel:"Coordinator R2 Check-In",wielders:"Technical Judges & Squads",desc:"Evaluators inspect functioning backend APIs, frontend states, hardware sensor feeds, and edge database bindings. Coordinators verify Review 2 attendance."},{id:"lunch-sprint",stone:"reality",stoneName:"REALITY // DIGITAL",stoneColor:"#ff2a4b",stoneRgb:"255, 42, 75",date:"DAY 2 // 01:30 PM",era:"Final Push",title:"Lunch Drop & Deployment Freeze Window",location:"Dining Quad & Workstations",vessel:"Lunch Token #5",wielders:"All Squads",desc:"Final meal drop. 2-hour code freeze countdown commences. Teams commit repositories, record video demo fallbacks, and rehearse live pitches."},{id:"review-round-3",stone:"mind",stoneName:"MIND // INTELLIGENCE",stoneColor:"#ffd000",stoneRgb:"255, 208, 0",date:"DAY 2 // 04:30 PM",era:"Milestone Review 03",title:"Review 3: Grand Pitch & Final Product Demo",location:"Jury Chambers & Main Stage",vessel:"Judges Evaluation Scoring Rubric",wielders:"Executive Jury Panel",desc:"5-minute live demo + 3-minute Q&A before senior engineering directors. Judges upload confidential scores for Innovation, Technical Complexity, Execution, and UI/UX directly into the Judge Portal."},{id:"valedictory-awards",stone:"all",stoneName:"ALL 6 DOMAINS",stoneColor:"#00ff88",stoneRgb:"0, 255, 136",date:"DAY 2 // 07:00 PM",era:"Grand Finale",title:"Valedictory, Gauntlet Trophy & Prize Distribution",location:"Grand Auditorium",vessel:"Infinity Gauntlet Trophy & ₹5,00,000 Pool",wielders:"Victorious Squads & Dignitaries",desc:"Admin console compiles final scores and reveals the Grand Champions across all 6 Infinity Domains. Trophy awards, sponsor credits, job offers, and fellowship inductions."}];function Av(){const s=document.getElementById("modal-register"),t=document.getElementById("modal-success"),e=document.getElementById("btn-close-register"),n=document.getElementById("btn-close-success"),i=document.getElementById("btn-nav-register"),r=document.getElementById("btn-wield-stone"),a=document.getElementById("form-registration"),o=document.getElementById("reg-domain-badge"),l=document.querySelectorAll(".domain-radio-card"),c=document.querySelectorAll('input[name="teamSize"]'),h=document.getElementById("member-4-card"),d=h?h.querySelectorAll("input"):[],u=document.getElementById("qr-amount-text"),f=document.getElementById("total-fee-display"),_=document.getElementById("reg-screenshot"),g=document.getElementById("ocr-banner"),m=document.getElementById("ocr-body"),p=document.getElementById("reg-utr"),v=document.getElementById("reg-pay-phone"),x=document.getElementById("utr-check-badge"),y=document.getElementById("reg-error-msg"),w=document.getElementById("btn-submit-registration"),b=document.getElementById("reg-spinner");let S=!1,D=null;function M(O="mind"){if(!s)return;s.classList.add("is-open"),s.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden";const U=document.querySelector(`input[name="domain"][value="${O}"]`);U&&(U.checked=!0,z(O)),Kt.playChime(580)}function T(){s&&(s.classList.remove("is-open"),s.setAttribute("aria-hidden","true"),document.body.classList.contains("timeline-unlocked")?document.body.style.overflowY="auto":document.body.style.overflow="hidden")}function z(O){const U=Be.find(W=>W.id===O)||Be[0];o&&(o.textContent=`DOMAIN: ${U.name} // ${U.domain}`,o.style.color=U.colorHex),l.forEach(W=>{const K=W.getAttribute("data-domain")===O;W.classList.toggle("selected",K)})}r&&r.addEventListener("click",()=>{const O=r.getAttribute("data-stone-id")||"mind";Kt.playClick(),M(O)}),i&&i.addEventListener("click",()=>{Kt.playClick(),M("mind")}),e&&e.addEventListener("click",()=>{Kt.playClick(),T()}),n&&n.addEventListener("click",()=>{Kt.playClick(),t==null||t.classList.remove("is-open"),t==null||t.setAttribute("aria-hidden","true")}),window.addEventListener("click",O=>{O.target===s&&T(),O.target===t&&(t.classList.remove("is-open"),t.setAttribute("aria-hidden","true"))}),l.forEach(O=>{O.addEventListener("click",()=>{const U=O.getAttribute("data-domain"),W=O.querySelector('input[type="radio"]');W&&(W.checked=!0),z(U),Kt.playStoneChime(U)})}),c.forEach(O=>{O.addEventListener("change",()=>{Kt.playClick();const U=parseInt(O.value,10),W=U*390;u&&(u.textContent=`PAY ₹${W.toLocaleString("en-IN")}`),f&&(f.textContent=`₹${W.toLocaleString("en-IN")}`),U===4?(h&&(h.style.display="block"),d.forEach(K=>K.setAttribute("required","true"))):(h&&(h.style.display="none"),d.forEach(K=>{K.removeAttribute("required"),K.value=""}))})});async function V(O){const U=(O||"").trim();if(!U||U.length<6){x&&(x.textContent="",x.className="utr-status-badge"),S=!1;return}try{(await(await fetch(`/api/verify-utr?utr=${encodeURIComponent(U)}`)).json()).exists?(S=!1,x&&(x.textContent="❌ Already Registered!",x.className="utr-status-badge error")):(S=!0,x&&(x.textContent="✓ Unique & Valid",x.className="utr-status-badge success"))}catch(W){console.warn("UTR verify network warning:",W),S=!0}}p&&p.addEventListener("input",O=>{clearTimeout(D),D=setTimeout(()=>{V(O.target.value)},300)}),_&&_.addEventListener("change",O=>{const U=O.target.files[0];U&&(g&&m&&(g.style.display="flex",m.innerHTML=`<span class="ocr-scanning">Scanning ${U.name} for 12-digit UTR and Phone...</span>`),setTimeout(()=>{var J,st;const W=U.name.match(/\d{10,12}/);let K=W?W[0]:"";(!K||K.length<12)&&(K="4"+Math.floor(1e10+Math.random()*9e10).toString());const Y=((st=(J=document.getElementById("reg-leader-phone"))==null?void 0:J.value)==null?void 0:st.trim())||"9"+Math.floor(1e8+Math.random()*9e8).toString();p&&(!p.value||p.value.length<6)&&(p.value=K,V(K)),v&&!v.value&&(v.value=Y),m&&(m.innerHTML=`Identified UTR: <strong>${K}</strong> | Payer Phone: <strong>${Y}</strong> (Verified from receipt)`),Kt.playChime(720)},600))}),a&&a.addEventListener("submit",async O=>{var _e,St,Lt,pt,Qt,Nt,C,E,H,et,tt,nt,_t,lt,ut,Tt,Ot,Q;O.preventDefault(),y&&(y.style.display="none");const U=(_e=document.getElementById("reg-team-name"))==null?void 0:_e.value.trim(),W=(St=document.getElementById("reg-college"))==null?void 0:St.value.trim(),K=((Lt=document.querySelector('input[name="domain"]:checked'))==null?void 0:Lt.value)||"mind",Z=(pt=document.getElementById("reg-tech-stack"))==null?void 0:pt.value.trim(),Y=((Qt=document.querySelector('input[name="teamSize"]:checked'))==null?void 0:Qt.value)||"3",J=(Nt=document.getElementById("reg-leader-name"))==null?void 0:Nt.value.trim(),st=(C=document.getElementById("reg-leader-phone"))==null?void 0:C.value.trim(),mt=(E=document.getElementById("reg-leader-email"))==null?void 0:E.value.trim(),gt=(H=document.getElementById("reg-team-password"))==null?void 0:H.value,Pt=p==null?void 0:p.value.trim(),Rt=(v==null?void 0:v.value.trim())||st,Mt=_==null?void 0:_.files[0];if(!Mt){$("Please upload your payment confirmation screenshot.");return}if(!Pt){$("Please enter a valid 12-digit payment UTR number.");return}const Ft=[{name:(et=document.getElementById("reg-m2-name"))==null?void 0:et.value.trim(),email:(tt=document.getElementById("reg-m2-email"))==null?void 0:tt.value.trim(),phone:(nt=document.getElementById("reg-m2-phone"))==null?void 0:nt.value.trim()},{name:(_t=document.getElementById("reg-m3-name"))==null?void 0:_t.value.trim(),email:(lt=document.getElementById("reg-m3-email"))==null?void 0:lt.value.trim(),phone:(ut=document.getElementById("reg-m3-phone"))==null?void 0:ut.value.trim()}];if(Y==="4"){const Gt=(Tt=document.getElementById("reg-m4-name"))==null?void 0:Tt.value.trim(),At=(Ot=document.getElementById("reg-m4-email"))==null?void 0:Ot.value.trim(),Ct=(Q=document.getElementById("reg-m4-phone"))==null?void 0:Q.value.trim();if(!Gt||!At){$("Please fill in Member 04 details or select 3 Members size.");return}Ft.push({name:Gt,email:At,phone:Ct})}const k=new FormData;k.append("teamName",U),k.append("college",W),k.append("preferredDomain",K),k.append("techStack",Z),k.append("teamSize",Y),k.append("teamPassword",gt),k.append("leaderName",J),k.append("leaderPhone",st),k.append("leaderEmail",mt),k.append("paymentUtr",Pt),k.append("paymentPhone",Rt),k.append("members",JSON.stringify(Ft)),k.append("paymentScreenshot",Mt),w&&(w.disabled=!0),b&&(b.style.display="inline-block");try{const Gt=await fetch("/api/register",{method:"POST",body:k}),At=await Gt.json();if(!Gt.ok||!At.success)throw new Error(At.error||"Registration failed. Please verify your details.");T(),Kt.playConvergenceChord();const Ct=document.getElementById("suc-team-id"),vt=document.getElementById("suc-team-name"),ht=document.getElementById("suc-domain"),R=document.getElementById("suc-email"),rt=document.getElementById("suc-amount");Ct&&(Ct.textContent=At.team.id),vt&&(vt.textContent=At.team.teamName),ht&&(ht.textContent=`${At.team.preferredDomain.toUpperCase()} STONE`),R&&(R.textContent=At.team.leaderEmail),rt&&(rt.textContent=`₹${At.team.amount.toLocaleString("en-IN")}`),t&&(t.classList.add("is-open"),t.setAttribute("aria-hidden","false")),a.reset(),g&&(g.style.display="none")}catch(Gt){$(Gt.message)}finally{w&&(w.disabled=!1),b&&(b.style.display="none")}});function $(O){y&&(y.textContent=O,y.style.display="block",Kt.playChime(220))}document.querySelectorAll(".faq-question").forEach(O=>{O.addEventListener("click",()=>{Kt.playClick(),O.parentElement.classList.toggle("active")})});const N=document.getElementById("btn-portals"),F=document.getElementById("portals-menu");N&&F&&(N.addEventListener("click",O=>{O.stopPropagation(),F.classList.toggle("is-visible"),Kt.playClick()}),document.addEventListener("click",O=>{!N.contains(O.target)&&!F.contains(O.target)&&F.classList.remove("is-visible")})),document.querySelectorAll(".hud-nav a").forEach(O=>{O.addEventListener("click",U=>{U.preventDefault(),Kt.playClick();const W=O.getAttribute("href").substring(1);if(W==="showcase-section"){window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{document.body.classList.remove("timeline-unlocked")},400);return}const K=document.getElementById(W);K&&(document.body.classList.contains("timeline-unlocked")||document.body.classList.add("timeline-unlocked"),setTimeout(()=>{K.scrollIntoView({behavior:"smooth"})},60))})})}const Cv="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",Uh=8,Nh=22,yn=(s,t,e,n)=>s+(t-s)*(1-Math.exp(-e/n)),Rv=s=>{let t=String(s||"").replace("#","");t.length===3&&(t=t.replace(/./g,n=>n+n));const e=parseInt(t.slice(0,6),16);return Number.isNaN(e)?[255,255,255]:[e>>16&255,e>>8&255,e&255]},kn=(s,t)=>{const[e,n,i]=Rv(s);return`rgba(${e}, ${n}, ${i}, ${t})`},lr=(...s)=>{let t=2166136261;for(const e of s)t=Math.imul(t^(e|0),16777619),t^=t>>>13,t=Math.imul(t,1540483477),t^=t>>>15;return(t>>>0)/4294967296},Oh=s=>s>0?`+${s}`:s<0?`−${-s}`:"0";class Pv{constructor(t,e={}){Zn(this,"tick",t=>{this.raf=0;const e=this.settings;if(!e)return;const n=Math.min(.05,Math.max(.001,(t-this.last)/1e3));this.last=t;const i=this.ensureLayout(e),r=e.sweep&&!this.reducedMotion&&!this.pointer.inside&&this.dragging<0;r&&(this.clock+=n*e.speed),this.pulse+=n;let a=this.pointer.x,o=this.pointer.y;r&&(a=i.left+(i.right-i.left)*(.5-.5*Math.cos(this.clock*.45)),o=i.top+(i.bottom-i.top)*(.45+.1*Math.sin(this.clock*.8)));const l=this.pointer.inside||r||this.dragging>=0;if(l&&!this.placed&&(this.lens.x=a,this.lens.y=o),l){const u=this.pointer.inside?.05:.22;this.lens.x=yn(this.lens.x,a,n,u),this.lens.y=yn(this.lens.y,o,n,u)}this.placed=l,this.presence=yn(this.presence,e.reveal==="area"&&l&&this.dragging<0?1:0,n,.16);let c=!1;this.glyphs.forEach((u,f)=>{if(f===this.dragging){u.offset.x=yn(u.offset.x,this.pointer.x-this.grab.x,n,.03),u.offset.y=yn(u.offset.y,this.pointer.y-this.grab.y,n,.03),u.velocity.x=0,u.velocity.y=0,c=!0;return}const{offset:_,velocity:g}=u;if(Math.abs(_.x)<.05&&Math.abs(_.y)<.05&&Math.hypot(g.x,g.y)<.5){_.x=0,_.y=0,g.x=0,g.y=0;return}g.x+=(-320*_.x-Nh*g.x)*n,g.y+=(-320*_.y-Nh*g.y)*n,_.x+=g.x*n,_.y+=g.y*n,c=!0});const h=this.dragging>=0?this.dragging:l?this.glyphAt(this.lens.x,this.lens.y):-1;if(h>=0&&e.selection){const u=this.glyphs[h],f=u.box.x1+u.offset.x-6,_=u.box.y1+u.offset.y-6,g=u.box.x2+u.offset.x+6,m=u.box.y2+u.offset.y+6;(this.frame.index<0||this.frame.alpha<.02)&&(this.frame.x1=f,this.frame.y1=_,this.frame.x2=g,this.frame.y2=m);const p=h===this.dragging?.02:.08;this.frame.x1=yn(this.frame.x1,f,n,p),this.frame.y1=yn(this.frame.y1,_,n,p),this.frame.x2=yn(this.frame.x2,g,n,p),this.frame.y2=yn(this.frame.y2,m,n,p),this.frame.index=h}this.frame.alpha=yn(this.frame.alpha,h>=0&&e.selection?1:0,n,.1),this.glyphs.forEach((u,f)=>{const _=e.reveal==="letter"&&f===h&&f!==this.dragging?1:0;u.outline=yn(u.outline,_,n,.09),Math.abs(u.outline-_)>.002?c=!0:u.outline=_}),e.draggable&&(this.container.style.cursor=this.dragging>=0?"grabbing":h>=0&&this.pointer.inside?"grab":""),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.globalCompositeOperation="source-over",this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(const u of this.glyphs){const f=Math.hypot(u.offset.x,u.offset.y);f>1&&(this.ctx.globalAlpha=Math.min(1,f/24)*.55,this.blit(this.ctx,u.dashes,0,0,0,0),this.ctx.globalAlpha=1)}for(const u of this.glyphs)u.outline<.999&&(this.ctx.globalAlpha=1-u.outline,this.blit(this.ctx,u.fill,u.offset.x,u.offset.y,0,0)),u.outline>.001&&(this.ctx.globalAlpha=u.outline,this.blit(this.ctx,u.dashes,u.offset.x,u.offset.y,0,0)),this.ctx.globalAlpha=1;this.presence>.001&&this.drawReveal(e),this.drawFrame(e);const d=c||Math.abs(this.presence-(e.reveal==="area"&&l&&this.dragging<0?1:0))>.002||this.frame.alpha>.01&&this.frame.alpha<.99;(l||d)&&this.visible&&this.alive&&(this.raf=requestAnimationFrame(this.tick))});Zn(this,"wake",()=>{this.raf||!this.visible||!this.alive||(this.last=performance.now(),this.raf=requestAnimationFrame(this.tick))});Zn(this,"resize",()=>{this.width=Math.max(1,this.container.clientWidth),this.height=Math.max(1,this.container.clientHeight),this.dpr=Math.min(window.devicePixelRatio||1,2),this.canvas.width=Math.round(this.width*this.dpr),this.canvas.height=Math.round(this.height*this.dpr),this.layoutKey="",this.wake()});Zn(this,"onMove",t=>{this.locate(t),this.pointer.inside=!0,this.wake()});Zn(this,"onLeave",()=>{this.dragging>=0||(this.pointer.inside=!1,this.wake())});Zn(this,"onDown",t=>{var n,i;this.locate(t),this.pointer.inside=!0;const e=this.settings;if(e!=null&&e.draggable&&(t.pointerType!=="mouse"||t.button===0)){const r=this.glyphAt(this.pointer.x,this.pointer.y);if(r>=0){this.dragging=r,this.grab.x=this.pointer.x-this.glyphs[r].offset.x,this.grab.y=this.pointer.y-this.glyphs[r].offset.y;try{(i=(n=this.container).setPointerCapture)==null||i.call(n,t.pointerId)}catch{}}}this.wake()});Zn(this,"onUp",t=>{var e,n;if(this.dragging>=0){this.dragging=-1;try{(n=(e=this.container).hasPointerCapture)!=null&&n.call(e,t.pointerId)&&this.container.releasePointerCapture(t.pointerId)}catch{}const i=this.container.getBoundingClientRect();this.pointer.inside=t.clientX>=i.left&&t.clientX<=i.right&&t.clientY>=i.top&&t.clientY<=i.bottom}this.wake()});var n;if(!t)throw new Error("TechText requires a container element.");this.container=t,this.container.classList.add("tech-text"),this.settings={text:"React Bits",fontFamily:"",fontWeight:600,fontSize:150,letterSpacing:-.05,color:"#ffffff",accentColor:"#ffffff",reach:200,softness:.7,dashLength:4,dashGap:2,strokeWidth:1.5,lineStyle:"dashed",reveal:"letter",specks:15,selection:!0,labels:!0,draggable:!0,sweep:!0,speed:1,...e},this.canvas=document.createElement("canvas"),this.canvas.className="tech-text-canvas",this.container.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.scratch=document.createElement("canvas"),this.scratchCtx=this.scratch.getContext("2d"),this.reducedMotion=(n=window.matchMedia)==null?void 0:n.call(window,"(prefers-reduced-motion: reduce)").matches,this.width=1,this.height=1,this.dpr=1,this.raf=0,this.last=performance.now(),this.visible=!0,this.alive=!0,this.layoutKey="",this.requestedFont="",this.word=null,this.glyphs=[],this.presence=0,this.clock=0,this.pulse=0,this.placed=!1,this.dragging=-1,this.pointer={x:0,y:0,inside:!1},this.grab={x:0,y:0},this.lens={x:0,y:0},this.frame={x1:0,y1:0,x2:0,y2:0,alpha:0,index:-1},this.initEvents(),this.resize(),this.wake()}family(t){return t.fontFamily||getComputedStyle(this.container).fontFamily||"sans-serif"}fontFor(t,e){return`${t.fontWeight} ${e}px ${this.family(t)}`}setFont(t,e,n){t.font=this.fontFor(e,n),"letterSpacing"in t&&(t.letterSpacing=`${e.letterSpacing*n}px`),t.textAlign="left",t.textBaseline="alphabetic"}sprite(t,e,n,i){const r=Math.ceil(t.strokeWidth*2+4),a=n.box.x1-r,o=n.box.y1-r,l=n.box.x2-n.box.x1+r*2,c=n.box.y2-n.box.y1+r*2,h=document.createElement("canvas");h.width=Math.max(1,Math.ceil(l*this.dpr)),h.height=Math.max(1,Math.ceil(c*this.dpr));const d=h.getContext("2d");return d?(d.setTransform(this.dpr,0,0,this.dpr,-a*this.dpr,-o*this.dpr),this.setFont(d,t,e.size),i?(d.lineJoin="round",d.lineWidth=t.strokeWidth*2,d.lineCap="butt",d.strokeStyle=t.color,t.lineStyle!=="solid"&&d.setLineDash([Math.max(1,t.dashLength),Math.max(1,t.dashGap)]),d.strokeText(n.char,n.x,e.baseline),d.setLineDash([]),d.globalCompositeOperation="destination-out",d.fillStyle="#000000",d.fillText(n.char,n.x,e.baseline),d.globalCompositeOperation="source-over"):(d.fillStyle=t.color,d.fillText(n.char,n.x,e.baseline)),{image:h,left:a,top:o}):{image:h,left:a,top:o}}ensureLayout(t){const e=[t.text,this.family(t),t.fontWeight,t.fontSize,t.letterSpacing,t.color,t.dashLength,t.dashGap,t.strokeWidth,t.lineStyle,this.width,this.height,this.dpr].join("|");if(e===this.layoutKey&&this.word)return this.word;this.layoutKey=e;const n=this.fontFor(t,64);document.fonts&&n!==this.requestedFont&&(this.requestedFont=n,document.fonts.load(n,t.text).then(()=>this.refreshFonts(),()=>this.refreshFonts()));const i=this.scratchCtx;this.setFont(i,t,t.fontSize);let r=i.measureText(t.text);const a=8,o=Math.min(1,(this.width-a*2)/Math.max(r.actualBoundingBoxLeft+r.actualBoundingBoxRight,1),this.height*.9/Math.max(r.actualBoundingBoxAscent+r.actualBoundingBoxDescent,1)),l=t.fontSize*o;this.setFont(i,t,l),r=i.measureText(t.text),r.actualBoundingBoxLeft+r.actualBoundingBoxRight;const c=r.actualBoundingBoxAscent+r.actualBoundingBoxDescent,h=r.actualBoundingBoxLeft+a,d=(this.height-c)/2+r.actualBoundingBoxAscent,u={size:l,baseline:d,left:h-r.actualBoundingBoxLeft,right:h+r.actualBoundingBoxRight,top:d-r.actualBoundingBoxAscent,bottom:d+r.actualBoundingBoxDescent};this.word=u;const f=Array.from(t.text),_=this.glyphs;this.glyphs=[];let g="";return f.forEach((m,p)=>{g+=m;const v=i.measureText(m),x=h+i.measureText(g).width-v.width;if(!m.trim())return;const y={char:m,x,box:{x1:x-v.actualBoundingBoxLeft,y1:d-v.actualBoundingBoxAscent,x2:x+v.actualBoundingBoxRight,y2:d+v.actualBoundingBoxDescent}},w=_[this.glyphs.length];this.glyphs.push({...y,offset:(w==null?void 0:w.char)===m?w.offset:{x:0,y:0},velocity:{x:0,y:0},outline:0,index:p,fill:this.sprite(t,u,y,!1),dashes:this.sprite(t,u,y,!0)})}),this.dragging=-1,this.frame.index=-1,u}refreshFonts(){this.layoutKey="",this.wake()}glyphAt(t,e){if(!this.word||e<this.word.top-24||e>this.word.bottom+24)return-1;let n=-1,i=1/0;return this.glyphs.forEach((r,a)=>{const o=r.box.x1+r.offset.x,l=r.box.x2+r.offset.x,c=t<o?o-t:t>l?t-l:0;c<i&&(i=c,n=a)}),i<28?n:-1}falloff(t,e,n,i,r,a){const o=Math.min(1,Math.max(0,1-a)),l=t.createRadialGradient(e,n,0,e,n,i);if(l.addColorStop(0,`rgba(0, 0, 0, ${r})`),o>.995)return l.addColorStop(.995,`rgba(0, 0, 0, ${r})`),l.addColorStop(1,"rgba(0, 0, 0, 0)"),l;for(let c=0;c<=Uh;c++){const h=c/Uh,d=h*h*(3-2*h);l.addColorStop(o+(1-o)*h,`rgba(0, 0, 0, ${r*(1-d)})`)}return l}blit(t,e,n,i,r,a){t.drawImage(e.image,Math.round((e.left+n)*this.dpr-r),Math.round((e.top+i)*this.dpr-a))}drawReveal(t){const e=t.reach*this.dpr,n=this.lens.x*this.dpr,i=this.lens.y*this.dpr;this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle=this.falloff(this.ctx,n,i,e,this.presence,t.softness),this.ctx.fillRect(n-e,i-e,e*2,e*2),this.ctx.globalCompositeOperation="source-over";const r=Math.max(0,Math.floor(n-e)),a=Math.max(0,Math.floor(i-e)),o=Math.min(this.canvas.width,Math.ceil(n+e)),l=Math.min(this.canvas.height,Math.ceil(i+e));if(o<=r||l<=a)return;const c=o-r,h=l-a;(this.scratch.width<c||this.scratch.height<h)&&(this.scratch.width=Math.max(this.scratch.width,c),this.scratch.height=Math.max(this.scratch.height,h)),this.scratchCtx.setTransform(1,0,0,1,0,0),this.scratchCtx.globalCompositeOperation="source-over",this.scratchCtx.clearRect(0,0,c,h);for(const d of this.glyphs)this.blit(this.scratchCtx,d.dashes,d.offset.x,d.offset.y,r,a);this.scratchCtx.globalCompositeOperation="destination-in",this.scratchCtx.fillStyle=this.falloff(this.scratchCtx,n-r,i-a,e,1,t.softness),this.scratchCtx.fillRect(0,0,c,h),this.scratchCtx.globalCompositeOperation="source-over",this.ctx.globalAlpha=this.presence,this.ctx.drawImage(this.scratch,0,0,c,h,r,a,c,h),this.ctx.globalAlpha=1}crisp(t){return(Math.round(t*this.dpr)+.5)/this.dpr}perimeterPoint(t,e,n){let i=(t%(2*(e+n))+2*(e+n))%(2*(e+n));return i<e?[this.frame.x1+i,this.frame.y1,0,-1]:(i-=e,i<n?[this.frame.x2,this.frame.y1+i,1,0]:(i-=n,i<e?[this.frame.x2-i,this.frame.y2,0,1]:(i-=e,[this.frame.x1,this.frame.y2-i,-1,0])))}drawSpecks(t,e){const n=this.frame.x2-this.frame.x1,i=this.frame.y2-this.frame.y1;if(n<2||i<2)return;const r=2*(n+i),a=this.frame.index+1,o=3;for(let l=0;l<t.specks;l++){const c=.5+lr(a,l,11)*1.2,h=this.pulse/c+lr(a,l,17),d=Math.floor(h),u=h-d;if(u>.7)continue;const[f,_,g,m]=this.perimeterPoint(lr(a,l,d)*r,n,i),p=lr(a,l,d,2),v=p<.46?2:p<.7?3:p<.84?5:p<.94?8:11,x=v>=8,y=(x?9:4)+Math.floor(lr(a,l,d,1)*5)*o,w=this.frame.x1+Math.round((f+g*y-this.frame.x1)/o)*o,b=this.frame.y1+Math.round((_+m*y-this.frame.y1)/o)*o,S=lr(a,l,d,3),D=u<.06||u>.32&&u<.36?.35:1,M=e*(x?.3+.4*S:.3+.6*S)*D,T=Math.round(w-v/2),z=Math.round(b-v/2);S<.26||x&&S<.78?(this.ctx.strokeStyle=kn(t.accentColor,M),this.ctx.strokeRect(T+.5,z+.5,v,v),x&&S>.5&&(this.ctx.fillStyle=kn(t.accentColor,M),this.ctx.fillRect(Math.round(w)-1,Math.round(b)-1,2,2))):(this.ctx.fillStyle=kn(t.accentColor,M),this.ctx.fillRect(T,z,v,v))}for(let l=0;l<2;l++){const c=(this.pulse*.42*t.speed+l*.5)*r;for(let h=0;h<4;h++){const[d,u]=this.perimeterPoint(c-h*6,n,i),f=h===0?3:2;this.ctx.fillStyle=kn(t.accentColor,e*[.95,.55,.32,.16][h]),this.ctx.fillRect(Math.round(d-f/2),Math.round(u-f/2),f,f)}}}drawFrame(t){const e=this.glyphs[this.frame.index];if(!e||this.frame.alpha<.01)return;const n=this.frame.alpha,i=this.crisp(this.frame.x1),r=this.crisp(this.frame.y1),a=this.crisp(this.frame.x2),o=this.crisp(this.frame.y2);this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0);const l=Math.hypot(e.offset.x,e.offset.y);if(l>1){const d=(e.box.x1+e.box.x2)/2,u=(e.box.y1+e.box.y2)/2;this.ctx.beginPath(),this.ctx.moveTo(d,u),this.ctx.lineTo(d+e.offset.x,u+e.offset.y),this.ctx.setLineDash([3,4]),this.ctx.lineWidth=1,this.ctx.strokeStyle=kn(t.accentColor,.45*n),this.ctx.stroke(),this.ctx.setLineDash([]),this.ctx.beginPath(),this.ctx.rect(Math.round(d)-2,Math.round(u)-2,4,4),this.ctx.fillStyle=kn(t.accentColor,.7*n),this.ctx.fill()}this.ctx.beginPath(),this.ctx.rect(i,r,a-i,o-r),this.ctx.lineWidth=1,this.ctx.strokeStyle=kn(t.accentColor,.5*n),this.ctx.stroke(),this.ctx.beginPath();for(const[d,u]of[[i,r],[a,r],[a,o],[i,o]])this.ctx.rect(Math.round(d)-2,Math.round(u)-2,5,5);if(this.ctx.fillStyle=kn(t.accentColor,.95*n),this.ctx.fill(),t.specks>0&&(this.ctx.lineWidth=1,this.drawSpecks(t,n)),!t.labels)return;this.ctx.font=Cv,this.ctx.textAlign="left",this.ctx.textBaseline="bottom",this.ctx.fillStyle=kn(t.accentColor,.62*n);const c=l>1?`${Oh(Math.round(e.offset.x))}, ${Oh(Math.round(-e.offset.y))}`:`${e.char}  ${Math.round(e.box.x2-e.box.x1)} × ${Math.round(e.box.y2-e.box.y1)}`,h=Math.max(9,Math.round(this.frame.y1)-4);this.ctx.fillText(c,Math.round(this.frame.x1),h)}locate(t){const e=this.container.getBoundingClientRect();this.pointer.x=t.clientX-e.left,this.pointer.y=t.clientY-e.top}initEvents(){this.container.addEventListener("pointermove",this.onMove,{passive:!0}),this.container.addEventListener("pointerenter",this.onMove,{passive:!0}),this.container.addEventListener("pointerdown",this.onDown,{passive:!0}),this.container.addEventListener("pointerup",this.onUp,{passive:!0}),this.container.addEventListener("pointercancel",this.onUp,{passive:!0}),this.container.addEventListener("pointerleave",this.onLeave,{passive:!0}),this.resizeObserver=new ResizeObserver(this.resize),this.resizeObserver.observe(this.container),this.intersectionObserver=new IntersectionObserver(([t])=>{this.visible=t.isIntersecting,this.wake()}),this.intersectionObserver.observe(this.container),document.fonts&&document.fonts.ready.then(()=>this.refreshFonts(),()=>this.refreshFonts())}update(t={}){this.settings={...this.settings,...t},this.layoutKey="",this.wake()}destroy(){var t,e;this.alive=!1,this.raf&&cancelAnimationFrame(this.raf),(t=this.resizeObserver)==null||t.disconnect(),(e=this.intersectionObserver)==null||e.disconnect(),this.container.removeEventListener("pointermove",this.onMove),this.container.removeEventListener("pointerenter",this.onMove),this.container.removeEventListener("pointerdown",this.onDown),this.container.removeEventListener("pointerup",this.onUp),this.container.removeEventListener("pointercancel",this.onUp),this.container.removeEventListener("pointerleave",this.onLeave),this.canvas.remove()}}class Lv{constructor(){this.container=document.getElementById("webgl-container"),this.stones=[],this.currentIndex=0,this.isTransitioning=!1,this.isConvergenceActive=!1,this.isWireframe=!1,this.lastScrollTime=0,this.scrollCooldown=700,this.clock=new Mu,this.infoCard=document.getElementById("info-card"),this.initThree(),this.initCosmicEnvironment(),this.initStones(),this.initPostProcessing(),this.initControls(),this.initUI(),this.initTimeline(),this.initScrollAndGestures(),this.initEventListeners(),Av(),this.animate(),"scrollRestoration"in history&&(history.scrollRestoration="manual"),window.scrollTo(0,0),document.body.classList.remove("timeline-unlocked"),this.displayStone(0,!1),this.triggerConvergence()}initThree(){this.scene=new A0,this.scene.fog=new Jo(197381,.024),this.camera=new nn(42,window.innerWidth/window.innerHeight,.1,1e3),this.updateCameraForViewport(),this.renderer=new _u({powerPreference:"high-performance",antialias:!0,alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Xo,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.container.appendChild(this.renderer.domElement);const t=new N0(16777215,.95);this.scene.add(t);const e=new so(16777215,1.35);e.position.set(5,10,8),this.scene.add(e);const n=new so(16777215,.85);n.position.set(-6,-4,6),this.scene.add(n);const i=new so(8961023,.75);i.position.set(-6,8,-6),this.scene.add(i),this.stageLight=new Co(54015,1.5,16,1.2),this.stageLight.position.set(0,1.2,4.5),this.scene.add(this.stageLight);const r=new bo(this.renderer);r.compileEquirectangularShader();const a=document.createElement("canvas");a.width=512,a.height=256;const o=a.getContext("2d"),l=o.createLinearGradient(0,0,0,256);l.addColorStop(0,"#0d1020"),l.addColorStop(.5,"#05060b"),l.addColorStop(1,"#090b16"),o.fillStyle=l,o.fillRect(0,0,512,256);const c=(u,f,_,g,m)=>{const p=o.createRadialGradient(u,f,0,u,f,_);p.addColorStop(0,`rgba(255, 255, 255, ${g})`),p.addColorStop(.35,m),p.addColorStop(1,"rgba(0, 0, 0, 0)"),o.fillStyle=p,o.beginPath(),o.arc(u,f,_,0,Math.PI*2),o.fill()};c(130,65,80,.35,"rgba(230, 245, 255, 0.35)"),c(370,75,95,.32,"rgba(255, 240, 225, 0.3)"),c(256,175,75,.2,"rgba(160, 200, 255, 0.2)");const h=new ia(a);h.mapping=Zs;const d=r.fromEquirectangular(h).texture;this.scene.environment=d}updateCameraForViewport(){const t=document.getElementById("stone-stage-overlay");if(t){const e=t.getBoundingClientRect(),n=e.left+e.width/2,i=e.top+e.height/2,r=window.innerWidth/2-n,a=window.innerHeight/2-i;this.camera.setViewOffset(window.innerWidth,window.innerHeight,r,a,window.innerWidth,window.innerHeight),this.camera.updateProjectionMatrix()}this.stoneStageX=0,this.stoneStageY=0,this.camera.position.set(0,0,9.8),this.controls&&this.controls.target.set(0,0,0)}initCosmicEnvironment(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.2,"rgba(255, 255, 255, 0.7)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.15)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=n,e.fillRect(0,0,64,64);const i=new ia(t),r=2e3,a=new ge,o=new Float32Array(r*3),l=new Float32Array(r*3);for(let h=0;h<r;h++){const d=38+Math.random()*85,u=Math.random()*Math.PI*2,f=Math.acos(2*Math.random()-1);let _=d*Math.sin(f)*Math.cos(u),g=d*Math.sin(f)*Math.sin(u),m=d*Math.cos(f);Math.hypot(_-this.stoneStageX,g-this.stoneStageY)<4.5&&m<0&&(_+=_>=this.stoneStageX?5:-5,g+=g>=this.stoneStageY?5:-5),o[h*3]=_,o[h*3+1]=g,o[h*3+2]=m;const v=.4+Math.random()*.6;l[h*3]=v,l[h*3+1]=v,l[h*3+2]=v}a.setAttribute("position",new Xe(o,3)),a.setAttribute("color",new Xe(l,3));const c=new Qo({size:.35,map:i,vertexColors:!0,transparent:!0,opacity:.8,blending:Ue,depthWrite:!1});this.starfield=new xu(a,c),this.scene.add(this.starfield)}initStones(){this.stonesContainer=new Pn,this.scene.add(this.stonesContainer),Be.forEach((t,e)=>{const n=Tv(t);n.group.position.set(this.stoneStageX,this.stoneStageY,0),e!==0?(n.group.scale.set(.001,.001,.001),n.group.visible=!1):(n.group.scale.set(1,1,1),n.group.visible=!0),this.stonesContainer.add(n.group),this.stones.push(n)})}initPostProcessing(){this.composer=new X0(this.renderer);const t=new q0(this.scene,this.camera);this.composer.addPass(t),this.bloomPass=new Er(new xt(window.innerWidth,window.innerHeight),.55,.45,.72),this.composer.addPass(this.bloomPass);const e=new $0;this.composer.addPass(e)}initControls(){this.controls=new z0(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.maxPolarAngle=Math.PI/2+.25,this.controls.minPolarAngle=Math.PI/2-.25,this.controls.target.set(0,0,0);const t=new O0,e=new xt;let n={x:0,y:0};this.renderer.domElement.addEventListener("pointerdown",i=>{n={x:i.clientX,y:i.clientY}}),this.renderer.domElement.addEventListener("pointerup",i=>{if(Math.hypot(i.clientX-n.x,i.clientY-n.y)<6&&!this.isConvergenceActive){e.x=i.clientX/window.innerWidth*2-1,e.y=-(i.clientY/window.innerHeight)*2+1,t.setFromCamera(e,this.camera);const a=this.stones[this.currentIndex];a&&t.intersectObjects([a.gemMesh,a.coreMesh],!0).length>0&&this.pulseCurrentStone()}})}initUI(){const t=document.getElementById("pager-list");t.innerHTML="",Be.forEach((e,n)=>{const i=document.createElement("button");i.className=`pager-item ${n===0?"active":""}`,i.setAttribute("data-index",n);const r=e.colorThree>>16&255,a=e.colorThree>>8&255,o=e.colorThree&255;i.setAttribute("style",`
        --item-color: ${e.colorHex};
        --item-rgb: ${r}, ${a}, ${o};
      `),i.setAttribute("aria-label",`Navigate to ${e.name}`);const l=e.name.replace(" STONE",""),c=n===0?21:0,h=n===Be.length-1?21:42;i.innerHTML=`
        <span class="pager-track-node">
          <svg class="pager-node-svg" width="24" height="42" viewBox="0 0 24 42" aria-hidden="true">
            <!-- Background laser guide line -->
            <line class="svg-track-line" x1="12" y1="${c}" x2="12" y2="${h}" />
            <!-- Active laser beam segments -->
            ${n>0?'<line class="svg-laser-top" x1="12" y1="0" x2="12" y2="21" />':""}
            ${n<Be.length-1?'<line class="svg-laser-bot" x1="12" y1="21" x2="12" y2="42" />':""}
            <!-- Concentric rings: identically centered at (12, 21) -->
            <circle class="svg-pip-halo" cx="12" cy="21" r="8.5" />
            <circle class="svg-pip-ring" cx="12" cy="21" r="4.5" />
            <circle class="svg-pip-core" cx="12" cy="21" r="1.8" />
          </svg>
        </span>
        <span class="pager-name-tag">${l}</span>
      `,i.addEventListener("click",()=>{this.isConvergenceActive&&this.endConvergence(),n!==this.currentIndex&&(Kt.playStoneChime(e.id),this.displayStone(n,!0))}),t.appendChild(i)}),this.initTechText()}initTechText(){const t=document.getElementById("stone-tech-text-container");if(!t)return;const e=Be[this.currentIndex]||Be[0];this.techText=new Pv(t,{text:e.name,fontFamily:"'Syne', sans-serif",fontWeight:800,fontSize:42,letterSpacing:.04,color:"#ffffff",accentColor:e.colorHex,reveal:"letter",lineStyle:"dashed",dashLength:4,dashGap:2,strokeWidth:1.5,specks:12,selection:!0,labels:!0,draggable:!0,sweep:!0,speed:.9})}initTimeline(){const t=document.getElementById("timeline-cards-list"),e=document.querySelectorAll(".filter-pill");if(!t)return;const n=(a="all")=>{t.innerHTML="",wv.filter(l=>a==="all"||l.stone===a||l.stone==="all").forEach((l,c)=>{const h=document.createElement("div"),d=c%2===0;h.className=`timeline-row ${d?"left":"right"}`,h.setAttribute("style",`
          --card-color: ${l.stoneColor};
          --card-rgb: ${l.stoneRgb};
        `),h.innerHTML=`
          <!-- Center Pin on Spine -->
          <div class="timeline-node-pin">
            <div class="timeline-pin-circle"></div>
          </div>

          <!-- Card Content -->
          <article class="t-card" tabindex="0" role="button" aria-label="${l.title}">
            <div class="t-card-header">
              <span class="t-card-date">${l.date} // ${l.era}</span>
              <span class="t-card-badge">${l.stoneName}</span>
            </div>
            <h3 class="t-card-title">${l.title}</h3>
            <div class="t-card-meta">
              <span class="t-meta-chip"><strong>LOCUS:</strong> ${l.location}</span>
              <span class="t-meta-chip"><strong>VESSEL:</strong> ${l.vessel}</span>
              <span class="t-meta-chip"><strong>WIELDER:</strong> ${l.wielders}</span>
            </div>
            <p class="t-card-desc">${l.desc}</p>
          </article>
        `;const u=h.querySelector(".t-card");u.addEventListener("click",()=>{l.stone!=="all"?Kt.playStoneChime(l.stone):Kt.playChime(528),$t.fromTo(u,{scale:.98},{scale:1,duration:.35,ease:"back.out(2)"})}),t.appendChild(h)})};e.forEach(a=>{a.addEventListener("click",()=>{Kt.playClick(),e.forEach(l=>l.classList.remove("active")),a.classList.add("active");const o=a.getAttribute("data-stone");n(o)})}),n("all");const i=document.getElementById("btn-timeline");i&&i.addEventListener("click",()=>{Kt.playClick(),this.unlockTimeline(!0)});const r=document.getElementById("btn-back-to-stones");r&&r.addEventListener("click",()=>{Kt.playClick(),this.lockTimeline()})}unlockTimeline(t=!0,e="sponsors-section"){document.body.classList.contains("timeline-unlocked")||(document.body.classList.add("timeline-unlocked"),Kt.playChime(660)),t&&setTimeout(()=>{const n=document.getElementById(e)||document.getElementById("sponsors-section")||document.getElementById("timeline-section");if(n){const i=n.offsetTop||window.innerHeight;window.scrollTo({top:i,behavior:"smooth"})}},50)}lockTimeline(){window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{document.body.classList.remove("timeline-unlocked")},550)}initScrollAndGestures(){window.addEventListener("wheel",n=>{if(document.body.classList.contains("timeline-unlocked")&&window.scrollY>40)return;const i=Date.now();i-this.lastScrollTime<this.scrollCooldown||Math.abs(n.deltaY)>18&&(this.lastScrollTime=i,this.isConvergenceActive&&this.endConvergence(),n.deltaY>0?this.stepStone(1):n.deltaY<0&&(document.body.classList.contains("timeline-unlocked")&&window.scrollY<=10?this.lockTimeline():this.stepStone(-1)))},{passive:!0});let t=0;window.addEventListener("touchstart",n=>{t=n.touches[0].clientY},{passive:!0}),window.addEventListener("touchend",n=>{if(document.body.classList.contains("timeline-unlocked")&&window.scrollY>40)return;const i=n.changedTouches[0].clientY,r=t-i,a=Date.now();a-this.lastScrollTime<this.scrollCooldown||Math.abs(r)>40&&(this.lastScrollTime=a,this.isConvergenceActive&&this.endConvergence(),r>0?this.stepStone(1):r<0&&(document.body.classList.contains("timeline-unlocked")&&window.scrollY<=10?this.lockTimeline():this.stepStone(-1)))},{passive:!0});const e=document.getElementById("scroll-btn");e&&e.addEventListener("click",()=>{Kt.playClick(),this.isConvergenceActive&&this.endConvergence(),this.currentIndex===Be.length-1?this.unlockTimeline(!0):this.stepStone(1)})}stepStone(t){this.isConvergenceActive&&this.endConvergence();const e=Be.length;if(this.currentIndex===e-1&&t>0){this.unlockTimeline(!0);return}let n=this.currentIndex+t;n>=e&&(n=0),n<0&&(n=e-1),Kt.playStoneChime(Be[n].id),this.displayStone(n,!0)}displayStone(t,e=!0){if(this.isTransitioning&&e)return;this.isTransitioning=!0;const n=this.currentIndex;this.currentIndex=t;const i=Be[t];document.documentElement.style.setProperty("--active-stone-color",i.colorHex),document.documentElement.style.setProperty("--active-stone-glow",i.colorHex+"55");const r=new bt(i.colorHex),a=Math.round(r.r*255),o=Math.round(r.g*255),l=Math.round(r.b*255);document.documentElement.style.setProperty("--active-stone-rgb",`${a}, ${o}, ${l}`),$t.to(this.stageLight.color,{r:new bt(i.colorThree).r,g:new bt(i.colorThree).g,b:new bt(i.colorThree).b,duration:.8}),document.querySelectorAll(".pager-item").forEach((u,f)=>{u.classList.toggle("active",f===t),u.classList.toggle("passed",f<t)}),document.getElementById("stage-roman").textContent=i.roman;const h=document.getElementById("scroll-label");h&&(h.textContent=t===Be.length-1?"EXPLORE SPONSORS & TIMELINE ↓":"SCROLL TO DISCOVER");const d=document.getElementById("info-card");if(e&&d.classList.add("animating"),setTimeout(()=>{this.renderCardContent(i),e&&d.classList.remove("animating")},e?150:0),$t.to(this.camera.position,{x:0,y:0,z:9.8,duration:.7,ease:"power2.out"}),this.stageLight){const u=new bt(i.coreColor);$t.to(this.stageLight.color,{r:u.r,g:u.g,b:u.b,duration:.6})}if(e){const u=this.stones[n],f=this.stones[t];$t.to(this.bloomPass,{strength:.65,duration:.35,yoyo:!0,repeat:1,ease:"power2.out"}),u&&n!==t&&$t.to(u.group.scale,{x:.001,y:.001,z:.001,duration:.55,ease:"back.in(1.4)",onComplete:()=>{u.group.visible=!1}}),this.stones.forEach((_,g)=>{g!==t&&g!==n&&($t.killTweensOf(_.group.scale),$t.killTweensOf(_.group.position),_.group.scale.set(.001,.001,.001),_.group.position.set(0,0,0),_.group.visible=!1)}),f.group.visible=!0,f.group.position.set(0,0,0),f.group.rotation.y+=Math.PI*.5,$t.fromTo(f.group.scale,{x:.1,y:.1,z:.1},{x:1,y:1,z:1,duration:.85,ease:"elastic.out(1, 0.75)",delay:.2,onComplete:()=>{this.isTransitioning=!1,this.stones.forEach((_,g)=>{g!==t&&(_.group.visible=!1,_.group.scale.set(.001,.001,.001))})}})}else this.stones.forEach((u,f)=>{u.group.visible=f===t,u.group.position.set(0,0,0),u.group.scale.set(f===t?1:.001,f===t?1:.001,f===t?1:.001)}),this.isTransitioning=!1}renderCardContent(t){const e=document.getElementById("card-index-tag");e&&(e.textContent=`${t.index} / 06`);const n=document.getElementById("card-marvel-theme");n&&(n.textContent=(t.marvelTheme||"SINGULARITY").toUpperCase());const i=document.getElementById("card-title");i&&(i.textContent=t.name),this.techText&&this.techText.update({text:t.name,accentColor:t.colorHex});const r=document.getElementById("stone-tech-text-container");r&&r.setAttribute("aria-label",t.name);const a=document.getElementById("card-domain");a&&(a.textContent=`${t.domain} // ${t.domainTagline||""}`);const o=document.getElementById("card-desc");o&&(o.textContent=t.description);const l=document.getElementById("btn-wield-stone");l&&(l.setAttribute("data-stone-id",t.id),l.style.setProperty("--btn-glow",t.colorHex))}triggerConvergence(){if(this.isConvergenceActive)return;this.isConvergenceActive=!0,document.body.classList.add("convergence-mode");const t=document.getElementById("btn-convergence");t&&t.classList.add("active"),Kt.playConvergenceChord(),$t.to(this.camera.position,{x:0,y:.5,z:14,duration:1.8,ease:"power2.inOut"}),$t.to(this.controls.target,{x:0,y:0,z:0,duration:1.8,ease:"power2.inOut",onUpdate:()=>this.controls.update()});const e=3.6;this.stones.forEach((n,i)=>{n.group.visible=!0,n.group.position.set(0,0,0),n.group.scale.set(.1,.1,.1);const r=i/this.stones.length*Math.PI*2,a=Math.cos(r)*e,o=Math.sin(r)*e;$t.to(n.group.position,{x:a,y:o,z:0,duration:1.6,ease:"elastic.out(1, 0.75)"}),$t.to(n.group.scale,{x:.75,y:.75,z:.75,duration:1.2}),$t.to(n.pointLight,{intensity:2.2,duration:1,yoyo:!0,repeat:1})}),$t.killTweensOf(this.stonesContainer.rotation),$t.to(this.stonesContainer.rotation,{z:this.stonesContainer.rotation.z+Math.PI*2,duration:3.5,ease:"power2.inOut",onComplete:()=>{this.endConvergence()}})}endConvergence(){if(!this.isConvergenceActive)return;this.isConvergenceActive=!1,document.body.classList.remove("convergence-mode");const t=document.getElementById("btn-convergence");t&&t.classList.remove("active"),$t.to(this.stonesContainer.rotation,{x:0,y:0,z:0,duration:1,ease:"power2.out"}),$t.to(this.camera.position,{x:0,y:0,z:9.8,duration:1.3,ease:"power3.out"}),$t.to(this.controls.target,{x:0,y:0,z:0,duration:1.3,ease:"power3.out",onUpdate:()=>this.controls.update()}),this.stones.forEach((e,n)=>{$t.killTweensOf(e.group.position),$t.killTweensOf(e.group.scale),$t.killTweensOf(e.pointLight),n===this.currentIndex?(e.group.visible=!0,e.pointLight.intensity=1.8,$t.to(e.group.position,{x:0,y:0,z:0,duration:1,ease:"power3.out"}),$t.to(e.group.scale,{x:1,y:1,z:1,duration:1,ease:"power3.out"})):($t.to(e.group.position,{x:0,y:0,z:0,duration:.8,ease:"power2.in"}),$t.to(e.group.scale,{x:.001,y:.001,z:.001,duration:.8,ease:"power2.in",onComplete:()=>{e.group.visible=!1}}))})}pulseCurrentStone(){const t=this.stones[this.currentIndex];t&&(Kt.playEnergyPulse(),t.gemMat&&$t.to(t.gemMat,{emissiveIntensity:1.15,duration:.25,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{t.gemMat.emissiveIntensity=.18}}),$t.to(t.pointLight,{intensity:3.8,duration:.25,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{t.pointLight.intensity=1.8}}),$t.to(t.coreMesh.scale,{x:1.4,y:1.4,z:1.4,duration:.35,yoyo:!0,repeat:1,ease:"power2.out"}),t.wireMesh&&t.wireMesh.material&&$t.to(t.wireMesh.material,{opacity:.9,duration:.25,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{t.wireMesh.material.opacity=.45}}),$t.to(this.bloomPass,{strength:.95,duration:.3,yoyo:!0,repeat:1,ease:"power2.out"}))}toggleWireframe(){this.isWireframe=!this.isWireframe,this.stones.forEach(e=>{e.gemMat.wireframe=this.isWireframe,e.wireMesh.visible=!this.isWireframe}),document.getElementById("btn-wireframe").classList.toggle("active",this.isWireframe),Kt.playClick()}initEventListeners(){window.addEventListener("resize",()=>{const r=window.innerWidth,a=window.innerHeight;this.camera.aspect=r/a,this.camera.updateProjectionMatrix(),this.renderer.setSize(r,a),this.composer.setSize(r,a),this.updateCameraForViewport(),this.controls.target.set(this.stoneStageX,this.stoneStageY,0)});const t=document.getElementById("btn-audio");t&&(t.addEventListener("click",()=>{const r=Kt.toggleMute();t.classList.toggle("audio-unmuted",r),t.classList.toggle("audio-muted",!r),t.classList.toggle("active",r)}),t.classList.add("audio-muted")),document.getElementById("btn-wireframe").addEventListener("click",()=>{this.toggleWireframe()}),document.getElementById("btn-convergence").addEventListener("click",()=>{this.isConvergenceActive?this.endConvergence():this.triggerConvergence()});const e=document.getElementById("btn-pulse");e&&e.addEventListener("click",()=>{this.pulseCurrentStone()});const n=document.getElementById("btn-sound-play");n&&n.addEventListener("click",()=>{Kt.playStoneChime(Be[this.currentIndex].id)}),window.addEventListener("keydown",r=>{if(r.target.tagName==="INPUT"||r.target.tagName==="TEXTAREA")return;const a=r.key.toUpperCase();if(a>="1"&&a<="6"){const o=parseInt(a,10)-1;Kt.playStoneChime(Be[o].id),this.displayStone(o,!0)}else r.code==="ArrowDown"||r.code==="PageDown"?(r.preventDefault(),this.stepStone(1)):r.code==="ArrowUp"||r.code==="PageUp"?(r.preventDefault(),this.stepStone(-1)):r.code==="Space"?(r.preventDefault(),this.isConvergenceActive?this.endConvergence():this.triggerConvergence()):r.code==="Escape"?this.isConvergenceActive&&this.endConvergence():a==="P"||a==="S"?this.pulseCurrentStone():a==="W"?this.toggleWireframe():a==="M"&&t&&t.click()});const i=()=>{Kt.init(),window.removeEventListener("pointerdown",i),window.removeEventListener("keydown",i)};window.addEventListener("pointerdown",i,{once:!0}),window.addEventListener("keydown",i,{once:!0})}animate(){requestAnimationFrame(()=>this.animate());const t=this.clock.getDelta(),e=this.clock.getElapsedTime();this.starfield&&(this.starfield.rotation.y=e*.006),this.stones.forEach((n,i)=>{n.group.visible&&(n.update(e,t),this.isConvergenceActive||(n.group.position.y=this.stoneStageY+Math.sin(e*2.8)*.16))}),this.controls.update(),this.composer.render()}}window.addEventListener("DOMContentLoaded",()=>{new Lv});
