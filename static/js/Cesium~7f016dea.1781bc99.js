(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~7f016dea"],{"8dff":function(t,e,a){"use strict";a.d(e,"a",(function(){return P}));var n=a("c8d1"),o=a("be18"),r=a("bd8d"),s=a("abab"),c=a("535a"),i=a("2f63"),u=a("52f0"),d=a("1b8d"),p=a("daa2"),m=a("d34e"),f=a.n(m),y=a("f20a"),b=a("8b68"),l=a("9fb6"),O=a("1da3"),h=a("b08e"),A=a("fa74"),T=a("08b8"),E=a("fdb7"),_=a("aa13"),I=a("8bde"),D=a("b005"),C=a("2773"),N=a("a141");const R=I["a"].Components,z=I["a"].Scene,S=I["a"].Node,j=I["a"].Primitive,B=I["a"].Attribute,L=I["a"].Quantization,w=I["a"].FeatureIdAttribute,q=I["a"].Material,g=I["a"].MetallicRoughness;function P(t){t=Object(c["a"])(t,c["a"].EMPTY_OBJECT);const e=t.arrayBuffer,a=Object(c["a"])(t.byteOffset,0);this._arrayBuffer=e,this._byteOffset=a,this._loadAttributesFor2D=Object(c["a"])(t.loadAttributesFor2D,!1),this._parsedContent=void 0,this._decodePromise=void 0,this._decodedAttributes=void 0,this._promise=void 0,this._process=function(t){},this._state=C["a"].UNLOADED,this._buffers=[],this._components=void 0,this._transform=u["a"].IDENTITY}function V(t,e){const a=t._parsedContent,n=a.draco;let o;if(o=Object(i["a"])(n)?T["a"].decodePointCloud(n,e):Promise.resolve(),Object(i["a"])(o))return t._decodePromise=o,o.then((function(a){if(!t.isDestroyed())return Object(i["a"])(a)&&x(t,n,a),W(t,e),t._state=C["a"].READY,t})).catch((function(e){t.unload(),t._state=C["a"].FAILED;const a="Failed to load Draco pnts";return Promise.reject(t.getError(a,e))}))}function x(t,e,a){t._state=C["a"].READY;const n=t._parsedContent;let r;if(Object(i["a"])(a.POSITION)){if(r={name:"POSITION",semantic:N["a"].POSITION,typedArray:a.POSITION.array,componentDatatype:s["a"].FLOAT,type:O["a"].VEC3,isQuantized:!1},Object(i["a"])(a.POSITION.data.quantization)){const t=a.POSITION.data.quantization,e=t.range,n=o["a"].fromElements(e,e,e),c=o["a"].unpack(t.minValues),i=(1<<t.quantizationBits)-1;r.isQuantized=!0,r.quantizedRange=i,r.quantizedVolumeOffset=c,r.quantizedVolumeScale=n,r.quantizedComponentDatatype=s["a"].UNSIGNED_SHORT,r.quantizedType=O["a"].VEC3}n.positions=r}if(Object(i["a"])(a.NORMAL)){if(r={name:"NORMAL",semantic:N["a"].NORMAL,typedArray:a.NORMAL.array,componentDatatype:s["a"].FLOAT,type:O["a"].VEC3,isQuantized:!1,octEncoded:!1,octEncodedZXY:!1},Object(i["a"])(a.NORMAL.data.quantization)){const t=(1<<a.NORMAL.data.quantization.quantizationBits)-1;r.quantizedRange=t,r.octEncoded=!0,r.octEncodedZXY=!0,r.quantizedComponentDatatype=s["a"].UNSIGNED_BYTE,r.quantizedType=O["a"].VEC2}n.normals=r}if(Object(i["a"])(a.RGBA)?n.colors={name:"COLOR",semantic:N["a"].COLOR,setIndex:0,typedArray:a.RGBA.array,componentDatatype:s["a"].UNSIGNED_BYTE,type:O["a"].VEC4,normalized:!0,isTranslucent:!0}:Object(i["a"])(a.RGB)&&(n.colors={name:"COLOR",semantic:N["a"].COLOR,setIndex:0,typedArray:a.RGB.array,componentDatatype:s["a"].UNSIGNED_BYTE,type:O["a"].VEC3,normalized:!0,isTranslucent:!1}),Object(i["a"])(a.BATCH_ID)){const t=a.BATCH_ID.array;n.batchIds={name:"_FEATURE_ID",semantic:N["a"].FEATURE_ID,setIndex:0,typedArray:t,componentDatatype:s["a"].fromTypedArray(t),type:O["a"].SCALAR}}let c=n.batchTableJson;const u=e.batchTableProperties;for(const o in u)if(u.hasOwnProperty(o)){const t=a[o];Object(i["a"])(c)||(c={}),n.hasDracoBatchTable=!0;const e=t.data;c[o]={byteOffset:e.byteOffset,type:G(e.componentsPerAttribute),componentType:v(e.componentDatatype),typedArray:t.array}}n.batchTableJson=c}function G(t){switch(t){case 1:return"SCALAR";case 2:return"VEC2";case 3:return"VEC3";case 4:return"VEC4"}}function v(t){switch(t){case p["a"].BYTE:return"BYTE";case p["a"].UNSIGNED_BYTE:return"UNSIGNED_BYTE";case p["a"].SHORT:return"SHORT";case p["a"].UNSIGNED_SHORT:return"UNSIGNED_SHORT";case p["a"].INT:return"INT";case p["a"].UNSIGNED_INT:return"UNSIGNED_INT";case p["a"].DOUBLE:return"DOUBLE";case p["a"].FLOAT:return"FLOAT"}}function U(t,e,a){let s,u=e.typedArray;if(e.octEncoded&&(s=new L,s.octEncoded=e.octEncoded,s.octEncodedZXY=e.octEncodedZXY,s.normalizationRange=e.quantizedRange,s.type=e.quantizedType,s.componentDatatype=e.quantizedComponentDatatype),e.isQuantized){s=new L;const t=e.quantizedRange;s.normalizationRange=t,s.quantizedVolumeOffset=o["a"].ZERO;const a=e.quantizedVolumeScale;s.quantizedVolumeDimensions=a,s.quantizedVolumeStepSize=o["a"].divideByScalar(a,t,new o["a"]),s.componentDatatype=e.quantizedComponentDatatype,s.type=e.quantizedType}const d=new B;if(d.name=e.name,d.semantic=e.semantic,d.setIndex=e.setIndex,d.componentDatatype=e.componentDatatype,d.type=e.type,d.normalized=Object(c["a"])(e.normalized,!1),d.min=e.min,d.max=e.max,d.quantization=s,e.isRGB565&&(u=n["a"].decodeRGB565(u)),Object(i["a"])(e.constantColor)){const t=new Array(4);d.constant=r["a"].pack(e.constantColor,t)}else{const e=y["a"].createVertexBuffer({typedArray:u,context:a,usage:b["a"].STATIC_DRAW});e.vertexArrayDestroyable=!1,t._buffers.push(e),d.buffer=e}const p=t._loadAttributesFor2D;return d.semantic===N["a"].POSITION&&p&&(d.typedArray=u),d}let Y,F;function M(t){if(!Object(i["a"])(F)){Y=new f.a(0),F=new Array(t);for(let e=0;e<t;++e)F[e]=Y.random()}return F}Object(i["a"])(Object.create)&&(P.prototype=Object.create(_["a"].prototype),P.prototype.constructor=P),Object.defineProperties(P.prototype,{promise:{get:function(){return this._promise}},cacheKey:{get:function(){}},components:{get:function(){return this._components}},transform:{get:function(){return this._transform}}}),P.prototype.load=function(){this._parsedContent=D["a"].parse(this._arrayBuffer,this._byteOffset),this._state=C["a"].PROCESSING;const t=this;this._promise=new Promise((function(e,a){t._process=function(n){if(t._state===C["a"].PROCESSING){if(Object(i["a"])(t._decodePromise))return;const o=V(t,n.context);Object(i["a"])(o)&&o.then(e).catch(a)}}}))},P.prototype.process=function(t){this._process(t)};const Q=new o["a"],H=new o["a"],X=new o["a"];function Z(t){const e=t.typedArray,a=20,n=e.length/3,r=Math.min(n,a),s=M(a),c=Number.MAX_VALUE,i=-Number.MAX_VALUE;let u,d,p,m=o["a"].fromElements(c,c,c,Q),f=o["a"].fromElements(i,i,i,H);if(t.isQuantized)m=o["a"].ZERO,f=t.quantizedVolumeScale;else for(u=0;u<r;++u)d=Math.floor(s[u]*n),p=o["a"].unpack(e,3*d,X),o["a"].minimumByComponent(m,p,m),o["a"].maximumByComponent(f,p,f);t.min=o["a"].clone(m),t.max=o["a"].clone(f)}const J={name:N["a"].COLOR,semantic:N["a"].COLOR,setIndex:0,constantColor:r["a"].DARKGRAY,componentDatatype:s["a"].FLOAT,type:O["a"].VEC4,isQuantized:!1,isTranslucent:!1};function k(t,e,a){const n=[];let o;const r=e.positions;return Object(i["a"])(r)&&(Z(r),o=U(t,r,a),o.count=e.pointsLength,n.push(o)),Object(i["a"])(e.normals)&&(o=U(t,e.normals,a),n.push(o)),Object(i["a"])(e.colors)?(o=U(t,e.colors,a),n.push(o)):(o=U(t,J,a),n.push(o)),Object(i["a"])(e.batchIds)&&(o=U(t,e.batchIds,a),n.push(o)),n}function K(t,e){const a=t.batchLength,n=t.pointsLength,o=t.batchTableBinary,r=!Object(i["a"])(t.batchIds);if(Object(i["a"])(o)||t.hasDracoBatchTable){const s=Object(c["a"])(a,n);return Object(A["a"])({count:s,batchTable:t.batchTableJson,binaryBody:o,parseAsPropertyAttributes:r,customAttributeOutput:e})}return new E["a"]({schema:{},propertyTables:[]})}function W(t,e){const a=t._parsedContent,n=new g;n.metallicFactor=0,n.roughnessFactor=.9;const o=new q;o.metallicRoughness=n;const r=a.colors;Object(i["a"])(r)&&r.isTranslucent&&(o.alphaMode=l["a"].BLEND);const s=!Object(i["a"])(a.normals);o.unlit=s;const c=new j;if(c.attributes=k(t,a,e),c.primitiveType=d["a"].POINTS,c.material=o,Object(i["a"])(a.batchIds)){const t=new w;t.propertyTableId=0,t.setIndex=0,t.positionalLabel="featureId_0",c.featureIds.push(t)}const p=new S;p.index=0,p.primitives=[c];const m=new z;m.nodes=[p],m.upAxis=h["a"].Z,m.forwardAxis=h["a"].X;const f=new R;f.scene=m,f.nodes=[p];const y=[];f.structuralMetadata=K(a,y),y.length>0&&$(t,c,y,e),Object(i["a"])(a.rtcCenter)&&(f.transform=u["a"].multiplyByTranslation(f.transform,a.rtcCenter,f.transform));const b=a.positions;Object(i["a"])(b)&&b.isQuantized&&(f.transform=u["a"].multiplyByTranslation(f.transform,b.quantizedVolumeOffset,f.transform)),t._components=f,t._parsedContent=void 0}function $(t,e,a,n){const o=e.attributes,r=a.length;for(let s=0;s<r;s++){const e=a[s],r=y["a"].createVertexBuffer({typedArray:e.typedArray,context:n,usage:b["a"].STATIC_DRAW});r.vertexArrayDestroyable=!1,t._buffers.push(r),e.buffer=r,e.typedArray=void 0,o.push(e)}e.propertyAttributeIds=[0]}P.prototype.unload=function(){const t=this._buffers;for(let e=0;e<t.length;e++)t[e].destroy();t.length=0,this._components=void 0,this._parsedContent=void 0}}}]);