(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~39657b56"],{3041:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("535a"),i=r("2f63"),s=r("08b8"),a=r("aa13"),c=r("2773");function n(e){e=Object(o["a"])(e,o["a"].EMPTY_OBJECT);const t=e.resourceCache,r=e.gltf,i=e.draco,s=e.gltfResource,a=e.baseResource,n=e.cacheKey;this._resourceCache=t,this._gltfResource=s,this._baseResource=a,this._gltf=r,this._draco=i,this._cacheKey=n,this._bufferViewLoader=void 0,this._bufferViewTypedArray=void 0,this._decodePromise=void 0,this._decodedData=void 0,this._state=c["a"].UNLOADED,this._promise=void 0,this._process=function(e,t){}}function u(e,t){e.unload(),e._state=c["a"].FAILED;const r="Failed to load Draco";return Promise.reject(e.getError(r,t))}Object(i["a"])(Object.create)&&(n.prototype=Object.create(a["a"].prototype),n.prototype.constructor=n),Object.defineProperties(n.prototype,{promise:{get:function(){return this._promise}},cacheKey:{get:function(){return this._cacheKey}},decodedData:{get:function(){return this._decodedData}}}),n.prototype.load=function(){const e=this._resourceCache,t=e.loadBufferView({gltf:this._gltf,bufferViewId:this._draco.bufferView,gltfResource:this._gltfResource,baseResource:this._baseResource});this._bufferViewLoader=t,this._state=c["a"].LOADING;const r=this,o=new Promise((function(e,t){r._process=function(r,o){if(!Object(i["a"])(r._bufferViewTypedArray))return;if(Object(i["a"])(r._decodePromise))return;const a=r._draco,n=r._gltf,u=n.bufferViews,f=a.bufferView,d=u[f],_=a.attributes,h={array:new Uint8Array(r._bufferViewTypedArray),bufferView:d,compressedAttributes:_,dequantizeInShader:!0},p=s["a"].decodeBufferView(h);Object(i["a"])(p)&&(r._decodePromise=p.then((function(t){r.isDestroyed()?e():(r.unload(),r._decodedData={indices:t.indexArray,vertexAttributes:t.attributeData},r._state=c["a"].READY,e(r))})).catch((function(o){r.isDestroyed()?e():t(o)})))}}));return this._promise=t.promise.then((function(){if(!r.isDestroyed())return r._bufferViewTypedArray=t.typedArray,r._state=c["a"].PROCESSING,o})).catch((function(e){if(!r.isDestroyed())return u(r,e)})),this._promise},n.prototype.process=function(e){return this._process(this,e)},n.prototype.unload=function(){Object(i["a"])(this._bufferViewLoader)&&this._resourceCache.unload(this._bufferViewLoader),this._bufferViewLoader=void 0,this._bufferViewTypedArray=void 0,this._decodedData=void 0,this._gltf=void 0}},"52e6":function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var o=r("535a"),i=r("2f63"),s=r("55d8"),a=r("92ea"),c=r("aa13"),n=r("2773");function u(e){e=Object(o["a"])(e,o["a"].EMPTY_OBJECT);const t=e.resourceCache,r=e.gltf,i=e.bufferViewId,a=e.gltfResource,c=e.baseResource,u=e.cacheKey,f=r.bufferViews[i];let d,_,h,p,y=f.buffer,b=f.byteOffset,l=f.byteLength,m=!1;if(Object(s["a"])(f,"EXT_meshopt_compression")){const e=f.extensions.EXT_meshopt_compression;y=e.buffer,b=Object(o["a"])(e.byteOffset,0),l=e.byteLength,m=!0,d=e.byteStride,_=e.count,h=e.mode,p=Object(o["a"])(e.filter,"NONE")}const g=r.buffers[y];this._hasMeshopt=m,this._meshoptByteStride=d,this._meshoptCount=_,this._meshoptMode=h,this._meshoptFilter=p,this._resourceCache=t,this._gltfResource=a,this._baseResource=c,this._buffer=g,this._bufferId=y,this._byteOffset=b,this._byteLength=l,this._cacheKey=u,this._bufferLoader=void 0,this._typedArray=void 0,this._state=n["a"].UNLOADED,this._promise=void 0,this._process=function(e,t){}}function f(e){const t=e._resourceCache,r=e._buffer;if(Object(i["a"])(r.uri)){const o=e._baseResource,i=o.getDerivedResource({url:r.uri});return t.loadExternalBuffer({resource:i})}return t.loadEmbeddedBuffer({parentResource:e._gltfResource,bufferId:e._bufferId})}Object(i["a"])(Object.create)&&(u.prototype=Object.create(c["a"].prototype),u.prototype.constructor=u),Object.defineProperties(u.prototype,{promise:{get:function(){return this._promise}},cacheKey:{get:function(){return this._cacheKey}},typedArray:{get:function(){return this._typedArray}}}),u.prototype.load=function(){const e=f(this);this._bufferLoader=e,this._state=n["a"].LOADING;const t=this,r=new Promise((function(e){t._process=function(t,r){if(!t._hasMeshopt)return;if(!Object(i["a"])(t._typedArray))return;if(t._state!==n["a"].PROCESSING)return;const o=t._meshoptCount,s=t._meshoptByteStride,c=new Uint8Array(o*s);a["a"].decodeGltfBuffer(c,o,s,t._typedArray,t._meshoptMode,t._meshoptFilter),t._typedArray=c,t._state=n["a"].READY,e(t)}}));return this._promise=e.promise.then((function(){if(t.isDestroyed())return;const o=e.typedArray,i=new Uint8Array(o.buffer,o.byteOffset+t._byteOffset,t._byteLength);return t.unload(),t._typedArray=i,t._hasMeshopt?(t._state=n["a"].PROCESSING,r):(t._state=n["a"].READY,t)})).catch((function(e){if(t.isDestroyed())return;t.unload(),t._state=n["a"].FAILED;const r="Failed to load buffer view";return Promise.reject(t.getError(r,e))})),this._promise},u.prototype.process=function(e){return this._process(this,e)},u.prototype.unload=function(){Object(i["a"])(this._bufferLoader)&&this._resourceCache.unload(this._bufferLoader),this._bufferLoader=void 0,this._typedArray=void 0}},ceee:function(e,t,r){"use strict";r.d(t,"a",(function(){return _}));var o=r("abab"),i=r("535a"),s=r("2f63"),a=r("0123"),c=r("f20a"),n=r("8b68"),u=r("568a"),f=r("aa13"),d=r("2773");function _(e){e=Object(i["a"])(e,i["a"].EMPTY_OBJECT);const t=e.resourceCache,r=e.gltf,o=e.accessorId,s=e.gltfResource,a=e.baseResource,c=e.draco,n=e.cacheKey,u=Object(i["a"])(e.asynchronous,!0),f=Object(i["a"])(e.loadBuffer,!1),_=Object(i["a"])(e.loadTypedArray,!1),h=r.accessors[o].componentType;this._resourceCache=t,this._gltfResource=s,this._baseResource=a,this._gltf=r,this._accessorId=o,this._indexDatatype=h,this._draco=c,this._cacheKey=n,this._asynchronous=u,this._loadBuffer=f,this._loadTypedArray=_,this._bufferViewLoader=void 0,this._dracoLoader=void 0,this._typedArray=void 0,this._buffer=void 0,this._state=d["a"].UNLOADED,this._promise=void 0,this._process=function(e,t){}}Object(s["a"])(Object.create)&&(_.prototype=Object.create(f["a"].prototype),_.prototype.constructor=_),Object.defineProperties(_.prototype,{promise:{get:function(){return this._promise}},cacheKey:{get:function(){return this._cacheKey}},buffer:{get:function(){return this._buffer}},typedArray:{get:function(){return this._typedArray}},indexDatatype:{get:function(){return this._indexDatatype}}});const h=new m;function p(e){const t=e._resourceCache,r=t.loadDraco({gltf:e._gltf,draco:e._draco,gltfResource:e._gltfResource,baseResource:e._baseResource});return e._dracoLoader=r,e._state=d["a"].LOADING,r.promise.then((function(){if(e.isDestroyed())return;const t=r.decodedData.indices.typedArray;return e._typedArray=t,e._indexDatatype=o["a"].fromTypedArray(t),e._state=d["a"].PROCESSING,e}))}function y(e){const t=e._gltf,r=e._accessorId,o=t.accessors[r],i=o.bufferView,s=e._resourceCache,a=s.loadBufferView({gltf:t,bufferViewId:i,gltfResource:e._gltfResource,baseResource:e._baseResource});return e._state=d["a"].LOADING,e._bufferViewLoader=a,a.promise.then((function(){if(e.isDestroyed())return;const t=a.typedArray;return e._typedArray=b(e,t),e._state=d["a"].PROCESSING,e}))}function b(e,t){const r=e._gltf,o=e._accessorId,i=r.accessors[o],s=i.count,c=i.componentType,n=t.buffer,u=t.byteOffset+i.byteOffset;let f;return c===a["a"].UNSIGNED_BYTE?f=new Uint8Array(n,u,s):c===a["a"].UNSIGNED_SHORT?f=new Uint16Array(n,u,s):c===a["a"].UNSIGNED_INT&&(f=new Uint32Array(n,u,s)),f}function l(e,t){e.unload(),e._state=d["a"].FAILED;const r="Failed to load index buffer";return t=e.getError(r,t),Promise.reject(t)}function m(){this.typedArray=void 0,this.indexDatatype=void 0,this.context=void 0,this.buffer=void 0}function g(e,t,r){const o=c["a"].createIndexBuffer({typedArray:e,context:r,usage:n["a"].STATIC_DRAW,indexDatatype:t});return o.vertexArrayDestroyable=!1,o}_.prototype.load=function(){let e;e=Object(s["a"])(this._draco)?p(this):y(this);const t=this,r=new Promise((function(e){t._process=function(t,r){if(t._state===d["a"].READY)return;const o=t._typedArray,i=t._indexDatatype;if(Object(s["a"])(t._dracoLoader)&&t._dracoLoader.process(r),Object(s["a"])(t._bufferViewLoader)&&t._bufferViewLoader.process(r),!Object(s["a"])(o))return;let a;if(t._loadBuffer&&t._asynchronous){const e=h;e.set(o,i,r.context);const t=r.jobScheduler;if(!t.execute(e,u["a"].BUFFER))return;a=e.buffer}else t._loadBuffer&&(a=g(o,i,r.context));t.unload(),t._buffer=a,t._typedArray=t._loadTypedArray?o:void 0,t._state=d["a"].READY,e(t)}}));return this._promise=e.then((function(){if(!t.isDestroyed())return r})).catch((function(e){if(!t.isDestroyed())return l(t,e)})),this._promise},m.prototype.set=function(e,t,r){this.typedArray=e,this.indexDatatype=t,this.context=r},m.prototype.execute=function(){this.buffer=g(this.typedArray,this.indexDatatype,this.context)},_.prototype.process=function(e){return this._process(this,e)},_.prototype.unload=function(){Object(s["a"])(this._buffer)&&this._buffer.destroy();const e=this._resourceCache;Object(s["a"])(this._bufferViewLoader)&&e.unload(this._bufferViewLoader),Object(s["a"])(this._dracoLoader)&&e.unload(this._dracoLoader),this._bufferViewLoader=void 0,this._dracoLoader=void 0,this._typedArray=void 0,this._buffer=void 0,this._gltf=void 0}},d9c0:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var o=r("535a"),i=r("2f63"),s=r("d69d"),a=r("7ceb"),c=r("283e"),n=r("aa13"),u=r("2773");function f(e){e=Object(o["a"])(e,o["a"].EMPTY_OBJECT);const t=e.resourceCache,r=e.gltf,i=e.imageId,s=e.gltfResource,a=e.baseResource,c=e.cacheKey,n=r.images[i],f=n.bufferView,d=n.uri;this._resourceCache=t,this._gltfResource=s,this._baseResource=a,this._gltf=r,this._bufferViewId=f,this._uri=d,this._cacheKey=c,this._bufferViewLoader=void 0,this._image=void 0,this._mipLevels=void 0,this._state=u["a"].UNLOADED,this._promise=void 0}function d(e){let t;return Array.isArray(e)&&(t=e.slice(1,e.length).map((function(e){return e.bufferView})),e=e[0]),{image:e,mipLevels:t}}function _(e){const t=e._resourceCache,r=t.loadBufferView({gltf:e._gltf,bufferViewId:e._bufferViewId,gltfResource:e._gltfResource,baseResource:e._baseResource});return e._bufferViewLoader=r,e._state=u["a"].LOADING,r.promise.then((function(){if(e.isDestroyed())return;const t=r.typedArray;return b(t).then((function(t){if(e.isDestroyed())return;const r=d(t);return e.unload(),e._image=r.image,e._mipLevels=r.mipLevels,e._state=u["a"].READY,e}))})).catch((function(t){if(!e.isDestroyed())return p(e,t,"Failed to load embedded image")}))}function h(e){const t=e._baseResource,r=e._uri,o=t.getDerivedResource({url:r});return e._state=u["a"].LOADING,m(o).then((function(t){if(e.isDestroyed())return;const r=d(t);return e.unload(),e._image=r.image,e._mipLevels=r.mipLevels,e._state=u["a"].READY,e})).catch((function(t){if(!e.isDestroyed())return p(e,t,"Failed to load image: "+r)}))}function p(e,t,r){return e.unload(),e._state=u["a"].FAILED,Promise.reject(e.getError(r,t))}function y(e){const t=e.subarray(0,2),r=e.subarray(0,4),o=e.subarray(8,12);if(255===t[0]&&216===t[1])return"image/jpeg";if(137===t[0]&&80===t[1])return"image/png";if(171===t[0]&&75===t[1])return"image/ktx2";if(82===r[0]&&73===r[1]&&70===r[2]&&70===r[3]&&87===o[0]&&69===o[1]&&66===o[2]&&80===o[3])return"image/webp";throw new c["a"]("Image format is not recognized")}function b(e){const t=y(e);if("image/ktx2"===t){const t=new Uint8Array(e);return Object(a["a"])(t)}return f._loadImageFromTypedArray({uint8Array:e,format:t,flipY:!1,skipColorSpaceConversion:!0})}Object(i["a"])(Object.create)&&(f.prototype=Object.create(n["a"].prototype),f.prototype.constructor=f),Object.defineProperties(f.prototype,{promise:{get:function(){return this._promise}},cacheKey:{get:function(){return this._cacheKey}},image:{get:function(){return this._image}},mipLevels:{get:function(){return this._mipLevels}}}),f.prototype.load=function(){return Object(i["a"])(this._bufferViewId)?(this._promise=_(this),this._promise):(this._promise=h(this),this._promise)};const l=/(^data:image\/ktx2)|(\.ktx2$)/i;function m(e){const t=e.url;return l.test(t)?Object(a["a"])(e):e.fetchImage({skipColorSpaceConversion:!0,preferImageBitmap:!0})}f.prototype.unload=function(){Object(i["a"])(this._bufferViewLoader)&&this._resourceCache.unload(this._bufferViewLoader),this._bufferViewLoader=void 0,this._uri=void 0,this._image=void 0,this._mipLevels=void 0,this._gltf=void 0},f._loadImageFromTypedArray=s["a"]}}]);