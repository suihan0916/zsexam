(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~b77f9854"],{cbc3:function(e,t,a){"use strict";var r=a("c8d1"),o=a("b08e"),n=a("be18"),s=a("9889"),i=a("abab"),c=a("535a"),l=a("2f63"),u=a("c52f"),f=a("fdb7"),p=a("129b"),d=a("2453"),O=a("ce94"),b=a("df07"),_=a("52f0"),A=a("21d4"),y=a("8bde"),h=a("fa74"),T=a("a7eb"),m=a("0260"),I=a("aa13"),L=a("283e"),N=a("f806"),E=a("990a"),P=a("1da3"),w=a("cef5");const R={UNLOADED:0,LOADING:1,PROCESSING:2,READY:3,FAILED:4},g=y["a"].Attribute,S=y["a"].FeatureIdAttribute,F=y["a"].Instances;function j(e){e=Object(c["a"])(e,c["a"].EMPTY_OBJECT);const t=e.i3dmResource,a=e.arrayBuffer;let r=e.baseResource;const n=Object(c["a"])(e.byteOffset,0),s=Object(c["a"])(e.releaseGltfJson,!1),i=Object(c["a"])(e.asynchronous,!0),u=Object(c["a"])(e.incrementallyLoadTextures,!0),f=Object(c["a"])(e.upAxis,o["a"].Y),p=Object(c["a"])(e.forwardAxis,o["a"].X),d=Object(c["a"])(e.loadAttributesAsTypedArray,!1),O=Object(c["a"])(e.loadIndicesForWireframe,!1),b=Object(c["a"])(e.loadPrimitiveOutline,!0);r=Object(l["a"])(r)?r:t.clone(),this._i3dmResource=t,this._baseResource=r,this._arrayBuffer=a,this._byteOffset=n,this._releaseGltfJson=s,this._asynchronous=i,this._incrementallyLoadTextures=u,this._upAxis=f,this._forwardAxis=p,this._loadAttributesAsTypedArray=d,this._loadIndicesForWireframe=O,this._loadPrimitiveOutline=b,this._state=R.UNLOADED,this._promise=void 0,this._gltfLoader=void 0,this._transform=_["a"].IDENTITY,this._batchTable=void 0,this._featureTable=void 0,this._instancesLength=0}function D(e,t){e.unload(),e._state=R.FAILED;const a="Failed to load i3dm";return t=e.getError(a,t),Promise.reject(t)}function C(e,t){const a=e._batchTable,r=e._instancesLength;if(0===r)return;let o;if(Object(l["a"])(a.json))o=Object(h["a"])({count:r,batchTable:a.json,binaryBody:a.binary});else{const e=new T["a"]({name:A["a"].BATCH_TABLE_CLASS_NAME,count:r});o=new f["a"]({schema:{},propertyTables:[e]})}t.structuralMetadata=o}Object(l["a"])(Object.create)&&(j.prototype=Object.create(I["a"].prototype),j.prototype.constructor=j),Object.defineProperties(j.prototype,{promise:{get:function(){return this._promise}},texturesLoadedPromise:{get:function(){return this._gltfLoader.texturesLoadedPromise}},cacheKey:{get:function(){}},components:{get:function(){return this._components}}}),j.prototype.load=function(){const e=O["a"].parse(this._arrayBuffer,this._byteOffset),t=e.featureTableJson,a=e.featureTableBinary,r=e.batchTableJson,o=e.batchTableBinary,c=e.gltfFormat,u=new s["a"](t,a);this._featureTable=u;const f=u.getGlobalProperty("INSTANCES_LENGTH");if(u.featuresLength=f,!Object(l["a"])(f))throw new L["a"]("Feature table global property: INSTANCES_LENGTH must be defined");this._instancesLength=f;const b=u.getGlobalProperty("RTC_CENTER",i["a"].FLOAT,3);Object(l["a"])(b)&&(this._transform=_["a"].fromTranslation(n["a"].fromArray(b))),this._batchTable={json:r,binary:o};const A={upAxis:this._upAxis,forwardAxis:this._forwardAxis,releaseGltfJson:this._releaseGltfJson,incrementallyLoadTextures:this._incrementallyLoadTextures,loadAttributesAsTypedArray:this._loadAttributesAsTypedArray,loadIndicesForWireframe:this._loadIndicesForWireframe,loadPrimitiveOutline:this._loadPrimitiveOutline};if(0===c){let t=Object(p["a"])(e.gltf);t=t.replace(/[\s\0]+$/,"");const a=this._baseResource.getDerivedResource({url:t});A.gltfResource=a,A.baseResource=a}else A.gltfResource=this._i3dmResource,A.typedArray=e.gltf;const y=new d["a"](A);this._gltfLoader=y,this._state=R.LOADING;const h=this;return y.load(),this._promise=y.promise.then((function(){if(h.isDestroyed())return;const e=y.components;return e.transform=h._transform,x(h,e),C(h,e),h._components=e,h._state=R.READY,h})).catch((function(e){if(!h.isDestroyed())return D(h,e)})),this._promise},j.prototype.process=function(e){this._state===R.LOADING&&(this._state=R.PROCESSING),this._state===R.PROCESSING&&this._gltfLoader.process(e)};const G=new n["a"],U=new Array(4);function x(e,t){let a;const r=e._featureTable,o=e._instancesLength;if(0===o)return;const s=r.getGlobalProperty("RTC_CENTER",i["a"].FLOAT,3),c=r.getGlobalProperty("EAST_NORTH_UP"),u=r.hasProperty("NORMAL_UP")||r.hasProperty("NORMAL_UP_OCT32P")||c,f=r.hasProperty("SCALE")||r.hasProperty("SCALE_NON_UNIFORM"),p=M(r,o);let d,O;u&&(d=new Float32Array(4*o)),f&&(O=new Float32Array(3*o));const A=new Float32Array(o),y=n["a"].unpackArray(p);let h=new n["a"];const T=new n["a"],I=new n["a"],L=new n["a"],N=new b["a"],R=new m["a"],j=new Array(4),D=new n["a"],C=new Array(3),U=new _["a"];if(!Object(l["a"])(s)){const e=w["a"].fromPoints(y);for(a=0;a<y.length;a++)n["a"].subtract(y[a],e.center,G),p[3*a+0]=G.x,p[3*a+1]=G.y,p[3*a+2]=G.z;t.transform=_["a"].fromTranslation(e.center)}for(a=0;a<o;a++){h=n["a"].clone(y[a]),Object(l["a"])(s)&&n["a"].add(h,n["a"].unpack(s),h),u&&(H(r,c,a,R,h,I,T,L,N,U),m["a"].pack(R,j,0),d[4*a+0]=j[0],d[4*a+1]=j[1],d[4*a+2]=j[2],d[4*a+3]=j[3]),f&&(B(r,a,D),n["a"].pack(D,C,0),O[3*a+0]=C[0],O[3*a+1]=C[1],O[3*a+2]=C[2]);let e=r.getProperty("BATCH_ID",i["a"].UNSIGNED_SHORT,1,a);Object(l["a"])(e)||(e=a),A[a]=e}const x=new F;x.transformInWorldSpace=!0;const v=new g;if(v.name="Instance Translation",v.semantic=E["a"].TRANSLATION,v.componentDatatype=i["a"].FLOAT,v.type=P["a"].VEC3,v.count=o,v.typedArray=p,x.attributes.push(v),u){const e=new g;e.name="Instance Rotation",e.semantic=E["a"].ROTATION,e.componentDatatype=i["a"].FLOAT,e.type=P["a"].VEC4,e.count=o,e.typedArray=d,x.attributes.push(e)}if(f){const e=new g;e.name="Instance Scale",e.semantic=E["a"].SCALE,e.componentDatatype=i["a"].FLOAT,e.type=P["a"].VEC3,e.count=o,e.typedArray=O,x.attributes.push(e)}const J=new g;J.name="Instance Feature ID",J.setIndex=0,J.semantic=E["a"].FEATURE_ID,J.componentDatatype=i["a"].FLOAT,J.type=P["a"].SCALAR,J.count=o,J.typedArray=A,x.attributes.push(J);const k=new S;for(k.propertyTableId=0,k.setIndex=0,k.positionalLabel="instanceFeatureId_0",x.featureIds.push(k),a=0;a<t.nodes.length;a++){const e=t.nodes[a];e.primitives.length>0&&(e.instances=x)}}function M(e,t){if(e.hasProperty("POSITION"))return e.getPropertyArray("POSITION",i["a"].FLOAT,3);if(e.hasProperty("POSITION_QUANTIZED")){const t=e.getPropertyArray("POSITION_QUANTIZED",i["a"].UNSIGNED_SHORT,3),a=e.getGlobalProperty("QUANTIZED_VOLUME_OFFSET",i["a"].FLOAT,3);if(!Object(l["a"])(a))throw new L["a"]("Global property: QUANTIZED_VOLUME_OFFSET must be defined for quantized positions.");const r=e.getGlobalProperty("QUANTIZED_VOLUME_SCALE",i["a"].FLOAT,3);if(!Object(l["a"])(r))throw new L["a"]("Global property: QUANTIZED_VOLUME_SCALE must be defined for quantized positions.");const o=new Float32Array(t.length);for(let e=0;e<t.length/3;e++)for(let n=0;n<3;n++){const s=3*e+n;o[s]=t[s]/65535*r[n]+a[n]}return o}throw new L["a"]("Either POSITION or POSITION_QUANTIZED must be defined for each instance.")}const v=new Array(4);function H(e,t,a,o,s,c,f,p,d,O){const A=e.getProperty("NORMAL_UP",i["a"].FLOAT,3,a,U),y=e.getProperty("NORMAL_RIGHT",i["a"].FLOAT,3,a,v);let h=!1;if(Object(l["a"])(A)){if(!Object(l["a"])(y))throw new L["a"]("To define a custom orientation, both NORMAL_UP and NORMAL_RIGHT must be defined.");n["a"].unpack(A,0,c),n["a"].unpack(y,0,f),h=!0}else{const o=e.getProperty("NORMAL_UP_OCT32P",i["a"].UNSIGNED_SHORT,2,a,U),n=e.getProperty("NORMAL_RIGHT_OCT32P",i["a"].UNSIGNED_SHORT,2,a,v);if(Object(l["a"])(o)){if(!Object(l["a"])(n))throw new L["a"]("To define a custom orientation with oct-encoded vectors, both NORMAL_UP_OCT32P and NORMAL_RIGHT_OCT32P must be defined.");r["a"].octDecodeInRange(o[0],o[1],65535,c),r["a"].octDecodeInRange(n[0],n[1],65535,f),h=!0}else t?(N["a"].eastNorthUpToFixedFrame(s,u["a"].WGS84,O),_["a"].getMatrix3(O,d)):b["a"].clone(b["a"].IDENTITY,d)}h&&(n["a"].cross(f,c,p),n["a"].normalize(p,p),b["a"].setColumn(d,0,f,d),b["a"].setColumn(d,1,c,d),b["a"].setColumn(d,2,p,d)),m["a"].fromRotationMatrix(d,o)}function B(e,t,a){a=n["a"].fromElements(1,1,1,a);const r=e.getProperty("SCALE",i["a"].FLOAT,1,t);Object(l["a"])(r)&&n["a"].multiplyByScalar(a,r,a);const o=e.getProperty("SCALE_NON_UNIFORM",i["a"].FLOAT,3,t,U);Object(l["a"])(o)&&(a.x*=o[0],a.y*=o[1],a.z*=o[2])}j.prototype.unload=function(){Object(l["a"])(this._gltfLoader)&&this._gltfLoader.unload(),this._components=void 0},t["a"]=j}}]);