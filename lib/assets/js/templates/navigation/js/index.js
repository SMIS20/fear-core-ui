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
System.register("node_modules/systemjs-plugin-babel/babel-helpers/get.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
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
                function Analytics() {
                    _classCallCheck(this, Analytics);
                }

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

    var _classCallCheck, _createClass, config, _analytics, UI;

    return {
        setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
            _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
            _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
        }, function (_config) {
            config = _config.default;
        }, function (_analyticsEvents) {
            _analytics = _analyticsEvents.default;
        }],
        execute: function () {
            UI = function () {
                function UI() {
                    _classCallCheck(this, UI);

                    this.analytics();
                }

                _createClass(UI, [{
                    key: 'analytics',
                    value: function analytics(selector) {

                        var events = config.analytics.events[this.constructor.name.toLowerCase()];

                        if (events) {
                            _analytics.bind(document.querySelectorAll(selector), events);
                        }
                    }
                }]);

                return UI;
            }();

            _export('default', UI);
        }
    };
});
System.register('templates/navigation/js/default.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/createClass.js', 'node_modules/systemjs-plugin-babel/babel-helpers/possibleConstructorReturn.js', 'node_modules/systemjs-plugin-babel/babel-helpers/get.js', 'node_modules/systemjs-plugin-babel/babel-helpers/inherits.js', '../../../base/base.ui'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _createClass, _possibleConstructorReturn, _get, _inherits, UI, Navigation;

    return {
        setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
            _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
            _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersPossibleConstructorReturnJs) {
            _possibleConstructorReturn = _node_modulesSystemjsPluginBabelBabelHelpersPossibleConstructorReturnJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersGetJs) {
            _get = _node_modulesSystemjsPluginBabelBabelHelpersGetJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersInheritsJs) {
            _inherits = _node_modulesSystemjsPluginBabelBabelHelpersInheritsJs.default;
        }, function (_baseBaseUi) {
            UI = _baseBaseUi.default;
        }],
        execute: function () {
            Navigation = function (_UI) {
                _inherits(Navigation, _UI);

                function Navigation() {
                    _classCallCheck(this, Navigation);

                    return _possibleConstructorReturn(this, Object.getPrototypeOf(Navigation).call(this));
                }

                _createClass(Navigation, [{
                    key: 'analytics',
                    value: function analytics() {
                        _get(Object.getPrototypeOf(Navigation.prototype), 'analytics', this).call(this, '.nav__wrapper .nav > li > a');
                    }
                }]);

                return Navigation;
            }(UI);

            _export('default', Navigation);
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
System.register('templates/navigation/js/mobile.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/createClass.js'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _createClass, SCROLL_INTO_VIEW_DELAY, Mobile;

    return {
        setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
            _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
        }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
            _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
        }],
        execute: function () {
            SCROLL_INTO_VIEW_DELAY = 160;

            Mobile = function () {
                function Mobile() {
                    var windowReference = arguments.length <= 0 || arguments[0] === undefined ? window : arguments[0];

                    _classCallCheck(this, Mobile);

                    this.window = windowReference;
                    this.lastTimeout = null;

                    window.addEventListener('resize', function () {
                        loadMobileJS.call(Mobile);
                    });

                    function loadMobileJS() {
                        if (window.innerWidth < 900) {
                            this.bind();
                        }
                    }

                    loadMobileJS.call(this);
                }

                _createClass(Mobile, [{
                    key: 'bind',
                    value: function bind() {
                        var _this = this;

                        if (this.window.document.getElementsByClassName) {
                            var checkboxes = this.window.document.getElementsByClassName('menu__mobile-level3');

                            for (var iCheckbox = 0; iCheckbox < checkboxes.length; iCheckbox++) {
                                checkboxes[iCheckbox].onchange = function (e) {
                                    _this.level3Change(e);
                                };
                            }

                            var radioButtons = this.window.document.getElementsByName('menu');

                            for (var iRadio = 0; iRadio < radioButtons.length; iRadio++) {
                                radioButtons[iRadio].onchange = function (e) {
                                    _this.menuChange(e);
                                };
                            }
                        }
                    }
                }, {
                    key: 'isElementVisible',
                    value: function isElementVisible(el) {

                        var rect = el.getBoundingClientRect();

                        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (this.window.innerHeight || this.window.document.documentElement.clientHeight) && rect.right <= (this.window.innerWidth || this.window.document.documentElement.clientWidth);
                    }
                }, {
                    key: 'scrollCurrentLevel3IntoView',
                    value: function scrollCurrentLevel3IntoView(level3Id) {
                        var _this2 = this;

                        this.window.clearTimeout(this.lastTimeout);

                        this.lastTimeout = this.window.setTimeout(function () {
                            var label = _this2.window.document.querySelector('[for=' + level3Id + ']');

                            if (!_this2.isElementVisible(label)) {
                                label.scrollIntoView();
                            }
                        }, SCROLL_INTO_VIEW_DELAY);
                    }
                }, {
                    key: 'deSelectLevel3Checkboxes',
                    value: function deSelectLevel3Checkboxes(selectedCheckboxId) {
                        var checkboxes = this.window.document.querySelectorAll('.menu__mobile-level3:checked:not(#' + selectedCheckboxId + ')');

                        for (var i = 0; i < checkboxes.length; i++) {
                            checkboxes[i].checked = false;
                        }
                    }
                }, {
                    key: 'level3Change',
                    value: function level3Change(e) {
                        this.deSelectLevel3Checkboxes(e.target.id);
                        this.scrollCurrentLevel3IntoView(e.target.id);
                    }
                }, {
                    key: 'menuChange',
                    value: function menuChange(e) {
                        this.deSelectLevel3Checkboxes(e.target.id);
                    }
                }]);

                return Mobile;
            }();

            _export('default', Mobile);
        }
    };
});
System.register('templates/navigation/js/index.js', ['./default', './mobile'], function (_export, _context) {
  "use strict";

  var Navigation, Mobile;
  return {
    setters: [function (_default) {
      Navigation = _default.default;
    }, function (_mobile) {
      Mobile = _mobile.default;
    }],
    execute: function () {

      new Navigation();
      new Mobile();
    }
  };
});
//# sourceMappingURL=index.js.map