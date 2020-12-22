window.WindowType = function WindowType() {
  this.delayTime = 100
  this.laterTimeout = 0
  this.defaultPatch = {
    element: function(width) {
      if (width >= 1920) {
        return 'xl'
      }
      if (width >= 1200) {
        return 'lg'
      }
      if (width >= 992) {
        return 'md'
      }
      if (width >= 768) {
        return 'sm'
      }
      return 'xs'
    },
    bootstrap: function(width) {
      if (width > 1200) {
        return 'xl'
      }
      if (width > 992) {
        return 'lg'
      }
      if (width > 768) {
        return 'md'
      }
      if (width > 576) {
        return 'sm'
      }
      return 'xs'
    }
  }

  this.listeners = {}

  this._resizeCallback = function() {}

  this.resizeCallback = () => {
    clearTimeout(this.laterTimeout)
    this.laterTimeout = setTimeout(() => {
      var type = this._resizeCallback(window.innerWidth)
      console.log(type)
      this.emit(type, this)
      if (type !== this.lastType) {
        this.lastType = type
        this.emit('change', type, this)
      }
    }, this.delayTime)
  }
  this.width = window.innerWidth

  window.addEventListener('resize', this.resizeCallback)

  this.patch = function(str, emit) {
    if (typeof str === 'string') {
      this._resizeCallback = this.defaultPatch[str]
    } else if (typeof str === 'function') {
      this._resizeCallback = str
    }
    if (emit) {
      var type = this._resizeCallback(window.innerWidth)
      this.emit(type)
    }
  }

  this.patch('element')

  this.lastType = this._resizeCallback(window.innerWidth)

  this.on = function(event, cb) {
    var listeners = this.listeners;
    if (listeners[event] instanceof Array) {
      if (listeners[event].indexOf(cb) === -1) {
        listeners[event].push(cb);
      }
    } else {
      listeners[event] = [].concat(cb);
    }
  }

  this.emit = function(event) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    if (this.listeners[event]) {
      this.listeners[event].forEach(cb => {
        cb.apply(null, args);
      });
    }
  }

  this.once = function(event, listener) {
    var that = this;

    function fn() {
      var args = Array.prototype.slice.call(arguments);
      listener.apply(null, args);
      that.removeListener(event, fn);
    }

    this.on(event, fn)
  }

  this.removeListener = function(event, listener) {
    var listeners = this.listeners;
    var arr = listeners[event] || [];
    var i = arr.indexOf(listener);
    if (i >= 0) {
      listeners[event].splice(i, 1);
    }
  }

  this.removeAllListener = function(event) {
    this.listeners[event] = [];
  }
}

WindowType.prototype.getType = function() {
  return this._resizeCallback(window.innerWidth)
}

module.exports = WindowType