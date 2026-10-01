var Ed=Object.defineProperty;var Td=(s,e,t)=>e in s?Ed(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var ti=(s,e,t)=>Td(s,typeof e!="symbol"?e+"":e,t);import"./modulepreload-polyfill-B5Qt9EMX.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jo="160",Yi={ROTATE:0,DOLLY:1,PAN:2},ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bd=0,Il=1,wd=2,Gh=1,Ad=2,Xn=3,gi=0,jt=1,xn=2,Kn=0,vr=1,Bt=2,Ul=3,Nl=4,Cd=5,Di=100,Rd=101,Pd=102,Ol=103,Fl=104,Ld=200,Dd=201,Id=202,Ud=203,wo=204,Ao=205,Nd=206,Od=207,Fd=208,Bd=209,zd=210,kd=211,Gd=212,Hd=213,Vd=214,Wd=0,Xd=1,qd=2,sa=3,Yd=4,jd=5,$d=6,Kd=7,Hh=0,Zd=1,Jd=2,di=0,Vh=1,Wh=2,Xh=3,Qo=4,Qd=5,qh=6,Yh=300,Tr=301,br=302,aa=303,Co=304,ya=306,ns=1e3,Cn=1001,Ro=1002,Wt=1003,Bl=1004,Ia=1005,_n=1006,ef=1007,is=1008,fi=1009,tf=1010,nf=1011,el=1012,jh=1013,oi=1014,li=1015,Zn=1016,$h=1017,Kh=1018,Ni=1020,rf=1021,Rn=1023,sf=1024,af=1025,Oi=1026,wr=1027,of=1028,Zh=1029,lf=1030,Jh=1031,Qh=1033,Ua=33776,Na=33777,Oa=33778,Fa=33779,zl=35840,kl=35841,Gl=35842,Hl=35843,eu=36196,Vl=37492,Wl=37496,Xl=37808,ql=37809,Yl=37810,jl=37811,$l=37812,Kl=37813,Zl=37814,Jl=37815,Ql=37816,ec=37817,tc=37818,nc=37819,ic=37820,rc=37821,Ba=36492,sc=36494,ac=36495,cf=36283,oc=36284,lc=36285,cc=36286,tu=3e3,Fi=3001,hf=3200,uf=3201,nu=0,df=1,vn="",Dt="srgb",Jn="srgb-linear",tl="display-p3",Sa="display-p3-linear",oa="linear",ct="srgb",la="rec709",ca="p3",$i=7680,hc=519,ff=512,pf=513,mf=514,iu=515,gf=516,_f=517,xf=518,vf=519,uc=35044,dc="300 es",Po=1035,$n=2e3,ha=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zr=Math.PI/180,Lo=180/Math.PI;function fs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[s&255]+Ot[s>>8&255]+Ot[s>>16&255]+Ot[s>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function It(s,e,t){return Math.max(e,Math.min(t,s))}function Mf(s,e){return(s%e+e)%e}function za(s,e,t){return(1-t)*s+t*e}function fc(s){return(s&s-1)===0&&s!==0}function Do(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Gr(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const yf={DEG2RAD:Zr};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,i,r,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],v=i[1],x=i[4],S=i[7],w=i[2],b=i[5],T=i[8];return r[0]=o*g+a*v+l*w,r[3]=o*m+a*x+l*b,r[6]=o*p+a*S+l*T,r[1]=c*g+h*v+u*w,r[4]=c*m+h*x+u*b,r[7]=c*p+h*S+u*T,r[2]=d*g+f*v+_*w,r[5]=d*m+f*x+_*b,r[8]=d*p+f*S+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,_=t*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ka.makeScale(e,t)),this}rotate(e){return this.premultiply(ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ka=new je;function ru(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ua(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sf(){const s=ua("canvas");return s.style.display="block",s}const pc={};function Jr(s){s in pc||(pc[s]=!0,console.warn(s))}const mc=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gc=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ys={[Jn]:{transfer:oa,primaries:la,toReference:s=>s,fromReference:s=>s},[Dt]:{transfer:ct,primaries:la,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Sa]:{transfer:oa,primaries:ca,toReference:s=>s.applyMatrix3(gc),fromReference:s=>s.applyMatrix3(mc)},[tl]:{transfer:ct,primaries:ca,toReference:s=>s.convertSRGBToLinear().applyMatrix3(gc),fromReference:s=>s.applyMatrix3(mc).convertLinearToSRGB()}},Ef=new Set([Jn,Sa]),it={enabled:!0,_workingColorSpace:Jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ef.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=ys[e].toReference,i=ys[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ys[s].primaries},getTransfer:function(s){return s===vn?oa:ys[s].transfer}};function Mr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ga(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ki;class su{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ki===void 0&&(Ki=ua("canvas")),Ki.width=e.width,Ki.height=e.height;const n=Ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ua("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Mr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mr(t[n]/255)*255):t[n]=Mr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tf=0;class au{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=fs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ha(i[o].image)):r.push(Ha(i[o]))}else r=Ha(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ha(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?su.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bf=0;class $t extends Vi{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=Cn,i=Cn,r=_n,o=is,a=Rn,l=fi,c=$t.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=fs(),this.name="",this.source=new au(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Fi?Dt:vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ns:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ns:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dt?Fi:tu}set encoding(e){Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Fi?Dt:vn}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Yh;$t.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(f+1)/2,w=(p+1)/2,b=(h+d)/4,T=(u+g)/4,L=(_+m)/4;return x>S&&x>w?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=b/n,r=T/n):S>w?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=b/i,r=L/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=T/r,i=L/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wf extends Vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Jr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fi?Dt:vn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new $t(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new au(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends wf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ou extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Af extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=1-a;const p=l*d+c*f+h*_+u*g,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),b=Math.atan2(w,p*v);m=Math.sin(m*b)/w,a=Math.sin(a*b)/w}const S=a*v;if(l=l*m+d*S,c=c*m+f*S,h=h*m+_*S,u=u*m+g*S,m===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+h*u+l*f-c*d,e[t+1]=l*_+h*d+c*u-a*f,e[t+2]=c*_+h*f+a*d-l*u,e[t+3]=h*_-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_c.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Va.copy(this).projectOnVector(e),this.sub(Va)}reflect(e){return this.sub(Va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Va=new D,_c=new Hi;class ps{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ss.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(e.matrixWorld),this.union(Ss)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),Es.subVectors(this.max,Hr),Zi.subVectors(e.a,Hr),Ji.subVectors(e.b,Hr),Qi.subVectors(e.c,Hr),ni.subVectors(Ji,Zi),ii.subVectors(Qi,Ji),Ei.subVectors(Zi,Qi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ei.z,Ei.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ei.z,0,-Ei.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ei.y,Ei.x,0];return!Wa(t,Zi,Ji,Qi,Es)||(t=[1,0,0,0,1,0,0,0,1],!Wa(t,Zi,Ji,Qi,Es))?!1:(Ts.crossVectors(ni,ii),t=[Ts.x,Ts.y,Ts.z],Wa(t,Zi,Ji,Qi,Es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new D,new D,new D,new D,new D,new D,new D,new D],Sn=new D,Ss=new ps,Zi=new D,Ji=new D,Qi=new D,ni=new D,ii=new D,Ei=new D,Hr=new D,Es=new D,Ts=new D,Ti=new D;function Wa(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ti.fromArray(s,r);const a=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Cf=new ps,Vr=new D,Xa=new D;class ms{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Vr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Xa)),this.expandByPoint(Vr.copy(e.center).sub(Xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new D,qa=new D,bs=new D,ri=new D,Ya=new D,ws=new D,ja=new D;class gs{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){qa.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(qa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(bs),a=ri.dot(this.direction),l=-ri.dot(bs),c=ri.lengthSq(),h=Math.abs(1-o*o);let u,d,f,_;if(h>0)if(u=o*l-a,d=o*a-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(qa).addScaledVector(bs,d),f}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,r){Ya.subVectors(t,e),ws.subVectors(n,e),ja.crossVectors(Ya,ws);let o=this.direction.dot(ja),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);const l=a*this.direction.dot(ws.crossVectors(ri,ws));if(l<0)return null;const c=a*this.direction.dot(Ya.cross(ri));if(c<0||l+c>o)return null;const h=-a*ri.dot(ja);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,_,g,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,_,g,m)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/er.setFromMatrixColumn(e,0).length(),r=1/er.setFromMatrixColumn(e,1).length(),o=1/er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d+g*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=_*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+_,t[10]=d-g*u}else if(e.order==="XZY"){const d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rf,e,Pf)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),si.crossVectors(n,nn),si.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),si.crossVectors(n,nn)),si.normalize(),As.crossVectors(nn,si),i[0]=si.x,i[4]=As.x,i[8]=nn.x,i[1]=si.y,i[5]=As.y,i[9]=nn.y,i[2]=si.z,i[6]=As.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],v=n[3],x=n[7],S=n[11],w=n[15],b=i[0],T=i[4],L=i[8],M=i[12],A=i[1],O=i[5],X=i[9],K=i[13],P=i[2],N=i[6],F=i[10],k=i[14],q=i[3],B=i[7],$=i[11],ee=i[15];return r[0]=o*b+a*A+l*P+c*q,r[4]=o*T+a*O+l*N+c*B,r[8]=o*L+a*X+l*F+c*$,r[12]=o*M+a*K+l*k+c*ee,r[1]=h*b+u*A+d*P+f*q,r[5]=h*T+u*O+d*N+f*B,r[9]=h*L+u*X+d*F+f*$,r[13]=h*M+u*K+d*k+f*ee,r[2]=_*b+g*A+m*P+p*q,r[6]=_*T+g*O+m*N+p*B,r[10]=_*L+g*X+m*F+p*$,r[14]=_*M+g*K+m*k+p*ee,r[3]=v*b+x*A+S*P+w*q,r[7]=v*T+x*O+S*N+w*B,r[11]=v*L+x*X+S*F+w*$,r[15]=v*M+x*K+S*k+w*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+g*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],v=u*m*c-g*d*c+g*l*f-a*m*f-u*l*p+a*d*p,x=_*d*c-h*m*c-_*l*f+o*m*f+h*l*p-o*d*p,S=h*g*c-_*u*c+_*a*f-o*g*f-h*a*p+o*u*p,w=_*u*l-h*g*l-_*a*d+o*g*d+h*a*m-o*u*m,b=t*v+n*x+i*S+r*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=v*T,e[1]=(g*d*r-u*m*r-g*i*f+n*m*f+u*i*p-n*d*p)*T,e[2]=(a*m*r-g*l*r+g*i*c-n*m*c-a*i*p+n*l*p)*T,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*T,e[4]=x*T,e[5]=(h*m*r-_*d*r+_*i*f-t*m*f-h*i*p+t*d*p)*T,e[6]=(_*l*r-o*m*r-_*i*c+t*m*c+o*i*p-t*l*p)*T,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*f+t*l*f)*T,e[8]=S*T,e[9]=(_*u*r-h*g*r-_*n*f+t*g*f+h*n*p-t*u*p)*T,e[10]=(o*g*r-_*a*r+_*n*c-t*g*c-o*n*p+t*a*p)*T,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*T,e[12]=w*T,e[13]=(h*g*i-_*u*i+_*n*d-t*g*d-h*n*m+t*u*m)*T,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*T,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,_=r*u,g=o*h,m=o*u,p=a*u,v=l*c,x=l*h,S=l*u,w=n.x,b=n.y,T=n.z;return i[0]=(1-(g+p))*w,i[1]=(f+S)*w,i[2]=(_-x)*w,i[3]=0,i[4]=(f-S)*b,i[5]=(1-(d+p))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(_+x)*T,i[9]=(m-v)*T,i[10]=(1-(d+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=er.set(i[0],i[1],i[2]).length();const o=er.set(i[4],i[5],i[6]).length(),a=er.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);const c=1/r,h=1/o,u=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=$n){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,_;if(a===$n)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ha)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=$n){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*c,f=(n+i)*h;let _,g;if(a===$n)_=(o+r)*u,g=-2*u;else if(a===ha)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const er=new D,En=new xt,Rf=new D(0,0,0),Pf=new D(1,1,1),si=new D,As=new D,nn=new D,xc=new xt,vc=new Hi;class Ea{constructor(e=0,t=0,n=0,i=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vc.setFromEuler(this),this.setFromQuaternion(vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class nl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lf=0;const Mc=new D,tr=new Hi,Gn=new xt,Cs=new D,Wr=new D,Df=new D,If=new Hi,yc=new D(1,0,0),Sc=new D(0,1,0),Ec=new D(0,0,1),Uf={type:"added"},Nf={type:"removed"};class Rt extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new D,t=new Ea,n=new Hi,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xt},normalMatrix:{value:new je}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(yc,e)}rotateY(e){return this.rotateOnAxis(Sc,e)}rotateZ(e){return this.rotateOnAxis(Ec,e)}translateOnAxis(e,t){return Mc.copy(e).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yc,e)}translateY(e){return this.translateOnAxis(Sc,e)}translateZ(e){return this.translateOnAxis(Ec,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cs.copy(e):Cs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Wr,Cs,this.up):Gn.lookAt(Cs,Wr,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),tr.setFromRotationMatrix(Gn),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Uf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,Df),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,If,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Rt.DEFAULT_UP=new D(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new D,Hn=new D,$a=new D,Vn=new D,nr=new D,ir=new D,Tc=new D,Ka=new D,Za=new D,Ja=new D;let Rs=!1;class an{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Tn.subVectors(e,t),i.cross(Tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Tn.subVectors(i,t),Hn.subVectors(n,t),$a.subVectors(e,t);const o=Tn.dot(Tn),a=Tn.dot(Hn),l=Tn.dot($a),c=Hn.dot(Hn),h=Hn.dot($a),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getUV(e,t,n,i,r,o,a,l){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static isFrontFacing(e,t,n,i){return Tn.subVectors(n,t),Hn.subVectors(e,t),Tn.cross(Hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Tn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),an.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;nr.subVectors(i,n),ir.subVectors(r,n),Ka.subVectors(e,n);const l=nr.dot(Ka),c=ir.dot(Ka);if(l<=0&&c<=0)return t.copy(n);Za.subVectors(e,i);const h=nr.dot(Za),u=ir.dot(Za);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(nr,o);Ja.subVectors(e,r);const f=nr.dot(Ja),_=ir.dot(Ja);if(_>=0&&f<=_)return t.copy(r);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(ir,a);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Tc.subVectors(r,i),a=(u-h)/(u-h+(f-_)),t.copy(i).addScaledVector(Tc,a);const p=1/(m+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(nr,o).addScaledVector(ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function Qa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=Mf(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Qa(o,r,e+1/3),this.g=Qa(o,r,e),this.b=Qa(o,r,e-1/3)}return it.toWorkingColorSpace(this,i),this}setStyle(e,t=Dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const n=lu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return it.fromWorkingColorSpace(Ft.copy(this),e),Math.round(It(Ft.r*255,0,255))*65536+Math.round(It(Ft.g*255,0,255))*256+Math.round(It(Ft.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Ft.copy(this),t);const n=Ft.r,i=Ft.g,r=Ft.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Dt){it.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,i=Ft.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Ps);const n=za(ai.h,Ps.h,t),i=za(ai.s,Ps.s,t),r=za(ai.l,Ps.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ce;Ce.NAMES=lu;let Of=0;class Wi extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=vr,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=Ao,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ao&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class An extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new D,Ls=new be;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ls.fromBufferAttribute(this,t),Ls.applyMatrix3(e),this.setXY(t,Ls.x,Ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uc&&(e.usage=this.usage),e}}class cu extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hu extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rt extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ff=0;const mn=new xt,eo=new Rt,rr=new D,rn=new ps,Xr=new ps,Ct=new D;class Mt extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ru(e)?hu:cu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return eo.lookAt(e),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(rn.min,Xr.min),rn.expandByPoint(Ct),Ct.addVectors(rn.max,Xr.max),rn.expandByPoint(Ct)):(rn.expandByPoint(Xr.min),rn.expandByPoint(Xr.max))}rn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ct.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ct.fromBufferAttribute(a,c),l&&(rr.fromBufferAttribute(e,c),Ct.add(rr)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<a;A++)c[A]=new D,h[A]=new D;const u=new D,d=new D,f=new D,_=new be,g=new be,m=new be,p=new D,v=new D;function x(A,O,X){u.fromArray(i,A*3),d.fromArray(i,O*3),f.fromArray(i,X*3),_.fromArray(o,A*2),g.fromArray(o,O*2),m.fromArray(o,X*2),d.sub(u),f.sub(u),g.sub(_),m.sub(_);const K=1/(g.x*m.y-m.x*g.y);isFinite(K)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(K),v.copy(f).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(K),c[A].add(p),c[O].add(p),c[X].add(p),h[A].add(v),h[O].add(v),h[X].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let A=0,O=S.length;A<O;++A){const X=S[A],K=X.start,P=X.count;for(let N=K,F=K+P;N<F;N+=3)x(n[N+0],n[N+1],n[N+2])}const w=new D,b=new D,T=new D,L=new D;function M(A){T.fromArray(r,A*3),L.copy(T);const O=c[A];w.copy(O),w.sub(T.multiplyScalar(T.dot(O))).normalize(),b.crossVectors(L,O);const K=b.dot(h[A])<0?-1:1;l[A*4]=w.x,l[A*4+1]=w.y,l[A*4+2]=w.z,l[A*4+3]=K}for(let A=0,O=S.length;A<O;++A){const X=S[A],K=X.start,P=X.count;for(let N=K,F=K+P;N<F;N+=3)M(n[N+0]),M(n[N+1]),M(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new Kt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bc=new xt,bi=new gs,Ds=new ms,wc=new D,sr=new D,ar=new D,or=new D,to=new D,Is=new D,Us=new be,Ns=new be,Os=new be,Ac=new D,Cc=new D,Rc=new D,Fs=new D,Bs=new D;class St extends Rt{constructor(e=new Mt,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Is.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(to.fromBufferAttribute(u,e),o?Is.addScaledVector(to,h):Is.addScaledVector(to.sub(t),h))}t.add(Is)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(r),bi.copy(e.ray).recast(e.near),!(Ds.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Ds,wc)===null||bi.origin.distanceToSquared(wc)>(e.far-e.near)**2))&&(bc.copy(r).invert(),bi.copy(e.ray).applyMatrix4(bc),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,w=x;S<w;S+=3){const b=a.getX(S),T=a.getX(S+1),L=a.getX(S+2);i=zs(this,p,e,n,c,h,u,b,T,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);i=zs(this,o,e,n,c,h,u,v,x,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,w=x;S<w;S+=3){const b=S,T=S+1,L=S+2;i=zs(this,p,e,n,c,h,u,b,T,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=m,x=m+1,S=m+2;i=zs(this,o,e,n,c,h,u,v,x,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Bf(s,e,t,n,i,r,o,a){let l;if(e.side===jt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===gi,a),l===null)return null;Bs.copy(a),Bs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Bs);return c<t.near||c>t.far?null:{distance:c,point:Bs.clone(),object:s}}function zs(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,sr),s.getVertexPosition(l,ar),s.getVertexPosition(c,or);const h=Bf(s,e,t,n,sr,ar,or,Fs);if(h){i&&(Us.fromBufferAttribute(i,a),Ns.fromBufferAttribute(i,l),Os.fromBufferAttribute(i,c),h.uv=an.getInterpolation(Fs,sr,ar,or,Us,Ns,Os,new be)),r&&(Us.fromBufferAttribute(r,a),Ns.fromBufferAttribute(r,l),Os.fromBufferAttribute(r,c),h.uv1=an.getInterpolation(Fs,sr,ar,or,Us,Ns,Os,new be),h.uv2=h.uv1),o&&(Ac.fromBufferAttribute(o,a),Cc.fromBufferAttribute(o,l),Rc.fromBufferAttribute(o,c),h.normal=an.getInterpolation(Fs,sr,ar,or,Ac,Cc,Rc,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new D,materialIndex:0};an.getNormal(sr,ar,or,u.normal),h.face=u}return h}class Ur extends Mt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function _(g,m,p,v,x,S,w,b,T,L,M){const A=S/T,O=w/L,X=S/2,K=w/2,P=b/2,N=T+1,F=L+1;let k=0,q=0;const B=new D;for(let $=0;$<F;$++){const ee=$*O-K;for(let ie=0;ie<N;ie++){const j=ie*A-X;B[g]=j*v,B[m]=ee*x,B[p]=P,c.push(B.x,B.y,B.z),B[g]=0,B[m]=0,B[p]=b>0?1:-1,h.push(B.x,B.y,B.z),u.push(ie/T),u.push(1-$/L),k+=1}}for(let $=0;$<L;$++)for(let ee=0;ee<T;ee++){const ie=d+ee+N*$,j=d+ee+N*($+1),J=d+(ee+1)+N*($+1),ae=d+(ee+1)+N*$;l.push(ie,j,ae),l.push(j,J,ae),q+=6}a.addGroup(f,q,M),f+=q,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ht(s){const e={};for(let t=0;t<s.length;t++){const n=Ar(s[t]);for(const i in n)e[i]=n[i]}return e}function zf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function uu(s){return s.getRenderTarget()===null?s.outputColorSpace:it.workingColorSpace}const rs={clone:Ar,merge:Ht};var kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yt extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kf,this.fragmentShader=Gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=zf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class du extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends du{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const lr=-90,cr=1;class Hf extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new on(lr,cr,e,t);i.layers=this.layers,this.add(i);const r=new on(lr,cr,e,t);r.layers=this.layers,this.add(r);const o=new on(lr,cr,e,t);o.layers=this.layers,this.add(o);const a=new on(lr,cr,e,t);a.layers=this.layers,this.add(a);const l=new on(lr,cr,e,t);l.layers=this.layers,this.add(l);const c=new on(lr,cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class fu extends $t{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Tr,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vf extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Jr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Fi?Dt:vn),this.texture=new fu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ur(5,5,5),r=new Yt({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Kn});r.uniforms.tEquirect.value=t;const o=new St(i,r),a=t.minFilter;return t.minFilter===is&&(t.minFilter=_n),new Hf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const no=new D,Wf=new D,Xf=new je;class Yn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=no.subVectors(n,t).cross(Wf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(no),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xf.getNormalMatrix(e),i=this.coplanarPoint(no).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new ms,ks=new D;class il{constructor(e=new Yn,t=new Yn,n=new Yn,i=new Yn,r=new Yn,o=new Yn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],v=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-r,d-c,m-f,S-p).normalize(),n[1].setComponents(l+r,d+c,m+f,S+p).normalize(),n[2].setComponents(l+o,d+h,m+_,S+v).normalize(),n[3].setComponents(l-o,d-h,m-_,S-v).normalize(),n[4].setComponents(l-a,d-u,m-g,S-x).normalize(),t===$n)n[5].setComponents(l+a,d+u,m+g,S+x).normalize();else if(t===ha)n[5].setComponents(a,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ks.x=i.normal.x>0?e.max.x:e.min.x,ks.y=i.normal.y>0?e.max.y:e.min.y,ks.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function qf(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=u.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=s.SHORT;else if(u instanceof Uint32Array)g=s.UNSIGNED_INT;else if(u instanceof Int32Array)g=s.INT;else if(u instanceof Int8Array)g=s.BYTE;else if(u instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){const d=h.array,f=h._updateRange,_=h.updateRanges;if(s.bindBuffer(u,c),f.count===-1&&_.length===0&&s.bufferSubData(u,0,d),_.length!==0){for(let g=0,m=_.length;g<m;g++){const p=_[g];t?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class Ta extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const v=p*d-o;for(let x=0;x<c;x++){const S=x*u-r;_.push(S,-v,0),g.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const x=v+c*p,S=v+c*(p+1),w=v+1+c*(p+1),b=v+1+c*p;f.push(x,S,b),f.push(S,w,b)}this.setIndex(f),this.setAttribute("position",new rt(_,3)),this.setAttribute("normal",new rt(g,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yf=`#ifdef USE_ALPHAHASH
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
#endif`,ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tp=`#ifdef USE_BATCHING
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
#endif`,em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
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
}`,eg=`#define DISTANCE
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
}`,tg=`#define DISTANCE
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
}`,qe={alphahash_fragment:Yf,alphahash_pars_fragment:jf,alphamap_fragment:$f,alphamap_pars_fragment:Kf,alphatest_fragment:Zf,alphatest_pars_fragment:Jf,aomap_fragment:Qf,aomap_pars_fragment:ep,batching_pars_vertex:tp,batching_vertex:np,begin_vertex:ip,beginnormal_vertex:rp,bsdfs:sp,iridescence_fragment:ap,bumpmap_pars_fragment:op,clipping_planes_fragment:lp,clipping_planes_pars_fragment:cp,clipping_planes_pars_vertex:hp,clipping_planes_vertex:up,color_fragment:dp,color_pars_fragment:fp,color_pars_vertex:pp,color_vertex:mp,common:gp,cube_uv_reflection_fragment:_p,defaultnormal_vertex:xp,displacementmap_pars_vertex:vp,displacementmap_vertex:Mp,emissivemap_fragment:yp,emissivemap_pars_fragment:Sp,colorspace_fragment:Ep,colorspace_pars_fragment:Tp,envmap_fragment:bp,envmap_common_pars_fragment:wp,envmap_pars_fragment:Ap,envmap_pars_vertex:Cp,envmap_physical_pars_fragment:kp,envmap_vertex:Rp,fog_vertex:Pp,fog_pars_vertex:Lp,fog_fragment:Dp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Up,lightmap_fragment:Np,lightmap_pars_fragment:Op,lights_lambert_fragment:Fp,lights_lambert_pars_fragment:Bp,lights_pars_begin:zp,lights_toon_fragment:Gp,lights_toon_pars_fragment:Hp,lights_phong_fragment:Vp,lights_phong_pars_fragment:Wp,lights_physical_fragment:Xp,lights_physical_pars_fragment:qp,lights_fragment_begin:Yp,lights_fragment_maps:jp,lights_fragment_end:$p,logdepthbuf_fragment:Kp,logdepthbuf_pars_fragment:Zp,logdepthbuf_pars_vertex:Jp,logdepthbuf_vertex:Qp,map_fragment:em,map_pars_fragment:tm,map_particle_fragment:nm,map_particle_pars_fragment:im,metalnessmap_fragment:rm,metalnessmap_pars_fragment:sm,morphcolor_vertex:am,morphnormal_vertex:om,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:hm,normal_fragment_maps:um,normal_pars_fragment:dm,normal_pars_vertex:fm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:xm,iridescence_pars_fragment:vm,opaque_fragment:Mm,packing:ym,premultiplied_alpha_fragment:Sm,project_vertex:Em,dithering_fragment:Tm,dithering_pars_fragment:bm,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Cm,shadowmap_pars_vertex:Rm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Lm,skinbase_vertex:Dm,skinning_pars_vertex:Im,skinning_vertex:Um,skinnormal_vertex:Nm,specularmap_fragment:Om,specularmap_pars_fragment:Fm,tonemapping_fragment:Bm,tonemapping_pars_fragment:zm,transmission_fragment:km,transmission_pars_fragment:Gm,uv_pars_fragment:Hm,uv_pars_vertex:Vm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:qm,background_frag:Ym,backgroundCube_vert:jm,backgroundCube_frag:$m,cube_vert:Km,cube_frag:Zm,depth_vert:Jm,depth_frag:Qm,distanceRGBA_vert:eg,distanceRGBA_frag:tg,equirect_vert:ng,equirect_frag:ig,linedashed_vert:rg,linedashed_frag:sg,meshbasic_vert:ag,meshbasic_frag:og,meshlambert_vert:lg,meshlambert_frag:cg,meshmatcap_vert:hg,meshmatcap_frag:ug,meshnormal_vert:dg,meshnormal_frag:fg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:_g,meshtoon_vert:xg,meshtoon_frag:vg,points_vert:Mg,points_frag:yg,shadow_vert:Sg,shadow_frag:Eg,sprite_vert:Tg,sprite_frag:bg},he={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},In={basic:{uniforms:Ht([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ht([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ce(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ht([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ht([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ht([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ce(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ht([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ht([he.points,he.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ht([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ht([he.common,he.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ht([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ht([he.sprite,he.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Ht([he.common,he.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Ht([he.lights,he.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};In.physical={uniforms:Ht([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Gs={r:0,b:0,g:0};function wg(s,e,t,n,i,r,o){const a=new Ce(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),v=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ya)?(h===void 0&&(h=new St(new Ur(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:Ar(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=it.getTransfer(x.colorSpace)!==ct,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new St(new Ta(2,2),new Yt({name:"BackgroundMaterial",uniforms:Ar(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=it.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Gs,uu(s)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function Ag(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,h=!1;function u(P,N,F,k,q){let B=!1;if(o){const $=g(k,F,N);c!==$&&(c=$,f(c.object)),B=p(P,k,F,q),B&&v(P,k,F,q)}else{const $=N.wireframe===!0;(c.geometry!==k.id||c.program!==F.id||c.wireframe!==$)&&(c.geometry=k.id,c.program=F.id,c.wireframe=$,B=!0)}q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(B||h)&&(h=!1,L(P,N,F,k),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function g(P,N,F){const k=F.wireframe===!0;let q=a[P.id];q===void 0&&(q={},a[P.id]=q);let B=q[N.id];B===void 0&&(B={},q[N.id]=B);let $=B[k];return $===void 0&&($=m(d()),B[k]=$),$}function m(P){const N=[],F=[],k=[];for(let q=0;q<i;q++)N[q]=0,F[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:k,object:P,attributes:{},index:null}}function p(P,N,F,k){const q=c.attributes,B=N.attributes;let $=0;const ee=F.getAttributes();for(const ie in ee)if(ee[ie].location>=0){const J=q[ie];let ae=B[ie];if(ae===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;$++}return c.attributesNum!==$||c.index!==k}function v(P,N,F,k){const q={},B=N.attributes;let $=0;const ee=F.getAttributes();for(const ie in ee)if(ee[ie].location>=0){let J=B[ie];J===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));const ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),q[ie]=ae,$++}c.attributes=q,c.attributesNum=$,c.index=k}function x(){const P=c.newAttributes;for(let N=0,F=P.length;N<F;N++)P[N]=0}function S(P){w(P,0)}function w(P,N){const F=c.newAttributes,k=c.enabledAttributes,q=c.attributeDivisors;F[P]=1,k[P]===0&&(s.enableVertexAttribArray(P),k[P]=1),q[P]!==N&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),q[P]=N)}function b(){const P=c.newAttributes,N=c.enabledAttributes;for(let F=0,k=N.length;F<k;F++)N[F]!==P[F]&&(s.disableVertexAttribArray(F),N[F]=0)}function T(P,N,F,k,q,B,$){$===!0?s.vertexAttribIPointer(P,N,F,q,B):s.vertexAttribPointer(P,N,F,k,q,B)}function L(P,N,F,k){if(n.isWebGL2===!1&&(P.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const q=k.attributes,B=F.getAttributes(),$=N.defaultAttributeValues;for(const ee in B){const ie=B[ee];if(ie.location>=0){let j=q[ee];if(j===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),j!==void 0){const J=j.normalized,ae=j.itemSize,Ee=t.get(j);if(Ee===void 0)continue;const Me=Ee.buffer,De=Ee.type,Re=Ee.bytesPerElement,xe=n.isWebGL2===!0&&(De===s.INT||De===s.UNSIGNED_INT||j.gpuType===jh);if(j.isInterleavedBufferAttribute){const ze=j.data,G=ze.stride,At=j.offset;if(ze.isInstancedInterleavedBuffer){for(let oe=0;oe<ie.locationSize;oe++)w(ie.location+oe,ze.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let oe=0;oe<ie.locationSize;oe++)S(ie.location+oe);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let oe=0;oe<ie.locationSize;oe++)T(ie.location+oe,ae/ie.locationSize,De,J,G*Re,(At+ae/ie.locationSize*oe)*Re,xe)}else{if(j.isInstancedBufferAttribute){for(let ze=0;ze<ie.locationSize;ze++)w(ie.location+ze,j.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ze=0;ze<ie.locationSize;ze++)S(ie.location+ze);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let ze=0;ze<ie.locationSize;ze++)T(ie.location+ze,ae/ie.locationSize,De,J,ae*Re,ae/ie.locationSize*ze*Re,xe)}}else if($!==void 0){const J=$[ee];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(ie.location,J);break;case 3:s.vertexAttrib3fv(ie.location,J);break;case 4:s.vertexAttrib4fv(ie.location,J);break;default:s.vertexAttrib1fv(ie.location,J)}}}}b()}function M(){X();for(const P in a){const N=a[P];for(const F in N){const k=N[F];for(const q in k)_(k[q].object),delete k[q];delete N[F]}delete a[P]}}function A(P){if(a[P.id]===void 0)return;const N=a[P.id];for(const F in N){const k=N[F];for(const q in k)_(k[q].object),delete k[q];delete N[F]}delete a[P.id]}function O(P){for(const N in a){const F=a[N];if(F[P.id]===void 0)continue;const k=F[P.id];for(const q in k)_(k[q].object),delete k[q];delete F[P.id]}}function X(){K(),h=!0,c!==l&&(c=l,f(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:X,resetDefaultState:K,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:S,disableUnusedAttributes:b}}function Cg(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,_;if(i)f=s,_="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Rg(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,S=o||e.has("OES_texture_float"),w=x&&S,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:b}}function Pg(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Yn,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,x=v*4;let S=p.clippingState||null;l.value=S,S=h(_,d,x,f);for(let w=0;w!==x;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=f;x!==g;++x,S+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Lg(s){let e=new WeakMap;function t(o,a){return a===aa?o.mapping=Tr:a===Co&&(o.mapping=br),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===aa||a===Co)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Vf(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class rl extends du{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pr=4,Pc=[.125,.215,.35,.446,.526,.582],Ii=20,io=new rl,Lc=new Ce;let ro=null,so=0,ao=0;const Pi=(1+Math.sqrt(5))/2,hr=1/Pi,Dc=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Pi,hr),new D(0,Pi,-hr),new D(hr,0,Pi),new D(-hr,0,Pi),new D(Pi,hr,0),new D(-Pi,hr,0)];class Io{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro,so,ao),e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Zn,format:Rn,colorSpace:Jn,depthBuffer:!1},i=Ic(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ic(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dg(r)),this._blurMaterial=Ig(r,e,t)}return i}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,io)}_sceneToCubeUV(e,t,n,i){const a=new on(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Lc),h.toneMapping=di,h.autoClear=!1;const f=new An({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),_=new St(new Ur,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Lc),g=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Hs(i,v*x,p>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Tr||e.mapping===br;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Hs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,io)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Dc[(i-1)%Dc.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new St(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ii-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);const p=[];let v=0;for(let T=0;T<Ii;++T){const L=T/g,M=Math.exp(-L*L/2);p.push(M),T===0?v+=M:T<m&&(v+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const S=this._sizeLods[i],w=3*S*(i>x-pr?i-x+pr:0),b=4*(this._cubeSize-S);Hs(t,w,b,3*S,2*S),l.setRenderTarget(t),l.render(u,io)}}function Dg(s){const e=[],t=[],n=[];let i=s;const r=s-pr+1+Pc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-pr?l=Pc[o-s+pr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*f),x=new Float32Array(m*_*f),S=new Float32Array(p*_*f);for(let b=0;b<f;b++){const T=b%3*2/3-1,L=b>2?0:-1,M=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];v.set(M,g*_*b),x.set(d,m*_*b);const A=[b,b,b,b,b,b];S.set(A,p*_*b)}const w=new Mt;w.setAttribute("position",new Kt(v,g)),w.setAttribute("uv",new Kt(x,m)),w.setAttribute("faceIndex",new Kt(S,p)),e.push(w),i>pr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ic(s,e,t){const n=new Pn(s,e,t);return n.texture.mapping=ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ig(s,e,t){const n=new Float32Array(Ii),i=new D(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sl(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Uc(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Nc(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function sl(){return`

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
	`}function Ug(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===aa||l===Co,h=l===Tr||l===br;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Io(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Io(s));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ng(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Og(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)e.update(d[_],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let x=0,S=v.length;x<S;x+=3){const w=v[x+0],b=v[x+1],T=v[x+2];d.push(w,b,b,T,T,w)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const w=x+0,b=x+1,T=x+2;d.push(w,b,b,T,T,w)}}else return;const m=new(ru(d)?hu:cu)(d,1);m.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Fg(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,_){s.drawElements(r,_,a,f*l),t.update(_,r,1)}function u(f,_,g){if(g===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,_,a,f*l,g),t.update(_,r,g)}function d(f,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<g;p++)this.render(f[p]/l,_[p]);else{m.multiDrawElementsWEBGL(r,_,0,a,f,0,g);let p=0;for(let v=0;v<g;v++)p+=_[v];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Bg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zg(s,e){return s[0]-e[0]}function kg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Gg(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new dt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=f!==void 0?f.length:0;let g=r.get(h);if(g===void 0||g.count!==_){let P=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",P)};g!==void 0&&g.texture.dispose();const v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let L=0;v===!0&&(L=1),x===!0&&(L=2),S===!0&&(L=3);let M=h.attributes.position.count*L,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const O=new Float32Array(M*A*4*_),X=new ou(O,M,A,_);X.type=li,X.needsUpdate=!0;const K=L*4;for(let N=0;N<_;N++){const F=w[N],k=b[N],q=T[N],B=M*A*4*N;for(let $=0;$<F.count;$++){const ee=$*K;v===!0&&(o.fromBufferAttribute(F,$),O[B+ee+0]=o.x,O[B+ee+1]=o.y,O[B+ee+2]=o.z,O[B+ee+3]=0),x===!0&&(o.fromBufferAttribute(k,$),O[B+ee+4]=o.x,O[B+ee+5]=o.y,O[B+ee+6]=o.z,O[B+ee+7]=0),S===!0&&(o.fromBufferAttribute(q,$),O[B+ee+8]=o.x,O[B+ee+9]=o.y,O[B+ee+10]=o.z,O[B+ee+11]=q.itemSize===4?o.w:1)}}g={count:_,texture:X,size:new be(M,A)},r.set(h,g),h.addEventListener("dispose",P)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];const p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const f=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==f){_=[];for(let x=0;x<f;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<f;x++){const S=_[x];S[0]=x,S[1]=d[x]}_.sort(kg);for(let x=0;x<8;x++)x<f&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(zg);const g=h.morphAttributes.position,m=h.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const S=a[x],w=S[0],b=S[1];w!==Number.MAX_SAFE_INTEGER&&b?(g&&h.getAttribute("morphTarget"+x)!==g[w]&&h.setAttribute("morphTarget"+x,g[w]),m&&h.getAttribute("morphNormal"+x)!==m[w]&&h.setAttribute("morphNormal"+x,m[w]),i[x]=b,p+=b):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const v=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Hg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class mu extends $t{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Oi,h!==Oi&&h!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Oi&&(n=oi),n===void 0&&h===wr&&(n=Ni),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const gu=new $t,_u=new mu(1,1);_u.compareFunction=iu;const xu=new ou,vu=new Af,Mu=new fu,Oc=[],Fc=[],Bc=new Float32Array(16),zc=new Float32Array(9),kc=new Float32Array(4);function Nr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Oc[i];if(r===void 0&&(r=new Float32Array(i),Oc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function wt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ba(s,e){let t=Fc[e];t===void 0&&(t=new Int32Array(e),Fc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Vg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Wg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2fv(this.addr,e),wt(t,e)}}function Xg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;s.uniform3fv(this.addr,e),wt(t,e)}}function qg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4fv(this.addr,e),wt(t,e)}}function Yg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;kc.set(n),s.uniformMatrix2fv(this.addr,!1,kc),wt(t,n)}}function jg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;zc.set(n),s.uniformMatrix3fv(this.addr,!1,zc),wt(t,n)}}function $g(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;Bc.set(n),s.uniformMatrix4fv(this.addr,!1,Bc),wt(t,n)}}function Kg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Zg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2iv(this.addr,e),wt(t,e)}}function Jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3iv(this.addr,e),wt(t,e)}}function Qg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4iv(this.addr,e),wt(t,e)}}function e_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function t_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2uiv(this.addr,e),wt(t,e)}}function n_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3uiv(this.addr,e),wt(t,e)}}function i_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4uiv(this.addr,e),wt(t,e)}}function r_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?_u:gu;t.setTexture2D(e||r,i)}function s_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vu,i)}function a_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Mu,i)}function o_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xu,i)}function l_(s){switch(s){case 5126:return Vg;case 35664:return Wg;case 35665:return Xg;case 35666:return qg;case 35674:return Yg;case 35675:return jg;case 35676:return $g;case 5124:case 35670:return Kg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return Qg;case 5125:return e_;case 36294:return t_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return a_;case 36289:case 36303:case 36311:case 36292:return o_}}function c_(s,e){s.uniform1fv(this.addr,e)}function h_(s,e){const t=Nr(e,this.size,2);s.uniform2fv(this.addr,t)}function u_(s,e){const t=Nr(e,this.size,3);s.uniform3fv(this.addr,t)}function d_(s,e){const t=Nr(e,this.size,4);s.uniform4fv(this.addr,t)}function f_(s,e){const t=Nr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function p_(s,e){const t=Nr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function m_(s,e){const t=Nr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function g_(s,e){s.uniform1iv(this.addr,e)}function __(s,e){s.uniform2iv(this.addr,e)}function x_(s,e){s.uniform3iv(this.addr,e)}function v_(s,e){s.uniform4iv(this.addr,e)}function M_(s,e){s.uniform1uiv(this.addr,e)}function y_(s,e){s.uniform2uiv(this.addr,e)}function S_(s,e){s.uniform3uiv(this.addr,e)}function E_(s,e){s.uniform4uiv(this.addr,e)}function T_(s,e,t){const n=this.cache,i=e.length,r=ba(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||gu,r[o])}function b_(s,e,t){const n=this.cache,i=e.length,r=ba(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||vu,r[o])}function w_(s,e,t){const n=this.cache,i=e.length,r=ba(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Mu,r[o])}function A_(s,e,t){const n=this.cache,i=e.length,r=ba(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||xu,r[o])}function C_(s){switch(s){case 5126:return c_;case 35664:return h_;case 35665:return u_;case 35666:return d_;case 35674:return f_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return __;case 35668:case 35672:return x_;case 35669:case 35673:return v_;case 5125:return M_;case 36294:return y_;case 36295:return S_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return A_}}class R_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=l_(t.type)}}class P_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=C_(t.type)}}class L_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const oo=/(\w+)(\])?(\[|\.)?/g;function Gc(s,e){s.seq.push(e),s.map[e.id]=e}function D_(s,e,t){const n=s.name,i=n.length;for(oo.lastIndex=0;;){const r=oo.exec(n),o=oo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Gc(t,c===void 0?new R_(a,s,e):new P_(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new L_(a),Gc(t,u)),t=u}}}class ea{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);D_(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Hc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const I_=37297;let U_=0;function N_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function O_(s){const e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(s);let n;switch(e===t?n="":e===ca&&t===la?n="LinearDisplayP3ToLinearSRGB":e===la&&t===ca&&(n="LinearSRGBToLinearDisplayP3"),s){case Jn:case Sa:return[n,"LinearTransferOETF"];case Dt:case tl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Vc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+N_(s.getShaderSource(e),o)}else return i}function F_(s,e){const t=O_(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function B_(s,e){let t;switch(e){case Vh:t="Linear";break;case Wh:t="Reinhard";break;case Xh:t="OptimizedCineon";break;case Qo:t="ACESFilmic";break;case qh:t="AgX";break;case Qd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function z_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mr).join(`
`)}function k_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(mr).join(`
`)}function G_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function H_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function mr(s){return s!==""}function Wc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const V_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(s){return s.replace(V_,X_)}const W_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function X_(s,e){let t=qe[e];if(t===void 0){const n=W_.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Uo(t)}const q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(s){return s.replace(q_,Y_)}function Y_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ad?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function $_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Tr:case br:e="ENVMAP_TYPE_CUBE";break;case ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case br:e="ENVMAP_MODE_REFRACTION";break}return e}function Z_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Hh:e="ENVMAP_BLENDING_MULTIPLY";break;case Zd:e="ENVMAP_BLENDING_MIX";break;case Jd:e="ENVMAP_BLENDING_ADD";break}return e}function J_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Q_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=j_(t),c=$_(t),h=K_(t),u=Z_(t),d=J_(t),f=t.isWebGL2?"":z_(t),_=k_(t),g=G_(r),m=i.createProgram();let p,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),v.length>0&&(v+=`
`)):(p=[Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),v=[f,Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?qe.tonemapping_pars_fragment:"",t.toneMapping!==di?B_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,F_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),o=Uo(o),o=Wc(o,t),o=Xc(o,t),a=Uo(a),a=Wc(a,t),a=Xc(a,t),o=qc(o),a=qc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=x+p+o,w=x+v+a,b=Hc(i,i.VERTEX_SHADER,S),T=Hc(i,i.FRAGMENT_SHADER,w);i.attachShader(m,b),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function L(X){if(s.debug.checkShaderErrors){const K=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(b).trim(),N=i.getShaderInfoLog(T).trim();let F=!0,k=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,b,T);else{const q=Vc(i,b,"vertex"),B=Vc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+q+`
`+B)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(P===""||N==="")&&(k=!1);k&&(X.diagnostics={runnable:F,programLog:K,vertexShader:{log:P,prefix:p},fragmentShader:{log:N,prefix:v}})}i.deleteShader(b),i.deleteShader(T),M=new ea(i,m),A=H_(i,m)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(m,I_)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=T,this}let e0=0;class t0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new n0(e),t.set(e,n)),n}}class n0{constructor(e){this.id=e0++,this.code=e,this.usedTimes=0}}function i0(s,e,t,n,i,r,o){const a=new nl,l=new t0,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,A,O,X,K){const P=X.fog,N=K.geometry,F=M.isMeshStandardMaterial?X.environment:null,k=(M.isMeshStandardMaterial?t:e).get(M.envMap||F),q=k&&k.mapping===ya?k.image.height:null,B=_[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ee=$!==void 0?$.length:0;let ie=0;N.morphAttributes.position!==void 0&&(ie=1),N.morphAttributes.normal!==void 0&&(ie=2),N.morphAttributes.color!==void 0&&(ie=3);let j,J,ae,Ee;if(B){const tt=In[B];j=tt.vertexShader,J=tt.fragmentShader}else j=M.vertexShader,J=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),Ee=l.getFragmentShaderID(M);const Me=s.getRenderTarget(),De=K.isInstancedMesh===!0,Re=K.isBatchedMesh===!0,xe=!!M.map,ze=!!M.matcap,G=!!k,At=!!M.aoMap,oe=!!M.lightMap,Oe=!!M.bumpMap,ye=!!M.normalMap,nt=!!M.displacementMap,Ve=!!M.emissiveMap,E=!!M.metalnessMap,y=!!M.roughnessMap,U=M.anisotropy>0,W=M.clearcoat>0,Z=M.iridescence>0,te=M.sheen>0,pe=M.transmission>0,le=U&&!!M.anisotropyMap,ue=W&&!!M.clearcoatMap,_e=W&&!!M.clearcoatNormalMap,Se=W&&!!M.clearcoatRoughnessMap,Q=Z&&!!M.iridescenceMap,Fe=Z&&!!M.iridescenceThicknessMap,Ne=te&&!!M.sheenColorMap,Pe=te&&!!M.sheenRoughnessMap,Te=!!M.specularMap,de=!!M.specularColorMap,R=!!M.specularIntensityMap,re=pe&&!!M.transmissionMap,ve=pe&&!!M.thicknessMap,fe=!!M.gradientMap,se=!!M.alphaMap,I=M.alphaTest>0,ne=!!M.alphaHash,ce=!!M.extensions,Le=!!N.attributes.uv1,Ae=!!N.attributes.uv2,ke=!!N.attributes.uv3;let Ge=di;return M.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Ge=s.toneMapping),{isWebGL2:h,shaderID:B,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:J,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:Ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Re,instancing:De,instancingColor:De&&K.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Me===null?s.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Jn,map:xe,matcap:ze,envMap:G,envMapMode:G&&k.mapping,envMapCubeUVHeight:q,aoMap:At,lightMap:oe,bumpMap:Oe,normalMap:ye,displacementMap:d&&nt,emissiveMap:Ve,normalMapObjectSpace:ye&&M.normalMapType===df,normalMapTangentSpace:ye&&M.normalMapType===nu,metalnessMap:E,roughnessMap:y,anisotropy:U,anisotropyMap:le,clearcoat:W,clearcoatMap:ue,clearcoatNormalMap:_e,clearcoatRoughnessMap:Se,iridescence:Z,iridescenceMap:Q,iridescenceThicknessMap:Fe,sheen:te,sheenColorMap:Ne,sheenRoughnessMap:Pe,specularMap:Te,specularColorMap:de,specularIntensityMap:R,transmission:pe,transmissionMap:re,thicknessMap:ve,gradientMap:fe,opaque:M.transparent===!1&&M.blending===vr,alphaMap:se,alphaTest:I,alphaHash:ne,combine:M.combine,mapUv:xe&&g(M.map.channel),aoMapUv:At&&g(M.aoMap.channel),lightMapUv:oe&&g(M.lightMap.channel),bumpMapUv:Oe&&g(M.bumpMap.channel),normalMapUv:ye&&g(M.normalMap.channel),displacementMapUv:nt&&g(M.displacementMap.channel),emissiveMapUv:Ve&&g(M.emissiveMap.channel),metalnessMapUv:E&&g(M.metalnessMap.channel),roughnessMapUv:y&&g(M.roughnessMap.channel),anisotropyMapUv:le&&g(M.anisotropyMap.channel),clearcoatMapUv:ue&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(M.sheenRoughnessMap.channel),specularMapUv:Te&&g(M.specularMap.channel),specularColorMapUv:de&&g(M.specularColorMap.channel),specularIntensityMapUv:R&&g(M.specularIntensityMap.channel),transmissionMapUv:re&&g(M.transmissionMap.channel),thicknessMapUv:ve&&g(M.thicknessMap.channel),alphaMapUv:se&&g(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ye||U),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:Ae,vertexUv3s:ke,pointsUvs:K.isPoints===!0&&!!N.attributes.uv&&(xe||se),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ge,useLegacyLights:s._useLegacyLights,decodeVideoTexture:xe&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xn,flipSided:M.side===jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ce&&M.extensions.derivatives===!0,extensionFragDepth:ce&&M.extensions.fragDepth===!0,extensionDrawBuffers:ce&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const O in M.defines)A.push(O),A.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(v(A,M),x(A,M),A.push(s.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function v(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function x(M,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){const A=_[M.type];let O;if(A){const X=In[A];O=rs.clone(X.uniforms)}else O=M.uniforms;return O}function w(M,A){let O;for(let X=0,K=c.length;X<K;X++){const P=c[X];if(P.cacheKey===A){O=P,++O.usedTimes;break}}return O===void 0&&(O=new Q_(s,A,M,r),c.push(O)),O}function b(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:w,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:L}}function r0(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function s0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function jc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $c(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,_,g,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function a(u,d,f,_,g,m){const p=o(u,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,_,g,m){const p=o(u,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||s0),n.length>1&&n.sort(d||jc),i.length>1&&i.sort(d||jc)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function a0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new $c,s.set(n,[o])):i>=r.length?(o=new $c,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function o0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ce};break;case"SpotLight":t={position:new D,direction:new D,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function l0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let c0=0;function h0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function u0(s,e){const t=new o0,n=l0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);const r=new D,o=new xt,a=new xt;function l(h,u){let d=0,f=0,_=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let g=0,m=0,p=0,v=0,x=0,S=0,w=0,b=0,T=0,L=0,M=0;h.sort(h0);const A=u===!0?Math.PI:1;for(let X=0,K=h.length;X<K;X++){const P=h[X],N=P.color,F=P.intensity,k=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=N.r*F*A,f+=N.g*F*A,_+=N.b*F*A;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],F);M++}else if(P.isDirectionalLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){const $=P.shadow,ee=n.get(P);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,i.directionalShadow[g]=ee,i.directionalShadowMap[g]=q,i.directionalShadowMatrix[g]=P.shadow.matrix,S++}i.directional[g]=B,g++}else if(P.isSpotLight){const B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(N).multiplyScalar(F*A),B.distance=k,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[p]=B;const $=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,$.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[p]=$.matrix,P.castShadow){const ee=n.get(P);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,i.spotShadow[p]=ee,i.spotShadowMap[p]=q,b++}p++}else if(P.isRectAreaLight){const B=t.get(P);B.color.copy(N).multiplyScalar(F),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=B,v++}else if(P.isPointLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*A),B.distance=P.distance,B.decay=P.decay,P.castShadow){const $=P.shadow,ee=n.get(P);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,ee.shadowCameraNear=$.camera.near,ee.shadowCameraFar=$.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=P.shadow.matrix,w++}i.point[m]=B,m++}else if(P.isHemisphereLight){const B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(F*A),B.groundColor.copy(P.groundColor).multiplyScalar(F*A),i.hemi[x]=B,x++}}v>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=_;const O=i.hash;(O.directionalLength!==g||O.pointLength!==m||O.spotLength!==p||O.rectAreaLength!==v||O.hemiLength!==x||O.numDirectionalShadows!==S||O.numPointShadows!==w||O.numSpotShadows!==b||O.numSpotMaps!==T||O.numLightProbes!==M)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=b+T-L,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=M,O.directionalLength=g,O.pointLength=m,O.spotLength=p,O.rectAreaLength=v,O.hemiLength=x,O.numDirectionalShadows=S,O.numPointShadows=w,O.numSpotShadows=b,O.numSpotMaps=T,O.numLightProbes=M,i.version=c0++)}function c(h,u){let d=0,f=0,_=0,g=0,m=0;const p=u.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const S=h[v];if(S.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),d++}else if(S.isSpotLight){const w=i.spot[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),_++}else if(S.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Kc(s,e){const t=new u0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function d0(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Kc(s,e),t.set(r,[l])):o>=a.length?(l=new Kc(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class f0 extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p0 extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const m0=`void main() {
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
}`;function _0(s,e,t){let n=new il;const i=new be,r=new be,o=new dt,a=new f0({depthPacking:uf}),l=new p0,c={},h=t.maxTextureSize,u={[gi]:jt,[jt]:gi,[xn]:xn},d=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:m0,fragmentShader:g0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Mt;_.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new St(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh;let p=this.type;this.render=function(b,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const M=s.getRenderTarget(),A=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),X=s.state;X.setBlending(Kn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const K=p!==Xn&&this.type===Xn,P=p===Xn&&this.type!==Xn;for(let N=0,F=b.length;N<F;N++){const k=b[N],q=k.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const B=q.getFrameExtents();if(i.multiply(B),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/B.x),i.x=r.x*B.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/B.y),i.y=r.y*B.y,q.mapSize.y=r.y)),q.map===null||K===!0||P===!0){const ee=this.type!==Xn?{minFilter:Wt,magFilter:Wt}:{};q.map!==null&&q.map.dispose(),q.map=new Pn(i.x,i.y,ee),q.map.texture.name=k.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const $=q.getViewportCount();for(let ee=0;ee<$;ee++){const ie=q.getViewport(ee);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),X.viewport(o),q.updateMatrices(k,ee),n=q.getFrustum(),S(T,L,q.camera,k,this.type)}q.isPointLightShadow!==!0&&this.type===Xn&&v(q,L),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,A,O)};function v(b,T){const L=e.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Pn(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(T,null,L,d,g,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(T,null,L,f,g,null)}function x(b,T,L,M){let A=null;const O=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(O!==void 0)A=O;else if(A=L.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const X=A.uuid,K=T.uuid;let P=c[X];P===void 0&&(P={},c[X]=P);let N=P[K];N===void 0&&(N=A.clone(),P[K]=N,T.addEventListener("dispose",w)),A=N}if(A.visible=T.visible,A.wireframe=T.wireframe,M===Xn?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:u[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,L.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const X=s.properties.get(A);X.light=L}return A}function S(b,T,L,M,A){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===Xn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const K=e.update(b),P=b.material;if(Array.isArray(P)){const N=K.groups;for(let F=0,k=N.length;F<k;F++){const q=N[F],B=P[q.materialIndex];if(B&&B.visible){const $=x(b,B,M,A);b.onBeforeShadow(s,b,T,L,K,$,q),s.renderBufferDirect(L,null,K,$,b,q),b.onAfterShadow(s,b,T,L,K,$,q)}}}else if(P.visible){const N=x(b,P,M,A);b.onBeforeShadow(s,b,T,L,K,N,null),s.renderBufferDirect(L,null,K,N,b,null),b.onAfterShadow(s,b,T,L,K,N,null)}}const X=b.children;for(let K=0,P=X.length;K<P;K++)S(X[K],T,L,M,A)}function w(b){b.target.removeEventListener("dispose",w);for(const L in c){const M=c[L],A=b.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function x0(s,e,t){const n=t.isWebGL2;function i(){let I=!1;const ne=new dt;let ce=null;const Le=new dt(0,0,0,0);return{setMask:function(Ae){ce!==Ae&&!I&&(s.colorMask(Ae,Ae,Ae,Ae),ce=Ae)},setLocked:function(Ae){I=Ae},setClear:function(Ae,ke,Ge,Je,tt){tt===!0&&(Ae*=Je,ke*=Je,Ge*=Je),ne.set(Ae,ke,Ge,Je),Le.equals(ne)===!1&&(s.clearColor(Ae,ke,Ge,Je),Le.copy(ne))},reset:function(){I=!1,ce=null,Le.set(-1,0,0,0)}}}function r(){let I=!1,ne=null,ce=null,Le=null;return{setTest:function(Ae){Ae?Re(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(Ae){ne!==Ae&&!I&&(s.depthMask(Ae),ne=Ae)},setFunc:function(Ae){if(ce!==Ae){switch(Ae){case Wd:s.depthFunc(s.NEVER);break;case Xd:s.depthFunc(s.ALWAYS);break;case qd:s.depthFunc(s.LESS);break;case sa:s.depthFunc(s.LEQUAL);break;case Yd:s.depthFunc(s.EQUAL);break;case jd:s.depthFunc(s.GEQUAL);break;case $d:s.depthFunc(s.GREATER);break;case Kd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=Ae}},setLocked:function(Ae){I=Ae},setClear:function(Ae){Le!==Ae&&(s.clearDepth(Ae),Le=Ae)},reset:function(){I=!1,ne=null,ce=null,Le=null}}}function o(){let I=!1,ne=null,ce=null,Le=null,Ae=null,ke=null,Ge=null,Je=null,tt=null;return{setTest:function(Ye){I||(Ye?Re(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(Ye){ne!==Ye&&!I&&(s.stencilMask(Ye),ne=Ye)},setFunc:function(Ye,lt,Gt){(ce!==Ye||Le!==lt||Ae!==Gt)&&(s.stencilFunc(Ye,lt,Gt),ce=Ye,Le=lt,Ae=Gt)},setOp:function(Ye,lt,Gt){(ke!==Ye||Ge!==lt||Je!==Gt)&&(s.stencilOp(Ye,lt,Gt),ke=Ye,Ge=lt,Je=Gt)},setLocked:function(Ye){I=Ye},setClear:function(Ye){tt!==Ye&&(s.clearStencil(Ye),tt=Ye)},reset:function(){I=!1,ne=null,ce=null,Le=null,Ae=null,ke=null,Ge=null,Je=null,tt=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},f={},_=new WeakMap,g=[],m=null,p=!1,v=null,x=null,S=null,w=null,b=null,T=null,L=null,M=new Ce(0,0,0),A=0,O=!1,X=null,K=null,P=null,N=null,F=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,B=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec($)[1]),q=B>=1):$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=B>=2);let ee=null,ie={};const j=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),ae=new dt().fromArray(j),Ee=new dt().fromArray(J);function Me(I,ne,ce,Le){const Ae=new Uint8Array(4),ke=s.createTexture();s.bindTexture(I,ke),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<ce;Ge++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(ne,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(ne+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return ke}const De={};De[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),De[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),De[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(s.DEPTH_TEST),l.setFunc(sa),Ve(!1),E(Il),Re(s.CULL_FACE),ye(Kn);function Re(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function xe(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function ze(I,ne){return f[I]!==ne?(s.bindFramebuffer(I,ne),f[I]=ne,n&&(I===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ne),I===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ne)),!0):!1}function G(I,ne){let ce=g,Le=!1;if(I)if(ce=_.get(ne),ce===void 0&&(ce=[],_.set(ne,ce)),I.isWebGLMultipleRenderTargets){const Ae=I.texture;if(ce.length!==Ae.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let ke=0,Ge=Ae.length;ke<Ge;ke++)ce[ke]=s.COLOR_ATTACHMENT0+ke;ce.length=Ae.length,Le=!0}}else ce[0]!==s.COLOR_ATTACHMENT0&&(ce[0]=s.COLOR_ATTACHMENT0,Le=!0);else ce[0]!==s.BACK&&(ce[0]=s.BACK,Le=!0);Le&&(t.isWebGL2?s.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function At(I){return m!==I?(s.useProgram(I),m=I,!0):!1}const oe={[Di]:s.FUNC_ADD,[Rd]:s.FUNC_SUBTRACT,[Pd]:s.FUNC_REVERSE_SUBTRACT};if(n)oe[Ol]=s.MIN,oe[Fl]=s.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(oe[Ol]=I.MIN_EXT,oe[Fl]=I.MAX_EXT)}const Oe={[Ld]:s.ZERO,[Dd]:s.ONE,[Id]:s.SRC_COLOR,[wo]:s.SRC_ALPHA,[zd]:s.SRC_ALPHA_SATURATE,[Fd]:s.DST_COLOR,[Nd]:s.DST_ALPHA,[Ud]:s.ONE_MINUS_SRC_COLOR,[Ao]:s.ONE_MINUS_SRC_ALPHA,[Bd]:s.ONE_MINUS_DST_COLOR,[Od]:s.ONE_MINUS_DST_ALPHA,[kd]:s.CONSTANT_COLOR,[Gd]:s.ONE_MINUS_CONSTANT_COLOR,[Hd]:s.CONSTANT_ALPHA,[Vd]:s.ONE_MINUS_CONSTANT_ALPHA};function ye(I,ne,ce,Le,Ae,ke,Ge,Je,tt,Ye){if(I===Kn){p===!0&&(xe(s.BLEND),p=!1);return}if(p===!1&&(Re(s.BLEND),p=!0),I!==Cd){if(I!==v||Ye!==O){if((x!==Di||b!==Di)&&(s.blendEquation(s.FUNC_ADD),x=Di,b=Di),Ye)switch(I){case vr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bt:s.blendFunc(s.ONE,s.ONE);break;case Ul:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case vr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bt:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ul:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,w=null,T=null,L=null,M.set(0,0,0),A=0,v=I,O=Ye}return}Ae=Ae||ne,ke=ke||ce,Ge=Ge||Le,(ne!==x||Ae!==b)&&(s.blendEquationSeparate(oe[ne],oe[Ae]),x=ne,b=Ae),(ce!==S||Le!==w||ke!==T||Ge!==L)&&(s.blendFuncSeparate(Oe[ce],Oe[Le],Oe[ke],Oe[Ge]),S=ce,w=Le,T=ke,L=Ge),(Je.equals(M)===!1||tt!==A)&&(s.blendColor(Je.r,Je.g,Je.b,tt),M.copy(Je),A=tt),v=I,O=!1}function nt(I,ne){I.side===xn?xe(s.CULL_FACE):Re(s.CULL_FACE);let ce=I.side===jt;ne&&(ce=!ce),Ve(ce),I.blending===vr&&I.transparent===!1?ye(Kn):ye(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const Le=I.stencilWrite;c.setTest(Le),Le&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),U(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Re(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(I){X!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),X=I)}function E(I){I!==bd?(Re(s.CULL_FACE),I!==K&&(I===Il?s.cullFace(s.BACK):I===wd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),K=I}function y(I){I!==P&&(q&&s.lineWidth(I),P=I)}function U(I,ne,ce){I?(Re(s.POLYGON_OFFSET_FILL),(N!==ne||F!==ce)&&(s.polygonOffset(ne,ce),N=ne,F=ce)):xe(s.POLYGON_OFFSET_FILL)}function W(I){I?Re(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function Z(I){I===void 0&&(I=s.TEXTURE0+k-1),ee!==I&&(s.activeTexture(I),ee=I)}function te(I,ne,ce){ce===void 0&&(ee===null?ce=s.TEXTURE0+k-1:ce=ee);let Le=ie[ce];Le===void 0&&(Le={type:void 0,texture:void 0},ie[ce]=Le),(Le.type!==I||Le.texture!==ne)&&(ee!==ce&&(s.activeTexture(ce),ee=ce),s.bindTexture(I,ne||De[I]),Le.type=I,Le.texture=ne)}function pe(){const I=ie[ee];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function le(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function R(I){ae.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ae.copy(I))}function re(I){Ee.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Ee.copy(I))}function ve(I,ne){let ce=u.get(ne);ce===void 0&&(ce=new WeakMap,u.set(ne,ce));let Le=ce.get(I);Le===void 0&&(Le=s.getUniformBlockIndex(ne,I.name),ce.set(I,Le))}function fe(I,ne){const Le=u.get(ne).get(I);h.get(ne)!==Le&&(s.uniformBlockBinding(ne,Le,I.__bindingPointIndex),h.set(ne,Le))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ee=null,ie={},f={},_=new WeakMap,g=[],m=null,p=!1,v=null,x=null,S=null,w=null,b=null,T=null,L=null,M=new Ce(0,0,0),A=0,O=!1,X=null,K=null,P=null,N=null,F=null,ae.set(0,0,s.canvas.width,s.canvas.height),Ee.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Re,disable:xe,bindFramebuffer:ze,drawBuffers:G,useProgram:At,setBlending:ye,setMaterial:nt,setFlipSided:Ve,setCullFace:E,setLineWidth:y,setPolygonOffset:U,setScissorTest:W,activeTexture:Z,bindTexture:te,unbindTexture:pe,compressedTexImage2D:le,compressedTexImage3D:ue,texImage2D:Te,texImage3D:de,updateUBOMapping:ve,uniformBlockBinding:fe,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:_e,texSubImage3D:Se,compressedTexSubImage2D:Q,compressedTexSubImage3D:Fe,scissor:R,viewport:re,reset:se}}function v0(s,e,t,n,i,r,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,y){return f?new OffscreenCanvas(E,y):ua("canvas")}function g(E,y,U,W){let Z=1;if((E.width>W||E.height>W)&&(Z=W/Math.max(E.width,E.height)),Z<1||y===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const te=y?Do:Math.floor,pe=te(Z*E.width),le=te(Z*E.height);u===void 0&&(u=_(pe,le));const ue=U?_(pe,le):u;return ue.width=pe,ue.height=le,ue.getContext("2d").drawImage(E,0,0,pe,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+pe+"x"+le+")."),ue}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return fc(E.width)&&fc(E.height)}function p(E){return a?!1:E.wrapS!==Cn||E.wrapT!==Cn||E.minFilter!==Wt&&E.minFilter!==_n}function v(E,y){return E.generateMipmaps&&y&&E.minFilter!==Wt&&E.minFilter!==_n}function x(E){s.generateMipmap(E)}function S(E,y,U,W,Z=!1){if(a===!1)return y;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let te=y;if(y===s.RED&&(U===s.FLOAT&&(te=s.R32F),U===s.HALF_FLOAT&&(te=s.R16F),U===s.UNSIGNED_BYTE&&(te=s.R8)),y===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(te=s.R8UI),U===s.UNSIGNED_SHORT&&(te=s.R16UI),U===s.UNSIGNED_INT&&(te=s.R32UI),U===s.BYTE&&(te=s.R8I),U===s.SHORT&&(te=s.R16I),U===s.INT&&(te=s.R32I)),y===s.RG&&(U===s.FLOAT&&(te=s.RG32F),U===s.HALF_FLOAT&&(te=s.RG16F),U===s.UNSIGNED_BYTE&&(te=s.RG8)),y===s.RGBA){const pe=Z?oa:it.getTransfer(W);U===s.FLOAT&&(te=s.RGBA32F),U===s.HALF_FLOAT&&(te=s.RGBA16F),U===s.UNSIGNED_BYTE&&(te=pe===ct?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function w(E,y,U){return v(E,U)===!0||E.isFramebufferTexture&&E.minFilter!==Wt&&E.minFilter!==_n?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function b(E){return E===Wt||E===Bl||E===Ia?s.NEAREST:s.LINEAR}function T(E){const y=E.target;y.removeEventListener("dispose",T),M(y),y.isVideoTexture&&h.delete(y)}function L(E){const y=E.target;y.removeEventListener("dispose",L),O(y)}function M(E){const y=n.get(E);if(y.__webglInit===void 0)return;const U=E.source,W=d.get(U);if(W){const Z=W[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&A(E),Object.keys(W).length===0&&d.delete(U)}n.remove(E)}function A(E){const y=n.get(E);s.deleteTexture(y.__webglTexture);const U=E.source,W=d.get(U);delete W[y.__cacheKey],o.memory.textures--}function O(E){const y=E.texture,U=n.get(E),W=n.get(y);if(W.__webglTexture!==void 0&&(s.deleteTexture(W.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(U.__webglFramebuffer[Z]))for(let te=0;te<U.__webglFramebuffer[Z].length;te++)s.deleteFramebuffer(U.__webglFramebuffer[Z][te]);else s.deleteFramebuffer(U.__webglFramebuffer[Z]);U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer[Z])}else{if(Array.isArray(U.__webglFramebuffer))for(let Z=0;Z<U.__webglFramebuffer.length;Z++)s.deleteFramebuffer(U.__webglFramebuffer[Z]);else s.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&s.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let Z=0;Z<U.__webglColorRenderbuffer.length;Z++)U.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(U.__webglColorRenderbuffer[Z]);U.__webglDepthRenderbuffer&&s.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Z=0,te=y.length;Z<te;Z++){const pe=n.get(y[Z]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(y[Z])}n.remove(y),n.remove(E)}let X=0;function K(){X=0}function P(){const E=X;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),X+=1,E}function N(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function F(E,y){const U=n.get(E);if(E.isVideoTexture&&nt(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const W=E.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(U,E,y);return}}t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+y)}function k(E,y){const U=n.get(E);if(E.version>0&&U.__version!==E.version){ae(U,E,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+y)}function q(E,y){const U=n.get(E);if(E.version>0&&U.__version!==E.version){ae(U,E,y);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+y)}function B(E,y){const U=n.get(E);if(E.version>0&&U.__version!==E.version){Ee(U,E,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+y)}const $={[ns]:s.REPEAT,[Cn]:s.CLAMP_TO_EDGE,[Ro]:s.MIRRORED_REPEAT},ee={[Wt]:s.NEAREST,[Bl]:s.NEAREST_MIPMAP_NEAREST,[Ia]:s.NEAREST_MIPMAP_LINEAR,[_n]:s.LINEAR,[ef]:s.LINEAR_MIPMAP_NEAREST,[is]:s.LINEAR_MIPMAP_LINEAR},ie={[ff]:s.NEVER,[vf]:s.ALWAYS,[pf]:s.LESS,[iu]:s.LEQUAL,[mf]:s.EQUAL,[xf]:s.GEQUAL,[gf]:s.GREATER,[_f]:s.NOTEQUAL};function j(E,y,U){if(U?(s.texParameteri(E,s.TEXTURE_WRAP_S,$[y.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,$[y.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,$[y.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ee[y.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ee[y.minFilter])):(s.texParameteri(E,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(E,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==Cn||y.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,s.TEXTURE_MAG_FILTER,b(y.magFilter)),s.texParameteri(E,s.TEXTURE_MIN_FILTER,b(y.minFilter)),y.minFilter!==Wt&&y.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Wt||y.minFilter!==Ia&&y.minFilter!==is||y.type===li&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Zn&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(E,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function J(E,y){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",T));const W=y.source;let Z=d.get(W);Z===void 0&&(Z={},d.set(W,Z));const te=N(y);if(te!==E.__cacheKey){Z[te]===void 0&&(Z[te]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Z[te].usedTimes++;const pe=Z[E.__cacheKey];pe!==void 0&&(Z[E.__cacheKey].usedTimes--,pe.usedTimes===0&&A(y)),E.__cacheKey=te,E.__webglTexture=Z[te].texture}return U}function ae(E,y,U){let W=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=s.TEXTURE_3D);const Z=J(E,y),te=y.source;t.bindTexture(W,E.__webglTexture,s.TEXTURE0+U);const pe=n.get(te);if(te.version!==pe.__version||Z===!0){t.activeTexture(s.TEXTURE0+U);const le=it.getPrimaries(it.workingColorSpace),ue=y.colorSpace===vn?null:it.getPrimaries(y.colorSpace),_e=y.colorSpace===vn||le===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Se=p(y)&&m(y.image)===!1;let Q=g(y.image,Se,!1,i.maxTextureSize);Q=Ve(y,Q);const Fe=m(Q)||a,Ne=r.convert(y.format,y.colorSpace);let Pe=r.convert(y.type),Te=S(y.internalFormat,Ne,Pe,y.colorSpace,y.isVideoTexture);j(W,y,Fe);let de;const R=y.mipmaps,re=a&&y.isVideoTexture!==!0&&Te!==eu,ve=pe.__version===void 0||Z===!0,fe=w(y,Q,Fe);if(y.isDepthTexture)Te=s.DEPTH_COMPONENT,a?y.type===li?Te=s.DEPTH_COMPONENT32F:y.type===oi?Te=s.DEPTH_COMPONENT24:y.type===Ni?Te=s.DEPTH24_STENCIL8:Te=s.DEPTH_COMPONENT16:y.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Oi&&Te===s.DEPTH_COMPONENT&&y.type!==el&&y.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=oi,Pe=r.convert(y.type)),y.format===wr&&Te===s.DEPTH_COMPONENT&&(Te=s.DEPTH_STENCIL,y.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ni,Pe=r.convert(y.type))),ve&&(re?t.texStorage2D(s.TEXTURE_2D,1,Te,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,Te,Q.width,Q.height,0,Ne,Pe,null));else if(y.isDataTexture)if(R.length>0&&Fe){re&&ve&&t.texStorage2D(s.TEXTURE_2D,fe,Te,R[0].width,R[0].height);for(let se=0,I=R.length;se<I;se++)de=R[se],re?t.texSubImage2D(s.TEXTURE_2D,se,0,0,de.width,de.height,Ne,Pe,de.data):t.texImage2D(s.TEXTURE_2D,se,Te,de.width,de.height,0,Ne,Pe,de.data);y.generateMipmaps=!1}else re?(ve&&t.texStorage2D(s.TEXTURE_2D,fe,Te,Q.width,Q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,Ne,Pe,Q.data)):t.texImage2D(s.TEXTURE_2D,0,Te,Q.width,Q.height,0,Ne,Pe,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){re&&ve&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Te,R[0].width,R[0].height,Q.depth);for(let se=0,I=R.length;se<I;se++)de=R[se],y.format!==Rn?Ne!==null?re?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,Q.depth,Ne,de.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,Te,de.width,de.height,Q.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,Q.depth,Ne,Pe,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,Te,de.width,de.height,Q.depth,0,Ne,Pe,de.data)}else{re&&ve&&t.texStorage2D(s.TEXTURE_2D,fe,Te,R[0].width,R[0].height);for(let se=0,I=R.length;se<I;se++)de=R[se],y.format!==Rn?Ne!==null?re?t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,de.width,de.height,Ne,de.data):t.compressedTexImage2D(s.TEXTURE_2D,se,Te,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?t.texSubImage2D(s.TEXTURE_2D,se,0,0,de.width,de.height,Ne,Pe,de.data):t.texImage2D(s.TEXTURE_2D,se,Te,de.width,de.height,0,Ne,Pe,de.data)}else if(y.isDataArrayTexture)re?(ve&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Te,Q.width,Q.height,Q.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Ne,Pe,Q.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,Q.width,Q.height,Q.depth,0,Ne,Pe,Q.data);else if(y.isData3DTexture)re?(ve&&t.texStorage3D(s.TEXTURE_3D,fe,Te,Q.width,Q.height,Q.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Ne,Pe,Q.data)):t.texImage3D(s.TEXTURE_3D,0,Te,Q.width,Q.height,Q.depth,0,Ne,Pe,Q.data);else if(y.isFramebufferTexture){if(ve)if(re)t.texStorage2D(s.TEXTURE_2D,fe,Te,Q.width,Q.height);else{let se=Q.width,I=Q.height;for(let ne=0;ne<fe;ne++)t.texImage2D(s.TEXTURE_2D,ne,Te,se,I,0,Ne,Pe,null),se>>=1,I>>=1}}else if(R.length>0&&Fe){re&&ve&&t.texStorage2D(s.TEXTURE_2D,fe,Te,R[0].width,R[0].height);for(let se=0,I=R.length;se<I;se++)de=R[se],re?t.texSubImage2D(s.TEXTURE_2D,se,0,0,Ne,Pe,de):t.texImage2D(s.TEXTURE_2D,se,Te,Ne,Pe,de);y.generateMipmaps=!1}else re?(ve&&t.texStorage2D(s.TEXTURE_2D,fe,Te,Q.width,Q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ne,Pe,Q)):t.texImage2D(s.TEXTURE_2D,0,Te,Ne,Pe,Q);v(y,Fe)&&x(W),pe.__version=te.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Ee(E,y,U){if(y.image.length!==6)return;const W=J(E,y),Z=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+U);const te=n.get(Z);if(Z.version!==te.__version||W===!0){t.activeTexture(s.TEXTURE0+U);const pe=it.getPrimaries(it.workingColorSpace),le=y.colorSpace===vn?null:it.getPrimaries(y.colorSpace),ue=y.colorSpace===vn||pe===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const _e=y.isCompressedTexture||y.image[0].isCompressedTexture,Se=y.image[0]&&y.image[0].isDataTexture,Q=[];for(let se=0;se<6;se++)!_e&&!Se?Q[se]=g(y.image[se],!1,!0,i.maxCubemapSize):Q[se]=Se?y.image[se].image:y.image[se],Q[se]=Ve(y,Q[se]);const Fe=Q[0],Ne=m(Fe)||a,Pe=r.convert(y.format,y.colorSpace),Te=r.convert(y.type),de=S(y.internalFormat,Pe,Te,y.colorSpace),R=a&&y.isVideoTexture!==!0,re=te.__version===void 0||W===!0;let ve=w(y,Fe,Ne);j(s.TEXTURE_CUBE_MAP,y,Ne);let fe;if(_e){R&&re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ve,de,Fe.width,Fe.height);for(let se=0;se<6;se++){fe=Q[se].mipmaps;for(let I=0;I<fe.length;I++){const ne=fe[I];y.format!==Rn?Pe!==null?R?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,0,0,ne.width,ne.height,Pe,ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,de,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,0,0,ne.width,ne.height,Pe,Te,ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,de,ne.width,ne.height,0,Pe,Te,ne.data)}}}else{fe=y.mipmaps,R&&re&&(fe.length>0&&ve++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ve,de,Q[0].width,Q[0].height));for(let se=0;se<6;se++)if(Se){R?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Q[se].width,Q[se].height,Pe,Te,Q[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,de,Q[se].width,Q[se].height,0,Pe,Te,Q[se].data);for(let I=0;I<fe.length;I++){const ce=fe[I].image[se].image;R?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,0,0,ce.width,ce.height,Pe,Te,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,de,ce.width,ce.height,0,Pe,Te,ce.data)}}else{R?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Pe,Te,Q[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,de,Pe,Te,Q[se]);for(let I=0;I<fe.length;I++){const ne=fe[I];R?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,0,0,Pe,Te,ne.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,de,Pe,Te,ne.image[se])}}}v(y,Ne)&&x(s.TEXTURE_CUBE_MAP),te.__version=Z.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Me(E,y,U,W,Z,te){const pe=r.convert(U.format,U.colorSpace),le=r.convert(U.type),ue=S(U.internalFormat,pe,le,U.colorSpace);if(!n.get(y).__hasExternalTextures){const Se=Math.max(1,y.width>>te),Q=Math.max(1,y.height>>te);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,te,ue,Se,Q,y.depth,0,pe,le,null):t.texImage2D(Z,te,ue,Se,Q,0,pe,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),ye(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,Z,n.get(U).__webglTexture,0,Oe(y)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,Z,n.get(U).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(E,y,U){if(s.bindRenderbuffer(s.RENDERBUFFER,E),y.depthBuffer&&!y.stencilBuffer){let W=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(U||ye(y)){const Z=y.depthTexture;Z&&Z.isDepthTexture&&(Z.type===li?W=s.DEPTH_COMPONENT32F:Z.type===oi&&(W=s.DEPTH_COMPONENT24));const te=Oe(y);ye(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,W,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,W,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,W,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,E)}else if(y.depthBuffer&&y.stencilBuffer){const W=Oe(y);U&&ye(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,W,s.DEPTH24_STENCIL8,y.width,y.height):ye(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,W,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,E)}else{const W=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Z=0;Z<W.length;Z++){const te=W[Z],pe=r.convert(te.format,te.colorSpace),le=r.convert(te.type),ue=S(te.internalFormat,pe,le,te.colorSpace),_e=Oe(y);U&&ye(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,ue,y.width,y.height):ye(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,ue,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ue,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),F(y.depthTexture,0);const W=n.get(y.depthTexture).__webglTexture,Z=Oe(y);if(y.depthTexture.format===Oi)ye(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,W,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,W,0);else if(y.depthTexture.format===wr)ye(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,W,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function xe(E){const y=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Re(y.__webglFramebuffer,E)}else if(U){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]=s.createRenderbuffer(),De(y.__webglDepthbuffer[W],E,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),De(y.__webglDepthbuffer,E,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(E,y,U){const W=n.get(E);y!==void 0&&Me(W.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&xe(E)}function G(E){const y=E.texture,U=n.get(E),W=n.get(y);E.addEventListener("dispose",L),E.isWebGLMultipleRenderTargets!==!0&&(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=y.version,o.memory.textures++);const Z=E.isWebGLCubeRenderTarget===!0,te=E.isWebGLMultipleRenderTargets===!0,pe=m(E)||a;if(Z){U.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[le]=[];for(let ue=0;ue<y.mipmaps.length;ue++)U.__webglFramebuffer[le][ue]=s.createFramebuffer()}else U.__webglFramebuffer[le]=s.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let le=0;le<y.mipmaps.length;le++)U.__webglFramebuffer[le]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(te)if(i.drawBuffers){const le=E.texture;for(let ue=0,_e=le.length;ue<_e;ue++){const Se=n.get(le[ue]);Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&ye(E)===!1){const le=te?y:[y];U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ue=0;ue<le.length;ue++){const _e=le[ue];U.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[ue]);const Se=r.convert(_e.format,_e.colorSpace),Q=r.convert(_e.type),Fe=S(_e.internalFormat,Se,Q,_e.colorSpace,E.isXRRenderTarget===!0),Ne=Oe(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,Fe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,U.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),De(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),j(s.TEXTURE_CUBE_MAP,y,pe);for(let le=0;le<6;le++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)Me(U.__webglFramebuffer[le][ue],E,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,ue);else Me(U.__webglFramebuffer[le],E,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);v(y,pe)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const le=E.texture;for(let ue=0,_e=le.length;ue<_e;ue++){const Se=le[ue],Q=n.get(Se);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture),j(s.TEXTURE_2D,Se,pe),Me(U.__webglFramebuffer,E,Se,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),v(Se,pe)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?le=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,W.__webglTexture),j(le,y,pe),a&&y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)Me(U.__webglFramebuffer[ue],E,y,s.COLOR_ATTACHMENT0,le,ue);else Me(U.__webglFramebuffer,E,y,s.COLOR_ATTACHMENT0,le,0);v(y,pe)&&x(le),t.unbindTexture()}E.depthBuffer&&xe(E)}function At(E){const y=m(E)||a,U=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let W=0,Z=U.length;W<Z;W++){const te=U[W];if(v(te,y)){const pe=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,le=n.get(te).__webglTexture;t.bindTexture(pe,le),x(pe),t.unbindTexture()}}}function oe(E){if(a&&E.samples>0&&ye(E)===!1){const y=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],U=E.width,W=E.height;let Z=s.COLOR_BUFFER_BIT;const te=[],pe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=n.get(E),ue=E.isWebGLMultipleRenderTargets===!0;if(ue)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){te.push(s.COLOR_ATTACHMENT0+_e),E.depthBuffer&&te.push(pe);const Se=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Se===!1&&(E.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ue&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[_e]),Se===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[pe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[pe])),ue){const Q=n.get(y[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,U,W,0,0,U,W,Z,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,le.__webglColorRenderbuffer[_e]);const Se=n.get(y[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,Se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Oe(E){return Math.min(i.maxSamples,E.samples)}function ye(E){const y=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function nt(E){const y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function Ve(E,y){const U=E.colorSpace,W=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Po||U!==Jn&&U!==vn&&(it.getTransfer(U)===ct?a===!1?e.has("EXT_sRGB")===!0&&W===Rn?(E.format=Po,E.minFilter=_n,E.generateMipmaps=!1):y=su.sRGBToLinear(y):(W!==Rn||Z!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),y}this.allocateTextureUnit=P,this.resetTextureUnits=K,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=B,this.rebindTextures=ze,this.setupRenderTarget=G,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ye}function M0(s,e,t){const n=t.isWebGL2;function i(r,o=vn){let a;const l=it.getTransfer(o);if(r===fi)return s.UNSIGNED_BYTE;if(r===$h)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Kh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===tf)return s.BYTE;if(r===nf)return s.SHORT;if(r===el)return s.UNSIGNED_SHORT;if(r===jh)return s.INT;if(r===oi)return s.UNSIGNED_INT;if(r===li)return s.FLOAT;if(r===Zn)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===rf)return s.ALPHA;if(r===Rn)return s.RGBA;if(r===sf)return s.LUMINANCE;if(r===af)return s.LUMINANCE_ALPHA;if(r===Oi)return s.DEPTH_COMPONENT;if(r===wr)return s.DEPTH_STENCIL;if(r===Po)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===of)return s.RED;if(r===Zh)return s.RED_INTEGER;if(r===lf)return s.RG;if(r===Jh)return s.RG_INTEGER;if(r===Qh)return s.RGBA_INTEGER;if(r===Ua||r===Na||r===Oa||r===Fa)if(l===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ua)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ua)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Na)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Oa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zl||r===kl||r===Gl||r===Hl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===zl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===eu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vl||r===Wl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Vl)return l===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Wl)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xl||r===ql||r===Yl||r===jl||r===$l||r===Kl||r===Zl||r===Jl||r===Ql||r===ec||r===tc||r===nc||r===ic||r===rc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Xl)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ql)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yl)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jl)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$l)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kl)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zl)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jl)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ql)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ec)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===tc)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nc)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ic)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rc)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ba||r===sc||r===ac)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ba)return l===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ac)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cf||r===oc||r===lc||r===cc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ba)return a.COMPRESSED_RED_RGTC1_EXT;if(r===oc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===cc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ni?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class y0 extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Un extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S0={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(S0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class E0 extends Vi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const g=t.getContextAttributes();let m=null,p=null;const v=[],x=[],S=new be;let w=null;const b=new on;b.layers.enable(1),b.viewport=new dt;const T=new on;T.layers.enable(2),T.viewport=new dt;const L=[b,T],M=new y0;M.layers.enable(1),M.layers.enable(2);let A=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let J=v[j];return J===void 0&&(J=new lo,v[j]=J),J.getTargetRaySpace()},this.getControllerGrip=function(j){let J=v[j];return J===void 0&&(J=new lo,v[j]=J),J.getGripSpace()},this.getHand=function(j){let J=v[j];return J===void 0&&(J=new lo,v[j]=J),J.getHandSpace()};function X(j){const J=x.indexOf(j.inputSource);if(J===-1)return;const ae=v[J];ae!==void 0&&(ae.update(j.inputSource,j.frame,c||o),ae.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",P);for(let j=0;j<v.length;j++){const J=x[j];J!==null&&(x[j]=null,v[j].disconnect(J))}A=null,O=null,e.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",K),i.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Pn(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,ae=null,Ee=null;g.depth&&(Ee=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=g.stencil?wr:Oi,ae=g.stencil?Ni:oi);const Me={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Me),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Pn(d.textureWidth,d.textureHeight,{format:Rn,type:fi,depthTexture:new mu(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const De=e.properties.get(p);De.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(j){for(let J=0;J<j.removed.length;J++){const ae=j.removed[J],Ee=x.indexOf(ae);Ee>=0&&(x[Ee]=null,v[Ee].disconnect(ae))}for(let J=0;J<j.added.length;J++){const ae=j.added[J];let Ee=x.indexOf(ae);if(Ee===-1){for(let De=0;De<v.length;De++)if(De>=x.length){x.push(ae),Ee=De;break}else if(x[De]===null){x[De]=ae,Ee=De;break}if(Ee===-1)break}const Me=v[Ee];Me&&Me.connect(ae)}}const N=new D,F=new D;function k(j,J,ae){N.setFromMatrixPosition(J.matrixWorld),F.setFromMatrixPosition(ae.matrixWorld);const Ee=N.distanceTo(F),Me=J.projectionMatrix.elements,De=ae.projectionMatrix.elements,Re=Me[14]/(Me[10]-1),xe=Me[14]/(Me[10]+1),ze=(Me[9]+1)/Me[5],G=(Me[9]-1)/Me[5],At=(Me[8]-1)/Me[0],oe=(De[8]+1)/De[0],Oe=Re*At,ye=Re*oe,nt=Ee/(-At+oe),Ve=nt*-At;J.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ve),j.translateZ(nt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const E=Re+nt,y=xe+nt,U=Oe-Ve,W=ye+(Ee-Ve),Z=ze*xe/y*E,te=G*xe/y*E;j.projectionMatrix.makePerspective(U,W,Z,te,E,y),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function q(j,J){J===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(J.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;M.near=T.near=b.near=j.near,M.far=T.far=b.far=j.far,(A!==M.near||O!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,O=M.far);const J=j.parent,ae=M.cameras;q(M,J);for(let Ee=0;Ee<ae.length;Ee++)q(ae[Ee],J);ae.length===2?k(M,b,T):M.projectionMatrix.copy(b.projectionMatrix),B(j,M,J)};function B(j,J,ae){ae===null?j.matrix.copy(J.matrixWorld):(j.matrix.copy(ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(J.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Lo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)};let $=null;function ee(j,J){if(h=J.getViewerPose(c||o),_=J,h!==null){const ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Ee=!1;ae.length!==M.cameras.length&&(M.cameras.length=0,Ee=!0);for(let Me=0;Me<ae.length;Me++){const De=ae[Me];let Re=null;if(f!==null)Re=f.getViewport(De);else{const ze=u.getViewSubImage(d,De);Re=ze.viewport,Me===0&&(e.setRenderTargetTextures(p,ze.colorTexture,d.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(p))}let xe=L[Me];xe===void 0&&(xe=new on,xe.layers.enable(Me),xe.viewport=new dt,L[Me]=xe),xe.matrix.fromArray(De.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(De.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Re.x,Re.y,Re.width,Re.height),Me===0&&(M.matrix.copy(xe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ee===!0&&M.cameras.push(xe)}}for(let ae=0;ae<v.length;ae++){const Ee=x[ae],Me=v[ae];Ee!==null&&Me!==void 0&&Me.update(Ee,J,c||o)}$&&$(j,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const ie=new pu;ie.setAnimationLoop(ee),this.setAnimationLoop=function(j){$=j},this.dispose=function(){}}}function T0(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function b0(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const S=x.program;n.uniformBlockBinding(v,S)}function c(v,x){let S=i[v.id];S===void 0&&(_(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",m));const w=x.program;n.updateUBOMapping(v,w);const b=e.render.frame;r[v.id]!==b&&(d(v),r[v.id]=b)}function h(v){const x=u();v.__bindingPointIndex=x;const S=s.createBuffer(),w=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,w,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,S),S}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],S=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,T=S.length;b<T;b++){const L=Array.isArray(S[b])?S[b]:[S[b]];for(let M=0,A=L.length;M<A;M++){const O=L[M];if(f(O,b,M,w)===!0){const X=O.__offset,K=Array.isArray(O.value)?O.value:[O.value];let P=0;for(let N=0;N<K.length;N++){const F=K[N],k=g(F);typeof F=="number"||typeof F=="boolean"?(O.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,X+P,O.__data)):F.isMatrix3?(O.__data[0]=F.elements[0],O.__data[1]=F.elements[1],O.__data[2]=F.elements[2],O.__data[3]=0,O.__data[4]=F.elements[3],O.__data[5]=F.elements[4],O.__data[6]=F.elements[5],O.__data[7]=0,O.__data[8]=F.elements[6],O.__data[9]=F.elements[7],O.__data[10]=F.elements[8],O.__data[11]=0):(F.toArray(O.__data,P),P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,X,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,S,w){const b=v.value,T=x+"_"+S;if(w[T]===void 0)return typeof b=="number"||typeof b=="boolean"?w[T]=b:w[T]=b.clone(),!0;{const L=w[T];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return w[T]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function _(v){const x=v.uniforms;let S=0;const w=16;for(let T=0,L=x.length;T<L;T++){const M=Array.isArray(x[T])?x[T]:[x[T]];for(let A=0,O=M.length;A<O;A++){const X=M[A],K=Array.isArray(X.value)?X.value:[X.value];for(let P=0,N=K.length;P<N;P++){const F=K[P],k=g(F),q=S%w;q!==0&&w-q<k.boundary&&(S+=w-q),X.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=k.storage}}}const b=S%w;return b>0&&(S+=w-b),v.__size=S,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class yu{constructor(e={}){const{canvas:t=Sf(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this._useLegacyLights=!1,this.toneMapping=di,this.toneMappingExposure=1;const x=this;let S=!1,w=0,b=0,T=null,L=-1,M=null;const A=new dt,O=new dt;let X=null;const K=new Ce(0);let P=0,N=t.width,F=t.height,k=1,q=null,B=null;const $=new dt(0,0,N,F),ee=new dt(0,0,N,F);let ie=!1;const j=new il;let J=!1,ae=!1,Ee=null;const Me=new xt,De=new be,Re=new D,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return T===null?k:1}let G=n;function At(C,z){for(let V=0;V<C.length;V++){const Y=C[V],H=t.getContext(Y,z);if(H!==null)return H}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jo}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ne,!1),G===null){const z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),G=At(z,C),G===null)throw At(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let oe,Oe,ye,nt,Ve,E,y,U,W,Z,te,pe,le,ue,_e,Se,Q,Fe,Ne,Pe,Te,de,R,re;function ve(){oe=new Ng(G),Oe=new Rg(G,oe,e),oe.init(Oe),de=new M0(G,oe,Oe),ye=new x0(G,oe,Oe),nt=new Bg(G),Ve=new r0,E=new v0(G,oe,ye,Ve,Oe,de,nt),y=new Lg(x),U=new Ug(x),W=new qf(G,Oe),R=new Ag(G,oe,W,Oe),Z=new Og(G,W,nt,R),te=new Hg(G,Z,W,nt),Ne=new Gg(G,Oe,E),Se=new Pg(Ve),pe=new i0(x,y,U,oe,Oe,R,Se),le=new T0(x,Ve),ue=new a0,_e=new d0(oe,Oe),Fe=new wg(x,y,U,ye,te,d,l),Q=new _0(x,te,Oe),re=new b0(G,nt,Oe,ye),Pe=new Cg(G,oe,nt,Oe),Te=new Fg(G,oe,nt,Oe),nt.programs=pe.programs,x.capabilities=Oe,x.extensions=oe,x.properties=Ve,x.renderLists=ue,x.shadowMap=Q,x.state=ye,x.info=nt}ve();const fe=new E0(x,G);this.xr=fe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=oe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=oe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(N,F,!1))},this.getSize=function(C){return C.set(N,F)},this.setSize=function(C,z,V=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,F=z,t.width=Math.floor(C*k),t.height=Math.floor(z*k),V===!0&&(t.style.width=C+"px",t.style.height=z+"px"),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(N*k,F*k).floor()},this.setDrawingBufferSize=function(C,z,V){N=C,F=z,k=V,t.width=Math.floor(C*V),t.height=Math.floor(z*V),this.setViewport(0,0,C,z)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy($)},this.setViewport=function(C,z,V,Y){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,z,V,Y),ye.viewport(A.copy($).multiplyScalar(k).floor())},this.getScissor=function(C){return C.copy(ee)},this.setScissor=function(C,z,V,Y){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,z,V,Y),ye.scissor(O.copy(ee).multiplyScalar(k).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(C){ye.setScissorTest(ie=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){B=C},this.getClearColor=function(C){return C.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(C=!0,z=!0,V=!0){let Y=0;if(C){let H=!1;if(T!==null){const me=T.texture.format;H=me===Qh||me===Jh||me===Zh}if(H){const me=T.texture.type,we=me===fi||me===oi||me===el||me===Ni||me===$h||me===Kh,Ie=Fe.getClearColor(),Ue=Fe.getClearAlpha(),We=Ie.r,Be=Ie.g,He=Ie.b;we?(f[0]=We,f[1]=Be,f[2]=He,f[3]=Ue,G.clearBufferuiv(G.COLOR,0,f)):(_[0]=We,_[1]=Be,_[2]=He,_[3]=Ue,G.clearBufferiv(G.COLOR,0,_))}else Y|=G.COLOR_BUFFER_BIT}z&&(Y|=G.DEPTH_BUFFER_BIT),V&&(Y|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),ue.dispose(),_e.dispose(),Ve.dispose(),y.dispose(),U.dispose(),te.dispose(),R.dispose(),re.dispose(),pe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",tt),fe.removeEventListener("sessionend",Ye),Ee&&(Ee.dispose(),Ee=null),lt.stop()};function se(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=nt.autoReset,z=Q.enabled,V=Q.autoUpdate,Y=Q.needsUpdate,H=Q.type;ve(),nt.autoReset=C,Q.enabled=z,Q.autoUpdate=V,Q.needsUpdate=Y,Q.type=H}function ne(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ce(C){const z=C.target;z.removeEventListener("dispose",ce),Le(z)}function Le(C){Ae(C),Ve.remove(C)}function Ae(C){const z=Ve.get(C).programs;z!==void 0&&(z.forEach(function(V){pe.releaseProgram(V)}),C.isShaderMaterial&&pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,V,Y,H,me){z===null&&(z=xe);const we=H.isMesh&&H.matrixWorld.determinant()<0,Ie=xs(C,z,V,Y,H);ye.setMaterial(Y,we);let Ue=V.index,We=1;if(Y.wireframe===!0){if(Ue=Z.getWireframeAttribute(V),Ue===void 0)return;We=2}const Be=V.drawRange,He=V.attributes.position;let ut=Be.start*We,ge=(Be.start+Be.count)*We;me!==null&&(ut=Math.max(ut,me.start*We),ge=Math.min(ge,(me.start+me.count)*We)),Ue!==null?(ut=Math.max(ut,0),ge=Math.min(ge,Ue.count)):He!=null&&(ut=Math.max(ut,0),ge=Math.min(ge,He.count));const Qe=ge-ut;if(Qe<0||Qe===1/0)return;R.setup(H,Y,Ie,V,Ue);let Tt,$e=Pe;if(Ue!==null&&(Tt=W.get(Ue),$e=Te,$e.setIndex(Tt)),H.isMesh)Y.wireframe===!0?(ye.setLineWidth(Y.wireframeLinewidth*ze()),$e.setMode(G.LINES)):$e.setMode(G.TRIANGLES);else if(H.isLine){let Xe=Y.linewidth;Xe===void 0&&(Xe=1),ye.setLineWidth(Xe*ze()),H.isLineSegments?$e.setMode(G.LINES):H.isLineLoop?$e.setMode(G.LINE_LOOP):$e.setMode(G.LINE_STRIP)}else H.isPoints?$e.setMode(G.POINTS):H.isSprite&&$e.setMode(G.TRIANGLES);if(H.isBatchedMesh)$e.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)$e.renderInstances(ut,Qe,H.count);else if(V.isInstancedBufferGeometry){const Xe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,qi=Math.min(V.instanceCount,Xe);$e.renderInstances(ut,Qe,qi)}else $e.render(ut,Qe)};function ke(C,z,V){C.transparent===!0&&C.side===xn&&C.forceSinglePass===!1?(C.side=jt,C.needsUpdate=!0,yi(C,z,V),C.side=gi,C.needsUpdate=!0,yi(C,z,V),C.side=xn):yi(C,z,V)}this.compile=function(C,z,V=null){V===null&&(V=C),m=_e.get(V),m.init(),v.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),C!==V&&C.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(x._useLegacyLights);const Y=new Set;return C.traverse(function(H){const me=H.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){const Ie=me[we];ke(Ie,V,H),Y.add(Ie)}else ke(me,V,H),Y.add(me)}),v.pop(),m=null,Y},this.compileAsync=function(C,z,V=null){const Y=this.compile(C,z,V);return new Promise(H=>{function me(){if(Y.forEach(function(we){Ve.get(we).currentProgram.isReady()&&Y.delete(we)}),Y.size===0){H(C);return}setTimeout(me,10)}oe.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Ge=null;function Je(C){Ge&&Ge(C)}function tt(){lt.stop()}function Ye(){lt.start()}const lt=new pu;lt.setAnimationLoop(Je),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(C){Ge=C,fe.setAnimationLoop(C),C===null?lt.stop():lt.start()},fe.addEventListener("sessionstart",tt),fe.addEventListener("sessionend",Ye),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(z),z=fe.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,z,T),m=_e.get(C,v.length),m.init(),v.push(m),Me.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),j.setFromProjectionMatrix(Me),ae=this.localClippingEnabled,J=Se.init(this.clippingPlanes,ae),g=ue.get(C,p.length),g.init(),p.push(g),Gt(C,z,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(q,B),this.info.render.frame++,J===!0&&Se.beginShadows();const V=m.state.shadowsArray;if(Q.render(V,C,z),J===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),Fe.render(g,C),m.setupLights(x._useLegacyLights),z.isArrayCamera){const Y=z.cameras;for(let H=0,me=Y.length;H<me;H++){const we=Y[H];Ze(g,C,we,we.viewport)}}else Ze(g,C,z);T!==null&&(E.updateMultisampleRenderTarget(T),E.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(x,C,z),R.resetDefaultState(),L=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Gt(C,z,V,Y){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)V=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||j.intersectsSprite(C)){Y&&Re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Me);const we=te.update(C),Ie=C.material;Ie.visible&&g.push(C,we,Ie,V,Re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||j.intersectsObject(C))){const we=te.update(C),Ie=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Re.copy(C.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Re.copy(we.boundingSphere.center)),Re.applyMatrix4(C.matrixWorld).applyMatrix4(Me)),Array.isArray(Ie)){const Ue=we.groups;for(let We=0,Be=Ue.length;We<Be;We++){const He=Ue[We],ut=Ie[He.materialIndex];ut&&ut.visible&&g.push(C,we,ut,V,Re.z,He)}}else Ie.visible&&g.push(C,we,Ie,V,Re.z,null)}}const me=C.children;for(let we=0,Ie=me.length;we<Ie;we++)Gt(me[we],z,V,Y)}function Ze(C,z,V,Y){const H=C.opaque,me=C.transmissive,we=C.transparent;m.setupLightsView(V),J===!0&&Se.setGlobalState(x.clippingPlanes,V),me.length>0&&Lt(H,me,z,V),Y&&ye.viewport(A.copy(Y)),H.length>0&&Bn(H,z,V),me.length>0&&Bn(me,z,V),we.length>0&&Bn(we,z,V),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Lt(C,z,V,Y){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const me=Oe.isWebGL2;Ee===null&&(Ee=new Pn(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?Zn:fi,minFilter:is,samples:me?4:0})),x.getDrawingBufferSize(De),me?Ee.setSize(De.x,De.y):Ee.setSize(Do(De.x),Do(De.y));const we=x.getRenderTarget();x.setRenderTarget(Ee),x.getClearColor(K),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Ie=x.toneMapping;x.toneMapping=di,Bn(C,V,Y),E.updateMultisampleRenderTarget(Ee),E.updateRenderTargetMipmap(Ee);let Ue=!1;for(let We=0,Be=z.length;We<Be;We++){const He=z[We],ut=He.object,ge=He.geometry,Qe=He.material,Tt=He.group;if(Qe.side===xn&&ut.layers.test(Y.layers)){const $e=Qe.side;Qe.side=jt,Qe.needsUpdate=!0,Fr(ut,V,Y,ge,Qe,Tt),Qe.side=$e,Qe.needsUpdate=!0,Ue=!0}}Ue===!0&&(E.updateMultisampleRenderTarget(Ee),E.updateRenderTargetMipmap(Ee)),x.setRenderTarget(we),x.setClearColor(K,P),x.toneMapping=Ie}function Bn(C,z,V){const Y=z.isScene===!0?z.overrideMaterial:null;for(let H=0,me=C.length;H<me;H++){const we=C[H],Ie=we.object,Ue=we.geometry,We=Y===null?we.material:Y,Be=we.group;Ie.layers.test(V.layers)&&Fr(Ie,z,V,Ue,We,Be)}}function Fr(C,z,V,Y,H,me){C.onBeforeRender(x,z,V,Y,H,me),C.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.onBeforeRender(x,z,V,Y,C,me),H.transparent===!0&&H.side===xn&&H.forceSinglePass===!1?(H.side=jt,H.needsUpdate=!0,x.renderBufferDirect(V,z,Y,H,C,me),H.side=gi,H.needsUpdate=!0,x.renderBufferDirect(V,z,Y,H,C,me),H.side=xn):x.renderBufferDirect(V,z,Y,H,C,me),C.onAfterRender(x,z,V,Y,H,me)}function yi(C,z,V){z.isScene!==!0&&(z=xe);const Y=Ve.get(C),H=m.state.lights,me=m.state.shadowsArray,we=H.state.version,Ie=pe.getParameters(C,H.state,me,z,V),Ue=pe.getProgramCacheKey(Ie);let We=Y.programs;Y.environment=C.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(C.isMeshStandardMaterial?U:y).get(C.envMap||Y.environment),We===void 0&&(C.addEventListener("dispose",ce),We=new Map,Y.programs=We);let Be=We.get(Ue);if(Be!==void 0){if(Y.currentProgram===Be&&Y.lightsStateVersion===we)return zr(C,Ie),Be}else Ie.uniforms=pe.getUniforms(C),C.onBuild(V,Ie,x),C.onBeforeCompile(Ie,x),Be=pe.acquireProgram(Ie,Ue),We.set(Ue,Be),Y.uniforms=Ie.uniforms;const He=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(He.clippingPlanes=Se.uniform),zr(C,Ie),Y.needsLights=Ms(C),Y.lightsStateVersion=we,Y.needsLights&&(He.ambientLightColor.value=H.state.ambient,He.lightProbe.value=H.state.probe,He.directionalLights.value=H.state.directional,He.directionalLightShadows.value=H.state.directionalShadow,He.spotLights.value=H.state.spot,He.spotLightShadows.value=H.state.spotShadow,He.rectAreaLights.value=H.state.rectArea,He.ltc_1.value=H.state.rectAreaLTC1,He.ltc_2.value=H.state.rectAreaLTC2,He.pointLights.value=H.state.point,He.pointLightShadows.value=H.state.pointShadow,He.hemisphereLights.value=H.state.hemi,He.directionalShadowMap.value=H.state.directionalShadowMap,He.directionalShadowMatrix.value=H.state.directionalShadowMatrix,He.spotShadowMap.value=H.state.spotShadowMap,He.spotLightMatrix.value=H.state.spotLightMatrix,He.spotLightMap.value=H.state.spotLightMap,He.pointShadowMap.value=H.state.pointShadowMap,He.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Be,Y.uniformsList=null,Be}function Br(C){if(C.uniformsList===null){const z=C.currentProgram.getUniforms();C.uniformsList=ea.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function zr(C,z){const V=Ve.get(C);V.outputColorSpace=z.outputColorSpace,V.batching=z.batching,V.instancing=z.instancing,V.instancingColor=z.instancingColor,V.skinning=z.skinning,V.morphTargets=z.morphTargets,V.morphNormals=z.morphNormals,V.morphColors=z.morphColors,V.morphTargetsCount=z.morphTargetsCount,V.numClippingPlanes=z.numClippingPlanes,V.numIntersection=z.numClipIntersection,V.vertexAlphas=z.vertexAlphas,V.vertexTangents=z.vertexTangents,V.toneMapping=z.toneMapping}function xs(C,z,V,Y,H){z.isScene!==!0&&(z=xe),E.resetTextureUnits();const me=z.fog,we=Y.isMeshStandardMaterial?z.environment:null,Ie=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Jn,Ue=(Y.isMeshStandardMaterial?U:y).get(Y.envMap||we),We=Y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),He=!!V.morphAttributes.position,ut=!!V.morphAttributes.normal,ge=!!V.morphAttributes.color;let Qe=di;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Qe=x.toneMapping);const Tt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,$e=Tt!==void 0?Tt.length:0,Xe=Ve.get(Y),qi=m.state.lights;if(J===!0&&(ae===!0||C!==M)){const pn=C===M&&Y.id===L;Se.setState(Y,C,pn)}let ht=!1;Y.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==qi.state.version||Xe.outputColorSpace!==Ie||H.isBatchedMesh&&Xe.batching===!1||!H.isBatchedMesh&&Xe.batching===!0||H.isInstancedMesh&&Xe.instancing===!1||!H.isInstancedMesh&&Xe.instancing===!0||H.isSkinnedMesh&&Xe.skinning===!1||!H.isSkinnedMesh&&Xe.skinning===!0||H.isInstancedMesh&&Xe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Xe.instancingColor===!1&&H.instanceColor!==null||Xe.envMap!==Ue||Y.fog===!0&&Xe.fog!==me||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Se.numPlanes||Xe.numIntersection!==Se.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==Be||Xe.morphTargets!==He||Xe.morphNormals!==ut||Xe.morphColors!==ge||Xe.toneMapping!==Qe||Oe.isWebGL2===!0&&Xe.morphTargetsCount!==$e)&&(ht=!0):(ht=!0,Xe.__version=Y.version);let Ln=Xe.currentProgram;ht===!0&&(Ln=yi(Y,z,H));let Ll=!1,kr=!1,Pa=!1;const Nt=Ln.getUniforms(),Si=Xe.uniforms;if(ye.useProgram(Ln.program)&&(Ll=!0,kr=!0,Pa=!0),Y.id!==L&&(L=Y.id,kr=!0),Ll||M!==C){Nt.setValue(G,"projectionMatrix",C.projectionMatrix),Nt.setValue(G,"viewMatrix",C.matrixWorldInverse);const pn=Nt.map.cameraPosition;pn!==void 0&&pn.setValue(G,Re.setFromMatrixPosition(C.matrixWorld)),Oe.logarithmicDepthBuffer&&Nt.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Nt.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,kr=!0,Pa=!0)}if(H.isSkinnedMesh){Nt.setOptional(G,H,"bindMatrix"),Nt.setOptional(G,H,"bindMatrixInverse");const pn=H.skeleton;pn&&(Oe.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),Nt.setValue(G,"boneTexture",pn.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Nt.setOptional(G,H,"batchingTexture"),Nt.setValue(G,"batchingTexture",H._matricesTexture,E));const La=V.morphAttributes;if((La.position!==void 0||La.normal!==void 0||La.color!==void 0&&Oe.isWebGL2===!0)&&Ne.update(H,V,Ln),(kr||Xe.receiveShadow!==H.receiveShadow)&&(Xe.receiveShadow=H.receiveShadow,Nt.setValue(G,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Si.envMap.value=Ue,Si.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),kr&&(Nt.setValue(G,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&vs(Si,Pa),me&&Y.fog===!0&&le.refreshFogUniforms(Si,me),le.refreshMaterialUniforms(Si,Y,k,F,Ee),ea.upload(G,Br(Xe),Si,E)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ea.upload(G,Br(Xe),Si,E),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Nt.setValue(G,"center",H.center),Nt.setValue(G,"modelViewMatrix",H.modelViewMatrix),Nt.setValue(G,"normalMatrix",H.normalMatrix),Nt.setValue(G,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const pn=Y.uniformsGroups;for(let Da=0,Sd=pn.length;Da<Sd;Da++)if(Oe.isWebGL2){const Dl=pn[Da];re.update(Dl,Ln),re.bind(Dl,Ln)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ln}function vs(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function Ms(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,z,V){Ve.get(C.texture).__webglTexture=z,Ve.get(C.depthTexture).__webglTexture=V;const Y=Ve.get(C);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=V===void 0,Y.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,z){const V=Ve.get(C);V.__webglFramebuffer=z,V.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(C,z=0,V=0){T=C,w=z,b=V;let Y=!0,H=null,me=!1,we=!1;if(C){const Ue=Ve.get(C);Ue.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(G.FRAMEBUFFER,null),Y=!1):Ue.__webglFramebuffer===void 0?E.setupRenderTarget(C):Ue.__hasExternalTextures&&E.rebindTextures(C,Ve.get(C.texture).__webglTexture,Ve.get(C.depthTexture).__webglTexture);const We=C.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const Be=Ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Be[z])?H=Be[z][V]:H=Be[z],me=!0):Oe.isWebGL2&&C.samples>0&&E.useMultisampledRTT(C)===!1?H=Ve.get(C).__webglMultisampledFramebuffer:Array.isArray(Be)?H=Be[V]:H=Be,A.copy(C.viewport),O.copy(C.scissor),X=C.scissorTest}else A.copy($).multiplyScalar(k).floor(),O.copy(ee).multiplyScalar(k).floor(),X=ie;if(ye.bindFramebuffer(G.FRAMEBUFFER,H)&&Oe.drawBuffers&&Y&&ye.drawBuffers(C,H),ye.viewport(A),ye.scissor(O),ye.setScissorTest(X),me){const Ue=Ve.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ue.__webglTexture,V)}else if(we){const Ue=Ve.get(C.texture),We=z||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ue.__webglTexture,V||0,We)}L=-1},this.readRenderTargetPixels=function(C,z,V,Y,H,me,we){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie){ye.bindFramebuffer(G.FRAMEBUFFER,Ie);try{const Ue=C.texture,We=Ue.format,Be=Ue.type;if(We!==Rn&&de.convert(We)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===Zn&&(oe.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Be!==fi&&de.convert(Be)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===li&&(Oe.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-Y&&V>=0&&V<=C.height-H&&G.readPixels(z,V,Y,H,de.convert(We),de.convert(Be),me)}finally{const Ue=T!==null?Ve.get(T).__webglFramebuffer:null;ye.bindFramebuffer(G.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(C,z,V=0){const Y=Math.pow(2,-V),H=Math.floor(z.image.width*Y),me=Math.floor(z.image.height*Y);E.setTexture2D(z,0),G.copyTexSubImage2D(G.TEXTURE_2D,V,0,0,C.x,C.y,H,me),ye.unbindTexture()},this.copyTextureToTexture=function(C,z,V,Y=0){const H=z.image.width,me=z.image.height,we=de.convert(V.format),Ie=de.convert(V.type);E.setTexture2D(V,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,V.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,V.unpackAlignment),z.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Y,C.x,C.y,H,me,we,Ie,z.image.data):z.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Y,C.x,C.y,z.mipmaps[0].width,z.mipmaps[0].height,we,z.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,Y,C.x,C.y,we,Ie,z.image),Y===0&&V.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(C,z,V,Y,H=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=C.max.x-C.min.x+1,we=C.max.y-C.min.y+1,Ie=C.max.z-C.min.z+1,Ue=de.convert(Y.format),We=de.convert(Y.type);let Be;if(Y.isData3DTexture)E.setTexture3D(Y,0),Be=G.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)E.setTexture2DArray(Y,0),Be=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const He=G.getParameter(G.UNPACK_ROW_LENGTH),ut=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ge=G.getParameter(G.UNPACK_SKIP_PIXELS),Qe=G.getParameter(G.UNPACK_SKIP_ROWS),Tt=G.getParameter(G.UNPACK_SKIP_IMAGES),$e=V.isCompressedTexture?V.mipmaps[H]:V.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,$e.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,$e.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,C.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,C.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,C.min.z),V.isDataTexture||V.isData3DTexture?G.texSubImage3D(Be,H,z.x,z.y,z.z,me,we,Ie,Ue,We,$e.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Be,H,z.x,z.y,z.z,me,we,Ie,Ue,$e.data)):G.texSubImage3D(Be,H,z.x,z.y,z.z,me,we,Ie,Ue,We,$e),G.pixelStorei(G.UNPACK_ROW_LENGTH,He),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ut),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ge),G.pixelStorei(G.UNPACK_SKIP_ROWS,Qe),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Tt),H===0&&Y.generateMipmaps&&G.generateMipmap(Be),ye.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),ye.unbindTexture()},this.resetState=function(){w=0,b=0,T=null,ye.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===tl?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===Sa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dt?Fi:tu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Fi?Dt:Jn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class w0 extends yu{}w0.prototype.isWebGL1Renderer=!0;class al{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new al(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class A0 extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class jr extends Wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zc=new D,Jc=new D,Qc=new xt,co=new gs,Vs=new ms;class C0 extends Rt{constructor(e=new Mt,t=new jr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Zc.fromBufferAttribute(t,i-1),Jc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Zc.distanceTo(Jc);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(i),Vs.radius+=r,e.ray.intersectsSphere(Vs)===!1)return;Qc.copy(i).invert(),co.copy(e.ray).applyMatrix4(Qc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,h=new D,u=new D,d=new D,f=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const p=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let x=p,S=v-1;x<S;x+=f){const w=_.getX(x),b=_.getX(x+1);if(c.fromBufferAttribute(m,w),h.fromBufferAttribute(m,b),co.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let x=p,S=v-1;x<S;x+=f){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),co.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const eh=new D,th=new D;class Ws extends C0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)eh.fromBufferAttribute(t,i),th.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+eh.distanceTo(th);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ol extends Wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nh=new xt,No=new gs,Xs=new ms,qs=new D;class Su extends Rt{constructor(e=new Mt,t=new ol){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(i),Xs.radius+=r,e.ray.intersectsSphere(Xs)===!1)return;nh.copy(i).invert(),No.copy(e.ray).applyMatrix4(nh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=d,g=f;_<g;_++){const m=c.getX(_);qs.fromBufferAttribute(u,m),ih(qs,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let _=d,g=f;_<g;_++)qs.fromBufferAttribute(u,_),ih(qs,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ih(s,e,t,n,i,r,o){const a=No.distanceSqToPoint(s);if(a<t){const l=new D;No.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class da extends $t{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wa extends Mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new D,S=new D,w=new D;for(let b=0;b<t.length;b+=3)f(t[b+0],x),f(t[b+1],S),f(t[b+2],w),l(x,S,w,v)}function l(v,x,S,w){const b=w+1,T=[];for(let L=0;L<=b;L++){T[L]=[];const M=v.clone().lerp(S,L/b),A=x.clone().lerp(S,L/b),O=b-L;for(let X=0;X<=O;X++)X===0&&L===b?T[L][X]=M:T[L][X]=M.clone().lerp(A,X/O)}for(let L=0;L<b;L++)for(let M=0;M<2*(b-L)-1;M++){const A=Math.floor(M/2);M%2===0?(d(T[L][A+1]),d(T[L+1][A]),d(T[L][A])):(d(T[L][A+1]),d(T[L+1][A+1]),d(T[L+1][A]))}}function c(v){const x=new D;for(let S=0;S<r.length;S+=3)x.x=r[S+0],x.y=r[S+1],x.z=r[S+2],x.normalize().multiplyScalar(v),r[S+0]=x.x,r[S+1]=x.y,r[S+2]=x.z}function h(){const v=new D;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const S=m(v)/2/Math.PI+.5,w=p(v)/Math.PI+.5;o.push(S,1-w)}_(),u()}function u(){for(let v=0;v<o.length;v+=6){const x=o[v+0],S=o[v+2],w=o[v+4],b=Math.max(x,S,w),T=Math.min(x,S,w);b>.9&&T<.1&&(x<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),w<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,x){const S=v*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function _(){const v=new D,x=new D,S=new D,w=new D,b=new be,T=new be,L=new be;for(let M=0,A=0;M<r.length;M+=9,A+=6){v.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),S.set(r[M+6],r[M+7],r[M+8]),b.set(o[A+0],o[A+1]),T.set(o[A+2],o[A+3]),L.set(o[A+4],o[A+5]),w.copy(v).add(x).add(S).divideScalar(3);const O=m(w);g(b,A+0,v,O),g(T,A+2,x,O),g(L,A+4,S,O)}}function g(v,x,S,w){w<0&&v.x===1&&(o[x]=v.x-1),S.x===0&&S.z===0&&(o[x]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.vertices,e.indices,e.radius,e.details)}}const Ys=new D,js=new D,ho=new D,$s=new an;class R0 extends Mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Zr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:m,c:p}=$s;if(g.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),$s.getNormal(ho),u[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){const x=(v+1)%3,S=u[v],w=u[x],b=$s[h[v]],T=$s[h[x]],L=`${S}_${w}`,M=`${w}_${S}`;M in d&&d[M]?(ho.dot(d[M].normal)<=r&&(f.push(b.x,b.y,b.z),f.push(T.x,T.y,T.z)),d[M]=null):L in d||(d[L]={index0:c[v],index1:c[x],normal:ho.clone()})}}for(const _ in d)if(d[_]){const{index0:g,index1:m}=d[_];Ys.fromBufferAttribute(a,g),js.fromBufferAttribute(a,m),f.push(Ys.x,Ys.y,Ys.z),f.push(js.x,js.y,js.z)}this.setAttribute("position",new rt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ll extends wa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ll(e.radius,e.detail)}}class fa extends Mt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new D,_=new be;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<i;g++){const m=g*(n+1);for(let p=0;p<n;p++){const v=p+m,x=v,S=v+n+1,w=v+n+2,b=v+1;a.push(x,S,b),a.push(S,w,b)}}this.setIndex(a),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class cl extends Mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let S=0;p===0&&o===0?S=.5/t:p===n&&l===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){const b=w/t;u.x=-e*Math.cos(i+b*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+b*r)*Math.sin(o+x*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(b+S,1-x),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const x=h[p][v+1],S=h[p][v],w=h[p+1][v],b=h[p+1][v+1];(p!==0||o>0)&&f.push(x,S,b),(p!==n-1||l<Math.PI)&&f.push(S,w,b)}this.setIndex(f),this.setAttribute("position",new rt(_,3)),this.setAttribute("normal",new rt(g,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hl extends wa{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hl(e.radius,e.detail)}}class gr extends Mt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const g=_/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const g=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,v=(i+1)*f+_;o.push(g,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class rh extends Mt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new D,r=new D;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let _=d,g=d+f;_<g;_+=3)for(let m=0;m<3;m++){const p=a.getX(_+m),v=a.getX(_+(m+1)%3);i.fromBufferAttribute(o,p),r.fromBufferAttribute(o,v),sh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),sh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new rt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function sh(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class P0 extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class L0 extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nu,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class D0 extends L0{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ul extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const uo=new xt,ah=new D,oh=new D;class Eu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ah.setFromMatrixPosition(e.matrixWorld),t.position.copy(ah),oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oh),t.updateMatrixWorld(),uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lh=new xt,qr=new D,fo=new D;class I0 extends Eu{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qr.setFromMatrixPosition(e.matrixWorld),n.position.copy(qr),fo.copy(n.position),fo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fo),n.updateMatrixWorld(),i.makeTranslation(-qr.x,-qr.y,-qr.z),lh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh)}}class Oo extends ul{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new I0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class U0 extends Eu{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class po extends ul{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new U0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class N0 extends ul{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ch(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ch();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ch(){return(typeof performance>"u"?Date:performance).now()}class O0{constructor(e,t,n=0,i=1/0){this.ray=new gs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new nl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Fo(e,this,n,t),n.sort(hh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Fo(e[i],this,n,t);return n.sort(hh),n}}function hh(s,e){return s.distance-e.distance}function Fo(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)Fo(i[r],e,t,!0)}}class uh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(It(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const dh=new D,Ks=new D;class F0{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){dh.subVectors(e,this.start),Ks.subVectors(this.end,this.start);const n=Ks.dot(Ks);let r=Ks.dot(dh)/n;return t&&(r=It(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jo);const fh={type:"change"},mo={type:"start"},ph={type:"end"},Zs=new gs,mh=new Yn,B0=Math.cos(70*yf.DEG2RAD);class z0 extends Vi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yi.ROTATE,MIDDLE:Yi.DOLLY,RIGHT:Yi.PAN},this.touches={ONE:ji.ROTATE,TWO:ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",_e),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_e),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(fh),n.update(),r=i.NONE},this.update=function(){const R=new D,re=new Hi().setFromUnitVectors(e.up,new D(0,1,0)),ve=re.clone().invert(),fe=new D,se=new Hi,I=new D,ne=2*Math.PI;return function(Le=null){const Ae=n.object.position;R.copy(Ae).sub(n.target),R.applyQuaternion(re),a.setFromVector3(R),n.autoRotate&&r===i.NONE&&X(A(Le)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ke=n.minAzimuthAngle,Ge=n.maxAzimuthAngle;isFinite(ke)&&isFinite(Ge)&&(ke<-Math.PI?ke+=ne:ke>Math.PI&&(ke-=ne),Ge<-Math.PI?Ge+=ne:Ge>Math.PI&&(Ge-=ne),ke<=Ge?a.theta=Math.max(ke,Math.min(Ge,a.theta)):a.theta=a.theta>(ke+Ge)/2?Math.max(ke,a.theta):Math.min(Ge,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&b||n.object.isOrthographicCamera?a.radius=$(a.radius):a.radius=$(a.radius*c),R.setFromSpherical(a),R.applyQuaternion(ve),Ae.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Je=!1;if(n.zoomToCursor&&b){let tt=null;if(n.object.isPerspectiveCamera){const Ye=R.length();tt=$(Ye*c);const lt=Ye-tt;n.object.position.addScaledVector(S,lt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ye=new D(w.x,w.y,0);Ye.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Je=!0;const lt=new D(w.x,w.y,0);lt.unproject(n.object),n.object.position.sub(lt).add(Ye),n.object.updateMatrixWorld(),tt=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;tt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(tt).add(n.object.position):(Zs.origin.copy(n.object.position),Zs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Zs.direction))<B0?e.lookAt(n.target):(mh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Zs.intersectPlane(mh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Je=!0);return c=1,b=!1,Je||fe.distanceToSquared(n.object.position)>o||8*(1-se.dot(n.object.quaternion))>o||I.distanceToSquared(n.target)>0?(n.dispatchEvent(fh),fe.copy(n.object.position),se.copy(n.object.quaternion),I.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Fe),n.domElement.removeEventListener("pointerdown",E),n.domElement.removeEventListener("pointercancel",U),n.domElement.removeEventListener("wheel",te),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",U),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_e),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new uh,l=new uh;let c=1;const h=new D,u=new be,d=new be,f=new be,_=new be,g=new be,m=new be,p=new be,v=new be,x=new be,S=new D,w=new be;let b=!1;const T=[],L={};let M=!1;function A(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function O(R){const re=Math.abs(R*.01);return Math.pow(.95,n.zoomSpeed*re)}function X(R){l.theta-=R}function K(R){l.phi-=R}const P=function(){const R=new D;return function(ve,fe){R.setFromMatrixColumn(fe,0),R.multiplyScalar(-ve),h.add(R)}}(),N=function(){const R=new D;return function(ve,fe){n.screenSpacePanning===!0?R.setFromMatrixColumn(fe,1):(R.setFromMatrixColumn(fe,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(ve),h.add(R)}}(),F=function(){const R=new D;return function(ve,fe){const se=n.domElement;if(n.object.isPerspectiveCamera){const I=n.object.position;R.copy(I).sub(n.target);let ne=R.length();ne*=Math.tan(n.object.fov/2*Math.PI/180),P(2*ve*ne/se.clientHeight,n.object.matrix),N(2*fe*ne/se.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(ve*(n.object.right-n.object.left)/n.object.zoom/se.clientWidth,n.object.matrix),N(fe*(n.object.top-n.object.bottom)/n.object.zoom/se.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(R,re){if(!n.zoomToCursor)return;b=!0;const ve=n.domElement.getBoundingClientRect(),fe=R-ve.left,se=re-ve.top,I=ve.width,ne=ve.height;w.x=fe/I*2-1,w.y=-(se/ne)*2+1,S.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function $(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function ee(R){u.set(R.clientX,R.clientY)}function ie(R){B(R.clientX,R.clientX),p.set(R.clientX,R.clientY)}function j(R){_.set(R.clientX,R.clientY)}function J(R){d.set(R.clientX,R.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const re=n.domElement;X(2*Math.PI*f.x/re.clientHeight),K(2*Math.PI*f.y/re.clientHeight),u.copy(d),n.update()}function ae(R){v.set(R.clientX,R.clientY),x.subVectors(v,p),x.y>0?k(O(x.y)):x.y<0&&q(O(x.y)),p.copy(v),n.update()}function Ee(R){g.set(R.clientX,R.clientY),m.subVectors(g,_).multiplyScalar(n.panSpeed),F(m.x,m.y),_.copy(g),n.update()}function Me(R){B(R.clientX,R.clientY),R.deltaY<0?q(O(R.deltaY)):R.deltaY>0&&k(O(R.deltaY)),n.update()}function De(R){let re=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?K(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),re=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?K(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),re=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),re=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),re=!0;break}re&&(R.preventDefault(),n.update())}function Re(R){if(T.length===1)u.set(R.pageX,R.pageY);else{const re=de(R),ve=.5*(R.pageX+re.x),fe=.5*(R.pageY+re.y);u.set(ve,fe)}}function xe(R){if(T.length===1)_.set(R.pageX,R.pageY);else{const re=de(R),ve=.5*(R.pageX+re.x),fe=.5*(R.pageY+re.y);_.set(ve,fe)}}function ze(R){const re=de(R),ve=R.pageX-re.x,fe=R.pageY-re.y,se=Math.sqrt(ve*ve+fe*fe);p.set(0,se)}function G(R){n.enableZoom&&ze(R),n.enablePan&&xe(R)}function At(R){n.enableZoom&&ze(R),n.enableRotate&&Re(R)}function oe(R){if(T.length==1)d.set(R.pageX,R.pageY);else{const ve=de(R),fe=.5*(R.pageX+ve.x),se=.5*(R.pageY+ve.y);d.set(fe,se)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const re=n.domElement;X(2*Math.PI*f.x/re.clientHeight),K(2*Math.PI*f.y/re.clientHeight),u.copy(d)}function Oe(R){if(T.length===1)g.set(R.pageX,R.pageY);else{const re=de(R),ve=.5*(R.pageX+re.x),fe=.5*(R.pageY+re.y);g.set(ve,fe)}m.subVectors(g,_).multiplyScalar(n.panSpeed),F(m.x,m.y),_.copy(g)}function ye(R){const re=de(R),ve=R.pageX-re.x,fe=R.pageY-re.y,se=Math.sqrt(ve*ve+fe*fe);v.set(0,se),x.set(0,Math.pow(v.y/p.y,n.zoomSpeed)),k(x.y),p.copy(v);const I=(R.pageX+re.x)*.5,ne=(R.pageY+re.y)*.5;B(I,ne)}function nt(R){n.enableZoom&&ye(R),n.enablePan&&Oe(R)}function Ve(R){n.enableZoom&&ye(R),n.enableRotate&&oe(R)}function E(R){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",y),n.domElement.addEventListener("pointerup",U)),Ne(R),R.pointerType==="touch"?Se(R):W(R))}function y(R){n.enabled!==!1&&(R.pointerType==="touch"?Q(R):Z(R))}function U(R){Pe(R),T.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",U)),n.dispatchEvent(ph),r=i.NONE}function W(R){let re;switch(R.button){case 0:re=n.mouseButtons.LEFT;break;case 1:re=n.mouseButtons.MIDDLE;break;case 2:re=n.mouseButtons.RIGHT;break;default:re=-1}switch(re){case Yi.DOLLY:if(n.enableZoom===!1)return;ie(R),r=i.DOLLY;break;case Yi.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;j(R),r=i.PAN}else{if(n.enableRotate===!1)return;ee(R),r=i.ROTATE}break;case Yi.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;ee(R),r=i.ROTATE}else{if(n.enablePan===!1)return;j(R),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(mo)}function Z(R){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;J(R);break;case i.DOLLY:if(n.enableZoom===!1)return;ae(R);break;case i.PAN:if(n.enablePan===!1)return;Ee(R);break}}function te(R){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(R.preventDefault(),n.dispatchEvent(mo),Me(pe(R)),n.dispatchEvent(ph))}function pe(R){const re=R.deltaMode,ve={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(re){case 1:ve.deltaY*=16;break;case 2:ve.deltaY*=100;break}return R.ctrlKey&&!M&&(ve.deltaY*=10),ve}function le(R){R.key==="Control"&&(M=!0,document.addEventListener("keyup",ue,{passive:!0,capture:!0}))}function ue(R){R.key==="Control"&&(M=!1,document.removeEventListener("keyup",ue,{passive:!0,capture:!0}))}function _e(R){n.enabled===!1||n.enablePan===!1||De(R)}function Se(R){switch(Te(R),T.length){case 1:switch(n.touches.ONE){case ji.ROTATE:if(n.enableRotate===!1)return;Re(R),r=i.TOUCH_ROTATE;break;case ji.PAN:if(n.enablePan===!1)return;xe(R),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ji.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;G(R),r=i.TOUCH_DOLLY_PAN;break;case ji.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;At(R),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(mo)}function Q(R){switch(Te(R),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;oe(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Oe(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;nt(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ve(R),n.update();break;default:r=i.NONE}}function Fe(R){n.enabled!==!1&&R.preventDefault()}function Ne(R){T.push(R.pointerId)}function Pe(R){delete L[R.pointerId];for(let re=0;re<T.length;re++)if(T[re]==R.pointerId){T.splice(re,1);return}}function Te(R){let re=L[R.pointerId];re===void 0&&(re=new be,L[R.pointerId]=re),re.set(R.pageX,R.pageY)}function de(R){const re=R.pointerId===T[0]?T[1]:T[0];return L[re]}n.domElement.addEventListener("contextmenu",Fe),n.domElement.addEventListener("pointerdown",E),n.domElement.addEventListener("pointercancel",U),n.domElement.addEventListener("wheel",te,{passive:!1}),document.addEventListener("keydown",le,{passive:!0,capture:!0}),this.update()}}const bu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Or{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const k0=new rl(-1,1,1,-1,0,1);class G0 extends Mt{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}}const H0=new G0;class dl{constructor(e){this._mesh=new St(H0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,k0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class V0 extends Or{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=rs.clone(e.uniforms),this.material=new Yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new dl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class gh extends Or{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class W0 extends Or{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class X0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new be);this._width=n.width,this._height=n.height,t=new Pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new V0(bu),this.copyPass.material.blending=Kn,this.clock=new Tu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}gh!==void 0&&(o instanceof gh?n=!0:o instanceof W0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class q0 extends Or{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ce}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Y0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Cr extends Or{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new be(e.x,e.y):new be(256,256),this.clearColor=new Ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Pn(r,o,{type:Zn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Pn(r,o,{type:Zn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Pn(r,o,{type:Zn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Y0;this.highPassUniforms=rs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Yt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new be(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=bu;this.copyUniforms=rs.clone(h.uniforms),this.blendMaterial=new Yt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Bt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ce,this.oldClearAlpha=1,this.basic=new An,this.fsQuad=new dl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new be(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Cr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Cr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new be(.5,.5)},direction:{value:new be(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}Cr.BlurDirectionX=new be(1,0);Cr.BlurDirectionY=new be(0,1);const j0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class $0 extends Or{constructor(){super();const e=j0;this.uniforms=rs.clone(e.uniforms),this.material=new P0({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new dl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function qn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function wu(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var un={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ss={duration:.5,overwrite:!1,delay:0},fl,Ut,ft,Mn=1e8,ot=1/Mn,Bo=Math.PI*2,K0=Bo/4,Z0=0,Au=Math.sqrt,J0=Math.cos,Q0=Math.sin,Pt=function(e){return typeof e=="string"},_t=function(e){return typeof e=="function"},Qn=function(e){return typeof e=="number"},pl=function(e){return typeof e>"u"},Fn=function(e){return typeof e=="object"},Zt=function(e){return e!==!1},ml=function(){return typeof window<"u"},Js=function(e){return _t(e)||Pt(e)},Cu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kt=Array.isArray,ex=/random\([^)]+\)/g,tx=/,\s*/g,_h=/(?:-?\.?\d|\.)+/gi,Ru=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_r=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,go=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Pu=/[+-]=-?[.\d]+/,nx=/[^,'"\[\]\s]+/gi,ix=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,mt,Dn,zo,gl,dn={},pa={},Lu,Du=function(e){return(pa=Rr(e,dn))&&tn},_l=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},as=function(e,t){return!t&&console.warn(e)},Iu=function(e,t){return e&&(dn[e]=t)&&pa&&(pa[e]=t)||dn},os=function(){return 0},rx={suppressEvents:!0,isStart:!0,kill:!1},ta={suppressEvents:!0,kill:!1},sx={suppressEvents:!0},xl={},pi=[],ko={},Uu,sn={},_o={},xh=30,na=[],vl="",Ml=function(e){var t=e[0],n,i;if(Fn(t)||_t(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=na.length;i--&&!na[i].targetTest(t););n=na[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new nd(e[i],n)))||e.splice(i,1);return e},Bi=function(e){return e._gsap||Ml(yn(e))[0]._gsap},Nu=function(e,t,n){return(n=e[t])&&_t(n)?e[t]():pl(n)&&e.getAttribute&&e.getAttribute(t)||n},Jt=function(e,t){return(e=e.split(",")).forEach(t)||e},vt=function(e){return Math.round(e*1e5)/1e5||0},pt=function(e){return Math.round(e*1e7)/1e7||0},yr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},ax=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ma=function(){var e=pi.length,t=pi.slice(0),n,i;for(ko={},pi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},yl=function(e){return!!(e._initted||e._startAt||e.add)},Ou=function(e,t,n,i){pi.length&&!Ut&&ma(),e.render(t,n,!!(Ut&&t<0&&yl(e))),pi.length&&!Ut&&ma()},Fu=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(nx).length<2?t:Pt(e)?e.trim():e},Bu=function(e){return e},fn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ox=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Rr=function(e,t){for(var n in t)e[n]=t[n];return e},vh=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Fn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},ga=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Qr=function(e){var t=e.parent||mt,n=e.keyframes?ox(kt(e.keyframes)):fn;if(Zt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},lx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},zu=function(e,t,n,i,r){var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Aa=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},_i=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},zi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},cx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Go=function(e,t,n,i){return e._startAt&&(Ut?e._startAt.revert(ta):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},hx=function s(e){return!e||e._ts&&s(e.parent)},Mh=function(e){return e._repeat?Pr(e._tTime,e=e.duration()+e._rDelay)*e:0},Pr=function(e,t){var n=Math.floor(e=pt(e/t));return e&&n===e?n-1:n},_a=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ca=function(e){return e._end=pt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ot)||0))},Ra=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=pt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ca(e),n._dirty||zi(n,e)),e},ku=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=_a(e.rawTime(),t),(!t._dur||_s(0,t.totalDuration(),n)-t._tTime>ot)&&t.render(n,!0)),zi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ot}},Nn=function(e,t,n,i){return t.parent&&_i(t),t._start=pt((Qn(n)?n:n||e!==mt?gn(e,n,t):e._time)+t._delay),t._end=pt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),zu(e,t,"_first","_last",e._sort?"_start":0),Ho(t)||(e._recent=t),i||ku(e,t),e._ts<0&&Ra(e,e._tTime),e},Gu=function(e,t){return(dn.ScrollTrigger||_l("scrollTrigger",t))&&dn.ScrollTrigger.create(t,e)},Hu=function(e,t,n,i,r){if(El(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Ut&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Uu!==ln.frame)return pi.push(e),e._lazy=[r,i],1},ux=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Ho=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},dx=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&ux(e)&&!(!e._initted&&Ho(e))||(e._ts<0||e._dp._ts<0)&&!Ho(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=_s(0,e._tDur,t),h=Pr(l,a),e._yoyo&&h&1&&(o=1-o),h!==Pr(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Ut||i||e._zTime===ot||!t&&e._zTime){if(!e._initted&&Hu(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?ot:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Go(e,t,n,!0),e._onUpdate&&!n&&cn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&cn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&_i(e,1),!n&&!Ut&&(cn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},fx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Lr=function(e,t,n,i){var r=e._repeat,o=pt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:pt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Ra(e,e._tTime=e._tDur*a),e.parent&&Ca(e),n||zi(e.parent,e),e},yh=function(e){return e instanceof qt?zi(e):Lr(e,e._dur)},px={_start:0,endTime:os,totalDuration:os},gn=function s(e,t,n){var i=e.labels,r=e._recent||px,o=e.duration()>=Mn?r.endTime(!1):e._dur,a,l,c;return Pt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(kt(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},es=function(e,t,n){var i=Qn(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Zt(l.vars.inherit)&&l.parent;o.immediateRender=Zt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Et(t[0],o,t[r+1])},Mi=function(e,t){return e||e===0?t(e):t},_s=function(e,t,n){return n<e?e:n>t?t:n},zt=function(e,t){return!Pt(e)||!(t=ix.exec(e))?"":t[1]},mx=function(e,t,n){return Mi(n,function(i){return _s(e,t,i)})},Vo=[].slice,Vu=function(e,t){return e&&Fn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Fn(e[0]))&&!e.nodeType&&e!==Dn},gx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Pt(i)&&!t||Vu(i,1)?(r=n).push.apply(r,yn(i)):n.push(i)})||n},yn=function(e,t,n){return ft&&!t&&ft.selector?ft.selector(e):Pt(e)&&!n&&(zo||!Dr())?Vo.call((t||gl).querySelectorAll(e),0):kt(e)?gx(e,n):Vu(e)?Vo.call(e,0):e?[e]:[]},Wo=function(e){return e=yn(e)[0]||as("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return yn(t,n.querySelectorAll?n:n===e?as("Invalid scope")||gl.createElement("div"):e)}},Wu=function(e){return e.sort(function(){return .5-Math.random()})},Xu=function(e){if(_t(e))return e;var t=Fn(e)?e:{each:e},n=ki(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return Pt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||t).length,m=o[g],p,v,x,S,w,b,T,L,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Mn])[1],!M){for(T=-Mn;T<(T=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=o[g]=[],p=l?Math.min(M,g)*h-.5:i%M,v=M===Mn?0:l?g*u/M-.5:i/M|0,T=0,L=Mn,b=0;b<g;b++)x=b%M-p,S=v-(b/M|0),m[b]=w=c?Math.abs(c==="y"?S:x):Au(x*x+S*S),w>T&&(T=w),w<L&&(L=w);i==="random"&&Wu(m),m.max=T-L,m.min=L,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=zt(t.amount||t.each)||0,n=n&&g<0?Rx(n):n}return g=(m[d]-m.min)/m.max||0,pt(m.b+(n?n(g):g)*m.v)+m.u}},Xo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=pt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Qn(n)?0:zt(n))}},qu=function(e,t){var n=kt(e),i,r;return!n&&Fn(e)&&(i=n=e.radius||Mn,e.values?(e=yn(e.values),(r=!Qn(e[0]))&&(i*=i)):e=Xo(e.increment)),Mi(t,n?_t(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Mn,h=0,u=e.length,d,f;u--;)r?(d=e[u].x-a,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?e[h]:o,r||h===o||Qn(o)?h:h+zt(o)}:Xo(e))},Yu=function(e,t,n,i){return Mi(kt(e)?!t:n===!0?!!(n=0):!i,function(){return kt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},_x=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},xx=function(e,t){return function(n){return e(parseFloat(n))+(t||zt(n))}},vx=function(e,t,n){return $u(e,t,0,1,n)},ju=function(e,t,n){return Mi(n,function(i){return e[~~t(i)]})},Mx=function s(e,t,n){var i=t-e;return kt(e)?ju(e,s(0,e.length),t):Mi(n,function(r){return(i+(r-e)%i)%i+e})},yx=function s(e,t,n){var i=t-e,r=i*2;return kt(e)?ju(e,s(0,e.length-1),t):Mi(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},ls=function(e){return e.replace(ex,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(tx);return Yu(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},$u=function(e,t,n,i,r){var o=t-e,a=i-n;return Mi(r,function(l){return n+((l-e)/o*a||0)})},Sx=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var o=Pt(e),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(kt(e)&&!kt(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=t}else i||(e=Rr(kt(e)?[]:{},e));if(!h){for(l in t)Sl.call(a,e,l,"get",t[l]);r=function(_){return wl(_,a)||(o?e.p:e)}}}return Mi(n,r)},Sh=function(e,t,n){var i=e.labels,r=Mn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},cn=function(e,t,n){var i=e.vars,r=i[t],o=ft,a=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&pi.length&&ma(),a&&(ft=a),h=l?r.apply(c,l):r.call(c),ft=o,h},$r=function(e){return _i(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ut),e.progress()<1&&cn(e,"onInterrupt"),e},xr,Ku=[],Zu=function(e){if(e)if(e=!e.name&&e.default||e,ml()||e.headless){var t=e.name,n=_t(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:os,render:wl,add:Sl,kill:zx,modifier:Bx,rawVars:0},o={targetTest:0,get:0,getSetter:bl,aliases:{},register:0};if(Dr(),e!==i){if(sn[t])return;fn(i,fn(ga(e,r),o)),Rr(i.prototype,Rr(r,ga(e,o))),sn[i.prop=t]=i,e.targetTest&&(na.push(i),xl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Iu(t,i),e.register&&e.register(tn,i,Qt)}else Ku.push(e)},at=255,Kr={aqua:[0,at,at],lime:[0,at,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,at],navy:[0,0,128],white:[at,at,at],olive:[128,128,0],yellow:[at,at,0],orange:[at,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[at,0,0],pink:[at,192,203],cyan:[0,at,at],transparent:[at,at,at,0]},xo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*at+.5|0},Ju=function(e,t,n){var i=e?Qn(e)?[e>>16,e>>8&at,e&at]:0:Kr.black,r,o,a,l,c,h,u,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Kr[e])i=Kr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&at,i&at,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&at,e&at]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(_h),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=xo(l+1/3,r,o),i[1]=xo(l,r,o),i[2]=xo(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Ru),n&&i.length<4&&(i[3]=1),i}else i=e.match(_h)||Kr.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/at,o=i[1]/at,a=i[2]/at,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===r?(o-a)/f+(o<a?6:0):u===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Qu=function(e){var t=[],n=[],i=-1;return e.split(mi).forEach(function(r){var o=r.match(_r)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Eh=function(e,t,n){var i="",r=(e+i).match(mi),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return e;if(r=r.map(function(d){return(d=Ju(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Qu(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(mi,"1").split(_r),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(mi),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},mi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Kr)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Ex=/hsl[a]?\(/,ed=function(e){var t=e.join(" "),n;if(mi.lastIndex=0,mi.test(t))return n=Ex.test(t),e[1]=Eh(e[1],n),e[0]=Eh(e[0],n,Qu(e[1])),!0},cs,ln=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,d,f,_=function g(m){var p=s()-i,v=m===!0,x,S,w,b;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,x=w-o,(x>0||v)&&(b=++u.frame,d=w-u.time*1e3,u.time=w=w/1e3,o+=x+(x>=r?4:r-x),S=1),v||(l=c(g)),S)for(f=0;f<a.length;f++)a[f](w,d,b,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Lu&&(!zo&&ml()&&(Dn=zo=window,gl=Dn.document||{},dn.gsap=tn,(Dn.gsapVersions||(Dn.gsapVersions=[])).push(tn.version),Du(pa||Dn.GreenSockGlobals||!Dn.gsap&&Dn||{}),Ku.forEach(Zu)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},cs=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),cs=0,c=os},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,p,v){var x=p?function(S,w,b,T){m(S,w,b,T),u.remove(x)}:m;return u.remove(m),a[v?"unshift":"push"](x),Dr(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u}(),Dr=function(){return!cs&&ln.wake()},Ke={},Tx=/^[\d.\-M][\d.\-,\s]/,bx=/["']/g,wx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(bx,"").trim():+c,i=l.substr(a+1).trim();return t},Ax=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Cx=function(e){var t=(e+"").split("("),n=Ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[wx(t[1])]:Ax(e).split(",").map(Fu)):Ke._CE&&Tx.test(e)?Ke._CE("",e):n},Rx=function(e){return function(t){return 1-e(1-t)}},ki=function(e,t){return e&&(_t(e)?e:Ke[e]||Cx(e))||t},Xi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Jt(e,function(a){Ke[a]=dn[a]=r,Ke[o=a.toLowerCase()]=n;for(var l in r)Ke[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[a+"."+l]=r[l]}),r},td=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},vo=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Bo*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Q0((h-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:td(a);return r=Bo/r,l.config=function(c,h){return s(e,c,h)},l},Mo=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:td(n);return i.config=function(r){return s(e,r)},i};Jt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Xi(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;Xi("Elastic",vo("in"),vo("out"),vo());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Xi("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Xi("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Xi("Circ",function(s){return-(Au(1-s*s)-1)});Xi("Sine",function(s){return s===1?1:-J0(s*K0)+1});Xi("Back",Mo("in"),Mo("out"),Mo());Ke.SteppedEase=Ke.steps=dn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-ot;return function(a){return((i*_s(0,o,a)|0)+r)*n}}};ss.ease=Ke["quad.out"];Jt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return vl+=s+","+s+"Params,"});var nd=function(e,t){this.id=Z0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Nu,this.set=t?t.getSetter:bl},hs=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Lr(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),cs||ln.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Lr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Dr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ra(this,n),!r._dp||r.parent||ku(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Nn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ot||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ou(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Mh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Mh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Pr(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ot?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?_a(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ot?0:this._rts,this.totalTime(_s(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Ca(this),cx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Dr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ot&&(this._tTime-=ot)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=pt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Nn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Zt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_a(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=sx);var i=Ut;return Ut=n,yl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ut=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,yh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,yh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(gn(this,n),Zt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Zt(i)),this._dur||(this._zTime=-ot),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ot,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ot)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=_t(n)?n:Bu,l=function(){var h=i.then;i.then=null,r&&r(),_t(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){$r(this)},s}();fn(hs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ot,_prom:0,_ps:!1,_rts:1});var qt=function(s){wu(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Zt(n.sortChildren),mt&&Nn(n.parent||mt,qn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Gu(qn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return es(0,arguments,this),this},t.from=function(i,r,o){return es(1,arguments,this),this},t.fromTo=function(i,r,o,a){return es(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Qr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Et(i,r,gn(this,o),1),this},t.call=function(i,r,o){return Nn(this,Et.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Et(i,o,gn(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Qr(o).immediateRender=Zt(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},t.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,Qr(a).immediateRender=Zt(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:pt(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,v,x,S,w,b,T;if(this!==mt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,S=this._start,x=this._ts,p=!x,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=pt(h%m),h===l?(g=this._repeat,d=c):(w=pt(h/m),g=~~w,g&&g===w&&(d=c,g--),d>c&&(d=c)),w=Pr(this._tTime,m),!a&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),b&&g&1&&(d=c-d,T=1),g!==w&&!this._lock){var L=b&&w&1,M=L===(b&&g&1);if(g<w&&(L=!L),a=L?0:h%c?c:h,this._lock=1,this.render(a||(T?0:pt(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&cn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,w=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=fx(this,pt(a),pt(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!w&&(cn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=-ot);break}}f=_}else{f=this._last;for(var A=i<0?i:d;f;){if(_=f._prev,(f._act||A<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,r,o||Ut&&yl(f)),d!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=A?-ot:ot);break}}f=_}}if(v&&!r&&(this.pause(),v.render(d>=a?0:-ot)._zTime=d>=a?1:-1,this._ts))return this._start=S,Ca(this),this.render(i,r,o);this._onUpdate&&!r&&cn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&_i(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(cn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Qn(r)||(r=gn(this,r,i)),!(i instanceof hs)){if(kt(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Pt(i))return this.addLabel(i,r);if(_t(i))i=Et.delayedCall(0,i);else return this}return this!==i?Nn(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Mn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Et?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return Pt(i)?this.removeLabel(i):_t(i)?this.killTweensOf(i):(i.parent===this&&Aa(this,i),i===this._recent&&(this._recent=this._last),zi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pt(ln.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=gn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Et.delayedCall(0,r||os,o);return a.data="isPause",this._hasPause=1,Nn(this,a,gn(this,i))},t.removePause=function(i){var r=this._first;for(i=gn(this,i);r;)r._start===i&&r.data==="isPause"&&_i(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ci!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=yn(i),l=this._first,c=Qn(r),h;l;)l instanceof Et?ax(l._targets,a)&&(c?(!ci||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=gn(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=Et.to(o,fn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ot,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Lr(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,fn({startAt:{time:gn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Sh(this,gn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Sh(this,gn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ot)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=pt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return zi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),zi(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=Mn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Nn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=pt(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Lr(o,o===mt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(mt._ts&&(Ou(mt,_a(i,mt)),Uu=ln.frame),ln.frame>=xh){xh+=un.autoSleep||120;var r=mt._first;if((!r||!r._ts)&&un.autoSleep&&ln._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ln.sleep()}}},e}(hs);fn(qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Px=function(e,t,n,i,r,o,a){var l=new Qt(this._pt,e,t,0,1,ld,null,r),c=0,h=0,u,d,f,_,g,m,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ls(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),d=n.match(go)||[];u=go.exec(i);)_=u[0],g=i.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?yr(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=go.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Pu.test(i)||p)&&(l.e=0),this._pt=l,l},Sl=function(e,t,n,i,r,o,a,l,c,h){_t(i)&&(i=i(r||0,e,o));var u=e[t],d=n!=="get"?n:_t(u)?c?e[t.indexOf("set")||!_t(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=_t(u)?c?Nx:ad:Tl,_;if(Pt(i)&&(~i.indexOf("random(")&&(i=ls(i)),i.charAt(1)==="="&&(_=yr(d,i)+(zt(d)||0),(_||_===0)&&(i=_))),!h||d!==i||qo)return!isNaN(d*i)&&i!==""?(_=new Qt(this._pt,e,t,+d||0,i-(d||0),typeof u=="boolean"?Fx:od,0,f),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!u&&!(t in e)&&_l(t,i),Px.call(this,e,t,d,i,f,l||un.stringFilter,c))},Lx=function(e,t,n,i,r){if(_t(e)&&(e=ts(e,r,t,n,i)),!Fn(e)||e.style&&e.nodeType||kt(e)||Cu(e))return Pt(e)?ts(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=ts(e[a],r,t,n,i);return o},id=function(e,t,n,i,r,o){var a,l,c,h;if(sn[e]&&(a=new sn[e]).init(r,a.rawVars?t[e]:Lx(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Qt(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==xr))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},ci,qo,El=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!fl,S=e.timeline,w=i.easeReverse||u,b,T,L,M,A,O,X,K,P,N,F,k,q;if(S&&(!d||!r)&&(r="none"),e._ease=ki(r,ss.ease),e._rEase=w&&(ki(w)||e._ease),e._from=!S&&!!i.runBackwards,e._from&&(e.ratio=1),!S||d&&!i.stagger){if(K=m[0]?Bi(m[0]).harness:0,k=K&&i[K.prop],b=ga(i,xl),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&_?ta:rx),g._lazy=0),o){if(_i(e._startAt=Et.set(m,fn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Zt(l),startAt:null,delay:0,onUpdate:c&&function(){return cn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut||!a&&!f)&&e._startAt.revert(ta),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(a=!1),L=fn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Zt(l),immediateRender:a,stagger:0,parent:p},b),k&&(L[K.prop]=k),_i(e._startAt=Et.set(m,L)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut?e._startAt.revert(ta):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,ot,ot);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Zt(l)||l&&!_,T=0;T<m.length;T++){if(A=m[T],X=A._gsap||Ml(m)[T]._gsap,e._ptLookup[T]=N={},ko[X.id]&&pi.length&&ma(),F=v===m?T:v.indexOf(A),K&&(P=new K).init(A,k||b,e,F,v)!==!1&&(e._pt=M=new Qt(e._pt,A,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(B){N[B]=M}),P.priority&&(O=1)),!K||k)for(L in b)sn[L]&&(P=id(L,b,e,F,A,v))?P.priority&&(O=1):N[L]=M=Sl.call(e,A,L,"get",b[L],F,v,0,i.stringFilter);e._op&&e._op[T]&&e.kill(A,e._op[T]),x&&e._pt&&(ci=e,mt.killTweensOf(A,N,e.globalTime(t)),q=!e.parent,ci=0),e._pt&&l&&(ko[X.id]=1)}O&&cd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,d&&t<=0&&S.render(Mn,!0,!0)},Dx=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return qo=1,e.vars[t]="+=0",El(e,a),qo=0,l?as(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=vt(n)+zt(u.e)),u.b&&(u.b=h.s+zt(u.b))},Ix=function(e,t){var n=e[0]?Bi(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=Rr({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Ux=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(kt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},ts=function(e,t,n,i,r){return _t(e)?e.call(t,n,i,r):Pt(e)&&~e.indexOf("random(")?ls(e):e},rd=vl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",sd={};Jt(rd+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return sd[s]=1});var Et=function(s){wu(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Qr(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||mt,v=(kt(n)||Cu(n)?Qn(n[0]):"length"in i)?[n]:yn(n),x,S,w,b,T,L,M,A;if(a._targets=v.length?Ml(v):as("GSAP target "+n+" not found. https://gsap.com",!un.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||Js(c)||Js(h)){i=a.vars;var O=i.easeReverse||i.yoyoEase;if(x=a.timeline=new qt({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:v}),x.kill(),x.parent=x._dp=qn(a),x._start=0,d||Js(c)||Js(h)){if(b=v.length,M=d&&Xu(d),Fn(d))for(T in d)~rd.indexOf(T)&&(A||(A={}),A[T]=d[T]);for(S=0;S<b;S++)w=ga(i,sd),w.stagger=0,O&&(w.easeReverse=O),A&&Rr(w,A),L=v[S],w.duration=+ts(c,qn(a),S,L,v),w.delay=(+ts(h,qn(a),S,L,v)||0)-a._delay,!d&&b===1&&w.delay&&(a._delay=h=w.delay,a._start+=h,w.delay=0),x.to(L,w,M?M(S,L,v):0),x._ease=Ke.none;x.duration()?c=h=0:a.timeline=0}else if(_){Qr(fn(x.vars.defaults,{ease:"none"})),x._ease=ki(_.ease||i.ease||"none");var X=0,K,P,N;if(kt(_))_.forEach(function(F){return x.to(v,F,">")}),x.duration();else{w={};for(T in _)T==="ease"||T==="easeEach"||Ux(T,_[T],w,_.easeEach);for(T in w)for(K=w[T].sort(function(F,k){return F.t-k.t}),X=0,S=0;S<K.length;S++)P=K[S],N={ease:P.e,duration:(P.t-(S?K[S-1].t:0))/100*c},N[T]=P.v,x.to(v,N,X),X+=N.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return f===!0&&!fl&&(ci=qn(a),mt.killTweensOf(v),ci=0),Nn(p,qn(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!_&&a._start===pt(p._time)&&Zt(u)&&hx(qn(a))&&p.data!=="nested")&&(a._tTime=-ot,a.render(Math.max(0,-h)||0)),m&&Gu(qn(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ot&&!h?l:i<ot?0:i,d,f,_,g,m,p,v,x;if(!c)dx(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(d=pt(u%g),u===l?(_=this._repeat,d=c):(m=pt(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(d=c-d),m=Pr(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=u,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(pt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Hu(this,h?i:d,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var S=d<a;if(S!==this._inv){var w=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(S?-1:1)/w:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(d/c);if(this._from&&(this.ratio=v=1-v),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&u&&!r&&!m&&(cn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Go(this,i,r,o),cn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&cn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Go(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&_i(this,1),!r&&!(h&&!a)&&(u||a||p)&&(cn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){cs||ln.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||El(this,c),h=this._ease(c/this._dur),Dx(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Ra(this,0),this.parent||zu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?$r(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ut),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ci&&ci.vars.overwrite!==!0)._first||$r(this),this.parent&&o!==this.timeline.totalDuration()&&Lr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?yn(i):a,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!r||r==="all")&&lx(a,l))return r==="all"&&(this._pt=0),$r(this);for(u=this._op=this._op||[],r!=="all"&&(Pt(r)&&(g={},Jt(r,function(v){return g[v]=1}),r=g),r=Ix(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],r==="all"?(u[p]=r,_=d,f={}):(f=u[p]=u[p]||{},_=r);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Aa(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&$r(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return es(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return es(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return mt.killTweensOf(i,r,o)},e}(hs);fn(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jt("staggerTo,staggerFrom,staggerFromTo",function(s){Et[s]=function(){var e=new qt,t=Vo.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Tl=function(e,t,n){return e[t]=n},ad=function(e,t,n){return e[t](n)},Nx=function(e,t,n,i){return e[t](i.fp,n)},Ox=function(e,t,n){return e.setAttribute(t,n)},bl=function(e,t){return _t(e[t])?ad:pl(e[t])&&e.setAttribute?Ox:Tl},od=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Fx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ld=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},wl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Bx=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},zx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Aa(this,t,"_pt"):t.dep||(n=1),t=i;return!n},kx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},cd=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Qt=function(){function s(t,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||od,this.d=l||this,this.set=c||Tl,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=kx,this.m=n,this.mt=r,this.tween=i},s}();Jt(vl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return xl[s]=1});dn.TweenMax=dn.TweenLite=Et;dn.TimelineLite=dn.TimelineMax=qt;mt=new qt({sortChildren:!1,defaults:ss,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});un.stringFilter=ed;var Gi=[],ia={},Gx=[],Th=0,Hx=0,yo=function(e){return(ia[e]||Gx).map(function(t){return t()})},Yo=function(){var e=Date.now(),t=[];e-Th>2&&(yo("matchMediaInit"),Gi.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Dn.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),yo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Th=e,yo("matchMedia"))},hd=function(){function s(t,n){this.selector=n&&Wo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Hx++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){_t(n)&&(r=i,i=n,n=_t);var o=this,a=function(){var c=ft,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=Wo(r)),ft=o,u=i.apply(o,arguments),_t(u)&&o._r.push(u),ft=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===_t?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=ft;ft=null,n(this),ft=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Et&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof qt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Et)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Gi.length;o--;)Gi[o].id===this.id&&Gi.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),Vx=function(){function s(t){this.contexts=[],this.scope=t,ft&&ft.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Fn(n)||(n={matches:n});var o=new hd(0,r||this.scope),a=o.conditions={},l,c,h;ft&&!o.selector&&(o.selector=ft.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Dn.matchMedia(n[c]),l&&(Gi.indexOf(o)<0&&Gi.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Yo):l.addEventListener("change",Yo)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),xa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Zu(i)})},timeline:function(e){return new qt(e)},getTweensOf:function(e,t){return mt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Pt(e)&&(e=yn(e)[0]);var r=Bi(e||{}).get,o=n?Bu:Fu;return n==="native"&&(n=""),e&&(t?o((sn[t]&&sn[t].get||r)(e,t,n,i)):function(a,l,c){return o((sn[a]&&sn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=yn(e),e.length>1){var i=e.map(function(h){return tn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var o=sn[t],a=Bi(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;xr._pt=0,u.init(e,n?h+n:h,xr,0,[e]),u.render(1,u),xr._pt&&wl(1,xr)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,r=tn.to(e,fn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(t,l,c,h)};return o.tween=r,o},isTweening:function(e){return mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ki(e.ease,ss.ease)),vh(ss,e||{})},config:function(e){return vh(un,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!sn[a]&&!dn[a]&&as(t+" effect requires "+a+" plugin.")}),_o[t]=function(a,l,c){return n(yn(a),fn(l||{},r),c)},o&&(qt.prototype[t]=function(a,l,c){return this.add(_o[t](a,Fn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ke[e]=ki(t)},parseEase:function(e,t){return arguments.length?ki(e,t):Ke},getById:function(e){return mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new qt(e),i,r;for(n.smoothChildTiming=Zt(e.smoothChildTiming),mt.remove(n),n._dp=0,n._time=n._tTime=mt._time,i=mt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Et&&i.vars.onComplete===i._targets[0]))&&Nn(n,i,i._start-i._delay),i=r;return Nn(mt,n,0),n},context:function(e,t){return e?new hd(e,t):ft},matchMedia:function(e){return new Vx(e)},matchMediaRefresh:function(){return Gi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Yo()},addEventListener:function(e,t){var n=ia[e]||(ia[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ia[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Mx,wrapYoyo:yx,distribute:Xu,random:Yu,snap:qu,normalize:vx,getUnit:zt,clamp:mx,splitColor:Ju,toArray:yn,selector:Wo,mapRange:$u,pipe:_x,unitize:xx,interpolate:Sx,shuffle:Wu},install:Du,effects:_o,ticker:ln,updateRoot:qt.updateRoot,plugins:sn,globalTimeline:mt,core:{PropTween:Qt,globals:Iu,Tween:Et,Timeline:qt,Animation:hs,getCache:Bi,_removeLinkedListItem:Aa,reverting:function(){return Ut},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return fl=e}}};Jt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return xa[s]=Et[s]});ln.add(qt.updateRoot);xr=xa.to({},{duration:0});var Wx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Xx=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Wx(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},So=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(Pt(r)&&(l={},Jt(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Xx(a,r)}}}},tn=xa.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Ut?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},So("roundProps",Xo),So("modifiers"),So("snap",qu))||xa;Et.version=qt.version=tn.version="3.15.0";Lu=1;ml()&&Dr();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bh,hi,Sr,Al,Ui,wh,Cl,qx=function(){return typeof window<"u"},ei={},Li=180/Math.PI,Er=Math.PI/180,ur=Math.atan2,Ah=1e8,Rl=/([A-Z])/g,Yx=/(left|right|width|margin|padding|x)/i,jx=/[\s,\(]\S/,On={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},jo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$x=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Kx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Zx=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Jx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ud=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},dd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Qx=function(e,t,n){return e.style[t]=n},ev=function(e,t,n){return e.style.setProperty(t,n)},tv=function(e,t,n){return e._gsap[t]=n},nv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},iv=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},rv=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},gt="transform",en=gt+"Origin",sv=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in ei&&r){if(this.tfm=this.tfm||{},e!=="transform")e=On[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=jn(i,a)}):this.tfm[e]=o.x?o[e]:jn(i,e),e===en&&(this.tfm.zOrigin=o.zOrigin);else return On.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(gt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(en,t,"")),e=gt}(r||t)&&this.props.push(e,t,r[e])},fd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},av=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Rl,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Cl(),(!r||!r.isStart)&&!n[gt]&&(fd(n),i.zOrigin&&n[en]&&(n[en]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},pd=function(e,t){var n={target:e,props:[],revert:av,save:sv};return e._gsap||tn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},md,$o=function(e,t){var n=hi.createElementNS?hi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hi.createElement(e);return n&&n.style?n:hi.createElement(e)},hn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Rl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Ir(t)||t,1)||""},Ch="O,Moz,ms,Ms,Webkit".split(","),Ir=function(e,t,n){var i=t||Ui,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Ch[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Ch[o]:"")+e},Ko=function(){qx()&&window.document&&(bh=window,hi=bh.document,Sr=hi.documentElement,Ui=$o("div")||{style:{}},$o("div"),gt=Ir(gt),en=gt+"Origin",Ui.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",md=!!Ir("perspective"),Cl=tn.core.reverting,Al=1)},Rh=function(e){var t=e.ownerSVGElement,n=$o("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Sr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Sr.removeChild(n),r},Ph=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},gd=function(e){var t,n;try{t=e.getBBox()}catch{t=Rh(e),n=1}return t&&(t.width||t.height)||n||(t=Rh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ph(e,["x","cx","x1"])||0,y:+Ph(e,["y","cy","y1"])||0,width:0,height:0}:t},_d=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&gd(e))},xi=function(e,t){if(t){var n=e.style,i;t in ei&&t!==en&&(t=gt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Rl,"-$1").toLowerCase())):n.removeAttribute(t)}},ui=function(e,t,n,i,r,o){var a=new Qt(e._pt,t,n,0,1,o?dd:ud);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Lh={deg:1,rad:1,turn:1},ov={grid:1,flex:1},vi=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Ui.style,l=Yx.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,m,p;if(i===o||!r||Lh[i]||Lh[o])return r;if(o!=="px"&&!d&&(r=s(e,t,n,"px")),p=e.getCTM&&_d(e),(f||o==="%")&&(ei[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[h],vt(f?r/_*u:r/100*_);if(a[l?"width":"height"]=u+(d?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===hi||!g.appendChild)&&(g=hi.body),m=g._gsap,m&&f&&m.width&&l&&m.time===ln.time&&!m.uncache)return vt(r/m.width*u);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=u+i,_=e[h],v?e.style[t]=v:xi(e,t)}else(f||o==="%")&&!ov[hn(g,"display")]&&(a.position=hn(e,"position")),g===e&&(a.position="static"),g.appendChild(Ui),_=Ui[h],g.removeChild(Ui),a.position="absolute";return l&&f&&(m=Bi(g),m.time=ln.time,m.width=g[h]),vt(d?_*r/u:_&&r?u/_*r:0)},jn=function(e,t,n,i){var r;return Al||Ko(),t in On&&t!=="transform"&&(t=On[t],~t.indexOf(",")&&(t=t.split(",")[0])),ei[t]&&t!=="transform"?(r=ds(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ma(hn(e,en))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=va[t]&&va[t](e,t,n)||hn(e,t)||Nu(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?vi(e,t,r,n)+n:r},lv=function(e,t,n,i){if(!n||n==="none"){var r=Ir(t,e,1),o=r&&hn(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=hn(e,"borderTopColor"))}var a=new Qt(this._pt,e.style,t,0,1,ld),l=0,c=0,h,u,d,f,_,g,m,p,v,x,S,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=hn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=hn(e,t)||i,g?e.style[t]=g:xi(e,t)),h=[n,i],ed(h),n=h[0],i=h[1],d=n.match(_r)||[],w=i.match(_r)||[],w.length){for(;u=_r.exec(i);)m=u[0],v=i.substring(l,u.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,S=g.substr((f+"").length),m.charAt(1)==="="&&(m=yr(f,m)+S),p=parseFloat(m),x=m.substr((p+"").length),l=_r.lastIndex-x.length,x||(x=x||un.units[t]||S,l===i.length&&(i+=x,a.e+=x)),S!==x&&(f=vi(e,t,g,x)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?dd:ud;return Pu.test(i)&&(a.e=0),this._pt=a,a},Dh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},cv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Dh[n]||n,t[1]=Dh[i]||i,t.join(" ")},hv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ei[a]&&(l=1,a=a==="transformOrigin"?en:gt),xi(n,a);l&&(xi(n,gt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ds(n,1),o.uncache=1,fd(i)))}},va={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Qt(e._pt,t,n,0,0,hv);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},us=[1,0,0,1,0,0],xd={},vd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ih=function(e){var t=hn(e,gt);return vd(t)?us:t.substr(7).match(Ru).map(vt)},Pl=function(e,t){var n=e._gsap||Bi(e),i=e.style,r=Ih(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?us:r):(r===us&&!e.offsetParent&&e!==Sr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Sr.appendChild(e)),r=Ih(e),l?i.display=l:xi(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Sr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Zo=function(e,t,n,i,r,o){var a=e._gsap,l=r||Pl(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],v=l[5],x=t.split(" "),S=parseFloat(x[0])||0,w=parseFloat(x[1])||0,b,T,L,M;n?l!==us&&(T=f*m-_*g)&&(L=S*(m/T)+w*(-g/T)+(g*v-m*p)/T,M=S*(-_/T)+w*(f/T)-(f*v-_*p)/T,S=L,w=M):(b=gd(e),S=b.x+(~x[0].indexOf("%")?S/100*b.width:S),w=b.y+(~(x[1]||x[0]).indexOf("%")?w/100*b.height:w)),i||i!==!1&&a.smooth?(p=S-c,v=w-h,a.xOffset=u+(p*f+v*g)-p,a.yOffset=d+(p*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[en]="0px 0px",o&&(ui(o,a,"xOrigin",c,S),ui(o,a,"yOrigin",h,w),ui(o,a,"xOffset",u,a.xOffset),ui(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+w)},ds=function(e,t){var n=e._gsap||new nd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=hn(e,en)||"0",h,u,d,f,_,g,m,p,v,x,S,w,b,T,L,M,A,O,X,K,P,N,F,k,q,B,$,ee,ie,j,J,ae;return h=u=d=g=m=p=v=x=S=0,f=_=1,n.svg=!!(e.getCTM&&_d(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[gt]!=="none"?l[gt]:"")),i.scale=i.rotate=i.translate="none"),T=Pl(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),Zo(e,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,T)),w=n.xOrigin||0,b=n.yOrigin||0,T!==us&&(O=T[0],X=T[1],K=T[2],P=T[3],h=N=T[4],u=F=T[5],T.length===6?(f=Math.sqrt(O*O+X*X),_=Math.sqrt(P*P+K*K),g=O||X?ur(X,O)*Li:0,v=K||P?ur(K,P)*Li+g:0,v&&(_*=Math.abs(Math.cos(v*Er))),n.svg&&(h-=w-(w*O+b*K),u-=b-(w*X+b*P))):(ae=T[6],j=T[7],$=T[8],ee=T[9],ie=T[10],J=T[11],h=T[12],u=T[13],d=T[14],L=ur(ae,ie),m=L*Li,L&&(M=Math.cos(-L),A=Math.sin(-L),k=N*M+$*A,q=F*M+ee*A,B=ae*M+ie*A,$=N*-A+$*M,ee=F*-A+ee*M,ie=ae*-A+ie*M,J=j*-A+J*M,N=k,F=q,ae=B),L=ur(-K,ie),p=L*Li,L&&(M=Math.cos(-L),A=Math.sin(-L),k=O*M-$*A,q=X*M-ee*A,B=K*M-ie*A,J=P*A+J*M,O=k,X=q,K=B),L=ur(X,O),g=L*Li,L&&(M=Math.cos(L),A=Math.sin(L),k=O*M+X*A,q=N*M+F*A,X=X*M-O*A,F=F*M-N*A,O=k,N=q),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=vt(Math.sqrt(O*O+X*X+K*K)),_=vt(Math.sqrt(F*F+ae*ae)),L=ur(N,F),v=Math.abs(L)>2e-4?L*Li:0,S=J?1/(J<0?-J:J):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!vd(hn(e,gt)),k&&e.setAttribute("transform",k))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=vt(f),n.scaleY=vt(_),n.rotation=vt(g)+a,n.rotationX=vt(m)+a,n.rotationY=vt(p)+a,n.skewX=v+a,n.skewY=x+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[en]=Ma(c)),n.xOffset=n.yOffset=0,n.force3D=un.force3D,n.renderTransform=n.svg?dv:md?Md:uv,n.uncache=0,n},Ma=function(e){return(e=e.split(" "))[0]+" "+e[1]},Eo=function(e,t,n){var i=zt(t);return vt(parseFloat(t)+parseFloat(vi(e,"x",n+"px",i)))+i},uv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Md(e,t)},Ai="0deg",Yr="0px",Ci=") ",Md=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,x=n.zOrigin,S="",w=p==="auto"&&e&&e!==1||p===!0;if(x&&(u!==Ai||h!==Ai)){var b=parseFloat(h)*Er,T=Math.sin(b),L=Math.cos(b),M;b=parseFloat(u)*Er,M=Math.cos(b),o=Eo(v,o,T*M*-x),a=Eo(v,a,-Math.sin(b)*-x),l=Eo(v,l,L*M*-x+x)}m!==Yr&&(S+="perspective("+m+Ci),(i||r)&&(S+="translate("+i+"%, "+r+"%) "),(w||o!==Yr||a!==Yr||l!==Yr)&&(S+=l!==Yr||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ci),c!==Ai&&(S+="rotate("+c+Ci),h!==Ai&&(S+="rotateY("+h+Ci),u!==Ai&&(S+="rotateX("+u+Ci),(d!==Ai||f!==Ai)&&(S+="skew("+d+", "+f+Ci),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Ci),v.style[gt]=S||"translate(0, 0)"},dv=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,x=parseFloat(o),S=parseFloat(a),w,b,T,L,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Er,c*=Er,w=Math.cos(l)*u,b=Math.sin(l)*u,T=Math.sin(l-c)*-d,L=Math.cos(l-c)*d,c&&(h*=Er,M=Math.tan(c-h),M=Math.sqrt(1+M*M),T*=M,L*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),w*=M,b*=M)),w=vt(w),b=vt(b),T=vt(T),L=vt(L)):(w=u,L=d,b=T=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=vi(f,"x",o,"px"),S=vi(f,"y",a,"px")),(_||g||m||p)&&(x=vt(x+_-(_*w+g*T)+m),S=vt(S+g-(_*b+g*L)+p)),(i||r)&&(M=f.getBBox(),x=vt(x+i/100*M.width),S=vt(S+r/100*M.height)),M="matrix("+w+","+b+","+T+","+L+","+x+","+S+")",f.setAttribute("transform",M),v&&(f.style[gt]=M)},fv=function(e,t,n,i,r){var o=360,a=Pt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Li:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Ah)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Ah)%o-~~(c/o)*o)),e._pt=d=new Qt(e._pt,t,n,i,c,$x),d.e=h,d.u="deg",e._props.push(n),d},Uh=function(e,t){for(var n in t)e[n]=t[n];return e},pv=function(e,t,n){var i=Uh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[gt]=t,a=ds(n,1),xi(n,gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[gt],o[gt]=t,a=ds(n,1),o[gt]=c);for(l in ei)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=zt(c),_=zt(h),u=f!==_?vi(n,l,c,_):parseFloat(c),d=parseFloat(h),e._pt=new Qt(e._pt,a,l,u,d-u,jo),e._pt.u=_||0,e._props.push(l));Uh(a,i)};Jt("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});va[e>1?"border"+s:s]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(_){return jn(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,u)}});var yd={name:"css",register:Ko,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,d,f,_,g,m,p,v,x,S,w,b,T,L,M;Al||Ko(),this.styles=this.styles||pd(e),L=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(sn[g]&&id(g,t,n,i,e,r)))){if(f=typeof h,_=va[g],f==="function"&&(h=h.call(n,i,e,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=ls(h)),_)_(this,e,g,h,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",mi.lastIndex=0,mi.test(c)||(m=zt(c),p=zt(h),p?m!==p&&(c=vi(e,g,c,p)+p):m&&(h+=m)),this.add(a,"setProperty",c,h,i,r,0,0,g),o.push(g),L.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],Pt(c)&&~c.indexOf("random(")&&(c=ls(c)),zt(c+"")||c==="auto"||(c+=un.units[g]||zt(jn(e,g))||""),(c+"").charAt(1)==="="&&(c=jn(e,g))):c=jn(e,g),d=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),g in On&&(g==="autoAlpha"&&(d===1&&jn(e,"visibility")==="hidden"&&u&&(d=0),L.push("visibility",0,a.visibility),ui(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=On[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in ei,x){if(this.styles.save(g),M=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=hn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=h,h=hn(e,"perspective"),A?e.style.perspective=A:xi(e,"perspective")}u=parseFloat(h)}if(S||(w=e._gsap,w.renderTransform&&!t.parseTransform||ds(e,t.parseTransform),b=t.smoothOrigin!==!1&&w.smooth,S=this._pt=new Qt(this._pt,a,gt,0,1,w.renderTransform,w,0,-1),S.dep=1),g==="scale")this._pt=new Qt(this._pt,w,"scaleY",w.scaleY,(v?yr(w.scaleY,v+u):u)-w.scaleY||0,jo),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(en,0,a[en]),h=cv(h),w.svg?Zo(e,h,0,b,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==w.zOrigin&&ui(this,w,"zOrigin",w.zOrigin,p),ui(this,a,g,Ma(c),Ma(h)));continue}else if(g==="svgOrigin"){Zo(e,h,1,b,0,this);continue}else if(g in xd){fv(this,w,g,d,v?yr(d,v+h):h);continue}else if(g==="smoothOrigin"){ui(this,w,"smooth",w.smooth,h);continue}else if(g==="force3D"){w[g]=h;continue}else if(g==="transform"){pv(this,h,e);continue}}else g in a||(g=Ir(g)||g);if(x||(u||u===0)&&(d||d===0)&&!jx.test(h)&&g in a)m=(c+"").substr((d+"").length),u||(u=0),p=zt(h)||(g in un.units?un.units[g]:m),m!==p&&(d=vi(e,g,c,p)),this._pt=new Qt(this._pt,x?w:a,g,d,(v?yr(d,v+u):u)-d,!x&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Jx:jo),this._pt.u=p||0,x&&M!==h?(this._pt.b=c,this._pt.e=M,this._pt.r=Zx):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Kx);else if(g in a)lv.call(this,e,g,c,v?v+h:h);else if(g in e)this.add(e,g,c||e[g],v?v+h:h,i,r);else if(g!=="parseTransform"){_l(g,h);continue}x||(g in a?L.push(g,0,a[g]):typeof e[g]=="function"?L.push(g,2,e[g]()):L.push(g,1,c||e[g])),o.push(g)}}T&&cd(this)},render:function(e,t){if(t.tween._time||!Cl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:jn,aliases:On,getSetter:function(e,t,n){var i=On[t];return i&&i.indexOf(",")<0&&(t=i),t in ei&&t!==en&&(e._gsap.x||jn(e,"x"))?n&&wh===n?t==="scale"?nv:tv:(wh=n||{})&&(t==="scale"?iv:rv):e.style&&!pl(e.style[t])?Qx:~t.indexOf("-")?ev:bl(e,t)},core:{_removeProperty:xi,_getMatrix:Pl}};tn.utils.checkPrefix=Ir;tn.core.getStyleSaver=pd;(function(s,e,t,n){var i=Jt(s+","+e+","+t,function(r){ei[r]=1});Jt(e,function(r){un.units[r]="deg",xd[r]=1}),On[i[13]]=s+","+e,Jt(n,function(r){var o=r.split(":");On[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){un.units[s]="px"});tn.registerPlugin(yd);var et=tn.registerPlugin(yd)||tn;et.core.Tween;const Vt=[{id:"mind",index:"01",name:"MIND STONE",roman:"I",colorHex:"#ffd000",colorThree:16764928,coreColor:16773258,darkColor:6706432,domainKey:"intelligence",domain:"INTELLIGENCE",domainTagline:"AI • ML • Decision Systems",marvelTheme:"Vision Neural Gold",entity:"The Scepter / Vision's Core",origin:"Chitauri Scepter / Neural Matrix",vessel:"The Scepter / Vision",frequency:"528.00 THz",refractiveIndex:"2.54",powerLevel:"98.5%",particleCount:180,techStack:["Python","PyTorch","LangChain","FastAPI","Gemini API","TensorFlow"],quote:"It contains an intellect of supreme cosmic density.",description:"Architect autonomous multi-agent networks, neural cognition models, self-refining LLM pipelines, and intelligent decision systems capable of enterprise-scale problem-solving.",stats:[{label:"SYNAPSE DENSITY",value:"Infinite"},{label:"MODEL CAPACITY",value:"Trillion Param"},{label:"HARMONIC",value:"528.00 THz"},{label:"SLOTS OPEN",value:"12 Squads"}]},{id:"space",index:"02",name:"SPACE STONE",roman:"II",colorHex:"#00d2ff",colorThree:54015,coreColor:8449279,darkColor:16486,domainKey:"connectivity",domain:"CONNECTIVITY",domainTagline:"Cybersecurity • Cloud • Networks",marvelTheme:"Tesseract Cyan",entity:"Tesseract (Cosmic Cube)",origin:"Pre-Universe Singularity / Asgardian Vault",vessel:"The Tesseract",frequency:"432.18 THz",refractiveIndex:"2.42",powerLevel:"99.2%",particleCount:160,techStack:["Rust","Go","Kubernetes","eBPF","Cloudflare Workers","WireGuard"],quote:"The Tesseract has awakened. It is on a little world, a human world.",description:"Forge zero-trust defense architectures, planet-scale cloud networks, high-throughput distributed protocols, and resilient cybersecurity fabrics.",stats:[{label:"LATENCY PROFILE",value:"Sub-5ms Mesh"},{label:"DEFENSE MATRIX",value:"Post-Quantum"},{label:"HARMONIC",value:"432.18 THz"},{label:"SLOTS OPEN",value:"10 Squads"}]},{id:"reality",index:"03",name:"REALITY STONE",roman:"III",colorHex:"#ff2a4b",colorThree:16722507,coreColor:16741768,darkColor:6684688,domainKey:"digital",domain:"DIGITAL",domainTagline:"Web • Mobile • Digital Platforms",marvelTheme:"Aether Crimson",entity:"The Aether (Fluid Crystal)",origin:"Pre-Universe Singularity / Svartalfheim",vessel:"The Aether Prism",frequency:"612.44 THz",refractiveIndex:"2.68",powerLevel:"97.8%",particleCount:220,techStack:["TypeScript","React","Flutter","Next.js","Node.js","WebGL"],quote:"It turns matter into dark matter, reshaping physical reality at will.",description:"Bend digital reality. Build hyper-responsive web applications, cross-platform mobile architectures, immersive real-time canvases, and scalable modern platforms.",stats:[{label:"RENDER TARGET",value:"120 FPS WebGL"},{label:"STATE CONFLICT",value:"Sub-30ms CRDT"},{label:"HARMONIC",value:"612.44 THz"},{label:"SLOTS OPEN",value:"14 Squads"}]},{id:"power",index:"04",name:"POWER STONE",roman:"IV",colorHex:"#b026ff",colorThree:11544319,coreColor:14714367,darkColor:4851058,domainKey:"automation",domain:"AUTOMATION",domainTagline:"IoT • Robotics • Embedded Systems",marvelTheme:"Thanos Void Purple",entity:"The Orb / Morag Temple",origin:"Pre-Universe Singularity / Celestial Eson",vessel:"The Orb of Morag",frequency:"741.89 THz",refractiveIndex:"2.75",powerLevel:"100.0%",particleCount:200,techStack:["C++","Rust","ESP32 / Arduino","ROS2","MQTT","FreeRTOS"],quote:"It contains an energy that destroys all organic matter it touches.",description:"Unleash physical and digital kinetic power. Develop autonomous robotics, smart hardware controllers, industrial IoT pipelines, and embedded real-time systems.",stats:[{label:"BUS TELEMETRY",value:"Microsecond"},{label:"KINETIC FAILOVER",value:"Autonomous Swarm"},{label:"HARMONIC",value:"741.89 THz"},{label:"SLOTS OPEN",value:"8 Squads"}]},{id:"time",index:"05",name:"TIME STONE",roman:"V",colorHex:"#00ff88",colorThree:65416,coreColor:9109441,darkColor:21803,domainKey:"analytics",domain:"ANALYTICS",domainTagline:"Data • Prediction • Optimization",marvelTheme:"Doctor Strange Emerald",entity:"Eye of Agamotto / Kamar-Taj",origin:"Pre-Universe Singularity / Sorcerer Supreme",vessel:"Eye of Agamotto",frequency:"852.12 THz",refractiveIndex:"2.48",powerLevel:"98.9%",particleCount:190,techStack:["Python","Kafka","ClickHouse","Pandas","DuckDB","Scikit-Learn"],quote:"Dormammu, I have come to bargain.",description:"Control temporal velocity. Engineer real-time streaming pipelines, high-throughput predictive time-series models, algorithmic optimization engines, and big data intelligence.",stats:[{label:"STREAM INGEST",value:"1M Events/sec"},{label:"ORACLE HORIZON",value:"14,000,605 Paths"},{label:"HARMONIC",value:"852.12 THz"},{label:"SLOTS OPEN",value:"11 Squads"}]},{id:"soul",index:"06",name:"SOUL STONE",roman:"VI",colorHex:"#ff7700",colorThree:16742144,coreColor:16765567,darkColor:10044416,domainKey:"impact",domain:"IMPACT",domainTagline:"Healthcare • Agriculture • Education • Social Good",marvelTheme:"Vormir Sunset Orange",entity:"Vormir Altar / Soul World",origin:"Pre-Universe Singularity / Red Skull Guardian",vessel:"Vormir Shrine",frequency:"963.00 THz",refractiveIndex:"2.62",powerLevel:"99.7%",particleCount:180,techStack:["Python","Flutter","PostgreSQL","FastAPI","Edge AI","OpenCV"],quote:"A soul for a soul. Great technological impact demands great purpose.",description:"Channel technology to transform lives. Pioneer accessible healthcare diagnostics, precision agricultural sensors, adaptive educational tools, and sustainable social impact networks.",stats:[{label:"COMMUNITY REACH",value:"Global Impact"},{label:"ETHICAL CORE",value:"Privacy-Preserving"},{label:"HARMONIC",value:"963.00 THz"},{label:"SLOTS OPEN",value:"15 Squads"}]}],ra=0,mv=1,gv=new D,Nh=new F0,To=new Yn,Oh=new D,Qs=new an;class _v{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Fh,this.unassigned=new Fh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new xv(e[t]));this.compute()}return this}setFromObject(e){const t=[];return e.updateMatrixWorld(!0),e.traverse(function(n){const i=n.geometry;if(i!==void 0){const r=i.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){const l=new D;l.fromBufferAttribute(r,o).applyMatrix4(n.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){const t=this.faces;for(let n=0,i=t.length;n<i;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){const n=this.faces;let i=-1/0,r=1/0;for(let o=0,a=n.length;o<a;o++){const l=n[o],c=l.distanceToPoint(e.origin),h=l.normal.dot(e.direction);if(c>0&&h>=0)return null;const u=h!==0?-c/h:0;if(!(u<=0)&&(h>0?r=Math.min(u,r):i=Math.max(u,i),i>r))return null}return i!==-1/0?e.at(i,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,gv)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}removeAllVerticesFromFace(e){if(e.outside!==null){const t=e.outside;let n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}deleteFaceVertices(e,t){const n=this.removeAllVerticesFromFace(e);if(n!==void 0)if(t===void 0)this.unassigned.appendChain(n);else{let i=n;do{const r=i.next;t.distanceToPoint(i.point)>this.tolerance?this.addVertexToFace(i,t):this.unassigned.append(i),i=r}while(i!==null)}return this}resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{const n=t.next;let i=this.tolerance,r=null;for(let o=0;o<e.length;o++){const a=e[o];if(a.mark===ra){const l=a.distanceToPoint(t.point);if(l>i&&(i=l,r=a),i>1e3*this.tolerance)break}}r!==null&&this.addVertexToFace(t,r),t=n}while(t!==null)}return this}computeExtremes(){const e=new D,t=new D,n=[],i=[];for(let r=0;r<3;r++)n[r]=i[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){const a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),n[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),i[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:i}}computeInitialHull(){const e=this.vertices,t=this.computeExtremes(),n=t.min,i=t.max;let r=0,o=0;for(let d=0;d<3;d++){const f=i[d].point.getComponent(d)-n[d].point.getComponent(d);f>r&&(r=f,o=d)}const a=n[o],l=i[o];let c,h;r=0,Nh.set(a.point,l.point);for(let d=0,f=this.vertices.length;d<f;d++){const _=e[d];if(_!==a&&_!==l){Nh.closestPointToPoint(_.point,!0,Oh);const g=Oh.distanceToSquared(_.point);g>r&&(r=g,c=_)}}r=-1,To.setFromCoplanarPoints(a.point,l.point,c.point);for(let d=0,f=this.vertices.length;d<f;d++){const _=e[d];if(_!==a&&_!==l&&_!==c){const g=Math.abs(To.distanceToPoint(_.point));g>r&&(r=g,h=_)}}const u=[];if(To.distanceToPoint(h.point)<0){u.push(wn.create(a,l,c),wn.create(h,l,a),wn.create(h,c,l),wn.create(h,a,c));for(let d=0;d<3;d++){const f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge(f)),u[d+1].getEdge(1).setTwin(u[f+1].getEdge(0))}}else{u.push(wn.create(a,c,l),wn.create(h,a,l),wn.create(h,l,c),wn.create(h,c,a));for(let d=0;d<3;d++){const f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge((3-d)%3)),u[d+1].getEdge(0).setTwin(u[f+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(u[d]);for(let d=0,f=e.length;d<f;d++){const _=e[d];if(_!==a&&_!==l&&_!==c&&_!==h){r=this.tolerance;let g=null;for(let m=0;m<4;m++){const p=this.faces[m].distanceToPoint(_.point);p>r&&(r=p,g=this.faces[m])}g!==null&&this.addVertexToFace(_,g)}}return this}reindexFaces(){const e=[];for(let t=0;t<this.faces.length;t++){const n=this.faces[t];n.mark===ra&&e.push(n)}return this.faces=e,this}nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0;const n=this.assigned.first().face;let i=n.outside;do{const r=n.distanceToPoint(i.point);r>t&&(t=r,e=i),i=i.next}while(i!==null&&i.face===n);return e}}computeHorizon(e,t,n,i){this.deleteFaceVertices(n),n.mark=mv;let r;t===null?r=t=n.getEdge(0):r=t.next;do{const o=r.twin,a=o.face;a.mark===ra&&(a.distanceToPoint(e)>this.tolerance?this.computeHorizon(e,o,a,i):i.push(r)),r=r.next}while(r!==t);return this}addAdjoiningFace(e,t){const n=wn.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}addNewFaces(e,t){this.newFaces=[];let n=null,i=null;for(let r=0;r<t.length;r++){const o=t[r],a=this.addAdjoiningFace(e,o);n===null?n=a:a.next.setTwin(i),this.newFaces.push(a.face),i=a}return n.next.setTwin(i),this}addVertexToHull(e){const t=[];return this.unassigned.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,t),this.addNewFaces(e,t),this.resolveUnassignedPoints(this.newFaces),this}cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}compute(){let e;for(this.computeInitialHull();(e=this.nextVertexToAdd())!==void 0;)this.addVertexToHull(e);return this.reindexFaces(),this.cleanup(),this}}class wn{constructor(){this.normal=new D,this.midpoint=new D,this.area=0,this.constant=0,this.outside=null,this.mark=ra,this.edge=null}static create(e,t,n){const i=new wn,r=new bo(e,i),o=new bo(t,i),a=new bo(n,i);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,i.edge=r,i.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){const e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return Qs.set(e.point,t.point,n.point),Qs.getNormal(this.normal),Qs.getMidpoint(this.midpoint),this.area=Qs.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}}class bo{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}}class xv{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}}class Fh{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}}class vv extends Mt{constructor(e=[]){super();const t=[],n=[],r=new _v().setFromPoints(e).faces;for(let o=0;o<r.length;o++){const a=r[o];let l=a.edge;do{const c=l.head().point;t.push(c.x,c.y,c.z),n.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new rt(t,3)),this.setAttribute("normal",new rt(n,3))}}let Ri=null;function Mv(){if(Ri)return Ri;const s=document.createElement("canvas");s.width=512,s.height=512;const e=s.getContext("2d");e.fillStyle="#808080",e.fillRect(0,0,512,512);const t=e.getImageData(0,0,512,512),n=t.data;for(let i=0;i<n.length;i+=4){const r=(Math.random()-.5)*48;n[i]=Math.min(255,Math.max(0,128+r)),n[i+1]=n[i],n[i+2]=n[i],n[i+3]=255}e.putImageData(t,0,0),e.strokeStyle="rgba(240, 240, 240, 0.35)",e.lineWidth=1.4;for(let i=0;i<22;i++){e.beginPath();let r=Math.random()*512,o=Math.random()*512;e.moveTo(r,o);for(let a=0;a<5;a++)r+=(Math.random()-.5)*90,o+=(Math.random()-.5)*90,e.lineTo(r,o);e.stroke()}return Ri=new da(s),Ri.wrapS=ns,Ri.wrapT=ns,Ri.repeat.set(2,2),Ri}function yv(s=12){const e=[],t=[];for(let f=0;f<s;f++)t.push(f/s*Math.PI*2+Math.PI/s);const n=t.map(f=>new D(Math.cos(f)*.72*(1+.12*Math.cos(2*f)),.58,Math.sin(f)*.6*(1-.12*Math.cos(2*f)))),i=new D(0,.59,0),r=t.map(f=>new D(Math.cos(f)*1.05*(1+.12*Math.cos(2*f)),.35,Math.sin(f)*.88*(1-.12*Math.cos(2*f)))),o=t.map(f=>new D(Math.cos(f)*1.3*(1+.12*Math.cos(2*f)),.12,Math.sin(f)*1.08*(1-.12*Math.cos(2*f)))),a=t.map(f=>new D(Math.cos(f)*1.3*(1+.12*Math.cos(2*f)),-.12,Math.sin(f)*1.08*(1-.12*Math.cos(2*f)))),l=t.map(f=>new D(Math.cos(f)*.8*(1+.12*Math.cos(2*f)),-.58,Math.sin(f)*.66*(1-.12*Math.cos(2*f)))),c=new D(0,-.98,0);function h(f,_,g){e.push(f.x,f.y,f.z,_.x,_.y,_.z,g.x,g.y,g.z)}function u(f,_,g,m){h(f,_,g),h(f,g,m)}for(let f=0;f<s;f++){const _=(f+1)%s;h(i,n[f],n[_]),u(n[f],r[f],r[_],n[_]),u(r[f],o[f],o[_],r[_]),u(o[f],a[f],a[_],o[_]),u(a[f],l[f],l[_],a[_]),h(l[f],c,l[_])}const d=new Mt;return d.setAttribute("position",new rt(e,3)),d.computeVertexNormals(),d}function dr(s=42,e=1.15,t=1.35,n=1.05){let i=s;function r(){return i=(i*9301+49297)%233280,i/233280}const o=[],a=30;for(let u=0;u<a;u++){const d=r()*2-1,f=r()*Math.PI*2,_=Math.sqrt(Math.max(0,1-d*d)),g=_*Math.cos(f),m=d,p=_*Math.sin(f),v=g*e,x=m*t,S=p*n,w=Math.sqrt(v*v+x*x+S*S),b=u%4===0?.78+r()*.12:.9+r()*.22,T=w*b;o.push({nx:g,ny:m,nz:p,d:T})}o.push({nx:.55,ny:.65,nz:.4,d:1}),o.push({nx:-.6,ny:.5,nz:-.55,d:.95}),o.push({nx:.65,ny:-.6,nz:-.4,d:.98}),o.push({nx:-.5,ny:-.75,nz:.4,d:.92});const l=o.length,c=[];for(let u=0;u<l;u++)for(let d=u+1;d<l;d++)for(let f=d+1;f<l;f++){const _=o[u],g=o[d],m=o[f],p=_.nx*(g.ny*m.nz-g.nz*m.ny)-_.ny*(g.nx*m.nz-g.nz*m.nx)+_.nz*(g.nx*m.ny-g.ny*m.nx);if(Math.abs(p)<1e-4)continue;const v=(_.d*(g.ny*m.nz-g.nz*m.ny)-_.ny*(g.d*m.nz-g.nz*m.d)+_.nz*(g.d*m.ny-g.ny*m.d))/p,x=(_.nx*(g.d*m.nz-g.nz*m.d)-_.d*(g.nx*m.nz-g.nz*m.nx)+_.nz*(g.nx*m.d-g.d*m.nx))/p,S=(_.nx*(g.ny*m.d-g.d*m.ny)-_.ny*(g.nx*m.d-g.d*m.nx)+_.d*(g.nx*m.ny-g.ny*m.nx))/p;let w=!0;for(let b=0;b<l;b++){const T=o[b];if(T.nx*v+T.ny*x+T.nz*S>T.d+.001){w=!1;break}}w&&c.push(new D(v,x,S))}const h=new vv(c);return h.center(),h.computeVertexNormals(),h}function Sv(s){return s==="time"?yv(12):s==="soul"?dr(42,1.15,1.35,1.05):s==="mind"?dr(77,1.08,1.48,1.02):s==="power"?dr(93,1.25,1.28,1.18):s==="space"?dr(17,1.2,1.3,1.12):s==="reality"?dr(51,1.16,1.34,1.14):dr(42,1.2,1.2,1.2)}function Ev(s,e){s.computeBoundingBox();const t=s.boundingBox,n=t.min.y,i=t.max.y,r=Math.max(.001,i-n),o=t.min.x,a=t.max.x,l=Math.max(.001,a-o),c=t.min.z,h=t.max.z,u=Math.max(.001,h-c),d=s.attributes.position,f=new Float32Array(d.count*3);for(let b=0;b<d.count;b++)f[b*3]=(d.getX(b)-o)/l,f[b*3+1]=(d.getY(b)-n)/r,f[b*3+2]=(d.getZ(b)-c)/u;const _=new Float32Array(d.count*3),g=new Kt(_,3);s.setAttribute("color",g);const m=new Ce(e.coreColor).lerp(new Ce(16777215),.62),p=new Ce(e.colorThree),v=new Ce(e.darkColor).multiplyScalar(.36),x=new Ce,S=new Ce,w=b=>{const T=.5+Math.sin(b*4.6)*.3;S.copy(m).lerp(new Ce(16777215),T);for(let L=0;L<d.count;L++){const M=f[L*3],A=f[L*3+1],O=f[L*3+2],X=Math.sin(b*4.5+M*3+O*2.4)*.22+Math.cos(b*3.5+A*2.6)*.13;let K=A*.88+M*.12+X;if(K=Math.max(0,Math.min(1,K)),K<.5){const P=Math.pow(K*2,1.25);x.copy(v).lerp(p,P)}else{const P=Math.pow((K-.5)*2,.82);x.copy(p).lerp(S,P)}_[L*3]=x.r,_[L*3+1]=x.g,_[L*3+2]=x.b}g.needsUpdate=!0};return w(0),w}function Tv(s){const e=new Un;e.name=s.id,e.userData={stoneData:s};const t=Sv(s.id),n=Ev(t,s),i=Mv(),r=new D0({color:16777215,vertexColors:!0,emissive:s.colorThree,emissiveIntensity:.18,roughness:.14,metalness:.06,transmission:0,transparent:!1,opacity:1,depthWrite:!0,ior:1.76,specularIntensity:1,specularColor:new Ce(16777215),clearcoat:.55,clearcoatRoughness:.06,bumpMap:i,bumpScale:.015,flatShading:!0}),o=new St(t,r);o.castShadow=!0,o.receiveShadow=!0,e.add(o);const a=new rh(new ll(1.05,1)),l=new jr({color:s.coreColor,transparent:!0,opacity:0,blending:Bt}),c=new Ws(a,l);c.visible=!1,e.add(c);const h=new jr({color:16777215,transparent:!0,opacity:.45,blending:Bt}),u=new Ws(new rh(t),h);u.visible=!0,e.add(u);const d=new cl(.24,18,18),f=new An({color:s.coreColor,transparent:!0,opacity:0}),_=new St(d,f);_.visible=!1,e.add(_);const g=new Oo(s.coreColor,1.8,10,1.4);g.position.set(0,1,2.6),e.add(g);const m=new Oo(s.colorThree,1.3,8,1.4);m.position.set(0,-1,-2.6),e.add(m);const p=new Un;if(p.name="artifacts",s.id==="space"){const P=new Ur(2.1,2.1,2.1),N=new R0(P),F=new Ws(N,new jr({color:54015,transparent:!0,opacity:.25,blending:Bt}));p.add(F)}else if(s.id==="mind"){const P=new gr(1.92,.005,6,64),N=new An({color:16771584,transparent:!0,opacity:.16,blending:Bt}),F=new St(P,N);F.rotation.set(Math.PI/3.5,0,Math.PI/6);const k=new St(P,N);k.rotation.set(-Math.PI/3.5,0,-Math.PI/6),p.add(F,k)}else if(s.id==="reality")for(let P=0;P<2;P++){const N=1.7+P*.35,F=new gr(N,.015,6,48),k=new An({color:16717636,transparent:!0,opacity:.3-P*.08,blending:Bt}),q=new St(F,k);q.rotation.x=Math.random()*Math.PI,q.rotation.y=Math.random()*Math.PI,q.userData={speedX:.006+P*.004,speedY:.008+P*.003},p.add(q)}else if(s.id==="power"){const P=new Un,N=new hl(.055,0),F=new An({color:14647551,transparent:!0,opacity:.55,blending:Bt});for(let k=0;k<18;k++){const q=.6+Math.random()*.7,B=new St(N,F);B.scale.set(q,q,q);const $=k/18*Math.PI*2,ee=1.85+(Math.random()-.5)*.4,ie=(Math.random()-.5)*.7;B.position.set(Math.cos($)*ee,ie,Math.sin($)*ee),P.add(B)}P.rotation.set(Math.PI/4,0,Math.PI/6),p.add(P)}else if(s.id==="time"){const P=new Un,N=new fa(1.68,1.72,64),F=new fa(2.1,2.15,64),k=new An({color:65416,side:xn,transparent:!0,opacity:.65,blending:Bt}),q=new An({color:6942894,side:xn,transparent:!0,opacity:.45,blending:Bt}),B=new St(N,k),$=new St(F,q);B.rotation.x=Math.PI/2,$.rotation.x=Math.PI/2;const ee=new Mt,ie=1.18,j=[-ie,0,-ie,ie,0,-ie,ie,0,-ie,ie,0,ie,ie,0,ie,-ie,0,ie,-ie,0,ie,-ie,0,-ie];ee.setAttribute("position",new rt(j,3));const J=new jr({color:65416,transparent:!0,opacity:.55,blending:Bt}),ae=new Ws(ee,J),Ee=ae.clone();Ee.rotation.y=Math.PI/4,B.add(ae,Ee);const Me=new Ta(.025,.14),De=new An({color:9109441,side:xn,blending:Bt});for(let Re=0;Re<24;Re++){const xe=Re/24*Math.PI*2,ze=new St(Me,De);ze.position.set(Math.cos(xe)*2.12,0,Math.sin(xe)*2.12),ze.rotation.y=-xe,$.add(ze)}P.add(B,$),p.add(P)}else if(s.id==="soul"){const P=new Un,N=new An({color:16758869,transparent:!0,opacity:.18,blending:Bt}),F=new St(new gr(1.85,.006,6,64),N);F.rotation.set(Math.PI/3,0,Math.PI/6);const k=new St(new gr(1.95,.005,6,64),N);k.rotation.set(-Math.PI/3,0,-Math.PI/6),P.add(F,k),p.add(P)}e.add(p);const v=120,x=new Mt,S=new Float32Array(v*3);for(let P=0;P<v;P++){const N=1+Math.random()*1.8,F=Math.random()*Math.PI*2,k=Math.acos(2*Math.random()-1);S[P*3]=N*Math.sin(k)*Math.cos(F),S[P*3+1]=N*Math.sin(k)*Math.sin(F),S[P*3+2]=N*Math.cos(k)}x.setAttribute("position",new Kt(S,3));const w=document.createElement("canvas");w.width=32,w.height=32;const b=w.getContext("2d"),T=b.createRadialGradient(16,16,0,16,16,16);T.addColorStop(0,"rgba(255, 255, 255, 1)"),T.addColorStop(.3,"rgba(255, 255, 255, 0.7)"),T.addColorStop(.8,"rgba(255, 255, 255, 0.15)"),T.addColorStop(1,"rgba(255, 255, 255, 0)"),b.fillStyle=T,b.fillRect(0,0,32,32);const L=new da(w),M=new ol({color:s.coreColor,size:.1,map:L,transparent:!0,opacity:.7,blending:Bt,depthWrite:!1}),A=new Su(x,M);A.name="particles",e.add(A);const O=.0055+(s.colorThree&7)*4e-4,X=.009+(s.colorThree>>4&7)*4e-4,K=.0042+(s.colorThree>>8&7)*4e-4;return{group:e,gemMesh:o,gemMat:r,wireMesh:u,veinMesh:c,coreMesh:_,pointLight:g,artifactsGroup:p,particles:A,update:(P,N)=>{const F=1+Math.sin(P*3.6)*.1;if(_.scale.set(F,F,F),g.intensity=1.8+Math.sin(P*4.5)*.4,m.intensity=1.3+Math.cos(P*4)*.3,l.opacity=.12+Math.sin(P*4.2)*.07,o.rotation.x+=O+Math.sin(P*1.8)*.0016,o.rotation.y+=X,o.rotation.z+=K+Math.cos(P*1.5)*.0016,c.rotation.copy(o.rotation),u.rotation.copy(o.rotation),n(P),s.id==="space"){const B=p.children[0];B&&(B.rotation.y+=.007,B.rotation.x+=.004)}else if(s.id==="mind")p.children.forEach((B,$)=>{B.rotation.y+=$===0?.009:-.009,B.rotation.z+=.004});else if(s.id==="reality")p.children.forEach(B=>{B.userData&&(B.rotation.x+=B.userData.speedX*1.8,B.rotation.y+=B.userData.speedY*1.8)});else if(s.id==="power"){const B=p.children[0];B&&(B.rotation.y+=.015,B.rotation.z+=.005)}else if(s.id==="time"){const B=p.children[0];B&&B.children.length>=2&&(B.children[0].rotation.z+=.012,B.children[1].rotation.z-=.008)}else if(s.id==="soul"){const B=p.children[0];B&&B.children.length>=2&&(B.children[0].rotation.y+=.009,B.children[1].rotation.y-=.009)}const k=A.geometry.attributes.position.array,q=k.length/3;for(let B=0;B<q;B++){const $=k[B*3],ee=k[B*3+2],ie=.006;k[B*3]=$*Math.cos(ie)-ee*Math.sin(ie),k[B*3+2]=$*Math.sin(ie)+ee*Math.cos(ie)}A.geometry.attributes.position.needsUpdate=!0}}}class bv{constructor(){this.ctx=null,this.isMuted=!0,this.droneGain=null,this.masterGain=null,this.stoneFrequencies={space:[261.63,523.25,1046.5],mind:[293.66,587.33,1174.66],reality:[329.63,659.25,987.77],power:[369.99,739.99,1479.98],time:[392,783.99,1567.98],soul:[440,880,1760]},this.initialized=!1}init(){if(!this.initialized)try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.8,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.startAmbientDrone(),this.initialized=!0}catch(e){console.warn("Web Audio could not be initialized:",e)}}toggleMute(){if(this.initialized?this.isMuted=!this.isMuted:(this.init(),this.isMuted=!1),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.masterGain&&this.ctx){const e=this.isMuted?0:.8;this.masterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.05)}return!this.isMuted}startAmbientDrone(){if(!this.ctx)return;const e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(43.65,this.ctx.currentTime);const t=this.ctx.createOscillator();t.type="sine",t.frequency.setValueAtTime(65.41,this.ctx.currentTime);const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(140,this.ctx.currentTime);const i=this.ctx.createOscillator();i.type="sine",i.frequency.setValueAtTime(.12,this.ctx.currentTime);const r=this.ctx.createGain();r.gain.setValueAtTime(30,this.ctx.currentTime),i.connect(r),r.connect(n.frequency),this.droneGain=this.ctx.createGain(),this.droneGain.gain.setValueAtTime(.25,this.ctx.currentTime),e.connect(n),t.connect(n),n.connect(this.droneGain),this.droneGain.connect(this.masterGain),e.start(),t.start(),i.start()}playStoneChime(e){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.stoneFrequencies[e]||[440,880,1320],n=this.ctx.currentTime;t.forEach((i,r)=>{const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type=r===0?"sine":"triangle",o.frequency.setValueAtTime(i,n),r>0&&o.detune.setValueAtTime(r%2===0?4:-4,n);const l=.28/(r+1);a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(l,n+.04),a.gain.exponentialRampToValueAtTime(1e-4,n+2.2+r*.4),o.connect(a),a.connect(this.masterGain),o.start(n),o.stop(n+3)})}playEnergyPulse(){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter();t.type="sawtooth",t.frequency.setValueAtTime(60,e),t.frequency.exponentialRampToValueAtTime(480,e+.35),t.frequency.exponentialRampToValueAtTime(110,e+.9),i.type="bandpass",i.frequency.setValueAtTime(220,e),i.frequency.linearRampToValueAtTime(1200,e+.35),i.frequency.exponentialRampToValueAtTime(180,e+.9),i.Q.setValueAtTime(5,e),n.gain.setValueAtTime(.01,e),n.gain.linearRampToValueAtTime(.35,e+.15),n.gain.exponentialRampToValueAtTime(.001,e+1.1),t.connect(i),i.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+1.2)}playConvergenceChord(){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(180,e),t.frequency.exponentialRampToValueAtTime(32,e+1.2),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.001,e+2.5),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+2.6),[261.63,293.66,329.63,369.99,392,440].forEach((r,o)=>{const a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(r,e+o*.05),l.gain.setValueAtTime(.001,e+o*.05),l.gain.linearRampToValueAtTime(.12,e+.3+o*.05),l.gain.exponentialRampToValueAtTime(1e-4,e+3.5),a.connect(l),l.connect(this.masterGain),a.start(e+o*.05),a.stop(e+3.8)})}playClick(){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(1200,e),t.frequency.exponentialRampToValueAtTime(400,e+.03),n.gain.setValueAtTime(.08,e),n.gain.exponentialRampToValueAtTime(.001,e+.035),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.04)}playChime(e=440,t=.4){if(!(!this.ctx||this.isMuted))try{this.ctx.state==="suspended"&&this.ctx.resume();const n=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(e,n),r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.18,n+.02),r.gain.exponentialRampToValueAtTime(1e-4,n+t),i.connect(r),r.connect(this.masterGain),i.start(n),i.stop(n+t+.05)}catch{}}}const st=new bv;function wv(){const s=document.getElementById("modal-register"),e=document.getElementById("modal-success"),t=document.getElementById("btn-close-register"),n=document.getElementById("btn-close-success"),i=document.getElementById("btn-nav-register"),r=document.getElementById("btn-wield-stone"),o=document.getElementById("form-registration"),a=document.getElementById("reg-domain-badge"),l=document.querySelectorAll(".domain-radio-card"),c=document.querySelectorAll('input[name="teamSize"]'),h=document.getElementById("member-4-card"),u=h?h.querySelectorAll("input"):[],d=document.getElementById("qr-img"),f=document.getElementById("qr-amount-text"),_=document.getElementById("total-fee-display"),g=document.getElementById("reg-screenshot"),m=document.getElementById("ocr-banner"),p=document.getElementById("ocr-body"),v=document.getElementById("ocr-icon"),x=document.getElementById("ocr-title"),S=document.getElementById("reg-utr"),w=document.getElementById("reg-pay-phone"),b=document.getElementById("utr-check-badge"),T=document.getElementById("reg-error-msg"),L=document.getElementById("btn-submit-registration"),M=document.getElementById("reg-spinner");let A=!1,O=null,X=!1,K=null,P=!1;function N(E){if(!E||typeof E!="string")return!0;const y=E.trim();return/^(\d)\1+$/.test(y)?!0:["123456789012","12345678901","012345678901","987654321098","112233445566","998877665544","123456123456"].includes(y)}function F(E,y=.4){try{st&&typeof st.playChime=="function"&&st.playChime(E,y)}catch{}}function k(E="mind"){if(!s)return;s.classList.add("is-open"),s.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden";const y=document.querySelector(`input[name="domain"][value="${E}"]`);y&&(y.checked=!0,B(E));const U=document.querySelector('input[name="teamSize"]:checked'),W=U?parseInt(U.value,10):3;d&&(d.src=W===4?"/4mem.png":"/3mem.png");const Z=W*349;f&&(f.textContent=`PAY ₹${Z.toLocaleString("en-IN")}`),_&&(_.textContent=`₹${Z.toLocaleString("en-IN")}`),F(580)}function q(){s&&(s.classList.remove("is-open"),s.setAttribute("aria-hidden","true"),document.body.classList.contains("timeline-unlocked")?document.body.style.overflowY="auto":document.body.style.overflow="hidden")}function B(E){const y=Vt.find(U=>U.id===E)||Vt[0];a&&(a.textContent=`DOMAIN: ${y.name} // ${y.domain}`,a.style.color=y.colorHex),l.forEach(U=>{const W=U.getAttribute("data-domain")===E;U.classList.toggle("selected",W)})}r&&r.addEventListener("click",()=>{const E=r.getAttribute("data-stone-id")||"mind";st.playClick(),k(E)}),i&&i.addEventListener("click",()=>{st.playClick(),k("mind")}),t&&t.addEventListener("click",()=>{st.playClick(),q()}),n&&n.addEventListener("click",()=>{st.playClick(),e==null||e.classList.remove("is-open"),e==null||e.setAttribute("aria-hidden","true")}),window.addEventListener("click",E=>{E.target===s&&q(),E.target===e&&(e.classList.remove("is-open"),e.setAttribute("aria-hidden","true"))}),l.forEach(E=>{E.addEventListener("click",()=>{const y=E.getAttribute("data-domain"),U=E.querySelector('input[type="radio"]');U&&(U.checked=!0),B(y),st.playStoneChime(y)})}),c.forEach(E=>{E.addEventListener("change",()=>{st.playClick();const y=parseInt(E.value,10),U=y*349;d&&(d.src=y===4?"/4mem.png":"/3mem.png"),f&&(f.textContent=`PAY ₹${U.toLocaleString("en-IN")}`),_&&(_.textContent=`₹${U.toLocaleString("en-IN")}`),y===4?(h&&(h.style.display="block"),u.forEach(W=>W.setAttribute("required","true"))):(h&&(h.style.display="none"),u.forEach(W=>{W.removeAttribute("required"),W.value=""}))})});async function $(E){const y=(E||"").trim();if(!y){b&&(b.textContent="",b.className="utr-status-badge"),X=!1;return}try{(await(await fetch(`/api/verify-utr?utr=${encodeURIComponent(y)}`)).json()).exists?(X=!1,b&&(b.textContent="❌ Already Registered!",b.className="utr-status-badge error"),xe(S,"This UTR has already been registered with another team.")):(X=!0,ze(S),b&&(b.textContent="",b.className="utr-status-badge"))}catch(U){console.warn("UTR verify network warning:",U),X=!0}}S&&S.addEventListener("input",E=>{clearTimeout(K),K=setTimeout(()=>{$(E.target.value)},300)});async function ee(){return window.Tesseract?window.Tesseract:new Promise((E,y)=>{const U=document.querySelector('script[src*="tesseract"]');if(U){if(window.Tesseract)return E(window.Tesseract);U.addEventListener("load",()=>E(window.Tesseract)),U.addEventListener("error",()=>y(new Error("Failed to load OCR engine")));return}const W=document.createElement("script");W.src="/tesseract/tesseract.min.js",W.onload=()=>E(window.Tesseract),W.onerror=()=>y(new Error("Failed to load OCR engine")),document.head.appendChild(W)})}async function ie(E){return new Promise((y,U)=>{try{const W=new Image,Z=URL.createObjectURL(E);W.onload=()=>{URL.revokeObjectURL(Z);const te=W.naturalWidth||W.width,pe=W.naturalHeight||W.height,le=te>=300&&pe>=200,ue=te>=200&&pe>=300;if(!le&&!ue)return U(new Error(`IMAGE_TOO_SMALL:${te}x${pe}`));const _e=1200;let Se=te,Q=pe;(Se>_e||Q>_e)&&(Se>Q?(Q=Math.round(Q*_e/Se),Se=_e):(Se=Math.round(Se*_e/Q),Q=_e));const Fe=document.createElement("canvas");Fe.width=Se,Fe.height=Q;const Ne=Fe.getContext("2d");if(!Ne)return y(E);Ne.drawImage(W,0,0,Se,Q),Fe.toBlob(Pe=>{y(Pe||E)},"image/jpeg",.92)},W.onerror=()=>y(E),W.src=Z}catch{y(E)}})}const j=15*1024,J=20*1024*1024,ae=["image/png","image/jpeg","image/jpg","image/webp"];g&&g.addEventListener("change",async E=>{var U;const y=E.target.files[0];if(y){if(A=!1,O=null,P=!0,y.size<j){oe(`❌ Image file too small (${(y.size/1024).toFixed(1)} KB). Logos, icons, and small images are not accepted. Please upload an authentic payment receipt screenshot.`),g.value="",P=!1,g.classList.add("is-invalid"),m&&(m.style.display="flex",m.className="ocr-detection-banner error",v&&(v.textContent="❌"),x&&(x.textContent="Image File Too Small"),p&&(p.innerHTML=`<strong>Invalid Image:</strong> The file is too small (${(y.size/1024).toFixed(1)} KB) to be a payment receipt. Logos, icons, and small graphics are rejected.`));return}if(y.size>J){const W=(y.size/1048576).toFixed(1);oe(`❌ File size (${W} MB) exceeds the 20MB limit. Please upload an image under 20MB.`),g.value="",P=!1,g.classList.add("is-invalid"),m&&(m.style.display="none");return}if(!ae.includes(y.type)){oe(`❌ Invalid file format (${y.type||"unknown"}). Please upload a PNG, JPG, or WEBP receipt screenshot.`),g.value="",P=!1,g.classList.add("is-invalid"),m&&(m.style.display="none");return}m&&(m.style.display="flex",m.className="ocr-detection-banner scanning",v&&(v.textContent="🔍"),x&&(x.textContent="Analyzing Receipt Authenticity..."),p&&(p.innerHTML='<span class="ocr-scanning">Verifying payment indicators & reading 12-digit UPI UTR...</span>'));try{const W=await ie(y),Z=await ee();if(!Z)throw new Error("OCR not available");const te=await Z.createWorker("eng",1,{workerPath:"/tesseract/worker.min.js",corePath:"/tesseract/tesseract-core.wasm.js",langPath:"/tesseract",gzip:!0,logger:Ze=>{if(Ze.status==="recognizing text"&&Ze.progress){const Lt=Math.round(Ze.progress*100);p&&(p.innerHTML=`<span class="ocr-scanning">Scanning receipt contents: ${Lt}%...</span>`)}}}),pe=new Promise((Ze,Lt)=>setTimeout(()=>Lt(new Error("OCR Timeout")),45e3)),le=te.recognize(W),ue=await Promise.race([le,pe]);await te.terminate().catch(()=>{});const _e=(((U=ue==null?void 0:ue.data)==null?void 0:U.text)||"").trim(),Se=_e.toLowerCase(),Q=["google pay","gpay","g pay","g-pay","phonepe","phone pe","paytm","pay tm","bhim","cred","navi","amazon pay","amazonpay","whatsapp pay","mobikwik","freecharge","airtel payments","jupiter","fi money","fampay","slice","super.money","payzapp","bhim upi","omni card"],Fe=["state bank","sbi","hdfc","icici","axis bank","axis","kotak","canara","bank of baroda","punjab national","pnb","union bank","idfc","indusind","yes bank","npci","upi","imps","neft","rtgs","netbanking","central bank","bank of india","indian bank","uco bank","bank of maharashtra"],Ne=["payment successful","transaction successful","paid successfully","transfer successful","payment completed","paid to","payment to","payment of","money sent","sent to","debited from","credited to","bill payment","payment details","transaction details","banking name","funds transfer","completed","successful","transferred to","transferred","sent successfully","received by","remittance"],Pe=["upi ref","upi transaction id","upi transaction","google transaction id","phonepe transaction id","paytm order id","wallet txn id","ref no","reference no","transaction id","txn id","rrn","utr","order id","utr no","ref number","reference id","transfer details"],Te=["₹","inr","rs.","rs ","rupees","rs:"],de=["@upi","@okhdfcbank","@okaxis","@oksbi","@okicici","@ybl","@ibl","@axl","@paytm","@apl","@ikwik","@barodampay","@idbi","@federal","@kotak"],R=[{type:"Code & Development Screen",keywords:["github.com","stackoverflow","localhost","syntax error","uncaught error","traceback","stack trace","console.log","npm install","terminal","docker","vscode","exception in thread","trying to access array offset","undefined index","fatal error"]},{type:"Academic Portal / Exam Document",keywords:["nptel","candidate_login","noc candidate","hall ticket","admit card","marksheet","semester","roll number","registration number:","grade card","question paper","curriculum vitae","resume","provisional certificate","login/index.php"]},{type:"Logo or Graphic Illustration",keywords:["stock vector","getty images","shutterstock","freepik","watermark","clipart","wallpaper","vector illustration","graphic design","behance","dribbble","brand identity","logo design"]},{type:"Social Media / Entertainment App",keywords:["instagram","facebook","snapchat","tiktok","netflix","spotify","youtube","reels","retweet"]},{type:"E-commerce Shopping / Travel Ticket",keywords:["add to cart","shopping cart","buy now","item details","boarding pass","flight booking","train ticket","pnr status","irctc"]}];let re=null;const ve=_e.match(/(?:utr|upi\s*ref(?:erence)?(?:\s*no)?|rrn|txn\s*(?:id|no)?|transaction\s*(?:id|ref|no)?)[\s:.-]*([0-9\s-]{12,18})\b/i);if(ve&&ve[1]){const Ze=ve[1].replace(/[\s-]/g,"");Ze.length===12&&!N(Ze)&&(re=Ze)}if(!re){const Ze=_e.match(/\b([0-9]{4}[\s-][0-9]{4}[\s-][0-9]{4})\b/);if(Ze&&Ze[1]){const Lt=Ze[1].replace(/[\s-]/g,"");Lt.length===12&&!N(Lt)&&(re=Lt)}}re||(re=(_e.match(/\b([0-9]{12})\b/g)||[]).find(Lt=>!N(Lt))||null);const fe=_e.match(/(?:phone|mobile|mob|contact|ph|payer\s*phone|remitter\s*mobile)[\s:.-]*(?:\+91[\s-]?)?([6-9][0-9]{9})\b/i);fe&&fe[1]&&w&&!w.value&&(w.value=fe[1]);const se=Q.filter(Ze=>Se.includes(Ze)),I=Fe.filter(Ze=>Se.includes(Ze)),ne=Ne.filter(Ze=>Se.includes(Ze)),ce=Pe.filter(Ze=>Se.includes(Ze)),Le=Te.filter(Ze=>Se.includes(Ze)),Ae=de.filter(Ze=>Se.includes(Ze));let ke=se.length*2+I.length*1+ne.length*2+ce.length*2+Le.length*1+Ae.length*2;re&&(ke+=3);let Ge=null;for(const Ze of R){const Lt=Ze.keywords.find(Bn=>Se.includes(Bn));if(Lt){Ge={category:Ze.type,keyword:Lt};break}}let Je=!0,tt="";const Ye=!!(re&&!N(re)),lt=ne.length>0,Gt=se.length>0||I.length>0||ce.length>0;if(_e.length<15?(Je=!1,tt="No payment text found. Camera photos, logos, and plain graphics without transaction details are not allowed"):Ge&&ke<6?(Je=!1,tt=`Image identified as a ${Ge.category} (matched '${Ge.keyword}')`):Ye&&(lt||Gt||ke>=3)?Je=!0:!Ye&&!lt?(Je=!1,tt="Missing payment action or transaction status (e.g. Paid to, Successful, Debited). Logos and normal photos are not accepted"):!Ye&&ke<4&&(Je=!1,tt="Image does not contain sufficient payment markers. Only authentic Google Pay, PhonePe, Paytm, or bank receipts are accepted"),!Je){A=!1,O=null,P=!1,g.value="",g.classList.add("is-invalid"),m&&(m.className="ocr-detection-banner error",v&&(v.textContent="❌"),x&&(x.textContent="Receipt Verification FAILED"),p&&(p.innerHTML=`<strong>Invalid Receipt:</strong> ${tt}. Please upload an authentic screenshot of your payment receipt.`)),F(220),oe(`❌ Verification Failed: ${tt}.`);return}A=!0,O=re,P=!1,g.classList.remove("is-invalid"),m&&(m.className="ocr-detection-banner success",v&&(v.textContent="✅"),x&&(x.textContent="Authentic Receipt Verified"),p&&(p.innerHTML="Genuine payment receipt verified. Please enter your <strong>12-digit bank UTR number</strong> below.")),S&&S.value.trim()?$(S.value):b&&(b.textContent="",b.className="utr-status-badge"),F(720);return}catch(W){console.error("OCR processing error / rejected:",W),A=!1,O=null,P=!1,g.value="",g.classList.add("is-invalid");let Z="Could not verify image as an authentic payment receipt.";W.message&&W.message.startsWith("IMAGE_TOO_SMALL")?Z="Image dimensions are too small to be a payment receipt screenshot. Logos, icons, and small images are not accepted.":W.message&&W.message.includes("Timeout")&&(Z="OCR scan timed out. Please upload a clearer payment screenshot."),m&&(m.className="ocr-detection-banner error",v&&(v.textContent="❌"),x&&(x.textContent="Receipt Verification Rejected"),p&&(p.innerHTML=`<strong>Verification Failed:</strong> ${Z} Please upload an authentic Google Pay, PhonePe, or Paytm receipt.`)),F(220),oe(`❌ ${Z}`)}}});const Ee=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;function Me(E){if(!E)return"";let y=E.replace(/\D/g,"");return y.length===12&&y.startsWith("91")?y=y.slice(2):y.length===11&&y.startsWith("0")&&(y=y.slice(1)),y}function De(E){return typeof E=="string"&&Ee.test(E.trim())}function Re(E){const y=Me(E);return y.length>=10&&y.length<=14}function xe(E,y){if(!E)return;E.classList.add("is-invalid");let U=E.parentElement,W=U.querySelector(".field-error-hint");W||(W=document.createElement("span"),W.className="field-error-hint",U.appendChild(W)),W.textContent=y}function ze(E){if(!E)return;E.classList.remove("is-invalid");const y=E.parentElement.querySelector(".field-error-hint");y&&y.remove()}async function G(E,y,U,W){if(y)try{const Z=E==="email"?`email=${encodeURIComponent(y.trim().toLowerCase())}`:`phone=${encodeURIComponent(y)}`,pe=await(await fetch(`/api/verify-participant?${Z}`)).json();pe.exists&&(xe(U,`❌ Already registered in team '${pe.teamName}' (${pe.teamId})`),F(220))}catch{}}[{id:"reg-leader-email",type:"email",role:"Team Leader"},{id:"reg-leader-phone",type:"phone",role:"Team Leader"},{id:"reg-m2-email",type:"email",role:"Member 02"},{id:"reg-m2-phone",type:"phone",role:"Member 02"},{id:"reg-m3-email",type:"email",role:"Member 03"},{id:"reg-m3-phone",type:"phone",role:"Member 03"},{id:"reg-m4-email",type:"email",role:"Member 04"},{id:"reg-m4-phone",type:"phone",role:"Member 04"}].forEach(E=>{const y=document.getElementById(E.id);y&&(y.addEventListener("input",()=>{ze(y)}),y.addEventListener("blur",()=>{const U=y.value.trim();if(U){if(E.type==="email"){if(!De(U)){xe(y,"Invalid email address (e.g. name@domain.com)");return}G("email",U,y,E.role)}else if(E.type==="phone"){if(!Re(U)){xe(y,"Enter a valid 10-digit mobile number");return}G("phone",U,y,E.role)}}}))}),o&&o.addEventListener("submit",async E=>{var ce,Le,Ae,ke,Ge,Je,tt,Ye,lt,Gt,Ze,Lt,Bn,Fr,yi,Br,zr,xs,vs,Ms,C,z,V,Y,H,me,we,Ie,Ue,We,Be,He,ut;E.preventDefault(),T&&(T.style.display="none"),document.querySelectorAll(".form-input.is-invalid").forEach(ze);const y=(ce=document.getElementById("reg-team-name"))==null?void 0:ce.value.trim(),U=(Le=document.getElementById("reg-college"))==null?void 0:Le.value.trim(),W=((Ae=document.querySelector('input[name="domain"]:checked'))==null?void 0:Ae.value)||"mind",Z=((Ge=(ke=document.getElementById("reg-tech-stack"))==null?void 0:ke.value)==null?void 0:Ge.trim())||"",te=((Je=document.querySelector('input[name="teamSize"]:checked'))==null?void 0:Je.value)||"3",pe=(tt=document.getElementById("reg-leader-name"))==null?void 0:tt.value.trim(),le=(Ye=document.getElementById("reg-leader-phone"))==null?void 0:Ye.value.trim(),ue=(lt=document.getElementById("reg-leader-email"))==null?void 0:lt.value.trim(),_e=(Gt=document.getElementById("reg-team-password"))==null?void 0:Gt.value,Se=S==null?void 0:S.value.trim(),Q=(w==null?void 0:w.value.trim())||le,Fe=g==null?void 0:g.files[0];if(!y){oe("Please enter your Squad / Team Name."),(Ze=document.getElementById("reg-team-name"))==null||Ze.focus();return}if(!U){oe("Please enter your College or Institution name."),(Lt=document.getElementById("reg-college"))==null||Lt.focus();return}if(!pe){oe("Please enter Leader Full Name."),(Bn=document.getElementById("reg-leader-name"))==null||Bn.focus();return}if(!De(ue)){oe("Please enter a valid Leader Email address (e.g. name@domain.com).");const ge=document.getElementById("reg-leader-email");xe(ge,"Invalid email format"),ge==null||ge.focus();return}if(!Re(le)){oe("Please enter a valid 10-digit Leader Mobile Number.");const ge=document.getElementById("reg-leader-phone");xe(ge,"Enter a valid 10-digit number"),ge==null||ge.focus();return}if(!_e||_e.length<6){oe("Team Password must be at least 6 characters (used for Leader Portal login)."),(Fr=document.getElementById("reg-team-password"))==null||Fr.focus();return}const Ne=(yi=document.getElementById("reg-m2-name"))==null?void 0:yi.value.trim(),Pe=(Br=document.getElementById("reg-m2-email"))==null?void 0:Br.value.trim(),Te=(zr=document.getElementById("reg-m2-phone"))==null?void 0:zr.value.trim();if(!Ne){oe("Member 02 Full Name is required."),(xs=document.getElementById("reg-m2-name"))==null||xs.focus();return}if(!De(Pe)){oe("Member 02 has an invalid email format.");const ge=document.getElementById("reg-m2-email");xe(ge,"Invalid email format"),ge==null||ge.focus();return}if(!Re(Te)){oe("Member 02 requires a valid 10-digit phone number.");const ge=document.getElementById("reg-m2-phone");xe(ge,"Enter a valid 10-digit number"),ge==null||ge.focus();return}const de=(vs=document.getElementById("reg-m3-name"))==null?void 0:vs.value.trim(),R=(Ms=document.getElementById("reg-m3-email"))==null?void 0:Ms.value.trim(),re=(C=document.getElementById("reg-m3-phone"))==null?void 0:C.value.trim();if(!de){oe("Member 03 Full Name is required."),(z=document.getElementById("reg-m3-name"))==null||z.focus();return}if(!De(R)){oe("Member 03 has an invalid email format.");const ge=document.getElementById("reg-m3-email");xe(ge,"Invalid email format"),ge==null||ge.focus();return}if(!Re(re)){oe("Member 03 requires a valid 10-digit phone number.");const ge=document.getElementById("reg-m3-phone");xe(ge,"Enter a valid 10-digit number"),ge==null||ge.focus();return}const ve=[{name:Ne,email:Pe,phone:Te},{name:de,email:R,phone:re}];if(te==="4"){const ge=(V=document.getElementById("reg-m4-name"))==null?void 0:V.value.trim(),Qe=(Y=document.getElementById("reg-m4-email"))==null?void 0:Y.value.trim(),Tt=(H=document.getElementById("reg-m4-phone"))==null?void 0:H.value.trim();if(!ge){oe("Member 04 Full Name is required for 4-member squads."),(me=document.getElementById("reg-m4-name"))==null||me.focus();return}if(!De(Qe)){oe("Member 04 has an invalid email format.");const $e=document.getElementById("reg-m4-email");xe($e,"Invalid email format"),$e==null||$e.focus();return}if(!Re(Tt)){oe("Member 04 requires a valid 10-digit phone number.");const $e=document.getElementById("reg-m4-phone");xe($e,"Enter a valid 10-digit number"),$e==null||$e.focus();return}ve.push({name:ge,email:Qe,phone:Tt})}const fe=[{role:"Team Leader",email:ue.toLowerCase(),phone:Me(le),el:document.getElementById("reg-leader-email"),phoneEl:document.getElementById("reg-leader-phone")},{role:"Member 02",email:Pe.toLowerCase(),phone:Me(Te),el:document.getElementById("reg-m2-email"),phoneEl:document.getElementById("reg-m2-phone")},{role:"Member 03",email:R.toLowerCase(),phone:Me(re),el:document.getElementById("reg-m3-email"),phoneEl:document.getElementById("reg-m3-phone")}];te==="4"&&fe.push({role:"Member 04",email:ve[2].email.toLowerCase(),phone:Me(ve[2].phone),el:document.getElementById("reg-m4-email"),phoneEl:document.getElementById("reg-m4-phone")});const se=new Map;for(const ge of fe){if(se.has(ge.email)){const Qe=se.get(ge.email),Tt=`Duplicate email '${ge.email}' in squad (${Qe} and ${ge.role}). Every member must have a unique email.`;oe(Tt),xe(ge.el,"Duplicate email in squad"),(we=ge.el)==null||we.focus();return}se.set(ge.email,ge.role)}const I=new Map;for(const ge of fe){if(I.has(ge.phone)){const Tt=`Duplicate mobile number in squad (${I.get(ge.phone)} and ${ge.role}). Every member must have their own unique phone number.`;oe(Tt),xe(ge.phoneEl,"Duplicate phone in squad"),(Ie=ge.phoneEl)==null||Ie.focus();return}I.set(ge.phone,ge.role)}if(P){oe("⏳ AI OCR is currently analyzing your receipt screenshot. Please wait a moment...");return}if(!Fe){oe("Please upload your payment confirmation screenshot."),(Ue=document.getElementById("reg-screenshot"))==null||Ue.focus();return}if(Fe.size<j){oe(`Image file too small (${(Fe.size/1024).toFixed(1)} KB). Logos, icons, and small images are not accepted. Please upload an authentic receipt screenshot.`),(We=document.getElementById("reg-screenshot"))==null||We.focus();return}if(Fe.size>J){const ge=(Fe.size/1048576).toFixed(1);oe(`Payment screenshot file size (${ge} MB) exceeds the 20MB limit. Please upload an image under 20MB.`),(Be=document.getElementById("reg-screenshot"))==null||Be.focus();return}if(!A){oe("❌ Valid Payment Receipt Required: The uploaded image was not verified as an authentic payment receipt. Logos, icons, and non-payment photos are not allowed. Please upload an authentic receipt from Google Pay, PhonePe, Paytm, or netbanking."),(He=document.getElementById("reg-screenshot"))==null||He.focus();return}if(!Se){oe("Please enter your payment bank UTR / transaction reference number."),(ut=document.getElementById("reg-utr"))==null||ut.focus();return}Se.trim();const ne=new FormData;ne.append("teamName",y),ne.append("college",U),ne.append("preferredDomain",W),ne.append("techStack",Z),ne.append("teamSize",te),ne.append("teamPassword",_e),ne.append("leaderName",pe),ne.append("leaderPhone",le),ne.append("leaderEmail",ue),ne.append("paymentUtr",Se),ne.append("paymentPhone",Q),ne.append("members",JSON.stringify(ve)),ne.append("paymentScreenshot",Fe),L&&(L.disabled=!0),M&&(M.style.display="inline-block");try{const ge=await fetch("/api/register",{method:"POST",body:ne}),Qe=await ge.json();if(!ge.ok||!Qe.success)throw new Error(Qe.error||"Registration failed. Please verify your details.");q(),st.playConvergenceChord();const Tt=document.getElementById("suc-team-id"),$e=document.getElementById("suc-team-name"),Xe=document.getElementById("suc-domain"),qi=document.getElementById("suc-email"),ht=document.getElementById("suc-amount");Tt&&(Tt.textContent=Qe.team.id),$e&&($e.textContent=Qe.team.teamName),Xe&&(Xe.textContent=`${Qe.team.preferredDomain.toUpperCase()} STONE`),qi&&(qi.textContent=Qe.team.leaderEmail),ht&&(ht.textContent=`₹${Qe.team.amount.toLocaleString("en-IN")}`),e&&(e.classList.add("is-open"),e.setAttribute("aria-hidden","false")),o.reset(),A=!1,O=null,X=!1,P=!1,m&&(m.style.display="none"),d&&(d.src="/3mem.png"),f&&(f.textContent="PAY ₹1,047"),_&&(_.textContent="₹1,047"),h&&(h.style.display="none"),u.forEach(Ln=>{Ln.removeAttribute("required"),Ln.value=""})}catch(ge){oe(ge.message)}finally{L&&(L.disabled=!1),M&&(M.style.display="none")}});function oe(E){T&&(T.textContent=E,T.style.display="block",F(220))}document.querySelectorAll(".faq-question").forEach(E=>{E.addEventListener("click",()=>{st.playClick(),E.parentElement.classList.toggle("active")})});const ye=document.getElementById("btn-portals"),nt=document.getElementById("portals-menu");ye&&nt&&(ye.addEventListener("click",E=>{E.stopPropagation(),nt.classList.toggle("is-visible"),st.playClick()}),document.addEventListener("click",E=>{!ye.contains(E.target)&&!nt.contains(E.target)&&nt.classList.remove("is-visible")})),document.querySelectorAll(".hud-nav a").forEach(E=>{E.addEventListener("click",y=>{y.preventDefault(),st.playClick();const U=E.getAttribute("href").substring(1);if(U==="showcase-section"){window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{document.body.classList.remove("timeline-unlocked")},400);return}const W=document.getElementById(U);W&&(document.body.classList.contains("timeline-unlocked")||document.body.classList.add("timeline-unlocked"),setTimeout(()=>{W.scrollIntoView({behavior:"smooth"})},60))})})}const Av="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",Bh=8,zh=22,bn=(s,e,t,n)=>s+(e-s)*(1-Math.exp(-t/n)),Cv=s=>{let e=String(s||"").replace("#","");e.length===3&&(e=e.replace(/./g,n=>n+n));const t=parseInt(e.slice(0,6),16);return Number.isNaN(t)?[255,255,255]:[t>>16&255,t>>8&255,t&255]},Wn=(s,e)=>{const[t,n,i]=Cv(s);return`rgba(${t}, ${n}, ${i}, ${e})`},fr=(...s)=>{let e=2166136261;for(const t of s)e=Math.imul(e^(t|0),16777619),e^=e>>>13,e=Math.imul(e,1540483477),e^=e>>>15;return(e>>>0)/4294967296},kh=s=>s>0?`+${s}`:s<0?`−${-s}`:"0";class Rv{constructor(e,t={}){ti(this,"tick",e=>{this.raf=0;const t=this.settings;if(!t)return;const n=Math.min(.05,Math.max(.001,(e-this.last)/1e3));this.last=e;const i=this.ensureLayout(t),r=t.sweep&&!this.reducedMotion&&!this.pointer.inside&&this.dragging<0;r&&(this.clock+=n*t.speed),this.pulse+=n;let o=this.pointer.x,a=this.pointer.y;r&&(o=i.left+(i.right-i.left)*(.5-.5*Math.cos(this.clock*.45)),a=i.top+(i.bottom-i.top)*(.45+.1*Math.sin(this.clock*.8)));const l=this.pointer.inside||r||this.dragging>=0;if(l&&!this.placed&&(this.lens.x=o,this.lens.y=a),l){const d=this.pointer.inside?.05:.22;this.lens.x=bn(this.lens.x,o,n,d),this.lens.y=bn(this.lens.y,a,n,d)}this.placed=l,this.presence=bn(this.presence,t.reveal==="area"&&l&&this.dragging<0?1:0,n,.16);let c=!1;this.glyphs.forEach((d,f)=>{if(f===this.dragging){d.offset.x=bn(d.offset.x,this.pointer.x-this.grab.x,n,.03),d.offset.y=bn(d.offset.y,this.pointer.y-this.grab.y,n,.03),d.velocity.x=0,d.velocity.y=0,c=!0;return}const{offset:_,velocity:g}=d;if(Math.abs(_.x)<.05&&Math.abs(_.y)<.05&&Math.hypot(g.x,g.y)<.5){_.x=0,_.y=0,g.x=0,g.y=0;return}g.x+=(-320*_.x-zh*g.x)*n,g.y+=(-320*_.y-zh*g.y)*n,_.x+=g.x*n,_.y+=g.y*n,c=!0});const h=this.dragging>=0?this.dragging:l?this.glyphAt(this.lens.x,this.lens.y):-1;if(h>=0&&t.selection){const d=this.glyphs[h],f=d.box.x1+d.offset.x-6,_=d.box.y1+d.offset.y-6,g=d.box.x2+d.offset.x+6,m=d.box.y2+d.offset.y+6;(this.frame.index<0||this.frame.alpha<.02)&&(this.frame.x1=f,this.frame.y1=_,this.frame.x2=g,this.frame.y2=m);const p=h===this.dragging?.02:.08;this.frame.x1=bn(this.frame.x1,f,n,p),this.frame.y1=bn(this.frame.y1,_,n,p),this.frame.x2=bn(this.frame.x2,g,n,p),this.frame.y2=bn(this.frame.y2,m,n,p),this.frame.index=h}this.frame.alpha=bn(this.frame.alpha,h>=0&&t.selection?1:0,n,.1),this.glyphs.forEach((d,f)=>{const _=t.reveal==="letter"&&f===h&&f!==this.dragging?1:0;d.outline=bn(d.outline,_,n,.09),Math.abs(d.outline-_)>.002?c=!0:d.outline=_}),t.draggable&&(this.container.style.cursor=this.dragging>=0?"grabbing":h>=0&&this.pointer.inside?"grab":""),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.globalCompositeOperation="source-over",this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(const d of this.glyphs){const f=Math.hypot(d.offset.x,d.offset.y);f>1&&(this.ctx.globalAlpha=Math.min(1,f/24)*.55,this.blit(this.ctx,d.dashes,0,0,0,0),this.ctx.globalAlpha=1)}for(const d of this.glyphs)d.outline<.999&&(this.ctx.globalAlpha=1-d.outline,this.blit(this.ctx,d.fill,d.offset.x,d.offset.y,0,0)),d.outline>.001&&(this.ctx.globalAlpha=d.outline,this.blit(this.ctx,d.dashes,d.offset.x,d.offset.y,0,0)),this.ctx.globalAlpha=1;this.presence>.001&&this.drawReveal(t),this.drawFrame(t);const u=c||Math.abs(this.presence-(t.reveal==="area"&&l&&this.dragging<0?1:0))>.002||this.frame.alpha>.01&&this.frame.alpha<.99;(l||u)&&this.visible&&this.alive&&(this.raf=requestAnimationFrame(this.tick))});ti(this,"wake",()=>{this.raf||!this.visible||!this.alive||(this.last=performance.now(),this.raf=requestAnimationFrame(this.tick))});ti(this,"resize",()=>{this.width=Math.max(1,this.container.clientWidth),this.height=Math.max(1,this.container.clientHeight),this.dpr=Math.min(window.devicePixelRatio||1,2),this.canvas.width=Math.round(this.width*this.dpr),this.canvas.height=Math.round(this.height*this.dpr),this.layoutKey="",this.wake()});ti(this,"onMove",e=>{this.locate(e),this.pointer.inside=!0,this.wake()});ti(this,"onLeave",()=>{this.dragging>=0||(this.pointer.inside=!1,this.wake())});ti(this,"onDown",e=>{var n,i;this.locate(e),this.pointer.inside=!0;const t=this.settings;if(t!=null&&t.draggable&&(e.pointerType!=="mouse"||e.button===0)){const r=this.glyphAt(this.pointer.x,this.pointer.y);if(r>=0){this.dragging=r,this.grab.x=this.pointer.x-this.glyphs[r].offset.x,this.grab.y=this.pointer.y-this.glyphs[r].offset.y;try{(i=(n=this.container).setPointerCapture)==null||i.call(n,e.pointerId)}catch{}}}this.wake()});ti(this,"onUp",e=>{var t,n;if(this.dragging>=0){this.dragging=-1;try{(n=(t=this.container).hasPointerCapture)!=null&&n.call(t,e.pointerId)&&this.container.releasePointerCapture(e.pointerId)}catch{}const i=this.container.getBoundingClientRect();this.pointer.inside=e.clientX>=i.left&&e.clientX<=i.right&&e.clientY>=i.top&&e.clientY<=i.bottom}this.wake()});var n;if(!e)throw new Error("TechText requires a container element.");this.container=e,this.container.classList.add("tech-text"),this.settings={text:"React Bits",fontFamily:"",fontWeight:600,fontSize:150,letterSpacing:-.05,color:"#ffffff",accentColor:"#ffffff",reach:200,softness:.7,dashLength:4,dashGap:2,strokeWidth:1.5,lineStyle:"dashed",reveal:"letter",specks:15,selection:!0,labels:!0,draggable:!0,sweep:!0,speed:1,...t},this.canvas=document.createElement("canvas"),this.canvas.className="tech-text-canvas",this.container.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.scratch=document.createElement("canvas"),this.scratchCtx=this.scratch.getContext("2d"),this.reducedMotion=(n=window.matchMedia)==null?void 0:n.call(window,"(prefers-reduced-motion: reduce)").matches,this.width=1,this.height=1,this.dpr=1,this.raf=0,this.last=performance.now(),this.visible=!0,this.alive=!0,this.layoutKey="",this.requestedFont="",this.word=null,this.glyphs=[],this.presence=0,this.clock=0,this.pulse=0,this.placed=!1,this.dragging=-1,this.pointer={x:0,y:0,inside:!1},this.grab={x:0,y:0},this.lens={x:0,y:0},this.frame={x1:0,y1:0,x2:0,y2:0,alpha:0,index:-1},this.initEvents(),this.resize(),this.wake()}family(e){return e.fontFamily||getComputedStyle(this.container).fontFamily||"sans-serif"}fontFor(e,t){return`${e.fontWeight} ${t}px ${this.family(e)}`}setFont(e,t,n){e.font=this.fontFor(t,n),"letterSpacing"in e&&(e.letterSpacing=`${t.letterSpacing*n}px`),e.textAlign="left",e.textBaseline="alphabetic"}sprite(e,t,n,i){const r=Math.ceil(e.strokeWidth*2+4),o=n.box.x1-r,a=n.box.y1-r,l=n.box.x2-n.box.x1+r*2,c=n.box.y2-n.box.y1+r*2,h=document.createElement("canvas");h.width=Math.max(1,Math.ceil(l*this.dpr)),h.height=Math.max(1,Math.ceil(c*this.dpr));const u=h.getContext("2d");return u?(u.setTransform(this.dpr,0,0,this.dpr,-o*this.dpr,-a*this.dpr),this.setFont(u,e,t.size),i?(u.lineJoin="round",u.lineWidth=e.strokeWidth*2,u.lineCap="butt",u.strokeStyle=e.color,e.lineStyle!=="solid"&&u.setLineDash([Math.max(1,e.dashLength),Math.max(1,e.dashGap)]),u.strokeText(n.char,n.x,t.baseline),u.setLineDash([]),u.globalCompositeOperation="destination-out",u.fillStyle="#000000",u.fillText(n.char,n.x,t.baseline),u.globalCompositeOperation="source-over"):(u.fillStyle=e.color,u.fillText(n.char,n.x,t.baseline)),{image:h,left:o,top:a}):{image:h,left:o,top:a}}ensureLayout(e){const t=[e.text,this.family(e),e.fontWeight,e.fontSize,e.letterSpacing,e.color,e.dashLength,e.dashGap,e.strokeWidth,e.lineStyle,this.width,this.height,this.dpr].join("|");if(t===this.layoutKey&&this.word)return this.word;this.layoutKey=t;const n=this.fontFor(e,64);document.fonts&&n!==this.requestedFont&&(this.requestedFont=n,document.fonts.load(n,e.text).then(()=>this.refreshFonts(),()=>this.refreshFonts()));const i=this.scratchCtx;this.setFont(i,e,e.fontSize);let r=i.measureText(e.text);const o=8,a=Math.min(1,(this.width-o*2)/Math.max(r.actualBoundingBoxLeft+r.actualBoundingBoxRight,1),this.height*.9/Math.max(r.actualBoundingBoxAscent+r.actualBoundingBoxDescent,1)),l=e.fontSize*a;this.setFont(i,e,l),r=i.measureText(e.text),r.actualBoundingBoxLeft+r.actualBoundingBoxRight;const c=r.actualBoundingBoxAscent+r.actualBoundingBoxDescent,h=r.actualBoundingBoxLeft+o,u=(this.height-c)/2+r.actualBoundingBoxAscent,d={size:l,baseline:u,left:h-r.actualBoundingBoxLeft,right:h+r.actualBoundingBoxRight,top:u-r.actualBoundingBoxAscent,bottom:u+r.actualBoundingBoxDescent};this.word=d;const f=Array.from(e.text),_=this.glyphs;this.glyphs=[];let g="";return f.forEach((m,p)=>{g+=m;const v=i.measureText(m),x=h+i.measureText(g).width-v.width;if(!m.trim())return;const S={char:m,x,box:{x1:x-v.actualBoundingBoxLeft,y1:u-v.actualBoundingBoxAscent,x2:x+v.actualBoundingBoxRight,y2:u+v.actualBoundingBoxDescent}},w=_[this.glyphs.length];this.glyphs.push({...S,offset:(w==null?void 0:w.char)===m?w.offset:{x:0,y:0},velocity:{x:0,y:0},outline:0,index:p,fill:this.sprite(e,d,S,!1),dashes:this.sprite(e,d,S,!0)})}),this.dragging=-1,this.frame.index=-1,d}refreshFonts(){this.layoutKey="",this.wake()}glyphAt(e,t){if(!this.word||t<this.word.top-24||t>this.word.bottom+24)return-1;let n=-1,i=1/0;return this.glyphs.forEach((r,o)=>{const a=r.box.x1+r.offset.x,l=r.box.x2+r.offset.x,c=e<a?a-e:e>l?e-l:0;c<i&&(i=c,n=o)}),i<28?n:-1}falloff(e,t,n,i,r,o){const a=Math.min(1,Math.max(0,1-o)),l=e.createRadialGradient(t,n,0,t,n,i);if(l.addColorStop(0,`rgba(0, 0, 0, ${r})`),a>.995)return l.addColorStop(.995,`rgba(0, 0, 0, ${r})`),l.addColorStop(1,"rgba(0, 0, 0, 0)"),l;for(let c=0;c<=Bh;c++){const h=c/Bh,u=h*h*(3-2*h);l.addColorStop(a+(1-a)*h,`rgba(0, 0, 0, ${r*(1-u)})`)}return l}blit(e,t,n,i,r,o){e.drawImage(t.image,Math.round((t.left+n)*this.dpr-r),Math.round((t.top+i)*this.dpr-o))}drawReveal(e){const t=e.reach*this.dpr,n=this.lens.x*this.dpr,i=this.lens.y*this.dpr;this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle=this.falloff(this.ctx,n,i,t,this.presence,e.softness),this.ctx.fillRect(n-t,i-t,t*2,t*2),this.ctx.globalCompositeOperation="source-over";const r=Math.max(0,Math.floor(n-t)),o=Math.max(0,Math.floor(i-t)),a=Math.min(this.canvas.width,Math.ceil(n+t)),l=Math.min(this.canvas.height,Math.ceil(i+t));if(a<=r||l<=o)return;const c=a-r,h=l-o;(this.scratch.width<c||this.scratch.height<h)&&(this.scratch.width=Math.max(this.scratch.width,c),this.scratch.height=Math.max(this.scratch.height,h)),this.scratchCtx.setTransform(1,0,0,1,0,0),this.scratchCtx.globalCompositeOperation="source-over",this.scratchCtx.clearRect(0,0,c,h);for(const u of this.glyphs)this.blit(this.scratchCtx,u.dashes,u.offset.x,u.offset.y,r,o);this.scratchCtx.globalCompositeOperation="destination-in",this.scratchCtx.fillStyle=this.falloff(this.scratchCtx,n-r,i-o,t,1,e.softness),this.scratchCtx.fillRect(0,0,c,h),this.scratchCtx.globalCompositeOperation="source-over",this.ctx.globalAlpha=this.presence,this.ctx.drawImage(this.scratch,0,0,c,h,r,o,c,h),this.ctx.globalAlpha=1}crisp(e){return(Math.round(e*this.dpr)+.5)/this.dpr}perimeterPoint(e,t,n){let i=(e%(2*(t+n))+2*(t+n))%(2*(t+n));return i<t?[this.frame.x1+i,this.frame.y1,0,-1]:(i-=t,i<n?[this.frame.x2,this.frame.y1+i,1,0]:(i-=n,i<t?[this.frame.x2-i,this.frame.y2,0,1]:(i-=t,[this.frame.x1,this.frame.y2-i,-1,0])))}drawSpecks(e,t){const n=this.frame.x2-this.frame.x1,i=this.frame.y2-this.frame.y1;if(n<2||i<2)return;const r=2*(n+i),o=this.frame.index+1,a=3;for(let l=0;l<e.specks;l++){const c=.5+fr(o,l,11)*1.2,h=this.pulse/c+fr(o,l,17),u=Math.floor(h),d=h-u;if(d>.7)continue;const[f,_,g,m]=this.perimeterPoint(fr(o,l,u)*r,n,i),p=fr(o,l,u,2),v=p<.46?2:p<.7?3:p<.84?5:p<.94?8:11,x=v>=8,S=(x?9:4)+Math.floor(fr(o,l,u,1)*5)*a,w=this.frame.x1+Math.round((f+g*S-this.frame.x1)/a)*a,b=this.frame.y1+Math.round((_+m*S-this.frame.y1)/a)*a,T=fr(o,l,u,3),L=d<.06||d>.32&&d<.36?.35:1,M=t*(x?.3+.4*T:.3+.6*T)*L,A=Math.round(w-v/2),O=Math.round(b-v/2);T<.26||x&&T<.78?(this.ctx.strokeStyle=Wn(e.accentColor,M),this.ctx.strokeRect(A+.5,O+.5,v,v),x&&T>.5&&(this.ctx.fillStyle=Wn(e.accentColor,M),this.ctx.fillRect(Math.round(w)-1,Math.round(b)-1,2,2))):(this.ctx.fillStyle=Wn(e.accentColor,M),this.ctx.fillRect(A,O,v,v))}for(let l=0;l<2;l++){const c=(this.pulse*.42*e.speed+l*.5)*r;for(let h=0;h<4;h++){const[u,d]=this.perimeterPoint(c-h*6,n,i),f=h===0?3:2;this.ctx.fillStyle=Wn(e.accentColor,t*[.95,.55,.32,.16][h]),this.ctx.fillRect(Math.round(u-f/2),Math.round(d-f/2),f,f)}}}drawFrame(e){if(!(e!=null&&e.selection))return;const t=this.glyphs[this.frame.index];if(!t||this.frame.alpha<.01)return;const n=this.frame.alpha,i=this.crisp(this.frame.x1),r=this.crisp(this.frame.y1),o=this.crisp(this.frame.x2),a=this.crisp(this.frame.y2);this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0);const l=Math.hypot(t.offset.x,t.offset.y);if(l>1){const u=(t.box.x1+t.box.x2)/2,d=(t.box.y1+t.box.y2)/2;this.ctx.beginPath(),this.ctx.moveTo(u,d),this.ctx.lineTo(u+t.offset.x,d+t.offset.y),this.ctx.setLineDash([3,4]),this.ctx.lineWidth=1,this.ctx.strokeStyle=Wn(e.accentColor,.45*n),this.ctx.stroke(),this.ctx.setLineDash([]),this.ctx.beginPath(),this.ctx.rect(Math.round(u)-2,Math.round(d)-2,4,4),this.ctx.fillStyle=Wn(e.accentColor,.7*n),this.ctx.fill()}this.ctx.beginPath(),this.ctx.rect(i,r,o-i,a-r),this.ctx.lineWidth=1,this.ctx.strokeStyle=Wn(e.accentColor,.5*n),this.ctx.stroke(),this.ctx.beginPath();for(const[u,d]of[[i,r],[o,r],[o,a],[i,a]])this.ctx.rect(Math.round(u)-2,Math.round(d)-2,5,5);if(this.ctx.fillStyle=Wn(e.accentColor,.95*n),this.ctx.fill(),e.specks>0&&(this.ctx.lineWidth=1,this.drawSpecks(e,n)),!e.labels)return;this.ctx.font=Av,this.ctx.textAlign="left",this.ctx.textBaseline="bottom",this.ctx.fillStyle=Wn(e.accentColor,.62*n);const c=l>1?`${kh(Math.round(t.offset.x))}, ${kh(Math.round(-t.offset.y))}`:`${t.char}  ${Math.round(t.box.x2-t.box.x1)} × ${Math.round(t.box.y2-t.box.y1)}`,h=Math.max(9,Math.round(this.frame.y1)-4);this.ctx.fillText(c,Math.round(this.frame.x1),h)}locate(e){const t=this.container.getBoundingClientRect();this.pointer.x=e.clientX-t.left,this.pointer.y=e.clientY-t.top}initEvents(){this.container.addEventListener("pointermove",this.onMove,{passive:!0}),this.container.addEventListener("pointerenter",this.onMove,{passive:!0}),this.container.addEventListener("pointerdown",this.onDown,{passive:!0}),this.container.addEventListener("pointerup",this.onUp,{passive:!0}),this.container.addEventListener("pointercancel",this.onUp,{passive:!0}),this.container.addEventListener("pointerleave",this.onLeave,{passive:!0}),this.resizeObserver=new ResizeObserver(this.resize),this.resizeObserver.observe(this.container),this.intersectionObserver=new IntersectionObserver(([e])=>{this.visible=e.isIntersecting,this.wake()}),this.intersectionObserver.observe(this.container),document.fonts&&document.fonts.ready.then(()=>this.refreshFonts(),()=>this.refreshFonts())}update(e={}){this.settings={...this.settings,...e},this.layoutKey="",this.wake()}destroy(){var e,t;this.alive=!1,this.raf&&cancelAnimationFrame(this.raf),(e=this.resizeObserver)==null||e.disconnect(),(t=this.intersectionObserver)==null||t.disconnect(),this.container.removeEventListener("pointermove",this.onMove),this.container.removeEventListener("pointerenter",this.onMove),this.container.removeEventListener("pointerdown",this.onDown),this.container.removeEventListener("pointerup",this.onUp),this.container.removeEventListener("pointercancel",this.onUp),this.container.removeEventListener("pointerleave",this.onLeave),this.canvas.remove()}}class Pv{constructor(){this.container=document.getElementById("webgl-container"),this.stones=[],this.currentIndex=0,this.isTransitioning=!1,this.isConvergenceActive=!1,this.isWireframe=!1,this.lastScrollTime=0,this.scrollCooldown=700,this.clock=new Tu,this.infoCard=document.getElementById("info-card"),this.initThree(),this.initCosmicEnvironment(),this.initStones(),this.initPostProcessing(),this.initControls(),this.initUI(),this.initCountdownTimer(),this.initTimeline(),this.initScrollAndGestures(),this.initEventListeners(),wv(),this.animate(),"scrollRestoration"in history&&(history.scrollRestoration="manual"),window.scrollTo(0,0),document.body.classList.remove("timeline-unlocked"),this.displayStone(0,!1),this.triggerConvergence()}isMobile(){return window.innerWidth<=1024||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}initThree(){this.scene=new A0,this.scene.fog=new al(197381,.024),this.camera=new on(42,window.innerWidth/window.innerHeight,.1,1e3),this.updateCameraForViewport(),this.renderer=new yu({powerPreference:"high-performance",antialias:!0,alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Qo,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.container.appendChild(this.renderer.domElement);const e=new N0(16777215,.95);this.scene.add(e);const t=new po(16777215,1.35);t.position.set(5,10,8),this.scene.add(t);const n=new po(16777215,.85);n.position.set(-6,-4,6),this.scene.add(n);const i=new po(8961023,.75);i.position.set(-6,8,-6),this.scene.add(i),this.stageLight=new Oo(54015,1.5,16,1.2),this.stageLight.position.set(0,1.2,4.5),this.scene.add(this.stageLight);const r=new Io(this.renderer);r.compileEquirectangularShader();const o=document.createElement("canvas");o.width=512,o.height=256;const a=o.getContext("2d"),l=a.createLinearGradient(0,0,0,256);l.addColorStop(0,"#0d1020"),l.addColorStop(.5,"#05060b"),l.addColorStop(1,"#090b16"),a.fillStyle=l,a.fillRect(0,0,512,256);const c=(d,f,_,g,m)=>{const p=a.createRadialGradient(d,f,0,d,f,_);p.addColorStop(0,`rgba(255, 255, 255, ${g})`),p.addColorStop(.35,m),p.addColorStop(1,"rgba(0, 0, 0, 0)"),a.fillStyle=p,a.beginPath(),a.arc(d,f,_,0,Math.PI*2),a.fill()};c(130,65,80,.35,"rgba(230, 245, 255, 0.35)"),c(370,75,95,.32,"rgba(255, 240, 225, 0.3)"),c(256,175,75,.2,"rgba(160, 200, 255, 0.2)");const h=new da(o);h.mapping=aa;const u=r.fromEquirectangular(h).texture;this.scene.environment=u}updateCameraForViewport(){const e=document.getElementById("stone-stage-overlay");if(e){const n=e.getBoundingClientRect(),i=n.left+n.width/2,r=n.top+n.height/2;let o=window.innerWidth/2-i,a=window.innerHeight/2-r;this.isMobile()&&(o+=16),this.camera.setViewOffset(window.innerWidth,window.innerHeight,o,a,window.innerWidth,window.innerHeight),this.camera.updateProjectionMatrix()}this.stoneStageX=0,this.stoneStageY=0;const t=this.isMobile()?12:9.8;this.camera.position.set(0,0,t),this.controls&&this.controls.target.set(0,0,0)}initCosmicEnvironment(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.2,"rgba(255, 255, 255, 0.7)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.15)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=n,t.fillRect(0,0,64,64);const i=new da(e),r=2e3,o=new Mt,a=new Float32Array(r*3),l=new Float32Array(r*3);for(let h=0;h<r;h++){const u=38+Math.random()*85,d=Math.random()*Math.PI*2,f=Math.acos(2*Math.random()-1);let _=u*Math.sin(f)*Math.cos(d),g=u*Math.sin(f)*Math.sin(d),m=u*Math.cos(f);Math.hypot(_-this.stoneStageX,g-this.stoneStageY)<4.5&&m<0&&(_+=_>=this.stoneStageX?5:-5,g+=g>=this.stoneStageY?5:-5),a[h*3]=_,a[h*3+1]=g,a[h*3+2]=m;const v=.4+Math.random()*.6;l[h*3]=v,l[h*3+1]=v,l[h*3+2]=v}o.setAttribute("position",new Kt(a,3)),o.setAttribute("color",new Kt(l,3));const c=new ol({size:.35,map:i,vertexColors:!0,transparent:!0,opacity:.8,blending:Bt,depthWrite:!1});this.starfield=new Su(o,c),this.scene.add(this.starfield)}initStones(){this.stonesContainer=new Un,this.scene.add(this.stonesContainer);const e=this.isMobile()?.48:1;Vt.forEach((t,n)=>{const i=Tv(t);i.group.position.set(this.stoneStageX,this.stoneStageY,0),n!==0?(i.group.scale.set(.001,.001,.001),i.group.visible=!1):(i.group.scale.set(e,e,e),i.group.visible=!0),this.stonesContainer.add(i.group),this.stones.push(i)})}initPostProcessing(){this.composer=new X0(this.renderer);const e=new q0(this.scene,this.camera);this.composer.addPass(e),this.bloomPass=new Cr(new be(window.innerWidth,window.innerHeight),.55,.45,.72),this.composer.addPass(this.bloomPass);const t=new $0;this.composer.addPass(t)}initControls(){this.controls=new z0(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.maxPolarAngle=Math.PI/2+.25,this.controls.minPolarAngle=Math.PI/2-.25,this.controls.target.set(0,0,0),this.controls.touches={ONE:null,TWO:null},this.renderer.domElement&&(this.renderer.domElement.style.touchAction="pan-y");const e=new O0,t=new be;let n={x:0,y:0};this.renderer.domElement.addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(n={x:i.clientX,y:i.clientY})}),this.renderer.domElement.addEventListener("pointerup",i=>{if(i.pointerType==="touch")return;if(Math.hypot(i.clientX-n.x,i.clientY-n.y)<6&&!this.isConvergenceActive){t.x=i.clientX/window.innerWidth*2-1,t.y=-(i.clientY/window.innerHeight)*2+1,e.setFromCamera(t,this.camera);const o=this.stones[this.currentIndex];o&&e.intersectObjects([o.gemMesh,o.coreMesh],!0).length>0&&this.pulseCurrentStone()}})}initCountdownTimer(){const e=new Date("2026-10-31T09:00:00+05:30").getTime(),t=document.getElementById("cd-days"),n=document.getElementById("cd-hours"),i=document.getElementById("cd-mins"),r=document.getElementById("cd-secs"),o=document.getElementById("cd-msecs");if(!t||!n||!i||!r||!o)return;let a=-1;const l=()=>{const c=Date.now(),h=e-c;if(h<=0){t.textContent="00",n.textContent="00",i.textContent="00",r.textContent="00",o.textContent="000";return}const u=Math.floor(h/(1e3*60*60*24)),d=Math.floor(h/(1e3*60*60)%24),f=Math.floor(h/(1e3*60)%60),_=Math.floor(h/1e3%60),g=Math.floor(h%1e3);_!==a&&(a=_,t.textContent=String(u).padStart(2,"0"),n.textContent=String(d).padStart(2,"0"),i.textContent=String(f).padStart(2,"0"),r.textContent=String(_).padStart(2,"0")),o.textContent=String(g).padStart(3,"0"),requestAnimationFrame(l)};requestAnimationFrame(l)}initUI(){const e=document.getElementById("pager-list");e.innerHTML="",Vt.forEach((u,d)=>{const f=document.createElement("button");f.className=`pager-item ${d===0?"active":""}`,f.setAttribute("data-index",d);const _=u.colorThree>>16&255,g=u.colorThree>>8&255,m=u.colorThree&255;f.setAttribute("style",`
        --item-color: ${u.colorHex};
        --item-rgb: ${_}, ${g}, ${m};
      `),f.setAttribute("aria-label",`Navigate to ${u.name}`);const p=u.name.replace(" STONE",""),v=d===0?21:0,x=d===Vt.length-1?21:42;f.innerHTML=`
        <span class="pager-track-node">
          <svg class="pager-node-svg" width="24" height="42" viewBox="0 0 24 42" aria-hidden="true">
            <!-- Background laser guide line -->
            <line class="svg-track-line" x1="12" y1="${v}" x2="12" y2="${x}" />
            <!-- Active laser beam segments -->
            ${d>0?'<line class="svg-laser-top" x1="12" y1="0" x2="12" y2="21" />':""}
            ${d<Vt.length-1?'<line class="svg-laser-bot" x1="12" y1="21" x2="12" y2="42" />':""}
            <!-- Precision Single Dot: centered at (12, 21) -->
            <circle class="svg-pip-halo" cx="12" cy="21" r="8" />
            <circle class="svg-pip-core" cx="12" cy="21" r="3.5" />
          </svg>
        </span>
        <span class="pager-name-tag">${p}</span>
      `,f.addEventListener("click",()=>{this.isConvergenceActive&&this.endConvergence(),d!==this.currentIndex&&(st.playStoneChime(u.id),this.displayStone(d,!0))}),e.appendChild(f)});const t=document.getElementById("btn-mobile-menu"),n=document.getElementById("mobile-nav-drawer"),i=document.getElementById("btn-close-mobile-menu"),r=document.getElementById("mobile-drawer-backdrop"),o=document.querySelectorAll(".mobile-nav-link, .m-portal-item"),a=document.getElementById("btn-mobile-drawer-reg");t&&n&&t.addEventListener("click",()=>{n.classList.add("is-open"),st.playClick()});const l=()=>{n&&n.classList.remove("is-open")};i&&i.addEventListener("click",l),r&&r.addEventListener("click",l),o.forEach(u=>{u.addEventListener("click",()=>{l(),this.unlockTimeline(!0)})}),a&&a.addEventListener("click",()=>{l();const u=document.getElementById("btn-nav-register");u&&u.click()});const c=document.getElementById("btn-mobile-audio"),h=document.getElementById("m-audio-status");c&&c.addEventListener("click",()=>{const u=st.toggleMute();h&&(h.textContent=u?"ACTIVE":"MUTED",h.style.color=u?"#00d2ff":"#a1a1aa")}),this.initTechText()}initTechText(){const e=document.getElementById("stone-tech-text-container");if(!e)return;const t=Vt[this.currentIndex]||Vt[0];this.techText=new Rv(e,{text:t.name,fontFamily:"'Syne', sans-serif",fontWeight:800,fontSize:42,letterSpacing:.04,color:"#ffffff",accentColor:t.colorHex,reveal:"letter",lineStyle:"dashed",dashLength:4,dashGap:2,strokeWidth:1.5,specks:12,selection:!1,labels:!1,draggable:!1,sweep:!0,speed:.9})}initTimeline(){const e=document.querySelectorAll(".dossier-card"),t=["mind","space","reality","time"];e.forEach((i,r)=>{i.addEventListener("click",()=>{const o=t[r]||"all";st.playStoneChime(o),et.fromTo(i,{scale:.985},{scale:1,duration:.35,ease:"back.out(2)"})})});const n=document.getElementById("btn-timeline");n&&n.addEventListener("click",()=>{st.playClick(),this.unlockTimeline(!0)}),this.initTimelineParticles()}initTimelineParticles(){const e=document.getElementById("timeline-bg-canvas"),t=document.getElementById("timeline-section");if(!e||!t)return;const n=e.getContext("2d");if(!n)return;let i=0,r=0,o=1,a=null,l=!1;const c={x:-1e3,y:-1e3,isHovering:!1},h=["#d97706","#0284c7","#e11d48","#059669","#475569","#1e293b"],u=window.innerWidth<768?22:44,d=[],f=()=>{const m=t.getBoundingClientRect();i=m.width,r=m.height,o=Math.min(window.devicePixelRatio||1,2),e.width=Math.round(i*o),e.height=Math.round(r*o),n.setTransform(o,0,0,o,0,0),d.forEach(p=>{p.x>i&&(p.x=Math.random()*i),p.y>r&&(p.y=Math.random()*r)})};for(let m=0;m<u;m++){const p=Math.random()<.45,v=p?h[m%4]:h[4+m%2];d.push({x:Math.random()*(i||window.innerWidth),y:Math.random()*(r||600),vx:(Math.random()-.5)*.42,vy:(Math.random()-.5)*.42,radius:p?2.2+Math.random()*1.2:1.3+Math.random()*.8,color:v,alpha:.28+Math.random()*.45,hasCross:m%6===0,pulseSpeed:.02+Math.random()*.03,pulseVal:Math.random()*Math.PI})}const _=()=>{if(!l)return;n.clearRect(0,0,i,r);const m=d.length,p=125,v=p*p;for(let x=0;x<m;x++){const S=d[x];for(let w=x+1;w<m;w++){const b=d[w],T=S.x-b.x,L=S.y-b.y,M=T*T+L*L;if(M<v){const O=(1-Math.sqrt(M)/p)*.15;n.beginPath(),n.moveTo(S.x,S.y),n.lineTo(b.x,b.y),n.strokeStyle=`rgba(15, 23, 42, ${O})`,n.lineWidth=1,n.stroke()}}if(c.isHovering){const w=S.x-c.x,b=S.y-c.y,T=w*w+b*b,L=145;if(T<L*L){const M=Math.sqrt(T),A=(1-M/L)*.32;n.beginPath(),n.moveTo(S.x,S.y),n.lineTo(c.x,c.y),n.strokeStyle=`rgba(2, 132, 199, ${A})`,n.lineWidth=1.2,n.stroke();const O=(1-M/L)*.55;S.x+=w/M*O,S.y+=b/M*O}}}for(let x=0;x<m;x++){const S=d[x];S.x+=S.vx,S.y+=S.vy,S.x<0?(S.x=0,S.vx*=-1):S.x>i&&(S.x=i,S.vx*=-1),S.y<0?(S.y=0,S.vy*=-1):S.y>r&&(S.y=r,S.vy*=-1),S.pulseVal+=S.pulseSpeed;const w=S.alpha*(.85+Math.sin(S.pulseVal)*.25);n.beginPath(),n.arc(S.x,S.y,S.radius,0,Math.PI*2),n.fillStyle=S.color,n.globalAlpha=w,n.fill(),S.hasCross&&(n.beginPath(),n.moveTo(S.x-4,S.y),n.lineTo(S.x+4,S.y),n.moveTo(S.x,S.y-4),n.lineTo(S.x,S.y+4),n.strokeStyle=S.color,n.lineWidth=1,n.stroke()),n.globalAlpha=1}a=requestAnimationFrame(_)};t.addEventListener("mousemove",m=>{const p=t.getBoundingClientRect();c.x=m.clientX-p.left,c.y=m.clientY-p.top,c.isHovering=!0},{passive:!0}),t.addEventListener("mouseleave",()=>{c.isHovering=!1,c.x=-1e3,c.y=-1e3}),new IntersectionObserver(m=>{m.forEach(p=>{p.isIntersecting?(l=!0,f(),cancelAnimationFrame(a),a=requestAnimationFrame(_)):(l=!1,cancelAnimationFrame(a))})},{threshold:.01}).observe(t),window.ResizeObserver&&new ResizeObserver(p=>{for(const v of p)v.contentRect.width>0&&v.contentRect.height>0&&(f(),l&&!a&&(a=requestAnimationFrame(_)))}).observe(t),window.addEventListener("resize",()=>{f()},{passive:!0}),f()}unlockTimeline(e=!0,t="sponsors-section"){document.body.classList.contains("timeline-unlocked")||(document.body.classList.add("timeline-unlocked"),st.playChime(660),window.dispatchEvent(new Event("resize"))),e&&setTimeout(()=>{const n=document.getElementById(t)||document.getElementById("sponsors-section")||document.getElementById("timeline-section");if(n){const i=n.offsetTop||window.innerHeight;window.scrollTo({top:i,behavior:"smooth"})}},50)}lockTimeline(){window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{document.body.classList.remove("timeline-unlocked")},550)}initScrollAndGestures(){window.addEventListener("wheel",i=>{if(document.body.classList.contains("timeline-unlocked")&&window.scrollY>40)return;const r=Date.now();r-this.lastScrollTime<this.scrollCooldown||Math.abs(i.deltaY)>18&&(this.lastScrollTime=r,this.isConvergenceActive&&this.endConvergence(),i.deltaY>0?this.stepStone(1):i.deltaY<0&&(document.body.classList.contains("timeline-unlocked")&&window.scrollY<=10?this.lockTimeline():this.stepStone(-1)))},{passive:!0});let e=0,t=0;window.addEventListener("touchstart",i=>{!i.touches||!i.touches[0]||(e=i.touches[0].clientX,t=i.touches[0].clientY)},{passive:!0}),window.addEventListener("touchend",i=>{if(!i.changedTouches||!i.changedTouches[0]||document.body.classList.contains("timeline-unlocked")&&window.scrollY>40)return;const r=e-i.changedTouches[0].clientX,o=t-i.changedTouches[0].clientY,a=Math.abs(r),l=Math.abs(o),c=Date.now();if(!(c-this.lastScrollTime<this.scrollCooldown)&&(l>35||a>40)){this.lastScrollTime=c,this.isConvergenceActive&&this.endConvergence();const h=l>=a&&o>0||a>l&&r>0,u=l>=a&&o<0||a>l&&r<0;h?this.stepStone(1):u&&(document.body.classList.contains("timeline-unlocked")&&window.scrollY<=10?this.lockTimeline():this.stepStone(-1))}},{passive:!0});const n=document.getElementById("scroll-btn");n&&n.addEventListener("click",()=>{st.playClick(),this.isConvergenceActive&&this.endConvergence(),this.currentIndex===Vt.length-1?this.unlockTimeline(!0):this.stepStone(1)})}stepStone(e){this.isConvergenceActive&&this.endConvergence();const t=Vt.length;if(this.currentIndex===t-1&&e>0){this.unlockTimeline(!0);return}let n=this.currentIndex+e;n>=t&&(n=0),n<0&&(n=t-1),st.playStoneChime(Vt[n].id),this.displayStone(n,!0)}displayStone(e,t=!0){if(this.isTransitioning&&t)return;this.isTransitioning=!0;const n=this.currentIndex;this.currentIndex=e;const i=Vt[e];document.documentElement.style.setProperty("--active-stone-color",i.colorHex),document.documentElement.style.setProperty("--active-stone-glow",i.colorHex+"55");const r=new Ce(i.colorHex),o=Math.round(r.r*255),a=Math.round(r.g*255),l=Math.round(r.b*255);document.documentElement.style.setProperty("--active-stone-rgb",`${o}, ${a}, ${l}`),et.to(this.stageLight.color,{r:new Ce(i.colorThree).r,g:new Ce(i.colorThree).g,b:new Ce(i.colorThree).b,duration:.8}),document.querySelectorAll(".pager-item").forEach((_,g)=>{_.classList.toggle("active",g===e),_.classList.toggle("passed",g<e)}),document.getElementById("stage-roman").textContent=i.roman;const h=document.getElementById("scroll-label");h&&(h.textContent=e===Vt.length-1?"EXPLORE SPONSORS & TIMELINE ↓":"SCROLL TO DISCOVER");const u=document.getElementById("info-card");t&&u.classList.add("animating"),setTimeout(()=>{this.renderCardContent(i),t&&u.classList.remove("animating")},t?150:0);const d=this.isMobile()?12:9.8;if(et.to(this.camera.position,{x:0,y:0,z:d,duration:.7,ease:"power2.out"}),this.stageLight){const _=new Ce(i.coreColor);et.to(this.stageLight.color,{r:_.r,g:_.g,b:_.b,duration:.6})}const f=this.isMobile()?.48:1;if(t){const _=this.stones[n],g=this.stones[e];et.to(this.bloomPass,{strength:.65,duration:.35,yoyo:!0,repeat:1,ease:"power2.out"}),_&&n!==e&&et.to(_.group.scale,{x:.001,y:.001,z:.001,duration:.55,ease:"back.in(1.4)",onComplete:()=>{_.group.visible=!1}}),this.stones.forEach((m,p)=>{p!==e&&p!==n&&(et.killTweensOf(m.group.scale),et.killTweensOf(m.group.position),m.group.scale.set(.001,.001,.001),m.group.position.set(0,0,0),m.group.visible=!1)}),g.group.visible=!0,g.group.position.set(0,0,0),g.group.rotation.y+=Math.PI*.5,et.fromTo(g.group.scale,{x:.1*f,y:.1*f,z:.1*f},{x:f,y:f,z:f,duration:.85,ease:"elastic.out(1, 0.75)",delay:.2,onComplete:()=>{this.isTransitioning=!1,this.stones.forEach((m,p)=>{p!==e&&(m.group.visible=!1,m.group.scale.set(.001,.001,.001))})}})}else this.stones.forEach((_,g)=>{_.group.visible=g===e,_.group.position.set(0,0,0),_.group.scale.set(g===e?f:.001,g===e?f:.001,g===e?f:.001)}),this.isTransitioning=!1}renderCardContent(e){const t=document.getElementById("card-index-tag");t&&(t.textContent=`${e.index} / 06`);const n=document.getElementById("card-marvel-theme");n&&(n.textContent=(e.marvelTheme||"SINGULARITY").toUpperCase());const i=document.getElementById("card-title");i&&(i.textContent=e.name),this.techText&&this.techText.update({text:e.name,accentColor:e.colorHex});const r=document.getElementById("stone-tech-text-container");r&&r.setAttribute("aria-label",e.name);const o=document.getElementById("card-domain");o&&(o.textContent=`${e.domain} // ${e.domainTagline||""}`);const a=document.getElementById("card-desc");a&&(a.textContent=e.description);const l=document.getElementById("btn-wield-stone");l&&(l.setAttribute("data-stone-id",e.id),l.style.setProperty("--btn-glow",e.colorHex))}triggerConvergence(){if(this.isConvergenceActive)return;this.isConvergenceActive=!0,document.body.classList.add("convergence-mode");const e=document.getElementById("btn-convergence");e&&e.classList.add("active"),st.playConvergenceChord(),this.camera.view&&this.camera.view.enabled&&(this.camera.clearViewOffset(),this.camera.updateProjectionMatrix());const t=this.isMobile()?17:14;et.to(this.camera.position,{x:0,y:this.isMobile()?.2:.5,z:t,duration:1.8,ease:"power2.inOut"}),et.to(this.controls.target,{x:0,y:0,z:0,duration:1.8,ease:"power2.inOut",onUpdate:()=>{this.controls&&this.controls.update()}});const n=this.isMobile()?2.1:3.6,i=this.isMobile()?.38:.75;this.stones.forEach((r,o)=>{r.group.visible=!0,r.group.position.set(0,0,0),r.group.scale.set(.1,.1,.1);const a=o/this.stones.length*Math.PI*2,l=Math.cos(a)*n,c=Math.sin(a)*n;et.to(r.group.position,{x:l,y:c,z:0,duration:1.6,ease:"elastic.out(1, 0.75)"}),et.to(r.group.scale,{x:i,y:i,z:i,duration:1.2}),et.to(r.pointLight,{intensity:2.2,duration:1,yoyo:!0,repeat:1})}),et.killTweensOf(this.stonesContainer.rotation),et.to(this.stonesContainer.rotation,{z:this.stonesContainer.rotation.z+Math.PI*2,duration:3.5,ease:"power2.inOut",onComplete:()=>{this.endConvergence()}})}endConvergence(){if(!this.isConvergenceActive)return;this.isConvergenceActive=!1,document.body.classList.remove("convergence-mode");const e=document.getElementById("btn-convergence");e&&e.classList.remove("active"),this.updateCameraForViewport(),et.to(this.stonesContainer.rotation,{x:0,y:0,z:0,duration:1,ease:"power2.out"});const t=this.isMobile()?12:9.8,n=this.isMobile()?.48:1;et.to(this.camera.position,{x:0,y:0,z:t,duration:1.3,ease:"power3.out"}),et.to(this.controls.target,{x:0,y:0,z:0,duration:1.3,ease:"power3.out",onUpdate:()=>{this.controls&&this.controls.update()}}),this.stones.forEach((i,r)=>{et.killTweensOf(i.group.position),et.killTweensOf(i.group.scale),et.killTweensOf(i.pointLight),r===this.currentIndex?(i.group.visible=!0,i.pointLight.intensity=1.8,et.to(i.group.position,{x:0,y:0,z:0,duration:1,ease:"power3.out"}),et.to(i.group.scale,{x:n,y:n,z:n,duration:1,ease:"power3.out"})):(et.to(i.group.position,{x:0,y:0,z:0,duration:.8,ease:"power2.in"}),et.to(i.group.scale,{x:.001,y:.001,z:.001,duration:.8,ease:"power2.in",onComplete:()=>{i.group.visible=!1}}))})}pulseCurrentStone(){const e=this.stones[this.currentIndex];e&&(st.playEnergyPulse(),e.gemMat&&et.to(e.gemMat,{emissiveIntensity:1.15,duration:.25,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{e.gemMat.emissiveIntensity=.18}}),et.to(e.pointLight,{intensity:3.8,duration:.25,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{e.pointLight.intensity=1.8}}),et.to(e.coreMesh.scale,{x:1.4,y:1.4,z:1.4,duration:.35,yoyo:!0,repeat:1,ease:"power2.out"}),e.wireMesh&&e.wireMesh.material&&et.to(e.wireMesh.material,{opacity:.9,duration:.25,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{e.wireMesh.material.opacity=.45}}),et.to(this.bloomPass,{strength:.95,duration:.3,yoyo:!0,repeat:1,ease:"power2.out"}))}toggleWireframe(){this.isWireframe=!this.isWireframe,this.stones.forEach(t=>{t.gemMat.wireframe=this.isWireframe,t.wireMesh.visible=!this.isWireframe}),document.getElementById("btn-wireframe").classList.toggle("active",this.isWireframe),st.playClick()}initEventListeners(){window.addEventListener("resize",()=>{const r=window.innerWidth,o=window.innerHeight;this.camera.aspect=r/o,this.camera.updateProjectionMatrix(),this.renderer.setSize(r,o),this.composer.setSize(r,o),this.updateCameraForViewport(),this.controls.target.set(this.stoneStageX,this.stoneStageY,0);const a=this.isMobile()?.48:1,l=this.stones[this.currentIndex];l&&!this.isConvergenceActive&&l.group.scale.set(a,a,a)});const e=document.getElementById("btn-audio");e&&(e.addEventListener("click",()=>{const r=st.toggleMute();e.classList.toggle("audio-unmuted",r),e.classList.toggle("audio-muted",!r),e.classList.toggle("active",r)}),e.classList.add("audio-muted")),document.getElementById("btn-wireframe").addEventListener("click",()=>{this.toggleWireframe()}),document.getElementById("btn-convergence").addEventListener("click",()=>{this.isConvergenceActive?this.endConvergence():this.triggerConvergence()});const t=document.getElementById("btn-pulse");t&&t.addEventListener("click",()=>{this.pulseCurrentStone()});const n=document.getElementById("btn-sound-play");n&&n.addEventListener("click",()=>{st.playStoneChime(Vt[this.currentIndex].id)}),window.addEventListener("keydown",r=>{if(r.target.tagName==="INPUT"||r.target.tagName==="TEXTAREA")return;const o=r.key.toUpperCase();if(o>="1"&&o<="6"){const a=parseInt(o,10)-1;st.playStoneChime(Vt[a].id),this.displayStone(a,!0)}else r.code==="ArrowDown"||r.code==="PageDown"?(r.preventDefault(),this.stepStone(1)):r.code==="ArrowUp"||r.code==="PageUp"?(r.preventDefault(),this.stepStone(-1)):r.code==="Space"?(r.preventDefault(),this.isConvergenceActive?this.endConvergence():this.triggerConvergence()):r.code==="Escape"?this.isConvergenceActive&&this.endConvergence():o==="P"||o==="S"?this.pulseCurrentStone():o==="W"?this.toggleWireframe():o==="M"&&e&&e.click()});const i=()=>{st.init(),window.removeEventListener("pointerdown",i),window.removeEventListener("keydown",i)};window.addEventListener("pointerdown",i,{once:!0}),window.addEventListener("keydown",i,{once:!0})}animate(){requestAnimationFrame(()=>this.animate());const e=this.clock.getDelta(),t=this.clock.getElapsedTime();this.starfield&&(this.starfield.rotation.y=t*.006),this.stones.forEach((n,i)=>{n.group.visible&&(n.update(t,e),this.isConvergenceActive||(n.group.position.y=this.stoneStageY+Math.sin(t*2.8)*.16))}),this.controls.update(),this.composer.render()}}window.addEventListener("DOMContentLoaded",()=>{new Pv});
