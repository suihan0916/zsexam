(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~21599f14"],{c0a9:function(e,t,n){"use strict";var i=n("cef5"),o=n("be18"),r=n("bd8d"),s=n("9541"),a=n("2384"),c=n("535a"),u=n("2f63"),l=n("45c5"),d=n("7d62"),h=n("c52f"),m=n("66bf"),p=n("5ed2"),_=n("93da"),g=n("df07"),b=n("52f0"),f=n("78e5"),y=n("713f"),S=n("eace"),E=n("de66"),V=n("75b2"),C=n("8a39"),O=n("b82e"),R=n("d4ed"),T=n("283e"),D=n("7d93"),P=n("9c94"),w=n("7abe"),v=n("5457"),j=n("6380"),I=n("d150"),B=n("c4a1"),L=n("c872"),x=n("9a79"),q=n("80f9"),M=n("7870"),A=n("55d8"),N=n("0a70"),F=n("40ef"),U=n("a307"),W=n("1ec0"),k=n("1c25"),H=n("eb1f"),G=n("8cfb"),z=n("d289");function Y(e,t,n,i){this._tileset=e,this._header=n;const o=Object(u["a"])(n.contents),s=o&&n.contents.length>1||Object(A["a"])(n,"3DTILES_multiple_contents"),a=o&&!s?n.contents[0]:n.content;this._contentHeader=a,this.transform=Object(u["a"])(n.transform)?b["a"].unpack(n.transform):b["a"].clone(b["a"].IDENTITY);const c=Object(u["a"])(i)?i.computedTransform:e.modelMatrix,l=b["a"].multiply(c,this.transform,new b["a"]),d=Object(u["a"])(i)?i._initialTransform:b["a"].IDENTITY;let h,m,_,g;this._initialTransform=b["a"].multiply(d,this.transform,new b["a"]),this.computedTransform=l,this._boundingVolume=this.createBoundingVolume(n.boundingVolume,l),this._boundingVolume2D=void 0,Object(u["a"])(a)&&Object(u["a"])(a.boundingVolume)&&(h=this.createBoundingVolume(a.boundingVolume,l)),this._contentBoundingVolume=h,this._contentBoundingVolume2D=void 0,Object(u["a"])(n.viewerRequestVolume)&&(m=this.createBoundingVolume(n.viewerRequestVolume,l)),this._viewerRequestVolume=m,this.geometricError=n.geometricError,this._geometricError=n.geometricError,Object(u["a"])(this._geometricError)||(this._geometricError=Object(u["a"])(i)?i.geometricError:e._geometricError,Y._deprecationWarning("geometricErrorUndefined","Required property geometricError is undefined for this tile. Using parent's geometric error instead.")),this.updateGeometricErrorScale(),Object(u["a"])(n.refine)?("replace"!==n.refine&&"add"!==n.refine||Y._deprecationWarning("lowercase-refine",`This tile uses a lowercase refine "${n.refine}". Instead use "${n.refine.toUpperCase()}".`),_="REPLACE"===n.refine.toUpperCase()?B["a"].REPLACE:B["a"].ADD):_=Object(u["a"])(i)?i.refine:B["a"].REPLACE,this.refine=_,this.children=[],this.parent=i;let f,y,S,E=!1;if(t=R["a"].createIfNeeded(t),s)f=w["a"].UNLOADED,y=t.clone();else if(Object(u["a"])(a)){let n=a.uri;Object(u["a"])(a.url)&&(Y._deprecationWarning("contentUrl",'This tileset JSON uses the "content.url" property which has been deprecated. Use "content.uri" instead.'),n=a.url),""===n?(Y._deprecationWarning("contentUriEmpty","content.uri property is an empty string, which creates a circular dependency, making this tileset invalid. Omit the content property instead"),g=new L["a"](e,this),E=!0,f=w["a"].READY):(f=w["a"].UNLOADED,y=t.getDerivedResource({url:n}),S=V["a"].getServerKey(y.getUrlComponent()))}else g=new L["a"](e,this),E=!0,f=w["a"].READY;this._content=g,this._contentResource=y,this._contentState=f,this._contentReadyToProcessPromise=void 0,this._contentReadyPromise=void 0,this._expiredContent=void 0,this._serverKey=S,this.hasEmptyContent=E,this.hasTilesetContent=!1,this.hasImplicitContent=!1,this.hasImplicitContentMetadata=!1,this.hasMultipleContents=s,this.metadata=Object(M["a"])(e,n),this.cacheNode=void 0;const C=n.expire;let O,T;Object(u["a"])(C)&&(O=C.duration,Object(u["a"])(C.date)&&(T=p["a"].fromIso8601(C.date))),this.expireDuration=O,this.expireDate=T,this.lastStyleTime=0,this._optimChildrenWithinParent=j["a"].NOT_COMPUTED,this.clippingPlanesDirty=!1,this.priorityDeferred=!1,this.implicitTileset=void 0,this.implicitCoordinates=void 0,this.implicitSubtree=void 0,this._distanceToCamera=0,this._centerZDepth=0,this._screenSpaceError=0,this._screenSpaceErrorProgressiveResolution=0,this._visibilityPlaneMask=0,this._visible=!1,this._inRequestVolume=!1,this._finalResolution=!0,this._depth=0,this._stackLength=0,this._selectionDepth=0,this._updatedVisibilityFrame=0,this._touchedFrame=0,this._visitedFrame=0,this._selectedFrame=0,this._requestedFrame=0,this._ancestorWithContent=void 0,this._ancestorWithContentAvailable=void 0,this._refines=!1,this._shouldSelect=!1,this._isClipped=!0,this._clippingPlanesState=0,this._debugBoundingVolume=void 0,this._debugContentBoundingVolume=void 0,this._debugViewerRequestVolume=void 0,this._debugColor=r["a"].fromRandom({alpha:1}),this._debugColorizeTiles=!1,this._priority=0,this._priorityHolder=this,this._priorityProgressiveResolution=!1,this._priorityProgressiveResolutionScreenSpaceErrorLeaf=!1,this._priorityReverseScreenSpaceError=0,this._foveatedFactor=0,this._wasMinPriorityChild=!1,this._loadTimestamp=new p["a"],this._commandsLength=0,this._color=void 0,this._colorDirty=!1,this._request=void 0}Y._deprecationWarning=l["a"],Object.defineProperties(Y.prototype,{tileset:{get:function(){return this._tileset}},content:{get:function(){return this._content}},boundingVolume:{get:function(){return this._boundingVolume}},contentBoundingVolume:{get:function(){return Object(c["a"])(this._contentBoundingVolume,this._boundingVolume)}},boundingSphere:{get:function(){return this._boundingVolume.boundingSphere}},extras:{get:function(){return this._header.extras}},color:{get:function(){return Object(u["a"])(this._color)||(this._color=new r["a"]),r["a"].clone(this._color)},set:function(e){this._color=r["a"].clone(e,this._color),this._colorDirty=!0}},contentAvailable:{get:function(){return this.contentReady&&!this.hasEmptyContent&&!this.hasTilesetContent&&!this.hasImplicitContent||Object(u["a"])(this._expiredContent)&&!this.contentFailed}},contentReady:{get:function(){return this._contentState===w["a"].READY}},contentUnloaded:{get:function(){return this._contentState===w["a"].UNLOADED}},contentExpired:{get:function(){return this._contentState===w["a"].EXPIRED}},contentFailed:{get:function(){return this._contentState===w["a"].FAILED}},contentReadyToProcessPromise:{get:function(){return this._contentReadyToProcessPromise}},contentReadyPromise:{get:function(){return this._contentReadyPromise}},commandsLength:{get:function(){return this._commandsLength}}});const K=new o["a"];function J(e,t){const n=e._tileset,i=t.camera,r=e.boundingSphere,s=r.radius,a=o["a"].multiplyByScalar(i.directionWC,e._centerZDepth,K),c=o["a"].add(i.positionWC,a,K),l=o["a"].subtract(c,r.center,K),d=o["a"].magnitude(l),h=d>s;if(h){const t=o["a"].normalize(l,K),n=o["a"].multiplyByScalar(t,s,K),a=o["a"].add(r.center,n,K),c=o["a"].subtract(a,i.positionWC,K),u=o["a"].normalize(c,K);e._foveatedFactor=1-Math.abs(o["a"].dot(i.directionWC,u))}else e._foveatedFactor=0;const m=e.refine===B["a"].REPLACE,p=n._skipLevelOfDetail;if(m&&!p||!n.foveatedScreenSpaceError||1===n.foveatedConeSize||e._priorityProgressiveResolution&&m&&p||n._pass===I["a"].PRELOAD_FLIGHT||n._pass===I["a"].PRELOAD)return!1;const g=1-Math.cos(.5*i.frustum.fov),b=n.foveatedConeSize*g;if(e._foveatedFactor<=b)return!1;const f=g-b,y=_["a"].clamp((e._foveatedFactor-b)/f,0,1),S=n.foveatedInterpolationCallback(n.foveatedMinimumScreenSpaceErrorRelaxation,n.maximumScreenSpaceError,y),E=0===e._screenSpaceError&&Object(u["a"])(e.parent)?.5*e.parent._screenSpaceError:e._screenSpaceError;return n.maximumScreenSpaceError-S<=E}const X=new p["a"];function Z(e,t){if(e.progressiveResolutionHeightFraction<=0||e.progressiveResolutionHeightFraction>.5)return!1;let n=t._screenSpaceErrorProgressiveResolution>e._maximumScreenSpaceError;t._priorityProgressiveResolutionScreenSpaceErrorLeaf=!1;const i=t.parent,o=e._maximumScreenSpaceError,r=t._screenSpaceErrorProgressiveResolution<=o,s=Object(u["a"])(i)&&i._screenSpaceErrorProgressiveResolution>o;return r&&s&&(t._priorityProgressiveResolutionScreenSpaceErrorLeaf=!0,n=!0),n}function $(e,t){const n=t.parent,i=Object(u["a"])(n)&&(!e._skipLevelOfDetail||0===t._screenSpaceError||n.hasTilesetContent||n.hasImplicitContent),o=i?n._screenSpaceError:t._screenSpaceError;return e.root._screenSpaceError-o}function Q(e){if(Object(u["a"])(e.expireDuration)){const t=p["a"].now(X);p["a"].addSeconds(t,e.expireDuration,t),Object(u["a"])(e.expireDate)?p["a"].lessThan(e.expireDate,t)&&p["a"].clone(t,e.expireDate):e.expireDate=p["a"].clone(t)}}function ee(e){return function(){return e._priority}}function te(e){let t=e._content;const n=e._tileset;if(!Object(u["a"])(t)){const i=Object(A["a"])(e._header,"3DTILES_multiple_contents")?e._header.extensions["3DTILES_multiple_contents"]:e._header;t=new N["a"](n,e,e._contentResource.clone(),i),e._content=t}const i=t.requestInnerContents();if(i>0)return i;e._contentState=w["a"].LOADING;const o=t.contentsFetchedPromise.then((function(){if(e._contentState===w["a"].LOADING&&Object(u["a"])(t.readyPromise)){if(!e.isDestroyed())return e._contentState=w["a"].PROCESSING,t;ne(e,n,"Tile was unloaded while content was loading")}}));return e._contentReadyToProcessPromise=o,e._contentReadyPromise=o.then((function(e){if(Object(u["a"])(e))return t.readyPromise})).then((function(t){if(Object(u["a"])(t)){if(!e.isDestroyed())return e._selectedFrame=0,e.lastStyleTime=0,p["a"].now(e._loadTimestamp),e._contentState=w["a"].READY,t;ne(e,n,"Tile was unloaded while content was processing")}})).catch((function(t){ne(e,n,t)})),0}function ne(e,t,n){e._contentState===w["a"].PROCESSING&&--t.statistics.numberOfTilesProcessing,e._contentState=w["a"].FAILED}function ie(e){const t=e._contentResource.clone(),n=e.contentExpired;n&&t.setQueryParameters({expired:e.expireDate.toString()});const i=new E["a"]({throttle:!0,throttleByServer:!0,type:O["a"].TILES3D,priorityFunction:ee(e),serverKey:e._serverKey});e._request=i,t.request=i;const o=t.fetchArrayBuffer();if(!Object(u["a"])(o))return 1;const r=e._contentState,s=e._tileset;e._contentState=w["a"].LOADING,++s.statistics.numberOfPendingRequests;const a=o.then((function(t){if(e.isDestroyed())return void oe(e,s);const i=re(e,t);return n&&(e.expireDate=void 0),e._content=i,e._contentState=w["a"].PROCESSING,i}));return e._contentReadyToProcessPromise=a,e._contentReadyPromise=a.then((function(e){if(Object(u["a"])(e))return--s.statistics.numberOfPendingRequests,e.readyPromise})).then((function(t){if(Object(u["a"])(t)){if(!e.isDestroyed())return Q(e),e._selectedFrame=0,e.lastStyleTime=0,p["a"].now(e._loadTimestamp),e._contentState=w["a"].READY,t;oe(e,s)}})).catch((function(t){return i.state===C["a"].CANCELLED?(e._contentState=r,--s.statistics.numberOfPendingRequests,++s.statistics.numberOfAttemptedRequests,Promise.reject("Cancelled")):(oe(e,s),Promise.reject(t))})),0}function oe(e,t){e._contentState===w["a"].PROCESSING?--t.statistics.numberOfTilesProcessing:--t.statistics.numberOfPendingRequests,e._contentState=w["a"].FAILED}function re(e,t){const n=Object(F["a"])(t),i=e._tileset;let o;i._disableSkipLevelOfDetail=i._disableSkipLevelOfDetail||n.contentType===v["a"].GEOMETRY||n.contentType===v["a"].VECTOR,n.contentType!==v["a"].IMPLICIT_SUBTREE&&n.contentType!==v["a"].IMPLICIT_SUBTREE_JSON||(e.hasImplicitContent=!0),n.contentType===v["a"].EXTERNAL_TILESET&&(e.hasTilesetContent=!0);const r=P["a"][n.contentType];o=Object(u["a"])(n.binaryPayload)?r(i,e,e._contentResource,n.binaryPayload.buffer,0):r(i,e,e._contentResource,n.jsonPayload);const s=e._contentHeader;if(e.hasImplicitContentMetadata){const t=e.implicitSubtree,n=e.implicitCoordinates;o.metadata=t.getContentMetadataView(n,0)}else e.hasImplicitContent||(o.metadata=Object(x["a"])(i,s));const a=Object(q["a"])(i,s);return Object(u["a"])(a)&&(o.group=new D["a"]({metadata:a})),o}Y.prototype.getScreenSpaceError=function(e,t,n){const i=this._tileset,o=Object(c["a"])(n,1),r=Object(u["a"])(this.parent)?this.parent.geometricError:i._geometricError,s=t?r:this.geometricError;if(0===s)return 0;const a=e.camera;let l=a.frustum;const d=e.context,h=d.drawingBufferWidth,m=d.drawingBufferHeight*o;let p;if(e.mode===U["a"].SCENE2D||l instanceof y["a"]){Object(u["a"])(l._offCenterFrustum)&&(l=l._offCenterFrustum);const e=Math.max(l.top-l.bottom,l.right-l.left)/Math.max(h,m);p=s/e}else{const e=Math.max(this._distanceToCamera,_["a"].EPSILON7),t=a.frustum.sseDenominator;if(p=s*m/(e*t),i.dynamicScreenSpaceError){const t=i._dynamicScreenSpaceErrorComputedDensity,n=i.dynamicScreenSpaceErrorFactor,o=_["a"].fog(e,t)*n;p-=o}}return p/=e.pixelRatio,p},Y.prototype.updateVisibility=function(e){const t=this.parent,n=this._tileset,i=Object(u["a"])(t)?t.computedTransform:n.modelMatrix,o=Object(u["a"])(t)?t._visibilityPlaneMask:a["a"].MASK_INDETERMINATE;this.updateTransform(i),this._distanceToCamera=this.distanceToTile(e),this._centerZDepth=this.distanceToTileCenter(e),this._screenSpaceError=this.getScreenSpaceError(e,!1),this._screenSpaceErrorProgressiveResolution=this.getScreenSpaceError(e,!1,n.progressiveResolutionHeightFraction),this._visibilityPlaneMask=this.visibility(e,o),this._visible=this._visibilityPlaneMask!==a["a"].MASK_OUTSIDE,this._inRequestVolume=this.insideViewerRequestVolume(e),this._priorityReverseScreenSpaceError=$(n,this),this._priorityProgressiveResolution=Z(n,this),this.priorityDeferred=J(this,e)},Y.prototype.updateExpiration=function(){if(Object(u["a"])(this.expireDate)&&this.contentReady&&!this.hasEmptyContent&&!this.hasMultipleContents){const e=p["a"].now(X);p["a"].lessThan(this.expireDate,e)&&(this._contentState=w["a"].EXPIRED,this._expiredContent=this._content)}},Y.prototype.requestContent=function(){return this.hasEmptyContent?0:this.hasMultipleContents?te(this):ie(this)},Y.prototype.cancelRequests=function(){this.hasMultipleContents?this._content.cancelRequests():this._request.cancel()},Y.prototype.unloadContent=function(){this.hasEmptyContent||this.hasTilesetContent||this.hasImplicitContent||(this._content=this._content&&this._content.destroy(),this._contentState=w["a"].UNLOADED,this._contentReadyToProcessPromise=void 0,this._contentReadyPromise=void 0,this.lastStyleTime=0,this.clippingPlanesDirty=0===this._clippingPlanesState,this._clippingPlanesState=0,this._debugColorizeTiles=!1,this._debugBoundingVolume=this._debugBoundingVolume&&this._debugBoundingVolume.destroy(),this._debugContentBoundingVolume=this._debugContentBoundingVolume&&this._debugContentBoundingVolume.destroy(),this._debugViewerRequestVolume=this._debugViewerRequestVolume&&this._debugViewerRequestVolume.destroy())};const se=new i["a"];function ae(e,t){if(t.mode!==U["a"].SCENE3D&&!Object(u["a"])(e._boundingVolume2D)){const n=e._boundingVolume.boundingSphere,o=i["a"].projectTo2D(n,t.mapProjection,se);e._boundingVolume2D=new H["a"](o.center,o.radius)}return t.mode!==U["a"].SCENE3D?e._boundingVolume2D:e._boundingVolume}function ce(e,t){if(t.mode!==U["a"].SCENE3D&&!Object(u["a"])(e._contentBoundingVolume2D)){const n=e._contentBoundingVolume.boundingSphere,o=i["a"].projectTo2D(n,t.mapProjection,se);e._contentBoundingVolume2D=new H["a"](o.center,o.radius)}return t.mode!==U["a"].SCENE3D?e._contentBoundingVolume2D:e._contentBoundingVolume}Y.prototype.visibility=function(e,t){const n=e.cullingVolume,i=ae(this,e),o=this._tileset,r=o.clippingPlanes;if(Object(u["a"])(r)&&r.enabled){const e=r.computeIntersectionWithBoundingVolume(i,o.clippingPlanesOriginMatrix);if(this._isClipped=e!==m["a"].INSIDE,e===m["a"].OUTSIDE)return a["a"].MASK_OUTSIDE}return n.computeVisibilityWithPlaneMask(i,t)},Y.prototype.contentVisibility=function(e){if(!Object(u["a"])(this._contentBoundingVolume))return m["a"].INSIDE;if(this._visibilityPlaneMask===a["a"].MASK_INSIDE)return m["a"].INSIDE;const t=e.cullingVolume,n=ce(this,e),i=this._tileset,o=i.clippingPlanes;if(Object(u["a"])(o)&&o.enabled){const e=o.computeIntersectionWithBoundingVolume(n,i.clippingPlanesOriginMatrix);if(this._isClipped=e!==m["a"].INSIDE,e===m["a"].OUTSIDE)return m["a"].OUTSIDE}return t.computeVisibility(n)},Y.prototype.distanceToTile=function(e){const t=ae(this,e);return t.distanceToCamera(e)};const ue=new o["a"];Y.prototype.distanceToTileCenter=function(e){const t=ae(this,e),n=t.boundingVolume,i=o["a"].subtract(n.center,e.camera.positionWC,ue);return o["a"].dot(e.camera.directionWC,i)},Y.prototype.insideViewerRequestVolume=function(e){const t=this._viewerRequestVolume;return!Object(u["a"])(t)||0===t.distanceToCamera(e)};const le=new g["a"],de=new o["a"],he=new g["a"],me=new o["a"],pe=new S["a"],_e=new f["a"],ge=new b["a"];function be(e,t,n){let i=o["a"].fromElements(e[0],e[1],e[2],me),r=g["a"].fromArray(e,3,he);i=b["a"].multiplyByPoint(t,i,i);const s=b["a"].getMatrix3(t,le);return r=g["a"].multiply(s,r,r),Object(u["a"])(n)?(n.update(i,r),n):new G["a"](i,r)}function fe(e,t,n,i){const o=S["a"].unpack(e,0,pe),r=e[4],s=e[5],a=f["a"].fromRectangle(o,r,s,h["a"].WGS84,_e);let c=a.center,l=a.halfAxes;t=b["a"].multiplyTransformation(t,b["a"].inverseTransformation(n,ge),ge),c=b["a"].multiplyByPoint(t,c,c);const d=b["a"].getMatrix3(t,le);return l=g["a"].multiply(d,l,l),Object(u["a"])(i)&&i instanceof G["a"]?(i.update(c,l),i):new G["a"](c,l)}function ye(e,t,n,i){if(!b["a"].equalsEpsilon(t,n,_["a"].EPSILON8))return fe(e,t,n,i);if(Object(u["a"])(i))return i;const o=S["a"].unpack(e,0,pe);return new W["a"]({rectangle:o,minimumHeight:e[4],maximumHeight:e[5]})}function Se(e,t,n){let i=o["a"].fromElements(e[0],e[1],e[2],me),r=e[3];i=b["a"].multiplyByPoint(t,i,i);const s=b["a"].getScale(t,de),a=o["a"].maximumComponent(s);return r*=a,Object(u["a"])(n)?(n.update(i,r),n):new H["a"](i,r)}function Ee(e,t,n,i){if(!i.isRender)return;const o=Object(u["a"])(e._contentHeader)&&Object(u["a"])(e._contentHeader.boundingVolume),a=e.hasEmptyContent||e.hasTilesetContent||e.hasImplicitContent,c=t.debugShowBoundingVolume||t.debugShowContentBoundingVolume&&!o;if(c){let t;t=e._finalResolution?a?r["a"].DARKGRAY:r["a"].WHITE:r["a"].YELLOW,Object(u["a"])(e._debugBoundingVolume)||(e._debugBoundingVolume=e._boundingVolume.createDebugVolume(t)),e._debugBoundingVolume.update(n);const i=e._debugBoundingVolume.getGeometryInstanceAttributes("outline");i.color=s["a"].toValue(t,i.color)}else!c&&Object(u["a"])(e._debugBoundingVolume)&&(e._debugBoundingVolume=e._debugBoundingVolume.destroy());t.debugShowContentBoundingVolume&&o?(Object(u["a"])(e._debugContentBoundingVolume)||(e._debugContentBoundingVolume=e._contentBoundingVolume.createDebugVolume(r["a"].BLUE)),e._debugContentBoundingVolume.update(n)):!t.debugShowContentBoundingVolume&&Object(u["a"])(e._debugContentBoundingVolume)&&(e._debugContentBoundingVolume=e._debugContentBoundingVolume.destroy()),t.debugShowViewerRequestVolume&&Object(u["a"])(e._viewerRequestVolume)?(Object(u["a"])(e._debugViewerRequestVolume)||(e._debugViewerRequestVolume=e._viewerRequestVolume.createDebugVolume(r["a"].YELLOW)),e._debugViewerRequestVolume.update(n)):!t.debugShowViewerRequestVolume&&Object(u["a"])(e._debugViewerRequestVolume)&&(e._debugViewerRequestVolume=e._debugViewerRequestVolume.destroy());const l=t.debugColorizeTiles&&!e._debugColorizeTiles||Object(u["a"])(t._heatmap.tilePropertyName),d=!t.debugColorizeTiles&&e._debugColorizeTiles;l?(t._heatmap.colorize(e,n),e._debugColorizeTiles=!0,e.color=e._debugColor):d&&(e._debugColorizeTiles=!1,e.color=r["a"].WHITE),e._colorDirty&&(e._colorDirty=!1,e._content.applyDebugSettings(!0,e._color)),d&&t.makeStyleDirty()}function Ve(e,t,n){const i=e._content,o=e._expiredContent;if(!e.hasMultipleContents&&Object(u["a"])(o)){if(!e.contentReady)return void o.update(t,n);e._expiredContent.destroy(),e._expiredContent=void 0}i.update(t,n)}function Ce(e,t){const n=t.clippingPlanes;let i=0;Object(u["a"])(n)&&e._isClipped&&n.enabled&&(i=n.clippingPlanesState),i!==e._clippingPlanesState&&(e._clippingPlanesState=i,e.clippingPlanesDirty=!0)}Y.prototype.createBoundingVolume=function(e,t,n){if(!Object(u["a"])(e))throw new T["a"]("boundingVolume must be defined");if(Object(A["a"])(e,"3DTILES_bounding_volume_S2"))return new k["a"](e.extensions["3DTILES_bounding_volume_S2"]);if(Object(u["a"])(e.box))return be(e.box,t,n);if(Object(u["a"])(e.region))return ye(e.region,t,this._initialTransform,n);if(Object(u["a"])(e.sphere))return Se(e.sphere,t,n);throw new T["a"]("boundingVolume must contain a sphere, region, or box")},Y.prototype.updateTransform=function(e){e=Object(c["a"])(e,b["a"].IDENTITY);const t=b["a"].multiply(e,this.transform,ge),n=!b["a"].equals(t,this.computedTransform);if(!n)return;b["a"].clone(t,this.computedTransform);const i=this._header,o=this._contentHeader;this._boundingVolume=this.createBoundingVolume(i.boundingVolume,this.computedTransform,this._boundingVolume),Object(u["a"])(this._contentBoundingVolume)&&(this._contentBoundingVolume=this.createBoundingVolume(o.boundingVolume,this.computedTransform,this._contentBoundingVolume)),Object(u["a"])(this._viewerRequestVolume)&&(this._viewerRequestVolume=this.createBoundingVolume(i.viewerRequestVolume,this.computedTransform,this._viewerRequestVolume)),this.updateGeometricErrorScale(),this._debugBoundingVolume=this._debugBoundingVolume&&this._debugBoundingVolume.destroy(),this._debugContentBoundingVolume=this._debugContentBoundingVolume&&this._debugContentBoundingVolume.destroy(),this._debugViewerRequestVolume=this._debugViewerRequestVolume&&this._debugViewerRequestVolume.destroy()},Y.prototype.updateGeometricErrorScale=function(){const e=b["a"].getScale(this.computedTransform,de),t=o["a"].maximumComponent(e);this.geometricError=this._geometricError*t},Y.prototype.update=function(e,t,n){const i=t.commandList.length;Ce(this,e),Ee(this,e,t,n),Ve(this,e,t);const o=t.commandList.length,r=o-i;this._commandsLength=r;for(let s=0;s<r;++s){const e=t.commandList[i+s],n=e.pass===z["a"].TRANSLUCENT;e.depthForTranslucentClassification=n}this.clippingPlanesDirty=!1};const Oe=[];function Re(e,t,n){const i=e*Math.pow(10,t),o=parseInt(i);return o*Math.pow(10,n)}function Te(e,t,n){return Math.max(_["a"].normalize(e,t,n)-_["a"].EPSILON7,0)}Y.prototype.process=function(e,t){const n=t.commandList;t.commandList=Oe,this._content.update(e,t),Oe.length=0,t.commandList=n},Y.prototype.updatePriority=function(){const e=this.tileset,t=e.preferLeaves,n=e._minimumPriority,i=e._maximumPriority,o=4,r=1,s=0,a=o,c=s+a,u=o,l=c+u,d=r,h=Math.pow(10,l),m=l+d,p=r,_=Math.pow(10,m),g=m+p,b=Math.pow(10,g);let f=Te(this._depth,n.depth,i.depth);f=t?1-f:f;const y=!e._skipLevelOfDetail&&this.refine===B["a"].REPLACE,S=y?Te(this._priorityHolder._distanceToCamera,n.distance,i.distance):Te(this._priorityReverseScreenSpaceError,n.reverseScreenSpaceError,i.reverseScreenSpaceError),E=Re(S,a,s),V=this._priorityProgressiveResolution?0:h,C=Te(this._priorityHolder._foveatedFactor,n.foveatedFactor,i.foveatedFactor),O=Re(C,u,c),R=this.priorityDeferred?_:0,T=e._pass===I["a"].PRELOAD_FLIGHT?0:b;this._priority=f+E+V+O+R+T},Y.prototype.isDestroyed=function(){return!1},Y.prototype.destroy=function(){return this._content=this._content&&this._content.destroy(),this._expiredContent=this._expiredContent&&!this._expiredContent.isDestroyed()&&this._expiredContent.destroy(),this._debugBoundingVolume=this._debugBoundingVolume&&this._debugBoundingVolume.destroy(),this._debugContentBoundingVolume=this._debugContentBoundingVolume&&this._debugContentBoundingVolume.destroy(),this._debugViewerRequestVolume=this._debugViewerRequestVolume&&this._debugViewerRequestVolume.destroy(),Object(d["a"])(this)},t["a"]=Y}}]);