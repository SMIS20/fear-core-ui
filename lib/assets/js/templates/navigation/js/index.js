System.register('templates/navigation/js/default.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/possibleConstructorReturn.js', 'node_modules/systemjs-plugin-babel/babel-helpers/inherits.js', '../../../base/base.ui'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _possibleConstructorReturn, _inherits, UI, Default;

    return {
        setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
            _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersPossibleConstructorReturnJs) {
            _possibleConstructorReturn = _node_modulesSystemjsPluginBabelBabelHelpersPossibleConstructorReturnJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersInheritsJs) {
            _inherits = _node_modulesSystemjsPluginBabelBabelHelpersInheritsJs.default;
        }, function (_baseBaseUi) {
            UI = _baseBaseUi.default;
        }],
        execute: function () {
            Default = function (_UI) {
                _inherits(Default, _UI);

                /**
                 * create default global navigation
                 * @param UIName {String}
                 * @param type {String}
                 * @extends UI
                 */

                function Default(UIName, type) {
                    _classCallCheck(this, Default);

                    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Default).call(this, UIName, type));

                    _this.elements = {
                        link: '.nav li > a'
                    };

                    _this.analytics();
                    return _this;
                }

                return Default;
            }(UI);

            _export('default', Default);
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
System.register('base/analytics.events.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/createClass.js'], function (_export, _context) {
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
                 * bind
                 * @param el {Object}
                 * @param actions {Object}
                 */

                _createClass(Analytics, null, [{
                    key: 'bind',
                    value: function bind(el, actions) {

                        if (el.length) {
                            el = Array.from(el);
                        } else {
                            el = [el];
                        }

                        el.forEach(function (elItem) {

                            actions.forEach(function (action) {

                                var data = [[elItem]];

                                elItem.addEventListener(action.event, Analytics.send(action.functionName, data));
                            });
                        });
                    }

                    /**
                     * send
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
System.register('base/base.ui.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/createClass.js', 'config', './analytics.events'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _createClass, config, analytics, UI;

    return {
        setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
            _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
            _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
        }, function (_config) {
            config = _config.default;
        }, function (_analyticsEvents) {
            analytics = _analyticsEvents.default;
        }],
        execute: function () {
            UI = function () {

                /**
                 * create a UI element
                 * @param name {String} name of UI element e.g navigation/calender
                 * @param type {String} type of UI element e.g default/mobile
                 */

                function UI(name, type) {
                    _classCallCheck(this, UI);

                    this.name = name;
                    this.type = type;
                    this.elements = {};

                    console.info('creating', this.name, 'of type', this.type); // eslint-disable-line no-console
                }

                /**
                 * @param elements {Object}
                 */

                _createClass(UI, [{
                    key: 'analytics',

                    /**
                     * analytics events for UI
                     * @returns {void}
                     */
                    value: function analytics() {
                        var _this = this;

                        if (config.analytics) {
                            this.events = config.analytics.events[this.name]; //calls setter
                        }

                        if (this.events) {
                            this.events.forEach(function (value, key) {
                                Object.keys(_this.events[key]).forEach(function (elType) {
                                    _this.attachEvents(elType);
                                });
                            });
                        }
                    }

                    /**
                     * @param events {Object}
                     */

                }, {
                    key: 'attachEvents',

                    /**
                     * @param type {String} type of UI element e.g default/mobile
                     * @returns {void}
                     */
                    value: function attachEvents(type) {
                        if (this.elements[type]) {
                            console.info('attaching events for', this.elements[type]); // eslint-disable-line no-console
                            analytics.bind(document.querySelectorAll(this.elements[type]), this.events);
                        }
                    }
                }, {
                    key: 'elements',
                    set: function set(elements) {
                        if (typeof elements === 'object') {
                            this._elements = elements;
                        }
                    }

                    /**
                     * @returns {Object}
                     */

                    , get: function get() {
                        return this._elements;
                    }
                }, {
                    key: 'events',
                    set: function set(events) {
                        var _this2 = this;

                        Object.keys(events).forEach(function (key) {
                            if (events[key][_this2.type]) {
                                _this2._events = events[key][_this2.type];
                            }
                        });
                    }

                    /**
                     * @returns {Object}
                     */

                    , get: function get() {
                        return this._events;
                    }
                }]);

                return UI;
            }();

            _export('default', UI);
        }
    };
});
System.register('templates/navigation/js/mobile.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/createClass.js', 'node_modules/systemjs-plugin-babel/babel-helpers/possibleConstructorReturn.js', 'node_modules/systemjs-plugin-babel/babel-helpers/inherits.js', '../../../base/base.ui'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _createClass, _possibleConstructorReturn, _inherits, UI, SCROLL_INTO_VIEW_DELAY, Mobile;

    return {
        setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
            _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
            _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersPossibleConstructorReturnJs) {
            _possibleConstructorReturn = _node_modulesSystemjsPluginBabelBabelHelpersPossibleConstructorReturnJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersInheritsJs) {
            _inherits = _node_modulesSystemjsPluginBabelBabelHelpersInheritsJs.default;
        }, function (_baseBaseUi) {
            UI = _baseBaseUi.default;
        }],
        execute: function () {
            SCROLL_INTO_VIEW_DELAY = 160;

            Mobile = function (_UI) {
                _inherits(Mobile, _UI);

                /**
                 * global navigation mobile UI enhancements
                 * @param UIName {String}
                 * @param type {String}
                 * @param windowReference {Object} reference to browser window object
                 */

                function Mobile(UIName, type) {
                    var windowReference = arguments.length <= 2 || arguments[2] === undefined ? window : arguments[2];

                    _classCallCheck(this, Mobile);

                    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Mobile).call(this, UIName, type));

                    _this.analytics();

                    _this.window = windowReference;
                    _this.lastTimeout = null;

                    window.addEventListener('resize', function () {
                        loadMobileJS.call(Mobile);
                    });

                    function loadMobileJS() {
                        if (window.innerWidth < 900) {
                            this.bind();
                        }
                    }

                    loadMobileJS.call(_this);
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
System.register('templates/navigation/js/index.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', './default', './mobile'], function (_export, _context) {
    "use strict";

    var _classCallCheck, Default, Mobile, Navigation;

    return {
        setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
            _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
        }, function (_default) {
            Default = _default.default;
        }, function (_mobile) {
            Mobile = _mobile.default;
        }],
        execute: function () {
            Navigation =

            /**
             * create global navigation UI template
             */
            function Navigation() {
                _classCallCheck(this, Navigation);

                this.name = 'navigation';

                new Default(this.name, 'default');
                new Mobile(this.name, 'mobile');
            };

            _export('default', Navigation);

            new Navigation();
        }
    };
});
//# sourceMappingURL=index.js.map