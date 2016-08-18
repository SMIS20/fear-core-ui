!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return D(e.substr(6));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic("2", ["3", "4"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('3'),
      defined = $__require('4');
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  return module.exports;
});

$__System.registerDynamic("5", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = true;
  return module.exports;
});

$__System.registerDynamic("6", ["7"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('7');
  return module.exports;
});

$__System.registerDynamic("8", ["9", "4"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var IObject = $__require('9'),
      defined = $__require('4');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("a", ["3"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('3'),
      max = Math.max,
      min = Math.min;
  module.exports = function(index, length) {
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  };
  return module.exports;
});

$__System.registerDynamic("b", ["8", "c", "a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toIObject = $__require('8'),
      toLength = $__require('c'),
      toIndex = $__require('a');
  module.exports = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
      var O = toIObject($this),
          length = toLength(O.length),
          index = toIndex(fromIndex, length),
          value;
      if (IS_INCLUDES && el != el)
        while (length > index) {
          value = O[index++];
          if (value != value)
            return true;
        }
      else
        for (; length > index; index++)
          if (IS_INCLUDES || index in O) {
            if (O[index] === el)
              return IS_INCLUDES || index || 0;
          }
      return !IS_INCLUDES && -1;
    };
  };
  return module.exports;
});

$__System.registerDynamic("d", ["e", "8", "b", "f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var has = $__require('e'),
      toIObject = $__require('8'),
      arrayIndexOf = $__require('b')(false),
      IE_PROTO = $__require('f')('IE_PROTO');
  module.exports = function(object, names) {
    var O = toIObject(object),
        i = 0,
        result = [],
        key;
    for (key in O)
      if (key != IE_PROTO)
        has(O, key) && result.push(key);
    while (names.length > i)
      if (has(O, key = names[i++])) {
        ~arrayIndexOf(result, key) || result.push(key);
      }
    return result;
  };
  return module.exports;
});

$__System.registerDynamic("10", ["d", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $keys = $__require('d'),
      enumBugKeys = $__require('11');
  module.exports = Object.keys || function keys(O) {
    return $keys(O, enumBugKeys);
  };
  return module.exports;
});

$__System.registerDynamic("12", ["13", "14", "10", "15"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var dP = $__require('13'),
      anObject = $__require('14'),
      getKeys = $__require('10');
  module.exports = $__require('15') ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = getKeys(Properties),
        length = keys.length,
        i = 0,
        P;
    while (length > i)
      dP.f(O, P = keys[i++], Properties[P]);
    return O;
  };
  return module.exports;
});

$__System.registerDynamic("11", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf').split(',');
  return module.exports;
});

$__System.registerDynamic("16", ["17"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('17').document && document.documentElement;
  return module.exports;
});

$__System.registerDynamic("18", ["14", "12", "11", "f", "19", "16"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('14'),
      dPs = $__require('12'),
      enumBugKeys = $__require('11'),
      IE_PROTO = $__require('f')('IE_PROTO'),
      Empty = function() {},
      PROTOTYPE = 'prototype';
  var createDict = function() {
    var iframe = $__require('19')('iframe'),
        i = enumBugKeys.length,
        lt = '<',
        gt = '>',
        iframeDocument;
    iframe.style.display = 'none';
    $__require('16').appendChild(iframe);
    iframe.src = 'javascript:';
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--)
      delete createDict[PROTOTYPE][enumBugKeys[i]];
    return createDict();
  };
  module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE] = anObject(O);
      result = new Empty;
      Empty[PROTOTYPE] = null;
      result[IE_PROTO] = O;
    } else
      result = createDict();
    return Properties === undefined ? result : dPs(result, Properties);
  };
  return module.exports;
});

