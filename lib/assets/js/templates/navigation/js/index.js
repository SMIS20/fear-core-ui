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

                        var accountLoggedInShowElements = documentReference.querySelectorAll('.account__logged-in--show');
                        var accountLoggedInHideElements = documentReference.querySelectorAll('.account__logged-in--hide');

                        accountLoggedInShowElements.forEach(function (el) {
                            User._displayElement(el, User.isLoggedIn());
                        });

                        accountLoggedInHideElements.forEach(function (el) {
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
System.register('templates/navigation/js/index.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/createClass.js', './desktop', './mobile'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _createClass, Desktop, Mobile, types, Navigation, __useDefault;

    return {
        setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
            _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
            _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
        }, function (_desktop) {
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