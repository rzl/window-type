!function(n,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e=t();for(var r in e)("object"==typeof exports?exports:n)[r]=e[r]}}(window,(function(){return function(n){var t={};function e(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return n[r].call(c.exports,c,c.exports,e),c.l=!0,c.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var c in n)e.d(r,c,function(t){return n[t]}.bind(null,c));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(module,exports){eval("window.WindowType = function WindowType() {\r\n  this.delayTime = 100\r\n  this.laterTimeout = 0\r\n  this.defaultPatch = {\r\n    element: function(width) {\r\n      if (width >= 1920) {\r\n        return 'xl'\r\n      }\r\n      if (width >= 1200) {\r\n        return 'lg'\r\n      }\r\n      if (width >= 992) {\r\n        return 'md'\r\n      }\r\n      if (width >= 768) {\r\n        return 'sm'\r\n      }\r\n      return 'xs'\r\n    },\r\n    bootstrap: function(width) {\r\n      if (width > 1200) {\r\n        return 'xl'\r\n      }\r\n      if (width > 992) {\r\n        return 'lg'\r\n      }\r\n      if (width > 768) {\r\n        return 'md'\r\n      }\r\n      if (width > 576) {\r\n        return 'sm'\r\n      }\r\n      return 'xs'\r\n    }\r\n  }\r\n\r\n  this.listeners = {}\r\n\r\n  this._resizeCallback = function() {}\r\n\r\n  this.resizeCallback = () => {\r\n    clearTimeout(this.laterTimeout)\r\n    this.laterTimeout = setTimeout(() => {\r\n      var type = this._resizeCallback(window.innerWidth)\r\n      console.log(type)\r\n      this.emit(type, this)\r\n      if (type !== this.lastType) {\r\n        this.lastType = type\r\n        this.emit('change', type, this)\r\n      }\r\n    }, this.delayTime)\r\n  }\r\n  this.width = window.innerWidth\r\n\r\n  window.addEventListener('resize', this.resizeCallback)\r\n\r\n  this.patch = function(str, emit) {\r\n    if (typeof str === 'string') {\r\n      this._resizeCallback = this.defaultPatch[str]\r\n    } else if (typeof str === 'function') {\r\n      this._resizeCallback = str\r\n    }\r\n    if (emit) {\r\n      var type = this._resizeCallback(window.innerWidth)\r\n      this.emit(type)\r\n    }\r\n  }\r\n\r\n  this.patch('element')\r\n\r\n  this.lastType = this._resizeCallback(window.innerWidth)\r\n\r\n  this.on = function(event, cb) {\r\n    var listeners = this.listeners;\r\n    if (listeners[event] instanceof Array) {\r\n      if (listeners[event].indexOf(cb) === -1) {\r\n        listeners[event].push(cb);\r\n      }\r\n    } else {\r\n      listeners[event] = [].concat(cb);\r\n    }\r\n  }\r\n\r\n  this.emit = function(event) {\r\n    var args = Array.prototype.slice.call(arguments);\r\n    args.shift();\r\n    if (this.listeners[event]) {\r\n      this.listeners[event].forEach(cb => {\r\n        cb.apply(null, args);\r\n      });\r\n    }\r\n  }\r\n\r\n  this.once = function(event, listener) {\r\n    var that = this;\r\n\r\n    function fn() {\r\n      var args = Array.prototype.slice.call(arguments);\r\n      listener.apply(null, args);\r\n      that.removeListener(event, fn);\r\n    }\r\n\r\n    this.on(event, fn)\r\n  }\r\n\r\n  this.removeListener = function(event, listener) {\r\n    var listeners = this.listeners;\r\n    var arr = listeners[event] || [];\r\n    var i = arr.indexOf(listener);\r\n    if (i >= 0) {\r\n      listeners[event].splice(i, 1);\r\n    }\r\n  }\r\n\r\n  this.removeAllListener = function(event) {\r\n    this.listeners[event] = [];\r\n  }\r\n}\r\n\r\nWindowType.prototype.getType = function() {\r\n  return this._resizeCallback(window.innerWidth)\r\n}\r\n\r\nmodule.exports = WindowType//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWFpbi5qcz9mMTYxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuV2luZG93VHlwZSA9IGZ1bmN0aW9uIFdpbmRvd1R5cGUoKSB7XHJcbiAgdGhpcy5kZWxheVRpbWUgPSAxMDBcclxuICB0aGlzLmxhdGVyVGltZW91dCA9IDBcclxuICB0aGlzLmRlZmF1bHRQYXRjaCA9IHtcclxuICAgIGVsZW1lbnQ6IGZ1bmN0aW9uKHdpZHRoKSB7XHJcbiAgICAgIGlmICh3aWR0aCA+PSAxOTIwKSB7XHJcbiAgICAgICAgcmV0dXJuICd4bCdcclxuICAgICAgfVxyXG4gICAgICBpZiAod2lkdGggPj0gMTIwMCkge1xyXG4gICAgICAgIHJldHVybiAnbGcnXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHdpZHRoID49IDk5Mikge1xyXG4gICAgICAgIHJldHVybiAnbWQnXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHdpZHRoID49IDc2OCkge1xyXG4gICAgICAgIHJldHVybiAnc20nXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICd4cydcclxuICAgIH0sXHJcbiAgICBib290c3RyYXA6IGZ1bmN0aW9uKHdpZHRoKSB7XHJcbiAgICAgIGlmICh3aWR0aCA+IDEyMDApIHtcclxuICAgICAgICByZXR1cm4gJ3hsJ1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh3aWR0aCA+IDk5Mikge1xyXG4gICAgICAgIHJldHVybiAnbGcnXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHdpZHRoID4gNzY4KSB7XHJcbiAgICAgICAgcmV0dXJuICdtZCdcclxuICAgICAgfVxyXG4gICAgICBpZiAod2lkdGggPiA1NzYpIHtcclxuICAgICAgICByZXR1cm4gJ3NtJ1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAneHMnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0aGlzLmxpc3RlbmVycyA9IHt9XHJcblxyXG4gIHRoaXMuX3Jlc2l6ZUNhbGxiYWNrID0gZnVuY3Rpb24oKSB7fVxyXG5cclxuICB0aGlzLnJlc2l6ZUNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMubGF0ZXJUaW1lb3V0KVxyXG4gICAgdGhpcy5sYXRlclRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdmFyIHR5cGUgPSB0aGlzLl9yZXNpemVDYWxsYmFjayh3aW5kb3cuaW5uZXJXaWR0aClcclxuICAgICAgY29uc29sZS5sb2codHlwZSlcclxuICAgICAgdGhpcy5lbWl0KHR5cGUsIHRoaXMpXHJcbiAgICAgIGlmICh0eXBlICE9PSB0aGlzLmxhc3RUeXBlKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0VHlwZSA9IHR5cGVcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHR5cGUsIHRoaXMpXHJcbiAgICAgIH1cclxuICAgIH0sIHRoaXMuZGVsYXlUaW1lKVxyXG4gIH1cclxuICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplQ2FsbGJhY2spXHJcblxyXG4gIHRoaXMucGF0Y2ggPSBmdW5jdGlvbihzdHIsIGVtaXQpIHtcclxuICAgIGlmICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLl9yZXNpemVDYWxsYmFjayA9IHRoaXMuZGVmYXVsdFBhdGNoW3N0cl1cclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN0ciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLl9yZXNpemVDYWxsYmFjayA9IHN0clxyXG4gICAgfVxyXG4gICAgaWYgKGVtaXQpIHtcclxuICAgICAgdmFyIHR5cGUgPSB0aGlzLl9yZXNpemVDYWxsYmFjayh3aW5kb3cuaW5uZXJXaWR0aClcclxuICAgICAgdGhpcy5lbWl0KHR5cGUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0aGlzLnBhdGNoKCdlbGVtZW50JylcclxuXHJcbiAgdGhpcy5sYXN0VHlwZSA9IHRoaXMuX3Jlc2l6ZUNhbGxiYWNrKHdpbmRvdy5pbm5lcldpZHRoKVxyXG5cclxuICB0aGlzLm9uID0gZnVuY3Rpb24oZXZlbnQsIGNiKSB7XHJcbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnM7XHJcbiAgICBpZiAobGlzdGVuZXJzW2V2ZW50XSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIGlmIChsaXN0ZW5lcnNbZXZlbnRdLmluZGV4T2YoY2IpID09PSAtMSkge1xyXG4gICAgICAgIGxpc3RlbmVyc1tldmVudF0ucHVzaChjYik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxpc3RlbmVyc1tldmVudF0gPSBbXS5jb25jYXQoY2IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGhpcy5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuICAgIGFyZ3Muc2hpZnQoKTtcclxuICAgIGlmICh0aGlzLmxpc3RlbmVyc1tldmVudF0pIHtcclxuICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goY2IgPT4ge1xyXG4gICAgICAgIGNiLmFwcGx5KG51bGwsIGFyZ3MpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRoaXMub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBsaXN0ZW5lcikge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIGZ1bmN0aW9uIGZuKCkge1xyXG4gICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcbiAgICAgIGxpc3RlbmVyLmFwcGx5KG51bGwsIGFyZ3MpO1xyXG4gICAgICB0aGF0LnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmbik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbihldmVudCwgZm4pXHJcbiAgfVxyXG5cclxuICB0aGlzLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGxpc3RlbmVyKSB7XHJcbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnM7XHJcbiAgICB2YXIgYXJyID0gbGlzdGVuZXJzW2V2ZW50XSB8fCBbXTtcclxuICAgIHZhciBpID0gYXJyLmluZGV4T2YobGlzdGVuZXIpO1xyXG4gICAgaWYgKGkgPj0gMCkge1xyXG4gICAgICBsaXN0ZW5lcnNbZXZlbnRdLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdID0gW107XHJcbiAgfVxyXG59XHJcblxyXG5XaW5kb3dUeXBlLnByb3RvdHlwZS5nZXRUeXBlID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHRoaXMuX3Jlc2l6ZUNhbGxiYWNrKHdpbmRvdy5pbm5lcldpZHRoKVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFdpbmRvd1R5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}])}));