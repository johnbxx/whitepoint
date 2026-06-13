var z1=Object.defineProperty;var k1=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var V1=(n,e)=>{for(var t in e)z1(n,t,{get:e[t],enumerable:!0})};var d1={};V1(d1,{selftest:()=>VM});async function VM(n,e){let{tick:t,state:i,post:s,gl:r}=n,o=()=>{let R=document.createElement("canvas");R.width=e.width,R.height=e.height;let k=R.getContext("2d");return k.drawImage(e,0,0),k.getImageData(0,0,e.width,e.height).data},a=(R,k,G)=>{let N=4*(Math.round(G*e.height)*e.width+Math.round(k*e.width));return[R[N],R[N+1],R[N+2]]},c=([R,k,G])=>{let N=Math.max(R,k,G),B=Math.min(R,k,G);if(N===B)return null;let H;return N===R?H=(k-G)/(N-B)%6:N===k?H=(G-R)/(N-B)+2:H=(R-k)/(N-B)+4,(H*60+360)%360},l=[],h=(R,k,G)=>l.push({name:R,pass:k,detail:G});i.sodiumOnly=!1,n.ctx.uMode.value=0,t(10);let f=o(),u=n.ctx.derived.lights[0],[d,g,v]=u.xyz,m=d/(d+g+v);h("neon hero lands red-orange (x 0.63\u20130.70)",u.gas!=="neon"||m>.63&&m<.7,`gas ${u.gas}, x=${m.toFixed(3)}`),i.sodiumOnly=!0,t(10);let p=o();i.sodiumOnly=!1;let M=0,w=0;for(let R=0;R<p.length;R+=16)p[R]+p[R+1]+p[R+2]>45&&(M++,p[R+2]>.25*p[R]&&w++);h("sodium-only collapses to amber",M>1e3&&w===0,`${M} lit samples, ${w} violations`),n.ctx.uMode.value=1,t(10);let b=o();n.ctx.uMode.value=0,t(10);let A=0,E=0;for(let R=0;R<b.length;R+=64)A+=Math.abs(b[R]-f[R]),E++;let P=c(a(f,.52,.27)),x=c(a(b,.52,.27));if(h("pipelines differ measurably",A/E>5,`mean R diff ${(A/E).toFixed(1)}/255`),h("clip shifts hue where cusp holds it",P!==null&&x!==null&&Math.abs(P-x)>1,`whitepoint ${P?.toFixed(1)}\xB0 vs naive ${x?.toFixed(1)}\xB0`),r.drawingBufferColorSpace==="display-p3"){s().output.uniforms.uSrgbPreview.value=1,t(10);let R=o();s().output.uniforms.uSrgbPreview.value=0,t(10);let k=0;for(let G=0;G<R.length;G+=16)k=Math.max(k,Math.abs(R[G]-f[G]));h("sRGB preview visibly compresses P3 reds",k>4,`max R diff ${k}/255`)}t(10),r.finish();let T=performance.now();for(let R=0;R<60;R++)t(10+R*.016);r.finish();let I=(performance.now()-T)/60;h("frame budget (< 8 ms)",I<8,`${I.toFixed(2)} ms/frame`),console.table(l.map(({name:R,pass:k,detail:G})=>({check:R,pass:k,detail:G})));let C=document.getElementById("derived");return C&&(C.textContent=l.map(R=>`${R.pass?"PASS":"FAIL"}  ${R.name} \u2014 ${R.detail}`).join(`
`)+`

`+C.textContent),l}var p1=k1(()=>{});var uf=0,H0=1,ff=2;var mo=1,df=2,xr=3,Ei=0,tn=1,Mn=2,ui=0,Ns=1,ks=2,$0=3,W0=4,pf=5;var os=100,mf=101,gf=102,_f=103,xf=104,vf=200,yf=201,Mf=202,bf=203,ga=204,_a=205,Sf=206,wf=207,Ef=208,Tf=209,Af=210,Cf=211,Rf=212,Pf=213,If=214,xa=0,va=1,ya=2,Us=3,Ma=4,ba=5,Sa=6,wa=7,X0=0,Lf=1,Df=2,bn=0,q0=1,Y0=2,Z0=3,J0=4,K0=5,j0=6,Q0=7;var eh=300,ds=301,Vs=302,nc=303,ic=304,go=306,Ea=1e3,ai=1001,Ta=1002,Ot=1003,Nf=1004;var _o=1005;var At=1006,sc=1007;var ps=1008;var Sn=1009,th=1010,nh=1011,vr=1012,rc=1013,Jn=1014,Kn=1015,wn=1016,oc=1017,ac=1018,yr=1020,ih=35902,sh=35899,rh=1021,oh=1022,Bn=1023,ci=1026,ms=1027,ah=1028,cc=1029,gs=1030,lc=1031;var hc=1033,xo=33776,vo=33777,yo=33778,Mo=33779,uc=35840,fc=35841,dc=35842,pc=35843,mc=36196,gc=37492,_c=37496,xc=37488,vc=37489,bo=37490,yc=37491,Mc=37808,bc=37809,Sc=37810,wc=37811,Ec=37812,Tc=37813,Ac=37814,Cc=37815,Rc=37816,Pc=37817,Ic=37818,Lc=37819,Dc=37820,Nc=37821,Uc=36492,Fc=36494,Oc=36495,Bc=36283,zc=36284,So=36285,kc=36286;var Zr=2300,Aa=2301,ma=2302,N0=2303,U0=2400,F0=2401,O0=2402;var Uf=3200;var ch=0,Ff=1,zn="",_n="srgb",Jr="srgb-linear",Kr="linear",Ze="srgb";var Ds=7680;var B0=519,Of=512,Bf=513,zf=514,Vc=515,kf=516,Vf=517,Gc=518,Gf=519,z0=35044;var wo="300 es",Zn=2e3,jr=2001;function G1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function H1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hf(){let n=Qr("canvas");return n.style.display="block",n}var Vu={},ur=null;function lh(...n){let e="THREE."+n.shift();ur?ur("log",e,...n):console.log(e,...n)}function $f(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ee(...n){n=$f(n);let e="THREE."+n.shift();if(ur)ur("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Te(...n){n=$f(n);let e="THREE."+n.shift();if(ur)ur("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ca(...n){let e=n.join(" ");e in Vu||(Vu[e]=!0,Ee(...n))}function Wf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Xf={[xa]:va,[ya]:Sa,[Ma]:wa,[Us]:ba,[va]:xa,[Sa]:ya,[wa]:Ma,[ba]:Us},li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var c0=Math.PI/180,Ra=180/Math.PI;function Eo(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Ve(n,e,t){return Math.max(e,Math.min(t,n))}function $1(n,e){return(n%e+e)%e}function l0(n,e,t){return(1-t)*n+t*e}function Gr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var we=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],u=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(f!==v||c!==u||l!==d||h!==g){let m=c*u+l*d+h*g+f*v;m<0&&(u=-u,d=-d,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);p=Math.sin(p*M)/w,a=Math.sin(a*M)/w,c=c*p+u*a,l=l*p+d*a,h=h*p+g*a,f=f*p+v*a}else{c=c*p+u*a,l=l*p+d*a,h=h*p+g*a,f=f*p+v*a;let M=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=M,l*=M,h*=M,f*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*f+c*d-l*u,e[t+1]=c*g+h*u+l*f-a*d,e[t+2]=l*g+h*d+a*u-c*f,e[t+3]=h*g-a*f-c*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),f=a(r/2),u=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=i+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>f){let d=2*Math.sqrt(1+i-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-i-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+c*l+o*f-a*h,this.y=i+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return h0.copy(this).projectOnVector(e),this.sub(h0)}reflect(e){return this.sub(h0.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},h0=new D,Gu=new hi,Pe=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],M=s[1],w=s[4],b=s[7],A=s[2],E=s[5],P=s[8];return r[0]=o*v+a*M+c*A,r[3]=o*m+a*w+c*E,r[6]=o*p+a*b+c*P,r[1]=l*v+h*M+f*A,r[4]=l*m+h*w+f*E,r[7]=l*p+h*b+f*P,r[2]=u*v+d*M+g*A,r[5]=u*m+d*w+g*E,r[8]=u*p+d*b+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,u=a*c-h*r,d=l*r-o*c,g=t*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=f*v,e[1]=(s*l-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=u*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(u0.makeScale(e,t)),this}rotate(e){return this.premultiply(u0.makeRotation(-e)),this}translate(e,t){return this.premultiply(u0.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},u0=new Pe,Hu=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$u=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function W1(){let n={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ze&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ze&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zn?Kr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ca("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ca("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Jr]:{primaries:e,whitePoint:i,transfer:Kr,toXYZ:Hu,fromXYZ:$u,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:i,transfer:Ze,toXYZ:Hu,fromXYZ:$u,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),n}var ze=W1();function wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var js,Pa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{js===void 0&&(js=Qr("canvas")),js.width=e.width,js.height=e.height;let s=js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=js}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wi(t[i]/255)*255):t[i]=wi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},X1=0,fr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=Eo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(f0(s[o].image)):r.push(f0(s[o]))}else r=f0(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function f0(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}var q1=0,d0=new D,rn=class n extends li{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ai,s=ai,r=At,o=ps,a=Bn,c=Sn,l=n.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=Eo(),this.name="",this.source=new fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(d0).x}get height(){return this.source.getSize(d0).y}get depth(){return this.source.getSize(d0).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ee(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ea:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ea:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=eh;rn.DEFAULT_ANISOTROPY=1;var yt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,b=(d+1)/2,A=(p+1)/2,E=(h+u)/4,P=(f+v)/4,x=(g+m)/4;return w>b&&w>A?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=E/i,r=P/i):b>A?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=E/s,r=x/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=P/r,s=x/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-v)/M,this.z=(u-h)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ia=class extends li{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new rn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new fr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends Ia{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},eo=class extends rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var La=class extends rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var at=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,c,l,h,f,u,d,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,f,u,d,g,v,m)}set(e,t,i,s,r,o,a,c,l,h,f,u,d,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Qs.setFromMatrixColumn(e,0).length(),r=1/Qs.setFromMatrixColumn(e,1).length(),o=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,d=o*f,g=a*h,v=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=d+g*l,t[5]=u-v*l,t[9]=-a*c,t[2]=v-u*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,d=c*f,g=l*h,v=l*f;t[0]=u+v*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=v+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,d=c*f,g=l*h,v=l*f;t[0]=u-v*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,d=o*f,g=a*h,v=a*f;t[0]=c*h,t[4]=g*l-d,t[8]=u*l+v,t[1]=c*f,t[5]=v*l+u,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,d=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-u*f,t[8]=g*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*f+g,t[10]=u-v*f}else if(e.order==="XZY"){let u=o*c,d=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+v,t[5]=o*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y1,e,Z1)}lookAt(e,t,i){let s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Qi.crossVectors(i,mn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Qi.crossVectors(i,mn)),Qi.normalize(),Zo.crossVectors(mn,Qi),s[0]=Qi.x,s[4]=Zo.x,s[8]=mn.x,s[1]=Qi.y,s[5]=Zo.y,s[9]=mn.y,s[2]=Qi.z,s[6]=Zo.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],M=i[3],w=i[7],b=i[11],A=i[15],E=s[0],P=s[4],x=s[8],T=s[12],I=s[1],C=s[5],R=s[9],k=s[13],G=s[2],N=s[6],B=s[10],H=s[14],j=s[3],Q=s[7],le=s[11],xe=s[15];return r[0]=o*E+a*I+c*G+l*j,r[4]=o*P+a*C+c*N+l*Q,r[8]=o*x+a*R+c*B+l*le,r[12]=o*T+a*k+c*H+l*xe,r[1]=h*E+f*I+u*G+d*j,r[5]=h*P+f*C+u*N+d*Q,r[9]=h*x+f*R+u*B+d*le,r[13]=h*T+f*k+u*H+d*xe,r[2]=g*E+v*I+m*G+p*j,r[6]=g*P+v*C+m*N+p*Q,r[10]=g*x+v*R+m*B+p*le,r[14]=g*T+v*k+m*H+p*xe,r[3]=M*E+w*I+b*G+A*j,r[7]=M*P+w*C+b*N+A*Q,r[11]=M*x+w*R+b*B+A*le,r[15]=M*T+w*k+b*H+A*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15],M=c*d-l*u,w=a*d-l*f,b=a*u-c*f,A=o*d-l*h,E=o*u-c*h,P=o*f-a*h;return t*(v*M-m*w+p*b)-i*(g*M-m*A+p*E)+s*(g*w-v*A+p*P)-r*(g*b-v*E+m*P)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=t*a-i*o,w=t*c-s*o,b=t*l-r*o,A=i*c-s*a,E=i*l-r*a,P=s*l-r*c,x=h*v-f*g,T=h*m-u*g,I=h*p-d*g,C=f*m-u*v,R=f*p-d*v,k=u*p-d*m,G=M*k-w*R+b*C+A*I-E*T+P*x;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/G;return e[0]=(a*k-c*R+l*C)*N,e[1]=(s*R-i*k-r*C)*N,e[2]=(v*P-m*E+p*A)*N,e[3]=(u*E-f*P-d*A)*N,e[4]=(c*I-o*k-l*T)*N,e[5]=(t*k-s*I+r*T)*N,e[6]=(m*b-g*P-p*w)*N,e[7]=(h*P-u*b+d*w)*N,e[8]=(o*R-a*I+l*x)*N,e[9]=(i*I-t*R-r*x)*N,e[10]=(g*E-v*b+p*M)*N,e[11]=(f*b-h*E-d*M)*N,e[12]=(a*T-o*C-c*x)*N,e[13]=(t*C-i*T+s*x)*N,e[14]=(v*w-g*A-m*M)*N,e[15]=(h*A-f*w+u*M)*N,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,f=a+a,u=r*l,d=r*h,g=r*f,v=o*h,m=o*f,p=a*f,M=c*l,w=c*h,b=c*f,A=i.x,E=i.y,P=i.z;return s[0]=(1-(v+p))*A,s[1]=(d+b)*A,s[2]=(g-w)*A,s[3]=0,s[4]=(d-b)*E,s[5]=(1-(u+p))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+w)*P,s[9]=(m-M)*P,s[10]=(1-(u+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Qs.set(s[0],s[1],s[2]).length(),a=Qs.set(s[4],s[5],s[6]).length(),c=Qs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Xn.copy(this);let l=1/o,h=1/a,f=1/c;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,t.setFromRotationMatrix(Xn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=Zn,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===Zn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===jr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Zn,c=!1){let l=this.elements,h=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),d=-(i+s)/(i-s),g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===Zn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===jr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Qs=new D,Xn=new at,Y1=new D(0,0,0),Z1=new D(1,1,1),Qi=new D,Zo=new D,mn=new D,Wu=new at,Xu=new hi,as=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xu.setFromEuler(this),this.setFromQuaternion(Xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};as.DEFAULT_ORDER="XYZ";var dr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},J1=0,qu=new D,er=new hi,vi=new at,Jo=new D,Hr=new D,K1=new D,j1=new hi,Yu=new D(1,0,0),Zu=new D(0,1,0),Ju=new D(0,0,1),Ku={type:"added"},Q1={type:"removed"},tr={type:"childadded",child:null},p0={type:"childremoved",child:null},Fn=class n extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=Eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new as,i=new hi,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Pe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(Yu,e)}rotateY(e){return this.rotateOnAxis(Zu,e)}rotateZ(e){return this.rotateOnAxis(Ju,e)}translateOnAxis(e,t){return qu.copy(e).applyQuaternion(this.quaternion),this.position.add(qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yu,e)}translateY(e){return this.translateOnAxis(Zu,e)}translateZ(e){return this.translateOnAxis(Ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jo.copy(e):Jo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Hr,Jo,this.up):vi.lookAt(Jo,Hr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),er.setFromRotationMatrix(vi),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Te("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ku),tr.child=e,this.dispatchEvent(tr),tr.child=null):Te("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Q1),p0.child=e,this.dispatchEvent(p0),p0.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ku),tr.child=e,this.dispatchEvent(tr),tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,K1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,j1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Fn.DEFAULT_UP=new D(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xn=class extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},eg={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new xn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function m0(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,ze.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ze.workingColorSpace){if(e=$1(e,1),t=Ve(t,0,1),i=Ve(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=m0(o,r,e+1/3),this.g=m0(o,r,e),this.b=m0(o,r,e-1/3)}return ze.colorSpaceToWorking(this,s),this}setStyle(e,t=_n){function i(r){r!==void 0&&parseFloat(r)<1&&Ee("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){let i=qf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return ze.workingToColorSpace(Wt.copy(this),e),Math.round(Ve(Wt.r*255,0,255))*65536+Math.round(Ve(Wt.g*255,0,255))*256+Math.round(Ve(Wt.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.workingToColorSpace(Wt.copy(this),t);let i=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ze.workingColorSpace){return ze.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=_n){ze.workingToColorSpace(Wt.copy(this),e);let t=Wt.r,i=Wt.g,s=Wt.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(Ko);let i=l0(es.h,Ko.h,t),s=l0(es.s,Ko.s,t),r=l0(es.l,Ko.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new Ye;Ye.NAMES=qf;var Fs=class extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},qn=new D,yi=new D,g0=new D,Mi=new D,nr=new D,ir=new D,ju=new D,_0=new D,x0=new D,v0=new D,y0=new yt,M0=new yt,b0=new yt,rs=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),qn.subVectors(e,t),s.cross(qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){qn.subVectors(s,t),yi.subVectors(i,t),g0.subVectors(e,t);let o=qn.dot(qn),a=qn.dot(yi),c=qn.dot(g0),l=yi.dot(yi),h=yi.dot(g0),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mi.x),c.addScaledVector(o,Mi.y),c.addScaledVector(a,Mi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return y0.setScalar(0),M0.setScalar(0),b0.setScalar(0),y0.fromBufferAttribute(e,t),M0.fromBufferAttribute(e,i),b0.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(y0,r.x),o.addScaledVector(M0,r.y),o.addScaledVector(b0,r.z),o}static isFrontFacing(e,t,i,s){return qn.subVectors(i,t),yi.subVectors(e,t),qn.cross(yi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),qn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;nr.subVectors(s,i),ir.subVectors(r,i),_0.subVectors(e,i);let c=nr.dot(_0),l=ir.dot(_0);if(c<=0&&l<=0)return t.copy(i);x0.subVectors(e,s);let h=nr.dot(x0),f=ir.dot(x0);if(h>=0&&f<=h)return t.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(nr,o);v0.subVectors(e,r);let d=nr.dot(v0),g=ir.dot(v0);if(g>=0&&d<=g)return t.copy(r);let v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ir,a);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return ju.subVectors(r,s),a=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(ju,a);let p=1/(m+v+u);return o=v*p,a=u*p,t.copy(i).addScaledVector(nr,o).addScaledVector(ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cs=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jo.copy(i.boundingBox)),jo.applyMatrix4(e.matrixWorld),this.union(jo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),Qo.subVectors(this.max,$r),sr.subVectors(e.a,$r),rr.subVectors(e.b,$r),or.subVectors(e.c,$r),ts.subVectors(rr,sr),ns.subVectors(or,rr),Rs.subVectors(sr,or);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Rs.z,Rs.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Rs.z,0,-Rs.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Rs.y,Rs.x,0];return!S0(t,sr,rr,or,Qo)||(t=[1,0,0,0,1,0,0,0,1],!S0(t,sr,rr,or,Qo))?!1:(ea.crossVectors(ts,ns),t=[ea.x,ea.y,ea.z],S0(t,sr,rr,or,Qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},bi=[new D,new D,new D,new D,new D,new D,new D,new D],Yn=new D,jo=new cs,sr=new D,rr=new D,or=new D,ts=new D,ns=new D,Rs=new D,$r=new D,Qo=new D,ea=new D,Ps=new D;function S0(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ps.fromArray(n,r);let a=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),c=e.dot(Ps),l=t.dot(Ps),h=i.dot(Ps);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Tt=new D,ta=new we,tg=0,vn=class extends li{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=z0,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==z0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var to=class extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var no=class extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Et=class extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}},ng=new cs,Wr=new D,w0=new D,mr=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ng.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wr.subVectors(e,this.center);let t=Wr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Wr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(w0.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wr.copy(e.center).add(w0)),this.expandByPoint(Wr.copy(e.center).sub(w0))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ig=0,Un=new at,E0=new Fn,ar=new D,gn=new cs,Xr=new cs,Ft=new D,en=class n extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G1(e)?no:to)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Pe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return E0.lookAt(e),E0.updateMatrix(),this.applyMatrix4(E0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Et(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(gn.min,Xr.min),gn.expandByPoint(Ft),Ft.addVectors(gn.max,Xr.max),gn.expandByPoint(Ft)):(gn.expandByPoint(Xr.min),gn.expandByPoint(Xr.max))}gn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ft.fromBufferAttribute(a,l),c&&(ar.fromBufferAttribute(e,l),Ft.add(ar)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let x=0;x<i.count;x++)a[x]=new D,c[x]=new D;let l=new D,h=new D,f=new D,u=new we,d=new we,g=new we,v=new D,m=new D;function p(x,T,I){l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,T),f.fromBufferAttribute(i,I),u.fromBufferAttribute(r,x),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,I),h.sub(l),f.sub(l),d.sub(u),g.sub(u);let C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(C),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),a[x].add(v),a[T].add(v),a[I].add(v),c[x].add(m),c[T].add(m),c[I].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,T=M.length;x<T;++x){let I=M[x],C=I.start,R=I.count;for(let k=C,G=C+R;k<G;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let w=new D,b=new D,A=new D,E=new D;function P(x){A.fromBufferAttribute(s,x),E.copy(A);let T=a[x];w.copy(T),w.sub(A.multiplyScalar(A.dot(T))).normalize(),b.crossVectors(E,T);let C=b.dot(c[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,C)}for(let x=0,T=M.length;x<T;++x){let I=M[x],C=I.start,R=I.count;for(let k=C,G=C+R;k<G;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,f=new D;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h),d=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let p=0;p<h;p++)u[g++]=l[d++]}return new vn(u,h,f)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=e(u,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var sg=0,Os=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=Eo(),this.name="",this.type="Material",this.blending=Ns,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ee(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ga&&(i.blendSrc=this.blendSrc),this.blendDst!==_a&&(i.blendDst=this.blendDst),this.blendEquation!==os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==B0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Si=new D,T0=new D,na=new D,is=new D,A0=new D,ia=new D,C0=new D,io=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){T0.copy(e).add(t).multiplyScalar(.5),na.copy(t).sub(e).normalize(),is.copy(this.origin).sub(T0);let r=e.distanceTo(t)*.5,o=-this.direction.dot(na),a=is.dot(this.direction),c=-is.dot(na),l=is.lengthSq(),h=Math.abs(1-o*o),f,u,d,g;if(h>0)if(f=o*c-a,u=o*a-c,g=r*h,f>=0)if(u>=-g)if(u<=g){let v=1/h;f*=v,u*=v,d=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(T0).addScaledVector(na,u),d}intersectSphere(e,t){Si.subVectors(e.center,this.origin);let i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){A0.subVectors(t,e),ia.subVectors(i,e),C0.crossVectors(A0,ia);let o=this.direction.dot(C0),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;is.subVectors(this.origin,e);let c=a*this.direction.dot(ia.crossVectors(is,ia));if(c<0)return null;let l=a*this.direction.dot(A0.cross(is));if(l<0||c+l>o)return null;let h=-a*is.dot(C0);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},so=class extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=X0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Qu=new at,Is=new io,sa=new mr,ef=new D,ra=new D,oa=new D,aa=new D,R0=new D,ca=new D,tf=new D,la=new D,Fe=class extends Fn{constructor(e=new en,t=new so){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ca.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(R0.fromBufferAttribute(f,e),o?ca.addScaledVector(R0,h):ca.addScaledVector(R0.sub(t),h))}t.add(ca)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(r),Is.copy(e.ray).recast(e.near),!(sa.containsPoint(Is.origin)===!1&&(Is.intersectSphere(sa,ef)===null||Is.origin.distanceToSquared(ef)>(e.far-e.near)**2))&&(Qu.copy(r).invert(),Is.copy(e.ray).applyMatrix4(Qu),!(i.boundingBox!==null&&Is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=M,A=w;b<A;b+=3){let E=a.getX(b),P=a.getX(b+1),x=a.getX(b+2);s=ha(this,p,e,i,l,h,f,E,P,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let M=a.getX(m),w=a.getX(m+1),b=a.getX(m+2);s=ha(this,o,e,i,l,h,f,M,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let b=M,A=w;b<A;b+=3){let E=b,P=b+1,x=b+2;s=ha(this,p,e,i,l,h,f,E,P,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let M=m,w=m+1,b=m+2;s=ha(this,o,e,i,l,h,f,M,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function rg(n,e,t,i,s,r,o,a){let c;if(e.side===tn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Ei,a),c===null)return null;la.copy(a),la.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(la);return l<t.near||l>t.far?null:{distance:l,point:la.clone(),object:n}}function ha(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ra),n.getVertexPosition(c,oa),n.getVertexPosition(l,aa);let h=rg(n,e,t,i,ra,oa,aa,tf);if(h){let f=new D;rs.getBarycoord(tf,ra,oa,aa,f),s&&(h.uv=rs.getInterpolatedAttribute(s,a,c,l,f,new we)),r&&(h.uv1=rs.getInterpolatedAttribute(r,a,c,l,f,new we)),o&&(h.normal=rs.getInterpolatedAttribute(o,a,c,l,f,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new D,materialIndex:0};rs.getNormal(ra,oa,aa,u.normal),h.face=u,h.barycoord=f}return h}var Da=class extends rn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Ot,h=Ot,f,u){super(null,o,a,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var P0=new D,og=new D,ag=new Pe,oi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=P0.subVectors(i,t).cross(og.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(P0),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ag.getNormalMatrix(e),s=this.coplanarPoint(P0).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ls=new mr,cg=new we(.5,.5),ua=new D,ro=class{constructor(e=new oi,t=new oi,i=new oi,s=new oi,r=new oi,o=new oi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],M=r[12],w=r[13],b=r[14],A=r[15];if(s[0].setComponents(l-o,d-h,p-g,A-M).normalize(),s[1].setComponents(l+o,d+h,p+g,A+M).normalize(),s[2].setComponents(l+a,d+f,p+v,A+w).normalize(),s[3].setComponents(l-a,d-f,p-v,A-w).normalize(),i)s[4].setComponents(c,u,m,b).normalize(),s[5].setComponents(l-c,d-u,p-m,A-b).normalize();else if(s[4].setComponents(l-c,d-u,p-m,A-b).normalize(),t===Zn)s[5].setComponents(l+c,d+u,p+m,A+b).normalize();else if(t===jr)s[5].setComponents(c,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);let t=cg.distanceTo(e.center);return Ls.radius=.7071067811865476+t,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ua.x=s.normal.x>0?e.max.x:e.min.x,ua.y=s.normal.y>0?e.max.y:e.min.y,ua.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var oo=class extends rn{constructor(e=[],t=ds,i,s,r,o,a,c,l,h){super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Ti=class extends rn{constructor(e,t,i=Jn,s,r,o,a=Ot,c=Ot,l,h=ci,f=1){if(h!==ci&&h!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Na=class extends Ti{constructor(e,t=Jn,i=ds,s,r,o=Ot,a=Ot,c,l=ci){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ao=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},on=class n extends en{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(f,2));function g(v,m,p,M,w,b,A,E,P,x,T){let I=b/P,C=A/x,R=b/2,k=A/2,G=E/2,N=P+1,B=x+1,H=0,j=0,Q=new D;for(let le=0;le<B;le++){let xe=le*C-k;for(let be=0;be<N;be++){let We=be*I-R;Q[v]=We*M,Q[m]=xe*w,Q[p]=G,l.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[p]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),f.push(be/P),f.push(1-le/x),H+=1}}for(let le=0;le<x;le++)for(let xe=0;xe<P;xe++){let be=u+xe+N*le,We=u+xe+N*(le+1),Je=u+(xe+1)+N*(le+1),Ne=u+(xe+1)+N*le;c.push(be,We,Ne),c.push(We,Je,Ne),j+=6}a.addGroup(d,j,T),d+=j,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ai=class n extends en{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,v=[],m=i/2,p=0;M(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Et(f,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(d,2));function M(){let b=new D,A=new D,E=0,P=(t-e)/i;for(let x=0;x<=r;x++){let T=[],I=x/r,C=I*(t-e)+e;for(let R=0;R<=s;R++){let k=R/s,G=k*c+a,N=Math.sin(G),B=Math.cos(G);A.x=C*N,A.y=-I*i+m,A.z=C*B,f.push(A.x,A.y,A.z),b.set(N,P,B).normalize(),u.push(b.x,b.y,b.z),d.push(k,1-I),T.push(g++)}v.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let I=v[T][x],C=v[T+1][x],R=v[T+1][x+1],k=v[T][x+1];(e>0||T!==0)&&(h.push(I,C,k),E+=3),(t>0||T!==r-1)&&(h.push(C,R,k),E+=3)}l.addGroup(p,E,0),p+=E}function w(b){let A=g,E=new we,P=new D,x=0,T=b===!0?e:t,I=b===!0?1:-1;for(let R=1;R<=s;R++)f.push(0,m*I,0),u.push(0,I,0),d.push(.5,.5),g++;let C=g;for(let R=0;R<=s;R++){let G=R/s*c+a,N=Math.cos(G),B=Math.sin(G);P.x=T*B,P.y=m*I,P.z=T*N,f.push(P.x,P.y,P.z),u.push(0,I,0),E.x=N*.5+.5,E.y=B*.5*I+.5,d.push(E.x,E.y),g++}for(let R=0;R<s;R++){let k=A+R,G=C+R;b===!0?h.push(G,G+1,k):h.push(G+1,G,k),x+=3}l.addGroup(p,x,b===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},gr=class n extends Ai{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ee("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new we:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new D,s=[],r=[],o=[],a=new D,c=new at;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ve(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ve(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},co=class extends On{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new we){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ua=class extends co{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hh(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+f)+(c-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var nf=new D,sf=new D,I0=new hh,L0=new hh,D0=new hh,ls=class extends On{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(sf.subVectors(s[0],s[1]).add(s[0]),l=sf);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(nf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=nf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),I0.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,v,m),L0.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,v,m),D0.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(I0.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),L0.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),D0.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return i.set(I0.calc(c),L0.calc(c),D0.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function rf(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function lg(n,e){let t=1-n;return t*t*e}function hg(n,e){return 2*(1-n)*n*e}function ug(n,e){return n*n*e}function qr(n,e,t,i){return lg(n,e)+hg(n,t)+ug(n,i)}function fg(n,e){let t=1-n;return t*t*t*e}function dg(n,e){let t=1-n;return 3*t*t*n*e}function pg(n,e){return 3*(1-n)*n*n*e}function mg(n,e){return n*n*n*e}function Yr(n,e,t,i,s){return fg(n,e)+dg(n,t)+pg(n,i)+mg(n,s)}var Fa=class extends On{constructor(e=new we,t=new we,i=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new we){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Yr(e,s.x,r.x,o.x,a.x),Yr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Oa=class extends On{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Yr(e,s.x,r.x,o.x,a.x),Yr(e,s.y,r.y,o.y,a.y),Yr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ba=class extends On{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends On{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends On{constructor(e=new we,t=new we,i=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new we){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(qr(e,s.x,r.x,o.x),qr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lo=class extends On{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(qr(e,s.x,r.x,o.x),qr(e,s.y,r.y,o.y),qr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(rf(a,c.x,l.x,h.x,f.x),rf(a,c.y,l.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new we().fromArray(s))}return this}},gg=Object.freeze({__proto__:null,ArcCurve:Ua,CatmullRomCurve3:ls,CubicBezierCurve:Fa,CubicBezierCurve3:Oa,EllipseCurve:co,LineCurve:Ba,LineCurve3:za,QuadraticBezierCurve:ka,QuadraticBezierCurve3:lo,SplineCurve:Va});var an=class n extends en{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,f=e/a,u=t/c,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let M=p*u-o;for(let w=0;w<l;w++){let b=w*f-r;g.push(b,-M,0),v.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let w=M+l*p,b=M+l*(p+1),A=M+1+l*(p+1),E=M+1+l*p;d.push(w,b,E),d.push(b,A,E)}this.setIndex(d),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var ho=class n extends en{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new D,u=new D,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){let M=[],w=p/i,b=0;p===0&&o===0?b=.5/t:p===i&&c===Math.PI&&(b=-.5/t);for(let A=0;A<=t;A++){let E=A/t;f.x=-e*Math.cos(s+E*r)*Math.sin(o+w*a),f.y=e*Math.cos(o+w*a),f.z=e*Math.sin(s+E*r)*Math.sin(o+w*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(E+b,1-w),M.push(l++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){let w=h[p][M+1],b=h[p][M],A=h[p+1][M],E=h[p+1][M+1];(p!==0||o>0)&&d.push(w,b,E),(p!==i-1||c<Math.PI)&&d.push(b,A,E)}this.setIndex(d),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Bs=class n extends en{constructor(e=new lo(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,c=new D,l=new we,h=new D,f=[],u=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Et(f,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(d,2));function v(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),M(),p()}function m(w){h=e.getPointAt(w/t,h);let b=o.normals[w],A=o.binormals[w];for(let E=0;E<=s;E++){let P=E/s*Math.PI*2,x=Math.sin(P),T=-Math.cos(P);c.x=T*b.x+x*A.x,c.y=T*b.y+x*A.y,c.z=T*b.z+x*A.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,f.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=t;w++)for(let b=1;b<=s;b++){let A=(s+1)*(w-1)+(b-1),E=(s+1)*w+(b-1),P=(s+1)*w+b,x=(s+1)*(w-1)+b;g.push(A,E,x),g.push(E,P,x)}}function M(){for(let w=0;w<=t;w++)for(let b=0;b<=s;b++)l.x=w/t,l.y=b/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new gg[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Gs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(of(s))s.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(of(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Yt(n){let e={};for(let t=0;t<n.length;t++){let i=Gs(n[t]);for(let s in i)e[s]=i[s]}return e}function of(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function _g(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function uh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}var Yf={clone:Gs,merge:Yt},xg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,It=class extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xg,this.fragmentShader=vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=_g(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},_r=class extends It{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ga=class extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ha=class extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fa(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var hs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$a=class extends hs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:U0,endingEnd:U0}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case F0:r=e,a=2*t-i;break;case O0:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case F0:o=e,c=2*i-t;break;case O0:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,M=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,w=(-1-d)*m+(1.5+d)*v+.5*g,b=d*m-d*v;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+M*o[l+A]+w*o[c+A]+b*o[f+A];return r}},Wa=class extends hs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*f+o[c+u]*h;return r}},Xa=class extends hs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qa=class extends hs{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.settings||this.DefaultSettings_,f=h.inTangents,u=h.outTangents;if(!f||!u){let v=(i-t)/(s-t),m=1-v;for(let p=0;p!==a;++p)r[p]=o[l+p]*m+o[c+p]*v;return r}let d=a*2,g=e-1;for(let v=0;v!==a;++v){let m=o[l+v],p=o[c+v],M=g*d+v*2,w=u[M],b=u[M+1],A=e*d+v*2,E=f[A],P=f[A+1],x=(i-t)/(s-t),T,I,C,R,k;for(let G=0;G<8;G++){T=x*x,I=T*x,C=1-x,R=C*C,k=R*C;let B=k*t+3*R*x*w+3*C*T*E+I*s-i;if(Math.abs(B)<1e-10)break;let H=3*R*(w-t)+6*C*x*(E-w)+3*T*(s-E);if(Math.abs(H)<1e-10)break;x=x-B/H,x=Math.max(0,Math.min(1,x))}r[v]=k*m+3*R*x*b+3*C*T*P+I*p}return r}},yn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fa(t,this.TimeBufferType),this.values=fa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:fa(e.times,Array),values:fa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new qa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Zr:t=this.InterpolantFactoryMethodDiscrete;break;case Aa:t=this.InterpolantFactoryMethodLinear;break;case ma:t=this.InterpolantFactoryMethodSmooth;break;case N0:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ee("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return Aa;case this.InterpolantFactoryMethodSmooth:return ma;case this.InterpolantFactoryMethodBezier:return N0}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Te("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Te("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Te("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Te("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&H1(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Te("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ma,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*i,u=f-i,d=f+i;for(let g=0;g!==i;++g){let v=t[f+g];if(v!==t[u+g]||v!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*i,u=o*i;for(let d=0;d!==i;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Aa;var us=class extends yn{constructor(e,t,i){super(e,t,i)}};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Zr;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Ya=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}};Ya.prototype.ValueTypeName="color";var Za=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}};Za.prototype.ValueTypeName="number";var Ja=class extends hs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)hi.slerpFlat(r,0,o,l-a,o,l,c);return r}},uo=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}};uo.prototype.ValueTypeName="quaternion";uo.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends yn{constructor(e,t,i){super(e,t,i)}};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Zr;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}};Ka.prototype.ValueTypeName="vector";var ja=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zf=new ja,Qa=class{constructor(e){this.manager=e!==void 0?e:Zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Qa.DEFAULT_MATERIAL_NAME="__DEFAULT";var da=new D,pa=new hi,ri=new D,fo=class extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(da,pa,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,pa,ri.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(da,pa,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,pa,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ss=new D,af=new we,cf=new we,Xt=class extends fo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(c0*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(c0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,t){return this.getViewBounds(e,af,cf),t.subVectors(cf,af)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(c0*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var zs=class extends fo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var cr=-90,lr=1,ec=class extends Fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(cr,lr,e,t);s.layers=this.layers,this.add(s);let r=new Xt(cr,lr,e,t);r.layers=this.layers,this.add(r);let o=new Xt(cr,lr,e,t);o.layers=this.layers,this.add(o);let a=new Xt(cr,lr,e,t);a.layers=this.layers,this.add(a);let c=new Xt(cr,lr,e,t);c.layers=this.layers,this.add(c);let l=new Xt(cr,lr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},tc=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var fh="\\[\\]\\.:\\/",yg=new RegExp("["+fh+"]","g"),dh="[^"+fh+"]",Mg="[^"+fh.replace("\\.","")+"]",bg=/((?:WC+[\/:])*)/.source.replace("WC",dh),Sg=/(WCOD+)?/.source.replace("WCOD",Mg),wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dh),Eg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dh),Tg=new RegExp("^"+bg+Sg+wg+Eg+"$"),Ag=["material","materials","bones","map"],k0=class{constructor(e,t,i){let s=i||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ot=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yg,"")}static parseTrackName(e){let t=Tg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ag.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Te("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Te("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Te("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Te("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Te("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Te("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=k0;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var KM=new Float32Array(1);var lf=new at,po=class{constructor(e,t,i=0,s=1/0){this.ray=new io(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Te("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lf),this}intersectObject(e,t=!0,i=[]){return V0(e,this,i,t),i.sort(hf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)V0(e[s],this,i,t);return i.sort(hf),i}};function hf(n,e){return n.distance-e.distance}function V0(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)V0(r[o],e,t,!0)}}var G0=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function ph(n,e,t,i){let s=Cg(i);switch(t){case rh:return n*e;case ah:return n*e/s.components*s.byteLength;case cc:return n*e/s.components*s.byteLength;case gs:return n*e*2/s.components*s.byteLength;case lc:return n*e*2/s.components*s.byteLength;case oh:return n*e*3/s.components*s.byteLength;case Bn:return n*e*4/s.components*s.byteLength;case hc:return n*e*4/s.components*s.byteLength;case xo:case vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yo:case Mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fc:case pc:return Math.max(n,16)*Math.max(e,8)/4;case uc:case dc:return Math.max(n,8)*Math.max(e,8)/2;case mc:case gc:case xc:case vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _c:case bo:case yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Uc:case Fc:case Oc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Bc:case zc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case So:case kc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cg(n){switch(n){case Sn:case th:return{byteLength:1,components:1};case vr:case nh:case wn:return{byteLength:2,components:1};case oc:case ac:return{byteLength:2,components:4};case Jn:case rc:case Kn:return{byteLength:4,components:1};case ih:case sh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function xd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Pg(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let h=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let v=f[d];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ig=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lg=`#ifdef USE_ALPHAHASH
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
#endif`,Dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ng=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ug=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Og=`#ifdef USE_AOMAP
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
#endif`,Bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$g=`#ifdef USE_IRIDESCENCE
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
#endif`,Wg=`#ifdef USE_BUMPMAP
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
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,e_=`#define PI 3.141592653589793
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
} // validated`,t_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,n_=`vec3 transformedNormal = objectNormal;
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
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a_="gl_FragColor = linearToOutputTexel( gl_FragColor );",c_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l_=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,u_=`#ifdef USE_ENVMAP
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
#endif`,f_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
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
#endif`,p_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,__=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x_=`#ifdef USE_GRADIENTMAP
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
}`,v_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b_=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif
#include <lightprobes_pars_fragment>`,S_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,w_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,R_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,P_=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,L_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,N_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V_=`#if defined( USE_POINTS_UV )
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
#endif`,G_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Y_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,J_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ex=`#ifdef USE_NORMALMAP
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
#endif`,tx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ox=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,gx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xx=`#ifdef USE_SKINNING
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
#endif`,vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yx=`#ifdef USE_SKINNING
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
#endif`,Mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wx=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ex=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tx=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lx=`uniform sampler2D t2D;
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
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Bx=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zx=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,kx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wx=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Xx=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,qx=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Yx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Zx=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Jx=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Kx=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,jx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qx=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,ev=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,tv=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,nv=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,iv=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,sv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,rv=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,ov=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,av=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,cv=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,lv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,hv=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Oe={alphahash_fragment:Ig,alphahash_pars_fragment:Lg,alphamap_fragment:Dg,alphamap_pars_fragment:Ng,alphatest_fragment:Ug,alphatest_pars_fragment:Fg,aomap_fragment:Og,aomap_pars_fragment:Bg,batching_pars_vertex:zg,batching_vertex:kg,begin_vertex:Vg,beginnormal_vertex:Gg,bsdfs:Hg,iridescence_fragment:$g,bumpmap_pars_fragment:Wg,clipping_planes_fragment:Xg,clipping_planes_pars_fragment:qg,clipping_planes_pars_vertex:Yg,clipping_planes_vertex:Zg,color_fragment:Jg,color_pars_fragment:Kg,color_pars_vertex:jg,color_vertex:Qg,common:e_,cube_uv_reflection_fragment:t_,defaultnormal_vertex:n_,displacementmap_pars_vertex:i_,displacementmap_vertex:s_,emissivemap_fragment:r_,emissivemap_pars_fragment:o_,colorspace_fragment:a_,colorspace_pars_fragment:c_,envmap_fragment:l_,envmap_common_pars_fragment:h_,envmap_pars_fragment:u_,envmap_pars_vertex:f_,envmap_physical_pars_fragment:S_,envmap_vertex:d_,fog_vertex:p_,fog_pars_vertex:m_,fog_fragment:g_,fog_pars_fragment:__,gradientmap_pars_fragment:x_,lightmap_pars_fragment:v_,lights_lambert_fragment:y_,lights_lambert_pars_fragment:M_,lights_pars_begin:b_,lights_toon_fragment:w_,lights_toon_pars_fragment:E_,lights_phong_fragment:T_,lights_phong_pars_fragment:A_,lights_physical_fragment:C_,lights_physical_pars_fragment:R_,lights_fragment_begin:P_,lights_fragment_maps:I_,lights_fragment_end:L_,lightprobes_pars_fragment:D_,logdepthbuf_fragment:N_,logdepthbuf_pars_fragment:U_,logdepthbuf_pars_vertex:F_,logdepthbuf_vertex:O_,map_fragment:B_,map_pars_fragment:z_,map_particle_fragment:k_,map_particle_pars_fragment:V_,metalnessmap_fragment:G_,metalnessmap_pars_fragment:H_,morphinstance_vertex:$_,morphcolor_vertex:W_,morphnormal_vertex:X_,morphtarget_pars_vertex:q_,morphtarget_vertex:Y_,normal_fragment_begin:Z_,normal_fragment_maps:J_,normal_pars_fragment:K_,normal_pars_vertex:j_,normal_vertex:Q_,normalmap_pars_fragment:ex,clearcoat_normal_fragment_begin:tx,clearcoat_normal_fragment_maps:nx,clearcoat_pars_fragment:ix,iridescence_pars_fragment:sx,opaque_fragment:rx,packing:ox,premultiplied_alpha_fragment:ax,project_vertex:cx,dithering_fragment:lx,dithering_pars_fragment:hx,roughnessmap_fragment:ux,roughnessmap_pars_fragment:fx,shadowmap_pars_fragment:dx,shadowmap_pars_vertex:px,shadowmap_vertex:mx,shadowmask_pars_fragment:gx,skinbase_vertex:_x,skinning_pars_vertex:xx,skinning_vertex:vx,skinnormal_vertex:yx,specularmap_fragment:Mx,specularmap_pars_fragment:bx,tonemapping_fragment:Sx,tonemapping_pars_fragment:wx,transmission_fragment:Ex,transmission_pars_fragment:Tx,uv_pars_fragment:Ax,uv_pars_vertex:Cx,uv_vertex:Rx,worldpos_vertex:Px,background_vert:Ix,background_frag:Lx,backgroundCube_vert:Dx,backgroundCube_frag:Nx,cube_vert:Ux,cube_frag:Fx,depth_vert:Ox,depth_frag:Bx,distance_vert:zx,distance_frag:kx,equirect_vert:Vx,equirect_frag:Gx,linedashed_vert:Hx,linedashed_frag:$x,meshbasic_vert:Wx,meshbasic_frag:Xx,meshlambert_vert:qx,meshlambert_frag:Yx,meshmatcap_vert:Zx,meshmatcap_frag:Jx,meshnormal_vert:Kx,meshnormal_frag:jx,meshphong_vert:Qx,meshphong_frag:ev,meshphysical_vert:tv,meshphysical_frag:nv,meshtoon_vert:iv,meshtoon_frag:sv,points_vert:rv,points_frag:ov,shadow_vert:av,shadow_frag:cv,sprite_vert:lv,sprite_frag:hv},ce={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},di={basic:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Yt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Yt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Yt([ce.points,ce.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Yt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Yt([ce.common,ce.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Yt([ce.sprite,ce.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Yt([ce.common,ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Yt([ce.lights,ce.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};di.physical={uniforms:Yt([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var Hc={r:0,b:0,g:0},uv=new at,vd=new Pe;vd.set(-1,0,0,0,1,0,0,0,1);function fv(n,e,t,i,s,r){let o=new Ye(0),a=s===!0?0:1,c,l,h=null,f=0,u=null;function d(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let b=M.backgroundBlurriness>0;w=e.get(w,b)}return w}function g(M){let w=!1,b=d(M);b===null?m(o,a):b&&b.isColor&&(m(b,1),w=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(M,w){let b=d(w);b&&(b.isCubeTexture||b.mapping===go)?(l===void 0&&(l=new Fe(new on(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:Gs(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(uv.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(vd),l.material.toneMapped=ze.getTransfer(b.colorSpace)!==Ze,(h!==b||f!==b.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Fe(new an(2,2),new It({name:"BackgroundMaterial",uniforms:Gs(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ze.getTransfer(b.colorSpace)!==Ze,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,w){M.getRGB(Hc,uh(n)),t.buffers.color.setClear(Hc.r,Hc.g,Hc.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:v,dispose:p}}function dv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(C,R,k,G,N){let B=!1,H=f(C,G,k,R);r!==H&&(r=H,l(r.object)),B=d(C,G,k,N),B&&g(C,G,k,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,b(C,R,k,G),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function h(C){return n.deleteVertexArray(C)}function f(C,R,k,G){let N=G.wireframe===!0,B=i[R.id];B===void 0&&(B={},i[R.id]=B);let H=C.isInstancedMesh===!0?C.id:0,j=B[H];j===void 0&&(j={},B[H]=j);let Q=j[k.id];Q===void 0&&(Q={},j[k.id]=Q);let le=Q[N];return le===void 0&&(le=u(c()),Q[N]=le),le}function u(C){let R=[],k=[],G=[];for(let N=0;N<t;N++)R[N]=0,k[N]=0,G[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:G,object:C,attributes:{},index:null}}function d(C,R,k,G){let N=r.attributes,B=R.attributes,H=0,j=k.getAttributes();for(let Q in j)if(j[Q].location>=0){let xe=N[Q],be=B[Q];if(be===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(be=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(be=C.instanceColor)),xe===void 0||xe.attribute!==be||be&&xe.data!==be.data)return!0;H++}return r.attributesNum!==H||r.index!==G}function g(C,R,k,G){let N={},B=R.attributes,H=0,j=k.getAttributes();for(let Q in j)if(j[Q].location>=0){let xe=B[Q];xe===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(xe=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(xe=C.instanceColor));let be={};be.attribute=xe,xe&&xe.data&&(be.data=xe.data),N[Q]=be,H++}r.attributes=N,r.attributesNum=H,r.index=G}function v(){let C=r.newAttributes;for(let R=0,k=C.length;R<k;R++)C[R]=0}function m(C){p(C,0)}function p(C,R){let k=r.newAttributes,G=r.enabledAttributes,N=r.attributeDivisors;k[C]=1,G[C]===0&&(n.enableVertexAttribArray(C),G[C]=1),N[C]!==R&&(n.vertexAttribDivisor(C,R),N[C]=R)}function M(){let C=r.newAttributes,R=r.enabledAttributes;for(let k=0,G=R.length;k<G;k++)R[k]!==C[k]&&(n.disableVertexAttribArray(k),R[k]=0)}function w(C,R,k,G,N,B,H){H===!0?n.vertexAttribIPointer(C,R,k,N,B):n.vertexAttribPointer(C,R,k,G,N,B)}function b(C,R,k,G){v();let N=G.attributes,B=k.getAttributes(),H=R.defaultAttributeValues;for(let j in B){let Q=B[j];if(Q.location>=0){let le=N[j];if(le===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){let xe=le.normalized,be=le.itemSize,We=e.get(le);if(We===void 0)continue;let Je=We.buffer,Ne=We.type,Z=We.bytesPerElement,fe=Ne===n.INT||Ne===n.UNSIGNED_INT||le.gpuType===rc;if(le.isInterleavedBufferAttribute){let ie=le.data,Ae=ie.stride,Ie=le.offset;if(ie.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Q.locationSize;Ce++)p(Q.location+Ce,ie.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ce=0;Ce<Q.locationSize;Ce++)m(Q.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let Ce=0;Ce<Q.locationSize;Ce++)w(Q.location+Ce,be/Q.locationSize,Ne,xe,Ae*Z,(Ie+be/Q.locationSize*Ce)*Z,fe)}else{if(le.isInstancedBufferAttribute){for(let ie=0;ie<Q.locationSize;ie++)p(Q.location+ie,le.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ie=0;ie<Q.locationSize;ie++)m(Q.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let ie=0;ie<Q.locationSize;ie++)w(Q.location+ie,be/Q.locationSize,Ne,xe,be*Z,be/Q.locationSize*ie*Z,fe)}}else if(H!==void 0){let xe=H[j];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(Q.location,xe);break;case 3:n.vertexAttrib3fv(Q.location,xe);break;case 4:n.vertexAttrib4fv(Q.location,xe);break;default:n.vertexAttrib1fv(Q.location,xe)}}}}M()}function A(){T();for(let C in i){let R=i[C];for(let k in R){let G=R[k];for(let N in G){let B=G[N];for(let H in B)h(B[H].object),delete B[H];delete G[N]}}delete i[C]}}function E(C){if(i[C.id]===void 0)return;let R=i[C.id];for(let k in R){let G=R[k];for(let N in G){let B=G[N];for(let H in B)h(B[H].object),delete B[H];delete G[N]}}delete i[C.id]}function P(C){for(let R in i){let k=i[R];for(let G in k){let N=k[G];if(N[C.id]===void 0)continue;let B=N[C.id];for(let H in B)h(B[H].object),delete B[H];delete N[C.id]}}}function x(C){for(let R in i){let k=i[R],G=C.isInstancedMesh===!0?C.id:0,N=k[G];if(N!==void 0){for(let B in N){let H=N[B];for(let j in H)h(H[j].object),delete H[j];delete N[B]}delete k[G],Object.keys(k).length===0&&delete i[R]}}}function T(){I(),o=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function pv(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function mv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Bn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let x=P===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Sn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Kn&&!x)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ee("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:b,maxSamples:A,samples:E}}function gv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new oi,a=new Pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:i,w=M*4,b=p.clippingState||null;c.value=b,b=h(g,u,w,d);for(let A=0;A!==w;++A)b[A]=t[A];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=d+v*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,b=d;w!==v;++w,b+=4)o.copy(f[w]).applyMatrix4(M,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var _s=4,Jf=[.125,.215,.35,.446,.526,.582],Hs=20,_v=256,To=new zs,Kf=new Ye,mh=null,gh=0,_h=0,xh=!1,xv=new D,Wc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=xv}=r;mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mh,gh,_h),this._renderer.xr.enabled=xh,e.scissorTest=!1,Mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:At,minFilter:At,generateMipmaps:!1,type:wn,format:Bn,colorSpace:Jr,depthBuffer:!1},s=jf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jf(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vv(r)),this._blurMaterial=Mv(r,e,t),this._ggxMaterial=yv(r,e,t)}return s}_compileMaterial(e){let t=new Fe(new en,e);this._renderer.compile(t,To)}_sceneToCubeUV(e,t,i,s,r){let c=new Xt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Kf),f.toneMapping=bn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new on,new so({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Kf),p=!0);for(let w=0;w<6;w++){let b=w%3;b===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):b===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let A=this._cubeSize;Mr(s,b*A,w>2?A:0,A,A),f.setRenderTarget(s),p&&f.render(v,c),f.render(e,c)}f.toneMapping=d,f.autoClear=u,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ds||e.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Mr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,To)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=0+l*1.25,d=f*u,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-_s?i-g+_s:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=g-t,Mr(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,To),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Mr(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(a,To)}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Te("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[s];f.material=l;let u=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Hs-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Hs;m>Hs&&Ee(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hs}`);let p=[],M=0;for(let P=0;P<Hs;++P){let x=P/v,T=Math.exp(-x*x/2);p.push(T),P===0?M+=T:P<m&&(M+=2*T)}for(let P=0;P<p.length;P++)p[P]=p[P]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:w}=this;u.dTheta.value=g,u.mipInt.value=w-i;let b=this._sizeLods[s],A=3*b*(s>w-_s?s-w+_s:0),E=4*(this._cubeSize-b);Mr(t,A,E,3*b,2*b),c.setRenderTarget(t),c.render(f,To)}};function vv(n){let e=[],t=[],i=[],s=n,r=n-_s+1+Jf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-_s?c=Jf[o-n+_s-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*d),w=new Float32Array(m*g*d),b=new Float32Array(p*g*d);for(let E=0;E<d;E++){let P=E%3*2/3-1,x=E>2?0:-1,T=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];M.set(T,v*g*E),w.set(u,m*g*E);let I=[E,E,E,E,E,E];b.set(I,p*g*E)}let A=new en;A.setAttribute("position",new vn(M,v)),A.setAttribute("uv",new vn(w,m)),A.setAttribute("faceIndex",new vn(b,p)),i.push(new Fe(A,null)),s>_s&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function jf(n,e,t){let i=new qt(n,e,t);return i.texture.mapping=go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function yv(n,e,t){return new It({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_v,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Mv(n,e,t){let i=new Float32Array(Hs),s=new D(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Qf(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ed(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Yc(){return`

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
	`}var Xc=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new oo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new on(5,5,5),r=new It({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:ui});r.uniforms.tEquirect.value=t;let o=new Fe(s,r),a=t.minFilter;return t.minFilter===ps&&(t.minFilter=At),new ec(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function bv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===nc||d===ic)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new Xc(g.height);return v.fromEquirectangularTexture(n,u),e.set(u,v),u.addEventListener("dispose",l),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,g=d===nc||d===ic,v=d===ds||d===Vs;if(g||v){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Wc(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||v&&M&&c(M)?(i===null&&(i=new Wc(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,d){return d===nc?u.mapping=ds:d===ic&&(u.mapping=Vs),u}function c(u){let d=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&d++;return d===g}function l(u){let d=u.target;d.removeEventListener("dispose",l);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Sv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ca("WebGLRenderer: "+i+" extension not supported."),s}}}function wv(n,e,t,i){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(f){let u=f.attributes;for(let d in u)e.update(u[d],n.ARRAY_BUFFER)}function l(f){let u=[],d=f.index,g=f.attributes.position,v=0;if(g===void 0)return;if(d!==null){let M=d.array;v=d.version;for(let w=0,b=M.length;w<b;w+=3){let A=M[w+0],E=M[w+1],P=M[w+2];u.push(A,E,E,P,P,A)}}else{let M=g.array;v=g.version;for(let w=0,b=M.length/3-1;w<b;w+=3){let A=w+0,E=w+1,P=w+2;u.push(A,E,E,P,P,A)}}let m=new(g.count>=65535?no:to)(u,1);m.version=v;let p=r.get(f);p&&e.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function Ev(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*o),t.update(u,i,1)}function l(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*o,d),t.update(u,i,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let v=0;for(let m=0;m<d;m++)v+=u[m];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Tv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Te("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Av(n,e,t){let i=new WeakMap,s=new yt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==f){let T=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;d===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let b=a.attributes.position.count*w,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*A*4*f),P=new eo(E,b,A,f);P.type=Kn,P.needsUpdate=!0;let x=w*4;for(let I=0;I<f;I++){let C=m[I],R=p[I],k=M[I],G=b*A*4*I;for(let N=0;N<C.count;N++){let B=N*x;d===!0&&(s.fromBufferAttribute(C,N),E[G+B+0]=s.x,E[G+B+1]=s.y,E[G+B+2]=s.z,E[G+B+3]=0),g===!0&&(s.fromBufferAttribute(R,N),E[G+B+4]=s.x,E[G+B+5]=s.y,E[G+B+6]=s.z,E[G+B+7]=0),v===!0&&(s.fromBufferAttribute(k,N),E[G+B+8]=s.x,E[G+B+9]=s.y,E[G+B+10]=s.z,E[G+B+11]=k.itemSize===4?s.w:1)}}u={count:f,texture:P,size:new we(b,A)},i.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Cv(n,e,t,i,s){let r=new WeakMap;function o(l){let h=s.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Rv={[q0]:"LINEAR_TONE_MAPPING",[Y0]:"REINHARD_TONE_MAPPING",[Z0]:"CINEON_TONE_MAPPING",[J0]:"ACES_FILMIC_TONE_MAPPING",[j0]:"AGX_TONE_MAPPING",[Q0]:"NEUTRAL_TONE_MAPPING",[K0]:"CUSTOM_TONE_MAPPING"};function Pv(n,e,t,i,s){let r=new qt(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Ti(e,t):void 0}),o=new qt(e,t,{type:wn,depthBuffer:!1,stencilBuffer:!1}),a=new en;a.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Et([0,2,0,0,2,0],2));let c=new _r({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Fe(a,c),h=new zs(-1,1,1,-1,0,1),f=null,u=null,d=!1,g,v=null,m=[],p=!1;this.setSize=function(M,w){r.setSize(M,w),o.setSize(M,w);for(let b=0;b<m.length;b++){let A=m[b];A.setSize&&A.setSize(M,w)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;let w=r.width,b=r.height;for(let A=0;A<m.length;A++){let E=m[A];E.setSize&&E.setSize(w,b)}},this.begin=function(M,w){if(d||M.toneMapping===bn&&m.length===0)return!1;if(v=w,w!==null){let b=w.width,A=w.height;(r.width!==b||r.height!==A)&&this.setSize(b,A)}return p===!1&&M.setRenderTarget(r),g=M.toneMapping,M.toneMapping=bn,!0},this.hasRenderPass=function(){return p},this.end=function(M,w){M.toneMapping=g,d=!0;let b=r,A=o;for(let E=0;E<m.length;E++){let P=m[E];if(P.enabled!==!1&&(P.render(M,A,b,w),P.needsSwap!==!1)){let x=b;b=A,A=x}}if(f!==M.outputColorSpace||u!==M.toneMapping){f=M.outputColorSpace,u=M.toneMapping,c.defines={},ze.getTransfer(f)===Ze&&(c.defines.SRGB_TRANSFER="");let E=Rv[u];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(v),M.render(l,h),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),c.dispose()}}var yd=new rn,Mh=new Ti(1,1),Md=new eo,bd=new La,Sd=new oo,td=[],nd=[],id=new Float32Array(16),sd=new Float32Array(9),rd=new Float32Array(4);function Sr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=td[s];if(r===void 0&&(r=new Float32Array(s),td[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Zc(n,e){let t=nd[e];t===void 0&&(t=new Int32Array(e),nd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Iv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Lv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function Dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function Nv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function Uv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;rd.set(i),n.uniformMatrix2fv(this.addr,!1,rd),Dt(t,i)}}function Fv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;sd.set(i),n.uniformMatrix3fv(this.addr,!1,sd),Dt(t,i)}}function Ov(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;id.set(i),n.uniformMatrix4fv(this.addr,!1,id),Dt(t,i)}}function Bv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function kv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function Vv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function Gv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Hv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function $v(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function Wv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function Xv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Mh.compareFunction=t.isReversedDepthBuffer()?Gc:Vc,r=Mh):r=yd,t.setTexture2D(e||r,s)}function qv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||bd,s)}function Yv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Sd,s)}function Zv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Md,s)}function Jv(n){switch(n){case 5126:return Iv;case 35664:return Lv;case 35665:return Dv;case 35666:return Nv;case 35674:return Uv;case 35675:return Fv;case 35676:return Ov;case 5124:case 35670:return Bv;case 35667:case 35671:return zv;case 35668:case 35672:return kv;case 35669:case 35673:return Vv;case 5125:return Gv;case 36294:return Hv;case 36295:return $v;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return Zv}}function Kv(n,e){n.uniform1fv(this.addr,e)}function jv(n,e){let t=Sr(e,this.size,2);n.uniform2fv(this.addr,t)}function Qv(n,e){let t=Sr(e,this.size,3);n.uniform3fv(this.addr,t)}function e2(n,e){let t=Sr(e,this.size,4);n.uniform4fv(this.addr,t)}function t2(n,e){let t=Sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function n2(n,e){let t=Sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function i2(n,e){let t=Sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function s2(n,e){n.uniform1iv(this.addr,e)}function r2(n,e){n.uniform2iv(this.addr,e)}function o2(n,e){n.uniform3iv(this.addr,e)}function a2(n,e){n.uniform4iv(this.addr,e)}function c2(n,e){n.uniform1uiv(this.addr,e)}function l2(n,e){n.uniform2uiv(this.addr,e)}function h2(n,e){n.uniform3uiv(this.addr,e)}function u2(n,e){n.uniform4uiv(this.addr,e)}function f2(n,e,t){let i=this.cache,s=e.length,r=Zc(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Mh:o=yd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function d2(n,e,t){let i=this.cache,s=e.length,r=Zc(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||bd,r[o])}function p2(n,e,t){let i=this.cache,s=e.length,r=Zc(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Sd,r[o])}function m2(n,e,t){let i=this.cache,s=e.length,r=Zc(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Md,r[o])}function g2(n){switch(n){case 5126:return Kv;case 35664:return jv;case 35665:return Qv;case 35666:return e2;case 35674:return t2;case 35675:return n2;case 35676:return i2;case 5124:case 35670:return s2;case 35667:case 35671:return r2;case 35668:case 35672:return o2;case 35669:case 35673:return a2;case 5125:return c2;case 36294:return l2;case 36295:return h2;case 36296:return u2;case 35678:case 36198:case 36298:case 36306:case 35682:return f2;case 35679:case 36299:case 36307:return d2;case 35680:case 36300:case 36308:case 36293:return p2;case 36289:case 36303:case 36311:case 36292:return m2}}var bh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Jv(t.type)}},Sh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=g2(t.type)}},wh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},vh=/(\w+)(\])?(\[|\.)?/g;function od(n,e){n.seq.push(e),n.map[e.id]=e}function _2(n,e,t){let i=n.name,s=i.length;for(vh.lastIndex=0;;){let r=vh.exec(i),o=vh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){od(t,l===void 0?new bh(a,n,e):new Sh(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new wh(a),od(t,f)),t=f}}}var br=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);_2(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function ad(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var x2=37297,v2=0;function y2(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var cd=new Pe;function M2(n){ze._getMatrix(cd,ze.workingColorSpace,n);let e=`mat3( ${cd.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(n)){case Kr:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ld(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+y2(n.getShaderSource(e),a)}else return r}function b2(n,e){let t=M2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var S2={[q0]:"Linear",[Y0]:"Reinhard",[Z0]:"Cineon",[J0]:"ACESFilmic",[j0]:"AgX",[Q0]:"Neutral",[K0]:"Custom"};function w2(n,e){let t=S2[e];return t===void 0?(Ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $c=new D;function E2(){ze.getLuminanceCoefficients($c);let n=$c.x.toFixed(4),e=$c.y.toFixed(4),t=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function A2(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function C2(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Co(n){return n!==""}function hd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ud(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var R2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(n){return n.replace(R2,I2)}var P2=new Map;function I2(n,e){let t=Oe[e];if(t===void 0){let i=P2.get(e);if(i!==void 0)t=Oe[i],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Eh(t)}var L2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fd(n){return n.replace(L2,D2)}function D2(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var N2={[mo]:"SHADOWMAP_TYPE_PCF",[xr]:"SHADOWMAP_TYPE_VSM"};function U2(n){return N2[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var F2={[ds]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE_UV"};function O2(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":F2[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var B2={[Vs]:"ENVMAP_MODE_REFRACTION"};function z2(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":B2[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var k2={[X0]:"ENVMAP_BLENDING_MULTIPLY",[Lf]:"ENVMAP_BLENDING_MIX",[Df]:"ENVMAP_BLENDING_ADD"};function V2(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":k2[n.combine]||"ENVMAP_BLENDING_NONE"}function G2(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function H2(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=U2(t),l=O2(t),h=z2(t),f=V2(t),u=G2(t),d=T2(t),g=A2(r),v=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Co).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Co).join(`
`),p.length>0&&(p+=`
`)):(m=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),p=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==bn?w2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,b2("linearToOutputTexel",t.outputColorSpace),E2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Co).join(`
`)),o=Eh(o),o=hd(o,t),o=ud(o,t),a=Eh(a),a=hd(a,t),a=ud(a,t),o=fd(o),a=fd(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=M+m+o,b=M+p+a,A=ad(s,s.VERTEX_SHADER,w),E=ad(s,s.FRAGMENT_SHADER,b);s.attachShader(v,A),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(C){if(n.debug.checkShaderErrors){let R=s.getProgramInfoLog(v)||"",k=s.getShaderInfoLog(A)||"",G=s.getShaderInfoLog(E)||"",N=R.trim(),B=k.trim(),H=G.trim(),j=!0,Q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,A,E);else{let le=ld(s,A,"vertex"),xe=ld(s,E,"fragment");Te("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+le+`
`+xe)}else N!==""?Ee("WebGLProgram: Program Info Log:",N):(B===""||H==="")&&(Q=!1);Q&&(C.diagnostics={runnable:j,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(A),s.deleteShader(E),x=new br(s,v),T=C2(s,v)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(v,x2)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v2++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=E,this}var $2=0,Th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ah(e),t.set(e,i)),i}},Ah=class{constructor(e){this.id=$2++,this.code=e,this.usedTimes=0}};function W2(n){return n===gs||n===bo||n===So}function X2(n,e,t,i,s,r){let o=new dr,a=new Th,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,T,I,C,R,k){let G=C.fog,N=R.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=e.get(x.envMap||B,H),Q=j&&j.mapping===go?j.image.height:null,le=d[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ee("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let xe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,be=xe!==void 0?xe.length:0,We=0;N.morphAttributes.position!==void 0&&(We=1),N.morphAttributes.normal!==void 0&&(We=2),N.morphAttributes.color!==void 0&&(We=3);let Je,Ne,Z,fe;if(le){let Le=di[le];Je=Le.vertexShader,Ne=Le.fragmentShader}else Je=x.vertexShader,Ne=x.fragmentShader,a.update(x),Z=a.getVertexShaderID(x),fe=a.getFragmentShaderID(x);let ie=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Ie=R.isInstancedMesh===!0,Ce=R.isBatchedMesh===!0,ut=!!x.map,Ge=!!x.matcap,Ke=!!j,rt=!!x.aoMap,ke=!!x.lightMap,Rt=!!x.bumpMap,ft=!!x.normalMap,dn=!!x.displacementMap,U=!!x.emissiveMap,Pt=!!x.metalnessMap,He=!!x.roughnessMap,nt=x.anisotropy>0,ae=x.clearcoat>0,xt=x.dispersion>0,S=x.iridescence>0,_=x.sheen>0,O=x.transmission>0,q=nt&&!!x.anisotropyMap,K=ae&&!!x.clearcoatMap,ee=ae&&!!x.clearcoatNormalMap,oe=ae&&!!x.clearcoatRoughnessMap,W=S&&!!x.iridescenceMap,Y=S&&!!x.iridescenceThicknessMap,de=_&&!!x.sheenColorMap,ge=_&&!!x.sheenRoughnessMap,se=!!x.specularMap,te=!!x.specularColorMap,Re=!!x.specularIntensityMap,Ue=O&&!!x.transmissionMap,qe=O&&!!x.thicknessMap,L=!!x.gradientMap,ne=!!x.alphaMap,X=x.alphaTest>0,pe=!!x.alphaHash,re=!!x.extensions,J=bn;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(J=n.toneMapping);let ye={shaderID:le,shaderType:x.type,shaderName:x.name,vertexShader:Je,fragmentShader:Ne,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Ce,batchingColor:Ce&&R._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&R.instanceColor!==null,instancingMorph:Ie&&R.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ut,matcap:Ge,envMap:Ke,envMapMode:Ke&&j.mapping,envMapCubeUVHeight:Q,aoMap:rt,lightMap:ke,bumpMap:Rt,normalMap:ft,displacementMap:dn,emissiveMap:U,normalMapObjectSpace:ft&&x.normalMapType===Ff,normalMapTangentSpace:ft&&x.normalMapType===ch,packedNormalMap:ft&&x.normalMapType===ch&&W2(x.normalMap.format),metalnessMap:Pt,roughnessMap:He,anisotropy:nt,anisotropyMap:q,clearcoat:ae,clearcoatMap:K,clearcoatNormalMap:ee,clearcoatRoughnessMap:oe,dispersion:xt,iridescence:S,iridescenceMap:W,iridescenceThicknessMap:Y,sheen:_,sheenColorMap:de,sheenRoughnessMap:ge,specularMap:se,specularColorMap:te,specularIntensityMap:Re,transmission:O,transmissionMap:Ue,thicknessMap:qe,gradientMap:L,opaque:x.transparent===!1&&x.blending===Ns&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:X,alphaHash:pe,combine:x.combine,mapUv:ut&&g(x.map.channel),aoMapUv:rt&&g(x.aoMap.channel),lightMapUv:ke&&g(x.lightMap.channel),bumpMapUv:Rt&&g(x.bumpMap.channel),normalMapUv:ft&&g(x.normalMap.channel),displacementMapUv:dn&&g(x.displacementMap.channel),emissiveMapUv:U&&g(x.emissiveMap.channel),metalnessMapUv:Pt&&g(x.metalnessMap.channel),roughnessMapUv:He&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:K&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ee&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(x.sheenRoughnessMap.channel),specularMapUv:se&&g(x.specularMap.channel),specularColorMapUv:te&&g(x.specularColorMap.channel),specularIntensityMapUv:Re&&g(x.specularIntensityMap.channel),transmissionMapUv:Ue&&g(x.transmissionMap.channel),thicknessMapUv:qe&&g(x.thicknessMap.channel),alphaMapUv:ne&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ft||nt),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!N.attributes.uv&&(ut||ne),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&ft===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ae,skinning:R.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:We,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:J,decodeVideoTexture:ut&&x.map.isVideoTexture===!0&&ze.getTransfer(x.map.colorSpace)===Ze,decodeVideoTextureEmissive:U&&x.emissiveMap.isVideoTexture===!0&&ze.getTransfer(x.emissiveMap.colorSpace)===Ze,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mn,flipSided:x.side===tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)T.push(I),T.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(p(T,x),M(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function w(x){let T=d[x.type],I;if(T){let C=di[T];I=Yf.clone(C.uniforms)}else I=x.uniforms;return I}function b(x,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new H2(n,T,x,s),l.push(I),h.set(T,I)),I}function A(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function P(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:b,releaseProgram:A,releaseShaderCache:E,programs:l,dispose:P}}function q2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Y2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function pd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function md(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,g,v,m,p){let M=n[e];return M===void 0?(M={id:u.id,object:u,geometry:d,material:g,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},n[e]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=g,M.materialVariant=o(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function c(u,d,g,v,m,p){let M=a(u,d,g,v,m,p);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):t.push(M)}function l(u,d,g,v,m,p){let M=a(u,d,g,v,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,d){t.length>1&&t.sort(u||Y2),i.length>1&&i.sort(d||pd),s.length>1&&s.sort(d||pd)}function f(){for(let u=e,d=n.length;u<d;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function Z2(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new md,n.set(i,[o])):s>=r.length?(o=new md,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function J2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ye};break;case"SpotLight":t={position:new D,direction:new D,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function K2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var j2=0;function Q2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function e3(n){let e=new J2,t=K2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);let s=new D,r=new at,o=new at;function a(l){let h=0,f=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,M=0,w=0,b=0,A=0,E=0,P=0;l.sort(Q2);for(let T=0,I=l.length;T<I;T++){let C=l[T],R=C.color,k=C.intensity,G=C.distance,N=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===gs?N=C.shadow.map.texture:N=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=R.r*k,f+=R.g*k,u+=R.b*k;else if(C.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(C.sh.coefficients[B],k);P++}else if(C.isDirectionalLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let H=C.shadow,j=t.get(C);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,i.directionalShadow[d]=j,i.directionalShadowMap[d]=N,i.directionalShadowMatrix[d]=C.shadow.matrix,M++}i.directional[d]=B,d++}else if(C.isSpotLight){let B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(R).multiplyScalar(k),B.distance=G,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,i.spot[v]=B;let H=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,H.updateMatrices(C),C.castShadow&&E++),i.spotLightMatrix[v]=H.matrix,C.castShadow){let j=t.get(C);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=N,b++}v++}else if(C.isRectAreaLight){let B=e.get(C);B.color.copy(R).multiplyScalar(k),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=B,m++}else if(C.isPointLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){let H=C.shadow,j=t.get(C);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,j.shadowCameraNear=H.camera.near,j.shadowCameraFar=H.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=C.shadow.matrix,w++}i.point[g]=B,g++}else if(C.isHemisphereLight){let B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(k),B.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[p]=B,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let x=i.hash;(x.directionalLength!==d||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==M||x.numPointShadows!==w||x.numSpotShadows!==b||x.numSpotMaps!==A||x.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=b+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,x.directionalLength=d,x.pointLength=g,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=M,x.numPointShadows=w,x.numSpotShadows=b,x.numSpotMaps=A,x.numLightProbes=P,i.version=j2++)}function c(l,h){let f=0,u=0,d=0,g=0,v=0,m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let w=l[p];if(w.isDirectionalLight){let b=i.directional[f];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(w.isSpotLight){let b=i.spot[d];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(w.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let b=i.point[u];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),u++}else if(w.isHemisphereLight){let b=i.hemi[v];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function gd(n){let e=new e3(n),t=[],i=[],s=[];function r(u){f.camera=u,t.length=0,i.length=0,s.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function t3(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new gd(n),e.set(s,[a])):r>=o.length?(a=new gd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var n3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,s3=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],r3=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],_d=new at,Ao=new D,yh=new D;function o3(n,e,t){let i=new ro,s=new we,r=new we,o=new yt,a=new Ga,c=new Ha,l={},h=t.maxTextureSize,f={[Ei]:tn,[tn]:Ei,[Mn]:Mn},u=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:n3,fragmentShader:i3}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new en;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Fe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mo;let p=this.type;this.render=function(E,P,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===df&&(Ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=mo);let T=n.getRenderTarget(),I=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),R=n.state;R.setBlending(ui),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let k=p!==this.type;k&&P.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(N=>N.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,N=E.length;G<N;G++){let B=E[G],H=B.shadow;if(H===void 0){Ee("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let j=H.getFrameExtents();s.multiply(j),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,H.mapSize.y=r.y));let Q=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Q,H.map===null||k===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===xr){if(B.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new qt(s.x,s.y,{format:gs,type:wn,minFilter:At,magFilter:At,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new Ti(s.x,s.y,Kn),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=ci,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ot,H.map.depthTexture.magFilter=Ot}else B.isPointLight?(H.map=new Xc(s.x),H.map.depthTexture=new Na(s.x,Jn)):(H.map=new qt(s.x,s.y),H.map.depthTexture=new Ti(s.x,s.y,Jn)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=ci,this.type===mo?(H.map.depthTexture.compareFunction=Q?Gc:Vc,H.map.depthTexture.minFilter=At,H.map.depthTexture.magFilter=At):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ot,H.map.depthTexture.magFilter=Ot);H.camera.updateProjectionMatrix()}let le=H.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<le;xe++){if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,xe),n.clear();else{xe===0&&(n.setRenderTarget(H.map),n.clear());let be=H.getViewport(xe);o.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),R.viewport(o)}if(B.isPointLight){let be=H.camera,We=H.matrix,Je=B.distance||be.far;Je!==be.far&&(be.far=Je,be.updateProjectionMatrix()),Ao.setFromMatrixPosition(B.matrixWorld),be.position.copy(Ao),yh.copy(be.position),yh.add(s3[xe]),be.up.copy(r3[xe]),be.lookAt(yh),be.updateMatrixWorld(),We.makeTranslation(-Ao.x,-Ao.y,-Ao.z),_d.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),H._frustum.setFromProjectionMatrix(_d,be.coordinateSystem,be.reversedDepth)}else H.updateMatrices(B);i=H.getFrustum(),b(P,x,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===xr&&M(H,x),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,I,C)};function M(E,P){let x=e.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new qt(s.x,s.y,{format:gs,type:wn})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(P,null,x,u,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(P,null,x,d,v,null)}function w(E,P,x,T){let I=null,C=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)I=C;else if(I=x.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let R=I.uuid,k=P.uuid,G=l[R];G===void 0&&(G={},l[R]=G);let N=G[k];N===void 0&&(N=I.clone(),G[k]=N,P.addEventListener("dispose",A)),I=N}if(I.visible=P.visible,I.wireframe=P.wireframe,T===xr?I.side=P.shadowSide!==null?P.shadowSide:P.side:I.side=P.shadowSide!==null?P.shadowSide:f[P.side],I.alphaMap=P.alphaMap,I.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,I.map=P.map,I.clipShadows=P.clipShadows,I.clippingPlanes=P.clippingPlanes,I.clipIntersection=P.clipIntersection,I.displacementMap=P.displacementMap,I.displacementScale=P.displacementScale,I.displacementBias=P.displacementBias,I.wireframeLinewidth=P.wireframeLinewidth,I.linewidth=P.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let R=n.properties.get(I);R.light=x}return I}function b(E,P,x,T,I){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===xr)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let k=e.update(E),G=E.material;if(Array.isArray(G)){let N=k.groups;for(let B=0,H=N.length;B<H;B++){let j=N[B],Q=G[j.materialIndex];if(Q&&Q.visible){let le=w(E,Q,T,I);E.onBeforeShadow(n,E,P,x,k,le,j),n.renderBufferDirect(x,null,k,le,E,j),E.onAfterShadow(n,E,P,x,k,le,j)}}}else if(G.visible){let N=w(E,G,T,I);E.onBeforeShadow(n,E,P,x,k,N,null),n.renderBufferDirect(x,null,k,N,E,null),E.onAfterShadow(n,E,P,x,k,N,null)}}let R=E.children;for(let k=0,G=R.length;k<G;k++)b(R[k],P,x,T,I)}function A(E){E.target.removeEventListener("dispose",A);for(let x in l){let T=l[x],I=E.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function a3(n,e){function t(){let L=!1,ne=new yt,X=null,pe=new yt(0,0,0,0);return{setMask:function(re){X!==re&&!L&&(n.colorMask(re,re,re,re),X=re)},setLocked:function(re){L=re},setClear:function(re,J,ye,Le,bt){bt===!0&&(re*=Le,J*=Le,ye*=Le),ne.set(re,J,ye,Le),pe.equals(ne)===!1&&(n.clearColor(re,J,ye,Le),pe.copy(ne))},reset:function(){L=!1,X=null,pe.set(-1,0,0,0)}}}function i(){let L=!1,ne=!1,X=null,pe=null,re=null;return{setReversed:function(J){if(ne!==J){let ye=e.get("EXT_clip_control");J?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),ne=J;let Le=re;re=null,this.setClear(Le)}},getReversed:function(){return ne},setTest:function(J){J?ie(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(J){X!==J&&!L&&(n.depthMask(J),X=J)},setFunc:function(J){if(ne&&(J=Xf[J]),pe!==J){switch(J){case xa:n.depthFunc(n.NEVER);break;case va:n.depthFunc(n.ALWAYS);break;case ya:n.depthFunc(n.LESS);break;case Us:n.depthFunc(n.LEQUAL);break;case Ma:n.depthFunc(n.EQUAL);break;case ba:n.depthFunc(n.GEQUAL);break;case Sa:n.depthFunc(n.GREATER);break;case wa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=J}},setLocked:function(J){L=J},setClear:function(J){re!==J&&(re=J,ne&&(J=1-J),n.clearDepth(J))},reset:function(){L=!1,X=null,pe=null,re=null,ne=!1}}}function s(){let L=!1,ne=null,X=null,pe=null,re=null,J=null,ye=null,Le=null,bt=null;return{setTest:function(je){L||(je?ie(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(je){ne!==je&&!L&&(n.stencilMask(je),ne=je)},setFunc:function(je,xi,ii){(X!==je||pe!==xi||re!==ii)&&(n.stencilFunc(je,xi,ii),X=je,pe=xi,re=ii)},setOp:function(je,xi,ii){(J!==je||ye!==xi||Le!==ii)&&(n.stencilOp(je,xi,ii),J=je,ye=xi,Le=ii)},setLocked:function(je){L=je},setClear:function(je){bt!==je&&(n.clearStencil(je),bt=je)},reset:function(){L=!1,ne=null,X=null,pe=null,re=null,J=null,ye=null,Le=null,bt=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],v=null,m=!1,p=null,M=null,w=null,b=null,A=null,E=null,P=null,x=new Ye(0,0,0),T=0,I=!1,C=null,R=null,k=null,G=null,N=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=j>=1):Q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=j>=2);let le=null,xe={},be=n.getParameter(n.SCISSOR_BOX),We=n.getParameter(n.VIEWPORT),Je=new yt().fromArray(be),Ne=new yt().fromArray(We);function Z(L,ne,X,pe){let re=new Uint8Array(4),J=n.createTexture();n.bindTexture(L,J),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<X;ye++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(ne+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return J}let fe={};fe[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(n.DEPTH_TEST),o.setFunc(Us),Rt(!1),ft(H0),ie(n.CULL_FACE),rt(ui);function ie(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Ae(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Ie(L,ne){return u[L]!==ne?(n.bindFramebuffer(L,ne),u[L]=ne,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ne),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ce(L,ne){let X=g,pe=!1;if(L){X=d.get(ne),X===void 0&&(X=[],d.set(ne,X));let re=L.textures;if(X.length!==re.length||X[0]!==n.COLOR_ATTACHMENT0){for(let J=0,ye=re.length;J<ye;J++)X[J]=n.COLOR_ATTACHMENT0+J;X.length=re.length,pe=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,pe=!0);pe&&n.drawBuffers(X)}function ut(L){return v!==L?(n.useProgram(L),v=L,!0):!1}let Ge={[os]:n.FUNC_ADD,[mf]:n.FUNC_SUBTRACT,[gf]:n.FUNC_REVERSE_SUBTRACT};Ge[_f]=n.MIN,Ge[xf]=n.MAX;let Ke={[vf]:n.ZERO,[yf]:n.ONE,[Mf]:n.SRC_COLOR,[ga]:n.SRC_ALPHA,[Af]:n.SRC_ALPHA_SATURATE,[Ef]:n.DST_COLOR,[Sf]:n.DST_ALPHA,[bf]:n.ONE_MINUS_SRC_COLOR,[_a]:n.ONE_MINUS_SRC_ALPHA,[Tf]:n.ONE_MINUS_DST_COLOR,[wf]:n.ONE_MINUS_DST_ALPHA,[Cf]:n.CONSTANT_COLOR,[Rf]:n.ONE_MINUS_CONSTANT_COLOR,[Pf]:n.CONSTANT_ALPHA,[If]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(L,ne,X,pe,re,J,ye,Le,bt,je){if(L===ui){m===!0&&(Ae(n.BLEND),m=!1);return}if(m===!1&&(ie(n.BLEND),m=!0),L!==pf){if(L!==p||je!==I){if((M!==os||A!==os)&&(n.blendEquation(n.FUNC_ADD),M=os,A=os),je)switch(L){case Ns:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ks:n.blendFunc(n.ONE,n.ONE);break;case $0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case W0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Te("WebGLState: Invalid blending: ",L);break}else switch(L){case Ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $0:Te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case W0:Te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Te("WebGLState: Invalid blending: ",L);break}w=null,b=null,E=null,P=null,x.set(0,0,0),T=0,p=L,I=je}return}re=re||ne,J=J||X,ye=ye||pe,(ne!==M||re!==A)&&(n.blendEquationSeparate(Ge[ne],Ge[re]),M=ne,A=re),(X!==w||pe!==b||J!==E||ye!==P)&&(n.blendFuncSeparate(Ke[X],Ke[pe],Ke[J],Ke[ye]),w=X,b=pe,E=J,P=ye),(Le.equals(x)===!1||bt!==T)&&(n.blendColor(Le.r,Le.g,Le.b,bt),x.copy(Le),T=bt),p=L,I=!1}function ke(L,ne){L.side===Mn?Ae(n.CULL_FACE):ie(n.CULL_FACE);let X=L.side===tn;ne&&(X=!X),Rt(X),L.blending===Ns&&L.transparent===!1?rt(ui):rt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let pe=L.stencilWrite;a.setTest(pe),pe&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),U(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(L){C!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),C=L)}function ft(L){L!==uf?(ie(n.CULL_FACE),L!==R&&(L===H0?n.cullFace(n.BACK):L===ff?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),R=L}function dn(L){L!==k&&(H&&n.lineWidth(L),k=L)}function U(L,ne,X){L?(ie(n.POLYGON_OFFSET_FILL),(G!==ne||N!==X)&&(G=ne,N=X,o.getReversed()&&(ne=-ne),n.polygonOffset(ne,X))):Ae(n.POLYGON_OFFSET_FILL)}function Pt(L){L?ie(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function He(L){L===void 0&&(L=n.TEXTURE0+B-1),le!==L&&(n.activeTexture(L),le=L)}function nt(L,ne,X){X===void 0&&(le===null?X=n.TEXTURE0+B-1:X=le);let pe=xe[X];pe===void 0&&(pe={type:void 0,texture:void 0},xe[X]=pe),(pe.type!==L||pe.texture!==ne)&&(le!==X&&(n.activeTexture(X),le=X),n.bindTexture(L,ne||fe[L]),pe.type=L,pe.texture=ne)}function ae(){let L=xe[le];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function xt(){try{n.compressedTexImage2D(...arguments)}catch(L){Te("WebGLState:",L)}}function S(){try{n.compressedTexImage3D(...arguments)}catch(L){Te("WebGLState:",L)}}function _(){try{n.texSubImage2D(...arguments)}catch(L){Te("WebGLState:",L)}}function O(){try{n.texSubImage3D(...arguments)}catch(L){Te("WebGLState:",L)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Te("WebGLState:",L)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Te("WebGLState:",L)}}function ee(){try{n.texStorage2D(...arguments)}catch(L){Te("WebGLState:",L)}}function oe(){try{n.texStorage3D(...arguments)}catch(L){Te("WebGLState:",L)}}function W(){try{n.texImage2D(...arguments)}catch(L){Te("WebGLState:",L)}}function Y(){try{n.texImage3D(...arguments)}catch(L){Te("WebGLState:",L)}}function de(L){return f[L]!==void 0?f[L]:n.getParameter(L)}function ge(L,ne){f[L]!==ne&&(n.pixelStorei(L,ne),f[L]=ne)}function se(L){Je.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Je.copy(L))}function te(L){Ne.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Ne.copy(L))}function Re(L,ne){let X=l.get(ne);X===void 0&&(X=new WeakMap,l.set(ne,X));let pe=X.get(L);pe===void 0&&(pe=n.getUniformBlockIndex(ne,L.name),X.set(L,pe))}function Ue(L,ne){let pe=l.get(ne).get(L);c.get(ne)!==pe&&(n.uniformBlockBinding(ne,pe,L.__bindingPointIndex),c.set(ne,pe))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},le=null,xe={},u={},d=new WeakMap,g=[],v=null,m=!1,p=null,M=null,w=null,b=null,A=null,E=null,P=null,x=new Ye(0,0,0),T=0,I=!1,C=null,R=null,k=null,G=null,N=null,Je.set(0,0,n.canvas.width,n.canvas.height),Ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:Ae,bindFramebuffer:Ie,drawBuffers:Ce,useProgram:ut,setBlending:rt,setMaterial:ke,setFlipSided:Rt,setCullFace:ft,setLineWidth:dn,setPolygonOffset:U,setScissorTest:Pt,activeTexture:He,bindTexture:nt,unbindTexture:ae,compressedTexImage2D:xt,compressedTexImage3D:S,texImage2D:W,texImage3D:Y,pixelStorei:ge,getParameter:de,updateUBOMapping:Re,uniformBlockBinding:Ue,texStorage2D:ee,texStorage3D:oe,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:q,compressedTexSubImage3D:K,scissor:se,viewport:te,reset:qe}}function c3(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new we,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,_){return g?new OffscreenCanvas(S,_):Qr("canvas")}function m(S,_,O){let q=1,K=xt(S);if((K.width>O||K.height>O)&&(q=O/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let ee=Math.floor(q*K.width),oe=Math.floor(q*K.height);u===void 0&&(u=v(ee,oe));let W=_?v(ee,oe):u;return W.width=ee,W.height=oe,W.getContext("2d").drawImage(S,0,0,ee,oe),Ee("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ee+"x"+oe+")."),W}else return"data"in S&&Ee("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),S;return S}function p(S){return S.generateMipmaps}function M(S){n.generateMipmap(S)}function w(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(S,_,O,q,K,ee=!1){if(S!==null){if(n[S]!==void 0)return n[S];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let oe;q&&(oe=e.get("EXT_texture_norm16"),oe||Ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=_;if(_===n.RED&&(O===n.FLOAT&&(W=n.R32F),O===n.HALF_FLOAT&&(W=n.R16F),O===n.UNSIGNED_BYTE&&(W=n.R8),O===n.UNSIGNED_SHORT&&oe&&(W=oe.R16_EXT),O===n.SHORT&&oe&&(W=oe.R16_SNORM_EXT)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.R8UI),O===n.UNSIGNED_SHORT&&(W=n.R16UI),O===n.UNSIGNED_INT&&(W=n.R32UI),O===n.BYTE&&(W=n.R8I),O===n.SHORT&&(W=n.R16I),O===n.INT&&(W=n.R32I)),_===n.RG&&(O===n.FLOAT&&(W=n.RG32F),O===n.HALF_FLOAT&&(W=n.RG16F),O===n.UNSIGNED_BYTE&&(W=n.RG8),O===n.UNSIGNED_SHORT&&oe&&(W=oe.RG16_EXT),O===n.SHORT&&oe&&(W=oe.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RG8UI),O===n.UNSIGNED_SHORT&&(W=n.RG16UI),O===n.UNSIGNED_INT&&(W=n.RG32UI),O===n.BYTE&&(W=n.RG8I),O===n.SHORT&&(W=n.RG16I),O===n.INT&&(W=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGB8UI),O===n.UNSIGNED_SHORT&&(W=n.RGB16UI),O===n.UNSIGNED_INT&&(W=n.RGB32UI),O===n.BYTE&&(W=n.RGB8I),O===n.SHORT&&(W=n.RGB16I),O===n.INT&&(W=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),O===n.UNSIGNED_INT&&(W=n.RGBA32UI),O===n.BYTE&&(W=n.RGBA8I),O===n.SHORT&&(W=n.RGBA16I),O===n.INT&&(W=n.RGBA32I)),_===n.RGB&&(O===n.UNSIGNED_SHORT&&oe&&(W=oe.RGB16_EXT),O===n.SHORT&&oe&&(W=oe.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),_===n.RGBA){let Y=ee?Kr:ze.getTransfer(K);O===n.FLOAT&&(W=n.RGBA32F),O===n.HALF_FLOAT&&(W=n.RGBA16F),O===n.UNSIGNED_BYTE&&(W=Y===Ze?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&oe&&(W=oe.RGBA16_EXT),O===n.SHORT&&oe&&(W=oe.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function A(S,_){let O;return S?_===null||_===Jn||_===yr?O=n.DEPTH24_STENCIL8:_===Kn?O=n.DEPTH32F_STENCIL8:_===vr&&(O=n.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Jn||_===yr?O=n.DEPTH_COMPONENT24:_===Kn?O=n.DEPTH_COMPONENT32F:_===vr&&(O=n.DEPTH_COMPONENT16),O}function E(S,_){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==Ot&&S.minFilter!==At?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function P(S){let _=S.target;_.removeEventListener("dispose",P),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function x(S){let _=S.target;_.removeEventListener("dispose",x),C(_)}function T(S){let _=i.get(S);if(_.__webglInit===void 0)return;let O=S.source,q=d.get(O);if(q){let K=q[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&I(S),Object.keys(q).length===0&&d.delete(O)}i.remove(S)}function I(S){let _=i.get(S);n.deleteTexture(_.__webglTexture);let O=S.source,q=d.get(O);delete q[_.__cacheKey],o.memory.textures--}function C(S){let _=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let K=0;K<_.__webglFramebuffer[q].length;K++)n.deleteFramebuffer(_.__webglFramebuffer[q][K]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=S.textures;for(let q=0,K=O.length;q<K;q++){let ee=i.get(O[q]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(O[q])}i.remove(S)}let R=0;function k(){R=0}function G(){return R}function N(S){R=S}function B(){let S=R;return S>=s.maxTextures&&Ee("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),R+=1,S}function H(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function j(S,_){let O=i.get(S);if(S.isVideoTexture&&nt(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&O.__version!==S.version){let q=S.image;if(q===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(O,S,_);return}}else S.isExternalTexture&&(O.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function Q(S,_){let O=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){Ae(O,S,_);return}else S.isExternalTexture&&(O.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function le(S,_){let O=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){Ae(O,S,_);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function xe(S,_){let O=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&O.__version!==S.version){Ie(O,S,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}let be={[Ea]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[Ta]:n.MIRRORED_REPEAT},We={[Ot]:n.NEAREST,[Nf]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[At]:n.LINEAR,[sc]:n.LINEAR_MIPMAP_NEAREST,[ps]:n.LINEAR_MIPMAP_LINEAR},Je={[Of]:n.NEVER,[Gf]:n.ALWAYS,[Bf]:n.LESS,[Vc]:n.LEQUAL,[zf]:n.EQUAL,[Gc]:n.GEQUAL,[kf]:n.GREATER,[Vf]:n.NOTEQUAL};function Ne(S,_){if(_.type===Kn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===At||_.magFilter===sc||_.magFilter===_o||_.magFilter===ps||_.minFilter===At||_.minFilter===sc||_.minFilter===_o||_.minFilter===ps)&&Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,be[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,be[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,be[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,We[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,We[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Je[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ot||_.minFilter!==_o&&_.minFilter!==ps||_.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Z(S,_){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",P));let q=_.source,K=d.get(q);K===void 0&&(K={},d.set(q,K));let ee=H(_);if(ee!==S.__cacheKey){K[ee]===void 0&&(K[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[ee].usedTimes++;let oe=K[S.__cacheKey];oe!==void 0&&(K[S.__cacheKey].usedTimes--,oe.usedTimes===0&&I(_)),S.__cacheKey=ee,S.__webglTexture=K[ee].texture}return O}function fe(S,_,O){return Math.floor(Math.floor(S/O)/_)}function ie(S,_,O,q){let ee=S.updateRanges;if(ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,O,q,_.data);else{ee.sort((ge,se)=>ge.start-se.start);let oe=0;for(let ge=1;ge<ee.length;ge++){let se=ee[oe],te=ee[ge],Re=se.start+se.count,Ue=fe(te.start,_.width,4),qe=fe(se.start,_.width,4);te.start<=Re+1&&Ue===qe&&fe(te.start+te.count-1,_.width,4)===Ue?se.count=Math.max(se.count,te.start+te.count-se.start):(++oe,ee[oe]=te)}ee.length=oe+1;let W=t.getParameter(n.UNPACK_ROW_LENGTH),Y=t.getParameter(n.UNPACK_SKIP_PIXELS),de=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ge=0,se=ee.length;ge<se;ge++){let te=ee[ge],Re=Math.floor(te.start/4),Ue=Math.ceil(te.count/4),qe=Re%_.width,L=Math.floor(Re/_.width),ne=Ue,X=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,qe,L,ne,X,O,q,_.data)}S.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,W),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function Ae(S,_,O){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);let K=Z(S,_),ee=_.source;t.bindTexture(q,S.__webglTexture,n.TEXTURE0+O);let oe=i.get(ee);if(ee.version!==oe.__version||K===!0){if(t.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let X=ze.getPrimaries(ze.workingColorSpace),pe=_.colorSpace===zn?null:ze.getPrimaries(_.colorSpace),re=_.colorSpace===zn||X===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let Y=m(_.image,!1,s.maxTextureSize);Y=ae(_,Y);let de=r.convert(_.format,_.colorSpace),ge=r.convert(_.type),se=b(_.internalFormat,de,ge,_.normalized,_.colorSpace,_.isVideoTexture);Ne(q,_);let te,Re=_.mipmaps,Ue=_.isVideoTexture!==!0,qe=oe.__version===void 0||K===!0,L=ee.dataReady,ne=E(_,Y);if(_.isDepthTexture)se=A(_.format===ms,_.type),qe&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,se,Y.width,Y.height):t.texImage2D(n.TEXTURE_2D,0,se,Y.width,Y.height,0,de,ge,null));else if(_.isDataTexture)if(Re.length>0){Ue&&qe&&t.texStorage2D(n.TEXTURE_2D,ne,se,Re[0].width,Re[0].height);for(let X=0,pe=Re.length;X<pe;X++)te=Re[X],Ue?L&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,te.width,te.height,de,ge,te.data):t.texImage2D(n.TEXTURE_2D,X,se,te.width,te.height,0,de,ge,te.data);_.generateMipmaps=!1}else Ue?(qe&&t.texStorage2D(n.TEXTURE_2D,ne,se,Y.width,Y.height),L&&ie(_,Y,de,ge)):t.texImage2D(n.TEXTURE_2D,0,se,Y.width,Y.height,0,de,ge,Y.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ue&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,se,Re[0].width,Re[0].height,Y.depth);for(let X=0,pe=Re.length;X<pe;X++)if(te=Re[X],_.format!==Bn)if(de!==null)if(Ue){if(L)if(_.layerUpdates.size>0){let re=ph(te.width,te.height,_.format,_.type);for(let J of _.layerUpdates){let ye=te.data.subarray(J*re/te.data.BYTES_PER_ELEMENT,(J+1)*re/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,J,te.width,te.height,1,de,ye)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,te.width,te.height,Y.depth,de,te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,se,te.width,te.height,Y.depth,0,te.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,te.width,te.height,Y.depth,de,ge,te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,se,te.width,te.height,Y.depth,0,de,ge,te.data)}else{Ue&&qe&&t.texStorage2D(n.TEXTURE_2D,ne,se,Re[0].width,Re[0].height);for(let X=0,pe=Re.length;X<pe;X++)te=Re[X],_.format!==Bn?de!==null?Ue?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,te.width,te.height,de,te.data):t.compressedTexImage2D(n.TEXTURE_2D,X,se,te.width,te.height,0,te.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?L&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,te.width,te.height,de,ge,te.data):t.texImage2D(n.TEXTURE_2D,X,se,te.width,te.height,0,de,ge,te.data)}else if(_.isDataArrayTexture)if(Ue){if(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,se,Y.width,Y.height,Y.depth),L)if(_.layerUpdates.size>0){let X=ph(Y.width,Y.height,_.format,_.type);for(let pe of _.layerUpdates){let re=Y.data.subarray(pe*X/Y.data.BYTES_PER_ELEMENT,(pe+1)*X/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,Y.width,Y.height,1,de,ge,re)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,de,ge,Y.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,se,Y.width,Y.height,Y.depth,0,de,ge,Y.data);else if(_.isData3DTexture)Ue?(qe&&t.texStorage3D(n.TEXTURE_3D,ne,se,Y.width,Y.height,Y.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,de,ge,Y.data)):t.texImage3D(n.TEXTURE_3D,0,se,Y.width,Y.height,Y.depth,0,de,ge,Y.data);else if(_.isFramebufferTexture){if(qe)if(Ue)t.texStorage2D(n.TEXTURE_2D,ne,se,Y.width,Y.height);else{let X=Y.width,pe=Y.height;for(let re=0;re<ne;re++)t.texImage2D(n.TEXTURE_2D,re,se,X,pe,0,de,ge,null),X>>=1,pe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let X=n.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),Y.parentNode!==X){X.appendChild(Y),f.add(_),X.onpaint=Le=>{let bt=Le.changedElements;for(let je of f)bt.includes(je.image)&&(je.needsUpdate=!0)},X.requestPaint();return}let pe=0,re=n.RGBA,J=n.RGBA,ye=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,pe,re,J,ye,Y),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Ue&&qe){let X=xt(Re[0]);t.texStorage2D(n.TEXTURE_2D,ne,se,X.width,X.height)}for(let X=0,pe=Re.length;X<pe;X++)te=Re[X],Ue?L&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,de,ge,te):t.texImage2D(n.TEXTURE_2D,X,se,de,ge,te);_.generateMipmaps=!1}else if(Ue){if(qe){let X=xt(Y);t.texStorage2D(n.TEXTURE_2D,ne,se,X.width,X.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,ge,Y)}else t.texImage2D(n.TEXTURE_2D,0,se,de,ge,Y);p(_)&&M(q),oe.__version=ee.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Ie(S,_,O){if(_.image.length!==6)return;let q=Z(S,_),K=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+O);let ee=i.get(K);if(K.version!==ee.__version||q===!0){t.activeTexture(n.TEXTURE0+O);let oe=ze.getPrimaries(ze.workingColorSpace),W=_.colorSpace===zn?null:ze.getPrimaries(_.colorSpace),Y=_.colorSpace===zn||oe===W?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let de=_.isCompressedTexture||_.image[0].isCompressedTexture,ge=_.image[0]&&_.image[0].isDataTexture,se=[];for(let J=0;J<6;J++)!de&&!ge?se[J]=m(_.image[J],!0,s.maxCubemapSize):se[J]=ge?_.image[J].image:_.image[J],se[J]=ae(_,se[J]);let te=se[0],Re=r.convert(_.format,_.colorSpace),Ue=r.convert(_.type),qe=b(_.internalFormat,Re,Ue,_.normalized,_.colorSpace),L=_.isVideoTexture!==!0,ne=ee.__version===void 0||q===!0,X=K.dataReady,pe=E(_,te);Ne(n.TEXTURE_CUBE_MAP,_);let re;if(de){L&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,qe,te.width,te.height);for(let J=0;J<6;J++){re=se[J].mipmaps;for(let ye=0;ye<re.length;ye++){let Le=re[ye];_.format!==Bn?Re!==null?L?X&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,Le.width,Le.height,Re,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,qe,Le.width,Le.height,0,Le.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,Le.width,Le.height,Re,Ue,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,qe,Le.width,Le.height,0,Re,Ue,Le.data)}}}else{if(re=_.mipmaps,L&&ne){re.length>0&&pe++;let J=xt(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,qe,J.width,J.height)}for(let J=0;J<6;J++)if(ge){L?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,se[J].width,se[J].height,Re,Ue,se[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,se[J].width,se[J].height,0,Re,Ue,se[J].data);for(let ye=0;ye<re.length;ye++){let bt=re[ye].image[J].image;L?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,bt.width,bt.height,Re,Ue,bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,qe,bt.width,bt.height,0,Re,Ue,bt.data)}}else{L?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Re,Ue,se[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,Re,Ue,se[J]);for(let ye=0;ye<re.length;ye++){let Le=re[ye];L?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,Re,Ue,Le.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,qe,Re,Ue,Le.image[J])}}}p(_)&&M(n.TEXTURE_CUBE_MAP),ee.__version=K.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Ce(S,_,O,q,K,ee){let oe=r.convert(O.format,O.colorSpace),W=r.convert(O.type),Y=b(O.internalFormat,oe,W,O.normalized,O.colorSpace),de=i.get(_),ge=i.get(O);if(ge.__renderTarget=_,!de.__hasExternalTextures){let se=Math.max(1,_.width>>ee),te=Math.max(1,_.height>>ee);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,ee,Y,se,te,_.depth,0,oe,W,null):t.texImage2D(K,ee,Y,se,te,0,oe,W,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),He(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,K,ge.__webglTexture,0,Pt(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,K,ge.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(S,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){let q=_.depthTexture,K=q&&q.isDepthTexture?q.type:null,ee=A(_.stencilBuffer,K),oe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;He(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(_),ee,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(_),ee,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ee,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,S)}else{let q=_.textures;for(let K=0;K<q.length;K++){let ee=q[K],oe=r.convert(ee.format,ee.colorSpace),W=r.convert(ee.type),Y=b(ee.internalFormat,oe,W,ee.normalized,ee.colorSpace);He(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(_),Y,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(_),Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ge(S,_,O){let q=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,_.depthTexture);let de=r.convert(_.depthTexture.format),ge=r.convert(_.depthTexture.type),se;_.depthTexture.format===ci?se=n.DEPTH_COMPONENT24:_.depthTexture.format===ms&&(se=n.DEPTH24_STENCIL8);for(let te=0;te<6;te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,se,_.width,_.height,0,de,ge,null)}}else j(_.depthTexture,0);let ee=K.__webglTexture,oe=Pt(_),W=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,Y=_.depthTexture.format===ms?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===ci)He(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,W,ee,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Y,W,ee,0);else if(_.depthTexture.format===ms)He(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,W,ee,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Y,W,ee,0);else throw new Error("Unknown depthTexture format")}function Ke(S){let _=i.get(S),O=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){let q=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=q}if(S.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let q=0;q<6;q++)Ge(_.__webglFramebuffer[q],S,q);else{let q=S.texture.mipmaps;q&&q.length>0?Ge(_.__webglFramebuffer[0],S,0):Ge(_.__webglFramebuffer,S,0)}else if(O){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=n.createRenderbuffer(),ut(_.__webglDepthbuffer[q],S,!1);else{let K=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ee)}}else{let q=S.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ut(_.__webglDepthbuffer,S,!1);else{let K=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(S,_,O){let q=i.get(S);_!==void 0&&Ce(q.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ke(S)}function ke(S){let _=S.texture,O=i.get(S),q=i.get(_);S.addEventListener("dispose",x);let K=S.textures,ee=S.isWebGLCubeRenderTarget===!0,oe=K.length>1;if(oe||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,o.memory.textures++),ee){O.__webglFramebuffer=[];for(let W=0;W<6;W++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[W]=[];for(let Y=0;Y<_.mipmaps.length;Y++)O.__webglFramebuffer[W][Y]=n.createFramebuffer()}else O.__webglFramebuffer[W]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let W=0;W<_.mipmaps.length;W++)O.__webglFramebuffer[W]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(oe)for(let W=0,Y=K.length;W<Y;W++){let de=i.get(K[W]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&He(S)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let W=0;W<K.length;W++){let Y=K[W];O.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[W]);let de=r.convert(Y.format,Y.colorSpace),ge=r.convert(Y.type),se=b(Y.internalFormat,de,ge,Y.normalized,Y.colorSpace,S.isXRRenderTarget===!0),te=Pt(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,te,se,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,O.__webglColorRenderbuffer[W])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ut(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,_);for(let W=0;W<6;W++)if(_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)Ce(O.__webglFramebuffer[W][Y],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,Y);else Ce(O.__webglFramebuffer[W],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);p(_)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let W=0,Y=K.length;W<Y;W++){let de=K[W],ge=i.get(de),se=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(se=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,ge.__webglTexture),Ne(se,de),Ce(O.__webglFramebuffer,S,de,n.COLOR_ATTACHMENT0+W,se,0),p(de)&&M(se)}t.unbindTexture()}else{let W=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(W=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(W,q.__webglTexture),Ne(W,_),_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)Ce(O.__webglFramebuffer[Y],S,_,n.COLOR_ATTACHMENT0,W,Y);else Ce(O.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,W,0);p(_)&&M(W),t.unbindTexture()}S.depthBuffer&&Ke(S)}function Rt(S){let _=S.textures;for(let O=0,q=_.length;O<q;O++){let K=_[O];if(p(K)){let ee=w(S),oe=i.get(K).__webglTexture;t.bindTexture(ee,oe),M(ee),t.unbindTexture()}}}let ft=[],dn=[];function U(S){if(S.samples>0){if(He(S)===!1){let _=S.textures,O=S.width,q=S.height,K=n.COLOR_BUFFER_BIT,ee=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(S),W=_.length>1;if(W)for(let de=0;de<_.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let Y=S.texture.mipmaps;Y&&Y.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let de=0;de<_.length;de++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),W){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[de]);let ge=i.get(_[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ge,0)}n.blitFramebuffer(0,0,O,q,0,0,O,q,K,n.NEAREST),c===!0&&(ft.length=0,dn.length=0,ft.push(n.COLOR_ATTACHMENT0+de),S.depthBuffer&&S.resolveDepthBuffer===!1&&(ft.push(ee),dn.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,dn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),W)for(let de=0;de<_.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,oe.__webglColorRenderbuffer[de]);let ge=i.get(_[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Pt(S){return Math.min(s.maxSamples,S.samples)}function He(S){let _=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function nt(S){let _=o.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function ae(S,_){let O=S.colorSpace,q=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||O!==Jr&&O!==zn&&(ze.getTransfer(O)===Ze?(q!==Bn||K!==Sn)&&Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Te("WebGLTextures: Unsupported texture color space:",O)),_}function xt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.getTextureUnits=G,this.setTextureUnits=N,this.setTexture2D=j,this.setTexture2DArray=Q,this.setTexture3D=le,this.setTextureCube=xe,this.rebindTextures=rt,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function l3(n,e){function t(i,s=zn){let r,o=ze.getTransfer(s);if(i===Sn)return n.UNSIGNED_BYTE;if(i===oc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ac)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ih)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===sh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===th)return n.BYTE;if(i===nh)return n.SHORT;if(i===vr)return n.UNSIGNED_SHORT;if(i===rc)return n.INT;if(i===Jn)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===wn)return n.HALF_FLOAT;if(i===rh)return n.ALPHA;if(i===oh)return n.RGB;if(i===Bn)return n.RGBA;if(i===ci)return n.DEPTH_COMPONENT;if(i===ms)return n.DEPTH_STENCIL;if(i===ah)return n.RED;if(i===cc)return n.RED_INTEGER;if(i===gs)return n.RG;if(i===lc)return n.RG_INTEGER;if(i===hc)return n.RGBA_INTEGER;if(i===xo||i===vo||i===yo||i===Mo)if(o===Ze)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uc||i===fc||i===dc||i===pc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mc||i===gc||i===_c||i===xc||i===vc||i===bo||i===yc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===mc||i===gc)return o===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_c)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===xc)return r.COMPRESSED_R11_EAC;if(i===vc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===bo)return r.COMPRESSED_RG11_EAC;if(i===yc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Mc||i===bc||i===Sc||i===wc||i===Ec||i===Tc||i===Ac||i===Cc||i===Rc||i===Pc||i===Ic||i===Lc||i===Dc||i===Nc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Mc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ec)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ac)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ic)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uc||i===Fc||i===Oc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Uc)return o===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bc||i===zc||i===So||i===kc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Bc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var h3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ao(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new It({vertexShader:h3,fragmentShader:u3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new an(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rh=class extends li{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null,v=typeof XRWebGLBinding<"u",m=new Ch,p={},M=t.getContextAttributes(),w=null,b=null,A=[],E=[],P=new we,x=null,T=new Xt;T.viewport=new yt;let I=new Xt;I.viewport=new yt;let C=[T,I],R=new tc,k=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let fe=A[Z];return fe===void 0&&(fe=new pr,A[Z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Z){let fe=A[Z];return fe===void 0&&(fe=new pr,A[Z]=fe),fe.getGripSpace()},this.getHand=function(Z){let fe=A[Z];return fe===void 0&&(fe=new pr,A[Z]=fe),fe.getHandSpace()};function N(Z){let fe=E.indexOf(Z.inputSource);if(fe===-1)return;let ie=A[fe];ie!==void 0&&(ie.update(Z.inputSource,Z.frame,l||o),ie.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",H);for(let Z=0;Z<A.length;Z++){let fe=E[Z];fe!==null&&(E[Z]=null,A[Z].disconnect(fe))}k=null,G=null,m.reset();for(let Z in p)delete p[Z];e.setRenderTarget(w),d=null,u=null,f=null,s=null,b=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",H),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ae=null,Ie=null;M.depth&&(Ie=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=M.stencil?ms:ci,Ae=M.stencil?yr:Jn);let Ce={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ce),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new qt(u.textureWidth,u.textureHeight,{format:Bn,type:Sn,depthTexture:new Ti(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let ie={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new qt(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ne.setContext(s),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(Z){for(let fe=0;fe<Z.removed.length;fe++){let ie=Z.removed[fe],Ae=E.indexOf(ie);Ae>=0&&(E[Ae]=null,A[Ae].disconnect(ie))}for(let fe=0;fe<Z.added.length;fe++){let ie=Z.added[fe],Ae=E.indexOf(ie);if(Ae===-1){for(let Ce=0;Ce<A.length;Ce++)if(Ce>=E.length){E.push(ie),Ae=Ce;break}else if(E[Ce]===null){E[Ce]=ie,Ae=Ce;break}if(Ae===-1)break}let Ie=A[Ae];Ie&&Ie.connect(ie)}}let j=new D,Q=new D;function le(Z,fe,ie){j.setFromMatrixPosition(fe.matrixWorld),Q.setFromMatrixPosition(ie.matrixWorld);let Ae=j.distanceTo(Q),Ie=fe.projectionMatrix.elements,Ce=ie.projectionMatrix.elements,ut=Ie[14]/(Ie[10]-1),Ge=Ie[14]/(Ie[10]+1),Ke=(Ie[9]+1)/Ie[5],rt=(Ie[9]-1)/Ie[5],ke=(Ie[8]-1)/Ie[0],Rt=(Ce[8]+1)/Ce[0],ft=ut*ke,dn=ut*Rt,U=Ae/(-ke+Rt),Pt=U*-ke;if(fe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Pt),Z.translateZ(U),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ie[10]===-1)Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{let He=ut+U,nt=Ge+U,ae=ft-Pt,xt=dn+(Ae-Pt),S=Ke*Ge/nt*He,_=rt*Ge/nt*He;Z.projectionMatrix.makePerspective(ae,xt,S,_,He,nt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function xe(Z,fe){fe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(fe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let fe=Z.near,ie=Z.far;m.texture!==null&&(m.depthNear>0&&(fe=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),R.near=I.near=T.near=fe,R.far=I.far=T.far=ie,(k!==R.near||G!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),k=R.near,G=R.far),R.layers.mask=Z.layers.mask|6,T.layers.mask=R.layers.mask&-5,I.layers.mask=R.layers.mask&-3;let Ae=Z.parent,Ie=R.cameras;xe(R,Ae);for(let Ce=0;Ce<Ie.length;Ce++)xe(Ie[Ce],Ae);Ie.length===2?le(R,T,I):R.projectionMatrix.copy(T.projectionMatrix),be(Z,R,Ae)};function be(Z,fe,ie){ie===null?Z.matrix.copy(fe.matrixWorld):(Z.matrix.copy(ie.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(fe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ra*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(Z){return p[Z]};let We=null;function Je(Z,fe){if(h=fe.getViewerPose(l||o),g=fe,h!==null){let ie=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Ae=!1;ie.length!==R.cameras.length&&(R.cameras.length=0,Ae=!0);for(let Ge=0;Ge<ie.length;Ge++){let Ke=ie[Ge],rt=null;if(d!==null)rt=d.getViewport(Ke);else{let Rt=f.getViewSubImage(u,Ke);rt=Rt.viewport,Ge===0&&(e.setRenderTargetTextures(b,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(b))}let ke=C[Ge];ke===void 0&&(ke=new Xt,ke.layers.enable(Ge),ke.viewport=new yt,C[Ge]=ke),ke.matrix.fromArray(Ke.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ke.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(rt.x,rt.y,rt.width,rt.height),Ge===0&&(R.matrix.copy(ke.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ae===!0&&R.cameras.push(ke)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let Ge=f.getDepthInformation(ie[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,s.renderState)}if(Ie&&Ie.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let Ge=0;Ge<ie.length;Ge++){let Ke=ie[Ge].camera;if(Ke){let rt=p[Ke];rt||(rt=new ao,p[Ke]=rt);let ke=f.getCameraImage(Ke);rt.sourceTexture=ke}}}}for(let ie=0;ie<A.length;ie++){let Ae=E[ie],Ie=A[ie];Ae!==null&&Ie!==void 0&&Ie.update(Ae,fe,l||o)}We&&We(Z,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}let Ne=new xd;Ne.setAnimationLoop(Je),this.setAnimationLoop=function(Z){We=Z},this.dispose=function(){}}},f3=new at,wd=new Pe;wd.set(-1,0,0,0,1,0,0,0,1);function d3(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,uh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,w,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),w=M.envMap,b=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(f3.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(wd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function p3(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){let b=w.program;i.uniformBlockBinding(M,b)}function l(M,w){let b=s[M.id];b===void 0&&(g(M),b=h(M),s[M.id]=b,M.addEventListener("dispose",m));let A=w.program;i.updateUBOMapping(M,A);let E=e.render.frame;r[M.id]!==E&&(u(M),r[M.id]=E)}function h(M){let w=f();M.__bindingPointIndex=w;let b=n.createBuffer(),A=M.__size,E=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let w=s[M.id],b=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let E=0,P=b.length;E<P;E++){let x=Array.isArray(b[E])?b[E]:[b[E]];for(let T=0,I=x.length;T<I;T++){let C=x[T];if(d(C,E,T,A)===!0){let R=C.__offset,k=Array.isArray(C.value)?C.value:[C.value],G=0;for(let N=0;N<k.length;N++){let B=k[N],H=v(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,R+G,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):ArrayBuffer.isView(B)?C.__data.set(new B.constructor(B.buffer,B.byteOffset,C.__data.length)):(B.toArray(C.__data,G),G+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,R,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,w,b,A){let E=M.value,P=w+"_"+b;if(A[P]===void 0)return typeof E=="number"||typeof E=="boolean"?A[P]=E:ArrayBuffer.isView(E)?A[P]=E.slice():A[P]=E.clone(),!0;{let x=A[P];if(typeof E=="number"||typeof E=="boolean"){if(x!==E)return A[P]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(x.equals(E)===!1)return x.copy(E),!0}}return!1}function g(M){let w=M.uniforms,b=0,A=16;for(let P=0,x=w.length;P<x;P++){let T=Array.isArray(w[P])?w[P]:[w[P]];for(let I=0,C=T.length;I<C;I++){let R=T[I],k=Array.isArray(R.value)?R.value:[R.value];for(let G=0,N=k.length;G<N;G++){let B=k[G],H=v(B),j=b%A,Q=j%H.boundary,le=j+Q;b+=Q,le!==0&&A-le<H.storage&&(b+=A-le),R.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=b,b+=H.storage}}}let E=b%A;return E>0&&(b+=A-E),M.__size=b,M.__cache={},this}function v(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Ee("WebGLRenderer: Unsupported uniform value type.",M),w}function m(M){let w=M.target;w.removeEventListener("dispose",m);let b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var m3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function g3(){return fi===null&&(fi=new Da(m3,16,16,gs,wn),fi.name="DFG_LUT",fi.minFilter=At,fi.magFilter=At,fi.wrapS=ai,fi.wrapT=ai,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var qc=class{constructor(e={}){let{canvas:t=Hf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Sn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let v=d,m=new Set([hc,lc,cc]),p=new Set([Sn,Jn,vr,yr,oc,ac]),M=new Uint32Array(4),w=new Int32Array(4),b=new D,A=null,E=null,P=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,C=!1,R=null;this._outputColorSpace=_n;let k=0,G=0,N=null,B=-1,H=null,j=new yt,Q=new yt,le=null,xe=new Ye(0),be=0,We=t.width,Je=t.height,Ne=1,Z=null,fe=null,ie=new yt(0,0,We,Je),Ae=new yt(0,0,We,Je),Ie=!1,Ce=new ro,ut=!1,Ge=!1,Ke=new at,rt=new D,ke=new yt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function dn(){return N===null?Ne:1}let U=i;function Pt(y,F){return t.getContext(y,F)}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",Le,!1),U===null){let F="webgl2";if(U=Pt(F,y),U===null)throw Pt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Te("WebGLRenderer: "+y.message),y}let He,nt,ae,xt,S,_,O,q,K,ee,oe,W,Y,de,ge,se,te,Re,Ue,qe,L,ne,X;function pe(){He=new Sv(U),He.init(),L=new l3(U,He),nt=new mv(U,He,e,L),ae=new a3(U,He),nt.reversedDepthBuffer&&u&&ae.buffers.depth.setReversed(!0),xt=new Tv(U),S=new q2,_=new c3(U,He,ae,S,nt,L,xt),O=new bv(I),q=new Pg(U),ne=new dv(U,q),K=new wv(U,q,xt,ne),ee=new Cv(U,K,q,ne,xt),Re=new Av(U,nt,_),ge=new gv(S),oe=new X2(I,O,He,nt,ne,ge),W=new d3(I,S),Y=new Z2,de=new t3(He),te=new fv(I,O,ae,ee,g,c),se=new o3(I,ee,nt),X=new p3(U,xt,nt,ae),Ue=new pv(U,He,xt),qe=new Ev(U,He,xt),xt.programs=oe.programs,I.capabilities=nt,I.extensions=He,I.properties=S,I.renderLists=Y,I.shadowMap=se,I.state=ae,I.info=xt}pe(),v!==Sn&&(T=new Pv(v,t.width,t.height,s,r));let re=new Rh(I,U);this.xr=re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let y=He.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=He.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(y){y!==void 0&&(Ne=y,this.setSize(We,Je,!1))},this.getSize=function(y){return y.set(We,Je)},this.setSize=function(y,F,$=!0){if(re.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}We=y,Je=F,t.width=Math.floor(y*Ne),t.height=Math.floor(F*Ne),$===!0&&(t.style.width=y+"px",t.style.height=F+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(We*Ne,Je*Ne).floor()},this.setDrawingBufferSize=function(y,F,$){We=y,Je=F,Ne=$,t.width=Math.floor(y*$),t.height=Math.floor(F*$),this.setViewport(0,0,y,F)},this.setEffects=function(y){if(v===Sn){Te("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let F=0;F<y.length;F++)if(y[F].isOutputPass===!0){Ee("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(j)},this.getViewport=function(y){return y.copy(ie)},this.setViewport=function(y,F,$,z){y.isVector4?ie.set(y.x,y.y,y.z,y.w):ie.set(y,F,$,z),ae.viewport(j.copy(ie).multiplyScalar(Ne).round())},this.getScissor=function(y){return y.copy(Ae)},this.setScissor=function(y,F,$,z){y.isVector4?Ae.set(y.x,y.y,y.z,y.w):Ae.set(y,F,$,z),ae.scissor(Q.copy(Ae).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(y){ae.setScissorTest(Ie=y)},this.setOpaqueSort=function(y){Z=y},this.setTransparentSort=function(y){fe=y},this.getClearColor=function(y){return y.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,$=!0){let z=0;if(y){let V=!1;if(N!==null){let ue=N.texture.format;V=m.has(ue)}if(V){let ue=N.texture.type,_e=p.has(ue),he=te.getClearColor(),ve=te.getClearAlpha(),Me=he.r,De=he.g,Be=he.b;_e?(M[0]=Me,M[1]=De,M[2]=Be,M[3]=ve,U.clearBufferuiv(U.COLOR,0,M)):(w[0]=Me,w[1]=De,w[2]=Be,w[3]=ve,U.clearBufferiv(U.COLOR,0,w))}else z|=U.COLOR_BUFFER_BIT}F&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),R=y},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),te.dispose(),Y.dispose(),de.dispose(),S.dispose(),O.dispose(),ee.dispose(),ne.dispose(),X.dispose(),oe.dispose(),re.dispose(),re.removeEventListener("sessionstart",Du),re.removeEventListener("sessionend",Nu),Cs.stop()};function J(y){y.preventDefault(),lh("WebGLRenderer: Context Lost."),C=!0}function ye(){lh("WebGLRenderer: Context Restored."),C=!1;let y=xt.autoReset,F=se.enabled,$=se.autoUpdate,z=se.needsUpdate,V=se.type;pe(),xt.autoReset=y,se.enabled=F,se.autoUpdate=$,se.needsUpdate=z,se.type=V}function Le(y){Te("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function bt(y){let F=y.target;F.removeEventListener("dispose",bt),je(F)}function je(y){xi(y),S.remove(y)}function xi(y){let F=S.get(y).programs;F!==void 0&&(F.forEach(function($){oe.releaseProgram($)}),y.isShaderMaterial&&oe.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,$,z,V,ue){F===null&&(F=Rt);let _e=V.isMesh&&V.matrixWorld.determinant()<0,he=D1(y,F,$,z,V);ae.setMaterial(z,_e);let ve=$.index,Me=1;if(z.wireframe===!0){if(ve=K.getWireframeAttribute($),ve===void 0)return;Me=2}let De=$.drawRange,Be=$.attributes.position,Se=De.start*Me,Qe=(De.start+De.count)*Me;ue!==null&&(Se=Math.max(Se,ue.start*Me),Qe=Math.min(Qe,(ue.start+ue.count)*Me)),ve!==null?(Se=Math.max(Se,0),Qe=Math.min(Qe,ve.count)):Be!=null&&(Se=Math.max(Se,0),Qe=Math.min(Qe,Be.count));let St=Qe-Se;if(St<0||St===1/0)return;ne.setup(V,z,he,$,ve);let vt,et=Ue;if(ve!==null&&(vt=q.get(ve),et=qe,et.setIndex(vt)),V.isMesh)z.wireframe===!0?(ae.setLineWidth(z.wireframeLinewidth*dn()),et.setMode(U.LINES)):et.setMode(U.TRIANGLES);else if(V.isLine){let Ht=z.linewidth;Ht===void 0&&(Ht=1),ae.setLineWidth(Ht*dn()),V.isLineSegments?et.setMode(U.LINES):V.isLineLoop?et.setMode(U.LINE_LOOP):et.setMode(U.LINE_STRIP)}else V.isPoints?et.setMode(U.POINTS):V.isSprite&&et.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(He.get("WEBGL_multi_draw"))et.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ht=V._multiDrawStarts,me=V._multiDrawCounts,pn=V._multiDrawCount,Xe=ve?q.get(ve).bytesPerElement:1,Nn=S.get(z).currentProgram.getUniforms();for(let si=0;si<pn;si++)Nn.setValue(U,"_gl_DrawID",si),et.render(Ht[si]/Xe,me[si])}else if(V.isInstancedMesh)et.renderInstances(Se,St,V.count);else if($.isInstancedBufferGeometry){let Ht=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,me=Math.min($.instanceCount,Ht);et.renderInstances(Se,St,me)}else et.render(Se,St)};function ii(y,F,$){y.transparent===!0&&y.side===Mn&&y.forceSinglePass===!1?(y.side=tn,y.needsUpdate=!0,Yo(y,F,$),y.side=Ei,y.needsUpdate=!0,Yo(y,F,$),y.side=Mn):Yo(y,F,$)}this.compile=function(y,F,$=null){$===null&&($=y),E=de.get($),E.init(F),x.push(E),$.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),y!==$&&y.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights();let z=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ue=V.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){let he=ue[_e];ii(he,$,V),z.add(he)}else ii(ue,$,V),z.add(ue)}),E=x.pop(),z},this.compileAsync=function(y,F,$=null){let z=this.compile(y,F,$);return new Promise(V=>{function ue(){if(z.forEach(function(_e){S.get(_e).currentProgram.isReady()&&z.delete(_e)}),z.size===0){V(y);return}setTimeout(ue,10)}He.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let o0=null;function I1(y){o0&&o0(y)}function Du(){Cs.stop()}function Nu(){Cs.start()}let Cs=new xd;Cs.setAnimationLoop(I1),typeof self<"u"&&Cs.setContext(self),this.setAnimationLoop=function(y){o0=y,re.setAnimationLoop(y),y===null?Cs.stop():Cs.start()},re.addEventListener("sessionstart",Du),re.addEventListener("sessionend",Nu),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){Te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;R!==null&&R.renderStart(y,F);let $=re.enabled===!0&&re.isPresenting===!0,z=T!==null&&(N===null||$)&&T.begin(I,N);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(F),F=re.getCamera()),y.isScene===!0&&y.onBeforeRender(I,y,F,N),E=de.get(y,x.length),E.init(F),E.state.textureUnits=_.getTextureUnits(),x.push(E),Ke.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ce.setFromProjectionMatrix(Ke,Zn,F.reversedDepth),Ge=this.localClippingEnabled,ut=ge.init(this.clippingPlanes,Ge),A=Y.get(y,P.length),A.init(),P.push(A),re.enabled===!0&&re.isPresenting===!0){let _e=I.xr.getDepthSensingMesh();_e!==null&&a0(_e,F,-1/0,I.sortObjects)}a0(y,F,0,I.sortObjects),A.finish(),I.sortObjects===!0&&A.sort(Z,fe),ft=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ft&&te.addToRenderList(A,y),this.info.render.frame++,ut===!0&&ge.beginShadows();let V=E.state.shadowsArray;if(se.render(V,y,F),ut===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&T.hasRenderPass())===!1){let _e=A.opaque,he=A.transmissive;if(E.setupLights(),F.isArrayCamera){let ve=F.cameras;if(he.length>0)for(let Me=0,De=ve.length;Me<De;Me++){let Be=ve[Me];Fu(_e,he,y,Be)}ft&&te.render(y);for(let Me=0,De=ve.length;Me<De;Me++){let Be=ve[Me];Uu(A,y,Be,Be.viewport)}}else he.length>0&&Fu(_e,he,y,F),ft&&te.render(y),Uu(A,y,F)}N!==null&&G===0&&(_.updateMultisampleRenderTarget(N),_.updateRenderTargetMipmap(N)),z&&T.end(I),y.isScene===!0&&y.onAfterRender(I,y,F),ne.resetDefaultState(),B=-1,H=null,x.pop(),x.length>0?(E=x[x.length-1],_.setTextureUnits(E.state.textureUnits),ut===!0&&ge.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,P.pop(),P.length>0?A=P[P.length-1]:A=null,R!==null&&R.renderEnd()};function a0(y,F,$,z){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)$=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ce.intersectsSprite(y)){z&&ke.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ke);let _e=ee.update(y),he=y.material;he.visible&&A.push(y,_e,he,$,ke.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ce.intersectsObject(y))){let _e=ee.update(y),he=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ke.copy(y.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),ke.copy(_e.boundingSphere.center)),ke.applyMatrix4(y.matrixWorld).applyMatrix4(Ke)),Array.isArray(he)){let ve=_e.groups;for(let Me=0,De=ve.length;Me<De;Me++){let Be=ve[Me],Se=he[Be.materialIndex];Se&&Se.visible&&A.push(y,_e,Se,$,ke.z,Be)}}else he.visible&&A.push(y,_e,he,$,ke.z,null)}}let ue=y.children;for(let _e=0,he=ue.length;_e<he;_e++)a0(ue[_e],F,$,z)}function Uu(y,F,$,z){let{opaque:V,transmissive:ue,transparent:_e}=y;E.setupLightsView($),ut===!0&&ge.setGlobalState(I.clippingPlanes,$),z&&ae.viewport(j.copy(z)),V.length>0&&qo(V,F,$),ue.length>0&&qo(ue,F,$),_e.length>0&&qo(_e,F,$),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Fu(y,F,$,z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let Se=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new qt(1,1,{generateMipmaps:!0,type:Se?wn:Sn,minFilter:ps,samples:Math.max(4,nt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace})}let ue=E.state.transmissionRenderTarget[z.id],_e=z.viewport||j;ue.setSize(_e.z*I.transmissionResolutionScale,_e.w*I.transmissionResolutionScale);let he=I.getRenderTarget(),ve=I.getActiveCubeFace(),Me=I.getActiveMipmapLevel();I.setRenderTarget(ue),I.getClearColor(xe),be=I.getClearAlpha(),be<1&&I.setClearColor(16777215,.5),I.clear(),ft&&te.render($);let De=I.toneMapping;I.toneMapping=bn;let Be=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),ut===!0&&ge.setGlobalState(I.clippingPlanes,z),qo(y,$,z),_.updateMultisampleRenderTarget(ue),_.updateRenderTargetMipmap(ue),He.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Qe=0,St=F.length;Qe<St;Qe++){let vt=F[Qe],{object:et,geometry:Ht,material:me,group:pn}=vt;if(me.side===Mn&&et.layers.test(z.layers)){let Xe=me.side;me.side=tn,me.needsUpdate=!0,Ou(et,$,z,Ht,me,pn),me.side=Xe,me.needsUpdate=!0,Se=!0}}Se===!0&&(_.updateMultisampleRenderTarget(ue),_.updateRenderTargetMipmap(ue))}I.setRenderTarget(he,ve,Me),I.setClearColor(xe,be),Be!==void 0&&(z.viewport=Be),I.toneMapping=De}function qo(y,F,$){let z=F.isScene===!0?F.overrideMaterial:null;for(let V=0,ue=y.length;V<ue;V++){let _e=y[V],{object:he,geometry:ve,group:Me}=_e,De=_e.material;De.allowOverride===!0&&z!==null&&(De=z),he.layers.test($.layers)&&Ou(he,F,$,ve,De,Me)}}function Ou(y,F,$,z,V,ue){y.onBeforeRender(I,F,$,z,V,ue),y.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(I,F,$,z,y,ue),V.transparent===!0&&V.side===Mn&&V.forceSinglePass===!1?(V.side=tn,V.needsUpdate=!0,I.renderBufferDirect($,F,z,V,y,ue),V.side=Ei,V.needsUpdate=!0,I.renderBufferDirect($,F,z,V,y,ue),V.side=Mn):I.renderBufferDirect($,F,z,V,y,ue),y.onAfterRender(I,F,$,z,V,ue)}function Yo(y,F,$){F.isScene!==!0&&(F=Rt);let z=S.get(y),V=E.state.lights,ue=E.state.shadowsArray,_e=V.state.version,he=oe.getParameters(y,V.state,ue,F,$,E.state.lightProbeGridArray),ve=oe.getProgramCacheKey(he),Me=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,z.fog=F.fog;let De=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=O.get(y.envMap||z.environment,De),z.envMapRotation=z.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Me===void 0&&(y.addEventListener("dispose",bt),Me=new Map,z.programs=Me);let Be=Me.get(ve);if(Be!==void 0){if(z.currentProgram===Be&&z.lightsStateVersion===_e)return zu(y,he),Be}else he.uniforms=oe.getUniforms(y),R!==null&&y.isNodeMaterial&&R.build(y,$,he),y.onBeforeCompile(he,I),Be=oe.acquireProgram(he,ve),Me.set(ve,Be),z.uniforms=he.uniforms;let Se=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Se.clippingPlanes=ge.uniform),zu(y,he),z.needsLights=U1(y),z.lightsStateVersion=_e,z.needsLights&&(Se.ambientLightColor.value=V.state.ambient,Se.lightProbe.value=V.state.probe,Se.directionalLights.value=V.state.directional,Se.directionalLightShadows.value=V.state.directionalShadow,Se.spotLights.value=V.state.spot,Se.spotLightShadows.value=V.state.spotShadow,Se.rectAreaLights.value=V.state.rectArea,Se.ltc_1.value=V.state.rectAreaLTC1,Se.ltc_2.value=V.state.rectAreaLTC2,Se.pointLights.value=V.state.point,Se.pointLightShadows.value=V.state.pointShadow,Se.hemisphereLights.value=V.state.hemi,Se.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Se.spotLightMatrix.value=V.state.spotLightMatrix,Se.spotLightMap.value=V.state.spotLightMap,Se.pointShadowMatrix.value=V.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=Be,z.uniformsList=null,Be}function Bu(y){if(y.uniformsList===null){let F=y.currentProgram.getUniforms();y.uniformsList=br.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function zu(y,F){let $=S.get(y);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function L1(y,F){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;b.setFromMatrixPosition(F.matrixWorld);for(let $=0,z=y.length;$<z;$++){let V=y[$];if(V.texture!==null&&V.boundingBox.containsPoint(b))return V}return null}function D1(y,F,$,z,V){F.isScene!==!0&&(F=Rt),_.resetTextureUnits();let ue=F.fog,_e=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?F.environment:null,he=N===null?I.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ze.workingColorSpace,ve=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Me=O.get(z.envMap||_e,ve),De=z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Be=!!$.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Se=!!$.morphAttributes.position,Qe=!!$.morphAttributes.normal,St=!!$.morphAttributes.color,vt=bn;z.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(vt=I.toneMapping);let et=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ht=et!==void 0?et.length:0,me=S.get(z),pn=E.state.lights;if(ut===!0&&(Ge===!0||y!==H)){let it=y===H&&z.id===B;ge.setState(z,y,it)}let Xe=!1;z.version===me.__version?(me.needsLights&&me.lightsStateVersion!==pn.state.version||me.outputColorSpace!==he||V.isBatchedMesh&&me.batching===!1||!V.isBatchedMesh&&me.batching===!0||V.isBatchedMesh&&me.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&me.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&me.instancing===!1||!V.isInstancedMesh&&me.instancing===!0||V.isSkinnedMesh&&me.skinning===!1||!V.isSkinnedMesh&&me.skinning===!0||V.isInstancedMesh&&me.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&me.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&me.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&me.instancingMorph===!1&&V.morphTexture!==null||me.envMap!==Me||z.fog===!0&&me.fog!==ue||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==ge.numPlanes||me.numIntersection!==ge.numIntersection)||me.vertexAlphas!==De||me.vertexTangents!==Be||me.morphTargets!==Se||me.morphNormals!==Qe||me.morphColors!==St||me.toneMapping!==vt||me.morphTargetsCount!==Ht||!!me.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Xe=!0):(Xe=!0,me.__version=z.version);let Nn=me.currentProgram;Xe===!0&&(Nn=Yo(z,F,V),R&&z.isNodeMaterial&&R.onUpdateProgram(z,Nn,me));let si=!1,Ji=!1,Js=!1,tt=Nn.getUniforms(),wt=me.uniforms;if(ae.useProgram(Nn.program)&&(si=!0,Ji=!0,Js=!0),z.id!==B&&(B=z.id,Ji=!0),me.needsLights){let it=L1(E.state.lightProbeGridArray,V);me.lightProbeGrid!==it&&(me.lightProbeGrid=it,Ji=!0)}if(si||H!==y){ae.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),tt.setValue(U,"projectionMatrix",y.projectionMatrix),tt.setValue(U,"viewMatrix",y.matrixWorldInverse);let ji=tt.map.cameraPosition;ji!==void 0&&ji.setValue(U,rt.setFromMatrixPosition(y.matrixWorld)),nt.logarithmicDepthBuffer&&tt.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&tt.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),H!==y&&(H=y,Ji=!0,Js=!0)}if(me.needsLights&&(pn.state.directionalShadowMap.length>0&&tt.setValue(U,"directionalShadowMap",pn.state.directionalShadowMap,_),pn.state.spotShadowMap.length>0&&tt.setValue(U,"spotShadowMap",pn.state.spotShadowMap,_),pn.state.pointShadowMap.length>0&&tt.setValue(U,"pointShadowMap",pn.state.pointShadowMap,_)),V.isSkinnedMesh){tt.setOptional(U,V,"bindMatrix"),tt.setOptional(U,V,"bindMatrixInverse");let it=V.skeleton;it&&(it.boneTexture===null&&it.computeBoneTexture(),tt.setValue(U,"boneTexture",it.boneTexture,_))}V.isBatchedMesh&&(tt.setOptional(U,V,"batchingTexture"),tt.setValue(U,"batchingTexture",V._matricesTexture,_),tt.setOptional(U,V,"batchingIdTexture"),tt.setValue(U,"batchingIdTexture",V._indirectTexture,_),tt.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&tt.setValue(U,"batchingColorTexture",V._colorsTexture,_));let Ki=$.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&Re.update(V,$,Nn),(Ji||me.receiveShadow!==V.receiveShadow)&&(me.receiveShadow=V.receiveShadow,tt.setValue(U,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&F.environment!==null&&(wt.envMapIntensity.value=F.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=g3()),Ji){if(tt.setValue(U,"toneMappingExposure",I.toneMappingExposure),me.needsLights&&N1(wt,Js),ue&&z.fog===!0&&W.refreshFogUniforms(wt,ue),W.refreshMaterialUniforms(wt,z,Ne,Je,E.state.transmissionRenderTarget[y.id]),me.needsLights&&me.lightProbeGrid){let it=me.lightProbeGrid;wt.probesSH.value=it.texture,wt.probesMin.value.copy(it.boundingBox.min),wt.probesMax.value.copy(it.boundingBox.max),wt.probesResolution.value.copy(it.resolution)}br.upload(U,Bu(me),wt,_)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(br.upload(U,Bu(me),wt,_),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&tt.setValue(U,"center",V.center),tt.setValue(U,"modelViewMatrix",V.modelViewMatrix),tt.setValue(U,"normalMatrix",V.normalMatrix),tt.setValue(U,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){let it=z.uniformsGroups;for(let ji=0,Ks=it.length;ji<Ks;ji++){let ku=it[ji];X.update(ku,Nn),X.bind(ku,Nn)}}return Nn}function N1(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function U1(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,F,$){let z=S.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),S.get(y.texture).__webglTexture=F,S.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:$,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){let $=S.get(y);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0};let F1=U.createFramebuffer();this.setRenderTarget=function(y,F=0,$=0){N=y,k=F,G=$;let z=null,V=!1,ue=!1;if(y){let he=S.get(y);if(he.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(U.FRAMEBUFFER,he.__webglFramebuffer),j.copy(y.viewport),Q.copy(y.scissor),le=y.scissorTest,ae.viewport(j),ae.scissor(Q),ae.setScissorTest(le),B=-1;return}else if(he.__webglFramebuffer===void 0)_.setupRenderTarget(y);else if(he.__hasExternalTextures)_.rebindTextures(y,S.get(y.texture).__webglTexture,S.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let De=y.depthTexture;if(he.__boundDepthTexture!==De){if(De!==null&&S.has(De)&&(y.width!==De.image.width||y.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(y)}}let ve=y.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(ue=!0);let Me=S.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Me[F])?z=Me[F][$]:z=Me[F],V=!0):y.samples>0&&_.useMultisampledRTT(y)===!1?z=S.get(y).__webglMultisampledFramebuffer:Array.isArray(Me)?z=Me[$]:z=Me,j.copy(y.viewport),Q.copy(y.scissor),le=y.scissorTest}else j.copy(ie).multiplyScalar(Ne).floor(),Q.copy(Ae).multiplyScalar(Ne).floor(),le=Ie;if($!==0&&(z=F1),ae.bindFramebuffer(U.FRAMEBUFFER,z)&&ae.drawBuffers(y,z),ae.viewport(j),ae.scissor(Q),ae.setScissorTest(le),V){let he=S.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,he.__webglTexture,$)}else if(ue){let he=F;for(let ve=0;ve<y.textures.length;ve++){let Me=S.get(y.textures[ve]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ve,Me.__webglTexture,$,he)}}else if(y!==null&&$!==0){let he=S.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,he.__webglTexture,$)}B=-1},this.readRenderTargetPixels=function(y,F,$,z,V,ue,_e,he=0){if(!(y&&y.isWebGLRenderTarget)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=S.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve){ae.bindFramebuffer(U.FRAMEBUFFER,ve);try{let Me=y.textures[he],De=Me.format,Be=Me.type;if(y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he),!nt.textureFormatReadable(De)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Be)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-z&&$>=0&&$<=y.height-V&&U.readPixels(F,$,z,V,L.convert(De),L.convert(Be),ue)}finally{let Me=N!==null?S.get(N).__webglFramebuffer:null;ae.bindFramebuffer(U.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(y,F,$,z,V,ue,_e,he=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=S.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve)if(F>=0&&F<=y.width-z&&$>=0&&$<=y.height-V){ae.bindFramebuffer(U.FRAMEBUFFER,ve);let Me=y.textures[he],De=Me.format,Be=Me.type;if(y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he),!nt.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Se),U.bufferData(U.PIXEL_PACK_BUFFER,ue.byteLength,U.STREAM_READ),U.readPixels(F,$,z,V,L.convert(De),L.convert(Be),0);let Qe=N!==null?S.get(N).__webglFramebuffer:null;ae.bindFramebuffer(U.FRAMEBUFFER,Qe);let St=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Wf(U,St,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Se),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ue),U.deleteBuffer(Se),U.deleteSync(St),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,$=0){let z=Math.pow(2,-$),V=Math.floor(y.image.width*z),ue=Math.floor(y.image.height*z),_e=F!==null?F.x:0,he=F!==null?F.y:0;_.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,_e,he,V,ue),ae.unbindTexture()};let O1=U.createFramebuffer(),B1=U.createFramebuffer();this.copyTextureToTexture=function(y,F,$=null,z=null,V=0,ue=0){let _e,he,ve,Me,De,Be,Se,Qe,St,vt=y.isCompressedTexture?y.mipmaps[ue]:y.image;if($!==null)_e=$.max.x-$.min.x,he=$.max.y-$.min.y,ve=$.isBox3?$.max.z-$.min.z:1,Me=$.min.x,De=$.min.y,Be=$.isBox3?$.min.z:0;else{let wt=Math.pow(2,-V);_e=Math.floor(vt.width*wt),he=Math.floor(vt.height*wt),y.isDataArrayTexture?ve=vt.depth:y.isData3DTexture?ve=Math.floor(vt.depth*wt):ve=1,Me=0,De=0,Be=0}z!==null?(Se=z.x,Qe=z.y,St=z.z):(Se=0,Qe=0,St=0);let et=L.convert(F.format),Ht=L.convert(F.type),me;F.isData3DTexture?(_.setTexture3D(F,0),me=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(_.setTexture2DArray(F,0),me=U.TEXTURE_2D_ARRAY):(_.setTexture2D(F,0),me=U.TEXTURE_2D),ae.activeTexture(U.TEXTURE0),ae.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),ae.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ae.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let pn=ae.getParameter(U.UNPACK_ROW_LENGTH),Xe=ae.getParameter(U.UNPACK_IMAGE_HEIGHT),Nn=ae.getParameter(U.UNPACK_SKIP_PIXELS),si=ae.getParameter(U.UNPACK_SKIP_ROWS),Ji=ae.getParameter(U.UNPACK_SKIP_IMAGES);ae.pixelStorei(U.UNPACK_ROW_LENGTH,vt.width),ae.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt.height),ae.pixelStorei(U.UNPACK_SKIP_PIXELS,Me),ae.pixelStorei(U.UNPACK_SKIP_ROWS,De),ae.pixelStorei(U.UNPACK_SKIP_IMAGES,Be);let Js=y.isDataArrayTexture||y.isData3DTexture,tt=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){let wt=S.get(y),Ki=S.get(F),it=S.get(wt.__renderTarget),ji=S.get(Ki.__renderTarget);ae.bindFramebuffer(U.READ_FRAMEBUFFER,it.__webglFramebuffer),ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let Ks=0;Ks<ve;Ks++)Js&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,S.get(y).__webglTexture,V,Be+Ks),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,S.get(F).__webglTexture,ue,St+Ks)),U.blitFramebuffer(Me,De,_e,he,Se,Qe,_e,he,U.DEPTH_BUFFER_BIT,U.NEAREST);ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||S.has(y)){let wt=S.get(y),Ki=S.get(F);ae.bindFramebuffer(U.READ_FRAMEBUFFER,O1),ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,B1);for(let it=0;it<ve;it++)Js?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.__webglTexture,V,Be+it):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,wt.__webglTexture,V),tt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ki.__webglTexture,ue,St+it):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ki.__webglTexture,ue),V!==0?U.blitFramebuffer(Me,De,_e,he,Se,Qe,_e,he,U.COLOR_BUFFER_BIT,U.NEAREST):tt?U.copyTexSubImage3D(me,ue,Se,Qe,St+it,Me,De,_e,he):U.copyTexSubImage2D(me,ue,Se,Qe,Me,De,_e,he);ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else tt?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(me,ue,Se,Qe,St,_e,he,ve,et,Ht,vt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(me,ue,Se,Qe,St,_e,he,ve,et,vt.data):U.texSubImage3D(me,ue,Se,Qe,St,_e,he,ve,et,Ht,vt):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ue,Se,Qe,_e,he,et,Ht,vt.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ue,Se,Qe,vt.width,vt.height,et,vt.data):U.texSubImage2D(U.TEXTURE_2D,ue,Se,Qe,_e,he,et,Ht,vt);ae.pixelStorei(U.UNPACK_ROW_LENGTH,pn),ae.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Xe),ae.pixelStorei(U.UNPACK_SKIP_PIXELS,Nn),ae.pixelStorei(U.UNPACK_SKIP_ROWS,si),ae.pixelStorei(U.UNPACK_SKIP_IMAGES,Ji),ue===0&&F.generateMipmaps&&U.generateMipmap(me),ae.unbindTexture()},this.initRenderTarget=function(y){S.get(y).__webglFramebuffer===void 0&&_.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?_.setTextureCube(y,0):y.isData3DTexture?_.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?_.setTexture2DArray(y,0):_.setTexture2D(y,0),ae.unbindTexture()},this.resetState=function(){k=0,G=0,N=null,ae.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}};var pi={start:360,step:5,x:[1299e-7,2321e-7,4149e-7,7416e-7,.001368,.002236,.004243,.00765,.01431,.02319,.04351,.07763,.13438,.21477,.2839,.3285,.34828,.34806,.3362,.3187,.2908,.2511,.19536,.1421,.09564,.05795001,.03201,.0147,.0049,.0024,.0093,.0291,.06327,.1096,.1655,.2257499,.2904,.3597,.4334499,.5120501,.5945,.6784,.7621,.8425,.9163,.9786,1.0263,1.0567,1.0622,1.0456,1.0026,.9384,.8544499,.7514,.6424,.5419,.4479,.3608,.2835,.2187,.1649,.1212,.0874,.0636,.04677,.0329,.0227,.01584,.01135916,.008110916,.005790346,.004109457,.002899327,.00204919,.001439971,.0009999493,.0006900786,.0004760213,.0003323011,.0002348261,.0001661505,117413e-9,8307527e-11,5870652e-11,4150994e-11,2935326e-11,2067383e-11,1455977e-11,1025398e-11,7221456e-12,5085868e-12,3581652e-12,2522525e-12,1776509e-12,1251141e-12],y:[3917e-9,6965e-9,1239e-8,2202e-8,39e-6,64e-6,12e-5,217e-6,396e-6,64e-5,.00121,.00218,.004,.0073,.0116,.01684,.023,.0298,.038,.048,.06,.0739,.09098,.1126,.13902,.1693,.20802,.2586,.323,.4073,.503,.6082,.71,.7932,.862,.9148501,.954,.9803,.9949501,1,.995,.9786,.952,.9154,.87,.8163,.757,.6949,.631,.5668,.503,.4412,.381,.321,.265,.217,.175,.1382,.107,.0816,.061,.04458,.032,.0232,.017,.01192,.00821,.005723,.004102,.002929,.002091,.001484,.001047,74e-5,52e-5,3611e-7,2492e-7,1719e-7,12e-5,848e-7,6e-5,424e-7,3e-5,212e-7,1499e-8,106e-7,74657e-10,52578e-10,37029e-10,26078e-10,18366e-10,12934e-10,91093e-11,64153e-11,45181e-11],z:[6061e-7,.001086,.001946,.003486,.006450001,.01054999,.02005001,.03621,.06785001,.1102,.2074,.3713,.6456,1.0390501,1.3856,1.62296,1.74706,1.7826,1.77211,1.7441,1.6692,1.5281,1.28764,1.0419,.8129501,.6162,.46518,.3533,.272,.2123,.1582,.1117,.07824999,.05725001,.04216,.02984,.0203,.0134,.008749999,.005749999,.0039,.002749999,.0021,.0018,.001650001,.0014,.0011,.001,8e-4,6e-4,34e-5,24e-5,19e-5,1e-4,4999999e-11,3e-5,2e-5,1e-5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};var Kc={start:300,step:1,values:[.0341,.36014,.68618,1.01222,1.33826,1.6643,1.99034,2.31638,2.64242,2.96846,3.2945,4.98865,6.6828,8.37695,10.0711,11.7652,13.4594,15.1535,16.8477,18.5418,20.236,21.9177,23.5995,25.2812,26.963,28.6447,30.3265,32.0082,33.69,35.3717,37.0535,37.343,37.6326,37.9221,38.2116,38.5011,38.7907,39.0802,39.3697,39.6593,39.9488,40.4451,40.9414,41.4377,41.934,42.4302,42.9265,43.4228,43.9191,44.4154,44.9117,45.0844,45.257,45.4297,45.6023,45.775,45.9477,46.1203,46.293,46.4656,46.6383,47.1834,47.7285,48.2735,48.8186,49.3637,49.9088,50.4539,50.9989,51.544,52.0891,51.8777,51.6664,51.455,51.2437,51.0323,50.8209,50.6096,50.3982,50.1869,49.9755,50.4428,50.91,51.3773,51.8446,52.3118,52.7791,53.2464,53.7137,54.1809,54.6482,57.4589,60.2695,63.0802,65.8909,68.7015,71.5122,74.3229,77.1336,79.9442,82.7549,83.628,84.5011,85.3742,86.2473,87.1204,87.9936,88.8667,89.7398,90.6129,91.486,91.6806,91.8752,92.0697,92.2643,92.4589,92.6535,92.8481,93.0426,93.2372,93.4318,92.7568,92.0819,91.4069,90.732,90.057,89.3821,88.7071,88.0322,87.3572,86.6823,88.5006,90.3188,92.1371,93.9554,95.7736,97.5919,99.4102,101.228,103.047,104.865,106.079,107.294,108.508,109.722,110.936,112.151,113.365,114.579,115.794,117.008,117.088,117.169,117.249,117.33,117.41,117.49,117.571,117.651,117.732,117.812,117.517,117.222,116.927,116.632,116.336,116.041,115.746,115.451,115.156,114.861,114.967,115.073,115.18,115.286,115.392,115.498,115.604,115.711,115.817,115.923,115.212,114.501,113.789,113.078,112.367,111.656,110.945,110.233,109.522,108.811,108.865,108.92,108.974,109.028,109.082,109.137,109.191,109.245,109.3,109.354,109.199,109.044,108.888,108.733,108.578,108.423,108.268,108.112,107.957,107.802,107.501,107.2,106.898,106.597,106.296,105.995,105.694,105.392,105.091,104.79,105.08,105.37,105.66,105.95,106.239,106.529,106.819,107.109,107.399,107.689,107.361,107.032,106.704,106.375,106.047,105.719,105.39,105.062,104.733,104.405,104.369,104.333,104.297,104.261,104.225,104.19,104.154,104.118,104.082,104.046,103.641,103.237,102.832,102.428,102.023,101.618,101.214,100.809,100.405,100,99.6334,99.2668,98.9003,98.5337,98.1671,97.8005,97.4339,97.0674,96.7008,96.3342,96.2796,96.225,96.1703,96.1157,96.0611,96.0065,95.9519,95.8972,95.8426,95.788,95.0778,94.3675,93.6573,92.947,92.2368,91.5266,90.8163,90.1061,89.3958,88.6856,88.8177,88.9497,89.0818,89.2138,89.3459,89.478,89.61,89.7421,89.8741,90.0062,89.9655,89.9248,89.8841,89.8434,89.8026,89.7619,89.7212,89.6805,89.6398,89.5991,89.4091,89.219,89.029,88.8389,88.6489,88.4589,88.2688,88.0788,87.8887,87.6987,87.2577,86.8167,86.3757,85.9347,85.4936,85.0526,84.6116,84.1706,83.7296,83.2886,83.3297,83.3707,83.4118,83.4528,83.4939,83.535,83.576,83.6171,83.6581,83.6992,83.332,82.9647,82.5975,82.2302,81.863,81.4958,81.1285,80.7613,80.394,80.0268,80.0456,80.0644,80.0831,80.1019,80.1207,80.1395,80.1583,80.177,80.1958,80.2146,80.4209,80.6272,80.8336,81.0399,81.2462,81.4525,81.6588,81.8652,82.0715,82.2778,81.8784,81.4791,81.0797,80.6804,80.281,79.8816,79.4823,79.0829,78.6836,78.2842,77.4279,76.5716,75.7153,74.859,74.0027,73.1465,72.2902,71.4339,70.5776,69.7213,69.9101,70.0989,70.2876,70.4764,70.6652,70.854,71.0428,71.2315,71.4203,71.6091,71.8831,72.1571,72.4311,72.7051,72.979,73.253,73.527,73.801,74.075,74.349,73.0745,71.8,70.5255,69.251,67.9765,66.702,65.4275,64.153,62.8785,61.604,62.4322,63.2603,64.0885,64.9166,65.7448,66.573,67.4011,68.2293,69.0574,69.8856,70.4057,70.9259,71.446,71.9662,72.4863,73.0064,73.5266,74.0467,74.5669,75.087,73.9376,72.7881,71.6387,70.4893,69.3398,68.1904,67.041,65.8916,64.7421,63.5927,61.8752,60.1578,58.4403,56.7229,55.0054,53.288,51.5705,49.8531,48.1356,46.4182,48.4569,50.4956,52.5344,54.5731,56.6118,58.6505,60.6892,62.728,64.7667,66.8054,66.4631,66.1209,65.7786,65.4364,65.0941,64.7518,64.4096,64.0673,63.7251,63.3828,63.4749,63.567,63.6592,63.7513,63.8434,63.9355,64.0276,64.1198,64.2119,64.304,63.8188,63.3336,62.8484,62.3632,61.8779,61.3927,60.9075,60.4223,59.9371,59.4519,58.7026,57.9533,57.204,56.4547,55.7054,54.9562,54.2069,53.4576,52.7083,51.959,52.5072,53.0553,53.6035,54.1516,54.6998,55.248,55.7961,56.3443,56.8924,57.4406,57.7278,58.015,58.3022,58.5894,58.8765,59.1637,59.4509,59.7381,60.0253,60.3125]};function $s(n,e=[0,0,0]){let t=n[0],i=n[1];return e[0]=t/i,e[1]=1,e[2]=(1-t-i)/i,e}var Ph={A:[.44757,.40745],B:[.34842,.35161],C:[.31006,.31616],D50:[.34567,.3585],D55:[.33242,.34743],D65:[.31272,.32903],D75:[.29902,.31485],E:[1/3,1/3],F2:[.37208,.37529],F7:[.31292,.32933],F11:[.38052,.37713]},Mt=[.3127,.329],Zt=[.3457,.3585],Bt=$s(Mt),jn=$s(Zt);var mi={bradford:[.8951,.2664,-.1614,-.7502,1.7135,.0367,.0389,-.0685,1.0296],cat02:[.7328,.4296,-.1624,-.7036,1.6975,.0061,.003,.0136,.9834],cat16:[.401288,.650173,-.051461,-.250268,1.204414,.045854,-.002079,.048952,.953127],vonkries:[.40024,.7076,-.08081,-.2263,1.16532,.0457,0,0,.91822],"xyz-scaling":[1,0,0,0,1,0,0,0,1]};function ct(n,e,t=[0,0,0]){let i=e[0],s=e[1],r=e[2];return t[0]=n[0]*i+n[1]*s+n[2]*r,t[1]=n[3]*i+n[4]*s+n[5]*r,t[2]=n[6]*i+n[7]*s+n[8]*r,t}function Ct(n,e,t=new Array(9)){let i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],c=n[5],l=n[6],h=n[7],f=n[8],u=e[0],d=e[1],g=e[2],v=e[3],m=e[4],p=e[5],M=e[6],w=e[7],b=e[8];return t[0]=i*u+s*v+r*M,t[1]=i*d+s*m+r*w,t[2]=i*g+s*p+r*b,t[3]=o*u+a*v+c*M,t[4]=o*d+a*m+c*w,t[5]=o*g+a*p+c*b,t[6]=l*u+h*v+f*M,t[7]=l*d+h*m+f*w,t[8]=l*g+h*p+f*b,t}function st(n,e=new Array(9)){let t=n[0],i=n[1],s=n[2],r=n[3],o=n[4],a=n[5],c=n[6],l=n[7],h=n[8],f=o*h-a*l,u=a*c-r*h,d=r*l-o*c,g=t*f+i*u+s*d;if(g===0)throw new Error("mat3: singular matrix");let v=1/g;return e[0]=f*v,e[1]=(s*l-i*h)*v,e[2]=(i*a-s*o)*v,e[3]=u*v,e[4]=(t*h-s*c)*v,e[5]=(s*r-t*a)*v,e[6]=d*v,e[7]=(i*c-t*l)*v,e[8]=(t*o-i*r)*v,e}function Ed(n,e,t,i=new Array(9)){return i[0]=n,i[1]=0,i[2]=0,i[3]=0,i[4]=e,i[5]=0,i[6]=0,i[7]=0,i[8]=t,i}function Td(n){let[e,t]=n.r,[i,s]=n.g,[r,o]=n.b,a=[e/t,i/s,r/o,1,1,1,(1-e-t)/t,(1-i-s)/s,(1-r-o)/o],c=$s(n.white),l=ct(st(a),c),h=[l[0]*a[0],l[1]*a[1],l[2]*a[2],l[0]*a[3],l[1]*a[4],l[2]*a[5],l[0]*a[6],l[1]*a[7],l[2]*a[8]];return{toXyz:h,fromXyz:st(h),whiteXyz:c}}var Ad={srgb:{r:[.64,.33],g:[.3,.6],b:[.15,.06],white:Mt,transfer:"srgb"},"display-p3":{r:[.68,.32],g:[.265,.69],b:[.15,.06],white:Mt,transfer:"srgb"},"a98-rgb":{r:[.64,.33],g:[.21,.71],b:[.15,.06],white:Mt,transfer:"a98"},"prophoto-rgb":{r:[.734699,.265301],g:[.159597,.840403],b:[.036598,105e-6],white:Zt,transfer:"prophoto"},rec2020:{r:[.708,.292],g:[.17,.797],b:[.131,.046],white:Mt,transfer:"rec2020"},bt709:{r:[.64,.33],g:[.3,.6],b:[.15,.06],white:Mt,transfer:"bt709"},"dci-p3":{r:[.68,.32],g:[.265,.69],b:[.15,.06],white:[.314,.351],transfer:"gamma26"},"aces2065-1":{r:[.7347,.2653],g:[0,1],b:[1e-4,-.077],white:[.32168,.33767],transfer:"linear"},acescg:{r:[.713,.293],g:[.165,.83],b:[.128,.044],white:[.32168,.33767],transfer:"linear"}};var dt=.1593017578125,Jt=2523/4096*128,pt=3424/4096,mt=2413/4096*32,gt=2392/4096*32;function wr(n){if(n<=0)return 0;let e=Math.pow(n/1e4,dt);return Math.pow((pt+mt*e)/(1+gt*e),Jt)}function Er(n){if(n<=0)return 0;let e=Math.pow(n,1/Jt),t=Math.max(e-pt,0);return 1e4*Math.pow(t/(mt-gt*e),1/dt)}var Ci=1.7*Jt,xs=1.15,vs=.66,Kt=-.56,Ri=16295499532821565e-27;function jc(n){if(n<=0)return 0;let e=Math.pow(n/1e4,dt);return Math.pow((pt+mt*e)/(1+gt*e),Ci)}function Qc(n){if(n<=0)return 0;let e=Math.pow(n,1/Ci),t=Math.max(e-pt,0);return 1e4*Math.pow(t/(mt-gt*e),1/dt)}var Cd=[1688/4096,2146/4096,262/4096,683/4096,2951/4096,462/4096,99/4096,309/4096,3688/4096],Ro=[.5,.5,0,6610/4096,-13613/4096,7003/4096,17933/4096,-17390/4096,-543/4096],En=[.41478972,.579999,.014648,-.20151,1.120649,.0531008,-.0166008,.2648,.6684799],gi=[.5,.5,0,3.524,-4.066708,.542708,.199076,1.096799,-1.295875];function _3(n){let e=Math.abs(n),t=e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);return n<0?-t:t}function x3(n){let e=Math.abs(n),t=e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055;return n<0?-t:t}var Pi=563/256;function v3(n){let e=Math.pow(Math.abs(n),Pi);return n<0?-e:e}function y3(n){let e=Math.pow(Math.abs(n),1/Pi);return n<0?-e:e}var Ii=1/512;function M3(n){let e=Math.abs(n),t=e<=16*Ii?e/16:Math.pow(e,1.8);return n<0?-t:t}function b3(n){let e=Math.abs(n),t=e>=Ii?Math.pow(e,1/1.8):16*e;return n<0?-t:t}var kt=1.09929682680944,Li=.018053968510807;function S3(n){let e=Math.abs(n),t=e<Li*4.5?e/4.5:Math.pow((e+kt-1)/kt,1/.45);return n<0?-t:t}function w3(n){let e=Math.abs(n),t=e<Li?4.5*e:kt*Math.pow(e,.45)-(kt-1);return n<0?-t:t}var Vt=1.099,Di=.018;function E3(n){let e=Math.abs(n),t=e<Di*4.5?e/4.5:Math.pow((e+Vt-1)/Vt,1/.45);return n<0?-t:t}function T3(n){let e=Math.abs(n),t=e<Di?4.5*e:Vt*Math.pow(e,.45)-(Vt-1);return n<0?-t:t}function A3(n){let e=Math.pow(Math.abs(n),2.6);return n<0?-e:e}function C3(n){let e=Math.pow(Math.abs(n),.3846153846153846);return n<0?-e:e}var Po=(Math.log2(Math.pow(2,-16))+9.72)/17.52;function R3(n){return n<(9.72-15)/17.52?(Math.pow(2,n*17.52-9.72)-Math.pow(2,-16))*2:n<(Math.log2(65504)+9.72)/17.52?Math.pow(2,n*17.52-9.72):65504}function P3(n){return n<=0?Po:n<Math.pow(2,-15)?(Math.log2(Math.pow(2,-16)+n*.5)+9.72)/17.52:(Math.log2(n)+9.72)/17.52}var Ni=10.5402377416545,Ui=.0729055341958355;function I3(n){return n>.155251141552511?Math.pow(2,n*17.52-9.72):(n-Ui)/Ni}function L3(n){return n<=.0078125?Ni*n+Ui:(Math.log2(n)+9.72)/17.52}function D3(n){return Er(n)/203}function N3(n){return wr(n*203)}var kn=.17883277,Fi=1-4*kn,Oi=.5-kn*Math.log(4*kn),Tn=3.7743;function U3(n){return n<=0?0:n<=.5?n*n/3*Tn:(Math.exp((n-Oi)/kn)+Fi)/12*Tn}function F3(n){if(n<=0)return 0;let e=n/Tn;return e<=1/12?Math.sqrt(3*e):kn*Math.log(12*e-Fi)+Oi}var Rd=n=>n,Tr={srgb:{decode:_3,encode:x3},a98:{decode:v3,encode:y3},prophoto:{decode:M3,encode:b3},rec2020:{decode:S3,encode:w3},bt709:{decode:E3,encode:T3},gamma26:{decode:A3,encode:C3},acescc:{decode:R3,encode:P3},acescct:{decode:I3,encode:L3},rec2100pq:{decode:D3,encode:N3},rec2100hlg:{decode:U3,encode:F3},linear:{decode:Rd,encode:Rd}};var Pd=new Map;function O3(n){let e=Pd.get(n);return e||(e=st(mi[n]),Pd.set(n,e)),e}var Id=new Map;function Ld(n){if(typeof n=="string"){let e=Id.get(n);if(!e){let t=Ph[n];if(!t)throw new Error(`whitepoint: unknown illuminant "${n}" (have: ${Object.keys(Ph).join(", ")})`);Id.set(n,e={key:n,xyz:$s(t)})}return e}return n.length===2?{key:`xy:${n[0]},${n[1]}`,xyz:$s(n)}:{key:`xyz:${n[0]},${n[1]},${n[2]}`,xyz:n}}var Dd=new Map;function cn(n,e,t="bradford"){if(!mi[t])throw new Error(`whitepoint: unknown CAT "${t}" (have: ${Object.keys(mi).join(", ")})`);let i=Ld(n),s=Ld(e),r=`${t}|${i.key}|${s.key}`,o=Dd.get(r);if(!o){let a=mi[t],c=ct(a,i.xyz),l=ct(a,s.xyz);o=Ct(Ct(O3(t),Ed(l[0]/c[0],l[1]/c[1],l[2]/c[2])),a),Dd.set(r,o)}return o}function ln(n,e,t,i){let{decode:s,encode:r}=Tr[i],o=e[0],a=e[1],c=e[2],l=e[3],h=e[4],f=e[5],u=e[6],d=e[7],g=e[8],v=t[0],m=t[1],p=t[2],M=t[3],w=t[4],b=t[5],A=t[6],E=t[7],P=t[8];return{id:n,transferName:i,m:{toXyz:e,fromXyz:t},toXyz(x,T=[0,0,0]){let I=s(x[0]),C=s(x[1]),R=s(x[2]);return T[0]=o*I+a*C+c*R,T[1]=l*I+h*C+f*R,T[2]=u*I+d*C+g*R,T},fromXyz(x,T=[0,0,0]){let I=x[0],C=x[1],R=x[2];return T[0]=r(v*I+m*C+p*R),T[1]=r(M*I+w*C+b*R),T[2]=r(A*I+E*C+P*R),T}}}function ys(n,e=n){let t=Ad[e],{toXyz:i,fromXyz:s}=Td(t);return t.white!==Mt&&(i=Ct(cn(t.white,Mt),i),s=st(i)),{toXyz:i,fromXyz:s,transfer:t.transfer}}var Ar=ys("srgb"),Nd=ys("display-p3"),Ud=ys("a98-rgb"),Fd=ys("prophoto-rgb"),Cr=ys("rec2020"),Od=ys("dci-p3"),Bd=ys("aces2065-1"),Rr=ys("acescg"),$e=ln("srgb",Ar.toXyz,Ar.fromXyz,"srgb"),el=ln("srgb-linear",Ar.toXyz,Ar.fromXyz,"linear"),Io=ln("display-p3",Nd.toXyz,Nd.fromXyz,"srgb"),tl=ln("a98-rgb",Ud.toXyz,Ud.fromXyz,"a98"),nl=ln("prophoto-rgb",Fd.toXyz,Fd.fromXyz,"prophoto"),Bi=ln("rec2020",Cr.toXyz,Cr.fromXyz,"rec2020"),Pr=ln("bt709",Ar.toXyz,Ar.fromXyz,"bt709"),il=ln("dci-p3",Od.toXyz,Od.fromXyz,"gamma26"),sl=ln("aces2065-1",Bd.toXyz,Bd.fromXyz,"linear"),rl=ln("acescg",Rr.toXyz,Rr.fromXyz,"linear"),ol=ln("acescc",Rr.toXyz,Rr.fromXyz,"acescc"),al=ln("acescct",Rr.toXyz,Rr.fromXyz,"acescct"),cl=ln("rec2100-pq",Cr.toXyz,Cr.fromXyz,"rec2100pq"),ll=ln("rec2100-hlg",Cr.toXyz,Cr.fromXyz,"rec2100hlg");var hn=Math.PI/180,Ms=180/Math.PI;function An(n,e=[0,0,0]){let t=n[1],i=n[2],s=Math.atan2(i,t)*Ms;return s<0&&(s+=360),e[0]=n[0],e[1]=Math.sqrt(t*t+i*i),e[2]=s,e}function nn(n,e=[0,0,0]){let t=n[2]*hn,i=n[1];return e[0]=n[0],e[1]=i*Math.cos(t),e[2]=i*Math.sin(t),e}var B3=216/24389,zd=24389/27,z3=6/29,kd=Bt[0],Vd=Bt[1],Gd=Bt[2],pl=26/180*Math.PI,ul=Math.cos(pl),fl=Math.sin(pl),Hd=100/Math.log(139/100);function Ih(n){return n>B3?Math.cbrt(n):(zd*n+16)/116}function Lh(n){return n>z3?n*n*n:(116*n-16)/zd}function $d(n,e){let t=Ih(n[0]/kd),i=Ih(n[1]/Vd),s=Ih(n[2]/Gd);return e[0]=116*i-16,e[1]=500*(t-i),e[2]=200*(i-s),e}function Wd(n,e){let t=(n[0]+16)/116,i=n[1]/500+t,s=t-n[2]/200;return e[0]=Lh(i)*kd,e[1]=Lh(t)*Vd,e[2]=Lh(s)*Gd,e}var dl=[0,0,0],hl=[0,0,0];function Xd(n,e){let t=n[1]*ul+n[2]*fl,i=.83*(n[2]*ul-n[1]*fl),s=Math.sqrt(t*t+i*i);e[0]=Hd*Math.log(1+.0039*n[0]),e[1]=Math.log(1+.075*s)/.0435;let r=(Math.atan2(i,t)+pl)/Math.PI*180;return r=(r%360+360)%360,e[2]=s===0?0:r,e}function qd(n,e){e[0]=(Math.exp(n[0]/Hd)-1)/.0039;let t=(Math.exp(.0435*n[1])-1)/.075,i=n[2]/180*Math.PI-pl,s=t*Math.cos(i),r=t*Math.sin(i);return e[1]=s*ul-r/.83*fl,e[2]=s*fl+r/.83*ul,e}var Yd={id:"din99o",fromXyz(n,e=[0,0,0]){return Xd($d(n,dl),hl),nn(hl,e)},toXyz(n,e=[0,0,0]){return An(n,hl),Wd(qd(hl,dl),e)}},Zd={id:"din99o-lch",fromXyz(n,e=[0,0,0]){return Xd($d(n,dl),e)},toXyz(n,e=[0,0,0]){return Wd(qd(n,dl),e)}};var Nh=mi.cat16,k3=st(Nh),V3=216/24389,Jd=24389/27;function Dh(n){let e=(n+16)/116;return 100*(e>6/29?e*e*e:(116*e-16)/Jd)}function G3(n){let e=n/100;return e>V3?116*Math.cbrt(e)-16:Jd*e}var H3={average:[1,.69,1],dim:[.9,.59,.9],dark:[.8,.525,.8]};function $3(n={}){let e=n.white??[Bt[0]*100,100,Bt[2]*100],t=n.adaptingLuminance??200/Math.PI*(Dh(50)/100),i=n.backgroundLstar??50,s=H3[n.surround??"average"];if(!s)throw new Error(`whitepoint: unknown surround "${n.surround}" (have: average, dim, dark)`);let[r,o,a]=s,c=ct(Nh,e,[0,0,0]),l=n.discounting?1:r*(1-1/3.6*Math.exp((-t-42)/92));l=l>1?1:l<0?0:l;let h=1/(5*t+1),f=h*h*h*h,u=f*t+.1*(1-f)*(1-f)*Math.cbrt(5*t),d=Dh(i)/e[1],g=1.48+Math.sqrt(d),v=.725/Math.pow(d,.2),m=[l*(100/c[0])+1-l,l*(100/c[1])+1-l,l*(100/c[2])+1-l],p=(()=>{let M=0,w=[2,1,.05],b=[0,0,0];for(let A=0;A<3;A++){let E=Math.pow(u*m[A]*c[A]/100,.42);b[A]=400*E/(E+27.13),M+=w[A]*b[A]}return M*v})();return{fl:u,fl25:Math.pow(u,.25),n:d,z:g,c:o,nc:a,nbb:v,ncb:v,aw:p,rgbD:m,cz:o*g}}var Qn=$3(),Cn=[0,0,0];function Kd(n,e=Qn,t=[0,0,0]){ct(Nh,n,Cn);for(let m=0;m<3;m++){let p=e.rgbD[m]*Cn[m],M=Math.pow(e.fl*Math.abs(p)/100,.42);Cn[m]=Math.sign(p)*400*M/(M+27.13)}let i=Cn[0],s=Cn[1],r=Cn[2],o=(11*i-12*s+r)/11,a=(i+s-2*r)/9,c=Math.atan2(a,o)*Ms;c<0&&(c+=360);let l=(20*i+20*s+21*r)/20,h=(40*i+20*s+r)/20*e.nbb,f=100*Math.pow(h/e.aw,e.cz),u=.25*(Math.cos(c*hn+2)+3.8),g=5e4/13*u*e.nc*e.ncb*Math.sqrt(o*o+a*a)/(l+.305),v=Math.pow(g,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73);return t[0]=f,t[1]=v*Math.sqrt(f/100),t[2]=c,t}function jd(n,e=Qn,t=[0,0,0]){let i=n[0],s=n[1],r=n[2];if(i<=0)return t[0]=0,t[1]=0,t[2]=0,t;let o=s===0?0:s/Math.sqrt(i/100),a=Math.pow(o/Math.pow(1.64-Math.pow(.29,e.n),.73),1/.9),c=r*hn,l=.25*(Math.cos(c+2)+3.8),h=e.aw*Math.pow(i/100,1/e.cz),f=5e4/13*l*e.nc*e.ncb,u=h/e.nbb,d=23*(u+.305)*a/(23*f+11*a*Math.cos(c)+108*a*Math.sin(c)),g=d*Math.cos(c),v=d*Math.sin(c);Cn[0]=(460*u+451*g+288*v)/1403,Cn[1]=(460*u-891*g-261*v)/1403,Cn[2]=(460*u-220*g-6300*v)/1403;for(let m=0;m<3;m++){let p=Math.abs(Cn[m]),M=Math.max(0,27.13*p/(400-p));Cn[m]=Math.sign(Cn[m])*(100/e.fl)*Math.pow(M,1/.42)/e.rgbD[m]}return ct(k3,Cn,t)}var un=[0,0,0],zt=[0,0,0],ml={id:"cam16",fromXyz(n,e=[0,0,0]){return un[0]=n[0]*100,un[1]=n[1]*100,un[2]=n[2]*100,Kd(un,Qn,e)},toXyz(n,e=[0,0,0]){return jd(n,Qn,e),e[0]/=100,e[1]/=100,e[2]/=100,e}},Qd={id:"cam16-ucs",fromXyz(n,e=[0,0,0]){ml.fromXyz(n,zt);let t=zt[1]*Qn.fl25,i=Math.log(1+.0228*t)/.0228,s=zt[2]*hn;return e[0]=1.7*zt[0]/(1+.007*zt[0]),e[1]=i*Math.cos(s),e[2]=i*Math.sin(s),e},toXyz(n,e=[0,0,0]){let t=n[0],i=Math.sqrt(n[1]*n[1]+n[2]*n[2]),s=(Math.exp(.0228*i)-1)/.0228;zt[0]=t/(1.7-.007*t),zt[1]=s/Qn.fl25;let r=Math.atan2(n[2],n[1])*Ms;return r<0&&(r+=360),zt[2]=r,ml.toXyz(zt,e)}},ep={id:"hct",fromXyz(n,e=[0,0,0]){return un[0]=n[0]*100,un[1]=n[1]*100,un[2]=n[2]*100,Kd(un,Qn,zt),e[0]=zt[2],e[1]=zt[1],e[2]=G3(un[1]),e},toXyz(n,e=[0,0,0]){let t=n[2];if(t<=0)return e[0]=0,e[1]=0,e[2]=0,e;let i=Dh(Math.min(t,100));zt[1]=n[1],zt[2]=n[0];let s=0,r=400;for(let o=0;o<48;o++)zt[0]=.5*(s+r),jd(zt,Qn,un),un[1]<i?s=zt[0]:r=zt[0];return e[0]=un[0]/100,e[1]=un[1]/100,e[2]=un[2]/100,e}};var np=216/24389,zh=24389/27,Fh=Bt[0],Lo=Bt[1],ip=Bt[2],Oh=4*Fh/(Fh+15*Lo+3*ip),Bh=9*Lo/(Fh+15*Lo+3*ip),Uh=$e.m.fromXyz,tp=[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];function sp(n){let e=Math.pow(n+16,3)/1560896,t=e>np?e:n/zh;for(let i=0;i<3;i++){let s=Uh[i*3],r=Uh[i*3+1],o=Uh[i*3+2];for(let a=0;a<2;a++){let c=(284517*s-94839*o)*t,l=(838422*o+769860*r+731718*s)*n*t-769860*a*n,h=(632260*o-126452*r)*t+126452*a,f=tp[i*2+a];f[0]=c/h,f[1]=l/h}}return tp}function W3(n,e){let t=e*hn,i=Math.sin(t),s=Math.cos(t),r=sp(n),o=1/0;for(let a=0;a<6;a++){let c=r[a][1]/(i-r[a][0]*s);c>=0&&c<o&&(o=c)}return o}function X3(n){let e=sp(n),t=1/0;for(let i=0;i<6;i++){let s=Math.abs(e[i][1])/Math.sqrt(e[i][0]*e[i][0]+1);s<t&&(t=s)}return t}function q3(n,e){let t=n[0]+15*n[1]+3*n[2],i=t===0?Oh:4*n[0]/t,s=t===0?Bh:9*n[1]/t,r=n[1]/Lo,o=r>np?116*Math.cbrt(r)-16:zh*r,a=13*o*(i-Oh),c=13*o*(s-Bh);e[0]=o,e[1]=Math.sqrt(a*a+c*c);let l=Math.atan2(c,a)*Ms;return l<0&&(l+=360),e[2]=e[1]<1e-12?0:l,e}function Y3(n,e){let t=n[0];if(t<=1e-8)return e[0]=0,e[1]=0,e[2]=0,e;let i=n[2]*hn,s=n[1]*Math.cos(i),r=n[1]*Math.sin(i),o=s/(13*t)+Oh,a=r/(13*t)+Bh,c=Lo*(t>8?Math.pow((t+16)/116,3):t/zh);return e[0]=c*9*o/(4*a),e[1]=c,e[2]=c*(12-3*o-20*a)/(4*a),e}var Rn=[0,0,0];function rp(n,e){return{id:n,toXyz(t,i=[0,0,0]){let s=(t[0]%360+360)%360,r=t[2];return r>99.9999999?(Rn[0]=100,Rn[1]=0):r<1e-8?(Rn[0]=0,Rn[1]=0):(Rn[0]=r,Rn[1]=e(r,s)/100*t[1]),Rn[2]=s,Y3(Rn,i)},fromXyz(t,i=[0,0,0]){q3(t,Rn);let s=Rn[0],r;return s>99.9999999||s<1e-8?r=0:r=Rn[1]/e(s,Rn[2])*100,i[0]=Rn[2],i[1]=r,i[2]=s,i}}}var op=rp("hsluv",W3),ap=rp("hpluv",n=>X3(n));var kh=Bt[0]*100,_l=100,Vh=Bt[2]*100,cp=175/198.04*(kh+_l),lp=70/218.11*(_l+Vh),hp={id:"hunter-lab",fromXyz(n,e=[0,0,0]){let t=n[0]*100,i=n[1]*100,s=n[2]*100,r=i/_l;if(r<=0)return e[0]=0,e[1]=0,e[2]=0,e;let o=Math.sqrt(r);return e[0]=100*o,e[1]=cp*(t/kh-r)/o,e[2]=lp*(r-s/Vh)/o,e},toXyz(n,e=[0,0,0]){let t=n[0]/100,i=t*t;return i<=0?(e[0]=0,e[1]=0,e[2]=0,e):(e[0]=kh*(n[1]*t/cp+i)/100,e[1]=_l*i/100,e[2]=Vh*(i-n[2]*t/lp)/100,e)}},Do=.0037930732552754493,gl=Math.cbrt(Do),up=[.3,.622,.078,.23,.692,.078,.2434226892454782,.2047674442449682,.5518098665095535],Z3=st(up),Vn=[0,0,0],fp={id:"xyb",fromXyz(n,e=[0,0,0]){ct($e.m.fromXyz,n,Vn),ct(up,Vn,Vn);let t=Math.cbrt(Vn[0]+Do)-gl,i=Math.cbrt(Vn[1]+Do)-gl,s=Math.cbrt(Vn[2]+Do)-gl;return e[0]=(t-i)/2,e[1]=(t+i)/2,e[2]=s-(t+i)/2,e},toXyz(n,e=[0,0,0]){let t=i=>{let s=i+gl;return s*s*s-Do};return Vn[0]=t(n[1]+n[0]),Vn[1]=t(n[1]-n[0]),Vn[2]=t(n[2]+n[1]),ct(Z3,Vn,Vn),ct($e.m.toXyz,Vn,e)}};var J3={601:{kr:.299,kb:.114,base:()=>$e},709:{kr:.2126,kb:.0722,base:()=>Pr},2020:{kr:.2627,kb:.0593,base:()=>Bi}},dp=16/255,pp=219/255,bs=128/255,xl=224/255,_i=[0,0,0];function mp(n={}){let e=J3[n.matrix];if(!e)throw new Error(`whitepoint: makeYCbCr requires matrix: '601' | '709' | '2020' (got ${JSON.stringify(n.matrix)})`);if(n.range!=="full"&&n.range!=="limited")throw new Error(`whitepoint: makeYCbCr requires range: 'full' | 'limited' (got ${JSON.stringify(n.range)})`);let t=n.range==="limited",{kr:i,kb:s}=e,r=1-i-s,o=e.base();return{id:`ycbcr-${n.matrix}-${n.range}`,toXyz(a,c=[0,0,0]){let l,h,f;t?(l=(a[0]-dp)/pp,h=(a[1]-bs)/xl,f=(a[2]-bs)/xl):(l=a[0],h=a[1]-bs,f=a[2]-bs);let u=l+2*(1-i)*f,d=l+2*(1-s)*h;return _i[0]=u,_i[1]=(l-i*u-s*d)/r,_i[2]=d,o.toXyz(_i,c)},fromXyz(a,c=[0,0,0]){o.fromXyz(a,_i);let l=i*_i[0]+r*_i[1]+s*_i[2],h=(_i[2]-l)/(2*(1-s)),f=(_i[0]-l)/(2*(1-i));return t?(c[0]=dp+pp*l,c[1]=bs+xl*h,c[2]=bs+xl*f):(c[0]=l,c[1]=bs+h,c[2]=bs+f),c}}}var gp=mp({matrix:"601",range:"full"}),_p=mp({matrix:"709",range:"limited"});var xp=[.4122214708,.5363325363,.0514459929,.2119034982,.6806995451,.1073969566,.0883024619,.2817188376,.6299787005],Pn=[.2104542553,.793617785,-.0040720468,1.9779984951,-2.428592205,.4505937099,.0259040371,.7827717662,-.808675766];var Gn=Ct(xp,$e.m.fromXyz),jt=st(Gn),_t=st(Pn),K3=Gn[0],j3=Gn[1],Q3=Gn[2],ey=Gn[3],ty=Gn[4],ny=Gn[5],iy=Gn[6],sy=Gn[7],ry=Gn[8],oy=jt[0],ay=jt[1],cy=jt[2],ly=jt[3],hy=jt[4],uy=jt[5],fy=jt[6],dy=jt[7],py=jt[8],my=Pn[0],gy=Pn[1],_y=Pn[2],xy=Pn[3],vy=Pn[4],yy=Pn[5],My=Pn[6],by=Pn[7],Sy=Pn[8],yp=_t[0],Mp=_t[1],bp=_t[2],Sp=_t[3],wp=_t[4],Ep=_t[5],Tp=_t[6],Ap=_t[7],Cp=_t[8],zi={id:"oklab",fromXyz(n,e=[0,0,0]){let t=n[0],i=n[1],s=n[2],r=Math.cbrt(K3*t+j3*i+Q3*s),o=Math.cbrt(ey*t+ty*i+ny*s),a=Math.cbrt(iy*t+sy*i+ry*s);return e[0]=my*r+gy*o+_y*a,e[1]=xy*r+vy*o+yy*a,e[2]=My*r+by*o+Sy*a,e},toXyz(n,e=[0,0,0]){let t=n[0],i=n[1],s=n[2],r=yp*t+Mp*i+bp*s,o=Sp*t+wp*i+Ep*s,a=Tp*t+Ap*i+Cp*s;return r=r*r*r,o=o*o*o,a=a*a*a,e[0]=oy*r+ay*o+cy*a,e[1]=ly*r+hy*o+uy*a,e[2]=fy*r+dy*o+py*a,e}},vp=[0,0,0],Rp={id:"oklch",fromXyz(n,e=[0,0,0]){return An(zi.fromXyz(n,vp),e)},toXyz(n,e=[0,0,0]){return zi.toXyz(nn(n,vp),e)}};function vl(n){let e=Ct(n.m.fromXyz,jt),t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return function(f,u=[0,0,0]){let d=f[0],g=f[1],v=f[2],m=yp*d+Mp*g+bp*v,p=Sp*d+wp*g+Ep*v,M=Tp*d+Ap*g+Cp*v;return m=m*m*m,p=p*p*p,M=M*M*M,u[0]=t*m+i*p+s*M,u[1]=r*m+o*p+a*M,u[2]=c*m+l*p+h*M,u}}var wy=216/24389,Np=24389/27,Ey=6/29,ki=cn(Mt,Zt),Vi=cn(Zt,Mt),Ty=ki[0],Ay=ki[1],Cy=ki[2],Ry=ki[3],Py=ki[4],Iy=ki[5],Ly=ki[6],Dy=ki[7],Ny=ki[8],Uy=Vi[0],Fy=Vi[1],Oy=Vi[2],By=Vi[3],zy=Vi[4],ky=Vi[5],Vy=Vi[6],Gy=Vi[7],Hy=Vi[8],Pp=jn[0],Ip=jn[1],Lp=jn[2];function Gh(n){return n>wy?Math.cbrt(n):(Np*n+16)/116}function Hh(n){return n>Ey?n*n*n:(116*n-16)/Np}var yl={id:"lab",fromXyz(n,e=[0,0,0]){let t=n[0],i=n[1],s=n[2],r=Gh((Ty*t+Ay*i+Cy*s)/Pp),o=Gh((Ry*t+Py*i+Iy*s)/Ip),a=Gh((Ly*t+Dy*i+Ny*s)/Lp);return e[0]=116*o-16,e[1]=500*(r-o),e[2]=200*(o-a),e},toXyz(n,e=[0,0,0]){let t=(n[0]+16)/116,i=n[1]/500+t,s=t-n[2]/200,r=Hh(i)*Pp,o=Hh(t)*Ip,a=Hh(s)*Lp;return e[0]=Uy*r+Fy*o+Oy*a,e[1]=By*r+zy*o+ky*a,e[2]=Vy*r+Gy*o+Hy*a,e}},Dp=[0,0,0],Up={id:"lch",fromXyz(n,e=[0,0,0]){return An(yl.fromXyz(n,Dp),e)},toXyz(n,e=[0,0,0]){return yl.toXyz(nn(n,Dp),e)}};function No(n,e=[0,0,0]){let t=(n[0]%360+360)%360,i=n[1],s=n[2],r=i*Math.min(s,1-s),o=(0+t/30)%12,a=(8+t/30)%12,c=(4+t/30)%12;return e[0]=s-r*Math.max(-1,Math.min(o-3,9-o,1)),e[1]=s-r*Math.max(-1,Math.min(a-3,9-a,1)),e[2]=s-r*Math.max(-1,Math.min(c-3,9-c,1)),e}function Ss(n,e=[0,0,0]){let t=n[0],i=n[1],s=n[2],r=Math.max(t,i,s),o=Math.min(t,i,s),a=(r+o)/2,c=r-o,l=0,h=0;return c!==0&&(h=a>.5?c/(2-r-o):c/(r+o),r===t?l=((i-s)/c+(i<s?6:0))*60:r===i?l=((s-t)/c+2)*60:l=((t-i)/c+4)*60),e[0]=l,e[1]=h,e[2]=a,e}function bl(n,e=[0,0,0]){let t=Math.min(n[0],n[1],n[2]),i=1-Math.max(n[0],n[1],n[2]);return Ss(n,e),e[1]=t,e[2]=i,e}function Sl(n,e=[0,0,0]){let t=n[1],i=n[2];if(t+i>=1){let r=t/(t+i);return e[0]=r,e[1]=r,e[2]=r,e}No([n[0],1,.5],e);let s=1-t-i;return e[0]=e[0]*s+t,e[1]=e[1]*s+t,e[2]=e[2]*s+t,e}var Ml=[0,0,0],Fp={id:"hsl",toXyz(n,e=[0,0,0]){return $e.toXyz(No(n,Ml),e)},fromXyz(n,e=[0,0,0]){return Ss($e.fromXyz(n,Ml),e)}},Op={id:"hwb",toXyz(n,e=[0,0,0]){return $e.toXyz(Sl(n,Ml),e)},fromXyz(n,e=[0,0,0]){return bl($e.fromXyz(n,Ml),e)}};var $h={id:"xyz-d65",toXyz(n,e=[0,0,0]){return e[0]=n[0],e[1]=n[1],e[2]=n[2],e},fromXyz(n,e=[0,0,0]){return e[0]=n[0],e[1]=n[1],e[2]=n[2],e}},Bp=cn(Zt,Mt),zp=cn(Mt,Zt),kp={id:"xyz-d50",m:{toXyz:Bp,fromXyz:zp},toXyz(n,e=[0,0,0]){return ct(Bp,n,e)},fromXyz(n,e=[0,0,0]){return ct(zp,n,e)}};var El=Ct(Cd,Bi.m.fromXyz).map(n=>n*203),Wh=st(El),Xh=st(Ro),ht=[0,0,0],Gp={id:"ictcp",fromXyz(n,e=[0,0,0]){return ct(El,n,ht),ht[0]=wr(ht[0]),ht[1]=wr(ht[1]),ht[2]=wr(ht[2]),ct(Ro,ht,e)},toXyz(n,e=[0,0,0]){return ct(Xh,n,ht),ht[0]=Er(ht[0]),ht[1]=Er(ht[1]),ht[2]=Er(ht[2]),ct(Wh,ht,e)}},ei=st(En),qh=st(gi),wl={id:"jzazbz",fromXyz(n,e=[0,0,0]){let t=Math.max(n[0]*203,0),i=Math.max(n[1]*203,0),s=Math.max(n[2]*203,0),r=xs*t-(xs-1)*s,o=vs*i-(vs-1)*t,a=jc(En[0]*r+En[1]*o+En[2]*s),c=jc(En[3]*r+En[4]*o+En[5]*s),l=jc(En[6]*r+En[7]*o+En[8]*s),h=.5*a+.5*c;return e[0]=(1+Kt)*h/(1+Kt*h)-Ri,e[1]=gi[3]*a+gi[4]*c+gi[5]*l,e[2]=gi[6]*a+gi[7]*c+gi[8]*l,e},toXyz(n,e=[0,0,0]){let t=n[0]+Ri,i=t/(1+Kt-Kt*t);ht[0]=i,ht[1]=n[1],ht[2]=n[2],ct(qh,ht,ht);let s=Qc(ht[0]),r=Qc(ht[1]),o=Qc(ht[2]),a=ei[0]*s+ei[1]*r+ei[2]*o,c=ei[3]*s+ei[4]*r+ei[5]*o,l=ei[6]*s+ei[7]*r+ei[8]*o,h=(a+(xs-1)*l)/xs,f=(c+(vs-1)*h)/vs;return e[0]=h/203,e[1]=f/203,e[2]=l/203,e}},Vp=[0,0,0],Hp={id:"jzczhz",fromXyz(n,e=[0,0,0]){return An(wl.fromXyz(n,Vp),e)},toXyz(n,e=[0,0,0]){return wl.toXyz(nn(n,Vp),e)}};var $y=216/24389,$p=24389/27,Gi=cn(Mt,Zt),Hi=cn(Zt,Mt),Jh=jn[0],Uo=jn[1],Xp=jn[2],Yh=4*Jh/(Jh+15*Uo+3*Xp),Zh=9*Uo/(Jh+15*Uo+3*Xp),Hn=[0,0,0],Tl={id:"luv",fromXyz(n,e=[0,0,0]){let t=Gi[0]*n[0]+Gi[1]*n[1]+Gi[2]*n[2],i=Gi[3]*n[0]+Gi[4]*n[1]+Gi[5]*n[2],s=Gi[6]*n[0]+Gi[7]*n[1]+Gi[8]*n[2],r=t+15*i+3*s,o=r===0?Yh:4*t/r,a=r===0?Zh:9*i/r,c=i/Uo,l=c>$y?116*Math.cbrt(c)-16:$p*c;return e[0]=l,e[1]=13*l*(o-Yh),e[2]=13*l*(a-Zh),e},toXyz(n,e=[0,0,0]){let t=n[0];if(t===0)return e[0]=0,e[1]=0,e[2]=0,e;let i=n[1]/(13*t)+Yh,s=n[2]/(13*t)+Zh,r=Uo*(t>8?Math.pow((t+16)/116,3):t/$p),o=r*9*i/(4*s),a=r*(12-3*i-20*s)/(4*s);return Hn[0]=o,Hn[1]=r,Hn[2]=a,e[0]=Hi[0]*Hn[0]+Hi[1]*Hn[1]+Hi[2]*Hn[2],e[1]=Hi[3]*Hn[0]+Hi[4]*Hn[1]+Hi[5]*Hn[2],e[2]=Hi[6]*Hn[0]+Hi[7]*Hn[1]+Hi[8]*Hn[2],e}},Wp=[0,0,0],qp={id:"lchuv",fromXyz(n,e=[0,0,0]){return An(Tl.fromXyz(n,Wp),e)},toXyz(n,e=[0,0,0]){return Tl.toXyz(nn(n,Wp),e)}};var Al=[0,0,0];function Kh(n,e=[0,0,0]){let t=Math.max(n[0],n[1],n[2]),i=Math.min(n[0],n[1],n[2]);return Ss(n,e),e[1]=t===0?0:(t-i)/t,e[2]=t,e}function jh(n,e=[0,0,0]){let t=(n[0]%360+360)%360,i=n[1],s=n[2],r=o=>{let a=(o+t/60)%6;return s-s*i*Math.max(0,Math.min(a,4-a,1))};return e[0]=r(5),e[1]=r(3),e[2]=r(1),e}function Qh(n,e=[0,0,0]){let t=n[0]+n[1]+n[2],i=Math.min(n[0],n[1],n[2]);return Ss(n,e),e[1]=t===0?0:1-3*i/t,e[2]=t/3,e}function eu(n,e=[0,0,0]){let t=(n[0]%360+360)%360,i=n[1],s=n[2],r=Math.abs(t/60%2-1),o=s*(1+i*(3/(2-r)-1)),a=s*(1+i*(3*(1-r)/(2-r)-1)),c=s*(1-i);switch(Math.floor(t/60)%6){case 0:e[0]=o,e[1]=a,e[2]=c;break;case 1:e[0]=a,e[1]=o,e[2]=c;break;case 2:e[0]=c,e[1]=o,e[2]=a;break;case 3:e[0]=c,e[1]=a,e[2]=o;break;case 4:e[0]=a,e[1]=c,e[2]=o;break;default:e[0]=o,e[1]=c,e[2]=a;break}return e}var Yp={id:"hsv",toXyz(n,e=[0,0,0]){return $e.toXyz(jh(n,Al),e)},fromXyz(n,e=[0,0,0]){return Kh($e.fromXyz(n,Al),e)}},Zp={id:"hsi",toXyz(n,e=[0,0,0]){return $e.toXyz(eu(n,Al),e)},fromXyz(n,e=[0,0,0]){return Qh($e.fromXyz(n,Al),e)}};function Jp(n,e=1e-6){return n[0]>=-e&&n[0]<=1+e&&n[1]>=-e&&n[1]<=1+e&&n[2]>=-e&&n[2]<=1+e}function Qp(n,e){let t=Oo(n);if(!t.m||t.transferName===void 0)throw new Error(`whitepoint: ${e} needs a bounded RGB gamut space (got "${t.id}")`);return t}function Rl(n,e=[0,0,0]){return e[0]=n[0]<0?0:n[0]>1?1:n[0],e[1]=n[1]<0?0:n[1]>1?1:n[1],e[2]=n[2]<0?0:n[2]>1?1:n[2],e}var Kp=new Map;function em(n){let e=Kp.get(n.id);return e||(e={M:Ct(n.m.fromXyz,jt),al:_t[0],am:_t[3],as:_t[6],l1:_t[1],l2:_t[2],m1:_t[4],m2:_t[5],s1:_t[7],s2:_t[8],whiteOklch:$n([1,1,1],n,"oklch"),cusps:new Map},Kp.set(n.id,e)),e}function jp(n,e,t,i,s,r,o){let a=n.al*s+e*r,c=n.am*s+t*r,l=n.as*s+i*r;a=a*a*a,c=c*c*c,l=l*l*l;let h=n.M;return o[0]=h[0]*a+h[1]*c+h[2]*l,o[1]=h[3]*a+h[4]*c+h[5]*l,o[2]=h[6]*a+h[7]*c+h[8]*l,o}function Fo(n,e){let t=Qp(e,"findCusp"),i=em(t),s=Math.round((n%360+360)%360*100),r=i.cusps.get(s);if(r)return r;let o=n*hn,a=Math.cos(o),c=Math.sin(o),l=i.l1*a+i.l2*c,h=i.m1*a+i.m2*c,f=i.s1*a+i.s2*c,u=i.M,d=M=>{let w=i.al+l*M,b=i.am+h*M,A=i.as+f*M;w=w*w*w,b=b*b*b,A=A*A*A;let E=u[0]*w+u[1]*b+u[2]*A,P=u[3]*w+u[4]*b+u[5]*A,x=u[6]*w+u[7]*b+u[8]*A;return[Math.min(E,P,x),Math.max(E,P,x)]},g=0,v=.05;for(;d(v)[0]>0;)if(g=v,v*=2,v>16)throw new Error(`whitepoint: no cusp found for hue ${n} in "${t.id}"`);for(let M=0;M<52;M++){let w=.5*(g+v);d(w)[0]>0?g=w:v=w}let m=g,p=Math.cbrt(1/d(m)[1]);return r=[p,m*p],i.cusps.set(s,r),r}var Cl=[0,0,0];function tm(n,e,t,i=48){if(n<=0||n>=1)return 0;let s=Qp(t,"maxChromaAt"),r=em(s),o=e*hn,a=Math.cos(o),c=Math.sin(o),l=r.l1*a+r.l2*c,h=r.m1*a+r.m2*c,f=r.s1*a+r.s2*c,u=0,d=.05;for(;d<2&&(jp(r,l,h,f,n,d,Cl),!!Jp(Cl,0));)u=d,d*=2;for(let g=0;g<i;g++){let v=.5*(u+d);jp(r,l,h,f,n,v,Cl),Jp(Cl,0)?u=v:d=v}return u}var zo=.206,tu=.03,Bo=(1+zo)/(1+tu),ko=n=>.5*(Bo*n-zo+Math.sqrt((Bo*n-zo)*(Bo*n-zo)+4*tu*Bo*n)),Ll=n=>(n*n+zo*n)/(Bo*(n+tu)),Wy=vl($e),Pl=[0,0,0],Il=[0,0,0];function nm(n,e,t,i){Il[0]=n,Il[1]=t*e,Il[2]=i*e,Wy(Il,Pl);let s=Math.max(Pl[0],Pl[1],Pl[2],0);return Math.cbrt(1/s)}function Xy(n,e){let t=.11516993+1/(7.4477897+4.1590124*e+n*(-2.19557347+1.75198401*e+n*(-2.13704948-10.02301043*e+n*(-4.24894561+5.38770819*e+4.69891013*n)))),i=.11239642+1/(1.6132032-.68124379*e+n*(.40370612+.90148123*e+n*(-.27087943+.6122399*e+n*(.00299215-.45399568*e-.14661872*n))));return[t,i]}function im(n,e,t,i){let s=Fo(e,$e),r=tm(n,e,$e),o=s[1]/s[0],a=s[1]/(1-s[0]),c=r/Math.min(n*o,(1-n)*a),[l,h]=Xy(t,i),f=n*l,u=(1-n)*h,d=.9*c*Math.sqrt(Math.sqrt(1/(1/(f*f*f*f)+1/(u*u*u*u))));return f=n*.4,u=(1-n)*.8,[Math.sqrt(1/(1/(f*f)+1/(u*u))),d,r]}function sm(n){let e=Math.atan2(n[2],n[1])*Ms;return e<0&&(e+=360),e}function qy(n,e){let t=n[2];if(t>=1-1e-9)return e[0]=1,e[1]=0,e[2]=0,e;if(t<=1e-9)return e[0]=0,e[1]=0,e[2]=0,e;let i=(n[0]%360+360)%360,s=n[1],r=i*hn,o=Math.cos(r),a=Math.sin(r),c=Ll(t),[l,h,f]=im(c,i,o,a),u;if(s<.8){let d=1.25*s,g=.8*l,v=1-g/h;u=d*g/(1-v*d)}else{let d=5*(s-.8),g=h,v=.2*h*h*1.25*1.25/l,m=1-v/(f-h);u=g+d*v/(1-m*d)}return e[0]=c,e[1]=u*o,e[2]=u*a,e}function Yy(n,e){let t=n[0],i=Math.sqrt(n[1]*n[1]+n[2]*n[2]);if(t>=1-1e-9)return e[0]=0,e[1]=0,e[2]=1,e;if(t<=1e-9)return e[0]=0,e[1]=0,e[2]=0,e;if(i<1e-12)return e[0]=0,e[1]=0,e[2]=ko(t),e;let s=n[1]/i,r=n[2]/i,o=sm(n),[a,c,l]=im(t,o,s,r),h;if(i<c){let f=.8*a,u=1-f/c;h=i/(f+u*i)*.8}else{let f=c,u=.2*c*c*1.25*1.25/a,d=1-u/(l-c);h=.8+.2*((i-f)/(u+d*(i-f)))}return e[0]=o,e[1]=h,e[2]=ko(t),e}function Zy(n,e){let t=n[2];if(t<=1e-9)return e[0]=0,e[1]=0,e[2]=0,e;let i=(n[0]%360+360)%360,s=n[1],r=i*hn,o=Math.cos(r),a=Math.sin(r),c=Fo(i,$e),l=c[1]/c[0],h=c[1]/(1-c[0]),f=.5,u=1-f/l,d=f+h-h*u*s,g=1-s*f/d,v=s*h*f/d,m=t*g,p=t*v,M=Ll(g),w=v*M/g,b=Ll(m);p=m===0?0:p*b/m,m=b;let A=nm(M,w,o,a);return m*=A,p*=A,e[0]=m,e[1]=p*o,e[2]=p*a,e}function Jy(n,e){let t=n[0],i=Math.sqrt(n[1]*n[1]+n[2]*n[2]);if(t<=1e-9)return e[0]=0,e[1]=0,e[2]=0,e;if(i<1e-12)return e[0]=0,e[1]=0,e[2]=ko(t),e;let s=n[1]/i,r=n[2]/i,o=sm(n),a=Fo(o,$e),c=a[1]/a[0],l=a[1]/(1-a[0]),h=.5,f=1-h/c,u=l/(i+t*l),d=u*t,g=u*i,v=Ll(d),m=g*v/d,p=nm(v,m,s,r);return t/=p,i/=p,i=i*ko(t)/t,t=ko(t),e[0]=o,e[1]=(h+l)*g/(l*h+l*f*g),e[2]=t/d,e}var Dl=[0,0,0],rm={id:"okhsl",toXyz(n,e=[0,0,0]){return zi.toXyz(qy(n,Dl),e)},fromXyz(n,e=[0,0,0]){return Yy(zi.fromXyz(n,Dl),e)}},om={id:"okhsv",toXyz(n,e=[0,0,0]){return zi.toXyz(Zy(n,Dl),e)},fromXyz(n,e=[0,0,0]){return Jy(zi.fromXyz(n,Dl),e)}};var nu={srgb:$e,"srgb-linear":el,"display-p3":Io,"a98-rgb":tl,"prophoto-rgb":nl,rec2020:Bi,oklab:zi,oklch:Rp,lab:yl,lch:Up,hsl:Fp,hwb:Op,"xyz-d65":$h,xyz:$h,"xyz-d50":kp,ictcp:Gp,jzazbz:wl,jzczhz:Hp,luv:Tl,lchuv:qp,hsv:Yp,hsi:Zp,okhsl:rm,okhsv:om,bt709:Pr,"dci-p3":il,"aces2065-1":sl,acescg:rl,acescc:ol,acescct:al,"rec2100-pq":cl,"rec2100-hlg":ll,din99o:Yd,"din99o-lch":Zd,cam16:ml,"cam16-ucs":Qd,hct:ep,hsluv:op,hpluv:ap,"hunter-lab":hp,xyb:fp,"ycbcr-601-full":gp,"ycbcr-709-limited":_p};function Oo(n){if(typeof n=="string"){let e=nu[n];if(!e)throw new Error(`whitepoint: unknown color space "${n}" (have: ${Object.keys(nu).join(", ")})`);return e}return n}var cm=new Map;function Gt(n,e,t){cm.set(n+"|"+e,t)}Gt("hsl","srgb",No);Gt("srgb","hsl",Ss);Gt("hwb","srgb",Sl);Gt("srgb","hwb",bl);var lm=[0,0,0];Gt("hsl","hwb",(n,e)=>bl(No(n,lm),e));Gt("hwb","hsl",(n,e)=>Ss(Sl(n,lm),e));Gt("hsv","srgb",jh);Gt("srgb","hsv",Kh);Gt("hsi","srgb",eu);Gt("srgb","hsi",Qh);Gt("oklab","oklch",(n,e)=>An(n,e));Gt("oklch","oklab",(n,e)=>nn(n,e));Gt("lab","lch",(n,e)=>An(n,e));Gt("lch","lab",(n,e)=>nn(n,e));var Ky=[0,0,0];for(let n of[$e,Io,Bi]){let e=vl(n),{encode:t}=Tr[n.transferName],i=(s,r=[0,0,0])=>(e(s,r),r[0]=t(r[0]),r[1]=t(r[1]),r[2]=t(r[2]),r);Gt("oklab",n.id,i),Gt("oklch",n.id,(s,r=[0,0,0])=>i(nn(s,Ky),r))}function jy(n,e){let t=Ct(e.m.fromXyz,n.m.toXyz),i=t[0],s=t[1],r=t[2],o=t[3],a=t[4],c=t[5],l=t[6],h=t[7],f=t[8],{decode:u}=Tr[n.transferName],{encode:d}=Tr[e.transferName];return(g,v=[0,0,0])=>{let m=u(g[0]),p=u(g[1]),M=u(g[2]);return v[0]=d(i*m+s*p+r*M),v[1]=d(o*m+a*p+c*M),v[2]=d(l*m+h*p+f*M),v}}var Qy=[0,0,0],am=new WeakMap,hm=null,um=null,fm=null;function eM(n,e){let t=am.get(n);t===void 0&&am.set(n,t=new Map);let i=t.get(e);return i===void 0&&(i=cm.get(n.id+"|"+e.id),i===void 0&&(i=n.m&&e.m&&n.transferName!==void 0&&e.transferName!==void 0?jy(n,e):null),t.set(e,i)),hm=n,um=e,fm=i,i}function $n(n,e,t,i=[0,0,0]){let s=typeof e=="string"?Oo(e):e,r=typeof t=="string"?Oo(t):t;if(s===r)return i[0]=n[0],i[1]=n[1],i[2]=n[2],i;let o=s===hm&&r===um?fm:eM(s,r);return o!==null?o(n,i):r.fromXyz(s.toXyz(n,Qy),i)}var $i=pi.x.length,mm=pi.start,gm=pi.step,su=new Array($i),Ir=new Array($i),qs=new Array($i),Lr=new Array($i);{let n=0;for(let e=0;e<$i;e++){let t=mm+e*gm;su[e]=(t-595)/235;let i=Dr(Kc,t);Ir[e]=i*pi.x[e],qs[e]=i*pi.y[e],Lr[e]=i*pi.z[e],n+=qs[e]}for(let e=0;e<$i;e++)Ir[e]/=n,qs[e]/=n,Lr[e]/=n}var _m=n=>.5+n/(2*Math.sqrt(1+n*n)),dm=n=>{let e=2*n-1;return e/Math.sqrt(1-e*e)};function pm(n,e,t){e[0]=0,e[1]=0,e[2]=0;for(let i=0;i<9;i++)t[i]=0;for(let i=0;i<$i;i++){let s=su[i],r=n[0]*s*s+n[1]*s+n[2],o=_m(r);e[0]+=o*Ir[i],e[1]+=o*qs[i],e[2]+=o*Lr[i];let a=.5/Math.pow(1+r*r,1.5),c=a*s*s,l=a*s,h=a;t[0]+=c*Ir[i],t[1]+=l*Ir[i],t[2]+=h*Ir[i],t[3]+=c*qs[i],t[4]+=l*qs[i],t[5]+=h*qs[i],t[6]+=c*Lr[i],t[7]+=l*Lr[i],t[8]+=h*Lr[i]}}var ws=[0,0,0],iu=new Array(9),Ws=[0,0,0],Xs=[0,0,0];function tM(n){let[e,t,i]=n;if(t<=1e-6)return[0,0,dm(1e-4)];let r=Math.min(Math.max(t,5e-4),.9995)/t;e*=r,t*=r,i*=r;let o=[0,0,dm(Math.min(Math.max(t,.001),.999))],a=1/0;for(let c=0;c<60&&(pm(o,ws,iu),Xs[0]=ws[0]-e,Xs[1]=ws[1]-t,Xs[2]=ws[2]-i,a=Math.max(Math.abs(Xs[0]),Math.abs(Xs[1]),Math.abs(Xs[2])),!(a<1e-10));c++){ct(st(iu),Xs,Ws);let l=1;for(let h=0;h<10;h++){let f=[o[0]-l*Ws[0],o[1]-l*Ws[1],o[2]-l*Ws[2]];if(pm(f,ws,iu),Math.max(Math.abs(ws[0]-e),Math.abs(ws[1]-t),Math.abs(ws[2]-i))<a){o[0]=f[0],o[1]=f[1],o[2]=f[2];break}l*=.5,h===9&&(o[0]-=l*Ws[0],o[1]-=l*Ws[1],o[2]-=l*Ws[2])}}return o}var Nl=new Map;function Vo(n,e="srgb"){let t=$n(n,e,"xyz-d65"),i=`${t[0].toFixed(6)},${t[1].toFixed(6)},${t[2].toFixed(6)}`,s=Nl.get(i);if(s)return s;let r=tM(t),o=new Array($i);for(let a=0;a<$i;a++){let c=su[a];o[a]=_m(r[0]*c*c+r[1]*c+r[2])}return s={start:mm,step:gm,values:o},Nl.size>512&&Nl.clear(),Nl.set(i,s),s}var Fl={hydrogen:[[383.5397,1969e4,13.4306],[388.9064,2835e4,13.386],[397.0075,4301e4,13.3209],[410.1734,7007e4,13.2207],[434.0472,1265e5,13.0545],[486.1286949,3867e4,12.7485],[486.1297761,1934e4,12.7485],[486.135,2694e5,12.7485],[656.27097,2155e5,12.0875],[656.272483,8979e4,12.0875],[656.277153,449e5,12.0875],[656.279,7938e5,12.0875],[656.285175,3879e5,12.0875]],helium:[[381.96074,536300,24.2092],[381.96074,8044e3,24.2092],[381.96074,4505e4,24.2092],[381.96074,8044e3,24.2092],[381.96074,2413e4,24.2092],[383.3554,4824e3,24.4513],[387.1791,6693e3,24.4194],[388.8648,2842e4,23.0071],[388.8648,4737e4,23.0071],[393.5912,744800,24.3672],[396.47291,2085e4,23.7421],[402.3973,1128e3,24.2983],[402.61914,966700,24.0427],[402.61914,145e5,24.0427],[402.61914,8121e4,24.0427],[402.61914,145e5,24.0427],[402.61914,435e5,24.0427],[412.08154,7421e3,23.972],[412.08154,4453e3,23.972],[414.3761,2441e4,24.2092],[416.8967,183e4,24.1912],[438.79296,4494e4,24.0428],[443.7551,3269e3,24.0112],[447.14802,2048e3,23.7361],[447.14802,3072e4,23.7361],[447.14802,1721e5,23.7361],[447.14802,3072e4,23.7361],[447.14802,9216e4,23.7361],[471.31457,1587e4,23.594],[471.31457,9521e3,23.594],[492.19313,9932e4,23.7363],[501.56783,4012e4,23.087],[504.7738,6771e3,23.6736],[587.5621,8837e4,23.0737],[587.5621,495e6,23.0737],[587.5621,8839e4,23.0737],[587.5621,2651e5,23.0737],[667.8151,3185e5,23.0741],[706.519,4642e4,22.7185],[706.519,2785e4,22.7185],[706.571,9284e3,22.7185],[728.1349,183e5,22.9203]],neon:[[453.63003,1287e3,21.114],[453.76768,2385e3,21.1132],[453.77545,408e4,21.1131],[470.25305,486e3,21.0174],[470.43949,105e5,21.0164],[470.88594,978e4,21.0139],[471.0065,409e4,21.0132],[488.4917,2905e3,21.1132],[488.50971,51e4,21.1131],[495.53905,807e3,21.114],[495.70335,53e5,21.1132],[495.7122,1705e3,21.1131],[500.51587,3059e3,21.1132],[500.53467,765e3,21.1131],[503.13484,938e4,21.0187],[503.15087,49e4,21.0186],[503.60016,104e4,21.0164],[503.75927,1582e3,21.0156],[503.77512,3996e4,21.0155],[507.40459,42e4,21.0187],[507.42007,71e5,21.0186],[507.65971,858e3,21.0174],[507.87693,43e4,21.0164],[508.0383,2373e4,21.0156],[508.39773,375e3,21.0139],[511.36724,2601e3,20.8055],[511.65032,1295e4,20.8042],[511.70246,48e4,20.8039],[512.05059,1041e3,21.114],[512.22565,98e5,21.1132],[512.23613,315e4,21.1131],[514.49384,2303e4,21.1132],[514.51351,3905e3,21.1131],[515.1961,855e4,21.0186],[515.44271,387e4,21.0174],[515.66672,755e3,21.0164],[515.89018,336e4,21.114],[516.34847,408e3,21.0132],[519.13223,2598e3,21.114],[519.31251,4575e3,21.1132],[519.3224,79e5,21.1131],[520.38962,1617e4,21.0187],[520.88648,715e4,21.0164],[521.05672,3066e3,21.0156],[521.43389,1317e3,21.0139],[532.6396,1647e3,20.7087],[533.0672,347e4,21.0186],[533.07775,265e5,20.7068],[533.33083,141e4,21.0174],[533.571,26e4,21.0164],[534.10938,2322e4,20.7023],[534.32834,976e4,20.7014],[535.5164,2345e3,21.0187],[535.53394,59e4,21.0186],[536.04271,945e3,21.0164],[536.22334,483e3,21.0156],[536.62169,261e3,21.0139],[537.4975,1932e3,21.0174],[538.32457,54e4,21.0139],[540.05616,9e5,18.966],[541.2649,1505e3,21.0164],[541.85584,1134e3,21.0139],[542.0155,433e3,21.0132],[543.36513,849e3,20.6628],[544.85091,465e3,20.6566],[556.24416,715e3,20.8042],[556.27662,6916e3,20.804],[556.30531,51e4,20.8039],[565.25664,2211e3,20.8055],[565.60258,183e4,20.8042],[565.66588,1475e4,20.8039],[566.25489,1593e3,20.5706],[568.98163,705e4,20.5601],[571.88798,127e4,20.8042],[571.92248,6888e3,20.804],[571.953,98e4,20.8039],[574.82985,2338e4,20.7114],[574.86446,1265e3,20.7113],[576.05885,253e4,20.7068],[576.40525,385e4,20.7055],[576.44188,1008e5,20.7054],[577.03067,1212e3,21.114],[580.409,1316e3,20.7114],[580.44496,18e6,20.7113],[581.14066,2211e3,20.7087],[581.66219,865e3,20.7068],[582.01558,602e5,20.7055],[582.89063,861e3,20.7023],[585.24878,615e5,18.966],[586.84165,2478e3,20.8055],[587.2145,3345e3,20.8042],[587.28275,3035e4,20.8039],[588.1895,345e5,18.7264],[589.83287,603e3,20.8055],[590.20944,3675e3,20.8042],[590.24623,5992e4,20.804],[590.27835,625e4,20.8039],[590.64294,2255e4,20.7113],[591.3633,957e4,20.7087],[591.89068,891e4,20.8055],[591.9029,2075e3,20.7068],[593.44522,108e4,20.7014],[593.93154,6e5,20.6628],[594.4834,565e5,18.7041],[596.16228,684e4,20.8055],[596.5471,3205e4,20.8042],[596.6179,121e4,20.8039],[597.46273,4242e4,20.7114],[597.55343,1053e4,18.6934],[598.23753,297e3,20.7087],[598.79074,1815e4,20.7068],[599.16477,826e4,20.7055],[600.09275,342e4,20.7023],[602.99968,1683e4,18.7264],[604.2013,468e3,21.0174],[604.61348,678e3,20.6628],[606.45359,164e4,20.6566],[607.43376,603e5,18.7114],[609.6163,905e5,18.7041],[611.80187,1827e3,20.6628],[612.84498,201e4,18.6934],[614.2508,82e5,20.7113],[614.30627,141e6,18.6368],[615.02985,399e4,20.7087],[615.6138,86e4,20.7068],[616.35937,438e5,18.7264],[617.28156,427e3,20.7014],[617.48829,5264e3,20.7114],[617.52842,15e5,20.7113],[618.2146,186e5,20.5601],[618.31575,354e3,20.7087],[618.90649,294e4,20.7068],[619.30663,126e4,20.7055],[620.2974,732e3,20.7023],[620.57775,456e4,20.7087],[621.38758,855e4,20.5706],[621.72812,1911e4,18.6127],[622.5735,1857e3,20.7023],[624.67294,3985e3,20.5601],[625.87884,303e4,20.7068],[626.64952,747e5,18.6934],[627.30141,2982e3,20.7023],[627.60327,125e4,20.7014],[629.37447,1917e3,20.6628],[630.47893,208e5,18.6368],[631.36855,34e5,20.6566],[632.81646,1017e4,20.6628],[633.08894,438e4,20.5706],[633.44276,805e5,18.5758],[635.18532,1035e3,20.6628],[636.49963,8e5,20.5601],[638.29914,963e5,18.6127],[640.1076,417e4,20.6628],[640.2248,3604e5,18.5551],[640.97469,423e4,20.5706],[642.17044,21e5,20.6566],[644.47118,58e5,20.5601],[650.65277,15e7,18.5758],[653.28824,324e5,18.6127],[659.89528,696e5,18.7264],[660.29007,1428e3,20.5706],[664.00095,310500,20.5601],[664.08,11400,20.5706],[665.20925,29e4,18.7114],[666.6892,1071e3,20.5706],[667.82766,1165e5,18.7041],[671.7043,651e5,18.6934],[672.11342,154500,20.5706],[673.8032,375e4,20.8055],[675.95821,8e5,20.5601],[692.94672,87e6,18.6368],[702.405,567e4,18.6127],[703.24128,798e5,18.3816],[705.12922,714e4,20.1395],[705.91079,373e5,20.1375],[706.4762,17e4,20.1361],[711.23075,1884e3,20.7087],[713.854,66e4,20.7023],[717.3938,1435e4,18.5758],[724.51665,303e5,18.3816],[730.48422,765e3,20.6628],[743.88981,741e4,18.3816],[747.24383,888e4,20.0404],[748.88712,1155e5,20.0367],[753.57739,918e5,20.0264],[754.40439,387e5,20.0246],[772.46233,474e3,20.5706]],sodium:[[384.8,168e6,36.3167],[386.55,464e6,36.2591],[387.29,72e6,36.2529],[388.18,163e7,36.2456],[388.57,248e6,36.3286],[390.04,462e6,36.3167],[391.79,528e6,36.2591],[392.56,27e7,36.2529],[393.06,1e8,36.3286],[394.26,84e6,36.2392],[398.03,3e7,36.2529],[399.77,32e6,36.2392],[400.88,3e7,36.2306],[413.082,34480,5.105],[413.082,310200,5.105],[413.584,40400,5.1013],[413.584,363600,5.1013],[413.774,68e3,5.1],[414.184,44800,5.097],[414.184,403200,5.097],[414.403,80200,5.0954],[414.893,56800,5.0919],[414.893,511200,5.0919],[415.175,95600,5.09],[415.74,68400,5.0858],[415.74,618e3,5.0858],[416.057,115200,5.0835],[416.767,83600,5.0785],[416.767,75e4,5.0785],[417.156,140600,5.0757],[417.67,28e7,36.2591],[418.022,103200,5.0695],[418.022,93e4,5.0695],[418.509,174e3,5.0661],[418.55,294e6,36.2529],[419.598,130800,5.0584],[419.598,1176e3,5.0584],[420.216,218e3,5.0541],[420.49,1e8,36.2392],[421.613,168e3,5.0444],[421.613,1512e3,5.0444],[422.381,28e4,5.0389],[424.2082,221600,5.0263],[424.2082,1992e3,5.0263],[425.252,368e3,5.0192],[425.38,3e7,36.2529],[427.3642,1564e3,5.0026],[427.39,64e6,36.2392],[427.6787,312e3,5.0026],[427.6787,2814e3,5.0026],[428.67,56e6,36.2306],[429.1006,494e3,4.993],[432.4615,456e3,4.9706],[432.4615,4104e3,4.9706],[434.1489,652e3,4.9573],[434.4736,13e5,4.9573],[439.0029,3932e3,4.9257],[439.334,702e4,4.9257],[439.334,78e4,4.9257],[441.9885,564e3,4.9067],[442.3246,1122e3,4.9067],[443.23,84e6,35.4967],[449.4177,492e4,4.8603],[449.7658,876e4,4.8603],[449.7658,976e3,4.8603],[454.1633,752e3,4.8315],[454.5186,15e5,4.8315],[466.48107,832e4,4.7594],[466.85595,1656e3,4.7594],[466.85595,1494e4,4.7594],[474.7941,1238e3,4.7129],[475.18218,246e4,4.7129],[497.85414,1636e4,4.592],[498.28134,2928e4,4.592],[507.12,246e6,35.4967],[514.88381,228e4,4.5096],[515.34024,454e4,4.5096],[516.25,9e7,35.4967],[525.64,12e6,35.4967],[562.1,84e6,35.4967],[568.26333,404e5,4.2835],[568.81934,808e4,4.2835],[568.82046,726e5,4.2835],[574.42,24e6,35.4967],[588.995095,2464e5,2.1044],[589.592424,1228e5,2.1023],[615.42253,5e6,4.1164],[616.0747,996e4,4.1164],[737.323,216800,4.8724],[737.349,106e3,4.8724]],argon:[[383.4679,75e4,15.0604],[394.7505,28e4,14.6883],[394.8979,138e4,14.6871],[404.4418,165e4,14.6883],[415.859,7e6,14.5289],[416.418,87e4,14.5249],[418.1884,168e4,14.6871],[419.0713,14e5,14.5061],[419.1029,162e4,14.6807],[419.8317,257e4,14.5759],[420.0674,679e4,14.4991],[425.1185,333e3,14.464],[425.9362,398e4,14.7381],[426.6286,155e4,14.5289],[427.2169,24e5,14.5249],[430.0101,1885e3,14.5061],[433.3561,285e4,14.6883],[433.5338,117e4,14.6871],[434.5168,9e5,14.6807],[451.0733,118e4,14.5759],[452.2323,27e4,14.464],[459.6097,285e3,14.5249],[462.8441,191500,14.5061],[470.2316,327e3,14.464],[515.1391,239e4,15.3132],[516.2285,57e5,15.3081],[518.7746,69e5,15.2963],[522.1271,792e4,15.4497],[542.1352,3e6,15.362],[545.1652,235e4,15.1806],[549.5874,1521e4,15.331],[550.6113,252e4,15.346],[555.8702,71e5,15.1368],[557.2541,462e4,15.3192],[560.6733,66e5,15.1177],[565.0704,32e5,15.1005],[573.952,435e4,15.3127],[583.4263,26e5,15.2963],[586.031,855e3,15.0221],[588.2624,123e4,15.0141],[588.8584,645e4,15.1806],[591.2085,315e4,15.0036],[592.8813,33e5,15.1855],[594.2669,9e5,15.1806],[598.7302,84e4,15.1459],[599.8999,7e5,15.161],[602.515,27e5,15.3594],[603.2127,2214e4,15.1305],[604.3223,1029e4,15.1459],[605.2723,95e4,14.9549],[605.9372,21e5,14.9526],[609.8803,156e4,15.1855],[610.5635,605e4,15.3127],[614.5441,532e4,15.3192],[617.0174,25e5,15.1806],[617.3096,335e4,15.161],[621.2503,273e4,15.1669],[621.5938,285e4,15.2963],[629.6872,45e5,15.2963],[630.7657,3e6,15.1368],[636.9575,126e4,15.1177],[638.4717,1263e3,14.8484],[641.6307,58e5,14.8388],[653.8112,77e4,14.9715],[660.4853,91e3,14.9715],[666.0676,78e4,15.0141],[666.4051,75e4,14.9549],[667.7282,236e3,13.4799],[675.2834,965e4,14.7425],[675.6163,18e5,15.1368],[676.6612,12e5,15.0036],[687.1289,834e4,14.7109],[687.9582,9e5,14.9549],[688.8174,125e4,14.9526],[693.7664,308e4,14.6936],[695.1478,11e5,14.9549],[696.025,12e5,14.9526],[696.5431,192e5,13.3279],[703.0251,1335e4,14.8388],[706.7218,19e6,13.3022],[706.8736,6e6,14.8484],[710.7478,225e4,14.8388],[712.582,18e5,15.0221],[714.7042,189e4,13.2826],[715.8839,21e5,15.0141],[720.698,744e4,15.0221],[726.5172,51e4,14.8592],[727.0664,77e4,14.7805],[727.2936,549e4,13.3279],[731.1716,51e5,14.8484],[731.6005,288e4,15.0221],[735.0814,12e5,15.0141],[735.3293,672e4,14.7805],[737.2118,171e5,14.7571],[738.398,425e5,13.3022],[739.298,216e4,14.8484],[741.2337,195e4,14.9549],[742.5294,217e4,14.9715],[743.5368,45e5,14.8388],[743.6297,135e4,14.7425],[750.3869,45e6,13.4799],[751.4652,4e7,13.273],[763.5106,1225e5,13.1718],[772.3761,156e5,13.1531],[772.4207,351e5,13.3279]],krypton:[[427.396943,995e4,12.8153],[428.296734,531e3,12.8092],[428.648687,3e6,13.454],[430.048652,1599e3,13.4446],[431.85524,2565e3,12.7854],[431.95795,875e4,12.7847],[435.135969,222e4,13.4922],[436.264157,1284e3,12.7564],[437.612159,374e4,12.8648],[439.996634,63e5,13.4607],[441.03681,84e4,13.454],[442.519007,1815e3,13.4446],[445.391749,1985e3,12.8153],[446.369,3543e3,12.8092],[450.235427,39e5,12.7854],[455.02985,21900,12.7564],[551.66665,46200,12.8092],[556.222534,55e4,12.1437],[557.028944,294e4,12.1404],[558.038729,6e5,12.8648],[564.956177,387e3,12.7564],[567.24509,45e3,12.1004],[570.75129,129500,12.8153],[572.356,24900,12.8092],[578.38938,2058e3,13.5861],[578.729,15500,12.7854],[578.824,1449e3,13.5861],[580.554126,45e5,13.5797],[581.08,525e3,13.4365],[582.707,39e5,13.4306],[586.675017,591e3,12.7564],[587.091599,355e4,12.1437],[587.990035,165e3,12.1404],[599.38502,15e4,12.1004],[601.21555,1195e4,13.3651],[605.612628,195e5,13.3501],[607.52551,1211e4,13.5861],[608.286117,71e5,13.3411],[622.273337,477e4,13.4365],[623.635161,745e4,13.4306],[624.140471,1495e3,13.4306],[634.668195,434e4,13.396],[635.191539,1414e3,13.396],[636.83212,435e3,13.3894],[637.359016,46e5,13.3894],[641.567923,427e4,13.375],[642.1027,2653e4,13.375],[644.879938,154e4,13.3651],[645.419,385e3,13.3651],[645.628888,5985e4,13.3629],[648.806917,267e4,13.4365],[650.490424,99e4,13.3501],[650.83693,525e3,13.4306],[653.65517,288e4,13.4224],[655.569463,96e4,13.4365],[657.64204,395e4,13.4306],[665.223475,109e5,13.3894],[669.92296,1176e4,13.396],[672.3344,655e3,13.3894],[674.00985,335e4,13.3651],[679.54104,393e3,13.3501],[681.310882,1285e4,13.3651],[682.90888,177e4,13.3411],[684.64003,99e4,13.1139],[686.96308,666e4,13.3501],[690.46787,795e4,13.0986],[700.079,123e4,13.4365],[705.727,48e5,13.4224],[714.345,385e3,13.0386],[715.221,996e3,13.0365],[722.4103,149e5,13.0192],[728.7262,891e4,13.0044],[735.996,234e4,13.3501],[742.554,765e4,13.1139],[748.6862,1445e4,13.0986],[749.415,305e4,13.0986],[758.74136,431e5,11.666],[760.15457,1366e5,11.5458],[768.52459,4064e4,12.2565],[769.45401,1281e4,11.5261],[774.137,322e4,13.0442],[774.6828,118e5,12.9035],[774.916,644e3,13.0442],[776.843,515e3,13.0386],[777.628,44e5,13.0386]],xenon:[[395.0924,28e5,11.4525],[396.75411,371e4,11.4394],[397.4417,7e5,11.434],[419.3528,154e4,11.271],[420.3695,55e4,11.2639],[450.0978,438e4,11.0691],[452.46805,23e5,11.0547],[458.27472,13e5,11.1412],[461.18882,9e4,11.0029],[462.42756,121e5,10.9957],[467.12258,1743e4,10.9688],[469.097,84e4,10.9576],[469.70208,368e4,10.9542],[473.41518,69e5,11.0547],[479.2619,36e4,10.9016],[480.7019,429e4,11.015],[482.9708,18e5,11.0029],[484.32934,351e4,10.9957],[491.6507,48e5,10.9576],[492.3152,487e4,10.9542],[502.82794,48e4,10.9016],[520.607,55e4,11.961],[530.637,8e5,11.916],[545.645,132e3,11.8518],[546.0037,125e4,11.8503],[553.278,9e5,11.961],[555.728,3e5,11.916],[564.619,135e4,11.916],[570.687,21e4,11.7521],[571.5716,175e4,11.7487],[572.214,108e4,11.8518],[572.61,45e4,11.8503],[579.226,45e4,11.961],[582.052,2e6,11.8503],[591.665,65e4,11.916],[599.8115,174e4,11.7521],[600.7909,8e5,11.7487],[600.978,63e4,11.8518],[601.41,65e3,11.8503],[610.388,36e4,11.8518],[610.837,9e5,11.8503],[611.1951,35e5,11.7487],[618.91,39e4,11.5829],[619.826,33e5,11.5799],[631.497,93e4,11.7521],[632.581,105e3,11.7487],[643.0155,15e5,11.7487],[646.15,36e4,11.8518],[648.7765,47e5,11.4907],[653.3159,309e4,11.5829],[654.336,135e4,11.5799],[666.6965,55e5,11.5799],[681.564,63e4,11.7521],[686.6838,46e5,11.4907],[688.2155,4081e4,11.4867],[691.082,222e4,11.5829],[692.222,15e4,11.5799],[697.6182,1337e4,11.4975],[701.902,245e4,11.4867],[703.553,12e5,11.5829],[704.737,32e5,11.5799],[711.9598,7551e4,11.4617],[728.5301,2045e4,11.4907],[731.687,75e4,11.2742],[738.6003,625e4,11.2583],[739.3793,3423e4,11.4975],[742.405,43e5,11.4907],[744.194,329e4,11.4867],[751.496,63e4,11.5829],[764.2024,63e6,11.0691]],mercury:[[404.6565,621e5,7.7305],[407.7837,4e6,7.9261],[410.8054,22e5,9.7209],[433.92232,145e5,9.5601],[434.74945,42e6,9.5547],[435.8335,168e6,7.7305],[491.6068,58e5,9.225],[502.56,80100,9.17],[546.075,147e6,7.7305],[576.961,118e6,8.852],[578.969,18e5,8.8445],[579.067,155e6,8.8442],[607.264,18e4,9.7716],[623.436,9e5,9.9143],[671.634,72e4,9.7716],[690.746,8e6,9.5249],[772.8825,18e5,9.5298]]};var Nr={start:360,step:1,x:[1299e-7,145847e-9,.0001638021,.0001840037,.0002066902,2321e-7,260728e-9,293075e-9,329388e-9,369914e-9,4149e-7,.0004641587,518986e-9,581854e-9,.0006552347,7416e-7,.0008450296,.0009645268,.001094949,.001231154,.001368,.00150205,.001642328,.001802382,.001995757,.002236,.002535385,.002892603,.003300829,.003753236,.004243,.004762389,.005330048,.005978712,.006741117,.00765,.008751373,.01002888,.0114217,.01286901,.01431,.01570443,.01714744,.01878122,.02074801,.02319,.02620736,.02978248,.03388092,.03846824,.04351,.0489956,.0550226,.0617188,.069212,.07763,.08695811,.09717672,.1084063,.1207672,.13438,.1493582,.1653957,.1819831,.198611,.21477,.2301868,.2448797,.2587773,.2718079,.2839,.2949438,.3048965,.3137873,.3216454,.3285,.3343513,.3392101,.3431213,.3461296,.34828,.3495999,.3501474,.350013,.349287,.34806,.3463733,.3442624,.3418088,.3390941,.3362,.3331977,.3300411,.3266357,.3228868,.3187,.3140251,.308884,.3032904,.2972579,.2908,.2839701,.2767214,.2689178,.2604227,.2511,.2408475,.2298512,.2184072,.2068115,.19536,.1842136,.1733273,.1626881,.1522833,.1421,.1321786,.1225696,.1132752,.1042979,.09564,.08729955,.07930804,.07171776,.06458099,.05795001,.05186211,.04628152,.04115088,.03641283,.03201,.0279172,.0241444,.020687,.0175404,.0147,.01216179,.00991996,.00796724,.006296346,.0049,.003777173,.00294532,.00242488,.002236293,.0024,.00292552,.00383656,.00517484,.00698208,.0093,.01214949,.01553588,.01947752,.02399277,.0291,.03481485,.04112016,.04798504,.05537861,.06327,.07163501,.08046224,.08973996,.09945645,.1096,.1201674,.1311145,.1423679,.1538542,.1655,.1772571,.18914,.2011694,.2133658,.2257499,.2383209,.2510668,.2639922,.2771017,.2904,.3038912,.3175726,.3314384,.3454828,.3597,.3740839,.3886396,.4033784,.4183115,.4334499,.4487953,.464336,.480064,.4959713,.5120501,.5282959,.5446916,.5612094,.5778215,.5945,.6112209,.6279758,.6447602,.6615697,.6784,.6952392,.7120586,.7288284,.7455188,.7621,.7785432,.7948256,.8109264,.8268248,.8425,.8579325,.8730816,.8878944,.9023181,.9163,.9297995,.9427984,.9552776,.9672179,.9786,.9893856,.9995488,1.0090892,1.0180064,1.0263,1.0339827,1.040986,1.047188,1.0524667,1.0567,1.0597944,1.0617992,1.0628068,1.0629096,1.0622,1.0607352,1.0584436,1.0552244,1.0509768,1.0456,1.0390369,1.0313608,1.0226662,1.0130477,1.0026,.9913675,.9793314,.9664916,.9528479,.9384,.923194,.907244,.890502,.87292,.8544499,.835084,.814946,.794186,.772954,.7514,.7295836,.7075888,.6856022,.6638104,.6424,.6215149,.6011138,.5811052,.5613977,.5419,.5225995,.5035464,.4847436,.4661939,.4479,.4298613,.412098,.394644,.3775333,.3608,.3444563,.3285168,.3130192,.2980011,.2835,.2695448,.2561184,.2431896,.2307272,.2187,.2070971,.1959232,.1851708,.1748323,.1649,.1553667,.14623,.13749,.1291467,.1212,.1136397,.106465,.09969044,.09333061,.0874,.08190096,.07680428,.07207712,.06768664,.0636,.05980685,.05628216,.05297104,.04981861,.04677,.04378405,.04087536,.03807264,.03540461,.0329,.03056419,.02838056,.02634484,.02445275,.0227,.02108429,.01959988,.01823732,.01698717,.01584,.01479064,.01383132,.01294868,.0121292,.01135916,.01062935,.009938846,.009288422,.008678854,.008110916,.007582388,.007088746,.006627313,.006195408,.005790346,.005409826,.005052583,.004717512,.004403507,.004109457,.003833913,.003575748,.003334342,.003109075,.002899327,.002704348,.00252302,.002354168,.002196616,.00204919,.00191096,.001781438,.00166011,.001546459,.001439971,.001340042,.001246275,.001158471,.00107643,.0009999493,.0009287358,.0008624332,.0008007503,743396e-9,.0006900786,.0006405156,.0005945021,.0005518646,512429e-9,.0004760213,.0004424536,.0004115117,.0003829814,.0003566491,.0003323011,.0003097586,.0002888871,.0002695394,.0002515682,.0002348261,219171e-9,.0002045258,.0001908405,.0001780654,.0001661505,.0001550236,.0001446219,.0001349098,125852e-9,117413e-9,.0001095515,.0001022245,9539445e-11,890239e-10,8307527e-11,7751269e-11,7231304e-11,6745778e-11,6292844e-11,5870652e-11,5477028e-11,5109918e-11,4767654e-11,4448567e-11,4150994e-11,3873324e-11,3614203e-11,3372352e-11,3146487e-11,2935326e-11,2737573e-11,2552433e-11,2379376e-11,221787e-10,2067383e-11,1927226e-11,179664e-10,1674991e-11,1561648e-11,1455977e-11,1357387e-11,1265436e-11,1179723e-11,1099844e-11,1025398e-11,9559646e-12,8912044e-12,8308358e-12,7745769e-12,7221456e-12,6732475e-12,6276423e-12,5851304e-12,5455118e-12,5085868e-12,4741466e-12,4420236e-12,4120783e-12,3841716e-12,3581652e-12,3339127e-12,3112949e-12,2902121e-12,2705645e-12,2522525e-12,2351726e-12,2192415e-12,2043902e-12,1905497e-12,1776509e-12,1656215e-12,1544022e-12,143944e-11,1341977e-12,1251141e-12],y:[3917e-9,4393581e-12,4929604e-12,5532136e-12,6208245e-12,6965e-9,7813219e-12,8767336e-12,9839844e-12,1104323e-11,1239e-8,1388641e-11,1555728e-11,1744296e-11,1958375e-11,2202e-8,2483965e-11,2804126e-11,3153104e-11,3521521e-11,39e-6,428264e-10,469146e-10,515896e-10,571764e-10,64e-6,7234421e-11,8221224e-11,9350816e-11,.0001061361,12e-5,134984e-9,151492e-9,170208e-9,191816e-9,217e-6,.0002469067,28124e-8,31852e-8,.0003572667,396e-6,.0004337147,473024e-9,517876e-9,.0005722187,64e-5,72456e-8,8255e-7,94116e-8,.00106988,.00121,.001362091,.001530752,.001720368,.001935323,.00218,.0024548,.002764,.0031178,.0035264,.004,.00454624,.00515932,.00582928,.00654616,.0073,.008086507,.00890872,.00976768,.01066443,.0116,.01257317,.01358272,.01462968,.01571509,.01684,.01800736,.01921448,.02045392,.02171824,.023,.02429461,.02561024,.02695857,.02835125,.0298,.03131083,.03288368,.03452112,.03622571,.038,.03984667,.041768,.043766,.04584267,.048,.05024368,.05257304,.05498056,.05745872,.06,.06260197,.06527752,.06804208,.07091109,.0739,.077016,.0802664,.0836668,.0872328,.09098,.09491755,.09904584,.1033674,.1078846,.1126,.117532,.1226744,.1279928,.1334528,.13902,.1446764,.1504693,.1564619,.1627177,.1693,.1762431,.1835581,.1912735,.199418,.20802,.2171199,.2267345,.2368571,.2474812,.2586,.2701849,.2822939,.2950505,.308578,.323,.3384021,.3546858,.3716986,.3892875,.4073,.4256299,.4443096,.4633944,.4829395,.503,.5235693,.544512,.56569,.5869653,.6082,.6293456,.6503068,.6708752,.6908424,.71,.7281852,.7454636,.7619694,.7778368,.7932,.8081104,.8224962,.8363068,.8494916,.862,.8738108,.8849624,.8954936,.9054432,.9148501,.9237348,.9320924,.9399226,.9472252,.954,.9602561,.9660074,.9712606,.9760225,.9803,.9840924,.9874182,.9903128,.9928116,.9949501,.9967108,.9980983,.999112,.9997482,1,.9998567,.9993046,.9983255,.9968987,.995,.9926005,.9897426,.9864444,.9827241,.9786,.9740837,.9691712,.9638568,.9581349,.952,.9454504,.9384992,.9311628,.9234576,.9154,.9070064,.8982772,.8892048,.8797816,.87,.8598613,.849392,.838622,.8275813,.8163,.8047947,.793082,.781192,.7691547,.757,.7447541,.7324224,.7200036,.7074965,.6949,.6822192,.6694716,.6566744,.6438448,.631,.6181555,.6053144,.5924756,.5796379,.5668,.5539611,.5411372,.5283528,.5156323,.503,.4904688,.4780304,.4656776,.4534032,.4412,.42908,.417036,.405032,.393032,.381,.3689184,.3568272,.3447768,.3328176,.321,.3093381,.2978504,.2865936,.2756245,.265,.2547632,.2448896,.2353344,.2260528,.217,.2081616,.1995488,.1911552,.1829744,.175,.1672235,.1596464,.1522776,.1451259,.1382,.1315003,.1250248,.1187792,.1127691,.107,.1014762,.09618864,.09112296,.08626485,.0816,.07712064,.07282552,.06871008,.06476976,.061,.05739621,.05395504,.05067376,.04754965,.04458,.04175872,.03908496,.03656384,.03420048,.032,.02996261,.02807664,.02632936,.02470805,.0232,.02180077,.02050112,.01928108,.01812069,.017,.01590379,.01483718,.01381068,.01283478,.01192,.01106831,.01027339,.009533311,.008846157,.00821,.007623781,.007085424,.006591476,.006138485,.005723,.005343059,.004995796,.004676404,.004380075,.004102,.003838453,.003589099,.003354219,.003134093,.002929,.002738139,.002559876,.002393244,.002237275,.002091,.001953587,.00182458,.00170358,.001590187,.001484,.001384496,.001291268,.001204092,.001122744,.001047,.0009765896,.0009111088,.0008501332,.0007932384,74e-5,.0006900827,64331e-8,599496e-9,.0005584547,52e-5,.0004839136,.0004500528,.0004183452,.0003887184,3611e-7,.0003353835,.0003114404,.0002891656,.0002684539,2492e-7,.0002313019,.0002146856,.0001992884,.0001850475,1719e-7,.0001597781,.0001486044,.0001383016,.0001287925,12e-5,.0001118595,.0001043224,973356e-10,9084587e-11,848e-7,7914667e-11,73858e-9,68916e-9,6430267e-11,6e-5,5598187e-11,522256e-10,487184e-10,4544747e-11,424e-7,3956104e-11,3691512e-11,3444868e-11,3214816e-11,3e-5,2799125e-11,2611356e-11,2436024e-11,2272461e-11,212e-7,1977855e-11,1845285e-11,1721687e-11,1606459e-11,1499e-8,1398728e-11,1305155e-11,1217818e-11,1136254e-11,106e-7,9885877e-12,9217304e-12,8592362e-12,8009133e-12,74657e-10,6959567e-12,6487995e-12,6048699e-12,5639396e-12,52578e-10,4901771e-12,456972e-11,4260194e-12,3971739e-12,37029e-10,3452163e-12,3218302e-12,30003e-10,2797139e-12,26078e-10,243122e-11,2266531e-12,2113013e-12,1969943e-12,18366e-10,171223e-11,1596228e-12,148809e-11,1387314e-12,12934e-10,120582e-11,1124143e-12,1048009e-12,977058e-12,91093e-11,849251e-12,791721e-12,73809e-11,68811e-11,64153e-11,59809e-11,557575e-12,519808e-12,484612e-12,45181e-11],z:[6061e-7,.0006808792,.0007651456,.0008600124,.0009665928,.001086,.001220586,.001372729,.001543579,.001734286,.001946,.002177777,.002435809,.002731953,.003078064,.003486,.003975227,.00454088,.00515832,.005802907,.006450001,.007083216,.007745488,.008501152,.009414544,.01054999,.0119658,.01365587,.01558805,.01773015,.02005001,.02251136,.02520288,.02827972,.03189704,.03621,.04143771,.04750372,.05411988,.06099803,.06785001,.07448632,.08136156,.08915364,.09854048,.1102,.1246133,.1417017,.1613035,.1832568,.2074,.2336921,.2626114,.2947746,.3307985,.3713,.4162091,.4654642,.5196948,.5795303,.6456,.7184838,.7967133,.8778459,.959439,1.0390501,1.1153673,1.1884971,1.2581233,1.3239296,1.3856,1.4426352,1.4948035,1.5421903,1.5848807,1.62296,1.6564048,1.6852959,1.7098745,1.7303821,1.74706,1.7600446,1.7696233,1.7762637,1.7804334,1.7826,1.7829682,1.7816998,1.7791982,1.7758671,1.77211,1.7682589,1.764039,1.7589438,1.7524663,1.7441,1.7335595,1.7208581,1.7059369,1.6887372,1.6692,1.6475287,1.6234127,1.5960223,1.564528,1.5281,1.4861114,1.4395215,1.3898799,1.3387362,1.28764,1.2374223,1.1878243,1.1387611,1.090148,1.0419,.9941976,.9473473,.9014531,.8566193,.8129501,.7705173,.7294448,.6899136,.6521049,.6162,.5823286,.5504162,.5203376,.4919673,.46518,.4399246,.4161836,.3938822,.3729459,.3533,.3348578,.3175521,.3013375,.2861686,.272,.2588171,.2464838,.2347718,.2234533,.2123,.2011692,.1901196,.1792254,.1685608,.1582,.1481383,.1383758,.1289942,.1200751,.1117,.1039048,.09666748,.08998272,.08384531,.07824999,.07320899,.06867816,.06456784,.06078835,.05725001,.05390435,.05074664,.04775276,.04489859,.04216,.03950728,.03693564,.03445836,.03208872,.02984,.02771181,.02569444,.02378716,.02198925,.0203,.01871805,.01724036,.01586364,.01458461,.0134,.01230723,.01130188,.01037792,.009529306,.008749999,.0080352,.0073816,.0067854,.0062428,.005749999,.0053036,.0048998,.0045342,.0042024,.0039,.0036232,.0033706,.0031414,.0029348,.002749999,.0025852,.0024386,.0023094,.0021968,.0021,.002017733,.0019482,.0018898,.001840933,.0018,.001766267,.0017378,.0017112,.001683067,.001650001,.001610133,.0015644,.0015136,.001458533,.0014,.001336667,.00127,.001205,.001146667,.0011,.0010688,.0010494,.0010356,.0010212,.001,96864e-8,92992e-8,88688e-8,84256e-8,8e-4,76096e-8,72368e-8,68592e-8,64544e-8,6e-4,.0005478667,4916e-7,4354e-7,.0003834667,34e-5,.0003072533,28316e-8,26544e-8,.0002518133,24e-5,.0002295467,22064e-8,21196e-8,.0002021867,19e-5,.0001742133,15564e-8,13596e-8,.0001168533,1e-4,8613333e-11,746e-7,65e-6,5693333e-11,4999999e-11,4416e-8,3948e-8,3572e-8,3264e-8,3e-5,2765333e-11,2556e-8,2364e-8,2181333e-11,2e-5,1813333e-11,162e-7,142e-7,1213333e-11,1e-5,7733333e-12,54e-7,32e-7,1333333e-12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};function Dr(n,e){let t=(e-n.start)/n.step;if(t<0||t>n.values.length-1)return 0;let i=Math.floor(t);if(i===n.values.length-1)return n.values[i];let s=t-i;return n.values[i]*(1-s)+n.values[i+1]*s}function Ur(n,{cmf:e=pi}={},t=[0,0,0]){let i=0,s=0,r=0;for(let o=0;o<e.x.length;o++){let a=e.start+o*e.step,c=Dr(n,a);i+=c*e.x[o],s+=c*e.y[o],r+=c*e.z[o]}return t[0]=i*e.step,t[1]=s*e.step,t[2]=r*e.step,t}function Ul(n,{illuminant:e=Kc,cmf:t=pi}={},i=[0,0,0]){let s=0,r=0,o=0,a=0;for(let c=0;c<t.x.length;c++){let l=t.start+c*t.step,h=Dr(e,l),f=Dr(n,l),u=h*f;s+=u*t.x[c],r+=u*t.y[c],o+=u*t.z[c],a+=h*t.y[c]}return i[0]=s/a,i[1]=r/a,i[2]=o/a,i}var xm=.014388;function vm(n,{start:e=360,step:t=5,end:i=830}={}){let s=Math.round((i-e)/t)+1,r=new Array(s),o=56e-8,a=Math.pow(o,-5)/(Math.exp(xm/(o*n))-1);for(let c=0;c<s;c++){let l=(e+c*t)*1e-9;r[c]=Math.pow(l,-5)/(Math.exp(xm/(l*n))-1)/a}return{start:e,step:t,values:r}}function ym(n,e,t){let i=new Array(n.values.length);for(let s=0;s<i.length;s++){let r=Dr(e,n.start+s*n.step);i[s]=n.values[s]*Math.exp(-r*t)}return{start:n.start,step:n.step,values:i}}function Mm(n,{start:e=360,step:t=1,end:i=830,fwhm:s=2}={}){let r=s/(2*Math.sqrt(2*Math.LN2)),o=1/(r*Math.sqrt(2*Math.PI)),a=Math.round((i-e)/t)+1,c=new Array(a).fill(0);for(let[l,h]of n)for(let f=0;f<a;f++){let u=(e+f*t-l)/r;c[f]+=h*o*Math.exp(-.5*u*u)}return{start:e,step:t,values:c}}function bm(n,{kT:e=.5,...t}={}){let i=n.map(([s,r,o])=>[s,r/s*Math.exp(-o/e)]);return Mm(i,t)}function Sm(n){return Mm([[588.995,2],[589.5924,1]],n)}var ru={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};var nM={deg:1,grad:360/400,rad:180/Math.PI,turn:360},wm=/^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/i;function Nt(n,e,t=1){if(n==="none")return NaN;if(n.endsWith("%")){let i=n.slice(0,-1);return wm.test(i)?parseFloat(i)/100*e:void 0}if(wm.test(n))return parseFloat(n)*t}function Ol(n){if(n==="none")return NaN;let e=n.match(/^([+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?)(deg|grad|rad|turn)?$/i);if(e)return parseFloat(e[1])*(e[2]?nM[e[2].toLowerCase()]:1)}function Em(n){if(n===void 0)return 1;let e=Nt(n,1);if(e!==void 0)return Number.isNaN(e)?NaN:Math.min(1,Math.max(0,e))}var Es=n=>n<0?0:n;function Tm(n){return parseInt(n,16)/255}function Am(n){let e=n.slice(1);if(!/^[0-9a-f]+$/i.test(e))return null;if(e.length===3||e.length===4){let t=[...e].map(i=>Tm(i+i));return{space:"srgb",coords:t.slice(0,3),alpha:e.length===4?t[3]:1}}if(e.length===6||e.length===8){let t=[];for(let i=0;i<e.length;i+=2)t.push(Tm(e.slice(i,i+2)));return{space:"srgb",coords:t.slice(0,3),alpha:e.length===8?t[3]:1}}return null}var iM={srgb:"srgb","srgb-linear":"srgb-linear","display-p3":"display-p3","a98-rgb":"a98-rgb","prophoto-rgb":"prophoto-rgb",rec2020:"rec2020",xyz:"xyz-d65","xyz-d65":"xyz-d65","xyz-d50":"xyz-d50",ictcp:"ictcp",jzazbz:"jzazbz","rec2100-pq":"rec2100-pq","rec2100-hlg":"rec2100-hlg"},Go={rgb:{space:"srgb",ch:[n=>Nt(n,1,1/255),n=>Nt(n,1,1/255),n=>Nt(n,1,1/255)]},hsl:{space:"hsl",ch:[Ol,n=>Es(Nt(n,1,1/100)),n=>Es(Nt(n,1,1/100))]},hwb:{space:"hwb",ch:[Ol,n=>Nt(n,1,1/100),n=>Nt(n,1,1/100)]},lab:{space:"lab",ch:[n=>Es(Nt(n,100)),n=>Nt(n,125),n=>Nt(n,125)]},lch:{space:"lch",ch:[n=>Es(Nt(n,100)),n=>Es(Nt(n,150)),Ol]},oklab:{space:"oklab",ch:[n=>Es(Nt(n,1)),n=>Nt(n,.4),n=>Nt(n,.4)]},oklch:{space:"oklch",ch:[n=>Es(Nt(n,1)),n=>Es(Nt(n,.4)),Ol]}};Go.rgba=Go.rgb;Go.hsla=Go.hsl;function Cm(n){if(typeof n!="string")return null;let e=n.trim().toLowerCase();if(e==="")return null;if(e[0]==="#")return Am(e);if(e==="transparent")return{space:"srgb",coords:[0,0,0],alpha:0};let t=ru[e];if(t)return Am(t);let i=e.match(/^([a-z][a-z0-9-]*)\(\s*(.*?)\s*\)$/s);if(!i)return null;let[,s,r]=i,o=r.replace(/,/g," ").split("/");if(o.length>2)return null;let a=o[0].trim().split(/\s+/).filter(Boolean),c=o.length===2?o[1].trim():void 0;if(c!==void 0&&(c===""||/\s/.test(c)))return null;if(s==="color"){let u=iM[a[0]];if(!u||(a=a.slice(1),a.length===4&&c===void 0&&(c=a.pop()),a.length!==3))return null;let d=a.map(v=>Nt(v,1)),g=Em(c);return d.some(v=>v===void 0)||g===void 0?null:{space:u,coords:d,alpha:g}}let l=Go[s];if(!l||(a.length===4&&c===void 0&&(c=a.pop()),a.length!==3))return null;let h=a.map((u,d)=>l.ch[d](u)),f=Em(c);return h.some(u=>u===void 0)||f===void 0?null:{space:l.space,coords:h,alpha:f}}function ti(n,e,t=[0,0,0]){let i=Cm(n);return i===null?null:$n(i.coords,i.space,e,t)}var Ys={cmf:Nr},Rm={start:360,step:1,end:830},zl={neon:"Ne I \u2014 the classic red-orange; 640.2 nm strongest",argon:"Ar I \u2014 pale lavender",mercury:"Hg I \u2014 blue-white; 435.8 / 546.1 nm",helium:"He I \u2014 peach; D3 587.6 nm",krypton:"Kr I \u2014 pale white-lavender",xenon:"Xe I \u2014 blue-violet",hydrogen:"H I \u2014 Balmer pink; H\u03B1 656.3 nm"};function ou(n){let e=Ur(n,Ys)[1];return{start:n.start,step:n.step,values:n.values.map(t=>t/e)}}function au(n,e){return ou(n==="sodium-lamp"?Sm():bm(Fl[n],{kT:e}))}function Pm(n){let e=Math.round(n)-Nr.start,t=[Nr.x[e],Nr.y[e],Nr.z[e]];return`rgb(${Rl($n(t.map(s=>s/Math.max(...t,1e-6)),"xyz-d65","srgb")).map(s=>Math.round(s*255)).join(",")})`}function Im(n,e=.5){if(n==="sodium-lamp")return[[588.995,1],[589.5924,.5]];let t=Fl[n].map(([s,r,o])=>[s,r/s*Math.exp(-o/e)]),i=Math.max(...t.map(s=>s[1]));return t.map(([s,r])=>[s,r/i])}function Bl(n){return Rl($n(n,"xyz-d65","srgb"))}function sM(n){let e=ou(vm(2700,Rm)),t=n.map(s=>{let r=Vo(ti(s,"srgb"),"srgb"),o={start:r.start,step:r.step,values:r.values.map(l=>-Math.log(Math.max(l,.001)))},a=ym(e,o,1),c=Ur(a,Ys);return{spd:a,xyz:c,naive:Bl(c)}}),i={...Rm,values:new Array(e.values.length).fill(0)};for(let s of t)s.spd.values.forEach((r,o)=>{i.values[o]+=r});return{panes:t,spd:ou(i)}}var kl={brick:ti("#7c4935","srgb"),mortar:ti("#8d857a","srgb"),asphalt:ti("#3a3c42","srgb"),asphaltWet:ti("#1c1e24","srgb"),door:ti("#2e5950","srgb"),concrete:ti("#6f6a62","srgb"),panel:ti("#16181d","srgb"),metal:ti("#2c3138","srgb")};function Lm(n){let e=null,t=n.map(r=>{let o;if(r.window){let c=sM(r.window);e=c.panes,o=c.spd}else o=au(r.gas);let a=Ur(o,Ys);return{...r,spd:o,xyz:a,naive:Bl(a)}}),i={};for(let[r,o]of Object.entries(kl)){let a=Vo(o,"srgb");i[r]=t.map(c=>Ul(a,{illuminant:c.spd,...Ys}))}let s=Ur(au("sodium-lamp"),Ys).map(r=>r*.035);return{lights:t,pairs:i,windowPanes:e,sky:s,skyNaive:Bl(s.map(r=>r*12))}}function Vl(n,e,t,i){let s=n.lights[e];s.gas=t,s.spd=au(t,i),s.xyz=Ur(s.spd,Ys),s.naive=Bl(s.xyz);for(let[r,o]of Object.entries(kl))n.pairs[r][e]=Ul(Vo(o,"srgb"),{illuminant:s.spd,...Ys});return s}function fn(n){let e=[];n.transferName!=="linear"&&e.push({k:"transfer",name:n.transferName,dir:"decode"}),e.push({k:"mat3",m:n.m.toXyz});let t=[{k:"mat3",m:n.m.fromXyz}];return n.transferName!=="linear"&&t.push({k:"transfer",name:n.transferName,dir:"encode"}),{toXyzOps:e,fromXyzOps:t}}var Dm={toXyzOps:[{k:"mat3",m:_t},{k:"cube3"},{k:"mat3",m:jt}],fromXyzOps:[{k:"mat3",m:Gn},{k:"cbrt3"},{k:"mat3",m:Pn}]},Bm=cn(Mt,Zt),zm=cn(Zt,Mt),Nm={m:[0,116,0,500,-500,0,0,200,-200],b:[-16,0,0]},Um={m:[1/116,1/500,0,1/116,0,0,1/116,0,-1/200],b:[16/116,16/116,16/116]},Fm={toXyzOps:[{k:"affine",m:Um.m,b:Um.b},{k:"labFInv3"},{k:"mulW",w:jn},{k:"mat3",m:zm}],fromXyzOps:[{k:"mat3",m:Bm},{k:"divW",w:jn},{k:"labF3"},{k:"affine",m:Nm.m,b:Nm.b}]};function cu(n){return{toXyzOps:[{k:"polarToRect"},...n.toXyzOps],fromXyzOps:[...n.fromXyzOps,{k:"rectToPolar"}]}}var Wi={srgb:fn($e),"srgb-linear":fn(el),"display-p3":fn(Io),"a98-rgb":fn(tl),"prophoto-rgb":fn(nl),rec2020:fn(Bi),oklab:Dm,oklch:cu(Dm),lab:Fm,lch:cu(Fm),"xyz-d65":{toXyzOps:[],fromXyzOps:[]},xyz:{toXyzOps:[],fromXyzOps:[]},"xyz-d50":{toXyzOps:[{k:"mat3",m:zm}],fromXyzOps:[{k:"mat3",m:Bm}]},bt709:fn(Pr),"dci-p3":fn(il),"aces2065-1":fn(sl),acescg:fn(rl),acescc:fn(ol),acescct:fn(al),"rec2100-pq":fn(cl),"rec2100-hlg":fn(ll),ictcp:{toXyzOps:[{k:"mat3",m:Xh},{k:"transfer",name:"pqabs",dir:"decode"},{k:"mat3",m:Wh}],fromXyzOps:[{k:"mat3",m:El},{k:"transfer",name:"pqabs",dir:"encode"},{k:"mat3",m:Ro}]}},Om=[xs,0,1-xs,1-vs,vs,0,0,0,1];Wi.jzazbz={toXyzOps:[{k:"jzInv"},{k:"mat3",m:qh},{k:"transfer",name:"jzpq",dir:"decode"},{k:"mat3",m:ei},{k:"mat3",m:st(Om)},{k:"mulW",w:[1/203,1/203,1/203]}],fromXyzOps:[{k:"mulW",w:[203,203,203]},{k:"clamp0"},{k:"mat3",m:Om},{k:"mat3",m:En},{k:"transfer",name:"jzpq",dir:"encode"},{k:"mat3",m:gi},{k:"jzFwd"}]};Wi.jzczhz=cu(Wi.jzazbz);var lu=(9.72-15)/17.52,hu=(Math.log2(65504)+9.72)/17.52,uu=.155251141552511,Fr=Math.pow(2,-16),fu=Math.pow(2,-15),du="0.017453292519943295",rM="57.29577951308232",pu=216/24389,Or=24389/27,mu=6/29;function Ts(n,e){let t=String(n);return e!=="js"&&!/[.e]/.test(t)&&(t+=".0"),t}function Gm(n){let e=[];for(let t of n){let i=e[e.length-1];t.k==="mat3"&&i&&i.k==="mat3"?e[e.length-1]={k:"mat3",m:Ct(t.m,i.m)}:e.push(t)}return e}function gu(n){let e=i=>Ts(i,n),t=e(.3333333333333333);return n==="js"?{srgb_decode:"const wp_srgb_decode = (v) => { const a = Math.abs(v); const m = a <= 0.04045 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4); return v < 0 ? -m : m; };",srgb_encode:`const wp_srgb_encode = (v) => { const a = Math.abs(v); const m = a <= 0.0031308 ? 12.92 * a : 1.055 * Math.pow(a, ${e(1/2.4)}) - 0.055; return v < 0 ? -m : m; };`,a98_decode:`const wp_a98_decode = (v) => { const m = Math.pow(Math.abs(v), ${e(Pi)}); return v < 0 ? -m : m; };`,a98_encode:`const wp_a98_encode = (v) => { const m = Math.pow(Math.abs(v), ${e(1/Pi)}); return v < 0 ? -m : m; };`,prophoto_decode:`const wp_prophoto_decode = (v) => { const a = Math.abs(v); const m = a <= ${e(16*Ii)} ? a / 16 : Math.pow(a, 1.8); return v < 0 ? -m : m; };`,prophoto_encode:`const wp_prophoto_encode = (v) => { const a = Math.abs(v); const m = a >= ${e(Ii)} ? Math.pow(a, ${e(1/1.8)}) : 16 * a; return v < 0 ? -m : m; };`,rec2020_decode:`const wp_rec2020_decode = (v) => { const a = Math.abs(v); const m = a < ${e(Li*4.5)} ? a / 4.5 : Math.pow((a + ${e(kt-1)}) / ${e(kt)}, ${e(1/.45)}); return v < 0 ? -m : m; };`,rec2020_encode:`const wp_rec2020_encode = (v) => { const a = Math.abs(v); const m = a < ${e(Li)} ? 4.5 * a : ${e(kt)} * Math.pow(a, 0.45) - ${e(kt-1)}; return v < 0 ? -m : m; };`,labF:`const wp_labF = (t) => t > ${e(pu)} ? Math.cbrt(t) : (t * ${e(Or)} + 16) / 116;`,labFInv:`const wp_labFInv = (t) => t > ${e(mu)} ? t * t * t : (116 * t - 16) / ${e(Or)};`,bt709_decode:`const wp_bt709_decode = (v) => { const a = Math.abs(v); const m = a < ${e(Di*4.5)} ? a / 4.5 : Math.pow((a + ${e(Vt-1)}) / ${e(Vt)}, ${e(1/.45)}); return v < 0 ? -m : m; };`,bt709_encode:`const wp_bt709_encode = (v) => { const a = Math.abs(v); const m = a < ${e(Di)} ? 4.5 * a : ${e(Vt)} * Math.pow(a, 0.45) - ${e(Vt-1)}; return v < 0 ? -m : m; };`,gamma26_decode:"const wp_gamma26_decode = (v) => { const m = Math.pow(Math.abs(v), 2.6); return v < 0 ? -m : m; };",gamma26_encode:`const wp_gamma26_encode = (v) => { const m = Math.pow(Math.abs(v), ${e(1/2.6)}); return v < 0 ? -m : m; };`,acescc_decode:`const wp_acescc_decode = (v) => { if (v < ${e(lu)}) return (Math.pow(2, v * 17.52 - 9.72) - ${e(Fr)}) * 2; if (v < ${e(hu)}) return Math.pow(2, v * 17.52 - 9.72); return 65504; };`,acescc_encode:`const wp_acescc_encode = (v) => { if (v <= 0) return ${e(Po)}; if (v < ${e(fu)}) return (Math.log2(${e(Fr)} + v * 0.5) + 9.72) / 17.52; return (Math.log2(v) + 9.72) / 17.52; };`,acescct_decode:`const wp_acescct_decode = (v) => { if (v > ${e(uu)}) return Math.pow(2, v * 17.52 - 9.72); return (v - ${e(Ui)}) / ${e(Ni)}; };`,acescct_encode:`const wp_acescct_encode = (v) => { if (v <= 0.0078125) return ${e(Ni)} * v + ${e(Ui)}; return (Math.log2(v) + 9.72) / 17.52; };`,pqabs_decode:`const wp_pqabs_decode = (v) => { if (v <= 0) return 0; const e = Math.pow(v, ${e(1/Jt)}); const num = Math.max(e - ${e(pt)}, 0); return 10000 * Math.pow(num / (${e(mt)} - ${e(gt)} * e), ${e(1/dt)}); };`,pqabs_encode:`const wp_pqabs_encode = (v) => { if (v <= 0) return 0; const y = Math.pow(v / 10000, ${e(dt)}); return Math.pow((${e(pt)} + ${e(mt)} * y) / (1 + ${e(gt)} * y), ${e(Jt)}); };`,jzpq_decode:`const wp_jzpq_decode = (v) => { if (v <= 0) return 0; const e = Math.pow(v, ${e(1/Ci)}); const num = Math.max(e - ${e(pt)}, 0); return 10000 * Math.pow(num / (${e(mt)} - ${e(gt)} * e), ${e(1/dt)}); };`,jzpq_encode:`const wp_jzpq_encode = (v) => { if (v <= 0) return 0; const y = Math.pow(v / 10000, ${e(dt)}); return Math.pow((${e(pt)} + ${e(mt)} * y) / (1 + ${e(gt)} * y), ${e(Ci)}); };`,rec2100pq_decode:`const wp_rec2100pq_decode = (v) => { if (v <= 0) return 0; const e = Math.pow(v, ${e(1/Jt)}); const num = Math.max(e - ${e(pt)}, 0); return 10000 * Math.pow(num / (${e(mt)} - ${e(gt)} * e), ${e(1/dt)}) / ${e(203)}; };`,rec2100pq_encode:`const wp_rec2100pq_encode = (v) => { const n = v * ${e(203)}; if (n <= 0) return 0; const y = Math.pow(n / 10000, ${e(dt)}); return Math.pow((${e(pt)} + ${e(mt)} * y) / (1 + ${e(gt)} * y), ${e(Jt)}); };`,rec2100hlg_decode:`const wp_rec2100hlg_decode = (v) => { if (v <= 0) return 0; if (v <= 0.5) return ((v * v) / 3) * ${e(Tn)}; return ((Math.exp((v - ${e(Oi)}) / ${e(kn)}) + ${e(Fi)}) / 12) * ${e(Tn)}; };`,rec2100hlg_encode:`const wp_rec2100hlg_encode = (v) => { if (v <= 0) return 0; const x = v / ${e(Tn)}; if (x <= ${e(1/12)}) return Math.sqrt(3 * x); return ${e(kn)} * Math.log(12 * x - ${e(Fi)}) + ${e(Oi)}; };`}:n==="glsl"?{srgb_decode:"float wp_srgb_decode(float v) { float a = abs(v); float m = a <= 0.04045 ? a / 12.92 : pow((a + 0.055) / 1.055, 2.4); return v < 0.0 ? -m : m; }",srgb_encode:`float wp_srgb_encode(float v) { float a = abs(v); float m = a <= 0.0031308 ? 12.92 * a : 1.055 * pow(a, ${e(1/2.4)}) - 0.055; return v < 0.0 ? -m : m; }`,a98_decode:`float wp_a98_decode(float v) { float m = pow(abs(v), ${e(Pi)}); return v < 0.0 ? -m : m; }`,a98_encode:`float wp_a98_encode(float v) { float m = pow(abs(v), ${e(1/Pi)}); return v < 0.0 ? -m : m; }`,prophoto_decode:`float wp_prophoto_decode(float v) { float a = abs(v); float m = a <= ${e(16*Ii)} ? a / 16.0 : pow(a, 1.8); return v < 0.0 ? -m : m; }`,prophoto_encode:`float wp_prophoto_encode(float v) { float a = abs(v); float m = a >= ${e(Ii)} ? pow(a, ${e(1/1.8)}) : 16.0 * a; return v < 0.0 ? -m : m; }`,rec2020_decode:`float wp_rec2020_decode(float v) { float a = abs(v); float m = a < ${e(Li*4.5)} ? a / 4.5 : pow((a + ${e(kt-1)}) / ${e(kt)}, ${e(1/.45)}); return v < 0.0 ? -m : m; }`,rec2020_encode:`float wp_rec2020_encode(float v) { float a = abs(v); float m = a < ${e(Li)} ? 4.5 * a : ${e(kt)} * pow(a, 0.45) - ${e(kt-1)}; return v < 0.0 ? -m : m; }`,labF:`float wp_labF(float t) { return t > ${e(pu)} ? pow(t, ${t}) : (t * ${e(Or)} + 16.0) / 116.0; }`,labFInv:`float wp_labFInv(float t) { return t > ${e(mu)} ? t * t * t : (116.0 * t - 16.0) / ${e(Or)}; }`,cbrt:`float wp_cbrt(float v) { return sign(v) * pow(abs(v), ${t}); }`,bt709_decode:`float wp_bt709_decode(float v) { float a = abs(v); float m = a < ${e(Di*4.5)} ? a / 4.5 : pow((a + ${e(Vt-1)}) / ${e(Vt)}, ${e(1/.45)}); return v < 0.0 ? -m : m; }`,bt709_encode:`float wp_bt709_encode(float v) { float a = abs(v); float m = a < ${e(Di)} ? 4.5 * a : ${e(Vt)} * pow(a, 0.45) - ${e(Vt-1)}; return v < 0.0 ? -m : m; }`,gamma26_decode:"float wp_gamma26_decode(float v) { float m = pow(abs(v), 2.6); return v < 0.0 ? -m : m; }",gamma26_encode:`float wp_gamma26_encode(float v) { float m = pow(abs(v), ${e(1/2.6)}); return v < 0.0 ? -m : m; }`,acescc_decode:`float wp_acescc_decode(float v) { if (v < ${e(lu)}) { return (exp2(v * 17.52 - 9.72) - ${e(Fr)}) * 2.0; } if (v < ${e(hu)}) { return exp2(v * 17.52 - 9.72); } return 65504.0; }`,acescc_encode:`float wp_acescc_encode(float v) { if (v <= 0.0) { return ${e(Po)}; } if (v < ${e(fu)}) { return (log2(${e(Fr)} + v * 0.5) + 9.72) / 17.52; } return (log2(v) + 9.72) / 17.52; }`,acescct_decode:`float wp_acescct_decode(float v) { if (v > ${e(uu)}) { return exp2(v * 17.52 - 9.72); } return (v - ${e(Ui)}) / ${e(Ni)}; }`,acescct_encode:`float wp_acescct_encode(float v) { if (v <= 0.0078125) { return ${e(Ni)} * v + ${e(Ui)}; } return (log2(v) + 9.72) / 17.52; }`,pqabs_decode:`float wp_pqabs_decode(float v) { if (v <= 0.0) { return 0.0; } float e = pow(v, ${e(1/Jt)}); return 10000.0 * pow(max(e - ${e(pt)}, 0.0) / (${e(mt)} - ${e(gt)} * e), ${e(1/dt)}); }`,pqabs_encode:`float wp_pqabs_encode(float v) { if (v <= 0.0) { return 0.0; } float y = pow(v / 10000.0, ${e(dt)}); return pow((${e(pt)} + ${e(mt)} * y) / (1.0 + ${e(gt)} * y), ${e(Jt)}); }`,jzpq_decode:`float wp_jzpq_decode(float v) { if (v <= 0.0) { return 0.0; } float e = pow(v, ${e(1/Ci)}); return 10000.0 * pow(max(e - ${e(pt)}, 0.0) / (${e(mt)} - ${e(gt)} * e), ${e(1/dt)}); }`,jzpq_encode:`float wp_jzpq_encode(float v) { if (v <= 0.0) { return 0.0; } float y = pow(v / 10000.0, ${e(dt)}); return pow((${e(pt)} + ${e(mt)} * y) / (1.0 + ${e(gt)} * y), ${e(Ci)}); }`,rec2100pq_decode:`float wp_rec2100pq_decode(float v) { if (v <= 0.0) { return 0.0; } float e = pow(v, ${e(1/Jt)}); return 10000.0 * pow(max(e - ${e(pt)}, 0.0) / (${e(mt)} - ${e(gt)} * e), ${e(1/dt)}) / ${e(203)}; }`,rec2100pq_encode:`float wp_rec2100pq_encode(float v) { float n = v * ${e(203)}; if (n <= 0.0) { return 0.0; } float y = pow(n / 10000.0, ${e(dt)}); return pow((${e(pt)} + ${e(mt)} * y) / (1.0 + ${e(gt)} * y), ${e(Jt)}); }`,rec2100hlg_decode:`float wp_rec2100hlg_decode(float v) { if (v <= 0.0) { return 0.0; } if (v <= 0.5) { return ((v * v) / 3.0) * ${e(Tn)}; } return ((exp((v - ${e(Oi)}) / ${e(kn)}) + ${e(Fi)}) / 12.0) * ${e(Tn)}; }`,rec2100hlg_encode:`float wp_rec2100hlg_encode(float v) { if (v <= 0.0) { return 0.0; } float x = v / ${e(Tn)}; if (x <= ${e(1/12)}) { return sqrt(3.0 * x); } return ${e(kn)} * log(12.0 * x - ${e(Fi)}) + ${e(Oi)}; }`}:{srgb_decode:"fn wp_srgb_decode(v: f32) -> f32 { let a = abs(v); let m = select(pow((a + 0.055) / 1.055, 2.4), a / 12.92, a <= 0.04045); return select(m, -m, v < 0.0); }",srgb_encode:`fn wp_srgb_encode(v: f32) -> f32 { let a = abs(v); let m = select(1.055 * pow(a, ${e(1/2.4)}) - 0.055, 12.92 * a, a <= 0.0031308); return select(m, -m, v < 0.0); }`,a98_decode:`fn wp_a98_decode(v: f32) -> f32 { let m = pow(abs(v), ${e(Pi)}); return select(m, -m, v < 0.0); }`,a98_encode:`fn wp_a98_encode(v: f32) -> f32 { let m = pow(abs(v), ${e(1/Pi)}); return select(m, -m, v < 0.0); }`,prophoto_decode:`fn wp_prophoto_decode(v: f32) -> f32 { let a = abs(v); let m = select(pow(a, 1.8), a / 16.0, a <= ${e(16*Ii)}); return select(m, -m, v < 0.0); }`,prophoto_encode:`fn wp_prophoto_encode(v: f32) -> f32 { let a = abs(v); let m = select(16.0 * a, pow(a, ${e(1/1.8)}), a >= ${e(Ii)}); return select(m, -m, v < 0.0); }`,rec2020_decode:`fn wp_rec2020_decode(v: f32) -> f32 { let a = abs(v); let m = select(pow((a + ${e(kt-1)}) / ${e(kt)}, ${e(1/.45)}), a / 4.5, a < ${e(Li*4.5)}); return select(m, -m, v < 0.0); }`,rec2020_encode:`fn wp_rec2020_encode(v: f32) -> f32 { let a = abs(v); let m = select(${e(kt)} * pow(a, 0.45) - ${e(kt-1)}, 4.5 * a, a < ${e(Li)}); return select(m, -m, v < 0.0); }`,labF:`fn wp_labF(t: f32) -> f32 { return select((t * ${e(Or)} + 16.0) / 116.0, pow(t, ${t}), t > ${e(pu)}); }`,labFInv:`fn wp_labFInv(t: f32) -> f32 { return select((116.0 * t - 16.0) / ${e(Or)}, t * t * t, t > ${e(mu)}); }`,cbrt:`fn wp_cbrt(v: f32) -> f32 { return sign(v) * pow(abs(v), ${t}); }`,bt709_decode:`fn wp_bt709_decode(v: f32) -> f32 { let a = abs(v); let m = select(pow((a + ${e(Vt-1)}) / ${e(Vt)}, ${e(1/.45)}), a / 4.5, a < ${e(Di*4.5)}); return select(m, -m, v < 0.0); }`,bt709_encode:`fn wp_bt709_encode(v: f32) -> f32 { let a = abs(v); let m = select(${e(Vt)} * pow(a, 0.45) - ${e(Vt-1)}, 4.5 * a, a < ${e(Di)}); return select(m, -m, v < 0.0); }`,gamma26_decode:"fn wp_gamma26_decode(v: f32) -> f32 { let m = pow(abs(v), 2.6); return select(m, -m, v < 0.0); }",gamma26_encode:`fn wp_gamma26_encode(v: f32) -> f32 { let m = pow(abs(v), ${e(1/2.6)}); return select(m, -m, v < 0.0); }`,acescc_decode:`fn wp_acescc_decode(v: f32) -> f32 { if (v < ${e(lu)}) { return (exp2(v * 17.52 - 9.72) - ${e(Fr)}) * 2.0; } if (v < ${e(hu)}) { return exp2(v * 17.52 - 9.72); } return 65504.0; }`,acescc_encode:`fn wp_acescc_encode(v: f32) -> f32 { if (v <= 0.0) { return ${e(Po)}; } if (v < ${e(fu)}) { return (log2(${e(Fr)} + v * 0.5) + 9.72) / 17.52; } return (log2(v) + 9.72) / 17.52; }`,acescct_decode:`fn wp_acescct_decode(v: f32) -> f32 { if (v > ${e(uu)}) { return exp2(v * 17.52 - 9.72); } return (v - ${e(Ui)}) / ${e(Ni)}; }`,acescct_encode:`fn wp_acescct_encode(v: f32) -> f32 { if (v <= 0.0078125) { return ${e(Ni)} * v + ${e(Ui)}; } return (log2(v) + 9.72) / 17.52; }`,pqabs_decode:`fn wp_pqabs_decode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let e = pow(v, ${e(1/Jt)}); return 10000.0 * pow(max(e - ${e(pt)}, 0.0) / (${e(mt)} - ${e(gt)} * e), ${e(1/dt)}); }`,pqabs_encode:`fn wp_pqabs_encode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let y = pow(v / 10000.0, ${e(dt)}); return pow((${e(pt)} + ${e(mt)} * y) / (1.0 + ${e(gt)} * y), ${e(Jt)}); }`,jzpq_decode:`fn wp_jzpq_decode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let e = pow(v, ${e(1/Ci)}); return 10000.0 * pow(max(e - ${e(pt)}, 0.0) / (${e(mt)} - ${e(gt)} * e), ${e(1/dt)}); }`,jzpq_encode:`fn wp_jzpq_encode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let y = pow(v / 10000.0, ${e(dt)}); return pow((${e(pt)} + ${e(mt)} * y) / (1.0 + ${e(gt)} * y), ${e(Ci)}); }`,rec2100pq_decode:`fn wp_rec2100pq_decode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let e = pow(v, ${e(1/Jt)}); return 10000.0 * pow(max(e - ${e(pt)}, 0.0) / (${e(mt)} - ${e(gt)} * e), ${e(1/dt)}) / ${e(203)}; }`,rec2100pq_encode:`fn wp_rec2100pq_encode(v: f32) -> f32 { let n = v * ${e(203)}; if (n <= 0.0) { return 0.0; } let y = pow(n / 10000.0, ${e(dt)}); return pow((${e(pt)} + ${e(mt)} * y) / (1.0 + ${e(gt)} * y), ${e(Jt)}); }`,rec2100hlg_decode:`fn wp_rec2100hlg_decode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } if (v <= 0.5) { return ((v * v) / 3.0) * ${e(Tn)}; } return ((exp((v - ${e(Oi)}) / ${e(kn)}) + ${e(Fi)}) / 12.0) * ${e(Tn)}; }`,rec2100hlg_encode:`fn wp_rec2100hlg_encode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let x = v / ${e(Tn)}; if (x <= ${e(1/12)}) { return sqrt(3.0 * x); } return ${e(kn)} * log(12.0 * x - ${e(Fi)}) + ${e(Oi)}; }`}}var As={js:gu("js"),glsl:gu("glsl"),wgsl:gu("wgsl")};function km(n,e,t,i){let s=o=>e?` + ${i(e[o])}`:"",r=o=>`${i(n[o*3])} * v.x + ${i(n[o*3+1])} * v.y + ${i(n[o*3+2])} * v.z${s(o)}`;return t==="glsl"?`  v = vec3(${r(0)}, ${r(1)}, ${r(2)});`:`  v = vec3<f32>(${r(0)}, ${r(1)}, ${r(2)});`}function Vm(n,e){let t=i=>e?` + ${e[i]}`:"";return`  { const r0 = ${n[0]} * v0 + ${n[1]} * v1 + ${n[2]} * v2${t(0)};
    const r1 = ${n[3]} * v0 + ${n[4]} * v1 + ${n[5]} * v2${t(1)};
    const r2 = ${n[6]} * v0 + ${n[7]} * v1 + ${n[8]} * v2${t(2)};
    v0 = r0; v1 = r1; v2 = r2; }`}function oM(n,e,t){let i=r=>Ts(r,e);if(e==="js")switch(n.k){case"mat3":return Vm(n.m);case"affine":return Vm(n.m,n.b);case"transfer":{let r=`${n.name}_${n.dir}`;return t.add(r),`  v0 = wp_${r}(v0); v1 = wp_${r}(v1); v2 = wp_${r}(v2);`}case"cbrt3":return"  v0 = Math.cbrt(v0); v1 = Math.cbrt(v1); v2 = Math.cbrt(v2);";case"cube3":return"  v0 = v0 * v0 * v0; v1 = v1 * v1 * v1; v2 = v2 * v2 * v2;";case"labF3":return t.add("labF"),"  v0 = wp_labF(v0); v1 = wp_labF(v1); v2 = wp_labF(v2);";case"labFInv3":return t.add("labFInv"),"  v0 = wp_labFInv(v0); v1 = wp_labFInv(v1); v2 = wp_labFInv(v2);";case"divW":return`  v0 /= ${n.w[0]}; v1 /= ${n.w[1]}; v2 /= ${n.w[2]};`;case"mulW":return`  v0 *= ${n.w[0]}; v1 *= ${n.w[1]}; v2 *= ${n.w[2]};`;case"clamp0":return"  v0 = Math.max(v0, 0); v1 = Math.max(v1, 0); v2 = Math.max(v2, 0);";case"jzFwd":return`  v0 = (${1+Kt} * v0) / (1 + ${Kt} * v0) - ${Ri};`;case"jzInv":return`  { const t = v0 + ${Ri}; v0 = t / (${1+Kt} - ${Kt} * t); }`;case"polarToRect":return`  { const h = v2 * ${du}; const c = v1; v1 = c * Math.cos(h); v2 = c * Math.sin(h); }`;case"rectToPolar":return`  { const c = Math.sqrt(v1 * v1 + v2 * v2); let h = Math.atan2(v2, v1) * ${rM}; if (h < 0) h += 360; v1 = c; v2 = h; }`;default:throw new Error(`codegen: unknown op "${n.k}"`)}let s=e==="glsl"?"vec3":"vec3<f32>";switch(n.k){case"mat3":return km(n.m,null,e,i);case"affine":return km(n.m,n.b,e,i);case"transfer":{let r=`${n.name}_${n.dir}`;return t.add(r),`  v = ${s}(wp_${r}(v.x), wp_${r}(v.y), wp_${r}(v.z));`}case"cbrt3":return t.add("cbrt"),`  v = ${s}(wp_cbrt(v.x), wp_cbrt(v.y), wp_cbrt(v.z));`;case"cube3":return"  v = v * v * v;";case"labF3":return t.add("labF"),`  v = ${s}(wp_labF(v.x), wp_labF(v.y), wp_labF(v.z));`;case"labFInv3":return t.add("labFInv"),`  v = ${s}(wp_labFInv(v.x), wp_labFInv(v.y), wp_labFInv(v.z));`;case"divW":return`  v = v / ${s}(${i(n.w[0])}, ${i(n.w[1])}, ${i(n.w[2])});`;case"mulW":return`  v = v * ${s}(${i(n.w[0])}, ${i(n.w[1])}, ${i(n.w[2])});`;case"clamp0":return`  v = max(v, ${s}(0.0));`;case"jzFwd":return`  v.x = (${i(1+Kt)} * v.x) / (1.0 + ${i(Kt)} * v.x) - ${i(Ri)};`;case"jzInv":return e==="glsl"?`  { float t = v.x + ${i(Ri)}; v.x = t / (${i(1+Kt)} - ${i(Kt)} * t); }`:`  { let t = v.x + ${i(Ri)}; v.x = t / (${i(1+Kt)} - ${i(Kt)} * t); }`;case"polarToRect":return e==="glsl"?`  { float h = v.z * ${du}; v = vec3(v.x, v.y * cos(h), v.y * sin(h)); }`:`  { let h = v.z * ${du}; v = vec3<f32>(v.x, v.y * cos(h), v.y * sin(h)); }`;case"rectToPolar":return e==="glsl"?"  { float c = length(v.yz); float h = degrees(atan(v.z, v.y)); if (h < 0.0) h += 360.0; v = vec3(v.x, c, h); }":"  { let c = length(v.yz); var h = degrees(atan2(v.z, v.y)); if (h < 0.0) { h = h + 360.0; } v = vec3<f32>(v.x, c, h); }";default:throw new Error(`codegen: unknown op "${n.k}"`)}}function _u(n,e,t){let i=new Set,s=n.map(o=>oM(o,t,i)).join(`
`),r=[...i].map(o=>{let a=As[t][o];if(!a)throw new Error(`codegen: no ${t} helper "${o}"`);return a}).join(`
`);return t==="js"?`${r}${r?`
`:""}function ${e}(c, out = [0, 0, 0]) {
  let v0 = c[0], v1 = c[1], v2 = c[2];
${s?s+`
`:""}  out[0] = v0; out[1] = v1; out[2] = v2;
  return out;
}`:t==="glsl"?`${r}${r?`
`:""}vec3 ${e}(vec3 c) {
  vec3 v = c;
${s?s+`
`:""}  return v;
}`:`${r}${r?`
`:""}fn ${e}(c: vec3<f32>) -> vec3<f32> {
  var v = c;
${s?s+`
`:""}  return v;
}`}var qi=_t,Xi=Ct($e.m.fromXyz,jt),Wn=$e.m.fromXyz,qm=.206,xu=.03,Hm=(1+qm)/(1+xu),yu=.017453292519943295,aM=216/24389,$m=24389/27,vu=Bt[0],Gl=Bt[1],Ym=Bt[2],cM=4*vu/(vu+15*Gl+3*Ym),lM=9*Gl/(vu+15*Gl+3*Ym),Br={js:{f:n=>Ts(n,"js"),decl:(n,e)=>`let ${n} = ${e};`,decl3:(n,e)=>`let ${n} = ${e};`,loop:(n,e)=>`for (let i = 0; i < ${n}; i++) {
${e}
}`,pow:(n,e)=>`Math.pow(${n}, ${e})`,cbrt:n=>`Math.cbrt(${n})`,sqrt:n=>`Math.sqrt(${n})`,cos:n=>`Math.cos(${n})`,sin:n=>`Math.sin(${n})`,atan2:(n,e)=>`Math.atan2(${n}, ${e})`,log:n=>`Math.log(${n})`,exp:n=>`Math.exp(${n})`,min:(n,e)=>`Math.min(${n}, ${e})`,max:(n,e)=>`Math.max(${n}, ${e})`,mod360:n=>`(((${n}) % 360) + 360) % 360`,in:n=>`c[${n}]`,gx:(n,e)=>`${n}[${e}]`,wrap:(n,e,t)=>`${e}
function ${n}(c, out = [0, 0, 0]) {
${t}
  return out;
}`,ret3:(n,e,t)=>`out[0] = ${n}; out[1] = ${e}; out[2] = ${t}; return out;`,linFn:n=>`const wp_oklc_lin = (L, C, kl, km, ks) => {
  let l = ${n.a0} * L + kl * C, m = ${n.a1} * L + km * C, q = ${n.a2} * L + ks * C;
  l = l * l * l; m = m * m * m; q = q * q * q;
  return [${n.s0} * l + ${n.s1} * m + ${n.s2} * q, ${n.s3} * l + ${n.s4} * m + ${n.s5} * q, ${n.s6} * l + ${n.s7} * m + ${n.s8} * q];
};
const wp_in01v = (v) => v[0] >= 0 && v[0] <= 1 && v[1] >= 0 && v[1] <= 1 && v[2] >= 0 && v[2] <= 1;
const wp_min3 = (v) => Math.min(v[0], Math.min(v[1], v[2]));
const wp_max3 = (v) => Math.max(v[0], Math.max(v[1], v[2]));
const wp_toe = (x) => 0.5 * (${n.k3} * x - ${n.k1} + Math.sqrt((${n.k3} * x - ${n.k1}) * (${n.k3} * x - ${n.k1}) + ${n.k4k2k3} * x));
const wp_toe_inv = (x) => (x * x + ${n.k1} * x) / (${n.k3} * (x + ${n.k2}));`},glsl:{f:n=>Ts(n,"glsl"),decl:(n,e)=>`float ${n} = ${e};`,decl3:(n,e)=>`vec3 ${n} = ${e};`,loop:(n,e)=>`for (int i = 0; i < ${n}; i++) {
${e}
}`,pow:(n,e)=>`pow(${n}, ${e})`,cbrt:n=>`pow(${n}, ${Ts(1/3,"glsl")})`,sqrt:n=>`sqrt(${n})`,cos:n=>`cos(${n})`,sin:n=>`sin(${n})`,atan2:(n,e)=>`atan(${n}, ${e})`,log:n=>`log(${n})`,exp:n=>`exp(${n})`,min:(n,e)=>`min(${n}, ${e})`,max:(n,e)=>`max(${n}, ${e})`,mod360:n=>`mod(mod(${n}, 360.0) + 360.0, 360.0)`,in:n=>`c.${"xyz"[n]}`,gx:(n,e)=>`${n}.${"xyz"[e]}`,wrap:(n,e,t)=>`${e}
vec3 ${n}(vec3 c) {
${t}
}`,ret3:(n,e,t)=>`return vec3(${n}, ${e}, ${t});`,linFn:n=>`vec3 wp_oklc_lin(float L, float C, float kl, float km, float ks) {
  float l = ${n.a0} * L + kl * C; float m = ${n.a1} * L + km * C; float q = ${n.a2} * L + ks * C;
  l = l * l * l; m = m * m * m; q = q * q * q;
  return vec3(${n.s0} * l + ${n.s1} * m + ${n.s2} * q, ${n.s3} * l + ${n.s4} * m + ${n.s5} * q, ${n.s6} * l + ${n.s7} * m + ${n.s8} * q);
}
bool wp_in01v(vec3 v) { return all(greaterThanEqual(v, vec3(0.0))) && all(lessThanEqual(v, vec3(1.0))); }
float wp_min3(vec3 v) { return min(v.x, min(v.y, v.z)); }
float wp_max3(vec3 v) { return max(v.x, max(v.y, v.z)); }
float wp_toe(float x) { float t = ${n.k3} * x - ${n.k1}; return 0.5 * (t + sqrt(t * t + ${n.k4k2k3} * x)); }
float wp_toe_inv(float x) { return (x * x + ${n.k1} * x) / (${n.k3} * (x + ${n.k2})); }`},wgsl:{f:n=>Ts(n,"wgsl"),decl:(n,e)=>`var ${n} = ${e};`,decl3:(n,e)=>`var ${n} = ${e};`,loop:(n,e)=>`for (var i: i32 = 0; i < ${n}; i++) {
${e}
}`,pow:(n,e)=>`pow(${n}, ${e})`,cbrt:n=>`pow(${n}, ${Ts(1/3,"wgsl")})`,sqrt:n=>`sqrt(${n})`,cos:n=>`cos(${n})`,sin:n=>`sin(${n})`,atan2:(n,e)=>`atan2(${n}, ${e})`,log:n=>`log(${n})`,exp:n=>`exp(${n})`,min:(n,e)=>`min(${n}, ${e})`,max:(n,e)=>`max(${n}, ${e})`,mod360:n=>`(((${n} % 360.0) + 360.0) % 360.0)`,in:n=>`c.${"xyz"[n]}`,gx:(n,e)=>`${n}.${"xyz"[e]}`,wrap:(n,e,t)=>`${e}
fn ${n}(c: vec3<f32>) -> vec3<f32> {
${t}
}`,ret3:(n,e,t)=>`return vec3<f32>(${n}, ${e}, ${t});`,linFn:n=>`fn wp_oklc_lin(L: f32, C: f32, kl: f32, km: f32, ks: f32) -> vec3<f32> {
  var l = ${n.a0} * L + kl * C; var m = ${n.a1} * L + km * C; var q = ${n.a2} * L + ks * C;
  l = l * l * l; m = m * m * m; q = q * q * q;
  return vec3<f32>(${n.s0} * l + ${n.s1} * m + ${n.s2} * q, ${n.s3} * l + ${n.s4} * m + ${n.s5} * q, ${n.s6} * l + ${n.s7} * m + ${n.s8} * q);
}
fn wp_in01v(v: vec3<f32>) -> bool { return all(v >= vec3<f32>(0.0)) && all(v <= vec3<f32>(1.0)); }
fn wp_min3(v: vec3<f32>) -> f32 { return min(v.x, min(v.y, v.z)); }
fn wp_max3(v: vec3<f32>) -> f32 { return max(v.x, max(v.y, v.z)); }
fn wp_toe(x: f32) -> f32 { let t = ${n.k3} * x - ${n.k1}; return 0.5 * (t + sqrt(t * t + ${n.k4k2k3} * x)); }
fn wp_toe_inv(x: f32) -> f32 { return (x * x + ${n.k1} * x) / (${n.k3} * (x + ${n.k2})); }`}};function Zm(n){return{a0:n.f(qi[0]),a1:n.f(qi[3]),a2:n.f(qi[6]),s0:n.f(Xi[0]),s1:n.f(Xi[1]),s2:n.f(Xi[2]),s3:n.f(Xi[3]),s4:n.f(Xi[4]),s5:n.f(Xi[5]),s6:n.f(Xi[6]),s7:n.f(Xi[7]),s8:n.f(Xi[8]),k1:n.f(qm),k2:n.f(xu),k3:n.f(Hm),k4k2k3:n.f(4*xu*Hm)}}function Jm(n){return[n.decl("h",n.mod360(n.in(0))),n.decl("hr",`h * ${n.f(yu)}`),n.decl("ca",n.cos("hr")),n.decl("cb",n.sin("hr")),n.decl("kl",`${n.f(qi[1])} * ca + ${n.f(qi[2])} * cb`),n.decl("km",`${n.f(qi[4])} * ca + ${n.f(qi[5])} * cb`),n.decl("ks",`${n.f(qi[7])} * ca + ${n.f(qi[8])} * cb`)].join(`
  `)}function Km(n){return[n.decl("clo","0.0"),n.decl("chi","0.05"),n.loop(10,`    if (wp_min3(wp_oklc_lin(1.0, chi, kl, km, ks)) <= 0.0) { break; }
    clo = chi; chi = chi * 2.0;`),n.loop(34,`    ${n.decl("cmid","0.5 * (clo + chi)")}
    if (wp_min3(wp_oklc_lin(1.0, cmid, kl, km, ks)) > 0.0) { clo = cmid; } else { chi = cmid; }`),n.decl("Lc",n.cbrt("1.0 / wp_max3(wp_oklc_lin(1.0, clo, kl, km, ks))")),n.decl("Cc","clo * Lc")].join(`
  `)}function jm(n){return[n.decl3("lin","wp_oklc_lin(L, C, kl, km, ks)"),n.ret3(`wp_srgb_encode(${n.gx("lin",0)})`,`wp_srgb_encode(${n.gx("lin",1)})`,`wp_srgb_encode(${n.gx("lin",2)})`)].join(`
  `)}function Mu(n){return n.ret3("1.0","1.0","1.0")}function Ho(n){return n.ret3("0.0","0.0","0.0")}function hM(n,e){let t=Br[n],i=`${As[n].srgb_encode}
${t.linFn(Zm(t))}`,s=`  ${t.decl("s",t.in(1))}
  ${t.decl("vv",t.in(2))}
  if (vv <= 1e-9) { ${Ho(t)} }
  ${Jm(t)}
  ${Km(t)}
  ${t.decl("sMax","Cc / Lc")}
  ${t.decl("tMax","Cc / (1.0 - Lc)")}
  ${t.decl("kk","1.0 - 0.5 / sMax")}
  ${t.decl("denom","0.5 + tMax - tMax * kk * s")}
  ${t.decl("Lv","1.0 - s * 0.5 / denom")}
  ${t.decl("Cv","s * tMax * 0.5 / denom")}
  ${t.decl("L","vv * Lv")}
  ${t.decl("C","vv * Cv")}
  ${t.decl("Lvt","wp_toe_inv(Lv)")}
  ${t.decl("Cvt","Cv * Lvt / Lv")}
  ${t.decl("Lnew","wp_toe_inv(L)")}
  if (L > 0.0) { C = C * Lnew / L; } else { C = 0.0; }
  L = Lnew;
  ${t.decl3("rs","wp_oklc_lin(Lvt, Cvt, kl, km, ks)")}
  ${t.decl("scale",t.cbrt(`1.0 / ${t.max(t.max(t.gx("rs",0),t.gx("rs",1)),t.max(t.gx("rs",2),"0.0"))}`))}
  L = L * scale;
  C = C * scale;
  ${jm(t)}`;return t.wrap(e,i,s)}var Wm=(n,e)=>({s:"0.11516993 + 1.0 / (7.4477897 + 4.1590124 * cb + ca * (-2.19557347 + 1.75198401 * cb + ca * (-2.13704948 - 10.02301043 * cb + ca * (-4.24894561 + 5.38770819 * cb + 4.69891013 * ca))))",t:"0.11239642 + 1.0 / (1.6132032 - 0.68124379 * cb + ca * (0.40370612 + 0.90148123 * cb + ca * (-0.27087943 + 0.6122399 * cb + ca * (0.00299215 - 0.45399568 * cb - 0.14661872 * ca))))"})[e];function uM(n,e){let t=Br[n],i=`${As[n].srgb_encode}
${t.linFn(Zm(t))}`,s=`  ${t.decl("s",t.in(1))}
  ${t.decl("ll",t.in(2))}
  if (ll >= 1.0 - 1e-9) { ${Mu(t)} }
  if (ll <= 1e-9) { ${Ho(t)} }
  ${Jm(t)}
  ${t.decl("L","wp_toe_inv(ll)")}
  ${Km(t)}
  ${t.decl("mlo","0.0")}
  ${t.decl("mhi","0.05")}
  ${t.loop(8,`    if (mhi >= 2.0) { break; }
    if (!wp_in01v(wp_oklc_lin(L, mhi, kl, km, ks))) { break; }
    mlo = mhi; mhi = mhi * 2.0;`)}
  ${t.loop(48,`    ${t.decl("mm","0.5 * (mlo + mhi)")}
    if (wp_in01v(wp_oklc_lin(L, mm, kl, km, ks))) { mlo = mm; } else { mhi = mm; }`)}
  ${t.decl("cMax","mlo")}
  ${t.decl("sMax","Cc / Lc")}
  ${t.decl("tMax","Cc / (1.0 - Lc)")}
  ${t.decl("kk",`cMax / ${t.min("L * sMax","(1.0 - L) * tMax")}`)}
  ${t.decl("sMid",Wm(t,"s"))}
  ${t.decl("tMid",Wm(t,"t"))}
  ${t.decl("caa","L * sMid")}
  ${t.decl("cbb","(1.0 - L) * tMid")}
  ${t.decl("cMid",`0.9 * kk * ${t.sqrt(t.sqrt("1.0 / (1.0 / (caa * caa * caa * caa) + 1.0 / (cbb * cbb * cbb * cbb))"))}`)}
  caa = L * 0.4;
  cbb = (1.0 - L) * 0.8;
  ${t.decl("c0",t.sqrt("1.0 / (1.0 / (caa * caa) + 1.0 / (cbb * cbb))"))}
  ${t.decl("C","0.0")}
  if (s < 0.8) {
    ${t.decl("t1","1.25 * s")}
    ${t.decl("k1v","0.8 * c0")}
    ${t.decl("k2v","1.0 - k1v / cMid")}
    C = t1 * k1v / (1.0 - k2v * t1);
  } else {
    ${t.decl("t2","5.0 * (s - 0.8)")}
    ${t.decl("k1w","0.2 * cMid * cMid * 1.5625 / c0")}
    ${t.decl("k2w","1.0 - k1w / (cMax - cMid)")}
    C = cMid + t2 * k1w / (1.0 - k2w * t2);
  }
  ${jm(t)}`;return t.wrap(e,i,s)}function Xm(n,e,t){let i=Br[n],s=As[n].srgb_encode,r=[];for(let c=0;c<3;c++){let l=Wn[c*3],h=Wn[c*3+1],f=Wn[c*3+2],u=284517*l-94839*f,d=838422*f+769860*h+731718*l,g=632260*f-126452*h;for(let v=0;v<2;v++){let m=`(${i.f(g)} * sub2 + ${i.f(126452*v)})`,p=`(${i.f(u)} * sub2 / ${m})`,M=`((${i.f(d)} * ll * sub2 - ${i.f(769860*v)} * ll) / ${m})`;r.push({slope:p,icpt:M,i:c*2+v})}}let o=r.map(({slope:c,icpt:l,i:h})=>{let f=`sl${h}`,u=`ic${h}`,d=`dd${h}`;return t?`  ${i.decl(f,c)}
  ${i.decl(u,l)}
  ${i.decl(d,`${i.max(u,`-(${u})`)} / ${i.sqrt(`${f} * ${f} + 1.0`)}`)}
  if (${d} < mx) { mx = ${d}; }`:`  ${i.decl(f,c)}
  ${i.decl(u,l)}
  ${i.decl(d,`${u} / (sh - ${f} * chh)`)}
  if (${d} >= 0.0 && ${d} < mx) { mx = ${d}; }`}).join(`
`),a=`  ${i.decl("s",i.in(1))}
  ${i.decl("ll",i.in(2))}
  if (ll > 99.9999999) { ${Mu(i)} }
  if (ll < 1e-8) { ${Ho(i)} }
  ${i.decl("h",i.mod360(i.in(0)))}
  ${i.decl("hr",`h * ${i.f(yu)}`)}
  ${i.decl("sh",i.sin("hr"))}
  ${i.decl("chh",i.cos("hr"))}
  ${i.decl("sub1","(ll + 16.0) * (ll + 16.0) * (ll + 16.0) / 1560896.0")}
  ${i.decl("sub2","sub1")}
  if (sub1 <= ${i.f(aM)}) { sub2 = ll / ${i.f($m)}; }
  ${i.decl("mx","1e30")}
${o}
  ${i.decl("C","mx / 100.0 * s")}
  ${i.decl("uu","C * chh")}
  ${i.decl("vv","C * sh")}
  ${i.decl("up",`uu / (13.0 * ll) + ${i.f(cM)}`)}
  ${i.decl("vp",`vv / (13.0 * ll) + ${i.f(lM)}`)}
  ${i.decl("Y",`ll / ${i.f($m)}`)}
  if (ll > 8.0) { Y = (ll + 16.0) / 116.0; Y = Y * Y * Y; }
  Y = Y * ${i.f(Gl)};
  ${i.decl("X","Y * 9.0 * up / (4.0 * vp)")}
  ${i.decl("Z","Y * (12.0 - 3.0 * up - 20.0 * vp) / (4.0 * vp)")}
  ${i.decl("lr",`${i.f(Wn[0])} * X + ${i.f(Wn[1])} * Y + ${i.f(Wn[2])} * Z`)}
  ${i.decl("lg",`${i.f(Wn[3])} * X + ${i.f(Wn[4])} * Y + ${i.f(Wn[5])} * Z`)}
  ${i.decl("lb",`${i.f(Wn[6])} * X + ${i.f(Wn[7])} * Y + ${i.f(Wn[8])} * Z`)}
  ${i.ret3("wp_srgb_encode(lr)","wp_srgb_encode(lg)","wp_srgb_encode(lb)")}`;return i.wrap(e,s,a)}function bu(n){let e=Qn,t=mi.cat16,i=Ct(t,$e.m.toXyz).map((l,h)=>l*e.fl*e.rgbD[Math.floor(h/3)]),s=st(t),r=[];for(let l=0;l<3;l++)for(let h=0;h<3;h++)r[l*3+h]=s[l*3+h]/(e.rgbD[h]*e.fl);let o=Ct($e.m.fromXyz,r),a=Math.pow(1.64-Math.pow(.29,e.n),.73),c=5e4/13*e.nc*e.ncb;return{Mf:i.map(n.f),Mb:o.map(n.f),aw:n.f(e.aw),nbb:n.f(e.nbb),cz:n.f(e.cz),icz:n.f(1/e.cz),fl25:n.f(e.fl25),Kn:n.f(a),P1:n.f(c)}}var Su={js:`const wp_cam_adapt = (y) => { const a = Math.abs(y); const f = Math.pow(a, 0.42); return Math.sign(y) * 400 * f / (f + 27.13); };
const wp_cam_unadapt = (v) => { const a = Math.abs(v); const base = Math.max(0, 27.13 * a / (400 - a)); return Math.sign(v) * Math.pow(base, ${1/.42}); };`,glsl:`float wp_cam_adapt(float y) { float a = abs(y); float f = pow(a, 0.42); return sign(y) * 400.0 * f / (f + 27.13); }
float wp_cam_unadapt(float v) { float a = abs(v); float base = max(0.0, 27.13 * a / (400.0 - a)); return sign(v) * pow(base, ${(1/.42).toPrecision(17)}); }`,wgsl:`fn wp_cam_adapt(y: f32) -> f32 { let a = abs(y); let f = pow(a, 0.42); return sign(y) * 400.0 * f / (f + 27.13); }
fn wp_cam_unadapt(v: f32) -> f32 { let a = abs(v); let base = max(0.0, 27.13 * a / (400.0 - a)); return sign(v) * pow(base, ${(1/.42).toPrecision(17)}); }`};function Qm(n,e){return`${n.decl("alpha",`C / ${n.sqrt("J / 100.0")}`)}
  ${n.decl("tt",n.pow(`alpha / ${e.Kn}`,n.f(1/.9)))}
  ${n.decl("ac",`${e.aw} * ${n.pow("J / 100.0",e.icz)}`)}
  ${n.decl("p2",`ac / ${e.nbb}`)}
  ${n.decl("gam",`23.0 * (p2 + 0.305) * tt / (23.0 * ${e.P1} * eHue + 11.0 * tt * ${n.cos("hr")} + 108.0 * tt * ${n.sin("hr")})`)}
  ${n.decl("ca",`gam * ${n.cos("hr")}`)}
  ${n.decl("cb",`gam * ${n.sin("hr")}`)}
  ${n.decl("rA","(460.0 * p2 + 451.0 * ca + 288.0 * cb) / 1403.0")}
  ${n.decl("gA","(460.0 * p2 - 891.0 * ca - 261.0 * cb) / 1403.0")}
  ${n.decl("bA","(460.0 * p2 - 220.0 * ca - 6300.0 * cb) / 1403.0")}
  ${n.decl("cr","wp_cam_unadapt(rA)")}
  ${n.decl("cg","wp_cam_unadapt(gA)")}
  ${n.decl("cbn","wp_cam_unadapt(bA)")}
  ${n.decl("lr",`${e.Mb[0]} * cr + ${e.Mb[1]} * cg + ${e.Mb[2]} * cbn`)}
  ${n.decl("lg",`${e.Mb[3]} * cr + ${e.Mb[4]} * cg + ${e.Mb[5]} * cbn`)}
  ${n.decl("lb",`${e.Mb[6]} * cr + ${e.Mb[7]} * cg + ${e.Mb[8]} * cbn`)}`}function fM(n,e){let t=Br[n],i=bu(t),s=`${As[n].srgb_decode}
${Su[n]}`,r=`  ${t.decl("dr",`wp_srgb_decode(${t.in(0)})`)}
  ${t.decl("dg",`wp_srgb_decode(${t.in(1)})`)}
  ${t.decl("db",`wp_srgb_decode(${t.in(2)})`)}
  ${t.decl("rA",`wp_cam_adapt(${i.Mf[0]} * dr + ${i.Mf[1]} * dg + ${i.Mf[2]} * db)`)}
  ${t.decl("gA",`wp_cam_adapt(${i.Mf[3]} * dr + ${i.Mf[4]} * dg + ${i.Mf[5]} * db)`)}
  ${t.decl("bA",`wp_cam_adapt(${i.Mf[6]} * dr + ${i.Mf[7]} * dg + ${i.Mf[8]} * db)`)}
  ${t.decl("ca","(11.0 * rA - 12.0 * gA + bA) / 11.0")}
  ${t.decl("cb","(rA + gA - 2.0 * bA) / 9.0")}
  ${t.decl("u","(20.0 * rA + 20.0 * gA + 21.0 * bA) / 20.0")}
  ${t.decl("ac",`((40.0 * rA + 20.0 * gA + bA) / 20.0) * ${i.nbb}`)}
  ${t.decl("J",`100.0 * ${t.pow(`ac / ${i.aw}`,i.cz)}`)}
  ${t.decl("hr",`${t.atan2("cb","ca")}`)}
  ${t.decl("eHue",`0.25 * (${t.cos("hr + 2.0")} + 3.8)`)}
  ${t.decl("tt",`${i.P1} * eHue * ${t.sqrt("ca * ca + cb * cb")} / (u + 0.305)`)}
  ${t.decl("alpha",`${t.pow("tt","0.9")} * ${i.Kn}`)}
  ${t.decl("C",`alpha * ${t.sqrt("J / 100.0")}`)}
  ${t.decl("Mm",`C * ${i.fl25}`)}
  ${t.decl("Mp",`${t.log("1.0 + 0.0228 * Mm")} / 0.0228`)}
  ${t.ret3("1.7 * J / (1.0 + 0.007 * J)",`Mp * ${t.cos("hr")}`,`Mp * ${t.sin("hr")}`)}`;return t.wrap(e,s,r)}function dM(n,e){let t=Br[n],i=bu(t),s=`${As[n].srgb_encode}
${Su[n]}`,r=`  ${t.decl("Jp",t.in(0))}
  ${t.decl("Mp",t.sqrt(`${t.in(1)} * ${t.in(1)} + ${t.in(2)} * ${t.in(2)}`))}
  ${t.decl("J","Jp / (1.7 - 0.007 * Jp)")}
  if (J <= 0.0) { ${Ho(t)} }
  ${t.decl("C",`(${t.exp("0.0228 * Mp")} - 1.0) / 0.0228 / ${i.fl25}`)}
  ${t.decl("hr",`${t.atan2(t.in(2),t.in(1))}`)}
  ${t.decl("eHue",`0.25 * (${t.cos("hr + 2.0")} + 3.8)`)}
  ${Qm(t,i)}
  ${t.ret3("wp_srgb_encode(lr)","wp_srgb_encode(lg)","wp_srgb_encode(lb)")}`;return t.wrap(e,s,r)}function pM(n,e){let t=Br[n],i=bu(t),s=`${As[n].srgb_encode}
${Su[n]}`,r=(()=>{let a=Qn,c=st(mi.cat16);return[0,1,2].map(l=>t.f(c[3+l]/(a.rgbD[l]*a.fl)))})(),o=`  ${t.decl("tone",t.in(2))}
  if (tone <= 0.0) { ${Ho(t)} }
  if (tone >= 100.0) { ${Mu(t)} }
  ${t.decl("fy","(tone + 16.0) / 116.0")}
  ${t.decl("targetY","fy * fy * fy")}
  if (fy <= ${t.f(6/29)}) { targetY = (116.0 * fy - 16.0) / ${t.f(24389/27)}; }
  ${t.decl("C",t.in(1))}
  ${t.decl("hr",`${t.mod360(t.in(0))} * ${t.f(yu)}`)}
  ${t.decl("eHue",`0.25 * (${t.cos("hr + 2.0")} + 3.8)`)}
  ${t.decl("jlo","0.0")}
  ${t.decl("jhi","400.0")}
  ${t.loop(48,`    ${t.decl("J","0.5 * (jlo + jhi)")}
    ${t.decl("alpha",`C / ${t.sqrt(t.max("J / 100.0","1e-9"))}`)}
    ${t.decl("tt",t.pow(`alpha / ${i.Kn}`,t.f(1/.9)))}
    ${t.decl("ac",`${i.aw} * ${t.pow("J / 100.0",i.icz)}`)}
    ${t.decl("p2",`ac / ${i.nbb}`)}
    ${t.decl("gam",`23.0 * (p2 + 0.305) * tt / (23.0 * ${i.P1} * eHue + 11.0 * tt * ${t.cos("hr")} + 108.0 * tt * ${t.sin("hr")})`)}
    ${t.decl("ca",`gam * ${t.cos("hr")}`)}
    ${t.decl("cb",`gam * ${t.sin("hr")}`)}
    ${t.decl("cr","wp_cam_unadapt((460.0 * p2 + 451.0 * ca + 288.0 * cb) / 1403.0)")}
    ${t.decl("cg","wp_cam_unadapt((460.0 * p2 - 891.0 * ca - 261.0 * cb) / 1403.0)")}
    ${t.decl("cbn","wp_cam_unadapt((460.0 * p2 - 220.0 * ca - 6300.0 * cb) / 1403.0)")}
    ${t.decl("Y",`${r[0]} * cr + ${r[1]} * cg + ${r[2]} * cbn`)}
    if (Y < targetY) { jlo = J; } else { jhi = J; }`)}
  ${t.decl("J","0.5 * (jlo + jhi)")}
  ${Qm(t,i)}
  ${t.ret3("wp_srgb_encode(lr)","wp_srgb_encode(lg)","wp_srgb_encode(lb)")}`;return t.wrap(e,s,o)}var mM={"okhsv|srgb":hM,"okhsl|srgb":uM,"hsluv|srgb":(n,e)=>Xm(n,e,!1),"hpluv|srgb":(n,e)=>Xm(n,e,!0),"srgb|cam16-ucs":fM,"cam16-ucs|srgb":dM,"hct|srgb":pM};function e1(n,e,t,i){let s=mM[`${e}|${t}`];return s?s(n,i):null}function n1(n,e){let t=Wi[n],i=Wi[e];if(!t)throw new Error(`codegen: unsupported space "${n}" (have: ${Object.keys(Wi).join(", ")})`);if(!i)throw new Error(`codegen: unsupported space "${e}"`);return Gm([...t.toXyzOps,...i.fromXyzOps])}function i1(n,e){return`wp_${n}_to_${e}`.replace(/-/g,"_")}function $o(n,e,{name:t=i1(n,e)}={}){return e1("glsl",n,e,t)??_u(n1(n,e),t,"glsl")}function gM(n){return`wp_gamut_map_oklch_to_${n}`.replace(/-/g,"_")}function _M(n,e,t){let i=i1("oklch",e),s=_u(n1("oklch",e),i,n);return n==="js"?`${s}
const wp_in01 = (v) => v[0] >= 0 && v[0] <= 1 && v[1] >= 0 && v[1] <= 1 && v[2] >= 0 && v[2] <= 1;
function ${t}(lch, out = [0, 0, 0]) {
  if (lch[0] >= 1) { out[0] = 1; out[1] = 1; out[2] = 1; return out; }
  if (lch[0] <= 0) { out[0] = 0; out[1] = 0; out[2] = 0; return out; }
  ${i}(lch, out);
  if (wp_in01(out)) return out;
  let lo = 0, hi = lch[1];
  const c = [lch[0], 0, lch[2]];
  for (let i = 0; i < 16; i++) {
    c[1] = 0.5 * (lo + hi);
    ${i}(c, out);
    if (wp_in01(out)) lo = c[1]; else hi = c[1];
  }
  c[1] = lo;
  ${i}(c, out);
  out[0] = Math.min(1, Math.max(0, out[0]));
  out[1] = Math.min(1, Math.max(0, out[1]));
  out[2] = Math.min(1, Math.max(0, out[2]));
  return out;
}`:n==="glsl"?`${s}
bool wp_in01(vec3 v) { return all(greaterThanEqual(v, vec3(0.0))) && all(lessThanEqual(v, vec3(1.0))); }
vec3 ${t}(vec3 lch) {
  if (lch.x >= 1.0) { return vec3(1.0); }
  if (lch.x <= 0.0) { return vec3(0.0); }
  vec3 rgb = ${i}(lch);
  if (wp_in01(rgb)) { return rgb; }
  float lo = 0.0;
  float hi = lch.y;
  for (int i = 0; i < 16; i++) {
    float mid = 0.5 * (lo + hi);
    rgb = ${i}(vec3(lch.x, mid, lch.z));
    if (wp_in01(rgb)) { lo = mid; } else { hi = mid; }
  }
  return clamp(${i}(vec3(lch.x, lo, lch.z)), vec3(0.0), vec3(1.0));
}`:`${s}
fn wp_in01(v: vec3<f32>) -> bool { return all(v >= vec3<f32>(0.0)) && all(v <= vec3<f32>(1.0)); }
fn ${t}(lch: vec3<f32>) -> vec3<f32> {
  if (lch.x >= 1.0) { return vec3<f32>(1.0); }
  if (lch.x <= 0.0) { return vec3<f32>(0.0); }
  let rgb = ${i}(lch);
  if (wp_in01(rgb)) { return rgb; }
  var lo: f32 = 0.0;
  var hi: f32 = lch.y;
  for (var i: i32 = 0; i < 16; i++) {
    let mid = 0.5 * (lo + hi);
    let candidate = ${i}(vec3<f32>(lch.x, mid, lch.z));
    if (wp_in01(candidate)) { lo = mid; } else { hi = mid; }
  }
  return clamp(${i}(vec3<f32>(lch.x, lo, lch.z)), vec3<f32>(0.0), vec3<f32>(1.0));
}`}function xM(n){let e=Wi[n];if(!e||!e.fromXyzOps.some(t=>t.k==="mat3"))throw new Error(`codegen: gamut mapping needs an RGB gamut space (got "${n}")`)}function wu(n,{name:e=gM(n)}={}){return xM(n),_M("glsl",n,e)}var vM={hsl:0,hwb:0,hsv:0,hsi:0,okhsl:0,okhsv:0,hct:0,hsluv:0,hpluv:0,lch:2,oklch:2,lchuv:2,jzczhz:2,"din99o-lch":2,cam16:2},yM=["shorter","longer","increasing","decreasing"];function t1(n,e){let i=`${(n==="glsl"||n==="wgsl"?(s,r)=>`mod(${s}, ${r})`:(s,r)=>`(((${s}) % ${r}) + ${r}) % ${r}`)("hb - ha + 360.0","360.0")}`;switch(e){case"shorter":return`float d0 = ${i}; float d = d0 > 180.0 ? d0 - 360.0 : d0;`;case"longer":return`float d0 = ${i}; float d = d0 == 0.0 ? 360.0 : (d0 < 180.0 ? d0 - 360.0 : d0);`;case"increasing":return`float d = ${i};`;case"decreasing":return`float d0 = ${i}; float d = d0 == 0.0 ? 0.0 : d0 - 360.0;`;default:throw new Error(`codegen: unknown hue method "${e}"`)}}function MM(n,e,t,i){let s=vM[e]??-1;if(!Wi[e]&&s===-1)throw new Error(`codegen: unsupported space "${e}"`);if(!yM.includes(t))throw new Error(`codegen: unknown hue method "${t}"`);let r=["x","y","z"],o=l=>`a.${r[l]} + t * (b.${r[l]} - a.${r[l]})`;if(n==="js"){let l=[];for(let h=0;h<3;h++)h===s?l.push(`  const ha = ((a[${h}] % 360) + 360) % 360;`,`  const hb = ((b[${h}] % 360) + 360) % 360;`,`  ${t1("js",t).replace(/float /g,"const ").replace(/const d0/,"const d0").replace("const d =","const d =")}`,`  out[${h}] = (((ha + t * d) % 360) + 360) % 360;`):l.push(`  out[${h}] = a[${h}] + t * (b[${h}] - a[${h}]);`);return`function ${i}(a, b, t, out = [0, 0, 0]) {
${l.join(`
`)}
  return out;
}`}if(s===-1)return n==="glsl"?`vec3 ${i}(vec3 a, vec3 b, float t) {
  return mix(a, b, t);
}`:`fn ${i}(a: vec3<f32>, b: vec3<f32>, t: f32) -> vec3<f32> {
  return mix(a, b, t);
}`;let a=[0,1,2].filter(l=>l!==s);if(n==="glsl")return`vec3 ${i}(vec3 a, vec3 b, float t) {
  float ha = mod(mod(a.${r[s]}, 360.0) + 360.0, 360.0);
  float hb = mod(mod(b.${r[s]}, 360.0) + 360.0, 360.0);
  ${t1("glsl",t)}
  vec3 v;
  v.${r[a[0]]} = ${o(a[0])};
  v.${r[a[1]]} = ${o(a[1])};
  v.${r[s]} = mod(ha + t * d, 360.0);
  return v;
}`;let c={shorter:"let d0 = (hb - ha + 360.0) % 360.0; let d = select(d0, d0 - 360.0, d0 > 180.0);",longer:"let d0 = (hb - ha + 360.0) % 360.0; let d = select(select(d0, d0 - 360.0, d0 < 180.0), 360.0, d0 == 0.0);",increasing:"let d = (hb - ha + 360.0) % 360.0;",decreasing:"let d0 = (hb - ha + 360.0) % 360.0; let d = select(d0 - 360.0, 0.0, d0 == 0.0);"}[t];return`fn ${i}(a: vec3<f32>, b: vec3<f32>, t: f32) -> vec3<f32> {
  let ha = ((a.${r[s]} % 360.0) + 360.0) % 360.0;
  let hb = ((b.${r[s]} % 360.0) + 360.0) % 360.0;
  ${c}
  var v: vec3<f32>;
  v.${r[a[0]]} = ${o(a[0])};
  v.${r[a[1]]} = ${o(a[1])};
  v.${r[s]} = (ha + t * d) % 360.0;
  return v;
}`}function bM(n,e){return`wp_mix_${n}_${e}`.replace(/-/g,"_")}function s1(n,{hue:e="shorter",name:t=bM(n,e)}={}){return MM("glsl",n,e,t)}function Hl(n,e,t,i=24,s=0,r=Math.PI*2){let o=[];for(let a=0;a<=i;a++){let c=s+(r-s)*(a/i);o.push([n+t*Math.cos(c),e+t*Math.sin(c)])}return o}var Yi=(n,e,t,i,s,r=10)=>Hl(n,e,t,r,i*Math.PI/180,s*Math.PI/180),SM={w:{w:.84,strokes:[[[0,1],[.22,0],[.42,.75],[.62,0],[.84,1]]]},h:{w:.6,strokes:[[[0,1.5],[0,0]],[[0,.55],...Yi(.3,.55,.3,180,0),[.6,0]]]},i:{w:.06,strokes:[[[0,1],[0,0]],Hl(0,1.28,.045,10)],closed:[!1,!0]},t:{w:.6,strokes:[[[.3,1.45],[.3,.2],...Yi(.5,.2,.2,180,270)],[[0,1],[.6,1]]]},e:{w:.9,strokes:[[[.07,.55],[.83,.55],...Yi(.45,.5,.45,7,320,26)]]},p:{w:.85,strokes:[[[0,1],[0,-.5]],[[0,.78],...Yi(.38,.5,.45,128,-128),[0,.22]]]},o:{w:.9,strokes:[Hl(.45,.5,.45)],closed:[!0]},n:{w:.56,strokes:[[[0,1],[0,0]],[[0,.58],...Yi(.28,.58,.28,180,0),[.56,0]]]},B:{w:.85,strokes:[[[0,1.4],[0,0]],[[0,1.4],[.45,1.4],...Yi(.45,1.05,.35,90,-90),[0,.7],[.5,.7],...Yi(.5,.35,.35,90,-90),[0,0]]]},A:{w:.9,strokes:[[[0,0],[.45,1.4],[.9,0]],[[.2,.5],[.7,.5]]]},R:{w:.8,strokes:[[[0,1.4],[0,0]],[[0,1.4],[.4,1.4],...Yi(.4,1.05,.35,90,-90),[0,.7]],[[.3,.7],[.75,0]]]},O:{w:.95,strokes:[wM(.475,.7,.42,.7)],closed:[!0]},P:{w:.8,strokes:[[[0,1.4],[0,0]],[[0,1.4],[.4,1.4],...Yi(.4,1.05,.35,90,-90),[0,.7]]]},E:{w:.75,strokes:[[[.72,1.4],[0,1.4],[0,0],[.72,0]],[[0,.7],[.58,.7]]]},N:{w:.8,strokes:[[[0,0],[0,1.4],[.75,0],[.75,1.4]]]},L:{w:.72,strokes:[[[0,1.4],[0,0],[.68,0]]]},I:{w:.06,strokes:[[[0,1.4],[0,0]]]},V:{w:.9,strokes:[[[0,1.4],[.45,0],[.9,1.4]]]}};function wM(n,e,t,i,s=28){let r=[];for(let o=0;o<=s;o++){let a=Math.PI*2*o/s;r.push([n+t*Math.cos(a),e+i*Math.sin(a)])}return r}var r1={w:1.5,strokes:[[[-.7,1.55],[0,.7],[.7,1.55]],[[0,.66],[0,.08]],[[-.34,.04],[.34,.04]],Hl(.16,1.22,.1,14),[[.16,1.34],[.4,1.66]]],closed:[!1,!1,!1,!0,!1]};function EM(n,e=.05){if(n.length<3)return n;let t=[n[0]];for(let i=1;i<n.length-1;i++){let[s,r]=n[i-1],[o,a]=n[i],[c,l]=n[i+1],h=[s-o,r-a],f=[c-o,l-a],u=Math.hypot(...h),d=Math.hypot(...f),g=Math.min(e,u*.4,d*.4);if(g<1e-4){t.push(n[i]);continue}let v=[o+h[0]/u*g,a+h[1]/u*g],m=[o+f[0]/d*g,a+f[1]/d*g];for(let p=0;p<=1;p+=.25){let M=1-p;t.push([M*M*v[0]+2*M*p*o+p*p*m[0],M*M*v[1]+2*M*p*a+p*p*m[1]])}}return t.push(n[n.length-1]),t}function TM(n,{radius:e=.035,closed:t=!1}={}){let i=n.filter(([c,l],h)=>h===0||Math.hypot(c-n[h-1][0],l-n[h-1][1])>1e-4),r=(t?i:EM(i)).map(([c,l])=>new D(c,l,0));t&&r.pop();let o=new ls(r,t,"catmullrom",t?.5:0),a=Math.max(12,r.length*4);return new Bs(o,a,e,8,t)}function o1(n,{radius:e=.035,spacing:t=.32}={}){let i=[],s=0,r=typeof n=="string"?[...n].map(o=>SM[o]):n;for(let o of r){if(!o){s+=.5;continue}o.strokes.forEach((a,c)=>{let l=TM(a.map(([h,f])=>[h+s,f]),{radius:e,closed:o.closed?.[c]??!1});i.push(l)}),s+=o.w+t}return{geometries:i,width:Math.max(0,s-t)}}function Tu(...n){let e=new Set,t=[];for(let i of n){let s=i.split(`
`),r=!1,o=0;for(let a of s){let c=/^(?:float|vec[234]|bool|int) (wp_\w+)\(/.exec(a);o===0&&c&&(r=e.has(c[1]),e.add(c[1])),!r&&a.trim()&&t.push(a),o+=(a.match(/{/g)||[]).length-(a.match(/}/g)||[]).length,o===0&&a.includes("}")&&(r=!1)}}return t.join(`
`)}var AM=`
  out vec2 vUv;
  void main() {
    // Fullscreen triangle from gl_VertexID \u2014 no attributes, no fuss.
    vec2 p = vec2(float((gl_VertexID & 1) << 2) - 1.0, float((gl_VertexID & 2) << 1) - 1.0);
    vUv = p * 0.5 + 0.5;
    gl_Position = vec4(p, 0.0, 1.0);
  }
`;function CM(){return`
  precision highp float;
  in vec2 vUv;
  out vec4 frag;
  uniform sampler2D tScene;
  uniform sampler2D tBloom;
  uniform sampler2D tBloomWide;
  uniform float uMode;       // 0 whitepoint, 1 naive
  uniform float uP3;         // 1 when the drawing buffer is display-p3
  uniform float uSrgbPreview;// 1 to show the sRGB-clamped view on a P3 display
  uniform float uExposure;
  uniform float uBloomAmt;
${Tu($o("xyz-d65","oklch"),wu("display-p3"),wu("srgb"),$o("srgb","display-p3"))}
  void main() {
    vec3 s = texture(tScene, vUv).rgb;
    // Two scales: a tight half-res core glow plus a quarter-res
    // atmospheric spread \u2014 the way bright tubes actually photograph.
    vec3 b = texture(tBloom, vUv).rgb + 0.55 * texture(tBloomWide, vUv).rgb;
    vec3 color;
    if (uMode < 0.5) {
      vec3 xyz = (s + uBloomAmt * b) * uExposure;
      vec3 lch = wp_xyz_d65_to_oklch(xyz);
      if (uP3 > 0.5 && uSrgbPreview < 0.5) {
        color = wp_gamut_map_oklch_to_display_p3(lch);
      } else {
        vec3 srgb = wp_gamut_map_oklch_to_srgb(lch);
        color = uP3 > 0.5 ? wp_srgb_to_display_p3(srgb) : srgb;
      }
    } else {
      // What every web demo ships: add, clamp, hope.
      vec3 srgb = clamp(s + uBloomAmt * b, 0.0, 1.0);
      color = uP3 > 0.5 ? wp_srgb_to_display_p3(srgb) : srgb;
    }
    frag = vec4(color, 1.0);
  }
`}var RM=`
  precision highp float;
  in vec2 vUv;
  out vec4 frag;
  uniform sampler2D tScene;
  uniform float uMode;
  uniform float uThreshold;
  void main() {
    vec3 s = texture(tScene, vUv).rgb;
    if (uMode < 0.5) {
      // Linear light: anything brighter than the threshold blooms, with
      // its true chromaticity (Y is the XYZ luminance channel).
      float w = max(s.y - uThreshold, 0.0) / max(s.y, 1e-4);
      frag = vec4(s * w, 1.0);
    } else {
      // LDR bloom: blur what the 8-bit clamp left behind.
      vec3 c = clamp(s, 0.0, 1.0);
      float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
      frag = vec4(c * smoothstep(0.6, 0.9, luma), 1.0);
    }
  }
`,PM=`
  precision highp float;
  in vec2 vUv;
  out vec4 frag;
  uniform sampler2D tSrc;
  uniform vec2 uDir; // (1,0)/texel or (0,1)/texel
  void main() {
    // 9-tap separable Gaussian (\u03C3\u22482), the ColorPlay workhorse.
    float w[5];
    w[0] = 0.2270270270; w[1] = 0.1945945946; w[2] = 0.1216216216;
    w[3] = 0.0540540541; w[4] = 0.0162162162;
    vec3 acc = texture(tSrc, vUv).rgb * w[0];
    for (int i = 1; i < 5; i++) {
      acc += texture(tSrc, vUv + uDir * float(i)).rgb * w[i];
      acc += texture(tSrc, vUv - uDir * float(i)).rgb * w[i];
    }
    frag = vec4(acc, 1.0);
  }
`;function Eu(n,e){let t=new _r({glslVersion:wo,vertexShader:AM,fragmentShader:n,uniforms:e,depthTest:!1,depthWrite:!1}),i=new Fe(new en,t);i.frustumCulled=!1,i.geometry.setDrawRange(0,3);let r=new Fs;return r.add(i),{scene:r,mat:t}}function $l(n,e){return new qt(n,e,{type:wn,minFilter:At,magFilter:At,depthBuffer:!1,colorSpace:zn})}function Au(n,e,t,i){let s=new qt(e,t,{type:wn,samples:4,colorSpace:zn}),r=Math.max(1,e>>1),o=Math.max(1,t>>1),a=$l(r,o),c=$l(r,o),l=Math.max(1,e>>2),h=Math.max(1,t>>2),f=$l(l,h),u=$l(l,h),d=CM(),g=Eu(RM,{tScene:{value:s.texture},uMode:i,uThreshold:{value:1.2}}),v=Eu(PM,{tSrc:{value:null},uDir:{value:new we}}),m=Eu(d,{tScene:{value:s.texture},tBloom:{value:c.texture},tBloomWide:{value:u.texture},uMode:i,uP3:{value:0},uSrgbPreview:{value:0},uExposure:{value:1},uBloomAmt:{value:.7}}),p=new zs;function M(b,A){n.setRenderTarget(s),n.render(b,A),n.setRenderTarget(a),n.render(g.scene,p);for(let E=0;E<2;E++)v.mat.uniforms.tSrc.value=a.texture,v.mat.uniforms.uDir.value.set(1/r,0),n.setRenderTarget(c),n.render(v.scene,p),v.mat.uniforms.tSrc.value=c.texture,v.mat.uniforms.uDir.value.set(0,1/o),n.setRenderTarget(a),n.render(v.scene,p);m.mat.uniforms.tBloom.value=a.texture;for(let E=0;E<2;E++)v.mat.uniforms.tSrc.value=E===0?a.texture:f.texture,v.mat.uniforms.uDir.value.set(1/l,0),n.setRenderTarget(u),n.render(v.scene,p),v.mat.uniforms.tSrc.value=u.texture,v.mat.uniforms.uDir.value.set(0,1/h),n.setRenderTarget(f),n.render(v.scene,p);m.mat.uniforms.tBloomWide.value=f.texture,n.setRenderTarget(null),n.render(m.scene,p)}function w(){s.dispose(),a.dispose(),c.dispose(),f.dispose(),u.dispose();for(let b of[g,v,m])b.mat.dispose()}return{render:M,output:m.mat,sceneRT:s,dispose:w,source:d}}var In=8,IM=`
  varying vec3 vPos;
  varying vec3 vNormal;
  varying vec2 vUv;
  void main() {
    vPos = (modelMatrix * vec4(position, 1.0)).xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    vUv = uv;
    gl_Position = projectionMatrix * viewMatrix * vec4(vPos, 1.0);
  }
`,LM=`
  varying vec3 vPos;
  varying vec3 vNormal;
  varying vec2 vUv;
  uniform vec3 uPairA[${In}];
  uniform vec3 uPairB[${In}];
  uniform vec3 uNaiveLight[${In}];
  uniform vec3 uLightPos[${In}];
  uniform float uIntensity[${In}];
  uniform vec3 uAlbedoA;
  uniform vec3 uAlbedoB;
  uniform vec2 uUvScale;
  uniform float uKind; // 0 plain, 1 brick, 2 asphalt
  uniform float uWetness;
  uniform float uMode;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  // mask: 0 \u2192 material A, 1 \u2192 material B; var: scalar albedo variation.
  void pattern(out float mask, out float vari) {
    vec2 uv = vUv * uUvScale;
    mask = 0.0;
    vari = 1.0;
    if (uKind > 0.5 && uKind < 1.5) {
      // Brick courses: offset alternate rows, mortar at the joints.
      float row = floor(uv.y);
      vec2 b = vec2(uv.x + 0.5 * mod(row, 2.0), uv.y);
      vec2 cell = floor(b);
      vec2 f = fract(b);
      float mortar = step(f.x, 0.05) + step(0.9, f.y);
      mask = clamp(mortar, 0.0, 1.0);
      vari = 0.8 + 0.2 * hash(cell);
    } else if (uKind > 1.5) {
      // Asphalt: speckle + broad wet blotches.
      float speck = 0.85 + 0.15 * hash(floor(uv * 24.0));
      float blotch = smoothstep(0.35, 0.75,
        0.5 * hash(floor(uv * 1.7)) + 0.5 * hash(floor(uv * 3.1 + 7.0)));
      mask = uWetness * max(blotch, 0.35);
      vari = speck;
    }
  }

  void main() {
    vec3 n = normalize(vNormal);
    float mask; float vari;
    pattern(mask, vari);
    vec3 accW = vec3(0.0);
    vec3 accN = vec3(0.0);
    for (int i = 0; i < ${In}; i++) {
      vec3 L = uLightPos[i] - vPos;
      float d2 = dot(L, L);
      float ndl = max(dot(n, normalize(L)), 0.0);
      float att = uIntensity[i] * ndl / (1.0 + 0.45 * d2);
      accW += mix(uPairA[i], uPairB[i], mask) * att;
      accN += uNaiveLight[i] * att;
    }
    vec3 whitepoint = accW * vari;
    vec3 naive = mix(uAlbedoA, uAlbedoB, mask) * accN * vari;
    gl_FragColor = vec4(mix(whitepoint, naive, uMode), 1.0);
  }
`,DM=`
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    vView = normalize(cameraPosition - wp);
    gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
  }
`,c1=`
  varying vec3 vNormal;
  varying vec3 vView;
  uniform vec3 uXyz;
  uniform vec3 uNaive;
  uniform float uPower;
  uniform float uFlicker;
  uniform float uMode;
  void main() {
    // Limb profile: a glowing column reads brightest through its core.
    // (Squared by multiplication \u2014 pow(0, y) is NaN on some Metal drivers.)
    float d = max(dot(normalize(vNormal), vView), 0.0);
    float core = 0.55 + 0.45 * d * d;
    float p = uPower * uFlicker;
    vec3 whitepoint = uXyz * p * core;
    vec3 naive = uNaive * min(p * core, 1.0); // LDR: the tube saturates
    gl_FragColor = vec4(mix(whitepoint, naive, uMode), 1.0);
  }
`,l1=`
  varying vec2 vUvE;
  uniform vec3 uXyz;
  uniform vec3 uNaive;
  uniform float uPower;
  uniform float uFlicker;
  uniform float uGrad; // 1: fade toward +v (the sky)
  uniform float uMode;
  void main() {
    float g = mix(1.0, mix(1.0, 0.15, vUvE.y), uGrad);
    vec3 whitepoint = uXyz * uPower * uFlicker * g;
    vec3 naive = uNaive * min(uPower * uFlicker, 1.0) * g;
    gl_FragColor = vec4(mix(whitepoint, naive, uMode), 1.0);
  }
`,Cu=`
  varying vec2 vUvE;
  void main() {
    vUvE = uv;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
  }
`,NM=`
  varying vec2 vUvE;
  uniform vec3 uXyz;
  uniform vec3 uNaive;
  uniform float uPower;
  uniform float uFlicker;
  uniform float uMode;
  void main() {
    // max() guard: pow(0, y) returns NaN on some Metal drivers, and one
    // NaN in an additive pass paints the gamut-mapped output black.
    float a = pow(max(vUvE.y, 1e-4), 1.6) * (0.45 + 0.55 * sin(3.14159265 * vUvE.x));
    vec3 whitepoint = uXyz * uPower * uFlicker * a;
    vec3 naive = min(uNaive * uPower * uFlicker, vec3(1.0)) * a;
    gl_FragColor = vec4(mix(whitepoint, naive, uMode), 1.0);
  }
`;function UM(){return`
  varying vec2 vUvE;
  uniform vec3 uLchBright;
  uniform vec3 uLchDark;
  uniform vec3 uNaive;
  uniform float uPower;
  uniform float uFlicker;
  uniform float uMode;
${Tu(s1("oklch"),$o("oklch","xyz-d65"))}
  void main() {
    float r = length(vUvE - 0.5) * 2.0;
    float t = smoothstep(0.0, 1.0, r);
    float fade = (1.0 - t) * uPower * uFlicker;
    vec3 lch = wp_mix_oklch_shorter(uLchBright, uLchDark, t);
    vec3 whitepoint = wp_oklch_to_xyz_d65(lch) * fade;
    vec3 naive = mix(uNaive, vec3(0.0), t) * fade;
    gl_FragColor = vec4(mix(whitepoint, naive, uMode), 1.0);
  }
`}function Ln(n){return new D(n[0],n[1],n[2])}function Wl(n,e){let t=n.slice(0,In).map(Ln);for(;t.length<In;)t.push(Ln(e));return t}function Qt(n,e,t=e,i={}){let{pairs:s}=n.derived,r=new It({vertexShader:IM,fragmentShader:LM,uniforms:{uPairA:{value:Wl(s[e],[0,0,0])},uPairB:{value:Wl(s[t],[0,0,0])},uNaiveLight:n.shared.uNaiveLight,uLightPos:n.shared.uLightPos,uIntensity:n.shared.uIntensity,uAlbedoA:{value:Ln(n.materialsSrgb[e])},uAlbedoB:{value:Ln(n.materialsSrgb[t])},uUvScale:{value:new we(...i.uvScale??[1,1])},uKind:{value:i.kind??0},uWetness:n.shared.uWetness,uMode:n.uMode}});return n.surfaceMats.push({mat:r,matA:e,matB:t}),r}function Ru(n){for(let e of n.tubeMats??[])e.uniforms.uXyz.value.set(...n.xyz),e.uniforms.uNaive.value.set(...n.naive);if(n.haloMat){let{bright:e,dark:t}=h1(n);n.haloMat.uniforms.uLchBright.value.set(...e),n.haloMat.uniforms.uLchDark.value.set(...t),n.haloMat.uniforms.uNaive.value.set(...n.naive.map(i=>i*.5))}}function Xl(n){let{pairs:e,lights:t}=n.derived;for(let{mat:i,matA:s,matB:r}of n.surfaceMats)i.uniforms.uPairA.value=Wl(e[s],[0,0,0]),i.uniforms.uPairB.value=Wl(e[r],[0,0,0]);t.forEach((i,s)=>{s<In&&n.shared.uNaiveLight.value[s].set(...i.naive)})}function FM(n,e,t){return new It({vertexShader:DM,fragmentShader:c1,uniforms:{uXyz:{value:Ln(e.xyz)},uNaive:{value:Ln(e.naive)},uPower:{value:t},uFlicker:e.flicker,uMode:n.uMode}})}function Pu(n,e,t,i,{grad:s=0,flicker:r}={}){return new It({vertexShader:Cu,fragmentShader:l1,uniforms:{uXyz:{value:Ln(e)},uNaive:{value:Ln(t)},uPower:{value:i},uFlicker:r??{value:1},uGrad:{value:s},uMode:n.uMode}})}function h1(n){let e=$n(n.xyz.map(i=>i*.32),"xyz-d65","oklch"),t=[.045,Math.min(e[1]*.35,.04),e[2]];return{bright:e,dark:t}}function OM(n,e,t){let{bright:i,dark:s}=h1(e);return new It({vertexShader:Cu,fragmentShader:UM(),uniforms:{uLchBright:{value:Ln(i)},uLchDark:{value:Ln(s)},uNaive:{value:Ln(e.naive.map(r=>r*.5))},uPower:{value:t},uFlicker:e.flicker,uMode:n.uMode},transparent:!0,blending:ks,depthWrite:!1})}function a1(n,e,{scale:t,tubeR:i=.035,panelPad:s=.3,haloScale:r=2.6,power:o=14}){let a=new xn,{geometries:c,width:l}=o1(e.text,{radius:i/t}),h=FM(n,e,o);e.tubeMats=[h];let f=new xn;for(let m of c){let p=new Fe(m,h);p.userData.light=e,n.clickables.push(p),f.add(p)}f.scale.setScalar(t),f.position.set(-l/2*t,-.5*t,.1),a.add(f);let u=l*t+s*2,d=1.5*t+s*2,g=new Fe(new on(u,d,.06),Qt(n,"panel"));g.position.set(0,.25*t,.02),g.userData.light=e,n.clickables.push(g),a.add(g);let v=new Fe(new an(u*r,d*r),OM(n,e,.3));if(e.haloMat=v.material,v.position.set(0,.25*t,.075),a.add(v),e.facing==="front")a.position.set(e.pos[0],e.pos[1],e.pos[2]);else{let m=e.pos[0]<0?-1:1;a.rotation.y=m<0?Math.PI/2:-Math.PI/2,a.position.set(e.pos[0]*.97,e.pos[1],e.pos[2])}return a}function BM(n,e,t){let i=new xn,s=1,r=1.5,o=new Fe(new on(s+.16,r+.16,.1),Qt(n,"panel"));i.add(o);let a=2,c=3,l=s/a,h=r/c;e.paneMats=[];for(let u=0;u<c;u++)for(let d=0;d<a;d++){let g=t[(u*a+d)%t.length],v=Pu(n,g.xyz,g.naive,1.1,{flicker:e.flicker});e.paneMats.push(v);let m=new Fe(new an(l-.05,h-.05),v);m.position.set((d+.5)*l-s/2,(u+.5)*h-r/2,.06),i.add(m)}let f=e.pos[0]<0?-1:1;return i.rotation.y=f<0?Math.PI/2:-Math.PI/2,i.position.set(e.pos[0]*.97,e.pos[1],e.pos[2]),i}function zM(n,e){let t=new xn,i=Qt(n,"metal"),s=new Fe(new Ai(.05,.07,4.7,10),i);s.position.set(2.45,2.35,e.pos[2]),t.add(s);let r=new Fe(new Ai(.04,.04,1.3,8),i);r.rotation.z=Math.PI/2,r.position.set(1.85,4.66,e.pos[2]),t.add(r);let o=new Fe(new gr(.24,.22,12),i);o.position.set(e.pos[0],e.pos[1]+.16,e.pos[2]),t.add(o);let a=new Fe(new ho(.13,16,12),Pu(n,e.xyz,e.naive,9,{flicker:e.flicker}));e.headMat=a.material,a.position.set(...e.pos),t.add(a);let c=new Fe(new gr(.5,3.4,24,1,!0),new It({vertexShader:Cu,fragmentShader:NM,uniforms:{uXyz:{value:Ln(e.xyz)},uNaive:{value:Ln(e.naive)},uPower:{value:.03},uFlicker:e.flicker,uMode:n.uMode},transparent:!0,blending:ks,depthWrite:!1,side:Mn}));return c.position.set(e.pos[0],e.pos[1]-1.78,e.pos[2]),t.add(c),t}function kM(n,e){let t=new xn;for(let i of e)i.updateMatrixWorld(!0),i.traverse(s=>{if(!s.isMesh)return;let r=s.material.fragmentShader===c1,o=s.material.fragmentShader===l1;if(!r&&!o)return;let a=s.material.clone();a.uniforms.uFlicker=s.material.uniforms.uFlicker,a.uniforms.uMode=n.uMode,a.uniforms.uPower={value:s.material.uniforms.uPower.value},n.reflectionMats.push({m:a,src:s.material}),a.transparent=!0,a.blending=ks,a.depthWrite=!1,a.side=Mn;let c=new Fe(s.geometry,a);c.applyMatrix4(s.matrixWorld),c.applyMatrix4(new at().makeScale(1,-1,1)),c.applyMatrix4(new at().makeScale(1,1.18,1)),t.add(c)});return t}function u1(n){let e=n.shared.uWetness.value;for(let{m:t,src:i}of n.reflectionMats)t.uniforms.uPower.value=i.uniforms.uPower.value*.38*e,t.uniforms.uXyz=i.uniforms.uXyz,t.uniforms.uNaive=i.uniforms.uNaive}function f1(n){let e=new Fs,{lights:t,windowPanes:i,sky:s,skyNaive:r}=n.derived,o=Object.fromEntries(t.map(x=>[x.name,x])),a=new Fe(new an(7.2,26,1,1),Qt(n,"asphalt","asphaltWet",{kind:2,uvScale:[6,22]}));a.rotation.x=-Math.PI/2,a.position.set(0,0,-5),a.material.depthWrite=!1,a.renderOrder=-2,e.add(a);let c={kind:1,uvScale:[104,84]},l=new Fe(new an(21,7),Qt(n,"brick","mortar",{kind:1,uvScale:[84,84]}));l.rotation.y=Math.PI/2,l.position.set(-2.8,3.5,-2.5),e.add(l);let h=new Fe(new an(26,7),Qt(n,"brick","mortar",c));h.rotation.y=-Math.PI/2,h.position.set(2.8,3.5,-5),e.add(h);let f=new Fe(new an(4.1,5.2),Qt(n,"brick","mortar",{kind:1,uvScale:[16,62]}));f.position.set(-.75,2.6,-13),e.add(f);let u=new Fe(new an(1.7,5.2),Qt(n,"concrete","concrete",{kind:1,uvScale:[6,38]}));u.position.set(1.95,2.6,-18),e.add(u);let d=new Fe(new an(9,7),Pu(n,s,r,3,{grad:1}));d.position.set(0,8.4,-18.4),e.add(d);for(let x of[-2.65,2.65]){let T=new Fe(new on(.3,.16,26),Qt(n,"concrete"));T.position.set(x,.08,-5),e.add(T)}let g=[],v=(x,T)=>{let I=a1(n,x,T);g.push(I),e.add(I)};o.whitepoint.text="whitepoint";let m=a1(n,o.whitepoint,{scale:.45,power:5.5});g.push(m),e.add(m);for(let x of[-1,1]){let T=new Fe(new Ai(.012,.012,2.6,6),Qt(n,"metal"));T.position.set(.7+x*2,5.45,-5.2),T.rotation.z=x*.45,e.add(T)}o.bar.text="BAR",v(o.bar,{scale:.42,tubeR:.04,power:4.5}),o.open.text="OPEN",v(o.open,{scale:.3,power:4.5}),o.cocktail.text=[r1],v(o.cocktail,{scale:.62,power:4.5}),o.live.text="LIVE",v(o.live,{scale:.34,power:4.2});let p=BM(n,o.window,i);e.add(p);let M=zM(n,o.street);e.add(M);let w=new Fe(new on(.06,2.2,1),Qt(n,"door"));w.position.set(-2.76,1.1,-2.2),e.add(w);let b=new Fe(new on(.5,.14,1.2),Qt(n,"concrete"));b.position.set(-2.6,.07,-2.2),e.add(b);let A=new Fe(new on(.95,1.15,1.9),Qt(n,"door"));A.position.set(-2.25,.58,-7.6),e.add(A);let E=new Fe(new on(1,.08,1.95),Qt(n,"metal"));E.position.set(-2.27,1.18,-7.6),E.rotation.z=.07,e.add(E);for(let[x,T]of[[-6.2,6.8],[-11.5,6.8]]){let I=new Fe(new Ai(.05,.05,T,8),Qt(n,"metal"));I.position.set(2.74,T/2,x),e.add(I)}let P=Qt(n,"metal");for(let[x,T,I]of[[-1.1,6,.5],[-6.6,5.7,.65],[-10.9,6.2,.45]]){let C=[new D(-2.8,T,x),new D(0,T-I,x+.25),new D(2.8,T+.15,x)],R=new Fe(new Bs(new ls(C),24,.014,5),P);e.add(R)}return e.add(kM(n,[...g,p,M])),e}ze.enabled=!1;var GM=[{name:"whitepoint",gas:"neon",pos:[.7,4.15,-5.2],facing:"front",nudge:[0,-.6,.7],intensity:1.6},{name:"bar",gas:"helium",pos:[-2.05,3.05,-1.6],facing:"front",nudge:[0,0,.5],intensity:1},{name:"open",gas:"mercury",pos:[2,2.75,-7.5],facing:"front",nudge:[0,0,.5],intensity:.9},{name:"cocktail",gas:"xenon",pos:[-1.75,3.15,-12.9],facing:"front",nudge:[0,0,.6],intensity:.85},{name:"live",gas:"hydrogen",pos:[-.35,2.35,-12.9],facing:"front",nudge:[0,0,.6],intensity:.7},{name:"window",window:["#1a3f8f","#8f1a2e","#1f6e52","#b1741f"],pos:[-2.8,2.6,-10.5],intensity:.6},{name:"street",gas:"sodium-lamp",pos:[1.25,4.55,4.6],intensity:2.2}],HM=n=>{if(n.nudge)return n.pos.map((t,i)=>t+n.nudge[i]);let e=Math.abs(n.pos[0])>2.5?-Math.sign(n.pos[0])*.5:0;return[n.pos[0]+e,n.pos[1],n.pos[2]]},kr=document.getElementById("alley"),Wo=kr.getContext("webgl2",{antialias:!1,alpha:!1,preserveDrawingBuffer:!0});if("drawingBufferColorSpace"in Wo)try{Wo.drawingBufferColorSpace="display-p3"}catch{}var e0=Wo.drawingBufferColorSpace==="display-p3",Xo=new qc({canvas:kr,context:Wo,antialias:!1});Xo.toneMapping=bn;var Dn=Lm(GM);Dn.lights.forEach(n=>{n.flicker={value:1}});var Iu=(n,e)=>Array.from({length:n},(t,i)=>e(i)),jl={uLightPos:{value:Iu(In,n=>new D(...Dn.lights[n]?HM(Dn.lights[n]):[0,-99,0]))},uIntensity:{value:Iu(In,n=>Dn.lights[n]?.intensity??0)},uNaiveLight:{value:Iu(In,n=>new D(...Dn.lights[n]?.naive??[0,0,0]))},uWetness:{value:.85}},t0={value:0},Zs={derived:Dn,materialsSrgb:kl,shared:jl,uMode:t0,surfaceMats:[],reflectionMats:[],clickables:[]};Dn.lights.forEach((n,e)=>{n.index=e});var $M=f1(Zs),zr=new Xt(54,1,.1,80);function A1(){let n=kr.clientWidth,e=Math.round(n*.58),t=Math.min(window.devicePixelRatio||1,2);return Xo.setSize(n,e,!1),Xo.setPixelRatio(t),zr.aspect=n/e,zr.updateProjectionMatrix(),[Math.round(n*t),Math.round(e*t)]}var[Jl,Kl]=A1(),Zi=Au(Xo,Jl,Kl,t0);Zi.output.uniforms.uP3.value=e0?1:0;window.addEventListener("resize",()=>{let[n,e]=A1();(n!==Jl||e!==Kl)&&([Jl,Kl]=[n,e],Zi.dispose?.(),Zi=Au(Xo,Jl,Kl,t0),Zi.output.uniforms.uP3.value=e0?1:0,Zi.output.uniforms.uSrgbPreview.value=Ut.srgbPreview?1:0)});var Ut={naive:!1,sodiumOnly:!1,srgbPreview:!1,kT:.5},C1=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Vr=()=>{C1&&r0(10)},m1=document.getElementById("shader-src");m1&&(m1.textContent=Zi.source);var g1=document.getElementById("mode");g1?.addEventListener("change",()=>{Ut.naive=g1.checked,t0.value=Ut.naive?1:0,document.body.dataset.mode=Ut.naive?"naive":"whitepoint",Vr()});var _1=document.getElementById("gamut-badge");_1&&(_1.textContent=e0?"display-p3 output \u2014 your display shows the wide-gamut reds":"sRGB display \u2014 the emitted cusp mapper is doing the fallback live");var x1=document.getElementById("derived");function n0(){x1&&(x1.textContent=Dn.lights.map(n=>{let[e,t,i]=n.xyz,s=e/(e+t+i),r=t/(e+t+i),o=n.window?"2700 K Planck \xD7 stained glass":n.gas==="sodium-lamp"?"Na D doublet":`${n.gas} (NIST lines)`;return`${n.name.padEnd(10)} ${o.padEnd(28)} xy ${s.toFixed(3)} ${r.toFixed(3)}   naive #${n.naive.map(a=>Math.round(a*255).toString(16).padStart(2,"0")).join("")}`}).join(`
`))}n0();var i0=Dn.lights.filter(n=>n.gas&&n.gas!=="sodium-lamp"),ni=i0[0],v1=document.getElementById("sign-tabs"),y1=document.getElementById("gas-row"),M1=document.getElementById("gas-info");function b1(n,e,t,i=""){let s=document.createElement("button");return s.className=`chip ${e?"on":""} ${i}`,s.textContent=n,s.setAttribute("aria-pressed",String(e)),s.addEventListener("click",t),s}function s0(){!v1||!y1||(v1.replaceChildren(...i0.map(n=>b1(n.name,n===ni,()=>{ni=n,s0()}))),y1.replaceChildren(...Object.keys(zl).map(n=>b1(n,ni.gas===n,()=>WM(ni,n)))),M1&&(M1.textContent=zl[ni.gas]??""),R1())}function WM(n,e){Vl(Dn,n.index,e,Ut.kT),Xl(Zs),Ru(n),n0(),s0(),Vr()}var ql=document.getElementById("spd"),S1=document.getElementById("spd-caption");function R1(){if(!ql||!ni)return;let n=ql.getContext("2d"),e=ql.width,t=ql.height;n.clearRect(0,0,e,t);let i=380,s=780,r=o=>(o-i)/(s-i)*(e-20)+10;n.fillStyle="rgba(154,160,174,0.6)",n.font="10px ui-monospace, monospace";for(let o=400;o<=750;o+=50)n.fillRect(r(o),t-14,1,4),n.fillText(`${o}`,r(o)-9,t-2);for(let[o,a]of Im(ni.gas,Ut.kT)){let c=Math.sqrt(a)*(t-26);n.strokeStyle=Pm(o),n.globalAlpha=.35+.65*Math.sqrt(a),n.lineWidth=a>.5?2:1,n.beginPath(),n.moveTo(r(o),t-16),n.lineTo(r(o),t-16-c),n.stroke()}if(n.globalAlpha=1,S1){let[o,a,c]=ni.xyz,l=o/(o+a+c),h=a/(o+a+c);S1.textContent=`${ni.name} \u2014 ${ni.gas} emission lines (NIST ASD), powers \u221D (g\xB7A/\u03BB)\xB7exp(\u2212E/kT) at kT = ${Ut.kT.toFixed(2)} eV \u2192 xy ${l.toFixed(3)} ${h.toFixed(3)}`}}var w1=document.getElementById("kt"),Ql=document.getElementById("kt-readout");function XM(n){Ut.kT=n,Ql&&(Ql.textContent=`${n.toFixed(2)} eV`);for(let e of i0)Vl(Dn,e.index,e.gas,n),Ru(e);Xl(Zs),n0(),R1(),Vr()}w1?.addEventListener("input",()=>XM(parseFloat(w1.value)));Ql&&(Ql.textContent=`${Ut.kT.toFixed(2)} eV`);s0();var E1=new po;kr.addEventListener("click",n=>{let e=kr.getBoundingClientRect(),t=new we((n.clientX-e.left)/e.width*2-1,-((n.clientY-e.top)/e.height)*2+1);E1.setFromCamera(t,zr);let i=E1.intersectObjects(Zs.clickables,!1)[0];i?.object.userData.light&&i0.includes(i.object.userData.light)&&(ni=i.object.userData.light,s0())});var Lu=document.getElementById("kill");Lu?.addEventListener("click",()=>{Ut.sodiumOnly=!Ut.sodiumOnly,Lu.classList.toggle("on",Ut.sodiumOnly),Lu.textContent=Ut.sodiumOnly?"relight the neon":"kill the neon",Vr()});var Yl=document.getElementById("rain");Yl?.addEventListener("click",()=>{let n=jl.uWetness.value<.4;jl.uWetness.value=n?.85:0,Yl.classList.toggle("on",n),Yl.setAttribute("aria-pressed",String(n)),Yl.textContent=n?"rain":"dry pavement",Vr()});var Zl=document.getElementById("srgb-preview");Zl&&e0&&(Zl.hidden=!1,Zl.addEventListener("click",()=>{Ut.srgbPreview=!Ut.srgbPreview,Zl.classList.toggle("on",Ut.srgbPreview),Zi.output.uniforms.uSrgbPreview.value=Ut.srgbPreview?1:0,Vr()}));var qM=n=>n-Math.floor(n),T1=n=>qM(Math.sin(n*12.9898)*43758.5453);function YM(n,e,t){let i=1+.022*Math.sin(e*120*Math.PI+n*1.7),s=Math.floor(e*6.3)+n*197,a=T1(s)<(t?.14:.035)?.3+.55*T1(s+.5):1;return i*a}function r0(n){zr.position.set(.26*Math.sin(n*.07),1.7+.05*Math.sin(n*.11),7.4),zr.lookAt(.1*Math.sin(n*.05),2.15,-6),Dn.lights.forEach((e,t)=>{let i=e.gas==="sodium-lamp",s=Ut.sodiumOnly&&!i?0:1,r=YM(t,n,e.name==="live")*s;e.flicker.value=r,jl.uIntensity.value[t]=e.intensity*r}),u1(Zs),Zi.render($M,zr)}var ZM=performance.now();function P1(){r0((performance.now()-ZM)/1e3),requestAnimationFrame(P1)}C1?r0(10):requestAnimationFrame(P1);window.__alley={ctx:Zs,swapGas:(n,e)=>{Vl(Dn,n,e),Xl(Zs),n0()},state:Ut,GASES:zl,tick:r0,gl:Wo,post:()=>Zi};location.search.includes("selftest")&&Promise.resolve().then(()=>(p1(),d1)).then(n=>n.selftest(window.__alley,kr));
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
