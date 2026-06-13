var hu=0,$l=1,uu=2;var $s=1,fu=2,is=3,di=0,Qe=1,jn=2,Qn=0,wr=1,Wl=2,Xl=3,ql=4,du=5;var qi=100,pu=101,mu=102,gu=103,_u=104,xu=200,vu=201,yu=202,Mu=203,Wo=204,Xo=205,bu=206,Su=207,wu=208,Tu=209,Eu=210,Au=211,Cu=212,Ru=213,Pu=214,qo=0,Yo=1,Zo=2,Tr=3,Jo=4,Ko=5,jo=6,Qo=7,Yl=0,Iu=1,Lu=2,gn=0,Zl=1,Jl=2,Kl=3,jl=4,Ql=5,t0=6,e0=7;var n0=300,Qi=301,Rr=302,Ta=303,Ea=304,Ws=306,ta=1e3,Yn=1001,ea=1002,Ue=1003,Du=1004;var Xs=1005;var Ae=1006,Aa=1007;var tr=1008;var _n=1009,i0=1010,r0=1011,rs=1012,Ca=1013,zn=1014,kn=1015,xn=1016,Ra=1017,Pa=1018,ss=1020,s0=35902,o0=35899,a0=1021,c0=1022,Cn=1023,Zn=1026,er=1027,l0=1028,Ia=1029,nr=1030,La=1031;var Da=1033,qs=33776,Ys=33777,Zs=33778,Js=33779,Na=35840,Ua=35841,Fa=35842,Oa=35843,Ba=36196,za=37492,ka=37496,Va=37488,Ga=37489,Ks=37490,Ha=37491,$a=37808,Wa=37809,Xa=37810,qa=37811,Ya=37812,Za=37813,Ja=37814,Ka=37815,ja=37816,Qa=37817,tc=37818,ec=37819,nc=37820,ic=37821,rc=36492,sc=36494,oc=36495,ac=36283,cc=36284,js=36285,lc=36286;var Es=2300,na=2301,$o=2302,Fl=2303,Ol=2400,Bl=2401,zl=2402;var Nu=3200;var h0=0,Uu=1,Rn="",dn="srgb",As="srgb-linear",Cs="linear",Yt="srgb";var br=7680;var kl=519,Fu=512,Ou=513,Bu=514,hc=515,zu=516,ku=517,uc=518,Vu=519,Vl=35044;var Qs="300 es",Bn=2e3,Rs=2001;function dm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function pm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ps(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gu(){let n=Ps("canvas");return n.style.display="block",n}var Xh={},Kr=null;function u0(...n){let t="THREE."+n.shift();Kr?Kr("log",t,...n):console.log(t,...n)}function Hu(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function wt(...n){n=Hu(n);let t="THREE."+n.shift();if(Kr)Kr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Et(...n){n=Hu(n);let t="THREE."+n.shift();if(Kr)Kr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ia(...n){let t=n.join(" ");t in Xh||(Xh[t]=!0,wt(...n))}function $u(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var Wu={[qo]:Yo,[Zo]:jo,[Jo]:Qo,[Tr]:Ko,[Yo]:qo,[jo]:Zo,[Qo]:Jo,[Ko]:Tr},Jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var dl=Math.PI/180,ra=180/Math.PI;function to(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function Vt(n,t,e){return Math.max(t,Math.min(e,n))}function mm(n,t){return(n%t+t)%t}function pl(n,t,e){return(1-e)*n+e*t}function Ms(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Xt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kn=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],h=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(f!==v||c!==h||l!==p||u!==g){let m=c*h+l*p+u*g+f*v;m<0&&(h=-h,p=-p,g=-g,v=-v,m=-m);let d=1-a;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);d=Math.sin(d*M)/w,a=Math.sin(a*M)/w,c=c*d+h*a,l=l*d+p*a,u=u*d+g*a,f=f*d+v*a}else{c=c*d+h*a,l=l*d+p*a,u=u*d+g*a,f=f*d+v*a;let M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*f+c*p-l*h,t[e+1]=c*g+u*h+l*f-a*p,t[e+2]=l*g+u*p+a*h-c*f,t[e+3]=u*g-a*f-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),h=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"YZX":this._x=h*u*f+l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f-h*p*g;break;case"XZY":this._x=h*u*f-l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f+h*p*g;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>f){let p=2*Math.sqrt(1+i-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>f){let p=2*Math.sqrt(1+a-i-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+c*l+o*f-a*u,this.y=i+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ml.copy(this).projectOnVector(t),this.sub(ml)}reflect(t){return this.sub(ml.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ml=new O,qh=new Kn,Rt=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],v=r[0],m=r[3],d=r[6],M=r[1],w=r[4],S=r[7],A=r[2],T=r[5],P=r[8];return s[0]=o*v+a*M+c*A,s[3]=o*m+a*w+c*T,s[6]=o*d+a*S+c*P,s[1]=l*v+u*M+f*A,s[4]=l*m+u*w+f*T,s[7]=l*d+u*S+f*P,s[2]=h*v+p*M+g*A,s[5]=h*m+p*w+g*T,s[8]=h*d+p*S+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*s,p=l*s-o*c,g=e*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=f*v,t[1]=(r*l-u*i)*v,t[2]=(a*i-r*o)*v,t[3]=h*v,t[4]=(u*e-r*c)*v,t[5]=(r*s-a*e)*v,t[6]=p*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(gl.makeScale(t,e)),this}rotate(t){return this.premultiply(gl.makeRotation(-t)),this}translate(t,e){return this.premultiply(gl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},gl=new Rt,Yh=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gm(){let n={enabled:!0,workingColorSpace:As,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Yt&&(r.r=fi(r.r),r.g=fi(r.g),r.b=fi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Yt&&(r.r=Jr(r.r),r.g=Jr(r.g),r.b=Jr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Rn?Cs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ia("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ia("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[As]:{primaries:t,whitePoint:i,transfer:Cs,toXYZ:Yh,fromXYZ:Zh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:t,whitePoint:i,transfer:Yt,toXYZ:Yh,fromXYZ:Zh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),n}var Ot=gm();function fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Jr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Br,sa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Br===void 0&&(Br=Ps("canvas")),Br.width=t.width,Br.height=t.height;let r=Br.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Br}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ps("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fi(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(fi(e[i]/255)*255):e[i]=fi(e[i]);return{data:e,width:t.width,height:t.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},_m=0,jr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=to(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_l(r[o].image)):s.push(_l(r[o]))}else s=_l(r);i.url=s}return e||(t.images[this.uuid]=i),i}};function _l(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}var xm=0,xl=new O,nn=class n extends Jn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Yn,r=Yn,s=Ae,o=tr,a=Cn,c=_n,l=n.DEFAULT_ANISOTROPY,u=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=to(),this.name="",this.source=new jr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xl).x}get height(){return this.source.getSize(xl).y}get depth(){return this.source.getSize(xl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){wt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==n0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ta:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ta:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=n0;nn.DEFAULT_ANISOTROPY=1;var xe=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],g=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,S=(p+1)/2,A=(d+1)/2,T=(u+h)/4,P=(f+v)/4,x=(g+m)/4;return w>S&&w>A?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=T/i,s=P/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=x/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=P/s,r=x/s),this.set(i,r,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-v)/M,this.z=(h-u)/M,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oa=class extends Jn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:i.depth},s=new nn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:Ae,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new jr(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},We=class extends oa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Is=class extends nn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var aa=class extends nn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ee=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,r,s,o,a,c,l,u,f,h,p,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,f,h,p,g,v,m)}set(t,e,i,r,s,o,a,c,l,u,f,h,p,g,v,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let e=this.elements,i=t.elements,r=1/zr.setFromMatrixColumn(t,0).length(),s=1/zr.setFromMatrixColumn(t,1).length(),o=1/zr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let h=o*u,p=o*f,g=a*u,v=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=p+g*l,e[5]=h-v*l,e[9]=-a*c,e[2]=v-h*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,p=c*f,g=l*u,v=l*f;e[0]=h+v*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=v+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,p=c*f,g=l*u,v=l*f;e[0]=h-v*a,e[4]=-o*f,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=v-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,p=o*f,g=a*u,v=a*f;e[0]=c*u,e[4]=g*l-p,e[8]=h*l+v,e[1]=c*f,e[5]=v*l+h,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=v-h*f,e[8]=g*f+p,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*f+g,e[10]=h-v*f}else if(t.order==="XZY"){let h=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+v,e[5]=o*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=a*u,e[10]=v*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vm,t,ym)}lookAt(t,e,i){let r=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),ki.crossVectors(i,un),ki.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ki.crossVectors(i,un)),ki.normalize(),wo.crossVectors(un,ki),r[0]=ki.x,r[4]=wo.x,r[8]=un.x,r[1]=ki.y,r[5]=wo.y,r[9]=un.y,r[2]=ki.z,r[6]=wo.z,r[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],M=i[3],w=i[7],S=i[11],A=i[15],T=r[0],P=r[4],x=r[8],E=r[12],I=r[1],C=r[5],D=r[9],H=r[13],$=r[2],U=r[6],k=r[10],G=r[14],j=r[3],Q=r[7],lt=r[11],xt=r[15];return s[0]=o*T+a*I+c*$+l*j,s[4]=o*P+a*C+c*U+l*Q,s[8]=o*x+a*D+c*k+l*lt,s[12]=o*E+a*H+c*G+l*xt,s[1]=u*T+f*I+h*$+p*j,s[5]=u*P+f*C+h*U+p*Q,s[9]=u*x+f*D+h*k+p*lt,s[13]=u*E+f*H+h*G+p*xt,s[2]=g*T+v*I+m*$+d*j,s[6]=g*P+v*C+m*U+d*Q,s[10]=g*x+v*D+m*k+d*lt,s[14]=g*E+v*H+m*G+d*xt,s[3]=M*T+w*I+S*$+A*j,s[7]=M*P+w*C+S*U+A*Q,s[11]=M*x+w*D+S*k+A*lt,s[15]=M*E+w*H+S*G+A*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],p=t[14],g=t[3],v=t[7],m=t[11],d=t[15],M=c*p-l*h,w=a*p-l*f,S=a*h-c*f,A=o*p-l*u,T=o*h-c*u,P=o*f-a*u;return e*(v*M-m*w+d*S)-i*(g*M-m*A+d*T)+r*(g*w-v*A+d*P)-s*(g*S-v*T+m*P)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],p=t[11],g=t[12],v=t[13],m=t[14],d=t[15],M=e*a-i*o,w=e*c-r*o,S=e*l-s*o,A=i*c-r*a,T=i*l-s*a,P=r*l-s*c,x=u*v-f*g,E=u*m-h*g,I=u*d-p*g,C=f*m-h*v,D=f*d-p*v,H=h*d-p*m,$=M*H-w*D+S*C+A*I-T*E+P*x;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/$;return t[0]=(a*H-c*D+l*C)*U,t[1]=(r*D-i*H-s*C)*U,t[2]=(v*P-m*T+d*A)*U,t[3]=(h*T-f*P-p*A)*U,t[4]=(c*I-o*H-l*E)*U,t[5]=(e*H-r*I+s*E)*U,t[6]=(m*S-g*P-d*w)*U,t[7]=(u*P-h*S+p*w)*U,t[8]=(o*D-a*I+l*x)*U,t[9]=(i*I-e*D-s*x)*U,t[10]=(g*T-v*S+d*M)*U,t[11]=(f*S-u*T-p*M)*U,t[12]=(a*E-o*C-c*x)*U,t[13]=(e*C-i*E+r*x)*U,t[14]=(v*w-g*A-m*M)*U,t[15]=(u*A-f*w+h*M)*U,this}scale(t){let e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,f=a+a,h=s*l,p=s*u,g=s*f,v=o*u,m=o*f,d=a*f,M=c*l,w=c*u,S=c*f,A=i.x,T=i.y,P=i.z;return r[0]=(1-(v+d))*A,r[1]=(p+S)*A,r[2]=(g-w)*A,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(h+d))*T,r[6]=(m+M)*T,r[7]=0,r[8]=(g+w)*P,r[9]=(m-M)*P,r[10]=(1-(h+v))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinant();if(s===0)return i.set(1,1,1),e.identity(),this;let o=zr.set(r[0],r[1],r[2]).length(),a=zr.set(r[4],r[5],r[6]).length(),c=zr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Un.copy(this);let l=1/o,u=1/a,f=1/c;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,e.setFromRotationMatrix(Un),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,r,s,o,a=Bn,c=!1){let l=this.elements,u=2*s/(e-t),f=2*s/(i-r),h=(e+t)/(e-t),p=(i+r)/(i-r),g,v;if(c)g=s/(o-s),v=o*s/(o-s);else if(a===Bn)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Rs)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Bn,c=!1){let l=this.elements,u=2/(e-t),f=2/(i-r),h=-(e+t)/(e-t),p=-(i+r)/(i-r),g,v;if(c)g=1/(o-s),v=o/(o-s);else if(a===Bn)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===Rs)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},zr=new O,Un=new Ee,vm=new O(0,0,0),ym=new O(1,1,1),ki=new O,wo=new O,un=new O,Jh=new Ee,Kh=new Kn,Yi=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Jh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yi.DEFAULT_ORDER="XYZ";var Ls=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Mm=0,jh=new O,kr=new Kn,ai=new Ee,To=new O,bs=new O,bm=new O,Sm=new Kn,Qh=new O(1,0,0),tu=new O(0,1,0),eu=new O(0,0,1),nu={type:"added"},wm={type:"removed"},Vr={type:"childadded",child:null},vl={type:"childremoved",child:null},An=class n extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,e=new Yi,i=new Kn,r=new O(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Rt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return kr.setFromAxisAngle(t,e),this.quaternion.multiply(kr),this}rotateOnWorldAxis(t,e){return kr.setFromAxisAngle(t,e),this.quaternion.premultiply(kr),this}rotateX(t){return this.rotateOnAxis(Qh,t)}rotateY(t){return this.rotateOnAxis(tu,t)}rotateZ(t){return this.rotateOnAxis(eu,t)}translateOnAxis(t,e){return jh.copy(t).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qh,t)}translateY(t){return this.translateOnAxis(tu,t)}translateZ(t){return this.translateOnAxis(eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?To.copy(t):To.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(bs,To,this.up):ai.lookAt(To,bs,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),kr.setFromRotationMatrix(ai),this.quaternion.premultiply(kr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Et("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nu),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wm),vl.child=t,this.dispatchEvent(vl),vl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nu),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,bm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Sm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}};An.DEFAULT_UP=new O(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sr=class extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tm={type:"move"},Qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,i),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tm)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Sr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function yl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ot.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Ot.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ot.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Ot.workingColorSpace){if(t=mm(t,1),e=Vt(e,0,1),i=Vt(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=yl(o,s,t+1/3),this.g=yl(o,s,t),this.b=yl(o,s,t-1/3)}return Ot.colorSpaceToWorking(this,r),this}setStyle(t,e=dn){function i(s){s!==void 0&&parseFloat(s)<1&&wt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:wt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){let i=Xu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=Jr(t.r),this.g=Jr(t.g),this.b=Jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return Ot.workingToColorSpace(He.copy(this),t),Math.round(Vt(He.r*255,0,255))*65536+Math.round(Vt(He.g*255,0,255))*256+Math.round(Vt(He.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ot.workingColorSpace){Ot.workingToColorSpace(He.copy(this),e);let i=He.r,r=He.g,s=He.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Ot.workingColorSpace){return Ot.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=dn){Ot.workingToColorSpace(He.copy(this),t);let e=He.r,i=He.g,r=He.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Eo);let i=pl(Vi.h,Eo.h,e),r=pl(Vi.s,Eo.s,e),s=pl(Vi.l,Eo.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new qt;qt.NAMES=Xu;var Er=class extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fn=new O,ci=new O,Ml=new O,li=new O,Gr=new O,Hr=new O,iu=new O,bl=new O,Sl=new O,wl=new O,Tl=new xe,El=new xe,Al=new xe,Xi=class n{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Fn.subVectors(t,e),r.cross(Fn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Fn.subVectors(r,e),ci.subVectors(i,e),Ml.subVectors(t,e);let o=Fn.dot(Fn),a=Fn.dot(ci),c=Fn.dot(Ml),l=ci.dot(ci),u=ci.dot(Ml),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;let h=1/f,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,li.x),c.addScaledVector(o,li.y),c.addScaledVector(a,li.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return Tl.setScalar(0),El.setScalar(0),Al.setScalar(0),Tl.fromBufferAttribute(t,e),El.fromBufferAttribute(t,i),Al.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Tl,s.x),o.addScaledVector(El,s.y),o.addScaledVector(Al,s.z),o}static isFrontFacing(t,e,i,r){return Fn.subVectors(i,e),ci.subVectors(t,e),Fn.cross(ci).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Fn.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,s=this.c,o,a;Gr.subVectors(r,i),Hr.subVectors(s,i),bl.subVectors(t,i);let c=Gr.dot(bl),l=Hr.dot(bl);if(c<=0&&l<=0)return e.copy(i);Sl.subVectors(t,r);let u=Gr.dot(Sl),f=Hr.dot(Sl);if(u>=0&&f<=u)return e.copy(r);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Gr,o);wl.subVectors(t,s);let p=Gr.dot(wl),g=Hr.dot(wl);if(g>=0&&p<=g)return e.copy(s);let v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Hr,a);let m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return iu.subVectors(s,r),a=(f-u)/(f-u+(p-g)),e.copy(r).addScaledVector(iu,a);let d=1/(m+v+h);return o=v*d,a=h*d,e.copy(i).addScaledVector(Gr,o).addScaledVector(Hr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zi=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ao.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ao.copy(i.boundingBox)),Ao.applyMatrix4(t.matrixWorld),this.union(Ao)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),Co.subVectors(this.max,Ss),$r.subVectors(t.a,Ss),Wr.subVectors(t.b,Ss),Xr.subVectors(t.c,Ss),Gi.subVectors(Wr,$r),Hi.subVectors(Xr,Wr),xr.subVectors($r,Xr);let e=[0,-Gi.z,Gi.y,0,-Hi.z,Hi.y,0,-xr.z,xr.y,Gi.z,0,-Gi.x,Hi.z,0,-Hi.x,xr.z,0,-xr.x,-Gi.y,Gi.x,0,-Hi.y,Hi.x,0,-xr.y,xr.x,0];return!Cl(e,$r,Wr,Xr,Co)||(e=[1,0,0,0,1,0,0,0,1],!Cl(e,$r,Wr,Xr,Co))?!1:(Ro.crossVectors(Gi,Hi),e=[Ro.x,Ro.y,Ro.z],Cl(e,$r,Wr,Xr,Co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},hi=[new O,new O,new O,new O,new O,new O,new O,new O],On=new O,Ao=new Zi,$r=new O,Wr=new O,Xr=new O,Gi=new O,Hi=new O,xr=new O,Ss=new O,Co=new O,Ro=new O,vr=new O;function Cl(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){vr.fromArray(n,s);let a=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),c=t.dot(vr),l=e.dot(vr),u=i.dot(vr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Te=new O,Po=new Xt,Em=0,pn=class extends Jn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Em++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Vl,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Po.fromBufferAttribute(this,e),Po.applyMatrix3(t),this.setXY(e,Po.x,Po.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ms(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=en(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vl&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ds=class extends pn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ns=class extends pn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var we=class extends pn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Am=new Zi,ws=new O,Rl=new O,ts=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Am.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);let e=ws.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ws,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(Rl)),this.expandByPoint(ws.copy(t.center).sub(Rl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Cm=0,En=new Ee,Pl=new An,qr=new O,fn=new Zi,Ts=new Zi,Ne=new O,je=class n extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dm(t)?Ns:Ds)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Rt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,i){return En.makeTranslation(t,e,i),this.applyMatrix4(En),this}scale(t,e,i){return En.makeScale(t,e,i),this.applyMatrix4(En),this}lookAt(t){return Pl.lookAt(t),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new we(i,3))}else{let i=Math.min(t.length,e.count);for(let r=0;r<i;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let s=e[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(fn.min,Ts.min),fn.expandByPoint(Ne),Ne.addVectors(fn.max,Ts.max),fn.expandByPoint(Ne)):(fn.expandByPoint(Ts.min),fn.expandByPoint(Ts.max))}fn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ne.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ne));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ne.fromBufferAttribute(a,l),c&&(qr.fromBufferAttribute(t,l),Ne.add(qr)),r=Math.max(r,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let x=0;x<i.count;x++)a[x]=new O,c[x]=new O;let l=new O,u=new O,f=new O,h=new Xt,p=new Xt,g=new Xt,v=new O,m=new O;function d(x,E,I){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,I),h.fromBufferAttribute(s,x),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,I),u.sub(l),f.sub(l),p.sub(h),g.sub(h);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(C),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),a[x].add(v),a[E].add(v),a[I].add(v),c[x].add(m),c[E].add(m),c[I].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,E=M.length;x<E;++x){let I=M[x],C=I.start,D=I.count;for(let H=C,$=C+D;H<$;H+=3)d(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let w=new O,S=new O,A=new O,T=new O;function P(x){A.fromBufferAttribute(r,x),T.copy(A);let E=a[x];w.copy(E),w.sub(A.multiplyScalar(A.dot(E))).normalize(),S.crossVectors(T,E);let C=S.dot(c[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,C)}for(let x=0,E=M.length;x<E;++x){let I=M[x],C=I.start,D=I.count;for(let H=C,$=C+D;H<$;H+=3)P(t.getX(H+0)),P(t.getX(H+1)),P(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let r=new O,s=new O,o=new O,a=new O,c=new O,l=new O,u=new O,f=new O;if(t)for(let h=0,p=t.count;h<p;h+=3){let g=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let d=0;d<u;d++)h[g++]=l[p++]}return new pn(h,u,f)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,i);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],p=t(h,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let p=l[f];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let r=t.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(e))}let s=t.morphAttributes;for(let l in s){let u=[],f=s[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Rm=0,Ar=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=to(),this.name="",this.type="Material",this.blending=wr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){wt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wo&&(i.blendSrc=this.blendSrc),this.blendDst!==Xo&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ui=new O,Il=new O,Io=new O,$i=new O,Ll=new O,Lo=new O,Dl=new O,ca=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Il.copy(t).add(e).multiplyScalar(.5),Io.copy(e).sub(t).normalize(),$i.copy(this.origin).sub(Il);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Io),a=$i.dot(this.direction),c=-$i.dot(Io),l=$i.lengthSq(),u=Math.abs(1-o*o),f,h,p,g;if(u>0)if(f=o*c-a,h=o*a-c,g=s*u,f>=0)if(h>=-g)if(h<=g){let v=1/u;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Il).addScaledVector(Io,h),p}intersectSphere(t,e){ui.subVectors(t.center,this.origin);let i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,i,r,s){Ll.subVectors(e,t),Lo.subVectors(i,t),Dl.crossVectors(Ll,Lo);let o=this.direction.dot(Dl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,t);let c=a*this.direction.dot(Lo.crossVectors($i,Lo));if(c<0)return null;let l=a*this.direction.dot(Ll.cross($i));if(l<0||c+l>o)return null;let u=-a*$i.dot(Dl);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Us=class extends Ar{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ru=new Ee,yr=new ca,Do=new ts,su=new O,No=new O,Uo=new O,Fo=new O,Nl=new O,Oo=new O,ou=new O,Bo=new O,ve=class extends An{constructor(t=new je,e=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Oo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],f=s[c];u!==0&&(Nl.fromBufferAttribute(f,t),o?Oo.addScaledVector(Nl,u):Oo.addScaledVector(Nl.sub(e),u))}e.add(Oo)}return e}raycast(t,e){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(s),yr.copy(t.ray).recast(t.near),!(Do.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Do,su)===null||yr.origin.distanceToSquared(su)>(t.far-t.near)**2))&&(ru.copy(s).invert(),yr.copy(t.ray).applyMatrix4(ru),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,yr)))}_computeIntersections(t,e,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,A=w;S<A;S+=3){let T=a.getX(S),P=a.getX(S+1),x=a.getX(S+2);r=zo(this,d,t,i,l,u,f,T,P,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let M=a.getX(m),w=a.getX(m+1),S=a.getX(m+2);r=zo(this,o,t,i,l,u,f,M,w,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,A=w;S<A;S+=3){let T=S,P=S+1,x=S+2;r=zo(this,d,t,i,l,u,f,T,P,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let M=m,w=m+1,S=m+2;r=zo(this,o,t,i,l,u,f,M,w,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function Pm(n,t,e,i,r,s,o,a){let c;if(t.side===Qe?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===di,a),c===null)return null;Bo.copy(a),Bo.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Bo);return l<e.near||l>e.far?null:{distance:l,point:Bo.clone(),object:n}}function zo(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,No),n.getVertexPosition(c,Uo),n.getVertexPosition(l,Fo);let u=Pm(n,t,e,i,No,Uo,Fo,ou);if(u){let f=new O;Xi.getBarycoord(ou,No,Uo,Fo,f),r&&(u.uv=Xi.getInterpolatedAttribute(r,a,c,l,f,new Xt)),s&&(u.uv1=Xi.getInterpolatedAttribute(s,a,c,l,f,new Xt)),o&&(u.normal=Xi.getInterpolatedAttribute(o,a,c,l,f,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new O,materialIndex:0};Xi.getNormal(No,Uo,Fo,h.normal),u.face=h,u.barycoord=f}return u}var la=class extends nn{constructor(t=null,e=1,i=1,r,s,o,a,c,l=Ue,u=Ue,f,h){super(null,o,a,c,l,u,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ul=new O,Im=new O,Lm=new Rt,qn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=Ul.subVectors(i,e).cross(Im.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let r=t.delta(Ul),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Lm.getNormalMatrix(t),r=this.coplanarPoint(Ul).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Mr=new ts,Dm=new Xt(.5,.5),ko=new O,Fs=class{constructor(t=new qn,e=new qn,i=new qn,r=new qn,s=new qn,o=new qn){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Bn,i=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],f=s[5],h=s[6],p=s[7],g=s[8],v=s[9],m=s[10],d=s[11],M=s[12],w=s[13],S=s[14],A=s[15];if(r[0].setComponents(l-o,p-u,d-g,A-M).normalize(),r[1].setComponents(l+o,p+u,d+g,A+M).normalize(),r[2].setComponents(l+a,p+f,d+v,A+w).normalize(),r[3].setComponents(l-a,p-f,d-v,A-w).normalize(),i)r[4].setComponents(c,h,m,S).normalize(),r[5].setComponents(l-c,p-h,d-m,A-S).normalize();else if(r[4].setComponents(l-c,p-h,d-m,A-S).normalize(),e===Bn)r[5].setComponents(l+c,p+h,d+m,A+S).normalize();else if(e===Rs)r[5].setComponents(c,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(t){Mr.center.set(0,0,0);let e=Dm.distanceTo(t.center);return Mr.radius=.7071067811865476+e,Mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(ko.x=r.normal.x>0?t.max.x:t.min.x,ko.y=r.normal.y>0?t.max.y:t.min.y,ko.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Os=class extends nn{constructor(t=[],e=Qi,i,r,s,o,a,c,l,u){super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var pi=class extends nn{constructor(t,e,i=zn,r,s,o,a=Ue,c=Ue,l,u=Zn,f=1){if(u!==Zn&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ha=class extends pi{constructor(t,e=zn,i=Qi,r,s,o=Ue,a=Ue,c,l=Zn){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,r,s,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Bs=class extends nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},es=class n extends je{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,p=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(f,2));function g(v,m,d,M,w,S,A,T,P,x,E){let I=S/P,C=A/x,D=S/2,H=A/2,$=T/2,U=P+1,k=x+1,G=0,j=0,Q=new O;for(let lt=0;lt<k;lt++){let xt=lt*C-H;for(let bt=0;bt<U;bt++){let Ht=bt*I-D;Q[v]=Ht*M,Q[m]=xt*w,Q[d]=$,l.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[d]=T>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(bt/P),f.push(1-lt/x),G+=1}}for(let lt=0;lt<x;lt++)for(let xt=0;xt<P;xt++){let bt=h+xt+U*lt,Ht=h+xt+U*(lt+1),Zt=h+(xt+1)+U*(lt+1),Dt=h+(xt+1)+U*lt;c.push(bt,Ht,Dt),c.push(Ht,Zt,Dt),j+=6}a.addGroup(p,j,E),p+=j,h+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var zs=class n extends je{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],f=[],h=[],p=[],g=0,v=[],m=i/2,d=0;M(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new we(f,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(p,2));function M(){let S=new O,A=new O,T=0,P=(e-t)/i;for(let x=0;x<=s;x++){let E=[],I=x/s,C=I*(e-t)+t;for(let D=0;D<=r;D++){let H=D/r,$=H*c+a,U=Math.sin($),k=Math.cos($);A.x=C*U,A.y=-I*i+m,A.z=C*k,f.push(A.x,A.y,A.z),S.set(U,P,k).normalize(),h.push(S.x,S.y,S.z),p.push(H,1-I),E.push(g++)}v.push(E)}for(let x=0;x<r;x++)for(let E=0;E<s;E++){let I=v[E][x],C=v[E+1][x],D=v[E+1][x+1],H=v[E][x+1];(t>0||E!==0)&&(u.push(I,C,H),T+=3),(e>0||E!==s-1)&&(u.push(C,D,H),T+=3)}l.addGroup(d,T,0),d+=T}function w(S){let A=g,T=new Xt,P=new O,x=0,E=S===!0?t:e,I=S===!0?1:-1;for(let D=1;D<=r;D++)f.push(0,m*I,0),h.push(0,I,0),p.push(.5,.5),g++;let C=g;for(let D=0;D<=r;D++){let $=D/r*c+a,U=Math.cos($),k=Math.sin($);P.x=E*k,P.y=m*I,P.z=E*U,f.push(P.x,P.y,P.z),h.push(0,I,0),T.x=U*.5+.5,T.y=k*.5*I+.5,p.push(T.x,T.y),g++}for(let D=0;D<r;D++){let H=A+D,$=C+D;S===!0?u.push($,$+1,H):u.push($+1,$,H),x+=3}l.addGroup(d,x,S===!0?1:2),d+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var mi=class n extends je{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=t/a,h=e/c,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){let M=d*h-o;for(let w=0;w<l;w++){let S=w*f-s;g.push(S,-M,0),v.push(0,0,1),m.push(w/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<a;M++){let w=M+l*d,S=M+l*(d+1),A=M+1+l*(d+1),T=M+1+l*d;p.push(w,S,T),p.push(S,A,T)}this.setIndex(p),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(v,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var ks=class n extends je{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],f=new O,h=new O,p=[],g=[],v=[],m=[];for(let d=0;d<=i;d++){let M=[],w=d/i,S=0;d===0&&o===0?S=.5/e:d===i&&c===Math.PI&&(S=-.5/e);for(let A=0;A<=e;A++){let T=A/e;f.x=-t*Math.cos(r+T*s)*Math.sin(o+w*a),f.y=t*Math.cos(o+w*a),f.z=t*Math.sin(r+T*s)*Math.sin(o+w*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(T+S,1-w),M.push(l++)}u.push(M)}for(let d=0;d<i;d++)for(let M=0;M<e;M++){let w=u[d][M+1],S=u[d][M],A=u[d+1][M],T=u[d+1][M+1];(d!==0||o>0)&&p.push(w,S,T),(d!==i-1||c<Math.PI)&&p.push(S,A,T)}this.setIndex(p),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(v,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Vs=class n extends je{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);let c=[],l=[],u=[],f=[],h=new O,p=new O,g=new O;for(let v=0;v<=i;v++){let m=o+v/i*a;for(let d=0;d<=r;d++){let M=d/r*s;p.x=(t+e*Math.cos(m))*Math.cos(M),p.y=(t+e*Math.cos(m))*Math.sin(M),p.z=e*Math.sin(m),l.push(p.x,p.y,p.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),g.subVectors(p,h).normalize(),u.push(g.x,g.y,g.z),f.push(d/r),f.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=r;m++){let d=(r+1)*v+m-1,M=(r+1)*(v-1)+m-1,w=(r+1)*(v-1)+m,S=(r+1)*v+m;c.push(d,M,S),c.push(M,w,S)}this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function Pr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];if(au(r))r.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(au(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][i]=s}else t[e][i]=r.slice();else t[e][i]=r}}return t}function qe(n){let t={};for(let e=0;e<n.length;e++){let i=Pr(n[e]);for(let r in i)t[r]=i[r]}return t}function au(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Nm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function f0(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ot.workingColorSpace}var qu={clone:Pr,merge:qe},Um=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Ar{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Um,this.fragmentShader=Fm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=Nm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ns=class extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ua=class extends Ar{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fa=class extends Ar{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Vo(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}var Ji=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],s=e[i-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=i+2;;){if(r===void 0){if(t<s)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=e[++i],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=e[--i-1],t>=s)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(r=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},da=class extends Ji{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ol,endingEnd:Ol}}intervalChanged_(t,e,i){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bl:s=t,a=2*e-i;break;case zl:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Bl:o=t,c=2*i-e;break;case zl:o=1,c=i+r[1]-r[0];break;default:o=t-1,c=e}let l=(i-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-e)/(r-e),v=g*g,m=v*g,d=-h*m+2*h*v-h*g,M=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,w=(-1-p)*m+(1.5+p)*v+.5*g,S=p*m-p*v;for(let A=0;A!==a;++A)s[A]=d*o[u+A]+M*o[l+A]+w*o[c+A]+S*o[f+A];return s}},pa=class extends Ji{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(i-e)/(r-e),f=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*f+o[c+h]*u;return s}},ma=class extends Ji{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},ga=class extends Ji{interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.settings||this.DefaultSettings_,f=u.inTangents,h=u.outTangents;if(!f||!h){let v=(i-e)/(r-e),m=1-v;for(let d=0;d!==a;++d)s[d]=o[l+d]*m+o[c+d]*v;return s}let p=a*2,g=t-1;for(let v=0;v!==a;++v){let m=o[l+v],d=o[c+v],M=g*p+v*2,w=h[M],S=h[M+1],A=t*p+v*2,T=f[A],P=f[A+1],x=(i-e)/(r-e),E,I,C,D,H;for(let $=0;$<8;$++){E=x*x,I=E*x,C=1-x,D=C*C,H=D*C;let k=H*e+3*D*x*w+3*C*E*T+I*r-i;if(Math.abs(k)<1e-10)break;let G=3*D*(w-e)+6*C*x*(T-w)+3*E*(r-T);if(Math.abs(G)<1e-10)break;x=x-k/G,x=Math.max(0,Math.min(1,x))}s[v]=H*m+3*D*x*S+3*C*E*P+I*d}return s}},mn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vo(e,this.TimeBufferType),this.values=Vo(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Vo(t.times,Array),values:Vo(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ga(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case Es:e=this.InterpolantFactoryMethodDiscrete;break;case na:e=this.InterpolantFactoryMethodLinear;break;case $o:e=this.InterpolantFactoryMethodSmooth;break;case Fl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return wt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return $o;case this.InterpolantFactoryMethodBezier:return Fl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t}return this}trim(t,e){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Et("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Et("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Et("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Et("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&pm(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){Et("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===$o,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(r)c=!0;else{let f=a*i,h=f-i,p=f+i;for(let g=0;g!==i;++g){let v=e[f+g];if(v!==e[h+g]||v!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*i,h=o*i;for(let p=0;p!==i;++p)e[h+p]=e[f+p]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=na;var Ki=class extends mn{constructor(t,e,i){super(t,e,i)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Es;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends mn{constructor(t,e,i,r){super(t,e,i,r)}};_a.prototype.ValueTypeName="color";var xa=class extends mn{constructor(t,e,i,r){super(t,e,i,r)}};xa.prototype.ValueTypeName="number";var va=class extends Ji{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(r-e),l=t*a;for(let u=l+a;l!==u;l+=4)Kn.slerpFlat(s,0,o,l-a,o,l,c);return s}},Gs=class extends mn{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new va(this.times,this.values,this.getValueSize(),t)}};Gs.prototype.ValueTypeName="quaternion";Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends mn{constructor(t,e,i){super(t,e,i)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Es;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends mn{constructor(t,e,i,r){super(t,e,i,r)}};ya.prototype.ValueTypeName="vector";var Ma=class{constructor(t,e,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let p=l[f],g=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yu=new Ma,ba=class{constructor(t){this.manager=t!==void 0?t:Yu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ba.DEFAULT_MATERIAL_NAME="__DEFAULT";var Go=new O,Ho=new Kn,Xn=new O,Hs=class extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Go,Ho,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Ho,Xn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Go,Ho,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Ho,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wi=new O,cu=new Xt,lu=new Xt,$e=class extends Hs{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,cu,lu),e.subVectors(lu,cu)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dl*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Cr=class extends Hs{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Yr=-90,Zr=1,Sa=class extends An{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new $e(Yr,Zr,t,e);r.layers=this.layers,this.add(r);let s=new $e(Yr,Zr,t,e);s.layers=this.layers,this.add(s);let o=new $e(Yr,Zr,t,e);o.layers=this.layers,this.add(o);let a=new $e(Yr,Zr,t,e);a.layers=this.layers,this.add(a);let c=new $e(Yr,Zr,t,e);c.layers=this.layers,this.add(c);let l=new $e(Yr,Zr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Rs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},wa=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var d0="\\[\\]\\.:\\/",Om=new RegExp("["+d0+"]","g"),p0="[^"+d0+"]",Bm="[^"+d0.replace("\\.","")+"]",zm=/((?:WC+[\/:])*)/.source.replace("WC",p0),km=/(WCOD+)?/.source.replace("WCOD",Bm),Vm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",p0),Gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",p0),Hm=new RegExp("^"+zm+km+Vm+Gm+"$"),$m=["material","materials","bones","map"],Gl=class{constructor(t,e,i){let r=i||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},se=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Om,"")}static parseTrackName(t){let e=Hm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);$m.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[r];if(o===void 0){let l=e.nodeName;Et("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=Gl;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Q3=new Float32Array(1);var Hl=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=r,this}};function m0(n,t,e,i){let r=Wm(i);switch(e){case a0:return n*t;case l0:return n*t/r.components*r.byteLength;case Ia:return n*t/r.components*r.byteLength;case nr:return n*t*2/r.components*r.byteLength;case La:return n*t*2/r.components*r.byteLength;case c0:return n*t*3/r.components*r.byteLength;case Cn:return n*t*4/r.components*r.byteLength;case Da:return n*t*4/r.components*r.byteLength;case qs:case Ys:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Zs:case Js:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ua:case Oa:return Math.max(n,16)*Math.max(t,8)/4;case Na:case Fa:return Math.max(n,8)*Math.max(t,8)/2;case Ba:case za:case Va:case Ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ka:case Ks:case Ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case qa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Za:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ja:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case rc:case sc:case oc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ac:case cc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case js:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wm(n){switch(n){case _n:case i0:return{byteLength:1,components:1};case rs:case r0:case xn:return{byteLength:2,components:1};case Ra:case Pa:return{byteLength:2,components:4};case zn:case Ca:case kn:return{byteLength:4,components:1};case s0:case o0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function xf(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function qm(n){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,f=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let u=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){let g=f[h],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){let v=f[p];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Ym=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zm=`#ifdef USE_ALPHAHASH
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
#endif`,Jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t1=`#ifdef USE_AOMAP
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
#endif`,e1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n1=`#ifdef USE_BATCHING
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
#endif`,i1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a1=`#ifdef USE_IRIDESCENCE
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
#endif`,c1=`#ifdef USE_BUMPMAP
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
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_1=`#define PI 3.141592653589793
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
} // validated`,x1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v1=`vec3 transformedNormal = objectNormal;
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
#endif`,y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w1="gl_FragColor = linearToOutputTexel( gl_FragColor );",T1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E1=`#ifdef USE_ENVMAP
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
#endif`,A1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
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
#endif`,R1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P1=`#ifdef USE_ENVMAP
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
#endif`,I1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U1=`#ifdef USE_GRADIENTMAP
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
}`,F1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,k1=`#ifdef USE_ENVMAP
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
#endif`,V1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W1=`PhysicalMaterial material;
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
#endif`,X1=`uniform sampler2D dfgLUT;
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
}`,q1=`
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
#endif`,Y1=`#if defined( RE_IndirectDiffuse )
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
#endif`,Z1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,K1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rg=`#if defined( USE_POINTS_UV )
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
#endif`,sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`#ifdef USE_MORPHTARGETS
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
#endif`,ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_g=`#ifdef USE_NORMALMAP
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
#endif`,xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dg=`float getShadowMask() {
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
}`,Ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ug=`#ifdef USE_SKINNING
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
#endif`,Fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Og=`#ifdef USE_SKINNING
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
#endif`,Bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#ifdef USE_TRANSMISSION
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zg=`uniform sampler2D t2D;
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`#include <common>
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
}`,e_=`#if DEPTH_PACKING == 3200
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
}`,n_=`#define DISTANCE
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
}`,i_=`#define DISTANCE
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
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`uniform float scale;
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
}`,a_=`uniform vec3 diffuse;
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
}`,c_=`#include <common>
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
}`,l_=`uniform vec3 diffuse;
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
}`,h_=`#define LAMBERT
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
}`,u_=`#define LAMBERT
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
}`,f_=`#define MATCAP
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
}`,d_=`#define MATCAP
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
}`,p_=`#define NORMAL
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
}`,m_=`#define NORMAL
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
}`,g_=`#define PHONG
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
}`,__=`#define PHONG
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
}`,x_=`#define STANDARD
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
}`,v_=`#define STANDARD
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
}`,y_=`#define TOON
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
}`,M_=`#define TOON
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
}`,b_=`uniform float size;
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
}`,S_=`uniform vec3 diffuse;
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
}`,w_=`#include <common>
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
}`,T_=`uniform vec3 color;
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
}`,E_=`uniform float rotation;
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
}`,A_=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Ym,alphahash_pars_fragment:Zm,alphamap_fragment:Jm,alphamap_pars_fragment:Km,alphatest_fragment:jm,alphatest_pars_fragment:Qm,aomap_fragment:t1,aomap_pars_fragment:e1,batching_pars_vertex:n1,batching_vertex:i1,begin_vertex:r1,beginnormal_vertex:s1,bsdfs:o1,iridescence_fragment:a1,bumpmap_pars_fragment:c1,clipping_planes_fragment:l1,clipping_planes_pars_fragment:h1,clipping_planes_pars_vertex:u1,clipping_planes_vertex:f1,color_fragment:d1,color_pars_fragment:p1,color_pars_vertex:m1,color_vertex:g1,common:_1,cube_uv_reflection_fragment:x1,defaultnormal_vertex:v1,displacementmap_pars_vertex:y1,displacementmap_vertex:M1,emissivemap_fragment:b1,emissivemap_pars_fragment:S1,colorspace_fragment:w1,colorspace_pars_fragment:T1,envmap_fragment:E1,envmap_common_pars_fragment:A1,envmap_pars_fragment:C1,envmap_pars_vertex:R1,envmap_physical_pars_fragment:k1,envmap_vertex:P1,fog_vertex:I1,fog_pars_vertex:L1,fog_fragment:D1,fog_pars_fragment:N1,gradientmap_pars_fragment:U1,lightmap_pars_fragment:F1,lights_lambert_fragment:O1,lights_lambert_pars_fragment:B1,lights_pars_begin:z1,lights_toon_fragment:V1,lights_toon_pars_fragment:G1,lights_phong_fragment:H1,lights_phong_pars_fragment:$1,lights_physical_fragment:W1,lights_physical_pars_fragment:X1,lights_fragment_begin:q1,lights_fragment_maps:Y1,lights_fragment_end:Z1,lightprobes_pars_fragment:J1,logdepthbuf_fragment:K1,logdepthbuf_pars_fragment:j1,logdepthbuf_pars_vertex:Q1,logdepthbuf_vertex:tg,map_fragment:eg,map_pars_fragment:ng,map_particle_fragment:ig,map_particle_pars_fragment:rg,metalnessmap_fragment:sg,metalnessmap_pars_fragment:og,morphinstance_vertex:ag,morphcolor_vertex:cg,morphnormal_vertex:lg,morphtarget_pars_vertex:hg,morphtarget_vertex:ug,normal_fragment_begin:fg,normal_fragment_maps:dg,normal_pars_fragment:pg,normal_pars_vertex:mg,normal_vertex:gg,normalmap_pars_fragment:_g,clearcoat_normal_fragment_begin:xg,clearcoat_normal_fragment_maps:vg,clearcoat_pars_fragment:yg,iridescence_pars_fragment:Mg,opaque_fragment:bg,packing:Sg,premultiplied_alpha_fragment:wg,project_vertex:Tg,dithering_fragment:Eg,dithering_pars_fragment:Ag,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Pg,shadowmap_pars_vertex:Ig,shadowmap_vertex:Lg,shadowmask_pars_fragment:Dg,skinbase_vertex:Ng,skinning_pars_vertex:Ug,skinning_vertex:Fg,skinnormal_vertex:Og,specularmap_fragment:Bg,specularmap_pars_fragment:zg,tonemapping_fragment:kg,tonemapping_pars_fragment:Vg,transmission_fragment:Gg,transmission_pars_fragment:Hg,uv_pars_fragment:$g,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:qg,background_vert:Yg,background_frag:Zg,backgroundCube_vert:Jg,backgroundCube_frag:Kg,cube_vert:jg,cube_frag:Qg,depth_vert:t_,depth_frag:e_,distance_vert:n_,distance_frag:i_,equirect_vert:r_,equirect_frag:s_,linedashed_vert:o_,linedashed_frag:a_,meshbasic_vert:c_,meshbasic_frag:l_,meshlambert_vert:h_,meshlambert_frag:u_,meshmatcap_vert:f_,meshmatcap_frag:d_,meshnormal_vert:p_,meshnormal_frag:m_,meshphong_vert:g_,meshphong_frag:__,meshphysical_vert:x_,meshphysical_frag:v_,meshtoon_vert:y_,meshtoon_frag:M_,points_vert:b_,points_frag:S_,shadow_vert:w_,shadow_frag:T_,sprite_vert:E_,sprite_frag:A_},ct={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},ei={basic:{uniforms:qe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:qe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:qe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:qe([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:qe([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new qt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:qe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:qe([ct.points,ct.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:qe([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:qe([ct.common,ct.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:qe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:qe([ct.sprite,ct.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distance:{uniforms:qe([ct.common,ct.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distance_vert,fragmentShader:Ut.distance_frag},shadow:{uniforms:qe([ct.lights,ct.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};ei.physical={uniforms:qe([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var fc={r:0,b:0,g:0},C_=new Ee,vf=new Rt;vf.set(-1,0,0,0,1,0,0,0,1);function R_(n,t,e,i,r,s){let o=new qt(0),a=r===!0?0:1,c,l,u=null,f=0,h=null;function p(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let S=M.backgroundBlurriness>0;w=t.get(w,S)}return w}function g(M){let w=!1,S=p(M);S===null?m(o,a):S&&S.isColor&&(m(S,1),w=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(M,w){let S=p(w);S&&(S.isCubeTexture||S.mapping===Ws)?(l===void 0&&(l=new ve(new es(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Pr(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(C_.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(vf),l.material.toneMapped=Ot.getTransfer(S.colorSpace)!==Yt,(u!==S||f!==S.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ve(new mi(2,2),new Xe({name:"BackgroundMaterial",uniforms:Pr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Ot.getTransfer(S.colorSpace)!==Yt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,w){M.getRGB(fc,f0(n)),e.buffers.color.setClear(fc.r,fc.g,fc.b,w,s)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:v,dispose:d}}function P_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,o=!1;function a(C,D,H,$,U){let k=!1,G=f(C,$,H,D);s!==G&&(s=G,l(s.object)),k=p(C,$,H,U),k&&g(C,$,H,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,S(C,D,H,$),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function f(C,D,H,$){let U=$.wireframe===!0,k=i[D.id];k===void 0&&(k={},i[D.id]=k);let G=C.isInstancedMesh===!0?C.id:0,j=k[G];j===void 0&&(j={},k[G]=j);let Q=j[H.id];Q===void 0&&(Q={},j[H.id]=Q);let lt=Q[U];return lt===void 0&&(lt=h(c()),Q[U]=lt),lt}function h(C){let D=[],H=[],$=[];for(let U=0;U<e;U++)D[U]=0,H[U]=0,$[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:$,object:C,attributes:{},index:null}}function p(C,D,H,$){let U=s.attributes,k=D.attributes,G=0,j=H.getAttributes();for(let Q in j)if(j[Q].location>=0){let xt=U[Q],bt=k[Q];if(bt===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(bt=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(bt=C.instanceColor)),xt===void 0||xt.attribute!==bt||bt&&xt.data!==bt.data)return!0;G++}return s.attributesNum!==G||s.index!==$}function g(C,D,H,$){let U={},k=D.attributes,G=0,j=H.getAttributes();for(let Q in j)if(j[Q].location>=0){let xt=k[Q];xt===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor));let bt={};bt.attribute=xt,xt&&xt.data&&(bt.data=xt.data),U[Q]=bt,G++}s.attributes=U,s.attributesNum=G,s.index=$}function v(){let C=s.newAttributes;for(let D=0,H=C.length;D<H;D++)C[D]=0}function m(C){d(C,0)}function d(C,D){let H=s.newAttributes,$=s.enabledAttributes,U=s.attributeDivisors;H[C]=1,$[C]===0&&(n.enableVertexAttribArray(C),$[C]=1),U[C]!==D&&(n.vertexAttribDivisor(C,D),U[C]=D)}function M(){let C=s.newAttributes,D=s.enabledAttributes;for(let H=0,$=D.length;H<$;H++)D[H]!==C[H]&&(n.disableVertexAttribArray(H),D[H]=0)}function w(C,D,H,$,U,k,G){G===!0?n.vertexAttribIPointer(C,D,H,U,k):n.vertexAttribPointer(C,D,H,$,U,k)}function S(C,D,H,$){v();let U=$.attributes,k=H.getAttributes(),G=D.defaultAttributeValues;for(let j in k){let Q=k[j];if(Q.location>=0){let lt=U[j];if(lt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(lt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(lt=C.instanceColor)),lt!==void 0){let xt=lt.normalized,bt=lt.itemSize,Ht=t.get(lt);if(Ht===void 0)continue;let Zt=Ht.buffer,Dt=Ht.type,Z=Ht.bytesPerElement,ft=Dt===n.INT||Dt===n.UNSIGNED_INT||lt.gpuType===Ca;if(lt.isInterleavedBufferAttribute){let it=lt.data,Tt=it.stride,Pt=lt.offset;if(it.isInstancedInterleavedBuffer){for(let At=0;At<Q.locationSize;At++)d(Q.location+At,it.meshPerAttribute);C.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let At=0;At<Q.locationSize;At++)m(Q.location+At);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let At=0;At<Q.locationSize;At++)w(Q.location+At,bt/Q.locationSize,Dt,xt,Tt*Z,(Pt+bt/Q.locationSize*At)*Z,ft)}else{if(lt.isInstancedBufferAttribute){for(let it=0;it<Q.locationSize;it++)d(Q.location+it,lt.meshPerAttribute);C.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let it=0;it<Q.locationSize;it++)m(Q.location+it);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let it=0;it<Q.locationSize;it++)w(Q.location+it,bt/Q.locationSize,Dt,xt,bt*Z,bt/Q.locationSize*it*Z,ft)}}else if(G!==void 0){let xt=G[j];if(xt!==void 0)switch(xt.length){case 2:n.vertexAttrib2fv(Q.location,xt);break;case 3:n.vertexAttrib3fv(Q.location,xt);break;case 4:n.vertexAttrib4fv(Q.location,xt);break;default:n.vertexAttrib1fv(Q.location,xt)}}}}M()}function A(){E();for(let C in i){let D=i[C];for(let H in D){let $=D[H];for(let U in $){let k=$[U];for(let G in k)u(k[G].object),delete k[G];delete $[U]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;let D=i[C.id];for(let H in D){let $=D[H];for(let U in $){let k=$[U];for(let G in k)u(k[G].object),delete k[G];delete $[U]}}delete i[C.id]}function P(C){for(let D in i){let H=i[D];for(let $ in H){let U=H[$];if(U[C.id]===void 0)continue;let k=U[C.id];for(let G in k)u(k[G].object),delete k[G];delete U[C.id]}}}function x(C){for(let D in i){let H=i[D],$=C.isInstancedMesh===!0?C.id:0,U=H[$];if(U!==void 0){for(let k in U){let G=U[k];for(let j in G)u(G[j].object),delete G[j];delete U[k]}delete H[$],Object.keys(H).length===0&&delete i[D]}}}function E(){I(),o=!0,s!==r&&(s=r,l(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function I_(n,t,e){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let p=0;p<u;p++)h+=l[p];e.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function L_(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Cn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let x=P===xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==_n&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==kn&&!x)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(wt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:S,maxSamples:A,samples:T}}function D_(n){let t=this,e=null,i=0,r=!1,s=!1,o=new qn,a=new Rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let M=s?0:i,w=M*4,S=d.clippingState||null;c.value=S,S=u(g,h,w,p);for(let A=0;A!==w;++A)S[A]=e[A];d.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,p,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let d=p+v*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,S=p;w!==v;++w,S+=4)o.copy(f[w]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var ir=4,Zu=[.125,.215,.35,.446,.526,.582],Ir=20,N_=256,eo=new Cr,Ju=new qt,g0=null,_0=0,x0=0,v0=!1,U_=new O,pc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){let{size:o=256,position:a=U_}=s;g0=this._renderer.getRenderTarget(),_0=this._renderer.getActiveCubeFace(),x0=this._renderer.getActiveMipmapLevel(),v0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(g0,_0,x0),this._renderer.xr.enabled=v0,t.scissorTest=!1,os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===Rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),g0=this._renderer.getRenderTarget(),_0=this._renderer.getActiveCubeFace(),x0=this._renderer.getActiveMipmapLevel(),v0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ae,minFilter:Ae,generateMipmaps:!1,type:xn,format:Cn,colorSpace:As,depthBuffer:!1},r=Ku(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ku(t,e,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=F_(s)),this._blurMaterial=B_(s,t,e),this._ggxMaterial=O_(s,t,e)}return r}_compileMaterial(t){let e=new ve(new je,t);this._renderer.compile(e,eo)}_sceneToCubeUV(t,e,i,r,s){let c=new $e(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Ju),f.toneMapping=gn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new es,new Us({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,d=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,d=!0):(m.color.copy(Ju),d=!0);for(let w=0;w<6;w++){let S=w%3;S===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[w],s.y,s.z)):S===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[w]));let A=this._cubeSize;os(r,S*A,w>2?A:0,A,A),f.setRenderTarget(r),d&&f.render(v,c),f.render(t,c)}f.toneMapping=p,f.autoClear=h,t.background=M}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===Qi||t.mapping===Rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ju());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;os(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,eo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=0+l*1.25,p=f*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-ir?i-g+ir:0),d=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=g-e,os(s,m,d,3*v,2*v),r.setRenderTarget(s),r.render(a,eo),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,os(t,m,d,3*v,2*v),r.setRenderTarget(t),r.render(a,eo)}_blur(t,e,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");let u=3,f=this._lodMeshes[r];f.material=l;let h=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ir-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Ir;m>Ir&&wt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ir}`);let d=[],M=0;for(let P=0;P<Ir;++P){let x=P/v,E=Math.exp(-x*x/2);d.push(E),P===0?M+=E:P<m&&(M+=2*E)}for(let P=0;P<d.length;P++)d[P]=d[P]/M;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-i;let S=this._sizeLods[r],A=3*S*(r>w-ir?r-w+ir:0),T=4*(this._cubeSize-S);os(e,A,T,3*S,2*S),c.setRenderTarget(e),c.render(f,eo)}};function F_(n){let t=[],e=[],i=[],r=n,s=n-ir+1+Zu.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-ir?c=Zu[o-n+ir-1]:o===0&&(c=0),e.push(c);let l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,d=1,M=new Float32Array(v*g*p),w=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let T=0;T<p;T++){let P=T%3*2/3-1,x=T>2?0:-1,E=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];M.set(E,v*g*T),w.set(h,m*g*T);let I=[T,T,T,T,T,T];S.set(I,d*g*T)}let A=new je;A.setAttribute("position",new pn(M,v)),A.setAttribute("uv",new pn(w,m)),A.setAttribute("faceIndex",new pn(S,d)),i.push(new ve(A,null)),r>ir&&r--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Ku(n,t,e){let i=new We(n,t,e);return i.texture.mapping=Ws,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function os(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function O_(n,t,e){return new Xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:N_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function B_(n,t,e){let i=new Float32Array(Ir),r=new O(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ju(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Qu(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}var mc=class extends We{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Os(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new es(5,5,5),s=new Xe({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:Qn});s.uniforms.tEquirect.value=e;let o=new ve(r,s),a=e.minFilter;return e.minFilter===tr&&(e.minFilter=Ae),new Sa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}};function z_(n){let t=new WeakMap,e=new WeakMap,i=null;function r(h,p=!1){return h==null?null:p?o(h):s(h)}function s(h){if(h&&h.isTexture){let p=h.mapping;if(p===Ta||p===Ea)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let v=new mc(g.height);return v.fromEquirectangularTexture(n,h),t.set(h,v),h.addEventListener("dispose",l),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let p=h.mapping,g=p===Ta||p===Ea,v=p===Qi||p===Rr;if(g||v){let m=e.get(h),d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new pc(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let M=h.image;return g&&M&&M.height>0||v&&M&&c(M)?(i===null&&(i=new pc(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===Ta?h.mapping=Qi:p===Ea&&(h.mapping=Rr),h}function c(h){let p=0,g=6;for(let v=0;v<g;v++)h[v]!==void 0&&p++;return p===g}function l(h){let p=h.target;p.removeEventListener("dispose",l);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function k_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&ia("WebGLRenderer: "+i+" extension not supported."),r}}}function V_(n,t,e,i){let r={},s=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];let p=s.get(h);p&&(t.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let p in h)t.update(h[p],n.ARRAY_BUFFER)}function l(f){let h=[],p=f.index,g=f.attributes.position,v=0;if(g===void 0)return;if(p!==null){let M=p.array;v=p.version;for(let w=0,S=M.length;w<S;w+=3){let A=M[w+0],T=M[w+1],P=M[w+2];h.push(A,T,T,P,P,A)}}else{let M=g.array;v=g.version;for(let w=0,S=M.length/3-1;w<S;w+=3){let A=w+0,T=w+1,P=w+2;h.push(A,T,T,P,P,A)}}let m=new(g.count>=65535?Ns:Ds)(h,1);m.version=v;let d=s.get(f);d&&t.remove(d),s.set(f,m)}function u(f){let h=s.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function G_(n,t,e){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,s,f*o),e.update(h,i,1)}function l(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,f*o,p),e.update(h,i,p))}function u(f,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,p);let v=0;for(let m=0;m<p;m++)v+=h[m];e.update(v,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function H_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:Et("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function $_(n,t,e){let i=new WeakMap,r=new xe;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==f){let E=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;p===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let S=a.attributes.position.count*w,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let T=new Float32Array(S*A*4*f),P=new Is(T,S,A,f);P.type=kn,P.needsUpdate=!0;let x=w*4;for(let I=0;I<f;I++){let C=m[I],D=d[I],H=M[I],$=S*A*4*I;for(let U=0;U<C.count;U++){let k=U*x;p===!0&&(r.fromBufferAttribute(C,U),T[$+k+0]=r.x,T[$+k+1]=r.y,T[$+k+2]=r.z,T[$+k+3]=0),g===!0&&(r.fromBufferAttribute(D,U),T[$+k+4]=r.x,T[$+k+5]=r.y,T[$+k+6]=r.z,T[$+k+7]=0),v===!0&&(r.fromBufferAttribute(H,U),T[$+k+8]=r.x,T[$+k+9]=r.y,T[$+k+10]=r.z,T[$+k+11]=H.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new Xt(S,A)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function W_(n,t,e,i,r){let s=new WeakMap;function o(l){let u=r.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function a(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var X_={[Zl]:"LINEAR_TONE_MAPPING",[Jl]:"REINHARD_TONE_MAPPING",[Kl]:"CINEON_TONE_MAPPING",[jl]:"ACES_FILMIC_TONE_MAPPING",[t0]:"AGX_TONE_MAPPING",[e0]:"NEUTRAL_TONE_MAPPING",[Ql]:"CUSTOM_TONE_MAPPING"};function q_(n,t,e,i,r){let s=new We(t,e,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new pi(t,e):void 0}),o=new We(t,e,{type:xn,depthBuffer:!1,stencilBuffer:!1}),a=new je;a.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new we([0,2,0,0,2,0],2));let c=new ns({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new ve(a,c),u=new Cr(-1,1,1,-1,0,1),f=null,h=null,p=!1,g,v=null,m=[],d=!1;this.setSize=function(M,w){s.setSize(M,w),o.setSize(M,w);for(let S=0;S<m.length;S++){let A=m[S];A.setSize&&A.setSize(M,w)}},this.setEffects=function(M){m=M,d=m.length>0&&m[0].isRenderPass===!0;let w=s.width,S=s.height;for(let A=0;A<m.length;A++){let T=m[A];T.setSize&&T.setSize(w,S)}},this.begin=function(M,w){if(p||M.toneMapping===gn&&m.length===0)return!1;if(v=w,w!==null){let S=w.width,A=w.height;(s.width!==S||s.height!==A)&&this.setSize(S,A)}return d===!1&&M.setRenderTarget(s),g=M.toneMapping,M.toneMapping=gn,!0},this.hasRenderPass=function(){return d},this.end=function(M,w){M.toneMapping=g,p=!0;let S=s,A=o;for(let T=0;T<m.length;T++){let P=m[T];if(P.enabled!==!1&&(P.render(M,A,S,w),P.needsSwap!==!1)){let x=S;S=A,A=x}}if(f!==M.outputColorSpace||h!==M.toneMapping){f=M.outputColorSpace,h=M.toneMapping,c.defines={},Ot.getTransfer(f)===Yt&&(c.defines.SRGB_TRANSFER="");let T=X_[h];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(v),M.render(l,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),c.dispose()}}var yf=new nn,b0=new pi(1,1),Mf=new Is,bf=new aa,Sf=new Os,tf=[],ef=[],nf=new Float32Array(16),rf=new Float32Array(9),sf=new Float32Array(4);function cs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,s=tf[r];if(s===void 0&&(s=new Float32Array(r),tf[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Ie(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Le(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function xc(n,t){let e=ef[t];e===void 0&&(e=new Int32Array(t),ef[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Y_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Z_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2fv(this.addr,t),Le(e,t)}}function J_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;n.uniform3fv(this.addr,t),Le(e,t)}}function K_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4fv(this.addr,t),Le(e,t)}}function j_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,i))return;sf.set(i),n.uniformMatrix2fv(this.addr,!1,sf),Le(e,i)}}function Q_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,i))return;rf.set(i),n.uniformMatrix3fv(this.addr,!1,rf),Le(e,i)}}function tx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,i))return;nf.set(i),n.uniformMatrix4fv(this.addr,!1,nf),Le(e,i)}}function ex(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function nx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2iv(this.addr,t),Le(e,t)}}function ix(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;n.uniform3iv(this.addr,t),Le(e,t)}}function rx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4iv(this.addr,t),Le(e,t)}}function sx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function ox(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2uiv(this.addr,t),Le(e,t)}}function ax(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;n.uniform3uiv(this.addr,t),Le(e,t)}}function cx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4uiv(this.addr,t),Le(e,t)}}function lx(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(b0.compareFunction=e.isReversedDepthBuffer()?uc:hc,s=b0):s=yf,e.setTexture2D(t||s,r)}function hx(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||bf,r)}function ux(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Sf,r)}function fx(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Mf,r)}function dx(n){switch(n){case 5126:return Y_;case 35664:return Z_;case 35665:return J_;case 35666:return K_;case 35674:return j_;case 35675:return Q_;case 35676:return tx;case 5124:case 35670:return ex;case 35667:case 35671:return nx;case 35668:case 35672:return ix;case 35669:case 35673:return rx;case 5125:return sx;case 36294:return ox;case 36295:return ax;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return fx}}function px(n,t){n.uniform1fv(this.addr,t)}function mx(n,t){let e=cs(t,this.size,2);n.uniform2fv(this.addr,e)}function gx(n,t){let e=cs(t,this.size,3);n.uniform3fv(this.addr,e)}function _x(n,t){let e=cs(t,this.size,4);n.uniform4fv(this.addr,e)}function xx(n,t){let e=cs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function vx(n,t){let e=cs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function yx(n,t){let e=cs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Mx(n,t){n.uniform1iv(this.addr,t)}function bx(n,t){n.uniform2iv(this.addr,t)}function Sx(n,t){n.uniform3iv(this.addr,t)}function wx(n,t){n.uniform4iv(this.addr,t)}function Tx(n,t){n.uniform1uiv(this.addr,t)}function Ex(n,t){n.uniform2uiv(this.addr,t)}function Ax(n,t){n.uniform3uiv(this.addr,t)}function Cx(n,t){n.uniform4uiv(this.addr,t)}function Rx(n,t,e){let i=this.cache,r=t.length,s=xc(e,r);Ie(i,s)||(n.uniform1iv(this.addr,s),Le(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=b0:o=yf;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function Px(n,t,e){let i=this.cache,r=t.length,s=xc(e,r);Ie(i,s)||(n.uniform1iv(this.addr,s),Le(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||bf,s[o])}function Ix(n,t,e){let i=this.cache,r=t.length,s=xc(e,r);Ie(i,s)||(n.uniform1iv(this.addr,s),Le(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Sf,s[o])}function Lx(n,t,e){let i=this.cache,r=t.length,s=xc(e,r);Ie(i,s)||(n.uniform1iv(this.addr,s),Le(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Mf,s[o])}function Dx(n){switch(n){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return _x;case 35674:return xx;case 35675:return vx;case 35676:return yx;case 5124:case 35670:return Mx;case 35667:case 35671:return bx;case 35668:case 35672:return Sx;case 35669:case 35673:return wx;case 5125:return Tx;case 36294:return Ex;case 36295:return Ax;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Lx}}var S0=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=dx(e.type)}},w0=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dx(e.type)}},T0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],i)}}},y0=/(\w+)(\])?(\[|\.)?/g;function of(n,t){n.seq.push(t),n.map[t.id]=t}function Nx(n,t,e){let i=n.name,r=i.length;for(y0.lastIndex=0;;){let s=y0.exec(i),o=y0.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){of(e,l===void 0?new S0(a,n,t):new w0(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new T0(a),of(e,f)),e=f}}}var as=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Nx(a,c,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){let s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&i.push(o)}return i}};function af(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Ux=37297,Fx=0;function Ox(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var cf=new Rt;function Bx(n){Ot._getMatrix(cf,Ot.workingColorSpace,n);let t=`mat3( ${cf.elements.map(e=>e.toFixed(4))} )`;switch(Ot.getTransfer(n)){case Cs:return[t,"LinearTransferOETF"];case Yt:return[t,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function lf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Ox(n.getShaderSource(t),a)}else return s}function zx(n,t){let e=Bx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var kx={[Zl]:"Linear",[Jl]:"Reinhard",[Kl]:"Cineon",[jl]:"ACESFilmic",[t0]:"AgX",[e0]:"Neutral",[Ql]:"Custom"};function Vx(n,t){let e=kx[t];return e===void 0?(wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var dc=new O;function Gx(){Ot.getLuminanceCoefficients(dc);let n=dc.x.toFixed(4),t=dc.y.toFixed(4),e=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function $x(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Wx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(t,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function io(n){return n!==""}function hf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function E0(n){return n.replace(Xx,Yx)}var qx=new Map;function Yx(n,t){let e=Ut[t];if(e===void 0){let i=qx.get(t);if(i!==void 0)e=Ut[i],wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return E0(e)}var Zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(n){return n.replace(Zx,Jx)}function Jx(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function df(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Kx={[$s]:"SHADOWMAP_TYPE_PCF",[is]:"SHADOWMAP_TYPE_VSM"};function jx(n){return Kx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qx={[Qi]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE_UV"};function t2(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Qx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var e2={[Rr]:"ENVMAP_MODE_REFRACTION"};function n2(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":e2[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var i2={[Yl]:"ENVMAP_BLENDING_MULTIPLY",[Iu]:"ENVMAP_BLENDING_MIX",[Lu]:"ENVMAP_BLENDING_ADD"};function r2(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":i2[n.combine]||"ENVMAP_BLENDING_NONE"}function s2(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function o2(n,t,e,i){let r=n.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=jx(e),l=t2(e),u=n2(e),f=r2(e),h=s2(e),p=Hx(e),g=$x(s),v=r.createProgram(),m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(io).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(io).join(`
`),d.length>0&&(d+=`
`)):(m=[df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),d=[df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gn?"#define TONE_MAPPING":"",e.toneMapping!==gn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==gn?Vx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,zx("linearToOutputTexel",e.outputColorSpace),Gx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(io).join(`
`)),o=E0(o),o=hf(o,e),o=uf(o,e),a=E0(a),a=hf(a,e),a=uf(a,e),o=ff(o),a=ff(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Qs?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let w=M+m+o,S=M+d+a,A=af(r,r.VERTEX_SHADER,w),T=af(r,r.FRAGMENT_SHADER,S);r.attachShader(v,A),r.attachShader(v,T),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(C){if(n.debug.checkShaderErrors){let D=r.getProgramInfoLog(v)||"",H=r.getShaderInfoLog(A)||"",$=r.getShaderInfoLog(T)||"",U=D.trim(),k=H.trim(),G=$.trim(),j=!0,Q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,T);else{let lt=lf(r,A,"vertex"),xt=lf(r,T,"fragment");Et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+lt+`
`+xt)}else U!==""?wt("WebGLProgram: Program Info Log:",U):(k===""||G==="")&&(Q=!1);Q&&(C.diagnostics={runnable:j,programLog:U,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:d}})}r.deleteShader(A),r.deleteShader(T),x=new as(r,v),E=Wx(r,v)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(v,Ux)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}var a2=0,A0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new C0(t),e.set(t,i)),i}},C0=class{constructor(t){this.id=a2++,this.code=t,this.usedTimes=0}};function c2(n){return n===nr||n===Ks||n===js}function l2(n,t,e,i,r,s){let o=new Ls,a=new A0,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer,h=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,E,I,C,D,H){let $=C.fog,U=D.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=t.get(x.envMap||k,G),Q=j&&j.mapping===Ws?j.image.height:null,lt=p[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&wt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let xt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,bt=xt!==void 0?xt.length:0,Ht=0;U.morphAttributes.position!==void 0&&(Ht=1),U.morphAttributes.normal!==void 0&&(Ht=2),U.morphAttributes.color!==void 0&&(Ht=3);let Zt,Dt,Z,ft;if(lt){let It=ei[lt];Zt=It.vertexShader,Dt=It.fragmentShader}else Zt=x.vertexShader,Dt=x.fragmentShader,a.update(x),Z=a.getVertexShaderID(x),ft=a.getFragmentShaderID(x);let it=n.getRenderTarget(),Tt=n.state.buffers.depth.getReversed(),Pt=D.isInstancedMesh===!0,At=D.isBatchedMesh===!0,le=!!x.map,zt=!!x.matcap,Jt=!!j,re=!!x.aoMap,Bt=!!x.lightMap,Re=!!x.bumpMap,he=!!x.normalMap,ln=!!x.displacementMap,L=!!x.emissiveMap,Pe=!!x.metalnessMap,kt=!!x.roughnessMap,ee=x.anisotropy>0,at=x.clearcoat>0,ge=x.dispersion>0,b=x.iridescence>0,_=x.sheen>0,F=x.transmission>0,q=ee&&!!x.anisotropyMap,K=at&&!!x.clearcoatMap,tt=at&&!!x.clearcoatNormalMap,ot=at&&!!x.clearcoatRoughnessMap,W=b&&!!x.iridescenceMap,Y=b&&!!x.iridescenceThicknessMap,dt=_&&!!x.sheenColorMap,gt=_&&!!x.sheenRoughnessMap,rt=!!x.specularMap,et=!!x.specularColorMap,Ct=!!x.specularIntensityMap,Nt=F&&!!x.transmissionMap,Wt=F&&!!x.thicknessMap,R=!!x.gradientMap,nt=!!x.alphaMap,X=x.alphaTest>0,pt=!!x.alphaHash,st=!!x.extensions,J=gn;x.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(J=n.toneMapping);let yt={shaderID:lt,shaderType:x.type,shaderName:x.name,vertexShader:Zt,fragmentShader:Dt,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:ft,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:At,batchingColor:At&&D._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&D.instanceColor!==null,instancingMorph:Pt&&D.morphTexture!==null,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Ot.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:le,matcap:zt,envMap:Jt,envMapMode:Jt&&j.mapping,envMapCubeUVHeight:Q,aoMap:re,lightMap:Bt,bumpMap:Re,normalMap:he,displacementMap:ln,emissiveMap:L,normalMapObjectSpace:he&&x.normalMapType===Uu,normalMapTangentSpace:he&&x.normalMapType===h0,packedNormalMap:he&&x.normalMapType===h0&&c2(x.normalMap.format),metalnessMap:Pe,roughnessMap:kt,anisotropy:ee,anisotropyMap:q,clearcoat:at,clearcoatMap:K,clearcoatNormalMap:tt,clearcoatRoughnessMap:ot,dispersion:ge,iridescence:b,iridescenceMap:W,iridescenceThicknessMap:Y,sheen:_,sheenColorMap:dt,sheenRoughnessMap:gt,specularMap:rt,specularColorMap:et,specularIntensityMap:Ct,transmission:F,transmissionMap:Nt,thicknessMap:Wt,gradientMap:R,opaque:x.transparent===!1&&x.blending===wr&&x.alphaToCoverage===!1,alphaMap:nt,alphaTest:X,alphaHash:pt,combine:x.combine,mapUv:le&&g(x.map.channel),aoMapUv:re&&g(x.aoMap.channel),lightMapUv:Bt&&g(x.lightMap.channel),bumpMapUv:Re&&g(x.bumpMap.channel),normalMapUv:he&&g(x.normalMap.channel),displacementMapUv:ln&&g(x.displacementMap.channel),emissiveMapUv:L&&g(x.emissiveMap.channel),metalnessMapUv:Pe&&g(x.metalnessMap.channel),roughnessMapUv:kt&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:K&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:tt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:gt&&g(x.sheenRoughnessMap.channel),specularMapUv:rt&&g(x.specularMap.channel),specularColorMapUv:et&&g(x.specularColorMap.channel),specularIntensityMapUv:Ct&&g(x.specularIntensityMap.channel),transmissionMapUv:Nt&&g(x.transmissionMap.channel),thicknessMapUv:Wt&&g(x.thicknessMap.channel),alphaMapUv:nt&&g(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(he||ee),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(le||nt),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&he===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Tt,skinning:D.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Ht,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:J,decodeVideoTexture:le&&x.map.isVideoTexture===!0&&Ot.getTransfer(x.map.colorSpace)===Yt,decodeVideoTextureEmissive:L&&x.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(x.emissiveMap.colorSpace)===Yt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===jn,flipSided:x.side===Qe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function m(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)E.push(I),E.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(d(E,x),M(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function d(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function w(x){let E=p[x.type],I;if(E){let C=ei[E];I=qu.clone(C.uniforms)}else I=x.uniforms;return I}function S(x,E){let I=u.get(E);return I!==void 0?++I.usedTimes:(I=new o2(n,E,x,r),l.push(I),u.set(E,I)),I}function A(x){if(--x.usedTimes===0){let E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function P(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:S,releaseProgram:A,releaseShaderCache:T,programs:l,dispose:P}}function h2(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function u2(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function pf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function mf(){let n=[],t=0,e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,g,v,m,d){let M=n[t];return M===void 0?(M={id:h.id,object:h,geometry:p,material:g,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:d},n[t]=M):(M.id=h.id,M.object=h,M.geometry=p,M.material=g,M.materialVariant=o(h),M.groupOrder=v,M.renderOrder=h.renderOrder,M.z=m,M.group=d),t++,M}function c(h,p,g,v,m,d){let M=a(h,p,g,v,m,d);g.transmission>0?i.push(M):g.transparent===!0?r.push(M):e.push(M)}function l(h,p,g,v,m,d){let M=a(h,p,g,v,m,d);g.transmission>0?i.unshift(M):g.transparent===!0?r.unshift(M):e.unshift(M)}function u(h,p){e.length>1&&e.sort(h||u2),i.length>1&&i.sort(p||pf),r.length>1&&r.sort(p||pf)}function f(){for(let h=t,p=n.length;h<p;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function f2(){let n=new WeakMap;function t(i,r){let s=n.get(i),o;return s===void 0?(o=new mf,n.set(i,[o])):r>=s.length?(o=new mf,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function d2(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new qt};break;case"SpotLight":e={position:new O,direction:new O,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function p2(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var m2=0;function g2(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function _2(n){let t=new d2,e=p2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let r=new O,s=new Ee,o=new Ee;function a(l){let u=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,M=0,w=0,S=0,A=0,T=0,P=0;l.sort(g2);for(let E=0,I=l.length;E<I;E++){let C=l[E],D=C.color,H=C.intensity,$=C.distance,U=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===nr?U=C.shadow.map.texture:U=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=D.r*H,f+=D.g*H,h+=D.b*H;else if(C.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(C.sh.coefficients[k],H);P++}else if(C.isDirectionalLight){let k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let G=C.shadow,j=e.get(C);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=U,i.directionalShadowMatrix[p]=C.shadow.matrix,M++}i.directional[p]=k,p++}else if(C.isSpotLight){let k=t.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(D).multiplyScalar(H),k.distance=$,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,i.spot[v]=k;let G=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,G.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[v]=G.matrix,C.castShadow){let j=e.get(C);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=U,S++}v++}else if(C.isRectAreaLight){let k=t.get(C);k.color.copy(D).multiplyScalar(H),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=k,m++}else if(C.isPointLight){let k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){let G=C.shadow,j=e.get(C);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=U,i.pointShadowMatrix[g]=C.shadow.matrix,w++}i.point[g]=k,g++}else if(C.isHemisphereLight){let k=t.get(C);k.skyColor.copy(C.color).multiplyScalar(H),k.groundColor.copy(C.groundColor).multiplyScalar(H),i.hemi[d]=k,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let x=i.hash;(x.directionalLength!==p||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==d||x.numDirectionalShadows!==M||x.numPointShadows!==w||x.numSpotShadows!==S||x.numSpotMaps!==A||x.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=S+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,x.directionalLength=p,x.pointLength=g,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=d,x.numDirectionalShadows=M,x.numPointShadows=w,x.numSpotShadows=S,x.numSpotMaps=A,x.numLightProbes=P,i.version=m2++)}function c(l,u){let f=0,h=0,p=0,g=0,v=0,m=u.matrixWorldInverse;for(let d=0,M=l.length;d<M;d++){let w=l[d];if(w.isDirectionalLight){let S=i.directional[f];S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(w.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(w.isRectAreaLight){let S=i.rectArea[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let S=i.point[h];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){let S=i.hemi[v];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function gf(n){let t=new _2(n),e=[],i=[],r=[];function s(h){f.camera=h,e.length=0,i.length=0,r.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function c(h){r.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function x2(n){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new gf(n),t.set(r,[a])):s>=o.length?(a=new gf(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var v2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y2=`uniform sampler2D shadow_pass;
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
}`,M2=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],b2=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],_f=new Ee,no=new O,M0=new O;function S2(n,t,e){let i=new Fs,r=new Xt,s=new Xt,o=new xe,a=new ua,c=new fa,l={},u=e.maxTextureSize,f={[di]:Qe,[Qe]:di,[jn]:jn},h=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:v2,fragmentShader:y2}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new je;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ve(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$s;let d=this.type;this.render=function(T,P,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===fu&&(wt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=$s);let E=n.getRenderTarget(),I=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Qn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let H=d!==this.type;H&&P.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(U=>U.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,U=T.length;$<U;$++){let k=T[$],G=k.shadow;if(G===void 0){wt("WebGLShadowMap:",k,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let j=G.getFrameExtents();r.multiply(j),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,G.mapSize.y=s.y));let Q=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Q,G.map===null||H===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===is){if(k.isPointLight){wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new We(r.x,r.y,{format:nr,type:xn,minFilter:Ae,magFilter:Ae,generateMipmaps:!1}),G.map.texture.name=k.name+".shadowMap",G.map.depthTexture=new pi(r.x,r.y,kn),G.map.depthTexture.name=k.name+".shadowMapDepth",G.map.depthTexture.format=Zn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ue,G.map.depthTexture.magFilter=Ue}else k.isPointLight?(G.map=new mc(r.x),G.map.depthTexture=new ha(r.x,zn)):(G.map=new We(r.x,r.y),G.map.depthTexture=new pi(r.x,r.y,zn)),G.map.depthTexture.name=k.name+".shadowMap",G.map.depthTexture.format=Zn,this.type===$s?(G.map.depthTexture.compareFunction=Q?uc:hc,G.map.depthTexture.minFilter=Ae,G.map.depthTexture.magFilter=Ae):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ue,G.map.depthTexture.magFilter=Ue);G.camera.updateProjectionMatrix()}let lt=G.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<lt;xt++){if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,xt),n.clear();else{xt===0&&(n.setRenderTarget(G.map),n.clear());let bt=G.getViewport(xt);o.set(s.x*bt.x,s.y*bt.y,s.x*bt.z,s.y*bt.w),D.viewport(o)}if(k.isPointLight){let bt=G.camera,Ht=G.matrix,Zt=k.distance||bt.far;Zt!==bt.far&&(bt.far=Zt,bt.updateProjectionMatrix()),no.setFromMatrixPosition(k.matrixWorld),bt.position.copy(no),M0.copy(bt.position),M0.add(M2[xt]),bt.up.copy(b2[xt]),bt.lookAt(M0),bt.updateMatrixWorld(),Ht.makeTranslation(-no.x,-no.y,-no.z),_f.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(_f,bt.coordinateSystem,bt.reversedDepth)}else G.updateMatrices(k);i=G.getFrustum(),S(P,x,G.camera,k,this.type)}G.isPointLightShadow!==!0&&this.type===is&&M(G,x),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(E,I,C)};function M(T,P){let x=t.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new We(r.x,r.y,{format:nr,type:xn})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(P,null,x,h,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(P,null,x,p,v,null)}function w(T,P,x,E){let I=null,C=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)I=C;else if(I=x.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let D=I.uuid,H=P.uuid,$=l[D];$===void 0&&($={},l[D]=$);let U=$[H];U===void 0&&(U=I.clone(),$[H]=U,P.addEventListener("dispose",A)),I=U}if(I.visible=P.visible,I.wireframe=P.wireframe,E===is?I.side=P.shadowSide!==null?P.shadowSide:P.side:I.side=P.shadowSide!==null?P.shadowSide:f[P.side],I.alphaMap=P.alphaMap,I.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,I.map=P.map,I.clipShadows=P.clipShadows,I.clippingPlanes=P.clippingPlanes,I.clipIntersection=P.clipIntersection,I.displacementMap=P.displacementMap,I.displacementScale=P.displacementScale,I.displacementBias=P.displacementBias,I.wireframeLinewidth=P.wireframeLinewidth,I.linewidth=P.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let D=n.properties.get(I);D.light=x}return I}function S(T,P,x,E,I){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===is)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let H=t.update(T),$=T.material;if(Array.isArray($)){let U=H.groups;for(let k=0,G=U.length;k<G;k++){let j=U[k],Q=$[j.materialIndex];if(Q&&Q.visible){let lt=w(T,Q,E,I);T.onBeforeShadow(n,T,P,x,H,lt,j),n.renderBufferDirect(x,null,H,lt,T,j),T.onAfterShadow(n,T,P,x,H,lt,j)}}}else if($.visible){let U=w(T,$,E,I);T.onBeforeShadow(n,T,P,x,H,U,null),n.renderBufferDirect(x,null,H,U,T,null),T.onAfterShadow(n,T,P,x,H,U,null)}}let D=T.children;for(let H=0,$=D.length;H<$;H++)S(D[H],P,x,E,I)}function A(T){T.target.removeEventListener("dispose",A);for(let x in l){let E=l[x],I=T.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function w2(n,t){function e(){let R=!1,nt=new xe,X=null,pt=new xe(0,0,0,0);return{setMask:function(st){X!==st&&!R&&(n.colorMask(st,st,st,st),X=st)},setLocked:function(st){R=st},setClear:function(st,J,yt,It,Me){Me===!0&&(st*=It,J*=It,yt*=It),nt.set(st,J,yt,It),pt.equals(nt)===!1&&(n.clearColor(st,J,yt,It),pt.copy(nt))},reset:function(){R=!1,X=null,pt.set(-1,0,0,0)}}}function i(){let R=!1,nt=!1,X=null,pt=null,st=null;return{setReversed:function(J){if(nt!==J){let yt=t.get("EXT_clip_control");J?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),nt=J;let It=st;st=null,this.setClear(It)}},getReversed:function(){return nt},setTest:function(J){J?it(n.DEPTH_TEST):Tt(n.DEPTH_TEST)},setMask:function(J){X!==J&&!R&&(n.depthMask(J),X=J)},setFunc:function(J){if(nt&&(J=Wu[J]),pt!==J){switch(J){case qo:n.depthFunc(n.NEVER);break;case Yo:n.depthFunc(n.ALWAYS);break;case Zo:n.depthFunc(n.LESS);break;case Tr:n.depthFunc(n.LEQUAL);break;case Jo:n.depthFunc(n.EQUAL);break;case Ko:n.depthFunc(n.GEQUAL);break;case jo:n.depthFunc(n.GREATER);break;case Qo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pt=J}},setLocked:function(J){R=J},setClear:function(J){st!==J&&(st=J,nt&&(J=1-J),n.clearDepth(J))},reset:function(){R=!1,X=null,pt=null,st=null,nt=!1}}}function r(){let R=!1,nt=null,X=null,pt=null,st=null,J=null,yt=null,It=null,Me=null;return{setTest:function(Kt){R||(Kt?it(n.STENCIL_TEST):Tt(n.STENCIL_TEST))},setMask:function(Kt){nt!==Kt&&!R&&(n.stencilMask(Kt),nt=Kt)},setFunc:function(Kt,oi,$n){(X!==Kt||pt!==oi||st!==$n)&&(n.stencilFunc(Kt,oi,$n),X=Kt,pt=oi,st=$n)},setOp:function(Kt,oi,$n){(J!==Kt||yt!==oi||It!==$n)&&(n.stencilOp(Kt,oi,$n),J=Kt,yt=oi,It=$n)},setLocked:function(Kt){R=Kt},setClear:function(Kt){Me!==Kt&&(n.clearStencil(Kt),Me=Kt)},reset:function(){R=!1,nt=null,X=null,pt=null,st=null,J=null,yt=null,It=null,Me=null}}}let s=new e,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},f={},h={},p=new WeakMap,g=[],v=null,m=!1,d=null,M=null,w=null,S=null,A=null,T=null,P=null,x=new qt(0,0,0),E=0,I=!1,C=null,D=null,H=null,$=null,U=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,j=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Q)[1]),G=j>=1):Q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),G=j>=2);let lt=null,xt={},bt=n.getParameter(n.SCISSOR_BOX),Ht=n.getParameter(n.VIEWPORT),Zt=new xe().fromArray(bt),Dt=new xe().fromArray(Ht);function Z(R,nt,X,pt){let st=new Uint8Array(4),J=n.createTexture();n.bindTexture(R,J),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let yt=0;yt<X;yt++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(nt,0,n.RGBA,1,1,pt,0,n.RGBA,n.UNSIGNED_BYTE,st):n.texImage2D(nt+yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,st);return J}let ft={};ft[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),ft[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ft[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(n.DEPTH_TEST),o.setFunc(Tr),Re(!1),he($l),it(n.CULL_FACE),re(Qn);function it(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function Tt(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function Pt(R,nt){return h[R]!==nt?(n.bindFramebuffer(R,nt),h[R]=nt,R===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=nt),R===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=nt),!0):!1}function At(R,nt){let X=g,pt=!1;if(R){X=p.get(nt),X===void 0&&(X=[],p.set(nt,X));let st=R.textures;if(X.length!==st.length||X[0]!==n.COLOR_ATTACHMENT0){for(let J=0,yt=st.length;J<yt;J++)X[J]=n.COLOR_ATTACHMENT0+J;X.length=st.length,pt=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,pt=!0);pt&&n.drawBuffers(X)}function le(R){return v!==R?(n.useProgram(R),v=R,!0):!1}let zt={[qi]:n.FUNC_ADD,[pu]:n.FUNC_SUBTRACT,[mu]:n.FUNC_REVERSE_SUBTRACT};zt[gu]=n.MIN,zt[_u]=n.MAX;let Jt={[xu]:n.ZERO,[vu]:n.ONE,[yu]:n.SRC_COLOR,[Wo]:n.SRC_ALPHA,[Eu]:n.SRC_ALPHA_SATURATE,[wu]:n.DST_COLOR,[bu]:n.DST_ALPHA,[Mu]:n.ONE_MINUS_SRC_COLOR,[Xo]:n.ONE_MINUS_SRC_ALPHA,[Tu]:n.ONE_MINUS_DST_COLOR,[Su]:n.ONE_MINUS_DST_ALPHA,[Au]:n.CONSTANT_COLOR,[Cu]:n.ONE_MINUS_CONSTANT_COLOR,[Ru]:n.CONSTANT_ALPHA,[Pu]:n.ONE_MINUS_CONSTANT_ALPHA};function re(R,nt,X,pt,st,J,yt,It,Me,Kt){if(R===Qn){m===!0&&(Tt(n.BLEND),m=!1);return}if(m===!1&&(it(n.BLEND),m=!0),R!==du){if(R!==d||Kt!==I){if((M!==qi||A!==qi)&&(n.blendEquation(n.FUNC_ADD),M=qi,A=qi),Kt)switch(R){case wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wl:n.blendFunc(n.ONE,n.ONE);break;case Xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ql:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",R);break}else switch(R){case wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xl:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ql:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",R);break}w=null,S=null,T=null,P=null,x.set(0,0,0),E=0,d=R,I=Kt}return}st=st||nt,J=J||X,yt=yt||pt,(nt!==M||st!==A)&&(n.blendEquationSeparate(zt[nt],zt[st]),M=nt,A=st),(X!==w||pt!==S||J!==T||yt!==P)&&(n.blendFuncSeparate(Jt[X],Jt[pt],Jt[J],Jt[yt]),w=X,S=pt,T=J,P=yt),(It.equals(x)===!1||Me!==E)&&(n.blendColor(It.r,It.g,It.b,Me),x.copy(It),E=Me),d=R,I=!1}function Bt(R,nt){R.side===jn?Tt(n.CULL_FACE):it(n.CULL_FACE);let X=R.side===Qe;nt&&(X=!X),Re(X),R.blending===wr&&R.transparent===!1?re(Qn):re(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),s.setMask(R.colorWrite);let pt=R.stencilWrite;a.setTest(pt),pt&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),L(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):Tt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Re(R){C!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),C=R)}function he(R){R!==hu?(it(n.CULL_FACE),R!==D&&(R===$l?n.cullFace(n.BACK):R===uu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Tt(n.CULL_FACE),D=R}function ln(R){R!==H&&(G&&n.lineWidth(R),H=R)}function L(R,nt,X){R?(it(n.POLYGON_OFFSET_FILL),($!==nt||U!==X)&&($=nt,U=X,o.getReversed()&&(nt=-nt),n.polygonOffset(nt,X))):Tt(n.POLYGON_OFFSET_FILL)}function Pe(R){R?it(n.SCISSOR_TEST):Tt(n.SCISSOR_TEST)}function kt(R){R===void 0&&(R=n.TEXTURE0+k-1),lt!==R&&(n.activeTexture(R),lt=R)}function ee(R,nt,X){X===void 0&&(lt===null?X=n.TEXTURE0+k-1:X=lt);let pt=xt[X];pt===void 0&&(pt={type:void 0,texture:void 0},xt[X]=pt),(pt.type!==R||pt.texture!==nt)&&(lt!==X&&(n.activeTexture(X),lt=X),n.bindTexture(R,nt||ft[R]),pt.type=R,pt.texture=nt)}function at(){let R=xt[lt];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ge(){try{n.compressedTexImage2D(...arguments)}catch(R){Et("WebGLState:",R)}}function b(){try{n.compressedTexImage3D(...arguments)}catch(R){Et("WebGLState:",R)}}function _(){try{n.texSubImage2D(...arguments)}catch(R){Et("WebGLState:",R)}}function F(){try{n.texSubImage3D(...arguments)}catch(R){Et("WebGLState:",R)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(R){Et("WebGLState:",R)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(R){Et("WebGLState:",R)}}function tt(){try{n.texStorage2D(...arguments)}catch(R){Et("WebGLState:",R)}}function ot(){try{n.texStorage3D(...arguments)}catch(R){Et("WebGLState:",R)}}function W(){try{n.texImage2D(...arguments)}catch(R){Et("WebGLState:",R)}}function Y(){try{n.texImage3D(...arguments)}catch(R){Et("WebGLState:",R)}}function dt(R){return f[R]!==void 0?f[R]:n.getParameter(R)}function gt(R,nt){f[R]!==nt&&(n.pixelStorei(R,nt),f[R]=nt)}function rt(R){Zt.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),Zt.copy(R))}function et(R){Dt.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),Dt.copy(R))}function Ct(R,nt){let X=l.get(nt);X===void 0&&(X=new WeakMap,l.set(nt,X));let pt=X.get(R);pt===void 0&&(pt=n.getUniformBlockIndex(nt,R.name),X.set(R,pt))}function Nt(R,nt){let pt=l.get(nt).get(R);c.get(nt)!==pt&&(n.uniformBlockBinding(nt,pt,R.__bindingPointIndex),c.set(nt,pt))}function Wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},lt=null,xt={},h={},p=new WeakMap,g=[],v=null,m=!1,d=null,M=null,w=null,S=null,A=null,T=null,P=null,x=new qt(0,0,0),E=0,I=!1,C=null,D=null,H=null,$=null,U=null,Zt.set(0,0,n.canvas.width,n.canvas.height),Dt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:it,disable:Tt,bindFramebuffer:Pt,drawBuffers:At,useProgram:le,setBlending:re,setMaterial:Bt,setFlipSided:Re,setCullFace:he,setLineWidth:ln,setPolygonOffset:L,setScissorTest:Pe,activeTexture:kt,bindTexture:ee,unbindTexture:at,compressedTexImage2D:ge,compressedTexImage3D:b,texImage2D:W,texImage3D:Y,pixelStorei:gt,getParameter:dt,updateUBOMapping:Ct,uniformBlockBinding:Nt,texStorage2D:tt,texStorage3D:ot,texSubImage2D:_,texSubImage3D:F,compressedTexSubImage2D:q,compressedTexSubImage3D:K,scissor:rt,viewport:et,reset:Wt}}function T2(n,t,e,i,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xt,u=new WeakMap,f=new Set,h,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,_){return g?new OffscreenCanvas(b,_):Ps("canvas")}function m(b,_,F){let q=1,K=ge(b);if((K.width>F||K.height>F)&&(q=F/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let tt=Math.floor(q*K.width),ot=Math.floor(q*K.height);h===void 0&&(h=v(tt,ot));let W=_?v(tt,ot):h;return W.width=tt,W.height=ot,W.getContext("2d").drawImage(b,0,0,tt,ot),wt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+tt+"x"+ot+")."),W}else return"data"in b&&wt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function d(b){return b.generateMipmaps}function M(b){n.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(b,_,F,q,K,tt=!1){if(b!==null){if(n[b]!==void 0)return n[b];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ot;q&&(ot=t.get("EXT_texture_norm16"),ot||wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=_;if(_===n.RED&&(F===n.FLOAT&&(W=n.R32F),F===n.HALF_FLOAT&&(W=n.R16F),F===n.UNSIGNED_BYTE&&(W=n.R8),F===n.UNSIGNED_SHORT&&ot&&(W=ot.R16_EXT),F===n.SHORT&&ot&&(W=ot.R16_SNORM_EXT)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.R8UI),F===n.UNSIGNED_SHORT&&(W=n.R16UI),F===n.UNSIGNED_INT&&(W=n.R32UI),F===n.BYTE&&(W=n.R8I),F===n.SHORT&&(W=n.R16I),F===n.INT&&(W=n.R32I)),_===n.RG&&(F===n.FLOAT&&(W=n.RG32F),F===n.HALF_FLOAT&&(W=n.RG16F),F===n.UNSIGNED_BYTE&&(W=n.RG8),F===n.UNSIGNED_SHORT&&ot&&(W=ot.RG16_EXT),F===n.SHORT&&ot&&(W=ot.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RG8UI),F===n.UNSIGNED_SHORT&&(W=n.RG16UI),F===n.UNSIGNED_INT&&(W=n.RG32UI),F===n.BYTE&&(W=n.RG8I),F===n.SHORT&&(W=n.RG16I),F===n.INT&&(W=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGB8UI),F===n.UNSIGNED_SHORT&&(W=n.RGB16UI),F===n.UNSIGNED_INT&&(W=n.RGB32UI),F===n.BYTE&&(W=n.RGB8I),F===n.SHORT&&(W=n.RGB16I),F===n.INT&&(W=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),F===n.UNSIGNED_INT&&(W=n.RGBA32UI),F===n.BYTE&&(W=n.RGBA8I),F===n.SHORT&&(W=n.RGBA16I),F===n.INT&&(W=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_SHORT&&ot&&(W=ot.RGB16_EXT),F===n.SHORT&&ot&&(W=ot.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),_===n.RGBA){let Y=tt?Cs:Ot.getTransfer(K);F===n.FLOAT&&(W=n.RGBA32F),F===n.HALF_FLOAT&&(W=n.RGBA16F),F===n.UNSIGNED_BYTE&&(W=Y===Yt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&ot&&(W=ot.RGBA16_EXT),F===n.SHORT&&ot&&(W=ot.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function A(b,_){let F;return b?_===null||_===zn||_===ss?F=n.DEPTH24_STENCIL8:_===kn?F=n.DEPTH32F_STENCIL8:_===rs&&(F=n.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zn||_===ss?F=n.DEPTH_COMPONENT24:_===kn?F=n.DEPTH_COMPONENT32F:_===rs&&(F=n.DEPTH_COMPONENT16),F}function T(b,_){return d(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ue&&b.minFilter!==Ae?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function P(b){let _=b.target;_.removeEventListener("dispose",P),E(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function x(b){let _=b.target;_.removeEventListener("dispose",x),C(_)}function E(b){let _=i.get(b);if(_.__webglInit===void 0)return;let F=b.source,q=p.get(F);if(q){let K=q[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&I(b),Object.keys(q).length===0&&p.delete(F)}i.remove(b)}function I(b){let _=i.get(b);n.deleteTexture(_.__webglTexture);let F=b.source,q=p.get(F);delete q[_.__cacheKey],o.memory.textures--}function C(b){let _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let K=0;K<_.__webglFramebuffer[q].length;K++)n.deleteFramebuffer(_.__webglFramebuffer[q][K]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=b.textures;for(let q=0,K=F.length;q<K;q++){let tt=i.get(F[q]);tt.__webglTexture&&(n.deleteTexture(tt.__webglTexture),o.memory.textures--),i.remove(F[q])}i.remove(b)}let D=0;function H(){D=0}function $(){return D}function U(b){D=b}function k(){let b=D;return b>=r.maxTextures&&wt("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),D+=1,b}function G(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function j(b,_){let F=i.get(b);if(b.isVideoTexture&&ee(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){let q=b.image;if(q===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(F,b,_);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function Q(b,_){let F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){Tt(F,b,_);return}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function lt(b,_){let F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){Tt(F,b,_);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function xt(b,_){let F=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&F.__version!==b.version){Pt(F,b,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}let bt={[ta]:n.REPEAT,[Yn]:n.CLAMP_TO_EDGE,[ea]:n.MIRRORED_REPEAT},Ht={[Ue]:n.NEAREST,[Du]:n.NEAREST_MIPMAP_NEAREST,[Xs]:n.NEAREST_MIPMAP_LINEAR,[Ae]:n.LINEAR,[Aa]:n.LINEAR_MIPMAP_NEAREST,[tr]:n.LINEAR_MIPMAP_LINEAR},Zt={[Fu]:n.NEVER,[Vu]:n.ALWAYS,[Ou]:n.LESS,[hc]:n.LEQUAL,[Bu]:n.EQUAL,[uc]:n.GEQUAL,[zu]:n.GREATER,[ku]:n.NOTEQUAL};function Dt(b,_){if(_.type===kn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ae||_.magFilter===Aa||_.magFilter===Xs||_.magFilter===tr||_.minFilter===Ae||_.minFilter===Aa||_.minFilter===Xs||_.minFilter===tr)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,bt[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,bt[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,bt[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,Ht[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,Ht[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Zt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ue||_.minFilter!==Xs&&_.minFilter!==tr||_.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Z(b,_){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",P));let q=_.source,K=p.get(q);K===void 0&&(K={},p.set(q,K));let tt=G(_);if(tt!==b.__cacheKey){K[tt]===void 0&&(K[tt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),K[tt].usedTimes++;let ot=K[b.__cacheKey];ot!==void 0&&(K[b.__cacheKey].usedTimes--,ot.usedTimes===0&&I(_)),b.__cacheKey=tt,b.__webglTexture=K[tt].texture}return F}function ft(b,_,F){return Math.floor(Math.floor(b/F)/_)}function it(b,_,F,q){let tt=b.updateRanges;if(tt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,q,_.data);else{tt.sort((gt,rt)=>gt.start-rt.start);let ot=0;for(let gt=1;gt<tt.length;gt++){let rt=tt[ot],et=tt[gt],Ct=rt.start+rt.count,Nt=ft(et.start,_.width,4),Wt=ft(rt.start,_.width,4);et.start<=Ct+1&&Nt===Wt&&ft(et.start+et.count-1,_.width,4)===Nt?rt.count=Math.max(rt.count,et.start+et.count-rt.start):(++ot,tt[ot]=et)}tt.length=ot+1;let W=e.getParameter(n.UNPACK_ROW_LENGTH),Y=e.getParameter(n.UNPACK_SKIP_PIXELS),dt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let gt=0,rt=tt.length;gt<rt;gt++){let et=tt[gt],Ct=Math.floor(et.start/4),Nt=Math.ceil(et.count/4),Wt=Ct%_.width,R=Math.floor(Ct/_.width),nt=Nt,X=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Wt),e.pixelStorei(n.UNPACK_SKIP_ROWS,R),e.texSubImage2D(n.TEXTURE_2D,0,Wt,R,nt,X,F,q,_.data)}b.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,W),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Y),e.pixelStorei(n.UNPACK_SKIP_ROWS,dt)}}function Tt(b,_,F){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);let K=Z(b,_),tt=_.source;e.bindTexture(q,b.__webglTexture,n.TEXTURE0+F);let ot=i.get(tt);if(tt.version!==ot.__version||K===!0){if(e.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let X=Ot.getPrimaries(Ot.workingColorSpace),pt=_.colorSpace===Rn?null:Ot.getPrimaries(_.colorSpace),st=_.colorSpace===Rn||X===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let Y=m(_.image,!1,r.maxTextureSize);Y=at(_,Y);let dt=s.convert(_.format,_.colorSpace),gt=s.convert(_.type),rt=S(_.internalFormat,dt,gt,_.normalized,_.colorSpace,_.isVideoTexture);Dt(q,_);let et,Ct=_.mipmaps,Nt=_.isVideoTexture!==!0,Wt=ot.__version===void 0||K===!0,R=tt.dataReady,nt=T(_,Y);if(_.isDepthTexture)rt=A(_.format===er,_.type),Wt&&(Nt?e.texStorage2D(n.TEXTURE_2D,1,rt,Y.width,Y.height):e.texImage2D(n.TEXTURE_2D,0,rt,Y.width,Y.height,0,dt,gt,null));else if(_.isDataTexture)if(Ct.length>0){Nt&&Wt&&e.texStorage2D(n.TEXTURE_2D,nt,rt,Ct[0].width,Ct[0].height);for(let X=0,pt=Ct.length;X<pt;X++)et=Ct[X],Nt?R&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,et.width,et.height,dt,gt,et.data):e.texImage2D(n.TEXTURE_2D,X,rt,et.width,et.height,0,dt,gt,et.data);_.generateMipmaps=!1}else Nt?(Wt&&e.texStorage2D(n.TEXTURE_2D,nt,rt,Y.width,Y.height),R&&it(_,Y,dt,gt)):e.texImage2D(n.TEXTURE_2D,0,rt,Y.width,Y.height,0,dt,gt,Y.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Nt&&Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,nt,rt,Ct[0].width,Ct[0].height,Y.depth);for(let X=0,pt=Ct.length;X<pt;X++)if(et=Ct[X],_.format!==Cn)if(dt!==null)if(Nt){if(R)if(_.layerUpdates.size>0){let st=m0(et.width,et.height,_.format,_.type);for(let J of _.layerUpdates){let yt=et.data.subarray(J*st/et.data.BYTES_PER_ELEMENT,(J+1)*st/et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,J,et.width,et.height,1,dt,yt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,et.width,et.height,Y.depth,dt,et.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,rt,et.width,et.height,Y.depth,0,et.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?R&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,et.width,et.height,Y.depth,dt,gt,et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,X,rt,et.width,et.height,Y.depth,0,dt,gt,et.data)}else{Nt&&Wt&&e.texStorage2D(n.TEXTURE_2D,nt,rt,Ct[0].width,Ct[0].height);for(let X=0,pt=Ct.length;X<pt;X++)et=Ct[X],_.format!==Cn?dt!==null?Nt?R&&e.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,et.width,et.height,dt,et.data):e.compressedTexImage2D(n.TEXTURE_2D,X,rt,et.width,et.height,0,et.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?R&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,et.width,et.height,dt,gt,et.data):e.texImage2D(n.TEXTURE_2D,X,rt,et.width,et.height,0,dt,gt,et.data)}else if(_.isDataArrayTexture)if(Nt){if(Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,nt,rt,Y.width,Y.height,Y.depth),R)if(_.layerUpdates.size>0){let X=m0(Y.width,Y.height,_.format,_.type);for(let pt of _.layerUpdates){let st=Y.data.subarray(pt*X/Y.data.BYTES_PER_ELEMENT,(pt+1)*X/Y.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pt,Y.width,Y.height,1,dt,gt,st)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,dt,gt,Y.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,rt,Y.width,Y.height,Y.depth,0,dt,gt,Y.data);else if(_.isData3DTexture)Nt?(Wt&&e.texStorage3D(n.TEXTURE_3D,nt,rt,Y.width,Y.height,Y.depth),R&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,dt,gt,Y.data)):e.texImage3D(n.TEXTURE_3D,0,rt,Y.width,Y.height,Y.depth,0,dt,gt,Y.data);else if(_.isFramebufferTexture){if(Wt)if(Nt)e.texStorage2D(n.TEXTURE_2D,nt,rt,Y.width,Y.height);else{let X=Y.width,pt=Y.height;for(let st=0;st<nt;st++)e.texImage2D(n.TEXTURE_2D,st,rt,X,pt,0,dt,gt,null),X>>=1,pt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let X=n.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),Y.parentNode!==X){X.appendChild(Y),f.add(_),X.onpaint=It=>{let Me=It.changedElements;for(let Kt of f)Me.includes(Kt.image)&&(Kt.needsUpdate=!0)},X.requestPaint();return}let pt=0,st=n.RGBA,J=n.RGBA,yt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,pt,st,J,yt,Y),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(Nt&&Wt){let X=ge(Ct[0]);e.texStorage2D(n.TEXTURE_2D,nt,rt,X.width,X.height)}for(let X=0,pt=Ct.length;X<pt;X++)et=Ct[X],Nt?R&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,dt,gt,et):e.texImage2D(n.TEXTURE_2D,X,rt,dt,gt,et);_.generateMipmaps=!1}else if(Nt){if(Wt){let X=ge(Y);e.texStorage2D(n.TEXTURE_2D,nt,rt,X.width,X.height)}R&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,gt,Y)}else e.texImage2D(n.TEXTURE_2D,0,rt,dt,gt,Y);d(_)&&M(q),ot.__version=tt.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Pt(b,_,F){if(_.image.length!==6)return;let q=Z(b,_),K=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);let tt=i.get(K);if(K.version!==tt.__version||q===!0){e.activeTexture(n.TEXTURE0+F);let ot=Ot.getPrimaries(Ot.workingColorSpace),W=_.colorSpace===Rn?null:Ot.getPrimaries(_.colorSpace),Y=_.colorSpace===Rn||ot===W?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let dt=_.isCompressedTexture||_.image[0].isCompressedTexture,gt=_.image[0]&&_.image[0].isDataTexture,rt=[];for(let J=0;J<6;J++)!dt&&!gt?rt[J]=m(_.image[J],!0,r.maxCubemapSize):rt[J]=gt?_.image[J].image:_.image[J],rt[J]=at(_,rt[J]);let et=rt[0],Ct=s.convert(_.format,_.colorSpace),Nt=s.convert(_.type),Wt=S(_.internalFormat,Ct,Nt,_.normalized,_.colorSpace),R=_.isVideoTexture!==!0,nt=tt.__version===void 0||q===!0,X=K.dataReady,pt=T(_,et);Dt(n.TEXTURE_CUBE_MAP,_);let st;if(dt){R&&nt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Wt,et.width,et.height);for(let J=0;J<6;J++){st=rt[J].mipmaps;for(let yt=0;yt<st.length;yt++){let It=st[yt];_.format!==Cn?Ct!==null?R?X&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,0,0,It.width,It.height,Ct,It.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,Wt,It.width,It.height,0,It.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,0,0,It.width,It.height,Ct,Nt,It.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,Wt,It.width,It.height,0,Ct,Nt,It.data)}}}else{if(st=_.mipmaps,R&&nt){st.length>0&&pt++;let J=ge(rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Wt,J.width,J.height)}for(let J=0;J<6;J++)if(gt){R?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,rt[J].width,rt[J].height,Ct,Nt,rt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,rt[J].width,rt[J].height,0,Ct,Nt,rt[J].data);for(let yt=0;yt<st.length;yt++){let Me=st[yt].image[J].image;R?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,0,0,Me.width,Me.height,Ct,Nt,Me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,Wt,Me.width,Me.height,0,Ct,Nt,Me.data)}}else{R?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ct,Nt,rt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,Ct,Nt,rt[J]);for(let yt=0;yt<st.length;yt++){let It=st[yt];R?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,0,0,Ct,Nt,It.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,Wt,Ct,Nt,It.image[J])}}}d(_)&&M(n.TEXTURE_CUBE_MAP),tt.__version=K.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function At(b,_,F,q,K,tt){let ot=s.convert(F.format,F.colorSpace),W=s.convert(F.type),Y=S(F.internalFormat,ot,W,F.normalized,F.colorSpace),dt=i.get(_),gt=i.get(F);if(gt.__renderTarget=_,!dt.__hasExternalTextures){let rt=Math.max(1,_.width>>tt),et=Math.max(1,_.height>>tt);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,tt,Y,rt,et,_.depth,0,ot,W,null):e.texImage2D(K,tt,Y,rt,et,0,ot,W,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),kt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,K,gt.__webglTexture,0,Pe(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,K,gt.__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function le(b,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){let q=_.depthTexture,K=q&&q.isDepthTexture?q.type:null,tt=A(_.stencilBuffer,K),ot=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;kt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe(_),tt,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe(_),tt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,tt,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,b)}else{let q=_.textures;for(let K=0;K<q.length;K++){let tt=q[K],ot=s.convert(tt.format,tt.colorSpace),W=s.convert(tt.type),Y=S(tt.internalFormat,ot,W,tt.normalized,tt.colorSpace);kt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe(_),Y,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe(_),Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function zt(b,_,F){let q=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Dt(n.TEXTURE_CUBE_MAP,_.depthTexture);let dt=s.convert(_.depthTexture.format),gt=s.convert(_.depthTexture.type),rt;_.depthTexture.format===Zn?rt=n.DEPTH_COMPONENT24:_.depthTexture.format===er&&(rt=n.DEPTH24_STENCIL8);for(let et=0;et<6;et++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,rt,_.width,_.height,0,dt,gt,null)}}else j(_.depthTexture,0);let tt=K.__webglTexture,ot=Pe(_),W=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Y=_.depthTexture.format===er?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Zn)kt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,W,tt,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,Y,W,tt,0);else if(_.depthTexture.format===er)kt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,W,tt,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,Y,W,tt,0);else throw new Error("Unknown depthTexture format")}function Jt(b){let _=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let q=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=q}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let q=0;q<6;q++)zt(_.__webglFramebuffer[q],b,q);else{let q=b.texture.mipmaps;q&&q.length>0?zt(_.__webglFramebuffer[0],b,0):zt(_.__webglFramebuffer,b,0)}else if(F){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=n.createRenderbuffer(),le(_.__webglDepthbuffer[q],b,!1);else{let K=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=_.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,tt)}}else{let q=b.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),le(_.__webglDepthbuffer,b,!1);else{let K=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,tt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function re(b,_,F){let q=i.get(b);_!==void 0&&At(q.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Jt(b)}function Bt(b){let _=b.texture,F=i.get(b),q=i.get(_);b.addEventListener("dispose",x);let K=b.textures,tt=b.isWebGLCubeRenderTarget===!0,ot=K.length>1;if(ot||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,o.memory.textures++),tt){F.__webglFramebuffer=[];for(let W=0;W<6;W++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[W]=[];for(let Y=0;Y<_.mipmaps.length;Y++)F.__webglFramebuffer[W][Y]=n.createFramebuffer()}else F.__webglFramebuffer[W]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let W=0;W<_.mipmaps.length;W++)F.__webglFramebuffer[W]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(ot)for(let W=0,Y=K.length;W<Y;W++){let dt=i.get(K[W]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&kt(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let W=0;W<K.length;W++){let Y=K[W];F.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[W]);let dt=s.convert(Y.format,Y.colorSpace),gt=s.convert(Y.type),rt=S(Y.internalFormat,dt,gt,Y.normalized,Y.colorSpace,b.isXRRenderTarget===!0),et=Pe(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,et,rt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,F.__webglColorRenderbuffer[W])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),le(F.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(tt){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Dt(n.TEXTURE_CUBE_MAP,_);for(let W=0;W<6;W++)if(_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)At(F.__webglFramebuffer[W][Y],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,Y);else At(F.__webglFramebuffer[W],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);d(_)&&M(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let W=0,Y=K.length;W<Y;W++){let dt=K[W],gt=i.get(dt),rt=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(rt=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,gt.__webglTexture),Dt(rt,dt),At(F.__webglFramebuffer,b,dt,n.COLOR_ATTACHMENT0+W,rt,0),d(dt)&&M(rt)}e.unbindTexture()}else{let W=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(W=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(W,q.__webglTexture),Dt(W,_),_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)At(F.__webglFramebuffer[Y],b,_,n.COLOR_ATTACHMENT0,W,Y);else At(F.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,W,0);d(_)&&M(W),e.unbindTexture()}b.depthBuffer&&Jt(b)}function Re(b){let _=b.textures;for(let F=0,q=_.length;F<q;F++){let K=_[F];if(d(K)){let tt=w(b),ot=i.get(K).__webglTexture;e.bindTexture(tt,ot),M(tt),e.unbindTexture()}}}let he=[],ln=[];function L(b){if(b.samples>0){if(kt(b)===!1){let _=b.textures,F=b.width,q=b.height,K=n.COLOR_BUFFER_BIT,tt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=i.get(b),W=_.length>1;if(W)for(let dt=0;dt<_.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);let Y=b.texture.mipmaps;Y&&Y.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let dt=0;dt<_.length;dt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),W){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ot.__webglColorRenderbuffer[dt]);let gt=i.get(_[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,gt,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,K,n.NEAREST),c===!0&&(he.length=0,ln.length=0,he.push(n.COLOR_ATTACHMENT0+dt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(he.push(tt),ln.push(tt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ln)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),W)for(let dt=0;dt<_.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,ot.__webglColorRenderbuffer[dt]);let gt=i.get(_[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Pe(b){return Math.min(r.maxSamples,b.samples)}function kt(b){let _=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ee(b){let _=o.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function at(b,_){let F=b.colorSpace,q=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==As&&F!==Rn&&(Ot.getTransfer(F)===Yt?(q!==Cn||K!==_n)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",F)),_}function ge(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.getTextureUnits=$,this.setTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=Q,this.setTexture3D=lt,this.setTextureCube=xt,this.rebindTextures=re,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function E2(n,t){function e(i,r=Rn){let s,o=Ot.getTransfer(r);if(i===_n)return n.UNSIGNED_BYTE;if(i===Ra)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===s0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===o0)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===i0)return n.BYTE;if(i===r0)return n.SHORT;if(i===rs)return n.UNSIGNED_SHORT;if(i===Ca)return n.INT;if(i===zn)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===xn)return n.HALF_FLOAT;if(i===a0)return n.ALPHA;if(i===c0)return n.RGB;if(i===Cn)return n.RGBA;if(i===Zn)return n.DEPTH_COMPONENT;if(i===er)return n.DEPTH_STENCIL;if(i===l0)return n.RED;if(i===Ia)return n.RED_INTEGER;if(i===nr)return n.RG;if(i===La)return n.RG_INTEGER;if(i===Da)return n.RGBA_INTEGER;if(i===qs||i===Ys||i===Zs||i===Js)if(o===Yt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Js)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Na||i===Ua||i===Fa||i===Oa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Na)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ua)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ba||i===za||i===ka||i===Va||i===Ga||i===Ks||i===Ha)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ba||i===za)return o===Yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ka)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Va)return s.COMPRESSED_R11_EAC;if(i===Ga)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ks)return s.COMPRESSED_RG11_EAC;if(i===Ha)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$a||i===Wa||i===Xa||i===qa||i===Ya||i===Za||i===Ja||i===Ka||i===ja||i===Qa||i===tc||i===ec||i===nc||i===ic)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$a)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wa)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xa)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qa)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ya)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Za)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ja)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ka)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ja)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qa)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tc)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ec)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nc)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ic)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rc||i===sc||i===oc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===rc)return o===Yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ac||i===cc||i===js||i===lc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ac)return s.COMPRESSED_RED_RGTC1_EXT;if(i===cc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===js)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ss?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var A2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C2=`
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

}`,R0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Bs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Xe({vertexShader:A2,fragmentShader:C2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ve(new mi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},P0=class extends Jn{constructor(t,e){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,g=null,v=typeof XRWebGLBinding<"u",m=new R0,d={},M=e.getContextAttributes(),w=null,S=null,A=[],T=[],P=new Xt,x=null,E=new $e;E.viewport=new xe;let I=new $e;I.viewport=new xe;let C=[E,I],D=new wa,H=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ft=A[Z];return ft===void 0&&(ft=new Qr,A[Z]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Z){let ft=A[Z];return ft===void 0&&(ft=new Qr,A[Z]=ft),ft.getGripSpace()},this.getHand=function(Z){let ft=A[Z];return ft===void 0&&(ft=new Qr,A[Z]=ft),ft.getHandSpace()};function U(Z){let ft=T.indexOf(Z.inputSource);if(ft===-1)return;let it=A[ft];it!==void 0&&(it.update(Z.inputSource,Z.frame,l||o),it.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",G);for(let Z=0;Z<A.length;Z++){let ft=T[Z];ft!==null&&(T[Z]=null,A[Z].disconnect(ft))}H=null,$=null,m.reset();for(let Z in d)delete d[Z];t.setRenderTarget(w),p=null,h=null,f=null,r=null,S=null,Dt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(w=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",k),r.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,Tt=null,Pt=null;M.depth&&(Pt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=M.stencil?er:Zn,Tt=M.stencil?ss:zn);let At={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(At),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new We(h.textureWidth,h.textureHeight,{format:Cn,type:_n,depthTexture:new pi(h.textureWidth,h.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let it={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,it),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new We(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Dt.setContext(r),Dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(Z){for(let ft=0;ft<Z.removed.length;ft++){let it=Z.removed[ft],Tt=T.indexOf(it);Tt>=0&&(T[Tt]=null,A[Tt].disconnect(it))}for(let ft=0;ft<Z.added.length;ft++){let it=Z.added[ft],Tt=T.indexOf(it);if(Tt===-1){for(let At=0;At<A.length;At++)if(At>=T.length){T.push(it),Tt=At;break}else if(T[At]===null){T[At]=it,Tt=At;break}if(Tt===-1)break}let Pt=A[Tt];Pt&&Pt.connect(it)}}let j=new O,Q=new O;function lt(Z,ft,it){j.setFromMatrixPosition(ft.matrixWorld),Q.setFromMatrixPosition(it.matrixWorld);let Tt=j.distanceTo(Q),Pt=ft.projectionMatrix.elements,At=it.projectionMatrix.elements,le=Pt[14]/(Pt[10]-1),zt=Pt[14]/(Pt[10]+1),Jt=(Pt[9]+1)/Pt[5],re=(Pt[9]-1)/Pt[5],Bt=(Pt[8]-1)/Pt[0],Re=(At[8]+1)/At[0],he=le*Bt,ln=le*Re,L=Tt/(-Bt+Re),Pe=L*-Bt;if(ft.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Pe),Z.translateZ(L),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Pt[10]===-1)Z.projectionMatrix.copy(ft.projectionMatrix),Z.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let kt=le+L,ee=zt+L,at=he-Pe,ge=ln+(Tt-Pe),b=Jt*zt/ee*kt,_=re*zt/ee*kt;Z.projectionMatrix.makePerspective(at,ge,b,_,kt,ee),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function xt(Z,ft){ft===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ft.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ft=Z.near,it=Z.far;m.texture!==null&&(m.depthNear>0&&(ft=m.depthNear),m.depthFar>0&&(it=m.depthFar)),D.near=I.near=E.near=ft,D.far=I.far=E.far=it,(H!==D.near||$!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),H=D.near,$=D.far),D.layers.mask=Z.layers.mask|6,E.layers.mask=D.layers.mask&-5,I.layers.mask=D.layers.mask&-3;let Tt=Z.parent,Pt=D.cameras;xt(D,Tt);for(let At=0;At<Pt.length;At++)xt(Pt[At],Tt);Pt.length===2?lt(D,E,I):D.projectionMatrix.copy(E.projectionMatrix),bt(Z,D,Tt)};function bt(Z,ft,it){it===null?Z.matrix.copy(ft.matrixWorld):(Z.matrix.copy(it.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ft.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ft.projectionMatrix),Z.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ra*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(Z){return d[Z]};let Ht=null;function Zt(Z,ft){if(u=ft.getViewerPose(l||o),g=ft,u!==null){let it=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Tt=!1;it.length!==D.cameras.length&&(D.cameras.length=0,Tt=!0);for(let zt=0;zt<it.length;zt++){let Jt=it[zt],re=null;if(p!==null)re=p.getViewport(Jt);else{let Re=f.getViewSubImage(h,Jt);re=Re.viewport,zt===0&&(t.setRenderTargetTextures(S,Re.colorTexture,Re.depthStencilTexture),t.setRenderTarget(S))}let Bt=C[zt];Bt===void 0&&(Bt=new $e,Bt.layers.enable(zt),Bt.viewport=new xe,C[zt]=Bt),Bt.matrix.fromArray(Jt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Jt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(re.x,re.y,re.width,re.height),zt===0&&(D.matrix.copy(Bt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Tt===!0&&D.cameras.push(Bt)}let Pt=r.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let zt=f.getDepthInformation(it[0]);zt&&zt.isValid&&zt.texture&&m.init(zt,r.renderState)}if(Pt&&Pt.includes("camera-access")&&v){t.state.unbindTexture(),f=i.getBinding();for(let zt=0;zt<it.length;zt++){let Jt=it[zt].camera;if(Jt){let re=d[Jt];re||(re=new Bs,d[Jt]=re);let Bt=f.getCameraImage(Jt);re.sourceTexture=Bt}}}}for(let it=0;it<A.length;it++){let Tt=T[it],Pt=A[it];Tt!==null&&Pt!==void 0&&Pt.update(Tt,ft,l||o)}Ht&&Ht(Z,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),g=null}let Dt=new xf;Dt.setAnimationLoop(Zt),this.setAnimationLoop=function(Z){Ht=Z},this.dispose=function(){}}},R2=new Ee,wf=new Rt;wf.set(-1,0,0,0,1,0,0,0,1);function P2(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,f0(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,M,w,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,M,w):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Qe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Qe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M=t.get(d),w=M.envMap,S=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(R2.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(wf),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=w*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Qe&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function I2(n,t,e,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){let S=w.program;i.uniformBlockBinding(M,S)}function l(M,w){let S=r[M.id];S===void 0&&(g(M),S=u(M),r[M.id]=S,M.addEventListener("dispose",m));let A=w.program;i.updateUBOMapping(M,A);let T=t.render.frame;s[M.id]!==T&&(h(M),s[M.id]=T)}function u(M){let w=f();M.__bindingPointIndex=w;let S=n.createBuffer(),A=M.__size,T=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,S),S}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let w=r[M.id],S=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let T=0,P=S.length;T<P;T++){let x=Array.isArray(S[T])?S[T]:[S[T]];for(let E=0,I=x.length;E<I;E++){let C=x[E];if(p(C,T,E,A)===!0){let D=C.__offset,H=Array.isArray(C.value)?C.value:[C.value],$=0;for(let U=0;U<H.length;U++){let k=H[U],G=v(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,D+$,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):ArrayBuffer.isView(k)?C.__data.set(new k.constructor(k.buffer,k.byteOffset,C.__data.length)):(k.toArray(C.__data,$),$+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,w,S,A){let T=M.value,P=w+"_"+S;if(A[P]===void 0)return typeof T=="number"||typeof T=="boolean"?A[P]=T:ArrayBuffer.isView(T)?A[P]=T.slice():A[P]=T.clone(),!0;{let x=A[P];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return A[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function g(M){let w=M.uniforms,S=0,A=16;for(let P=0,x=w.length;P<x;P++){let E=Array.isArray(w[P])?w[P]:[w[P]];for(let I=0,C=E.length;I<C;I++){let D=E[I],H=Array.isArray(D.value)?D.value:[D.value];for(let $=0,U=H.length;$<U;$++){let k=H[$],G=v(k),j=S%A,Q=j%G.boundary,lt=j+Q;S+=Q,lt!==0&&A-lt<G.storage&&(S+=A-lt),D.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=G.storage}}}let T=S%A;return T>0&&(S+=A-T),M.__size=S,M.__cache={},this}function v(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):wt("WebGLRenderer: Unsupported uniform value type.",M),w}function m(M){let w=M.target;w.removeEventListener("dispose",m);let S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function d(){for(let M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}var L2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function D2(){return ti===null&&(ti=new la(L2,16,16,nr,xn),ti.name="DFG_LUT",ti.minFilter=Ae,ti.magFilter=Ae,ti.wrapS=Yn,ti.wrapT=Yn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var gc=class{constructor(t={}){let{canvas:e=Gu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=_n}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let v=p,m=new Set([Da,La,Ia]),d=new Set([_n,zn,rs,ss,Ra,Pa]),M=new Uint32Array(4),w=new Int32Array(4),S=new O,A=null,T=null,P=[],x=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,C=!1,D=null;this._outputColorSpace=dn;let H=0,$=0,U=null,k=-1,G=null,j=new xe,Q=new xe,lt=null,xt=new qt(0),bt=0,Ht=e.width,Zt=e.height,Dt=1,Z=null,ft=null,it=new xe(0,0,Ht,Zt),Tt=new xe(0,0,Ht,Zt),Pt=!1,At=new Fs,le=!1,zt=!1,Jt=new Ee,re=new O,Bt=new xe,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function ln(){return U===null?Dt:1}let L=i;function Pe(y,N){return e.getContext(y,N)}try{let y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"184"}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",It,!1),L===null){let N="webgl2";if(L=Pe(N,y),L===null)throw Pe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Et("WebGLRenderer: "+y.message),y}let kt,ee,at,ge,b,_,F,q,K,tt,ot,W,Y,dt,gt,rt,et,Ct,Nt,Wt,R,nt,X;function pt(){kt=new k_(L),kt.init(),R=new E2(L,kt),ee=new L_(L,kt,t,R),at=new w2(L,kt),ee.reversedDepthBuffer&&h&&at.buffers.depth.setReversed(!0),ge=new H_(L),b=new h2,_=new T2(L,kt,at,b,ee,R,ge),F=new z_(I),q=new qm(L),nt=new P_(L,q),K=new V_(L,q,ge,nt),tt=new W_(L,K,q,nt,ge),Ct=new $_(L,ee,_),gt=new D_(b),ot=new l2(I,F,kt,ee,nt,gt),W=new P2(I,b),Y=new f2,dt=new x2(kt),et=new R_(I,F,at,tt,g,c),rt=new S2(I,tt,ee),X=new I2(L,ge,ee,at),Nt=new I_(L,kt,ge),Wt=new G_(L,kt,ge),ge.programs=ot.programs,I.capabilities=ee,I.extensions=kt,I.properties=b,I.renderLists=Y,I.shadowMap=rt,I.state=at,I.info=ge}pt(),v!==_n&&(E=new q_(v,e.width,e.height,r,s));let st=new P0(I,L);this.xr=st,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let y=kt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=kt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Dt},this.setPixelRatio=function(y){y!==void 0&&(Dt=y,this.setSize(Ht,Zt,!1))},this.getSize=function(y){return y.set(Ht,Zt)},this.setSize=function(y,N,V=!0){if(st.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ht=y,Zt=N,e.width=Math.floor(y*Dt),e.height=Math.floor(N*Dt),V===!0&&(e.style.width=y+"px",e.style.height=N+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(Ht*Dt,Zt*Dt).floor()},this.setDrawingBufferSize=function(y,N,V){Ht=y,Zt=N,Dt=V,e.width=Math.floor(y*V),e.height=Math.floor(N*V),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(v===_n){Et("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){wt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(j)},this.getViewport=function(y){return y.copy(it)},this.setViewport=function(y,N,V,B){y.isVector4?it.set(y.x,y.y,y.z,y.w):it.set(y,N,V,B),at.viewport(j.copy(it).multiplyScalar(Dt).round())},this.getScissor=function(y){return y.copy(Tt)},this.setScissor=function(y,N,V,B){y.isVector4?Tt.set(y.x,y.y,y.z,y.w):Tt.set(y,N,V,B),at.scissor(Q.copy(Tt).multiplyScalar(Dt).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(y){at.setScissorTest(Pt=y)},this.setOpaqueSort=function(y){Z=y},this.setTransparentSort=function(y){ft=y},this.getClearColor=function(y){return y.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,V=!0){let B=0;if(y){let z=!1;if(U!==null){let ut=U.texture.format;z=m.has(ut)}if(z){let ut=U.texture.type,_t=d.has(ut),ht=et.getClearColor(),vt=et.getClearAlpha(),Mt=ht.r,Lt=ht.g,Ft=ht.b;_t?(M[0]=Mt,M[1]=Lt,M[2]=Ft,M[3]=vt,L.clearBufferuiv(L.COLOR,0,M)):(w[0]=Mt,w[1]=Lt,w[2]=Ft,w[3]=vt,L.clearBufferiv(L.COLOR,0,w))}else B|=L.COLOR_BUFFER_BIT}N&&(B|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),D=y},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",It,!1),et.dispose(),Y.dispose(),dt.dispose(),b.dispose(),F.dispose(),tt.dispose(),nt.dispose(),X.dispose(),ot.dispose(),st.dispose(),st.removeEventListener("sessionstart",Bh),st.removeEventListener("sessionend",zh),_r.stop()};function J(y){y.preventDefault(),u0("WebGLRenderer: Context Lost."),C=!0}function yt(){u0("WebGLRenderer: Context Restored."),C=!1;let y=ge.autoReset,N=rt.enabled,V=rt.autoUpdate,B=rt.needsUpdate,z=rt.type;pt(),ge.autoReset=y,rt.enabled=N,rt.autoUpdate=V,rt.needsUpdate=B,rt.type=z}function It(y){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Me(y){let N=y.target;N.removeEventListener("dispose",Me),Kt(N)}function Kt(y){oi(y),b.remove(y)}function oi(y){let N=b.get(y).programs;N!==void 0&&(N.forEach(function(V){ot.releaseProgram(V)}),y.isShaderMaterial&&ot.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,V,B,z,ut){N===null&&(N=Re);let _t=z.isMesh&&z.matrixWorld.determinant()<0,ht=am(y,N,V,B,z);at.setMaterial(B,_t);let vt=V.index,Mt=1;if(B.wireframe===!0){if(vt=K.getWireframeAttribute(V),vt===void 0)return;Mt=2}let Lt=V.drawRange,Ft=V.attributes.position,St=Lt.start*Mt,jt=(Lt.start+Lt.count)*Mt;ut!==null&&(St=Math.max(St,ut.start*Mt),jt=Math.min(jt,(ut.start+ut.count)*Mt)),vt!==null?(St=Math.max(St,0),jt=Math.min(jt,vt.count)):Ft!=null&&(St=Math.max(St,0),jt=Math.min(jt,Ft.count));let be=jt-St;if(be<0||be===1/0)return;nt.setup(z,B,ht,V,vt);let _e,Qt=Nt;if(vt!==null&&(_e=q.get(vt),Qt=Wt,Qt.setIndex(_e)),z.isMesh)B.wireframe===!0?(at.setLineWidth(B.wireframeLinewidth*ln()),Qt.setMode(L.LINES)):Qt.setMode(L.TRIANGLES);else if(z.isLine){let Ve=B.linewidth;Ve===void 0&&(Ve=1),at.setLineWidth(Ve*ln()),z.isLineSegments?Qt.setMode(L.LINES):z.isLineLoop?Qt.setMode(L.LINE_LOOP):Qt.setMode(L.LINE_STRIP)}else z.isPoints?Qt.setMode(L.POINTS):z.isSprite&&Qt.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(kt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ve=z._multiDrawStarts,mt=z._multiDrawCounts,hn=z._multiDrawCount,$t=vt?q.get(vt).bytesPerElement:1,Tn=b.get(B).currentProgram.getUniforms();for(let Wn=0;Wn<hn;Wn++)Tn.setValue(L,"_gl_DrawID",Wn),Qt.render(Ve[Wn]/$t,mt[Wn])}else if(z.isInstancedMesh)Qt.renderInstances(St,be,z.count);else if(V.isInstancedBufferGeometry){let Ve=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,mt=Math.min(V.instanceCount,Ve);Qt.renderInstances(St,be,mt)}else Qt.render(St,be)};function $n(y,N,V){y.transparent===!0&&y.side===jn&&y.forceSinglePass===!1?(y.side=Qe,y.needsUpdate=!0,So(y,N,V),y.side=di,y.needsUpdate=!0,So(y,N,V),y.side=jn):So(y,N,V)}this.compile=function(y,N,V=null){V===null&&(V=y),T=dt.get(V),T.init(N),x.push(T),V.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),y!==V&&y.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights();let B=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ut=z.material;if(ut)if(Array.isArray(ut))for(let _t=0;_t<ut.length;_t++){let ht=ut[_t];$n(ht,V,z),B.add(ht)}else $n(ut,V,z),B.add(ut)}),T=x.pop(),B},this.compileAsync=function(y,N,V=null){let B=this.compile(y,N,V);return new Promise(z=>{function ut(){if(B.forEach(function(_t){b.get(_t).currentProgram.isReady()&&B.delete(_t)}),B.size===0){z(y);return}setTimeout(ut,10)}kt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let ul=null;function sm(y){ul&&ul(y)}function Bh(){_r.stop()}function zh(){_r.start()}let _r=new xf;_r.setAnimationLoop(sm),typeof self<"u"&&_r.setContext(self),this.setAnimationLoop=function(y){ul=y,st.setAnimationLoop(y),y===null?_r.stop():_r.start()},st.addEventListener("sessionstart",Bh),st.addEventListener("sessionend",zh),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(y,N);let V=st.enabled===!0&&st.isPresenting===!0,B=E!==null&&(U===null||V)&&E.begin(I,U);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(N),N=st.getCamera()),y.isScene===!0&&y.onBeforeRender(I,y,N,U),T=dt.get(y,x.length),T.init(N),T.state.textureUnits=_.getTextureUnits(),x.push(T),Jt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),At.setFromProjectionMatrix(Jt,Bn,N.reversedDepth),zt=this.localClippingEnabled,le=gt.init(this.clippingPlanes,zt),A=Y.get(y,P.length),A.init(),P.push(A),st.enabled===!0&&st.isPresenting===!0){let _t=I.xr.getDepthSensingMesh();_t!==null&&fl(_t,N,-1/0,I.sortObjects)}fl(y,N,0,I.sortObjects),A.finish(),I.sortObjects===!0&&A.sort(Z,ft),he=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,he&&et.addToRenderList(A,y),this.info.render.frame++,le===!0&&gt.beginShadows();let z=T.state.shadowsArray;if(rt.render(z,y,N),le===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(B&&E.hasRenderPass())===!1){let _t=A.opaque,ht=A.transmissive;if(T.setupLights(),N.isArrayCamera){let vt=N.cameras;if(ht.length>0)for(let Mt=0,Lt=vt.length;Mt<Lt;Mt++){let Ft=vt[Mt];Vh(_t,ht,y,Ft)}he&&et.render(y);for(let Mt=0,Lt=vt.length;Mt<Lt;Mt++){let Ft=vt[Mt];kh(A,y,Ft,Ft.viewport)}}else ht.length>0&&Vh(_t,ht,y,N),he&&et.render(y),kh(A,y,N)}U!==null&&$===0&&(_.updateMultisampleRenderTarget(U),_.updateRenderTargetMipmap(U)),B&&E.end(I),y.isScene===!0&&y.onAfterRender(I,y,N),nt.resetDefaultState(),k=-1,G=null,x.pop(),x.length>0?(T=x[x.length-1],_.setTextureUnits(T.state.textureUnits),le===!0&&gt.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?A=P[P.length-1]:A=null,D!==null&&D.renderEnd()};function fl(y,N,V,B){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||At.intersectsSprite(y)){B&&Bt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Jt);let _t=tt.update(y),ht=y.material;ht.visible&&A.push(y,_t,ht,V,Bt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||At.intersectsObject(y))){let _t=tt.update(y),ht=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Bt.copy(y.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Bt.copy(_t.boundingSphere.center)),Bt.applyMatrix4(y.matrixWorld).applyMatrix4(Jt)),Array.isArray(ht)){let vt=_t.groups;for(let Mt=0,Lt=vt.length;Mt<Lt;Mt++){let Ft=vt[Mt],St=ht[Ft.materialIndex];St&&St.visible&&A.push(y,_t,St,V,Bt.z,Ft)}}else ht.visible&&A.push(y,_t,ht,V,Bt.z,null)}}let ut=y.children;for(let _t=0,ht=ut.length;_t<ht;_t++)fl(ut[_t],N,V,B)}function kh(y,N,V,B){let{opaque:z,transmissive:ut,transparent:_t}=y;T.setupLightsView(V),le===!0&&gt.setGlobalState(I.clippingPlanes,V),B&&at.viewport(j.copy(B)),z.length>0&&bo(z,N,V),ut.length>0&&bo(ut,N,V),_t.length>0&&bo(_t,N,V),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Vh(y,N,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){let St=kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new We(1,1,{generateMipmaps:!0,type:St?xn:_n,minFilter:tr,samples:Math.max(4,ee.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}let ut=T.state.transmissionRenderTarget[B.id],_t=B.viewport||j;ut.setSize(_t.z*I.transmissionResolutionScale,_t.w*I.transmissionResolutionScale);let ht=I.getRenderTarget(),vt=I.getActiveCubeFace(),Mt=I.getActiveMipmapLevel();I.setRenderTarget(ut),I.getClearColor(xt),bt=I.getClearAlpha(),bt<1&&I.setClearColor(16777215,.5),I.clear(),he&&et.render(V);let Lt=I.toneMapping;I.toneMapping=gn;let Ft=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),le===!0&&gt.setGlobalState(I.clippingPlanes,B),bo(y,V,B),_.updateMultisampleRenderTarget(ut),_.updateRenderTargetMipmap(ut),kt.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let jt=0,be=N.length;jt<be;jt++){let _e=N[jt],{object:Qt,geometry:Ve,material:mt,group:hn}=_e;if(mt.side===jn&&Qt.layers.test(B.layers)){let $t=mt.side;mt.side=Qe,mt.needsUpdate=!0,Gh(Qt,V,B,Ve,mt,hn),mt.side=$t,mt.needsUpdate=!0,St=!0}}St===!0&&(_.updateMultisampleRenderTarget(ut),_.updateRenderTargetMipmap(ut))}I.setRenderTarget(ht,vt,Mt),I.setClearColor(xt,bt),Ft!==void 0&&(B.viewport=Ft),I.toneMapping=Lt}function bo(y,N,V){let B=N.isScene===!0?N.overrideMaterial:null;for(let z=0,ut=y.length;z<ut;z++){let _t=y[z],{object:ht,geometry:vt,group:Mt}=_t,Lt=_t.material;Lt.allowOverride===!0&&B!==null&&(Lt=B),ht.layers.test(V.layers)&&Gh(ht,N,V,vt,Lt,Mt)}}function Gh(y,N,V,B,z,ut){y.onBeforeRender(I,N,V,B,z,ut),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(I,N,V,B,y,ut),z.transparent===!0&&z.side===jn&&z.forceSinglePass===!1?(z.side=Qe,z.needsUpdate=!0,I.renderBufferDirect(V,N,B,z,y,ut),z.side=di,z.needsUpdate=!0,I.renderBufferDirect(V,N,B,z,y,ut),z.side=jn):I.renderBufferDirect(V,N,B,z,y,ut),y.onAfterRender(I,N,V,B,z,ut)}function So(y,N,V){N.isScene!==!0&&(N=Re);let B=b.get(y),z=T.state.lights,ut=T.state.shadowsArray,_t=z.state.version,ht=ot.getParameters(y,z.state,ut,N,V,T.state.lightProbeGridArray),vt=ot.getProgramCacheKey(ht),Mt=B.programs;B.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;let Lt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;B.envMap=F.get(y.envMap||B.environment,Lt),B.envMapRotation=B.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Mt===void 0&&(y.addEventListener("dispose",Me),Mt=new Map,B.programs=Mt);let Ft=Mt.get(vt);if(Ft!==void 0){if(B.currentProgram===Ft&&B.lightsStateVersion===_t)return $h(y,ht),Ft}else ht.uniforms=ot.getUniforms(y),D!==null&&y.isNodeMaterial&&D.build(y,V,ht),y.onBeforeCompile(ht,I),Ft=ot.acquireProgram(ht,vt),Mt.set(vt,Ft),B.uniforms=ht.uniforms;let St=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(St.clippingPlanes=gt.uniform),$h(y,ht),B.needsLights=lm(y),B.lightsStateVersion=_t,B.needsLights&&(St.ambientLightColor.value=z.state.ambient,St.lightProbe.value=z.state.probe,St.directionalLights.value=z.state.directional,St.directionalLightShadows.value=z.state.directionalShadow,St.spotLights.value=z.state.spot,St.spotLightShadows.value=z.state.spotShadow,St.rectAreaLights.value=z.state.rectArea,St.ltc_1.value=z.state.rectAreaLTC1,St.ltc_2.value=z.state.rectAreaLTC2,St.pointLights.value=z.state.point,St.pointLightShadows.value=z.state.pointShadow,St.hemisphereLights.value=z.state.hemi,St.directionalShadowMatrix.value=z.state.directionalShadowMatrix,St.spotLightMatrix.value=z.state.spotLightMatrix,St.spotLightMap.value=z.state.spotLightMap,St.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=T.state.lightProbeGridArray.length>0,B.currentProgram=Ft,B.uniformsList=null,Ft}function Hh(y){if(y.uniformsList===null){let N=y.currentProgram.getUniforms();y.uniformsList=as.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function $h(y,N){let V=b.get(y);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function om(y,N){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;S.setFromMatrixPosition(N.matrixWorld);for(let V=0,B=y.length;V<B;V++){let z=y[V];if(z.texture!==null&&z.boundingBox.containsPoint(S))return z}return null}function am(y,N,V,B,z){N.isScene!==!0&&(N=Re),_.resetTextureUnits();let ut=N.fog,_t=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,ht=U===null?I.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ot.workingColorSpace,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Mt=F.get(B.envMap||_t,vt),Lt=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ft=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),St=!!V.morphAttributes.position,jt=!!V.morphAttributes.normal,be=!!V.morphAttributes.color,_e=gn;B.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(_e=I.toneMapping);let Qt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ve=Qt!==void 0?Qt.length:0,mt=b.get(B),hn=T.state.lights;if(le===!0&&(zt===!0||y!==G)){let ne=y===G&&B.id===k;gt.setState(B,y,ne)}let $t=!1;B.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==hn.state.version||mt.outputColorSpace!==ht||z.isBatchedMesh&&mt.batching===!1||!z.isBatchedMesh&&mt.batching===!0||z.isBatchedMesh&&mt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&mt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&mt.instancing===!1||!z.isInstancedMesh&&mt.instancing===!0||z.isSkinnedMesh&&mt.skinning===!1||!z.isSkinnedMesh&&mt.skinning===!0||z.isInstancedMesh&&mt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&mt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&mt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&mt.instancingMorph===!1&&z.morphTexture!==null||mt.envMap!==Mt||B.fog===!0&&mt.fog!==ut||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==gt.numPlanes||mt.numIntersection!==gt.numIntersection)||mt.vertexAlphas!==Lt||mt.vertexTangents!==Ft||mt.morphTargets!==St||mt.morphNormals!==jt||mt.morphColors!==be||mt.toneMapping!==_e||mt.morphTargetsCount!==Ve||!!mt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&($t=!0):($t=!0,mt.__version=B.version);let Tn=mt.currentProgram;$t===!0&&(Tn=So(B,N,z),D&&B.isNodeMaterial&&D.onUpdateProgram(B,Tn,mt));let Wn=!1,Oi=!1,Fr=!1,te=Tn.getUniforms(),Se=mt.uniforms;if(at.useProgram(Tn.program)&&(Wn=!0,Oi=!0,Fr=!0),B.id!==k&&(k=B.id,Oi=!0),mt.needsLights){let ne=om(T.state.lightProbeGridArray,z);mt.lightProbeGrid!==ne&&(mt.lightProbeGrid=ne,Oi=!0)}if(Wn||G!==y){at.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),te.setValue(L,"projectionMatrix",y.projectionMatrix),te.setValue(L,"viewMatrix",y.matrixWorldInverse);let zi=te.map.cameraPosition;zi!==void 0&&zi.setValue(L,re.setFromMatrixPosition(y.matrixWorld)),ee.logarithmicDepthBuffer&&te.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&te.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),G!==y&&(G=y,Oi=!0,Fr=!0)}if(mt.needsLights&&(hn.state.directionalShadowMap.length>0&&te.setValue(L,"directionalShadowMap",hn.state.directionalShadowMap,_),hn.state.spotShadowMap.length>0&&te.setValue(L,"spotShadowMap",hn.state.spotShadowMap,_),hn.state.pointShadowMap.length>0&&te.setValue(L,"pointShadowMap",hn.state.pointShadowMap,_)),z.isSkinnedMesh){te.setOptional(L,z,"bindMatrix"),te.setOptional(L,z,"bindMatrixInverse");let ne=z.skeleton;ne&&(ne.boneTexture===null&&ne.computeBoneTexture(),te.setValue(L,"boneTexture",ne.boneTexture,_))}z.isBatchedMesh&&(te.setOptional(L,z,"batchingTexture"),te.setValue(L,"batchingTexture",z._matricesTexture,_),te.setOptional(L,z,"batchingIdTexture"),te.setValue(L,"batchingIdTexture",z._indirectTexture,_),te.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&te.setValue(L,"batchingColorTexture",z._colorsTexture,_));let Bi=V.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&Ct.update(z,V,Tn),(Oi||mt.receiveShadow!==z.receiveShadow)&&(mt.receiveShadow=z.receiveShadow,te.setValue(L,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null&&(Se.envMapIntensity.value=N.environmentIntensity),Se.dfgLUT!==void 0&&(Se.dfgLUT.value=D2()),Oi){if(te.setValue(L,"toneMappingExposure",I.toneMappingExposure),mt.needsLights&&cm(Se,Fr),ut&&B.fog===!0&&W.refreshFogUniforms(Se,ut),W.refreshMaterialUniforms(Se,B,Dt,Zt,T.state.transmissionRenderTarget[y.id]),mt.needsLights&&mt.lightProbeGrid){let ne=mt.lightProbeGrid;Se.probesSH.value=ne.texture,Se.probesMin.value.copy(ne.boundingBox.min),Se.probesMax.value.copy(ne.boundingBox.max),Se.probesResolution.value.copy(ne.resolution)}as.upload(L,Hh(mt),Se,_)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(as.upload(L,Hh(mt),Se,_),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&te.setValue(L,"center",z.center),te.setValue(L,"modelViewMatrix",z.modelViewMatrix),te.setValue(L,"normalMatrix",z.normalMatrix),te.setValue(L,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let ne=B.uniformsGroups;for(let zi=0,Or=ne.length;zi<Or;zi++){let Wh=ne[zi];X.update(Wh,Tn),X.bind(Wh,Tn)}}return Tn}function cm(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function lm(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,N,V){let B=b.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),b.get(y.texture).__webglTexture=N,b.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){let V=b.get(y);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};let hm=L.createFramebuffer();this.setRenderTarget=function(y,N=0,V=0){U=y,H=N,$=V;let B=null,z=!1,ut=!1;if(y){let ht=b.get(y);if(ht.__useDefaultFramebuffer!==void 0){at.bindFramebuffer(L.FRAMEBUFFER,ht.__webglFramebuffer),j.copy(y.viewport),Q.copy(y.scissor),lt=y.scissorTest,at.viewport(j),at.scissor(Q),at.setScissorTest(lt),k=-1;return}else if(ht.__webglFramebuffer===void 0)_.setupRenderTarget(y);else if(ht.__hasExternalTextures)_.rebindTextures(y,b.get(y.texture).__webglTexture,b.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Lt=y.depthTexture;if(ht.__boundDepthTexture!==Lt){if(Lt!==null&&b.has(Lt)&&(y.width!==Lt.image.width||y.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(y)}}let vt=y.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ut=!0);let Mt=b.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Mt[N])?B=Mt[N][V]:B=Mt[N],z=!0):y.samples>0&&_.useMultisampledRTT(y)===!1?B=b.get(y).__webglMultisampledFramebuffer:Array.isArray(Mt)?B=Mt[V]:B=Mt,j.copy(y.viewport),Q.copy(y.scissor),lt=y.scissorTest}else j.copy(it).multiplyScalar(Dt).floor(),Q.copy(Tt).multiplyScalar(Dt).floor(),lt=Pt;if(V!==0&&(B=hm),at.bindFramebuffer(L.FRAMEBUFFER,B)&&at.drawBuffers(y,B),at.viewport(j),at.scissor(Q),at.setScissorTest(lt),z){let ht=b.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ht.__webglTexture,V)}else if(ut){let ht=N;for(let vt=0;vt<y.textures.length;vt++){let Mt=b.get(y.textures[vt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+vt,Mt.__webglTexture,V,ht)}}else if(y!==null&&V!==0){let ht=b.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ht.__webglTexture,V)}k=-1},this.readRenderTargetPixels=function(y,N,V,B,z,ut,_t,ht=0){if(!(y&&y.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=b.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_t!==void 0&&(vt=vt[_t]),vt){at.bindFramebuffer(L.FRAMEBUFFER,vt);try{let Mt=y.textures[ht],Lt=Mt.format,Ft=Mt.type;if(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ht),!ee.textureFormatReadable(Lt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ft)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-B&&V>=0&&V<=y.height-z&&L.readPixels(N,V,B,z,R.convert(Lt),R.convert(Ft),ut)}finally{let Mt=U!==null?b.get(U).__webglFramebuffer:null;at.bindFramebuffer(L.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(y,N,V,B,z,ut,_t,ht=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=b.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_t!==void 0&&(vt=vt[_t]),vt)if(N>=0&&N<=y.width-B&&V>=0&&V<=y.height-z){at.bindFramebuffer(L.FRAMEBUFFER,vt);let Mt=y.textures[ht],Lt=Mt.format,Ft=Mt.type;if(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ht),!ee.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let St=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,St),L.bufferData(L.PIXEL_PACK_BUFFER,ut.byteLength,L.STREAM_READ),L.readPixels(N,V,B,z,R.convert(Lt),R.convert(Ft),0);let jt=U!==null?b.get(U).__webglFramebuffer:null;at.bindFramebuffer(L.FRAMEBUFFER,jt);let be=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await $u(L,be,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,St),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ut),L.deleteBuffer(St),L.deleteSync(be),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,V=0){let B=Math.pow(2,-V),z=Math.floor(y.image.width*B),ut=Math.floor(y.image.height*B),_t=N!==null?N.x:0,ht=N!==null?N.y:0;_.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,_t,ht,z,ut),at.unbindTexture()};let um=L.createFramebuffer(),fm=L.createFramebuffer();this.copyTextureToTexture=function(y,N,V=null,B=null,z=0,ut=0){let _t,ht,vt,Mt,Lt,Ft,St,jt,be,_e=y.isCompressedTexture?y.mipmaps[ut]:y.image;if(V!==null)_t=V.max.x-V.min.x,ht=V.max.y-V.min.y,vt=V.isBox3?V.max.z-V.min.z:1,Mt=V.min.x,Lt=V.min.y,Ft=V.isBox3?V.min.z:0;else{let Se=Math.pow(2,-z);_t=Math.floor(_e.width*Se),ht=Math.floor(_e.height*Se),y.isDataArrayTexture?vt=_e.depth:y.isData3DTexture?vt=Math.floor(_e.depth*Se):vt=1,Mt=0,Lt=0,Ft=0}B!==null?(St=B.x,jt=B.y,be=B.z):(St=0,jt=0,be=0);let Qt=R.convert(N.format),Ve=R.convert(N.type),mt;N.isData3DTexture?(_.setTexture3D(N,0),mt=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(_.setTexture2DArray(N,0),mt=L.TEXTURE_2D_ARRAY):(_.setTexture2D(N,0),mt=L.TEXTURE_2D),at.activeTexture(L.TEXTURE0),at.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),at.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),at.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let hn=at.getParameter(L.UNPACK_ROW_LENGTH),$t=at.getParameter(L.UNPACK_IMAGE_HEIGHT),Tn=at.getParameter(L.UNPACK_SKIP_PIXELS),Wn=at.getParameter(L.UNPACK_SKIP_ROWS),Oi=at.getParameter(L.UNPACK_SKIP_IMAGES);at.pixelStorei(L.UNPACK_ROW_LENGTH,_e.width),at.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_e.height),at.pixelStorei(L.UNPACK_SKIP_PIXELS,Mt),at.pixelStorei(L.UNPACK_SKIP_ROWS,Lt),at.pixelStorei(L.UNPACK_SKIP_IMAGES,Ft);let Fr=y.isDataArrayTexture||y.isData3DTexture,te=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){let Se=b.get(y),Bi=b.get(N),ne=b.get(Se.__renderTarget),zi=b.get(Bi.__renderTarget);at.bindFramebuffer(L.READ_FRAMEBUFFER,ne.__webglFramebuffer),at.bindFramebuffer(L.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Or=0;Or<vt;Or++)Fr&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(y).__webglTexture,z,Ft+Or),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(N).__webglTexture,ut,be+Or)),L.blitFramebuffer(Mt,Lt,_t,ht,St,jt,_t,ht,L.DEPTH_BUFFER_BIT,L.NEAREST);at.bindFramebuffer(L.READ_FRAMEBUFFER,null),at.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||b.has(y)){let Se=b.get(y),Bi=b.get(N);at.bindFramebuffer(L.READ_FRAMEBUFFER,um),at.bindFramebuffer(L.DRAW_FRAMEBUFFER,fm);for(let ne=0;ne<vt;ne++)Fr?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.__webglTexture,z,Ft+ne):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Se.__webglTexture,z),te?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Bi.__webglTexture,ut,be+ne):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Bi.__webglTexture,ut),z!==0?L.blitFramebuffer(Mt,Lt,_t,ht,St,jt,_t,ht,L.COLOR_BUFFER_BIT,L.NEAREST):te?L.copyTexSubImage3D(mt,ut,St,jt,be+ne,Mt,Lt,_t,ht):L.copyTexSubImage2D(mt,ut,St,jt,Mt,Lt,_t,ht);at.bindFramebuffer(L.READ_FRAMEBUFFER,null),at.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else te?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(mt,ut,St,jt,be,_t,ht,vt,Qt,Ve,_e.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(mt,ut,St,jt,be,_t,ht,vt,Qt,_e.data):L.texSubImage3D(mt,ut,St,jt,be,_t,ht,vt,Qt,Ve,_e):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ut,St,jt,_t,ht,Qt,Ve,_e.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ut,St,jt,_e.width,_e.height,Qt,_e.data):L.texSubImage2D(L.TEXTURE_2D,ut,St,jt,_t,ht,Qt,Ve,_e);at.pixelStorei(L.UNPACK_ROW_LENGTH,hn),at.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$t),at.pixelStorei(L.UNPACK_SKIP_PIXELS,Tn),at.pixelStorei(L.UNPACK_SKIP_ROWS,Wn),at.pixelStorei(L.UNPACK_SKIP_IMAGES,Oi),ut===0&&N.generateMipmaps&&L.generateMipmap(mt),at.unbindTexture()},this.initRenderTarget=function(y){b.get(y).__webglFramebuffer===void 0&&_.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?_.setTextureCube(y,0):y.isData3DTexture?_.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?_.setTexture2DArray(y,0):_.setTexture2D(y,0),at.unbindTexture()},this.resetState=function(){H=0,$=0,U=null,at.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ot._getUnpackColorSpace()}};var ni={start:360,step:5,x:[1299e-7,2321e-7,4149e-7,7416e-7,.001368,.002236,.004243,.00765,.01431,.02319,.04351,.07763,.13438,.21477,.2839,.3285,.34828,.34806,.3362,.3187,.2908,.2511,.19536,.1421,.09564,.05795001,.03201,.0147,.0049,.0024,.0093,.0291,.06327,.1096,.1655,.2257499,.2904,.3597,.4334499,.5120501,.5945,.6784,.7621,.8425,.9163,.9786,1.0263,1.0567,1.0622,1.0456,1.0026,.9384,.8544499,.7514,.6424,.5419,.4479,.3608,.2835,.2187,.1649,.1212,.0874,.0636,.04677,.0329,.0227,.01584,.01135916,.008110916,.005790346,.004109457,.002899327,.00204919,.001439971,.0009999493,.0006900786,.0004760213,.0003323011,.0002348261,.0001661505,117413e-9,8307527e-11,5870652e-11,4150994e-11,2935326e-11,2067383e-11,1455977e-11,1025398e-11,7221456e-12,5085868e-12,3581652e-12,2522525e-12,1776509e-12,1251141e-12],y:[3917e-9,6965e-9,1239e-8,2202e-8,39e-6,64e-6,12e-5,217e-6,396e-6,64e-5,.00121,.00218,.004,.0073,.0116,.01684,.023,.0298,.038,.048,.06,.0739,.09098,.1126,.13902,.1693,.20802,.2586,.323,.4073,.503,.6082,.71,.7932,.862,.9148501,.954,.9803,.9949501,1,.995,.9786,.952,.9154,.87,.8163,.757,.6949,.631,.5668,.503,.4412,.381,.321,.265,.217,.175,.1382,.107,.0816,.061,.04458,.032,.0232,.017,.01192,.00821,.005723,.004102,.002929,.002091,.001484,.001047,74e-5,52e-5,3611e-7,2492e-7,1719e-7,12e-5,848e-7,6e-5,424e-7,3e-5,212e-7,1499e-8,106e-7,74657e-10,52578e-10,37029e-10,26078e-10,18366e-10,12934e-10,91093e-11,64153e-11,45181e-11],z:[6061e-7,.001086,.001946,.003486,.006450001,.01054999,.02005001,.03621,.06785001,.1102,.2074,.3713,.6456,1.0390501,1.3856,1.62296,1.74706,1.7826,1.77211,1.7441,1.6692,1.5281,1.28764,1.0419,.8129501,.6162,.46518,.3533,.272,.2123,.1582,.1117,.07824999,.05725001,.04216,.02984,.0203,.0134,.008749999,.005749999,.0039,.002749999,.0021,.0018,.001650001,.0014,.0011,.001,8e-4,6e-4,34e-5,24e-5,19e-5,1e-4,4999999e-11,3e-5,2e-5,1e-5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};var vc={start:300,step:1,values:[.0341,.36014,.68618,1.01222,1.33826,1.6643,1.99034,2.31638,2.64242,2.96846,3.2945,4.98865,6.6828,8.37695,10.0711,11.7652,13.4594,15.1535,16.8477,18.5418,20.236,21.9177,23.5995,25.2812,26.963,28.6447,30.3265,32.0082,33.69,35.3717,37.0535,37.343,37.6326,37.9221,38.2116,38.5011,38.7907,39.0802,39.3697,39.6593,39.9488,40.4451,40.9414,41.4377,41.934,42.4302,42.9265,43.4228,43.9191,44.4154,44.9117,45.0844,45.257,45.4297,45.6023,45.775,45.9477,46.1203,46.293,46.4656,46.6383,47.1834,47.7285,48.2735,48.8186,49.3637,49.9088,50.4539,50.9989,51.544,52.0891,51.8777,51.6664,51.455,51.2437,51.0323,50.8209,50.6096,50.3982,50.1869,49.9755,50.4428,50.91,51.3773,51.8446,52.3118,52.7791,53.2464,53.7137,54.1809,54.6482,57.4589,60.2695,63.0802,65.8909,68.7015,71.5122,74.3229,77.1336,79.9442,82.7549,83.628,84.5011,85.3742,86.2473,87.1204,87.9936,88.8667,89.7398,90.6129,91.486,91.6806,91.8752,92.0697,92.2643,92.4589,92.6535,92.8481,93.0426,93.2372,93.4318,92.7568,92.0819,91.4069,90.732,90.057,89.3821,88.7071,88.0322,87.3572,86.6823,88.5006,90.3188,92.1371,93.9554,95.7736,97.5919,99.4102,101.228,103.047,104.865,106.079,107.294,108.508,109.722,110.936,112.151,113.365,114.579,115.794,117.008,117.088,117.169,117.249,117.33,117.41,117.49,117.571,117.651,117.732,117.812,117.517,117.222,116.927,116.632,116.336,116.041,115.746,115.451,115.156,114.861,114.967,115.073,115.18,115.286,115.392,115.498,115.604,115.711,115.817,115.923,115.212,114.501,113.789,113.078,112.367,111.656,110.945,110.233,109.522,108.811,108.865,108.92,108.974,109.028,109.082,109.137,109.191,109.245,109.3,109.354,109.199,109.044,108.888,108.733,108.578,108.423,108.268,108.112,107.957,107.802,107.501,107.2,106.898,106.597,106.296,105.995,105.694,105.392,105.091,104.79,105.08,105.37,105.66,105.95,106.239,106.529,106.819,107.109,107.399,107.689,107.361,107.032,106.704,106.375,106.047,105.719,105.39,105.062,104.733,104.405,104.369,104.333,104.297,104.261,104.225,104.19,104.154,104.118,104.082,104.046,103.641,103.237,102.832,102.428,102.023,101.618,101.214,100.809,100.405,100,99.6334,99.2668,98.9003,98.5337,98.1671,97.8005,97.4339,97.0674,96.7008,96.3342,96.2796,96.225,96.1703,96.1157,96.0611,96.0065,95.9519,95.8972,95.8426,95.788,95.0778,94.3675,93.6573,92.947,92.2368,91.5266,90.8163,90.1061,89.3958,88.6856,88.8177,88.9497,89.0818,89.2138,89.3459,89.478,89.61,89.7421,89.8741,90.0062,89.9655,89.9248,89.8841,89.8434,89.8026,89.7619,89.7212,89.6805,89.6398,89.5991,89.4091,89.219,89.029,88.8389,88.6489,88.4589,88.2688,88.0788,87.8887,87.6987,87.2577,86.8167,86.3757,85.9347,85.4936,85.0526,84.6116,84.1706,83.7296,83.2886,83.3297,83.3707,83.4118,83.4528,83.4939,83.535,83.576,83.6171,83.6581,83.6992,83.332,82.9647,82.5975,82.2302,81.863,81.4958,81.1285,80.7613,80.394,80.0268,80.0456,80.0644,80.0831,80.1019,80.1207,80.1395,80.1583,80.177,80.1958,80.2146,80.4209,80.6272,80.8336,81.0399,81.2462,81.4525,81.6588,81.8652,82.0715,82.2778,81.8784,81.4791,81.0797,80.6804,80.281,79.8816,79.4823,79.0829,78.6836,78.2842,77.4279,76.5716,75.7153,74.859,74.0027,73.1465,72.2902,71.4339,70.5776,69.7213,69.9101,70.0989,70.2876,70.4764,70.6652,70.854,71.0428,71.2315,71.4203,71.6091,71.8831,72.1571,72.4311,72.7051,72.979,73.253,73.527,73.801,74.075,74.349,73.0745,71.8,70.5255,69.251,67.9765,66.702,65.4275,64.153,62.8785,61.604,62.4322,63.2603,64.0885,64.9166,65.7448,66.573,67.4011,68.2293,69.0574,69.8856,70.4057,70.9259,71.446,71.9662,72.4863,73.0064,73.5266,74.0467,74.5669,75.087,73.9376,72.7881,71.6387,70.4893,69.3398,68.1904,67.041,65.8916,64.7421,63.5927,61.8752,60.1578,58.4403,56.7229,55.0054,53.288,51.5705,49.8531,48.1356,46.4182,48.4569,50.4956,52.5344,54.5731,56.6118,58.6505,60.6892,62.728,64.7667,66.8054,66.4631,66.1209,65.7786,65.4364,65.0941,64.7518,64.4096,64.0673,63.7251,63.3828,63.4749,63.567,63.6592,63.7513,63.8434,63.9355,64.0276,64.1198,64.2119,64.304,63.8188,63.3336,62.8484,62.3632,61.8779,61.3927,60.9075,60.4223,59.9371,59.4519,58.7026,57.9533,57.204,56.4547,55.7054,54.9562,54.2069,53.4576,52.7083,51.959,52.5072,53.0553,53.6035,54.1516,54.6998,55.248,55.7961,56.3443,56.8924,57.4406,57.7278,58.015,58.3022,58.5894,58.8765,59.1637,59.4509,59.7381,60.0253,60.3125]};function Lr(n,t=[0,0,0]){let e=n[0],i=n[1];return t[0]=e/i,t[1]=1,t[2]=(1-e-i)/i,t}var L0={A:[.44757,.40745],B:[.34842,.35161],C:[.31006,.31616],D50:[.34567,.3585],D55:[.33242,.34743],D65:[.31272,.32903],D75:[.29902,.31485],E:[1/3,1/3],F2:[.37208,.37529],F7:[.31292,.32933],F11:[.38052,.37713]},ye=[.3127,.329],Ye=[.3457,.3585],Fe=Lr(ye),Vn=Lr(Ye);var ii={bradford:[.8951,.2664,-.1614,-.7502,1.7135,.0367,.0389,-.0685,1.0296],cat02:[.7328,.4296,-.1624,-.7036,1.6975,.0061,.003,.0136,.9834],cat16:[.401288,.650173,-.051461,-.250268,1.204414,.045854,-.002079,.048952,.953127],vonkries:[.40024,.7076,-.08081,-.2263,1.16532,.0457,0,0,.91822],"xyz-scaling":[1,0,0,0,1,0,0,0,1]};function oe(n,t,e=[0,0,0]){let i=t[0],r=t[1],s=t[2];return e[0]=n[0]*i+n[1]*r+n[2]*s,e[1]=n[3]*i+n[4]*r+n[5]*s,e[2]=n[6]*i+n[7]*r+n[8]*s,e}function Ce(n,t,e=new Array(9)){let i=n[0],r=n[1],s=n[2],o=n[3],a=n[4],c=n[5],l=n[6],u=n[7],f=n[8],h=t[0],p=t[1],g=t[2],v=t[3],m=t[4],d=t[5],M=t[6],w=t[7],S=t[8];return e[0]=i*h+r*v+s*M,e[1]=i*p+r*m+s*w,e[2]=i*g+r*d+s*S,e[3]=o*h+a*v+c*M,e[4]=o*p+a*m+c*w,e[5]=o*g+a*d+c*S,e[6]=l*h+u*v+f*M,e[7]=l*p+u*m+f*w,e[8]=l*g+u*d+f*S,e}function ie(n,t=new Array(9)){let e=n[0],i=n[1],r=n[2],s=n[3],o=n[4],a=n[5],c=n[6],l=n[7],u=n[8],f=o*u-a*l,h=a*c-s*u,p=s*l-o*c,g=e*f+i*h+r*p;if(g===0)throw new Error("mat3: singular matrix");let v=1/g;return t[0]=f*v,t[1]=(r*l-i*u)*v,t[2]=(i*a-r*o)*v,t[3]=h*v,t[4]=(e*u-r*c)*v,t[5]=(r*s-e*a)*v,t[6]=p*v,t[7]=(i*c-e*l)*v,t[8]=(e*o-i*s)*v,t}function Tf(n,t,e,i=new Array(9)){return i[0]=n,i[1]=0,i[2]=0,i[3]=0,i[4]=t,i[5]=0,i[6]=0,i[7]=0,i[8]=e,i}function Ef(n){let[t,e]=n.r,[i,r]=n.g,[s,o]=n.b,a=[t/e,i/r,s/o,1,1,1,(1-t-e)/e,(1-i-r)/r,(1-s-o)/o],c=Lr(n.white),l=oe(ie(a),c),u=[l[0]*a[0],l[1]*a[1],l[2]*a[2],l[0]*a[3],l[1]*a[4],l[2]*a[5],l[0]*a[6],l[1]*a[7],l[2]*a[8]];return{toXyz:u,fromXyz:ie(u),whiteXyz:c}}var Af={srgb:{r:[.64,.33],g:[.3,.6],b:[.15,.06],white:ye,transfer:"srgb"},"display-p3":{r:[.68,.32],g:[.265,.69],b:[.15,.06],white:ye,transfer:"srgb"},"a98-rgb":{r:[.64,.33],g:[.21,.71],b:[.15,.06],white:ye,transfer:"a98"},"prophoto-rgb":{r:[.734699,.265301],g:[.159597,.840403],b:[.036598,105e-6],white:Ye,transfer:"prophoto"},rec2020:{r:[.708,.292],g:[.17,.797],b:[.131,.046],white:ye,transfer:"rec2020"},bt709:{r:[.64,.33],g:[.3,.6],b:[.15,.06],white:ye,transfer:"bt709"},"dci-p3":{r:[.68,.32],g:[.265,.69],b:[.15,.06],white:[.314,.351],transfer:"gamma26"},"aces2065-1":{r:[.7347,.2653],g:[0,1],b:[1e-4,-.077],white:[.32168,.33767],transfer:"linear"},acescg:{r:[.713,.293],g:[.165,.83],b:[.128,.044],white:[.32168,.33767],transfer:"linear"}};var ue=.1593017578125,Ze=2523/4096*128,fe=3424/4096,de=2413/4096*32,pe=2392/4096*32;function ls(n){if(n<=0)return 0;let t=Math.pow(n/1e4,ue);return Math.pow((fe+de*t)/(1+pe*t),Ze)}function hs(n){if(n<=0)return 0;let t=Math.pow(n,1/Ze),e=Math.max(t-fe,0);return 1e4*Math.pow(e/(de-pe*t),1/ue)}var gi=1.7*Ze,rr=1.15,sr=.66,Je=-.56,_i=16295499532821565e-27;function yc(n){if(n<=0)return 0;let t=Math.pow(n/1e4,ue);return Math.pow((fe+de*t)/(1+pe*t),gi)}function Mc(n){if(n<=0)return 0;let t=Math.pow(n,1/gi),e=Math.max(t-fe,0);return 1e4*Math.pow(e/(de-pe*t),1/ue)}var Cf=[1688/4096,2146/4096,262/4096,683/4096,2951/4096,462/4096,99/4096,309/4096,3688/4096],ro=[.5,.5,0,6610/4096,-13613/4096,7003/4096,17933/4096,-17390/4096,-543/4096],vn=[.41478972,.579999,.014648,-.20151,1.120649,.0531008,-.0166008,.2648,.6684799],ri=[.5,.5,0,3.524,-4.066708,.542708,.199076,1.096799,-1.295875];function N2(n){let t=Math.abs(n),e=t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);return n<0?-e:e}function U2(n){let t=Math.abs(n),e=t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055;return n<0?-e:e}var xi=563/256;function F2(n){let t=Math.pow(Math.abs(n),xi);return n<0?-t:t}function O2(n){let t=Math.pow(Math.abs(n),1/xi);return n<0?-t:t}var vi=1/512;function B2(n){let t=Math.abs(n),e=t<=16*vi?t/16:Math.pow(t,1.8);return n<0?-e:e}function z2(n){let t=Math.abs(n),e=t>=vi?Math.pow(t,1/1.8):16*t;return n<0?-e:e}var Be=1.09929682680944,yi=.018053968510807;function k2(n){let t=Math.abs(n),e=t<yi*4.5?t/4.5:Math.pow((t+Be-1)/Be,1/.45);return n<0?-e:e}function V2(n){let t=Math.abs(n),e=t<yi?4.5*t:Be*Math.pow(t,.45)-(Be-1);return n<0?-e:e}var ze=1.099,Mi=.018;function G2(n){let t=Math.abs(n),e=t<Mi*4.5?t/4.5:Math.pow((t+ze-1)/ze,1/.45);return n<0?-e:e}function H2(n){let t=Math.abs(n),e=t<Mi?4.5*t:ze*Math.pow(t,.45)-(ze-1);return n<0?-e:e}function $2(n){let t=Math.pow(Math.abs(n),2.6);return n<0?-t:t}function W2(n){let t=Math.pow(Math.abs(n),.3846153846153846);return n<0?-t:t}var so=(Math.log2(Math.pow(2,-16))+9.72)/17.52;function X2(n){return n<(9.72-15)/17.52?(Math.pow(2,n*17.52-9.72)-Math.pow(2,-16))*2:n<(Math.log2(65504)+9.72)/17.52?Math.pow(2,n*17.52-9.72):65504}function q2(n){return n<=0?so:n<Math.pow(2,-15)?(Math.log2(Math.pow(2,-16)+n*.5)+9.72)/17.52:(Math.log2(n)+9.72)/17.52}var bi=10.5402377416545,Si=.0729055341958355;function Y2(n){return n>.155251141552511?Math.pow(2,n*17.52-9.72):(n-Si)/bi}function Z2(n){return n<=.0078125?bi*n+Si:(Math.log2(n)+9.72)/17.52}function J2(n){return hs(n)/203}function K2(n){return ls(n*203)}var Pn=.17883277,wi=1-4*Pn,Ti=.5-Pn*Math.log(4*Pn),yn=3.7743;function j2(n){return n<=0?0:n<=.5?n*n/3*yn:(Math.exp((n-Ti)/Pn)+wi)/12*yn}function Q2(n){if(n<=0)return 0;let t=n/yn;return t<=1/12?Math.sqrt(3*t):Pn*Math.log(12*t-wi)+Ti}var Rf=n=>n,us={srgb:{decode:N2,encode:U2},a98:{decode:F2,encode:O2},prophoto:{decode:B2,encode:z2},rec2020:{decode:k2,encode:V2},bt709:{decode:G2,encode:H2},gamma26:{decode:$2,encode:W2},acescc:{decode:X2,encode:q2},acescct:{decode:Y2,encode:Z2},rec2100pq:{decode:J2,encode:K2},rec2100hlg:{decode:j2,encode:Q2},linear:{decode:Rf,encode:Rf}};var Pf=new Map;function tv(n){let t=Pf.get(n);return t||(t=ie(ii[n]),Pf.set(n,t)),t}var If=new Map;function Lf(n){if(typeof n=="string"){let t=If.get(n);if(!t){let e=L0[n];if(!e)throw new Error(`whitepoint: unknown illuminant "${n}" (have: ${Object.keys(L0).join(", ")})`);If.set(n,t={key:n,xyz:Lr(e)})}return t}return n.length===2?{key:`xy:${n[0]},${n[1]}`,xyz:Lr(n)}:{key:`xyz:${n[0]},${n[1]},${n[2]}`,xyz:n}}var Df=new Map;function rn(n,t,e="bradford"){if(!ii[e])throw new Error(`whitepoint: unknown CAT "${e}" (have: ${Object.keys(ii).join(", ")})`);let i=Lf(n),r=Lf(t),s=`${e}|${i.key}|${r.key}`,o=Df.get(s);if(!o){let a=ii[e],c=oe(a,i.xyz),l=oe(a,r.xyz);o=Ce(Ce(tv(e),Tf(l[0]/c[0],l[1]/c[1],l[2]/c[2])),a),Df.set(s,o)}return o}function sn(n,t,e,i){let{decode:r,encode:s}=us[i],o=t[0],a=t[1],c=t[2],l=t[3],u=t[4],f=t[5],h=t[6],p=t[7],g=t[8],v=e[0],m=e[1],d=e[2],M=e[3],w=e[4],S=e[5],A=e[6],T=e[7],P=e[8];return{id:n,transferName:i,m:{toXyz:t,fromXyz:e},toXyz(x,E=[0,0,0]){let I=r(x[0]),C=r(x[1]),D=r(x[2]);return E[0]=o*I+a*C+c*D,E[1]=l*I+u*C+f*D,E[2]=h*I+p*C+g*D,E},fromXyz(x,E=[0,0,0]){let I=x[0],C=x[1],D=x[2];return E[0]=s(v*I+m*C+d*D),E[1]=s(M*I+w*C+S*D),E[2]=s(A*I+T*C+P*D),E}}}function or(n,t=n){let e=Af[t],{toXyz:i,fromXyz:r}=Ef(e);return e.white!==ye&&(i=Ce(rn(e.white,ye),i),r=ie(i)),{toXyz:i,fromXyz:r,transfer:e.transfer}}var fs=or("srgb"),Nf=or("display-p3"),Uf=or("a98-rgb"),Ff=or("prophoto-rgb"),ds=or("rec2020"),Of=or("dci-p3"),Bf=or("aces2065-1"),ps=or("acescg"),Gt=sn("srgb",fs.toXyz,fs.fromXyz,"srgb"),bc=sn("srgb-linear",fs.toXyz,fs.fromXyz,"linear"),oo=sn("display-p3",Nf.toXyz,Nf.fromXyz,"srgb"),Sc=sn("a98-rgb",Uf.toXyz,Uf.fromXyz,"a98"),wc=sn("prophoto-rgb",Ff.toXyz,Ff.fromXyz,"prophoto"),Ei=sn("rec2020",ds.toXyz,ds.fromXyz,"rec2020"),ms=sn("bt709",fs.toXyz,fs.fromXyz,"bt709"),Tc=sn("dci-p3",Of.toXyz,Of.fromXyz,"gamma26"),Ec=sn("aces2065-1",Bf.toXyz,Bf.fromXyz,"linear"),Ac=sn("acescg",ps.toXyz,ps.fromXyz,"linear"),Cc=sn("acescc",ps.toXyz,ps.fromXyz,"acescc"),Rc=sn("acescct",ps.toXyz,ps.fromXyz,"acescct"),Pc=sn("rec2100-pq",ds.toXyz,ds.fromXyz,"rec2100pq"),Ic=sn("rec2100-hlg",ds.toXyz,ds.fromXyz,"rec2100hlg");var on=Math.PI/180,ar=180/Math.PI;function Mn(n,t=[0,0,0]){let e=n[1],i=n[2],r=Math.atan2(i,e)*ar;return r<0&&(r+=360),t[0]=n[0],t[1]=Math.sqrt(e*e+i*i),t[2]=r,t}function tn(n,t=[0,0,0]){let e=n[2]*on,i=n[1];return t[0]=n[0],t[1]=i*Math.cos(e),t[2]=i*Math.sin(e),t}var ev=216/24389,zf=24389/27,nv=6/29,kf=Fe[0],Vf=Fe[1],Gf=Fe[2],Fc=26/180*Math.PI,Dc=Math.cos(Fc),Nc=Math.sin(Fc),Hf=100/Math.log(139/100);function D0(n){return n>ev?Math.cbrt(n):(zf*n+16)/116}function N0(n){return n>nv?n*n*n:(116*n-16)/zf}function $f(n,t){let e=D0(n[0]/kf),i=D0(n[1]/Vf),r=D0(n[2]/Gf);return t[0]=116*i-16,t[1]=500*(e-i),t[2]=200*(i-r),t}function Wf(n,t){let e=(n[0]+16)/116,i=n[1]/500+e,r=e-n[2]/200;return t[0]=N0(i)*kf,t[1]=N0(e)*Vf,t[2]=N0(r)*Gf,t}var Uc=[0,0,0],Lc=[0,0,0];function Xf(n,t){let e=n[1]*Dc+n[2]*Nc,i=.83*(n[2]*Dc-n[1]*Nc),r=Math.sqrt(e*e+i*i);t[0]=Hf*Math.log(1+.0039*n[0]),t[1]=Math.log(1+.075*r)/.0435;let s=(Math.atan2(i,e)+Fc)/Math.PI*180;return s=(s%360+360)%360,t[2]=r===0?0:s,t}function qf(n,t){t[0]=(Math.exp(n[0]/Hf)-1)/.0039;let e=(Math.exp(.0435*n[1])-1)/.075,i=n[2]/180*Math.PI-Fc,r=e*Math.cos(i),s=e*Math.sin(i);return t[1]=r*Dc-s/.83*Nc,t[2]=r*Nc+s/.83*Dc,t}var Yf={id:"din99o",fromXyz(n,t=[0,0,0]){return Xf($f(n,Uc),Lc),tn(Lc,t)},toXyz(n,t=[0,0,0]){return Mn(n,Lc),Wf(qf(Lc,Uc),t)}},Zf={id:"din99o-lch",fromXyz(n,t=[0,0,0]){return Xf($f(n,Uc),t)},toXyz(n,t=[0,0,0]){return Wf(qf(n,Uc),t)}};var F0=ii.cat16,iv=ie(F0),rv=216/24389,Jf=24389/27;function U0(n){let t=(n+16)/116;return 100*(t>6/29?t*t*t:(116*t-16)/Jf)}function sv(n){let t=n/100;return t>rv?116*Math.cbrt(t)-16:Jf*t}var ov={average:[1,.69,1],dim:[.9,.59,.9],dark:[.8,.525,.8]};function av(n={}){let t=n.white??[Fe[0]*100,100,Fe[2]*100],e=n.adaptingLuminance??200/Math.PI*(U0(50)/100),i=n.backgroundLstar??50,r=ov[n.surround??"average"];if(!r)throw new Error(`whitepoint: unknown surround "${n.surround}" (have: average, dim, dark)`);let[s,o,a]=r,c=oe(F0,t,[0,0,0]),l=n.discounting?1:s*(1-1/3.6*Math.exp((-e-42)/92));l=l>1?1:l<0?0:l;let u=1/(5*e+1),f=u*u*u*u,h=f*e+.1*(1-f)*(1-f)*Math.cbrt(5*e),p=U0(i)/t[1],g=1.48+Math.sqrt(p),v=.725/Math.pow(p,.2),m=[l*(100/c[0])+1-l,l*(100/c[1])+1-l,l*(100/c[2])+1-l],d=(()=>{let M=0,w=[2,1,.05],S=[0,0,0];for(let A=0;A<3;A++){let T=Math.pow(h*m[A]*c[A]/100,.42);S[A]=400*T/(T+27.13),M+=w[A]*S[A]}return M*v})();return{fl:h,fl25:Math.pow(h,.25),n:p,z:g,c:o,nc:a,nbb:v,ncb:v,aw:d,rgbD:m,cz:o*g}}var Gn=av(),bn=[0,0,0];function Kf(n,t=Gn,e=[0,0,0]){oe(F0,n,bn);for(let m=0;m<3;m++){let d=t.rgbD[m]*bn[m],M=Math.pow(t.fl*Math.abs(d)/100,.42);bn[m]=Math.sign(d)*400*M/(M+27.13)}let i=bn[0],r=bn[1],s=bn[2],o=(11*i-12*r+s)/11,a=(i+r-2*s)/9,c=Math.atan2(a,o)*ar;c<0&&(c+=360);let l=(20*i+20*r+21*s)/20,u=(40*i+20*r+s)/20*t.nbb,f=100*Math.pow(u/t.aw,t.cz),h=.25*(Math.cos(c*on+2)+3.8),g=5e4/13*h*t.nc*t.ncb*Math.sqrt(o*o+a*a)/(l+.305),v=Math.pow(g,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73);return e[0]=f,e[1]=v*Math.sqrt(f/100),e[2]=c,e}function jf(n,t=Gn,e=[0,0,0]){let i=n[0],r=n[1],s=n[2];if(i<=0)return e[0]=0,e[1]=0,e[2]=0,e;let o=r===0?0:r/Math.sqrt(i/100),a=Math.pow(o/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),c=s*on,l=.25*(Math.cos(c+2)+3.8),u=t.aw*Math.pow(i/100,1/t.cz),f=5e4/13*l*t.nc*t.ncb,h=u/t.nbb,p=23*(h+.305)*a/(23*f+11*a*Math.cos(c)+108*a*Math.sin(c)),g=p*Math.cos(c),v=p*Math.sin(c);bn[0]=(460*h+451*g+288*v)/1403,bn[1]=(460*h-891*g-261*v)/1403,bn[2]=(460*h-220*g-6300*v)/1403;for(let m=0;m<3;m++){let d=Math.abs(bn[m]),M=Math.max(0,27.13*d/(400-d));bn[m]=Math.sign(bn[m])*(100/t.fl)*Math.pow(M,1/.42)/t.rgbD[m]}return oe(iv,bn,e)}var an=[0,0,0],Oe=[0,0,0],Oc={id:"cam16",fromXyz(n,t=[0,0,0]){return an[0]=n[0]*100,an[1]=n[1]*100,an[2]=n[2]*100,Kf(an,Gn,t)},toXyz(n,t=[0,0,0]){return jf(n,Gn,t),t[0]/=100,t[1]/=100,t[2]/=100,t}},Qf={id:"cam16-ucs",fromXyz(n,t=[0,0,0]){Oc.fromXyz(n,Oe);let e=Oe[1]*Gn.fl25,i=Math.log(1+.0228*e)/.0228,r=Oe[2]*on;return t[0]=1.7*Oe[0]/(1+.007*Oe[0]),t[1]=i*Math.cos(r),t[2]=i*Math.sin(r),t},toXyz(n,t=[0,0,0]){let e=n[0],i=Math.sqrt(n[1]*n[1]+n[2]*n[2]),r=(Math.exp(.0228*i)-1)/.0228;Oe[0]=e/(1.7-.007*e),Oe[1]=r/Gn.fl25;let s=Math.atan2(n[2],n[1])*ar;return s<0&&(s+=360),Oe[2]=s,Oc.toXyz(Oe,t)}},td={id:"hct",fromXyz(n,t=[0,0,0]){return an[0]=n[0]*100,an[1]=n[1]*100,an[2]=n[2]*100,Kf(an,Gn,Oe),t[0]=Oe[2],t[1]=Oe[1],t[2]=sv(an[1]),t},toXyz(n,t=[0,0,0]){let e=n[2];if(e<=0)return t[0]=0,t[1]=0,t[2]=0,t;let i=U0(Math.min(e,100));Oe[1]=n[1],Oe[2]=n[0];let r=0,s=400;for(let o=0;o<48;o++)Oe[0]=.5*(r+s),jf(Oe,Gn,an),an[1]<i?r=Oe[0]:s=Oe[0];return t[0]=an[0]/100,t[1]=an[1]/100,t[2]=an[2]/100,t}};var nd=216/24389,V0=24389/27,B0=Fe[0],ao=Fe[1],id=Fe[2],z0=4*B0/(B0+15*ao+3*id),k0=9*ao/(B0+15*ao+3*id),O0=Gt.m.fromXyz,ed=[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];function rd(n){let t=Math.pow(n+16,3)/1560896,e=t>nd?t:n/V0;for(let i=0;i<3;i++){let r=O0[i*3],s=O0[i*3+1],o=O0[i*3+2];for(let a=0;a<2;a++){let c=(284517*r-94839*o)*e,l=(838422*o+769860*s+731718*r)*n*e-769860*a*n,u=(632260*o-126452*s)*e+126452*a,f=ed[i*2+a];f[0]=c/u,f[1]=l/u}}return ed}function cv(n,t){let e=t*on,i=Math.sin(e),r=Math.cos(e),s=rd(n),o=1/0;for(let a=0;a<6;a++){let c=s[a][1]/(i-s[a][0]*r);c>=0&&c<o&&(o=c)}return o}function lv(n){let t=rd(n),e=1/0;for(let i=0;i<6;i++){let r=Math.abs(t[i][1])/Math.sqrt(t[i][0]*t[i][0]+1);r<e&&(e=r)}return e}function hv(n,t){let e=n[0]+15*n[1]+3*n[2],i=e===0?z0:4*n[0]/e,r=e===0?k0:9*n[1]/e,s=n[1]/ao,o=s>nd?116*Math.cbrt(s)-16:V0*s,a=13*o*(i-z0),c=13*o*(r-k0);t[0]=o,t[1]=Math.sqrt(a*a+c*c);let l=Math.atan2(c,a)*ar;return l<0&&(l+=360),t[2]=t[1]<1e-12?0:l,t}function uv(n,t){let e=n[0];if(e<=1e-8)return t[0]=0,t[1]=0,t[2]=0,t;let i=n[2]*on,r=n[1]*Math.cos(i),s=n[1]*Math.sin(i),o=r/(13*e)+z0,a=s/(13*e)+k0,c=ao*(e>8?Math.pow((e+16)/116,3):e/V0);return t[0]=c*9*o/(4*a),t[1]=c,t[2]=c*(12-3*o-20*a)/(4*a),t}var Sn=[0,0,0];function sd(n,t){return{id:n,toXyz(e,i=[0,0,0]){let r=(e[0]%360+360)%360,s=e[2];return s>99.9999999?(Sn[0]=100,Sn[1]=0):s<1e-8?(Sn[0]=0,Sn[1]=0):(Sn[0]=s,Sn[1]=t(s,r)/100*e[1]),Sn[2]=r,uv(Sn,i)},fromXyz(e,i=[0,0,0]){hv(e,Sn);let r=Sn[0],s;return r>99.9999999||r<1e-8?s=0:s=Sn[1]/t(r,Sn[2])*100,i[0]=Sn[2],i[1]=s,i[2]=r,i}}}var od=sd("hsluv",cv),ad=sd("hpluv",n=>lv(n));var G0=Fe[0]*100,zc=100,H0=Fe[2]*100,cd=175/198.04*(G0+zc),ld=70/218.11*(zc+H0),hd={id:"hunter-lab",fromXyz(n,t=[0,0,0]){let e=n[0]*100,i=n[1]*100,r=n[2]*100,s=i/zc;if(s<=0)return t[0]=0,t[1]=0,t[2]=0,t;let o=Math.sqrt(s);return t[0]=100*o,t[1]=cd*(e/G0-s)/o,t[2]=ld*(s-r/H0)/o,t},toXyz(n,t=[0,0,0]){let e=n[0]/100,i=e*e;return i<=0?(t[0]=0,t[1]=0,t[2]=0,t):(t[0]=G0*(n[1]*e/cd+i)/100,t[1]=zc*i/100,t[2]=H0*(i-n[2]*e/ld)/100,t)}},co=.0037930732552754493,Bc=Math.cbrt(co),ud=[.3,.622,.078,.23,.692,.078,.2434226892454782,.2047674442449682,.5518098665095535],fv=ie(ud),In=[0,0,0],fd={id:"xyb",fromXyz(n,t=[0,0,0]){oe(Gt.m.fromXyz,n,In),oe(ud,In,In);let e=Math.cbrt(In[0]+co)-Bc,i=Math.cbrt(In[1]+co)-Bc,r=Math.cbrt(In[2]+co)-Bc;return t[0]=(e-i)/2,t[1]=(e+i)/2,t[2]=r-(e+i)/2,t},toXyz(n,t=[0,0,0]){let e=i=>{let r=i+Bc;return r*r*r-co};return In[0]=e(n[1]+n[0]),In[1]=e(n[1]-n[0]),In[2]=e(n[2]+n[1]),oe(fv,In,In),oe(Gt.m.toXyz,In,t)}};var dv={601:{kr:.299,kb:.114,base:()=>Gt},709:{kr:.2126,kb:.0722,base:()=>ms},2020:{kr:.2627,kb:.0593,base:()=>Ei}},dd=16/255,pd=219/255,cr=128/255,kc=224/255,si=[0,0,0];function md(n={}){let t=dv[n.matrix];if(!t)throw new Error(`whitepoint: makeYCbCr requires matrix: '601' | '709' | '2020' (got ${JSON.stringify(n.matrix)})`);if(n.range!=="full"&&n.range!=="limited")throw new Error(`whitepoint: makeYCbCr requires range: 'full' | 'limited' (got ${JSON.stringify(n.range)})`);let e=n.range==="limited",{kr:i,kb:r}=t,s=1-i-r,o=t.base();return{id:`ycbcr-${n.matrix}-${n.range}`,toXyz(a,c=[0,0,0]){let l,u,f;e?(l=(a[0]-dd)/pd,u=(a[1]-cr)/kc,f=(a[2]-cr)/kc):(l=a[0],u=a[1]-cr,f=a[2]-cr);let h=l+2*(1-i)*f,p=l+2*(1-r)*u;return si[0]=h,si[1]=(l-i*h-r*p)/s,si[2]=p,o.toXyz(si,c)},fromXyz(a,c=[0,0,0]){o.fromXyz(a,si);let l=i*si[0]+s*si[1]+r*si[2],u=(si[2]-l)/(2*(1-r)),f=(si[0]-l)/(2*(1-i));return e?(c[0]=dd+pd*l,c[1]=cr+kc*u,c[2]=cr+kc*f):(c[0]=l,c[1]=cr+u,c[2]=cr+f),c}}}var gd=md({matrix:"601",range:"full"}),_d=md({matrix:"709",range:"limited"});var xd=[.4122214708,.5363325363,.0514459929,.2119034982,.6806995451,.1073969566,.0883024619,.2817188376,.6299787005],wn=[.2104542553,.793617785,-.0040720468,1.9779984951,-2.428592205,.4505937099,.0259040371,.7827717662,-.808675766];var Ln=Ce(xd,Gt.m.fromXyz),Ke=ie(Ln),me=ie(wn),pv=Ln[0],mv=Ln[1],gv=Ln[2],_v=Ln[3],xv=Ln[4],vv=Ln[5],yv=Ln[6],Mv=Ln[7],bv=Ln[8],Sv=Ke[0],wv=Ke[1],Tv=Ke[2],Ev=Ke[3],Av=Ke[4],Cv=Ke[5],Rv=Ke[6],Pv=Ke[7],Iv=Ke[8],Lv=wn[0],Dv=wn[1],Nv=wn[2],Uv=wn[3],Fv=wn[4],Ov=wn[5],Bv=wn[6],zv=wn[7],kv=wn[8],yd=me[0],Md=me[1],bd=me[2],Sd=me[3],wd=me[4],Td=me[5],Ed=me[6],Ad=me[7],Cd=me[8],Ai={id:"oklab",fromXyz(n,t=[0,0,0]){let e=n[0],i=n[1],r=n[2],s=Math.cbrt(pv*e+mv*i+gv*r),o=Math.cbrt(_v*e+xv*i+vv*r),a=Math.cbrt(yv*e+Mv*i+bv*r);return t[0]=Lv*s+Dv*o+Nv*a,t[1]=Uv*s+Fv*o+Ov*a,t[2]=Bv*s+zv*o+kv*a,t},toXyz(n,t=[0,0,0]){let e=n[0],i=n[1],r=n[2],s=yd*e+Md*i+bd*r,o=Sd*e+wd*i+Td*r,a=Ed*e+Ad*i+Cd*r;return s=s*s*s,o=o*o*o,a=a*a*a,t[0]=Sv*s+wv*o+Tv*a,t[1]=Ev*s+Av*o+Cv*a,t[2]=Rv*s+Pv*o+Iv*a,t}},vd=[0,0,0],Rd={id:"oklch",fromXyz(n,t=[0,0,0]){return Mn(Ai.fromXyz(n,vd),t)},toXyz(n,t=[0,0,0]){return Ai.toXyz(tn(n,vd),t)}};function Vc(n){let t=Ce(n.m.fromXyz,Ke),e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return function(f,h=[0,0,0]){let p=f[0],g=f[1],v=f[2],m=yd*p+Md*g+bd*v,d=Sd*p+wd*g+Td*v,M=Ed*p+Ad*g+Cd*v;return m=m*m*m,d=d*d*d,M=M*M*M,h[0]=e*m+i*d+r*M,h[1]=s*m+o*d+a*M,h[2]=c*m+l*d+u*M,h}}var Vv=216/24389,Nd=24389/27,Gv=6/29,Ci=rn(ye,Ye),Ri=rn(Ye,ye),Hv=Ci[0],$v=Ci[1],Wv=Ci[2],Xv=Ci[3],qv=Ci[4],Yv=Ci[5],Zv=Ci[6],Jv=Ci[7],Kv=Ci[8],jv=Ri[0],Qv=Ri[1],t3=Ri[2],e3=Ri[3],n3=Ri[4],i3=Ri[5],r3=Ri[6],s3=Ri[7],o3=Ri[8],Pd=Vn[0],Id=Vn[1],Ld=Vn[2];function $0(n){return n>Vv?Math.cbrt(n):(Nd*n+16)/116}function W0(n){return n>Gv?n*n*n:(116*n-16)/Nd}var Gc={id:"lab",fromXyz(n,t=[0,0,0]){let e=n[0],i=n[1],r=n[2],s=$0((Hv*e+$v*i+Wv*r)/Pd),o=$0((Xv*e+qv*i+Yv*r)/Id),a=$0((Zv*e+Jv*i+Kv*r)/Ld);return t[0]=116*o-16,t[1]=500*(s-o),t[2]=200*(o-a),t},toXyz(n,t=[0,0,0]){let e=(n[0]+16)/116,i=n[1]/500+e,r=e-n[2]/200,s=W0(i)*Pd,o=W0(e)*Id,a=W0(r)*Ld;return t[0]=jv*s+Qv*o+t3*a,t[1]=e3*s+n3*o+i3*a,t[2]=r3*s+s3*o+o3*a,t}},Dd=[0,0,0],Ud={id:"lch",fromXyz(n,t=[0,0,0]){return Mn(Gc.fromXyz(n,Dd),t)},toXyz(n,t=[0,0,0]){return Gc.toXyz(tn(n,Dd),t)}};function lo(n,t=[0,0,0]){let e=(n[0]%360+360)%360,i=n[1],r=n[2],s=i*Math.min(r,1-r),o=(0+e/30)%12,a=(8+e/30)%12,c=(4+e/30)%12;return t[0]=r-s*Math.max(-1,Math.min(o-3,9-o,1)),t[1]=r-s*Math.max(-1,Math.min(a-3,9-a,1)),t[2]=r-s*Math.max(-1,Math.min(c-3,9-c,1)),t}function lr(n,t=[0,0,0]){let e=n[0],i=n[1],r=n[2],s=Math.max(e,i,r),o=Math.min(e,i,r),a=(s+o)/2,c=s-o,l=0,u=0;return c!==0&&(u=a>.5?c/(2-s-o):c/(s+o),s===e?l=((i-r)/c+(i<r?6:0))*60:s===i?l=((r-e)/c+2)*60:l=((e-i)/c+4)*60),t[0]=l,t[1]=u,t[2]=a,t}function $c(n,t=[0,0,0]){let e=Math.min(n[0],n[1],n[2]),i=1-Math.max(n[0],n[1],n[2]);return lr(n,t),t[1]=e,t[2]=i,t}function Wc(n,t=[0,0,0]){let e=n[1],i=n[2];if(e+i>=1){let s=e/(e+i);return t[0]=s,t[1]=s,t[2]=s,t}lo([n[0],1,.5],t);let r=1-e-i;return t[0]=t[0]*r+e,t[1]=t[1]*r+e,t[2]=t[2]*r+e,t}var Hc=[0,0,0],Fd={id:"hsl",toXyz(n,t=[0,0,0]){return Gt.toXyz(lo(n,Hc),t)},fromXyz(n,t=[0,0,0]){return lr(Gt.fromXyz(n,Hc),t)}},Od={id:"hwb",toXyz(n,t=[0,0,0]){return Gt.toXyz(Wc(n,Hc),t)},fromXyz(n,t=[0,0,0]){return $c(Gt.fromXyz(n,Hc),t)}};var X0={id:"xyz-d65",toXyz(n,t=[0,0,0]){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t},fromXyz(n,t=[0,0,0]){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}},Bd=rn(Ye,ye),zd=rn(ye,Ye),kd={id:"xyz-d50",m:{toXyz:Bd,fromXyz:zd},toXyz(n,t=[0,0,0]){return oe(Bd,n,t)},fromXyz(n,t=[0,0,0]){return oe(zd,n,t)}};var qc=Ce(Cf,Ei.m.fromXyz).map(n=>n*203),q0=ie(qc),Y0=ie(ro),ce=[0,0,0],Gd={id:"ictcp",fromXyz(n,t=[0,0,0]){return oe(qc,n,ce),ce[0]=ls(ce[0]),ce[1]=ls(ce[1]),ce[2]=ls(ce[2]),oe(ro,ce,t)},toXyz(n,t=[0,0,0]){return oe(Y0,n,ce),ce[0]=hs(ce[0]),ce[1]=hs(ce[1]),ce[2]=hs(ce[2]),oe(q0,ce,t)}},Hn=ie(vn),Z0=ie(ri),Xc={id:"jzazbz",fromXyz(n,t=[0,0,0]){let e=Math.max(n[0]*203,0),i=Math.max(n[1]*203,0),r=Math.max(n[2]*203,0),s=rr*e-(rr-1)*r,o=sr*i-(sr-1)*e,a=yc(vn[0]*s+vn[1]*o+vn[2]*r),c=yc(vn[3]*s+vn[4]*o+vn[5]*r),l=yc(vn[6]*s+vn[7]*o+vn[8]*r),u=.5*a+.5*c;return t[0]=(1+Je)*u/(1+Je*u)-_i,t[1]=ri[3]*a+ri[4]*c+ri[5]*l,t[2]=ri[6]*a+ri[7]*c+ri[8]*l,t},toXyz(n,t=[0,0,0]){let e=n[0]+_i,i=e/(1+Je-Je*e);ce[0]=i,ce[1]=n[1],ce[2]=n[2],oe(Z0,ce,ce);let r=Mc(ce[0]),s=Mc(ce[1]),o=Mc(ce[2]),a=Hn[0]*r+Hn[1]*s+Hn[2]*o,c=Hn[3]*r+Hn[4]*s+Hn[5]*o,l=Hn[6]*r+Hn[7]*s+Hn[8]*o,u=(a+(rr-1)*l)/rr,f=(c+(sr-1)*u)/sr;return t[0]=u/203,t[1]=f/203,t[2]=l/203,t}},Vd=[0,0,0],Hd={id:"jzczhz",fromXyz(n,t=[0,0,0]){return Mn(Xc.fromXyz(n,Vd),t)},toXyz(n,t=[0,0,0]){return Xc.toXyz(tn(n,Vd),t)}};var a3=216/24389,$d=24389/27,Pi=rn(ye,Ye),Ii=rn(Ye,ye),j0=Vn[0],ho=Vn[1],Xd=Vn[2],J0=4*j0/(j0+15*ho+3*Xd),K0=9*ho/(j0+15*ho+3*Xd),Dn=[0,0,0],Yc={id:"luv",fromXyz(n,t=[0,0,0]){let e=Pi[0]*n[0]+Pi[1]*n[1]+Pi[2]*n[2],i=Pi[3]*n[0]+Pi[4]*n[1]+Pi[5]*n[2],r=Pi[6]*n[0]+Pi[7]*n[1]+Pi[8]*n[2],s=e+15*i+3*r,o=s===0?J0:4*e/s,a=s===0?K0:9*i/s,c=i/ho,l=c>a3?116*Math.cbrt(c)-16:$d*c;return t[0]=l,t[1]=13*l*(o-J0),t[2]=13*l*(a-K0),t},toXyz(n,t=[0,0,0]){let e=n[0];if(e===0)return t[0]=0,t[1]=0,t[2]=0,t;let i=n[1]/(13*e)+J0,r=n[2]/(13*e)+K0,s=ho*(e>8?Math.pow((e+16)/116,3):e/$d),o=s*9*i/(4*r),a=s*(12-3*i-20*r)/(4*r);return Dn[0]=o,Dn[1]=s,Dn[2]=a,t[0]=Ii[0]*Dn[0]+Ii[1]*Dn[1]+Ii[2]*Dn[2],t[1]=Ii[3]*Dn[0]+Ii[4]*Dn[1]+Ii[5]*Dn[2],t[2]=Ii[6]*Dn[0]+Ii[7]*Dn[1]+Ii[8]*Dn[2],t}},Wd=[0,0,0],qd={id:"lchuv",fromXyz(n,t=[0,0,0]){return Mn(Yc.fromXyz(n,Wd),t)},toXyz(n,t=[0,0,0]){return Yc.toXyz(tn(n,Wd),t)}};var Zc=[0,0,0];function Q0(n,t=[0,0,0]){let e=Math.max(n[0],n[1],n[2]),i=Math.min(n[0],n[1],n[2]);return lr(n,t),t[1]=e===0?0:(e-i)/e,t[2]=e,t}function th(n,t=[0,0,0]){let e=(n[0]%360+360)%360,i=n[1],r=n[2],s=o=>{let a=(o+e/60)%6;return r-r*i*Math.max(0,Math.min(a,4-a,1))};return t[0]=s(5),t[1]=s(3),t[2]=s(1),t}function eh(n,t=[0,0,0]){let e=n[0]+n[1]+n[2],i=Math.min(n[0],n[1],n[2]);return lr(n,t),t[1]=e===0?0:1-3*i/e,t[2]=e/3,t}function nh(n,t=[0,0,0]){let e=(n[0]%360+360)%360,i=n[1],r=n[2],s=Math.abs(e/60%2-1),o=r*(1+i*(3/(2-s)-1)),a=r*(1+i*(3*(1-s)/(2-s)-1)),c=r*(1-i);switch(Math.floor(e/60)%6){case 0:t[0]=o,t[1]=a,t[2]=c;break;case 1:t[0]=a,t[1]=o,t[2]=c;break;case 2:t[0]=c,t[1]=o,t[2]=a;break;case 3:t[0]=c,t[1]=a,t[2]=o;break;case 4:t[0]=a,t[1]=c,t[2]=o;break;default:t[0]=o,t[1]=c,t[2]=a;break}return t}var Yd={id:"hsv",toXyz(n,t=[0,0,0]){return Gt.toXyz(th(n,Zc),t)},fromXyz(n,t=[0,0,0]){return Q0(Gt.fromXyz(n,Zc),t)}},Zd={id:"hsi",toXyz(n,t=[0,0,0]){return Gt.toXyz(nh(n,Zc),t)},fromXyz(n,t=[0,0,0]){return eh(Gt.fromXyz(n,Zc),t)}};function Jd(n,t=1e-6){return n[0]>=-t&&n[0]<=1+t&&n[1]>=-t&&n[1]<=1+t&&n[2]>=-t&&n[2]<=1+t}function Qd(n,t){let e=fo(n);if(!e.m||e.transferName===void 0)throw new Error(`whitepoint: ${t} needs a bounded RGB gamut space (got "${e.id}")`);return e}function ih(n,t=[0,0,0]){return t[0]=n[0]<0?0:n[0]>1?1:n[0],t[1]=n[1]<0?0:n[1]>1?1:n[1],t[2]=n[2]<0?0:n[2]>1?1:n[2],t}var Kd=new Map;function tp(n){let t=Kd.get(n.id);return t||(t={M:Ce(n.m.fromXyz,Ke),al:me[0],am:me[3],as:me[6],l1:me[1],l2:me[2],m1:me[4],m2:me[5],s1:me[7],s2:me[8],whiteOklch:Li([1,1,1],n,"oklch"),cusps:new Map},Kd.set(n.id,t)),t}function jd(n,t,e,i,r,s,o){let a=n.al*r+t*s,c=n.am*r+e*s,l=n.as*r+i*s;a=a*a*a,c=c*c*c,l=l*l*l;let u=n.M;return o[0]=u[0]*a+u[1]*c+u[2]*l,o[1]=u[3]*a+u[4]*c+u[5]*l,o[2]=u[6]*a+u[7]*c+u[8]*l,o}function uo(n,t){let e=Qd(t,"findCusp"),i=tp(e),r=Math.round((n%360+360)%360*100),s=i.cusps.get(r);if(s)return s;let o=n*on,a=Math.cos(o),c=Math.sin(o),l=i.l1*a+i.l2*c,u=i.m1*a+i.m2*c,f=i.s1*a+i.s2*c,h=i.M,p=M=>{let w=i.al+l*M,S=i.am+u*M,A=i.as+f*M;w=w*w*w,S=S*S*S,A=A*A*A;let T=h[0]*w+h[1]*S+h[2]*A,P=h[3]*w+h[4]*S+h[5]*A,x=h[6]*w+h[7]*S+h[8]*A;return[Math.min(T,P,x),Math.max(T,P,x)]},g=0,v=.05;for(;p(v)[0]>0;)if(g=v,v*=2,v>16)throw new Error(`whitepoint: no cusp found for hue ${n} in "${e.id}"`);for(let M=0;M<52;M++){let w=.5*(g+v);p(w)[0]>0?g=w:v=w}let m=g,d=Math.cbrt(1/p(m)[1]);return s=[d,m*d],i.cusps.set(r,s),s}var Jc=[0,0,0];function ep(n,t,e,i=48){if(n<=0||n>=1)return 0;let r=Qd(e,"maxChromaAt"),s=tp(r),o=t*on,a=Math.cos(o),c=Math.sin(o),l=s.l1*a+s.l2*c,u=s.m1*a+s.m2*c,f=s.s1*a+s.s2*c,h=0,p=.05;for(;p<2&&(jd(s,l,u,f,n,p,Jc),!!Jd(Jc,0));)h=p,p*=2;for(let g=0;g<i;g++){let v=.5*(h+p);jd(s,l,u,f,n,v,Jc),Jd(Jc,0)?h=v:p=v}return h}var mo=.206,rh=.03,po=(1+mo)/(1+rh),go=n=>.5*(po*n-mo+Math.sqrt((po*n-mo)*(po*n-mo)+4*rh*po*n)),Qc=n=>(n*n+mo*n)/(po*(n+rh)),c3=Vc(Gt),Kc=[0,0,0],jc=[0,0,0];function np(n,t,e,i){jc[0]=n,jc[1]=e*t,jc[2]=i*t,c3(jc,Kc);let r=Math.max(Kc[0],Kc[1],Kc[2],0);return Math.cbrt(1/r)}function l3(n,t){let e=.11516993+1/(7.4477897+4.1590124*t+n*(-2.19557347+1.75198401*t+n*(-2.13704948-10.02301043*t+n*(-4.24894561+5.38770819*t+4.69891013*n)))),i=.11239642+1/(1.6132032-.68124379*t+n*(.40370612+.90148123*t+n*(-.27087943+.6122399*t+n*(.00299215-.45399568*t-.14661872*n))));return[e,i]}function ip(n,t,e,i){let r=uo(t,Gt),s=ep(n,t,Gt),o=r[1]/r[0],a=r[1]/(1-r[0]),c=s/Math.min(n*o,(1-n)*a),[l,u]=l3(e,i),f=n*l,h=(1-n)*u,p=.9*c*Math.sqrt(Math.sqrt(1/(1/(f*f*f*f)+1/(h*h*h*h))));return f=n*.4,h=(1-n)*.8,[Math.sqrt(1/(1/(f*f)+1/(h*h))),p,s]}function rp(n){let t=Math.atan2(n[2],n[1])*ar;return t<0&&(t+=360),t}function h3(n,t){let e=n[2];if(e>=1-1e-9)return t[0]=1,t[1]=0,t[2]=0,t;if(e<=1e-9)return t[0]=0,t[1]=0,t[2]=0,t;let i=(n[0]%360+360)%360,r=n[1],s=i*on,o=Math.cos(s),a=Math.sin(s),c=Qc(e),[l,u,f]=ip(c,i,o,a),h;if(r<.8){let p=1.25*r,g=.8*l,v=1-g/u;h=p*g/(1-v*p)}else{let p=5*(r-.8),g=u,v=.2*u*u*1.25*1.25/l,m=1-v/(f-u);h=g+p*v/(1-m*p)}return t[0]=c,t[1]=h*o,t[2]=h*a,t}function u3(n,t){let e=n[0],i=Math.sqrt(n[1]*n[1]+n[2]*n[2]);if(e>=1-1e-9)return t[0]=0,t[1]=0,t[2]=1,t;if(e<=1e-9)return t[0]=0,t[1]=0,t[2]=0,t;if(i<1e-12)return t[0]=0,t[1]=0,t[2]=go(e),t;let r=n[1]/i,s=n[2]/i,o=rp(n),[a,c,l]=ip(e,o,r,s),u;if(i<c){let f=.8*a,h=1-f/c;u=i/(f+h*i)*.8}else{let f=c,h=.2*c*c*1.25*1.25/a,p=1-h/(l-c);u=.8+.2*((i-f)/(h+p*(i-f)))}return t[0]=o,t[1]=u,t[2]=go(e),t}function f3(n,t){let e=n[2];if(e<=1e-9)return t[0]=0,t[1]=0,t[2]=0,t;let i=(n[0]%360+360)%360,r=n[1],s=i*on,o=Math.cos(s),a=Math.sin(s),c=uo(i,Gt),l=c[1]/c[0],u=c[1]/(1-c[0]),f=.5,h=1-f/l,p=f+u-u*h*r,g=1-r*f/p,v=r*u*f/p,m=e*g,d=e*v,M=Qc(g),w=v*M/g,S=Qc(m);d=m===0?0:d*S/m,m=S;let A=np(M,w,o,a);return m*=A,d*=A,t[0]=m,t[1]=d*o,t[2]=d*a,t}function d3(n,t){let e=n[0],i=Math.sqrt(n[1]*n[1]+n[2]*n[2]);if(e<=1e-9)return t[0]=0,t[1]=0,t[2]=0,t;if(i<1e-12)return t[0]=0,t[1]=0,t[2]=go(e),t;let r=n[1]/i,s=n[2]/i,o=rp(n),a=uo(o,Gt),c=a[1]/a[0],l=a[1]/(1-a[0]),u=.5,f=1-u/c,h=l/(i+e*l),p=h*e,g=h*i,v=Qc(p),m=g*v/p,d=np(v,m,r,s);return e/=d,i/=d,i=i*go(e)/e,e=go(e),t[0]=o,t[1]=(u+l)*g/(l*u+l*f*g),t[2]=e/p,t}var tl=[0,0,0],sp={id:"okhsl",toXyz(n,t=[0,0,0]){return Ai.toXyz(h3(n,tl),t)},fromXyz(n,t=[0,0,0]){return u3(Ai.fromXyz(n,tl),t)}},op={id:"okhsv",toXyz(n,t=[0,0,0]){return Ai.toXyz(f3(n,tl),t)},fromXyz(n,t=[0,0,0]){return d3(Ai.fromXyz(n,tl),t)}};var sh={srgb:Gt,"srgb-linear":bc,"display-p3":oo,"a98-rgb":Sc,"prophoto-rgb":wc,rec2020:Ei,oklab:Ai,oklch:Rd,lab:Gc,lch:Ud,hsl:Fd,hwb:Od,"xyz-d65":X0,xyz:X0,"xyz-d50":kd,ictcp:Gd,jzazbz:Xc,jzczhz:Hd,luv:Yc,lchuv:qd,hsv:Yd,hsi:Zd,okhsl:sp,okhsv:op,bt709:ms,"dci-p3":Tc,"aces2065-1":Ec,acescg:Ac,acescc:Cc,acescct:Rc,"rec2100-pq":Pc,"rec2100-hlg":Ic,din99o:Yf,"din99o-lch":Zf,cam16:Oc,"cam16-ucs":Qf,hct:td,hsluv:od,hpluv:ad,"hunter-lab":hd,xyb:fd,"ycbcr-601-full":gd,"ycbcr-709-limited":_d};function fo(n){if(typeof n=="string"){let t=sh[n];if(!t)throw new Error(`whitepoint: unknown color space "${n}" (have: ${Object.keys(sh).join(", ")})`);return t}return n}var cp=new Map;function ke(n,t,e){cp.set(n+"|"+t,e)}ke("hsl","srgb",lo);ke("srgb","hsl",lr);ke("hwb","srgb",Wc);ke("srgb","hwb",$c);var lp=[0,0,0];ke("hsl","hwb",(n,t)=>$c(lo(n,lp),t));ke("hwb","hsl",(n,t)=>lr(Wc(n,lp),t));ke("hsv","srgb",th);ke("srgb","hsv",Q0);ke("hsi","srgb",nh);ke("srgb","hsi",eh);ke("oklab","oklch",(n,t)=>Mn(n,t));ke("oklch","oklab",(n,t)=>tn(n,t));ke("lab","lch",(n,t)=>Mn(n,t));ke("lch","lab",(n,t)=>tn(n,t));var p3=[0,0,0];for(let n of[Gt,oo,Ei]){let t=Vc(n),{encode:e}=us[n.transferName],i=(r,s=[0,0,0])=>(t(r,s),s[0]=e(s[0]),s[1]=e(s[1]),s[2]=e(s[2]),s);ke("oklab",n.id,i),ke("oklch",n.id,(r,s=[0,0,0])=>i(tn(r,p3),s))}function m3(n,t){let e=Ce(t.m.fromXyz,n.m.toXyz),i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],c=e[5],l=e[6],u=e[7],f=e[8],{decode:h}=us[n.transferName],{encode:p}=us[t.transferName];return(g,v=[0,0,0])=>{let m=h(g[0]),d=h(g[1]),M=h(g[2]);return v[0]=p(i*m+r*d+s*M),v[1]=p(o*m+a*d+c*M),v[2]=p(l*m+u*d+f*M),v}}var g3=[0,0,0],ap=new WeakMap,hp=null,up=null,fp=null;function _3(n,t){let e=ap.get(n);e===void 0&&ap.set(n,e=new Map);let i=e.get(t);return i===void 0&&(i=cp.get(n.id+"|"+t.id),i===void 0&&(i=n.m&&t.m&&n.transferName!==void 0&&t.transferName!==void 0?m3(n,t):null),e.set(t,i)),hp=n,up=t,fp=i,i}function Li(n,t,e,i=[0,0,0]){let r=typeof t=="string"?fo(t):t,s=typeof e=="string"?fo(e):e;if(r===s)return i[0]=n[0],i[1]=n[1],i[2]=n[2],i;let o=r===hp&&s===up?fp:_3(r,s);return o!==null?o(n,i):s.fromXyz(r.toXyz(n,g3),i)}var Di=ni.x.length,mp=ni.start,gp=ni.step,ah=new Array(Di),gs=new Array(Di),Ur=new Array(Di),_s=new Array(Di);{let n=0;for(let t=0;t<Di;t++){let e=mp+t*gp;ah[t]=(e-595)/235;let i=_o(vc,e);gs[t]=i*ni.x[t],Ur[t]=i*ni.y[t],_s[t]=i*ni.z[t],n+=Ur[t]}for(let t=0;t<Di;t++)gs[t]/=n,Ur[t]/=n,_s[t]/=n}var _p=n=>.5+n/(2*Math.sqrt(1+n*n)),dp=n=>{let t=2*n-1;return t/Math.sqrt(1-t*t)};function pp(n,t,e){t[0]=0,t[1]=0,t[2]=0;for(let i=0;i<9;i++)e[i]=0;for(let i=0;i<Di;i++){let r=ah[i],s=n[0]*r*r+n[1]*r+n[2],o=_p(s);t[0]+=o*gs[i],t[1]+=o*Ur[i],t[2]+=o*_s[i];let a=.5/Math.pow(1+s*s,1.5),c=a*r*r,l=a*r,u=a;e[0]+=c*gs[i],e[1]+=l*gs[i],e[2]+=u*gs[i],e[3]+=c*Ur[i],e[4]+=l*Ur[i],e[5]+=u*Ur[i],e[6]+=c*_s[i],e[7]+=l*_s[i],e[8]+=u*_s[i]}}var hr=[0,0,0],oh=new Array(9),Dr=[0,0,0],Nr=[0,0,0];function x3(n){let[t,e,i]=n;if(e<=1e-6)return[0,0,dp(1e-4)];let s=Math.min(Math.max(e,5e-4),.9995)/e;t*=s,e*=s,i*=s;let o=[0,0,dp(Math.min(Math.max(e,.001),.999))],a=1/0;for(let c=0;c<60&&(pp(o,hr,oh),Nr[0]=hr[0]-t,Nr[1]=hr[1]-e,Nr[2]=hr[2]-i,a=Math.max(Math.abs(Nr[0]),Math.abs(Nr[1]),Math.abs(Nr[2])),!(a<1e-10));c++){oe(ie(oh),Nr,Dr);let l=1;for(let u=0;u<10;u++){let f=[o[0]-l*Dr[0],o[1]-l*Dr[1],o[2]-l*Dr[2]];if(pp(f,hr,oh),Math.max(Math.abs(hr[0]-t),Math.abs(hr[1]-e),Math.abs(hr[2]-i))<a){o[0]=f[0],o[1]=f[1],o[2]=f[2];break}l*=.5,u===9&&(o[0]-=l*Dr[0],o[1]-=l*Dr[1],o[2]-=l*Dr[2])}}return o}var el=new Map;function ch(n,t="srgb"){let e=Li(n,t,"xyz-d65"),i=`${e[0].toFixed(6)},${e[1].toFixed(6)},${e[2].toFixed(6)}`,r=el.get(i);if(r)return r;let s=x3(e),o=new Array(Di);for(let a=0;a<Di;a++){let c=ah[a];o[a]=_p(s[0]*c*c+s[1]*c+s[2])}return r={start:mp,step:gp,values:o},el.size>512&&el.clear(),el.set(i,r),r}var hh={hydrogen:[[383.5397,1969e4,13.4306],[388.9064,2835e4,13.386],[397.0075,4301e4,13.3209],[410.1734,7007e4,13.2207],[434.0472,1265e5,13.0545],[486.1286949,3867e4,12.7485],[486.1297761,1934e4,12.7485],[486.135,2694e5,12.7485],[656.27097,2155e5,12.0875],[656.272483,8979e4,12.0875],[656.277153,449e5,12.0875],[656.279,7938e5,12.0875],[656.285175,3879e5,12.0875]],helium:[[381.96074,536300,24.2092],[381.96074,8044e3,24.2092],[381.96074,4505e4,24.2092],[381.96074,8044e3,24.2092],[381.96074,2413e4,24.2092],[383.3554,4824e3,24.4513],[387.1791,6693e3,24.4194],[388.8648,2842e4,23.0071],[388.8648,4737e4,23.0071],[393.5912,744800,24.3672],[396.47291,2085e4,23.7421],[402.3973,1128e3,24.2983],[402.61914,966700,24.0427],[402.61914,145e5,24.0427],[402.61914,8121e4,24.0427],[402.61914,145e5,24.0427],[402.61914,435e5,24.0427],[412.08154,7421e3,23.972],[412.08154,4453e3,23.972],[414.3761,2441e4,24.2092],[416.8967,183e4,24.1912],[438.79296,4494e4,24.0428],[443.7551,3269e3,24.0112],[447.14802,2048e3,23.7361],[447.14802,3072e4,23.7361],[447.14802,1721e5,23.7361],[447.14802,3072e4,23.7361],[447.14802,9216e4,23.7361],[471.31457,1587e4,23.594],[471.31457,9521e3,23.594],[492.19313,9932e4,23.7363],[501.56783,4012e4,23.087],[504.7738,6771e3,23.6736],[587.5621,8837e4,23.0737],[587.5621,495e6,23.0737],[587.5621,8839e4,23.0737],[587.5621,2651e5,23.0737],[667.8151,3185e5,23.0741],[706.519,4642e4,22.7185],[706.519,2785e4,22.7185],[706.571,9284e3,22.7185],[728.1349,183e5,22.9203]],neon:[[453.63003,1287e3,21.114],[453.76768,2385e3,21.1132],[453.77545,408e4,21.1131],[470.25305,486e3,21.0174],[470.43949,105e5,21.0164],[470.88594,978e4,21.0139],[471.0065,409e4,21.0132],[488.4917,2905e3,21.1132],[488.50971,51e4,21.1131],[495.53905,807e3,21.114],[495.70335,53e5,21.1132],[495.7122,1705e3,21.1131],[500.51587,3059e3,21.1132],[500.53467,765e3,21.1131],[503.13484,938e4,21.0187],[503.15087,49e4,21.0186],[503.60016,104e4,21.0164],[503.75927,1582e3,21.0156],[503.77512,3996e4,21.0155],[507.40459,42e4,21.0187],[507.42007,71e5,21.0186],[507.65971,858e3,21.0174],[507.87693,43e4,21.0164],[508.0383,2373e4,21.0156],[508.39773,375e3,21.0139],[511.36724,2601e3,20.8055],[511.65032,1295e4,20.8042],[511.70246,48e4,20.8039],[512.05059,1041e3,21.114],[512.22565,98e5,21.1132],[512.23613,315e4,21.1131],[514.49384,2303e4,21.1132],[514.51351,3905e3,21.1131],[515.1961,855e4,21.0186],[515.44271,387e4,21.0174],[515.66672,755e3,21.0164],[515.89018,336e4,21.114],[516.34847,408e3,21.0132],[519.13223,2598e3,21.114],[519.31251,4575e3,21.1132],[519.3224,79e5,21.1131],[520.38962,1617e4,21.0187],[520.88648,715e4,21.0164],[521.05672,3066e3,21.0156],[521.43389,1317e3,21.0139],[532.6396,1647e3,20.7087],[533.0672,347e4,21.0186],[533.07775,265e5,20.7068],[533.33083,141e4,21.0174],[533.571,26e4,21.0164],[534.10938,2322e4,20.7023],[534.32834,976e4,20.7014],[535.5164,2345e3,21.0187],[535.53394,59e4,21.0186],[536.04271,945e3,21.0164],[536.22334,483e3,21.0156],[536.62169,261e3,21.0139],[537.4975,1932e3,21.0174],[538.32457,54e4,21.0139],[540.05616,9e5,18.966],[541.2649,1505e3,21.0164],[541.85584,1134e3,21.0139],[542.0155,433e3,21.0132],[543.36513,849e3,20.6628],[544.85091,465e3,20.6566],[556.24416,715e3,20.8042],[556.27662,6916e3,20.804],[556.30531,51e4,20.8039],[565.25664,2211e3,20.8055],[565.60258,183e4,20.8042],[565.66588,1475e4,20.8039],[566.25489,1593e3,20.5706],[568.98163,705e4,20.5601],[571.88798,127e4,20.8042],[571.92248,6888e3,20.804],[571.953,98e4,20.8039],[574.82985,2338e4,20.7114],[574.86446,1265e3,20.7113],[576.05885,253e4,20.7068],[576.40525,385e4,20.7055],[576.44188,1008e5,20.7054],[577.03067,1212e3,21.114],[580.409,1316e3,20.7114],[580.44496,18e6,20.7113],[581.14066,2211e3,20.7087],[581.66219,865e3,20.7068],[582.01558,602e5,20.7055],[582.89063,861e3,20.7023],[585.24878,615e5,18.966],[586.84165,2478e3,20.8055],[587.2145,3345e3,20.8042],[587.28275,3035e4,20.8039],[588.1895,345e5,18.7264],[589.83287,603e3,20.8055],[590.20944,3675e3,20.8042],[590.24623,5992e4,20.804],[590.27835,625e4,20.8039],[590.64294,2255e4,20.7113],[591.3633,957e4,20.7087],[591.89068,891e4,20.8055],[591.9029,2075e3,20.7068],[593.44522,108e4,20.7014],[593.93154,6e5,20.6628],[594.4834,565e5,18.7041],[596.16228,684e4,20.8055],[596.5471,3205e4,20.8042],[596.6179,121e4,20.8039],[597.46273,4242e4,20.7114],[597.55343,1053e4,18.6934],[598.23753,297e3,20.7087],[598.79074,1815e4,20.7068],[599.16477,826e4,20.7055],[600.09275,342e4,20.7023],[602.99968,1683e4,18.7264],[604.2013,468e3,21.0174],[604.61348,678e3,20.6628],[606.45359,164e4,20.6566],[607.43376,603e5,18.7114],[609.6163,905e5,18.7041],[611.80187,1827e3,20.6628],[612.84498,201e4,18.6934],[614.2508,82e5,20.7113],[614.30627,141e6,18.6368],[615.02985,399e4,20.7087],[615.6138,86e4,20.7068],[616.35937,438e5,18.7264],[617.28156,427e3,20.7014],[617.48829,5264e3,20.7114],[617.52842,15e5,20.7113],[618.2146,186e5,20.5601],[618.31575,354e3,20.7087],[618.90649,294e4,20.7068],[619.30663,126e4,20.7055],[620.2974,732e3,20.7023],[620.57775,456e4,20.7087],[621.38758,855e4,20.5706],[621.72812,1911e4,18.6127],[622.5735,1857e3,20.7023],[624.67294,3985e3,20.5601],[625.87884,303e4,20.7068],[626.64952,747e5,18.6934],[627.30141,2982e3,20.7023],[627.60327,125e4,20.7014],[629.37447,1917e3,20.6628],[630.47893,208e5,18.6368],[631.36855,34e5,20.6566],[632.81646,1017e4,20.6628],[633.08894,438e4,20.5706],[633.44276,805e5,18.5758],[635.18532,1035e3,20.6628],[636.49963,8e5,20.5601],[638.29914,963e5,18.6127],[640.1076,417e4,20.6628],[640.2248,3604e5,18.5551],[640.97469,423e4,20.5706],[642.17044,21e5,20.6566],[644.47118,58e5,20.5601],[650.65277,15e7,18.5758],[653.28824,324e5,18.6127],[659.89528,696e5,18.7264],[660.29007,1428e3,20.5706],[664.00095,310500,20.5601],[664.08,11400,20.5706],[665.20925,29e4,18.7114],[666.6892,1071e3,20.5706],[667.82766,1165e5,18.7041],[671.7043,651e5,18.6934],[672.11342,154500,20.5706],[673.8032,375e4,20.8055],[675.95821,8e5,20.5601],[692.94672,87e6,18.6368],[702.405,567e4,18.6127],[703.24128,798e5,18.3816],[705.12922,714e4,20.1395],[705.91079,373e5,20.1375],[706.4762,17e4,20.1361],[711.23075,1884e3,20.7087],[713.854,66e4,20.7023],[717.3938,1435e4,18.5758],[724.51665,303e5,18.3816],[730.48422,765e3,20.6628],[743.88981,741e4,18.3816],[747.24383,888e4,20.0404],[748.88712,1155e5,20.0367],[753.57739,918e5,20.0264],[754.40439,387e5,20.0246],[772.46233,474e3,20.5706]],sodium:[[384.8,168e6,36.3167],[386.55,464e6,36.2591],[387.29,72e6,36.2529],[388.18,163e7,36.2456],[388.57,248e6,36.3286],[390.04,462e6,36.3167],[391.79,528e6,36.2591],[392.56,27e7,36.2529],[393.06,1e8,36.3286],[394.26,84e6,36.2392],[398.03,3e7,36.2529],[399.77,32e6,36.2392],[400.88,3e7,36.2306],[413.082,34480,5.105],[413.082,310200,5.105],[413.584,40400,5.1013],[413.584,363600,5.1013],[413.774,68e3,5.1],[414.184,44800,5.097],[414.184,403200,5.097],[414.403,80200,5.0954],[414.893,56800,5.0919],[414.893,511200,5.0919],[415.175,95600,5.09],[415.74,68400,5.0858],[415.74,618e3,5.0858],[416.057,115200,5.0835],[416.767,83600,5.0785],[416.767,75e4,5.0785],[417.156,140600,5.0757],[417.67,28e7,36.2591],[418.022,103200,5.0695],[418.022,93e4,5.0695],[418.509,174e3,5.0661],[418.55,294e6,36.2529],[419.598,130800,5.0584],[419.598,1176e3,5.0584],[420.216,218e3,5.0541],[420.49,1e8,36.2392],[421.613,168e3,5.0444],[421.613,1512e3,5.0444],[422.381,28e4,5.0389],[424.2082,221600,5.0263],[424.2082,1992e3,5.0263],[425.252,368e3,5.0192],[425.38,3e7,36.2529],[427.3642,1564e3,5.0026],[427.39,64e6,36.2392],[427.6787,312e3,5.0026],[427.6787,2814e3,5.0026],[428.67,56e6,36.2306],[429.1006,494e3,4.993],[432.4615,456e3,4.9706],[432.4615,4104e3,4.9706],[434.1489,652e3,4.9573],[434.4736,13e5,4.9573],[439.0029,3932e3,4.9257],[439.334,702e4,4.9257],[439.334,78e4,4.9257],[441.9885,564e3,4.9067],[442.3246,1122e3,4.9067],[443.23,84e6,35.4967],[449.4177,492e4,4.8603],[449.7658,876e4,4.8603],[449.7658,976e3,4.8603],[454.1633,752e3,4.8315],[454.5186,15e5,4.8315],[466.48107,832e4,4.7594],[466.85595,1656e3,4.7594],[466.85595,1494e4,4.7594],[474.7941,1238e3,4.7129],[475.18218,246e4,4.7129],[497.85414,1636e4,4.592],[498.28134,2928e4,4.592],[507.12,246e6,35.4967],[514.88381,228e4,4.5096],[515.34024,454e4,4.5096],[516.25,9e7,35.4967],[525.64,12e6,35.4967],[562.1,84e6,35.4967],[568.26333,404e5,4.2835],[568.81934,808e4,4.2835],[568.82046,726e5,4.2835],[574.42,24e6,35.4967],[588.995095,2464e5,2.1044],[589.592424,1228e5,2.1023],[615.42253,5e6,4.1164],[616.0747,996e4,4.1164],[737.323,216800,4.8724],[737.349,106e3,4.8724]],argon:[[383.4679,75e4,15.0604],[394.7505,28e4,14.6883],[394.8979,138e4,14.6871],[404.4418,165e4,14.6883],[415.859,7e6,14.5289],[416.418,87e4,14.5249],[418.1884,168e4,14.6871],[419.0713,14e5,14.5061],[419.1029,162e4,14.6807],[419.8317,257e4,14.5759],[420.0674,679e4,14.4991],[425.1185,333e3,14.464],[425.9362,398e4,14.7381],[426.6286,155e4,14.5289],[427.2169,24e5,14.5249],[430.0101,1885e3,14.5061],[433.3561,285e4,14.6883],[433.5338,117e4,14.6871],[434.5168,9e5,14.6807],[451.0733,118e4,14.5759],[452.2323,27e4,14.464],[459.6097,285e3,14.5249],[462.8441,191500,14.5061],[470.2316,327e3,14.464],[515.1391,239e4,15.3132],[516.2285,57e5,15.3081],[518.7746,69e5,15.2963],[522.1271,792e4,15.4497],[542.1352,3e6,15.362],[545.1652,235e4,15.1806],[549.5874,1521e4,15.331],[550.6113,252e4,15.346],[555.8702,71e5,15.1368],[557.2541,462e4,15.3192],[560.6733,66e5,15.1177],[565.0704,32e5,15.1005],[573.952,435e4,15.3127],[583.4263,26e5,15.2963],[586.031,855e3,15.0221],[588.2624,123e4,15.0141],[588.8584,645e4,15.1806],[591.2085,315e4,15.0036],[592.8813,33e5,15.1855],[594.2669,9e5,15.1806],[598.7302,84e4,15.1459],[599.8999,7e5,15.161],[602.515,27e5,15.3594],[603.2127,2214e4,15.1305],[604.3223,1029e4,15.1459],[605.2723,95e4,14.9549],[605.9372,21e5,14.9526],[609.8803,156e4,15.1855],[610.5635,605e4,15.3127],[614.5441,532e4,15.3192],[617.0174,25e5,15.1806],[617.3096,335e4,15.161],[621.2503,273e4,15.1669],[621.5938,285e4,15.2963],[629.6872,45e5,15.2963],[630.7657,3e6,15.1368],[636.9575,126e4,15.1177],[638.4717,1263e3,14.8484],[641.6307,58e5,14.8388],[653.8112,77e4,14.9715],[660.4853,91e3,14.9715],[666.0676,78e4,15.0141],[666.4051,75e4,14.9549],[667.7282,236e3,13.4799],[675.2834,965e4,14.7425],[675.6163,18e5,15.1368],[676.6612,12e5,15.0036],[687.1289,834e4,14.7109],[687.9582,9e5,14.9549],[688.8174,125e4,14.9526],[693.7664,308e4,14.6936],[695.1478,11e5,14.9549],[696.025,12e5,14.9526],[696.5431,192e5,13.3279],[703.0251,1335e4,14.8388],[706.7218,19e6,13.3022],[706.8736,6e6,14.8484],[710.7478,225e4,14.8388],[712.582,18e5,15.0221],[714.7042,189e4,13.2826],[715.8839,21e5,15.0141],[720.698,744e4,15.0221],[726.5172,51e4,14.8592],[727.0664,77e4,14.7805],[727.2936,549e4,13.3279],[731.1716,51e5,14.8484],[731.6005,288e4,15.0221],[735.0814,12e5,15.0141],[735.3293,672e4,14.7805],[737.2118,171e5,14.7571],[738.398,425e5,13.3022],[739.298,216e4,14.8484],[741.2337,195e4,14.9549],[742.5294,217e4,14.9715],[743.5368,45e5,14.8388],[743.6297,135e4,14.7425],[750.3869,45e6,13.4799],[751.4652,4e7,13.273],[763.5106,1225e5,13.1718],[772.3761,156e5,13.1531],[772.4207,351e5,13.3279]],krypton:[[427.396943,995e4,12.8153],[428.296734,531e3,12.8092],[428.648687,3e6,13.454],[430.048652,1599e3,13.4446],[431.85524,2565e3,12.7854],[431.95795,875e4,12.7847],[435.135969,222e4,13.4922],[436.264157,1284e3,12.7564],[437.612159,374e4,12.8648],[439.996634,63e5,13.4607],[441.03681,84e4,13.454],[442.519007,1815e3,13.4446],[445.391749,1985e3,12.8153],[446.369,3543e3,12.8092],[450.235427,39e5,12.7854],[455.02985,21900,12.7564],[551.66665,46200,12.8092],[556.222534,55e4,12.1437],[557.028944,294e4,12.1404],[558.038729,6e5,12.8648],[564.956177,387e3,12.7564],[567.24509,45e3,12.1004],[570.75129,129500,12.8153],[572.356,24900,12.8092],[578.38938,2058e3,13.5861],[578.729,15500,12.7854],[578.824,1449e3,13.5861],[580.554126,45e5,13.5797],[581.08,525e3,13.4365],[582.707,39e5,13.4306],[586.675017,591e3,12.7564],[587.091599,355e4,12.1437],[587.990035,165e3,12.1404],[599.38502,15e4,12.1004],[601.21555,1195e4,13.3651],[605.612628,195e5,13.3501],[607.52551,1211e4,13.5861],[608.286117,71e5,13.3411],[622.273337,477e4,13.4365],[623.635161,745e4,13.4306],[624.140471,1495e3,13.4306],[634.668195,434e4,13.396],[635.191539,1414e3,13.396],[636.83212,435e3,13.3894],[637.359016,46e5,13.3894],[641.567923,427e4,13.375],[642.1027,2653e4,13.375],[644.879938,154e4,13.3651],[645.419,385e3,13.3651],[645.628888,5985e4,13.3629],[648.806917,267e4,13.4365],[650.490424,99e4,13.3501],[650.83693,525e3,13.4306],[653.65517,288e4,13.4224],[655.569463,96e4,13.4365],[657.64204,395e4,13.4306],[665.223475,109e5,13.3894],[669.92296,1176e4,13.396],[672.3344,655e3,13.3894],[674.00985,335e4,13.3651],[679.54104,393e3,13.3501],[681.310882,1285e4,13.3651],[682.90888,177e4,13.3411],[684.64003,99e4,13.1139],[686.96308,666e4,13.3501],[690.46787,795e4,13.0986],[700.079,123e4,13.4365],[705.727,48e5,13.4224],[714.345,385e3,13.0386],[715.221,996e3,13.0365],[722.4103,149e5,13.0192],[728.7262,891e4,13.0044],[735.996,234e4,13.3501],[742.554,765e4,13.1139],[748.6862,1445e4,13.0986],[749.415,305e4,13.0986],[758.74136,431e5,11.666],[760.15457,1366e5,11.5458],[768.52459,4064e4,12.2565],[769.45401,1281e4,11.5261],[774.137,322e4,13.0442],[774.6828,118e5,12.9035],[774.916,644e3,13.0442],[776.843,515e3,13.0386],[777.628,44e5,13.0386]],xenon:[[395.0924,28e5,11.4525],[396.75411,371e4,11.4394],[397.4417,7e5,11.434],[419.3528,154e4,11.271],[420.3695,55e4,11.2639],[450.0978,438e4,11.0691],[452.46805,23e5,11.0547],[458.27472,13e5,11.1412],[461.18882,9e4,11.0029],[462.42756,121e5,10.9957],[467.12258,1743e4,10.9688],[469.097,84e4,10.9576],[469.70208,368e4,10.9542],[473.41518,69e5,11.0547],[479.2619,36e4,10.9016],[480.7019,429e4,11.015],[482.9708,18e5,11.0029],[484.32934,351e4,10.9957],[491.6507,48e5,10.9576],[492.3152,487e4,10.9542],[502.82794,48e4,10.9016],[520.607,55e4,11.961],[530.637,8e5,11.916],[545.645,132e3,11.8518],[546.0037,125e4,11.8503],[553.278,9e5,11.961],[555.728,3e5,11.916],[564.619,135e4,11.916],[570.687,21e4,11.7521],[571.5716,175e4,11.7487],[572.214,108e4,11.8518],[572.61,45e4,11.8503],[579.226,45e4,11.961],[582.052,2e6,11.8503],[591.665,65e4,11.916],[599.8115,174e4,11.7521],[600.7909,8e5,11.7487],[600.978,63e4,11.8518],[601.41,65e3,11.8503],[610.388,36e4,11.8518],[610.837,9e5,11.8503],[611.1951,35e5,11.7487],[618.91,39e4,11.5829],[619.826,33e5,11.5799],[631.497,93e4,11.7521],[632.581,105e3,11.7487],[643.0155,15e5,11.7487],[646.15,36e4,11.8518],[648.7765,47e5,11.4907],[653.3159,309e4,11.5829],[654.336,135e4,11.5799],[666.6965,55e5,11.5799],[681.564,63e4,11.7521],[686.6838,46e5,11.4907],[688.2155,4081e4,11.4867],[691.082,222e4,11.5829],[692.222,15e4,11.5799],[697.6182,1337e4,11.4975],[701.902,245e4,11.4867],[703.553,12e5,11.5829],[704.737,32e5,11.5799],[711.9598,7551e4,11.4617],[728.5301,2045e4,11.4907],[731.687,75e4,11.2742],[738.6003,625e4,11.2583],[739.3793,3423e4,11.4975],[742.405,43e5,11.4907],[744.194,329e4,11.4867],[751.496,63e4,11.5829],[764.2024,63e6,11.0691]],mercury:[[404.6565,621e5,7.7305],[407.7837,4e6,7.9261],[410.8054,22e5,9.7209],[433.92232,145e5,9.5601],[434.74945,42e6,9.5547],[435.8335,168e6,7.7305],[491.6068,58e5,9.225],[502.56,80100,9.17],[546.075,147e6,7.7305],[576.961,118e6,8.852],[578.969,18e5,8.8445],[579.067,155e6,8.8442],[607.264,18e4,9.7716],[623.436,9e5,9.9143],[671.634,72e4,9.7716],[690.746,8e6,9.5249],[772.8825,18e5,9.5298]]};var xp={start:360,step:1,x:[1299e-7,145847e-9,.0001638021,.0001840037,.0002066902,2321e-7,260728e-9,293075e-9,329388e-9,369914e-9,4149e-7,.0004641587,518986e-9,581854e-9,.0006552347,7416e-7,.0008450296,.0009645268,.001094949,.001231154,.001368,.00150205,.001642328,.001802382,.001995757,.002236,.002535385,.002892603,.003300829,.003753236,.004243,.004762389,.005330048,.005978712,.006741117,.00765,.008751373,.01002888,.0114217,.01286901,.01431,.01570443,.01714744,.01878122,.02074801,.02319,.02620736,.02978248,.03388092,.03846824,.04351,.0489956,.0550226,.0617188,.069212,.07763,.08695811,.09717672,.1084063,.1207672,.13438,.1493582,.1653957,.1819831,.198611,.21477,.2301868,.2448797,.2587773,.2718079,.2839,.2949438,.3048965,.3137873,.3216454,.3285,.3343513,.3392101,.3431213,.3461296,.34828,.3495999,.3501474,.350013,.349287,.34806,.3463733,.3442624,.3418088,.3390941,.3362,.3331977,.3300411,.3266357,.3228868,.3187,.3140251,.308884,.3032904,.2972579,.2908,.2839701,.2767214,.2689178,.2604227,.2511,.2408475,.2298512,.2184072,.2068115,.19536,.1842136,.1733273,.1626881,.1522833,.1421,.1321786,.1225696,.1132752,.1042979,.09564,.08729955,.07930804,.07171776,.06458099,.05795001,.05186211,.04628152,.04115088,.03641283,.03201,.0279172,.0241444,.020687,.0175404,.0147,.01216179,.00991996,.00796724,.006296346,.0049,.003777173,.00294532,.00242488,.002236293,.0024,.00292552,.00383656,.00517484,.00698208,.0093,.01214949,.01553588,.01947752,.02399277,.0291,.03481485,.04112016,.04798504,.05537861,.06327,.07163501,.08046224,.08973996,.09945645,.1096,.1201674,.1311145,.1423679,.1538542,.1655,.1772571,.18914,.2011694,.2133658,.2257499,.2383209,.2510668,.2639922,.2771017,.2904,.3038912,.3175726,.3314384,.3454828,.3597,.3740839,.3886396,.4033784,.4183115,.4334499,.4487953,.464336,.480064,.4959713,.5120501,.5282959,.5446916,.5612094,.5778215,.5945,.6112209,.6279758,.6447602,.6615697,.6784,.6952392,.7120586,.7288284,.7455188,.7621,.7785432,.7948256,.8109264,.8268248,.8425,.8579325,.8730816,.8878944,.9023181,.9163,.9297995,.9427984,.9552776,.9672179,.9786,.9893856,.9995488,1.0090892,1.0180064,1.0263,1.0339827,1.040986,1.047188,1.0524667,1.0567,1.0597944,1.0617992,1.0628068,1.0629096,1.0622,1.0607352,1.0584436,1.0552244,1.0509768,1.0456,1.0390369,1.0313608,1.0226662,1.0130477,1.0026,.9913675,.9793314,.9664916,.9528479,.9384,.923194,.907244,.890502,.87292,.8544499,.835084,.814946,.794186,.772954,.7514,.7295836,.7075888,.6856022,.6638104,.6424,.6215149,.6011138,.5811052,.5613977,.5419,.5225995,.5035464,.4847436,.4661939,.4479,.4298613,.412098,.394644,.3775333,.3608,.3444563,.3285168,.3130192,.2980011,.2835,.2695448,.2561184,.2431896,.2307272,.2187,.2070971,.1959232,.1851708,.1748323,.1649,.1553667,.14623,.13749,.1291467,.1212,.1136397,.106465,.09969044,.09333061,.0874,.08190096,.07680428,.07207712,.06768664,.0636,.05980685,.05628216,.05297104,.04981861,.04677,.04378405,.04087536,.03807264,.03540461,.0329,.03056419,.02838056,.02634484,.02445275,.0227,.02108429,.01959988,.01823732,.01698717,.01584,.01479064,.01383132,.01294868,.0121292,.01135916,.01062935,.009938846,.009288422,.008678854,.008110916,.007582388,.007088746,.006627313,.006195408,.005790346,.005409826,.005052583,.004717512,.004403507,.004109457,.003833913,.003575748,.003334342,.003109075,.002899327,.002704348,.00252302,.002354168,.002196616,.00204919,.00191096,.001781438,.00166011,.001546459,.001439971,.001340042,.001246275,.001158471,.00107643,.0009999493,.0009287358,.0008624332,.0008007503,743396e-9,.0006900786,.0006405156,.0005945021,.0005518646,512429e-9,.0004760213,.0004424536,.0004115117,.0003829814,.0003566491,.0003323011,.0003097586,.0002888871,.0002695394,.0002515682,.0002348261,219171e-9,.0002045258,.0001908405,.0001780654,.0001661505,.0001550236,.0001446219,.0001349098,125852e-9,117413e-9,.0001095515,.0001022245,9539445e-11,890239e-10,8307527e-11,7751269e-11,7231304e-11,6745778e-11,6292844e-11,5870652e-11,5477028e-11,5109918e-11,4767654e-11,4448567e-11,4150994e-11,3873324e-11,3614203e-11,3372352e-11,3146487e-11,2935326e-11,2737573e-11,2552433e-11,2379376e-11,221787e-10,2067383e-11,1927226e-11,179664e-10,1674991e-11,1561648e-11,1455977e-11,1357387e-11,1265436e-11,1179723e-11,1099844e-11,1025398e-11,9559646e-12,8912044e-12,8308358e-12,7745769e-12,7221456e-12,6732475e-12,6276423e-12,5851304e-12,5455118e-12,5085868e-12,4741466e-12,4420236e-12,4120783e-12,3841716e-12,3581652e-12,3339127e-12,3112949e-12,2902121e-12,2705645e-12,2522525e-12,2351726e-12,2192415e-12,2043902e-12,1905497e-12,1776509e-12,1656215e-12,1544022e-12,143944e-11,1341977e-12,1251141e-12],y:[3917e-9,4393581e-12,4929604e-12,5532136e-12,6208245e-12,6965e-9,7813219e-12,8767336e-12,9839844e-12,1104323e-11,1239e-8,1388641e-11,1555728e-11,1744296e-11,1958375e-11,2202e-8,2483965e-11,2804126e-11,3153104e-11,3521521e-11,39e-6,428264e-10,469146e-10,515896e-10,571764e-10,64e-6,7234421e-11,8221224e-11,9350816e-11,.0001061361,12e-5,134984e-9,151492e-9,170208e-9,191816e-9,217e-6,.0002469067,28124e-8,31852e-8,.0003572667,396e-6,.0004337147,473024e-9,517876e-9,.0005722187,64e-5,72456e-8,8255e-7,94116e-8,.00106988,.00121,.001362091,.001530752,.001720368,.001935323,.00218,.0024548,.002764,.0031178,.0035264,.004,.00454624,.00515932,.00582928,.00654616,.0073,.008086507,.00890872,.00976768,.01066443,.0116,.01257317,.01358272,.01462968,.01571509,.01684,.01800736,.01921448,.02045392,.02171824,.023,.02429461,.02561024,.02695857,.02835125,.0298,.03131083,.03288368,.03452112,.03622571,.038,.03984667,.041768,.043766,.04584267,.048,.05024368,.05257304,.05498056,.05745872,.06,.06260197,.06527752,.06804208,.07091109,.0739,.077016,.0802664,.0836668,.0872328,.09098,.09491755,.09904584,.1033674,.1078846,.1126,.117532,.1226744,.1279928,.1334528,.13902,.1446764,.1504693,.1564619,.1627177,.1693,.1762431,.1835581,.1912735,.199418,.20802,.2171199,.2267345,.2368571,.2474812,.2586,.2701849,.2822939,.2950505,.308578,.323,.3384021,.3546858,.3716986,.3892875,.4073,.4256299,.4443096,.4633944,.4829395,.503,.5235693,.544512,.56569,.5869653,.6082,.6293456,.6503068,.6708752,.6908424,.71,.7281852,.7454636,.7619694,.7778368,.7932,.8081104,.8224962,.8363068,.8494916,.862,.8738108,.8849624,.8954936,.9054432,.9148501,.9237348,.9320924,.9399226,.9472252,.954,.9602561,.9660074,.9712606,.9760225,.9803,.9840924,.9874182,.9903128,.9928116,.9949501,.9967108,.9980983,.999112,.9997482,1,.9998567,.9993046,.9983255,.9968987,.995,.9926005,.9897426,.9864444,.9827241,.9786,.9740837,.9691712,.9638568,.9581349,.952,.9454504,.9384992,.9311628,.9234576,.9154,.9070064,.8982772,.8892048,.8797816,.87,.8598613,.849392,.838622,.8275813,.8163,.8047947,.793082,.781192,.7691547,.757,.7447541,.7324224,.7200036,.7074965,.6949,.6822192,.6694716,.6566744,.6438448,.631,.6181555,.6053144,.5924756,.5796379,.5668,.5539611,.5411372,.5283528,.5156323,.503,.4904688,.4780304,.4656776,.4534032,.4412,.42908,.417036,.405032,.393032,.381,.3689184,.3568272,.3447768,.3328176,.321,.3093381,.2978504,.2865936,.2756245,.265,.2547632,.2448896,.2353344,.2260528,.217,.2081616,.1995488,.1911552,.1829744,.175,.1672235,.1596464,.1522776,.1451259,.1382,.1315003,.1250248,.1187792,.1127691,.107,.1014762,.09618864,.09112296,.08626485,.0816,.07712064,.07282552,.06871008,.06476976,.061,.05739621,.05395504,.05067376,.04754965,.04458,.04175872,.03908496,.03656384,.03420048,.032,.02996261,.02807664,.02632936,.02470805,.0232,.02180077,.02050112,.01928108,.01812069,.017,.01590379,.01483718,.01381068,.01283478,.01192,.01106831,.01027339,.009533311,.008846157,.00821,.007623781,.007085424,.006591476,.006138485,.005723,.005343059,.004995796,.004676404,.004380075,.004102,.003838453,.003589099,.003354219,.003134093,.002929,.002738139,.002559876,.002393244,.002237275,.002091,.001953587,.00182458,.00170358,.001590187,.001484,.001384496,.001291268,.001204092,.001122744,.001047,.0009765896,.0009111088,.0008501332,.0007932384,74e-5,.0006900827,64331e-8,599496e-9,.0005584547,52e-5,.0004839136,.0004500528,.0004183452,.0003887184,3611e-7,.0003353835,.0003114404,.0002891656,.0002684539,2492e-7,.0002313019,.0002146856,.0001992884,.0001850475,1719e-7,.0001597781,.0001486044,.0001383016,.0001287925,12e-5,.0001118595,.0001043224,973356e-10,9084587e-11,848e-7,7914667e-11,73858e-9,68916e-9,6430267e-11,6e-5,5598187e-11,522256e-10,487184e-10,4544747e-11,424e-7,3956104e-11,3691512e-11,3444868e-11,3214816e-11,3e-5,2799125e-11,2611356e-11,2436024e-11,2272461e-11,212e-7,1977855e-11,1845285e-11,1721687e-11,1606459e-11,1499e-8,1398728e-11,1305155e-11,1217818e-11,1136254e-11,106e-7,9885877e-12,9217304e-12,8592362e-12,8009133e-12,74657e-10,6959567e-12,6487995e-12,6048699e-12,5639396e-12,52578e-10,4901771e-12,456972e-11,4260194e-12,3971739e-12,37029e-10,3452163e-12,3218302e-12,30003e-10,2797139e-12,26078e-10,243122e-11,2266531e-12,2113013e-12,1969943e-12,18366e-10,171223e-11,1596228e-12,148809e-11,1387314e-12,12934e-10,120582e-11,1124143e-12,1048009e-12,977058e-12,91093e-11,849251e-12,791721e-12,73809e-11,68811e-11,64153e-11,59809e-11,557575e-12,519808e-12,484612e-12,45181e-11],z:[6061e-7,.0006808792,.0007651456,.0008600124,.0009665928,.001086,.001220586,.001372729,.001543579,.001734286,.001946,.002177777,.002435809,.002731953,.003078064,.003486,.003975227,.00454088,.00515832,.005802907,.006450001,.007083216,.007745488,.008501152,.009414544,.01054999,.0119658,.01365587,.01558805,.01773015,.02005001,.02251136,.02520288,.02827972,.03189704,.03621,.04143771,.04750372,.05411988,.06099803,.06785001,.07448632,.08136156,.08915364,.09854048,.1102,.1246133,.1417017,.1613035,.1832568,.2074,.2336921,.2626114,.2947746,.3307985,.3713,.4162091,.4654642,.5196948,.5795303,.6456,.7184838,.7967133,.8778459,.959439,1.0390501,1.1153673,1.1884971,1.2581233,1.3239296,1.3856,1.4426352,1.4948035,1.5421903,1.5848807,1.62296,1.6564048,1.6852959,1.7098745,1.7303821,1.74706,1.7600446,1.7696233,1.7762637,1.7804334,1.7826,1.7829682,1.7816998,1.7791982,1.7758671,1.77211,1.7682589,1.764039,1.7589438,1.7524663,1.7441,1.7335595,1.7208581,1.7059369,1.6887372,1.6692,1.6475287,1.6234127,1.5960223,1.564528,1.5281,1.4861114,1.4395215,1.3898799,1.3387362,1.28764,1.2374223,1.1878243,1.1387611,1.090148,1.0419,.9941976,.9473473,.9014531,.8566193,.8129501,.7705173,.7294448,.6899136,.6521049,.6162,.5823286,.5504162,.5203376,.4919673,.46518,.4399246,.4161836,.3938822,.3729459,.3533,.3348578,.3175521,.3013375,.2861686,.272,.2588171,.2464838,.2347718,.2234533,.2123,.2011692,.1901196,.1792254,.1685608,.1582,.1481383,.1383758,.1289942,.1200751,.1117,.1039048,.09666748,.08998272,.08384531,.07824999,.07320899,.06867816,.06456784,.06078835,.05725001,.05390435,.05074664,.04775276,.04489859,.04216,.03950728,.03693564,.03445836,.03208872,.02984,.02771181,.02569444,.02378716,.02198925,.0203,.01871805,.01724036,.01586364,.01458461,.0134,.01230723,.01130188,.01037792,.009529306,.008749999,.0080352,.0073816,.0067854,.0062428,.005749999,.0053036,.0048998,.0045342,.0042024,.0039,.0036232,.0033706,.0031414,.0029348,.002749999,.0025852,.0024386,.0023094,.0021968,.0021,.002017733,.0019482,.0018898,.001840933,.0018,.001766267,.0017378,.0017112,.001683067,.001650001,.001610133,.0015644,.0015136,.001458533,.0014,.001336667,.00127,.001205,.001146667,.0011,.0010688,.0010494,.0010356,.0010212,.001,96864e-8,92992e-8,88688e-8,84256e-8,8e-4,76096e-8,72368e-8,68592e-8,64544e-8,6e-4,.0005478667,4916e-7,4354e-7,.0003834667,34e-5,.0003072533,28316e-8,26544e-8,.0002518133,24e-5,.0002295467,22064e-8,21196e-8,.0002021867,19e-5,.0001742133,15564e-8,13596e-8,.0001168533,1e-4,8613333e-11,746e-7,65e-6,5693333e-11,4999999e-11,4416e-8,3948e-8,3572e-8,3264e-8,3e-5,2765333e-11,2556e-8,2364e-8,2181333e-11,2e-5,1813333e-11,162e-7,142e-7,1213333e-11,1e-5,7733333e-12,54e-7,32e-7,1333333e-12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};function _o(n,t){let e=(t-n.start)/n.step;if(e<0||e>n.values.length-1)return 0;let i=Math.floor(e);if(i===n.values.length-1)return n.values[i];let r=e-i;return n.values[i]*(1-r)+n.values[i+1]*r}function uh(n,{cmf:t=ni}={},e=[0,0,0]){let i=0,r=0,s=0;for(let o=0;o<t.x.length;o++){let a=t.start+o*t.step,c=_o(n,a);i+=c*t.x[o],r+=c*t.y[o],s+=c*t.z[o]}return e[0]=i*t.step,e[1]=r*t.step,e[2]=s*t.step,e}function lh(n,{illuminant:t=vc,cmf:e=ni}={},i=[0,0,0]){let r=0,s=0,o=0,a=0;for(let c=0;c<e.x.length;c++){let l=e.start+c*e.step,u=_o(t,l),f=_o(n,l),h=u*f;r+=h*e.x[c],s+=h*e.y[c],o+=h*e.z[c],a+=u*e.y[c]}return i[0]=r/a,i[1]=s/a,i[2]=o/a,i}function vp(n,{start:t=360,step:e=1,end:i=830,fwhm:r=2}={}){let s=r/(2*Math.sqrt(2*Math.LN2)),o=1/(s*Math.sqrt(2*Math.PI)),a=Math.round((i-t)/e)+1,c=new Array(a).fill(0);for(let[l,u]of n)for(let f=0;f<a;f++){let h=(t+f*e-l)/s;c[f]+=u*o*Math.exp(-.5*h*h)}return{start:t,step:e,values:c}}function yp(n,{kT:t=.5,...e}={}){let i=n.map(([r,s,o])=>[r,s/r*Math.exp(-o/t)]);return vp(i,e)}function Mp(n){return vp([[588.995,2],[589.5924,1]],n)}var fh={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};var v3={deg:1,grad:360/400,rad:180/Math.PI,turn:360},bp=/^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/i;function De(n,t,e=1){if(n==="none")return NaN;if(n.endsWith("%")){let i=n.slice(0,-1);return bp.test(i)?parseFloat(i)/100*t:void 0}if(bp.test(n))return parseFloat(n)*e}function nl(n){if(n==="none")return NaN;let t=n.match(/^([+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?)(deg|grad|rad|turn)?$/i);if(t)return parseFloat(t[1])*(t[2]?v3[t[2].toLowerCase()]:1)}function Sp(n){if(n===void 0)return 1;let t=De(n,1);if(t!==void 0)return Number.isNaN(t)?NaN:Math.min(1,Math.max(0,t))}var ur=n=>n<0?0:n;function wp(n){return parseInt(n,16)/255}function Tp(n){let t=n.slice(1);if(!/^[0-9a-f]+$/i.test(t))return null;if(t.length===3||t.length===4){let e=[...t].map(i=>wp(i+i));return{space:"srgb",coords:e.slice(0,3),alpha:t.length===4?e[3]:1}}if(t.length===6||t.length===8){let e=[];for(let i=0;i<t.length;i+=2)e.push(wp(t.slice(i,i+2)));return{space:"srgb",coords:e.slice(0,3),alpha:t.length===8?e[3]:1}}return null}var y3={srgb:"srgb","srgb-linear":"srgb-linear","display-p3":"display-p3","a98-rgb":"a98-rgb","prophoto-rgb":"prophoto-rgb",rec2020:"rec2020",xyz:"xyz-d65","xyz-d65":"xyz-d65","xyz-d50":"xyz-d50",ictcp:"ictcp",jzazbz:"jzazbz","rec2100-pq":"rec2100-pq","rec2100-hlg":"rec2100-hlg"},xo={rgb:{space:"srgb",ch:[n=>De(n,1,1/255),n=>De(n,1,1/255),n=>De(n,1,1/255)]},hsl:{space:"hsl",ch:[nl,n=>ur(De(n,1,1/100)),n=>ur(De(n,1,1/100))]},hwb:{space:"hwb",ch:[nl,n=>De(n,1,1/100),n=>De(n,1,1/100)]},lab:{space:"lab",ch:[n=>ur(De(n,100)),n=>De(n,125),n=>De(n,125)]},lch:{space:"lch",ch:[n=>ur(De(n,100)),n=>ur(De(n,150)),nl]},oklab:{space:"oklab",ch:[n=>ur(De(n,1)),n=>De(n,.4),n=>De(n,.4)]},oklch:{space:"oklch",ch:[n=>ur(De(n,1)),n=>ur(De(n,.4)),nl]}};xo.rgba=xo.rgb;xo.hsla=xo.hsl;function Ep(n){if(typeof n!="string")return null;let t=n.trim().toLowerCase();if(t==="")return null;if(t[0]==="#")return Tp(t);if(t==="transparent")return{space:"srgb",coords:[0,0,0],alpha:0};let e=fh[t];if(e)return Tp(e);let i=t.match(/^([a-z][a-z0-9-]*)\(\s*(.*?)\s*\)$/s);if(!i)return null;let[,r,s]=i,o=s.replace(/,/g," ").split("/");if(o.length>2)return null;let a=o[0].trim().split(/\s+/).filter(Boolean),c=o.length===2?o[1].trim():void 0;if(c!==void 0&&(c===""||/\s/.test(c)))return null;if(r==="color"){let h=y3[a[0]];if(!h||(a=a.slice(1),a.length===4&&c===void 0&&(c=a.pop()),a.length!==3))return null;let p=a.map(v=>De(v,1)),g=Sp(c);return p.some(v=>v===void 0)||g===void 0?null:{space:h,coords:p,alpha:g}}let l=xo[r];if(!l||(a.length===4&&c===void 0&&(c=a.pop()),a.length!==3))return null;let u=a.map((h,p)=>l.ch[p](h)),f=Sp(c);return u.some(h=>h===void 0)||f===void 0?null:{space:l.space,coords:u,alpha:f}}function fr(n,t,e=[0,0,0]){let i=Ep(n);return i===null?null:Li(i.coords,i.space,t,e)}var dh={cmf:xp};function M3(n){let t=n==="sodium-lamp"?Mp():yp(hh[n]),e=uh(t,dh)[1];return{start:t.start,step:t.step,values:t.values.map(i=>i/e)}}function b3(n){return uh(n,dh)}function S3(n){return ih(Li(n,"xyz-d65","srgb"))}var il={brick:fr("#7c4935","srgb"),mortar:fr("#8d857a","srgb"),asphalt:fr("#34363c","srgb"),asphaltWet:fr("#22242a","srgb"),door:fr("#2e5950","srgb"),concrete:fr("#6f6a62","srgb")};function w3(n){return ch(il[n],"srgb")}function Ap(n){let t=n.map(i=>{let r=M3(i.gas),s=b3(r);return{...i,spd:r,xyz:s,naive:S3(s)}}),e={};for(let i of Object.keys(il)){let r=w3(i);e[i]=t.map(s=>lh(r,{illuminant:s.spd,...dh}))}return{lights:t,pairs:e}}var Ni=8,T3=`
  varying vec3 vPos;
  varying vec3 vNormal;
  void main() {
    vPos = (modelMatrix * vec4(position, 1.0)).xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * vec4(vPos, 1.0);
  }
`,E3=`
  varying vec3 vPos;
  varying vec3 vNormal;
  uniform vec3 uPair[${Ni}];
  uniform vec3 uNaiveLight[${Ni}];
  uniform vec3 uLightPos[${Ni}];
  uniform float uIntensity[${Ni}];
  uniform vec3 uAlbedo;
  uniform float uMode;
  void main() {
    vec3 n = normalize(vNormal);
    vec3 accW = vec3(0.0);
    vec3 accN = vec3(0.0);
    for (int i = 0; i < ${Ni}; i++) {
      vec3 L = uLightPos[i] - vPos;
      float d2 = dot(L, L);
      float ndl = max(dot(n, normalize(L)), 0.0);
      float att = uIntensity[i] * ndl / (1.0 + 0.22 * d2);
      accW += uPair[i] * att;
      accN += uNaiveLight[i] * att;
    }
    vec3 whitepoint = accW;
    vec3 naive = uAlbedo * accN; // per-channel multiply of gamma values
    gl_FragColor = vec4(mix(whitepoint, naive, uMode), 1.0);
  }
`,A3=`
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    vView = normalize(cameraPosition - wp);
    gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
  }
`,C3=`
  varying vec3 vNormal;
  varying vec3 vView;
  uniform vec3 uXyz;
  uniform vec3 uNaive;
  uniform float uPower;
  uniform float uMode;
  void main() {
    // Limb profile: a glowing column reads brightest through its core.
    float core = 0.55 + 0.45 * pow(max(dot(normalize(vNormal), vView), 0.0), 2.0);
    vec3 whitepoint = uXyz * uPower * core;
    vec3 naive = uNaive * min(uPower * core, 1.0); // LDR: the tube saturates
    gl_FragColor = vec4(mix(whitepoint, naive, uMode), 1.0);
  }
`;function dr(n){return new O(n[0],n[1],n[2])}function rl(n,t){let{lights:e,pairs:i}=n.derived,r=(s,o)=>{let a=s.slice(0,Ni).map(dr);for(;a.length<Ni;)a.push(dr(o));return a};return new Xe({vertexShader:T3,fragmentShader:E3,uniforms:{uPair:{value:r(i[t],[0,0,0])},uNaiveLight:{value:r(e.map(s=>s.naive),[0,0,0])},uLightPos:{value:r(e.map(s=>s.pos),[0,-99,0])},uIntensity:{value:R3(e.map(s=>s.intensity))},uAlbedo:{value:dr(P3(n,t))},uMode:n.uMode}})}function R3(n){let t=n.slice(0,Ni);for(;t.length<Ni;)t.push(0);return t}function P3(n,t){return n.materialsSrgb[t]}function ph(n,t,e=14){return new Xe({vertexShader:A3,fragmentShader:C3,uniforms:{uXyz:{value:dr(t.xyz)},uNaive:{value:dr(t.naive)},uPower:{value:e},uMode:n.uMode}})}function Cp(n){let t=new Er,e=new ve(new mi(7,24),rl(n,"asphalt"));e.rotation.x=-Math.PI/2,e.position.set(0,0,-4),t.add(e);let i=new mi(24,7),r=new ve(i,rl(n,"brick"));r.rotation.y=Math.PI/2,r.position.set(-2.8,3.5,-4),t.add(r);let s=new ve(i,rl(n,"brick"));s.rotation.y=-Math.PI/2,s.position.set(2.8,3.5,-4),t.add(s);let o=new ve(new mi(7,7),rl(n,"concrete"));o.position.set(0,3.5,-16),t.add(o);let[a,c,l]=n.derived.lights,u=new ve(new Vs(.55,.035,12,64),ph(n,a));u.rotation.y=Math.PI/2,u.position.copy(dr(a.pos)),t.add(u);let f=new ve(new zs(.035,.035,1.6,10),ph(n,c));f.rotation.z=Math.PI/2,f.position.copy(dr(c.pos)),t.add(f);let h=new ve(new ks(.16,16,12),ph(n,l,30));return h.position.copy(dr(l.pos)),t.add(h),t}function cn(n){let t=[];n.transferName!=="linear"&&t.push({k:"transfer",name:n.transferName,dir:"decode"}),t.push({k:"mat3",m:n.m.toXyz});let e=[{k:"mat3",m:n.m.fromXyz}];return n.transferName!=="linear"&&e.push({k:"transfer",name:n.transferName,dir:"encode"}),{toXyzOps:t,fromXyzOps:e}}var Rp={toXyzOps:[{k:"mat3",m:me},{k:"cube3"},{k:"mat3",m:Ke}],fromXyzOps:[{k:"mat3",m:Ln},{k:"cbrt3"},{k:"mat3",m:wn}]},Np=rn(ye,Ye),Up=rn(Ye,ye),Pp={m:[0,116,0,500,-500,0,0,200,-200],b:[-16,0,0]},Ip={m:[1/116,1/500,0,1/116,0,0,1/116,0,-1/200],b:[16/116,16/116,16/116]},Lp={toXyzOps:[{k:"affine",m:Ip.m,b:Ip.b},{k:"labFInv3"},{k:"mulW",w:Vn},{k:"mat3",m:Up}],fromXyzOps:[{k:"mat3",m:Np},{k:"divW",w:Vn},{k:"labF3"},{k:"affine",m:Pp.m,b:Pp.b}]};function mh(n){return{toXyzOps:[{k:"polarToRect"},...n.toXyzOps],fromXyzOps:[...n.fromXyzOps,{k:"rectToPolar"}]}}var pr={srgb:cn(Gt),"srgb-linear":cn(bc),"display-p3":cn(oo),"a98-rgb":cn(Sc),"prophoto-rgb":cn(wc),rec2020:cn(Ei),oklab:Rp,oklch:mh(Rp),lab:Lp,lch:mh(Lp),"xyz-d65":{toXyzOps:[],fromXyzOps:[]},xyz:{toXyzOps:[],fromXyzOps:[]},"xyz-d50":{toXyzOps:[{k:"mat3",m:Up}],fromXyzOps:[{k:"mat3",m:Np}]},bt709:cn(ms),"dci-p3":cn(Tc),"aces2065-1":cn(Ec),acescg:cn(Ac),acescc:cn(Cc),acescct:cn(Rc),"rec2100-pq":cn(Pc),"rec2100-hlg":cn(Ic),ictcp:{toXyzOps:[{k:"mat3",m:Y0},{k:"transfer",name:"pqabs",dir:"decode"},{k:"mat3",m:q0}],fromXyzOps:[{k:"mat3",m:qc},{k:"transfer",name:"pqabs",dir:"encode"},{k:"mat3",m:ro}]}},Dp=[rr,0,1-rr,1-sr,sr,0,0,0,1];pr.jzazbz={toXyzOps:[{k:"jzInv"},{k:"mat3",m:Z0},{k:"transfer",name:"jzpq",dir:"decode"},{k:"mat3",m:Hn},{k:"mat3",m:ie(Dp)},{k:"mulW",w:[1/203,1/203,1/203]}],fromXyzOps:[{k:"mulW",w:[203,203,203]},{k:"clamp0"},{k:"mat3",m:Dp},{k:"mat3",m:vn},{k:"transfer",name:"jzpq",dir:"encode"},{k:"mat3",m:ri},{k:"jzFwd"}]};pr.jzczhz=mh(pr.jzazbz);var gh=(9.72-15)/17.52,_h=(Math.log2(65504)+9.72)/17.52,xh=.155251141552511,xs=Math.pow(2,-16),vh=Math.pow(2,-15),yh="0.017453292519943295",I3="57.29577951308232",Mh=216/24389,vs=24389/27,bh=6/29;function mr(n,t){let e=String(n);return t!=="js"&&!/[.e]/.test(e)&&(e+=".0"),e}function Bp(n){let t=[];for(let e of n){let i=t[t.length-1];e.k==="mat3"&&i&&i.k==="mat3"?t[t.length-1]={k:"mat3",m:Ce(e.m,i.m)}:t.push(e)}return t}function Sh(n){let t=i=>mr(i,n),e=t(.3333333333333333);return n==="js"?{srgb_decode:"const wp_srgb_decode = (v) => { const a = Math.abs(v); const m = a <= 0.04045 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4); return v < 0 ? -m : m; };",srgb_encode:`const wp_srgb_encode = (v) => { const a = Math.abs(v); const m = a <= 0.0031308 ? 12.92 * a : 1.055 * Math.pow(a, ${t(1/2.4)}) - 0.055; return v < 0 ? -m : m; };`,a98_decode:`const wp_a98_decode = (v) => { const m = Math.pow(Math.abs(v), ${t(xi)}); return v < 0 ? -m : m; };`,a98_encode:`const wp_a98_encode = (v) => { const m = Math.pow(Math.abs(v), ${t(1/xi)}); return v < 0 ? -m : m; };`,prophoto_decode:`const wp_prophoto_decode = (v) => { const a = Math.abs(v); const m = a <= ${t(16*vi)} ? a / 16 : Math.pow(a, 1.8); return v < 0 ? -m : m; };`,prophoto_encode:`const wp_prophoto_encode = (v) => { const a = Math.abs(v); const m = a >= ${t(vi)} ? Math.pow(a, ${t(1/1.8)}) : 16 * a; return v < 0 ? -m : m; };`,rec2020_decode:`const wp_rec2020_decode = (v) => { const a = Math.abs(v); const m = a < ${t(yi*4.5)} ? a / 4.5 : Math.pow((a + ${t(Be-1)}) / ${t(Be)}, ${t(1/.45)}); return v < 0 ? -m : m; };`,rec2020_encode:`const wp_rec2020_encode = (v) => { const a = Math.abs(v); const m = a < ${t(yi)} ? 4.5 * a : ${t(Be)} * Math.pow(a, 0.45) - ${t(Be-1)}; return v < 0 ? -m : m; };`,labF:`const wp_labF = (t) => t > ${t(Mh)} ? Math.cbrt(t) : (t * ${t(vs)} + 16) / 116;`,labFInv:`const wp_labFInv = (t) => t > ${t(bh)} ? t * t * t : (116 * t - 16) / ${t(vs)};`,bt709_decode:`const wp_bt709_decode = (v) => { const a = Math.abs(v); const m = a < ${t(Mi*4.5)} ? a / 4.5 : Math.pow((a + ${t(ze-1)}) / ${t(ze)}, ${t(1/.45)}); return v < 0 ? -m : m; };`,bt709_encode:`const wp_bt709_encode = (v) => { const a = Math.abs(v); const m = a < ${t(Mi)} ? 4.5 * a : ${t(ze)} * Math.pow(a, 0.45) - ${t(ze-1)}; return v < 0 ? -m : m; };`,gamma26_decode:"const wp_gamma26_decode = (v) => { const m = Math.pow(Math.abs(v), 2.6); return v < 0 ? -m : m; };",gamma26_encode:`const wp_gamma26_encode = (v) => { const m = Math.pow(Math.abs(v), ${t(1/2.6)}); return v < 0 ? -m : m; };`,acescc_decode:`const wp_acescc_decode = (v) => { if (v < ${t(gh)}) return (Math.pow(2, v * 17.52 - 9.72) - ${t(xs)}) * 2; if (v < ${t(_h)}) return Math.pow(2, v * 17.52 - 9.72); return 65504; };`,acescc_encode:`const wp_acescc_encode = (v) => { if (v <= 0) return ${t(so)}; if (v < ${t(vh)}) return (Math.log2(${t(xs)} + v * 0.5) + 9.72) / 17.52; return (Math.log2(v) + 9.72) / 17.52; };`,acescct_decode:`const wp_acescct_decode = (v) => { if (v > ${t(xh)}) return Math.pow(2, v * 17.52 - 9.72); return (v - ${t(Si)}) / ${t(bi)}; };`,acescct_encode:`const wp_acescct_encode = (v) => { if (v <= 0.0078125) return ${t(bi)} * v + ${t(Si)}; return (Math.log2(v) + 9.72) / 17.52; };`,pqabs_decode:`const wp_pqabs_decode = (v) => { if (v <= 0) return 0; const e = Math.pow(v, ${t(1/Ze)}); const num = Math.max(e - ${t(fe)}, 0); return 10000 * Math.pow(num / (${t(de)} - ${t(pe)} * e), ${t(1/ue)}); };`,pqabs_encode:`const wp_pqabs_encode = (v) => { if (v <= 0) return 0; const y = Math.pow(v / 10000, ${t(ue)}); return Math.pow((${t(fe)} + ${t(de)} * y) / (1 + ${t(pe)} * y), ${t(Ze)}); };`,jzpq_decode:`const wp_jzpq_decode = (v) => { if (v <= 0) return 0; const e = Math.pow(v, ${t(1/gi)}); const num = Math.max(e - ${t(fe)}, 0); return 10000 * Math.pow(num / (${t(de)} - ${t(pe)} * e), ${t(1/ue)}); };`,jzpq_encode:`const wp_jzpq_encode = (v) => { if (v <= 0) return 0; const y = Math.pow(v / 10000, ${t(ue)}); return Math.pow((${t(fe)} + ${t(de)} * y) / (1 + ${t(pe)} * y), ${t(gi)}); };`,rec2100pq_decode:`const wp_rec2100pq_decode = (v) => { if (v <= 0) return 0; const e = Math.pow(v, ${t(1/Ze)}); const num = Math.max(e - ${t(fe)}, 0); return 10000 * Math.pow(num / (${t(de)} - ${t(pe)} * e), ${t(1/ue)}) / ${t(203)}; };`,rec2100pq_encode:`const wp_rec2100pq_encode = (v) => { const n = v * ${t(203)}; if (n <= 0) return 0; const y = Math.pow(n / 10000, ${t(ue)}); return Math.pow((${t(fe)} + ${t(de)} * y) / (1 + ${t(pe)} * y), ${t(Ze)}); };`,rec2100hlg_decode:`const wp_rec2100hlg_decode = (v) => { if (v <= 0) return 0; if (v <= 0.5) return ((v * v) / 3) * ${t(yn)}; return ((Math.exp((v - ${t(Ti)}) / ${t(Pn)}) + ${t(wi)}) / 12) * ${t(yn)}; };`,rec2100hlg_encode:`const wp_rec2100hlg_encode = (v) => { if (v <= 0) return 0; const x = v / ${t(yn)}; if (x <= ${t(1/12)}) return Math.sqrt(3 * x); return ${t(Pn)} * Math.log(12 * x - ${t(wi)}) + ${t(Ti)}; };`}:n==="glsl"?{srgb_decode:"float wp_srgb_decode(float v) { float a = abs(v); float m = a <= 0.04045 ? a / 12.92 : pow((a + 0.055) / 1.055, 2.4); return v < 0.0 ? -m : m; }",srgb_encode:`float wp_srgb_encode(float v) { float a = abs(v); float m = a <= 0.0031308 ? 12.92 * a : 1.055 * pow(a, ${t(1/2.4)}) - 0.055; return v < 0.0 ? -m : m; }`,a98_decode:`float wp_a98_decode(float v) { float m = pow(abs(v), ${t(xi)}); return v < 0.0 ? -m : m; }`,a98_encode:`float wp_a98_encode(float v) { float m = pow(abs(v), ${t(1/xi)}); return v < 0.0 ? -m : m; }`,prophoto_decode:`float wp_prophoto_decode(float v) { float a = abs(v); float m = a <= ${t(16*vi)} ? a / 16.0 : pow(a, 1.8); return v < 0.0 ? -m : m; }`,prophoto_encode:`float wp_prophoto_encode(float v) { float a = abs(v); float m = a >= ${t(vi)} ? pow(a, ${t(1/1.8)}) : 16.0 * a; return v < 0.0 ? -m : m; }`,rec2020_decode:`float wp_rec2020_decode(float v) { float a = abs(v); float m = a < ${t(yi*4.5)} ? a / 4.5 : pow((a + ${t(Be-1)}) / ${t(Be)}, ${t(1/.45)}); return v < 0.0 ? -m : m; }`,rec2020_encode:`float wp_rec2020_encode(float v) { float a = abs(v); float m = a < ${t(yi)} ? 4.5 * a : ${t(Be)} * pow(a, 0.45) - ${t(Be-1)}; return v < 0.0 ? -m : m; }`,labF:`float wp_labF(float t) { return t > ${t(Mh)} ? pow(t, ${e}) : (t * ${t(vs)} + 16.0) / 116.0; }`,labFInv:`float wp_labFInv(float t) { return t > ${t(bh)} ? t * t * t : (116.0 * t - 16.0) / ${t(vs)}; }`,cbrt:`float wp_cbrt(float v) { return sign(v) * pow(abs(v), ${e}); }`,bt709_decode:`float wp_bt709_decode(float v) { float a = abs(v); float m = a < ${t(Mi*4.5)} ? a / 4.5 : pow((a + ${t(ze-1)}) / ${t(ze)}, ${t(1/.45)}); return v < 0.0 ? -m : m; }`,bt709_encode:`float wp_bt709_encode(float v) { float a = abs(v); float m = a < ${t(Mi)} ? 4.5 * a : ${t(ze)} * pow(a, 0.45) - ${t(ze-1)}; return v < 0.0 ? -m : m; }`,gamma26_decode:"float wp_gamma26_decode(float v) { float m = pow(abs(v), 2.6); return v < 0.0 ? -m : m; }",gamma26_encode:`float wp_gamma26_encode(float v) { float m = pow(abs(v), ${t(1/2.6)}); return v < 0.0 ? -m : m; }`,acescc_decode:`float wp_acescc_decode(float v) { if (v < ${t(gh)}) { return (exp2(v * 17.52 - 9.72) - ${t(xs)}) * 2.0; } if (v < ${t(_h)}) { return exp2(v * 17.52 - 9.72); } return 65504.0; }`,acescc_encode:`float wp_acescc_encode(float v) { if (v <= 0.0) { return ${t(so)}; } if (v < ${t(vh)}) { return (log2(${t(xs)} + v * 0.5) + 9.72) / 17.52; } return (log2(v) + 9.72) / 17.52; }`,acescct_decode:`float wp_acescct_decode(float v) { if (v > ${t(xh)}) { return exp2(v * 17.52 - 9.72); } return (v - ${t(Si)}) / ${t(bi)}; }`,acescct_encode:`float wp_acescct_encode(float v) { if (v <= 0.0078125) { return ${t(bi)} * v + ${t(Si)}; } return (log2(v) + 9.72) / 17.52; }`,pqabs_decode:`float wp_pqabs_decode(float v) { if (v <= 0.0) { return 0.0; } float e = pow(v, ${t(1/Ze)}); return 10000.0 * pow(max(e - ${t(fe)}, 0.0) / (${t(de)} - ${t(pe)} * e), ${t(1/ue)}); }`,pqabs_encode:`float wp_pqabs_encode(float v) { if (v <= 0.0) { return 0.0; } float y = pow(v / 10000.0, ${t(ue)}); return pow((${t(fe)} + ${t(de)} * y) / (1.0 + ${t(pe)} * y), ${t(Ze)}); }`,jzpq_decode:`float wp_jzpq_decode(float v) { if (v <= 0.0) { return 0.0; } float e = pow(v, ${t(1/gi)}); return 10000.0 * pow(max(e - ${t(fe)}, 0.0) / (${t(de)} - ${t(pe)} * e), ${t(1/ue)}); }`,jzpq_encode:`float wp_jzpq_encode(float v) { if (v <= 0.0) { return 0.0; } float y = pow(v / 10000.0, ${t(ue)}); return pow((${t(fe)} + ${t(de)} * y) / (1.0 + ${t(pe)} * y), ${t(gi)}); }`,rec2100pq_decode:`float wp_rec2100pq_decode(float v) { if (v <= 0.0) { return 0.0; } float e = pow(v, ${t(1/Ze)}); return 10000.0 * pow(max(e - ${t(fe)}, 0.0) / (${t(de)} - ${t(pe)} * e), ${t(1/ue)}) / ${t(203)}; }`,rec2100pq_encode:`float wp_rec2100pq_encode(float v) { float n = v * ${t(203)}; if (n <= 0.0) { return 0.0; } float y = pow(n / 10000.0, ${t(ue)}); return pow((${t(fe)} + ${t(de)} * y) / (1.0 + ${t(pe)} * y), ${t(Ze)}); }`,rec2100hlg_decode:`float wp_rec2100hlg_decode(float v) { if (v <= 0.0) { return 0.0; } if (v <= 0.5) { return ((v * v) / 3.0) * ${t(yn)}; } return ((exp((v - ${t(Ti)}) / ${t(Pn)}) + ${t(wi)}) / 12.0) * ${t(yn)}; }`,rec2100hlg_encode:`float wp_rec2100hlg_encode(float v) { if (v <= 0.0) { return 0.0; } float x = v / ${t(yn)}; if (x <= ${t(1/12)}) { return sqrt(3.0 * x); } return ${t(Pn)} * log(12.0 * x - ${t(wi)}) + ${t(Ti)}; }`}:{srgb_decode:"fn wp_srgb_decode(v: f32) -> f32 { let a = abs(v); let m = select(pow((a + 0.055) / 1.055, 2.4), a / 12.92, a <= 0.04045); return select(m, -m, v < 0.0); }",srgb_encode:`fn wp_srgb_encode(v: f32) -> f32 { let a = abs(v); let m = select(1.055 * pow(a, ${t(1/2.4)}) - 0.055, 12.92 * a, a <= 0.0031308); return select(m, -m, v < 0.0); }`,a98_decode:`fn wp_a98_decode(v: f32) -> f32 { let m = pow(abs(v), ${t(xi)}); return select(m, -m, v < 0.0); }`,a98_encode:`fn wp_a98_encode(v: f32) -> f32 { let m = pow(abs(v), ${t(1/xi)}); return select(m, -m, v < 0.0); }`,prophoto_decode:`fn wp_prophoto_decode(v: f32) -> f32 { let a = abs(v); let m = select(pow(a, 1.8), a / 16.0, a <= ${t(16*vi)}); return select(m, -m, v < 0.0); }`,prophoto_encode:`fn wp_prophoto_encode(v: f32) -> f32 { let a = abs(v); let m = select(16.0 * a, pow(a, ${t(1/1.8)}), a >= ${t(vi)}); return select(m, -m, v < 0.0); }`,rec2020_decode:`fn wp_rec2020_decode(v: f32) -> f32 { let a = abs(v); let m = select(pow((a + ${t(Be-1)}) / ${t(Be)}, ${t(1/.45)}), a / 4.5, a < ${t(yi*4.5)}); return select(m, -m, v < 0.0); }`,rec2020_encode:`fn wp_rec2020_encode(v: f32) -> f32 { let a = abs(v); let m = select(${t(Be)} * pow(a, 0.45) - ${t(Be-1)}, 4.5 * a, a < ${t(yi)}); return select(m, -m, v < 0.0); }`,labF:`fn wp_labF(t: f32) -> f32 { return select((t * ${t(vs)} + 16.0) / 116.0, pow(t, ${e}), t > ${t(Mh)}); }`,labFInv:`fn wp_labFInv(t: f32) -> f32 { return select((116.0 * t - 16.0) / ${t(vs)}, t * t * t, t > ${t(bh)}); }`,cbrt:`fn wp_cbrt(v: f32) -> f32 { return sign(v) * pow(abs(v), ${e}); }`,bt709_decode:`fn wp_bt709_decode(v: f32) -> f32 { let a = abs(v); let m = select(pow((a + ${t(ze-1)}) / ${t(ze)}, ${t(1/.45)}), a / 4.5, a < ${t(Mi*4.5)}); return select(m, -m, v < 0.0); }`,bt709_encode:`fn wp_bt709_encode(v: f32) -> f32 { let a = abs(v); let m = select(${t(ze)} * pow(a, 0.45) - ${t(ze-1)}, 4.5 * a, a < ${t(Mi)}); return select(m, -m, v < 0.0); }`,gamma26_decode:"fn wp_gamma26_decode(v: f32) -> f32 { let m = pow(abs(v), 2.6); return select(m, -m, v < 0.0); }",gamma26_encode:`fn wp_gamma26_encode(v: f32) -> f32 { let m = pow(abs(v), ${t(1/2.6)}); return select(m, -m, v < 0.0); }`,acescc_decode:`fn wp_acescc_decode(v: f32) -> f32 { if (v < ${t(gh)}) { return (exp2(v * 17.52 - 9.72) - ${t(xs)}) * 2.0; } if (v < ${t(_h)}) { return exp2(v * 17.52 - 9.72); } return 65504.0; }`,acescc_encode:`fn wp_acescc_encode(v: f32) -> f32 { if (v <= 0.0) { return ${t(so)}; } if (v < ${t(vh)}) { return (log2(${t(xs)} + v * 0.5) + 9.72) / 17.52; } return (log2(v) + 9.72) / 17.52; }`,acescct_decode:`fn wp_acescct_decode(v: f32) -> f32 { if (v > ${t(xh)}) { return exp2(v * 17.52 - 9.72); } return (v - ${t(Si)}) / ${t(bi)}; }`,acescct_encode:`fn wp_acescct_encode(v: f32) -> f32 { if (v <= 0.0078125) { return ${t(bi)} * v + ${t(Si)}; } return (log2(v) + 9.72) / 17.52; }`,pqabs_decode:`fn wp_pqabs_decode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let e = pow(v, ${t(1/Ze)}); return 10000.0 * pow(max(e - ${t(fe)}, 0.0) / (${t(de)} - ${t(pe)} * e), ${t(1/ue)}); }`,pqabs_encode:`fn wp_pqabs_encode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let y = pow(v / 10000.0, ${t(ue)}); return pow((${t(fe)} + ${t(de)} * y) / (1.0 + ${t(pe)} * y), ${t(Ze)}); }`,jzpq_decode:`fn wp_jzpq_decode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let e = pow(v, ${t(1/gi)}); return 10000.0 * pow(max(e - ${t(fe)}, 0.0) / (${t(de)} - ${t(pe)} * e), ${t(1/ue)}); }`,jzpq_encode:`fn wp_jzpq_encode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let y = pow(v / 10000.0, ${t(ue)}); return pow((${t(fe)} + ${t(de)} * y) / (1.0 + ${t(pe)} * y), ${t(gi)}); }`,rec2100pq_decode:`fn wp_rec2100pq_decode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let e = pow(v, ${t(1/Ze)}); return 10000.0 * pow(max(e - ${t(fe)}, 0.0) / (${t(de)} - ${t(pe)} * e), ${t(1/ue)}) / ${t(203)}; }`,rec2100pq_encode:`fn wp_rec2100pq_encode(v: f32) -> f32 { let n = v * ${t(203)}; if (n <= 0.0) { return 0.0; } let y = pow(n / 10000.0, ${t(ue)}); return pow((${t(fe)} + ${t(de)} * y) / (1.0 + ${t(pe)} * y), ${t(Ze)}); }`,rec2100hlg_decode:`fn wp_rec2100hlg_decode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } if (v <= 0.5) { return ((v * v) / 3.0) * ${t(yn)}; } return ((exp((v - ${t(Ti)}) / ${t(Pn)}) + ${t(wi)}) / 12.0) * ${t(yn)}; }`,rec2100hlg_encode:`fn wp_rec2100hlg_encode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let x = v / ${t(yn)}; if (x <= ${t(1/12)}) { return sqrt(3.0 * x); } return ${t(Pn)} * log(12.0 * x - ${t(wi)}) + ${t(Ti)}; }`}}var gr={js:Sh("js"),glsl:Sh("glsl"),wgsl:Sh("wgsl")};function Fp(n,t,e,i){let r=o=>t?` + ${i(t[o])}`:"",s=o=>`${i(n[o*3])} * v.x + ${i(n[o*3+1])} * v.y + ${i(n[o*3+2])} * v.z${r(o)}`;return e==="glsl"?`  v = vec3(${s(0)}, ${s(1)}, ${s(2)});`:`  v = vec3<f32>(${s(0)}, ${s(1)}, ${s(2)});`}function Op(n,t){let e=i=>t?` + ${t[i]}`:"";return`  { const r0 = ${n[0]} * v0 + ${n[1]} * v1 + ${n[2]} * v2${e(0)};
    const r1 = ${n[3]} * v0 + ${n[4]} * v1 + ${n[5]} * v2${e(1)};
    const r2 = ${n[6]} * v0 + ${n[7]} * v1 + ${n[8]} * v2${e(2)};
    v0 = r0; v1 = r1; v2 = r2; }`}function L3(n,t,e){let i=s=>mr(s,t);if(t==="js")switch(n.k){case"mat3":return Op(n.m);case"affine":return Op(n.m,n.b);case"transfer":{let s=`${n.name}_${n.dir}`;return e.add(s),`  v0 = wp_${s}(v0); v1 = wp_${s}(v1); v2 = wp_${s}(v2);`}case"cbrt3":return"  v0 = Math.cbrt(v0); v1 = Math.cbrt(v1); v2 = Math.cbrt(v2);";case"cube3":return"  v0 = v0 * v0 * v0; v1 = v1 * v1 * v1; v2 = v2 * v2 * v2;";case"labF3":return e.add("labF"),"  v0 = wp_labF(v0); v1 = wp_labF(v1); v2 = wp_labF(v2);";case"labFInv3":return e.add("labFInv"),"  v0 = wp_labFInv(v0); v1 = wp_labFInv(v1); v2 = wp_labFInv(v2);";case"divW":return`  v0 /= ${n.w[0]}; v1 /= ${n.w[1]}; v2 /= ${n.w[2]};`;case"mulW":return`  v0 *= ${n.w[0]}; v1 *= ${n.w[1]}; v2 *= ${n.w[2]};`;case"clamp0":return"  v0 = Math.max(v0, 0); v1 = Math.max(v1, 0); v2 = Math.max(v2, 0);";case"jzFwd":return`  v0 = (${1+Je} * v0) / (1 + ${Je} * v0) - ${_i};`;case"jzInv":return`  { const t = v0 + ${_i}; v0 = t / (${1+Je} - ${Je} * t); }`;case"polarToRect":return`  { const h = v2 * ${yh}; const c = v1; v1 = c * Math.cos(h); v2 = c * Math.sin(h); }`;case"rectToPolar":return`  { const c = Math.sqrt(v1 * v1 + v2 * v2); let h = Math.atan2(v2, v1) * ${I3}; if (h < 0) h += 360; v1 = c; v2 = h; }`;default:throw new Error(`codegen: unknown op "${n.k}"`)}let r=t==="glsl"?"vec3":"vec3<f32>";switch(n.k){case"mat3":return Fp(n.m,null,t,i);case"affine":return Fp(n.m,n.b,t,i);case"transfer":{let s=`${n.name}_${n.dir}`;return e.add(s),`  v = ${r}(wp_${s}(v.x), wp_${s}(v.y), wp_${s}(v.z));`}case"cbrt3":return e.add("cbrt"),`  v = ${r}(wp_cbrt(v.x), wp_cbrt(v.y), wp_cbrt(v.z));`;case"cube3":return"  v = v * v * v;";case"labF3":return e.add("labF"),`  v = ${r}(wp_labF(v.x), wp_labF(v.y), wp_labF(v.z));`;case"labFInv3":return e.add("labFInv"),`  v = ${r}(wp_labFInv(v.x), wp_labFInv(v.y), wp_labFInv(v.z));`;case"divW":return`  v = v / ${r}(${i(n.w[0])}, ${i(n.w[1])}, ${i(n.w[2])});`;case"mulW":return`  v = v * ${r}(${i(n.w[0])}, ${i(n.w[1])}, ${i(n.w[2])});`;case"clamp0":return`  v = max(v, ${r}(0.0));`;case"jzFwd":return`  v.x = (${i(1+Je)} * v.x) / (1.0 + ${i(Je)} * v.x) - ${i(_i)};`;case"jzInv":return t==="glsl"?`  { float t = v.x + ${i(_i)}; v.x = t / (${i(1+Je)} - ${i(Je)} * t); }`:`  { let t = v.x + ${i(_i)}; v.x = t / (${i(1+Je)} - ${i(Je)} * t); }`;case"polarToRect":return t==="glsl"?`  { float h = v.z * ${yh}; v = vec3(v.x, v.y * cos(h), v.y * sin(h)); }`:`  { let h = v.z * ${yh}; v = vec3<f32>(v.x, v.y * cos(h), v.y * sin(h)); }`;case"rectToPolar":return t==="glsl"?"  { float c = length(v.yz); float h = degrees(atan(v.z, v.y)); if (h < 0.0) h += 360.0; v = vec3(v.x, c, h); }":"  { let c = length(v.yz); var h = degrees(atan2(v.z, v.y)); if (h < 0.0) { h = h + 360.0; } v = vec3<f32>(v.x, c, h); }";default:throw new Error(`codegen: unknown op "${n.k}"`)}}function wh(n,t,e){let i=new Set,r=n.map(o=>L3(o,e,i)).join(`
`),s=[...i].map(o=>{let a=gr[e][o];if(!a)throw new Error(`codegen: no ${e} helper "${o}"`);return a}).join(`
`);return e==="js"?`${s}${s?`
`:""}function ${t}(c, out = [0, 0, 0]) {
  let v0 = c[0], v1 = c[1], v2 = c[2];
${r?r+`
`:""}  out[0] = v0; out[1] = v1; out[2] = v2;
  return out;
}`:e==="glsl"?`${s}${s?`
`:""}vec3 ${t}(vec3 c) {
  vec3 v = c;
${r?r+`
`:""}  return v;
}`:`${s}${s?`
`:""}fn ${t}(c: vec3<f32>) -> vec3<f32> {
  var v = c;
${r?r+`
`:""}  return v;
}`}var Fi=me,Ui=Ce(Gt.m.fromXyz,Ke),Nn=Gt.m.fromXyz,Hp=.206,Th=.03,zp=(1+Hp)/(1+Th),Ah=.017453292519943295,D3=216/24389,kp=24389/27,Eh=Fe[0],sl=Fe[1],$p=Fe[2],N3=4*Eh/(Eh+15*sl+3*$p),U3=9*sl/(Eh+15*sl+3*$p),ys={js:{f:n=>mr(n,"js"),decl:(n,t)=>`let ${n} = ${t};`,decl3:(n,t)=>`let ${n} = ${t};`,loop:(n,t)=>`for (let i = 0; i < ${n}; i++) {
${t}
}`,pow:(n,t)=>`Math.pow(${n}, ${t})`,cbrt:n=>`Math.cbrt(${n})`,sqrt:n=>`Math.sqrt(${n})`,cos:n=>`Math.cos(${n})`,sin:n=>`Math.sin(${n})`,atan2:(n,t)=>`Math.atan2(${n}, ${t})`,log:n=>`Math.log(${n})`,exp:n=>`Math.exp(${n})`,min:(n,t)=>`Math.min(${n}, ${t})`,max:(n,t)=>`Math.max(${n}, ${t})`,mod360:n=>`(((${n}) % 360) + 360) % 360`,in:n=>`c[${n}]`,gx:(n,t)=>`${n}[${t}]`,wrap:(n,t,e)=>`${t}
function ${n}(c, out = [0, 0, 0]) {
${e}
  return out;
}`,ret3:(n,t,e)=>`out[0] = ${n}; out[1] = ${t}; out[2] = ${e}; return out;`,linFn:n=>`const wp_oklc_lin = (L, C, kl, km, ks) => {
  let l = ${n.a0} * L + kl * C, m = ${n.a1} * L + km * C, q = ${n.a2} * L + ks * C;
  l = l * l * l; m = m * m * m; q = q * q * q;
  return [${n.s0} * l + ${n.s1} * m + ${n.s2} * q, ${n.s3} * l + ${n.s4} * m + ${n.s5} * q, ${n.s6} * l + ${n.s7} * m + ${n.s8} * q];
};
const wp_in01v = (v) => v[0] >= 0 && v[0] <= 1 && v[1] >= 0 && v[1] <= 1 && v[2] >= 0 && v[2] <= 1;
const wp_min3 = (v) => Math.min(v[0], Math.min(v[1], v[2]));
const wp_max3 = (v) => Math.max(v[0], Math.max(v[1], v[2]));
const wp_toe = (x) => 0.5 * (${n.k3} * x - ${n.k1} + Math.sqrt((${n.k3} * x - ${n.k1}) * (${n.k3} * x - ${n.k1}) + ${n.k4k2k3} * x));
const wp_toe_inv = (x) => (x * x + ${n.k1} * x) / (${n.k3} * (x + ${n.k2}));`},glsl:{f:n=>mr(n,"glsl"),decl:(n,t)=>`float ${n} = ${t};`,decl3:(n,t)=>`vec3 ${n} = ${t};`,loop:(n,t)=>`for (int i = 0; i < ${n}; i++) {
${t}
}`,pow:(n,t)=>`pow(${n}, ${t})`,cbrt:n=>`pow(${n}, ${mr(1/3,"glsl")})`,sqrt:n=>`sqrt(${n})`,cos:n=>`cos(${n})`,sin:n=>`sin(${n})`,atan2:(n,t)=>`atan(${n}, ${t})`,log:n=>`log(${n})`,exp:n=>`exp(${n})`,min:(n,t)=>`min(${n}, ${t})`,max:(n,t)=>`max(${n}, ${t})`,mod360:n=>`mod(mod(${n}, 360.0) + 360.0, 360.0)`,in:n=>`c.${"xyz"[n]}`,gx:(n,t)=>`${n}.${"xyz"[t]}`,wrap:(n,t,e)=>`${t}
vec3 ${n}(vec3 c) {
${e}
}`,ret3:(n,t,e)=>`return vec3(${n}, ${t}, ${e});`,linFn:n=>`vec3 wp_oklc_lin(float L, float C, float kl, float km, float ks) {
  float l = ${n.a0} * L + kl * C; float m = ${n.a1} * L + km * C; float q = ${n.a2} * L + ks * C;
  l = l * l * l; m = m * m * m; q = q * q * q;
  return vec3(${n.s0} * l + ${n.s1} * m + ${n.s2} * q, ${n.s3} * l + ${n.s4} * m + ${n.s5} * q, ${n.s6} * l + ${n.s7} * m + ${n.s8} * q);
}
bool wp_in01v(vec3 v) { return all(greaterThanEqual(v, vec3(0.0))) && all(lessThanEqual(v, vec3(1.0))); }
float wp_min3(vec3 v) { return min(v.x, min(v.y, v.z)); }
float wp_max3(vec3 v) { return max(v.x, max(v.y, v.z)); }
float wp_toe(float x) { float t = ${n.k3} * x - ${n.k1}; return 0.5 * (t + sqrt(t * t + ${n.k4k2k3} * x)); }
float wp_toe_inv(float x) { return (x * x + ${n.k1} * x) / (${n.k3} * (x + ${n.k2})); }`},wgsl:{f:n=>mr(n,"wgsl"),decl:(n,t)=>`var ${n} = ${t};`,decl3:(n,t)=>`var ${n} = ${t};`,loop:(n,t)=>`for (var i: i32 = 0; i < ${n}; i++) {
${t}
}`,pow:(n,t)=>`pow(${n}, ${t})`,cbrt:n=>`pow(${n}, ${mr(1/3,"wgsl")})`,sqrt:n=>`sqrt(${n})`,cos:n=>`cos(${n})`,sin:n=>`sin(${n})`,atan2:(n,t)=>`atan2(${n}, ${t})`,log:n=>`log(${n})`,exp:n=>`exp(${n})`,min:(n,t)=>`min(${n}, ${t})`,max:(n,t)=>`max(${n}, ${t})`,mod360:n=>`(((${n} % 360.0) + 360.0) % 360.0)`,in:n=>`c.${"xyz"[n]}`,gx:(n,t)=>`${n}.${"xyz"[t]}`,wrap:(n,t,e)=>`${t}
fn ${n}(c: vec3<f32>) -> vec3<f32> {
${e}
}`,ret3:(n,t,e)=>`return vec3<f32>(${n}, ${t}, ${e});`,linFn:n=>`fn wp_oklc_lin(L: f32, C: f32, kl: f32, km: f32, ks: f32) -> vec3<f32> {
  var l = ${n.a0} * L + kl * C; var m = ${n.a1} * L + km * C; var q = ${n.a2} * L + ks * C;
  l = l * l * l; m = m * m * m; q = q * q * q;
  return vec3<f32>(${n.s0} * l + ${n.s1} * m + ${n.s2} * q, ${n.s3} * l + ${n.s4} * m + ${n.s5} * q, ${n.s6} * l + ${n.s7} * m + ${n.s8} * q);
}
fn wp_in01v(v: vec3<f32>) -> bool { return all(v >= vec3<f32>(0.0)) && all(v <= vec3<f32>(1.0)); }
fn wp_min3(v: vec3<f32>) -> f32 { return min(v.x, min(v.y, v.z)); }
fn wp_max3(v: vec3<f32>) -> f32 { return max(v.x, max(v.y, v.z)); }
fn wp_toe(x: f32) -> f32 { let t = ${n.k3} * x - ${n.k1}; return 0.5 * (t + sqrt(t * t + ${n.k4k2k3} * x)); }
fn wp_toe_inv(x: f32) -> f32 { return (x * x + ${n.k1} * x) / (${n.k3} * (x + ${n.k2})); }`}};function Wp(n){return{a0:n.f(Fi[0]),a1:n.f(Fi[3]),a2:n.f(Fi[6]),s0:n.f(Ui[0]),s1:n.f(Ui[1]),s2:n.f(Ui[2]),s3:n.f(Ui[3]),s4:n.f(Ui[4]),s5:n.f(Ui[5]),s6:n.f(Ui[6]),s7:n.f(Ui[7]),s8:n.f(Ui[8]),k1:n.f(Hp),k2:n.f(Th),k3:n.f(zp),k4k2k3:n.f(4*Th*zp)}}function Xp(n){return[n.decl("h",n.mod360(n.in(0))),n.decl("hr",`h * ${n.f(Ah)}`),n.decl("ca",n.cos("hr")),n.decl("cb",n.sin("hr")),n.decl("kl",`${n.f(Fi[1])} * ca + ${n.f(Fi[2])} * cb`),n.decl("km",`${n.f(Fi[4])} * ca + ${n.f(Fi[5])} * cb`),n.decl("ks",`${n.f(Fi[7])} * ca + ${n.f(Fi[8])} * cb`)].join(`
  `)}function qp(n){return[n.decl("clo","0.0"),n.decl("chi","0.05"),n.loop(10,`    if (wp_min3(wp_oklc_lin(1.0, chi, kl, km, ks)) <= 0.0) { break; }
    clo = chi; chi = chi * 2.0;`),n.loop(34,`    ${n.decl("cmid","0.5 * (clo + chi)")}
    if (wp_min3(wp_oklc_lin(1.0, cmid, kl, km, ks)) > 0.0) { clo = cmid; } else { chi = cmid; }`),n.decl("Lc",n.cbrt("1.0 / wp_max3(wp_oklc_lin(1.0, clo, kl, km, ks))")),n.decl("Cc","clo * Lc")].join(`
  `)}function Yp(n){return[n.decl3("lin","wp_oklc_lin(L, C, kl, km, ks)"),n.ret3(`wp_srgb_encode(${n.gx("lin",0)})`,`wp_srgb_encode(${n.gx("lin",1)})`,`wp_srgb_encode(${n.gx("lin",2)})`)].join(`
  `)}function Ch(n){return n.ret3("1.0","1.0","1.0")}function vo(n){return n.ret3("0.0","0.0","0.0")}function F3(n,t){let e=ys[n],i=`${gr[n].srgb_encode}
${e.linFn(Wp(e))}`,r=`  ${e.decl("s",e.in(1))}
  ${e.decl("vv",e.in(2))}
  if (vv <= 1e-9) { ${vo(e)} }
  ${Xp(e)}
  ${qp(e)}
  ${e.decl("sMax","Cc / Lc")}
  ${e.decl("tMax","Cc / (1.0 - Lc)")}
  ${e.decl("kk","1.0 - 0.5 / sMax")}
  ${e.decl("denom","0.5 + tMax - tMax * kk * s")}
  ${e.decl("Lv","1.0 - s * 0.5 / denom")}
  ${e.decl("Cv","s * tMax * 0.5 / denom")}
  ${e.decl("L","vv * Lv")}
  ${e.decl("C","vv * Cv")}
  ${e.decl("Lvt","wp_toe_inv(Lv)")}
  ${e.decl("Cvt","Cv * Lvt / Lv")}
  ${e.decl("Lnew","wp_toe_inv(L)")}
  if (L > 0.0) { C = C * Lnew / L; } else { C = 0.0; }
  L = Lnew;
  ${e.decl3("rs","wp_oklc_lin(Lvt, Cvt, kl, km, ks)")}
  ${e.decl("scale",e.cbrt(`1.0 / ${e.max(e.max(e.gx("rs",0),e.gx("rs",1)),e.max(e.gx("rs",2),"0.0"))}`))}
  L = L * scale;
  C = C * scale;
  ${Yp(e)}`;return e.wrap(t,i,r)}var Vp=(n,t)=>({s:"0.11516993 + 1.0 / (7.4477897 + 4.1590124 * cb + ca * (-2.19557347 + 1.75198401 * cb + ca * (-2.13704948 - 10.02301043 * cb + ca * (-4.24894561 + 5.38770819 * cb + 4.69891013 * ca))))",t:"0.11239642 + 1.0 / (1.6132032 - 0.68124379 * cb + ca * (0.40370612 + 0.90148123 * cb + ca * (-0.27087943 + 0.6122399 * cb + ca * (0.00299215 - 0.45399568 * cb - 0.14661872 * ca))))"})[t];function O3(n,t){let e=ys[n],i=`${gr[n].srgb_encode}
${e.linFn(Wp(e))}`,r=`  ${e.decl("s",e.in(1))}
  ${e.decl("ll",e.in(2))}
  if (ll >= 1.0 - 1e-9) { ${Ch(e)} }
  if (ll <= 1e-9) { ${vo(e)} }
  ${Xp(e)}
  ${e.decl("L","wp_toe_inv(ll)")}
  ${qp(e)}
  ${e.decl("mlo","0.0")}
  ${e.decl("mhi","0.05")}
  ${e.loop(8,`    if (mhi >= 2.0) { break; }
    if (!wp_in01v(wp_oklc_lin(L, mhi, kl, km, ks))) { break; }
    mlo = mhi; mhi = mhi * 2.0;`)}
  ${e.loop(48,`    ${e.decl("mm","0.5 * (mlo + mhi)")}
    if (wp_in01v(wp_oklc_lin(L, mm, kl, km, ks))) { mlo = mm; } else { mhi = mm; }`)}
  ${e.decl("cMax","mlo")}
  ${e.decl("sMax","Cc / Lc")}
  ${e.decl("tMax","Cc / (1.0 - Lc)")}
  ${e.decl("kk",`cMax / ${e.min("L * sMax","(1.0 - L) * tMax")}`)}
  ${e.decl("sMid",Vp(e,"s"))}
  ${e.decl("tMid",Vp(e,"t"))}
  ${e.decl("caa","L * sMid")}
  ${e.decl("cbb","(1.0 - L) * tMid")}
  ${e.decl("cMid",`0.9 * kk * ${e.sqrt(e.sqrt("1.0 / (1.0 / (caa * caa * caa * caa) + 1.0 / (cbb * cbb * cbb * cbb))"))}`)}
  caa = L * 0.4;
  cbb = (1.0 - L) * 0.8;
  ${e.decl("c0",e.sqrt("1.0 / (1.0 / (caa * caa) + 1.0 / (cbb * cbb))"))}
  ${e.decl("C","0.0")}
  if (s < 0.8) {
    ${e.decl("t1","1.25 * s")}
    ${e.decl("k1v","0.8 * c0")}
    ${e.decl("k2v","1.0 - k1v / cMid")}
    C = t1 * k1v / (1.0 - k2v * t1);
  } else {
    ${e.decl("t2","5.0 * (s - 0.8)")}
    ${e.decl("k1w","0.2 * cMid * cMid * 1.5625 / c0")}
    ${e.decl("k2w","1.0 - k1w / (cMax - cMid)")}
    C = cMid + t2 * k1w / (1.0 - k2w * t2);
  }
  ${Yp(e)}`;return e.wrap(t,i,r)}function Gp(n,t,e){let i=ys[n],r=gr[n].srgb_encode,s=[];for(let c=0;c<3;c++){let l=Nn[c*3],u=Nn[c*3+1],f=Nn[c*3+2],h=284517*l-94839*f,p=838422*f+769860*u+731718*l,g=632260*f-126452*u;for(let v=0;v<2;v++){let m=`(${i.f(g)} * sub2 + ${i.f(126452*v)})`,d=`(${i.f(h)} * sub2 / ${m})`,M=`((${i.f(p)} * ll * sub2 - ${i.f(769860*v)} * ll) / ${m})`;s.push({slope:d,icpt:M,i:c*2+v})}}let o=s.map(({slope:c,icpt:l,i:u})=>{let f=`sl${u}`,h=`ic${u}`,p=`dd${u}`;return e?`  ${i.decl(f,c)}
  ${i.decl(h,l)}
  ${i.decl(p,`${i.max(h,`-(${h})`)} / ${i.sqrt(`${f} * ${f} + 1.0`)}`)}
  if (${p} < mx) { mx = ${p}; }`:`  ${i.decl(f,c)}
  ${i.decl(h,l)}
  ${i.decl(p,`${h} / (sh - ${f} * chh)`)}
  if (${p} >= 0.0 && ${p} < mx) { mx = ${p}; }`}).join(`
`),a=`  ${i.decl("s",i.in(1))}
  ${i.decl("ll",i.in(2))}
  if (ll > 99.9999999) { ${Ch(i)} }
  if (ll < 1e-8) { ${vo(i)} }
  ${i.decl("h",i.mod360(i.in(0)))}
  ${i.decl("hr",`h * ${i.f(Ah)}`)}
  ${i.decl("sh",i.sin("hr"))}
  ${i.decl("chh",i.cos("hr"))}
  ${i.decl("sub1","(ll + 16.0) * (ll + 16.0) * (ll + 16.0) / 1560896.0")}
  ${i.decl("sub2","sub1")}
  if (sub1 <= ${i.f(D3)}) { sub2 = ll / ${i.f(kp)}; }
  ${i.decl("mx","1e30")}
${o}
  ${i.decl("C","mx / 100.0 * s")}
  ${i.decl("uu","C * chh")}
  ${i.decl("vv","C * sh")}
  ${i.decl("up",`uu / (13.0 * ll) + ${i.f(N3)}`)}
  ${i.decl("vp",`vv / (13.0 * ll) + ${i.f(U3)}`)}
  ${i.decl("Y",`ll / ${i.f(kp)}`)}
  if (ll > 8.0) { Y = (ll + 16.0) / 116.0; Y = Y * Y * Y; }
  Y = Y * ${i.f(sl)};
  ${i.decl("X","Y * 9.0 * up / (4.0 * vp)")}
  ${i.decl("Z","Y * (12.0 - 3.0 * up - 20.0 * vp) / (4.0 * vp)")}
  ${i.decl("lr",`${i.f(Nn[0])} * X + ${i.f(Nn[1])} * Y + ${i.f(Nn[2])} * Z`)}
  ${i.decl("lg",`${i.f(Nn[3])} * X + ${i.f(Nn[4])} * Y + ${i.f(Nn[5])} * Z`)}
  ${i.decl("lb",`${i.f(Nn[6])} * X + ${i.f(Nn[7])} * Y + ${i.f(Nn[8])} * Z`)}
  ${i.ret3("wp_srgb_encode(lr)","wp_srgb_encode(lg)","wp_srgb_encode(lb)")}`;return i.wrap(t,r,a)}function Rh(n){let t=Gn,e=ii.cat16,i=Ce(e,Gt.m.toXyz).map((l,u)=>l*t.fl*t.rgbD[Math.floor(u/3)]),r=ie(e),s=[];for(let l=0;l<3;l++)for(let u=0;u<3;u++)s[l*3+u]=r[l*3+u]/(t.rgbD[u]*t.fl);let o=Ce(Gt.m.fromXyz,s),a=Math.pow(1.64-Math.pow(.29,t.n),.73),c=5e4/13*t.nc*t.ncb;return{Mf:i.map(n.f),Mb:o.map(n.f),aw:n.f(t.aw),nbb:n.f(t.nbb),cz:n.f(t.cz),icz:n.f(1/t.cz),fl25:n.f(t.fl25),Kn:n.f(a),P1:n.f(c)}}var Ph={js:`const wp_cam_adapt = (y) => { const a = Math.abs(y); const f = Math.pow(a, 0.42); return Math.sign(y) * 400 * f / (f + 27.13); };
const wp_cam_unadapt = (v) => { const a = Math.abs(v); const base = Math.max(0, 27.13 * a / (400 - a)); return Math.sign(v) * Math.pow(base, ${1/.42}); };`,glsl:`float wp_cam_adapt(float y) { float a = abs(y); float f = pow(a, 0.42); return sign(y) * 400.0 * f / (f + 27.13); }
float wp_cam_unadapt(float v) { float a = abs(v); float base = max(0.0, 27.13 * a / (400.0 - a)); return sign(v) * pow(base, ${(1/.42).toPrecision(17)}); }`,wgsl:`fn wp_cam_adapt(y: f32) -> f32 { let a = abs(y); let f = pow(a, 0.42); return sign(y) * 400.0 * f / (f + 27.13); }
fn wp_cam_unadapt(v: f32) -> f32 { let a = abs(v); let base = max(0.0, 27.13 * a / (400.0 - a)); return sign(v) * pow(base, ${(1/.42).toPrecision(17)}); }`};function Zp(n,t){return`${n.decl("alpha",`C / ${n.sqrt("J / 100.0")}`)}
  ${n.decl("tt",n.pow(`alpha / ${t.Kn}`,n.f(1/.9)))}
  ${n.decl("ac",`${t.aw} * ${n.pow("J / 100.0",t.icz)}`)}
  ${n.decl("p2",`ac / ${t.nbb}`)}
  ${n.decl("gam",`23.0 * (p2 + 0.305) * tt / (23.0 * ${t.P1} * eHue + 11.0 * tt * ${n.cos("hr")} + 108.0 * tt * ${n.sin("hr")})`)}
  ${n.decl("ca",`gam * ${n.cos("hr")}`)}
  ${n.decl("cb",`gam * ${n.sin("hr")}`)}
  ${n.decl("rA","(460.0 * p2 + 451.0 * ca + 288.0 * cb) / 1403.0")}
  ${n.decl("gA","(460.0 * p2 - 891.0 * ca - 261.0 * cb) / 1403.0")}
  ${n.decl("bA","(460.0 * p2 - 220.0 * ca - 6300.0 * cb) / 1403.0")}
  ${n.decl("cr","wp_cam_unadapt(rA)")}
  ${n.decl("cg","wp_cam_unadapt(gA)")}
  ${n.decl("cbn","wp_cam_unadapt(bA)")}
  ${n.decl("lr",`${t.Mb[0]} * cr + ${t.Mb[1]} * cg + ${t.Mb[2]} * cbn`)}
  ${n.decl("lg",`${t.Mb[3]} * cr + ${t.Mb[4]} * cg + ${t.Mb[5]} * cbn`)}
  ${n.decl("lb",`${t.Mb[6]} * cr + ${t.Mb[7]} * cg + ${t.Mb[8]} * cbn`)}`}function B3(n,t){let e=ys[n],i=Rh(e),r=`${gr[n].srgb_decode}
${Ph[n]}`,s=`  ${e.decl("dr",`wp_srgb_decode(${e.in(0)})`)}
  ${e.decl("dg",`wp_srgb_decode(${e.in(1)})`)}
  ${e.decl("db",`wp_srgb_decode(${e.in(2)})`)}
  ${e.decl("rA",`wp_cam_adapt(${i.Mf[0]} * dr + ${i.Mf[1]} * dg + ${i.Mf[2]} * db)`)}
  ${e.decl("gA",`wp_cam_adapt(${i.Mf[3]} * dr + ${i.Mf[4]} * dg + ${i.Mf[5]} * db)`)}
  ${e.decl("bA",`wp_cam_adapt(${i.Mf[6]} * dr + ${i.Mf[7]} * dg + ${i.Mf[8]} * db)`)}
  ${e.decl("ca","(11.0 * rA - 12.0 * gA + bA) / 11.0")}
  ${e.decl("cb","(rA + gA - 2.0 * bA) / 9.0")}
  ${e.decl("u","(20.0 * rA + 20.0 * gA + 21.0 * bA) / 20.0")}
  ${e.decl("ac",`((40.0 * rA + 20.0 * gA + bA) / 20.0) * ${i.nbb}`)}
  ${e.decl("J",`100.0 * ${e.pow(`ac / ${i.aw}`,i.cz)}`)}
  ${e.decl("hr",`${e.atan2("cb","ca")}`)}
  ${e.decl("eHue",`0.25 * (${e.cos("hr + 2.0")} + 3.8)`)}
  ${e.decl("tt",`${i.P1} * eHue * ${e.sqrt("ca * ca + cb * cb")} / (u + 0.305)`)}
  ${e.decl("alpha",`${e.pow("tt","0.9")} * ${i.Kn}`)}
  ${e.decl("C",`alpha * ${e.sqrt("J / 100.0")}`)}
  ${e.decl("Mm",`C * ${i.fl25}`)}
  ${e.decl("Mp",`${e.log("1.0 + 0.0228 * Mm")} / 0.0228`)}
  ${e.ret3("1.7 * J / (1.0 + 0.007 * J)",`Mp * ${e.cos("hr")}`,`Mp * ${e.sin("hr")}`)}`;return e.wrap(t,r,s)}function z3(n,t){let e=ys[n],i=Rh(e),r=`${gr[n].srgb_encode}
${Ph[n]}`,s=`  ${e.decl("Jp",e.in(0))}
  ${e.decl("Mp",e.sqrt(`${e.in(1)} * ${e.in(1)} + ${e.in(2)} * ${e.in(2)}`))}
  ${e.decl("J","Jp / (1.7 - 0.007 * Jp)")}
  if (J <= 0.0) { ${vo(e)} }
  ${e.decl("C",`(${e.exp("0.0228 * Mp")} - 1.0) / 0.0228 / ${i.fl25}`)}
  ${e.decl("hr",`${e.atan2(e.in(2),e.in(1))}`)}
  ${e.decl("eHue",`0.25 * (${e.cos("hr + 2.0")} + 3.8)`)}
  ${Zp(e,i)}
  ${e.ret3("wp_srgb_encode(lr)","wp_srgb_encode(lg)","wp_srgb_encode(lb)")}`;return e.wrap(t,r,s)}function k3(n,t){let e=ys[n],i=Rh(e),r=`${gr[n].srgb_encode}
${Ph[n]}`,s=(()=>{let a=Gn,c=ie(ii.cat16);return[0,1,2].map(l=>e.f(c[3+l]/(a.rgbD[l]*a.fl)))})(),o=`  ${e.decl("tone",e.in(2))}
  if (tone <= 0.0) { ${vo(e)} }
  if (tone >= 100.0) { ${Ch(e)} }
  ${e.decl("fy","(tone + 16.0) / 116.0")}
  ${e.decl("targetY","fy * fy * fy")}
  if (fy <= ${e.f(6/29)}) { targetY = (116.0 * fy - 16.0) / ${e.f(24389/27)}; }
  ${e.decl("C",e.in(1))}
  ${e.decl("hr",`${e.mod360(e.in(0))} * ${e.f(Ah)}`)}
  ${e.decl("eHue",`0.25 * (${e.cos("hr + 2.0")} + 3.8)`)}
  ${e.decl("jlo","0.0")}
  ${e.decl("jhi","400.0")}
  ${e.loop(48,`    ${e.decl("J","0.5 * (jlo + jhi)")}
    ${e.decl("alpha",`C / ${e.sqrt(e.max("J / 100.0","1e-9"))}`)}
    ${e.decl("tt",e.pow(`alpha / ${i.Kn}`,e.f(1/.9)))}
    ${e.decl("ac",`${i.aw} * ${e.pow("J / 100.0",i.icz)}`)}
    ${e.decl("p2",`ac / ${i.nbb}`)}
    ${e.decl("gam",`23.0 * (p2 + 0.305) * tt / (23.0 * ${i.P1} * eHue + 11.0 * tt * ${e.cos("hr")} + 108.0 * tt * ${e.sin("hr")})`)}
    ${e.decl("ca",`gam * ${e.cos("hr")}`)}
    ${e.decl("cb",`gam * ${e.sin("hr")}`)}
    ${e.decl("cr","wp_cam_unadapt((460.0 * p2 + 451.0 * ca + 288.0 * cb) / 1403.0)")}
    ${e.decl("cg","wp_cam_unadapt((460.0 * p2 - 891.0 * ca - 261.0 * cb) / 1403.0)")}
    ${e.decl("cbn","wp_cam_unadapt((460.0 * p2 - 220.0 * ca - 6300.0 * cb) / 1403.0)")}
    ${e.decl("Y",`${s[0]} * cr + ${s[1]} * cg + ${s[2]} * cbn`)}
    if (Y < targetY) { jlo = J; } else { jhi = J; }`)}
  ${e.decl("J","0.5 * (jlo + jhi)")}
  ${Zp(e,i)}
  ${e.ret3("wp_srgb_encode(lr)","wp_srgb_encode(lg)","wp_srgb_encode(lb)")}`;return e.wrap(t,r,o)}var V3={"okhsv|srgb":F3,"okhsl|srgb":O3,"hsluv|srgb":(n,t)=>Gp(n,t,!1),"hpluv|srgb":(n,t)=>Gp(n,t,!0),"srgb|cam16-ucs":B3,"cam16-ucs|srgb":z3,"hct|srgb":k3};function Jp(n,t,e,i){let r=V3[`${t}|${e}`];return r?r(n,i):null}function Kp(n,t){let e=pr[n],i=pr[t];if(!e)throw new Error(`codegen: unsupported space "${n}" (have: ${Object.keys(pr).join(", ")})`);if(!i)throw new Error(`codegen: unsupported space "${t}"`);return Bp([...e.toXyzOps,...i.fromXyzOps])}function jp(n,t){return`wp_${n}_to_${t}`.replace(/-/g,"_")}function Ih(n,t,{name:e=jp(n,t)}={}){return Jp("glsl",n,t,e)??wh(Kp(n,t),e,"glsl")}function G3(n){return`wp_gamut_map_oklch_to_${n}`.replace(/-/g,"_")}function H3(n,t,e){let i=jp("oklch",t),r=wh(Kp("oklch",t),i,n);return n==="js"?`${r}
const wp_in01 = (v) => v[0] >= 0 && v[0] <= 1 && v[1] >= 0 && v[1] <= 1 && v[2] >= 0 && v[2] <= 1;
function ${e}(lch, out = [0, 0, 0]) {
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
}`:n==="glsl"?`${r}
bool wp_in01(vec3 v) { return all(greaterThanEqual(v, vec3(0.0))) && all(lessThanEqual(v, vec3(1.0))); }
vec3 ${e}(vec3 lch) {
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
}`:`${r}
fn wp_in01(v: vec3<f32>) -> bool { return all(v >= vec3<f32>(0.0)) && all(v <= vec3<f32>(1.0)); }
fn ${e}(lch: vec3<f32>) -> vec3<f32> {
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
}`}function $3(n){let t=pr[n];if(!t||!t.fromXyzOps.some(e=>e.k==="mat3"))throw new Error(`codegen: gamut mapping needs an RGB gamut space (got "${n}")`)}function Lh(n,{name:t=G3(n)}={}){return $3(n),H3("glsl",n,t)}function W3(...n){let t=new Set,e=[];for(let i of n){let r=i.split(`
`),s=!1,o=0;for(let a of r){let c=/^(?:float|vec[234]|bool|int) (wp_\w+)\(/.exec(a);o===0&&c&&(s=t.has(c[1]),t.add(c[1])),!s&&a.trim()&&e.push(a),o+=(a.match(/{/g)||[]).length-(a.match(/}/g)||[]).length,o===0&&a.includes("}")&&(s=!1)}}return e.join(`
`)}var X3=`
  out vec2 vUv;
  void main() {
    // Fullscreen triangle from gl_VertexID \u2014 no attributes, no fuss.
    vec2 p = vec2(float((gl_VertexID & 1) << 2) - 1.0, float((gl_VertexID & 2) << 1) - 1.0);
    vUv = p * 0.5 + 0.5;
    gl_Position = vec4(p, 0.0, 1.0);
  }
`;function q3(){return`
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
${W3(Ih("xyz-d65","oklch"),Lh("display-p3"),Lh("srgb"),Ih("srgb","display-p3"))}
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
`}var Y3=`
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
`,Z3=`
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
`;function Dh(n,t){let e=new ns({glslVersion:Qs,vertexShader:X3,fragmentShader:n,uniforms:t,depthTest:!1,depthWrite:!1}),i=new ve(new je,e);i.frustumCulled=!1,i.geometry.setDrawRange(0,3);let s=new Er;return s.add(i),{scene:s,mat:e}}function Qp(n,t){return new We(n,t,{type:xn,minFilter:Ae,magFilter:Ae,depthBuffer:!1,colorSpace:Rn})}function Nh(n,t,e,i){let r=new We(t,e,{type:xn,samples:4,colorSpace:Rn}),s=Math.max(1,t>>1),o=Math.max(1,e>>1),a=Qp(s,o),c=Qp(s,o),l=Dh(Y3,{tScene:{value:r.texture},uMode:i,uThreshold:{value:1.5}}),u=Dh(Z3,{tSrc:{value:null},uDir:{value:new Xt}}),f=Dh(q3(),{tScene:{value:r.texture},tBloom:{value:c.texture},uMode:i,uP3:{value:0},uSrgbPreview:{value:0},uExposure:{value:1},uBloomAmt:{value:1}}),h=new Cr;function p(g,v){n.setRenderTarget(r),n.render(g,v),n.setRenderTarget(a),n.render(l.scene,h);for(let m=0;m<2;m++)u.mat.uniforms.tSrc.value=a.texture,u.mat.uniforms.uDir.value.set(1/s,0),n.setRenderTarget(c),n.render(u.scene,h),u.mat.uniforms.tSrc.value=c.texture,u.mat.uniforms.uDir.value.set(0,1/o),n.setRenderTarget(a),n.render(u.scene,h);f.mat.uniforms.tBloom.value=a.texture,n.setRenderTarget(null),n.render(f.scene,h)}return{render:p,output:f.mat,sceneRT:r}}Ot.enabled=!1;var J3=[{name:"ring",gas:"neon",pos:[2.55,3,-3],intensity:2.2},{name:"bar",gas:"helium",pos:[-2.55,2.6,-6],intensity:1.6},{name:"street",gas:"sodium-lamp",pos:[2.1,4.6,4.5],intensity:3.2}],Fh=document.getElementById("alley"),cl=Fh.getContext("webgl2",{antialias:!1,alpha:!1});if("drawingBufferColorSpace"in cl)try{cl.drawingBufferColorSpace="display-p3"}catch{}var Oh=cl.drawingBufferColorSpace==="display-p3",Mo=new gc({canvas:Fh,context:cl,antialias:!1});Mo.toneMapping=gn;var hl={value:0},nm={derived:Ap(J3),materialsSrgb:il,uMode:hl},K3=Cp(nm),yo=new $e(55,1,.1,60);function im(){let n=Fh.clientWidth,t=Math.round(n*9/16),e=Math.min(window.devicePixelRatio||1,2);return Mo.setSize(n,t,!1),Mo.setPixelRatio(e),yo.aspect=n/t,yo.updateProjectionMatrix(),[Math.round(n*e),Math.round(t*e)]}var[ol,al]=im(),ll=Nh(Mo,ol,al,hl);ll.output.uniforms.uP3.value=Oh?1:0;window.addEventListener("resize",()=>{let[n,t]=im();(n!==ol||t!==al)&&([ol,al]=[n,t],ll=Nh(Mo,ol,al,hl),ll.output.uniforms.uP3.value=Oh?1:0)});var Uh=document.getElementById("mode");Uh?.addEventListener("change",()=>{hl.value=Uh.checked?1:0,document.body.dataset.mode=Uh.checked?"naive":"whitepoint"});var tm=document.getElementById("gamut-badge");tm&&(tm.textContent=Oh?"display-p3 output \u2014 your display shows the wide-gamut reds":"sRGB output \u2014 the cusp mapper is doing the fallback live");var em=document.getElementById("derived");em&&(em.textContent=nm.derived.lights.map(n=>`${n.name} (${n.gas}): XYZ ${n.xyz.map(t=>t.toFixed(3)).join(" ")}`).join(`
`));var j3=performance.now();function rm(){let n=(performance.now()-j3)/1e3;yo.position.set(.28*Math.sin(n*.07),1.7+.06*Math.sin(n*.11),7.5),yo.lookAt(0,2.1,-6),ll.render(K3,yo),requestAnimationFrame(rm)}requestAnimationFrame(rm);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
