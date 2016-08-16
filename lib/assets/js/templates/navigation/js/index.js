System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_string-at", ["./_to-integer", "./_defined"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('./_to-integer'),
      defined = $__require('./_defined');
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_library", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = true;
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_redefine", ["./_hide"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('./_hide');
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_to-iobject", ["./_iobject", "./_defined"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var IObject = $__require('./_iobject'),
      defined = $__require('./_defined');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_to-index", ["./_to-integer"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('./_to-integer'),
      max = Math.max,
      min = Math.min;
  module.exports = function(index, length) {
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_array-includes", ["./_to-iobject", "./_to-length", "./_to-index"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toIObject = $__require('./_to-iobject'),
      toLength = $__require('./_to-length'),
      toIndex = $__require('./_to-index');
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_object-keys-internal", ["./_has", "./_to-iobject", "./_array-includes", "./_shared-key"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var has = $__require('./_has'),
      toIObject = $__require('./_to-iobject'),
      arrayIndexOf = $__require('./_array-includes')(false),
      IE_PROTO = $__require('./_shared-key')('IE_PROTO');
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_object-keys", ["./_object-keys-internal", "./_enum-bug-keys"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $keys = $__require('./_object-keys-internal'),
      enumBugKeys = $__require('./_enum-bug-keys');
  module.exports = Object.keys || function keys(O) {
    return $keys(O, enumBugKeys);
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_object-dps", ["./_object-dp", "./_an-object", "./_object-keys", "./_descriptors"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var dP = $__require('./_object-dp'),
      anObject = $__require('./_an-object'),
      getKeys = $__require('./_object-keys');
  module.exports = $__require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf').split(',');
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_html", ["./_global"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('./_global').document && document.documentElement;
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_object-create", ["./_an-object", "./_object-dps", "./_enum-bug-keys", "./_shared-key", "./_dom-create", "./_html"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('./_an-object'),
      dPs = $__require('./_object-dps'),
      enumBugKeys = $__require('./_enum-bug-keys'),
      IE_PROTO = $__require('./_shared-key')('IE_PROTO'),
      Empty = function() {},
      PROTOTYPE = 'prototype';
  var createDict = function() {
    var iframe = $__require('./_dom-create')('iframe'),
        i = enumBugKeys.length,
        lt = '<',
        gt = '>',
        iframeDocument;
    iframe.style.display = 'none';
    $__require('./_html').appendChild(iframe);
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_iter-create", ["./_object-create", "./_property-desc", "./_set-to-string-tag", "./_hide", "./_wks"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var create = $__require('./_object-create'),
      descriptor = $__require('./_property-desc'),
      setToStringTag = $__require('./_set-to-string-tag'),
      IteratorPrototype = {};
  $__require('./_hide')(IteratorPrototype, $__require('./_wks')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag", ["./_object-dp", "./_has", "./_wks"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var def = $__require('./_object-dp').f,
      has = $__require('./_has'),
      TAG = $__require('./_wks')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_has", [], true, function($__require, exports, module) {
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_shared-key", ["./_shared", "./_uid"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var shared = $__require('./_shared')('keys'),
      uid = $__require('./_uid');
  module.exports = function(key) {
    return shared[key] || (shared[key] = uid(key));
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_object-gpo", ["./_has", "./_to-object", "./_shared-key"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var has = $__require('./_has'),
      toObject = $__require('./_to-object'),
      IE_PROTO = $__require('./_shared-key')('IE_PROTO'),
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_iter-define", ["./_library", "./_export", "./_redefine", "./_hide", "./_has", "./_iterators", "./_iter-create", "./_set-to-string-tag", "./_object-gpo", "./_wks"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var LIBRARY = $__require('./_library'),
      $export = $__require('./_export'),
      redefine = $__require('./_redefine'),
      hide = $__require('./_hide'),
      has = $__require('./_has'),
      Iterators = $__require('./_iterators'),
      $iterCreate = $__require('./_iter-create'),
      setToStringTag = $__require('./_set-to-string-tag'),
      getPrototypeOf = $__require('./_object-gpo'),
      ITERATOR = $__require('./_wks')('iterator'),
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/es6.string.iterator", ["./_string-at", "./_iter-define"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $at = $__require('./_string-at')(true);
  $__require('./_iter-define')(String, 'String', function(iterated) {
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_iter-call", ["./_an-object"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('./_an-object');
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_is-array-iter", ["./_iterators", "./_wks"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Iterators = $__require('./_iterators'),
      ITERATOR = $__require('./_wks')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_create-property", ["./_object-dp", "./_property-desc"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $defineProperty = $__require('./_object-dp'),
      createDesc = $__require('./_property-desc');
  module.exports = function(object, index, value) {
    if (index in object)
      $defineProperty.f(object, index, createDesc(0, value));
    else
      object[index] = value;
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_classof", ["./_cof", "./_wks"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('./_cof'),
      TAG = $__require('./_wks')('toStringTag'),
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_iterators", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {};
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method", ["./_classof", "./_wks", "./_iterators", "./_core"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var classof = $__require('./_classof'),
      ITERATOR = $__require('./_wks')('iterator'),
      Iterators = $__require('./_iterators');
  module.exports = $__require('./_core').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_iter-detect", ["./_wks"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ITERATOR = $__require('./_wks')('iterator'),
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/es6.array.from", ["./_ctx", "./_export", "./_to-object", "./_iter-call", "./_is-array-iter", "./_to-length", "./_create-property", "./core.get-iterator-method", "./_iter-detect"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ctx = $__require('./_ctx'),
      $export = $__require('./_export'),
      toObject = $__require('./_to-object'),
      call = $__require('./_iter-call'),
      isArrayIter = $__require('./_is-array-iter'),
      toLength = $__require('./_to-length'),
      createProperty = $__require('./_create-property'),
      getIterFn = $__require('./core.get-iterator-method');
  $export($export.S + $export.F * !$__require('./_iter-detect')(function(iter) {
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/fn/array/from", ["../../modules/es6.string.iterator", "../../modules/es6.array.from", "../../modules/_core"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('../../modules/es6.string.iterator');
  $__require('../../modules/es6.array.from');
  module.exports = $__require('../../modules/_core').Array.from;
  return module.exports;
});

System.registerDynamic("babel-runtime/core-js/array/from", ["core-js/library/fn/array/from"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('core-js/library/fn/array/from'),
    __esModule: true
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_an-object", ["./_is-object"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('./_is-object');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_dom-create", ["./_is-object", "./_global"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('./_is-object'),
      document = $__require('./_global').document,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define", ["./_descriptors", "./_fails", "./_dom-create"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = !$__require('./_descriptors') && !$__require('./_fails')(function() {
    return Object.defineProperty($__require('./_dom-create')('div'), 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_to-primitive", ["./_is-object"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('./_is-object');
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_object-dp", ["./_an-object", "./_ie8-dom-define", "./_to-primitive", "./_descriptors"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('./_an-object'),
      IE8_DOM_DEFINE = $__require('./_ie8-dom-define'),
      toPrimitive = $__require('./_to-primitive'),
      dP = Object.defineProperty;
  exports.f = $__require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_property-desc", [], true, function($__require, exports, module) {
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_descriptors", ["./_fails"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = !$__require('./_fails')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_hide", ["./_object-dp", "./_property-desc", "./_descriptors"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var dP = $__require('./_object-dp'),
      createDesc = $__require('./_property-desc');
  module.exports = $__require('./_descriptors') ? function(object, key, value) {
    return dP.f(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_export", ["./_global", "./_core", "./_ctx", "./_hide"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('./_global'),
      core = $__require('./_core'),
      ctx = $__require('./_ctx'),
      hide = $__require('./_hide'),
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_a-function", [], true, function($__require, exports, module) {
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_ctx", ["./_a-function"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('./_a-function');
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_iobject", ["./_cof"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('./_cof');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_defined", [], true, function($__require, exports, module) {
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_to-object", ["./_defined"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var defined = $__require('./_defined');
  module.exports = function(it) {
    return Object(defined(it));
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_to-integer", [], true, function($__require, exports, module) {
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_to-length", ["./_to-integer"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('./_to-integer'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_is-object", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_cof", [], true, function($__require, exports, module) {
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_is-array", ["./_cof"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('./_cof');
  module.exports = Array.isArray || function isArray(arg) {
    return cof(arg) == 'Array';
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_shared", ["./_global"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('./_global'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_uid", [], true, function($__require, exports, module) {
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_global", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_wks", ["./_shared", "./_uid", "./_global"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var store = $__require('./_shared')('wks'),
      uid = $__require('./_uid'),
      Symbol = $__require('./_global').Symbol,
      USE_SYMBOL = typeof Symbol == 'function';
  var $exports = module.exports = function(name) {
    return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
  };
  $exports.store = store;
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_array-species-constructor", ["./_is-object", "./_is-array", "./_wks"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('./_is-object'),
      isArray = $__require('./_is-array'),
      SPECIES = $__require('./_wks')('species');
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_array-species-create", ["./_array-species-constructor"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var speciesConstructor = $__require('./_array-species-constructor');
  module.exports = function(original, length) {
    return new (speciesConstructor(original))(length);
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_array-methods", ["./_ctx", "./_iobject", "./_to-object", "./_to-length", "./_array-species-create"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ctx = $__require('./_ctx'),
      IObject = $__require('./_iobject'),
      toObject = $__require('./_to-object'),
      toLength = $__require('./_to-length'),
      asc = $__require('./_array-species-create');
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_fails", [], true, function($__require, exports, module) {
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

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_strict-method", ["./_fails"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var fails = $__require('./_fails');
  module.exports = function(method, arg) {
    return !!method && fails(function() {
      arg ? method.call(null, function() {}, 1) : method.call(null);
    });
  };
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/es6.array.for-each", ["./_export", "./_array-methods", "./_strict-method"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('./_export'),
      $forEach = $__require('./_array-methods')(0),
      STRICT = $__require('./_strict-method')([].forEach, true);
  $export($export.P + $export.F * !STRICT, 'Array', {forEach: function forEach(callbackfn) {
      return $forEach(this, callbackfn, arguments[1]);
    }});
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/modules/_core", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '2.4.0'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

System.registerDynamic("babel-runtime/node_modules/core-js/library/fn/array/for-each", ["../../modules/es6.array.for-each", "../../modules/_core"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('../../modules/es6.array.for-each');
  module.exports = $__require('../../modules/_core').Array.forEach;
  return module.exports;
});

System.registerDynamic("babel-runtime/core-js/array/for-each", ["core-js/library/fn/array/for-each"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('core-js/library/fn/array/for-each'),
    __esModule: true
  };
  return module.exports;
});

System.register('base/polyfills.js', ['core-js/array/from', 'core-js/array/for-each'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_coreJsArrayFrom) {}, function (_coreJsArrayForEach) {}],
    execute: function () {}
  };
});
System.register('templates/navigation/js/desktop.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/possibleConstructorReturn.js', 'node_modules/systemjs-plugin-babel/babel-helpers/inherits.js', '../../../base/ui'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _possibleConstructorReturn, _inherits, UI, Desktop;

    return {
        setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
            _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersPossibleConstructorReturnJs) {
            _possibleConstructorReturn = _node_modulesSystemjsPluginBabelBabelHelpersPossibleConstructorReturnJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersInheritsJs) {
            _inherits = _node_modulesSystemjsPluginBabelBabelHelpersInheritsJs.default;
        }, function (_baseUi) {
            UI = _baseUi.default;
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
System.register("node_modules/systemjs-plugin-babel/babel-helpers/possibleConstructorReturn.js", [], function (_export, _context) {
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
System.register("node_modules/systemjs-plugin-babel/babel-helpers/inherits.js", [], function (_export, _context) {
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
System.register('base/events.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/createClass.js'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _createClass, Analytics;

    return {
        setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
            _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
            _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
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
System.register('base/ui.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/createClass.js', './events'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _createClass, eventBinder, UI;

    return {
        setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
            _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
            _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
        }, function (_events) {
            eventBinder = _events.default;
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
System.register("node_modules/systemjs-plugin-babel/babel-helpers/slicedToArray.js", [], function (_export, _context) {
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
System.register("node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js", [], function (_export, _context) {
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
System.register("node_modules/systemjs-plugin-babel/babel-helpers/createClass.js", [], function (_export, _context) {
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
System.register('base/cookie.js', ['node_modules/systemjs-plugin-babel/babel-helpers/slicedToArray.js', 'node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/createClass.js'], function (_export, _context) {
    "use strict";

    var _slicedToArray, _classCallCheck, _createClass, Cookie;

    return {
        setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersSlicedToArrayJs) {
            _slicedToArray = _node_modulesSystemjsPluginBabelBabelHelpersSlicedToArrayJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
            _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
            _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
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
System.register('templates/account/js/user.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/createClass.js', '../../../base/cookie'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _createClass, cookie, MS_USER_COOKIE, User;

    return {
        setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
            _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
            _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
        }, function (_baseCookie) {
            cookie = _baseCookie.default;
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
System.register('templates/navigation/js/mobile.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/createClass.js', 'node_modules/systemjs-plugin-babel/babel-helpers/possibleConstructorReturn.js', 'node_modules/systemjs-plugin-babel/babel-helpers/inherits.js', '../../../base/ui', '../../account/js/user'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _createClass, _possibleConstructorReturn, _inherits, UI, user, SCROLL_INTO_VIEW_DELAY, Mobile;

    return {
        setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
            _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
            _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersPossibleConstructorReturnJs) {
            _possibleConstructorReturn = _node_modulesSystemjsPluginBabelBabelHelpersPossibleConstructorReturnJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersInheritsJs) {
            _inherits = _node_modulesSystemjsPluginBabelBabelHelpersInheritsJs.default;
        }, function (_baseUi) {
            UI = _baseUi.default;
        }, function (_accountJsUser) {
            user = _accountJsUser.default;
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
System.register('templates/navigation/js/index.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/createClass.js', '../../../base/polyfills', './desktop', './mobile'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _createClass, Desktop, Mobile, types, Navigation, __useDefault;

    return {
        setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
            _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
            _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
        }, function (_basePolyfills) {}, function (_desktop) {
            Desktop = _desktop.default;
        }, function (_mobile) {
            Mobile = _mobile.default;
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
//# sourceMappingURL=index.js.map