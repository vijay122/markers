webpackJsonp([0],[,,,function(e,t,n){"use strict";t.React=n(0),t.ReactDOM=n(1),t.Component=t.React.Component},function(e,t,n){e.exports=n(17)()},,,,,,,function(e,t,n){e.exports=n(12)},function(e,t,n){"use strict";var o=n(3),a=n(13),r=function(e){return e&&e.__esModule?e:{default:e}}(a);n(30),o.ReactDOM.render(o.React.createElement(r.default,null),document.getElementById("root"))},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(3),u=n(14),c=o(u),p=n(22),h=o(p),f=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleMarkerClick=function(e){var t=(e.event,e.payload),n=e.anchor;console.log("Marker #"+t+" clicked at: ",n)},n.mouseOver=function(){l.React.createElement("div",null,l.React.createElement("label",null,"hovered"))},n.mouseOut=function(){return"over out"},n.state={center:[50.879,4.6997],zoom:12},n}return i(t,e),s(t,[{key:"render",value:function(){var e=this.state,t=e.center,n=e.zoom;return l.React.createElement("div",{style:{textAlign:"center",marginTop:50}},l.React.createElement(c.default,{center:t,zoom:n,width:600,height:400},l.React.createElement(h.default,{markerType:"plot",hoverText:"erode mahal anddd",label:"1",anchor:[50.879,4.6997],onMouseOut:this.mouseOut,onMouseOver:this.mouseOver,payload:1,onClick:this.handleMarkerClick}),l.React.createElement(h.default,{label:"2",hoverText:"madrasdsfsdfsdfsdfsdf",anchor:[50.874,4.6947],payload:2,onClick:this.handleMarkerClick})))}}]),t}(l.Component);t.default=f},function(e,t,n){e.exports=n(15)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t,n){return"https://maps.wikimedia.org/osm-intl/"+n+"/"+e+"/"+t+("undefined"!=typeof window&&window.devicePixelRatio>=2?"@2x":"")+".png"}function u(e,t){return e/Math.pow(2,t)*360-180}function c(e,t){var n=Math.PI-2*Math.PI*e/Math.pow(2,t);return 180/Math.PI*Math.atan(.5*(Math.exp(n)-Math.exp(-n)))}function p(e,t){var n=(0,M.default)(e);return[t.clientX-n.x,t.clientY-n.y]}function h(e){return e*(2-e)}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=n(16),m=n(4),v=o(m),g=n(19),M=o(g),_=n(20),y=o(_),b=n(21),w=o(b),x=300,T=1500,S=150,E=40,C=2,P=300,k=60,z=function(){},O=function(e,t){return(e+180)/360*Math.pow(2,t)},R=function(e,t){return(1-Math.log(Math.tan(e*Math.PI/180)+1/Math.cos(e*Math.PI/180))/Math.PI)/2*Math.pow(2,t)},A=u(0,10),D=c(Math.pow(2,10),10),L=u(Math.pow(2,10),10),Z=c(0,10),W="undefined"!=typeof window&&window.performance&&window.performance.now?function(){return window.performance.now()}:function(){var e=(new Date).getTime();return function(){return(new Date).getTime()-e}}(),j=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.bindMouseEvents=function(){var e=window.addEventListener;e("mousedown",n.handleMouseDown),e("mouseup",n.handleMouseUp),e("mousemove",n.handleMouseMove)},n.bindTouchEvents=function(){var e=window.addEventListener;e("touchstart",n.handleTouchStart),e("touchmove",n.handleTouchMove),e("touchend",n.handleTouchEnd)},n.unbindMouseEvents=function(){var e=window.removeEventListener;e("mousedown",n.handleMouseDown),e("mouseup",n.handleMouseUp),e("mousemove",n.handleMouseMove)},n.unbindTouchEvents=function(){var e=window.removeEventListener;e("touchstart",n.handleTouchStart),e("touchmove",n.handleTouchMove),e("touchend",n.handleTouchEnd)},n.setCenterZoomTarget=function(e,t,o){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:x;if(n.props.animate&&(!o||n.distanceInScreens(e,t,n.state.center,n.state.zoom)<=n.props.animateMaxScreens)){if(n._isAnimating){window.cancelAnimationFrame(n._animFrame);var i=n.animationStep(W()),s=i.centerStep,l=i.zoomStep;n._centerStart=s,n._zoomStart=l}else n._isAnimating=!0,n._centerStart=n.limitCenterAtZoom([n._lastCenter[0],n._lastCenter[1]],n._lastZoom),n._zoomStart=n._lastZoom,n.onAnimationStart();n._animationStart=W(),n._animationEnd=n._animationStart+r,a?(n._zoomAround=a,n._centerTarget=n.calculateZoomCenter(n._lastCenter,a,n._lastZoom,t)):(n._zoomAround=null,n._centerTarget=e),n._zoomTarget=t,n._animFrame=window.requestAnimationFrame(n.animate)}else if(a){var u=n.calculateZoomCenter(n._lastCenter,a,n._lastZoom,t);n.setCenterZoom(u,t,o)}else n.setCenterZoom(e,t,o)},n.distanceInScreens=function(e,t,o,a){var r=n.props,i=r.width,s=r.height,l=n.latLngToPixel(o,o,a),u=n.latLngToPixel(e,o,a),c=n.latLngToPixel(o,o,t),p=n.latLngToPixel(e,o,t),h=(Math.abs(l[0]-u[0])+Math.abs(c[0]-p[0]))/2/i,f=(Math.abs(l[1]-u[1])+Math.abs(c[1]-p[1]))/2/s;return Math.sqrt(h*h+f*f)},n.animationStep=function(e){var t=n._animationEnd-n._animationStart,o=Math.max(e-n._animationStart,0),a=h(o/t),r=(n._zoomTarget-n._zoomStart)*a,i=n._zoomStart+r;if(n._zoomAround){return{centerStep:n.calculateZoomCenter(n._centerStart,n._zoomAround,n._zoomStart,i),zoomStep:i}}return{centerStep:[n._centerStart[0]+(n._centerTarget[0]-n._centerStart[0])*a,n._centerStart[1]+(n._centerTarget[1]-n._centerStart[1])*a],zoomStep:i}},n.animate=function(e){if(e>=n._animationEnd)n._isAnimating=!1,n.setCenterZoom(n._centerTarget,n._zoomTarget,!0),n.onAnimationStop();else{var t=n.animationStep(e),o=t.centerStep,a=t.zoomStep;n.setCenterZoom(o,a),n._animFrame=window.requestAnimationFrame(n.animate)}},n.stopAnimating=function(){n._isAnimating&&(n._isAnimating=!1,n.onAnimationStop(),window.cancelAnimationFrame(n._animFrame))},n.limitCenterAtZoom=function(e){return[Math.max(Math.min(isNaN(e[0])?n.state.center[0]:e[0],Z),D),Math.max(Math.min(isNaN(e[1])?n.state.center[1]:e[1],L),A)]},n.onAnimationStart=function(){n.props.onAnimationStart&&n.props.onAnimationStart()},n.onAnimationStop=function(){n.props.onAnimationStop&&n.props.onAnimationStop()},n.setCenterZoom=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=n.limitCenterAtZoom(e,t);if(Math.round(n.state.zoom)!==Math.round(t)){var i=n.tileValues(n.props,n.state),s=n.tileValues(n.props,{center:r,zoom:t}),l=n.state.oldTiles;n.setState({oldTiles:l.filter(function(e){return e.roundedZoom!==i.roundedZoom}).concat(i)},z);for(var u={},c=s.tileMinX;c<=s.tileMaxX;c++)for(var p=s.tileMinY;p<=s.tileMaxY;p++){var h=c+"-"+p+"-"+s.roundedZoom;u[h]=!1}n._loadTracker=u}n.setState({center:r,zoom:t},z);var f=n.props.zoom?n.props.zoom:n._lastZoom,d=n.props.center?n.props.center:n._lastCenter;(o||Math.abs(f-t)>.001||Math.abs(d[0]-r[0])>1e-5||Math.abs(d[1]-r[1])>1e-5)&&(n._lastZoom=t,n._lastCenter=[].concat(a(r)),n.syncToProps(r,t))},n.imageLoaded=function(e){if(n._loadTracker&&e in n._loadTracker){n._loadTracker[e]=!0;0===Object.keys(n._loadTracker).filter(function(e){return!n._loadTracker[e]}).length&&n.setState({oldTiles:[]},z)}},n.handleTouchStart=function(e){if(1===e.touches.length){var t=e.touches[0],o=p(n._containerRef,t);if(n.coordsInside(o))if(n._touchStartPixel=[o],n.stopAnimating(),n._lastTap&&W()-n._lastTap<P){e.preventDefault();var a=n.pixelToLatLng(n._touchStartPixel[0]);n.setCenterZoomTarget(null,Math.max(1,Math.min(n.state.zoom+1,18)),!1,a)}else n._lastTap=W(),n.startTrackingMoveEvents(o)}else if(2===e.touches.length&&n._touchStartPixel){e.preventDefault(),n.stopTrackingMoveEvents(),(n.state.pixelDelta||n.state.zoomDelta)&&n.sendDeltaChange();var r=p(n._containerRef,e.touches[0]),i=p(n._containerRef,e.touches[1]);n._touchStartPixel=[r,i],n._touchStartMidPoint=[(r[0]+i[0])/2,(r[1]+i[1])/2],n._touchStartDistance=Math.sqrt(Math.pow(r[0]-i[0],2)+Math.pow(r[1]-i[1],2))}},n.handleTouchMove=function(e){if(1===e.touches.length&&n._touchStartPixel){e.preventDefault();var t=e.touches[0],o=p(n._containerRef,t);n.trackMoveEvents(o),n.setState({pixelDelta:[o[0]-n._touchStartPixel[0][0],o[1]-n._touchStartPixel[0][1]]},z)}else if(2===e.touches.length&&n._touchStartPixel){var a=n.props,r=a.width,i=a.height,s=n.state.zoom;e.preventDefault();var l=p(n._containerRef,e.touches[0]),u=p(n._containerRef,e.touches[1]),c=[(l[0]+u[0])/2,(l[1]+u[1])/2],h=[c[0]-n._touchStartMidPoint[0],c[1]-n._touchStartMidPoint[1]],f=Math.sqrt(Math.pow(l[0]-u[0],2)+Math.pow(l[1]-u[1],2)),d=Math.min(18,s+Math.log2(f/n._touchStartDistance))-s,m=Math.pow(2,d),v=[(r/2-c[0])*(m-1),(i/2-c[1])*(m-1)];n.setState({zoomDelta:d,pixelDelta:[v[0]+h[0]*m,v[1]+h[1]*m]},z)}},n.handleTouchEnd=function(e){if(n._touchStartPixel){var t=n.sendDeltaChange(),o=t.center,a=t.zoom;if(0===e.touches.length){var r=n._touchStartPixel[0],i=p(n._containerRef,e.changedTouches[0]);(Math.abs(r[0]-i[0])>C||Math.abs(r[1]-i[1])>C)&&(e.preventDefault(),n.throwAfterMoving(i,o,a)),n._touchStartPixel=null}else if(1===e.touches.length){e.preventDefault();var s=p(n._containerRef,e.touches[0]);if(n._touchStartPixel=[s],n.startTrackingMoveEvents(s),n.props.zoomSnap){var l=n.pixelToLatLng(n._touchStartMidPoint),u=Math.max(1,Math.min(Math.round(n.state.zoom),18));n.setCenterZoomTarget(l,u,!1,l)}}}},n.handleMouseDown=function(e){var t=p(n._containerRef,e);if(0===e.button&&(!e.target||!(0,y.default)(e.target,"pigeon-drag-block"))&&n.coordsInside(t))if(n.stopAnimating(),e.preventDefault(),n._lastClick&&W()-n._lastClick<P){var o=n.pixelToLatLng(n._mousePosition);n.setCenterZoomTarget(null,Math.max(1,Math.min(n.state.zoom+1,18)),!1,o)}else n._lastClick=W(),n._mouseDown=!0,n._dragStart=t,n.startTrackingMoveEvents(t)},n.handleMouseMove=function(e){n._mousePosition=p(n._containerRef,e),n._mouseDown&&n._dragStart&&(n.trackMoveEvents(n._mousePosition),n.setState({pixelDelta:[n._mousePosition[0]-n._dragStart[0],n._mousePosition[1]-n._dragStart[1]]},z))},n.handleMouseUp=function(e){var t=n.state.pixelDelta;if(n._mouseDown){n._mouseDown=!1;var o=p(n._containerRef,e);if(!n.props.onClick||e.target&&(0,y.default)(e.target,"pigeon-click-block")||t&&!(Math.abs(t[0])+Math.abs(t[1])<=C)){var a=n.sendDeltaChange(),r=a.center,i=a.zoom;n.throwAfterMoving(o,r,i)}else{var s=n.pixelToLatLng(o);n.props.onClick({event:e,latLng:s,pixel:o}),n.setState({pixelDelta:null},z)}}},n.startTrackingMoveEvents=function(e){n._moveEvents=[{timestamp:W(),coords:e}]},n.stopTrackingMoveEvents=function(){n._moveEvents=[]},n.trackMoveEvents=function(e){var t=W();t-n._moveEvents[n._moveEvents.length-1].timestamp>40&&(n._moveEvents.push({timestamp:t,coords:e}),n._moveEvents.length>2&&n._moveEvents.shift())},n.throwAfterMoving=function(e,t,o){var a=n.props,r=a.width,i=a.height,s=a.animate,l=W(),p=n._moveEvents.shift();if(p&&s){var h=Math.max(l-p.timestamp,1),f=[(e[0]-p.coords[0])/h*120,(e[1]-p.coords[1])/h*120],d=Math.sqrt(f[0]*f[0]+f[1]*f[1]);if(d>E){var m=Math.sqrt(r*r+i*i),v=u(O(t[1],o)-f[0]/256,o),g=c(R(t[0],o)-f[1]/256,o);n.setCenterZoomTarget([g,v],o,!1,null,T*d/m)}}n.stopTrackingMoveEvents()},n.sendDeltaChange=function(){var e=n.state,t=e.center,o=e.zoom,a=e.pixelDelta,r=e.zoomDelta,i=t[0],s=t[1];return(a||0!==r)&&(s=u(O(t[1],o+r)-(a?a[0]/256:0),o+r),i=c(R(t[0],o+r)-(a?a[1]/256:0),o+r),n.setCenterZoom([i,s],o+r)),n.setState({pixelDelta:null,zoomDelta:0},z),{center:n.limitCenterAtZoom([i,s],o+r),zoom:o+r}},n.getBounds=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.state.center,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.zoomPlusDelta(),o=n.props,a=o.width,r=o.height;return{ne:n.pixelToLatLng([a-1,0],e,t),sw:n.pixelToLatLng([0,r-1],e,t)}},n.syncToProps=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.state.center,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.state.zoom,o=n.props.onBoundsChanged;if(o){o({center:e,zoom:t,bounds:n.getBounds(e,t),initial:!n._boundsSynced}),n._boundsSynced=!0}},n.handleWheel=function(e){var t=n.props,o=t.mouseEvents,a=t.zoomOnMouseWheel,r=t.zoomSnap;if(o)if(a||e.metaKey){e.preventDefault();var i=-e.deltaY/S;if(!r&&n._zoomTarget){var s=n._zoomTarget-n.state.zoom;n.zoomAroundMouse(i+s,r)}else n.zoomAroundMouse(i,r)}else n.state.showMetaWarning||n.setState({showMetaWarning:!0}),n._metaTimeout&&window.clearTimeout(n._metaTimeout),n._metaTimeout=window.setTimeout(n.clearMetaWarning,300)},n.clearMetaWarning=function(){n.setState({showMetaWarning:!1})},n.zoomAroundMouse=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=n.state.zoom;if(!(!n._mousePosition||1===o&&e<0||18===o&&e>0)){var a=n.pixelToLatLng(n._mousePosition),r=o+e;t&&(r=e<0?Math.floor(r):Math.ceil(r)),r=Math.max(1,Math.min(r,18)),n.setCenterZoomTarget(null,r,!1,a)}},n.zoomPlusDelta=function(){return n.state.zoom+n.state.zoomDelta},n.pixelToLatLng=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.state.center,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.zoomPlusDelta(),a=n.props,r=a.width,i=a.height,s=n.state.pixelDelta,l=[(e[0]-r/2-(s?s[0]:0))/256,(e[1]-i/2-(s?s[1]:0))/256],p=O(t[1],o)+l[0],h=R(t[0],o)+l[1];return n.limitCenterAtZoom([c(h,o),u(p,o)],o)},n.latLngToPixel=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.state.center,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.zoomPlusDelta(),a=n.props,r=a.width,i=a.height,s=n.state.pixelDelta,l=n.limitCenterAtZoom(t),u=O(l[1],o),c=R(l[0],o),p=O(e[1],o),h=R(e[0],o);return[256*(p-u)+r/2+(s?s[0]:0),256*(h-c)+i/2+(s?s[1]:0)]},n.calculateZoomCenter=function(e,t,o,a){var r=n.props,i=r.width,s=r.height,l=n.latLngToPixel(t,e,o),u=n.latLngToPixel(t,e,a),c=n.pixelToLatLng([i/2+u[0]-l[0],s/2+u[1]-l[1]],e,a);return n.limitCenterAtZoom(c,a)},n.setRef=function(e){n._containerRef=e},n.syncToProps=(0,w.default)(n.syncToProps,k),n._mousePosition=null,n._dragStart=null,n._mouseDown=!1,n._moveEvents=[],n._lastClick=null,n._lastTap=null,n._touchStartPixel=null,n._isAnimating=!1,n._animationStart=null,n._animationEnd=null,n._centerTarget=null,n._zoomTarget=null,n._lastZoom=e.defaultZoom?e.defaultZoom:e.zoom,n._lastCenter=e.defaultCenter?e.defaultCenter:e.center,n._boundsSynced=!1,n.state={zoom:n._lastZoom,center:n._lastCenter,zoomDelta:0,pixelDelta:null,oldTiles:[],showMetaWarning:!1},n}return s(t,e),f(t,[{key:"componentDidMount",value:function(){this.props.mouseEvents&&this.bindMouseEvents(),this.props.touchEvents&&this.bindTouchEvents(),this.syncToProps()}},{key:"componentWillUnmount",value:function(){this.props.mouseEvents&&this.unbindMouseEvents(),this.props.touchEvents&&this.unbindTouchEvents()}},{key:"componentWillReceiveProps",value:function(e){if(e.mouseEvents!==this.props.mouseEvents&&(e.mouseEvents?this.bindMouseEvents():this.unbindMouseEvents()),e.touchEvents!==this.props.touchEvents&&(e.touchEvents?this.bindTouchEvents():this.unbindTouchEvents()),(e.center||e.zoom)&&(e.center&&(e.center[0]!==this.props.center[0]||e.center[1]!==this.props.center[1])||e.zoom!==this.props.zoom)){var t=e.center?e.center:this.state.center,n=e.zoom?e.zoom:this.state.zoom;(Math.abs(n-this.state.zoom)>.001||Math.abs(t[0]-this.state.center[0])>1e-4||Math.abs(t[1]-this.state.center[1])>1e-4)&&this.setCenterZoomTarget(t,n,!0)}}},{key:"coordsInside",value:function(e){var t=this.props,n=t.width,o=t.height;if(e[0]<0||e[1]<0||e[0]>=n||e[1]>=o)return!1;var a=this._containerRef,r=(0,M.default)(a),i=document.elementFromPoint(e[0]+r.x,e[1]+r.y);return a===i||a.contains(i)}},{key:"tileValues",value:function(e,t){var n=e.width,o=e.height,a=t.center,r=t.zoom,i=t.pixelDelta,s=t.zoomDelta,l=Math.round(r+(s||0)),u=Math.pow(2,r+(s||0)-l),c=n/u,p=o/u,h=O(a[1],l)-(i?i[0]/256/u:0),f=R(a[0],l)-(i?i[1]/256/u:0),d=c/2/256,m=p/2/256;return{tileMinX:Math.floor(h-d),tileMaxX:Math.floor(h+d),tileMinY:Math.floor(f-m),tileMaxY:Math.floor(f+m),tileCenterX:h,tileCenterY:f,roundedZoom:l,zoomDelta:s||0,scaleWidth:c,scaleHeight:p,scale:u}}},{key:"renderTiles",value:function(){for(var e=this,t=this.state.oldTiles,n=this.props.provider||l,o=this.tileValues(this.props,this.state),a=o.tileMinX,r=o.tileMaxX,i=o.tileMinY,s=o.tileMaxY,u=o.tileCenterX,c=o.tileCenterY,p=o.roundedZoom,h=o.scaleWidth,f=o.scaleHeight,m=o.scale,v=[],g=0;g<t.length;g++){var M=t[g],_=M.roundedZoom-p;if(!(Math.abs(_)>4||0===_))for(var y=1/Math.pow(2,_),b=256*-(a-M.tileMinX*y),w=256*-(i-M.tileMinY*y),x=Math.max(M.tileMinX,0),T=Math.max(M.tileMinY,0),S=Math.min(M.tileMaxX,Math.pow(2,M.roundedZoom)-1),E=Math.min(M.tileMaxY,Math.pow(2,M.roundedZoom)-1),C=x;C<=S;C++)for(var P=T;P<=E;P++)v.push({key:C+"-"+P+"-"+M.roundedZoom,url:n(C,P,M.roundedZoom),left:b+256*(C-M.tileMinX)*y,top:w+256*(P-M.tileMinY)*y,width:256*y,height:256*y,active:!1})}for(var k=Math.max(a,0),z=Math.max(i,0),O=Math.min(r,Math.pow(2,p)-1),R=Math.min(s,Math.pow(2,p)-1),A=k;A<=O;A++)for(var D=z;D<=R;D++)v.push({key:A+"-"+D+"-"+p,url:n(A,D,p),left:256*(A-a),top:256*(D-i),width:256,height:256,active:!0});return d.React.createElement("div",{style:{width:h,height:f,position:"absolute",top:0,left:0,overflow:"hidden",willChange:"transform",transform:"scale("+m+", "+m+")",transformOrigin:"top left"}},d.React.createElement("div",{style:{position:"absolute",width:256*(r-a+1),height:256*(s-i+1),willChange:"transform",transform:"translate("+-(256*(u-a)-h/2)+"px, "+-(256*(c-i)-f/2)+"px)"}},v.map(function(t){return d.React.createElement("img",{key:t.key,src:t.url,width:t.width,height:t.height,onLoad:function(){return e.imageLoaded(t.key)},style:{position:"absolute",left:t.left,top:t.top,willChange:"transform",transform:t.transform,transformOrigin:"top left",opacity:1}})})))}},{key:"renderOverlays",value:function(){var e=this,t=this.props,n=t.width,o=t.height,a=this.state.center,r={bounds:this.getBounds(),zoom:this.zoomPlusDelta(),center:a,width:n,height:o},i=void 0;return i=d.React.Children.map(this.props.children,function(t){var n=t.props,o=n.anchor,i=n.position,s=n.offset,l=e.latLngToPixel(o||i||a);return d.React.cloneElement(t,{left:l[0]-(s?s[0]:0),top:l[1]-(s?s[1]:0),latLngToPixel:e.latLngToPixel,pixelToLatLng:e.pixelToLatLng,mapState:r})}),d.React.createElement("div",{style:{position:"absolute",width:n,height:o,top:0,left:0}},i)}},{key:"renderAttribution",value:function(){var e=this.props,t=e.attribution,n=e.attributionPrefix;if(!1===t)return null;var o={color:"#0078A8",textDecoration:"none"};return d.React.createElement("div",{key:"attr",className:"pigeon-attribution",style:{position:"absolute",bottom:0,right:0,fontSize:"11px",padding:"2px 5px",background:"rgba(255, 255, 255, 0.7)",fontFamily:"'Helvetica Neue', Helvetica, Arial, sans-serif",color:"#333"}},!1===n?null:d.React.createElement("span",null,n||d.React.createElement("a",{href:"https://github.com/mariusandra/pigeon-maps",style:o},"Pigeon")," | "),t||d.React.createElement("span",null," © ",d.React.createElement("a",{href:"https://www.openstreetmap.org/copyright",style:o},"OpenStreetMap")," contributors"))}},{key:"renderMetaWarning",value:function(){var e=this.props,t=e.zoomOnMouseWheel,n=e.mouseWheelMetaText,o=e.width,a=e.height;if(!t&&n){var r={position:"absolute",top:0,left:0,width:o,height:a,overflow:"hidden",pointerEvents:"none",opacity:this.state.showMetaWarning?100:0,transition:"opacity 300ms",background:"rgba(0,0,0,0.5)",color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",fontSize:22,fontFamily:'"Arial", sans-serif',zIndex:this.props.metaWarningZIndex},i="undefined"!=typeof window&&window.navigator&&window.navigator.platform.toUpperCase().indexOf("MAC")>=0?"⌘":"⊞";return d.React.createElement("div",{style:r},n.replace("META",i))}return null}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height;return d.React.createElement("div",{style:{width:t,height:n,position:"relative",display:"inline-block",overflow:"hidden",background:"#dddddd"},ref:this.setRef,onWheel:this.handleWheel},this.renderTiles(),this.renderOverlays(),this.renderAttribution(),this.renderMetaWarning())}}]),t}(d.Component);j.propTypes={center:v.default.array,defaultCenter:v.default.array,zoom:v.default.number,defaultZoom:v.default.number,width:v.default.number,height:v.default.number,provider:v.default.func,children:v.default.node,animate:v.default.bool,animateMaxScreens:v.default.number,zoomOnMouseWheel:v.default.bool,mouseWheelMetaText:v.default.string,metaWarningZIndex:v.default.number,attribution:v.default.any,attributionPrefix:v.default.any,zoomSnap:v.default.bool,mouseEvents:v.default.bool,touchEvents:v.default.bool,onClick:v.default.func,onBoundsChanged:v.default.func,onAnimationStart:v.default.func,onAnimationStop:v.default.func},j.defaultProps={animate:!0,zoomOnMouseWheel:!0,mouseWheelMetaText:"Use META+wheel to zoom!",mouseEvents:!0,touchEvents:!0,metaWarningZIndex:100,animateMaxScreens:5},t.default=j},function(e,t,n){"use strict";t.React=n(0),t.ReactDOM=n(1),t.Component=t.React.Component},function(e,t,n){"use strict";function o(){}function a(){}var r=n(18);a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function o(e){var t=e.getBoundingClientRect();return{x:t.left,y:t.top}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(e,t){for(;e;){if(e.classList&&e.classList.contains(t))return!0;e=e.offsetParent}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(e,t){var n=void 0;return function(){for(var o=arguments.length,a=Array(o),r=0;r<o;r++)a[r]=arguments[r];var i=this;clearTimeout(n),n=setTimeout(function(){return e.apply(i,a)},t)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":s(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":s(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(23),c=n(4),p=o(c),h=n(24),f=o(h),d=n(25),m=o(d),v=n(26),g=o(v),M=n(27),_=o(M),y=n(28),b=o(y),w=n(29),x=o(w),T={left:15,top:31},S={width:"28px",height:"28px",background:"#fff",color:"cornflowerblue",textAlign:"center",font:"22px Arial, sans-serif",left:"20px",position:"absolute"},E={width:"28px",height:"28px",textAlign:"center",font:"22px Arial, sans-serif",position:"absolute",top:"-10px"},C={background:"white",color:"darkgreen",bottom:"15px",position:"absolute",borderRadius:"10px",textTransform:"lowercase",border:"3px solid aliceblue",paddingLeft:"10px",paddingRight:"10px"},P=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.eventParameters=function(e){return{event:e,anchor:n.props.anchor,payload:n.props.payload}},n.handleClick=function(e){n.props.onClick&&n.props.onClick(n.eventParameters(e))},n.handleContextMenu=function(e){n.props.onContextMenu&&n.props.onContextMenu(n.eventParameters(e))},n.handleMouseOver=function(e){n.props.onMouseOver&&n.props.onMouseOver(n.eventParameters(e)),n.setState({hover:!0})},n.handleMouseOut=function(e){n.props.onMouseOut&&n.props.onMouseOut(n.eventParameters(e)),n.setState({hover:!1})},n.state={hover:!1},n}return i(t,e),l(t,[{key:"isRetina",value:function(){return"undefined"!=typeof window&&window.devicePixelRatio>=2}},{key:"isHover",value:function(){return"boolean"==typeof this.props.hover?this.props.hover:this.state.hover}},{key:"image",value:function(){return"plot"==this.props.markerType?f.default:"finish"==this.props.markerType?m.default:this.isRetina()?this.isHover()?x.default:_.default:this.isHover()?b.default:g.default}},{key:"componentDidMount",value:function(){(this.isRetina()?[_.default,x.default]:[g.default,b.default]).forEach(function(e){(new window.Image).src=e})}},{key:"render",value:function(){var e=this.props,t=e.left,n=e.top,o=e.onClick,a={position:"absolute",transform:"translate("+(t-T.left)+"px, "+(n-T.top)+"px)",cursor:o?"pointer":"default"};return u.React.createElement("div",{style:a,className:"pigeon-click-block",onClick:this.handleClick,onContextMenu:this.handleContextMenu,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},u.React.createElement("div",null,this.state.hover&&u.React.createElement("div",{style:C}," ",this.props.hoverText," "),u.React.createElement("div",{style:S},this.props.label),u.React.createElement("img",{src:this.image(),style:E,alt:""})))}}]),t}(u.Component);P.propTypes={anchor:p.default.array.isRequired,payload:p.default.any,hover:p.default.bool,onClick:p.default.func,onContextMenu:p.default.func,onMouseOver:p.default.func,onMouseOut:p.default.func,left:p.default.number,top:p.default.number,latLngToPixel:p.default.func,pixelToLatLng:p.default.func,markerType:p.default.string,label:p.default.string},t.default=P},function(e,t,n){"use strict";t.React=n(0),t.ReactDOM=n(1),t.Component=t.React.Component},function(e,t,n){e.exports=n.p+"big-red-pin.png"},function(e,t,n){e.exports=n.p+"green-flag.png"},function(e,t,n){e.exports=n.p+"pin.png"},function(e,t,n){e.exports=n.p+"pin@2x.png"},function(e,t,n){e.exports=n.p+"pin-hover.png"},function(e,t,n){e.exports=n.p+"pin-hover@2x.png"},function(e,t,n){e.exports=n.p+"index.html"}],[11]);