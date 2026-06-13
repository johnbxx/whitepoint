var ef=0,R0=1,tf=2;var uo=1,nf=2,dr=3,wi=0,Qt=1,Un=2,hi=0,Ls=1,pr=2,P0=3,I0=4,sf=5;var ss=100,rf=101,of=102,af=103,cf=104,lf=200,hf=201,uf=202,ff=203,da=204,pa=205,df=206,pf=207,mf=208,gf=209,_f=210,xf=211,vf=212,yf=213,Mf=214,ma=0,ga=1,_a=2,Ds=3,xa=4,va=5,ya=6,Ma=7,L0=0,bf=1,Sf=2,Mn=0,D0=1,N0=2,U0=3,F0=4,O0=5,B0=6,z0=7;var k0=300,hs=301,Os=302,Qa=303,ec=304,fo=306,ba=1e3,oi=1001,Sa=1002,Ut=1003,wf=1004;var po=1005;var At=1006,tc=1007;var us=1008;var bn=1009,V0=1010,G0=1011,mr=1012,nc=1013,Yn=1014,Zn=1015,Sn=1016,ic=1017,sc=1018,gr=1020,H0=35902,$0=35899,W0=1021,X0=1022,Fn=1023,ai=1026,fs=1027,q0=1028,rc=1029,ds=1030,oc=1031;var ac=1033,mo=33776,go=33777,_o=33778,xo=33779,cc=35840,lc=35841,hc=35842,uc=35843,fc=36196,dc=37492,pc=37496,mc=37488,gc=37489,vo=37490,_c=37491,xc=37808,vc=37809,yc=37810,Mc=37811,bc=37812,Sc=37813,wc=37814,Ec=37815,Tc=37816,Ac=37817,Cc=37818,Rc=37819,Pc=37820,Ic=37821,Lc=36492,Dc=36494,Nc=36495,Uc=36283,Fc=36284,yo=36285,Oc=36286;var $r=2300,wa=2301,fa=2302,y0=2303,M0=2400,b0=2401,S0=2402;var Ef=3200;var Y0=0,Tf=1,On="",_n="srgb",Wr="srgb-linear",Xr="linear",Ze="srgb";var Is=7680;var w0=519,Af=512,Cf=513,Rf=514,Bc=515,Pf=516,If=517,zc=518,Lf=519,E0=35044;var Mo="300 es",qn=2e3,qr=2001;function E1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function T1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Yr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Df(){let n=Yr("canvas");return n.style.display="block",n}var Iu={},or=null;function Z0(...n){let e="THREE."+n.shift();or?or("log",e,...n):console.log(e,...n)}function Nf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ee(...n){n=Nf(n);let e="THREE."+n.shift();if(or)or("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Te(...n){n=Nf(n);let e="THREE."+n.shift();if(or)or("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ea(...n){let e=n.join(" ");e in Iu||(Iu[e]=!0,Ee(...n))}function Uf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Ff={[ma]:ga,[_a]:ya,[xa]:Ma,[Ds]:va,[ga]:ma,[ya]:_a,[Ma]:xa,[va]:Ds},ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yl=Math.PI/180,Ta=180/Math.PI;function bo(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Ve(n,e,t){return Math.max(e,Math.min(t,n))}function A1(n,e){return(n%e+e)%e}function Zl(n,e,t){return(1-t)*n+t*e}function Or(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var we=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},li=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],u=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(f!==v||c!==u||l!==d||h!==g){let m=c*u+l*d+h*g+f*v;m<0&&(u=-u,d=-d,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);p=Math.sin(p*M)/w,a=Math.sin(a*M)/w,c=c*p+u*a,l=l*p+d*a,h=h*p+g*a,f=f*p+v*a}else{c=c*p+u*a,l=l*p+d*a,h=h*p+g*a,f=f*p+v*a;let M=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=M,l*=M,h*=M,f*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*f+c*d-l*u,e[t+1]=c*g+h*u+l*f-a*d,e[t+2]=l*g+h*d+a*u-c*f,e[t+3]=h*g-a*f-c*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),f=a(r/2),u=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=i+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>f){let d=2*Math.sqrt(1+i-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-i-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+c*l+o*f-a*h,this.y=i+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jl.copy(this).projectOnVector(e),this.sub(Jl)}reflect(e){return this.sub(Jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jl=new I,Lu=new li,Pe=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],M=s[1],w=s[4],S=s[7],A=s[2],E=s[5],R=s[8];return r[0]=o*v+a*M+c*A,r[3]=o*m+a*w+c*E,r[6]=o*p+a*S+c*R,r[1]=l*v+h*M+f*A,r[4]=l*m+h*w+f*E,r[7]=l*p+h*S+f*R,r[2]=u*v+d*M+g*A,r[5]=u*m+d*w+g*E,r[8]=u*p+d*S+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,u=a*c-h*r,d=l*r-o*c,g=t*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=f*v,e[1]=(s*l-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=u*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Kl.makeScale(e,t)),this}rotate(e){return this.premultiply(Kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Kl=new Pe,Du=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nu=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function C1(){let n={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ze&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ze&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===On?Xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ea("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ea("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Wr]:{primaries:e,whitePoint:i,transfer:Xr,toXYZ:Du,fromXYZ:Nu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:i,transfer:Ze,toXYZ:Du,fromXYZ:Nu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),n}var Be=C1();function Si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var qs,Aa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qs===void 0&&(qs=Yr("canvas")),qs.width=e.width,qs.height=e.height;let s=qs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=qs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Yr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Si(t[i]/255)*255):t[i]=Si(t[i]);return{data:t,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},R1=0,ar=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=bo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jl(s[o].image)):r.push(jl(s[o]))}else r=jl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function jl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Aa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}var P1=0,Ql=new I,sn=class n extends ci{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=oi,s=oi,r=At,o=us,a=Fn,c=bn,l=n.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=bo(),this.name="",this.source=new ar(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ql).x}get height(){return this.source.getSize(Ql).y}get depth(){return this.source.getSize(Ql).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ee(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==k0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ba:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ba:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=k0;sn.DEFAULT_ANISOTROPY=1;var yt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,S=(d+1)/2,A=(p+1)/2,E=(h+u)/4,R=(f+v)/4,x=(g+m)/4;return w>S&&w>A?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=E/i,r=R/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=E/s,r=x/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=R/r,s=x/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-v)/M,this.z=(u-h)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ca=class extends ci{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new sn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ar(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends Ca{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Zr=class extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ra=class extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var at=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,c,l,h,f,u,d,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,f,u,d,g,v,m)}set(e,t,i,s,r,o,a,c,l,h,f,u,d,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ys.setFromMatrixColumn(e,0).length(),r=1/Ys.setFromMatrixColumn(e,1).length(),o=1/Ys.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,d=o*f,g=a*h,v=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=d+g*l,t[5]=u-v*l,t[9]=-a*c,t[2]=v-u*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,d=c*f,g=l*h,v=l*f;t[0]=u+v*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=v+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,d=c*f,g=l*h,v=l*f;t[0]=u-v*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,d=o*f,g=a*h,v=a*f;t[0]=c*h,t[4]=g*l-d,t[8]=u*l+v,t[1]=c*f,t[5]=v*l+u,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,d=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-u*f,t[8]=g*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*f+g,t[10]=u-v*f}else if(e.order==="XZY"){let u=o*c,d=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+v,t[5]=o*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I1,e,L1)}lookAt(e,t,i){let s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ki.crossVectors(i,mn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ki.crossVectors(i,mn)),Ki.normalize(),Xo.crossVectors(mn,Ki),s[0]=Ki.x,s[4]=Xo.x,s[8]=mn.x,s[1]=Ki.y,s[5]=Xo.y,s[9]=mn.y,s[2]=Ki.z,s[6]=Xo.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],M=i[3],w=i[7],S=i[11],A=i[15],E=s[0],R=s[4],x=s[8],T=s[12],L=s[1],C=s[5],N=s[9],H=s[13],$=s[2],F=s[6],k=s[10],G=s[14],j=s[3],Q=s[7],le=s[11],xe=s[15];return r[0]=o*E+a*L+c*$+l*j,r[4]=o*R+a*C+c*F+l*Q,r[8]=o*x+a*N+c*k+l*le,r[12]=o*T+a*H+c*G+l*xe,r[1]=h*E+f*L+u*$+d*j,r[5]=h*R+f*C+u*F+d*Q,r[9]=h*x+f*N+u*k+d*le,r[13]=h*T+f*H+u*G+d*xe,r[2]=g*E+v*L+m*$+p*j,r[6]=g*R+v*C+m*F+p*Q,r[10]=g*x+v*N+m*k+p*le,r[14]=g*T+v*H+m*G+p*xe,r[3]=M*E+w*L+S*$+A*j,r[7]=M*R+w*C+S*F+A*Q,r[11]=M*x+w*N+S*k+A*le,r[15]=M*T+w*H+S*G+A*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15],M=c*d-l*u,w=a*d-l*f,S=a*u-c*f,A=o*d-l*h,E=o*u-c*h,R=o*f-a*h;return t*(v*M-m*w+p*S)-i*(g*M-m*A+p*E)+s*(g*w-v*A+p*R)-r*(g*S-v*E+m*R)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=t*a-i*o,w=t*c-s*o,S=t*l-r*o,A=i*c-s*a,E=i*l-r*a,R=s*l-r*c,x=h*v-f*g,T=h*m-u*g,L=h*p-d*g,C=f*m-u*v,N=f*p-d*v,H=u*p-d*m,$=M*H-w*N+S*C+A*L-E*T+R*x;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/$;return e[0]=(a*H-c*N+l*C)*F,e[1]=(s*N-i*H-r*C)*F,e[2]=(v*R-m*E+p*A)*F,e[3]=(u*E-f*R-d*A)*F,e[4]=(c*L-o*H-l*T)*F,e[5]=(t*H-s*L+r*T)*F,e[6]=(m*S-g*R-p*w)*F,e[7]=(h*R-u*S+d*w)*F,e[8]=(o*N-a*L+l*x)*F,e[9]=(i*L-t*N-r*x)*F,e[10]=(g*E-v*S+p*M)*F,e[11]=(f*S-h*E-d*M)*F,e[12]=(a*T-o*C-c*x)*F,e[13]=(t*C-i*T+s*x)*F,e[14]=(v*w-g*A-m*M)*F,e[15]=(h*A-f*w+u*M)*F,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,f=a+a,u=r*l,d=r*h,g=r*f,v=o*h,m=o*f,p=a*f,M=c*l,w=c*h,S=c*f,A=i.x,E=i.y,R=i.z;return s[0]=(1-(v+p))*A,s[1]=(d+S)*A,s[2]=(g-w)*A,s[3]=0,s[4]=(d-S)*E,s[5]=(1-(u+p))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+w)*R,s[9]=(m-M)*R,s[10]=(1-(u+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Ys.set(s[0],s[1],s[2]).length(),a=Ys.set(s[4],s[5],s[6]).length(),c=Ys.set(s[8],s[9],s[10]).length();r<0&&(o=-o),$n.copy(this);let l=1/o,h=1/a,f=1/c;return $n.elements[0]*=l,$n.elements[1]*=l,$n.elements[2]*=l,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=f,$n.elements[9]*=f,$n.elements[10]*=f,t.setFromRotationMatrix($n),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=qn,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===qn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===qr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=qn,c=!1){let l=this.elements,h=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),d=-(i+s)/(i-s),g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===qn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===qr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ys=new I,$n=new at,I1=new I(0,0,0),L1=new I(1,1,1),Ki=new I,Xo=new I,mn=new I,Uu=new at,Fu=new li,rs=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rs.DEFAULT_ORDER="XYZ";var cr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},D1=0,Ou=new I,Zs=new li,xi=new at,qo=new I,Br=new I,N1=new I,U1=new li,Bu=new I(1,0,0),zu=new I(0,1,0),ku=new I(0,0,1),Vu={type:"added"},F1={type:"removed"},Js={type:"childadded",child:null},e0={type:"childremoved",child:null},Dn=class n extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new rs,i=new li,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Pe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(Bu,e)}rotateY(e){return this.rotateOnAxis(zu,e)}rotateZ(e){return this.rotateOnAxis(ku,e)}translateOnAxis(e,t){return Ou.copy(e).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bu,e)}translateY(e){return this.translateOnAxis(zu,e)}translateZ(e){return this.translateOnAxis(ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qo.copy(e):qo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Br,qo,this.up):xi.lookAt(qo,Br,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(xi),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Te("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vu),Js.child=e,this.dispatchEvent(Js),Js.child=null):Te("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(F1),e0.child=e,this.dispatchEvent(e0),e0.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vu),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,N1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,U1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Dn.DEFAULT_UP=new I(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xn=class extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},O1={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new xn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function t0(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Be.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Be.workingColorSpace){return this.r=e,this.g=t,this.b=i,Be.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Be.workingColorSpace){if(e=A1(e,1),t=Ve(t,0,1),i=Ve(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=t0(o,r,e+1/3),this.g=t0(o,r,e),this.b=t0(o,r,e-1/3)}return Be.colorSpaceToWorking(this,s),this}setStyle(e,t=_n){function i(r){r!==void 0&&parseFloat(r)<1&&Ee("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){let i=Of[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return Be.workingToColorSpace($t.copy(this),e),Math.round(Ve($t.r*255,0,255))*65536+Math.round(Ve($t.g*255,0,255))*256+Math.round(Ve($t.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Be.workingColorSpace){Be.workingToColorSpace($t.copy(this),t);let i=$t.r,s=$t.g,r=$t.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Be.workingColorSpace){return Be.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=_n){Be.workingToColorSpace($t.copy(this),e);let t=$t.r,i=$t.g,s=$t.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Yo);let i=Zl(ji.h,Yo.h,t),s=Zl(ji.s,Yo.s,t),r=Zl(ji.l,Yo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new Ye;Ye.NAMES=Of;var Ns=class extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rs,this.environmentIntensity=1,this.environmentRotation=new rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wn=new I,vi=new I,n0=new I,yi=new I,Ks=new I,js=new I,Gu=new I,i0=new I,s0=new I,r0=new I,o0=new yt,a0=new yt,c0=new yt,is=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Wn.subVectors(e,t),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Wn.subVectors(s,t),vi.subVectors(i,t),n0.subVectors(e,t);let o=Wn.dot(Wn),a=Wn.dot(vi),c=Wn.dot(n0),l=vi.dot(vi),h=vi.dot(n0),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yi.x),c.addScaledVector(o,yi.y),c.addScaledVector(a,yi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return o0.setScalar(0),a0.setScalar(0),c0.setScalar(0),o0.fromBufferAttribute(e,t),a0.fromBufferAttribute(e,i),c0.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(o0,r.x),o.addScaledVector(a0,r.y),o.addScaledVector(c0,r.z),o}static isFrontFacing(e,t,i,s){return Wn.subVectors(i,t),vi.subVectors(e,t),Wn.cross(vi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Wn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Ks.subVectors(s,i),js.subVectors(r,i),i0.subVectors(e,i);let c=Ks.dot(i0),l=js.dot(i0);if(c<=0&&l<=0)return t.copy(i);s0.subVectors(e,s);let h=Ks.dot(s0),f=js.dot(s0);if(h>=0&&f<=h)return t.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Ks,o);r0.subVectors(e,r);let d=Ks.dot(r0),g=js.dot(r0);if(g>=0&&d<=g)return t.copy(r);let v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(js,a);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Gu.subVectors(r,s),a=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(Gu,a);let p=1/(m+v+u);return o=v*p,a=u*p,t.copy(i).addScaledVector(Ks,o).addScaledVector(js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},os=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zo.copy(i.boundingBox)),Zo.applyMatrix4(e.matrixWorld),this.union(Zo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),Jo.subVectors(this.max,zr),Qs.subVectors(e.a,zr),er.subVectors(e.b,zr),tr.subVectors(e.c,zr),Qi.subVectors(er,Qs),es.subVectors(tr,er),As.subVectors(Qs,tr);let t=[0,-Qi.z,Qi.y,0,-es.z,es.y,0,-As.z,As.y,Qi.z,0,-Qi.x,es.z,0,-es.x,As.z,0,-As.x,-Qi.y,Qi.x,0,-es.y,es.x,0,-As.y,As.x,0];return!l0(t,Qs,er,tr,Jo)||(t=[1,0,0,0,1,0,0,0,1],!l0(t,Qs,er,tr,Jo))?!1:(Ko.crossVectors(Qi,es),t=[Ko.x,Ko.y,Ko.z],l0(t,Qs,er,tr,Jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mi=[new I,new I,new I,new I,new I,new I,new I,new I],Xn=new I,Zo=new os,Qs=new I,er=new I,tr=new I,Qi=new I,es=new I,As=new I,zr=new I,Jo=new I,Ko=new I,Cs=new I;function l0(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Cs.fromArray(n,r);let a=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),c=e.dot(Cs),l=t.dot(Cs),h=i.dot(Cs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Tt=new I,jo=new we,B1=0,vn=class extends ci{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=E0,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jo.fromBufferAttribute(this,t),jo.applyMatrix3(e),this.setXY(t,jo.x,jo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Or(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Or(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Or(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Or(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==E0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Jr=class extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Kr=class extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Et=class extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}},z1=new os,kr=new I,h0=new I,hr=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):z1.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);let t=kr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(kr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(h0.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(h0)),this.expandByPoint(kr.copy(e.center).sub(h0))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},k1=0,Ln=new at,u0=new Dn,nr=new I,gn=new os,Vr=new os,Nt=new I,jt=class n extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E1(e)?Kr:Jr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Pe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return u0.lookAt(e),u0.updateMatrix(),this.applyMatrix4(u0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Et(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(gn.min,Vr.min),gn.expandByPoint(Nt),Nt.addVectors(gn.max,Vr.max),gn.expandByPoint(Nt)):(gn.expandByPoint(Vr.min),gn.expandByPoint(Vr.max))}gn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Nt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Nt.fromBufferAttribute(a,l),c&&(nr.fromBufferAttribute(e,l),Nt.add(nr)),s=Math.max(s,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let x=0;x<i.count;x++)a[x]=new I,c[x]=new I;let l=new I,h=new I,f=new I,u=new we,d=new we,g=new we,v=new I,m=new I;function p(x,T,L){l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,T),f.fromBufferAttribute(i,L),u.fromBufferAttribute(r,x),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,L),h.sub(l),f.sub(l),d.sub(u),g.sub(u);let C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(C),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),a[x].add(v),a[T].add(v),a[L].add(v),c[x].add(m),c[T].add(m),c[L].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,T=M.length;x<T;++x){let L=M[x],C=L.start,N=L.count;for(let H=C,$=C+N;H<$;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let w=new I,S=new I,A=new I,E=new I;function R(x){A.fromBufferAttribute(s,x),E.copy(A);let T=a[x];w.copy(T),w.sub(A.multiplyScalar(A.dot(T))).normalize(),S.crossVectors(E,T);let C=S.dot(c[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,C)}for(let x=0,T=M.length;x<T;++x){let L=M[x],C=L.start,N=L.count;for(let H=C,$=C+N;H<$;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,f=new I;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h),d=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let p=0;p<h;p++)u[g++]=l[d++]}return new vn(u,h,f)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=e(u,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var V1=0,Us=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=Ls,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=da,this.blendDst=pa,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ee(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==da&&(i.blendSrc=this.blendSrc),this.blendDst!==pa&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==w0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var bi=new I,f0=new I,Qo=new I,ts=new I,d0=new I,ea=new I,p0=new I,jr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){f0.copy(e).add(t).multiplyScalar(.5),Qo.copy(t).sub(e).normalize(),ts.copy(this.origin).sub(f0);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Qo),a=ts.dot(this.direction),c=-ts.dot(Qo),l=ts.lengthSq(),h=Math.abs(1-o*o),f,u,d,g;if(h>0)if(f=o*c-a,u=o*a-c,g=r*h,f>=0)if(u>=-g)if(u<=g){let v=1/h;f*=v,u*=v,d=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(f0).addScaledVector(Qo,u),d}intersectSphere(e,t){bi.subVectors(e.center,this.origin);let i=bi.dot(this.direction),s=bi.dot(bi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,i,s,r){d0.subVectors(t,e),ea.subVectors(i,e),p0.crossVectors(d0,ea);let o=this.direction.dot(p0),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ts.subVectors(this.origin,e);let c=a*this.direction.dot(ea.crossVectors(ts,ea));if(c<0)return null;let l=a*this.direction.dot(d0.cross(ts));if(l<0||c+l>o)return null;let h=-a*ts.dot(p0);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qr=class extends Us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.combine=L0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Hu=new at,Rs=new jr,ta=new hr,$u=new I,na=new I,ia=new I,sa=new I,m0=new I,ra=new I,Wu=new I,oa=new I,ze=class extends Dn{constructor(e=new jt,t=new Qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ra.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(m0.fromBufferAttribute(f,e),o?ra.addScaledVector(m0,h):ra.addScaledVector(m0.sub(t),h))}t.add(ra)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(r),Rs.copy(e.ray).recast(e.near),!(ta.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(ta,$u)===null||Rs.origin.distanceToSquared($u)>(e.far-e.near)**2))&&(Hu.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(Hu),!(i.boundingBox!==null&&Rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,A=w;S<A;S+=3){let E=a.getX(S),R=a.getX(S+1),x=a.getX(S+2);s=aa(this,p,e,i,l,h,f,E,R,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let M=a.getX(m),w=a.getX(m+1),S=a.getX(m+2);s=aa(this,o,e,i,l,h,f,M,w,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,A=w;S<A;S+=3){let E=S,R=S+1,x=S+2;s=aa(this,p,e,i,l,h,f,E,R,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let M=m,w=m+1,S=m+2;s=aa(this,o,e,i,l,h,f,M,w,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function G1(n,e,t,i,s,r,o,a){let c;if(e.side===Qt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===wi,a),c===null)return null;oa.copy(a),oa.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(oa);return l<t.near||l>t.far?null:{distance:l,point:oa.clone(),object:n}}function aa(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,na),n.getVertexPosition(c,ia),n.getVertexPosition(l,sa);let h=G1(n,e,t,i,na,ia,sa,Wu);if(h){let f=new I;is.getBarycoord(Wu,na,ia,sa,f),s&&(h.uv=is.getInterpolatedAttribute(s,a,c,l,f,new we)),r&&(h.uv1=is.getInterpolatedAttribute(r,a,c,l,f,new we)),o&&(h.normal=is.getInterpolatedAttribute(o,a,c,l,f,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new I,materialIndex:0};is.getNormal(na,ia,sa,u.normal),h.face=u,h.barycoord=f}return h}var Pa=class extends sn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Ut,h=Ut,f,u){super(null,o,a,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var g0=new I,H1=new I,$1=new Pe,ri=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=g0.subVectors(i,t).cross(H1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(g0),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||$1.getNormalMatrix(e),s=this.coplanarPoint(g0).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ps=new hr,W1=new we(.5,.5),ca=new I,eo=class{constructor(e=new ri,t=new ri,i=new ri,s=new ri,r=new ri,o=new ri){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],M=r[12],w=r[13],S=r[14],A=r[15];if(s[0].setComponents(l-o,d-h,p-g,A-M).normalize(),s[1].setComponents(l+o,d+h,p+g,A+M).normalize(),s[2].setComponents(l+a,d+f,p+v,A+w).normalize(),s[3].setComponents(l-a,d-f,p-v,A-w).normalize(),i)s[4].setComponents(c,u,m,S).normalize(),s[5].setComponents(l-c,d-u,p-m,A-S).normalize();else if(s[4].setComponents(l-c,d-u,p-m,A-S).normalize(),t===qn)s[5].setComponents(l+c,d+u,p+m,A+S).normalize();else if(t===qr)s[5].setComponents(c,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);let t=W1.distanceTo(e.center);return Ps.radius=.7071067811865476+t,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ca.x=s.normal.x>0?e.max.x:e.min.x,ca.y=s.normal.y>0?e.max.y:e.min.y,ca.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var to=class extends sn{constructor(e=[],t=hs,i,s,r,o,a,c,l,h){super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Ei=class extends sn{constructor(e,t,i=Yn,s,r,o,a=Ut,c=Ut,l,h=ai,f=1){if(h!==ai&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ar(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ia=class extends Ei{constructor(e,t=Yn,i=hs,s,r,o=Ut,a=Ut,c,l=ai){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},no=class extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},rn=class n extends jt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(f,2));function g(v,m,p,M,w,S,A,E,R,x,T){let L=S/R,C=A/x,N=S/2,H=A/2,$=E/2,F=R+1,k=x+1,G=0,j=0,Q=new I;for(let le=0;le<k;le++){let xe=le*C-H;for(let be=0;be<F;be++){let We=be*L-N;Q[v]=We*M,Q[m]=xe*w,Q[p]=$,l.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[p]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),f.push(be/R),f.push(1-le/x),G+=1}}for(let le=0;le<x;le++)for(let xe=0;xe<R;xe++){let be=u+xe+F*le,We=u+xe+F*(le+1),Je=u+(xe+1)+F*(le+1),Ne=u+(xe+1)+F*le;c.push(be,We,Ne),c.push(We,Je,Ne),j+=6}a.addGroup(d,j,T),d+=j,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ti=class n extends jt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,v=[],m=i/2,p=0;M(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Et(f,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(d,2));function M(){let S=new I,A=new I,E=0,R=(t-e)/i;for(let x=0;x<=r;x++){let T=[],L=x/r,C=L*(t-e)+e;for(let N=0;N<=s;N++){let H=N/s,$=H*c+a,F=Math.sin($),k=Math.cos($);A.x=C*F,A.y=-L*i+m,A.z=C*k,f.push(A.x,A.y,A.z),S.set(F,R,k).normalize(),u.push(S.x,S.y,S.z),d.push(H,1-L),T.push(g++)}v.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let L=v[T][x],C=v[T+1][x],N=v[T+1][x+1],H=v[T][x+1];(e>0||T!==0)&&(h.push(L,C,H),E+=3),(t>0||T!==r-1)&&(h.push(C,N,H),E+=3)}l.addGroup(p,E,0),p+=E}function w(S){let A=g,E=new we,R=new I,x=0,T=S===!0?e:t,L=S===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,m*L,0),u.push(0,L,0),d.push(.5,.5),g++;let C=g;for(let N=0;N<=s;N++){let $=N/s*c+a,F=Math.cos($),k=Math.sin($);R.x=T*k,R.y=m*L,R.z=T*F,f.push(R.x,R.y,R.z),u.push(0,L,0),E.x=F*.5+.5,E.y=k*.5*L+.5,d.push(E.x,E.y),g++}for(let N=0;N<s;N++){let H=A+N,$=C+N;S===!0?h.push($,$+1,H):h.push($+1,$,H),x+=3}l.addGroup(p,x,S===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},io=class n extends Ti{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ee("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new we:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,s=[],r=[],o=[],a=new I,c=new at;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ve(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ve(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},so=class extends Nn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new we){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},La=class extends so{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function J0(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+f)+(c-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Xu=new I,qu=new I,_0=new J0,x0=new J0,v0=new J0,ur=class extends Nn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(qu.subVectors(s[0],s[1]).add(s[0]),l=qu);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Xu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),_0.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,v,m),x0.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,v,m),v0.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(_0.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),x0.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),v0.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return i.set(_0.calc(c),x0.calc(c),v0.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yu(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function X1(n,e){let t=1-n;return t*t*e}function q1(n,e){return 2*(1-n)*n*e}function Y1(n,e){return n*n*e}function Gr(n,e,t,i){return X1(n,e)+q1(n,t)+Y1(n,i)}function Z1(n,e){let t=1-n;return t*t*t*e}function J1(n,e){let t=1-n;return 3*t*t*n*e}function K1(n,e){return 3*(1-n)*n*n*e}function j1(n,e){return n*n*n*e}function Hr(n,e,t,i,s){return Z1(n,e)+J1(n,t)+K1(n,i)+j1(n,s)}var Da=class extends Nn{constructor(e=new we,t=new we,i=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new we){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Hr(e,s.x,r.x,o.x,a.x),Hr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Na=class extends Nn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Hr(e,s.x,r.x,o.x,a.x),Hr(e,s.y,r.y,o.y,a.y),Hr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ua=class extends Nn{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends Nn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends Nn{constructor(e=new we,t=new we,i=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new we){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Gr(e,s.x,r.x,o.x),Gr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ro=class extends Nn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Gr(e,s.x,r.x,o.x),Gr(e,s.y,r.y,o.y),Gr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends Nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Yu(a,c.x,l.x,h.x,f.x),Yu(a,c.y,l.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new we().fromArray(s))}return this}},Q1=Object.freeze({__proto__:null,ArcCurve:La,CatmullRomCurve3:ur,CubicBezierCurve:Da,CubicBezierCurve3:Na,EllipseCurve:so,LineCurve:Ua,LineCurve3:Fa,QuadraticBezierCurve:Oa,QuadraticBezierCurve3:ro,SplineCurve:Ba});var on=class n extends jt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,f=e/a,u=t/c,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let M=p*u-o;for(let w=0;w<l;w++){let S=w*f-r;g.push(S,-M,0),v.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let w=M+l*p,S=M+l*(p+1),A=M+1+l*(p+1),E=M+1+l*p;d.push(w,S,E),d.push(S,A,E)}this.setIndex(d),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var oo=class n extends jt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new I,u=new I,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){let M=[],w=p/i,S=0;p===0&&o===0?S=.5/t:p===i&&c===Math.PI&&(S=-.5/t);for(let A=0;A<=t;A++){let E=A/t;f.x=-e*Math.cos(s+E*r)*Math.sin(o+w*a),f.y=e*Math.cos(o+w*a),f.z=e*Math.sin(s+E*r)*Math.sin(o+w*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(E+S,1-w),M.push(l++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){let w=h[p][M+1],S=h[p][M],A=h[p+1][M],E=h[p+1][M+1];(p!==0||o>0)&&d.push(w,S,E),(p!==i-1||c<Math.PI)&&d.push(S,A,E)}this.setIndex(d),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ao=class n extends jt{constructor(e=new ro(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,c=new I,l=new we,h=new I,f=[],u=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Et(f,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(d,2));function v(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),M(),p()}function m(w){h=e.getPointAt(w/t,h);let S=o.normals[w],A=o.binormals[w];for(let E=0;E<=s;E++){let R=E/s*Math.PI*2,x=Math.sin(R),T=-Math.cos(R);c.x=T*S.x+x*A.x,c.y=T*S.y+x*A.y,c.z=T*S.z+x*A.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,f.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=t;w++)for(let S=1;S<=s;S++){let A=(s+1)*(w-1)+(S-1),E=(s+1)*w+(S-1),R=(s+1)*w+S,x=(s+1)*(w-1)+S;g.push(A,E,x),g.push(E,R,x)}}function M(){for(let w=0;w<=t;w++)for(let S=0;S<=s;S++)l.x=w/t,l.y=S/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Q1[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Bs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Zu(s))s.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Zu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function qt(n){let e={};for(let t=0;t<n.length;t++){let i=Bs(n[t]);for(let s in i)e[s]=i[s]}return e}function Zu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function eg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function K0(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Be.workingColorSpace}var Bf={clone:Bs,merge:qt},tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ft=class extends Us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=eg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},fr=class extends Ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var za=class extends Us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ka=class extends Us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function la(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var as=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Va=class extends as{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:M0,endingEnd:M0}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case b0:r=e,a=2*t-i;break;case S0:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case b0:o=e,c=2*i-t;break;case S0:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,M=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,w=(-1-d)*m+(1.5+d)*v+.5*g,S=d*m-d*v;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+M*o[l+A]+w*o[c+A]+S*o[f+A];return r}},Ga=class extends as{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*f+o[c+u]*h;return r}},Ha=class extends as{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$a=class extends as{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.settings||this.DefaultSettings_,f=h.inTangents,u=h.outTangents;if(!f||!u){let v=(i-t)/(s-t),m=1-v;for(let p=0;p!==a;++p)r[p]=o[l+p]*m+o[c+p]*v;return r}let d=a*2,g=e-1;for(let v=0;v!==a;++v){let m=o[l+v],p=o[c+v],M=g*d+v*2,w=u[M],S=u[M+1],A=e*d+v*2,E=f[A],R=f[A+1],x=(i-t)/(s-t),T,L,C,N,H;for(let $=0;$<8;$++){T=x*x,L=T*x,C=1-x,N=C*C,H=N*C;let k=H*t+3*N*x*w+3*C*T*E+L*s-i;if(Math.abs(k)<1e-10)break;let G=3*N*(w-t)+6*C*x*(E-w)+3*T*(s-E);if(Math.abs(G)<1e-10)break;x=x-k/G,x=Math.max(0,Math.min(1,x))}r[v]=H*m+3*N*x*S+3*C*T*R+L*p}return r}},yn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=la(t,this.TimeBufferType),this.values=la(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:la(e.times,Array),values:la(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new $a(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case $r:t=this.InterpolantFactoryMethodDiscrete;break;case wa:t=this.InterpolantFactoryMethodLinear;break;case fa:t=this.InterpolantFactoryMethodSmooth;break;case y0:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ee("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return wa;case this.InterpolantFactoryMethodSmooth:return fa;case this.InterpolantFactoryMethodBezier:return y0}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Te("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Te("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Te("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Te("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&T1(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Te("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===fa,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*i,u=f-i,d=f+i;for(let g=0;g!==i;++g){let v=t[f+g];if(v!==t[u+g]||v!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*i,u=o*i;for(let d=0;d!==i;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=wa;var cs=class extends yn{constructor(e,t,i){super(e,t,i)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=$r;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}};Wa.prototype.ValueTypeName="color";var Xa=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}};Xa.prototype.ValueTypeName="number";var qa=class extends as{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)li.slerpFlat(r,0,o,l-a,o,l,c);return r}},co=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new qa(this.times,this.values,this.getValueSize(),e)}};co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends yn{constructor(e,t,i){super(e,t,i)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=$r;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Ya=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}};Ya.prototype.ValueTypeName="vector";var Za=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zf=new Za,Ja=class{constructor(e){this.manager=e!==void 0?e:zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ja.DEFAULT_MATERIAL_NAME="__DEFAULT";var ha=new I,ua=new li,si=new I,lo=class extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ha,ua,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,ua,si.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ha,ua,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,ua,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ns=new I,Ju=new we,Ku=new we,Wt=class extends lo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(Yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,Ju,Ku),t.subVectors(Ku,Ju)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Fs=class extends lo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var ir=-90,sr=1,Ka=class extends Dn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wt(ir,sr,e,t);s.layers=this.layers,this.add(s);let r=new Wt(ir,sr,e,t);r.layers=this.layers,this.add(r);let o=new Wt(ir,sr,e,t);o.layers=this.layers,this.add(o);let a=new Wt(ir,sr,e,t);a.layers=this.layers,this.add(a);let c=new Wt(ir,sr,e,t);c.layers=this.layers,this.add(c);let l=new Wt(ir,sr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ja=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var j0="\\[\\]\\.:\\/",ig=new RegExp("["+j0+"]","g"),Q0="[^"+j0+"]",sg="[^"+j0.replace("\\.","")+"]",rg=/((?:WC+[\/:])*)/.source.replace("WC",Q0),og=/(WCOD+)?/.source.replace("WCOD",sg),ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Q0),cg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Q0),lg=new RegExp("^"+rg+og+ag+cg+"$"),hg=["material","materials","bones","map"],T0=class{constructor(e,t,i){let s=i||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ot=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ig,"")}static parseTrackName(e){let t=lg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);hg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Te("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Te("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Te("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Te("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Te("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Te("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=T0;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var PM=new Float32Array(1);var ju=new at,ho=class{constructor(e,t,i=0,s=1/0){this.ray=new jr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Te("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ju.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ju),this}intersectObject(e,t=!0,i=[]){return A0(e,this,i,t),i.sort(Qu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)A0(e[s],this,i,t);return i.sort(Qu),i}};function Qu(n,e){return n.distance-e.distance}function A0(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)A0(r[o],e,t,!0)}}var C0=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function eh(n,e,t,i){let s=ug(i);switch(t){case W0:return n*e;case q0:return n*e/s.components*s.byteLength;case rc:return n*e/s.components*s.byteLength;case ds:return n*e*2/s.components*s.byteLength;case oc:return n*e*2/s.components*s.byteLength;case X0:return n*e*3/s.components*s.byteLength;case Fn:return n*e*4/s.components*s.byteLength;case ac:return n*e*4/s.components*s.byteLength;case mo:case go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _o:case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lc:case uc:return Math.max(n,16)*Math.max(e,8)/4;case cc:case hc:return Math.max(n,8)*Math.max(e,8)/2;case fc:case dc:case mc:case gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pc:case vo:case _c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case yc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Lc:case Dc:case Nc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Uc:case Fc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case yo:case Oc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ug(n){switch(n){case bn:case V0:return{byteLength:1,components:1};case mr:case G0:case Sn:return{byteLength:2,components:1};case ic:case sc:return{byteLength:2,components:4};case Yn:case nc:case Zn:return{byteLength:4,components:1};case H0:case $0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function cd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function dg(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let h=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let v=f[d];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var pg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mg=`#ifdef USE_ALPHAHASH
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
#endif`,gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_g=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yg=`#ifdef USE_AOMAP
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
#endif`,Mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bg=`#ifdef USE_BATCHING
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
#endif`,Sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ag=`#ifdef USE_IRIDESCENCE
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
#endif`,Cg=`#ifdef USE_BUMPMAP
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
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Og=`#define PI 3.141592653589793
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
} // validated`,Bg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zg=`vec3 transformedNormal = objectNormal;
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
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$g="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xg=`#ifdef USE_ENVMAP
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
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t_=`#ifdef USE_GRADIENTMAP
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
}`,n_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,o_=`#ifdef USE_ENVMAP
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
#endif`,a_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u_=`PhysicalMaterial material;
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
#endif`,f_=`uniform sampler2D dfgLUT;
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
}`,d_=`
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
#endif`,p_=`#if defined( RE_IndirectDiffuse )
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
#endif`,m_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,__=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w_=`#if defined( USE_POINTS_UV )
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
#endif`,E_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`#ifdef USE_MORPHTARGETS
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
#endif`,I_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,O_=`#ifdef USE_NORMALMAP
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
#endif`,B_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Q_=`float getShadowMask() {
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
}`,ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tx=`#ifdef USE_SKINNING
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
#endif`,nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ix=`#ifdef USE_SKINNING
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
#endif`,sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ax=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cx=`#ifdef USE_TRANSMISSION
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
#endif`,lx=`#ifdef USE_TRANSMISSION
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mx=`uniform sampler2D t2D;
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
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`#include <common>
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
}`,Mx=`#if DEPTH_PACKING == 3200
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
}`,bx=`#define DISTANCE
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
}`,Sx=`#define DISTANCE
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`uniform float scale;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Cx=`#include <common>
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Px=`#define LAMBERT
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
}`,Ix=`#define LAMBERT
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
}`,Lx=`#define MATCAP
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
}`,Dx=`#define MATCAP
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
}`,Nx=`#define NORMAL
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
}`,Ux=`#define NORMAL
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
}`,Fx=`#define PHONG
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
}`,Ox=`#define PHONG
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
}`,Bx=`#define STANDARD
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
}`,zx=`#define STANDARD
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
}`,kx=`#define TOON
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
}`,Vx=`#define TOON
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
}`,Gx=`uniform float size;
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
}`,Hx=`uniform vec3 diffuse;
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
}`,$x=`#include <common>
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
}`,Wx=`uniform vec3 color;
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
}`,Xx=`uniform float rotation;
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
}`,qx=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:pg,alphahash_pars_fragment:mg,alphamap_fragment:gg,alphamap_pars_fragment:_g,alphatest_fragment:xg,alphatest_pars_fragment:vg,aomap_fragment:yg,aomap_pars_fragment:Mg,batching_pars_vertex:bg,batching_vertex:Sg,begin_vertex:wg,beginnormal_vertex:Eg,bsdfs:Tg,iridescence_fragment:Ag,bumpmap_pars_fragment:Cg,clipping_planes_fragment:Rg,clipping_planes_pars_fragment:Pg,clipping_planes_pars_vertex:Ig,clipping_planes_vertex:Lg,color_fragment:Dg,color_pars_fragment:Ng,color_pars_vertex:Ug,color_vertex:Fg,common:Og,cube_uv_reflection_fragment:Bg,defaultnormal_vertex:zg,displacementmap_pars_vertex:kg,displacementmap_vertex:Vg,emissivemap_fragment:Gg,emissivemap_pars_fragment:Hg,colorspace_fragment:$g,colorspace_pars_fragment:Wg,envmap_fragment:Xg,envmap_common_pars_fragment:qg,envmap_pars_fragment:Yg,envmap_pars_vertex:Zg,envmap_physical_pars_fragment:o_,envmap_vertex:Jg,fog_vertex:Kg,fog_pars_vertex:jg,fog_fragment:Qg,fog_pars_fragment:e_,gradientmap_pars_fragment:t_,lightmap_pars_fragment:n_,lights_lambert_fragment:i_,lights_lambert_pars_fragment:s_,lights_pars_begin:r_,lights_toon_fragment:a_,lights_toon_pars_fragment:c_,lights_phong_fragment:l_,lights_phong_pars_fragment:h_,lights_physical_fragment:u_,lights_physical_pars_fragment:f_,lights_fragment_begin:d_,lights_fragment_maps:p_,lights_fragment_end:m_,lightprobes_pars_fragment:g_,logdepthbuf_fragment:__,logdepthbuf_pars_fragment:x_,logdepthbuf_pars_vertex:v_,logdepthbuf_vertex:y_,map_fragment:M_,map_pars_fragment:b_,map_particle_fragment:S_,map_particle_pars_fragment:w_,metalnessmap_fragment:E_,metalnessmap_pars_fragment:T_,morphinstance_vertex:A_,morphcolor_vertex:C_,morphnormal_vertex:R_,morphtarget_pars_vertex:P_,morphtarget_vertex:I_,normal_fragment_begin:L_,normal_fragment_maps:D_,normal_pars_fragment:N_,normal_pars_vertex:U_,normal_vertex:F_,normalmap_pars_fragment:O_,clearcoat_normal_fragment_begin:B_,clearcoat_normal_fragment_maps:z_,clearcoat_pars_fragment:k_,iridescence_pars_fragment:V_,opaque_fragment:G_,packing:H_,premultiplied_alpha_fragment:$_,project_vertex:W_,dithering_fragment:X_,dithering_pars_fragment:q_,roughnessmap_fragment:Y_,roughnessmap_pars_fragment:Z_,shadowmap_pars_fragment:J_,shadowmap_pars_vertex:K_,shadowmap_vertex:j_,shadowmask_pars_fragment:Q_,skinbase_vertex:ex,skinning_pars_vertex:tx,skinning_vertex:nx,skinnormal_vertex:ix,specularmap_fragment:sx,specularmap_pars_fragment:rx,tonemapping_fragment:ox,tonemapping_pars_fragment:ax,transmission_fragment:cx,transmission_pars_fragment:lx,uv_pars_fragment:hx,uv_pars_vertex:ux,uv_vertex:fx,worldpos_vertex:dx,background_vert:px,background_frag:mx,backgroundCube_vert:gx,backgroundCube_frag:_x,cube_vert:xx,cube_frag:vx,depth_vert:yx,depth_frag:Mx,distance_vert:bx,distance_frag:Sx,equirect_vert:wx,equirect_frag:Ex,linedashed_vert:Tx,linedashed_frag:Ax,meshbasic_vert:Cx,meshbasic_frag:Rx,meshlambert_vert:Px,meshlambert_frag:Ix,meshmatcap_vert:Lx,meshmatcap_frag:Dx,meshnormal_vert:Nx,meshnormal_frag:Ux,meshphong_vert:Fx,meshphong_frag:Ox,meshphysical_vert:Bx,meshphysical_frag:zx,meshtoon_vert:kx,meshtoon_frag:Vx,points_vert:Gx,points_frag:Hx,shadow_vert:$x,shadow_frag:Wx,sprite_vert:Xx,sprite_frag:qx},ce={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},fi={basic:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:qt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:qt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:qt([ce.points,ce.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:qt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:qt([ce.common,ce.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:qt([ce.sprite,ce.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:qt([ce.common,ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:qt([ce.lights,ce.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};fi.physical={uniforms:qt([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};var kc={r:0,b:0,g:0},Yx=new at,ld=new Pe;ld.set(-1,0,0,0,1,0,0,0,1);function Zx(n,e,t,i,s,r){let o=new Ye(0),a=s===!0?0:1,c,l,h=null,f=0,u=null;function d(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let S=M.backgroundBlurriness>0;w=e.get(w,S)}return w}function g(M){let w=!1,S=d(M);S===null?m(o,a):S&&S.isColor&&(m(S,1),w=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(M,w){let S=d(w);S&&(S.isCubeTexture||S.mapping===fo)?(l===void 0&&(l=new ze(new rn(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:Bs(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ld),l.material.toneMapped=Be.getTransfer(S.colorSpace)!==Ze,(h!==S||f!==S.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ze(new on(2,2),new Ft({name:"BackgroundMaterial",uniforms:Bs(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Be.getTransfer(S.colorSpace)!==Ze,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,w){M.getRGB(kc,K0(n)),t.buffers.color.setClear(kc.r,kc.g,kc.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:v,dispose:p}}function Jx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(C,N,H,$,F){let k=!1,G=f(C,$,H,N);r!==G&&(r=G,l(r.object)),k=d(C,$,H,F),k&&g(C,$,H,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,S(C,N,H,$),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function h(C){return n.deleteVertexArray(C)}function f(C,N,H,$){let F=$.wireframe===!0,k=i[N.id];k===void 0&&(k={},i[N.id]=k);let G=C.isInstancedMesh===!0?C.id:0,j=k[G];j===void 0&&(j={},k[G]=j);let Q=j[H.id];Q===void 0&&(Q={},j[H.id]=Q);let le=Q[F];return le===void 0&&(le=u(c()),Q[F]=le),le}function u(C){let N=[],H=[],$=[];for(let F=0;F<t;F++)N[F]=0,H[F]=0,$[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:$,object:C,attributes:{},index:null}}function d(C,N,H,$){let F=r.attributes,k=N.attributes,G=0,j=H.getAttributes();for(let Q in j)if(j[Q].location>=0){let xe=F[Q],be=k[Q];if(be===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(be=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(be=C.instanceColor)),xe===void 0||xe.attribute!==be||be&&xe.data!==be.data)return!0;G++}return r.attributesNum!==G||r.index!==$}function g(C,N,H,$){let F={},k=N.attributes,G=0,j=H.getAttributes();for(let Q in j)if(j[Q].location>=0){let xe=k[Q];xe===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(xe=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(xe=C.instanceColor));let be={};be.attribute=xe,xe&&xe.data&&(be.data=xe.data),F[Q]=be,G++}r.attributes=F,r.attributesNum=G,r.index=$}function v(){let C=r.newAttributes;for(let N=0,H=C.length;N<H;N++)C[N]=0}function m(C){p(C,0)}function p(C,N){let H=r.newAttributes,$=r.enabledAttributes,F=r.attributeDivisors;H[C]=1,$[C]===0&&(n.enableVertexAttribArray(C),$[C]=1),F[C]!==N&&(n.vertexAttribDivisor(C,N),F[C]=N)}function M(){let C=r.newAttributes,N=r.enabledAttributes;for(let H=0,$=N.length;H<$;H++)N[H]!==C[H]&&(n.disableVertexAttribArray(H),N[H]=0)}function w(C,N,H,$,F,k,G){G===!0?n.vertexAttribIPointer(C,N,H,F,k):n.vertexAttribPointer(C,N,H,$,F,k)}function S(C,N,H,$){v();let F=$.attributes,k=H.getAttributes(),G=N.defaultAttributeValues;for(let j in k){let Q=k[j];if(Q.location>=0){let le=F[j];if(le===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){let xe=le.normalized,be=le.itemSize,We=e.get(le);if(We===void 0)continue;let Je=We.buffer,Ne=We.type,Z=We.bytesPerElement,fe=Ne===n.INT||Ne===n.UNSIGNED_INT||le.gpuType===nc;if(le.isInterleavedBufferAttribute){let ie=le.data,Ae=ie.stride,Ie=le.offset;if(ie.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Q.locationSize;Ce++)p(Q.location+Ce,ie.meshPerAttribute);C.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ce=0;Ce<Q.locationSize;Ce++)m(Q.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let Ce=0;Ce<Q.locationSize;Ce++)w(Q.location+Ce,be/Q.locationSize,Ne,xe,Ae*Z,(Ie+be/Q.locationSize*Ce)*Z,fe)}else{if(le.isInstancedBufferAttribute){for(let ie=0;ie<Q.locationSize;ie++)p(Q.location+ie,le.meshPerAttribute);C.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ie=0;ie<Q.locationSize;ie++)m(Q.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let ie=0;ie<Q.locationSize;ie++)w(Q.location+ie,be/Q.locationSize,Ne,xe,be*Z,be/Q.locationSize*ie*Z,fe)}}else if(G!==void 0){let xe=G[j];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(Q.location,xe);break;case 3:n.vertexAttrib3fv(Q.location,xe);break;case 4:n.vertexAttrib4fv(Q.location,xe);break;default:n.vertexAttrib1fv(Q.location,xe)}}}}M()}function A(){T();for(let C in i){let N=i[C];for(let H in N){let $=N[H];for(let F in $){let k=$[F];for(let G in k)h(k[G].object),delete k[G];delete $[F]}}delete i[C]}}function E(C){if(i[C.id]===void 0)return;let N=i[C.id];for(let H in N){let $=N[H];for(let F in $){let k=$[F];for(let G in k)h(k[G].object),delete k[G];delete $[F]}}delete i[C.id]}function R(C){for(let N in i){let H=i[N];for(let $ in H){let F=H[$];if(F[C.id]===void 0)continue;let k=F[C.id];for(let G in k)h(k[G].object),delete k[G];delete F[C.id]}}}function x(C){for(let N in i){let H=i[N],$=C.isInstancedMesh===!0?C.id:0,F=H[$];if(F!==void 0){for(let k in F){let G=F[k];for(let j in G)h(G[j].object),delete G[j];delete F[k]}delete H[$],Object.keys(H).length===0&&delete i[N]}}}function T(){L(),o=!0,r!==s&&(r=s,l(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Kx(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function jx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Fn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let x=R===Sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==bn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Zn&&!x)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ee("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:S,maxSamples:A,samples:E}}function Qx(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ri,a=new Pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:i,w=M*4,S=p.clippingState||null;c.value=S,S=h(g,u,w,d);for(let A=0;A!==w;++A)S[A]=t[A];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=d+v*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,S=d;w!==v;++w,S+=4)o.copy(f[w]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var ps=4,kf=[.125,.215,.35,.446,.526,.582],zs=20,ev=256,So=new Fs,Vf=new Ye,th=null,nh=0,ih=0,sh=!1,tv=new I,Gc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=tv}=r;th=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(th,nh,ih),this._renderer.xr.enabled=sh,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),th=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:At,minFilter:At,generateMipmaps:!1,type:Sn,format:Fn,colorSpace:Wr,depthBuffer:!1},s=Gf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gf(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nv(r)),this._blurMaterial=sv(r,e,t),this._ggxMaterial=iv(r,e,t)}return s}_compileMaterial(e){let t=new ze(new jt,e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,i,s,r){let c=new Wt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Vf),f.toneMapping=Mn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new rn,new Qr({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Vf),p=!0);for(let w=0;w<6;w++){let S=w%3;S===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):S===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let A=this._cubeSize;_r(s,S*A,w>2?A:0,A,A),f.setRenderTarget(s),p&&f.render(v,c),f.render(e,c)}f.toneMapping=d,f.autoClear=u,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===hs||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$f()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;_r(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,So)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=0+l*1.25,d=f*u,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-ps?i-g+ps:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=g-t,_r(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,So),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,_r(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(a,So)}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Te("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[s];f.material=l;let u=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*zs-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):zs;m>zs&&Ee(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zs}`);let p=[],M=0;for(let R=0;R<zs;++R){let x=R/v,T=Math.exp(-x*x/2);p.push(T),R===0?M+=T:R<m&&(M+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:w}=this;u.dTheta.value=g,u.mipInt.value=w-i;let S=this._sizeLods[s],A=3*S*(s>w-ps?s-w+ps:0),E=4*(this._cubeSize-S);_r(t,A,E,3*S,2*S),c.setRenderTarget(t),c.render(f,So)}};function nv(n){let e=[],t=[],i=[],s=n,r=n-ps+1+kf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-ps?c=kf[o-n+ps-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*d),w=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let E=0;E<d;E++){let R=E%3*2/3-1,x=E>2?0:-1,T=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];M.set(T,v*g*E),w.set(u,m*g*E);let L=[E,E,E,E,E,E];S.set(L,p*g*E)}let A=new jt;A.setAttribute("position",new vn(M,v)),A.setAttribute("uv",new vn(w,m)),A.setAttribute("faceIndex",new vn(S,p)),i.push(new ze(A,null)),s>ps&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Gf(n,e,t){let i=new Xt(n,e,t);return i.texture.mapping=fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function iv(n,e,t){return new Ft({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ev,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function sv(n,e,t){let i=new Float32Array(zs),s=new I(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Hf(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function $f(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Wc(){return`

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
	`}var Hc=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new to(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rn(5,5,5),r=new Ft({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:hi});r.uniforms.tEquirect.value=t;let o=new ze(s,r),a=t.minFilter;return t.minFilter===us&&(t.minFilter=At),new Ka(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function rv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Qa||d===ec)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new Hc(g.height);return v.fromEquirectangularTexture(n,u),e.set(u,v),u.addEventListener("dispose",l),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,g=d===Qa||d===ec,v=d===hs||d===Os;if(g||v){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Gc(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||v&&M&&c(M)?(i===null&&(i=new Gc(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,d){return d===Qa?u.mapping=hs:d===ec&&(u.mapping=Os),u}function c(u){let d=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&d++;return d===g}function l(u){let d=u.target;d.removeEventListener("dispose",l);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function ov(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ea("WebGLRenderer: "+i+" extension not supported."),s}}}function av(n,e,t,i){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(f){let u=f.attributes;for(let d in u)e.update(u[d],n.ARRAY_BUFFER)}function l(f){let u=[],d=f.index,g=f.attributes.position,v=0;if(g===void 0)return;if(d!==null){let M=d.array;v=d.version;for(let w=0,S=M.length;w<S;w+=3){let A=M[w+0],E=M[w+1],R=M[w+2];u.push(A,E,E,R,R,A)}}else{let M=g.array;v=g.version;for(let w=0,S=M.length/3-1;w<S;w+=3){let A=w+0,E=w+1,R=w+2;u.push(A,E,E,R,R,A)}}let m=new(g.count>=65535?Kr:Jr)(u,1);m.version=v;let p=r.get(f);p&&e.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function cv(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*o),t.update(u,i,1)}function l(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*o,d),t.update(u,i,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let v=0;for(let m=0;m<d;m++)v+=u[m];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function lv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Te("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function hv(n,e,t){let i=new WeakMap,s=new yt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==f){let T=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;d===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let S=a.attributes.position.count*w,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let E=new Float32Array(S*A*4*f),R=new Zr(E,S,A,f);R.type=Zn,R.needsUpdate=!0;let x=w*4;for(let L=0;L<f;L++){let C=m[L],N=p[L],H=M[L],$=S*A*4*L;for(let F=0;F<C.count;F++){let k=F*x;d===!0&&(s.fromBufferAttribute(C,F),E[$+k+0]=s.x,E[$+k+1]=s.y,E[$+k+2]=s.z,E[$+k+3]=0),g===!0&&(s.fromBufferAttribute(N,F),E[$+k+4]=s.x,E[$+k+5]=s.y,E[$+k+6]=s.z,E[$+k+7]=0),v===!0&&(s.fromBufferAttribute(H,F),E[$+k+8]=s.x,E[$+k+9]=s.y,E[$+k+10]=s.z,E[$+k+11]=H.itemSize===4?s.w:1)}}u={count:f,texture:R,size:new we(S,A)},i.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function uv(n,e,t,i,s){let r=new WeakMap;function o(l){let h=s.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var fv={[D0]:"LINEAR_TONE_MAPPING",[N0]:"REINHARD_TONE_MAPPING",[U0]:"CINEON_TONE_MAPPING",[F0]:"ACES_FILMIC_TONE_MAPPING",[B0]:"AGX_TONE_MAPPING",[z0]:"NEUTRAL_TONE_MAPPING",[O0]:"CUSTOM_TONE_MAPPING"};function dv(n,e,t,i,s){let r=new Xt(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Ei(e,t):void 0}),o=new Xt(e,t,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),a=new jt;a.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Et([0,2,0,0,2,0],2));let c=new fr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new ze(a,c),h=new Fs(-1,1,1,-1,0,1),f=null,u=null,d=!1,g,v=null,m=[],p=!1;this.setSize=function(M,w){r.setSize(M,w),o.setSize(M,w);for(let S=0;S<m.length;S++){let A=m[S];A.setSize&&A.setSize(M,w)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;let w=r.width,S=r.height;for(let A=0;A<m.length;A++){let E=m[A];E.setSize&&E.setSize(w,S)}},this.begin=function(M,w){if(d||M.toneMapping===Mn&&m.length===0)return!1;if(v=w,w!==null){let S=w.width,A=w.height;(r.width!==S||r.height!==A)&&this.setSize(S,A)}return p===!1&&M.setRenderTarget(r),g=M.toneMapping,M.toneMapping=Mn,!0},this.hasRenderPass=function(){return p},this.end=function(M,w){M.toneMapping=g,d=!0;let S=r,A=o;for(let E=0;E<m.length;E++){let R=m[E];if(R.enabled!==!1&&(R.render(M,A,S,w),R.needsSwap!==!1)){let x=S;S=A,A=x}}if(f!==M.outputColorSpace||u!==M.toneMapping){f=M.outputColorSpace,u=M.toneMapping,c.defines={},Be.getTransfer(f)===Ze&&(c.defines.SRGB_TRANSFER="");let E=fv[u];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(v),M.render(l,h),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),c.dispose()}}var hd=new sn,ah=new Ei(1,1),ud=new Zr,fd=new Ra,dd=new to,Wf=[],Xf=[],qf=new Float32Array(16),Yf=new Float32Array(9),Zf=new Float32Array(4);function vr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Wf[s];if(r===void 0&&(r=new Float32Array(s),Wf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xc(n,e){let t=Xf[e];t===void 0&&(t=new Int32Array(e),Xf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function pv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function gv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function _v(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function xv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;Zf.set(i),n.uniformMatrix2fv(this.addr,!1,Zf),Lt(t,i)}}function vv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;Yf.set(i),n.uniformMatrix3fv(this.addr,!1,Yf),Lt(t,i)}}function yv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;qf.set(i),n.uniformMatrix4fv(this.addr,!1,qf),Lt(t,i)}}function Mv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function bv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function Sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function wv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function Ev(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Tv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function Av(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function Cv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function Rv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ah.compareFunction=t.isReversedDepthBuffer()?zc:Bc,r=ah):r=hd,t.setTexture2D(e||r,s)}function Pv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||fd,s)}function Iv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||dd,s)}function Lv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ud,s)}function Dv(n){switch(n){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return _v;case 35674:return xv;case 35675:return vv;case 35676:return yv;case 5124:case 35670:return Mv;case 35667:case 35671:return bv;case 35668:case 35672:return Sv;case 35669:case 35673:return wv;case 5125:return Ev;case 36294:return Tv;case 36295:return Av;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Lv}}function Nv(n,e){n.uniform1fv(this.addr,e)}function Uv(n,e){let t=vr(e,this.size,2);n.uniform2fv(this.addr,t)}function Fv(n,e){let t=vr(e,this.size,3);n.uniform3fv(this.addr,t)}function Ov(n,e){let t=vr(e,this.size,4);n.uniform4fv(this.addr,t)}function Bv(n,e){let t=vr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zv(n,e){let t=vr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kv(n,e){let t=vr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Vv(n,e){n.uniform1iv(this.addr,e)}function Gv(n,e){n.uniform2iv(this.addr,e)}function Hv(n,e){n.uniform3iv(this.addr,e)}function $v(n,e){n.uniform4iv(this.addr,e)}function Wv(n,e){n.uniform1uiv(this.addr,e)}function Xv(n,e){n.uniform2uiv(this.addr,e)}function qv(n,e){n.uniform3uiv(this.addr,e)}function Yv(n,e){n.uniform4uiv(this.addr,e)}function Zv(n,e,t){let i=this.cache,s=e.length,r=Xc(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=ah:o=hd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Jv(n,e,t){let i=this.cache,s=e.length,r=Xc(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||fd,r[o])}function Kv(n,e,t){let i=this.cache,s=e.length,r=Xc(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||dd,r[o])}function jv(n,e,t){let i=this.cache,s=e.length,r=Xc(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ud,r[o])}function Qv(n){switch(n){case 5126:return Nv;case 35664:return Uv;case 35665:return Fv;case 35666:return Ov;case 35674:return Bv;case 35675:return zv;case 35676:return kv;case 5124:case 35670:return Vv;case 35667:case 35671:return Gv;case 35668:case 35672:return Hv;case 35669:case 35673:return $v;case 5125:return Wv;case 36294:return Xv;case 36295:return qv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return jv}}var ch=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Dv(t.type)}},lh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qv(t.type)}},hh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},rh=/(\w+)(\])?(\[|\.)?/g;function Jf(n,e){n.seq.push(e),n.map[e.id]=e}function e2(n,e,t){let i=n.name,s=i.length;for(rh.lastIndex=0;;){let r=rh.exec(i),o=rh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Jf(t,l===void 0?new ch(a,n,e):new lh(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new hh(a),Jf(t,f)),t=f}}}var xr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);e2(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Kf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var t2=37297,n2=0;function i2(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var jf=new Pe;function s2(n){Be._getMatrix(jf,Be.workingColorSpace,n);let e=`mat3( ${jf.elements.map(t=>t.toFixed(4))} )`;switch(Be.getTransfer(n)){case Xr:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Qf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+i2(n.getShaderSource(e),a)}else return r}function r2(n,e){let t=s2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var o2={[D0]:"Linear",[N0]:"Reinhard",[U0]:"Cineon",[F0]:"ACESFilmic",[B0]:"AgX",[z0]:"Neutral",[O0]:"Custom"};function a2(n,e){let t=o2[e];return t===void 0?(Ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Vc=new I;function c2(){Be.getLuminanceCoefficients(Vc);let n=Vc.x.toFixed(4),e=Vc.y.toFixed(4),t=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function h2(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function u2(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Eo(n){return n!==""}function ed(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function td(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var f2=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(n){return n.replace(f2,p2)}var d2=new Map;function p2(n,e){let t=Fe[e];if(t===void 0){let i=d2.get(e);if(i!==void 0)t=Fe[i],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uh(t)}var m2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(n){return n.replace(m2,g2)}function g2(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function id(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var _2={[uo]:"SHADOWMAP_TYPE_PCF",[dr]:"SHADOWMAP_TYPE_VSM"};function x2(n){return _2[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var v2={[hs]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE_UV"};function y2(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":v2[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var M2={[Os]:"ENVMAP_MODE_REFRACTION"};function b2(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":M2[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var S2={[L0]:"ENVMAP_BLENDING_MULTIPLY",[bf]:"ENVMAP_BLENDING_MIX",[Sf]:"ENVMAP_BLENDING_ADD"};function w2(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":S2[n.combine]||"ENVMAP_BLENDING_NONE"}function E2(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function T2(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=x2(t),l=y2(t),h=b2(t),f=w2(t),u=E2(t),d=l2(t),g=h2(r),v=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Eo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Eo).join(`
`),p.length>0&&(p+=`
`)):(m=[id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),p=[id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Mn?a2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,r2("linearToOutputTexel",t.outputColorSpace),c2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Eo).join(`
`)),o=uh(o),o=ed(o,t),o=td(o,t),a=uh(a),a=ed(a,t),a=td(a,t),o=nd(o),a=nd(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=M+m+o,S=M+p+a,A=Kf(s,s.VERTEX_SHADER,w),E=Kf(s,s.FRAGMENT_SHADER,S);s.attachShader(v,A),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(C){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(v)||"",H=s.getShaderInfoLog(A)||"",$=s.getShaderInfoLog(E)||"",F=N.trim(),k=H.trim(),G=$.trim(),j=!0,Q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,A,E);else{let le=Qf(s,A,"vertex"),xe=Qf(s,E,"fragment");Te("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+le+`
`+xe)}else F!==""?Ee("WebGLProgram: Program Info Log:",F):(k===""||G==="")&&(Q=!1);Q&&(C.diagnostics={runnable:j,programLog:F,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(A),s.deleteShader(E),x=new xr(s,v),T=u2(s,v)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(v,t2)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=n2++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=E,this}var A2=0,fh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new dh(e),t.set(e,i)),i}},dh=class{constructor(e){this.id=A2++,this.code=e,this.usedTimes=0}};function C2(n){return n===ds||n===vo||n===yo}function R2(n,e,t,i,s,r){let o=new cr,a=new fh,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,T,L,C,N,H){let $=C.fog,F=N.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=e.get(x.envMap||k,G),Q=j&&j.mapping===fo?j.image.height:null,le=d[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ee("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let xe=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,be=xe!==void 0?xe.length:0,We=0;F.morphAttributes.position!==void 0&&(We=1),F.morphAttributes.normal!==void 0&&(We=2),F.morphAttributes.color!==void 0&&(We=3);let Je,Ne,Z,fe;if(le){let Le=fi[le];Je=Le.vertexShader,Ne=Le.fragmentShader}else Je=x.vertexShader,Ne=x.fragmentShader,a.update(x),Z=a.getVertexShaderID(x),fe=a.getFragmentShaderID(x);let ie=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Ie=N.isInstancedMesh===!0,Ce=N.isBatchedMesh===!0,ut=!!x.map,Ge=!!x.matcap,Ke=!!j,rt=!!x.aoMap,ke=!!x.lightMap,Rt=!!x.bumpMap,ft=!!x.normalMap,dn=!!x.displacementMap,D=!!x.emissiveMap,Pt=!!x.metalnessMap,He=!!x.roughnessMap,nt=x.anisotropy>0,ae=x.clearcoat>0,xt=x.dispersion>0,b=x.iridescence>0,_=x.sheen>0,O=x.transmission>0,q=nt&&!!x.anisotropyMap,K=ae&&!!x.clearcoatMap,ee=ae&&!!x.clearcoatNormalMap,oe=ae&&!!x.clearcoatRoughnessMap,W=b&&!!x.iridescenceMap,Y=b&&!!x.iridescenceThicknessMap,de=_&&!!x.sheenColorMap,ge=_&&!!x.sheenRoughnessMap,se=!!x.specularMap,te=!!x.specularColorMap,Re=!!x.specularIntensityMap,Ue=O&&!!x.transmissionMap,qe=O&&!!x.thicknessMap,P=!!x.gradientMap,ne=!!x.alphaMap,X=x.alphaTest>0,pe=!!x.alphaHash,re=!!x.extensions,J=Mn;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(J=n.toneMapping);let ye={shaderID:le,shaderType:x.type,shaderName:x.name,vertexShader:Je,fragmentShader:Ne,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Ce,batchingColor:Ce&&N._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,instancingMorph:Ie&&N.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Be.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ut,matcap:Ge,envMap:Ke,envMapMode:Ke&&j.mapping,envMapCubeUVHeight:Q,aoMap:rt,lightMap:ke,bumpMap:Rt,normalMap:ft,displacementMap:dn,emissiveMap:D,normalMapObjectSpace:ft&&x.normalMapType===Tf,normalMapTangentSpace:ft&&x.normalMapType===Y0,packedNormalMap:ft&&x.normalMapType===Y0&&C2(x.normalMap.format),metalnessMap:Pt,roughnessMap:He,anisotropy:nt,anisotropyMap:q,clearcoat:ae,clearcoatMap:K,clearcoatNormalMap:ee,clearcoatRoughnessMap:oe,dispersion:xt,iridescence:b,iridescenceMap:W,iridescenceThicknessMap:Y,sheen:_,sheenColorMap:de,sheenRoughnessMap:ge,specularMap:se,specularColorMap:te,specularIntensityMap:Re,transmission:O,transmissionMap:Ue,thicknessMap:qe,gradientMap:P,opaque:x.transparent===!1&&x.blending===Ls&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:X,alphaHash:pe,combine:x.combine,mapUv:ut&&g(x.map.channel),aoMapUv:rt&&g(x.aoMap.channel),lightMapUv:ke&&g(x.lightMap.channel),bumpMapUv:Rt&&g(x.bumpMap.channel),normalMapUv:ft&&g(x.normalMap.channel),displacementMapUv:dn&&g(x.displacementMap.channel),emissiveMapUv:D&&g(x.emissiveMap.channel),metalnessMapUv:Pt&&g(x.metalnessMap.channel),roughnessMapUv:He&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:K&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ee&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(x.sheenRoughnessMap.channel),specularMapUv:se&&g(x.specularMap.channel),specularColorMapUv:te&&g(x.specularColorMap.channel),specularIntensityMapUv:Re&&g(x.specularIntensityMap.channel),transmissionMapUv:Ue&&g(x.transmissionMap.channel),thicknessMapUv:qe&&g(x.thicknessMap.channel),alphaMapUv:ne&&g(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ft||nt),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(ut||ne),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&ft===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ae,skinning:N.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:We,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:J,decodeVideoTexture:ut&&x.map.isVideoTexture===!0&&Be.getTransfer(x.map.colorSpace)===Ze,decodeVideoTextureEmissive:D&&x.emissiveMap.isVideoTexture===!0&&Be.getTransfer(x.emissiveMap.colorSpace)===Ze,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Un,flipSided:x.side===Qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)T.push(L),T.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(p(T,x),M(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function w(x){let T=d[x.type],L;if(T){let C=fi[T];L=Bf.clone(C.uniforms)}else L=x.uniforms;return L}function S(x,T){let L=h.get(T);return L!==void 0?++L.usedTimes:(L=new T2(n,T,x,s),l.push(L),h.set(T,L)),L}function A(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function R(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:S,releaseProgram:A,releaseShaderCache:E,programs:l,dispose:R}}function P2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function I2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function sd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,g,v,m,p){let M=n[e];return M===void 0?(M={id:u.id,object:u,geometry:d,material:g,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},n[e]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=g,M.materialVariant=o(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function c(u,d,g,v,m,p){let M=a(u,d,g,v,m,p);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):t.push(M)}function l(u,d,g,v,m,p){let M=a(u,d,g,v,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,d){t.length>1&&t.sort(u||I2),i.length>1&&i.sort(d||sd),s.length>1&&s.sort(d||sd)}function f(){for(let u=e,d=n.length;u<d;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function L2(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new rd,n.set(i,[o])):s>=r.length?(o=new rd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function D2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ye};break;case"SpotLight":t={position:new I,direction:new I,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function N2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var U2=0;function F2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function O2(n){let e=new D2,t=N2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);let s=new I,r=new at,o=new at;function a(l){let h=0,f=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,M=0,w=0,S=0,A=0,E=0,R=0;l.sort(F2);for(let T=0,L=l.length;T<L;T++){let C=l[T],N=C.color,H=C.intensity,$=C.distance,F=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ds?F=C.shadow.map.texture:F=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=N.r*H,f+=N.g*H,u+=N.b*H;else if(C.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(C.sh.coefficients[k],H);R++}else if(C.isDirectionalLight){let k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let G=C.shadow,j=t.get(C);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,i.directionalShadow[d]=j,i.directionalShadowMap[d]=F,i.directionalShadowMatrix[d]=C.shadow.matrix,M++}i.directional[d]=k,d++}else if(C.isSpotLight){let k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(N).multiplyScalar(H),k.distance=$,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,i.spot[v]=k;let G=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,G.updateMatrices(C),C.castShadow&&E++),i.spotLightMatrix[v]=G.matrix,C.castShadow){let j=t.get(C);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=F,S++}v++}else if(C.isRectAreaLight){let k=e.get(C);k.color.copy(N).multiplyScalar(H),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=k,m++}else if(C.isPointLight){let k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){let G=C.shadow,j=t.get(C);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=C.shadow.matrix,w++}i.point[g]=k,g++}else if(C.isHemisphereLight){let k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(H),k.groundColor.copy(C.groundColor).multiplyScalar(H),i.hemi[p]=k,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let x=i.hash;(x.directionalLength!==d||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==M||x.numPointShadows!==w||x.numSpotShadows!==S||x.numSpotMaps!==A||x.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=S+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,x.directionalLength=d,x.pointLength=g,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=M,x.numPointShadows=w,x.numSpotShadows=S,x.numSpotMaps=A,x.numLightProbes=R,i.version=U2++)}function c(l,h){let f=0,u=0,d=0,g=0,v=0,m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let w=l[p];if(w.isDirectionalLight){let S=i.directional[f];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(w.isSpotLight){let S=i.spot[d];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(w.isRectAreaLight){let S=i.rectArea[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let S=i.point[u];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),u++}else if(w.isHemisphereLight){let S=i.hemi[v];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function od(n){let e=new O2(n),t=[],i=[],s=[];function r(u){f.camera=u,t.length=0,i.length=0,s.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function B2(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new od(n),e.set(s,[a])):r>=o.length?(a=new od(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var z2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k2=`uniform sampler2D shadow_pass;
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
}`,V2=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],G2=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],ad=new at,wo=new I,oh=new I;function H2(n,e,t){let i=new eo,s=new we,r=new we,o=new yt,a=new za,c=new ka,l={},h=t.maxTextureSize,f={[wi]:Qt,[Qt]:wi,[Un]:Un},u=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:z2,fragmentShader:k2}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new jt;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ze(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let p=this.type;this.render=function(E,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===nf&&(Ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=uo);let T=n.getRenderTarget(),L=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),N=n.state;N.setBlending(hi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let H=p!==this.type;H&&R.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(F=>F.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,F=E.length;$<F;$++){let k=E[$],G=k.shadow;if(G===void 0){Ee("WebGLShadowMap:",k,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let j=G.getFrameExtents();s.multiply(j),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,G.mapSize.y=r.y));let Q=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Q,G.map===null||H===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===dr){if(k.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Xt(s.x,s.y,{format:ds,type:Sn,minFilter:At,magFilter:At,generateMipmaps:!1}),G.map.texture.name=k.name+".shadowMap",G.map.depthTexture=new Ei(s.x,s.y,Zn),G.map.depthTexture.name=k.name+".shadowMapDepth",G.map.depthTexture.format=ai,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ut,G.map.depthTexture.magFilter=Ut}else k.isPointLight?(G.map=new Hc(s.x),G.map.depthTexture=new Ia(s.x,Yn)):(G.map=new Xt(s.x,s.y),G.map.depthTexture=new Ei(s.x,s.y,Yn)),G.map.depthTexture.name=k.name+".shadowMap",G.map.depthTexture.format=ai,this.type===uo?(G.map.depthTexture.compareFunction=Q?zc:Bc,G.map.depthTexture.minFilter=At,G.map.depthTexture.magFilter=At):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ut,G.map.depthTexture.magFilter=Ut);G.camera.updateProjectionMatrix()}let le=G.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<le;xe++){if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,xe),n.clear();else{xe===0&&(n.setRenderTarget(G.map),n.clear());let be=G.getViewport(xe);o.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),N.viewport(o)}if(k.isPointLight){let be=G.camera,We=G.matrix,Je=k.distance||be.far;Je!==be.far&&(be.far=Je,be.updateProjectionMatrix()),wo.setFromMatrixPosition(k.matrixWorld),be.position.copy(wo),oh.copy(be.position),oh.add(V2[xe]),be.up.copy(G2[xe]),be.lookAt(oh),be.updateMatrixWorld(),We.makeTranslation(-wo.x,-wo.y,-wo.z),ad.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),G._frustum.setFromProjectionMatrix(ad,be.coordinateSystem,be.reversedDepth)}else G.updateMatrices(k);i=G.getFrustum(),S(R,x,G.camera,k,this.type)}G.isPointLightShadow!==!0&&this.type===dr&&M(G,x),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,L,C)};function M(E,R){let x=e.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Xt(s.x,s.y,{format:ds,type:Sn})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,x,u,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,x,d,v,null)}function w(E,R,x,T){let L=null,C=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)L=C;else if(L=x.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let N=L.uuid,H=R.uuid,$=l[N];$===void 0&&($={},l[N]=$);let F=$[H];F===void 0&&(F=L.clone(),$[H]=F,R.addEventListener("dispose",A)),L=F}if(L.visible=R.visible,L.wireframe=R.wireframe,T===dr?L.side=R.shadowSide!==null?R.shadowSide:R.side:L.side=R.shadowSide!==null?R.shadowSide:f[R.side],L.alphaMap=R.alphaMap,L.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,L.map=R.map,L.clipShadows=R.clipShadows,L.clippingPlanes=R.clippingPlanes,L.clipIntersection=R.clipIntersection,L.displacementMap=R.displacementMap,L.displacementScale=R.displacementScale,L.displacementBias=R.displacementBias,L.wireframeLinewidth=R.wireframeLinewidth,L.linewidth=R.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let N=n.properties.get(L);N.light=x}return L}function S(E,R,x,T,L){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===dr)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let H=e.update(E),$=E.material;if(Array.isArray($)){let F=H.groups;for(let k=0,G=F.length;k<G;k++){let j=F[k],Q=$[j.materialIndex];if(Q&&Q.visible){let le=w(E,Q,T,L);E.onBeforeShadow(n,E,R,x,H,le,j),n.renderBufferDirect(x,null,H,le,E,j),E.onAfterShadow(n,E,R,x,H,le,j)}}}else if($.visible){let F=w(E,$,T,L);E.onBeforeShadow(n,E,R,x,H,F,null),n.renderBufferDirect(x,null,H,F,E,null),E.onAfterShadow(n,E,R,x,H,F,null)}}let N=E.children;for(let H=0,$=N.length;H<$;H++)S(N[H],R,x,T,L)}function A(E){E.target.removeEventListener("dispose",A);for(let x in l){let T=l[x],L=E.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}function $2(n,e){function t(){let P=!1,ne=new yt,X=null,pe=new yt(0,0,0,0);return{setMask:function(re){X!==re&&!P&&(n.colorMask(re,re,re,re),X=re)},setLocked:function(re){P=re},setClear:function(re,J,ye,Le,bt){bt===!0&&(re*=Le,J*=Le,ye*=Le),ne.set(re,J,ye,Le),pe.equals(ne)===!1&&(n.clearColor(re,J,ye,Le),pe.copy(ne))},reset:function(){P=!1,X=null,pe.set(-1,0,0,0)}}}function i(){let P=!1,ne=!1,X=null,pe=null,re=null;return{setReversed:function(J){if(ne!==J){let ye=e.get("EXT_clip_control");J?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),ne=J;let Le=re;re=null,this.setClear(Le)}},getReversed:function(){return ne},setTest:function(J){J?ie(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(J){X!==J&&!P&&(n.depthMask(J),X=J)},setFunc:function(J){if(ne&&(J=Ff[J]),pe!==J){switch(J){case ma:n.depthFunc(n.NEVER);break;case ga:n.depthFunc(n.ALWAYS);break;case _a:n.depthFunc(n.LESS);break;case Ds:n.depthFunc(n.LEQUAL);break;case xa:n.depthFunc(n.EQUAL);break;case va:n.depthFunc(n.GEQUAL);break;case ya:n.depthFunc(n.GREATER);break;case Ma:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=J}},setLocked:function(J){P=J},setClear:function(J){re!==J&&(re=J,ne&&(J=1-J),n.clearDepth(J))},reset:function(){P=!1,X=null,pe=null,re=null,ne=!1}}}function s(){let P=!1,ne=null,X=null,pe=null,re=null,J=null,ye=null,Le=null,bt=null;return{setTest:function(je){P||(je?ie(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(je){ne!==je&&!P&&(n.stencilMask(je),ne=je)},setFunc:function(je,_i,ni){(X!==je||pe!==_i||re!==ni)&&(n.stencilFunc(je,_i,ni),X=je,pe=_i,re=ni)},setOp:function(je,_i,ni){(J!==je||ye!==_i||Le!==ni)&&(n.stencilOp(je,_i,ni),J=je,ye=_i,Le=ni)},setLocked:function(je){P=je},setClear:function(je){bt!==je&&(n.clearStencil(je),bt=je)},reset:function(){P=!1,ne=null,X=null,pe=null,re=null,J=null,ye=null,Le=null,bt=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],v=null,m=!1,p=null,M=null,w=null,S=null,A=null,E=null,R=null,x=new Ye(0,0,0),T=0,L=!1,C=null,N=null,H=null,$=null,F=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,j=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Q)[1]),G=j>=1):Q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),G=j>=2);let le=null,xe={},be=n.getParameter(n.SCISSOR_BOX),We=n.getParameter(n.VIEWPORT),Je=new yt().fromArray(be),Ne=new yt().fromArray(We);function Z(P,ne,X,pe){let re=new Uint8Array(4),J=n.createTexture();n.bindTexture(P,J),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<X;ye++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(ne+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return J}let fe={};fe[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(n.DEPTH_TEST),o.setFunc(Ds),Rt(!1),ft(R0),ie(n.CULL_FACE),rt(hi);function ie(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function Ae(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function Ie(P,ne){return u[P]!==ne?(n.bindFramebuffer(P,ne),u[P]=ne,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ne),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ce(P,ne){let X=g,pe=!1;if(P){X=d.get(ne),X===void 0&&(X=[],d.set(ne,X));let re=P.textures;if(X.length!==re.length||X[0]!==n.COLOR_ATTACHMENT0){for(let J=0,ye=re.length;J<ye;J++)X[J]=n.COLOR_ATTACHMENT0+J;X.length=re.length,pe=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,pe=!0);pe&&n.drawBuffers(X)}function ut(P){return v!==P?(n.useProgram(P),v=P,!0):!1}let Ge={[ss]:n.FUNC_ADD,[rf]:n.FUNC_SUBTRACT,[of]:n.FUNC_REVERSE_SUBTRACT};Ge[af]=n.MIN,Ge[cf]=n.MAX;let Ke={[lf]:n.ZERO,[hf]:n.ONE,[uf]:n.SRC_COLOR,[da]:n.SRC_ALPHA,[_f]:n.SRC_ALPHA_SATURATE,[mf]:n.DST_COLOR,[df]:n.DST_ALPHA,[ff]:n.ONE_MINUS_SRC_COLOR,[pa]:n.ONE_MINUS_SRC_ALPHA,[gf]:n.ONE_MINUS_DST_COLOR,[pf]:n.ONE_MINUS_DST_ALPHA,[xf]:n.CONSTANT_COLOR,[vf]:n.ONE_MINUS_CONSTANT_COLOR,[yf]:n.CONSTANT_ALPHA,[Mf]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(P,ne,X,pe,re,J,ye,Le,bt,je){if(P===hi){m===!0&&(Ae(n.BLEND),m=!1);return}if(m===!1&&(ie(n.BLEND),m=!0),P!==sf){if(P!==p||je!==L){if((M!==ss||A!==ss)&&(n.blendEquation(n.FUNC_ADD),M=ss,A=ss),je)switch(P){case Ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pr:n.blendFunc(n.ONE,n.ONE);break;case P0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case I0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Te("WebGLState: Invalid blending: ",P);break}else switch(P){case Ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case P0:Te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case I0:Te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Te("WebGLState: Invalid blending: ",P);break}w=null,S=null,E=null,R=null,x.set(0,0,0),T=0,p=P,L=je}return}re=re||ne,J=J||X,ye=ye||pe,(ne!==M||re!==A)&&(n.blendEquationSeparate(Ge[ne],Ge[re]),M=ne,A=re),(X!==w||pe!==S||J!==E||ye!==R)&&(n.blendFuncSeparate(Ke[X],Ke[pe],Ke[J],Ke[ye]),w=X,S=pe,E=J,R=ye),(Le.equals(x)===!1||bt!==T)&&(n.blendColor(Le.r,Le.g,Le.b,bt),x.copy(Le),T=bt),p=P,L=!1}function ke(P,ne){P.side===Un?Ae(n.CULL_FACE):ie(n.CULL_FACE);let X=P.side===Qt;ne&&(X=!X),Rt(X),P.blending===Ls&&P.transparent===!1?rt(hi):rt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let pe=P.stencilWrite;a.setTest(pe),pe&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),D(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(P){C!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),C=P)}function ft(P){P!==ef?(ie(n.CULL_FACE),P!==N&&(P===R0?n.cullFace(n.BACK):P===tf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),N=P}function dn(P){P!==H&&(G&&n.lineWidth(P),H=P)}function D(P,ne,X){P?(ie(n.POLYGON_OFFSET_FILL),($!==ne||F!==X)&&($=ne,F=X,o.getReversed()&&(ne=-ne),n.polygonOffset(ne,X))):Ae(n.POLYGON_OFFSET_FILL)}function Pt(P){P?ie(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function He(P){P===void 0&&(P=n.TEXTURE0+k-1),le!==P&&(n.activeTexture(P),le=P)}function nt(P,ne,X){X===void 0&&(le===null?X=n.TEXTURE0+k-1:X=le);let pe=xe[X];pe===void 0&&(pe={type:void 0,texture:void 0},xe[X]=pe),(pe.type!==P||pe.texture!==ne)&&(le!==X&&(n.activeTexture(X),le=X),n.bindTexture(P,ne||fe[P]),pe.type=P,pe.texture=ne)}function ae(){let P=xe[le];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function xt(){try{n.compressedTexImage2D(...arguments)}catch(P){Te("WebGLState:",P)}}function b(){try{n.compressedTexImage3D(...arguments)}catch(P){Te("WebGLState:",P)}}function _(){try{n.texSubImage2D(...arguments)}catch(P){Te("WebGLState:",P)}}function O(){try{n.texSubImage3D(...arguments)}catch(P){Te("WebGLState:",P)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(P){Te("WebGLState:",P)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(P){Te("WebGLState:",P)}}function ee(){try{n.texStorage2D(...arguments)}catch(P){Te("WebGLState:",P)}}function oe(){try{n.texStorage3D(...arguments)}catch(P){Te("WebGLState:",P)}}function W(){try{n.texImage2D(...arguments)}catch(P){Te("WebGLState:",P)}}function Y(){try{n.texImage3D(...arguments)}catch(P){Te("WebGLState:",P)}}function de(P){return f[P]!==void 0?f[P]:n.getParameter(P)}function ge(P,ne){f[P]!==ne&&(n.pixelStorei(P,ne),f[P]=ne)}function se(P){Je.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Je.copy(P))}function te(P){Ne.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Ne.copy(P))}function Re(P,ne){let X=l.get(ne);X===void 0&&(X=new WeakMap,l.set(ne,X));let pe=X.get(P);pe===void 0&&(pe=n.getUniformBlockIndex(ne,P.name),X.set(P,pe))}function Ue(P,ne){let pe=l.get(ne).get(P);c.get(ne)!==pe&&(n.uniformBlockBinding(ne,pe,P.__bindingPointIndex),c.set(ne,pe))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},le=null,xe={},u={},d=new WeakMap,g=[],v=null,m=!1,p=null,M=null,w=null,S=null,A=null,E=null,R=null,x=new Ye(0,0,0),T=0,L=!1,C=null,N=null,H=null,$=null,F=null,Je.set(0,0,n.canvas.width,n.canvas.height),Ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:Ae,bindFramebuffer:Ie,drawBuffers:Ce,useProgram:ut,setBlending:rt,setMaterial:ke,setFlipSided:Rt,setCullFace:ft,setLineWidth:dn,setPolygonOffset:D,setScissorTest:Pt,activeTexture:He,bindTexture:nt,unbindTexture:ae,compressedTexImage2D:xt,compressedTexImage3D:b,texImage2D:W,texImage3D:Y,pixelStorei:ge,getParameter:de,updateUBOMapping:Re,uniformBlockBinding:Ue,texStorage2D:ee,texStorage3D:oe,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:q,compressedTexSubImage3D:K,scissor:se,viewport:te,reset:qe}}function W2(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new we,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,_){return g?new OffscreenCanvas(b,_):Yr("canvas")}function m(b,_,O){let q=1,K=xt(b);if((K.width>O||K.height>O)&&(q=O/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let ee=Math.floor(q*K.width),oe=Math.floor(q*K.height);u===void 0&&(u=v(ee,oe));let W=_?v(ee,oe):u;return W.width=ee,W.height=oe,W.getContext("2d").drawImage(b,0,0,ee,oe),Ee("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ee+"x"+oe+")."),W}else return"data"in b&&Ee("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function p(b){return b.generateMipmaps}function M(b){n.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(b,_,O,q,K,ee=!1){if(b!==null){if(n[b]!==void 0)return n[b];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let oe;q&&(oe=e.get("EXT_texture_norm16"),oe||Ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=_;if(_===n.RED&&(O===n.FLOAT&&(W=n.R32F),O===n.HALF_FLOAT&&(W=n.R16F),O===n.UNSIGNED_BYTE&&(W=n.R8),O===n.UNSIGNED_SHORT&&oe&&(W=oe.R16_EXT),O===n.SHORT&&oe&&(W=oe.R16_SNORM_EXT)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.R8UI),O===n.UNSIGNED_SHORT&&(W=n.R16UI),O===n.UNSIGNED_INT&&(W=n.R32UI),O===n.BYTE&&(W=n.R8I),O===n.SHORT&&(W=n.R16I),O===n.INT&&(W=n.R32I)),_===n.RG&&(O===n.FLOAT&&(W=n.RG32F),O===n.HALF_FLOAT&&(W=n.RG16F),O===n.UNSIGNED_BYTE&&(W=n.RG8),O===n.UNSIGNED_SHORT&&oe&&(W=oe.RG16_EXT),O===n.SHORT&&oe&&(W=oe.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RG8UI),O===n.UNSIGNED_SHORT&&(W=n.RG16UI),O===n.UNSIGNED_INT&&(W=n.RG32UI),O===n.BYTE&&(W=n.RG8I),O===n.SHORT&&(W=n.RG16I),O===n.INT&&(W=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGB8UI),O===n.UNSIGNED_SHORT&&(W=n.RGB16UI),O===n.UNSIGNED_INT&&(W=n.RGB32UI),O===n.BYTE&&(W=n.RGB8I),O===n.SHORT&&(W=n.RGB16I),O===n.INT&&(W=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),O===n.UNSIGNED_INT&&(W=n.RGBA32UI),O===n.BYTE&&(W=n.RGBA8I),O===n.SHORT&&(W=n.RGBA16I),O===n.INT&&(W=n.RGBA32I)),_===n.RGB&&(O===n.UNSIGNED_SHORT&&oe&&(W=oe.RGB16_EXT),O===n.SHORT&&oe&&(W=oe.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),_===n.RGBA){let Y=ee?Xr:Be.getTransfer(K);O===n.FLOAT&&(W=n.RGBA32F),O===n.HALF_FLOAT&&(W=n.RGBA16F),O===n.UNSIGNED_BYTE&&(W=Y===Ze?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&oe&&(W=oe.RGBA16_EXT),O===n.SHORT&&oe&&(W=oe.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function A(b,_){let O;return b?_===null||_===Yn||_===gr?O=n.DEPTH24_STENCIL8:_===Zn?O=n.DEPTH32F_STENCIL8:_===mr&&(O=n.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Yn||_===gr?O=n.DEPTH_COMPONENT24:_===Zn?O=n.DEPTH_COMPONENT32F:_===mr&&(O=n.DEPTH_COMPONENT16),O}function E(b,_){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ut&&b.minFilter!==At?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function R(b){let _=b.target;_.removeEventListener("dispose",R),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function x(b){let _=b.target;_.removeEventListener("dispose",x),C(_)}function T(b){let _=i.get(b);if(_.__webglInit===void 0)return;let O=b.source,q=d.get(O);if(q){let K=q[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&L(b),Object.keys(q).length===0&&d.delete(O)}i.remove(b)}function L(b){let _=i.get(b);n.deleteTexture(_.__webglTexture);let O=b.source,q=d.get(O);delete q[_.__cacheKey],o.memory.textures--}function C(b){let _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let K=0;K<_.__webglFramebuffer[q].length;K++)n.deleteFramebuffer(_.__webglFramebuffer[q][K]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=b.textures;for(let q=0,K=O.length;q<K;q++){let ee=i.get(O[q]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(O[q])}i.remove(b)}let N=0;function H(){N=0}function $(){return N}function F(b){N=b}function k(){let b=N;return b>=s.maxTextures&&Ee("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),N+=1,b}function G(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function j(b,_){let O=i.get(b);if(b.isVideoTexture&&nt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){let q=b.image;if(q===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(O,b,_);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function Q(b,_){let O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Ae(O,b,_);return}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function le(b,_){let O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Ae(O,b,_);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function xe(b,_){let O=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&O.__version!==b.version){Ie(O,b,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}let be={[ba]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[Sa]:n.MIRRORED_REPEAT},We={[Ut]:n.NEAREST,[wf]:n.NEAREST_MIPMAP_NEAREST,[po]:n.NEAREST_MIPMAP_LINEAR,[At]:n.LINEAR,[tc]:n.LINEAR_MIPMAP_NEAREST,[us]:n.LINEAR_MIPMAP_LINEAR},Je={[Af]:n.NEVER,[Lf]:n.ALWAYS,[Cf]:n.LESS,[Bc]:n.LEQUAL,[Rf]:n.EQUAL,[zc]:n.GEQUAL,[Pf]:n.GREATER,[If]:n.NOTEQUAL};function Ne(b,_){if(_.type===Zn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===At||_.magFilter===tc||_.magFilter===po||_.magFilter===us||_.minFilter===At||_.minFilter===tc||_.minFilter===po||_.minFilter===us)&&Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,be[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,be[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,be[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,We[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,We[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Je[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ut||_.minFilter!==po&&_.minFilter!==us||_.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Z(b,_){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",R));let q=_.source,K=d.get(q);K===void 0&&(K={},d.set(q,K));let ee=G(_);if(ee!==b.__cacheKey){K[ee]===void 0&&(K[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[ee].usedTimes++;let oe=K[b.__cacheKey];oe!==void 0&&(K[b.__cacheKey].usedTimes--,oe.usedTimes===0&&L(_)),b.__cacheKey=ee,b.__webglTexture=K[ee].texture}return O}function fe(b,_,O){return Math.floor(Math.floor(b/O)/_)}function ie(b,_,O,q){let ee=b.updateRanges;if(ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,O,q,_.data);else{ee.sort((ge,se)=>ge.start-se.start);let oe=0;for(let ge=1;ge<ee.length;ge++){let se=ee[oe],te=ee[ge],Re=se.start+se.count,Ue=fe(te.start,_.width,4),qe=fe(se.start,_.width,4);te.start<=Re+1&&Ue===qe&&fe(te.start+te.count-1,_.width,4)===Ue?se.count=Math.max(se.count,te.start+te.count-se.start):(++oe,ee[oe]=te)}ee.length=oe+1;let W=t.getParameter(n.UNPACK_ROW_LENGTH),Y=t.getParameter(n.UNPACK_SKIP_PIXELS),de=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ge=0,se=ee.length;ge<se;ge++){let te=ee[ge],Re=Math.floor(te.start/4),Ue=Math.ceil(te.count/4),qe=Re%_.width,P=Math.floor(Re/_.width),ne=Ue,X=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,P),t.texSubImage2D(n.TEXTURE_2D,0,qe,P,ne,X,O,q,_.data)}b.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,W),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function Ae(b,_,O){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);let K=Z(b,_),ee=_.source;t.bindTexture(q,b.__webglTexture,n.TEXTURE0+O);let oe=i.get(ee);if(ee.version!==oe.__version||K===!0){if(t.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let X=Be.getPrimaries(Be.workingColorSpace),pe=_.colorSpace===On?null:Be.getPrimaries(_.colorSpace),re=_.colorSpace===On||X===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let Y=m(_.image,!1,s.maxTextureSize);Y=ae(_,Y);let de=r.convert(_.format,_.colorSpace),ge=r.convert(_.type),se=S(_.internalFormat,de,ge,_.normalized,_.colorSpace,_.isVideoTexture);Ne(q,_);let te,Re=_.mipmaps,Ue=_.isVideoTexture!==!0,qe=oe.__version===void 0||K===!0,P=ee.dataReady,ne=E(_,Y);if(_.isDepthTexture)se=A(_.format===fs,_.type),qe&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,se,Y.width,Y.height):t.texImage2D(n.TEXTURE_2D,0,se,Y.width,Y.height,0,de,ge,null));else if(_.isDataTexture)if(Re.length>0){Ue&&qe&&t.texStorage2D(n.TEXTURE_2D,ne,se,Re[0].width,Re[0].height);for(let X=0,pe=Re.length;X<pe;X++)te=Re[X],Ue?P&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,te.width,te.height,de,ge,te.data):t.texImage2D(n.TEXTURE_2D,X,se,te.width,te.height,0,de,ge,te.data);_.generateMipmaps=!1}else Ue?(qe&&t.texStorage2D(n.TEXTURE_2D,ne,se,Y.width,Y.height),P&&ie(_,Y,de,ge)):t.texImage2D(n.TEXTURE_2D,0,se,Y.width,Y.height,0,de,ge,Y.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ue&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,se,Re[0].width,Re[0].height,Y.depth);for(let X=0,pe=Re.length;X<pe;X++)if(te=Re[X],_.format!==Fn)if(de!==null)if(Ue){if(P)if(_.layerUpdates.size>0){let re=eh(te.width,te.height,_.format,_.type);for(let J of _.layerUpdates){let ye=te.data.subarray(J*re/te.data.BYTES_PER_ELEMENT,(J+1)*re/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,J,te.width,te.height,1,de,ye)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,te.width,te.height,Y.depth,de,te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,se,te.width,te.height,Y.depth,0,te.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,te.width,te.height,Y.depth,de,ge,te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,se,te.width,te.height,Y.depth,0,de,ge,te.data)}else{Ue&&qe&&t.texStorage2D(n.TEXTURE_2D,ne,se,Re[0].width,Re[0].height);for(let X=0,pe=Re.length;X<pe;X++)te=Re[X],_.format!==Fn?de!==null?Ue?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,te.width,te.height,de,te.data):t.compressedTexImage2D(n.TEXTURE_2D,X,se,te.width,te.height,0,te.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?P&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,te.width,te.height,de,ge,te.data):t.texImage2D(n.TEXTURE_2D,X,se,te.width,te.height,0,de,ge,te.data)}else if(_.isDataArrayTexture)if(Ue){if(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,se,Y.width,Y.height,Y.depth),P)if(_.layerUpdates.size>0){let X=eh(Y.width,Y.height,_.format,_.type);for(let pe of _.layerUpdates){let re=Y.data.subarray(pe*X/Y.data.BYTES_PER_ELEMENT,(pe+1)*X/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,Y.width,Y.height,1,de,ge,re)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,de,ge,Y.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,se,Y.width,Y.height,Y.depth,0,de,ge,Y.data);else if(_.isData3DTexture)Ue?(qe&&t.texStorage3D(n.TEXTURE_3D,ne,se,Y.width,Y.height,Y.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,de,ge,Y.data)):t.texImage3D(n.TEXTURE_3D,0,se,Y.width,Y.height,Y.depth,0,de,ge,Y.data);else if(_.isFramebufferTexture){if(qe)if(Ue)t.texStorage2D(n.TEXTURE_2D,ne,se,Y.width,Y.height);else{let X=Y.width,pe=Y.height;for(let re=0;re<ne;re++)t.texImage2D(n.TEXTURE_2D,re,se,X,pe,0,de,ge,null),X>>=1,pe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let X=n.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),Y.parentNode!==X){X.appendChild(Y),f.add(_),X.onpaint=Le=>{let bt=Le.changedElements;for(let je of f)bt.includes(je.image)&&(je.needsUpdate=!0)},X.requestPaint();return}let pe=0,re=n.RGBA,J=n.RGBA,ye=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,pe,re,J,ye,Y),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Ue&&qe){let X=xt(Re[0]);t.texStorage2D(n.TEXTURE_2D,ne,se,X.width,X.height)}for(let X=0,pe=Re.length;X<pe;X++)te=Re[X],Ue?P&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,de,ge,te):t.texImage2D(n.TEXTURE_2D,X,se,de,ge,te);_.generateMipmaps=!1}else if(Ue){if(qe){let X=xt(Y);t.texStorage2D(n.TEXTURE_2D,ne,se,X.width,X.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,ge,Y)}else t.texImage2D(n.TEXTURE_2D,0,se,de,ge,Y);p(_)&&M(q),oe.__version=ee.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Ie(b,_,O){if(_.image.length!==6)return;let q=Z(b,_),K=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+O);let ee=i.get(K);if(K.version!==ee.__version||q===!0){t.activeTexture(n.TEXTURE0+O);let oe=Be.getPrimaries(Be.workingColorSpace),W=_.colorSpace===On?null:Be.getPrimaries(_.colorSpace),Y=_.colorSpace===On||oe===W?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let de=_.isCompressedTexture||_.image[0].isCompressedTexture,ge=_.image[0]&&_.image[0].isDataTexture,se=[];for(let J=0;J<6;J++)!de&&!ge?se[J]=m(_.image[J],!0,s.maxCubemapSize):se[J]=ge?_.image[J].image:_.image[J],se[J]=ae(_,se[J]);let te=se[0],Re=r.convert(_.format,_.colorSpace),Ue=r.convert(_.type),qe=S(_.internalFormat,Re,Ue,_.normalized,_.colorSpace),P=_.isVideoTexture!==!0,ne=ee.__version===void 0||q===!0,X=K.dataReady,pe=E(_,te);Ne(n.TEXTURE_CUBE_MAP,_);let re;if(de){P&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,qe,te.width,te.height);for(let J=0;J<6;J++){re=se[J].mipmaps;for(let ye=0;ye<re.length;ye++){let Le=re[ye];_.format!==Fn?Re!==null?P?X&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,Le.width,Le.height,Re,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,qe,Le.width,Le.height,0,Le.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,Le.width,Le.height,Re,Ue,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,qe,Le.width,Le.height,0,Re,Ue,Le.data)}}}else{if(re=_.mipmaps,P&&ne){re.length>0&&pe++;let J=xt(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,qe,J.width,J.height)}for(let J=0;J<6;J++)if(ge){P?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,se[J].width,se[J].height,Re,Ue,se[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,se[J].width,se[J].height,0,Re,Ue,se[J].data);for(let ye=0;ye<re.length;ye++){let bt=re[ye].image[J].image;P?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,bt.width,bt.height,Re,Ue,bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,qe,bt.width,bt.height,0,Re,Ue,bt.data)}}else{P?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Re,Ue,se[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,Re,Ue,se[J]);for(let ye=0;ye<re.length;ye++){let Le=re[ye];P?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,Re,Ue,Le.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,qe,Re,Ue,Le.image[J])}}}p(_)&&M(n.TEXTURE_CUBE_MAP),ee.__version=K.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Ce(b,_,O,q,K,ee){let oe=r.convert(O.format,O.colorSpace),W=r.convert(O.type),Y=S(O.internalFormat,oe,W,O.normalized,O.colorSpace),de=i.get(_),ge=i.get(O);if(ge.__renderTarget=_,!de.__hasExternalTextures){let se=Math.max(1,_.width>>ee),te=Math.max(1,_.height>>ee);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,ee,Y,se,te,_.depth,0,oe,W,null):t.texImage2D(K,ee,Y,se,te,0,oe,W,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),He(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,K,ge.__webglTexture,0,Pt(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,K,ge.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(b,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){let q=_.depthTexture,K=q&&q.isDepthTexture?q.type:null,ee=A(_.stencilBuffer,K),oe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;He(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(_),ee,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(_),ee,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ee,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,b)}else{let q=_.textures;for(let K=0;K<q.length;K++){let ee=q[K],oe=r.convert(ee.format,ee.colorSpace),W=r.convert(ee.type),Y=S(ee.internalFormat,oe,W,ee.normalized,ee.colorSpace);He(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(_),Y,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(_),Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ge(b,_,O){let q=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,_.depthTexture);let de=r.convert(_.depthTexture.format),ge=r.convert(_.depthTexture.type),se;_.depthTexture.format===ai?se=n.DEPTH_COMPONENT24:_.depthTexture.format===fs&&(se=n.DEPTH24_STENCIL8);for(let te=0;te<6;te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,se,_.width,_.height,0,de,ge,null)}}else j(_.depthTexture,0);let ee=K.__webglTexture,oe=Pt(_),W=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,Y=_.depthTexture.format===fs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===ai)He(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,W,ee,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Y,W,ee,0);else if(_.depthTexture.format===fs)He(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,W,ee,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Y,W,ee,0);else throw new Error("Unknown depthTexture format")}function Ke(b){let _=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let q=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=q}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let q=0;q<6;q++)Ge(_.__webglFramebuffer[q],b,q);else{let q=b.texture.mipmaps;q&&q.length>0?Ge(_.__webglFramebuffer[0],b,0):Ge(_.__webglFramebuffer,b,0)}else if(O){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=n.createRenderbuffer(),ut(_.__webglDepthbuffer[q],b,!1);else{let K=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ee)}}else{let q=b.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ut(_.__webglDepthbuffer,b,!1);else{let K=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(b,_,O){let q=i.get(b);_!==void 0&&Ce(q.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ke(b)}function ke(b){let _=b.texture,O=i.get(b),q=i.get(_);b.addEventListener("dispose",x);let K=b.textures,ee=b.isWebGLCubeRenderTarget===!0,oe=K.length>1;if(oe||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,o.memory.textures++),ee){O.__webglFramebuffer=[];for(let W=0;W<6;W++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[W]=[];for(let Y=0;Y<_.mipmaps.length;Y++)O.__webglFramebuffer[W][Y]=n.createFramebuffer()}else O.__webglFramebuffer[W]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let W=0;W<_.mipmaps.length;W++)O.__webglFramebuffer[W]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(oe)for(let W=0,Y=K.length;W<Y;W++){let de=i.get(K[W]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&He(b)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let W=0;W<K.length;W++){let Y=K[W];O.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[W]);let de=r.convert(Y.format,Y.colorSpace),ge=r.convert(Y.type),se=S(Y.internalFormat,de,ge,Y.normalized,Y.colorSpace,b.isXRRenderTarget===!0),te=Pt(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,te,se,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,O.__webglColorRenderbuffer[W])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ut(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,_);for(let W=0;W<6;W++)if(_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)Ce(O.__webglFramebuffer[W][Y],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,Y);else Ce(O.__webglFramebuffer[W],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);p(_)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let W=0,Y=K.length;W<Y;W++){let de=K[W],ge=i.get(de),se=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(se=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,ge.__webglTexture),Ne(se,de),Ce(O.__webglFramebuffer,b,de,n.COLOR_ATTACHMENT0+W,se,0),p(de)&&M(se)}t.unbindTexture()}else{let W=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(W=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(W,q.__webglTexture),Ne(W,_),_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)Ce(O.__webglFramebuffer[Y],b,_,n.COLOR_ATTACHMENT0,W,Y);else Ce(O.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,W,0);p(_)&&M(W),t.unbindTexture()}b.depthBuffer&&Ke(b)}function Rt(b){let _=b.textures;for(let O=0,q=_.length;O<q;O++){let K=_[O];if(p(K)){let ee=w(b),oe=i.get(K).__webglTexture;t.bindTexture(ee,oe),M(ee),t.unbindTexture()}}}let ft=[],dn=[];function D(b){if(b.samples>0){if(He(b)===!1){let _=b.textures,O=b.width,q=b.height,K=n.COLOR_BUFFER_BIT,ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(b),W=_.length>1;if(W)for(let de=0;de<_.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let Y=b.texture.mipmaps;Y&&Y.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let de=0;de<_.length;de++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),W){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[de]);let ge=i.get(_[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ge,0)}n.blitFramebuffer(0,0,O,q,0,0,O,q,K,n.NEAREST),c===!0&&(ft.length=0,dn.length=0,ft.push(n.COLOR_ATTACHMENT0+de),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ft.push(ee),dn.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,dn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),W)for(let de=0;de<_.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,oe.__webglColorRenderbuffer[de]);let ge=i.get(_[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Pt(b){return Math.min(s.maxSamples,b.samples)}function He(b){let _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function nt(b){let _=o.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function ae(b,_){let O=b.colorSpace,q=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Wr&&O!==On&&(Be.getTransfer(O)===Ze?(q!==Fn||K!==bn)&&Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Te("WebGLTextures: Unsupported texture color space:",O)),_}function xt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.getTextureUnits=$,this.setTextureUnits=F,this.setTexture2D=j,this.setTexture2DArray=Q,this.setTexture3D=le,this.setTextureCube=xe,this.rebindTextures=rt,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function X2(n,e){function t(i,s=On){let r,o=Be.getTransfer(s);if(i===bn)return n.UNSIGNED_BYTE;if(i===ic)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===H0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$0)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===V0)return n.BYTE;if(i===G0)return n.SHORT;if(i===mr)return n.UNSIGNED_SHORT;if(i===nc)return n.INT;if(i===Yn)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===Sn)return n.HALF_FLOAT;if(i===W0)return n.ALPHA;if(i===X0)return n.RGB;if(i===Fn)return n.RGBA;if(i===ai)return n.DEPTH_COMPONENT;if(i===fs)return n.DEPTH_STENCIL;if(i===q0)return n.RED;if(i===rc)return n.RED_INTEGER;if(i===ds)return n.RG;if(i===oc)return n.RG_INTEGER;if(i===ac)return n.RGBA_INTEGER;if(i===mo||i===go||i===_o||i===xo)if(o===Ze)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cc||i===lc||i===hc||i===uc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fc||i===dc||i===pc||i===mc||i===gc||i===vo||i===_c)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===fc||i===dc)return o===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===pc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===mc)return r.COMPRESSED_R11_EAC;if(i===gc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===vo)return r.COMPRESSED_RG11_EAC;if(i===_c)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===xc||i===vc||i===yc||i===Mc||i===bc||i===Sc||i===wc||i===Ec||i===Tc||i===Ac||i===Cc||i===Rc||i===Pc||i===Ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ec)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ac)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pc)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ic)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lc||i===Dc||i===Nc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Lc)return o===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uc||i===Fc||i===yo||i===Oc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Uc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var q2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y2=`
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

}`,ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new no(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ft({vertexShader:q2,fragmentShader:Y2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new on(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mh=class extends ci{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null,v=typeof XRWebGLBinding<"u",m=new ph,p={},M=t.getContextAttributes(),w=null,S=null,A=[],E=[],R=new we,x=null,T=new Wt;T.viewport=new yt;let L=new Wt;L.viewport=new yt;let C=[T,L],N=new ja,H=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let fe=A[Z];return fe===void 0&&(fe=new lr,A[Z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Z){let fe=A[Z];return fe===void 0&&(fe=new lr,A[Z]=fe),fe.getGripSpace()},this.getHand=function(Z){let fe=A[Z];return fe===void 0&&(fe=new lr,A[Z]=fe),fe.getHandSpace()};function F(Z){let fe=E.indexOf(Z.inputSource);if(fe===-1)return;let ie=A[fe];ie!==void 0&&(ie.update(Z.inputSource,Z.frame,l||o),ie.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",G);for(let Z=0;Z<A.length;Z++){let fe=E[Z];fe!==null&&(E[Z]=null,A[Z].disconnect(fe))}H=null,$=null,m.reset();for(let Z in p)delete p[Z];e.setRenderTarget(w),d=null,u=null,f=null,s=null,S=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",k),s.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ae=null,Ie=null;M.depth&&(Ie=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=M.stencil?fs:ai,Ae=M.stencil?gr:Yn);let Ce={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ce),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Xt(u.textureWidth,u.textureHeight,{format:Fn,type:bn,depthTexture:new Ei(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let ie={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Xt(d.framebufferWidth,d.framebufferHeight,{format:Fn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ne.setContext(s),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(Z){for(let fe=0;fe<Z.removed.length;fe++){let ie=Z.removed[fe],Ae=E.indexOf(ie);Ae>=0&&(E[Ae]=null,A[Ae].disconnect(ie))}for(let fe=0;fe<Z.added.length;fe++){let ie=Z.added[fe],Ae=E.indexOf(ie);if(Ae===-1){for(let Ce=0;Ce<A.length;Ce++)if(Ce>=E.length){E.push(ie),Ae=Ce;break}else if(E[Ce]===null){E[Ce]=ie,Ae=Ce;break}if(Ae===-1)break}let Ie=A[Ae];Ie&&Ie.connect(ie)}}let j=new I,Q=new I;function le(Z,fe,ie){j.setFromMatrixPosition(fe.matrixWorld),Q.setFromMatrixPosition(ie.matrixWorld);let Ae=j.distanceTo(Q),Ie=fe.projectionMatrix.elements,Ce=ie.projectionMatrix.elements,ut=Ie[14]/(Ie[10]-1),Ge=Ie[14]/(Ie[10]+1),Ke=(Ie[9]+1)/Ie[5],rt=(Ie[9]-1)/Ie[5],ke=(Ie[8]-1)/Ie[0],Rt=(Ce[8]+1)/Ce[0],ft=ut*ke,dn=ut*Rt,D=Ae/(-ke+Rt),Pt=D*-ke;if(fe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Pt),Z.translateZ(D),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ie[10]===-1)Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{let He=ut+D,nt=Ge+D,ae=ft-Pt,xt=dn+(Ae-Pt),b=Ke*Ge/nt*He,_=rt*Ge/nt*He;Z.projectionMatrix.makePerspective(ae,xt,b,_,He,nt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function xe(Z,fe){fe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(fe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let fe=Z.near,ie=Z.far;m.texture!==null&&(m.depthNear>0&&(fe=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),N.near=L.near=T.near=fe,N.far=L.far=T.far=ie,(H!==N.near||$!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),H=N.near,$=N.far),N.layers.mask=Z.layers.mask|6,T.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;let Ae=Z.parent,Ie=N.cameras;xe(N,Ae);for(let Ce=0;Ce<Ie.length;Ce++)xe(Ie[Ce],Ae);Ie.length===2?le(N,T,L):N.projectionMatrix.copy(T.projectionMatrix),be(Z,N,Ae)};function be(Z,fe,ie){ie===null?Z.matrix.copy(fe.matrixWorld):(Z.matrix.copy(ie.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(fe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ta*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Z){return p[Z]};let We=null;function Je(Z,fe){if(h=fe.getViewerPose(l||o),g=fe,h!==null){let ie=h.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let Ae=!1;ie.length!==N.cameras.length&&(N.cameras.length=0,Ae=!0);for(let Ge=0;Ge<ie.length;Ge++){let Ke=ie[Ge],rt=null;if(d!==null)rt=d.getViewport(Ke);else{let Rt=f.getViewSubImage(u,Ke);rt=Rt.viewport,Ge===0&&(e.setRenderTargetTextures(S,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(S))}let ke=C[Ge];ke===void 0&&(ke=new Wt,ke.layers.enable(Ge),ke.viewport=new yt,C[Ge]=ke),ke.matrix.fromArray(Ke.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ke.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(rt.x,rt.y,rt.width,rt.height),Ge===0&&(N.matrix.copy(ke.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ae===!0&&N.cameras.push(ke)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let Ge=f.getDepthInformation(ie[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,s.renderState)}if(Ie&&Ie.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let Ge=0;Ge<ie.length;Ge++){let Ke=ie[Ge].camera;if(Ke){let rt=p[Ke];rt||(rt=new no,p[Ke]=rt);let ke=f.getCameraImage(Ke);rt.sourceTexture=ke}}}}for(let ie=0;ie<A.length;ie++){let Ae=E[ie],Ie=A[ie];Ae!==null&&Ie!==void 0&&Ie.update(Ae,fe,l||o)}We&&We(Z,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}let Ne=new cd;Ne.setAnimationLoop(Je),this.setAnimationLoop=function(Z){We=Z},this.dispose=function(){}}},Z2=new at,pd=new Pe;pd.set(-1,0,0,0,1,0,0,0,1);function J2(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,K0(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,w,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),w=M.envMap,S=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Z2.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(pd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function K2(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){let S=w.program;i.uniformBlockBinding(M,S)}function l(M,w){let S=s[M.id];S===void 0&&(g(M),S=h(M),s[M.id]=S,M.addEventListener("dispose",m));let A=w.program;i.updateUBOMapping(M,A);let E=e.render.frame;r[M.id]!==E&&(u(M),r[M.id]=E)}function h(M){let w=f();M.__bindingPointIndex=w;let S=n.createBuffer(),A=M.__size,E=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,S),S}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let w=s[M.id],S=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let E=0,R=S.length;E<R;E++){let x=Array.isArray(S[E])?S[E]:[S[E]];for(let T=0,L=x.length;T<L;T++){let C=x[T];if(d(C,E,T,A)===!0){let N=C.__offset,H=Array.isArray(C.value)?C.value:[C.value],$=0;for(let F=0;F<H.length;F++){let k=H[F],G=v(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,N+$,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):ArrayBuffer.isView(k)?C.__data.set(new k.constructor(k.buffer,k.byteOffset,C.__data.length)):(k.toArray(C.__data,$),$+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,w,S,A){let E=M.value,R=w+"_"+S;if(A[R]===void 0)return typeof E=="number"||typeof E=="boolean"?A[R]=E:ArrayBuffer.isView(E)?A[R]=E.slice():A[R]=E.clone(),!0;{let x=A[R];if(typeof E=="number"||typeof E=="boolean"){if(x!==E)return A[R]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(x.equals(E)===!1)return x.copy(E),!0}}return!1}function g(M){let w=M.uniforms,S=0,A=16;for(let R=0,x=w.length;R<x;R++){let T=Array.isArray(w[R])?w[R]:[w[R]];for(let L=0,C=T.length;L<C;L++){let N=T[L],H=Array.isArray(N.value)?N.value:[N.value];for(let $=0,F=H.length;$<F;$++){let k=H[$],G=v(k),j=S%A,Q=j%G.boundary,le=j+Q;S+=Q,le!==0&&A-le<G.storage&&(S+=A-le),N.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=G.storage}}}let E=S%A;return E>0&&(S+=A-E),M.__size=S,M.__cache={},this}function v(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Ee("WebGLRenderer: Unsupported uniform value type.",M),w}function m(M){let w=M.target;w.removeEventListener("dispose",m);let S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var j2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ui=null;function Q2(){return ui===null&&(ui=new Pa(j2,16,16,ds,Sn),ui.name="DFG_LUT",ui.minFilter=At,ui.magFilter=At,ui.wrapS=oi,ui.wrapT=oi,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}var $c=class{constructor(e={}){let{canvas:t=Df(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=bn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let v=d,m=new Set([ac,oc,rc]),p=new Set([bn,Yn,mr,gr,ic,sc]),M=new Uint32Array(4),w=new Int32Array(4),S=new I,A=null,E=null,R=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,C=!1,N=null;this._outputColorSpace=_n;let H=0,$=0,F=null,k=-1,G=null,j=new yt,Q=new yt,le=null,xe=new Ye(0),be=0,We=t.width,Je=t.height,Ne=1,Z=null,fe=null,ie=new yt(0,0,We,Je),Ae=new yt(0,0,We,Je),Ie=!1,Ce=new eo,ut=!1,Ge=!1,Ke=new at,rt=new I,ke=new yt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function dn(){return F===null?Ne:1}let D=i;function Pt(y,U){return t.getContext(y,U)}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",Le,!1),D===null){let U="webgl2";if(D=Pt(U,y),D===null)throw Pt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Te("WebGLRenderer: "+y.message),y}let He,nt,ae,xt,b,_,O,q,K,ee,oe,W,Y,de,ge,se,te,Re,Ue,qe,P,ne,X;function pe(){He=new ov(D),He.init(),P=new X2(D,He),nt=new jx(D,He,e,P),ae=new $2(D,He),nt.reversedDepthBuffer&&u&&ae.buffers.depth.setReversed(!0),xt=new lv(D),b=new P2,_=new W2(D,He,ae,b,nt,P,xt),O=new rv(L),q=new dg(D),ne=new Jx(D,q),K=new av(D,q,xt,ne),ee=new uv(D,K,q,ne,xt),Re=new hv(D,nt,_),ge=new Qx(b),oe=new R2(L,O,He,nt,ne,ge),W=new J2(L,b),Y=new L2,de=new B2(He),te=new Zx(L,O,ae,ee,g,c),se=new H2(L,ee,nt),X=new K2(D,xt,nt,ae),Ue=new Kx(D,He,xt),qe=new cv(D,He,xt),xt.programs=oe.programs,L.capabilities=nt,L.extensions=He,L.properties=b,L.renderLists=Y,L.shadowMap=se,L.state=ae,L.info=xt}pe(),v!==bn&&(T=new dv(v,t.width,t.height,s,r));let re=new mh(L,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=He.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=He.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(y){y!==void 0&&(Ne=y,this.setSize(We,Je,!1))},this.getSize=function(y){return y.set(We,Je)},this.setSize=function(y,U,V=!0){if(re.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}We=y,Je=U,t.width=Math.floor(y*Ne),t.height=Math.floor(U*Ne),V===!0&&(t.style.width=y+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(We*Ne,Je*Ne).floor()},this.setDrawingBufferSize=function(y,U,V){We=y,Je=U,Ne=V,t.width=Math.floor(y*V),t.height=Math.floor(U*V),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(v===bn){Te("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){Ee("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(j)},this.getViewport=function(y){return y.copy(ie)},this.setViewport=function(y,U,V,B){y.isVector4?ie.set(y.x,y.y,y.z,y.w):ie.set(y,U,V,B),ae.viewport(j.copy(ie).multiplyScalar(Ne).round())},this.getScissor=function(y){return y.copy(Ae)},this.setScissor=function(y,U,V,B){y.isVector4?Ae.set(y.x,y.y,y.z,y.w):Ae.set(y,U,V,B),ae.scissor(Q.copy(Ae).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(y){ae.setScissorTest(Ie=y)},this.setOpaqueSort=function(y){Z=y},this.setTransparentSort=function(y){fe=y},this.getClearColor=function(y){return y.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,V=!0){let B=0;if(y){let z=!1;if(F!==null){let ue=F.texture.format;z=m.has(ue)}if(z){let ue=F.texture.type,_e=p.has(ue),he=te.getClearColor(),ve=te.getClearAlpha(),Me=he.r,De=he.g,Oe=he.b;_e?(M[0]=Me,M[1]=De,M[2]=Oe,M[3]=ve,D.clearBufferuiv(D.COLOR,0,M)):(w[0]=Me,w[1]=De,w[2]=Oe,w[3]=ve,D.clearBufferiv(D.COLOR,0,w))}else B|=D.COLOR_BUFFER_BIT}U&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),N=y},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),te.dispose(),Y.dispose(),de.dispose(),b.dispose(),O.dispose(),ee.dispose(),ne.dispose(),X.dispose(),oe.dispose(),re.dispose(),re.removeEventListener("sessionstart",Su),re.removeEventListener("sessionend",wu),Ts.stop()};function J(y){y.preventDefault(),Z0("WebGLRenderer: Context Lost."),C=!0}function ye(){Z0("WebGLRenderer: Context Restored."),C=!1;let y=xt.autoReset,U=se.enabled,V=se.autoUpdate,B=se.needsUpdate,z=se.type;pe(),xt.autoReset=y,se.enabled=U,se.autoUpdate=V,se.needsUpdate=B,se.type=z}function Le(y){Te("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function bt(y){let U=y.target;U.removeEventListener("dispose",bt),je(U)}function je(y){_i(y),b.remove(y)}function _i(y){let U=b.get(y).programs;U!==void 0&&(U.forEach(function(V){oe.releaseProgram(V)}),y.isShaderMaterial&&oe.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,V,B,z,ue){U===null&&(U=Rt);let _e=z.isMesh&&z.matrixWorld.determinant()<0,he=v1(y,U,V,B,z);ae.setMaterial(B,_e);let ve=V.index,Me=1;if(B.wireframe===!0){if(ve=K.getWireframeAttribute(V),ve===void 0)return;Me=2}let De=V.drawRange,Oe=V.attributes.position,Se=De.start*Me,Qe=(De.start+De.count)*Me;ue!==null&&(Se=Math.max(Se,ue.start*Me),Qe=Math.min(Qe,(ue.start+ue.count)*Me)),ve!==null?(Se=Math.max(Se,0),Qe=Math.min(Qe,ve.count)):Oe!=null&&(Se=Math.max(Se,0),Qe=Math.min(Qe,Oe.count));let St=Qe-Se;if(St<0||St===1/0)return;ne.setup(z,B,he,V,ve);let vt,et=Ue;if(ve!==null&&(vt=q.get(ve),et=qe,et.setIndex(vt)),z.isMesh)B.wireframe===!0?(ae.setLineWidth(B.wireframeLinewidth*dn()),et.setMode(D.LINES)):et.setMode(D.TRIANGLES);else if(z.isLine){let Gt=B.linewidth;Gt===void 0&&(Gt=1),ae.setLineWidth(Gt*dn()),z.isLineSegments?et.setMode(D.LINES):z.isLineLoop?et.setMode(D.LINE_LOOP):et.setMode(D.LINE_STRIP)}else z.isPoints?et.setMode(D.POINTS):z.isSprite&&et.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(He.get("WEBGL_multi_draw"))et.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Gt=z._multiDrawStarts,me=z._multiDrawCounts,pn=z._multiDrawCount,Xe=ve?q.get(ve).bytesPerElement:1,In=b.get(B).currentProgram.getUniforms();for(let ii=0;ii<pn;ii++)In.setValue(D,"_gl_DrawID",ii),et.render(Gt[ii]/Xe,me[ii])}else if(z.isInstancedMesh)et.renderInstances(Se,St,z.count);else if(V.isInstancedBufferGeometry){let Gt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,me=Math.min(V.instanceCount,Gt);et.renderInstances(Se,St,me)}else et.render(Se,St)};function ni(y,U,V){y.transparent===!0&&y.side===Un&&y.forceSinglePass===!1?(y.side=Qt,y.needsUpdate=!0,Wo(y,U,V),y.side=wi,y.needsUpdate=!0,Wo(y,U,V),y.side=Un):Wo(y,U,V)}this.compile=function(y,U,V=null){V===null&&(V=y),E=de.get(V),E.init(U),x.push(E),V.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),y!==V&&y.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights();let B=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ue=z.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){let he=ue[_e];ni(he,V,z),B.add(he)}else ni(ue,V,z),B.add(ue)}),E=x.pop(),B},this.compileAsync=function(y,U,V=null){let B=this.compile(y,U,V);return new Promise(z=>{function ue(){if(B.forEach(function(_e){b.get(_e).currentProgram.isReady()&&B.delete(_e)}),B.size===0){z(y);return}setTimeout(ue,10)}He.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Xl=null;function _1(y){Xl&&Xl(y)}function Su(){Ts.stop()}function wu(){Ts.start()}let Ts=new cd;Ts.setAnimationLoop(_1),typeof self<"u"&&Ts.setContext(self),this.setAnimationLoop=function(y){Xl=y,re.setAnimationLoop(y),y===null?Ts.stop():Ts.start()},re.addEventListener("sessionstart",Su),re.addEventListener("sessionend",wu),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){Te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;N!==null&&N.renderStart(y,U);let V=re.enabled===!0&&re.isPresenting===!0,B=T!==null&&(F===null||V)&&T.begin(L,F);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),y.isScene===!0&&y.onBeforeRender(L,y,U,F),E=de.get(y,x.length),E.init(U),E.state.textureUnits=_.getTextureUnits(),x.push(E),Ke.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ce.setFromProjectionMatrix(Ke,qn,U.reversedDepth),Ge=this.localClippingEnabled,ut=ge.init(this.clippingPlanes,Ge),A=Y.get(y,R.length),A.init(),R.push(A),re.enabled===!0&&re.isPresenting===!0){let _e=L.xr.getDepthSensingMesh();_e!==null&&ql(_e,U,-1/0,L.sortObjects)}ql(y,U,0,L.sortObjects),A.finish(),L.sortObjects===!0&&A.sort(Z,fe),ft=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ft&&te.addToRenderList(A,y),this.info.render.frame++,ut===!0&&ge.beginShadows();let z=E.state.shadowsArray;if(se.render(z,y,U),ut===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(B&&T.hasRenderPass())===!1){let _e=A.opaque,he=A.transmissive;if(E.setupLights(),U.isArrayCamera){let ve=U.cameras;if(he.length>0)for(let Me=0,De=ve.length;Me<De;Me++){let Oe=ve[Me];Tu(_e,he,y,Oe)}ft&&te.render(y);for(let Me=0,De=ve.length;Me<De;Me++){let Oe=ve[Me];Eu(A,y,Oe,Oe.viewport)}}else he.length>0&&Tu(_e,he,y,U),ft&&te.render(y),Eu(A,y,U)}F!==null&&$===0&&(_.updateMultisampleRenderTarget(F),_.updateRenderTargetMipmap(F)),B&&T.end(L),y.isScene===!0&&y.onAfterRender(L,y,U),ne.resetDefaultState(),k=-1,G=null,x.pop(),x.length>0?(E=x[x.length-1],_.setTextureUnits(E.state.textureUnits),ut===!0&&ge.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,N!==null&&N.renderEnd()};function ql(y,U,V,B){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ce.intersectsSprite(y)){B&&ke.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ke);let _e=ee.update(y),he=y.material;he.visible&&A.push(y,_e,he,V,ke.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ce.intersectsObject(y))){let _e=ee.update(y),he=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ke.copy(y.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),ke.copy(_e.boundingSphere.center)),ke.applyMatrix4(y.matrixWorld).applyMatrix4(Ke)),Array.isArray(he)){let ve=_e.groups;for(let Me=0,De=ve.length;Me<De;Me++){let Oe=ve[Me],Se=he[Oe.materialIndex];Se&&Se.visible&&A.push(y,_e,Se,V,ke.z,Oe)}}else he.visible&&A.push(y,_e,he,V,ke.z,null)}}let ue=y.children;for(let _e=0,he=ue.length;_e<he;_e++)ql(ue[_e],U,V,B)}function Eu(y,U,V,B){let{opaque:z,transmissive:ue,transparent:_e}=y;E.setupLightsView(V),ut===!0&&ge.setGlobalState(L.clippingPlanes,V),B&&ae.viewport(j.copy(B)),z.length>0&&$o(z,U,V),ue.length>0&&$o(ue,U,V),_e.length>0&&$o(_e,U,V),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Tu(y,U,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){let Se=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new Xt(1,1,{generateMipmaps:!0,type:Se?Sn:bn,minFilter:us,samples:Math.max(4,nt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Be.workingColorSpace})}let ue=E.state.transmissionRenderTarget[B.id],_e=B.viewport||j;ue.setSize(_e.z*L.transmissionResolutionScale,_e.w*L.transmissionResolutionScale);let he=L.getRenderTarget(),ve=L.getActiveCubeFace(),Me=L.getActiveMipmapLevel();L.setRenderTarget(ue),L.getClearColor(xe),be=L.getClearAlpha(),be<1&&L.setClearColor(16777215,.5),L.clear(),ft&&te.render(V);let De=L.toneMapping;L.toneMapping=Mn;let Oe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),ut===!0&&ge.setGlobalState(L.clippingPlanes,B),$o(y,V,B),_.updateMultisampleRenderTarget(ue),_.updateRenderTargetMipmap(ue),He.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Qe=0,St=U.length;Qe<St;Qe++){let vt=U[Qe],{object:et,geometry:Gt,material:me,group:pn}=vt;if(me.side===Un&&et.layers.test(B.layers)){let Xe=me.side;me.side=Qt,me.needsUpdate=!0,Au(et,V,B,Gt,me,pn),me.side=Xe,me.needsUpdate=!0,Se=!0}}Se===!0&&(_.updateMultisampleRenderTarget(ue),_.updateRenderTargetMipmap(ue))}L.setRenderTarget(he,ve,Me),L.setClearColor(xe,be),Oe!==void 0&&(B.viewport=Oe),L.toneMapping=De}function $o(y,U,V){let B=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ue=y.length;z<ue;z++){let _e=y[z],{object:he,geometry:ve,group:Me}=_e,De=_e.material;De.allowOverride===!0&&B!==null&&(De=B),he.layers.test(V.layers)&&Au(he,U,V,ve,De,Me)}}function Au(y,U,V,B,z,ue){y.onBeforeRender(L,U,V,B,z,ue),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(L,U,V,B,y,ue),z.transparent===!0&&z.side===Un&&z.forceSinglePass===!1?(z.side=Qt,z.needsUpdate=!0,L.renderBufferDirect(V,U,B,z,y,ue),z.side=wi,z.needsUpdate=!0,L.renderBufferDirect(V,U,B,z,y,ue),z.side=Un):L.renderBufferDirect(V,U,B,z,y,ue),y.onAfterRender(L,U,V,B,z,ue)}function Wo(y,U,V){U.isScene!==!0&&(U=Rt);let B=b.get(y),z=E.state.lights,ue=E.state.shadowsArray,_e=z.state.version,he=oe.getParameters(y,z.state,ue,U,V,E.state.lightProbeGridArray),ve=oe.getProgramCacheKey(he),Me=B.programs;B.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;let De=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;B.envMap=O.get(y.envMap||B.environment,De),B.envMapRotation=B.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Me===void 0&&(y.addEventListener("dispose",bt),Me=new Map,B.programs=Me);let Oe=Me.get(ve);if(Oe!==void 0){if(B.currentProgram===Oe&&B.lightsStateVersion===_e)return Ru(y,he),Oe}else he.uniforms=oe.getUniforms(y),N!==null&&y.isNodeMaterial&&N.build(y,V,he),y.onBeforeCompile(he,L),Oe=oe.acquireProgram(he,ve),Me.set(ve,Oe),B.uniforms=he.uniforms;let Se=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Se.clippingPlanes=ge.uniform),Ru(y,he),B.needsLights=M1(y),B.lightsStateVersion=_e,B.needsLights&&(Se.ambientLightColor.value=z.state.ambient,Se.lightProbe.value=z.state.probe,Se.directionalLights.value=z.state.directional,Se.directionalLightShadows.value=z.state.directionalShadow,Se.spotLights.value=z.state.spot,Se.spotLightShadows.value=z.state.spotShadow,Se.rectAreaLights.value=z.state.rectArea,Se.ltc_1.value=z.state.rectAreaLTC1,Se.ltc_2.value=z.state.rectAreaLTC2,Se.pointLights.value=z.state.point,Se.pointLightShadows.value=z.state.pointShadow,Se.hemisphereLights.value=z.state.hemi,Se.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Se.spotLightMatrix.value=z.state.spotLightMatrix,Se.spotLightMap.value=z.state.spotLightMap,Se.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=E.state.lightProbeGridArray.length>0,B.currentProgram=Oe,B.uniformsList=null,Oe}function Cu(y){if(y.uniformsList===null){let U=y.currentProgram.getUniforms();y.uniformsList=xr.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Ru(y,U){let V=b.get(y);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function x1(y,U){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;S.setFromMatrixPosition(U.matrixWorld);for(let V=0,B=y.length;V<B;V++){let z=y[V];if(z.texture!==null&&z.boundingBox.containsPoint(S))return z}return null}function v1(y,U,V,B,z){U.isScene!==!0&&(U=Rt),_.resetTextureUnits();let ue=U.fog,_e=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,he=F===null?L.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Be.workingColorSpace,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Me=O.get(B.envMap||_e,ve),De=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Oe=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Se=!!V.morphAttributes.position,Qe=!!V.morphAttributes.normal,St=!!V.morphAttributes.color,vt=Mn;B.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(vt=L.toneMapping);let et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Gt=et!==void 0?et.length:0,me=b.get(B),pn=E.state.lights;if(ut===!0&&(Ge===!0||y!==G)){let it=y===G&&B.id===k;ge.setState(B,y,it)}let Xe=!1;B.version===me.__version?(me.needsLights&&me.lightsStateVersion!==pn.state.version||me.outputColorSpace!==he||z.isBatchedMesh&&me.batching===!1||!z.isBatchedMesh&&me.batching===!0||z.isBatchedMesh&&me.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&me.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&me.instancing===!1||!z.isInstancedMesh&&me.instancing===!0||z.isSkinnedMesh&&me.skinning===!1||!z.isSkinnedMesh&&me.skinning===!0||z.isInstancedMesh&&me.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&me.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&me.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&me.instancingMorph===!1&&z.morphTexture!==null||me.envMap!==Me||B.fog===!0&&me.fog!==ue||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==ge.numPlanes||me.numIntersection!==ge.numIntersection)||me.vertexAlphas!==De||me.vertexTangents!==Oe||me.morphTargets!==Se||me.morphNormals!==Qe||me.morphColors!==St||me.toneMapping!==vt||me.morphTargetsCount!==Gt||!!me.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Xe=!0):(Xe=!0,me.__version=B.version);let In=me.currentProgram;Xe===!0&&(In=Wo(B,U,z),N&&B.isNodeMaterial&&N.onUpdateProgram(B,In,me));let ii=!1,Yi=!1,Ws=!1,tt=In.getUniforms(),wt=me.uniforms;if(ae.useProgram(In.program)&&(ii=!0,Yi=!0,Ws=!0),B.id!==k&&(k=B.id,Yi=!0),me.needsLights){let it=x1(E.state.lightProbeGridArray,z);me.lightProbeGrid!==it&&(me.lightProbeGrid=it,Yi=!0)}if(ii||G!==y){ae.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),tt.setValue(D,"projectionMatrix",y.projectionMatrix),tt.setValue(D,"viewMatrix",y.matrixWorldInverse);let Ji=tt.map.cameraPosition;Ji!==void 0&&Ji.setValue(D,rt.setFromMatrixPosition(y.matrixWorld)),nt.logarithmicDepthBuffer&&tt.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&tt.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),G!==y&&(G=y,Yi=!0,Ws=!0)}if(me.needsLights&&(pn.state.directionalShadowMap.length>0&&tt.setValue(D,"directionalShadowMap",pn.state.directionalShadowMap,_),pn.state.spotShadowMap.length>0&&tt.setValue(D,"spotShadowMap",pn.state.spotShadowMap,_),pn.state.pointShadowMap.length>0&&tt.setValue(D,"pointShadowMap",pn.state.pointShadowMap,_)),z.isSkinnedMesh){tt.setOptional(D,z,"bindMatrix"),tt.setOptional(D,z,"bindMatrixInverse");let it=z.skeleton;it&&(it.boneTexture===null&&it.computeBoneTexture(),tt.setValue(D,"boneTexture",it.boneTexture,_))}z.isBatchedMesh&&(tt.setOptional(D,z,"batchingTexture"),tt.setValue(D,"batchingTexture",z._matricesTexture,_),tt.setOptional(D,z,"batchingIdTexture"),tt.setValue(D,"batchingIdTexture",z._indirectTexture,_),tt.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&tt.setValue(D,"batchingColorTexture",z._colorsTexture,_));let Zi=V.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&Re.update(z,V,In),(Yi||me.receiveShadow!==z.receiveShadow)&&(me.receiveShadow=z.receiveShadow,tt.setValue(D,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(wt.envMapIntensity.value=U.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=Q2()),Yi){if(tt.setValue(D,"toneMappingExposure",L.toneMappingExposure),me.needsLights&&y1(wt,Ws),ue&&B.fog===!0&&W.refreshFogUniforms(wt,ue),W.refreshMaterialUniforms(wt,B,Ne,Je,E.state.transmissionRenderTarget[y.id]),me.needsLights&&me.lightProbeGrid){let it=me.lightProbeGrid;wt.probesSH.value=it.texture,wt.probesMin.value.copy(it.boundingBox.min),wt.probesMax.value.copy(it.boundingBox.max),wt.probesResolution.value.copy(it.resolution)}xr.upload(D,Cu(me),wt,_)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(xr.upload(D,Cu(me),wt,_),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&tt.setValue(D,"center",z.center),tt.setValue(D,"modelViewMatrix",z.modelViewMatrix),tt.setValue(D,"normalMatrix",z.normalMatrix),tt.setValue(D,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let it=B.uniformsGroups;for(let Ji=0,Xs=it.length;Ji<Xs;Ji++){let Pu=it[Ji];X.update(Pu,In),X.bind(Pu,In)}}return In}function y1(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function M1(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(y,U,V){let B=b.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),b.get(y.texture).__webglTexture=U,b.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){let V=b.get(y);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0};let b1=D.createFramebuffer();this.setRenderTarget=function(y,U=0,V=0){F=y,H=U,$=V;let B=null,z=!1,ue=!1;if(y){let he=b.get(y);if(he.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(D.FRAMEBUFFER,he.__webglFramebuffer),j.copy(y.viewport),Q.copy(y.scissor),le=y.scissorTest,ae.viewport(j),ae.scissor(Q),ae.setScissorTest(le),k=-1;return}else if(he.__webglFramebuffer===void 0)_.setupRenderTarget(y);else if(he.__hasExternalTextures)_.rebindTextures(y,b.get(y.texture).__webglTexture,b.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let De=y.depthTexture;if(he.__boundDepthTexture!==De){if(De!==null&&b.has(De)&&(y.width!==De.image.width||y.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(y)}}let ve=y.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(ue=!0);let Me=b.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Me[U])?B=Me[U][V]:B=Me[U],z=!0):y.samples>0&&_.useMultisampledRTT(y)===!1?B=b.get(y).__webglMultisampledFramebuffer:Array.isArray(Me)?B=Me[V]:B=Me,j.copy(y.viewport),Q.copy(y.scissor),le=y.scissorTest}else j.copy(ie).multiplyScalar(Ne).floor(),Q.copy(Ae).multiplyScalar(Ne).floor(),le=Ie;if(V!==0&&(B=b1),ae.bindFramebuffer(D.FRAMEBUFFER,B)&&ae.drawBuffers(y,B),ae.viewport(j),ae.scissor(Q),ae.setScissorTest(le),z){let he=b.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,V)}else if(ue){let he=U;for(let ve=0;ve<y.textures.length;ve++){let Me=b.get(y.textures[ve]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ve,Me.__webglTexture,V,he)}}else if(y!==null&&V!==0){let he=b.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,he.__webglTexture,V)}k=-1},this.readRenderTargetPixels=function(y,U,V,B,z,ue,_e,he=0){if(!(y&&y.isWebGLRenderTarget)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=b.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve){ae.bindFramebuffer(D.FRAMEBUFFER,ve);try{let Me=y.textures[he],De=Me.format,Oe=Me.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),!nt.textureFormatReadable(De)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Oe)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-B&&V>=0&&V<=y.height-z&&D.readPixels(U,V,B,z,P.convert(De),P.convert(Oe),ue)}finally{let Me=F!==null?b.get(F).__webglFramebuffer:null;ae.bindFramebuffer(D.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(y,U,V,B,z,ue,_e,he=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=b.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve)if(U>=0&&U<=y.width-B&&V>=0&&V<=y.height-z){ae.bindFramebuffer(D.FRAMEBUFFER,ve);let Me=y.textures[he],De=Me.format,Oe=Me.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),!nt.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Se),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(U,V,B,z,P.convert(De),P.convert(Oe),0);let Qe=F!==null?b.get(F).__webglFramebuffer:null;ae.bindFramebuffer(D.FRAMEBUFFER,Qe);let St=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Uf(D,St,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Se),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue),D.deleteBuffer(Se),D.deleteSync(St),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,V=0){let B=Math.pow(2,-V),z=Math.floor(y.image.width*B),ue=Math.floor(y.image.height*B),_e=U!==null?U.x:0,he=U!==null?U.y:0;_.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,_e,he,z,ue),ae.unbindTexture()};let S1=D.createFramebuffer(),w1=D.createFramebuffer();this.copyTextureToTexture=function(y,U,V=null,B=null,z=0,ue=0){let _e,he,ve,Me,De,Oe,Se,Qe,St,vt=y.isCompressedTexture?y.mipmaps[ue]:y.image;if(V!==null)_e=V.max.x-V.min.x,he=V.max.y-V.min.y,ve=V.isBox3?V.max.z-V.min.z:1,Me=V.min.x,De=V.min.y,Oe=V.isBox3?V.min.z:0;else{let wt=Math.pow(2,-z);_e=Math.floor(vt.width*wt),he=Math.floor(vt.height*wt),y.isDataArrayTexture?ve=vt.depth:y.isData3DTexture?ve=Math.floor(vt.depth*wt):ve=1,Me=0,De=0,Oe=0}B!==null?(Se=B.x,Qe=B.y,St=B.z):(Se=0,Qe=0,St=0);let et=P.convert(U.format),Gt=P.convert(U.type),me;U.isData3DTexture?(_.setTexture3D(U,0),me=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(_.setTexture2DArray(U,0),me=D.TEXTURE_2D_ARRAY):(_.setTexture2D(U,0),me=D.TEXTURE_2D),ae.activeTexture(D.TEXTURE0),ae.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),ae.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ae.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let pn=ae.getParameter(D.UNPACK_ROW_LENGTH),Xe=ae.getParameter(D.UNPACK_IMAGE_HEIGHT),In=ae.getParameter(D.UNPACK_SKIP_PIXELS),ii=ae.getParameter(D.UNPACK_SKIP_ROWS),Yi=ae.getParameter(D.UNPACK_SKIP_IMAGES);ae.pixelStorei(D.UNPACK_ROW_LENGTH,vt.width),ae.pixelStorei(D.UNPACK_IMAGE_HEIGHT,vt.height),ae.pixelStorei(D.UNPACK_SKIP_PIXELS,Me),ae.pixelStorei(D.UNPACK_SKIP_ROWS,De),ae.pixelStorei(D.UNPACK_SKIP_IMAGES,Oe);let Ws=y.isDataArrayTexture||y.isData3DTexture,tt=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){let wt=b.get(y),Zi=b.get(U),it=b.get(wt.__renderTarget),Ji=b.get(Zi.__renderTarget);ae.bindFramebuffer(D.READ_FRAMEBUFFER,it.__webglFramebuffer),ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let Xs=0;Xs<ve;Xs++)Ws&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,b.get(y).__webglTexture,z,Oe+Xs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,b.get(U).__webglTexture,ue,St+Xs)),D.blitFramebuffer(Me,De,_e,he,Se,Qe,_e,he,D.DEPTH_BUFFER_BIT,D.NEAREST);ae.bindFramebuffer(D.READ_FRAMEBUFFER,null),ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||b.has(y)){let wt=b.get(y),Zi=b.get(U);ae.bindFramebuffer(D.READ_FRAMEBUFFER,S1),ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,w1);for(let it=0;it<ve;it++)Ws?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.__webglTexture,z,Oe+it):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wt.__webglTexture,z),tt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Zi.__webglTexture,ue,St+it):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Zi.__webglTexture,ue),z!==0?D.blitFramebuffer(Me,De,_e,he,Se,Qe,_e,he,D.COLOR_BUFFER_BIT,D.NEAREST):tt?D.copyTexSubImage3D(me,ue,Se,Qe,St+it,Me,De,_e,he):D.copyTexSubImage2D(me,ue,Se,Qe,Me,De,_e,he);ae.bindFramebuffer(D.READ_FRAMEBUFFER,null),ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else tt?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(me,ue,Se,Qe,St,_e,he,ve,et,Gt,vt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(me,ue,Se,Qe,St,_e,he,ve,et,vt.data):D.texSubImage3D(me,ue,Se,Qe,St,_e,he,ve,et,Gt,vt):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ue,Se,Qe,_e,he,et,Gt,vt.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ue,Se,Qe,vt.width,vt.height,et,vt.data):D.texSubImage2D(D.TEXTURE_2D,ue,Se,Qe,_e,he,et,Gt,vt);ae.pixelStorei(D.UNPACK_ROW_LENGTH,pn),ae.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Xe),ae.pixelStorei(D.UNPACK_SKIP_PIXELS,In),ae.pixelStorei(D.UNPACK_SKIP_ROWS,ii),ae.pixelStorei(D.UNPACK_SKIP_IMAGES,Yi),ue===0&&U.generateMipmaps&&D.generateMipmap(me),ae.unbindTexture()},this.initRenderTarget=function(y){b.get(y).__webglFramebuffer===void 0&&_.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?_.setTextureCube(y,0):y.isData3DTexture?_.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?_.setTexture2DArray(y,0):_.setTexture2D(y,0),ae.unbindTexture()},this.resetState=function(){H=0,$=0,F=null,ae.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Be._getDrawingBufferColorSpace(e),t.unpackColorSpace=Be._getUnpackColorSpace()}};var di={start:360,step:5,x:[1299e-7,2321e-7,4149e-7,7416e-7,.001368,.002236,.004243,.00765,.01431,.02319,.04351,.07763,.13438,.21477,.2839,.3285,.34828,.34806,.3362,.3187,.2908,.2511,.19536,.1421,.09564,.05795001,.03201,.0147,.0049,.0024,.0093,.0291,.06327,.1096,.1655,.2257499,.2904,.3597,.4334499,.5120501,.5945,.6784,.7621,.8425,.9163,.9786,1.0263,1.0567,1.0622,1.0456,1.0026,.9384,.8544499,.7514,.6424,.5419,.4479,.3608,.2835,.2187,.1649,.1212,.0874,.0636,.04677,.0329,.0227,.01584,.01135916,.008110916,.005790346,.004109457,.002899327,.00204919,.001439971,.0009999493,.0006900786,.0004760213,.0003323011,.0002348261,.0001661505,117413e-9,8307527e-11,5870652e-11,4150994e-11,2935326e-11,2067383e-11,1455977e-11,1025398e-11,7221456e-12,5085868e-12,3581652e-12,2522525e-12,1776509e-12,1251141e-12],y:[3917e-9,6965e-9,1239e-8,2202e-8,39e-6,64e-6,12e-5,217e-6,396e-6,64e-5,.00121,.00218,.004,.0073,.0116,.01684,.023,.0298,.038,.048,.06,.0739,.09098,.1126,.13902,.1693,.20802,.2586,.323,.4073,.503,.6082,.71,.7932,.862,.9148501,.954,.9803,.9949501,1,.995,.9786,.952,.9154,.87,.8163,.757,.6949,.631,.5668,.503,.4412,.381,.321,.265,.217,.175,.1382,.107,.0816,.061,.04458,.032,.0232,.017,.01192,.00821,.005723,.004102,.002929,.002091,.001484,.001047,74e-5,52e-5,3611e-7,2492e-7,1719e-7,12e-5,848e-7,6e-5,424e-7,3e-5,212e-7,1499e-8,106e-7,74657e-10,52578e-10,37029e-10,26078e-10,18366e-10,12934e-10,91093e-11,64153e-11,45181e-11],z:[6061e-7,.001086,.001946,.003486,.006450001,.01054999,.02005001,.03621,.06785001,.1102,.2074,.3713,.6456,1.0390501,1.3856,1.62296,1.74706,1.7826,1.77211,1.7441,1.6692,1.5281,1.28764,1.0419,.8129501,.6162,.46518,.3533,.272,.2123,.1582,.1117,.07824999,.05725001,.04216,.02984,.0203,.0134,.008749999,.005749999,.0039,.002749999,.0021,.0018,.001650001,.0014,.0011,.001,8e-4,6e-4,34e-5,24e-5,19e-5,1e-4,4999999e-11,3e-5,2e-5,1e-5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};var Yc={start:300,step:1,values:[.0341,.36014,.68618,1.01222,1.33826,1.6643,1.99034,2.31638,2.64242,2.96846,3.2945,4.98865,6.6828,8.37695,10.0711,11.7652,13.4594,15.1535,16.8477,18.5418,20.236,21.9177,23.5995,25.2812,26.963,28.6447,30.3265,32.0082,33.69,35.3717,37.0535,37.343,37.6326,37.9221,38.2116,38.5011,38.7907,39.0802,39.3697,39.6593,39.9488,40.4451,40.9414,41.4377,41.934,42.4302,42.9265,43.4228,43.9191,44.4154,44.9117,45.0844,45.257,45.4297,45.6023,45.775,45.9477,46.1203,46.293,46.4656,46.6383,47.1834,47.7285,48.2735,48.8186,49.3637,49.9088,50.4539,50.9989,51.544,52.0891,51.8777,51.6664,51.455,51.2437,51.0323,50.8209,50.6096,50.3982,50.1869,49.9755,50.4428,50.91,51.3773,51.8446,52.3118,52.7791,53.2464,53.7137,54.1809,54.6482,57.4589,60.2695,63.0802,65.8909,68.7015,71.5122,74.3229,77.1336,79.9442,82.7549,83.628,84.5011,85.3742,86.2473,87.1204,87.9936,88.8667,89.7398,90.6129,91.486,91.6806,91.8752,92.0697,92.2643,92.4589,92.6535,92.8481,93.0426,93.2372,93.4318,92.7568,92.0819,91.4069,90.732,90.057,89.3821,88.7071,88.0322,87.3572,86.6823,88.5006,90.3188,92.1371,93.9554,95.7736,97.5919,99.4102,101.228,103.047,104.865,106.079,107.294,108.508,109.722,110.936,112.151,113.365,114.579,115.794,117.008,117.088,117.169,117.249,117.33,117.41,117.49,117.571,117.651,117.732,117.812,117.517,117.222,116.927,116.632,116.336,116.041,115.746,115.451,115.156,114.861,114.967,115.073,115.18,115.286,115.392,115.498,115.604,115.711,115.817,115.923,115.212,114.501,113.789,113.078,112.367,111.656,110.945,110.233,109.522,108.811,108.865,108.92,108.974,109.028,109.082,109.137,109.191,109.245,109.3,109.354,109.199,109.044,108.888,108.733,108.578,108.423,108.268,108.112,107.957,107.802,107.501,107.2,106.898,106.597,106.296,105.995,105.694,105.392,105.091,104.79,105.08,105.37,105.66,105.95,106.239,106.529,106.819,107.109,107.399,107.689,107.361,107.032,106.704,106.375,106.047,105.719,105.39,105.062,104.733,104.405,104.369,104.333,104.297,104.261,104.225,104.19,104.154,104.118,104.082,104.046,103.641,103.237,102.832,102.428,102.023,101.618,101.214,100.809,100.405,100,99.6334,99.2668,98.9003,98.5337,98.1671,97.8005,97.4339,97.0674,96.7008,96.3342,96.2796,96.225,96.1703,96.1157,96.0611,96.0065,95.9519,95.8972,95.8426,95.788,95.0778,94.3675,93.6573,92.947,92.2368,91.5266,90.8163,90.1061,89.3958,88.6856,88.8177,88.9497,89.0818,89.2138,89.3459,89.478,89.61,89.7421,89.8741,90.0062,89.9655,89.9248,89.8841,89.8434,89.8026,89.7619,89.7212,89.6805,89.6398,89.5991,89.4091,89.219,89.029,88.8389,88.6489,88.4589,88.2688,88.0788,87.8887,87.6987,87.2577,86.8167,86.3757,85.9347,85.4936,85.0526,84.6116,84.1706,83.7296,83.2886,83.3297,83.3707,83.4118,83.4528,83.4939,83.535,83.576,83.6171,83.6581,83.6992,83.332,82.9647,82.5975,82.2302,81.863,81.4958,81.1285,80.7613,80.394,80.0268,80.0456,80.0644,80.0831,80.1019,80.1207,80.1395,80.1583,80.177,80.1958,80.2146,80.4209,80.6272,80.8336,81.0399,81.2462,81.4525,81.6588,81.8652,82.0715,82.2778,81.8784,81.4791,81.0797,80.6804,80.281,79.8816,79.4823,79.0829,78.6836,78.2842,77.4279,76.5716,75.7153,74.859,74.0027,73.1465,72.2902,71.4339,70.5776,69.7213,69.9101,70.0989,70.2876,70.4764,70.6652,70.854,71.0428,71.2315,71.4203,71.6091,71.8831,72.1571,72.4311,72.7051,72.979,73.253,73.527,73.801,74.075,74.349,73.0745,71.8,70.5255,69.251,67.9765,66.702,65.4275,64.153,62.8785,61.604,62.4322,63.2603,64.0885,64.9166,65.7448,66.573,67.4011,68.2293,69.0574,69.8856,70.4057,70.9259,71.446,71.9662,72.4863,73.0064,73.5266,74.0467,74.5669,75.087,73.9376,72.7881,71.6387,70.4893,69.3398,68.1904,67.041,65.8916,64.7421,63.5927,61.8752,60.1578,58.4403,56.7229,55.0054,53.288,51.5705,49.8531,48.1356,46.4182,48.4569,50.4956,52.5344,54.5731,56.6118,58.6505,60.6892,62.728,64.7667,66.8054,66.4631,66.1209,65.7786,65.4364,65.0941,64.7518,64.4096,64.0673,63.7251,63.3828,63.4749,63.567,63.6592,63.7513,63.8434,63.9355,64.0276,64.1198,64.2119,64.304,63.8188,63.3336,62.8484,62.3632,61.8779,61.3927,60.9075,60.4223,59.9371,59.4519,58.7026,57.9533,57.204,56.4547,55.7054,54.9562,54.2069,53.4576,52.7083,51.959,52.5072,53.0553,53.6035,54.1516,54.6998,55.248,55.7961,56.3443,56.8924,57.4406,57.7278,58.015,58.3022,58.5894,58.8765,59.1637,59.4509,59.7381,60.0253,60.3125]};function ks(n,e=[0,0,0]){let t=n[0],i=n[1];return e[0]=t/i,e[1]=1,e[2]=(1-t-i)/i,e}var gh={A:[.44757,.40745],B:[.34842,.35161],C:[.31006,.31616],D50:[.34567,.3585],D55:[.33242,.34743],D65:[.31272,.32903],D75:[.29902,.31485],E:[1/3,1/3],F2:[.37208,.37529],F7:[.31292,.32933],F11:[.38052,.37713]},Mt=[.3127,.329],Yt=[.3457,.3585],Ot=ks(Mt),Jn=ks(Yt);var pi={bradford:[.8951,.2664,-.1614,-.7502,1.7135,.0367,.0389,-.0685,1.0296],cat02:[.7328,.4296,-.1624,-.7036,1.6975,.0061,.003,.0136,.9834],cat16:[.401288,.650173,-.051461,-.250268,1.204414,.045854,-.002079,.048952,.953127],vonkries:[.40024,.7076,-.08081,-.2263,1.16532,.0457,0,0,.91822],"xyz-scaling":[1,0,0,0,1,0,0,0,1]};function ct(n,e,t=[0,0,0]){let i=e[0],s=e[1],r=e[2];return t[0]=n[0]*i+n[1]*s+n[2]*r,t[1]=n[3]*i+n[4]*s+n[5]*r,t[2]=n[6]*i+n[7]*s+n[8]*r,t}function Ct(n,e,t=new Array(9)){let i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],c=n[5],l=n[6],h=n[7],f=n[8],u=e[0],d=e[1],g=e[2],v=e[3],m=e[4],p=e[5],M=e[6],w=e[7],S=e[8];return t[0]=i*u+s*v+r*M,t[1]=i*d+s*m+r*w,t[2]=i*g+s*p+r*S,t[3]=o*u+a*v+c*M,t[4]=o*d+a*m+c*w,t[5]=o*g+a*p+c*S,t[6]=l*u+h*v+f*M,t[7]=l*d+h*m+f*w,t[8]=l*g+h*p+f*S,t}function st(n,e=new Array(9)){let t=n[0],i=n[1],s=n[2],r=n[3],o=n[4],a=n[5],c=n[6],l=n[7],h=n[8],f=o*h-a*l,u=a*c-r*h,d=r*l-o*c,g=t*f+i*u+s*d;if(g===0)throw new Error("mat3: singular matrix");let v=1/g;return e[0]=f*v,e[1]=(s*l-i*h)*v,e[2]=(i*a-s*o)*v,e[3]=u*v,e[4]=(t*h-s*c)*v,e[5]=(s*r-t*a)*v,e[6]=d*v,e[7]=(i*c-t*l)*v,e[8]=(t*o-i*r)*v,e}function md(n,e,t,i=new Array(9)){return i[0]=n,i[1]=0,i[2]=0,i[3]=0,i[4]=e,i[5]=0,i[6]=0,i[7]=0,i[8]=t,i}function gd(n){let[e,t]=n.r,[i,s]=n.g,[r,o]=n.b,a=[e/t,i/s,r/o,1,1,1,(1-e-t)/t,(1-i-s)/s,(1-r-o)/o],c=ks(n.white),l=ct(st(a),c),h=[l[0]*a[0],l[1]*a[1],l[2]*a[2],l[0]*a[3],l[1]*a[4],l[2]*a[5],l[0]*a[6],l[1]*a[7],l[2]*a[8]];return{toXyz:h,fromXyz:st(h),whiteXyz:c}}var _d={srgb:{r:[.64,.33],g:[.3,.6],b:[.15,.06],white:Mt,transfer:"srgb"},"display-p3":{r:[.68,.32],g:[.265,.69],b:[.15,.06],white:Mt,transfer:"srgb"},"a98-rgb":{r:[.64,.33],g:[.21,.71],b:[.15,.06],white:Mt,transfer:"a98"},"prophoto-rgb":{r:[.734699,.265301],g:[.159597,.840403],b:[.036598,105e-6],white:Yt,transfer:"prophoto"},rec2020:{r:[.708,.292],g:[.17,.797],b:[.131,.046],white:Mt,transfer:"rec2020"},bt709:{r:[.64,.33],g:[.3,.6],b:[.15,.06],white:Mt,transfer:"bt709"},"dci-p3":{r:[.68,.32],g:[.265,.69],b:[.15,.06],white:[.314,.351],transfer:"gamma26"},"aces2065-1":{r:[.7347,.2653],g:[0,1],b:[1e-4,-.077],white:[.32168,.33767],transfer:"linear"},acescg:{r:[.713,.293],g:[.165,.83],b:[.128,.044],white:[.32168,.33767],transfer:"linear"}};var dt=.1593017578125,Zt=2523/4096*128,pt=3424/4096,mt=2413/4096*32,gt=2392/4096*32;function yr(n){if(n<=0)return 0;let e=Math.pow(n/1e4,dt);return Math.pow((pt+mt*e)/(1+gt*e),Zt)}function Mr(n){if(n<=0)return 0;let e=Math.pow(n,1/Zt),t=Math.max(e-pt,0);return 1e4*Math.pow(t/(mt-gt*e),1/dt)}var Ai=1.7*Zt,ms=1.15,gs=.66,Jt=-.56,Ci=16295499532821565e-27;function Zc(n){if(n<=0)return 0;let e=Math.pow(n/1e4,dt);return Math.pow((pt+mt*e)/(1+gt*e),Ai)}function Jc(n){if(n<=0)return 0;let e=Math.pow(n,1/Ai),t=Math.max(e-pt,0);return 1e4*Math.pow(t/(mt-gt*e),1/dt)}var xd=[1688/4096,2146/4096,262/4096,683/4096,2951/4096,462/4096,99/4096,309/4096,3688/4096],To=[.5,.5,0,6610/4096,-13613/4096,7003/4096,17933/4096,-17390/4096,-543/4096],wn=[.41478972,.579999,.014648,-.20151,1.120649,.0531008,-.0166008,.2648,.6684799],mi=[.5,.5,0,3.524,-4.066708,.542708,.199076,1.096799,-1.295875];function e3(n){let e=Math.abs(n),t=e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);return n<0?-t:t}function t3(n){let e=Math.abs(n),t=e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055;return n<0?-t:t}var Ri=563/256;function n3(n){let e=Math.pow(Math.abs(n),Ri);return n<0?-e:e}function i3(n){let e=Math.pow(Math.abs(n),1/Ri);return n<0?-e:e}var Pi=1/512;function s3(n){let e=Math.abs(n),t=e<=16*Pi?e/16:Math.pow(e,1.8);return n<0?-t:t}function r3(n){let e=Math.abs(n),t=e>=Pi?Math.pow(e,1/1.8):16*e;return n<0?-t:t}var zt=1.09929682680944,Ii=.018053968510807;function o3(n){let e=Math.abs(n),t=e<Ii*4.5?e/4.5:Math.pow((e+zt-1)/zt,1/.45);return n<0?-t:t}function a3(n){let e=Math.abs(n),t=e<Ii?4.5*e:zt*Math.pow(e,.45)-(zt-1);return n<0?-t:t}var kt=1.099,Li=.018;function c3(n){let e=Math.abs(n),t=e<Li*4.5?e/4.5:Math.pow((e+kt-1)/kt,1/.45);return n<0?-t:t}function l3(n){let e=Math.abs(n),t=e<Li?4.5*e:kt*Math.pow(e,.45)-(kt-1);return n<0?-t:t}function h3(n){let e=Math.pow(Math.abs(n),2.6);return n<0?-e:e}function u3(n){let e=Math.pow(Math.abs(n),.3846153846153846);return n<0?-e:e}var Ao=(Math.log2(Math.pow(2,-16))+9.72)/17.52;function f3(n){return n<(9.72-15)/17.52?(Math.pow(2,n*17.52-9.72)-Math.pow(2,-16))*2:n<(Math.log2(65504)+9.72)/17.52?Math.pow(2,n*17.52-9.72):65504}function d3(n){return n<=0?Ao:n<Math.pow(2,-15)?(Math.log2(Math.pow(2,-16)+n*.5)+9.72)/17.52:(Math.log2(n)+9.72)/17.52}var Di=10.5402377416545,Ni=.0729055341958355;function p3(n){return n>.155251141552511?Math.pow(2,n*17.52-9.72):(n-Ni)/Di}function m3(n){return n<=.0078125?Di*n+Ni:(Math.log2(n)+9.72)/17.52}function g3(n){return Mr(n)/203}function _3(n){return yr(n*203)}var Bn=.17883277,Ui=1-4*Bn,Fi=.5-Bn*Math.log(4*Bn),En=3.7743;function x3(n){return n<=0?0:n<=.5?n*n/3*En:(Math.exp((n-Fi)/Bn)+Ui)/12*En}function v3(n){if(n<=0)return 0;let e=n/En;return e<=1/12?Math.sqrt(3*e):Bn*Math.log(12*e-Ui)+Fi}var vd=n=>n,br={srgb:{decode:e3,encode:t3},a98:{decode:n3,encode:i3},prophoto:{decode:s3,encode:r3},rec2020:{decode:o3,encode:a3},bt709:{decode:c3,encode:l3},gamma26:{decode:h3,encode:u3},acescc:{decode:f3,encode:d3},acescct:{decode:p3,encode:m3},rec2100pq:{decode:g3,encode:_3},rec2100hlg:{decode:x3,encode:v3},linear:{decode:vd,encode:vd}};var yd=new Map;function y3(n){let e=yd.get(n);return e||(e=st(pi[n]),yd.set(n,e)),e}var Md=new Map;function bd(n){if(typeof n=="string"){let e=Md.get(n);if(!e){let t=gh[n];if(!t)throw new Error(`whitepoint: unknown illuminant "${n}" (have: ${Object.keys(gh).join(", ")})`);Md.set(n,e={key:n,xyz:ks(t)})}return e}return n.length===2?{key:`xy:${n[0]},${n[1]}`,xyz:ks(n)}:{key:`xyz:${n[0]},${n[1]},${n[2]}`,xyz:n}}var Sd=new Map;function an(n,e,t="bradford"){if(!pi[t])throw new Error(`whitepoint: unknown CAT "${t}" (have: ${Object.keys(pi).join(", ")})`);let i=bd(n),s=bd(e),r=`${t}|${i.key}|${s.key}`,o=Sd.get(r);if(!o){let a=pi[t],c=ct(a,i.xyz),l=ct(a,s.xyz);o=Ct(Ct(y3(t),md(l[0]/c[0],l[1]/c[1],l[2]/c[2])),a),Sd.set(r,o)}return o}function cn(n,e,t,i){let{decode:s,encode:r}=br[i],o=e[0],a=e[1],c=e[2],l=e[3],h=e[4],f=e[5],u=e[6],d=e[7],g=e[8],v=t[0],m=t[1],p=t[2],M=t[3],w=t[4],S=t[5],A=t[6],E=t[7],R=t[8];return{id:n,transferName:i,m:{toXyz:e,fromXyz:t},toXyz(x,T=[0,0,0]){let L=s(x[0]),C=s(x[1]),N=s(x[2]);return T[0]=o*L+a*C+c*N,T[1]=l*L+h*C+f*N,T[2]=u*L+d*C+g*N,T},fromXyz(x,T=[0,0,0]){let L=x[0],C=x[1],N=x[2];return T[0]=r(v*L+m*C+p*N),T[1]=r(M*L+w*C+S*N),T[2]=r(A*L+E*C+R*N),T}}}function _s(n,e=n){let t=_d[e],{toXyz:i,fromXyz:s}=gd(t);return t.white!==Mt&&(i=Ct(an(t.white,Mt),i),s=st(i)),{toXyz:i,fromXyz:s,transfer:t.transfer}}var Sr=_s("srgb"),wd=_s("display-p3"),Ed=_s("a98-rgb"),Td=_s("prophoto-rgb"),wr=_s("rec2020"),Ad=_s("dci-p3"),Cd=_s("aces2065-1"),Er=_s("acescg"),$e=cn("srgb",Sr.toXyz,Sr.fromXyz,"srgb"),Kc=cn("srgb-linear",Sr.toXyz,Sr.fromXyz,"linear"),Co=cn("display-p3",wd.toXyz,wd.fromXyz,"srgb"),jc=cn("a98-rgb",Ed.toXyz,Ed.fromXyz,"a98"),Qc=cn("prophoto-rgb",Td.toXyz,Td.fromXyz,"prophoto"),Oi=cn("rec2020",wr.toXyz,wr.fromXyz,"rec2020"),Tr=cn("bt709",Sr.toXyz,Sr.fromXyz,"bt709"),el=cn("dci-p3",Ad.toXyz,Ad.fromXyz,"gamma26"),tl=cn("aces2065-1",Cd.toXyz,Cd.fromXyz,"linear"),nl=cn("acescg",Er.toXyz,Er.fromXyz,"linear"),il=cn("acescc",Er.toXyz,Er.fromXyz,"acescc"),sl=cn("acescct",Er.toXyz,Er.fromXyz,"acescct"),rl=cn("rec2100-pq",wr.toXyz,wr.fromXyz,"rec2100pq"),ol=cn("rec2100-hlg",wr.toXyz,wr.fromXyz,"rec2100hlg");var ln=Math.PI/180,xs=180/Math.PI;function Tn(n,e=[0,0,0]){let t=n[1],i=n[2],s=Math.atan2(i,t)*xs;return s<0&&(s+=360),e[0]=n[0],e[1]=Math.sqrt(t*t+i*i),e[2]=s,e}function en(n,e=[0,0,0]){let t=n[2]*ln,i=n[1];return e[0]=n[0],e[1]=i*Math.cos(t),e[2]=i*Math.sin(t),e}var M3=216/24389,Rd=24389/27,b3=6/29,Pd=Ot[0],Id=Ot[1],Ld=Ot[2],ul=26/180*Math.PI,cl=Math.cos(ul),ll=Math.sin(ul),Dd=100/Math.log(139/100);function _h(n){return n>M3?Math.cbrt(n):(Rd*n+16)/116}function xh(n){return n>b3?n*n*n:(116*n-16)/Rd}function Nd(n,e){let t=_h(n[0]/Pd),i=_h(n[1]/Id),s=_h(n[2]/Ld);return e[0]=116*i-16,e[1]=500*(t-i),e[2]=200*(i-s),e}function Ud(n,e){let t=(n[0]+16)/116,i=n[1]/500+t,s=t-n[2]/200;return e[0]=xh(i)*Pd,e[1]=xh(t)*Id,e[2]=xh(s)*Ld,e}var hl=[0,0,0],al=[0,0,0];function Fd(n,e){let t=n[1]*cl+n[2]*ll,i=.83*(n[2]*cl-n[1]*ll),s=Math.sqrt(t*t+i*i);e[0]=Dd*Math.log(1+.0039*n[0]),e[1]=Math.log(1+.075*s)/.0435;let r=(Math.atan2(i,t)+ul)/Math.PI*180;return r=(r%360+360)%360,e[2]=s===0?0:r,e}function Od(n,e){e[0]=(Math.exp(n[0]/Dd)-1)/.0039;let t=(Math.exp(.0435*n[1])-1)/.075,i=n[2]/180*Math.PI-ul,s=t*Math.cos(i),r=t*Math.sin(i);return e[1]=s*cl-r/.83*ll,e[2]=s*ll+r/.83*cl,e}var Bd={id:"din99o",fromXyz(n,e=[0,0,0]){return Fd(Nd(n,hl),al),en(al,e)},toXyz(n,e=[0,0,0]){return Tn(n,al),Ud(Od(al,hl),e)}},zd={id:"din99o-lch",fromXyz(n,e=[0,0,0]){return Fd(Nd(n,hl),e)},toXyz(n,e=[0,0,0]){return Ud(Od(n,hl),e)}};var yh=pi.cat16,S3=st(yh),w3=216/24389,kd=24389/27;function vh(n){let e=(n+16)/116;return 100*(e>6/29?e*e*e:(116*e-16)/kd)}function E3(n){let e=n/100;return e>w3?116*Math.cbrt(e)-16:kd*e}var T3={average:[1,.69,1],dim:[.9,.59,.9],dark:[.8,.525,.8]};function A3(n={}){let e=n.white??[Ot[0]*100,100,Ot[2]*100],t=n.adaptingLuminance??200/Math.PI*(vh(50)/100),i=n.backgroundLstar??50,s=T3[n.surround??"average"];if(!s)throw new Error(`whitepoint: unknown surround "${n.surround}" (have: average, dim, dark)`);let[r,o,a]=s,c=ct(yh,e,[0,0,0]),l=n.discounting?1:r*(1-1/3.6*Math.exp((-t-42)/92));l=l>1?1:l<0?0:l;let h=1/(5*t+1),f=h*h*h*h,u=f*t+.1*(1-f)*(1-f)*Math.cbrt(5*t),d=vh(i)/e[1],g=1.48+Math.sqrt(d),v=.725/Math.pow(d,.2),m=[l*(100/c[0])+1-l,l*(100/c[1])+1-l,l*(100/c[2])+1-l],p=(()=>{let M=0,w=[2,1,.05],S=[0,0,0];for(let A=0;A<3;A++){let E=Math.pow(u*m[A]*c[A]/100,.42);S[A]=400*E/(E+27.13),M+=w[A]*S[A]}return M*v})();return{fl:u,fl25:Math.pow(u,.25),n:d,z:g,c:o,nc:a,nbb:v,ncb:v,aw:p,rgbD:m,cz:o*g}}var Kn=A3(),An=[0,0,0];function Vd(n,e=Kn,t=[0,0,0]){ct(yh,n,An);for(let m=0;m<3;m++){let p=e.rgbD[m]*An[m],M=Math.pow(e.fl*Math.abs(p)/100,.42);An[m]=Math.sign(p)*400*M/(M+27.13)}let i=An[0],s=An[1],r=An[2],o=(11*i-12*s+r)/11,a=(i+s-2*r)/9,c=Math.atan2(a,o)*xs;c<0&&(c+=360);let l=(20*i+20*s+21*r)/20,h=(40*i+20*s+r)/20*e.nbb,f=100*Math.pow(h/e.aw,e.cz),u=.25*(Math.cos(c*ln+2)+3.8),g=5e4/13*u*e.nc*e.ncb*Math.sqrt(o*o+a*a)/(l+.305),v=Math.pow(g,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73);return t[0]=f,t[1]=v*Math.sqrt(f/100),t[2]=c,t}function Gd(n,e=Kn,t=[0,0,0]){let i=n[0],s=n[1],r=n[2];if(i<=0)return t[0]=0,t[1]=0,t[2]=0,t;let o=s===0?0:s/Math.sqrt(i/100),a=Math.pow(o/Math.pow(1.64-Math.pow(.29,e.n),.73),1/.9),c=r*ln,l=.25*(Math.cos(c+2)+3.8),h=e.aw*Math.pow(i/100,1/e.cz),f=5e4/13*l*e.nc*e.ncb,u=h/e.nbb,d=23*(u+.305)*a/(23*f+11*a*Math.cos(c)+108*a*Math.sin(c)),g=d*Math.cos(c),v=d*Math.sin(c);An[0]=(460*u+451*g+288*v)/1403,An[1]=(460*u-891*g-261*v)/1403,An[2]=(460*u-220*g-6300*v)/1403;for(let m=0;m<3;m++){let p=Math.abs(An[m]),M=Math.max(0,27.13*p/(400-p));An[m]=Math.sign(An[m])*(100/e.fl)*Math.pow(M,1/.42)/e.rgbD[m]}return ct(S3,An,t)}var hn=[0,0,0],Bt=[0,0,0],fl={id:"cam16",fromXyz(n,e=[0,0,0]){return hn[0]=n[0]*100,hn[1]=n[1]*100,hn[2]=n[2]*100,Vd(hn,Kn,e)},toXyz(n,e=[0,0,0]){return Gd(n,Kn,e),e[0]/=100,e[1]/=100,e[2]/=100,e}},Hd={id:"cam16-ucs",fromXyz(n,e=[0,0,0]){fl.fromXyz(n,Bt);let t=Bt[1]*Kn.fl25,i=Math.log(1+.0228*t)/.0228,s=Bt[2]*ln;return e[0]=1.7*Bt[0]/(1+.007*Bt[0]),e[1]=i*Math.cos(s),e[2]=i*Math.sin(s),e},toXyz(n,e=[0,0,0]){let t=n[0],i=Math.sqrt(n[1]*n[1]+n[2]*n[2]),s=(Math.exp(.0228*i)-1)/.0228;Bt[0]=t/(1.7-.007*t),Bt[1]=s/Kn.fl25;let r=Math.atan2(n[2],n[1])*xs;return r<0&&(r+=360),Bt[2]=r,fl.toXyz(Bt,e)}},$d={id:"hct",fromXyz(n,e=[0,0,0]){return hn[0]=n[0]*100,hn[1]=n[1]*100,hn[2]=n[2]*100,Vd(hn,Kn,Bt),e[0]=Bt[2],e[1]=Bt[1],e[2]=E3(hn[1]),e},toXyz(n,e=[0,0,0]){let t=n[2];if(t<=0)return e[0]=0,e[1]=0,e[2]=0,e;let i=vh(Math.min(t,100));Bt[1]=n[1],Bt[2]=n[0];let s=0,r=400;for(let o=0;o<48;o++)Bt[0]=.5*(s+r),Gd(Bt,Kn,hn),hn[1]<i?s=Bt[0]:r=Bt[0];return e[0]=hn[0]/100,e[1]=hn[1]/100,e[2]=hn[2]/100,e}};var Xd=216/24389,Eh=24389/27,bh=Ot[0],Ro=Ot[1],qd=Ot[2],Sh=4*bh/(bh+15*Ro+3*qd),wh=9*Ro/(bh+15*Ro+3*qd),Mh=$e.m.fromXyz,Wd=[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];function Yd(n){let e=Math.pow(n+16,3)/1560896,t=e>Xd?e:n/Eh;for(let i=0;i<3;i++){let s=Mh[i*3],r=Mh[i*3+1],o=Mh[i*3+2];for(let a=0;a<2;a++){let c=(284517*s-94839*o)*t,l=(838422*o+769860*r+731718*s)*n*t-769860*a*n,h=(632260*o-126452*r)*t+126452*a,f=Wd[i*2+a];f[0]=c/h,f[1]=l/h}}return Wd}function C3(n,e){let t=e*ln,i=Math.sin(t),s=Math.cos(t),r=Yd(n),o=1/0;for(let a=0;a<6;a++){let c=r[a][1]/(i-r[a][0]*s);c>=0&&c<o&&(o=c)}return o}function R3(n){let e=Yd(n),t=1/0;for(let i=0;i<6;i++){let s=Math.abs(e[i][1])/Math.sqrt(e[i][0]*e[i][0]+1);s<t&&(t=s)}return t}function P3(n,e){let t=n[0]+15*n[1]+3*n[2],i=t===0?Sh:4*n[0]/t,s=t===0?wh:9*n[1]/t,r=n[1]/Ro,o=r>Xd?116*Math.cbrt(r)-16:Eh*r,a=13*o*(i-Sh),c=13*o*(s-wh);e[0]=o,e[1]=Math.sqrt(a*a+c*c);let l=Math.atan2(c,a)*xs;return l<0&&(l+=360),e[2]=e[1]<1e-12?0:l,e}function I3(n,e){let t=n[0];if(t<=1e-8)return e[0]=0,e[1]=0,e[2]=0,e;let i=n[2]*ln,s=n[1]*Math.cos(i),r=n[1]*Math.sin(i),o=s/(13*t)+Sh,a=r/(13*t)+wh,c=Ro*(t>8?Math.pow((t+16)/116,3):t/Eh);return e[0]=c*9*o/(4*a),e[1]=c,e[2]=c*(12-3*o-20*a)/(4*a),e}var Cn=[0,0,0];function Zd(n,e){return{id:n,toXyz(t,i=[0,0,0]){let s=(t[0]%360+360)%360,r=t[2];return r>99.9999999?(Cn[0]=100,Cn[1]=0):r<1e-8?(Cn[0]=0,Cn[1]=0):(Cn[0]=r,Cn[1]=e(r,s)/100*t[1]),Cn[2]=s,I3(Cn,i)},fromXyz(t,i=[0,0,0]){P3(t,Cn);let s=Cn[0],r;return s>99.9999999||s<1e-8?r=0:r=Cn[1]/e(s,Cn[2])*100,i[0]=Cn[2],i[1]=r,i[2]=s,i}}}var Jd=Zd("hsluv",C3),Kd=Zd("hpluv",n=>R3(n));var Th=Ot[0]*100,pl=100,Ah=Ot[2]*100,jd=175/198.04*(Th+pl),Qd=70/218.11*(pl+Ah),ep={id:"hunter-lab",fromXyz(n,e=[0,0,0]){let t=n[0]*100,i=n[1]*100,s=n[2]*100,r=i/pl;if(r<=0)return e[0]=0,e[1]=0,e[2]=0,e;let o=Math.sqrt(r);return e[0]=100*o,e[1]=jd*(t/Th-r)/o,e[2]=Qd*(r-s/Ah)/o,e},toXyz(n,e=[0,0,0]){let t=n[0]/100,i=t*t;return i<=0?(e[0]=0,e[1]=0,e[2]=0,e):(e[0]=Th*(n[1]*t/jd+i)/100,e[1]=pl*i/100,e[2]=Ah*(i-n[2]*t/Qd)/100,e)}},Po=.0037930732552754493,dl=Math.cbrt(Po),tp=[.3,.622,.078,.23,.692,.078,.2434226892454782,.2047674442449682,.5518098665095535],L3=st(tp),zn=[0,0,0],np={id:"xyb",fromXyz(n,e=[0,0,0]){ct($e.m.fromXyz,n,zn),ct(tp,zn,zn);let t=Math.cbrt(zn[0]+Po)-dl,i=Math.cbrt(zn[1]+Po)-dl,s=Math.cbrt(zn[2]+Po)-dl;return e[0]=(t-i)/2,e[1]=(t+i)/2,e[2]=s-(t+i)/2,e},toXyz(n,e=[0,0,0]){let t=i=>{let s=i+dl;return s*s*s-Po};return zn[0]=t(n[1]+n[0]),zn[1]=t(n[1]-n[0]),zn[2]=t(n[2]+n[1]),ct(L3,zn,zn),ct($e.m.toXyz,zn,e)}};var D3={601:{kr:.299,kb:.114,base:()=>$e},709:{kr:.2126,kb:.0722,base:()=>Tr},2020:{kr:.2627,kb:.0593,base:()=>Oi}},ip=16/255,sp=219/255,vs=128/255,ml=224/255,gi=[0,0,0];function rp(n={}){let e=D3[n.matrix];if(!e)throw new Error(`whitepoint: makeYCbCr requires matrix: '601' | '709' | '2020' (got ${JSON.stringify(n.matrix)})`);if(n.range!=="full"&&n.range!=="limited")throw new Error(`whitepoint: makeYCbCr requires range: 'full' | 'limited' (got ${JSON.stringify(n.range)})`);let t=n.range==="limited",{kr:i,kb:s}=e,r=1-i-s,o=e.base();return{id:`ycbcr-${n.matrix}-${n.range}`,toXyz(a,c=[0,0,0]){let l,h,f;t?(l=(a[0]-ip)/sp,h=(a[1]-vs)/ml,f=(a[2]-vs)/ml):(l=a[0],h=a[1]-vs,f=a[2]-vs);let u=l+2*(1-i)*f,d=l+2*(1-s)*h;return gi[0]=u,gi[1]=(l-i*u-s*d)/r,gi[2]=d,o.toXyz(gi,c)},fromXyz(a,c=[0,0,0]){o.fromXyz(a,gi);let l=i*gi[0]+r*gi[1]+s*gi[2],h=(gi[2]-l)/(2*(1-s)),f=(gi[0]-l)/(2*(1-i));return t?(c[0]=ip+sp*l,c[1]=vs+ml*h,c[2]=vs+ml*f):(c[0]=l,c[1]=vs+h,c[2]=vs+f),c}}}var op=rp({matrix:"601",range:"full"}),ap=rp({matrix:"709",range:"limited"});var cp=[.4122214708,.5363325363,.0514459929,.2119034982,.6806995451,.1073969566,.0883024619,.2817188376,.6299787005],Rn=[.2104542553,.793617785,-.0040720468,1.9779984951,-2.428592205,.4505937099,.0259040371,.7827717662,-.808675766];var kn=Ct(cp,$e.m.fromXyz),Kt=st(kn),_t=st(Rn),N3=kn[0],U3=kn[1],F3=kn[2],O3=kn[3],B3=kn[4],z3=kn[5],k3=kn[6],V3=kn[7],G3=kn[8],H3=Kt[0],$3=Kt[1],W3=Kt[2],X3=Kt[3],q3=Kt[4],Y3=Kt[5],Z3=Kt[6],J3=Kt[7],K3=Kt[8],j3=Rn[0],Q3=Rn[1],ey=Rn[2],ty=Rn[3],ny=Rn[4],iy=Rn[5],sy=Rn[6],ry=Rn[7],oy=Rn[8],hp=_t[0],up=_t[1],fp=_t[2],dp=_t[3],pp=_t[4],mp=_t[5],gp=_t[6],_p=_t[7],xp=_t[8],Bi={id:"oklab",fromXyz(n,e=[0,0,0]){let t=n[0],i=n[1],s=n[2],r=Math.cbrt(N3*t+U3*i+F3*s),o=Math.cbrt(O3*t+B3*i+z3*s),a=Math.cbrt(k3*t+V3*i+G3*s);return e[0]=j3*r+Q3*o+ey*a,e[1]=ty*r+ny*o+iy*a,e[2]=sy*r+ry*o+oy*a,e},toXyz(n,e=[0,0,0]){let t=n[0],i=n[1],s=n[2],r=hp*t+up*i+fp*s,o=dp*t+pp*i+mp*s,a=gp*t+_p*i+xp*s;return r=r*r*r,o=o*o*o,a=a*a*a,e[0]=H3*r+$3*o+W3*a,e[1]=X3*r+q3*o+Y3*a,e[2]=Z3*r+J3*o+K3*a,e}},lp=[0,0,0],vp={id:"oklch",fromXyz(n,e=[0,0,0]){return Tn(Bi.fromXyz(n,lp),e)},toXyz(n,e=[0,0,0]){return Bi.toXyz(en(n,lp),e)}};function gl(n){let e=Ct(n.m.fromXyz,Kt),t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return function(f,u=[0,0,0]){let d=f[0],g=f[1],v=f[2],m=hp*d+up*g+fp*v,p=dp*d+pp*g+mp*v,M=gp*d+_p*g+xp*v;return m=m*m*m,p=p*p*p,M=M*M*M,u[0]=t*m+i*p+s*M,u[1]=r*m+o*p+a*M,u[2]=c*m+l*p+h*M,u}}var ay=216/24389,wp=24389/27,cy=6/29,zi=an(Mt,Yt),ki=an(Yt,Mt),ly=zi[0],hy=zi[1],uy=zi[2],fy=zi[3],dy=zi[4],py=zi[5],my=zi[6],gy=zi[7],_y=zi[8],xy=ki[0],vy=ki[1],yy=ki[2],My=ki[3],by=ki[4],Sy=ki[5],wy=ki[6],Ey=ki[7],Ty=ki[8],yp=Jn[0],Mp=Jn[1],bp=Jn[2];function Ch(n){return n>ay?Math.cbrt(n):(wp*n+16)/116}function Rh(n){return n>cy?n*n*n:(116*n-16)/wp}var _l={id:"lab",fromXyz(n,e=[0,0,0]){let t=n[0],i=n[1],s=n[2],r=Ch((ly*t+hy*i+uy*s)/yp),o=Ch((fy*t+dy*i+py*s)/Mp),a=Ch((my*t+gy*i+_y*s)/bp);return e[0]=116*o-16,e[1]=500*(r-o),e[2]=200*(o-a),e},toXyz(n,e=[0,0,0]){let t=(n[0]+16)/116,i=n[1]/500+t,s=t-n[2]/200,r=Rh(i)*yp,o=Rh(t)*Mp,a=Rh(s)*bp;return e[0]=xy*r+vy*o+yy*a,e[1]=My*r+by*o+Sy*a,e[2]=wy*r+Ey*o+Ty*a,e}},Sp=[0,0,0],Ep={id:"lch",fromXyz(n,e=[0,0,0]){return Tn(_l.fromXyz(n,Sp),e)},toXyz(n,e=[0,0,0]){return _l.toXyz(en(n,Sp),e)}};function Io(n,e=[0,0,0]){let t=(n[0]%360+360)%360,i=n[1],s=n[2],r=i*Math.min(s,1-s),o=(0+t/30)%12,a=(8+t/30)%12,c=(4+t/30)%12;return e[0]=s-r*Math.max(-1,Math.min(o-3,9-o,1)),e[1]=s-r*Math.max(-1,Math.min(a-3,9-a,1)),e[2]=s-r*Math.max(-1,Math.min(c-3,9-c,1)),e}function ys(n,e=[0,0,0]){let t=n[0],i=n[1],s=n[2],r=Math.max(t,i,s),o=Math.min(t,i,s),a=(r+o)/2,c=r-o,l=0,h=0;return c!==0&&(h=a>.5?c/(2-r-o):c/(r+o),r===t?l=((i-s)/c+(i<s?6:0))*60:r===i?l=((s-t)/c+2)*60:l=((t-i)/c+4)*60),e[0]=l,e[1]=h,e[2]=a,e}function vl(n,e=[0,0,0]){let t=Math.min(n[0],n[1],n[2]),i=1-Math.max(n[0],n[1],n[2]);return ys(n,e),e[1]=t,e[2]=i,e}function yl(n,e=[0,0,0]){let t=n[1],i=n[2];if(t+i>=1){let r=t/(t+i);return e[0]=r,e[1]=r,e[2]=r,e}Io([n[0],1,.5],e);let s=1-t-i;return e[0]=e[0]*s+t,e[1]=e[1]*s+t,e[2]=e[2]*s+t,e}var xl=[0,0,0],Tp={id:"hsl",toXyz(n,e=[0,0,0]){return $e.toXyz(Io(n,xl),e)},fromXyz(n,e=[0,0,0]){return ys($e.fromXyz(n,xl),e)}},Ap={id:"hwb",toXyz(n,e=[0,0,0]){return $e.toXyz(yl(n,xl),e)},fromXyz(n,e=[0,0,0]){return vl($e.fromXyz(n,xl),e)}};var Ph={id:"xyz-d65",toXyz(n,e=[0,0,0]){return e[0]=n[0],e[1]=n[1],e[2]=n[2],e},fromXyz(n,e=[0,0,0]){return e[0]=n[0],e[1]=n[1],e[2]=n[2],e}},Cp=an(Yt,Mt),Rp=an(Mt,Yt),Pp={id:"xyz-d50",m:{toXyz:Cp,fromXyz:Rp},toXyz(n,e=[0,0,0]){return ct(Cp,n,e)},fromXyz(n,e=[0,0,0]){return ct(Rp,n,e)}};var bl=Ct(xd,Oi.m.fromXyz).map(n=>n*203),Ih=st(bl),Lh=st(To),ht=[0,0,0],Lp={id:"ictcp",fromXyz(n,e=[0,0,0]){return ct(bl,n,ht),ht[0]=yr(ht[0]),ht[1]=yr(ht[1]),ht[2]=yr(ht[2]),ct(To,ht,e)},toXyz(n,e=[0,0,0]){return ct(Lh,n,ht),ht[0]=Mr(ht[0]),ht[1]=Mr(ht[1]),ht[2]=Mr(ht[2]),ct(Ih,ht,e)}},jn=st(wn),Dh=st(mi),Ml={id:"jzazbz",fromXyz(n,e=[0,0,0]){let t=Math.max(n[0]*203,0),i=Math.max(n[1]*203,0),s=Math.max(n[2]*203,0),r=ms*t-(ms-1)*s,o=gs*i-(gs-1)*t,a=Zc(wn[0]*r+wn[1]*o+wn[2]*s),c=Zc(wn[3]*r+wn[4]*o+wn[5]*s),l=Zc(wn[6]*r+wn[7]*o+wn[8]*s),h=.5*a+.5*c;return e[0]=(1+Jt)*h/(1+Jt*h)-Ci,e[1]=mi[3]*a+mi[4]*c+mi[5]*l,e[2]=mi[6]*a+mi[7]*c+mi[8]*l,e},toXyz(n,e=[0,0,0]){let t=n[0]+Ci,i=t/(1+Jt-Jt*t);ht[0]=i,ht[1]=n[1],ht[2]=n[2],ct(Dh,ht,ht);let s=Jc(ht[0]),r=Jc(ht[1]),o=Jc(ht[2]),a=jn[0]*s+jn[1]*r+jn[2]*o,c=jn[3]*s+jn[4]*r+jn[5]*o,l=jn[6]*s+jn[7]*r+jn[8]*o,h=(a+(ms-1)*l)/ms,f=(c+(gs-1)*h)/gs;return e[0]=h/203,e[1]=f/203,e[2]=l/203,e}},Ip=[0,0,0],Dp={id:"jzczhz",fromXyz(n,e=[0,0,0]){return Tn(Ml.fromXyz(n,Ip),e)},toXyz(n,e=[0,0,0]){return Ml.toXyz(en(n,Ip),e)}};var Ay=216/24389,Np=24389/27,Vi=an(Mt,Yt),Gi=an(Yt,Mt),Fh=Jn[0],Lo=Jn[1],Fp=Jn[2],Nh=4*Fh/(Fh+15*Lo+3*Fp),Uh=9*Lo/(Fh+15*Lo+3*Fp),Vn=[0,0,0],Sl={id:"luv",fromXyz(n,e=[0,0,0]){let t=Vi[0]*n[0]+Vi[1]*n[1]+Vi[2]*n[2],i=Vi[3]*n[0]+Vi[4]*n[1]+Vi[5]*n[2],s=Vi[6]*n[0]+Vi[7]*n[1]+Vi[8]*n[2],r=t+15*i+3*s,o=r===0?Nh:4*t/r,a=r===0?Uh:9*i/r,c=i/Lo,l=c>Ay?116*Math.cbrt(c)-16:Np*c;return e[0]=l,e[1]=13*l*(o-Nh),e[2]=13*l*(a-Uh),e},toXyz(n,e=[0,0,0]){let t=n[0];if(t===0)return e[0]=0,e[1]=0,e[2]=0,e;let i=n[1]/(13*t)+Nh,s=n[2]/(13*t)+Uh,r=Lo*(t>8?Math.pow((t+16)/116,3):t/Np),o=r*9*i/(4*s),a=r*(12-3*i-20*s)/(4*s);return Vn[0]=o,Vn[1]=r,Vn[2]=a,e[0]=Gi[0]*Vn[0]+Gi[1]*Vn[1]+Gi[2]*Vn[2],e[1]=Gi[3]*Vn[0]+Gi[4]*Vn[1]+Gi[5]*Vn[2],e[2]=Gi[6]*Vn[0]+Gi[7]*Vn[1]+Gi[8]*Vn[2],e}},Up=[0,0,0],Op={id:"lchuv",fromXyz(n,e=[0,0,0]){return Tn(Sl.fromXyz(n,Up),e)},toXyz(n,e=[0,0,0]){return Sl.toXyz(en(n,Up),e)}};var wl=[0,0,0];function Oh(n,e=[0,0,0]){let t=Math.max(n[0],n[1],n[2]),i=Math.min(n[0],n[1],n[2]);return ys(n,e),e[1]=t===0?0:(t-i)/t,e[2]=t,e}function Bh(n,e=[0,0,0]){let t=(n[0]%360+360)%360,i=n[1],s=n[2],r=o=>{let a=(o+t/60)%6;return s-s*i*Math.max(0,Math.min(a,4-a,1))};return e[0]=r(5),e[1]=r(3),e[2]=r(1),e}function zh(n,e=[0,0,0]){let t=n[0]+n[1]+n[2],i=Math.min(n[0],n[1],n[2]);return ys(n,e),e[1]=t===0?0:1-3*i/t,e[2]=t/3,e}function kh(n,e=[0,0,0]){let t=(n[0]%360+360)%360,i=n[1],s=n[2],r=Math.abs(t/60%2-1),o=s*(1+i*(3/(2-r)-1)),a=s*(1+i*(3*(1-r)/(2-r)-1)),c=s*(1-i);switch(Math.floor(t/60)%6){case 0:e[0]=o,e[1]=a,e[2]=c;break;case 1:e[0]=a,e[1]=o,e[2]=c;break;case 2:e[0]=c,e[1]=o,e[2]=a;break;case 3:e[0]=c,e[1]=a,e[2]=o;break;case 4:e[0]=a,e[1]=c,e[2]=o;break;default:e[0]=o,e[1]=c,e[2]=a;break}return e}var Bp={id:"hsv",toXyz(n,e=[0,0,0]){return $e.toXyz(Bh(n,wl),e)},fromXyz(n,e=[0,0,0]){return Oh($e.fromXyz(n,wl),e)}},zp={id:"hsi",toXyz(n,e=[0,0,0]){return $e.toXyz(kh(n,wl),e)},fromXyz(n,e=[0,0,0]){return zh($e.fromXyz(n,wl),e)}};function kp(n,e=1e-6){return n[0]>=-e&&n[0]<=1+e&&n[1]>=-e&&n[1]<=1+e&&n[2]>=-e&&n[2]<=1+e}function Hp(n,e){let t=No(n);if(!t.m||t.transferName===void 0)throw new Error(`whitepoint: ${e} needs a bounded RGB gamut space (got "${t.id}")`);return t}function Vh(n,e=[0,0,0]){return e[0]=n[0]<0?0:n[0]>1?1:n[0],e[1]=n[1]<0?0:n[1]>1?1:n[1],e[2]=n[2]<0?0:n[2]>1?1:n[2],e}var Vp=new Map;function $p(n){let e=Vp.get(n.id);return e||(e={M:Ct(n.m.fromXyz,Kt),al:_t[0],am:_t[3],as:_t[6],l1:_t[1],l2:_t[2],m1:_t[4],m2:_t[5],s1:_t[7],s2:_t[8],whiteOklch:Qn([1,1,1],n,"oklch"),cusps:new Map},Vp.set(n.id,e)),e}function Gp(n,e,t,i,s,r,o){let a=n.al*s+e*r,c=n.am*s+t*r,l=n.as*s+i*r;a=a*a*a,c=c*c*c,l=l*l*l;let h=n.M;return o[0]=h[0]*a+h[1]*c+h[2]*l,o[1]=h[3]*a+h[4]*c+h[5]*l,o[2]=h[6]*a+h[7]*c+h[8]*l,o}function Do(n,e){let t=Hp(e,"findCusp"),i=$p(t),s=Math.round((n%360+360)%360*100),r=i.cusps.get(s);if(r)return r;let o=n*ln,a=Math.cos(o),c=Math.sin(o),l=i.l1*a+i.l2*c,h=i.m1*a+i.m2*c,f=i.s1*a+i.s2*c,u=i.M,d=M=>{let w=i.al+l*M,S=i.am+h*M,A=i.as+f*M;w=w*w*w,S=S*S*S,A=A*A*A;let E=u[0]*w+u[1]*S+u[2]*A,R=u[3]*w+u[4]*S+u[5]*A,x=u[6]*w+u[7]*S+u[8]*A;return[Math.min(E,R,x),Math.max(E,R,x)]},g=0,v=.05;for(;d(v)[0]>0;)if(g=v,v*=2,v>16)throw new Error(`whitepoint: no cusp found for hue ${n} in "${t.id}"`);for(let M=0;M<52;M++){let w=.5*(g+v);d(w)[0]>0?g=w:v=w}let m=g,p=Math.cbrt(1/d(m)[1]);return r=[p,m*p],i.cusps.set(s,r),r}var El=[0,0,0];function Wp(n,e,t,i=48){if(n<=0||n>=1)return 0;let s=Hp(t,"maxChromaAt"),r=$p(s),o=e*ln,a=Math.cos(o),c=Math.sin(o),l=r.l1*a+r.l2*c,h=r.m1*a+r.m2*c,f=r.s1*a+r.s2*c,u=0,d=.05;for(;d<2&&(Gp(r,l,h,f,n,d,El),!!kp(El,0));)u=d,d*=2;for(let g=0;g<i;g++){let v=.5*(u+d);Gp(r,l,h,f,n,v,El),kp(El,0)?u=v:d=v}return u}var Fo=.206,Gh=.03,Uo=(1+Fo)/(1+Gh),Oo=n=>.5*(Uo*n-Fo+Math.sqrt((Uo*n-Fo)*(Uo*n-Fo)+4*Gh*Uo*n)),Cl=n=>(n*n+Fo*n)/(Uo*(n+Gh)),Cy=gl($e),Tl=[0,0,0],Al=[0,0,0];function Xp(n,e,t,i){Al[0]=n,Al[1]=t*e,Al[2]=i*e,Cy(Al,Tl);let s=Math.max(Tl[0],Tl[1],Tl[2],0);return Math.cbrt(1/s)}function Ry(n,e){let t=.11516993+1/(7.4477897+4.1590124*e+n*(-2.19557347+1.75198401*e+n*(-2.13704948-10.02301043*e+n*(-4.24894561+5.38770819*e+4.69891013*n)))),i=.11239642+1/(1.6132032-.68124379*e+n*(.40370612+.90148123*e+n*(-.27087943+.6122399*e+n*(.00299215-.45399568*e-.14661872*n))));return[t,i]}function qp(n,e,t,i){let s=Do(e,$e),r=Wp(n,e,$e),o=s[1]/s[0],a=s[1]/(1-s[0]),c=r/Math.min(n*o,(1-n)*a),[l,h]=Ry(t,i),f=n*l,u=(1-n)*h,d=.9*c*Math.sqrt(Math.sqrt(1/(1/(f*f*f*f)+1/(u*u*u*u))));return f=n*.4,u=(1-n)*.8,[Math.sqrt(1/(1/(f*f)+1/(u*u))),d,r]}function Yp(n){let e=Math.atan2(n[2],n[1])*xs;return e<0&&(e+=360),e}function Py(n,e){let t=n[2];if(t>=1-1e-9)return e[0]=1,e[1]=0,e[2]=0,e;if(t<=1e-9)return e[0]=0,e[1]=0,e[2]=0,e;let i=(n[0]%360+360)%360,s=n[1],r=i*ln,o=Math.cos(r),a=Math.sin(r),c=Cl(t),[l,h,f]=qp(c,i,o,a),u;if(s<.8){let d=1.25*s,g=.8*l,v=1-g/h;u=d*g/(1-v*d)}else{let d=5*(s-.8),g=h,v=.2*h*h*1.25*1.25/l,m=1-v/(f-h);u=g+d*v/(1-m*d)}return e[0]=c,e[1]=u*o,e[2]=u*a,e}function Iy(n,e){let t=n[0],i=Math.sqrt(n[1]*n[1]+n[2]*n[2]);if(t>=1-1e-9)return e[0]=0,e[1]=0,e[2]=1,e;if(t<=1e-9)return e[0]=0,e[1]=0,e[2]=0,e;if(i<1e-12)return e[0]=0,e[1]=0,e[2]=Oo(t),e;let s=n[1]/i,r=n[2]/i,o=Yp(n),[a,c,l]=qp(t,o,s,r),h;if(i<c){let f=.8*a,u=1-f/c;h=i/(f+u*i)*.8}else{let f=c,u=.2*c*c*1.25*1.25/a,d=1-u/(l-c);h=.8+.2*((i-f)/(u+d*(i-f)))}return e[0]=o,e[1]=h,e[2]=Oo(t),e}function Ly(n,e){let t=n[2];if(t<=1e-9)return e[0]=0,e[1]=0,e[2]=0,e;let i=(n[0]%360+360)%360,s=n[1],r=i*ln,o=Math.cos(r),a=Math.sin(r),c=Do(i,$e),l=c[1]/c[0],h=c[1]/(1-c[0]),f=.5,u=1-f/l,d=f+h-h*u*s,g=1-s*f/d,v=s*h*f/d,m=t*g,p=t*v,M=Cl(g),w=v*M/g,S=Cl(m);p=m===0?0:p*S/m,m=S;let A=Xp(M,w,o,a);return m*=A,p*=A,e[0]=m,e[1]=p*o,e[2]=p*a,e}function Dy(n,e){let t=n[0],i=Math.sqrt(n[1]*n[1]+n[2]*n[2]);if(t<=1e-9)return e[0]=0,e[1]=0,e[2]=0,e;if(i<1e-12)return e[0]=0,e[1]=0,e[2]=Oo(t),e;let s=n[1]/i,r=n[2]/i,o=Yp(n),a=Do(o,$e),c=a[1]/a[0],l=a[1]/(1-a[0]),h=.5,f=1-h/c,u=l/(i+t*l),d=u*t,g=u*i,v=Cl(d),m=g*v/d,p=Xp(v,m,s,r);return t/=p,i/=p,i=i*Oo(t)/t,t=Oo(t),e[0]=o,e[1]=(h+l)*g/(l*h+l*f*g),e[2]=t/d,e}var Rl=[0,0,0],Zp={id:"okhsl",toXyz(n,e=[0,0,0]){return Bi.toXyz(Py(n,Rl),e)},fromXyz(n,e=[0,0,0]){return Iy(Bi.fromXyz(n,Rl),e)}},Jp={id:"okhsv",toXyz(n,e=[0,0,0]){return Bi.toXyz(Ly(n,Rl),e)},fromXyz(n,e=[0,0,0]){return Dy(Bi.fromXyz(n,Rl),e)}};var Hh={srgb:$e,"srgb-linear":Kc,"display-p3":Co,"a98-rgb":jc,"prophoto-rgb":Qc,rec2020:Oi,oklab:Bi,oklch:vp,lab:_l,lch:Ep,hsl:Tp,hwb:Ap,"xyz-d65":Ph,xyz:Ph,"xyz-d50":Pp,ictcp:Lp,jzazbz:Ml,jzczhz:Dp,luv:Sl,lchuv:Op,hsv:Bp,hsi:zp,okhsl:Zp,okhsv:Jp,bt709:Tr,"dci-p3":el,"aces2065-1":tl,acescg:nl,acescc:il,acescct:sl,"rec2100-pq":rl,"rec2100-hlg":ol,din99o:Bd,"din99o-lch":zd,cam16:fl,"cam16-ucs":Hd,hct:$d,hsluv:Jd,hpluv:Kd,"hunter-lab":ep,xyb:np,"ycbcr-601-full":op,"ycbcr-709-limited":ap};function No(n){if(typeof n=="string"){let e=Hh[n];if(!e)throw new Error(`whitepoint: unknown color space "${n}" (have: ${Object.keys(Hh).join(", ")})`);return e}return n}var jp=new Map;function Vt(n,e,t){jp.set(n+"|"+e,t)}Vt("hsl","srgb",Io);Vt("srgb","hsl",ys);Vt("hwb","srgb",yl);Vt("srgb","hwb",vl);var Qp=[0,0,0];Vt("hsl","hwb",(n,e)=>vl(Io(n,Qp),e));Vt("hwb","hsl",(n,e)=>ys(yl(n,Qp),e));Vt("hsv","srgb",Bh);Vt("srgb","hsv",Oh);Vt("hsi","srgb",kh);Vt("srgb","hsi",zh);Vt("oklab","oklch",(n,e)=>Tn(n,e));Vt("oklch","oklab",(n,e)=>en(n,e));Vt("lab","lch",(n,e)=>Tn(n,e));Vt("lch","lab",(n,e)=>en(n,e));var Ny=[0,0,0];for(let n of[$e,Co,Oi]){let e=gl(n),{encode:t}=br[n.transferName],i=(s,r=[0,0,0])=>(e(s,r),r[0]=t(r[0]),r[1]=t(r[1]),r[2]=t(r[2]),r);Vt("oklab",n.id,i),Vt("oklch",n.id,(s,r=[0,0,0])=>i(en(s,Ny),r))}function Uy(n,e){let t=Ct(e.m.fromXyz,n.m.toXyz),i=t[0],s=t[1],r=t[2],o=t[3],a=t[4],c=t[5],l=t[6],h=t[7],f=t[8],{decode:u}=br[n.transferName],{encode:d}=br[e.transferName];return(g,v=[0,0,0])=>{let m=u(g[0]),p=u(g[1]),M=u(g[2]);return v[0]=d(i*m+s*p+r*M),v[1]=d(o*m+a*p+c*M),v[2]=d(l*m+h*p+f*M),v}}var Fy=[0,0,0],Kp=new WeakMap,em=null,tm=null,nm=null;function Oy(n,e){let t=Kp.get(n);t===void 0&&Kp.set(n,t=new Map);let i=t.get(e);return i===void 0&&(i=jp.get(n.id+"|"+e.id),i===void 0&&(i=n.m&&e.m&&n.transferName!==void 0&&e.transferName!==void 0?Uy(n,e):null),t.set(e,i)),em=n,tm=e,nm=i,i}function Qn(n,e,t,i=[0,0,0]){let s=typeof e=="string"?No(e):e,r=typeof t=="string"?No(t):t;if(s===r)return i[0]=n[0],i[1]=n[1],i[2]=n[2],i;let o=s===em&&r===tm?nm:Oy(s,r);return o!==null?o(n,i):r.fromXyz(s.toXyz(n,Fy),i)}var Hi=di.x.length,rm=di.start,om=di.step,Wh=new Array(Hi),Ar=new Array(Hi),Hs=new Array(Hi),Cr=new Array(Hi);{let n=0;for(let e=0;e<Hi;e++){let t=rm+e*om;Wh[e]=(t-595)/235;let i=Rr(Yc,t);Ar[e]=i*di.x[e],Hs[e]=i*di.y[e],Cr[e]=i*di.z[e],n+=Hs[e]}for(let e=0;e<Hi;e++)Ar[e]/=n,Hs[e]/=n,Cr[e]/=n}var am=n=>.5+n/(2*Math.sqrt(1+n*n)),im=n=>{let e=2*n-1;return e/Math.sqrt(1-e*e)};function sm(n,e,t){e[0]=0,e[1]=0,e[2]=0;for(let i=0;i<9;i++)t[i]=0;for(let i=0;i<Hi;i++){let s=Wh[i],r=n[0]*s*s+n[1]*s+n[2],o=am(r);e[0]+=o*Ar[i],e[1]+=o*Hs[i],e[2]+=o*Cr[i];let a=.5/Math.pow(1+r*r,1.5),c=a*s*s,l=a*s,h=a;t[0]+=c*Ar[i],t[1]+=l*Ar[i],t[2]+=h*Ar[i],t[3]+=c*Hs[i],t[4]+=l*Hs[i],t[5]+=h*Hs[i],t[6]+=c*Cr[i],t[7]+=l*Cr[i],t[8]+=h*Cr[i]}}var Ms=[0,0,0],$h=new Array(9),Vs=[0,0,0],Gs=[0,0,0];function By(n){let[e,t,i]=n;if(t<=1e-6)return[0,0,im(1e-4)];let r=Math.min(Math.max(t,5e-4),.9995)/t;e*=r,t*=r,i*=r;let o=[0,0,im(Math.min(Math.max(t,.001),.999))],a=1/0;for(let c=0;c<60&&(sm(o,Ms,$h),Gs[0]=Ms[0]-e,Gs[1]=Ms[1]-t,Gs[2]=Ms[2]-i,a=Math.max(Math.abs(Gs[0]),Math.abs(Gs[1]),Math.abs(Gs[2])),!(a<1e-10));c++){ct(st($h),Gs,Vs);let l=1;for(let h=0;h<10;h++){let f=[o[0]-l*Vs[0],o[1]-l*Vs[1],o[2]-l*Vs[2]];if(sm(f,Ms,$h),Math.max(Math.abs(Ms[0]-e),Math.abs(Ms[1]-t),Math.abs(Ms[2]-i))<a){o[0]=f[0],o[1]=f[1],o[2]=f[2];break}l*=.5,h===9&&(o[0]-=l*Vs[0],o[1]-=l*Vs[1],o[2]-=l*Vs[2])}}return o}var Pl=new Map;function Bo(n,e="srgb"){let t=Qn(n,e,"xyz-d65"),i=`${t[0].toFixed(6)},${t[1].toFixed(6)},${t[2].toFixed(6)}`,s=Pl.get(i);if(s)return s;let r=By(t),o=new Array(Hi);for(let a=0;a<Hi;a++){let c=Wh[a];o[a]=am(r[0]*c*c+r[1]*c+r[2])}return s={start:rm,step:om,values:o},Pl.size>512&&Pl.clear(),Pl.set(i,s),s}var Xh={hydrogen:[[383.5397,1969e4,13.4306],[388.9064,2835e4,13.386],[397.0075,4301e4,13.3209],[410.1734,7007e4,13.2207],[434.0472,1265e5,13.0545],[486.1286949,3867e4,12.7485],[486.1297761,1934e4,12.7485],[486.135,2694e5,12.7485],[656.27097,2155e5,12.0875],[656.272483,8979e4,12.0875],[656.277153,449e5,12.0875],[656.279,7938e5,12.0875],[656.285175,3879e5,12.0875]],helium:[[381.96074,536300,24.2092],[381.96074,8044e3,24.2092],[381.96074,4505e4,24.2092],[381.96074,8044e3,24.2092],[381.96074,2413e4,24.2092],[383.3554,4824e3,24.4513],[387.1791,6693e3,24.4194],[388.8648,2842e4,23.0071],[388.8648,4737e4,23.0071],[393.5912,744800,24.3672],[396.47291,2085e4,23.7421],[402.3973,1128e3,24.2983],[402.61914,966700,24.0427],[402.61914,145e5,24.0427],[402.61914,8121e4,24.0427],[402.61914,145e5,24.0427],[402.61914,435e5,24.0427],[412.08154,7421e3,23.972],[412.08154,4453e3,23.972],[414.3761,2441e4,24.2092],[416.8967,183e4,24.1912],[438.79296,4494e4,24.0428],[443.7551,3269e3,24.0112],[447.14802,2048e3,23.7361],[447.14802,3072e4,23.7361],[447.14802,1721e5,23.7361],[447.14802,3072e4,23.7361],[447.14802,9216e4,23.7361],[471.31457,1587e4,23.594],[471.31457,9521e3,23.594],[492.19313,9932e4,23.7363],[501.56783,4012e4,23.087],[504.7738,6771e3,23.6736],[587.5621,8837e4,23.0737],[587.5621,495e6,23.0737],[587.5621,8839e4,23.0737],[587.5621,2651e5,23.0737],[667.8151,3185e5,23.0741],[706.519,4642e4,22.7185],[706.519,2785e4,22.7185],[706.571,9284e3,22.7185],[728.1349,183e5,22.9203]],neon:[[453.63003,1287e3,21.114],[453.76768,2385e3,21.1132],[453.77545,408e4,21.1131],[470.25305,486e3,21.0174],[470.43949,105e5,21.0164],[470.88594,978e4,21.0139],[471.0065,409e4,21.0132],[488.4917,2905e3,21.1132],[488.50971,51e4,21.1131],[495.53905,807e3,21.114],[495.70335,53e5,21.1132],[495.7122,1705e3,21.1131],[500.51587,3059e3,21.1132],[500.53467,765e3,21.1131],[503.13484,938e4,21.0187],[503.15087,49e4,21.0186],[503.60016,104e4,21.0164],[503.75927,1582e3,21.0156],[503.77512,3996e4,21.0155],[507.40459,42e4,21.0187],[507.42007,71e5,21.0186],[507.65971,858e3,21.0174],[507.87693,43e4,21.0164],[508.0383,2373e4,21.0156],[508.39773,375e3,21.0139],[511.36724,2601e3,20.8055],[511.65032,1295e4,20.8042],[511.70246,48e4,20.8039],[512.05059,1041e3,21.114],[512.22565,98e5,21.1132],[512.23613,315e4,21.1131],[514.49384,2303e4,21.1132],[514.51351,3905e3,21.1131],[515.1961,855e4,21.0186],[515.44271,387e4,21.0174],[515.66672,755e3,21.0164],[515.89018,336e4,21.114],[516.34847,408e3,21.0132],[519.13223,2598e3,21.114],[519.31251,4575e3,21.1132],[519.3224,79e5,21.1131],[520.38962,1617e4,21.0187],[520.88648,715e4,21.0164],[521.05672,3066e3,21.0156],[521.43389,1317e3,21.0139],[532.6396,1647e3,20.7087],[533.0672,347e4,21.0186],[533.07775,265e5,20.7068],[533.33083,141e4,21.0174],[533.571,26e4,21.0164],[534.10938,2322e4,20.7023],[534.32834,976e4,20.7014],[535.5164,2345e3,21.0187],[535.53394,59e4,21.0186],[536.04271,945e3,21.0164],[536.22334,483e3,21.0156],[536.62169,261e3,21.0139],[537.4975,1932e3,21.0174],[538.32457,54e4,21.0139],[540.05616,9e5,18.966],[541.2649,1505e3,21.0164],[541.85584,1134e3,21.0139],[542.0155,433e3,21.0132],[543.36513,849e3,20.6628],[544.85091,465e3,20.6566],[556.24416,715e3,20.8042],[556.27662,6916e3,20.804],[556.30531,51e4,20.8039],[565.25664,2211e3,20.8055],[565.60258,183e4,20.8042],[565.66588,1475e4,20.8039],[566.25489,1593e3,20.5706],[568.98163,705e4,20.5601],[571.88798,127e4,20.8042],[571.92248,6888e3,20.804],[571.953,98e4,20.8039],[574.82985,2338e4,20.7114],[574.86446,1265e3,20.7113],[576.05885,253e4,20.7068],[576.40525,385e4,20.7055],[576.44188,1008e5,20.7054],[577.03067,1212e3,21.114],[580.409,1316e3,20.7114],[580.44496,18e6,20.7113],[581.14066,2211e3,20.7087],[581.66219,865e3,20.7068],[582.01558,602e5,20.7055],[582.89063,861e3,20.7023],[585.24878,615e5,18.966],[586.84165,2478e3,20.8055],[587.2145,3345e3,20.8042],[587.28275,3035e4,20.8039],[588.1895,345e5,18.7264],[589.83287,603e3,20.8055],[590.20944,3675e3,20.8042],[590.24623,5992e4,20.804],[590.27835,625e4,20.8039],[590.64294,2255e4,20.7113],[591.3633,957e4,20.7087],[591.89068,891e4,20.8055],[591.9029,2075e3,20.7068],[593.44522,108e4,20.7014],[593.93154,6e5,20.6628],[594.4834,565e5,18.7041],[596.16228,684e4,20.8055],[596.5471,3205e4,20.8042],[596.6179,121e4,20.8039],[597.46273,4242e4,20.7114],[597.55343,1053e4,18.6934],[598.23753,297e3,20.7087],[598.79074,1815e4,20.7068],[599.16477,826e4,20.7055],[600.09275,342e4,20.7023],[602.99968,1683e4,18.7264],[604.2013,468e3,21.0174],[604.61348,678e3,20.6628],[606.45359,164e4,20.6566],[607.43376,603e5,18.7114],[609.6163,905e5,18.7041],[611.80187,1827e3,20.6628],[612.84498,201e4,18.6934],[614.2508,82e5,20.7113],[614.30627,141e6,18.6368],[615.02985,399e4,20.7087],[615.6138,86e4,20.7068],[616.35937,438e5,18.7264],[617.28156,427e3,20.7014],[617.48829,5264e3,20.7114],[617.52842,15e5,20.7113],[618.2146,186e5,20.5601],[618.31575,354e3,20.7087],[618.90649,294e4,20.7068],[619.30663,126e4,20.7055],[620.2974,732e3,20.7023],[620.57775,456e4,20.7087],[621.38758,855e4,20.5706],[621.72812,1911e4,18.6127],[622.5735,1857e3,20.7023],[624.67294,3985e3,20.5601],[625.87884,303e4,20.7068],[626.64952,747e5,18.6934],[627.30141,2982e3,20.7023],[627.60327,125e4,20.7014],[629.37447,1917e3,20.6628],[630.47893,208e5,18.6368],[631.36855,34e5,20.6566],[632.81646,1017e4,20.6628],[633.08894,438e4,20.5706],[633.44276,805e5,18.5758],[635.18532,1035e3,20.6628],[636.49963,8e5,20.5601],[638.29914,963e5,18.6127],[640.1076,417e4,20.6628],[640.2248,3604e5,18.5551],[640.97469,423e4,20.5706],[642.17044,21e5,20.6566],[644.47118,58e5,20.5601],[650.65277,15e7,18.5758],[653.28824,324e5,18.6127],[659.89528,696e5,18.7264],[660.29007,1428e3,20.5706],[664.00095,310500,20.5601],[664.08,11400,20.5706],[665.20925,29e4,18.7114],[666.6892,1071e3,20.5706],[667.82766,1165e5,18.7041],[671.7043,651e5,18.6934],[672.11342,154500,20.5706],[673.8032,375e4,20.8055],[675.95821,8e5,20.5601],[692.94672,87e6,18.6368],[702.405,567e4,18.6127],[703.24128,798e5,18.3816],[705.12922,714e4,20.1395],[705.91079,373e5,20.1375],[706.4762,17e4,20.1361],[711.23075,1884e3,20.7087],[713.854,66e4,20.7023],[717.3938,1435e4,18.5758],[724.51665,303e5,18.3816],[730.48422,765e3,20.6628],[743.88981,741e4,18.3816],[747.24383,888e4,20.0404],[748.88712,1155e5,20.0367],[753.57739,918e5,20.0264],[754.40439,387e5,20.0246],[772.46233,474e3,20.5706]],sodium:[[384.8,168e6,36.3167],[386.55,464e6,36.2591],[387.29,72e6,36.2529],[388.18,163e7,36.2456],[388.57,248e6,36.3286],[390.04,462e6,36.3167],[391.79,528e6,36.2591],[392.56,27e7,36.2529],[393.06,1e8,36.3286],[394.26,84e6,36.2392],[398.03,3e7,36.2529],[399.77,32e6,36.2392],[400.88,3e7,36.2306],[413.082,34480,5.105],[413.082,310200,5.105],[413.584,40400,5.1013],[413.584,363600,5.1013],[413.774,68e3,5.1],[414.184,44800,5.097],[414.184,403200,5.097],[414.403,80200,5.0954],[414.893,56800,5.0919],[414.893,511200,5.0919],[415.175,95600,5.09],[415.74,68400,5.0858],[415.74,618e3,5.0858],[416.057,115200,5.0835],[416.767,83600,5.0785],[416.767,75e4,5.0785],[417.156,140600,5.0757],[417.67,28e7,36.2591],[418.022,103200,5.0695],[418.022,93e4,5.0695],[418.509,174e3,5.0661],[418.55,294e6,36.2529],[419.598,130800,5.0584],[419.598,1176e3,5.0584],[420.216,218e3,5.0541],[420.49,1e8,36.2392],[421.613,168e3,5.0444],[421.613,1512e3,5.0444],[422.381,28e4,5.0389],[424.2082,221600,5.0263],[424.2082,1992e3,5.0263],[425.252,368e3,5.0192],[425.38,3e7,36.2529],[427.3642,1564e3,5.0026],[427.39,64e6,36.2392],[427.6787,312e3,5.0026],[427.6787,2814e3,5.0026],[428.67,56e6,36.2306],[429.1006,494e3,4.993],[432.4615,456e3,4.9706],[432.4615,4104e3,4.9706],[434.1489,652e3,4.9573],[434.4736,13e5,4.9573],[439.0029,3932e3,4.9257],[439.334,702e4,4.9257],[439.334,78e4,4.9257],[441.9885,564e3,4.9067],[442.3246,1122e3,4.9067],[443.23,84e6,35.4967],[449.4177,492e4,4.8603],[449.7658,876e4,4.8603],[449.7658,976e3,4.8603],[454.1633,752e3,4.8315],[454.5186,15e5,4.8315],[466.48107,832e4,4.7594],[466.85595,1656e3,4.7594],[466.85595,1494e4,4.7594],[474.7941,1238e3,4.7129],[475.18218,246e4,4.7129],[497.85414,1636e4,4.592],[498.28134,2928e4,4.592],[507.12,246e6,35.4967],[514.88381,228e4,4.5096],[515.34024,454e4,4.5096],[516.25,9e7,35.4967],[525.64,12e6,35.4967],[562.1,84e6,35.4967],[568.26333,404e5,4.2835],[568.81934,808e4,4.2835],[568.82046,726e5,4.2835],[574.42,24e6,35.4967],[588.995095,2464e5,2.1044],[589.592424,1228e5,2.1023],[615.42253,5e6,4.1164],[616.0747,996e4,4.1164],[737.323,216800,4.8724],[737.349,106e3,4.8724]],argon:[[383.4679,75e4,15.0604],[394.7505,28e4,14.6883],[394.8979,138e4,14.6871],[404.4418,165e4,14.6883],[415.859,7e6,14.5289],[416.418,87e4,14.5249],[418.1884,168e4,14.6871],[419.0713,14e5,14.5061],[419.1029,162e4,14.6807],[419.8317,257e4,14.5759],[420.0674,679e4,14.4991],[425.1185,333e3,14.464],[425.9362,398e4,14.7381],[426.6286,155e4,14.5289],[427.2169,24e5,14.5249],[430.0101,1885e3,14.5061],[433.3561,285e4,14.6883],[433.5338,117e4,14.6871],[434.5168,9e5,14.6807],[451.0733,118e4,14.5759],[452.2323,27e4,14.464],[459.6097,285e3,14.5249],[462.8441,191500,14.5061],[470.2316,327e3,14.464],[515.1391,239e4,15.3132],[516.2285,57e5,15.3081],[518.7746,69e5,15.2963],[522.1271,792e4,15.4497],[542.1352,3e6,15.362],[545.1652,235e4,15.1806],[549.5874,1521e4,15.331],[550.6113,252e4,15.346],[555.8702,71e5,15.1368],[557.2541,462e4,15.3192],[560.6733,66e5,15.1177],[565.0704,32e5,15.1005],[573.952,435e4,15.3127],[583.4263,26e5,15.2963],[586.031,855e3,15.0221],[588.2624,123e4,15.0141],[588.8584,645e4,15.1806],[591.2085,315e4,15.0036],[592.8813,33e5,15.1855],[594.2669,9e5,15.1806],[598.7302,84e4,15.1459],[599.8999,7e5,15.161],[602.515,27e5,15.3594],[603.2127,2214e4,15.1305],[604.3223,1029e4,15.1459],[605.2723,95e4,14.9549],[605.9372,21e5,14.9526],[609.8803,156e4,15.1855],[610.5635,605e4,15.3127],[614.5441,532e4,15.3192],[617.0174,25e5,15.1806],[617.3096,335e4,15.161],[621.2503,273e4,15.1669],[621.5938,285e4,15.2963],[629.6872,45e5,15.2963],[630.7657,3e6,15.1368],[636.9575,126e4,15.1177],[638.4717,1263e3,14.8484],[641.6307,58e5,14.8388],[653.8112,77e4,14.9715],[660.4853,91e3,14.9715],[666.0676,78e4,15.0141],[666.4051,75e4,14.9549],[667.7282,236e3,13.4799],[675.2834,965e4,14.7425],[675.6163,18e5,15.1368],[676.6612,12e5,15.0036],[687.1289,834e4,14.7109],[687.9582,9e5,14.9549],[688.8174,125e4,14.9526],[693.7664,308e4,14.6936],[695.1478,11e5,14.9549],[696.025,12e5,14.9526],[696.5431,192e5,13.3279],[703.0251,1335e4,14.8388],[706.7218,19e6,13.3022],[706.8736,6e6,14.8484],[710.7478,225e4,14.8388],[712.582,18e5,15.0221],[714.7042,189e4,13.2826],[715.8839,21e5,15.0141],[720.698,744e4,15.0221],[726.5172,51e4,14.8592],[727.0664,77e4,14.7805],[727.2936,549e4,13.3279],[731.1716,51e5,14.8484],[731.6005,288e4,15.0221],[735.0814,12e5,15.0141],[735.3293,672e4,14.7805],[737.2118,171e5,14.7571],[738.398,425e5,13.3022],[739.298,216e4,14.8484],[741.2337,195e4,14.9549],[742.5294,217e4,14.9715],[743.5368,45e5,14.8388],[743.6297,135e4,14.7425],[750.3869,45e6,13.4799],[751.4652,4e7,13.273],[763.5106,1225e5,13.1718],[772.3761,156e5,13.1531],[772.4207,351e5,13.3279]],krypton:[[427.396943,995e4,12.8153],[428.296734,531e3,12.8092],[428.648687,3e6,13.454],[430.048652,1599e3,13.4446],[431.85524,2565e3,12.7854],[431.95795,875e4,12.7847],[435.135969,222e4,13.4922],[436.264157,1284e3,12.7564],[437.612159,374e4,12.8648],[439.996634,63e5,13.4607],[441.03681,84e4,13.454],[442.519007,1815e3,13.4446],[445.391749,1985e3,12.8153],[446.369,3543e3,12.8092],[450.235427,39e5,12.7854],[455.02985,21900,12.7564],[551.66665,46200,12.8092],[556.222534,55e4,12.1437],[557.028944,294e4,12.1404],[558.038729,6e5,12.8648],[564.956177,387e3,12.7564],[567.24509,45e3,12.1004],[570.75129,129500,12.8153],[572.356,24900,12.8092],[578.38938,2058e3,13.5861],[578.729,15500,12.7854],[578.824,1449e3,13.5861],[580.554126,45e5,13.5797],[581.08,525e3,13.4365],[582.707,39e5,13.4306],[586.675017,591e3,12.7564],[587.091599,355e4,12.1437],[587.990035,165e3,12.1404],[599.38502,15e4,12.1004],[601.21555,1195e4,13.3651],[605.612628,195e5,13.3501],[607.52551,1211e4,13.5861],[608.286117,71e5,13.3411],[622.273337,477e4,13.4365],[623.635161,745e4,13.4306],[624.140471,1495e3,13.4306],[634.668195,434e4,13.396],[635.191539,1414e3,13.396],[636.83212,435e3,13.3894],[637.359016,46e5,13.3894],[641.567923,427e4,13.375],[642.1027,2653e4,13.375],[644.879938,154e4,13.3651],[645.419,385e3,13.3651],[645.628888,5985e4,13.3629],[648.806917,267e4,13.4365],[650.490424,99e4,13.3501],[650.83693,525e3,13.4306],[653.65517,288e4,13.4224],[655.569463,96e4,13.4365],[657.64204,395e4,13.4306],[665.223475,109e5,13.3894],[669.92296,1176e4,13.396],[672.3344,655e3,13.3894],[674.00985,335e4,13.3651],[679.54104,393e3,13.3501],[681.310882,1285e4,13.3651],[682.90888,177e4,13.3411],[684.64003,99e4,13.1139],[686.96308,666e4,13.3501],[690.46787,795e4,13.0986],[700.079,123e4,13.4365],[705.727,48e5,13.4224],[714.345,385e3,13.0386],[715.221,996e3,13.0365],[722.4103,149e5,13.0192],[728.7262,891e4,13.0044],[735.996,234e4,13.3501],[742.554,765e4,13.1139],[748.6862,1445e4,13.0986],[749.415,305e4,13.0986],[758.74136,431e5,11.666],[760.15457,1366e5,11.5458],[768.52459,4064e4,12.2565],[769.45401,1281e4,11.5261],[774.137,322e4,13.0442],[774.6828,118e5,12.9035],[774.916,644e3,13.0442],[776.843,515e3,13.0386],[777.628,44e5,13.0386]],xenon:[[395.0924,28e5,11.4525],[396.75411,371e4,11.4394],[397.4417,7e5,11.434],[419.3528,154e4,11.271],[420.3695,55e4,11.2639],[450.0978,438e4,11.0691],[452.46805,23e5,11.0547],[458.27472,13e5,11.1412],[461.18882,9e4,11.0029],[462.42756,121e5,10.9957],[467.12258,1743e4,10.9688],[469.097,84e4,10.9576],[469.70208,368e4,10.9542],[473.41518,69e5,11.0547],[479.2619,36e4,10.9016],[480.7019,429e4,11.015],[482.9708,18e5,11.0029],[484.32934,351e4,10.9957],[491.6507,48e5,10.9576],[492.3152,487e4,10.9542],[502.82794,48e4,10.9016],[520.607,55e4,11.961],[530.637,8e5,11.916],[545.645,132e3,11.8518],[546.0037,125e4,11.8503],[553.278,9e5,11.961],[555.728,3e5,11.916],[564.619,135e4,11.916],[570.687,21e4,11.7521],[571.5716,175e4,11.7487],[572.214,108e4,11.8518],[572.61,45e4,11.8503],[579.226,45e4,11.961],[582.052,2e6,11.8503],[591.665,65e4,11.916],[599.8115,174e4,11.7521],[600.7909,8e5,11.7487],[600.978,63e4,11.8518],[601.41,65e3,11.8503],[610.388,36e4,11.8518],[610.837,9e5,11.8503],[611.1951,35e5,11.7487],[618.91,39e4,11.5829],[619.826,33e5,11.5799],[631.497,93e4,11.7521],[632.581,105e3,11.7487],[643.0155,15e5,11.7487],[646.15,36e4,11.8518],[648.7765,47e5,11.4907],[653.3159,309e4,11.5829],[654.336,135e4,11.5799],[666.6965,55e5,11.5799],[681.564,63e4,11.7521],[686.6838,46e5,11.4907],[688.2155,4081e4,11.4867],[691.082,222e4,11.5829],[692.222,15e4,11.5799],[697.6182,1337e4,11.4975],[701.902,245e4,11.4867],[703.553,12e5,11.5829],[704.737,32e5,11.5799],[711.9598,7551e4,11.4617],[728.5301,2045e4,11.4907],[731.687,75e4,11.2742],[738.6003,625e4,11.2583],[739.3793,3423e4,11.4975],[742.405,43e5,11.4907],[744.194,329e4,11.4867],[751.496,63e4,11.5829],[764.2024,63e6,11.0691]],mercury:[[404.6565,621e5,7.7305],[407.7837,4e6,7.9261],[410.8054,22e5,9.7209],[433.92232,145e5,9.5601],[434.74945,42e6,9.5547],[435.8335,168e6,7.7305],[491.6068,58e5,9.225],[502.56,80100,9.17],[546.075,147e6,7.7305],[576.961,118e6,8.852],[578.969,18e5,8.8445],[579.067,155e6,8.8442],[607.264,18e4,9.7716],[623.436,9e5,9.9143],[671.634,72e4,9.7716],[690.746,8e6,9.5249],[772.8825,18e5,9.5298]]};var cm={start:360,step:1,x:[1299e-7,145847e-9,.0001638021,.0001840037,.0002066902,2321e-7,260728e-9,293075e-9,329388e-9,369914e-9,4149e-7,.0004641587,518986e-9,581854e-9,.0006552347,7416e-7,.0008450296,.0009645268,.001094949,.001231154,.001368,.00150205,.001642328,.001802382,.001995757,.002236,.002535385,.002892603,.003300829,.003753236,.004243,.004762389,.005330048,.005978712,.006741117,.00765,.008751373,.01002888,.0114217,.01286901,.01431,.01570443,.01714744,.01878122,.02074801,.02319,.02620736,.02978248,.03388092,.03846824,.04351,.0489956,.0550226,.0617188,.069212,.07763,.08695811,.09717672,.1084063,.1207672,.13438,.1493582,.1653957,.1819831,.198611,.21477,.2301868,.2448797,.2587773,.2718079,.2839,.2949438,.3048965,.3137873,.3216454,.3285,.3343513,.3392101,.3431213,.3461296,.34828,.3495999,.3501474,.350013,.349287,.34806,.3463733,.3442624,.3418088,.3390941,.3362,.3331977,.3300411,.3266357,.3228868,.3187,.3140251,.308884,.3032904,.2972579,.2908,.2839701,.2767214,.2689178,.2604227,.2511,.2408475,.2298512,.2184072,.2068115,.19536,.1842136,.1733273,.1626881,.1522833,.1421,.1321786,.1225696,.1132752,.1042979,.09564,.08729955,.07930804,.07171776,.06458099,.05795001,.05186211,.04628152,.04115088,.03641283,.03201,.0279172,.0241444,.020687,.0175404,.0147,.01216179,.00991996,.00796724,.006296346,.0049,.003777173,.00294532,.00242488,.002236293,.0024,.00292552,.00383656,.00517484,.00698208,.0093,.01214949,.01553588,.01947752,.02399277,.0291,.03481485,.04112016,.04798504,.05537861,.06327,.07163501,.08046224,.08973996,.09945645,.1096,.1201674,.1311145,.1423679,.1538542,.1655,.1772571,.18914,.2011694,.2133658,.2257499,.2383209,.2510668,.2639922,.2771017,.2904,.3038912,.3175726,.3314384,.3454828,.3597,.3740839,.3886396,.4033784,.4183115,.4334499,.4487953,.464336,.480064,.4959713,.5120501,.5282959,.5446916,.5612094,.5778215,.5945,.6112209,.6279758,.6447602,.6615697,.6784,.6952392,.7120586,.7288284,.7455188,.7621,.7785432,.7948256,.8109264,.8268248,.8425,.8579325,.8730816,.8878944,.9023181,.9163,.9297995,.9427984,.9552776,.9672179,.9786,.9893856,.9995488,1.0090892,1.0180064,1.0263,1.0339827,1.040986,1.047188,1.0524667,1.0567,1.0597944,1.0617992,1.0628068,1.0629096,1.0622,1.0607352,1.0584436,1.0552244,1.0509768,1.0456,1.0390369,1.0313608,1.0226662,1.0130477,1.0026,.9913675,.9793314,.9664916,.9528479,.9384,.923194,.907244,.890502,.87292,.8544499,.835084,.814946,.794186,.772954,.7514,.7295836,.7075888,.6856022,.6638104,.6424,.6215149,.6011138,.5811052,.5613977,.5419,.5225995,.5035464,.4847436,.4661939,.4479,.4298613,.412098,.394644,.3775333,.3608,.3444563,.3285168,.3130192,.2980011,.2835,.2695448,.2561184,.2431896,.2307272,.2187,.2070971,.1959232,.1851708,.1748323,.1649,.1553667,.14623,.13749,.1291467,.1212,.1136397,.106465,.09969044,.09333061,.0874,.08190096,.07680428,.07207712,.06768664,.0636,.05980685,.05628216,.05297104,.04981861,.04677,.04378405,.04087536,.03807264,.03540461,.0329,.03056419,.02838056,.02634484,.02445275,.0227,.02108429,.01959988,.01823732,.01698717,.01584,.01479064,.01383132,.01294868,.0121292,.01135916,.01062935,.009938846,.009288422,.008678854,.008110916,.007582388,.007088746,.006627313,.006195408,.005790346,.005409826,.005052583,.004717512,.004403507,.004109457,.003833913,.003575748,.003334342,.003109075,.002899327,.002704348,.00252302,.002354168,.002196616,.00204919,.00191096,.001781438,.00166011,.001546459,.001439971,.001340042,.001246275,.001158471,.00107643,.0009999493,.0009287358,.0008624332,.0008007503,743396e-9,.0006900786,.0006405156,.0005945021,.0005518646,512429e-9,.0004760213,.0004424536,.0004115117,.0003829814,.0003566491,.0003323011,.0003097586,.0002888871,.0002695394,.0002515682,.0002348261,219171e-9,.0002045258,.0001908405,.0001780654,.0001661505,.0001550236,.0001446219,.0001349098,125852e-9,117413e-9,.0001095515,.0001022245,9539445e-11,890239e-10,8307527e-11,7751269e-11,7231304e-11,6745778e-11,6292844e-11,5870652e-11,5477028e-11,5109918e-11,4767654e-11,4448567e-11,4150994e-11,3873324e-11,3614203e-11,3372352e-11,3146487e-11,2935326e-11,2737573e-11,2552433e-11,2379376e-11,221787e-10,2067383e-11,1927226e-11,179664e-10,1674991e-11,1561648e-11,1455977e-11,1357387e-11,1265436e-11,1179723e-11,1099844e-11,1025398e-11,9559646e-12,8912044e-12,8308358e-12,7745769e-12,7221456e-12,6732475e-12,6276423e-12,5851304e-12,5455118e-12,5085868e-12,4741466e-12,4420236e-12,4120783e-12,3841716e-12,3581652e-12,3339127e-12,3112949e-12,2902121e-12,2705645e-12,2522525e-12,2351726e-12,2192415e-12,2043902e-12,1905497e-12,1776509e-12,1656215e-12,1544022e-12,143944e-11,1341977e-12,1251141e-12],y:[3917e-9,4393581e-12,4929604e-12,5532136e-12,6208245e-12,6965e-9,7813219e-12,8767336e-12,9839844e-12,1104323e-11,1239e-8,1388641e-11,1555728e-11,1744296e-11,1958375e-11,2202e-8,2483965e-11,2804126e-11,3153104e-11,3521521e-11,39e-6,428264e-10,469146e-10,515896e-10,571764e-10,64e-6,7234421e-11,8221224e-11,9350816e-11,.0001061361,12e-5,134984e-9,151492e-9,170208e-9,191816e-9,217e-6,.0002469067,28124e-8,31852e-8,.0003572667,396e-6,.0004337147,473024e-9,517876e-9,.0005722187,64e-5,72456e-8,8255e-7,94116e-8,.00106988,.00121,.001362091,.001530752,.001720368,.001935323,.00218,.0024548,.002764,.0031178,.0035264,.004,.00454624,.00515932,.00582928,.00654616,.0073,.008086507,.00890872,.00976768,.01066443,.0116,.01257317,.01358272,.01462968,.01571509,.01684,.01800736,.01921448,.02045392,.02171824,.023,.02429461,.02561024,.02695857,.02835125,.0298,.03131083,.03288368,.03452112,.03622571,.038,.03984667,.041768,.043766,.04584267,.048,.05024368,.05257304,.05498056,.05745872,.06,.06260197,.06527752,.06804208,.07091109,.0739,.077016,.0802664,.0836668,.0872328,.09098,.09491755,.09904584,.1033674,.1078846,.1126,.117532,.1226744,.1279928,.1334528,.13902,.1446764,.1504693,.1564619,.1627177,.1693,.1762431,.1835581,.1912735,.199418,.20802,.2171199,.2267345,.2368571,.2474812,.2586,.2701849,.2822939,.2950505,.308578,.323,.3384021,.3546858,.3716986,.3892875,.4073,.4256299,.4443096,.4633944,.4829395,.503,.5235693,.544512,.56569,.5869653,.6082,.6293456,.6503068,.6708752,.6908424,.71,.7281852,.7454636,.7619694,.7778368,.7932,.8081104,.8224962,.8363068,.8494916,.862,.8738108,.8849624,.8954936,.9054432,.9148501,.9237348,.9320924,.9399226,.9472252,.954,.9602561,.9660074,.9712606,.9760225,.9803,.9840924,.9874182,.9903128,.9928116,.9949501,.9967108,.9980983,.999112,.9997482,1,.9998567,.9993046,.9983255,.9968987,.995,.9926005,.9897426,.9864444,.9827241,.9786,.9740837,.9691712,.9638568,.9581349,.952,.9454504,.9384992,.9311628,.9234576,.9154,.9070064,.8982772,.8892048,.8797816,.87,.8598613,.849392,.838622,.8275813,.8163,.8047947,.793082,.781192,.7691547,.757,.7447541,.7324224,.7200036,.7074965,.6949,.6822192,.6694716,.6566744,.6438448,.631,.6181555,.6053144,.5924756,.5796379,.5668,.5539611,.5411372,.5283528,.5156323,.503,.4904688,.4780304,.4656776,.4534032,.4412,.42908,.417036,.405032,.393032,.381,.3689184,.3568272,.3447768,.3328176,.321,.3093381,.2978504,.2865936,.2756245,.265,.2547632,.2448896,.2353344,.2260528,.217,.2081616,.1995488,.1911552,.1829744,.175,.1672235,.1596464,.1522776,.1451259,.1382,.1315003,.1250248,.1187792,.1127691,.107,.1014762,.09618864,.09112296,.08626485,.0816,.07712064,.07282552,.06871008,.06476976,.061,.05739621,.05395504,.05067376,.04754965,.04458,.04175872,.03908496,.03656384,.03420048,.032,.02996261,.02807664,.02632936,.02470805,.0232,.02180077,.02050112,.01928108,.01812069,.017,.01590379,.01483718,.01381068,.01283478,.01192,.01106831,.01027339,.009533311,.008846157,.00821,.007623781,.007085424,.006591476,.006138485,.005723,.005343059,.004995796,.004676404,.004380075,.004102,.003838453,.003589099,.003354219,.003134093,.002929,.002738139,.002559876,.002393244,.002237275,.002091,.001953587,.00182458,.00170358,.001590187,.001484,.001384496,.001291268,.001204092,.001122744,.001047,.0009765896,.0009111088,.0008501332,.0007932384,74e-5,.0006900827,64331e-8,599496e-9,.0005584547,52e-5,.0004839136,.0004500528,.0004183452,.0003887184,3611e-7,.0003353835,.0003114404,.0002891656,.0002684539,2492e-7,.0002313019,.0002146856,.0001992884,.0001850475,1719e-7,.0001597781,.0001486044,.0001383016,.0001287925,12e-5,.0001118595,.0001043224,973356e-10,9084587e-11,848e-7,7914667e-11,73858e-9,68916e-9,6430267e-11,6e-5,5598187e-11,522256e-10,487184e-10,4544747e-11,424e-7,3956104e-11,3691512e-11,3444868e-11,3214816e-11,3e-5,2799125e-11,2611356e-11,2436024e-11,2272461e-11,212e-7,1977855e-11,1845285e-11,1721687e-11,1606459e-11,1499e-8,1398728e-11,1305155e-11,1217818e-11,1136254e-11,106e-7,9885877e-12,9217304e-12,8592362e-12,8009133e-12,74657e-10,6959567e-12,6487995e-12,6048699e-12,5639396e-12,52578e-10,4901771e-12,456972e-11,4260194e-12,3971739e-12,37029e-10,3452163e-12,3218302e-12,30003e-10,2797139e-12,26078e-10,243122e-11,2266531e-12,2113013e-12,1969943e-12,18366e-10,171223e-11,1596228e-12,148809e-11,1387314e-12,12934e-10,120582e-11,1124143e-12,1048009e-12,977058e-12,91093e-11,849251e-12,791721e-12,73809e-11,68811e-11,64153e-11,59809e-11,557575e-12,519808e-12,484612e-12,45181e-11],z:[6061e-7,.0006808792,.0007651456,.0008600124,.0009665928,.001086,.001220586,.001372729,.001543579,.001734286,.001946,.002177777,.002435809,.002731953,.003078064,.003486,.003975227,.00454088,.00515832,.005802907,.006450001,.007083216,.007745488,.008501152,.009414544,.01054999,.0119658,.01365587,.01558805,.01773015,.02005001,.02251136,.02520288,.02827972,.03189704,.03621,.04143771,.04750372,.05411988,.06099803,.06785001,.07448632,.08136156,.08915364,.09854048,.1102,.1246133,.1417017,.1613035,.1832568,.2074,.2336921,.2626114,.2947746,.3307985,.3713,.4162091,.4654642,.5196948,.5795303,.6456,.7184838,.7967133,.8778459,.959439,1.0390501,1.1153673,1.1884971,1.2581233,1.3239296,1.3856,1.4426352,1.4948035,1.5421903,1.5848807,1.62296,1.6564048,1.6852959,1.7098745,1.7303821,1.74706,1.7600446,1.7696233,1.7762637,1.7804334,1.7826,1.7829682,1.7816998,1.7791982,1.7758671,1.77211,1.7682589,1.764039,1.7589438,1.7524663,1.7441,1.7335595,1.7208581,1.7059369,1.6887372,1.6692,1.6475287,1.6234127,1.5960223,1.564528,1.5281,1.4861114,1.4395215,1.3898799,1.3387362,1.28764,1.2374223,1.1878243,1.1387611,1.090148,1.0419,.9941976,.9473473,.9014531,.8566193,.8129501,.7705173,.7294448,.6899136,.6521049,.6162,.5823286,.5504162,.5203376,.4919673,.46518,.4399246,.4161836,.3938822,.3729459,.3533,.3348578,.3175521,.3013375,.2861686,.272,.2588171,.2464838,.2347718,.2234533,.2123,.2011692,.1901196,.1792254,.1685608,.1582,.1481383,.1383758,.1289942,.1200751,.1117,.1039048,.09666748,.08998272,.08384531,.07824999,.07320899,.06867816,.06456784,.06078835,.05725001,.05390435,.05074664,.04775276,.04489859,.04216,.03950728,.03693564,.03445836,.03208872,.02984,.02771181,.02569444,.02378716,.02198925,.0203,.01871805,.01724036,.01586364,.01458461,.0134,.01230723,.01130188,.01037792,.009529306,.008749999,.0080352,.0073816,.0067854,.0062428,.005749999,.0053036,.0048998,.0045342,.0042024,.0039,.0036232,.0033706,.0031414,.0029348,.002749999,.0025852,.0024386,.0023094,.0021968,.0021,.002017733,.0019482,.0018898,.001840933,.0018,.001766267,.0017378,.0017112,.001683067,.001650001,.001610133,.0015644,.0015136,.001458533,.0014,.001336667,.00127,.001205,.001146667,.0011,.0010688,.0010494,.0010356,.0010212,.001,96864e-8,92992e-8,88688e-8,84256e-8,8e-4,76096e-8,72368e-8,68592e-8,64544e-8,6e-4,.0005478667,4916e-7,4354e-7,.0003834667,34e-5,.0003072533,28316e-8,26544e-8,.0002518133,24e-5,.0002295467,22064e-8,21196e-8,.0002021867,19e-5,.0001742133,15564e-8,13596e-8,.0001168533,1e-4,8613333e-11,746e-7,65e-6,5693333e-11,4999999e-11,4416e-8,3948e-8,3572e-8,3264e-8,3e-5,2765333e-11,2556e-8,2364e-8,2181333e-11,2e-5,1813333e-11,162e-7,142e-7,1213333e-11,1e-5,7733333e-12,54e-7,32e-7,1333333e-12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};function Rr(n,e){let t=(e-n.start)/n.step;if(t<0||t>n.values.length-1)return 0;let i=Math.floor(t);if(i===n.values.length-1)return n.values[i];let s=t-i;return n.values[i]*(1-s)+n.values[i+1]*s}function Pr(n,{cmf:e=di}={},t=[0,0,0]){let i=0,s=0,r=0;for(let o=0;o<e.x.length;o++){let a=e.start+o*e.step,c=Rr(n,a);i+=c*e.x[o],s+=c*e.y[o],r+=c*e.z[o]}return t[0]=i*e.step,t[1]=s*e.step,t[2]=r*e.step,t}function Il(n,{illuminant:e=Yc,cmf:t=di}={},i=[0,0,0]){let s=0,r=0,o=0,a=0;for(let c=0;c<t.x.length;c++){let l=t.start+c*t.step,h=Rr(e,l),f=Rr(n,l),u=h*f;s+=u*t.x[c],r+=u*t.y[c],o+=u*t.z[c],a+=h*t.y[c]}return i[0]=s/a,i[1]=r/a,i[2]=o/a,i}var lm=.014388;function hm(n,{start:e=360,step:t=5,end:i=830}={}){let s=Math.round((i-e)/t)+1,r=new Array(s),o=56e-8,a=Math.pow(o,-5)/(Math.exp(lm/(o*n))-1);for(let c=0;c<s;c++){let l=(e+c*t)*1e-9;r[c]=Math.pow(l,-5)/(Math.exp(lm/(l*n))-1)/a}return{start:e,step:t,values:r}}function um(n,e,t){let i=new Array(n.values.length);for(let s=0;s<i.length;s++){let r=Rr(e,n.start+s*n.step);i[s]=n.values[s]*Math.exp(-r*t)}return{start:n.start,step:n.step,values:i}}function fm(n,{start:e=360,step:t=1,end:i=830,fwhm:s=2}={}){let r=s/(2*Math.sqrt(2*Math.LN2)),o=1/(r*Math.sqrt(2*Math.PI)),a=Math.round((i-e)/t)+1,c=new Array(a).fill(0);for(let[l,h]of n)for(let f=0;f<a;f++){let u=(e+f*t-l)/r;c[f]+=h*o*Math.exp(-.5*u*u)}return{start:e,step:t,values:c}}function dm(n,{kT:e=.5,...t}={}){let i=n.map(([s,r,o])=>[s,r/s*Math.exp(-o/e)]);return fm(i,t)}function pm(n){return fm([[588.995,2],[589.5924,1]],n)}var qh={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};var zy={deg:1,grad:360/400,rad:180/Math.PI,turn:360},mm=/^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/i;function Dt(n,e,t=1){if(n==="none")return NaN;if(n.endsWith("%")){let i=n.slice(0,-1);return mm.test(i)?parseFloat(i)/100*e:void 0}if(mm.test(n))return parseFloat(n)*t}function Ll(n){if(n==="none")return NaN;let e=n.match(/^([+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?)(deg|grad|rad|turn)?$/i);if(e)return parseFloat(e[1])*(e[2]?zy[e[2].toLowerCase()]:1)}function gm(n){if(n===void 0)return 1;let e=Dt(n,1);if(e!==void 0)return Number.isNaN(e)?NaN:Math.min(1,Math.max(0,e))}var bs=n=>n<0?0:n;function _m(n){return parseInt(n,16)/255}function xm(n){let e=n.slice(1);if(!/^[0-9a-f]+$/i.test(e))return null;if(e.length===3||e.length===4){let t=[...e].map(i=>_m(i+i));return{space:"srgb",coords:t.slice(0,3),alpha:e.length===4?t[3]:1}}if(e.length===6||e.length===8){let t=[];for(let i=0;i<e.length;i+=2)t.push(_m(e.slice(i,i+2)));return{space:"srgb",coords:t.slice(0,3),alpha:e.length===8?t[3]:1}}return null}var ky={srgb:"srgb","srgb-linear":"srgb-linear","display-p3":"display-p3","a98-rgb":"a98-rgb","prophoto-rgb":"prophoto-rgb",rec2020:"rec2020",xyz:"xyz-d65","xyz-d65":"xyz-d65","xyz-d50":"xyz-d50",ictcp:"ictcp",jzazbz:"jzazbz","rec2100-pq":"rec2100-pq","rec2100-hlg":"rec2100-hlg"},zo={rgb:{space:"srgb",ch:[n=>Dt(n,1,1/255),n=>Dt(n,1,1/255),n=>Dt(n,1,1/255)]},hsl:{space:"hsl",ch:[Ll,n=>bs(Dt(n,1,1/100)),n=>bs(Dt(n,1,1/100))]},hwb:{space:"hwb",ch:[Ll,n=>Dt(n,1,1/100),n=>Dt(n,1,1/100)]},lab:{space:"lab",ch:[n=>bs(Dt(n,100)),n=>Dt(n,125),n=>Dt(n,125)]},lch:{space:"lch",ch:[n=>bs(Dt(n,100)),n=>bs(Dt(n,150)),Ll]},oklab:{space:"oklab",ch:[n=>bs(Dt(n,1)),n=>Dt(n,.4),n=>Dt(n,.4)]},oklch:{space:"oklch",ch:[n=>bs(Dt(n,1)),n=>bs(Dt(n,.4)),Ll]}};zo.rgba=zo.rgb;zo.hsla=zo.hsl;function vm(n){if(typeof n!="string")return null;let e=n.trim().toLowerCase();if(e==="")return null;if(e[0]==="#")return xm(e);if(e==="transparent")return{space:"srgb",coords:[0,0,0],alpha:0};let t=qh[e];if(t)return xm(t);let i=e.match(/^([a-z][a-z0-9-]*)\(\s*(.*?)\s*\)$/s);if(!i)return null;let[,s,r]=i,o=r.replace(/,/g," ").split("/");if(o.length>2)return null;let a=o[0].trim().split(/\s+/).filter(Boolean),c=o.length===2?o[1].trim():void 0;if(c!==void 0&&(c===""||/\s/.test(c)))return null;if(s==="color"){let u=ky[a[0]];if(!u||(a=a.slice(1),a.length===4&&c===void 0&&(c=a.pop()),a.length!==3))return null;let d=a.map(v=>Dt(v,1)),g=gm(c);return d.some(v=>v===void 0)||g===void 0?null:{space:u,coords:d,alpha:g}}let l=zo[s];if(!l||(a.length===4&&c===void 0&&(c=a.pop()),a.length!==3))return null;let h=a.map((u,d)=>l.ch[d](u)),f=gm(c);return h.some(u=>u===void 0)||f===void 0?null:{space:l.space,coords:h,alpha:f}}function ei(n,e,t=[0,0,0]){let i=vm(n);return i===null?null:Qn(i.coords,i.space,e,t)}var $s={cmf:cm},ym={start:360,step:1,end:830},Nl={neon:"Ne I \u2014 the classic red-orange; 640.2 nm strongest",argon:"Ar I \u2014 pale lavender",mercury:"Hg I \u2014 blue-white; 435.8 / 546.1 nm",helium:"He I \u2014 peach; D3 587.6 nm",krypton:"Kr I \u2014 pale white-lavender",xenon:"Xe I \u2014 blue-violet",hydrogen:"H I \u2014 Balmer pink; H\u03B1 656.3 nm"};function Yh(n){let e=Pr(n,$s)[1];return{start:n.start,step:n.step,values:n.values.map(t=>t/e)}}function Zh(n){return Yh(n==="sodium-lamp"?pm():dm(Xh[n]))}function Dl(n){return Vh(Qn(n,"xyz-d65","srgb"))}function Vy(n){let e=Yh(hm(2700,ym)),t=n.map(s=>{let r=Bo(ei(s,"srgb"),"srgb"),o={start:r.start,step:r.step,values:r.values.map(l=>-Math.log(Math.max(l,.001)))},a=um(e,o,1),c=Pr(a,$s);return{spd:a,xyz:c,naive:Dl(c)}}),i={...ym,values:new Array(e.values.length).fill(0)};for(let s of t)s.spd.values.forEach((r,o)=>{i.values[o]+=r});return{panes:t,spd:Yh(i)}}var Ul={brick:ei("#7c4935","srgb"),mortar:ei("#8d857a","srgb"),asphalt:ei("#3a3c42","srgb"),asphaltWet:ei("#1c1e24","srgb"),door:ei("#2e5950","srgb"),concrete:ei("#6f6a62","srgb"),panel:ei("#16181d","srgb"),metal:ei("#2c3138","srgb")};function Mm(n){let e=null,t=n.map(r=>{let o;if(r.window){let c=Vy(r.window);e=c.panes,o=c.spd}else o=Zh(r.gas);let a=Pr(o,$s);return{...r,spd:o,xyz:a,naive:Dl(a)}}),i={};for(let[r,o]of Object.entries(Ul)){let a=Bo(o,"srgb");i[r]=t.map(c=>Il(a,{illuminant:c.spd,...$s}))}let s=Pr(Zh("sodium-lamp"),$s).map(r=>r*.035);return{lights:t,pairs:i,windowPanes:e,sky:s,skyNaive:Dl(s.map(r=>r*12))}}function Jh(n,e,t){let i=n.lights[e];i.gas=t,i.spd=Zh(t),i.xyz=Pr(i.spd,$s),i.naive=Dl(i.xyz);for(let[s,r]of Object.entries(Ul))n.pairs[s][e]=Il(Bo(r,"srgb"),{illuminant:i.spd,...$s});return i}function un(n){let e=[];n.transferName!=="linear"&&e.push({k:"transfer",name:n.transferName,dir:"decode"}),e.push({k:"mat3",m:n.m.toXyz});let t=[{k:"mat3",m:n.m.fromXyz}];return n.transferName!=="linear"&&t.push({k:"transfer",name:n.transferName,dir:"encode"}),{toXyzOps:e,fromXyzOps:t}}var bm={toXyzOps:[{k:"mat3",m:_t},{k:"cube3"},{k:"mat3",m:Kt}],fromXyzOps:[{k:"mat3",m:kn},{k:"cbrt3"},{k:"mat3",m:Rn}]},Am=an(Mt,Yt),Cm=an(Yt,Mt),Sm={m:[0,116,0,500,-500,0,0,200,-200],b:[-16,0,0]},wm={m:[1/116,1/500,0,1/116,0,0,1/116,0,-1/200],b:[16/116,16/116,16/116]},Em={toXyzOps:[{k:"affine",m:wm.m,b:wm.b},{k:"labFInv3"},{k:"mulW",w:Jn},{k:"mat3",m:Cm}],fromXyzOps:[{k:"mat3",m:Am},{k:"divW",w:Jn},{k:"labF3"},{k:"affine",m:Sm.m,b:Sm.b}]};function Kh(n){return{toXyzOps:[{k:"polarToRect"},...n.toXyzOps],fromXyzOps:[...n.fromXyzOps,{k:"rectToPolar"}]}}var $i={srgb:un($e),"srgb-linear":un(Kc),"display-p3":un(Co),"a98-rgb":un(jc),"prophoto-rgb":un(Qc),rec2020:un(Oi),oklab:bm,oklch:Kh(bm),lab:Em,lch:Kh(Em),"xyz-d65":{toXyzOps:[],fromXyzOps:[]},xyz:{toXyzOps:[],fromXyzOps:[]},"xyz-d50":{toXyzOps:[{k:"mat3",m:Cm}],fromXyzOps:[{k:"mat3",m:Am}]},bt709:un(Tr),"dci-p3":un(el),"aces2065-1":un(tl),acescg:un(nl),acescc:un(il),acescct:un(sl),"rec2100-pq":un(rl),"rec2100-hlg":un(ol),ictcp:{toXyzOps:[{k:"mat3",m:Lh},{k:"transfer",name:"pqabs",dir:"decode"},{k:"mat3",m:Ih}],fromXyzOps:[{k:"mat3",m:bl},{k:"transfer",name:"pqabs",dir:"encode"},{k:"mat3",m:To}]}},Tm=[ms,0,1-ms,1-gs,gs,0,0,0,1];$i.jzazbz={toXyzOps:[{k:"jzInv"},{k:"mat3",m:Dh},{k:"transfer",name:"jzpq",dir:"decode"},{k:"mat3",m:jn},{k:"mat3",m:st(Tm)},{k:"mulW",w:[1/203,1/203,1/203]}],fromXyzOps:[{k:"mulW",w:[203,203,203]},{k:"clamp0"},{k:"mat3",m:Tm},{k:"mat3",m:wn},{k:"transfer",name:"jzpq",dir:"encode"},{k:"mat3",m:mi},{k:"jzFwd"}]};$i.jzczhz=Kh($i.jzazbz);var jh=(9.72-15)/17.52,Qh=(Math.log2(65504)+9.72)/17.52,eu=.155251141552511,Ir=Math.pow(2,-16),tu=Math.pow(2,-15),nu="0.017453292519943295",Gy="57.29577951308232",iu=216/24389,Lr=24389/27,su=6/29;function Ss(n,e){let t=String(n);return e!=="js"&&!/[.e]/.test(t)&&(t+=".0"),t}function Im(n){let e=[];for(let t of n){let i=e[e.length-1];t.k==="mat3"&&i&&i.k==="mat3"?e[e.length-1]={k:"mat3",m:Ct(t.m,i.m)}:e.push(t)}return e}function ru(n){let e=i=>Ss(i,n),t=e(.3333333333333333);return n==="js"?{srgb_decode:"const wp_srgb_decode = (v) => { const a = Math.abs(v); const m = a <= 0.04045 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4); return v < 0 ? -m : m; };",srgb_encode:`const wp_srgb_encode = (v) => { const a = Math.abs(v); const m = a <= 0.0031308 ? 12.92 * a : 1.055 * Math.pow(a, ${e(1/2.4)}) - 0.055; return v < 0 ? -m : m; };`,a98_decode:`const wp_a98_decode = (v) => { const m = Math.pow(Math.abs(v), ${e(Ri)}); return v < 0 ? -m : m; };`,a98_encode:`const wp_a98_encode = (v) => { const m = Math.pow(Math.abs(v), ${e(1/Ri)}); return v < 0 ? -m : m; };`,prophoto_decode:`const wp_prophoto_decode = (v) => { const a = Math.abs(v); const m = a <= ${e(16*Pi)} ? a / 16 : Math.pow(a, 1.8); return v < 0 ? -m : m; };`,prophoto_encode:`const wp_prophoto_encode = (v) => { const a = Math.abs(v); const m = a >= ${e(Pi)} ? Math.pow(a, ${e(1/1.8)}) : 16 * a; return v < 0 ? -m : m; };`,rec2020_decode:`const wp_rec2020_decode = (v) => { const a = Math.abs(v); const m = a < ${e(Ii*4.5)} ? a / 4.5 : Math.pow((a + ${e(zt-1)}) / ${e(zt)}, ${e(1/.45)}); return v < 0 ? -m : m; };`,rec2020_encode:`const wp_rec2020_encode = (v) => { const a = Math.abs(v); const m = a < ${e(Ii)} ? 4.5 * a : ${e(zt)} * Math.pow(a, 0.45) - ${e(zt-1)}; return v < 0 ? -m : m; };`,labF:`const wp_labF = (t) => t > ${e(iu)} ? Math.cbrt(t) : (t * ${e(Lr)} + 16) / 116;`,labFInv:`const wp_labFInv = (t) => t > ${e(su)} ? t * t * t : (116 * t - 16) / ${e(Lr)};`,bt709_decode:`const wp_bt709_decode = (v) => { const a = Math.abs(v); const m = a < ${e(Li*4.5)} ? a / 4.5 : Math.pow((a + ${e(kt-1)}) / ${e(kt)}, ${e(1/.45)}); return v < 0 ? -m : m; };`,bt709_encode:`const wp_bt709_encode = (v) => { const a = Math.abs(v); const m = a < ${e(Li)} ? 4.5 * a : ${e(kt)} * Math.pow(a, 0.45) - ${e(kt-1)}; return v < 0 ? -m : m; };`,gamma26_decode:"const wp_gamma26_decode = (v) => { const m = Math.pow(Math.abs(v), 2.6); return v < 0 ? -m : m; };",gamma26_encode:`const wp_gamma26_encode = (v) => { const m = Math.pow(Math.abs(v), ${e(1/2.6)}); return v < 0 ? -m : m; };`,acescc_decode:`const wp_acescc_decode = (v) => { if (v < ${e(jh)}) return (Math.pow(2, v * 17.52 - 9.72) - ${e(Ir)}) * 2; if (v < ${e(Qh)}) return Math.pow(2, v * 17.52 - 9.72); return 65504; };`,acescc_encode:`const wp_acescc_encode = (v) => { if (v <= 0) return ${e(Ao)}; if (v < ${e(tu)}) return (Math.log2(${e(Ir)} + v * 0.5) + 9.72) / 17.52; return (Math.log2(v) + 9.72) / 17.52; };`,acescct_decode:`const wp_acescct_decode = (v) => { if (v > ${e(eu)}) return Math.pow(2, v * 17.52 - 9.72); return (v - ${e(Ni)}) / ${e(Di)}; };`,acescct_encode:`const wp_acescct_encode = (v) => { if (v <= 0.0078125) return ${e(Di)} * v + ${e(Ni)}; return (Math.log2(v) + 9.72) / 17.52; };`,pqabs_decode:`const wp_pqabs_decode = (v) => { if (v <= 0) return 0; const e = Math.pow(v, ${e(1/Zt)}); const num = Math.max(e - ${e(pt)}, 0); return 10000 * Math.pow(num / (${e(mt)} - ${e(gt)} * e), ${e(1/dt)}); };`,pqabs_encode:`const wp_pqabs_encode = (v) => { if (v <= 0) return 0; const y = Math.pow(v / 10000, ${e(dt)}); return Math.pow((${e(pt)} + ${e(mt)} * y) / (1 + ${e(gt)} * y), ${e(Zt)}); };`,jzpq_decode:`const wp_jzpq_decode = (v) => { if (v <= 0) return 0; const e = Math.pow(v, ${e(1/Ai)}); const num = Math.max(e - ${e(pt)}, 0); return 10000 * Math.pow(num / (${e(mt)} - ${e(gt)} * e), ${e(1/dt)}); };`,jzpq_encode:`const wp_jzpq_encode = (v) => { if (v <= 0) return 0; const y = Math.pow(v / 10000, ${e(dt)}); return Math.pow((${e(pt)} + ${e(mt)} * y) / (1 + ${e(gt)} * y), ${e(Ai)}); };`,rec2100pq_decode:`const wp_rec2100pq_decode = (v) => { if (v <= 0) return 0; const e = Math.pow(v, ${e(1/Zt)}); const num = Math.max(e - ${e(pt)}, 0); return 10000 * Math.pow(num / (${e(mt)} - ${e(gt)} * e), ${e(1/dt)}) / ${e(203)}; };`,rec2100pq_encode:`const wp_rec2100pq_encode = (v) => { const n = v * ${e(203)}; if (n <= 0) return 0; const y = Math.pow(n / 10000, ${e(dt)}); return Math.pow((${e(pt)} + ${e(mt)} * y) / (1 + ${e(gt)} * y), ${e(Zt)}); };`,rec2100hlg_decode:`const wp_rec2100hlg_decode = (v) => { if (v <= 0) return 0; if (v <= 0.5) return ((v * v) / 3) * ${e(En)}; return ((Math.exp((v - ${e(Fi)}) / ${e(Bn)}) + ${e(Ui)}) / 12) * ${e(En)}; };`,rec2100hlg_encode:`const wp_rec2100hlg_encode = (v) => { if (v <= 0) return 0; const x = v / ${e(En)}; if (x <= ${e(1/12)}) return Math.sqrt(3 * x); return ${e(Bn)} * Math.log(12 * x - ${e(Ui)}) + ${e(Fi)}; };`}:n==="glsl"?{srgb_decode:"float wp_srgb_decode(float v) { float a = abs(v); float m = a <= 0.04045 ? a / 12.92 : pow((a + 0.055) / 1.055, 2.4); return v < 0.0 ? -m : m; }",srgb_encode:`float wp_srgb_encode(float v) { float a = abs(v); float m = a <= 0.0031308 ? 12.92 * a : 1.055 * pow(a, ${e(1/2.4)}) - 0.055; return v < 0.0 ? -m : m; }`,a98_decode:`float wp_a98_decode(float v) { float m = pow(abs(v), ${e(Ri)}); return v < 0.0 ? -m : m; }`,a98_encode:`float wp_a98_encode(float v) { float m = pow(abs(v), ${e(1/Ri)}); return v < 0.0 ? -m : m; }`,prophoto_decode:`float wp_prophoto_decode(float v) { float a = abs(v); float m = a <= ${e(16*Pi)} ? a / 16.0 : pow(a, 1.8); return v < 0.0 ? -m : m; }`,prophoto_encode:`float wp_prophoto_encode(float v) { float a = abs(v); float m = a >= ${e(Pi)} ? pow(a, ${e(1/1.8)}) : 16.0 * a; return v < 0.0 ? -m : m; }`,rec2020_decode:`float wp_rec2020_decode(float v) { float a = abs(v); float m = a < ${e(Ii*4.5)} ? a / 4.5 : pow((a + ${e(zt-1)}) / ${e(zt)}, ${e(1/.45)}); return v < 0.0 ? -m : m; }`,rec2020_encode:`float wp_rec2020_encode(float v) { float a = abs(v); float m = a < ${e(Ii)} ? 4.5 * a : ${e(zt)} * pow(a, 0.45) - ${e(zt-1)}; return v < 0.0 ? -m : m; }`,labF:`float wp_labF(float t) { return t > ${e(iu)} ? pow(t, ${t}) : (t * ${e(Lr)} + 16.0) / 116.0; }`,labFInv:`float wp_labFInv(float t) { return t > ${e(su)} ? t * t * t : (116.0 * t - 16.0) / ${e(Lr)}; }`,cbrt:`float wp_cbrt(float v) { return sign(v) * pow(abs(v), ${t}); }`,bt709_decode:`float wp_bt709_decode(float v) { float a = abs(v); float m = a < ${e(Li*4.5)} ? a / 4.5 : pow((a + ${e(kt-1)}) / ${e(kt)}, ${e(1/.45)}); return v < 0.0 ? -m : m; }`,bt709_encode:`float wp_bt709_encode(float v) { float a = abs(v); float m = a < ${e(Li)} ? 4.5 * a : ${e(kt)} * pow(a, 0.45) - ${e(kt-1)}; return v < 0.0 ? -m : m; }`,gamma26_decode:"float wp_gamma26_decode(float v) { float m = pow(abs(v), 2.6); return v < 0.0 ? -m : m; }",gamma26_encode:`float wp_gamma26_encode(float v) { float m = pow(abs(v), ${e(1/2.6)}); return v < 0.0 ? -m : m; }`,acescc_decode:`float wp_acescc_decode(float v) { if (v < ${e(jh)}) { return (exp2(v * 17.52 - 9.72) - ${e(Ir)}) * 2.0; } if (v < ${e(Qh)}) { return exp2(v * 17.52 - 9.72); } return 65504.0; }`,acescc_encode:`float wp_acescc_encode(float v) { if (v <= 0.0) { return ${e(Ao)}; } if (v < ${e(tu)}) { return (log2(${e(Ir)} + v * 0.5) + 9.72) / 17.52; } return (log2(v) + 9.72) / 17.52; }`,acescct_decode:`float wp_acescct_decode(float v) { if (v > ${e(eu)}) { return exp2(v * 17.52 - 9.72); } return (v - ${e(Ni)}) / ${e(Di)}; }`,acescct_encode:`float wp_acescct_encode(float v) { if (v <= 0.0078125) { return ${e(Di)} * v + ${e(Ni)}; } return (log2(v) + 9.72) / 17.52; }`,pqabs_decode:`float wp_pqabs_decode(float v) { if (v <= 0.0) { return 0.0; } float e = pow(v, ${e(1/Zt)}); return 10000.0 * pow(max(e - ${e(pt)}, 0.0) / (${e(mt)} - ${e(gt)} * e), ${e(1/dt)}); }`,pqabs_encode:`float wp_pqabs_encode(float v) { if (v <= 0.0) { return 0.0; } float y = pow(v / 10000.0, ${e(dt)}); return pow((${e(pt)} + ${e(mt)} * y) / (1.0 + ${e(gt)} * y), ${e(Zt)}); }`,jzpq_decode:`float wp_jzpq_decode(float v) { if (v <= 0.0) { return 0.0; } float e = pow(v, ${e(1/Ai)}); return 10000.0 * pow(max(e - ${e(pt)}, 0.0) / (${e(mt)} - ${e(gt)} * e), ${e(1/dt)}); }`,jzpq_encode:`float wp_jzpq_encode(float v) { if (v <= 0.0) { return 0.0; } float y = pow(v / 10000.0, ${e(dt)}); return pow((${e(pt)} + ${e(mt)} * y) / (1.0 + ${e(gt)} * y), ${e(Ai)}); }`,rec2100pq_decode:`float wp_rec2100pq_decode(float v) { if (v <= 0.0) { return 0.0; } float e = pow(v, ${e(1/Zt)}); return 10000.0 * pow(max(e - ${e(pt)}, 0.0) / (${e(mt)} - ${e(gt)} * e), ${e(1/dt)}) / ${e(203)}; }`,rec2100pq_encode:`float wp_rec2100pq_encode(float v) { float n = v * ${e(203)}; if (n <= 0.0) { return 0.0; } float y = pow(n / 10000.0, ${e(dt)}); return pow((${e(pt)} + ${e(mt)} * y) / (1.0 + ${e(gt)} * y), ${e(Zt)}); }`,rec2100hlg_decode:`float wp_rec2100hlg_decode(float v) { if (v <= 0.0) { return 0.0; } if (v <= 0.5) { return ((v * v) / 3.0) * ${e(En)}; } return ((exp((v - ${e(Fi)}) / ${e(Bn)}) + ${e(Ui)}) / 12.0) * ${e(En)}; }`,rec2100hlg_encode:`float wp_rec2100hlg_encode(float v) { if (v <= 0.0) { return 0.0; } float x = v / ${e(En)}; if (x <= ${e(1/12)}) { return sqrt(3.0 * x); } return ${e(Bn)} * log(12.0 * x - ${e(Ui)}) + ${e(Fi)}; }`}:{srgb_decode:"fn wp_srgb_decode(v: f32) -> f32 { let a = abs(v); let m = select(pow((a + 0.055) / 1.055, 2.4), a / 12.92, a <= 0.04045); return select(m, -m, v < 0.0); }",srgb_encode:`fn wp_srgb_encode(v: f32) -> f32 { let a = abs(v); let m = select(1.055 * pow(a, ${e(1/2.4)}) - 0.055, 12.92 * a, a <= 0.0031308); return select(m, -m, v < 0.0); }`,a98_decode:`fn wp_a98_decode(v: f32) -> f32 { let m = pow(abs(v), ${e(Ri)}); return select(m, -m, v < 0.0); }`,a98_encode:`fn wp_a98_encode(v: f32) -> f32 { let m = pow(abs(v), ${e(1/Ri)}); return select(m, -m, v < 0.0); }`,prophoto_decode:`fn wp_prophoto_decode(v: f32) -> f32 { let a = abs(v); let m = select(pow(a, 1.8), a / 16.0, a <= ${e(16*Pi)}); return select(m, -m, v < 0.0); }`,prophoto_encode:`fn wp_prophoto_encode(v: f32) -> f32 { let a = abs(v); let m = select(16.0 * a, pow(a, ${e(1/1.8)}), a >= ${e(Pi)}); return select(m, -m, v < 0.0); }`,rec2020_decode:`fn wp_rec2020_decode(v: f32) -> f32 { let a = abs(v); let m = select(pow((a + ${e(zt-1)}) / ${e(zt)}, ${e(1/.45)}), a / 4.5, a < ${e(Ii*4.5)}); return select(m, -m, v < 0.0); }`,rec2020_encode:`fn wp_rec2020_encode(v: f32) -> f32 { let a = abs(v); let m = select(${e(zt)} * pow(a, 0.45) - ${e(zt-1)}, 4.5 * a, a < ${e(Ii)}); return select(m, -m, v < 0.0); }`,labF:`fn wp_labF(t: f32) -> f32 { return select((t * ${e(Lr)} + 16.0) / 116.0, pow(t, ${t}), t > ${e(iu)}); }`,labFInv:`fn wp_labFInv(t: f32) -> f32 { return select((116.0 * t - 16.0) / ${e(Lr)}, t * t * t, t > ${e(su)}); }`,cbrt:`fn wp_cbrt(v: f32) -> f32 { return sign(v) * pow(abs(v), ${t}); }`,bt709_decode:`fn wp_bt709_decode(v: f32) -> f32 { let a = abs(v); let m = select(pow((a + ${e(kt-1)}) / ${e(kt)}, ${e(1/.45)}), a / 4.5, a < ${e(Li*4.5)}); return select(m, -m, v < 0.0); }`,bt709_encode:`fn wp_bt709_encode(v: f32) -> f32 { let a = abs(v); let m = select(${e(kt)} * pow(a, 0.45) - ${e(kt-1)}, 4.5 * a, a < ${e(Li)}); return select(m, -m, v < 0.0); }`,gamma26_decode:"fn wp_gamma26_decode(v: f32) -> f32 { let m = pow(abs(v), 2.6); return select(m, -m, v < 0.0); }",gamma26_encode:`fn wp_gamma26_encode(v: f32) -> f32 { let m = pow(abs(v), ${e(1/2.6)}); return select(m, -m, v < 0.0); }`,acescc_decode:`fn wp_acescc_decode(v: f32) -> f32 { if (v < ${e(jh)}) { return (exp2(v * 17.52 - 9.72) - ${e(Ir)}) * 2.0; } if (v < ${e(Qh)}) { return exp2(v * 17.52 - 9.72); } return 65504.0; }`,acescc_encode:`fn wp_acescc_encode(v: f32) -> f32 { if (v <= 0.0) { return ${e(Ao)}; } if (v < ${e(tu)}) { return (log2(${e(Ir)} + v * 0.5) + 9.72) / 17.52; } return (log2(v) + 9.72) / 17.52; }`,acescct_decode:`fn wp_acescct_decode(v: f32) -> f32 { if (v > ${e(eu)}) { return exp2(v * 17.52 - 9.72); } return (v - ${e(Ni)}) / ${e(Di)}; }`,acescct_encode:`fn wp_acescct_encode(v: f32) -> f32 { if (v <= 0.0078125) { return ${e(Di)} * v + ${e(Ni)}; } return (log2(v) + 9.72) / 17.52; }`,pqabs_decode:`fn wp_pqabs_decode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let e = pow(v, ${e(1/Zt)}); return 10000.0 * pow(max(e - ${e(pt)}, 0.0) / (${e(mt)} - ${e(gt)} * e), ${e(1/dt)}); }`,pqabs_encode:`fn wp_pqabs_encode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let y = pow(v / 10000.0, ${e(dt)}); return pow((${e(pt)} + ${e(mt)} * y) / (1.0 + ${e(gt)} * y), ${e(Zt)}); }`,jzpq_decode:`fn wp_jzpq_decode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let e = pow(v, ${e(1/Ai)}); return 10000.0 * pow(max(e - ${e(pt)}, 0.0) / (${e(mt)} - ${e(gt)} * e), ${e(1/dt)}); }`,jzpq_encode:`fn wp_jzpq_encode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let y = pow(v / 10000.0, ${e(dt)}); return pow((${e(pt)} + ${e(mt)} * y) / (1.0 + ${e(gt)} * y), ${e(Ai)}); }`,rec2100pq_decode:`fn wp_rec2100pq_decode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let e = pow(v, ${e(1/Zt)}); return 10000.0 * pow(max(e - ${e(pt)}, 0.0) / (${e(mt)} - ${e(gt)} * e), ${e(1/dt)}) / ${e(203)}; }`,rec2100pq_encode:`fn wp_rec2100pq_encode(v: f32) -> f32 { let n = v * ${e(203)}; if (n <= 0.0) { return 0.0; } let y = pow(n / 10000.0, ${e(dt)}); return pow((${e(pt)} + ${e(mt)} * y) / (1.0 + ${e(gt)} * y), ${e(Zt)}); }`,rec2100hlg_decode:`fn wp_rec2100hlg_decode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } if (v <= 0.5) { return ((v * v) / 3.0) * ${e(En)}; } return ((exp((v - ${e(Fi)}) / ${e(Bn)}) + ${e(Ui)}) / 12.0) * ${e(En)}; }`,rec2100hlg_encode:`fn wp_rec2100hlg_encode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let x = v / ${e(En)}; if (x <= ${e(1/12)}) { return sqrt(3.0 * x); } return ${e(Bn)} * log(12.0 * x - ${e(Ui)}) + ${e(Fi)}; }`}}var ws={js:ru("js"),glsl:ru("glsl"),wgsl:ru("wgsl")};function Rm(n,e,t,i){let s=o=>e?` + ${i(e[o])}`:"",r=o=>`${i(n[o*3])} * v.x + ${i(n[o*3+1])} * v.y + ${i(n[o*3+2])} * v.z${s(o)}`;return t==="glsl"?`  v = vec3(${r(0)}, ${r(1)}, ${r(2)});`:`  v = vec3<f32>(${r(0)}, ${r(1)}, ${r(2)});`}function Pm(n,e){let t=i=>e?` + ${e[i]}`:"";return`  { const r0 = ${n[0]} * v0 + ${n[1]} * v1 + ${n[2]} * v2${t(0)};
    const r1 = ${n[3]} * v0 + ${n[4]} * v1 + ${n[5]} * v2${t(1)};
    const r2 = ${n[6]} * v0 + ${n[7]} * v1 + ${n[8]} * v2${t(2)};
    v0 = r0; v1 = r1; v2 = r2; }`}function Hy(n,e,t){let i=r=>Ss(r,e);if(e==="js")switch(n.k){case"mat3":return Pm(n.m);case"affine":return Pm(n.m,n.b);case"transfer":{let r=`${n.name}_${n.dir}`;return t.add(r),`  v0 = wp_${r}(v0); v1 = wp_${r}(v1); v2 = wp_${r}(v2);`}case"cbrt3":return"  v0 = Math.cbrt(v0); v1 = Math.cbrt(v1); v2 = Math.cbrt(v2);";case"cube3":return"  v0 = v0 * v0 * v0; v1 = v1 * v1 * v1; v2 = v2 * v2 * v2;";case"labF3":return t.add("labF"),"  v0 = wp_labF(v0); v1 = wp_labF(v1); v2 = wp_labF(v2);";case"labFInv3":return t.add("labFInv"),"  v0 = wp_labFInv(v0); v1 = wp_labFInv(v1); v2 = wp_labFInv(v2);";case"divW":return`  v0 /= ${n.w[0]}; v1 /= ${n.w[1]}; v2 /= ${n.w[2]};`;case"mulW":return`  v0 *= ${n.w[0]}; v1 *= ${n.w[1]}; v2 *= ${n.w[2]};`;case"clamp0":return"  v0 = Math.max(v0, 0); v1 = Math.max(v1, 0); v2 = Math.max(v2, 0);";case"jzFwd":return`  v0 = (${1+Jt} * v0) / (1 + ${Jt} * v0) - ${Ci};`;case"jzInv":return`  { const t = v0 + ${Ci}; v0 = t / (${1+Jt} - ${Jt} * t); }`;case"polarToRect":return`  { const h = v2 * ${nu}; const c = v1; v1 = c * Math.cos(h); v2 = c * Math.sin(h); }`;case"rectToPolar":return`  { const c = Math.sqrt(v1 * v1 + v2 * v2); let h = Math.atan2(v2, v1) * ${Gy}; if (h < 0) h += 360; v1 = c; v2 = h; }`;default:throw new Error(`codegen: unknown op "${n.k}"`)}let s=e==="glsl"?"vec3":"vec3<f32>";switch(n.k){case"mat3":return Rm(n.m,null,e,i);case"affine":return Rm(n.m,n.b,e,i);case"transfer":{let r=`${n.name}_${n.dir}`;return t.add(r),`  v = ${s}(wp_${r}(v.x), wp_${r}(v.y), wp_${r}(v.z));`}case"cbrt3":return t.add("cbrt"),`  v = ${s}(wp_cbrt(v.x), wp_cbrt(v.y), wp_cbrt(v.z));`;case"cube3":return"  v = v * v * v;";case"labF3":return t.add("labF"),`  v = ${s}(wp_labF(v.x), wp_labF(v.y), wp_labF(v.z));`;case"labFInv3":return t.add("labFInv"),`  v = ${s}(wp_labFInv(v.x), wp_labFInv(v.y), wp_labFInv(v.z));`;case"divW":return`  v = v / ${s}(${i(n.w[0])}, ${i(n.w[1])}, ${i(n.w[2])});`;case"mulW":return`  v = v * ${s}(${i(n.w[0])}, ${i(n.w[1])}, ${i(n.w[2])});`;case"clamp0":return`  v = max(v, ${s}(0.0));`;case"jzFwd":return`  v.x = (${i(1+Jt)} * v.x) / (1.0 + ${i(Jt)} * v.x) - ${i(Ci)};`;case"jzInv":return e==="glsl"?`  { float t = v.x + ${i(Ci)}; v.x = t / (${i(1+Jt)} - ${i(Jt)} * t); }`:`  { let t = v.x + ${i(Ci)}; v.x = t / (${i(1+Jt)} - ${i(Jt)} * t); }`;case"polarToRect":return e==="glsl"?`  { float h = v.z * ${nu}; v = vec3(v.x, v.y * cos(h), v.y * sin(h)); }`:`  { let h = v.z * ${nu}; v = vec3<f32>(v.x, v.y * cos(h), v.y * sin(h)); }`;case"rectToPolar":return e==="glsl"?"  { float c = length(v.yz); float h = degrees(atan(v.z, v.y)); if (h < 0.0) h += 360.0; v = vec3(v.x, c, h); }":"  { let c = length(v.yz); var h = degrees(atan2(v.z, v.y)); if (h < 0.0) { h = h + 360.0; } v = vec3<f32>(v.x, c, h); }";default:throw new Error(`codegen: unknown op "${n.k}"`)}}function ou(n,e,t){let i=new Set,s=n.map(o=>Hy(o,t,i)).join(`
`),r=[...i].map(o=>{let a=ws[t][o];if(!a)throw new Error(`codegen: no ${t} helper "${o}"`);return a}).join(`
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
}`}var Xi=_t,Wi=Ct($e.m.fromXyz,Kt),Gn=$e.m.fromXyz,Fm=.206,au=.03,Lm=(1+Fm)/(1+au),lu=.017453292519943295,$y=216/24389,Dm=24389/27,cu=Ot[0],Fl=Ot[1],Om=Ot[2],Wy=4*cu/(cu+15*Fl+3*Om),Xy=9*Fl/(cu+15*Fl+3*Om),Dr={js:{f:n=>Ss(n,"js"),decl:(n,e)=>`let ${n} = ${e};`,decl3:(n,e)=>`let ${n} = ${e};`,loop:(n,e)=>`for (let i = 0; i < ${n}; i++) {
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
const wp_toe_inv = (x) => (x * x + ${n.k1} * x) / (${n.k3} * (x + ${n.k2}));`},glsl:{f:n=>Ss(n,"glsl"),decl:(n,e)=>`float ${n} = ${e};`,decl3:(n,e)=>`vec3 ${n} = ${e};`,loop:(n,e)=>`for (int i = 0; i < ${n}; i++) {
${e}
}`,pow:(n,e)=>`pow(${n}, ${e})`,cbrt:n=>`pow(${n}, ${Ss(1/3,"glsl")})`,sqrt:n=>`sqrt(${n})`,cos:n=>`cos(${n})`,sin:n=>`sin(${n})`,atan2:(n,e)=>`atan(${n}, ${e})`,log:n=>`log(${n})`,exp:n=>`exp(${n})`,min:(n,e)=>`min(${n}, ${e})`,max:(n,e)=>`max(${n}, ${e})`,mod360:n=>`mod(mod(${n}, 360.0) + 360.0, 360.0)`,in:n=>`c.${"xyz"[n]}`,gx:(n,e)=>`${n}.${"xyz"[e]}`,wrap:(n,e,t)=>`${e}
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
float wp_toe_inv(float x) { return (x * x + ${n.k1} * x) / (${n.k3} * (x + ${n.k2})); }`},wgsl:{f:n=>Ss(n,"wgsl"),decl:(n,e)=>`var ${n} = ${e};`,decl3:(n,e)=>`var ${n} = ${e};`,loop:(n,e)=>`for (var i: i32 = 0; i < ${n}; i++) {
${e}
}`,pow:(n,e)=>`pow(${n}, ${e})`,cbrt:n=>`pow(${n}, ${Ss(1/3,"wgsl")})`,sqrt:n=>`sqrt(${n})`,cos:n=>`cos(${n})`,sin:n=>`sin(${n})`,atan2:(n,e)=>`atan2(${n}, ${e})`,log:n=>`log(${n})`,exp:n=>`exp(${n})`,min:(n,e)=>`min(${n}, ${e})`,max:(n,e)=>`max(${n}, ${e})`,mod360:n=>`(((${n} % 360.0) + 360.0) % 360.0)`,in:n=>`c.${"xyz"[n]}`,gx:(n,e)=>`${n}.${"xyz"[e]}`,wrap:(n,e,t)=>`${e}
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
fn wp_toe_inv(x: f32) -> f32 { return (x * x + ${n.k1} * x) / (${n.k3} * (x + ${n.k2})); }`}};function Bm(n){return{a0:n.f(Xi[0]),a1:n.f(Xi[3]),a2:n.f(Xi[6]),s0:n.f(Wi[0]),s1:n.f(Wi[1]),s2:n.f(Wi[2]),s3:n.f(Wi[3]),s4:n.f(Wi[4]),s5:n.f(Wi[5]),s6:n.f(Wi[6]),s7:n.f(Wi[7]),s8:n.f(Wi[8]),k1:n.f(Fm),k2:n.f(au),k3:n.f(Lm),k4k2k3:n.f(4*au*Lm)}}function zm(n){return[n.decl("h",n.mod360(n.in(0))),n.decl("hr",`h * ${n.f(lu)}`),n.decl("ca",n.cos("hr")),n.decl("cb",n.sin("hr")),n.decl("kl",`${n.f(Xi[1])} * ca + ${n.f(Xi[2])} * cb`),n.decl("km",`${n.f(Xi[4])} * ca + ${n.f(Xi[5])} * cb`),n.decl("ks",`${n.f(Xi[7])} * ca + ${n.f(Xi[8])} * cb`)].join(`
  `)}function km(n){return[n.decl("clo","0.0"),n.decl("chi","0.05"),n.loop(10,`    if (wp_min3(wp_oklc_lin(1.0, chi, kl, km, ks)) <= 0.0) { break; }
    clo = chi; chi = chi * 2.0;`),n.loop(34,`    ${n.decl("cmid","0.5 * (clo + chi)")}
    if (wp_min3(wp_oklc_lin(1.0, cmid, kl, km, ks)) > 0.0) { clo = cmid; } else { chi = cmid; }`),n.decl("Lc",n.cbrt("1.0 / wp_max3(wp_oklc_lin(1.0, clo, kl, km, ks))")),n.decl("Cc","clo * Lc")].join(`
  `)}function Vm(n){return[n.decl3("lin","wp_oklc_lin(L, C, kl, km, ks)"),n.ret3(`wp_srgb_encode(${n.gx("lin",0)})`,`wp_srgb_encode(${n.gx("lin",1)})`,`wp_srgb_encode(${n.gx("lin",2)})`)].join(`
  `)}function hu(n){return n.ret3("1.0","1.0","1.0")}function ko(n){return n.ret3("0.0","0.0","0.0")}function qy(n,e){let t=Dr[n],i=`${ws[n].srgb_encode}
${t.linFn(Bm(t))}`,s=`  ${t.decl("s",t.in(1))}
  ${t.decl("vv",t.in(2))}
  if (vv <= 1e-9) { ${ko(t)} }
  ${zm(t)}
  ${km(t)}
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
  ${Vm(t)}`;return t.wrap(e,i,s)}var Nm=(n,e)=>({s:"0.11516993 + 1.0 / (7.4477897 + 4.1590124 * cb + ca * (-2.19557347 + 1.75198401 * cb + ca * (-2.13704948 - 10.02301043 * cb + ca * (-4.24894561 + 5.38770819 * cb + 4.69891013 * ca))))",t:"0.11239642 + 1.0 / (1.6132032 - 0.68124379 * cb + ca * (0.40370612 + 0.90148123 * cb + ca * (-0.27087943 + 0.6122399 * cb + ca * (0.00299215 - 0.45399568 * cb - 0.14661872 * ca))))"})[e];function Yy(n,e){let t=Dr[n],i=`${ws[n].srgb_encode}
${t.linFn(Bm(t))}`,s=`  ${t.decl("s",t.in(1))}
  ${t.decl("ll",t.in(2))}
  if (ll >= 1.0 - 1e-9) { ${hu(t)} }
  if (ll <= 1e-9) { ${ko(t)} }
  ${zm(t)}
  ${t.decl("L","wp_toe_inv(ll)")}
  ${km(t)}
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
  ${t.decl("sMid",Nm(t,"s"))}
  ${t.decl("tMid",Nm(t,"t"))}
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
  ${Vm(t)}`;return t.wrap(e,i,s)}function Um(n,e,t){let i=Dr[n],s=ws[n].srgb_encode,r=[];for(let c=0;c<3;c++){let l=Gn[c*3],h=Gn[c*3+1],f=Gn[c*3+2],u=284517*l-94839*f,d=838422*f+769860*h+731718*l,g=632260*f-126452*h;for(let v=0;v<2;v++){let m=`(${i.f(g)} * sub2 + ${i.f(126452*v)})`,p=`(${i.f(u)} * sub2 / ${m})`,M=`((${i.f(d)} * ll * sub2 - ${i.f(769860*v)} * ll) / ${m})`;r.push({slope:p,icpt:M,i:c*2+v})}}let o=r.map(({slope:c,icpt:l,i:h})=>{let f=`sl${h}`,u=`ic${h}`,d=`dd${h}`;return t?`  ${i.decl(f,c)}
  ${i.decl(u,l)}
  ${i.decl(d,`${i.max(u,`-(${u})`)} / ${i.sqrt(`${f} * ${f} + 1.0`)}`)}
  if (${d} < mx) { mx = ${d}; }`:`  ${i.decl(f,c)}
  ${i.decl(u,l)}
  ${i.decl(d,`${u} / (sh - ${f} * chh)`)}
  if (${d} >= 0.0 && ${d} < mx) { mx = ${d}; }`}).join(`
`),a=`  ${i.decl("s",i.in(1))}
  ${i.decl("ll",i.in(2))}
  if (ll > 99.9999999) { ${hu(i)} }
  if (ll < 1e-8) { ${ko(i)} }
  ${i.decl("h",i.mod360(i.in(0)))}
  ${i.decl("hr",`h * ${i.f(lu)}`)}
  ${i.decl("sh",i.sin("hr"))}
  ${i.decl("chh",i.cos("hr"))}
  ${i.decl("sub1","(ll + 16.0) * (ll + 16.0) * (ll + 16.0) / 1560896.0")}
  ${i.decl("sub2","sub1")}
  if (sub1 <= ${i.f($y)}) { sub2 = ll / ${i.f(Dm)}; }
  ${i.decl("mx","1e30")}
${o}
  ${i.decl("C","mx / 100.0 * s")}
  ${i.decl("uu","C * chh")}
  ${i.decl("vv","C * sh")}
  ${i.decl("up",`uu / (13.0 * ll) + ${i.f(Wy)}`)}
  ${i.decl("vp",`vv / (13.0 * ll) + ${i.f(Xy)}`)}
  ${i.decl("Y",`ll / ${i.f(Dm)}`)}
  if (ll > 8.0) { Y = (ll + 16.0) / 116.0; Y = Y * Y * Y; }
  Y = Y * ${i.f(Fl)};
  ${i.decl("X","Y * 9.0 * up / (4.0 * vp)")}
  ${i.decl("Z","Y * (12.0 - 3.0 * up - 20.0 * vp) / (4.0 * vp)")}
  ${i.decl("lr",`${i.f(Gn[0])} * X + ${i.f(Gn[1])} * Y + ${i.f(Gn[2])} * Z`)}
  ${i.decl("lg",`${i.f(Gn[3])} * X + ${i.f(Gn[4])} * Y + ${i.f(Gn[5])} * Z`)}
  ${i.decl("lb",`${i.f(Gn[6])} * X + ${i.f(Gn[7])} * Y + ${i.f(Gn[8])} * Z`)}
  ${i.ret3("wp_srgb_encode(lr)","wp_srgb_encode(lg)","wp_srgb_encode(lb)")}`;return i.wrap(e,s,a)}function uu(n){let e=Kn,t=pi.cat16,i=Ct(t,$e.m.toXyz).map((l,h)=>l*e.fl*e.rgbD[Math.floor(h/3)]),s=st(t),r=[];for(let l=0;l<3;l++)for(let h=0;h<3;h++)r[l*3+h]=s[l*3+h]/(e.rgbD[h]*e.fl);let o=Ct($e.m.fromXyz,r),a=Math.pow(1.64-Math.pow(.29,e.n),.73),c=5e4/13*e.nc*e.ncb;return{Mf:i.map(n.f),Mb:o.map(n.f),aw:n.f(e.aw),nbb:n.f(e.nbb),cz:n.f(e.cz),icz:n.f(1/e.cz),fl25:n.f(e.fl25),Kn:n.f(a),P1:n.f(c)}}var fu={js:`const wp_cam_adapt = (y) => { const a = Math.abs(y); const f = Math.pow(a, 0.42); return Math.sign(y) * 400 * f / (f + 27.13); };
const wp_cam_unadapt = (v) => { const a = Math.abs(v); const base = Math.max(0, 27.13 * a / (400 - a)); return Math.sign(v) * Math.pow(base, ${1/.42}); };`,glsl:`float wp_cam_adapt(float y) { float a = abs(y); float f = pow(a, 0.42); return sign(y) * 400.0 * f / (f + 27.13); }
float wp_cam_unadapt(float v) { float a = abs(v); float base = max(0.0, 27.13 * a / (400.0 - a)); return sign(v) * pow(base, ${(1/.42).toPrecision(17)}); }`,wgsl:`fn wp_cam_adapt(y: f32) -> f32 { let a = abs(y); let f = pow(a, 0.42); return sign(y) * 400.0 * f / (f + 27.13); }
fn wp_cam_unadapt(v: f32) -> f32 { let a = abs(v); let base = max(0.0, 27.13 * a / (400.0 - a)); return sign(v) * pow(base, ${(1/.42).toPrecision(17)}); }`};function Gm(n,e){return`${n.decl("alpha",`C / ${n.sqrt("J / 100.0")}`)}
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
  ${n.decl("lb",`${e.Mb[6]} * cr + ${e.Mb[7]} * cg + ${e.Mb[8]} * cbn`)}`}function Zy(n,e){let t=Dr[n],i=uu(t),s=`${ws[n].srgb_decode}
${fu[n]}`,r=`  ${t.decl("dr",`wp_srgb_decode(${t.in(0)})`)}
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
  ${t.ret3("1.7 * J / (1.0 + 0.007 * J)",`Mp * ${t.cos("hr")}`,`Mp * ${t.sin("hr")}`)}`;return t.wrap(e,s,r)}function Jy(n,e){let t=Dr[n],i=uu(t),s=`${ws[n].srgb_encode}
${fu[n]}`,r=`  ${t.decl("Jp",t.in(0))}
  ${t.decl("Mp",t.sqrt(`${t.in(1)} * ${t.in(1)} + ${t.in(2)} * ${t.in(2)}`))}
  ${t.decl("J","Jp / (1.7 - 0.007 * Jp)")}
  if (J <= 0.0) { ${ko(t)} }
  ${t.decl("C",`(${t.exp("0.0228 * Mp")} - 1.0) / 0.0228 / ${i.fl25}`)}
  ${t.decl("hr",`${t.atan2(t.in(2),t.in(1))}`)}
  ${t.decl("eHue",`0.25 * (${t.cos("hr + 2.0")} + 3.8)`)}
  ${Gm(t,i)}
  ${t.ret3("wp_srgb_encode(lr)","wp_srgb_encode(lg)","wp_srgb_encode(lb)")}`;return t.wrap(e,s,r)}function Ky(n,e){let t=Dr[n],i=uu(t),s=`${ws[n].srgb_encode}
${fu[n]}`,r=(()=>{let a=Kn,c=st(pi.cat16);return[0,1,2].map(l=>t.f(c[3+l]/(a.rgbD[l]*a.fl)))})(),o=`  ${t.decl("tone",t.in(2))}
  if (tone <= 0.0) { ${ko(t)} }
  if (tone >= 100.0) { ${hu(t)} }
  ${t.decl("fy","(tone + 16.0) / 116.0")}
  ${t.decl("targetY","fy * fy * fy")}
  if (fy <= ${t.f(6/29)}) { targetY = (116.0 * fy - 16.0) / ${t.f(24389/27)}; }
  ${t.decl("C",t.in(1))}
  ${t.decl("hr",`${t.mod360(t.in(0))} * ${t.f(lu)}`)}
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
  ${Gm(t,i)}
  ${t.ret3("wp_srgb_encode(lr)","wp_srgb_encode(lg)","wp_srgb_encode(lb)")}`;return t.wrap(e,s,o)}var jy={"okhsv|srgb":qy,"okhsl|srgb":Yy,"hsluv|srgb":(n,e)=>Um(n,e,!1),"hpluv|srgb":(n,e)=>Um(n,e,!0),"srgb|cam16-ucs":Zy,"cam16-ucs|srgb":Jy,"hct|srgb":Ky};function Hm(n,e,t,i){let s=jy[`${e}|${t}`];return s?s(n,i):null}function Wm(n,e){let t=$i[n],i=$i[e];if(!t)throw new Error(`codegen: unsupported space "${n}" (have: ${Object.keys($i).join(", ")})`);if(!i)throw new Error(`codegen: unsupported space "${e}"`);return Im([...t.toXyzOps,...i.fromXyzOps])}function Xm(n,e){return`wp_${n}_to_${e}`.replace(/-/g,"_")}function Vo(n,e,{name:t=Xm(n,e)}={}){return Hm("glsl",n,e,t)??ou(Wm(n,e),t,"glsl")}function Qy(n){return`wp_gamut_map_oklch_to_${n}`.replace(/-/g,"_")}function eM(n,e,t){let i=Xm("oklch",e),s=ou(Wm("oklch",e),i,n);return n==="js"?`${s}
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
}`}function tM(n){let e=$i[n];if(!e||!e.fromXyzOps.some(t=>t.k==="mat3"))throw new Error(`codegen: gamut mapping needs an RGB gamut space (got "${n}")`)}function du(n,{name:e=Qy(n)}={}){return tM(n),eM("glsl",n,e)}var nM={hsl:0,hwb:0,hsv:0,hsi:0,okhsl:0,okhsv:0,hct:0,hsluv:0,hpluv:0,lch:2,oklch:2,lchuv:2,jzczhz:2,"din99o-lch":2,cam16:2},iM=["shorter","longer","increasing","decreasing"];function $m(n,e){let i=`${(n==="glsl"||n==="wgsl"?(s,r)=>`mod(${s}, ${r})`:(s,r)=>`(((${s}) % ${r}) + ${r}) % ${r}`)("hb - ha + 360.0","360.0")}`;switch(e){case"shorter":return`float d0 = ${i}; float d = d0 > 180.0 ? d0 - 360.0 : d0;`;case"longer":return`float d0 = ${i}; float d = d0 == 0.0 ? 360.0 : (d0 < 180.0 ? d0 - 360.0 : d0);`;case"increasing":return`float d = ${i};`;case"decreasing":return`float d0 = ${i}; float d = d0 == 0.0 ? 0.0 : d0 - 360.0;`;default:throw new Error(`codegen: unknown hue method "${e}"`)}}function sM(n,e,t,i){let s=nM[e]??-1;if(!$i[e]&&s===-1)throw new Error(`codegen: unsupported space "${e}"`);if(!iM.includes(t))throw new Error(`codegen: unknown hue method "${t}"`);let r=["x","y","z"],o=l=>`a.${r[l]} + t * (b.${r[l]} - a.${r[l]})`;if(n==="js"){let l=[];for(let h=0;h<3;h++)h===s?l.push(`  const ha = ((a[${h}] % 360) + 360) % 360;`,`  const hb = ((b[${h}] % 360) + 360) % 360;`,`  ${$m("js",t).replace(/float /g,"const ").replace(/const d0/,"const d0").replace("const d =","const d =")}`,`  out[${h}] = (((ha + t * d) % 360) + 360) % 360;`):l.push(`  out[${h}] = a[${h}] + t * (b[${h}] - a[${h}]);`);return`function ${i}(a, b, t, out = [0, 0, 0]) {
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
  ${$m("glsl",t)}
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
}`}function rM(n,e){return`wp_mix_${n}_${e}`.replace(/-/g,"_")}function qm(n,{hue:e="shorter",name:t=rM(n,e)}={}){return sM("glsl",n,e,t)}function Ol(n,e,t,i=24,s=0,r=Math.PI*2){let o=[];for(let a=0;a<=i;a++){let c=s+(r-s)*(a/i);o.push([n+t*Math.cos(c),e+t*Math.sin(c)])}return o}var qi=(n,e,t,i,s,r=10)=>Ol(n,e,t,r,i*Math.PI/180,s*Math.PI/180),oM={w:{w:.84,strokes:[[[0,1],[.22,0],[.42,.75],[.62,0],[.84,1]]]},h:{w:.6,strokes:[[[0,1.5],[0,0]],[[0,.55],...qi(.3,.55,.3,180,0),[.6,0]]]},i:{w:.06,strokes:[[[0,1],[0,0]],Ol(0,1.28,.045,10)],closed:[!1,!0]},t:{w:.6,strokes:[[[.3,1.45],[.3,.2],...qi(.5,.2,.2,180,270)],[[0,1],[.6,1]]]},e:{w:.9,strokes:[[[.07,.55],[.83,.55],...qi(.45,.5,.45,7,320,26)]]},p:{w:.85,strokes:[[[0,1],[0,-.5]],[[0,.78],...qi(.38,.5,.45,128,-128),[0,.22]]]},o:{w:.9,strokes:[Ol(.45,.5,.45)],closed:[!0]},n:{w:.56,strokes:[[[0,1],[0,0]],[[0,.58],...qi(.28,.58,.28,180,0),[.56,0]]]},B:{w:.85,strokes:[[[0,1.4],[0,0]],[[0,1.4],[.45,1.4],...qi(.45,1.05,.35,90,-90),[0,.7],[.5,.7],...qi(.5,.35,.35,90,-90),[0,0]]]},A:{w:.9,strokes:[[[0,0],[.45,1.4],[.9,0]],[[.2,.5],[.7,.5]]]},R:{w:.8,strokes:[[[0,1.4],[0,0]],[[0,1.4],[.4,1.4],...qi(.4,1.05,.35,90,-90),[0,.7]],[[.3,.7],[.75,0]]]},O:{w:.95,strokes:[aM(.475,.7,.42,.7)],closed:[!0]},P:{w:.8,strokes:[[[0,1.4],[0,0]],[[0,1.4],[.4,1.4],...qi(.4,1.05,.35,90,-90),[0,.7]]]},E:{w:.75,strokes:[[[.72,1.4],[0,1.4],[0,0],[.72,0]],[[0,.7],[.58,.7]]]},N:{w:.8,strokes:[[[0,0],[0,1.4],[.75,0],[.75,1.4]]]},L:{w:.72,strokes:[[[0,1.4],[0,0],[.68,0]]]},I:{w:.06,strokes:[[[0,1.4],[0,0]]]},V:{w:.9,strokes:[[[0,1.4],[.45,0],[.9,1.4]]]}};function aM(n,e,t,i,s=28){let r=[];for(let o=0;o<=s;o++){let a=Math.PI*2*o/s;r.push([n+t*Math.cos(a),e+i*Math.sin(a)])}return r}var Ym={w:1.5,strokes:[[[-.7,1.55],[0,.7],[.7,1.55]],[[0,.66],[0,.08]],[[-.34,.04],[.34,.04]],Ol(.16,1.22,.1,14),[[.16,1.34],[.4,1.66]]],closed:[!1,!1,!1,!0,!1]};function cM(n,e=.05){if(n.length<3)return n;let t=[n[0]];for(let i=1;i<n.length-1;i++){let[s,r]=n[i-1],[o,a]=n[i],[c,l]=n[i+1],h=[s-o,r-a],f=[c-o,l-a],u=Math.hypot(...h),d=Math.hypot(...f),g=Math.min(e,u*.4,d*.4);if(g<1e-4){t.push(n[i]);continue}let v=[o+h[0]/u*g,a+h[1]/u*g],m=[o+f[0]/d*g,a+f[1]/d*g];for(let p=0;p<=1;p+=.25){let M=1-p;t.push([M*M*v[0]+2*M*p*o+p*p*m[0],M*M*v[1]+2*M*p*a+p*p*m[1]])}}return t.push(n[n.length-1]),t}function lM(n,{radius:e=.035,closed:t=!1}={}){let i=n.filter(([c,l],h)=>h===0||Math.hypot(c-n[h-1][0],l-n[h-1][1])>1e-4),r=(t?i:cM(i)).map(([c,l])=>new I(c,l,0));t&&r.pop();let o=new ur(r,t,"catmullrom",t?.5:0),a=Math.max(12,r.length*4);return new ao(o,a,e,8,t)}function Zm(n,{radius:e=.035,spacing:t=.32}={}){let i=[],s=0,r=typeof n=="string"?[...n].map(o=>oM[o]):n;for(let o of r){if(!o){s+=.5;continue}o.strokes.forEach((a,c)=>{let l=lM(a.map(([h,f])=>[h+s,f]),{radius:e,closed:o.closed?.[c]??!1});i.push(l)}),s+=o.w+t}return{geometries:i,width:Math.max(0,s-t)}}function mu(...n){let e=new Set,t=[];for(let i of n){let s=i.split(`
`),r=!1,o=0;for(let a of s){let c=/^(?:float|vec[234]|bool|int) (wp_\w+)\(/.exec(a);o===0&&c&&(r=e.has(c[1]),e.add(c[1])),!r&&a.trim()&&t.push(a),o+=(a.match(/{/g)||[]).length-(a.match(/}/g)||[]).length,o===0&&a.includes("}")&&(r=!1)}}return t.join(`
`)}var hM=`
  out vec2 vUv;
  void main() {
    // Fullscreen triangle from gl_VertexID \u2014 no attributes, no fuss.
    vec2 p = vec2(float((gl_VertexID & 1) << 2) - 1.0, float((gl_VertexID & 2) << 1) - 1.0);
    vUv = p * 0.5 + 0.5;
    gl_Position = vec4(p, 0.0, 1.0);
  }
`;function uM(){return`
  precision highp float;
  in vec2 vUv;
  out vec4 frag;
  uniform sampler2D tScene;
  uniform sampler2D tBloom;
  uniform float uMode;       // 0 whitepoint, 1 naive
  uniform float uP3;         // 1 when the drawing buffer is display-p3
  uniform float uSrgbPreview;// 1 to show the sRGB-clamped view on a P3 display
  uniform float uExposure;
  uniform float uBloomAmt;
${mu(Vo("xyz-d65","oklch"),du("display-p3"),du("srgb"),Vo("srgb","display-p3"))}
  void main() {
    vec3 s = texture(tScene, vUv).rgb;
    vec3 b = texture(tBloom, vUv).rgb;
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
`}var fM=`
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
`,dM=`
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
`;function pu(n,e){let t=new fr({glslVersion:Mo,vertexShader:hM,fragmentShader:n,uniforms:e,depthTest:!1,depthWrite:!1}),i=new ze(new jt,t);i.frustumCulled=!1,i.geometry.setDrawRange(0,3);let r=new Ns;return r.add(i),{scene:r,mat:t}}function Jm(n,e){return new Xt(n,e,{type:Sn,minFilter:At,magFilter:At,depthBuffer:!1,colorSpace:On})}function gu(n,e,t,i){let s=new Xt(e,t,{type:Sn,samples:4,colorSpace:On}),r=Math.max(1,e>>1),o=Math.max(1,t>>1),a=Jm(r,o),c=Jm(r,o),l=pu(fM,{tScene:{value:s.texture},uMode:i,uThreshold:{value:1.2}}),h=pu(dM,{tSrc:{value:null},uDir:{value:new we}}),f=pu(uM(),{tScene:{value:s.texture},tBloom:{value:c.texture},uMode:i,uP3:{value:0},uSrgbPreview:{value:0},uExposure:{value:1},uBloomAmt:{value:.7}}),u=new Fs;function d(v,m){n.setRenderTarget(s),n.render(v,m),n.setRenderTarget(a),n.render(l.scene,u);for(let p=0;p<2;p++)h.mat.uniforms.tSrc.value=a.texture,h.mat.uniforms.uDir.value.set(1/r,0),n.setRenderTarget(c),n.render(h.scene,u),h.mat.uniforms.tSrc.value=c.texture,h.mat.uniforms.uDir.value.set(0,1/o),n.setRenderTarget(a),n.render(h.scene,u);f.mat.uniforms.tBloom.value=a.texture,n.setRenderTarget(null),n.render(f.scene,u)}function g(){s.dispose(),a.dispose(),c.dispose();for(let v of[l,h,f])v.mat.dispose()}return{render:d,output:f.mat,sceneRT:s,dispose:g}}var Pn=8,pM=`
  varying vec3 vPos;
  varying vec3 vNormal;
  varying vec2 vUv;
  void main() {
    vPos = (modelMatrix * vec4(position, 1.0)).xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    vUv = uv;
    gl_Position = projectionMatrix * viewMatrix * vec4(vPos, 1.0);
  }
`,mM=`
  varying vec3 vPos;
  varying vec3 vNormal;
  varying vec2 vUv;
  uniform vec3 uPairA[${Pn}];
  uniform vec3 uPairB[${Pn}];
  uniform vec3 uNaiveLight[${Pn}];
  uniform vec3 uLightPos[${Pn}];
  uniform float uIntensity[${Pn}];
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
    for (int i = 0; i < ${Pn}; i++) {
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
`,gM=`
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    vView = normalize(cameraPosition - wp);
    gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
  }
`,jm=`
  varying vec3 vNormal;
  varying vec3 vView;
  uniform vec3 uXyz;
  uniform vec3 uNaive;
  uniform float uPower;
  uniform float uFlicker;
  uniform float uMode;
  void main() {
    // Limb profile: a glowing column reads brightest through its core.
    float core = 0.55 + 0.45 * pow(max(dot(normalize(vNormal), vView), 0.0), 2.0);
    float p = uPower * uFlicker;
    vec3 whitepoint = uXyz * p * core;
    vec3 naive = uNaive * min(p * core, 1.0); // LDR: the tube saturates
    gl_FragColor = vec4(mix(whitepoint, naive, uMode), 1.0);
  }
`,Qm=`
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
`,e1=`
  varying vec2 vUvE;
  void main() {
    vUvE = uv;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
  }
`;function _M(){return`
  varying vec2 vUvE;
  uniform vec3 uLchBright;
  uniform vec3 uLchDark;
  uniform vec3 uNaive;
  uniform float uPower;
  uniform float uFlicker;
  uniform float uMode;
${mu(qm("oklch"),Vo("oklch","xyz-d65"))}
  void main() {
    float r = length(vUvE - 0.5) * 2.0;
    float t = smoothstep(0.0, 1.0, r);
    float fade = (1.0 - t) * uPower * uFlicker;
    vec3 lch = wp_mix_oklch_shorter(uLchBright, uLchDark, t);
    vec3 whitepoint = wp_oklch_to_xyz_d65(lch) * fade;
    vec3 naive = mix(uNaive, vec3(0.0), t) * fade;
    gl_FragColor = vec4(mix(whitepoint, naive, uMode), 1.0);
  }
`}function ti(n){return new I(n[0],n[1],n[2])}function Bl(n,e){let t=n.slice(0,Pn).map(ti);for(;t.length<Pn;)t.push(ti(e));return t}function tn(n,e,t=e,i={}){let{pairs:s}=n.derived,r=new Ft({vertexShader:pM,fragmentShader:mM,uniforms:{uPairA:{value:Bl(s[e],[0,0,0])},uPairB:{value:Bl(s[t],[0,0,0])},uNaiveLight:n.shared.uNaiveLight,uLightPos:n.shared.uLightPos,uIntensity:n.shared.uIntensity,uAlbedoA:{value:ti(n.materialsSrgb[e])},uAlbedoB:{value:ti(n.materialsSrgb[t])},uUvScale:{value:new we(...i.uvScale??[1,1])},uKind:{value:i.kind??0},uWetness:n.shared.uWetness,uMode:n.uMode}});return n.surfaceMats.push({mat:r,matA:e,matB:t}),r}function t1(n){for(let e of n.tubeMats??[])e.uniforms.uXyz.value.set(...n.xyz),e.uniforms.uNaive.value.set(...n.naive);if(n.haloMat){let{bright:e,dark:t}=n1(n);n.haloMat.uniforms.uLchBright.value.set(...e),n.haloMat.uniforms.uLchDark.value.set(...t),n.haloMat.uniforms.uNaive.value.set(...n.naive.map(i=>i*.5))}}function _u(n){let{pairs:e,lights:t}=n.derived;for(let{mat:i,matA:s,matB:r}of n.surfaceMats)i.uniforms.uPairA.value=Bl(e[s],[0,0,0]),i.uniforms.uPairB.value=Bl(e[r],[0,0,0]);t.forEach((i,s)=>{s<Pn&&n.shared.uNaiveLight.value[s].set(...i.naive)})}function xM(n,e,t){return new Ft({vertexShader:gM,fragmentShader:jm,uniforms:{uXyz:{value:ti(e.xyz)},uNaive:{value:ti(e.naive)},uPower:{value:t},uFlicker:e.flicker,uMode:n.uMode}})}function xu(n,e,t,i,{grad:s=0,flicker:r}={}){return new Ft({vertexShader:e1,fragmentShader:Qm,uniforms:{uXyz:{value:ti(e)},uNaive:{value:ti(t)},uPower:{value:i},uFlicker:r??{value:1},uGrad:{value:s},uMode:n.uMode}})}function n1(n){let e=Qn(n.xyz.map(i=>i*.32),"xyz-d65","oklch"),t=[.045,Math.min(e[1]*.35,.04),e[2]];return{bright:e,dark:t}}function vM(n,e,t){let{bright:i,dark:s}=n1(e);return new Ft({vertexShader:e1,fragmentShader:_M(),uniforms:{uLchBright:{value:ti(i)},uLchDark:{value:ti(s)},uNaive:{value:ti(e.naive.map(r=>r*.5))},uPower:{value:t},uFlicker:e.flicker,uMode:n.uMode},transparent:!0,blending:pr,depthWrite:!1})}function Km(n,e,{scale:t,tubeR:i=.035,panelPad:s=.3,haloScale:r=2.6,power:o=14}){let a=new xn,{geometries:c,width:l}=Zm(e.text,{radius:i/t}),h=xM(n,e,o);e.tubeMats=[h];let f=new xn;for(let m of c){let p=new ze(m,h);p.userData.light=e,n.clickables.push(p),f.add(p)}f.scale.setScalar(t),f.position.set(-l/2*t,-.5*t,.1),a.add(f);let u=l*t+s*2,d=1.5*t+s*2,g=new ze(new rn(u,d,.06),tn(n,"panel"));g.position.set(0,.25*t,.02),g.userData.light=e,n.clickables.push(g),a.add(g);let v=new ze(new on(u*r,d*r),vM(n,e,.3));if(e.haloMat=v.material,v.position.set(0,.25*t,.075),a.add(v),e.facing==="front")a.position.set(e.pos[0],e.pos[1],e.pos[2]);else{let m=e.pos[0]<0?-1:1;a.rotation.y=m<0?Math.PI/2:-Math.PI/2,a.position.set(e.pos[0]*.97,e.pos[1],e.pos[2])}return a}function yM(n,e,t){let i=new xn,s=1,r=1.5,o=new ze(new rn(s+.16,r+.16,.1),tn(n,"panel"));i.add(o);let a=2,c=3,l=s/a,h=r/c;e.paneMats=[];for(let u=0;u<c;u++)for(let d=0;d<a;d++){let g=t[(u*a+d)%t.length],v=xu(n,g.xyz,g.naive,1.1,{flicker:e.flicker});e.paneMats.push(v);let m=new ze(new on(l-.05,h-.05),v);m.position.set((d+.5)*l-s/2,(u+.5)*h-r/2,.06),i.add(m)}let f=e.pos[0]<0?-1:1;return i.rotation.y=f<0?Math.PI/2:-Math.PI/2,i.position.set(e.pos[0]*.97,e.pos[1],e.pos[2]),i}function MM(n,e){let t=new xn,i=tn(n,"metal"),s=new ze(new Ti(.05,.07,4.7,10),i);s.position.set(2.45,2.35,e.pos[2]),t.add(s);let r=new ze(new Ti(.04,.04,1.3,8),i);r.rotation.z=Math.PI/2,r.position.set(1.85,4.66,e.pos[2]),t.add(r);let o=new ze(new io(.24,.22,12),i);o.position.set(e.pos[0],e.pos[1]+.16,e.pos[2]),t.add(o);let a=new ze(new oo(.13,16,12),xu(n,e.xyz,e.naive,9,{flicker:e.flicker}));return e.headMat=a.material,a.position.set(...e.pos),t.add(a),t}function bM(n,e){let t=new xn;for(let i of e)i.updateMatrixWorld(!0),i.traverse(s=>{if(!s.isMesh)return;let r=s.material.fragmentShader===jm,o=s.material.fragmentShader===Qm;if(!r&&!o)return;let a=s.material.clone();a.uniforms.uFlicker=s.material.uniforms.uFlicker,a.uniforms.uMode=n.uMode,a.uniforms.uPower={value:s.material.uniforms.uPower.value},n.reflectionMats.push({m:a,src:s.material}),a.transparent=!0,a.blending=pr,a.depthWrite=!1,a.side=Un;let c=new ze(s.geometry,a);c.applyMatrix4(s.matrixWorld),c.applyMatrix4(new at().makeScale(1,-1,1)),c.applyMatrix4(new at().makeScale(1,1.18,1)),t.add(c)});return t}function i1(n){let e=n.shared.uWetness.value;for(let{m:t,src:i}of n.reflectionMats)t.uniforms.uPower.value=i.uniforms.uPower.value*.38*e,t.uniforms.uXyz=i.uniforms.uXyz,t.uniforms.uNaive=i.uniforms.uNaive}function s1(n){let e=new Ns,{lights:t,windowPanes:i,sky:s,skyNaive:r}=n.derived,o=Object.fromEntries(t.map(R=>[R.name,R])),a=new ze(new on(7.2,26,1,1),tn(n,"asphalt","asphaltWet",{kind:2,uvScale:[6,22]}));a.rotation.x=-Math.PI/2,a.position.set(0,0,-5),a.material.depthWrite=!1,a.renderOrder=-2,e.add(a);let c={kind:1,uvScale:[104,84]},l=new ze(new on(21,7),tn(n,"brick","mortar",{kind:1,uvScale:[84,84]}));l.rotation.y=Math.PI/2,l.position.set(-2.8,3.5,-2.5),e.add(l);let h=new ze(new on(26,7),tn(n,"brick","mortar",c));h.rotation.y=-Math.PI/2,h.position.set(2.8,3.5,-5),e.add(h);let f=new ze(new on(4.1,5.2),tn(n,"brick","mortar",{kind:1,uvScale:[16,62]}));f.position.set(-.75,2.6,-13),e.add(f);let u=new ze(new on(1.7,5.2),tn(n,"concrete","concrete",{kind:1,uvScale:[6,38]}));u.position.set(1.95,2.6,-18),e.add(u);let d=new ze(new on(9,7),xu(n,s,r,3,{grad:1}));d.position.set(0,8.4,-18.4),e.add(d);for(let R of[-2.65,2.65]){let x=new ze(new rn(.3,.16,26),tn(n,"concrete"));x.position.set(R,.08,-5),e.add(x)}let g=[],v=(R,x)=>{let T=Km(n,R,x);g.push(T),e.add(T)};o.whitepoint.text="whitepoint";let m=Km(n,o.whitepoint,{scale:.45,power:5.5});g.push(m),e.add(m);for(let R of[-1,1]){let x=new ze(new Ti(.012,.012,2.6,6),tn(n,"metal"));x.position.set(.45+R*2.1,5.45,-5.2),x.rotation.z=R*.45,e.add(x)}o.bar.text="BAR",v(o.bar,{scale:.42,tubeR:.04,power:4.5}),o.open.text="OPEN",v(o.open,{scale:.3,power:4.5}),o.cocktail.text=[Ym],v(o.cocktail,{scale:.62,power:4.5}),o.live.text="LIVE",v(o.live,{scale:.34,power:4.2});let p=yM(n,o.window,i);e.add(p);let M=MM(n,o.street);e.add(M);let w=new ze(new rn(.06,2.2,1),tn(n,"door"));w.position.set(-2.76,1.1,-2.2),e.add(w);let S=new ze(new rn(.5,.14,1.2),tn(n,"concrete"));S.position.set(-2.6,.07,-2.2),e.add(S);let A=new ze(new rn(.95,1.15,1.9),tn(n,"door"));A.position.set(-2.25,.58,-7.6),e.add(A);let E=new ze(new rn(1,.08,1.95),tn(n,"metal"));E.position.set(-2.27,1.18,-7.6),E.rotation.z=.07,e.add(E);for(let[R,x]of[[-6.2,6.8],[-11.5,6.8]]){let T=new ze(new Ti(.05,.05,x,8),tn(n,"metal"));T.position.set(2.74,x/2,R),e.add(T)}return e.add(bM(n,[...g,p,M])),e}Be.enabled=!1;var SM=[{name:"whitepoint",gas:"neon",pos:[.45,4.15,-5.2],facing:"front",nudge:[0,-.6,.7],intensity:1.6},{name:"bar",gas:"helium",pos:[-2.05,3.05,-1.6],facing:"front",nudge:[0,0,.5],intensity:1},{name:"open",gas:"mercury",pos:[2,2.75,-7.5],facing:"front",nudge:[0,0,.5],intensity:.9},{name:"cocktail",gas:"xenon",pos:[-1.75,3.15,-12.9],facing:"front",nudge:[0,0,.6],intensity:.85},{name:"live",gas:"hydrogen",pos:[-.35,2.35,-12.9],facing:"front",nudge:[0,0,.6],intensity:.7},{name:"window",window:["#1a3f8f","#8f1a2e","#1f6e52","#b1741f"],pos:[-2.8,2.6,-10.5],intensity:.6},{name:"street",gas:"sodium-lamp",pos:[1.25,4.55,4.6],intensity:2.2}],wM=n=>{if(n.nudge)return n.pos.map((t,i)=>t+n.nudge[i]);let e=Math.abs(n.pos[0])>2.5?-Math.sign(n.pos[0])*.5:0;return[n.pos[0]+e,n.pos[1],n.pos[2]]},Go=document.getElementById("alley"),Gl=Go.getContext("webgl2",{antialias:!1,alpha:!1,preserveDrawingBuffer:!0});if("drawingBufferColorSpace"in Gl)try{Gl.drawingBufferColorSpace="display-p3"}catch{}var Hl=Gl.drawingBufferColorSpace==="display-p3",Ho=new $c({canvas:Go,context:Gl,antialias:!1});Ho.toneMapping=Mn;var Hn=Mm(SM);Hn.lights.forEach(n=>{n.flicker={value:1}});var vu=(n,e)=>Array.from({length:n},(t,i)=>e(i)),p1={uLightPos:{value:vu(Pn,n=>new I(...Hn.lights[n]?wM(Hn.lights[n]):[0,-99,0]))},uIntensity:{value:vu(Pn,n=>Hn.lights[n]?.intensity??0)},uNaiveLight:{value:vu(Pn,n=>new I(...Hn.lights[n]?.naive??[0,0,0]))},uWetness:{value:.85}},$l={value:0},Fr={derived:Hn,materialsSrgb:Ul,shared:p1,uMode:$l,surfaceMats:[],reflectionMats:[],clickables:[]};Hn.lights.forEach((n,e)=>{n.index=e});var EM=s1(Fr),Ur=new Wt(54,1,.1,80);function m1(){let n=Go.clientWidth,e=Math.round(n*.58),t=Math.min(window.devicePixelRatio||1,2);return Ho.setSize(n,e,!1),Ho.setPixelRatio(t),Ur.aspect=n/e,Ur.updateProjectionMatrix(),[Math.round(n*t),Math.round(e*t)]}var[kl,Vl]=m1(),Es=gu(Ho,kl,Vl,$l);Es.output.uniforms.uP3.value=Hl?1:0;window.addEventListener("resize",()=>{let[n,e]=m1();(n!==kl||e!==Vl)&&([kl,Vl]=[n,e],Es.dispose?.(),Es=gu(Ho,kl,Vl,$l),Es.output.uniforms.uP3.value=Hl?1:0,Es.output.uniforms.uSrgbPreview.value=fn.srgbPreview?1:0)});var fn={naive:!1,sodiumOnly:!1,srgbPreview:!1},r1=document.getElementById("mode");r1?.addEventListener("change",()=>{fn.naive=r1.checked,$l.value=fn.naive?1:0,document.body.dataset.mode=fn.naive?"naive":"whitepoint"});var o1=document.getElementById("gamut-badge");o1&&(o1.textContent=Hl?"display-p3 output \u2014 your display shows the wide-gamut reds":"sRGB display \u2014 the emitted cusp mapper is doing the fallback live");var a1=document.getElementById("derived");function Mu(){a1&&(a1.textContent=Hn.lights.map(n=>{let[e,t,i]=n.xyz,s=e/(e+t+i),r=t/(e+t+i),o=n.window?"2700 K Planck \xD7 stained glass":n.gas==="sodium-lamp"?"Na D doublet":`${n.gas} (NIST lines)`;return`${n.name.padEnd(10)} ${o.padEnd(28)} xy ${s.toFixed(3)} ${r.toFixed(3)}   naive #${n.naive.map(a=>Math.round(a*255).toString(16).padStart(2,"0")).join("")}`}).join(`
`))}Mu();var bu=Hn.lights.filter(n=>n.gas&&n.gas!=="sodium-lamp"),Nr=bu[0],c1=document.getElementById("sign-tabs"),l1=document.getElementById("gas-row"),h1=document.getElementById("gas-info");function u1(n,e,t,i=""){let s=document.createElement("button");return s.className=`chip ${e?"on":""} ${i}`,s.textContent=n,s.addEventListener("click",t),s}function Wl(){!c1||!l1||(c1.replaceChildren(...bu.map(n=>u1(n.name,n===Nr,()=>{Nr=n,Wl()}))),l1.replaceChildren(...Object.keys(Nl).map(n=>u1(n,Nr.gas===n,()=>TM(Nr,n)))),h1&&(h1.textContent=Nl[Nr.gas]??""))}function TM(n,e){Jh(Hn,n.index,e),_u(Fr),t1(n),Mu(),Wl()}Wl();var f1=new ho;Go.addEventListener("click",n=>{let e=Go.getBoundingClientRect(),t=new we((n.clientX-e.left)/e.width*2-1,-((n.clientY-e.top)/e.height)*2+1);f1.setFromCamera(t,Ur);let i=f1.intersectObjects(Fr.clickables,!1)[0];i?.object.userData.light&&bu.includes(i.object.userData.light)&&(Nr=i.object.userData.light,Wl())});var yu=document.getElementById("kill");yu?.addEventListener("click",()=>{fn.sodiumOnly=!fn.sodiumOnly,yu.classList.toggle("on",fn.sodiumOnly),yu.textContent=fn.sodiumOnly?"relight the neon":"kill the neon"});var zl=document.getElementById("srgb-preview");zl&&Hl&&(zl.hidden=!1,zl.addEventListener("click",()=>{fn.srgbPreview=!fn.srgbPreview,zl.classList.toggle("on",fn.srgbPreview),Es.output.uniforms.uSrgbPreview.value=fn.srgbPreview?1:0}));var AM=n=>n-Math.floor(n),d1=n=>AM(Math.sin(n*12.9898)*43758.5453);function CM(n,e,t){let i=1+.022*Math.sin(e*120*Math.PI+n*1.7),s=Math.floor(e*6.3)+n*197,a=d1(s)<(t?.14:.035)?.3+.55*d1(s+.5):1;return i*a}var RM=performance.now();function g1(){let n=(performance.now()-RM)/1e3;Ur.position.set(.26*Math.sin(n*.07),1.7+.05*Math.sin(n*.11),7.4),Ur.lookAt(.1*Math.sin(n*.05),2.15,-6),Hn.lights.forEach((e,t)=>{let i=e.gas==="sodium-lamp",s=fn.sodiumOnly&&!i?0:1,r=CM(t,n,e.name==="live")*s;e.flicker.value=r,p1.uIntensity.value[t]=e.intensity*r}),i1(Fr),Es.render(EM,Ur),requestAnimationFrame(g1)}requestAnimationFrame(g1);window.__alley={ctx:Fr,swapGas:(n,e)=>{Jh(Hn,n,e),_u(Fr),Mu()},state:fn,GASES:Nl,post:()=>Es};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