$__System.registerDynamic("1a", ["18", "1b", "1c", "7", "1d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var create = $__require('18'),
      descriptor = $__require('1b'),
      setToStringTag = $__require('1c'),
      IteratorPrototype = {};
  $__require('7')(IteratorPrototype, $__require('1d')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});

$__System.registerDynamic("1c", ["13", "e", "1d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var def = $__require('13').f,
      has = $__require('e'),
      TAG = $__require('1d')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  return module.exports;
});

$__System.registerDynamic("e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});

$__System.registerDynamic("f", ["1e", "1f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var shared = $__require('1e')('keys'),
      uid = $__require('1f');
  module.exports = function(key) {
    return shared[key] || (shared[key] = uid(key));
  };
  return module.exports;
});

$__System.registerDynamic("20", ["e", "21", "f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var has = $__require('e'),
      toObject = $__require('21'),
      IE_PROTO = $__require('f')('IE_PROTO'),
      ObjectProto = Object.prototype;
  module.exports = Object.getPrototypeOf || function(O) {
    O = toObject(O);
    if (has(O, IE_PROTO))
      return O[IE_PROTO];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }
    return O instanceof Object ? ObjectProto : null;
  };
  return module.exports;
});

$__System.registerDynamic("22", ["5", "23", "6", "7", "e", "24", "1a", "1c", "20", "1d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var LIBRARY = $__require('5'),
      $export = $__require('23'),
      redefine = $__require('6'),
      hide = $__require('7'),
      has = $__require('e'),
      Iterators = $__require('24'),
      $iterCreate = $__require('1a'),
      setToStringTag = $__require('1c'),
      getPrototypeOf = $__require('20'),
      ITERATOR = $__require('1d')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto)
        return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
        $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
        methods,
        key,
        IteratorPrototype;
    if ($anyNative) {
      IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
      if (IteratorPrototype !== Object.prototype) {
        setToStringTag(IteratorPrototype, TAG, true);
        if (!LIBRARY && !has(IteratorPrototype, ITERATOR))
          hide(IteratorPrototype, ITERATOR, returnThis);
      }
    }
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() {
        return $native.call(this);
      };
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED)
        for (key in methods) {
          if (!(key in proto))
            redefine(proto, key, methods[key]);
        }
      else
        $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  return module.exports;
});

$__System.registerDynamic("25", ["2", "22"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $at = $__require('2')(true);
  $__require('22')(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  return module.exports;
});

$__System.registerDynamic("26", ["14"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('14');
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  return module.exports;
});

$__System.registerDynamic("27", ["24", "1d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Iterators = $__require('24'),
      ITERATOR = $__require('1d')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  return module.exports;
});

$__System.registerDynamic("28", ["13", "1b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $defineProperty = $__require('13'),
      createDesc = $__require('1b');
  module.exports = function(object, index, value) {
    if (index in object)
      $defineProperty.f(object, index, createDesc(0, value));
    else
      object[index] = value;
  };
  return module.exports;
});

$__System.registerDynamic("29", ["2a", "1d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('2a'),
      TAG = $__require('1d')('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  var tryGet = function(it, key) {
    try {
      return it[key];
    } catch (e) {}
  };
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = tryGet(O = Object(it), TAG)) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  return module.exports;
});

$__System.registerDynamic("24", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {};
  return module.exports;
});

$__System.registerDynamic("2b", ["29", "1d", "24", "2c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var classof = $__require('29'),
      ITERATOR = $__require('1d')('iterator'),
      Iterators = $__require('24');
  module.exports = $__require('2c').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  return module.exports;
});

$__System.registerDynamic("2d", ["1d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ITERATOR = $__require('1d')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {}
  module.exports = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function() {
        return {done: safe = true};
      };
      arr[ITERATOR] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  return module.exports;
});

$__System.registerDynamic("2e", ["2f", "23", "21", "26", "27", "c", "28", "2b", "2d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ctx = $__require('2f'),
      $export = $__require('23'),
      toObject = $__require('21'),
      call = $__require('26'),
      isArrayIter = $__require('27'),
      toLength = $__require('c'),
      createProperty = $__require('28'),
      getIterFn = $__require('2b');
  $export($export.S + $export.F * !$__require('2d')(function(iter) {
    Array.from(iter);
  }), 'Array', {from: function from(arrayLike) {
      var O = toObject(arrayLike),
          C = typeof this == 'function' ? this : Array,
          aLen = arguments.length,
          mapfn = aLen > 1 ? arguments[1] : undefined,
          mapping = mapfn !== undefined,
          index = 0,
          iterFn = getIterFn(O),
          length,
          result,
          step,
          iterator;
      if (mapping)
        mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++) {
          createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = toLength(O.length);
        for (result = new C(length); length > index; index++) {
          createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }
      result.length = index;
      return result;
    }});
  return module.exports;
});

$__System.registerDynamic("30", ["25", "2e", "2c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('25');
  $__require('2e');
  module.exports = $__require('2c').Array.from;
  return module.exports;
});

