(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~f3fce6cd"],{"04e1":function(t,e,i){"use strict";var n=i("77af"),o=i("670c"),s=i("bd8d"),l=i("535a"),a=i("2f63"),c=i("7d62"),r=i("52f0"),h=i("2812"),d=i("dda6"),_=i.n(d),u=i("8f7c"),b=i("141c"),f=i("2d75"),g=i("f61d"),p=i("c26f"),y=i("4626"),O=i("d9a9"),T=i("7eb3"),x=i("05e5"),C=i("c097"),D=i.n(C);function B(){this.textureInfo=void 0,this.dimensions=void 0,this.billboard=void 0}function m(t,e,i){this.labelCollection=t,this.index=e,this.dimensions=i}const j=1.2,k="ID_WHITE_PIXEL",w=new o["a"](4,4),A=new n["a"](1,1,1,1);function S(t){const e=document.createElement("canvas");e.width=w.x,e.height=w.y;const i=e.getContext("2d");i.fillStyle="#fff",i.fillRect(0,0,e.width,e.height),t.addImage(k,e)}const E={};function v(t,e,i,n,o,l,a){return E.font=e,E.fillColor=i,E.strokeColor=n,E.strokeWidth=o,E.padding=O["a"].PADDING,a===x["a"].CENTER?E.textBaseline="middle":a===x["a"].TOP?E.textBaseline="top":E.textBaseline="bottom",E.fill=l===y["a"].FILL||l===y["a"].FILL_AND_OUTLINE,E.stroke=l===y["a"].OUTLINE||l===y["a"].FILL_AND_OUTLINE,E.backgroundColor=s["a"].BLACK,Object(h["a"])(t,E)}function I(t,e){e.textureInfo=void 0,e.dimensions=void 0;const i=e.billboard;Object(a["a"])(i)&&(i.show=!1,i.image=void 0,Object(a["a"])(i._removeCallbackFunc)&&(i._removeCallbackFunc(),i._removeCallbackFunc=void 0),t._spareBillboards.push(i),e.billboard=void 0)}function R(t,e,i,n){n.index=t.addImageSync(e,i)}const N=new D.a;function L(t,e){const i=e._renderedText,n=N.splitGraphemes(i),l=n.length,c=e._glyphs,r=c.length;let h,d,u;if(e._relativeSize=e._fontSize/O["a"].FONT_SIZE,l<r)for(d=l;d<r;++d)I(t,c[d]);c.length=l;const b=e._showBackground&&i.split("\n").join("").length>0;let f=e._backgroundBillboard;const p=t._backgroundBillboardCollection;b?(Object(a["a"])(f)||(f=p.add({collection:t,image:k,imageSubRegion:A}),e._backgroundBillboard=f),f.color=e._backgroundColor,f.show=e._show,f.position=e._position,f.eyeOffset=e._eyeOffset,f.pixelOffset=e._pixelOffset,f.horizontalOrigin=g["a"].LEFT,f.verticalOrigin=e._verticalOrigin,f.heightReference=e._heightReference,f.scale=e.totalScale,f.pickPrimitive=e,f.id=e._id,f.translucencyByDistance=e._translucencyByDistance,f.pixelOffsetScaleByDistance=e._pixelOffsetScaleByDistance,f.scaleByDistance=e._scaleByDistance,f.distanceDisplayCondition=e._distanceDisplayCondition,f.disableDepthTestDistance=e._disableDepthTestDistance):Object(a["a"])(f)&&(p.remove(f),e._backgroundBillboard=f=void 0);const T=t._glyphTextureCache;for(u=0;u<l;++u){const i=n[u],l=e._verticalOrigin,r=JSON.stringify([i,e._fontFamily,e._fontStyle,e._fontWeight,+l]);let d=T[r];if(!Object(a["a"])(d)){const n=`${e._fontStyle} ${e._fontWeight} ${O["a"].FONT_SIZE}px ${e._fontFamily}`,o=v(i,n,s["a"].WHITE,s["a"].WHITE,0,y["a"].FILL,l);if(d=new m(t,-1,o.dimensions),T[r]=d,o.width>0&&o.height>0){const e=_()(o,{cutoff:O["a"].CUTOFF,radius:O["a"].RADIUS}),n=o.getContext("2d"),s=o.width,l=o.height,a=n.getImageData(0,0,s,l);for(let t=0;t<s;t++)for(let i=0;i<l;i++){const n=i*s+t,o=255*e[n],l=4*n;a.data[l+0]=o,a.data[l+1]=o,a.data[l+2]=o,a.data[l+3]=o}n.putImageData(a,0,0)," "!==i&&R(t._textureAtlas,r,o,d)}}if(h=c[u],Object(a["a"])(h)?-1===d.index?I(t,h):Object(a["a"])(h.textureInfo)&&(h.textureInfo=void 0):(h=new B,c[u]=h),h.textureInfo=d,h.dimensions=d.dimensions,-1!==d.index){let i=h.billboard;const n=t._spareBillboards;Object(a["a"])(i)||(n.length>0?i=n.pop():(i=t._billboardCollection.add({collection:t}),i._labelDimensions=new o["a"],i._labelTranslate=new o["a"]),h.billboard=i),i.show=e._show,i.position=e._position,i.eyeOffset=e._eyeOffset,i.pixelOffset=e._pixelOffset,i.horizontalOrigin=g["a"].LEFT,i.verticalOrigin=e._verticalOrigin,i.heightReference=e._heightReference,i.scale=e.totalScale,i.pickPrimitive=e,i.id=e._id,i.image=r,i.translucencyByDistance=e._translucencyByDistance,i.pixelOffsetScaleByDistance=e._pixelOffsetScaleByDistance,i.scaleByDistance=e._scaleByDistance,i.distanceDisplayCondition=e._distanceDisplayCondition,i.disableDepthTestDistance=e._disableDepthTestDistance,i._batchIndex=e._batchIndex,i.outlineColor=e.outlineColor,e.style===y["a"].FILL_AND_OUTLINE?(i.color=e._fillColor,i.outlineWidth=e.outlineWidth):e.style===y["a"].FILL?(i.color=e._fillColor,i.outlineWidth=0):e.style===y["a"].OUTLINE&&(i.color=s["a"].TRANSPARENT,i.outlineWidth=e.outlineWidth)}}e._repositionAllGlyphs=!0}function P(t,e,i){return e===g["a"].CENTER?-t/2:e===g["a"].RIGHT?-(t+i.x):i.x}const W=new o["a"],z=new o["a"];function F(t){const e=t._glyphs,i=t._renderedText;let n,s,l=0,c=0;const r=[];let h,d=Number.NEGATIVE_INFINITY,_=0,u=1;const b=e.length,p=t._backgroundBillboard,y=o["a"].clone(Object(a["a"])(p)?t._backgroundPadding:o["a"].ZERO,z);for(y.x/=t._relativeSize,y.y/=t._relativeSize,h=0;h<b;++h)"\n"===i.charAt(h)?(r.push(l),++u,l=0):(n=e[h],s=n.dimensions,_=Math.max(_,s.height-s.descent),d=Math.max(d,s.descent),l+=s.width-s.minx,h<b-1&&(l+=e[h+1].dimensions.minx),c=Math.max(c,l));r.push(l);const T=_+d,C=t.totalScale,D=t._horizontalOrigin,B=t._verticalOrigin;let m=0,k=r[m],w=P(k,D,y);const A=(Object(a["a"])(t._lineHeight)?t._lineHeight:j*t._fontSize)/t._relativeSize,S=A*(u-1);let E=c,v=T+S;Object(a["a"])(p)&&(E+=2*y.x,v+=2*y.y,p._labelHorizontalOrigin=D),W.x=w*C,W.y=0;let I=!0,R=0;for(h=0;h<b;++h)if("\n"===i.charAt(h))++m,R+=A,k=r[m],w=P(k,D,y),W.x=w*C,I=!0;else if(n=e[h],s=n.dimensions,B===x["a"].TOP?(W.y=s.height-_-y.y,W.y+=O["a"].PADDING):B===x["a"].CENTER?W.y=(S+s.height-_)/2:B===x["a"].BASELINE?(W.y=S,W.y-=O["a"].PADDING):(W.y=S+d+y.y,W.y-=O["a"].PADDING),W.y=(W.y-s.descent-R)*C,I&&(W.x-=O["a"].PADDING*C,I=!1),Object(a["a"])(n.billboard)&&(n.billboard._setTranslate(W),n.billboard._labelDimensions.x=E,n.billboard._labelDimensions.y=v,n.billboard._labelHorizontalOrigin=D),h<b-1){const t=e[h+1];W.x+=(s.width-s.minx+t.dimensions.minx)*C}if(Object(a["a"])(p)&&i.split("\n").join("").length>0&&(w=D===g["a"].CENTER?-c/2-y.x:D===g["a"].RIGHT?-(c+2*y.x):0,W.x=w*C,B===x["a"].TOP?W.y=T-_-d:B===x["a"].CENTER?W.y=(T-_)/2-d:B===x["a"].BASELINE?W.y=-y.y-d:W.y=0,W.y=W.y*C,p.width=E,p.height=v,p._setTranslate(W),p._labelTranslate=o["a"].clone(W,p._labelTranslate)),t.heightReference===f["a"].CLAMP_TO_GROUND)for(h=0;h<b;++h){n=e[h];const t=n.billboard;Object(a["a"])(t)&&(t._labelTranslate=o["a"].clone(W,t._labelTranslate))}}function G(t,e){const i=e._glyphs;for(let n=0,o=i.length;n<o;++n)I(t,i[n]);Object(a["a"])(e._backgroundBillboard)&&(t._backgroundBillboardCollection.remove(e._backgroundBillboard),e._backgroundBillboard=void 0),e._labelCollection=void 0,Object(a["a"])(e._removeCallbackFunc)&&e._removeCallbackFunc(),Object(c["a"])(e)}function q(t){t=Object(l["a"])(t,l["a"].EMPTY_OBJECT),this._scene=t.scene,this._batchTable=t.batchTable,this._textureAtlas=void 0,this._backgroundTextureAtlas=void 0,this._backgroundBillboardCollection=new u["a"]({scene:this._scene}),this._backgroundBillboardCollection.destroyTextureAtlas=!1,this._billboardCollection=new u["a"]({scene:this._scene,batchTable:this._batchTable}),this._billboardCollection.destroyTextureAtlas=!1,this._billboardCollection._sdf=!0,this._spareBillboards=[],this._glyphTextureCache={},this._labels=[],this._labelsToUpdate=[],this._totalGlyphCount=0,this._highlightColor=s["a"].clone(s["a"].WHITE),this.show=Object(l["a"])(t.show,!0),this.modelMatrix=r["a"].clone(Object(l["a"])(t.modelMatrix,r["a"].IDENTITY)),this.debugShowBoundingVolume=Object(l["a"])(t.debugShowBoundingVolume,!1),this.blendOption=Object(l["a"])(t.blendOption,b["a"].OPAQUE_AND_TRANSLUCENT)}Object.defineProperties(q.prototype,{length:{get:function(){return this._labels.length}}}),q.prototype.add=function(t){const e=new p["a"](t,this);return this._labels.push(e),this._labelsToUpdate.push(e),e},q.prototype.remove=function(t){if(Object(a["a"])(t)&&t._labelCollection===this){const e=this._labels.indexOf(t);if(-1!==e)return this._labels.splice(e,1),G(this,t),!0}return!1},q.prototype.removeAll=function(){const t=this._labels;for(let e=0,i=t.length;e<i;++e)G(this,t[e]);t.length=0},q.prototype.contains=function(t){return Object(a["a"])(t)&&t._labelCollection===this},q.prototype.get=function(t){return this._labels[t]},q.prototype.update=function(t){if(!this.show)return;const e=this._billboardCollection,i=this._backgroundBillboardCollection;e.modelMatrix=this.modelMatrix,e.debugShowBoundingVolume=this.debugShowBoundingVolume,i.modelMatrix=this.modelMatrix,i.debugShowBoundingVolume=this.debugShowBoundingVolume;const n=t.context;Object(a["a"])(this._textureAtlas)||(this._textureAtlas=new T["a"]({context:n}),e.textureAtlas=this._textureAtlas),Object(a["a"])(this._backgroundTextureAtlas)||(this._backgroundTextureAtlas=new T["a"]({context:n,initialSize:w}),i.textureAtlas=this._backgroundTextureAtlas,S(this._backgroundTextureAtlas));const o=this._labelsToUpdate.length;for(let l=0;l<o;++l){const t=this._labelsToUpdate[l];if(t.isDestroyed())continue;const e=t._glyphs.length;t._rebindAllGlyphs&&(L(this,t),t._rebindAllGlyphs=!1),t._repositionAllGlyphs&&(F(t),t._repositionAllGlyphs=!1);const i=t._glyphs.length-e;this._totalGlyphCount+=i}const s=i.length>0?b["a"].TRANSLUCENT:this.blendOption;e.blendOption=s,i.blendOption=s,e._highlightColor=this._highlightColor,i._highlightColor=this._highlightColor,this._labelsToUpdate.length=0,i.update(t),e.update(t)},q.prototype.isDestroyed=function(){return!1},q.prototype.destroy=function(){return this.removeAll(),this._billboardCollection=this._billboardCollection.destroy(),this._textureAtlas=this._textureAtlas&&this._textureAtlas.destroy(),this._backgroundBillboardCollection=this._backgroundBillboardCollection.destroy(),this._backgroundTextureAtlas=this._backgroundTextureAtlas&&this._backgroundTextureAtlas.destroy(),Object(c["a"])(this)},e["a"]=q},4626:function(t,e,i){"use strict";const n={FILL:0,OUTLINE:1,FILL_AND_OUTLINE:2};e["a"]=Object.freeze(n)},c26f:function(t,e,i){"use strict";var n=i("77af"),o=i("670c"),s=i("be18"),l=i("bd8d"),a=i("535a"),c=i("2f63"),r=i("aee6"),h=i("6dfc"),d=i("3e44"),_=i("2d75"),u=i("f61d"),b=i("4626"),f=i("d9a9"),g=i("05e5");const p={};let y=0;const O=256,T=new l["a"](.165,.165,.165,.8),x=new o["a"](7,5),C=Object.freeze({LTR:0,RTL:1,WEAK:2,BRACKETS:3});function D(t){t._rebindAllGlyphs||t._repositionAllGlyphs||t._labelCollection._labelsToUpdate.push(t),t._rebindAllGlyphs=!0}function B(t){t._rebindAllGlyphs||t._repositionAllGlyphs||t._labelCollection._labelsToUpdate.push(t),t._repositionAllGlyphs=!0}function m(t,e){return document.defaultView.getComputedStyle(t,null).getPropertyValue(e)}function j(t){let e=p[t._font];if(!Object(c["a"])(e)){const i=document.createElement("div");i.style.position="absolute",i.style.opacity=0,i.style.font=t._font,document.body.appendChild(i);let n=parseFloat(m(i,"line-height"));isNaN(n)&&(n=void 0),e={family:m(i,"font-family"),size:m(i,"font-size").replace("px",""),style:m(i,"font-style"),weight:m(i,"font-weight"),lineHeight:n},document.body.removeChild(i),y<O&&(p[t._font]=e,y++)}t._fontFamily=e.family,t._fontSize=e.size,t._fontStyle=e.style,t._fontWeight=e.weight,t._lineHeight=e.lineHeight}function k(t,e){t=Object(a["a"])(t,a["a"].EMPTY_OBJECT);let i=t.translucencyByDistance,n=t.pixelOffsetScaleByDistance,d=t.scaleByDistance,f=t.distanceDisplayCondition;Object(c["a"])(i)&&(i=h["a"].clone(i)),Object(c["a"])(n)&&(n=h["a"].clone(n)),Object(c["a"])(d)&&(d=h["a"].clone(d)),Object(c["a"])(f)&&(f=r["a"].clone(f)),this._renderedText=void 0,this._text=void 0,this._show=Object(a["a"])(t.show,!0),this._font=Object(a["a"])(t.font,"30px sans-serif"),this._fillColor=l["a"].clone(Object(a["a"])(t.fillColor,l["a"].WHITE)),this._outlineColor=l["a"].clone(Object(a["a"])(t.outlineColor,l["a"].BLACK)),this._outlineWidth=Object(a["a"])(t.outlineWidth,1),this._showBackground=Object(a["a"])(t.showBackground,!1),this._backgroundColor=l["a"].clone(Object(a["a"])(t.backgroundColor,T)),this._backgroundPadding=o["a"].clone(Object(a["a"])(t.backgroundPadding,x)),this._style=Object(a["a"])(t.style,b["a"].FILL),this._verticalOrigin=Object(a["a"])(t.verticalOrigin,g["a"].BASELINE),this._horizontalOrigin=Object(a["a"])(t.horizontalOrigin,u["a"].LEFT),this._pixelOffset=o["a"].clone(Object(a["a"])(t.pixelOffset,o["a"].ZERO)),this._eyeOffset=s["a"].clone(Object(a["a"])(t.eyeOffset,s["a"].ZERO)),this._position=s["a"].clone(Object(a["a"])(t.position,s["a"].ZERO)),this._scale=Object(a["a"])(t.scale,1),this._id=t.id,this._translucencyByDistance=i,this._pixelOffsetScaleByDistance=n,this._scaleByDistance=d,this._heightReference=Object(a["a"])(t.heightReference,_["a"].NONE),this._distanceDisplayCondition=f,this._disableDepthTestDistance=t.disableDepthTestDistance,this._labelCollection=e,this._glyphs=[],this._backgroundBillboard=void 0,this._batchIndex=void 0,this._rebindAllGlyphs=!0,this._repositionAllGlyphs=!0,this._actualClampedPosition=void 0,this._removeCallbackFunc=void 0,this._mode=void 0,this._clusterShow=!0,this.text=Object(a["a"])(t.text,""),this._relativeSize=1,j(this),this._updateClamping()}function w(t,e){const i=/[a-zA-Z0-9]/,n=/[()[\]{}<>]/,o=[];let s="",l=C.LTR,a="";const c=t.length;for(let r=0;r<c;++r){const c=t.charAt(r);a=e.test(c)?C.RTL:i.test(c)?C.LTR:n.test(c)?C.BRACKETS:C.WEAK,0===r&&(l=a),l===a&&a!==C.BRACKETS?s+=c:(""!==s&&o.push({Type:l,Word:s}),l=a,s=c)}return o.push({Type:a,Word:s}),o}function A(t){return t.split("").reverse().join("")}function S(t,e,i){return t.slice(0,e)+i+t.slice(e)}function E(t){switch(t){case"(":return")";case")":return"(";case"[":return"]";case"]":return"[";case"{":return"}";case"}":return"{";case"<":return">";case">":return"<"}}Object.defineProperties(k.prototype,{show:{get:function(){return this._show},set:function(t){if(this._show!==t){this._show=t;const e=this._glyphs;for(let n=0,o=e.length;n<o;n++){const i=e[n].billboard;Object(c["a"])(i)&&(i.show=t)}const i=this._backgroundBillboard;Object(c["a"])(i)&&(i.show=t)}}},position:{get:function(){return this._position},set:function(t){const e=this._position;if(!s["a"].equals(e,t)){s["a"].clone(t,e);const i=this._glyphs;for(let e=0,o=i.length;e<o;e++){const n=i[e].billboard;Object(c["a"])(n)&&(n.position=t)}const n=this._backgroundBillboard;Object(c["a"])(n)&&(n.position=t),this._updateClamping()}}},heightReference:{get:function(){return this._heightReference},set:function(t){if(t!==this._heightReference){this._heightReference=t;const e=this._glyphs;for(let n=0,o=e.length;n<o;n++){const i=e[n].billboard;Object(c["a"])(i)&&(i.heightReference=t)}const i=this._backgroundBillboard;Object(c["a"])(i)&&(i.heightReference=t),B(this),this._updateClamping()}}},text:{get:function(){return this._text},set:function(t){if(this._text!==t){this._text=t;const e=t.replace(/\u00ad/g,"");this._renderedText=k.enableRightToLeftDetection?N(e):e,D(this)}}},font:{get:function(){return this._font},set:function(t){this._font!==t&&(this._font=t,D(this),j(this))}},fillColor:{get:function(){return this._fillColor},set:function(t){const e=this._fillColor;l["a"].equals(e,t)||(l["a"].clone(t,e),D(this))}},outlineColor:{get:function(){return this._outlineColor},set:function(t){const e=this._outlineColor;l["a"].equals(e,t)||(l["a"].clone(t,e),D(this))}},outlineWidth:{get:function(){return this._outlineWidth},set:function(t){this._outlineWidth!==t&&(this._outlineWidth=t,D(this))}},showBackground:{get:function(){return this._showBackground},set:function(t){this._showBackground!==t&&(this._showBackground=t,D(this))}},backgroundColor:{get:function(){return this._backgroundColor},set:function(t){const e=this._backgroundColor;if(!l["a"].equals(e,t)){l["a"].clone(t,e);const i=this._backgroundBillboard;Object(c["a"])(i)&&(i.color=e)}}},backgroundPadding:{get:function(){return this._backgroundPadding},set:function(t){const e=this._backgroundPadding;o["a"].equals(e,t)||(o["a"].clone(t,e),B(this))}},style:{get:function(){return this._style},set:function(t){this._style!==t&&(this._style=t,D(this))}},pixelOffset:{get:function(){return this._pixelOffset},set:function(t){const e=this._pixelOffset;if(!o["a"].equals(e,t)){o["a"].clone(t,e);const i=this._glyphs;for(let e=0,o=i.length;e<o;e++){const n=i[e];Object(c["a"])(n.billboard)&&(n.billboard.pixelOffset=t)}const n=this._backgroundBillboard;Object(c["a"])(n)&&(n.pixelOffset=t)}}},translucencyByDistance:{get:function(){return this._translucencyByDistance},set:function(t){const e=this._translucencyByDistance;if(!h["a"].equals(e,t)){this._translucencyByDistance=h["a"].clone(t,e);const i=this._glyphs;for(let e=0,o=i.length;e<o;e++){const n=i[e];Object(c["a"])(n.billboard)&&(n.billboard.translucencyByDistance=t)}const n=this._backgroundBillboard;Object(c["a"])(n)&&(n.translucencyByDistance=t)}}},pixelOffsetScaleByDistance:{get:function(){return this._pixelOffsetScaleByDistance},set:function(t){const e=this._pixelOffsetScaleByDistance;if(!h["a"].equals(e,t)){this._pixelOffsetScaleByDistance=h["a"].clone(t,e);const i=this._glyphs;for(let e=0,o=i.length;e<o;e++){const n=i[e];Object(c["a"])(n.billboard)&&(n.billboard.pixelOffsetScaleByDistance=t)}const n=this._backgroundBillboard;Object(c["a"])(n)&&(n.pixelOffsetScaleByDistance=t)}}},scaleByDistance:{get:function(){return this._scaleByDistance},set:function(t){const e=this._scaleByDistance;if(!h["a"].equals(e,t)){this._scaleByDistance=h["a"].clone(t,e);const i=this._glyphs;for(let e=0,o=i.length;e<o;e++){const n=i[e];Object(c["a"])(n.billboard)&&(n.billboard.scaleByDistance=t)}const n=this._backgroundBillboard;Object(c["a"])(n)&&(n.scaleByDistance=t)}}},eyeOffset:{get:function(){return this._eyeOffset},set:function(t){const e=this._eyeOffset;if(!s["a"].equals(e,t)){s["a"].clone(t,e);const i=this._glyphs;for(let e=0,o=i.length;e<o;e++){const n=i[e];Object(c["a"])(n.billboard)&&(n.billboard.eyeOffset=t)}const n=this._backgroundBillboard;Object(c["a"])(n)&&(n.eyeOffset=t)}}},horizontalOrigin:{get:function(){return this._horizontalOrigin},set:function(t){this._horizontalOrigin!==t&&(this._horizontalOrigin=t,B(this))}},verticalOrigin:{get:function(){return this._verticalOrigin},set:function(t){if(this._verticalOrigin!==t){this._verticalOrigin=t;const e=this._glyphs;for(let n=0,o=e.length;n<o;n++){const i=e[n];Object(c["a"])(i.billboard)&&(i.billboard.verticalOrigin=t)}const i=this._backgroundBillboard;Object(c["a"])(i)&&(i.verticalOrigin=t),B(this)}}},scale:{get:function(){return this._scale},set:function(t){if(this._scale!==t){this._scale=t;const e=this._glyphs;for(let n=0,o=e.length;n<o;n++){const i=e[n];Object(c["a"])(i.billboard)&&(i.billboard.scale=t*this._relativeSize)}const i=this._backgroundBillboard;Object(c["a"])(i)&&(i.scale=t*this._relativeSize),B(this)}}},totalScale:{get:function(){return this._scale*this._relativeSize}},distanceDisplayCondition:{get:function(){return this._distanceDisplayCondition},set:function(t){if(!r["a"].equals(t,this._distanceDisplayCondition)){this._distanceDisplayCondition=r["a"].clone(t,this._distanceDisplayCondition);const e=this._glyphs;for(let n=0,o=e.length;n<o;n++){const i=e[n];Object(c["a"])(i.billboard)&&(i.billboard.distanceDisplayCondition=t)}const i=this._backgroundBillboard;Object(c["a"])(i)&&(i.distanceDisplayCondition=t)}}},disableDepthTestDistance:{get:function(){return this._disableDepthTestDistance},set:function(t){if(this._disableDepthTestDistance!==t){this._disableDepthTestDistance=t;const e=this._glyphs;for(let n=0,o=e.length;n<o;n++){const i=e[n];Object(c["a"])(i.billboard)&&(i.billboard.disableDepthTestDistance=t)}const i=this._backgroundBillboard;Object(c["a"])(i)&&(i.disableDepthTestDistance=t)}}},id:{get:function(){return this._id},set:function(t){if(this._id!==t){this._id=t;const e=this._glyphs;for(let n=0,o=e.length;n<o;n++){const i=e[n];Object(c["a"])(i.billboard)&&(i.billboard.id=t)}const i=this._backgroundBillboard;Object(c["a"])(i)&&(i.id=t)}}},pickId:{get:function(){if(0!==this._glyphs.length&&Object(c["a"])(this._glyphs[0].billboard))return this._glyphs[0].billboard.pickId}},_clampedPosition:{get:function(){return this._actualClampedPosition},set:function(t){this._actualClampedPosition=s["a"].clone(t,this._actualClampedPosition);const e=this._glyphs;for(let n=0,o=e.length;n<o;n++){const i=e[n];Object(c["a"])(i.billboard)&&(i.billboard._clampedPosition=t)}const i=this._backgroundBillboard;Object(c["a"])(i)&&(i._clampedPosition=t)}},clusterShow:{get:function(){return this._clusterShow},set:function(t){if(this._clusterShow!==t){this._clusterShow=t;const e=this._glyphs;for(let n=0,o=e.length;n<o;n++){const i=e[n];Object(c["a"])(i.billboard)&&(i.billboard.clusterShow=t)}const i=this._backgroundBillboard;Object(c["a"])(i)&&(i.clusterShow=t)}}}}),k.prototype._updateClamping=function(){d["a"]._updateClamping(this._labelCollection,this)},k.prototype.computeScreenSpacePosition=function(t,e){Object(c["a"])(e)||(e=new o["a"]);const i=this._labelCollection,n=i.modelMatrix,s=Object(c["a"])(this._actualClampedPosition)?this._actualClampedPosition:this._position,l=d["a"]._computeScreenSpacePosition(n,s,this._eyeOffset,this._pixelOffset,t,e);return l},k.getScreenSpaceBoundingBox=function(t,e,i){let o=0,s=0,l=0,a=0;const r=t.totalScale,h=t._backgroundBillboard;if(Object(c["a"])(h))o=e.x+h._translate.x,s=e.y-h._translate.y,l=h.width*r,a=h.height*r,t.verticalOrigin===g["a"].BOTTOM||t.verticalOrigin===g["a"].BASELINE?s-=a:t.verticalOrigin===g["a"].CENTER&&(s-=.5*a);else{o=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY;let i=0,n=0;const h=t._glyphs,d=h.length;for(let l=0;l<d;++l){const a=h[l],d=a.billboard;if(!Object(c["a"])(d))continue;const _=e.x+d._translate.x;let u=e.y-d._translate.y;const b=a.dimensions.width*r,p=a.dimensions.height*r;t.verticalOrigin===g["a"].BOTTOM||t.verticalOrigin===g["a"].BASELINE?u-=p:t.verticalOrigin===g["a"].CENTER&&(u-=.5*p),t._verticalOrigin===g["a"].TOP?u+=f["a"].PADDING*r:t._verticalOrigin!==g["a"].BOTTOM&&t._verticalOrigin!==g["a"].BASELINE||(u-=f["a"].PADDING*r),o=Math.min(o,_),s=Math.min(s,u),i=Math.max(i,_+b),n=Math.max(n,u+p)}l=i-o,a=n-s}return Object(c["a"])(i)||(i=new n["a"]),i.x=o,i.y=s,i.width=l,i.height=a,i},k.prototype.equals=function(t){return this===t||Object(c["a"])(t)&&this._show===t._show&&this._scale===t._scale&&this._outlineWidth===t._outlineWidth&&this._showBackground===t._showBackground&&this._style===t._style&&this._verticalOrigin===t._verticalOrigin&&this._horizontalOrigin===t._horizontalOrigin&&this._heightReference===t._heightReference&&this._renderedText===t._renderedText&&this._font===t._font&&s["a"].equals(this._position,t._position)&&l["a"].equals(this._fillColor,t._fillColor)&&l["a"].equals(this._outlineColor,t._outlineColor)&&l["a"].equals(this._backgroundColor,t._backgroundColor)&&o["a"].equals(this._backgroundPadding,t._backgroundPadding)&&o["a"].equals(this._pixelOffset,t._pixelOffset)&&s["a"].equals(this._eyeOffset,t._eyeOffset)&&h["a"].equals(this._translucencyByDistance,t._translucencyByDistance)&&h["a"].equals(this._pixelOffsetScaleByDistance,t._pixelOffsetScaleByDistance)&&h["a"].equals(this._scaleByDistance,t._scaleByDistance)&&r["a"].equals(this._distanceDisplayCondition,t._distanceDisplayCondition)&&this._disableDepthTestDistance===t._disableDepthTestDistance&&this._id===t._id},k.prototype.isDestroyed=function(){return!1},k.enableRightToLeftDetection=!1;const v="א-ת",I="؀-ۿݐ-ݿࢠ-ࣿ",R=new RegExp(`[${v}${I}]`);function N(t){const e=t.split("\n");let i="";for(let n=0;n<e.length;n++){const t=e[n],o=R.test(t.charAt(0)),s=w(t,R);let l=0,a="";for(let e=0;e<s.length;++e){const t=s[e],i=t.Type===C.BRACKETS?E(t.Word):A(t.Word);o?t.Type===C.RTL?(a=i+a,l=0):t.Type===C.LTR?(a=S(a,l,t.Word),l+=t.Word.length):t.Type!==C.WEAK&&t.Type!==C.BRACKETS||(t.Type===C.WEAK&&s[e-1].Type===C.BRACKETS?a=i+a:s[e-1].Type===C.RTL?(a=i+a,l=0):s.length>e+1?s[e+1].Type===C.RTL?(a=i+a,l=0):(a=S(a,l,t.Word),l+=t.Word.length):a=S(a,0,i)):t.Type===C.RTL?a=S(a,l,i):t.Type===C.LTR?(a+=t.Word,l=a.length):t.Type!==C.WEAK&&t.Type!==C.BRACKETS||(e>0&&s[e-1].Type===C.RTL?s.length>e+1?s[e+1].Type===C.RTL?a=S(a,l,i):(a+=t.Word,l=a.length):a+=t.Word:(a+=t.Word,l=a.length))}i+=a,n<e.length-1&&(i+="\n")}return i}e["a"]=k}}]);