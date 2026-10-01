var Td=Object.defineProperty;var bd=(s,e,t)=>e in s?Td(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var ti=(s,e,t)=>bd(s,typeof e!="symbol"?e+"":e,t);import"./modulepreload-polyfill-B5Qt9EMX.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jo="160",Yi={ROTATE:0,DOLLY:1,PAN:2},ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wd=0,Dl=1,Ad=2,Hh=1,Cd=2,Xn=3,gi=0,jt=1,xn=2,Kn=0,vr=1,Bt=2,Ul=3,Nl=4,Rd=5,Ii=100,Pd=101,Ld=102,Ol=103,Fl=104,Id=200,Dd=201,Ud=202,Nd=203,wo=204,Ao=205,Od=206,Fd=207,Bd=208,zd=209,kd=210,Gd=211,Hd=212,Vd=213,Wd=214,Xd=0,qd=1,Yd=2,sa=3,jd=4,$d=5,Kd=6,Zd=7,Vh=0,Jd=1,Qd=2,di=0,Wh=1,Xh=2,qh=3,Qo=4,ef=5,Yh=6,jh=300,Tr=301,br=302,aa=303,Co=304,Ma=306,ns=1e3,Cn=1001,Ro=1002,Wt=1003,Bl=1004,Da=1005,_n=1006,tf=1007,is=1008,fi=1009,nf=1010,rf=1011,el=1012,$h=1013,oi=1014,li=1015,Zn=1016,Kh=1017,Zh=1018,Ni=1020,sf=1021,Rn=1023,af=1024,of=1025,Oi=1026,wr=1027,lf=1028,Jh=1029,cf=1030,Qh=1031,eu=1033,Ua=33776,Na=33777,Oa=33778,Fa=33779,zl=35840,kl=35841,Gl=35842,Hl=35843,tu=36196,Vl=37492,Wl=37496,Xl=37808,ql=37809,Yl=37810,jl=37811,$l=37812,Kl=37813,Zl=37814,Jl=37815,Ql=37816,ec=37817,tc=37818,nc=37819,ic=37820,rc=37821,Ba=36492,sc=36494,ac=36495,hf=36283,oc=36284,lc=36285,cc=36286,nu=3e3,Fi=3001,uf=3200,df=3201,iu=0,ff=1,vn="",It="srgb",Jn="srgb-linear",tl="display-p3",Sa="display-p3-linear",oa="linear",ct="srgb",la="rec709",ca="p3",$i=7680,hc=519,pf=512,mf=513,gf=514,ru=515,_f=516,xf=517,vf=518,yf=519,uc=35044,dc="300 es",Po=1035,$n=2e3,ha=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zr=Math.PI/180,Lo=180/Math.PI;function fs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[s&255]+Ot[s>>8&255]+Ot[s>>16&255]+Ot[s>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Dt(s,e,t){return Math.max(e,Math.min(t,s))}function Mf(s,e){return(s%e+e)%e}function za(s,e,t){return(1-t)*s+t*e}function fc(s){return(s&s-1)===0&&s!==0}function Io(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Gr(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Sf={DEG2RAD:Zr};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,n,i,r,a,o,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],v=i[1],x=i[4],M=i[7],w=i[2],b=i[5],T=i[8];return r[0]=a*g+o*v+l*w,r[3]=a*m+o*x+l*b,r[6]=a*p+o*M+l*T,r[1]=c*g+h*v+d*w,r[4]=c*m+h*x+d*b,r[7]=c*p+h*M+d*T,r[2]=u*g+f*v+_*w,r[5]=u*m+f*x+_*b,r[8]=u*p+f*M+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,_=t*d+n*u+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(i*c-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=u*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ka.makeScale(e,t)),this}rotate(e){return this.premultiply(ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ka=new $e;function su(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ua(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ef(){const s=ua("canvas");return s.style.display="block",s}const pc={};function Jr(s){s in pc||(pc[s]=!0,console.warn(s))}const mc=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gc=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ms={[Jn]:{transfer:oa,primaries:la,toReference:s=>s,fromReference:s=>s},[It]:{transfer:ct,primaries:la,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Sa]:{transfer:oa,primaries:ca,toReference:s=>s.applyMatrix3(gc),fromReference:s=>s.applyMatrix3(mc)},[tl]:{transfer:ct,primaries:ca,toReference:s=>s.convertSRGBToLinear().applyMatrix3(gc),fromReference:s=>s.applyMatrix3(mc).convertLinearToSRGB()}},Tf=new Set([Jn,Sa]),rt={enabled:!0,_workingColorSpace:Jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Tf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ms[e].toReference,i=Ms[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ms[s].primaries},getTransfer:function(s){return s===vn?oa:Ms[s].transfer}};function yr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ga(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ki;class au{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ki===void 0&&(Ki=ua("canvas")),Ki.width=e.width,Ki.height=e.height;const n=Ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ua("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=yr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yr(t[n]/255)*255):t[n]=yr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bf=0;class ou{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=fs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ha(i[a].image)):r.push(Ha(i[a]))}else r=Ha(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ha(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?au.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wf=0;class $t extends Vi{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=Cn,i=Cn,r=_n,a=is,o=Rn,l=fi,c=$t.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=fs(),this.name="",this.source=new ou(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Fi?It:vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ns:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ns:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?Fi:nu}set encoding(e){Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Fi?It:vn}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=jh;$t.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(f+1)/2,w=(p+1)/2,b=(h+u)/4,T=(d+g)/4,L=(_+m)/4;return x>M&&x>w?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=b/n,r=T/n):M>w?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=b/i,r=L/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=T/r,i=L/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-g)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Af extends Vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Jr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fi?It:vn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new $t(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ou(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends Af{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lu extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cf extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],f=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==u||c!==f||h!==_){let m=1-o;const p=l*u+c*f+h*_+d*g,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),b=Math.atan2(w,p*v);m=Math.sin(m*b)/w,o=Math.sin(o*b)/w}const M=o*v;if(l=l*m+u*M,c=c*m+f*M,h=h*m+_*M,d=d*m+g*M,m===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+h*d+l*f-c*u,e[t+1]=l*_+h*u+c*d-o*f,e[t+2]=c*_+h*f+o*u-l*d,e[t+3]=h*_-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_c.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Va.copy(this).projectOnVector(e),this.sub(Va)}reflect(e){return this.sub(Va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Va=new I,_c=new Hi;class ps{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ss.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(e.matrixWorld),this.union(Ss)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),Es.subVectors(this.max,Hr),Zi.subVectors(e.a,Hr),Ji.subVectors(e.b,Hr),Qi.subVectors(e.c,Hr),ni.subVectors(Ji,Zi),ii.subVectors(Qi,Ji),Ei.subVectors(Zi,Qi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ei.z,Ei.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ei.z,0,-Ei.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ei.y,Ei.x,0];return!Wa(t,Zi,Ji,Qi,Es)||(t=[1,0,0,0,1,0,0,0,1],!Wa(t,Zi,Ji,Qi,Es))?!1:(Ts.crossVectors(ni,ii),t=[Ts.x,Ts.y,Ts.z],Wa(t,Zi,Ji,Qi,Es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new I,new I,new I,new I,new I,new I,new I,new I],Sn=new I,Ss=new ps,Zi=new I,Ji=new I,Qi=new I,ni=new I,ii=new I,Ei=new I,Hr=new I,Es=new I,Ts=new I,Ti=new I;function Wa(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ti.fromArray(s,r);const o=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Rf=new ps,Vr=new I,Xa=new I;class ms{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Vr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Xa)),this.expandByPoint(Vr.copy(e.center).sub(Xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new I,qa=new I,bs=new I,ri=new I,Ya=new I,ws=new I,ja=new I;class gs{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){qa.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(qa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(bs),o=ri.dot(this.direction),l=-ri.dot(bs),c=ri.lengthSq(),h=Math.abs(1-a*a);let d,u,f,_;if(h>0)if(d=a*l-o,u=a*o-l,_=r*h,d>=0)if(u>=-_)if(u<=_){const g=1/h;d*=g,u*=g,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(qa).addScaledVector(bs,u),f}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,r){Ya.subVectors(t,e),ws.subVectors(n,e),ja.crossVectors(Ya,ws);let a=this.direction.dot(ja),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,e);const l=o*this.direction.dot(ws.crossVectors(ri,ws));if(l<0)return null;const c=o*this.direction.dot(Ya.cross(ri));if(c<0||l+c>a)return null;const h=-o*ri.dot(ja);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,n,i,r,a,o,l,c,h,d,u,f,_,g,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,f,_,g,m)}set(e,t,n,i,r,a,o,l,c,h,d,u,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/er.setFromMatrixColumn(e,0).length(),r=1/er.setFromMatrixColumn(e,1).length(),a=1/er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,_=o*h,g=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+_*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,_=c*h,g=c*d;t[0]=u+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,_=c*h,g=c*d;t[0]=u-g*o,t[4]=-a*d,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=g-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,_=o*h,g=o*d;t[0]=l*h,t[4]=_*c-f,t[8]=u*c+g,t[1]=l*d,t[5]=g*c+u,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=g-u*d,t[8]=_*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+_,t[10]=u-g*d}else if(e.order==="XZY"){const u=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+g,t[5]=a*h,t[9]=f*d-_,t[2]=_*d-f,t[6]=o*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pf,e,Lf)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),si.crossVectors(n,nn),si.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),si.crossVectors(n,nn)),si.normalize(),As.crossVectors(nn,si),i[0]=si.x,i[4]=As.x,i[8]=nn.x,i[1]=si.y,i[5]=As.y,i[9]=nn.y,i[2]=si.z,i[6]=As.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],v=n[3],x=n[7],M=n[11],w=n[15],b=i[0],T=i[4],L=i[8],y=i[12],A=i[1],O=i[5],G=i[9],$=i[13],R=i[2],N=i[6],F=i[10],k=i[14],q=i[3],B=i[7],Z=i[11],te=i[15];return r[0]=a*b+o*A+l*R+c*q,r[4]=a*T+o*O+l*N+c*B,r[8]=a*L+o*G+l*F+c*Z,r[12]=a*y+o*$+l*k+c*te,r[1]=h*b+d*A+u*R+f*q,r[5]=h*T+d*O+u*N+f*B,r[9]=h*L+d*G+u*F+f*Z,r[13]=h*y+d*$+u*k+f*te,r[2]=_*b+g*A+m*R+p*q,r[6]=_*T+g*O+m*N+p*B,r[10]=_*L+g*G+m*F+p*Z,r[14]=_*y+g*$+m*k+p*te,r[3]=v*b+x*A+M*R+w*q,r[7]=v*T+x*O+M*N+w*B,r[11]=v*L+x*G+M*F+w*Z,r[15]=v*y+x*$+M*k+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*l*d-i*c*d-r*o*u+n*c*u+i*o*f-n*l*f)+g*(+t*l*f-t*c*u+r*a*u-i*a*f+i*c*h-r*l*h)+m*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-t*l*d+t*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],v=d*m*c-g*u*c+g*l*f-o*m*f-d*l*p+o*u*p,x=_*u*c-h*m*c-_*l*f+a*m*f+h*l*p-a*u*p,M=h*g*c-_*d*c+_*o*f-a*g*f-h*o*p+a*d*p,w=_*d*l-h*g*l-_*o*u+a*g*u+h*o*m-a*d*m,b=t*v+n*x+i*M+r*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=v*T,e[1]=(g*u*r-d*m*r-g*i*f+n*m*f+d*i*p-n*u*p)*T,e[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*p+n*l*p)*T,e[3]=(d*l*r-o*u*r-d*i*c+n*u*c+o*i*f-n*l*f)*T,e[4]=x*T,e[5]=(h*m*r-_*u*r+_*i*f-t*m*f-h*i*p+t*u*p)*T,e[6]=(_*l*r-a*m*r-_*i*c+t*m*c+a*i*p-t*l*p)*T,e[7]=(a*u*r-h*l*r+h*i*c-t*u*c-a*i*f+t*l*f)*T,e[8]=M*T,e[9]=(_*d*r-h*g*r-_*n*f+t*g*f+h*n*p-t*d*p)*T,e[10]=(a*g*r-_*o*r+_*n*c-t*g*c-a*n*p+t*o*p)*T,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*f-t*o*f)*T,e[12]=w*T,e[13]=(h*g*i-_*d*i+_*n*u-t*g*u-h*n*m+t*d*m)*T,e[14]=(_*o*i-a*g*i-_*n*l+t*g*l+a*n*m-t*o*m)*T,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*u+t*o*u)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,_=r*d,g=a*h,m=a*d,p=o*d,v=l*c,x=l*h,M=l*d,w=n.x,b=n.y,T=n.z;return i[0]=(1-(g+p))*w,i[1]=(f+M)*w,i[2]=(_-x)*w,i[3]=0,i[4]=(f-M)*b,i[5]=(1-(u+p))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(_+x)*T,i[9]=(m-v)*T,i[10]=(1-(u+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=er.set(i[0],i[1],i[2]).length();const a=er.set(i[4],i[5],i[6]).length(),o=er.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);const c=1/r,h=1/a,d=1/o;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,t.setFromRotationMatrix(En),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=$n){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let f,_;if(o===$n)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ha)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=$n){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(a-r),u=(t+e)*c,f=(n+i)*h;let _,g;if(o===$n)_=(a+r)*d,g=-2*d;else if(o===ha)_=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const er=new I,En=new xt,Pf=new I(0,0,0),Lf=new I(1,1,1),si=new I,As=new I,nn=new I,xc=new xt,vc=new Hi;class Ea{constructor(e=0,t=0,n=0,i=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vc.setFromEuler(this),this.setFromQuaternion(vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class nl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let If=0;const yc=new I,tr=new Hi,Gn=new xt,Cs=new I,Wr=new I,Df=new I,Uf=new Hi,Mc=new I(1,0,0),Sc=new I(0,1,0),Ec=new I(0,0,1),Nf={type:"added"},Of={type:"removed"};class Rt extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new I,t=new Ea,n=new Hi,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xt},normalMatrix:{value:new $e}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(Mc,e)}rotateY(e){return this.rotateOnAxis(Sc,e)}rotateZ(e){return this.rotateOnAxis(Ec,e)}translateOnAxis(e,t){return yc.copy(e).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mc,e)}translateY(e){return this.translateOnAxis(Sc,e)}translateZ(e){return this.translateOnAxis(Ec,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cs.copy(e):Cs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Wr,Cs,this.up):Gn.lookAt(Cs,Wr,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),tr.setFromRotationMatrix(Gn),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Of)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,Df),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Uf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Rt.DEFAULT_UP=new I(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new I,Hn=new I,$a=new I,Vn=new I,nr=new I,ir=new I,Tc=new I,Ka=new I,Za=new I,Ja=new I;let Rs=!1;class an{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Tn.subVectors(e,t),i.cross(Tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Tn.subVectors(i,t),Hn.subVectors(n,t),$a.subVectors(e,t);const a=Tn.dot(Tn),o=Tn.dot(Hn),l=Tn.dot($a),c=Hn.dot(Hn),h=Hn.dot($a),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getUV(e,t,n,i,r,a,o,l){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static isFrontFacing(e,t,n,i){return Tn.subVectors(n,t),Hn.subVectors(e,t),Tn.cross(Hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Tn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),an.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;nr.subVectors(i,n),ir.subVectors(r,n),Ka.subVectors(e,n);const l=nr.dot(Ka),c=ir.dot(Ka);if(l<=0&&c<=0)return t.copy(n);Za.subVectors(e,i);const h=nr.dot(Za),d=ir.dot(Za);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(nr,a);Ja.subVectors(e,r);const f=nr.dot(Ja),_=ir.dot(Ja);if(_>=0&&f<=_)return t.copy(r);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ir,o);const m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return Tc.subVectors(r,i),o=(d-h)/(d-h+(f-_)),t.copy(i).addScaledVector(Tc,o);const p=1/(m+g+u);return a=g*p,o=u*p,t.copy(n).addScaledVector(nr,a).addScaledVector(ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function Qa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=Mf(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Qa(a,r,e+1/3),this.g=Qa(a,r,e),this.b=Qa(a,r,e-1/3)}return rt.toWorkingColorSpace(this,i),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=cu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return rt.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Dt(Ft.r*255,0,255))*65536+Math.round(Dt(Ft.g*255,0,255))*256+Math.round(Dt(Ft.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Ft.copy(this),t);const n=Ft.r,i=Ft.g,r=Ft.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=It){rt.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,i=Ft.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Ps);const n=za(ai.h,Ps.h,t),i=za(ai.s,Ps.s,t),r=za(ai.l,Ps.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ce;Ce.NAMES=cu;let Ff=0;class Wi extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=vr,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=Ao,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ao&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class An extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new I,Ls=new be;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ls.fromBufferAttribute(this,t),Ls.applyMatrix3(e),this.setXY(t,Ls.x,Ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uc&&(e.usage=this.usage),e}}class hu extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class uu extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bf=0;const mn=new xt,eo=new Rt,rr=new I,rn=new ps,Xr=new ps,Ct=new I;class yt extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(su(e)?uu:hu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return eo.lookAt(e),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Xr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(rn.min,Xr.min),rn.expandByPoint(Ct),Ct.addVectors(rn.max,Xr.max),rn.expandByPoint(Ct)):(rn.expandByPoint(Xr.min),rn.expandByPoint(Xr.max))}rn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ct.fromBufferAttribute(o,c),l&&(rr.fromBufferAttribute(e,c),Ct.add(rr)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<o;A++)c[A]=new I,h[A]=new I;const d=new I,u=new I,f=new I,_=new be,g=new be,m=new be,p=new I,v=new I;function x(A,O,G){d.fromArray(i,A*3),u.fromArray(i,O*3),f.fromArray(i,G*3),_.fromArray(a,A*2),g.fromArray(a,O*2),m.fromArray(a,G*2),u.sub(d),f.sub(d),g.sub(_),m.sub(_);const $=1/(g.x*m.y-m.x*g.y);isFinite($)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar($),v.copy(f).multiplyScalar(g.x).addScaledVector(u,-m.x).multiplyScalar($),c[A].add(p),c[O].add(p),c[G].add(p),h[A].add(v),h[O].add(v),h[G].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let A=0,O=M.length;A<O;++A){const G=M[A],$=G.start,R=G.count;for(let N=$,F=$+R;N<F;N+=3)x(n[N+0],n[N+1],n[N+2])}const w=new I,b=new I,T=new I,L=new I;function y(A){T.fromArray(r,A*3),L.copy(T);const O=c[A];w.copy(O),w.sub(T.multiplyScalar(T.dot(O))).normalize(),b.crossVectors(L,O);const $=b.dot(h[A])<0?-1:1;l[A*4]=w.x,l[A*4+1]=w.y,l[A*4+2]=w.z,l[A*4+3]=$}for(let A=0,O=M.length;A<O;++A){const G=M[A],$=G.start,R=G.count;for(let N=$,F=$+R;N<F;N+=3)y(n[N+0]),y(n[N+1]),y(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){const _=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)u[_++]=c[f++]}return new Kt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bc=new xt,bi=new gs,Is=new ms,wc=new I,sr=new I,ar=new I,or=new I,to=new I,Ds=new I,Us=new be,Ns=new be,Os=new be,Ac=new I,Cc=new I,Rc=new I,Fs=new I,Bs=new I;class St extends Rt{constructor(e=new yt,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ds.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(to.fromBufferAttribute(d,e),a?Ds.addScaledVector(to,h):Ds.addScaledVector(to.sub(t),h))}t.add(Ds)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(r),bi.copy(e.ray).recast(e.near),!(Is.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Is,wc)===null||bi.origin.distanceToSquared(wc)>(e.far-e.near)**2))&&(bc.copy(r).invert(),bi.copy(e.ray).applyMatrix4(bc),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,w=x;M<w;M+=3){const b=o.getX(M),T=o.getX(M+1),L=o.getX(M+2);i=zs(this,p,e,n,c,h,d,b,T,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);i=zs(this,a,e,n,c,h,d,v,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,w=x;M<w;M+=3){const b=M,T=M+1,L=M+2;i=zs(this,p,e,n,c,h,d,b,T,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=m,x=m+1,M=m+2;i=zs(this,a,e,n,c,h,d,v,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function zf(s,e,t,n,i,r,a,o){let l;if(e.side===jt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===gi,o),l===null)return null;Bs.copy(o),Bs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Bs);return c<t.near||c>t.far?null:{distance:c,point:Bs.clone(),object:s}}function zs(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,sr),s.getVertexPosition(l,ar),s.getVertexPosition(c,or);const h=zf(s,e,t,n,sr,ar,or,Fs);if(h){i&&(Us.fromBufferAttribute(i,o),Ns.fromBufferAttribute(i,l),Os.fromBufferAttribute(i,c),h.uv=an.getInterpolation(Fs,sr,ar,or,Us,Ns,Os,new be)),r&&(Us.fromBufferAttribute(r,o),Ns.fromBufferAttribute(r,l),Os.fromBufferAttribute(r,c),h.uv1=an.getInterpolation(Fs,sr,ar,or,Us,Ns,Os,new be),h.uv2=h.uv1),a&&(Ac.fromBufferAttribute(a,o),Cc.fromBufferAttribute(a,l),Rc.fromBufferAttribute(a,c),h.normal=an.getInterpolation(Fs,sr,ar,or,Ac,Cc,Rc,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};an.getNormal(sr,ar,or,d.normal),h.face=d}return h}class Ur extends yt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(d,2));function _(g,m,p,v,x,M,w,b,T,L,y){const A=M/T,O=w/L,G=M/2,$=w/2,R=b/2,N=T+1,F=L+1;let k=0,q=0;const B=new I;for(let Z=0;Z<F;Z++){const te=Z*O-$;for(let Q=0;Q<N;Q++){const W=Q*A-G;B[g]=W*v,B[m]=te*x,B[p]=R,c.push(B.x,B.y,B.z),B[g]=0,B[m]=0,B[p]=b>0?1:-1,h.push(B.x,B.y,B.z),d.push(Q/T),d.push(1-Z/L),k+=1}}for(let Z=0;Z<L;Z++)for(let te=0;te<T;te++){const Q=u+te+N*Z,W=u+te+N*(Z+1),K=u+(te+1)+N*(Z+1),ae=u+(te+1)+N*Z;l.push(Q,W,ae),l.push(W,K,ae),q+=6}o.addGroup(f,q,y),f+=q,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ht(s){const e={};for(let t=0;t<s.length;t++){const n=Ar(s[t]);for(const i in n)e[i]=n[i]}return e}function kf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function du(s){return s.getRenderTarget()===null?s.outputColorSpace:rt.workingColorSpace}const rs={clone:Ar,merge:Ht};var Gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yt extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gf,this.fragmentShader=Hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=kf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fu extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends fu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const lr=-90,cr=1;class Vf extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new on(lr,cr,e,t);i.layers=this.layers,this.add(i);const r=new on(lr,cr,e,t);r.layers=this.layers,this.add(r);const a=new on(lr,cr,e,t);a.layers=this.layers,this.add(a);const o=new on(lr,cr,e,t);o.layers=this.layers,this.add(o);const l=new on(lr,cr,e,t);l.layers=this.layers,this.add(l);const c=new on(lr,cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class pu extends $t{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Tr,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wf extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Jr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Fi?It:vn),this.texture=new pu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ur(5,5,5),r=new Yt({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Kn});r.uniforms.tEquirect.value=t;const a=new St(i,r),o=t.minFilter;return t.minFilter===is&&(t.minFilter=_n),new Vf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const no=new I,Xf=new I,qf=new $e;class Yn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=no.subVectors(n,t).cross(Xf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(no),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qf.getNormalMatrix(e),i=this.coplanarPoint(no).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new ms,ks=new I;class il{constructor(e=new Yn,t=new Yn,n=new Yn,i=new Yn,r=new Yn,a=new Yn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],v=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-r,u-c,m-f,M-p).normalize(),n[1].setComponents(l+r,u+c,m+f,M+p).normalize(),n[2].setComponents(l+a,u+h,m+_,M+v).normalize(),n[3].setComponents(l-a,u-h,m-_,M-v).normalize(),n[4].setComponents(l-o,u-d,m-g,M-x).normalize(),t===$n)n[5].setComponents(l+o,u+d,m+g,M+x).normalize();else if(t===ha)n[5].setComponents(o,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ks.x=i.normal.x>0?e.max.x:e.min.x,ks.y=i.normal.y>0?e.max.y:e.min.y,ks.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mu(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Yf(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,f=d.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=s.SHORT;else if(d instanceof Uint32Array)g=s.UNSIGNED_INT;else if(d instanceof Int32Array)g=s.INT;else if(d instanceof Int8Array)g=s.BYTE;else if(d instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,d){const u=h.array,f=h._updateRange,_=h.updateRanges;if(s.bindBuffer(d,c),f.count===-1&&_.length===0&&s.bufferSubData(d,0,u),_.length!==0){for(let g=0,m=_.length;g<m;g++){const p=_[g];t?s.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):s.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,i(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}class Ta extends yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const v=p*u-a;for(let x=0;x<c;x++){const M=x*d-r;_.push(M,-v,0),g.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const x=v+c*p,M=v+c*(p+1),w=v+1+c*(p+1),b=v+1+c*p;f.push(x,M,b),f.push(M,w,b)}this.setIndex(f),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(g,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.widthSegments,e.heightSegments)}}var jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$f=`#ifdef USE_ALPHAHASH
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
#endif`,Kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ep=`#ifdef USE_AOMAP
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
#endif`,np=`#ifdef USE_BATCHING
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
#endif`,ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ap=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,op=`#ifdef USE_IRIDESCENCE
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
#endif`,lp=`#ifdef USE_BUMPMAP
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_p=`#define PI 3.141592653589793
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
} // validated`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vp=`vec3 transformedNormal = objectNormal;
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
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",bp=`
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
}`,wp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Np=`#ifdef USE_GRADIENTMAP
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
}`,Op=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
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
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qp=`PhysicalMaterial material;
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
#endif`,Yp=`struct PhysicalMaterial {
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
}`,jp=`
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
#endif`,$p=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,em=`#ifdef USE_LOGDEPTHBUF
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
#endif`,nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rm=`#if defined( USE_POINTS_UV )
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
#endif`,sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,om=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lm=`#ifdef USE_MORPHNORMALS
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
#endif`,cm=`#ifdef USE_MORPHTARGETS
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
#endif`,hm=`#ifdef USE_MORPHTARGETS
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
#endif`,um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gm=`#ifdef USE_NORMALMAP
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
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ym=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Im=`float getShadowMask() {
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
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,Fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jm=`uniform sampler2D t2D;
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`#include <common>
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
}`,eg=`#if DEPTH_PACKING == 3200
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
}`,ng=`#define DISTANCE
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`uniform float scale;
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
}`,ag=`uniform vec3 diffuse;
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
}`,og=`#include <common>
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#define LAMBERT
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
}`,hg=`#define LAMBERT
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
}`,ug=`#define MATCAP
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
}`,dg=`#define MATCAP
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
}`,fg=`#define NORMAL
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
}`,pg=`#define NORMAL
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
}`,mg=`#define PHONG
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
}`,gg=`#define PHONG
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
}`,_g=`#define STANDARD
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
}`,xg=`#define STANDARD
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
}`,vg=`#define TOON
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
}`,yg=`#define TOON
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
}`,Sg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,Tg=`uniform vec3 color;
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
}`,bg=`uniform float rotation;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:jf,alphahash_pars_fragment:$f,alphamap_fragment:Kf,alphamap_pars_fragment:Zf,alphatest_fragment:Jf,alphatest_pars_fragment:Qf,aomap_fragment:ep,aomap_pars_fragment:tp,batching_pars_vertex:np,batching_vertex:ip,begin_vertex:rp,beginnormal_vertex:sp,bsdfs:ap,iridescence_fragment:op,bumpmap_pars_fragment:lp,clipping_planes_fragment:cp,clipping_planes_pars_fragment:hp,clipping_planes_pars_vertex:up,clipping_planes_vertex:dp,color_fragment:fp,color_pars_fragment:pp,color_pars_vertex:mp,color_vertex:gp,common:_p,cube_uv_reflection_fragment:xp,defaultnormal_vertex:vp,displacementmap_pars_vertex:yp,displacementmap_vertex:Mp,emissivemap_fragment:Sp,emissivemap_pars_fragment:Ep,colorspace_fragment:Tp,colorspace_pars_fragment:bp,envmap_fragment:wp,envmap_common_pars_fragment:Ap,envmap_pars_fragment:Cp,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:Gp,envmap_vertex:Pp,fog_vertex:Lp,fog_pars_vertex:Ip,fog_fragment:Dp,fog_pars_fragment:Up,gradientmap_pars_fragment:Np,lightmap_fragment:Op,lightmap_pars_fragment:Fp,lights_lambert_fragment:Bp,lights_lambert_pars_fragment:zp,lights_pars_begin:kp,lights_toon_fragment:Hp,lights_toon_pars_fragment:Vp,lights_phong_fragment:Wp,lights_phong_pars_fragment:Xp,lights_physical_fragment:qp,lights_physical_pars_fragment:Yp,lights_fragment_begin:jp,lights_fragment_maps:$p,lights_fragment_end:Kp,logdepthbuf_fragment:Zp,logdepthbuf_pars_fragment:Jp,logdepthbuf_pars_vertex:Qp,logdepthbuf_vertex:em,map_fragment:tm,map_pars_fragment:nm,map_particle_fragment:im,map_particle_pars_fragment:rm,metalnessmap_fragment:sm,metalnessmap_pars_fragment:am,morphcolor_vertex:om,morphnormal_vertex:lm,morphtarget_pars_vertex:cm,morphtarget_vertex:hm,normal_fragment_begin:um,normal_fragment_maps:dm,normal_pars_fragment:fm,normal_pars_vertex:pm,normal_vertex:mm,normalmap_pars_fragment:gm,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:vm,iridescence_pars_fragment:ym,opaque_fragment:Mm,packing:Sm,premultiplied_alpha_fragment:Em,project_vertex:Tm,dithering_fragment:bm,dithering_pars_fragment:wm,roughnessmap_fragment:Am,roughnessmap_pars_fragment:Cm,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Pm,shadowmap_vertex:Lm,shadowmask_pars_fragment:Im,skinbase_vertex:Dm,skinning_pars_vertex:Um,skinning_vertex:Nm,skinnormal_vertex:Om,specularmap_fragment:Fm,specularmap_pars_fragment:Bm,tonemapping_fragment:zm,tonemapping_pars_fragment:km,transmission_fragment:Gm,transmission_pars_fragment:Hm,uv_pars_fragment:Vm,uv_pars_vertex:Wm,uv_vertex:Xm,worldpos_vertex:qm,background_vert:Ym,background_frag:jm,backgroundCube_vert:$m,backgroundCube_frag:Km,cube_vert:Zm,cube_frag:Jm,depth_vert:Qm,depth_frag:eg,distanceRGBA_vert:tg,distanceRGBA_frag:ng,equirect_vert:ig,equirect_frag:rg,linedashed_vert:sg,linedashed_frag:ag,meshbasic_vert:og,meshbasic_frag:lg,meshlambert_vert:cg,meshlambert_frag:hg,meshmatcap_vert:ug,meshmatcap_frag:dg,meshnormal_vert:fg,meshnormal_frag:pg,meshphong_vert:mg,meshphong_frag:gg,meshphysical_vert:_g,meshphysical_frag:xg,meshtoon_vert:vg,meshtoon_frag:yg,points_vert:Mg,points_frag:Sg,shadow_vert:Eg,shadow_frag:Tg,sprite_vert:bg,sprite_frag:wg},he={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Dn={basic:{uniforms:Ht([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Ht([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Ht([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Ht([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Ht([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Ht([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Ht([he.points,he.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Ht([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Ht([he.common,he.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Ht([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Ht([he.sprite,he.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Ht([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Ht([he.lights,he.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Dn.physical={uniforms:Ht([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Gs={r:0,b:0,g:0};function Ag(s,e,t,n,i,r,a){const o=new Ce(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function _(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?g(o,l):x&&x.isColor&&(g(x,1),v=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ma)?(h===void 0&&(h=new St(new Ur(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:Ar(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=rt.getTransfer(x.colorSpace)!==ct,(d!==x||u!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new St(new Ta(2,2),new Yt({name:"BackgroundMaterial",uniforms:Ar(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=rt.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Gs,du(s)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function Cg(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,h=!1;function d(R,N,F,k,q){let B=!1;if(a){const Z=g(k,F,N);c!==Z&&(c=Z,f(c.object)),B=p(R,k,F,q),B&&v(R,k,F,q)}else{const Z=N.wireframe===!0;(c.geometry!==k.id||c.program!==F.id||c.wireframe!==Z)&&(c.geometry=k.id,c.program=F.id,c.wireframe=Z,B=!0)}q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(B||h)&&(h=!1,L(R,N,F,k),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function _(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function g(R,N,F){const k=F.wireframe===!0;let q=o[R.id];q===void 0&&(q={},o[R.id]=q);let B=q[N.id];B===void 0&&(B={},q[N.id]=B);let Z=B[k];return Z===void 0&&(Z=m(u()),B[k]=Z),Z}function m(R){const N=[],F=[],k=[];for(let q=0;q<i;q++)N[q]=0,F[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:k,object:R,attributes:{},index:null}}function p(R,N,F,k){const q=c.attributes,B=N.attributes;let Z=0;const te=F.getAttributes();for(const Q in te)if(te[Q].location>=0){const K=q[Q];let ae=B[Q];if(ae===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),K===void 0||K.attribute!==ae||ae&&K.data!==ae.data)return!0;Z++}return c.attributesNum!==Z||c.index!==k}function v(R,N,F,k){const q={},B=N.attributes;let Z=0;const te=F.getAttributes();for(const Q in te)if(te[Q].location>=0){let K=B[Q];K===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(K=R.instanceColor));const ae={};ae.attribute=K,K&&K.data&&(ae.data=K.data),q[Q]=ae,Z++}c.attributes=q,c.attributesNum=Z,c.index=k}function x(){const R=c.newAttributes;for(let N=0,F=R.length;N<F;N++)R[N]=0}function M(R){w(R,0)}function w(R,N){const F=c.newAttributes,k=c.enabledAttributes,q=c.attributeDivisors;F[R]=1,k[R]===0&&(s.enableVertexAttribArray(R),k[R]=1),q[R]!==N&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,N),q[R]=N)}function b(){const R=c.newAttributes,N=c.enabledAttributes;for(let F=0,k=N.length;F<k;F++)N[F]!==R[F]&&(s.disableVertexAttribArray(F),N[F]=0)}function T(R,N,F,k,q,B,Z){Z===!0?s.vertexAttribIPointer(R,N,F,q,B):s.vertexAttribPointer(R,N,F,k,q,B)}function L(R,N,F,k){if(n.isWebGL2===!1&&(R.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const q=k.attributes,B=F.getAttributes(),Z=N.defaultAttributeValues;for(const te in B){const Q=B[te];if(Q.location>=0){let W=q[te];if(W===void 0&&(te==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),te==="instanceColor"&&R.instanceColor&&(W=R.instanceColor)),W!==void 0){const K=W.normalized,ae=W.itemSize,Ee=t.get(W);if(Ee===void 0)continue;const ye=Ee.buffer,Ie=Ee.type,Re=Ee.bytesPerElement,xe=n.isWebGL2===!0&&(Ie===s.INT||Ie===s.UNSIGNED_INT||W.gpuType===$h);if(W.isInterleavedBufferAttribute){const ze=W.data,H=ze.stride,At=W.offset;if(ze.isInstancedInterleavedBuffer){for(let oe=0;oe<Q.locationSize;oe++)w(Q.location+oe,ze.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let oe=0;oe<Q.locationSize;oe++)M(Q.location+oe);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let oe=0;oe<Q.locationSize;oe++)T(Q.location+oe,ae/Q.locationSize,Ie,K,H*Re,(At+ae/Q.locationSize*oe)*Re,xe)}else{if(W.isInstancedBufferAttribute){for(let ze=0;ze<Q.locationSize;ze++)w(Q.location+ze,W.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ze=0;ze<Q.locationSize;ze++)M(Q.location+ze);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let ze=0;ze<Q.locationSize;ze++)T(Q.location+ze,ae/Q.locationSize,Ie,K,ae*Re,ae/Q.locationSize*ze*Re,xe)}}else if(Z!==void 0){const K=Z[te];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(Q.location,K);break;case 3:s.vertexAttrib3fv(Q.location,K);break;case 4:s.vertexAttrib4fv(Q.location,K);break;default:s.vertexAttrib1fv(Q.location,K)}}}}b()}function y(){G();for(const R in o){const N=o[R];for(const F in N){const k=N[F];for(const q in k)_(k[q].object),delete k[q];delete N[F]}delete o[R]}}function A(R){if(o[R.id]===void 0)return;const N=o[R.id];for(const F in N){const k=N[F];for(const q in k)_(k[q].object),delete k[q];delete N[F]}delete o[R.id]}function O(R){for(const N in o){const F=o[N];if(F[R.id]===void 0)continue;const k=F[R.id];for(const q in k)_(k[q].object),delete k[q];delete F[R.id]}}function G(){$(),h=!0,c!==l&&(c=l,f(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:$,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:M,disableUnusedAttributes:b}}function Rg(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,u){if(u===0)return;let f,_;if(i)f=s,_="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](r,h,d,u),t.update(d,r,u)}function c(h,d,u){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<u;_++)this.render(h[_],d[_]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=d[g];t.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Pg(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,M=a||e.has("OES_texture_float"),w=x&&M,b=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:b}}function Lg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Yn,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||_===null||_.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,x=v*4;let M=p.clippingState||null;l.value=M,M=h(_,u,x,f);for(let w=0;w!==x;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=f;x!==g;++x,M+=4)a.copy(d[x]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Ig(s){let e=new WeakMap;function t(a,o){return o===aa?a.mapping=Tr:o===Co&&(a.mapping=br),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===aa||o===Co)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Wf(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class rl extends fu{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pr=4,Pc=[.125,.215,.35,.446,.526,.582],Di=20,io=new rl,Lc=new Ce;let ro=null,so=0,ao=0;const Pi=(1+Math.sqrt(5))/2,hr=1/Pi,Ic=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Pi,hr),new I(0,Pi,-hr),new I(hr,0,Pi),new I(-hr,0,Pi),new I(Pi,hr,0),new I(-Pi,hr,0)];class Do{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro,so,ao),e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Zn,format:Rn,colorSpace:Jn,depthBuffer:!1},i=Dc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dg(r)),this._blurMaterial=Ug(r,e,t)}return i}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,io)}_sceneToCubeUV(e,t,n,i){const o=new on(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Lc),h.toneMapping=di,h.autoClear=!1;const f=new An({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),_=new St(new Ur,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Lc),g=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Hs(i,v*x,p>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Tr||e.mapping===br;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new St(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Hs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,io)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Ic[(i-1)%Ic.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new St(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Di-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Di;m>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const p=[];let v=0;for(let T=0;T<Di;++T){const L=T/g,y=Math.exp(-L*L/2);p.push(y),T===0?v+=y:T<m&&(v+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=_,u.mipInt.value=x-n;const M=this._sizeLods[i],w=3*M*(i>x-pr?i-x+pr:0),b=4*(this._cubeSize-M);Hs(t,w,b,3*M,2*M),l.setRenderTarget(t),l.render(d,io)}}function Dg(s){const e=[],t=[],n=[];let i=s;const r=s-pr+1+Pc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-pr?l=Pc[a-s+pr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*f),x=new Float32Array(m*_*f),M=new Float32Array(p*_*f);for(let b=0;b<f;b++){const T=b%3*2/3-1,L=b>2?0:-1,y=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];v.set(y,g*_*b),x.set(u,m*_*b);const A=[b,b,b,b,b,b];M.set(A,p*_*b)}const w=new yt;w.setAttribute("position",new Kt(v,g)),w.setAttribute("uv",new Kt(x,m)),w.setAttribute("faceIndex",new Kt(M,p)),e.push(w),i>pr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Dc(s,e,t){const n=new Pn(s,e,t);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ug(s,e,t){const n=new Float32Array(Di),i=new I(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sl(),fragmentShader:`

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
	`}function Ng(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===aa||l===Co,h=l===Tr||l===br;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Do(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Do(s));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Og(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Fg(s,e,t,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);for(const _ in u.morphAttributes){const g=u.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const _ in u)e.update(u[_],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],s.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,_=d.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let x=0,M=v.length;x<M;x+=3){const w=v[x+0],b=v[x+1],T=v[x+2];u.push(w,b,b,T,T,w)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const w=x+0,b=x+1,T=x+2;u.push(w,b,b,T,T,w)}}else return;const m=new(su(u)?uu:hu)(u,1);m.version=g;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Bg(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,_){s.drawElements(r,_,o,f*l),t.update(_,r,1)}function d(f,_,g){if(g===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,_,o,f*l,g),t.update(_,r,g)}function u(f,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<g;p++)this.render(f[p]/l,_[p]);else{m.multiDrawElementsWEBGL(r,_,0,o,f,0,g);let p=0;for(let v=0;v<g;v++)p+=_[v];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function zg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function kg(s,e){return s[0]-e[0]}function Gg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Hg(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new dt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=f!==void 0?f.length:0;let g=r.get(h);if(g===void 0||g.count!==_){let R=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",R)};g!==void 0&&g.texture.dispose();const v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let L=0;v===!0&&(L=1),x===!0&&(L=2),M===!0&&(L=3);let y=h.attributes.position.count*L,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const O=new Float32Array(y*A*4*_),G=new lu(O,y,A,_);G.type=li,G.needsUpdate=!0;const $=L*4;for(let N=0;N<_;N++){const F=w[N],k=b[N],q=T[N],B=y*A*4*N;for(let Z=0;Z<F.count;Z++){const te=Z*$;v===!0&&(a.fromBufferAttribute(F,Z),O[B+te+0]=a.x,O[B+te+1]=a.y,O[B+te+2]=a.z,O[B+te+3]=0),x===!0&&(a.fromBufferAttribute(k,Z),O[B+te+4]=a.x,O[B+te+5]=a.y,O[B+te+6]=a.z,O[B+te+7]=0),M===!0&&(a.fromBufferAttribute(q,Z),O[B+te+8]=a.x,O[B+te+9]=a.y,O[B+te+10]=a.z,O[B+te+11]=q.itemSize===4?a.w:1)}}g={count:_,texture:G,size:new be(y,A)},r.set(h,g),h.addEventListener("dispose",R)}let m=0;for(let v=0;v<u.length;v++)m+=u[v];const p=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(s,"morphTargetBaseInfluence",p),d.getUniforms().setValue(s,"morphTargetInfluences",u),d.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const f=u===void 0?0:u.length;let _=n[h.id];if(_===void 0||_.length!==f){_=[];for(let x=0;x<f;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<f;x++){const M=_[x];M[0]=x,M[1]=u[x]}_.sort(Gg);for(let x=0;x<8;x++)x<f&&_[x][1]?(o[x][0]=_[x][0],o[x][1]=_[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(kg);const g=h.morphAttributes.position,m=h.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const M=o[x],w=M[0],b=M[1];w!==Number.MAX_SAFE_INTEGER&&b?(g&&h.getAttribute("morphTarget"+x)!==g[w]&&h.setAttribute("morphTarget"+x,g[w]),m&&h.getAttribute("morphNormal"+x)!==m[w]&&h.setAttribute("morphNormal"+x,m[w]),i[x]=b,p+=b):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const v=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Vg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class gu extends $t{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Oi,h!==Oi&&h!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Oi&&(n=oi),n===void 0&&h===wr&&(n=Ni),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _u=new $t,xu=new gu(1,1);xu.compareFunction=ru;const vu=new lu,yu=new Cf,Mu=new pu,Oc=[],Fc=[],Bc=new Float32Array(16),zc=new Float32Array(9),kc=new Float32Array(4);function Nr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Oc[i];if(r===void 0&&(r=new Float32Array(i),Oc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function wt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ba(s,e){let t=Fc[e];t===void 0&&(t=new Int32Array(e),Fc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Wg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Xg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2fv(this.addr,e),wt(t,e)}}function qg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;s.uniform3fv(this.addr,e),wt(t,e)}}function Yg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4fv(this.addr,e),wt(t,e)}}function jg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;kc.set(n),s.uniformMatrix2fv(this.addr,!1,kc),wt(t,n)}}function $g(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;zc.set(n),s.uniformMatrix3fv(this.addr,!1,zc),wt(t,n)}}function Kg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;Bc.set(n),s.uniformMatrix4fv(this.addr,!1,Bc),wt(t,n)}}function Zg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2iv(this.addr,e),wt(t,e)}}function Qg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3iv(this.addr,e),wt(t,e)}}function e_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4iv(this.addr,e),wt(t,e)}}function t_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function n_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2uiv(this.addr,e),wt(t,e)}}function i_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3uiv(this.addr,e),wt(t,e)}}function r_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4uiv(this.addr,e),wt(t,e)}}function s_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?xu:_u;t.setTexture2D(e||r,i)}function a_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yu,i)}function o_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Mu,i)}function l_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vu,i)}function c_(s){switch(s){case 5126:return Wg;case 35664:return Xg;case 35665:return qg;case 35666:return Yg;case 35674:return jg;case 35675:return $g;case 35676:return Kg;case 5124:case 35670:return Zg;case 35667:case 35671:return Jg;case 35668:case 35672:return Qg;case 35669:case 35673:return e_;case 5125:return t_;case 36294:return n_;case 36295:return i_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return s_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return o_;case 36289:case 36303:case 36311:case 36292:return l_}}function h_(s,e){s.uniform1fv(this.addr,e)}function u_(s,e){const t=Nr(e,this.size,2);s.uniform2fv(this.addr,t)}function d_(s,e){const t=Nr(e,this.size,3);s.uniform3fv(this.addr,t)}function f_(s,e){const t=Nr(e,this.size,4);s.uniform4fv(this.addr,t)}function p_(s,e){const t=Nr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function m_(s,e){const t=Nr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function g_(s,e){const t=Nr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function __(s,e){s.uniform1iv(this.addr,e)}function x_(s,e){s.uniform2iv(this.addr,e)}function v_(s,e){s.uniform3iv(this.addr,e)}function y_(s,e){s.uniform4iv(this.addr,e)}function M_(s,e){s.uniform1uiv(this.addr,e)}function S_(s,e){s.uniform2uiv(this.addr,e)}function E_(s,e){s.uniform3uiv(this.addr,e)}function T_(s,e){s.uniform4uiv(this.addr,e)}function b_(s,e,t){const n=this.cache,i=e.length,r=ba(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||_u,r[a])}function w_(s,e,t){const n=this.cache,i=e.length,r=ba(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||yu,r[a])}function A_(s,e,t){const n=this.cache,i=e.length,r=ba(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Mu,r[a])}function C_(s,e,t){const n=this.cache,i=e.length,r=ba(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||vu,r[a])}function R_(s){switch(s){case 5126:return h_;case 35664:return u_;case 35665:return d_;case 35666:return f_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return __;case 35667:case 35671:return x_;case 35668:case 35672:return v_;case 35669:case 35673:return y_;case 5125:return M_;case 36294:return S_;case 36295:return E_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return C_}}class P_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=c_(t.type)}}class L_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R_(t.type)}}class I_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const oo=/(\w+)(\])?(\[|\.)?/g;function Gc(s,e){s.seq.push(e),s.map[e.id]=e}function D_(s,e,t){const n=s.name,i=n.length;for(oo.lastIndex=0;;){const r=oo.exec(n),a=oo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Gc(t,c===void 0?new P_(o,s,e):new L_(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new I_(o),Gc(t,d)),t=d}}}class ea{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);D_(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Hc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const U_=37297;let N_=0;function O_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function F_(s){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(s);let n;switch(e===t?n="":e===ca&&t===la?n="LinearDisplayP3ToLinearSRGB":e===la&&t===ca&&(n="LinearSRGBToLinearDisplayP3"),s){case Jn:case Sa:return[n,"LinearTransferOETF"];case It:case tl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Vc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+O_(s.getShaderSource(e),a)}else return i}function B_(s,e){const t=F_(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function z_(s,e){let t;switch(e){case Wh:t="Linear";break;case Xh:t="Reinhard";break;case qh:t="OptimizedCineon";break;case Qo:t="ACESFilmic";break;case Yh:t="AgX";break;case ef:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function k_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mr).join(`
`)}function G_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(mr).join(`
`)}function H_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function V_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function mr(s){return s!==""}function Wc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(s){return s.replace(W_,q_)}const X_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function q_(s,e){let t=Ye[e];if(t===void 0){const n=X_.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Uo(t)}const Y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(s){return s.replace(Y_,j_)}function j_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Hh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Cd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function K_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Tr:case br:e="ENVMAP_TYPE_CUBE";break;case Ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Z_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case br:e="ENVMAP_MODE_REFRACTION";break}return e}function J_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vh:e="ENVMAP_BLENDING_MULTIPLY";break;case Jd:e="ENVMAP_BLENDING_MIX";break;case Qd:e="ENVMAP_BLENDING_ADD";break}return e}function Q_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function e0(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=$_(t),c=K_(t),h=Z_(t),d=J_(t),u=Q_(t),f=t.isWebGL2?"":k_(t),_=G_(t),g=H_(r),m=i.createProgram();let p,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),v.length>0&&(v+=`
`)):(p=[Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),v=[f,Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?Ye.tonemapping_pars_fragment:"",t.toneMapping!==di?z_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,B_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=Uo(a),a=Wc(a,t),a=Xc(a,t),o=Uo(o),o=Wc(o,t),o=Xc(o,t),a=qc(a),o=qc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=x+p+a,w=x+v+o,b=Hc(i,i.VERTEX_SHADER,M),T=Hc(i,i.FRAGMENT_SHADER,w);i.attachShader(m,b),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function L(G){if(s.debug.checkShaderErrors){const $=i.getProgramInfoLog(m).trim(),R=i.getShaderInfoLog(b).trim(),N=i.getShaderInfoLog(T).trim();let F=!0,k=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,b,T);else{const q=Vc(i,b,"vertex"),B=Vc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+q+`
`+B)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(R===""||N==="")&&(k=!1);k&&(G.diagnostics={runnable:F,programLog:$,vertexShader:{log:R,prefix:p},fragmentShader:{log:N,prefix:v}})}i.deleteShader(b),i.deleteShader(T),y=new ea(i,m),A=V_(i,m)}let y;this.getUniforms=function(){return y===void 0&&L(this),y};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(m,U_)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=N_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=T,this}let t0=0;class n0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new i0(e),t.set(e,n)),n}}class i0{constructor(e){this.id=t0++,this.code=e,this.usedTimes=0}}function r0(s,e,t,n,i,r,a){const o=new nl,l=new n0,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function m(y,A,O,G,$){const R=G.fog,N=$.geometry,F=y.isMeshStandardMaterial?G.environment:null,k=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),q=k&&k.mapping===Ma?k.image.height:null,B=_[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,te=Z!==void 0?Z.length:0;let Q=0;N.morphAttributes.position!==void 0&&(Q=1),N.morphAttributes.normal!==void 0&&(Q=2),N.morphAttributes.color!==void 0&&(Q=3);let W,K,ae,Ee;if(B){const nt=Dn[B];W=nt.vertexShader,K=nt.fragmentShader}else W=y.vertexShader,K=y.fragmentShader,l.update(y),ae=l.getVertexShaderID(y),Ee=l.getFragmentShaderID(y);const ye=s.getRenderTarget(),Ie=$.isInstancedMesh===!0,Re=$.isBatchedMesh===!0,xe=!!y.map,ze=!!y.matcap,H=!!k,At=!!y.aoMap,oe=!!y.lightMap,Oe=!!y.bumpMap,Me=!!y.normalMap,it=!!y.displacementMap,We=!!y.emissiveMap,E=!!y.metalnessMap,S=!!y.roughnessMap,U=y.anisotropy>0,Y=y.clearcoat>0,J=y.iridescence>0,ne=y.sheen>0,pe=y.transmission>0,le=U&&!!y.anisotropyMap,ue=Y&&!!y.clearcoatMap,_e=Y&&!!y.clearcoatNormalMap,Se=Y&&!!y.clearcoatRoughnessMap,ee=J&&!!y.iridescenceMap,Fe=J&&!!y.iridescenceThicknessMap,Ne=ne&&!!y.sheenColorMap,Pe=ne&&!!y.sheenRoughnessMap,Te=!!y.specularMap,de=!!y.specularColorMap,P=!!y.specularIntensityMap,re=pe&&!!y.transmissionMap,ve=pe&&!!y.thicknessMap,fe=!!y.gradientMap,se=!!y.alphaMap,D=y.alphaTest>0,ie=!!y.alphaHash,ce=!!y.extensions,Le=!!N.attributes.uv1,Ae=!!N.attributes.uv2,ke=!!N.attributes.uv3;let Ge=di;return y.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ge=s.toneMapping),{isWebGL2:h,shaderID:B,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:K,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:Ee,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Re,instancing:Ie,instancingColor:Ie&&$.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Jn,map:xe,matcap:ze,envMap:H,envMapMode:H&&k.mapping,envMapCubeUVHeight:q,aoMap:At,lightMap:oe,bumpMap:Oe,normalMap:Me,displacementMap:u&&it,emissiveMap:We,normalMapObjectSpace:Me&&y.normalMapType===ff,normalMapTangentSpace:Me&&y.normalMapType===iu,metalnessMap:E,roughnessMap:S,anisotropy:U,anisotropyMap:le,clearcoat:Y,clearcoatMap:ue,clearcoatNormalMap:_e,clearcoatRoughnessMap:Se,iridescence:J,iridescenceMap:ee,iridescenceThicknessMap:Fe,sheen:ne,sheenColorMap:Ne,sheenRoughnessMap:Pe,specularMap:Te,specularColorMap:de,specularIntensityMap:P,transmission:pe,transmissionMap:re,thicknessMap:ve,gradientMap:fe,opaque:y.transparent===!1&&y.blending===vr,alphaMap:se,alphaTest:D,alphaHash:ie,combine:y.combine,mapUv:xe&&g(y.map.channel),aoMapUv:At&&g(y.aoMap.channel),lightMapUv:oe&&g(y.lightMap.channel),bumpMapUv:Oe&&g(y.bumpMap.channel),normalMapUv:Me&&g(y.normalMap.channel),displacementMapUv:it&&g(y.displacementMap.channel),emissiveMapUv:We&&g(y.emissiveMap.channel),metalnessMapUv:E&&g(y.metalnessMap.channel),roughnessMapUv:S&&g(y.roughnessMap.channel),anisotropyMapUv:le&&g(y.anisotropyMap.channel),clearcoatMapUv:ue&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(y.sheenRoughnessMap.channel),specularMapUv:Te&&g(y.specularMap.channel),specularColorMapUv:de&&g(y.specularColorMap.channel),specularIntensityMapUv:P&&g(y.specularIntensityMap.channel),transmissionMapUv:re&&g(y.transmissionMap.channel),thicknessMapUv:ve&&g(y.thicknessMap.channel),alphaMapUv:se&&g(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Me||U),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:Ae,vertexUv3s:ke,pointsUvs:$.isPoints===!0&&!!N.attributes.uv&&(xe||se),fog:!!R,useFog:y.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:$.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ge,useLegacyLights:s._useLegacyLights,decodeVideoTexture:xe&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===xn,flipSided:y.side===jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ce&&y.extensions.derivatives===!0,extensionFragDepth:ce&&y.extensions.fragDepth===!0,extensionDrawBuffers:ce&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const O in y.defines)A.push(O),A.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(v(A,y),x(A,y),A.push(s.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function v(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function x(y,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function M(y){const A=_[y.type];let O;if(A){const G=Dn[A];O=rs.clone(G.uniforms)}else O=y.uniforms;return O}function w(y,A){let O;for(let G=0,$=c.length;G<$;G++){const R=c[G];if(R.cacheKey===A){O=R,++O.usedTimes;break}}return O===void 0&&(O=new e0(s,A,y,r),c.push(O)),O}function b(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),y.destroy()}}function T(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:w,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:L}}function s0(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function a0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function jc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $c(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,f,_,g,m){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},s[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=g,p.group=m),e++,p}function o(d,u,f,_,g,m){const p=a(d,u,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(d,u,f,_,g,m){const p=a(d,u,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||a0),n.length>1&&n.sort(u||jc),i.length>1&&i.sort(u||jc)}function h(){for(let d=e,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function o0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new $c,s.set(n,[a])):i>=r.length?(a=new $c,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function l0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ce};break;case"SpotLight":t={position:new I,direction:new I,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function c0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let h0=0;function u0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function d0(s,e){const t=new l0,n=c0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new I);const r=new I,a=new xt,o=new xt;function l(h,d){let u=0,f=0,_=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let g=0,m=0,p=0,v=0,x=0,M=0,w=0,b=0,T=0,L=0,y=0;h.sort(u0);const A=d===!0?Math.PI:1;for(let G=0,$=h.length;G<$;G++){const R=h[G],N=R.color,F=R.intensity,k=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=N.r*F*A,f+=N.g*F*A,_+=N.b*F*A;else if(R.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(R.sh.coefficients[B],F);y++}else if(R.isDirectionalLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity*A),R.castShadow){const Z=R.shadow,te=n.get(R);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,i.directionalShadow[g]=te,i.directionalShadowMap[g]=q,i.directionalShadowMatrix[g]=R.shadow.matrix,M++}i.directional[g]=B,g++}else if(R.isSpotLight){const B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(N).multiplyScalar(F*A),B.distance=k,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,i.spot[p]=B;const Z=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,Z.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[p]=Z.matrix,R.castShadow){const te=n.get(R);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,i.spotShadow[p]=te,i.spotShadowMap[p]=q,b++}p++}else if(R.isRectAreaLight){const B=t.get(R);B.color.copy(N).multiplyScalar(F),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),i.rectArea[v]=B,v++}else if(R.isPointLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity*A),B.distance=R.distance,B.decay=R.decay,R.castShadow){const Z=R.shadow,te=n.get(R);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,te.shadowCameraNear=Z.camera.near,te.shadowCameraFar=Z.camera.far,i.pointShadow[m]=te,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=R.shadow.matrix,w++}i.point[m]=B,m++}else if(R.isHemisphereLight){const B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(F*A),B.groundColor.copy(R.groundColor).multiplyScalar(F*A),i.hemi[x]=B,x++}}v>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=_;const O=i.hash;(O.directionalLength!==g||O.pointLength!==m||O.spotLength!==p||O.rectAreaLength!==v||O.hemiLength!==x||O.numDirectionalShadows!==M||O.numPointShadows!==w||O.numSpotShadows!==b||O.numSpotMaps!==T||O.numLightProbes!==y)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=b+T-L,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=y,O.directionalLength=g,O.pointLength=m,O.spotLength=p,O.rectAreaLength=v,O.hemiLength=x,O.numDirectionalShadows=M,O.numPointShadows=w,O.numSpotShadows=b,O.numSpotMaps=T,O.numLightProbes=y,i.version=h0++)}function c(h,d){let u=0,f=0,_=0,g=0,m=0;const p=d.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const M=h[v];if(M.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),u++}else if(M.isSpotLight){const w=i.spot[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Kc(s,e){const t=new d0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function f0(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Kc(s,e),t.set(r,[l])):a>=o.length?(l=new Kc(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class p0 extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m0 extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const g0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_0=`uniform sampler2D shadow_pass;
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
}`;function x0(s,e,t){let n=new il;const i=new be,r=new be,a=new dt,o=new p0({depthPacking:df}),l=new m0,c={},h=t.maxTextureSize,d={[gi]:jt,[jt]:gi,[xn]:xn},u=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:g0,fragmentShader:_0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new yt;_.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new St(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let p=this.type;this.render=function(b,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const y=s.getRenderTarget(),A=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Kn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const $=p!==Xn&&this.type===Xn,R=p===Xn&&this.type!==Xn;for(let N=0,F=b.length;N<F;N++){const k=b[N],q=k.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const B=q.getFrameExtents();if(i.multiply(B),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/B.x),i.x=r.x*B.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/B.y),i.y=r.y*B.y,q.mapSize.y=r.y)),q.map===null||$===!0||R===!0){const te=this.type!==Xn?{minFilter:Wt,magFilter:Wt}:{};q.map!==null&&q.map.dispose(),q.map=new Pn(i.x,i.y,te),q.map.texture.name=k.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const Z=q.getViewportCount();for(let te=0;te<Z;te++){const Q=q.getViewport(te);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),G.viewport(a),q.updateMatrices(k,te),n=q.getFrustum(),M(T,L,q.camera,k,this.type)}q.isPointLightShadow!==!0&&this.type===Xn&&v(q,L),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,A,O)};function v(b,T){const L=e.update(g);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Pn(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(T,null,L,u,g,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(T,null,L,f,g,null)}function x(b,T,L,y){let A=null;const O=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(O!==void 0)A=O;else if(A=L.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const G=A.uuid,$=T.uuid;let R=c[G];R===void 0&&(R={},c[G]=R);let N=R[$];N===void 0&&(N=A.clone(),R[$]=N,T.addEventListener("dispose",w)),A=N}if(A.visible=T.visible,A.wireframe=T.wireframe,y===Xn?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:d[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,L.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const G=s.properties.get(A);G.light=L}return A}function M(b,T,L,y,A){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===Xn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const $=e.update(b),R=b.material;if(Array.isArray(R)){const N=$.groups;for(let F=0,k=N.length;F<k;F++){const q=N[F],B=R[q.materialIndex];if(B&&B.visible){const Z=x(b,B,y,A);b.onBeforeShadow(s,b,T,L,$,Z,q),s.renderBufferDirect(L,null,$,Z,b,q),b.onAfterShadow(s,b,T,L,$,Z,q)}}}else if(R.visible){const N=x(b,R,y,A);b.onBeforeShadow(s,b,T,L,$,N,null),s.renderBufferDirect(L,null,$,N,b,null),b.onAfterShadow(s,b,T,L,$,N,null)}}const G=b.children;for(let $=0,R=G.length;$<R;$++)M(G[$],T,L,y,A)}function w(b){b.target.removeEventListener("dispose",w);for(const L in c){const y=c[L],A=b.target.uuid;A in y&&(y[A].dispose(),delete y[A])}}}function v0(s,e,t){const n=t.isWebGL2;function i(){let D=!1;const ie=new dt;let ce=null;const Le=new dt(0,0,0,0);return{setMask:function(Ae){ce!==Ae&&!D&&(s.colorMask(Ae,Ae,Ae,Ae),ce=Ae)},setLocked:function(Ae){D=Ae},setClear:function(Ae,ke,Ge,Qe,nt){nt===!0&&(Ae*=Qe,ke*=Qe,Ge*=Qe),ie.set(Ae,ke,Ge,Qe),Le.equals(ie)===!1&&(s.clearColor(Ae,ke,Ge,Qe),Le.copy(ie))},reset:function(){D=!1,ce=null,Le.set(-1,0,0,0)}}}function r(){let D=!1,ie=null,ce=null,Le=null;return{setTest:function(Ae){Ae?Re(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(Ae){ie!==Ae&&!D&&(s.depthMask(Ae),ie=Ae)},setFunc:function(Ae){if(ce!==Ae){switch(Ae){case Xd:s.depthFunc(s.NEVER);break;case qd:s.depthFunc(s.ALWAYS);break;case Yd:s.depthFunc(s.LESS);break;case sa:s.depthFunc(s.LEQUAL);break;case jd:s.depthFunc(s.EQUAL);break;case $d:s.depthFunc(s.GEQUAL);break;case Kd:s.depthFunc(s.GREATER);break;case Zd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=Ae}},setLocked:function(Ae){D=Ae},setClear:function(Ae){Le!==Ae&&(s.clearDepth(Ae),Le=Ae)},reset:function(){D=!1,ie=null,ce=null,Le=null}}}function a(){let D=!1,ie=null,ce=null,Le=null,Ae=null,ke=null,Ge=null,Qe=null,nt=null;return{setTest:function(je){D||(je?Re(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(je){ie!==je&&!D&&(s.stencilMask(je),ie=je)},setFunc:function(je,lt,Gt){(ce!==je||Le!==lt||Ae!==Gt)&&(s.stencilFunc(je,lt,Gt),ce=je,Le=lt,Ae=Gt)},setOp:function(je,lt,Gt){(ke!==je||Ge!==lt||Qe!==Gt)&&(s.stencilOp(je,lt,Gt),ke=je,Ge=lt,Qe=Gt)},setLocked:function(je){D=je},setClear:function(je){nt!==je&&(s.clearStencil(je),nt=je)},reset:function(){D=!1,ie=null,ce=null,Le=null,Ae=null,ke=null,Ge=null,Qe=null,nt=null}}}const o=new i,l=new r,c=new a,h=new WeakMap,d=new WeakMap;let u={},f={},_=new WeakMap,g=[],m=null,p=!1,v=null,x=null,M=null,w=null,b=null,T=null,L=null,y=new Ce(0,0,0),A=0,O=!1,G=null,$=null,R=null,N=null,F=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,B=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=B>=1):Z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=B>=2);let te=null,Q={};const W=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),ae=new dt().fromArray(W),Ee=new dt().fromArray(K);function ye(D,ie,ce,Le){const Ae=new Uint8Array(4),ke=s.createTexture();s.bindTexture(D,ke),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<ce;Ge++)n&&(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)?s.texImage3D(ie,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(ie+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return ke}const Ie={};Ie[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Ie[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ie[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ie[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(s.DEPTH_TEST),l.setFunc(sa),We(!1),E(Dl),Re(s.CULL_FACE),Me(Kn);function Re(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function xe(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function ze(D,ie){return f[D]!==ie?(s.bindFramebuffer(D,ie),f[D]=ie,n&&(D===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ie),D===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ie)),!0):!1}function H(D,ie){let ce=g,Le=!1;if(D)if(ce=_.get(ie),ce===void 0&&(ce=[],_.set(ie,ce)),D.isWebGLMultipleRenderTargets){const Ae=D.texture;if(ce.length!==Ae.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let ke=0,Ge=Ae.length;ke<Ge;ke++)ce[ke]=s.COLOR_ATTACHMENT0+ke;ce.length=Ae.length,Le=!0}}else ce[0]!==s.COLOR_ATTACHMENT0&&(ce[0]=s.COLOR_ATTACHMENT0,Le=!0);else ce[0]!==s.BACK&&(ce[0]=s.BACK,Le=!0);Le&&(t.isWebGL2?s.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function At(D){return m!==D?(s.useProgram(D),m=D,!0):!1}const oe={[Ii]:s.FUNC_ADD,[Pd]:s.FUNC_SUBTRACT,[Ld]:s.FUNC_REVERSE_SUBTRACT};if(n)oe[Ol]=s.MIN,oe[Fl]=s.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(oe[Ol]=D.MIN_EXT,oe[Fl]=D.MAX_EXT)}const Oe={[Id]:s.ZERO,[Dd]:s.ONE,[Ud]:s.SRC_COLOR,[wo]:s.SRC_ALPHA,[kd]:s.SRC_ALPHA_SATURATE,[Bd]:s.DST_COLOR,[Od]:s.DST_ALPHA,[Nd]:s.ONE_MINUS_SRC_COLOR,[Ao]:s.ONE_MINUS_SRC_ALPHA,[zd]:s.ONE_MINUS_DST_COLOR,[Fd]:s.ONE_MINUS_DST_ALPHA,[Gd]:s.CONSTANT_COLOR,[Hd]:s.ONE_MINUS_CONSTANT_COLOR,[Vd]:s.CONSTANT_ALPHA,[Wd]:s.ONE_MINUS_CONSTANT_ALPHA};function Me(D,ie,ce,Le,Ae,ke,Ge,Qe,nt,je){if(D===Kn){p===!0&&(xe(s.BLEND),p=!1);return}if(p===!1&&(Re(s.BLEND),p=!0),D!==Rd){if(D!==v||je!==O){if((x!==Ii||b!==Ii)&&(s.blendEquation(s.FUNC_ADD),x=Ii,b=Ii),je)switch(D){case vr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bt:s.blendFunc(s.ONE,s.ONE);break;case Ul:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case vr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bt:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ul:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,w=null,T=null,L=null,y.set(0,0,0),A=0,v=D,O=je}return}Ae=Ae||ie,ke=ke||ce,Ge=Ge||Le,(ie!==x||Ae!==b)&&(s.blendEquationSeparate(oe[ie],oe[Ae]),x=ie,b=Ae),(ce!==M||Le!==w||ke!==T||Ge!==L)&&(s.blendFuncSeparate(Oe[ce],Oe[Le],Oe[ke],Oe[Ge]),M=ce,w=Le,T=ke,L=Ge),(Qe.equals(y)===!1||nt!==A)&&(s.blendColor(Qe.r,Qe.g,Qe.b,nt),y.copy(Qe),A=nt),v=D,O=!1}function it(D,ie){D.side===xn?xe(s.CULL_FACE):Re(s.CULL_FACE);let ce=D.side===jt;ie&&(ce=!ce),We(ce),D.blending===vr&&D.transparent===!1?Me(Kn):Me(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Le=D.stencilWrite;c.setTest(Le),Le&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),U(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Re(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function We(D){G!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),G=D)}function E(D){D!==wd?(Re(s.CULL_FACE),D!==$&&(D===Dl?s.cullFace(s.BACK):D===Ad?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),$=D}function S(D){D!==R&&(q&&s.lineWidth(D),R=D)}function U(D,ie,ce){D?(Re(s.POLYGON_OFFSET_FILL),(N!==ie||F!==ce)&&(s.polygonOffset(ie,ce),N=ie,F=ce)):xe(s.POLYGON_OFFSET_FILL)}function Y(D){D?Re(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function J(D){D===void 0&&(D=s.TEXTURE0+k-1),te!==D&&(s.activeTexture(D),te=D)}function ne(D,ie,ce){ce===void 0&&(te===null?ce=s.TEXTURE0+k-1:ce=te);let Le=Q[ce];Le===void 0&&(Le={type:void 0,texture:void 0},Q[ce]=Le),(Le.type!==D||Le.texture!==ie)&&(te!==ce&&(s.activeTexture(ce),te=ce),s.bindTexture(D,ie||Ie[D]),Le.type=D,Le.texture=ie)}function pe(){const D=Q[te];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function le(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(D){ae.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ae.copy(D))}function re(D){Ee.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Ee.copy(D))}function ve(D,ie){let ce=d.get(ie);ce===void 0&&(ce=new WeakMap,d.set(ie,ce));let Le=ce.get(D);Le===void 0&&(Le=s.getUniformBlockIndex(ie,D.name),ce.set(D,Le))}function fe(D,ie){const Le=d.get(ie).get(D);h.get(ie)!==Le&&(s.uniformBlockBinding(ie,Le,D.__bindingPointIndex),h.set(ie,Le))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},te=null,Q={},f={},_=new WeakMap,g=[],m=null,p=!1,v=null,x=null,M=null,w=null,b=null,T=null,L=null,y=new Ce(0,0,0),A=0,O=!1,G=null,$=null,R=null,N=null,F=null,ae.set(0,0,s.canvas.width,s.canvas.height),Ee.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Re,disable:xe,bindFramebuffer:ze,drawBuffers:H,useProgram:At,setBlending:Me,setMaterial:it,setFlipSided:We,setCullFace:E,setLineWidth:S,setPolygonOffset:U,setScissorTest:Y,activeTexture:J,bindTexture:ne,unbindTexture:pe,compressedTexImage2D:le,compressedTexImage3D:ue,texImage2D:Te,texImage3D:de,updateUBOMapping:ve,uniformBlockBinding:fe,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:_e,texSubImage3D:Se,compressedTexSubImage2D:ee,compressedTexSubImage3D:Fe,scissor:P,viewport:re,reset:se}}function y0(s,e,t,n,i,r,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,S){return f?new OffscreenCanvas(E,S):ua("canvas")}function g(E,S,U,Y){let J=1;if((E.width>Y||E.height>Y)&&(J=Y/Math.max(E.width,E.height)),J<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ne=S?Io:Math.floor,pe=ne(J*E.width),le=ne(J*E.height);d===void 0&&(d=_(pe,le));const ue=U?_(pe,le):d;return ue.width=pe,ue.height=le,ue.getContext("2d").drawImage(E,0,0,pe,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+pe+"x"+le+")."),ue}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return fc(E.width)&&fc(E.height)}function p(E){return o?!1:E.wrapS!==Cn||E.wrapT!==Cn||E.minFilter!==Wt&&E.minFilter!==_n}function v(E,S){return E.generateMipmaps&&S&&E.minFilter!==Wt&&E.minFilter!==_n}function x(E){s.generateMipmap(E)}function M(E,S,U,Y,J=!1){if(o===!1)return S;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ne=S;if(S===s.RED&&(U===s.FLOAT&&(ne=s.R32F),U===s.HALF_FLOAT&&(ne=s.R16F),U===s.UNSIGNED_BYTE&&(ne=s.R8)),S===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(ne=s.R8UI),U===s.UNSIGNED_SHORT&&(ne=s.R16UI),U===s.UNSIGNED_INT&&(ne=s.R32UI),U===s.BYTE&&(ne=s.R8I),U===s.SHORT&&(ne=s.R16I),U===s.INT&&(ne=s.R32I)),S===s.RG&&(U===s.FLOAT&&(ne=s.RG32F),U===s.HALF_FLOAT&&(ne=s.RG16F),U===s.UNSIGNED_BYTE&&(ne=s.RG8)),S===s.RGBA){const pe=J?oa:rt.getTransfer(Y);U===s.FLOAT&&(ne=s.RGBA32F),U===s.HALF_FLOAT&&(ne=s.RGBA16F),U===s.UNSIGNED_BYTE&&(ne=pe===ct?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function w(E,S,U){return v(E,U)===!0||E.isFramebufferTexture&&E.minFilter!==Wt&&E.minFilter!==_n?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function b(E){return E===Wt||E===Bl||E===Da?s.NEAREST:s.LINEAR}function T(E){const S=E.target;S.removeEventListener("dispose",T),y(S),S.isVideoTexture&&h.delete(S)}function L(E){const S=E.target;S.removeEventListener("dispose",L),O(S)}function y(E){const S=n.get(E);if(S.__webglInit===void 0)return;const U=E.source,Y=u.get(U);if(Y){const J=Y[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&A(E),Object.keys(Y).length===0&&u.delete(U)}n.remove(E)}function A(E){const S=n.get(E);s.deleteTexture(S.__webglTexture);const U=E.source,Y=u.get(U);delete Y[S.__cacheKey],a.memory.textures--}function O(E){const S=E.texture,U=n.get(E),Y=n.get(S);if(Y.__webglTexture!==void 0&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(U.__webglFramebuffer[J]))for(let ne=0;ne<U.__webglFramebuffer[J].length;ne++)s.deleteFramebuffer(U.__webglFramebuffer[J][ne]);else s.deleteFramebuffer(U.__webglFramebuffer[J]);U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer[J])}else{if(Array.isArray(U.__webglFramebuffer))for(let J=0;J<U.__webglFramebuffer.length;J++)s.deleteFramebuffer(U.__webglFramebuffer[J]);else s.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&s.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let J=0;J<U.__webglColorRenderbuffer.length;J++)U.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(U.__webglColorRenderbuffer[J]);U.__webglDepthRenderbuffer&&s.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let J=0,ne=S.length;J<ne;J++){const pe=n.get(S[J]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(S[J])}n.remove(S),n.remove(E)}let G=0;function $(){G=0}function R(){const E=G;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),G+=1,E}function N(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function F(E,S){const U=n.get(E);if(E.isVideoTexture&&it(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(U,E,S);return}}t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+S)}function k(E,S){const U=n.get(E);if(E.version>0&&U.__version!==E.version){ae(U,E,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+S)}function q(E,S){const U=n.get(E);if(E.version>0&&U.__version!==E.version){ae(U,E,S);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+S)}function B(E,S){const U=n.get(E);if(E.version>0&&U.__version!==E.version){Ee(U,E,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+S)}const Z={[ns]:s.REPEAT,[Cn]:s.CLAMP_TO_EDGE,[Ro]:s.MIRRORED_REPEAT},te={[Wt]:s.NEAREST,[Bl]:s.NEAREST_MIPMAP_NEAREST,[Da]:s.NEAREST_MIPMAP_LINEAR,[_n]:s.LINEAR,[tf]:s.LINEAR_MIPMAP_NEAREST,[is]:s.LINEAR_MIPMAP_LINEAR},Q={[pf]:s.NEVER,[yf]:s.ALWAYS,[mf]:s.LESS,[ru]:s.LEQUAL,[gf]:s.EQUAL,[vf]:s.GEQUAL,[_f]:s.GREATER,[xf]:s.NOTEQUAL};function W(E,S,U){if(U?(s.texParameteri(E,s.TEXTURE_WRAP_S,Z[S.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,Z[S.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,Z[S.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,te[S.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,te[S.minFilter])):(s.texParameteri(E,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(E,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==Cn||S.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,s.TEXTURE_MAG_FILTER,b(S.magFilter)),s.texParameteri(E,s.TEXTURE_MIN_FILTER,b(S.minFilter)),S.minFilter!==Wt&&S.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,Q[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Wt||S.minFilter!==Da&&S.minFilter!==is||S.type===li&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Zn&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(E,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function K(E,S){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",T));const Y=S.source;let J=u.get(Y);J===void 0&&(J={},u.set(Y,J));const ne=N(S);if(ne!==E.__cacheKey){J[ne]===void 0&&(J[ne]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),J[ne].usedTimes++;const pe=J[E.__cacheKey];pe!==void 0&&(J[E.__cacheKey].usedTimes--,pe.usedTimes===0&&A(S)),E.__cacheKey=ne,E.__webglTexture=J[ne].texture}return U}function ae(E,S,U){let Y=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=s.TEXTURE_3D);const J=K(E,S),ne=S.source;t.bindTexture(Y,E.__webglTexture,s.TEXTURE0+U);const pe=n.get(ne);if(ne.version!==pe.__version||J===!0){t.activeTexture(s.TEXTURE0+U);const le=rt.getPrimaries(rt.workingColorSpace),ue=S.colorSpace===vn?null:rt.getPrimaries(S.colorSpace),_e=S.colorSpace===vn||le===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Se=p(S)&&m(S.image)===!1;let ee=g(S.image,Se,!1,i.maxTextureSize);ee=We(S,ee);const Fe=m(ee)||o,Ne=r.convert(S.format,S.colorSpace);let Pe=r.convert(S.type),Te=M(S.internalFormat,Ne,Pe,S.colorSpace,S.isVideoTexture);W(Y,S,Fe);let de;const P=S.mipmaps,re=o&&S.isVideoTexture!==!0&&Te!==tu,ve=pe.__version===void 0||J===!0,fe=w(S,ee,Fe);if(S.isDepthTexture)Te=s.DEPTH_COMPONENT,o?S.type===li?Te=s.DEPTH_COMPONENT32F:S.type===oi?Te=s.DEPTH_COMPONENT24:S.type===Ni?Te=s.DEPTH24_STENCIL8:Te=s.DEPTH_COMPONENT16:S.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Oi&&Te===s.DEPTH_COMPONENT&&S.type!==el&&S.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=oi,Pe=r.convert(S.type)),S.format===wr&&Te===s.DEPTH_COMPONENT&&(Te=s.DEPTH_STENCIL,S.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ni,Pe=r.convert(S.type))),ve&&(re?t.texStorage2D(s.TEXTURE_2D,1,Te,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Te,ee.width,ee.height,0,Ne,Pe,null));else if(S.isDataTexture)if(P.length>0&&Fe){re&&ve&&t.texStorage2D(s.TEXTURE_2D,fe,Te,P[0].width,P[0].height);for(let se=0,D=P.length;se<D;se++)de=P[se],re?t.texSubImage2D(s.TEXTURE_2D,se,0,0,de.width,de.height,Ne,Pe,de.data):t.texImage2D(s.TEXTURE_2D,se,Te,de.width,de.height,0,Ne,Pe,de.data);S.generateMipmaps=!1}else re?(ve&&t.texStorage2D(s.TEXTURE_2D,fe,Te,ee.width,ee.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,Ne,Pe,ee.data)):t.texImage2D(s.TEXTURE_2D,0,Te,ee.width,ee.height,0,Ne,Pe,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){re&&ve&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Te,P[0].width,P[0].height,ee.depth);for(let se=0,D=P.length;se<D;se++)de=P[se],S.format!==Rn?Ne!==null?re?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,ee.depth,Ne,de.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,Te,de.width,de.height,ee.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,ee.depth,Ne,Pe,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,Te,de.width,de.height,ee.depth,0,Ne,Pe,de.data)}else{re&&ve&&t.texStorage2D(s.TEXTURE_2D,fe,Te,P[0].width,P[0].height);for(let se=0,D=P.length;se<D;se++)de=P[se],S.format!==Rn?Ne!==null?re?t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,de.width,de.height,Ne,de.data):t.compressedTexImage2D(s.TEXTURE_2D,se,Te,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?t.texSubImage2D(s.TEXTURE_2D,se,0,0,de.width,de.height,Ne,Pe,de.data):t.texImage2D(s.TEXTURE_2D,se,Te,de.width,de.height,0,Ne,Pe,de.data)}else if(S.isDataArrayTexture)re?(ve&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Te,ee.width,ee.height,ee.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ne,Pe,ee.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,ee.width,ee.height,ee.depth,0,Ne,Pe,ee.data);else if(S.isData3DTexture)re?(ve&&t.texStorage3D(s.TEXTURE_3D,fe,Te,ee.width,ee.height,ee.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ne,Pe,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Te,ee.width,ee.height,ee.depth,0,Ne,Pe,ee.data);else if(S.isFramebufferTexture){if(ve)if(re)t.texStorage2D(s.TEXTURE_2D,fe,Te,ee.width,ee.height);else{let se=ee.width,D=ee.height;for(let ie=0;ie<fe;ie++)t.texImage2D(s.TEXTURE_2D,ie,Te,se,D,0,Ne,Pe,null),se>>=1,D>>=1}}else if(P.length>0&&Fe){re&&ve&&t.texStorage2D(s.TEXTURE_2D,fe,Te,P[0].width,P[0].height);for(let se=0,D=P.length;se<D;se++)de=P[se],re?t.texSubImage2D(s.TEXTURE_2D,se,0,0,Ne,Pe,de):t.texImage2D(s.TEXTURE_2D,se,Te,Ne,Pe,de);S.generateMipmaps=!1}else re?(ve&&t.texStorage2D(s.TEXTURE_2D,fe,Te,ee.width,ee.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ne,Pe,ee)):t.texImage2D(s.TEXTURE_2D,0,Te,Ne,Pe,ee);v(S,Fe)&&x(Y),pe.__version=ne.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function Ee(E,S,U){if(S.image.length!==6)return;const Y=K(E,S),J=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+U);const ne=n.get(J);if(J.version!==ne.__version||Y===!0){t.activeTexture(s.TEXTURE0+U);const pe=rt.getPrimaries(rt.workingColorSpace),le=S.colorSpace===vn?null:rt.getPrimaries(S.colorSpace),ue=S.colorSpace===vn||pe===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const _e=S.isCompressedTexture||S.image[0].isCompressedTexture,Se=S.image[0]&&S.image[0].isDataTexture,ee=[];for(let se=0;se<6;se++)!_e&&!Se?ee[se]=g(S.image[se],!1,!0,i.maxCubemapSize):ee[se]=Se?S.image[se].image:S.image[se],ee[se]=We(S,ee[se]);const Fe=ee[0],Ne=m(Fe)||o,Pe=r.convert(S.format,S.colorSpace),Te=r.convert(S.type),de=M(S.internalFormat,Pe,Te,S.colorSpace),P=o&&S.isVideoTexture!==!0,re=ne.__version===void 0||Y===!0;let ve=w(S,Fe,Ne);W(s.TEXTURE_CUBE_MAP,S,Ne);let fe;if(_e){P&&re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ve,de,Fe.width,Fe.height);for(let se=0;se<6;se++){fe=ee[se].mipmaps;for(let D=0;D<fe.length;D++){const ie=fe[D];S.format!==Rn?Pe!==null?P?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,0,0,ie.width,ie.height,Pe,ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,de,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,0,0,ie.width,ie.height,Pe,Te,ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,de,ie.width,ie.height,0,Pe,Te,ie.data)}}}else{fe=S.mipmaps,P&&re&&(fe.length>0&&ve++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ve,de,ee[0].width,ee[0].height));for(let se=0;se<6;se++)if(Se){P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ee[se].width,ee[se].height,Pe,Te,ee[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,de,ee[se].width,ee[se].height,0,Pe,Te,ee[se].data);for(let D=0;D<fe.length;D++){const ce=fe[D].image[se].image;P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,0,0,ce.width,ce.height,Pe,Te,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,de,ce.width,ce.height,0,Pe,Te,ce.data)}}else{P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Pe,Te,ee[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,de,Pe,Te,ee[se]);for(let D=0;D<fe.length;D++){const ie=fe[D];P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,0,0,Pe,Te,ie.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,de,Pe,Te,ie.image[se])}}}v(S,Ne)&&x(s.TEXTURE_CUBE_MAP),ne.__version=J.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ye(E,S,U,Y,J,ne){const pe=r.convert(U.format,U.colorSpace),le=r.convert(U.type),ue=M(U.internalFormat,pe,le,U.colorSpace);if(!n.get(S).__hasExternalTextures){const Se=Math.max(1,S.width>>ne),ee=Math.max(1,S.height>>ne);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,ne,ue,Se,ee,S.depth,0,pe,le,null):t.texImage2D(J,ne,ue,Se,ee,0,pe,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),Me(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,J,n.get(U).__webglTexture,0,Oe(S)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,J,n.get(U).__webglTexture,ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(E,S,U){if(s.bindRenderbuffer(s.RENDERBUFFER,E),S.depthBuffer&&!S.stencilBuffer){let Y=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(U||Me(S)){const J=S.depthTexture;J&&J.isDepthTexture&&(J.type===li?Y=s.DEPTH_COMPONENT32F:J.type===oi&&(Y=s.DEPTH_COMPONENT24));const ne=Oe(S);Me(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,Y,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,Y,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,Y,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,E)}else if(S.depthBuffer&&S.stencilBuffer){const Y=Oe(S);U&&Me(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Y,s.DEPTH24_STENCIL8,S.width,S.height):Me(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Y,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,E)}else{const Y=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let J=0;J<Y.length;J++){const ne=Y[J],pe=r.convert(ne.format,ne.colorSpace),le=r.convert(ne.type),ue=M(ne.internalFormat,pe,le,ne.colorSpace),_e=Oe(S);U&&Me(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,ue,S.width,S.height):Me(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,ue,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ue,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),F(S.depthTexture,0);const Y=n.get(S.depthTexture).__webglTexture,J=Oe(S);if(S.depthTexture.format===Oi)Me(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0);else if(S.depthTexture.format===wr)Me(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function xe(E){const S=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Re(S.__webglFramebuffer,E)}else if(U){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]=s.createRenderbuffer(),Ie(S.__webglDepthbuffer[Y],E,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Ie(S.__webglDepthbuffer,E,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(E,S,U){const Y=n.get(E);S!==void 0&&ye(Y.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&xe(E)}function H(E){const S=E.texture,U=n.get(E),Y=n.get(S);E.addEventListener("dispose",L),E.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=S.version,a.memory.textures++);const J=E.isWebGLCubeRenderTarget===!0,ne=E.isWebGLMultipleRenderTargets===!0,pe=m(E)||o;if(J){U.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[le]=[];for(let ue=0;ue<S.mipmaps.length;ue++)U.__webglFramebuffer[le][ue]=s.createFramebuffer()}else U.__webglFramebuffer[le]=s.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)U.__webglFramebuffer[le]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(ne)if(i.drawBuffers){const le=E.texture;for(let ue=0,_e=le.length;ue<_e;ue++){const Se=n.get(le[ue]);Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&Me(E)===!1){const le=ne?S:[S];U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ue=0;ue<le.length;ue++){const _e=le[ue];U.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[ue]);const Se=r.convert(_e.format,_e.colorSpace),ee=r.convert(_e.type),Fe=M(_e.internalFormat,Se,ee,_e.colorSpace,E.isXRRenderTarget===!0),Ne=Oe(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,Fe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,U.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),W(s.TEXTURE_CUBE_MAP,S,pe);for(let le=0;le<6;le++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)ye(U.__webglFramebuffer[le][ue],E,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,ue);else ye(U.__webglFramebuffer[le],E,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);v(S,pe)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const le=E.texture;for(let ue=0,_e=le.length;ue<_e;ue++){const Se=le[ue],ee=n.get(Se);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture),W(s.TEXTURE_2D,Se,pe),ye(U.__webglFramebuffer,E,Se,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),v(Se,pe)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?le=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,Y.__webglTexture),W(le,S,pe),o&&S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)ye(U.__webglFramebuffer[ue],E,S,s.COLOR_ATTACHMENT0,le,ue);else ye(U.__webglFramebuffer,E,S,s.COLOR_ATTACHMENT0,le,0);v(S,pe)&&x(le),t.unbindTexture()}E.depthBuffer&&xe(E)}function At(E){const S=m(E)||o,U=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Y=0,J=U.length;Y<J;Y++){const ne=U[Y];if(v(ne,S)){const pe=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,le=n.get(ne).__webglTexture;t.bindTexture(pe,le),x(pe),t.unbindTexture()}}}function oe(E){if(o&&E.samples>0&&Me(E)===!1){const S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],U=E.width,Y=E.height;let J=s.COLOR_BUFFER_BIT;const ne=[],pe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=n.get(E),ue=E.isWebGLMultipleRenderTargets===!0;if(ue)for(let _e=0;_e<S.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){ne.push(s.COLOR_ATTACHMENT0+_e),E.depthBuffer&&ne.push(pe);const Se=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Se===!1&&(E.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ue&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[_e]),Se===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[pe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[pe])),ue){const ee=n.get(S[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,U,Y,0,0,U,Y,J,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let _e=0;_e<S.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,le.__webglColorRenderbuffer[_e]);const Se=n.get(S[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,Se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Oe(E){return Math.min(i.maxSamples,E.samples)}function Me(E){const S=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function it(E){const S=a.render.frame;h.get(E)!==S&&(h.set(E,S),E.update())}function We(E,S){const U=E.colorSpace,Y=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Po||U!==Jn&&U!==vn&&(rt.getTransfer(U)===ct?o===!1?e.has("EXT_sRGB")===!0&&Y===Rn?(E.format=Po,E.minFilter=_n,E.generateMipmaps=!1):S=au.sRGBToLinear(S):(Y!==Rn||J!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}this.allocateTextureUnit=R,this.resetTextureUnits=$,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=B,this.rebindTextures=ze,this.setupRenderTarget=H,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Me}function M0(s,e,t){const n=t.isWebGL2;function i(r,a=vn){let o;const l=rt.getTransfer(a);if(r===fi)return s.UNSIGNED_BYTE;if(r===Kh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Zh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===nf)return s.BYTE;if(r===rf)return s.SHORT;if(r===el)return s.UNSIGNED_SHORT;if(r===$h)return s.INT;if(r===oi)return s.UNSIGNED_INT;if(r===li)return s.FLOAT;if(r===Zn)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===sf)return s.ALPHA;if(r===Rn)return s.RGBA;if(r===af)return s.LUMINANCE;if(r===of)return s.LUMINANCE_ALPHA;if(r===Oi)return s.DEPTH_COMPONENT;if(r===wr)return s.DEPTH_STENCIL;if(r===Po)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===lf)return s.RED;if(r===Jh)return s.RED_INTEGER;if(r===cf)return s.RG;if(r===Qh)return s.RG_INTEGER;if(r===eu)return s.RGBA_INTEGER;if(r===Ua||r===Na||r===Oa||r===Fa)if(l===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ua)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ua)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Na)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Oa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zl||r===kl||r===Gl||r===Hl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===zl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===tu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vl||r===Wl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Vl)return l===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Wl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xl||r===ql||r===Yl||r===jl||r===$l||r===Kl||r===Zl||r===Jl||r===Ql||r===ec||r===tc||r===nc||r===ic||r===rc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Xl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ql)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$l)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ql)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ec)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===tc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ic)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ba||r===sc||r===ac)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ba)return l===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ac)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hf||r===oc||r===lc||r===cc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ba)return o.COMPRESSED_RED_RGTC1_EXT;if(r===oc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===cc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ni?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class S0 extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Un extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E0={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(E0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class T0 extends Vi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null;const g=t.getContextAttributes();let m=null,p=null;const v=[],x=[],M=new be;let w=null;const b=new on;b.layers.enable(1),b.viewport=new dt;const T=new on;T.layers.enable(2),T.viewport=new dt;const L=[b,T],y=new S0;y.layers.enable(1),y.layers.enable(2);let A=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=v[W];return K===void 0&&(K=new lo,v[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=v[W];return K===void 0&&(K=new lo,v[W]=K),K.getGripSpace()},this.getHand=function(W){let K=v[W];return K===void 0&&(K=new lo,v[W]=K),K.getHandSpace()};function G(W){const K=x.indexOf(W.inputSource);if(K===-1)return;const ae=v[K];ae!==void 0&&(ae.update(W.inputSource,W.frame,c||a),ae.dispatchEvent({type:W.type,data:W.inputSource}))}function $(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",R);for(let W=0;W<v.length;W++){const K=x[W];K!==null&&(x[W]=null,v[W].disconnect(K))}A=null,O=null,e.setRenderTarget(m),f=null,u=null,d=null,i=null,p=null,Q.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",$),i.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Pn(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ae=null,Ee=null;g.depth&&(Ee=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?wr:Oi,ae=g.stencil?Ni:oi);const ye={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(ye),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new Pn(u.textureWidth,u.textureHeight,{format:Rn,type:fi,depthTexture:new gu(u.textureWidth,u.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ie=e.properties.get(p);Ie.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function R(W){for(let K=0;K<W.removed.length;K++){const ae=W.removed[K],Ee=x.indexOf(ae);Ee>=0&&(x[Ee]=null,v[Ee].disconnect(ae))}for(let K=0;K<W.added.length;K++){const ae=W.added[K];let Ee=x.indexOf(ae);if(Ee===-1){for(let Ie=0;Ie<v.length;Ie++)if(Ie>=x.length){x.push(ae),Ee=Ie;break}else if(x[Ie]===null){x[Ie]=ae,Ee=Ie;break}if(Ee===-1)break}const ye=v[Ee];ye&&ye.connect(ae)}}const N=new I,F=new I;function k(W,K,ae){N.setFromMatrixPosition(K.matrixWorld),F.setFromMatrixPosition(ae.matrixWorld);const Ee=N.distanceTo(F),ye=K.projectionMatrix.elements,Ie=ae.projectionMatrix.elements,Re=ye[14]/(ye[10]-1),xe=ye[14]/(ye[10]+1),ze=(ye[9]+1)/ye[5],H=(ye[9]-1)/ye[5],At=(ye[8]-1)/ye[0],oe=(Ie[8]+1)/Ie[0],Oe=Re*At,Me=Re*oe,it=Ee/(-At+oe),We=it*-At;K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(We),W.translateZ(it),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const E=Re+it,S=xe+it,U=Oe-We,Y=Me+(Ee-We),J=ze*xe/S*E,ne=H*xe/S*E;W.projectionMatrix.makePerspective(U,Y,J,ne,E,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function q(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;y.near=T.near=b.near=W.near,y.far=T.far=b.far=W.far,(A!==y.near||O!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,O=y.far);const K=W.parent,ae=y.cameras;q(y,K);for(let Ee=0;Ee<ae.length;Ee++)q(ae[Ee],K);ae.length===2?k(y,b,T):y.projectionMatrix.copy(b.projectionMatrix),B(W,y,K)};function B(W,K,ae){ae===null?W.matrix.copy(K.matrixWorld):(W.matrix.copy(ae.matrixWorld),W.matrix.invert(),W.matrix.multiply(K.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Lo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)};let Z=null;function te(W,K){if(h=K.getViewerPose(c||a),_=K,h!==null){const ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Ee=!1;ae.length!==y.cameras.length&&(y.cameras.length=0,Ee=!0);for(let ye=0;ye<ae.length;ye++){const Ie=ae[ye];let Re=null;if(f!==null)Re=f.getViewport(Ie);else{const ze=d.getViewSubImage(u,Ie);Re=ze.viewport,ye===0&&(e.setRenderTargetTextures(p,ze.colorTexture,u.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(p))}let xe=L[ye];xe===void 0&&(xe=new on,xe.layers.enable(ye),xe.viewport=new dt,L[ye]=xe),xe.matrix.fromArray(Ie.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Ie.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Re.x,Re.y,Re.width,Re.height),ye===0&&(y.matrix.copy(xe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ee===!0&&y.cameras.push(xe)}}for(let ae=0;ae<v.length;ae++){const Ee=x[ae],ye=v[ae];Ee!==null&&ye!==void 0&&ye.update(Ee,K,c||a)}Z&&Z(W,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}const Q=new mu;Q.setAnimationLoop(te),this.setAnimationLoop=function(W){Z=W},this.dispose=function(){}}}function b0(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,du(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function w0(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const M=x.program;n.uniformBlockBinding(v,M)}function c(v,x){let M=i[v.id];M===void 0&&(_(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",m));const w=x.program;n.updateUBOMapping(v,w);const b=e.render.frame;r[v.id]!==b&&(u(v),r[v.id]=b)}function h(v){const x=d();v.__bindingPointIndex=x;const M=s.createBuffer(),w=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,w,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=i[v.id],M=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,T=M.length;b<T;b++){const L=Array.isArray(M[b])?M[b]:[M[b]];for(let y=0,A=L.length;y<A;y++){const O=L[y];if(f(O,b,y,w)===!0){const G=O.__offset,$=Array.isArray(O.value)?O.value:[O.value];let R=0;for(let N=0;N<$.length;N++){const F=$[N],k=g(F);typeof F=="number"||typeof F=="boolean"?(O.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,G+R,O.__data)):F.isMatrix3?(O.__data[0]=F.elements[0],O.__data[1]=F.elements[1],O.__data[2]=F.elements[2],O.__data[3]=0,O.__data[4]=F.elements[3],O.__data[5]=F.elements[4],O.__data[6]=F.elements[5],O.__data[7]=0,O.__data[8]=F.elements[6],O.__data[9]=F.elements[7],O.__data[10]=F.elements[8],O.__data[11]=0):(F.toArray(O.__data,R),R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,M,w){const b=v.value,T=x+"_"+M;if(w[T]===void 0)return typeof b=="number"||typeof b=="boolean"?w[T]=b:w[T]=b.clone(),!0;{const L=w[T];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return w[T]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function _(v){const x=v.uniforms;let M=0;const w=16;for(let T=0,L=x.length;T<L;T++){const y=Array.isArray(x[T])?x[T]:[x[T]];for(let A=0,O=y.length;A<O;A++){const G=y[A],$=Array.isArray(G.value)?G.value:[G.value];for(let R=0,N=$.length;R<N;R++){const F=$[R],k=g(F),q=M%w;q!==0&&w-q<k.boundary&&(M+=w-q),G.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=k.storage}}}const b=M%w;return b>0&&(M+=w-b),v.__size=M,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Su{constructor(e={}){const{canvas:t=Ef(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=di,this.toneMappingExposure=1;const x=this;let M=!1,w=0,b=0,T=null,L=-1,y=null;const A=new dt,O=new dt;let G=null;const $=new Ce(0);let R=0,N=t.width,F=t.height,k=1,q=null,B=null;const Z=new dt(0,0,N,F),te=new dt(0,0,N,F);let Q=!1;const W=new il;let K=!1,ae=!1,Ee=null;const ye=new xt,Ie=new be,Re=new I,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return T===null?k:1}let H=n;function At(C,z){for(let X=0;X<C.length;X++){const j=C[X],V=t.getContext(j,z);if(V!==null)return V}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jo}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ie,!1),H===null){const z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),H=At(z,C),H===null)throw At(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let oe,Oe,Me,it,We,E,S,U,Y,J,ne,pe,le,ue,_e,Se,ee,Fe,Ne,Pe,Te,de,P,re;function ve(){oe=new Og(H),Oe=new Pg(H,oe,e),oe.init(Oe),de=new M0(H,oe,Oe),Me=new v0(H,oe,Oe),it=new zg(H),We=new s0,E=new y0(H,oe,Me,We,Oe,de,it),S=new Ig(x),U=new Ng(x),Y=new Yf(H,Oe),P=new Cg(H,oe,Y,Oe),J=new Fg(H,Y,it,P),ne=new Vg(H,J,Y,it),Ne=new Hg(H,Oe,E),Se=new Lg(We),pe=new r0(x,S,U,oe,Oe,P,Se),le=new b0(x,We),ue=new o0,_e=new f0(oe,Oe),Fe=new Ag(x,S,U,Me,ne,u,l),ee=new x0(x,ne,Oe),re=new w0(H,it,Oe,Me),Pe=new Rg(H,oe,it,Oe),Te=new Bg(H,oe,it,Oe),it.programs=pe.programs,x.capabilities=Oe,x.extensions=oe,x.properties=We,x.renderLists=ue,x.shadowMap=ee,x.state=Me,x.info=it}ve();const fe=new T0(x,H);this.xr=fe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=oe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=oe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(N,F,!1))},this.getSize=function(C){return C.set(N,F)},this.setSize=function(C,z,X=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,F=z,t.width=Math.floor(C*k),t.height=Math.floor(z*k),X===!0&&(t.style.width=C+"px",t.style.height=z+"px"),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(N*k,F*k).floor()},this.setDrawingBufferSize=function(C,z,X){N=C,F=z,k=X,t.width=Math.floor(C*X),t.height=Math.floor(z*X),this.setViewport(0,0,C,z)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,z,X,j){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,z,X,j),Me.viewport(A.copy(Z).multiplyScalar(k).floor())},this.getScissor=function(C){return C.copy(te)},this.setScissor=function(C,z,X,j){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,z,X,j),Me.scissor(O.copy(te).multiplyScalar(k).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(C){Me.setScissorTest(Q=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){B=C},this.getClearColor=function(C){return C.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(C=!0,z=!0,X=!0){let j=0;if(C){let V=!1;if(T!==null){const me=T.texture.format;V=me===eu||me===Qh||me===Jh}if(V){const me=T.texture.type,we=me===fi||me===oi||me===el||me===Ni||me===Kh||me===Zh,De=Fe.getClearColor(),Ue=Fe.getClearAlpha(),Xe=De.r,Be=De.g,He=De.b;we?(f[0]=Xe,f[1]=Be,f[2]=He,f[3]=Ue,H.clearBufferuiv(H.COLOR,0,f)):(_[0]=Xe,_[1]=Be,_[2]=He,_[3]=Ue,H.clearBufferiv(H.COLOR,0,_))}else j|=H.COLOR_BUFFER_BIT}z&&(j|=H.DEPTH_BUFFER_BIT),X&&(j|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),ue.dispose(),_e.dispose(),We.dispose(),S.dispose(),U.dispose(),ne.dispose(),P.dispose(),re.dispose(),pe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",nt),fe.removeEventListener("sessionend",je),Ee&&(Ee.dispose(),Ee=null),lt.stop()};function se(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=it.autoReset,z=ee.enabled,X=ee.autoUpdate,j=ee.needsUpdate,V=ee.type;ve(),it.autoReset=C,ee.enabled=z,ee.autoUpdate=X,ee.needsUpdate=j,ee.type=V}function ie(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ce(C){const z=C.target;z.removeEventListener("dispose",ce),Le(z)}function Le(C){Ae(C),We.remove(C)}function Ae(C){const z=We.get(C).programs;z!==void 0&&(z.forEach(function(X){pe.releaseProgram(X)}),C.isShaderMaterial&&pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,X,j,V,me){z===null&&(z=xe);const we=V.isMesh&&V.matrixWorld.determinant()<0,De=xs(C,z,X,j,V);Me.setMaterial(j,we);let Ue=X.index,Xe=1;if(j.wireframe===!0){if(Ue=J.getWireframeAttribute(X),Ue===void 0)return;Xe=2}const Be=X.drawRange,He=X.attributes.position;let ut=Be.start*Xe,ge=(Be.start+Be.count)*Xe;me!==null&&(ut=Math.max(ut,me.start*Xe),ge=Math.min(ge,(me.start+me.count)*Xe)),Ue!==null?(ut=Math.max(ut,0),ge=Math.min(ge,Ue.count)):He!=null&&(ut=Math.max(ut,0),ge=Math.min(ge,He.count));const et=ge-ut;if(et<0||et===1/0)return;P.setup(V,j,De,X,Ue);let Tt,Ke=Pe;if(Ue!==null&&(Tt=Y.get(Ue),Ke=Te,Ke.setIndex(Tt)),V.isMesh)j.wireframe===!0?(Me.setLineWidth(j.wireframeLinewidth*ze()),Ke.setMode(H.LINES)):Ke.setMode(H.TRIANGLES);else if(V.isLine){let qe=j.linewidth;qe===void 0&&(qe=1),Me.setLineWidth(qe*ze()),V.isLineSegments?Ke.setMode(H.LINES):V.isLineLoop?Ke.setMode(H.LINE_LOOP):Ke.setMode(H.LINE_STRIP)}else V.isPoints?Ke.setMode(H.POINTS):V.isSprite&&Ke.setMode(H.TRIANGLES);if(V.isBatchedMesh)Ke.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Ke.renderInstances(ut,et,V.count);else if(X.isInstancedBufferGeometry){const qe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,qi=Math.min(X.instanceCount,qe);Ke.renderInstances(ut,et,qi)}else Ke.render(ut,et)};function ke(C,z,X){C.transparent===!0&&C.side===xn&&C.forceSinglePass===!1?(C.side=jt,C.needsUpdate=!0,Mi(C,z,X),C.side=gi,C.needsUpdate=!0,Mi(C,z,X),C.side=xn):Mi(C,z,X)}this.compile=function(C,z,X=null){X===null&&(X=C),m=_e.get(X),m.init(),v.push(m),X.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),C!==X&&C.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights);const j=new Set;return C.traverse(function(V){const me=V.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){const De=me[we];ke(De,X,V),j.add(De)}else ke(me,X,V),j.add(me)}),v.pop(),m=null,j},this.compileAsync=function(C,z,X=null){const j=this.compile(C,z,X);return new Promise(V=>{function me(){if(j.forEach(function(we){We.get(we).currentProgram.isReady()&&j.delete(we)}),j.size===0){V(C);return}setTimeout(me,10)}oe.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Ge=null;function Qe(C){Ge&&Ge(C)}function nt(){lt.stop()}function je(){lt.start()}const lt=new mu;lt.setAnimationLoop(Qe),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(C){Ge=C,fe.setAnimationLoop(C),C===null?lt.stop():lt.start()},fe.addEventListener("sessionstart",nt),fe.addEventListener("sessionend",je),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(z),z=fe.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,z,T),m=_e.get(C,v.length),m.init(),v.push(m),ye.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W.setFromProjectionMatrix(ye),ae=this.localClippingEnabled,K=Se.init(this.clippingPlanes,ae),g=ue.get(C,p.length),g.init(),p.push(g),Gt(C,z,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(q,B),this.info.render.frame++,K===!0&&Se.beginShadows();const X=m.state.shadowsArray;if(ee.render(X,C,z),K===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),Fe.render(g,C),m.setupLights(x._useLegacyLights),z.isArrayCamera){const j=z.cameras;for(let V=0,me=j.length;V<me;V++){const we=j[V];Je(g,C,we,we.viewport)}}else Je(g,C,z);T!==null&&(E.updateMultisampleRenderTarget(T),E.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(x,C,z),P.resetDefaultState(),L=-1,y=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Gt(C,z,X,j){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||W.intersectsSprite(C)){j&&Re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ye);const we=ne.update(C),De=C.material;De.visible&&g.push(C,we,De,X,Re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||W.intersectsObject(C))){const we=ne.update(C),De=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Re.copy(C.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Re.copy(we.boundingSphere.center)),Re.applyMatrix4(C.matrixWorld).applyMatrix4(ye)),Array.isArray(De)){const Ue=we.groups;for(let Xe=0,Be=Ue.length;Xe<Be;Xe++){const He=Ue[Xe],ut=De[He.materialIndex];ut&&ut.visible&&g.push(C,we,ut,X,Re.z,He)}}else De.visible&&g.push(C,we,De,X,Re.z,null)}}const me=C.children;for(let we=0,De=me.length;we<De;we++)Gt(me[we],z,X,j)}function Je(C,z,X,j){const V=C.opaque,me=C.transmissive,we=C.transparent;m.setupLightsView(X),K===!0&&Se.setGlobalState(x.clippingPlanes,X),me.length>0&&Lt(V,me,z,X),j&&Me.viewport(A.copy(j)),V.length>0&&Bn(V,z,X),me.length>0&&Bn(me,z,X),we.length>0&&Bn(we,z,X),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Lt(C,z,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const me=Oe.isWebGL2;Ee===null&&(Ee=new Pn(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?Zn:fi,minFilter:is,samples:me?4:0})),x.getDrawingBufferSize(Ie),me?Ee.setSize(Ie.x,Ie.y):Ee.setSize(Io(Ie.x),Io(Ie.y));const we=x.getRenderTarget();x.setRenderTarget(Ee),x.getClearColor($),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear();const De=x.toneMapping;x.toneMapping=di,Bn(C,X,j),E.updateMultisampleRenderTarget(Ee),E.updateRenderTargetMipmap(Ee);let Ue=!1;for(let Xe=0,Be=z.length;Xe<Be;Xe++){const He=z[Xe],ut=He.object,ge=He.geometry,et=He.material,Tt=He.group;if(et.side===xn&&ut.layers.test(j.layers)){const Ke=et.side;et.side=jt,et.needsUpdate=!0,Fr(ut,X,j,ge,et,Tt),et.side=Ke,et.needsUpdate=!0,Ue=!0}}Ue===!0&&(E.updateMultisampleRenderTarget(Ee),E.updateRenderTargetMipmap(Ee)),x.setRenderTarget(we),x.setClearColor($,R),x.toneMapping=De}function Bn(C,z,X){const j=z.isScene===!0?z.overrideMaterial:null;for(let V=0,me=C.length;V<me;V++){const we=C[V],De=we.object,Ue=we.geometry,Xe=j===null?we.material:j,Be=we.group;De.layers.test(X.layers)&&Fr(De,z,X,Ue,Xe,Be)}}function Fr(C,z,X,j,V,me){C.onBeforeRender(x,z,X,j,V,me),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(x,z,X,j,C,me),V.transparent===!0&&V.side===xn&&V.forceSinglePass===!1?(V.side=jt,V.needsUpdate=!0,x.renderBufferDirect(X,z,j,V,C,me),V.side=gi,V.needsUpdate=!0,x.renderBufferDirect(X,z,j,V,C,me),V.side=xn):x.renderBufferDirect(X,z,j,V,C,me),C.onAfterRender(x,z,X,j,V,me)}function Mi(C,z,X){z.isScene!==!0&&(z=xe);const j=We.get(C),V=m.state.lights,me=m.state.shadowsArray,we=V.state.version,De=pe.getParameters(C,V.state,me,z,X),Ue=pe.getProgramCacheKey(De);let Xe=j.programs;j.environment=C.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(C.isMeshStandardMaterial?U:S).get(C.envMap||j.environment),Xe===void 0&&(C.addEventListener("dispose",ce),Xe=new Map,j.programs=Xe);let Be=Xe.get(Ue);if(Be!==void 0){if(j.currentProgram===Be&&j.lightsStateVersion===we)return zr(C,De),Be}else De.uniforms=pe.getUniforms(C),C.onBuild(X,De,x),C.onBeforeCompile(De,x),Be=pe.acquireProgram(De,Ue),Xe.set(Ue,Be),j.uniforms=De.uniforms;const He=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(He.clippingPlanes=Se.uniform),zr(C,De),j.needsLights=ys(C),j.lightsStateVersion=we,j.needsLights&&(He.ambientLightColor.value=V.state.ambient,He.lightProbe.value=V.state.probe,He.directionalLights.value=V.state.directional,He.directionalLightShadows.value=V.state.directionalShadow,He.spotLights.value=V.state.spot,He.spotLightShadows.value=V.state.spotShadow,He.rectAreaLights.value=V.state.rectArea,He.ltc_1.value=V.state.rectAreaLTC1,He.ltc_2.value=V.state.rectAreaLTC2,He.pointLights.value=V.state.point,He.pointLightShadows.value=V.state.pointShadow,He.hemisphereLights.value=V.state.hemi,He.directionalShadowMap.value=V.state.directionalShadowMap,He.directionalShadowMatrix.value=V.state.directionalShadowMatrix,He.spotShadowMap.value=V.state.spotShadowMap,He.spotLightMatrix.value=V.state.spotLightMatrix,He.spotLightMap.value=V.state.spotLightMap,He.pointShadowMap.value=V.state.pointShadowMap,He.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=Be,j.uniformsList=null,Be}function Br(C){if(C.uniformsList===null){const z=C.currentProgram.getUniforms();C.uniformsList=ea.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function zr(C,z){const X=We.get(C);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function xs(C,z,X,j,V){z.isScene!==!0&&(z=xe),E.resetTextureUnits();const me=z.fog,we=j.isMeshStandardMaterial?z.environment:null,De=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Jn,Ue=(j.isMeshStandardMaterial?U:S).get(j.envMap||we),Xe=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),He=!!X.morphAttributes.position,ut=!!X.morphAttributes.normal,ge=!!X.morphAttributes.color;let et=di;j.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(et=x.toneMapping);const Tt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ke=Tt!==void 0?Tt.length:0,qe=We.get(j),qi=m.state.lights;if(K===!0&&(ae===!0||C!==y)){const pn=C===y&&j.id===L;Se.setState(j,C,pn)}let ht=!1;j.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==qi.state.version||qe.outputColorSpace!==De||V.isBatchedMesh&&qe.batching===!1||!V.isBatchedMesh&&qe.batching===!0||V.isInstancedMesh&&qe.instancing===!1||!V.isInstancedMesh&&qe.instancing===!0||V.isSkinnedMesh&&qe.skinning===!1||!V.isSkinnedMesh&&qe.skinning===!0||V.isInstancedMesh&&qe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&qe.instancingColor===!1&&V.instanceColor!==null||qe.envMap!==Ue||j.fog===!0&&qe.fog!==me||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Se.numPlanes||qe.numIntersection!==Se.numIntersection)||qe.vertexAlphas!==Xe||qe.vertexTangents!==Be||qe.morphTargets!==He||qe.morphNormals!==ut||qe.morphColors!==ge||qe.toneMapping!==et||Oe.isWebGL2===!0&&qe.morphTargetsCount!==Ke)&&(ht=!0):(ht=!0,qe.__version=j.version);let Ln=qe.currentProgram;ht===!0&&(Ln=Mi(j,z,V));let Ll=!1,kr=!1,Pa=!1;const Nt=Ln.getUniforms(),Si=qe.uniforms;if(Me.useProgram(Ln.program)&&(Ll=!0,kr=!0,Pa=!0),j.id!==L&&(L=j.id,kr=!0),Ll||y!==C){Nt.setValue(H,"projectionMatrix",C.projectionMatrix),Nt.setValue(H,"viewMatrix",C.matrixWorldInverse);const pn=Nt.map.cameraPosition;pn!==void 0&&pn.setValue(H,Re.setFromMatrixPosition(C.matrixWorld)),Oe.logarithmicDepthBuffer&&Nt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Nt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,kr=!0,Pa=!0)}if(V.isSkinnedMesh){Nt.setOptional(H,V,"bindMatrix"),Nt.setOptional(H,V,"bindMatrixInverse");const pn=V.skeleton;pn&&(Oe.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),Nt.setValue(H,"boneTexture",pn.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Nt.setOptional(H,V,"batchingTexture"),Nt.setValue(H,"batchingTexture",V._matricesTexture,E));const La=X.morphAttributes;if((La.position!==void 0||La.normal!==void 0||La.color!==void 0&&Oe.isWebGL2===!0)&&Ne.update(V,X,Ln),(kr||qe.receiveShadow!==V.receiveShadow)&&(qe.receiveShadow=V.receiveShadow,Nt.setValue(H,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Si.envMap.value=Ue,Si.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),kr&&(Nt.setValue(H,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&vs(Si,Pa),me&&j.fog===!0&&le.refreshFogUniforms(Si,me),le.refreshMaterialUniforms(Si,j,k,F,Ee),ea.upload(H,Br(qe),Si,E)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ea.upload(H,Br(qe),Si,E),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Nt.setValue(H,"center",V.center),Nt.setValue(H,"modelViewMatrix",V.modelViewMatrix),Nt.setValue(H,"normalMatrix",V.normalMatrix),Nt.setValue(H,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const pn=j.uniformsGroups;for(let Ia=0,Ed=pn.length;Ia<Ed;Ia++)if(Oe.isWebGL2){const Il=pn[Ia];re.update(Il,Ln),re.bind(Il,Ln)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ln}function vs(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function ys(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,z,X){We.get(C.texture).__webglTexture=z,We.get(C.depthTexture).__webglTexture=X;const j=We.get(C);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,z){const X=We.get(C);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(C,z=0,X=0){T=C,w=z,b=X;let j=!0,V=null,me=!1,we=!1;if(C){const Ue=We.get(C);Ue.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(H.FRAMEBUFFER,null),j=!1):Ue.__webglFramebuffer===void 0?E.setupRenderTarget(C):Ue.__hasExternalTextures&&E.rebindTextures(C,We.get(C.texture).__webglTexture,We.get(C.depthTexture).__webglTexture);const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(we=!0);const Be=We.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Be[z])?V=Be[z][X]:V=Be[z],me=!0):Oe.isWebGL2&&C.samples>0&&E.useMultisampledRTT(C)===!1?V=We.get(C).__webglMultisampledFramebuffer:Array.isArray(Be)?V=Be[X]:V=Be,A.copy(C.viewport),O.copy(C.scissor),G=C.scissorTest}else A.copy(Z).multiplyScalar(k).floor(),O.copy(te).multiplyScalar(k).floor(),G=Q;if(Me.bindFramebuffer(H.FRAMEBUFFER,V)&&Oe.drawBuffers&&j&&Me.drawBuffers(C,V),Me.viewport(A),Me.scissor(O),Me.setScissorTest(G),me){const Ue=We.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ue.__webglTexture,X)}else if(we){const Ue=We.get(C.texture),Xe=z||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ue.__webglTexture,X||0,Xe)}L=-1},this.readRenderTargetPixels=function(C,z,X,j,V,me,we){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=We.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){Me.bindFramebuffer(H.FRAMEBUFFER,De);try{const Ue=C.texture,Xe=Ue.format,Be=Ue.type;if(Xe!==Rn&&de.convert(Xe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===Zn&&(oe.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Be!==fi&&de.convert(Be)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===li&&(Oe.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-j&&X>=0&&X<=C.height-V&&H.readPixels(z,X,j,V,de.convert(Xe),de.convert(Be),me)}finally{const Ue=T!==null?We.get(T).__webglFramebuffer:null;Me.bindFramebuffer(H.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(C,z,X=0){const j=Math.pow(2,-X),V=Math.floor(z.image.width*j),me=Math.floor(z.image.height*j);E.setTexture2D(z,0),H.copyTexSubImage2D(H.TEXTURE_2D,X,0,0,C.x,C.y,V,me),Me.unbindTexture()},this.copyTextureToTexture=function(C,z,X,j=0){const V=z.image.width,me=z.image.height,we=de.convert(X.format),De=de.convert(X.type);E.setTexture2D(X,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment),z.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,j,C.x,C.y,V,me,we,De,z.image.data):z.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,j,C.x,C.y,z.mipmaps[0].width,z.mipmaps[0].height,we,z.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,j,C.x,C.y,we,De,z.image),j===0&&X.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(C,z,X,j,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=C.max.x-C.min.x+1,we=C.max.y-C.min.y+1,De=C.max.z-C.min.z+1,Ue=de.convert(j.format),Xe=de.convert(j.type);let Be;if(j.isData3DTexture)E.setTexture3D(j,0),Be=H.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)E.setTexture2DArray(j,0),Be=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const He=H.getParameter(H.UNPACK_ROW_LENGTH),ut=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ge=H.getParameter(H.UNPACK_SKIP_PIXELS),et=H.getParameter(H.UNPACK_SKIP_ROWS),Tt=H.getParameter(H.UNPACK_SKIP_IMAGES),Ke=X.isCompressedTexture?X.mipmaps[V]:X.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Ke.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ke.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,C.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,C.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,C.min.z),X.isDataTexture||X.isData3DTexture?H.texSubImage3D(Be,V,z.x,z.y,z.z,me,we,De,Ue,Xe,Ke.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Be,V,z.x,z.y,z.z,me,we,De,Ue,Ke.data)):H.texSubImage3D(Be,V,z.x,z.y,z.z,me,we,De,Ue,Xe,Ke),H.pixelStorei(H.UNPACK_ROW_LENGTH,He),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ut),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ge),H.pixelStorei(H.UNPACK_SKIP_ROWS,et),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Tt),V===0&&j.generateMipmaps&&H.generateMipmap(Be),Me.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),Me.unbindTexture()},this.resetState=function(){w=0,b=0,T=null,Me.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===tl?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===Sa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?Fi:nu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Fi?It:Jn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class A0 extends Su{}A0.prototype.isWebGL1Renderer=!0;class al{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new al(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class C0 extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class jr extends Wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zc=new I,Jc=new I,Qc=new xt,co=new gs,Vs=new ms;class R0 extends Rt{constructor(e=new yt,t=new jr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Zc.fromBufferAttribute(t,i-1),Jc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Zc.distanceTo(Jc);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(i),Vs.radius+=r,e.ray.intersectsSphere(Vs)===!1)return;Qc.copy(i).invert(),co.copy(e.ray).applyMatrix4(Qc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,h=new I,d=new I,u=new I,f=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const p=Math.max(0,a.start),v=Math.min(_.count,a.start+a.count);for(let x=p,M=v-1;x<M;x+=f){const w=_.getX(x),b=_.getX(x+1);if(c.fromBufferAttribute(m,w),h.fromBufferAttribute(m,b),co.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(u);L<e.near||L>e.far||t.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let x=p,M=v-1;x<M;x+=f){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),co.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(u);b<e.near||b>e.far||t.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const eh=new I,th=new I;class Ws extends R0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)eh.fromBufferAttribute(t,i),th.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+eh.distanceTo(th);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ol extends Wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nh=new xt,No=new gs,Xs=new ms,qs=new I;class Eu extends Rt{constructor(e=new yt,t=new ol){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(i),Xs.radius+=r,e.ray.intersectsSphere(Xs)===!1)return;nh.copy(i).invert(),No.copy(e.ray).applyMatrix4(nh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=u,g=f;_<g;_++){const m=c.getX(_);qs.fromBufferAttribute(d,m),ih(qs,m,l,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let _=u,g=f;_<g;_++)qs.fromBufferAttribute(d,_),ih(qs,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ih(s,e,t,n,i,r,a){const o=No.distanceSqToPoint(s);if(o<t){const l=new I;No.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class da extends $t{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wa extends yt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new I,M=new I,w=new I;for(let b=0;b<t.length;b+=3)f(t[b+0],x),f(t[b+1],M),f(t[b+2],w),l(x,M,w,v)}function l(v,x,M,w){const b=w+1,T=[];for(let L=0;L<=b;L++){T[L]=[];const y=v.clone().lerp(M,L/b),A=x.clone().lerp(M,L/b),O=b-L;for(let G=0;G<=O;G++)G===0&&L===b?T[L][G]=y:T[L][G]=y.clone().lerp(A,G/O)}for(let L=0;L<b;L++)for(let y=0;y<2*(b-L)-1;y++){const A=Math.floor(y/2);y%2===0?(u(T[L][A+1]),u(T[L+1][A]),u(T[L][A])):(u(T[L][A+1]),u(T[L+1][A+1]),u(T[L+1][A]))}}function c(v){const x=new I;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(v),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){const v=new I;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const M=m(v)/2/Math.PI+.5,w=p(v)/Math.PI+.5;a.push(M,1-w)}_(),d()}function d(){for(let v=0;v<a.length;v+=6){const x=a[v+0],M=a[v+2],w=a[v+4],b=Math.max(x,M,w),T=Math.min(x,M,w);b>.9&&T<.1&&(x<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,x){const M=v*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function _(){const v=new I,x=new I,M=new I,w=new I,b=new be,T=new be,L=new be;for(let y=0,A=0;y<r.length;y+=9,A+=6){v.set(r[y+0],r[y+1],r[y+2]),x.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),b.set(a[A+0],a[A+1]),T.set(a[A+2],a[A+3]),L.set(a[A+4],a[A+5]),w.copy(v).add(x).add(M).divideScalar(3);const O=m(w);g(b,A+0,v,O),g(T,A+2,x,O),g(L,A+4,M,O)}}function g(v,x,M,w){w<0&&v.x===1&&(a[x]=v.x-1),M.x===0&&M.z===0&&(a[x]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.vertices,e.indices,e.radius,e.details)}}const Ys=new I,js=new I,ho=new I,$s=new an;class P0 extends yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Zr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:m,c:p}=$s;if(g.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),$s.getNormal(ho),d[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const x=(v+1)%3,M=d[v],w=d[x],b=$s[h[v]],T=$s[h[x]],L=`${M}_${w}`,y=`${w}_${M}`;y in u&&u[y]?(ho.dot(u[y].normal)<=r&&(f.push(b.x,b.y,b.z),f.push(T.x,T.y,T.z)),u[y]=null):L in u||(u[L]={index0:c[v],index1:c[x],normal:ho.clone()})}}for(const _ in u)if(u[_]){const{index0:g,index1:m}=u[_];Ys.fromBufferAttribute(o,g),js.fromBufferAttribute(o,m),f.push(Ys.x,Ys.y,Ys.z),f.push(js.x,js.y,js.z)}this.setAttribute("position",new st(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ll extends wa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ll(e.radius,e.detail)}}class fa extends yt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/i,f=new I,_=new be;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,h.push(_.x,_.y)}d+=u}for(let g=0;g<i;g++){const m=g*(n+1);for(let p=0;p<n;p++){const v=p+m,x=v,M=v+n+1,w=v+n+2,b=v+1;o.push(x,M,b),o.push(M,w,b)}}this.setIndex(o),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class cl extends yt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new I,u=new I,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let M=0;p===0&&a===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const b=w/t;d.x=-e*Math.cos(i+b*r)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(i+b*r)*Math.sin(a+x*o),_.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(b+M,1-x),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const x=h[p][v+1],M=h[p][v],w=h[p+1][v],b=h[p+1][v+1];(p!==0||a>0)&&f.push(x,M,b),(p!==n-1||l<Math.PI)&&f.push(M,w,b)}this.setIndex(f),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(g,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hl extends wa{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hl(e.radius,e.detail)}}class gr extends yt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new I,d=new I,u=new I;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const g=_/i*r,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(g),d.y=(e+t*Math.cos(m))*Math.sin(g),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const g=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,v=(i+1)*f+_;a.push(g,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class rh extends yt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new I,r=new I;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,f=d.count;for(let _=u,g=u+f;_<g;_+=3)for(let m=0;m<3;m++){const p=o.getX(_+m),v=o.getX(_+(m+1)%3);i.fromBufferAttribute(a,p),r.fromBufferAttribute(a,v),sh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),sh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new st(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function sh(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class L0 extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class I0 extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class D0 extends I0{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ul extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const uo=new xt,ah=new I,oh=new I;class Tu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ah.setFromMatrixPosition(e.matrixWorld),t.position.copy(ah),oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oh),t.updateMatrixWorld(),uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lh=new xt,qr=new I,fo=new I;class U0 extends Tu{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qr.setFromMatrixPosition(e.matrixWorld),n.position.copy(qr),fo.copy(n.position),fo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fo),n.updateMatrixWorld(),i.makeTranslation(-qr.x,-qr.y,-qr.z),lh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh)}}class Oo extends ul{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new U0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class N0 extends Tu{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class po extends ul{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new N0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class O0 extends ul{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ch(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ch();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ch(){return(typeof performance>"u"?Date:performance).now()}class F0{constructor(e,t,n=0,i=1/0){this.ray=new gs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new nl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Fo(e,this,n,t),n.sort(hh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Fo(e[i],this,n,t);return n.sort(hh),n}}function hh(s,e){return s.distance-e.distance}function Fo(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Fo(i[r],e,t,!0)}}class uh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const dh=new I,Ks=new I;class B0{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){dh.subVectors(e,this.start),Ks.subVectors(this.end,this.start);const n=Ks.dot(Ks);let r=Ks.dot(dh)/n;return t&&(r=Dt(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jo);const fh={type:"change"},mo={type:"start"},ph={type:"end"},Zs=new gs,mh=new Yn,z0=Math.cos(70*Sf.DEG2RAD);class k0 extends Vi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yi.ROTATE,MIDDLE:Yi.DOLLY,RIGHT:Yi.PAN},this.touches={ONE:ji.ROTATE,TWO:ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",_e),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_e),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(fh),n.update(),r=i.NONE},this.update=function(){const P=new I,re=new Hi().setFromUnitVectors(e.up,new I(0,1,0)),ve=re.clone().invert(),fe=new I,se=new Hi,D=new I,ie=2*Math.PI;return function(Le=null){const Ae=n.object.position;P.copy(Ae).sub(n.target),P.applyQuaternion(re),o.setFromVector3(P),n.autoRotate&&r===i.NONE&&G(A(Le)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ke=n.minAzimuthAngle,Ge=n.maxAzimuthAngle;isFinite(ke)&&isFinite(Ge)&&(ke<-Math.PI?ke+=ie:ke>Math.PI&&(ke-=ie),Ge<-Math.PI?Ge+=ie:Ge>Math.PI&&(Ge-=ie),ke<=Ge?o.theta=Math.max(ke,Math.min(Ge,o.theta)):o.theta=o.theta>(ke+Ge)/2?Math.max(ke,o.theta):Math.min(Ge,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&b||n.object.isOrthographicCamera?o.radius=Z(o.radius):o.radius=Z(o.radius*c),P.setFromSpherical(o),P.applyQuaternion(ve),Ae.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Qe=!1;if(n.zoomToCursor&&b){let nt=null;if(n.object.isPerspectiveCamera){const je=P.length();nt=Z(je*c);const lt=je-nt;n.object.position.addScaledVector(M,lt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const je=new I(w.x,w.y,0);je.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Qe=!0;const lt=new I(w.x,w.y,0);lt.unproject(n.object),n.object.position.sub(lt).add(je),n.object.updateMatrixWorld(),nt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;nt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(nt).add(n.object.position):(Zs.origin.copy(n.object.position),Zs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Zs.direction))<z0?e.lookAt(n.target):(mh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Zs.intersectPlane(mh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Qe=!0);return c=1,b=!1,Qe||fe.distanceToSquared(n.object.position)>a||8*(1-se.dot(n.object.quaternion))>a||D.distanceToSquared(n.target)>0?(n.dispatchEvent(fh),fe.copy(n.object.position),se.copy(n.object.quaternion),D.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Fe),n.domElement.removeEventListener("pointerdown",E),n.domElement.removeEventListener("pointercancel",U),n.domElement.removeEventListener("wheel",ne),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",U),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_e),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new uh,l=new uh;let c=1;const h=new I,d=new be,u=new be,f=new be,_=new be,g=new be,m=new be,p=new be,v=new be,x=new be,M=new I,w=new be;let b=!1;const T=[],L={};let y=!1;function A(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function O(P){const re=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*re)}function G(P){l.theta-=P}function $(P){l.phi-=P}const R=function(){const P=new I;return function(ve,fe){P.setFromMatrixColumn(fe,0),P.multiplyScalar(-ve),h.add(P)}}(),N=function(){const P=new I;return function(ve,fe){n.screenSpacePanning===!0?P.setFromMatrixColumn(fe,1):(P.setFromMatrixColumn(fe,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(ve),h.add(P)}}(),F=function(){const P=new I;return function(ve,fe){const se=n.domElement;if(n.object.isPerspectiveCamera){const D=n.object.position;P.copy(D).sub(n.target);let ie=P.length();ie*=Math.tan(n.object.fov/2*Math.PI/180),R(2*ve*ie/se.clientHeight,n.object.matrix),N(2*fe*ie/se.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(R(ve*(n.object.right-n.object.left)/n.object.zoom/se.clientWidth,n.object.matrix),N(fe*(n.object.top-n.object.bottom)/n.object.zoom/se.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(P,re){if(!n.zoomToCursor)return;b=!0;const ve=n.domElement.getBoundingClientRect(),fe=P-ve.left,se=re-ve.top,D=ve.width,ie=ve.height;w.x=fe/D*2-1,w.y=-(se/ie)*2+1,M.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function Z(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function te(P){d.set(P.clientX,P.clientY)}function Q(P){B(P.clientX,P.clientX),p.set(P.clientX,P.clientY)}function W(P){_.set(P.clientX,P.clientY)}function K(P){u.set(P.clientX,P.clientY),f.subVectors(u,d).multiplyScalar(n.rotateSpeed);const re=n.domElement;G(2*Math.PI*f.x/re.clientHeight),$(2*Math.PI*f.y/re.clientHeight),d.copy(u),n.update()}function ae(P){v.set(P.clientX,P.clientY),x.subVectors(v,p),x.y>0?k(O(x.y)):x.y<0&&q(O(x.y)),p.copy(v),n.update()}function Ee(P){g.set(P.clientX,P.clientY),m.subVectors(g,_).multiplyScalar(n.panSpeed),F(m.x,m.y),_.copy(g),n.update()}function ye(P){B(P.clientX,P.clientY),P.deltaY<0?q(O(P.deltaY)):P.deltaY>0&&k(O(P.deltaY)),n.update()}function Ie(P){let re=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),re=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),re=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),re=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),re=!0;break}re&&(P.preventDefault(),n.update())}function Re(P){if(T.length===1)d.set(P.pageX,P.pageY);else{const re=de(P),ve=.5*(P.pageX+re.x),fe=.5*(P.pageY+re.y);d.set(ve,fe)}}function xe(P){if(T.length===1)_.set(P.pageX,P.pageY);else{const re=de(P),ve=.5*(P.pageX+re.x),fe=.5*(P.pageY+re.y);_.set(ve,fe)}}function ze(P){const re=de(P),ve=P.pageX-re.x,fe=P.pageY-re.y,se=Math.sqrt(ve*ve+fe*fe);p.set(0,se)}function H(P){n.enableZoom&&ze(P),n.enablePan&&xe(P)}function At(P){n.enableZoom&&ze(P),n.enableRotate&&Re(P)}function oe(P){if(T.length==1)u.set(P.pageX,P.pageY);else{const ve=de(P),fe=.5*(P.pageX+ve.x),se=.5*(P.pageY+ve.y);u.set(fe,se)}f.subVectors(u,d).multiplyScalar(n.rotateSpeed);const re=n.domElement;G(2*Math.PI*f.x/re.clientHeight),$(2*Math.PI*f.y/re.clientHeight),d.copy(u)}function Oe(P){if(T.length===1)g.set(P.pageX,P.pageY);else{const re=de(P),ve=.5*(P.pageX+re.x),fe=.5*(P.pageY+re.y);g.set(ve,fe)}m.subVectors(g,_).multiplyScalar(n.panSpeed),F(m.x,m.y),_.copy(g)}function Me(P){const re=de(P),ve=P.pageX-re.x,fe=P.pageY-re.y,se=Math.sqrt(ve*ve+fe*fe);v.set(0,se),x.set(0,Math.pow(v.y/p.y,n.zoomSpeed)),k(x.y),p.copy(v);const D=(P.pageX+re.x)*.5,ie=(P.pageY+re.y)*.5;B(D,ie)}function it(P){n.enableZoom&&Me(P),n.enablePan&&Oe(P)}function We(P){n.enableZoom&&Me(P),n.enableRotate&&oe(P)}function E(P){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",U)),Ne(P),P.pointerType==="touch"?Se(P):Y(P))}function S(P){n.enabled!==!1&&(P.pointerType==="touch"?ee(P):J(P))}function U(P){Pe(P),T.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",U)),n.dispatchEvent(ph),r=i.NONE}function Y(P){let re;switch(P.button){case 0:re=n.mouseButtons.LEFT;break;case 1:re=n.mouseButtons.MIDDLE;break;case 2:re=n.mouseButtons.RIGHT;break;default:re=-1}switch(re){case Yi.DOLLY:if(n.enableZoom===!1)return;Q(P),r=i.DOLLY;break;case Yi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;W(P),r=i.PAN}else{if(n.enableRotate===!1)return;te(P),r=i.ROTATE}break;case Yi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;te(P),r=i.ROTATE}else{if(n.enablePan===!1)return;W(P),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(mo)}function J(P){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;K(P);break;case i.DOLLY:if(n.enableZoom===!1)return;ae(P);break;case i.PAN:if(n.enablePan===!1)return;Ee(P);break}}function ne(P){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(P.preventDefault(),n.dispatchEvent(mo),ye(pe(P)),n.dispatchEvent(ph))}function pe(P){const re=P.deltaMode,ve={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(re){case 1:ve.deltaY*=16;break;case 2:ve.deltaY*=100;break}return P.ctrlKey&&!y&&(ve.deltaY*=10),ve}function le(P){P.key==="Control"&&(y=!0,document.addEventListener("keyup",ue,{passive:!0,capture:!0}))}function ue(P){P.key==="Control"&&(y=!1,document.removeEventListener("keyup",ue,{passive:!0,capture:!0}))}function _e(P){n.enabled===!1||n.enablePan===!1||Ie(P)}function Se(P){switch(Te(P),T.length){case 1:switch(n.touches.ONE){case ji.ROTATE:if(n.enableRotate===!1)return;Re(P),r=i.TOUCH_ROTATE;break;case ji.PAN:if(n.enablePan===!1)return;xe(P),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ji.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;H(P),r=i.TOUCH_DOLLY_PAN;break;case ji.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;At(P),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(mo)}function ee(P){switch(Te(P),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;oe(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Oe(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;it(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;We(P),n.update();break;default:r=i.NONE}}function Fe(P){n.enabled!==!1&&P.preventDefault()}function Ne(P){T.push(P.pointerId)}function Pe(P){delete L[P.pointerId];for(let re=0;re<T.length;re++)if(T[re]==P.pointerId){T.splice(re,1);return}}function Te(P){let re=L[P.pointerId];re===void 0&&(re=new be,L[P.pointerId]=re),re.set(P.pageX,P.pageY)}function de(P){const re=P.pointerId===T[0]?T[1]:T[0];return L[re]}n.domElement.addEventListener("contextmenu",Fe),n.domElement.addEventListener("pointerdown",E),n.domElement.addEventListener("pointercancel",U),n.domElement.addEventListener("wheel",ne,{passive:!1}),document.addEventListener("keydown",le,{passive:!0,capture:!0}),this.update()}}const wu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Or{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const G0=new rl(-1,1,1,-1,0,1);class H0 extends yt{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}}const V0=new H0;class dl{constructor(e){this._mesh=new St(V0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,G0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class W0 extends Or{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=rs.clone(e.uniforms),this.material=new Yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new dl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class gh extends Or{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class X0 extends Or{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class q0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new be);this._width=n.width,this._height=n.height,t=new Pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new W0(wu),this.copyPass.material.blending=Kn,this.clock=new bu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}gh!==void 0&&(a instanceof gh?n=!0:a instanceof X0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Y0 extends Or{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ce}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const j0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Cr extends Or{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new be(e.x,e.y):new be(256,256),this.clearColor=new Ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Pn(r,a,{type:Zn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new Pn(r,a,{type:Zn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new Pn(r,a,{type:Zn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=j0;this.highPassUniforms=rs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Yt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new be(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=wu;this.copyUniforms=rs.clone(h.uniforms),this.blendMaterial=new Yt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Bt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ce,this.oldClearAlpha=1,this.basic=new An,this.fsQuad=new dl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new be(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Cr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Cr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new be(.5,.5)},direction:{value:new be(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}Cr.BlurDirectionX=new be(1,0);Cr.BlurDirectionY=new be(0,1);const $0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class K0 extends Or{constructor(){super();const e=$0;this.uniforms=rs.clone(e.uniforms),this.material=new L0({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new dl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function qn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Au(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var un={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ss={duration:.5,overwrite:!1,delay:0},fl,Ut,ft,yn=1e8,ot=1/yn,Bo=Math.PI*2,Z0=Bo/4,J0=0,Cu=Math.sqrt,Q0=Math.cos,ex=Math.sin,Pt=function(e){return typeof e=="string"},_t=function(e){return typeof e=="function"},Qn=function(e){return typeof e=="number"},pl=function(e){return typeof e>"u"},Fn=function(e){return typeof e=="object"},Zt=function(e){return e!==!1},ml=function(){return typeof window<"u"},Js=function(e){return _t(e)||Pt(e)},Ru=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kt=Array.isArray,tx=/random\([^)]+\)/g,nx=/,\s*/g,_h=/(?:-?\.?\d|\.)+/gi,Pu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_r=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,go=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Lu=/[+-]=-?[.\d]+/,ix=/[^,'"\[\]\s]+/gi,rx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,mt,In,zo,gl,dn={},pa={},Iu,Du=function(e){return(pa=Rr(e,dn))&&tn},_l=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},as=function(e,t){return!t&&console.warn(e)},Uu=function(e,t){return e&&(dn[e]=t)&&pa&&(pa[e]=t)||dn},os=function(){return 0},sx={suppressEvents:!0,isStart:!0,kill:!1},ta={suppressEvents:!0,kill:!1},ax={suppressEvents:!0},xl={},pi=[],ko={},Nu,sn={},_o={},xh=30,na=[],vl="",yl=function(e){var t=e[0],n,i;if(Fn(t)||_t(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=na.length;i--&&!na[i].targetTest(t););n=na[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new id(e[i],n)))||e.splice(i,1);return e},Bi=function(e){return e._gsap||yl(Mn(e))[0]._gsap},Ou=function(e,t,n){return(n=e[t])&&_t(n)?e[t]():pl(n)&&e.getAttribute&&e.getAttribute(t)||n},Jt=function(e,t){return(e=e.split(",")).forEach(t)||e},vt=function(e){return Math.round(e*1e5)/1e5||0},pt=function(e){return Math.round(e*1e7)/1e7||0},Mr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},ox=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ma=function(){var e=pi.length,t=pi.slice(0),n,i;for(ko={},pi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ml=function(e){return!!(e._initted||e._startAt||e.add)},Fu=function(e,t,n,i){pi.length&&!Ut&&ma(),e.render(t,n,!!(Ut&&t<0&&Ml(e))),pi.length&&!Ut&&ma()},Bu=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ix).length<2?t:Pt(e)?e.trim():e},zu=function(e){return e},fn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},lx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Rr=function(e,t){for(var n in t)e[n]=t[n];return e},vh=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Fn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},ga=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Qr=function(e){var t=e.parent||mt,n=e.keyframes?lx(kt(e.keyframes)):fn;if(Zt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},cx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ku=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Aa=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},_i=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},zi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},hx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Go=function(e,t,n,i){return e._startAt&&(Ut?e._startAt.revert(ta):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},ux=function s(e){return!e||e._ts&&s(e.parent)},yh=function(e){return e._repeat?Pr(e._tTime,e=e.duration()+e._rDelay)*e:0},Pr=function(e,t){var n=Math.floor(e=pt(e/t));return e&&n===e?n-1:n},_a=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ca=function(e){return e._end=pt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ot)||0))},Ra=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=pt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ca(e),n._dirty||zi(n,e)),e},Gu=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=_a(e.rawTime(),t),(!t._dur||_s(0,t.totalDuration(),n)-t._tTime>ot)&&t.render(n,!0)),zi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ot}},Nn=function(e,t,n,i){return t.parent&&_i(t),t._start=pt((Qn(n)?n:n||e!==mt?gn(e,n,t):e._time)+t._delay),t._end=pt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ku(e,t,"_first","_last",e._sort?"_start":0),Ho(t)||(e._recent=t),i||Gu(e,t),e._ts<0&&Ra(e,e._tTime),e},Hu=function(e,t){return(dn.ScrollTrigger||_l("scrollTrigger",t))&&dn.ScrollTrigger.create(t,e)},Vu=function(e,t,n,i,r){if(El(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Ut&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Nu!==ln.frame)return pi.push(e),e._lazy=[r,i],1},dx=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Ho=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},fx=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&dx(e)&&!(!e._initted&&Ho(e))||(e._ts<0||e._dp._ts<0)&&!Ho(e))?0:1,o=e._rDelay,l=0,c,h,d;if(o&&e._repeat&&(l=_s(0,e._tDur,t),h=Pr(l,o),e._yoyo&&h&1&&(a=1-a),h!==Pr(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Ut||i||e._zTime===ot||!t&&e._zTime){if(!e._initted&&Vu(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?ot:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Go(e,t,n,!0),e._onUpdate&&!n&&cn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&cn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&_i(e,1),!n&&!Ut&&(cn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},px=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Lr=function(e,t,n,i){var r=e._repeat,a=pt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:pt(a*(r+1)+e._rDelay*r):a,o>0&&!i&&Ra(e,e._tTime=e._tDur*o),e.parent&&Ca(e),n||zi(e.parent,e),e},Mh=function(e){return e instanceof qt?zi(e):Lr(e,e._dur)},mx={_start:0,endTime:os,totalDuration:os},gn=function s(e,t,n){var i=e.labels,r=e._recent||mx,a=e.duration()>=yn?r.endTime(!1):e._dur,o,l,c;return Pt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(kt(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},es=function(e,t,n){var i=Qn(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Zt(l.vars.inherit)&&l.parent;a.immediateRender=Zt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Et(t[0],a,t[r+1])},yi=function(e,t){return e||e===0?t(e):t},_s=function(e,t,n){return n<e?e:n>t?t:n},zt=function(e,t){return!Pt(e)||!(t=rx.exec(e))?"":t[1]},gx=function(e,t,n){return yi(n,function(i){return _s(e,t,i)})},Vo=[].slice,Wu=function(e,t){return e&&Fn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Fn(e[0]))&&!e.nodeType&&e!==In},_x=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Pt(i)&&!t||Wu(i,1)?(r=n).push.apply(r,Mn(i)):n.push(i)})||n},Mn=function(e,t,n){return ft&&!t&&ft.selector?ft.selector(e):Pt(e)&&!n&&(zo||!Ir())?Vo.call((t||gl).querySelectorAll(e),0):kt(e)?_x(e,n):Wu(e)?Vo.call(e,0):e?[e]:[]},Wo=function(e){return e=Mn(e)[0]||as("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Mn(t,n.querySelectorAll?n:n===e?as("Invalid scope")||gl.createElement("div"):e)}},Xu=function(e){return e.sort(function(){return .5-Math.random()})},qu=function(e){if(_t(e))return e;var t=Fn(e)?e:{each:e},n=ki(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,d=i;return Pt(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(u,f,_){var g=(_||t).length,m=a[g],p,v,x,M,w,b,T,L,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,yn])[1],!y){for(T=-yn;T<(T=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=a[g]=[],p=l?Math.min(y,g)*h-.5:i%y,v=y===yn?0:l?g*d/y-.5:i/y|0,T=0,L=yn,b=0;b<g;b++)x=b%y-p,M=v-(b/y|0),m[b]=w=c?Math.abs(c==="y"?M:x):Cu(x*x+M*M),w>T&&(T=w),w<L&&(L=w);i==="random"&&Xu(m),m.max=T-L,m.min=L,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=zt(t.amount||t.each)||0,n=n&&g<0?Px(n):n}return g=(m[u]-m.min)/m.max||0,pt(m.b+(n?n(g):g)*m.v)+m.u}},Xo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=pt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Qn(n)?0:zt(n))}},Yu=function(e,t){var n=kt(e),i,r;return!n&&Fn(e)&&(i=n=e.radius||yn,e.values?(e=Mn(e.values),(r=!Qn(e[0]))&&(i*=i)):e=Xo(e.increment)),yi(t,n?_t(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=yn,h=0,d=e.length,u,f;d--;)r?(u=e[d].x-o,f=e[d].y-l,u=u*u+f*f):u=Math.abs(e[d]-o),u<c&&(c=u,h=d);return h=!i||c<=i?e[h]:a,r||h===a||Qn(a)?h:h+zt(a)}:Xo(e))},ju=function(e,t,n,i){return yi(kt(e)?!t:n===!0?!!(n=0):!i,function(){return kt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},xx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},vx=function(e,t){return function(n){return e(parseFloat(n))+(t||zt(n))}},yx=function(e,t,n){return Ku(e,t,0,1,n)},$u=function(e,t,n){return yi(n,function(i){return e[~~t(i)]})},Mx=function s(e,t,n){var i=t-e;return kt(e)?$u(e,s(0,e.length),t):yi(n,function(r){return(i+(r-e)%i)%i+e})},Sx=function s(e,t,n){var i=t-e,r=i*2;return kt(e)?$u(e,s(0,e.length-1),t):yi(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},ls=function(e){return e.replace(tx,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(nx);return ju(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Ku=function(e,t,n,i,r){var a=t-e,o=i-n;return yi(r,function(l){return n+((l-e)/a*o||0)})},Ex=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var a=Pt(e),o={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(kt(e)&&!kt(t)){for(h=[],d=e.length,u=d-2,c=1;c<d;c++)h.push(s(e[c-1],e[c]));d--,r=function(_){_*=d;var g=Math.min(u,~~_);return h[g](_-g)},n=t}else i||(e=Rr(kt(e)?[]:{},e));if(!h){for(l in t)Sl.call(o,e,l,"get",t[l]);r=function(_){return wl(_,o)||(a?e.p:e)}}}return yi(n,r)},Sh=function(e,t,n){var i=e.labels,r=yn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},cn=function(e,t,n){var i=e.vars,r=i[t],a=ft,o=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&pi.length&&ma(),o&&(ft=o),h=l?r.apply(c,l):r.call(c),ft=a,h},$r=function(e){return _i(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ut),e.progress()<1&&cn(e,"onInterrupt"),e},xr,Zu=[],Ju=function(e){if(e)if(e=!e.name&&e.default||e,ml()||e.headless){var t=e.name,n=_t(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:os,render:wl,add:Sl,kill:kx,modifier:zx,rawVars:0},a={targetTest:0,get:0,getSetter:bl,aliases:{},register:0};if(Ir(),e!==i){if(sn[t])return;fn(i,fn(ga(e,r),a)),Rr(i.prototype,Rr(r,ga(e,a))),sn[i.prop=t]=i,e.targetTest&&(na.push(i),xl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Uu(t,i),e.register&&e.register(tn,i,Qt)}else Zu.push(e)},at=255,Kr={aqua:[0,at,at],lime:[0,at,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,at],navy:[0,0,128],white:[at,at,at],olive:[128,128,0],yellow:[at,at,0],orange:[at,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[at,0,0],pink:[at,192,203],cyan:[0,at,at],transparent:[at,at,at,0]},xo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*at+.5|0},Qu=function(e,t,n){var i=e?Qn(e)?[e>>16,e>>8&at,e&at]:0:Kr.black,r,a,o,l,c,h,d,u,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Kr[e])i=Kr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&at,i&at,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&at,e&at]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(_h),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=xo(l+1/3,r,a),i[1]=xo(l,r,a),i[2]=xo(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Pu),n&&i.length<4&&(i[3]=1),i}else i=e.match(_h)||Kr.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/at,a=i[1]/at,o=i[2]/at,d=Math.max(r,a,o),u=Math.min(r,a,o),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(a-o)/f+(a<o?6:0):d===a?(o-r)/f+2:(r-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},ed=function(e){var t=[],n=[],i=-1;return e.split(mi).forEach(function(r){var a=r.match(_r)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Eh=function(e,t,n){var i="",r=(e+i).match(mi),a=t?"hsla(":"rgba(",o=0,l,c,h,d;if(!r)return e;if(r=r.map(function(u){return(u=Qu(u,t,1))&&a+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=ed(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(mi,"1").split(_r),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(mi),d=c.length-1;o<d;o++)i+=c[o]+r[o];return i+c[d]},mi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Kr)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Tx=/hsl[a]?\(/,td=function(e){var t=e.join(" "),n;if(mi.lastIndex=0,mi.test(t))return n=Tx.test(t),e[1]=Eh(e[1],n),e[0]=Eh(e[0],n,ed(e[1])),!0},cs,ln=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,d,u,f,_=function g(m){var p=s()-i,v=m===!0,x,M,w,b;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,x=w-a,(x>0||v)&&(b=++d.frame,u=w-d.time*1e3,d.time=w=w/1e3,a+=x+(x>=r?4:r-x),M=1),v||(l=c(g)),M)for(f=0;f<o.length;f++)o[f](w,u,b,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Iu&&(!zo&&ml()&&(In=zo=window,gl=In.document||{},dn.gsap=tn,(In.gsapVersions||(In.gsapVersions=[])).push(tn.version),Du(pa||In.GreenSockGlobals||!In.gsap&&In||{}),Zu.forEach(Ju)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,a-d.time*1e3+1|0)},cs=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),cs=0,c=os},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),a=d.time*1e3+r},add:function(m,p,v){var x=p?function(M,w,b,T){m(M,w,b,T),d.remove(x)}:m;return d.remove(m),o[v?"unshift":"push"](x),Ir(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},d}(),Ir=function(){return!cs&&ln.wake()},Ze={},bx=/^[\d.\-M][\d.\-,\s]/,wx=/["']/g,Ax=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(wx,"").trim():+c,i=l.substr(o+1).trim();return t},Cx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Rx=function(e){var t=(e+"").split("("),n=Ze[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ax(t[1])]:Cx(e).split(",").map(Bu)):Ze._CE&&bx.test(e)?Ze._CE("",e):n},Px=function(e){return function(t){return 1-e(1-t)}},ki=function(e,t){return e&&(_t(e)?e:Ze[e]||Rx(e))||t},Xi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Jt(e,function(o){Ze[o]=dn[o]=r,Ze[a=o.toLowerCase()]=n;for(var l in r)Ze[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ze[o+"."+l]=r[l]}),r},nd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},vo=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Bo*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*ex((h-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:nd(o);return r=Bo/r,l.config=function(c,h){return s(e,c,h)},l},yo=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:nd(n);return i.config=function(r){return s(e,r)},i};Jt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Xi(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ze.Linear.easeNone=Ze.none=Ze.Linear.easeIn;Xi("Elastic",vo("in"),vo("out"),vo());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Xi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Xi("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Xi("Circ",function(s){return-(Cu(1-s*s)-1)});Xi("Sine",function(s){return s===1?1:-Q0(s*Z0)+1});Xi("Back",yo("in"),yo("out"),yo());Ze.SteppedEase=Ze.steps=dn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-ot;return function(o){return((i*_s(0,a,o)|0)+r)*n}}};ss.ease=Ze["quad.out"];Jt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return vl+=s+","+s+"Params,"});var id=function(e,t){this.id=J0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ou,this.set=t?t.getSetter:bl},hs=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Lr(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),cs||ln.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Lr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ir(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ra(this,n),!r._dp||r.parent||Gu(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Nn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ot||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Fu(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+yh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+yh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Pr(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ot?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?_a(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ot?0:this._rts,this.totalTime(_s(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Ca(this),hx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ir(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ot&&(this._tTime-=ot)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=pt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Nn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Zt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_a(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ax);var i=Ut;return Ut=n,Ml(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ut=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Mh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Mh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(gn(this,n),Zt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Zt(i)),this._dur||(this._zTime=-ot),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ot,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ot)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=_t(n)?n:zu,l=function(){var h=i.then;i.then=null,r&&r(),_t(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){$r(this)},s}();fn(hs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ot,_prom:0,_ps:!1,_rts:1});var qt=function(s){Au(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Zt(n.sortChildren),mt&&Nn(n.parent||mt,qn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Hu(qn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return es(0,arguments,this),this},t.from=function(i,r,a){return es(1,arguments,this),this},t.fromTo=function(i,r,a,o){return es(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Qr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Et(i,r,gn(this,a),1),this},t.call=function(i,r,a){return Nn(this,Et.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Et(i,a,gn(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,Qr(a).immediateRender=Zt(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},t.staggerFromTo=function(i,r,a,o,l,c,h,d){return o.startAt=a,Qr(o).immediateRender=Zt(o.immediateRender),this.staggerTo(i,r,o,l,c,h,d)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:pt(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,_,g,m,p,v,x,M,w,b,T;if(this!==mt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,M=this._start,x=this._ts,p=!x,d&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(u=pt(h%m),h===l?(g=this._repeat,u=c):(w=pt(h/m),g=~~w,g&&g===w&&(u=c,g--),u>c&&(u=c)),w=Pr(this._tTime,m),!o&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),b&&g&1&&(u=c-u,T=1),g!==w&&!this._lock){var L=b&&w&1,y=L===(b&&g&1);if(g<w&&(L=!L),o=L?0:h%c?c:h,this._lock=1,this.render(o||(T?0:pt(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&cn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,w=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=L?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=px(this,pt(o),pt(u)),v&&(h-=u-(u=v._start))),this._tTime=h,this._time=u,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!r&&!w&&(cn(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||u>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,a),u!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=-ot);break}}f=_}else{f=this._last;for(var A=i<0?i:u;f;){if(_=f._prev,(f._act||A<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,r,a||Ut&&Ml(f)),u!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=A?-ot:ot);break}}f=_}}if(v&&!r&&(this.pause(),v.render(u>=o?0:-ot)._zTime=u>=o?1:-1,this._ts))return this._start=M,Ca(this),this.render(i,r,a);this._onUpdate&&!r&&cn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&_i(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(cn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Qn(r)||(r=gn(this,r,i)),!(i instanceof hs)){if(kt(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Pt(i))return this.addLabel(i,r);if(_t(i))i=Et.delayedCall(0,i);else return this}return this!==i?Nn(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-yn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Et?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return Pt(i)?this.removeLabel(i):_t(i)?this.killTweensOf(i):(i.parent===this&&Aa(this,i),i===this._recent&&(this._recent=this._last),zi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pt(ln.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=gn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=Et.delayedCall(0,r||os,a);return o.data="isPause",this._hasPause=1,Nn(this,o,gn(this,i))},t.removePause=function(i){var r=this._first;for(i=gn(this,i);r;)r._start===i&&r.data==="isPause"&&_i(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ci!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=Mn(i),l=this._first,c=Qn(r),h;l;)l instanceof Et?ox(l._targets,o)&&(c?(!ci||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=gn(a,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,_=Et.to(a,fn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ot,onStart:function(){if(a.pause(),!f){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Lr(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,d||[])}},r));return u?_.render(0):_},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,fn({startAt:{time:gn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Sh(this,gn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Sh(this,gn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ot)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=pt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return zi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),zi(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=yn,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Nn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=pt(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Lr(a,a===mt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(mt._ts&&(Fu(mt,_a(i,mt)),Nu=ln.frame),ln.frame>=xh){xh+=un.autoSleep||120;var r=mt._first;if((!r||!r._ts)&&un.autoSleep&&ln._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ln.sleep()}}},e}(hs);fn(qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Lx=function(e,t,n,i,r,a,o){var l=new Qt(this._pt,e,t,0,1,cd,null,r),c=0,h=0,d,u,f,_,g,m,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ls(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),u=n.match(go)||[];d=go.exec(i);)_=d[0],g=i.substring(c,d.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Mr(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=go.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Lu.test(i)||p)&&(l.e=0),this._pt=l,l},Sl=function(e,t,n,i,r,a,o,l,c,h){_t(i)&&(i=i(r||0,e,a));var d=e[t],u=n!=="get"?n:_t(d)?c?e[t.indexOf("set")||!_t(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=_t(d)?c?Ox:od:Tl,_;if(Pt(i)&&(~i.indexOf("random(")&&(i=ls(i)),i.charAt(1)==="="&&(_=Mr(u,i)+(zt(u)||0),(_||_===0)&&(i=_))),!h||u!==i||qo)return!isNaN(u*i)&&i!==""?(_=new Qt(this._pt,e,t,+u||0,i-(u||0),typeof d=="boolean"?Bx:ld,0,f),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(t in e)&&_l(t,i),Lx.call(this,e,t,u,i,f,l||un.stringFilter,c))},Ix=function(e,t,n,i,r){if(_t(e)&&(e=ts(e,r,t,n,i)),!Fn(e)||e.style&&e.nodeType||kt(e)||Ru(e))return Pt(e)?ts(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=ts(e[o],r,t,n,i);return a},rd=function(e,t,n,i,r,a){var o,l,c,h;if(sn[e]&&(o=new sn[e]).init(r,o.rawVars?t[e]:Ix(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Qt(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==xr))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},ci,qo,El=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!fl,M=e.timeline,w=i.easeReverse||d,b,T,L,y,A,O,G,$,R,N,F,k,q;if(M&&(!u||!r)&&(r="none"),e._ease=ki(r,ss.ease),e._rEase=w&&(ki(w)||e._ease),e._from=!M&&!!i.runBackwards,e._from&&(e.ratio=1),!M||u&&!i.stagger){if($=m[0]?Bi(m[0]).harness:0,k=$&&i[$.prop],b=ga(i,xl),g&&(g._zTime<0&&g.progress(1),t<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?ta:sx),g._lazy=0),a){if(_i(e._startAt=Et.set(m,fn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Zt(l),startAt:null,delay:0,onUpdate:c&&function(){return cn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut||!o&&!f)&&e._startAt.revert(ta),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(o=!1),L=fn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Zt(l),immediateRender:o,stagger:0,parent:p},b),k&&(L[$.prop]=k),_i(e._startAt=Et.set(m,L)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut?e._startAt.revert(ta):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,ot,ot);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Zt(l)||l&&!_,T=0;T<m.length;T++){if(A=m[T],G=A._gsap||yl(m)[T]._gsap,e._ptLookup[T]=N={},ko[G.id]&&pi.length&&ma(),F=v===m?T:v.indexOf(A),$&&(R=new $).init(A,k||b,e,F,v)!==!1&&(e._pt=y=new Qt(e._pt,A,R.name,0,1,R.render,R,0,R.priority),R._props.forEach(function(B){N[B]=y}),R.priority&&(O=1)),!$||k)for(L in b)sn[L]&&(R=rd(L,b,e,F,A,v))?R.priority&&(O=1):N[L]=y=Sl.call(e,A,L,"get",b[L],F,v,0,i.stringFilter);e._op&&e._op[T]&&e.kill(A,e._op[T]),x&&e._pt&&(ci=e,mt.killTweensOf(A,N,e.globalTime(t)),q=!e.parent,ci=0),e._pt&&l&&(ko[G.id]=1)}O&&hd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,u&&t<=0&&M.render(yn,!0,!0)},Dx=function(e,t,n,i,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,u,f;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(h=u[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return qo=1,e.vars[t]="+=0",El(e,o),qo=0,l?as(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=vt(n)+zt(d.e)),d.b&&(d.b=h.s+zt(d.b))},Ux=function(e,t){var n=e[0]?Bi(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=Rr({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},Nx=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(kt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},ts=function(e,t,n,i,r){return _t(e)?e.call(t,n,i,r):Pt(e)&&~e.indexOf("random(")?ls(e):e},sd=vl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ad={};Jt(sd+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return ad[s]=1});var Et=function(s){Au(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Qr(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||mt,v=(kt(n)||Ru(n)?Qn(n[0]):"length"in i)?[n]:Mn(n),x,M,w,b,T,L,y,A;if(o._targets=v.length?yl(v):as("GSAP target "+n+" not found. https://gsap.com",!un.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||u||Js(c)||Js(h)){i=o.vars;var O=i.easeReverse||i.yoyoEase;if(x=o.timeline=new qt({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:v}),x.kill(),x.parent=x._dp=qn(o),x._start=0,u||Js(c)||Js(h)){if(b=v.length,y=u&&qu(u),Fn(u))for(T in u)~sd.indexOf(T)&&(A||(A={}),A[T]=u[T]);for(M=0;M<b;M++)w=ga(i,ad),w.stagger=0,O&&(w.easeReverse=O),A&&Rr(w,A),L=v[M],w.duration=+ts(c,qn(o),M,L,v),w.delay=(+ts(h,qn(o),M,L,v)||0)-o._delay,!u&&b===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),x.to(L,w,y?y(M,L,v):0),x._ease=Ze.none;x.duration()?c=h=0:o.timeline=0}else if(_){Qr(fn(x.vars.defaults,{ease:"none"})),x._ease=ki(_.ease||i.ease||"none");var G=0,$,R,N;if(kt(_))_.forEach(function(F){return x.to(v,F,">")}),x.duration();else{w={};for(T in _)T==="ease"||T==="easeEach"||Nx(T,_[T],w,_.easeEach);for(T in w)for($=w[T].sort(function(F,k){return F.t-k.t}),G=0,M=0;M<$.length;M++)R=$[M],N={ease:R.e,duration:(R.t-(M?$[M-1].t:0))/100*c},N[T]=R.v,x.to(v,N,G),G+=N.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return f===!0&&!fl&&(ci=qn(o),mt.killTweensOf(v),ci=0),Nn(p,qn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!_&&o._start===pt(p._time)&&Zt(d)&&ux(qn(o))&&p.data!=="nested")&&(o._tTime=-ot,o.render(Math.max(0,-h)||0)),m&&Hu(qn(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-ot&&!h?l:i<ot?0:i,u,f,_,g,m,p,v,x;if(!c)fx(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,a);if(u=pt(d%g),d===l?(_=this._repeat,u=c):(m=pt(d/g),_=~~m,_&&_===m?(u=c,_--):u>c&&(u=c)),p=this._yoyo&&_&1,p&&(u=c-u),m=Pr(this._tTime,g),u===o&&!a&&this._initted&&_===m)return this._tTime=d,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&u!==g&&this._initted&&(this._lock=a=1,this.render(pt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Vu(this,h?i:u,a,r,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var M=u<o;if(M!==this._inv){var w=M?o:c-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=w?(M?-1:1)/w:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(u/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!r&&!m&&(cn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(u/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Go(this,i,r,a),cn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&cn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Go(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&_i(this,1),!r&&!(h&&!o)&&(d||o||p)&&(cn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,l){cs||ln.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||El(this,c),h=this._ease(c/this._dur),Dx(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(Ra(this,0),this.parent||ku(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?$r(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ut),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ci&&ci.vars.overwrite!==!0)._first||$r(this),this.parent&&a!==this.timeline.totalDuration()&&Lr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Mn(i):o,c=this._ptLookup,h=this._pt,d,u,f,_,g,m,p;if((!r||r==="all")&&cx(o,l))return r==="all"&&(this._pt=0),$r(this);for(d=this._op=this._op||[],r!=="all"&&(Pt(r)&&(g={},Jt(r,function(v){return g[v]=1}),r=g),r=Ux(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){u=c[p],r==="all"?(d[p]=r,_=u,f={}):(f=d[p]=d[p]||{},_=r);for(g in _)m=u&&u[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Aa(this,m,"_pt"),delete u[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&$r(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return es(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return es(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return mt.killTweensOf(i,r,a)},e}(hs);fn(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jt("staggerTo,staggerFrom,staggerFromTo",function(s){Et[s]=function(){var e=new qt,t=Vo.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Tl=function(e,t,n){return e[t]=n},od=function(e,t,n){return e[t](n)},Ox=function(e,t,n,i){return e[t](i.fp,n)},Fx=function(e,t,n){return e.setAttribute(t,n)},bl=function(e,t){return _t(e[t])?od:pl(e[t])&&e.setAttribute?Fx:Tl},ld=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Bx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},cd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},wl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},zx=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},kx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Aa(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Gx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},hd=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Qt=function(){function s(t,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||ld,this.d=l||this,this.set=c||Tl,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Gx,this.m=n,this.mt=r,this.tween=i},s}();Jt(vl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return xl[s]=1});dn.TweenMax=dn.TweenLite=Et;dn.TimelineLite=dn.TimelineMax=qt;mt=new qt({sortChildren:!1,defaults:ss,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});un.stringFilter=td;var Gi=[],ia={},Hx=[],Th=0,Vx=0,Mo=function(e){return(ia[e]||Hx).map(function(t){return t()})},Yo=function(){var e=Date.now(),t=[];e-Th>2&&(Mo("matchMediaInit"),Gi.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=In.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Mo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Th=e,Mo("matchMedia"))},ud=function(){function s(t,n){this.selector=n&&Wo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Vx++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){_t(n)&&(r=i,i=n,n=_t);var a=this,o=function(){var c=ft,h=a.selector,d;return c&&c!==a&&c.data.push(a),r&&(a.selector=Wo(r)),ft=a,d=i.apply(a,arguments),_t(d)&&a._r.push(d),ft=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===_t?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=ft;ft=null,n(this),ft=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Et&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof qt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Et)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Gi.length;a--;)Gi[a].id===this.id&&Gi.splice(a,1)},e.revert=function(n){this.kill(n||{})},s}(),Wx=function(){function s(t){this.contexts=[],this.scope=t,ft&&ft.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Fn(n)||(n={matches:n});var a=new ud(0,r||this.scope),o=a.conditions={},l,c,h;ft&&!a.selector&&(a.selector=ft.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=In.matchMedia(n[c]),l&&(Gi.indexOf(a)<0&&Gi.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Yo):l.addEventListener("change",Yo)));return h&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),xa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ju(i)})},timeline:function(e){return new qt(e)},getTweensOf:function(e,t){return mt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Pt(e)&&(e=Mn(e)[0]);var r=Bi(e||{}).get,a=n?zu:Bu;return n==="native"&&(n=""),e&&(t?a((sn[t]&&sn[t].get||r)(e,t,n,i)):function(o,l,c){return a((sn[o]&&sn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Mn(e),e.length>1){var i=e.map(function(h){return tn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}e=e[0]||{};var a=sn[t],o=Bi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var d=new a;xr._pt=0,d.init(e,n?h+n:h,xr,0,[e]),d.render(1,d),xr._pt&&wl(1,xr)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,r=tn.to(e,fn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(t,l,c,h)};return a.tween=r,a},isTweening:function(e){return mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ki(e.ease,ss.ease)),vh(ss,e||{})},config:function(e){return vh(un,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!sn[o]&&!dn[o]&&as(t+" effect requires "+o+" plugin.")}),_o[t]=function(o,l,c){return n(Mn(o),fn(l||{},r),c)},a&&(qt.prototype[t]=function(o,l,c){return this.add(_o[t](o,Fn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ze[e]=ki(t)},parseEase:function(e,t){return arguments.length?ki(e,t):Ze},getById:function(e){return mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new qt(e),i,r;for(n.smoothChildTiming=Zt(e.smoothChildTiming),mt.remove(n),n._dp=0,n._time=n._tTime=mt._time,i=mt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Et&&i.vars.onComplete===i._targets[0]))&&Nn(n,i,i._start-i._delay),i=r;return Nn(mt,n,0),n},context:function(e,t){return e?new ud(e,t):ft},matchMedia:function(e){return new Wx(e)},matchMediaRefresh:function(){return Gi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Yo()},addEventListener:function(e,t){var n=ia[e]||(ia[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ia[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Mx,wrapYoyo:Sx,distribute:qu,random:ju,snap:Yu,normalize:yx,getUnit:zt,clamp:gx,splitColor:Qu,toArray:Mn,selector:Wo,mapRange:Ku,pipe:xx,unitize:vx,interpolate:Ex,shuffle:Xu},install:Du,effects:_o,ticker:ln,updateRoot:qt.updateRoot,plugins:sn,globalTimeline:mt,core:{PropTween:Qt,globals:Uu,Tween:Et,Timeline:qt,Animation:hs,getCache:Bi,_removeLinkedListItem:Aa,reverting:function(){return Ut},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return fl=e}}};Jt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return xa[s]=Et[s]});ln.add(qt.updateRoot);xr=xa.to({},{duration:0});var Xx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},qx=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Xx(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},So=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Pt(r)&&(l={},Jt(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}qx(o,r)}}}},tn=xa.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Ut?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},So("roundProps",Xo),So("modifiers"),So("snap",Yu))||xa;Et.version=qt.version=tn.version="3.15.0";Iu=1;ml()&&Ir();Ze.Power0;Ze.Power1;Ze.Power2;Ze.Power3;Ze.Power4;Ze.Linear;Ze.Quad;Ze.Cubic;Ze.Quart;Ze.Quint;Ze.Strong;Ze.Elastic;Ze.Back;Ze.SteppedEase;Ze.Bounce;Ze.Sine;Ze.Expo;Ze.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bh,hi,Sr,Al,Ui,wh,Cl,Yx=function(){return typeof window<"u"},ei={},Li=180/Math.PI,Er=Math.PI/180,ur=Math.atan2,Ah=1e8,Rl=/([A-Z])/g,jx=/(left|right|width|margin|padding|x)/i,$x=/[\s,\(]\S/,On={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},jo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Kx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Zx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Jx=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Qx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},dd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},fd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ev=function(e,t,n){return e.style[t]=n},tv=function(e,t,n){return e.style.setProperty(t,n)},nv=function(e,t,n){return e._gsap[t]=n},iv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},rv=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},sv=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},gt="transform",en=gt+"Origin",av=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in ei&&r){if(this.tfm=this.tfm||{},e!=="transform")e=On[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=jn(i,o)}):this.tfm[e]=a.x?a[e]:jn(i,e),e===en&&(this.tfm.zOrigin=a.zOrigin);else return On.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(gt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(en,t,"")),e=gt}(r||t)&&this.props.push(e,t,r[e])},pd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ov=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Rl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Cl(),(!r||!r.isStart)&&!n[gt]&&(pd(n),i.zOrigin&&n[en]&&(n[en]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},md=function(e,t){var n={target:e,props:[],revert:ov,save:av};return e._gsap||tn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},gd,$o=function(e,t){var n=hi.createElementNS?hi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hi.createElement(e);return n&&n.style?n:hi.createElement(e)},hn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Rl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Dr(t)||t,1)||""},Ch="O,Moz,ms,Ms,Webkit".split(","),Dr=function(e,t,n){var i=t||Ui,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Ch[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Ch[a]:"")+e},Ko=function(){Yx()&&window.document&&(bh=window,hi=bh.document,Sr=hi.documentElement,Ui=$o("div")||{style:{}},$o("div"),gt=Dr(gt),en=gt+"Origin",Ui.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gd=!!Dr("perspective"),Cl=tn.core.reverting,Al=1)},Rh=function(e){var t=e.ownerSVGElement,n=$o("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Sr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Sr.removeChild(n),r},Ph=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},_d=function(e){var t,n;try{t=e.getBBox()}catch{t=Rh(e),n=1}return t&&(t.width||t.height)||n||(t=Rh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ph(e,["x","cx","x1"])||0,y:+Ph(e,["y","cy","y1"])||0,width:0,height:0}:t},xd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&_d(e))},xi=function(e,t){if(t){var n=e.style,i;t in ei&&t!==en&&(t=gt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Rl,"-$1").toLowerCase())):n.removeAttribute(t)}},ui=function(e,t,n,i,r,a){var o=new Qt(e._pt,t,n,0,1,a?fd:dd);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Lh={deg:1,rad:1,turn:1},lv={grid:1,flex:1},vi=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Ui.style,l=jx.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",_,g,m,p;if(i===a||!r||Lh[i]||Lh[a])return r;if(a!=="px"&&!u&&(r=s(e,t,n,"px")),p=e.getCTM&&xd(e),(f||a==="%")&&(ei[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[h],vt(f?r/_*d:r/100*_);if(o[l?"width":"height"]=d+(u?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===hi||!g.appendChild)&&(g=hi.body),m=g._gsap,m&&f&&m.width&&l&&m.time===ln.time&&!m.uncache)return vt(r/m.width*d);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+i,_=e[h],v?e.style[t]=v:xi(e,t)}else(f||a==="%")&&!lv[hn(g,"display")]&&(o.position=hn(e,"position")),g===e&&(o.position="static"),g.appendChild(Ui),_=Ui[h],g.removeChild(Ui),o.position="absolute";return l&&f&&(m=Bi(g),m.time=ln.time,m.width=g[h]),vt(u?_*r/d:_&&r?d/_*r:0)},jn=function(e,t,n,i){var r;return Al||Ko(),t in On&&t!=="transform"&&(t=On[t],~t.indexOf(",")&&(t=t.split(",")[0])),ei[t]&&t!=="transform"?(r=ds(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ya(hn(e,en))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=va[t]&&va[t](e,t,n)||hn(e,t)||Ou(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?vi(e,t,r,n)+n:r},cv=function(e,t,n,i){if(!n||n==="none"){var r=Dr(t,e,1),a=r&&hn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=hn(e,"borderTopColor"))}var o=new Qt(this._pt,e.style,t,0,1,cd),l=0,c=0,h,d,u,f,_,g,m,p,v,x,M,w;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=hn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=hn(e,t)||i,g?e.style[t]=g:xi(e,t)),h=[n,i],td(h),n=h[0],i=h[1],u=n.match(_r)||[],w=i.match(_r)||[],w.length){for(;d=_r.exec(i);)m=d[0],v=i.substring(l,d.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=u[c++]||"")&&(f=parseFloat(g)||0,M=g.substr((f+"").length),m.charAt(1)==="="&&(m=Mr(f,m)+M),p=parseFloat(m),x=m.substr((p+"").length),l=_r.lastIndex-x.length,x||(x=x||un.units[t]||M,l===i.length&&(i+=x,o.e+=x)),M!==x&&(f=vi(e,t,g,x)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?fd:dd;return Lu.test(i)&&(o.e=0),this._pt=o,o},Ih={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},hv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Ih[n]||n,t[1]=Ih[i]||i,t.join(" ")},uv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],ei[o]&&(l=1,o=o==="transformOrigin"?en:gt),xi(n,o);l&&(xi(n,gt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ds(n,1),a.uncache=1,pd(i)))}},va={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Qt(e._pt,t,n,0,0,uv);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},us=[1,0,0,1,0,0],vd={},yd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Dh=function(e){var t=hn(e,gt);return yd(t)?us:t.substr(7).match(Pu).map(vt)},Pl=function(e,t){var n=e._gsap||Bi(e),i=e.style,r=Dh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?us:r):(r===us&&!e.offsetParent&&e!==Sr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Sr.appendChild(e)),r=Dh(e),l?i.display=l:xi(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Sr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Zo=function(e,t,n,i,r,a){var o=e._gsap,l=r||Pl(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],v=l[5],x=t.split(" "),M=parseFloat(x[0])||0,w=parseFloat(x[1])||0,b,T,L,y;n?l!==us&&(T=f*m-_*g)&&(L=M*(m/T)+w*(-g/T)+(g*v-m*p)/T,y=M*(-_/T)+w*(f/T)-(f*v-_*p)/T,M=L,w=y):(b=_d(e),M=b.x+(~x[0].indexOf("%")?M/100*b.width:M),w=b.y+(~(x[1]||x[0]).indexOf("%")?w/100*b.height:w)),i||i!==!1&&o.smooth?(p=M-c,v=w-h,o.xOffset=d+(p*f+v*g)-p,o.yOffset=u+(p*_+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=w,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[en]="0px 0px",a&&(ui(a,o,"xOrigin",c,M),ui(a,o,"yOrigin",h,w),ui(a,o,"xOffset",d,o.xOffset),ui(a,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+w)},ds=function(e,t){var n=e._gsap||new id(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=hn(e,en)||"0",h,d,u,f,_,g,m,p,v,x,M,w,b,T,L,y,A,O,G,$,R,N,F,k,q,B,Z,te,Q,W,K,ae;return h=d=u=g=m=p=v=x=M=0,f=_=1,n.svg=!!(e.getCTM&&xd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[gt]!=="none"?l[gt]:"")),i.scale=i.rotate=i.translate="none"),T=Pl(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),Zo(e,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,T)),w=n.xOrigin||0,b=n.yOrigin||0,T!==us&&(O=T[0],G=T[1],$=T[2],R=T[3],h=N=T[4],d=F=T[5],T.length===6?(f=Math.sqrt(O*O+G*G),_=Math.sqrt(R*R+$*$),g=O||G?ur(G,O)*Li:0,v=$||R?ur($,R)*Li+g:0,v&&(_*=Math.abs(Math.cos(v*Er))),n.svg&&(h-=w-(w*O+b*$),d-=b-(w*G+b*R))):(ae=T[6],W=T[7],Z=T[8],te=T[9],Q=T[10],K=T[11],h=T[12],d=T[13],u=T[14],L=ur(ae,Q),m=L*Li,L&&(y=Math.cos(-L),A=Math.sin(-L),k=N*y+Z*A,q=F*y+te*A,B=ae*y+Q*A,Z=N*-A+Z*y,te=F*-A+te*y,Q=ae*-A+Q*y,K=W*-A+K*y,N=k,F=q,ae=B),L=ur(-$,Q),p=L*Li,L&&(y=Math.cos(-L),A=Math.sin(-L),k=O*y-Z*A,q=G*y-te*A,B=$*y-Q*A,K=R*A+K*y,O=k,G=q,$=B),L=ur(G,O),g=L*Li,L&&(y=Math.cos(L),A=Math.sin(L),k=O*y+G*A,q=N*y+F*A,G=G*y-O*A,F=F*y-N*A,O=k,N=q),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=vt(Math.sqrt(O*O+G*G+$*$)),_=vt(Math.sqrt(F*F+ae*ae)),L=ur(N,F),v=Math.abs(L)>2e-4?L*Li:0,M=K?1/(K<0?-K:K):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!yd(hn(e,gt)),k&&e.setAttribute("transform",k))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=vt(f),n.scaleY=vt(_),n.rotation=vt(g)+o,n.rotationX=vt(m)+o,n.rotationY=vt(p)+o,n.skewX=v+o,n.skewY=x+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[en]=ya(c)),n.xOffset=n.yOffset=0,n.force3D=un.force3D,n.renderTransform=n.svg?fv:gd?Md:dv,n.uncache=0,n},ya=function(e){return(e=e.split(" "))[0]+" "+e[1]},Eo=function(e,t,n){var i=zt(t);return vt(parseFloat(t)+parseFloat(vi(e,"x",n+"px",i)))+i},dv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Md(e,t)},Ai="0deg",Yr="0px",Ci=") ",Md=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,x=n.zOrigin,M="",w=p==="auto"&&e&&e!==1||p===!0;if(x&&(d!==Ai||h!==Ai)){var b=parseFloat(h)*Er,T=Math.sin(b),L=Math.cos(b),y;b=parseFloat(d)*Er,y=Math.cos(b),a=Eo(v,a,T*y*-x),o=Eo(v,o,-Math.sin(b)*-x),l=Eo(v,l,L*y*-x+x)}m!==Yr&&(M+="perspective("+m+Ci),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(w||a!==Yr||o!==Yr||l!==Yr)&&(M+=l!==Yr||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ci),c!==Ai&&(M+="rotate("+c+Ci),h!==Ai&&(M+="rotateY("+h+Ci),d!==Ai&&(M+="rotateX("+d+Ci),(u!==Ai||f!==Ai)&&(M+="skew("+u+", "+f+Ci),(_!==1||g!==1)&&(M+="scale("+_+", "+g+Ci),v.style[gt]=M||"translate(0, 0)"},fv=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,x=parseFloat(a),M=parseFloat(o),w,b,T,L,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Er,c*=Er,w=Math.cos(l)*d,b=Math.sin(l)*d,T=Math.sin(l-c)*-u,L=Math.cos(l-c)*u,c&&(h*=Er,y=Math.tan(c-h),y=Math.sqrt(1+y*y),T*=y,L*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),w*=y,b*=y)),w=vt(w),b=vt(b),T=vt(T),L=vt(L)):(w=d,L=u,b=T=0),(x&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(x=vi(f,"x",a,"px"),M=vi(f,"y",o,"px")),(_||g||m||p)&&(x=vt(x+_-(_*w+g*T)+m),M=vt(M+g-(_*b+g*L)+p)),(i||r)&&(y=f.getBBox(),x=vt(x+i/100*y.width),M=vt(M+r/100*y.height)),y="matrix("+w+","+b+","+T+","+L+","+x+","+M+")",f.setAttribute("transform",y),v&&(f.style[gt]=y)},pv=function(e,t,n,i,r){var a=360,o=Pt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Li:1),c=l-i,h=i+c+"deg",d,u;return o&&(d=r.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Ah)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Ah)%a-~~(c/a)*a)),e._pt=u=new Qt(e._pt,t,n,i,c,Kx),u.e=h,u.u="deg",e._props.push(n),u},Uh=function(e,t){for(var n in t)e[n]=t[n];return e},mv=function(e,t,n){var i=Uh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,u,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[gt]=t,o=ds(n,1),xi(n,gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[gt],a[gt]=t,o=ds(n,1),a[gt]=c);for(l in ei)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(f=zt(c),_=zt(h),d=f!==_?vi(n,l,c,_):parseFloat(c),u=parseFloat(h),e._pt=new Qt(e._pt,o,l,d,u-d,jo),e._pt.u=_||0,e._props.push(l));Uh(o,i)};Jt("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});va[e>1?"border"+s:s]=function(o,l,c,h,d){var u,f;if(arguments.length<4)return u=a.map(function(_){return jn(o,_,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=u[g]=u[g]||u[(g-1)/2|0]}),o.init(l,f,d)}});var Sd={name:"css",register:Ko,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,h,d,u,f,_,g,m,p,v,x,M,w,b,T,L,y;Al||Ko(),this.styles=this.styles||md(e),L=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(sn[g]&&rd(g,t,n,i,e,r)))){if(f=typeof h,_=va[g],f==="function"&&(h=h.call(n,i,e,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=ls(h)),_)_(this,e,g,h,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",mi.lastIndex=0,mi.test(c)||(m=zt(c),p=zt(h),p?m!==p&&(c=vi(e,g,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,i,r,0,0,g),a.push(g),L.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],Pt(c)&&~c.indexOf("random(")&&(c=ls(c)),zt(c+"")||c==="auto"||(c+=un.units[g]||zt(jn(e,g))||""),(c+"").charAt(1)==="="&&(c=jn(e,g))):c=jn(e,g),u=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),g in On&&(g==="autoAlpha"&&(u===1&&jn(e,"visibility")==="hidden"&&d&&(u=0),L.push("visibility",0,o.visibility),ui(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=On[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in ei,x){if(this.styles.save(g),y=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=hn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=h,h=hn(e,"perspective"),A?e.style.perspective=A:xi(e,"perspective")}d=parseFloat(h)}if(M||(w=e._gsap,w.renderTransform&&!t.parseTransform||ds(e,t.parseTransform),b=t.smoothOrigin!==!1&&w.smooth,M=this._pt=new Qt(this._pt,o,gt,0,1,w.renderTransform,w,0,-1),M.dep=1),g==="scale")this._pt=new Qt(this._pt,w,"scaleY",w.scaleY,(v?Mr(w.scaleY,v+d):d)-w.scaleY||0,jo),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(en,0,o[en]),h=hv(h),w.svg?Zo(e,h,0,b,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==w.zOrigin&&ui(this,w,"zOrigin",w.zOrigin,p),ui(this,o,g,ya(c),ya(h)));continue}else if(g==="svgOrigin"){Zo(e,h,1,b,0,this);continue}else if(g in vd){pv(this,w,g,u,v?Mr(u,v+h):h);continue}else if(g==="smoothOrigin"){ui(this,w,"smooth",w.smooth,h);continue}else if(g==="force3D"){w[g]=h;continue}else if(g==="transform"){mv(this,h,e);continue}}else g in o||(g=Dr(g)||g);if(x||(d||d===0)&&(u||u===0)&&!$x.test(h)&&g in o)m=(c+"").substr((u+"").length),d||(d=0),p=zt(h)||(g in un.units?un.units[g]:m),m!==p&&(u=vi(e,g,c,p)),this._pt=new Qt(this._pt,x?w:o,g,u,(v?Mr(u,v+d):d)-u,!x&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Qx:jo),this._pt.u=p||0,x&&y!==h?(this._pt.b=c,this._pt.e=y,this._pt.r=Jx):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Zx);else if(g in o)cv.call(this,e,g,c,v?v+h:h);else if(g in e)this.add(e,g,c||e[g],v?v+h:h,i,r);else if(g!=="parseTransform"){_l(g,h);continue}x||(g in o?L.push(g,0,o[g]):typeof e[g]=="function"?L.push(g,2,e[g]()):L.push(g,1,c||e[g])),a.push(g)}}T&&hd(this)},render:function(e,t){if(t.tween._time||!Cl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:jn,aliases:On,getSetter:function(e,t,n){var i=On[t];return i&&i.indexOf(",")<0&&(t=i),t in ei&&t!==en&&(e._gsap.x||jn(e,"x"))?n&&wh===n?t==="scale"?iv:nv:(wh=n||{})&&(t==="scale"?rv:sv):e.style&&!pl(e.style[t])?ev:~t.indexOf("-")?tv:bl(e,t)},core:{_removeProperty:xi,_getMatrix:Pl}};tn.utils.checkPrefix=Dr;tn.core.getStyleSaver=md;(function(s,e,t,n){var i=Jt(s+","+e+","+t,function(r){ei[r]=1});Jt(e,function(r){un.units[r]="deg",vd[r]=1}),On[i[13]]=s+","+e,Jt(n,function(r){var a=r.split(":");On[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){un.units[s]="px"});tn.registerPlugin(Sd);var tt=tn.registerPlugin(Sd)||tn;tt.core.Tween;const Vt=[{id:"mind",index:"01",name:"MIND STONE",roman:"I",colorHex:"#ffd000",colorThree:16764928,coreColor:16773258,darkColor:6706432,domainKey:"intelligence",domain:"INTELLIGENCE",domainTagline:"AI • ML • Decision Systems",marvelTheme:"Vision Neural Gold",entity:"The Scepter / Vision's Core",origin:"Chitauri Scepter / Neural Matrix",vessel:"The Scepter / Vision",frequency:"528.00 THz",refractiveIndex:"2.54",powerLevel:"98.5%",particleCount:180,techStack:["Python","PyTorch","LangChain","FastAPI","Gemini API","TensorFlow"],quote:"It contains an intellect of supreme cosmic density.",description:"Architect autonomous multi-agent networks, neural cognition models, self-refining LLM pipelines, and intelligent decision systems capable of enterprise-scale problem-solving.",stats:[{label:"SYNAPSE DENSITY",value:"Infinite"},{label:"MODEL CAPACITY",value:"Trillion Param"},{label:"HARMONIC",value:"528.00 THz"},{label:"SLOTS OPEN",value:"12 Squads"}]},{id:"space",index:"02",name:"SPACE STONE",roman:"II",colorHex:"#00d2ff",colorThree:54015,coreColor:8449279,darkColor:16486,domainKey:"connectivity",domain:"CONNECTIVITY",domainTagline:"Cybersecurity • Cloud • Networks",marvelTheme:"Tesseract Cyan",entity:"Tesseract (Cosmic Cube)",origin:"Pre-Universe Singularity / Asgardian Vault",vessel:"The Tesseract",frequency:"432.18 THz",refractiveIndex:"2.42",powerLevel:"99.2%",particleCount:160,techStack:["Rust","Go","Kubernetes","eBPF","Cloudflare Workers","WireGuard"],quote:"The Tesseract has awakened. It is on a little world, a human world.",description:"Forge zero-trust defense architectures, planet-scale cloud networks, high-throughput distributed protocols, and resilient cybersecurity fabrics.",stats:[{label:"LATENCY PROFILE",value:"Sub-5ms Mesh"},{label:"DEFENSE MATRIX",value:"Post-Quantum"},{label:"HARMONIC",value:"432.18 THz"},{label:"SLOTS OPEN",value:"10 Squads"}]},{id:"reality",index:"03",name:"REALITY STONE",roman:"III",colorHex:"#ff2a4b",colorThree:16722507,coreColor:16741768,darkColor:6684688,domainKey:"digital",domain:"DIGITAL",domainTagline:"Web • Mobile • Digital Platforms",marvelTheme:"Aether Crimson",entity:"The Aether (Fluid Crystal)",origin:"Pre-Universe Singularity / Svartalfheim",vessel:"The Aether Prism",frequency:"612.44 THz",refractiveIndex:"2.68",powerLevel:"97.8%",particleCount:220,techStack:["TypeScript","React","Flutter","Next.js","Node.js","WebGL"],quote:"It turns matter into dark matter, reshaping physical reality at will.",description:"Bend digital reality. Build hyper-responsive web applications, cross-platform mobile architectures, immersive real-time canvases, and scalable modern platforms.",stats:[{label:"RENDER TARGET",value:"120 FPS WebGL"},{label:"STATE CONFLICT",value:"Sub-30ms CRDT"},{label:"HARMONIC",value:"612.44 THz"},{label:"SLOTS OPEN",value:"14 Squads"}]},{id:"power",index:"04",name:"POWER STONE",roman:"IV",colorHex:"#b026ff",colorThree:11544319,coreColor:14714367,darkColor:4851058,domainKey:"automation",domain:"AUTOMATION",domainTagline:"IoT • Robotics • Embedded Systems",marvelTheme:"Thanos Void Purple",entity:"The Orb / Morag Temple",origin:"Pre-Universe Singularity / Celestial Eson",vessel:"The Orb of Morag",frequency:"741.89 THz",refractiveIndex:"2.75",powerLevel:"100.0%",particleCount:200,techStack:["C++","Rust","ESP32 / Arduino","ROS2","MQTT","FreeRTOS"],quote:"It contains an energy that destroys all organic matter it touches.",description:"Unleash physical and digital kinetic power. Develop autonomous robotics, smart hardware controllers, industrial IoT pipelines, and embedded real-time systems.",stats:[{label:"BUS TELEMETRY",value:"Microsecond"},{label:"KINETIC FAILOVER",value:"Autonomous Swarm"},{label:"HARMONIC",value:"741.89 THz"},{label:"SLOTS OPEN",value:"8 Squads"}]},{id:"time",index:"05",name:"TIME STONE",roman:"V",colorHex:"#00ff88",colorThree:65416,coreColor:9109441,darkColor:21803,domainKey:"analytics",domain:"ANALYTICS",domainTagline:"Data • Prediction • Optimization",marvelTheme:"Doctor Strange Emerald",entity:"Eye of Agamotto / Kamar-Taj",origin:"Pre-Universe Singularity / Sorcerer Supreme",vessel:"Eye of Agamotto",frequency:"852.12 THz",refractiveIndex:"2.48",powerLevel:"98.9%",particleCount:190,techStack:["Python","Kafka","ClickHouse","Pandas","DuckDB","Scikit-Learn"],quote:"Dormammu, I have come to bargain.",description:"Control temporal velocity. Engineer real-time streaming pipelines, high-throughput predictive time-series models, algorithmic optimization engines, and big data intelligence.",stats:[{label:"STREAM INGEST",value:"1M Events/sec"},{label:"ORACLE HORIZON",value:"14,000,605 Paths"},{label:"HARMONIC",value:"852.12 THz"},{label:"SLOTS OPEN",value:"11 Squads"}]},{id:"soul",index:"06",name:"SOUL STONE",roman:"VI",colorHex:"#ff7700",colorThree:16742144,coreColor:16765567,darkColor:10044416,domainKey:"impact",domain:"IMPACT",domainTagline:"Healthcare • Agriculture • Education • Social Good",marvelTheme:"Vormir Sunset Orange",entity:"Vormir Altar / Soul World",origin:"Pre-Universe Singularity / Red Skull Guardian",vessel:"Vormir Shrine",frequency:"963.00 THz",refractiveIndex:"2.62",powerLevel:"99.7%",particleCount:180,techStack:["Python","Flutter","PostgreSQL","FastAPI","Edge AI","OpenCV"],quote:"A soul for a soul. Great technological impact demands great purpose.",description:"Channel technology to transform lives. Pioneer accessible healthcare diagnostics, precision agricultural sensors, adaptive educational tools, and sustainable social impact networks.",stats:[{label:"COMMUNITY REACH",value:"Global Impact"},{label:"ETHICAL CORE",value:"Privacy-Preserving"},{label:"HARMONIC",value:"963.00 THz"},{label:"SLOTS OPEN",value:"15 Squads"}]}],ra=0,gv=1,_v=new I,Nh=new B0,To=new Yn,Oh=new I,Qs=new an;class xv{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Fh,this.unassigned=new Fh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new vv(e[t]));this.compute()}return this}setFromObject(e){const t=[];return e.updateMatrixWorld(!0),e.traverse(function(n){const i=n.geometry;if(i!==void 0){const r=i.attributes.position;if(r!==void 0)for(let a=0,o=r.count;a<o;a++){const l=new I;l.fromBufferAttribute(r,a).applyMatrix4(n.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){const t=this.faces;for(let n=0,i=t.length;n<i;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){const n=this.faces;let i=-1/0,r=1/0;for(let a=0,o=n.length;a<o;a++){const l=n[a],c=l.distanceToPoint(e.origin),h=l.normal.dot(e.direction);if(c>0&&h>=0)return null;const d=h!==0?-c/h:0;if(!(d<=0)&&(h>0?r=Math.min(d,r):i=Math.max(d,i),i>r))return null}return i!==-1/0?e.at(i,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,_v)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}removeAllVerticesFromFace(e){if(e.outside!==null){const t=e.outside;let n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}deleteFaceVertices(e,t){const n=this.removeAllVerticesFromFace(e);if(n!==void 0)if(t===void 0)this.unassigned.appendChain(n);else{let i=n;do{const r=i.next;t.distanceToPoint(i.point)>this.tolerance?this.addVertexToFace(i,t):this.unassigned.append(i),i=r}while(i!==null)}return this}resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{const n=t.next;let i=this.tolerance,r=null;for(let a=0;a<e.length;a++){const o=e[a];if(o.mark===ra){const l=o.distanceToPoint(t.point);if(l>i&&(i=l,r=o),i>1e3*this.tolerance)break}}r!==null&&this.addVertexToFace(t,r),t=n}while(t!==null)}return this}computeExtremes(){const e=new I,t=new I,n=[],i=[];for(let r=0;r<3;r++)n[r]=i[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,a=this.vertices.length;r<a;r++){const o=this.vertices[r],l=o.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),n[c]=o);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),i[c]=o)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:i}}computeInitialHull(){const e=this.vertices,t=this.computeExtremes(),n=t.min,i=t.max;let r=0,a=0;for(let u=0;u<3;u++){const f=i[u].point.getComponent(u)-n[u].point.getComponent(u);f>r&&(r=f,a=u)}const o=n[a],l=i[a];let c,h;r=0,Nh.set(o.point,l.point);for(let u=0,f=this.vertices.length;u<f;u++){const _=e[u];if(_!==o&&_!==l){Nh.closestPointToPoint(_.point,!0,Oh);const g=Oh.distanceToSquared(_.point);g>r&&(r=g,c=_)}}r=-1,To.setFromCoplanarPoints(o.point,l.point,c.point);for(let u=0,f=this.vertices.length;u<f;u++){const _=e[u];if(_!==o&&_!==l&&_!==c){const g=Math.abs(To.distanceToPoint(_.point));g>r&&(r=g,h=_)}}const d=[];if(To.distanceToPoint(h.point)<0){d.push(wn.create(o,l,c),wn.create(h,l,o),wn.create(h,c,l),wn.create(h,o,c));for(let u=0;u<3;u++){const f=(u+1)%3;d[u+1].getEdge(2).setTwin(d[0].getEdge(f)),d[u+1].getEdge(1).setTwin(d[f+1].getEdge(0))}}else{d.push(wn.create(o,c,l),wn.create(h,o,l),wn.create(h,l,c),wn.create(h,c,o));for(let u=0;u<3;u++){const f=(u+1)%3;d[u+1].getEdge(2).setTwin(d[0].getEdge((3-u)%3)),d[u+1].getEdge(0).setTwin(d[f+1].getEdge(1))}}for(let u=0;u<4;u++)this.faces.push(d[u]);for(let u=0,f=e.length;u<f;u++){const _=e[u];if(_!==o&&_!==l&&_!==c&&_!==h){r=this.tolerance;let g=null;for(let m=0;m<4;m++){const p=this.faces[m].distanceToPoint(_.point);p>r&&(r=p,g=this.faces[m])}g!==null&&this.addVertexToFace(_,g)}}return this}reindexFaces(){const e=[];for(let t=0;t<this.faces.length;t++){const n=this.faces[t];n.mark===ra&&e.push(n)}return this.faces=e,this}nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0;const n=this.assigned.first().face;let i=n.outside;do{const r=n.distanceToPoint(i.point);r>t&&(t=r,e=i),i=i.next}while(i!==null&&i.face===n);return e}}computeHorizon(e,t,n,i){this.deleteFaceVertices(n),n.mark=gv;let r;t===null?r=t=n.getEdge(0):r=t.next;do{const a=r.twin,o=a.face;o.mark===ra&&(o.distanceToPoint(e)>this.tolerance?this.computeHorizon(e,a,o,i):i.push(r)),r=r.next}while(r!==t);return this}addAdjoiningFace(e,t){const n=wn.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}addNewFaces(e,t){this.newFaces=[];let n=null,i=null;for(let r=0;r<t.length;r++){const a=t[r],o=this.addAdjoiningFace(e,a);n===null?n=o:o.next.setTwin(i),this.newFaces.push(o.face),i=o}return n.next.setTwin(i),this}addVertexToHull(e){const t=[];return this.unassigned.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,t),this.addNewFaces(e,t),this.resolveUnassignedPoints(this.newFaces),this}cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}compute(){let e;for(this.computeInitialHull();(e=this.nextVertexToAdd())!==void 0;)this.addVertexToHull(e);return this.reindexFaces(),this.cleanup(),this}}class wn{constructor(){this.normal=new I,this.midpoint=new I,this.area=0,this.constant=0,this.outside=null,this.mark=ra,this.edge=null}static create(e,t,n){const i=new wn,r=new bo(e,i),a=new bo(t,i),o=new bo(n,i);return r.next=o.prev=a,a.next=r.prev=o,o.next=a.prev=r,i.edge=r,i.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){const e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return Qs.set(e.point,t.point,n.point),Qs.getNormal(this.normal),Qs.getMidpoint(this.midpoint),this.area=Qs.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}}class bo{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}}class vv{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}}class Fh{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}}class yv extends yt{constructor(e=[]){super();const t=[],n=[],r=new xv().setFromPoints(e).faces;for(let a=0;a<r.length;a++){const o=r[a];let l=o.edge;do{const c=l.head().point;t.push(c.x,c.y,c.z),n.push(o.normal.x,o.normal.y,o.normal.z),l=l.next}while(l!==o.edge)}this.setAttribute("position",new st(t,3)),this.setAttribute("normal",new st(n,3))}}let Ri=null;function Mv(){if(Ri)return Ri;const s=document.createElement("canvas");s.width=512,s.height=512;const e=s.getContext("2d");e.fillStyle="#808080",e.fillRect(0,0,512,512);const t=e.getImageData(0,0,512,512),n=t.data;for(let i=0;i<n.length;i+=4){const r=(Math.random()-.5)*48;n[i]=Math.min(255,Math.max(0,128+r)),n[i+1]=n[i],n[i+2]=n[i],n[i+3]=255}e.putImageData(t,0,0),e.strokeStyle="rgba(240, 240, 240, 0.35)",e.lineWidth=1.4;for(let i=0;i<22;i++){e.beginPath();let r=Math.random()*512,a=Math.random()*512;e.moveTo(r,a);for(let o=0;o<5;o++)r+=(Math.random()-.5)*90,a+=(Math.random()-.5)*90,e.lineTo(r,a);e.stroke()}return Ri=new da(s),Ri.wrapS=ns,Ri.wrapT=ns,Ri.repeat.set(2,2),Ri}function Sv(s=12){const e=[],t=[];for(let f=0;f<s;f++)t.push(f/s*Math.PI*2+Math.PI/s);const n=t.map(f=>new I(Math.cos(f)*.72*(1+.12*Math.cos(2*f)),.58,Math.sin(f)*.6*(1-.12*Math.cos(2*f)))),i=new I(0,.59,0),r=t.map(f=>new I(Math.cos(f)*1.05*(1+.12*Math.cos(2*f)),.35,Math.sin(f)*.88*(1-.12*Math.cos(2*f)))),a=t.map(f=>new I(Math.cos(f)*1.3*(1+.12*Math.cos(2*f)),.12,Math.sin(f)*1.08*(1-.12*Math.cos(2*f)))),o=t.map(f=>new I(Math.cos(f)*1.3*(1+.12*Math.cos(2*f)),-.12,Math.sin(f)*1.08*(1-.12*Math.cos(2*f)))),l=t.map(f=>new I(Math.cos(f)*.8*(1+.12*Math.cos(2*f)),-.58,Math.sin(f)*.66*(1-.12*Math.cos(2*f)))),c=new I(0,-.98,0);function h(f,_,g){e.push(f.x,f.y,f.z,_.x,_.y,_.z,g.x,g.y,g.z)}function d(f,_,g,m){h(f,_,g),h(f,g,m)}for(let f=0;f<s;f++){const _=(f+1)%s;h(i,n[f],n[_]),d(n[f],r[f],r[_],n[_]),d(r[f],a[f],a[_],r[_]),d(a[f],o[f],o[_],a[_]),d(o[f],l[f],l[_],o[_]),h(l[f],c,l[_])}const u=new yt;return u.setAttribute("position",new st(e,3)),u.computeVertexNormals(),u}function dr(s=42,e=1.15,t=1.35,n=1.05){let i=s;function r(){return i=(i*9301+49297)%233280,i/233280}const a=[],o=30;for(let d=0;d<o;d++){const u=r()*2-1,f=r()*Math.PI*2,_=Math.sqrt(Math.max(0,1-u*u)),g=_*Math.cos(f),m=u,p=_*Math.sin(f),v=g*e,x=m*t,M=p*n,w=Math.sqrt(v*v+x*x+M*M),b=d%4===0?.78+r()*.12:.9+r()*.22,T=w*b;a.push({nx:g,ny:m,nz:p,d:T})}a.push({nx:.55,ny:.65,nz:.4,d:1}),a.push({nx:-.6,ny:.5,nz:-.55,d:.95}),a.push({nx:.65,ny:-.6,nz:-.4,d:.98}),a.push({nx:-.5,ny:-.75,nz:.4,d:.92});const l=a.length,c=[];for(let d=0;d<l;d++)for(let u=d+1;u<l;u++)for(let f=u+1;f<l;f++){const _=a[d],g=a[u],m=a[f],p=_.nx*(g.ny*m.nz-g.nz*m.ny)-_.ny*(g.nx*m.nz-g.nz*m.nx)+_.nz*(g.nx*m.ny-g.ny*m.nx);if(Math.abs(p)<1e-4)continue;const v=(_.d*(g.ny*m.nz-g.nz*m.ny)-_.ny*(g.d*m.nz-g.nz*m.d)+_.nz*(g.d*m.ny-g.ny*m.d))/p,x=(_.nx*(g.d*m.nz-g.nz*m.d)-_.d*(g.nx*m.nz-g.nz*m.nx)+_.nz*(g.nx*m.d-g.d*m.nx))/p,M=(_.nx*(g.ny*m.d-g.d*m.ny)-_.ny*(g.nx*m.d-g.d*m.nx)+_.d*(g.nx*m.ny-g.ny*m.nx))/p;let w=!0;for(let b=0;b<l;b++){const T=a[b];if(T.nx*v+T.ny*x+T.nz*M>T.d+.001){w=!1;break}}w&&c.push(new I(v,x,M))}const h=new yv(c);return h.center(),h.computeVertexNormals(),h}function Ev(s){return s==="time"?Sv(12):s==="soul"?dr(42,1.15,1.35,1.05):s==="mind"?dr(77,1.08,1.48,1.02):s==="power"?dr(93,1.25,1.28,1.18):s==="space"?dr(17,1.2,1.3,1.12):s==="reality"?dr(51,1.16,1.34,1.14):dr(42,1.2,1.2,1.2)}function Tv(s,e){s.computeBoundingBox();const t=s.boundingBox,n=t.min.y,i=t.max.y,r=Math.max(.001,i-n),a=t.min.x,o=t.max.x,l=Math.max(.001,o-a),c=t.min.z,h=t.max.z,d=Math.max(.001,h-c),u=s.attributes.position,f=new Float32Array(u.count*3);for(let b=0;b<u.count;b++)f[b*3]=(u.getX(b)-a)/l,f[b*3+1]=(u.getY(b)-n)/r,f[b*3+2]=(u.getZ(b)-c)/d;const _=new Float32Array(u.count*3),g=new Kt(_,3);s.setAttribute("color",g);const m=new Ce(e.coreColor).lerp(new Ce(16777215),.62),p=new Ce(e.colorThree),v=new Ce(e.darkColor).multiplyScalar(.36),x=new Ce,M=new Ce,w=b=>{const T=.5+Math.sin(b*4.6)*.3;M.copy(m).lerp(new Ce(16777215),T);for(let L=0;L<u.count;L++){const y=f[L*3],A=f[L*3+1],O=f[L*3+2],G=Math.sin(b*4.5+y*3+O*2.4)*.22+Math.cos(b*3.5+A*2.6)*.13;let $=A*.88+y*.12+G;if($=Math.max(0,Math.min(1,$)),$<.5){const R=Math.pow($*2,1.25);x.copy(v).lerp(p,R)}else{const R=Math.pow(($-.5)*2,.82);x.copy(p).lerp(M,R)}_[L*3]=x.r,_[L*3+1]=x.g,_[L*3+2]=x.b}g.needsUpdate=!0};return w(0),w}function bv(s){const e=new Un;e.name=s.id,e.userData={stoneData:s};const t=Ev(s.id),n=Tv(t,s),i=Mv(),r=new D0({color:16777215,vertexColors:!0,emissive:s.colorThree,emissiveIntensity:.18,roughness:.14,metalness:.06,transmission:0,transparent:!1,opacity:1,depthWrite:!0,ior:1.76,specularIntensity:1,specularColor:new Ce(16777215),clearcoat:.55,clearcoatRoughness:.06,bumpMap:i,bumpScale:.015,flatShading:!0}),a=new St(t,r);a.castShadow=!0,a.receiveShadow=!0,e.add(a);const o=new rh(new ll(1.05,1)),l=new jr({color:s.coreColor,transparent:!0,opacity:0,blending:Bt}),c=new Ws(o,l);c.visible=!1,e.add(c);const h=new jr({color:16777215,transparent:!0,opacity:.45,blending:Bt}),d=new Ws(new rh(t),h);d.visible=!0,e.add(d);const u=new cl(.24,18,18),f=new An({color:s.coreColor,transparent:!0,opacity:0}),_=new St(u,f);_.visible=!1,e.add(_);const g=new Oo(s.coreColor,1.8,10,1.4);g.position.set(0,1,2.6),e.add(g);const m=new Oo(s.colorThree,1.3,8,1.4);m.position.set(0,-1,-2.6),e.add(m);const p=new Un;if(p.name="artifacts",s.id==="space"){const R=new Ur(2.1,2.1,2.1),N=new P0(R),F=new Ws(N,new jr({color:54015,transparent:!0,opacity:.25,blending:Bt}));p.add(F)}else if(s.id==="mind"){const R=new gr(1.92,.005,6,64),N=new An({color:16771584,transparent:!0,opacity:.16,blending:Bt}),F=new St(R,N);F.rotation.set(Math.PI/3.5,0,Math.PI/6);const k=new St(R,N);k.rotation.set(-Math.PI/3.5,0,-Math.PI/6),p.add(F,k)}else if(s.id==="reality")for(let R=0;R<2;R++){const N=1.7+R*.35,F=new gr(N,.015,6,48),k=new An({color:16717636,transparent:!0,opacity:.3-R*.08,blending:Bt}),q=new St(F,k);q.rotation.x=Math.random()*Math.PI,q.rotation.y=Math.random()*Math.PI,q.userData={speedX:.006+R*.004,speedY:.008+R*.003},p.add(q)}else if(s.id==="power"){const R=new Un,N=new hl(.055,0),F=new An({color:14647551,transparent:!0,opacity:.55,blending:Bt});for(let k=0;k<18;k++){const q=.6+Math.random()*.7,B=new St(N,F);B.scale.set(q,q,q);const Z=k/18*Math.PI*2,te=1.85+(Math.random()-.5)*.4,Q=(Math.random()-.5)*.7;B.position.set(Math.cos(Z)*te,Q,Math.sin(Z)*te),R.add(B)}R.rotation.set(Math.PI/4,0,Math.PI/6),p.add(R)}else if(s.id==="time"){const R=new Un,N=new fa(1.68,1.72,64),F=new fa(2.1,2.15,64),k=new An({color:65416,side:xn,transparent:!0,opacity:.65,blending:Bt}),q=new An({color:6942894,side:xn,transparent:!0,opacity:.45,blending:Bt}),B=new St(N,k),Z=new St(F,q);B.rotation.x=Math.PI/2,Z.rotation.x=Math.PI/2;const te=new yt,Q=1.18,W=[-Q,0,-Q,Q,0,-Q,Q,0,-Q,Q,0,Q,Q,0,Q,-Q,0,Q,-Q,0,Q,-Q,0,-Q];te.setAttribute("position",new st(W,3));const K=new jr({color:65416,transparent:!0,opacity:.55,blending:Bt}),ae=new Ws(te,K),Ee=ae.clone();Ee.rotation.y=Math.PI/4,B.add(ae,Ee);const ye=new Ta(.025,.14),Ie=new An({color:9109441,side:xn,blending:Bt});for(let Re=0;Re<24;Re++){const xe=Re/24*Math.PI*2,ze=new St(ye,Ie);ze.position.set(Math.cos(xe)*2.12,0,Math.sin(xe)*2.12),ze.rotation.y=-xe,Z.add(ze)}R.add(B,Z),p.add(R)}else if(s.id==="soul"){const R=new Un,N=new An({color:16758869,transparent:!0,opacity:.18,blending:Bt}),F=new St(new gr(1.85,.006,6,64),N);F.rotation.set(Math.PI/3,0,Math.PI/6);const k=new St(new gr(1.95,.005,6,64),N);k.rotation.set(-Math.PI/3,0,-Math.PI/6),R.add(F,k),p.add(R)}e.add(p);const v=120,x=new yt,M=new Float32Array(v*3);for(let R=0;R<v;R++){const N=1+Math.random()*1.8,F=Math.random()*Math.PI*2,k=Math.acos(2*Math.random()-1);M[R*3]=N*Math.sin(k)*Math.cos(F),M[R*3+1]=N*Math.sin(k)*Math.sin(F),M[R*3+2]=N*Math.cos(k)}x.setAttribute("position",new Kt(M,3));const w=document.createElement("canvas");w.width=32,w.height=32;const b=w.getContext("2d"),T=b.createRadialGradient(16,16,0,16,16,16);T.addColorStop(0,"rgba(255, 255, 255, 1)"),T.addColorStop(.3,"rgba(255, 255, 255, 0.7)"),T.addColorStop(.8,"rgba(255, 255, 255, 0.15)"),T.addColorStop(1,"rgba(255, 255, 255, 0)"),b.fillStyle=T,b.fillRect(0,0,32,32);const L=new da(w),y=new ol({color:s.coreColor,size:.1,map:L,transparent:!0,opacity:.7,blending:Bt,depthWrite:!1}),A=new Eu(x,y);A.name="particles",e.add(A);const O=.0055+(s.colorThree&7)*4e-4,G=.009+(s.colorThree>>4&7)*4e-4,$=.0042+(s.colorThree>>8&7)*4e-4;return{group:e,gemMesh:a,gemMat:r,wireMesh:d,veinMesh:c,coreMesh:_,pointLight:g,artifactsGroup:p,particles:A,update:(R,N)=>{const F=1+Math.sin(R*3.6)*.1;if(_.scale.set(F,F,F),g.intensity=1.8+Math.sin(R*4.5)*.4,m.intensity=1.3+Math.cos(R*4)*.3,l.opacity=.12+Math.sin(R*4.2)*.07,a.rotation.x+=O+Math.sin(R*1.8)*.0016,a.rotation.y+=G,a.rotation.z+=$+Math.cos(R*1.5)*.0016,c.rotation.copy(a.rotation),d.rotation.copy(a.rotation),n(R),s.id==="space"){const B=p.children[0];B&&(B.rotation.y+=.007,B.rotation.x+=.004)}else if(s.id==="mind")p.children.forEach((B,Z)=>{B.rotation.y+=Z===0?.009:-.009,B.rotation.z+=.004});else if(s.id==="reality")p.children.forEach(B=>{B.userData&&(B.rotation.x+=B.userData.speedX*1.8,B.rotation.y+=B.userData.speedY*1.8)});else if(s.id==="power"){const B=p.children[0];B&&(B.rotation.y+=.015,B.rotation.z+=.005)}else if(s.id==="time"){const B=p.children[0];B&&B.children.length>=2&&(B.children[0].rotation.z+=.012,B.children[1].rotation.z-=.008)}else if(s.id==="soul"){const B=p.children[0];B&&B.children.length>=2&&(B.children[0].rotation.y+=.009,B.children[1].rotation.y-=.009)}const k=A.geometry.attributes.position.array,q=k.length/3;for(let B=0;B<q;B++){const Z=k[B*3],te=k[B*3+2],Q=.006;k[B*3]=Z*Math.cos(Q)-te*Math.sin(Q),k[B*3+2]=Z*Math.sin(Q)+te*Math.cos(Q)}A.geometry.attributes.position.needsUpdate=!0}}}class wv{constructor(){this.ctx=null,this.isMuted=!1,this.masterGain=null,this.compressor=null,this.stoneFrequencies={space:[261.63,523.25,1046.5],mind:[293.66,587.33,1174.66],reality:[329.63,659.25,987.77],power:[369.99,739.99,1479.98],time:[392,783.99,1567.98],soul:[440,880,1760]},this.initialized=!1}init(){if(!this.initialized)try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.7,this.ctx.currentTime),this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.setValueAtTime(-14,this.ctx.currentTime),this.compressor.knee.setValueAtTime(8,this.ctx.currentTime),this.compressor.ratio.setValueAtTime(6,this.ctx.currentTime),this.compressor.attack.setValueAtTime(.003,this.ctx.currentTime),this.compressor.release.setValueAtTime(.2,this.ctx.currentTime),this.masterGain.connect(this.compressor),this.compressor.connect(this.ctx.destination),this.initialized=!0}catch(e){console.warn("Web Audio could not be initialized:",e)}}toggleMute(){if(this.initialized?this.isMuted=!this.isMuted:(this.init(),this.isMuted=!1),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.masterGain&&this.ctx){const e=this.isMuted?0:.7;this.masterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.04)}return!this.isMuted}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){!this.isMuted&&this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}destroy(){if(this.ctx){try{this.ctx.close()}catch{}this.ctx=null}this.initialized=!1}playStoneChime(e){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.stoneFrequencies[e]||[440,880,1320],n=this.ctx.currentTime;t.forEach((i,r)=>{const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type=r===0?"sine":"triangle",a.frequency.setValueAtTime(i,n),r>0&&a.detune.setValueAtTime(r%2===0?3:-3,n);const l=.24/(r+1);o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(l,n+.03),o.gain.exponentialRampToValueAtTime(1e-4,n+2+r*.35),a.connect(o),o.connect(this.masterGain),a.start(n),a.stop(n+2.6)})}playEnergyPulse(){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter();t.type="sawtooth",t.frequency.setValueAtTime(65,e),t.frequency.exponentialRampToValueAtTime(440,e+.3),t.frequency.exponentialRampToValueAtTime(110,e+.8),i.type="bandpass",i.frequency.setValueAtTime(220,e),i.frequency.linearRampToValueAtTime(1100,e+.3),i.frequency.exponentialRampToValueAtTime(180,e+.8),i.Q.setValueAtTime(4,e),n.gain.setValueAtTime(.01,e),n.gain.linearRampToValueAtTime(.28,e+.12),n.gain.exponentialRampToValueAtTime(.001,e+.95),t.connect(i),i.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+1)}playConvergenceChord(){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(160,e),t.frequency.exponentialRampToValueAtTime(36,e+1.2),n.gain.setValueAtTime(.4,e),n.gain.exponentialRampToValueAtTime(.001,e+2.2),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+2.3),[261.63,293.66,329.63,369.99,392,440].forEach((r,a)=>{const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(r,e+a*.04),l.gain.setValueAtTime(.001,e+a*.04),l.gain.linearRampToValueAtTime(.1,e+.25+a*.04),l.gain.exponentialRampToValueAtTime(1e-4,e+3.2),o.connect(l),l.connect(this.masterGain),o.start(e+a*.04),o.stop(e+3.4)})}playClick(){if(!this.ctx||this.isMuted)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(1200,e),t.frequency.exponentialRampToValueAtTime(400,e+.03),n.gain.setValueAtTime(.07,e),n.gain.exponentialRampToValueAtTime(.001,e+.035),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.04)}playChime(e=440,t=.4){if(!(!this.ctx||this.isMuted))try{this.ctx.state==="suspended"&&this.ctx.resume();const n=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(e,n),r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.16,n+.02),r.gain.exponentialRampToValueAtTime(1e-4,n+t),i.connect(r),r.connect(this.masterGain),i.start(n),i.stop(n+t+.05)}catch{}}}const Ve=new wv;function Av(){const s=document.getElementById("modal-register"),e=document.getElementById("modal-success"),t=document.getElementById("btn-close-register"),n=document.getElementById("btn-close-success"),i=document.getElementById("btn-nav-register"),r=document.getElementById("btn-wield-stone"),a=document.getElementById("form-registration"),o=document.getElementById("reg-domain-badge"),l=document.querySelectorAll(".domain-radio-card"),c=document.querySelectorAll('input[name="teamSize"]'),h=document.getElementById("member-4-card"),d=h?h.querySelectorAll("input"):[],u=document.getElementById("qr-img"),f=document.getElementById("qr-amount-text"),_=document.getElementById("total-fee-display"),g=document.getElementById("reg-screenshot"),m=document.getElementById("ocr-banner"),p=document.getElementById("ocr-body"),v=document.getElementById("ocr-icon"),x=document.getElementById("ocr-title"),M=document.getElementById("reg-utr"),w=document.getElementById("reg-pay-phone"),b=document.getElementById("utr-check-badge"),T=document.getElementById("reg-error-msg"),L=document.getElementById("btn-submit-registration"),y=document.getElementById("reg-spinner");let A=!1,O=null,G=!1,$=null,R=!1;function N(E){if(!E||typeof E!="string")return!0;const S=E.trim();return/^(\d)\1+$/.test(S)?!0:["123456789012","12345678901","012345678901","987654321098","112233445566","998877665544","123456123456"].includes(S)}function F(E,S=.4){try{Ve&&typeof Ve.playChime=="function"&&Ve.playChime(E,S)}catch{}}function k(E="mind"){if(!s)return;s.classList.add("is-open"),s.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden";const S=document.querySelector(`input[name="domain"][value="${E}"]`);S&&(S.checked=!0,B(E));const U=document.querySelector('input[name="teamSize"]:checked'),Y=U?parseInt(U.value,10):3;u&&(u.src=Y===4?"/4mem.png":"/3mem.png");const J=Y*349;f&&(f.textContent=`PAY ₹${J.toLocaleString("en-IN")}`),_&&(_.textContent=`₹${J.toLocaleString("en-IN")}`),F(580)}function q(){s&&(s.classList.remove("is-open"),s.setAttribute("aria-hidden","true"),document.body.classList.contains("timeline-unlocked")?document.body.style.overflowY="auto":document.body.style.overflow="hidden")}function B(E){const S=Vt.find(U=>U.id===E)||Vt[0];o&&(o.textContent=`DOMAIN: ${S.name} // ${S.domain}`,o.style.color=S.colorHex),l.forEach(U=>{const Y=U.getAttribute("data-domain")===E;U.classList.toggle("selected",Y)})}r&&r.addEventListener("click",()=>{const E=r.getAttribute("data-stone-id")||"mind";Ve.playClick(),k(E)}),i&&i.addEventListener("click",()=>{Ve.playClick(),k("mind")}),t&&t.addEventListener("click",()=>{Ve.playClick(),q()}),n&&n.addEventListener("click",()=>{Ve.playClick(),e==null||e.classList.remove("is-open"),e==null||e.setAttribute("aria-hidden","true")}),window.addEventListener("click",E=>{E.target===s&&q(),E.target===e&&(e.classList.remove("is-open"),e.setAttribute("aria-hidden","true"))}),l.forEach(E=>{E.addEventListener("click",()=>{const S=E.getAttribute("data-domain"),U=E.querySelector('input[type="radio"]');U&&(U.checked=!0),B(S),Ve.playStoneChime(S)})}),c.forEach(E=>{E.addEventListener("change",()=>{Ve.playClick();const S=parseInt(E.value,10),U=S*349;u&&(u.src=S===4?"/4mem.png":"/3mem.png"),f&&(f.textContent=`PAY ₹${U.toLocaleString("en-IN")}`),_&&(_.textContent=`₹${U.toLocaleString("en-IN")}`),S===4?(h&&(h.style.display="block"),d.forEach(Y=>Y.setAttribute("required","true"))):(h&&(h.style.display="none"),d.forEach(Y=>{Y.removeAttribute("required"),Y.value=""}))})});async function Z(E){const S=(E||"").trim();if(!S){b&&(b.textContent="",b.className="utr-status-badge"),G=!1;return}try{(await(await fetch(`/api/verify-utr?utr=${encodeURIComponent(S)}`)).json()).exists?(G=!1,b&&(b.textContent="❌ Already Registered!",b.className="utr-status-badge error"),xe(M,"This UTR has already been registered with another team.")):(G=!0,ze(M),b&&(b.textContent="",b.className="utr-status-badge"))}catch(U){console.warn("UTR verify network warning:",U),G=!0}}M&&M.addEventListener("input",E=>{clearTimeout($),$=setTimeout(()=>{Z(E.target.value)},300)});async function te(){return window.Tesseract?window.Tesseract:new Promise((E,S)=>{const U=document.querySelector('script[src*="tesseract"]');if(U){if(window.Tesseract)return E(window.Tesseract);U.addEventListener("load",()=>E(window.Tesseract)),U.addEventListener("error",()=>S(new Error("Failed to load OCR engine")));return}const Y=document.createElement("script");Y.src="/tesseract/tesseract.min.js",Y.onload=()=>E(window.Tesseract),Y.onerror=()=>S(new Error("Failed to load OCR engine")),document.head.appendChild(Y)})}async function Q(E){return new Promise((S,U)=>{try{const Y=new Image,J=URL.createObjectURL(E);Y.onload=()=>{URL.revokeObjectURL(J);const ne=Y.naturalWidth||Y.width,pe=Y.naturalHeight||Y.height,le=ne>=300&&pe>=200,ue=ne>=200&&pe>=300;if(!le&&!ue)return U(new Error(`IMAGE_TOO_SMALL:${ne}x${pe}`));const _e=1200;let Se=ne,ee=pe;(Se>_e||ee>_e)&&(Se>ee?(ee=Math.round(ee*_e/Se),Se=_e):(Se=Math.round(Se*_e/ee),ee=_e));const Fe=document.createElement("canvas");Fe.width=Se,Fe.height=ee;const Ne=Fe.getContext("2d");if(!Ne)return S(E);Ne.drawImage(Y,0,0,Se,ee),Fe.toBlob(Pe=>{S(Pe||E)},"image/jpeg",.92)},Y.onerror=()=>S(E),Y.src=J}catch{S(E)}})}const W=15*1024,K=20*1024*1024,ae=["image/png","image/jpeg","image/jpg","image/webp"];g&&g.addEventListener("change",async E=>{var U;const S=E.target.files[0];if(S){if(A=!1,O=null,R=!0,S.size<W){oe(`❌ Image file too small (${(S.size/1024).toFixed(1)} KB). Logos, icons, and small images are not accepted. Please upload an authentic payment receipt screenshot.`),g.value="",R=!1,g.classList.add("is-invalid"),m&&(m.style.display="flex",m.className="ocr-detection-banner error",v&&(v.textContent="❌"),x&&(x.textContent="Image File Too Small"),p&&(p.innerHTML=`<strong>Invalid Image:</strong> The file is too small (${(S.size/1024).toFixed(1)} KB) to be a payment receipt. Logos, icons, and small graphics are rejected.`));return}if(S.size>K){const Y=(S.size/1048576).toFixed(1);oe(`❌ File size (${Y} MB) exceeds the 20MB limit. Please upload an image under 20MB.`),g.value="",R=!1,g.classList.add("is-invalid"),m&&(m.style.display="none");return}if(!ae.includes(S.type)){oe(`❌ Invalid file format (${S.type||"unknown"}). Please upload a PNG, JPG, or WEBP receipt screenshot.`),g.value="",R=!1,g.classList.add("is-invalid"),m&&(m.style.display="none");return}m&&(m.style.display="flex",m.className="ocr-detection-banner scanning",v&&(v.textContent="🔍"),x&&(x.textContent="Analyzing Receipt Authenticity..."),p&&(p.innerHTML='<span class="ocr-scanning">Verifying payment indicators & reading 12-digit UPI UTR...</span>'));try{const Y=await Q(S),J=await te();if(!J)throw new Error("OCR not available");const ne=await J.createWorker("eng",1,{workerPath:"/tesseract/worker.min.js",corePath:"/tesseract/tesseract-core.wasm.js",langPath:"/tesseract",gzip:!0,logger:Je=>{if(Je.status==="recognizing text"&&Je.progress){const Lt=Math.round(Je.progress*100);p&&(p.innerHTML=`<span class="ocr-scanning">Scanning receipt contents: ${Lt}%...</span>`)}}}),pe=new Promise((Je,Lt)=>setTimeout(()=>Lt(new Error("OCR Timeout")),45e3)),le=ne.recognize(Y),ue=await Promise.race([le,pe]);await ne.terminate().catch(()=>{});const _e=(((U=ue==null?void 0:ue.data)==null?void 0:U.text)||"").trim(),Se=_e.toLowerCase(),ee=["google pay","gpay","g pay","g-pay","phonepe","phone pe","paytm","pay tm","bhim","cred","navi","amazon pay","amazonpay","whatsapp pay","mobikwik","freecharge","airtel payments","jupiter","fi money","fampay","slice","super.money","payzapp","bhim upi","omni card"],Fe=["state bank","sbi","hdfc","icici","axis bank","axis","kotak","canara","bank of baroda","punjab national","pnb","union bank","idfc","indusind","yes bank","npci","upi","imps","neft","rtgs","netbanking","central bank","bank of india","indian bank","uco bank","bank of maharashtra"],Ne=["payment successful","transaction successful","paid successfully","transfer successful","payment completed","paid to","payment to","payment of","money sent","sent to","debited from","credited to","bill payment","payment details","transaction details","banking name","funds transfer","completed","successful","transferred to","transferred","sent successfully","received by","remittance"],Pe=["upi ref","upi transaction id","upi transaction","google transaction id","phonepe transaction id","paytm order id","wallet txn id","ref no","reference no","transaction id","txn id","rrn","utr","order id","utr no","ref number","reference id","transfer details"],Te=["₹","inr","rs.","rs ","rupees","rs:"],de=["@upi","@okhdfcbank","@okaxis","@oksbi","@okicici","@ybl","@ibl","@axl","@paytm","@apl","@ikwik","@barodampay","@idbi","@federal","@kotak"],P=[{type:"Code & Development Screen",keywords:["github.com","stackoverflow","localhost","syntax error","uncaught error","traceback","stack trace","console.log","npm install","terminal","docker","vscode","exception in thread","trying to access array offset","undefined index","fatal error"]},{type:"Academic Portal / Exam Document",keywords:["nptel","candidate_login","noc candidate","hall ticket","admit card","marksheet","semester","roll number","registration number:","grade card","question paper","curriculum vitae","resume","provisional certificate","login/index.php"]},{type:"Logo or Graphic Illustration",keywords:["stock vector","getty images","shutterstock","freepik","watermark","clipart","wallpaper","vector illustration","graphic design","behance","dribbble","brand identity","logo design"]},{type:"Social Media / Entertainment App",keywords:["instagram","facebook","snapchat","tiktok","netflix","spotify","youtube","reels","retweet"]},{type:"E-commerce Shopping / Travel Ticket",keywords:["add to cart","shopping cart","buy now","item details","boarding pass","flight booking","train ticket","pnr status","irctc"]}];let re=null;const ve=_e.match(/(?:utr|upi\s*ref(?:erence)?(?:\s*no)?|rrn|txn\s*(?:id|no)?|transaction\s*(?:id|ref|no)?)[\s:.-]*([0-9\s-]{12,18})\b/i);if(ve&&ve[1]){const Je=ve[1].replace(/[\s-]/g,"");Je.length===12&&!N(Je)&&(re=Je)}if(!re){const Je=_e.match(/\b([0-9]{4}[\s-][0-9]{4}[\s-][0-9]{4})\b/);if(Je&&Je[1]){const Lt=Je[1].replace(/[\s-]/g,"");Lt.length===12&&!N(Lt)&&(re=Lt)}}re||(re=(_e.match(/\b([0-9]{12})\b/g)||[]).find(Lt=>!N(Lt))||null);const fe=_e.match(/(?:phone|mobile|mob|contact|ph|payer\s*phone|remitter\s*mobile)[\s:.-]*(?:\+91[\s-]?)?([6-9][0-9]{9})\b/i);fe&&fe[1]&&w&&!w.value&&(w.value=fe[1]);const se=ee.filter(Je=>Se.includes(Je)),D=Fe.filter(Je=>Se.includes(Je)),ie=Ne.filter(Je=>Se.includes(Je)),ce=Pe.filter(Je=>Se.includes(Je)),Le=Te.filter(Je=>Se.includes(Je)),Ae=de.filter(Je=>Se.includes(Je));let ke=se.length*2+D.length*1+ie.length*2+ce.length*2+Le.length*1+Ae.length*2;re&&(ke+=3);let Ge=null;for(const Je of P){const Lt=Je.keywords.find(Bn=>Se.includes(Bn));if(Lt){Ge={category:Je.type,keyword:Lt};break}}let Qe=!0,nt="";const je=!!(re&&!N(re)),lt=ie.length>0,Gt=se.length>0||D.length>0||ce.length>0;if(_e.length<15?(Qe=!1,nt="No payment text found. Camera photos, logos, and plain graphics without transaction details are not allowed"):Ge&&ke<6?(Qe=!1,nt=`Image identified as a ${Ge.category} (matched '${Ge.keyword}')`):je&&(lt||Gt||ke>=3)?Qe=!0:!je&&!lt?(Qe=!1,nt="Missing payment action or transaction status (e.g. Paid to, Successful, Debited). Logos and normal photos are not accepted"):!je&&ke<4&&(Qe=!1,nt="Image does not contain sufficient payment markers. Only authentic Google Pay, PhonePe, Paytm, or bank receipts are accepted"),!Qe){A=!1,O=null,R=!1,g.value="",g.classList.add("is-invalid"),m&&(m.className="ocr-detection-banner error",v&&(v.textContent="❌"),x&&(x.textContent="Receipt Verification FAILED"),p&&(p.innerHTML=`<strong>Invalid Receipt:</strong> ${nt}. Please upload an authentic screenshot of your payment receipt.`)),F(220),oe(`❌ Verification Failed: ${nt}.`);return}A=!0,O=re,R=!1,g.classList.remove("is-invalid"),m&&(m.className="ocr-detection-banner success",v&&(v.textContent="✅"),x&&(x.textContent="Authentic Receipt Verified"),p&&(p.innerHTML="Genuine payment receipt verified. Please enter your <strong>12-digit bank UTR number</strong> below.")),M&&M.value.trim()?Z(M.value):b&&(b.textContent="",b.className="utr-status-badge"),F(720);return}catch(Y){console.error("OCR processing error / rejected:",Y),A=!1,O=null,R=!1,g.value="",g.classList.add("is-invalid");let J="Could not verify image as an authentic payment receipt.";Y.message&&Y.message.startsWith("IMAGE_TOO_SMALL")?J="Image dimensions are too small to be a payment receipt screenshot. Logos, icons, and small images are not accepted.":Y.message&&Y.message.includes("Timeout")&&(J="OCR scan timed out. Please upload a clearer payment screenshot."),m&&(m.className="ocr-detection-banner error",v&&(v.textContent="❌"),x&&(x.textContent="Receipt Verification Rejected"),p&&(p.innerHTML=`<strong>Verification Failed:</strong> ${J} Please upload an authentic Google Pay, PhonePe, or Paytm receipt.`)),F(220),oe(`❌ ${J}`)}}});const Ee=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;function ye(E){if(!E)return"";let S=E.replace(/\D/g,"");return S.length===12&&S.startsWith("91")?S=S.slice(2):S.length===11&&S.startsWith("0")&&(S=S.slice(1)),S}function Ie(E){return typeof E=="string"&&Ee.test(E.trim())}function Re(E){const S=ye(E);return S.length>=10&&S.length<=14}function xe(E,S){if(!E)return;E.classList.add("is-invalid");let U=E.parentElement,Y=U.querySelector(".field-error-hint");Y||(Y=document.createElement("span"),Y.className="field-error-hint",U.appendChild(Y)),Y.textContent=S}function ze(E){if(!E)return;E.classList.remove("is-invalid");const S=E.parentElement.querySelector(".field-error-hint");S&&S.remove()}async function H(E,S,U,Y){if(S)try{const J=E==="email"?`email=${encodeURIComponent(S.trim().toLowerCase())}`:`phone=${encodeURIComponent(S)}`,pe=await(await fetch(`/api/verify-participant?${J}`)).json();pe.exists&&(xe(U,`❌ Already registered in team '${pe.teamName}' (${pe.teamId})`),F(220))}catch{}}[{id:"reg-leader-email",type:"email",role:"Team Leader"},{id:"reg-leader-phone",type:"phone",role:"Team Leader"},{id:"reg-m2-email",type:"email",role:"Member 02"},{id:"reg-m2-phone",type:"phone",role:"Member 02"},{id:"reg-m3-email",type:"email",role:"Member 03"},{id:"reg-m3-phone",type:"phone",role:"Member 03"},{id:"reg-m4-email",type:"email",role:"Member 04"},{id:"reg-m4-phone",type:"phone",role:"Member 04"}].forEach(E=>{const S=document.getElementById(E.id);S&&(S.addEventListener("input",()=>{ze(S)}),S.addEventListener("blur",()=>{const U=S.value.trim();if(U){if(E.type==="email"){if(!Ie(U)){xe(S,"Invalid email address (e.g. name@domain.com)");return}H("email",U,S,E.role)}else if(E.type==="phone"){if(!Re(U)){xe(S,"Enter a valid 10-digit mobile number");return}H("phone",U,S,E.role)}}}))}),a&&a.addEventListener("submit",async E=>{var ce,Le,Ae,ke,Ge,Qe,nt,je,lt,Gt,Je,Lt,Bn,Fr,Mi,Br,zr,xs,vs,ys,C,z,X,j,V,me,we,De,Ue,Xe,Be,He,ut;E.preventDefault(),T&&(T.style.display="none"),document.querySelectorAll(".form-input.is-invalid").forEach(ze);const S=(ce=document.getElementById("reg-team-name"))==null?void 0:ce.value.trim(),U=(Le=document.getElementById("reg-college"))==null?void 0:Le.value.trim(),Y=((Ae=document.querySelector('input[name="domain"]:checked'))==null?void 0:Ae.value)||"mind",J=((Ge=(ke=document.getElementById("reg-tech-stack"))==null?void 0:ke.value)==null?void 0:Ge.trim())||"",ne=((Qe=document.querySelector('input[name="teamSize"]:checked'))==null?void 0:Qe.value)||"3",pe=(nt=document.getElementById("reg-leader-name"))==null?void 0:nt.value.trim(),le=(je=document.getElementById("reg-leader-phone"))==null?void 0:je.value.trim(),ue=(lt=document.getElementById("reg-leader-email"))==null?void 0:lt.value.trim(),_e=(Gt=document.getElementById("reg-team-password"))==null?void 0:Gt.value,Se=M==null?void 0:M.value.trim(),ee=(w==null?void 0:w.value.trim())||le,Fe=g==null?void 0:g.files[0];if(!S){oe("Please enter your Squad / Team Name."),(Je=document.getElementById("reg-team-name"))==null||Je.focus();return}if(!U){oe("Please enter your College or Institution name."),(Lt=document.getElementById("reg-college"))==null||Lt.focus();return}if(!pe){oe("Please enter Leader Full Name."),(Bn=document.getElementById("reg-leader-name"))==null||Bn.focus();return}if(!Ie(ue)){oe("Please enter a valid Leader Email address (e.g. name@domain.com).");const ge=document.getElementById("reg-leader-email");xe(ge,"Invalid email format"),ge==null||ge.focus();return}if(!Re(le)){oe("Please enter a valid 10-digit Leader Mobile Number.");const ge=document.getElementById("reg-leader-phone");xe(ge,"Enter a valid 10-digit number"),ge==null||ge.focus();return}if(!_e||_e.length<6){oe("Team Password must be at least 6 characters (used for Leader Portal login)."),(Fr=document.getElementById("reg-team-password"))==null||Fr.focus();return}const Ne=(Mi=document.getElementById("reg-m2-name"))==null?void 0:Mi.value.trim(),Pe=(Br=document.getElementById("reg-m2-email"))==null?void 0:Br.value.trim(),Te=(zr=document.getElementById("reg-m2-phone"))==null?void 0:zr.value.trim();if(!Ne){oe("Member 02 Full Name is required."),(xs=document.getElementById("reg-m2-name"))==null||xs.focus();return}if(!Ie(Pe)){oe("Member 02 has an invalid email format.");const ge=document.getElementById("reg-m2-email");xe(ge,"Invalid email format"),ge==null||ge.focus();return}if(!Re(Te)){oe("Member 02 requires a valid 10-digit phone number.");const ge=document.getElementById("reg-m2-phone");xe(ge,"Enter a valid 10-digit number"),ge==null||ge.focus();return}const de=(vs=document.getElementById("reg-m3-name"))==null?void 0:vs.value.trim(),P=(ys=document.getElementById("reg-m3-email"))==null?void 0:ys.value.trim(),re=(C=document.getElementById("reg-m3-phone"))==null?void 0:C.value.trim();if(!de){oe("Member 03 Full Name is required."),(z=document.getElementById("reg-m3-name"))==null||z.focus();return}if(!Ie(P)){oe("Member 03 has an invalid email format.");const ge=document.getElementById("reg-m3-email");xe(ge,"Invalid email format"),ge==null||ge.focus();return}if(!Re(re)){oe("Member 03 requires a valid 10-digit phone number.");const ge=document.getElementById("reg-m3-phone");xe(ge,"Enter a valid 10-digit number"),ge==null||ge.focus();return}const ve=[{name:Ne,email:Pe,phone:Te},{name:de,email:P,phone:re}];if(ne==="4"){const ge=(X=document.getElementById("reg-m4-name"))==null?void 0:X.value.trim(),et=(j=document.getElementById("reg-m4-email"))==null?void 0:j.value.trim(),Tt=(V=document.getElementById("reg-m4-phone"))==null?void 0:V.value.trim();if(!ge){oe("Member 04 Full Name is required for 4-member squads."),(me=document.getElementById("reg-m4-name"))==null||me.focus();return}if(!Ie(et)){oe("Member 04 has an invalid email format.");const Ke=document.getElementById("reg-m4-email");xe(Ke,"Invalid email format"),Ke==null||Ke.focus();return}if(!Re(Tt)){oe("Member 04 requires a valid 10-digit phone number.");const Ke=document.getElementById("reg-m4-phone");xe(Ke,"Enter a valid 10-digit number"),Ke==null||Ke.focus();return}ve.push({name:ge,email:et,phone:Tt})}const fe=[{role:"Team Leader",email:ue.toLowerCase(),phone:ye(le),el:document.getElementById("reg-leader-email"),phoneEl:document.getElementById("reg-leader-phone")},{role:"Member 02",email:Pe.toLowerCase(),phone:ye(Te),el:document.getElementById("reg-m2-email"),phoneEl:document.getElementById("reg-m2-phone")},{role:"Member 03",email:P.toLowerCase(),phone:ye(re),el:document.getElementById("reg-m3-email"),phoneEl:document.getElementById("reg-m3-phone")}];ne==="4"&&fe.push({role:"Member 04",email:ve[2].email.toLowerCase(),phone:ye(ve[2].phone),el:document.getElementById("reg-m4-email"),phoneEl:document.getElementById("reg-m4-phone")});const se=new Map;for(const ge of fe){if(se.has(ge.email)){const et=se.get(ge.email),Tt=`Duplicate email '${ge.email}' in squad (${et} and ${ge.role}). Every member must have a unique email.`;oe(Tt),xe(ge.el,"Duplicate email in squad"),(we=ge.el)==null||we.focus();return}se.set(ge.email,ge.role)}const D=new Map;for(const ge of fe){if(D.has(ge.phone)){const Tt=`Duplicate mobile number in squad (${D.get(ge.phone)} and ${ge.role}). Every member must have their own unique phone number.`;oe(Tt),xe(ge.phoneEl,"Duplicate phone in squad"),(De=ge.phoneEl)==null||De.focus();return}D.set(ge.phone,ge.role)}if(R){oe("⏳ AI OCR is currently analyzing your receipt screenshot. Please wait a moment...");return}if(!Fe){oe("Please upload your payment confirmation screenshot."),(Ue=document.getElementById("reg-screenshot"))==null||Ue.focus();return}if(Fe.size<W){oe(`Image file too small (${(Fe.size/1024).toFixed(1)} KB). Logos, icons, and small images are not accepted. Please upload an authentic receipt screenshot.`),(Xe=document.getElementById("reg-screenshot"))==null||Xe.focus();return}if(Fe.size>K){const ge=(Fe.size/1048576).toFixed(1);oe(`Payment screenshot file size (${ge} MB) exceeds the 20MB limit. Please upload an image under 20MB.`),(Be=document.getElementById("reg-screenshot"))==null||Be.focus();return}if(!A){oe("❌ Valid Payment Receipt Required: The uploaded image was not verified as an authentic payment receipt. Logos, icons, and non-payment photos are not allowed. Please upload an authentic receipt from Google Pay, PhonePe, Paytm, or netbanking."),(He=document.getElementById("reg-screenshot"))==null||He.focus();return}if(!Se){oe("Please enter your payment bank UTR / transaction reference number."),(ut=document.getElementById("reg-utr"))==null||ut.focus();return}Se.trim();const ie=new FormData;ie.append("teamName",S),ie.append("college",U),ie.append("preferredDomain",Y),ie.append("techStack",J),ie.append("teamSize",ne),ie.append("teamPassword",_e),ie.append("leaderName",pe),ie.append("leaderPhone",le),ie.append("leaderEmail",ue),ie.append("paymentUtr",Se),ie.append("paymentPhone",ee),ie.append("members",JSON.stringify(ve)),ie.append("paymentScreenshot",Fe),L&&(L.disabled=!0),y&&(y.style.display="inline-block");try{const ge=await fetch("/api/register",{method:"POST",body:ie}),et=await ge.json();if(!ge.ok||!et.success)throw new Error(et.error||"Registration failed. Please verify your details.");q(),Ve.playConvergenceChord();const Tt=document.getElementById("suc-team-id"),Ke=document.getElementById("suc-team-name"),qe=document.getElementById("suc-domain"),qi=document.getElementById("suc-email"),ht=document.getElementById("suc-amount");Tt&&(Tt.textContent=et.team.id),Ke&&(Ke.textContent=et.team.teamName),qe&&(qe.textContent=`${et.team.preferredDomain.toUpperCase()} STONE`),qi&&(qi.textContent=et.team.leaderEmail),ht&&(ht.textContent=`₹${et.team.amount.toLocaleString("en-IN")}`),e&&(e.classList.add("is-open"),e.setAttribute("aria-hidden","false")),a.reset(),A=!1,O=null,G=!1,R=!1,m&&(m.style.display="none"),u&&(u.src="/3mem.png"),f&&(f.textContent="PAY ₹1,047"),_&&(_.textContent="₹1,047"),h&&(h.style.display="none"),d.forEach(Ln=>{Ln.removeAttribute("required"),Ln.value=""})}catch(ge){oe(ge.message)}finally{L&&(L.disabled=!1),y&&(y.style.display="none")}});function oe(E){T&&(T.textContent=E,T.style.display="block",F(220))}document.querySelectorAll(".faq-question").forEach(E=>{E.addEventListener("click",()=>{Ve.playClick(),E.parentElement.classList.toggle("active")})});const Me=document.getElementById("btn-portals"),it=document.getElementById("portals-menu");Me&&it&&(Me.addEventListener("click",E=>{E.stopPropagation(),it.classList.toggle("is-visible"),Ve.playClick()}),document.addEventListener("click",E=>{!Me.contains(E.target)&&!it.contains(E.target)&&it.classList.remove("is-visible")})),document.querySelectorAll(".hud-nav a").forEach(E=>{E.addEventListener("click",S=>{S.preventDefault(),Ve.playClick();const U=E.getAttribute("href").substring(1);if(U==="showcase-section"){window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{document.body.classList.remove("timeline-unlocked")},400);return}const Y=document.getElementById(U);Y&&(document.body.classList.contains("timeline-unlocked")||document.body.classList.add("timeline-unlocked"),setTimeout(()=>{Y.scrollIntoView({behavior:"smooth"})},60))})})}const Cv="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",Bh=8,zh=22,bn=(s,e,t,n)=>s+(e-s)*(1-Math.exp(-t/n)),Rv=s=>{let e=String(s||"").replace("#","");e.length===3&&(e=e.replace(/./g,n=>n+n));const t=parseInt(e.slice(0,6),16);return Number.isNaN(t)?[255,255,255]:[t>>16&255,t>>8&255,t&255]},Wn=(s,e)=>{const[t,n,i]=Rv(s);return`rgba(${t}, ${n}, ${i}, ${e})`},fr=(...s)=>{let e=2166136261;for(const t of s)e=Math.imul(e^(t|0),16777619),e^=e>>>13,e=Math.imul(e,1540483477),e^=e>>>15;return(e>>>0)/4294967296},kh=s=>s>0?`+${s}`:s<0?`−${-s}`:"0";class Pv{constructor(e,t={}){ti(this,"tick",e=>{this.raf=0;const t=this.settings;if(!t)return;const n=Math.min(.05,Math.max(.001,(e-this.last)/1e3));this.last=e;const i=this.ensureLayout(t),r=t.sweep&&!this.reducedMotion&&!this.pointer.inside&&this.dragging<0;r&&(this.clock+=n*t.speed),this.pulse+=n;let a=this.pointer.x,o=this.pointer.y;r&&(a=i.left+(i.right-i.left)*(.5-.5*Math.cos(this.clock*.45)),o=i.top+(i.bottom-i.top)*(.45+.1*Math.sin(this.clock*.8)));const l=this.pointer.inside||r||this.dragging>=0;if(l&&!this.placed&&(this.lens.x=a,this.lens.y=o),l){const u=this.pointer.inside?.05:.22;this.lens.x=bn(this.lens.x,a,n,u),this.lens.y=bn(this.lens.y,o,n,u)}this.placed=l,this.presence=bn(this.presence,t.reveal==="area"&&l&&this.dragging<0?1:0,n,.16);let c=!1;this.glyphs.forEach((u,f)=>{if(f===this.dragging){u.offset.x=bn(u.offset.x,this.pointer.x-this.grab.x,n,.03),u.offset.y=bn(u.offset.y,this.pointer.y-this.grab.y,n,.03),u.velocity.x=0,u.velocity.y=0,c=!0;return}const{offset:_,velocity:g}=u;if(Math.abs(_.x)<.05&&Math.abs(_.y)<.05&&Math.hypot(g.x,g.y)<.5){_.x=0,_.y=0,g.x=0,g.y=0;return}g.x+=(-320*_.x-zh*g.x)*n,g.y+=(-320*_.y-zh*g.y)*n,_.x+=g.x*n,_.y+=g.y*n,c=!0});const h=this.dragging>=0?this.dragging:l?this.glyphAt(this.lens.x,this.lens.y):-1;if(h>=0&&t.selection){const u=this.glyphs[h],f=u.box.x1+u.offset.x-6,_=u.box.y1+u.offset.y-6,g=u.box.x2+u.offset.x+6,m=u.box.y2+u.offset.y+6;(this.frame.index<0||this.frame.alpha<.02)&&(this.frame.x1=f,this.frame.y1=_,this.frame.x2=g,this.frame.y2=m);const p=h===this.dragging?.02:.08;this.frame.x1=bn(this.frame.x1,f,n,p),this.frame.y1=bn(this.frame.y1,_,n,p),this.frame.x2=bn(this.frame.x2,g,n,p),this.frame.y2=bn(this.frame.y2,m,n,p),this.frame.index=h}this.frame.alpha=bn(this.frame.alpha,h>=0&&t.selection?1:0,n,.1),this.glyphs.forEach((u,f)=>{const _=t.reveal==="letter"&&f===h&&f!==this.dragging?1:0;u.outline=bn(u.outline,_,n,.09),Math.abs(u.outline-_)>.002?c=!0:u.outline=_}),t.draggable&&(this.container.style.cursor=this.dragging>=0?"grabbing":h>=0&&this.pointer.inside?"grab":""),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.globalCompositeOperation="source-over",this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(const u of this.glyphs){const f=Math.hypot(u.offset.x,u.offset.y);f>1&&(this.ctx.globalAlpha=Math.min(1,f/24)*.55,this.blit(this.ctx,u.dashes,0,0,0,0),this.ctx.globalAlpha=1)}for(const u of this.glyphs)u.outline<.999&&(this.ctx.globalAlpha=1-u.outline,this.blit(this.ctx,u.fill,u.offset.x,u.offset.y,0,0)),u.outline>.001&&(this.ctx.globalAlpha=u.outline,this.blit(this.ctx,u.dashes,u.offset.x,u.offset.y,0,0)),this.ctx.globalAlpha=1;this.presence>.001&&this.drawReveal(t),this.drawFrame(t);const d=c||Math.abs(this.presence-(t.reveal==="area"&&l&&this.dragging<0?1:0))>.002||this.frame.alpha>.01&&this.frame.alpha<.99;(l||d)&&this.visible&&this.alive&&(this.raf=requestAnimationFrame(this.tick))});ti(this,"wake",()=>{this.raf||!this.visible||!this.alive||(this.last=performance.now(),this.raf=requestAnimationFrame(this.tick))});ti(this,"resize",()=>{this.width=Math.max(1,this.container.clientWidth),this.height=Math.max(1,this.container.clientHeight),this.dpr=Math.min(window.devicePixelRatio||1,2),this.canvas.width=Math.round(this.width*this.dpr),this.canvas.height=Math.round(this.height*this.dpr),this.layoutKey="",this.wake()});ti(this,"onMove",e=>{this.locate(e),this.pointer.inside=!0,this.wake()});ti(this,"onLeave",()=>{this.dragging>=0||(this.pointer.inside=!1,this.wake())});ti(this,"onDown",e=>{var n,i;this.locate(e),this.pointer.inside=!0;const t=this.settings;if(t!=null&&t.draggable&&(e.pointerType!=="mouse"||e.button===0)){const r=this.glyphAt(this.pointer.x,this.pointer.y);if(r>=0){this.dragging=r,this.grab.x=this.pointer.x-this.glyphs[r].offset.x,this.grab.y=this.pointer.y-this.glyphs[r].offset.y;try{(i=(n=this.container).setPointerCapture)==null||i.call(n,e.pointerId)}catch{}}}this.wake()});ti(this,"onUp",e=>{var t,n;if(this.dragging>=0){this.dragging=-1;try{(n=(t=this.container).hasPointerCapture)!=null&&n.call(t,e.pointerId)&&this.container.releasePointerCapture(e.pointerId)}catch{}const i=this.container.getBoundingClientRect();this.pointer.inside=e.clientX>=i.left&&e.clientX<=i.right&&e.clientY>=i.top&&e.clientY<=i.bottom}this.wake()});var n;if(!e)throw new Error("TechText requires a container element.");this.container=e,this.container.classList.add("tech-text"),this.settings={text:"React Bits",fontFamily:"",fontWeight:600,fontSize:150,letterSpacing:-.05,color:"#ffffff",accentColor:"#ffffff",reach:200,softness:.7,dashLength:4,dashGap:2,strokeWidth:1.5,lineStyle:"dashed",reveal:"letter",specks:15,selection:!0,labels:!0,draggable:!0,sweep:!0,speed:1,...t},this.canvas=document.createElement("canvas"),this.canvas.className="tech-text-canvas",this.container.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.scratch=document.createElement("canvas"),this.scratchCtx=this.scratch.getContext("2d"),this.reducedMotion=(n=window.matchMedia)==null?void 0:n.call(window,"(prefers-reduced-motion: reduce)").matches,this.width=1,this.height=1,this.dpr=1,this.raf=0,this.last=performance.now(),this.visible=!0,this.alive=!0,this.layoutKey="",this.requestedFont="",this.word=null,this.glyphs=[],this.presence=0,this.clock=0,this.pulse=0,this.placed=!1,this.dragging=-1,this.pointer={x:0,y:0,inside:!1},this.grab={x:0,y:0},this.lens={x:0,y:0},this.frame={x1:0,y1:0,x2:0,y2:0,alpha:0,index:-1},this.initEvents(),this.resize(),this.wake()}family(e){return e.fontFamily||getComputedStyle(this.container).fontFamily||"sans-serif"}fontFor(e,t){return`${e.fontWeight} ${t}px ${this.family(e)}`}setFont(e,t,n){e.font=this.fontFor(t,n),"letterSpacing"in e&&(e.letterSpacing=`${t.letterSpacing*n}px`),e.textAlign="left",e.textBaseline="alphabetic"}sprite(e,t,n,i){const r=Math.ceil(e.strokeWidth*2+4),a=n.box.x1-r,o=n.box.y1-r,l=n.box.x2-n.box.x1+r*2,c=n.box.y2-n.box.y1+r*2,h=document.createElement("canvas");h.width=Math.max(1,Math.ceil(l*this.dpr)),h.height=Math.max(1,Math.ceil(c*this.dpr));const d=h.getContext("2d");return d?(d.setTransform(this.dpr,0,0,this.dpr,-a*this.dpr,-o*this.dpr),this.setFont(d,e,t.size),i?(d.lineJoin="round",d.lineWidth=e.strokeWidth*2,d.lineCap="butt",d.strokeStyle=e.color,e.lineStyle!=="solid"&&d.setLineDash([Math.max(1,e.dashLength),Math.max(1,e.dashGap)]),d.strokeText(n.char,n.x,t.baseline),d.setLineDash([]),d.globalCompositeOperation="destination-out",d.fillStyle="#000000",d.fillText(n.char,n.x,t.baseline),d.globalCompositeOperation="source-over"):(d.fillStyle=e.color,d.fillText(n.char,n.x,t.baseline)),{image:h,left:a,top:o}):{image:h,left:a,top:o}}ensureLayout(e){const t=[e.text,this.family(e),e.fontWeight,e.fontSize,e.letterSpacing,e.color,e.dashLength,e.dashGap,e.strokeWidth,e.lineStyle,this.width,this.height,this.dpr].join("|");if(t===this.layoutKey&&this.word)return this.word;this.layoutKey=t;const n=this.fontFor(e,64);document.fonts&&n!==this.requestedFont&&(this.requestedFont=n,document.fonts.load(n,e.text).then(()=>this.refreshFonts(),()=>this.refreshFonts()));const i=this.scratchCtx;this.setFont(i,e,e.fontSize);let r=i.measureText(e.text);const a=8,o=Math.min(1,(this.width-a*2)/Math.max(r.actualBoundingBoxLeft+r.actualBoundingBoxRight,1),this.height*.9/Math.max(r.actualBoundingBoxAscent+r.actualBoundingBoxDescent,1)),l=e.fontSize*o;this.setFont(i,e,l),r=i.measureText(e.text),r.actualBoundingBoxLeft+r.actualBoundingBoxRight;const c=r.actualBoundingBoxAscent+r.actualBoundingBoxDescent,h=r.actualBoundingBoxLeft+a,d=(this.height-c)/2+r.actualBoundingBoxAscent,u={size:l,baseline:d,left:h-r.actualBoundingBoxLeft,right:h+r.actualBoundingBoxRight,top:d-r.actualBoundingBoxAscent,bottom:d+r.actualBoundingBoxDescent};this.word=u;const f=Array.from(e.text),_=this.glyphs;this.glyphs=[];let g="";return f.forEach((m,p)=>{g+=m;const v=i.measureText(m),x=h+i.measureText(g).width-v.width;if(!m.trim())return;const M={char:m,x,box:{x1:x-v.actualBoundingBoxLeft,y1:d-v.actualBoundingBoxAscent,x2:x+v.actualBoundingBoxRight,y2:d+v.actualBoundingBoxDescent}},w=_[this.glyphs.length];this.glyphs.push({...M,offset:(w==null?void 0:w.char)===m?w.offset:{x:0,y:0},velocity:{x:0,y:0},outline:0,index:p,fill:this.sprite(e,u,M,!1),dashes:this.sprite(e,u,M,!0)})}),this.dragging=-1,this.frame.index=-1,u}refreshFonts(){this.layoutKey="",this.wake()}glyphAt(e,t){if(!this.word||t<this.word.top-24||t>this.word.bottom+24)return-1;let n=-1,i=1/0;return this.glyphs.forEach((r,a)=>{const o=r.box.x1+r.offset.x,l=r.box.x2+r.offset.x,c=e<o?o-e:e>l?e-l:0;c<i&&(i=c,n=a)}),i<28?n:-1}falloff(e,t,n,i,r,a){const o=Math.min(1,Math.max(0,1-a)),l=e.createRadialGradient(t,n,0,t,n,i);if(l.addColorStop(0,`rgba(0, 0, 0, ${r})`),o>.995)return l.addColorStop(.995,`rgba(0, 0, 0, ${r})`),l.addColorStop(1,"rgba(0, 0, 0, 0)"),l;for(let c=0;c<=Bh;c++){const h=c/Bh,d=h*h*(3-2*h);l.addColorStop(o+(1-o)*h,`rgba(0, 0, 0, ${r*(1-d)})`)}return l}blit(e,t,n,i,r,a){e.drawImage(t.image,Math.round((t.left+n)*this.dpr-r),Math.round((t.top+i)*this.dpr-a))}drawReveal(e){const t=e.reach*this.dpr,n=this.lens.x*this.dpr,i=this.lens.y*this.dpr;this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle=this.falloff(this.ctx,n,i,t,this.presence,e.softness),this.ctx.fillRect(n-t,i-t,t*2,t*2),this.ctx.globalCompositeOperation="source-over";const r=Math.max(0,Math.floor(n-t)),a=Math.max(0,Math.floor(i-t)),o=Math.min(this.canvas.width,Math.ceil(n+t)),l=Math.min(this.canvas.height,Math.ceil(i+t));if(o<=r||l<=a)return;const c=o-r,h=l-a;(this.scratch.width<c||this.scratch.height<h)&&(this.scratch.width=Math.max(this.scratch.width,c),this.scratch.height=Math.max(this.scratch.height,h)),this.scratchCtx.setTransform(1,0,0,1,0,0),this.scratchCtx.globalCompositeOperation="source-over",this.scratchCtx.clearRect(0,0,c,h);for(const d of this.glyphs)this.blit(this.scratchCtx,d.dashes,d.offset.x,d.offset.y,r,a);this.scratchCtx.globalCompositeOperation="destination-in",this.scratchCtx.fillStyle=this.falloff(this.scratchCtx,n-r,i-a,t,1,e.softness),this.scratchCtx.fillRect(0,0,c,h),this.scratchCtx.globalCompositeOperation="source-over",this.ctx.globalAlpha=this.presence,this.ctx.drawImage(this.scratch,0,0,c,h,r,a,c,h),this.ctx.globalAlpha=1}crisp(e){return(Math.round(e*this.dpr)+.5)/this.dpr}perimeterPoint(e,t,n){let i=(e%(2*(t+n))+2*(t+n))%(2*(t+n));return i<t?[this.frame.x1+i,this.frame.y1,0,-1]:(i-=t,i<n?[this.frame.x2,this.frame.y1+i,1,0]:(i-=n,i<t?[this.frame.x2-i,this.frame.y2,0,1]:(i-=t,[this.frame.x1,this.frame.y2-i,-1,0])))}drawSpecks(e,t){const n=this.frame.x2-this.frame.x1,i=this.frame.y2-this.frame.y1;if(n<2||i<2)return;const r=2*(n+i),a=this.frame.index+1,o=3;for(let l=0;l<e.specks;l++){const c=.5+fr(a,l,11)*1.2,h=this.pulse/c+fr(a,l,17),d=Math.floor(h),u=h-d;if(u>.7)continue;const[f,_,g,m]=this.perimeterPoint(fr(a,l,d)*r,n,i),p=fr(a,l,d,2),v=p<.46?2:p<.7?3:p<.84?5:p<.94?8:11,x=v>=8,M=(x?9:4)+Math.floor(fr(a,l,d,1)*5)*o,w=this.frame.x1+Math.round((f+g*M-this.frame.x1)/o)*o,b=this.frame.y1+Math.round((_+m*M-this.frame.y1)/o)*o,T=fr(a,l,d,3),L=u<.06||u>.32&&u<.36?.35:1,y=t*(x?.3+.4*T:.3+.6*T)*L,A=Math.round(w-v/2),O=Math.round(b-v/2);T<.26||x&&T<.78?(this.ctx.strokeStyle=Wn(e.accentColor,y),this.ctx.strokeRect(A+.5,O+.5,v,v),x&&T>.5&&(this.ctx.fillStyle=Wn(e.accentColor,y),this.ctx.fillRect(Math.round(w)-1,Math.round(b)-1,2,2))):(this.ctx.fillStyle=Wn(e.accentColor,y),this.ctx.fillRect(A,O,v,v))}for(let l=0;l<2;l++){const c=(this.pulse*.42*e.speed+l*.5)*r;for(let h=0;h<4;h++){const[d,u]=this.perimeterPoint(c-h*6,n,i),f=h===0?3:2;this.ctx.fillStyle=Wn(e.accentColor,t*[.95,.55,.32,.16][h]),this.ctx.fillRect(Math.round(d-f/2),Math.round(u-f/2),f,f)}}}drawFrame(e){if(!(e!=null&&e.selection))return;const t=this.glyphs[this.frame.index];if(!t||this.frame.alpha<.01)return;const n=this.frame.alpha,i=this.crisp(this.frame.x1),r=this.crisp(this.frame.y1),a=this.crisp(this.frame.x2),o=this.crisp(this.frame.y2);this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0);const l=Math.hypot(t.offset.x,t.offset.y);if(l>1){const d=(t.box.x1+t.box.x2)/2,u=(t.box.y1+t.box.y2)/2;this.ctx.beginPath(),this.ctx.moveTo(d,u),this.ctx.lineTo(d+t.offset.x,u+t.offset.y),this.ctx.setLineDash([3,4]),this.ctx.lineWidth=1,this.ctx.strokeStyle=Wn(e.accentColor,.45*n),this.ctx.stroke(),this.ctx.setLineDash([]),this.ctx.beginPath(),this.ctx.rect(Math.round(d)-2,Math.round(u)-2,4,4),this.ctx.fillStyle=Wn(e.accentColor,.7*n),this.ctx.fill()}this.ctx.beginPath(),this.ctx.rect(i,r,a-i,o-r),this.ctx.lineWidth=1,this.ctx.strokeStyle=Wn(e.accentColor,.5*n),this.ctx.stroke(),this.ctx.beginPath();for(const[d,u]of[[i,r],[a,r],[a,o],[i,o]])this.ctx.rect(Math.round(d)-2,Math.round(u)-2,5,5);if(this.ctx.fillStyle=Wn(e.accentColor,.95*n),this.ctx.fill(),e.specks>0&&(this.ctx.lineWidth=1,this.drawSpecks(e,n)),!e.labels)return;this.ctx.font=Cv,this.ctx.textAlign="left",this.ctx.textBaseline="bottom",this.ctx.fillStyle=Wn(e.accentColor,.62*n);const c=l>1?`${kh(Math.round(t.offset.x))}, ${kh(Math.round(-t.offset.y))}`:`${t.char}  ${Math.round(t.box.x2-t.box.x1)} × ${Math.round(t.box.y2-t.box.y1)}`,h=Math.max(9,Math.round(this.frame.y1)-4);this.ctx.fillText(c,Math.round(this.frame.x1),h)}locate(e){const t=this.container.getBoundingClientRect();this.pointer.x=e.clientX-t.left,this.pointer.y=e.clientY-t.top}initEvents(){this.container.addEventListener("pointermove",this.onMove,{passive:!0}),this.container.addEventListener("pointerenter",this.onMove,{passive:!0}),this.container.addEventListener("pointerdown",this.onDown,{passive:!0}),this.container.addEventListener("pointerup",this.onUp,{passive:!0}),this.container.addEventListener("pointercancel",this.onUp,{passive:!0}),this.container.addEventListener("pointerleave",this.onLeave,{passive:!0}),this.resizeObserver=new ResizeObserver(this.resize),this.resizeObserver.observe(this.container),this.intersectionObserver=new IntersectionObserver(([e])=>{this.visible=e.isIntersecting,this.wake()}),this.intersectionObserver.observe(this.container),document.fonts&&document.fonts.ready.then(()=>this.refreshFonts(),()=>this.refreshFonts())}update(e={}){this.settings={...this.settings,...e},this.layoutKey="",this.wake()}destroy(){var e,t;this.alive=!1,this.raf&&cancelAnimationFrame(this.raf),(e=this.resizeObserver)==null||e.disconnect(),(t=this.intersectionObserver)==null||t.disconnect(),this.container.removeEventListener("pointermove",this.onMove),this.container.removeEventListener("pointerenter",this.onMove),this.container.removeEventListener("pointerdown",this.onDown),this.container.removeEventListener("pointerup",this.onUp),this.container.removeEventListener("pointercancel",this.onUp),this.container.removeEventListener("pointerleave",this.onLeave),this.canvas.remove()}}const Gh={arrow:{3:{cells:[1,2,3,0,1,2,1,2,3],loop:7.2,scale:1}},dots:{3:{cells:[0,1,2,0,1,2,0,1,2],loop:3,scale:2.4}},ripple:{3:{cells:[2,1,2,1,0,1,2,1,2],loop:4.8,scale:1.5}},spiral:{3:{cells:[0,1,2,7,8,3,6,5,4],loop:9,scale:1.2,lit:.35}},orbit:{3:{cells:[0,1,2,7,null,3,6,5,4],loop:8,scale:1.2},4:{cells:[0,1,2,3,11,null,null,4,10,null,null,5,9,8,7,6],loop:6,scale:1.2,lit:.45}},snake:{3:{cells:[0,1,2,5,4,3,6,7,8],loop:9,scale:1,lit:.35},4:{cells:[0,1,2,3,7,6,5,4,8,9,10,11,15,14,13,12],loop:16,scale:1,lit:.25}},sweep:{4:{cells:[0,1,2,3,1,2,3,4,2,3,4,5,3,4,5,6],loop:5,scale:1,lit:.45}},spin:{4:{cells:[0,0,1,1,0,0,1,1,3,3,2,2,3,3,2,2],loop:4,scale:1.6,lit:.35}},rain:{4:{cells:[0,2,1,3,1,3,2,4,2,4,3,5,3,5,4,6],loop:4,scale:1.2,lit:.35}},pulse:{4:{cells:[2,1,1,2,1,0,0,1,1,0,0,1,2,1,1,2],loop:2.4,scale:2.5,lit:.45}}},Lv={3:"orbit",4:"sweep"},Iv={3:{done:[2,3,5,7],error:[0,2,4,6,8]},4:{done:[7,8,10,13],error:[0,3,5,6,9,10,12,15]}},Dv=(s,e)=>{if(typeof s=="string"){const i=Gh[s];return i&&i[e]||Gh[Lv[e]][e]}const t=Array.from({length:e*e},(i,r)=>s.cells[r]??null),n=Math.max(0,...t.filter(i=>i!=null));return{cells:t,loop:s.loop??n+4.2,scale:s.scale??1,lit:s.lit??.62}},Uv=s=>s<600?`${(s/10).toFixed(1)}s`:`${Math.floor(s/600)}m ${(s%600/10).toFixed(1)}s`;function Nv(s,e={}){const{label:t="Loading",doneLabel:n="Ready in",errorLabel:i="Failed after",pattern:r="orbit",grid:a=3,shape:o="round",color:l="#ffffff",doneColor:c="#22c55e",errorColor:h="#ef4444",cellSize:d=7,gap:u=3,fontSize:f=13,step:_=90,idleOpacity:g=.18,glow:m=!0,glowColor:p="rgba(255, 51, 102, 0.45)",showTimer:v=!0}=e,x=a===4?4:3,M=Dv(r,x),w=Iv[x],b=_*M.scale,T=Math.round(M.loop*b),L=document.createElement("span");L.setAttribute("role","status"),L.className="lattice-loader",L.setAttribute("data-status","working"),L.setAttribute("data-shape",o),m&&L.setAttribute("data-glow",""),L.style.setProperty("--ll-n",x),L.style.setProperty("--ll-cell",`${d}px`),L.style.setProperty("--ll-gap",`${u}px`),L.style.setProperty("--ll-font",`${f}px`),L.style.setProperty("--ll-color",l),L.style.setProperty("--ll-mark",c),L.style.setProperty("--ll-idle",g),L.style.setProperty("--ll-glow",p||l),L.style.setProperty("--ll-mark-glow",p||c),L.style.setProperty("--ll-cycle",`${T}ms`);const y=document.createElement("span");y.className="lattice-loader__grid",y.setAttribute("aria-hidden","true");const A=document.createElement("span");A.className="lattice-loader__layer lattice-loader__run",M.cells.forEach(Q=>{const W=document.createElement("span");W.className="lattice-loader__cell",Q==null?W.setAttribute("data-hole",""):(M.lit&&M.lit!==.62&&W.setAttribute("data-lit",Math.round(M.lit*100)),W.style.animationDelay=`${Math.round(Q*b)}ms`),A.appendChild(W)});const O=document.createElement("span");O.className="lattice-loader__layer lattice-loader__mark",M.cells.forEach((Q,W)=>{const K=document.createElement("span");K.className="lattice-loader__cell",w.done.includes(W)&&K.setAttribute("data-on",""),O.appendChild(K)}),y.appendChild(A),y.appendChild(O),L.appendChild(y);const G=document.createElement("span");G.className="lattice-loader__label",G.setAttribute("aria-hidden","true");const $=document.createElement("span");$.className="lattice-loader__text",$.setAttribute("data-active",""),$.textContent=t;const R=document.createElement("span");R.className="lattice-loader__text",R.textContent=n;const N=document.createElement("span");N.className="lattice-loader__text",N.textContent=i,G.appendChild($),G.appendChild(R),G.appendChild(N),L.appendChild(G);let F=null;v&&(F=document.createElement("span"),F.className="lattice-loader__timer",F.setAttribute("aria-hidden","true"),F.textContent="0.0s",L.appendChild(F)),s.innerHTML="",s.appendChild(L);let k=null;const q=performance.now();let B=0;return k=setInterval(()=>{B=Math.floor((performance.now()-q)/100),F&&(F.textContent=Uv(B))},100),{root:L,setStatus:(Q="done")=>{k&&(clearInterval(k),k=null),L.setAttribute("data-status",Q),L.style.setProperty("--ll-mark",Q==="error"?h:c),O.querySelectorAll(".lattice-loader__cell").forEach((K,ae)=>{(Q==="error"?w.error:w.done).includes(ae)?K.setAttribute("data-on",""):K.removeAttribute("data-on")}),$.removeAttribute("data-active"),R.removeAttribute("data-active"),N.removeAttribute("data-active"),Q==="done"?R.setAttribute("data-active",""):Q==="error"?N.setAttribute("data-active",""):$.setAttribute("data-active","")},destroy:()=>{k&&(clearInterval(k),k=null)}}}function Ov(s={}){const{onComplete:e}=s,t=document.getElementById("cinematic-preloader"),n=document.getElementById("cinematic-video"),i=document.getElementById("btn-skip-intro"),r=document.getElementById("btn-mobile-enter");if(!t)return typeof e=="function"&&e(),{dismiss:()=>{}};let a=!1,o=!1,l=null;const c=window.innerWidth<=768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),h=(u=!1)=>{a||(a=!0,l&&(clearTimeout(l),l=null),t.classList.add("fade-out"),typeof e=="function"&&e(),u&&Ve.playClick(),setTimeout(()=>{if(t.style.display="none",n)try{n.pause()}catch{}},800))};if(window.addEventListener("keydown",u=>{!a&&t.style.display!=="none"&&(u.key==="Escape"||u.code==="Space")&&(u.preventDefault(),h(!0))}),i&&i.addEventListener("click",u=>{u.stopPropagation(),h(!0)}),r&&r.addEventListener("click",u=>{u.stopPropagation(),h(!0)}),c){if(n)try{n.pause(),n.currentTime=0}catch{}t.style.display="flex";const u=document.getElementById("mobile-lattice-target");let f=null;u&&(f=Nv(u,{label:"Thinking",doneLabel:"Done in",errorLabel:"Failed after",pattern:"orbit",grid:3,shape:"round",color:"#ffffff",doneColor:"#22c55e",errorColor:"#ef4444",cellSize:6,gap:2,fontSize:14,step:90,idleOpacity:.15,glow:!1,glowColor:"",showTimer:!0})),setTimeout(()=>{f&&!a&&f.setStatus("done")},1400),l=setTimeout(()=>{f&&f.destroy(),h(!1)},1850);const _=document.getElementById("mobile-normal-loader");return _&&_.addEventListener("click",()=>{f&&f.destroy(),h(!0)},{once:!0}),{dismiss:h}}if(!n)return h(!1),{dismiss:h};n.addEventListener("timeupdate",()=>{!n.duration||a||n.currentTime>=13.2&&!o&&(o=!0,Ve.init(),Ve.resume(),Ve.playConvergenceChord())}),n.addEventListener("ended",()=>{h(!1)}),n.muted=!1,n.volume=1,Ve.isMuted=!1;const d=()=>{const u=n.play();u!==void 0&&u.catch(f=>{console.warn("Desktop unmuted autoplay blocked by policy; setting up interaction listener:",f),n.muted=!0,n.play().catch(()=>{});const _=()=>{n.muted=!1,n.volume=1,Ve.init(),Ve.resume(),window.removeEventListener("pointerdown",_),window.removeEventListener("keydown",_),window.removeEventListener("touchstart",_),window.removeEventListener("click",_)};window.addEventListener("pointerdown",_,{once:!0,passive:!0}),window.addEventListener("keydown",_,{once:!0}),window.addEventListener("touchstart",_,{once:!0,passive:!0}),window.addEventListener("click",_,{once:!0})})};return t.style.display="flex",d(),l=setTimeout(()=>{!a&&n.currentTime===0&&(console.warn("Desktop video loader timeout reached; proceeding to showcase."),h(!1))},4200),{dismiss:h}}class Fv{constructor(){this.container=document.getElementById("webgl-container"),this.stones=[],this.currentIndex=0,this.isTransitioning=!1,this.isConvergenceActive=!1,this.isWireframe=!1,this.lastScrollTime=0,this.scrollCooldown=700,this.clock=new bu,this.infoCard=document.getElementById("info-card"),this.initThree(),this.initCosmicEnvironment(),this.initStones(),this.initPostProcessing(),this.initControls(),this.initUI(),this.initCountdownTimer(),this.initTimeline(),this.initScrollAndGestures(),this.initEventListeners(),Av(),this.animate(),"scrollRestoration"in history&&(history.scrollRestoration="manual"),window.scrollTo(0,0),document.body.classList.remove("timeline-unlocked"),this.displayStone(0,!1),this.cinematic=Ov({onComplete:()=>{this.triggerConvergence(!1)}})}isMobile(){return window.innerWidth<=1024||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}initThree(){this.scene=new C0,this.scene.fog=new al(197381,.024),this.camera=new on(42,window.innerWidth/window.innerHeight,.1,1e3),this.updateCameraForViewport(),this.renderer=new Su({powerPreference:"high-performance",antialias:!0,alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Qo,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.container.appendChild(this.renderer.domElement);const e=new O0(16777215,.95);this.scene.add(e);const t=new po(16777215,1.35);t.position.set(5,10,8),this.scene.add(t);const n=new po(16777215,.85);n.position.set(-6,-4,6),this.scene.add(n);const i=new po(8961023,.75);i.position.set(-6,8,-6),this.scene.add(i),this.stageLight=new Oo(54015,1.5,16,1.2),this.stageLight.position.set(0,1.2,4.5),this.scene.add(this.stageLight);const r=new Do(this.renderer);r.compileEquirectangularShader();const a=document.createElement("canvas");a.width=512,a.height=256;const o=a.getContext("2d"),l=o.createLinearGradient(0,0,0,256);l.addColorStop(0,"#0d1020"),l.addColorStop(.5,"#05060b"),l.addColorStop(1,"#090b16"),o.fillStyle=l,o.fillRect(0,0,512,256);const c=(u,f,_,g,m)=>{const p=o.createRadialGradient(u,f,0,u,f,_);p.addColorStop(0,`rgba(255, 255, 255, ${g})`),p.addColorStop(.35,m),p.addColorStop(1,"rgba(0, 0, 0, 0)"),o.fillStyle=p,o.beginPath(),o.arc(u,f,_,0,Math.PI*2),o.fill()};c(130,65,80,.35,"rgba(230, 245, 255, 0.35)"),c(370,75,95,.32,"rgba(255, 240, 225, 0.3)"),c(256,175,75,.2,"rgba(160, 200, 255, 0.2)");const h=new da(a);h.mapping=aa;const d=r.fromEquirectangular(h).texture;this.scene.environment=d}updateCameraForViewport(){const e=document.getElementById("stone-stage-overlay");if(e){const n=e.getBoundingClientRect(),i=n.left+n.width/2,r=n.top+n.height/2;let a=window.innerWidth/2-i,o=window.innerHeight/2-r;this.isMobile()&&(a+=16),this.camera.setViewOffset(window.innerWidth,window.innerHeight,a,o,window.innerWidth,window.innerHeight),this.camera.updateProjectionMatrix()}this.stoneStageX=0,this.stoneStageY=0;const t=this.isMobile()?12:9.8;this.camera.position.set(0,0,t),this.controls&&this.controls.target.set(0,0,0)}initCosmicEnvironment(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.2,"rgba(255, 255, 255, 0.7)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.15)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=n,t.fillRect(0,0,64,64);const i=new da(e),r=2e3,a=new yt,o=new Float32Array(r*3),l=new Float32Array(r*3);for(let h=0;h<r;h++){const d=38+Math.random()*85,u=Math.random()*Math.PI*2,f=Math.acos(2*Math.random()-1);let _=d*Math.sin(f)*Math.cos(u),g=d*Math.sin(f)*Math.sin(u),m=d*Math.cos(f);Math.hypot(_-this.stoneStageX,g-this.stoneStageY)<4.5&&m<0&&(_+=_>=this.stoneStageX?5:-5,g+=g>=this.stoneStageY?5:-5),o[h*3]=_,o[h*3+1]=g,o[h*3+2]=m;const v=.4+Math.random()*.6;l[h*3]=v,l[h*3+1]=v,l[h*3+2]=v}a.setAttribute("position",new Kt(o,3)),a.setAttribute("color",new Kt(l,3));const c=new ol({size:.35,map:i,vertexColors:!0,transparent:!0,opacity:.8,blending:Bt,depthWrite:!1});this.starfield=new Eu(a,c),this.scene.add(this.starfield)}initStones(){this.stonesContainer=new Un,this.scene.add(this.stonesContainer);const e=this.isMobile()?.48:1;Vt.forEach((t,n)=>{const i=bv(t);i.group.position.set(this.stoneStageX,this.stoneStageY,0),n!==0?(i.group.scale.set(.001,.001,.001),i.group.visible=!1):(i.group.scale.set(e,e,e),i.group.visible=!0),this.stonesContainer.add(i.group),this.stones.push(i)})}initPostProcessing(){this.composer=new q0(this.renderer);const e=new Y0(this.scene,this.camera);this.composer.addPass(e),this.bloomPass=new Cr(new be(window.innerWidth,window.innerHeight),.55,.45,.72),this.composer.addPass(this.bloomPass);const t=new K0;this.composer.addPass(t)}initControls(){this.controls=new k0(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.maxPolarAngle=Math.PI/2+.25,this.controls.minPolarAngle=Math.PI/2-.25,this.controls.target.set(0,0,0),this.controls.touches={ONE:null,TWO:null},this.renderer.domElement&&(this.renderer.domElement.style.touchAction="pan-y");const e=new F0,t=new be;let n={x:0,y:0};this.renderer.domElement.addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(n={x:i.clientX,y:i.clientY})}),this.renderer.domElement.addEventListener("pointerup",i=>{if(i.pointerType==="touch")return;if(Math.hypot(i.clientX-n.x,i.clientY-n.y)<6&&!this.isConvergenceActive){t.x=i.clientX/window.innerWidth*2-1,t.y=-(i.clientY/window.innerHeight)*2+1,e.setFromCamera(t,this.camera);const a=this.stones[this.currentIndex];a&&e.intersectObjects([a.gemMesh,a.coreMesh],!0).length>0&&this.pulseCurrentStone()}})}initCountdownTimer(){const e=new Date("2026-10-31T09:00:00+05:30").getTime(),t=document.getElementById("cd-days"),n=document.getElementById("cd-hours"),i=document.getElementById("cd-mins"),r=document.getElementById("cd-secs"),a=document.getElementById("cd-msecs");if(!t||!n||!i||!r||!a)return;let o=-1;const l=()=>{const c=Date.now(),h=e-c;if(h<=0){t.textContent="00",n.textContent="00",i.textContent="00",r.textContent="00",a.textContent="000";return}const d=Math.floor(h/(1e3*60*60*24)),u=Math.floor(h/(1e3*60*60)%24),f=Math.floor(h/(1e3*60)%60),_=Math.floor(h/1e3%60),g=Math.floor(h%1e3);_!==o&&(o=_,t.textContent=String(d).padStart(2,"0"),n.textContent=String(u).padStart(2,"0"),i.textContent=String(f).padStart(2,"0"),r.textContent=String(_).padStart(2,"0")),a.textContent=String(g).padStart(3,"0"),requestAnimationFrame(l)};requestAnimationFrame(l)}initUI(){const e=document.getElementById("pager-list");e.innerHTML="",Vt.forEach((d,u)=>{const f=document.createElement("button");f.className=`pager-item ${u===0?"active":""}`,f.setAttribute("data-index",u);const _=d.colorThree>>16&255,g=d.colorThree>>8&255,m=d.colorThree&255;f.setAttribute("style",`
        --item-color: ${d.colorHex};
        --item-rgb: ${_}, ${g}, ${m};
      `),f.setAttribute("aria-label",`Navigate to ${d.name}`);const p=d.name.replace(" STONE",""),v=u===0?21:0,x=u===Vt.length-1?21:42;f.innerHTML=`
        <span class="pager-track-node">
          <svg class="pager-node-svg" width="24" height="42" viewBox="0 0 24 42" aria-hidden="true">
            <!-- Background laser guide line -->
            <line class="svg-track-line" x1="12" y1="${v}" x2="12" y2="${x}" />
            <!-- Active laser beam segments -->
            ${u>0?'<line class="svg-laser-top" x1="12" y1="0" x2="12" y2="21" />':""}
            ${u<Vt.length-1?'<line class="svg-laser-bot" x1="12" y1="21" x2="12" y2="42" />':""}
            <!-- Precision Single Dot: centered at (12, 21) -->
            <circle class="svg-pip-halo" cx="12" cy="21" r="8" />
            <circle class="svg-pip-core" cx="12" cy="21" r="3.5" />
          </svg>
        </span>
        <span class="pager-name-tag">${p}</span>
      `,f.addEventListener("click",()=>{this.isConvergenceActive&&this.endConvergence(),u!==this.currentIndex&&(Ve.playStoneChime(d.id),this.displayStone(u,!0))}),e.appendChild(f)});const t=document.getElementById("btn-mobile-menu"),n=document.getElementById("mobile-nav-drawer"),i=document.getElementById("btn-close-mobile-menu"),r=document.getElementById("mobile-drawer-backdrop"),a=document.querySelectorAll(".mobile-nav-link, .m-portal-item"),o=document.getElementById("btn-mobile-drawer-reg");t&&n&&t.addEventListener("click",()=>{n.classList.add("is-open"),Ve.playClick()});const l=()=>{n&&n.classList.remove("is-open")};i&&i.addEventListener("click",l),r&&r.addEventListener("click",l),a.forEach(d=>{d.addEventListener("click",()=>{l(),this.unlockTimeline(!0)})}),o&&o.addEventListener("click",()=>{l();const d=document.getElementById("btn-nav-register");d&&d.click()});const c=document.getElementById("btn-mobile-audio"),h=document.getElementById("m-audio-status");c&&(h&&(h.textContent="ACTIVE",h.style.color="#00d2ff"),c.addEventListener("click",()=>{const d=Ve.toggleMute();h&&(h.textContent=d?"ACTIVE":"MUTED",h.style.color=d?"#00d2ff":"#a1a1aa");const u=document.getElementById("btn-audio");u&&(u.classList.toggle("audio-unmuted",d),u.classList.toggle("audio-muted",!d),u.classList.toggle("active",d))})),this.initTechText()}initTechText(){const e=document.getElementById("stone-tech-text-container");if(!e)return;const t=Vt[this.currentIndex]||Vt[0];this.techText=new Pv(e,{text:t.name,fontFamily:"'Syne', sans-serif",fontWeight:800,fontSize:42,letterSpacing:.04,color:"#ffffff",accentColor:t.colorHex,reveal:"letter",lineStyle:"dashed",dashLength:4,dashGap:2,strokeWidth:1.5,specks:12,selection:!1,labels:!1,draggable:!1,sweep:!0,speed:.9})}initTimeline(){const e=document.querySelectorAll(".dossier-card"),t=["mind","space","reality","time"];e.forEach((i,r)=>{i.addEventListener("click",()=>{const a=t[r]||"all";Ve.playStoneChime(a),tt.fromTo(i,{scale:.985},{scale:1,duration:.35,ease:"back.out(2)"})})});const n=document.getElementById("btn-timeline");n&&n.addEventListener("click",()=>{Ve.playClick(),this.unlockTimeline(!0)}),this.initTimelineParticles()}initTimelineParticles(){const e=document.getElementById("timeline-bg-canvas"),t=document.getElementById("timeline-section");if(!e||!t)return;const n=e.getContext("2d");if(!n)return;let i=0,r=0,a=1,o=null,l=!1;const c={x:-1e3,y:-1e3,isHovering:!1},h=["#d97706","#0284c7","#e11d48","#059669","#475569","#1e293b"],d=window.innerWidth<768?22:44,u=[],f=()=>{const m=t.getBoundingClientRect();i=m.width,r=m.height,a=Math.min(window.devicePixelRatio||1,2),e.width=Math.round(i*a),e.height=Math.round(r*a),n.setTransform(a,0,0,a,0,0),u.forEach(p=>{p.x>i&&(p.x=Math.random()*i),p.y>r&&(p.y=Math.random()*r)})};for(let m=0;m<d;m++){const p=Math.random()<.45,v=p?h[m%4]:h[4+m%2];u.push({x:Math.random()*(i||window.innerWidth),y:Math.random()*(r||600),vx:(Math.random()-.5)*.42,vy:(Math.random()-.5)*.42,radius:p?2.2+Math.random()*1.2:1.3+Math.random()*.8,color:v,alpha:.28+Math.random()*.45,hasCross:m%6===0,pulseSpeed:.02+Math.random()*.03,pulseVal:Math.random()*Math.PI})}const _=()=>{if(!l)return;n.clearRect(0,0,i,r);const m=u.length,p=125,v=p*p;for(let x=0;x<m;x++){const M=u[x];for(let w=x+1;w<m;w++){const b=u[w],T=M.x-b.x,L=M.y-b.y,y=T*T+L*L;if(y<v){const O=(1-Math.sqrt(y)/p)*.15;n.beginPath(),n.moveTo(M.x,M.y),n.lineTo(b.x,b.y),n.strokeStyle=`rgba(15, 23, 42, ${O})`,n.lineWidth=1,n.stroke()}}if(c.isHovering){const w=M.x-c.x,b=M.y-c.y,T=w*w+b*b,L=145;if(T<L*L){const y=Math.sqrt(T),A=(1-y/L)*.32;n.beginPath(),n.moveTo(M.x,M.y),n.lineTo(c.x,c.y),n.strokeStyle=`rgba(2, 132, 199, ${A})`,n.lineWidth=1.2,n.stroke();const O=(1-y/L)*.55;M.x+=w/y*O,M.y+=b/y*O}}}for(let x=0;x<m;x++){const M=u[x];M.x+=M.vx,M.y+=M.vy,M.x<0?(M.x=0,M.vx*=-1):M.x>i&&(M.x=i,M.vx*=-1),M.y<0?(M.y=0,M.vy*=-1):M.y>r&&(M.y=r,M.vy*=-1),M.pulseVal+=M.pulseSpeed;const w=M.alpha*(.85+Math.sin(M.pulseVal)*.25);n.beginPath(),n.arc(M.x,M.y,M.radius,0,Math.PI*2),n.fillStyle=M.color,n.globalAlpha=w,n.fill(),M.hasCross&&(n.beginPath(),n.moveTo(M.x-4,M.y),n.lineTo(M.x+4,M.y),n.moveTo(M.x,M.y-4),n.lineTo(M.x,M.y+4),n.strokeStyle=M.color,n.lineWidth=1,n.stroke()),n.globalAlpha=1}o=requestAnimationFrame(_)};t.addEventListener("mousemove",m=>{const p=t.getBoundingClientRect();c.x=m.clientX-p.left,c.y=m.clientY-p.top,c.isHovering=!0},{passive:!0}),t.addEventListener("mouseleave",()=>{c.isHovering=!1,c.x=-1e3,c.y=-1e3}),new IntersectionObserver(m=>{m.forEach(p=>{p.isIntersecting?(l=!0,f(),cancelAnimationFrame(o),o=requestAnimationFrame(_)):(l=!1,cancelAnimationFrame(o))})},{threshold:.01}).observe(t),window.ResizeObserver&&new ResizeObserver(p=>{for(const v of p)v.contentRect.width>0&&v.contentRect.height>0&&(f(),l&&!o&&(o=requestAnimationFrame(_)))}).observe(t),window.addEventListener("resize",()=>{f()},{passive:!0}),f()}unlockTimeline(e=!0,t="sponsors-section"){document.body.classList.contains("timeline-unlocked")||(document.body.classList.add("timeline-unlocked"),Ve.playChime(660),window.dispatchEvent(new Event("resize"))),e&&setTimeout(()=>{const n=document.getElementById(t)||document.getElementById("sponsors-section")||document.getElementById("timeline-section");if(n){const i=n.offsetTop||window.innerHeight;window.scrollTo({top:i,behavior:"smooth"})}},50)}lockTimeline(){window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{document.body.classList.remove("timeline-unlocked")},550)}initScrollAndGestures(){window.addEventListener("wheel",i=>{if(document.body.classList.contains("timeline-unlocked")&&window.scrollY>40)return;const r=Date.now();r-this.lastScrollTime<this.scrollCooldown||Math.abs(i.deltaY)>18&&(this.lastScrollTime=r,this.isConvergenceActive&&this.endConvergence(),i.deltaY>0?this.stepStone(1):i.deltaY<0&&(document.body.classList.contains("timeline-unlocked")&&window.scrollY<=10?this.lockTimeline():this.stepStone(-1)))},{passive:!0});let e=0,t=0;window.addEventListener("touchstart",i=>{!i.touches||!i.touches[0]||(e=i.touches[0].clientX,t=i.touches[0].clientY)},{passive:!0}),window.addEventListener("touchend",i=>{if(!i.changedTouches||!i.changedTouches[0]||document.body.classList.contains("timeline-unlocked")&&window.scrollY>40)return;const r=e-i.changedTouches[0].clientX,a=t-i.changedTouches[0].clientY,o=Math.abs(r),l=Math.abs(a),c=Date.now();if(!(c-this.lastScrollTime<this.scrollCooldown)&&(l>35||o>40)){this.lastScrollTime=c,this.isConvergenceActive&&this.endConvergence();const h=l>=o&&a>0||o>l&&r>0,d=l>=o&&a<0||o>l&&r<0;h?this.stepStone(1):d&&(document.body.classList.contains("timeline-unlocked")&&window.scrollY<=10?this.lockTimeline():this.stepStone(-1))}},{passive:!0});const n=document.getElementById("scroll-btn");n&&n.addEventListener("click",()=>{Ve.playClick(),this.isConvergenceActive&&this.endConvergence(),this.currentIndex===Vt.length-1?this.unlockTimeline(!0):this.stepStone(1)})}stepStone(e){this.isConvergenceActive&&this.endConvergence();const t=Vt.length;if(this.currentIndex===t-1&&e>0){this.unlockTimeline(!0);return}let n=this.currentIndex+e;n>=t&&(n=0),n<0&&(n=t-1),Ve.playStoneChime(Vt[n].id),this.displayStone(n,!0)}displayStone(e,t=!0){if(this.isTransitioning&&t)return;this.isTransitioning=!0;const n=this.currentIndex;this.currentIndex=e;const i=Vt[e];document.documentElement.style.setProperty("--active-stone-color",i.colorHex),document.documentElement.style.setProperty("--active-stone-glow",i.colorHex+"55");const r=new Ce(i.colorHex),a=Math.round(r.r*255),o=Math.round(r.g*255),l=Math.round(r.b*255);document.documentElement.style.setProperty("--active-stone-rgb",`${a}, ${o}, ${l}`),tt.to(this.stageLight.color,{r:new Ce(i.colorThree).r,g:new Ce(i.colorThree).g,b:new Ce(i.colorThree).b,duration:.8}),document.querySelectorAll(".pager-item").forEach((_,g)=>{_.classList.toggle("active",g===e),_.classList.toggle("passed",g<e)}),document.getElementById("stage-roman").textContent=i.roman;const h=document.getElementById("scroll-label");h&&(h.textContent=e===Vt.length-1?"EXPLORE SPONSORS & TIMELINE ↓":"SCROLL TO DISCOVER");const d=document.getElementById("info-card");t&&d.classList.add("animating"),setTimeout(()=>{this.renderCardContent(i),t&&d.classList.remove("animating")},t?150:0);const u=this.isMobile()?12:9.8;if(tt.to(this.camera.position,{x:0,y:0,z:u,duration:.7,ease:"power2.out"}),this.stageLight){const _=new Ce(i.coreColor);tt.to(this.stageLight.color,{r:_.r,g:_.g,b:_.b,duration:.6})}const f=this.isMobile()?.48:1;if(t){const _=this.stones[n],g=this.stones[e];tt.to(this.bloomPass,{strength:.65,duration:.35,yoyo:!0,repeat:1,ease:"power2.out"}),_&&n!==e&&tt.to(_.group.scale,{x:.001,y:.001,z:.001,duration:.55,ease:"back.in(1.4)",onComplete:()=>{_.group.visible=!1}}),this.stones.forEach((m,p)=>{p!==e&&p!==n&&(tt.killTweensOf(m.group.scale),tt.killTweensOf(m.group.position),m.group.scale.set(.001,.001,.001),m.group.position.set(0,0,0),m.group.visible=!1)}),g.group.visible=!0,g.group.position.set(0,0,0),g.group.rotation.y+=Math.PI*.5,tt.fromTo(g.group.scale,{x:.1*f,y:.1*f,z:.1*f},{x:f,y:f,z:f,duration:.85,ease:"elastic.out(1, 0.75)",delay:.2,onComplete:()=>{this.isTransitioning=!1,this.stones.forEach((m,p)=>{p!==e&&(m.group.visible=!1,m.group.scale.set(.001,.001,.001))})}})}else this.stones.forEach((_,g)=>{_.group.visible=g===e,_.group.position.set(0,0,0),_.group.scale.set(g===e?f:.001,g===e?f:.001,g===e?f:.001)}),this.isTransitioning=!1}renderCardContent(e){const t=document.getElementById("card-index-tag");t&&(t.textContent=`${e.index} / 06`);const n=document.getElementById("card-marvel-theme");n&&(n.textContent=(e.marvelTheme||"SINGULARITY").toUpperCase());const i=document.getElementById("card-title");i&&(i.textContent=e.name),this.techText&&this.techText.update({text:e.name,accentColor:e.colorHex});const r=document.getElementById("stone-tech-text-container");r&&r.setAttribute("aria-label",e.name);const a=document.getElementById("card-domain");a&&(a.textContent=`${e.domain} // ${e.domainTagline||""}`);const o=document.getElementById("card-desc");o&&(o.textContent=e.description);const l=document.getElementById("btn-wield-stone");l&&(l.setAttribute("data-stone-id",e.id),l.style.setProperty("--btn-glow",e.colorHex))}triggerConvergence(e=!0){if(this.isConvergenceActive)return;this.isConvergenceActive=!0,document.body.classList.add("convergence-mode");const t=document.getElementById("btn-convergence");t&&t.classList.add("active"),e&&Ve.playConvergenceChord(),this.camera.view&&this.camera.view.enabled&&(this.camera.clearViewOffset(),this.camera.updateProjectionMatrix());const n=this.isMobile()?17:14;tt.to(this.camera.position,{x:0,y:this.isMobile()?.2:.5,z:n,duration:1.8,ease:"power2.inOut"}),tt.to(this.controls.target,{x:0,y:0,z:0,duration:1.8,ease:"power2.inOut",onUpdate:()=>{this.controls&&this.controls.update()}});const i=this.isMobile()?2.1:3.6,r=this.isMobile()?.38:.75;this.stones.forEach((a,o)=>{a.group.visible=!0,a.group.position.set(0,0,0),a.group.scale.set(.1,.1,.1);const l=o/this.stones.length*Math.PI*2,c=Math.cos(l)*i,h=Math.sin(l)*i;tt.to(a.group.position,{x:c,y:h,z:0,duration:1.6,ease:"elastic.out(1, 0.75)"}),tt.to(a.group.scale,{x:r,y:r,z:r,duration:1.2}),tt.to(a.pointLight,{intensity:2.2,duration:1,yoyo:!0,repeat:1})}),tt.killTweensOf(this.stonesContainer.rotation),tt.to(this.stonesContainer.rotation,{z:this.stonesContainer.rotation.z+Math.PI*2,duration:3.5,ease:"power2.inOut",onComplete:()=>{this.endConvergence()}})}endConvergence(){if(!this.isConvergenceActive)return;this.isConvergenceActive=!1,document.body.classList.remove("convergence-mode");const e=document.getElementById("btn-convergence");e&&e.classList.remove("active"),this.updateCameraForViewport(),tt.to(this.stonesContainer.rotation,{x:0,y:0,z:0,duration:1,ease:"power2.out"});const t=this.isMobile()?12:9.8,n=this.isMobile()?.48:1;tt.to(this.camera.position,{x:0,y:0,z:t,duration:1.3,ease:"power3.out"}),tt.to(this.controls.target,{x:0,y:0,z:0,duration:1.3,ease:"power3.out",onUpdate:()=>{this.controls&&this.controls.update()}}),this.stones.forEach((i,r)=>{tt.killTweensOf(i.group.position),tt.killTweensOf(i.group.scale),tt.killTweensOf(i.pointLight),r===this.currentIndex?(i.group.visible=!0,i.pointLight.intensity=1.8,tt.to(i.group.position,{x:0,y:0,z:0,duration:1,ease:"power3.out"}),tt.to(i.group.scale,{x:n,y:n,z:n,duration:1,ease:"power3.out"})):(tt.to(i.group.position,{x:0,y:0,z:0,duration:.8,ease:"power2.in"}),tt.to(i.group.scale,{x:.001,y:.001,z:.001,duration:.8,ease:"power2.in",onComplete:()=>{i.group.visible=!1}}))})}pulseCurrentStone(){const e=this.stones[this.currentIndex];e&&(Ve.playEnergyPulse(),e.gemMat&&tt.to(e.gemMat,{emissiveIntensity:1.15,duration:.25,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{e.gemMat.emissiveIntensity=.18}}),tt.to(e.pointLight,{intensity:3.8,duration:.25,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{e.pointLight.intensity=1.8}}),tt.to(e.coreMesh.scale,{x:1.4,y:1.4,z:1.4,duration:.35,yoyo:!0,repeat:1,ease:"power2.out"}),e.wireMesh&&e.wireMesh.material&&tt.to(e.wireMesh.material,{opacity:.9,duration:.25,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{e.wireMesh.material.opacity=.45}}),tt.to(this.bloomPass,{strength:.95,duration:.3,yoyo:!0,repeat:1,ease:"power2.out"}))}toggleWireframe(){this.isWireframe=!this.isWireframe,this.stones.forEach(t=>{t.gemMat.wireframe=this.isWireframe,t.wireMesh.visible=!this.isWireframe}),document.getElementById("btn-wireframe").classList.toggle("active",this.isWireframe),Ve.playClick()}initEventListeners(){window.addEventListener("resize",()=>{const r=window.innerWidth,a=window.innerHeight;this.camera.aspect=r/a,this.camera.updateProjectionMatrix(),this.renderer.setSize(r,a),this.composer.setSize(r,a),this.updateCameraForViewport(),this.controls.target.set(this.stoneStageX,this.stoneStageY,0);const o=this.isMobile()?.48:1,l=this.stones[this.currentIndex];l&&!this.isConvergenceActive&&l.group.scale.set(o,o,o)});const e=document.getElementById("btn-audio");e&&(e.addEventListener("click",()=>{const r=Ve.toggleMute();e.classList.toggle("audio-unmuted",r),e.classList.toggle("audio-muted",!r),e.classList.toggle("active",r);const a=document.getElementById("m-audio-status");a&&(a.textContent=r?"ACTIVE":"MUTED",a.style.color=r?"#00d2ff":"#a1a1aa")}),e.classList.add("audio-unmuted","active"),e.classList.remove("audio-muted")),document.getElementById("btn-wireframe").addEventListener("click",()=>{this.toggleWireframe()}),document.getElementById("btn-convergence").addEventListener("click",()=>{this.isConvergenceActive?this.endConvergence():this.triggerConvergence(!0)});const t=document.getElementById("btn-pulse");t&&t.addEventListener("click",()=>{this.pulseCurrentStone()});const n=document.getElementById("btn-sound-play");n&&n.addEventListener("click",()=>{Ve.playStoneChime(Vt[this.currentIndex].id)}),window.addEventListener("keydown",r=>{if(r.target.tagName==="INPUT"||r.target.tagName==="TEXTAREA")return;const a=r.key.toUpperCase();if(a>="1"&&a<="6"){const o=parseInt(a,10)-1;Ve.playStoneChime(Vt[o].id),this.displayStone(o,!0)}else if(r.code==="ArrowDown"||r.code==="PageDown")r.preventDefault(),this.stepStone(1);else if(r.code==="ArrowUp"||r.code==="PageUp")r.preventDefault(),this.stepStone(-1);else if(r.code==="Space")r.preventDefault(),this.isConvergenceActive?this.endConvergence():this.triggerConvergence(!0);else if(r.code==="Escape")this.isConvergenceActive&&this.endConvergence();else if(a==="P"||a==="S")this.pulseCurrentStone();else if(a==="W")this.toggleWireframe();else if(a==="M"){const o=Ve.toggleMute(),l=document.getElementById("btn-audio");l&&(l.classList.toggle("audio-unmuted",o),l.classList.toggle("audio-muted",!o),l.classList.toggle("active",o));const c=document.getElementById("m-audio-status");c&&(c.textContent=o?"ACTIVE":"MUTED",c.style.color=o?"#00d2ff":"#a1a1aa")}});const i=()=>{Ve.init(),Ve.ctx&&Ve.ctx.state==="suspended"&&Ve.ctx.resume(),window.removeEventListener("pointerdown",i),window.removeEventListener("keydown",i),window.removeEventListener("touchstart",i),window.removeEventListener("wheel",i),window.removeEventListener("click",i)};window.addEventListener("pointerdown",i,{once:!0,passive:!0}),window.addEventListener("keydown",i,{once:!0}),window.addEventListener("touchstart",i,{once:!0,passive:!0}),window.addEventListener("wheel",i,{once:!0,passive:!0}),window.addEventListener("click",i,{once:!0}),document.addEventListener("visibilitychange",()=>{document.hidden?Ve.suspend():Ve.resume()}),window.addEventListener("pagehide",()=>{Ve.destroy()}),window.addEventListener("beforeunload",()=>{Ve.destroy()})}animate(){requestAnimationFrame(()=>this.animate());const e=this.clock.getDelta(),t=this.clock.getElapsedTime();this.starfield&&(this.starfield.rotation.y=t*.006),this.stones.forEach((n,i)=>{n.group.visible&&(n.update(t,e),this.isConvergenceActive||(n.group.position.y=this.stoneStageY+Math.sin(t*2.8)*.16))}),this.controls.update(),this.composer.render()}}window.addEventListener("DOMContentLoaded",()=>{new Fv});