$__System.registerDynamic("31", ["30"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('30'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("14", ["32"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('32');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("19", ["32", "17"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('32'),
      document = $__require('17').document,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  return module.exports;
});

$__System.registerDynamic("33", ["15", "34", "19"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = !$__require('15') && !$__require('34')(function() {
    return Object.defineProperty($__require('19')('div'), 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  return module.exports;
});

$__System.registerDynamic("35", ["32"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('32');
  module.exports = function(it, S) {
    if (!isObject(it))
      return it;
    var fn,
        val;
    if (S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it)))
      return val;
    if (typeof(fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))
      return val;
    if (!S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it)))
      return val;
    throw TypeError("Can't convert object to primitive value");
  };
  return module.exports;
});

$__System.registerDynamic("13", ["14", "33", "35", "15"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('14'),
      IE8_DOM_DEFINE = $__require('33'),
      toPrimitive = $__require('35'),
      dP = Object.defineProperty;
  exports.f = $__require('15') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE)
      try {
        return dP(O, P, Attributes);
      } catch (e) {}
    if ('get' in Attributes || 'set' in Attributes)
      throw TypeError('Accessors not supported!');
    if ('value' in Attributes)
      O[P] = Attributes.value;
    return O;
  };
  return module.exports;
});

$__System.registerDynamic("1b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});

$__System.registerDynamic("15", ["34"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = !$__require('34')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  return module.exports;
});

$__System.registerDynamic("7", ["13", "1b", "15"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var dP = $__require('13'),
      createDesc = $__require('1b');
  module.exports = $__require('15') ? function(object, key, value) {
    return dP.f(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});

$__System.registerDynamic("23", ["17", "2c", "2f", "7"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('17'),
      core = $__require('2c'),
      ctx = $__require('2f'),
      hide = $__require('7'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        expProto = exports[PROTOTYPE],
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && target[key] !== undefined;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(a, b, c) {
          if (this instanceof C) {
            switch (arguments.length) {
              case 0:
                return new C;
              case 1:
                return new C(a);
              case 2:
                return new C(a, b);
            }
            return new C(a, b, c);
          }
          return C.apply(this, arguments);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO) {
        (exports.virtual || (exports.virtual = {}))[key] = out;
        if (type & $export.R && expProto && !expProto[key])
          hide(expProto, key, out);
      }
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  $export.U = 64;
  $export.R = 128;
  module.exports = $export;
  return module.exports;
});

$__System.registerDynamic("36", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("2f", ["36"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('36');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});

$__System.registerDynamic("9", ["2a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('2a');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});

$__System.registerDynamic("4", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("21", ["4"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var defined = $__require('4');
  module.exports = function(it) {
    return Object(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("3", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});

$__System.registerDynamic("c", ["3"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('3'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  return module.exports;
});

$__System.registerDynamic("32", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});

$__System.registerDynamic("2a", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});

$__System.registerDynamic("37", ["2a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('2a');
  module.exports = Array.isArray || function isArray(arg) {
    return cof(arg) == 'Array';
  };
  return module.exports;
});

$__System.registerDynamic("1e", ["17"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('17'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  return module.exports;
});

$__System.registerDynamic("1f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});

$__System.registerDynamic("17", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

$__System.registerDynamic("1d", ["1e", "1f", "17"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var store = $__require('1e')('wks'),
      uid = $__require('1f'),
      Symbol = $__require('17').Symbol,
      USE_SYMBOL = typeof Symbol == 'function';
  var $exports = module.exports = function(name) {
    return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
  };
  $exports.store = store;
  return module.exports;
});

$__System.registerDynamic("38", ["32", "37", "1d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('32'),
      isArray = $__require('37'),
      SPECIES = $__require('1d')('species');
  module.exports = function(original) {
    var C;
    if (isArray(original)) {
      C = original.constructor;
      if (typeof C == 'function' && (C === Array || isArray(C.prototype)))
        C = undefined;
      if (isObject(C)) {
        C = C[SPECIES];
        if (C === null)
          C = undefined;
      }
    }
    return C === undefined ? Array : C;
  };
  return module.exports;
});

$__System.registerDynamic("39", ["38"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var speciesConstructor = $__require('38');
  module.exports = function(original, length) {
    return new (speciesConstructor(original))(length);
  };
  return module.exports;
});

$__System.registerDynamic("3a", ["2f", "9", "21", "c", "39"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ctx = $__require('2f'),
      IObject = $__require('9'),
      toObject = $__require('21'),
      toLength = $__require('c'),
      asc = $__require('39');
  module.exports = function(TYPE, $create) {
    var IS_MAP = TYPE == 1,
        IS_FILTER = TYPE == 2,
        IS_SOME = TYPE == 3,
        IS_EVERY = TYPE == 4,
        IS_FIND_INDEX = TYPE == 6,
        NO_HOLES = TYPE == 5 || IS_FIND_INDEX,
        create = $create || asc;
    return function($this, callbackfn, that) {
      var O = toObject($this),
          self = IObject(O),
          f = ctx(callbackfn, that, 3),
          length = toLength(self.length),
          index = 0,
          result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined,
          val,
          res;
      for (; length > index; index++)
        if (NO_HOLES || index in self) {
          val = self[index];
          res = f(val, index, O);
          if (TYPE) {
            if (IS_MAP)
              result[index] = res;
            else if (res)
              switch (TYPE) {
                case 3:
                  return true;
                case 5:
                  return val;
                case 6:
                  return index;
                case 2:
                  result.push(val);
              }
            else if (IS_EVERY)
              return false;
          }
        }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };
  return module.exports;
});

$__System.registerDynamic("34", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});

$__System.registerDynamic("3b", ["34"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var fails = $__require('34');
  module.exports = function(method, arg) {
    return !!method && fails(function() {
      arg ? method.call(null, function() {}, 1) : method.call(null);
    });
  };
  return module.exports;
});

$__System.registerDynamic("3c", ["23", "3a", "3b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('23'),
      $forEach = $__require('3a')(0),
      STRICT = $__require('3b')([].forEach, true);
  $export($export.P + $export.F * !STRICT, 'Array', {forEach: function forEach(callbackfn) {
      return $forEach(this, callbackfn, arguments[1]);
    }});
  return module.exports;
});

$__System.registerDynamic("2c", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '2.4.0'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

$__System.registerDynamic("3d", ["3c", "2c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('3c');
  module.exports = $__require('2c').Array.forEach;
  return module.exports;
});

$__System.registerDynamic("3e", ["3d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('3d'),
    __esModule: true
  };
  return module.exports;
});

$__System.register('3f', ['31', '3e'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_) {}, function (_e) {}],
    execute: function () {}
  };
});
$__System.register('40', ['41', '42', '43', '44'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _possibleConstructorReturn, _inherits, UI, Desktop;

    return {
        setters: [function (_) {
            _classCallCheck = _.default;
        }, function (_2) {
            _possibleConstructorReturn = _2.default;
        }, function (_3) {
            _inherits = _3.default;
        }, function (_4) {
            UI = _4.default;
        }],
        execute: function () {
            Desktop = function (_UI) {
                _inherits(Desktop, _UI);

                /**
                 * create default global navigation
                 * @param type {String}
                 * @extends UI
                 * @returns {void}
                 */

                function Desktop(type) {
                    _classCallCheck(this, Desktop);

                    var elements = {
                        link: '.nav li > a'
                    };

                    return _possibleConstructorReturn(this, Object.getPrototypeOf(Desktop).call(this, type, elements));
                }

                return Desktop;
            }(UI);

            _export('default', Desktop);
        }
    };
});
$__System.register("42", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      });
    }
  };
});
$__System.register("43", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      });
    }
  };
});
$__System.register('45', ['41', '46'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _createClass, Analytics;

    return {
        setters: [function (_) {
            _classCallCheck = _.default;
        }, function (_2) {
            _createClass = _2.default;
        }],
        execute: function () {
            Analytics = function () {

                /**
                 * Attach analytics events
                 */

                function Analytics() {
                    _classCallCheck(this, Analytics);
                }

                /**
                 * @description ensure that element(s) passed are in array format of iteration in bind method
                 * @param el
                 * @returns {Array}
                 */

                _createClass(Analytics, null, [{
                    key: 'normaliseElements',
                    value: function normaliseElements(el) {

                        if (el.length === 0 || !Array.isArray(el) && typeof el !== 'object') {
                            return [];
                        }

                        if (el.length) {
                            el = Array.from(el);
                        } else {
                            el = [el];
                        }

                        return el;
                    }

                    /**
                     * @description add event listeners and associated data for event
                     * @param el {Object}
                     * @param actions {Object}
                     */

                }, {
                    key: 'bind',
                    value: function bind(el, actions) {

                        Analytics.normaliseElements(el).forEach(function (elItem) {

                            if (typeof elItem !== 'object') {
                                throw new Error('element is not an object');
                            }

                            if (!elItem.nodeName) {
                                throw new Error('element is not a DOM object');
                            }

                            actions.forEach(function (action) {

                                var data = [[elItem]];

                                elItem.addEventListener(action.event, Analytics.send(action.functionName, data));
                            });
                        });
                    }

                    /**
                     * @description event listener function
                     * @param functionName {String}
                     * @param data {Object}
                     * @returns {Function}
                     */

                }, {
                    key: 'send',
                    value: function send(functionName, data) {
                        return function () {
                            if (typeof window[functionName] === 'function') {
                                try {
                                    window[functionName].apply(null, data);
                                } catch (e) {
                                    throw new Error(e.stack);
                                }
                            }
                        };
                    }
                }]);

                return Analytics;
            }();

            _export('default', Analytics);
        }
    };
});
$__System.register('44', ['41', '45', '46'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _createClass, eventBinder, UI;

    return {
        setters: [function (_) {
            _classCallCheck = _.default;
        }, function (_2) {
            eventBinder = _2.default;
        }, function (_3) {
            _createClass = _3.default;
        }],
        execute: function () {
            UI = function () {

                /**
                 * @description create a UI element
                 * @param type {String} type of UI element e.g default/mobile
                 * @param elements {Object} selectors that are exposed explicitly to be able to attach events to
                 */

                function UI(type, elements) {
                    _classCallCheck(this, UI);

                    this.type = type;

                    this.eventBinder = eventBinder;

                    this.elements = elements || {};

                    this.events = {};
                }

                /**
                 * @description analytics events for UI
                 * @param events {Object} object listing data objects to be passed with events from element
                 * @param documentReference {Object}
                 * @returns {void}
                 */

                _createClass(UI, [{
                    key: 'analytics',
                    value: function analytics(events) {
                        var documentReference = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

                        this.document = documentReference;

                        this.events.analytics = events;

                        this.attachEvents();
                    }

                    /**
                     * @returns {void}
                     */

                }, {
                    key: 'attachEvents',
                    value: function attachEvents() {
                        var _this = this;

                        Object.keys(this.elements).forEach(function (el) {
                            if (_this.events.analytics[el]) {
                                _this.eventBinder.bind(_this.document.querySelectorAll(_this.elements[el]), _this.events.analytics[el]);
                            }
                        });
                    }

                    /**
                     * @property type {String}
                     */

                }, {
                    key: 'type',
                    set: function set(type) {
                        if (typeof type === 'string') {
                            this._type = type;
                        }
                    },
                    get: function get() {
                        return this._type;
                    }

                    /**
                     * @property elements {Object}
                     */

                }, {
                    key: 'elements',
                    set: function set(elements) {
                        if (typeof elements === 'object') {
                            this._elements = elements;
                        }
                    },
                    get: function get() {
                        return this._elements;
                    }

                    /**
                     * @property events {Object}
                     */

                }, {
                    key: 'events',
                    set: function set(events) {
                        if (typeof events === 'object') {
                            this._events = events;
                        }
                    },
                    get: function get() {
                        return this._events;
                    }
                }]);

                return UI;
            }();

            _export('default', UI);
        }
    };
});
$__System.register("47", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function () {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;

          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);

              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }

          return _arr;
        }

        return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }());
    }
  };
});
$__System.register("41", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      });
    }
  };
});
$__System.register("46", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }());
    }
  };
});
$__System.register('48', ['41', '46', '47'], function (_export, _context) {
    "use strict";

    var _slicedToArray, _classCallCheck, _createClass, Cookie;

    return {
        setters: [function (_) {
            _classCallCheck = _.default;
        }, function (_2) {
            _createClass = _2.default;
        }, function (_3) {
            _slicedToArray = _3.default;
        }],
        execute: function () {
            Cookie = function () {
                function Cookie() {
                    _classCallCheck(this, Cookie);
                }

                _createClass(Cookie, null, [{
                    key: 'getValue',
                    value: function getValue(key) {
                        var documentReference = arguments.length <= 1 || arguments[1] === undefined ? window.document : arguments[1];

                        var result = null;

                        documentReference.cookie.split('; ').forEach(function (cookie) {
                            var _cookie$split = cookie.split('=');

                            var _cookie$split2 = _slicedToArray(_cookie$split, 2);

                            var name = _cookie$split2[0];
                            var value = _cookie$split2[1];

                            if (name === key) {
                                result = decodeURIComponent(value);
                                return;
                            }
                        });

                        return result;
                    }
                }]);

                return Cookie;
            }();

            _export('default', Cookie);
        }
    };
});
$__System.register('49', ['41', '46', '48'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _createClass, cookie, MS_USER_COOKIE, User;

    return {
        setters: [function (_) {
            _classCallCheck = _.default;
        }, function (_2) {
            _createClass = _2.default;
        }, function (_3) {
            cookie = _3.default;
        }],
        execute: function () {
            MS_USER_COOKIE = 'MS_USER_COOKIE';

            User = function () {
                function User() {
                    _classCallCheck(this, User);
                }

                _createClass(User, null, [{
                    key: 'isLoggedIn',
                    value: function isLoggedIn() {
                        var cookieReference = arguments.length <= 0 || arguments[0] === undefined ? cookie : arguments[0];

                        return cookieReference.getValue(MS_USER_COOKIE) !== null;
                    }
                }, {
                    key: 'processLoggedInElements',
                    value: function processLoggedInElements() {
                        var documentReference = arguments.length <= 0 || arguments[0] === undefined ? document : arguments[0];

                        var accountLoggedInShowElements = documentReference.getElementsByClassName('account__logged-in--show');
                        var accountLoggedInHideElements = documentReference.getElementsByClassName('account__logged-in--hide');

                        Array.from(accountLoggedInShowElements).forEach(function (el) {
                            User._displayElement(el, User.isLoggedIn());
                        });

                        Array.from(accountLoggedInHideElements).forEach(function (el) {
                            User._displayElement(el, !User.isLoggedIn());
                        });
                    }
                }, {
                    key: '_displayElement',
                    value: function _displayElement(el, show) {
                        el.style.display = show ? '' : 'none';
                    }
                }]);

                return User;
            }();

            _export('default', User);
        }
    };
});
$__System.register('4a', ['41', '42', '43', '44', '46', '49'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _createClass, _possibleConstructorReturn, _inherits, UI, user, SCROLL_INTO_VIEW_DELAY, Mobile;

    return {
        setters: [function (_) {
            _classCallCheck = _.default;
        }, function (_2) {
            _possibleConstructorReturn = _2.default;
        }, function (_3) {
            _inherits = _3.default;
        }, function (_4) {
            UI = _4.default;
        }, function (_5) {
            _createClass = _5.default;
        }, function (_6) {
            user = _6.default;
        }],
        execute: function () {
            SCROLL_INTO_VIEW_DELAY = 160;

            Mobile = function (_UI) {
                _inherits(Mobile, _UI);

                /**
                 * global navigation mobile UI enhancements
                 * @param type {String}
                 * @see UI
                 * @param windowReference {Object} reference to browser window object
                 * @returns {void}
                 */

                function Mobile(type) {
                    var windowReference = arguments.length <= 1 || arguments[1] === undefined ? window : arguments[1];

                    _classCallCheck(this, Mobile);

                    var elements = {
                        link: '.nav li > a.touch'
                    };

                    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Mobile).call(this, type, elements));

                    _this.window = windowReference;
                    _this.lastTimeout = null;

                    _this.bind();
                    return _this;
                }

                /**
                 * bind
                 * @returns {void}
                 */

                _createClass(Mobile, [{
                    key: 'bind',
                    value: function bind() {
                        var _this2 = this;

                        if (this.window.document.getElementsByClassName) {
                            var checkboxes = this.window.document.getElementsByClassName('menu__mobile-level3');

                            for (var iCheckbox = 0; iCheckbox < checkboxes.length; iCheckbox++) {
                                checkboxes[iCheckbox].onchange = function (e) {
                                    _this2.level3Change(e);
                                };
                            }

                            var radioButtons = this.window.document.getElementsByName('menu');

                            for (var iRadio = 0; iRadio < radioButtons.length; iRadio++) {
                                radioButtons[iRadio].onchange = function (e) {
                                    _this2.menuChange(e);
                                };
                            }
                        }

                        user.processLoggedInElements();
                    }

                    /**
                     * isElementVisible
                     * @param el {Object}
                     * @returns {Boolean}
                     */

                }, {
                    key: 'isElementVisible',
                    value: function isElementVisible(el) {

                        var rect = el.getBoundingClientRect();

                        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (this.window.innerHeight || this.window.document.documentElement.clientHeight) && rect.right <= (this.window.innerWidth || this.window.document.documentElement.clientWidth);
                    }

                    /**
                     * scrollCurrentLevel3IntoView
                     * @param level3Id {String}
                     * @returns {void}
                     */

                }, {
                    key: 'scrollCurrentLevel3IntoView',
                    value: function scrollCurrentLevel3IntoView(level3Id) {
                        var _this3 = this;

                        this.window.clearTimeout(this.lastTimeout);

                        this.lastTimeout = this.window.setTimeout(function () {
                            var label = _this3.window.document.querySelector('[for=' + level3Id + ']');

                            if (!_this3.isElementVisible(label)) {
                                label.scrollIntoView();
                            }
                        }, SCROLL_INTO_VIEW_DELAY);
                    }

                    /**
                     * deSelectLevel3Checkboxes
                     * @param selectedCheckboxId {String}
                     * @returns {void}
                     */

                }, {
                    key: 'deSelectLevel3Checkboxes',
                    value: function deSelectLevel3Checkboxes(selectedCheckboxId) {
                        var checkboxes = this.window.document.querySelectorAll('.menu__mobile-level3:checked:not(#' + selectedCheckboxId + ')');

                        for (var i = 0; i < checkboxes.length; i++) {
                            checkboxes[i].checked = false;
                        }
                    }

                    /**
                     * level3Change
                     * @param e {Object}
                     * @returns {void}
                     */

                }, {
                    key: 'level3Change',
                    value: function level3Change(e) {
                        this.deSelectLevel3Checkboxes(e.target.id);
                        this.scrollCurrentLevel3IntoView(e.target.id);
                    }

                    /**
                     * menuChange
                     * @param e {Object}
                     * @returns {void}
                     */

                }, {
                    key: 'menuChange',
                    value: function menuChange(e) {
                        this.deSelectLevel3Checkboxes(e.target.id);
                    }
                }]);

                return Mobile;
            }(UI);

            _export('default', Mobile);
        }
    };
});
$__System.register('1', ['40', '41', '46', '3f', '4a'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _createClass, Desktop, Mobile, types, Navigation, __useDefault;

    return {
        setters: [function (_) {
            Desktop = _.default;
        }, function (_2) {
            _classCallCheck = _2.default;
        }, function (_3) {
            _createClass = _3.default;
        }, function (_f) {}, function (_a) {
            Mobile = _a.default;
        }],
        execute: function () {
            types = {
                desktop: Desktop,
                mobile: Mobile
            };

            Navigation = function () {

                /**
                 * @description create global navigation UI template
                 * @param events
                 * @returns {void}
                 */

                function Navigation(events) {
                    _classCallCheck(this, Navigation);

                    Navigation.initialiseType('desktop', events);

                    //boolean used in check so events are not rebound multiple times
                    //N.B temporary measure until events approach decided
                    var resizeEventsBound = false;

                    function loadMobileJS() {
                        if (window.innerWidth <= 900 && resizeEventsBound === false) {
                            Navigation.initialiseType('mobile', events);
                            resizeEventsBound = true;
                        }
                    }

                    window.addEventListener('resize', function () {
                        loadMobileJS();
                    });

                    loadMobileJS();
                }

                /**
                 * @description initialise a type of navigation e.g mobile
                 * @param name {String}
                 * @param events {Object}
                 * @returns {void}
                 */

                _createClass(Navigation, null, [{
                    key: 'initialiseType',
                    value: function initialiseType(name, events) {

                        var type = new types[name](name);

                        if (events && events[name]) {
                            type.analytics(events[name]);
                        }
                    }
                }]);

                return Navigation;
            }();

            _export('default', Navigation);

            _export('__useDefault', __useDefault = true);

            _export('__useDefault', __useDefault);
        }
    };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    Navigation = factory();
});
//# sourceMappingURL=index.js.map