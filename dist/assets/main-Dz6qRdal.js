var tf=Object.defineProperty;var nf=(s,e,t)=>e in s?tf(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var si=(s,e,t)=>nf(s,typeof e!="symbol"?e+"":e,t);import"./modulepreload-polyfill-B5Qt9EMX.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="160",Zi={ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sf=0,Hl=1,rf=2,fu=1,af=2,qn=3,vi=0,jt=1,xn=2,Zn=0,bs=1,kt=2,Wl=3,Xl=4,of=5,Fi=100,lf=101,cf=102,ql=103,Yl=104,hf=200,uf=201,df=202,ff=203,No=204,Fo=205,pf=206,mf=207,gf=208,_f=209,xf=210,vf=211,yf=212,Mf=213,Sf=214,Ef=0,bf=1,Tf=2,ha=3,wf=4,Af=5,Cf=6,Rf=7,pu=0,Pf=1,Lf=2,mi=0,mu=1,gu=2,_u=3,hl=4,If=5,xu=6,vu=300,Rs=301,Ps=302,ua=303,Oo=304,Aa=306,or=1e3,Cn=1001,Bo=1002,Xt=1003,$l=1004,Ba=1005,_n=1006,Df=1007,lr=1008,gi=1009,Uf=1010,Nf=1011,ul=1012,yu=1013,hi=1014,ui=1015,Qn=1016,Mu=1017,Su=1018,zi=1020,Ff=1021,Rn=1023,Of=1024,Bf=1025,ki=1026,Ls=1027,zf=1028,Eu=1029,kf=1030,bu=1031,Tu=1033,za=33776,ka=33777,Ga=33778,Va=33779,jl=35840,Kl=35841,Zl=35842,Ql=35843,wu=36196,Jl=37492,ec=37496,tc=37808,nc=37809,ic=37810,sc=37811,rc=37812,ac=37813,oc=37814,lc=37815,cc=37816,hc=37817,uc=37818,dc=37819,fc=37820,pc=37821,Ha=36492,mc=36494,gc=36495,Gf=36283,_c=36284,xc=36285,vc=36286,Au=3e3,Gi=3001,Vf=3200,Hf=3201,Cu=0,Wf=1,vn="",It="srgb",Jn="srgb-linear",dl="display-p3",Ca="display-p3-linear",da="linear",ct="srgb",fa="rec709",pa="p3",Ji=7680,yc=519,Xf=512,qf=513,Yf=514,Ru=515,$f=516,jf=517,Kf=518,Zf=519,Mc=35044,Sc="300 es",zo=1035,Kn=2e3,ma=2001;class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tr=Math.PI/180,ko=180/Math.PI;function xr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[s&255]+Bt[s>>8&255]+Bt[s>>16&255]+Bt[s>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Dt(s,e,t){return Math.max(e,Math.min(t,s))}function Qf(s,e){return(s%e+e)%e}function Wa(s,e,t){return(1-t)*s+t*e}function Ec(s){return(s&s-1)===0&&s!==0}function Go(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function qt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Jf={DEG2RAD:tr};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,i,r,a,o,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],g=i[0],p=i[3],m=i[6],v=i[1],x=i[4],y=i[7],b=i[2],S=i[5],E=i[8];return r[0]=a*g+o*v+l*b,r[3]=a*p+o*x+l*S,r[6]=a*m+o*y+l*E,r[1]=c*g+h*v+d*b,r[4]=c*p+h*x+d*S,r[7]=c*m+h*y+d*E,r[2]=u*g+f*v+_*b,r[5]=u*p+f*x+_*S,r[8]=u*m+f*y+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,_=t*d+n*u+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(i*c-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=u*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new Ze;function Pu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ga(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ep(){const s=ga("canvas");return s.style.display="block",s}const bc={};function nr(s){s in bc||(bc[s]=!0,console.warn(s))}const Tc=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wc=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wr={[Jn]:{transfer:da,primaries:fa,toReference:s=>s,fromReference:s=>s},[It]:{transfer:ct,primaries:fa,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ca]:{transfer:da,primaries:pa,toReference:s=>s.applyMatrix3(wc),fromReference:s=>s.applyMatrix3(Tc)},[dl]:{transfer:ct,primaries:pa,toReference:s=>s.convertSRGBToLinear().applyMatrix3(wc),fromReference:s=>s.applyMatrix3(Tc).convertLinearToSRGB()}},tp=new Set([Jn,Ca]),rt={enabled:!0,_workingColorSpace:Jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!tp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=wr[e].toReference,i=wr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return wr[s].primaries},getTransfer:function(s){return s===vn?da:wr[s].transfer}};function Ts(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let es;class Lu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{es===void 0&&(es=ga("canvas")),es.width=e.width,es.height=e.height;const n=es.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ga("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ts(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ts(t[n]/255)*255):t[n]=Ts(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let np=0;class Iu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=xr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ya(i[a].image)):r.push(Ya(i[a]))}else r=Ya(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ya(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Lu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ip=0;class Kt extends Yi{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=Cn,i=Cn,r=_n,a=lr,o=Rn,l=gi,c=Kt.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=xr(),this.name="",this.source=new Iu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Gi?It:vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?Gi:Au}set encoding(e){nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Gi?It:vn}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=vu;Kt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(f+1)/2,b=(m+1)/2,S=(h+u)/4,E=(d+g)/4,P=(_+p)/4;return x>y&&x>b?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=S/n,r=E/n):y>b?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=S/i,r=P/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=E/r,i=P/r),this.set(n,i,r,t),this}let v=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(d-g)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sp extends Yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(nr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Gi?It:vn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Kt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Iu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends sp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Du extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rp extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],f=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==u||c!==f||h!==_){let p=1-o;const m=l*u+c*f+h*_+d*g,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const b=Math.sqrt(x),S=Math.atan2(b,m*v);p=Math.sin(p*S)/b,o=Math.sin(o*S)/b}const y=o*v;if(l=l*p+u*y,c=c*p+f*y,h=h*p+_*y,d=d*p+g*y,p===1-o){const b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+h*d+l*f-c*u,e[t+1]=l*_+h*u+c*d-o*f,e[t+2]=c*_+h*f+o*u-l*d,e[t+3]=h*_-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $a.copy(this).projectOnVector(e),this.sub($a)}reflect(e){return this.sub($a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new D,Ac=new qi;class vr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(e.matrixWorld),this.union(Ar)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),Cr.subVectors(this.max,qs),ts.subVectors(e.a,qs),ns.subVectors(e.b,qs),is.subVectors(e.c,qs),ri.subVectors(ns,ts),ai.subVectors(is,ns),Ti.subVectors(ts,is);let t=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Ti.z,Ti.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Ti.z,0,-Ti.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Ti.y,Ti.x,0];return!ja(t,ts,ns,is,Cr)||(t=[1,0,0,0,1,0,0,0,1],!ja(t,ts,ns,is,Cr))?!1:(Rr.crossVectors(ri,ai),t=[Rr.x,Rr.y,Rr.z],ja(t,ts,ns,is,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kn=[new D,new D,new D,new D,new D,new D,new D,new D],Sn=new D,Ar=new vr,ts=new D,ns=new D,is=new D,ri=new D,ai=new D,Ti=new D,qs=new D,Cr=new D,Rr=new D,wi=new D;function ja(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){wi.fromArray(s,r);const o=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ap=new vr,Ys=new D,Ka=new D;class yr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ap.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ys,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Ka)),this.expandByPoint(Ys.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new D,Za=new D,Pr=new D,oi=new D,Qa=new D,Lr=new D,Ja=new D;class Mr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Za.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Za);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Pr),o=oi.dot(this.direction),l=-oi.dot(Pr),c=oi.lengthSq(),h=Math.abs(1-a*a);let d,u,f,_;if(h>0)if(d=a*l-o,u=a*o-l,_=r*h,d>=0)if(u>=-_)if(u<=_){const g=1/h;d*=g,u*=g,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Za).addScaledVector(Pr,u),f}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,i,r){Qa.subVectors(t,e),Lr.subVectors(n,e),Ja.crossVectors(Qa,Lr);let a=this.direction.dot(Ja),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);const l=o*this.direction.dot(Lr.crossVectors(oi,Lr));if(l<0)return null;const c=o*this.direction.dot(Qa.cross(oi));if(c<0||l+c>a)return null;const h=-o*oi.dot(Ja);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,n,i,r,a,o,l,c,h,d,u,f,_,g,p){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,f,_,g,p)}set(e,t,n,i,r,a,o,l,c,h,d,u,f,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ss.setFromMatrixColumn(e,0).length(),r=1/ss.setFromMatrixColumn(e,1).length(),a=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,_=o*h,g=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+_*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,_=c*h,g=c*d;t[0]=u+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,_=c*h,g=c*d;t[0]=u-g*o,t[4]=-a*d,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=g-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,_=o*h,g=o*d;t[0]=l*h,t[4]=_*c-f,t[8]=u*c+g,t[1]=l*d,t[5]=g*c+u,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=g-u*d,t[8]=_*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+_,t[10]=u-g*d}else if(e.order==="XZY"){const u=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+g,t[5]=a*h,t[9]=f*d-_,t[2]=_*d-f,t[6]=o*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(op,e,lp)}lookAt(e,t,n){const i=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),li.crossVectors(n,sn),li.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),li.crossVectors(n,sn)),li.normalize(),Ir.crossVectors(sn,li),i[0]=li.x,i[4]=Ir.x,i[8]=sn.x,i[1]=li.y,i[5]=Ir.y,i[9]=sn.y,i[2]=li.z,i[6]=Ir.z,i[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],v=n[3],x=n[7],y=n[11],b=n[15],S=i[0],E=i[4],P=i[8],M=i[12],T=i[1],N=i[5],k=i[9],q=i[13],A=i[2],F=i[6],O=i[10],G=i[14],W=i[3],z=i[7],Q=i[11],ne=i[15];return r[0]=a*S+o*T+l*A+c*W,r[4]=a*E+o*N+l*F+c*z,r[8]=a*P+o*k+l*O+c*Q,r[12]=a*M+o*q+l*G+c*ne,r[1]=h*S+d*T+u*A+f*W,r[5]=h*E+d*N+u*F+f*z,r[9]=h*P+d*k+u*O+f*Q,r[13]=h*M+d*q+u*G+f*ne,r[2]=_*S+g*T+p*A+m*W,r[6]=_*E+g*N+p*F+m*z,r[10]=_*P+g*k+p*O+m*Q,r[14]=_*M+g*q+p*G+m*ne,r[3]=v*S+x*T+y*A+b*W,r[7]=v*E+x*N+y*F+b*z,r[11]=v*P+x*k+y*O+b*Q,r[15]=v*M+x*q+y*G+b*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+r*l*d-i*c*d-r*o*u+n*c*u+i*o*f-n*l*f)+g*(+t*l*f-t*c*u+r*a*u-i*a*f+i*c*h-r*l*h)+p*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+m*(-i*o*h-t*l*d+t*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],_=e[12],g=e[13],p=e[14],m=e[15],v=d*p*c-g*u*c+g*l*f-o*p*f-d*l*m+o*u*m,x=_*u*c-h*p*c-_*l*f+a*p*f+h*l*m-a*u*m,y=h*g*c-_*d*c+_*o*f-a*g*f-h*o*m+a*d*m,b=_*d*l-h*g*l-_*o*u+a*g*u+h*o*p-a*d*p,S=t*v+n*x+i*y+r*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=v*E,e[1]=(g*u*r-d*p*r-g*i*f+n*p*f+d*i*m-n*u*m)*E,e[2]=(o*p*r-g*l*r+g*i*c-n*p*c-o*i*m+n*l*m)*E,e[3]=(d*l*r-o*u*r-d*i*c+n*u*c+o*i*f-n*l*f)*E,e[4]=x*E,e[5]=(h*p*r-_*u*r+_*i*f-t*p*f-h*i*m+t*u*m)*E,e[6]=(_*l*r-a*p*r-_*i*c+t*p*c+a*i*m-t*l*m)*E,e[7]=(a*u*r-h*l*r+h*i*c-t*u*c-a*i*f+t*l*f)*E,e[8]=y*E,e[9]=(_*d*r-h*g*r-_*n*f+t*g*f+h*n*m-t*d*m)*E,e[10]=(a*g*r-_*o*r+_*n*c-t*g*c-a*n*m+t*o*m)*E,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*f-t*o*f)*E,e[12]=b*E,e[13]=(h*g*i-_*d*i+_*n*u-t*g*u-h*n*p+t*d*p)*E,e[14]=(_*o*i-a*g*i-_*n*l+t*g*l+a*n*p-t*o*p)*E,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*u+t*o*u)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,_=r*d,g=a*h,p=a*d,m=o*d,v=l*c,x=l*h,y=l*d,b=n.x,S=n.y,E=n.z;return i[0]=(1-(g+m))*b,i[1]=(f+y)*b,i[2]=(_-x)*b,i[3]=0,i[4]=(f-y)*S,i[5]=(1-(u+m))*S,i[6]=(p+v)*S,i[7]=0,i[8]=(_+x)*E,i[9]=(p-v)*E,i[10]=(1-(u+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ss.set(i[0],i[1],i[2]).length();const a=ss.set(i[4],i[5],i[6]).length(),o=ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);const c=1/r,h=1/a,d=1/o;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,t.setFromRotationMatrix(En),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Kn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let f,_;if(o===Kn)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ma)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Kn){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(a-r),u=(t+e)*c,f=(n+i)*h;let _,g;if(o===Kn)_=(a+r)*d,g=-2*d;else if(o===ma)_=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ss=new D,En=new xt,op=new D(0,0,0),lp=new D(1,1,1),li=new D,Ir=new D,sn=new D,Cc=new xt,Rc=new qi;let Uu=class Nu{constructor(e=0,t=0,n=0,i=Nu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Uu.DEFAULT_ORDER="XYZ";class fl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cp=0;const Pc=new D,rs=new qi,Vn=new xt,Dr=new D,$s=new D,hp=new D,up=new qi,Lc=new D(1,0,0),Ic=new D(0,1,0),Dc=new D(0,0,1),dp={type:"added"},fp={type:"removed"};class Rt extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new D,t=new Uu,n=new qi,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ze}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(Lc,e)}rotateY(e){return this.rotateOnAxis(Ic,e)}rotateZ(e){return this.rotateOnAxis(Dc,e)}translateOnAxis(e,t){return Pc.copy(e).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lc,e)}translateY(e){return this.translateOnAxis(Ic,e)}translateZ(e){return this.translateOnAxis(Dc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dr.copy(e):Dr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt($s,Dr,this.up):Vn.lookAt(Dr,$s,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),rs.setFromRotationMatrix(Vn),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(dp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,hp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,up,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Rt.DEFAULT_UP=new D(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new D,Hn=new D,eo=new D,Wn=new D,as=new D,os=new D,Uc=new D,to=new D,no=new D,io=new D;let Ur=!1,xs=class Di{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){bn.subVectors(i,t),Hn.subVectors(n,t),eo.subVectors(e,t);const a=bn.dot(bn),o=bn.dot(Hn),l=bn.dot(eo),c=Hn.dot(Hn),h=Hn.dot(eo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getUV(e,t,n,i,r,a,o,l){return Ur===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ur=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),Hn.subVectors(e,t),bn.cross(Hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),bn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ur===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ur=!0),Di.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Di.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;as.subVectors(i,n),os.subVectors(r,n),to.subVectors(e,n);const l=as.dot(to),c=os.dot(to);if(l<=0&&c<=0)return t.copy(n);no.subVectors(e,i);const h=as.dot(no),d=os.dot(no);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(as,a);io.subVectors(e,r);const f=as.dot(io),_=os.dot(io);if(_>=0&&f<=_)return t.copy(r);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(os,o);const p=h*_-f*d;if(p<=0&&d-h>=0&&f-_>=0)return Uc.subVectors(r,i),o=(d-h)/(d-h+(f-_)),t.copy(i).addScaledVector(Uc,o);const m=1/(p+g+u);return a=g*m,o=u*m,t.copy(n).addScaledVector(as,a).addScaledVector(os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};const Fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function so(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=Qf(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=so(a,r,e+1/3),this.g=so(a,r,e),this.b=so(a,r,e-1/3)}return rt.toWorkingColorSpace(this,i),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=Fu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=qa(e.r),this.g=qa(e.g),this.b=qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return rt.fromWorkingColorSpace(zt.copy(this),e),Math.round(Dt(zt.r*255,0,255))*65536+Math.round(Dt(zt.g*255,0,255))*256+Math.round(Dt(zt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,i=zt.g,r=zt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=It){rt.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,i=zt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Nr);const n=Wa(ci.h,Nr.h,t),i=Wa(ci.s,Nr.s,t),r=Wa(ci.l,Nr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Pe;Pe.NAMES=Fu;let pp=0;class $i extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=bs,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=No,this.blendDst=Fo,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==No&&(n.blendSrc=this.blendSrc),this.blendDst!==Fo&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ha&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class An extends $i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new D,Fr=new Te;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXY(t,Fr.x,Fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mc&&(e.usage=this.usage),e}}class Ou extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bu extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mp=0;const mn=new xt,ro=new Rt,ls=new D,rn=new vr,js=new vr,Ct=new D;class Mt extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pu(e)?Bu:Ou)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return ro.lookAt(e),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(rn.min,js.min),rn.expandByPoint(Ct),Ct.addVectors(rn.max,js.max),rn.expandByPoint(Ct)):(rn.expandByPoint(js.min),rn.expandByPoint(js.max))}rn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ct.fromBufferAttribute(o,c),l&&(ls.fromBufferAttribute(e,c),Ct.add(ls)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new D,h[T]=new D;const d=new D,u=new D,f=new D,_=new Te,g=new Te,p=new Te,m=new D,v=new D;function x(T,N,k){d.fromArray(i,T*3),u.fromArray(i,N*3),f.fromArray(i,k*3),_.fromArray(a,T*2),g.fromArray(a,N*2),p.fromArray(a,k*2),u.sub(d),f.sub(d),g.sub(_),p.sub(_);const q=1/(g.x*p.y-p.x*g.y);isFinite(q)&&(m.copy(u).multiplyScalar(p.y).addScaledVector(f,-g.y).multiplyScalar(q),v.copy(f).multiplyScalar(g.x).addScaledVector(u,-p.x).multiplyScalar(q),c[T].add(m),c[N].add(m),c[k].add(m),h[T].add(v),h[N].add(v),h[k].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,N=y.length;T<N;++T){const k=y[T],q=k.start,A=k.count;for(let F=q,O=q+A;F<O;F+=3)x(n[F+0],n[F+1],n[F+2])}const b=new D,S=new D,E=new D,P=new D;function M(T){E.fromArray(r,T*3),P.copy(E);const N=c[T];b.copy(N),b.sub(E.multiplyScalar(E.dot(N))).normalize(),S.crossVectors(P,N);const q=S.dot(h[T])<0?-1:1;l[T*4]=b.x,l[T*4+1]=b.y,l[T*4+2]=b.z,l[T*4+3]=q}for(let T=0,N=y.length;T<N;++T){const k=y[T],q=k.start,A=k.count;for(let F=q,O=q+A;F<O;F+=3)M(n[F+0]),M(n[F+1]),M(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let u=0,f=e.count;u<f;u+=3){const _=e.getX(u+0),g=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let m=0;m<h;m++)u[_++]=c[f++]}return new Zt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nc=new xt,Ai=new Mr,Or=new yr,Fc=new D,cs=new D,hs=new D,us=new D,ao=new D,Br=new D,zr=new Te,kr=new Te,Gr=new Te,Oc=new D,Bc=new D,zc=new D,Vr=new D,Hr=new D;let Et=class extends Rt{constructor(e=new Mt,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(ao.fromBufferAttribute(d,e),a?Br.addScaledVector(ao,h):Br.addScaledVector(ao.sub(t),h))}t.add(Br)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),!(Or.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Or,Fc)===null||Ai.origin.distanceToSquared(Fc)>(e.far-e.near)**2))&&(Nc.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(Nc),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const p=u[_],m=a[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,b=x;y<b;y+=3){const S=o.getX(y),E=o.getX(y+1),P=o.getX(y+2);i=Wr(this,m,e,n,c,h,d,S,E,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const v=o.getX(p),x=o.getX(p+1),y=o.getX(p+2);i=Wr(this,a,e,n,c,h,d,v,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const p=u[_],m=a[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,b=x;y<b;y+=3){const S=y,E=y+1,P=y+2;i=Wr(this,m,e,n,c,h,d,S,E,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const v=p,x=p+1,y=p+2;i=Wr(this,a,e,n,c,h,d,v,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function gp(s,e,t,n,i,r,a,o){let l;if(e.side===jt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===vi,o),l===null)return null;Hr.copy(o),Hr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Hr);return c<t.near||c>t.far?null:{distance:c,point:Hr.clone(),object:s}}function Wr(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,cs),s.getVertexPosition(l,hs),s.getVertexPosition(c,us);const h=gp(s,e,t,n,cs,hs,us,Vr);if(h){i&&(zr.fromBufferAttribute(i,o),kr.fromBufferAttribute(i,l),Gr.fromBufferAttribute(i,c),h.uv=xs.getInterpolation(Vr,cs,hs,us,zr,kr,Gr,new Te)),r&&(zr.fromBufferAttribute(r,o),kr.fromBufferAttribute(r,l),Gr.fromBufferAttribute(r,c),h.uv1=xs.getInterpolation(Vr,cs,hs,us,zr,kr,Gr,new Te),h.uv2=h.uv1),a&&(Oc.fromBufferAttribute(a,o),Bc.fromBufferAttribute(a,l),zc.fromBufferAttribute(a,c),h.normal=xs.getInterpolation(Vr,cs,hs,us,Oc,Bc,zc,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};xs.getNormal(cs,hs,us,d.normal),h.face=d}return h}class zs extends Mt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(d,2));function _(g,p,m,v,x,y,b,S,E,P,M){const T=y/E,N=b/P,k=y/2,q=b/2,A=S/2,F=E+1,O=P+1;let G=0,W=0;const z=new D;for(let Q=0;Q<O;Q++){const ne=Q*N-q;for(let ee=0;ee<F;ee++){const X=ee*T-k;z[g]=X*v,z[p]=ne*x,z[m]=A,c.push(z.x,z.y,z.z),z[g]=0,z[p]=0,z[m]=S>0?1:-1,h.push(z.x,z.y,z.z),d.push(ee/E),d.push(1-Q/P),G+=1}}for(let Q=0;Q<P;Q++)for(let ne=0;ne<E;ne++){const ee=u+ne+F*Q,X=u+ne+F*(Q+1),J=u+(ne+1)+F*(Q+1),oe=u+(ne+1)+F*Q;l.push(ee,X,oe),l.push(X,J,oe),W+=6}o.addGroup(f,W,M),f+=W,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ht(s){const e={};for(let t=0;t<s.length;t++){const n=Is(s[t]);for(const i in n)e[i]=n[i]}return e}function _p(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function zu(s){return s.getRenderTarget()===null?s.outputColorSpace:rt.workingColorSpace}const cr={clone:Is,merge:Ht};var xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $t extends $i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=_p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ku extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends ku{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ds=-90,fs=1;class yp extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new on(ds,fs,e,t);i.layers=this.layers,this.add(i);const r=new on(ds,fs,e,t);r.layers=this.layers,this.add(r);const a=new on(ds,fs,e,t);a.layers=this.layers,this.add(a);const o=new on(ds,fs,e,t);o.layers=this.layers,this.add(o);const l=new on(ds,fs,e,t);l.layers=this.layers,this.add(l);const c=new on(ds,fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Gu extends Kt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mp extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(nr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Gi?It:vn),this.texture=new Gu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new zs(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Zn});r.uniforms.tEquirect.value=t;const a=new Et(i,r),o=t.minFilter;return t.minFilter===lr&&(t.minFilter=_n),new yp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const oo=new D,Sp=new D,Ep=new Ze;class $n{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=oo.subVectors(n,t).cross(Sp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(oo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ep.getNormalMatrix(e),i=this.coplanarPoint(oo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new yr,Xr=new D;class pl{constructor(e=new $n,t=new $n,n=new $n,i=new $n,r=new $n,a=new $n){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],_=i[9],g=i[10],p=i[11],m=i[12],v=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-r,u-c,p-f,y-m).normalize(),n[1].setComponents(l+r,u+c,p+f,y+m).normalize(),n[2].setComponents(l+a,u+h,p+_,y+v).normalize(),n[3].setComponents(l-a,u-h,p-_,y-v).normalize(),n[4].setComponents(l-o,u-d,p-g,y-x).normalize(),t===Kn)n[5].setComponents(l+o,u+d,p+g,y+x).normalize();else if(t===ma)n[5].setComponents(o,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Xr.x=i.normal.x>0?e.max.x:e.min.x,Xr.y=i.normal.y>0?e.max.y:e.min.y,Xr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vu(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function bp(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,f=d.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=s.SHORT;else if(d instanceof Uint32Array)g=s.UNSIGNED_INT;else if(d instanceof Int32Array)g=s.INT;else if(d instanceof Int8Array)g=s.BYTE;else if(d instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,d){const u=h.array,f=h._updateRange,_=h.updateRanges;if(s.bindBuffer(d,c),f.count===-1&&_.length===0&&s.bufferSubData(d,0,u),_.length!==0){for(let g=0,p=_.length;g<p;g++){const m=_[g];t?s.bufferSubData(d,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count):s.bufferSubData(d,m.start*u.BYTES_PER_ELEMENT,u.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,i(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}class Ra extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],_=[],g=[],p=[];for(let m=0;m<h;m++){const v=m*u-a;for(let x=0;x<c;x++){const y=x*d-r;_.push(y,-v,0),g.push(0,0,1),p.push(x/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const x=v+c*m,y=v+c*(m+1),b=v+1+c*(m+1),S=v+1+c*m;f.push(x,y,S),f.push(y,b,S)}this.setIndex(f),this.setAttribute("position",new at(_,3)),this.setAttribute("normal",new at(g,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wp=`#ifdef USE_ALPHAHASH
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
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
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
#endif`,Ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dp=`#ifdef USE_BATCHING
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
#endif`,Up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bp=`#ifdef USE_IRIDESCENCE
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
#endif`,zp=`#ifdef USE_BUMPMAP
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
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$p=`#define PI 3.141592653589793
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
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kp=`vec3 transformedNormal = objectNormal;
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
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",nm=`
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
}`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dm=`#ifdef USE_GRADIENTMAP
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
}`,fm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_m=`uniform bool receiveShadow;
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
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Em=`PhysicalMaterial material;
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
#endif`,bm=`struct PhysicalMaterial {
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
}`,Tm=`
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nm=`#if defined( USE_POINTS_UV )
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
#endif`,Fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zm=`#ifdef USE_MORPHNORMALS
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
#endif`,km=`#ifdef USE_MORPHTARGETS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
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
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
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
#endif`,$m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cg=`float getShadowMask() {
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
}`,hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ug=`#ifdef USE_SKINNING
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
#endif`,dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_g=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xg=`#ifdef USE_TRANSMISSION
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
#endif`,vg=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tg=`uniform sampler2D t2D;
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`#include <common>
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
}`,Lg=`#if DEPTH_PACKING == 3200
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
}`,Ig=`#define DISTANCE
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
}`,Dg=`#define DISTANCE
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`uniform float scale;
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
}`,Og=`uniform vec3 diffuse;
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
}`,Bg=`#include <common>
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
}`,zg=`uniform vec3 diffuse;
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
}`,kg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Vg=`#define MATCAP
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
}`,Hg=`#define MATCAP
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
}`,Wg=`#define NORMAL
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
}`,Xg=`#define NORMAL
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
}`,qg=`#define PHONG
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
}`,Yg=`#define PHONG
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
}`,$g=`#define STANDARD
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
}`,jg=`#define STANDARD
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
}`,Kg=`#define TOON
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
}`,Zg=`#define TOON
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
}`,Qg=`uniform float size;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,e0=`#include <common>
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
}`,t0=`uniform vec3 color;
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
}`,n0=`uniform float rotation;
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
}`,i0=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Tp,alphahash_pars_fragment:wp,alphamap_fragment:Ap,alphamap_pars_fragment:Cp,alphatest_fragment:Rp,alphatest_pars_fragment:Pp,aomap_fragment:Lp,aomap_pars_fragment:Ip,batching_pars_vertex:Dp,batching_vertex:Up,begin_vertex:Np,beginnormal_vertex:Fp,bsdfs:Op,iridescence_fragment:Bp,bumpmap_pars_fragment:zp,clipping_planes_fragment:kp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Hp,color_fragment:Wp,color_pars_fragment:Xp,color_pars_vertex:qp,color_vertex:Yp,common:$p,cube_uv_reflection_fragment:jp,defaultnormal_vertex:Kp,displacementmap_pars_vertex:Zp,displacementmap_vertex:Qp,emissivemap_fragment:Jp,emissivemap_pars_fragment:em,colorspace_fragment:tm,colorspace_pars_fragment:nm,envmap_fragment:im,envmap_common_pars_fragment:sm,envmap_pars_fragment:rm,envmap_pars_vertex:am,envmap_physical_pars_fragment:xm,envmap_vertex:om,fog_vertex:lm,fog_pars_vertex:cm,fog_fragment:hm,fog_pars_fragment:um,gradientmap_pars_fragment:dm,lightmap_fragment:fm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:_m,lights_toon_fragment:vm,lights_toon_pars_fragment:ym,lights_phong_fragment:Mm,lights_phong_pars_fragment:Sm,lights_physical_fragment:Em,lights_physical_pars_fragment:bm,lights_fragment_begin:Tm,lights_fragment_maps:wm,lights_fragment_end:Am,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Rm,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Lm,map_fragment:Im,map_pars_fragment:Dm,map_particle_fragment:Um,map_particle_pars_fragment:Nm,metalnessmap_fragment:Fm,metalnessmap_pars_fragment:Om,morphcolor_vertex:Bm,morphnormal_vertex:zm,morphtarget_pars_vertex:km,morphtarget_vertex:Gm,normal_fragment_begin:Vm,normal_fragment_maps:Hm,normal_pars_fragment:Wm,normal_pars_vertex:Xm,normal_vertex:qm,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:Km,iridescence_pars_fragment:Zm,opaque_fragment:Qm,packing:Jm,premultiplied_alpha_fragment:eg,project_vertex:tg,dithering_fragment:ng,dithering_pars_fragment:ig,roughnessmap_fragment:sg,roughnessmap_pars_fragment:rg,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:og,shadowmap_vertex:lg,shadowmask_pars_fragment:cg,skinbase_vertex:hg,skinning_pars_vertex:ug,skinning_vertex:dg,skinnormal_vertex:fg,specularmap_fragment:pg,specularmap_pars_fragment:mg,tonemapping_fragment:gg,tonemapping_pars_fragment:_g,transmission_fragment:xg,transmission_pars_fragment:vg,uv_pars_fragment:yg,uv_pars_vertex:Mg,uv_vertex:Sg,worldpos_vertex:Eg,background_vert:bg,background_frag:Tg,backgroundCube_vert:wg,backgroundCube_frag:Ag,cube_vert:Cg,cube_frag:Rg,depth_vert:Pg,depth_frag:Lg,distanceRGBA_vert:Ig,distanceRGBA_frag:Dg,equirect_vert:Ug,equirect_frag:Ng,linedashed_vert:Fg,linedashed_frag:Og,meshbasic_vert:Bg,meshbasic_frag:zg,meshlambert_vert:kg,meshlambert_frag:Gg,meshmatcap_vert:Vg,meshmatcap_frag:Hg,meshnormal_vert:Wg,meshnormal_frag:Xg,meshphong_vert:qg,meshphong_frag:Yg,meshphysical_vert:$g,meshphysical_frag:jg,meshtoon_vert:Kg,meshtoon_frag:Zg,points_vert:Qg,points_frag:Jg,shadow_vert:e0,shadow_frag:t0,sprite_vert:n0,sprite_frag:i0},ue={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Un={basic:{uniforms:Ht([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Ht([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Ht([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Ht([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Ht([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Ht([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Ht([ue.points,ue.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Ht([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Ht([ue.common,ue.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Ht([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Ht([ue.sprite,ue.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Ht([ue.common,ue.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Ht([ue.lights,ue.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Un.physical={uniforms:Ht([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const qr={r:0,b:0,g:0};function s0(s,e,t,n,i,r,a){const o=new Pe(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function _(p,m){let v=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x===null?g(o,l):x&&x.isColor&&(g(x,1),v=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Aa)?(h===void 0&&(h=new Et(new zs(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:Is(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=rt.getTransfer(x.colorSpace)!==ct,(d!==x||u!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Et(new Ra(2,2),new $t({name:"BackgroundMaterial",uniforms:Is(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=rt.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,m){p.getRGB(qr,zu(s)),n.buffers.color.setClear(qr.r,qr.g,qr.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(o,l)},render:_}}function r0(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null);let c=l,h=!1;function d(A,F,O,G,W){let z=!1;if(a){const Q=g(G,O,F);c!==Q&&(c=Q,f(c.object)),z=m(A,G,O,W),z&&v(A,G,O,W)}else{const Q=F.wireframe===!0;(c.geometry!==G.id||c.program!==O.id||c.wireframe!==Q)&&(c.geometry=G.id,c.program=O.id,c.wireframe=Q,z=!0)}W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(z||h)&&(h=!1,P(A,F,O,G),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(A){return n.isWebGL2?s.bindVertexArray(A):r.bindVertexArrayOES(A)}function _(A){return n.isWebGL2?s.deleteVertexArray(A):r.deleteVertexArrayOES(A)}function g(A,F,O){const G=O.wireframe===!0;let W=o[A.id];W===void 0&&(W={},o[A.id]=W);let z=W[F.id];z===void 0&&(z={},W[F.id]=z);let Q=z[G];return Q===void 0&&(Q=p(u()),z[G]=Q),Q}function p(A){const F=[],O=[],G=[];for(let W=0;W<i;W++)F[W]=0,O[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:G,object:A,attributes:{},index:null}}function m(A,F,O,G){const W=c.attributes,z=F.attributes;let Q=0;const ne=O.getAttributes();for(const ee in ne)if(ne[ee].location>=0){const J=W[ee];let oe=z[ee];if(oe===void 0&&(ee==="instanceMatrix"&&A.instanceMatrix&&(oe=A.instanceMatrix),ee==="instanceColor"&&A.instanceColor&&(oe=A.instanceColor)),J===void 0||J.attribute!==oe||oe&&J.data!==oe.data)return!0;Q++}return c.attributesNum!==Q||c.index!==G}function v(A,F,O,G){const W={},z=F.attributes;let Q=0;const ne=O.getAttributes();for(const ee in ne)if(ne[ee].location>=0){let J=z[ee];J===void 0&&(ee==="instanceMatrix"&&A.instanceMatrix&&(J=A.instanceMatrix),ee==="instanceColor"&&A.instanceColor&&(J=A.instanceColor));const oe={};oe.attribute=J,J&&J.data&&(oe.data=J.data),W[ee]=oe,Q++}c.attributes=W,c.attributesNum=Q,c.index=G}function x(){const A=c.newAttributes;for(let F=0,O=A.length;F<O;F++)A[F]=0}function y(A){b(A,0)}function b(A,F){const O=c.newAttributes,G=c.enabledAttributes,W=c.attributeDivisors;O[A]=1,G[A]===0&&(s.enableVertexAttribArray(A),G[A]=1),W[A]!==F&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,F),W[A]=F)}function S(){const A=c.newAttributes,F=c.enabledAttributes;for(let O=0,G=F.length;O<G;O++)F[O]!==A[O]&&(s.disableVertexAttribArray(O),F[O]=0)}function E(A,F,O,G,W,z,Q){Q===!0?s.vertexAttribIPointer(A,F,O,W,z):s.vertexAttribPointer(A,F,O,G,W,z)}function P(A,F,O,G){if(n.isWebGL2===!1&&(A.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const W=G.attributes,z=O.getAttributes(),Q=F.defaultAttributeValues;for(const ne in z){const ee=z[ne];if(ee.location>=0){let X=W[ne];if(X===void 0&&(ne==="instanceMatrix"&&A.instanceMatrix&&(X=A.instanceMatrix),ne==="instanceColor"&&A.instanceColor&&(X=A.instanceColor)),X!==void 0){const J=X.normalized,oe=X.itemSize,xe=t.get(X);if(xe===void 0)continue;const ve=xe.buffer,De=xe.type,Re=xe.bytesPerElement,ye=n.isWebGL2===!0&&(De===s.INT||De===s.UNSIGNED_INT||X.gpuType===yu);if(X.isInterleavedBufferAttribute){const ze=X.data,H=ze.stride,je=X.offset;if(ze.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ee.locationSize;Ee++)b(ee.location+Ee,ze.meshPerAttribute);A.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let Ee=0;Ee<ee.locationSize;Ee++)y(ee.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let Ee=0;Ee<ee.locationSize;Ee++)E(ee.location+Ee,oe/ee.locationSize,De,J,H*Re,(je+oe/ee.locationSize*Ee)*Re,ye)}else{if(X.isInstancedBufferAttribute){for(let ze=0;ze<ee.locationSize;ze++)b(ee.location+ze,X.meshPerAttribute);A.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ze=0;ze<ee.locationSize;ze++)y(ee.location+ze);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let ze=0;ze<ee.locationSize;ze++)E(ee.location+ze,oe/ee.locationSize,De,J,oe*Re,oe/ee.locationSize*ze*Re,ye)}}else if(Q!==void 0){const J=Q[ne];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(ee.location,J);break;case 3:s.vertexAttrib3fv(ee.location,J);break;case 4:s.vertexAttrib4fv(ee.location,J);break;default:s.vertexAttrib1fv(ee.location,J)}}}}S()}function M(){k();for(const A in o){const F=o[A];for(const O in F){const G=F[O];for(const W in G)_(G[W].object),delete G[W];delete F[O]}delete o[A]}}function T(A){if(o[A.id]===void 0)return;const F=o[A.id];for(const O in F){const G=F[O];for(const W in G)_(G[W].object),delete G[W];delete F[O]}delete o[A.id]}function N(A){for(const F in o){const O=o[F];if(O[A.id]===void 0)continue;const G=O[A.id];for(const W in G)_(G[W].object),delete G[W];delete O[A.id]}}function k(){q(),h=!0,c!==l&&(c=l,f(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:q,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:y,disableUnusedAttributes:S}}function a0(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,u){if(u===0)return;let f,_;if(i)f=s,_="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](r,h,d,u),t.update(d,r,u)}function c(h,d,u){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<u;_++)this.render(h[_],d[_]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=d[g];t.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function o0(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,y=a||e.has("OES_texture_float"),b=x&&y,S=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:S}}function l0(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new $n,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!i||_===null||_.length===0||r&&!p)r?h(null):c();else{const v=r?0:n,x=v*4;let y=m.clippingState||null;l.value=y,y=h(_,u,x,f);for(let b=0;b!==x;++b)y[b]=t[b];m.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=f+g*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,y=f;x!==g;++x,y+=4)a.copy(d[x]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function c0(s){let e=new WeakMap;function t(a,o){return o===ua?a.mapping=Rs:o===Oo&&(a.mapping=Ps),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ua||o===Oo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Mp(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ml extends ku{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vs=4,kc=[.125,.215,.35,.446,.526,.582],Oi=20,lo=new ml,Gc=new Pe;let co=null,ho=0,uo=0;const Ui=(1+Math.sqrt(5))/2,ps=1/Ui,Vc=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ui,ps),new D(0,Ui,-ps),new D(ps,0,Ui),new D(-ps,0,Ui),new D(Ui,ps,0),new D(-Ui,ps,0)];class Vo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){co=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(co,ho,uo),e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),co=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Qn,format:Rn,colorSpace:Jn,depthBuffer:!1},i=Hc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h0(r)),this._blurMaterial=u0(r,e,t)}return i}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,lo)}_sceneToCubeUV(e,t,n,i){const o=new on(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Gc),h.toneMapping=mi,h.autoClear=!1;const f=new An({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),_=new Et(new zs,f);let g=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,g=!0):(f.color.copy(Gc),g=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):v===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;Yr(i,v*x,m>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Rs||e.mapping===Ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Et(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Yr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,lo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Vc[(i-1)%Vc.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Et(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):Oi;p>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Oi}`);const m=[];let v=0;for(let E=0;E<Oi;++E){const P=E/g,M=Math.exp(-P*P/2);m.push(M),E===0?v+=M:E<p&&(v+=2*M)}for(let E=0;E<m.length;E++)m[E]=m[E]/v;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=_,u.mipInt.value=x-n;const y=this._sizeLods[i],b=3*y*(i>x-vs?i-x+vs:0),S=4*(this._cubeSize-y);Yr(t,b,S,3*y,2*y),l.setRenderTarget(t),l.render(d,lo)}}function h0(s){const e=[],t=[],n=[];let i=s;const r=s-vs+1+kc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-vs?l=kc[a-s+vs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,_=6,g=3,p=2,m=1,v=new Float32Array(g*_*f),x=new Float32Array(p*_*f),y=new Float32Array(m*_*f);for(let S=0;S<f;S++){const E=S%3*2/3-1,P=S>2?0:-1,M=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];v.set(M,g*_*S),x.set(u,p*_*S);const T=[S,S,S,S,S,S];y.set(T,m*_*S)}const b=new Mt;b.setAttribute("position",new Zt(v,g)),b.setAttribute("uv",new Zt(x,p)),b.setAttribute("faceIndex",new Zt(y,m)),e.push(b),i>vs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hc(s,e,t){const n=new Ln(s,e,t);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function u0(s,e,t){const n=new Float32Array(Oi),i=new D(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Wc(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Xc(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function gl(){return`

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
	`}function d0(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ua||l===Oo,h=l===Rs||l===Ps;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Vo(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Vo(s));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function f0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function p0(s,e,t,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);for(const _ in u.morphAttributes){const g=u.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const _ in u)e.update(u[_],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const g=f[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],s.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,_=d.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let x=0,y=v.length;x<y;x+=3){const b=v[x+0],S=v[x+1],E=v[x+2];u.push(b,S,S,E,E,b)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const b=x+0,S=x+1,E=x+2;u.push(b,S,S,E,E,b)}}else return;const p=new(Pu(u)?Bu:Ou)(u,1);p.version=g;const m=r.get(d);m&&e.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function m0(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,_){s.drawElements(r,_,o,f*l),t.update(_,r,1)}function d(f,_,g){if(g===0)return;let p,m;if(i)p=s,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,_,o,f*l,g),t.update(_,r,g)}function u(f,_,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<g;m++)this.render(f[m]/l,_[m]);else{p.multiDrawElementsWEBGL(r,_,0,o,f,0,g);let m=0;for(let v=0;v<g;v++)m+=_[v];t.update(m,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function g0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _0(s,e){return s[0]-e[0]}function x0(s,e){return Math.abs(e[1])-Math.abs(s[1])}function v0(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new dt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=f!==void 0?f.length:0;let g=r.get(h);if(g===void 0||g.count!==_){let A=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",A)};g!==void 0&&g.texture.dispose();const v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],E=h.morphAttributes.color||[];let P=0;v===!0&&(P=1),x===!0&&(P=2),y===!0&&(P=3);let M=h.attributes.position.count*P,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const N=new Float32Array(M*T*4*_),k=new Du(N,M,T,_);k.type=ui,k.needsUpdate=!0;const q=P*4;for(let F=0;F<_;F++){const O=b[F],G=S[F],W=E[F],z=M*T*4*F;for(let Q=0;Q<O.count;Q++){const ne=Q*q;v===!0&&(a.fromBufferAttribute(O,Q),N[z+ne+0]=a.x,N[z+ne+1]=a.y,N[z+ne+2]=a.z,N[z+ne+3]=0),x===!0&&(a.fromBufferAttribute(G,Q),N[z+ne+4]=a.x,N[z+ne+5]=a.y,N[z+ne+6]=a.z,N[z+ne+7]=0),y===!0&&(a.fromBufferAttribute(W,Q),N[z+ne+8]=a.x,N[z+ne+9]=a.y,N[z+ne+10]=a.z,N[z+ne+11]=W.itemSize===4?a.w:1)}}g={count:_,texture:k,size:new Te(M,T)},r.set(h,g),h.addEventListener("dispose",A)}let p=0;for(let v=0;v<u.length;v++)p+=u[v];const m=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",m),d.getUniforms().setValue(s,"morphTargetInfluences",u),d.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const f=u===void 0?0:u.length;let _=n[h.id];if(_===void 0||_.length!==f){_=[];for(let x=0;x<f;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<f;x++){const y=_[x];y[0]=x,y[1]=u[x]}_.sort(x0);for(let x=0;x<8;x++)x<f&&_[x][1]?(o[x][0]=_[x][0],o[x][1]=_[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(_0);const g=h.morphAttributes.position,p=h.morphAttributes.normal;let m=0;for(let x=0;x<8;x++){const y=o[x],b=y[0],S=y[1];b!==Number.MAX_SAFE_INTEGER&&S?(g&&h.getAttribute("morphTarget"+x)!==g[b]&&h.setAttribute("morphTarget"+x,g[b]),p&&h.getAttribute("morphNormal"+x)!==p[b]&&h.setAttribute("morphNormal"+x,p[b]),i[x]=S,m+=S):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const v=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function y0(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Hu extends Kt{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:ki,h!==ki&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ki&&(n=hi),n===void 0&&h===Ls&&(n=zi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Wu=new Kt,Xu=new Hu(1,1);Xu.compareFunction=Ru;const qu=new Du,Yu=new rp,$u=new Gu,qc=[],Yc=[],$c=new Float32Array(16),jc=new Float32Array(9),Kc=new Float32Array(4);function ks(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=qc[i];if(r===void 0&&(r=new Float32Array(i),qc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Tt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function wt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Pa(s,e){let t=Yc[e];t===void 0&&(t=new Int32Array(e),Yc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function M0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function S0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2fv(this.addr,e),wt(t,e)}}function E0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;s.uniform3fv(this.addr,e),wt(t,e)}}function b0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4fv(this.addr,e),wt(t,e)}}function T0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;Kc.set(n),s.uniformMatrix2fv(this.addr,!1,Kc),wt(t,n)}}function w0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;jc.set(n),s.uniformMatrix3fv(this.addr,!1,jc),wt(t,n)}}function A0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;$c.set(n),s.uniformMatrix4fv(this.addr,!1,$c),wt(t,n)}}function C0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function R0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2iv(this.addr,e),wt(t,e)}}function P0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3iv(this.addr,e),wt(t,e)}}function L0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4iv(this.addr,e),wt(t,e)}}function I0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function D0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2uiv(this.addr,e),wt(t,e)}}function U0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3uiv(this.addr,e),wt(t,e)}}function N0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4uiv(this.addr,e),wt(t,e)}}function F0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Xu:Wu;t.setTexture2D(e||r,i)}function O0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yu,i)}function B0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$u,i)}function z0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qu,i)}function k0(s){switch(s){case 5126:return M0;case 35664:return S0;case 35665:return E0;case 35666:return b0;case 35674:return T0;case 35675:return w0;case 35676:return A0;case 5124:case 35670:return C0;case 35667:case 35671:return R0;case 35668:case 35672:return P0;case 35669:case 35673:return L0;case 5125:return I0;case 36294:return D0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return z0}}function G0(s,e){s.uniform1fv(this.addr,e)}function V0(s,e){const t=ks(e,this.size,2);s.uniform2fv(this.addr,t)}function H0(s,e){const t=ks(e,this.size,3);s.uniform3fv(this.addr,t)}function W0(s,e){const t=ks(e,this.size,4);s.uniform4fv(this.addr,t)}function X0(s,e){const t=ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function q0(s,e){const t=ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Y0(s,e){const t=ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $0(s,e){s.uniform1iv(this.addr,e)}function j0(s,e){s.uniform2iv(this.addr,e)}function K0(s,e){s.uniform3iv(this.addr,e)}function Z0(s,e){s.uniform4iv(this.addr,e)}function Q0(s,e){s.uniform1uiv(this.addr,e)}function J0(s,e){s.uniform2uiv(this.addr,e)}function e_(s,e){s.uniform3uiv(this.addr,e)}function t_(s,e){s.uniform4uiv(this.addr,e)}function n_(s,e,t){const n=this.cache,i=e.length,r=Pa(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Wu,r[a])}function i_(s,e,t){const n=this.cache,i=e.length,r=Pa(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Yu,r[a])}function s_(s,e,t){const n=this.cache,i=e.length,r=Pa(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||$u,r[a])}function r_(s,e,t){const n=this.cache,i=e.length,r=Pa(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||qu,r[a])}function a_(s){switch(s){case 5126:return G0;case 35664:return V0;case 35665:return H0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return $0;case 35667:case 35671:return j0;case 35668:case 35672:return K0;case 35669:case 35673:return Z0;case 5125:return Q0;case 36294:return J0;case 36295:return e_;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return r_}}class o_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=k0(t.type)}}class l_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a_(t.type)}}class c_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const fo=/(\w+)(\])?(\[|\.)?/g;function Zc(s,e){s.seq.push(e),s.map[e.id]=e}function h_(s,e,t){const n=s.name,i=n.length;for(fo.lastIndex=0;;){const r=fo.exec(n),a=fo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Zc(t,c===void 0?new o_(o,s,e):new l_(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new c_(o),Zc(t,d)),t=d}}}class ra{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);h_(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Qc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const u_=37297;let d_=0;function f_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function p_(s){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(s);let n;switch(e===t?n="":e===pa&&t===fa?n="LinearDisplayP3ToLinearSRGB":e===fa&&t===pa&&(n="LinearSRGBToLinearDisplayP3"),s){case Jn:case Ca:return[n,"LinearTransferOETF"];case It:case dl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Jc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+f_(s.getShaderSource(e),a)}else return i}function m_(s,e){const t=p_(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function g_(s,e){let t;switch(e){case mu:t="Linear";break;case gu:t="Reinhard";break;case _u:t="OptimizedCineon";break;case hl:t="ACESFilmic";break;case xu:t="AgX";break;case If:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function __(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ys).join(`
`)}function x_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ys).join(`
`)}function v_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function y_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ys(s){return s!==""}function eh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function th(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const M_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(s){return s.replace(M_,E_)}const S_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function E_(s,e){let t=$e[e];if(t===void 0){const n=S_.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ho(t)}const b_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(s){return s.replace(b_,T_)}function T_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ih(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function w_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===af?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function A_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Rs:case Ps:e="ENVMAP_TYPE_CUBE";break;case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function R_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case pu:e="ENVMAP_BLENDING_MULTIPLY";break;case Pf:e="ENVMAP_BLENDING_MIX";break;case Lf:e="ENVMAP_BLENDING_ADD";break}return e}function P_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function L_(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=w_(t),c=A_(t),h=C_(t),d=R_(t),u=P_(t),f=t.isWebGL2?"":__(t),_=x_(t),g=v_(r),p=i.createProgram();let m,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ys).join(`
`),m.length>0&&(m+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ys).join(`
`),v.length>0&&(v+=`
`)):(m=[ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),v=[f,ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?$e.tonemapping_pars_fragment:"",t.toneMapping!==mi?g_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,m_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ys).join(`
`)),a=Ho(a),a=eh(a,t),a=th(a,t),o=Ho(o),o=eh(o,t),o=th(o,t),a=nh(a),o=nh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+m+a,b=x+v+o,S=Qc(i,i.VERTEX_SHADER,y),E=Qc(i,i.FRAGMENT_SHADER,b);i.attachShader(p,S),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function P(k){if(s.debug.checkShaderErrors){const q=i.getProgramInfoLog(p).trim(),A=i.getShaderInfoLog(S).trim(),F=i.getShaderInfoLog(E).trim();let O=!0,G=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,S,E);else{const W=Jc(i,S,"vertex"),z=Jc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+W+`
`+z)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(A===""||F==="")&&(G=!1);G&&(k.diagnostics={runnable:O,programLog:q,vertexShader:{log:A,prefix:m},fragmentShader:{log:F,prefix:v}})}i.deleteShader(S),i.deleteShader(E),M=new ra(i,p),T=y_(i,p)}let M;this.getUniforms=function(){return M===void 0&&P(this),M};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(p,u_)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=E,this}let I_=0;class D_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new U_(e),t.set(e,n)),n}}class U_{constructor(e){this.id=I_++,this.code=e,this.usedTimes=0}}function N_(s,e,t,n,i,r,a){const o=new fl,l=new D_,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function p(M,T,N,k,q){const A=k.fog,F=q.geometry,O=M.isMeshStandardMaterial?k.environment:null,G=(M.isMeshStandardMaterial?t:e).get(M.envMap||O),W=G&&G.mapping===Aa?G.image.height:null,z=_[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ne=Q!==void 0?Q.length:0;let ee=0;F.morphAttributes.position!==void 0&&(ee=1),F.morphAttributes.normal!==void 0&&(ee=2),F.morphAttributes.color!==void 0&&(ee=3);let X,J,oe,xe;if(z){const st=Un[z];X=st.vertexShader,J=st.fragmentShader}else X=M.vertexShader,J=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),xe=l.getFragmentShaderID(M);const ve=s.getRenderTarget(),De=q.isInstancedMesh===!0,Re=q.isBatchedMesh===!0,ye=!!M.map,ze=!!M.matcap,H=!!G,je=!!M.aoMap,Ee=!!M.lightMap,Ue=!!M.bumpMap,se=!!M.normalMap,Ke=!!M.displacementMap,ke=!!M.emissiveMap,R=!!M.metalnessMap,w=!!M.roughnessMap,I=M.anisotropy>0,B=M.clearcoat>0,$=M.iridescence>0,j=M.sheen>0,fe=M.transmission>0,le=I&&!!M.anisotropyMap,de=B&&!!M.clearcoatMap,be=B&&!!M.clearcoatNormalMap,Ne=B&&!!M.clearcoatRoughnessMap,te=$&&!!M.iridescenceMap,Le=$&&!!M.iridescenceThicknessMap,Ie=j&&!!M.sheenColorMap,we=j&&!!M.sheenRoughnessMap,Me=!!M.specularMap,pe=!!M.specularColorMap,L=!!M.specularIntensityMap,re=fe&&!!M.transmissionMap,Se=fe&&!!M.thicknessMap,he=!!M.gradientMap,ie=!!M.alphaMap,U=M.alphaTest>0,ae=!!M.alphaHash,ce=!!M.extensions,ge=!!F.attributes.uv1,Ae=!!F.attributes.uv2,qe=!!F.attributes.uv3;let Ye=mi;return M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ye=s.toneMapping),{isWebGL2:h,shaderID:z,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:J,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Re,instancing:De,instancingColor:De&&q.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Jn,map:ye,matcap:ze,envMap:H,envMapMode:H&&G.mapping,envMapCubeUVHeight:W,aoMap:je,lightMap:Ee,bumpMap:Ue,normalMap:se,displacementMap:u&&Ke,emissiveMap:ke,normalMapObjectSpace:se&&M.normalMapType===Wf,normalMapTangentSpace:se&&M.normalMapType===Cu,metalnessMap:R,roughnessMap:w,anisotropy:I,anisotropyMap:le,clearcoat:B,clearcoatMap:de,clearcoatNormalMap:be,clearcoatRoughnessMap:Ne,iridescence:$,iridescenceMap:te,iridescenceThicknessMap:Le,sheen:j,sheenColorMap:Ie,sheenRoughnessMap:we,specularMap:Me,specularColorMap:pe,specularIntensityMap:L,transmission:fe,transmissionMap:re,thicknessMap:Se,gradientMap:he,opaque:M.transparent===!1&&M.blending===bs,alphaMap:ie,alphaTest:U,alphaHash:ae,combine:M.combine,mapUv:ye&&g(M.map.channel),aoMapUv:je&&g(M.aoMap.channel),lightMapUv:Ee&&g(M.lightMap.channel),bumpMapUv:Ue&&g(M.bumpMap.channel),normalMapUv:se&&g(M.normalMap.channel),displacementMapUv:Ke&&g(M.displacementMap.channel),emissiveMapUv:ke&&g(M.emissiveMap.channel),metalnessMapUv:R&&g(M.metalnessMap.channel),roughnessMapUv:w&&g(M.roughnessMap.channel),anisotropyMapUv:le&&g(M.anisotropyMap.channel),clearcoatMapUv:de&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:be&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(M.sheenRoughnessMap.channel),specularMapUv:Me&&g(M.specularMap.channel),specularColorMapUv:pe&&g(M.specularColorMap.channel),specularIntensityMapUv:L&&g(M.specularIntensityMap.channel),transmissionMapUv:re&&g(M.transmissionMap.channel),thicknessMapUv:Se&&g(M.thicknessMap.channel),alphaMapUv:ie&&g(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(se||I),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:ge,vertexUv2s:Ae,vertexUv3s:qe,pointsUvs:q.isPoints===!0&&!!F.attributes.uv&&(ye||ie),fog:!!A,useFog:M.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:q.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ee,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ye,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ye&&M.map.isVideoTexture===!0&&rt.getTransfer(M.map.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xn,flipSided:M.side===jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ce&&M.extensions.derivatives===!0,extensionFragDepth:ce&&M.extensions.fragDepth===!0,extensionDrawBuffers:ce&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)T.push(N),T.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(v(T,M),x(T,M),T.push(s.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function v(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const T=_[M.type];let N;if(T){const k=Un[T];N=cr.clone(k.uniforms)}else N=M.uniforms;return N}function b(M,T){let N;for(let k=0,q=c.length;k<q;k++){const A=c[k];if(A.cacheKey===T){N=A,++N.usedTimes;break}}return N===void 0&&(N=new L_(s,T,M,r),c.push(N)),N}function S(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:b,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:P}}function F_(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function O_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function sh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function rh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,f,_,g,p){let m=s[e];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},s[e]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=g,m.group=p),e++,m}function o(d,u,f,_,g,p){const m=a(d,u,f,_,g,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(d,u,f,_,g,p){const m=a(d,u,f,_,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(d,u){t.length>1&&t.sort(d||O_),n.length>1&&n.sort(u||sh),i.length>1&&i.sort(u||sh)}function h(){for(let d=e,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function B_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new rh,s.set(n,[a])):i>=r.length?(a=new rh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function z_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Pe};break;case"SpotLight":t={position:new D,direction:new D,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function k_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let G_=0;function V_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function H_(s,e){const t=new z_,n=k_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);const r=new D,a=new xt,o=new xt;function l(h,d){let u=0,f=0,_=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let g=0,p=0,m=0,v=0,x=0,y=0,b=0,S=0,E=0,P=0,M=0;h.sort(V_);const T=d===!0?Math.PI:1;for(let k=0,q=h.length;k<q;k++){const A=h[k],F=A.color,O=A.intensity,G=A.distance,W=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=F.r*O*T,f+=F.g*O*T,_+=F.b*O*T;else if(A.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(A.sh.coefficients[z],O);M++}else if(A.isDirectionalLight){const z=t.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity*T),A.castShadow){const Q=A.shadow,ne=n.get(A);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,i.directionalShadow[g]=ne,i.directionalShadowMap[g]=W,i.directionalShadowMatrix[g]=A.shadow.matrix,y++}i.directional[g]=z,g++}else if(A.isSpotLight){const z=t.get(A);z.position.setFromMatrixPosition(A.matrixWorld),z.color.copy(F).multiplyScalar(O*T),z.distance=G,z.coneCos=Math.cos(A.angle),z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),z.decay=A.decay,i.spot[m]=z;const Q=A.shadow;if(A.map&&(i.spotLightMap[E]=A.map,E++,Q.updateMatrices(A),A.castShadow&&P++),i.spotLightMatrix[m]=Q.matrix,A.castShadow){const ne=n.get(A);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,i.spotShadow[m]=ne,i.spotShadowMap[m]=W,S++}m++}else if(A.isRectAreaLight){const z=t.get(A);z.color.copy(F).multiplyScalar(O),z.halfWidth.set(A.width*.5,0,0),z.halfHeight.set(0,A.height*.5,0),i.rectArea[v]=z,v++}else if(A.isPointLight){const z=t.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity*T),z.distance=A.distance,z.decay=A.decay,A.castShadow){const Q=A.shadow,ne=n.get(A);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,ne.shadowCameraNear=Q.camera.near,ne.shadowCameraFar=Q.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=W,i.pointShadowMatrix[p]=A.shadow.matrix,b++}i.point[p]=z,p++}else if(A.isHemisphereLight){const z=t.get(A);z.skyColor.copy(A.color).multiplyScalar(O*T),z.groundColor.copy(A.groundColor).multiplyScalar(O*T),i.hemi[x]=z,x++}}v>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=_;const N=i.hash;(N.directionalLength!==g||N.pointLength!==p||N.spotLength!==m||N.rectAreaLength!==v||N.hemiLength!==x||N.numDirectionalShadows!==y||N.numPointShadows!==b||N.numSpotShadows!==S||N.numSpotMaps!==E||N.numLightProbes!==M)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=v,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+E-P,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=M,N.directionalLength=g,N.pointLength=p,N.spotLength=m,N.rectAreaLength=v,N.hemiLength=x,N.numDirectionalShadows=y,N.numPointShadows=b,N.numSpotShadows=S,N.numSpotMaps=E,N.numLightProbes=M,i.version=G_++)}function c(h,d){let u=0,f=0,_=0,g=0,p=0;const m=d.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const y=h[v];if(y.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),u++}else if(y.isSpotLight){const b=i.spot[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),_++}else if(y.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),a.copy(y.matrixWorld),a.premultiply(m),o.extractRotation(a),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function ah(s,e){const t=new H_(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function W_(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new ah(s,e),t.set(r,[l])):a>=o.length?(l=new ah(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class X_ extends $i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class q_ extends $i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$_=`uniform sampler2D shadow_pass;
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
}`;function j_(s,e,t){let n=new pl;const i=new Te,r=new Te,a=new dt,o=new X_({depthPacking:Hf}),l=new q_,c={},h=t.maxTextureSize,d={[vi]:jt,[jt]:vi,[xn]:xn},u=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Y_,fragmentShader:$_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new Mt;_.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Et(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let m=this.type;this.render=function(S,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const M=s.getRenderTarget(),T=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Zn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=m!==qn&&this.type===qn,A=m===qn&&this.type!==qn;for(let F=0,O=S.length;F<O;F++){const G=S[F],W=G.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const z=W.getFrameExtents();if(i.multiply(z),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/z.x),i.x=r.x*z.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/z.y),i.y=r.y*z.y,W.mapSize.y=r.y)),W.map===null||q===!0||A===!0){const ne=this.type!==qn?{minFilter:Xt,magFilter:Xt}:{};W.map!==null&&W.map.dispose(),W.map=new Ln(i.x,i.y,ne),W.map.texture.name=G.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const Q=W.getViewportCount();for(let ne=0;ne<Q;ne++){const ee=W.getViewport(ne);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),k.viewport(a),W.updateMatrices(G,ne),n=W.getFrustum(),y(E,P,W.camera,G,this.type)}W.isPointLightShadow!==!0&&this.type===qn&&v(W,P),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(M,T,N)};function v(S,E){const P=e.update(g);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ln(i.x,i.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(E,null,P,u,g,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(E,null,P,f,g,null)}function x(S,E,P,M){let T=null;const N=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)T=N;else if(T=P.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const k=T.uuid,q=E.uuid;let A=c[k];A===void 0&&(A={},c[k]=A);let F=A[q];F===void 0&&(F=T.clone(),A[q]=F,E.addEventListener("dispose",b)),T=F}if(T.visible=E.visible,T.wireframe=E.wireframe,M===qn?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:d[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,P.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const k=s.properties.get(T);k.light=P}return T}function y(S,E,P,M,T){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===qn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);const q=e.update(S),A=S.material;if(Array.isArray(A)){const F=q.groups;for(let O=0,G=F.length;O<G;O++){const W=F[O],z=A[W.materialIndex];if(z&&z.visible){const Q=x(S,z,M,T);S.onBeforeShadow(s,S,E,P,q,Q,W),s.renderBufferDirect(P,null,q,Q,S,W),S.onAfterShadow(s,S,E,P,q,Q,W)}}}else if(A.visible){const F=x(S,A,M,T);S.onBeforeShadow(s,S,E,P,q,F,null),s.renderBufferDirect(P,null,q,F,S,null),S.onAfterShadow(s,S,E,P,q,F,null)}}const k=S.children;for(let q=0,A=k.length;q<A;q++)y(k[q],E,P,M,T)}function b(S){S.target.removeEventListener("dispose",b);for(const P in c){const M=c[P],T=S.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function K_(s,e,t){const n=t.isWebGL2;function i(){let U=!1;const ae=new dt;let ce=null;const ge=new dt(0,0,0,0);return{setMask:function(Ae){ce!==Ae&&!U&&(s.colorMask(Ae,Ae,Ae,Ae),ce=Ae)},setLocked:function(Ae){U=Ae},setClear:function(Ae,qe,Ye,nt,st){st===!0&&(Ae*=nt,qe*=nt,Ye*=nt),ae.set(Ae,qe,Ye,nt),ge.equals(ae)===!1&&(s.clearColor(Ae,qe,Ye,nt),ge.copy(ae))},reset:function(){U=!1,ce=null,ge.set(-1,0,0,0)}}}function r(){let U=!1,ae=null,ce=null,ge=null;return{setTest:function(Ae){Ae?Re(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(Ae){ae!==Ae&&!U&&(s.depthMask(Ae),ae=Ae)},setFunc:function(Ae){if(ce!==Ae){switch(Ae){case Ef:s.depthFunc(s.NEVER);break;case bf:s.depthFunc(s.ALWAYS);break;case Tf:s.depthFunc(s.LESS);break;case ha:s.depthFunc(s.LEQUAL);break;case wf:s.depthFunc(s.EQUAL);break;case Af:s.depthFunc(s.GEQUAL);break;case Cf:s.depthFunc(s.GREATER);break;case Rf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=Ae}},setLocked:function(Ae){U=Ae},setClear:function(Ae){ge!==Ae&&(s.clearDepth(Ae),ge=Ae)},reset:function(){U=!1,ae=null,ce=null,ge=null}}}function a(){let U=!1,ae=null,ce=null,ge=null,Ae=null,qe=null,Ye=null,nt=null,st=null;return{setTest:function(We){U||(We?Re(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(We){ae!==We&&!U&&(s.stencilMask(We),ae=We)},setFunc:function(We,it,Lt){(ce!==We||ge!==it||Ae!==Lt)&&(s.stencilFunc(We,it,Lt),ce=We,ge=it,Ae=Lt)},setOp:function(We,it,Lt){(qe!==We||Ye!==it||nt!==Lt)&&(s.stencilOp(We,it,Lt),qe=We,Ye=it,nt=Lt)},setLocked:function(We){U=We},setClear:function(We){st!==We&&(s.clearStencil(We),st=We)},reset:function(){U=!1,ae=null,ce=null,ge=null,Ae=null,qe=null,Ye=null,nt=null,st=null}}}const o=new i,l=new r,c=new a,h=new WeakMap,d=new WeakMap;let u={},f={},_=new WeakMap,g=[],p=null,m=!1,v=null,x=null,y=null,b=null,S=null,E=null,P=null,M=new Pe(0,0,0),T=0,N=!1,k=null,q=null,A=null,F=null,O=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,z=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),W=z>=1):Q.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),W=z>=2);let ne=null,ee={};const X=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),oe=new dt().fromArray(X),xe=new dt().fromArray(J);function ve(U,ae,ce,ge){const Ae=new Uint8Array(4),qe=s.createTexture();s.bindTexture(U,qe),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<ce;Ye++)n&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(ae,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(ae+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return qe}const De={};De[s.TEXTURE_2D]=ve(s.TEXTURE_2D,s.TEXTURE_2D,1),De[s.TEXTURE_CUBE_MAP]=ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[s.TEXTURE_2D_ARRAY]=ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),De[s.TEXTURE_3D]=ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(s.DEPTH_TEST),l.setFunc(ha),ke(!1),R(Hl),Re(s.CULL_FACE),se(Zn);function Re(U){u[U]!==!0&&(s.enable(U),u[U]=!0)}function ye(U){u[U]!==!1&&(s.disable(U),u[U]=!1)}function ze(U,ae){return f[U]!==ae?(s.bindFramebuffer(U,ae),f[U]=ae,n&&(U===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ae),U===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ae)),!0):!1}function H(U,ae){let ce=g,ge=!1;if(U)if(ce=_.get(ae),ce===void 0&&(ce=[],_.set(ae,ce)),U.isWebGLMultipleRenderTargets){const Ae=U.texture;if(ce.length!==Ae.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let qe=0,Ye=Ae.length;qe<Ye;qe++)ce[qe]=s.COLOR_ATTACHMENT0+qe;ce.length=Ae.length,ge=!0}}else ce[0]!==s.COLOR_ATTACHMENT0&&(ce[0]=s.COLOR_ATTACHMENT0,ge=!0);else ce[0]!==s.BACK&&(ce[0]=s.BACK,ge=!0);ge&&(t.isWebGL2?s.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function je(U){return p!==U?(s.useProgram(U),p=U,!0):!1}const Ee={[Fi]:s.FUNC_ADD,[lf]:s.FUNC_SUBTRACT,[cf]:s.FUNC_REVERSE_SUBTRACT};if(n)Ee[ql]=s.MIN,Ee[Yl]=s.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Ee[ql]=U.MIN_EXT,Ee[Yl]=U.MAX_EXT)}const Ue={[hf]:s.ZERO,[uf]:s.ONE,[df]:s.SRC_COLOR,[No]:s.SRC_ALPHA,[xf]:s.SRC_ALPHA_SATURATE,[gf]:s.DST_COLOR,[pf]:s.DST_ALPHA,[ff]:s.ONE_MINUS_SRC_COLOR,[Fo]:s.ONE_MINUS_SRC_ALPHA,[_f]:s.ONE_MINUS_DST_COLOR,[mf]:s.ONE_MINUS_DST_ALPHA,[vf]:s.CONSTANT_COLOR,[yf]:s.ONE_MINUS_CONSTANT_COLOR,[Mf]:s.CONSTANT_ALPHA,[Sf]:s.ONE_MINUS_CONSTANT_ALPHA};function se(U,ae,ce,ge,Ae,qe,Ye,nt,st,We){if(U===Zn){m===!0&&(ye(s.BLEND),m=!1);return}if(m===!1&&(Re(s.BLEND),m=!0),U!==of){if(U!==v||We!==N){if((x!==Fi||S!==Fi)&&(s.blendEquation(s.FUNC_ADD),x=Fi,S=Fi),We)switch(U){case bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kt:s.blendFunc(s.ONE,s.ONE);break;case Wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kt:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,b=null,E=null,P=null,M.set(0,0,0),T=0,v=U,N=We}return}Ae=Ae||ae,qe=qe||ce,Ye=Ye||ge,(ae!==x||Ae!==S)&&(s.blendEquationSeparate(Ee[ae],Ee[Ae]),x=ae,S=Ae),(ce!==y||ge!==b||qe!==E||Ye!==P)&&(s.blendFuncSeparate(Ue[ce],Ue[ge],Ue[qe],Ue[Ye]),y=ce,b=ge,E=qe,P=Ye),(nt.equals(M)===!1||st!==T)&&(s.blendColor(nt.r,nt.g,nt.b,st),M.copy(nt),T=st),v=U,N=!1}function Ke(U,ae){U.side===xn?ye(s.CULL_FACE):Re(s.CULL_FACE);let ce=U.side===jt;ae&&(ce=!ce),ke(ce),U.blending===bs&&U.transparent===!1?se(Zn):se(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const ge=U.stencilWrite;c.setTest(ge),ge&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),I(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Re(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function ke(U){k!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),k=U)}function R(U){U!==sf?(Re(s.CULL_FACE),U!==q&&(U===Hl?s.cullFace(s.BACK):U===rf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),q=U}function w(U){U!==A&&(W&&s.lineWidth(U),A=U)}function I(U,ae,ce){U?(Re(s.POLYGON_OFFSET_FILL),(F!==ae||O!==ce)&&(s.polygonOffset(ae,ce),F=ae,O=ce)):ye(s.POLYGON_OFFSET_FILL)}function B(U){U?Re(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function $(U){U===void 0&&(U=s.TEXTURE0+G-1),ne!==U&&(s.activeTexture(U),ne=U)}function j(U,ae,ce){ce===void 0&&(ne===null?ce=s.TEXTURE0+G-1:ce=ne);let ge=ee[ce];ge===void 0&&(ge={type:void 0,texture:void 0},ee[ce]=ge),(ge.type!==U||ge.texture!==ae)&&(ne!==ce&&(s.activeTexture(ce),ne=ce),s.bindTexture(U,ae||De[U]),ge.type=U,ge.texture=ae)}function fe(){const U=ee[ne];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function le(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(U){oe.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),oe.copy(U))}function re(U){xe.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),xe.copy(U))}function Se(U,ae){let ce=d.get(ae);ce===void 0&&(ce=new WeakMap,d.set(ae,ce));let ge=ce.get(U);ge===void 0&&(ge=s.getUniformBlockIndex(ae,U.name),ce.set(U,ge))}function he(U,ae){const ge=d.get(ae).get(U);h.get(ae)!==ge&&(s.uniformBlockBinding(ae,ge,U.__bindingPointIndex),h.set(ae,ge))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ne=null,ee={},f={},_=new WeakMap,g=[],p=null,m=!1,v=null,x=null,y=null,b=null,S=null,E=null,P=null,M=new Pe(0,0,0),T=0,N=!1,k=null,q=null,A=null,F=null,O=null,oe.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Re,disable:ye,bindFramebuffer:ze,drawBuffers:H,useProgram:je,setBlending:se,setMaterial:Ke,setFlipSided:ke,setCullFace:R,setLineWidth:w,setPolygonOffset:I,setScissorTest:B,activeTexture:$,bindTexture:j,unbindTexture:fe,compressedTexImage2D:le,compressedTexImage3D:de,texImage2D:Me,texImage3D:pe,updateUBOMapping:Se,uniformBlockBinding:he,texStorage2D:Ie,texStorage3D:we,texSubImage2D:be,texSubImage3D:Ne,compressedTexSubImage2D:te,compressedTexSubImage3D:Le,scissor:L,viewport:re,reset:ie}}function Z_(s,e,t,n,i,r,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,w){return f?new OffscreenCanvas(R,w):ga("canvas")}function g(R,w,I,B){let $=1;if((R.width>B||R.height>B)&&($=B/Math.max(R.width,R.height)),$<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const j=w?Go:Math.floor,fe=j($*R.width),le=j($*R.height);d===void 0&&(d=_(fe,le));const de=I?_(fe,le):d;return de.width=fe,de.height=le,de.getContext("2d").drawImage(R,0,0,fe,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+fe+"x"+le+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return Ec(R.width)&&Ec(R.height)}function m(R){return o?!1:R.wrapS!==Cn||R.wrapT!==Cn||R.minFilter!==Xt&&R.minFilter!==_n}function v(R,w){return R.generateMipmaps&&w&&R.minFilter!==Xt&&R.minFilter!==_n}function x(R){s.generateMipmap(R)}function y(R,w,I,B,$=!1){if(o===!1)return w;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=w;if(w===s.RED&&(I===s.FLOAT&&(j=s.R32F),I===s.HALF_FLOAT&&(j=s.R16F),I===s.UNSIGNED_BYTE&&(j=s.R8)),w===s.RED_INTEGER&&(I===s.UNSIGNED_BYTE&&(j=s.R8UI),I===s.UNSIGNED_SHORT&&(j=s.R16UI),I===s.UNSIGNED_INT&&(j=s.R32UI),I===s.BYTE&&(j=s.R8I),I===s.SHORT&&(j=s.R16I),I===s.INT&&(j=s.R32I)),w===s.RG&&(I===s.FLOAT&&(j=s.RG32F),I===s.HALF_FLOAT&&(j=s.RG16F),I===s.UNSIGNED_BYTE&&(j=s.RG8)),w===s.RGBA){const fe=$?da:rt.getTransfer(B);I===s.FLOAT&&(j=s.RGBA32F),I===s.HALF_FLOAT&&(j=s.RGBA16F),I===s.UNSIGNED_BYTE&&(j=fe===ct?s.SRGB8_ALPHA8:s.RGBA8),I===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),I===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(R,w,I){return v(R,I)===!0||R.isFramebufferTexture&&R.minFilter!==Xt&&R.minFilter!==_n?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function S(R){return R===Xt||R===$l||R===Ba?s.NEAREST:s.LINEAR}function E(R){const w=R.target;w.removeEventListener("dispose",E),M(w),w.isVideoTexture&&h.delete(w)}function P(R){const w=R.target;w.removeEventListener("dispose",P),N(w)}function M(R){const w=n.get(R);if(w.__webglInit===void 0)return;const I=R.source,B=u.get(I);if(B){const $=B[w.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(R),Object.keys(B).length===0&&u.delete(I)}n.remove(R)}function T(R){const w=n.get(R);s.deleteTexture(w.__webglTexture);const I=R.source,B=u.get(I);delete B[w.__cacheKey],a.memory.textures--}function N(R){const w=R.texture,I=n.get(R),B=n.get(w);if(B.__webglTexture!==void 0&&(s.deleteTexture(B.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(I.__webglFramebuffer[$]))for(let j=0;j<I.__webglFramebuffer[$].length;j++)s.deleteFramebuffer(I.__webglFramebuffer[$][j]);else s.deleteFramebuffer(I.__webglFramebuffer[$]);I.__webglDepthbuffer&&s.deleteRenderbuffer(I.__webglDepthbuffer[$])}else{if(Array.isArray(I.__webglFramebuffer))for(let $=0;$<I.__webglFramebuffer.length;$++)s.deleteFramebuffer(I.__webglFramebuffer[$]);else s.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&s.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&s.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let $=0;$<I.__webglColorRenderbuffer.length;$++)I.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(I.__webglColorRenderbuffer[$]);I.__webglDepthRenderbuffer&&s.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let $=0,j=w.length;$<j;$++){const fe=n.get(w[$]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(w[$])}n.remove(w),n.remove(R)}let k=0;function q(){k=0}function A(){const R=k;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),k+=1,R}function F(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function O(R,w){const I=n.get(R);if(R.isVideoTexture&&Ke(R),R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){const B=R.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(I,R,w);return}}t.bindTexture(s.TEXTURE_2D,I.__webglTexture,s.TEXTURE0+w)}function G(R,w){const I=n.get(R);if(R.version>0&&I.__version!==R.version){oe(I,R,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,I.__webglTexture,s.TEXTURE0+w)}function W(R,w){const I=n.get(R);if(R.version>0&&I.__version!==R.version){oe(I,R,w);return}t.bindTexture(s.TEXTURE_3D,I.__webglTexture,s.TEXTURE0+w)}function z(R,w){const I=n.get(R);if(R.version>0&&I.__version!==R.version){xe(I,R,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+w)}const Q={[or]:s.REPEAT,[Cn]:s.CLAMP_TO_EDGE,[Bo]:s.MIRRORED_REPEAT},ne={[Xt]:s.NEAREST,[$l]:s.NEAREST_MIPMAP_NEAREST,[Ba]:s.NEAREST_MIPMAP_LINEAR,[_n]:s.LINEAR,[Df]:s.LINEAR_MIPMAP_NEAREST,[lr]:s.LINEAR_MIPMAP_LINEAR},ee={[Xf]:s.NEVER,[Zf]:s.ALWAYS,[qf]:s.LESS,[Ru]:s.LEQUAL,[Yf]:s.EQUAL,[Kf]:s.GEQUAL,[$f]:s.GREATER,[jf]:s.NOTEQUAL};function X(R,w,I){if(I?(s.texParameteri(R,s.TEXTURE_WRAP_S,Q[w.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Q[w.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Q[w.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ne[w.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ne[w.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==Cn||w.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,S(w.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,S(w.minFilter)),w.minFilter!==Xt&&w.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ee[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Xt||w.minFilter!==Ba&&w.minFilter!==lr||w.type===ui&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Qn&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function J(R,w){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",E));const B=w.source;let $=u.get(B);$===void 0&&($={},u.set(B,$));const j=F(w);if(j!==R.__cacheKey){$[j]===void 0&&($[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,I=!0),$[j].usedTimes++;const fe=$[R.__cacheKey];fe!==void 0&&($[R.__cacheKey].usedTimes--,fe.usedTimes===0&&T(w)),R.__cacheKey=j,R.__webglTexture=$[j].texture}return I}function oe(R,w,I){let B=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(B=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(B=s.TEXTURE_3D);const $=J(R,w),j=w.source;t.bindTexture(B,R.__webglTexture,s.TEXTURE0+I);const fe=n.get(j);if(j.version!==fe.__version||$===!0){t.activeTexture(s.TEXTURE0+I);const le=rt.getPrimaries(rt.workingColorSpace),de=w.colorSpace===vn?null:rt.getPrimaries(w.colorSpace),be=w.colorSpace===vn||le===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ne=m(w)&&p(w.image)===!1;let te=g(w.image,Ne,!1,i.maxTextureSize);te=ke(w,te);const Le=p(te)||o,Ie=r.convert(w.format,w.colorSpace);let we=r.convert(w.type),Me=y(w.internalFormat,Ie,we,w.colorSpace,w.isVideoTexture);X(B,w,Le);let pe;const L=w.mipmaps,re=o&&w.isVideoTexture!==!0&&Me!==wu,Se=fe.__version===void 0||$===!0,he=b(w,te,Le);if(w.isDepthTexture)Me=s.DEPTH_COMPONENT,o?w.type===ui?Me=s.DEPTH_COMPONENT32F:w.type===hi?Me=s.DEPTH_COMPONENT24:w.type===zi?Me=s.DEPTH24_STENCIL8:Me=s.DEPTH_COMPONENT16:w.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ki&&Me===s.DEPTH_COMPONENT&&w.type!==ul&&w.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=hi,we=r.convert(w.type)),w.format===Ls&&Me===s.DEPTH_COMPONENT&&(Me=s.DEPTH_STENCIL,w.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=zi,we=r.convert(w.type))),Se&&(re?t.texStorage2D(s.TEXTURE_2D,1,Me,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Me,te.width,te.height,0,Ie,we,null));else if(w.isDataTexture)if(L.length>0&&Le){re&&Se&&t.texStorage2D(s.TEXTURE_2D,he,Me,L[0].width,L[0].height);for(let ie=0,U=L.length;ie<U;ie++)pe=L[ie],re?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,pe.width,pe.height,Ie,we,pe.data):t.texImage2D(s.TEXTURE_2D,ie,Me,pe.width,pe.height,0,Ie,we,pe.data);w.generateMipmaps=!1}else re?(Se&&t.texStorage2D(s.TEXTURE_2D,he,Me,te.width,te.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,te.width,te.height,Ie,we,te.data)):t.texImage2D(s.TEXTURE_2D,0,Me,te.width,te.height,0,Ie,we,te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){re&&Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Me,L[0].width,L[0].height,te.depth);for(let ie=0,U=L.length;ie<U;ie++)pe=L[ie],w.format!==Rn?Ie!==null?re?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,te.depth,Ie,pe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Me,pe.width,pe.height,te.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,te.depth,Ie,we,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,Me,pe.width,pe.height,te.depth,0,Ie,we,pe.data)}else{re&&Se&&t.texStorage2D(s.TEXTURE_2D,he,Me,L[0].width,L[0].height);for(let ie=0,U=L.length;ie<U;ie++)pe=L[ie],w.format!==Rn?Ie!==null?re?t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,pe.width,pe.height,Ie,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,Me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,pe.width,pe.height,Ie,we,pe.data):t.texImage2D(s.TEXTURE_2D,ie,Me,pe.width,pe.height,0,Ie,we,pe.data)}else if(w.isDataArrayTexture)re?(Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Me,te.width,te.height,te.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Ie,we,te.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Me,te.width,te.height,te.depth,0,Ie,we,te.data);else if(w.isData3DTexture)re?(Se&&t.texStorage3D(s.TEXTURE_3D,he,Me,te.width,te.height,te.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Ie,we,te.data)):t.texImage3D(s.TEXTURE_3D,0,Me,te.width,te.height,te.depth,0,Ie,we,te.data);else if(w.isFramebufferTexture){if(Se)if(re)t.texStorage2D(s.TEXTURE_2D,he,Me,te.width,te.height);else{let ie=te.width,U=te.height;for(let ae=0;ae<he;ae++)t.texImage2D(s.TEXTURE_2D,ae,Me,ie,U,0,Ie,we,null),ie>>=1,U>>=1}}else if(L.length>0&&Le){re&&Se&&t.texStorage2D(s.TEXTURE_2D,he,Me,L[0].width,L[0].height);for(let ie=0,U=L.length;ie<U;ie++)pe=L[ie],re?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Ie,we,pe):t.texImage2D(s.TEXTURE_2D,ie,Me,Ie,we,pe);w.generateMipmaps=!1}else re?(Se&&t.texStorage2D(s.TEXTURE_2D,he,Me,te.width,te.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,we,te)):t.texImage2D(s.TEXTURE_2D,0,Me,Ie,we,te);v(w,Le)&&x(B),fe.__version=j.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function xe(R,w,I){if(w.image.length!==6)return;const B=J(R,w),$=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+I);const j=n.get($);if($.version!==j.__version||B===!0){t.activeTexture(s.TEXTURE0+I);const fe=rt.getPrimaries(rt.workingColorSpace),le=w.colorSpace===vn?null:rt.getPrimaries(w.colorSpace),de=w.colorSpace===vn||fe===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const be=w.isCompressedTexture||w.image[0].isCompressedTexture,Ne=w.image[0]&&w.image[0].isDataTexture,te=[];for(let ie=0;ie<6;ie++)!be&&!Ne?te[ie]=g(w.image[ie],!1,!0,i.maxCubemapSize):te[ie]=Ne?w.image[ie].image:w.image[ie],te[ie]=ke(w,te[ie]);const Le=te[0],Ie=p(Le)||o,we=r.convert(w.format,w.colorSpace),Me=r.convert(w.type),pe=y(w.internalFormat,we,Me,w.colorSpace),L=o&&w.isVideoTexture!==!0,re=j.__version===void 0||B===!0;let Se=b(w,Le,Ie);X(s.TEXTURE_CUBE_MAP,w,Ie);let he;if(be){L&&re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,pe,Le.width,Le.height);for(let ie=0;ie<6;ie++){he=te[ie].mipmaps;for(let U=0;U<he.length;U++){const ae=he[U];w.format!==Rn?we!==null?L?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,U,0,0,ae.width,ae.height,we,ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,U,pe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,U,0,0,ae.width,ae.height,we,Me,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,U,pe,ae.width,ae.height,0,we,Me,ae.data)}}}else{he=w.mipmaps,L&&re&&(he.length>0&&Se++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,pe,te[0].width,te[0].height));for(let ie=0;ie<6;ie++)if(Ne){L?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,te[ie].width,te[ie].height,we,Me,te[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,te[ie].width,te[ie].height,0,we,Me,te[ie].data);for(let U=0;U<he.length;U++){const ce=he[U].image[ie].image;L?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,U+1,0,0,ce.width,ce.height,we,Me,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,U+1,pe,ce.width,ce.height,0,we,Me,ce.data)}}else{L?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,we,Me,te[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,we,Me,te[ie]);for(let U=0;U<he.length;U++){const ae=he[U];L?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,U+1,0,0,we,Me,ae.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,U+1,pe,we,Me,ae.image[ie])}}}v(w,Ie)&&x(s.TEXTURE_CUBE_MAP),j.__version=$.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ve(R,w,I,B,$,j){const fe=r.convert(I.format,I.colorSpace),le=r.convert(I.type),de=y(I.internalFormat,fe,le,I.colorSpace);if(!n.get(w).__hasExternalTextures){const Ne=Math.max(1,w.width>>j),te=Math.max(1,w.height>>j);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,j,de,Ne,te,w.depth,0,fe,le,null):t.texImage2D($,j,de,Ne,te,0,fe,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),se(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,B,$,n.get(I).__webglTexture,0,Ue(w)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,B,$,n.get(I).__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(R,w,I){if(s.bindRenderbuffer(s.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let B=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(I||se(w)){const $=w.depthTexture;$&&$.isDepthTexture&&($.type===ui?B=s.DEPTH_COMPONENT32F:$.type===hi&&(B=s.DEPTH_COMPONENT24));const j=Ue(w);se(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j,B,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,j,B,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,B,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){const B=Ue(w);I&&se(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,B,s.DEPTH24_STENCIL8,w.width,w.height):se(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let $=0;$<B.length;$++){const j=B[$],fe=r.convert(j.format,j.colorSpace),le=r.convert(j.type),de=y(j.internalFormat,fe,le,j.colorSpace),be=Ue(w);I&&se(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,de,w.width,w.height):se(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,de,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,de,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);const B=n.get(w.depthTexture).__webglTexture,$=Ue(w);if(w.depthTexture.format===ki)se(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,B,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,B,0);else if(w.depthTexture.format===Ls)se(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,B,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function ye(R){const w=n.get(R),I=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Re(w.__webglFramebuffer,R)}else if(I){w.__webglDepthbuffer=[];for(let B=0;B<6;B++)t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[B]),w.__webglDepthbuffer[B]=s.createRenderbuffer(),De(w.__webglDepthbuffer[B],R,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),De(w.__webglDepthbuffer,R,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(R,w,I){const B=n.get(R);w!==void 0&&ve(B.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),I!==void 0&&ye(R)}function H(R){const w=R.texture,I=n.get(R),B=n.get(w);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(B.__webglTexture===void 0&&(B.__webglTexture=s.createTexture()),B.__version=w.version,a.memory.textures++);const $=R.isWebGLCubeRenderTarget===!0,j=R.isWebGLMultipleRenderTargets===!0,fe=p(R)||o;if($){I.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&w.mipmaps&&w.mipmaps.length>0){I.__webglFramebuffer[le]=[];for(let de=0;de<w.mipmaps.length;de++)I.__webglFramebuffer[le][de]=s.createFramebuffer()}else I.__webglFramebuffer[le]=s.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){I.__webglFramebuffer=[];for(let le=0;le<w.mipmaps.length;le++)I.__webglFramebuffer[le]=s.createFramebuffer()}else I.__webglFramebuffer=s.createFramebuffer();if(j)if(i.drawBuffers){const le=R.texture;for(let de=0,be=le.length;de<be;de++){const Ne=n.get(le[de]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&se(R)===!1){const le=j?w:[w];I.__webglMultisampledFramebuffer=s.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let de=0;de<le.length;de++){const be=le[de];I.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,I.__webglColorRenderbuffer[de]);const Ne=r.convert(be.format,be.colorSpace),te=r.convert(be.type),Le=y(be.internalFormat,Ne,te,be.colorSpace,R.isXRRenderTarget===!0),Ie=Ue(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,Le,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,I.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=s.createRenderbuffer(),De(I.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture),X(s.TEXTURE_CUBE_MAP,w,fe);for(let le=0;le<6;le++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let de=0;de<w.mipmaps.length;de++)ve(I.__webglFramebuffer[le][de],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else ve(I.__webglFramebuffer[le],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);v(w,fe)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){const le=R.texture;for(let de=0,be=le.length;de<be;de++){const Ne=le[de],te=n.get(Ne);t.bindTexture(s.TEXTURE_2D,te.__webglTexture),X(s.TEXTURE_2D,Ne,fe),ve(I.__webglFramebuffer,R,Ne,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,0),v(Ne,fe)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?le=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,B.__webglTexture),X(le,w,fe),o&&w.mipmaps&&w.mipmaps.length>0)for(let de=0;de<w.mipmaps.length;de++)ve(I.__webglFramebuffer[de],R,w,s.COLOR_ATTACHMENT0,le,de);else ve(I.__webglFramebuffer,R,w,s.COLOR_ATTACHMENT0,le,0);v(w,fe)&&x(le),t.unbindTexture()}R.depthBuffer&&ye(R)}function je(R){const w=p(R)||o,I=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let B=0,$=I.length;B<$;B++){const j=I[B];if(v(j,w)){const fe=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,le=n.get(j).__webglTexture;t.bindTexture(fe,le),x(fe),t.unbindTexture()}}}function Ee(R){if(o&&R.samples>0&&se(R)===!1){const w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],I=R.width,B=R.height;let $=s.COLOR_BUFFER_BIT;const j=[],fe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=n.get(R),de=R.isWebGLMultipleRenderTargets===!0;if(de)for(let be=0;be<w.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let be=0;be<w.length;be++){j.push(s.COLOR_ATTACHMENT0+be),R.depthBuffer&&j.push(fe);const Ne=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ne===!1&&(R.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),de&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[be]),Ne===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[fe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[fe])),de){const te=n.get(w[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,I,B,0,0,I,B,$,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let be=0;be<w.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,le.__webglColorRenderbuffer[be]);const Ne=n.get(w[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Ne,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ue(R){return Math.min(i.maxSamples,R.samples)}function se(R){const w=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ke(R){const w=a.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function ke(R,w){const I=R.colorSpace,B=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===zo||I!==Jn&&I!==vn&&(rt.getTransfer(I)===ct?o===!1?e.has("EXT_sRGB")===!0&&B===Rn?(R.format=zo,R.minFilter=_n,R.generateMipmaps=!1):w=Lu.sRGBToLinear(w):(B!==Rn||$!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),w}this.allocateTextureUnit=A,this.resetTextureUnits=q,this.setTexture2D=O,this.setTexture2DArray=G,this.setTexture3D=W,this.setTextureCube=z,this.rebindTextures=ze,this.setupRenderTarget=H,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=se}function Q_(s,e,t){const n=t.isWebGL2;function i(r,a=vn){let o;const l=rt.getTransfer(a);if(r===gi)return s.UNSIGNED_BYTE;if(r===Mu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Su)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Uf)return s.BYTE;if(r===Nf)return s.SHORT;if(r===ul)return s.UNSIGNED_SHORT;if(r===yu)return s.INT;if(r===hi)return s.UNSIGNED_INT;if(r===ui)return s.FLOAT;if(r===Qn)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Ff)return s.ALPHA;if(r===Rn)return s.RGBA;if(r===Of)return s.LUMINANCE;if(r===Bf)return s.LUMINANCE_ALPHA;if(r===ki)return s.DEPTH_COMPONENT;if(r===Ls)return s.DEPTH_STENCIL;if(r===zo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===zf)return s.RED;if(r===Eu)return s.RED_INTEGER;if(r===kf)return s.RG;if(r===bu)return s.RG_INTEGER;if(r===Tu)return s.RGBA_INTEGER;if(r===za||r===ka||r===Ga||r===Va)if(l===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===za)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===za)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ka)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ga)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Va)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jl||r===Kl||r===Zl||r===Ql)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===jl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ql)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Jl||r===ec)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Jl)return l===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ec)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===tc||r===nc||r===ic||r===sc||r===rc||r===ac||r===oc||r===lc||r===cc||r===hc||r===uc||r===dc||r===fc||r===pc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===tc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ic)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ac)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===oc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===uc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ha||r===mc||r===gc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ha)return l===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===mc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===gc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gf||r===_c||r===xc||r===vc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ha)return o.COMPRESSED_RED_RGTC1_EXT;if(r===_c)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===vc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zi?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class J_ extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nn extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ex={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ex)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Nn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class tx extends Yi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null;const g=t.getContextAttributes();let p=null,m=null;const v=[],x=[],y=new Te;let b=null;const S=new on;S.layers.enable(1),S.viewport=new dt;const E=new on;E.layers.enable(2),E.viewport=new dt;const P=[S,E],M=new J_;M.layers.enable(1),M.layers.enable(2);let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=v[X];return J===void 0&&(J=new po,v[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=v[X];return J===void 0&&(J=new po,v[X]=J),J.getGripSpace()},this.getHand=function(X){let J=v[X];return J===void 0&&(J=new po,v[X]=J),J.getHandSpace()};function k(X){const J=x.indexOf(X.inputSource);if(J===-1)return;const oe=v[J];oe!==void 0&&(oe.update(X.inputSource,X.frame,c||a),oe.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",A);for(let X=0;X<v.length;X++){const J=x[X];J!==null&&(x[X]=null,v[X].disconnect(J))}T=null,N=null,e.setRenderTarget(p),f=null,u=null,d=null,i=null,m=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",q),i.addEventListener("inputsourceschange",A),g.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new Ln(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,oe=null,xe=null;g.depth&&(xe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=g.stencil?Ls:ki,oe=g.stencil?zi:hi);const ve={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(ve),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),m=new Ln(u.textureWidth,u.textureHeight,{format:Rn,type:gi,depthTexture:new Hu(u.textureWidth,u.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const De=e.properties.get(m);De.__ignoreDepthValues=u.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function A(X){for(let J=0;J<X.removed.length;J++){const oe=X.removed[J],xe=x.indexOf(oe);xe>=0&&(x[xe]=null,v[xe].disconnect(oe))}for(let J=0;J<X.added.length;J++){const oe=X.added[J];let xe=x.indexOf(oe);if(xe===-1){for(let De=0;De<v.length;De++)if(De>=x.length){x.push(oe),xe=De;break}else if(x[De]===null){x[De]=oe,xe=De;break}if(xe===-1)break}const ve=v[xe];ve&&ve.connect(oe)}}const F=new D,O=new D;function G(X,J,oe){F.setFromMatrixPosition(J.matrixWorld),O.setFromMatrixPosition(oe.matrixWorld);const xe=F.distanceTo(O),ve=J.projectionMatrix.elements,De=oe.projectionMatrix.elements,Re=ve[14]/(ve[10]-1),ye=ve[14]/(ve[10]+1),ze=(ve[9]+1)/ve[5],H=(ve[9]-1)/ve[5],je=(ve[8]-1)/ve[0],Ee=(De[8]+1)/De[0],Ue=Re*je,se=Re*Ee,Ke=xe/(-je+Ee),ke=Ke*-je;J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ke),X.translateZ(Ke),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const R=Re+Ke,w=ye+Ke,I=Ue-ke,B=se+(xe-ke),$=ze*ye/w*R,j=H*ye/w*R;X.projectionMatrix.makePerspective(I,B,$,j,R,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function W(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;M.near=E.near=S.near=X.near,M.far=E.far=S.far=X.far,(T!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,N=M.far);const J=X.parent,oe=M.cameras;W(M,J);for(let xe=0;xe<oe.length;xe++)W(oe[xe],J);oe.length===2?G(M,S,E):M.projectionMatrix.copy(S.projectionMatrix),z(X,M,J)};function z(X,J,oe){oe===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(oe.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ko*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)};let Q=null;function ne(X,J){if(h=J.getViewerPose(c||a),_=J,h!==null){const oe=h.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let xe=!1;oe.length!==M.cameras.length&&(M.cameras.length=0,xe=!0);for(let ve=0;ve<oe.length;ve++){const De=oe[ve];let Re=null;if(f!==null)Re=f.getViewport(De);else{const ze=d.getViewSubImage(u,De);Re=ze.viewport,ve===0&&(e.setRenderTargetTextures(m,ze.colorTexture,u.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(m))}let ye=P[ve];ye===void 0&&(ye=new on,ye.layers.enable(ve),ye.viewport=new dt,P[ve]=ye),ye.matrix.fromArray(De.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(De.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Re.x,Re.y,Re.width,Re.height),ve===0&&(M.matrix.copy(ye.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),xe===!0&&M.cameras.push(ye)}}for(let oe=0;oe<v.length;oe++){const xe=x[oe],ve=v[oe];xe!==null&&ve!==void 0&&ve.update(xe,J,c||a)}Q&&Q(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const ee=new Vu;ee.setAnimationLoop(ne),this.setAnimationLoop=function(X){Q=X},this.dispose=function(){}}}function nx(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,zu(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*x,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ix(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(_(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",p));const b=x.program;n.updateUBOMapping(v,b);const S=e.render.frame;r[v.id]!==S&&(u(v),r[v.id]=S)}function h(v){const x=d();v.__bindingPointIndex=x;const y=s.createBuffer(),b=v.__size,S=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,b,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=i[v.id],y=v.uniforms,b=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let S=0,E=y.length;S<E;S++){const P=Array.isArray(y[S])?y[S]:[y[S]];for(let M=0,T=P.length;M<T;M++){const N=P[M];if(f(N,S,M,b)===!0){const k=N.__offset,q=Array.isArray(N.value)?N.value:[N.value];let A=0;for(let F=0;F<q.length;F++){const O=q[F],G=g(O);typeof O=="number"||typeof O=="boolean"?(N.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,k+A,N.__data)):O.isMatrix3?(N.__data[0]=O.elements[0],N.__data[1]=O.elements[1],N.__data[2]=O.elements[2],N.__data[3]=0,N.__data[4]=O.elements[3],N.__data[5]=O.elements[4],N.__data[6]=O.elements[5],N.__data[7]=0,N.__data[8]=O.elements[6],N.__data[9]=O.elements[7],N.__data[10]=O.elements[8],N.__data[11]=0):(O.toArray(N.__data,A),A+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,y,b){const S=v.value,E=x+"_"+y;if(b[E]===void 0)return typeof S=="number"||typeof S=="boolean"?b[E]=S:b[E]=S.clone(),!0;{const P=b[E];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return b[E]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function _(v){const x=v.uniforms;let y=0;const b=16;for(let E=0,P=x.length;E<P;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let T=0,N=M.length;T<N;T++){const k=M[T],q=Array.isArray(k.value)?k.value:[k.value];for(let A=0,F=q.length;A<F;A++){const O=q[A],G=g(O),W=y%b;W!==0&&b-W<G.boundary&&(y+=b-W),k.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=G.storage}}}const S=y%b;return S>0&&(y+=b-S),v.__size=y,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}class ju{constructor(e={}){const{canvas:t=ep(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=mi,this.toneMappingExposure=1;const x=this;let y=!1,b=0,S=0,E=null,P=-1,M=null;const T=new dt,N=new dt;let k=null;const q=new Pe(0);let A=0,F=t.width,O=t.height,G=1,W=null,z=null;const Q=new dt(0,0,F,O),ne=new dt(0,0,F,O);let ee=!1;const X=new pl;let J=!1,oe=!1,xe=null;const ve=new xt,De=new Te,Re=new D,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return E===null?G:1}let H=n;function je(C,V){for(let K=0;K<C.length;K++){const Z=C[K],Y=t.getContext(Z,V);if(Y!==null)return Y}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cl}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",ae,!1),H===null){const V=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&V.shift(),H=je(V,C),H===null)throw je(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ee,Ue,se,Ke,ke,R,w,I,B,$,j,fe,le,de,be,Ne,te,Le,Ie,we,Me,pe,L,re;function Se(){Ee=new f0(H),Ue=new o0(H,Ee,e),Ee.init(Ue),pe=new Q_(H,Ee,Ue),se=new K_(H,Ee,Ue),Ke=new g0(H),ke=new F_,R=new Z_(H,Ee,se,ke,Ue,pe,Ke),w=new c0(x),I=new d0(x),B=new bp(H,Ue),L=new r0(H,Ee,B,Ue),$=new p0(H,B,Ke,L),j=new y0(H,$,B,Ke),Ie=new v0(H,Ue,R),Ne=new l0(ke),fe=new N_(x,w,I,Ee,Ue,L,Ne),le=new nx(x,ke),de=new B_,be=new W_(Ee,Ue),Le=new s0(x,w,I,se,j,u,l),te=new j_(x,j,Ue),re=new ix(H,Ke,Ue,se),we=new a0(H,Ee,Ke,Ue),Me=new m0(H,Ee,Ke,Ue),Ke.programs=fe.programs,x.capabilities=Ue,x.extensions=Ee,x.properties=ke,x.renderLists=de,x.shadowMap=te,x.state=se,x.info=Ke}Se();const he=new tx(x,H);this.xr=he,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=Ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(F,O,!1))},this.getSize=function(C){return C.set(F,O)},this.setSize=function(C,V,K=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,O=V,t.width=Math.floor(C*G),t.height=Math.floor(V*G),K===!0&&(t.style.width=C+"px",t.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(F*G,O*G).floor()},this.setDrawingBufferSize=function(C,V,K){F=C,O=V,G=K,t.width=Math.floor(C*K),t.height=Math.floor(V*K),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,V,K,Z){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,V,K,Z),se.viewport(T.copy(Q).multiplyScalar(G).floor())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,V,K,Z){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,V,K,Z),se.scissor(N.copy(ne).multiplyScalar(G).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(C){se.setScissorTest(ee=C)},this.setOpaqueSort=function(C){W=C},this.setTransparentSort=function(C){z=C},this.getClearColor=function(C){return C.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(C=!0,V=!0,K=!0){let Z=0;if(C){let Y=!1;if(E!==null){const me=E.texture.format;Y=me===Tu||me===bu||me===Eu}if(Y){const me=E.texture.type,Ce=me===gi||me===hi||me===ul||me===zi||me===Mu||me===Su,Fe=Le.getClearColor(),Oe=Le.getClearAlpha(),Xe=Fe.r,Ge=Fe.g,Ve=Fe.b;Ce?(f[0]=Xe,f[1]=Ge,f[2]=Ve,f[3]=Oe,H.clearBufferuiv(H.COLOR,0,f)):(_[0]=Xe,_[1]=Ge,_[2]=Ve,_[3]=Oe,H.clearBufferiv(H.COLOR,0,_))}else Z|=H.COLOR_BUFFER_BIT}V&&(Z|=H.DEPTH_BUFFER_BIT),K&&(Z|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),de.dispose(),be.dispose(),ke.dispose(),w.dispose(),I.dispose(),j.dispose(),L.dispose(),re.dispose(),fe.dispose(),he.dispose(),he.removeEventListener("sessionstart",st),he.removeEventListener("sessionend",We),xe&&(xe.dispose(),xe=null),it.stop()};function ie(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Ke.autoReset,V=te.enabled,K=te.autoUpdate,Z=te.needsUpdate,Y=te.type;Se(),Ke.autoReset=C,te.enabled=V,te.autoUpdate=K,te.needsUpdate=Z,te.type=Y}function ae(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ce(C){const V=C.target;V.removeEventListener("dispose",ce),ge(V)}function ge(C){Ae(C),ke.remove(C)}function Ae(C){const V=ke.get(C).programs;V!==void 0&&(V.forEach(function(K){fe.releaseProgram(K)}),C.isShaderMaterial&&fe.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,K,Z,Y,me){V===null&&(V=ye);const Ce=Y.isMesh&&Y.matrixWorld.determinant()<0,Fe=Er(C,V,K,Z,Y);se.setMaterial(Z,Ce);let Oe=K.index,Xe=1;if(Z.wireframe===!0){if(Oe=$.getWireframeAttribute(K),Oe===void 0)return;Xe=2}const Ge=K.drawRange,Ve=K.attributes.position;let ut=Ge.start*Xe,Nt=(Ge.start+Ge.count)*Xe;me!==null&&(ut=Math.max(ut,me.start*Xe),Nt=Math.min(Nt,(me.start+me.count)*Xe)),Oe!==null?(ut=Math.max(ut,0),Nt=Math.min(Nt,Oe.count)):Ve!=null&&(ut=Math.max(ut,0),Nt=Math.min(Nt,Ve.count));const vt=Nt-ut;if(vt<0||vt===1/0)return;L.setup(Y,Z,Fe,K,Oe);let _e,Qe=we;if(Oe!==null&&(_e=B.get(Oe),Qe=Me,Qe.setIndex(_e)),Y.isMesh)Z.wireframe===!0?(se.setLineWidth(Z.wireframeLinewidth*ze()),Qe.setMode(H.LINES)):Qe.setMode(H.TRIANGLES);else if(Y.isLine){let Be=Z.linewidth;Be===void 0&&(Be=1),se.setLineWidth(Be*ze()),Y.isLineSegments?Qe.setMode(H.LINES):Y.isLineLoop?Qe.setMode(H.LINE_LOOP):Qe.setMode(H.LINE_STRIP)}else Y.isPoints?Qe.setMode(H.POINTS):Y.isSprite&&Qe.setMode(H.TRIANGLES);if(Y.isBatchedMesh)Qe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Qe.renderInstances(ut,vt,Y.count);else if(K.isInstancedBufferGeometry){const Be=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ft=Math.min(K.instanceCount,Be);Qe.renderInstances(ut,vt,Ft)}else Qe.render(ut,vt)};function qe(C,V,K){C.transparent===!0&&C.side===xn&&C.forceSinglePass===!1?(C.side=jt,C.needsUpdate=!0,zn(C,V,K),C.side=vi,C.needsUpdate=!0,zn(C,V,K),C.side=xn):zn(C,V,K)}this.compile=function(C,V,K=null){K===null&&(K=C),p=be.get(K),p.init(),v.push(p),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),C!==K&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(x._useLegacyLights);const Z=new Set;return C.traverse(function(Y){const me=Y.material;if(me)if(Array.isArray(me))for(let Ce=0;Ce<me.length;Ce++){const Fe=me[Ce];qe(Fe,K,Y),Z.add(Fe)}else qe(me,K,Y),Z.add(me)}),v.pop(),p=null,Z},this.compileAsync=function(C,V,K=null){const Z=this.compile(C,V,K);return new Promise(Y=>{function me(){if(Z.forEach(function(Ce){ke.get(Ce).currentProgram.isReady()&&Z.delete(Ce)}),Z.size===0){Y(C);return}setTimeout(me,10)}Ee.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Ye=null;function nt(C){Ye&&Ye(C)}function st(){it.stop()}function We(){it.start()}const it=new Vu;it.setAnimationLoop(nt),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(C){Ye=C,he.setAnimationLoop(C),C===null?it.stop():it.start()},he.addEventListener("sessionstart",st),he.addEventListener("sessionend",We),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(V),V=he.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,V,E),p=be.get(C,v.length),p.init(),v.push(p),ve.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),X.setFromProjectionMatrix(ve),oe=this.localClippingEnabled,J=Ne.init(this.clippingPlanes,oe),g=de.get(C,m.length),g.init(),m.push(g),Lt(C,V,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(W,z),this.info.render.frame++,J===!0&&Ne.beginShadows();const K=p.state.shadowsArray;if(te.render(K,C,V),J===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),Le.render(g,C),p.setupLights(x._useLegacyLights),V.isArrayCamera){const Z=V.cameras;for(let Y=0,me=Z.length;Y<me;Y++){const Ce=Z[Y];ni(g,C,Ce,Ce.viewport)}}else ni(g,C,V);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(x,C,V),L.resetDefaultState(),P=-1,M=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Lt(C,V,K,Z){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){Z&&Re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ve);const Ce=j.update(C),Fe=C.material;Fe.visible&&g.push(C,Ce,Fe,K,Re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){const Ce=j.update(C),Fe=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Re.copy(C.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Re.copy(Ce.boundingSphere.center)),Re.applyMatrix4(C.matrixWorld).applyMatrix4(ve)),Array.isArray(Fe)){const Oe=Ce.groups;for(let Xe=0,Ge=Oe.length;Xe<Ge;Xe++){const Ve=Oe[Xe],ut=Fe[Ve.materialIndex];ut&&ut.visible&&g.push(C,Ce,ut,K,Re.z,Ve)}}else Fe.visible&&g.push(C,Ce,Fe,K,Re.z,null)}}const me=C.children;for(let Ce=0,Fe=me.length;Ce<Fe;Ce++)Lt(me[Ce],V,K,Z)}function ni(C,V,K,Z){const Y=C.opaque,me=C.transmissive,Ce=C.transparent;p.setupLightsView(K),J===!0&&Ne.setGlobalState(x.clippingPlanes,K),me.length>0&&Ki(Y,me,V,K),Z&&se.viewport(T.copy(Z)),Y.length>0&&Je(Y,V,K),me.length>0&&Je(me,V,K),Ce.length>0&&Je(Ce,V,K),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Ki(C,V,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const me=Ue.isWebGL2;xe===null&&(xe=new Ln(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Qn:gi,minFilter:lr,samples:me?4:0})),x.getDrawingBufferSize(De),me?xe.setSize(De.x,De.y):xe.setSize(Go(De.x),Go(De.y));const Ce=x.getRenderTarget();x.setRenderTarget(xe),x.getClearColor(q),A=x.getClearAlpha(),A<1&&x.setClearColor(16777215,.5),x.clear();const Fe=x.toneMapping;x.toneMapping=mi,Je(C,K,Z),R.updateMultisampleRenderTarget(xe),R.updateRenderTargetMipmap(xe);let Oe=!1;for(let Xe=0,Ge=V.length;Xe<Ge;Xe++){const Ve=V[Xe],ut=Ve.object,Nt=Ve.geometry,vt=Ve.material,_e=Ve.group;if(vt.side===xn&&ut.layers.test(Z.layers)){const Qe=vt.side;vt.side=jt,vt.needsUpdate=!0,At(ut,K,Z,Nt,vt,_e),vt.side=Qe,vt.needsUpdate=!0,Oe=!0}}Oe===!0&&(R.updateMultisampleRenderTarget(xe),R.updateRenderTargetMipmap(xe)),x.setRenderTarget(Ce),x.setClearColor(q,A),x.toneMapping=Fe}function Je(C,V,K){const Z=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,me=C.length;Y<me;Y++){const Ce=C[Y],Fe=Ce.object,Oe=Ce.geometry,Xe=Z===null?Ce.material:Z,Ge=Ce.group;Fe.layers.test(K.layers)&&At(Fe,V,K,Oe,Xe,Ge)}}function At(C,V,K,Z,Y,me){C.onBeforeRender(x,V,K,Z,Y,me),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(x,V,K,Z,C,me),Y.transparent===!0&&Y.side===xn&&Y.forceSinglePass===!1?(Y.side=jt,Y.needsUpdate=!0,x.renderBufferDirect(K,V,Z,Y,C,me),Y.side=vi,Y.needsUpdate=!0,x.renderBufferDirect(K,V,Z,Y,C,me),Y.side=xn):x.renderBufferDirect(K,V,Z,Y,C,me),C.onAfterRender(x,V,K,Z,Y,me)}function zn(C,V,K){V.isScene!==!0&&(V=ye);const Z=ke.get(C),Y=p.state.lights,me=p.state.shadowsArray,Ce=Y.state.version,Fe=fe.getParameters(C,Y.state,me,V,K),Oe=fe.getProgramCacheKey(Fe);let Xe=Z.programs;Z.environment=C.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(C.isMeshStandardMaterial?I:w).get(C.envMap||Z.environment),Xe===void 0&&(C.addEventListener("dispose",ce),Xe=new Map,Z.programs=Xe);let Ge=Xe.get(Oe);if(Ge!==void 0){if(Z.currentProgram===Ge&&Z.lightsStateVersion===Ce)return Hs(C,Fe),Ge}else Fe.uniforms=fe.getUniforms(C),C.onBuild(K,Fe,x),C.onBeforeCompile(Fe,x),Ge=fe.acquireProgram(Fe,Oe),Xe.set(Oe,Ge),Z.uniforms=Fe.uniforms;const Ve=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=Ne.uniform),Hs(C,Fe),Z.needsLights=Tr(C),Z.lightsStateVersion=Ce,Z.needsLights&&(Ve.ambientLightColor.value=Y.state.ambient,Ve.lightProbe.value=Y.state.probe,Ve.directionalLights.value=Y.state.directional,Ve.directionalLightShadows.value=Y.state.directionalShadow,Ve.spotLights.value=Y.state.spot,Ve.spotLightShadows.value=Y.state.spotShadow,Ve.rectAreaLights.value=Y.state.rectArea,Ve.ltc_1.value=Y.state.rectAreaLTC1,Ve.ltc_2.value=Y.state.rectAreaLTC2,Ve.pointLights.value=Y.state.point,Ve.pointLightShadows.value=Y.state.pointShadow,Ve.hemisphereLights.value=Y.state.hemi,Ve.directionalShadowMap.value=Y.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ve.spotShadowMap.value=Y.state.spotShadowMap,Ve.spotLightMatrix.value=Y.state.spotLightMatrix,Ve.spotLightMap.value=Y.state.spotLightMap,Ve.pointShadowMap.value=Y.state.pointShadowMap,Ve.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=Ge,Z.uniformsList=null,Ge}function Vs(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=ra.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Hs(C,V){const K=ke.get(C);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function Er(C,V,K,Z,Y){V.isScene!==!0&&(V=ye),R.resetTextureUnits();const me=V.fog,Ce=Z.isMeshStandardMaterial?V.environment:null,Fe=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Jn,Oe=(Z.isMeshStandardMaterial?I:w).get(Z.envMap||Ce),Xe=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ge=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ve=!!K.morphAttributes.position,ut=!!K.morphAttributes.normal,Nt=!!K.morphAttributes.color;let vt=mi;Z.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(vt=x.toneMapping);const _e=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Qe=_e!==void 0?_e.length:0,Be=ke.get(Z),Ft=p.state.lights;if(J===!0&&(oe===!0||C!==M)){const pn=C===M&&Z.id===P;Ne.setState(Z,C,pn)}let ht=!1;Z.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Ft.state.version||Be.outputColorSpace!==Fe||Y.isBatchedMesh&&Be.batching===!1||!Y.isBatchedMesh&&Be.batching===!0||Y.isInstancedMesh&&Be.instancing===!1||!Y.isInstancedMesh&&Be.instancing===!0||Y.isSkinnedMesh&&Be.skinning===!1||!Y.isSkinnedMesh&&Be.skinning===!0||Y.isInstancedMesh&&Be.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Be.instancingColor===!1&&Y.instanceColor!==null||Be.envMap!==Oe||Z.fog===!0&&Be.fog!==me||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ne.numPlanes||Be.numIntersection!==Ne.numIntersection)||Be.vertexAlphas!==Xe||Be.vertexTangents!==Ge||Be.morphTargets!==Ve||Be.morphNormals!==ut||Be.morphColors!==Nt||Be.toneMapping!==vt||Ue.isWebGL2===!0&&Be.morphTargetsCount!==Qe)&&(ht=!0):(ht=!0,Be.__version=Z.version);let In=Be.currentProgram;ht===!0&&(In=zn(Z,V,Y));let Ws=!1,ii=!1,Na=!1;const Ot=In.getUniforms(),bi=Be.uniforms;if(se.useProgram(In.program)&&(Ws=!0,ii=!0,Na=!0),Z.id!==P&&(P=Z.id,ii=!0),Ws||M!==C){Ot.setValue(H,"projectionMatrix",C.projectionMatrix),Ot.setValue(H,"viewMatrix",C.matrixWorldInverse);const pn=Ot.map.cameraPosition;pn!==void 0&&pn.setValue(H,Re.setFromMatrixPosition(C.matrixWorld)),Ue.logarithmicDepthBuffer&&Ot.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ot.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,ii=!0,Na=!0)}if(Y.isSkinnedMesh){Ot.setOptional(H,Y,"bindMatrix"),Ot.setOptional(H,Y,"bindMatrixInverse");const pn=Y.skeleton;pn&&(Ue.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),Ot.setValue(H,"boneTexture",pn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Ot.setOptional(H,Y,"batchingTexture"),Ot.setValue(H,"batchingTexture",Y._matricesTexture,R));const Fa=K.morphAttributes;if((Fa.position!==void 0||Fa.normal!==void 0||Fa.color!==void 0&&Ue.isWebGL2===!0)&&Ie.update(Y,K,In),(ii||Be.receiveShadow!==Y.receiveShadow)&&(Be.receiveShadow=Y.receiveShadow,Ot.setValue(H,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(bi.envMap.value=Oe,bi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ii&&(Ot.setValue(H,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&br(bi,Na),me&&Z.fog===!0&&le.refreshFogUniforms(bi,me),le.refreshMaterialUniforms(bi,Z,G,O,xe),ra.upload(H,Vs(Be),bi,R)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ra.upload(H,Vs(Be),bi,R),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ot.setValue(H,"center",Y.center),Ot.setValue(H,"modelViewMatrix",Y.modelViewMatrix),Ot.setValue(H,"normalMatrix",Y.normalMatrix),Ot.setValue(H,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const pn=Z.uniformsGroups;for(let Oa=0,ef=pn.length;Oa<ef;Oa++)if(Ue.isWebGL2){const Vl=pn[Oa];re.update(Vl,In),re.bind(Vl,In)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return In}function br(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function Tr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,V,K){ke.get(C.texture).__webglTexture=V,ke.get(C.depthTexture).__webglTexture=K;const Z=ke.get(C);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){const K=ke.get(C);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,K=0){E=C,b=V,S=K;let Z=!0,Y=null,me=!1,Ce=!1;if(C){const Oe=ke.get(C);Oe.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(H.FRAMEBUFFER,null),Z=!1):Oe.__webglFramebuffer===void 0?R.setupRenderTarget(C):Oe.__hasExternalTextures&&R.rebindTextures(C,ke.get(C.texture).__webglTexture,ke.get(C.depthTexture).__webglTexture);const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ce=!0);const Ge=ke.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ge[V])?Y=Ge[V][K]:Y=Ge[V],me=!0):Ue.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?Y=ke.get(C).__webglMultisampledFramebuffer:Array.isArray(Ge)?Y=Ge[K]:Y=Ge,T.copy(C.viewport),N.copy(C.scissor),k=C.scissorTest}else T.copy(Q).multiplyScalar(G).floor(),N.copy(ne).multiplyScalar(G).floor(),k=ee;if(se.bindFramebuffer(H.FRAMEBUFFER,Y)&&Ue.drawBuffers&&Z&&se.drawBuffers(C,Y),se.viewport(T),se.scissor(N),se.setScissorTest(k),me){const Oe=ke.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,Oe.__webglTexture,K)}else if(Ce){const Oe=ke.get(C.texture),Xe=V||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Oe.__webglTexture,K||0,Xe)}P=-1},this.readRenderTargetPixels=function(C,V,K,Z,Y,me,Ce){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe){se.bindFramebuffer(H.FRAMEBUFFER,Fe);try{const Oe=C.texture,Xe=Oe.format,Ge=Oe.type;if(Xe!==Rn&&pe.convert(Xe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ge===Qn&&(Ee.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ge!==gi&&pe.convert(Ge)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===ui&&(Ue.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-Z&&K>=0&&K<=C.height-Y&&H.readPixels(V,K,Z,Y,pe.convert(Xe),pe.convert(Ge),me)}finally{const Oe=E!==null?ke.get(E).__webglFramebuffer:null;se.bindFramebuffer(H.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(C,V,K=0){const Z=Math.pow(2,-K),Y=Math.floor(V.image.width*Z),me=Math.floor(V.image.height*Z);R.setTexture2D(V,0),H.copyTexSubImage2D(H.TEXTURE_2D,K,0,0,C.x,C.y,Y,me),se.unbindTexture()},this.copyTextureToTexture=function(C,V,K,Z=0){const Y=V.image.width,me=V.image.height,Ce=pe.convert(K.format),Fe=pe.convert(K.type);R.setTexture2D(K,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,K.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,K.unpackAlignment),V.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Z,C.x,C.y,Y,me,Ce,Fe,V.image.data):V.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Z,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,Ce,V.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,Z,C.x,C.y,Ce,Fe,V.image),Z===0&&K.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),se.unbindTexture()},this.copyTextureToTexture3D=function(C,V,K,Z,Y=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=C.max.x-C.min.x+1,Ce=C.max.y-C.min.y+1,Fe=C.max.z-C.min.z+1,Oe=pe.convert(Z.format),Xe=pe.convert(Z.type);let Ge;if(Z.isData3DTexture)R.setTexture3D(Z,0),Ge=H.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)R.setTexture2DArray(Z,0),Ge=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ve=H.getParameter(H.UNPACK_ROW_LENGTH),ut=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Nt=H.getParameter(H.UNPACK_SKIP_PIXELS),vt=H.getParameter(H.UNPACK_SKIP_ROWS),_e=H.getParameter(H.UNPACK_SKIP_IMAGES),Qe=K.isCompressedTexture?K.mipmaps[Y]:K.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Qe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Qe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,C.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,C.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,C.min.z),K.isDataTexture||K.isData3DTexture?H.texSubImage3D(Ge,Y,V.x,V.y,V.z,me,Ce,Fe,Oe,Xe,Qe.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ge,Y,V.x,V.y,V.z,me,Ce,Fe,Oe,Qe.data)):H.texSubImage3D(Ge,Y,V.x,V.y,V.z,me,Ce,Fe,Oe,Xe,Qe),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ve),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ut),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Nt),H.pixelStorei(H.UNPACK_SKIP_ROWS,vt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,_e),Y===0&&Z.generateMipmaps&&H.generateMipmap(Ge),se.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),se.unbindTexture()},this.resetState=function(){b=0,S=0,E=null,se.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===dl?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===Ca?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?Gi:Au}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Gi?It:Jn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class sx extends ju{}sx.prototype.isWebGL1Renderer=!0;class _l{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new _l(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rx extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Qs extends $i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oh=new D,lh=new D,ch=new xt,mo=new Mr,$r=new yr;class ax extends Rt{constructor(e=new Mt,t=new Qs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)oh.fromBufferAttribute(t,i-1),lh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=oh.distanceTo(lh);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=r,e.ray.intersectsSphere($r)===!1)return;ch.copy(i).invert(),mo.copy(e.ray).applyMatrix4(ch);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new D,h=new D,d=new D,u=new D,f=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const m=Math.max(0,a.start),v=Math.min(_.count,a.start+a.count);for(let x=m,y=v-1;x<y;x+=f){const b=_.getX(x),S=_.getX(x+1);if(c.fromBufferAttribute(p,b),h.fromBufferAttribute(p,S),mo.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(u);P<e.near||P>e.far||t.push({distance:P,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let x=m,y=v-1;x<y;x+=f){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),mo.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(u);S<e.near||S>e.far||t.push({distance:S,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const hh=new D,uh=new D;class jr extends ax{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)hh.fromBufferAttribute(t,i),uh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hh.distanceTo(uh);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xl extends $i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dh=new xt,Wo=new Mr,Kr=new yr,Zr=new D;class Ku extends Rt{constructor(e=new Mt,t=new xl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Kr.radius+=r,e.ray.intersectsSphere(Kr)===!1)return;dh.copy(i).invert(),Wo.copy(e.ray).applyMatrix4(dh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=u,g=f;_<g;_++){const p=c.getX(_);Zr.fromBufferAttribute(d,p),fh(Zr,p,l,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let _=u,g=f;_<g;_++)Zr.fromBufferAttribute(d,_),fh(Zr,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function fh(s,e,t,n,i,r,a){const o=Wo.distanceSqToPoint(s);if(o<t){const l=new D;Wo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class _a extends Kt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class La extends Mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new D,y=new D,b=new D;for(let S=0;S<t.length;S+=3)f(t[S+0],x),f(t[S+1],y),f(t[S+2],b),l(x,y,b,v)}function l(v,x,y,b){const S=b+1,E=[];for(let P=0;P<=S;P++){E[P]=[];const M=v.clone().lerp(y,P/S),T=x.clone().lerp(y,P/S),N=S-P;for(let k=0;k<=N;k++)k===0&&P===S?E[P][k]=M:E[P][k]=M.clone().lerp(T,k/N)}for(let P=0;P<S;P++)for(let M=0;M<2*(S-P)-1;M++){const T=Math.floor(M/2);M%2===0?(u(E[P][T+1]),u(E[P+1][T]),u(E[P][T])):(u(E[P][T+1]),u(E[P+1][T+1]),u(E[P+1][T]))}}function c(v){const x=new D;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(v),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const v=new D;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const y=p(v)/2/Math.PI+.5,b=m(v)/Math.PI+.5;a.push(y,1-b)}_(),d()}function d(){for(let v=0;v<a.length;v+=6){const x=a[v+0],y=a[v+2],b=a[v+4],S=Math.max(x,y,b),E=Math.min(x,y,b);S>.9&&E<.1&&(x<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),b<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,x){const y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function _(){const v=new D,x=new D,y=new D,b=new D,S=new Te,E=new Te,P=new Te;for(let M=0,T=0;M<r.length;M+=9,T+=6){v.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),S.set(a[T+0],a[T+1]),E.set(a[T+2],a[T+3]),P.set(a[T+4],a[T+5]),b.copy(v).add(x).add(y).divideScalar(3);const N=p(b);g(S,T+0,v,N),g(E,T+2,x,N),g(P,T+4,y,N)}}function g(v,x,y,b){b<0&&v.x===1&&(a[x]=v.x-1),y.x===0&&y.z===0&&(a[x]=b/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.vertices,e.indices,e.radius,e.details)}}const Qr=new D,Jr=new D,go=new D,ea=new xs;class ox extends Mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(tr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:p,c:m}=ea;if(g.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),ea.getNormal(go),d[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,d[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const x=(v+1)%3,y=d[v],b=d[x],S=ea[h[v]],E=ea[h[x]],P=`${y}_${b}`,M=`${b}_${y}`;M in u&&u[M]?(go.dot(u[M].normal)<=r&&(f.push(S.x,S.y,S.z),f.push(E.x,E.y,E.z)),u[M]=null):P in u||(u[P]={index0:c[v],index1:c[x],normal:go.clone()})}}for(const _ in u)if(u[_]){const{index0:g,index1:p}=u[_];Qr.fromBufferAttribute(o,g),Jr.fromBufferAttribute(o,p),f.push(Qr.x,Qr.y,Qr.z),f.push(Jr.x,Jr.y,Jr.z)}this.setAttribute("position",new at(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class vl extends La{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vl(e.radius,e.detail)}}class xa extends Mt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/i,f=new D,_=new Te;for(let g=0;g<=i;g++){for(let p=0;p<=n;p++){const m=r+p/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,h.push(_.x,_.y)}d+=u}for(let g=0;g<i;g++){const p=g*(n+1);for(let m=0;m<n;m++){const v=m+p,x=v,y=v+n+1,b=v+n+2,S=v+1;o.push(x,y,S),o.push(y,b,S)}}this.setIndex(o),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class yl extends Mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new D,u=new D,f=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const v=[],x=m/n;let y=0;m===0&&a===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){const S=b/t;d.x=-e*Math.cos(i+S*r)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(i+S*r)*Math.sin(a+x*o),_.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),p.push(S+y,1-x),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const x=h[m][v+1],y=h[m][v],b=h[m+1][v],S=h[m+1][v+1];(m!==0||a>0)&&f.push(x,y,S),(m!==n-1||l<Math.PI)&&f.push(y,b,S)}this.setIndex(f),this.setAttribute("position",new at(_,3)),this.setAttribute("normal",new at(g,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ml extends La{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ml(e.radius,e.detail)}}class Ms extends Mt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new D,d=new D,u=new D;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const g=_/i*r,p=f/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(g),d.y=(e+t*Math.cos(p))*Math.sin(g),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const g=(i+1)*f+_-1,p=(i+1)*(f-1)+_-1,m=(i+1)*(f-1)+_,v=(i+1)*f+_;a.push(g,p,v),a.push(p,m,v)}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ph extends Mt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new D,r=new D;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,f=d.count;for(let _=u,g=u+f;_<g;_+=3)for(let p=0;p<3;p++){const m=o.getX(_+p),v=o.getX(_+(p+1)%3);i.fromBufferAttribute(a,m),r.fromBufferAttribute(a,v),mh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),mh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new at(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function mh(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class lx extends $t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cx extends $i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cu,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hx extends cx{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Sl extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _o=new xt,gh=new D,_h=new D;class Zu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(gh),_h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_h),t.updateMatrixWorld(),_o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xh=new xt,Ks=new D,xo=new D;class ux extends Zu{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ks.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ks),xo.copy(n.position),xo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xo),n.updateMatrixWorld(),i.makeTranslation(-Ks.x,-Ks.y,-Ks.z),xh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh)}}class Xo extends Sl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ux}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dx extends Zu{constructor(){super(new ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vo extends Sl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new dx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fx extends Sl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vh(){return(typeof performance>"u"?Date:performance).now()}class px{constructor(e,t,n=0,i=1/0){this.ray=new Mr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new fl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return qo(e,this,n,t),n.sort(yh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)qo(e[i],this,n,t);return n.sort(yh),n}}function yh(s,e){return s.distance-e.distance}function qo(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)qo(i[r],e,t,!0)}}class Mh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Sh=new D,ta=new D;class mx{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Sh.subVectors(e,this.start),ta.subVectors(this.end,this.start);const n=ta.dot(ta);let r=ta.dot(Sh)/n;return t&&(r=Dt(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);const Eh={type:"change"},yo={type:"start"},bh={type:"end"},na=new Mr,Th=new $n,gx=Math.cos(70*Jf.DEG2RAD);class _x extends Yi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",be),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",be),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Eh),n.update(),r=i.NONE},this.update=function(){const L=new D,re=new qi().setFromUnitVectors(e.up,new D(0,1,0)),Se=re.clone().invert(),he=new D,ie=new qi,U=new D,ae=2*Math.PI;return function(ge=null){const Ae=n.object.position;L.copy(Ae).sub(n.target),L.applyQuaternion(re),o.setFromVector3(L),n.autoRotate&&r===i.NONE&&k(T(ge)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let qe=n.minAzimuthAngle,Ye=n.maxAzimuthAngle;isFinite(qe)&&isFinite(Ye)&&(qe<-Math.PI?qe+=ae:qe>Math.PI&&(qe-=ae),Ye<-Math.PI?Ye+=ae:Ye>Math.PI&&(Ye-=ae),qe<=Ye?o.theta=Math.max(qe,Math.min(Ye,o.theta)):o.theta=o.theta>(qe+Ye)/2?Math.max(qe,o.theta):Math.min(Ye,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&S||n.object.isOrthographicCamera?o.radius=Q(o.radius):o.radius=Q(o.radius*c),L.setFromSpherical(o),L.applyQuaternion(Se),Ae.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let nt=!1;if(n.zoomToCursor&&S){let st=null;if(n.object.isPerspectiveCamera){const We=L.length();st=Q(We*c);const it=We-st;n.object.position.addScaledVector(y,it),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const We=new D(b.x,b.y,0);We.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),nt=!0;const it=new D(b.x,b.y,0);it.unproject(n.object),n.object.position.sub(it).add(We),n.object.updateMatrixWorld(),st=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;st!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(st).add(n.object.position):(na.origin.copy(n.object.position),na.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(na.direction))<gx?e.lookAt(n.target):(Th.setFromNormalAndCoplanarPoint(n.object.up,n.target),na.intersectPlane(Th,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),nt=!0);return c=1,S=!1,nt||he.distanceToSquared(n.object.position)>a||8*(1-ie.dot(n.object.quaternion))>a||U.distanceToSquared(n.target)>0?(n.dispatchEvent(Eh),he.copy(n.object.position),ie.copy(n.object.quaternion),U.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Le),n.domElement.removeEventListener("pointerdown",R),n.domElement.removeEventListener("pointercancel",I),n.domElement.removeEventListener("wheel",j),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",I),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",be),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new Mh,l=new Mh;let c=1;const h=new D,d=new Te,u=new Te,f=new Te,_=new Te,g=new Te,p=new Te,m=new Te,v=new Te,x=new Te,y=new D,b=new Te;let S=!1;const E=[],P={};let M=!1;function T(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function N(L){const re=Math.abs(L*.01);return Math.pow(.95,n.zoomSpeed*re)}function k(L){l.theta-=L}function q(L){l.phi-=L}const A=function(){const L=new D;return function(Se,he){L.setFromMatrixColumn(he,0),L.multiplyScalar(-Se),h.add(L)}}(),F=function(){const L=new D;return function(Se,he){n.screenSpacePanning===!0?L.setFromMatrixColumn(he,1):(L.setFromMatrixColumn(he,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(Se),h.add(L)}}(),O=function(){const L=new D;return function(Se,he){const ie=n.domElement;if(n.object.isPerspectiveCamera){const U=n.object.position;L.copy(U).sub(n.target);let ae=L.length();ae*=Math.tan(n.object.fov/2*Math.PI/180),A(2*Se*ae/ie.clientHeight,n.object.matrix),F(2*he*ae/ie.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(A(Se*(n.object.right-n.object.left)/n.object.zoom/ie.clientWidth,n.object.matrix),F(he*(n.object.top-n.object.bottom)/n.object.zoom/ie.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function G(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(L,re){if(!n.zoomToCursor)return;S=!0;const Se=n.domElement.getBoundingClientRect(),he=L-Se.left,ie=re-Se.top,U=Se.width,ae=Se.height;b.x=he/U*2-1,b.y=-(ie/ae)*2+1,y.set(b.x,b.y,1).unproject(n.object).sub(n.object.position).normalize()}function Q(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function ne(L){d.set(L.clientX,L.clientY)}function ee(L){z(L.clientX,L.clientX),m.set(L.clientX,L.clientY)}function X(L){_.set(L.clientX,L.clientY)}function J(L){u.set(L.clientX,L.clientY),f.subVectors(u,d).multiplyScalar(n.rotateSpeed);const re=n.domElement;k(2*Math.PI*f.x/re.clientHeight),q(2*Math.PI*f.y/re.clientHeight),d.copy(u),n.update()}function oe(L){v.set(L.clientX,L.clientY),x.subVectors(v,m),x.y>0?G(N(x.y)):x.y<0&&W(N(x.y)),m.copy(v),n.update()}function xe(L){g.set(L.clientX,L.clientY),p.subVectors(g,_).multiplyScalar(n.panSpeed),O(p.x,p.y),_.copy(g),n.update()}function ve(L){z(L.clientX,L.clientY),L.deltaY<0?W(N(L.deltaY)):L.deltaY>0&&G(N(L.deltaY)),n.update()}function De(L){let re=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),re=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),re=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),re=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),re=!0;break}re&&(L.preventDefault(),n.update())}function Re(L){if(E.length===1)d.set(L.pageX,L.pageY);else{const re=pe(L),Se=.5*(L.pageX+re.x),he=.5*(L.pageY+re.y);d.set(Se,he)}}function ye(L){if(E.length===1)_.set(L.pageX,L.pageY);else{const re=pe(L),Se=.5*(L.pageX+re.x),he=.5*(L.pageY+re.y);_.set(Se,he)}}function ze(L){const re=pe(L),Se=L.pageX-re.x,he=L.pageY-re.y,ie=Math.sqrt(Se*Se+he*he);m.set(0,ie)}function H(L){n.enableZoom&&ze(L),n.enablePan&&ye(L)}function je(L){n.enableZoom&&ze(L),n.enableRotate&&Re(L)}function Ee(L){if(E.length==1)u.set(L.pageX,L.pageY);else{const Se=pe(L),he=.5*(L.pageX+Se.x),ie=.5*(L.pageY+Se.y);u.set(he,ie)}f.subVectors(u,d).multiplyScalar(n.rotateSpeed);const re=n.domElement;k(2*Math.PI*f.x/re.clientHeight),q(2*Math.PI*f.y/re.clientHeight),d.copy(u)}function Ue(L){if(E.length===1)g.set(L.pageX,L.pageY);else{const re=pe(L),Se=.5*(L.pageX+re.x),he=.5*(L.pageY+re.y);g.set(Se,he)}p.subVectors(g,_).multiplyScalar(n.panSpeed),O(p.x,p.y),_.copy(g)}function se(L){const re=pe(L),Se=L.pageX-re.x,he=L.pageY-re.y,ie=Math.sqrt(Se*Se+he*he);v.set(0,ie),x.set(0,Math.pow(v.y/m.y,n.zoomSpeed)),G(x.y),m.copy(v);const U=(L.pageX+re.x)*.5,ae=(L.pageY+re.y)*.5;z(U,ae)}function Ke(L){n.enableZoom&&se(L),n.enablePan&&Ue(L)}function ke(L){n.enableZoom&&se(L),n.enableRotate&&Ee(L)}function R(L){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",w),n.domElement.addEventListener("pointerup",I)),Ie(L),L.pointerType==="touch"?Ne(L):B(L))}function w(L){n.enabled!==!1&&(L.pointerType==="touch"?te(L):$(L))}function I(L){we(L),E.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",I)),n.dispatchEvent(bh),r=i.NONE}function B(L){let re;switch(L.button){case 0:re=n.mouseButtons.LEFT;break;case 1:re=n.mouseButtons.MIDDLE;break;case 2:re=n.mouseButtons.RIGHT;break;default:re=-1}switch(re){case Zi.DOLLY:if(n.enableZoom===!1)return;ee(L),r=i.DOLLY;break;case Zi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;X(L),r=i.PAN}else{if(n.enableRotate===!1)return;ne(L),r=i.ROTATE}break;case Zi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;ne(L),r=i.ROTATE}else{if(n.enablePan===!1)return;X(L),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(yo)}function $(L){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;J(L);break;case i.DOLLY:if(n.enableZoom===!1)return;oe(L);break;case i.PAN:if(n.enablePan===!1)return;xe(L);break}}function j(L){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(L.preventDefault(),n.dispatchEvent(yo),ve(fe(L)),n.dispatchEvent(bh))}function fe(L){const re=L.deltaMode,Se={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(re){case 1:Se.deltaY*=16;break;case 2:Se.deltaY*=100;break}return L.ctrlKey&&!M&&(Se.deltaY*=10),Se}function le(L){L.key==="Control"&&(M=!0,document.addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(L){L.key==="Control"&&(M=!1,document.removeEventListener("keyup",de,{passive:!0,capture:!0}))}function be(L){n.enabled===!1||n.enablePan===!1||De(L)}function Ne(L){switch(Me(L),E.length){case 1:switch(n.touches.ONE){case Qi.ROTATE:if(n.enableRotate===!1)return;Re(L),r=i.TOUCH_ROTATE;break;case Qi.PAN:if(n.enablePan===!1)return;ye(L),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Qi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;H(L),r=i.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;je(L),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(yo)}function te(L){switch(Me(L),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ee(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ue(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ke(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ke(L),n.update();break;default:r=i.NONE}}function Le(L){n.enabled!==!1&&L.preventDefault()}function Ie(L){E.push(L.pointerId)}function we(L){delete P[L.pointerId];for(let re=0;re<E.length;re++)if(E[re]==L.pointerId){E.splice(re,1);return}}function Me(L){let re=P[L.pointerId];re===void 0&&(re=new Te,P[L.pointerId]=re),re.set(L.pageX,L.pageY)}function pe(L){const re=L.pointerId===E[0]?E[1]:E[0];return P[re]}n.domElement.addEventListener("contextmenu",Le),n.domElement.addEventListener("pointerdown",R),n.domElement.addEventListener("pointercancel",I),n.domElement.addEventListener("wheel",j,{passive:!1}),document.addEventListener("keydown",le,{passive:!0,capture:!0}),this.update()}}const Ju={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Gs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const xx=new ml(-1,1,1,-1,0,1);class vx extends Mt{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}}const yx=new vx;class El{constructor(e){this._mesh=new Et(yx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,xx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Mx extends Gs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof $t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cr.clone(e.uniforms),this.material=new $t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new El(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class wh extends Gs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Sx extends Gs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ex{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Te);this._width=n.width,this._height=n.height,t=new Ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mx(Ju),this.copyPass.material.blending=Zn,this.clock=new Qu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}wh!==void 0&&(a instanceof wh?n=!0:a instanceof Sx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class bx extends Gs{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const Tx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ds extends Gs{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Te(e.x,e.y):new Te(256,256),this.clearColor=new Pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ln(r,a,{type:Qn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new Ln(r,a,{type:Qn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new Ln(r,a,{type:Qn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=Tx;this.highPassUniforms=cr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $t({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Te(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Ju;this.copyUniforms=cr.clone(h.uniforms),this.blendMaterial=new $t({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:kt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pe,this.oldClearAlpha=1,this.basic=new An,this.fsQuad=new El(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Te(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ds.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ds.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new $t({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Te(.5,.5)},direction:{value:new Te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new $t({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ds.BlurDirectionX=new Te(1,0);Ds.BlurDirectionY=new Te(0,1);const wx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Ax extends Gs{constructor(){super();const e=wx;this.uniforms=cr.clone(e.uniforms),this.material=new lx({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new El(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===mu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_u?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===hl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xu&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Yn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function ed(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var un={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},hr={duration:.5,overwrite:!1,delay:0},bl,Ut,ft,yn=1e8,lt=1/yn,Yo=Math.PI*2,Cx=Yo/4,Rx=0,td=Math.sqrt,Px=Math.cos,Lx=Math.sin,Pt=function(e){return typeof e=="string"},_t=function(e){return typeof e=="function"},ei=function(e){return typeof e=="number"},Tl=function(e){return typeof e>"u"},Bn=function(e){return typeof e=="object"},Qt=function(e){return e!==!1},wl=function(){return typeof window<"u"},ia=function(e){return _t(e)||Pt(e)},nd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vt=Array.isArray,Ix=/random\([^)]+\)/g,Dx=/,\s*/g,Ah=/(?:-?\.?\d|\.)+/gi,id=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ss=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Mo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sd=/[+-]=-?[.\d]+/,Ux=/[^,'"\[\]\s]+/gi,Nx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,mt,Dn,$o,Al,dn={},va={},rd,ad=function(e){return(va=Us(e,dn))&&nn},Cl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ur=function(e,t){return!t&&console.warn(e)},od=function(e,t){return e&&(dn[e]=t)&&va&&(va[e]=t)||dn},dr=function(){return 0},Fx={suppressEvents:!0,isStart:!0,kill:!1},aa={suppressEvents:!0,kill:!1},Ox={suppressEvents:!0},Rl={},_i=[],jo={},ld,an={},So={},Ch=30,oa=[],Pl="",Ll=function(e){var t=e[0],n,i;if(Bn(t)||_t(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=oa.length;i--&&!oa[i].targetTest(t););n=oa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Pd(e[i],n)))||e.splice(i,1);return e},Vi=function(e){return e._gsap||Ll(Mn(e))[0]._gsap},cd=function(e,t,n){return(n=e[t])&&_t(n)?e[t]():Tl(n)&&e.getAttribute&&e.getAttribute(t)||n},Jt=function(e,t){return(e=e.split(",")).forEach(t)||e},yt=function(e){return Math.round(e*1e5)/1e5||0},pt=function(e){return Math.round(e*1e7)/1e7||0},ws=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Bx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ya=function(){var e=_i.length,t=_i.slice(0),n,i;for(jo={},_i.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Il=function(e){return!!(e._initted||e._startAt||e.add)},hd=function(e,t,n,i){_i.length&&!Ut&&ya(),e.render(t,n,!!(Ut&&t<0&&Il(e))),_i.length&&!Ut&&ya()},ud=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ux).length<2?t:Pt(e)?e.trim():e},dd=function(e){return e},fn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},zx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Us=function(e,t){for(var n in t)e[n]=t[n];return e},Rh=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Bn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Ma=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ir=function(e){var t=e.parent||mt,n=e.keyframes?zx(Vt(e.keyframes)):fn;if(Qt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},kx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},fd=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Ia=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},yi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Hi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Gx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ko=function(e,t,n,i){return e._startAt&&(Ut?e._startAt.revert(aa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Vx=function s(e){return!e||e._ts&&s(e.parent)},Ph=function(e){return e._repeat?Ns(e._tTime,e=e.duration()+e._rDelay)*e:0},Ns=function(e,t){var n=Math.floor(e=pt(e/t));return e&&n===e?n-1:n},Sa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Da=function(e){return e._end=pt(e._start+(e._tDur/Math.abs(e._ts||e._rts||lt)||0))},Ua=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=pt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Da(e),n._dirty||Hi(n,e)),e},pd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Sa(e.rawTime(),t),(!t._dur||Sr(0,t.totalDuration(),n)-t._tTime>lt)&&t.render(n,!0)),Hi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-lt}},Fn=function(e,t,n,i){return t.parent&&yi(t),t._start=pt((ei(n)?n:n||e!==mt?gn(e,n,t):e._time)+t._delay),t._end=pt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),fd(e,t,"_first","_last",e._sort?"_start":0),Zo(t)||(e._recent=t),i||pd(e,t),e._ts<0&&Ua(e,e._tTime),e},md=function(e,t){return(dn.ScrollTrigger||Cl("scrollTrigger",t))&&dn.ScrollTrigger.create(t,e)},gd=function(e,t,n,i,r){if(Ul(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Ut&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ld!==ln.frame)return _i.push(e),e._lazy=[r,i],1},Hx=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Zo=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Wx=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&Hx(e)&&!(!e._initted&&Zo(e))||(e._ts<0||e._dp._ts<0)&&!Zo(e))?0:1,o=e._rDelay,l=0,c,h,d;if(o&&e._repeat&&(l=Sr(0,e._tDur,t),h=Ns(l,o),e._yoyo&&h&1&&(a=1-a),h!==Ns(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Ut||i||e._zTime===lt||!t&&e._zTime){if(!e._initted&&gd(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?lt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Ko(e,t,n,!0),e._onUpdate&&!n&&cn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&cn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&yi(e,1),!n&&!Ut&&(cn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Xx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Fs=function(e,t,n,i){var r=e._repeat,a=pt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:pt(a*(r+1)+e._rDelay*r):a,o>0&&!i&&Ua(e,e._tTime=e._tDur*o),e.parent&&Da(e),n||Hi(e.parent,e),e},Lh=function(e){return e instanceof Yt?Hi(e):Fs(e,e._dur)},qx={_start:0,endTime:dr,totalDuration:dr},gn=function s(e,t,n){var i=e.labels,r=e._recent||qx,a=e.duration()>=yn?r.endTime(!1):e._dur,o,l,c;return Pt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Vt(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},sr=function(e,t,n){var i=ei(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Qt(l.vars.inherit)&&l.parent;a.immediateRender=Qt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new bt(t[0],a,t[r+1])},Ei=function(e,t){return e||e===0?t(e):t},Sr=function(e,t,n){return n<e?e:n>t?t:n},Gt=function(e,t){return!Pt(e)||!(t=Nx.exec(e))?"":t[1]},Yx=function(e,t,n){return Ei(n,function(i){return Sr(e,t,i)})},Qo=[].slice,_d=function(e,t){return e&&Bn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Bn(e[0]))&&!e.nodeType&&e!==Dn},$x=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Pt(i)&&!t||_d(i,1)?(r=n).push.apply(r,Mn(i)):n.push(i)})||n},Mn=function(e,t,n){return ft&&!t&&ft.selector?ft.selector(e):Pt(e)&&!n&&($o||!Os())?Qo.call((t||Al).querySelectorAll(e),0):Vt(e)?$x(e,n):_d(e)?Qo.call(e,0):e?[e]:[]},Jo=function(e){return e=Mn(e)[0]||ur("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Mn(t,n.querySelectorAll?n:n===e?ur("Invalid scope")||Al.createElement("div"):e)}},xd=function(e){return e.sort(function(){return .5-Math.random()})},vd=function(e){if(_t(e))return e;var t=Bn(e)?e:{each:e},n=Wi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,d=i;return Pt(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(u,f,_){var g=(_||t).length,p=a[g],m,v,x,y,b,S,E,P,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,yn])[1],!M){for(E=-yn;E<(E=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(p=a[g]=[],m=l?Math.min(M,g)*h-.5:i%M,v=M===yn?0:l?g*d/M-.5:i/M|0,E=0,P=yn,S=0;S<g;S++)x=S%M-m,y=v-(S/M|0),p[S]=b=c?Math.abs(c==="y"?y:x):td(x*x+y*y),b>E&&(E=b),b<P&&(P=b);i==="random"&&xd(p),p.max=E-P,p.min=P,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),p.b=g<0?r-g:r,p.u=Gt(t.amount||t.each)||0,n=n&&g<0?ov(n):n}return g=(p[u]-p.min)/p.max||0,pt(p.b+(n?n(g):g)*p.v)+p.u}},el=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=pt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ei(n)?0:Gt(n))}},yd=function(e,t){var n=Vt(e),i,r;return!n&&Bn(e)&&(i=n=e.radius||yn,e.values?(e=Mn(e.values),(r=!ei(e[0]))&&(i*=i)):e=el(e.increment)),Ei(t,n?_t(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=yn,h=0,d=e.length,u,f;d--;)r?(u=e[d].x-o,f=e[d].y-l,u=u*u+f*f):u=Math.abs(e[d]-o),u<c&&(c=u,h=d);return h=!i||c<=i?e[h]:a,r||h===a||ei(a)?h:h+Gt(a)}:el(e))},Md=function(e,t,n,i){return Ei(Vt(e)?!t:n===!0?!!(n=0):!i,function(){return Vt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},jx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},Kx=function(e,t){return function(n){return e(parseFloat(n))+(t||Gt(n))}},Zx=function(e,t,n){return Ed(e,t,0,1,n)},Sd=function(e,t,n){return Ei(n,function(i){return e[~~t(i)]})},Qx=function s(e,t,n){var i=t-e;return Vt(e)?Sd(e,s(0,e.length),t):Ei(n,function(r){return(i+(r-e)%i)%i+e})},Jx=function s(e,t,n){var i=t-e,r=i*2;return Vt(e)?Sd(e,s(0,e.length-1),t):Ei(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},fr=function(e){return e.replace(Ix,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Dx);return Md(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Ed=function(e,t,n,i,r){var a=t-e,o=i-n;return Ei(r,function(l){return n+((l-e)/a*o||0)})},ev=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var a=Pt(e),o={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Vt(e)&&!Vt(t)){for(h=[],d=e.length,u=d-2,c=1;c<d;c++)h.push(s(e[c-1],e[c]));d--,r=function(_){_*=d;var g=Math.min(u,~~_);return h[g](_-g)},n=t}else i||(e=Us(Vt(e)?[]:{},e));if(!h){for(l in t)Dl.call(o,e,l,"get",t[l]);r=function(_){return Ol(_,o)||(a?e.p:e)}}}return Ei(n,r)},Ih=function(e,t,n){var i=e.labels,r=yn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},cn=function(e,t,n){var i=e.vars,r=i[t],a=ft,o=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&_i.length&&ya(),o&&(ft=o),h=l?r.apply(c,l):r.call(c),ft=a,h},Js=function(e){return yi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ut),e.progress()<1&&cn(e,"onInterrupt"),e},Es,bd=[],Td=function(e){if(e)if(e=!e.name&&e.default||e,wl()||e.headless){var t=e.name,n=_t(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:dr,render:Ol,add:Dl,kill:_v,modifier:gv,rawVars:0},a={targetTest:0,get:0,getSetter:Fl,aliases:{},register:0};if(Os(),e!==i){if(an[t])return;fn(i,fn(Ma(e,r),a)),Us(i.prototype,Us(r,Ma(e,a))),an[i.prop=t]=i,e.targetTest&&(oa.push(i),Rl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}od(t,i),e.register&&e.register(nn,i,en)}else bd.push(e)},ot=255,er={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},Eo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ot+.5|0},wd=function(e,t,n){var i=e?ei(e)?[e>>16,e>>8&ot,e&ot]:0:er.black,r,a,o,l,c,h,d,u,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),er[e])i=er[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ot,i&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Ah),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=Eo(l+1/3,r,a),i[1]=Eo(l,r,a),i[2]=Eo(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(id),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ah)||er.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/ot,a=i[1]/ot,o=i[2]/ot,d=Math.max(r,a,o),u=Math.min(r,a,o),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(a-o)/f+(a<o?6:0):d===a?(o-r)/f+2:(r-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Ad=function(e){var t=[],n=[],i=-1;return e.split(xi).forEach(function(r){var a=r.match(Ss)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Dh=function(e,t,n){var i="",r=(e+i).match(xi),a=t?"hsla(":"rgba(",o=0,l,c,h,d;if(!r)return e;if(r=r.map(function(u){return(u=wd(u,t,1))&&a+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Ad(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(xi,"1").split(Ss),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(xi),d=c.length-1;o<d;o++)i+=c[o]+r[o];return i+c[d]},xi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in er)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),tv=/hsl[a]?\(/,Cd=function(e){var t=e.join(" "),n;if(xi.lastIndex=0,xi.test(t))return n=tv.test(t),e[1]=Dh(e[1],n),e[0]=Dh(e[0],n,Ad(e[1])),!0},pr,ln=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,d,u,f,_=function g(p){var m=s()-i,v=p===!0,x,y,b,S;if((m>e||m<0)&&(n+=m-t),i+=m,b=i-n,x=b-a,(x>0||v)&&(S=++d.frame,u=b-d.time*1e3,d.time=b=b/1e3,a+=x+(x>=r?4:r-x),y=1),v||(l=c(g)),y)for(f=0;f<o.length;f++)o[f](b,u,S,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){rd&&(!$o&&wl()&&(Dn=$o=window,Al=Dn.document||{},dn.gsap=nn,(Dn.gsapVersions||(Dn.gsapVersions=[])).push(nn.version),ad(va||Dn.GreenSockGlobals||!Dn.gsap&&Dn||{}),bd.forEach(Td)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},pr=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),pr=0,c=dr},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),a=d.time*1e3+r},add:function(p,m,v){var x=m?function(y,b,S,E){p(y,b,S,E),d.remove(x)}:p;return d.remove(p),o[v?"unshift":"push"](x),Os(),x},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d}(),Os=function(){return!pr&&ln.wake()},et={},nv=/^[\d.\-M][\d.\-,\s]/,iv=/["']/g,sv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(iv,"").trim():+c,i=l.substr(o+1).trim();return t},rv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},av=function(e){var t=(e+"").split("("),n=et[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[sv(t[1])]:rv(e).split(",").map(ud)):et._CE&&nv.test(e)?et._CE("",e):n},ov=function(e){return function(t){return 1-e(1-t)}},Wi=function(e,t){return e&&(_t(e)?e:et[e]||av(e))||t},ji=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Jt(e,function(o){et[o]=dn[o]=r,et[a=o.toLowerCase()]=n;for(var l in r)et[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=et[o+"."+l]=r[l]}),r},Rd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},bo=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Yo*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Lx((h-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Rd(o);return r=Yo/r,l.config=function(c,h){return s(e,c,h)},l},To=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Rd(n);return i.config=function(r){return s(e,r)},i};Jt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;ji(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});et.Linear.easeNone=et.none=et.Linear.easeIn;ji("Elastic",bo("in"),bo("out"),bo());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};ji("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);ji("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});ji("Circ",function(s){return-(td(1-s*s)-1)});ji("Sine",function(s){return s===1?1:-Px(s*Cx)+1});ji("Back",To("in"),To("out"),To());et.SteppedEase=et.steps=dn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-lt;return function(o){return((i*Sr(0,a,o)|0)+r)*n}}};hr.ease=et["quad.out"];Jt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Pl+=s+","+s+"Params,"});var Pd=function(e,t){this.id=Rx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:cd,this.set=t?t.getSetter:Fl},mr=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Fs(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),pr||ln.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Fs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Os(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ua(this,n),!r._dp||r.parent||pd(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Fn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===lt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),hd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ph(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ph(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ns(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-lt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Sa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-lt?0:this._rts,this.totalTime(Sr(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Da(this),Gx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Os(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==lt&&(this._tTime-=lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=pt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Fn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Qt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Sa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ox);var i=Ut;return Ut=n,Il(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ut=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Lh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Lh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(gn(this,n),Qt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Qt(i)),this._dur||(this._zTime=-lt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-lt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-lt)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=_t(n)?n:dd,l=function(){var h=i.then;i.then=null,r&&r(),_t(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Js(this)},s}();fn(mr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-lt,_prom:0,_ps:!1,_rts:1});var Yt=function(s){ed(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Qt(n.sortChildren),mt&&Fn(n.parent||mt,Yn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&md(Yn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return sr(0,arguments,this),this},t.from=function(i,r,a){return sr(1,arguments,this),this},t.fromTo=function(i,r,a,o){return sr(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,ir(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new bt(i,r,gn(this,a),1),this},t.call=function(i,r,a){return Fn(this,bt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new bt(i,a,gn(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,ir(a).immediateRender=Qt(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},t.staggerFromTo=function(i,r,a,o,l,c,h,d){return o.startAt=a,ir(o).immediateRender=Qt(o.immediateRender),this.staggerTo(i,r,o,l,c,h,d)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:pt(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,_,g,p,m,v,x,y,b,S,E;if(this!==mt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,y=this._start,x=this._ts,m=!x,d&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(S=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(u=pt(h%p),h===l?(g=this._repeat,u=c):(b=pt(h/p),g=~~b,g&&g===b&&(u=c,g--),u>c&&(u=c)),b=Ns(this._tTime,p),!o&&this._tTime&&b!==g&&this._tTime-b*p-this._dur<=0&&(b=g),S&&g&1&&(u=c-u,E=1),g!==b&&!this._lock){var P=S&&b&1,M=P===(S&&g&1);if(g<b&&(P=!P),o=P?0:h%c?c:h,this._lock=1,this.render(o||(E?0:pt(g*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&cn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,b=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Xx(this,pt(o),pt(u)),v&&(h-=u-(u=v._start))),this._tTime=h,this._time=u,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!r&&!b&&(cn(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||u>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,a),u!==this._time||!this._ts&&!m){v=0,_&&(h+=this._zTime=-lt);break}}f=_}else{f=this._last;for(var T=i<0?i:u;f;){if(_=f._prev,(f._act||T<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(T-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(T-f._start)*f._ts,r,a||Ut&&Il(f)),u!==this._time||!this._ts&&!m){v=0,_&&(h+=this._zTime=T?-lt:lt);break}}f=_}}if(v&&!r&&(this.pause(),v.render(u>=o?0:-lt)._zTime=u>=o?1:-1,this._ts))return this._start=y,Da(this),this.render(i,r,a);this._onUpdate&&!r&&cn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&yi(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(cn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(ei(r)||(r=gn(this,r,i)),!(i instanceof mr)){if(Vt(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Pt(i))return this.addLabel(i,r);if(_t(i))i=bt.delayedCall(0,i);else return this}return this!==i?Fn(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-yn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof bt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return Pt(i)?this.removeLabel(i):_t(i)?this.killTweensOf(i):(i.parent===this&&Ia(this,i),i===this._recent&&(this._recent=this._last),Hi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pt(ln.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=gn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=bt.delayedCall(0,r||dr,a);return o.data="isPause",this._hasPause=1,Fn(this,o,gn(this,i))},t.removePause=function(i){var r=this._first;for(i=gn(this,i);r;)r._start===i&&r.data==="isPause"&&yi(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)di!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=Mn(i),l=this._first,c=ei(r),h;l;)l instanceof bt?Bx(l._targets,o)&&(c?(!di||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=gn(a,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,_=bt.to(a,fn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||lt,onStart:function(){if(a.pause(),!f){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&Fs(_,p,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,d||[])}},r));return u?_.render(0):_},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,fn({startAt:{time:gn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ih(this,gn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ih(this,gn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+lt)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=pt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Hi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Hi(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=yn,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Fn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=pt(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Fs(a,a===mt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(mt._ts&&(hd(mt,Sa(i,mt)),ld=ln.frame),ln.frame>=Ch){Ch+=un.autoSleep||120;var r=mt._first;if((!r||!r._ts)&&un.autoSleep&&ln._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ln.sleep()}}},e}(mr);fn(Yt.prototype,{_lock:0,_hasPause:0,_forcing:0});var lv=function(e,t,n,i,r,a,o){var l=new en(this._pt,e,t,0,1,Fd,null,r),c=0,h=0,d,u,f,_,g,p,m,v;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=fr(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),u=n.match(Mo)||[];d=Mo.exec(i);)_=d[0],g=i.substring(c,d.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?ws(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},c=Mo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(sd.test(i)||m)&&(l.e=0),this._pt=l,l},Dl=function(e,t,n,i,r,a,o,l,c,h){_t(i)&&(i=i(r||0,e,a));var d=e[t],u=n!=="get"?n:_t(d)?c?e[t.indexOf("set")||!_t(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=_t(d)?c?fv:Ud:Nl,_;if(Pt(i)&&(~i.indexOf("random(")&&(i=fr(i)),i.charAt(1)==="="&&(_=ws(u,i)+(Gt(u)||0),(_||_===0)&&(i=_))),!h||u!==i||tl)return!isNaN(u*i)&&i!==""?(_=new en(this._pt,e,t,+u||0,i-(u||0),typeof d=="boolean"?mv:Nd,0,f),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(t in e)&&Cl(t,i),lv.call(this,e,t,u,i,f,l||un.stringFilter,c))},cv=function(e,t,n,i,r){if(_t(e)&&(e=rr(e,r,t,n,i)),!Bn(e)||e.style&&e.nodeType||Vt(e)||nd(e))return Pt(e)?rr(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=rr(e[o],r,t,n,i);return a},Ld=function(e,t,n,i,r,a){var o,l,c,h;if(an[e]&&(o=new an[e]).init(r,o.rawVars?t[e]:cv(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new en(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Es))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},di,tl,Ul=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,v=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!bl,y=e.timeline,b=i.easeReverse||d,S,E,P,M,T,N,k,q,A,F,O,G,W;if(y&&(!u||!r)&&(r="none"),e._ease=Wi(r,hr.ease),e._rEase=b&&(Wi(b)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||u&&!i.stagger){if(q=p[0]?Vi(p[0]).harness:0,G=q&&i[q.prop],S=Ma(i,Rl),g&&(g._zTime<0&&g.progress(1),t<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?aa:Fx),g._lazy=0),a){if(yi(e._startAt=bt.set(p,fn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Qt(l),startAt:null,delay:0,onUpdate:c&&function(){return cn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut||!o&&!f)&&e._startAt.revert(aa),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(o=!1),P=fn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Qt(l),immediateRender:o,stagger:0,parent:m},S),G&&(P[q.prop]=G),yi(e._startAt=bt.set(p,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut?e._startAt.revert(aa):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,lt,lt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Qt(l)||l&&!_,E=0;E<p.length;E++){if(T=p[E],k=T._gsap||Ll(p)[E]._gsap,e._ptLookup[E]=F={},jo[k.id]&&_i.length&&ya(),O=v===p?E:v.indexOf(T),q&&(A=new q).init(T,G||S,e,O,v)!==!1&&(e._pt=M=new en(e._pt,T,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(z){F[z]=M}),A.priority&&(N=1)),!q||G)for(P in S)an[P]&&(A=Ld(P,S,e,O,T,v))?A.priority&&(N=1):F[P]=M=Dl.call(e,T,P,"get",S[P],O,v,0,i.stringFilter);e._op&&e._op[E]&&e.kill(T,e._op[E]),x&&e._pt&&(di=e,mt.killTweensOf(T,F,e.globalTime(t)),W=!e.parent,di=0),e._pt&&l&&(jo[k.id]=1)}N&&Od(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!W,u&&t<=0&&y.render(yn,!0,!0)},hv=function(e,t,n,i,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,u,f;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(h=u[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return tl=1,e.vars[t]="+=0",Ul(e,o),tl=0,l?ur(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=yt(n)+Gt(d.e)),d.b&&(d.b=h.s+Gt(d.b))},uv=function(e,t){var n=e[0]?Vi(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=Us({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},dv=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(Vt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},rr=function(e,t,n,i,r){return _t(e)?e.call(t,n,i,r):Pt(e)&&~e.indexOf("random(")?fr(e):e},Id=Pl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Dd={};Jt(Id+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Dd[s]=1});var bt=function(s){ed(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:ir(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=i.parent||mt,v=(Vt(n)||nd(n)?ei(n[0]):"length"in i)?[n]:Mn(n),x,y,b,S,E,P,M,T;if(o._targets=v.length?Ll(v):ur("GSAP target "+n+" not found. https://gsap.com",!un.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||u||ia(c)||ia(h)){i=o.vars;var N=i.easeReverse||i.yoyoEase;if(x=o.timeline=new Yt({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:v}),x.kill(),x.parent=x._dp=Yn(o),x._start=0,u||ia(c)||ia(h)){if(S=v.length,M=u&&vd(u),Bn(u))for(E in u)~Id.indexOf(E)&&(T||(T={}),T[E]=u[E]);for(y=0;y<S;y++)b=Ma(i,Dd),b.stagger=0,N&&(b.easeReverse=N),T&&Us(b,T),P=v[y],b.duration=+rr(c,Yn(o),y,P,v),b.delay=(+rr(h,Yn(o),y,P,v)||0)-o._delay,!u&&S===1&&b.delay&&(o._delay=h=b.delay,o._start+=h,b.delay=0),x.to(P,b,M?M(y,P,v):0),x._ease=et.none;x.duration()?c=h=0:o.timeline=0}else if(_){ir(fn(x.vars.defaults,{ease:"none"})),x._ease=Wi(_.ease||i.ease||"none");var k=0,q,A,F;if(Vt(_))_.forEach(function(O){return x.to(v,O,">")}),x.duration();else{b={};for(E in _)E==="ease"||E==="easeEach"||dv(E,_[E],b,_.easeEach);for(E in b)for(q=b[E].sort(function(O,G){return O.t-G.t}),k=0,y=0;y<q.length;y++)A=q[y],F={ease:A.e,duration:(A.t-(y?q[y-1].t:0))/100*c},F[E]=A.v,x.to(v,F,k),k+=F.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return f===!0&&!bl&&(di=Yn(o),mt.killTweensOf(v),di=0),Fn(m,Yn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!_&&o._start===pt(m._time)&&Qt(d)&&Vx(Yn(o))&&m.data!=="nested")&&(o._tTime=-lt,o.render(Math.max(0,-h)||0)),p&&md(Yn(o),p),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-lt&&!h?l:i<lt?0:i,u,f,_,g,p,m,v,x;if(!c)Wx(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,a);if(u=pt(d%g),d===l?(_=this._repeat,u=c):(p=pt(d/g),_=~~p,_&&_===p?(u=c,_--):u>c&&(u=c)),m=this._yoyo&&_&1,m&&(u=c-u),p=Ns(this._tTime,g),u===o&&!a&&this._initted&&_===p)return this._tTime=d,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==g&&this._initted&&(this._lock=a=1,this.render(pt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(gd(this,h?i:u,a,r,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var y=u<o;if(y!==this._inv){var b=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(y?-1:1)/b:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(u/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!r&&!p&&(cn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(u/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Ko(this,i,r,a),cn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&cn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Ko(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&yi(this,1),!r&&!(h&&!o)&&(d||o||m)&&(cn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,l){pr||ln.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ul(this,c),h=this._ease(c/this._dur),hv(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(Ua(this,0),this.parent||fd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Js(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ut),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,di&&di.vars.overwrite!==!0)._first||Js(this),this.parent&&a!==this.timeline.totalDuration()&&Fs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Mn(i):o,c=this._ptLookup,h=this._pt,d,u,f,_,g,p,m;if((!r||r==="all")&&kx(o,l))return r==="all"&&(this._pt=0),Js(this);for(d=this._op=this._op||[],r!=="all"&&(Pt(r)&&(g={},Jt(r,function(v){return g[v]=1}),r=g),r=uv(o,r)),m=o.length;m--;)if(~l.indexOf(o[m])){u=c[m],r==="all"?(d[m]=r,_=u,f={}):(f=d[m]=d[m]||{},_=r);for(g in _)p=u&&u[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Ia(this,p,"_pt"),delete u[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&Js(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return sr(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return sr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return mt.killTweensOf(i,r,a)},e}(mr);fn(bt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jt("staggerTo,staggerFrom,staggerFromTo",function(s){bt[s]=function(){var e=new Yt,t=Qo.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Nl=function(e,t,n){return e[t]=n},Ud=function(e,t,n){return e[t](n)},fv=function(e,t,n,i){return e[t](i.fp,n)},pv=function(e,t,n){return e.setAttribute(t,n)},Fl=function(e,t){return _t(e[t])?Ud:Tl(e[t])&&e.setAttribute?pv:Nl},Nd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},mv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Fd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ol=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},gv=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},_v=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ia(this,t,"_pt"):t.dep||(n=1),t=i;return!n},xv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Od=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},en=function(){function s(t,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Nd,this.d=l||this,this.set=c||Nl,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=xv,this.m=n,this.mt=r,this.tween=i},s}();Jt(Pl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Rl[s]=1});dn.TweenMax=dn.TweenLite=bt;dn.TimelineLite=dn.TimelineMax=Yt;mt=new Yt({sortChildren:!1,defaults:hr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});un.stringFilter=Cd;var Xi=[],la={},vv=[],Uh=0,yv=0,wo=function(e){return(la[e]||vv).map(function(t){return t()})},nl=function(){var e=Date.now(),t=[];e-Uh>2&&(wo("matchMediaInit"),Xi.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Dn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),wo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Uh=e,wo("matchMedia"))},Bd=function(){function s(t,n){this.selector=n&&Jo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=yv++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){_t(n)&&(r=i,i=n,n=_t);var a=this,o=function(){var c=ft,h=a.selector,d;return c&&c!==a&&c.data.push(a),r&&(a.selector=Jo(r)),ft=a,d=i.apply(a,arguments),_t(d)&&a._r.push(d),ft=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===_t?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=ft;ft=null,n(this),ft=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof bt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Yt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof bt)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Xi.length;a--;)Xi[a].id===this.id&&Xi.splice(a,1)},e.revert=function(n){this.kill(n||{})},s}(),Mv=function(){function s(t){this.contexts=[],this.scope=t,ft&&ft.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Bn(n)||(n={matches:n});var a=new Bd(0,r||this.scope),o=a.conditions={},l,c,h;ft&&!a.selector&&(a.selector=ft.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Dn.matchMedia(n[c]),l&&(Xi.indexOf(a)<0&&Xi.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(nl):l.addEventListener("change",nl)));return h&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Ea={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Td(i)})},timeline:function(e){return new Yt(e)},getTweensOf:function(e,t){return mt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Pt(e)&&(e=Mn(e)[0]);var r=Vi(e||{}).get,a=n?dd:ud;return n==="native"&&(n=""),e&&(t?a((an[t]&&an[t].get||r)(e,t,n,i)):function(o,l,c){return a((an[o]&&an[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Mn(e),e.length>1){var i=e.map(function(h){return nn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}e=e[0]||{};var a=an[t],o=Vi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var d=new a;Es._pt=0,d.init(e,n?h+n:h,Es,0,[e]),d.render(1,d),Es._pt&&Ol(1,Es)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,r=nn.to(e,fn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(t,l,c,h)};return a.tween=r,a},isTweening:function(e){return mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Wi(e.ease,hr.ease)),Rh(hr,e||{})},config:function(e){return Rh(un,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!an[o]&&!dn[o]&&ur(t+" effect requires "+o+" plugin.")}),So[t]=function(o,l,c){return n(Mn(o),fn(l||{},r),c)},a&&(Yt.prototype[t]=function(o,l,c){return this.add(So[t](o,Bn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){et[e]=Wi(t)},parseEase:function(e,t){return arguments.length?Wi(e,t):et},getById:function(e){return mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Yt(e),i,r;for(n.smoothChildTiming=Qt(e.smoothChildTiming),mt.remove(n),n._dp=0,n._time=n._tTime=mt._time,i=mt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof bt&&i.vars.onComplete===i._targets[0]))&&Fn(n,i,i._start-i._delay),i=r;return Fn(mt,n,0),n},context:function(e,t){return e?new Bd(e,t):ft},matchMedia:function(e){return new Mv(e)},matchMediaRefresh:function(){return Xi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||nl()},addEventListener:function(e,t){var n=la[e]||(la[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=la[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Qx,wrapYoyo:Jx,distribute:vd,random:Md,snap:yd,normalize:Zx,getUnit:Gt,clamp:Yx,splitColor:wd,toArray:Mn,selector:Jo,mapRange:Ed,pipe:jx,unitize:Kx,interpolate:ev,shuffle:xd},install:ad,effects:So,ticker:ln,updateRoot:Yt.updateRoot,plugins:an,globalTimeline:mt,core:{PropTween:en,globals:od,Tween:bt,Timeline:Yt,Animation:mr,getCache:Vi,_removeLinkedListItem:Ia,reverting:function(){return Ut},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return bl=e}}};Jt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ea[s]=bt[s]});ln.add(Yt.updateRoot);Es=Ea.to({},{duration:0});var Sv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Ev=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Sv(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Ao=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Pt(r)&&(l={},Jt(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Ev(o,r)}}}},nn=Ea.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Ut?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ao("roundProps",el),Ao("modifiers"),Ao("snap",yd))||Ea;bt.version=Yt.version=nn.version="3.15.0";rd=1;wl()&&Os();et.Power0;et.Power1;et.Power2;et.Power3;et.Power4;et.Linear;et.Quad;et.Cubic;et.Quart;et.Quint;et.Strong;et.Elastic;et.Back;et.SteppedEase;et.Bounce;et.Sine;et.Expo;et.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Nh,fi,As,Bl,Bi,Fh,zl,bv=function(){return typeof window<"u"},ti={},Ni=180/Math.PI,Cs=Math.PI/180,ms=Math.atan2,Oh=1e8,kl=/([A-Z])/g,Tv=/(left|right|width|margin|padding|x)/i,wv=/[\s,\(]\S/,On={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},il=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Av=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Cv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Rv=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Pv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},zd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},kd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Lv=function(e,t,n){return e.style[t]=n},Iv=function(e,t,n){return e.style.setProperty(t,n)},Dv=function(e,t,n){return e._gsap[t]=n},Uv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Nv=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Fv=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},gt="transform",tn=gt+"Origin",Ov=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in ti&&r){if(this.tfm=this.tfm||{},e!=="transform")e=On[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=jn(i,o)}):this.tfm[e]=a.x?a[e]:jn(i,e),e===tn&&(this.tfm.zOrigin=a.zOrigin);else return On.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(gt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(tn,t,"")),e=gt}(r||t)&&this.props.push(e,t,r[e])},Gd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Bv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(kl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=zl(),(!r||!r.isStart)&&!n[gt]&&(Gd(n),i.zOrigin&&n[tn]&&(n[tn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Vd=function(e,t){var n={target:e,props:[],revert:Bv,save:Ov};return e._gsap||nn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Hd,sl=function(e,t){var n=fi.createElementNS?fi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):fi.createElement(e);return n&&n.style?n:fi.createElement(e)},hn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(kl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Bs(t)||t,1)||""},Bh="O,Moz,ms,Ms,Webkit".split(","),Bs=function(e,t,n){var i=t||Bi,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Bh[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Bh[a]:"")+e},rl=function(){bv()&&window.document&&(Nh=window,fi=Nh.document,As=fi.documentElement,Bi=sl("div")||{style:{}},sl("div"),gt=Bs(gt),tn=gt+"Origin",Bi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hd=!!Bs("perspective"),zl=nn.core.reverting,Bl=1)},zh=function(e){var t=e.ownerSVGElement,n=sl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),As.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),As.removeChild(n),r},kh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Wd=function(e){var t,n;try{t=e.getBBox()}catch{t=zh(e),n=1}return t&&(t.width||t.height)||n||(t=zh(e)),t&&!t.width&&!t.x&&!t.y?{x:+kh(e,["x","cx","x1"])||0,y:+kh(e,["y","cy","y1"])||0,width:0,height:0}:t},Xd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Wd(e))},Mi=function(e,t){if(t){var n=e.style,i;t in ti&&t!==tn&&(t=gt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(kl,"-$1").toLowerCase())):n.removeAttribute(t)}},pi=function(e,t,n,i,r,a){var o=new en(e._pt,t,n,0,1,a?kd:zd);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Gh={deg:1,rad:1,turn:1},zv={grid:1,flex:1},Si=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Bi.style,l=Tv.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",_,g,p,m;if(i===a||!r||Gh[i]||Gh[a])return r;if(a!=="px"&&!u&&(r=s(e,t,n,"px")),m=e.getCTM&&Xd(e),(f||a==="%")&&(ti[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[h],yt(f?r/_*d:r/100*_);if(o[l?"width":"height"]=d+(u?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===fi||!g.appendChild)&&(g=fi.body),p=g._gsap,p&&f&&p.width&&l&&p.time===ln.time&&!p.uncache)return yt(r/p.width*d);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+i,_=e[h],v?e.style[t]=v:Mi(e,t)}else(f||a==="%")&&!zv[hn(g,"display")]&&(o.position=hn(e,"position")),g===e&&(o.position="static"),g.appendChild(Bi),_=Bi[h],g.removeChild(Bi),o.position="absolute";return l&&f&&(p=Vi(g),p.time=ln.time,p.width=g[h]),yt(u?_*r/d:_&&r?d/_*r:0)},jn=function(e,t,n,i){var r;return Bl||rl(),t in On&&t!=="transform"&&(t=On[t],~t.indexOf(",")&&(t=t.split(",")[0])),ti[t]&&t!=="transform"?(r=_r(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ta(hn(e,tn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ba[t]&&ba[t](e,t,n)||hn(e,t)||cd(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Si(e,t,r,n)+n:r},kv=function(e,t,n,i){if(!n||n==="none"){var r=Bs(t,e,1),a=r&&hn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=hn(e,"borderTopColor"))}var o=new en(this._pt,e.style,t,0,1,Fd),l=0,c=0,h,d,u,f,_,g,p,m,v,x,y,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=hn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=hn(e,t)||i,g?e.style[t]=g:Mi(e,t)),h=[n,i],Cd(h),n=h[0],i=h[1],u=n.match(Ss)||[],b=i.match(Ss)||[],b.length){for(;d=Ss.exec(i);)p=d[0],v=i.substring(l,d.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),p!==(g=u[c++]||"")&&(f=parseFloat(g)||0,y=g.substr((f+"").length),p.charAt(1)==="="&&(p=ws(f,p)+y),m=parseFloat(p),x=p.substr((m+"").length),l=Ss.lastIndex-x.length,x||(x=x||un.units[t]||y,l===i.length&&(i+=x,o.e+=x)),y!==x&&(f=Si(e,t,g,x)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:m-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?kd:zd;return sd.test(i)&&(o.e=0),this._pt=o,o},Vh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Gv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Vh[n]||n,t[1]=Vh[i]||i,t.join(" ")},Vv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],ti[o]&&(l=1,o=o==="transformOrigin"?tn:gt),Mi(n,o);l&&(Mi(n,gt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",_r(n,1),a.uncache=1,Gd(i)))}},ba={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new en(e._pt,t,n,0,0,Vv);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},gr=[1,0,0,1,0,0],qd={},Yd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Hh=function(e){var t=hn(e,gt);return Yd(t)?gr:t.substr(7).match(id).map(yt)},Gl=function(e,t){var n=e._gsap||Vi(e),i=e.style,r=Hh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?gr:r):(r===gr&&!e.offsetParent&&e!==As&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,As.appendChild(e)),r=Hh(e),l?i.display=l:Mi(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):As.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},al=function(e,t,n,i,r,a){var o=e._gsap,l=r||Gl(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,f=l[0],_=l[1],g=l[2],p=l[3],m=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,b=parseFloat(x[1])||0,S,E,P,M;n?l!==gr&&(E=f*p-_*g)&&(P=y*(p/E)+b*(-g/E)+(g*v-p*m)/E,M=y*(-_/E)+b*(f/E)-(f*v-_*m)/E,y=P,b=M):(S=Wd(e),y=S.x+(~x[0].indexOf("%")?y/100*S.width:y),b=S.y+(~(x[1]||x[0]).indexOf("%")?b/100*S.height:b)),i||i!==!1&&o.smooth?(m=y-c,v=b-h,o.xOffset=d+(m*f+v*g)-m,o.yOffset=u+(m*_+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[tn]="0px 0px",a&&(pi(a,o,"xOrigin",c,y),pi(a,o,"yOrigin",h,b),pi(a,o,"xOffset",d,o.xOffset),pi(a,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},_r=function(e,t){var n=e._gsap||new Pd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=hn(e,tn)||"0",h,d,u,f,_,g,p,m,v,x,y,b,S,E,P,M,T,N,k,q,A,F,O,G,W,z,Q,ne,ee,X,J,oe;return h=d=u=g=p=m=v=x=y=0,f=_=1,n.svg=!!(e.getCTM&&Xd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[gt]!=="none"?l[gt]:"")),i.scale=i.rotate=i.translate="none"),E=Gl(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),al(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,E)),b=n.xOrigin||0,S=n.yOrigin||0,E!==gr&&(N=E[0],k=E[1],q=E[2],A=E[3],h=F=E[4],d=O=E[5],E.length===6?(f=Math.sqrt(N*N+k*k),_=Math.sqrt(A*A+q*q),g=N||k?ms(k,N)*Ni:0,v=q||A?ms(q,A)*Ni+g:0,v&&(_*=Math.abs(Math.cos(v*Cs))),n.svg&&(h-=b-(b*N+S*q),d-=S-(b*k+S*A))):(oe=E[6],X=E[7],Q=E[8],ne=E[9],ee=E[10],J=E[11],h=E[12],d=E[13],u=E[14],P=ms(oe,ee),p=P*Ni,P&&(M=Math.cos(-P),T=Math.sin(-P),G=F*M+Q*T,W=O*M+ne*T,z=oe*M+ee*T,Q=F*-T+Q*M,ne=O*-T+ne*M,ee=oe*-T+ee*M,J=X*-T+J*M,F=G,O=W,oe=z),P=ms(-q,ee),m=P*Ni,P&&(M=Math.cos(-P),T=Math.sin(-P),G=N*M-Q*T,W=k*M-ne*T,z=q*M-ee*T,J=A*T+J*M,N=G,k=W,q=z),P=ms(k,N),g=P*Ni,P&&(M=Math.cos(P),T=Math.sin(P),G=N*M+k*T,W=F*M+O*T,k=k*M-N*T,O=O*M-F*T,N=G,F=W),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=yt(Math.sqrt(N*N+k*k+q*q)),_=yt(Math.sqrt(O*O+oe*oe)),P=ms(F,O),v=Math.abs(P)>2e-4?P*Ni:0,y=J?1/(J<0?-J:J):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Yd(hn(e,gt)),G&&e.setAttribute("transform",G))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=yt(f),n.scaleY=yt(_),n.rotation=yt(g)+o,n.rotationX=yt(p)+o,n.rotationY=yt(m)+o,n.skewX=v+o,n.skewY=x+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[tn]=Ta(c)),n.xOffset=n.yOffset=0,n.force3D=un.force3D,n.renderTransform=n.svg?Wv:Hd?$d:Hv,n.uncache=0,n},Ta=function(e){return(e=e.split(" "))[0]+" "+e[1]},Co=function(e,t,n){var i=Gt(t);return yt(parseFloat(t)+parseFloat(Si(e,"x",n+"px",i)))+i},Hv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,$d(e,t)},Ri="0deg",Zs="0px",Pi=") ",$d=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,v=n.target,x=n.zOrigin,y="",b=m==="auto"&&e&&e!==1||m===!0;if(x&&(d!==Ri||h!==Ri)){var S=parseFloat(h)*Cs,E=Math.sin(S),P=Math.cos(S),M;S=parseFloat(d)*Cs,M=Math.cos(S),a=Co(v,a,E*M*-x),o=Co(v,o,-Math.sin(S)*-x),l=Co(v,l,P*M*-x+x)}p!==Zs&&(y+="perspective("+p+Pi),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(b||a!==Zs||o!==Zs||l!==Zs)&&(y+=l!==Zs||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Pi),c!==Ri&&(y+="rotate("+c+Pi),h!==Ri&&(y+="rotateY("+h+Pi),d!==Ri&&(y+="rotateX("+d+Pi),(u!==Ri||f!==Ri)&&(y+="skew("+u+", "+f+Pi),(_!==1||g!==1)&&(y+="scale("+_+", "+g+Pi),v.style[gt]=y||"translate(0, 0)"},Wv=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,v=n.forceCSS,x=parseFloat(a),y=parseFloat(o),b,S,E,P,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Cs,c*=Cs,b=Math.cos(l)*d,S=Math.sin(l)*d,E=Math.sin(l-c)*-u,P=Math.cos(l-c)*u,c&&(h*=Cs,M=Math.tan(c-h),M=Math.sqrt(1+M*M),E*=M,P*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),b*=M,S*=M)),b=yt(b),S=yt(S),E=yt(E),P=yt(P)):(b=d,P=u,S=E=0),(x&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(x=Si(f,"x",a,"px"),y=Si(f,"y",o,"px")),(_||g||p||m)&&(x=yt(x+_-(_*b+g*E)+p),y=yt(y+g-(_*S+g*P)+m)),(i||r)&&(M=f.getBBox(),x=yt(x+i/100*M.width),y=yt(y+r/100*M.height)),M="matrix("+b+","+S+","+E+","+P+","+x+","+y+")",f.setAttribute("transform",M),v&&(f.style[gt]=M)},Xv=function(e,t,n,i,r){var a=360,o=Pt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Ni:1),c=l-i,h=i+c+"deg",d,u;return o&&(d=r.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Oh)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Oh)%a-~~(c/a)*a)),e._pt=u=new en(e._pt,t,n,i,c,Av),u.e=h,u.u="deg",e._props.push(n),u},Wh=function(e,t){for(var n in t)e[n]=t[n];return e},qv=function(e,t,n){var i=Wh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,u,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[gt]=t,o=_r(n,1),Mi(n,gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[gt],a[gt]=t,o=_r(n,1),a[gt]=c);for(l in ti)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(f=Gt(c),_=Gt(h),d=f!==_?Si(n,l,c,_):parseFloat(c),u=parseFloat(h),e._pt=new en(e._pt,o,l,d,u-d,il),e._pt.u=_||0,e._props.push(l));Wh(o,i)};Jt("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});ba[e>1?"border"+s:s]=function(o,l,c,h,d){var u,f;if(arguments.length<4)return u=a.map(function(_){return jn(o,_,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=u[g]=u[g]||u[(g-1)/2|0]}),o.init(l,f,d)}});var jd={name:"css",register:rl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,h,d,u,f,_,g,p,m,v,x,y,b,S,E,P,M;Bl||rl(),this.styles=this.styles||Vd(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(an[g]&&Ld(g,t,n,i,e,r)))){if(f=typeof h,_=ba[g],f==="function"&&(h=h.call(n,i,e,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=fr(h)),_)_(this,e,g,h,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",xi.lastIndex=0,xi.test(c)||(p=Gt(c),m=Gt(h),m?p!==m&&(c=Si(e,g,c,m)+m):p&&(h+=p)),this.add(o,"setProperty",c,h,i,r,0,0,g),a.push(g),P.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],Pt(c)&&~c.indexOf("random(")&&(c=fr(c)),Gt(c+"")||c==="auto"||(c+=un.units[g]||Gt(jn(e,g))||""),(c+"").charAt(1)==="="&&(c=jn(e,g))):c=jn(e,g),u=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),g in On&&(g==="autoAlpha"&&(u===1&&jn(e,"visibility")==="hidden"&&d&&(u=0),P.push("visibility",0,o.visibility),pi(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=On[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in ti,x){if(this.styles.save(g),M=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=hn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=h,h=hn(e,"perspective"),T?e.style.perspective=T:Mi(e,"perspective")}d=parseFloat(h)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||_r(e,t.parseTransform),S=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new en(this._pt,o,gt,0,1,b.renderTransform,b,0,-1),y.dep=1),g==="scale")this._pt=new en(this._pt,b,"scaleY",b.scaleY,(v?ws(b.scaleY,v+d):d)-b.scaleY||0,il),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(tn,0,o[tn]),h=Gv(h),b.svg?al(e,h,0,S,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==b.zOrigin&&pi(this,b,"zOrigin",b.zOrigin,m),pi(this,o,g,Ta(c),Ta(h)));continue}else if(g==="svgOrigin"){al(e,h,1,S,0,this);continue}else if(g in qd){Xv(this,b,g,u,v?ws(u,v+h):h);continue}else if(g==="smoothOrigin"){pi(this,b,"smooth",b.smooth,h);continue}else if(g==="force3D"){b[g]=h;continue}else if(g==="transform"){qv(this,h,e);continue}}else g in o||(g=Bs(g)||g);if(x||(d||d===0)&&(u||u===0)&&!wv.test(h)&&g in o)p=(c+"").substr((u+"").length),d||(d=0),m=Gt(h)||(g in un.units?un.units[g]:p),p!==m&&(u=Si(e,g,c,m)),this._pt=new en(this._pt,x?b:o,g,u,(v?ws(u,v+d):d)-u,!x&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?Pv:il),this._pt.u=m||0,x&&M!==h?(this._pt.b=c,this._pt.e=M,this._pt.r=Rv):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Cv);else if(g in o)kv.call(this,e,g,c,v?v+h:h);else if(g in e)this.add(e,g,c||e[g],v?v+h:h,i,r);else if(g!=="parseTransform"){Cl(g,h);continue}x||(g in o?P.push(g,0,o[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,c||e[g])),a.push(g)}}E&&Od(this)},render:function(e,t){if(t.tween._time||!zl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:jn,aliases:On,getSetter:function(e,t,n){var i=On[t];return i&&i.indexOf(",")<0&&(t=i),t in ti&&t!==tn&&(e._gsap.x||jn(e,"x"))?n&&Fh===n?t==="scale"?Uv:Dv:(Fh=n||{})&&(t==="scale"?Nv:Fv):e.style&&!Tl(e.style[t])?Lv:~t.indexOf("-")?Iv:Fl(e,t)},core:{_removeProperty:Mi,_getMatrix:Gl}};nn.utils.checkPrefix=Bs;nn.core.getStyleSaver=Vd;(function(s,e,t,n){var i=Jt(s+","+e+","+t,function(r){ti[r]=1});Jt(e,function(r){un.units[r]="deg",qd[r]=1}),On[i[13]]=s+","+e,Jt(n,function(r){var a=r.split(":");On[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){un.units[s]="px"});nn.registerPlugin(jd);var tt=nn.registerPlugin(jd)||nn;tt.core.Tween;const Wt=[{id:"mind",index:"01",name:"MIND STONE",roman:"I",colorHex:"#ffd000",colorThree:16764928,coreColor:16773258,darkColor:6706432,domainKey:"intelligence",domain:"INTELLIGENCE",domainTagline:"AI • ML • Decision Systems",marvelTheme:"Vision Neural Gold",entity:"The Scepter / Vision's Core",origin:"Chitauri Scepter / Neural Matrix",vessel:"The Scepter / Vision",frequency:"528.00 THz",refractiveIndex:"2.54",powerLevel:"98.5%",particleCount:180,techStack:["Python","PyTorch","LangChain","FastAPI","Gemini API","TensorFlow"],quote:"It contains an intellect of supreme cosmic density.",description:"Architect autonomous multi-agent networks, neural cognition models, self-refining LLM pipelines, and intelligent decision systems capable of enterprise-scale problem-solving.",stats:[{label:"SYNAPSE DENSITY",value:"Infinite"},{label:"MODEL CAPACITY",value:"Trillion Param"},{label:"HARMONIC",value:"528.00 THz"},{label:"SLOTS OPEN",value:"12 Squads"}]},{id:"space",index:"02",name:"SPACE STONE",roman:"II",colorHex:"#00d2ff",colorThree:54015,coreColor:8449279,darkColor:16486,domainKey:"connectivity",domain:"CONNECTIVITY",domainTagline:"Cybersecurity • Cloud • Networks",marvelTheme:"Tesseract Cyan",entity:"Tesseract (Cosmic Cube)",origin:"Pre-Universe Singularity / Asgardian Vault",vessel:"The Tesseract",frequency:"432.18 THz",refractiveIndex:"2.42",powerLevel:"99.2%",particleCount:160,techStack:["Rust","Go","Kubernetes","eBPF","Cloudflare Workers","WireGuard"],quote:"The Tesseract has awakened. It is on a little world, a human world.",description:"Forge zero-trust defense architectures, planet-scale cloud networks, high-throughput distributed protocols, and resilient cybersecurity fabrics.",stats:[{label:"LATENCY PROFILE",value:"Sub-5ms Mesh"},{label:"DEFENSE MATRIX",value:"Post-Quantum"},{label:"HARMONIC",value:"432.18 THz"},{label:"SLOTS OPEN",value:"10 Squads"}]},{id:"reality",index:"03",name:"REALITY STONE",roman:"III",colorHex:"#ff2a4b",colorThree:16722507,coreColor:16741768,darkColor:6684688,domainKey:"digital",domain:"DIGITAL",domainTagline:"Web • Mobile • Digital Platforms",marvelTheme:"Aether Crimson",entity:"The Aether (Fluid Crystal)",origin:"Pre-Universe Singularity / Svartalfheim",vessel:"The Aether Prism",frequency:"612.44 THz",refractiveIndex:"2.68",powerLevel:"97.8%",particleCount:220,techStack:["TypeScript","React","Flutter","Next.js","Node.js","WebGL"],quote:"It turns matter into dark matter, reshaping physical reality at will.",description:"Bend digital reality. Build hyper-responsive web applications, cross-platform mobile architectures, immersive real-time canvases, and scalable modern platforms.",stats:[{label:"RENDER TARGET",value:"120 FPS WebGL"},{label:"STATE CONFLICT",value:"Sub-30ms CRDT"},{label:"HARMONIC",value:"612.44 THz"},{label:"SLOTS OPEN",value:"14 Squads"}]},{id:"power",index:"04",name:"POWER STONE",roman:"IV",colorHex:"#b026ff",colorThree:11544319,coreColor:14714367,darkColor:4851058,domainKey:"automation",domain:"AUTOMATION",domainTagline:"IoT • Robotics • Embedded Systems",marvelTheme:"Thanos Void Purple",entity:"The Orb / Morag Temple",origin:"Pre-Universe Singularity / Celestial Eson",vessel:"The Orb of Morag",frequency:"741.89 THz",refractiveIndex:"2.75",powerLevel:"100.0%",particleCount:200,techStack:["C++","Rust","ESP32 / Arduino","ROS2","MQTT","FreeRTOS"],quote:"It contains an energy that destroys all organic matter it touches.",description:"Unleash physical and digital kinetic power. Develop autonomous robotics, smart hardware controllers, industrial IoT pipelines, and embedded real-time systems.",stats:[{label:"BUS TELEMETRY",value:"Microsecond"},{label:"KINETIC FAILOVER",value:"Autonomous Swarm"},{label:"HARMONIC",value:"741.89 THz"},{label:"SLOTS OPEN",value:"8 Squads"}]},{id:"time",index:"05",name:"TIME STONE",roman:"V",colorHex:"#00ff88",colorThree:65416,coreColor:9109441,darkColor:21803,domainKey:"analytics",domain:"ANALYTICS",domainTagline:"Data • Prediction • Optimization",marvelTheme:"Doctor Strange Emerald",entity:"Eye of Agamotto / Kamar-Taj",origin:"Pre-Universe Singularity / Sorcerer Supreme",vessel:"Eye of Agamotto",frequency:"852.12 THz",refractiveIndex:"2.48",powerLevel:"98.9%",particleCount:190,techStack:["Python","Kafka","ClickHouse","Pandas","DuckDB","Scikit-Learn"],quote:"Dormammu, I have come to bargain.",description:"Control temporal velocity. Engineer real-time streaming pipelines, high-throughput predictive time-series models, algorithmic optimization engines, and big data intelligence.",stats:[{label:"STREAM INGEST",value:"1M Events/sec"},{label:"ORACLE HORIZON",value:"14,000,605 Paths"},{label:"HARMONIC",value:"852.12 THz"},{label:"SLOTS OPEN",value:"11 Squads"}]},{id:"soul",index:"06",name:"SOUL STONE",roman:"VI",colorHex:"#ff7700",colorThree:16742144,coreColor:16765567,darkColor:10044416,domainKey:"impact",domain:"IMPACT",domainTagline:"Healthcare • Agriculture • Education • Social Good",marvelTheme:"Vormir Sunset Orange",entity:"Vormir Altar / Soul World",origin:"Pre-Universe Singularity / Red Skull Guardian",vessel:"Vormir Shrine",frequency:"963.00 THz",refractiveIndex:"2.62",powerLevel:"99.7%",particleCount:180,techStack:["Python","Flutter","PostgreSQL","FastAPI","Edge AI","OpenCV"],quote:"A soul for a soul. Great technological impact demands great purpose.",description:"Channel technology to transform lives. Pioneer accessible healthcare diagnostics, precision agricultural sensors, adaptive educational tools, and sustainable social impact networks.",stats:[{label:"COMMUNITY REACH",value:"Global Impact"},{label:"ETHICAL CORE",value:"Privacy-Preserving"},{label:"HARMONIC",value:"963.00 THz"},{label:"SLOTS OPEN",value:"15 Squads"}]}],ca=0,Yv=1,$v=new D,Xh=new mx,Ro=new $n,qh=new D,sa=new xs;class jv{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Yh,this.unassigned=new Yh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new Kv(e[t]));this.compute()}return this}setFromObject(e){const t=[];return e.updateMatrixWorld(!0),e.traverse(function(n){const i=n.geometry;if(i!==void 0){const r=i.attributes.position;if(r!==void 0)for(let a=0,o=r.count;a<o;a++){const l=new D;l.fromBufferAttribute(r,a).applyMatrix4(n.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){const t=this.faces;for(let n=0,i=t.length;n<i;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){const n=this.faces;let i=-1/0,r=1/0;for(let a=0,o=n.length;a<o;a++){const l=n[a],c=l.distanceToPoint(e.origin),h=l.normal.dot(e.direction);if(c>0&&h>=0)return null;const d=h!==0?-c/h:0;if(!(d<=0)&&(h>0?r=Math.min(d,r):i=Math.max(d,i),i>r))return null}return i!==-1/0?e.at(i,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,$v)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}removeAllVerticesFromFace(e){if(e.outside!==null){const t=e.outside;let n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}deleteFaceVertices(e,t){const n=this.removeAllVerticesFromFace(e);if(n!==void 0)if(t===void 0)this.unassigned.appendChain(n);else{let i=n;do{const r=i.next;t.distanceToPoint(i.point)>this.tolerance?this.addVertexToFace(i,t):this.unassigned.append(i),i=r}while(i!==null)}return this}resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{const n=t.next;let i=this.tolerance,r=null;for(let a=0;a<e.length;a++){const o=e[a];if(o.mark===ca){const l=o.distanceToPoint(t.point);if(l>i&&(i=l,r=o),i>1e3*this.tolerance)break}}r!==null&&this.addVertexToFace(t,r),t=n}while(t!==null)}return this}computeExtremes(){const e=new D,t=new D,n=[],i=[];for(let r=0;r<3;r++)n[r]=i[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,a=this.vertices.length;r<a;r++){const o=this.vertices[r],l=o.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),n[c]=o);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),i[c]=o)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:i}}computeInitialHull(){const e=this.vertices,t=this.computeExtremes(),n=t.min,i=t.max;let r=0,a=0;for(let u=0;u<3;u++){const f=i[u].point.getComponent(u)-n[u].point.getComponent(u);f>r&&(r=f,a=u)}const o=n[a],l=i[a];let c,h;r=0,Xh.set(o.point,l.point);for(let u=0,f=this.vertices.length;u<f;u++){const _=e[u];if(_!==o&&_!==l){Xh.closestPointToPoint(_.point,!0,qh);const g=qh.distanceToSquared(_.point);g>r&&(r=g,c=_)}}r=-1,Ro.setFromCoplanarPoints(o.point,l.point,c.point);for(let u=0,f=this.vertices.length;u<f;u++){const _=e[u];if(_!==o&&_!==l&&_!==c){const g=Math.abs(Ro.distanceToPoint(_.point));g>r&&(r=g,h=_)}}const d=[];if(Ro.distanceToPoint(h.point)<0){d.push(wn.create(o,l,c),wn.create(h,l,o),wn.create(h,c,l),wn.create(h,o,c));for(let u=0;u<3;u++){const f=(u+1)%3;d[u+1].getEdge(2).setTwin(d[0].getEdge(f)),d[u+1].getEdge(1).setTwin(d[f+1].getEdge(0))}}else{d.push(wn.create(o,c,l),wn.create(h,o,l),wn.create(h,l,c),wn.create(h,c,o));for(let u=0;u<3;u++){const f=(u+1)%3;d[u+1].getEdge(2).setTwin(d[0].getEdge((3-u)%3)),d[u+1].getEdge(0).setTwin(d[f+1].getEdge(1))}}for(let u=0;u<4;u++)this.faces.push(d[u]);for(let u=0,f=e.length;u<f;u++){const _=e[u];if(_!==o&&_!==l&&_!==c&&_!==h){r=this.tolerance;let g=null;for(let p=0;p<4;p++){const m=this.faces[p].distanceToPoint(_.point);m>r&&(r=m,g=this.faces[p])}g!==null&&this.addVertexToFace(_,g)}}return this}reindexFaces(){const e=[];for(let t=0;t<this.faces.length;t++){const n=this.faces[t];n.mark===ca&&e.push(n)}return this.faces=e,this}nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0;const n=this.assigned.first().face;let i=n.outside;do{const r=n.distanceToPoint(i.point);r>t&&(t=r,e=i),i=i.next}while(i!==null&&i.face===n);return e}}computeHorizon(e,t,n,i){this.deleteFaceVertices(n),n.mark=Yv;let r;t===null?r=t=n.getEdge(0):r=t.next;do{const a=r.twin,o=a.face;o.mark===ca&&(o.distanceToPoint(e)>this.tolerance?this.computeHorizon(e,a,o,i):i.push(r)),r=r.next}while(r!==t);return this}addAdjoiningFace(e,t){const n=wn.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}addNewFaces(e,t){this.newFaces=[];let n=null,i=null;for(let r=0;r<t.length;r++){const a=t[r],o=this.addAdjoiningFace(e,a);n===null?n=o:o.next.setTwin(i),this.newFaces.push(o.face),i=o}return n.next.setTwin(i),this}addVertexToHull(e){const t=[];return this.unassigned.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,t),this.addNewFaces(e,t),this.resolveUnassignedPoints(this.newFaces),this}cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}compute(){let e;for(this.computeInitialHull();(e=this.nextVertexToAdd())!==void 0;)this.addVertexToHull(e);return this.reindexFaces(),this.cleanup(),this}}class wn{constructor(){this.normal=new D,this.midpoint=new D,this.area=0,this.constant=0,this.outside=null,this.mark=ca,this.edge=null}static create(e,t,n){const i=new wn,r=new Po(e,i),a=new Po(t,i),o=new Po(n,i);return r.next=o.prev=a,a.next=r.prev=o,o.next=a.prev=r,i.edge=r,i.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){const e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return sa.set(e.point,t.point,n.point),sa.getNormal(this.normal),sa.getMidpoint(this.midpoint),this.area=sa.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}}class Po{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}}class Kv{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}}class Yh{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}}class Zv extends Mt{constructor(e=[]){super();const t=[],n=[],r=new jv().setFromPoints(e).faces;for(let a=0;a<r.length;a++){const o=r[a];let l=o.edge;do{const c=l.head().point;t.push(c.x,c.y,c.z),n.push(o.normal.x,o.normal.y,o.normal.z),l=l.next}while(l!==o.edge)}this.setAttribute("position",new at(t,3)),this.setAttribute("normal",new at(n,3))}}let Li=null;function Qv(){if(Li)return Li;const s=document.createElement("canvas");s.width=512,s.height=512;const e=s.getContext("2d");e.fillStyle="#808080",e.fillRect(0,0,512,512);const t=e.getImageData(0,0,512,512),n=t.data;for(let i=0;i<n.length;i+=4){const r=(Math.random()-.5)*48;n[i]=Math.min(255,Math.max(0,128+r)),n[i+1]=n[i],n[i+2]=n[i],n[i+3]=255}e.putImageData(t,0,0),e.strokeStyle="rgba(240, 240, 240, 0.35)",e.lineWidth=1.4;for(let i=0;i<22;i++){e.beginPath();let r=Math.random()*512,a=Math.random()*512;e.moveTo(r,a);for(let o=0;o<5;o++)r+=(Math.random()-.5)*90,a+=(Math.random()-.5)*90,e.lineTo(r,a);e.stroke()}return Li=new _a(s),Li.wrapS=or,Li.wrapT=or,Li.repeat.set(2,2),Li}function Jv(s=12){const e=[],t=[];for(let f=0;f<s;f++)t.push(f/s*Math.PI*2+Math.PI/s);const n=t.map(f=>new D(Math.cos(f)*.72*(1+.12*Math.cos(2*f)),.58,Math.sin(f)*.6*(1-.12*Math.cos(2*f)))),i=new D(0,.59,0),r=t.map(f=>new D(Math.cos(f)*1.05*(1+.12*Math.cos(2*f)),.35,Math.sin(f)*.88*(1-.12*Math.cos(2*f)))),a=t.map(f=>new D(Math.cos(f)*1.3*(1+.12*Math.cos(2*f)),.12,Math.sin(f)*1.08*(1-.12*Math.cos(2*f)))),o=t.map(f=>new D(Math.cos(f)*1.3*(1+.12*Math.cos(2*f)),-.12,Math.sin(f)*1.08*(1-.12*Math.cos(2*f)))),l=t.map(f=>new D(Math.cos(f)*.8*(1+.12*Math.cos(2*f)),-.58,Math.sin(f)*.66*(1-.12*Math.cos(2*f)))),c=new D(0,-.98,0);function h(f,_,g){e.push(f.x,f.y,f.z,_.x,_.y,_.z,g.x,g.y,g.z)}function d(f,_,g,p){h(f,_,g),h(f,g,p)}for(let f=0;f<s;f++){const _=(f+1)%s;h(i,n[f],n[_]),d(n[f],r[f],r[_],n[_]),d(r[f],a[f],a[_],r[_]),d(a[f],o[f],o[_],a[_]),d(o[f],l[f],l[_],o[_]),h(l[f],c,l[_])}const u=new Mt;return u.setAttribute("position",new at(e,3)),u.computeVertexNormals(),u}function gs(s=42,e=1.15,t=1.35,n=1.05){let i=s;function r(){return i=(i*9301+49297)%233280,i/233280}const a=[],o=30;for(let d=0;d<o;d++){const u=r()*2-1,f=r()*Math.PI*2,_=Math.sqrt(Math.max(0,1-u*u)),g=_*Math.cos(f),p=u,m=_*Math.sin(f),v=g*e,x=p*t,y=m*n,b=Math.sqrt(v*v+x*x+y*y),S=d%4===0?.78+r()*.12:.9+r()*.22,E=b*S;a.push({nx:g,ny:p,nz:m,d:E})}a.push({nx:.55,ny:.65,nz:.4,d:1}),a.push({nx:-.6,ny:.5,nz:-.55,d:.95}),a.push({nx:.65,ny:-.6,nz:-.4,d:.98}),a.push({nx:-.5,ny:-.75,nz:.4,d:.92});const l=a.length,c=[];for(let d=0;d<l;d++)for(let u=d+1;u<l;u++)for(let f=u+1;f<l;f++){const _=a[d],g=a[u],p=a[f],m=_.nx*(g.ny*p.nz-g.nz*p.ny)-_.ny*(g.nx*p.nz-g.nz*p.nx)+_.nz*(g.nx*p.ny-g.ny*p.nx);if(Math.abs(m)<1e-4)continue;const v=(_.d*(g.ny*p.nz-g.nz*p.ny)-_.ny*(g.d*p.nz-g.nz*p.d)+_.nz*(g.d*p.ny-g.ny*p.d))/m,x=(_.nx*(g.d*p.nz-g.nz*p.d)-_.d*(g.nx*p.nz-g.nz*p.nx)+_.nz*(g.nx*p.d-g.d*p.nx))/m,y=(_.nx*(g.ny*p.d-g.d*p.ny)-_.ny*(g.nx*p.d-g.d*p.nx)+_.d*(g.nx*p.ny-g.ny*p.nx))/m;let b=!0;for(let S=0;S<l;S++){const E=a[S];if(E.nx*v+E.ny*x+E.nz*y>E.d+.001){b=!1;break}}b&&c.push(new D(v,x,y))}const h=new Zv(c);return h.center(),h.computeVertexNormals(),h}function ey(s){return s==="time"?Jv(12):s==="soul"?gs(42,1.15,1.35,1.05):s==="mind"?gs(77,1.08,1.48,1.02):s==="power"?gs(93,1.25,1.28,1.18):s==="space"?gs(17,1.2,1.3,1.12):s==="reality"?gs(51,1.16,1.34,1.14):gs(42,1.2,1.2,1.2)}function ty(s,e){s.computeBoundingBox();const t=s.boundingBox,n=t.min.y,i=t.max.y,r=Math.max(.001,i-n),a=t.min.x,o=t.max.x,l=Math.max(.001,o-a),c=t.min.z,h=t.max.z,d=Math.max(.001,h-c),u=s.attributes.position,f=new Float32Array(u.count*3);for(let S=0;S<u.count;S++)f[S*3]=(u.getX(S)-a)/l,f[S*3+1]=(u.getY(S)-n)/r,f[S*3+2]=(u.getZ(S)-c)/d;const _=new Float32Array(u.count*3),g=new Zt(_,3);s.setAttribute("color",g);const p=new Pe(e.coreColor).lerp(new Pe(16777215),.62),m=new Pe(e.colorThree),v=new Pe(e.darkColor).multiplyScalar(.36),x=new Pe,y=new Pe,b=S=>{const E=.5+Math.sin(S*4.6)*.3;y.copy(p).lerp(new Pe(16777215),E);for(let P=0;P<u.count;P++){const M=f[P*3],T=f[P*3+1],N=f[P*3+2],k=Math.sin(S*4.5+M*3+N*2.4)*.22+Math.cos(S*3.5+T*2.6)*.13;let q=T*.88+M*.12+k;if(q=Math.max(0,Math.min(1,q)),q<.5){const A=Math.pow(q*2,1.25);x.copy(v).lerp(m,A)}else{const A=Math.pow((q-.5)*2,.82);x.copy(m).lerp(y,A)}_[P*3]=x.r,_[P*3+1]=x.g,_[P*3+2]=x.b}g.needsUpdate=!0};return b(0),b}function ny(s){const e=new Nn;e.name=s.id,e.userData={stoneData:s};const t=ey(s.id),n=ty(t,s),i=Qv(),r=new hx({color:16777215,vertexColors:!0,emissive:s.colorThree,emissiveIntensity:.18,roughness:.14,metalness:.06,transmission:0,transparent:!1,opacity:1,depthWrite:!0,ior:1.76,specularIntensity:1,specularColor:new Pe(16777215),clearcoat:.55,clearcoatRoughness:.06,bumpMap:i,bumpScale:.015,flatShading:!0}),a=new Et(t,r);a.castShadow=!0,a.receiveShadow=!0,e.add(a);const o=new ph(new vl(1.05,1)),l=new Qs({color:s.coreColor,transparent:!0,opacity:0,blending:kt}),c=new jr(o,l);c.visible=!1,e.add(c);const h=new Qs({color:16777215,transparent:!0,opacity:.45,blending:kt}),d=new jr(new ph(t),h);d.visible=!0,e.add(d);const u=new yl(.24,18,18),f=new An({color:s.coreColor,transparent:!0,opacity:0}),_=new Et(u,f);_.visible=!1,e.add(_);const g=new Xo(s.coreColor,1.8,10,1.4);g.position.set(0,1,2.6),e.add(g);const p=new Xo(s.colorThree,1.3,8,1.4);p.position.set(0,-1,-2.6),e.add(p);const m=new Nn;if(m.name="artifacts",s.id==="space"){const A=new zs(2.1,2.1,2.1),F=new ox(A),O=new jr(F,new Qs({color:54015,transparent:!0,opacity:.25,blending:kt}));m.add(O)}else if(s.id==="mind"){const A=new Ms(1.92,.005,6,64),F=new An({color:16771584,transparent:!0,opacity:.16,blending:kt}),O=new Et(A,F);O.rotation.set(Math.PI/3.5,0,Math.PI/6);const G=new Et(A,F);G.rotation.set(-Math.PI/3.5,0,-Math.PI/6),m.add(O,G)}else if(s.id==="reality")for(let A=0;A<2;A++){const F=1.7+A*.35,O=new Ms(F,.015,6,48),G=new An({color:16717636,transparent:!0,opacity:.3-A*.08,blending:kt}),W=new Et(O,G);W.rotation.x=Math.random()*Math.PI,W.rotation.y=Math.random()*Math.PI,W.userData={speedX:.006+A*.004,speedY:.008+A*.003},m.add(W)}else if(s.id==="power"){const A=new Nn,F=new Ml(.055,0),O=new An({color:14647551,transparent:!0,opacity:.55,blending:kt});for(let G=0;G<18;G++){const W=.6+Math.random()*.7,z=new Et(F,O);z.scale.set(W,W,W);const Q=G/18*Math.PI*2,ne=1.85+(Math.random()-.5)*.4,ee=(Math.random()-.5)*.7;z.position.set(Math.cos(Q)*ne,ee,Math.sin(Q)*ne),A.add(z)}A.rotation.set(Math.PI/4,0,Math.PI/6),m.add(A)}else if(s.id==="time"){const A=new Nn,F=new xa(1.68,1.72,64),O=new xa(2.1,2.15,64),G=new An({color:65416,side:xn,transparent:!0,opacity:.65,blending:kt}),W=new An({color:6942894,side:xn,transparent:!0,opacity:.45,blending:kt}),z=new Et(F,G),Q=new Et(O,W);z.rotation.x=Math.PI/2,Q.rotation.x=Math.PI/2;const ne=new Mt,ee=1.18,X=[-ee,0,-ee,ee,0,-ee,ee,0,-ee,ee,0,ee,ee,0,ee,-ee,0,ee,-ee,0,ee,-ee,0,-ee];ne.setAttribute("position",new at(X,3));const J=new Qs({color:65416,transparent:!0,opacity:.55,blending:kt}),oe=new jr(ne,J),xe=oe.clone();xe.rotation.y=Math.PI/4,z.add(oe,xe);const ve=new Ra(.025,.14),De=new An({color:9109441,side:xn,blending:kt});for(let Re=0;Re<24;Re++){const ye=Re/24*Math.PI*2,ze=new Et(ve,De);ze.position.set(Math.cos(ye)*2.12,0,Math.sin(ye)*2.12),ze.rotation.y=-ye,Q.add(ze)}A.add(z,Q),m.add(A)}else if(s.id==="soul"){const A=new Nn,F=new An({color:16758869,transparent:!0,opacity:.18,blending:kt}),O=new Et(new Ms(1.85,.006,6,64),F);O.rotation.set(Math.PI/3,0,Math.PI/6);const G=new Et(new Ms(1.95,.005,6,64),F);G.rotation.set(-Math.PI/3,0,-Math.PI/6),A.add(O,G),m.add(A)}e.add(m);const v=120,x=new Mt,y=new Float32Array(v*3);for(let A=0;A<v;A++){const F=1+Math.random()*1.8,O=Math.random()*Math.PI*2,G=Math.acos(2*Math.random()-1);y[A*3]=F*Math.sin(G)*Math.cos(O),y[A*3+1]=F*Math.sin(G)*Math.sin(O),y[A*3+2]=F*Math.cos(G)}x.setAttribute("position",new Zt(y,3));const b=document.createElement("canvas");b.width=32,b.height=32;const S=b.getContext("2d"),E=S.createRadialGradient(16,16,0,16,16,16);E.addColorStop(0,"rgba(255, 255, 255, 1)"),E.addColorStop(.3,"rgba(255, 255, 255, 0.7)"),E.addColorStop(.8,"rgba(255, 255, 255, 0.15)"),E.addColorStop(1,"rgba(255, 255, 255, 0)"),S.fillStyle=E,S.fillRect(0,0,32,32);const P=new _a(b),M=new xl({color:s.coreColor,size:.1,map:P,transparent:!0,opacity:.7,blending:kt,depthWrite:!1}),T=new Ku(x,M);T.name="particles",e.add(T);const N=.0055+(s.colorThree&7)*4e-4,k=.009+(s.colorThree>>4&7)*4e-4,q=.0042+(s.colorThree>>8&7)*4e-4;return{group:e,gemMesh:a,gemMat:r,wireMesh:d,veinMesh:c,coreMesh:_,pointLight:g,artifactsGroup:m,particles:T,update:(A,F)=>{const O=1+Math.sin(A*3.6)*.1;if(_.scale.set(O,O,O),g.intensity=1.8+Math.sin(A*4.5)*.4,p.intensity=1.3+Math.cos(A*4)*.3,l.opacity=.12+Math.sin(A*4.2)*.07,a.rotation.x+=N+Math.sin(A*1.8)*.0016,a.rotation.y+=k,a.rotation.z+=q+Math.cos(A*1.5)*.0016,c.rotation.copy(a.rotation),d.rotation.copy(a.rotation),n(A),s.id==="space"){const z=m.children[0];z&&(z.rotation.y+=.007,z.rotation.x+=.004)}else if(s.id==="mind")m.children.forEach((z,Q)=>{z.rotation.y+=Q===0?.009:-.009,z.rotation.z+=.004});else if(s.id==="reality")m.children.forEach(z=>{z.userData&&(z.rotation.x+=z.userData.speedX*1.8,z.rotation.y+=z.userData.speedY*1.8)});else if(s.id==="power"){const z=m.children[0];z&&(z.rotation.y+=.015,z.rotation.z+=.005)}else if(s.id==="time"){const z=m.children[0];z&&z.children.length>=2&&(z.children[0].rotation.z+=.012,z.children[1].rotation.z-=.008)}else if(s.id==="soul"){const z=m.children[0];z&&z.children.length>=2&&(z.children[0].rotation.y+=.009,z.children[1].rotation.y-=.009)}const G=T.geometry.attributes.position.array,W=G.length/3;for(let z=0;z<W;z++){const Q=G[z*3],ne=G[z*3+2],ee=.006;G[z*3]=Q*Math.cos(ee)-ne*Math.sin(ee),G[z*3+2]=Q*Math.sin(ee)+ne*Math.cos(ee)}T.geometry.attributes.position.needsUpdate=!0}}}class iy{constructor(){this.ctx=null,this.isMuted=!1,this.masterGain=null,this.compressor=null,this.stoneFrequencies={space:[261.63,523.25,1046.5],mind:[293.66,587.33,1174.66],reality:[329.63,659.25,987.77],power:[369.99,739.99,1479.98],time:[392,783.99,1567.98],soul:[440,880,1760]},this.initialized=!1}init(){if(!this.initialized)try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.7,this.ctx.currentTime),this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.setValueAtTime(-14,this.ctx.currentTime),this.compressor.knee.setValueAtTime(8,this.ctx.currentTime),this.compressor.ratio.setValueAtTime(6,this.ctx.currentTime),this.compressor.attack.setValueAtTime(.003,this.ctx.currentTime),this.compressor.release.setValueAtTime(.2,this.ctx.currentTime),this.masterGain.connect(this.compressor),this.compressor.connect(this.ctx.destination),this.initialized=!0}catch(e){console.warn("Web Audio could not be initialized:",e)}}toggleMute(){if(this.initialized?this.isMuted=!this.isMuted:(this.init(),this.isMuted=!1),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.masterGain&&this.ctx){const e=this.isMuted?0:.7;this.masterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.04)}return!this.isMuted}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){!this.isMuted&&this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}destroy(){if(this.ctx){try{this.ctx.close()}catch{}this.ctx=null}this.initialized=!1}playStoneChime(e){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.stoneFrequencies[e]||[440,880,1320],n=this.ctx.currentTime;t.forEach((i,r)=>{const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type=r===0?"sine":"triangle",a.frequency.setValueAtTime(i,n),r>0&&a.detune.setValueAtTime(r%2===0?3:-3,n);const l=.24/(r+1);o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(l,n+.03),o.gain.exponentialRampToValueAtTime(1e-4,n+2+r*.35),a.connect(o),o.connect(this.masterGain),a.start(n),a.stop(n+2.6)})}playEnergyPulse(){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter();t.type="sawtooth",t.frequency.setValueAtTime(65,e),t.frequency.exponentialRampToValueAtTime(440,e+.3),t.frequency.exponentialRampToValueAtTime(110,e+.8),i.type="bandpass",i.frequency.setValueAtTime(220,e),i.frequency.linearRampToValueAtTime(1100,e+.3),i.frequency.exponentialRampToValueAtTime(180,e+.8),i.Q.setValueAtTime(4,e),n.gain.setValueAtTime(.01,e),n.gain.linearRampToValueAtTime(.28,e+.12),n.gain.exponentialRampToValueAtTime(.001,e+.95),t.connect(i),i.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+1)}playConvergenceChord(){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(160,e),t.frequency.exponentialRampToValueAtTime(36,e+1.2),n.gain.setValueAtTime(.4,e),n.gain.exponentialRampToValueAtTime(.001,e+2.2),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+2.3),[261.63,293.66,329.63,369.99,392,440].forEach((r,a)=>{const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(r,e+a*.04),l.gain.setValueAtTime(.001,e+a*.04),l.gain.linearRampToValueAtTime(.1,e+.25+a*.04),l.gain.exponentialRampToValueAtTime(1e-4,e+3.2),o.connect(l),l.connect(this.masterGain),o.start(e+a*.04),o.stop(e+3.4)})}playClick(){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(1200,e),t.frequency.exponentialRampToValueAtTime(400,e+.03),n.gain.setValueAtTime(.07,e),n.gain.exponentialRampToValueAtTime(.001,e+.035),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.04)}playChime(e=440,t=.4){if(!(!this.ctx||this.isMuted))try{this.ctx.state==="suspended"&&this.ctx.resume();const n=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(e,n),r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.16,n+.02),r.gain.exponentialRampToValueAtTime(1e-4,n+t),i.connect(r),r.connect(this.masterGain),i.start(n),i.stop(n+t+.05)}catch{}}}const He=new iy;function sy(){const s=document.getElementById("modal-register"),e=document.getElementById("modal-success"),t=document.getElementById("btn-close-register"),n=document.getElementById("btn-close-success"),i=document.getElementById("btn-nav-register"),r=document.getElementById("btn-wield-stone"),a=document.getElementById("form-registration"),o=document.getElementById("reg-domain-badge"),l=document.querySelectorAll(".domain-radio-card"),c=document.querySelectorAll('input[name="teamSize"]'),h=document.getElementById("member-4-card"),d=h?h.querySelectorAll("input"):[],u=document.getElementById("qr-img"),f=document.getElementById("qr-amount-text"),_=document.getElementById("total-fee-display"),g=document.getElementById("reg-screenshot"),p=document.getElementById("ocr-banner"),m=document.getElementById("ocr-body"),v=document.getElementById("ocr-icon"),x=document.getElementById("ocr-title"),y=document.getElementById("reg-utr"),b=document.getElementById("reg-pay-phone"),S=document.getElementById("utr-check-badge"),E=document.getElementById("reg-error-msg"),P=document.getElementById("btn-submit-registration"),M=document.getElementById("reg-spinner");let T={member3:"/3mem.png",member4:"/4mem.png"};async function N(){try{const I=await fetch("/api/payment-qrs");if(I.ok){const B=await I.json();if(B.success&&B.paymentQrs){B.paymentQrs.member3&&(T.member3=B.paymentQrs.member3),B.paymentQrs.member4&&(T.member4=B.paymentQrs.member4);const $=document.querySelector('input[name="teamSize"]:checked'),j=$?parseInt($.value,10):3;u&&(u.src=j===4?T.member4:T.member3)}}}catch{}}N();let k=!1,q=null,A=!1,F=null,O=!1;function G(I){if(!I||typeof I!="string")return!0;const B=I.trim();return/^(\d)\1+$/.test(B)?!0:["123456789012","12345678901","012345678901","987654321098","112233445566","998877665544","123456123456"].includes(B)}function W(I,B=.4){try{He&&typeof He.playChime=="function"&&He.playChime(I,B)}catch{}}function z(I="mind"){if(!s)return;N(),s.classList.add("is-open"),s.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden";const B=document.querySelector(`input[name="domain"][value="${I}"]`);B&&(B.checked=!0,ne(I));const $=document.querySelector('input[name="teamSize"]:checked'),j=$?parseInt($.value,10):3;u&&(u.src=j===4?T.member4:T.member3);const fe=j*349;f&&(f.textContent=`PAY ₹${fe.toLocaleString("en-IN")}`),_&&(_.textContent=`₹${fe.toLocaleString("en-IN")}`),W(580)}function Q(){s&&(s.classList.remove("is-open"),s.setAttribute("aria-hidden","true"),document.body.classList.contains("timeline-unlocked")?document.body.style.overflowY="auto":document.body.style.overflow="hidden")}function ne(I){const B=Wt.find($=>$.id===I)||Wt[0];o&&(o.textContent=`DOMAIN: ${B.name} // ${B.domain}`,o.style.color=B.colorHex),l.forEach($=>{const j=$.getAttribute("data-domain")===I;$.classList.toggle("selected",j)})}r&&r.addEventListener("click",()=>{const I=r.getAttribute("data-stone-id")||"mind";He.playClick(),z(I)}),i&&i.addEventListener("click",()=>{He.playClick(),z("mind")}),t&&t.addEventListener("click",()=>{He.playClick(),Q()}),n&&n.addEventListener("click",()=>{He.playClick(),e==null||e.classList.remove("is-open"),e==null||e.setAttribute("aria-hidden","true")}),window.addEventListener("click",I=>{I.target===s&&Q(),I.target===e&&(e.classList.remove("is-open"),e.setAttribute("aria-hidden","true"))}),l.forEach(I=>{I.addEventListener("click",()=>{const B=I.getAttribute("data-domain"),$=I.querySelector('input[type="radio"]');$&&($.checked=!0),ne(B),He.playStoneChime(B)})}),c.forEach(I=>{I.addEventListener("change",()=>{He.playClick();const B=parseInt(I.value,10),$=B*349;u&&(u.src=B===4?T.member4:T.member3),f&&(f.textContent=`PAY ₹${$.toLocaleString("en-IN")}`),_&&(_.textContent=`₹${$.toLocaleString("en-IN")}`),B===4?(h&&(h.style.display="block"),d.forEach(j=>j.setAttribute("required","true"))):(h&&(h.style.display="none"),d.forEach(j=>{j.removeAttribute("required"),j.value=""}))})});async function ee(I){const B=(I||"").trim();if(!B){S&&(S.textContent="",S.className="utr-status-badge"),A=!1;return}try{(await(await fetch(`/api/verify-utr?utr=${encodeURIComponent(B)}`)).json()).exists?(A=!1,S&&(S.textContent="❌ Already Registered!",S.className="utr-status-badge error"),H(y,"This UTR has already been registered with another team.")):(A=!0,je(y),S&&(S.textContent="",S.className="utr-status-badge"))}catch($){console.warn("UTR verify network warning:",$),A=!0}}y&&y.addEventListener("input",I=>{clearTimeout(F),F=setTimeout(()=>{ee(I.target.value)},300)});async function X(){return window.Tesseract?window.Tesseract:new Promise((I,B)=>{const $=document.querySelector('script[src*="tesseract"]');if($){if(window.Tesseract)return I(window.Tesseract);$.addEventListener("load",()=>I(window.Tesseract)),$.addEventListener("error",()=>B(new Error("Failed to load OCR engine")));return}const j=document.createElement("script");j.src="/tesseract/tesseract.min.js",j.onload=()=>I(window.Tesseract),j.onerror=()=>B(new Error("Failed to load OCR engine")),document.head.appendChild(j)})}async function J(I){return new Promise((B,$)=>{try{const j=new Image,fe=URL.createObjectURL(I);j.onload=()=>{URL.revokeObjectURL(fe);const le=j.naturalWidth||j.width,de=j.naturalHeight||j.height,be=le>=300&&de>=200,Ne=le>=200&&de>=300;if(!be&&!Ne)return $(new Error(`IMAGE_TOO_SMALL:${le}x${de}`));const te=1200;let Le=le,Ie=de;(Le>te||Ie>te)&&(Le>Ie?(Ie=Math.round(Ie*te/Le),Le=te):(Le=Math.round(Le*te/Ie),Ie=te));const we=document.createElement("canvas");we.width=Le,we.height=Ie;const Me=we.getContext("2d");if(!Me)return B(I);Me.drawImage(j,0,0,Le,Ie),we.toBlob(pe=>{B(pe||I)},"image/jpeg",.92)},j.onerror=()=>B(I),j.src=fe}catch{B(I)}})}const oe=15*1024,xe=20*1024*1024,ve=["image/png","image/jpeg","image/jpg","image/webp"];g&&g.addEventListener("change",async I=>{var $;const B=I.target.files[0];if(B){if(k=!1,q=null,O=!0,B.size<oe){se(`❌ Image file too small (${(B.size/1024).toFixed(1)} KB). Logos, icons, and small images are not accepted. Please upload an authentic payment receipt screenshot.`),g.value="",O=!1,g.classList.add("is-invalid"),p&&(p.style.display="flex",p.className="ocr-detection-banner error",v&&(v.textContent="❌"),x&&(x.textContent="Image File Too Small"),m&&(m.innerHTML=`<strong>Invalid Image:</strong> The file is too small (${(B.size/1024).toFixed(1)} KB) to be a payment receipt. Logos, icons, and small graphics are rejected.`));return}if(B.size>xe){const j=(B.size/1048576).toFixed(1);se(`❌ File size (${j} MB) exceeds the 20MB limit. Please upload an image under 20MB.`),g.value="",O=!1,g.classList.add("is-invalid"),p&&(p.style.display="none");return}if(!ve.includes(B.type)){se(`❌ Invalid file format (${B.type||"unknown"}). Please upload a PNG, JPG, or WEBP receipt screenshot.`),g.value="",O=!1,g.classList.add("is-invalid"),p&&(p.style.display="none");return}p&&(p.style.display="flex",p.className="ocr-detection-banner scanning",v&&(v.textContent="🔍"),x&&(x.textContent="Analyzing Receipt Authenticity..."),m&&(m.innerHTML='<span class="ocr-scanning">Verifying payment indicators & reading 12-digit UPI UTR...</span>'));try{const j=await J(B),fe=await X();if(!fe)throw new Error("OCR not available");const le=await fe.createWorker("eng",1,{workerPath:"/tesseract/worker.min.js",corePath:"/tesseract/tesseract-core.wasm.js",langPath:"/tesseract",gzip:!0,logger:Je=>{if(Je.status==="recognizing text"&&Je.progress){const At=Math.round(Je.progress*100);m&&(m.innerHTML=`<span class="ocr-scanning">Scanning receipt contents: ${At}%...</span>`)}}}),de=new Promise((Je,At)=>setTimeout(()=>At(new Error("OCR Timeout")),45e3)),be=le.recognize(j),Ne=await Promise.race([be,de]);await le.terminate().catch(()=>{});const te=((($=Ne==null?void 0:Ne.data)==null?void 0:$.text)||"").trim(),Le=te.toLowerCase(),Ie=["google pay","gpay","g pay","g-pay","phonepe","phone pe","paytm","pay tm","bhim","cred","navi","amazon pay","amazonpay","whatsapp pay","mobikwik","freecharge","airtel payments","jupiter","fi money","fampay","slice","super.money","payzapp","bhim upi","omni card"],we=["state bank","sbi","hdfc","icici","axis bank","axis","kotak","canara","bank of baroda","punjab national","pnb","union bank","idfc","indusind","yes bank","npci","upi","imps","neft","rtgs","netbanking","central bank","bank of india","indian bank","uco bank","bank of maharashtra"],Me=["payment successful","transaction successful","paid successfully","transfer successful","payment completed","paid to","payment to","payment of","money sent","sent to","debited from","credited to","bill payment","payment details","transaction details","banking name","funds transfer","completed","successful","transferred to","transferred","sent successfully","received by","remittance"],pe=["upi ref","upi transaction id","upi transaction","google transaction id","phonepe transaction id","paytm order id","wallet txn id","ref no","reference no","transaction id","txn id","rrn","utr","order id","utr no","ref number","reference id","transfer details"],L=["₹","inr","rs.","rs ","rupees","rs:"],re=["@upi","@okhdfcbank","@okaxis","@oksbi","@okicici","@ybl","@ibl","@axl","@paytm","@apl","@ikwik","@barodampay","@idbi","@federal","@kotak"],Se=[{type:"Code & Development Screen",keywords:["github.com","stackoverflow","localhost","syntax error","uncaught error","traceback","stack trace","console.log","npm install","terminal","docker","vscode","exception in thread","trying to access array offset","undefined index","fatal error"]},{type:"Academic Portal / Exam Document",keywords:["nptel","candidate_login","noc candidate","hall ticket","admit card","marksheet","semester","roll number","registration number:","grade card","question paper","curriculum vitae","resume","provisional certificate","login/index.php"]},{type:"Logo or Graphic Illustration",keywords:["stock vector","getty images","shutterstock","freepik","watermark","clipart","wallpaper","vector illustration","graphic design","behance","dribbble","brand identity","logo design"]},{type:"Social Media / Entertainment App",keywords:["instagram","facebook","snapchat","tiktok","netflix","spotify","youtube","reels","retweet"]},{type:"E-commerce Shopping / Travel Ticket",keywords:["add to cart","shopping cart","buy now","item details","boarding pass","flight booking","train ticket","pnr status","irctc"]}];let he=null;const ie=te.match(/(?:utr|upi\s*ref(?:erence)?(?:\s*no)?|rrn|txn\s*(?:id|no)?|transaction\s*(?:id|ref|no)?)[\s:.-]*([0-9\s-]{12,18})\b/i);if(ie&&ie[1]){const Je=ie[1].replace(/[\s-]/g,"");Je.length===12&&!G(Je)&&(he=Je)}if(!he){const Je=te.match(/\b([0-9]{4}[\s-][0-9]{4}[\s-][0-9]{4})\b/);if(Je&&Je[1]){const At=Je[1].replace(/[\s-]/g,"");At.length===12&&!G(At)&&(he=At)}}he||(he=(te.match(/\b([0-9]{12})\b/g)||[]).find(At=>!G(At))||null);const U=te.match(/(?:phone|mobile|mob|contact|ph|payer\s*phone|remitter\s*mobile)[\s:.-]*(?:\+91[\s-]?)?([6-9][0-9]{9})\b/i);U&&U[1]&&b&&!b.value&&(b.value=U[1]);const ae=Ie.filter(Je=>Le.includes(Je)),ce=we.filter(Je=>Le.includes(Je)),ge=Me.filter(Je=>Le.includes(Je)),Ae=pe.filter(Je=>Le.includes(Je)),qe=L.filter(Je=>Le.includes(Je)),Ye=re.filter(Je=>Le.includes(Je));let nt=ae.length*2+ce.length*1+ge.length*2+Ae.length*2+qe.length*1+Ye.length*2;he&&(nt+=3);let st=null;for(const Je of Se){const At=Je.keywords.find(zn=>Le.includes(zn));if(At){st={category:Je.type,keyword:At};break}}let We=!0,it="";const Lt=!!(he&&!G(he)),ni=ge.length>0,Ki=ae.length>0||ce.length>0||Ae.length>0;if(te.length<15?(We=!1,it="No payment text found. Camera photos, logos, and plain graphics without transaction details are not allowed"):st&&nt<6?(We=!1,it=`Image identified as a ${st.category} (matched '${st.keyword}')`):Lt&&(ni||Ki||nt>=3)?We=!0:!Lt&&!ni?(We=!1,it="Missing payment action or transaction status (e.g. Paid to, Successful, Debited). Logos and normal photos are not accepted"):!Lt&&nt<4&&(We=!1,it="Image does not contain sufficient payment markers. Only authentic Google Pay, PhonePe, Paytm, or bank receipts are accepted"),!We){k=!1,q=null,O=!1,g.value="",g.classList.add("is-invalid"),p&&(p.className="ocr-detection-banner error",v&&(v.textContent="❌"),x&&(x.textContent="Receipt Verification FAILED"),m&&(m.innerHTML=`<strong>Invalid Receipt:</strong> ${it}. Please upload an authentic screenshot of your payment receipt.`)),W(220),se(`❌ Verification Failed: ${it}.`);return}k=!0,q=he,O=!1,g.classList.remove("is-invalid"),p&&(p.className="ocr-detection-banner success",v&&(v.textContent="✅"),x&&(x.textContent="Authentic Receipt Verified"),m&&(m.innerHTML="Genuine payment receipt verified. Please enter your <strong>12-digit bank UTR number</strong> below.")),y&&y.value.trim()?ee(y.value):S&&(S.textContent="",S.className="utr-status-badge"),W(720);return}catch(j){console.error("OCR processing error / rejected:",j),k=!1,q=null,O=!1,g.value="",g.classList.add("is-invalid");let fe="Could not verify image as an authentic payment receipt.";j.message&&j.message.startsWith("IMAGE_TOO_SMALL")?fe="Image dimensions are too small to be a payment receipt screenshot. Logos, icons, and small images are not accepted.":j.message&&j.message.includes("Timeout")&&(fe="OCR scan timed out. Please upload a clearer payment screenshot."),p&&(p.className="ocr-detection-banner error",v&&(v.textContent="❌"),x&&(x.textContent="Receipt Verification Rejected"),m&&(m.innerHTML=`<strong>Verification Failed:</strong> ${fe} Please upload an authentic Google Pay, PhonePe, or Paytm receipt.`)),W(220),se(`❌ ${fe}`)}}});const De=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;function Re(I){if(!I)return"";let B=I.replace(/\D/g,"");return B.length===12&&B.startsWith("91")?B=B.slice(2):B.length===11&&B.startsWith("0")&&(B=B.slice(1)),B}function ye(I){return typeof I=="string"&&De.test(I.trim())}function ze(I){const B=Re(I);return B.length>=10&&B.length<=14}function H(I,B){if(!I)return;I.classList.add("is-invalid");let $=I.parentElement,j=$.querySelector(".field-error-hint");j||(j=document.createElement("span"),j.className="field-error-hint",$.appendChild(j)),j.textContent=B}function je(I){if(!I)return;I.classList.remove("is-invalid");const B=I.parentElement.querySelector(".field-error-hint");B&&B.remove()}async function Ee(I,B,$,j){if(B)try{const fe=I==="email"?`email=${encodeURIComponent(B.trim().toLowerCase())}`:`phone=${encodeURIComponent(B)}`,de=await(await fetch(`/api/verify-participant?${fe}`)).json();de.exists&&(H($,`❌ Already registered in team '${de.teamName}' (${de.teamId})`),W(220))}catch{}}[{id:"reg-leader-email",type:"email",role:"Team Leader"},{id:"reg-leader-phone",type:"phone",role:"Team Leader"},{id:"reg-m2-email",type:"email",role:"Member 02"},{id:"reg-m2-phone",type:"phone",role:"Member 02"},{id:"reg-m3-email",type:"email",role:"Member 03"},{id:"reg-m3-phone",type:"phone",role:"Member 03"},{id:"reg-m4-email",type:"email",role:"Member 04"},{id:"reg-m4-phone",type:"phone",role:"Member 04"}].forEach(I=>{const B=document.getElementById(I.id);B&&(B.addEventListener("input",()=>{je(B)}),B.addEventListener("blur",()=>{const $=B.value.trim();if($){if(I.type==="email"){if(!ye($)){H(B,"Invalid email address (e.g. name@domain.com)");return}Ee("email",$,B,I.role)}else if(I.type==="phone"){if(!ze($)){H(B,"Enter a valid 10-digit mobile number");return}Ee("phone",$,B,I.role)}}}))}),a&&a.addEventListener("submit",async I=>{var Ae,qe,Ye,nt,st,We,it,Lt,ni,Ki,Je,At,zn,Vs,Hs,Er,br,Tr,C,V,K,Z,Y,me,Ce,Fe,Oe,Xe,Ge,Ve,ut,Nt,vt;I.preventDefault(),E&&(E.style.display="none"),document.querySelectorAll(".form-input.is-invalid").forEach(je);const B=(Ae=document.getElementById("reg-team-name"))==null?void 0:Ae.value.trim(),$=(qe=document.getElementById("reg-college"))==null?void 0:qe.value.trim(),j=((Ye=document.querySelector('input[name="domain"]:checked'))==null?void 0:Ye.value)||"mind",fe=((st=(nt=document.getElementById("reg-tech-stack"))==null?void 0:nt.value)==null?void 0:st.trim())||"",le=((We=document.querySelector('input[name="teamSize"]:checked'))==null?void 0:We.value)||"3",de=(it=document.getElementById("reg-leader-name"))==null?void 0:it.value.trim(),be=(Lt=document.getElementById("reg-leader-phone"))==null?void 0:Lt.value.trim(),Ne=(ni=document.getElementById("reg-leader-email"))==null?void 0:ni.value.trim(),te=(Ki=document.getElementById("reg-team-password"))==null?void 0:Ki.value,Le=y==null?void 0:y.value.trim(),Ie=(b==null?void 0:b.value.trim())||be,we=g==null?void 0:g.files[0];if(!B){se("Please enter your Squad / Team Name."),(Je=document.getElementById("reg-team-name"))==null||Je.focus();return}if(!$){se("Please enter your College or Institution name."),(At=document.getElementById("reg-college"))==null||At.focus();return}if(!de){se("Please enter Leader Full Name."),(zn=document.getElementById("reg-leader-name"))==null||zn.focus();return}if(!ye(Ne)){se("Please enter a valid Leader Email address (e.g. name@domain.com).");const _e=document.getElementById("reg-leader-email");H(_e,"Invalid email format"),_e==null||_e.focus();return}if(!ze(be)){se("Please enter a valid 10-digit Leader Mobile Number.");const _e=document.getElementById("reg-leader-phone");H(_e,"Enter a valid 10-digit number"),_e==null||_e.focus();return}if(!te||te.length<6){se("Team Password must be at least 6 characters (used for Leader Portal login)."),(Vs=document.getElementById("reg-team-password"))==null||Vs.focus();return}const Me=(Hs=document.getElementById("reg-m2-name"))==null?void 0:Hs.value.trim(),pe=(Er=document.getElementById("reg-m2-email"))==null?void 0:Er.value.trim(),L=(br=document.getElementById("reg-m2-phone"))==null?void 0:br.value.trim();if(!Me){se("Member 02 Full Name is required."),(Tr=document.getElementById("reg-m2-name"))==null||Tr.focus();return}if(!ye(pe)){se("Member 02 has an invalid email format.");const _e=document.getElementById("reg-m2-email");H(_e,"Invalid email format"),_e==null||_e.focus();return}if(!ze(L)){se("Member 02 requires a valid 10-digit phone number.");const _e=document.getElementById("reg-m2-phone");H(_e,"Enter a valid 10-digit number"),_e==null||_e.focus();return}const re=(C=document.getElementById("reg-m3-name"))==null?void 0:C.value.trim(),Se=(V=document.getElementById("reg-m3-email"))==null?void 0:V.value.trim(),he=(K=document.getElementById("reg-m3-phone"))==null?void 0:K.value.trim();if(!re){se("Member 03 Full Name is required."),(Z=document.getElementById("reg-m3-name"))==null||Z.focus();return}if(!ye(Se)){se("Member 03 has an invalid email format.");const _e=document.getElementById("reg-m3-email");H(_e,"Invalid email format"),_e==null||_e.focus();return}if(!ze(he)){se("Member 03 requires a valid 10-digit phone number.");const _e=document.getElementById("reg-m3-phone");H(_e,"Enter a valid 10-digit number"),_e==null||_e.focus();return}const ie=[{name:Me,email:pe,phone:L},{name:re,email:Se,phone:he}];if(le==="4"){const _e=(Y=document.getElementById("reg-m4-name"))==null?void 0:Y.value.trim(),Qe=(me=document.getElementById("reg-m4-email"))==null?void 0:me.value.trim(),Be=(Ce=document.getElementById("reg-m4-phone"))==null?void 0:Ce.value.trim();if(!_e){se("Member 04 Full Name is required for 4-member squads."),(Fe=document.getElementById("reg-m4-name"))==null||Fe.focus();return}if(!ye(Qe)){se("Member 04 has an invalid email format.");const Ft=document.getElementById("reg-m4-email");H(Ft,"Invalid email format"),Ft==null||Ft.focus();return}if(!ze(Be)){se("Member 04 requires a valid 10-digit phone number.");const Ft=document.getElementById("reg-m4-phone");H(Ft,"Enter a valid 10-digit number"),Ft==null||Ft.focus();return}ie.push({name:_e,email:Qe,phone:Be})}const U=[{role:"Team Leader",email:Ne.toLowerCase(),phone:Re(be),el:document.getElementById("reg-leader-email"),phoneEl:document.getElementById("reg-leader-phone")},{role:"Member 02",email:pe.toLowerCase(),phone:Re(L),el:document.getElementById("reg-m2-email"),phoneEl:document.getElementById("reg-m2-phone")},{role:"Member 03",email:Se.toLowerCase(),phone:Re(he),el:document.getElementById("reg-m3-email"),phoneEl:document.getElementById("reg-m3-phone")}];le==="4"&&U.push({role:"Member 04",email:ie[2].email.toLowerCase(),phone:Re(ie[2].phone),el:document.getElementById("reg-m4-email"),phoneEl:document.getElementById("reg-m4-phone")});const ae=new Map;for(const _e of U){if(ae.has(_e.email)){const Qe=ae.get(_e.email),Be=`Duplicate email '${_e.email}' in squad (${Qe} and ${_e.role}). Every member must have a unique email.`;se(Be),H(_e.el,"Duplicate email in squad"),(Oe=_e.el)==null||Oe.focus();return}ae.set(_e.email,_e.role)}const ce=new Map;for(const _e of U){if(ce.has(_e.phone)){const Be=`Duplicate mobile number in squad (${ce.get(_e.phone)} and ${_e.role}). Every member must have their own unique phone number.`;se(Be),H(_e.phoneEl,"Duplicate phone in squad"),(Xe=_e.phoneEl)==null||Xe.focus();return}ce.set(_e.phone,_e.role)}if(O){se("⏳ AI OCR is currently analyzing your receipt screenshot. Please wait a moment...");return}if(!we){se("Please upload your payment confirmation screenshot."),(Ge=document.getElementById("reg-screenshot"))==null||Ge.focus();return}if(we.size<oe){se(`Image file too small (${(we.size/1024).toFixed(1)} KB). Logos, icons, and small images are not accepted. Please upload an authentic receipt screenshot.`),(Ve=document.getElementById("reg-screenshot"))==null||Ve.focus();return}if(we.size>xe){const _e=(we.size/1048576).toFixed(1);se(`Payment screenshot file size (${_e} MB) exceeds the 20MB limit. Please upload an image under 20MB.`),(ut=document.getElementById("reg-screenshot"))==null||ut.focus();return}if(!k){se("❌ Valid Payment Receipt Required: The uploaded image was not verified as an authentic payment receipt. Logos, icons, and non-payment photos are not allowed. Please upload an authentic receipt from Google Pay, PhonePe, Paytm, or netbanking."),(Nt=document.getElementById("reg-screenshot"))==null||Nt.focus();return}if(!Le){se("Please enter your payment bank UTR / transaction reference number."),(vt=document.getElementById("reg-utr"))==null||vt.focus();return}Le.trim();const ge=new FormData;ge.append("teamName",B),ge.append("college",$),ge.append("preferredDomain",j),ge.append("techStack",fe),ge.append("teamSize",le),ge.append("teamPassword",te),ge.append("leaderName",de),ge.append("leaderPhone",be),ge.append("leaderEmail",Ne),ge.append("paymentUtr",Le),ge.append("paymentPhone",Ie),ge.append("members",JSON.stringify(ie)),ge.append("paymentScreenshot",we),P&&(P.disabled=!0),M&&(M.style.display="inline-block");try{const _e=await fetch("/api/register",{method:"POST",body:ge}),Qe=await _e.json();if(!_e.ok||!Qe.success)throw new Error(Qe.error||"Registration failed. Please verify your details.");Q(),He.playConvergenceChord();const Be=document.getElementById("suc-team-id"),Ft=document.getElementById("suc-team-name"),ht=document.getElementById("suc-domain"),In=document.getElementById("suc-email"),Ws=document.getElementById("suc-amount");Be&&(Be.textContent=Qe.team.id),Ft&&(Ft.textContent=Qe.team.teamName),ht&&(ht.textContent=`${Qe.team.preferredDomain.toUpperCase()} STONE`),In&&(In.textContent=Qe.team.leaderEmail),Ws&&(Ws.textContent=`₹${Qe.team.amount.toLocaleString("en-IN")}`),e&&(e.classList.add("is-open"),e.setAttribute("aria-hidden","false")),a.reset(),k=!1,q=null,A=!1,O=!1,p&&(p.style.display="none"),u&&(u.src="/3mem.png"),f&&(f.textContent="PAY ₹1,047"),_&&(_.textContent="₹1,047"),h&&(h.style.display="none"),d.forEach(ii=>{ii.removeAttribute("required"),ii.value=""})}catch(_e){se(_e.message)}finally{P&&(P.disabled=!1),M&&(M.style.display="none")}});function se(I){E&&(E.textContent=I,E.style.display="block",W(220))}document.querySelectorAll(".faq-question").forEach(I=>{I.addEventListener("click",()=>{He.playClick(),I.parentElement.classList.toggle("active")})});const ke=document.getElementById("btn-portals"),R=document.getElementById("portals-menu");ke&&R&&(ke.addEventListener("click",I=>{I.stopPropagation(),R.classList.toggle("is-visible"),He.playClick()}),document.addEventListener("click",I=>{!ke.contains(I.target)&&!R.contains(I.target)&&R.classList.remove("is-visible")})),document.querySelectorAll(".hud-nav a").forEach(I=>{I.addEventListener("click",B=>{B.preventDefault(),He.playClick();const $=I.getAttribute("href").substring(1);if($==="showcase-section"){window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{document.body.classList.remove("timeline-unlocked")},400);return}const j=document.getElementById($);j&&(document.body.classList.contains("timeline-unlocked")||document.body.classList.add("timeline-unlocked"),setTimeout(()=>{j.scrollIntoView({behavior:"smooth"})},60))})})}const ry="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",$h=8,jh=22,Tn=(s,e,t,n)=>s+(e-s)*(1-Math.exp(-t/n)),ay=s=>{let e=String(s||"").replace("#","");e.length===3&&(e=e.replace(/./g,n=>n+n));const t=parseInt(e.slice(0,6),16);return Number.isNaN(t)?[255,255,255]:[t>>16&255,t>>8&255,t&255]},Xn=(s,e)=>{const[t,n,i]=ay(s);return`rgba(${t}, ${n}, ${i}, ${e})`},_s=(...s)=>{let e=2166136261;for(const t of s)e=Math.imul(e^(t|0),16777619),e^=e>>>13,e=Math.imul(e,1540483477),e^=e>>>15;return(e>>>0)/4294967296},Kh=s=>s>0?`+${s}`:s<0?`−${-s}`:"0";class oy{constructor(e,t={}){si(this,"tick",e=>{this.raf=0;const t=this.settings;if(!t)return;const n=Math.min(.05,Math.max(.001,(e-this.last)/1e3));this.last=e;const i=this.ensureLayout(t),r=t.sweep&&!this.reducedMotion&&!this.pointer.inside&&this.dragging<0;r&&(this.clock+=n*t.speed),this.pulse+=n;let a=this.pointer.x,o=this.pointer.y;r&&(a=i.left+(i.right-i.left)*(.5-.5*Math.cos(this.clock*.45)),o=i.top+(i.bottom-i.top)*(.45+.1*Math.sin(this.clock*.8)));const l=this.pointer.inside||r||this.dragging>=0;if(l&&!this.placed&&(this.lens.x=a,this.lens.y=o),l){const u=this.pointer.inside?.05:.22;this.lens.x=Tn(this.lens.x,a,n,u),this.lens.y=Tn(this.lens.y,o,n,u)}this.placed=l,this.presence=Tn(this.presence,t.reveal==="area"&&l&&this.dragging<0?1:0,n,.16);let c=!1;this.glyphs.forEach((u,f)=>{if(f===this.dragging){u.offset.x=Tn(u.offset.x,this.pointer.x-this.grab.x,n,.03),u.offset.y=Tn(u.offset.y,this.pointer.y-this.grab.y,n,.03),u.velocity.x=0,u.velocity.y=0,c=!0;return}const{offset:_,velocity:g}=u;if(Math.abs(_.x)<.05&&Math.abs(_.y)<.05&&Math.hypot(g.x,g.y)<.5){_.x=0,_.y=0,g.x=0,g.y=0;return}g.x+=(-320*_.x-jh*g.x)*n,g.y+=(-320*_.y-jh*g.y)*n,_.x+=g.x*n,_.y+=g.y*n,c=!0});const h=this.dragging>=0?this.dragging:l?this.glyphAt(this.lens.x,this.lens.y):-1;if(h>=0&&t.selection){const u=this.glyphs[h],f=u.box.x1+u.offset.x-6,_=u.box.y1+u.offset.y-6,g=u.box.x2+u.offset.x+6,p=u.box.y2+u.offset.y+6;(this.frame.index<0||this.frame.alpha<.02)&&(this.frame.x1=f,this.frame.y1=_,this.frame.x2=g,this.frame.y2=p);const m=h===this.dragging?.02:.08;this.frame.x1=Tn(this.frame.x1,f,n,m),this.frame.y1=Tn(this.frame.y1,_,n,m),this.frame.x2=Tn(this.frame.x2,g,n,m),this.frame.y2=Tn(this.frame.y2,p,n,m),this.frame.index=h}this.frame.alpha=Tn(this.frame.alpha,h>=0&&t.selection?1:0,n,.1),this.glyphs.forEach((u,f)=>{const _=t.reveal==="letter"&&f===h&&f!==this.dragging?1:0;u.outline=Tn(u.outline,_,n,.09),Math.abs(u.outline-_)>.002?c=!0:u.outline=_}),t.draggable&&(this.container.style.cursor=this.dragging>=0?"grabbing":h>=0&&this.pointer.inside?"grab":""),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.globalCompositeOperation="source-over",this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(const u of this.glyphs){const f=Math.hypot(u.offset.x,u.offset.y);f>1&&(this.ctx.globalAlpha=Math.min(1,f/24)*.55,this.blit(this.ctx,u.dashes,0,0,0,0),this.ctx.globalAlpha=1)}for(const u of this.glyphs)u.outline<.999&&(this.ctx.globalAlpha=1-u.outline,this.blit(this.ctx,u.fill,u.offset.x,u.offset.y,0,0)),u.outline>.001&&(this.ctx.globalAlpha=u.outline,this.blit(this.ctx,u.dashes,u.offset.x,u.offset.y,0,0)),this.ctx.globalAlpha=1;this.presence>.001&&this.drawReveal(t),this.drawFrame(t);const d=c||Math.abs(this.presence-(t.reveal==="area"&&l&&this.dragging<0?1:0))>.002||this.frame.alpha>.01&&this.frame.alpha<.99;(l||d)&&this.visible&&this.alive&&(this.raf=requestAnimationFrame(this.tick))});si(this,"wake",()=>{this.raf||!this.visible||!this.alive||(this.last=performance.now(),this.raf=requestAnimationFrame(this.tick))});si(this,"resize",()=>{this.width=Math.max(1,this.container.clientWidth),this.height=Math.max(1,this.container.clientHeight),this.dpr=Math.min(window.devicePixelRatio||1,2),this.canvas.width=Math.round(this.width*this.dpr),this.canvas.height=Math.round(this.height*this.dpr),this.layoutKey="",this.wake()});si(this,"onMove",e=>{this.locate(e),this.pointer.inside=!0,this.wake()});si(this,"onLeave",()=>{this.dragging>=0||(this.pointer.inside=!1,this.wake())});si(this,"onDown",e=>{var n,i;this.locate(e),this.pointer.inside=!0;const t=this.settings;if(t!=null&&t.draggable&&(e.pointerType!=="mouse"||e.button===0)){const r=this.glyphAt(this.pointer.x,this.pointer.y);if(r>=0){this.dragging=r,this.grab.x=this.pointer.x-this.glyphs[r].offset.x,this.grab.y=this.pointer.y-this.glyphs[r].offset.y;try{(i=(n=this.container).setPointerCapture)==null||i.call(n,e.pointerId)}catch{}}}this.wake()});si(this,"onUp",e=>{var t,n;if(this.dragging>=0){this.dragging=-1;try{(n=(t=this.container).hasPointerCapture)!=null&&n.call(t,e.pointerId)&&this.container.releasePointerCapture(e.pointerId)}catch{}const i=this.container.getBoundingClientRect();this.pointer.inside=e.clientX>=i.left&&e.clientX<=i.right&&e.clientY>=i.top&&e.clientY<=i.bottom}this.wake()});var n;if(!e)throw new Error("TechText requires a container element.");this.container=e,this.container.classList.add("tech-text"),this.settings={text:"React Bits",fontFamily:"",fontWeight:600,fontSize:150,letterSpacing:-.05,color:"#ffffff",accentColor:"#ffffff",reach:200,softness:.7,dashLength:4,dashGap:2,strokeWidth:1.5,lineStyle:"dashed",reveal:"letter",specks:15,selection:!0,labels:!0,draggable:!0,sweep:!0,speed:1,...t},this.canvas=document.createElement("canvas"),this.canvas.className="tech-text-canvas",this.container.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.scratch=document.createElement("canvas"),this.scratchCtx=this.scratch.getContext("2d"),this.reducedMotion=(n=window.matchMedia)==null?void 0:n.call(window,"(prefers-reduced-motion: reduce)").matches,this.width=1,this.height=1,this.dpr=1,this.raf=0,this.last=performance.now(),this.visible=!0,this.alive=!0,this.layoutKey="",this.requestedFont="",this.word=null,this.glyphs=[],this.presence=0,this.clock=0,this.pulse=0,this.placed=!1,this.dragging=-1,this.pointer={x:0,y:0,inside:!1},this.grab={x:0,y:0},this.lens={x:0,y:0},this.frame={x1:0,y1:0,x2:0,y2:0,alpha:0,index:-1},this.initEvents(),this.resize(),this.wake()}family(e){return e.fontFamily||getComputedStyle(this.container).fontFamily||"sans-serif"}fontFor(e,t){return`${e.fontWeight} ${t}px ${this.family(e)}`}setFont(e,t,n){e.font=this.fontFor(t,n),"letterSpacing"in e&&(e.letterSpacing=`${t.letterSpacing*n}px`),e.textAlign="left",e.textBaseline="alphabetic"}sprite(e,t,n,i){const r=Math.ceil(e.strokeWidth*2+4),a=n.box.x1-r,o=n.box.y1-r,l=n.box.x2-n.box.x1+r*2,c=n.box.y2-n.box.y1+r*2,h=document.createElement("canvas");h.width=Math.max(1,Math.ceil(l*this.dpr)),h.height=Math.max(1,Math.ceil(c*this.dpr));const d=h.getContext("2d");return d?(d.setTransform(this.dpr,0,0,this.dpr,-a*this.dpr,-o*this.dpr),this.setFont(d,e,t.size),i?(d.lineJoin="round",d.lineWidth=e.strokeWidth*2,d.lineCap="butt",d.strokeStyle=e.color,e.lineStyle!=="solid"&&d.setLineDash([Math.max(1,e.dashLength),Math.max(1,e.dashGap)]),d.strokeText(n.char,n.x,t.baseline),d.setLineDash([]),d.globalCompositeOperation="destination-out",d.fillStyle="#000000",d.fillText(n.char,n.x,t.baseline),d.globalCompositeOperation="source-over"):(d.fillStyle=e.color,d.fillText(n.char,n.x,t.baseline)),{image:h,left:a,top:o}):{image:h,left:a,top:o}}ensureLayout(e){const t=[e.text,this.family(e),e.fontWeight,e.fontSize,e.letterSpacing,e.color,e.dashLength,e.dashGap,e.strokeWidth,e.lineStyle,this.width,this.height,this.dpr].join("|");if(t===this.layoutKey&&this.word)return this.word;this.layoutKey=t;const n=this.fontFor(e,64);document.fonts&&n!==this.requestedFont&&(this.requestedFont=n,document.fonts.load(n,e.text).then(()=>this.refreshFonts(),()=>this.refreshFonts()));const i=this.scratchCtx;this.setFont(i,e,e.fontSize);let r=i.measureText(e.text);const a=8,o=Math.min(1,(this.width-a*2)/Math.max(r.actualBoundingBoxLeft+r.actualBoundingBoxRight,1),this.height*.9/Math.max(r.actualBoundingBoxAscent+r.actualBoundingBoxDescent,1)),l=e.fontSize*o;this.setFont(i,e,l),r=i.measureText(e.text),r.actualBoundingBoxLeft+r.actualBoundingBoxRight;const c=r.actualBoundingBoxAscent+r.actualBoundingBoxDescent,h=r.actualBoundingBoxLeft+a,d=(this.height-c)/2+r.actualBoundingBoxAscent,u={size:l,baseline:d,left:h-r.actualBoundingBoxLeft,right:h+r.actualBoundingBoxRight,top:d-r.actualBoundingBoxAscent,bottom:d+r.actualBoundingBoxDescent};this.word=u;const f=Array.from(e.text),_=this.glyphs;this.glyphs=[];let g="";return f.forEach((p,m)=>{g+=p;const v=i.measureText(p),x=h+i.measureText(g).width-v.width;if(!p.trim())return;const y={char:p,x,box:{x1:x-v.actualBoundingBoxLeft,y1:d-v.actualBoundingBoxAscent,x2:x+v.actualBoundingBoxRight,y2:d+v.actualBoundingBoxDescent}},b=_[this.glyphs.length];this.glyphs.push({...y,offset:(b==null?void 0:b.char)===p?b.offset:{x:0,y:0},velocity:{x:0,y:0},outline:0,index:m,fill:this.sprite(e,u,y,!1),dashes:this.sprite(e,u,y,!0)})}),this.dragging=-1,this.frame.index=-1,u}refreshFonts(){this.layoutKey="",this.wake()}glyphAt(e,t){if(!this.word||t<this.word.top-24||t>this.word.bottom+24)return-1;let n=-1,i=1/0;return this.glyphs.forEach((r,a)=>{const o=r.box.x1+r.offset.x,l=r.box.x2+r.offset.x,c=e<o?o-e:e>l?e-l:0;c<i&&(i=c,n=a)}),i<28?n:-1}falloff(e,t,n,i,r,a){const o=Math.min(1,Math.max(0,1-a)),l=e.createRadialGradient(t,n,0,t,n,i);if(l.addColorStop(0,`rgba(0, 0, 0, ${r})`),o>.995)return l.addColorStop(.995,`rgba(0, 0, 0, ${r})`),l.addColorStop(1,"rgba(0, 0, 0, 0)"),l;for(let c=0;c<=$h;c++){const h=c/$h,d=h*h*(3-2*h);l.addColorStop(o+(1-o)*h,`rgba(0, 0, 0, ${r*(1-d)})`)}return l}blit(e,t,n,i,r,a){e.drawImage(t.image,Math.round((t.left+n)*this.dpr-r),Math.round((t.top+i)*this.dpr-a))}drawReveal(e){const t=e.reach*this.dpr,n=this.lens.x*this.dpr,i=this.lens.y*this.dpr;this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle=this.falloff(this.ctx,n,i,t,this.presence,e.softness),this.ctx.fillRect(n-t,i-t,t*2,t*2),this.ctx.globalCompositeOperation="source-over";const r=Math.max(0,Math.floor(n-t)),a=Math.max(0,Math.floor(i-t)),o=Math.min(this.canvas.width,Math.ceil(n+t)),l=Math.min(this.canvas.height,Math.ceil(i+t));if(o<=r||l<=a)return;const c=o-r,h=l-a;(this.scratch.width<c||this.scratch.height<h)&&(this.scratch.width=Math.max(this.scratch.width,c),this.scratch.height=Math.max(this.scratch.height,h)),this.scratchCtx.setTransform(1,0,0,1,0,0),this.scratchCtx.globalCompositeOperation="source-over",this.scratchCtx.clearRect(0,0,c,h);for(const d of this.glyphs)this.blit(this.scratchCtx,d.dashes,d.offset.x,d.offset.y,r,a);this.scratchCtx.globalCompositeOperation="destination-in",this.scratchCtx.fillStyle=this.falloff(this.scratchCtx,n-r,i-a,t,1,e.softness),this.scratchCtx.fillRect(0,0,c,h),this.scratchCtx.globalCompositeOperation="source-over",this.ctx.globalAlpha=this.presence,this.ctx.drawImage(this.scratch,0,0,c,h,r,a,c,h),this.ctx.globalAlpha=1}crisp(e){return(Math.round(e*this.dpr)+.5)/this.dpr}perimeterPoint(e,t,n){let i=(e%(2*(t+n))+2*(t+n))%(2*(t+n));return i<t?[this.frame.x1+i,this.frame.y1,0,-1]:(i-=t,i<n?[this.frame.x2,this.frame.y1+i,1,0]:(i-=n,i<t?[this.frame.x2-i,this.frame.y2,0,1]:(i-=t,[this.frame.x1,this.frame.y2-i,-1,0])))}drawSpecks(e,t){const n=this.frame.x2-this.frame.x1,i=this.frame.y2-this.frame.y1;if(n<2||i<2)return;const r=2*(n+i),a=this.frame.index+1,o=3;for(let l=0;l<e.specks;l++){const c=.5+_s(a,l,11)*1.2,h=this.pulse/c+_s(a,l,17),d=Math.floor(h),u=h-d;if(u>.7)continue;const[f,_,g,p]=this.perimeterPoint(_s(a,l,d)*r,n,i),m=_s(a,l,d,2),v=m<.46?2:m<.7?3:m<.84?5:m<.94?8:11,x=v>=8,y=(x?9:4)+Math.floor(_s(a,l,d,1)*5)*o,b=this.frame.x1+Math.round((f+g*y-this.frame.x1)/o)*o,S=this.frame.y1+Math.round((_+p*y-this.frame.y1)/o)*o,E=_s(a,l,d,3),P=u<.06||u>.32&&u<.36?.35:1,M=t*(x?.3+.4*E:.3+.6*E)*P,T=Math.round(b-v/2),N=Math.round(S-v/2);E<.26||x&&E<.78?(this.ctx.strokeStyle=Xn(e.accentColor,M),this.ctx.strokeRect(T+.5,N+.5,v,v),x&&E>.5&&(this.ctx.fillStyle=Xn(e.accentColor,M),this.ctx.fillRect(Math.round(b)-1,Math.round(S)-1,2,2))):(this.ctx.fillStyle=Xn(e.accentColor,M),this.ctx.fillRect(T,N,v,v))}for(let l=0;l<2;l++){const c=(this.pulse*.42*e.speed+l*.5)*r;for(let h=0;h<4;h++){const[d,u]=this.perimeterPoint(c-h*6,n,i),f=h===0?3:2;this.ctx.fillStyle=Xn(e.accentColor,t*[.95,.55,.32,.16][h]),this.ctx.fillRect(Math.round(d-f/2),Math.round(u-f/2),f,f)}}}drawFrame(e){if(!(e!=null&&e.selection))return;const t=this.glyphs[this.frame.index];if(!t||this.frame.alpha<.01)return;const n=this.frame.alpha,i=this.crisp(this.frame.x1),r=this.crisp(this.frame.y1),a=this.crisp(this.frame.x2),o=this.crisp(this.frame.y2);this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0);const l=Math.hypot(t.offset.x,t.offset.y);if(l>1){const d=(t.box.x1+t.box.x2)/2,u=(t.box.y1+t.box.y2)/2;this.ctx.beginPath(),this.ctx.moveTo(d,u),this.ctx.lineTo(d+t.offset.x,u+t.offset.y),this.ctx.setLineDash([3,4]),this.ctx.lineWidth=1,this.ctx.strokeStyle=Xn(e.accentColor,.45*n),this.ctx.stroke(),this.ctx.setLineDash([]),this.ctx.beginPath(),this.ctx.rect(Math.round(d)-2,Math.round(u)-2,4,4),this.ctx.fillStyle=Xn(e.accentColor,.7*n),this.ctx.fill()}this.ctx.beginPath(),this.ctx.rect(i,r,a-i,o-r),this.ctx.lineWidth=1,this.ctx.strokeStyle=Xn(e.accentColor,.5*n),this.ctx.stroke(),this.ctx.beginPath();for(const[d,u]of[[i,r],[a,r],[a,o],[i,o]])this.ctx.rect(Math.round(d)-2,Math.round(u)-2,5,5);if(this.ctx.fillStyle=Xn(e.accentColor,.95*n),this.ctx.fill(),e.specks>0&&(this.ctx.lineWidth=1,this.drawSpecks(e,n)),!e.labels)return;this.ctx.font=ry,this.ctx.textAlign="left",this.ctx.textBaseline="bottom",this.ctx.fillStyle=Xn(e.accentColor,.62*n);const c=l>1?`${Kh(Math.round(t.offset.x))}, ${Kh(Math.round(-t.offset.y))}`:`${t.char}  ${Math.round(t.box.x2-t.box.x1)} × ${Math.round(t.box.y2-t.box.y1)}`,h=Math.max(9,Math.round(this.frame.y1)-4);this.ctx.fillText(c,Math.round(this.frame.x1),h)}locate(e){const t=this.container.getBoundingClientRect();this.pointer.x=e.clientX-t.left,this.pointer.y=e.clientY-t.top}initEvents(){this.container.addEventListener("pointermove",this.onMove,{passive:!0}),this.container.addEventListener("pointerenter",this.onMove,{passive:!0}),this.container.addEventListener("pointerdown",this.onDown,{passive:!0}),this.container.addEventListener("pointerup",this.onUp,{passive:!0}),this.container.addEventListener("pointercancel",this.onUp,{passive:!0}),this.container.addEventListener("pointerleave",this.onLeave,{passive:!0}),this.resizeObserver=new ResizeObserver(this.resize),this.resizeObserver.observe(this.container),this.intersectionObserver=new IntersectionObserver(([e])=>{this.visible=e.isIntersecting,this.wake()}),this.intersectionObserver.observe(this.container),document.fonts&&document.fonts.ready.then(()=>this.refreshFonts(),()=>this.refreshFonts())}update(e={}){this.settings={...this.settings,...e},this.layoutKey="",this.wake()}destroy(){var e,t;this.alive=!1,this.raf&&cancelAnimationFrame(this.raf),(e=this.resizeObserver)==null||e.disconnect(),(t=this.intersectionObserver)==null||t.disconnect(),this.container.removeEventListener("pointermove",this.onMove),this.container.removeEventListener("pointerenter",this.onMove),this.container.removeEventListener("pointerdown",this.onDown),this.container.removeEventListener("pointerup",this.onUp),this.container.removeEventListener("pointercancel",this.onUp),this.container.removeEventListener("pointerleave",this.onLeave),this.canvas.remove()}}const Zh={arrow:{3:{cells:[1,2,3,0,1,2,1,2,3],loop:7.2,scale:1}},dots:{3:{cells:[0,1,2,0,1,2,0,1,2],loop:3,scale:2.4}},ripple:{3:{cells:[2,1,2,1,0,1,2,1,2],loop:4.8,scale:1.5}},spiral:{3:{cells:[0,1,2,7,8,3,6,5,4],loop:9,scale:1.2,lit:.35}},orbit:{3:{cells:[0,1,2,7,null,3,6,5,4],loop:8,scale:1.2},4:{cells:[0,1,2,3,11,null,null,4,10,null,null,5,9,8,7,6],loop:6,scale:1.2,lit:.45}},snake:{3:{cells:[0,1,2,5,4,3,6,7,8],loop:9,scale:1,lit:.35},4:{cells:[0,1,2,3,7,6,5,4,8,9,10,11,15,14,13,12],loop:16,scale:1,lit:.25}},sweep:{4:{cells:[0,1,2,3,1,2,3,4,2,3,4,5,3,4,5,6],loop:5,scale:1,lit:.45}},spin:{4:{cells:[0,0,1,1,0,0,1,1,3,3,2,2,3,3,2,2],loop:4,scale:1.6,lit:.35}},rain:{4:{cells:[0,2,1,3,1,3,2,4,2,4,3,5,3,5,4,6],loop:4,scale:1.2,lit:.35}},pulse:{4:{cells:[2,1,1,2,1,0,0,1,1,0,0,1,2,1,1,2],loop:2.4,scale:2.5,lit:.45}}},ly={3:"orbit",4:"sweep"},cy={3:{done:[2,3,5,7],error:[0,2,4,6,8]},4:{done:[7,8,10,13],error:[0,3,5,6,9,10,12,15]}},hy=(s,e)=>{if(typeof s=="string"){const i=Zh[s];return i&&i[e]||Zh[ly[e]][e]}const t=Array.from({length:e*e},(i,r)=>s.cells[r]??null),n=Math.max(0,...t.filter(i=>i!=null));return{cells:t,loop:s.loop??n+4.2,scale:s.scale??1,lit:s.lit??.62}},uy=s=>s<600?`${(s/10).toFixed(1)}s`:`${Math.floor(s/600)}m ${(s%600/10).toFixed(1)}s`;function dy(s,e={}){const{label:t="Loading",doneLabel:n="Ready in",errorLabel:i="Failed after",pattern:r="orbit",grid:a=3,shape:o="round",color:l="#ffffff",doneColor:c="#22c55e",errorColor:h="#ef4444",cellSize:d=7,gap:u=3,fontSize:f=13,step:_=90,idleOpacity:g=.18,glow:p=!0,glowColor:m="rgba(255, 51, 102, 0.45)",showTimer:v=!0}=e,x=a===4?4:3,y=hy(r,x),b=cy[x],S=_*y.scale,E=Math.round(y.loop*S),P=document.createElement("span");P.setAttribute("role","status"),P.className="lattice-loader",P.setAttribute("data-status","working"),P.setAttribute("data-shape",o),p&&P.setAttribute("data-glow",""),P.style.setProperty("--ll-n",x),P.style.setProperty("--ll-cell",`${d}px`),P.style.setProperty("--ll-gap",`${u}px`),P.style.setProperty("--ll-font",`${f}px`),P.style.setProperty("--ll-color",l),P.style.setProperty("--ll-mark",c),P.style.setProperty("--ll-idle",g),P.style.setProperty("--ll-glow",m||l),P.style.setProperty("--ll-mark-glow",m||c),P.style.setProperty("--ll-cycle",`${E}ms`);const M=document.createElement("span");M.className="lattice-loader__grid",M.setAttribute("aria-hidden","true");const T=document.createElement("span");T.className="lattice-loader__layer lattice-loader__run",y.cells.forEach(ee=>{const X=document.createElement("span");X.className="lattice-loader__cell",ee==null?X.setAttribute("data-hole",""):(y.lit&&y.lit!==.62&&X.setAttribute("data-lit",Math.round(y.lit*100)),X.style.animationDelay=`${Math.round(ee*S)}ms`),T.appendChild(X)});const N=document.createElement("span");N.className="lattice-loader__layer lattice-loader__mark",y.cells.forEach((ee,X)=>{const J=document.createElement("span");J.className="lattice-loader__cell",b.done.includes(X)&&J.setAttribute("data-on",""),N.appendChild(J)}),M.appendChild(T),M.appendChild(N),P.appendChild(M);const k=document.createElement("span");k.className="lattice-loader__label",k.setAttribute("aria-hidden","true");const q=document.createElement("span");q.className="lattice-loader__text",q.setAttribute("data-active",""),q.textContent=t;const A=document.createElement("span");A.className="lattice-loader__text",A.textContent=n;const F=document.createElement("span");F.className="lattice-loader__text",F.textContent=i,k.appendChild(q),k.appendChild(A),k.appendChild(F),P.appendChild(k);let O=null;v&&(O=document.createElement("span"),O.className="lattice-loader__timer",O.setAttribute("aria-hidden","true"),O.textContent="0.0s",P.appendChild(O)),s.innerHTML="",s.appendChild(P);let G=null;const W=performance.now();let z=0;return G=setInterval(()=>{z=Math.floor((performance.now()-W)/100),O&&(O.textContent=uy(z))},100),{root:P,setStatus:(ee="done")=>{G&&(clearInterval(G),G=null),P.setAttribute("data-status",ee),P.style.setProperty("--ll-mark",ee==="error"?h:c),N.querySelectorAll(".lattice-loader__cell").forEach((J,oe)=>{(ee==="error"?b.error:b.done).includes(oe)?J.setAttribute("data-on",""):J.removeAttribute("data-on")}),q.removeAttribute("data-active"),A.removeAttribute("data-active"),F.removeAttribute("data-active"),ee==="done"?A.setAttribute("data-active",""):ee==="error"?F.setAttribute("data-active",""):q.setAttribute("data-active","")},destroy:()=>{G&&(clearInterval(G),G=null)}}}function fy(s={}){const{onComplete:e}=s,t=document.getElementById("cinematic-preloader"),n=document.getElementById("cinematic-video"),i=document.getElementById("btn-skip-intro"),r=document.getElementById("btn-mobile-enter");if(!t)return typeof e=="function"&&e(),{dismiss:()=>{}};let a=!1,o=!1,l=null;const c=window.innerWidth<=768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),h=(u=!1)=>{a||(a=!0,l&&(clearTimeout(l),l=null),t.classList.add("fade-out"),typeof e=="function"&&e(),u&&He.playClick(),setTimeout(()=>{if(t.style.display="none",n)try{n.pause()}catch{}},800))};if(window.addEventListener("keydown",u=>{!a&&t.style.display!=="none"&&(u.key==="Escape"||u.code==="Space")&&(u.preventDefault(),h(!0))}),i&&i.addEventListener("click",u=>{u.stopPropagation(),h(!0)}),r&&r.addEventListener("click",u=>{u.stopPropagation(),h(!0)}),c){if(n)try{n.pause(),n.currentTime=0}catch{}t.style.display="flex";const u=document.getElementById("mobile-lattice-target");let f=null;u&&(f=dy(u,{label:"Thinking",doneLabel:"Done in",errorLabel:"Failed after",pattern:"orbit",grid:3,shape:"round",color:"#ffffff",doneColor:"#22c55e",errorColor:"#ef4444",cellSize:6,gap:2,fontSize:14,step:90,idleOpacity:.15,glow:!1,glowColor:"",showTimer:!0})),setTimeout(()=>{f&&!a&&f.setStatus("done")},1400),l=setTimeout(()=>{f&&f.destroy(),h(!1)},1850);const _=document.getElementById("mobile-normal-loader");return _&&_.addEventListener("click",()=>{f&&f.destroy(),h(!0)},{once:!0}),{dismiss:h}}if(!n)return h(!1),{dismiss:h};n.addEventListener("timeupdate",()=>{!n.duration||a||n.currentTime>=13.2&&!o&&(o=!0,He.init(),He.resume(),He.playConvergenceChord())}),n.addEventListener("ended",()=>{h(!1)}),n.muted=!1,n.volume=1,He.isMuted=!1;const d=()=>{const u=n.play();u!==void 0&&u.catch(f=>{console.warn("Desktop unmuted autoplay blocked by policy; setting up interaction listener:",f),n.muted=!0,n.play().catch(()=>{});const _=()=>{n.muted=!1,n.volume=1,He.init(),He.resume(),window.removeEventListener("pointerdown",_),window.removeEventListener("keydown",_),window.removeEventListener("touchstart",_),window.removeEventListener("click",_)};window.addEventListener("pointerdown",_,{once:!0,passive:!0}),window.addEventListener("keydown",_,{once:!0}),window.addEventListener("touchstart",_,{once:!0,passive:!0}),window.addEventListener("click",_,{once:!0})})};return t.style.display="flex",d(),l=setTimeout(()=>{!a&&n.currentTime===0&&(console.warn("Desktop video loader timeout reached; proceeding to showcase."),h(!1))},4200),{dismiss:h}}function ar(s){let e=s[0],t=s[1],n=s[2];return Math.sqrt(e*e+t*t+n*n)}function ol(s,e){return s[0]=e[0],s[1]=e[1],s[2]=e[2],s}function py(s,e,t,n){return s[0]=e,s[1]=t,s[2]=n,s}function Qh(s,e,t){return s[0]=e[0]+t[0],s[1]=e[1]+t[1],s[2]=e[2]+t[2],s}function Jh(s,e,t){return s[0]=e[0]-t[0],s[1]=e[1]-t[1],s[2]=e[2]-t[2],s}function my(s,e,t){return s[0]=e[0]*t[0],s[1]=e[1]*t[1],s[2]=e[2]*t[2],s}function gy(s,e,t){return s[0]=e[0]/t[0],s[1]=e[1]/t[1],s[2]=e[2]/t[2],s}function Lo(s,e,t){return s[0]=e[0]*t,s[1]=e[1]*t,s[2]=e[2]*t,s}function _y(s,e){let t=e[0]-s[0],n=e[1]-s[1],i=e[2]-s[2];return Math.sqrt(t*t+n*n+i*i)}function xy(s,e){let t=e[0]-s[0],n=e[1]-s[1],i=e[2]-s[2];return t*t+n*n+i*i}function eu(s){let e=s[0],t=s[1],n=s[2];return e*e+t*t+n*n}function vy(s,e){return s[0]=-e[0],s[1]=-e[1],s[2]=-e[2],s}function yy(s,e){return s[0]=1/e[0],s[1]=1/e[1],s[2]=1/e[2],s}function ll(s,e){let t=e[0],n=e[1],i=e[2],r=t*t+n*n+i*i;return r>0&&(r=1/Math.sqrt(r)),s[0]=e[0]*r,s[1]=e[1]*r,s[2]=e[2]*r,s}function Kd(s,e){return s[0]*e[0]+s[1]*e[1]+s[2]*e[2]}function tu(s,e,t){let n=e[0],i=e[1],r=e[2],a=t[0],o=t[1],l=t[2];return s[0]=i*l-r*o,s[1]=r*a-n*l,s[2]=n*o-i*a,s}function My(s,e,t,n){let i=e[0],r=e[1],a=e[2];return s[0]=i+n*(t[0]-i),s[1]=r+n*(t[1]-r),s[2]=a+n*(t[2]-a),s}function Sy(s,e,t,n,i){const r=Math.exp(-n*i);let a=e[0],o=e[1],l=e[2];return s[0]=t[0]+(a-t[0])*r,s[1]=t[1]+(o-t[1])*r,s[2]=t[2]+(l-t[2])*r,s}function Ey(s,e,t){let n=e[0],i=e[1],r=e[2],a=t[3]*n+t[7]*i+t[11]*r+t[15];return a=a||1,s[0]=(t[0]*n+t[4]*i+t[8]*r+t[12])/a,s[1]=(t[1]*n+t[5]*i+t[9]*r+t[13])/a,s[2]=(t[2]*n+t[6]*i+t[10]*r+t[14])/a,s}function by(s,e,t){let n=e[0],i=e[1],r=e[2],a=t[3]*n+t[7]*i+t[11]*r+t[15];return a=a||1,s[0]=(t[0]*n+t[4]*i+t[8]*r)/a,s[1]=(t[1]*n+t[5]*i+t[9]*r)/a,s[2]=(t[2]*n+t[6]*i+t[10]*r)/a,s}function Ty(s,e,t){let n=e[0],i=e[1],r=e[2];return s[0]=n*t[0]+i*t[3]+r*t[6],s[1]=n*t[1]+i*t[4]+r*t[7],s[2]=n*t[2]+i*t[5]+r*t[8],s}function wy(s,e,t){let n=e[0],i=e[1],r=e[2],a=t[0],o=t[1],l=t[2],c=t[3],h=o*r-l*i,d=l*n-a*r,u=a*i-o*n,f=o*u-l*d,_=l*h-a*u,g=a*d-o*h,p=c*2;return h*=p,d*=p,u*=p,f*=2,_*=2,g*=2,s[0]=n+h+f,s[1]=i+d+_,s[2]=r+u+g,s}const Ay=function(){const s=[0,0,0],e=[0,0,0];return function(t,n){ol(s,t),ol(e,n),ll(s,s),ll(e,e);let i=Kd(s,e);return i>1?0:i<-1?Math.PI:Math.acos(i)}}();function Cy(s,e){return s[0]===e[0]&&s[1]===e[1]&&s[2]===e[2]}class Pn extends Array{constructor(e=0,t=e,n=e){return super(e,t,n),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,t=e,n=e){return e.length?this.copy(e):(py(this,e,t,n),this)}copy(e){return ol(this,e),this}add(e,t){return t?Qh(this,e,t):Qh(this,this,e),this}sub(e,t){return t?Jh(this,e,t):Jh(this,this,e),this}multiply(e){return e.length?my(this,this,e):Lo(this,this,e),this}divide(e){return e.length?gy(this,this,e):Lo(this,this,1/e),this}inverse(e=this){return yy(this,e),this}len(){return ar(this)}distance(e){return e?_y(this,e):ar(this)}squaredLen(){return eu(this)}squaredDistance(e){return e?xy(this,e):eu(this)}negate(e=this){return vy(this,e),this}cross(e,t){return t?tu(this,e,t):tu(this,this,e),this}scale(e){return Lo(this,this,e),this}normalize(){return ll(this,this),this}dot(e){return Kd(this,e)}equals(e){return Cy(this,e)}applyMatrix3(e){return Ty(this,this,e),this}applyMatrix4(e){return Ey(this,this,e),this}scaleRotateMatrix4(e){return by(this,this,e),this}applyQuaternion(e){return wy(this,this,e),this}angle(e){return Ay(this,e)}lerp(e,t){return My(this,this,e,t),this}smoothLerp(e,t,n){return Sy(this,this,e,t,n),this}clone(){return new Pn(this[0],this[1],this[2])}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}transformDirection(e){const t=this[0],n=this[1],i=this[2];return this[0]=e[0]*t+e[4]*n+e[8]*i,this[1]=e[1]*t+e[5]*n+e[9]*i,this[2]=e[2]*t+e[6]*n+e[10]*i,this.normalize()}}const nu=new Pn;let Ry=1,Py=1,iu=!1;class Ly{constructor(e,t={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=t,this.id=Ry++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let n in t)this.addAttribute(n,t[n])}addAttribute(e,t){if(this.attributes[e]=t,t.id=Py++,t.size=t.size||1,t.type=t.type||(t.data.constructor===Float32Array?this.gl.FLOAT:t.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),t.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,t.normalized=t.normalized||!1,t.stride=t.stride||0,t.offset=t.offset||0,t.count=t.count||(t.stride?t.data.byteLength/t.stride:t.data.length/t.size),t.divisor=t.instanced||0,t.needsUpdate=!1,t.usage=t.usage||this.gl.STATIC_DRAW,t.buffer||this.updateAttribute(t),t.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==t.count*t.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,t.count*t.divisor);this.instancedCount=t.count*t.divisor}else e==="index"?this.drawRange.count=t.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,t.count))}updateAttribute(e){const t=!e.buffer;t&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),t?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((t,{name:n,type:i})=>{if(!this.attributes[n]){console.warn(`active attribute ${n} not being supplied`);return}const r=this.attributes[n];this.gl.bindBuffer(r.target,r.buffer),this.glState.boundBuffer=r.buffer;let a=1;i===35674&&(a=2),i===35675&&(a=3),i===35676&&(a=4);const o=r.size/a,l=a===1?0:a*a*4,c=a===1?0:a*4;for(let h=0;h<a;h++)this.gl.vertexAttribPointer(t+h,o,r.type,r.normalized,r.stride+l,r.offset+h*c),this.gl.enableVertexAttribArray(t+h),this.gl.renderer.vertexAttribDivisor(t+h,r.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:t=this.gl.TRIANGLES}){var i;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((r,{name:a})=>{const o=this.attributes[a];o.needsUpdate&&this.updateAttribute(o)});let n=2;((i=this.attributes.index)==null?void 0:i.type)===this.gl.UNSIGNED_INT&&(n=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*n,this.instancedCount):this.gl.renderer.drawArraysInstanced(t,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*n):this.gl.drawArrays(t,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!iu)return console.warn("No position buffer data found to compute bounds"),iu=!0}computeBoundingBox(e){e||(e=this.getPosition());const t=e.data,n=e.size;this.bounds||(this.bounds={min:new Pn,max:new Pn,center:new Pn,scale:new Pn,radius:1/0});const i=this.bounds.min,r=this.bounds.max,a=this.bounds.center,o=this.bounds.scale;i.set(1/0),r.set(-1/0);for(let l=0,c=t.length;l<c;l+=n){const h=t[l],d=t[l+1],u=t[l+2];i.x=Math.min(h,i.x),i.y=Math.min(d,i.y),i.z=Math.min(u,i.z),r.x=Math.max(h,r.x),r.y=Math.max(d,r.y),r.z=Math.max(u,r.z)}o.sub(r,i),a.add(i,r).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const t=e.data,n=e.size;this.bounds||this.computeBoundingBox(e);let i=0;for(let r=0,a=t.length;r<a;r+=n)nu.fromArray(t,r),i=Math.max(i,this.bounds.center.squaredDistance(nu));this.bounds.radius=Math.sqrt(i)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let Iy=1;const su={};class Dy{constructor(e,{vertex:t,fragment:n,uniforms:i={},transparent:r=!1,cullFace:a=e.BACK,frontFace:o=e.CCW,depthTest:l=!0,depthWrite:c=!0,depthFunc:h=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=i,this.id=Iy++,t||console.warn("vertex shader not supplied"),n||console.warn("fragment shader not supplied"),this.transparent=r,this.cullFace=a,this.frontFace=o,this.depthTest=l,this.depthWrite=c,this.depthFunc=h,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:t,fragment:n})}setShaders({vertex:e,fragment:t}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${ru(e)}`)),t&&(this.gl.shaderSource(this.fragmentShader,t),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${ru(t)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let n=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<n;a++){let o=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(o,this.gl.getUniformLocation(this.program,o.name));const l=o.name.match(/(\w+)/g);o.uniformName=l[0],o.nameComponents=l.slice(1)}this.attributeLocations=new Map;const i=[],r=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const o=this.gl.getActiveAttrib(this.program,a),l=this.gl.getAttribLocation(this.program,o.name);l!==-1&&(i[l]=o.name,this.attributeLocations.set(o,l))}this.attributeOrder=i.join("")}setBlendFunc(e,t,n,i){this.blendFunc.src=e,this.blendFunc.dst=t,this.blendFunc.srcAlpha=n,this.blendFunc.dstAlpha=i,e&&(this.transparent=!0)}setBlendEquation(e,t){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=t}setStencilFunc(e,t,n){this.stencilRef=t,this.stencilFunc.func=e,this.stencilFunc.ref=t,this.stencilFunc.mask=n}setStencilOp(e,t,n){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=t,this.stencilOp.depthPass=n}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let t=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((i,r)=>{let a=this.uniforms[r.uniformName];for(const o of r.nameComponents){if(!a)break;if(o in a)a=a[o];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return au(`Active uniform ${r.name} has not been supplied`);if(a&&a.value===void 0)return au(`${r.name} uniform is missing a value parameter`);if(a.value.texture)return t=t+1,a.value.update(t),Io(this.gl,r.type,i,t);if(a.value.length&&a.value[0].texture){const o=[];return a.value.forEach(l=>{t=t+1,l.update(t),o.push(t)}),Io(this.gl,r.type,i,o)}Io(this.gl,r.type,i,a.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function Io(s,e,t,n){n=n.length?Uy(n):n;const i=s.renderer.state.uniformLocations.get(t);if(n.length)if(i===void 0||i.length!==n.length)s.renderer.state.uniformLocations.set(t,n.slice(0));else{if(Ny(i,n))return;i.set?i.set(n):Fy(i,n),s.renderer.state.uniformLocations.set(t,i)}else{if(i===n)return;s.renderer.state.uniformLocations.set(t,n)}switch(e){case 5126:return n.length?s.uniform1fv(t,n):s.uniform1f(t,n);case 35664:return s.uniform2fv(t,n);case 35665:return s.uniform3fv(t,n);case 35666:return s.uniform4fv(t,n);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return n.length?s.uniform1iv(t,n):s.uniform1i(t,n);case 35671:case 35667:return s.uniform2iv(t,n);case 35672:case 35668:return s.uniform3iv(t,n);case 35673:case 35669:return s.uniform4iv(t,n);case 35674:return s.uniformMatrix2fv(t,!1,n);case 35675:return s.uniformMatrix3fv(t,!1,n);case 35676:return s.uniformMatrix4fv(t,!1,n)}}function ru(s){let e=s.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Uy(s){const e=s.length,t=s[0].length;if(t===void 0)return s;const n=e*t;let i=su[n];i||(su[n]=i=new Float32Array(n));for(let r=0;r<e;r++)i.set(s[r],r*t);return i}function Ny(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Fy(s,e){for(let t=0,n=s.length;t<n;t++)s[t]=e[t]}let Do=0;function au(s){Do>100||(console.warn(s),Do++,Do>100&&console.warn("More than 100 program warnings - stopping logs."))}const Uo=new Pn;let Oy=1;class By{constructor({canvas:e=document.createElement("canvas"),width:t=300,height:n=150,dpr:i=1,alpha:r=!1,depth:a=!0,stencil:o=!1,antialias:l=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:h=!1,powerPreference:d="default",autoClear:u=!0,webgl:f=2}={}){const _={alpha:r,depth:a,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d};this.dpr=i,this.alpha=r,this.color=!0,this.depth=a,this.stencil=o,this.premultipliedAlpha=c,this.autoClear=u,this.id=Oy++,f===2&&(this.gl=e.getContext("webgl2",_)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",_)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(t,n),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,t){this.width=e,this.height=t,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=t*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:t+"px"})}setViewport(e,t,n=0,i=0){this.state.viewport.width===e&&this.state.viewport.height===t||(this.state.viewport.width=e,this.state.viewport.height=t,this.state.viewport.x=n,this.state.viewport.y=i,this.gl.viewport(n,i,e,t))}setScissor(e,t,n=0,i=0){this.gl.scissor(n,i,e,t)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,t,n,i){this.state.blendFunc.src===e&&this.state.blendFunc.dst===t&&this.state.blendFunc.srcAlpha===n&&this.state.blendFunc.dstAlpha===i||(this.state.blendFunc.src=e,this.state.blendFunc.dst=t,this.state.blendFunc.srcAlpha=n,this.state.blendFunc.dstAlpha=i,n!==void 0?this.gl.blendFuncSeparate(e,t,n,i):this.gl.blendFunc(e,t))}setBlendEquation(e,t){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===t)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=t,t!==void 0?this.gl.blendEquationSeparate(e,t):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,t,n){this.state.stencilFunc===e&&this.state.stencilRef===t&&this.state.stencilFuncMask===n||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=t||0,this.state.stencilFuncMask=n||0,this.gl.stencilFunc(e||this.gl.ALWAYS,t||0,n||0))}setStencilOp(e,t,n){this.state.stencilFail===e&&this.state.stencilDepthFail===t&&this.state.stencilDepthPass===n||(this.state.stencilFail=e,this.state.stencilDepthFail=t,this.state.stencilDepthPass=n,this.gl.stencilOp(e,t,n))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:t=null}={}){this.state.framebuffer!==t&&(this.state.framebuffer=t,this.gl.bindFramebuffer(e,t))}getExtension(e,t,n){return t&&this.gl[t]?this.gl[t].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),t?this.extensions[e]?this.extensions[e][n].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:e.zDepth!==t.zDepth?e.zDepth-t.zDepth:t.id-e.id}sortTransparent(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.zDepth!==t.zDepth?t.zDepth-e.zDepth:t.id-e.id}sortUI(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:t.id-e.id}getRenderList({scene:e,camera:t,frustumCull:n,sort:i}){let r=[];if(t&&n&&t.updateFrustum(),e.traverse(a=>{if(!a.visible)return!0;a.draw&&(n&&a.frustumCulled&&t&&!t.frustumIntersectsMesh(a)||r.push(a))}),i){const a=[],o=[],l=[];r.forEach(c=>{c.program.transparent?c.program.depthTest?o.push(c):l.push(c):a.push(c),c.zDepth=0,!(c.renderOrder!==0||!c.program.depthTest||!t)&&(c.worldMatrix.getTranslation(Uo),Uo.applyMatrix4(t.projectionViewMatrix),c.zDepth=Uo.z)}),a.sort(this.sortOpaque),o.sort(this.sortTransparent),l.sort(this.sortUI),r=a.concat(o,l)}return r}render({scene:e,camera:t,target:n=null,update:i=!0,sort:r=!0,frustumCull:a=!0,clear:o}){n===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(n),this.setViewport(n.width,n.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!n||n.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!n||n.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),i&&e.updateMatrixWorld(),t&&t.updateMatrixWorld(),this.getRenderList({scene:e,camera:t,frustumCull:a,sort:r}).forEach(c=>{c.draw({camera:t})})}}function zy(s,e){return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=e[3],s}function ky(s,e,t,n,i){return s[0]=e,s[1]=t,s[2]=n,s[3]=i,s}function Gy(s,e){let t=e[0],n=e[1],i=e[2],r=e[3],a=t*t+n*n+i*i+r*r;return a>0&&(a=1/Math.sqrt(a)),s[0]=t*a,s[1]=n*a,s[2]=i*a,s[3]=r*a,s}function Vy(s,e){return s[0]*e[0]+s[1]*e[1]+s[2]*e[2]+s[3]*e[3]}function Hy(s){return s[0]=0,s[1]=0,s[2]=0,s[3]=1,s}function Wy(s,e,t){t=t*.5;let n=Math.sin(t);return s[0]=n*e[0],s[1]=n*e[1],s[2]=n*e[2],s[3]=Math.cos(t),s}function ou(s,e,t){let n=e[0],i=e[1],r=e[2],a=e[3],o=t[0],l=t[1],c=t[2],h=t[3];return s[0]=n*h+a*o+i*c-r*l,s[1]=i*h+a*l+r*o-n*c,s[2]=r*h+a*c+n*l-i*o,s[3]=a*h-n*o-i*l-r*c,s}function Xy(s,e,t){t*=.5;let n=e[0],i=e[1],r=e[2],a=e[3],o=Math.sin(t),l=Math.cos(t);return s[0]=n*l+a*o,s[1]=i*l+r*o,s[2]=r*l-i*o,s[3]=a*l-n*o,s}function qy(s,e,t){t*=.5;let n=e[0],i=e[1],r=e[2],a=e[3],o=Math.sin(t),l=Math.cos(t);return s[0]=n*l-r*o,s[1]=i*l+a*o,s[2]=r*l+n*o,s[3]=a*l-i*o,s}function Yy(s,e,t){t*=.5;let n=e[0],i=e[1],r=e[2],a=e[3],o=Math.sin(t),l=Math.cos(t);return s[0]=n*l+i*o,s[1]=i*l-n*o,s[2]=r*l+a*o,s[3]=a*l-r*o,s}function $y(s,e,t,n){let i=e[0],r=e[1],a=e[2],o=e[3],l=t[0],c=t[1],h=t[2],d=t[3],u,f,_,g,p;return f=i*l+r*c+a*h+o*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),_=Math.sin(u),g=Math.sin((1-n)*u)/_,p=Math.sin(n*u)/_):(g=1-n,p=n),s[0]=g*i+p*l,s[1]=g*r+p*c,s[2]=g*a+p*h,s[3]=g*o+p*d,s}function jy(s,e){let t=e[0],n=e[1],i=e[2],r=e[3],a=t*t+n*n+i*i+r*r,o=a?1/a:0;return s[0]=-t*o,s[1]=-n*o,s[2]=-i*o,s[3]=r*o,s}function Ky(s,e){return s[0]=-e[0],s[1]=-e[1],s[2]=-e[2],s[3]=e[3],s}function Zy(s,e){let t=e[0]+e[4]+e[8],n;if(t>0)n=Math.sqrt(t+1),s[3]=.5*n,n=.5/n,s[0]=(e[5]-e[7])*n,s[1]=(e[6]-e[2])*n,s[2]=(e[1]-e[3])*n;else{let i=0;e[4]>e[0]&&(i=1),e[8]>e[i*3+i]&&(i=2);let r=(i+1)%3,a=(i+2)%3;n=Math.sqrt(e[i*3+i]-e[r*3+r]-e[a*3+a]+1),s[i]=.5*n,n=.5/n,s[3]=(e[r*3+a]-e[a*3+r])*n,s[r]=(e[r*3+i]+e[i*3+r])*n,s[a]=(e[a*3+i]+e[i*3+a])*n}return s}function Qy(s,e,t="YXZ"){let n=Math.sin(e[0]*.5),i=Math.cos(e[0]*.5),r=Math.sin(e[1]*.5),a=Math.cos(e[1]*.5),o=Math.sin(e[2]*.5),l=Math.cos(e[2]*.5);return t==="XYZ"?(s[0]=n*a*l+i*r*o,s[1]=i*r*l-n*a*o,s[2]=i*a*o+n*r*l,s[3]=i*a*l-n*r*o):t==="YXZ"?(s[0]=n*a*l+i*r*o,s[1]=i*r*l-n*a*o,s[2]=i*a*o-n*r*l,s[3]=i*a*l+n*r*o):t==="ZXY"?(s[0]=n*a*l-i*r*o,s[1]=i*r*l+n*a*o,s[2]=i*a*o+n*r*l,s[3]=i*a*l-n*r*o):t==="ZYX"?(s[0]=n*a*l-i*r*o,s[1]=i*r*l+n*a*o,s[2]=i*a*o-n*r*l,s[3]=i*a*l+n*r*o):t==="YZX"?(s[0]=n*a*l+i*r*o,s[1]=i*r*l+n*a*o,s[2]=i*a*o-n*r*l,s[3]=i*a*l-n*r*o):t==="XZY"&&(s[0]=n*a*l-i*r*o,s[1]=i*r*l-n*a*o,s[2]=i*a*o+n*r*l,s[3]=i*a*l+n*r*o),s}const Jy=zy,eM=ky,tM=Vy,nM=Gy;class iM extends Array{constructor(e=0,t=0,n=0,i=1){super(e,t,n,i),this.onChange=()=>{},this._target=this;const r=["0","1","2","3"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&r.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return Hy(this._target),this.onChange(),this}set(e,t,n,i){return e.length?this.copy(e):(eM(this._target,e,t,n,i),this.onChange(),this)}rotateX(e){return Xy(this._target,this._target,e),this.onChange(),this}rotateY(e){return qy(this._target,this._target,e),this.onChange(),this}rotateZ(e){return Yy(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return jy(this._target,e),this.onChange(),this}conjugate(e=this._target){return Ky(this._target,e),this.onChange(),this}copy(e){return Jy(this._target,e),this.onChange(),this}normalize(e=this._target){return nM(this._target,e),this.onChange(),this}multiply(e,t){return t?ou(this._target,e,t):ou(this._target,this._target,e),this.onChange(),this}dot(e){return tM(this._target,e)}fromMatrix3(e){return Zy(this._target,e),this.onChange(),this}fromEuler(e,t){return Qy(this._target,e,e.order),t||this.onChange(),this}fromAxisAngle(e,t){return Wy(this._target,e,t),this.onChange(),this}slerp(e,t){return $y(this._target,this._target,e,t),this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this._target[3]=e[t+3],this.onChange(),this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e}}const sM=1e-6;function rM(s,e){return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=e[3],s[4]=e[4],s[5]=e[5],s[6]=e[6],s[7]=e[7],s[8]=e[8],s[9]=e[9],s[10]=e[10],s[11]=e[11],s[12]=e[12],s[13]=e[13],s[14]=e[14],s[15]=e[15],s}function aM(s,e,t,n,i,r,a,o,l,c,h,d,u,f,_,g,p){return s[0]=e,s[1]=t,s[2]=n,s[3]=i,s[4]=r,s[5]=a,s[6]=o,s[7]=l,s[8]=c,s[9]=h,s[10]=d,s[11]=u,s[12]=f,s[13]=_,s[14]=g,s[15]=p,s}function oM(s){return s[0]=1,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=1,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=1,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function lM(s,e){let t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],_=e[12],g=e[13],p=e[14],m=e[15],v=t*o-n*a,x=t*l-i*a,y=t*c-r*a,b=n*l-i*o,S=n*c-r*o,E=i*c-r*l,P=h*g-d*_,M=h*p-u*_,T=h*m-f*_,N=d*p-u*g,k=d*m-f*g,q=u*m-f*p,A=v*q-x*k+y*N+b*T-S*M+E*P;return A?(A=1/A,s[0]=(o*q-l*k+c*N)*A,s[1]=(i*k-n*q-r*N)*A,s[2]=(g*E-p*S+m*b)*A,s[3]=(u*S-d*E-f*b)*A,s[4]=(l*T-a*q-c*M)*A,s[5]=(t*q-i*T+r*M)*A,s[6]=(p*y-_*E-m*x)*A,s[7]=(h*E-u*y+f*x)*A,s[8]=(a*k-o*T+c*P)*A,s[9]=(n*T-t*k-r*P)*A,s[10]=(_*S-g*y+m*v)*A,s[11]=(d*y-h*S-f*v)*A,s[12]=(o*M-a*N-l*P)*A,s[13]=(t*N-n*M+i*P)*A,s[14]=(g*x-_*b-p*v)*A,s[15]=(h*b-d*x+u*v)*A,s):null}function Zd(s){let e=s[0],t=s[1],n=s[2],i=s[3],r=s[4],a=s[5],o=s[6],l=s[7],c=s[8],h=s[9],d=s[10],u=s[11],f=s[12],_=s[13],g=s[14],p=s[15],m=e*a-t*r,v=e*o-n*r,x=e*l-i*r,y=t*o-n*a,b=t*l-i*a,S=n*l-i*o,E=c*_-h*f,P=c*g-d*f,M=c*p-u*f,T=h*g-d*_,N=h*p-u*_,k=d*p-u*g;return m*k-v*N+x*T+y*M-b*P+S*E}function lu(s,e,t){let n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],d=e[8],u=e[9],f=e[10],_=e[11],g=e[12],p=e[13],m=e[14],v=e[15],x=t[0],y=t[1],b=t[2],S=t[3];return s[0]=x*n+y*o+b*d+S*g,s[1]=x*i+y*l+b*u+S*p,s[2]=x*r+y*c+b*f+S*m,s[3]=x*a+y*h+b*_+S*v,x=t[4],y=t[5],b=t[6],S=t[7],s[4]=x*n+y*o+b*d+S*g,s[5]=x*i+y*l+b*u+S*p,s[6]=x*r+y*c+b*f+S*m,s[7]=x*a+y*h+b*_+S*v,x=t[8],y=t[9],b=t[10],S=t[11],s[8]=x*n+y*o+b*d+S*g,s[9]=x*i+y*l+b*u+S*p,s[10]=x*r+y*c+b*f+S*m,s[11]=x*a+y*h+b*_+S*v,x=t[12],y=t[13],b=t[14],S=t[15],s[12]=x*n+y*o+b*d+S*g,s[13]=x*i+y*l+b*u+S*p,s[14]=x*r+y*c+b*f+S*m,s[15]=x*a+y*h+b*_+S*v,s}function cM(s,e,t){let n=t[0],i=t[1],r=t[2],a,o,l,c,h,d,u,f,_,g,p,m;return e===s?(s[12]=e[0]*n+e[4]*i+e[8]*r+e[12],s[13]=e[1]*n+e[5]*i+e[9]*r+e[13],s[14]=e[2]*n+e[6]*i+e[10]*r+e[14],s[15]=e[3]*n+e[7]*i+e[11]*r+e[15]):(a=e[0],o=e[1],l=e[2],c=e[3],h=e[4],d=e[5],u=e[6],f=e[7],_=e[8],g=e[9],p=e[10],m=e[11],s[0]=a,s[1]=o,s[2]=l,s[3]=c,s[4]=h,s[5]=d,s[6]=u,s[7]=f,s[8]=_,s[9]=g,s[10]=p,s[11]=m,s[12]=a*n+h*i+_*r+e[12],s[13]=o*n+d*i+g*r+e[13],s[14]=l*n+u*i+p*r+e[14],s[15]=c*n+f*i+m*r+e[15]),s}function hM(s,e,t){let n=t[0],i=t[1],r=t[2];return s[0]=e[0]*n,s[1]=e[1]*n,s[2]=e[2]*n,s[3]=e[3]*n,s[4]=e[4]*i,s[5]=e[5]*i,s[6]=e[6]*i,s[7]=e[7]*i,s[8]=e[8]*r,s[9]=e[9]*r,s[10]=e[10]*r,s[11]=e[11]*r,s[12]=e[12],s[13]=e[13],s[14]=e[14],s[15]=e[15],s}function uM(s,e,t,n){let i=n[0],r=n[1],a=n[2],o=Math.hypot(i,r,a),l,c,h,d,u,f,_,g,p,m,v,x,y,b,S,E,P,M,T,N,k,q,A,F;return Math.abs(o)<sM?null:(o=1/o,i*=o,r*=o,a*=o,l=Math.sin(t),c=Math.cos(t),h=1-c,d=e[0],u=e[1],f=e[2],_=e[3],g=e[4],p=e[5],m=e[6],v=e[7],x=e[8],y=e[9],b=e[10],S=e[11],E=i*i*h+c,P=r*i*h+a*l,M=a*i*h-r*l,T=i*r*h-a*l,N=r*r*h+c,k=a*r*h+i*l,q=i*a*h+r*l,A=r*a*h-i*l,F=a*a*h+c,s[0]=d*E+g*P+x*M,s[1]=u*E+p*P+y*M,s[2]=f*E+m*P+b*M,s[3]=_*E+v*P+S*M,s[4]=d*T+g*N+x*k,s[5]=u*T+p*N+y*k,s[6]=f*T+m*N+b*k,s[7]=_*T+v*N+S*k,s[8]=d*q+g*A+x*F,s[9]=u*q+p*A+y*F,s[10]=f*q+m*A+b*F,s[11]=_*q+v*A+S*F,e!==s&&(s[12]=e[12],s[13]=e[13],s[14]=e[14],s[15]=e[15]),s)}function dM(s,e){return s[0]=e[12],s[1]=e[13],s[2]=e[14],s}function Qd(s,e){let t=e[0],n=e[1],i=e[2],r=e[4],a=e[5],o=e[6],l=e[8],c=e[9],h=e[10];return s[0]=Math.hypot(t,n,i),s[1]=Math.hypot(r,a,o),s[2]=Math.hypot(l,c,h),s}function fM(s){let e=s[0],t=s[1],n=s[2],i=s[4],r=s[5],a=s[6],o=s[8],l=s[9],c=s[10];const h=e*e+t*t+n*n,d=i*i+r*r+a*a,u=o*o+l*l+c*c;return Math.sqrt(Math.max(h,d,u))}const Jd=function(){const s=[1,1,1];return function(e,t){let n=s;Qd(n,t);let i=1/n[0],r=1/n[1],a=1/n[2],o=t[0]*i,l=t[1]*r,c=t[2]*a,h=t[4]*i,d=t[5]*r,u=t[6]*a,f=t[8]*i,_=t[9]*r,g=t[10]*a,p=o+d+g,m=0;return p>0?(m=Math.sqrt(p+1)*2,e[3]=.25*m,e[0]=(u-_)/m,e[1]=(f-c)/m,e[2]=(l-h)/m):o>d&&o>g?(m=Math.sqrt(1+o-d-g)*2,e[3]=(u-_)/m,e[0]=.25*m,e[1]=(l+h)/m,e[2]=(f+c)/m):d>g?(m=Math.sqrt(1+d-o-g)*2,e[3]=(f-c)/m,e[0]=(l+h)/m,e[1]=.25*m,e[2]=(u+_)/m):(m=Math.sqrt(1+g-o-d)*2,e[3]=(l-h)/m,e[0]=(f+c)/m,e[1]=(u+_)/m,e[2]=.25*m),e}}();function pM(s,e,t,n){let i=ar([s[0],s[1],s[2]]);const r=ar([s[4],s[5],s[6]]),a=ar([s[8],s[9],s[10]]);Zd(s)<0&&(i=-i),t[0]=s[12],t[1]=s[13],t[2]=s[14];const l=s.slice(),c=1/i,h=1/r,d=1/a;l[0]*=c,l[1]*=c,l[2]*=c,l[4]*=h,l[5]*=h,l[6]*=h,l[8]*=d,l[9]*=d,l[10]*=d,Jd(e,l),n[0]=i,n[1]=r,n[2]=a}function mM(s,e,t,n){const i=s,r=e[0],a=e[1],o=e[2],l=e[3],c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,_=r*d,g=a*h,p=a*d,m=o*d,v=l*c,x=l*h,y=l*d,b=n[0],S=n[1],E=n[2];return i[0]=(1-(g+m))*b,i[1]=(f+y)*b,i[2]=(_-x)*b,i[3]=0,i[4]=(f-y)*S,i[5]=(1-(u+m))*S,i[6]=(p+v)*S,i[7]=0,i[8]=(_+x)*E,i[9]=(p-v)*E,i[10]=(1-(u+g))*E,i[11]=0,i[12]=t[0],i[13]=t[1],i[14]=t[2],i[15]=1,i}function gM(s,e){let t=e[0],n=e[1],i=e[2],r=e[3],a=t+t,o=n+n,l=i+i,c=t*a,h=n*a,d=n*o,u=i*a,f=i*o,_=i*l,g=r*a,p=r*o,m=r*l;return s[0]=1-d-_,s[1]=h+m,s[2]=u-p,s[3]=0,s[4]=h-m,s[5]=1-c-_,s[6]=f+g,s[7]=0,s[8]=u+p,s[9]=f-g,s[10]=1-c-d,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function _M(s,e,t,n,i){let r=1/Math.tan(e/2),a=1/(n-i);return s[0]=r/t,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=r,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=(i+n)*a,s[11]=-1,s[12]=0,s[13]=0,s[14]=2*i*n*a,s[15]=0,s}function xM(s,e,t,n,i,r,a){let o=1/(e-t),l=1/(n-i),c=1/(r-a);return s[0]=-2*o,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=-2*l,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2*c,s[11]=0,s[12]=(e+t)*o,s[13]=(i+n)*l,s[14]=(a+r)*c,s[15]=1,s}function vM(s,e,t,n){let i=e[0],r=e[1],a=e[2],o=n[0],l=n[1],c=n[2],h=i-t[0],d=r-t[1],u=a-t[2],f=h*h+d*d+u*u;f===0?u=1:(f=1/Math.sqrt(f),h*=f,d*=f,u*=f);let _=l*u-c*d,g=c*h-o*u,p=o*d-l*h;return f=_*_+g*g+p*p,f===0&&(c?o+=1e-6:l?c+=1e-6:l+=1e-6,_=l*u-c*d,g=c*h-o*u,p=o*d-l*h,f=_*_+g*g+p*p),f=1/Math.sqrt(f),_*=f,g*=f,p*=f,s[0]=_,s[1]=g,s[2]=p,s[3]=0,s[4]=d*p-u*g,s[5]=u*_-h*p,s[6]=h*g-d*_,s[7]=0,s[8]=h,s[9]=d,s[10]=u,s[11]=0,s[12]=i,s[13]=r,s[14]=a,s[15]=1,s}function cu(s,e,t){return s[0]=e[0]+t[0],s[1]=e[1]+t[1],s[2]=e[2]+t[2],s[3]=e[3]+t[3],s[4]=e[4]+t[4],s[5]=e[5]+t[5],s[6]=e[6]+t[6],s[7]=e[7]+t[7],s[8]=e[8]+t[8],s[9]=e[9]+t[9],s[10]=e[10]+t[10],s[11]=e[11]+t[11],s[12]=e[12]+t[12],s[13]=e[13]+t[13],s[14]=e[14]+t[14],s[15]=e[15]+t[15],s}function hu(s,e,t){return s[0]=e[0]-t[0],s[1]=e[1]-t[1],s[2]=e[2]-t[2],s[3]=e[3]-t[3],s[4]=e[4]-t[4],s[5]=e[5]-t[5],s[6]=e[6]-t[6],s[7]=e[7]-t[7],s[8]=e[8]-t[8],s[9]=e[9]-t[9],s[10]=e[10]-t[10],s[11]=e[11]-t[11],s[12]=e[12]-t[12],s[13]=e[13]-t[13],s[14]=e[14]-t[14],s[15]=e[15]-t[15],s}function yM(s,e,t){return s[0]=e[0]*t,s[1]=e[1]*t,s[2]=e[2]*t,s[3]=e[3]*t,s[4]=e[4]*t,s[5]=e[5]*t,s[6]=e[6]*t,s[7]=e[7]*t,s[8]=e[8]*t,s[9]=e[9]*t,s[10]=e[10]*t,s[11]=e[11]*t,s[12]=e[12]*t,s[13]=e[13]*t,s[14]=e[14]*t,s[15]=e[15]*t,s}class wa extends Array{constructor(e=1,t=0,n=0,i=0,r=0,a=1,o=0,l=0,c=0,h=0,d=1,u=0,f=0,_=0,g=0,p=1){return super(e,t,n,i,r,a,o,l,c,h,d,u,f,_,g,p),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,t,n,i,r,a,o,l,c,h,d,u,f,_,g,p){return e.length?this.copy(e):(aM(this,e,t,n,i,r,a,o,l,c,h,d,u,f,_,g,p),this)}translate(e,t=this){return cM(this,t,e),this}rotate(e,t,n=this){return uM(this,n,e,t),this}scale(e,t=this){return hM(this,t,typeof e=="number"?[e,e,e]:e),this}add(e,t){return t?cu(this,e,t):cu(this,this,e),this}sub(e,t){return t?hu(this,e,t):hu(this,this,e),this}multiply(e,t){return e.length?t?lu(this,e,t):lu(this,this,e):yM(this,this,e),this}identity(){return oM(this),this}copy(e){return rM(this,e),this}fromPerspective({fov:e,aspect:t,near:n,far:i}={}){return _M(this,e,t,n,i),this}fromOrthogonal({left:e,right:t,bottom:n,top:i,near:r,far:a}){return xM(this,e,t,n,i,r,a),this}fromQuaternion(e){return gM(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return lM(this,e),this}compose(e,t,n){return mM(this,e,t,n),this}decompose(e,t,n){return pM(this,e,t,n),this}getRotation(e){return Jd(e,this),this}getTranslation(e){return dM(e,this),this}getScaling(e){return Qd(e,this),this}getMaxScaleOnAxis(){return fM(this)}lookAt(e,t,n){return vM(this,e,t,n),this}determinant(){return Zd(this)}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this[3]=e[t+3],this[4]=e[t+4],this[5]=e[t+5],this[6]=e[t+6],this[7]=e[t+7],this[8]=e[t+8],this[9]=e[t+9],this[10]=e[t+10],this[11]=e[t+11],this[12]=e[t+12],this[13]=e[t+13],this[14]=e[t+14],this[15]=e[t+15],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e[t+4]=this[4],e[t+5]=this[5],e[t+6]=this[6],e[t+7]=this[7],e[t+8]=this[8],e[t+9]=this[9],e[t+10]=this[10],e[t+11]=this[11],e[t+12]=this[12],e[t+13]=this[13],e[t+14]=this[14],e[t+15]=this[15],e}}function MM(s,e,t="YXZ"){return t==="XYZ"?(s[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(s[0]=Math.atan2(-e[9],e[10]),s[2]=Math.atan2(-e[4],e[0])):(s[0]=Math.atan2(e[6],e[5]),s[2]=0)):t==="YXZ"?(s[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(s[1]=Math.atan2(e[8],e[10]),s[2]=Math.atan2(e[1],e[5])):(s[1]=Math.atan2(-e[2],e[0]),s[2]=0)):t==="ZXY"?(s[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(s[1]=Math.atan2(-e[2],e[10]),s[2]=Math.atan2(-e[4],e[5])):(s[1]=0,s[2]=Math.atan2(e[1],e[0]))):t==="ZYX"?(s[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(s[0]=Math.atan2(e[6],e[10]),s[2]=Math.atan2(e[1],e[0])):(s[0]=0,s[2]=Math.atan2(-e[4],e[5]))):t==="YZX"?(s[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(s[0]=Math.atan2(-e[9],e[5]),s[1]=Math.atan2(-e[2],e[0])):(s[0]=0,s[1]=Math.atan2(e[8],e[10]))):t==="XZY"&&(s[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(s[0]=Math.atan2(e[6],e[5]),s[1]=Math.atan2(e[8],e[0])):(s[0]=Math.atan2(-e[9],e[10]),s[1]=0)),s}const uu=new wa;class SM extends Array{constructor(e=0,t=e,n=e,i="YXZ"){super(e,t,n),this.order=i,this.onChange=()=>{},this._target=this;const r=["0","1","2"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&r.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,t=e,n=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=t,this._target[2]=n,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,t=this.order){return MM(this._target,e,t),this.onChange(),this}fromQuaternion(e,t=this.order,n){return uu.fromQuaternion(e),this._target.fromRotationMatrix(uu,t),n||this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}}class EM{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new wa,this.worldMatrix=new wa,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new Pn,this.quaternion=new iM,this.scale=new Pn(1),this.rotation=new SM,this.up=new Pn(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,t=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,t&&e&&e.addChild(this,!1)}addChild(e,t=!0){~this.children.indexOf(e)||this.children.push(e),t&&e.setParent(this,!1)}removeChild(e,t=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),t&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let t=0,n=this.children.length;t<n;t++)this.children[t].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let t=0,n=this.children.length;t<n;t++)this.children[t].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,t=!1){t?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function bM(s,e){return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=e[4],s[4]=e[5],s[5]=e[6],s[6]=e[8],s[7]=e[9],s[8]=e[10],s}function TM(s,e){let t=e[0],n=e[1],i=e[2],r=e[3],a=t+t,o=n+n,l=i+i,c=t*a,h=n*a,d=n*o,u=i*a,f=i*o,_=i*l,g=r*a,p=r*o,m=r*l;return s[0]=1-d-_,s[3]=h-m,s[6]=u+p,s[1]=h+m,s[4]=1-c-_,s[7]=f-g,s[2]=u-p,s[5]=f+g,s[8]=1-c-d,s}function wM(s,e){return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=e[3],s[4]=e[4],s[5]=e[5],s[6]=e[6],s[7]=e[7],s[8]=e[8],s}function AM(s,e,t,n,i,r,a,o,l,c){return s[0]=e,s[1]=t,s[2]=n,s[3]=i,s[4]=r,s[5]=a,s[6]=o,s[7]=l,s[8]=c,s}function CM(s){return s[0]=1,s[1]=0,s[2]=0,s[3]=0,s[4]=1,s[5]=0,s[6]=0,s[7]=0,s[8]=1,s}function RM(s,e){let t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=-h*r+o*l,f=c*r-a*l,_=t*d+n*u+i*f;return _?(_=1/_,s[0]=d*_,s[1]=(-h*n+i*c)*_,s[2]=(o*n-i*a)*_,s[3]=u*_,s[4]=(h*t-i*l)*_,s[5]=(-o*t+i*r)*_,s[6]=f*_,s[7]=(-c*t+n*l)*_,s[8]=(a*t-n*r)*_,s):null}function du(s,e,t){let n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],d=e[8],u=t[0],f=t[1],_=t[2],g=t[3],p=t[4],m=t[5],v=t[6],x=t[7],y=t[8];return s[0]=u*n+f*a+_*c,s[1]=u*i+f*o+_*h,s[2]=u*r+f*l+_*d,s[3]=g*n+p*a+m*c,s[4]=g*i+p*o+m*h,s[5]=g*r+p*l+m*d,s[6]=v*n+x*a+y*c,s[7]=v*i+x*o+y*h,s[8]=v*r+x*l+y*d,s}function PM(s,e,t){let n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],d=e[8],u=t[0],f=t[1];return s[0]=n,s[1]=i,s[2]=r,s[3]=a,s[4]=o,s[5]=l,s[6]=u*n+f*a+c,s[7]=u*i+f*o+h,s[8]=u*r+f*l+d,s}function LM(s,e,t){let n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],d=e[8],u=Math.sin(t),f=Math.cos(t);return s[0]=f*n+u*a,s[1]=f*i+u*o,s[2]=f*r+u*l,s[3]=f*a-u*n,s[4]=f*o-u*i,s[5]=f*l-u*r,s[6]=c,s[7]=h,s[8]=d,s}function IM(s,e,t){let n=t[0],i=t[1];return s[0]=n*e[0],s[1]=n*e[1],s[2]=n*e[2],s[3]=i*e[3],s[4]=i*e[4],s[5]=i*e[5],s[6]=e[6],s[7]=e[7],s[8]=e[8],s}function DM(s,e){let t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],_=e[12],g=e[13],p=e[14],m=e[15],v=t*o-n*a,x=t*l-i*a,y=t*c-r*a,b=n*l-i*o,S=n*c-r*o,E=i*c-r*l,P=h*g-d*_,M=h*p-u*_,T=h*m-f*_,N=d*p-u*g,k=d*m-f*g,q=u*m-f*p,A=v*q-x*k+y*N+b*T-S*M+E*P;return A?(A=1/A,s[0]=(o*q-l*k+c*N)*A,s[1]=(l*T-a*q-c*M)*A,s[2]=(a*k-o*T+c*P)*A,s[3]=(i*k-n*q-r*N)*A,s[4]=(t*q-i*T+r*M)*A,s[5]=(n*T-t*k-r*P)*A,s[6]=(g*E-p*S+m*b)*A,s[7]=(p*y-_*E-m*x)*A,s[8]=(_*S-g*y+m*v)*A,s):null}class UM extends Array{constructor(e=1,t=0,n=0,i=0,r=1,a=0,o=0,l=0,c=1){return super(e,t,n,i,r,a,o,l,c),this}set(e,t,n,i,r,a,o,l,c){return e.length?this.copy(e):(AM(this,e,t,n,i,r,a,o,l,c),this)}translate(e,t=this){return PM(this,t,e),this}rotate(e,t=this){return LM(this,t,e),this}scale(e,t=this){return IM(this,t,e),this}multiply(e,t){return t?du(this,e,t):du(this,this,e),this}identity(){return CM(this),this}copy(e){return wM(this,e),this}fromMatrix4(e){return bM(this,e),this}fromQuaternion(e){return TM(this,e),this}fromBasis(e,t,n){return this.set(e[0],e[1],e[2],t[0],t[1],t[2],n[0],n[1],n[2]),this}inverse(e=this){return RM(this,e),this}getNormalMatrix(e){return DM(this,e),this}}let NM=0;class FM extends EM{constructor(e,{geometry:t,program:n,mode:i=e.TRIANGLES,frustumCulled:r=!0,renderOrder:a=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=NM++,this.geometry=t,this.program=n,this.mode=i,this.frustumCulled=r,this.renderOrder=a,this.modelViewMatrix=new wa,this.normalMatrix=new UM,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(n=>n&&n({mesh:this,camera:e}));let t=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:t}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(n=>n&&n({mesh:this,camera:e}))}}class OM extends Ly{constructor(e,{attributes:t={}}={}){Object.assign(t,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,t)}}const Ii=s=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(s);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:[1,1,1]},BM=s=>s==="ember"?1:s==="frost"?2:0,zM=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,kM=`#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform float uScale;
uniform float uDetail;
uniform float uGlow;
uniform float uCoreSize;
uniform float uSwirl;
uniform float uFold;
uniform float uBlackPoint;
uniform float uBrightness;
uniform float uColorMode;
uniform float uGrain;
uniform float uGrainIntensity;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseStrength;
uniform bool uEnableMouse;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uBackgroundColor;
uniform bool uLightMode;
out vec4 fragColor;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  float time = iTime * uSpeed;
  vec2 p = uScale * ((gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y) - 0.5;

  vec2 drift = vec2(0.0);
  if (uEnableMouse) {
    drift = (uMouse - 0.5) * uMouseStrength * 2.0;
  }
  p += drift;

  vec2 i = p;
  float c = 0.0;
  float r = length(p + vec2(sin(time), sin(time * 0.3 + 5.0)) * 0.5);
  float d = length(p);
  float rot = d + time + p.x * uSwirl;

  float cosRot = cos(rot);
  mat2 warp = mat2(cos(rot - sin(time / 5.0)), sin(rot), -sin(cosRot - time), cosRot) * uFold;
  float glowCore = uGlow * uCoreSize;

  for (float n = 0.0; n < 8.0; n++) {
    if (n >= uDetail) break;
    p *= warp;
    float t = r - time / (n + 3.0);
    i -= p + vec2(cos(t - i.x - r) + sin(t + i.y), sin(t - i.y) + cos(t + i.x) + r);
    c += glowCore / length(vec2(sin(i.x + t), cos(i.y + t)));
  }

  c /= 6.0;

  float intensity = max(c - uBlackPoint, 0.0) * uBrightness;

  float g = clamp(intensity, 0.0, 1.0);

  float mid = 0.5;
  if (uColorMode > 1.5) {
    mid = 0.65;
  } else if (uColorMode > 0.5) {
    mid = 0.35;
  }

  vec3 col = mix(uColor1, uColor2, smoothstep(0.0, mid, g));
  col = mix(col, uColor3, smoothstep(mid, 1.0, g));

  float a = g;
  if (uGrain > 0.5) {
    float gr = hash(gl_FragCoord.xy + iTime);
    a += (gr - 0.5) * uGrainIntensity;
  }
  a = clamp(a, 0.0, 1.0) * uOpacity;
  if (uLightMode) {
    float signal = 1.0 - exp(-max(c, 0.0) * 6.5);
    float body = smoothstep(0.075, 0.68, signal);
    float ridge = smoothstep(0.42, 0.92, signal);

    vec3 lightCol = mix(uColor1, uColor2, smoothstep(0.08, 0.52, signal));
    lightCol = mix(lightCol, uColor3, smoothstep(0.52, 0.96, signal));
    lightCol = mix(lightCol, lightCol * 0.72, ridge * 0.24);

    float coverage = body * mix(0.2, 0.86, signal) * uOpacity;
    if (uGrain > 0.5) {
      float gr = hash(gl_FragCoord.xy + iTime);
      coverage += (gr - 0.5) * uGrainIntensity * body * 0.16;
    }
    fragColor = vec4(mix(uBackgroundColor, lightCol, clamp(coverage, 0.0, 0.92)), 1.0);
  } else {
    fragColor = vec4(col * a, a);
  }
}
`;function GM(s,e={}){if(!s)return null;const{color1:t="#5227FF",color2:n="#FF9FFC",color3:i="#FFFFFF",speed:r=.35,scale:a=4,detail:o=3,glow:l=1.6,coreSize:c=.1,swirl:h=1,fold:d=-.2,blackPoint:u=.05,brightness:f=1.3,colorMode:_="molten",grain:g=!0,grainIntensity:p=.05,mouseInteraction:m=!0,mouseStrength:v=.3,opacity:x=1,backgroundColor:y="#030305",lightMode:b=!1}=e;let S;try{S=new By({webgl:2,alpha:!0,premultipliedAlpha:!0,antialias:!1,dpr:Math.min(window.devicePixelRatio||1,1.5)})}catch(je){return console.warn("WebGL2 not supported or failed for MoltenMetal:",je),null}const E=S.gl;E.clearColor(0,0,0,0);const P=E.canvas;P.style.width="100%",P.style.height="100%",P.style.display="block",P.style.pointerEvents="none",s.appendChild(P);const M=Ii(t),T=Ii(n),N=Ii(i),k=Ii(y),q=new OM(E),A=new Dy(E,{vertex:zM,fragment:kM,uniforms:{iTime:{value:0},iResolution:{value:new Float32Array([1,1])},uSpeed:{value:r},uScale:{value:a},uDetail:{value:o},uGlow:{value:l},uCoreSize:{value:Math.max(c,.001)},uSwirl:{value:h},uFold:{value:d},uBlackPoint:{value:u},uBrightness:{value:f},uColorMode:{value:BM(_)},uGrain:{value:g?1:0},uGrainIntensity:{value:p},uOpacity:{value:x},uMouse:{value:new Float32Array([.5,.5])},uMouseStrength:{value:v},uEnableMouse:{value:m},uColor1:{value:new Float32Array(M)},uColor2:{value:new Float32Array(T)},uColor3:{value:new Float32Array(N)},uBackgroundColor:{value:new Float32Array(k)},uLightMode:{value:b}}}),F=new FM(E,{geometry:q,program:A}),O=()=>{const je=s.getBoundingClientRect(),Ee=Math.max(1,Math.floor(je.width)),Ue=Math.max(1,Math.floor(je.height));S.setSize(Ee,Ue);const se=A.uniforms.iResolution.value;se[0]=E.drawingBufferWidth,se[1]=E.drawingBufferHeight,S.render({scene:F})},G=new ResizeObserver(O);G.observe(s),O();const W=[.5,.5],z=[.5,.5],Q=je=>{W[0]=je.clientX/window.innerWidth,W[1]=1-je.clientY/window.innerHeight},ne=()=>{W[0]=.5,W[1]=.5};m&&(window.addEventListener("mousemove",Q,{passive:!0}),window.addEventListener("mouseleave",ne));let ee=0,X=!0,J=!document.hidden;const oe=performance.now(),xe=je=>{A.uniforms.iTime.value=(je-oe)*.001,z[0]+=.05*(W[0]-z[0]),z[1]+=.05*(W[1]-z[1]),A.uniforms.uMouse.value[0]=z[0],A.uniforms.uMouse.value[1]=z[1],S.render({scene:F}),ee=requestAnimationFrame(xe)},ve=()=>{X&&J&&ee===0&&(ee=requestAnimationFrame(xe))},De=()=>{ee!==0&&(cancelAnimationFrame(ee),ee=0)},Re=new IntersectionObserver(([je])=>{X=je.isIntersecting,X?ve():De()},{threshold:0});Re.observe(s);const ye=()=>{J=!document.hidden,J?ve():De()};return document.addEventListener("visibilitychange",ye),ve(),{renderer:S,program:A,mesh:F,updateColors:(je,Ee,Ue)=>{const se=A.uniforms;if(je){const Ke=Ii(je);se.uColor1.value[0]=Ke[0],se.uColor1.value[1]=Ke[1],se.uColor1.value[2]=Ke[2]}if(Ee){const Ke=Ii(Ee);se.uColor2.value[0]=Ke[0],se.uColor2.value[1]=Ke[1],se.uColor2.value[2]=Ke[2]}if(Ue){const Ke=Ii(Ue);se.uColor3.value[0]=Ke[0],se.uColor3.value[1]=Ke[1],se.uColor3.value[2]=Ke[2]}},destroy:()=>{var je;De(),G.disconnect(),Re.disconnect(),document.removeEventListener("visibilitychange",ye),m&&(window.removeEventListener("mousemove",Q),window.removeEventListener("mouseleave",ne)),P.parentNode===s&&s.removeChild(P),(je=E.getExtension("WEBGL_lose_context"))==null||je.loseContext()}}}class VM{constructor(){this.container=document.getElementById("webgl-container"),this.stones=[],this.currentIndex=0,this.isTransitioning=!1,this.isConvergenceActive=!1,this.isWireframe=!1,this.lastScrollTime=0,this.scrollCooldown=700,this.clock=new Qu,this.infoCard=document.getElementById("info-card"),this.initMoltenMetalBg(),this.initThree(),this.initCosmicEnvironment(),this.initStones(),this.initPostProcessing(),this.initControls(),this.initUI(),this.initCountdownTimer(),this.initTimeline(),this.initScrollAndGestures(),this.initEventListeners(),sy(),this.animate(),"scrollRestoration"in history&&(history.scrollRestoration="manual"),window.scrollTo(0,0),document.body.classList.remove("timeline-unlocked"),this.displayStone(0,!1),this.cinematic=fy({onComplete:()=>{this.triggerConvergence(!1)}})}isMobile(){return window.innerWidth<=1024||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}initMoltenMetalBg(){const e=document.getElementById("molten-metal-bg");e&&(this.moltenMetal=GM(e,{color1:"#5227FF",color2:"#FF9FFC",color3:"#FFFFFF",speed:.35,scale:4,detail:3,glow:1.6,coreSize:.1,swirl:1,fold:-.2,blackPoint:.05,brightness:1.3,colorMode:"molten",grain:!0,grainIntensity:.05,mouseInteraction:!0,mouseStrength:.3,opacity:1,backgroundColor:"#030305"}))}initThree(){this.scene=new rx,this.scene.fog=new _l(197381,.008),this.camera=new on(42,window.innerWidth/window.innerHeight,.1,1e3),this.updateCameraForViewport();const e=window.innerWidth<=768||/Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent),t=e?Math.min(window.devicePixelRatio,1.25):Math.min(window.devicePixelRatio,2);this.renderer=new ju({powerPreference:e?"default":"high-performance",antialias:!e,alpha:!0}),this.renderer.setClearColor(0,0),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(t),this.renderer.toneMapping=hl,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!e,this.renderer.domElement.addEventListener("webglcontextlost",_=>{_.preventDefault(),console.warn("⚠️ WebGL context lost. Pausing render loop to recover..."),this.animationFrameId&&cancelAnimationFrame(this.animationFrameId)},!1),this.renderer.domElement.addEventListener("webglcontextrestored",()=>{console.log("✅ WebGL context restored. Resuming render loop."),this.animate()},!1),this.container.appendChild(this.renderer.domElement);const n=new fx(16777215,.95);this.scene.add(n);const i=new vo(16777215,1.35);i.position.set(5,10,8),this.scene.add(i);const r=new vo(16777215,.85);r.position.set(-6,-4,6),this.scene.add(r);const a=new vo(8961023,.75);a.position.set(-6,8,-6),this.scene.add(a),this.stageLight=new Xo(54015,1.5,16,1.2),this.stageLight.position.set(0,1.2,4.5),this.scene.add(this.stageLight);const o=new Vo(this.renderer);o.compileEquirectangularShader();const l=document.createElement("canvas");l.width=512,l.height=256;const c=l.getContext("2d"),h=c.createLinearGradient(0,0,0,256);h.addColorStop(0,"#0d1020"),h.addColorStop(.5,"#05060b"),h.addColorStop(1,"#090b16"),c.fillStyle=h,c.fillRect(0,0,512,256);const d=(_,g,p,m,v)=>{const x=c.createRadialGradient(_,g,0,_,g,p);x.addColorStop(0,`rgba(255, 255, 255, ${m})`),x.addColorStop(.35,v),x.addColorStop(1,"rgba(0, 0, 0, 0)"),c.fillStyle=x,c.beginPath(),c.arc(_,g,p,0,Math.PI*2),c.fill()};d(130,65,80,.35,"rgba(230, 245, 255, 0.35)"),d(370,75,95,.32,"rgba(255, 240, 225, 0.3)"),d(256,175,75,.2,"rgba(160, 200, 255, 0.2)");const u=new _a(l);u.mapping=ua;const f=o.fromEquirectangular(u).texture;this.scene.environment=f}updateCameraForViewport(){const e=document.getElementById("stone-stage-overlay");if(e){const n=e.getBoundingClientRect(),i=n.left+n.width/2,r=n.top+n.height/2;let a=window.innerWidth/2-i,o=window.innerHeight/2-r;this.isMobile()&&(a+=16),this.camera.setViewOffset(window.innerWidth,window.innerHeight,a,o,window.innerWidth,window.innerHeight),this.camera.updateProjectionMatrix()}this.stoneStageX=0,this.stoneStageY=0;const t=this.isMobile()?12:9.8;this.camera.position.set(0,0,t),this.controls&&this.controls.target.set(0,0,0)}initCosmicEnvironment(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.2,"rgba(255, 255, 255, 0.7)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.15)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=n,t.fillRect(0,0,64,64);const i=new _a(e),r=2e3,a=new Mt,o=new Float32Array(r*3),l=new Float32Array(r*3);for(let h=0;h<r;h++){const d=38+Math.random()*85,u=Math.random()*Math.PI*2,f=Math.acos(2*Math.random()-1);let _=d*Math.sin(f)*Math.cos(u),g=d*Math.sin(f)*Math.sin(u),p=d*Math.cos(f);Math.hypot(_-this.stoneStageX,g-this.stoneStageY)<4.5&&p<0&&(_+=_>=this.stoneStageX?5:-5,g+=g>=this.stoneStageY?5:-5),o[h*3]=_,o[h*3+1]=g,o[h*3+2]=p;const v=.4+Math.random()*.6;l[h*3]=v,l[h*3+1]=v,l[h*3+2]=v}a.setAttribute("position",new Zt(o,3)),a.setAttribute("color",new Zt(l,3));const c=new xl({size:.35,map:i,vertexColors:!0,transparent:!0,opacity:.8,blending:kt,depthWrite:!1});this.starfield=new Ku(a,c),this.scene.add(this.starfield)}initStones(){this.stonesContainer=new Nn,this.scene.add(this.stonesContainer);const e=this.isMobile()?.48:1;Wt.forEach((t,n)=>{const i=ny(t);i.group.position.set(this.stoneStageX,this.stoneStageY,0),n!==0?(i.group.scale.set(.001,.001,.001),i.group.visible=!1):(i.group.scale.set(e,e,e),i.group.visible=!0),this.stonesContainer.add(i.group),this.stones.push(i)})}initPostProcessing(){this.composer=new Ex(this.renderer);const e=new bx(this.scene,this.camera,null,new Pe(0),0);e.clearAlpha=0,this.composer.addPass(e),this.bloomPass=new Ds(new Te(window.innerWidth,window.innerHeight),.55,.45,.72),this.composer.addPass(this.bloomPass);const t=new Ax;this.composer.addPass(t)}initControls(){this.controls=new _x(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.maxPolarAngle=Math.PI/2+.25,this.controls.minPolarAngle=Math.PI/2-.25,this.controls.target.set(0,0,0),this.controls.touches={ONE:null,TWO:null},this.renderer.domElement&&(this.renderer.domElement.style.touchAction="pan-y");const e=new px,t=new Te;let n={x:0,y:0};this.renderer.domElement.addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(n={x:i.clientX,y:i.clientY})}),this.renderer.domElement.addEventListener("pointerup",i=>{if(i.pointerType==="touch")return;if(Math.hypot(i.clientX-n.x,i.clientY-n.y)<6&&!this.isConvergenceActive){t.x=i.clientX/window.innerWidth*2-1,t.y=-(i.clientY/window.innerHeight)*2+1,e.setFromCamera(t,this.camera);const a=this.stones[this.currentIndex];a&&e.intersectObjects([a.gemMesh,a.coreMesh],!0).length>0&&this.pulseCurrentStone()}})}initCountdownTimer(){const e=new Date("2026-10-31T09:00:00+05:30").getTime(),t=document.getElementById("cd-days"),n=document.getElementById("cd-hours"),i=document.getElementById("cd-mins"),r=document.getElementById("cd-secs"),a=document.getElementById("cd-msecs");if(!t||!n||!i||!r||!a)return;let o=-1;const l=()=>{const c=Date.now(),h=e-c;if(h<=0){t.textContent="00",n.textContent="00",i.textContent="00",r.textContent="00",a.textContent="000";return}const d=Math.floor(h/(1e3*60*60*24)),u=Math.floor(h/(1e3*60*60)%24),f=Math.floor(h/(1e3*60)%60),_=Math.floor(h/1e3%60),g=Math.floor(h%1e3);_!==o&&(o=_,t.textContent=String(d).padStart(2,"0"),n.textContent=String(u).padStart(2,"0"),i.textContent=String(f).padStart(2,"0"),r.textContent=String(_).padStart(2,"0")),a.textContent=String(g).padStart(3,"0"),requestAnimationFrame(l)};requestAnimationFrame(l)}initUI(){const e=document.getElementById("pager-list");e.innerHTML="",Wt.forEach((d,u)=>{const f=document.createElement("button");f.className=`pager-item ${u===0?"active":""}`,f.setAttribute("data-index",u);const _=d.colorThree>>16&255,g=d.colorThree>>8&255,p=d.colorThree&255;f.setAttribute("style",`
        --item-color: ${d.colorHex};
        --item-rgb: ${_}, ${g}, ${p};
      `),f.setAttribute("aria-label",`Navigate to ${d.name}`);const m=d.name.replace(" STONE",""),v=u===0?21:0,x=u===Wt.length-1?21:42;f.innerHTML=`
        <span class="pager-track-node">
          <svg class="pager-node-svg" width="24" height="42" viewBox="0 0 24 42" aria-hidden="true">
            <!-- Background laser guide line -->
            <line class="svg-track-line" x1="12" y1="${v}" x2="12" y2="${x}" />
            <!-- Active laser beam segments -->
            ${u>0?'<line class="svg-laser-top" x1="12" y1="0" x2="12" y2="21" />':""}
            ${u<Wt.length-1?'<line class="svg-laser-bot" x1="12" y1="21" x2="12" y2="42" />':""}
            <!-- Precision Single Dot: centered at (12, 21) -->
            <circle class="svg-pip-halo" cx="12" cy="21" r="8" />
            <circle class="svg-pip-core" cx="12" cy="21" r="3.5" />
          </svg>
        </span>
        <span class="pager-name-tag">${m}</span>
      `,f.addEventListener("click",()=>{this.isConvergenceActive&&this.endConvergence(),u!==this.currentIndex&&(He.playStoneChime(d.id),this.displayStone(u,!0))}),e.appendChild(f)});const t=document.getElementById("btn-mobile-menu"),n=document.getElementById("mobile-nav-drawer"),i=document.getElementById("btn-close-mobile-menu"),r=document.getElementById("mobile-drawer-backdrop"),a=document.querySelectorAll(".mobile-nav-link, .m-portal-item"),o=document.getElementById("btn-mobile-drawer-reg");t&&n&&t.addEventListener("click",()=>{n.classList.add("is-open"),He.playClick()});const l=()=>{n&&n.classList.remove("is-open")};i&&i.addEventListener("click",l),r&&r.addEventListener("click",l),a.forEach(d=>{d.addEventListener("click",()=>{l(),this.unlockTimeline(!0)})}),o&&o.addEventListener("click",()=>{l();const d=document.getElementById("btn-nav-register");d&&d.click()});const c=document.getElementById("btn-mobile-audio"),h=document.getElementById("m-audio-status");c&&(h&&(h.textContent="ACTIVE",h.style.color="#00d2ff"),c.addEventListener("click",()=>{const d=He.toggleMute();h&&(h.textContent=d?"ACTIVE":"MUTED",h.style.color=d?"#00d2ff":"#a1a1aa");const u=document.getElementById("btn-audio");u&&(u.classList.toggle("audio-unmuted",d),u.classList.toggle("audio-muted",!d),u.classList.toggle("active",d))})),this.initTechText()}initTechText(){const e=document.getElementById("stone-tech-text-container");if(!e)return;const t=Wt[this.currentIndex]||Wt[0];this.techText=new oy(e,{text:t.name,fontFamily:"'Syne', sans-serif",fontWeight:800,fontSize:42,letterSpacing:.04,color:"#ffffff",accentColor:t.colorHex,reveal:"letter",lineStyle:"dashed",dashLength:4,dashGap:2,strokeWidth:1.5,specks:12,selection:!1,labels:!1,draggable:!1,sweep:!0,speed:.9})}initTimeline(){const e=document.querySelectorAll(".dossier-card"),t=["mind","space","reality","time"];e.forEach((i,r)=>{i.addEventListener("click",()=>{const a=t[r]||"all";He.playStoneChime(a),tt.fromTo(i,{scale:.985},{scale:1,duration:.35,ease:"back.out(2)"})})});const n=document.getElementById("btn-timeline");n&&n.addEventListener("click",()=>{He.playClick(),this.unlockTimeline(!0)}),this.initTimelineParticles()}initTimelineParticles(){const e=document.getElementById("timeline-bg-canvas"),t=document.getElementById("timeline-section");if(!e||!t)return;const n=e.getContext("2d");if(!n)return;let i=0,r=0,a=1,o=null,l=!1;const c={x:-1e3,y:-1e3,isHovering:!1},h=["#d97706","#0284c7","#e11d48","#059669","#475569","#1e293b"],d=window.innerWidth<768?22:44,u=[],f=()=>{const p=t.getBoundingClientRect();i=p.width,r=p.height,a=Math.min(window.devicePixelRatio||1,2),e.width=Math.round(i*a),e.height=Math.round(r*a),n.setTransform(a,0,0,a,0,0),u.forEach(m=>{m.x>i&&(m.x=Math.random()*i),m.y>r&&(m.y=Math.random()*r)})};for(let p=0;p<d;p++){const m=Math.random()<.45,v=m?h[p%4]:h[4+p%2];u.push({x:Math.random()*(i||window.innerWidth),y:Math.random()*(r||600),vx:(Math.random()-.5)*.42,vy:(Math.random()-.5)*.42,radius:m?2.2+Math.random()*1.2:1.3+Math.random()*.8,color:v,alpha:.28+Math.random()*.45,hasCross:p%6===0,pulseSpeed:.02+Math.random()*.03,pulseVal:Math.random()*Math.PI})}const _=()=>{if(!l)return;n.clearRect(0,0,i,r);const p=u.length,m=125,v=m*m;for(let x=0;x<p;x++){const y=u[x];for(let b=x+1;b<p;b++){const S=u[b],E=y.x-S.x,P=y.y-S.y,M=E*E+P*P;if(M<v){const N=(1-Math.sqrt(M)/m)*.15;n.beginPath(),n.moveTo(y.x,y.y),n.lineTo(S.x,S.y),n.strokeStyle=`rgba(15, 23, 42, ${N})`,n.lineWidth=1,n.stroke()}}if(c.isHovering){const b=y.x-c.x,S=y.y-c.y,E=b*b+S*S,P=145;if(E<P*P){const M=Math.sqrt(E),T=(1-M/P)*.32;n.beginPath(),n.moveTo(y.x,y.y),n.lineTo(c.x,c.y),n.strokeStyle=`rgba(2, 132, 199, ${T})`,n.lineWidth=1.2,n.stroke();const N=(1-M/P)*.55;y.x+=b/M*N,y.y+=S/M*N}}}for(let x=0;x<p;x++){const y=u[x];y.x+=y.vx,y.y+=y.vy,y.x<0?(y.x=0,y.vx*=-1):y.x>i&&(y.x=i,y.vx*=-1),y.y<0?(y.y=0,y.vy*=-1):y.y>r&&(y.y=r,y.vy*=-1),y.pulseVal+=y.pulseSpeed;const b=y.alpha*(.85+Math.sin(y.pulseVal)*.25);n.beginPath(),n.arc(y.x,y.y,y.radius,0,Math.PI*2),n.fillStyle=y.color,n.globalAlpha=b,n.fill(),y.hasCross&&(n.beginPath(),n.moveTo(y.x-4,y.y),n.lineTo(y.x+4,y.y),n.moveTo(y.x,y.y-4),n.lineTo(y.x,y.y+4),n.strokeStyle=y.color,n.lineWidth=1,n.stroke()),n.globalAlpha=1}o=requestAnimationFrame(_)};t.addEventListener("mousemove",p=>{const m=t.getBoundingClientRect();c.x=p.clientX-m.left,c.y=p.clientY-m.top,c.isHovering=!0},{passive:!0}),t.addEventListener("mouseleave",()=>{c.isHovering=!1,c.x=-1e3,c.y=-1e3}),new IntersectionObserver(p=>{p.forEach(m=>{m.isIntersecting?(l=!0,f(),cancelAnimationFrame(o),o=requestAnimationFrame(_)):(l=!1,cancelAnimationFrame(o))})},{threshold:.01}).observe(t),window.ResizeObserver&&new ResizeObserver(m=>{for(const v of m)v.contentRect.width>0&&v.contentRect.height>0&&(f(),l&&!o&&(o=requestAnimationFrame(_)))}).observe(t),window.addEventListener("resize",()=>{f()},{passive:!0}),f()}unlockTimeline(e=!0,t="sponsors-section"){document.body.classList.contains("timeline-unlocked")||(document.body.classList.add("timeline-unlocked"),He.playChime(660),window.dispatchEvent(new Event("resize"))),e&&setTimeout(()=>{const n=document.getElementById(t)||document.getElementById("sponsors-section")||document.getElementById("timeline-section");if(n){const i=n.offsetTop||window.innerHeight;window.scrollTo({top:i,behavior:"smooth"})}},50)}lockTimeline(){window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{document.body.classList.remove("timeline-unlocked")},550)}initScrollAndGestures(){window.addEventListener("wheel",i=>{if(document.body.classList.contains("timeline-unlocked")&&window.scrollY>40)return;const r=Date.now();r-this.lastScrollTime<this.scrollCooldown||Math.abs(i.deltaY)>18&&(this.lastScrollTime=r,this.isConvergenceActive&&this.endConvergence(),i.deltaY>0?this.stepStone(1):i.deltaY<0&&(document.body.classList.contains("timeline-unlocked")&&window.scrollY<=10?this.lockTimeline():this.stepStone(-1)))},{passive:!0});let e=0,t=0;window.addEventListener("touchstart",i=>{!i.touches||!i.touches[0]||(e=i.touches[0].clientX,t=i.touches[0].clientY)},{passive:!0}),window.addEventListener("touchend",i=>{if(!i.changedTouches||!i.changedTouches[0]||document.body.classList.contains("timeline-unlocked")&&window.scrollY>40)return;const r=e-i.changedTouches[0].clientX,a=t-i.changedTouches[0].clientY,o=Math.abs(r),l=Math.abs(a),c=Date.now();if(!(c-this.lastScrollTime<this.scrollCooldown)&&(l>35||o>40)){this.lastScrollTime=c,this.isConvergenceActive&&this.endConvergence();const h=l>=o&&a>0||o>l&&r>0,d=l>=o&&a<0||o>l&&r<0;h?this.stepStone(1):d&&(document.body.classList.contains("timeline-unlocked")&&window.scrollY<=10?this.lockTimeline():this.stepStone(-1))}},{passive:!0});const n=document.getElementById("scroll-btn");n&&n.addEventListener("click",()=>{He.playClick(),this.isConvergenceActive&&this.endConvergence(),this.currentIndex===Wt.length-1?this.unlockTimeline(!0):this.stepStone(1)})}stepStone(e){this.isConvergenceActive&&this.endConvergence();const t=Wt.length;if(this.currentIndex===t-1&&e>0){this.unlockTimeline(!0);return}let n=this.currentIndex+e;n>=t&&(n=0),n<0&&(n=t-1),He.playStoneChime(Wt[n].id),this.displayStone(n,!0)}displayStone(e,t=!0){if(this.isTransitioning&&t)return;this.isTransitioning=!0;const n=this.currentIndex;this.currentIndex=e;const i=Wt[e];document.documentElement.style.setProperty("--active-stone-color",i.colorHex),document.documentElement.style.setProperty("--active-stone-glow",i.colorHex+"55");const r=new Pe(i.colorHex),a=Math.round(r.r*255),o=Math.round(r.g*255),l=Math.round(r.b*255);document.documentElement.style.setProperty("--active-stone-rgb",`${a}, ${o}, ${l}`),tt.to(this.stageLight.color,{r:new Pe(i.colorThree).r,g:new Pe(i.colorThree).g,b:new Pe(i.colorThree).b,duration:.8}),document.querySelectorAll(".pager-item").forEach((_,g)=>{_.classList.toggle("active",g===e),_.classList.toggle("passed",g<e)}),document.getElementById("stage-roman").textContent=i.roman;const h=document.getElementById("scroll-label");h&&(h.textContent=e===Wt.length-1?"EXPLORE SPONSORS & TIMELINE ↓":"SCROLL TO DISCOVER");const d=document.getElementById("info-card");t&&d.classList.add("animating"),setTimeout(()=>{this.renderCardContent(i),t&&d.classList.remove("animating")},t?150:0);const u=this.isMobile()?12:9.8;if(tt.to(this.camera.position,{x:0,y:0,z:u,duration:.7,ease:"power2.out"}),this.stageLight){const _=new Pe(i.coreColor);tt.to(this.stageLight.color,{r:_.r,g:_.g,b:_.b,duration:.6})}const f=this.isMobile()?.48:1;if(t){const _=this.stones[n],g=this.stones[e];tt.to(this.bloomPass,{strength:.65,duration:.35,yoyo:!0,repeat:1,ease:"power2.out"}),_&&n!==e&&tt.to(_.group.scale,{x:.001,y:.001,z:.001,duration:.55,ease:"back.in(1.4)",onComplete:()=>{_.group.visible=!1}}),this.stones.forEach((p,m)=>{m!==e&&m!==n&&(tt.killTweensOf(p.group.scale),tt.killTweensOf(p.group.position),p.group.scale.set(.001,.001,.001),p.group.position.set(0,0,0),p.group.visible=!1)}),g.group.visible=!0,g.group.position.set(0,0,0),g.group.rotation.y+=Math.PI*.5,tt.fromTo(g.group.scale,{x:.1*f,y:.1*f,z:.1*f},{x:f,y:f,z:f,duration:.85,ease:"elastic.out(1, 0.75)",delay:.2,onComplete:()=>{this.isTransitioning=!1,this.stones.forEach((p,m)=>{m!==e&&(p.group.visible=!1,p.group.scale.set(.001,.001,.001))})}})}else this.stones.forEach((_,g)=>{_.group.visible=g===e,_.group.position.set(0,0,0),_.group.scale.set(g===e?f:.001,g===e?f:.001,g===e?f:.001)}),this.isTransitioning=!1}renderCardContent(e){const t=document.getElementById("card-index-tag");t&&(t.textContent=`${e.index} / 06`);const n=document.getElementById("card-marvel-theme");n&&(n.textContent=(e.marvelTheme||"SINGULARITY").toUpperCase());const i=document.getElementById("card-title");i&&(i.textContent=e.name),this.techText&&this.techText.update({text:e.name,accentColor:e.colorHex});const r=document.getElementById("stone-tech-text-container");r&&r.setAttribute("aria-label",e.name);const a=document.getElementById("card-domain");a&&(a.textContent=`${e.domain} // ${e.domainTagline||""}`);const o=document.getElementById("card-desc");o&&(o.textContent=e.description);const l=document.getElementById("btn-wield-stone");if(l&&(l.setAttribute("data-stone-id",e.id),l.style.setProperty("--btn-glow",e.colorHex)),this.moltenMetal){const c=e.index===1?"#FF9FFC":e.colorHex||"#FF9FFC";this.moltenMetal.updateColors("#5227FF",c,"#FFFFFF")}}triggerConvergence(e=!0){if(this.isConvergenceActive)return;this.isConvergenceActive=!0,document.body.classList.add("convergence-mode");const t=document.getElementById("btn-convergence");t&&t.classList.add("active"),e&&He.playConvergenceChord(),this.camera.view&&this.camera.view.enabled&&(this.camera.clearViewOffset(),this.camera.updateProjectionMatrix());const n=this.isMobile()?17:14;tt.to(this.camera.position,{x:0,y:this.isMobile()?.2:.5,z:n,duration:1.8,ease:"power2.inOut"}),tt.to(this.controls.target,{x:0,y:0,z:0,duration:1.8,ease:"power2.inOut",onUpdate:()=>{this.controls&&this.controls.update()}});const i=this.isMobile()?2.1:3.6,r=this.isMobile()?.38:.75;this.stones.forEach((a,o)=>{a.group.visible=!0,a.group.position.set(0,0,0),a.group.scale.set(.1,.1,.1);const l=o/this.stones.length*Math.PI*2,c=Math.cos(l)*i,h=Math.sin(l)*i;tt.to(a.group.position,{x:c,y:h,z:0,duration:1.6,ease:"elastic.out(1, 0.75)"}),tt.to(a.group.scale,{x:r,y:r,z:r,duration:1.2}),tt.to(a.pointLight,{intensity:2.2,duration:1,yoyo:!0,repeat:1})}),tt.killTweensOf(this.stonesContainer.rotation),tt.to(this.stonesContainer.rotation,{z:this.stonesContainer.rotation.z+Math.PI*2,duration:3.5,ease:"power2.inOut",onComplete:()=>{this.endConvergence()}})}endConvergence(){if(!this.isConvergenceActive)return;this.isConvergenceActive=!1,document.body.classList.remove("convergence-mode");const e=document.getElementById("btn-convergence");e&&e.classList.remove("active"),this.updateCameraForViewport(),tt.to(this.stonesContainer.rotation,{x:0,y:0,z:0,duration:1,ease:"power2.out"});const t=this.isMobile()?12:9.8,n=this.isMobile()?.48:1;tt.to(this.camera.position,{x:0,y:0,z:t,duration:1.3,ease:"power3.out"}),tt.to(this.controls.target,{x:0,y:0,z:0,duration:1.3,ease:"power3.out",onUpdate:()=>{this.controls&&this.controls.update()}}),this.stones.forEach((i,r)=>{tt.killTweensOf(i.group.position),tt.killTweensOf(i.group.scale),tt.killTweensOf(i.pointLight),r===this.currentIndex?(i.group.visible=!0,i.pointLight.intensity=1.8,tt.to(i.group.position,{x:0,y:0,z:0,duration:1,ease:"power3.out"}),tt.to(i.group.scale,{x:n,y:n,z:n,duration:1,ease:"power3.out"})):(tt.to(i.group.position,{x:0,y:0,z:0,duration:.8,ease:"power2.in"}),tt.to(i.group.scale,{x:.001,y:.001,z:.001,duration:.8,ease:"power2.in",onComplete:()=>{i.group.visible=!1}}))})}pulseCurrentStone(){const e=this.stones[this.currentIndex];e&&(He.playEnergyPulse(),e.gemMat&&tt.to(e.gemMat,{emissiveIntensity:1.15,duration:.25,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{e.gemMat.emissiveIntensity=.18}}),tt.to(e.pointLight,{intensity:3.8,duration:.25,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{e.pointLight.intensity=1.8}}),tt.to(e.coreMesh.scale,{x:1.4,y:1.4,z:1.4,duration:.35,yoyo:!0,repeat:1,ease:"power2.out"}),e.wireMesh&&e.wireMesh.material&&tt.to(e.wireMesh.material,{opacity:.9,duration:.25,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{e.wireMesh.material.opacity=.45}}),tt.to(this.bloomPass,{strength:.95,duration:.3,yoyo:!0,repeat:1,ease:"power2.out"}))}toggleWireframe(){this.isWireframe=!this.isWireframe,this.stones.forEach(t=>{t.gemMat.wireframe=this.isWireframe,t.wireMesh.visible=!this.isWireframe}),document.getElementById("btn-wireframe").classList.toggle("active",this.isWireframe),He.playClick()}initEventListeners(){window.addEventListener("resize",()=>{const r=window.innerWidth,a=window.innerHeight;this.camera.aspect=r/a,this.camera.updateProjectionMatrix(),this.renderer.setSize(r,a),this.composer.setSize(r,a),this.updateCameraForViewport(),this.controls.target.set(this.stoneStageX,this.stoneStageY,0);const o=this.isMobile()?.48:1,l=this.stones[this.currentIndex];l&&!this.isConvergenceActive&&l.group.scale.set(o,o,o)});const e=document.getElementById("btn-audio");e&&(e.addEventListener("click",()=>{const r=He.toggleMute();e.classList.toggle("audio-unmuted",r),e.classList.toggle("audio-muted",!r),e.classList.toggle("active",r);const a=document.getElementById("m-audio-status");a&&(a.textContent=r?"ACTIVE":"MUTED",a.style.color=r?"#00d2ff":"#a1a1aa")}),e.classList.add("audio-unmuted","active"),e.classList.remove("audio-muted")),document.getElementById("btn-wireframe").addEventListener("click",()=>{this.toggleWireframe()}),document.getElementById("btn-convergence").addEventListener("click",()=>{this.isConvergenceActive?this.endConvergence():this.triggerConvergence(!0)});const t=document.getElementById("btn-pulse");t&&t.addEventListener("click",()=>{this.pulseCurrentStone()});const n=document.getElementById("btn-sound-play");n&&n.addEventListener("click",()=>{He.playStoneChime(Wt[this.currentIndex].id)}),window.addEventListener("keydown",r=>{if(r.target.tagName==="INPUT"||r.target.tagName==="TEXTAREA")return;const a=r.key.toUpperCase();if(a>="1"&&a<="6"){const o=parseInt(a,10)-1;He.playStoneChime(Wt[o].id),this.displayStone(o,!0)}else if(r.code==="ArrowDown"||r.code==="PageDown")r.preventDefault(),this.stepStone(1);else if(r.code==="ArrowUp"||r.code==="PageUp")r.preventDefault(),this.stepStone(-1);else if(r.code==="Space")r.preventDefault(),this.isConvergenceActive?this.endConvergence():this.triggerConvergence(!0);else if(r.code==="Escape")this.isConvergenceActive&&this.endConvergence();else if(a==="P"||a==="S")this.pulseCurrentStone();else if(a==="W")this.toggleWireframe();else if(a==="M"){const o=He.toggleMute(),l=document.getElementById("btn-audio");l&&(l.classList.toggle("audio-unmuted",o),l.classList.toggle("audio-muted",!o),l.classList.toggle("active",o));const c=document.getElementById("m-audio-status");c&&(c.textContent=o?"ACTIVE":"MUTED",c.style.color=o?"#00d2ff":"#a1a1aa")}});const i=()=>{He.init(),He.ctx&&He.ctx.state==="suspended"&&He.ctx.resume(),window.removeEventListener("pointerdown",i),window.removeEventListener("keydown",i),window.removeEventListener("touchstart",i),window.removeEventListener("wheel",i),window.removeEventListener("click",i)};window.addEventListener("pointerdown",i,{once:!0,passive:!0}),window.addEventListener("keydown",i,{once:!0}),window.addEventListener("touchstart",i,{once:!0,passive:!0}),window.addEventListener("wheel",i,{once:!0,passive:!0}),window.addEventListener("click",i,{once:!0}),document.addEventListener("visibilitychange",()=>{document.hidden?He.suspend():He.resume()}),window.addEventListener("pagehide",()=>{He.destroy()}),window.addEventListener("beforeunload",()=>{He.destroy()})}animate(){requestAnimationFrame(()=>this.animate());const e=this.clock.getDelta(),t=this.clock.getElapsedTime();this.starfield&&(this.starfield.rotation.y=t*.006),this.stones.forEach((n,i)=>{n.group.visible&&(n.update(t,e),this.isConvergenceActive||(n.group.position.y=this.stoneStageY+Math.sin(t*2.8)*.16))}),this.controls.update(),this.composer.render()}}window.addEventListener("DOMContentLoaded",()=>{new VM});
