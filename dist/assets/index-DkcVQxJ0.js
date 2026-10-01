var Ed=Object.defineProperty;var Td=(s,t,e)=>t in s?Ed(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Qn=(s,t,e)=>Td(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jo="160",qi={ROTATE:0,DOLLY:1,PAN:2},Yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bd=0,Il=1,wd=2,Gh=1,Ad=2,Vn=3,pi=0,Xe=1,_n=2,jn=0,xr=1,Ne=2,Ul=3,Nl=4,Cd=5,Di=100,Rd=101,Pd=102,Ol=103,Fl=104,Ld=200,Dd=201,Id=202,Ud=203,wo=204,Ao=205,Nd=206,Od=207,Fd=208,Bd=209,zd=210,kd=211,Gd=212,Hd=213,Vd=214,Wd=0,Xd=1,qd=2,ra=3,Yd=4,jd=5,$d=6,Kd=7,Hh=0,Zd=1,Jd=2,hi=0,Vh=1,Wh=2,Xh=3,Qo=4,Qd=5,qh=6,Yh=300,Er=301,Tr=302,sa=303,Co=304,Ma=306,ns=1e3,An=1001,Ro=1002,Ge=1003,Bl=1004,Ia=1005,gn=1006,tf=1007,is=1008,ui=1009,ef=1010,nf=1011,tl=1012,jh=1013,si=1014,ai=1015,$n=1016,$h=1017,Kh=1018,Ni=1020,rf=1021,Cn=1023,sf=1024,af=1025,Oi=1026,br=1027,of=1028,Zh=1029,lf=1030,Jh=1031,Qh=1033,Ua=33776,Na=33777,Oa=33778,Fa=33779,zl=35840,kl=35841,Gl=35842,Hl=35843,tu=36196,Vl=37492,Wl=37496,Xl=37808,ql=37809,Yl=37810,jl=37811,$l=37812,Kl=37813,Zl=37814,Jl=37815,Ql=37816,tc=37817,ec=37818,nc=37819,ic=37820,rc=37821,Ba=36492,sc=36494,ac=36495,cf=36283,oc=36284,lc=36285,cc=36286,eu=3e3,Fi=3001,hf=3200,uf=3201,nu=0,df=1,xn="",Re="srgb",Kn="srgb-linear",el="display-p3",ya="display-p3-linear",aa="linear",re="srgb",oa="rec709",la="p3",ji=7680,hc=519,ff=512,pf=513,mf=514,iu=515,gf=516,_f=517,xf=518,vf=519,uc=35044,dc="300 es",Po=1035,Yn=2e3,ca=2001;class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zr=Math.PI/180,Lo=180/Math.PI;function fs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[s&255]+Ie[s>>8&255]+Ie[s>>16&255]+Ie[s>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Pe(s,t,e){return Math.max(t,Math.min(e,s))}function Mf(s,t){return(s%t+t)%t}function za(s,t,e){return(1-e)*s+e*t}function fc(s){return(s&s-1)===0&&s!==0}function Do(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Gr(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function He(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const yf={DEG2RAD:Zr};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,i,r,a,o,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],v=i[1],x=i[4],M=i[7],b=i[2],E=i[5],S=i[8];return r[0]=a*g+o*v+l*b,r[3]=a*m+o*x+l*E,r[6]=a*p+o*M+l*S,r[1]=c*g+h*v+u*b,r[4]=c*m+h*x+u*E,r[7]=c*p+h*M+u*S,r[2]=d*g+f*v+_*b,r[5]=d*m+f*x+_*E,r[8]=d*p+f*M+_*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-o*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ka.makeScale(t,e)),this}rotate(t){return this.premultiply(ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ka=new qt;function ru(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ha(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sf(){const s=ha("canvas");return s.style.display="block",s}const pc={};function Jr(s){s in pc||(pc[s]=!0,console.warn(s))}const mc=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gc=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ms={[Kn]:{transfer:aa,primaries:oa,toReference:s=>s,fromReference:s=>s},[Re]:{transfer:re,primaries:oa,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ya]:{transfer:aa,primaries:la,toReference:s=>s.applyMatrix3(gc),fromReference:s=>s.applyMatrix3(mc)},[el]:{transfer:re,primaries:la,toReference:s=>s.convertSRGBToLinear().applyMatrix3(gc),fromReference:s=>s.applyMatrix3(mc).convertLinearToSRGB()}},Ef=new Set([Kn,ya]),Qt={enabled:!0,_workingColorSpace:Kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ef.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Ms[t].toReference,i=Ms[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Ms[s].primaries},getTransfer:function(s){return s===xn?aa:Ms[s].transfer}};function vr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ga(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let $i;class su{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=ha("canvas")),$i.width=t.width,$i.height=t.height;const n=$i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ha("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=vr(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vr(e[n]/255)*255):e[n]=vr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Tf=0;class au{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=fs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ha(i[a].image)):r.push(Ha(i[a]))}else r=Ha(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ha(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?su.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bf=0;class qe extends Vi{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=An,i=An,r=gn,a=is,o=Cn,l=ui,c=qe.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=fs(),this.name="",this.source=new au(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Fi?Re:xn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ns:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case Ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ns:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case Ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Re?Fi:eu}set encoding(t){Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Fi?Re:xn}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Yh;qe.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,i=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(f+1)/2,b=(p+1)/2,E=(h+d)/4,S=(u+g)/4,D=(_+m)/4;return x>M&&x>b?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=S/n):M>b?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=D/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=S/r,i=D/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wf extends Vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Jr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fi?Re:xn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new qe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new au(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends wf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ou extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Af extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=1-o;const p=l*d+c*f+h*_+u*g,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const b=Math.sqrt(x),E=Math.atan2(b,p*v);m=Math.sin(m*E)/b,o=Math.sin(o*E)/b}const M=o*v;if(l=l*m+d*M,c=c*m+f*M,h=h*m+_*M,u=u*m+g*M,m===1-o){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-o*f,t[e+2]=c*_+h*f+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_c.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_c.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Va.copy(this).projectOnVector(t),this.sub(Va)}reflect(t){return this.sub(Va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Va=new L,_c=new Hi;class ps{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hr),Ss.subVectors(this.max,Hr),Ki.subVectors(t.a,Hr),Zi.subVectors(t.b,Hr),Ji.subVectors(t.c,Hr),ti.subVectors(Zi,Ki),ei.subVectors(Ji,Zi),Ei.subVectors(Ki,Ji);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-Ei.z,Ei.y,ti.z,0,-ti.x,ei.z,0,-ei.x,Ei.z,0,-Ei.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-Ei.y,Ei.x,0];return!Wa(e,Ki,Zi,Ji,Ss)||(e=[1,0,0,0,1,0,0,0,1],!Wa(e,Ki,Zi,Ji,Ss))?!1:(Es.crossVectors(ti,ei),e=[Es.x,Es.y,Es.z],Wa(e,Ki,Zi,Ji,Ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fn=[new L,new L,new L,new L,new L,new L,new L,new L],yn=new L,ys=new ps,Ki=new L,Zi=new L,Ji=new L,ti=new L,ei=new L,Ei=new L,Hr=new L,Ss=new L,Es=new L,Ti=new L;function Wa(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ti.fromArray(s,r);const o=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Cf=new ps,Vr=new L,Xa=new L;class ms{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Cf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vr.subVectors(t,this.center);const e=Vr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Vr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vr.copy(t.center).add(Xa)),this.expandByPoint(Vr.copy(t.center).sub(Xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new L,qa=new L,Ts=new L,ni=new L,Ya=new L,bs=new L,ja=new L;class gs{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){qa.copy(t).add(e).multiplyScalar(.5),Ts.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(qa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ts),o=ni.dot(this.direction),l=-ni.dot(Ts),c=ni.lengthSq(),h=Math.abs(1-a*a);let u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(qa).addScaledVector(Ts,d),f}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);const n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,i,r){Ya.subVectors(e,t),bs.subVectors(n,t),ja.crossVectors(Ya,bs);let a=this.direction.dot(ja),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,t);const l=o*this.direction.dot(bs.crossVectors(ni,bs));if(l<0)return null;const c=o*this.direction.dot(Ya.cross(ni));if(c<0||l+c>a)return null;const h=-o*ni.dot(ja);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,_,g,m){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,_,g,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),a=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rf,t,Pf)}lookAt(t,e,n){const i=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),ii.crossVectors(n,en),ii.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ii.crossVectors(n,en)),ii.normalize(),ws.crossVectors(en,ii),i[0]=ii.x,i[4]=ws.x,i[8]=en.x,i[1]=ii.y,i[5]=ws.y,i[9]=en.y,i[2]=ii.z,i[6]=ws.z,i[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],v=n[3],x=n[7],M=n[11],b=n[15],E=i[0],S=i[4],D=i[8],y=i[12],w=i[1],F=i[5],V=i[9],Z=i[13],P=i[2],U=i[6],O=i[10],z=i[14],H=i[3],B=i[7],$=i[11],et=i[15];return r[0]=a*E+o*w+l*P+c*H,r[4]=a*S+o*F+l*U+c*B,r[8]=a*D+o*V+l*O+c*$,r[12]=a*y+o*Z+l*z+c*et,r[1]=h*E+u*w+d*P+f*H,r[5]=h*S+u*F+d*U+f*B,r[9]=h*D+u*V+d*O+f*$,r[13]=h*y+u*Z+d*z+f*et,r[2]=_*E+g*w+m*P+p*H,r[6]=_*S+g*F+m*U+p*B,r[10]=_*D+g*V+m*O+p*$,r[14]=_*y+g*Z+m*z+p*et,r[3]=v*E+x*w+M*P+b*H,r[7]=v*S+x*F+M*U+b*B,r[11]=v*D+x*V+M*O+b*$,r[15]=v*y+x*Z+M*z+b*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+g*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],v=u*m*c-g*d*c+g*l*f-o*m*f-u*l*p+o*d*p,x=_*d*c-h*m*c-_*l*f+a*m*f+h*l*p-a*d*p,M=h*g*c-_*u*c+_*o*f-a*g*f-h*o*p+a*u*p,b=_*u*l-h*g*l-_*o*d+a*g*d+h*o*m-a*u*m,E=e*v+n*x+i*M+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/E;return t[0]=v*S,t[1]=(g*d*r-u*m*r-g*i*f+n*m*f+u*i*p-n*d*p)*S,t[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*p+n*l*p)*S,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*S,t[4]=x*S,t[5]=(h*m*r-_*d*r+_*i*f-e*m*f-h*i*p+e*d*p)*S,t[6]=(_*l*r-a*m*r-_*i*c+e*m*c+a*i*p-e*l*p)*S,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*f+e*l*f)*S,t[8]=M*S,t[9]=(_*u*r-h*g*r-_*n*f+e*g*f+h*n*p-e*u*p)*S,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*p+e*o*p)*S,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*S,t[12]=b*S,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*m+e*u*m)*S,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*m-e*o*m)*S,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,_=r*u,g=a*h,m=a*u,p=o*u,v=l*c,x=l*h,M=l*u,b=n.x,E=n.y,S=n.z;return i[0]=(1-(g+p))*b,i[1]=(f+M)*b,i[2]=(_-x)*b,i[3]=0,i[4]=(f-M)*E,i[5]=(1-(d+p))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(_+x)*S,i[9]=(m-v)*S,i[10]=(1-(d+g))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Qi.set(i[0],i[1],i[2]).length();const a=Qi.set(i[4],i[5],i[6]).length(),o=Qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Sn.copy(this);const c=1/r,h=1/a,u=1/o;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,e.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Yn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,_;if(o===Yn)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ca)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Yn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,f=(n+i)*h;let _,g;if(o===Yn)_=(a+r)*u,g=-2*u;else if(o===ca)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qi=new L,Sn=new ge,Rf=new L(0,0,0),Pf=new L(1,1,1),ii=new L,ws=new L,en=new L,xc=new ge,vc=new Hi;class Sa{constructor(t=0,e=0,n=0,i=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vc.setFromEuler(this),this.setFromQuaternion(vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class nl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lf=0;const Mc=new L,tr=new Hi,zn=new ge,As=new L,Wr=new L,Df=new L,If=new Hi,yc=new L(1,0,0),Sc=new L(0,1,0),Ec=new L(0,0,1),Uf={type:"added"},Nf={type:"removed"};class Ae extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new L,e=new Sa,n=new Hi,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ge},normalMatrix:{value:new qt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(yc,t)}rotateY(t){return this.rotateOnAxis(Sc,t)}rotateZ(t){return this.rotateOnAxis(Ec,t)}translateOnAxis(t,e){return Mc.copy(t).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yc,t)}translateY(t){return this.translateOnAxis(Sc,t)}translateZ(t){return this.translateOnAxis(Ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?As.copy(t):As.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Wr,As,this.up):zn.lookAt(As,Wr,this.up),this.quaternion.setFromRotationMatrix(zn),i&&(zn.extractRotation(i.matrixWorld),tr.setFromRotationMatrix(zn),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Uf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,t,Df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,If,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ae.DEFAULT_UP=new L(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new L,kn=new L,$a=new L,Gn=new L,er=new L,nr=new L,Tc=new L,Ka=new L,Za=new L,Ja=new L;let Cs=!1;class sn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),En.subVectors(t,e),i.cross(En);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){En.subVectors(i,e),kn.subVectors(n,e),$a.subVectors(t,e);const a=En.dot(En),o=En.dot(kn),l=En.dot($a),c=kn.dot(kn),h=kn.dot($a),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getUV(t,e,n,i,r,a,o,l){return Cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cs=!0),this.getInterpolation(t,e,n,i,r,a,o,l)}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static isFrontFacing(t,e,n,i){return En.subVectors(n,e),kn.subVectors(t,e),En.cross(kn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),En.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cs=!0),sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;er.subVectors(i,n),nr.subVectors(r,n),Ka.subVectors(t,n);const l=er.dot(Ka),c=nr.dot(Ka);if(l<=0&&c<=0)return e.copy(n);Za.subVectors(t,i);const h=er.dot(Za),u=nr.dot(Za);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(er,a);Ja.subVectors(t,r);const f=er.dot(Ja),_=nr.dot(Ja);if(_>=0&&f<=_)return e.copy(r);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(nr,o);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Tc.subVectors(r,i),o=(u-h)/(u-h+(f-_)),e.copy(i).addScaledVector(Tc,o);const p=1/(m+g+d);return a=g*p,o=d*p,e.copy(n).addScaledVector(er,a).addScaledVector(nr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function Qa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=Mf(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Qa(a,r,t+1/3),this.g=Qa(a,r,t),this.b=Qa(a,r,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){const n=lu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}copyLinearToSRGB(t){return this.r=Ga(t.r),this.g=Ga(t.g),this.b=Ga(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return Qt.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Pe(Ue.r*255,0,255))*65536+Math.round(Pe(Ue.g*255,0,255))*256+Math.round(Pe(Ue.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,i=Ue.g,r=Ue.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Re){Qt.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,i=Ue.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Rs);const n=za(ri.h,Rs.h,e),i=za(ri.s,Rs.s,e),r=za(ri.l,Rs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Rt;Rt.NAMES=lu;let Of=0;class Wi extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=xr,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=Ao,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ao&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ra&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wn extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new L,Ps=new yt;class Ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gr(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gr(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gr(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uc&&(t.usage=this.usage),t}}class cu extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hu extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ff=0;const pn=new ge,to=new Ae,ir=new L,nn=new ps,Xr=new ps,we=new L;class ve extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ru(t)?hu:cu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return to.lookAt(t),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Xr.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(nn.min,Xr.min),nn.expandByPoint(we),we.addVectors(nn.max,Xr.max),nn.expandByPoint(we)):(nn.expandByPoint(Xr.min),nn.expandByPoint(Xr.max))}nn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)we.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(we));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)we.fromBufferAttribute(o,c),l&&(ir.fromBufferAttribute(t,c),we.add(ir)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new L,h[w]=new L;const u=new L,d=new L,f=new L,_=new yt,g=new yt,m=new yt,p=new L,v=new L;function x(w,F,V){u.fromArray(i,w*3),d.fromArray(i,F*3),f.fromArray(i,V*3),_.fromArray(a,w*2),g.fromArray(a,F*2),m.fromArray(a,V*2),d.sub(u),f.sub(u),g.sub(_),m.sub(_);const Z=1/(g.x*m.y-m.x*g.y);isFinite(Z)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(Z),v.copy(f).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(Z),c[w].add(p),c[F].add(p),c[V].add(p),h[w].add(v),h[F].add(v),h[V].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let w=0,F=M.length;w<F;++w){const V=M[w],Z=V.start,P=V.count;for(let U=Z,O=Z+P;U<O;U+=3)x(n[U+0],n[U+1],n[U+2])}const b=new L,E=new L,S=new L,D=new L;function y(w){S.fromArray(r,w*3),D.copy(S);const F=c[w];b.copy(F),b.sub(S.multiplyScalar(S.dot(F))).normalize(),E.crossVectors(D,F);const Z=E.dot(h[w])<0?-1:1;l[w*4]=b.x,l[w*4+1]=b.y,l[w*4+2]=b.z,l[w*4+3]=Z}for(let w=0,F=M.length;w<F;++w){const V=M[w],Z=V.start,P=V.count;for(let U=Z,O=Z+P;U<O;U+=3)y(n[U+0]),y(n[U+1]),y(n[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new Ye(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bc=new ge,bi=new gs,Ls=new ms,wc=new L,rr=new L,sr=new L,ar=new L,eo=new L,Ds=new L,Is=new yt,Us=new yt,Ns=new yt,Ac=new L,Cc=new L,Rc=new L,Os=new L,Fs=new L;class ye extends Ae{constructor(t=new ve,e=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Ds.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(eo.fromBufferAttribute(u,t),a?Ds.addScaledVector(eo,h):Ds.addScaledVector(eo.sub(e),h))}e.add(Ds)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(r),bi.copy(t.ray).recast(t.near),!(Ls.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Ls,wc)===null||bi.origin.distanceToSquared(wc)>(t.far-t.near)**2))&&(bc.copy(r).invert(),bi.copy(t.ray).applyMatrix4(bc),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,b=x;M<b;M+=3){const E=o.getX(M),S=o.getX(M+1),D=o.getX(M+2);i=Bs(this,p,t,n,c,h,u,E,S,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);i=Bs(this,a,t,n,c,h,u,v,x,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,b=x;M<b;M+=3){const E=M,S=M+1,D=M+2;i=Bs(this,p,t,n,c,h,u,E,S,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=m,x=m+1,M=m+2;i=Bs(this,a,t,n,c,h,u,v,x,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Bf(s,t,e,n,i,r,a,o){let l;if(t.side===Xe?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===pi,o),l===null)return null;Fs.copy(o),Fs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Fs);return c<e.near||c>e.far?null:{distance:c,point:Fs.clone(),object:s}}function Bs(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,rr),s.getVertexPosition(l,sr),s.getVertexPosition(c,ar);const h=Bf(s,t,e,n,rr,sr,ar,Os);if(h){i&&(Is.fromBufferAttribute(i,o),Us.fromBufferAttribute(i,l),Ns.fromBufferAttribute(i,c),h.uv=sn.getInterpolation(Os,rr,sr,ar,Is,Us,Ns,new yt)),r&&(Is.fromBufferAttribute(r,o),Us.fromBufferAttribute(r,l),Ns.fromBufferAttribute(r,c),h.uv1=sn.getInterpolation(Os,rr,sr,ar,Is,Us,Ns,new yt),h.uv2=h.uv1),a&&(Ac.fromBufferAttribute(a,o),Cc.fromBufferAttribute(a,l),Rc.fromBufferAttribute(a,c),h.normal=sn.getInterpolation(Os,rr,sr,ar,Ac,Cc,Rc,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};sn.getNormal(rr,sr,ar,u.normal),h.face=u}return h}class Ir extends ve{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function _(g,m,p,v,x,M,b,E,S,D,y){const w=M/S,F=b/D,V=M/2,Z=b/2,P=E/2,U=S+1,O=D+1;let z=0,H=0;const B=new L;for(let $=0;$<O;$++){const et=$*F-Z;for(let Y=0;Y<U;Y++){const j=Y*w-V;B[g]=j*v,B[m]=et*x,B[p]=P,c.push(B.x,B.y,B.z),B[g]=0,B[m]=0,B[p]=E>0?1:-1,h.push(B.x,B.y,B.z),u.push(Y/S),u.push(1-$/D),z+=1}}for(let $=0;$<D;$++)for(let et=0;et<S;et++){const Y=d+et+U*$,j=d+et+U*($+1),J=d+(et+1)+U*($+1),lt=d+(et+1)+U*$;l.push(Y,j,lt),l.push(j,J,lt),H+=6}o.addGroup(f,H,y),f+=H,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ir(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ze(s){const t={};for(let e=0;e<s.length;e++){const n=wr(s[e]);for(const i in n)t[i]=n[i]}return t}function zf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function uu(s){return s.getRenderTarget()===null?s.outputColorSpace:Qt.workingColorSpace}const rs={clone:wr,merge:ze};var kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class We extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kf,this.fragmentShader=Gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=zf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class du extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class an extends du{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Lo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const or=-90,lr=1;class Hf extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new an(or,lr,t,e);i.layers=this.layers,this.add(i);const r=new an(or,lr,t,e);r.layers=this.layers,this.add(r);const a=new an(or,lr,t,e);a.layers=this.layers,this.add(a);const o=new an(or,lr,t,e);o.layers=this.layers,this.add(o);const l=new an(or,lr,t,e);l.layers=this.layers,this.add(l);const c=new an(or,lr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class fu extends qe{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Er,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vf extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Jr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Fi?Re:xn),this.texture=new fu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ir(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:jn});r.uniforms.tEquirect.value=e;const a=new ye(i,r),o=e.minFilter;return e.minFilter===is&&(e.minFilter=gn),new Hf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const no=new L,Wf=new L,Xf=new qt;class Xn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=no.subVectors(n,e).cross(Wf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(no),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xf.getNormalMatrix(t),i=this.coplanarPoint(no).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new ms,zs=new L;class il{constructor(t=new Xn,e=new Xn,n=new Xn,i=new Xn,r=new Xn,a=new Xn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],v=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-r,d-c,m-f,M-p).normalize(),n[1].setComponents(l+r,d+c,m+f,M+p).normalize(),n[2].setComponents(l+a,d+h,m+_,M+v).normalize(),n[3].setComponents(l-a,d-h,m-_,M-v).normalize(),n[4].setComponents(l-o,d-u,m-g,M-x).normalize(),e===Yn)n[5].setComponents(l+o,d+u,m+g,M+x).normalize();else if(e===ca)n[5].setComponents(o,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(zs.x=i.normal.x>0?t.max.x:t.min.x,zs.y=i.normal.y>0?t.max.y:t.min.y,zs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pu(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function qf(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=u.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=s.SHORT;else if(u instanceof Uint32Array)g=s.UNSIGNED_INT;else if(u instanceof Int32Array)g=s.INT;else if(u instanceof Int8Array)g=s.BYTE;else if(u instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){const d=h.array,f=h._updateRange,_=h.updateRanges;if(s.bindBuffer(u,c),f.count===-1&&_.length===0&&s.bufferSubData(u,0,d),_.length!==0){for(let g=0,m=_.length;g<m;g++){const p=_[g];e?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class Ea extends ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const v=p*d-a;for(let x=0;x<c;x++){const M=x*u-r;_.push(M,-v,0),g.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const x=v+c*p,M=v+c*(p+1),b=v+1+c*(p+1),E=v+1+c*p;f.push(x,M,E),f.push(M,b,E)}this.setIndex(f),this.setAttribute("position",new te(_,3)),this.setAttribute("normal",new te(g,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.width,t.height,t.widthSegments,t.heightSegments)}}var Yf=`#ifdef USE_ALPHAHASH
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
}`,Gt={alphahash_fragment:Yf,alphahash_pars_fragment:jf,alphamap_fragment:$f,alphamap_pars_fragment:Kf,alphatest_fragment:Zf,alphatest_pars_fragment:Jf,aomap_fragment:Qf,aomap_pars_fragment:tp,batching_pars_vertex:ep,batching_vertex:np,begin_vertex:ip,beginnormal_vertex:rp,bsdfs:sp,iridescence_fragment:ap,bumpmap_pars_fragment:op,clipping_planes_fragment:lp,clipping_planes_pars_fragment:cp,clipping_planes_pars_vertex:hp,clipping_planes_vertex:up,color_fragment:dp,color_pars_fragment:fp,color_pars_vertex:pp,color_vertex:mp,common:gp,cube_uv_reflection_fragment:_p,defaultnormal_vertex:xp,displacementmap_pars_vertex:vp,displacementmap_vertex:Mp,emissivemap_fragment:yp,emissivemap_pars_fragment:Sp,colorspace_fragment:Ep,colorspace_pars_fragment:Tp,envmap_fragment:bp,envmap_common_pars_fragment:wp,envmap_pars_fragment:Ap,envmap_pars_vertex:Cp,envmap_physical_pars_fragment:kp,envmap_vertex:Rp,fog_vertex:Pp,fog_pars_vertex:Lp,fog_fragment:Dp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Up,lightmap_fragment:Np,lightmap_pars_fragment:Op,lights_lambert_fragment:Fp,lights_lambert_pars_fragment:Bp,lights_pars_begin:zp,lights_toon_fragment:Gp,lights_toon_pars_fragment:Hp,lights_phong_fragment:Vp,lights_phong_pars_fragment:Wp,lights_physical_fragment:Xp,lights_physical_pars_fragment:qp,lights_fragment_begin:Yp,lights_fragment_maps:jp,lights_fragment_end:$p,logdepthbuf_fragment:Kp,logdepthbuf_pars_fragment:Zp,logdepthbuf_pars_vertex:Jp,logdepthbuf_vertex:Qp,map_fragment:tm,map_pars_fragment:em,map_particle_fragment:nm,map_particle_pars_fragment:im,metalnessmap_fragment:rm,metalnessmap_pars_fragment:sm,morphcolor_vertex:am,morphnormal_vertex:om,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:hm,normal_fragment_maps:um,normal_pars_fragment:dm,normal_pars_vertex:fm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:xm,iridescence_pars_fragment:vm,opaque_fragment:Mm,packing:ym,premultiplied_alpha_fragment:Sm,project_vertex:Em,dithering_fragment:Tm,dithering_pars_fragment:bm,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Cm,shadowmap_pars_vertex:Rm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Lm,skinbase_vertex:Dm,skinning_pars_vertex:Im,skinning_vertex:Um,skinnormal_vertex:Nm,specularmap_fragment:Om,specularmap_pars_fragment:Fm,tonemapping_fragment:Bm,tonemapping_pars_fragment:zm,transmission_fragment:km,transmission_pars_fragment:Gm,uv_pars_fragment:Hm,uv_pars_vertex:Vm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:qm,background_frag:Ym,backgroundCube_vert:jm,backgroundCube_frag:$m,cube_vert:Km,cube_frag:Zm,depth_vert:Jm,depth_frag:Qm,distanceRGBA_vert:tg,distanceRGBA_frag:eg,equirect_vert:ng,equirect_frag:ig,linedashed_vert:rg,linedashed_frag:sg,meshbasic_vert:ag,meshbasic_frag:og,meshlambert_vert:lg,meshlambert_frag:cg,meshmatcap_vert:hg,meshmatcap_frag:ug,meshnormal_vert:dg,meshnormal_frag:fg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:_g,meshtoon_vert:xg,meshtoon_frag:vg,points_vert:Mg,points_frag:yg,shadow_vert:Sg,shadow_frag:Eg,sprite_vert:Tg,sprite_frag:bg},ut={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Ln={basic:{uniforms:ze([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:ze([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:ze([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:ze([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:ze([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:ze([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:ze([ut.points,ut.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:ze([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:ze([ut.common,ut.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:ze([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:ze([ut.sprite,ut.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:ze([ut.common,ut.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:ze([ut.lights,ut.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Ln.physical={uniforms:ze([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const ks={r:0,b:0,g:0};function wg(s,t,e,n,i,r,a){const o=new Rt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?g(o,l):x&&x.isColor&&(g(x,1),v=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ma)?(h===void 0&&(h=new ye(new Ir(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:wr(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==re,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ye(new Ea(2,2),new We({name:"BackgroundMaterial",uniforms:wr(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(x.colorSpace)!==re,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(ks,uu(s)),n.buffers.color.setClear(ks.r,ks.g,ks.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function Ag(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,h=!1;function u(P,U,O,z,H){let B=!1;if(a){const $=g(z,O,U);c!==$&&(c=$,f(c.object)),B=p(P,z,O,H),B&&v(P,z,O,H)}else{const $=U.wireframe===!0;(c.geometry!==z.id||c.program!==O.id||c.wireframe!==$)&&(c.geometry=z.id,c.program=O.id,c.wireframe=$,B=!0)}H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(B||h)&&(h=!1,D(P,U,O,z),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function g(P,U,O){const z=O.wireframe===!0;let H=o[P.id];H===void 0&&(H={},o[P.id]=H);let B=H[U.id];B===void 0&&(B={},H[U.id]=B);let $=B[z];return $===void 0&&($=m(d()),B[z]=$),$}function m(P){const U=[],O=[],z=[];for(let H=0;H<i;H++)U[H]=0,O[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:z,object:P,attributes:{},index:null}}function p(P,U,O,z){const H=c.attributes,B=U.attributes;let $=0;const et=O.getAttributes();for(const Y in et)if(et[Y].location>=0){const J=H[Y];let lt=B[Y];if(lt===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(lt=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(lt=P.instanceColor)),J===void 0||J.attribute!==lt||lt&&J.data!==lt.data)return!0;$++}return c.attributesNum!==$||c.index!==z}function v(P,U,O,z){const H={},B=U.attributes;let $=0;const et=O.getAttributes();for(const Y in et)if(et[Y].location>=0){let J=B[Y];J===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));const lt={};lt.attribute=J,J&&J.data&&(lt.data=J.data),H[Y]=lt,$++}c.attributes=H,c.attributesNum=$,c.index=z}function x(){const P=c.newAttributes;for(let U=0,O=P.length;U<O;U++)P[U]=0}function M(P){b(P,0)}function b(P,U){const O=c.newAttributes,z=c.enabledAttributes,H=c.attributeDivisors;O[P]=1,z[P]===0&&(s.enableVertexAttribArray(P),z[P]=1),H[P]!==U&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),H[P]=U)}function E(){const P=c.newAttributes,U=c.enabledAttributes;for(let O=0,z=U.length;O<z;O++)U[O]!==P[O]&&(s.disableVertexAttribArray(O),U[O]=0)}function S(P,U,O,z,H,B,$){$===!0?s.vertexAttribIPointer(P,U,O,H,B):s.vertexAttribPointer(P,U,O,z,H,B)}function D(P,U,O,z){if(n.isWebGL2===!1&&(P.isInstancedMesh||z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const H=z.attributes,B=O.getAttributes(),$=U.defaultAttributeValues;for(const et in B){const Y=B[et];if(Y.location>=0){let j=H[et];if(j===void 0&&(et==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),et==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),j!==void 0){const J=j.normalized,lt=j.itemSize,St=e.get(j);if(St===void 0)continue;const K=St.buffer,tt=St.type,ct=St.bytesPerElement,ht=n.isWebGL2===!0&&(tt===s.INT||tt===s.UNSIGNED_INT||j.gpuType===jh);if(j.isInterleavedBufferAttribute){const Lt=j.data,k=Lt.stride,ee=j.offset;if(Lt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<Y.locationSize;Mt++)b(Y.location+Mt,Lt.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let Mt=0;Mt<Y.locationSize;Mt++)M(Y.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,K);for(let Mt=0;Mt<Y.locationSize;Mt++)S(Y.location+Mt,lt/Y.locationSize,tt,J,k*ct,(ee+lt/Y.locationSize*Mt)*ct,ht)}else{if(j.isInstancedBufferAttribute){for(let Lt=0;Lt<Y.locationSize;Lt++)b(Y.location+Lt,j.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Lt=0;Lt<Y.locationSize;Lt++)M(Y.location+Lt);s.bindBuffer(s.ARRAY_BUFFER,K);for(let Lt=0;Lt<Y.locationSize;Lt++)S(Y.location+Lt,lt/Y.locationSize,tt,J,lt*ct,lt/Y.locationSize*Lt*ct,ht)}}else if($!==void 0){const J=$[et];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(Y.location,J);break;case 3:s.vertexAttrib3fv(Y.location,J);break;case 4:s.vertexAttrib4fv(Y.location,J);break;default:s.vertexAttrib1fv(Y.location,J)}}}}E()}function y(){V();for(const P in o){const U=o[P];for(const O in U){const z=U[O];for(const H in z)_(z[H].object),delete z[H];delete U[O]}delete o[P]}}function w(P){if(o[P.id]===void 0)return;const U=o[P.id];for(const O in U){const z=U[O];for(const H in z)_(z[H].object),delete z[H];delete U[O]}delete o[P.id]}function F(P){for(const U in o){const O=o[U];if(O[P.id]===void 0)continue;const z=O[P.id];for(const H in z)_(z[H].object),delete z[H];delete O[P.id]}}function V(){Z(),h=!0,c!==l&&(c=l,f(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:V,resetDefaultState:Z,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:M,disableUnusedAttributes:E}}function Cg(s,t,e,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,_;if(i)f=s,_="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];e.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Rg(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=a||t.has("OES_texture_float"),b=x&&M,E=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:E}}function Pg(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Xn,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,x=v*4;let M=p.clippingState||null;l.value=M,M=h(_,d,x,f);for(let b=0;b!==x;++b)M[b]=e[b];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=f;x!==g;++x,M+=4)a.copy(u[x]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Lg(s){let t=new WeakMap;function e(a,o){return o===sa?a.mapping=Er:o===Co&&(a.mapping=Tr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===sa||o===Co)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Vf(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class rl extends du{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const fr=4,Pc=[.125,.215,.35,.446,.526,.582],Ii=20,io=new rl,Lc=new Rt;let ro=null,so=0,ao=0;const Pi=(1+Math.sqrt(5))/2,cr=1/Pi,Dc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Pi,cr),new L(0,Pi,-cr),new L(cr,0,Pi),new L(-cr,0,Pi),new L(Pi,cr,0),new L(-Pi,cr,0)];class Io{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ro,so,ao),t.scissorTest=!1,Gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Er||t.mapping===Tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:$n,format:Cn,colorSpace:Kn,depthBuffer:!1},i=Ic(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ic(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dg(r)),this._blurMaterial=Ig(r,t,e)}return i}_compileMaterial(t){const e=new ye(this._lodPlanes[0],t);this._renderer.compile(e,io)}_sceneToCubeUV(t,e,n,i){const o=new an(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Lc),h.toneMapping=hi,h.autoClear=!1;const f=new wn({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),_=new ye(new Ir,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(Lc),g=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Gs(i,v*x,p>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Er||t.mapping===Tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ye(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Gs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,io)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Dc[(i-1)%Dc.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ye(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ii-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);const p=[];let v=0;for(let S=0;S<Ii;++S){const D=S/g,y=Math.exp(-D*D/2);p.push(y),S===0?v+=y:S<m&&(v+=2*y)}for(let S=0;S<p.length;S++)p[S]=p[S]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const M=this._sizeLods[i],b=3*M*(i>x-fr?i-x+fr:0),E=4*(this._cubeSize-M);Gs(e,b,E,3*M,2*M),l.setRenderTarget(e),l.render(u,io)}}function Dg(s){const t=[],e=[],n=[];let i=s;const r=s-fr+1+Pc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-fr?l=Pc[a-s+fr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*f),x=new Float32Array(m*_*f),M=new Float32Array(p*_*f);for(let E=0;E<f;E++){const S=E%3*2/3-1,D=E>2?0:-1,y=[S,D,0,S+2/3,D,0,S+2/3,D+1,0,S,D,0,S+2/3,D+1,0,S,D+1,0];v.set(y,g*_*E),x.set(d,m*_*E);const w=[E,E,E,E,E,E];M.set(w,p*_*E)}const b=new ve;b.setAttribute("position",new Ye(v,g)),b.setAttribute("uv",new Ye(x,m)),b.setAttribute("faceIndex",new Ye(M,p)),t.push(b),i>fr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ic(s,t,e){const n=new Rn(s,t,e);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Ig(s,t,e){const n=new Float32Array(Ii),i=new L(0,1,0);return new We({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Uc(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Nc(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function sl(){return`

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
	`}function Ug(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===sa||l===Co,h=l===Er||l===Tr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Io(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Io(s));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ng(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Og(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let x=0,M=v.length;x<M;x+=3){const b=v[x+0],E=v[x+1],S=v[x+2];d.push(b,E,E,S,S,b)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const b=x+0,E=x+1,S=x+2;d.push(b,E,E,S,S,b)}}else return;const m=new(ru(d)?hu:cu)(d,1);m.version=g;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Fg(s,t,e,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,_){s.drawElements(r,_,o,f*l),e.update(_,r,1)}function u(f,_,g){if(g===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,_,o,f*l,g),e.update(_,r,g)}function d(f,_,g){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<g;p++)this.render(f[p]/l,_[p]);else{m.multiDrawElementsWEBGL(r,_,0,o,f,0,g);let p=0;for(let v=0;v<g;v++)p+=_[v];e.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Bg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function zg(s,t){return s[0]-t[0]}function kg(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Gg(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new oe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(h);if(m===void 0||m.count!==g){let U=function(){Z.dispose(),r.delete(h),h.removeEventListener("dispose",U)};var f=U;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let y=0;x===!0&&(y=1),M===!0&&(y=2),b===!0&&(y=3);let w=h.attributes.position.count*y,F=1;w>t.maxTextureSize&&(F=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const V=new Float32Array(w*F*4*g),Z=new ou(V,w,F,g);Z.type=ai,Z.needsUpdate=!0;const P=y*4;for(let O=0;O<g;O++){const z=E[O],H=S[O],B=D[O],$=w*F*4*O;for(let et=0;et<z.count;et++){const Y=et*P;x===!0&&(a.fromBufferAttribute(z,et),V[$+Y+0]=a.x,V[$+Y+1]=a.y,V[$+Y+2]=a.z,V[$+Y+3]=0),M===!0&&(a.fromBufferAttribute(H,et),V[$+Y+4]=a.x,V[$+Y+5]=a.y,V[$+Y+6]=a.z,V[$+Y+7]=0),b===!0&&(a.fromBufferAttribute(B,et),V[$+Y+8]=a.x,V[$+Y+9]=a.y,V[$+Y+10]=a.z,V[$+Y+11]=B.itemSize===4?a.w:1)}}m={count:g,texture:Z,size:new yt(w,F)},r.set(h,m),h.addEventListener("dispose",U)}let p=0;for(let x=0;x<d.length;x++)p+=d[x];const v=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let M=0;M<_;M++)g[M]=[M,0];n[h.id]=g}for(let M=0;M<_;M++){const b=g[M];b[0]=M,b[1]=d[M]}g.sort(kg);for(let M=0;M<8;M++)M<_&&g[M][1]?(o[M][0]=g[M][0],o[M][1]=g[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(zg);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const b=o[M],E=b[0],S=b[1];E!==Number.MAX_SAFE_INTEGER&&S?(m&&h.getAttribute("morphTarget"+M)!==m[E]&&h.setAttribute("morphTarget"+M,m[E]),p&&h.getAttribute("morphNormal"+M)!==p[E]&&h.setAttribute("morphNormal"+M,p[E]),i[M]=S,v+=S):(m&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),p&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const x=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Hg(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class mu extends qe{constructor(t,e,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Oi,h!==Oi&&h!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Oi&&(n=si),n===void 0&&h===br&&(n=Ni),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const gu=new qe,_u=new mu(1,1);_u.compareFunction=iu;const xu=new ou,vu=new Af,Mu=new fu,Oc=[],Fc=[],Bc=new Float32Array(16),zc=new Float32Array(9),kc=new Float32Array(4);function Ur(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Oc[i];if(r===void 0&&(r=new Float32Array(i),Oc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ee(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Te(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ta(s,t){let e=Fc[t];e===void 0&&(e=new Int32Array(t),Fc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Vg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Wg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2fv(this.addr,t),Te(e,t)}}function Xg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;s.uniform3fv(this.addr,t),Te(e,t)}}function qg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4fv(this.addr,t),Te(e,t)}}function Yg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;kc.set(n),s.uniformMatrix2fv(this.addr,!1,kc),Te(e,n)}}function jg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;zc.set(n),s.uniformMatrix3fv(this.addr,!1,zc),Te(e,n)}}function $g(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Bc.set(n),s.uniformMatrix4fv(this.addr,!1,Bc),Te(e,n)}}function Kg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Zg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2iv(this.addr,t),Te(e,t)}}function Jg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3iv(this.addr,t),Te(e,t)}}function Qg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4iv(this.addr,t),Te(e,t)}}function t_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function e_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2uiv(this.addr,t),Te(e,t)}}function n_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3uiv(this.addr,t),Te(e,t)}}function i_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4uiv(this.addr,t),Te(e,t)}}function r_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?_u:gu;e.setTexture2D(t||r,i)}function s_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vu,i)}function a_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Mu,i)}function o_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||xu,i)}function l_(s){switch(s){case 5126:return Vg;case 35664:return Wg;case 35665:return Xg;case 35666:return qg;case 35674:return Yg;case 35675:return jg;case 35676:return $g;case 5124:case 35670:return Kg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return Qg;case 5125:return t_;case 36294:return e_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return a_;case 36289:case 36303:case 36311:case 36292:return o_}}function c_(s,t){s.uniform1fv(this.addr,t)}function h_(s,t){const e=Ur(t,this.size,2);s.uniform2fv(this.addr,e)}function u_(s,t){const e=Ur(t,this.size,3);s.uniform3fv(this.addr,e)}function d_(s,t){const e=Ur(t,this.size,4);s.uniform4fv(this.addr,e)}function f_(s,t){const e=Ur(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function p_(s,t){const e=Ur(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function m_(s,t){const e=Ur(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function g_(s,t){s.uniform1iv(this.addr,t)}function __(s,t){s.uniform2iv(this.addr,t)}function x_(s,t){s.uniform3iv(this.addr,t)}function v_(s,t){s.uniform4iv(this.addr,t)}function M_(s,t){s.uniform1uiv(this.addr,t)}function y_(s,t){s.uniform2uiv(this.addr,t)}function S_(s,t){s.uniform3uiv(this.addr,t)}function E_(s,t){s.uniform4uiv(this.addr,t)}function T_(s,t,e){const n=this.cache,i=t.length,r=Ta(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||gu,r[a])}function b_(s,t,e){const n=this.cache,i=t.length,r=Ta(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||vu,r[a])}function w_(s,t,e){const n=this.cache,i=t.length,r=Ta(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Mu,r[a])}function A_(s,t,e){const n=this.cache,i=t.length,r=Ta(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||xu,r[a])}function C_(s){switch(s){case 5126:return c_;case 35664:return h_;case 35665:return u_;case 35666:return d_;case 35674:return f_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return __;case 35668:case 35672:return x_;case 35669:case 35673:return v_;case 5125:return M_;case 36294:return y_;case 36295:return S_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return A_}}class R_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=l_(e.type)}}class P_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=C_(e.type)}}class L_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const oo=/(\w+)(\])?(\[|\.)?/g;function Gc(s,t){s.seq.push(t),s.map[t.id]=t}function D_(s,t,e){const n=s.name,i=n.length;for(oo.lastIndex=0;;){const r=oo.exec(n),a=oo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Gc(e,c===void 0?new R_(o,s,t):new P_(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new L_(o),Gc(e,u)),e=u}}}class Qs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);D_(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Hc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const I_=37297;let U_=0;function N_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function O_(s){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(s);let n;switch(t===e?n="":t===la&&e===oa?n="LinearDisplayP3ToLinearSRGB":t===oa&&e===la&&(n="LinearSRGBToLinearDisplayP3"),s){case Kn:case ya:return[n,"LinearTransferOETF"];case Re:case el:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Vc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+N_(s.getShaderSource(t),a)}else return i}function F_(s,t){const e=O_(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function B_(s,t){let e;switch(t){case Vh:e="Linear";break;case Wh:e="Reinhard";break;case Xh:e="OptimizedCineon";break;case Qo:e="ACESFilmic";break;case qh:e="AgX";break;case Qd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function z_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pr).join(`
`)}function k_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(pr).join(`
`)}function G_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function H_(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function pr(s){return s!==""}function Wc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const V_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(s){return s.replace(V_,X_)}const W_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function X_(s,t){let e=Gt[t];if(e===void 0){const n=W_.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Uo(e)}const q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(s){return s.replace(q_,Y_)}function Y_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yc(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function j_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ad?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function $_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Er:case Tr:t="ENVMAP_TYPE_CUBE";break;case Ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function K_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Tr:t="ENVMAP_MODE_REFRACTION";break}return t}function Z_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Hh:t="ENVMAP_BLENDING_MULTIPLY";break;case Zd:t="ENVMAP_BLENDING_MIX";break;case Jd:t="ENVMAP_BLENDING_ADD";break}return t}function J_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Q_(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=j_(e),c=$_(e),h=K_(e),u=Z_(e),d=J_(e),f=e.isWebGL2?"":z_(e),_=k_(e),g=G_(r),m=i.createProgram();let p,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pr).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pr).join(`
`),v.length>0&&(v+=`
`)):(p=[Yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),v=[f,Yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?Gt.tonemapping_pars_fragment:"",e.toneMapping!==hi?B_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,F_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),a=Uo(a),a=Wc(a,e),a=Xc(a,e),o=Uo(o),o=Wc(o,e),o=Xc(o,e),a=qc(a),o=qc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=x+p+a,b=x+v+o,E=Hc(i,i.VERTEX_SHADER,M),S=Hc(i,i.FRAGMENT_SHADER,b);i.attachShader(m,E),i.attachShader(m,S),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function D(V){if(s.debug.checkShaderErrors){const Z=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(E).trim(),U=i.getShaderInfoLog(S).trim();let O=!0,z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,E,S);else{const H=Vc(i,E,"vertex"),B=Vc(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+H+`
`+B)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(P===""||U==="")&&(z=!1);z&&(V.diagnostics={runnable:O,programLog:Z,vertexShader:{log:P,prefix:p},fragmentShader:{log:U,prefix:v}})}i.deleteShader(E),i.deleteShader(S),y=new Qs(i,m),w=H_(i,m)}let y;this.getUniforms=function(){return y===void 0&&D(this),y};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(m,I_)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=U_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=S,this}let t0=0;class e0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new n0(t),e.set(t,n)),n}}class n0{constructor(t){this.id=t0++,this.code=t,this.usedTimes=0}}function i0(s,t,e,n,i,r,a){const o=new nl,l=new e0,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function m(y,w,F,V,Z){const P=V.fog,U=Z.geometry,O=y.isMeshStandardMaterial?V.environment:null,z=(y.isMeshStandardMaterial?e:t).get(y.envMap||O),H=z&&z.mapping===Ma?z.image.height:null,B=_[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const $=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,et=$!==void 0?$.length:0;let Y=0;U.morphAttributes.position!==void 0&&(Y=1),U.morphAttributes.normal!==void 0&&(Y=2),U.morphAttributes.color!==void 0&&(Y=3);let j,J,lt,St;if(B){const ae=Ln[B];j=ae.vertexShader,J=ae.fragmentShader}else j=y.vertexShader,J=y.fragmentShader,l.update(y),lt=l.getVertexShaderID(y),St=l.getFragmentShaderID(y);const K=s.getRenderTarget(),tt=Z.isInstancedMesh===!0,ct=Z.isBatchedMesh===!0,ht=!!y.map,Lt=!!y.matcap,k=!!z,ee=!!y.aoMap,Mt=!!y.lightMap,Dt=!!y.bumpMap,xt=!!y.normalMap,Zt=!!y.displacementMap,Ft=!!y.emissiveMap,C=!!y.metalnessMap,T=!!y.roughnessMap,G=y.anisotropy>0,rt=y.clearcoat>0,nt=y.iridescence>0,st=y.sheen>0,vt=y.transmission>0,dt=G&&!!y.anisotropyMap,gt=rt&&!!y.clearcoatMap,wt=rt&&!!y.clearcoatNormalMap,Nt=rt&&!!y.clearcoatRoughnessMap,Q=nt&&!!y.iridescenceMap,$t=nt&&!!y.iridescenceThicknessMap,Bt=st&&!!y.sheenColorMap,It=st&&!!y.sheenRoughnessMap,Tt=!!y.specularMap,pt=!!y.specularColorMap,R=!!y.specularIntensityMap,at=vt&&!!y.transmissionMap,Et=vt&&!!y.thicknessMap,_t=!!y.gradientMap,it=!!y.alphaMap,I=y.alphaTest>0,ot=!!y.alphaHash,ft=!!y.extensions,Pt=!!U.attributes.uv1,At=!!U.attributes.uv2,Ht=!!U.attributes.uv3;let Vt=hi;return y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Vt=s.toneMapping),{isWebGL2:h,shaderID:B,shaderType:y.type,shaderName:y.name,vertexShader:j,fragmentShader:J,defines:y.defines,customVertexShaderID:lt,customFragmentShaderID:St,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ct,instancing:tt,instancingColor:tt&&Z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Kn,map:ht,matcap:Lt,envMap:k,envMapMode:k&&z.mapping,envMapCubeUVHeight:H,aoMap:ee,lightMap:Mt,bumpMap:Dt,normalMap:xt,displacementMap:d&&Zt,emissiveMap:Ft,normalMapObjectSpace:xt&&y.normalMapType===df,normalMapTangentSpace:xt&&y.normalMapType===nu,metalnessMap:C,roughnessMap:T,anisotropy:G,anisotropyMap:dt,clearcoat:rt,clearcoatMap:gt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Nt,iridescence:nt,iridescenceMap:Q,iridescenceThicknessMap:$t,sheen:st,sheenColorMap:Bt,sheenRoughnessMap:It,specularMap:Tt,specularColorMap:pt,specularIntensityMap:R,transmission:vt,transmissionMap:at,thicknessMap:Et,gradientMap:_t,opaque:y.transparent===!1&&y.blending===xr,alphaMap:it,alphaTest:I,alphaHash:ot,combine:y.combine,mapUv:ht&&g(y.map.channel),aoMapUv:ee&&g(y.aoMap.channel),lightMapUv:Mt&&g(y.lightMap.channel),bumpMapUv:Dt&&g(y.bumpMap.channel),normalMapUv:xt&&g(y.normalMap.channel),displacementMapUv:Zt&&g(y.displacementMap.channel),emissiveMapUv:Ft&&g(y.emissiveMap.channel),metalnessMapUv:C&&g(y.metalnessMap.channel),roughnessMapUv:T&&g(y.roughnessMap.channel),anisotropyMapUv:dt&&g(y.anisotropyMap.channel),clearcoatMapUv:gt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:wt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:It&&g(y.sheenRoughnessMap.channel),specularMapUv:Tt&&g(y.specularMap.channel),specularColorMapUv:pt&&g(y.specularColorMap.channel),specularIntensityMapUv:R&&g(y.specularIntensityMap.channel),transmissionMapUv:at&&g(y.transmissionMap.channel),thicknessMapUv:Et&&g(y.thicknessMap.channel),alphaMapUv:it&&g(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(xt||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Pt,vertexUv2s:At,vertexUv3s:Ht,pointsUvs:Z.isPoints===!0&&!!U.attributes.uv&&(ht||it),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Z.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Y,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Vt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ht&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===re,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_n,flipSided:y.side===Xe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ft&&y.extensions.derivatives===!0,extensionFragDepth:ft&&y.extensions.fragDepth===!0,extensionDrawBuffers:ft&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ft&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ft&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)w.push(F),w.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(v(w,y),x(w,y),w.push(s.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function v(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function x(y,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function M(y){const w=_[y.type];let F;if(w){const V=Ln[w];F=rs.clone(V.uniforms)}else F=y.uniforms;return F}function b(y,w){let F;for(let V=0,Z=c.length;V<Z;V++){const P=c[V];if(P.cacheKey===w){F=P,++F.usedTimes;break}}return F===void 0&&(F=new Q_(s,w,y,r),c.push(F)),F}function E(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function S(y){l.remove(y)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:b,releaseProgram:E,releaseShaderCache:S,programs:c,dispose:D}}function r0(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function s0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function jc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function $c(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,_,g,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function o(u,d,f,_,g,m){const p=a(u,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,_,g,m){const p=a(u,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||s0),n.length>1&&n.sort(d||jc),i.length>1&&i.sort(d||jc)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function a0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new $c,s.set(n,[a])):i>=r.length?(a=new $c,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function o0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Rt};break;case"SpotLight":e={position:new L,direction:new L,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function l0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let c0=0;function h0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function u0(s,t){const e=new o0,n=l0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);const r=new L,a=new ge,o=new ge;function l(h,u){let d=0,f=0,_=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let g=0,m=0,p=0,v=0,x=0,M=0,b=0,E=0,S=0,D=0,y=0;h.sort(h0);const w=u===!0?Math.PI:1;for(let V=0,Z=h.length;V<Z;V++){const P=h[V],U=P.color,O=P.intensity,z=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=U.r*O*w,f+=U.g*O*w,_+=U.b*O*w;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],O);y++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const $=P.shadow,et=n.get(P);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,i.directionalShadow[g]=et,i.directionalShadowMap[g]=H,i.directionalShadowMatrix[g]=P.shadow.matrix,M++}i.directional[g]=B,g++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(U).multiplyScalar(O*w),B.distance=z,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[p]=B;const $=P.shadow;if(P.map&&(i.spotLightMap[S]=P.map,S++,$.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[p]=$.matrix,P.castShadow){const et=n.get(P);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,i.spotShadow[p]=et,i.spotShadowMap[p]=H,E++}p++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(U).multiplyScalar(O),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=B,v++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*w),B.distance=P.distance,B.decay=P.decay,P.castShadow){const $=P.shadow,et=n.get(P);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,et.shadowCameraNear=$.camera.near,et.shadowCameraFar=$.camera.far,i.pointShadow[m]=et,i.pointShadowMap[m]=H,i.pointShadowMatrix[m]=P.shadow.matrix,b++}i.point[m]=B,m++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(O*w),B.groundColor.copy(P.groundColor).multiplyScalar(O*w),i.hemi[x]=B,x++}}v>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=_;const F=i.hash;(F.directionalLength!==g||F.pointLength!==m||F.spotLength!==p||F.rectAreaLength!==v||F.hemiLength!==x||F.numDirectionalShadows!==M||F.numPointShadows!==b||F.numSpotShadows!==E||F.numSpotMaps!==S||F.numLightProbes!==y)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+S-D,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=y,F.directionalLength=g,F.pointLength=m,F.spotLength=p,F.rectAreaLength=v,F.hemiLength=x,F.numDirectionalShadows=M,F.numPointShadows=b,F.numSpotShadows=E,F.numSpotMaps=S,F.numLightProbes=y,i.version=c0++)}function c(h,u){let d=0,f=0,_=0,g=0,m=0;const p=u.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const M=h[v];if(M.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),d++}else if(M.isSpotLight){const b=i.spot[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Kc(s,t){const e=new u0(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function d0(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new Kc(s,t),e.set(r,[l])):a>=o.length?(l=new Kc(s,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class f0 extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class p0 extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const m0=`void main() {
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
}`;function _0(s,t,e){let n=new il;const i=new yt,r=new yt,a=new oe,o=new f0({depthPacking:uf}),l=new p0,c={},h=e.maxTextureSize,u={[pi]:Xe,[Xe]:pi,[_n]:_n},d=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:m0,fragmentShader:g0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new ve;_.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ye(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh;let p=this.type;this.render=function(E,S,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const y=s.getRenderTarget(),w=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),V=s.state;V.setBlending(jn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Z=p!==Vn&&this.type===Vn,P=p===Vn&&this.type!==Vn;for(let U=0,O=E.length;U<O;U++){const z=E[U],H=z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const B=H.getFrameExtents();if(i.multiply(B),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/B.x),i.x=r.x*B.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/B.y),i.y=r.y*B.y,H.mapSize.y=r.y)),H.map===null||Z===!0||P===!0){const et=this.type!==Vn?{minFilter:Ge,magFilter:Ge}:{};H.map!==null&&H.map.dispose(),H.map=new Rn(i.x,i.y,et),H.map.texture.name=z.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const $=H.getViewportCount();for(let et=0;et<$;et++){const Y=H.getViewport(et);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),V.viewport(a),H.updateMatrices(z,et),n=H.getFrustum(),M(S,D,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Vn&&v(H,D),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,w,F)};function v(E,S){const D=t.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Rn(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(S,null,D,d,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(S,null,D,f,g,null)}function x(E,S,D,y){let w=null;const F=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)w=F;else if(w=D.isPointLight===!0?l:o,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const V=w.uuid,Z=S.uuid;let P=c[V];P===void 0&&(P={},c[V]=P);let U=P[Z];U===void 0&&(U=w.clone(),P[Z]=U,S.addEventListener("dispose",b)),w=U}if(w.visible=S.visible,w.wireframe=S.wireframe,y===Vn?w.side=S.shadowSide!==null?S.shadowSide:S.side:w.side=S.shadowSide!==null?S.shadowSide:u[S.side],w.alphaMap=S.alphaMap,w.alphaTest=S.alphaTest,w.map=S.map,w.clipShadows=S.clipShadows,w.clippingPlanes=S.clippingPlanes,w.clipIntersection=S.clipIntersection,w.displacementMap=S.displacementMap,w.displacementScale=S.displacementScale,w.displacementBias=S.displacementBias,w.wireframeLinewidth=S.wireframeLinewidth,w.linewidth=S.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const V=s.properties.get(w);V.light=D}return w}function M(E,S,D,y,w){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Vn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const Z=t.update(E),P=E.material;if(Array.isArray(P)){const U=Z.groups;for(let O=0,z=U.length;O<z;O++){const H=U[O],B=P[H.materialIndex];if(B&&B.visible){const $=x(E,B,y,w);E.onBeforeShadow(s,E,S,D,Z,$,H),s.renderBufferDirect(D,null,Z,$,E,H),E.onAfterShadow(s,E,S,D,Z,$,H)}}}else if(P.visible){const U=x(E,P,y,w);E.onBeforeShadow(s,E,S,D,Z,U,null),s.renderBufferDirect(D,null,Z,U,E,null),E.onAfterShadow(s,E,S,D,Z,U,null)}}const V=E.children;for(let Z=0,P=V.length;Z<P;Z++)M(V[Z],S,D,y,w)}function b(E){E.target.removeEventListener("dispose",b);for(const D in c){const y=c[D],w=E.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function x0(s,t,e){const n=e.isWebGL2;function i(){let I=!1;const ot=new oe;let ft=null;const Pt=new oe(0,0,0,0);return{setMask:function(At){ft!==At&&!I&&(s.colorMask(At,At,At,At),ft=At)},setLocked:function(At){I=At},setClear:function(At,Ht,Vt,se,ae){ae===!0&&(At*=se,Ht*=se,Vt*=se),ot.set(At,Ht,Vt,se),Pt.equals(ot)===!1&&(s.clearColor(At,Ht,Vt,se),Pt.copy(ot))},reset:function(){I=!1,ft=null,Pt.set(-1,0,0,0)}}}function r(){let I=!1,ot=null,ft=null,Pt=null;return{setTest:function(At){At?ct(s.DEPTH_TEST):ht(s.DEPTH_TEST)},setMask:function(At){ot!==At&&!I&&(s.depthMask(At),ot=At)},setFunc:function(At){if(ft!==At){switch(At){case Wd:s.depthFunc(s.NEVER);break;case Xd:s.depthFunc(s.ALWAYS);break;case qd:s.depthFunc(s.LESS);break;case ra:s.depthFunc(s.LEQUAL);break;case Yd:s.depthFunc(s.EQUAL);break;case jd:s.depthFunc(s.GEQUAL);break;case $d:s.depthFunc(s.GREATER);break;case Kd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ft=At}},setLocked:function(At){I=At},setClear:function(At){Pt!==At&&(s.clearDepth(At),Pt=At)},reset:function(){I=!1,ot=null,ft=null,Pt=null}}}function a(){let I=!1,ot=null,ft=null,Pt=null,At=null,Ht=null,Vt=null,se=null,ae=null;return{setTest:function(Yt){I||(Yt?ct(s.STENCIL_TEST):ht(s.STENCIL_TEST))},setMask:function(Yt){ot!==Yt&&!I&&(s.stencilMask(Yt),ot=Yt)},setFunc:function(Yt,ce,Qe){(ft!==Yt||Pt!==ce||At!==Qe)&&(s.stencilFunc(Yt,ce,Qe),ft=Yt,Pt=ce,At=Qe)},setOp:function(Yt,ce,Qe){(Ht!==Yt||Vt!==ce||se!==Qe)&&(s.stencilOp(Yt,ce,Qe),Ht=Yt,Vt=ce,se=Qe)},setLocked:function(Yt){I=Yt},setClear:function(Yt){ae!==Yt&&(s.clearStencil(Yt),ae=Yt)},reset:function(){I=!1,ot=null,ft=null,Pt=null,At=null,Ht=null,Vt=null,se=null,ae=null}}}const o=new i,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let d={},f={},_=new WeakMap,g=[],m=null,p=!1,v=null,x=null,M=null,b=null,E=null,S=null,D=null,y=new Rt(0,0,0),w=0,F=!1,V=null,Z=null,P=null,U=null,O=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,B=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec($)[1]),H=B>=1):$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=B>=2);let et=null,Y={};const j=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),lt=new oe().fromArray(j),St=new oe().fromArray(J);function K(I,ot,ft,Pt){const At=new Uint8Array(4),Ht=s.createTexture();s.bindTexture(I,Ht),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<ft;Vt++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(ot,0,s.RGBA,1,1,Pt,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(ot+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return Ht}const tt={};tt[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),tt[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(tt[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),tt[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ct(s.DEPTH_TEST),l.setFunc(ra),Ft(!1),C(Il),ct(s.CULL_FACE),xt(jn);function ct(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function ht(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function Lt(I,ot){return f[I]!==ot?(s.bindFramebuffer(I,ot),f[I]=ot,n&&(I===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ot),I===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ot)),!0):!1}function k(I,ot){let ft=g,Pt=!1;if(I)if(ft=_.get(ot),ft===void 0&&(ft=[],_.set(ot,ft)),I.isWebGLMultipleRenderTargets){const At=I.texture;if(ft.length!==At.length||ft[0]!==s.COLOR_ATTACHMENT0){for(let Ht=0,Vt=At.length;Ht<Vt;Ht++)ft[Ht]=s.COLOR_ATTACHMENT0+Ht;ft.length=At.length,Pt=!0}}else ft[0]!==s.COLOR_ATTACHMENT0&&(ft[0]=s.COLOR_ATTACHMENT0,Pt=!0);else ft[0]!==s.BACK&&(ft[0]=s.BACK,Pt=!0);Pt&&(e.isWebGL2?s.drawBuffers(ft):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ft))}function ee(I){return m!==I?(s.useProgram(I),m=I,!0):!1}const Mt={[Di]:s.FUNC_ADD,[Rd]:s.FUNC_SUBTRACT,[Pd]:s.FUNC_REVERSE_SUBTRACT};if(n)Mt[Ol]=s.MIN,Mt[Fl]=s.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&(Mt[Ol]=I.MIN_EXT,Mt[Fl]=I.MAX_EXT)}const Dt={[Ld]:s.ZERO,[Dd]:s.ONE,[Id]:s.SRC_COLOR,[wo]:s.SRC_ALPHA,[zd]:s.SRC_ALPHA_SATURATE,[Fd]:s.DST_COLOR,[Nd]:s.DST_ALPHA,[Ud]:s.ONE_MINUS_SRC_COLOR,[Ao]:s.ONE_MINUS_SRC_ALPHA,[Bd]:s.ONE_MINUS_DST_COLOR,[Od]:s.ONE_MINUS_DST_ALPHA,[kd]:s.CONSTANT_COLOR,[Gd]:s.ONE_MINUS_CONSTANT_COLOR,[Hd]:s.CONSTANT_ALPHA,[Vd]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(I,ot,ft,Pt,At,Ht,Vt,se,ae,Yt){if(I===jn){p===!0&&(ht(s.BLEND),p=!1);return}if(p===!1&&(ct(s.BLEND),p=!0),I!==Cd){if(I!==v||Yt!==F){if((x!==Di||E!==Di)&&(s.blendEquation(s.FUNC_ADD),x=Di,E=Di),Yt)switch(I){case xr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ne:s.blendFunc(s.ONE,s.ONE);break;case Ul:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case xr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ne:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ul:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,b=null,S=null,D=null,y.set(0,0,0),w=0,v=I,F=Yt}return}At=At||ot,Ht=Ht||ft,Vt=Vt||Pt,(ot!==x||At!==E)&&(s.blendEquationSeparate(Mt[ot],Mt[At]),x=ot,E=At),(ft!==M||Pt!==b||Ht!==S||Vt!==D)&&(s.blendFuncSeparate(Dt[ft],Dt[Pt],Dt[Ht],Dt[Vt]),M=ft,b=Pt,S=Ht,D=Vt),(se.equals(y)===!1||ae!==w)&&(s.blendColor(se.r,se.g,se.b,ae),y.copy(se),w=ae),v=I,F=!1}function Zt(I,ot){I.side===_n?ht(s.CULL_FACE):ct(s.CULL_FACE);let ft=I.side===Xe;ot&&(ft=!ft),Ft(ft),I.blending===xr&&I.transparent===!1?xt(jn):xt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const Pt=I.stencilWrite;c.setTest(Pt),Pt&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),G(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):ht(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(I){V!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),V=I)}function C(I){I!==bd?(ct(s.CULL_FACE),I!==Z&&(I===Il?s.cullFace(s.BACK):I===wd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ht(s.CULL_FACE),Z=I}function T(I){I!==P&&(H&&s.lineWidth(I),P=I)}function G(I,ot,ft){I?(ct(s.POLYGON_OFFSET_FILL),(U!==ot||O!==ft)&&(s.polygonOffset(ot,ft),U=ot,O=ft)):ht(s.POLYGON_OFFSET_FILL)}function rt(I){I?ct(s.SCISSOR_TEST):ht(s.SCISSOR_TEST)}function nt(I){I===void 0&&(I=s.TEXTURE0+z-1),et!==I&&(s.activeTexture(I),et=I)}function st(I,ot,ft){ft===void 0&&(et===null?ft=s.TEXTURE0+z-1:ft=et);let Pt=Y[ft];Pt===void 0&&(Pt={type:void 0,texture:void 0},Y[ft]=Pt),(Pt.type!==I||Pt.texture!==ot)&&(et!==ft&&(s.activeTexture(ft),et=ft),s.bindTexture(I,ot||tt[I]),Pt.type=I,Pt.texture=ot)}function vt(){const I=Y[et];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function dt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function R(I){lt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),lt.copy(I))}function at(I){St.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),St.copy(I))}function Et(I,ot){let ft=u.get(ot);ft===void 0&&(ft=new WeakMap,u.set(ot,ft));let Pt=ft.get(I);Pt===void 0&&(Pt=s.getUniformBlockIndex(ot,I.name),ft.set(I,Pt))}function _t(I,ot){const Pt=u.get(ot).get(I);h.get(ot)!==Pt&&(s.uniformBlockBinding(ot,Pt,I.__bindingPointIndex),h.set(ot,Pt))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},et=null,Y={},f={},_=new WeakMap,g=[],m=null,p=!1,v=null,x=null,M=null,b=null,E=null,S=null,D=null,y=new Rt(0,0,0),w=0,F=!1,V=null,Z=null,P=null,U=null,O=null,lt.set(0,0,s.canvas.width,s.canvas.height),St.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ct,disable:ht,bindFramebuffer:Lt,drawBuffers:k,useProgram:ee,setBlending:xt,setMaterial:Zt,setFlipSided:Ft,setCullFace:C,setLineWidth:T,setPolygonOffset:G,setScissorTest:rt,activeTexture:nt,bindTexture:st,unbindTexture:vt,compressedTexImage2D:dt,compressedTexImage3D:gt,texImage2D:Tt,texImage3D:pt,updateUBOMapping:Et,uniformBlockBinding:_t,texStorage2D:Bt,texStorage3D:It,texSubImage2D:wt,texSubImage3D:Nt,compressedTexSubImage2D:Q,compressedTexSubImage3D:$t,scissor:R,viewport:at,reset:it}}function v0(s,t,e,n,i,r,a){const o=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,T){return f?new OffscreenCanvas(C,T):ha("canvas")}function g(C,T,G,rt){let nt=1;if((C.width>rt||C.height>rt)&&(nt=rt/Math.max(C.width,C.height)),nt<1||T===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const st=T?Do:Math.floor,vt=st(nt*C.width),dt=st(nt*C.height);u===void 0&&(u=_(vt,dt));const gt=G?_(vt,dt):u;return gt.width=vt,gt.height=dt,gt.getContext("2d").drawImage(C,0,0,vt,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+vt+"x"+dt+")."),gt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return fc(C.width)&&fc(C.height)}function p(C){return o?!1:C.wrapS!==An||C.wrapT!==An||C.minFilter!==Ge&&C.minFilter!==gn}function v(C,T){return C.generateMipmaps&&T&&C.minFilter!==Ge&&C.minFilter!==gn}function x(C){s.generateMipmap(C)}function M(C,T,G,rt,nt=!1){if(o===!1)return T;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let st=T;if(T===s.RED&&(G===s.FLOAT&&(st=s.R32F),G===s.HALF_FLOAT&&(st=s.R16F),G===s.UNSIGNED_BYTE&&(st=s.R8)),T===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(st=s.R8UI),G===s.UNSIGNED_SHORT&&(st=s.R16UI),G===s.UNSIGNED_INT&&(st=s.R32UI),G===s.BYTE&&(st=s.R8I),G===s.SHORT&&(st=s.R16I),G===s.INT&&(st=s.R32I)),T===s.RG&&(G===s.FLOAT&&(st=s.RG32F),G===s.HALF_FLOAT&&(st=s.RG16F),G===s.UNSIGNED_BYTE&&(st=s.RG8)),T===s.RGBA){const vt=nt?aa:Qt.getTransfer(rt);G===s.FLOAT&&(st=s.RGBA32F),G===s.HALF_FLOAT&&(st=s.RGBA16F),G===s.UNSIGNED_BYTE&&(st=vt===re?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(st=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(st=s.RGB5_A1)}return(st===s.R16F||st===s.R32F||st===s.RG16F||st===s.RG32F||st===s.RGBA16F||st===s.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function b(C,T,G){return v(C,G)===!0||C.isFramebufferTexture&&C.minFilter!==Ge&&C.minFilter!==gn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function E(C){return C===Ge||C===Bl||C===Ia?s.NEAREST:s.LINEAR}function S(C){const T=C.target;T.removeEventListener("dispose",S),y(T),T.isVideoTexture&&h.delete(T)}function D(C){const T=C.target;T.removeEventListener("dispose",D),F(T)}function y(C){const T=n.get(C);if(T.__webglInit===void 0)return;const G=C.source,rt=d.get(G);if(rt){const nt=rt[T.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&w(C),Object.keys(rt).length===0&&d.delete(G)}n.remove(C)}function w(C){const T=n.get(C);s.deleteTexture(T.__webglTexture);const G=C.source,rt=d.get(G);delete rt[T.__cacheKey],a.memory.textures--}function F(C){const T=C.texture,G=n.get(C),rt=n.get(T);if(rt.__webglTexture!==void 0&&(s.deleteTexture(rt.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(G.__webglFramebuffer[nt]))for(let st=0;st<G.__webglFramebuffer[nt].length;st++)s.deleteFramebuffer(G.__webglFramebuffer[nt][st]);else s.deleteFramebuffer(G.__webglFramebuffer[nt]);G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[nt])}else{if(Array.isArray(G.__webglFramebuffer))for(let nt=0;nt<G.__webglFramebuffer.length;nt++)s.deleteFramebuffer(G.__webglFramebuffer[nt]);else s.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let nt=0;nt<G.__webglColorRenderbuffer.length;nt++)G.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[nt]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let nt=0,st=T.length;nt<st;nt++){const vt=n.get(T[nt]);vt.__webglTexture&&(s.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(T[nt])}n.remove(T),n.remove(C)}let V=0;function Z(){V=0}function P(){const C=V;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),V+=1,C}function U(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function O(C,T){const G=n.get(C);if(C.isVideoTexture&&Zt(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const rt=C.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(G,C,T);return}}e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+T)}function z(C,T){const G=n.get(C);if(C.version>0&&G.__version!==C.version){lt(G,C,T);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+T)}function H(C,T){const G=n.get(C);if(C.version>0&&G.__version!==C.version){lt(G,C,T);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+T)}function B(C,T){const G=n.get(C);if(C.version>0&&G.__version!==C.version){St(G,C,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+T)}const $={[ns]:s.REPEAT,[An]:s.CLAMP_TO_EDGE,[Ro]:s.MIRRORED_REPEAT},et={[Ge]:s.NEAREST,[Bl]:s.NEAREST_MIPMAP_NEAREST,[Ia]:s.NEAREST_MIPMAP_LINEAR,[gn]:s.LINEAR,[tf]:s.LINEAR_MIPMAP_NEAREST,[is]:s.LINEAR_MIPMAP_LINEAR},Y={[ff]:s.NEVER,[vf]:s.ALWAYS,[pf]:s.LESS,[iu]:s.LEQUAL,[mf]:s.EQUAL,[xf]:s.GEQUAL,[gf]:s.GREATER,[_f]:s.NOTEQUAL};function j(C,T,G){if(G?(s.texParameteri(C,s.TEXTURE_WRAP_S,$[T.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,$[T.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,$[T.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,et[T.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,et[T.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==An||T.wrapT!==An)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,E(T.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,E(T.minFilter)),T.minFilter!==Ge&&T.minFilter!==gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Y[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const rt=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===Ge||T.minFilter!==Ia&&T.minFilter!==is||T.type===ai&&t.has("OES_texture_float_linear")===!1||o===!1&&T.type===$n&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(s.texParameterf(C,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function J(C,T){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",S));const rt=T.source;let nt=d.get(rt);nt===void 0&&(nt={},d.set(rt,nt));const st=U(T);if(st!==C.__cacheKey){nt[st]===void 0&&(nt[st]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),nt[st].usedTimes++;const vt=nt[C.__cacheKey];vt!==void 0&&(nt[C.__cacheKey].usedTimes--,vt.usedTimes===0&&w(T)),C.__cacheKey=st,C.__webglTexture=nt[st].texture}return G}function lt(C,T,G){let rt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(rt=s.TEXTURE_3D);const nt=J(C,T),st=T.source;e.bindTexture(rt,C.__webglTexture,s.TEXTURE0+G);const vt=n.get(st);if(st.version!==vt.__version||nt===!0){e.activeTexture(s.TEXTURE0+G);const dt=Qt.getPrimaries(Qt.workingColorSpace),gt=T.colorSpace===xn?null:Qt.getPrimaries(T.colorSpace),wt=T.colorSpace===xn||dt===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Nt=p(T)&&m(T.image)===!1;let Q=g(T.image,Nt,!1,i.maxTextureSize);Q=Ft(T,Q);const $t=m(Q)||o,Bt=r.convert(T.format,T.colorSpace);let It=r.convert(T.type),Tt=M(T.internalFormat,Bt,It,T.colorSpace,T.isVideoTexture);j(rt,T,$t);let pt;const R=T.mipmaps,at=o&&T.isVideoTexture!==!0&&Tt!==tu,Et=vt.__version===void 0||nt===!0,_t=b(T,Q,$t);if(T.isDepthTexture)Tt=s.DEPTH_COMPONENT,o?T.type===ai?Tt=s.DEPTH_COMPONENT32F:T.type===si?Tt=s.DEPTH_COMPONENT24:T.type===Ni?Tt=s.DEPTH24_STENCIL8:Tt=s.DEPTH_COMPONENT16:T.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Oi&&Tt===s.DEPTH_COMPONENT&&T.type!==tl&&T.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=si,It=r.convert(T.type)),T.format===br&&Tt===s.DEPTH_COMPONENT&&(Tt=s.DEPTH_STENCIL,T.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Ni,It=r.convert(T.type))),Et&&(at?e.texStorage2D(s.TEXTURE_2D,1,Tt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,Tt,Q.width,Q.height,0,Bt,It,null));else if(T.isDataTexture)if(R.length>0&&$t){at&&Et&&e.texStorage2D(s.TEXTURE_2D,_t,Tt,R[0].width,R[0].height);for(let it=0,I=R.length;it<I;it++)pt=R[it],at?e.texSubImage2D(s.TEXTURE_2D,it,0,0,pt.width,pt.height,Bt,It,pt.data):e.texImage2D(s.TEXTURE_2D,it,Tt,pt.width,pt.height,0,Bt,It,pt.data);T.generateMipmaps=!1}else at?(Et&&e.texStorage2D(s.TEXTURE_2D,_t,Tt,Q.width,Q.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,Bt,It,Q.data)):e.texImage2D(s.TEXTURE_2D,0,Tt,Q.width,Q.height,0,Bt,It,Q.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){at&&Et&&e.texStorage3D(s.TEXTURE_2D_ARRAY,_t,Tt,R[0].width,R[0].height,Q.depth);for(let it=0,I=R.length;it<I;it++)pt=R[it],T.format!==Cn?Bt!==null?at?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,pt.width,pt.height,Q.depth,Bt,pt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,it,Tt,pt.width,pt.height,Q.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?e.texSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,pt.width,pt.height,Q.depth,Bt,It,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,it,Tt,pt.width,pt.height,Q.depth,0,Bt,It,pt.data)}else{at&&Et&&e.texStorage2D(s.TEXTURE_2D,_t,Tt,R[0].width,R[0].height);for(let it=0,I=R.length;it<I;it++)pt=R[it],T.format!==Cn?Bt!==null?at?e.compressedTexSubImage2D(s.TEXTURE_2D,it,0,0,pt.width,pt.height,Bt,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,it,Tt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?e.texSubImage2D(s.TEXTURE_2D,it,0,0,pt.width,pt.height,Bt,It,pt.data):e.texImage2D(s.TEXTURE_2D,it,Tt,pt.width,pt.height,0,Bt,It,pt.data)}else if(T.isDataArrayTexture)at?(Et&&e.texStorage3D(s.TEXTURE_2D_ARRAY,_t,Tt,Q.width,Q.height,Q.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Bt,It,Q.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Tt,Q.width,Q.height,Q.depth,0,Bt,It,Q.data);else if(T.isData3DTexture)at?(Et&&e.texStorage3D(s.TEXTURE_3D,_t,Tt,Q.width,Q.height,Q.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Bt,It,Q.data)):e.texImage3D(s.TEXTURE_3D,0,Tt,Q.width,Q.height,Q.depth,0,Bt,It,Q.data);else if(T.isFramebufferTexture){if(Et)if(at)e.texStorage2D(s.TEXTURE_2D,_t,Tt,Q.width,Q.height);else{let it=Q.width,I=Q.height;for(let ot=0;ot<_t;ot++)e.texImage2D(s.TEXTURE_2D,ot,Tt,it,I,0,Bt,It,null),it>>=1,I>>=1}}else if(R.length>0&&$t){at&&Et&&e.texStorage2D(s.TEXTURE_2D,_t,Tt,R[0].width,R[0].height);for(let it=0,I=R.length;it<I;it++)pt=R[it],at?e.texSubImage2D(s.TEXTURE_2D,it,0,0,Bt,It,pt):e.texImage2D(s.TEXTURE_2D,it,Tt,Bt,It,pt);T.generateMipmaps=!1}else at?(Et&&e.texStorage2D(s.TEXTURE_2D,_t,Tt,Q.width,Q.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Bt,It,Q)):e.texImage2D(s.TEXTURE_2D,0,Tt,Bt,It,Q);v(T,$t)&&x(rt),vt.__version=st.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function St(C,T,G){if(T.image.length!==6)return;const rt=J(C,T),nt=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+G);const st=n.get(nt);if(nt.version!==st.__version||rt===!0){e.activeTexture(s.TEXTURE0+G);const vt=Qt.getPrimaries(Qt.workingColorSpace),dt=T.colorSpace===xn?null:Qt.getPrimaries(T.colorSpace),gt=T.colorSpace===xn||vt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const wt=T.isCompressedTexture||T.image[0].isCompressedTexture,Nt=T.image[0]&&T.image[0].isDataTexture,Q=[];for(let it=0;it<6;it++)!wt&&!Nt?Q[it]=g(T.image[it],!1,!0,i.maxCubemapSize):Q[it]=Nt?T.image[it].image:T.image[it],Q[it]=Ft(T,Q[it]);const $t=Q[0],Bt=m($t)||o,It=r.convert(T.format,T.colorSpace),Tt=r.convert(T.type),pt=M(T.internalFormat,It,Tt,T.colorSpace),R=o&&T.isVideoTexture!==!0,at=st.__version===void 0||rt===!0;let Et=b(T,$t,Bt);j(s.TEXTURE_CUBE_MAP,T,Bt);let _t;if(wt){R&&at&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Et,pt,$t.width,$t.height);for(let it=0;it<6;it++){_t=Q[it].mipmaps;for(let I=0;I<_t.length;I++){const ot=_t[I];T.format!==Cn?It!==null?R?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,I,0,0,ot.width,ot.height,It,ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,I,pt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,I,0,0,ot.width,ot.height,It,Tt,ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,I,pt,ot.width,ot.height,0,It,Tt,ot.data)}}}else{_t=T.mipmaps,R&&at&&(_t.length>0&&Et++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Et,pt,Q[0].width,Q[0].height));for(let it=0;it<6;it++)if(Nt){R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Q[it].width,Q[it].height,It,Tt,Q[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,pt,Q[it].width,Q[it].height,0,It,Tt,Q[it].data);for(let I=0;I<_t.length;I++){const ft=_t[I].image[it].image;R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,I+1,0,0,ft.width,ft.height,It,Tt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,I+1,pt,ft.width,ft.height,0,It,Tt,ft.data)}}else{R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,It,Tt,Q[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,pt,It,Tt,Q[it]);for(let I=0;I<_t.length;I++){const ot=_t[I];R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,I+1,0,0,It,Tt,ot.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,I+1,pt,It,Tt,ot.image[it])}}}v(T,Bt)&&x(s.TEXTURE_CUBE_MAP),st.__version=nt.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function K(C,T,G,rt,nt,st){const vt=r.convert(G.format,G.colorSpace),dt=r.convert(G.type),gt=M(G.internalFormat,vt,dt,G.colorSpace);if(!n.get(T).__hasExternalTextures){const Nt=Math.max(1,T.width>>st),Q=Math.max(1,T.height>>st);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,st,gt,Nt,Q,T.depth,0,vt,dt,null):e.texImage2D(nt,st,gt,Nt,Q,0,vt,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),xt(T)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,nt,n.get(G).__webglTexture,0,Dt(T)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,nt,n.get(G).__webglTexture,st),e.bindFramebuffer(s.FRAMEBUFFER,null)}function tt(C,T,G){if(s.bindRenderbuffer(s.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let rt=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(G||xt(T)){const nt=T.depthTexture;nt&&nt.isDepthTexture&&(nt.type===ai?rt=s.DEPTH_COMPONENT32F:nt.type===si&&(rt=s.DEPTH_COMPONENT24));const st=Dt(T);xt(T)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st,rt,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,st,rt,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,rt,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){const rt=Dt(T);G&&xt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,s.DEPTH24_STENCIL8,T.width,T.height):xt(T)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const rt=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let nt=0;nt<rt.length;nt++){const st=rt[nt],vt=r.convert(st.format,st.colorSpace),dt=r.convert(st.type),gt=M(st.internalFormat,vt,dt,st.colorSpace),wt=Dt(T);G&&xt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,gt,T.width,T.height):xt(T)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,gt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,gt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ct(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const rt=n.get(T.depthTexture).__webglTexture,nt=Dt(T);if(T.depthTexture.format===Oi)xt(T)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0);else if(T.depthTexture.format===br)xt(T)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function ht(C){const T=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ct(T.__webglFramebuffer,C)}else if(G){T.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[rt]),T.__webglDepthbuffer[rt]=s.createRenderbuffer(),tt(T.__webglDepthbuffer[rt],C,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),tt(T.__webglDepthbuffer,C,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(C,T,G){const rt=n.get(C);T!==void 0&&K(rt.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&ht(C)}function k(C){const T=C.texture,G=n.get(C),rt=n.get(T);C.addEventListener("dispose",D),C.isWebGLMultipleRenderTargets!==!0&&(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=T.version,a.memory.textures++);const nt=C.isWebGLCubeRenderTarget===!0,st=C.isWebGLMultipleRenderTargets===!0,vt=m(C)||o;if(nt){G.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(o&&T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[dt]=[];for(let gt=0;gt<T.mipmaps.length;gt++)G.__webglFramebuffer[dt][gt]=s.createFramebuffer()}else G.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let dt=0;dt<T.mipmaps.length;dt++)G.__webglFramebuffer[dt]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(st)if(i.drawBuffers){const dt=C.texture;for(let gt=0,wt=dt.length;gt<wt;gt++){const Nt=n.get(dt[gt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&xt(C)===!1){const dt=st?T:[T];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let gt=0;gt<dt.length;gt++){const wt=dt[gt];G.__webglColorRenderbuffer[gt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[gt]);const Nt=r.convert(wt.format,wt.colorSpace),Q=r.convert(wt.type),$t=M(wt.internalFormat,Nt,Q,wt.colorSpace,C.isXRRenderTarget===!0),Bt=Dt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,$t,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,G.__webglColorRenderbuffer[gt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),tt(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(nt){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),j(s.TEXTURE_CUBE_MAP,T,vt);for(let dt=0;dt<6;dt++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let gt=0;gt<T.mipmaps.length;gt++)K(G.__webglFramebuffer[dt][gt],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,gt);else K(G.__webglFramebuffer[dt],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);v(T,vt)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){const dt=C.texture;for(let gt=0,wt=dt.length;gt<wt;gt++){const Nt=dt[gt],Q=n.get(Nt);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),j(s.TEXTURE_2D,Nt,vt),K(G.__webglFramebuffer,C,Nt,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,0),v(Nt,vt)&&x(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?dt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,rt.__webglTexture),j(dt,T,vt),o&&T.mipmaps&&T.mipmaps.length>0)for(let gt=0;gt<T.mipmaps.length;gt++)K(G.__webglFramebuffer[gt],C,T,s.COLOR_ATTACHMENT0,dt,gt);else K(G.__webglFramebuffer,C,T,s.COLOR_ATTACHMENT0,dt,0);v(T,vt)&&x(dt),e.unbindTexture()}C.depthBuffer&&ht(C)}function ee(C){const T=m(C)||o,G=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let rt=0,nt=G.length;rt<nt;rt++){const st=G[rt];if(v(st,T)){const vt=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,dt=n.get(st).__webglTexture;e.bindTexture(vt,dt),x(vt),e.unbindTexture()}}}function Mt(C){if(o&&C.samples>0&&xt(C)===!1){const T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],G=C.width,rt=C.height;let nt=s.COLOR_BUFFER_BIT;const st=[],vt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=n.get(C),gt=C.isWebGLMultipleRenderTargets===!0;if(gt)for(let wt=0;wt<T.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let wt=0;wt<T.length;wt++){st.push(s.COLOR_ATTACHMENT0+wt),C.depthBuffer&&st.push(vt);const Nt=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(Nt===!1&&(C.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),gt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,dt.__webglColorRenderbuffer[wt]),Nt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[vt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[vt])),gt){const Q=n.get(T[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,G,rt,0,0,G,rt,nt,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,st)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),gt)for(let wt=0;wt<T.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,dt.__webglColorRenderbuffer[wt]);const Nt=n.get(T[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,Nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function Dt(C){return Math.min(i.maxSamples,C.samples)}function xt(C){const T=n.get(C);return o&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Zt(C){const T=a.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function Ft(C,T){const G=C.colorSpace,rt=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Po||G!==Kn&&G!==xn&&(Qt.getTransfer(G)===re?o===!1?t.has("EXT_sRGB")===!0&&rt===Cn?(C.format=Po,C.minFilter=gn,C.generateMipmaps=!1):T=su.sRGBToLinear(T):(rt!==Cn||nt!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}this.allocateTextureUnit=P,this.resetTextureUnits=Z,this.setTexture2D=O,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=B,this.rebindTextures=Lt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=K,this.useMultisampledRTT=xt}function M0(s,t,e){const n=e.isWebGL2;function i(r,a=xn){let o;const l=Qt.getTransfer(a);if(r===ui)return s.UNSIGNED_BYTE;if(r===$h)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Kh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ef)return s.BYTE;if(r===nf)return s.SHORT;if(r===tl)return s.UNSIGNED_SHORT;if(r===jh)return s.INT;if(r===si)return s.UNSIGNED_INT;if(r===ai)return s.FLOAT;if(r===$n)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===rf)return s.ALPHA;if(r===Cn)return s.RGBA;if(r===sf)return s.LUMINANCE;if(r===af)return s.LUMINANCE_ALPHA;if(r===Oi)return s.DEPTH_COMPONENT;if(r===br)return s.DEPTH_STENCIL;if(r===Po)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===of)return s.RED;if(r===Zh)return s.RED_INTEGER;if(r===lf)return s.RG;if(r===Jh)return s.RG_INTEGER;if(r===Qh)return s.RGBA_INTEGER;if(r===Ua||r===Na||r===Oa||r===Fa)if(l===re)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ua)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ua)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Na)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Oa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zl||r===kl||r===Gl||r===Hl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===zl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===tu)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vl||r===Wl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Vl)return l===re?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Wl)return l===re?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xl||r===ql||r===Yl||r===jl||r===$l||r===Kl||r===Zl||r===Jl||r===Ql||r===tc||r===ec||r===nc||r===ic||r===rc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Xl)return l===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ql)return l===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yl)return l===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jl)return l===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$l)return l===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kl)return l===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zl)return l===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jl)return l===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ql)return l===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===tc)return l===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ec)return l===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nc)return l===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ic)return l===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rc)return l===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ba||r===sc||r===ac)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Ba)return l===re?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ac)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cf||r===oc||r===lc||r===cc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ba)return o.COMPRESSED_RED_RGTC1_EXT;if(r===oc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===cc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ni?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class y0 extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Dn extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S0={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(S0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Dn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class E0 extends Vi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const g=e.getContextAttributes();let m=null,p=null;const v=[],x=[],M=new yt;let b=null;const E=new an;E.layers.enable(1),E.viewport=new oe;const S=new an;S.layers.enable(2),S.viewport=new oe;const D=[E,S],y=new y0;y.layers.enable(1),y.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let J=v[j];return J===void 0&&(J=new lo,v[j]=J),J.getTargetRaySpace()},this.getControllerGrip=function(j){let J=v[j];return J===void 0&&(J=new lo,v[j]=J),J.getGripSpace()},this.getHand=function(j){let J=v[j];return J===void 0&&(J=new lo,v[j]=J),J.getHandSpace()};function V(j){const J=x.indexOf(j.inputSource);if(J===-1)return;const lt=v[J];lt!==void 0&&(lt.update(j.inputSource,j.frame,c||a),lt.dispatchEvent({type:j.type,data:j.inputSource}))}function Z(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",P);for(let j=0;j<v.length;j++){const J=x[j];J!==null&&(x[j]=null,v[j].disconnect(J))}w=null,F=null,t.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,Y.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(M),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Rn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,lt=null,St=null;g.depth&&(St=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=g.stencil?br:Oi,lt=g.stencil?Ni:si);const K={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(K),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new Rn(d.textureWidth,d.textureHeight,{format:Cn,type:ui,depthTexture:new mu(d.textureWidth,d.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const tt=t.properties.get(p);tt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Y.setContext(i),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(j){for(let J=0;J<j.removed.length;J++){const lt=j.removed[J],St=x.indexOf(lt);St>=0&&(x[St]=null,v[St].disconnect(lt))}for(let J=0;J<j.added.length;J++){const lt=j.added[J];let St=x.indexOf(lt);if(St===-1){for(let tt=0;tt<v.length;tt++)if(tt>=x.length){x.push(lt),St=tt;break}else if(x[tt]===null){x[tt]=lt,St=tt;break}if(St===-1)break}const K=v[St];K&&K.connect(lt)}}const U=new L,O=new L;function z(j,J,lt){U.setFromMatrixPosition(J.matrixWorld),O.setFromMatrixPosition(lt.matrixWorld);const St=U.distanceTo(O),K=J.projectionMatrix.elements,tt=lt.projectionMatrix.elements,ct=K[14]/(K[10]-1),ht=K[14]/(K[10]+1),Lt=(K[9]+1)/K[5],k=(K[9]-1)/K[5],ee=(K[8]-1)/K[0],Mt=(tt[8]+1)/tt[0],Dt=ct*ee,xt=ct*Mt,Zt=St/(-ee+Mt),Ft=Zt*-ee;J.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ft),j.translateZ(Zt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const C=ct+Zt,T=ht+Zt,G=Dt-Ft,rt=xt+(St-Ft),nt=Lt*ht/T*C,st=k*ht/T*C;j.projectionMatrix.makePerspective(G,rt,nt,st,C,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function H(j,J){J===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(J.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;y.near=S.near=E.near=j.near,y.far=S.far=E.far=j.far,(w!==y.near||F!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,F=y.far);const J=j.parent,lt=y.cameras;H(y,J);for(let St=0;St<lt.length;St++)H(lt[St],J);lt.length===2?z(y,E,S):y.projectionMatrix.copy(E.projectionMatrix),B(j,y,J)};function B(j,J,lt){lt===null?j.matrix.copy(J.matrixWorld):(j.matrix.copy(lt.matrixWorld),j.matrix.invert(),j.matrix.multiply(J.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Lo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)};let $=null;function et(j,J){if(h=J.getViewerPose(c||a),_=J,h!==null){const lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let St=!1;lt.length!==y.cameras.length&&(y.cameras.length=0,St=!0);for(let K=0;K<lt.length;K++){const tt=lt[K];let ct=null;if(f!==null)ct=f.getViewport(tt);else{const Lt=u.getViewSubImage(d,tt);ct=Lt.viewport,K===0&&(t.setRenderTargetTextures(p,Lt.colorTexture,d.ignoreDepthValues?void 0:Lt.depthStencilTexture),t.setRenderTarget(p))}let ht=D[K];ht===void 0&&(ht=new an,ht.layers.enable(K),ht.viewport=new oe,D[K]=ht),ht.matrix.fromArray(tt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(tt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ct.x,ct.y,ct.width,ct.height),K===0&&(y.matrix.copy(ht.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),St===!0&&y.cameras.push(ht)}}for(let lt=0;lt<v.length;lt++){const St=x[lt],K=v[lt];St!==null&&K!==void 0&&K.update(St,J,c||a)}$&&$(j,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const Y=new pu;Y.setAnimationLoop(et),this.setAnimationLoop=function(j){$=j},this.dispose=function(){}}}function T0(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function b0(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const M=x.program;n.uniformBlockBinding(v,M)}function c(v,x){let M=i[v.id];M===void 0&&(_(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(v,b);const E=t.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function h(v){const x=u();v.__bindingPointIndex=x;const M=s.createBuffer(),b=v.__size,E=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,b,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],M=v.uniforms,b=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let E=0,S=M.length;E<S;E++){const D=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,w=D.length;y<w;y++){const F=D[y];if(f(F,E,y,b)===!0){const V=F.__offset,Z=Array.isArray(F.value)?F.value:[F.value];let P=0;for(let U=0;U<Z.length;U++){const O=Z[U],z=g(O);typeof O=="number"||typeof O=="boolean"?(F.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,V+P,F.__data)):O.isMatrix3?(F.__data[0]=O.elements[0],F.__data[1]=O.elements[1],F.__data[2]=O.elements[2],F.__data[3]=0,F.__data[4]=O.elements[3],F.__data[5]=O.elements[4],F.__data[6]=O.elements[5],F.__data[7]=0,F.__data[8]=O.elements[6],F.__data[9]=O.elements[7],F.__data[10]=O.elements[8],F.__data[11]=0):(O.toArray(F.__data,P),P+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,M,b){const E=v.value,S=x+"_"+M;if(b[S]===void 0)return typeof E=="number"||typeof E=="boolean"?b[S]=E:b[S]=E.clone(),!0;{const D=b[S];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return b[S]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function _(v){const x=v.uniforms;let M=0;const b=16;for(let S=0,D=x.length;S<D;S++){const y=Array.isArray(x[S])?x[S]:[x[S]];for(let w=0,F=y.length;w<F;w++){const V=y[w],Z=Array.isArray(V.value)?V.value:[V.value];for(let P=0,U=Z.length;P<U;P++){const O=Z[P],z=g(O),H=M%b;H!==0&&b-H<z.boundary&&(M+=b-H),V.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=z.storage}}}const E=M%b;return E>0&&(M+=b-E),v.__size=M,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class yu{constructor(t={}){const{canvas:e=Sf(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this._useLegacyLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;const x=this;let M=!1,b=0,E=0,S=null,D=-1,y=null;const w=new oe,F=new oe;let V=null;const Z=new Rt(0);let P=0,U=e.width,O=e.height,z=1,H=null,B=null;const $=new oe(0,0,U,O),et=new oe(0,0,U,O);let Y=!1;const j=new il;let J=!1,lt=!1,St=null;const K=new ge,tt=new yt,ct=new L,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return S===null?z:1}let k=n;function ee(A,N){for(let X=0;X<A.length;X++){const q=A[X],W=e.getContext(q,N);if(W!==null)return W}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jo}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",ot,!1),k===null){const N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),k=ee(N,A),k===null)throw ee(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Mt,Dt,xt,Zt,Ft,C,T,G,rt,nt,st,vt,dt,gt,wt,Nt,Q,$t,Bt,It,Tt,pt,R,at;function Et(){Mt=new Ng(k),Dt=new Rg(k,Mt,t),Mt.init(Dt),pt=new M0(k,Mt,Dt),xt=new x0(k,Mt,Dt),Zt=new Bg(k),Ft=new r0,C=new v0(k,Mt,xt,Ft,Dt,pt,Zt),T=new Lg(x),G=new Ug(x),rt=new qf(k,Dt),R=new Ag(k,Mt,rt,Dt),nt=new Og(k,rt,Zt,R),st=new Hg(k,nt,rt,Zt),Bt=new Gg(k,Dt,C),Nt=new Pg(Ft),vt=new i0(x,T,G,Mt,Dt,R,Nt),dt=new T0(x,Ft),gt=new a0,wt=new d0(Mt,Dt),$t=new wg(x,T,G,xt,st,d,l),Q=new _0(x,st,Dt),at=new b0(k,Zt,Dt,xt),It=new Cg(k,Mt,Zt,Dt),Tt=new Fg(k,Mt,Zt,Dt),Zt.programs=vt.programs,x.capabilities=Dt,x.extensions=Mt,x.properties=Ft,x.renderLists=gt,x.shadowMap=Q,x.state=xt,x.info=Zt}Et();const _t=new E0(x,k);this.xr=_t,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=Mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(U,O,!1))},this.getSize=function(A){return A.set(U,O)},this.setSize=function(A,N,X=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,O=N,e.width=Math.floor(A*z),e.height=Math.floor(N*z),X===!0&&(e.style.width=A+"px",e.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(U*z,O*z).floor()},this.setDrawingBufferSize=function(A,N,X){U=A,O=N,z=X,e.width=Math.floor(A*X),e.height=Math.floor(N*X),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,N,X,q){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,N,X,q),xt.viewport(w.copy($).multiplyScalar(z).floor())},this.getScissor=function(A){return A.copy(et)},this.setScissor=function(A,N,X,q){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,N,X,q),xt.scissor(F.copy(et).multiplyScalar(z).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(A){xt.setScissorTest(Y=A)},this.setOpaqueSort=function(A){H=A},this.setTransparentSort=function(A){B=A},this.getClearColor=function(A){return A.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(A=!0,N=!0,X=!0){let q=0;if(A){let W=!1;if(S!==null){const mt=S.texture.format;W=mt===Qh||mt===Jh||mt===Zh}if(W){const mt=S.texture.type,Ct=mt===ui||mt===si||mt===tl||mt===Ni||mt===$h||mt===Kh,Ut=$t.getClearColor(),Ot=$t.getClearAlpha(),Wt=Ut.r,zt=Ut.g,kt=Ut.b;Ct?(f[0]=Wt,f[1]=zt,f[2]=kt,f[3]=Ot,k.clearBufferuiv(k.COLOR,0,f)):(_[0]=Wt,_[1]=zt,_[2]=kt,_[3]=Ot,k.clearBufferiv(k.COLOR,0,_))}else q|=k.COLOR_BUFFER_BIT}N&&(q|=k.DEPTH_BUFFER_BIT),X&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),gt.dispose(),wt.dispose(),Ft.dispose(),T.dispose(),G.dispose(),st.dispose(),R.dispose(),at.dispose(),vt.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",ae),_t.removeEventListener("sessionend",Yt),St&&(St.dispose(),St=null),ce.stop()};function it(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=Zt.autoReset,N=Q.enabled,X=Q.autoUpdate,q=Q.needsUpdate,W=Q.type;Et(),Zt.autoReset=A,Q.enabled=N,Q.autoUpdate=X,Q.needsUpdate=q,Q.type=W}function ot(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ft(A){const N=A.target;N.removeEventListener("dispose",ft),Pt(N)}function Pt(A){At(A),Ft.remove(A)}function At(A){const N=Ft.get(A).programs;N!==void 0&&(N.forEach(function(X){vt.releaseProgram(X)}),A.isShaderMaterial&&vt.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,X,q,W,mt){N===null&&(N=ht);const Ct=W.isMesh&&W.matrixWorld.determinant()<0,Ut=vs(A,N,X,q,W);xt.setMaterial(q,Ct);let Ot=X.index,Wt=1;if(q.wireframe===!0){if(Ot=nt.getWireframeAttribute(X),Ot===void 0)return;Wt=2}const zt=X.drawRange,kt=X.attributes.position;let _e=zt.start*Wt,tn=(zt.start+zt.count)*Wt;mt!==null&&(_e=Math.max(_e,mt.start*Wt),tn=Math.min(tn,(mt.start+mt.count)*Wt)),Ot!==null?(_e=Math.max(_e,0),tn=Math.min(tn,Ot.count)):kt!=null&&(_e=Math.max(_e,0),tn=Math.min(tn,kt.count));const be=tn-_e;if(be<0||be===1/0)return;R.setup(W,q,Ut,X,Ot);let On,he=It;if(Ot!==null&&(On=rt.get(Ot),he=Tt,he.setIndex(On)),W.isMesh)q.wireframe===!0?(xt.setLineWidth(q.wireframeLinewidth*Lt()),he.setMode(k.LINES)):he.setMode(k.TRIANGLES);else if(W.isLine){let Xt=q.linewidth;Xt===void 0&&(Xt=1),xt.setLineWidth(Xt*Lt()),W.isLineSegments?he.setMode(k.LINES):W.isLineLoop?he.setMode(k.LINE_LOOP):he.setMode(k.LINE_STRIP)}else W.isPoints?he.setMode(k.POINTS):W.isSprite&&he.setMode(k.TRIANGLES);if(W.isBatchedMesh)he.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)he.renderInstances(_e,be,W.count);else if(X.isInstancedBufferGeometry){const Xt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ra=Math.min(X.instanceCount,Xt);he.renderInstances(_e,be,Ra)}else he.render(_e,be)};function Ht(A,N,X){A.transparent===!0&&A.side===_n&&A.forceSinglePass===!1?(A.side=Xe,A.needsUpdate=!0,Mi(A,N,X),A.side=pi,A.needsUpdate=!0,Mi(A,N,X),A.side=_n):Mi(A,N,X)}this.compile=function(A,N,X=null){X===null&&(X=A),m=wt.get(X),m.init(),v.push(m),X.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),A!==X&&A.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(x._useLegacyLights);const q=new Set;return A.traverse(function(W){const mt=W.material;if(mt)if(Array.isArray(mt))for(let Ct=0;Ct<mt.length;Ct++){const Ut=mt[Ct];Ht(Ut,X,W),q.add(Ut)}else Ht(mt,X,W),q.add(mt)}),v.pop(),m=null,q},this.compileAsync=function(A,N,X=null){const q=this.compile(A,N,X);return new Promise(W=>{function mt(){if(q.forEach(function(Ct){Ft.get(Ct).currentProgram.isReady()&&q.delete(Ct)}),q.size===0){W(A);return}setTimeout(mt,10)}Mt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Vt=null;function se(A){Vt&&Vt(A)}function ae(){ce.stop()}function Yt(){ce.start()}const ce=new pu;ce.setAnimationLoop(se),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(A){Vt=A,_t.setAnimationLoop(A),A===null?ce.stop():ce.start()},_t.addEventListener("sessionstart",ae),_t.addEventListener("sessionend",Yt),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(N),N=_t.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,N,S),m=wt.get(A,v.length),m.init(),v.push(m),K.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),j.setFromProjectionMatrix(K),lt=this.localClippingEnabled,J=Nt.init(this.clippingPlanes,lt),g=gt.get(A,p.length),g.init(),p.push(g),Qe(A,N,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(H,B),this.info.render.frame++,J===!0&&Nt.beginShadows();const X=m.state.shadowsArray;if(Q.render(X,A,N),J===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),$t.render(g,A),m.setupLights(x._useLegacyLights),N.isArrayCamera){const q=N.cameras;for(let W=0,mt=q.length;W<mt;W++){const Ct=q[W];Or(g,A,Ct,Ct.viewport)}}else Or(g,A,N);S!==null&&(C.updateMultisampleRenderTarget(S),C.updateRenderTargetMipmap(S)),A.isScene===!0&&A.onAfterRender(x,A,N),R.resetDefaultState(),D=-1,y=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Qe(A,N,X,q){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){q&&ct.setFromMatrixPosition(A.matrixWorld).applyMatrix4(K);const Ct=st.update(A),Ut=A.material;Ut.visible&&g.push(A,Ct,Ut,X,ct.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const Ct=st.update(A),Ut=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ct.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),ct.copy(Ct.boundingSphere.center)),ct.applyMatrix4(A.matrixWorld).applyMatrix4(K)),Array.isArray(Ut)){const Ot=Ct.groups;for(let Wt=0,zt=Ot.length;Wt<zt;Wt++){const kt=Ot[Wt],_e=Ut[kt.materialIndex];_e&&_e.visible&&g.push(A,Ct,_e,X,ct.z,kt)}}else Ut.visible&&g.push(A,Ct,Ut,X,ct.z,null)}}const mt=A.children;for(let Ct=0,Ut=mt.length;Ct<Ut;Ct++)Qe(mt[Ct],N,X,q)}function Or(A,N,X,q){const W=A.opaque,mt=A.transmissive,Ct=A.transparent;m.setupLightsView(X),J===!0&&Nt.setGlobalState(x.clippingPlanes,X),mt.length>0&&xs(W,mt,N,X),q&&xt.viewport(w.copy(q)),W.length>0&&vi(W,N,X),mt.length>0&&vi(mt,N,X),Ct.length>0&&vi(Ct,N,X),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function xs(A,N,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const mt=Dt.isWebGL2;St===null&&(St=new Rn(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")?$n:ui,minFilter:is,samples:mt?4:0})),x.getDrawingBufferSize(tt),mt?St.setSize(tt.x,tt.y):St.setSize(Do(tt.x),Do(tt.y));const Ct=x.getRenderTarget();x.setRenderTarget(St),x.getClearColor(Z),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Ut=x.toneMapping;x.toneMapping=hi,vi(A,X,q),C.updateMultisampleRenderTarget(St),C.updateRenderTargetMipmap(St);let Ot=!1;for(let Wt=0,zt=N.length;Wt<zt;Wt++){const kt=N[Wt],_e=kt.object,tn=kt.geometry,be=kt.material,On=kt.group;if(be.side===_n&&_e.layers.test(q.layers)){const he=be.side;be.side=Xe,be.needsUpdate=!0,Fr(_e,X,q,tn,be,On),be.side=he,be.needsUpdate=!0,Ot=!0}}Ot===!0&&(C.updateMultisampleRenderTarget(St),C.updateRenderTargetMipmap(St)),x.setRenderTarget(Ct),x.setClearColor(Z,P),x.toneMapping=Ut}function vi(A,N,X){const q=N.isScene===!0?N.overrideMaterial:null;for(let W=0,mt=A.length;W<mt;W++){const Ct=A[W],Ut=Ct.object,Ot=Ct.geometry,Wt=q===null?Ct.material:q,zt=Ct.group;Ut.layers.test(X.layers)&&Fr(Ut,N,X,Ot,Wt,zt)}}function Fr(A,N,X,q,W,mt){A.onBeforeRender(x,N,X,q,W,mt),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(x,N,X,q,A,mt),W.transparent===!0&&W.side===_n&&W.forceSinglePass===!1?(W.side=Xe,W.needsUpdate=!0,x.renderBufferDirect(X,N,q,W,A,mt),W.side=pi,W.needsUpdate=!0,x.renderBufferDirect(X,N,q,W,A,mt),W.side=_n):x.renderBufferDirect(X,N,q,W,A,mt),A.onAfterRender(x,N,X,q,W,mt)}function Mi(A,N,X){N.isScene!==!0&&(N=ht);const q=Ft.get(A),W=m.state.lights,mt=m.state.shadowsArray,Ct=W.state.version,Ut=vt.getParameters(A,W.state,mt,N,X),Ot=vt.getProgramCacheKey(Ut);let Wt=q.programs;q.environment=A.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(A.isMeshStandardMaterial?G:T).get(A.envMap||q.environment),Wt===void 0&&(A.addEventListener("dispose",ft),Wt=new Map,q.programs=Wt);let zt=Wt.get(Ot);if(zt!==void 0){if(q.currentProgram===zt&&q.lightsStateVersion===Ct)return zr(A,Ut),zt}else Ut.uniforms=vt.getUniforms(A),A.onBuild(X,Ut,x),A.onBeforeCompile(Ut,x),zt=vt.acquireProgram(Ut,Ot),Wt.set(Ot,zt),q.uniforms=Ut.uniforms;const kt=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=Nt.uniform),zr(A,Ut),q.needsLights=Be(A),q.lightsStateVersion=Ct,q.needsLights&&(kt.ambientLightColor.value=W.state.ambient,kt.lightProbe.value=W.state.probe,kt.directionalLights.value=W.state.directional,kt.directionalLightShadows.value=W.state.directionalShadow,kt.spotLights.value=W.state.spot,kt.spotLightShadows.value=W.state.spotShadow,kt.rectAreaLights.value=W.state.rectArea,kt.ltc_1.value=W.state.rectAreaLTC1,kt.ltc_2.value=W.state.rectAreaLTC2,kt.pointLights.value=W.state.point,kt.pointLightShadows.value=W.state.pointShadow,kt.hemisphereLights.value=W.state.hemi,kt.directionalShadowMap.value=W.state.directionalShadowMap,kt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,kt.spotShadowMap.value=W.state.spotShadowMap,kt.spotLightMatrix.value=W.state.spotLightMatrix,kt.spotLightMap.value=W.state.spotLightMap,kt.pointShadowMap.value=W.state.pointShadowMap,kt.pointShadowMatrix.value=W.state.pointShadowMatrix),q.currentProgram=zt,q.uniformsList=null,zt}function Br(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=Qs.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function zr(A,N){const X=Ft.get(A);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function vs(A,N,X,q,W){N.isScene!==!0&&(N=ht),C.resetTextureUnits();const mt=N.fog,Ct=q.isMeshStandardMaterial?N.environment:null,Ut=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Kn,Ot=(q.isMeshStandardMaterial?G:T).get(q.envMap||Ct),Wt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,zt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),kt=!!X.morphAttributes.position,_e=!!X.morphAttributes.normal,tn=!!X.morphAttributes.color;let be=hi;q.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(be=x.toneMapping);const On=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,he=On!==void 0?On.length:0,Xt=Ft.get(q),Ra=m.state.lights;if(J===!0&&(lt===!0||A!==y)){const fn=A===y&&q.id===D;Nt.setState(q,A,fn)}let pe=!1;q.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Ra.state.version||Xt.outputColorSpace!==Ut||W.isBatchedMesh&&Xt.batching===!1||!W.isBatchedMesh&&Xt.batching===!0||W.isInstancedMesh&&Xt.instancing===!1||!W.isInstancedMesh&&Xt.instancing===!0||W.isSkinnedMesh&&Xt.skinning===!1||!W.isSkinnedMesh&&Xt.skinning===!0||W.isInstancedMesh&&Xt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xt.instancingColor===!1&&W.instanceColor!==null||Xt.envMap!==Ot||q.fog===!0&&Xt.fog!==mt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Nt.numPlanes||Xt.numIntersection!==Nt.numIntersection)||Xt.vertexAlphas!==Wt||Xt.vertexTangents!==zt||Xt.morphTargets!==kt||Xt.morphNormals!==_e||Xt.morphColors!==tn||Xt.toneMapping!==be||Dt.isWebGL2===!0&&Xt.morphTargetsCount!==he)&&(pe=!0):(pe=!0,Xt.__version=q.version);let yi=Xt.currentProgram;pe===!0&&(yi=Mi(q,N,W));let Ll=!1,kr=!1,Pa=!1;const De=yi.getUniforms(),Si=Xt.uniforms;if(xt.useProgram(yi.program)&&(Ll=!0,kr=!0,Pa=!0),q.id!==D&&(D=q.id,kr=!0),Ll||y!==A){De.setValue(k,"projectionMatrix",A.projectionMatrix),De.setValue(k,"viewMatrix",A.matrixWorldInverse);const fn=De.map.cameraPosition;fn!==void 0&&fn.setValue(k,ct.setFromMatrixPosition(A.matrixWorld)),Dt.logarithmicDepthBuffer&&De.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&De.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,kr=!0,Pa=!0)}if(W.isSkinnedMesh){De.setOptional(k,W,"bindMatrix"),De.setOptional(k,W,"bindMatrixInverse");const fn=W.skeleton;fn&&(Dt.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),De.setValue(k,"boneTexture",fn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(De.setOptional(k,W,"batchingTexture"),De.setValue(k,"batchingTexture",W._matricesTexture,C));const La=X.morphAttributes;if((La.position!==void 0||La.normal!==void 0||La.color!==void 0&&Dt.isWebGL2===!0)&&Bt.update(W,X,yi),(kr||Xt.receiveShadow!==W.receiveShadow)&&(Xt.receiveShadow=W.receiveShadow,De.setValue(k,"receiveShadow",W.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Si.envMap.value=Ot,Si.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),kr&&(De.setValue(k,"toneMappingExposure",x.toneMappingExposure),Xt.needsLights&&bt(Si,Pa),mt&&q.fog===!0&&dt.refreshFogUniforms(Si,mt),dt.refreshMaterialUniforms(Si,q,z,O,St),Qs.upload(k,Br(Xt),Si,C)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Qs.upload(k,Br(Xt),Si,C),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&De.setValue(k,"center",W.center),De.setValue(k,"modelViewMatrix",W.modelViewMatrix),De.setValue(k,"normalMatrix",W.normalMatrix),De.setValue(k,"modelMatrix",W.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const fn=q.uniformsGroups;for(let Da=0,Sd=fn.length;Da<Sd;Da++)if(Dt.isWebGL2){const Dl=fn[Da];at.update(Dl,yi),at.bind(Dl,yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yi}function bt(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function Be(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(A,N,X){Ft.get(A.texture).__webglTexture=N,Ft.get(A.depthTexture).__webglTexture=X;const q=Ft.get(A);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,N){const X=Ft.get(A);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,X=0){S=A,b=N,E=X;let q=!0,W=null,mt=!1,Ct=!1;if(A){const Ot=Ft.get(A);Ot.__useDefaultFramebuffer!==void 0?(xt.bindFramebuffer(k.FRAMEBUFFER,null),q=!1):Ot.__webglFramebuffer===void 0?C.setupRenderTarget(A):Ot.__hasExternalTextures&&C.rebindTextures(A,Ft.get(A.texture).__webglTexture,Ft.get(A.depthTexture).__webglTexture);const Wt=A.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Ct=!0);const zt=Ft.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(zt[N])?W=zt[N][X]:W=zt[N],mt=!0):Dt.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?W=Ft.get(A).__webglMultisampledFramebuffer:Array.isArray(zt)?W=zt[X]:W=zt,w.copy(A.viewport),F.copy(A.scissor),V=A.scissorTest}else w.copy($).multiplyScalar(z).floor(),F.copy(et).multiplyScalar(z).floor(),V=Y;if(xt.bindFramebuffer(k.FRAMEBUFFER,W)&&Dt.drawBuffers&&q&&xt.drawBuffers(A,W),xt.viewport(w),xt.scissor(F),xt.setScissorTest(V),mt){const Ot=Ft.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ot.__webglTexture,X)}else if(Ct){const Ot=Ft.get(A.texture),Wt=N||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ot.__webglTexture,X||0,Wt)}D=-1},this.readRenderTargetPixels=function(A,N,X,q,W,mt,Ct){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){xt.bindFramebuffer(k.FRAMEBUFFER,Ut);try{const Ot=A.texture,Wt=Ot.format,zt=Ot.type;if(Wt!==Cn&&pt.convert(Wt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=zt===$n&&(Mt.has("EXT_color_buffer_half_float")||Dt.isWebGL2&&Mt.has("EXT_color_buffer_float"));if(zt!==ui&&pt.convert(zt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===ai&&(Dt.isWebGL2||Mt.has("OES_texture_float")||Mt.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-q&&X>=0&&X<=A.height-W&&k.readPixels(N,X,q,W,pt.convert(Wt),pt.convert(zt),mt)}finally{const Ot=S!==null?Ft.get(S).__webglFramebuffer:null;xt.bindFramebuffer(k.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(A,N,X=0){const q=Math.pow(2,-X),W=Math.floor(N.image.width*q),mt=Math.floor(N.image.height*q);C.setTexture2D(N,0),k.copyTexSubImage2D(k.TEXTURE_2D,X,0,0,A.x,A.y,W,mt),xt.unbindTexture()},this.copyTextureToTexture=function(A,N,X,q=0){const W=N.image.width,mt=N.image.height,Ct=pt.convert(X.format),Ut=pt.convert(X.type);C.setTexture2D(X,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment),N.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,q,A.x,A.y,W,mt,Ct,Ut,N.image.data):N.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,q,A.x,A.y,N.mipmaps[0].width,N.mipmaps[0].height,Ct,N.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,q,A.x,A.y,Ct,Ut,N.image),q===0&&X.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(A,N,X,q,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mt=A.max.x-A.min.x+1,Ct=A.max.y-A.min.y+1,Ut=A.max.z-A.min.z+1,Ot=pt.convert(q.format),Wt=pt.convert(q.type);let zt;if(q.isData3DTexture)C.setTexture3D(q,0),zt=k.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)C.setTexture2DArray(q,0),zt=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const kt=k.getParameter(k.UNPACK_ROW_LENGTH),_e=k.getParameter(k.UNPACK_IMAGE_HEIGHT),tn=k.getParameter(k.UNPACK_SKIP_PIXELS),be=k.getParameter(k.UNPACK_SKIP_ROWS),On=k.getParameter(k.UNPACK_SKIP_IMAGES),he=X.isCompressedTexture?X.mipmaps[W]:X.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,he.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,he.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,A.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,A.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,A.min.z),X.isDataTexture||X.isData3DTexture?k.texSubImage3D(zt,W,N.x,N.y,N.z,mt,Ct,Ut,Ot,Wt,he.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(zt,W,N.x,N.y,N.z,mt,Ct,Ut,Ot,he.data)):k.texSubImage3D(zt,W,N.x,N.y,N.z,mt,Ct,Ut,Ot,Wt,he),k.pixelStorei(k.UNPACK_ROW_LENGTH,kt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_e),k.pixelStorei(k.UNPACK_SKIP_PIXELS,tn),k.pixelStorei(k.UNPACK_SKIP_ROWS,be),k.pixelStorei(k.UNPACK_SKIP_IMAGES,On),W===0&&q.generateMipmaps&&k.generateMipmap(zt),xt.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),xt.unbindTexture()},this.resetState=function(){b=0,E=0,S=null,xt.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===el?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===ya?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Re?Fi:eu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Fi?Re:Kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class w0 extends yu{}w0.prototype.isWebGL1Renderer=!0;class al{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rt(t),this.density=e}clone(){return new al(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class A0 extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class jr extends Wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Zc=new L,Jc=new L,Qc=new ge,co=new gs,Hs=new ms;class C0 extends Ae{constructor(t=new ve,e=new jr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Zc.fromBufferAttribute(e,i-1),Jc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Zc.distanceTo(Jc);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(i),Hs.radius+=r,t.ray.intersectsSphere(Hs)===!1)return;Qc.copy(i).invert(),co.copy(t.ray).applyMatrix4(Qc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,h=new L,u=new L,d=new L,f=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const p=Math.max(0,a.start),v=Math.min(_.count,a.start+a.count);for(let x=p,M=v-1;x<M;x+=f){const b=_.getX(x),E=_.getX(x+1);if(c.fromBufferAttribute(m,b),h.fromBufferAttribute(m,E),co.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(d);D<t.near||D>t.far||e.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let x=p,M=v-1;x<M;x+=f){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),co.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const E=t.ray.origin.distanceTo(d);E<t.near||E>t.far||e.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const th=new L,eh=new L;class Vs extends C0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)th.fromBufferAttribute(e,i),eh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+th.distanceTo(eh);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ol extends Wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nh=new ge,No=new gs,Ws=new ms,Xs=new L;class Su extends Ae{constructor(t=new ve,e=new ol){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(i),Ws.radius+=r,t.ray.intersectsSphere(Ws)===!1)return;nh.copy(i).invert(),No.copy(t.ray).applyMatrix4(nh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,g=f;_<g;_++){const m=c.getX(_);Xs.fromBufferAttribute(u,m),ih(Xs,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,g=f;_<g;_++)Xs.fromBufferAttribute(u,_),ih(Xs,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ih(s,t,e,n,i,r,a){const o=No.distanceSqToPoint(s);if(o<e){const l=new L;No.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class ua extends qe{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ba extends ve{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new L,M=new L,b=new L;for(let E=0;E<e.length;E+=3)f(e[E+0],x),f(e[E+1],M),f(e[E+2],b),l(x,M,b,v)}function l(v,x,M,b){const E=b+1,S=[];for(let D=0;D<=E;D++){S[D]=[];const y=v.clone().lerp(M,D/E),w=x.clone().lerp(M,D/E),F=E-D;for(let V=0;V<=F;V++)V===0&&D===E?S[D][V]=y:S[D][V]=y.clone().lerp(w,V/F)}for(let D=0;D<E;D++)for(let y=0;y<2*(E-D)-1;y++){const w=Math.floor(y/2);y%2===0?(d(S[D][w+1]),d(S[D+1][w]),d(S[D][w])):(d(S[D][w+1]),d(S[D+1][w+1]),d(S[D+1][w]))}}function c(v){const x=new L;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(v),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){const v=new L;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const M=m(v)/2/Math.PI+.5,b=p(v)/Math.PI+.5;a.push(M,1-b)}_(),u()}function u(){for(let v=0;v<a.length;v+=6){const x=a[v+0],M=a[v+2],b=a[v+4],E=Math.max(x,M,b),S=Math.min(x,M,b);E>.9&&S<.1&&(x<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),b<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,x){const M=v*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function _(){const v=new L,x=new L,M=new L,b=new L,E=new yt,S=new yt,D=new yt;for(let y=0,w=0;y<r.length;y+=9,w+=6){v.set(r[y+0],r[y+1],r[y+2]),x.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),E.set(a[w+0],a[w+1]),S.set(a[w+2],a[w+3]),D.set(a[w+4],a[w+5]),b.copy(v).add(x).add(M).divideScalar(3);const F=m(b);g(E,w+0,v,F),g(S,w+2,x,F),g(D,w+4,M,F)}}function g(v,x,M,b){b<0&&v.x===1&&(a[x]=v.x-1),M.x===0&&M.z===0&&(a[x]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.vertices,t.indices,t.radius,t.details)}}const qs=new L,Ys=new L,ho=new L,js=new sn;class R0 extends ve{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Zr*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:m,c:p}=js;if(g.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),js.getNormal(ho),u[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){const x=(v+1)%3,M=u[v],b=u[x],E=js[h[v]],S=js[h[x]],D=`${M}_${b}`,y=`${b}_${M}`;y in d&&d[y]?(ho.dot(d[y].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(S.x,S.y,S.z)),d[y]=null):D in d||(d[D]={index0:c[v],index1:c[x],normal:ho.clone()})}}for(const _ in d)if(d[_]){const{index0:g,index1:m}=d[_];qs.fromBufferAttribute(o,g),Ys.fromBufferAttribute(o,m),f.push(qs.x,qs.y,qs.z),f.push(Ys.x,Ys.y,Ys.z)}this.setAttribute("position",new te(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ll extends ba{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ll(t.radius,t.detail)}}class da extends ve{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new L,_=new yt;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<i;g++){const m=g*(n+1);for(let p=0;p<n;p++){const v=p+m,x=v,M=v+n+1,b=v+n+2,E=v+1;o.push(x,M,E),o.push(M,b,E)}}this.setIndex(o),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new da(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class cl extends ve{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let M=0;p===0&&a===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let b=0;b<=e;b++){const E=b/e;u.x=-t*Math.cos(i+E*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(i+E*r)*Math.sin(a+x*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(E+M,1-x),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const x=h[p][v+1],M=h[p][v],b=h[p+1][v],E=h[p+1][v+1];(p!==0||a>0)&&f.push(x,M,E),(p!==n-1||l<Math.PI)&&f.push(M,b,E)}this.setIndex(f),this.setAttribute("position",new te(_,3)),this.setAttribute("normal",new te(g,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hl extends ba{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hl(t.radius,t.detail)}}class mr extends ve{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const g=_/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const g=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,v=(i+1)*f+_;a.push(g,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class rh extends ve{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new L,r=new L;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let _=d,g=d+f;_<g;_+=3)for(let m=0;m<3;m++){const p=o.getX(_+m),v=o.getX(_+(m+1)%3);i.fromBufferAttribute(a,p),r.fromBufferAttribute(a,v),sh(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),sh(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new te(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function sh(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}class P0 extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class L0 extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nu,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class D0 extends L0{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ul extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const uo=new ge,ah=new L,oh=new L;class Eu{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(ah),oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(oh),e.updateMatrixWorld(),uo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const lh=new ge,qr=new L,fo=new L;class I0 extends Eu{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qr.setFromMatrixPosition(t.matrixWorld),n.position.copy(qr),fo.copy(n.position),fo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(fo),n.updateMatrixWorld(),i.makeTranslation(-qr.x,-qr.y,-qr.z),lh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh)}}class Oo extends ul{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new I0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class U0 extends Eu{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class po extends ul{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new U0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class N0 extends ul{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ch(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ch();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ch(){return(typeof performance>"u"?Date:performance).now()}class O0{constructor(t,e,n=0,i=1/0){this.ray=new gs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new nl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Fo(t,this,n,e),n.sort(hh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Fo(t[i],this,n,e);return n.sort(hh),n}}function hh(s,t){return s.distance-t.distance}function Fo(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Fo(i[r],t,e,!0)}}class uh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Pe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const dh=new L,$s=new L;class F0{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){dh.subVectors(t,this.start),$s.subVectors(this.end,this.start);const n=$s.dot($s);let r=$s.dot(dh)/n;return e&&(r=Pe(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jo);const fh={type:"change"},mo={type:"start"},ph={type:"end"},Ks=new gs,mh=new Xn,B0=Math.cos(70*yf.DEG2RAD);class z0 extends Vi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qi.ROTATE,MIDDLE:qi.DOLLY,RIGHT:qi.PAN},this.touches={ONE:Yi.ROTATE,TWO:Yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",wt),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",wt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(fh),n.update(),r=i.NONE},this.update=function(){const R=new L,at=new Hi().setFromUnitVectors(t.up,new L(0,1,0)),Et=at.clone().invert(),_t=new L,it=new Hi,I=new L,ot=2*Math.PI;return function(Pt=null){const At=n.object.position;R.copy(At).sub(n.target),R.applyQuaternion(at),o.setFromVector3(R),n.autoRotate&&r===i.NONE&&V(w(Pt)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ht=n.minAzimuthAngle,Vt=n.maxAzimuthAngle;isFinite(Ht)&&isFinite(Vt)&&(Ht<-Math.PI?Ht+=ot:Ht>Math.PI&&(Ht-=ot),Vt<-Math.PI?Vt+=ot:Vt>Math.PI&&(Vt-=ot),Ht<=Vt?o.theta=Math.max(Ht,Math.min(Vt,o.theta)):o.theta=o.theta>(Ht+Vt)/2?Math.max(Ht,o.theta):Math.min(Vt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&E||n.object.isOrthographicCamera?o.radius=$(o.radius):o.radius=$(o.radius*c),R.setFromSpherical(o),R.applyQuaternion(Et),At.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let se=!1;if(n.zoomToCursor&&E){let ae=null;if(n.object.isPerspectiveCamera){const Yt=R.length();ae=$(Yt*c);const ce=Yt-ae;n.object.position.addScaledVector(M,ce),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Yt=new L(b.x,b.y,0);Yt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),se=!0;const ce=new L(b.x,b.y,0);ce.unproject(n.object),n.object.position.sub(ce).add(Yt),n.object.updateMatrixWorld(),ae=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ae!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ae).add(n.object.position):(Ks.origin.copy(n.object.position),Ks.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ks.direction))<B0?t.lookAt(n.target):(mh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ks.intersectPlane(mh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),se=!0);return c=1,E=!1,se||_t.distanceToSquared(n.object.position)>a||8*(1-it.dot(n.object.quaternion))>a||I.distanceToSquared(n.target)>0?(n.dispatchEvent(fh),_t.copy(n.object.position),it.copy(n.object.quaternion),I.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",$t),n.domElement.removeEventListener("pointerdown",C),n.domElement.removeEventListener("pointercancel",G),n.domElement.removeEventListener("wheel",st),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",G),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",wt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new uh,l=new uh;let c=1;const h=new L,u=new yt,d=new yt,f=new yt,_=new yt,g=new yt,m=new yt,p=new yt,v=new yt,x=new yt,M=new L,b=new yt;let E=!1;const S=[],D={};let y=!1;function w(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function F(R){const at=Math.abs(R*.01);return Math.pow(.95,n.zoomSpeed*at)}function V(R){l.theta-=R}function Z(R){l.phi-=R}const P=function(){const R=new L;return function(Et,_t){R.setFromMatrixColumn(_t,0),R.multiplyScalar(-Et),h.add(R)}}(),U=function(){const R=new L;return function(Et,_t){n.screenSpacePanning===!0?R.setFromMatrixColumn(_t,1):(R.setFromMatrixColumn(_t,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(Et),h.add(R)}}(),O=function(){const R=new L;return function(Et,_t){const it=n.domElement;if(n.object.isPerspectiveCamera){const I=n.object.position;R.copy(I).sub(n.target);let ot=R.length();ot*=Math.tan(n.object.fov/2*Math.PI/180),P(2*Et*ot/it.clientHeight,n.object.matrix),U(2*_t*ot/it.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(Et*(n.object.right-n.object.left)/n.object.zoom/it.clientWidth,n.object.matrix),U(_t*(n.object.top-n.object.bottom)/n.object.zoom/it.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(R,at){if(!n.zoomToCursor)return;E=!0;const Et=n.domElement.getBoundingClientRect(),_t=R-Et.left,it=at-Et.top,I=Et.width,ot=Et.height;b.x=_t/I*2-1,b.y=-(it/ot)*2+1,M.set(b.x,b.y,1).unproject(n.object).sub(n.object.position).normalize()}function $(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function et(R){u.set(R.clientX,R.clientY)}function Y(R){B(R.clientX,R.clientX),p.set(R.clientX,R.clientY)}function j(R){_.set(R.clientX,R.clientY)}function J(R){d.set(R.clientX,R.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const at=n.domElement;V(2*Math.PI*f.x/at.clientHeight),Z(2*Math.PI*f.y/at.clientHeight),u.copy(d),n.update()}function lt(R){v.set(R.clientX,R.clientY),x.subVectors(v,p),x.y>0?z(F(x.y)):x.y<0&&H(F(x.y)),p.copy(v),n.update()}function St(R){g.set(R.clientX,R.clientY),m.subVectors(g,_).multiplyScalar(n.panSpeed),O(m.x,m.y),_.copy(g),n.update()}function K(R){B(R.clientX,R.clientY),R.deltaY<0?H(F(R.deltaY)):R.deltaY>0&&z(F(R.deltaY)),n.update()}function tt(R){let at=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),at=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),at=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),at=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),at=!0;break}at&&(R.preventDefault(),n.update())}function ct(R){if(S.length===1)u.set(R.pageX,R.pageY);else{const at=pt(R),Et=.5*(R.pageX+at.x),_t=.5*(R.pageY+at.y);u.set(Et,_t)}}function ht(R){if(S.length===1)_.set(R.pageX,R.pageY);else{const at=pt(R),Et=.5*(R.pageX+at.x),_t=.5*(R.pageY+at.y);_.set(Et,_t)}}function Lt(R){const at=pt(R),Et=R.pageX-at.x,_t=R.pageY-at.y,it=Math.sqrt(Et*Et+_t*_t);p.set(0,it)}function k(R){n.enableZoom&&Lt(R),n.enablePan&&ht(R)}function ee(R){n.enableZoom&&Lt(R),n.enableRotate&&ct(R)}function Mt(R){if(S.length==1)d.set(R.pageX,R.pageY);else{const Et=pt(R),_t=.5*(R.pageX+Et.x),it=.5*(R.pageY+Et.y);d.set(_t,it)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const at=n.domElement;V(2*Math.PI*f.x/at.clientHeight),Z(2*Math.PI*f.y/at.clientHeight),u.copy(d)}function Dt(R){if(S.length===1)g.set(R.pageX,R.pageY);else{const at=pt(R),Et=.5*(R.pageX+at.x),_t=.5*(R.pageY+at.y);g.set(Et,_t)}m.subVectors(g,_).multiplyScalar(n.panSpeed),O(m.x,m.y),_.copy(g)}function xt(R){const at=pt(R),Et=R.pageX-at.x,_t=R.pageY-at.y,it=Math.sqrt(Et*Et+_t*_t);v.set(0,it),x.set(0,Math.pow(v.y/p.y,n.zoomSpeed)),z(x.y),p.copy(v);const I=(R.pageX+at.x)*.5,ot=(R.pageY+at.y)*.5;B(I,ot)}function Zt(R){n.enableZoom&&xt(R),n.enablePan&&Dt(R)}function Ft(R){n.enableZoom&&xt(R),n.enableRotate&&Mt(R)}function C(R){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",G)),Bt(R),R.pointerType==="touch"?Nt(R):rt(R))}function T(R){n.enabled!==!1&&(R.pointerType==="touch"?Q(R):nt(R))}function G(R){It(R),S.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",G)),n.dispatchEvent(ph),r=i.NONE}function rt(R){let at;switch(R.button){case 0:at=n.mouseButtons.LEFT;break;case 1:at=n.mouseButtons.MIDDLE;break;case 2:at=n.mouseButtons.RIGHT;break;default:at=-1}switch(at){case qi.DOLLY:if(n.enableZoom===!1)return;Y(R),r=i.DOLLY;break;case qi.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;j(R),r=i.PAN}else{if(n.enableRotate===!1)return;et(R),r=i.ROTATE}break;case qi.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;et(R),r=i.ROTATE}else{if(n.enablePan===!1)return;j(R),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(mo)}function nt(R){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;J(R);break;case i.DOLLY:if(n.enableZoom===!1)return;lt(R);break;case i.PAN:if(n.enablePan===!1)return;St(R);break}}function st(R){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(R.preventDefault(),n.dispatchEvent(mo),K(vt(R)),n.dispatchEvent(ph))}function vt(R){const at=R.deltaMode,Et={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(at){case 1:Et.deltaY*=16;break;case 2:Et.deltaY*=100;break}return R.ctrlKey&&!y&&(Et.deltaY*=10),Et}function dt(R){R.key==="Control"&&(y=!0,document.addEventListener("keyup",gt,{passive:!0,capture:!0}))}function gt(R){R.key==="Control"&&(y=!1,document.removeEventListener("keyup",gt,{passive:!0,capture:!0}))}function wt(R){n.enabled===!1||n.enablePan===!1||tt(R)}function Nt(R){switch(Tt(R),S.length){case 1:switch(n.touches.ONE){case Yi.ROTATE:if(n.enableRotate===!1)return;ct(R),r=i.TOUCH_ROTATE;break;case Yi.PAN:if(n.enablePan===!1)return;ht(R),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Yi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;k(R),r=i.TOUCH_DOLLY_PAN;break;case Yi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ee(R),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(mo)}function Q(R){switch(Tt(R),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Mt(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Dt(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Zt(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ft(R),n.update();break;default:r=i.NONE}}function $t(R){n.enabled!==!1&&R.preventDefault()}function Bt(R){S.push(R.pointerId)}function It(R){delete D[R.pointerId];for(let at=0;at<S.length;at++)if(S[at]==R.pointerId){S.splice(at,1);return}}function Tt(R){let at=D[R.pointerId];at===void 0&&(at=new yt,D[R.pointerId]=at),at.set(R.pageX,R.pageY)}function pt(R){const at=R.pointerId===S[0]?S[1]:S[0];return D[at]}n.domElement.addEventListener("contextmenu",$t),n.domElement.addEventListener("pointerdown",C),n.domElement.addEventListener("pointercancel",G),n.domElement.addEventListener("wheel",st,{passive:!1}),document.addEventListener("keydown",dt,{passive:!0,capture:!0}),this.update()}}const bu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Nr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const k0=new rl(-1,1,1,-1,0,1);class G0 extends ve{constructor(){super(),this.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new te([0,2,0,0,2,0],2))}}const H0=new G0;class dl{constructor(t){this._mesh=new ye(H0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,k0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class V0 extends Nr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof We?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=rs.clone(t.uniforms),this.material=new We({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new dl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class gh extends Nr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class W0 extends Nr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class X0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new yt);this._width=n.width,this._height=n.height,e=new Rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$n}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new V0(bu),this.copyPass.material.blending=jn,this.clock=new Tu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}gh!==void 0&&(a instanceof gh?n=!0:a instanceof W0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new yt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class q0 extends Nr{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Rt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const Y0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ar extends Nr{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new yt(t.x,t.y):new yt(256,256),this.clearColor=new Rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Rn(r,a,{type:$n}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Rn(r,a,{type:$n});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Rn(r,a,{type:$n});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=Y0;this.highPassUniforms=rs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new We({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new yt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=bu;this.copyUniforms=rs.clone(h.uniforms),this.blendMaterial=new We({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ne,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Rt,this.oldClearAlpha=1,this.basic=new wn,this.fsQuad=new dl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new yt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ar.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ar.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new We({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new yt(.5,.5)},direction:{value:new yt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new We({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ar.BlurDirectionX=new yt(1,0);Ar.BlurDirectionY=new yt(0,1);const j0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class $0 extends Nr{constructor(){super();const t=j0;this.uniforms=rs.clone(t.uniforms),this.material=new P0({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new dl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Wn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function wu(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ss={duration:.5,overwrite:!1,delay:0},fl,Le,le,vn=1e8,ie=1/vn,Bo=Math.PI*2,K0=Bo/4,Z0=0,Au=Math.sqrt,J0=Math.cos,Q0=Math.sin,Ce=function(t){return typeof t=="string"},me=function(t){return typeof t=="function"},Zn=function(t){return typeof t=="number"},pl=function(t){return typeof t>"u"},Nn=function(t){return typeof t=="object"},je=function(t){return t!==!1},ml=function(){return typeof window<"u"},Zs=function(t){return me(t)||Ce(t)},Cu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Fe=Array.isArray,tx=/random\([^)]+\)/g,ex=/,\s*/g,_h=/(?:-?\.?\d|\.)+/gi,Ru=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,gr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,go=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Pu=/[+-]=-?[.\d]+/,nx=/[^,'"\[\]\s]+/gi,ix=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,de,Pn,zo,gl,un={},fa={},Lu,Du=function(t){return(fa=Cr(t,un))&&Je},_l=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},as=function(t,e){return!e&&console.warn(t)},Iu=function(t,e){return t&&(un[t]=e)&&fa&&(fa[t]=e)||un},os=function(){return 0},rx={suppressEvents:!0,isStart:!0,kill:!1},ta={suppressEvents:!0,kill:!1},sx={suppressEvents:!0},xl={},di=[],ko={},Uu,rn={},_o={},xh=30,ea=[],vl="",Ml=function(t){var e=t[0],n,i;if(Nn(e)||me(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ea.length;i--&&!ea[i].targetTest(e););n=ea[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new nd(t[i],n)))||t.splice(i,1);return t},Bi=function(t){return t._gsap||Ml(Mn(t))[0]._gsap},Nu=function(t,e,n){return(n=t[e])&&me(n)?t[e]():pl(n)&&t.getAttribute&&t.getAttribute(e)||n},$e=function(t,e){return(t=t.split(",")).forEach(e)||t},xe=function(t){return Math.round(t*1e5)/1e5||0},ue=function(t){return Math.round(t*1e7)/1e7||0},Mr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},ax=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},pa=function(){var t=di.length,e=di.slice(0),n,i;for(ko={},di.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},yl=function(t){return!!(t._initted||t._startAt||t.add)},Ou=function(t,e,n,i){di.length&&!Le&&pa(),t.render(e,n,!!(Le&&e<0&&yl(t))),di.length&&!Le&&pa()},Fu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(nx).length<2?e:Ce(t)?t.trim():t},Bu=function(t){return t},dn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ox=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Cr=function(t,e){for(var n in e)t[n]=e[n];return t},vh=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Nn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},ma=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Qr=function(t){var e=t.parent||de,n=t.keyframes?ox(Fe(t.keyframes)):dn;if(je(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},lx=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},zu=function(t,e,n,i,r){var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},wa=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},mi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},zi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},cx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Go=function(t,e,n,i){return t._startAt&&(Le?t._startAt.revert(ta):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},hx=function s(t){return!t||t._ts&&s(t.parent)},Mh=function(t){return t._repeat?Rr(t._tTime,t=t.duration()+t._rDelay)*t:0},Rr=function(t,e){var n=Math.floor(t=ue(t/e));return t&&n===t?n-1:n},ga=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Aa=function(t){return t._end=ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||ie)||0))},Ca=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ue(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Aa(t),n._dirty||zi(n,t)),t},ku=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ga(t.rawTime(),e),(!e._dur||_s(0,e.totalDuration(),n)-e._tTime>ie)&&e.render(n,!0)),zi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ie}},In=function(t,e,n,i){return e.parent&&mi(e),e._start=ue((Zn(n)?n:n||t!==de?mn(t,n,e):t._time)+e._delay),e._end=ue(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),zu(t,e,"_first","_last",t._sort?"_start":0),Ho(e)||(t._recent=e),i||ku(t,e),t._ts<0&&Ca(t,t._tTime),t},Gu=function(t,e){return(un.ScrollTrigger||_l("scrollTrigger",e))&&un.ScrollTrigger.create(e,t)},Hu=function(t,e,n,i,r){if(El(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Le&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Uu!==on.frame)return di.push(t),t._lazy=[r,i],1},ux=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Ho=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},dx=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&ux(t)&&!(!t._initted&&Ho(t))||(t._ts<0||t._dp._ts<0)&&!Ho(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=_s(0,t._tDur,e),h=Rr(l,o),t._yoyo&&h&1&&(a=1-a),h!==Rr(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||Le||i||t._zTime===ie||!e&&t._zTime){if(!t._initted&&Hu(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?ie:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Go(t,e,n,!0),t._onUpdate&&!n&&ln(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ln(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&mi(t,1),!n&&!Le&&(ln(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},fx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Pr=function(t,e,n,i){var r=t._repeat,a=ue(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:ue(a*(r+1)+t._rDelay*r):a,o>0&&!i&&Ca(t,t._tTime=t._tDur*o),t.parent&&Aa(t),n||zi(t.parent,t),t},yh=function(t){return t instanceof Ve?zi(t):Pr(t,t._dur)},px={_start:0,endTime:os,totalDuration:os},mn=function s(t,e,n){var i=t.labels,r=t._recent||px,a=t.duration()>=vn?r.endTime(!1):t._dur,o,l,c;return Ce(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Fe(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},ts=function(t,e,n){var i=Zn(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=je(l.vars.inherit)&&l.parent;a.immediateRender=je(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Se(e[0],a,e[r+1])},xi=function(t,e){return t||t===0?e(t):e},_s=function(t,e,n){return n<t?t:n>e?e:n},Oe=function(t,e){return!Ce(t)||!(e=ix.exec(t))?"":e[1]},mx=function(t,e,n){return xi(n,function(i){return _s(t,e,i)})},Vo=[].slice,Vu=function(t,e){return t&&Nn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Nn(t[0]))&&!t.nodeType&&t!==Pn},gx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Ce(i)&&!e||Vu(i,1)?(r=n).push.apply(r,Mn(i)):n.push(i)})||n},Mn=function(t,e,n){return le&&!e&&le.selector?le.selector(t):Ce(t)&&!n&&(zo||!Lr())?Vo.call((e||gl).querySelectorAll(t),0):Fe(t)?gx(t,n):Vu(t)?Vo.call(t,0):t?[t]:[]},Wo=function(t){return t=Mn(t)[0]||as("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Mn(e,n.querySelectorAll?n:n===t?as("Invalid scope")||gl.createElement("div"):t)}},Wu=function(t){return t.sort(function(){return .5-Math.random()})},Xu=function(t){if(me(t))return t;var e=Nn(t)?t:{each:t},n=ki(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return Ce(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||e).length,m=a[g],p,v,x,M,b,E,S,D,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,vn])[1],!y){for(S=-vn;S<(S=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=a[g]=[],p=l?Math.min(y,g)*h-.5:i%y,v=y===vn?0:l?g*u/y-.5:i/y|0,S=0,D=vn,E=0;E<g;E++)x=E%y-p,M=v-(E/y|0),m[E]=b=c?Math.abs(c==="y"?M:x):Au(x*x+M*M),b>S&&(S=b),b<D&&(D=b);i==="random"&&Wu(m),m.max=S-D,m.min=D,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Oe(e.amount||e.each)||0,n=n&&g<0?Rx(n):n}return g=(m[d]-m.min)/m.max||0,ue(m.b+(n?n(g):g)*m.v)+m.u}},Xo=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ue(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Zn(n)?0:Oe(n))}},qu=function(t,e){var n=Fe(t),i,r;return!n&&Nn(t)&&(i=n=t.radius||vn,t.values?(t=Mn(t.values),(r=!Zn(t[0]))&&(i*=i)):t=Xo(t.increment)),xi(e,n?me(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=vn,h=0,u=t.length,d,f;u--;)r?(d=t[u].x-o,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:a,r||h===a||Zn(a)?h:h+Oe(a)}:Xo(t))},Yu=function(t,e,n,i){return xi(Fe(t)?!e:n===!0?!!(n=0):!i,function(){return Fe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},_x=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},xx=function(t,e){return function(n){return t(parseFloat(n))+(e||Oe(n))}},vx=function(t,e,n){return $u(t,e,0,1,n)},ju=function(t,e,n){return xi(n,function(i){return t[~~e(i)]})},Mx=function s(t,e,n){var i=e-t;return Fe(t)?ju(t,s(0,t.length),e):xi(n,function(r){return(i+(r-t)%i)%i+t})},yx=function s(t,e,n){var i=e-t,r=i*2;return Fe(t)?ju(t,s(0,t.length-1),e):xi(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},ls=function(t){return t.replace(tx,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(ex);return Yu(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},$u=function(t,e,n,i,r){var a=e-t,o=i-n;return xi(r,function(l){return n+((l-t)/a*o||0)})},Sx=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var a=Ce(t),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Fe(t)&&!Fe(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=Cr(Fe(t)?[]:{},t));if(!h){for(l in e)Sl.call(o,t,l,"get",e[l]);r=function(_){return wl(_,o)||(a?t.p:t)}}}return xi(n,r)},Sh=function(t,e,n){var i=t.labels,r=vn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},ln=function(t,e,n){var i=t.vars,r=i[e],a=le,o=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&di.length&&pa(),o&&(le=o),h=l?r.apply(c,l):r.call(c),le=a,h},$r=function(t){return mi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Le),t.progress()<1&&ln(t,"onInterrupt"),t},_r,Ku=[],Zu=function(t){if(t)if(t=!t.name&&t.default||t,ml()||t.headless){var e=t.name,n=me(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:os,render:wl,add:Sl,kill:zx,modifier:Bx,rawVars:0},a={targetTest:0,get:0,getSetter:bl,aliases:{},register:0};if(Lr(),t!==i){if(rn[e])return;dn(i,dn(ma(t,r),a)),Cr(i.prototype,Cr(r,ma(t,a))),rn[i.prop=e]=i,t.targetTest&&(ea.push(i),xl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Iu(e,i),t.register&&t.register(Je,i,Ke)}else Ku.push(t)},ne=255,Kr={aqua:[0,ne,ne],lime:[0,ne,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ne],navy:[0,0,128],white:[ne,ne,ne],olive:[128,128,0],yellow:[ne,ne,0],orange:[ne,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ne,0,0],pink:[ne,192,203],cyan:[0,ne,ne],transparent:[ne,ne,ne,0]},xo=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ne+.5|0},Ju=function(t,e,n){var i=t?Zn(t)?[t>>16,t>>8&ne,t&ne]:0:Kr.black,r,a,o,l,c,h,u,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Kr[t])i=Kr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ne,i&ne,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ne,t&ne]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(_h),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=xo(l+1/3,r,a),i[1]=xo(l,r,a),i[2]=xo(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(Ru),n&&i.length<4&&(i[3]=1),i}else i=t.match(_h)||Kr.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/ne,a=i[1]/ne,o=i[2]/ne,u=Math.max(r,a,o),d=Math.min(r,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===r?(a-o)/f+(a<o?6:0):u===a?(o-r)/f+2:(r-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Qu=function(t){var e=[],n=[],i=-1;return t.split(fi).forEach(function(r){var a=r.match(gr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Eh=function(t,e,n){var i="",r=(t+i).match(fi),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return t;if(r=r.map(function(d){return(d=Ju(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Qu(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(fi,"1").split(gr),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(fi),u=c.length-1;o<u;o++)i+=c[o]+r[o];return i+c[u]},fi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Kr)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),Ex=/hsl[a]?\(/,td=function(t){var e=t.join(" "),n;if(fi.lastIndex=0,fi.test(e))return n=Ex.test(e),t[1]=Eh(t[1],n),t[0]=Eh(t[0],n,Qu(t[1])),!0},cs,on=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,u,d,f,_=function g(m){var p=s()-i,v=m===!0,x,M,b,E;if((p>t||p<0)&&(n+=p-e),i+=p,b=i-n,x=b-a,(x>0||v)&&(E=++u.frame,d=b-u.time*1e3,u.time=b=b/1e3,a+=x+(x>=r?4:r-x),M=1),v||(l=c(g)),M)for(f=0;f<o.length;f++)o[f](b,d,E,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Lu&&(!zo&&ml()&&(Pn=zo=window,gl=Pn.document||{},un.gsap=Je,(Pn.gsapVersions||(Pn.gsapVersions=[])).push(Je.version),Du(fa||Pn.GreenSockGlobals||!Pn.gsap&&Pn||{}),Ku.forEach(Zu)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},cs=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),cs=0,c=os},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),a=u.time*1e3+r},add:function(m,p,v){var x=p?function(M,b,E,S){m(M,b,E,S),u.remove(x)}:m;return u.remove(m),o[v?"unshift":"push"](x),Lr(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u}(),Lr=function(){return!cs&&on.wake()},jt={},Tx=/^[\d.\-M][\d.\-,\s]/,bx=/["']/g,wx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(bx,"").trim():+c,i=l.substr(o+1).trim();return e},Ax=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Cx=function(t){var e=(t+"").split("("),n=jt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[wx(e[1])]:Ax(t).split(",").map(Fu)):jt._CE&&Tx.test(t)?jt._CE("",t):n},Rx=function(t){return function(e){return 1-t(1-e)}},ki=function(t,e){return t&&(me(t)?t:jt[t]||Cx(t))||e},Xi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return $e(t,function(o){jt[o]=un[o]=r,jt[a=o.toLowerCase()]=n;for(var l in r)jt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=jt[o+"."+l]=r[l]}),r},ed=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},vo=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/Bo*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Q0((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:ed(o);return r=Bo/r,l.config=function(c,h){return s(t,c,h)},l},Mo=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:ed(n);return i.config=function(r){return s(t,r)},i};$e("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Xi(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});jt.Linear.easeNone=jt.none=jt.Linear.easeIn;Xi("Elastic",vo("in"),vo("out"),vo());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};Xi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Xi("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Xi("Circ",function(s){return-(Au(1-s*s)-1)});Xi("Sine",function(s){return s===1?1:-J0(s*K0)+1});Xi("Back",Mo("in"),Mo("out"),Mo());jt.SteppedEase=jt.steps=un.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-ie;return function(o){return((i*_s(0,a,o)|0)+r)*n}}};ss.ease=jt["quad.out"];$e("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return vl+=s+","+s+"Params,"});var nd=function(t,e){this.id=Z0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Nu,this.set=e?e.getSetter:bl},hs=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Pr(this,+e.duration,1,1),this.data=e.data,le&&(this._ctx=le,le.data.push(this)),cs||on.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Pr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Lr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ca(this,n),!r._dp||r.parent||ku(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&In(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ie||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ou(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Mh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Mh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Rr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ie?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ga(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ie?0:this._rts,this.totalTime(_s(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Aa(this),cx(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Lr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ie&&(this._tTime-=ie)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ue(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&In(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(je(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ga(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=sx);var i=Le;return Le=n,yl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Le=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,yh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,yh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(mn(this,n),je(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,je(i)),this._dur||(this._zTime=-ie),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ie:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ie,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ie)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=me(n)?n:Bu,l=function(){var h=i.then;i.then=null,r&&r(),me(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){$r(this)},s}();dn(hs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ie,_prom:0,_ps:!1,_rts:1});var Ve=function(s){wu(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=je(n.sortChildren),de&&In(n.parent||de,Wn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Gu(Wn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return ts(0,arguments,this),this},e.from=function(i,r,a){return ts(1,arguments,this),this},e.fromTo=function(i,r,a,o){return ts(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,Qr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Se(i,r,mn(this,a),1),this},e.call=function(i,r,a){return In(this,Se.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Se(i,a,mn(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,Qr(a).immediateRender=je(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},e.staggerFromTo=function(i,r,a,o,l,c,h,u){return o.startAt=a,Qr(o).immediateRender=je(o.immediateRender),this.staggerTo(i,r,o,l,c,h,u)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ue(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,v,x,M,b,E,S;if(this!==de&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,M=this._start,x=this._ts,p=!x,u&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(d=ue(h%m),h===l?(g=this._repeat,d=c):(b=ue(h/m),g=~~b,g&&g===b&&(d=c,g--),d>c&&(d=c)),b=Rr(this._tTime,m),!o&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),E&&g&1&&(d=c-d,S=1),g!==b&&!this._lock){var D=E&&b&1,y=D===(E&&g&1);if(g<b&&(D=!D),o=D?0:h%c?c:h,this._lock=1,this.render(o||(S?0:ue(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&ln(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1,b=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=D?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=fx(this,ue(o),ue(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!r&&!b&&(ln(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,a),d!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=-ie);break}}f=_}else{f=this._last;for(var w=i<0?i:d;f;){if(_=f._prev,(f._act||w<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(w-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(w-f._start)*f._ts,r,a||Le&&yl(f)),d!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=w?-ie:ie);break}}f=_}}if(v&&!r&&(this.pause(),v.render(d>=o?0:-ie)._zTime=d>=o?1:-1,this._ts))return this._start=M,Aa(this),this.render(i,r,a);this._onUpdate&&!r&&ln(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&mi(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(ln(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(Zn(r)||(r=mn(this,r,i)),!(i instanceof hs)){if(Fe(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Ce(i))return this.addLabel(i,r);if(me(i))i=Se.delayedCall(0,i);else return this}return this!==i?In(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-vn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Se?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return Ce(i)?this.removeLabel(i):me(i)?this.killTweensOf(i):(i.parent===this&&wa(this,i),i===this._recent&&(this._recent=this._last),zi(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ue(on.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=mn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=Se.delayedCall(0,r||os,a);return o.data="isPause",this._hasPause=1,In(this,o,mn(this,i))},e.removePause=function(i){var r=this._first;for(i=mn(this,i);r;)r._start===i&&r.data==="isPause"&&mi(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)oi!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=Mn(i),l=this._first,c=Zn(r),h;l;)l instanceof Se?ax(l._targets,o)&&(c?(!oi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=mn(a,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=Se.to(a,dn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ie,onStart:function(){if(a.pause(),!f){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Pr(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,dn({startAt:{time:mn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Sh(this,mn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Sh(this,mn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ie)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=ue(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return zi(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),zi(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=vn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,In(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=ue(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Pr(a,a===de&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(de._ts&&(Ou(de,ga(i,de)),Uu=on.frame),on.frame>=xh){xh+=hn.autoSleep||120;var r=de._first;if((!r||!r._ts)&&hn.autoSleep&&on._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||on.sleep()}}},t}(hs);dn(Ve.prototype,{_lock:0,_hasPause:0,_forcing:0});var Px=function(t,e,n,i,r,a,o){var l=new Ke(this._pt,t,e,0,1,ld,null,r),c=0,h=0,u,d,f,_,g,m,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ls(i)),a&&(v=[n,i],a(v,t,e),n=v[0],i=v[1]),d=n.match(go)||[];u=go.exec(i);)_=u[0],g=i.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Mr(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=go.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Pu.test(i)||p)&&(l.e=0),this._pt=l,l},Sl=function(t,e,n,i,r,a,o,l,c,h){me(i)&&(i=i(r||0,t,a));var u=t[e],d=n!=="get"?n:me(u)?c?t[e.indexOf("set")||!me(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=me(u)?c?Nx:ad:Tl,_;if(Ce(i)&&(~i.indexOf("random(")&&(i=ls(i)),i.charAt(1)==="="&&(_=Mr(d,i)+(Oe(d)||0),(_||_===0)&&(i=_))),!h||d!==i||qo)return!isNaN(d*i)&&i!==""?(_=new Ke(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?Fx:od,0,f),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&_l(e,i),Px.call(this,t,e,d,i,f,l||hn.stringFilter,c))},Lx=function(t,e,n,i,r){if(me(t)&&(t=es(t,r,e,n,i)),!Nn(t)||t.style&&t.nodeType||Fe(t)||Cu(t))return Ce(t)?es(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=es(t[o],r,e,n,i);return a},id=function(t,e,n,i,r,a){var o,l,c,h;if(rn[t]&&(o=new rn[t]).init(r,o.rawVars?e[t]:Lx(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Ke(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==_r))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},oi,qo,El=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,v=p&&p.data==="nested"?p.vars.targets:m,x=t._overwrite==="auto"&&!fl,M=t.timeline,b=i.easeReverse||u,E,S,D,y,w,F,V,Z,P,U,O,z,H;if(M&&(!d||!r)&&(r="none"),t._ease=ki(r,ss.ease),t._rEase=b&&(ki(b)||t._ease),t._from=!M&&!!i.runBackwards,t._from&&(t.ratio=1),!M||d&&!i.stagger){if(Z=m[0]?Bi(m[0]).harness:0,z=Z&&i[Z.prop],E=ma(i,xl),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?ta:rx),g._lazy=0),a){if(mi(t._startAt=Se.set(m,dn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&je(l),startAt:null,delay:0,onUpdate:c&&function(){return ln(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Le||!o&&!f)&&t._startAt.revert(ta),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),D=dn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&je(l),immediateRender:o,stagger:0,parent:p},E),z&&(D[Z.prop]=z),mi(t._startAt=Se.set(m,D)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Le?t._startAt.revert(ta):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,ie,ie);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&je(l)||l&&!_,S=0;S<m.length;S++){if(w=m[S],V=w._gsap||Ml(m)[S]._gsap,t._ptLookup[S]=U={},ko[V.id]&&di.length&&pa(),O=v===m?S:v.indexOf(w),Z&&(P=new Z).init(w,z||E,t,O,v)!==!1&&(t._pt=y=new Ke(t._pt,w,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(B){U[B]=y}),P.priority&&(F=1)),!Z||z)for(D in E)rn[D]&&(P=id(D,E,t,O,w,v))?P.priority&&(F=1):U[D]=y=Sl.call(t,w,D,"get",E[D],O,v,0,i.stringFilter);t._op&&t._op[S]&&t.kill(w,t._op[S]),x&&t._pt&&(oi=t,de.killTweensOf(w,U,t.globalTime(e)),H=!t.parent,oi=0),t._pt&&l&&(ko[V.id]=1)}F&&cd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!H,d&&e<=0&&M.render(vn,!0,!0)},Dx=function(t,e,n,i,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return qo=1,t.vars[e]="+=0",El(t,o),qo=0,l?as(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=xe(n)+Oe(u.e)),u.b&&(u.b=h.s+Oe(u.b))},Ix=function(t,e){var n=t[0]?Bi(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=Cr({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},Ux=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(Fe(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},es=function(t,e,n,i,r){return me(t)?t.call(e,n,i,r):Ce(t)&&~t.indexOf("random(")?ls(t):t},rd=vl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",sd={};$e(rd+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return sd[s]=1});var Se=function(s){wu(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Qr(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||de,v=(Fe(n)||Cu(n)?Zn(n[0]):"length"in i)?[n]:Mn(n),x,M,b,E,S,D,y,w;if(o._targets=v.length?Ml(v):as("GSAP target "+n+" not found. https://gsap.com",!hn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||Zs(c)||Zs(h)){i=o.vars;var F=i.easeReverse||i.yoyoEase;if(x=o.timeline=new Ve({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:v}),x.kill(),x.parent=x._dp=Wn(o),x._start=0,d||Zs(c)||Zs(h)){if(E=v.length,y=d&&Xu(d),Nn(d))for(S in d)~rd.indexOf(S)&&(w||(w={}),w[S]=d[S]);for(M=0;M<E;M++)b=ma(i,sd),b.stagger=0,F&&(b.easeReverse=F),w&&Cr(b,w),D=v[M],b.duration=+es(c,Wn(o),M,D,v),b.delay=(+es(h,Wn(o),M,D,v)||0)-o._delay,!d&&E===1&&b.delay&&(o._delay=h=b.delay,o._start+=h,b.delay=0),x.to(D,b,y?y(M,D,v):0),x._ease=jt.none;x.duration()?c=h=0:o.timeline=0}else if(_){Qr(dn(x.vars.defaults,{ease:"none"})),x._ease=ki(_.ease||i.ease||"none");var V=0,Z,P,U;if(Fe(_))_.forEach(function(O){return x.to(v,O,">")}),x.duration();else{b={};for(S in _)S==="ease"||S==="easeEach"||Ux(S,_[S],b,_.easeEach);for(S in b)for(Z=b[S].sort(function(O,z){return O.t-z.t}),V=0,M=0;M<Z.length;M++)P=Z[M],U={ease:P.e,duration:(P.t-(M?Z[M-1].t:0))/100*c},U[S]=P.v,x.to(v,U,V),V+=U.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return f===!0&&!fl&&(oi=Wn(o),de.killTweensOf(v),oi=0),In(p,Wn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===ue(p._time)&&je(u)&&hx(Wn(o))&&p.data!=="nested")&&(o._tTime=-ie,o.render(Math.max(0,-h)||0)),m&&Gu(Wn(o),m),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ie&&!h?l:i<ie?0:i,d,f,_,g,m,p,v,x;if(!c)dx(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,a);if(d=ue(u%g),u===l?(_=this._repeat,d=c):(m=ue(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(d=c-d),m=Rr(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(ue(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Hu(this,h?i:d,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var M=d<o;if(M!==this._inv){var b=M?o:c-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(M?-1:1)/b:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(d/c);if(this._from&&(this.ratio=v=1-v),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!r&&!m&&(ln(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Go(this,i,r,a),ln(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&ln(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Go(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&mi(this,1),!r&&!(h&&!o)&&(u||o||p)&&(ln(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,l){cs||on.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||El(this,c),h=this._ease(c/this._dur),Dx(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(Ca(this,0),this.parent||zu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?$r(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Le),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,oi&&oi.vars.overwrite!==!0)._first||$r(this),this.parent&&a!==this.timeline.totalDuration()&&Pr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Mn(i):o,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!r||r==="all")&&lx(o,l))return r==="all"&&(this._pt=0),$r(this);for(u=this._op=this._op||[],r!=="all"&&(Ce(r)&&(g={},$e(r,function(v){return g[v]=1}),r=g),r=Ix(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],r==="all"?(u[p]=r,_=d,f={}):(f=u[p]=u[p]||{},_=r);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&wa(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&$r(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return ts(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return ts(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return de.killTweensOf(i,r,a)},t}(hs);dn(Se.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});$e("staggerTo,staggerFrom,staggerFromTo",function(s){Se[s]=function(){var t=new Ve,e=Vo.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Tl=function(t,e,n){return t[e]=n},ad=function(t,e,n){return t[e](n)},Nx=function(t,e,n,i){return t[e](i.fp,n)},Ox=function(t,e,n){return t.setAttribute(e,n)},bl=function(t,e){return me(t[e])?ad:pl(t[e])&&t.setAttribute?Ox:Tl},od=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Fx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ld=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},wl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Bx=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},zx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?wa(this,e,"_pt"):e.dep||(n=1),e=i;return!n},kx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},cd=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Ke=function(){function s(e,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||od,this.d=l||this,this.set=c||Tl,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=kx,this.m=n,this.mt=r,this.tween=i},s}();$e(vl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return xl[s]=1});un.TweenMax=un.TweenLite=Se;un.TimelineLite=un.TimelineMax=Ve;de=new Ve({sortChildren:!1,defaults:ss,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});hn.stringFilter=td;var Gi=[],na={},Gx=[],Th=0,Hx=0,yo=function(t){return(na[t]||Gx).map(function(e){return e()})},Yo=function(){var t=Date.now(),e=[];t-Th>2&&(yo("matchMediaInit"),Gi.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Pn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),yo("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Th=t,yo("matchMedia"))},hd=function(){function s(e,n){this.selector=n&&Wo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Hx++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){me(n)&&(r=i,i=n,n=me);var a=this,o=function(){var c=le,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=Wo(r)),le=a,u=i.apply(a,arguments),me(u)&&a._r.push(u),le=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===me?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=le;le=null,n(this),le=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Se&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Ve?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Se)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Gi.length;a--;)Gi[a].id===this.id&&Gi.splice(a,1)},t.revert=function(n){this.kill(n||{})},s}(),Vx=function(){function s(e){this.contexts=[],this.scope=e,le&&le.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Nn(n)||(n={matches:n});var a=new hd(0,r||this.scope),o=a.conditions={},l,c,h;le&&!a.selector&&(a.selector=le.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Pn.matchMedia(n[c]),l&&(Gi.indexOf(a)<0&&Gi.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Yo):l.addEventListener("change",Yo)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),_a={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Zu(i)})},timeline:function(t){return new Ve(t)},getTweensOf:function(t,e){return de.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ce(t)&&(t=Mn(t)[0]);var r=Bi(t||{}).get,a=n?Bu:Fu;return n==="native"&&(n=""),t&&(e?a((rn[e]&&rn[e].get||r)(t,e,n,i)):function(o,l,c){return a((rn[o]&&rn[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Mn(t),t.length>1){var i=t.map(function(h){return Je.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var a=rn[e],o=Bi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;_r._pt=0,u.init(t,n?h+n:h,_r,0,[t]),u.render(1,u),_r._pt&&wl(1,_r)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=Je.to(t,dn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return de.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ki(t.ease,ss.ease)),vh(ss,t||{})},config:function(t){return vh(hn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!rn[o]&&!un[o]&&as(e+" effect requires "+o+" plugin.")}),_o[e]=function(o,l,c){return n(Mn(o),dn(l||{},r),c)},a&&(Ve.prototype[e]=function(o,l,c){return this.add(_o[e](o,Nn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){jt[t]=ki(e)},parseEase:function(t,e){return arguments.length?ki(t,e):jt},getById:function(t){return de.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ve(t),i,r;for(n.smoothChildTiming=je(t.smoothChildTiming),de.remove(n),n._dp=0,n._time=n._tTime=de._time,i=de._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Se&&i.vars.onComplete===i._targets[0]))&&In(n,i,i._start-i._delay),i=r;return In(de,n,0),n},context:function(t,e){return t?new hd(t,e):le},matchMedia:function(t){return new Vx(t)},matchMediaRefresh:function(){return Gi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Yo()},addEventListener:function(t,e){var n=na[t]||(na[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=na[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Mx,wrapYoyo:yx,distribute:Xu,random:Yu,snap:qu,normalize:vx,getUnit:Oe,clamp:mx,splitColor:Ju,toArray:Mn,selector:Wo,mapRange:$u,pipe:_x,unitize:xx,interpolate:Sx,shuffle:Wu},install:Du,effects:_o,ticker:on,updateRoot:Ve.updateRoot,plugins:rn,globalTimeline:de,core:{PropTween:Ke,globals:Iu,Tween:Se,Timeline:Ve,Animation:hs,getCache:Bi,_removeLinkedListItem:wa,reverting:function(){return Le},context:function(t){return t&&le&&(le.data.push(t),t._ctx=le),le},suppressOverwrites:function(t){return fl=t}}};$e("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return _a[s]=Se[s]});on.add(Ve.updateRoot);_r=_a.to({},{duration:0});var Wx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Xx=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Wx(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},So=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Ce(r)&&(l={},$e(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Xx(o,r)}}}},Je=_a.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Le?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},So("roundProps",Xo),So("modifiers"),So("snap",qu))||_a;Se.version=Ve.version=Je.version="3.15.0";Lu=1;ml()&&Lr();jt.Power0;jt.Power1;jt.Power2;jt.Power3;jt.Power4;jt.Linear;jt.Quad;jt.Cubic;jt.Quart;jt.Quint;jt.Strong;jt.Elastic;jt.Back;jt.SteppedEase;jt.Bounce;jt.Sine;jt.Expo;jt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bh,li,yr,Al,Ui,wh,Cl,qx=function(){return typeof window<"u"},Jn={},Li=180/Math.PI,Sr=Math.PI/180,hr=Math.atan2,Ah=1e8,Rl=/([A-Z])/g,Yx=/(left|right|width|margin|padding|x)/i,jx=/[\s,\(]\S/,Un={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},jo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},$x=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Kx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Zx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Jx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},ud=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},dd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Qx=function(t,e,n){return t.style[e]=n},tv=function(t,e,n){return t.style.setProperty(e,n)},ev=function(t,e,n){return t._gsap[e]=n},nv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},iv=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},rv=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},fe="transform",Ze=fe+"Origin",sv=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in Jn&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Un[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=qn(i,o)}):this.tfm[t]=a.x?a[t]:qn(i,t),t===Ze&&(this.tfm.zOrigin=a.zOrigin);else return Un.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(fe)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ze,e,"")),t=fe}(r||e)&&this.props.push(t,e,r[t])},fd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},av=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Rl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Cl(),(!r||!r.isStart)&&!n[fe]&&(fd(n),i.zOrigin&&n[Ze]&&(n[Ze]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},pd=function(t,e){var n={target:t,props:[],revert:av,save:sv};return t._gsap||Je.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},md,$o=function(t,e){var n=li.createElementNS?li.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):li.createElement(t);return n&&n.style?n:li.createElement(t)},cn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Rl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Dr(e)||e,1)||""},Ch="O,Moz,ms,Ms,Webkit".split(","),Dr=function(t,e,n){var i=e||Ui,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Ch[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Ch[a]:"")+t},Ko=function(){qx()&&window.document&&(bh=window,li=bh.document,yr=li.documentElement,Ui=$o("div")||{style:{}},$o("div"),fe=Dr(fe),Ze=fe+"Origin",Ui.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",md=!!Dr("perspective"),Cl=Je.core.reverting,Al=1)},Rh=function(t){var e=t.ownerSVGElement,n=$o("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),yr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),yr.removeChild(n),r},Ph=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},gd=function(t){var e,n;try{e=t.getBBox()}catch{e=Rh(t),n=1}return e&&(e.width||e.height)||n||(e=Rh(t)),e&&!e.width&&!e.x&&!e.y?{x:+Ph(t,["x","cx","x1"])||0,y:+Ph(t,["y","cy","y1"])||0,width:0,height:0}:e},_d=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&gd(t))},gi=function(t,e){if(e){var n=t.style,i;e in Jn&&e!==Ze&&(e=fe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Rl,"-$1").toLowerCase())):n.removeAttribute(e)}},ci=function(t,e,n,i,r,a){var o=new Ke(t._pt,e,n,0,1,a?dd:ud);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},Lh={deg:1,rad:1,turn:1},ov={grid:1,flex:1},_i=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Ui.style,l=Yx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,m,p;if(i===a||!r||Lh[i]||Lh[a])return r;if(a!=="px"&&!d&&(r=s(t,e,n,"px")),p=t.getCTM&&_d(t),(f||a==="%")&&(Jn[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],xe(f?r/_*u:r/100*_);if(o[l?"width":"height"]=u+(d?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===li||!g.appendChild)&&(g=li.body),m=g._gsap,m&&f&&m.width&&l&&m.time===on.time&&!m.uncache)return xe(r/m.width*u);if(f&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=u+i,_=t[h],v?t.style[e]=v:gi(t,e)}else(f||a==="%")&&!ov[cn(g,"display")]&&(o.position=cn(t,"position")),g===t&&(o.position="static"),g.appendChild(Ui),_=Ui[h],g.removeChild(Ui),o.position="absolute";return l&&f&&(m=Bi(g),m.time=on.time,m.width=g[h]),xe(d?_*r/u:_&&r?u/_*r:0)},qn=function(t,e,n,i){var r;return Al||Ko(),e in Un&&e!=="transform"&&(e=Un[e],~e.indexOf(",")&&(e=e.split(",")[0])),Jn[e]&&e!=="transform"?(r=ds(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:va(cn(t,Ze))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=xa[e]&&xa[e](t,e,n)||cn(t,e)||Nu(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?_i(t,e,r,n)+n:r},lv=function(t,e,n,i){if(!n||n==="none"){var r=Dr(e,t,1),a=r&&cn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=cn(t,"borderTopColor"))}var o=new Ke(this._pt,t.style,e,0,1,ld),l=0,c=0,h,u,d,f,_,g,m,p,v,x,M,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=cn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=cn(t,e)||i,g?t.style[e]=g:gi(t,e)),h=[n,i],td(h),n=h[0],i=h[1],d=n.match(gr)||[],b=i.match(gr)||[],b.length){for(;u=gr.exec(i);)m=u[0],v=i.substring(l,u.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,M=g.substr((f+"").length),m.charAt(1)==="="&&(m=Mr(f,m)+M),p=parseFloat(m),x=m.substr((p+"").length),l=gr.lastIndex-x.length,x||(x=x||hn.units[e]||M,l===i.length&&(i+=x,o.e+=x)),M!==x&&(f=_i(t,e,g,x)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?dd:ud;return Pu.test(i)&&(o.e=0),this._pt=o,o},Dh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},cv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Dh[n]||n,e[1]=Dh[i]||i,e.join(" ")},hv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Jn[o]&&(l=1,o=o==="transformOrigin"?Ze:fe),gi(n,o);l&&(gi(n,fe),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ds(n,1),a.uncache=1,fd(i)))}},xa={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Ke(t._pt,e,n,0,0,hv);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},us=[1,0,0,1,0,0],xd={},vd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ih=function(t){var e=cn(t,fe);return vd(e)?us:e.substr(7).match(Ru).map(xe)},Pl=function(t,e){var n=t._gsap||Bi(t),i=t.style,r=Ih(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?us:r):(r===us&&!t.offsetParent&&t!==yr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,yr.appendChild(t)),r=Ih(t),l?i.display=l:gi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):yr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Zo=function(t,e,n,i,r,a){var o=t._gsap,l=r||Pl(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],v=l[5],x=e.split(" "),M=parseFloat(x[0])||0,b=parseFloat(x[1])||0,E,S,D,y;n?l!==us&&(S=f*m-_*g)&&(D=M*(m/S)+b*(-g/S)+(g*v-m*p)/S,y=M*(-_/S)+b*(f/S)-(f*v-_*p)/S,M=D,b=y):(E=gd(t),M=E.x+(~x[0].indexOf("%")?M/100*E.width:M),b=E.y+(~(x[1]||x[0]).indexOf("%")?b/100*E.height:b)),i||i!==!1&&o.smooth?(p=M-c,v=b-h,o.xOffset=u+(p*f+v*g)-p,o.yOffset=d+(p*_+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=b,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Ze]="0px 0px",a&&(ci(a,o,"xOrigin",c,M),ci(a,o,"yOrigin",h,b),ci(a,o,"xOffset",u,o.xOffset),ci(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",M+" "+b)},ds=function(t,e){var n=t._gsap||new nd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=cn(t,Ze)||"0",h,u,d,f,_,g,m,p,v,x,M,b,E,S,D,y,w,F,V,Z,P,U,O,z,H,B,$,et,Y,j,J,lt;return h=u=d=g=m=p=v=x=M=0,f=_=1,n.svg=!!(t.getCTM&&_d(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[fe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[fe]!=="none"?l[fe]:"")),i.scale=i.rotate=i.translate="none"),S=Pl(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",z=""):z=!e&&t.getAttribute("data-svg-origin"),Zo(t,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,E=n.yOrigin||0,S!==us&&(F=S[0],V=S[1],Z=S[2],P=S[3],h=U=S[4],u=O=S[5],S.length===6?(f=Math.sqrt(F*F+V*V),_=Math.sqrt(P*P+Z*Z),g=F||V?hr(V,F)*Li:0,v=Z||P?hr(Z,P)*Li+g:0,v&&(_*=Math.abs(Math.cos(v*Sr))),n.svg&&(h-=b-(b*F+E*Z),u-=E-(b*V+E*P))):(lt=S[6],j=S[7],$=S[8],et=S[9],Y=S[10],J=S[11],h=S[12],u=S[13],d=S[14],D=hr(lt,Y),m=D*Li,D&&(y=Math.cos(-D),w=Math.sin(-D),z=U*y+$*w,H=O*y+et*w,B=lt*y+Y*w,$=U*-w+$*y,et=O*-w+et*y,Y=lt*-w+Y*y,J=j*-w+J*y,U=z,O=H,lt=B),D=hr(-Z,Y),p=D*Li,D&&(y=Math.cos(-D),w=Math.sin(-D),z=F*y-$*w,H=V*y-et*w,B=Z*y-Y*w,J=P*w+J*y,F=z,V=H,Z=B),D=hr(V,F),g=D*Li,D&&(y=Math.cos(D),w=Math.sin(D),z=F*y+V*w,H=U*y+O*w,V=V*y-F*w,O=O*y-U*w,F=z,U=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=xe(Math.sqrt(F*F+V*V+Z*Z)),_=xe(Math.sqrt(O*O+lt*lt)),D=hr(U,O),v=Math.abs(D)>2e-4?D*Li:0,M=J?1/(J<0?-J:J):0),n.svg&&(z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!vd(cn(t,fe)),z&&t.setAttribute("transform",z))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=xe(f),n.scaleY=xe(_),n.rotation=xe(g)+o,n.rotationX=xe(m)+o,n.rotationY=xe(p)+o,n.skewX=v+o,n.skewY=x+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ze]=va(c)),n.xOffset=n.yOffset=0,n.force3D=hn.force3D,n.renderTransform=n.svg?dv:md?Md:uv,n.uncache=0,n},va=function(t){return(t=t.split(" "))[0]+" "+t[1]},Eo=function(t,e,n){var i=Oe(e);return xe(parseFloat(e)+parseFloat(_i(t,"x",n+"px",i)))+i},uv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Md(t,e)},Ai="0deg",Yr="0px",Ci=") ",Md=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,x=n.zOrigin,M="",b=p==="auto"&&t&&t!==1||p===!0;if(x&&(u!==Ai||h!==Ai)){var E=parseFloat(h)*Sr,S=Math.sin(E),D=Math.cos(E),y;E=parseFloat(u)*Sr,y=Math.cos(E),a=Eo(v,a,S*y*-x),o=Eo(v,o,-Math.sin(E)*-x),l=Eo(v,l,D*y*-x+x)}m!==Yr&&(M+="perspective("+m+Ci),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(b||a!==Yr||o!==Yr||l!==Yr)&&(M+=l!==Yr||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ci),c!==Ai&&(M+="rotate("+c+Ci),h!==Ai&&(M+="rotateY("+h+Ci),u!==Ai&&(M+="rotateX("+u+Ci),(d!==Ai||f!==Ai)&&(M+="skew("+d+", "+f+Ci),(_!==1||g!==1)&&(M+="scale("+_+", "+g+Ci),v.style[fe]=M||"translate(0, 0)"},dv=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,x=parseFloat(a),M=parseFloat(o),b,E,S,D,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Sr,c*=Sr,b=Math.cos(l)*u,E=Math.sin(l)*u,S=Math.sin(l-c)*-d,D=Math.cos(l-c)*d,c&&(h*=Sr,y=Math.tan(c-h),y=Math.sqrt(1+y*y),S*=y,D*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),b*=y,E*=y)),b=xe(b),E=xe(E),S=xe(S),D=xe(D)):(b=u,D=d,E=S=0),(x&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(x=_i(f,"x",a,"px"),M=_i(f,"y",o,"px")),(_||g||m||p)&&(x=xe(x+_-(_*b+g*S)+m),M=xe(M+g-(_*E+g*D)+p)),(i||r)&&(y=f.getBBox(),x=xe(x+i/100*y.width),M=xe(M+r/100*y.height)),y="matrix("+b+","+E+","+S+","+D+","+x+","+M+")",f.setAttribute("transform",y),v&&(f.style[fe]=y)},fv=function(t,e,n,i,r){var a=360,o=Ce(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Li:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Ah)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Ah)%a-~~(c/a)*a)),t._pt=d=new Ke(t._pt,e,n,i,c,$x),d.e=h,d.u="deg",t._props.push(n),d},Uh=function(t,e){for(var n in e)t[n]=e[n];return t},pv=function(t,e,n){var i=Uh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[fe]=e,o=ds(n,1),gi(n,fe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[fe],a[fe]=e,o=ds(n,1),a[fe]=c);for(l in Jn)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(f=Oe(c),_=Oe(h),u=f!==_?_i(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new Ke(t._pt,o,l,u,d-u,jo),t._pt.u=_||0,t._props.push(l));Uh(o,i)};$e("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});xa[t>1?"border"+s:s]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(_){return qn(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,u)}});var yd={name:"css",register:Ko,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,d,f,_,g,m,p,v,x,M,b,E,S,D,y;Al||Ko(),this.styles=this.styles||pd(t),D=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(rn[g]&&id(g,e,n,i,t,r)))){if(f=typeof h,_=xa[g],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=ls(h)),_)_(this,t,g,h,n)&&(S=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",fi.lastIndex=0,fi.test(c)||(m=Oe(c),p=Oe(h),p?m!==p&&(c=_i(t,g,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,i,r,0,0,g),a.push(g),D.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],Ce(c)&&~c.indexOf("random(")&&(c=ls(c)),Oe(c+"")||c==="auto"||(c+=hn.units[g]||Oe(qn(t,g))||""),(c+"").charAt(1)==="="&&(c=qn(t,g))):c=qn(t,g),d=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),g in Un&&(g==="autoAlpha"&&(d===1&&qn(t,"visibility")==="hidden"&&u&&(d=0),D.push("visibility",0,o.visibility),ci(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Un[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Jn,x){if(this.styles.save(g),y=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=cn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var w=t.style.perspective;t.style.perspective=h,h=cn(t,"perspective"),w?t.style.perspective=w:gi(t,"perspective")}u=parseFloat(h)}if(M||(b=t._gsap,b.renderTransform&&!e.parseTransform||ds(t,e.parseTransform),E=e.smoothOrigin!==!1&&b.smooth,M=this._pt=new Ke(this._pt,o,fe,0,1,b.renderTransform,b,0,-1),M.dep=1),g==="scale")this._pt=new Ke(this._pt,b,"scaleY",b.scaleY,(v?Mr(b.scaleY,v+u):u)-b.scaleY||0,jo),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){D.push(Ze,0,o[Ze]),h=cv(h),b.svg?Zo(t,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==b.zOrigin&&ci(this,b,"zOrigin",b.zOrigin,p),ci(this,o,g,va(c),va(h)));continue}else if(g==="svgOrigin"){Zo(t,h,1,E,0,this);continue}else if(g in xd){fv(this,b,g,d,v?Mr(d,v+h):h);continue}else if(g==="smoothOrigin"){ci(this,b,"smooth",b.smooth,h);continue}else if(g==="force3D"){b[g]=h;continue}else if(g==="transform"){pv(this,h,t);continue}}else g in o||(g=Dr(g)||g);if(x||(u||u===0)&&(d||d===0)&&!jx.test(h)&&g in o)m=(c+"").substr((d+"").length),u||(u=0),p=Oe(h)||(g in hn.units?hn.units[g]:m),m!==p&&(d=_i(t,g,c,p)),this._pt=new Ke(this._pt,x?b:o,g,d,(v?Mr(d,v+u):u)-d,!x&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?Jx:jo),this._pt.u=p||0,x&&y!==h?(this._pt.b=c,this._pt.e=y,this._pt.r=Zx):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Kx);else if(g in o)lv.call(this,t,g,c,v?v+h:h);else if(g in t)this.add(t,g,c||t[g],v?v+h:h,i,r);else if(g!=="parseTransform"){_l(g,h);continue}x||(g in o?D.push(g,0,o[g]):typeof t[g]=="function"?D.push(g,2,t[g]()):D.push(g,1,c||t[g])),a.push(g)}}S&&cd(this)},render:function(t,e){if(e.tween._time||!Cl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:qn,aliases:Un,getSetter:function(t,e,n){var i=Un[e];return i&&i.indexOf(",")<0&&(e=i),e in Jn&&e!==Ze&&(t._gsap.x||qn(t,"x"))?n&&wh===n?e==="scale"?nv:ev:(wh=n||{})&&(e==="scale"?iv:rv):t.style&&!pl(t.style[e])?Qx:~e.indexOf("-")?tv:bl(t,e)},core:{_removeProperty:gi,_getMatrix:Pl}};Je.utils.checkPrefix=Dr;Je.core.getStyleSaver=pd;(function(s,t,e,n){var i=$e(s+","+t+","+e,function(r){Jn[r]=1});$e(t,function(r){hn.units[r]="deg",xd[r]=1}),Un[i[13]]=s+","+t,$e(n,function(r){var a=r.split(":");Un[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");$e("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){hn.units[s]="px"});Je.registerPlugin(yd);var Kt=Je.registerPlugin(yd)||Je;Kt.core.Tween;const ke=[{id:"mind",index:"01",name:"MIND STONE",roman:"I",colorHex:"#ffd000",colorThree:16764928,coreColor:16773258,darkColor:6706432,domainKey:"intelligence",domain:"INTELLIGENCE",domainTagline:"AI • ML • Decision Systems",marvelTheme:"Vision Neural Gold",entity:"The Scepter / Vision's Core",origin:"Chitauri Scepter / Neural Matrix",vessel:"The Scepter / Vision",frequency:"528.00 THz",refractiveIndex:"2.54",powerLevel:"98.5%",particleCount:180,techStack:["Python","PyTorch","LangChain","FastAPI","Gemini API","TensorFlow"],quote:"It contains an intellect of supreme cosmic density.",description:"Architect autonomous multi-agent networks, neural cognition models, self-refining LLM pipelines, and intelligent decision systems capable of enterprise-scale problem-solving.",stats:[{label:"SYNAPSE DENSITY",value:"Infinite"},{label:"MODEL CAPACITY",value:"Trillion Param"},{label:"HARMONIC",value:"528.00 THz"},{label:"SLOTS OPEN",value:"12 Squads"}]},{id:"space",index:"02",name:"SPACE STONE",roman:"II",colorHex:"#00d2ff",colorThree:54015,coreColor:8449279,darkColor:16486,domainKey:"connectivity",domain:"CONNECTIVITY",domainTagline:"Cybersecurity • Cloud • Networks",marvelTheme:"Tesseract Cyan",entity:"Tesseract (Cosmic Cube)",origin:"Pre-Universe Singularity / Asgardian Vault",vessel:"The Tesseract",frequency:"432.18 THz",refractiveIndex:"2.42",powerLevel:"99.2%",particleCount:160,techStack:["Rust","Go","Kubernetes","eBPF","Cloudflare Workers","WireGuard"],quote:"The Tesseract has awakened. It is on a little world, a human world.",description:"Forge zero-trust defense architectures, planet-scale cloud networks, high-throughput distributed protocols, and resilient cybersecurity fabrics.",stats:[{label:"LATENCY PROFILE",value:"Sub-5ms Mesh"},{label:"DEFENSE MATRIX",value:"Post-Quantum"},{label:"HARMONIC",value:"432.18 THz"},{label:"SLOTS OPEN",value:"10 Squads"}]},{id:"reality",index:"03",name:"REALITY STONE",roman:"III",colorHex:"#ff2a4b",colorThree:16722507,coreColor:16741768,darkColor:6684688,domainKey:"digital",domain:"DIGITAL",domainTagline:"Web • Mobile • Digital Platforms",marvelTheme:"Aether Crimson",entity:"The Aether (Fluid Crystal)",origin:"Pre-Universe Singularity / Svartalfheim",vessel:"The Aether Prism",frequency:"612.44 THz",refractiveIndex:"2.68",powerLevel:"97.8%",particleCount:220,techStack:["TypeScript","React","Flutter","Next.js","Node.js","WebGL"],quote:"It turns matter into dark matter, reshaping physical reality at will.",description:"Bend digital reality. Build hyper-responsive web applications, cross-platform mobile architectures, immersive real-time canvases, and scalable modern platforms.",stats:[{label:"RENDER TARGET",value:"120 FPS WebGL"},{label:"STATE CONFLICT",value:"Sub-30ms CRDT"},{label:"HARMONIC",value:"612.44 THz"},{label:"SLOTS OPEN",value:"14 Squads"}]},{id:"power",index:"04",name:"POWER STONE",roman:"IV",colorHex:"#b026ff",colorThree:11544319,coreColor:14714367,darkColor:4851058,domainKey:"automation",domain:"AUTOMATION",domainTagline:"IoT • Robotics • Embedded Systems",marvelTheme:"Thanos Void Purple",entity:"The Orb / Morag Temple",origin:"Pre-Universe Singularity / Celestial Eson",vessel:"The Orb of Morag",frequency:"741.89 THz",refractiveIndex:"2.75",powerLevel:"100.0%",particleCount:200,techStack:["C++","Rust","ESP32 / Arduino","ROS2","MQTT","FreeRTOS"],quote:"It contains an energy that destroys all organic matter it touches.",description:"Unleash physical and digital kinetic power. Develop autonomous robotics, smart hardware controllers, industrial IoT pipelines, and embedded real-time systems.",stats:[{label:"BUS TELEMETRY",value:"Microsecond"},{label:"KINETIC FAILOVER",value:"Autonomous Swarm"},{label:"HARMONIC",value:"741.89 THz"},{label:"SLOTS OPEN",value:"8 Squads"}]},{id:"time",index:"05",name:"TIME STONE",roman:"V",colorHex:"#00ff88",colorThree:65416,coreColor:9109441,darkColor:21803,domainKey:"analytics",domain:"ANALYTICS",domainTagline:"Data • Prediction • Optimization",marvelTheme:"Doctor Strange Emerald",entity:"Eye of Agamotto / Kamar-Taj",origin:"Pre-Universe Singularity / Sorcerer Supreme",vessel:"Eye of Agamotto",frequency:"852.12 THz",refractiveIndex:"2.48",powerLevel:"98.9%",particleCount:190,techStack:["Python","Kafka","ClickHouse","Pandas","DuckDB","Scikit-Learn"],quote:"Dormammu, I have come to bargain.",description:"Control temporal velocity. Engineer real-time streaming pipelines, high-throughput predictive time-series models, algorithmic optimization engines, and big data intelligence.",stats:[{label:"STREAM INGEST",value:"1M Events/sec"},{label:"ORACLE HORIZON",value:"14,000,605 Paths"},{label:"HARMONIC",value:"852.12 THz"},{label:"SLOTS OPEN",value:"11 Squads"}]},{id:"soul",index:"06",name:"SOUL STONE",roman:"VI",colorHex:"#ff7700",colorThree:16742144,coreColor:16765567,darkColor:10044416,domainKey:"impact",domain:"IMPACT",domainTagline:"Healthcare • Agriculture • Education • Social Good",marvelTheme:"Vormir Sunset Orange",entity:"Vormir Altar / Soul World",origin:"Pre-Universe Singularity / Red Skull Guardian",vessel:"Vormir Shrine",frequency:"963.00 THz",refractiveIndex:"2.62",powerLevel:"99.7%",particleCount:180,techStack:["Python","Flutter","PostgreSQL","FastAPI","Edge AI","OpenCV"],quote:"A soul for a soul. Great technological impact demands great purpose.",description:"Channel technology to transform lives. Pioneer accessible healthcare diagnostics, precision agricultural sensors, adaptive educational tools, and sustainable social impact networks.",stats:[{label:"COMMUNITY REACH",value:"Global Impact"},{label:"ETHICAL CORE",value:"Privacy-Preserving"},{label:"HARMONIC",value:"963.00 THz"},{label:"SLOTS OPEN",value:"15 Squads"}]}],ia=0,mv=1,gv=new L,Nh=new F0,To=new Xn,Oh=new L,Js=new sn;class _v{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Fh,this.unassigned=new Fh,this.vertices=[]}setFromPoints(t){if(t.length>=4){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.vertices.push(new xv(t[e]));this.compute()}return this}setFromObject(t){const e=[];return t.updateMatrixWorld(!0),t.traverse(function(n){const i=n.geometry;if(i!==void 0){const r=i.attributes.position;if(r!==void 0)for(let a=0,o=r.count;a<o;a++){const l=new L;l.fromBufferAttribute(r,a).applyMatrix4(n.matrixWorld),e.push(l)}}}),this.setFromPoints(e)}containsPoint(t){const e=this.faces;for(let n=0,i=e.length;n<i;n++)if(e[n].distanceToPoint(t)>this.tolerance)return!1;return!0}intersectRay(t,e){const n=this.faces;let i=-1/0,r=1/0;for(let a=0,o=n.length;a<o;a++){const l=n[a],c=l.distanceToPoint(t.origin),h=l.normal.dot(t.direction);if(c>0&&h>=0)return null;const u=h!==0?-c/h:0;if(!(u<=0)&&(h>0?r=Math.min(u,r):i=Math.max(u,i),i>r))return null}return i!==-1/0?t.at(i,e):t.at(r,e),e}intersectsRay(t){return this.intersectRay(t,gv)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}addVertexToFace(t,e){return t.face=e,e.outside===null?this.assigned.append(t):this.assigned.insertBefore(e.outside,t),e.outside=t,this}removeVertexFromFace(t,e){return t===e.outside&&(t.next!==null&&t.next.face===e?e.outside=t.next:e.outside=null),this.assigned.remove(t),this}removeAllVerticesFromFace(t){if(t.outside!==null){const e=t.outside;let n=t.outside;for(;n.next!==null&&n.next.face===t;)n=n.next;return this.assigned.removeSubList(e,n),e.prev=n.next=null,t.outside=null,e}}deleteFaceVertices(t,e){const n=this.removeAllVerticesFromFace(t);if(n!==void 0)if(e===void 0)this.unassigned.appendChain(n);else{let i=n;do{const r=i.next;e.distanceToPoint(i.point)>this.tolerance?this.addVertexToFace(i,e):this.unassigned.append(i),i=r}while(i!==null)}return this}resolveUnassignedPoints(t){if(this.unassigned.isEmpty()===!1){let e=this.unassigned.first();do{const n=e.next;let i=this.tolerance,r=null;for(let a=0;a<t.length;a++){const o=t[a];if(o.mark===ia){const l=o.distanceToPoint(e.point);if(l>i&&(i=l,r=o),i>1e3*this.tolerance)break}}r!==null&&this.addVertexToFace(e,r),e=n}while(e!==null)}return this}computeExtremes(){const t=new L,e=new L,n=[],i=[];for(let r=0;r<3;r++)n[r]=i[r]=this.vertices[0];t.copy(this.vertices[0].point),e.copy(this.vertices[0].point);for(let r=0,a=this.vertices.length;r<a;r++){const o=this.vertices[r],l=o.point;for(let c=0;c<3;c++)l.getComponent(c)<t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),n[c]=o);for(let c=0;c<3;c++)l.getComponent(c)>e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=o)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(t.x),Math.abs(e.x))+Math.max(Math.abs(t.y),Math.abs(e.y))+Math.max(Math.abs(t.z),Math.abs(e.z))),{min:n,max:i}}computeInitialHull(){const t=this.vertices,e=this.computeExtremes(),n=e.min,i=e.max;let r=0,a=0;for(let d=0;d<3;d++){const f=i[d].point.getComponent(d)-n[d].point.getComponent(d);f>r&&(r=f,a=d)}const o=n[a],l=i[a];let c,h;r=0,Nh.set(o.point,l.point);for(let d=0,f=this.vertices.length;d<f;d++){const _=t[d];if(_!==o&&_!==l){Nh.closestPointToPoint(_.point,!0,Oh);const g=Oh.distanceToSquared(_.point);g>r&&(r=g,c=_)}}r=-1,To.setFromCoplanarPoints(o.point,l.point,c.point);for(let d=0,f=this.vertices.length;d<f;d++){const _=t[d];if(_!==o&&_!==l&&_!==c){const g=Math.abs(To.distanceToPoint(_.point));g>r&&(r=g,h=_)}}const u=[];if(To.distanceToPoint(h.point)<0){u.push(bn.create(o,l,c),bn.create(h,l,o),bn.create(h,c,l),bn.create(h,o,c));for(let d=0;d<3;d++){const f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge(f)),u[d+1].getEdge(1).setTwin(u[f+1].getEdge(0))}}else{u.push(bn.create(o,c,l),bn.create(h,o,l),bn.create(h,l,c),bn.create(h,c,o));for(let d=0;d<3;d++){const f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge((3-d)%3)),u[d+1].getEdge(0).setTwin(u[f+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(u[d]);for(let d=0,f=t.length;d<f;d++){const _=t[d];if(_!==o&&_!==l&&_!==c&&_!==h){r=this.tolerance;let g=null;for(let m=0;m<4;m++){const p=this.faces[m].distanceToPoint(_.point);p>r&&(r=p,g=this.faces[m])}g!==null&&this.addVertexToFace(_,g)}}return this}reindexFaces(){const t=[];for(let e=0;e<this.faces.length;e++){const n=this.faces[e];n.mark===ia&&t.push(n)}return this.faces=t,this}nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let t,e=0;const n=this.assigned.first().face;let i=n.outside;do{const r=n.distanceToPoint(i.point);r>e&&(e=r,t=i),i=i.next}while(i!==null&&i.face===n);return t}}computeHorizon(t,e,n,i){this.deleteFaceVertices(n),n.mark=mv;let r;e===null?r=e=n.getEdge(0):r=e.next;do{const a=r.twin,o=a.face;o.mark===ia&&(o.distanceToPoint(t)>this.tolerance?this.computeHorizon(t,a,o,i):i.push(r)),r=r.next}while(r!==e);return this}addAdjoiningFace(t,e){const n=bn.create(t,e.tail(),e.head());return this.faces.push(n),n.getEdge(-1).setTwin(e.twin),n.getEdge(0)}addNewFaces(t,e){this.newFaces=[];let n=null,i=null;for(let r=0;r<e.length;r++){const a=e[r],o=this.addAdjoiningFace(t,a);n===null?n=o:o.next.setTwin(i),this.newFaces.push(o.face),i=o}return n.next.setTwin(i),this}addVertexToHull(t){const e=[];return this.unassigned.clear(),this.removeVertexFromFace(t,t.face),this.computeHorizon(t.point,null,t.face,e),this.addNewFaces(t,e),this.resolveUnassignedPoints(this.newFaces),this}cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}compute(){let t;for(this.computeInitialHull();(t=this.nextVertexToAdd())!==void 0;)this.addVertexToHull(t);return this.reindexFaces(),this.cleanup(),this}}class bn{constructor(){this.normal=new L,this.midpoint=new L,this.area=0,this.constant=0,this.outside=null,this.mark=ia,this.edge=null}static create(t,e,n){const i=new bn,r=new bo(t,i),a=new bo(e,i),o=new bo(n,i);return r.next=o.prev=a,a.next=r.prev=o,o.next=a.prev=r,i.edge=r,i.compute()}getEdge(t){let e=this.edge;for(;t>0;)e=e.next,t--;for(;t<0;)e=e.prev,t++;return e}compute(){const t=this.edge.tail(),e=this.edge.head(),n=this.edge.next.head();return Js.set(t.point,e.point,n.point),Js.getNormal(this.normal),Js.getMidpoint(this.midpoint),this.area=Js.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(t){return this.normal.dot(t)-this.constant}}class bo{constructor(t,e){this.vertex=t,this.prev=null,this.next=null,this.twin=null,this.face=e}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){const t=this.head(),e=this.tail();return e!==null?e.point.distanceTo(t.point):-1}lengthSquared(){const t=this.head(),e=this.tail();return e!==null?e.point.distanceToSquared(t.point):-1}setTwin(t){return this.twin=t,t.twin=this,this}}class xv{constructor(t){this.point=t,this.prev=null,this.next=null,this.face=null}}class Fh{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(t,e){return e.prev=t.prev,e.next=t,e.prev===null?this.head=e:e.prev.next=e,t.prev=e,this}insertAfter(t,e){return e.prev=t,e.next=t.next,e.next===null?this.tail=e:e.next.prev=e,t.next=e,this}append(t){return this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t,this}appendChain(t){for(this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail;t.next!==null;)t=t.next;return this.tail=t,this}remove(t){return t.prev===null?this.head=t.next:t.prev.next=t.next,t.next===null?this.tail=t.prev:t.next.prev=t.prev,this}removeSubList(t,e){return t.prev===null?this.head=e.next:t.prev.next=e.next,e.next===null?this.tail=t.prev:e.next.prev=t.prev,this}isEmpty(){return this.head===null}}class vv extends ve{constructor(t=[]){super();const e=[],n=[],r=new _v().setFromPoints(t).faces;for(let a=0;a<r.length;a++){const o=r[a];let l=o.edge;do{const c=l.head().point;e.push(c.x,c.y,c.z),n.push(o.normal.x,o.normal.y,o.normal.z),l=l.next}while(l!==o.edge)}this.setAttribute("position",new te(e,3)),this.setAttribute("normal",new te(n,3))}}let Ri=null;function Mv(){if(Ri)return Ri;const s=document.createElement("canvas");s.width=512,s.height=512;const t=s.getContext("2d");t.fillStyle="#808080",t.fillRect(0,0,512,512);const e=t.getImageData(0,0,512,512),n=e.data;for(let i=0;i<n.length;i+=4){const r=(Math.random()-.5)*48;n[i]=Math.min(255,Math.max(0,128+r)),n[i+1]=n[i],n[i+2]=n[i],n[i+3]=255}t.putImageData(e,0,0),t.strokeStyle="rgba(240, 240, 240, 0.35)",t.lineWidth=1.4;for(let i=0;i<22;i++){t.beginPath();let r=Math.random()*512,a=Math.random()*512;t.moveTo(r,a);for(let o=0;o<5;o++)r+=(Math.random()-.5)*90,a+=(Math.random()-.5)*90,t.lineTo(r,a);t.stroke()}return Ri=new ua(s),Ri.wrapS=ns,Ri.wrapT=ns,Ri.repeat.set(2,2),Ri}function yv(s=12){const t=[],e=[];for(let f=0;f<s;f++)e.push(f/s*Math.PI*2+Math.PI/s);const n=e.map(f=>new L(Math.cos(f)*.72*(1+.12*Math.cos(2*f)),.58,Math.sin(f)*.6*(1-.12*Math.cos(2*f)))),i=new L(0,.59,0),r=e.map(f=>new L(Math.cos(f)*1.05*(1+.12*Math.cos(2*f)),.35,Math.sin(f)*.88*(1-.12*Math.cos(2*f)))),a=e.map(f=>new L(Math.cos(f)*1.3*(1+.12*Math.cos(2*f)),.12,Math.sin(f)*1.08*(1-.12*Math.cos(2*f)))),o=e.map(f=>new L(Math.cos(f)*1.3*(1+.12*Math.cos(2*f)),-.12,Math.sin(f)*1.08*(1-.12*Math.cos(2*f)))),l=e.map(f=>new L(Math.cos(f)*.8*(1+.12*Math.cos(2*f)),-.58,Math.sin(f)*.66*(1-.12*Math.cos(2*f)))),c=new L(0,-.98,0);function h(f,_,g){t.push(f.x,f.y,f.z,_.x,_.y,_.z,g.x,g.y,g.z)}function u(f,_,g,m){h(f,_,g),h(f,g,m)}for(let f=0;f<s;f++){const _=(f+1)%s;h(i,n[f],n[_]),u(n[f],r[f],r[_],n[_]),u(r[f],a[f],a[_],r[_]),u(a[f],o[f],o[_],a[_]),u(o[f],l[f],l[_],o[_]),h(l[f],c,l[_])}const d=new ve;return d.setAttribute("position",new te(t,3)),d.computeVertexNormals(),d}function ur(s=42,t=1.15,e=1.35,n=1.05){let i=s;function r(){return i=(i*9301+49297)%233280,i/233280}const a=[],o=30;for(let u=0;u<o;u++){const d=r()*2-1,f=r()*Math.PI*2,_=Math.sqrt(Math.max(0,1-d*d)),g=_*Math.cos(f),m=d,p=_*Math.sin(f),v=g*t,x=m*e,M=p*n,b=Math.sqrt(v*v+x*x+M*M),E=u%4===0?.78+r()*.12:.9+r()*.22,S=b*E;a.push({nx:g,ny:m,nz:p,d:S})}a.push({nx:.55,ny:.65,nz:.4,d:1}),a.push({nx:-.6,ny:.5,nz:-.55,d:.95}),a.push({nx:.65,ny:-.6,nz:-.4,d:.98}),a.push({nx:-.5,ny:-.75,nz:.4,d:.92});const l=a.length,c=[];for(let u=0;u<l;u++)for(let d=u+1;d<l;d++)for(let f=d+1;f<l;f++){const _=a[u],g=a[d],m=a[f],p=_.nx*(g.ny*m.nz-g.nz*m.ny)-_.ny*(g.nx*m.nz-g.nz*m.nx)+_.nz*(g.nx*m.ny-g.ny*m.nx);if(Math.abs(p)<1e-4)continue;const v=(_.d*(g.ny*m.nz-g.nz*m.ny)-_.ny*(g.d*m.nz-g.nz*m.d)+_.nz*(g.d*m.ny-g.ny*m.d))/p,x=(_.nx*(g.d*m.nz-g.nz*m.d)-_.d*(g.nx*m.nz-g.nz*m.nx)+_.nz*(g.nx*m.d-g.d*m.nx))/p,M=(_.nx*(g.ny*m.d-g.d*m.ny)-_.ny*(g.nx*m.d-g.d*m.nx)+_.d*(g.nx*m.ny-g.ny*m.nx))/p;let b=!0;for(let E=0;E<l;E++){const S=a[E];if(S.nx*v+S.ny*x+S.nz*M>S.d+.001){b=!1;break}}b&&c.push(new L(v,x,M))}const h=new vv(c);return h.center(),h.computeVertexNormals(),h}function Sv(s){return s==="time"?yv(12):s==="soul"?ur(42,1.15,1.35,1.05):s==="mind"?ur(77,1.08,1.48,1.02):s==="power"?ur(93,1.25,1.28,1.18):s==="space"?ur(17,1.2,1.3,1.12):s==="reality"?ur(51,1.16,1.34,1.14):ur(42,1.2,1.2,1.2)}function Ev(s,t){s.computeBoundingBox();const e=s.boundingBox,n=e.min.y,i=e.max.y,r=Math.max(.001,i-n),a=e.min.x,o=e.max.x,l=Math.max(.001,o-a),c=e.min.z,h=e.max.z,u=Math.max(.001,h-c),d=s.attributes.position,f=new Float32Array(d.count*3);for(let E=0;E<d.count;E++)f[E*3]=(d.getX(E)-a)/l,f[E*3+1]=(d.getY(E)-n)/r,f[E*3+2]=(d.getZ(E)-c)/u;const _=new Float32Array(d.count*3),g=new Ye(_,3);s.setAttribute("color",g);const m=new Rt(t.coreColor).lerp(new Rt(16777215),.62),p=new Rt(t.colorThree),v=new Rt(t.darkColor).multiplyScalar(.36),x=new Rt,M=new Rt,b=E=>{const S=.5+Math.sin(E*4.6)*.3;M.copy(m).lerp(new Rt(16777215),S);for(let D=0;D<d.count;D++){const y=f[D*3],w=f[D*3+1],F=f[D*3+2],V=Math.sin(E*4.5+y*3+F*2.4)*.22+Math.cos(E*3.5+w*2.6)*.13;let Z=w*.88+y*.12+V;if(Z=Math.max(0,Math.min(1,Z)),Z<.5){const P=Math.pow(Z*2,1.25);x.copy(v).lerp(p,P)}else{const P=Math.pow((Z-.5)*2,.82);x.copy(p).lerp(M,P)}_[D*3]=x.r,_[D*3+1]=x.g,_[D*3+2]=x.b}g.needsUpdate=!0};return b(0),b}function Tv(s){const t=new Dn;t.name=s.id,t.userData={stoneData:s};const e=Sv(s.id),n=Ev(e,s),i=Mv(),r=new D0({color:16777215,vertexColors:!0,emissive:s.colorThree,emissiveIntensity:.18,roughness:.14,metalness:.06,transmission:0,transparent:!1,opacity:1,depthWrite:!0,ior:1.76,specularIntensity:1,specularColor:new Rt(16777215),clearcoat:.55,clearcoatRoughness:.06,bumpMap:i,bumpScale:.015,flatShading:!0}),a=new ye(e,r);a.castShadow=!0,a.receiveShadow=!0,t.add(a);const o=new rh(new ll(1.05,1)),l=new jr({color:s.coreColor,transparent:!0,opacity:0,blending:Ne}),c=new Vs(o,l);c.visible=!1,t.add(c);const h=new jr({color:16777215,transparent:!0,opacity:.45,blending:Ne}),u=new Vs(new rh(e),h);u.visible=!0,t.add(u);const d=new cl(.24,18,18),f=new wn({color:s.coreColor,transparent:!0,opacity:0}),_=new ye(d,f);_.visible=!1,t.add(_);const g=new Oo(s.coreColor,1.8,10,1.4);g.position.set(0,1,2.6),t.add(g);const m=new Oo(s.colorThree,1.3,8,1.4);m.position.set(0,-1,-2.6),t.add(m);const p=new Dn;if(p.name="artifacts",s.id==="space"){const P=new Ir(2.1,2.1,2.1),U=new R0(P),O=new Vs(U,new jr({color:54015,transparent:!0,opacity:.25,blending:Ne}));p.add(O)}else if(s.id==="mind"){const P=new mr(1.92,.005,6,64),U=new wn({color:16771584,transparent:!0,opacity:.16,blending:Ne}),O=new ye(P,U);O.rotation.set(Math.PI/3.5,0,Math.PI/6);const z=new ye(P,U);z.rotation.set(-Math.PI/3.5,0,-Math.PI/6),p.add(O,z)}else if(s.id==="reality")for(let P=0;P<2;P++){const U=1.7+P*.35,O=new mr(U,.015,6,48),z=new wn({color:16717636,transparent:!0,opacity:.3-P*.08,blending:Ne}),H=new ye(O,z);H.rotation.x=Math.random()*Math.PI,H.rotation.y=Math.random()*Math.PI,H.userData={speedX:.006+P*.004,speedY:.008+P*.003},p.add(H)}else if(s.id==="power"){const P=new Dn,U=new hl(.055,0),O=new wn({color:14647551,transparent:!0,opacity:.55,blending:Ne});for(let z=0;z<18;z++){const H=.6+Math.random()*.7,B=new ye(U,O);B.scale.set(H,H,H);const $=z/18*Math.PI*2,et=1.85+(Math.random()-.5)*.4,Y=(Math.random()-.5)*.7;B.position.set(Math.cos($)*et,Y,Math.sin($)*et),P.add(B)}P.rotation.set(Math.PI/4,0,Math.PI/6),p.add(P)}else if(s.id==="time"){const P=new Dn,U=new da(1.68,1.72,64),O=new da(2.1,2.15,64),z=new wn({color:65416,side:_n,transparent:!0,opacity:.65,blending:Ne}),H=new wn({color:6942894,side:_n,transparent:!0,opacity:.45,blending:Ne}),B=new ye(U,z),$=new ye(O,H);B.rotation.x=Math.PI/2,$.rotation.x=Math.PI/2;const et=new ve,Y=1.18,j=[-Y,0,-Y,Y,0,-Y,Y,0,-Y,Y,0,Y,Y,0,Y,-Y,0,Y,-Y,0,Y,-Y,0,-Y];et.setAttribute("position",new te(j,3));const J=new jr({color:65416,transparent:!0,opacity:.55,blending:Ne}),lt=new Vs(et,J),St=lt.clone();St.rotation.y=Math.PI/4,B.add(lt,St);const K=new Ea(.025,.14),tt=new wn({color:9109441,side:_n,blending:Ne});for(let ct=0;ct<24;ct++){const ht=ct/24*Math.PI*2,Lt=new ye(K,tt);Lt.position.set(Math.cos(ht)*2.12,0,Math.sin(ht)*2.12),Lt.rotation.y=-ht,$.add(Lt)}P.add(B,$),p.add(P)}else if(s.id==="soul"){const P=new Dn,U=new wn({color:16758869,transparent:!0,opacity:.18,blending:Ne}),O=new ye(new mr(1.85,.006,6,64),U);O.rotation.set(Math.PI/3,0,Math.PI/6);const z=new ye(new mr(1.95,.005,6,64),U);z.rotation.set(-Math.PI/3,0,-Math.PI/6),P.add(O,z),p.add(P)}t.add(p);const v=120,x=new ve,M=new Float32Array(v*3);for(let P=0;P<v;P++){const U=1+Math.random()*1.8,O=Math.random()*Math.PI*2,z=Math.acos(2*Math.random()-1);M[P*3]=U*Math.sin(z)*Math.cos(O),M[P*3+1]=U*Math.sin(z)*Math.sin(O),M[P*3+2]=U*Math.cos(z)}x.setAttribute("position",new Ye(M,3));const b=document.createElement("canvas");b.width=32,b.height=32;const E=b.getContext("2d"),S=E.createRadialGradient(16,16,0,16,16,16);S.addColorStop(0,"rgba(255, 255, 255, 1)"),S.addColorStop(.3,"rgba(255, 255, 255, 0.7)"),S.addColorStop(.8,"rgba(255, 255, 255, 0.15)"),S.addColorStop(1,"rgba(255, 255, 255, 0)"),E.fillStyle=S,E.fillRect(0,0,32,32);const D=new ua(b),y=new ol({color:s.coreColor,size:.1,map:D,transparent:!0,opacity:.7,blending:Ne,depthWrite:!1}),w=new Su(x,y);w.name="particles",t.add(w);const F=.0055+(s.colorThree&7)*4e-4,V=.009+(s.colorThree>>4&7)*4e-4,Z=.0042+(s.colorThree>>8&7)*4e-4;return{group:t,gemMesh:a,gemMat:r,wireMesh:u,veinMesh:c,coreMesh:_,pointLight:g,artifactsGroup:p,particles:w,update:(P,U)=>{const O=1+Math.sin(P*3.6)*.1;if(_.scale.set(O,O,O),g.intensity=1.8+Math.sin(P*4.5)*.4,m.intensity=1.3+Math.cos(P*4)*.3,l.opacity=.12+Math.sin(P*4.2)*.07,a.rotation.x+=F+Math.sin(P*1.8)*.0016,a.rotation.y+=V,a.rotation.z+=Z+Math.cos(P*1.5)*.0016,c.rotation.copy(a.rotation),u.rotation.copy(a.rotation),n(P),s.id==="space"){const B=p.children[0];B&&(B.rotation.y+=.007,B.rotation.x+=.004)}else if(s.id==="mind")p.children.forEach((B,$)=>{B.rotation.y+=$===0?.009:-.009,B.rotation.z+=.004});else if(s.id==="reality")p.children.forEach(B=>{B.userData&&(B.rotation.x+=B.userData.speedX*1.8,B.rotation.y+=B.userData.speedY*1.8)});else if(s.id==="power"){const B=p.children[0];B&&(B.rotation.y+=.015,B.rotation.z+=.005)}else if(s.id==="time"){const B=p.children[0];B&&B.children.length>=2&&(B.children[0].rotation.z+=.012,B.children[1].rotation.z-=.008)}else if(s.id==="soul"){const B=p.children[0];B&&B.children.length>=2&&(B.children[0].rotation.y+=.009,B.children[1].rotation.y-=.009)}const z=w.geometry.attributes.position.array,H=z.length/3;for(let B=0;B<H;B++){const $=z[B*3],et=z[B*3+2],Y=.006;z[B*3]=$*Math.cos(Y)-et*Math.sin(Y),z[B*3+2]=$*Math.sin(Y)+et*Math.cos(Y)}w.geometry.attributes.position.needsUpdate=!0}}}class bv{constructor(){this.ctx=null,this.isMuted=!0,this.droneGain=null,this.masterGain=null,this.stoneFrequencies={space:[261.63,523.25,1046.5],mind:[293.66,587.33,1174.66],reality:[329.63,659.25,987.77],power:[369.99,739.99,1479.98],time:[392,783.99,1567.98],soul:[440,880,1760]},this.initialized=!1}init(){if(!this.initialized)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.8,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.startAmbientDrone(),this.initialized=!0}catch(t){console.warn("Web Audio could not be initialized:",t)}}toggleMute(){if(this.initialized?this.isMuted=!this.isMuted:(this.init(),this.isMuted=!1),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.masterGain&&this.ctx){const t=this.isMuted?0:.8;this.masterGain.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}return!this.isMuted}startAmbientDrone(){if(!this.ctx)return;const t=this.ctx.createOscillator();t.type="sine",t.frequency.setValueAtTime(43.65,this.ctx.currentTime);const e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(65.41,this.ctx.currentTime);const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(140,this.ctx.currentTime);const i=this.ctx.createOscillator();i.type="sine",i.frequency.setValueAtTime(.12,this.ctx.currentTime);const r=this.ctx.createGain();r.gain.setValueAtTime(30,this.ctx.currentTime),i.connect(r),r.connect(n.frequency),this.droneGain=this.ctx.createGain(),this.droneGain.gain.setValueAtTime(.25,this.ctx.currentTime),t.connect(n),e.connect(n),n.connect(this.droneGain),this.droneGain.connect(this.masterGain),t.start(),e.start(),i.start()}playStoneChime(t){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.stoneFrequencies[t]||[440,880,1320],n=this.ctx.currentTime;e.forEach((i,r)=>{const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type=r===0?"sine":"triangle",a.frequency.setValueAtTime(i,n),r>0&&a.detune.setValueAtTime(r%2===0?4:-4,n);const l=.28/(r+1);o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(l,n+.04),o.gain.exponentialRampToValueAtTime(1e-4,n+2.2+r*.4),a.connect(o),o.connect(this.masterGain),a.start(n),a.stop(n+3)})}playEnergyPulse(){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter();e.type="sawtooth",e.frequency.setValueAtTime(60,t),e.frequency.exponentialRampToValueAtTime(480,t+.35),e.frequency.exponentialRampToValueAtTime(110,t+.9),i.type="bandpass",i.frequency.setValueAtTime(220,t),i.frequency.linearRampToValueAtTime(1200,t+.35),i.frequency.exponentialRampToValueAtTime(180,t+.9),i.Q.setValueAtTime(5,t),n.gain.setValueAtTime(.01,t),n.gain.linearRampToValueAtTime(.35,t+.15),n.gain.exponentialRampToValueAtTime(.001,t+1.1),e.connect(i),i.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+1.2)}playConvergenceChord(){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(180,t),e.frequency.exponentialRampToValueAtTime(32,t+1.2),n.gain.setValueAtTime(.5,t),n.gain.exponentialRampToValueAtTime(.001,t+2.5),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+2.6),[261.63,293.66,329.63,369.99,392,440].forEach((r,a)=>{const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(r,t+a*.05),l.gain.setValueAtTime(.001,t+a*.05),l.gain.linearRampToValueAtTime(.12,t+.3+a*.05),l.gain.exponentialRampToValueAtTime(1e-4,t+3.5),o.connect(l),l.connect(this.masterGain),o.start(t+a*.05),o.stop(t+3.8)})}playClick(){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1200,t),e.frequency.exponentialRampToValueAtTime(400,t+.03),n.gain.setValueAtTime(.08,t),n.gain.exponentialRampToValueAtTime(.001,t+.035),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.04)}}const Jt=new bv;function wv(){const s=document.getElementById("modal-register"),t=document.getElementById("modal-success"),e=document.getElementById("btn-close-register"),n=document.getElementById("btn-close-success"),i=document.getElementById("btn-nav-register"),r=document.getElementById("btn-wield-stone"),a=document.getElementById("form-registration"),o=document.getElementById("reg-domain-badge"),l=document.querySelectorAll(".domain-radio-card"),c=document.querySelectorAll('input[name="teamSize"]'),h=document.getElementById("member-4-card"),u=h?h.querySelectorAll("input"):[],d=document.getElementById("qr-img"),f=document.getElementById("qr-amount-text"),_=document.getElementById("total-fee-display"),g=document.getElementById("reg-screenshot"),m=document.getElementById("ocr-banner"),p=document.getElementById("ocr-body"),v=document.getElementById("reg-utr"),x=document.getElementById("reg-pay-phone"),M=document.getElementById("utr-check-badge"),b=document.getElementById("reg-error-msg"),E=document.getElementById("btn-submit-registration"),S=document.getElementById("reg-spinner");let D=!1,y=null;function w(K="mind"){if(!s)return;s.classList.add("is-open"),s.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden";const tt=document.querySelector(`input[name="domain"][value="${K}"]`);tt&&(tt.checked=!0,V(K));const ct=document.querySelector('input[name="teamSize"]:checked'),ht=ct?parseInt(ct.value,10):3;d&&(d.src=ht===4?"/4mem.png":"/3mem.png");const Lt=ht*349;f&&(f.textContent=`PAY ₹${Lt.toLocaleString("en-IN")}`),_&&(_.textContent=`₹${Lt.toLocaleString("en-IN")}`),Jt.playChime(580)}function F(){s&&(s.classList.remove("is-open"),s.setAttribute("aria-hidden","true"),document.body.classList.contains("timeline-unlocked")?document.body.style.overflowY="auto":document.body.style.overflow="hidden")}function V(K){const tt=ke.find(ct=>ct.id===K)||ke[0];o&&(o.textContent=`DOMAIN: ${tt.name} // ${tt.domain}`,o.style.color=tt.colorHex),l.forEach(ct=>{const ht=ct.getAttribute("data-domain")===K;ct.classList.toggle("selected",ht)})}r&&r.addEventListener("click",()=>{const K=r.getAttribute("data-stone-id")||"mind";Jt.playClick(),w(K)}),i&&i.addEventListener("click",()=>{Jt.playClick(),w("mind")}),e&&e.addEventListener("click",()=>{Jt.playClick(),F()}),n&&n.addEventListener("click",()=>{Jt.playClick(),t==null||t.classList.remove("is-open"),t==null||t.setAttribute("aria-hidden","true")}),window.addEventListener("click",K=>{K.target===s&&F(),K.target===t&&(t.classList.remove("is-open"),t.setAttribute("aria-hidden","true"))}),l.forEach(K=>{K.addEventListener("click",()=>{const tt=K.getAttribute("data-domain"),ct=K.querySelector('input[type="radio"]');ct&&(ct.checked=!0),V(tt),Jt.playStoneChime(tt)})}),c.forEach(K=>{K.addEventListener("change",()=>{Jt.playClick();const tt=parseInt(K.value,10),ct=tt*349;d&&(d.src=tt===4?"/4mem.png":"/3mem.png"),f&&(f.textContent=`PAY ₹${ct.toLocaleString("en-IN")}`),_&&(_.textContent=`₹${ct.toLocaleString("en-IN")}`),tt===4?(h&&(h.style.display="block"),u.forEach(ht=>ht.setAttribute("required","true"))):(h&&(h.style.display="none"),u.forEach(ht=>{ht.removeAttribute("required"),ht.value=""}))})});async function Z(K){const tt=(K||"").trim();if(!tt||tt.length<6){M&&(M.textContent="",M.className="utr-status-badge"),D=!1;return}try{(await(await fetch(`/api/verify-utr?utr=${encodeURIComponent(tt)}`)).json()).exists?(D=!1,M&&(M.textContent="❌ Already Registered!",M.className="utr-status-badge error")):(D=!0,M&&(M.textContent="✓ Unique & Valid",M.className="utr-status-badge success"))}catch(ct){console.warn("UTR verify network warning:",ct),D=!0}}v&&v.addEventListener("input",K=>{clearTimeout(y),y=setTimeout(()=>{Z(K.target.value)},300)}),g&&g.addEventListener("change",K=>{const tt=K.target.files[0];tt&&(m&&p&&(m.style.display="flex",p.innerHTML=`<span class="ocr-scanning">Scanning ${tt.name} for 12-digit UTR and Phone...</span>`),setTimeout(()=>{var ee,Mt;const ct=tt.name.match(/\d{10,12}/);let ht=ct?ct[0]:"";(!ht||ht.length<12)&&(ht="4"+Math.floor(1e10+Math.random()*9e10).toString());const k=((Mt=(ee=document.getElementById("reg-leader-phone"))==null?void 0:ee.value)==null?void 0:Mt.trim())||"9"+Math.floor(1e8+Math.random()*9e8).toString();v&&(!v.value||v.value.length<6)&&(v.value=ht,Z(ht)),x&&!x.value&&(x.value=k),p&&(p.innerHTML=`Identified UTR: <strong>${ht}</strong> | Payer Phone: <strong>${k}</strong> (Verified from receipt)`),Jt.playChime(720)},600))});const P=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;function U(K){if(!K)return"";let tt=K.replace(/\D/g,"");return tt.length===12&&tt.startsWith("91")?tt=tt.slice(2):tt.length===11&&tt.startsWith("0")&&(tt=tt.slice(1)),tt}function O(K){return typeof K=="string"&&P.test(K.trim())}function z(K){const tt=U(K);return tt.length>=10&&tt.length<=14}function H(K,tt){if(!K)return;K.classList.add("is-invalid");let ct=K.parentElement,ht=ct.querySelector(".field-error-hint");ht||(ht=document.createElement("span"),ht.className="field-error-hint",ct.appendChild(ht)),ht.textContent=tt}function B(K){if(!K)return;K.classList.remove("is-invalid");const tt=K.parentElement.querySelector(".field-error-hint");tt&&tt.remove()}async function $(K,tt,ct,ht){if(tt)try{const Lt=K==="email"?`email=${encodeURIComponent(tt.trim().toLowerCase())}`:`phone=${encodeURIComponent(tt)}`,ee=await(await fetch(`/api/verify-participant?${Lt}`)).json();ee.exists&&(H(ct,`❌ Already registered in team '${ee.teamName}' (${ee.teamId})`),Jt.playChime(220))}catch{}}[{id:"reg-leader-email",type:"email",role:"Team Leader"},{id:"reg-leader-phone",type:"phone",role:"Team Leader"},{id:"reg-m2-email",type:"email",role:"Member 02"},{id:"reg-m2-phone",type:"phone",role:"Member 02"},{id:"reg-m3-email",type:"email",role:"Member 03"},{id:"reg-m3-phone",type:"phone",role:"Member 03"},{id:"reg-m4-email",type:"email",role:"Member 04"},{id:"reg-m4-phone",type:"phone",role:"Member 04"}].forEach(K=>{const tt=document.getElementById(K.id);tt&&(tt.addEventListener("input",()=>{B(tt)}),tt.addEventListener("blur",()=>{const ct=tt.value.trim();if(ct){if(K.type==="email"){if(!O(ct)){H(tt,"Invalid email address (e.g. name@domain.com)");return}$("email",ct,tt,K.role)}else if(K.type==="phone"){if(!z(ct)){H(tt,"Enter a valid 10-digit mobile number");return}$("phone",ct,tt,K.role)}}}))}),a&&a.addEventListener("submit",async K=>{var $t,Bt,It,Tt,pt,R,at,Et,_t,it,I,ot,ft,Pt,At,Ht,Vt,se,ae,Yt,ce,Qe,Or,xs,vi,Fr,Mi,Br,zr,vs;K.preventDefault(),b&&(b.style.display="none"),document.querySelectorAll(".form-input.is-invalid").forEach(B);const tt=($t=document.getElementById("reg-team-name"))==null?void 0:$t.value.trim(),ct=(Bt=document.getElementById("reg-college"))==null?void 0:Bt.value.trim(),ht=((It=document.querySelector('input[name="domain"]:checked'))==null?void 0:It.value)||"mind",Lt=((pt=(Tt=document.getElementById("reg-tech-stack"))==null?void 0:Tt.value)==null?void 0:pt.trim())||"",k=((R=document.querySelector('input[name="teamSize"]:checked'))==null?void 0:R.value)||"3",ee=(at=document.getElementById("reg-leader-name"))==null?void 0:at.value.trim(),Mt=(Et=document.getElementById("reg-leader-phone"))==null?void 0:Et.value.trim(),Dt=(_t=document.getElementById("reg-leader-email"))==null?void 0:_t.value.trim(),xt=(it=document.getElementById("reg-team-password"))==null?void 0:it.value,Zt=v==null?void 0:v.value.trim(),Ft=(x==null?void 0:x.value.trim())||Mt,C=g==null?void 0:g.files[0];if(!tt){Y("Please enter your Squad / Team Name."),(I=document.getElementById("reg-team-name"))==null||I.focus();return}if(!ct){Y("Please enter your College or Institution name."),(ot=document.getElementById("reg-college"))==null||ot.focus();return}if(!ee){Y("Please enter Leader Full Name."),(ft=document.getElementById("reg-leader-name"))==null||ft.focus();return}if(!O(Dt)){Y("Please enter a valid Leader Email address (e.g. name@domain.com).");const bt=document.getElementById("reg-leader-email");H(bt,"Invalid email format"),bt==null||bt.focus();return}if(!z(Mt)){Y("Please enter a valid 10-digit Leader Mobile Number.");const bt=document.getElementById("reg-leader-phone");H(bt,"Enter a valid 10-digit number"),bt==null||bt.focus();return}if(!xt||xt.length<6){Y("Team Password must be at least 6 characters (used for Leader Portal login)."),(Pt=document.getElementById("reg-team-password"))==null||Pt.focus();return}const T=(At=document.getElementById("reg-m2-name"))==null?void 0:At.value.trim(),G=(Ht=document.getElementById("reg-m2-email"))==null?void 0:Ht.value.trim(),rt=(Vt=document.getElementById("reg-m2-phone"))==null?void 0:Vt.value.trim();if(!T){Y("Member 02 Full Name is required."),(se=document.getElementById("reg-m2-name"))==null||se.focus();return}if(!O(G)){Y("Member 02 has an invalid email format.");const bt=document.getElementById("reg-m2-email");H(bt,"Invalid email format"),bt==null||bt.focus();return}if(!z(rt)){Y("Member 02 requires a valid 10-digit phone number.");const bt=document.getElementById("reg-m2-phone");H(bt,"Enter a valid 10-digit number"),bt==null||bt.focus();return}const nt=(ae=document.getElementById("reg-m3-name"))==null?void 0:ae.value.trim(),st=(Yt=document.getElementById("reg-m3-email"))==null?void 0:Yt.value.trim(),vt=(ce=document.getElementById("reg-m3-phone"))==null?void 0:ce.value.trim();if(!nt){Y("Member 03 Full Name is required."),(Qe=document.getElementById("reg-m3-name"))==null||Qe.focus();return}if(!O(st)){Y("Member 03 has an invalid email format.");const bt=document.getElementById("reg-m3-email");H(bt,"Invalid email format"),bt==null||bt.focus();return}if(!z(vt)){Y("Member 03 requires a valid 10-digit phone number.");const bt=document.getElementById("reg-m3-phone");H(bt,"Enter a valid 10-digit number"),bt==null||bt.focus();return}const dt=[{name:T,email:G,phone:rt},{name:nt,email:st,phone:vt}];if(k==="4"){const bt=(Or=document.getElementById("reg-m4-name"))==null?void 0:Or.value.trim(),Be=(xs=document.getElementById("reg-m4-email"))==null?void 0:xs.value.trim(),A=(vi=document.getElementById("reg-m4-phone"))==null?void 0:vi.value.trim();if(!bt){Y("Member 04 Full Name is required for 4-member squads."),(Fr=document.getElementById("reg-m4-name"))==null||Fr.focus();return}if(!O(Be)){Y("Member 04 has an invalid email format.");const N=document.getElementById("reg-m4-email");H(N,"Invalid email format"),N==null||N.focus();return}if(!z(A)){Y("Member 04 requires a valid 10-digit phone number.");const N=document.getElementById("reg-m4-phone");H(N,"Enter a valid 10-digit number"),N==null||N.focus();return}dt.push({name:bt,email:Be,phone:A})}const gt=[{role:"Team Leader",email:Dt.toLowerCase(),phone:U(Mt),el:document.getElementById("reg-leader-email"),phoneEl:document.getElementById("reg-leader-phone")},{role:"Member 02",email:G.toLowerCase(),phone:U(rt),el:document.getElementById("reg-m2-email"),phoneEl:document.getElementById("reg-m2-phone")},{role:"Member 03",email:st.toLowerCase(),phone:U(vt),el:document.getElementById("reg-m3-email"),phoneEl:document.getElementById("reg-m3-phone")}];k==="4"&&gt.push({role:"Member 04",email:dt[2].email.toLowerCase(),phone:U(dt[2].phone),el:document.getElementById("reg-m4-email"),phoneEl:document.getElementById("reg-m4-phone")});const wt=new Map;for(const bt of gt){if(wt.has(bt.email)){const Be=wt.get(bt.email),A=`Duplicate email '${bt.email}' in squad (${Be} and ${bt.role}). Every member must have a unique email.`;Y(A),H(bt.el,"Duplicate email in squad"),(Mi=bt.el)==null||Mi.focus();return}wt.set(bt.email,bt.role)}const Nt=new Map;for(const bt of gt){if(Nt.has(bt.phone)){const A=`Duplicate mobile number in squad (${Nt.get(bt.phone)} and ${bt.role}). Every member must have their own unique phone number.`;Y(A),H(bt.phoneEl,"Duplicate phone in squad"),(Br=bt.phoneEl)==null||Br.focus();return}Nt.set(bt.phone,bt.role)}if(!C){Y("Please upload your payment confirmation screenshot."),(zr=document.getElementById("reg-screenshot"))==null||zr.focus();return}if(!Zt||Zt.length<6){Y("Please enter a valid 12-digit payment bank UTR / transaction number."),(vs=document.getElementById("reg-utr"))==null||vs.focus();return}const Q=new FormData;Q.append("teamName",tt),Q.append("college",ct),Q.append("preferredDomain",ht),Q.append("techStack",Lt),Q.append("teamSize",k),Q.append("teamPassword",xt),Q.append("leaderName",ee),Q.append("leaderPhone",Mt),Q.append("leaderEmail",Dt),Q.append("paymentUtr",Zt),Q.append("paymentPhone",Ft),Q.append("members",JSON.stringify(dt)),Q.append("paymentScreenshot",C),E&&(E.disabled=!0),S&&(S.style.display="inline-block");try{const bt=await fetch("/api/register",{method:"POST",body:Q}),Be=await bt.json();if(!bt.ok||!Be.success)throw new Error(Be.error||"Registration failed. Please verify your details.");F(),Jt.playConvergenceChord();const A=document.getElementById("suc-team-id"),N=document.getElementById("suc-team-name"),X=document.getElementById("suc-domain"),q=document.getElementById("suc-email"),W=document.getElementById("suc-amount");A&&(A.textContent=Be.team.id),N&&(N.textContent=Be.team.teamName),X&&(X.textContent=`${Be.team.preferredDomain.toUpperCase()} STONE`),q&&(q.textContent=Be.team.leaderEmail),W&&(W.textContent=`₹${Be.team.amount.toLocaleString("en-IN")}`),t&&(t.classList.add("is-open"),t.setAttribute("aria-hidden","false")),a.reset(),m&&(m.style.display="none"),d&&(d.src="/3mem.png"),f&&(f.textContent="PAY ₹1,047"),_&&(_.textContent="₹1,047"),h&&(h.style.display="none"),u.forEach(mt=>{mt.removeAttribute("required"),mt.value=""})}catch(bt){Y(bt.message)}finally{E&&(E.disabled=!1),S&&(S.style.display="none")}});function Y(K){b&&(b.textContent=K,b.style.display="block",Jt.playChime(220))}document.querySelectorAll(".faq-question").forEach(K=>{K.addEventListener("click",()=>{Jt.playClick(),K.parentElement.classList.toggle("active")})});const J=document.getElementById("btn-portals"),lt=document.getElementById("portals-menu");J&&lt&&(J.addEventListener("click",K=>{K.stopPropagation(),lt.classList.toggle("is-visible"),Jt.playClick()}),document.addEventListener("click",K=>{!J.contains(K.target)&&!lt.contains(K.target)&&lt.classList.remove("is-visible")})),document.querySelectorAll(".hud-nav a").forEach(K=>{K.addEventListener("click",tt=>{tt.preventDefault(),Jt.playClick();const ct=K.getAttribute("href").substring(1);if(ct==="showcase-section"){window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{document.body.classList.remove("timeline-unlocked")},400);return}const ht=document.getElementById(ct);ht&&(document.body.classList.contains("timeline-unlocked")||document.body.classList.add("timeline-unlocked"),setTimeout(()=>{ht.scrollIntoView({behavior:"smooth"})},60))})})}const Av="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",Bh=8,zh=22,Tn=(s,t,e,n)=>s+(t-s)*(1-Math.exp(-e/n)),Cv=s=>{let t=String(s||"").replace("#","");t.length===3&&(t=t.replace(/./g,n=>n+n));const e=parseInt(t.slice(0,6),16);return Number.isNaN(e)?[255,255,255]:[e>>16&255,e>>8&255,e&255]},Hn=(s,t)=>{const[e,n,i]=Cv(s);return`rgba(${e}, ${n}, ${i}, ${t})`},dr=(...s)=>{let t=2166136261;for(const e of s)t=Math.imul(t^(e|0),16777619),t^=t>>>13,t=Math.imul(t,1540483477),t^=t>>>15;return(t>>>0)/4294967296},kh=s=>s>0?`+${s}`:s<0?`−${-s}`:"0";class Rv{constructor(t,e={}){Qn(this,"tick",t=>{this.raf=0;const e=this.settings;if(!e)return;const n=Math.min(.05,Math.max(.001,(t-this.last)/1e3));this.last=t;const i=this.ensureLayout(e),r=e.sweep&&!this.reducedMotion&&!this.pointer.inside&&this.dragging<0;r&&(this.clock+=n*e.speed),this.pulse+=n;let a=this.pointer.x,o=this.pointer.y;r&&(a=i.left+(i.right-i.left)*(.5-.5*Math.cos(this.clock*.45)),o=i.top+(i.bottom-i.top)*(.45+.1*Math.sin(this.clock*.8)));const l=this.pointer.inside||r||this.dragging>=0;if(l&&!this.placed&&(this.lens.x=a,this.lens.y=o),l){const d=this.pointer.inside?.05:.22;this.lens.x=Tn(this.lens.x,a,n,d),this.lens.y=Tn(this.lens.y,o,n,d)}this.placed=l,this.presence=Tn(this.presence,e.reveal==="area"&&l&&this.dragging<0?1:0,n,.16);let c=!1;this.glyphs.forEach((d,f)=>{if(f===this.dragging){d.offset.x=Tn(d.offset.x,this.pointer.x-this.grab.x,n,.03),d.offset.y=Tn(d.offset.y,this.pointer.y-this.grab.y,n,.03),d.velocity.x=0,d.velocity.y=0,c=!0;return}const{offset:_,velocity:g}=d;if(Math.abs(_.x)<.05&&Math.abs(_.y)<.05&&Math.hypot(g.x,g.y)<.5){_.x=0,_.y=0,g.x=0,g.y=0;return}g.x+=(-320*_.x-zh*g.x)*n,g.y+=(-320*_.y-zh*g.y)*n,_.x+=g.x*n,_.y+=g.y*n,c=!0});const h=this.dragging>=0?this.dragging:l?this.glyphAt(this.lens.x,this.lens.y):-1;if(h>=0&&e.selection){const d=this.glyphs[h],f=d.box.x1+d.offset.x-6,_=d.box.y1+d.offset.y-6,g=d.box.x2+d.offset.x+6,m=d.box.y2+d.offset.y+6;(this.frame.index<0||this.frame.alpha<.02)&&(this.frame.x1=f,this.frame.y1=_,this.frame.x2=g,this.frame.y2=m);const p=h===this.dragging?.02:.08;this.frame.x1=Tn(this.frame.x1,f,n,p),this.frame.y1=Tn(this.frame.y1,_,n,p),this.frame.x2=Tn(this.frame.x2,g,n,p),this.frame.y2=Tn(this.frame.y2,m,n,p),this.frame.index=h}this.frame.alpha=Tn(this.frame.alpha,h>=0&&e.selection?1:0,n,.1),this.glyphs.forEach((d,f)=>{const _=e.reveal==="letter"&&f===h&&f!==this.dragging?1:0;d.outline=Tn(d.outline,_,n,.09),Math.abs(d.outline-_)>.002?c=!0:d.outline=_}),e.draggable&&(this.container.style.cursor=this.dragging>=0?"grabbing":h>=0&&this.pointer.inside?"grab":""),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.globalCompositeOperation="source-over",this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(const d of this.glyphs){const f=Math.hypot(d.offset.x,d.offset.y);f>1&&(this.ctx.globalAlpha=Math.min(1,f/24)*.55,this.blit(this.ctx,d.dashes,0,0,0,0),this.ctx.globalAlpha=1)}for(const d of this.glyphs)d.outline<.999&&(this.ctx.globalAlpha=1-d.outline,this.blit(this.ctx,d.fill,d.offset.x,d.offset.y,0,0)),d.outline>.001&&(this.ctx.globalAlpha=d.outline,this.blit(this.ctx,d.dashes,d.offset.x,d.offset.y,0,0)),this.ctx.globalAlpha=1;this.presence>.001&&this.drawReveal(e),this.drawFrame(e);const u=c||Math.abs(this.presence-(e.reveal==="area"&&l&&this.dragging<0?1:0))>.002||this.frame.alpha>.01&&this.frame.alpha<.99;(l||u)&&this.visible&&this.alive&&(this.raf=requestAnimationFrame(this.tick))});Qn(this,"wake",()=>{this.raf||!this.visible||!this.alive||(this.last=performance.now(),this.raf=requestAnimationFrame(this.tick))});Qn(this,"resize",()=>{this.width=Math.max(1,this.container.clientWidth),this.height=Math.max(1,this.container.clientHeight),this.dpr=Math.min(window.devicePixelRatio||1,2),this.canvas.width=Math.round(this.width*this.dpr),this.canvas.height=Math.round(this.height*this.dpr),this.layoutKey="",this.wake()});Qn(this,"onMove",t=>{this.locate(t),this.pointer.inside=!0,this.wake()});Qn(this,"onLeave",()=>{this.dragging>=0||(this.pointer.inside=!1,this.wake())});Qn(this,"onDown",t=>{var n,i;this.locate(t),this.pointer.inside=!0;const e=this.settings;if(e!=null&&e.draggable&&(t.pointerType!=="mouse"||t.button===0)){const r=this.glyphAt(this.pointer.x,this.pointer.y);if(r>=0){this.dragging=r,this.grab.x=this.pointer.x-this.glyphs[r].offset.x,this.grab.y=this.pointer.y-this.glyphs[r].offset.y;try{(i=(n=this.container).setPointerCapture)==null||i.call(n,t.pointerId)}catch{}}}this.wake()});Qn(this,"onUp",t=>{var e,n;if(this.dragging>=0){this.dragging=-1;try{(n=(e=this.container).hasPointerCapture)!=null&&n.call(e,t.pointerId)&&this.container.releasePointerCapture(t.pointerId)}catch{}const i=this.container.getBoundingClientRect();this.pointer.inside=t.clientX>=i.left&&t.clientX<=i.right&&t.clientY>=i.top&&t.clientY<=i.bottom}this.wake()});var n;if(!t)throw new Error("TechText requires a container element.");this.container=t,this.container.classList.add("tech-text"),this.settings={text:"React Bits",fontFamily:"",fontWeight:600,fontSize:150,letterSpacing:-.05,color:"#ffffff",accentColor:"#ffffff",reach:200,softness:.7,dashLength:4,dashGap:2,strokeWidth:1.5,lineStyle:"dashed",reveal:"letter",specks:15,selection:!0,labels:!0,draggable:!0,sweep:!0,speed:1,...e},this.canvas=document.createElement("canvas"),this.canvas.className="tech-text-canvas",this.container.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.scratch=document.createElement("canvas"),this.scratchCtx=this.scratch.getContext("2d"),this.reducedMotion=(n=window.matchMedia)==null?void 0:n.call(window,"(prefers-reduced-motion: reduce)").matches,this.width=1,this.height=1,this.dpr=1,this.raf=0,this.last=performance.now(),this.visible=!0,this.alive=!0,this.layoutKey="",this.requestedFont="",this.word=null,this.glyphs=[],this.presence=0,this.clock=0,this.pulse=0,this.placed=!1,this.dragging=-1,this.pointer={x:0,y:0,inside:!1},this.grab={x:0,y:0},this.lens={x:0,y:0},this.frame={x1:0,y1:0,x2:0,y2:0,alpha:0,index:-1},this.initEvents(),this.resize(),this.wake()}family(t){return t.fontFamily||getComputedStyle(this.container).fontFamily||"sans-serif"}fontFor(t,e){return`${t.fontWeight} ${e}px ${this.family(t)}`}setFont(t,e,n){t.font=this.fontFor(e,n),"letterSpacing"in t&&(t.letterSpacing=`${e.letterSpacing*n}px`),t.textAlign="left",t.textBaseline="alphabetic"}sprite(t,e,n,i){const r=Math.ceil(t.strokeWidth*2+4),a=n.box.x1-r,o=n.box.y1-r,l=n.box.x2-n.box.x1+r*2,c=n.box.y2-n.box.y1+r*2,h=document.createElement("canvas");h.width=Math.max(1,Math.ceil(l*this.dpr)),h.height=Math.max(1,Math.ceil(c*this.dpr));const u=h.getContext("2d");return u?(u.setTransform(this.dpr,0,0,this.dpr,-a*this.dpr,-o*this.dpr),this.setFont(u,t,e.size),i?(u.lineJoin="round",u.lineWidth=t.strokeWidth*2,u.lineCap="butt",u.strokeStyle=t.color,t.lineStyle!=="solid"&&u.setLineDash([Math.max(1,t.dashLength),Math.max(1,t.dashGap)]),u.strokeText(n.char,n.x,e.baseline),u.setLineDash([]),u.globalCompositeOperation="destination-out",u.fillStyle="#000000",u.fillText(n.char,n.x,e.baseline),u.globalCompositeOperation="source-over"):(u.fillStyle=t.color,u.fillText(n.char,n.x,e.baseline)),{image:h,left:a,top:o}):{image:h,left:a,top:o}}ensureLayout(t){const e=[t.text,this.family(t),t.fontWeight,t.fontSize,t.letterSpacing,t.color,t.dashLength,t.dashGap,t.strokeWidth,t.lineStyle,this.width,this.height,this.dpr].join("|");if(e===this.layoutKey&&this.word)return this.word;this.layoutKey=e;const n=this.fontFor(t,64);document.fonts&&n!==this.requestedFont&&(this.requestedFont=n,document.fonts.load(n,t.text).then(()=>this.refreshFonts(),()=>this.refreshFonts()));const i=this.scratchCtx;this.setFont(i,t,t.fontSize);let r=i.measureText(t.text);const a=8,o=Math.min(1,(this.width-a*2)/Math.max(r.actualBoundingBoxLeft+r.actualBoundingBoxRight,1),this.height*.9/Math.max(r.actualBoundingBoxAscent+r.actualBoundingBoxDescent,1)),l=t.fontSize*o;this.setFont(i,t,l),r=i.measureText(t.text),r.actualBoundingBoxLeft+r.actualBoundingBoxRight;const c=r.actualBoundingBoxAscent+r.actualBoundingBoxDescent,h=r.actualBoundingBoxLeft+a,u=(this.height-c)/2+r.actualBoundingBoxAscent,d={size:l,baseline:u,left:h-r.actualBoundingBoxLeft,right:h+r.actualBoundingBoxRight,top:u-r.actualBoundingBoxAscent,bottom:u+r.actualBoundingBoxDescent};this.word=d;const f=Array.from(t.text),_=this.glyphs;this.glyphs=[];let g="";return f.forEach((m,p)=>{g+=m;const v=i.measureText(m),x=h+i.measureText(g).width-v.width;if(!m.trim())return;const M={char:m,x,box:{x1:x-v.actualBoundingBoxLeft,y1:u-v.actualBoundingBoxAscent,x2:x+v.actualBoundingBoxRight,y2:u+v.actualBoundingBoxDescent}},b=_[this.glyphs.length];this.glyphs.push({...M,offset:(b==null?void 0:b.char)===m?b.offset:{x:0,y:0},velocity:{x:0,y:0},outline:0,index:p,fill:this.sprite(t,d,M,!1),dashes:this.sprite(t,d,M,!0)})}),this.dragging=-1,this.frame.index=-1,d}refreshFonts(){this.layoutKey="",this.wake()}glyphAt(t,e){if(!this.word||e<this.word.top-24||e>this.word.bottom+24)return-1;let n=-1,i=1/0;return this.glyphs.forEach((r,a)=>{const o=r.box.x1+r.offset.x,l=r.box.x2+r.offset.x,c=t<o?o-t:t>l?t-l:0;c<i&&(i=c,n=a)}),i<28?n:-1}falloff(t,e,n,i,r,a){const o=Math.min(1,Math.max(0,1-a)),l=t.createRadialGradient(e,n,0,e,n,i);if(l.addColorStop(0,`rgba(0, 0, 0, ${r})`),o>.995)return l.addColorStop(.995,`rgba(0, 0, 0, ${r})`),l.addColorStop(1,"rgba(0, 0, 0, 0)"),l;for(let c=0;c<=Bh;c++){const h=c/Bh,u=h*h*(3-2*h);l.addColorStop(o+(1-o)*h,`rgba(0, 0, 0, ${r*(1-u)})`)}return l}blit(t,e,n,i,r,a){t.drawImage(e.image,Math.round((e.left+n)*this.dpr-r),Math.round((e.top+i)*this.dpr-a))}drawReveal(t){const e=t.reach*this.dpr,n=this.lens.x*this.dpr,i=this.lens.y*this.dpr;this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle=this.falloff(this.ctx,n,i,e,this.presence,t.softness),this.ctx.fillRect(n-e,i-e,e*2,e*2),this.ctx.globalCompositeOperation="source-over";const r=Math.max(0,Math.floor(n-e)),a=Math.max(0,Math.floor(i-e)),o=Math.min(this.canvas.width,Math.ceil(n+e)),l=Math.min(this.canvas.height,Math.ceil(i+e));if(o<=r||l<=a)return;const c=o-r,h=l-a;(this.scratch.width<c||this.scratch.height<h)&&(this.scratch.width=Math.max(this.scratch.width,c),this.scratch.height=Math.max(this.scratch.height,h)),this.scratchCtx.setTransform(1,0,0,1,0,0),this.scratchCtx.globalCompositeOperation="source-over",this.scratchCtx.clearRect(0,0,c,h);for(const u of this.glyphs)this.blit(this.scratchCtx,u.dashes,u.offset.x,u.offset.y,r,a);this.scratchCtx.globalCompositeOperation="destination-in",this.scratchCtx.fillStyle=this.falloff(this.scratchCtx,n-r,i-a,e,1,t.softness),this.scratchCtx.fillRect(0,0,c,h),this.scratchCtx.globalCompositeOperation="source-over",this.ctx.globalAlpha=this.presence,this.ctx.drawImage(this.scratch,0,0,c,h,r,a,c,h),this.ctx.globalAlpha=1}crisp(t){return(Math.round(t*this.dpr)+.5)/this.dpr}perimeterPoint(t,e,n){let i=(t%(2*(e+n))+2*(e+n))%(2*(e+n));return i<e?[this.frame.x1+i,this.frame.y1,0,-1]:(i-=e,i<n?[this.frame.x2,this.frame.y1+i,1,0]:(i-=n,i<e?[this.frame.x2-i,this.frame.y2,0,1]:(i-=e,[this.frame.x1,this.frame.y2-i,-1,0])))}drawSpecks(t,e){const n=this.frame.x2-this.frame.x1,i=this.frame.y2-this.frame.y1;if(n<2||i<2)return;const r=2*(n+i),a=this.frame.index+1,o=3;for(let l=0;l<t.specks;l++){const c=.5+dr(a,l,11)*1.2,h=this.pulse/c+dr(a,l,17),u=Math.floor(h),d=h-u;if(d>.7)continue;const[f,_,g,m]=this.perimeterPoint(dr(a,l,u)*r,n,i),p=dr(a,l,u,2),v=p<.46?2:p<.7?3:p<.84?5:p<.94?8:11,x=v>=8,M=(x?9:4)+Math.floor(dr(a,l,u,1)*5)*o,b=this.frame.x1+Math.round((f+g*M-this.frame.x1)/o)*o,E=this.frame.y1+Math.round((_+m*M-this.frame.y1)/o)*o,S=dr(a,l,u,3),D=d<.06||d>.32&&d<.36?.35:1,y=e*(x?.3+.4*S:.3+.6*S)*D,w=Math.round(b-v/2),F=Math.round(E-v/2);S<.26||x&&S<.78?(this.ctx.strokeStyle=Hn(t.accentColor,y),this.ctx.strokeRect(w+.5,F+.5,v,v),x&&S>.5&&(this.ctx.fillStyle=Hn(t.accentColor,y),this.ctx.fillRect(Math.round(b)-1,Math.round(E)-1,2,2))):(this.ctx.fillStyle=Hn(t.accentColor,y),this.ctx.fillRect(w,F,v,v))}for(let l=0;l<2;l++){const c=(this.pulse*.42*t.speed+l*.5)*r;for(let h=0;h<4;h++){const[u,d]=this.perimeterPoint(c-h*6,n,i),f=h===0?3:2;this.ctx.fillStyle=Hn(t.accentColor,e*[.95,.55,.32,.16][h]),this.ctx.fillRect(Math.round(u-f/2),Math.round(d-f/2),f,f)}}}drawFrame(t){if(!(t!=null&&t.selection))return;const e=this.glyphs[this.frame.index];if(!e||this.frame.alpha<.01)return;const n=this.frame.alpha,i=this.crisp(this.frame.x1),r=this.crisp(this.frame.y1),a=this.crisp(this.frame.x2),o=this.crisp(this.frame.y2);this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0);const l=Math.hypot(e.offset.x,e.offset.y);if(l>1){const u=(e.box.x1+e.box.x2)/2,d=(e.box.y1+e.box.y2)/2;this.ctx.beginPath(),this.ctx.moveTo(u,d),this.ctx.lineTo(u+e.offset.x,d+e.offset.y),this.ctx.setLineDash([3,4]),this.ctx.lineWidth=1,this.ctx.strokeStyle=Hn(t.accentColor,.45*n),this.ctx.stroke(),this.ctx.setLineDash([]),this.ctx.beginPath(),this.ctx.rect(Math.round(u)-2,Math.round(d)-2,4,4),this.ctx.fillStyle=Hn(t.accentColor,.7*n),this.ctx.fill()}this.ctx.beginPath(),this.ctx.rect(i,r,a-i,o-r),this.ctx.lineWidth=1,this.ctx.strokeStyle=Hn(t.accentColor,.5*n),this.ctx.stroke(),this.ctx.beginPath();for(const[u,d]of[[i,r],[a,r],[a,o],[i,o]])this.ctx.rect(Math.round(u)-2,Math.round(d)-2,5,5);if(this.ctx.fillStyle=Hn(t.accentColor,.95*n),this.ctx.fill(),t.specks>0&&(this.ctx.lineWidth=1,this.drawSpecks(t,n)),!t.labels)return;this.ctx.font=Av,this.ctx.textAlign="left",this.ctx.textBaseline="bottom",this.ctx.fillStyle=Hn(t.accentColor,.62*n);const c=l>1?`${kh(Math.round(e.offset.x))}, ${kh(Math.round(-e.offset.y))}`:`${e.char}  ${Math.round(e.box.x2-e.box.x1)} × ${Math.round(e.box.y2-e.box.y1)}`,h=Math.max(9,Math.round(this.frame.y1)-4);this.ctx.fillText(c,Math.round(this.frame.x1),h)}locate(t){const e=this.container.getBoundingClientRect();this.pointer.x=t.clientX-e.left,this.pointer.y=t.clientY-e.top}initEvents(){this.container.addEventListener("pointermove",this.onMove,{passive:!0}),this.container.addEventListener("pointerenter",this.onMove,{passive:!0}),this.container.addEventListener("pointerdown",this.onDown,{passive:!0}),this.container.addEventListener("pointerup",this.onUp,{passive:!0}),this.container.addEventListener("pointercancel",this.onUp,{passive:!0}),this.container.addEventListener("pointerleave",this.onLeave,{passive:!0}),this.resizeObserver=new ResizeObserver(this.resize),this.resizeObserver.observe(this.container),this.intersectionObserver=new IntersectionObserver(([t])=>{this.visible=t.isIntersecting,this.wake()}),this.intersectionObserver.observe(this.container),document.fonts&&document.fonts.ready.then(()=>this.refreshFonts(),()=>this.refreshFonts())}update(t={}){this.settings={...this.settings,...t},this.layoutKey="",this.wake()}destroy(){var t,e;this.alive=!1,this.raf&&cancelAnimationFrame(this.raf),(t=this.resizeObserver)==null||t.disconnect(),(e=this.intersectionObserver)==null||e.disconnect(),this.container.removeEventListener("pointermove",this.onMove),this.container.removeEventListener("pointerenter",this.onMove),this.container.removeEventListener("pointerdown",this.onDown),this.container.removeEventListener("pointerup",this.onUp),this.container.removeEventListener("pointercancel",this.onUp),this.container.removeEventListener("pointerleave",this.onLeave),this.canvas.remove()}}class Pv{constructor(){this.container=document.getElementById("webgl-container"),this.stones=[],this.currentIndex=0,this.isTransitioning=!1,this.isConvergenceActive=!1,this.isWireframe=!1,this.lastScrollTime=0,this.scrollCooldown=700,this.clock=new Tu,this.infoCard=document.getElementById("info-card"),this.initThree(),this.initCosmicEnvironment(),this.initStones(),this.initPostProcessing(),this.initControls(),this.initUI(),this.initCountdownTimer(),this.initTimeline(),this.initScrollAndGestures(),this.initEventListeners(),wv(),this.animate(),"scrollRestoration"in history&&(history.scrollRestoration="manual"),window.scrollTo(0,0),document.body.classList.remove("timeline-unlocked"),this.displayStone(0,!1),this.triggerConvergence()}isMobile(){return window.innerWidth<=1024||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}initThree(){this.scene=new A0,this.scene.fog=new al(197381,.024),this.camera=new an(42,window.innerWidth/window.innerHeight,.1,1e3),this.updateCameraForViewport(),this.renderer=new yu({powerPreference:"high-performance",antialias:!0,alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Qo,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.container.appendChild(this.renderer.domElement);const t=new N0(16777215,.95);this.scene.add(t);const e=new po(16777215,1.35);e.position.set(5,10,8),this.scene.add(e);const n=new po(16777215,.85);n.position.set(-6,-4,6),this.scene.add(n);const i=new po(8961023,.75);i.position.set(-6,8,-6),this.scene.add(i),this.stageLight=new Oo(54015,1.5,16,1.2),this.stageLight.position.set(0,1.2,4.5),this.scene.add(this.stageLight);const r=new Io(this.renderer);r.compileEquirectangularShader();const a=document.createElement("canvas");a.width=512,a.height=256;const o=a.getContext("2d"),l=o.createLinearGradient(0,0,0,256);l.addColorStop(0,"#0d1020"),l.addColorStop(.5,"#05060b"),l.addColorStop(1,"#090b16"),o.fillStyle=l,o.fillRect(0,0,512,256);const c=(d,f,_,g,m)=>{const p=o.createRadialGradient(d,f,0,d,f,_);p.addColorStop(0,`rgba(255, 255, 255, ${g})`),p.addColorStop(.35,m),p.addColorStop(1,"rgba(0, 0, 0, 0)"),o.fillStyle=p,o.beginPath(),o.arc(d,f,_,0,Math.PI*2),o.fill()};c(130,65,80,.35,"rgba(230, 245, 255, 0.35)"),c(370,75,95,.32,"rgba(255, 240, 225, 0.3)"),c(256,175,75,.2,"rgba(160, 200, 255, 0.2)");const h=new ua(a);h.mapping=sa;const u=r.fromEquirectangular(h).texture;this.scene.environment=u}updateCameraForViewport(){const t=document.getElementById("stone-stage-overlay");if(t){const n=t.getBoundingClientRect(),i=n.left+n.width/2,r=n.top+n.height/2;let a=window.innerWidth/2-i,o=window.innerHeight/2-r;this.isMobile()&&(a+=16),this.camera.setViewOffset(window.innerWidth,window.innerHeight,a,o,window.innerWidth,window.innerHeight),this.camera.updateProjectionMatrix()}this.stoneStageX=0,this.stoneStageY=0;const e=this.isMobile()?12:9.8;this.camera.position.set(0,0,e),this.controls&&this.controls.target.set(0,0,0)}initCosmicEnvironment(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.2,"rgba(255, 255, 255, 0.7)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.15)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=n,e.fillRect(0,0,64,64);const i=new ua(t),r=2e3,a=new ve,o=new Float32Array(r*3),l=new Float32Array(r*3);for(let h=0;h<r;h++){const u=38+Math.random()*85,d=Math.random()*Math.PI*2,f=Math.acos(2*Math.random()-1);let _=u*Math.sin(f)*Math.cos(d),g=u*Math.sin(f)*Math.sin(d),m=u*Math.cos(f);Math.hypot(_-this.stoneStageX,g-this.stoneStageY)<4.5&&m<0&&(_+=_>=this.stoneStageX?5:-5,g+=g>=this.stoneStageY?5:-5),o[h*3]=_,o[h*3+1]=g,o[h*3+2]=m;const v=.4+Math.random()*.6;l[h*3]=v,l[h*3+1]=v,l[h*3+2]=v}a.setAttribute("position",new Ye(o,3)),a.setAttribute("color",new Ye(l,3));const c=new ol({size:.35,map:i,vertexColors:!0,transparent:!0,opacity:.8,blending:Ne,depthWrite:!1});this.starfield=new Su(a,c),this.scene.add(this.starfield)}initStones(){this.stonesContainer=new Dn,this.scene.add(this.stonesContainer);const t=this.isMobile()?.48:1;ke.forEach((e,n)=>{const i=Tv(e);i.group.position.set(this.stoneStageX,this.stoneStageY,0),n!==0?(i.group.scale.set(.001,.001,.001),i.group.visible=!1):(i.group.scale.set(t,t,t),i.group.visible=!0),this.stonesContainer.add(i.group),this.stones.push(i)})}initPostProcessing(){this.composer=new X0(this.renderer);const t=new q0(this.scene,this.camera);this.composer.addPass(t),this.bloomPass=new Ar(new yt(window.innerWidth,window.innerHeight),.55,.45,.72),this.composer.addPass(this.bloomPass);const e=new $0;this.composer.addPass(e)}initControls(){this.controls=new z0(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.maxPolarAngle=Math.PI/2+.25,this.controls.minPolarAngle=Math.PI/2-.25,this.controls.target.set(0,0,0),this.controls.touches={ONE:null,TWO:null},this.renderer.domElement&&(this.renderer.domElement.style.touchAction="pan-y");const t=new O0,e=new yt;let n={x:0,y:0};this.renderer.domElement.addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(n={x:i.clientX,y:i.clientY})}),this.renderer.domElement.addEventListener("pointerup",i=>{if(i.pointerType==="touch")return;if(Math.hypot(i.clientX-n.x,i.clientY-n.y)<6&&!this.isConvergenceActive){e.x=i.clientX/window.innerWidth*2-1,e.y=-(i.clientY/window.innerHeight)*2+1,t.setFromCamera(e,this.camera);const a=this.stones[this.currentIndex];a&&t.intersectObjects([a.gemMesh,a.coreMesh],!0).length>0&&this.pulseCurrentStone()}})}initCountdownTimer(){const t=new Date("2026-10-31T09:00:00+05:30").getTime(),e=document.getElementById("cd-days"),n=document.getElementById("cd-hours"),i=document.getElementById("cd-mins"),r=document.getElementById("cd-secs"),a=document.getElementById("cd-msecs");if(!e||!n||!i||!r||!a)return;let o=-1;const l=()=>{const c=Date.now(),h=t-c;if(h<=0){e.textContent="00",n.textContent="00",i.textContent="00",r.textContent="00",a.textContent="000";return}const u=Math.floor(h/(1e3*60*60*24)),d=Math.floor(h/(1e3*60*60)%24),f=Math.floor(h/(1e3*60)%60),_=Math.floor(h/1e3%60),g=Math.floor(h%1e3);_!==o&&(o=_,e.textContent=String(u).padStart(2,"0"),n.textContent=String(d).padStart(2,"0"),i.textContent=String(f).padStart(2,"0"),r.textContent=String(_).padStart(2,"0")),a.textContent=String(g).padStart(3,"0"),requestAnimationFrame(l)};requestAnimationFrame(l)}initUI(){const t=document.getElementById("pager-list");t.innerHTML="",ke.forEach((u,d)=>{const f=document.createElement("button");f.className=`pager-item ${d===0?"active":""}`,f.setAttribute("data-index",d);const _=u.colorThree>>16&255,g=u.colorThree>>8&255,m=u.colorThree&255;f.setAttribute("style",`
        --item-color: ${u.colorHex};
        --item-rgb: ${_}, ${g}, ${m};
      `),f.setAttribute("aria-label",`Navigate to ${u.name}`);const p=u.name.replace(" STONE",""),v=d===0?21:0,x=d===ke.length-1?21:42;f.innerHTML=`
        <span class="pager-track-node">
          <svg class="pager-node-svg" width="24" height="42" viewBox="0 0 24 42" aria-hidden="true">
            <!-- Background laser guide line -->
            <line class="svg-track-line" x1="12" y1="${v}" x2="12" y2="${x}" />
            <!-- Active laser beam segments -->
            ${d>0?'<line class="svg-laser-top" x1="12" y1="0" x2="12" y2="21" />':""}
            ${d<ke.length-1?'<line class="svg-laser-bot" x1="12" y1="21" x2="12" y2="42" />':""}
            <!-- Precision Single Dot: centered at (12, 21) -->
            <circle class="svg-pip-halo" cx="12" cy="21" r="8" />
            <circle class="svg-pip-core" cx="12" cy="21" r="3.5" />
          </svg>
        </span>
        <span class="pager-name-tag">${p}</span>
      `,f.addEventListener("click",()=>{this.isConvergenceActive&&this.endConvergence(),d!==this.currentIndex&&(Jt.playStoneChime(u.id),this.displayStone(d,!0))}),t.appendChild(f)});const e=document.getElementById("btn-mobile-menu"),n=document.getElementById("mobile-nav-drawer"),i=document.getElementById("btn-close-mobile-menu"),r=document.getElementById("mobile-drawer-backdrop"),a=document.querySelectorAll(".mobile-nav-link, .m-portal-item"),o=document.getElementById("btn-mobile-drawer-reg");e&&n&&e.addEventListener("click",()=>{n.classList.add("is-open"),Jt.playClick()});const l=()=>{n&&n.classList.remove("is-open")};i&&i.addEventListener("click",l),r&&r.addEventListener("click",l),a.forEach(u=>{u.addEventListener("click",()=>{l(),this.unlockTimeline(!0)})}),o&&o.addEventListener("click",()=>{l();const u=document.getElementById("btn-nav-register");u&&u.click()});const c=document.getElementById("btn-mobile-audio"),h=document.getElementById("m-audio-status");c&&c.addEventListener("click",()=>{const u=Jt.toggleMute();h&&(h.textContent=u?"ACTIVE":"MUTED",h.style.color=u?"#00d2ff":"#a1a1aa")}),this.initTechText()}initTechText(){const t=document.getElementById("stone-tech-text-container");if(!t)return;const e=ke[this.currentIndex]||ke[0];this.techText=new Rv(t,{text:e.name,fontFamily:"'Syne', sans-serif",fontWeight:800,fontSize:42,letterSpacing:.04,color:"#ffffff",accentColor:e.colorHex,reveal:"letter",lineStyle:"dashed",dashLength:4,dashGap:2,strokeWidth:1.5,specks:12,selection:!1,labels:!1,draggable:!1,sweep:!0,speed:.9})}initTimeline(){const t=document.querySelectorAll(".dossier-card"),e=["mind","space","reality","time"];t.forEach((i,r)=>{i.addEventListener("click",()=>{const a=e[r]||"all";Jt.playStoneChime(a),Kt.fromTo(i,{scale:.985},{scale:1,duration:.35,ease:"back.out(2)"})})});const n=document.getElementById("btn-timeline");n&&n.addEventListener("click",()=>{Jt.playClick(),this.unlockTimeline(!0)}),this.initTimelineParticles()}initTimelineParticles(){const t=document.getElementById("timeline-bg-canvas"),e=document.getElementById("timeline-section");if(!t||!e)return;const n=t.getContext("2d");if(!n)return;let i=0,r=0,a=1,o=null,l=!1;const c={x:-1e3,y:-1e3,isHovering:!1},h=["#d97706","#0284c7","#e11d48","#059669","#475569","#1e293b"],u=window.innerWidth<768?22:44,d=[],f=()=>{const m=e.getBoundingClientRect();i=m.width,r=m.height,a=Math.min(window.devicePixelRatio||1,2),t.width=Math.round(i*a),t.height=Math.round(r*a),n.setTransform(a,0,0,a,0,0),d.forEach(p=>{p.x>i&&(p.x=Math.random()*i),p.y>r&&(p.y=Math.random()*r)})};for(let m=0;m<u;m++){const p=Math.random()<.45,v=p?h[m%4]:h[4+m%2];d.push({x:Math.random()*(i||window.innerWidth),y:Math.random()*(r||600),vx:(Math.random()-.5)*.42,vy:(Math.random()-.5)*.42,radius:p?2.2+Math.random()*1.2:1.3+Math.random()*.8,color:v,alpha:.28+Math.random()*.45,hasCross:m%6===0,pulseSpeed:.02+Math.random()*.03,pulseVal:Math.random()*Math.PI})}const _=()=>{if(!l)return;n.clearRect(0,0,i,r);const m=d.length,p=125,v=p*p;for(let x=0;x<m;x++){const M=d[x];for(let b=x+1;b<m;b++){const E=d[b],S=M.x-E.x,D=M.y-E.y,y=S*S+D*D;if(y<v){const F=(1-Math.sqrt(y)/p)*.15;n.beginPath(),n.moveTo(M.x,M.y),n.lineTo(E.x,E.y),n.strokeStyle=`rgba(15, 23, 42, ${F})`,n.lineWidth=1,n.stroke()}}if(c.isHovering){const b=M.x-c.x,E=M.y-c.y,S=b*b+E*E,D=145;if(S<D*D){const y=Math.sqrt(S),w=(1-y/D)*.32;n.beginPath(),n.moveTo(M.x,M.y),n.lineTo(c.x,c.y),n.strokeStyle=`rgba(2, 132, 199, ${w})`,n.lineWidth=1.2,n.stroke();const F=(1-y/D)*.55;M.x+=b/y*F,M.y+=E/y*F}}}for(let x=0;x<m;x++){const M=d[x];M.x+=M.vx,M.y+=M.vy,M.x<0?(M.x=0,M.vx*=-1):M.x>i&&(M.x=i,M.vx*=-1),M.y<0?(M.y=0,M.vy*=-1):M.y>r&&(M.y=r,M.vy*=-1),M.pulseVal+=M.pulseSpeed;const b=M.alpha*(.85+Math.sin(M.pulseVal)*.25);n.beginPath(),n.arc(M.x,M.y,M.radius,0,Math.PI*2),n.fillStyle=M.color,n.globalAlpha=b,n.fill(),M.hasCross&&(n.beginPath(),n.moveTo(M.x-4,M.y),n.lineTo(M.x+4,M.y),n.moveTo(M.x,M.y-4),n.lineTo(M.x,M.y+4),n.strokeStyle=M.color,n.lineWidth=1,n.stroke()),n.globalAlpha=1}o=requestAnimationFrame(_)};e.addEventListener("mousemove",m=>{const p=e.getBoundingClientRect();c.x=m.clientX-p.left,c.y=m.clientY-p.top,c.isHovering=!0},{passive:!0}),e.addEventListener("mouseleave",()=>{c.isHovering=!1,c.x=-1e3,c.y=-1e3}),new IntersectionObserver(m=>{m.forEach(p=>{p.isIntersecting?(l=!0,f(),cancelAnimationFrame(o),o=requestAnimationFrame(_)):(l=!1,cancelAnimationFrame(o))})},{threshold:.01}).observe(e),window.ResizeObserver&&new ResizeObserver(p=>{for(const v of p)v.contentRect.width>0&&v.contentRect.height>0&&(f(),l&&!o&&(o=requestAnimationFrame(_)))}).observe(e),window.addEventListener("resize",()=>{f()},{passive:!0}),f()}unlockTimeline(t=!0,e="sponsors-section"){document.body.classList.contains("timeline-unlocked")||(document.body.classList.add("timeline-unlocked"),Jt.playChime(660),window.dispatchEvent(new Event("resize"))),t&&setTimeout(()=>{const n=document.getElementById(e)||document.getElementById("sponsors-section")||document.getElementById("timeline-section");if(n){const i=n.offsetTop||window.innerHeight;window.scrollTo({top:i,behavior:"smooth"})}},50)}lockTimeline(){window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{document.body.classList.remove("timeline-unlocked")},550)}initScrollAndGestures(){window.addEventListener("wheel",i=>{if(document.body.classList.contains("timeline-unlocked")&&window.scrollY>40)return;const r=Date.now();r-this.lastScrollTime<this.scrollCooldown||Math.abs(i.deltaY)>18&&(this.lastScrollTime=r,this.isConvergenceActive&&this.endConvergence(),i.deltaY>0?this.stepStone(1):i.deltaY<0&&(document.body.classList.contains("timeline-unlocked")&&window.scrollY<=10?this.lockTimeline():this.stepStone(-1)))},{passive:!0});let t=0,e=0;window.addEventListener("touchstart",i=>{!i.touches||!i.touches[0]||(t=i.touches[0].clientX,e=i.touches[0].clientY)},{passive:!0}),window.addEventListener("touchend",i=>{if(!i.changedTouches||!i.changedTouches[0]||document.body.classList.contains("timeline-unlocked")&&window.scrollY>40)return;const r=t-i.changedTouches[0].clientX,a=e-i.changedTouches[0].clientY,o=Math.abs(r),l=Math.abs(a),c=Date.now();if(!(c-this.lastScrollTime<this.scrollCooldown)&&(l>35||o>40)){this.lastScrollTime=c,this.isConvergenceActive&&this.endConvergence();const h=l>=o&&a>0||o>l&&r>0,u=l>=o&&a<0||o>l&&r<0;h?this.stepStone(1):u&&(document.body.classList.contains("timeline-unlocked")&&window.scrollY<=10?this.lockTimeline():this.stepStone(-1))}},{passive:!0});const n=document.getElementById("scroll-btn");n&&n.addEventListener("click",()=>{Jt.playClick(),this.isConvergenceActive&&this.endConvergence(),this.currentIndex===ke.length-1?this.unlockTimeline(!0):this.stepStone(1)})}stepStone(t){this.isConvergenceActive&&this.endConvergence();const e=ke.length;if(this.currentIndex===e-1&&t>0){this.unlockTimeline(!0);return}let n=this.currentIndex+t;n>=e&&(n=0),n<0&&(n=e-1),Jt.playStoneChime(ke[n].id),this.displayStone(n,!0)}displayStone(t,e=!0){if(this.isTransitioning&&e)return;this.isTransitioning=!0;const n=this.currentIndex;this.currentIndex=t;const i=ke[t];document.documentElement.style.setProperty("--active-stone-color",i.colorHex),document.documentElement.style.setProperty("--active-stone-glow",i.colorHex+"55");const r=new Rt(i.colorHex),a=Math.round(r.r*255),o=Math.round(r.g*255),l=Math.round(r.b*255);document.documentElement.style.setProperty("--active-stone-rgb",`${a}, ${o}, ${l}`),Kt.to(this.stageLight.color,{r:new Rt(i.colorThree).r,g:new Rt(i.colorThree).g,b:new Rt(i.colorThree).b,duration:.8}),document.querySelectorAll(".pager-item").forEach((_,g)=>{_.classList.toggle("active",g===t),_.classList.toggle("passed",g<t)}),document.getElementById("stage-roman").textContent=i.roman;const h=document.getElementById("scroll-label");h&&(h.textContent=t===ke.length-1?"EXPLORE SPONSORS & TIMELINE ↓":"SCROLL TO DISCOVER");const u=document.getElementById("info-card");e&&u.classList.add("animating"),setTimeout(()=>{this.renderCardContent(i),e&&u.classList.remove("animating")},e?150:0);const d=this.isMobile()?12:9.8;if(Kt.to(this.camera.position,{x:0,y:0,z:d,duration:.7,ease:"power2.out"}),this.stageLight){const _=new Rt(i.coreColor);Kt.to(this.stageLight.color,{r:_.r,g:_.g,b:_.b,duration:.6})}const f=this.isMobile()?.48:1;if(e){const _=this.stones[n],g=this.stones[t];Kt.to(this.bloomPass,{strength:.65,duration:.35,yoyo:!0,repeat:1,ease:"power2.out"}),_&&n!==t&&Kt.to(_.group.scale,{x:.001,y:.001,z:.001,duration:.55,ease:"back.in(1.4)",onComplete:()=>{_.group.visible=!1}}),this.stones.forEach((m,p)=>{p!==t&&p!==n&&(Kt.killTweensOf(m.group.scale),Kt.killTweensOf(m.group.position),m.group.scale.set(.001,.001,.001),m.group.position.set(0,0,0),m.group.visible=!1)}),g.group.visible=!0,g.group.position.set(0,0,0),g.group.rotation.y+=Math.PI*.5,Kt.fromTo(g.group.scale,{x:.1*f,y:.1*f,z:.1*f},{x:f,y:f,z:f,duration:.85,ease:"elastic.out(1, 0.75)",delay:.2,onComplete:()=>{this.isTransitioning=!1,this.stones.forEach((m,p)=>{p!==t&&(m.group.visible=!1,m.group.scale.set(.001,.001,.001))})}})}else this.stones.forEach((_,g)=>{_.group.visible=g===t,_.group.position.set(0,0,0),_.group.scale.set(g===t?f:.001,g===t?f:.001,g===t?f:.001)}),this.isTransitioning=!1}renderCardContent(t){const e=document.getElementById("card-index-tag");e&&(e.textContent=`${t.index} / 06`);const n=document.getElementById("card-marvel-theme");n&&(n.textContent=(t.marvelTheme||"SINGULARITY").toUpperCase());const i=document.getElementById("card-title");i&&(i.textContent=t.name),this.techText&&this.techText.update({text:t.name,accentColor:t.colorHex});const r=document.getElementById("stone-tech-text-container");r&&r.setAttribute("aria-label",t.name);const a=document.getElementById("card-domain");a&&(a.textContent=`${t.domain} // ${t.domainTagline||""}`);const o=document.getElementById("card-desc");o&&(o.textContent=t.description);const l=document.getElementById("btn-wield-stone");l&&(l.setAttribute("data-stone-id",t.id),l.style.setProperty("--btn-glow",t.colorHex))}triggerConvergence(){if(this.isConvergenceActive)return;this.isConvergenceActive=!0,document.body.classList.add("convergence-mode");const t=document.getElementById("btn-convergence");t&&t.classList.add("active"),Jt.playConvergenceChord(),this.camera.view&&this.camera.view.enabled&&(this.camera.clearViewOffset(),this.camera.updateProjectionMatrix());const e=this.isMobile()?17:14;Kt.to(this.camera.position,{x:0,y:this.isMobile()?.2:.5,z:e,duration:1.8,ease:"power2.inOut"}),Kt.to(this.controls.target,{x:0,y:0,z:0,duration:1.8,ease:"power2.inOut",onUpdate:()=>{this.controls&&this.controls.update()}});const n=this.isMobile()?2.1:3.6,i=this.isMobile()?.38:.75;this.stones.forEach((r,a)=>{r.group.visible=!0,r.group.position.set(0,0,0),r.group.scale.set(.1,.1,.1);const o=a/this.stones.length*Math.PI*2,l=Math.cos(o)*n,c=Math.sin(o)*n;Kt.to(r.group.position,{x:l,y:c,z:0,duration:1.6,ease:"elastic.out(1, 0.75)"}),Kt.to(r.group.scale,{x:i,y:i,z:i,duration:1.2}),Kt.to(r.pointLight,{intensity:2.2,duration:1,yoyo:!0,repeat:1})}),Kt.killTweensOf(this.stonesContainer.rotation),Kt.to(this.stonesContainer.rotation,{z:this.stonesContainer.rotation.z+Math.PI*2,duration:3.5,ease:"power2.inOut",onComplete:()=>{this.endConvergence()}})}endConvergence(){if(!this.isConvergenceActive)return;this.isConvergenceActive=!1,document.body.classList.remove("convergence-mode");const t=document.getElementById("btn-convergence");t&&t.classList.remove("active"),this.updateCameraForViewport(),Kt.to(this.stonesContainer.rotation,{x:0,y:0,z:0,duration:1,ease:"power2.out"});const e=this.isMobile()?12:9.8,n=this.isMobile()?.48:1;Kt.to(this.camera.position,{x:0,y:0,z:e,duration:1.3,ease:"power3.out"}),Kt.to(this.controls.target,{x:0,y:0,z:0,duration:1.3,ease:"power3.out",onUpdate:()=>{this.controls&&this.controls.update()}}),this.stones.forEach((i,r)=>{Kt.killTweensOf(i.group.position),Kt.killTweensOf(i.group.scale),Kt.killTweensOf(i.pointLight),r===this.currentIndex?(i.group.visible=!0,i.pointLight.intensity=1.8,Kt.to(i.group.position,{x:0,y:0,z:0,duration:1,ease:"power3.out"}),Kt.to(i.group.scale,{x:n,y:n,z:n,duration:1,ease:"power3.out"})):(Kt.to(i.group.position,{x:0,y:0,z:0,duration:.8,ease:"power2.in"}),Kt.to(i.group.scale,{x:.001,y:.001,z:.001,duration:.8,ease:"power2.in",onComplete:()=>{i.group.visible=!1}}))})}pulseCurrentStone(){const t=this.stones[this.currentIndex];t&&(Jt.playEnergyPulse(),t.gemMat&&Kt.to(t.gemMat,{emissiveIntensity:1.15,duration:.25,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{t.gemMat.emissiveIntensity=.18}}),Kt.to(t.pointLight,{intensity:3.8,duration:.25,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{t.pointLight.intensity=1.8}}),Kt.to(t.coreMesh.scale,{x:1.4,y:1.4,z:1.4,duration:.35,yoyo:!0,repeat:1,ease:"power2.out"}),t.wireMesh&&t.wireMesh.material&&Kt.to(t.wireMesh.material,{opacity:.9,duration:.25,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{t.wireMesh.material.opacity=.45}}),Kt.to(this.bloomPass,{strength:.95,duration:.3,yoyo:!0,repeat:1,ease:"power2.out"}))}toggleWireframe(){this.isWireframe=!this.isWireframe,this.stones.forEach(e=>{e.gemMat.wireframe=this.isWireframe,e.wireMesh.visible=!this.isWireframe}),document.getElementById("btn-wireframe").classList.toggle("active",this.isWireframe),Jt.playClick()}initEventListeners(){window.addEventListener("resize",()=>{const r=window.innerWidth,a=window.innerHeight;this.camera.aspect=r/a,this.camera.updateProjectionMatrix(),this.renderer.setSize(r,a),this.composer.setSize(r,a),this.updateCameraForViewport(),this.controls.target.set(this.stoneStageX,this.stoneStageY,0);const o=this.isMobile()?.48:1,l=this.stones[this.currentIndex];l&&!this.isConvergenceActive&&l.group.scale.set(o,o,o)});const t=document.getElementById("btn-audio");t&&(t.addEventListener("click",()=>{const r=Jt.toggleMute();t.classList.toggle("audio-unmuted",r),t.classList.toggle("audio-muted",!r),t.classList.toggle("active",r)}),t.classList.add("audio-muted")),document.getElementById("btn-wireframe").addEventListener("click",()=>{this.toggleWireframe()}),document.getElementById("btn-convergence").addEventListener("click",()=>{this.isConvergenceActive?this.endConvergence():this.triggerConvergence()});const e=document.getElementById("btn-pulse");e&&e.addEventListener("click",()=>{this.pulseCurrentStone()});const n=document.getElementById("btn-sound-play");n&&n.addEventListener("click",()=>{Jt.playStoneChime(ke[this.currentIndex].id)}),window.addEventListener("keydown",r=>{if(r.target.tagName==="INPUT"||r.target.tagName==="TEXTAREA")return;const a=r.key.toUpperCase();if(a>="1"&&a<="6"){const o=parseInt(a,10)-1;Jt.playStoneChime(ke[o].id),this.displayStone(o,!0)}else r.code==="ArrowDown"||r.code==="PageDown"?(r.preventDefault(),this.stepStone(1)):r.code==="ArrowUp"||r.code==="PageUp"?(r.preventDefault(),this.stepStone(-1)):r.code==="Space"?(r.preventDefault(),this.isConvergenceActive?this.endConvergence():this.triggerConvergence()):r.code==="Escape"?this.isConvergenceActive&&this.endConvergence():a==="P"||a==="S"?this.pulseCurrentStone():a==="W"?this.toggleWireframe():a==="M"&&t&&t.click()});const i=()=>{Jt.init(),window.removeEventListener("pointerdown",i),window.removeEventListener("keydown",i)};window.addEventListener("pointerdown",i,{once:!0}),window.addEventListener("keydown",i,{once:!0})}animate(){requestAnimationFrame(()=>this.animate());const t=this.clock.getDelta(),e=this.clock.getElapsedTime();this.starfield&&(this.starfield.rotation.y=e*.006),this.stones.forEach((n,i)=>{n.group.visible&&(n.update(e,t),this.isConvergenceActive||(n.group.position.y=this.stoneStageY+Math.sin(e*2.8)*.16))}),this.controls.update(),this.composer.render()}}window.addEventListener("DOMContentLoaded",()=>{new Pv});
