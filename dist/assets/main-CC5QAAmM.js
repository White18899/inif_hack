var tf=Object.defineProperty;var nf=(s,e,t)=>e in s?tf(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var ti=(s,e,t)=>nf(s,typeof e!="symbol"?e+"":e,t);import"./modulepreload-polyfill-B5Qt9EMX.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ll="160",ji={ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sf=0,Hl=1,rf=2,fu=1,af=2,Xn=3,gi=0,$t=1,_n=2,Kn=0,Ss=1,Bt=2,Wl=3,Xl=4,of=5,Ui=100,lf=101,cf=102,ql=103,Yl=104,hf=200,uf=201,df=202,ff=203,Uo=204,No=205,pf=206,mf=207,gf=208,_f=209,xf=210,vf=211,yf=212,Mf=213,Sf=214,Ef=0,bf=1,Tf=2,ca=3,wf=4,Af=5,Cf=6,Rf=7,pu=0,Pf=1,Lf=2,di=0,mu=1,gu=2,_u=3,cl=4,If=5,xu=6,vu=300,As=301,Cs=302,ha=303,Fo=304,wa=306,ar=1e3,An=1001,Oo=1002,Wt=1003,$l=1004,Oa=1005,gn=1006,Df=1007,or=1008,fi=1009,Uf=1010,Nf=1011,hl=1012,yu=1013,oi=1014,li=1015,Zn=1016,Mu=1017,Su=1018,Oi=1020,Ff=1021,Cn=1023,Of=1024,Bf=1025,Bi=1026,Rs=1027,zf=1028,Eu=1029,kf=1030,bu=1031,Tu=1033,Ba=33776,za=33777,ka=33778,Ga=33779,jl=35840,Kl=35841,Zl=35842,Ql=35843,wu=36196,Jl=37492,ec=37496,tc=37808,nc=37809,ic=37810,sc=37811,rc=37812,ac=37813,oc=37814,lc=37815,cc=37816,hc=37817,uc=37818,dc=37819,fc=37820,pc=37821,Va=36492,mc=36494,gc=36495,Gf=36283,_c=36284,xc=36285,vc=36286,Au=3e3,zi=3001,Vf=3200,Hf=3201,Cu=0,Wf=1,xn="",It="srgb",Qn="srgb-linear",ul="display-p3",Aa="display-p3-linear",ua="linear",ht="srgb",da="rec709",fa="p3",Zi=7680,yc=519,Xf=512,qf=513,Yf=514,Ru=515,$f=516,jf=517,Kf=518,Zf=519,Mc=35044,Sc="300 es",Bo=1035,jn=2e3,pa=2001;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],er=Math.PI/180,zo=180/Math.PI;function _r(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[s&255]+Ft[s>>8&255]+Ft[s>>16&255]+Ft[s>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Dt(s,e,t){return Math.max(e,Math.min(t,s))}function Qf(s,e){return(s%e+e)%e}function Ha(s,e,t){return(1-t)*s+t*e}function Ec(s){return(s&s-1)===0&&s!==0}function ko(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ws(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Jf={DEG2RAD:er};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,i,r,a,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],g=i[0],p=i[3],m=i[6],v=i[1],x=i[4],y=i[7],T=i[2],E=i[5],b=i[8];return r[0]=a*g+o*v+l*T,r[3]=a*p+o*x+l*E,r[6]=a*m+o*y+l*b,r[1]=c*g+h*v+d*T,r[4]=c*p+h*x+d*E,r[7]=c*m+h*y+d*b,r[2]=u*g+f*v+_*T,r[5]=u*p+f*x+_*E,r[8]=u*m+f*y+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,_=t*d+n*u+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(i*c-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=u*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wa=new Ke;function Pu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ma(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ep(){const s=ma("canvas");return s.style.display="block",s}const bc={};function tr(s){s in bc||(bc[s]=!0,console.warn(s))}const Tc=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wc=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tr={[Qn]:{transfer:ua,primaries:da,toReference:s=>s,fromReference:s=>s},[It]:{transfer:ht,primaries:da,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Aa]:{transfer:ua,primaries:fa,toReference:s=>s.applyMatrix3(wc),fromReference:s=>s.applyMatrix3(Tc)},[ul]:{transfer:ht,primaries:fa,toReference:s=>s.convertSRGBToLinear().applyMatrix3(wc),fromReference:s=>s.applyMatrix3(Tc).convertLinearToSRGB()}},tp=new Set([Qn,Aa]),rt={enabled:!0,_workingColorSpace:Qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!tp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Tr[e].toReference,i=Tr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Tr[s].primaries},getTransfer:function(s){return s===xn?ua:Tr[s].transfer}};function Es(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qi;class Lu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=ma("canvas")),Qi.width=e.width,Qi.height=e.height;const n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ma("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Es(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Es(t[n]/255)*255):t[n]=Es(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let np=0;class Iu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=_r(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(qa(i[a].image)):r.push(qa(i[a]))}else r=qa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function qa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Lu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ip=0;class jt extends Xi{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=An,i=An,r=gn,a=or,o=Cn,l=fi,c=jt.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=_r(),this.name="",this.source=new Iu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===zi?It:xn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ar:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case Oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ar:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case Oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?zi:Au}set encoding(e){tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===zi?It:xn}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=vu;jt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(f+1)/2,T=(m+1)/2,E=(h+u)/4,b=(d+g)/4,P=(_+p)/4;return x>y&&x>T?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=b/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=P/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=b/r,i=P/r),this.set(n,i,r,t),this}let v=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(d-g)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sp extends Xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(tr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===zi?It:xn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Iu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends sp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Du extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rp extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],f=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==u||c!==f||h!==_){let p=1-o;const m=l*u+c*f+h*_+d*g,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const T=Math.sqrt(x),E=Math.atan2(T,m*v);p=Math.sin(p*E)/T,o=Math.sin(o*E)/T}const y=o*v;if(l=l*p+u*y,c=c*p+f*y,h=h*p+_*y,d=d*p+g*y,p===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+h*d+l*f-c*u,e[t+1]=l*_+h*u+c*d-o*f,e[t+2]=c*_+h*f+o*u-l*d,e[t+3]=h*_-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new I,Ac=new Wi;class xr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Ar.subVectors(this.max,Xs),Ji.subVectors(e.a,Xs),es.subVectors(e.b,Xs),ts.subVectors(e.c,Xs),ni.subVectors(es,Ji),ii.subVectors(ts,es),Ei.subVectors(Ji,ts);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ei.z,Ei.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ei.z,0,-Ei.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ei.y,Ei.x,0];return!$a(t,Ji,es,ts,Ar)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,Ji,es,ts,Ar))?!1:(Cr.crossVectors(ni,ii),t=[Cr.x,Cr.y,Cr.z],$a(t,Ji,es,ts,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new I,new I,new I,new I,new I,new I,new I,new I],Mn=new I,wr=new xr,Ji=new I,es=new I,ts=new I,ni=new I,ii=new I,Ei=new I,Xs=new I,Ar=new I,Cr=new I,bi=new I;function $a(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){bi.fromArray(s,r);const o=i.x*Math.abs(bi.x)+i.y*Math.abs(bi.y)+i.z*Math.abs(bi.z),l=e.dot(bi),c=t.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ap=new xr,qs=new I,ja=new I;class vr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ap.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const t=qs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(qs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(ja)),this.expandByPoint(qs.copy(e.center).sub(ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new I,Ka=new I,Rr=new I,si=new I,Za=new I,Pr=new I,Qa=new I;class yr{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ka.copy(e).add(t).multiplyScalar(.5),Rr.copy(t).sub(e).normalize(),si.copy(this.origin).sub(Ka);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Rr),o=si.dot(this.direction),l=-si.dot(Rr),c=si.lengthSq(),h=Math.abs(1-a*a);let d,u,f,_;if(h>0)if(d=a*l-o,u=a*o-l,_=r*h,d>=0)if(u>=-_)if(u<=_){const g=1/h;d*=g,u*=g,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ka).addScaledVector(Rr,u),f}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,r){Za.subVectors(t,e),Pr.subVectors(n,e),Qa.crossVectors(Za,Pr);let a=this.direction.dot(Qa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,e);const l=o*this.direction.dot(Pr.crossVectors(si,Pr));if(l<0)return null;const c=o*this.direction.dot(Za.cross(si));if(c<0||l+c>a)return null;const h=-o*si.dot(Qa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,i,r,a,o,l,c,h,d,u,f,_,g,p){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,f,_,g,p)}set(e,t,n,i,r,a,o,l,c,h,d,u,f,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),a=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,_=o*h,g=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+_*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,_=c*h,g=c*d;t[0]=u+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,_=c*h,g=c*d;t[0]=u-g*o,t[4]=-a*d,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=g-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,_=o*h,g=o*d;t[0]=l*h,t[4]=_*c-f,t[8]=u*c+g,t[1]=l*d,t[5]=g*c+u,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=g-u*d,t[8]=_*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+_,t[10]=u-g*d}else if(e.order==="XZY"){const u=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+g,t[5]=a*h,t[9]=f*d-_,t[2]=_*d-f,t[6]=o*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(op,e,lp)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ri.crossVectors(n,nn),ri.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ri.crossVectors(n,nn)),ri.normalize(),Lr.crossVectors(nn,ri),i[0]=ri.x,i[4]=Lr.x,i[8]=nn.x,i[1]=ri.y,i[5]=Lr.y,i[9]=nn.y,i[2]=ri.z,i[6]=Lr.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],v=n[3],x=n[7],y=n[11],T=n[15],E=i[0],b=i[4],P=i[8],M=i[12],A=i[1],U=i[5],z=i[9],q=i[13],C=i[2],N=i[6],O=i[10],G=i[14],V=i[3],B=i[7],Z=i[11],ee=i[15];return r[0]=a*E+o*A+l*C+c*V,r[4]=a*b+o*U+l*N+c*B,r[8]=a*P+o*z+l*O+c*Z,r[12]=a*M+o*q+l*G+c*ee,r[1]=h*E+d*A+u*C+f*V,r[5]=h*b+d*U+u*N+f*B,r[9]=h*P+d*z+u*O+f*Z,r[13]=h*M+d*q+u*G+f*ee,r[2]=_*E+g*A+p*C+m*V,r[6]=_*b+g*U+p*N+m*B,r[10]=_*P+g*z+p*O+m*Z,r[14]=_*M+g*q+p*G+m*ee,r[3]=v*E+x*A+y*C+T*V,r[7]=v*b+x*U+y*N+T*B,r[11]=v*P+x*z+y*O+T*Z,r[15]=v*M+x*q+y*G+T*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+r*l*d-i*c*d-r*o*u+n*c*u+i*o*f-n*l*f)+g*(+t*l*f-t*c*u+r*a*u-i*a*f+i*c*h-r*l*h)+p*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+m*(-i*o*h-t*l*d+t*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],_=e[12],g=e[13],p=e[14],m=e[15],v=d*p*c-g*u*c+g*l*f-o*p*f-d*l*m+o*u*m,x=_*u*c-h*p*c-_*l*f+a*p*f+h*l*m-a*u*m,y=h*g*c-_*d*c+_*o*f-a*g*f-h*o*m+a*d*m,T=_*d*l-h*g*l-_*o*u+a*g*u+h*o*p-a*d*p,E=t*v+n*x+i*y+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=v*b,e[1]=(g*u*r-d*p*r-g*i*f+n*p*f+d*i*m-n*u*m)*b,e[2]=(o*p*r-g*l*r+g*i*c-n*p*c-o*i*m+n*l*m)*b,e[3]=(d*l*r-o*u*r-d*i*c+n*u*c+o*i*f-n*l*f)*b,e[4]=x*b,e[5]=(h*p*r-_*u*r+_*i*f-t*p*f-h*i*m+t*u*m)*b,e[6]=(_*l*r-a*p*r-_*i*c+t*p*c+a*i*m-t*l*m)*b,e[7]=(a*u*r-h*l*r+h*i*c-t*u*c-a*i*f+t*l*f)*b,e[8]=y*b,e[9]=(_*d*r-h*g*r-_*n*f+t*g*f+h*n*m-t*d*m)*b,e[10]=(a*g*r-_*o*r+_*n*c-t*g*c-a*n*m+t*o*m)*b,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*f-t*o*f)*b,e[12]=T*b,e[13]=(h*g*i-_*d*i+_*n*u-t*g*u-h*n*p+t*d*p)*b,e[14]=(_*o*i-a*g*i-_*n*l+t*g*l+a*n*p-t*o*p)*b,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*u+t*o*u)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,_=r*d,g=a*h,p=a*d,m=o*d,v=l*c,x=l*h,y=l*d,T=n.x,E=n.y,b=n.z;return i[0]=(1-(g+m))*T,i[1]=(f+y)*T,i[2]=(_-x)*T,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(u+m))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(_+x)*b,i[9]=(p-v)*b,i[10]=(1-(u+g))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ns.set(i[0],i[1],i[2]).length();const a=ns.set(i[4],i[5],i[6]).length(),o=ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Sn.copy(this);const c=1/r,h=1/a,d=1/o;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,t.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=jn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let f,_;if(o===jn)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===pa)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=jn){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(a-r),u=(t+e)*c,f=(n+i)*h;let _,g;if(o===jn)_=(a+r)*d,g=-2*d;else if(o===pa)_=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ns=new I,Sn=new vt,op=new I(0,0,0),lp=new I(1,1,1),ri=new I,Lr=new I,nn=new I,Cc=new vt,Rc=new Wi;let Uu=class Nu{constructor(e=0,t=0,n=0,i=Nu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Uu.DEFAULT_ORDER="XYZ";class dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cp=0;const Pc=new I,is=new Wi,Gn=new vt,Ir=new I,Ys=new I,hp=new I,up=new Wi,Lc=new I(1,0,0),Ic=new I(0,1,0),Dc=new I(0,0,1),dp={type:"added"},fp={type:"removed"};class Rt extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new I,t=new Uu,n=new Wi,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ke}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Lc,e)}rotateY(e){return this.rotateOnAxis(Ic,e)}rotateZ(e){return this.rotateOnAxis(Dc,e)}translateOnAxis(e,t){return Pc.copy(e).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lc,e)}translateY(e){return this.translateOnAxis(Ic,e)}translateZ(e){return this.translateOnAxis(Dc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ir.copy(e):Ir.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Ys,Ir,this.up):Gn.lookAt(Ir,Ys,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),is.setFromRotationMatrix(Gn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(dp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,hp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,up,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Rt.DEFAULT_UP=new I(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new I,Vn=new I,Ja=new I,Hn=new I,ss=new I,rs=new I,Uc=new I,eo=new I,to=new I,no=new I;let Dr=!1,gs=class Li{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),En.subVectors(e,t),i.cross(En);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){En.subVectors(i,t),Vn.subVectors(n,t),Ja.subVectors(e,t);const a=En.dot(En),o=En.dot(Vn),l=En.dot(Ja),c=Vn.dot(Vn),h=Vn.dot(Ja),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getUV(e,t,n,i,r,a,o,l){return Dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dr=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static isFrontFacing(e,t,n,i){return En.subVectors(n,t),Vn.subVectors(e,t),En.cross(Vn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),En.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dr=!0),Li.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Li.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;ss.subVectors(i,n),rs.subVectors(r,n),eo.subVectors(e,n);const l=ss.dot(eo),c=rs.dot(eo);if(l<=0&&c<=0)return t.copy(n);to.subVectors(e,i);const h=ss.dot(to),d=rs.dot(to);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ss,a);no.subVectors(e,r);const f=ss.dot(no),_=rs.dot(no);if(_>=0&&f<=_)return t.copy(r);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(rs,o);const p=h*_-f*d;if(p<=0&&d-h>=0&&f-_>=0)return Uc.subVectors(r,i),o=(d-h)/(d-h+(f-_)),t.copy(i).addScaledVector(Uc,o);const m=1/(p+g+u);return a=g*m,o=u*m,t.copy(n).addScaledVector(ss,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};const Fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function io(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=Qf(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=io(a,r,e+1/3),this.g=io(a,r,e),this.b=io(a,r,e-1/3)}return rt.toWorkingColorSpace(this,i),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=Fu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}copyLinearToSRGB(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return rt.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Dt(Ot.r*255,0,255))*65536+Math.round(Dt(Ot.g*255,0,255))*256+Math.round(Dt(Ot.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,r=Ot.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=It){rt.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Ur);const n=Ha(ai.h,Ur.h,t),i=Ha(ai.s,Ur.s,t),r=Ha(ai.l,Ur.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Pe;Pe.NAMES=Fu;let pp=0;class qi extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=_r(),this.name="",this.type="Material",this.blending=Ss,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uo,this.blendDst=No,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uo&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ca&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wn extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new I,Nr=new Te;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ws(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mc&&(e.usage=this.usage),e}}class Ou extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bu extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mp=0;const pn=new vt,so=new Rt,as=new I,sn=new xr,$s=new xr,Ct=new I;class Mt extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pu(e)?Bu:Ou)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return so.lookAt(e),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(sn.min,$s.min),sn.expandByPoint(Ct),Ct.addVectors(sn.max,$s.max),sn.expandByPoint(Ct)):(sn.expandByPoint($s.min),sn.expandByPoint($s.max))}sn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ct.fromBufferAttribute(o,c),l&&(as.fromBufferAttribute(e,c),Ct.add(as)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<o;A++)c[A]=new I,h[A]=new I;const d=new I,u=new I,f=new I,_=new Te,g=new Te,p=new Te,m=new I,v=new I;function x(A,U,z){d.fromArray(i,A*3),u.fromArray(i,U*3),f.fromArray(i,z*3),_.fromArray(a,A*2),g.fromArray(a,U*2),p.fromArray(a,z*2),u.sub(d),f.sub(d),g.sub(_),p.sub(_);const q=1/(g.x*p.y-p.x*g.y);isFinite(q)&&(m.copy(u).multiplyScalar(p.y).addScaledVector(f,-g.y).multiplyScalar(q),v.copy(f).multiplyScalar(g.x).addScaledVector(u,-p.x).multiplyScalar(q),c[A].add(m),c[U].add(m),c[z].add(m),h[A].add(v),h[U].add(v),h[z].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let A=0,U=y.length;A<U;++A){const z=y[A],q=z.start,C=z.count;for(let N=q,O=q+C;N<O;N+=3)x(n[N+0],n[N+1],n[N+2])}const T=new I,E=new I,b=new I,P=new I;function M(A){b.fromArray(r,A*3),P.copy(b);const U=c[A];T.copy(U),T.sub(b.multiplyScalar(b.dot(U))).normalize(),E.crossVectors(P,U);const q=E.dot(h[A])<0?-1:1;l[A*4]=T.x,l[A*4+1]=T.y,l[A*4+2]=T.z,l[A*4+3]=q}for(let A=0,U=y.length;A<U;++A){const z=y[A],q=z.start,C=z.count;for(let N=q,O=q+C;N<O;N+=3)M(n[N+0]),M(n[N+1]),M(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){const _=e.getX(u+0),g=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let m=0;m<h;m++)u[_++]=c[f++]}return new Kt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nc=new vt,Ti=new yr,Fr=new vr,Fc=new I,os=new I,ls=new I,cs=new I,ro=new I,Or=new I,Br=new Te,zr=new Te,kr=new Te,Oc=new I,Bc=new I,zc=new I,Gr=new I,Vr=new I;let Et=class extends Rt{constructor(e=new Mt,t=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Or.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(ro.fromBufferAttribute(d,e),a?Or.addScaledVector(ro,h):Or.addScaledVector(ro.sub(t),h))}t.add(Or)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!(Fr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Fr,Fc)===null||Ti.origin.distanceToSquared(Fc)>(e.far-e.near)**2))&&(Nc.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(Nc),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const p=u[_],m=a[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,T=x;y<T;y+=3){const E=o.getX(y),b=o.getX(y+1),P=o.getX(y+2);i=Hr(this,m,e,n,c,h,d,E,b,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const v=o.getX(p),x=o.getX(p+1),y=o.getX(p+2);i=Hr(this,a,e,n,c,h,d,v,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const p=u[_],m=a[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,T=x;y<T;y+=3){const E=y,b=y+1,P=y+2;i=Hr(this,m,e,n,c,h,d,E,b,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const v=p,x=p+1,y=p+2;i=Hr(this,a,e,n,c,h,d,v,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function gp(s,e,t,n,i,r,a,o){let l;if(e.side===$t?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===gi,o),l===null)return null;Vr.copy(o),Vr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Vr);return c<t.near||c>t.far?null:{distance:c,point:Vr.clone(),object:s}}function Hr(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,os),s.getVertexPosition(l,ls),s.getVertexPosition(c,cs);const h=gp(s,e,t,n,os,ls,cs,Gr);if(h){i&&(Br.fromBufferAttribute(i,o),zr.fromBufferAttribute(i,l),kr.fromBufferAttribute(i,c),h.uv=gs.getInterpolation(Gr,os,ls,cs,Br,zr,kr,new Te)),r&&(Br.fromBufferAttribute(r,o),zr.fromBufferAttribute(r,l),kr.fromBufferAttribute(r,c),h.uv1=gs.getInterpolation(Gr,os,ls,cs,Br,zr,kr,new Te),h.uv2=h.uv1),a&&(Oc.fromBufferAttribute(a,o),Bc.fromBufferAttribute(a,l),zc.fromBufferAttribute(a,c),h.normal=gs.getInterpolation(Gr,os,ls,cs,Oc,Bc,zc,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};gs.getNormal(os,ls,cs,d.normal),h.face=d}return h}class Os extends Mt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(d,2));function _(g,p,m,v,x,y,T,E,b,P,M){const A=y/b,U=T/P,z=y/2,q=T/2,C=E/2,N=b+1,O=P+1;let G=0,V=0;const B=new I;for(let Z=0;Z<O;Z++){const ee=Z*U-q;for(let Q=0;Q<N;Q++){const H=Q*A-z;B[g]=H*v,B[p]=ee*x,B[m]=C,c.push(B.x,B.y,B.z),B[g]=0,B[p]=0,B[m]=E>0?1:-1,h.push(B.x,B.y,B.z),d.push(Q/b),d.push(1-Z/P),G+=1}}for(let Z=0;Z<P;Z++)for(let ee=0;ee<b;ee++){const Q=u+ee+N*Z,H=u+ee+N*(Z+1),K=u+(ee+1)+N*(Z+1),ae=u+(ee+1)+N*Z;l.push(Q,H,ae),l.push(H,K,ae),V+=6}o.addGroup(f,V,M),f+=V,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Vt(s){const e={};for(let t=0;t<s.length;t++){const n=Ps(s[t]);for(const i in n)e[i]=n[i]}return e}function _p(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function zu(s){return s.getRenderTarget()===null?s.outputColorSpace:rt.workingColorSpace}const lr={clone:Ps,merge:Vt};var xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yt extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=_p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ku extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class an extends ku{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hs=-90,us=1;class yp extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new an(hs,us,e,t);i.layers=this.layers,this.add(i);const r=new an(hs,us,e,t);r.layers=this.layers,this.add(r);const a=new an(hs,us,e,t);a.layers=this.layers,this.add(a);const o=new an(hs,us,e,t);o.layers=this.layers,this.add(o);const l=new an(hs,us,e,t);l.layers=this.layers,this.add(l);const c=new an(hs,us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Gu extends jt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:As,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mp extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(tr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===zi?It:xn),this.texture=new Gu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Os(5,5,5),r=new Yt({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:Kn});r.uniforms.tEquirect.value=t;const a=new Et(i,r),o=t.minFilter;return t.minFilter===or&&(t.minFilter=gn),new yp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const ao=new I,Sp=new I,Ep=new Ke;class Yn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ao.subVectors(n,t).cross(Sp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ao),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ep.getNormalMatrix(e),i=this.coplanarPoint(ao).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new vr,Wr=new I;class fl{constructor(e=new Yn,t=new Yn,n=new Yn,i=new Yn,r=new Yn,a=new Yn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],_=i[9],g=i[10],p=i[11],m=i[12],v=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-r,u-c,p-f,y-m).normalize(),n[1].setComponents(l+r,u+c,p+f,y+m).normalize(),n[2].setComponents(l+a,u+h,p+_,y+v).normalize(),n[3].setComponents(l-a,u-h,p-_,y-v).normalize(),n[4].setComponents(l-o,u-d,p-g,y-x).normalize(),t===jn)n[5].setComponents(l+o,u+d,p+g,y+x).normalize();else if(t===pa)n[5].setComponents(o,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Wr.x=i.normal.x>0?e.max.x:e.min.x,Wr.y=i.normal.y>0?e.max.y:e.min.y,Wr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vu(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function bp(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,f=d.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=s.SHORT;else if(d instanceof Uint32Array)g=s.UNSIGNED_INT;else if(d instanceof Int32Array)g=s.INT;else if(d instanceof Int8Array)g=s.BYTE;else if(d instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,d){const u=h.array,f=h._updateRange,_=h.updateRanges;if(s.bindBuffer(d,c),f.count===-1&&_.length===0&&s.bufferSubData(d,0,u),_.length!==0){for(let g=0,p=_.length;g<p;g++){const m=_[g];t?s.bufferSubData(d,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count):s.bufferSubData(d,m.start*u.BYTES_PER_ELEMENT,u.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,i(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}class Ca extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],_=[],g=[],p=[];for(let m=0;m<h;m++){const v=m*u-a;for(let x=0;x<c;x++){const y=x*d-r;_.push(y,-v,0),g.push(0,0,1),p.push(x/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const x=v+c*m,y=v+c*(m+1),T=v+1+c*(m+1),E=v+1+c*m;f.push(x,y,E),f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new at(_,3)),this.setAttribute("normal",new at(g,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tp=`#ifdef USE_ALPHAHASH
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
}`,$e={alphahash_fragment:Tp,alphahash_pars_fragment:wp,alphamap_fragment:Ap,alphamap_pars_fragment:Cp,alphatest_fragment:Rp,alphatest_pars_fragment:Pp,aomap_fragment:Lp,aomap_pars_fragment:Ip,batching_pars_vertex:Dp,batching_vertex:Up,begin_vertex:Np,beginnormal_vertex:Fp,bsdfs:Op,iridescence_fragment:Bp,bumpmap_pars_fragment:zp,clipping_planes_fragment:kp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Hp,color_fragment:Wp,color_pars_fragment:Xp,color_pars_vertex:qp,color_vertex:Yp,common:$p,cube_uv_reflection_fragment:jp,defaultnormal_vertex:Kp,displacementmap_pars_vertex:Zp,displacementmap_vertex:Qp,emissivemap_fragment:Jp,emissivemap_pars_fragment:em,colorspace_fragment:tm,colorspace_pars_fragment:nm,envmap_fragment:im,envmap_common_pars_fragment:sm,envmap_pars_fragment:rm,envmap_pars_vertex:am,envmap_physical_pars_fragment:xm,envmap_vertex:om,fog_vertex:lm,fog_pars_vertex:cm,fog_fragment:hm,fog_pars_fragment:um,gradientmap_pars_fragment:dm,lightmap_fragment:fm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:_m,lights_toon_fragment:vm,lights_toon_pars_fragment:ym,lights_phong_fragment:Mm,lights_phong_pars_fragment:Sm,lights_physical_fragment:Em,lights_physical_pars_fragment:bm,lights_fragment_begin:Tm,lights_fragment_maps:wm,lights_fragment_end:Am,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Rm,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Lm,map_fragment:Im,map_pars_fragment:Dm,map_particle_fragment:Um,map_particle_pars_fragment:Nm,metalnessmap_fragment:Fm,metalnessmap_pars_fragment:Om,morphcolor_vertex:Bm,morphnormal_vertex:zm,morphtarget_pars_vertex:km,morphtarget_vertex:Gm,normal_fragment_begin:Vm,normal_fragment_maps:Hm,normal_pars_fragment:Wm,normal_pars_vertex:Xm,normal_vertex:qm,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:Km,iridescence_pars_fragment:Zm,opaque_fragment:Qm,packing:Jm,premultiplied_alpha_fragment:eg,project_vertex:tg,dithering_fragment:ng,dithering_pars_fragment:ig,roughnessmap_fragment:sg,roughnessmap_pars_fragment:rg,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:og,shadowmap_vertex:lg,shadowmask_pars_fragment:cg,skinbase_vertex:hg,skinning_pars_vertex:ug,skinning_vertex:dg,skinnormal_vertex:fg,specularmap_fragment:pg,specularmap_pars_fragment:mg,tonemapping_fragment:gg,tonemapping_pars_fragment:_g,transmission_fragment:xg,transmission_pars_fragment:vg,uv_pars_fragment:yg,uv_pars_vertex:Mg,uv_vertex:Sg,worldpos_vertex:Eg,background_vert:bg,background_frag:Tg,backgroundCube_vert:wg,backgroundCube_frag:Ag,cube_vert:Cg,cube_frag:Rg,depth_vert:Pg,depth_frag:Lg,distanceRGBA_vert:Ig,distanceRGBA_frag:Dg,equirect_vert:Ug,equirect_frag:Ng,linedashed_vert:Fg,linedashed_frag:Og,meshbasic_vert:Bg,meshbasic_frag:zg,meshlambert_vert:kg,meshlambert_frag:Gg,meshmatcap_vert:Vg,meshmatcap_frag:Hg,meshnormal_vert:Wg,meshnormal_frag:Xg,meshphong_vert:qg,meshphong_frag:Yg,meshphysical_vert:$g,meshphysical_frag:jg,meshtoon_vert:Kg,meshtoon_frag:Zg,points_vert:Qg,points_frag:Jg,shadow_vert:e0,shadow_frag:t0,sprite_vert:n0,sprite_frag:i0},he={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Dn={basic:{uniforms:Vt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Vt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Pe(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Vt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Vt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Vt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Pe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Vt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Vt([he.points,he.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Vt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Vt([he.common,he.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Vt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Vt([he.sprite,he.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Vt([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Vt([he.lights,he.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Dn.physical={uniforms:Vt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Xr={r:0,b:0,g:0};function s0(s,e,t,n,i,r,a){const o=new Pe(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function _(p,m){let v=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x===null?g(o,l):x&&x.isColor&&(g(x,1),v=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===wa)?(h===void 0&&(h=new Et(new Os(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:Ps(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=rt.getTransfer(x.colorSpace)!==ht,(d!==x||u!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Et(new Ca(2,2),new Yt({name:"BackgroundMaterial",uniforms:Ps(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=rt.getTransfer(x.colorSpace)!==ht,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,m){p.getRGB(Xr,zu(s)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(o,l)},render:_}}function r0(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null);let c=l,h=!1;function d(C,N,O,G,V){let B=!1;if(a){const Z=g(G,O,N);c!==Z&&(c=Z,f(c.object)),B=m(C,G,O,V),B&&v(C,G,O,V)}else{const Z=N.wireframe===!0;(c.geometry!==G.id||c.program!==O.id||c.wireframe!==Z)&&(c.geometry=G.id,c.program=O.id,c.wireframe=Z,B=!0)}V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(B||h)&&(h=!1,P(C,N,O,G),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(C){return n.isWebGL2?s.bindVertexArray(C):r.bindVertexArrayOES(C)}function _(C){return n.isWebGL2?s.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function g(C,N,O){const G=O.wireframe===!0;let V=o[C.id];V===void 0&&(V={},o[C.id]=V);let B=V[N.id];B===void 0&&(B={},V[N.id]=B);let Z=B[G];return Z===void 0&&(Z=p(u()),B[G]=Z),Z}function p(C){const N=[],O=[],G=[];for(let V=0;V<i;V++)N[V]=0,O[V]=0,G[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:G,object:C,attributes:{},index:null}}function m(C,N,O,G){const V=c.attributes,B=N.attributes;let Z=0;const ee=O.getAttributes();for(const Q in ee)if(ee[Q].location>=0){const K=V[Q];let ae=B[Q];if(ae===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor)),K===void 0||K.attribute!==ae||ae&&K.data!==ae.data)return!0;Z++}return c.attributesNum!==Z||c.index!==G}function v(C,N,O,G){const V={},B=N.attributes;let Z=0;const ee=O.getAttributes();for(const Q in ee)if(ee[Q].location>=0){let K=B[Q];K===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(K=C.instanceColor));const ae={};ae.attribute=K,K&&K.data&&(ae.data=K.data),V[Q]=ae,Z++}c.attributes=V,c.attributesNum=Z,c.index=G}function x(){const C=c.newAttributes;for(let N=0,O=C.length;N<O;N++)C[N]=0}function y(C){T(C,0)}function T(C,N){const O=c.newAttributes,G=c.enabledAttributes,V=c.attributeDivisors;O[C]=1,G[C]===0&&(s.enableVertexAttribArray(C),G[C]=1),V[C]!==N&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,N),V[C]=N)}function E(){const C=c.newAttributes,N=c.enabledAttributes;for(let O=0,G=N.length;O<G;O++)N[O]!==C[O]&&(s.disableVertexAttribArray(O),N[O]=0)}function b(C,N,O,G,V,B,Z){Z===!0?s.vertexAttribIPointer(C,N,O,V,B):s.vertexAttribPointer(C,N,O,G,V,B)}function P(C,N,O,G){if(n.isWebGL2===!1&&(C.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const V=G.attributes,B=O.getAttributes(),Z=N.defaultAttributeValues;for(const ee in B){const Q=B[ee];if(Q.location>=0){let H=V[ee];if(H===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(H=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(H=C.instanceColor)),H!==void 0){const K=H.normalized,ae=H.itemSize,Se=t.get(H);if(Se===void 0)continue;const ye=Se.buffer,Re=Se.type,Ce=Se.bytesPerElement,me=n.isWebGL2===!0&&(Re===s.INT||Re===s.UNSIGNED_INT||H.gpuType===yu);if(H.isInterleavedBufferAttribute){const Oe=H.data,W=Oe.stride,Ze=H.offset;if(Oe.isInstancedInterleavedBuffer){for(let oe=0;oe<Q.locationSize;oe++)T(Q.location+oe,Oe.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let oe=0;oe<Q.locationSize;oe++)y(Q.location+oe);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let oe=0;oe<Q.locationSize;oe++)b(Q.location+oe,ae/Q.locationSize,Re,K,W*Ce,(Ze+ae/Q.locationSize*oe)*Ce,me)}else{if(H.isInstancedBufferAttribute){for(let Oe=0;Oe<Q.locationSize;Oe++)T(Q.location+Oe,H.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Oe=0;Oe<Q.locationSize;Oe++)y(Q.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let Oe=0;Oe<Q.locationSize;Oe++)b(Q.location+Oe,ae/Q.locationSize,Re,K,ae*Ce,ae/Q.locationSize*Oe*Ce,me)}}else if(Z!==void 0){const K=Z[ee];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(Q.location,K);break;case 3:s.vertexAttrib3fv(Q.location,K);break;case 4:s.vertexAttrib4fv(Q.location,K);break;default:s.vertexAttrib1fv(Q.location,K)}}}}E()}function M(){z();for(const C in o){const N=o[C];for(const O in N){const G=N[O];for(const V in G)_(G[V].object),delete G[V];delete N[O]}delete o[C]}}function A(C){if(o[C.id]===void 0)return;const N=o[C.id];for(const O in N){const G=N[O];for(const V in G)_(G[V].object),delete G[V];delete N[O]}delete o[C.id]}function U(C){for(const N in o){const O=o[N];if(O[C.id]===void 0)continue;const G=O[C.id];for(const V in G)_(G[V].object),delete G[V];delete O[C.id]}}function z(){q(),h=!0,c!==l&&(c=l,f(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:z,resetDefaultState:q,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:y,disableUnusedAttributes:E}}function a0(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,u){if(u===0)return;let f,_;if(i)f=s,_="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](r,h,d,u),t.update(d,r,u)}function c(h,d,u){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<u;_++)this.render(h[_],d[_]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=d[g];t.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function o0(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,y=a||e.has("OES_texture_float"),T=x&&y,E=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:E}}function l0(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Yn,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!i||_===null||_.length===0||r&&!p)r?h(null):c();else{const v=r?0:n,x=v*4;let y=m.clippingState||null;l.value=y,y=h(_,u,x,f);for(let T=0;T!==x;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=f+g*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,y=f;x!==g;++x,y+=4)a.copy(d[x]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function c0(s){let e=new WeakMap;function t(a,o){return o===ha?a.mapping=As:o===Fo&&(a.mapping=Cs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ha||o===Fo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Mp(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class pl extends ku{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _s=4,kc=[.125,.215,.35,.446,.526,.582],Ni=20,oo=new pl,Gc=new Pe;let lo=null,co=0,ho=0;const Ii=(1+Math.sqrt(5))/2,ds=1/Ii,Vc=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Ii,ds),new I(0,Ii,-ds),new I(ds,0,Ii),new I(-ds,0,Ii),new I(Ii,ds,0),new I(-Ii,ds,0)];class Go{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lo,co,ho),e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Zn,format:Cn,colorSpace:Qn,depthBuffer:!1},i=Hc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h0(r)),this._blurMaterial=u0(r,e,t)}return i}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,n,i){const o=new an(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Gc),h.toneMapping=di,h.autoClear=!1;const f=new wn({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),_=new Et(new Os,f);let g=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,g=!0):(f.color.copy(Gc),g=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):v===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;qr(i,v*x,m>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===As||e.mapping===Cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Et(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;qr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,oo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Vc[(i-1)%Vc.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Et(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ni-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):Ni;p>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ni}`);const m=[];let v=0;for(let b=0;b<Ni;++b){const P=b/g,M=Math.exp(-P*P/2);m.push(M),b===0?v+=M:b<p&&(v+=2*M)}for(let b=0;b<m.length;b++)m[b]=m[b]/v;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=_,u.mipInt.value=x-n;const y=this._sizeLods[i],T=3*y*(i>x-_s?i-x+_s:0),E=4*(this._cubeSize-y);qr(t,T,E,3*y,2*y),l.setRenderTarget(t),l.render(d,oo)}}function h0(s){const e=[],t=[],n=[];let i=s;const r=s-_s+1+kc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-_s?l=kc[a-s+_s-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,_=6,g=3,p=2,m=1,v=new Float32Array(g*_*f),x=new Float32Array(p*_*f),y=new Float32Array(m*_*f);for(let E=0;E<f;E++){const b=E%3*2/3-1,P=E>2?0:-1,M=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];v.set(M,g*_*E),x.set(u,p*_*E);const A=[E,E,E,E,E,E];y.set(A,m*_*E)}const T=new Mt;T.setAttribute("position",new Kt(v,g)),T.setAttribute("uv",new Kt(x,p)),T.setAttribute("faceIndex",new Kt(y,m)),e.push(T),i>_s&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hc(s,e,t){const n=new Pn(s,e,t);return n.texture.mapping=wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function u0(s,e,t){const n=new Float32Array(Ni),i=new I(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ml(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Wc(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Xc(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function ml(){return`

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
	`}function d0(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ha||l===Fo,h=l===As||l===Cs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Go(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Go(s));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function f0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function p0(s,e,t,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);for(const _ in u.morphAttributes){const g=u.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const _ in u)e.update(u[_],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const g=f[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],s.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,_=d.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let x=0,y=v.length;x<y;x+=3){const T=v[x+0],E=v[x+1],b=v[x+2];u.push(T,E,E,b,b,T)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const T=x+0,E=x+1,b=x+2;u.push(T,E,E,b,b,T)}}else return;const p=new(Pu(u)?Bu:Ou)(u,1);p.version=g;const m=r.get(d);m&&e.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function m0(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,_){s.drawElements(r,_,o,f*l),t.update(_,r,1)}function d(f,_,g){if(g===0)return;let p,m;if(i)p=s,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,_,o,f*l,g),t.update(_,r,g)}function u(f,_,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<g;m++)this.render(f[m]/l,_[m]);else{p.multiDrawElementsWEBGL(r,_,0,o,f,0,g);let m=0;for(let v=0;v<g;v++)m+=_[v];t.update(m,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function g0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _0(s,e){return s[0]-e[0]}function x0(s,e){return Math.abs(e[1])-Math.abs(s[1])}function v0(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new ft,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=f!==void 0?f.length:0;let g=r.get(h);if(g===void 0||g.count!==_){let C=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",C)};g!==void 0&&g.texture.dispose();const v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let P=0;v===!0&&(P=1),x===!0&&(P=2),y===!0&&(P=3);let M=h.attributes.position.count*P,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const U=new Float32Array(M*A*4*_),z=new Du(U,M,A,_);z.type=li,z.needsUpdate=!0;const q=P*4;for(let N=0;N<_;N++){const O=T[N],G=E[N],V=b[N],B=M*A*4*N;for(let Z=0;Z<O.count;Z++){const ee=Z*q;v===!0&&(a.fromBufferAttribute(O,Z),U[B+ee+0]=a.x,U[B+ee+1]=a.y,U[B+ee+2]=a.z,U[B+ee+3]=0),x===!0&&(a.fromBufferAttribute(G,Z),U[B+ee+4]=a.x,U[B+ee+5]=a.y,U[B+ee+6]=a.z,U[B+ee+7]=0),y===!0&&(a.fromBufferAttribute(V,Z),U[B+ee+8]=a.x,U[B+ee+9]=a.y,U[B+ee+10]=a.z,U[B+ee+11]=V.itemSize===4?a.w:1)}}g={count:_,texture:z,size:new Te(M,A)},r.set(h,g),h.addEventListener("dispose",C)}let p=0;for(let v=0;v<u.length;v++)p+=u[v];const m=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",m),d.getUniforms().setValue(s,"morphTargetInfluences",u),d.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const f=u===void 0?0:u.length;let _=n[h.id];if(_===void 0||_.length!==f){_=[];for(let x=0;x<f;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<f;x++){const y=_[x];y[0]=x,y[1]=u[x]}_.sort(x0);for(let x=0;x<8;x++)x<f&&_[x][1]?(o[x][0]=_[x][0],o[x][1]=_[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(_0);const g=h.morphAttributes.position,p=h.morphAttributes.normal;let m=0;for(let x=0;x<8;x++){const y=o[x],T=y[0],E=y[1];T!==Number.MAX_SAFE_INTEGER&&E?(g&&h.getAttribute("morphTarget"+x)!==g[T]&&h.setAttribute("morphTarget"+x,g[T]),p&&h.getAttribute("morphNormal"+x)!==p[T]&&h.setAttribute("morphNormal"+x,p[T]),i[x]=E,m+=E):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const v=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function y0(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Hu extends jt{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Bi,h!==Bi&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bi&&(n=oi),n===void 0&&h===Rs&&(n=Oi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Wu=new jt,Xu=new Hu(1,1);Xu.compareFunction=Ru;const qu=new Du,Yu=new rp,$u=new Gu,qc=[],Yc=[],$c=new Float32Array(16),jc=new Float32Array(9),Kc=new Float32Array(4);function Bs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=qc[i];if(r===void 0&&(r=new Float32Array(i),qc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function wt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function At(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ra(s,e){let t=Yc[e];t===void 0&&(t=new Int32Array(e),Yc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function M0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function S0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2fv(this.addr,e),At(t,e)}}function E0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;s.uniform3fv(this.addr,e),At(t,e)}}function b0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4fv(this.addr,e),At(t,e)}}function T0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;Kc.set(n),s.uniformMatrix2fv(this.addr,!1,Kc),At(t,n)}}function w0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;jc.set(n),s.uniformMatrix3fv(this.addr,!1,jc),At(t,n)}}function A0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;$c.set(n),s.uniformMatrix4fv(this.addr,!1,$c),At(t,n)}}function C0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function R0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2iv(this.addr,e),At(t,e)}}function P0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3iv(this.addr,e),At(t,e)}}function L0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4iv(this.addr,e),At(t,e)}}function I0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function D0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2uiv(this.addr,e),At(t,e)}}function U0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3uiv(this.addr,e),At(t,e)}}function N0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4uiv(this.addr,e),At(t,e)}}function F0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Xu:Wu;t.setTexture2D(e||r,i)}function O0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yu,i)}function B0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$u,i)}function z0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qu,i)}function k0(s){switch(s){case 5126:return M0;case 35664:return S0;case 35665:return E0;case 35666:return b0;case 35674:return T0;case 35675:return w0;case 35676:return A0;case 5124:case 35670:return C0;case 35667:case 35671:return R0;case 35668:case 35672:return P0;case 35669:case 35673:return L0;case 5125:return I0;case 36294:return D0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return z0}}function G0(s,e){s.uniform1fv(this.addr,e)}function V0(s,e){const t=Bs(e,this.size,2);s.uniform2fv(this.addr,t)}function H0(s,e){const t=Bs(e,this.size,3);s.uniform3fv(this.addr,t)}function W0(s,e){const t=Bs(e,this.size,4);s.uniform4fv(this.addr,t)}function X0(s,e){const t=Bs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function q0(s,e){const t=Bs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Y0(s,e){const t=Bs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $0(s,e){s.uniform1iv(this.addr,e)}function j0(s,e){s.uniform2iv(this.addr,e)}function K0(s,e){s.uniform3iv(this.addr,e)}function Z0(s,e){s.uniform4iv(this.addr,e)}function Q0(s,e){s.uniform1uiv(this.addr,e)}function J0(s,e){s.uniform2uiv(this.addr,e)}function e_(s,e){s.uniform3uiv(this.addr,e)}function t_(s,e){s.uniform4uiv(this.addr,e)}function n_(s,e,t){const n=this.cache,i=e.length,r=Ra(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Wu,r[a])}function i_(s,e,t){const n=this.cache,i=e.length,r=Ra(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Yu,r[a])}function s_(s,e,t){const n=this.cache,i=e.length,r=Ra(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||$u,r[a])}function r_(s,e,t){const n=this.cache,i=e.length,r=Ra(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||qu,r[a])}function a_(s){switch(s){case 5126:return G0;case 35664:return V0;case 35665:return H0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return $0;case 35667:case 35671:return j0;case 35668:case 35672:return K0;case 35669:case 35673:return Z0;case 5125:return Q0;case 36294:return J0;case 36295:return e_;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return r_}}class o_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=k0(t.type)}}class l_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a_(t.type)}}class c_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function Zc(s,e){s.seq.push(e),s.map[e.id]=e}function h_(s,e,t){const n=s.name,i=n.length;for(uo.lastIndex=0;;){const r=uo.exec(n),a=uo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Zc(t,c===void 0?new o_(o,s,e):new l_(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new c_(o),Zc(t,d)),t=d}}}class sa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);h_(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Qc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const u_=37297;let d_=0;function f_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function p_(s){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(s);let n;switch(e===t?n="":e===fa&&t===da?n="LinearDisplayP3ToLinearSRGB":e===da&&t===fa&&(n="LinearSRGBToLinearDisplayP3"),s){case Qn:case Aa:return[n,"LinearTransferOETF"];case It:case ul:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Jc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+f_(s.getShaderSource(e),a)}else return i}function m_(s,e){const t=p_(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function g_(s,e){let t;switch(e){case mu:t="Linear";break;case gu:t="Reinhard";break;case _u:t="OptimizedCineon";break;case cl:t="ACESFilmic";break;case xu:t="AgX";break;case If:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function __(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function x_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xs).join(`
`)}function v_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function y_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function xs(s){return s!==""}function eh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function th(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const M_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(s){return s.replace(M_,E_)}const S_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function E_(s,e){let t=$e[e];if(t===void 0){const n=S_.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vo(t)}const b_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(s){return s.replace(b_,T_)}function T_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ih(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function w_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===af?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function A_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case As:case Cs:e="ENVMAP_TYPE_CUBE";break;case wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function R_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case pu:e="ENVMAP_BLENDING_MULTIPLY";break;case Pf:e="ENVMAP_BLENDING_MIX";break;case Lf:e="ENVMAP_BLENDING_ADD";break}return e}function P_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function L_(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=w_(t),c=A_(t),h=C_(t),d=R_(t),u=P_(t),f=t.isWebGL2?"":__(t),_=x_(t),g=v_(r),p=i.createProgram();let m,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xs).join(`
`),m.length>0&&(m+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xs).join(`
`),v.length>0&&(v+=`
`)):(m=[ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),v=[f,ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?$e.tonemapping_pars_fragment:"",t.toneMapping!==di?g_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,m_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xs).join(`
`)),a=Vo(a),a=eh(a,t),a=th(a,t),o=Vo(o),o=eh(o,t),o=th(o,t),a=nh(a),o=nh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+m+a,T=x+v+o,E=Qc(i,i.VERTEX_SHADER,y),b=Qc(i,i.FRAGMENT_SHADER,T);i.attachShader(p,E),i.attachShader(p,b),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function P(z){if(s.debug.checkShaderErrors){const q=i.getProgramInfoLog(p).trim(),C=i.getShaderInfoLog(E).trim(),N=i.getShaderInfoLog(b).trim();let O=!0,G=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,E,b);else{const V=Jc(i,E,"vertex"),B=Jc(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+V+`
`+B)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(C===""||N==="")&&(G=!1);G&&(z.diagnostics={runnable:O,programLog:q,vertexShader:{log:C,prefix:m},fragmentShader:{log:N,prefix:v}})}i.deleteShader(E),i.deleteShader(b),M=new sa(i,p),A=y_(i,p)}let M;this.getUniforms=function(){return M===void 0&&P(this),M};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(p,u_)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=b,this}let I_=0;class D_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new U_(e),t.set(e,n)),n}}class U_{constructor(e){this.id=I_++,this.code=e,this.usedTimes=0}}function N_(s,e,t,n,i,r,a){const o=new dl,l=new D_,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function p(M,A,U,z,q){const C=z.fog,N=q.geometry,O=M.isMeshStandardMaterial?z.environment:null,G=(M.isMeshStandardMaterial?t:e).get(M.envMap||O),V=G&&G.mapping===wa?G.image.height:null,B=_[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ee=Z!==void 0?Z.length:0;let Q=0;N.morphAttributes.position!==void 0&&(Q=1),N.morphAttributes.normal!==void 0&&(Q=2),N.morphAttributes.color!==void 0&&(Q=3);let H,K,ae,Se;if(B){const st=Dn[B];H=st.vertexShader,K=st.fragmentShader}else H=M.vertexShader,K=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),Se=l.getFragmentShaderID(M);const ye=s.getRenderTarget(),Re=q.isInstancedMesh===!0,Ce=q.isBatchedMesh===!0,me=!!M.map,Oe=!!M.matcap,W=!!G,Ze=!!M.aoMap,oe=!!M.lightMap,De=!!M.bumpMap,ue=!!M.normalMap,We=!!M.displacementMap,Xe=!!M.emissiveMap,w=!!M.metalnessMap,S=!!M.roughnessMap,F=M.anisotropy>0,$=M.clearcoat>0,J=M.iridescence>0,ne=M.sheen>0,ge=M.transmission>0,le=F&&!!M.anisotropyMap,de=$&&!!M.clearcoatMap,ve=$&&!!M.clearcoatNormalMap,Ee=$&&!!M.clearcoatRoughnessMap,te=J&&!!M.iridescenceMap,Be=J&&!!M.iridescenceThicknessMap,Fe=ne&&!!M.sheenColorMap,Le=ne&&!!M.sheenRoughnessMap,be=!!M.specularMap,fe=!!M.specularColorMap,L=!!M.specularIntensityMap,se=ge&&!!M.transmissionMap,Me=ge&&!!M.thicknessMap,pe=!!M.gradientMap,re=!!M.alphaMap,D=M.alphaTest>0,ie=!!M.alphaHash,ce=!!M.extensions,Ie=!!N.attributes.uv1,Ae=!!N.attributes.uv2,ke=!!N.attributes.uv3;let Ge=di;return M.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ge=s.toneMapping),{isWebGL2:h,shaderID:B,shaderType:M.type,shaderName:M.name,vertexShader:H,fragmentShader:K,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:Se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ce,instancing:Re,instancingColor:Re&&q.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Qn,map:me,matcap:Oe,envMap:W,envMapMode:W&&G.mapping,envMapCubeUVHeight:V,aoMap:Ze,lightMap:oe,bumpMap:De,normalMap:ue,displacementMap:u&&We,emissiveMap:Xe,normalMapObjectSpace:ue&&M.normalMapType===Wf,normalMapTangentSpace:ue&&M.normalMapType===Cu,metalnessMap:w,roughnessMap:S,anisotropy:F,anisotropyMap:le,clearcoat:$,clearcoatMap:de,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ee,iridescence:J,iridescenceMap:te,iridescenceThicknessMap:Be,sheen:ne,sheenColorMap:Fe,sheenRoughnessMap:Le,specularMap:be,specularColorMap:fe,specularIntensityMap:L,transmission:ge,transmissionMap:se,thicknessMap:Me,gradientMap:pe,opaque:M.transparent===!1&&M.blending===Ss,alphaMap:re,alphaTest:D,alphaHash:ie,combine:M.combine,mapUv:me&&g(M.map.channel),aoMapUv:Ze&&g(M.aoMap.channel),lightMapUv:oe&&g(M.lightMap.channel),bumpMapUv:De&&g(M.bumpMap.channel),normalMapUv:ue&&g(M.normalMap.channel),displacementMapUv:We&&g(M.displacementMap.channel),emissiveMapUv:Xe&&g(M.emissiveMap.channel),metalnessMapUv:w&&g(M.metalnessMap.channel),roughnessMapUv:S&&g(M.roughnessMap.channel),anisotropyMapUv:le&&g(M.anisotropyMap.channel),clearcoatMapUv:de&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ve&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(M.sheenRoughnessMap.channel),specularMapUv:be&&g(M.specularMap.channel),specularColorMapUv:fe&&g(M.specularColorMap.channel),specularIntensityMapUv:L&&g(M.specularIntensityMap.channel),transmissionMapUv:se&&g(M.transmissionMap.channel),thicknessMapUv:Me&&g(M.thicknessMap.channel),alphaMapUv:re&&g(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ue||F),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Ae,vertexUv3s:ke,pointsUvs:q.isPoints===!0&&!!N.attributes.uv&&(me||re),fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:q.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ge,useLegacyLights:s._useLegacyLights,decodeVideoTexture:me&&M.map.isVideoTexture===!0&&rt.getTransfer(M.map.colorSpace)===ht,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===_n,flipSided:M.side===$t,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ce&&M.extensions.derivatives===!0,extensionFragDepth:ce&&M.extensions.fragDepth===!0,extensionDrawBuffers:ce&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)A.push(U),A.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(v(A,M),x(A,M),A.push(s.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function v(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function x(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const A=_[M.type];let U;if(A){const z=Dn[A];U=lr.clone(z.uniforms)}else U=M.uniforms;return U}function T(M,A){let U;for(let z=0,q=c.length;z<q;z++){const C=c[z];if(C.cacheKey===A){U=C,++U.usedTimes;break}}return U===void 0&&(U=new L_(s,A,M,r),c.push(U)),U}function E(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function b(M){l.remove(M)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:T,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:P}}function F_(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function O_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function sh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function rh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,f,_,g,p){let m=s[e];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},s[e]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=g,m.group=p),e++,m}function o(d,u,f,_,g,p){const m=a(d,u,f,_,g,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(d,u,f,_,g,p){const m=a(d,u,f,_,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(d,u){t.length>1&&t.sort(d||O_),n.length>1&&n.sort(u||sh),i.length>1&&i.sort(u||sh)}function h(){for(let d=e,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function B_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new rh,s.set(n,[a])):i>=r.length?(a=new rh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function z_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Pe};break;case"SpotLight":t={position:new I,direction:new I,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function k_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let G_=0;function V_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function H_(s,e){const t=new z_,n=k_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new I);const r=new I,a=new vt,o=new vt;function l(h,d){let u=0,f=0,_=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let g=0,p=0,m=0,v=0,x=0,y=0,T=0,E=0,b=0,P=0,M=0;h.sort(V_);const A=d===!0?Math.PI:1;for(let z=0,q=h.length;z<q;z++){const C=h[z],N=C.color,O=C.intensity,G=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=N.r*O*A,f+=N.g*O*A,_+=N.b*O*A;else if(C.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(C.sh.coefficients[B],O);M++}else if(C.isDirectionalLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity*A),C.castShadow){const Z=C.shadow,ee=n.get(C);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,i.directionalShadow[g]=ee,i.directionalShadowMap[g]=V,i.directionalShadowMatrix[g]=C.shadow.matrix,y++}i.directional[g]=B,g++}else if(C.isSpotLight){const B=t.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(N).multiplyScalar(O*A),B.distance=G,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,i.spot[m]=B;const Z=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,Z.updateMatrices(C),C.castShadow&&P++),i.spotLightMatrix[m]=Z.matrix,C.castShadow){const ee=n.get(C);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,i.spotShadow[m]=ee,i.spotShadowMap[m]=V,E++}m++}else if(C.isRectAreaLight){const B=t.get(C);B.color.copy(N).multiplyScalar(O),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),i.rectArea[v]=B,v++}else if(C.isPointLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity*A),B.distance=C.distance,B.decay=C.decay,C.castShadow){const Z=C.shadow,ee=n.get(C);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,i.pointShadow[p]=ee,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=C.shadow.matrix,T++}i.point[p]=B,p++}else if(C.isHemisphereLight){const B=t.get(C);B.skyColor.copy(C.color).multiplyScalar(O*A),B.groundColor.copy(C.groundColor).multiplyScalar(O*A),i.hemi[x]=B,x++}}v>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=_;const U=i.hash;(U.directionalLength!==g||U.pointLength!==p||U.spotLength!==m||U.rectAreaLength!==v||U.hemiLength!==x||U.numDirectionalShadows!==y||U.numPointShadows!==T||U.numSpotShadows!==E||U.numSpotMaps!==b||U.numLightProbes!==M)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=v,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=M,U.directionalLength=g,U.pointLength=p,U.spotLength=m,U.rectAreaLength=v,U.hemiLength=x,U.numDirectionalShadows=y,U.numPointShadows=T,U.numSpotShadows=E,U.numSpotMaps=b,U.numLightProbes=M,i.version=G_++)}function c(h,d){let u=0,f=0,_=0,g=0,p=0;const m=d.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const y=h[v];if(y.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),u++}else if(y.isSpotLight){const T=i.spot[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),_++}else if(y.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),o.identity(),a.copy(y.matrixWorld),a.premultiply(m),o.extractRotation(a),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const T=i.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function ah(s,e){const t=new H_(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function W_(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new ah(s,e),t.set(r,[l])):a>=o.length?(l=new ah(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class X_ extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class q_ extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Y_=`void main() {
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
}`;function j_(s,e,t){let n=new fl;const i=new Te,r=new Te,a=new ft,o=new X_({depthPacking:Hf}),l=new q_,c={},h=t.maxTextureSize,d={[gi]:$t,[$t]:gi,[_n]:_n},u=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Y_,fragmentShader:$_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new Mt;_.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Et(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let m=this.type;this.render=function(E,b,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const M=s.getRenderTarget(),A=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Kn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const q=m!==Xn&&this.type===Xn,C=m===Xn&&this.type!==Xn;for(let N=0,O=E.length;N<O;N++){const G=E[N],V=G.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const B=V.getFrameExtents();if(i.multiply(B),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/B.x),i.x=r.x*B.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/B.y),i.y=r.y*B.y,V.mapSize.y=r.y)),V.map===null||q===!0||C===!0){const ee=this.type!==Xn?{minFilter:Wt,magFilter:Wt}:{};V.map!==null&&V.map.dispose(),V.map=new Pn(i.x,i.y,ee),V.map.texture.name=G.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const Z=V.getViewportCount();for(let ee=0;ee<Z;ee++){const Q=V.getViewport(ee);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),z.viewport(a),V.updateMatrices(G,ee),n=V.getFrustum(),y(b,P,V.camera,G,this.type)}V.isPointLightShadow!==!0&&this.type===Xn&&v(V,P),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(M,A,U)};function v(E,b){const P=e.update(g);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Pn(i.x,i.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(b,null,P,u,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(b,null,P,f,g,null)}function x(E,b,P,M){let A=null;const U=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)A=U;else if(A=P.isPointLight===!0?l:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=A.uuid,q=b.uuid;let C=c[z];C===void 0&&(C={},c[z]=C);let N=C[q];N===void 0&&(N=A.clone(),C[q]=N,b.addEventListener("dispose",T)),A=N}if(A.visible=b.visible,A.wireframe=b.wireframe,M===Xn?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:d[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,P.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const z=s.properties.get(A);z.light=P}return A}function y(E,b,P,M,A){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&A===Xn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const q=e.update(E),C=E.material;if(Array.isArray(C)){const N=q.groups;for(let O=0,G=N.length;O<G;O++){const V=N[O],B=C[V.materialIndex];if(B&&B.visible){const Z=x(E,B,M,A);E.onBeforeShadow(s,E,b,P,q,Z,V),s.renderBufferDirect(P,null,q,Z,E,V),E.onAfterShadow(s,E,b,P,q,Z,V)}}}else if(C.visible){const N=x(E,C,M,A);E.onBeforeShadow(s,E,b,P,q,N,null),s.renderBufferDirect(P,null,q,N,E,null),E.onAfterShadow(s,E,b,P,q,N,null)}}const z=E.children;for(let q=0,C=z.length;q<C;q++)y(z[q],b,P,M,A)}function T(E){E.target.removeEventListener("dispose",T);for(const P in c){const M=c[P],A=E.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function K_(s,e,t){const n=t.isWebGL2;function i(){let D=!1;const ie=new ft;let ce=null;const Ie=new ft(0,0,0,0);return{setMask:function(Ae){ce!==Ae&&!D&&(s.colorMask(Ae,Ae,Ae,Ae),ce=Ae)},setLocked:function(Ae){D=Ae},setClear:function(Ae,ke,Ge,tt,st){st===!0&&(Ae*=tt,ke*=tt,Ge*=tt),ie.set(Ae,ke,Ge,tt),Ie.equals(ie)===!1&&(s.clearColor(Ae,ke,Ge,tt),Ie.copy(ie))},reset:function(){D=!1,ce=null,Ie.set(-1,0,0,0)}}}function r(){let D=!1,ie=null,ce=null,Ie=null;return{setTest:function(Ae){Ae?Ce(s.DEPTH_TEST):me(s.DEPTH_TEST)},setMask:function(Ae){ie!==Ae&&!D&&(s.depthMask(Ae),ie=Ae)},setFunc:function(Ae){if(ce!==Ae){switch(Ae){case Ef:s.depthFunc(s.NEVER);break;case bf:s.depthFunc(s.ALWAYS);break;case Tf:s.depthFunc(s.LESS);break;case ca:s.depthFunc(s.LEQUAL);break;case wf:s.depthFunc(s.EQUAL);break;case Af:s.depthFunc(s.GEQUAL);break;case Cf:s.depthFunc(s.GREATER);break;case Rf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=Ae}},setLocked:function(Ae){D=Ae},setClear:function(Ae){Ie!==Ae&&(s.clearDepth(Ae),Ie=Ae)},reset:function(){D=!1,ie=null,ce=null,Ie=null}}}function a(){let D=!1,ie=null,ce=null,Ie=null,Ae=null,ke=null,Ge=null,tt=null,st=null;return{setTest:function(je){D||(je?Ce(s.STENCIL_TEST):me(s.STENCIL_TEST))},setMask:function(je){ie!==je&&!D&&(s.stencilMask(je),ie=je)},setFunc:function(je,ct,Gt){(ce!==je||Ie!==ct||Ae!==Gt)&&(s.stencilFunc(je,ct,Gt),ce=je,Ie=ct,Ae=Gt)},setOp:function(je,ct,Gt){(ke!==je||Ge!==ct||tt!==Gt)&&(s.stencilOp(je,ct,Gt),ke=je,Ge=ct,tt=Gt)},setLocked:function(je){D=je},setClear:function(je){st!==je&&(s.clearStencil(je),st=je)},reset:function(){D=!1,ie=null,ce=null,Ie=null,Ae=null,ke=null,Ge=null,tt=null,st=null}}}const o=new i,l=new r,c=new a,h=new WeakMap,d=new WeakMap;let u={},f={},_=new WeakMap,g=[],p=null,m=!1,v=null,x=null,y=null,T=null,E=null,b=null,P=null,M=new Pe(0,0,0),A=0,U=!1,z=null,q=null,C=null,N=null,O=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,B=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Z)[1]),V=B>=1):Z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),V=B>=2);let ee=null,Q={};const H=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),ae=new ft().fromArray(H),Se=new ft().fromArray(K);function ye(D,ie,ce,Ie){const Ae=new Uint8Array(4),ke=s.createTexture();s.bindTexture(D,ke),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<ce;Ge++)n&&(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)?s.texImage3D(ie,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(ie+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return ke}const Re={};Re[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Re[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Re[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Re[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(s.DEPTH_TEST),l.setFunc(ca),Xe(!1),w(Hl),Ce(s.CULL_FACE),ue(Kn);function Ce(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function me(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function Oe(D,ie){return f[D]!==ie?(s.bindFramebuffer(D,ie),f[D]=ie,n&&(D===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ie),D===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ie)),!0):!1}function W(D,ie){let ce=g,Ie=!1;if(D)if(ce=_.get(ie),ce===void 0&&(ce=[],_.set(ie,ce)),D.isWebGLMultipleRenderTargets){const Ae=D.texture;if(ce.length!==Ae.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let ke=0,Ge=Ae.length;ke<Ge;ke++)ce[ke]=s.COLOR_ATTACHMENT0+ke;ce.length=Ae.length,Ie=!0}}else ce[0]!==s.COLOR_ATTACHMENT0&&(ce[0]=s.COLOR_ATTACHMENT0,Ie=!0);else ce[0]!==s.BACK&&(ce[0]=s.BACK,Ie=!0);Ie&&(t.isWebGL2?s.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function Ze(D){return p!==D?(s.useProgram(D),p=D,!0):!1}const oe={[Ui]:s.FUNC_ADD,[lf]:s.FUNC_SUBTRACT,[cf]:s.FUNC_REVERSE_SUBTRACT};if(n)oe[ql]=s.MIN,oe[Yl]=s.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(oe[ql]=D.MIN_EXT,oe[Yl]=D.MAX_EXT)}const De={[hf]:s.ZERO,[uf]:s.ONE,[df]:s.SRC_COLOR,[Uo]:s.SRC_ALPHA,[xf]:s.SRC_ALPHA_SATURATE,[gf]:s.DST_COLOR,[pf]:s.DST_ALPHA,[ff]:s.ONE_MINUS_SRC_COLOR,[No]:s.ONE_MINUS_SRC_ALPHA,[_f]:s.ONE_MINUS_DST_COLOR,[mf]:s.ONE_MINUS_DST_ALPHA,[vf]:s.CONSTANT_COLOR,[yf]:s.ONE_MINUS_CONSTANT_COLOR,[Mf]:s.CONSTANT_ALPHA,[Sf]:s.ONE_MINUS_CONSTANT_ALPHA};function ue(D,ie,ce,Ie,Ae,ke,Ge,tt,st,je){if(D===Kn){m===!0&&(me(s.BLEND),m=!1);return}if(m===!1&&(Ce(s.BLEND),m=!0),D!==of){if(D!==v||je!==U){if((x!==Ui||E!==Ui)&&(s.blendEquation(s.FUNC_ADD),x=Ui,E=Ui),je)switch(D){case Ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bt:s.blendFunc(s.ONE,s.ONE);break;case Wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bt:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,T=null,b=null,P=null,M.set(0,0,0),A=0,v=D,U=je}return}Ae=Ae||ie,ke=ke||ce,Ge=Ge||Ie,(ie!==x||Ae!==E)&&(s.blendEquationSeparate(oe[ie],oe[Ae]),x=ie,E=Ae),(ce!==y||Ie!==T||ke!==b||Ge!==P)&&(s.blendFuncSeparate(De[ce],De[Ie],De[ke],De[Ge]),y=ce,T=Ie,b=ke,P=Ge),(tt.equals(M)===!1||st!==A)&&(s.blendColor(tt.r,tt.g,tt.b,st),M.copy(tt),A=st),v=D,U=!1}function We(D,ie){D.side===_n?me(s.CULL_FACE):Ce(s.CULL_FACE);let ce=D.side===$t;ie&&(ce=!ce),Xe(ce),D.blending===Ss&&D.transparent===!1?ue(Kn):ue(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Ie=D.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),F(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ce(s.SAMPLE_ALPHA_TO_COVERAGE):me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(D){z!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),z=D)}function w(D){D!==sf?(Ce(s.CULL_FACE),D!==q&&(D===Hl?s.cullFace(s.BACK):D===rf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):me(s.CULL_FACE),q=D}function S(D){D!==C&&(V&&s.lineWidth(D),C=D)}function F(D,ie,ce){D?(Ce(s.POLYGON_OFFSET_FILL),(N!==ie||O!==ce)&&(s.polygonOffset(ie,ce),N=ie,O=ce)):me(s.POLYGON_OFFSET_FILL)}function $(D){D?Ce(s.SCISSOR_TEST):me(s.SCISSOR_TEST)}function J(D){D===void 0&&(D=s.TEXTURE0+G-1),ee!==D&&(s.activeTexture(D),ee=D)}function ne(D,ie,ce){ce===void 0&&(ee===null?ce=s.TEXTURE0+G-1:ce=ee);let Ie=Q[ce];Ie===void 0&&(Ie={type:void 0,texture:void 0},Q[ce]=Ie),(Ie.type!==D||Ie.texture!==ie)&&(ee!==ce&&(s.activeTexture(ce),ee=ce),s.bindTexture(D,ie||Re[D]),Ie.type=D,Ie.texture=ie)}function ge(){const D=Q[ee];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function le(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function L(D){ae.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ae.copy(D))}function se(D){Se.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Se.copy(D))}function Me(D,ie){let ce=d.get(ie);ce===void 0&&(ce=new WeakMap,d.set(ie,ce));let Ie=ce.get(D);Ie===void 0&&(Ie=s.getUniformBlockIndex(ie,D.name),ce.set(D,Ie))}function pe(D,ie){const Ie=d.get(ie).get(D);h.get(ie)!==Ie&&(s.uniformBlockBinding(ie,Ie,D.__bindingPointIndex),h.set(ie,Ie))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ee=null,Q={},f={},_=new WeakMap,g=[],p=null,m=!1,v=null,x=null,y=null,T=null,E=null,b=null,P=null,M=new Pe(0,0,0),A=0,U=!1,z=null,q=null,C=null,N=null,O=null,ae.set(0,0,s.canvas.width,s.canvas.height),Se.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ce,disable:me,bindFramebuffer:Oe,drawBuffers:W,useProgram:Ze,setBlending:ue,setMaterial:We,setFlipSided:Xe,setCullFace:w,setLineWidth:S,setPolygonOffset:F,setScissorTest:$,activeTexture:J,bindTexture:ne,unbindTexture:ge,compressedTexImage2D:le,compressedTexImage3D:de,texImage2D:be,texImage3D:fe,updateUBOMapping:Me,uniformBlockBinding:pe,texStorage2D:Fe,texStorage3D:Le,texSubImage2D:ve,texSubImage3D:Ee,compressedTexSubImage2D:te,compressedTexSubImage3D:Be,scissor:L,viewport:se,reset:re}}function Z_(s,e,t,n,i,r,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,S){return f?new OffscreenCanvas(w,S):ma("canvas")}function g(w,S,F,$){let J=1;if((w.width>$||w.height>$)&&(J=$/Math.max(w.width,w.height)),J<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ne=S?ko:Math.floor,ge=ne(J*w.width),le=ne(J*w.height);d===void 0&&(d=_(ge,le));const de=F?_(ge,le):d;return de.width=ge,de.height=le,de.getContext("2d").drawImage(w,0,0,ge,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ge+"x"+le+")."),de}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return Ec(w.width)&&Ec(w.height)}function m(w){return o?!1:w.wrapS!==An||w.wrapT!==An||w.minFilter!==Wt&&w.minFilter!==gn}function v(w,S){return w.generateMipmaps&&S&&w.minFilter!==Wt&&w.minFilter!==gn}function x(w){s.generateMipmap(w)}function y(w,S,F,$,J=!1){if(o===!1)return S;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ne=S;if(S===s.RED&&(F===s.FLOAT&&(ne=s.R32F),F===s.HALF_FLOAT&&(ne=s.R16F),F===s.UNSIGNED_BYTE&&(ne=s.R8)),S===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(ne=s.R8UI),F===s.UNSIGNED_SHORT&&(ne=s.R16UI),F===s.UNSIGNED_INT&&(ne=s.R32UI),F===s.BYTE&&(ne=s.R8I),F===s.SHORT&&(ne=s.R16I),F===s.INT&&(ne=s.R32I)),S===s.RG&&(F===s.FLOAT&&(ne=s.RG32F),F===s.HALF_FLOAT&&(ne=s.RG16F),F===s.UNSIGNED_BYTE&&(ne=s.RG8)),S===s.RGBA){const ge=J?ua:rt.getTransfer($);F===s.FLOAT&&(ne=s.RGBA32F),F===s.HALF_FLOAT&&(ne=s.RGBA16F),F===s.UNSIGNED_BYTE&&(ne=ge===ht?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function T(w,S,F){return v(w,F)===!0||w.isFramebufferTexture&&w.minFilter!==Wt&&w.minFilter!==gn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function E(w){return w===Wt||w===$l||w===Oa?s.NEAREST:s.LINEAR}function b(w){const S=w.target;S.removeEventListener("dispose",b),M(S),S.isVideoTexture&&h.delete(S)}function P(w){const S=w.target;S.removeEventListener("dispose",P),U(S)}function M(w){const S=n.get(w);if(S.__webglInit===void 0)return;const F=w.source,$=u.get(F);if($){const J=$[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&A(w),Object.keys($).length===0&&u.delete(F)}n.remove(w)}function A(w){const S=n.get(w);s.deleteTexture(S.__webglTexture);const F=w.source,$=u.get(F);delete $[S.__cacheKey],a.memory.textures--}function U(w){const S=w.texture,F=n.get(w),$=n.get(S);if($.__webglTexture!==void 0&&(s.deleteTexture($.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(F.__webglFramebuffer[J]))for(let ne=0;ne<F.__webglFramebuffer[J].length;ne++)s.deleteFramebuffer(F.__webglFramebuffer[J][ne]);else s.deleteFramebuffer(F.__webglFramebuffer[J]);F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[J])}else{if(Array.isArray(F.__webglFramebuffer))for(let J=0;J<F.__webglFramebuffer.length;J++)s.deleteFramebuffer(F.__webglFramebuffer[J]);else s.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let J=0;J<F.__webglColorRenderbuffer.length;J++)F.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[J]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let J=0,ne=S.length;J<ne;J++){const ge=n.get(S[J]);ge.__webglTexture&&(s.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(S[J])}n.remove(S),n.remove(w)}let z=0;function q(){z=0}function C(){const w=z;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),z+=1,w}function N(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function O(w,S){const F=n.get(w);if(w.isVideoTexture&&We(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(F,w,S);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+S)}function G(w,S){const F=n.get(w);if(w.version>0&&F.__version!==w.version){ae(F,w,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+S)}function V(w,S){const F=n.get(w);if(w.version>0&&F.__version!==w.version){ae(F,w,S);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+S)}function B(w,S){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Se(F,w,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+S)}const Z={[ar]:s.REPEAT,[An]:s.CLAMP_TO_EDGE,[Oo]:s.MIRRORED_REPEAT},ee={[Wt]:s.NEAREST,[$l]:s.NEAREST_MIPMAP_NEAREST,[Oa]:s.NEAREST_MIPMAP_LINEAR,[gn]:s.LINEAR,[Df]:s.LINEAR_MIPMAP_NEAREST,[or]:s.LINEAR_MIPMAP_LINEAR},Q={[Xf]:s.NEVER,[Zf]:s.ALWAYS,[qf]:s.LESS,[Ru]:s.LEQUAL,[Yf]:s.EQUAL,[Kf]:s.GEQUAL,[$f]:s.GREATER,[jf]:s.NOTEQUAL};function H(w,S,F){if(F?(s.texParameteri(w,s.TEXTURE_WRAP_S,Z[S.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,Z[S.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,Z[S.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,ee[S.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,ee[S.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==An||S.wrapT!==An)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,E(S.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,E(S.minFilter)),S.minFilter!==Wt&&S.minFilter!==gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,Q[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Wt||S.minFilter!==Oa&&S.minFilter!==or||S.type===li&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Zn&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(w,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function K(w,S){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",b));const $=S.source;let J=u.get($);J===void 0&&(J={},u.set($,J));const ne=N(S);if(ne!==w.__cacheKey){J[ne]===void 0&&(J[ne]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[ne].usedTimes++;const ge=J[w.__cacheKey];ge!==void 0&&(J[w.__cacheKey].usedTimes--,ge.usedTimes===0&&A(S)),w.__cacheKey=ne,w.__webglTexture=J[ne].texture}return F}function ae(w,S,F){let $=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=s.TEXTURE_3D);const J=K(w,S),ne=S.source;t.bindTexture($,w.__webglTexture,s.TEXTURE0+F);const ge=n.get(ne);if(ne.version!==ge.__version||J===!0){t.activeTexture(s.TEXTURE0+F);const le=rt.getPrimaries(rt.workingColorSpace),de=S.colorSpace===xn?null:rt.getPrimaries(S.colorSpace),ve=S.colorSpace===xn||le===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ee=m(S)&&p(S.image)===!1;let te=g(S.image,Ee,!1,i.maxTextureSize);te=Xe(S,te);const Be=p(te)||o,Fe=r.convert(S.format,S.colorSpace);let Le=r.convert(S.type),be=y(S.internalFormat,Fe,Le,S.colorSpace,S.isVideoTexture);H($,S,Be);let fe;const L=S.mipmaps,se=o&&S.isVideoTexture!==!0&&be!==wu,Me=ge.__version===void 0||J===!0,pe=T(S,te,Be);if(S.isDepthTexture)be=s.DEPTH_COMPONENT,o?S.type===li?be=s.DEPTH_COMPONENT32F:S.type===oi?be=s.DEPTH_COMPONENT24:S.type===Oi?be=s.DEPTH24_STENCIL8:be=s.DEPTH_COMPONENT16:S.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Bi&&be===s.DEPTH_COMPONENT&&S.type!==hl&&S.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=oi,Le=r.convert(S.type)),S.format===Rs&&be===s.DEPTH_COMPONENT&&(be=s.DEPTH_STENCIL,S.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Oi,Le=r.convert(S.type))),Me&&(se?t.texStorage2D(s.TEXTURE_2D,1,be,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,be,te.width,te.height,0,Fe,Le,null));else if(S.isDataTexture)if(L.length>0&&Be){se&&Me&&t.texStorage2D(s.TEXTURE_2D,pe,be,L[0].width,L[0].height);for(let re=0,D=L.length;re<D;re++)fe=L[re],se?t.texSubImage2D(s.TEXTURE_2D,re,0,0,fe.width,fe.height,Fe,Le,fe.data):t.texImage2D(s.TEXTURE_2D,re,be,fe.width,fe.height,0,Fe,Le,fe.data);S.generateMipmaps=!1}else se?(Me&&t.texStorage2D(s.TEXTURE_2D,pe,be,te.width,te.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,te.width,te.height,Fe,Le,te.data)):t.texImage2D(s.TEXTURE_2D,0,be,te.width,te.height,0,Fe,Le,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){se&&Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,be,L[0].width,L[0].height,te.depth);for(let re=0,D=L.length;re<D;re++)fe=L[re],S.format!==Cn?Fe!==null?se?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,fe.width,fe.height,te.depth,Fe,fe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,be,fe.width,fe.height,te.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,fe.width,fe.height,te.depth,Fe,Le,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,be,fe.width,fe.height,te.depth,0,Fe,Le,fe.data)}else{se&&Me&&t.texStorage2D(s.TEXTURE_2D,pe,be,L[0].width,L[0].height);for(let re=0,D=L.length;re<D;re++)fe=L[re],S.format!==Cn?Fe!==null?se?t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,fe.width,fe.height,Fe,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,re,be,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage2D(s.TEXTURE_2D,re,0,0,fe.width,fe.height,Fe,Le,fe.data):t.texImage2D(s.TEXTURE_2D,re,be,fe.width,fe.height,0,Fe,Le,fe.data)}else if(S.isDataArrayTexture)se?(Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,be,te.width,te.height,te.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Fe,Le,te.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,be,te.width,te.height,te.depth,0,Fe,Le,te.data);else if(S.isData3DTexture)se?(Me&&t.texStorage3D(s.TEXTURE_3D,pe,be,te.width,te.height,te.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Fe,Le,te.data)):t.texImage3D(s.TEXTURE_3D,0,be,te.width,te.height,te.depth,0,Fe,Le,te.data);else if(S.isFramebufferTexture){if(Me)if(se)t.texStorage2D(s.TEXTURE_2D,pe,be,te.width,te.height);else{let re=te.width,D=te.height;for(let ie=0;ie<pe;ie++)t.texImage2D(s.TEXTURE_2D,ie,be,re,D,0,Fe,Le,null),re>>=1,D>>=1}}else if(L.length>0&&Be){se&&Me&&t.texStorage2D(s.TEXTURE_2D,pe,be,L[0].width,L[0].height);for(let re=0,D=L.length;re<D;re++)fe=L[re],se?t.texSubImage2D(s.TEXTURE_2D,re,0,0,Fe,Le,fe):t.texImage2D(s.TEXTURE_2D,re,be,Fe,Le,fe);S.generateMipmaps=!1}else se?(Me&&t.texStorage2D(s.TEXTURE_2D,pe,be,te.width,te.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,Le,te)):t.texImage2D(s.TEXTURE_2D,0,be,Fe,Le,te);v(S,Be)&&x($),ge.__version=ne.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Se(w,S,F){if(S.image.length!==6)return;const $=K(w,S),J=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+F);const ne=n.get(J);if(J.version!==ne.__version||$===!0){t.activeTexture(s.TEXTURE0+F);const ge=rt.getPrimaries(rt.workingColorSpace),le=S.colorSpace===xn?null:rt.getPrimaries(S.colorSpace),de=S.colorSpace===xn||ge===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const ve=S.isCompressedTexture||S.image[0].isCompressedTexture,Ee=S.image[0]&&S.image[0].isDataTexture,te=[];for(let re=0;re<6;re++)!ve&&!Ee?te[re]=g(S.image[re],!1,!0,i.maxCubemapSize):te[re]=Ee?S.image[re].image:S.image[re],te[re]=Xe(S,te[re]);const Be=te[0],Fe=p(Be)||o,Le=r.convert(S.format,S.colorSpace),be=r.convert(S.type),fe=y(S.internalFormat,Le,be,S.colorSpace),L=o&&S.isVideoTexture!==!0,se=ne.__version===void 0||$===!0;let Me=T(S,Be,Fe);H(s.TEXTURE_CUBE_MAP,S,Fe);let pe;if(ve){L&&se&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,fe,Be.width,Be.height);for(let re=0;re<6;re++){pe=te[re].mipmaps;for(let D=0;D<pe.length;D++){const ie=pe[D];S.format!==Cn?Le!==null?L?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,D,0,0,ie.width,ie.height,Le,ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,D,fe,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,D,0,0,ie.width,ie.height,Le,be,ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,D,fe,ie.width,ie.height,0,Le,be,ie.data)}}}else{pe=S.mipmaps,L&&se&&(pe.length>0&&Me++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,fe,te[0].width,te[0].height));for(let re=0;re<6;re++)if(Ee){L?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,te[re].width,te[re].height,Le,be,te[re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,fe,te[re].width,te[re].height,0,Le,be,te[re].data);for(let D=0;D<pe.length;D++){const ce=pe[D].image[re].image;L?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,D+1,0,0,ce.width,ce.height,Le,be,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,D+1,fe,ce.width,ce.height,0,Le,be,ce.data)}}else{L?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Le,be,te[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,fe,Le,be,te[re]);for(let D=0;D<pe.length;D++){const ie=pe[D];L?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,D+1,0,0,Le,be,ie.image[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,D+1,fe,Le,be,ie.image[re])}}}v(S,Fe)&&x(s.TEXTURE_CUBE_MAP),ne.__version=J.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ye(w,S,F,$,J,ne){const ge=r.convert(F.format,F.colorSpace),le=r.convert(F.type),de=y(F.internalFormat,ge,le,F.colorSpace);if(!n.get(S).__hasExternalTextures){const Ee=Math.max(1,S.width>>ne),te=Math.max(1,S.height>>ne);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,ne,de,Ee,te,S.depth,0,ge,le,null):t.texImage2D(J,ne,de,Ee,te,0,ge,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),ue(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,J,n.get(F).__webglTexture,0,De(S)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,J,n.get(F).__webglTexture,ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(w,S,F){if(s.bindRenderbuffer(s.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let $=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(F||ue(S)){const J=S.depthTexture;J&&J.isDepthTexture&&(J.type===li?$=s.DEPTH_COMPONENT32F:J.type===oi&&($=s.DEPTH_COMPONENT24));const ne=De(S);ue(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,$,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,$,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,$,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){const $=De(S);F&&ue(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$,s.DEPTH24_STENCIL8,S.width,S.height):ue(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{const $=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let J=0;J<$.length;J++){const ne=$[J],ge=r.convert(ne.format,ne.colorSpace),le=r.convert(ne.type),de=y(ne.internalFormat,ge,le,ne.colorSpace),ve=De(S);F&&ue(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,de,S.width,S.height):ue(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,de,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,de,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);const $=n.get(S.depthTexture).__webglTexture,J=De(S);if(S.depthTexture.format===Bi)ue(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(S.depthTexture.format===Rs)ue(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function me(w){const S=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ce(S.__webglFramebuffer,w)}else if(F){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]=s.createRenderbuffer(),Re(S.__webglDepthbuffer[$],w,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Re(S.__webglDepthbuffer,w,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(w,S,F){const $=n.get(w);S!==void 0&&ye($.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&me(w)}function W(w){const S=w.texture,F=n.get(w),$=n.get(S);w.addEventListener("dispose",P),w.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=S.version,a.memory.textures++);const J=w.isWebGLCubeRenderTarget===!0,ne=w.isWebGLMultipleRenderTargets===!0,ge=p(w)||o;if(J){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let de=0;de<S.mipmaps.length;de++)F.__webglFramebuffer[le][de]=s.createFramebuffer()}else F.__webglFramebuffer[le]=s.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)F.__webglFramebuffer[le]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(ne)if(i.drawBuffers){const le=w.texture;for(let de=0,ve=le.length;de<ve;de++){const Ee=n.get(le[de]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&ue(w)===!1){const le=ne?S:[S];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let de=0;de<le.length;de++){const ve=le[de];F.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[de]);const Ee=r.convert(ve.format,ve.colorSpace),te=r.convert(ve.type),Be=y(ve.internalFormat,Ee,te,ve.colorSpace,w.isXRRenderTarget===!0),Fe=De(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,Be,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,F.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),H(s.TEXTURE_CUBE_MAP,S,ge);for(let le=0;le<6;le++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)ye(F.__webglFramebuffer[le][de],w,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else ye(F.__webglFramebuffer[le],w,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);v(S,ge)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const le=w.texture;for(let de=0,ve=le.length;de<ve;de++){const Ee=le[de],te=n.get(Ee);t.bindTexture(s.TEXTURE_2D,te.__webglTexture),H(s.TEXTURE_2D,Ee,ge),ye(F.__webglFramebuffer,w,Ee,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,0),v(Ee,ge)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?le=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,$.__webglTexture),H(le,S,ge),o&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)ye(F.__webglFramebuffer[de],w,S,s.COLOR_ATTACHMENT0,le,de);else ye(F.__webglFramebuffer,w,S,s.COLOR_ATTACHMENT0,le,0);v(S,ge)&&x(le),t.unbindTexture()}w.depthBuffer&&me(w)}function Ze(w){const S=p(w)||o,F=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let $=0,J=F.length;$<J;$++){const ne=F[$];if(v(ne,S)){const ge=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,le=n.get(ne).__webglTexture;t.bindTexture(ge,le),x(ge),t.unbindTexture()}}}function oe(w){if(o&&w.samples>0&&ue(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],F=w.width,$=w.height;let J=s.COLOR_BUFFER_BIT;const ne=[],ge=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=n.get(w),de=w.isWebGLMultipleRenderTargets===!0;if(de)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){ne.push(s.COLOR_ATTACHMENT0+ve),w.depthBuffer&&ne.push(ge);const Ee=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ee===!1&&(w.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),de&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[ve]),Ee===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ge]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ge])),de){const te=n.get(S[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,F,$,0,0,F,$,J,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,le.__webglColorRenderbuffer[ve]);const Ee=n.get(S[ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,Ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function De(w){return Math.min(i.maxSamples,w.samples)}function ue(w){const S=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function We(w){const S=a.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function Xe(w,S){const F=w.colorSpace,$=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Bo||F!==Qn&&F!==xn&&(rt.getTransfer(F)===ht?o===!1?e.has("EXT_sRGB")===!0&&$===Cn?(w.format=Bo,w.minFilter=gn,w.generateMipmaps=!1):S=Lu.sRGBToLinear(S):($!==Cn||J!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}this.allocateTextureUnit=C,this.resetTextureUnits=q,this.setTexture2D=O,this.setTexture2DArray=G,this.setTexture3D=V,this.setTextureCube=B,this.rebindTextures=Oe,this.setupRenderTarget=W,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ue}function Q_(s,e,t){const n=t.isWebGL2;function i(r,a=xn){let o;const l=rt.getTransfer(a);if(r===fi)return s.UNSIGNED_BYTE;if(r===Mu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Su)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Uf)return s.BYTE;if(r===Nf)return s.SHORT;if(r===hl)return s.UNSIGNED_SHORT;if(r===yu)return s.INT;if(r===oi)return s.UNSIGNED_INT;if(r===li)return s.FLOAT;if(r===Zn)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Ff)return s.ALPHA;if(r===Cn)return s.RGBA;if(r===Of)return s.LUMINANCE;if(r===Bf)return s.LUMINANCE_ALPHA;if(r===Bi)return s.DEPTH_COMPONENT;if(r===Rs)return s.DEPTH_STENCIL;if(r===Bo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===zf)return s.RED;if(r===Eu)return s.RED_INTEGER;if(r===kf)return s.RG;if(r===bu)return s.RG_INTEGER;if(r===Tu)return s.RGBA_INTEGER;if(r===Ba||r===za||r===ka||r===Ga)if(l===ht)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ba)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===za)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ba)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===za)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ka)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ga)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jl||r===Kl||r===Zl||r===Ql)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===jl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ql)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Jl||r===ec)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Jl)return l===ht?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ec)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===tc||r===nc||r===ic||r===sc||r===rc||r===ac||r===oc||r===lc||r===cc||r===hc||r===uc||r===dc||r===fc||r===pc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===tc)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nc)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ic)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sc)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rc)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ac)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===oc)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lc)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cc)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hc)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===uc)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dc)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fc)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pc)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Va||r===mc||r===gc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Va)return l===ht?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===mc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===gc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gf||r===_c||r===xc||r===vc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Va)return o.COMPRESSED_RED_RGTC1_EXT;if(r===_c)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===vc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Oi?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class J_ extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Un extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ex={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ex)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class tx extends Xi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null;const g=t.getContextAttributes();let p=null,m=null;const v=[],x=[],y=new Te;let T=null;const E=new an;E.layers.enable(1),E.viewport=new ft;const b=new an;b.layers.enable(2),b.viewport=new ft;const P=[E,b],M=new J_;M.layers.enable(1),M.layers.enable(2);let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=v[H];return K===void 0&&(K=new fo,v[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=v[H];return K===void 0&&(K=new fo,v[H]=K),K.getGripSpace()},this.getHand=function(H){let K=v[H];return K===void 0&&(K=new fo,v[H]=K),K.getHandSpace()};function z(H){const K=x.indexOf(H.inputSource);if(K===-1)return;const ae=v[K];ae!==void 0&&(ae.update(H.inputSource,H.frame,c||a),ae.dispatchEvent({type:H.type,data:H.inputSource}))}function q(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",C);for(let H=0;H<v.length;H++){const K=x[H];K!==null&&(x[H]=null,v[H].disconnect(K))}A=null,U=null,e.setRenderTarget(p),f=null,u=null,d=null,i=null,m=null,Q.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",q),i.addEventListener("inputsourceschange",C),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new Pn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ae=null,Se=null;g.depth&&(Se=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Rs:Bi,ae=g.stencil?Oi:oi);const ye={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(ye),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),m=new Pn(u.textureWidth,u.textureHeight,{format:Cn,type:fi,depthTexture:new Hu(u.textureWidth,u.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Re=e.properties.get(m);Re.__ignoreDepthValues=u.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function C(H){for(let K=0;K<H.removed.length;K++){const ae=H.removed[K],Se=x.indexOf(ae);Se>=0&&(x[Se]=null,v[Se].disconnect(ae))}for(let K=0;K<H.added.length;K++){const ae=H.added[K];let Se=x.indexOf(ae);if(Se===-1){for(let Re=0;Re<v.length;Re++)if(Re>=x.length){x.push(ae),Se=Re;break}else if(x[Re]===null){x[Re]=ae,Se=Re;break}if(Se===-1)break}const ye=v[Se];ye&&ye.connect(ae)}}const N=new I,O=new I;function G(H,K,ae){N.setFromMatrixPosition(K.matrixWorld),O.setFromMatrixPosition(ae.matrixWorld);const Se=N.distanceTo(O),ye=K.projectionMatrix.elements,Re=ae.projectionMatrix.elements,Ce=ye[14]/(ye[10]-1),me=ye[14]/(ye[10]+1),Oe=(ye[9]+1)/ye[5],W=(ye[9]-1)/ye[5],Ze=(ye[8]-1)/ye[0],oe=(Re[8]+1)/Re[0],De=Ce*Ze,ue=Ce*oe,We=Se/(-Ze+oe),Xe=We*-Ze;K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Xe),H.translateZ(We),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const w=Ce+We,S=me+We,F=De-Xe,$=ue+(Se-Xe),J=Oe*me/S*w,ne=W*me/S*w;H.projectionMatrix.makePerspective(F,$,J,ne,w,S),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function V(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;M.near=b.near=E.near=H.near,M.far=b.far=E.far=H.far,(A!==M.near||U!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,U=M.far);const K=H.parent,ae=M.cameras;V(M,K);for(let Se=0;Se<ae.length;Se++)V(ae[Se],K);ae.length===2?G(M,E,b):M.projectionMatrix.copy(E.projectionMatrix),B(H,M,K)};function B(H,K,ae){ae===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(ae.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=zo*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)};let Z=null;function ee(H,K){if(h=K.getViewerPose(c||a),_=K,h!==null){const ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let Se=!1;ae.length!==M.cameras.length&&(M.cameras.length=0,Se=!0);for(let ye=0;ye<ae.length;ye++){const Re=ae[ye];let Ce=null;if(f!==null)Ce=f.getViewport(Re);else{const Oe=d.getViewSubImage(u,Re);Ce=Oe.viewport,ye===0&&(e.setRenderTargetTextures(m,Oe.colorTexture,u.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(m))}let me=P[ye];me===void 0&&(me=new an,me.layers.enable(ye),me.viewport=new ft,P[ye]=me),me.matrix.fromArray(Re.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(Re.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ye===0&&(M.matrix.copy(me.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Se===!0&&M.cameras.push(me)}}for(let ae=0;ae<v.length;ae++){const Se=x[ae],ye=v[ae];Se!==null&&ye!==void 0&&ye.update(Se,K,c||a)}Z&&Z(H,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}const Q=new Vu;Q.setAnimationLoop(ee),this.setAnimationLoop=function(H){Z=H},this.dispose=function(){}}}function nx(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,zu(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===$t&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===$t&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*x,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$t&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ix(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(_(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",p));const T=x.program;n.updateUBOMapping(v,T);const E=e.render.frame;r[v.id]!==E&&(u(v),r[v.id]=E)}function h(v){const x=d();v.__bindingPointIndex=x;const y=s.createBuffer(),T=v.__size,E=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=i[v.id],y=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let E=0,b=y.length;E<b;E++){const P=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,A=P.length;M<A;M++){const U=P[M];if(f(U,E,M,T)===!0){const z=U.__offset,q=Array.isArray(U.value)?U.value:[U.value];let C=0;for(let N=0;N<q.length;N++){const O=q[N],G=g(O);typeof O=="number"||typeof O=="boolean"?(U.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,z+C,U.__data)):O.isMatrix3?(U.__data[0]=O.elements[0],U.__data[1]=O.elements[1],U.__data[2]=O.elements[2],U.__data[3]=0,U.__data[4]=O.elements[3],U.__data[5]=O.elements[4],U.__data[6]=O.elements[5],U.__data[7]=0,U.__data[8]=O.elements[6],U.__data[9]=O.elements[7],U.__data[10]=O.elements[8],U.__data[11]=0):(O.toArray(U.__data,C),C+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,y,T){const E=v.value,b=x+"_"+y;if(T[b]===void 0)return typeof E=="number"||typeof E=="boolean"?T[b]=E:T[b]=E.clone(),!0;{const P=T[b];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return T[b]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function _(v){const x=v.uniforms;let y=0;const T=16;for(let b=0,P=x.length;b<P;b++){const M=Array.isArray(x[b])?x[b]:[x[b]];for(let A=0,U=M.length;A<U;A++){const z=M[A],q=Array.isArray(z.value)?z.value:[z.value];for(let C=0,N=q.length;C<N;C++){const O=q[C],G=g(O),V=y%T;V!==0&&T-V<G.boundary&&(y+=T-V),z.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=G.storage}}}const E=y%T;return E>0&&(y+=T-E),v.__size=y,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}class ju{constructor(e={}){const{canvas:t=ep(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=di,this.toneMappingExposure=1;const x=this;let y=!1,T=0,E=0,b=null,P=-1,M=null;const A=new ft,U=new ft;let z=null;const q=new Pe(0);let C=0,N=t.width,O=t.height,G=1,V=null,B=null;const Z=new ft(0,0,N,O),ee=new ft(0,0,N,O);let Q=!1;const H=new fl;let K=!1,ae=!1,Se=null;const ye=new vt,Re=new Te,Ce=new I,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return b===null?G:1}let W=n;function Ze(R,k){for(let Y=0;Y<R.length;Y++){const j=R[Y],X=t.getContext(j,k);if(X!==null)return X}return null}try{const R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ll}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ie,!1),W===null){const k=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&k.shift(),W=Ze(k,R),W===null)throw Ze(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let oe,De,ue,We,Xe,w,S,F,$,J,ne,ge,le,de,ve,Ee,te,Be,Fe,Le,be,fe,L,se;function Me(){oe=new f0(W),De=new o0(W,oe,e),oe.init(De),fe=new Q_(W,oe,De),ue=new K_(W,oe,De),We=new g0(W),Xe=new F_,w=new Z_(W,oe,ue,Xe,De,fe,We),S=new c0(x),F=new d0(x),$=new bp(W,De),L=new r0(W,oe,$,De),J=new p0(W,$,We,L),ne=new y0(W,J,$,We),Fe=new v0(W,De,w),Ee=new l0(Xe),ge=new N_(x,S,F,oe,De,L,Ee),le=new nx(x,Xe),de=new B_,ve=new W_(oe,De),Be=new s0(x,S,F,ue,ne,u,l),te=new j_(x,ne,De),se=new ix(W,We,De,ue),Le=new a0(W,oe,We,De),be=new m0(W,oe,We,De),We.programs=ge.programs,x.capabilities=De,x.extensions=oe,x.properties=Xe,x.renderLists=de,x.shadowMap=te,x.state=ue,x.info=We}Me();const pe=new tx(x,W);this.xr=pe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=oe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=oe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(N,O,!1))},this.getSize=function(R){return R.set(N,O)},this.setSize=function(R,k,Y=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,O=k,t.width=Math.floor(R*G),t.height=Math.floor(k*G),Y===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(N*G,O*G).floor()},this.setDrawingBufferSize=function(R,k,Y){N=R,O=k,G=Y,t.width=Math.floor(R*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(Z)},this.setViewport=function(R,k,Y,j){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,k,Y,j),ue.viewport(A.copy(Z).multiplyScalar(G).floor())},this.getScissor=function(R){return R.copy(ee)},this.setScissor=function(R,k,Y,j){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,k,Y,j),ue.scissor(U.copy(ee).multiplyScalar(G).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(R){ue.setScissorTest(Q=R)},this.setOpaqueSort=function(R){V=R},this.setTransparentSort=function(R){B=R},this.getClearColor=function(R){return R.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(R=!0,k=!0,Y=!0){let j=0;if(R){let X=!1;if(b!==null){const _e=b.texture.format;X=_e===Tu||_e===bu||_e===Eu}if(X){const _e=b.texture.type,we=_e===fi||_e===oi||_e===hl||_e===Oi||_e===Mu||_e===Su,Ue=Be.getClearColor(),Ne=Be.getClearAlpha(),qe=Ue.r,ze=Ue.g,Ve=Ue.b;we?(f[0]=qe,f[1]=ze,f[2]=Ve,f[3]=Ne,W.clearBufferuiv(W.COLOR,0,f)):(_[0]=qe,_[1]=ze,_[2]=Ve,_[3]=Ne,W.clearBufferiv(W.COLOR,0,_))}else j|=W.COLOR_BUFFER_BIT}k&&(j|=W.DEPTH_BUFFER_BIT),Y&&(j|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),de.dispose(),ve.dispose(),Xe.dispose(),S.dispose(),F.dispose(),ne.dispose(),L.dispose(),se.dispose(),ge.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",st),pe.removeEventListener("sessionend",je),Se&&(Se.dispose(),Se=null),ct.stop()};function re(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=We.autoReset,k=te.enabled,Y=te.autoUpdate,j=te.needsUpdate,X=te.type;Me(),We.autoReset=R,te.enabled=k,te.autoUpdate=Y,te.needsUpdate=j,te.type=X}function ie(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ce(R){const k=R.target;k.removeEventListener("dispose",ce),Ie(k)}function Ie(R){Ae(R),Xe.remove(R)}function Ae(R){const k=Xe.get(R).programs;k!==void 0&&(k.forEach(function(Y){ge.releaseProgram(Y)}),R.isShaderMaterial&&ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,Y,j,X,_e){k===null&&(k=me);const we=X.isMesh&&X.matrixWorld.determinant()<0,Ue=Sr(R,k,Y,j,X);ue.setMaterial(j,we);let Ne=Y.index,qe=1;if(j.wireframe===!0){if(Ne=J.getWireframeAttribute(Y),Ne===void 0)return;qe=2}const ze=Y.drawRange,Ve=Y.attributes.position;let dt=ze.start*qe,xe=(ze.start+ze.count)*qe;_e!==null&&(dt=Math.max(dt,_e.start*qe),xe=Math.min(xe,(_e.start+_e.count)*qe)),Ne!==null?(dt=Math.max(dt,0),xe=Math.min(xe,Ne.count)):Ve!=null&&(dt=Math.max(dt,0),xe=Math.min(xe,Ve.count));const nt=xe-dt;if(nt<0||nt===1/0)return;L.setup(X,j,Ue,Y,Ne);let Tt,Qe=Le;if(Ne!==null&&(Tt=$.get(Ne),Qe=be,Qe.setIndex(Tt)),X.isMesh)j.wireframe===!0?(ue.setLineWidth(j.wireframeLinewidth*Oe()),Qe.setMode(W.LINES)):Qe.setMode(W.TRIANGLES);else if(X.isLine){let Ye=j.linewidth;Ye===void 0&&(Ye=1),ue.setLineWidth(Ye*Oe()),X.isLineSegments?Qe.setMode(W.LINES):X.isLineLoop?Qe.setMode(W.LINE_LOOP):Qe.setMode(W.LINE_STRIP)}else X.isPoints?Qe.setMode(W.POINTS):X.isSprite&&Qe.setMode(W.TRIANGLES);if(X.isBatchedMesh)Qe.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)Qe.renderInstances(dt,nt,X.count);else if(Y.isInstancedBufferGeometry){const Ye=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,$i=Math.min(Y.instanceCount,Ye);Qe.renderInstances(dt,nt,$i)}else Qe.render(dt,nt)};function ke(R,k,Y){R.transparent===!0&&R.side===_n&&R.forceSinglePass===!1?(R.side=$t,R.needsUpdate=!0,Mi(R,k,Y),R.side=gi,R.needsUpdate=!0,Mi(R,k,Y),R.side=_n):Mi(R,k,Y)}this.compile=function(R,k,Y=null){Y===null&&(Y=R),p=ve.get(Y),p.init(),v.push(p),Y.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),R!==Y&&R.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(x._useLegacyLights);const j=new Set;return R.traverse(function(X){const _e=X.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){const Ue=_e[we];ke(Ue,Y,X),j.add(Ue)}else ke(_e,Y,X),j.add(_e)}),v.pop(),p=null,j},this.compileAsync=function(R,k,Y=null){const j=this.compile(R,k,Y);return new Promise(X=>{function _e(){if(j.forEach(function(we){Xe.get(we).currentProgram.isReady()&&j.delete(we)}),j.size===0){X(R);return}setTimeout(_e,10)}oe.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ge=null;function tt(R){Ge&&Ge(R)}function st(){ct.stop()}function je(){ct.start()}const ct=new Vu;ct.setAnimationLoop(tt),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(R){Ge=R,pe.setAnimationLoop(R),R===null?ct.stop():ct.start()},pe.addEventListener("sessionstart",st),pe.addEventListener("sessionend",je),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(k),k=pe.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,k,b),p=ve.get(R,v.length),p.init(),v.push(p),ye.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),H.setFromProjectionMatrix(ye),ae=this.localClippingEnabled,K=Ee.init(this.clippingPlanes,ae),g=de.get(R,m.length),g.init(),m.push(g),Gt(R,k,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(V,B),this.info.render.frame++,K===!0&&Ee.beginShadows();const Y=p.state.shadowsArray;if(te.render(Y,R,k),K===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),Be.render(g,R),p.setupLights(x._useLegacyLights),k.isArrayCamera){const j=k.cameras;for(let X=0,_e=j.length;X<_e;X++){const we=j[X];et(g,R,we,we.viewport)}}else et(g,R,k);b!==null&&(w.updateMultisampleRenderTarget(b),w.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(x,R,k),L.resetDefaultState(),P=-1,M=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Gt(R,k,Y,j){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||H.intersectsSprite(R)){j&&Ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ye);const we=ne.update(R),Ue=R.material;Ue.visible&&g.push(R,we,Ue,Y,Ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||H.intersectsObject(R))){const we=ne.update(R),Ue=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ce.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ce.copy(we.boundingSphere.center)),Ce.applyMatrix4(R.matrixWorld).applyMatrix4(ye)),Array.isArray(Ue)){const Ne=we.groups;for(let qe=0,ze=Ne.length;qe<ze;qe++){const Ve=Ne[qe],dt=Ue[Ve.materialIndex];dt&&dt.visible&&g.push(R,we,dt,Y,Ce.z,Ve)}}else Ue.visible&&g.push(R,we,Ue,Y,Ce.z,null)}}const _e=R.children;for(let we=0,Ue=_e.length;we<Ue;we++)Gt(_e[we],k,Y,j)}function et(R,k,Y,j){const X=R.opaque,_e=R.transmissive,we=R.transparent;p.setupLightsView(Y),K===!0&&Ee.setGlobalState(x.clippingPlanes,Y),_e.length>0&&Lt(X,_e,k,Y),j&&ue.viewport(A.copy(j)),X.length>0&&Bn(X,k,Y),_e.length>0&&Bn(_e,k,Y),we.length>0&&Bn(we,k,Y),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Lt(R,k,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const _e=De.isWebGL2;Se===null&&(Se=new Pn(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?Zn:fi,minFilter:or,samples:_e?4:0})),x.getDrawingBufferSize(Re),_e?Se.setSize(Re.x,Re.y):Se.setSize(ko(Re.x),ko(Re.y));const we=x.getRenderTarget();x.setRenderTarget(Se),x.getClearColor(q),C=x.getClearAlpha(),C<1&&x.setClearColor(16777215,.5),x.clear();const Ue=x.toneMapping;x.toneMapping=di,Bn(R,Y,j),w.updateMultisampleRenderTarget(Se),w.updateRenderTargetMipmap(Se);let Ne=!1;for(let qe=0,ze=k.length;qe<ze;qe++){const Ve=k[qe],dt=Ve.object,xe=Ve.geometry,nt=Ve.material,Tt=Ve.group;if(nt.side===_n&&dt.layers.test(j.layers)){const Qe=nt.side;nt.side=$t,nt.needsUpdate=!0,ks(dt,Y,j,xe,nt,Tt),nt.side=Qe,nt.needsUpdate=!0,Ne=!0}}Ne===!0&&(w.updateMultisampleRenderTarget(Se),w.updateRenderTargetMipmap(Se)),x.setRenderTarget(we),x.setClearColor(q,C),x.toneMapping=Ue}function Bn(R,k,Y){const j=k.isScene===!0?k.overrideMaterial:null;for(let X=0,_e=R.length;X<_e;X++){const we=R[X],Ue=we.object,Ne=we.geometry,qe=j===null?we.material:j,ze=we.group;Ue.layers.test(Y.layers)&&ks(Ue,k,Y,Ne,qe,ze)}}function ks(R,k,Y,j,X,_e){R.onBeforeRender(x,k,Y,j,X,_e),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(x,k,Y,j,R,_e),X.transparent===!0&&X.side===_n&&X.forceSinglePass===!1?(X.side=$t,X.needsUpdate=!0,x.renderBufferDirect(Y,k,j,X,R,_e),X.side=gi,X.needsUpdate=!0,x.renderBufferDirect(Y,k,j,X,R,_e),X.side=_n):x.renderBufferDirect(Y,k,j,X,R,_e),R.onAfterRender(x,k,Y,j,X,_e)}function Mi(R,k,Y){k.isScene!==!0&&(k=me);const j=Xe.get(R),X=p.state.lights,_e=p.state.shadowsArray,we=X.state.version,Ue=ge.getParameters(R,X.state,_e,k,Y),Ne=ge.getProgramCacheKey(Ue);let qe=j.programs;j.environment=R.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(R.isMeshStandardMaterial?F:S).get(R.envMap||j.environment),qe===void 0&&(R.addEventListener("dispose",ce),qe=new Map,j.programs=qe);let ze=qe.get(Ne);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===we)return Vs(R,Ue),ze}else Ue.uniforms=ge.getUniforms(R),R.onBuild(Y,Ue,x),R.onBeforeCompile(Ue,x),ze=ge.acquireProgram(Ue,Ne),qe.set(Ne,ze),j.uniforms=Ue.uniforms;const Ve=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=Ee.uniform),Vs(R,Ue),j.needsLights=br(R),j.lightsStateVersion=we,j.needsLights&&(Ve.ambientLightColor.value=X.state.ambient,Ve.lightProbe.value=X.state.probe,Ve.directionalLights.value=X.state.directional,Ve.directionalLightShadows.value=X.state.directionalShadow,Ve.spotLights.value=X.state.spot,Ve.spotLightShadows.value=X.state.spotShadow,Ve.rectAreaLights.value=X.state.rectArea,Ve.ltc_1.value=X.state.rectAreaLTC1,Ve.ltc_2.value=X.state.rectAreaLTC2,Ve.pointLights.value=X.state.point,Ve.pointLightShadows.value=X.state.pointShadow,Ve.hemisphereLights.value=X.state.hemi,Ve.directionalShadowMap.value=X.state.directionalShadowMap,Ve.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ve.spotShadowMap.value=X.state.spotShadowMap,Ve.spotLightMatrix.value=X.state.spotLightMatrix,Ve.spotLightMap.value=X.state.spotLightMap,Ve.pointShadowMap.value=X.state.pointShadowMap,Ve.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function Gs(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=sa.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Vs(R,k){const Y=Xe.get(R);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Sr(R,k,Y,j,X){k.isScene!==!0&&(k=me),w.resetTextureUnits();const _e=k.fog,we=j.isMeshStandardMaterial?k.environment:null,Ue=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Qn,Ne=(j.isMeshStandardMaterial?F:S).get(j.envMap||we),qe=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ze=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ve=!!Y.morphAttributes.position,dt=!!Y.morphAttributes.normal,xe=!!Y.morphAttributes.color;let nt=di;j.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(nt=x.toneMapping);const Tt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Qe=Tt!==void 0?Tt.length:0,Ye=Xe.get(j),$i=p.state.lights;if(K===!0&&(ae===!0||R!==M)){const fn=R===M&&j.id===P;Ee.setState(j,R,fn)}let ut=!1;j.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==$i.state.version||Ye.outputColorSpace!==Ue||X.isBatchedMesh&&Ye.batching===!1||!X.isBatchedMesh&&Ye.batching===!0||X.isInstancedMesh&&Ye.instancing===!1||!X.isInstancedMesh&&Ye.instancing===!0||X.isSkinnedMesh&&Ye.skinning===!1||!X.isSkinnedMesh&&Ye.skinning===!0||X.isInstancedMesh&&Ye.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ye.instancingColor===!1&&X.instanceColor!==null||Ye.envMap!==Ne||j.fog===!0&&Ye.fog!==_e||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ee.numPlanes||Ye.numIntersection!==Ee.numIntersection)||Ye.vertexAlphas!==qe||Ye.vertexTangents!==ze||Ye.morphTargets!==Ve||Ye.morphNormals!==dt||Ye.morphColors!==xe||Ye.toneMapping!==nt||De.isWebGL2===!0&&Ye.morphTargetsCount!==Qe)&&(ut=!0):(ut=!0,Ye.__version=j.version);let Ln=Ye.currentProgram;ut===!0&&(Ln=Mi(j,k,X));let Gl=!1,Hs=!1,Ua=!1;const Nt=Ln.getUniforms(),Si=Ye.uniforms;if(ue.useProgram(Ln.program)&&(Gl=!0,Hs=!0,Ua=!0),j.id!==P&&(P=j.id,Hs=!0),Gl||M!==R){Nt.setValue(W,"projectionMatrix",R.projectionMatrix),Nt.setValue(W,"viewMatrix",R.matrixWorldInverse);const fn=Nt.map.cameraPosition;fn!==void 0&&fn.setValue(W,Ce.setFromMatrixPosition(R.matrixWorld)),De.logarithmicDepthBuffer&&Nt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Nt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,Hs=!0,Ua=!0)}if(X.isSkinnedMesh){Nt.setOptional(W,X,"bindMatrix"),Nt.setOptional(W,X,"bindMatrixInverse");const fn=X.skeleton;fn&&(De.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),Nt.setValue(W,"boneTexture",fn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Nt.setOptional(W,X,"batchingTexture"),Nt.setValue(W,"batchingTexture",X._matricesTexture,w));const Na=Y.morphAttributes;if((Na.position!==void 0||Na.normal!==void 0||Na.color!==void 0&&De.isWebGL2===!0)&&Fe.update(X,Y,Ln),(Hs||Ye.receiveShadow!==X.receiveShadow)&&(Ye.receiveShadow=X.receiveShadow,Nt.setValue(W,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Si.envMap.value=Ne,Si.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Hs&&(Nt.setValue(W,"toneMappingExposure",x.toneMappingExposure),Ye.needsLights&&Er(Si,Ua),_e&&j.fog===!0&&le.refreshFogUniforms(Si,_e),le.refreshMaterialUniforms(Si,j,G,O,Se),sa.upload(W,Gs(Ye),Si,w)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(sa.upload(W,Gs(Ye),Si,w),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Nt.setValue(W,"center",X.center),Nt.setValue(W,"modelViewMatrix",X.modelViewMatrix),Nt.setValue(W,"normalMatrix",X.normalMatrix),Nt.setValue(W,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const fn=j.uniformsGroups;for(let Fa=0,ef=fn.length;Fa<ef;Fa++)if(De.isWebGL2){const Vl=fn[Fa];se.update(Vl,Ln),se.bind(Vl,Ln)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ln}function Er(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function br(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,k,Y){Xe.get(R.texture).__webglTexture=k,Xe.get(R.depthTexture).__webglTexture=Y;const j=Xe.get(R);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=Y===void 0,j.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,k){const Y=Xe.get(R);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,Y=0){b=R,T=k,E=Y;let j=!0,X=null,_e=!1,we=!1;if(R){const Ne=Xe.get(R);Ne.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(W.FRAMEBUFFER,null),j=!1):Ne.__webglFramebuffer===void 0?w.setupRenderTarget(R):Ne.__hasExternalTextures&&w.rebindTextures(R,Xe.get(R.texture).__webglTexture,Xe.get(R.depthTexture).__webglTexture);const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(we=!0);const ze=Xe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ze[k])?X=ze[k][Y]:X=ze[k],_e=!0):De.isWebGL2&&R.samples>0&&w.useMultisampledRTT(R)===!1?X=Xe.get(R).__webglMultisampledFramebuffer:Array.isArray(ze)?X=ze[Y]:X=ze,A.copy(R.viewport),U.copy(R.scissor),z=R.scissorTest}else A.copy(Z).multiplyScalar(G).floor(),U.copy(ee).multiplyScalar(G).floor(),z=Q;if(ue.bindFramebuffer(W.FRAMEBUFFER,X)&&De.drawBuffers&&j&&ue.drawBuffers(R,X),ue.viewport(A),ue.scissor(U),ue.setScissorTest(z),_e){const Ne=Xe.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ne.__webglTexture,Y)}else if(we){const Ne=Xe.get(R.texture),qe=k||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ne.__webglTexture,Y||0,qe)}P=-1},this.readRenderTargetPixels=function(R,k,Y,j,X,_e,we){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Ue=Ue[we]),Ue){ue.bindFramebuffer(W.FRAMEBUFFER,Ue);try{const Ne=R.texture,qe=Ne.format,ze=Ne.type;if(qe!==Cn&&fe.convert(qe)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=ze===Zn&&(oe.has("EXT_color_buffer_half_float")||De.isWebGL2&&oe.has("EXT_color_buffer_float"));if(ze!==fi&&fe.convert(ze)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===li&&(De.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-j&&Y>=0&&Y<=R.height-X&&W.readPixels(k,Y,j,X,fe.convert(qe),fe.convert(ze),_e)}finally{const Ne=b!==null?Xe.get(b).__webglFramebuffer:null;ue.bindFramebuffer(W.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(R,k,Y=0){const j=Math.pow(2,-Y),X=Math.floor(k.image.width*j),_e=Math.floor(k.image.height*j);w.setTexture2D(k,0),W.copyTexSubImage2D(W.TEXTURE_2D,Y,0,0,R.x,R.y,X,_e),ue.unbindTexture()},this.copyTextureToTexture=function(R,k,Y,j=0){const X=k.image.width,_e=k.image.height,we=fe.convert(Y.format),Ue=fe.convert(Y.type);w.setTexture2D(Y,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Y.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Y.unpackAlignment),k.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,j,R.x,R.y,X,_e,we,Ue,k.image.data):k.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,j,R.x,R.y,k.mipmaps[0].width,k.mipmaps[0].height,we,k.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,j,R.x,R.y,we,Ue,k.image),j===0&&Y.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(R,k,Y,j,X=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=R.max.x-R.min.x+1,we=R.max.y-R.min.y+1,Ue=R.max.z-R.min.z+1,Ne=fe.convert(j.format),qe=fe.convert(j.type);let ze;if(j.isData3DTexture)w.setTexture3D(j,0),ze=W.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)w.setTexture2DArray(j,0),ze=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,j.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,j.unpackAlignment);const Ve=W.getParameter(W.UNPACK_ROW_LENGTH),dt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),xe=W.getParameter(W.UNPACK_SKIP_PIXELS),nt=W.getParameter(W.UNPACK_SKIP_ROWS),Tt=W.getParameter(W.UNPACK_SKIP_IMAGES),Qe=Y.isCompressedTexture?Y.mipmaps[X]:Y.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,Qe.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Qe.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,R.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,R.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,R.min.z),Y.isDataTexture||Y.isData3DTexture?W.texSubImage3D(ze,X,k.x,k.y,k.z,_e,we,Ue,Ne,qe,Qe.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(ze,X,k.x,k.y,k.z,_e,we,Ue,Ne,Qe.data)):W.texSubImage3D(ze,X,k.x,k.y,k.z,_e,we,Ue,Ne,qe,Qe),W.pixelStorei(W.UNPACK_ROW_LENGTH,Ve),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,dt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,xe),W.pixelStorei(W.UNPACK_SKIP_ROWS,nt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Tt),X===0&&j.generateMipmaps&&W.generateMipmap(ze),ue.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),ue.unbindTexture()},this.resetState=function(){T=0,E=0,b=null,ue.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ul?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===Aa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?zi:Au}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===zi?It:Qn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class sx extends ju{}sx.prototype.isWebGL1Renderer=!0;class gl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new gl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rx extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Zs extends qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oh=new I,lh=new I,ch=new vt,po=new yr,Yr=new vr;class ax extends Rt{constructor(e=new Mt,t=new Zs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)oh.fromBufferAttribute(t,i-1),lh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=oh.distanceTo(lh);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=r,e.ray.intersectsSphere(Yr)===!1)return;ch.copy(i).invert(),po.copy(e.ray).applyMatrix4(ch);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,h=new I,d=new I,u=new I,f=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const m=Math.max(0,a.start),v=Math.min(_.count,a.start+a.count);for(let x=m,y=v-1;x<y;x+=f){const T=_.getX(x),E=_.getX(x+1);if(c.fromBufferAttribute(p,T),h.fromBufferAttribute(p,E),po.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(u);P<e.near||P>e.far||t.push({distance:P,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let x=m,y=v-1;x<y;x+=f){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),po.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(u);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const hh=new I,uh=new I;class $r extends ax{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)hh.fromBufferAttribute(t,i),uh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hh.distanceTo(uh);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _l extends qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dh=new vt,Ho=new yr,jr=new vr,Kr=new I;class Ku extends Rt{constructor(e=new Mt,t=new _l){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(i),jr.radius+=r,e.ray.intersectsSphere(jr)===!1)return;dh.copy(i).invert(),Ho.copy(e.ray).applyMatrix4(dh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=u,g=f;_<g;_++){const p=c.getX(_);Kr.fromBufferAttribute(d,p),fh(Kr,p,l,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let _=u,g=f;_<g;_++)Kr.fromBufferAttribute(d,_),fh(Kr,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function fh(s,e,t,n,i,r,a){const o=Ho.distanceSqToPoint(s);if(o<t){const l=new I;Ho.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class ga extends jt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pa extends Mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new I,y=new I,T=new I;for(let E=0;E<t.length;E+=3)f(t[E+0],x),f(t[E+1],y),f(t[E+2],T),l(x,y,T,v)}function l(v,x,y,T){const E=T+1,b=[];for(let P=0;P<=E;P++){b[P]=[];const M=v.clone().lerp(y,P/E),A=x.clone().lerp(y,P/E),U=E-P;for(let z=0;z<=U;z++)z===0&&P===E?b[P][z]=M:b[P][z]=M.clone().lerp(A,z/U)}for(let P=0;P<E;P++)for(let M=0;M<2*(E-P)-1;M++){const A=Math.floor(M/2);M%2===0?(u(b[P][A+1]),u(b[P+1][A]),u(b[P][A])):(u(b[P][A+1]),u(b[P+1][A+1]),u(b[P+1][A]))}}function c(v){const x=new I;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(v),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const v=new I;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const y=p(v)/2/Math.PI+.5,T=m(v)/Math.PI+.5;a.push(y,1-T)}_(),d()}function d(){for(let v=0;v<a.length;v+=6){const x=a[v+0],y=a[v+2],T=a[v+4],E=Math.max(x,y,T),b=Math.min(x,y,T);E>.9&&b<.1&&(x<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,x){const y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function _(){const v=new I,x=new I,y=new I,T=new I,E=new Te,b=new Te,P=new Te;for(let M=0,A=0;M<r.length;M+=9,A+=6){v.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),E.set(a[A+0],a[A+1]),b.set(a[A+2],a[A+3]),P.set(a[A+4],a[A+5]),T.copy(v).add(x).add(y).divideScalar(3);const U=p(T);g(E,A+0,v,U),g(b,A+2,x,U),g(P,A+4,y,U)}}function g(v,x,y,T){T<0&&v.x===1&&(a[x]=v.x-1),y.x===0&&y.z===0&&(a[x]=T/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.vertices,e.indices,e.radius,e.details)}}const Zr=new I,Qr=new I,mo=new I,Jr=new gs;class ox extends Mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(er*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:p,c:m}=Jr;if(g.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),Jr.getNormal(mo),d[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,d[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const x=(v+1)%3,y=d[v],T=d[x],E=Jr[h[v]],b=Jr[h[x]],P=`${y}_${T}`,M=`${T}_${y}`;M in u&&u[M]?(mo.dot(u[M].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(b.x,b.y,b.z)),u[M]=null):P in u||(u[P]={index0:c[v],index1:c[x],normal:mo.clone()})}}for(const _ in u)if(u[_]){const{index0:g,index1:p}=u[_];Zr.fromBufferAttribute(o,g),Qr.fromBufferAttribute(o,p),f.push(Zr.x,Zr.y,Zr.z),f.push(Qr.x,Qr.y,Qr.z)}this.setAttribute("position",new at(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class xl extends Pa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xl(e.radius,e.detail)}}class _a extends Mt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/i,f=new I,_=new Te;for(let g=0;g<=i;g++){for(let p=0;p<=n;p++){const m=r+p/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,h.push(_.x,_.y)}d+=u}for(let g=0;g<i;g++){const p=g*(n+1);for(let m=0;m<n;m++){const v=m+p,x=v,y=v+n+1,T=v+n+2,E=v+1;o.push(x,y,E),o.push(y,T,E)}}this.setIndex(o),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class vl extends Mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new I,u=new I,f=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const v=[],x=m/n;let y=0;m===0&&a===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const E=T/t;d.x=-e*Math.cos(i+E*r)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(i+E*r)*Math.sin(a+x*o),_.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),p.push(E+y,1-x),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const x=h[m][v+1],y=h[m][v],T=h[m+1][v],E=h[m+1][v+1];(m!==0||a>0)&&f.push(x,y,E),(m!==n-1||l<Math.PI)&&f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new at(_,3)),this.setAttribute("normal",new at(g,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yl extends Pa{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yl(e.radius,e.detail)}}class vs extends Mt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new I,d=new I,u=new I;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const g=_/i*r,p=f/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(g),d.y=(e+t*Math.cos(p))*Math.sin(g),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const g=(i+1)*f+_-1,p=(i+1)*(f-1)+_-1,m=(i+1)*(f-1)+_,v=(i+1)*f+_;a.push(g,p,v),a.push(p,m,v)}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ph extends Mt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new I,r=new I;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,f=d.count;for(let _=u,g=u+f;_<g;_+=3)for(let p=0;p<3;p++){const m=o.getX(_+p),v=o.getX(_+(p+1)%3);i.fromBufferAttribute(a,m),r.fromBufferAttribute(a,v),mh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),mh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new at(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function mh(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class lx extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cx extends qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cu,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hx extends cx{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ml extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const go=new vt,gh=new I,_h=new I;class Zu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fl,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(gh),_h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_h),t.updateMatrixWorld(),go.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(go),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xh=new vt,js=new I,_o=new I;class ux extends Zu{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),js.setFromMatrixPosition(e.matrixWorld),n.position.copy(js),_o.copy(n.position),_o.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_o),n.updateMatrixWorld(),i.makeTranslation(-js.x,-js.y,-js.z),xh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh)}}class Wo extends Ml{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ux}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dx extends Zu{constructor(){super(new pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xo extends Ml{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new dx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fx extends Ml{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vh(){return(typeof performance>"u"?Date:performance).now()}class px{constructor(e,t,n=0,i=1/0){this.ray=new yr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new dl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Xo(e,this,n,t),n.sort(yh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Xo(e[i],this,n,t);return n.sort(yh),n}}function yh(s,e){return s.distance-e.distance}function Xo(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Xo(i[r],e,t,!0)}}class Mh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Sh=new I,ea=new I;class mx{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Sh.subVectors(e,this.start),ea.subVectors(this.end,this.start);const n=ea.dot(ea);let r=ea.dot(Sh)/n;return t&&(r=Dt(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);const Eh={type:"change"},vo={type:"start"},bh={type:"end"},ta=new yr,Th=new Yn,gx=Math.cos(70*Jf.DEG2RAD);class _x extends Xi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",ve),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ve),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Eh),n.update(),r=i.NONE},this.update=function(){const L=new I,se=new Wi().setFromUnitVectors(e.up,new I(0,1,0)),Me=se.clone().invert(),pe=new I,re=new Wi,D=new I,ie=2*Math.PI;return function(Ie=null){const Ae=n.object.position;L.copy(Ae).sub(n.target),L.applyQuaternion(se),o.setFromVector3(L),n.autoRotate&&r===i.NONE&&z(A(Ie)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ke=n.minAzimuthAngle,Ge=n.maxAzimuthAngle;isFinite(ke)&&isFinite(Ge)&&(ke<-Math.PI?ke+=ie:ke>Math.PI&&(ke-=ie),Ge<-Math.PI?Ge+=ie:Ge>Math.PI&&(Ge-=ie),ke<=Ge?o.theta=Math.max(ke,Math.min(Ge,o.theta)):o.theta=o.theta>(ke+Ge)/2?Math.max(ke,o.theta):Math.min(Ge,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&E||n.object.isOrthographicCamera?o.radius=Z(o.radius):o.radius=Z(o.radius*c),L.setFromSpherical(o),L.applyQuaternion(Me),Ae.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let tt=!1;if(n.zoomToCursor&&E){let st=null;if(n.object.isPerspectiveCamera){const je=L.length();st=Z(je*c);const ct=je-st;n.object.position.addScaledVector(y,ct),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const je=new I(T.x,T.y,0);je.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),tt=!0;const ct=new I(T.x,T.y,0);ct.unproject(n.object),n.object.position.sub(ct).add(je),n.object.updateMatrixWorld(),st=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;st!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(st).add(n.object.position):(ta.origin.copy(n.object.position),ta.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ta.direction))<gx?e.lookAt(n.target):(Th.setFromNormalAndCoplanarPoint(n.object.up,n.target),ta.intersectPlane(Th,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),tt=!0);return c=1,E=!1,tt||pe.distanceToSquared(n.object.position)>a||8*(1-re.dot(n.object.quaternion))>a||D.distanceToSquared(n.target)>0?(n.dispatchEvent(Eh),pe.copy(n.object.position),re.copy(n.object.quaternion),D.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Be),n.domElement.removeEventListener("pointerdown",w),n.domElement.removeEventListener("pointercancel",F),n.domElement.removeEventListener("wheel",ne),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",F),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ve),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new Mh,l=new Mh;let c=1;const h=new I,d=new Te,u=new Te,f=new Te,_=new Te,g=new Te,p=new Te,m=new Te,v=new Te,x=new Te,y=new I,T=new Te;let E=!1;const b=[],P={};let M=!1;function A(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function U(L){const se=Math.abs(L*.01);return Math.pow(.95,n.zoomSpeed*se)}function z(L){l.theta-=L}function q(L){l.phi-=L}const C=function(){const L=new I;return function(Me,pe){L.setFromMatrixColumn(pe,0),L.multiplyScalar(-Me),h.add(L)}}(),N=function(){const L=new I;return function(Me,pe){n.screenSpacePanning===!0?L.setFromMatrixColumn(pe,1):(L.setFromMatrixColumn(pe,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(Me),h.add(L)}}(),O=function(){const L=new I;return function(Me,pe){const re=n.domElement;if(n.object.isPerspectiveCamera){const D=n.object.position;L.copy(D).sub(n.target);let ie=L.length();ie*=Math.tan(n.object.fov/2*Math.PI/180),C(2*Me*ie/re.clientHeight,n.object.matrix),N(2*pe*ie/re.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(C(Me*(n.object.right-n.object.left)/n.object.zoom/re.clientWidth,n.object.matrix),N(pe*(n.object.top-n.object.bottom)/n.object.zoom/re.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function G(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(L,se){if(!n.zoomToCursor)return;E=!0;const Me=n.domElement.getBoundingClientRect(),pe=L-Me.left,re=se-Me.top,D=Me.width,ie=Me.height;T.x=pe/D*2-1,T.y=-(re/ie)*2+1,y.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function Z(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function ee(L){d.set(L.clientX,L.clientY)}function Q(L){B(L.clientX,L.clientX),m.set(L.clientX,L.clientY)}function H(L){_.set(L.clientX,L.clientY)}function K(L){u.set(L.clientX,L.clientY),f.subVectors(u,d).multiplyScalar(n.rotateSpeed);const se=n.domElement;z(2*Math.PI*f.x/se.clientHeight),q(2*Math.PI*f.y/se.clientHeight),d.copy(u),n.update()}function ae(L){v.set(L.clientX,L.clientY),x.subVectors(v,m),x.y>0?G(U(x.y)):x.y<0&&V(U(x.y)),m.copy(v),n.update()}function Se(L){g.set(L.clientX,L.clientY),p.subVectors(g,_).multiplyScalar(n.panSpeed),O(p.x,p.y),_.copy(g),n.update()}function ye(L){B(L.clientX,L.clientY),L.deltaY<0?V(U(L.deltaY)):L.deltaY>0&&G(U(L.deltaY)),n.update()}function Re(L){let se=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),se=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),se=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),se=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),se=!0;break}se&&(L.preventDefault(),n.update())}function Ce(L){if(b.length===1)d.set(L.pageX,L.pageY);else{const se=fe(L),Me=.5*(L.pageX+se.x),pe=.5*(L.pageY+se.y);d.set(Me,pe)}}function me(L){if(b.length===1)_.set(L.pageX,L.pageY);else{const se=fe(L),Me=.5*(L.pageX+se.x),pe=.5*(L.pageY+se.y);_.set(Me,pe)}}function Oe(L){const se=fe(L),Me=L.pageX-se.x,pe=L.pageY-se.y,re=Math.sqrt(Me*Me+pe*pe);m.set(0,re)}function W(L){n.enableZoom&&Oe(L),n.enablePan&&me(L)}function Ze(L){n.enableZoom&&Oe(L),n.enableRotate&&Ce(L)}function oe(L){if(b.length==1)u.set(L.pageX,L.pageY);else{const Me=fe(L),pe=.5*(L.pageX+Me.x),re=.5*(L.pageY+Me.y);u.set(pe,re)}f.subVectors(u,d).multiplyScalar(n.rotateSpeed);const se=n.domElement;z(2*Math.PI*f.x/se.clientHeight),q(2*Math.PI*f.y/se.clientHeight),d.copy(u)}function De(L){if(b.length===1)g.set(L.pageX,L.pageY);else{const se=fe(L),Me=.5*(L.pageX+se.x),pe=.5*(L.pageY+se.y);g.set(Me,pe)}p.subVectors(g,_).multiplyScalar(n.panSpeed),O(p.x,p.y),_.copy(g)}function ue(L){const se=fe(L),Me=L.pageX-se.x,pe=L.pageY-se.y,re=Math.sqrt(Me*Me+pe*pe);v.set(0,re),x.set(0,Math.pow(v.y/m.y,n.zoomSpeed)),G(x.y),m.copy(v);const D=(L.pageX+se.x)*.5,ie=(L.pageY+se.y)*.5;B(D,ie)}function We(L){n.enableZoom&&ue(L),n.enablePan&&De(L)}function Xe(L){n.enableZoom&&ue(L),n.enableRotate&&oe(L)}function w(L){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",F)),Fe(L),L.pointerType==="touch"?Ee(L):$(L))}function S(L){n.enabled!==!1&&(L.pointerType==="touch"?te(L):J(L))}function F(L){Le(L),b.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",F)),n.dispatchEvent(bh),r=i.NONE}function $(L){let se;switch(L.button){case 0:se=n.mouseButtons.LEFT;break;case 1:se=n.mouseButtons.MIDDLE;break;case 2:se=n.mouseButtons.RIGHT;break;default:se=-1}switch(se){case ji.DOLLY:if(n.enableZoom===!1)return;Q(L),r=i.DOLLY;break;case ji.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;H(L),r=i.PAN}else{if(n.enableRotate===!1)return;ee(L),r=i.ROTATE}break;case ji.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;ee(L),r=i.ROTATE}else{if(n.enablePan===!1)return;H(L),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(vo)}function J(L){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;K(L);break;case i.DOLLY:if(n.enableZoom===!1)return;ae(L);break;case i.PAN:if(n.enablePan===!1)return;Se(L);break}}function ne(L){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(L.preventDefault(),n.dispatchEvent(vo),ye(ge(L)),n.dispatchEvent(bh))}function ge(L){const se=L.deltaMode,Me={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(se){case 1:Me.deltaY*=16;break;case 2:Me.deltaY*=100;break}return L.ctrlKey&&!M&&(Me.deltaY*=10),Me}function le(L){L.key==="Control"&&(M=!0,document.addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(L){L.key==="Control"&&(M=!1,document.removeEventListener("keyup",de,{passive:!0,capture:!0}))}function ve(L){n.enabled===!1||n.enablePan===!1||Re(L)}function Ee(L){switch(be(L),b.length){case 1:switch(n.touches.ONE){case Ki.ROTATE:if(n.enableRotate===!1)return;Ce(L),r=i.TOUCH_ROTATE;break;case Ki.PAN:if(n.enablePan===!1)return;me(L),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Ki.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;W(L),r=i.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ze(L),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(vo)}function te(L){switch(be(L),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;oe(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;De(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;We(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Xe(L),n.update();break;default:r=i.NONE}}function Be(L){n.enabled!==!1&&L.preventDefault()}function Fe(L){b.push(L.pointerId)}function Le(L){delete P[L.pointerId];for(let se=0;se<b.length;se++)if(b[se]==L.pointerId){b.splice(se,1);return}}function be(L){let se=P[L.pointerId];se===void 0&&(se=new Te,P[L.pointerId]=se),se.set(L.pageX,L.pageY)}function fe(L){const se=L.pointerId===b[0]?b[1]:b[0];return P[se]}n.domElement.addEventListener("contextmenu",Be),n.domElement.addEventListener("pointerdown",w),n.domElement.addEventListener("pointercancel",F),n.domElement.addEventListener("wheel",ne,{passive:!1}),document.addEventListener("keydown",le,{passive:!0,capture:!0}),this.update()}}const Ju={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class zs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const xx=new pl(-1,1,1,-1,0,1);class vx extends Mt{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}}const yx=new vx;class Sl{constructor(e){this._mesh=new Et(yx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,xx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Mx extends zs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=lr.clone(e.uniforms),this.material=new Yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Sl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class wh extends zs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Sx extends zs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ex{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Te);this._width=n.width,this._height=n.height,t=new Pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mx(Ju),this.copyPass.material.blending=Kn,this.clock=new Qu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}wh!==void 0&&(a instanceof wh?n=!0:a instanceof Sx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class bx extends zs{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const Tx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ls extends zs{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Te(e.x,e.y):new Te(256,256),this.clearColor=new Pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Pn(r,a,{type:Zn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new Pn(r,a,{type:Zn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new Pn(r,a,{type:Zn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=Tx;this.highPassUniforms=lr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Yt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Te(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Ju;this.copyUniforms=lr.clone(h.uniforms),this.blendMaterial=new Yt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Bt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pe,this.oldClearAlpha=1,this.basic=new wn,this.fsQuad=new Sl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Te(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ls.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ls.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Te(.5,.5)},direction:{value:new Te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ls.BlurDirectionX=new Te(1,0);Ls.BlurDirectionY=new Te(0,1);const wx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Ax extends zs{constructor(){super();const e=wx;this.uniforms=lr.clone(e.uniforms),this.material=new lx({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Sl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===mu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_u?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===cl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xu&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function qn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function ed(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},cr={duration:.5,overwrite:!1,delay:0},El,Ut,pt,vn=1e8,lt=1/vn,qo=Math.PI*2,Cx=qo/4,Rx=0,td=Math.sqrt,Px=Math.cos,Lx=Math.sin,Pt=function(e){return typeof e=="string"},xt=function(e){return typeof e=="function"},Jn=function(e){return typeof e=="number"},bl=function(e){return typeof e>"u"},On=function(e){return typeof e=="object"},Zt=function(e){return e!==!1},Tl=function(){return typeof window<"u"},na=function(e){return xt(e)||Pt(e)},nd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kt=Array.isArray,Ix=/random\([^)]+\)/g,Dx=/,\s*/g,Ah=/(?:-?\.?\d|\.)+/gi,id=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ys=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,yo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sd=/[+-]=-?[.\d]+/,Ux=/[^,'"\[\]\s]+/gi,Nx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,gt,In,Yo,wl,un={},xa={},rd,ad=function(e){return(xa=Is(e,un))&&tn},Al=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},hr=function(e,t){return!t&&console.warn(e)},od=function(e,t){return e&&(un[e]=t)&&xa&&(xa[e]=t)||un},ur=function(){return 0},Fx={suppressEvents:!0,isStart:!0,kill:!1},ra={suppressEvents:!0,kill:!1},Ox={suppressEvents:!0},Cl={},pi=[],$o={},ld,rn={},Mo={},Ch=30,aa=[],Rl="",Pl=function(e){var t=e[0],n,i;if(On(t)||xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=aa.length;i--&&!aa[i].targetTest(t););n=aa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Pd(e[i],n)))||e.splice(i,1);return e},ki=function(e){return e._gsap||Pl(yn(e))[0]._gsap},cd=function(e,t,n){return(n=e[t])&&xt(n)?e[t]():bl(n)&&e.getAttribute&&e.getAttribute(t)||n},Qt=function(e,t){return(e=e.split(",")).forEach(t)||e},yt=function(e){return Math.round(e*1e5)/1e5||0},mt=function(e){return Math.round(e*1e7)/1e7||0},bs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Bx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},va=function(){var e=pi.length,t=pi.slice(0),n,i;for($o={},pi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ll=function(e){return!!(e._initted||e._startAt||e.add)},hd=function(e,t,n,i){pi.length&&!Ut&&va(),e.render(t,n,!!(Ut&&t<0&&Ll(e))),pi.length&&!Ut&&va()},ud=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ux).length<2?t:Pt(e)?e.trim():e},dd=function(e){return e},dn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},zx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Is=function(e,t){for(var n in t)e[n]=t[n];return e},Rh=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=On(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},ya=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},nr=function(e){var t=e.parent||gt,n=e.keyframes?zx(kt(e.keyframes)):dn;if(Zt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},kx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},fd=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},La=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},_i=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Gi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Gx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},jo=function(e,t,n,i){return e._startAt&&(Ut?e._startAt.revert(ra):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Vx=function s(e){return!e||e._ts&&s(e.parent)},Ph=function(e){return e._repeat?Ds(e._tTime,e=e.duration()+e._rDelay)*e:0},Ds=function(e,t){var n=Math.floor(e=mt(e/t));return e&&n===e?n-1:n},Ma=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ia=function(e){return e._end=mt(e._start+(e._tDur/Math.abs(e._ts||e._rts||lt)||0))},Da=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=mt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ia(e),n._dirty||Gi(n,e)),e},pd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ma(e.rawTime(),t),(!t._dur||Mr(0,t.totalDuration(),n)-t._tTime>lt)&&t.render(n,!0)),Gi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-lt}},Nn=function(e,t,n,i){return t.parent&&_i(t),t._start=mt((Jn(n)?n:n||e!==gt?mn(e,n,t):e._time)+t._delay),t._end=mt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),fd(e,t,"_first","_last",e._sort?"_start":0),Ko(t)||(e._recent=t),i||pd(e,t),e._ts<0&&Da(e,e._tTime),e},md=function(e,t){return(un.ScrollTrigger||Al("scrollTrigger",t))&&un.ScrollTrigger.create(t,e)},gd=function(e,t,n,i,r){if(Dl(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Ut&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ld!==on.frame)return pi.push(e),e._lazy=[r,i],1},Hx=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Ko=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Wx=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&Hx(e)&&!(!e._initted&&Ko(e))||(e._ts<0||e._dp._ts<0)&&!Ko(e))?0:1,o=e._rDelay,l=0,c,h,d;if(o&&e._repeat&&(l=Mr(0,e._tDur,t),h=Ds(l,o),e._yoyo&&h&1&&(a=1-a),h!==Ds(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Ut||i||e._zTime===lt||!t&&e._zTime){if(!e._initted&&gd(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?lt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&jo(e,t,n,!0),e._onUpdate&&!n&&ln(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ln(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&_i(e,1),!n&&!Ut&&(ln(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Xx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Us=function(e,t,n,i){var r=e._repeat,a=mt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:mt(a*(r+1)+e._rDelay*r):a,o>0&&!i&&Da(e,e._tTime=e._tDur*o),e.parent&&Ia(e),n||Gi(e.parent,e),e},Lh=function(e){return e instanceof qt?Gi(e):Us(e,e._dur)},qx={_start:0,endTime:ur,totalDuration:ur},mn=function s(e,t,n){var i=e.labels,r=e._recent||qx,a=e.duration()>=vn?r.endTime(!1):e._dur,o,l,c;return Pt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(kt(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},ir=function(e,t,n){var i=Jn(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Zt(l.vars.inherit)&&l.parent;a.immediateRender=Zt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new bt(t[0],a,t[r+1])},yi=function(e,t){return e||e===0?t(e):t},Mr=function(e,t,n){return n<e?e:n>t?t:n},zt=function(e,t){return!Pt(e)||!(t=Nx.exec(e))?"":t[1]},Yx=function(e,t,n){return yi(n,function(i){return Mr(e,t,i)})},Zo=[].slice,_d=function(e,t){return e&&On(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&On(e[0]))&&!e.nodeType&&e!==In},$x=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Pt(i)&&!t||_d(i,1)?(r=n).push.apply(r,yn(i)):n.push(i)})||n},yn=function(e,t,n){return pt&&!t&&pt.selector?pt.selector(e):Pt(e)&&!n&&(Yo||!Ns())?Zo.call((t||wl).querySelectorAll(e),0):kt(e)?$x(e,n):_d(e)?Zo.call(e,0):e?[e]:[]},Qo=function(e){return e=yn(e)[0]||hr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return yn(t,n.querySelectorAll?n:n===e?hr("Invalid scope")||wl.createElement("div"):e)}},xd=function(e){return e.sort(function(){return .5-Math.random()})},vd=function(e){if(xt(e))return e;var t=On(e)?e:{each:e},n=Vi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,d=i;return Pt(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(u,f,_){var g=(_||t).length,p=a[g],m,v,x,y,T,E,b,P,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,vn])[1],!M){for(b=-vn;b<(b=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(p=a[g]=[],m=l?Math.min(M,g)*h-.5:i%M,v=M===vn?0:l?g*d/M-.5:i/M|0,b=0,P=vn,E=0;E<g;E++)x=E%M-m,y=v-(E/M|0),p[E]=T=c?Math.abs(c==="y"?y:x):td(x*x+y*y),T>b&&(b=T),T<P&&(P=T);i==="random"&&xd(p),p.max=b-P,p.min=P,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),p.b=g<0?r-g:r,p.u=zt(t.amount||t.each)||0,n=n&&g<0?ov(n):n}return g=(p[u]-p.min)/p.max||0,mt(p.b+(n?n(g):g)*p.v)+p.u}},Jo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=mt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Jn(n)?0:zt(n))}},yd=function(e,t){var n=kt(e),i,r;return!n&&On(e)&&(i=n=e.radius||vn,e.values?(e=yn(e.values),(r=!Jn(e[0]))&&(i*=i)):e=Jo(e.increment)),yi(t,n?xt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=vn,h=0,d=e.length,u,f;d--;)r?(u=e[d].x-o,f=e[d].y-l,u=u*u+f*f):u=Math.abs(e[d]-o),u<c&&(c=u,h=d);return h=!i||c<=i?e[h]:a,r||h===a||Jn(a)?h:h+zt(a)}:Jo(e))},Md=function(e,t,n,i){return yi(kt(e)?!t:n===!0?!!(n=0):!i,function(){return kt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},jx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},Kx=function(e,t){return function(n){return e(parseFloat(n))+(t||zt(n))}},Zx=function(e,t,n){return Ed(e,t,0,1,n)},Sd=function(e,t,n){return yi(n,function(i){return e[~~t(i)]})},Qx=function s(e,t,n){var i=t-e;return kt(e)?Sd(e,s(0,e.length),t):yi(n,function(r){return(i+(r-e)%i)%i+e})},Jx=function s(e,t,n){var i=t-e,r=i*2;return kt(e)?Sd(e,s(0,e.length-1),t):yi(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},dr=function(e){return e.replace(Ix,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Dx);return Md(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Ed=function(e,t,n,i,r){var a=t-e,o=i-n;return yi(r,function(l){return n+((l-e)/a*o||0)})},ev=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var a=Pt(e),o={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(kt(e)&&!kt(t)){for(h=[],d=e.length,u=d-2,c=1;c<d;c++)h.push(s(e[c-1],e[c]));d--,r=function(_){_*=d;var g=Math.min(u,~~_);return h[g](_-g)},n=t}else i||(e=Is(kt(e)?[]:{},e));if(!h){for(l in t)Il.call(o,e,l,"get",t[l]);r=function(_){return Fl(_,o)||(a?e.p:e)}}}return yi(n,r)},Ih=function(e,t,n){var i=e.labels,r=vn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},ln=function(e,t,n){var i=e.vars,r=i[t],a=pt,o=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&pi.length&&va(),o&&(pt=o),h=l?r.apply(c,l):r.call(c),pt=a,h},Qs=function(e){return _i(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ut),e.progress()<1&&ln(e,"onInterrupt"),e},Ms,bd=[],Td=function(e){if(e)if(e=!e.name&&e.default||e,Tl()||e.headless){var t=e.name,n=xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:ur,render:Fl,add:Il,kill:_v,modifier:gv,rawVars:0},a={targetTest:0,get:0,getSetter:Nl,aliases:{},register:0};if(Ns(),e!==i){if(rn[t])return;dn(i,dn(ya(e,r),a)),Is(i.prototype,Is(r,ya(e,a))),rn[i.prop=t]=i,e.targetTest&&(aa.push(i),Cl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}od(t,i),e.register&&e.register(tn,i,Jt)}else bd.push(e)},ot=255,Js={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},So=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ot+.5|0},wd=function(e,t,n){var i=e?Jn(e)?[e>>16,e>>8&ot,e&ot]:0:Js.black,r,a,o,l,c,h,d,u,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Js[e])i=Js[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ot,i&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Ah),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=So(l+1/3,r,a),i[1]=So(l,r,a),i[2]=So(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(id),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ah)||Js.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/ot,a=i[1]/ot,o=i[2]/ot,d=Math.max(r,a,o),u=Math.min(r,a,o),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(a-o)/f+(a<o?6:0):d===a?(o-r)/f+2:(r-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Ad=function(e){var t=[],n=[],i=-1;return e.split(mi).forEach(function(r){var a=r.match(ys)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Dh=function(e,t,n){var i="",r=(e+i).match(mi),a=t?"hsla(":"rgba(",o=0,l,c,h,d;if(!r)return e;if(r=r.map(function(u){return(u=wd(u,t,1))&&a+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Ad(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(mi,"1").split(ys),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(mi),d=c.length-1;o<d;o++)i+=c[o]+r[o];return i+c[d]},mi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Js)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),tv=/hsl[a]?\(/,Cd=function(e){var t=e.join(" "),n;if(mi.lastIndex=0,mi.test(t))return n=tv.test(t),e[1]=Dh(e[1],n),e[0]=Dh(e[0],n,Ad(e[1])),!0},fr,on=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,d,u,f,_=function g(p){var m=s()-i,v=p===!0,x,y,T,E;if((m>e||m<0)&&(n+=m-t),i+=m,T=i-n,x=T-a,(x>0||v)&&(E=++d.frame,u=T-d.time*1e3,d.time=T=T/1e3,a+=x+(x>=r?4:r-x),y=1),v||(l=c(g)),y)for(f=0;f<o.length;f++)o[f](T,u,E,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){rd&&(!Yo&&Tl()&&(In=Yo=window,wl=In.document||{},un.gsap=tn,(In.gsapVersions||(In.gsapVersions=[])).push(tn.version),ad(xa||In.GreenSockGlobals||!In.gsap&&In||{}),bd.forEach(Td)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},fr=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),fr=0,c=ur},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),a=d.time*1e3+r},add:function(p,m,v){var x=m?function(y,T,E,b){p(y,T,E,b),d.remove(x)}:p;return d.remove(p),o[v?"unshift":"push"](x),Ns(),x},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d}(),Ns=function(){return!fr&&on.wake()},Je={},nv=/^[\d.\-M][\d.\-,\s]/,iv=/["']/g,sv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(iv,"").trim():+c,i=l.substr(o+1).trim();return t},rv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},av=function(e){var t=(e+"").split("("),n=Je[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[sv(t[1])]:rv(e).split(",").map(ud)):Je._CE&&nv.test(e)?Je._CE("",e):n},ov=function(e){return function(t){return 1-e(1-t)}},Vi=function(e,t){return e&&(xt(e)?e:Je[e]||av(e))||t},Yi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Qt(e,function(o){Je[o]=un[o]=r,Je[a=o.toLowerCase()]=n;for(var l in r)Je[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Je[o+"."+l]=r[l]}),r},Rd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Eo=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/qo*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Lx((h-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Rd(o);return r=qo/r,l.config=function(c,h){return s(e,c,h)},l},bo=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Rd(n);return i.config=function(r){return s(e,r)},i};Qt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Yi(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Je.Linear.easeNone=Je.none=Je.Linear.easeIn;Yi("Elastic",Eo("in"),Eo("out"),Eo());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Yi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Yi("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Yi("Circ",function(s){return-(td(1-s*s)-1)});Yi("Sine",function(s){return s===1?1:-Px(s*Cx)+1});Yi("Back",bo("in"),bo("out"),bo());Je.SteppedEase=Je.steps=un.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-lt;return function(o){return((i*Mr(0,a,o)|0)+r)*n}}};cr.ease=Je["quad.out"];Qt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Rl+=s+","+s+"Params,"});var Pd=function(e,t){this.id=Rx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:cd,this.set=t?t.getSetter:Nl},pr=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Us(this,+t.duration,1,1),this.data=t.data,pt&&(this._ctx=pt,pt.data.push(this)),fr||on.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Us(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ns(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Da(this,n),!r._dp||r.parent||pd(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Nn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===lt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),hd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ph(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ph(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ds(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-lt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ma(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-lt?0:this._rts,this.totalTime(Mr(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Ia(this),Gx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ns(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==lt&&(this._tTime-=lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=mt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Nn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Zt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ma(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ox);var i=Ut;return Ut=n,Ll(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ut=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Lh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Lh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(mn(this,n),Zt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Zt(i)),this._dur||(this._zTime=-lt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-lt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-lt)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=xt(n)?n:dd,l=function(){var h=i.then;i.then=null,r&&r(),xt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Qs(this)},s}();dn(pr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-lt,_prom:0,_ps:!1,_rts:1});var qt=function(s){ed(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Zt(n.sortChildren),gt&&Nn(n.parent||gt,qn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&md(qn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return ir(0,arguments,this),this},t.from=function(i,r,a){return ir(1,arguments,this),this},t.fromTo=function(i,r,a,o){return ir(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,nr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new bt(i,r,mn(this,a),1),this},t.call=function(i,r,a){return Nn(this,bt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new bt(i,a,mn(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,nr(a).immediateRender=Zt(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},t.staggerFromTo=function(i,r,a,o,l,c,h,d){return o.startAt=a,nr(o).immediateRender=Zt(o.immediateRender),this.staggerTo(i,r,o,l,c,h,d)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:mt(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,_,g,p,m,v,x,y,T,E,b;if(this!==gt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,y=this._start,x=this._ts,m=!x,d&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(u=mt(h%p),h===l?(g=this._repeat,u=c):(T=mt(h/p),g=~~T,g&&g===T&&(u=c,g--),u>c&&(u=c)),T=Ds(this._tTime,p),!o&&this._tTime&&T!==g&&this._tTime-T*p-this._dur<=0&&(T=g),E&&g&1&&(u=c-u,b=1),g!==T&&!this._lock){var P=E&&T&1,M=P===(E&&g&1);if(g<T&&(P=!P),o=P?0:h%c?c:h,this._lock=1,this.render(o||(b?0:mt(g*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&ln(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,T=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Xx(this,mt(o),mt(u)),v&&(h-=u-(u=v._start))),this._tTime=h,this._time=u,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!r&&!T&&(ln(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||u>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,a),u!==this._time||!this._ts&&!m){v=0,_&&(h+=this._zTime=-lt);break}}f=_}else{f=this._last;for(var A=i<0?i:u;f;){if(_=f._prev,(f._act||A<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,r,a||Ut&&Ll(f)),u!==this._time||!this._ts&&!m){v=0,_&&(h+=this._zTime=A?-lt:lt);break}}f=_}}if(v&&!r&&(this.pause(),v.render(u>=o?0:-lt)._zTime=u>=o?1:-1,this._ts))return this._start=y,Ia(this),this.render(i,r,a);this._onUpdate&&!r&&ln(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&_i(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(ln(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Jn(r)||(r=mn(this,r,i)),!(i instanceof pr)){if(kt(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Pt(i))return this.addLabel(i,r);if(xt(i))i=bt.delayedCall(0,i);else return this}return this!==i?Nn(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-vn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof bt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return Pt(i)?this.removeLabel(i):xt(i)?this.killTweensOf(i):(i.parent===this&&La(this,i),i===this._recent&&(this._recent=this._last),Gi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=mt(on.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=mn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=bt.delayedCall(0,r||ur,a);return o.data="isPause",this._hasPause=1,Nn(this,o,mn(this,i))},t.removePause=function(i){var r=this._first;for(i=mn(this,i);r;)r._start===i&&r.data==="isPause"&&_i(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ci!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=yn(i),l=this._first,c=Jn(r),h;l;)l instanceof bt?Bx(l._targets,o)&&(c?(!ci||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=mn(a,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,_=bt.to(a,dn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||lt,onStart:function(){if(a.pause(),!f){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&Us(_,p,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,d||[])}},r));return u?_.render(0):_},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,dn({startAt:{time:mn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ih(this,mn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ih(this,mn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+lt)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=mt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Gi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Gi(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=vn,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Nn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=mt(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Us(a,a===gt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(gt._ts&&(hd(gt,Ma(i,gt)),ld=on.frame),on.frame>=Ch){Ch+=hn.autoSleep||120;var r=gt._first;if((!r||!r._ts)&&hn.autoSleep&&on._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||on.sleep()}}},e}(pr);dn(qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var lv=function(e,t,n,i,r,a,o){var l=new Jt(this._pt,e,t,0,1,Fd,null,r),c=0,h=0,d,u,f,_,g,p,m,v;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=dr(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),u=n.match(yo)||[];d=yo.exec(i);)_=d[0],g=i.substring(c,d.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?bs(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},c=yo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(sd.test(i)||m)&&(l.e=0),this._pt=l,l},Il=function(e,t,n,i,r,a,o,l,c,h){xt(i)&&(i=i(r||0,e,a));var d=e[t],u=n!=="get"?n:xt(d)?c?e[t.indexOf("set")||!xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=xt(d)?c?fv:Ud:Ul,_;if(Pt(i)&&(~i.indexOf("random(")&&(i=dr(i)),i.charAt(1)==="="&&(_=bs(u,i)+(zt(u)||0),(_||_===0)&&(i=_))),!h||u!==i||el)return!isNaN(u*i)&&i!==""?(_=new Jt(this._pt,e,t,+u||0,i-(u||0),typeof d=="boolean"?mv:Nd,0,f),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(t in e)&&Al(t,i),lv.call(this,e,t,u,i,f,l||hn.stringFilter,c))},cv=function(e,t,n,i,r){if(xt(e)&&(e=sr(e,r,t,n,i)),!On(e)||e.style&&e.nodeType||kt(e)||nd(e))return Pt(e)?sr(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=sr(e[o],r,t,n,i);return a},Ld=function(e,t,n,i,r,a){var o,l,c,h;if(rn[e]&&(o=new rn[e]).init(r,o.rawVars?t[e]:cv(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Jt(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Ms))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},ci,el,Dl=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,v=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!El,y=e.timeline,T=i.easeReverse||d,E,b,P,M,A,U,z,q,C,N,O,G,V;if(y&&(!u||!r)&&(r="none"),e._ease=Vi(r,cr.ease),e._rEase=T&&(Vi(T)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||u&&!i.stagger){if(q=p[0]?ki(p[0]).harness:0,G=q&&i[q.prop],E=ya(i,Cl),g&&(g._zTime<0&&g.progress(1),t<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?ra:Fx),g._lazy=0),a){if(_i(e._startAt=bt.set(p,dn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Zt(l),startAt:null,delay:0,onUpdate:c&&function(){return ln(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut||!o&&!f)&&e._startAt.revert(ra),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(o=!1),P=dn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Zt(l),immediateRender:o,stagger:0,parent:m},E),G&&(P[q.prop]=G),_i(e._startAt=bt.set(p,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut?e._startAt.revert(ra):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,lt,lt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Zt(l)||l&&!_,b=0;b<p.length;b++){if(A=p[b],z=A._gsap||Pl(p)[b]._gsap,e._ptLookup[b]=N={},$o[z.id]&&pi.length&&va(),O=v===p?b:v.indexOf(A),q&&(C=new q).init(A,G||E,e,O,v)!==!1&&(e._pt=M=new Jt(e._pt,A,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function(B){N[B]=M}),C.priority&&(U=1)),!q||G)for(P in E)rn[P]&&(C=Ld(P,E,e,O,A,v))?C.priority&&(U=1):N[P]=M=Il.call(e,A,P,"get",E[P],O,v,0,i.stringFilter);e._op&&e._op[b]&&e.kill(A,e._op[b]),x&&e._pt&&(ci=e,gt.killTweensOf(A,N,e.globalTime(t)),V=!e.parent,ci=0),e._pt&&l&&($o[z.id]=1)}U&&Od(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!V,u&&t<=0&&y.render(vn,!0,!0)},hv=function(e,t,n,i,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,u,f;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(h=u[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return el=1,e.vars[t]="+=0",Dl(e,o),el=0,l?hr(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=yt(n)+zt(d.e)),d.b&&(d.b=h.s+zt(d.b))},uv=function(e,t){var n=e[0]?ki(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=Is({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},dv=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(kt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},sr=function(e,t,n,i,r){return xt(e)?e.call(t,n,i,r):Pt(e)&&~e.indexOf("random(")?dr(e):e},Id=Rl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Dd={};Qt(Id+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Dd[s]=1});var bt=function(s){ed(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:nr(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=i.parent||gt,v=(kt(n)||nd(n)?Jn(n[0]):"length"in i)?[n]:yn(n),x,y,T,E,b,P,M,A;if(o._targets=v.length?Pl(v):hr("GSAP target "+n+" not found. https://gsap.com",!hn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||u||na(c)||na(h)){i=o.vars;var U=i.easeReverse||i.yoyoEase;if(x=o.timeline=new qt({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:v}),x.kill(),x.parent=x._dp=qn(o),x._start=0,u||na(c)||na(h)){if(E=v.length,M=u&&vd(u),On(u))for(b in u)~Id.indexOf(b)&&(A||(A={}),A[b]=u[b]);for(y=0;y<E;y++)T=ya(i,Dd),T.stagger=0,U&&(T.easeReverse=U),A&&Is(T,A),P=v[y],T.duration=+sr(c,qn(o),y,P,v),T.delay=(+sr(h,qn(o),y,P,v)||0)-o._delay,!u&&E===1&&T.delay&&(o._delay=h=T.delay,o._start+=h,T.delay=0),x.to(P,T,M?M(y,P,v):0),x._ease=Je.none;x.duration()?c=h=0:o.timeline=0}else if(_){nr(dn(x.vars.defaults,{ease:"none"})),x._ease=Vi(_.ease||i.ease||"none");var z=0,q,C,N;if(kt(_))_.forEach(function(O){return x.to(v,O,">")}),x.duration();else{T={};for(b in _)b==="ease"||b==="easeEach"||dv(b,_[b],T,_.easeEach);for(b in T)for(q=T[b].sort(function(O,G){return O.t-G.t}),z=0,y=0;y<q.length;y++)C=q[y],N={ease:C.e,duration:(C.t-(y?q[y-1].t:0))/100*c},N[b]=C.v,x.to(v,N,z),z+=N.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return f===!0&&!El&&(ci=qn(o),gt.killTweensOf(v),ci=0),Nn(m,qn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!_&&o._start===mt(m._time)&&Zt(d)&&Vx(qn(o))&&m.data!=="nested")&&(o._tTime=-lt,o.render(Math.max(0,-h)||0)),p&&md(qn(o),p),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-lt&&!h?l:i<lt?0:i,u,f,_,g,p,m,v,x;if(!c)Wx(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,a);if(u=mt(d%g),d===l?(_=this._repeat,u=c):(p=mt(d/g),_=~~p,_&&_===p?(u=c,_--):u>c&&(u=c)),m=this._yoyo&&_&1,m&&(u=c-u),p=Ds(this._tTime,g),u===o&&!a&&this._initted&&_===p)return this._tTime=d,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==g&&this._initted&&(this._lock=a=1,this.render(mt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(gd(this,h?i:u,a,r,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var y=u<o;if(y!==this._inv){var T=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(u/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!r&&!p&&(ln(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(u/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&jo(this,i,r,a),ln(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&ln(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&jo(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&_i(this,1),!r&&!(h&&!o)&&(d||o||m)&&(ln(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,l){fr||on.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Dl(this,c),h=this._ease(c/this._dur),hv(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(Da(this,0),this.parent||fd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Qs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ut),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ci&&ci.vars.overwrite!==!0)._first||Qs(this),this.parent&&a!==this.timeline.totalDuration()&&Us(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?yn(i):o,c=this._ptLookup,h=this._pt,d,u,f,_,g,p,m;if((!r||r==="all")&&kx(o,l))return r==="all"&&(this._pt=0),Qs(this);for(d=this._op=this._op||[],r!=="all"&&(Pt(r)&&(g={},Qt(r,function(v){return g[v]=1}),r=g),r=uv(o,r)),m=o.length;m--;)if(~l.indexOf(o[m])){u=c[m],r==="all"?(d[m]=r,_=u,f={}):(f=d[m]=d[m]||{},_=r);for(g in _)p=u&&u[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&La(this,p,"_pt"),delete u[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&Qs(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return ir(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return ir(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return gt.killTweensOf(i,r,a)},e}(pr);dn(bt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qt("staggerTo,staggerFrom,staggerFromTo",function(s){bt[s]=function(){var e=new qt,t=Zo.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Ul=function(e,t,n){return e[t]=n},Ud=function(e,t,n){return e[t](n)},fv=function(e,t,n,i){return e[t](i.fp,n)},pv=function(e,t,n){return e.setAttribute(t,n)},Nl=function(e,t){return xt(e[t])?Ud:bl(e[t])&&e.setAttribute?pv:Ul},Nd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},mv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Fd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Fl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},gv=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},_v=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?La(this,t,"_pt"):t.dep||(n=1),t=i;return!n},xv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Od=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Jt=function(){function s(t,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Nd,this.d=l||this,this.set=c||Ul,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=xv,this.m=n,this.mt=r,this.tween=i},s}();Qt(Rl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Cl[s]=1});un.TweenMax=un.TweenLite=bt;un.TimelineLite=un.TimelineMax=qt;gt=new qt({sortChildren:!1,defaults:cr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});hn.stringFilter=Cd;var Hi=[],oa={},vv=[],Uh=0,yv=0,To=function(e){return(oa[e]||vv).map(function(t){return t()})},tl=function(){var e=Date.now(),t=[];e-Uh>2&&(To("matchMediaInit"),Hi.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=In.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),To("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Uh=e,To("matchMedia"))},Bd=function(){function s(t,n){this.selector=n&&Qo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=yv++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){xt(n)&&(r=i,i=n,n=xt);var a=this,o=function(){var c=pt,h=a.selector,d;return c&&c!==a&&c.data.push(a),r&&(a.selector=Qo(r)),pt=a,d=i.apply(a,arguments),xt(d)&&a._r.push(d),pt=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===xt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=pt;pt=null,n(this),pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof bt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof qt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof bt)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Hi.length;a--;)Hi[a].id===this.id&&Hi.splice(a,1)},e.revert=function(n){this.kill(n||{})},s}(),Mv=function(){function s(t){this.contexts=[],this.scope=t,pt&&pt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){On(n)||(n={matches:n});var a=new Bd(0,r||this.scope),o=a.conditions={},l,c,h;pt&&!a.selector&&(a.selector=pt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=In.matchMedia(n[c]),l&&(Hi.indexOf(a)<0&&Hi.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(tl):l.addEventListener("change",tl)));return h&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Sa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Td(i)})},timeline:function(e){return new qt(e)},getTweensOf:function(e,t){return gt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Pt(e)&&(e=yn(e)[0]);var r=ki(e||{}).get,a=n?dd:ud;return n==="native"&&(n=""),e&&(t?a((rn[t]&&rn[t].get||r)(e,t,n,i)):function(o,l,c){return a((rn[o]&&rn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=yn(e),e.length>1){var i=e.map(function(h){return tn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}e=e[0]||{};var a=rn[t],o=ki(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var d=new a;Ms._pt=0,d.init(e,n?h+n:h,Ms,0,[e]),d.render(1,d),Ms._pt&&Fl(1,Ms)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,r=tn.to(e,dn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(t,l,c,h)};return a.tween=r,a},isTweening:function(e){return gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Vi(e.ease,cr.ease)),Rh(cr,e||{})},config:function(e){return Rh(hn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!rn[o]&&!un[o]&&hr(t+" effect requires "+o+" plugin.")}),Mo[t]=function(o,l,c){return n(yn(o),dn(l||{},r),c)},a&&(qt.prototype[t]=function(o,l,c){return this.add(Mo[t](o,On(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Je[e]=Vi(t)},parseEase:function(e,t){return arguments.length?Vi(e,t):Je},getById:function(e){return gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new qt(e),i,r;for(n.smoothChildTiming=Zt(e.smoothChildTiming),gt.remove(n),n._dp=0,n._time=n._tTime=gt._time,i=gt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof bt&&i.vars.onComplete===i._targets[0]))&&Nn(n,i,i._start-i._delay),i=r;return Nn(gt,n,0),n},context:function(e,t){return e?new Bd(e,t):pt},matchMedia:function(e){return new Mv(e)},matchMediaRefresh:function(){return Hi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||tl()},addEventListener:function(e,t){var n=oa[e]||(oa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=oa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Qx,wrapYoyo:Jx,distribute:vd,random:Md,snap:yd,normalize:Zx,getUnit:zt,clamp:Yx,splitColor:wd,toArray:yn,selector:Qo,mapRange:Ed,pipe:jx,unitize:Kx,interpolate:ev,shuffle:xd},install:ad,effects:Mo,ticker:on,updateRoot:qt.updateRoot,plugins:rn,globalTimeline:gt,core:{PropTween:Jt,globals:od,Tween:bt,Timeline:qt,Animation:pr,getCache:ki,_removeLinkedListItem:La,reverting:function(){return Ut},context:function(e){return e&&pt&&(pt.data.push(e),e._ctx=pt),pt},suppressOverwrites:function(e){return El=e}}};Qt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Sa[s]=bt[s]});on.add(qt.updateRoot);Ms=Sa.to({},{duration:0});var Sv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Ev=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Sv(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},wo=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Pt(r)&&(l={},Qt(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Ev(o,r)}}}},tn=Sa.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Ut?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},wo("roundProps",Jo),wo("modifiers"),wo("snap",yd))||Sa;bt.version=qt.version=tn.version="3.15.0";rd=1;Tl()&&Ns();Je.Power0;Je.Power1;Je.Power2;Je.Power3;Je.Power4;Je.Linear;Je.Quad;Je.Cubic;Je.Quart;Je.Quint;Je.Strong;Je.Elastic;Je.Back;Je.SteppedEase;Je.Bounce;Je.Sine;Je.Expo;Je.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Nh,hi,Ts,Ol,Fi,Fh,Bl,bv=function(){return typeof window<"u"},ei={},Di=180/Math.PI,ws=Math.PI/180,fs=Math.atan2,Oh=1e8,zl=/([A-Z])/g,Tv=/(left|right|width|margin|padding|x)/i,wv=/[\s,\(]\S/,Fn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Av=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Cv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Rv=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Pv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},zd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},kd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Lv=function(e,t,n){return e.style[t]=n},Iv=function(e,t,n){return e.style.setProperty(t,n)},Dv=function(e,t,n){return e._gsap[t]=n},Uv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Nv=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Fv=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},_t="transform",en=_t+"Origin",Ov=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in ei&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Fn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=$n(i,o)}):this.tfm[e]=a.x?a[e]:$n(i,e),e===en&&(this.tfm.zOrigin=a.zOrigin);else return Fn.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(_t)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(en,t,"")),e=_t}(r||t)&&this.props.push(e,t,r[e])},Gd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Bv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(zl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Bl(),(!r||!r.isStart)&&!n[_t]&&(Gd(n),i.zOrigin&&n[en]&&(n[en]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Vd=function(e,t){var n={target:e,props:[],revert:Bv,save:Ov};return e._gsap||tn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Hd,il=function(e,t){var n=hi.createElementNS?hi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hi.createElement(e);return n&&n.style?n:hi.createElement(e)},cn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(zl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Fs(t)||t,1)||""},Bh="O,Moz,ms,Ms,Webkit".split(","),Fs=function(e,t,n){var i=t||Fi,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Bh[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Bh[a]:"")+e},sl=function(){bv()&&window.document&&(Nh=window,hi=Nh.document,Ts=hi.documentElement,Fi=il("div")||{style:{}},il("div"),_t=Fs(_t),en=_t+"Origin",Fi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hd=!!Fs("perspective"),Bl=tn.core.reverting,Ol=1)},zh=function(e){var t=e.ownerSVGElement,n=il("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Ts.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Ts.removeChild(n),r},kh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Wd=function(e){var t,n;try{t=e.getBBox()}catch{t=zh(e),n=1}return t&&(t.width||t.height)||n||(t=zh(e)),t&&!t.width&&!t.x&&!t.y?{x:+kh(e,["x","cx","x1"])||0,y:+kh(e,["y","cy","y1"])||0,width:0,height:0}:t},Xd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Wd(e))},xi=function(e,t){if(t){var n=e.style,i;t in ei&&t!==en&&(t=_t),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(zl,"-$1").toLowerCase())):n.removeAttribute(t)}},ui=function(e,t,n,i,r,a){var o=new Jt(e._pt,t,n,0,1,a?kd:zd);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Gh={deg:1,rad:1,turn:1},zv={grid:1,flex:1},vi=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Fi.style,l=Tv.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",_,g,p,m;if(i===a||!r||Gh[i]||Gh[a])return r;if(a!=="px"&&!u&&(r=s(e,t,n,"px")),m=e.getCTM&&Xd(e),(f||a==="%")&&(ei[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[h],yt(f?r/_*d:r/100*_);if(o[l?"width":"height"]=d+(u?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===hi||!g.appendChild)&&(g=hi.body),p=g._gsap,p&&f&&p.width&&l&&p.time===on.time&&!p.uncache)return yt(r/p.width*d);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+i,_=e[h],v?e.style[t]=v:xi(e,t)}else(f||a==="%")&&!zv[cn(g,"display")]&&(o.position=cn(e,"position")),g===e&&(o.position="static"),g.appendChild(Fi),_=Fi[h],g.removeChild(Fi),o.position="absolute";return l&&f&&(p=ki(g),p.time=on.time,p.width=g[h]),yt(u?_*r/d:_&&r?d/_*r:0)},$n=function(e,t,n,i){var r;return Ol||sl(),t in Fn&&t!=="transform"&&(t=Fn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ei[t]&&t!=="transform"?(r=gr(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ba(cn(e,en))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ea[t]&&Ea[t](e,t,n)||cn(e,t)||cd(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?vi(e,t,r,n)+n:r},kv=function(e,t,n,i){if(!n||n==="none"){var r=Fs(t,e,1),a=r&&cn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=cn(e,"borderTopColor"))}var o=new Jt(this._pt,e.style,t,0,1,Fd),l=0,c=0,h,d,u,f,_,g,p,m,v,x,y,T;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=cn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=cn(e,t)||i,g?e.style[t]=g:xi(e,t)),h=[n,i],Cd(h),n=h[0],i=h[1],u=n.match(ys)||[],T=i.match(ys)||[],T.length){for(;d=ys.exec(i);)p=d[0],v=i.substring(l,d.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),p!==(g=u[c++]||"")&&(f=parseFloat(g)||0,y=g.substr((f+"").length),p.charAt(1)==="="&&(p=bs(f,p)+y),m=parseFloat(p),x=p.substr((m+"").length),l=ys.lastIndex-x.length,x||(x=x||hn.units[t]||y,l===i.length&&(i+=x,o.e+=x)),y!==x&&(f=vi(e,t,g,x)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:m-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?kd:zd;return sd.test(i)&&(o.e=0),this._pt=o,o},Vh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Gv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Vh[n]||n,t[1]=Vh[i]||i,t.join(" ")},Vv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],ei[o]&&(l=1,o=o==="transformOrigin"?en:_t),xi(n,o);l&&(xi(n,_t),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",gr(n,1),a.uncache=1,Gd(i)))}},Ea={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Jt(e._pt,t,n,0,0,Vv);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},mr=[1,0,0,1,0,0],qd={},Yd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Hh=function(e){var t=cn(e,_t);return Yd(t)?mr:t.substr(7).match(id).map(yt)},kl=function(e,t){var n=e._gsap||ki(e),i=e.style,r=Hh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?mr:r):(r===mr&&!e.offsetParent&&e!==Ts&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ts.appendChild(e)),r=Hh(e),l?i.display=l:xi(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ts.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},rl=function(e,t,n,i,r,a){var o=e._gsap,l=r||kl(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,f=l[0],_=l[1],g=l[2],p=l[3],m=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,T=parseFloat(x[1])||0,E,b,P,M;n?l!==mr&&(b=f*p-_*g)&&(P=y*(p/b)+T*(-g/b)+(g*v-p*m)/b,M=y*(-_/b)+T*(f/b)-(f*v-_*m)/b,y=P,T=M):(E=Wd(e),y=E.x+(~x[0].indexOf("%")?y/100*E.width:y),T=E.y+(~(x[1]||x[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&o.smooth?(m=y-c,v=T-h,o.xOffset=d+(m*f+v*g)-m,o.yOffset=u+(m*_+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=T,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[en]="0px 0px",a&&(ui(a,o,"xOrigin",c,y),ui(a,o,"yOrigin",h,T),ui(a,o,"xOffset",d,o.xOffset),ui(a,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},gr=function(e,t){var n=e._gsap||new Pd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=cn(e,en)||"0",h,d,u,f,_,g,p,m,v,x,y,T,E,b,P,M,A,U,z,q,C,N,O,G,V,B,Z,ee,Q,H,K,ae;return h=d=u=g=p=m=v=x=y=0,f=_=1,n.svg=!!(e.getCTM&&Xd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[_t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_t]!=="none"?l[_t]:"")),i.scale=i.rotate=i.translate="none"),b=kl(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),rl(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,b)),T=n.xOrigin||0,E=n.yOrigin||0,b!==mr&&(U=b[0],z=b[1],q=b[2],C=b[3],h=N=b[4],d=O=b[5],b.length===6?(f=Math.sqrt(U*U+z*z),_=Math.sqrt(C*C+q*q),g=U||z?fs(z,U)*Di:0,v=q||C?fs(q,C)*Di+g:0,v&&(_*=Math.abs(Math.cos(v*ws))),n.svg&&(h-=T-(T*U+E*q),d-=E-(T*z+E*C))):(ae=b[6],H=b[7],Z=b[8],ee=b[9],Q=b[10],K=b[11],h=b[12],d=b[13],u=b[14],P=fs(ae,Q),p=P*Di,P&&(M=Math.cos(-P),A=Math.sin(-P),G=N*M+Z*A,V=O*M+ee*A,B=ae*M+Q*A,Z=N*-A+Z*M,ee=O*-A+ee*M,Q=ae*-A+Q*M,K=H*-A+K*M,N=G,O=V,ae=B),P=fs(-q,Q),m=P*Di,P&&(M=Math.cos(-P),A=Math.sin(-P),G=U*M-Z*A,V=z*M-ee*A,B=q*M-Q*A,K=C*A+K*M,U=G,z=V,q=B),P=fs(z,U),g=P*Di,P&&(M=Math.cos(P),A=Math.sin(P),G=U*M+z*A,V=N*M+O*A,z=z*M-U*A,O=O*M-N*A,U=G,N=V),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=yt(Math.sqrt(U*U+z*z+q*q)),_=yt(Math.sqrt(O*O+ae*ae)),P=fs(N,O),v=Math.abs(P)>2e-4?P*Di:0,y=K?1/(K<0?-K:K):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Yd(cn(e,_t)),G&&e.setAttribute("transform",G))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=yt(f),n.scaleY=yt(_),n.rotation=yt(g)+o,n.rotationX=yt(p)+o,n.rotationY=yt(m)+o,n.skewX=v+o,n.skewY=x+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[en]=ba(c)),n.xOffset=n.yOffset=0,n.force3D=hn.force3D,n.renderTransform=n.svg?Wv:Hd?$d:Hv,n.uncache=0,n},ba=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ao=function(e,t,n){var i=zt(t);return yt(parseFloat(t)+parseFloat(vi(e,"x",n+"px",i)))+i},Hv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,$d(e,t)},Ai="0deg",Ks="0px",Ci=") ",$d=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,v=n.target,x=n.zOrigin,y="",T=m==="auto"&&e&&e!==1||m===!0;if(x&&(d!==Ai||h!==Ai)){var E=parseFloat(h)*ws,b=Math.sin(E),P=Math.cos(E),M;E=parseFloat(d)*ws,M=Math.cos(E),a=Ao(v,a,b*M*-x),o=Ao(v,o,-Math.sin(E)*-x),l=Ao(v,l,P*M*-x+x)}p!==Ks&&(y+="perspective("+p+Ci),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(T||a!==Ks||o!==Ks||l!==Ks)&&(y+=l!==Ks||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ci),c!==Ai&&(y+="rotate("+c+Ci),h!==Ai&&(y+="rotateY("+h+Ci),d!==Ai&&(y+="rotateX("+d+Ci),(u!==Ai||f!==Ai)&&(y+="skew("+u+", "+f+Ci),(_!==1||g!==1)&&(y+="scale("+_+", "+g+Ci),v.style[_t]=y||"translate(0, 0)"},Wv=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,v=n.forceCSS,x=parseFloat(a),y=parseFloat(o),T,E,b,P,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ws,c*=ws,T=Math.cos(l)*d,E=Math.sin(l)*d,b=Math.sin(l-c)*-u,P=Math.cos(l-c)*u,c&&(h*=ws,M=Math.tan(c-h),M=Math.sqrt(1+M*M),b*=M,P*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),T*=M,E*=M)),T=yt(T),E=yt(E),b=yt(b),P=yt(P)):(T=d,P=u,E=b=0),(x&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(x=vi(f,"x",a,"px"),y=vi(f,"y",o,"px")),(_||g||p||m)&&(x=yt(x+_-(_*T+g*b)+p),y=yt(y+g-(_*E+g*P)+m)),(i||r)&&(M=f.getBBox(),x=yt(x+i/100*M.width),y=yt(y+r/100*M.height)),M="matrix("+T+","+E+","+b+","+P+","+x+","+y+")",f.setAttribute("transform",M),v&&(f.style[_t]=M)},Xv=function(e,t,n,i,r){var a=360,o=Pt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Di:1),c=l-i,h=i+c+"deg",d,u;return o&&(d=r.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Oh)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Oh)%a-~~(c/a)*a)),e._pt=u=new Jt(e._pt,t,n,i,c,Av),u.e=h,u.u="deg",e._props.push(n),u},Wh=function(e,t){for(var n in t)e[n]=t[n];return e},qv=function(e,t,n){var i=Wh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,u,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[_t]=t,o=gr(n,1),xi(n,_t),n.setAttribute("transform",c)):(c=getComputedStyle(n)[_t],a[_t]=t,o=gr(n,1),a[_t]=c);for(l in ei)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(f=zt(c),_=zt(h),d=f!==_?vi(n,l,c,_):parseFloat(c),u=parseFloat(h),e._pt=new Jt(e._pt,o,l,d,u-d,nl),e._pt.u=_||0,e._props.push(l));Wh(o,i)};Qt("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});Ea[e>1?"border"+s:s]=function(o,l,c,h,d){var u,f;if(arguments.length<4)return u=a.map(function(_){return $n(o,_,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=u[g]=u[g]||u[(g-1)/2|0]}),o.init(l,f,d)}});var jd={name:"css",register:sl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,h,d,u,f,_,g,p,m,v,x,y,T,E,b,P,M;Ol||sl(),this.styles=this.styles||Vd(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(rn[g]&&Ld(g,t,n,i,e,r)))){if(f=typeof h,_=Ea[g],f==="function"&&(h=h.call(n,i,e,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=dr(h)),_)_(this,e,g,h,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",mi.lastIndex=0,mi.test(c)||(p=zt(c),m=zt(h),m?p!==m&&(c=vi(e,g,c,m)+m):p&&(h+=p)),this.add(o,"setProperty",c,h,i,r,0,0,g),a.push(g),P.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],Pt(c)&&~c.indexOf("random(")&&(c=dr(c)),zt(c+"")||c==="auto"||(c+=hn.units[g]||zt($n(e,g))||""),(c+"").charAt(1)==="="&&(c=$n(e,g))):c=$n(e,g),u=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),g in Fn&&(g==="autoAlpha"&&(u===1&&$n(e,"visibility")==="hidden"&&d&&(u=0),P.push("visibility",0,o.visibility),ui(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Fn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in ei,x){if(this.styles.save(g),M=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=cn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=h,h=cn(e,"perspective"),A?e.style.perspective=A:xi(e,"perspective")}d=parseFloat(h)}if(y||(T=e._gsap,T.renderTransform&&!t.parseTransform||gr(e,t.parseTransform),E=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new Jt(this._pt,o,_t,0,1,T.renderTransform,T,0,-1),y.dep=1),g==="scale")this._pt=new Jt(this._pt,T,"scaleY",T.scaleY,(v?bs(T.scaleY,v+d):d)-T.scaleY||0,nl),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(en,0,o[en]),h=Gv(h),T.svg?rl(e,h,0,E,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==T.zOrigin&&ui(this,T,"zOrigin",T.zOrigin,m),ui(this,o,g,ba(c),ba(h)));continue}else if(g==="svgOrigin"){rl(e,h,1,E,0,this);continue}else if(g in qd){Xv(this,T,g,u,v?bs(u,v+h):h);continue}else if(g==="smoothOrigin"){ui(this,T,"smooth",T.smooth,h);continue}else if(g==="force3D"){T[g]=h;continue}else if(g==="transform"){qv(this,h,e);continue}}else g in o||(g=Fs(g)||g);if(x||(d||d===0)&&(u||u===0)&&!wv.test(h)&&g in o)p=(c+"").substr((u+"").length),d||(d=0),m=zt(h)||(g in hn.units?hn.units[g]:p),p!==m&&(u=vi(e,g,c,m)),this._pt=new Jt(this._pt,x?T:o,g,u,(v?bs(u,v+d):d)-u,!x&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?Pv:nl),this._pt.u=m||0,x&&M!==h?(this._pt.b=c,this._pt.e=M,this._pt.r=Rv):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Cv);else if(g in o)kv.call(this,e,g,c,v?v+h:h);else if(g in e)this.add(e,g,c||e[g],v?v+h:h,i,r);else if(g!=="parseTransform"){Al(g,h);continue}x||(g in o?P.push(g,0,o[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,c||e[g])),a.push(g)}}b&&Od(this)},render:function(e,t){if(t.tween._time||!Bl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:$n,aliases:Fn,getSetter:function(e,t,n){var i=Fn[t];return i&&i.indexOf(",")<0&&(t=i),t in ei&&t!==en&&(e._gsap.x||$n(e,"x"))?n&&Fh===n?t==="scale"?Uv:Dv:(Fh=n||{})&&(t==="scale"?Nv:Fv):e.style&&!bl(e.style[t])?Lv:~t.indexOf("-")?Iv:Nl(e,t)},core:{_removeProperty:xi,_getMatrix:kl}};tn.utils.checkPrefix=Fs;tn.core.getStyleSaver=Vd;(function(s,e,t,n){var i=Qt(s+","+e+","+t,function(r){ei[r]=1});Qt(e,function(r){hn.units[r]="deg",qd[r]=1}),Fn[i[13]]=s+","+e,Qt(n,function(r){var a=r.split(":");Fn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){hn.units[s]="px"});tn.registerPlugin(jd);var it=tn.registerPlugin(jd)||tn;it.core.Tween;const Ht=[{id:"mind",index:"01",name:"MIND STONE",roman:"I",colorHex:"#ffd000",colorThree:16764928,coreColor:16773258,darkColor:6706432,domainKey:"intelligence",domain:"INTELLIGENCE",domainTagline:"AI • ML • Decision Systems",marvelTheme:"Vision Neural Gold",entity:"The Scepter / Vision's Core",origin:"Chitauri Scepter / Neural Matrix",vessel:"The Scepter / Vision",frequency:"528.00 THz",refractiveIndex:"2.54",powerLevel:"98.5%",particleCount:180,techStack:["Python","PyTorch","LangChain","FastAPI","Gemini API","TensorFlow"],quote:"It contains an intellect of supreme cosmic density.",description:"Architect autonomous multi-agent networks, neural cognition models, self-refining LLM pipelines, and intelligent decision systems capable of enterprise-scale problem-solving.",stats:[{label:"SYNAPSE DENSITY",value:"Infinite"},{label:"MODEL CAPACITY",value:"Trillion Param"},{label:"HARMONIC",value:"528.00 THz"},{label:"SLOTS OPEN",value:"12 Squads"}]},{id:"space",index:"02",name:"SPACE STONE",roman:"II",colorHex:"#00d2ff",colorThree:54015,coreColor:8449279,darkColor:16486,domainKey:"connectivity",domain:"CONNECTIVITY",domainTagline:"Cybersecurity • Cloud • Networks",marvelTheme:"Tesseract Cyan",entity:"Tesseract (Cosmic Cube)",origin:"Pre-Universe Singularity / Asgardian Vault",vessel:"The Tesseract",frequency:"432.18 THz",refractiveIndex:"2.42",powerLevel:"99.2%",particleCount:160,techStack:["Rust","Go","Kubernetes","eBPF","Cloudflare Workers","WireGuard"],quote:"The Tesseract has awakened. It is on a little world, a human world.",description:"Forge zero-trust defense architectures, planet-scale cloud networks, high-throughput distributed protocols, and resilient cybersecurity fabrics.",stats:[{label:"LATENCY PROFILE",value:"Sub-5ms Mesh"},{label:"DEFENSE MATRIX",value:"Post-Quantum"},{label:"HARMONIC",value:"432.18 THz"},{label:"SLOTS OPEN",value:"10 Squads"}]},{id:"reality",index:"03",name:"REALITY STONE",roman:"III",colorHex:"#ff2a4b",colorThree:16722507,coreColor:16741768,darkColor:6684688,domainKey:"digital",domain:"DIGITAL",domainTagline:"Web • Mobile • Digital Platforms",marvelTheme:"Aether Crimson",entity:"The Aether (Fluid Crystal)",origin:"Pre-Universe Singularity / Svartalfheim",vessel:"The Aether Prism",frequency:"612.44 THz",refractiveIndex:"2.68",powerLevel:"97.8%",particleCount:220,techStack:["TypeScript","React","Flutter","Next.js","Node.js","WebGL"],quote:"It turns matter into dark matter, reshaping physical reality at will.",description:"Bend digital reality. Build hyper-responsive web applications, cross-platform mobile architectures, immersive real-time canvases, and scalable modern platforms.",stats:[{label:"RENDER TARGET",value:"120 FPS WebGL"},{label:"STATE CONFLICT",value:"Sub-30ms CRDT"},{label:"HARMONIC",value:"612.44 THz"},{label:"SLOTS OPEN",value:"14 Squads"}]},{id:"power",index:"04",name:"POWER STONE",roman:"IV",colorHex:"#b026ff",colorThree:11544319,coreColor:14714367,darkColor:4851058,domainKey:"automation",domain:"AUTOMATION",domainTagline:"IoT • Robotics • Embedded Systems",marvelTheme:"Thanos Void Purple",entity:"The Orb / Morag Temple",origin:"Pre-Universe Singularity / Celestial Eson",vessel:"The Orb of Morag",frequency:"741.89 THz",refractiveIndex:"2.75",powerLevel:"100.0%",particleCount:200,techStack:["C++","Rust","ESP32 / Arduino","ROS2","MQTT","FreeRTOS"],quote:"It contains an energy that destroys all organic matter it touches.",description:"Unleash physical and digital kinetic power. Develop autonomous robotics, smart hardware controllers, industrial IoT pipelines, and embedded real-time systems.",stats:[{label:"BUS TELEMETRY",value:"Microsecond"},{label:"KINETIC FAILOVER",value:"Autonomous Swarm"},{label:"HARMONIC",value:"741.89 THz"},{label:"SLOTS OPEN",value:"8 Squads"}]},{id:"time",index:"05",name:"TIME STONE",roman:"V",colorHex:"#00ff88",colorThree:65416,coreColor:9109441,darkColor:21803,domainKey:"analytics",domain:"ANALYTICS",domainTagline:"Data • Prediction • Optimization",marvelTheme:"Doctor Strange Emerald",entity:"Eye of Agamotto / Kamar-Taj",origin:"Pre-Universe Singularity / Sorcerer Supreme",vessel:"Eye of Agamotto",frequency:"852.12 THz",refractiveIndex:"2.48",powerLevel:"98.9%",particleCount:190,techStack:["Python","Kafka","ClickHouse","Pandas","DuckDB","Scikit-Learn"],quote:"Dormammu, I have come to bargain.",description:"Control temporal velocity. Engineer real-time streaming pipelines, high-throughput predictive time-series models, algorithmic optimization engines, and big data intelligence.",stats:[{label:"STREAM INGEST",value:"1M Events/sec"},{label:"ORACLE HORIZON",value:"14,000,605 Paths"},{label:"HARMONIC",value:"852.12 THz"},{label:"SLOTS OPEN",value:"11 Squads"}]},{id:"soul",index:"06",name:"SOUL STONE",roman:"VI",colorHex:"#ff7700",colorThree:16742144,coreColor:16765567,darkColor:10044416,domainKey:"impact",domain:"IMPACT",domainTagline:"Healthcare • Agriculture • Education • Social Good",marvelTheme:"Vormir Sunset Orange",entity:"Vormir Altar / Soul World",origin:"Pre-Universe Singularity / Red Skull Guardian",vessel:"Vormir Shrine",frequency:"963.00 THz",refractiveIndex:"2.62",powerLevel:"99.7%",particleCount:180,techStack:["Python","Flutter","PostgreSQL","FastAPI","Edge AI","OpenCV"],quote:"A soul for a soul. Great technological impact demands great purpose.",description:"Channel technology to transform lives. Pioneer accessible healthcare diagnostics, precision agricultural sensors, adaptive educational tools, and sustainable social impact networks.",stats:[{label:"COMMUNITY REACH",value:"Global Impact"},{label:"ETHICAL CORE",value:"Privacy-Preserving"},{label:"HARMONIC",value:"963.00 THz"},{label:"SLOTS OPEN",value:"15 Squads"}]}],la=0,Yv=1,$v=new I,Xh=new mx,Co=new Yn,qh=new I,ia=new gs;class jv{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Yh,this.unassigned=new Yh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new Kv(e[t]));this.compute()}return this}setFromObject(e){const t=[];return e.updateMatrixWorld(!0),e.traverse(function(n){const i=n.geometry;if(i!==void 0){const r=i.attributes.position;if(r!==void 0)for(let a=0,o=r.count;a<o;a++){const l=new I;l.fromBufferAttribute(r,a).applyMatrix4(n.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){const t=this.faces;for(let n=0,i=t.length;n<i;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){const n=this.faces;let i=-1/0,r=1/0;for(let a=0,o=n.length;a<o;a++){const l=n[a],c=l.distanceToPoint(e.origin),h=l.normal.dot(e.direction);if(c>0&&h>=0)return null;const d=h!==0?-c/h:0;if(!(d<=0)&&(h>0?r=Math.min(d,r):i=Math.max(d,i),i>r))return null}return i!==-1/0?e.at(i,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,$v)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}removeAllVerticesFromFace(e){if(e.outside!==null){const t=e.outside;let n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}deleteFaceVertices(e,t){const n=this.removeAllVerticesFromFace(e);if(n!==void 0)if(t===void 0)this.unassigned.appendChain(n);else{let i=n;do{const r=i.next;t.distanceToPoint(i.point)>this.tolerance?this.addVertexToFace(i,t):this.unassigned.append(i),i=r}while(i!==null)}return this}resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{const n=t.next;let i=this.tolerance,r=null;for(let a=0;a<e.length;a++){const o=e[a];if(o.mark===la){const l=o.distanceToPoint(t.point);if(l>i&&(i=l,r=o),i>1e3*this.tolerance)break}}r!==null&&this.addVertexToFace(t,r),t=n}while(t!==null)}return this}computeExtremes(){const e=new I,t=new I,n=[],i=[];for(let r=0;r<3;r++)n[r]=i[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,a=this.vertices.length;r<a;r++){const o=this.vertices[r],l=o.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),n[c]=o);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),i[c]=o)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:i}}computeInitialHull(){const e=this.vertices,t=this.computeExtremes(),n=t.min,i=t.max;let r=0,a=0;for(let u=0;u<3;u++){const f=i[u].point.getComponent(u)-n[u].point.getComponent(u);f>r&&(r=f,a=u)}const o=n[a],l=i[a];let c,h;r=0,Xh.set(o.point,l.point);for(let u=0,f=this.vertices.length;u<f;u++){const _=e[u];if(_!==o&&_!==l){Xh.closestPointToPoint(_.point,!0,qh);const g=qh.distanceToSquared(_.point);g>r&&(r=g,c=_)}}r=-1,Co.setFromCoplanarPoints(o.point,l.point,c.point);for(let u=0,f=this.vertices.length;u<f;u++){const _=e[u];if(_!==o&&_!==l&&_!==c){const g=Math.abs(Co.distanceToPoint(_.point));g>r&&(r=g,h=_)}}const d=[];if(Co.distanceToPoint(h.point)<0){d.push(Tn.create(o,l,c),Tn.create(h,l,o),Tn.create(h,c,l),Tn.create(h,o,c));for(let u=0;u<3;u++){const f=(u+1)%3;d[u+1].getEdge(2).setTwin(d[0].getEdge(f)),d[u+1].getEdge(1).setTwin(d[f+1].getEdge(0))}}else{d.push(Tn.create(o,c,l),Tn.create(h,o,l),Tn.create(h,l,c),Tn.create(h,c,o));for(let u=0;u<3;u++){const f=(u+1)%3;d[u+1].getEdge(2).setTwin(d[0].getEdge((3-u)%3)),d[u+1].getEdge(0).setTwin(d[f+1].getEdge(1))}}for(let u=0;u<4;u++)this.faces.push(d[u]);for(let u=0,f=e.length;u<f;u++){const _=e[u];if(_!==o&&_!==l&&_!==c&&_!==h){r=this.tolerance;let g=null;for(let p=0;p<4;p++){const m=this.faces[p].distanceToPoint(_.point);m>r&&(r=m,g=this.faces[p])}g!==null&&this.addVertexToFace(_,g)}}return this}reindexFaces(){const e=[];for(let t=0;t<this.faces.length;t++){const n=this.faces[t];n.mark===la&&e.push(n)}return this.faces=e,this}nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0;const n=this.assigned.first().face;let i=n.outside;do{const r=n.distanceToPoint(i.point);r>t&&(t=r,e=i),i=i.next}while(i!==null&&i.face===n);return e}}computeHorizon(e,t,n,i){this.deleteFaceVertices(n),n.mark=Yv;let r;t===null?r=t=n.getEdge(0):r=t.next;do{const a=r.twin,o=a.face;o.mark===la&&(o.distanceToPoint(e)>this.tolerance?this.computeHorizon(e,a,o,i):i.push(r)),r=r.next}while(r!==t);return this}addAdjoiningFace(e,t){const n=Tn.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}addNewFaces(e,t){this.newFaces=[];let n=null,i=null;for(let r=0;r<t.length;r++){const a=t[r],o=this.addAdjoiningFace(e,a);n===null?n=o:o.next.setTwin(i),this.newFaces.push(o.face),i=o}return n.next.setTwin(i),this}addVertexToHull(e){const t=[];return this.unassigned.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,t),this.addNewFaces(e,t),this.resolveUnassignedPoints(this.newFaces),this}cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}compute(){let e;for(this.computeInitialHull();(e=this.nextVertexToAdd())!==void 0;)this.addVertexToHull(e);return this.reindexFaces(),this.cleanup(),this}}class Tn{constructor(){this.normal=new I,this.midpoint=new I,this.area=0,this.constant=0,this.outside=null,this.mark=la,this.edge=null}static create(e,t,n){const i=new Tn,r=new Ro(e,i),a=new Ro(t,i),o=new Ro(n,i);return r.next=o.prev=a,a.next=r.prev=o,o.next=a.prev=r,i.edge=r,i.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){const e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return ia.set(e.point,t.point,n.point),ia.getNormal(this.normal),ia.getMidpoint(this.midpoint),this.area=ia.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}}class Ro{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}}class Kv{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}}class Yh{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}}class Zv extends Mt{constructor(e=[]){super();const t=[],n=[],r=new jv().setFromPoints(e).faces;for(let a=0;a<r.length;a++){const o=r[a];let l=o.edge;do{const c=l.head().point;t.push(c.x,c.y,c.z),n.push(o.normal.x,o.normal.y,o.normal.z),l=l.next}while(l!==o.edge)}this.setAttribute("position",new at(t,3)),this.setAttribute("normal",new at(n,3))}}let Ri=null;function Qv(){if(Ri)return Ri;const s=document.createElement("canvas");s.width=512,s.height=512;const e=s.getContext("2d");e.fillStyle="#808080",e.fillRect(0,0,512,512);const t=e.getImageData(0,0,512,512),n=t.data;for(let i=0;i<n.length;i+=4){const r=(Math.random()-.5)*48;n[i]=Math.min(255,Math.max(0,128+r)),n[i+1]=n[i],n[i+2]=n[i],n[i+3]=255}e.putImageData(t,0,0),e.strokeStyle="rgba(240, 240, 240, 0.35)",e.lineWidth=1.4;for(let i=0;i<22;i++){e.beginPath();let r=Math.random()*512,a=Math.random()*512;e.moveTo(r,a);for(let o=0;o<5;o++)r+=(Math.random()-.5)*90,a+=(Math.random()-.5)*90,e.lineTo(r,a);e.stroke()}return Ri=new ga(s),Ri.wrapS=ar,Ri.wrapT=ar,Ri.repeat.set(2,2),Ri}function Jv(s=12){const e=[],t=[];for(let f=0;f<s;f++)t.push(f/s*Math.PI*2+Math.PI/s);const n=t.map(f=>new I(Math.cos(f)*.72*(1+.12*Math.cos(2*f)),.58,Math.sin(f)*.6*(1-.12*Math.cos(2*f)))),i=new I(0,.59,0),r=t.map(f=>new I(Math.cos(f)*1.05*(1+.12*Math.cos(2*f)),.35,Math.sin(f)*.88*(1-.12*Math.cos(2*f)))),a=t.map(f=>new I(Math.cos(f)*1.3*(1+.12*Math.cos(2*f)),.12,Math.sin(f)*1.08*(1-.12*Math.cos(2*f)))),o=t.map(f=>new I(Math.cos(f)*1.3*(1+.12*Math.cos(2*f)),-.12,Math.sin(f)*1.08*(1-.12*Math.cos(2*f)))),l=t.map(f=>new I(Math.cos(f)*.8*(1+.12*Math.cos(2*f)),-.58,Math.sin(f)*.66*(1-.12*Math.cos(2*f)))),c=new I(0,-.98,0);function h(f,_,g){e.push(f.x,f.y,f.z,_.x,_.y,_.z,g.x,g.y,g.z)}function d(f,_,g,p){h(f,_,g),h(f,g,p)}for(let f=0;f<s;f++){const _=(f+1)%s;h(i,n[f],n[_]),d(n[f],r[f],r[_],n[_]),d(r[f],a[f],a[_],r[_]),d(a[f],o[f],o[_],a[_]),d(o[f],l[f],l[_],o[_]),h(l[f],c,l[_])}const u=new Mt;return u.setAttribute("position",new at(e,3)),u.computeVertexNormals(),u}function ps(s=42,e=1.15,t=1.35,n=1.05){let i=s;function r(){return i=(i*9301+49297)%233280,i/233280}const a=[],o=30;for(let d=0;d<o;d++){const u=r()*2-1,f=r()*Math.PI*2,_=Math.sqrt(Math.max(0,1-u*u)),g=_*Math.cos(f),p=u,m=_*Math.sin(f),v=g*e,x=p*t,y=m*n,T=Math.sqrt(v*v+x*x+y*y),E=d%4===0?.78+r()*.12:.9+r()*.22,b=T*E;a.push({nx:g,ny:p,nz:m,d:b})}a.push({nx:.55,ny:.65,nz:.4,d:1}),a.push({nx:-.6,ny:.5,nz:-.55,d:.95}),a.push({nx:.65,ny:-.6,nz:-.4,d:.98}),a.push({nx:-.5,ny:-.75,nz:.4,d:.92});const l=a.length,c=[];for(let d=0;d<l;d++)for(let u=d+1;u<l;u++)for(let f=u+1;f<l;f++){const _=a[d],g=a[u],p=a[f],m=_.nx*(g.ny*p.nz-g.nz*p.ny)-_.ny*(g.nx*p.nz-g.nz*p.nx)+_.nz*(g.nx*p.ny-g.ny*p.nx);if(Math.abs(m)<1e-4)continue;const v=(_.d*(g.ny*p.nz-g.nz*p.ny)-_.ny*(g.d*p.nz-g.nz*p.d)+_.nz*(g.d*p.ny-g.ny*p.d))/m,x=(_.nx*(g.d*p.nz-g.nz*p.d)-_.d*(g.nx*p.nz-g.nz*p.nx)+_.nz*(g.nx*p.d-g.d*p.nx))/m,y=(_.nx*(g.ny*p.d-g.d*p.ny)-_.ny*(g.nx*p.d-g.d*p.nx)+_.d*(g.nx*p.ny-g.ny*p.nx))/m;let T=!0;for(let E=0;E<l;E++){const b=a[E];if(b.nx*v+b.ny*x+b.nz*y>b.d+.001){T=!1;break}}T&&c.push(new I(v,x,y))}const h=new Zv(c);return h.center(),h.computeVertexNormals(),h}function ey(s){return s==="time"?Jv(12):s==="soul"?ps(42,1.15,1.35,1.05):s==="mind"?ps(77,1.08,1.48,1.02):s==="power"?ps(93,1.25,1.28,1.18):s==="space"?ps(17,1.2,1.3,1.12):s==="reality"?ps(51,1.16,1.34,1.14):ps(42,1.2,1.2,1.2)}function ty(s,e){s.computeBoundingBox();const t=s.boundingBox,n=t.min.y,i=t.max.y,r=Math.max(.001,i-n),a=t.min.x,o=t.max.x,l=Math.max(.001,o-a),c=t.min.z,h=t.max.z,d=Math.max(.001,h-c),u=s.attributes.position,f=new Float32Array(u.count*3);for(let E=0;E<u.count;E++)f[E*3]=(u.getX(E)-a)/l,f[E*3+1]=(u.getY(E)-n)/r,f[E*3+2]=(u.getZ(E)-c)/d;const _=new Float32Array(u.count*3),g=new Kt(_,3);s.setAttribute("color",g);const p=new Pe(e.coreColor).lerp(new Pe(16777215),.62),m=new Pe(e.colorThree),v=new Pe(e.darkColor).multiplyScalar(.36),x=new Pe,y=new Pe,T=E=>{const b=.5+Math.sin(E*4.6)*.3;y.copy(p).lerp(new Pe(16777215),b);for(let P=0;P<u.count;P++){const M=f[P*3],A=f[P*3+1],U=f[P*3+2],z=Math.sin(E*4.5+M*3+U*2.4)*.22+Math.cos(E*3.5+A*2.6)*.13;let q=A*.88+M*.12+z;if(q=Math.max(0,Math.min(1,q)),q<.5){const C=Math.pow(q*2,1.25);x.copy(v).lerp(m,C)}else{const C=Math.pow((q-.5)*2,.82);x.copy(m).lerp(y,C)}_[P*3]=x.r,_[P*3+1]=x.g,_[P*3+2]=x.b}g.needsUpdate=!0};return T(0),T}function ny(s){const e=new Un;e.name=s.id,e.userData={stoneData:s};const t=ey(s.id),n=ty(t,s),i=Qv(),r=new hx({color:16777215,vertexColors:!0,emissive:s.colorThree,emissiveIntensity:.18,roughness:.14,metalness:.06,transmission:0,transparent:!1,opacity:1,depthWrite:!0,ior:1.76,specularIntensity:1,specularColor:new Pe(16777215),clearcoat:.55,clearcoatRoughness:.06,bumpMap:i,bumpScale:.015,flatShading:!0}),a=new Et(t,r);a.castShadow=!0,a.receiveShadow=!0,e.add(a);const o=new ph(new xl(1.05,1)),l=new Zs({color:s.coreColor,transparent:!0,opacity:0,blending:Bt}),c=new $r(o,l);c.visible=!1,e.add(c);const h=new Zs({color:16777215,transparent:!0,opacity:.45,blending:Bt}),d=new $r(new ph(t),h);d.visible=!0,e.add(d);const u=new vl(.24,18,18),f=new wn({color:s.coreColor,transparent:!0,opacity:0}),_=new Et(u,f);_.visible=!1,e.add(_);const g=new Wo(s.coreColor,1.8,10,1.4);g.position.set(0,1,2.6),e.add(g);const p=new Wo(s.colorThree,1.3,8,1.4);p.position.set(0,-1,-2.6),e.add(p);const m=new Un;if(m.name="artifacts",s.id==="space"){const C=new Os(2.1,2.1,2.1),N=new ox(C),O=new $r(N,new Zs({color:54015,transparent:!0,opacity:.25,blending:Bt}));m.add(O)}else if(s.id==="mind"){const C=new vs(1.92,.005,6,64),N=new wn({color:16771584,transparent:!0,opacity:.16,blending:Bt}),O=new Et(C,N);O.rotation.set(Math.PI/3.5,0,Math.PI/6);const G=new Et(C,N);G.rotation.set(-Math.PI/3.5,0,-Math.PI/6),m.add(O,G)}else if(s.id==="reality")for(let C=0;C<2;C++){const N=1.7+C*.35,O=new vs(N,.015,6,48),G=new wn({color:16717636,transparent:!0,opacity:.3-C*.08,blending:Bt}),V=new Et(O,G);V.rotation.x=Math.random()*Math.PI,V.rotation.y=Math.random()*Math.PI,V.userData={speedX:.006+C*.004,speedY:.008+C*.003},m.add(V)}else if(s.id==="power"){const C=new Un,N=new yl(.055,0),O=new wn({color:14647551,transparent:!0,opacity:.55,blending:Bt});for(let G=0;G<18;G++){const V=.6+Math.random()*.7,B=new Et(N,O);B.scale.set(V,V,V);const Z=G/18*Math.PI*2,ee=1.85+(Math.random()-.5)*.4,Q=(Math.random()-.5)*.7;B.position.set(Math.cos(Z)*ee,Q,Math.sin(Z)*ee),C.add(B)}C.rotation.set(Math.PI/4,0,Math.PI/6),m.add(C)}else if(s.id==="time"){const C=new Un,N=new _a(1.68,1.72,64),O=new _a(2.1,2.15,64),G=new wn({color:65416,side:_n,transparent:!0,opacity:.65,blending:Bt}),V=new wn({color:6942894,side:_n,transparent:!0,opacity:.45,blending:Bt}),B=new Et(N,G),Z=new Et(O,V);B.rotation.x=Math.PI/2,Z.rotation.x=Math.PI/2;const ee=new Mt,Q=1.18,H=[-Q,0,-Q,Q,0,-Q,Q,0,-Q,Q,0,Q,Q,0,Q,-Q,0,Q,-Q,0,Q,-Q,0,-Q];ee.setAttribute("position",new at(H,3));const K=new Zs({color:65416,transparent:!0,opacity:.55,blending:Bt}),ae=new $r(ee,K),Se=ae.clone();Se.rotation.y=Math.PI/4,B.add(ae,Se);const ye=new Ca(.025,.14),Re=new wn({color:9109441,side:_n,blending:Bt});for(let Ce=0;Ce<24;Ce++){const me=Ce/24*Math.PI*2,Oe=new Et(ye,Re);Oe.position.set(Math.cos(me)*2.12,0,Math.sin(me)*2.12),Oe.rotation.y=-me,Z.add(Oe)}C.add(B,Z),m.add(C)}else if(s.id==="soul"){const C=new Un,N=new wn({color:16758869,transparent:!0,opacity:.18,blending:Bt}),O=new Et(new vs(1.85,.006,6,64),N);O.rotation.set(Math.PI/3,0,Math.PI/6);const G=new Et(new vs(1.95,.005,6,64),N);G.rotation.set(-Math.PI/3,0,-Math.PI/6),C.add(O,G),m.add(C)}e.add(m);const v=120,x=new Mt,y=new Float32Array(v*3);for(let C=0;C<v;C++){const N=1+Math.random()*1.8,O=Math.random()*Math.PI*2,G=Math.acos(2*Math.random()-1);y[C*3]=N*Math.sin(G)*Math.cos(O),y[C*3+1]=N*Math.sin(G)*Math.sin(O),y[C*3+2]=N*Math.cos(G)}x.setAttribute("position",new Kt(y,3));const T=document.createElement("canvas");T.width=32,T.height=32;const E=T.getContext("2d"),b=E.createRadialGradient(16,16,0,16,16,16);b.addColorStop(0,"rgba(255, 255, 255, 1)"),b.addColorStop(.3,"rgba(255, 255, 255, 0.7)"),b.addColorStop(.8,"rgba(255, 255, 255, 0.15)"),b.addColorStop(1,"rgba(255, 255, 255, 0)"),E.fillStyle=b,E.fillRect(0,0,32,32);const P=new ga(T),M=new _l({color:s.coreColor,size:.1,map:P,transparent:!0,opacity:.7,blending:Bt,depthWrite:!1}),A=new Ku(x,M);A.name="particles",e.add(A);const U=.0055+(s.colorThree&7)*4e-4,z=.009+(s.colorThree>>4&7)*4e-4,q=.0042+(s.colorThree>>8&7)*4e-4;return{group:e,gemMesh:a,gemMat:r,wireMesh:d,veinMesh:c,coreMesh:_,pointLight:g,artifactsGroup:m,particles:A,update:(C,N)=>{const O=1+Math.sin(C*3.6)*.1;if(_.scale.set(O,O,O),g.intensity=1.8+Math.sin(C*4.5)*.4,p.intensity=1.3+Math.cos(C*4)*.3,l.opacity=.12+Math.sin(C*4.2)*.07,a.rotation.x+=U+Math.sin(C*1.8)*.0016,a.rotation.y+=z,a.rotation.z+=q+Math.cos(C*1.5)*.0016,c.rotation.copy(a.rotation),d.rotation.copy(a.rotation),n(C),s.id==="space"){const B=m.children[0];B&&(B.rotation.y+=.007,B.rotation.x+=.004)}else if(s.id==="mind")m.children.forEach((B,Z)=>{B.rotation.y+=Z===0?.009:-.009,B.rotation.z+=.004});else if(s.id==="reality")m.children.forEach(B=>{B.userData&&(B.rotation.x+=B.userData.speedX*1.8,B.rotation.y+=B.userData.speedY*1.8)});else if(s.id==="power"){const B=m.children[0];B&&(B.rotation.y+=.015,B.rotation.z+=.005)}else if(s.id==="time"){const B=m.children[0];B&&B.children.length>=2&&(B.children[0].rotation.z+=.012,B.children[1].rotation.z-=.008)}else if(s.id==="soul"){const B=m.children[0];B&&B.children.length>=2&&(B.children[0].rotation.y+=.009,B.children[1].rotation.y-=.009)}const G=A.geometry.attributes.position.array,V=G.length/3;for(let B=0;B<V;B++){const Z=G[B*3],ee=G[B*3+2],Q=.006;G[B*3]=Z*Math.cos(Q)-ee*Math.sin(Q),G[B*3+2]=Z*Math.sin(Q)+ee*Math.cos(Q)}A.geometry.attributes.position.needsUpdate=!0}}}class iy{constructor(){this.ctx=null,this.isMuted=!1,this.masterGain=null,this.compressor=null,this.stoneFrequencies={space:[261.63,523.25,1046.5],mind:[293.66,587.33,1174.66],reality:[329.63,659.25,987.77],power:[369.99,739.99,1479.98],time:[392,783.99,1567.98],soul:[440,880,1760]},this.initialized=!1}init(){if(!this.initialized)try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.7,this.ctx.currentTime),this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.setValueAtTime(-14,this.ctx.currentTime),this.compressor.knee.setValueAtTime(8,this.ctx.currentTime),this.compressor.ratio.setValueAtTime(6,this.ctx.currentTime),this.compressor.attack.setValueAtTime(.003,this.ctx.currentTime),this.compressor.release.setValueAtTime(.2,this.ctx.currentTime),this.masterGain.connect(this.compressor),this.compressor.connect(this.ctx.destination),this.initialized=!0}catch(e){console.warn("Web Audio could not be initialized:",e)}}toggleMute(){if(this.initialized?this.isMuted=!this.isMuted:(this.init(),this.isMuted=!1),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.masterGain&&this.ctx){const e=this.isMuted?0:.7;this.masterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.04)}return!this.isMuted}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){!this.isMuted&&this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}destroy(){if(this.ctx){try{this.ctx.close()}catch{}this.ctx=null}this.initialized=!1}playStoneChime(e){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.stoneFrequencies[e]||[440,880,1320],n=this.ctx.currentTime;t.forEach((i,r)=>{const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type=r===0?"sine":"triangle",a.frequency.setValueAtTime(i,n),r>0&&a.detune.setValueAtTime(r%2===0?3:-3,n);const l=.24/(r+1);o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(l,n+.03),o.gain.exponentialRampToValueAtTime(1e-4,n+2+r*.35),a.connect(o),o.connect(this.masterGain),a.start(n),a.stop(n+2.6)})}playEnergyPulse(){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter();t.type="sawtooth",t.frequency.setValueAtTime(65,e),t.frequency.exponentialRampToValueAtTime(440,e+.3),t.frequency.exponentialRampToValueAtTime(110,e+.8),i.type="bandpass",i.frequency.setValueAtTime(220,e),i.frequency.linearRampToValueAtTime(1100,e+.3),i.frequency.exponentialRampToValueAtTime(180,e+.8),i.Q.setValueAtTime(4,e),n.gain.setValueAtTime(.01,e),n.gain.linearRampToValueAtTime(.28,e+.12),n.gain.exponentialRampToValueAtTime(.001,e+.95),t.connect(i),i.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+1)}playConvergenceChord(){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(160,e),t.frequency.exponentialRampToValueAtTime(36,e+1.2),n.gain.setValueAtTime(.4,e),n.gain.exponentialRampToValueAtTime(.001,e+2.2),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+2.3),[261.63,293.66,329.63,369.99,392,440].forEach((r,a)=>{const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(r,e+a*.04),l.gain.setValueAtTime(.001,e+a*.04),l.gain.linearRampToValueAtTime(.1,e+.25+a*.04),l.gain.exponentialRampToValueAtTime(1e-4,e+3.2),o.connect(l),l.connect(this.masterGain),o.start(e+a*.04),o.stop(e+3.4)})}playClick(){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(1200,e),t.frequency.exponentialRampToValueAtTime(400,e+.03),n.gain.setValueAtTime(.07,e),n.gain.exponentialRampToValueAtTime(.001,e+.035),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.04)}playChime(e=440,t=.4){if(!(!this.ctx||this.isMuted))try{this.ctx.state==="suspended"&&this.ctx.resume();const n=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(e,n),r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.16,n+.02),r.gain.exponentialRampToValueAtTime(1e-4,n+t),i.connect(r),r.connect(this.masterGain),i.start(n),i.stop(n+t+.05)}catch{}}}const He=new iy;function sy(){const s=document.getElementById("modal-register"),e=document.getElementById("modal-success"),t=document.getElementById("btn-close-register"),n=document.getElementById("btn-close-success"),i=document.getElementById("btn-nav-register"),r=document.getElementById("btn-wield-stone"),a=document.getElementById("form-registration"),o=document.getElementById("reg-domain-badge"),l=document.querySelectorAll(".domain-radio-card"),c=document.querySelectorAll('input[name="teamSize"]'),h=document.getElementById("member-4-card"),d=h?h.querySelectorAll("input"):[],u=document.getElementById("qr-img"),f=document.getElementById("qr-amount-text"),_=document.getElementById("total-fee-display"),g=document.getElementById("reg-screenshot"),p=document.getElementById("ocr-banner"),m=document.getElementById("ocr-body"),v=document.getElementById("ocr-icon"),x=document.getElementById("ocr-title"),y=document.getElementById("reg-utr"),T=document.getElementById("reg-pay-phone"),E=document.getElementById("utr-check-badge"),b=document.getElementById("reg-error-msg"),P=document.getElementById("btn-submit-registration"),M=document.getElementById("reg-spinner");let A=!1,U=null,z=!1,q=null,C=!1;function N(w){if(!w||typeof w!="string")return!0;const S=w.trim();return/^(\d)\1+$/.test(S)?!0:["123456789012","12345678901","012345678901","987654321098","112233445566","998877665544","123456123456"].includes(S)}function O(w,S=.4){try{He&&typeof He.playChime=="function"&&He.playChime(w,S)}catch{}}function G(w="mind"){if(!s)return;s.classList.add("is-open"),s.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden";const S=document.querySelector(`input[name="domain"][value="${w}"]`);S&&(S.checked=!0,B(w));const F=document.querySelector('input[name="teamSize"]:checked'),$=F?parseInt(F.value,10):3;u&&(u.src=$===4?"/4mem.png":"/3mem.png");const J=$*349;f&&(f.textContent=`PAY ₹${J.toLocaleString("en-IN")}`),_&&(_.textContent=`₹${J.toLocaleString("en-IN")}`),O(580)}function V(){s&&(s.classList.remove("is-open"),s.setAttribute("aria-hidden","true"),document.body.classList.contains("timeline-unlocked")?document.body.style.overflowY="auto":document.body.style.overflow="hidden")}function B(w){const S=Ht.find(F=>F.id===w)||Ht[0];o&&(o.textContent=`DOMAIN: ${S.name} // ${S.domain}`,o.style.color=S.colorHex),l.forEach(F=>{const $=F.getAttribute("data-domain")===w;F.classList.toggle("selected",$)})}r&&r.addEventListener("click",()=>{const w=r.getAttribute("data-stone-id")||"mind";He.playClick(),G(w)}),i&&i.addEventListener("click",()=>{He.playClick(),G("mind")}),t&&t.addEventListener("click",()=>{He.playClick(),V()}),n&&n.addEventListener("click",()=>{He.playClick(),e==null||e.classList.remove("is-open"),e==null||e.setAttribute("aria-hidden","true")}),window.addEventListener("click",w=>{w.target===s&&V(),w.target===e&&(e.classList.remove("is-open"),e.setAttribute("aria-hidden","true"))}),l.forEach(w=>{w.addEventListener("click",()=>{const S=w.getAttribute("data-domain"),F=w.querySelector('input[type="radio"]');F&&(F.checked=!0),B(S),He.playStoneChime(S)})}),c.forEach(w=>{w.addEventListener("change",()=>{He.playClick();const S=parseInt(w.value,10),F=S*349;u&&(u.src=S===4?"/4mem.png":"/3mem.png"),f&&(f.textContent=`PAY ₹${F.toLocaleString("en-IN")}`),_&&(_.textContent=`₹${F.toLocaleString("en-IN")}`),S===4?(h&&(h.style.display="block"),d.forEach($=>$.setAttribute("required","true"))):(h&&(h.style.display="none"),d.forEach($=>{$.removeAttribute("required"),$.value=""}))})});async function Z(w){const S=(w||"").trim();if(!S){E&&(E.textContent="",E.className="utr-status-badge"),z=!1;return}try{(await(await fetch(`/api/verify-utr?utr=${encodeURIComponent(S)}`)).json()).exists?(z=!1,E&&(E.textContent="❌ Already Registered!",E.className="utr-status-badge error"),me(y,"This UTR has already been registered with another team.")):(z=!0,Oe(y),E&&(E.textContent="",E.className="utr-status-badge"))}catch(F){console.warn("UTR verify network warning:",F),z=!0}}y&&y.addEventListener("input",w=>{clearTimeout(q),q=setTimeout(()=>{Z(w.target.value)},300)});async function ee(){return window.Tesseract?window.Tesseract:new Promise((w,S)=>{const F=document.querySelector('script[src*="tesseract"]');if(F){if(window.Tesseract)return w(window.Tesseract);F.addEventListener("load",()=>w(window.Tesseract)),F.addEventListener("error",()=>S(new Error("Failed to load OCR engine")));return}const $=document.createElement("script");$.src="/tesseract/tesseract.min.js",$.onload=()=>w(window.Tesseract),$.onerror=()=>S(new Error("Failed to load OCR engine")),document.head.appendChild($)})}async function Q(w){return new Promise((S,F)=>{try{const $=new Image,J=URL.createObjectURL(w);$.onload=()=>{URL.revokeObjectURL(J);const ne=$.naturalWidth||$.width,ge=$.naturalHeight||$.height,le=ne>=300&&ge>=200,de=ne>=200&&ge>=300;if(!le&&!de)return F(new Error(`IMAGE_TOO_SMALL:${ne}x${ge}`));const ve=1200;let Ee=ne,te=ge;(Ee>ve||te>ve)&&(Ee>te?(te=Math.round(te*ve/Ee),Ee=ve):(Ee=Math.round(Ee*ve/te),te=ve));const Be=document.createElement("canvas");Be.width=Ee,Be.height=te;const Fe=Be.getContext("2d");if(!Fe)return S(w);Fe.drawImage($,0,0,Ee,te),Be.toBlob(Le=>{S(Le||w)},"image/jpeg",.92)},$.onerror=()=>S(w),$.src=J}catch{S(w)}})}const H=15*1024,K=20*1024*1024,ae=["image/png","image/jpeg","image/jpg","image/webp"];g&&g.addEventListener("change",async w=>{var F;const S=w.target.files[0];if(S){if(A=!1,U=null,C=!0,S.size<H){oe(`❌ Image file too small (${(S.size/1024).toFixed(1)} KB). Logos, icons, and small images are not accepted. Please upload an authentic payment receipt screenshot.`),g.value="",C=!1,g.classList.add("is-invalid"),p&&(p.style.display="flex",p.className="ocr-detection-banner error",v&&(v.textContent="❌"),x&&(x.textContent="Image File Too Small"),m&&(m.innerHTML=`<strong>Invalid Image:</strong> The file is too small (${(S.size/1024).toFixed(1)} KB) to be a payment receipt. Logos, icons, and small graphics are rejected.`));return}if(S.size>K){const $=(S.size/1048576).toFixed(1);oe(`❌ File size (${$} MB) exceeds the 20MB limit. Please upload an image under 20MB.`),g.value="",C=!1,g.classList.add("is-invalid"),p&&(p.style.display="none");return}if(!ae.includes(S.type)){oe(`❌ Invalid file format (${S.type||"unknown"}). Please upload a PNG, JPG, or WEBP receipt screenshot.`),g.value="",C=!1,g.classList.add("is-invalid"),p&&(p.style.display="none");return}p&&(p.style.display="flex",p.className="ocr-detection-banner scanning",v&&(v.textContent="🔍"),x&&(x.textContent="Analyzing Receipt Authenticity..."),m&&(m.innerHTML='<span class="ocr-scanning">Verifying payment indicators & reading 12-digit UPI UTR...</span>'));try{const $=await Q(S),J=await ee();if(!J)throw new Error("OCR not available");const ne=await J.createWorker("eng",1,{workerPath:"/tesseract/worker.min.js",corePath:"/tesseract/tesseract-core.wasm.js",langPath:"/tesseract",gzip:!0,logger:et=>{if(et.status==="recognizing text"&&et.progress){const Lt=Math.round(et.progress*100);m&&(m.innerHTML=`<span class="ocr-scanning">Scanning receipt contents: ${Lt}%...</span>`)}}}),ge=new Promise((et,Lt)=>setTimeout(()=>Lt(new Error("OCR Timeout")),45e3)),le=ne.recognize($),de=await Promise.race([le,ge]);await ne.terminate().catch(()=>{});const ve=(((F=de==null?void 0:de.data)==null?void 0:F.text)||"").trim(),Ee=ve.toLowerCase(),te=["google pay","gpay","g pay","g-pay","phonepe","phone pe","paytm","pay tm","bhim","cred","navi","amazon pay","amazonpay","whatsapp pay","mobikwik","freecharge","airtel payments","jupiter","fi money","fampay","slice","super.money","payzapp","bhim upi","omni card"],Be=["state bank","sbi","hdfc","icici","axis bank","axis","kotak","canara","bank of baroda","punjab national","pnb","union bank","idfc","indusind","yes bank","npci","upi","imps","neft","rtgs","netbanking","central bank","bank of india","indian bank","uco bank","bank of maharashtra"],Fe=["payment successful","transaction successful","paid successfully","transfer successful","payment completed","paid to","payment to","payment of","money sent","sent to","debited from","credited to","bill payment","payment details","transaction details","banking name","funds transfer","completed","successful","transferred to","transferred","sent successfully","received by","remittance"],Le=["upi ref","upi transaction id","upi transaction","google transaction id","phonepe transaction id","paytm order id","wallet txn id","ref no","reference no","transaction id","txn id","rrn","utr","order id","utr no","ref number","reference id","transfer details"],be=["₹","inr","rs.","rs ","rupees","rs:"],fe=["@upi","@okhdfcbank","@okaxis","@oksbi","@okicici","@ybl","@ibl","@axl","@paytm","@apl","@ikwik","@barodampay","@idbi","@federal","@kotak"],L=[{type:"Code & Development Screen",keywords:["github.com","stackoverflow","localhost","syntax error","uncaught error","traceback","stack trace","console.log","npm install","terminal","docker","vscode","exception in thread","trying to access array offset","undefined index","fatal error"]},{type:"Academic Portal / Exam Document",keywords:["nptel","candidate_login","noc candidate","hall ticket","admit card","marksheet","semester","roll number","registration number:","grade card","question paper","curriculum vitae","resume","provisional certificate","login/index.php"]},{type:"Logo or Graphic Illustration",keywords:["stock vector","getty images","shutterstock","freepik","watermark","clipart","wallpaper","vector illustration","graphic design","behance","dribbble","brand identity","logo design"]},{type:"Social Media / Entertainment App",keywords:["instagram","facebook","snapchat","tiktok","netflix","spotify","youtube","reels","retweet"]},{type:"E-commerce Shopping / Travel Ticket",keywords:["add to cart","shopping cart","buy now","item details","boarding pass","flight booking","train ticket","pnr status","irctc"]}];let se=null;const Me=ve.match(/(?:utr|upi\s*ref(?:erence)?(?:\s*no)?|rrn|txn\s*(?:id|no)?|transaction\s*(?:id|ref|no)?)[\s:.-]*([0-9\s-]{12,18})\b/i);if(Me&&Me[1]){const et=Me[1].replace(/[\s-]/g,"");et.length===12&&!N(et)&&(se=et)}if(!se){const et=ve.match(/\b([0-9]{4}[\s-][0-9]{4}[\s-][0-9]{4})\b/);if(et&&et[1]){const Lt=et[1].replace(/[\s-]/g,"");Lt.length===12&&!N(Lt)&&(se=Lt)}}se||(se=(ve.match(/\b([0-9]{12})\b/g)||[]).find(Lt=>!N(Lt))||null);const pe=ve.match(/(?:phone|mobile|mob|contact|ph|payer\s*phone|remitter\s*mobile)[\s:.-]*(?:\+91[\s-]?)?([6-9][0-9]{9})\b/i);pe&&pe[1]&&T&&!T.value&&(T.value=pe[1]);const re=te.filter(et=>Ee.includes(et)),D=Be.filter(et=>Ee.includes(et)),ie=Fe.filter(et=>Ee.includes(et)),ce=Le.filter(et=>Ee.includes(et)),Ie=be.filter(et=>Ee.includes(et)),Ae=fe.filter(et=>Ee.includes(et));let ke=re.length*2+D.length*1+ie.length*2+ce.length*2+Ie.length*1+Ae.length*2;se&&(ke+=3);let Ge=null;for(const et of L){const Lt=et.keywords.find(Bn=>Ee.includes(Bn));if(Lt){Ge={category:et.type,keyword:Lt};break}}let tt=!0,st="";const je=!!(se&&!N(se)),ct=ie.length>0,Gt=re.length>0||D.length>0||ce.length>0;if(ve.length<15?(tt=!1,st="No payment text found. Camera photos, logos, and plain graphics without transaction details are not allowed"):Ge&&ke<6?(tt=!1,st=`Image identified as a ${Ge.category} (matched '${Ge.keyword}')`):je&&(ct||Gt||ke>=3)?tt=!0:!je&&!ct?(tt=!1,st="Missing payment action or transaction status (e.g. Paid to, Successful, Debited). Logos and normal photos are not accepted"):!je&&ke<4&&(tt=!1,st="Image does not contain sufficient payment markers. Only authentic Google Pay, PhonePe, Paytm, or bank receipts are accepted"),!tt){A=!1,U=null,C=!1,g.value="",g.classList.add("is-invalid"),p&&(p.className="ocr-detection-banner error",v&&(v.textContent="❌"),x&&(x.textContent="Receipt Verification FAILED"),m&&(m.innerHTML=`<strong>Invalid Receipt:</strong> ${st}. Please upload an authentic screenshot of your payment receipt.`)),O(220),oe(`❌ Verification Failed: ${st}.`);return}A=!0,U=se,C=!1,g.classList.remove("is-invalid"),p&&(p.className="ocr-detection-banner success",v&&(v.textContent="✅"),x&&(x.textContent="Authentic Receipt Verified"),m&&(m.innerHTML="Genuine payment receipt verified. Please enter your <strong>12-digit bank UTR number</strong> below.")),y&&y.value.trim()?Z(y.value):E&&(E.textContent="",E.className="utr-status-badge"),O(720);return}catch($){console.error("OCR processing error / rejected:",$),A=!1,U=null,C=!1,g.value="",g.classList.add("is-invalid");let J="Could not verify image as an authentic payment receipt.";$.message&&$.message.startsWith("IMAGE_TOO_SMALL")?J="Image dimensions are too small to be a payment receipt screenshot. Logos, icons, and small images are not accepted.":$.message&&$.message.includes("Timeout")&&(J="OCR scan timed out. Please upload a clearer payment screenshot."),p&&(p.className="ocr-detection-banner error",v&&(v.textContent="❌"),x&&(x.textContent="Receipt Verification Rejected"),m&&(m.innerHTML=`<strong>Verification Failed:</strong> ${J} Please upload an authentic Google Pay, PhonePe, or Paytm receipt.`)),O(220),oe(`❌ ${J}`)}}});const Se=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;function ye(w){if(!w)return"";let S=w.replace(/\D/g,"");return S.length===12&&S.startsWith("91")?S=S.slice(2):S.length===11&&S.startsWith("0")&&(S=S.slice(1)),S}function Re(w){return typeof w=="string"&&Se.test(w.trim())}function Ce(w){const S=ye(w);return S.length>=10&&S.length<=14}function me(w,S){if(!w)return;w.classList.add("is-invalid");let F=w.parentElement,$=F.querySelector(".field-error-hint");$||($=document.createElement("span"),$.className="field-error-hint",F.appendChild($)),$.textContent=S}function Oe(w){if(!w)return;w.classList.remove("is-invalid");const S=w.parentElement.querySelector(".field-error-hint");S&&S.remove()}async function W(w,S,F,$){if(S)try{const J=w==="email"?`email=${encodeURIComponent(S.trim().toLowerCase())}`:`phone=${encodeURIComponent(S)}`,ge=await(await fetch(`/api/verify-participant?${J}`)).json();ge.exists&&(me(F,`❌ Already registered in team '${ge.teamName}' (${ge.teamId})`),O(220))}catch{}}[{id:"reg-leader-email",type:"email",role:"Team Leader"},{id:"reg-leader-phone",type:"phone",role:"Team Leader"},{id:"reg-m2-email",type:"email",role:"Member 02"},{id:"reg-m2-phone",type:"phone",role:"Member 02"},{id:"reg-m3-email",type:"email",role:"Member 03"},{id:"reg-m3-phone",type:"phone",role:"Member 03"},{id:"reg-m4-email",type:"email",role:"Member 04"},{id:"reg-m4-phone",type:"phone",role:"Member 04"}].forEach(w=>{const S=document.getElementById(w.id);S&&(S.addEventListener("input",()=>{Oe(S)}),S.addEventListener("blur",()=>{const F=S.value.trim();if(F){if(w.type==="email"){if(!Re(F)){me(S,"Invalid email address (e.g. name@domain.com)");return}W("email",F,S,w.role)}else if(w.type==="phone"){if(!Ce(F)){me(S,"Enter a valid 10-digit mobile number");return}W("phone",F,S,w.role)}}}))}),a&&a.addEventListener("submit",async w=>{var ce,Ie,Ae,ke,Ge,tt,st,je,ct,Gt,et,Lt,Bn,ks,Mi,Gs,Vs,Sr,Er,br,R,k,Y,j,X,_e,we,Ue,Ne,qe,ze,Ve,dt;w.preventDefault(),b&&(b.style.display="none"),document.querySelectorAll(".form-input.is-invalid").forEach(Oe);const S=(ce=document.getElementById("reg-team-name"))==null?void 0:ce.value.trim(),F=(Ie=document.getElementById("reg-college"))==null?void 0:Ie.value.trim(),$=((Ae=document.querySelector('input[name="domain"]:checked'))==null?void 0:Ae.value)||"mind",J=((Ge=(ke=document.getElementById("reg-tech-stack"))==null?void 0:ke.value)==null?void 0:Ge.trim())||"",ne=((tt=document.querySelector('input[name="teamSize"]:checked'))==null?void 0:tt.value)||"3",ge=(st=document.getElementById("reg-leader-name"))==null?void 0:st.value.trim(),le=(je=document.getElementById("reg-leader-phone"))==null?void 0:je.value.trim(),de=(ct=document.getElementById("reg-leader-email"))==null?void 0:ct.value.trim(),ve=(Gt=document.getElementById("reg-team-password"))==null?void 0:Gt.value,Ee=y==null?void 0:y.value.trim(),te=(T==null?void 0:T.value.trim())||le,Be=g==null?void 0:g.files[0];if(!S){oe("Please enter your Squad / Team Name."),(et=document.getElementById("reg-team-name"))==null||et.focus();return}if(!F){oe("Please enter your College or Institution name."),(Lt=document.getElementById("reg-college"))==null||Lt.focus();return}if(!ge){oe("Please enter Leader Full Name."),(Bn=document.getElementById("reg-leader-name"))==null||Bn.focus();return}if(!Re(de)){oe("Please enter a valid Leader Email address (e.g. name@domain.com).");const xe=document.getElementById("reg-leader-email");me(xe,"Invalid email format"),xe==null||xe.focus();return}if(!Ce(le)){oe("Please enter a valid 10-digit Leader Mobile Number.");const xe=document.getElementById("reg-leader-phone");me(xe,"Enter a valid 10-digit number"),xe==null||xe.focus();return}if(!ve||ve.length<6){oe("Team Password must be at least 6 characters (used for Leader Portal login)."),(ks=document.getElementById("reg-team-password"))==null||ks.focus();return}const Fe=(Mi=document.getElementById("reg-m2-name"))==null?void 0:Mi.value.trim(),Le=(Gs=document.getElementById("reg-m2-email"))==null?void 0:Gs.value.trim(),be=(Vs=document.getElementById("reg-m2-phone"))==null?void 0:Vs.value.trim();if(!Fe){oe("Member 02 Full Name is required."),(Sr=document.getElementById("reg-m2-name"))==null||Sr.focus();return}if(!Re(Le)){oe("Member 02 has an invalid email format.");const xe=document.getElementById("reg-m2-email");me(xe,"Invalid email format"),xe==null||xe.focus();return}if(!Ce(be)){oe("Member 02 requires a valid 10-digit phone number.");const xe=document.getElementById("reg-m2-phone");me(xe,"Enter a valid 10-digit number"),xe==null||xe.focus();return}const fe=(Er=document.getElementById("reg-m3-name"))==null?void 0:Er.value.trim(),L=(br=document.getElementById("reg-m3-email"))==null?void 0:br.value.trim(),se=(R=document.getElementById("reg-m3-phone"))==null?void 0:R.value.trim();if(!fe){oe("Member 03 Full Name is required."),(k=document.getElementById("reg-m3-name"))==null||k.focus();return}if(!Re(L)){oe("Member 03 has an invalid email format.");const xe=document.getElementById("reg-m3-email");me(xe,"Invalid email format"),xe==null||xe.focus();return}if(!Ce(se)){oe("Member 03 requires a valid 10-digit phone number.");const xe=document.getElementById("reg-m3-phone");me(xe,"Enter a valid 10-digit number"),xe==null||xe.focus();return}const Me=[{name:Fe,email:Le,phone:be},{name:fe,email:L,phone:se}];if(ne==="4"){const xe=(Y=document.getElementById("reg-m4-name"))==null?void 0:Y.value.trim(),nt=(j=document.getElementById("reg-m4-email"))==null?void 0:j.value.trim(),Tt=(X=document.getElementById("reg-m4-phone"))==null?void 0:X.value.trim();if(!xe){oe("Member 04 Full Name is required for 4-member squads."),(_e=document.getElementById("reg-m4-name"))==null||_e.focus();return}if(!Re(nt)){oe("Member 04 has an invalid email format.");const Qe=document.getElementById("reg-m4-email");me(Qe,"Invalid email format"),Qe==null||Qe.focus();return}if(!Ce(Tt)){oe("Member 04 requires a valid 10-digit phone number.");const Qe=document.getElementById("reg-m4-phone");me(Qe,"Enter a valid 10-digit number"),Qe==null||Qe.focus();return}Me.push({name:xe,email:nt,phone:Tt})}const pe=[{role:"Team Leader",email:de.toLowerCase(),phone:ye(le),el:document.getElementById("reg-leader-email"),phoneEl:document.getElementById("reg-leader-phone")},{role:"Member 02",email:Le.toLowerCase(),phone:ye(be),el:document.getElementById("reg-m2-email"),phoneEl:document.getElementById("reg-m2-phone")},{role:"Member 03",email:L.toLowerCase(),phone:ye(se),el:document.getElementById("reg-m3-email"),phoneEl:document.getElementById("reg-m3-phone")}];ne==="4"&&pe.push({role:"Member 04",email:Me[2].email.toLowerCase(),phone:ye(Me[2].phone),el:document.getElementById("reg-m4-email"),phoneEl:document.getElementById("reg-m4-phone")});const re=new Map;for(const xe of pe){if(re.has(xe.email)){const nt=re.get(xe.email),Tt=`Duplicate email '${xe.email}' in squad (${nt} and ${xe.role}). Every member must have a unique email.`;oe(Tt),me(xe.el,"Duplicate email in squad"),(we=xe.el)==null||we.focus();return}re.set(xe.email,xe.role)}const D=new Map;for(const xe of pe){if(D.has(xe.phone)){const Tt=`Duplicate mobile number in squad (${D.get(xe.phone)} and ${xe.role}). Every member must have their own unique phone number.`;oe(Tt),me(xe.phoneEl,"Duplicate phone in squad"),(Ue=xe.phoneEl)==null||Ue.focus();return}D.set(xe.phone,xe.role)}if(C){oe("⏳ AI OCR is currently analyzing your receipt screenshot. Please wait a moment...");return}if(!Be){oe("Please upload your payment confirmation screenshot."),(Ne=document.getElementById("reg-screenshot"))==null||Ne.focus();return}if(Be.size<H){oe(`Image file too small (${(Be.size/1024).toFixed(1)} KB). Logos, icons, and small images are not accepted. Please upload an authentic receipt screenshot.`),(qe=document.getElementById("reg-screenshot"))==null||qe.focus();return}if(Be.size>K){const xe=(Be.size/1048576).toFixed(1);oe(`Payment screenshot file size (${xe} MB) exceeds the 20MB limit. Please upload an image under 20MB.`),(ze=document.getElementById("reg-screenshot"))==null||ze.focus();return}if(!A){oe("❌ Valid Payment Receipt Required: The uploaded image was not verified as an authentic payment receipt. Logos, icons, and non-payment photos are not allowed. Please upload an authentic receipt from Google Pay, PhonePe, Paytm, or netbanking."),(Ve=document.getElementById("reg-screenshot"))==null||Ve.focus();return}if(!Ee){oe("Please enter your payment bank UTR / transaction reference number."),(dt=document.getElementById("reg-utr"))==null||dt.focus();return}Ee.trim();const ie=new FormData;ie.append("teamName",S),ie.append("college",F),ie.append("preferredDomain",$),ie.append("techStack",J),ie.append("teamSize",ne),ie.append("teamPassword",ve),ie.append("leaderName",ge),ie.append("leaderPhone",le),ie.append("leaderEmail",de),ie.append("paymentUtr",Ee),ie.append("paymentPhone",te),ie.append("members",JSON.stringify(Me)),ie.append("paymentScreenshot",Be),P&&(P.disabled=!0),M&&(M.style.display="inline-block");try{const xe=await fetch("/api/register",{method:"POST",body:ie}),nt=await xe.json();if(!xe.ok||!nt.success)throw new Error(nt.error||"Registration failed. Please verify your details.");V(),He.playConvergenceChord();const Tt=document.getElementById("suc-team-id"),Qe=document.getElementById("suc-team-name"),Ye=document.getElementById("suc-domain"),$i=document.getElementById("suc-email"),ut=document.getElementById("suc-amount");Tt&&(Tt.textContent=nt.team.id),Qe&&(Qe.textContent=nt.team.teamName),Ye&&(Ye.textContent=`${nt.team.preferredDomain.toUpperCase()} STONE`),$i&&($i.textContent=nt.team.leaderEmail),ut&&(ut.textContent=`₹${nt.team.amount.toLocaleString("en-IN")}`),e&&(e.classList.add("is-open"),e.setAttribute("aria-hidden","false")),a.reset(),A=!1,U=null,z=!1,C=!1,p&&(p.style.display="none"),u&&(u.src="/3mem.png"),f&&(f.textContent="PAY ₹1,047"),_&&(_.textContent="₹1,047"),h&&(h.style.display="none"),d.forEach(Ln=>{Ln.removeAttribute("required"),Ln.value=""})}catch(xe){oe(xe.message)}finally{P&&(P.disabled=!1),M&&(M.style.display="none")}});function oe(w){b&&(b.textContent=w,b.style.display="block",O(220))}document.querySelectorAll(".faq-question").forEach(w=>{w.addEventListener("click",()=>{He.playClick(),w.parentElement.classList.toggle("active")})});const ue=document.getElementById("btn-portals"),We=document.getElementById("portals-menu");ue&&We&&(ue.addEventListener("click",w=>{w.stopPropagation(),We.classList.toggle("is-visible"),He.playClick()}),document.addEventListener("click",w=>{!ue.contains(w.target)&&!We.contains(w.target)&&We.classList.remove("is-visible")})),document.querySelectorAll(".hud-nav a").forEach(w=>{w.addEventListener("click",S=>{S.preventDefault(),He.playClick();const F=w.getAttribute("href").substring(1);if(F==="showcase-section"){window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{document.body.classList.remove("timeline-unlocked")},400);return}const $=document.getElementById(F);$&&(document.body.classList.contains("timeline-unlocked")||document.body.classList.add("timeline-unlocked"),setTimeout(()=>{$.scrollIntoView({behavior:"smooth"})},60))})})}const ry="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",$h=8,jh=22,bn=(s,e,t,n)=>s+(e-s)*(1-Math.exp(-t/n)),ay=s=>{let e=String(s||"").replace("#","");e.length===3&&(e=e.replace(/./g,n=>n+n));const t=parseInt(e.slice(0,6),16);return Number.isNaN(t)?[255,255,255]:[t>>16&255,t>>8&255,t&255]},Wn=(s,e)=>{const[t,n,i]=ay(s);return`rgba(${t}, ${n}, ${i}, ${e})`},ms=(...s)=>{let e=2166136261;for(const t of s)e=Math.imul(e^(t|0),16777619),e^=e>>>13,e=Math.imul(e,1540483477),e^=e>>>15;return(e>>>0)/4294967296},Kh=s=>s>0?`+${s}`:s<0?`−${-s}`:"0";class oy{constructor(e,t={}){ti(this,"tick",e=>{this.raf=0;const t=this.settings;if(!t)return;const n=Math.min(.05,Math.max(.001,(e-this.last)/1e3));this.last=e;const i=this.ensureLayout(t),r=t.sweep&&!this.reducedMotion&&!this.pointer.inside&&this.dragging<0;r&&(this.clock+=n*t.speed),this.pulse+=n;let a=this.pointer.x,o=this.pointer.y;r&&(a=i.left+(i.right-i.left)*(.5-.5*Math.cos(this.clock*.45)),o=i.top+(i.bottom-i.top)*(.45+.1*Math.sin(this.clock*.8)));const l=this.pointer.inside||r||this.dragging>=0;if(l&&!this.placed&&(this.lens.x=a,this.lens.y=o),l){const u=this.pointer.inside?.05:.22;this.lens.x=bn(this.lens.x,a,n,u),this.lens.y=bn(this.lens.y,o,n,u)}this.placed=l,this.presence=bn(this.presence,t.reveal==="area"&&l&&this.dragging<0?1:0,n,.16);let c=!1;this.glyphs.forEach((u,f)=>{if(f===this.dragging){u.offset.x=bn(u.offset.x,this.pointer.x-this.grab.x,n,.03),u.offset.y=bn(u.offset.y,this.pointer.y-this.grab.y,n,.03),u.velocity.x=0,u.velocity.y=0,c=!0;return}const{offset:_,velocity:g}=u;if(Math.abs(_.x)<.05&&Math.abs(_.y)<.05&&Math.hypot(g.x,g.y)<.5){_.x=0,_.y=0,g.x=0,g.y=0;return}g.x+=(-320*_.x-jh*g.x)*n,g.y+=(-320*_.y-jh*g.y)*n,_.x+=g.x*n,_.y+=g.y*n,c=!0});const h=this.dragging>=0?this.dragging:l?this.glyphAt(this.lens.x,this.lens.y):-1;if(h>=0&&t.selection){const u=this.glyphs[h],f=u.box.x1+u.offset.x-6,_=u.box.y1+u.offset.y-6,g=u.box.x2+u.offset.x+6,p=u.box.y2+u.offset.y+6;(this.frame.index<0||this.frame.alpha<.02)&&(this.frame.x1=f,this.frame.y1=_,this.frame.x2=g,this.frame.y2=p);const m=h===this.dragging?.02:.08;this.frame.x1=bn(this.frame.x1,f,n,m),this.frame.y1=bn(this.frame.y1,_,n,m),this.frame.x2=bn(this.frame.x2,g,n,m),this.frame.y2=bn(this.frame.y2,p,n,m),this.frame.index=h}this.frame.alpha=bn(this.frame.alpha,h>=0&&t.selection?1:0,n,.1),this.glyphs.forEach((u,f)=>{const _=t.reveal==="letter"&&f===h&&f!==this.dragging?1:0;u.outline=bn(u.outline,_,n,.09),Math.abs(u.outline-_)>.002?c=!0:u.outline=_}),t.draggable&&(this.container.style.cursor=this.dragging>=0?"grabbing":h>=0&&this.pointer.inside?"grab":""),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.globalCompositeOperation="source-over",this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(const u of this.glyphs){const f=Math.hypot(u.offset.x,u.offset.y);f>1&&(this.ctx.globalAlpha=Math.min(1,f/24)*.55,this.blit(this.ctx,u.dashes,0,0,0,0),this.ctx.globalAlpha=1)}for(const u of this.glyphs)u.outline<.999&&(this.ctx.globalAlpha=1-u.outline,this.blit(this.ctx,u.fill,u.offset.x,u.offset.y,0,0)),u.outline>.001&&(this.ctx.globalAlpha=u.outline,this.blit(this.ctx,u.dashes,u.offset.x,u.offset.y,0,0)),this.ctx.globalAlpha=1;this.presence>.001&&this.drawReveal(t),this.drawFrame(t);const d=c||Math.abs(this.presence-(t.reveal==="area"&&l&&this.dragging<0?1:0))>.002||this.frame.alpha>.01&&this.frame.alpha<.99;(l||d)&&this.visible&&this.alive&&(this.raf=requestAnimationFrame(this.tick))});ti(this,"wake",()=>{this.raf||!this.visible||!this.alive||(this.last=performance.now(),this.raf=requestAnimationFrame(this.tick))});ti(this,"resize",()=>{this.width=Math.max(1,this.container.clientWidth),this.height=Math.max(1,this.container.clientHeight),this.dpr=Math.min(window.devicePixelRatio||1,2),this.canvas.width=Math.round(this.width*this.dpr),this.canvas.height=Math.round(this.height*this.dpr),this.layoutKey="",this.wake()});ti(this,"onMove",e=>{this.locate(e),this.pointer.inside=!0,this.wake()});ti(this,"onLeave",()=>{this.dragging>=0||(this.pointer.inside=!1,this.wake())});ti(this,"onDown",e=>{var n,i;this.locate(e),this.pointer.inside=!0;const t=this.settings;if(t!=null&&t.draggable&&(e.pointerType!=="mouse"||e.button===0)){const r=this.glyphAt(this.pointer.x,this.pointer.y);if(r>=0){this.dragging=r,this.grab.x=this.pointer.x-this.glyphs[r].offset.x,this.grab.y=this.pointer.y-this.glyphs[r].offset.y;try{(i=(n=this.container).setPointerCapture)==null||i.call(n,e.pointerId)}catch{}}}this.wake()});ti(this,"onUp",e=>{var t,n;if(this.dragging>=0){this.dragging=-1;try{(n=(t=this.container).hasPointerCapture)!=null&&n.call(t,e.pointerId)&&this.container.releasePointerCapture(e.pointerId)}catch{}const i=this.container.getBoundingClientRect();this.pointer.inside=e.clientX>=i.left&&e.clientX<=i.right&&e.clientY>=i.top&&e.clientY<=i.bottom}this.wake()});var n;if(!e)throw new Error("TechText requires a container element.");this.container=e,this.container.classList.add("tech-text"),this.settings={text:"React Bits",fontFamily:"",fontWeight:600,fontSize:150,letterSpacing:-.05,color:"#ffffff",accentColor:"#ffffff",reach:200,softness:.7,dashLength:4,dashGap:2,strokeWidth:1.5,lineStyle:"dashed",reveal:"letter",specks:15,selection:!0,labels:!0,draggable:!0,sweep:!0,speed:1,...t},this.canvas=document.createElement("canvas"),this.canvas.className="tech-text-canvas",this.container.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.scratch=document.createElement("canvas"),this.scratchCtx=this.scratch.getContext("2d"),this.reducedMotion=(n=window.matchMedia)==null?void 0:n.call(window,"(prefers-reduced-motion: reduce)").matches,this.width=1,this.height=1,this.dpr=1,this.raf=0,this.last=performance.now(),this.visible=!0,this.alive=!0,this.layoutKey="",this.requestedFont="",this.word=null,this.glyphs=[],this.presence=0,this.clock=0,this.pulse=0,this.placed=!1,this.dragging=-1,this.pointer={x:0,y:0,inside:!1},this.grab={x:0,y:0},this.lens={x:0,y:0},this.frame={x1:0,y1:0,x2:0,y2:0,alpha:0,index:-1},this.initEvents(),this.resize(),this.wake()}family(e){return e.fontFamily||getComputedStyle(this.container).fontFamily||"sans-serif"}fontFor(e,t){return`${e.fontWeight} ${t}px ${this.family(e)}`}setFont(e,t,n){e.font=this.fontFor(t,n),"letterSpacing"in e&&(e.letterSpacing=`${t.letterSpacing*n}px`),e.textAlign="left",e.textBaseline="alphabetic"}sprite(e,t,n,i){const r=Math.ceil(e.strokeWidth*2+4),a=n.box.x1-r,o=n.box.y1-r,l=n.box.x2-n.box.x1+r*2,c=n.box.y2-n.box.y1+r*2,h=document.createElement("canvas");h.width=Math.max(1,Math.ceil(l*this.dpr)),h.height=Math.max(1,Math.ceil(c*this.dpr));const d=h.getContext("2d");return d?(d.setTransform(this.dpr,0,0,this.dpr,-a*this.dpr,-o*this.dpr),this.setFont(d,e,t.size),i?(d.lineJoin="round",d.lineWidth=e.strokeWidth*2,d.lineCap="butt",d.strokeStyle=e.color,e.lineStyle!=="solid"&&d.setLineDash([Math.max(1,e.dashLength),Math.max(1,e.dashGap)]),d.strokeText(n.char,n.x,t.baseline),d.setLineDash([]),d.globalCompositeOperation="destination-out",d.fillStyle="#000000",d.fillText(n.char,n.x,t.baseline),d.globalCompositeOperation="source-over"):(d.fillStyle=e.color,d.fillText(n.char,n.x,t.baseline)),{image:h,left:a,top:o}):{image:h,left:a,top:o}}ensureLayout(e){const t=[e.text,this.family(e),e.fontWeight,e.fontSize,e.letterSpacing,e.color,e.dashLength,e.dashGap,e.strokeWidth,e.lineStyle,this.width,this.height,this.dpr].join("|");if(t===this.layoutKey&&this.word)return this.word;this.layoutKey=t;const n=this.fontFor(e,64);document.fonts&&n!==this.requestedFont&&(this.requestedFont=n,document.fonts.load(n,e.text).then(()=>this.refreshFonts(),()=>this.refreshFonts()));const i=this.scratchCtx;this.setFont(i,e,e.fontSize);let r=i.measureText(e.text);const a=8,o=Math.min(1,(this.width-a*2)/Math.max(r.actualBoundingBoxLeft+r.actualBoundingBoxRight,1),this.height*.9/Math.max(r.actualBoundingBoxAscent+r.actualBoundingBoxDescent,1)),l=e.fontSize*o;this.setFont(i,e,l),r=i.measureText(e.text),r.actualBoundingBoxLeft+r.actualBoundingBoxRight;const c=r.actualBoundingBoxAscent+r.actualBoundingBoxDescent,h=r.actualBoundingBoxLeft+a,d=(this.height-c)/2+r.actualBoundingBoxAscent,u={size:l,baseline:d,left:h-r.actualBoundingBoxLeft,right:h+r.actualBoundingBoxRight,top:d-r.actualBoundingBoxAscent,bottom:d+r.actualBoundingBoxDescent};this.word=u;const f=Array.from(e.text),_=this.glyphs;this.glyphs=[];let g="";return f.forEach((p,m)=>{g+=p;const v=i.measureText(p),x=h+i.measureText(g).width-v.width;if(!p.trim())return;const y={char:p,x,box:{x1:x-v.actualBoundingBoxLeft,y1:d-v.actualBoundingBoxAscent,x2:x+v.actualBoundingBoxRight,y2:d+v.actualBoundingBoxDescent}},T=_[this.glyphs.length];this.glyphs.push({...y,offset:(T==null?void 0:T.char)===p?T.offset:{x:0,y:0},velocity:{x:0,y:0},outline:0,index:m,fill:this.sprite(e,u,y,!1),dashes:this.sprite(e,u,y,!0)})}),this.dragging=-1,this.frame.index=-1,u}refreshFonts(){this.layoutKey="",this.wake()}glyphAt(e,t){if(!this.word||t<this.word.top-24||t>this.word.bottom+24)return-1;let n=-1,i=1/0;return this.glyphs.forEach((r,a)=>{const o=r.box.x1+r.offset.x,l=r.box.x2+r.offset.x,c=e<o?o-e:e>l?e-l:0;c<i&&(i=c,n=a)}),i<28?n:-1}falloff(e,t,n,i,r,a){const o=Math.min(1,Math.max(0,1-a)),l=e.createRadialGradient(t,n,0,t,n,i);if(l.addColorStop(0,`rgba(0, 0, 0, ${r})`),o>.995)return l.addColorStop(.995,`rgba(0, 0, 0, ${r})`),l.addColorStop(1,"rgba(0, 0, 0, 0)"),l;for(let c=0;c<=$h;c++){const h=c/$h,d=h*h*(3-2*h);l.addColorStop(o+(1-o)*h,`rgba(0, 0, 0, ${r*(1-d)})`)}return l}blit(e,t,n,i,r,a){e.drawImage(t.image,Math.round((t.left+n)*this.dpr-r),Math.round((t.top+i)*this.dpr-a))}drawReveal(e){const t=e.reach*this.dpr,n=this.lens.x*this.dpr,i=this.lens.y*this.dpr;this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle=this.falloff(this.ctx,n,i,t,this.presence,e.softness),this.ctx.fillRect(n-t,i-t,t*2,t*2),this.ctx.globalCompositeOperation="source-over";const r=Math.max(0,Math.floor(n-t)),a=Math.max(0,Math.floor(i-t)),o=Math.min(this.canvas.width,Math.ceil(n+t)),l=Math.min(this.canvas.height,Math.ceil(i+t));if(o<=r||l<=a)return;const c=o-r,h=l-a;(this.scratch.width<c||this.scratch.height<h)&&(this.scratch.width=Math.max(this.scratch.width,c),this.scratch.height=Math.max(this.scratch.height,h)),this.scratchCtx.setTransform(1,0,0,1,0,0),this.scratchCtx.globalCompositeOperation="source-over",this.scratchCtx.clearRect(0,0,c,h);for(const d of this.glyphs)this.blit(this.scratchCtx,d.dashes,d.offset.x,d.offset.y,r,a);this.scratchCtx.globalCompositeOperation="destination-in",this.scratchCtx.fillStyle=this.falloff(this.scratchCtx,n-r,i-a,t,1,e.softness),this.scratchCtx.fillRect(0,0,c,h),this.scratchCtx.globalCompositeOperation="source-over",this.ctx.globalAlpha=this.presence,this.ctx.drawImage(this.scratch,0,0,c,h,r,a,c,h),this.ctx.globalAlpha=1}crisp(e){return(Math.round(e*this.dpr)+.5)/this.dpr}perimeterPoint(e,t,n){let i=(e%(2*(t+n))+2*(t+n))%(2*(t+n));return i<t?[this.frame.x1+i,this.frame.y1,0,-1]:(i-=t,i<n?[this.frame.x2,this.frame.y1+i,1,0]:(i-=n,i<t?[this.frame.x2-i,this.frame.y2,0,1]:(i-=t,[this.frame.x1,this.frame.y2-i,-1,0])))}drawSpecks(e,t){const n=this.frame.x2-this.frame.x1,i=this.frame.y2-this.frame.y1;if(n<2||i<2)return;const r=2*(n+i),a=this.frame.index+1,o=3;for(let l=0;l<e.specks;l++){const c=.5+ms(a,l,11)*1.2,h=this.pulse/c+ms(a,l,17),d=Math.floor(h),u=h-d;if(u>.7)continue;const[f,_,g,p]=this.perimeterPoint(ms(a,l,d)*r,n,i),m=ms(a,l,d,2),v=m<.46?2:m<.7?3:m<.84?5:m<.94?8:11,x=v>=8,y=(x?9:4)+Math.floor(ms(a,l,d,1)*5)*o,T=this.frame.x1+Math.round((f+g*y-this.frame.x1)/o)*o,E=this.frame.y1+Math.round((_+p*y-this.frame.y1)/o)*o,b=ms(a,l,d,3),P=u<.06||u>.32&&u<.36?.35:1,M=t*(x?.3+.4*b:.3+.6*b)*P,A=Math.round(T-v/2),U=Math.round(E-v/2);b<.26||x&&b<.78?(this.ctx.strokeStyle=Wn(e.accentColor,M),this.ctx.strokeRect(A+.5,U+.5,v,v),x&&b>.5&&(this.ctx.fillStyle=Wn(e.accentColor,M),this.ctx.fillRect(Math.round(T)-1,Math.round(E)-1,2,2))):(this.ctx.fillStyle=Wn(e.accentColor,M),this.ctx.fillRect(A,U,v,v))}for(let l=0;l<2;l++){const c=(this.pulse*.42*e.speed+l*.5)*r;for(let h=0;h<4;h++){const[d,u]=this.perimeterPoint(c-h*6,n,i),f=h===0?3:2;this.ctx.fillStyle=Wn(e.accentColor,t*[.95,.55,.32,.16][h]),this.ctx.fillRect(Math.round(d-f/2),Math.round(u-f/2),f,f)}}}drawFrame(e){if(!(e!=null&&e.selection))return;const t=this.glyphs[this.frame.index];if(!t||this.frame.alpha<.01)return;const n=this.frame.alpha,i=this.crisp(this.frame.x1),r=this.crisp(this.frame.y1),a=this.crisp(this.frame.x2),o=this.crisp(this.frame.y2);this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0);const l=Math.hypot(t.offset.x,t.offset.y);if(l>1){const d=(t.box.x1+t.box.x2)/2,u=(t.box.y1+t.box.y2)/2;this.ctx.beginPath(),this.ctx.moveTo(d,u),this.ctx.lineTo(d+t.offset.x,u+t.offset.y),this.ctx.setLineDash([3,4]),this.ctx.lineWidth=1,this.ctx.strokeStyle=Wn(e.accentColor,.45*n),this.ctx.stroke(),this.ctx.setLineDash([]),this.ctx.beginPath(),this.ctx.rect(Math.round(d)-2,Math.round(u)-2,4,4),this.ctx.fillStyle=Wn(e.accentColor,.7*n),this.ctx.fill()}this.ctx.beginPath(),this.ctx.rect(i,r,a-i,o-r),this.ctx.lineWidth=1,this.ctx.strokeStyle=Wn(e.accentColor,.5*n),this.ctx.stroke(),this.ctx.beginPath();for(const[d,u]of[[i,r],[a,r],[a,o],[i,o]])this.ctx.rect(Math.round(d)-2,Math.round(u)-2,5,5);if(this.ctx.fillStyle=Wn(e.accentColor,.95*n),this.ctx.fill(),e.specks>0&&(this.ctx.lineWidth=1,this.drawSpecks(e,n)),!e.labels)return;this.ctx.font=ry,this.ctx.textAlign="left",this.ctx.textBaseline="bottom",this.ctx.fillStyle=Wn(e.accentColor,.62*n);const c=l>1?`${Kh(Math.round(t.offset.x))}, ${Kh(Math.round(-t.offset.y))}`:`${t.char}  ${Math.round(t.box.x2-t.box.x1)} × ${Math.round(t.box.y2-t.box.y1)}`,h=Math.max(9,Math.round(this.frame.y1)-4);this.ctx.fillText(c,Math.round(this.frame.x1),h)}locate(e){const t=this.container.getBoundingClientRect();this.pointer.x=e.clientX-t.left,this.pointer.y=e.clientY-t.top}initEvents(){this.container.addEventListener("pointermove",this.onMove,{passive:!0}),this.container.addEventListener("pointerenter",this.onMove,{passive:!0}),this.container.addEventListener("pointerdown",this.onDown,{passive:!0}),this.container.addEventListener("pointerup",this.onUp,{passive:!0}),this.container.addEventListener("pointercancel",this.onUp,{passive:!0}),this.container.addEventListener("pointerleave",this.onLeave,{passive:!0}),this.resizeObserver=new ResizeObserver(this.resize),this.resizeObserver.observe(this.container),this.intersectionObserver=new IntersectionObserver(([e])=>{this.visible=e.isIntersecting,this.wake()}),this.intersectionObserver.observe(this.container),document.fonts&&document.fonts.ready.then(()=>this.refreshFonts(),()=>this.refreshFonts())}update(e={}){this.settings={...this.settings,...e},this.layoutKey="",this.wake()}destroy(){var e,t;this.alive=!1,this.raf&&cancelAnimationFrame(this.raf),(e=this.resizeObserver)==null||e.disconnect(),(t=this.intersectionObserver)==null||t.disconnect(),this.container.removeEventListener("pointermove",this.onMove),this.container.removeEventListener("pointerenter",this.onMove),this.container.removeEventListener("pointerdown",this.onDown),this.container.removeEventListener("pointerup",this.onUp),this.container.removeEventListener("pointercancel",this.onUp),this.container.removeEventListener("pointerleave",this.onLeave),this.canvas.remove()}}const Zh={arrow:{3:{cells:[1,2,3,0,1,2,1,2,3],loop:7.2,scale:1}},dots:{3:{cells:[0,1,2,0,1,2,0,1,2],loop:3,scale:2.4}},ripple:{3:{cells:[2,1,2,1,0,1,2,1,2],loop:4.8,scale:1.5}},spiral:{3:{cells:[0,1,2,7,8,3,6,5,4],loop:9,scale:1.2,lit:.35}},orbit:{3:{cells:[0,1,2,7,null,3,6,5,4],loop:8,scale:1.2},4:{cells:[0,1,2,3,11,null,null,4,10,null,null,5,9,8,7,6],loop:6,scale:1.2,lit:.45}},snake:{3:{cells:[0,1,2,5,4,3,6,7,8],loop:9,scale:1,lit:.35},4:{cells:[0,1,2,3,7,6,5,4,8,9,10,11,15,14,13,12],loop:16,scale:1,lit:.25}},sweep:{4:{cells:[0,1,2,3,1,2,3,4,2,3,4,5,3,4,5,6],loop:5,scale:1,lit:.45}},spin:{4:{cells:[0,0,1,1,0,0,1,1,3,3,2,2,3,3,2,2],loop:4,scale:1.6,lit:.35}},rain:{4:{cells:[0,2,1,3,1,3,2,4,2,4,3,5,3,5,4,6],loop:4,scale:1.2,lit:.35}},pulse:{4:{cells:[2,1,1,2,1,0,0,1,1,0,0,1,2,1,1,2],loop:2.4,scale:2.5,lit:.45}}},ly={3:"orbit",4:"sweep"},cy={3:{done:[2,3,5,7],error:[0,2,4,6,8]},4:{done:[7,8,10,13],error:[0,3,5,6,9,10,12,15]}},hy=(s,e)=>{if(typeof s=="string"){const i=Zh[s];return i&&i[e]||Zh[ly[e]][e]}const t=Array.from({length:e*e},(i,r)=>s.cells[r]??null),n=Math.max(0,...t.filter(i=>i!=null));return{cells:t,loop:s.loop??n+4.2,scale:s.scale??1,lit:s.lit??.62}},uy=s=>s<600?`${(s/10).toFixed(1)}s`:`${Math.floor(s/600)}m ${(s%600/10).toFixed(1)}s`;function dy(s,e={}){const{label:t="Loading",doneLabel:n="Ready in",errorLabel:i="Failed after",pattern:r="orbit",grid:a=3,shape:o="round",color:l="#ffffff",doneColor:c="#22c55e",errorColor:h="#ef4444",cellSize:d=7,gap:u=3,fontSize:f=13,step:_=90,idleOpacity:g=.18,glow:p=!0,glowColor:m="rgba(255, 51, 102, 0.45)",showTimer:v=!0}=e,x=a===4?4:3,y=hy(r,x),T=cy[x],E=_*y.scale,b=Math.round(y.loop*E),P=document.createElement("span");P.setAttribute("role","status"),P.className="lattice-loader",P.setAttribute("data-status","working"),P.setAttribute("data-shape",o),p&&P.setAttribute("data-glow",""),P.style.setProperty("--ll-n",x),P.style.setProperty("--ll-cell",`${d}px`),P.style.setProperty("--ll-gap",`${u}px`),P.style.setProperty("--ll-font",`${f}px`),P.style.setProperty("--ll-color",l),P.style.setProperty("--ll-mark",c),P.style.setProperty("--ll-idle",g),P.style.setProperty("--ll-glow",m||l),P.style.setProperty("--ll-mark-glow",m||c),P.style.setProperty("--ll-cycle",`${b}ms`);const M=document.createElement("span");M.className="lattice-loader__grid",M.setAttribute("aria-hidden","true");const A=document.createElement("span");A.className="lattice-loader__layer lattice-loader__run",y.cells.forEach(Q=>{const H=document.createElement("span");H.className="lattice-loader__cell",Q==null?H.setAttribute("data-hole",""):(y.lit&&y.lit!==.62&&H.setAttribute("data-lit",Math.round(y.lit*100)),H.style.animationDelay=`${Math.round(Q*E)}ms`),A.appendChild(H)});const U=document.createElement("span");U.className="lattice-loader__layer lattice-loader__mark",y.cells.forEach((Q,H)=>{const K=document.createElement("span");K.className="lattice-loader__cell",T.done.includes(H)&&K.setAttribute("data-on",""),U.appendChild(K)}),M.appendChild(A),M.appendChild(U),P.appendChild(M);const z=document.createElement("span");z.className="lattice-loader__label",z.setAttribute("aria-hidden","true");const q=document.createElement("span");q.className="lattice-loader__text",q.setAttribute("data-active",""),q.textContent=t;const C=document.createElement("span");C.className="lattice-loader__text",C.textContent=n;const N=document.createElement("span");N.className="lattice-loader__text",N.textContent=i,z.appendChild(q),z.appendChild(C),z.appendChild(N),P.appendChild(z);let O=null;v&&(O=document.createElement("span"),O.className="lattice-loader__timer",O.setAttribute("aria-hidden","true"),O.textContent="0.0s",P.appendChild(O)),s.innerHTML="",s.appendChild(P);let G=null;const V=performance.now();let B=0;return G=setInterval(()=>{B=Math.floor((performance.now()-V)/100),O&&(O.textContent=uy(B))},100),{root:P,setStatus:(Q="done")=>{G&&(clearInterval(G),G=null),P.setAttribute("data-status",Q),P.style.setProperty("--ll-mark",Q==="error"?h:c),U.querySelectorAll(".lattice-loader__cell").forEach((K,ae)=>{(Q==="error"?T.error:T.done).includes(ae)?K.setAttribute("data-on",""):K.removeAttribute("data-on")}),q.removeAttribute("data-active"),C.removeAttribute("data-active"),N.removeAttribute("data-active"),Q==="done"?C.setAttribute("data-active",""):Q==="error"?N.setAttribute("data-active",""):q.setAttribute("data-active","")},destroy:()=>{G&&(clearInterval(G),G=null)}}}function fy(s={}){const{onComplete:e}=s,t=document.getElementById("cinematic-preloader"),n=document.getElementById("cinematic-video"),i=document.getElementById("btn-skip-intro"),r=document.getElementById("btn-mobile-enter");if(!t)return typeof e=="function"&&e(),{dismiss:()=>{}};let a=!1,o=!1,l=null;const c=window.innerWidth<=768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),h=(u=!1)=>{a||(a=!0,l&&(clearTimeout(l),l=null),t.classList.add("fade-out"),typeof e=="function"&&e(),u&&He.playClick(),setTimeout(()=>{if(t.style.display="none",n)try{n.pause()}catch{}},800))};if(window.addEventListener("keydown",u=>{!a&&t.style.display!=="none"&&(u.key==="Escape"||u.code==="Space")&&(u.preventDefault(),h(!0))}),i&&i.addEventListener("click",u=>{u.stopPropagation(),h(!0)}),r&&r.addEventListener("click",u=>{u.stopPropagation(),h(!0)}),c){if(n)try{n.pause(),n.currentTime=0}catch{}t.style.display="flex";const u=document.getElementById("mobile-lattice-target");let f=null;u&&(f=dy(u,{label:"Thinking",doneLabel:"Done in",errorLabel:"Failed after",pattern:"orbit",grid:3,shape:"round",color:"#ffffff",doneColor:"#22c55e",errorColor:"#ef4444",cellSize:6,gap:2,fontSize:14,step:90,idleOpacity:.15,glow:!1,glowColor:"",showTimer:!0})),setTimeout(()=>{f&&!a&&f.setStatus("done")},1400),l=setTimeout(()=>{f&&f.destroy(),h(!1)},1850);const _=document.getElementById("mobile-normal-loader");return _&&_.addEventListener("click",()=>{f&&f.destroy(),h(!0)},{once:!0}),{dismiss:h}}if(!n)return h(!1),{dismiss:h};n.addEventListener("timeupdate",()=>{!n.duration||a||n.currentTime>=13.2&&!o&&(o=!0,He.init(),He.resume(),He.playConvergenceChord())}),n.addEventListener("ended",()=>{h(!1)}),n.muted=!1,n.volume=1,He.isMuted=!1;const d=()=>{const u=n.play();u!==void 0&&u.catch(f=>{console.warn("Desktop unmuted autoplay blocked by policy; setting up interaction listener:",f),n.muted=!0,n.play().catch(()=>{});const _=()=>{n.muted=!1,n.volume=1,He.init(),He.resume(),window.removeEventListener("pointerdown",_),window.removeEventListener("keydown",_),window.removeEventListener("touchstart",_),window.removeEventListener("click",_)};window.addEventListener("pointerdown",_,{once:!0,passive:!0}),window.addEventListener("keydown",_,{once:!0}),window.addEventListener("touchstart",_,{once:!0,passive:!0}),window.addEventListener("click",_,{once:!0})})};return t.style.display="flex",d(),l=setTimeout(()=>{!a&&n.currentTime===0&&(console.warn("Desktop video loader timeout reached; proceeding to showcase."),h(!1))},4200),{dismiss:h}}function rr(s){let e=s[0],t=s[1],n=s[2];return Math.sqrt(e*e+t*t+n*n)}function al(s,e){return s[0]=e[0],s[1]=e[1],s[2]=e[2],s}function py(s,e,t,n){return s[0]=e,s[1]=t,s[2]=n,s}function Qh(s,e,t){return s[0]=e[0]+t[0],s[1]=e[1]+t[1],s[2]=e[2]+t[2],s}function Jh(s,e,t){return s[0]=e[0]-t[0],s[1]=e[1]-t[1],s[2]=e[2]-t[2],s}function my(s,e,t){return s[0]=e[0]*t[0],s[1]=e[1]*t[1],s[2]=e[2]*t[2],s}function gy(s,e,t){return s[0]=e[0]/t[0],s[1]=e[1]/t[1],s[2]=e[2]/t[2],s}function Po(s,e,t){return s[0]=e[0]*t,s[1]=e[1]*t,s[2]=e[2]*t,s}function _y(s,e){let t=e[0]-s[0],n=e[1]-s[1],i=e[2]-s[2];return Math.sqrt(t*t+n*n+i*i)}function xy(s,e){let t=e[0]-s[0],n=e[1]-s[1],i=e[2]-s[2];return t*t+n*n+i*i}function eu(s){let e=s[0],t=s[1],n=s[2];return e*e+t*t+n*n}function vy(s,e){return s[0]=-e[0],s[1]=-e[1],s[2]=-e[2],s}function yy(s,e){return s[0]=1/e[0],s[1]=1/e[1],s[2]=1/e[2],s}function ol(s,e){let t=e[0],n=e[1],i=e[2],r=t*t+n*n+i*i;return r>0&&(r=1/Math.sqrt(r)),s[0]=e[0]*r,s[1]=e[1]*r,s[2]=e[2]*r,s}function Kd(s,e){return s[0]*e[0]+s[1]*e[1]+s[2]*e[2]}function tu(s,e,t){let n=e[0],i=e[1],r=e[2],a=t[0],o=t[1],l=t[2];return s[0]=i*l-r*o,s[1]=r*a-n*l,s[2]=n*o-i*a,s}function My(s,e,t,n){let i=e[0],r=e[1],a=e[2];return s[0]=i+n*(t[0]-i),s[1]=r+n*(t[1]-r),s[2]=a+n*(t[2]-a),s}function Sy(s,e,t,n,i){const r=Math.exp(-n*i);let a=e[0],o=e[1],l=e[2];return s[0]=t[0]+(a-t[0])*r,s[1]=t[1]+(o-t[1])*r,s[2]=t[2]+(l-t[2])*r,s}function Ey(s,e,t){let n=e[0],i=e[1],r=e[2],a=t[3]*n+t[7]*i+t[11]*r+t[15];return a=a||1,s[0]=(t[0]*n+t[4]*i+t[8]*r+t[12])/a,s[1]=(t[1]*n+t[5]*i+t[9]*r+t[13])/a,s[2]=(t[2]*n+t[6]*i+t[10]*r+t[14])/a,s}function by(s,e,t){let n=e[0],i=e[1],r=e[2],a=t[3]*n+t[7]*i+t[11]*r+t[15];return a=a||1,s[0]=(t[0]*n+t[4]*i+t[8]*r)/a,s[1]=(t[1]*n+t[5]*i+t[9]*r)/a,s[2]=(t[2]*n+t[6]*i+t[10]*r)/a,s}function Ty(s,e,t){let n=e[0],i=e[1],r=e[2];return s[0]=n*t[0]+i*t[3]+r*t[6],s[1]=n*t[1]+i*t[4]+r*t[7],s[2]=n*t[2]+i*t[5]+r*t[8],s}function wy(s,e,t){let n=e[0],i=e[1],r=e[2],a=t[0],o=t[1],l=t[2],c=t[3],h=o*r-l*i,d=l*n-a*r,u=a*i-o*n,f=o*u-l*d,_=l*h-a*u,g=a*d-o*h,p=c*2;return h*=p,d*=p,u*=p,f*=2,_*=2,g*=2,s[0]=n+h+f,s[1]=i+d+_,s[2]=r+u+g,s}const Ay=function(){const s=[0,0,0],e=[0,0,0];return function(t,n){al(s,t),al(e,n),ol(s,s),ol(e,e);let i=Kd(s,e);return i>1?0:i<-1?Math.PI:Math.acos(i)}}();function Cy(s,e){return s[0]===e[0]&&s[1]===e[1]&&s[2]===e[2]}class Rn extends Array{constructor(e=0,t=e,n=e){return super(e,t,n),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,t=e,n=e){return e.length?this.copy(e):(py(this,e,t,n),this)}copy(e){return al(this,e),this}add(e,t){return t?Qh(this,e,t):Qh(this,this,e),this}sub(e,t){return t?Jh(this,e,t):Jh(this,this,e),this}multiply(e){return e.length?my(this,this,e):Po(this,this,e),this}divide(e){return e.length?gy(this,this,e):Po(this,this,1/e),this}inverse(e=this){return yy(this,e),this}len(){return rr(this)}distance(e){return e?_y(this,e):rr(this)}squaredLen(){return eu(this)}squaredDistance(e){return e?xy(this,e):eu(this)}negate(e=this){return vy(this,e),this}cross(e,t){return t?tu(this,e,t):tu(this,this,e),this}scale(e){return Po(this,this,e),this}normalize(){return ol(this,this),this}dot(e){return Kd(this,e)}equals(e){return Cy(this,e)}applyMatrix3(e){return Ty(this,this,e),this}applyMatrix4(e){return Ey(this,this,e),this}scaleRotateMatrix4(e){return by(this,this,e),this}applyQuaternion(e){return wy(this,this,e),this}angle(e){return Ay(this,e)}lerp(e,t){return My(this,this,e,t),this}smoothLerp(e,t,n){return Sy(this,this,e,t,n),this}clone(){return new Rn(this[0],this[1],this[2])}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}transformDirection(e){const t=this[0],n=this[1],i=this[2];return this[0]=e[0]*t+e[4]*n+e[8]*i,this[1]=e[1]*t+e[5]*n+e[9]*i,this[2]=e[2]*t+e[6]*n+e[10]*i,this.normalize()}}const nu=new Rn;let Ry=1,Py=1,iu=!1;class Ly{constructor(e,t={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=t,this.id=Ry++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let n in t)this.addAttribute(n,t[n])}addAttribute(e,t){if(this.attributes[e]=t,t.id=Py++,t.size=t.size||1,t.type=t.type||(t.data.constructor===Float32Array?this.gl.FLOAT:t.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),t.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,t.normalized=t.normalized||!1,t.stride=t.stride||0,t.offset=t.offset||0,t.count=t.count||(t.stride?t.data.byteLength/t.stride:t.data.length/t.size),t.divisor=t.instanced||0,t.needsUpdate=!1,t.usage=t.usage||this.gl.STATIC_DRAW,t.buffer||this.updateAttribute(t),t.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==t.count*t.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,t.count*t.divisor);this.instancedCount=t.count*t.divisor}else e==="index"?this.drawRange.count=t.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,t.count))}updateAttribute(e){const t=!e.buffer;t&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),t?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((t,{name:n,type:i})=>{if(!this.attributes[n]){console.warn(`active attribute ${n} not being supplied`);return}const r=this.attributes[n];this.gl.bindBuffer(r.target,r.buffer),this.glState.boundBuffer=r.buffer;let a=1;i===35674&&(a=2),i===35675&&(a=3),i===35676&&(a=4);const o=r.size/a,l=a===1?0:a*a*4,c=a===1?0:a*4;for(let h=0;h<a;h++)this.gl.vertexAttribPointer(t+h,o,r.type,r.normalized,r.stride+l,r.offset+h*c),this.gl.enableVertexAttribArray(t+h),this.gl.renderer.vertexAttribDivisor(t+h,r.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:t=this.gl.TRIANGLES}){var i;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((r,{name:a})=>{const o=this.attributes[a];o.needsUpdate&&this.updateAttribute(o)});let n=2;((i=this.attributes.index)==null?void 0:i.type)===this.gl.UNSIGNED_INT&&(n=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*n,this.instancedCount):this.gl.renderer.drawArraysInstanced(t,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*n):this.gl.drawArrays(t,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!iu)return console.warn("No position buffer data found to compute bounds"),iu=!0}computeBoundingBox(e){e||(e=this.getPosition());const t=e.data,n=e.size;this.bounds||(this.bounds={min:new Rn,max:new Rn,center:new Rn,scale:new Rn,radius:1/0});const i=this.bounds.min,r=this.bounds.max,a=this.bounds.center,o=this.bounds.scale;i.set(1/0),r.set(-1/0);for(let l=0,c=t.length;l<c;l+=n){const h=t[l],d=t[l+1],u=t[l+2];i.x=Math.min(h,i.x),i.y=Math.min(d,i.y),i.z=Math.min(u,i.z),r.x=Math.max(h,r.x),r.y=Math.max(d,r.y),r.z=Math.max(u,r.z)}o.sub(r,i),a.add(i,r).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const t=e.data,n=e.size;this.bounds||this.computeBoundingBox(e);let i=0;for(let r=0,a=t.length;r<a;r+=n)nu.fromArray(t,r),i=Math.max(i,this.bounds.center.squaredDistance(nu));this.bounds.radius=Math.sqrt(i)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let Iy=1;const su={};class Dy{constructor(e,{vertex:t,fragment:n,uniforms:i={},transparent:r=!1,cullFace:a=e.BACK,frontFace:o=e.CCW,depthTest:l=!0,depthWrite:c=!0,depthFunc:h=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=i,this.id=Iy++,t||console.warn("vertex shader not supplied"),n||console.warn("fragment shader not supplied"),this.transparent=r,this.cullFace=a,this.frontFace=o,this.depthTest=l,this.depthWrite=c,this.depthFunc=h,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:t,fragment:n})}setShaders({vertex:e,fragment:t}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${ru(e)}`)),t&&(this.gl.shaderSource(this.fragmentShader,t),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${ru(t)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let n=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<n;a++){let o=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(o,this.gl.getUniformLocation(this.program,o.name));const l=o.name.match(/(\w+)/g);o.uniformName=l[0],o.nameComponents=l.slice(1)}this.attributeLocations=new Map;const i=[],r=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const o=this.gl.getActiveAttrib(this.program,a),l=this.gl.getAttribLocation(this.program,o.name);l!==-1&&(i[l]=o.name,this.attributeLocations.set(o,l))}this.attributeOrder=i.join("")}setBlendFunc(e,t,n,i){this.blendFunc.src=e,this.blendFunc.dst=t,this.blendFunc.srcAlpha=n,this.blendFunc.dstAlpha=i,e&&(this.transparent=!0)}setBlendEquation(e,t){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=t}setStencilFunc(e,t,n){this.stencilRef=t,this.stencilFunc.func=e,this.stencilFunc.ref=t,this.stencilFunc.mask=n}setStencilOp(e,t,n){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=t,this.stencilOp.depthPass=n}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let t=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((i,r)=>{let a=this.uniforms[r.uniformName];for(const o of r.nameComponents){if(!a)break;if(o in a)a=a[o];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return au(`Active uniform ${r.name} has not been supplied`);if(a&&a.value===void 0)return au(`${r.name} uniform is missing a value parameter`);if(a.value.texture)return t=t+1,a.value.update(t),Lo(this.gl,r.type,i,t);if(a.value.length&&a.value[0].texture){const o=[];return a.value.forEach(l=>{t=t+1,l.update(t),o.push(t)}),Lo(this.gl,r.type,i,o)}Lo(this.gl,r.type,i,a.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function Lo(s,e,t,n){n=n.length?Uy(n):n;const i=s.renderer.state.uniformLocations.get(t);if(n.length)if(i===void 0||i.length!==n.length)s.renderer.state.uniformLocations.set(t,n.slice(0));else{if(Ny(i,n))return;i.set?i.set(n):Fy(i,n),s.renderer.state.uniformLocations.set(t,i)}else{if(i===n)return;s.renderer.state.uniformLocations.set(t,n)}switch(e){case 5126:return n.length?s.uniform1fv(t,n):s.uniform1f(t,n);case 35664:return s.uniform2fv(t,n);case 35665:return s.uniform3fv(t,n);case 35666:return s.uniform4fv(t,n);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return n.length?s.uniform1iv(t,n):s.uniform1i(t,n);case 35671:case 35667:return s.uniform2iv(t,n);case 35672:case 35668:return s.uniform3iv(t,n);case 35673:case 35669:return s.uniform4iv(t,n);case 35674:return s.uniformMatrix2fv(t,!1,n);case 35675:return s.uniformMatrix3fv(t,!1,n);case 35676:return s.uniformMatrix4fv(t,!1,n)}}function ru(s){let e=s.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Uy(s){const e=s.length,t=s[0].length;if(t===void 0)return s;const n=e*t;let i=su[n];i||(su[n]=i=new Float32Array(n));for(let r=0;r<e;r++)i.set(s[r],r*t);return i}function Ny(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Fy(s,e){for(let t=0,n=s.length;t<n;t++)s[t]=e[t]}let Io=0;function au(s){Io>100||(console.warn(s),Io++,Io>100&&console.warn("More than 100 program warnings - stopping logs."))}const Do=new Rn;let Oy=1;class By{constructor({canvas:e=document.createElement("canvas"),width:t=300,height:n=150,dpr:i=1,alpha:r=!1,depth:a=!0,stencil:o=!1,antialias:l=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:h=!1,powerPreference:d="default",autoClear:u=!0,webgl:f=2}={}){const _={alpha:r,depth:a,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d};this.dpr=i,this.alpha=r,this.color=!0,this.depth=a,this.stencil=o,this.premultipliedAlpha=c,this.autoClear=u,this.id=Oy++,f===2&&(this.gl=e.getContext("webgl2",_)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",_)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(t,n),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,t){this.width=e,this.height=t,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=t*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:t+"px"})}setViewport(e,t,n=0,i=0){this.state.viewport.width===e&&this.state.viewport.height===t||(this.state.viewport.width=e,this.state.viewport.height=t,this.state.viewport.x=n,this.state.viewport.y=i,this.gl.viewport(n,i,e,t))}setScissor(e,t,n=0,i=0){this.gl.scissor(n,i,e,t)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,t,n,i){this.state.blendFunc.src===e&&this.state.blendFunc.dst===t&&this.state.blendFunc.srcAlpha===n&&this.state.blendFunc.dstAlpha===i||(this.state.blendFunc.src=e,this.state.blendFunc.dst=t,this.state.blendFunc.srcAlpha=n,this.state.blendFunc.dstAlpha=i,n!==void 0?this.gl.blendFuncSeparate(e,t,n,i):this.gl.blendFunc(e,t))}setBlendEquation(e,t){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===t)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=t,t!==void 0?this.gl.blendEquationSeparate(e,t):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,t,n){this.state.stencilFunc===e&&this.state.stencilRef===t&&this.state.stencilFuncMask===n||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=t||0,this.state.stencilFuncMask=n||0,this.gl.stencilFunc(e||this.gl.ALWAYS,t||0,n||0))}setStencilOp(e,t,n){this.state.stencilFail===e&&this.state.stencilDepthFail===t&&this.state.stencilDepthPass===n||(this.state.stencilFail=e,this.state.stencilDepthFail=t,this.state.stencilDepthPass=n,this.gl.stencilOp(e,t,n))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:t=null}={}){this.state.framebuffer!==t&&(this.state.framebuffer=t,this.gl.bindFramebuffer(e,t))}getExtension(e,t,n){return t&&this.gl[t]?this.gl[t].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),t?this.extensions[e]?this.extensions[e][n].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:e.zDepth!==t.zDepth?e.zDepth-t.zDepth:t.id-e.id}sortTransparent(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.zDepth!==t.zDepth?t.zDepth-e.zDepth:t.id-e.id}sortUI(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:t.id-e.id}getRenderList({scene:e,camera:t,frustumCull:n,sort:i}){let r=[];if(t&&n&&t.updateFrustum(),e.traverse(a=>{if(!a.visible)return!0;a.draw&&(n&&a.frustumCulled&&t&&!t.frustumIntersectsMesh(a)||r.push(a))}),i){const a=[],o=[],l=[];r.forEach(c=>{c.program.transparent?c.program.depthTest?o.push(c):l.push(c):a.push(c),c.zDepth=0,!(c.renderOrder!==0||!c.program.depthTest||!t)&&(c.worldMatrix.getTranslation(Do),Do.applyMatrix4(t.projectionViewMatrix),c.zDepth=Do.z)}),a.sort(this.sortOpaque),o.sort(this.sortTransparent),l.sort(this.sortUI),r=a.concat(o,l)}return r}render({scene:e,camera:t,target:n=null,update:i=!0,sort:r=!0,frustumCull:a=!0,clear:o}){n===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(n),this.setViewport(n.width,n.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!n||n.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!n||n.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),i&&e.updateMatrixWorld(),t&&t.updateMatrixWorld(),this.getRenderList({scene:e,camera:t,frustumCull:a,sort:r}).forEach(c=>{c.draw({camera:t})})}}function zy(s,e){return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=e[3],s}function ky(s,e,t,n,i){return s[0]=e,s[1]=t,s[2]=n,s[3]=i,s}function Gy(s,e){let t=e[0],n=e[1],i=e[2],r=e[3],a=t*t+n*n+i*i+r*r;return a>0&&(a=1/Math.sqrt(a)),s[0]=t*a,s[1]=n*a,s[2]=i*a,s[3]=r*a,s}function Vy(s,e){return s[0]*e[0]+s[1]*e[1]+s[2]*e[2]+s[3]*e[3]}function Hy(s){return s[0]=0,s[1]=0,s[2]=0,s[3]=1,s}function Wy(s,e,t){t=t*.5;let n=Math.sin(t);return s[0]=n*e[0],s[1]=n*e[1],s[2]=n*e[2],s[3]=Math.cos(t),s}function ou(s,e,t){let n=e[0],i=e[1],r=e[2],a=e[3],o=t[0],l=t[1],c=t[2],h=t[3];return s[0]=n*h+a*o+i*c-r*l,s[1]=i*h+a*l+r*o-n*c,s[2]=r*h+a*c+n*l-i*o,s[3]=a*h-n*o-i*l-r*c,s}function Xy(s,e,t){t*=.5;let n=e[0],i=e[1],r=e[2],a=e[3],o=Math.sin(t),l=Math.cos(t);return s[0]=n*l+a*o,s[1]=i*l+r*o,s[2]=r*l-i*o,s[3]=a*l-n*o,s}function qy(s,e,t){t*=.5;let n=e[0],i=e[1],r=e[2],a=e[3],o=Math.sin(t),l=Math.cos(t);return s[0]=n*l-r*o,s[1]=i*l+a*o,s[2]=r*l+n*o,s[3]=a*l-i*o,s}function Yy(s,e,t){t*=.5;let n=e[0],i=e[1],r=e[2],a=e[3],o=Math.sin(t),l=Math.cos(t);return s[0]=n*l+i*o,s[1]=i*l-n*o,s[2]=r*l+a*o,s[3]=a*l-r*o,s}function $y(s,e,t,n){let i=e[0],r=e[1],a=e[2],o=e[3],l=t[0],c=t[1],h=t[2],d=t[3],u,f,_,g,p;return f=i*l+r*c+a*h+o*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),_=Math.sin(u),g=Math.sin((1-n)*u)/_,p=Math.sin(n*u)/_):(g=1-n,p=n),s[0]=g*i+p*l,s[1]=g*r+p*c,s[2]=g*a+p*h,s[3]=g*o+p*d,s}function jy(s,e){let t=e[0],n=e[1],i=e[2],r=e[3],a=t*t+n*n+i*i+r*r,o=a?1/a:0;return s[0]=-t*o,s[1]=-n*o,s[2]=-i*o,s[3]=r*o,s}function Ky(s,e){return s[0]=-e[0],s[1]=-e[1],s[2]=-e[2],s[3]=e[3],s}function Zy(s,e){let t=e[0]+e[4]+e[8],n;if(t>0)n=Math.sqrt(t+1),s[3]=.5*n,n=.5/n,s[0]=(e[5]-e[7])*n,s[1]=(e[6]-e[2])*n,s[2]=(e[1]-e[3])*n;else{let i=0;e[4]>e[0]&&(i=1),e[8]>e[i*3+i]&&(i=2);let r=(i+1)%3,a=(i+2)%3;n=Math.sqrt(e[i*3+i]-e[r*3+r]-e[a*3+a]+1),s[i]=.5*n,n=.5/n,s[3]=(e[r*3+a]-e[a*3+r])*n,s[r]=(e[r*3+i]+e[i*3+r])*n,s[a]=(e[a*3+i]+e[i*3+a])*n}return s}function Qy(s,e,t="YXZ"){let n=Math.sin(e[0]*.5),i=Math.cos(e[0]*.5),r=Math.sin(e[1]*.5),a=Math.cos(e[1]*.5),o=Math.sin(e[2]*.5),l=Math.cos(e[2]*.5);return t==="XYZ"?(s[0]=n*a*l+i*r*o,s[1]=i*r*l-n*a*o,s[2]=i*a*o+n*r*l,s[3]=i*a*l-n*r*o):t==="YXZ"?(s[0]=n*a*l+i*r*o,s[1]=i*r*l-n*a*o,s[2]=i*a*o-n*r*l,s[3]=i*a*l+n*r*o):t==="ZXY"?(s[0]=n*a*l-i*r*o,s[1]=i*r*l+n*a*o,s[2]=i*a*o+n*r*l,s[3]=i*a*l-n*r*o):t==="ZYX"?(s[0]=n*a*l-i*r*o,s[1]=i*r*l+n*a*o,s[2]=i*a*o-n*r*l,s[3]=i*a*l+n*r*o):t==="YZX"?(s[0]=n*a*l+i*r*o,s[1]=i*r*l+n*a*o,s[2]=i*a*o-n*r*l,s[3]=i*a*l-n*r*o):t==="XZY"&&(s[0]=n*a*l-i*r*o,s[1]=i*r*l-n*a*o,s[2]=i*a*o+n*r*l,s[3]=i*a*l+n*r*o),s}const Jy=zy,eM=ky,tM=Vy,nM=Gy;class iM extends Array{constructor(e=0,t=0,n=0,i=1){super(e,t,n,i),this.onChange=()=>{},this._target=this;const r=["0","1","2","3"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&r.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return Hy(this._target),this.onChange(),this}set(e,t,n,i){return e.length?this.copy(e):(eM(this._target,e,t,n,i),this.onChange(),this)}rotateX(e){return Xy(this._target,this._target,e),this.onChange(),this}rotateY(e){return qy(this._target,this._target,e),this.onChange(),this}rotateZ(e){return Yy(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return jy(this._target,e),this.onChange(),this}conjugate(e=this._target){return Ky(this._target,e),this.onChange(),this}copy(e){return Jy(this._target,e),this.onChange(),this}normalize(e=this._target){return nM(this._target,e),this.onChange(),this}multiply(e,t){return t?ou(this._target,e,t):ou(this._target,this._target,e),this.onChange(),this}dot(e){return tM(this._target,e)}fromMatrix3(e){return Zy(this._target,e),this.onChange(),this}fromEuler(e,t){return Qy(this._target,e,e.order),t||this.onChange(),this}fromAxisAngle(e,t){return Wy(this._target,e,t),this.onChange(),this}slerp(e,t){return $y(this._target,this._target,e,t),this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this._target[3]=e[t+3],this.onChange(),this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e}}const sM=1e-6;function rM(s,e){return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=e[3],s[4]=e[4],s[5]=e[5],s[6]=e[6],s[7]=e[7],s[8]=e[8],s[9]=e[9],s[10]=e[10],s[11]=e[11],s[12]=e[12],s[13]=e[13],s[14]=e[14],s[15]=e[15],s}function aM(s,e,t,n,i,r,a,o,l,c,h,d,u,f,_,g,p){return s[0]=e,s[1]=t,s[2]=n,s[3]=i,s[4]=r,s[5]=a,s[6]=o,s[7]=l,s[8]=c,s[9]=h,s[10]=d,s[11]=u,s[12]=f,s[13]=_,s[14]=g,s[15]=p,s}function oM(s){return s[0]=1,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=1,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=1,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function lM(s,e){let t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],_=e[12],g=e[13],p=e[14],m=e[15],v=t*o-n*a,x=t*l-i*a,y=t*c-r*a,T=n*l-i*o,E=n*c-r*o,b=i*c-r*l,P=h*g-d*_,M=h*p-u*_,A=h*m-f*_,U=d*p-u*g,z=d*m-f*g,q=u*m-f*p,C=v*q-x*z+y*U+T*A-E*M+b*P;return C?(C=1/C,s[0]=(o*q-l*z+c*U)*C,s[1]=(i*z-n*q-r*U)*C,s[2]=(g*b-p*E+m*T)*C,s[3]=(u*E-d*b-f*T)*C,s[4]=(l*A-a*q-c*M)*C,s[5]=(t*q-i*A+r*M)*C,s[6]=(p*y-_*b-m*x)*C,s[7]=(h*b-u*y+f*x)*C,s[8]=(a*z-o*A+c*P)*C,s[9]=(n*A-t*z-r*P)*C,s[10]=(_*E-g*y+m*v)*C,s[11]=(d*y-h*E-f*v)*C,s[12]=(o*M-a*U-l*P)*C,s[13]=(t*U-n*M+i*P)*C,s[14]=(g*x-_*T-p*v)*C,s[15]=(h*T-d*x+u*v)*C,s):null}function Zd(s){let e=s[0],t=s[1],n=s[2],i=s[3],r=s[4],a=s[5],o=s[6],l=s[7],c=s[8],h=s[9],d=s[10],u=s[11],f=s[12],_=s[13],g=s[14],p=s[15],m=e*a-t*r,v=e*o-n*r,x=e*l-i*r,y=t*o-n*a,T=t*l-i*a,E=n*l-i*o,b=c*_-h*f,P=c*g-d*f,M=c*p-u*f,A=h*g-d*_,U=h*p-u*_,z=d*p-u*g;return m*z-v*U+x*A+y*M-T*P+E*b}function lu(s,e,t){let n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],d=e[8],u=e[9],f=e[10],_=e[11],g=e[12],p=e[13],m=e[14],v=e[15],x=t[0],y=t[1],T=t[2],E=t[3];return s[0]=x*n+y*o+T*d+E*g,s[1]=x*i+y*l+T*u+E*p,s[2]=x*r+y*c+T*f+E*m,s[3]=x*a+y*h+T*_+E*v,x=t[4],y=t[5],T=t[6],E=t[7],s[4]=x*n+y*o+T*d+E*g,s[5]=x*i+y*l+T*u+E*p,s[6]=x*r+y*c+T*f+E*m,s[7]=x*a+y*h+T*_+E*v,x=t[8],y=t[9],T=t[10],E=t[11],s[8]=x*n+y*o+T*d+E*g,s[9]=x*i+y*l+T*u+E*p,s[10]=x*r+y*c+T*f+E*m,s[11]=x*a+y*h+T*_+E*v,x=t[12],y=t[13],T=t[14],E=t[15],s[12]=x*n+y*o+T*d+E*g,s[13]=x*i+y*l+T*u+E*p,s[14]=x*r+y*c+T*f+E*m,s[15]=x*a+y*h+T*_+E*v,s}function cM(s,e,t){let n=t[0],i=t[1],r=t[2],a,o,l,c,h,d,u,f,_,g,p,m;return e===s?(s[12]=e[0]*n+e[4]*i+e[8]*r+e[12],s[13]=e[1]*n+e[5]*i+e[9]*r+e[13],s[14]=e[2]*n+e[6]*i+e[10]*r+e[14],s[15]=e[3]*n+e[7]*i+e[11]*r+e[15]):(a=e[0],o=e[1],l=e[2],c=e[3],h=e[4],d=e[5],u=e[6],f=e[7],_=e[8],g=e[9],p=e[10],m=e[11],s[0]=a,s[1]=o,s[2]=l,s[3]=c,s[4]=h,s[5]=d,s[6]=u,s[7]=f,s[8]=_,s[9]=g,s[10]=p,s[11]=m,s[12]=a*n+h*i+_*r+e[12],s[13]=o*n+d*i+g*r+e[13],s[14]=l*n+u*i+p*r+e[14],s[15]=c*n+f*i+m*r+e[15]),s}function hM(s,e,t){let n=t[0],i=t[1],r=t[2];return s[0]=e[0]*n,s[1]=e[1]*n,s[2]=e[2]*n,s[3]=e[3]*n,s[4]=e[4]*i,s[5]=e[5]*i,s[6]=e[6]*i,s[7]=e[7]*i,s[8]=e[8]*r,s[9]=e[9]*r,s[10]=e[10]*r,s[11]=e[11]*r,s[12]=e[12],s[13]=e[13],s[14]=e[14],s[15]=e[15],s}function uM(s,e,t,n){let i=n[0],r=n[1],a=n[2],o=Math.hypot(i,r,a),l,c,h,d,u,f,_,g,p,m,v,x,y,T,E,b,P,M,A,U,z,q,C,N;return Math.abs(o)<sM?null:(o=1/o,i*=o,r*=o,a*=o,l=Math.sin(t),c=Math.cos(t),h=1-c,d=e[0],u=e[1],f=e[2],_=e[3],g=e[4],p=e[5],m=e[6],v=e[7],x=e[8],y=e[9],T=e[10],E=e[11],b=i*i*h+c,P=r*i*h+a*l,M=a*i*h-r*l,A=i*r*h-a*l,U=r*r*h+c,z=a*r*h+i*l,q=i*a*h+r*l,C=r*a*h-i*l,N=a*a*h+c,s[0]=d*b+g*P+x*M,s[1]=u*b+p*P+y*M,s[2]=f*b+m*P+T*M,s[3]=_*b+v*P+E*M,s[4]=d*A+g*U+x*z,s[5]=u*A+p*U+y*z,s[6]=f*A+m*U+T*z,s[7]=_*A+v*U+E*z,s[8]=d*q+g*C+x*N,s[9]=u*q+p*C+y*N,s[10]=f*q+m*C+T*N,s[11]=_*q+v*C+E*N,e!==s&&(s[12]=e[12],s[13]=e[13],s[14]=e[14],s[15]=e[15]),s)}function dM(s,e){return s[0]=e[12],s[1]=e[13],s[2]=e[14],s}function Qd(s,e){let t=e[0],n=e[1],i=e[2],r=e[4],a=e[5],o=e[6],l=e[8],c=e[9],h=e[10];return s[0]=Math.hypot(t,n,i),s[1]=Math.hypot(r,a,o),s[2]=Math.hypot(l,c,h),s}function fM(s){let e=s[0],t=s[1],n=s[2],i=s[4],r=s[5],a=s[6],o=s[8],l=s[9],c=s[10];const h=e*e+t*t+n*n,d=i*i+r*r+a*a,u=o*o+l*l+c*c;return Math.sqrt(Math.max(h,d,u))}const Jd=function(){const s=[1,1,1];return function(e,t){let n=s;Qd(n,t);let i=1/n[0],r=1/n[1],a=1/n[2],o=t[0]*i,l=t[1]*r,c=t[2]*a,h=t[4]*i,d=t[5]*r,u=t[6]*a,f=t[8]*i,_=t[9]*r,g=t[10]*a,p=o+d+g,m=0;return p>0?(m=Math.sqrt(p+1)*2,e[3]=.25*m,e[0]=(u-_)/m,e[1]=(f-c)/m,e[2]=(l-h)/m):o>d&&o>g?(m=Math.sqrt(1+o-d-g)*2,e[3]=(u-_)/m,e[0]=.25*m,e[1]=(l+h)/m,e[2]=(f+c)/m):d>g?(m=Math.sqrt(1+d-o-g)*2,e[3]=(f-c)/m,e[0]=(l+h)/m,e[1]=.25*m,e[2]=(u+_)/m):(m=Math.sqrt(1+g-o-d)*2,e[3]=(l-h)/m,e[0]=(f+c)/m,e[1]=(u+_)/m,e[2]=.25*m),e}}();function pM(s,e,t,n){let i=rr([s[0],s[1],s[2]]);const r=rr([s[4],s[5],s[6]]),a=rr([s[8],s[9],s[10]]);Zd(s)<0&&(i=-i),t[0]=s[12],t[1]=s[13],t[2]=s[14];const l=s.slice(),c=1/i,h=1/r,d=1/a;l[0]*=c,l[1]*=c,l[2]*=c,l[4]*=h,l[5]*=h,l[6]*=h,l[8]*=d,l[9]*=d,l[10]*=d,Jd(e,l),n[0]=i,n[1]=r,n[2]=a}function mM(s,e,t,n){const i=s,r=e[0],a=e[1],o=e[2],l=e[3],c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,_=r*d,g=a*h,p=a*d,m=o*d,v=l*c,x=l*h,y=l*d,T=n[0],E=n[1],b=n[2];return i[0]=(1-(g+m))*T,i[1]=(f+y)*T,i[2]=(_-x)*T,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(u+m))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(_+x)*b,i[9]=(p-v)*b,i[10]=(1-(u+g))*b,i[11]=0,i[12]=t[0],i[13]=t[1],i[14]=t[2],i[15]=1,i}function gM(s,e){let t=e[0],n=e[1],i=e[2],r=e[3],a=t+t,o=n+n,l=i+i,c=t*a,h=n*a,d=n*o,u=i*a,f=i*o,_=i*l,g=r*a,p=r*o,m=r*l;return s[0]=1-d-_,s[1]=h+m,s[2]=u-p,s[3]=0,s[4]=h-m,s[5]=1-c-_,s[6]=f+g,s[7]=0,s[8]=u+p,s[9]=f-g,s[10]=1-c-d,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function _M(s,e,t,n,i){let r=1/Math.tan(e/2),a=1/(n-i);return s[0]=r/t,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=r,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=(i+n)*a,s[11]=-1,s[12]=0,s[13]=0,s[14]=2*i*n*a,s[15]=0,s}function xM(s,e,t,n,i,r,a){let o=1/(e-t),l=1/(n-i),c=1/(r-a);return s[0]=-2*o,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=-2*l,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2*c,s[11]=0,s[12]=(e+t)*o,s[13]=(i+n)*l,s[14]=(a+r)*c,s[15]=1,s}function vM(s,e,t,n){let i=e[0],r=e[1],a=e[2],o=n[0],l=n[1],c=n[2],h=i-t[0],d=r-t[1],u=a-t[2],f=h*h+d*d+u*u;f===0?u=1:(f=1/Math.sqrt(f),h*=f,d*=f,u*=f);let _=l*u-c*d,g=c*h-o*u,p=o*d-l*h;return f=_*_+g*g+p*p,f===0&&(c?o+=1e-6:l?c+=1e-6:l+=1e-6,_=l*u-c*d,g=c*h-o*u,p=o*d-l*h,f=_*_+g*g+p*p),f=1/Math.sqrt(f),_*=f,g*=f,p*=f,s[0]=_,s[1]=g,s[2]=p,s[3]=0,s[4]=d*p-u*g,s[5]=u*_-h*p,s[6]=h*g-d*_,s[7]=0,s[8]=h,s[9]=d,s[10]=u,s[11]=0,s[12]=i,s[13]=r,s[14]=a,s[15]=1,s}function cu(s,e,t){return s[0]=e[0]+t[0],s[1]=e[1]+t[1],s[2]=e[2]+t[2],s[3]=e[3]+t[3],s[4]=e[4]+t[4],s[5]=e[5]+t[5],s[6]=e[6]+t[6],s[7]=e[7]+t[7],s[8]=e[8]+t[8],s[9]=e[9]+t[9],s[10]=e[10]+t[10],s[11]=e[11]+t[11],s[12]=e[12]+t[12],s[13]=e[13]+t[13],s[14]=e[14]+t[14],s[15]=e[15]+t[15],s}function hu(s,e,t){return s[0]=e[0]-t[0],s[1]=e[1]-t[1],s[2]=e[2]-t[2],s[3]=e[3]-t[3],s[4]=e[4]-t[4],s[5]=e[5]-t[5],s[6]=e[6]-t[6],s[7]=e[7]-t[7],s[8]=e[8]-t[8],s[9]=e[9]-t[9],s[10]=e[10]-t[10],s[11]=e[11]-t[11],s[12]=e[12]-t[12],s[13]=e[13]-t[13],s[14]=e[14]-t[14],s[15]=e[15]-t[15],s}function yM(s,e,t){return s[0]=e[0]*t,s[1]=e[1]*t,s[2]=e[2]*t,s[3]=e[3]*t,s[4]=e[4]*t,s[5]=e[5]*t,s[6]=e[6]*t,s[7]=e[7]*t,s[8]=e[8]*t,s[9]=e[9]*t,s[10]=e[10]*t,s[11]=e[11]*t,s[12]=e[12]*t,s[13]=e[13]*t,s[14]=e[14]*t,s[15]=e[15]*t,s}class Ta extends Array{constructor(e=1,t=0,n=0,i=0,r=0,a=1,o=0,l=0,c=0,h=0,d=1,u=0,f=0,_=0,g=0,p=1){return super(e,t,n,i,r,a,o,l,c,h,d,u,f,_,g,p),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,t,n,i,r,a,o,l,c,h,d,u,f,_,g,p){return e.length?this.copy(e):(aM(this,e,t,n,i,r,a,o,l,c,h,d,u,f,_,g,p),this)}translate(e,t=this){return cM(this,t,e),this}rotate(e,t,n=this){return uM(this,n,e,t),this}scale(e,t=this){return hM(this,t,typeof e=="number"?[e,e,e]:e),this}add(e,t){return t?cu(this,e,t):cu(this,this,e),this}sub(e,t){return t?hu(this,e,t):hu(this,this,e),this}multiply(e,t){return e.length?t?lu(this,e,t):lu(this,this,e):yM(this,this,e),this}identity(){return oM(this),this}copy(e){return rM(this,e),this}fromPerspective({fov:e,aspect:t,near:n,far:i}={}){return _M(this,e,t,n,i),this}fromOrthogonal({left:e,right:t,bottom:n,top:i,near:r,far:a}){return xM(this,e,t,n,i,r,a),this}fromQuaternion(e){return gM(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return lM(this,e),this}compose(e,t,n){return mM(this,e,t,n),this}decompose(e,t,n){return pM(this,e,t,n),this}getRotation(e){return Jd(e,this),this}getTranslation(e){return dM(e,this),this}getScaling(e){return Qd(e,this),this}getMaxScaleOnAxis(){return fM(this)}lookAt(e,t,n){return vM(this,e,t,n),this}determinant(){return Zd(this)}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this[3]=e[t+3],this[4]=e[t+4],this[5]=e[t+5],this[6]=e[t+6],this[7]=e[t+7],this[8]=e[t+8],this[9]=e[t+9],this[10]=e[t+10],this[11]=e[t+11],this[12]=e[t+12],this[13]=e[t+13],this[14]=e[t+14],this[15]=e[t+15],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e[t+4]=this[4],e[t+5]=this[5],e[t+6]=this[6],e[t+7]=this[7],e[t+8]=this[8],e[t+9]=this[9],e[t+10]=this[10],e[t+11]=this[11],e[t+12]=this[12],e[t+13]=this[13],e[t+14]=this[14],e[t+15]=this[15],e}}function MM(s,e,t="YXZ"){return t==="XYZ"?(s[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(s[0]=Math.atan2(-e[9],e[10]),s[2]=Math.atan2(-e[4],e[0])):(s[0]=Math.atan2(e[6],e[5]),s[2]=0)):t==="YXZ"?(s[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(s[1]=Math.atan2(e[8],e[10]),s[2]=Math.atan2(e[1],e[5])):(s[1]=Math.atan2(-e[2],e[0]),s[2]=0)):t==="ZXY"?(s[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(s[1]=Math.atan2(-e[2],e[10]),s[2]=Math.atan2(-e[4],e[5])):(s[1]=0,s[2]=Math.atan2(e[1],e[0]))):t==="ZYX"?(s[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(s[0]=Math.atan2(e[6],e[10]),s[2]=Math.atan2(e[1],e[0])):(s[0]=0,s[2]=Math.atan2(-e[4],e[5]))):t==="YZX"?(s[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(s[0]=Math.atan2(-e[9],e[5]),s[1]=Math.atan2(-e[2],e[0])):(s[0]=0,s[1]=Math.atan2(e[8],e[10]))):t==="XZY"&&(s[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(s[0]=Math.atan2(e[6],e[5]),s[1]=Math.atan2(e[8],e[0])):(s[0]=Math.atan2(-e[9],e[10]),s[1]=0)),s}const uu=new Ta;class SM extends Array{constructor(e=0,t=e,n=e,i="YXZ"){super(e,t,n),this.order=i,this.onChange=()=>{},this._target=this;const r=["0","1","2"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&r.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,t=e,n=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=t,this._target[2]=n,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,t=this.order){return MM(this._target,e,t),this.onChange(),this}fromQuaternion(e,t=this.order,n){return uu.fromQuaternion(e),this._target.fromRotationMatrix(uu,t),n||this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}}class EM{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Ta,this.worldMatrix=new Ta,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new Rn,this.quaternion=new iM,this.scale=new Rn(1),this.rotation=new SM,this.up=new Rn(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,t=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,t&&e&&e.addChild(this,!1)}addChild(e,t=!0){~this.children.indexOf(e)||this.children.push(e),t&&e.setParent(this,!1)}removeChild(e,t=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),t&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let t=0,n=this.children.length;t<n;t++)this.children[t].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let t=0,n=this.children.length;t<n;t++)this.children[t].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,t=!1){t?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function bM(s,e){return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=e[4],s[4]=e[5],s[5]=e[6],s[6]=e[8],s[7]=e[9],s[8]=e[10],s}function TM(s,e){let t=e[0],n=e[1],i=e[2],r=e[3],a=t+t,o=n+n,l=i+i,c=t*a,h=n*a,d=n*o,u=i*a,f=i*o,_=i*l,g=r*a,p=r*o,m=r*l;return s[0]=1-d-_,s[3]=h-m,s[6]=u+p,s[1]=h+m,s[4]=1-c-_,s[7]=f-g,s[2]=u-p,s[5]=f+g,s[8]=1-c-d,s}function wM(s,e){return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=e[3],s[4]=e[4],s[5]=e[5],s[6]=e[6],s[7]=e[7],s[8]=e[8],s}function AM(s,e,t,n,i,r,a,o,l,c){return s[0]=e,s[1]=t,s[2]=n,s[3]=i,s[4]=r,s[5]=a,s[6]=o,s[7]=l,s[8]=c,s}function CM(s){return s[0]=1,s[1]=0,s[2]=0,s[3]=0,s[4]=1,s[5]=0,s[6]=0,s[7]=0,s[8]=1,s}function RM(s,e){let t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=-h*r+o*l,f=c*r-a*l,_=t*d+n*u+i*f;return _?(_=1/_,s[0]=d*_,s[1]=(-h*n+i*c)*_,s[2]=(o*n-i*a)*_,s[3]=u*_,s[4]=(h*t-i*l)*_,s[5]=(-o*t+i*r)*_,s[6]=f*_,s[7]=(-c*t+n*l)*_,s[8]=(a*t-n*r)*_,s):null}function du(s,e,t){let n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],d=e[8],u=t[0],f=t[1],_=t[2],g=t[3],p=t[4],m=t[5],v=t[6],x=t[7],y=t[8];return s[0]=u*n+f*a+_*c,s[1]=u*i+f*o+_*h,s[2]=u*r+f*l+_*d,s[3]=g*n+p*a+m*c,s[4]=g*i+p*o+m*h,s[5]=g*r+p*l+m*d,s[6]=v*n+x*a+y*c,s[7]=v*i+x*o+y*h,s[8]=v*r+x*l+y*d,s}function PM(s,e,t){let n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],d=e[8],u=t[0],f=t[1];return s[0]=n,s[1]=i,s[2]=r,s[3]=a,s[4]=o,s[5]=l,s[6]=u*n+f*a+c,s[7]=u*i+f*o+h,s[8]=u*r+f*l+d,s}function LM(s,e,t){let n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],d=e[8],u=Math.sin(t),f=Math.cos(t);return s[0]=f*n+u*a,s[1]=f*i+u*o,s[2]=f*r+u*l,s[3]=f*a-u*n,s[4]=f*o-u*i,s[5]=f*l-u*r,s[6]=c,s[7]=h,s[8]=d,s}function IM(s,e,t){let n=t[0],i=t[1];return s[0]=n*e[0],s[1]=n*e[1],s[2]=n*e[2],s[3]=i*e[3],s[4]=i*e[4],s[5]=i*e[5],s[6]=e[6],s[7]=e[7],s[8]=e[8],s}function DM(s,e){let t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],_=e[12],g=e[13],p=e[14],m=e[15],v=t*o-n*a,x=t*l-i*a,y=t*c-r*a,T=n*l-i*o,E=n*c-r*o,b=i*c-r*l,P=h*g-d*_,M=h*p-u*_,A=h*m-f*_,U=d*p-u*g,z=d*m-f*g,q=u*m-f*p,C=v*q-x*z+y*U+T*A-E*M+b*P;return C?(C=1/C,s[0]=(o*q-l*z+c*U)*C,s[1]=(l*A-a*q-c*M)*C,s[2]=(a*z-o*A+c*P)*C,s[3]=(i*z-n*q-r*U)*C,s[4]=(t*q-i*A+r*M)*C,s[5]=(n*A-t*z-r*P)*C,s[6]=(g*b-p*E+m*T)*C,s[7]=(p*y-_*b-m*x)*C,s[8]=(_*E-g*y+m*v)*C,s):null}class UM extends Array{constructor(e=1,t=0,n=0,i=0,r=1,a=0,o=0,l=0,c=1){return super(e,t,n,i,r,a,o,l,c),this}set(e,t,n,i,r,a,o,l,c){return e.length?this.copy(e):(AM(this,e,t,n,i,r,a,o,l,c),this)}translate(e,t=this){return PM(this,t,e),this}rotate(e,t=this){return LM(this,t,e),this}scale(e,t=this){return IM(this,t,e),this}multiply(e,t){return t?du(this,e,t):du(this,this,e),this}identity(){return CM(this),this}copy(e){return wM(this,e),this}fromMatrix4(e){return bM(this,e),this}fromQuaternion(e){return TM(this,e),this}fromBasis(e,t,n){return this.set(e[0],e[1],e[2],t[0],t[1],t[2],n[0],n[1],n[2]),this}inverse(e=this){return RM(this,e),this}getNormalMatrix(e){return DM(this,e),this}}let NM=0;class FM extends EM{constructor(e,{geometry:t,program:n,mode:i=e.TRIANGLES,frustumCulled:r=!0,renderOrder:a=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=NM++,this.geometry=t,this.program=n,this.mode=i,this.frustumCulled=r,this.renderOrder=a,this.modelViewMatrix=new Ta,this.normalMatrix=new UM,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(n=>n&&n({mesh:this,camera:e}));let t=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:t}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(n=>n&&n({mesh:this,camera:e}))}}class OM extends Ly{constructor(e,{attributes:t={}}={}){Object.assign(t,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,t)}}const Pi=s=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(s);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:[1,1,1]},BM=s=>s==="ember"?1:s==="frost"?2:0,zM=`#version 300 es
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
`;function GM(s,e={}){if(!s)return null;const{color1:t="#5227FF",color2:n="#FF9FFC",color3:i="#FFFFFF",speed:r=.35,scale:a=4,detail:o=3,glow:l=1.6,coreSize:c=.1,swirl:h=1,fold:d=-.2,blackPoint:u=.05,brightness:f=1.3,colorMode:_="molten",grain:g=!0,grainIntensity:p=.05,mouseInteraction:m=!0,mouseStrength:v=.3,opacity:x=1,backgroundColor:y="#030305",lightMode:T=!1}=e;let E;try{E=new By({webgl:2,alpha:!0,premultipliedAlpha:!0,antialias:!1,dpr:Math.min(window.devicePixelRatio||1,1.5)})}catch(Ze){return console.warn("WebGL2 not supported or failed for MoltenMetal:",Ze),null}const b=E.gl;b.clearColor(0,0,0,0);const P=b.canvas;P.style.width="100%",P.style.height="100%",P.style.display="block",P.style.pointerEvents="none",s.appendChild(P);const M=Pi(t),A=Pi(n),U=Pi(i),z=Pi(y),q=new OM(b),C=new Dy(b,{vertex:zM,fragment:kM,uniforms:{iTime:{value:0},iResolution:{value:new Float32Array([1,1])},uSpeed:{value:r},uScale:{value:a},uDetail:{value:o},uGlow:{value:l},uCoreSize:{value:Math.max(c,.001)},uSwirl:{value:h},uFold:{value:d},uBlackPoint:{value:u},uBrightness:{value:f},uColorMode:{value:BM(_)},uGrain:{value:g?1:0},uGrainIntensity:{value:p},uOpacity:{value:x},uMouse:{value:new Float32Array([.5,.5])},uMouseStrength:{value:v},uEnableMouse:{value:m},uColor1:{value:new Float32Array(M)},uColor2:{value:new Float32Array(A)},uColor3:{value:new Float32Array(U)},uBackgroundColor:{value:new Float32Array(z)},uLightMode:{value:T}}}),N=new FM(b,{geometry:q,program:C}),O=()=>{const Ze=s.getBoundingClientRect(),oe=Math.max(1,Math.floor(Ze.width)),De=Math.max(1,Math.floor(Ze.height));E.setSize(oe,De);const ue=C.uniforms.iResolution.value;ue[0]=b.drawingBufferWidth,ue[1]=b.drawingBufferHeight,E.render({scene:N})},G=new ResizeObserver(O);G.observe(s),O();const V=[.5,.5],B=[.5,.5],Z=Ze=>{V[0]=Ze.clientX/window.innerWidth,V[1]=1-Ze.clientY/window.innerHeight},ee=()=>{V[0]=.5,V[1]=.5};m&&(window.addEventListener("mousemove",Z,{passive:!0}),window.addEventListener("mouseleave",ee));let Q=0,H=!0,K=!document.hidden;const ae=performance.now(),Se=Ze=>{C.uniforms.iTime.value=(Ze-ae)*.001,B[0]+=.05*(V[0]-B[0]),B[1]+=.05*(V[1]-B[1]),C.uniforms.uMouse.value[0]=B[0],C.uniforms.uMouse.value[1]=B[1],E.render({scene:N}),Q=requestAnimationFrame(Se)},ye=()=>{H&&K&&Q===0&&(Q=requestAnimationFrame(Se))},Re=()=>{Q!==0&&(cancelAnimationFrame(Q),Q=0)},Ce=new IntersectionObserver(([Ze])=>{H=Ze.isIntersecting,H?ye():Re()},{threshold:0});Ce.observe(s);const me=()=>{K=!document.hidden,K?ye():Re()};return document.addEventListener("visibilitychange",me),ye(),{renderer:E,program:C,mesh:N,updateColors:(Ze,oe,De)=>{const ue=C.uniforms;if(Ze){const We=Pi(Ze);ue.uColor1.value[0]=We[0],ue.uColor1.value[1]=We[1],ue.uColor1.value[2]=We[2]}if(oe){const We=Pi(oe);ue.uColor2.value[0]=We[0],ue.uColor2.value[1]=We[1],ue.uColor2.value[2]=We[2]}if(De){const We=Pi(De);ue.uColor3.value[0]=We[0],ue.uColor3.value[1]=We[1],ue.uColor3.value[2]=We[2]}},destroy:()=>{var Ze;Re(),G.disconnect(),Ce.disconnect(),document.removeEventListener("visibilitychange",me),m&&(window.removeEventListener("mousemove",Z),window.removeEventListener("mouseleave",ee)),P.parentNode===s&&s.removeChild(P),(Ze=b.getExtension("WEBGL_lose_context"))==null||Ze.loseContext()}}}class VM{constructor(){this.container=document.getElementById("webgl-container"),this.stones=[],this.currentIndex=0,this.isTransitioning=!1,this.isConvergenceActive=!1,this.isWireframe=!1,this.lastScrollTime=0,this.scrollCooldown=700,this.clock=new Qu,this.infoCard=document.getElementById("info-card"),this.initMoltenMetalBg(),this.initThree(),this.initCosmicEnvironment(),this.initStones(),this.initPostProcessing(),this.initControls(),this.initUI(),this.initCountdownTimer(),this.initTimeline(),this.initScrollAndGestures(),this.initEventListeners(),sy(),this.animate(),"scrollRestoration"in history&&(history.scrollRestoration="manual"),window.scrollTo(0,0),document.body.classList.remove("timeline-unlocked"),this.displayStone(0,!1),this.cinematic=fy({onComplete:()=>{this.triggerConvergence(!1)}})}isMobile(){return window.innerWidth<=1024||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}initMoltenMetalBg(){const e=document.getElementById("molten-metal-bg");e&&(this.moltenMetal=GM(e,{color1:"#5227FF",color2:"#FF9FFC",color3:"#FFFFFF",speed:.35,scale:4,detail:3,glow:1.6,coreSize:.1,swirl:1,fold:-.2,blackPoint:.05,brightness:1.3,colorMode:"molten",grain:!0,grainIntensity:.05,mouseInteraction:!0,mouseStrength:.3,opacity:1,backgroundColor:"#030305"}))}initThree(){this.scene=new rx,this.scene.fog=new gl(197381,.008),this.camera=new an(42,window.innerWidth/window.innerHeight,.1,1e3),this.updateCameraForViewport(),this.renderer=new ju({powerPreference:"high-performance",antialias:!0,alpha:!0}),this.renderer.setClearColor(0,0),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=cl,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.container.appendChild(this.renderer.domElement);const e=new fx(16777215,.95);this.scene.add(e);const t=new xo(16777215,1.35);t.position.set(5,10,8),this.scene.add(t);const n=new xo(16777215,.85);n.position.set(-6,-4,6),this.scene.add(n);const i=new xo(8961023,.75);i.position.set(-6,8,-6),this.scene.add(i),this.stageLight=new Wo(54015,1.5,16,1.2),this.stageLight.position.set(0,1.2,4.5),this.scene.add(this.stageLight);const r=new Go(this.renderer);r.compileEquirectangularShader();const a=document.createElement("canvas");a.width=512,a.height=256;const o=a.getContext("2d"),l=o.createLinearGradient(0,0,0,256);l.addColorStop(0,"#0d1020"),l.addColorStop(.5,"#05060b"),l.addColorStop(1,"#090b16"),o.fillStyle=l,o.fillRect(0,0,512,256);const c=(u,f,_,g,p)=>{const m=o.createRadialGradient(u,f,0,u,f,_);m.addColorStop(0,`rgba(255, 255, 255, ${g})`),m.addColorStop(.35,p),m.addColorStop(1,"rgba(0, 0, 0, 0)"),o.fillStyle=m,o.beginPath(),o.arc(u,f,_,0,Math.PI*2),o.fill()};c(130,65,80,.35,"rgba(230, 245, 255, 0.35)"),c(370,75,95,.32,"rgba(255, 240, 225, 0.3)"),c(256,175,75,.2,"rgba(160, 200, 255, 0.2)");const h=new ga(a);h.mapping=ha;const d=r.fromEquirectangular(h).texture;this.scene.environment=d}updateCameraForViewport(){const e=document.getElementById("stone-stage-overlay");if(e){const n=e.getBoundingClientRect(),i=n.left+n.width/2,r=n.top+n.height/2;let a=window.innerWidth/2-i,o=window.innerHeight/2-r;this.isMobile()&&(a+=16),this.camera.setViewOffset(window.innerWidth,window.innerHeight,a,o,window.innerWidth,window.innerHeight),this.camera.updateProjectionMatrix()}this.stoneStageX=0,this.stoneStageY=0;const t=this.isMobile()?12:9.8;this.camera.position.set(0,0,t),this.controls&&this.controls.target.set(0,0,0)}initCosmicEnvironment(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.2,"rgba(255, 255, 255, 0.7)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.15)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=n,t.fillRect(0,0,64,64);const i=new ga(e),r=2e3,a=new Mt,o=new Float32Array(r*3),l=new Float32Array(r*3);for(let h=0;h<r;h++){const d=38+Math.random()*85,u=Math.random()*Math.PI*2,f=Math.acos(2*Math.random()-1);let _=d*Math.sin(f)*Math.cos(u),g=d*Math.sin(f)*Math.sin(u),p=d*Math.cos(f);Math.hypot(_-this.stoneStageX,g-this.stoneStageY)<4.5&&p<0&&(_+=_>=this.stoneStageX?5:-5,g+=g>=this.stoneStageY?5:-5),o[h*3]=_,o[h*3+1]=g,o[h*3+2]=p;const v=.4+Math.random()*.6;l[h*3]=v,l[h*3+1]=v,l[h*3+2]=v}a.setAttribute("position",new Kt(o,3)),a.setAttribute("color",new Kt(l,3));const c=new _l({size:.35,map:i,vertexColors:!0,transparent:!0,opacity:.8,blending:Bt,depthWrite:!1});this.starfield=new Ku(a,c),this.scene.add(this.starfield)}initStones(){this.stonesContainer=new Un,this.scene.add(this.stonesContainer);const e=this.isMobile()?.48:1;Ht.forEach((t,n)=>{const i=ny(t);i.group.position.set(this.stoneStageX,this.stoneStageY,0),n!==0?(i.group.scale.set(.001,.001,.001),i.group.visible=!1):(i.group.scale.set(e,e,e),i.group.visible=!0),this.stonesContainer.add(i.group),this.stones.push(i)})}initPostProcessing(){this.composer=new Ex(this.renderer);const e=new bx(this.scene,this.camera,null,new Pe(0),0);e.clearAlpha=0,this.composer.addPass(e),this.bloomPass=new Ls(new Te(window.innerWidth,window.innerHeight),.55,.45,.72),this.composer.addPass(this.bloomPass);const t=new Ax;this.composer.addPass(t)}initControls(){this.controls=new _x(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.maxPolarAngle=Math.PI/2+.25,this.controls.minPolarAngle=Math.PI/2-.25,this.controls.target.set(0,0,0),this.controls.touches={ONE:null,TWO:null},this.renderer.domElement&&(this.renderer.domElement.style.touchAction="pan-y");const e=new px,t=new Te;let n={x:0,y:0};this.renderer.domElement.addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(n={x:i.clientX,y:i.clientY})}),this.renderer.domElement.addEventListener("pointerup",i=>{if(i.pointerType==="touch")return;if(Math.hypot(i.clientX-n.x,i.clientY-n.y)<6&&!this.isConvergenceActive){t.x=i.clientX/window.innerWidth*2-1,t.y=-(i.clientY/window.innerHeight)*2+1,e.setFromCamera(t,this.camera);const a=this.stones[this.currentIndex];a&&e.intersectObjects([a.gemMesh,a.coreMesh],!0).length>0&&this.pulseCurrentStone()}})}initCountdownTimer(){const e=new Date("2026-10-31T09:00:00+05:30").getTime(),t=document.getElementById("cd-days"),n=document.getElementById("cd-hours"),i=document.getElementById("cd-mins"),r=document.getElementById("cd-secs"),a=document.getElementById("cd-msecs");if(!t||!n||!i||!r||!a)return;let o=-1;const l=()=>{const c=Date.now(),h=e-c;if(h<=0){t.textContent="00",n.textContent="00",i.textContent="00",r.textContent="00",a.textContent="000";return}const d=Math.floor(h/(1e3*60*60*24)),u=Math.floor(h/(1e3*60*60)%24),f=Math.floor(h/(1e3*60)%60),_=Math.floor(h/1e3%60),g=Math.floor(h%1e3);_!==o&&(o=_,t.textContent=String(d).padStart(2,"0"),n.textContent=String(u).padStart(2,"0"),i.textContent=String(f).padStart(2,"0"),r.textContent=String(_).padStart(2,"0")),a.textContent=String(g).padStart(3,"0"),requestAnimationFrame(l)};requestAnimationFrame(l)}initUI(){const e=document.getElementById("pager-list");e.innerHTML="",Ht.forEach((d,u)=>{const f=document.createElement("button");f.className=`pager-item ${u===0?"active":""}`,f.setAttribute("data-index",u);const _=d.colorThree>>16&255,g=d.colorThree>>8&255,p=d.colorThree&255;f.setAttribute("style",`
        --item-color: ${d.colorHex};
        --item-rgb: ${_}, ${g}, ${p};
      `),f.setAttribute("aria-label",`Navigate to ${d.name}`);const m=d.name.replace(" STONE",""),v=u===0?21:0,x=u===Ht.length-1?21:42;f.innerHTML=`
        <span class="pager-track-node">
          <svg class="pager-node-svg" width="24" height="42" viewBox="0 0 24 42" aria-hidden="true">
            <!-- Background laser guide line -->
            <line class="svg-track-line" x1="12" y1="${v}" x2="12" y2="${x}" />
            <!-- Active laser beam segments -->
            ${u>0?'<line class="svg-laser-top" x1="12" y1="0" x2="12" y2="21" />':""}
            ${u<Ht.length-1?'<line class="svg-laser-bot" x1="12" y1="21" x2="12" y2="42" />':""}
            <!-- Precision Single Dot: centered at (12, 21) -->
            <circle class="svg-pip-halo" cx="12" cy="21" r="8" />
            <circle class="svg-pip-core" cx="12" cy="21" r="3.5" />
          </svg>
        </span>
        <span class="pager-name-tag">${m}</span>
      `,f.addEventListener("click",()=>{this.isConvergenceActive&&this.endConvergence(),u!==this.currentIndex&&(He.playStoneChime(d.id),this.displayStone(u,!0))}),e.appendChild(f)});const t=document.getElementById("btn-mobile-menu"),n=document.getElementById("mobile-nav-drawer"),i=document.getElementById("btn-close-mobile-menu"),r=document.getElementById("mobile-drawer-backdrop"),a=document.querySelectorAll(".mobile-nav-link, .m-portal-item"),o=document.getElementById("btn-mobile-drawer-reg");t&&n&&t.addEventListener("click",()=>{n.classList.add("is-open"),He.playClick()});const l=()=>{n&&n.classList.remove("is-open")};i&&i.addEventListener("click",l),r&&r.addEventListener("click",l),a.forEach(d=>{d.addEventListener("click",()=>{l(),this.unlockTimeline(!0)})}),o&&o.addEventListener("click",()=>{l();const d=document.getElementById("btn-nav-register");d&&d.click()});const c=document.getElementById("btn-mobile-audio"),h=document.getElementById("m-audio-status");c&&(h&&(h.textContent="ACTIVE",h.style.color="#00d2ff"),c.addEventListener("click",()=>{const d=He.toggleMute();h&&(h.textContent=d?"ACTIVE":"MUTED",h.style.color=d?"#00d2ff":"#a1a1aa");const u=document.getElementById("btn-audio");u&&(u.classList.toggle("audio-unmuted",d),u.classList.toggle("audio-muted",!d),u.classList.toggle("active",d))})),this.initTechText()}initTechText(){const e=document.getElementById("stone-tech-text-container");if(!e)return;const t=Ht[this.currentIndex]||Ht[0];this.techText=new oy(e,{text:t.name,fontFamily:"'Syne', sans-serif",fontWeight:800,fontSize:42,letterSpacing:.04,color:"#ffffff",accentColor:t.colorHex,reveal:"letter",lineStyle:"dashed",dashLength:4,dashGap:2,strokeWidth:1.5,specks:12,selection:!1,labels:!1,draggable:!1,sweep:!0,speed:.9})}initTimeline(){const e=document.querySelectorAll(".dossier-card"),t=["mind","space","reality","time"];e.forEach((i,r)=>{i.addEventListener("click",()=>{const a=t[r]||"all";He.playStoneChime(a),it.fromTo(i,{scale:.985},{scale:1,duration:.35,ease:"back.out(2)"})})});const n=document.getElementById("btn-timeline");n&&n.addEventListener("click",()=>{He.playClick(),this.unlockTimeline(!0)}),this.initTimelineParticles()}initTimelineParticles(){const e=document.getElementById("timeline-bg-canvas"),t=document.getElementById("timeline-section");if(!e||!t)return;const n=e.getContext("2d");if(!n)return;let i=0,r=0,a=1,o=null,l=!1;const c={x:-1e3,y:-1e3,isHovering:!1},h=["#d97706","#0284c7","#e11d48","#059669","#475569","#1e293b"],d=window.innerWidth<768?22:44,u=[],f=()=>{const p=t.getBoundingClientRect();i=p.width,r=p.height,a=Math.min(window.devicePixelRatio||1,2),e.width=Math.round(i*a),e.height=Math.round(r*a),n.setTransform(a,0,0,a,0,0),u.forEach(m=>{m.x>i&&(m.x=Math.random()*i),m.y>r&&(m.y=Math.random()*r)})};for(let p=0;p<d;p++){const m=Math.random()<.45,v=m?h[p%4]:h[4+p%2];u.push({x:Math.random()*(i||window.innerWidth),y:Math.random()*(r||600),vx:(Math.random()-.5)*.42,vy:(Math.random()-.5)*.42,radius:m?2.2+Math.random()*1.2:1.3+Math.random()*.8,color:v,alpha:.28+Math.random()*.45,hasCross:p%6===0,pulseSpeed:.02+Math.random()*.03,pulseVal:Math.random()*Math.PI})}const _=()=>{if(!l)return;n.clearRect(0,0,i,r);const p=u.length,m=125,v=m*m;for(let x=0;x<p;x++){const y=u[x];for(let T=x+1;T<p;T++){const E=u[T],b=y.x-E.x,P=y.y-E.y,M=b*b+P*P;if(M<v){const U=(1-Math.sqrt(M)/m)*.15;n.beginPath(),n.moveTo(y.x,y.y),n.lineTo(E.x,E.y),n.strokeStyle=`rgba(15, 23, 42, ${U})`,n.lineWidth=1,n.stroke()}}if(c.isHovering){const T=y.x-c.x,E=y.y-c.y,b=T*T+E*E,P=145;if(b<P*P){const M=Math.sqrt(b),A=(1-M/P)*.32;n.beginPath(),n.moveTo(y.x,y.y),n.lineTo(c.x,c.y),n.strokeStyle=`rgba(2, 132, 199, ${A})`,n.lineWidth=1.2,n.stroke();const U=(1-M/P)*.55;y.x+=T/M*U,y.y+=E/M*U}}}for(let x=0;x<p;x++){const y=u[x];y.x+=y.vx,y.y+=y.vy,y.x<0?(y.x=0,y.vx*=-1):y.x>i&&(y.x=i,y.vx*=-1),y.y<0?(y.y=0,y.vy*=-1):y.y>r&&(y.y=r,y.vy*=-1),y.pulseVal+=y.pulseSpeed;const T=y.alpha*(.85+Math.sin(y.pulseVal)*.25);n.beginPath(),n.arc(y.x,y.y,y.radius,0,Math.PI*2),n.fillStyle=y.color,n.globalAlpha=T,n.fill(),y.hasCross&&(n.beginPath(),n.moveTo(y.x-4,y.y),n.lineTo(y.x+4,y.y),n.moveTo(y.x,y.y-4),n.lineTo(y.x,y.y+4),n.strokeStyle=y.color,n.lineWidth=1,n.stroke()),n.globalAlpha=1}o=requestAnimationFrame(_)};t.addEventListener("mousemove",p=>{const m=t.getBoundingClientRect();c.x=p.clientX-m.left,c.y=p.clientY-m.top,c.isHovering=!0},{passive:!0}),t.addEventListener("mouseleave",()=>{c.isHovering=!1,c.x=-1e3,c.y=-1e3}),new IntersectionObserver(p=>{p.forEach(m=>{m.isIntersecting?(l=!0,f(),cancelAnimationFrame(o),o=requestAnimationFrame(_)):(l=!1,cancelAnimationFrame(o))})},{threshold:.01}).observe(t),window.ResizeObserver&&new ResizeObserver(m=>{for(const v of m)v.contentRect.width>0&&v.contentRect.height>0&&(f(),l&&!o&&(o=requestAnimationFrame(_)))}).observe(t),window.addEventListener("resize",()=>{f()},{passive:!0}),f()}unlockTimeline(e=!0,t="sponsors-section"){document.body.classList.contains("timeline-unlocked")||(document.body.classList.add("timeline-unlocked"),He.playChime(660),window.dispatchEvent(new Event("resize"))),e&&setTimeout(()=>{const n=document.getElementById(t)||document.getElementById("sponsors-section")||document.getElementById("timeline-section");if(n){const i=n.offsetTop||window.innerHeight;window.scrollTo({top:i,behavior:"smooth"})}},50)}lockTimeline(){window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{document.body.classList.remove("timeline-unlocked")},550)}initScrollAndGestures(){window.addEventListener("wheel",i=>{if(document.body.classList.contains("timeline-unlocked")&&window.scrollY>40)return;const r=Date.now();r-this.lastScrollTime<this.scrollCooldown||Math.abs(i.deltaY)>18&&(this.lastScrollTime=r,this.isConvergenceActive&&this.endConvergence(),i.deltaY>0?this.stepStone(1):i.deltaY<0&&(document.body.classList.contains("timeline-unlocked")&&window.scrollY<=10?this.lockTimeline():this.stepStone(-1)))},{passive:!0});let e=0,t=0;window.addEventListener("touchstart",i=>{!i.touches||!i.touches[0]||(e=i.touches[0].clientX,t=i.touches[0].clientY)},{passive:!0}),window.addEventListener("touchend",i=>{if(!i.changedTouches||!i.changedTouches[0]||document.body.classList.contains("timeline-unlocked")&&window.scrollY>40)return;const r=e-i.changedTouches[0].clientX,a=t-i.changedTouches[0].clientY,o=Math.abs(r),l=Math.abs(a),c=Date.now();if(!(c-this.lastScrollTime<this.scrollCooldown)&&(l>35||o>40)){this.lastScrollTime=c,this.isConvergenceActive&&this.endConvergence();const h=l>=o&&a>0||o>l&&r>0,d=l>=o&&a<0||o>l&&r<0;h?this.stepStone(1):d&&(document.body.classList.contains("timeline-unlocked")&&window.scrollY<=10?this.lockTimeline():this.stepStone(-1))}},{passive:!0});const n=document.getElementById("scroll-btn");n&&n.addEventListener("click",()=>{He.playClick(),this.isConvergenceActive&&this.endConvergence(),this.currentIndex===Ht.length-1?this.unlockTimeline(!0):this.stepStone(1)})}stepStone(e){this.isConvergenceActive&&this.endConvergence();const t=Ht.length;if(this.currentIndex===t-1&&e>0){this.unlockTimeline(!0);return}let n=this.currentIndex+e;n>=t&&(n=0),n<0&&(n=t-1),He.playStoneChime(Ht[n].id),this.displayStone(n,!0)}displayStone(e,t=!0){if(this.isTransitioning&&t)return;this.isTransitioning=!0;const n=this.currentIndex;this.currentIndex=e;const i=Ht[e];document.documentElement.style.setProperty("--active-stone-color",i.colorHex),document.documentElement.style.setProperty("--active-stone-glow",i.colorHex+"55");const r=new Pe(i.colorHex),a=Math.round(r.r*255),o=Math.round(r.g*255),l=Math.round(r.b*255);document.documentElement.style.setProperty("--active-stone-rgb",`${a}, ${o}, ${l}`),it.to(this.stageLight.color,{r:new Pe(i.colorThree).r,g:new Pe(i.colorThree).g,b:new Pe(i.colorThree).b,duration:.8}),document.querySelectorAll(".pager-item").forEach((_,g)=>{_.classList.toggle("active",g===e),_.classList.toggle("passed",g<e)}),document.getElementById("stage-roman").textContent=i.roman;const h=document.getElementById("scroll-label");h&&(h.textContent=e===Ht.length-1?"EXPLORE SPONSORS & TIMELINE ↓":"SCROLL TO DISCOVER");const d=document.getElementById("info-card");t&&d.classList.add("animating"),setTimeout(()=>{this.renderCardContent(i),t&&d.classList.remove("animating")},t?150:0);const u=this.isMobile()?12:9.8;if(it.to(this.camera.position,{x:0,y:0,z:u,duration:.7,ease:"power2.out"}),this.stageLight){const _=new Pe(i.coreColor);it.to(this.stageLight.color,{r:_.r,g:_.g,b:_.b,duration:.6})}const f=this.isMobile()?.48:1;if(t){const _=this.stones[n],g=this.stones[e];it.to(this.bloomPass,{strength:.65,duration:.35,yoyo:!0,repeat:1,ease:"power2.out"}),_&&n!==e&&it.to(_.group.scale,{x:.001,y:.001,z:.001,duration:.55,ease:"back.in(1.4)",onComplete:()=>{_.group.visible=!1}}),this.stones.forEach((p,m)=>{m!==e&&m!==n&&(it.killTweensOf(p.group.scale),it.killTweensOf(p.group.position),p.group.scale.set(.001,.001,.001),p.group.position.set(0,0,0),p.group.visible=!1)}),g.group.visible=!0,g.group.position.set(0,0,0),g.group.rotation.y+=Math.PI*.5,it.fromTo(g.group.scale,{x:.1*f,y:.1*f,z:.1*f},{x:f,y:f,z:f,duration:.85,ease:"elastic.out(1, 0.75)",delay:.2,onComplete:()=>{this.isTransitioning=!1,this.stones.forEach((p,m)=>{m!==e&&(p.group.visible=!1,p.group.scale.set(.001,.001,.001))})}})}else this.stones.forEach((_,g)=>{_.group.visible=g===e,_.group.position.set(0,0,0),_.group.scale.set(g===e?f:.001,g===e?f:.001,g===e?f:.001)}),this.isTransitioning=!1}renderCardContent(e){const t=document.getElementById("card-index-tag");t&&(t.textContent=`${e.index} / 06`);const n=document.getElementById("card-marvel-theme");n&&(n.textContent=(e.marvelTheme||"SINGULARITY").toUpperCase());const i=document.getElementById("card-title");i&&(i.textContent=e.name),this.techText&&this.techText.update({text:e.name,accentColor:e.colorHex});const r=document.getElementById("stone-tech-text-container");r&&r.setAttribute("aria-label",e.name);const a=document.getElementById("card-domain");a&&(a.textContent=`${e.domain} // ${e.domainTagline||""}`);const o=document.getElementById("card-desc");o&&(o.textContent=e.description);const l=document.getElementById("btn-wield-stone");if(l&&(l.setAttribute("data-stone-id",e.id),l.style.setProperty("--btn-glow",e.colorHex)),this.moltenMetal){const c=e.index===1?"#FF9FFC":e.colorHex||"#FF9FFC";this.moltenMetal.updateColors("#5227FF",c,"#FFFFFF")}}triggerConvergence(e=!0){if(this.isConvergenceActive)return;this.isConvergenceActive=!0,document.body.classList.add("convergence-mode");const t=document.getElementById("btn-convergence");t&&t.classList.add("active"),e&&He.playConvergenceChord(),this.camera.view&&this.camera.view.enabled&&(this.camera.clearViewOffset(),this.camera.updateProjectionMatrix());const n=this.isMobile()?17:14;it.to(this.camera.position,{x:0,y:this.isMobile()?.2:.5,z:n,duration:1.8,ease:"power2.inOut"}),it.to(this.controls.target,{x:0,y:0,z:0,duration:1.8,ease:"power2.inOut",onUpdate:()=>{this.controls&&this.controls.update()}});const i=this.isMobile()?2.1:3.6,r=this.isMobile()?.38:.75;this.stones.forEach((a,o)=>{a.group.visible=!0,a.group.position.set(0,0,0),a.group.scale.set(.1,.1,.1);const l=o/this.stones.length*Math.PI*2,c=Math.cos(l)*i,h=Math.sin(l)*i;it.to(a.group.position,{x:c,y:h,z:0,duration:1.6,ease:"elastic.out(1, 0.75)"}),it.to(a.group.scale,{x:r,y:r,z:r,duration:1.2}),it.to(a.pointLight,{intensity:2.2,duration:1,yoyo:!0,repeat:1})}),it.killTweensOf(this.stonesContainer.rotation),it.to(this.stonesContainer.rotation,{z:this.stonesContainer.rotation.z+Math.PI*2,duration:3.5,ease:"power2.inOut",onComplete:()=>{this.endConvergence()}})}endConvergence(){if(!this.isConvergenceActive)return;this.isConvergenceActive=!1,document.body.classList.remove("convergence-mode");const e=document.getElementById("btn-convergence");e&&e.classList.remove("active"),this.updateCameraForViewport(),it.to(this.stonesContainer.rotation,{x:0,y:0,z:0,duration:1,ease:"power2.out"});const t=this.isMobile()?12:9.8,n=this.isMobile()?.48:1;it.to(this.camera.position,{x:0,y:0,z:t,duration:1.3,ease:"power3.out"}),it.to(this.controls.target,{x:0,y:0,z:0,duration:1.3,ease:"power3.out",onUpdate:()=>{this.controls&&this.controls.update()}}),this.stones.forEach((i,r)=>{it.killTweensOf(i.group.position),it.killTweensOf(i.group.scale),it.killTweensOf(i.pointLight),r===this.currentIndex?(i.group.visible=!0,i.pointLight.intensity=1.8,it.to(i.group.position,{x:0,y:0,z:0,duration:1,ease:"power3.out"}),it.to(i.group.scale,{x:n,y:n,z:n,duration:1,ease:"power3.out"})):(it.to(i.group.position,{x:0,y:0,z:0,duration:.8,ease:"power2.in"}),it.to(i.group.scale,{x:.001,y:.001,z:.001,duration:.8,ease:"power2.in",onComplete:()=>{i.group.visible=!1}}))})}pulseCurrentStone(){const e=this.stones[this.currentIndex];e&&(He.playEnergyPulse(),e.gemMat&&it.to(e.gemMat,{emissiveIntensity:1.15,duration:.25,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{e.gemMat.emissiveIntensity=.18}}),it.to(e.pointLight,{intensity:3.8,duration:.25,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{e.pointLight.intensity=1.8}}),it.to(e.coreMesh.scale,{x:1.4,y:1.4,z:1.4,duration:.35,yoyo:!0,repeat:1,ease:"power2.out"}),e.wireMesh&&e.wireMesh.material&&it.to(e.wireMesh.material,{opacity:.9,duration:.25,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{e.wireMesh.material.opacity=.45}}),it.to(this.bloomPass,{strength:.95,duration:.3,yoyo:!0,repeat:1,ease:"power2.out"}))}toggleWireframe(){this.isWireframe=!this.isWireframe,this.stones.forEach(t=>{t.gemMat.wireframe=this.isWireframe,t.wireMesh.visible=!this.isWireframe}),document.getElementById("btn-wireframe").classList.toggle("active",this.isWireframe),He.playClick()}initEventListeners(){window.addEventListener("resize",()=>{const r=window.innerWidth,a=window.innerHeight;this.camera.aspect=r/a,this.camera.updateProjectionMatrix(),this.renderer.setSize(r,a),this.composer.setSize(r,a),this.updateCameraForViewport(),this.controls.target.set(this.stoneStageX,this.stoneStageY,0);const o=this.isMobile()?.48:1,l=this.stones[this.currentIndex];l&&!this.isConvergenceActive&&l.group.scale.set(o,o,o)});const e=document.getElementById("btn-audio");e&&(e.addEventListener("click",()=>{const r=He.toggleMute();e.classList.toggle("audio-unmuted",r),e.classList.toggle("audio-muted",!r),e.classList.toggle("active",r);const a=document.getElementById("m-audio-status");a&&(a.textContent=r?"ACTIVE":"MUTED",a.style.color=r?"#00d2ff":"#a1a1aa")}),e.classList.add("audio-unmuted","active"),e.classList.remove("audio-muted")),document.getElementById("btn-wireframe").addEventListener("click",()=>{this.toggleWireframe()}),document.getElementById("btn-convergence").addEventListener("click",()=>{this.isConvergenceActive?this.endConvergence():this.triggerConvergence(!0)});const t=document.getElementById("btn-pulse");t&&t.addEventListener("click",()=>{this.pulseCurrentStone()});const n=document.getElementById("btn-sound-play");n&&n.addEventListener("click",()=>{He.playStoneChime(Ht[this.currentIndex].id)}),window.addEventListener("keydown",r=>{if(r.target.tagName==="INPUT"||r.target.tagName==="TEXTAREA")return;const a=r.key.toUpperCase();if(a>="1"&&a<="6"){const o=parseInt(a,10)-1;He.playStoneChime(Ht[o].id),this.displayStone(o,!0)}else if(r.code==="ArrowDown"||r.code==="PageDown")r.preventDefault(),this.stepStone(1);else if(r.code==="ArrowUp"||r.code==="PageUp")r.preventDefault(),this.stepStone(-1);else if(r.code==="Space")r.preventDefault(),this.isConvergenceActive?this.endConvergence():this.triggerConvergence(!0);else if(r.code==="Escape")this.isConvergenceActive&&this.endConvergence();else if(a==="P"||a==="S")this.pulseCurrentStone();else if(a==="W")this.toggleWireframe();else if(a==="M"){const o=He.toggleMute(),l=document.getElementById("btn-audio");l&&(l.classList.toggle("audio-unmuted",o),l.classList.toggle("audio-muted",!o),l.classList.toggle("active",o));const c=document.getElementById("m-audio-status");c&&(c.textContent=o?"ACTIVE":"MUTED",c.style.color=o?"#00d2ff":"#a1a1aa")}});const i=()=>{He.init(),He.ctx&&He.ctx.state==="suspended"&&He.ctx.resume(),window.removeEventListener("pointerdown",i),window.removeEventListener("keydown",i),window.removeEventListener("touchstart",i),window.removeEventListener("wheel",i),window.removeEventListener("click",i)};window.addEventListener("pointerdown",i,{once:!0,passive:!0}),window.addEventListener("keydown",i,{once:!0}),window.addEventListener("touchstart",i,{once:!0,passive:!0}),window.addEventListener("wheel",i,{once:!0,passive:!0}),window.addEventListener("click",i,{once:!0}),document.addEventListener("visibilitychange",()=>{document.hidden?He.suspend():He.resume()}),window.addEventListener("pagehide",()=>{He.destroy()}),window.addEventListener("beforeunload",()=>{He.destroy()})}animate(){requestAnimationFrame(()=>this.animate());const e=this.clock.getDelta(),t=this.clock.getElapsedTime();this.starfield&&(this.starfield.rotation.y=t*.006),this.stones.forEach((n,i)=>{n.group.visible&&(n.update(t,e),this.isConvergenceActive||(n.group.position.y=this.stoneStageY+Math.sin(t*2.8)*.16))}),this.controls.update(),this.composer.render()}}window.addEventListener("DOMContentLoaded",()=>{new VM});
