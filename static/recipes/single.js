var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/jquery/dist/jquery.js
var require_jquery = __commonJS({
  "node_modules/jquery/dist/jquery.js"(exports2, module2) {
    (function(global, factory) {
      "use strict";
      if (typeof module2 === "object" && typeof module2.exports === "object") {
        module2.exports = global.document ? factory(global, true) : function(w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
      } else {
        factory(global);
      }
    })(typeof window !== "undefined" ? window : exports2, function(window2, noGlobal) {
      "use strict";
      var arr = [];
      var getProto = Object.getPrototypeOf;
      var slice = arr.slice;
      var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
      } : function(array) {
        return arr.concat.apply([], array);
      };
      var push = arr.push;
      var indexOf = arr.indexOf;
      var class2type = {};
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};
      var isFunction = function isFunction2(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
      };
      var isWindow = function isWindow2(obj) {
        return obj != null && obj === obj.window;
      };
      var document = window2.document;
      var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
      };
      function DOMEval(code, node, doc) {
        doc = doc || document;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) {
          for (i in preservedScriptAttributes) {
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) {
              script.setAttribute(i, val);
            }
          }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
      }
      function toType(obj) {
        if (obj == null) {
          return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
      }
      var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
      };
      jQuery.fn = jQuery.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
          return slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
          if (num == null) {
            return slice.call(this);
          }
          return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
          var ret = jQuery.merge(this.constructor(), elems);
          ret.prevObject = this;
          return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function(callback) {
          return jQuery.each(this, callback);
        },
        map: function(callback) {
          return this.pushStack(jQuery.map(this, function(elem, i) {
            return callback.call(elem, i, elem);
          }));
        },
        slice: function() {
          return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(jQuery.grep(this, function(_elem, i) {
            return (i + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(jQuery.grep(this, function(_elem, i) {
            return i % 2;
          }));
        },
        eq: function(i) {
          var len = this.length, j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push,
        sort: arr.sort,
        splice: arr.splice
      };
      jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[i] || {};
          i++;
        }
        if (typeof target !== "object" && !isFunction(target)) {
          target = {};
        }
        if (i === length) {
          target = this;
          i--;
        }
        for (; i < length; i++) {
          if ((options = arguments[i]) != null) {
            for (name in options) {
              copy = options[name];
              if (name === "__proto__" || target === copy) {
                continue;
              }
              if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                src = target[name];
                if (copyIsArray && !Array.isArray(src)) {
                  clone = [];
                } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                  clone = {};
                } else {
                  clone = src;
                }
                copyIsArray = false;
                target[name] = jQuery.extend(deep, clone, copy);
              } else if (copy !== void 0) {
                target[name] = copy;
              }
            }
          }
        }
        return target;
      };
      jQuery.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(msg) {
          throw new Error(msg);
        },
        noop: function() {
        },
        isPlainObject: function(obj) {
          var proto, Ctor;
          if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
          }
          proto = getProto(obj);
          if (!proto) {
            return true;
          }
          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
          var name;
          for (name in obj) {
            return false;
          }
          return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(code, options, doc) {
          DOMEval(code, { nonce: options && options.nonce }, doc);
        },
        each: function(obj, callback) {
          var length, i = 0;
          if (isArrayLike(obj)) {
            length = obj.length;
            for (; i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          }
          return obj;
        },
        // Retrieve the text value of an array of DOM nodes
        text: function(elem) {
          var node, ret = "", i = 0, nodeType = elem.nodeType;
          if (!nodeType) {
            while (node = elem[i++]) {
              ret += jQuery.text(node);
            }
          }
          if (nodeType === 1 || nodeType === 11) {
            return elem.textContent;
          }
          if (nodeType === 9) {
            return elem.documentElement.textContent;
          }
          if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
          }
          return ret;
        },
        // results is for internal usage only
        makeArray: function(arr2, results) {
          var ret = results || [];
          if (arr2 != null) {
            if (isArrayLike(Object(arr2))) {
              jQuery.merge(
                ret,
                typeof arr2 === "string" ? [arr2] : arr2
              );
            } else {
              push.call(ret, arr2);
            }
          }
          return ret;
        },
        inArray: function(elem, arr2, i) {
          return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
        },
        isXMLDoc: function(elem) {
          var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
          return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
          var len = +second.length, j = 0, i = first.length;
          for (; j < len; j++) {
            first[i++] = second[j];
          }
          first.length = i;
          return first;
        },
        grep: function(elems, callback, invert) {
          var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
              matches.push(elems[i]);
            }
          }
          return matches;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
          var length, value, i = 0, ret = [];
          if (isArrayLike(elems)) {
            length = elems.length;
            for (; i < length; i++) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          }
          return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support
      });
      if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
      }
      jQuery.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(_i, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
        }
      );
      function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) {
          return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
      }
      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      }
      var pop = arr.pop;
      var sort = arr.sort;
      var splice = arr.splice;
      var whitespace = "[\\x20\\t\\r\\n\\f]";
      var rtrimCSS = new RegExp(
        "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
        "g"
      );
      jQuery.contains = function(a, b) {
        var bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      };
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
          if (ch === "\0") {
            return "\uFFFD";
          }
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }
        return "\\" + ch;
      }
      jQuery.escapeSelector = function(sel) {
        return (sel + "").replace(rcssescape, fcssescape);
      };
      var preferredDoc = document, pushNative = push;
      (function() {
        var i, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document2, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
          ID: new RegExp("^#(" + identifier + ")"),
          CLASS: new RegExp("^\\.(" + identifier + ")"),
          TAG: new RegExp("^(" + identifier + "|[*])"),
          ATTR: new RegExp("^" + attributes),
          PSEUDO: new RegExp("^" + pseudos),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + booleans + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
          var high = "0x" + escape.slice(1) - 65536;
          if (nonHex) {
            return nonHex;
          }
          return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        }, unloadHandler = function() {
          setDocument();
        }, inDisabledFieldset = addCombinator(
          function(elem) {
            return elem.disabled === true && nodeName(elem, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
        function safeActiveElement() {
          try {
            return document2.activeElement;
          } catch (err) {
          }
        }
        try {
          push2.apply(
            arr = slice.call(preferredDoc.childNodes),
            preferredDoc.childNodes
          );
          arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
          push2 = {
            apply: function(target, els) {
              pushNative.apply(target, slice.call(els));
            },
            call: function(target) {
              pushNative.apply(target, slice.call(arguments, 1));
            }
          };
        }
        function find(selector, context, results, seed) {
          var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
          results = results || [];
          if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
            return results;
          }
          if (!seed) {
            setDocument(context);
            context = context || document2;
            if (documentIsHTML) {
              if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                if (m = match[1]) {
                  if (nodeType === 9) {
                    if (elem = context.getElementById(m)) {
                      if (elem.id === m) {
                        push2.call(results, elem);
                        return results;
                      }
                    } else {
                      return results;
                    }
                  } else {
                    if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                      push2.call(results, elem);
                      return results;
                    }
                  }
                } else if (match[2]) {
                  push2.apply(results, context.getElementsByTagName(selector));
                  return results;
                } else if ((m = match[3]) && context.getElementsByClassName) {
                  push2.apply(results, context.getElementsByClassName(m));
                  return results;
                }
              }
              if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                newSelector = selector;
                newContext = context;
                if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                  newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                  if (newContext != context || !support.scope) {
                    if (nid = context.getAttribute("id")) {
                      nid = jQuery.escapeSelector(nid);
                    } else {
                      context.setAttribute("id", nid = expando);
                    }
                  }
                  groups = tokenize(selector);
                  i2 = groups.length;
                  while (i2--) {
                    groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                  }
                  newSelector = groups.join(",");
                }
                try {
                  push2.apply(
                    results,
                    newContext.querySelectorAll(newSelector)
                  );
                  return results;
                } catch (qsaError) {
                  nonnativeSelectorCache(selector, true);
                } finally {
                  if (nid === expando) {
                    context.removeAttribute("id");
                  }
                }
              }
            }
          }
          return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
        }
        function createCache() {
          var keys = [];
          function cache(key, value) {
            if (keys.push(key + " ") > Expr.cacheLength) {
              delete cache[keys.shift()];
            }
            return cache[key + " "] = value;
          }
          return cache;
        }
        function markFunction(fn) {
          fn[expando] = true;
          return fn;
        }
        function assert(fn) {
          var el = document2.createElement("fieldset");
          try {
            return !!fn(el);
          } catch (e) {
            return false;
          } finally {
            if (el.parentNode) {
              el.parentNode.removeChild(el);
            }
            el = null;
          }
        }
        function createInputPseudo(type) {
          return function(elem) {
            return nodeName(elem, "input") && elem.type === type;
          };
        }
        function createButtonPseudo(type) {
          return function(elem) {
            return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
          };
        }
        function createDisabledPseudo(disabled) {
          return function(elem) {
            if ("form" in elem) {
              if (elem.parentNode && elem.disabled === false) {
                if ("label" in elem) {
                  if ("label" in elem.parentNode) {
                    return elem.parentNode.disabled === disabled;
                  } else {
                    return elem.disabled === disabled;
                  }
                }
                return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
              }
              return elem.disabled === disabled;
            } else if ("label" in elem) {
              return elem.disabled === disabled;
            }
            return false;
          };
        }
        function createPositionalPseudo(fn) {
          return markFunction(function(argument) {
            argument = +argument;
            return markFunction(function(seed, matches2) {
              var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
              while (i2--) {
                if (seed[j = matchIndexes[i2]]) {
                  seed[j] = !(matches2[j] = seed[j]);
                }
              }
            });
          });
        }
        function testContext(context) {
          return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        function setDocument(node) {
          var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
          if (doc == document2 || doc.nodeType !== 9 || !doc.documentElement) {
            return document2;
          }
          document2 = doc;
          documentElement2 = document2.documentElement;
          documentIsHTML = !jQuery.isXMLDoc(document2);
          matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
          if (documentElement2.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          preferredDoc != document2 && (subWindow = document2.defaultView) && subWindow.top !== subWindow) {
            subWindow.addEventListener("unload", unloadHandler);
          }
          support.getById = assert(function(el) {
            documentElement2.appendChild(el).id = jQuery.expando;
            return !document2.getElementsByName || !document2.getElementsByName(jQuery.expando).length;
          });
          support.disconnectedMatch = assert(function(el) {
            return matches.call(el, "*");
          });
          support.scope = assert(function() {
            return document2.querySelectorAll(":scope");
          });
          support.cssHas = assert(function() {
            try {
              document2.querySelector(":has(*,:jqfake)");
              return false;
            } catch (e) {
              return true;
            }
          });
          if (support.getById) {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                return elem.getAttribute("id") === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var elem = context.getElementById(id);
                return elem ? [elem] : [];
              }
            };
          } else {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                return node2 && node2.value === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var node2, i2, elems, elem = context.getElementById(id);
                if (elem) {
                  node2 = elem.getAttributeNode("id");
                  if (node2 && node2.value === id) {
                    return [elem];
                  }
                  elems = context.getElementsByName(id);
                  i2 = 0;
                  while (elem = elems[i2++]) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                  }
                }
                return [];
              }
            };
          }
          Expr.find.TAG = function(tag, context) {
            if (typeof context.getElementsByTagName !== "undefined") {
              return context.getElementsByTagName(tag);
            } else {
              return context.querySelectorAll(tag);
            }
          };
          Expr.find.CLASS = function(className, context) {
            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
              return context.getElementsByClassName(className);
            }
          };
          rbuggyQSA = [];
          assert(function(el) {
            var input;
            documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
            if (!el.querySelectorAll("[selected]").length) {
              rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
            }
            if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
              rbuggyQSA.push("~=");
            }
            if (!el.querySelectorAll("a#" + expando + "+*").length) {
              rbuggyQSA.push(".#.+[+~]");
            }
            if (!el.querySelectorAll(":checked").length) {
              rbuggyQSA.push(":checked");
            }
            input = document2.createElement("input");
            input.setAttribute("type", "hidden");
            el.appendChild(input).setAttribute("name", "D");
            documentElement2.appendChild(el).disabled = true;
            if (el.querySelectorAll(":disabled").length !== 2) {
              rbuggyQSA.push(":enabled", ":disabled");
            }
            input = document2.createElement("input");
            input.setAttribute("name", "");
            el.appendChild(input);
            if (!el.querySelectorAll("[name='']").length) {
              rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
            }
          });
          if (!support.cssHas) {
            rbuggyQSA.push(":has");
          }
          rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
          sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if (compare) {
              return compare;
            }
            compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
              // Otherwise we know they are disconnected
              1
            );
            if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
              if (a === document2 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
                return -1;
              }
              if (b === document2 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
                return 1;
              }
              return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
            }
            return compare & 4 ? -1 : 1;
          };
          return document2;
        }
        find.matches = function(expr, elements) {
          return find(expr, null, null, elements);
        };
        find.matchesSelector = function(elem, expr) {
          setDocument(elem);
          if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
            try {
              var ret = matches.call(elem, expr);
              if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              elem.document && elem.document.nodeType !== 11) {
                return ret;
              }
            } catch (e) {
              nonnativeSelectorCache(expr, true);
            }
          }
          return find(expr, document2, null, [elem]).length > 0;
        };
        find.contains = function(context, elem) {
          if ((context.ownerDocument || context) != document2) {
            setDocument(context);
          }
          return jQuery.contains(context, elem);
        };
        find.attr = function(elem, name) {
          if ((elem.ownerDocument || elem) != document2) {
            setDocument(elem);
          }
          var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
          if (val !== void 0) {
            return val;
          }
          return elem.getAttribute(name);
        };
        find.error = function(msg) {
          throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        jQuery.uniqueSort = function(results) {
          var elem, duplicates = [], j = 0, i2 = 0;
          hasDuplicate = !support.sortStable;
          sortInput = !support.sortStable && slice.call(results, 0);
          sort.call(results, sortOrder);
          if (hasDuplicate) {
            while (elem = results[i2++]) {
              if (elem === results[i2]) {
                j = duplicates.push(i2);
              }
            }
            while (j--) {
              splice.call(results, duplicates[j], 1);
            }
          }
          sortInput = null;
          return results;
        };
        jQuery.fn.uniqueSort = function() {
          return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
        };
        Expr = jQuery.expr = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: markFunction,
          match: matchExpr,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: true },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: true },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(match) {
              match[1] = match[1].replace(runescape, funescape);
              match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
              if (match[2] === "~=") {
                match[3] = " " + match[3] + " ";
              }
              return match.slice(0, 4);
            },
            CHILD: function(match) {
              match[1] = match[1].toLowerCase();
              if (match[1].slice(0, 3) === "nth") {
                if (!match[3]) {
                  find.error(match[0]);
                }
                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                match[5] = +(match[7] + match[8] || match[3] === "odd");
              } else if (match[3]) {
                find.error(match[0]);
              }
              return match;
            },
            PSEUDO: function(match) {
              var excess, unquoted = !match[6] && match[2];
              if (matchExpr.CHILD.test(match[0])) {
                return null;
              }
              if (match[3]) {
                match[2] = match[4] || match[5] || "";
              } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
              (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
              (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                match[0] = match[0].slice(0, excess);
                match[2] = unquoted.slice(0, excess);
              }
              return match.slice(0, 3);
            }
          },
          filter: {
            TAG: function(nodeNameSelector) {
              var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
              return nodeNameSelector === "*" ? function() {
                return true;
              } : function(elem) {
                return nodeName(elem, expectedNodeName);
              };
            },
            CLASS: function(className) {
              var pattern = classCache[className + " "];
              return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                return pattern.test(
                  typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                );
              });
            },
            ATTR: function(name, operator, check) {
              return function(elem) {
                var result = find.attr(elem, name);
                if (result == null) {
                  return operator === "!=";
                }
                if (!operator) {
                  return true;
                }
                result += "";
                if (operator === "=") {
                  return result === check;
                }
                if (operator === "!=") {
                  return result !== check;
                }
                if (operator === "^=") {
                  return check && result.indexOf(check) === 0;
                }
                if (operator === "*=") {
                  return check && result.indexOf(check) > -1;
                }
                if (operator === "$=") {
                  return check && result.slice(-check.length) === check;
                }
                if (operator === "~=") {
                  return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                }
                if (operator === "|=") {
                  return result === check || result.slice(0, check.length + 1) === check + "-";
                }
                return false;
              };
            },
            CHILD: function(type, what, _argument, first, last) {
              var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
              return first === 1 && last === 0 ? (
                // Shortcut for :nth-*(n)
                function(elem) {
                  return !!elem.parentNode;
                }
              ) : function(elem, _context, xml) {
                var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                if (parent) {
                  if (simple) {
                    while (dir2) {
                      node = elem;
                      while (node = node[dir2]) {
                        if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                          return false;
                        }
                      }
                      start = dir2 = type === "only" && !start && "nextSibling";
                    }
                    return true;
                  }
                  start = [forward ? parent.firstChild : parent.lastChild];
                  if (forward && useCache) {
                    outerCache = parent[expando] || (parent[expando] = {});
                    cache = outerCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];
                    while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                    (diff = nodeIndex = 0) || start.pop()) {
                      if (node.nodeType === 1 && ++diff && node === elem) {
                        outerCache[type] = [dirruns, nodeIndex, diff];
                        break;
                      }
                    }
                  } else {
                    if (useCache) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex;
                    }
                    if (diff === false) {
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                        if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                          if (useCache) {
                            outerCache = node[expando] || (node[expando] = {});
                            outerCache[type] = [dirruns, diff];
                          }
                          if (node === elem) {
                            break;
                          }
                        }
                      }
                    }
                  }
                  diff -= last;
                  return diff === first || diff % first === 0 && diff / first >= 0;
                }
              };
            },
            PSEUDO: function(pseudo, argument) {
              var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
              if (fn[expando]) {
                return fn(argument);
              }
              if (fn.length > 1) {
                args = [pseudo, pseudo, "", argument];
                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                  var idx, matched = fn(seed, argument), i2 = matched.length;
                  while (i2--) {
                    idx = indexOf.call(seed, matched[i2]);
                    seed[idx] = !(matches2[idx] = matched[i2]);
                  }
                }) : function(elem) {
                  return fn(elem, 0, args);
                };
              }
              return fn;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: markFunction(function(selector) {
              var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
              return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                while (i2--) {
                  if (elem = unmatched[i2]) {
                    seed[i2] = !(matches2[i2] = elem);
                  }
                }
              }) : function(elem, _context, xml) {
                input[0] = elem;
                matcher(input, null, xml, results);
                input[0] = null;
                return !results.pop();
              };
            }),
            has: markFunction(function(selector) {
              return function(elem) {
                return find(selector, elem).length > 0;
              };
            }),
            contains: markFunction(function(text) {
              text = text.replace(runescape, funescape);
              return function(elem) {
                return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // https://www.w3.org/TR/selectors/#lang-pseudo
            lang: markFunction(function(lang) {
              if (!ridentifier.test(lang || "")) {
                find.error("unsupported lang: " + lang);
              }
              lang = lang.replace(runescape, funescape).toLowerCase();
              return function(elem) {
                var elemLang;
                do {
                  if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                    elemLang = elemLang.toLowerCase();
                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                  }
                } while ((elem = elem.parentNode) && elem.nodeType === 1);
                return false;
              };
            }),
            // Miscellaneous
            target: function(elem) {
              var hash = window2.location && window2.location.hash;
              return hash && hash.slice(1) === elem.id;
            },
            root: function(elem) {
              return elem === documentElement2;
            },
            focus: function(elem) {
              return elem === safeActiveElement() && document2.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
            },
            // Boolean properties
            enabled: createDisabledPseudo(false),
            disabled: createDisabledPseudo(true),
            checked: function(elem) {
              return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
            },
            selected: function(elem) {
              if (elem.parentNode) {
                elem.parentNode.selectedIndex;
              }
              return elem.selected === true;
            },
            // Contents
            empty: function(elem) {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                if (elem.nodeType < 6) {
                  return false;
                }
              }
              return true;
            },
            parent: function(elem) {
              return !Expr.pseudos.empty(elem);
            },
            // Element/input types
            header: function(elem) {
              return rheader.test(elem.nodeName);
            },
            input: function(elem) {
              return rinputs.test(elem.nodeName);
            },
            button: function(elem) {
              return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
            },
            text: function(elem) {
              var attr;
              return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear
              // with elem.type === "text"
              ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
            },
            // Position-in-collection
            first: createPositionalPseudo(function() {
              return [0];
            }),
            last: createPositionalPseudo(function(_matchIndexes, length) {
              return [length - 1];
            }),
            eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
              return [argument < 0 ? argument + length : argument];
            }),
            even: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 0;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            odd: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 1;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            lt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2;
              if (argument < 0) {
                i2 = argument + length;
              } else if (argument > length) {
                i2 = length;
              } else {
                i2 = argument;
              }
              for (; --i2 >= 0; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            gt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2 = argument < 0 ? argument + length : argument;
              for (; ++i2 < length; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            })
          }
        };
        Expr.pseudos.nth = Expr.pseudos.eq;
        for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
          Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in { submit: true, reset: true }) {
          Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {
        }
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        function tokenize(selector, parseOnly) {
          var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
          if (cached) {
            return parseOnly ? 0 : cached.slice(0);
          }
          soFar = selector;
          groups = [];
          preFilters = Expr.preFilter;
          while (soFar) {
            if (!matched || (match = rcomma.exec(soFar))) {
              if (match) {
                soFar = soFar.slice(match[0].length) || soFar;
              }
              groups.push(tokens = []);
            }
            matched = false;
            if (match = rleadingCombinator.exec(soFar)) {
              matched = match.shift();
              tokens.push({
                value: matched,
                // Cast descendant combinators to space
                type: match[0].replace(rtrimCSS, " ")
              });
              soFar = soFar.slice(matched.length);
            }
            for (type in Expr.filter) {
              if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type,
                  matches: match
                });
                soFar = soFar.slice(matched.length);
              }
            }
            if (!matched) {
              break;
            }
          }
          if (parseOnly) {
            return soFar.length;
          }
          return soFar ? find.error(selector) : (
            // Cache the tokens
            tokenCache(selector, groups).slice(0)
          );
        }
        function toSelector(tokens) {
          var i2 = 0, len = tokens.length, selector = "";
          for (; i2 < len; i2++) {
            selector += tokens[i2].value;
          }
          return selector;
        }
        function addCombinator(matcher, combinator, base) {
          var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
          return combinator.first ? (
            // Check against closest ancestor/preceding element
            function(elem, context, xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  return matcher(elem, context, xml);
                }
              }
              return false;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(elem, context, xml) {
              var oldCache, outerCache, newCache = [dirruns, doneName];
              if (xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              } else {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    if (skip && nodeName(elem, skip)) {
                      elem = elem[dir2] || elem;
                    } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                      return newCache[2] = oldCache[2];
                    } else {
                      outerCache[key] = newCache;
                      if (newCache[2] = matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                }
              }
              return false;
            }
          );
        }
        function elementMatcher(matchers) {
          return matchers.length > 1 ? function(elem, context, xml) {
            var i2 = matchers.length;
            while (i2--) {
              if (!matchers[i2](elem, context, xml)) {
                return false;
              }
            }
            return true;
          } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
          var i2 = 0, len = contexts.length;
          for (; i2 < len; i2++) {
            find(selector, contexts[i2], results);
          }
          return results;
        }
        function condense(unmatched, map, filter, context, xml) {
          var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
          for (; i2 < len; i2++) {
            if (elem = unmatched[i2]) {
              if (!filter || filter(elem, context, xml)) {
                newUnmatched.push(elem);
                if (mapped) {
                  map.push(i2);
                }
              }
            }
          }
          return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
          if (postFilter && !postFilter[expando]) {
            postFilter = setMatcher(postFilter);
          }
          if (postFinder && !postFinder[expando]) {
            postFinder = setMatcher(postFinder, postSelector);
          }
          return markFunction(function(seed, results, context, xml) {
            var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
              selector || "*",
              context.nodeType ? [context] : context,
              []
            ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
            if (matcher) {
              matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                // ...intermediate processing is necessary
                []
              ) : (
                // ...otherwise use results directly
                results
              );
              matcher(matcherIn, matcherOut, context, xml);
            } else {
              matcherOut = matcherIn;
            }
            if (postFilter) {
              temp = condense(matcherOut, postMap);
              postFilter(temp, [], context, xml);
              i2 = temp.length;
              while (i2--) {
                if (elem = temp[i2]) {
                  matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                }
              }
            }
            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  temp = [];
                  i2 = matcherOut.length;
                  while (i2--) {
                    if (elem = matcherOut[i2]) {
                      temp.push(matcherIn[i2] = elem);
                    }
                  }
                  postFinder(null, matcherOut = [], temp, xml);
                }
                i2 = matcherOut.length;
                while (i2--) {
                  if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
                    seed[temp] = !(results[temp] = elem);
                  }
                }
              }
            } else {
              matcherOut = condense(
                matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
              );
              if (postFinder) {
                postFinder(null, results, matcherOut, xml);
              } else {
                push2.apply(results, matcherOut);
              }
            }
          });
        }
        function matcherFromTokens(tokens) {
          var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
            return indexOf.call(checkContext, elem) > -1;
          }, implicitRelative, true), matchers = [function(elem, context, xml) {
            var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
          for (; i2 < len; i2++) {
            if (matcher = Expr.relative[tokens[i2].type]) {
              matchers = [addCombinator(elementMatcher(matchers), matcher)];
            } else {
              matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
              if (matcher[expando]) {
                j = ++i2;
                for (; j < len; j++) {
                  if (Expr.relative[tokens[j].type]) {
                    break;
                  }
                }
                return setMatcher(
                  i2 > 1 && elementMatcher(matchers),
                  i2 > 1 && toSelector(
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                  ).replace(rtrimCSS, "$1"),
                  matcher,
                  i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                  j < len && matcherFromTokens(tokens = tokens.slice(j)),
                  j < len && toSelector(tokens)
                );
              }
              matchers.push(matcher);
            }
          }
          return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
            var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
            if (outermost) {
              outermostContext = context == document2 || context || outermost;
            }
            for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument != document2) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while (matcher = elementMatchers[j++]) {
                  if (matcher(elem, context || document2, xml)) {
                    push2.call(results, elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if (elem = !matcher && elem) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i2;
            if (bySet && i2 !== matchedCount) {
              j = 0;
              while (matcher = setMatchers[j++]) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i2--) {
                    if (!(unmatched[i2] || setMatched[i2])) {
                      setMatched[i2] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push2.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                jQuery.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
          return bySet ? markFunction(superMatcher) : superMatcher;
        }
        function compile(selector, match) {
          var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
          if (!cached) {
            if (!match) {
              match = tokenize(selector);
            }
            i2 = match.length;
            while (i2--) {
              cached = matcherFromTokens(match[i2]);
              if (cached[expando]) {
                setMatchers.push(cached);
              } else {
                elementMatchers.push(cached);
              }
            }
            cached = compilerCache(
              selector,
              matcherFromGroupMatchers(elementMatchers, setMatchers)
            );
            cached.selector = selector;
          }
          return cached;
        }
        function select(selector, context, results, seed) {
          var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
          results = results || [];
          if (match.length === 1) {
            tokens = match[0] = match[0].slice(0);
            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
              context = (Expr.find.ID(
                token.matches[0].replace(runescape, funescape),
                context
              ) || [])[0];
              if (!context) {
                return results;
              } else if (compiled) {
                context = context.parentNode;
              }
              selector = selector.slice(tokens.shift().value.length);
            }
            i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
            while (i2--) {
              token = tokens[i2];
              if (Expr.relative[type = token.type]) {
                break;
              }
              if (find2 = Expr.find[type]) {
                if (seed = find2(
                  token.matches[0].replace(runescape, funescape),
                  rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                )) {
                  tokens.splice(i2, 1);
                  selector = seed.length && toSelector(tokens);
                  if (!selector) {
                    push2.apply(results, seed);
                    return results;
                  }
                  break;
                }
              }
            }
          }
          (compiled || compile(selector, match))(
            seed,
            context,
            !documentIsHTML,
            results,
            !context || rsibling.test(selector) && testContext(context.parentNode) || context
          );
          return results;
        }
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        setDocument();
        support.sortDetached = assert(function(el) {
          return el.compareDocumentPosition(document2.createElement("fieldset")) & 1;
        });
        jQuery.find = find;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.unique = jQuery.uniqueSort;
        find.compile = compile;
        find.select = select;
        find.setDocument = setDocument;
        find.tokenize = tokenize;
        find.escape = jQuery.escapeSelector;
        find.getText = jQuery.text;
        find.isXML = jQuery.isXMLDoc;
        find.selectors = jQuery.expr;
        find.support = jQuery.support;
        find.uniqueSort = jQuery.uniqueSort;
      })();
      var dir = function(elem, dir2, until) {
        var matched = [], truncate = until !== void 0;
        while ((elem = elem[dir2]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery(elem).is(until)) {
              break;
            }
            matched.push(elem);
          }
        }
        return matched;
      };
      var siblings = function(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }
        return matched;
      };
      var rneedsContext = jQuery.expr.match.needsContext;
      var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
          return jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          });
        }
        if (qualifier.nodeType) {
          return jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
          });
        }
        if (typeof qualifier !== "string") {
          return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
          });
        }
        return jQuery.filter(qualifier, elements, not);
      }
      jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
          expr = ":not(" + expr + ")";
        }
        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
        }
        return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
          return elem2.nodeType === 1;
        }));
      };
      jQuery.fn.extend({
        find: function(selector) {
          var i, ret, len = this.length, self = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery(selector).filter(function() {
              for (i = 0; i < len; i++) {
                if (jQuery.contains(self[i], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          for (i = 0; i < len; i++) {
            jQuery.find(selector, self[i], ret);
          }
          return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
          return !!winnow(
            this,
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [],
            false
          ).length;
        }
      });
      var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
        var match, elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery ? context[0] : context;
              jQuery.merge(this, jQuery.parseHTML(
                match[1],
                context && context.nodeType ? context.ownerDocument || context : document,
                true
              ));
              if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                for (match in context) {
                  if (isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document.getElementById(match[2]);
              if (elem) {
                this[0] = elem;
                this.length = 1;
              }
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (isFunction(selector)) {
          return root.ready !== void 0 ? root.ready(selector) : (
            // Execute immediately if ready is not present
            selector(jQuery)
          );
        }
        return jQuery.makeArray(selector, this);
      };
      init.prototype = jQuery.fn;
      rootjQuery = jQuery(document);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
      jQuery.fn.extend({
        has: function(target) {
          var targets = jQuery(target, this), l = targets.length;
          return this.filter(function() {
            var i = 0;
            for (; i < l; i++) {
              if (jQuery.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        closest: function(selectors, context) {
          var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                  // Don't pass non-elements to jQuery#find
                  cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors)
                ))) {
                  matched.push(cur);
                  break;
                }
              }
            }
          }
          return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function(elem) {
          if (!elem) {
            return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          }
          if (typeof elem === "string") {
            return indexOf.call(jQuery(elem), this[0]);
          }
          return indexOf.call(
            this,
            // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem
          );
        },
        add: function(selector, context) {
          return this.pushStack(
            jQuery.uniqueSort(
              jQuery.merge(this.get(), jQuery(selector, context))
            )
          );
        },
        addBack: function(selector) {
          return this.add(
            selector == null ? this.prevObject : this.prevObject.filter(selector)
          );
        }
      });
      function sibling(cur, dir2) {
        while ((cur = cur[dir2]) && cur.nodeType !== 1) {
        }
        return cur;
      }
      jQuery.each({
        parent: function(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
          return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
          return siblings(elem.firstChild);
        },
        contents: function(elem) {
          if (elem.contentDocument != null && // Support: IE 11+
          // <object> elements with no `data` attribute has an object
          // `contentDocument` with a `null` prototype.
          getProto(elem.contentDocument)) {
            return elem.contentDocument;
          }
          if (nodeName(elem, "template")) {
            elem = elem.content || elem;
          }
          return jQuery.merge([], elem.childNodes);
        }
      }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
          var matched = jQuery.map(this, fn, until);
          if (name.slice(-5) !== "Until") {
            selector = until;
          }
          if (selector && typeof selector === "string") {
            matched = jQuery.filter(selector, matched);
          }
          if (this.length > 1) {
            if (!guaranteedUnique[name]) {
              jQuery.uniqueSort(matched);
            }
            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }
          return this.pushStack(matched);
        };
      });
      var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
      function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
          object[flag] = true;
        });
        return object;
      }
      jQuery.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
          locked = locked || options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        }, self = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery.each(args, function(_, arg) {
                  if (isFunction(arg)) {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && toType(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire();
              }
            }
            return this;
          },
          // Remove a callback from the list
          remove: function() {
            jQuery.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          // Check if a given callback is in the list.
          // If no argument is given, return whether or not list has callbacks attached.
          has: function(fn) {
            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
          },
          // Remove all callbacks from the list
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          // Disable .fire and .add
          // Abort any current/pending executions
          // Clear all callbacks and values
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          // Disable .fire
          // Also disable .add unless we have memory (since it would have no effect)
          // Abort any pending executions
          lock: function() {
            locked = queue = [];
            if (!memory && !firing) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          // Call all callbacks with the given context and arguments
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          // Call all the callbacks with the given arguments
          fire: function() {
            self.fireWith(this, arguments);
            return this;
          },
          // To know if the callbacks have already been called at least once
          fired: function() {
            return !!fired;
          }
        };
        return self;
      };
      function Identity(v) {
        return v;
      }
      function Thrower(ex) {
        throw ex;
      }
      function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
          if (value && isFunction(method = value.promise)) {
            method.call(value).done(resolve).fail(reject);
          } else if (value && isFunction(method = value.then)) {
            method.call(value, resolve, reject);
          } else {
            resolve.apply(void 0, [value].slice(noValue));
          }
        } catch (value2) {
          reject.apply(void 0, [value2]);
        }
      }
      jQuery.extend({
        Deferred: function(func) {
          var tuples = [
            // action, add listener, callbacks,
            // ... .then handlers, argument index, [final state]
            [
              "notify",
              "progress",
              jQuery.Callbacks("memory"),
              jQuery.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              jQuery.Callbacks("once memory"),
              jQuery.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              jQuery.Callbacks("once memory"),
              jQuery.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ], state = "pending", promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            "catch": function(fn) {
              return promise.then(null, fn);
            },
            // Keep pipe for back-compat
            pipe: function() {
              var fns = arguments;
              return jQuery.Deferred(function(newDefer) {
                jQuery.each(tuples, function(_i, tuple) {
                  var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](
                        this,
                        fn ? [returned] : arguments
                      );
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve(depth, deferred2, handler, special) {
                return function() {
                  var that = this, args = arguments, mightThrow = function() {
                    var returned, then;
                    if (depth < maxDepth) {
                      return;
                    }
                    returned = handler.apply(that, args);
                    if (returned === deferred2.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    then = returned && // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    (typeof returned === "object" || typeof returned === "function") && returned.then;
                    if (isFunction(then)) {
                      if (special) {
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special)
                        );
                      } else {
                        maxDepth++;
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special),
                          resolve(
                            maxDepth,
                            deferred2,
                            Identity,
                            deferred2.notifyWith
                          )
                        );
                      }
                    } else {
                      if (handler !== Identity) {
                        that = void 0;
                        args = [returned];
                      }
                      (special || deferred2.resolveWith)(that, args);
                    }
                  }, process = special ? mightThrow : function() {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (jQuery.Deferred.exceptionHook) {
                        jQuery.Deferred.exceptionHook(
                          e,
                          process.error
                        );
                      }
                      if (depth + 1 >= maxDepth) {
                        if (handler !== Thrower) {
                          that = void 0;
                          args = [e];
                        }
                        deferred2.rejectWith(that, args);
                      }
                    }
                  };
                  if (depth) {
                    process();
                  } else {
                    if (jQuery.Deferred.getErrorHook) {
                      process.error = jQuery.Deferred.getErrorHook();
                    } else if (jQuery.Deferred.getStackHook) {
                      process.error = jQuery.Deferred.getStackHook();
                    }
                    window2.setTimeout(process);
                  }
                };
              }
              return jQuery.Deferred(function(newDefer) {
                tuples[0][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onProgress) ? onProgress : Identity,
                    newDefer.notifyWith
                  )
                );
                tuples[1][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onFulfilled) ? onFulfilled : Identity
                  )
                );
                tuples[2][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onRejected) ? onRejected : Thrower
                  )
                );
              }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function(obj) {
              return obj != null ? jQuery.extend(obj, promise) : promise;
            }
          }, deferred = {};
          jQuery.each(tuples, function(i, tuple) {
            var list = tuple[2], stateString = tuple[5];
            promise[tuple[1]] = list.add;
            if (stateString) {
              list.add(
                function() {
                  state = stateString;
                },
                // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i][2].disable,
                // rejected_handlers.disable
                // fulfilled_handlers.disable
                tuples[3 - i][3].disable,
                // progress_callbacks.lock
                tuples[0][2].lock,
                // progress_handlers.lock
                tuples[0][3].lock
              );
            }
            list.add(tuple[3].fire);
            deferred[tuple[0]] = function() {
              deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
              return this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
          });
          promise.promise(deferred);
          if (func) {
            func.call(deferred, deferred);
          }
          return deferred;
        },
        // Deferred helper
        when: function(singleValue) {
          var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i2) {
            return function(value) {
              resolveContexts[i2] = this;
              resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
              if (!--remaining) {
                primary.resolveWith(resolveContexts, resolveValues);
              }
            };
          };
          if (remaining <= 1) {
            adoptValue(
              singleValue,
              primary.done(updateFunc(i)).resolve,
              primary.reject,
              !remaining
            );
            if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
              return primary.then();
            }
          }
          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), primary.reject);
          }
          return primary.promise();
        }
      });
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      jQuery.Deferred.exceptionHook = function(error, asyncError) {
        if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
          window2.console.warn(
            "jQuery.Deferred exception: " + error.message,
            error.stack,
            asyncError
          );
        }
      };
      jQuery.readyException = function(error) {
        window2.setTimeout(function() {
          throw error;
        });
      };
      var readyList = jQuery.Deferred();
      jQuery.fn.ready = function(fn) {
        readyList.then(fn).catch(function(error) {
          jQuery.readyException(error);
        });
        return this;
      };
      jQuery.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(wait) {
          if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
            return;
          }
          jQuery.isReady = true;
          if (wait !== true && --jQuery.readyWait > 0) {
            return;
          }
          readyList.resolveWith(document, [jQuery]);
        }
      });
      jQuery.ready.then = readyList.then;
      function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window2.removeEventListener("load", completed);
        jQuery.ready();
      }
      if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
        window2.setTimeout(jQuery.ready);
      } else {
        document.addEventListener("DOMContentLoaded", completed);
        window2.addEventListener("load", completed);
      }
      var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        if (toType(key) === "object") {
          chainable = true;
          for (i in key) {
            access(elems, fn, i, key[i], true, emptyGet, raw);
          }
        } else if (value !== void 0) {
          chainable = true;
          if (!isFunction(value)) {
            raw = true;
          }
          if (bulk) {
            if (raw) {
              fn.call(elems, value);
              fn = null;
            } else {
              bulk = fn;
              fn = function(elem, _key, value2) {
                return bulk.call(jQuery(elem), value2);
              };
            }
          }
          if (fn) {
            for (; i < len; i++) {
              fn(
                elems[i],
                key,
                raw ? value : value.call(elems[i], i, fn(elems[i], key))
              );
            }
          }
        }
        if (chainable) {
          return elems;
        }
        if (bulk) {
          return fn.call(elems);
        }
        return len ? fn(elems[0], key) : emptyGet;
      };
      var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
      function fcamelCase(_all, letter) {
        return letter.toUpperCase();
      }
      function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      }
      var acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
      };
      function Data() {
        this.expando = jQuery.expando + Data.uid++;
      }
      Data.uid = 1;
      Data.prototype = {
        cache: function(owner) {
          var value = owner[this.expando];
          if (!value) {
            value = {};
            if (acceptData(owner)) {
              if (owner.nodeType) {
                owner[this.expando] = value;
              } else {
                Object.defineProperty(owner, this.expando, {
                  value,
                  configurable: true
                });
              }
            }
          }
          return value;
        },
        set: function(owner, data, value) {
          var prop, cache = this.cache(owner);
          if (typeof data === "string") {
            cache[camelCase(data)] = value;
          } else {
            for (prop in data) {
              cache[camelCase(prop)] = data[prop];
            }
          }
          return cache;
        },
        get: function(owner, key) {
          return key === void 0 ? this.cache(owner) : (
            // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)]
          );
        },
        access: function(owner, key, value) {
          if (key === void 0 || key && typeof key === "string" && value === void 0) {
            return this.get(owner, key);
          }
          this.set(owner, key, value);
          return value !== void 0 ? value : key;
        },
        remove: function(owner, key) {
          var i, cache = owner[this.expando];
          if (cache === void 0) {
            return;
          }
          if (key !== void 0) {
            if (Array.isArray(key)) {
              key = key.map(camelCase);
            } else {
              key = camelCase(key);
              key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
            }
            i = key.length;
            while (i--) {
              delete cache[key[i]];
            }
          }
          if (key === void 0 || jQuery.isEmptyObject(cache)) {
            if (owner.nodeType) {
              owner[this.expando] = void 0;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function(owner) {
          var cache = owner[this.expando];
          return cache !== void 0 && !jQuery.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data();
      var dataUser = new Data();
      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
      function getData(data) {
        if (data === "true") {
          return true;
        }
        if (data === "false") {
          return false;
        }
        if (data === "null") {
          return null;
        }
        if (data === +data + "") {
          return +data;
        }
        if (rbrace.test(data)) {
          return JSON.parse(data);
        }
        return data;
      }
      function dataAttr(elem, key, data) {
        var name;
        if (data === void 0 && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);
          if (typeof data === "string") {
            try {
              data = getData(data);
            } catch (e) {
            }
            dataUser.set(elem, key, data);
          } else {
            data = void 0;
          }
        }
        return data;
      }
      jQuery.extend({
        hasData: function(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
          return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
          dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery.fn.extend({
        data: function(key, value) {
          var i, name, data, elem = this[0], attrs = elem && elem.attributes;
          if (key === void 0) {
            if (this.length) {
              data = dataUser.get(elem);
              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;
                while (i--) {
                  if (attrs[i]) {
                    name = attrs[i].name;
                    if (name.indexOf("data-") === 0) {
                      name = camelCase(name.slice(5));
                      dataAttr(elem, name, data[name]);
                    }
                  }
                }
                dataPriv.set(elem, "hasDataAttrs", true);
              }
            }
            return data;
          }
          if (typeof key === "object") {
            return this.each(function() {
              dataUser.set(this, key);
            });
          }
          return access(this, function(value2) {
            var data2;
            if (elem && value2 === void 0) {
              data2 = dataUser.get(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              data2 = dataAttr(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              return;
            }
            this.each(function() {
              dataUser.set(this, key, value2);
            });
          }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
          return this.each(function() {
            dataUser.remove(this, key);
          });
        }
      });
      jQuery.extend({
        queue: function(elem, type, data) {
          var queue;
          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);
            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery.makeArray(data));
              } else {
                queue.push(data);
              }
            }
            return queue || [];
          }
        },
        dequeue: function(elem, type) {
          type = type || "fx";
          var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
            jQuery.dequeue(elem, type);
          };
          if (fn === "inprogress") {
            fn = queue.shift();
            startLength--;
          }
          if (fn) {
            if (type === "fx") {
              queue.unshift("inprogress");
            }
            delete hooks.stop;
            fn.call(elem, next, hooks);
          }
          if (!startLength && hooks) {
            hooks.empty.fire();
          }
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery.Callbacks("once memory").add(function() {
              dataPriv.remove(elem, [type + "queue", key]);
            })
          });
        }
      });
      jQuery.fn.extend({
        queue: function(type, data) {
          var setter = 2;
          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }
          if (arguments.length < setter) {
            return jQuery.queue(this[0], type);
          }
          return data === void 0 ? this : this.each(function() {
            var queue = jQuery.queue(this, type, data);
            jQuery._queueHooks(this, type);
            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery.dequeue(this, type);
            }
          });
        },
        dequeue: function(type) {
          return this.each(function() {
            jQuery.dequeue(this, type);
          });
        },
        clearQueue: function(type) {
          return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
          var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
            if (!--count) {
              defer.resolveWith(elements, [elements]);
            }
          };
          if (typeof type !== "string") {
            obj = type;
            type = void 0;
          }
          type = type || "fx";
          while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");
            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve);
            }
          }
          resolve();
          return defer.promise(obj);
        }
      });
      var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var documentElement = document.documentElement;
      var isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem);
      }, composed = { composed: true };
      if (documentElement.getRootNode) {
        isAttached = function(elem) {
          return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
        };
      }
      var isHiddenWithinTree = function(elem, el) {
        elem = el || elem;
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery.css(elem, "display") === "none";
      };
      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
          initial = initial / 2;
          unit = unit || initialInUnit[3];
          initialInUnit = +initial || 1;
          while (maxIterations--) {
            jQuery.style(elem, prop, initialInUnit + unit);
            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
              maxIterations = 0;
            }
            initialInUnit = initialInUnit / scale;
          }
          initialInUnit = initialInUnit * 2;
          jQuery.style(elem, prop, initialInUnit + unit);
          valueParts = valueParts || [];
        }
        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0;
          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
          }
        }
        return adjusted;
      }
      var defaultDisplayMap = {};
      function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
        if (display) {
          return display;
        }
        temp = doc.body.appendChild(doc.createElement(nodeName2));
        display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
          display = "block";
        }
        defaultDisplayMap[nodeName2] = display;
        return display;
      }
      function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        for (; index < length; index++) {
          elem = elements[index];
          if (!elem.style) {
            continue;
          }
          display = elem.style.display;
          if (show) {
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = "";
              }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none";
              dataPriv.set(elem, "display", display);
            }
          }
        }
        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }
        return elements;
      }
      jQuery.fn.extend({
        show: function() {
          return showHide(this, true);
        },
        hide: function() {
          return showHide(this);
        },
        toggle: function(state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
          }
          return this.each(function() {
            if (isHiddenWithinTree(this)) {
              jQuery(this).show();
            } else {
              jQuery(this).hide();
            }
          });
        }
      });
      var rcheckableType = /^(?:checkbox|radio)$/i;
      var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
      })();
      var wrapMap = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;
      if (!support.option) {
        wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
      }
      function getAll(context, tag) {
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*");
        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*");
        } else {
          ret = [];
        }
        if (tag === void 0 || tag && nodeName(context, tag)) {
          return jQuery.merge([context], ret);
        }
        return ret;
      }
      function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (; i < l; i++) {
          dataPriv.set(
            elems[i],
            "globalEval",
            !refElements || dataPriv.get(refElements[i], "globalEval")
          );
        }
      }
      var rhtml = /<|&#?\w+;/;
      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for (; i < l; i++) {
          elem = elems[i];
          if (elem || elem === 0) {
            if (toType(elem) === "object") {
              jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem));
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              while (j--) {
                tmp = tmp.lastChild;
              }
              jQuery.merge(nodes, tmp.childNodes);
              tmp = fragment.firstChild;
              tmp.textContent = "";
            }
          }
        }
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) {
          if (selection && jQuery.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }
            continue;
          }
          attached = isAttached(elem);
          tmp = getAll(fragment.appendChild(elem), "script");
          if (attached) {
            setGlobalEval(tmp);
          }
          if (scripts) {
            j = 0;
            while (elem = tmp[j++]) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }
        return fragment;
      }
      var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
      function returnTrue() {
        return true;
      }
      function returnFalse() {
        return false;
      }
      function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if (typeof types === "object") {
          if (typeof selector !== "string") {
            data = data || selector;
            selector = void 0;
          }
          for (type in types) {
            on(elem, type, selector, data, types[type], one);
          }
          return elem;
        }
        if (data == null && fn == null) {
          fn = selector;
          data = selector = void 0;
        } else if (fn == null) {
          if (typeof selector === "string") {
            fn = data;
            data = void 0;
          } else {
            fn = data;
            data = selector;
            selector = void 0;
          }
        }
        if (fn === false) {
          fn = returnFalse;
        } else if (!fn) {
          return elem;
        }
        if (one === 1) {
          origFn = fn;
          fn = function(event) {
            jQuery().off(event);
            return origFn.apply(this, arguments);
          };
          fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
          jQuery.event.add(this, types, fn, data, selector);
        });
      }
      jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
          var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
          if (!acceptData(elem)) {
            return;
          }
          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          }
          if (selector) {
            jQuery.find.matchesSelector(documentElement, selector);
          }
          if (!handler.guid) {
            handler.guid = jQuery.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = /* @__PURE__ */ Object.create(null);
          }
          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function(e) {
              return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
            };
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              continue;
            }
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery.event.special[type] || {};
            handleObj = jQuery.extend({
              type,
              origType,
              data,
              handler,
              guid: handler.guid,
              selector,
              needsContext: selector && jQuery.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0;
              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }
            if (special.add) {
              special.add.call(elem, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            jQuery.event.global[type] = true;
          }
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
          var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
          if (!elemData || !(events = elemData.events)) {
            return;
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              for (type in events) {
                jQuery.event.remove(elem, type + types[t], handler, selector, true);
              }
              continue;
            }
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            while (j--) {
              handleObj = handlers[j];
              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          }
          if (jQuery.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },
        dispatch: function(nativeEvent) {
          var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
          args[0] = event;
          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
          event.delegateTarget = this;
          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          }
          handlerQueue = jQuery.event.handlers.call(this, event, handlers);
          i = 0;
          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;
            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                if (ret !== void 0) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          }
          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }
          return event.result;
        },
        handlers: function(event, handlers) {
          var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
          if (delegateCount && // Support: IE <=9
          // Black-hole SVG <use> instance trees (trac-13180)
          cur.nodeType && // Support: Firefox <=42
          // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
          // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
          // Support: IE 11 only
          // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
          !(event.type === "click" && event.button >= 1)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};
                for (i = 0; i < delegateCount; i++) {
                  handleObj = handlers[i];
                  sel = handleObj.selector + " ";
                  if (matchedSelectors[sel] === void 0) {
                    matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                  }
                  if (matchedSelectors[sel]) {
                    matchedHandlers.push(handleObj);
                  }
                }
                if (matchedHandlers.length) {
                  handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                }
              }
            }
          }
          cur = this;
          if (delegateCount < handlers.length) {
            handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
          }
          return handlerQueue;
        },
        addProp: function(name, hook) {
          Object.defineProperty(jQuery.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction(hook) ? function() {
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            } : function() {
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
            set: function(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value
              });
            }
          });
        },
        fix: function(originalEvent) {
          return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special: {
          load: {
            // Prevent triggered image.load events from bubbling to window.load
            noBubble: true
          },
          click: {
            // Utilize native event to ensure correct state for checkable inputs
            setup: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click", true);
              }
              return false;
            },
            trigger: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click");
              }
              return true;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function(event) {
              var target = event.target;
              return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(event) {
              if (event.result !== void 0 && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      };
      function leverageNative(el, type, isSetup) {
        if (!isSetup) {
          if (dataPriv.get(el, type) === void 0) {
            jQuery.event.add(el, type, returnTrue);
          }
          return;
        }
        dataPriv.set(el, type, false);
        jQuery.event.add(el, type, {
          namespace: false,
          handler: function(event) {
            var result, saved = dataPriv.get(this, type);
            if (event.isTrigger & 1 && this[type]) {
              if (!saved) {
                saved = slice.call(arguments);
                dataPriv.set(this, type, saved);
                this[type]();
                result = dataPriv.get(this, type);
                dataPriv.set(this, type, false);
                if (saved !== result) {
                  event.stopImmediatePropagation();
                  event.preventDefault();
                  return result;
                }
              } else if ((jQuery.event.special[type] || {}).delegateType) {
                event.stopPropagation();
              }
            } else if (saved) {
              dataPriv.set(this, type, jQuery.event.trigger(
                saved[0],
                saved.slice(1),
                this
              ));
              event.stopPropagation();
              event.isImmediatePropagationStopped = returnTrue;
            }
          }
        });
      }
      jQuery.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };
      jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) {
          return new jQuery.Event(src, props);
        }
        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type;
          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
          src.returnValue === false ? returnTrue : returnFalse;
          this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
        } else {
          this.type = src;
        }
        if (props) {
          jQuery.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || Date.now();
        this[jQuery.expando] = true;
      };
      jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = returnTrue;
          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }
          this.stopPropagation();
        }
      };
      jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
      }, jQuery.event.addProp);
      jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
        function focusMappedHandler(nativeEvent) {
          if (document.documentMode) {
            var handle = dataPriv.get(this, "handle"), event = jQuery.event.fix(nativeEvent);
            event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
            event.isSimulated = true;
            handle(nativeEvent);
            if (event.target === event.currentTarget) {
              handle(event);
            }
          } else {
            jQuery.event.simulate(
              delegateType,
              nativeEvent.target,
              jQuery.event.fix(nativeEvent)
            );
          }
        }
        jQuery.event.special[type] = {
          // Utilize native event if possible so blur/focus sequence is correct
          setup: function() {
            var attaches;
            leverageNative(this, type, true);
            if (document.documentMode) {
              attaches = dataPriv.get(this, delegateType);
              if (!attaches) {
                this.addEventListener(delegateType, focusMappedHandler);
              }
              dataPriv.set(this, delegateType, (attaches || 0) + 1);
            } else {
              return false;
            }
          },
          trigger: function() {
            leverageNative(this, type);
            return true;
          },
          teardown: function() {
            var attaches;
            if (document.documentMode) {
              attaches = dataPriv.get(this, delegateType) - 1;
              if (!attaches) {
                this.removeEventListener(delegateType, focusMappedHandler);
                dataPriv.remove(this, delegateType);
              } else {
                dataPriv.set(this, delegateType, attaches);
              }
            } else {
              return false;
            }
          },
          // Suppress native focus or blur if we're currently inside
          // a leveraged native-event stack
          _default: function(event) {
            return dataPriv.get(event.target, type);
          },
          delegateType
        };
        jQuery.event.special[delegateType] = {
          setup: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
            if (!attaches) {
              if (document.documentMode) {
                this.addEventListener(delegateType, focusMappedHandler);
              } else {
                doc.addEventListener(type, focusMappedHandler, true);
              }
            }
            dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
          },
          teardown: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
            if (!attaches) {
              if (document.documentMode) {
                this.removeEventListener(delegateType, focusMappedHandler);
              } else {
                doc.removeEventListener(type, focusMappedHandler, true);
              }
              dataPriv.remove(dataHolder, delegateType);
            } else {
              dataPriv.set(dataHolder, delegateType, attaches);
            }
          }
        };
      });
      jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(orig, fix) {
        jQuery.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function(event) {
            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
            if (!related || related !== target && !jQuery.contains(target, related)) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }
            return ret;
          }
        };
      });
      jQuery.fn.extend({
        on: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
          var handleObj, type;
          if (types && types.preventDefault && types.handleObj) {
            handleObj = types.handleObj;
            jQuery(types.delegateTarget).off(
              handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
              handleObj.selector,
              handleObj.handler
            );
            return this;
          }
          if (typeof types === "object") {
            for (type in types) {
              this.off(type, selector, types[type]);
            }
            return this;
          }
          if (selector === false || typeof selector === "function") {
            fn = selector;
            selector = void 0;
          }
          if (fn === false) {
            fn = returnFalse;
          }
          return this.each(function() {
            jQuery.event.remove(this, types, fn, selector);
          });
        }
      });
      var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return jQuery(elem).children("tbody")[0] || elem;
        }
        return elem;
      }
      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }
      function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
          elem.type = elem.type.slice(5);
        } else {
          elem.removeAttribute("type");
        }
        return elem;
      }
      function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
          return;
        }
        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.get(src);
          events = pdataOld.events;
          if (events) {
            dataPriv.remove(dest, "handle events");
            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery.event.add(dest, type, events[type][i]);
              }
            }
          }
        }
        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery.extend({}, udataOld);
          dataUser.set(dest, udataCur);
        }
      }
      function fixInput(src, dest) {
        var nodeName2 = dest.nodeName.toLowerCase();
        if (nodeName2 === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked;
        } else if (nodeName2 === "input" || nodeName2 === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }
      function domManip(collection, args, callback, ignored) {
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function(index) {
            var self = collection.eq(index);
            if (valueIsFunction) {
              args[0] = value.call(this, index, self.html());
            }
            domManip(self, args, callback, ignored);
          });
        }
        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;
          if (fragment.childNodes.length === 1) {
            fragment = first;
          }
          if (first || ignored) {
            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;
            for (; i < l; i++) {
              node = fragment;
              if (i !== iNoClone) {
                node = jQuery.clone(node, true, true);
                if (hasScripts) {
                  jQuery.merge(scripts, getAll(node, "script"));
                }
              }
              callback.call(collection[i], node, i);
            }
            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument;
              jQuery.map(scripts, restoreScript);
              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];
                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                  if (node.src && (node.type || "").toLowerCase() !== "module") {
                    if (jQuery._evalUrl && !node.noModule) {
                      jQuery._evalUrl(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                      }, doc);
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                  }
                }
              }
            }
          }
        }
        return collection;
      }
      function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
        for (; (node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery.cleanData(getAll(node));
          }
          if (node.parentNode) {
            if (keepData && isAttached(node)) {
              setGlobalEval(getAll(node, "script"));
            }
            node.parentNode.removeChild(node);
          }
        }
        return elem;
      }
      jQuery.extend({
        htmlPrefilter: function(html) {
          return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
          var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
            destElements = getAll(clone);
            srcElements = getAll(elem);
            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          }
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);
              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, clone);
            }
          }
          destElements = getAll(clone, "script");
          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          }
          return clone;
        },
        cleanData: function(elems) {
          var data, elem, type, special = jQuery.event.special, i = 0;
          for (; (elem = elems[i]) !== void 0; i++) {
            if (acceptData(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery.event.remove(elem, type);
                    } else {
                      jQuery.removeEvent(elem, type, data.handle);
                    }
                  }
                }
                elem[dataPriv.expando] = void 0;
              }
              if (elem[dataUser.expando]) {
                elem[dataUser.expando] = void 0;
              }
            }
          }
        }
      });
      jQuery.fn.extend({
        detach: function(selector) {
          return remove(this, selector, true);
        },
        remove: function(selector) {
          return remove(this, selector);
        },
        text: function(value) {
          return access(this, function(value2) {
            return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value2;
              }
            });
          }, null, value, arguments.length);
        },
        append: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty: function() {
          var elem, i = 0;
          for (; (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {
              jQuery.cleanData(getAll(elem, false));
              elem.textContent = "";
            }
          }
          return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function() {
            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        html: function(value) {
          return access(this, function(value2) {
            var elem = this[0] || {}, i = 0, l = this.length;
            if (value2 === void 0 && elem.nodeType === 1) {
              return elem.innerHTML;
            }
            if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
              value2 = jQuery.htmlPrefilter(value2);
              try {
                for (; i < l; i++) {
                  elem = this[i] || {};
                  if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                    elem.innerHTML = value2;
                  }
                }
                elem = 0;
              } catch (e) {
              }
            }
            if (elem) {
              this.empty().append(value2);
            }
          }, null, value, arguments.length);
        },
        replaceWith: function() {
          var ignored = [];
          return domManip(this, arguments, function(elem) {
            var parent = this.parentNode;
            if (jQuery.inArray(this, ignored) < 0) {
              jQuery.cleanData(getAll(this));
              if (parent) {
                parent.replaceChild(elem, this);
              }
            }
          }, ignored);
        }
      });
      jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(name, original) {
        jQuery.fn[name] = function(selector) {
          var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
          for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery(insert[i])[original](elems);
            push.apply(ret, elems.get());
          }
          return this.pushStack(ret);
        };
      });
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
      var rcustomProp = /^--/;
      var getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window2;
        }
        return view.getComputedStyle(elem);
      };
      var swap = function(elem, options, callback) {
        var ret, name, old = {};
        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        for (name in options) {
          elem.style[name] = old[name];
        }
        return ret;
      };
      var rboxStyle = new RegExp(cssExpand.join("|"), "i");
      (function() {
        function computeStyleTests() {
          if (!div) {
            return;
          }
          container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          documentElement.appendChild(container).appendChild(div);
          var divStyle = window2.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";
          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
          div.style.position = "absolute";
          scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
          documentElement.removeChild(container);
          div = null;
        }
        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
        if (!div.style) {
          return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(support, {
          boxSizingReliable: function() {
            computeStyleTests();
            return boxSizingReliableVal;
          },
          pixelBoxStyles: function() {
            computeStyleTests();
            return pixelBoxStylesVal;
          },
          pixelPosition: function() {
            computeStyleTests();
            return pixelPositionVal;
          },
          reliableMarginLeft: function() {
            computeStyleTests();
            return reliableMarginLeftVal;
          },
          scrollboxSize: function() {
            computeStyleTests();
            return scrollboxSizeVal;
          },
          // Support: IE 9 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Behavior in IE 9 is more subtle than in newer versions & it passes
          // some versions of this test; make sure not to make it pass there!
          //
          // Support: Firefox 70+
          // Only Firefox includes border widths
          // in computed dimensions. (gh-4529)
          reliableTrDimensions: function() {
            var table, tr, trChild, trStyle;
            if (reliableTrDimensionsVal == null) {
              table = document.createElement("table");
              tr = document.createElement("tr");
              trChild = document.createElement("div");
              table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
              tr.style.cssText = "box-sizing:content-box;border:1px solid";
              tr.style.height = "1px";
              trChild.style.height = "9px";
              trChild.style.display = "block";
              documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
              trStyle = window2.getComputedStyle(tr);
              reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
              documentElement.removeChild(table);
            }
            return reliableTrDimensionsVal;
          }
        });
      })();
      function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];
          if (isCustomProp && ret) {
            ret = ret.replace(rtrimCSS, "$1") || void 0;
          }
          if (ret === "" && !isAttached(elem)) {
            ret = jQuery.style(elem, name);
          }
          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;
            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
          }
        }
        return ret !== void 0 ? (
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          ret + ""
        ) : ret;
      }
      function addGetHookIf(conditionFn, hookFn) {
        return {
          get: function() {
            if (conditionFn()) {
              delete this.get;
              return;
            }
            return (this.get = hookFn).apply(this, arguments);
          }
        };
      }
      var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document.createElement("div").style, vendorProps = {};
      function vendorPropName(name) {
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while (i--) {
          name = cssPrefixes[i] + capName;
          if (name in emptyStyle) {
            return name;
          }
        }
      }
      function finalPropName(name) {
        var final = jQuery.cssProps[name] || vendorProps[name];
        if (final) {
          return final;
        }
        if (name in emptyStyle) {
          return name;
        }
        return vendorProps[name] = vendorPropName(name) || name;
      }
      var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function setPositiveNumber(_elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? (
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
        ) : value;
      }
      function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
        if (box === (isBorderBox ? "border" : "content")) {
          return 0;
        }
        for (; i < 4; i += 2) {
          if (box === "margin") {
            marginDelta += jQuery.css(elem, box + cssExpand[i], true, styles);
          }
          if (!isBorderBox) {
            delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            if (box !== "padding") {
              delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            } else {
              extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          } else {
            if (box === "content") {
              delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            }
            if (box !== "margin") {
              delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        }
        if (!isBorderBox && computedVal >= 0) {
          delta += Math.max(0, Math.ceil(
            elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
            // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
            // Use an explicit zero to avoid NaN (gh-3964)
          )) || 0;
        }
        return delta + marginDelta;
      }
      function getWidthOrHeight(elem, dimension, extra) {
        var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        if (rnumnonpx.test(val)) {
          if (!extra) {
            return val;
          }
          val = "auto";
        }
        if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
          isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
          valueIsBorderBox = offsetProp in elem;
          if (valueIsBorderBox) {
            val = elem[offsetProp];
          }
        }
        val = parseFloat(val) || 0;
        return val + boxModelAdjustment(
          elem,
          dimension,
          extra || (isBorderBox ? "border" : "content"),
          valueIsBorderBox,
          styles,
          // Provide the current computed size to request scroll gutter calculation (gh-3589)
          val
        ) + "px";
      }
      jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
          opacity: {
            get: function(elem, computed) {
              if (computed) {
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret;
              }
            }
          }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
          animationIterationCount: true,
          aspectRatio: true,
          borderImageSlice: true,
          columnCount: true,
          flexGrow: true,
          flexShrink: true,
          fontWeight: true,
          gridArea: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnStart: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowStart: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          scale: true,
          widows: true,
          zIndex: true,
          zoom: true,
          // SVG-related
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeMiterlimit: true,
          strokeOpacity: true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          }
          var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
          if (value !== void 0) {
            type = typeof value;
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);
              type = "number";
            }
            if (value == null || value !== value) {
              return;
            }
            if (type === "number" && !isCustomProp) {
              value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
            }
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit";
            }
            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
              if (isCustomProp) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }
          } else {
            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
              return ret;
            }
            return style[name];
          }
        },
        css: function(elem, name, extra, styles) {
          var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
          }
          if (val === void 0) {
            val = curCSS(elem, name, styles);
          }
          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          }
          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }
          return val;
        }
      });
      jQuery.each(["height", "width"], function(_i, dimension) {
        jQuery.cssHooks[dimension] = {
          get: function(elem, computed, extra) {
            if (computed) {
              return rdisplayswap.test(jQuery.css(elem, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                return getWidthOrHeight(elem, dimension, extra);
              }) : getWidthOrHeight(elem, dimension, extra);
            }
          },
          set: function(elem, value, extra) {
            var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
              elem,
              dimension,
              extra,
              isBorderBox,
              styles
            ) : 0;
            if (isBorderBox && scrollboxSizeBuggy) {
              subtract -= Math.ceil(
                elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
              );
            }
            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery.css(elem, dimension);
            }
            return setPositiveNumber(elem, value, subtract);
          }
        };
      });
      jQuery.cssHooks.marginLeft = addGetHookIf(
        support.reliableMarginLeft,
        function(elem, computed) {
          if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
              return elem.getBoundingClientRect().left;
            })) + "px";
          }
        }
      );
      jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
          expand: function(value) {
            var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
            for (; i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
            }
            return expanded;
          }
        };
        if (prefix !== "margin") {
          jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
      });
      jQuery.fn.extend({
        css: function(name, value) {
          return access(this, function(elem, name2, value2) {
            var styles, len, map = {}, i = 0;
            if (Array.isArray(name2)) {
              styles = getStyles(elem);
              len = name2.length;
              for (; i < len; i++) {
                map[name2[i]] = jQuery.css(elem, name2[i], false, styles);
              }
              return map;
            }
            return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
          }, name, value, arguments.length > 1);
        }
      });
      function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
      }
      jQuery.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end;
          this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
          var eased, hooks = Tween.propHooks[this.prop];
          if (this.options.duration) {
            this.pos = eased = jQuery.easing[this.easing](
              percent,
              this.options.duration * percent,
              0,
              1,
              this.options.duration
            );
          } else {
            this.pos = eased = percent;
          }
          this.now = (this.end - this.start) * eased + this.start;
          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }
          if (hooks && hooks.set) {
            hooks.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }
          return this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default: {
          get: function(tween) {
            var result;
            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            }
            result = jQuery.css(tween.elem, tween.prop, "");
            return !result || result === "auto" ? 0 : result;
          },
          set: function(tween) {
            if (jQuery.fx.step[tween.prop]) {
              jQuery.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
              jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }
      };
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };
      jQuery.easing = {
        linear: function(p) {
          return p;
        },
        swing: function(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };
      jQuery.fx = Tween.prototype.init;
      jQuery.fx.step = {};
      var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
      function schedule() {
        if (inProgress) {
          if (document.hidden === false && window2.requestAnimationFrame) {
            window2.requestAnimationFrame(schedule);
          } else {
            window2.setTimeout(schedule, jQuery.fx.interval);
          }
          jQuery.fx.tick();
        }
      }
      function createFxNow() {
        window2.setTimeout(function() {
          fxNow = void 0;
        });
        return fxNow = Date.now();
      }
      function genFx(type, includeWidth) {
        var which, i = 0, attrs = { height: type };
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
          attrs.opacity = attrs.width = type;
        }
        return attrs;
      }
      function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for (; index < length; index++) {
          if (tween = collection[index].call(animation, prop, value)) {
            return tween;
          }
        }
      }
      function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
          hooks = jQuery._queueHooks(elem, "fx");
          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function() {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }
          hooks.unqueued++;
          anim.always(function() {
            anim.always(function() {
              hooks.unqueued--;
              if (!jQuery.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        }
        for (prop in props) {
          value = props[prop];
          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {
              if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                hidden = true;
              } else {
                continue;
              }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
          }
        }
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) {
          return;
        }
        if (isBox && elem.nodeType === 1) {
          opts.overflow = [style.overflow, style.overflowX, style.overflowY];
          restoreDisplay = dataShow && dataShow.display;
          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }
          display = jQuery.css(elem, "display");
          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery.css(elem, "display");
              showHide([elem]);
            }
          }
          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery.css(elem, "float") === "none") {
              if (!propTween) {
                anim.done(function() {
                  style.display = restoreDisplay;
                });
                if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display;
                }
              }
              style.display = "inline-block";
            }
          }
        }
        if (opts.overflow) {
          style.overflow = "hidden";
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }
        propTween = false;
        for (prop in orig) {
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
            }
            if (toggle) {
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              showHide([elem], true);
            }
            anim.done(function() {
              if (!hidden) {
                showHide([elem]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery.style(elem, prop, orig[prop]);
              }
            });
          }
          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0;
            }
          }
        }
      }
      function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
          name = camelCase(index);
          easing = specialEasing[name];
          value = props[index];
          if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
          }
          if (index !== name) {
            props[name] = value;
            delete props[index];
          }
          hooks = jQuery.cssHooks[name];
          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];
            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }
      function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
          delete tick.elem;
        }), tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
          for (; index2 < length2; index2++) {
            animation.tweens[index2].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length2) {
            return remaining;
          }
          if (!length2) {
            deferred.notifyWith(elem, [animation, 1, 0]);
          }
          deferred.resolveWith(elem, [animation]);
          return false;
        }, animation = deferred.promise({
          elem,
          props: jQuery.extend({}, properties),
          opts: jQuery.extend(true, {
            specialEasing: {},
            easing: jQuery.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery.Tween(
              elem,
              animation.opts,
              prop,
              end,
              animation.opts.specialEasing[prop] || animation.opts.easing
            );
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
          if (result) {
            if (isFunction(result.stop)) {
              jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
            }
            return result;
          }
        }
        jQuery.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        }
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(
          jQuery.extend(tick, {
            elem,
            anim: animation,
            queue: animation.opts.queue
          })
        );
        return animation;
      }
      jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
          "*": [function(prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          }]
        },
        tweener: function(props, callback) {
          if (isFunction(props)) {
            callback = props;
            props = ["*"];
          } else {
            props = props.match(rnothtmlwhite);
          }
          var prop, index = 0, length = props.length;
          for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
          }
        },
        prefilters: [defaultPrefilter],
        prefilter: function(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });
      jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
          complete: fn || !fn && easing || isFunction(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !isFunction(easing) && easing
        };
        if (jQuery.fx.off) {
          opt.duration = 0;
        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) {
              opt.duration = jQuery.fx.speeds[opt.duration];
            } else {
              opt.duration = jQuery.fx.speeds._default;
            }
          }
        }
        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
          if (isFunction(opt.old)) {
            opt.old.call(this);
          }
          if (opt.queue) {
            jQuery.dequeue(this, opt.queue);
          }
        };
        return opt;
      };
      jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
          return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
          var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
            var anim = Animation(this, jQuery.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
          var stopQueue = function(hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
          };
          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = void 0;
          }
          if (clearQueue) {
            this.queue(type || "fx", []);
          }
          return this.each(function() {
            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            }
            if (dequeue || !gotoEnd) {
              jQuery.dequeue(this, type);
            }
          });
        },
        finish: function(type) {
          if (type !== false) {
            type = type || "fx";
          }
          return this.each(function() {
            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
            data.finish = true;
            jQuery.queue(this, type, []);
            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            }
            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            }
            delete data.finish;
          });
        }
      });
      jQuery.each(["toggle", "show", "hide"], function(_i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
      });
      jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });
      jQuery.timers = [];
      jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        fxNow = Date.now();
        for (; i < timers.length; i++) {
          timer = timers[i];
          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
          }
        }
        if (!timers.length) {
          jQuery.fx.stop();
        }
        fxNow = void 0;
      };
      jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
      };
      jQuery.fx.interval = 13;
      jQuery.fx.start = function() {
        if (inProgress) {
          return;
        }
        inProgress = true;
        schedule();
      };
      jQuery.fx.stop = function() {
        inProgress = null;
      };
      jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
      };
      jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
          var timeout = window2.setTimeout(next, time);
          hooks.stop = function() {
            window2.clearTimeout(timeout);
          };
        });
      };
      (function() {
        var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
      })();
      var boolHook, attrHandle = jQuery.expr.attrHandle;
      jQuery.fn.extend({
        attr: function(name, value) {
          return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
          return this.each(function() {
            jQuery.removeAttr(this, name);
          });
        }
      });
      jQuery.extend({
        attr: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (typeof elem.getAttribute === "undefined") {
            return jQuery.prop(elem, name, value);
          }
          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
          }
          if (value !== void 0) {
            if (value === null) {
              jQuery.removeAttr(elem, name);
              return;
            }
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            elem.setAttribute(name, value + "");
            return value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          ret = jQuery.find.attr(elem, name);
          return ret == null ? void 0 : ret;
        },
        attrHooks: {
          type: {
            set: function(elem, value) {
              if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);
                if (val) {
                  elem.value = val;
                }
                return value;
              }
            }
          }
        },
        removeAttr: function(elem, value) {
          var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
          if (attrNames && elem.nodeType === 1) {
            while (name = attrNames[i++]) {
              elem.removeAttribute(name);
            }
          }
        }
      });
      boolHook = {
        set: function(elem, value, name) {
          if (value === false) {
            jQuery.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }
          return name;
        }
      };
      jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name2, isXML) {
          var ret, handle, lowercaseName = name2.toLowerCase();
          if (!isXML) {
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle;
          }
          return ret;
        };
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
      jQuery.fn.extend({
        prop: function(name, value) {
          return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
          return this.each(function() {
            delete this[jQuery.propFix[name] || name];
          });
        }
      });
      jQuery.extend({
        prop: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            name = jQuery.propFix[name] || name;
            hooks = jQuery.propHooks[name];
          }
          if (value !== void 0) {
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            return elem[name] = value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          return elem[name];
        },
        propHooks: {
          tabIndex: {
            get: function(elem) {
              var tabindex = jQuery.find.attr(elem, "tabindex");
              if (tabindex) {
                return parseInt(tabindex, 10);
              }
              if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                return 0;
              }
              return -1;
            }
          }
        },
        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      });
      if (!support.optSelected) {
        jQuery.propHooks.selected = {
          get: function(elem) {
            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
            return null;
          },
          set: function(elem) {
            var parent = elem.parentNode;
            if (parent) {
              parent.selectedIndex;
              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }
      jQuery.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
      });
      function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
      }
      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
      }
      function classesToArray(value) {
        if (Array.isArray(value)) {
          return value;
        }
        if (typeof value === "string") {
          return value.match(rnothtmlwhite) || [];
        }
        return [];
      }
      jQuery.fn.extend({
        addClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery(this).addClass(value.call(this, j, getClass(this)));
            });
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (cur.indexOf(" " + className + " ") < 0) {
                    cur += className + " ";
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        removeClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery(this).removeClass(value.call(this, j, getClass(this)));
            });
          }
          if (!arguments.length) {
            return this.attr("class", "");
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  while (cur.indexOf(" " + className + " ") > -1) {
                    cur = cur.replace(" " + className + " ", " ");
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        toggleClass: function(value, stateVal) {
          var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
          if (isFunction(value)) {
            return this.each(function(i2) {
              jQuery(this).toggleClass(
                value.call(this, i2, getClass(this), stateVal),
                stateVal
              );
            });
          }
          if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }
          classNames = classesToArray(value);
          return this.each(function() {
            if (isValidValue) {
              self = jQuery(this);
              for (i = 0; i < classNames.length; i++) {
                className = classNames[i];
                if (self.hasClass(className)) {
                  self.removeClass(className);
                } else {
                  self.addClass(className);
                }
              }
            } else if (value === void 0 || type === "boolean") {
              className = getClass(this);
              if (className) {
                dataPriv.set(this, "__className__", className);
              }
              if (this.setAttribute) {
                this.setAttribute(
                  "class",
                  className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                );
              }
            }
          });
        },
        hasClass: function(selector) {
          var className, elem, i = 0;
          className = " " + selector + " ";
          while (elem = this[i++]) {
            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true;
            }
          }
          return false;
        }
      });
      var rreturn = /\r/g;
      jQuery.fn.extend({
        val: function(value) {
          var hooks, ret, valueIsFunction, elem = this[0];
          if (!arguments.length) {
            if (elem) {
              hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
              if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                return ret;
              }
              ret = elem.value;
              if (typeof ret === "string") {
                return ret.replace(rreturn, "");
              }
              return ret == null ? "" : ret;
            }
            return;
          }
          valueIsFunction = isFunction(value);
          return this.each(function(i) {
            var val;
            if (this.nodeType !== 1) {
              return;
            }
            if (valueIsFunction) {
              val = value.call(this, i, jQuery(this).val());
            } else {
              val = value;
            }
            if (val == null) {
              val = "";
            } else if (typeof val === "number") {
              val += "";
            } else if (Array.isArray(val)) {
              val = jQuery.map(val, function(value2) {
                return value2 == null ? "" : value2 + "";
              });
            }
            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
              this.value = val;
            }
          });
        }
      });
      jQuery.extend({
        valHooks: {
          option: {
            get: function(elem) {
              var val = jQuery.find.attr(elem, "value");
              return val != null ? val : (
                // Support: IE <=10 - 11 only
                // option.text throws exceptions (trac-14686, trac-14858)
                // Strip and collapse whitespace
                // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                stripAndCollapse(jQuery.text(elem))
              );
            }
          },
          select: {
            get: function(elem) {
              var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
              if (index < 0) {
                i = max;
              } else {
                i = one ? index : 0;
              }
              for (; i < max; i++) {
                option = options[i];
                if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                  value = jQuery(option).val();
                  if (one) {
                    return value;
                  }
                  values.push(value);
                }
              }
              return values;
            },
            set: function(elem, value) {
              var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
              while (i--) {
                option = options[i];
                if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                  optionSet = true;
                }
              }
              if (!optionSet) {
                elem.selectedIndex = -1;
              }
              return values;
            }
          }
        }
      });
      jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {
          set: function(elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
            }
          }
        };
        if (!support.checkOn) {
          jQuery.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      });
      var location = window2.location;
      var nonce = { guid: Date.now() };
      var rquery = /\?/;
      jQuery.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") {
          return null;
        }
        try {
          xml = new window2.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
        }
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) {
          jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
          }).join("\n") : data));
        }
        return xml;
      };
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
      };
      jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
          var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = lastElement = tmp = elem = elem || document;
          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          }
          if (rfocusMorph.test(type + jQuery.event.triggered)) {
            return;
          }
          if (type.indexOf(".") > -1) {
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }
          ontype = type.indexOf(":") < 0 && "on" + type;
          event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          event.result = void 0;
          if (!event.target) {
            event.target = elem;
          }
          data = data == null ? [event] : jQuery.makeArray(data, [event]);
          special = jQuery.event.special[type] || {};
          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          }
          if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
            }
          }
          i = 0;
          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ? bubbleType : special.bindType || type;
            handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
            if (handle) {
              handle.apply(cur, data);
            }
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);
              if (event.result === false) {
                event.preventDefault();
              }
            }
          }
          event.type = type;
          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                tmp = elem[ontype];
                if (tmp) {
                  elem[ontype] = null;
                }
                jQuery.event.triggered = type;
                if (event.isPropagationStopped()) {
                  lastElement.addEventListener(type, stopPropagationCallback);
                }
                elem[type]();
                if (event.isPropagationStopped()) {
                  lastElement.removeEventListener(type, stopPropagationCallback);
                }
                jQuery.event.triggered = void 0;
                if (tmp) {
                  elem[ontype] = tmp;
                }
              }
            }
          }
          return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(type, elem, event) {
          var e = jQuery.extend(
            new jQuery.Event(),
            event,
            {
              type,
              isSimulated: true
            }
          );
          jQuery.event.trigger(e, null, elem);
        }
      });
      jQuery.fn.extend({
        trigger: function(type, data) {
          return this.each(function() {
            jQuery.event.trigger(type, data, this);
          });
        },
        triggerHandler: function(type, data) {
          var elem = this[0];
          if (elem) {
            return jQuery.event.trigger(type, data, elem, true);
          }
        }
      });
      var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
      function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) {
          jQuery.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) {
              add(prefix, v);
            } else {
              buildParams(
                prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                v,
                traditional,
                add
              );
            }
          });
        } else if (!traditional && toType(obj) === "object") {
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
          }
        } else {
          add(prefix, obj);
        }
      }
      jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
          var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) {
          return "";
        }
        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
          jQuery.each(a, function() {
            add(this.name, this.value);
          });
        } else {
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
          }
        }
        return s.join("&");
      };
      jQuery.fn.extend({
        serialize: function() {
          return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var elements = jQuery.prop(this, "elements");
            return elements ? jQuery.makeArray(elements) : this;
          }).filter(function() {
            var type = this.type;
            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
          }).map(function(_i, elem) {
            var val = jQuery(this).val();
            if (val == null) {
              return null;
            }
            if (Array.isArray(val)) {
              return jQuery.map(val, function(val2) {
                return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
              });
            }
            return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
          }).get();
        }
      });
      var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document.createElement("a");
      originAnchor.href = location.href;
      function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }
          var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
          if (isFunction(func)) {
            while (dataType = dataTypes[i++]) {
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func);
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      }
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      }
      function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
          if (src[key] !== void 0) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
          }
        }
        if (deep) {
          jQuery.extend(true, target, deep);
        }
        return target;
      }
      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
          dataTypes.shift();
          if (ct === void 0) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        }
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        }
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }
            if (!firstDataType) {
              firstDataType = type;
            }
          }
          finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }
          return responses[finalDataType];
        }
      }
      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }
        current = dataTypes.shift();
        while (current) {
          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
          }
          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
          }
          prev = current;
          current = dataTypes.shift();
          if (current) {
            if (current === "*") {
              current = prev;
            } else if (prev !== "*" && prev !== current) {
              conv = converters[prev + " " + current] || converters["* " + current];
              if (!conv) {
                for (conv2 in converters) {
                  tmp = conv2.split(" ");
                  if (tmp[1] === current) {
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                    if (conv) {
                      if (conv === true) {
                        conv = converters[conv2];
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }
                      break;
                    }
                  }
                }
              }
              if (conv !== true) {
                if (conv && s.throws) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: conv ? e : "No conversion from " + prev + " to " + current
                    };
                  }
                }
              }
            }
          }
        }
        return { state: "success", data: response };
      }
      jQuery.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location.protocol),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          /*
          timeout: 0,
          data: null,
          dataType: null,
          username: null,
          password: null,
          cache: null,
          throws: false,
          traditional: false,
          headers: {},
          */
          accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          // Data converters
          // Keys separate source (or catchall "*") and destination types with a single space
          converters: {
            // Convert anything to text
            "* text": String,
            // Text to html (true = no transformation)
            "text html": true,
            // Evaluate text as a json expression
            "text json": JSON.parse,
            // Parse text as xml
            "text xml": jQuery.parseXML
          },
          // For options that shouldn't be deep extended:
          // you can add your own custom options here if
          // and when you create one that shouldn't be
          // deep extended (see ajaxExtend)
          flatOptions: {
            url: true,
            context: true
          }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(target, settings) {
          return settings ? (
            // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)
          ) : (
            // Extending ajaxSettings
            ajaxExtend(jQuery.ajaxSettings, target)
          );
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
          if (typeof url === "object") {
            options = url;
            url = void 0;
          }
          options = options || {};
          var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function(key) {
              var match;
              if (completed2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while (match = rheaders.exec(responseHeadersString)) {
                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  }
                }
                match = responseHeaders[key.toLowerCase() + " "];
              }
              return match == null ? null : match.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function() {
              return completed2 ? responseHeadersString : null;
            },
            // Caches the header
            setRequestHeader: function(name, value) {
              if (completed2 == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            // Overrides response content-type header
            overrideMimeType: function(type) {
              if (completed2 == null) {
                s.mimeType = type;
              }
              return this;
            },
            // Status-dependent callbacks
            statusCode: function(map) {
              var code;
              if (map) {
                if (completed2) {
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                }
              }
              return this;
            },
            // Cancel the request
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
          deferred.promise(jqXHR);
          s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
          s.type = options.method || options.type || s.method || s.type;
          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
          if (s.crossDomain == null) {
            urlAnchor = document.createElement("a");
            try {
              urlAnchor.href = s.url;
              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {
              s.crossDomain = true;
            }
          }
          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery.param(s.data, s.traditional);
          }
          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
          if (completed2) {
            return jqXHR;
          }
          fireGlobals = jQuery.event && s.global;
          if (fireGlobals && jQuery.active++ === 0) {
            jQuery.event.trigger("ajaxStart");
          }
          s.type = s.type.toUpperCase();
          s.hasContent = !rnoContent.test(s.type);
          cacheURL = s.url.replace(rhash, "");
          if (!s.hasContent) {
            uncached = s.url.slice(cacheURL.length);
            if (s.data && (s.processData || typeof s.data === "string")) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
              delete s.data;
            }
            if (s.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
            }
            s.url = cacheURL + uncached;
          } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
          }
          if (s.ifModified) {
            if (jQuery.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
            }
            if (jQuery.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
          }
          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          }
          jqXHR.setRequestHeader(
            "Accept",
            s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
          );
          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          }
          if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
            return jqXHR.abort();
          }
          strAbort = "abort";
          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error);
          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1;
            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            }
            if (completed2) {
              return jqXHR;
            }
            if (s.async && s.timeout > 0) {
              timeoutTimer = window2.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s.timeout);
            }
            try {
              completed2 = false;
              transport.send(requestHeaders, done);
            } catch (e) {
              if (completed2) {
                throw e;
              }
              done(-1, e);
            }
          }
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
            if (completed2) {
              return;
            }
            completed2 = true;
            if (timeoutTimer) {
              window2.clearTimeout(timeoutTimer);
            }
            transport = void 0;
            responseHeadersString = headers || "";
            jqXHR.readyState = status > 0 ? 4 : 0;
            isSuccess = status >= 200 && status < 300 || status === 304;
            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            }
            if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) {
              s.converters["text script"] = function() {
              };
            }
            response = ajaxConvert(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery.lastModified[cacheURL] = modified;
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery.etag[cacheURL] = modified;
                }
              }
              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent";
              } else if (status === 304) {
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error;
              }
            } else {
              error = statusText;
              if (status || !statusText) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = void 0;
            if (fireGlobals) {
              globalEventContext.trigger(
                isSuccess ? "ajaxSuccess" : "ajaxError",
                [jqXHR, s, isSuccess ? success : error]
              );
            }
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!--jQuery.active) {
                jQuery.event.trigger("ajaxStop");
              }
            }
          }
          return jqXHR;
        },
        getJSON: function(url, data, callback) {
          return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
          return jQuery.get(url, void 0, callback, "script");
        }
      });
      jQuery.each(["get", "post"], function(_i, method) {
        jQuery[method] = function(url, data, callback, type) {
          if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = void 0;
          }
          return jQuery.ajax(jQuery.extend({
            url,
            type: method,
            dataType: type,
            data,
            success: callback
          }, jQuery.isPlainObject(url) && url));
        };
      });
      jQuery.ajaxPrefilter(function(s) {
        var i;
        for (i in s.headers) {
          if (i.toLowerCase() === "content-type") {
            s.contentType = s.headers[i] || "";
          }
        }
      });
      jQuery._evalUrl = function(url, options, doc) {
        return jQuery.ajax({
          url,
          // Make this explicit, since user can override this through ajaxSetup (trac-11264)
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          // Only evaluate the response if it is successful (gh-4126)
          // dataFilter is not invoked for failure responses, so using it instead
          // of the default converter is kludgy but it works.
          converters: {
            "text script": function() {
            }
          },
          dataFilter: function(response) {
            jQuery.globalEval(response, options, doc);
          }
        });
      };
      jQuery.fn.extend({
        wrapAll: function(html) {
          var wrap;
          if (this[0]) {
            if (isFunction(html)) {
              html = html.call(this[0]);
            }
            wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }
            wrap.map(function() {
              var elem = this;
              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }
              return elem;
            }).append(this);
          }
          return this;
        },
        wrapInner: function(html) {
          if (isFunction(html)) {
            return this.each(function(i) {
              jQuery(this).wrapInner(html.call(this, i));
            });
          }
          return this.each(function() {
            var self = jQuery(this), contents = self.contents();
            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self.append(html);
            }
          });
        },
        wrap: function(html) {
          var htmlIsFunction = isFunction(html);
          return this.each(function(i) {
            jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
          });
        },
        unwrap: function(selector) {
          this.parent(selector).not("body").each(function() {
            jQuery(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });
      jQuery.expr.pseudos.hidden = function(elem) {
        return !jQuery.expr.pseudos.visible(elem);
      };
      jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };
      jQuery.ajaxSettings.xhr = function() {
        try {
          return new window2.XMLHttpRequest();
        } catch (e) {
        }
      };
      var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      }, xhrSupported = jQuery.ajaxSettings.xhr();
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function(headers, complete) {
              var i, xhr = options.xhr();
              xhr.open(
                options.type,
                options.url,
                options.async,
                options.username,
                options.password
              );
              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              }
              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              }
              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              }
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
              callback = function(type) {
                return function() {
                  if (callback) {
                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete(
                          // File: protocol always yields status 0; see trac-8605, trac-14207
                          xhr.status,
                          xhr.statusText
                        );
                      }
                    } else {
                      complete(
                        xhrSuccessStatus[xhr.status] || xhr.status,
                        xhr.statusText,
                        // Support: IE <=9 only
                        // IE9 has no XHR2 but throws on binary (trac-11426)
                        // For XHR2 non-text, let the caller handle it (gh-2498)
                        (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                        xhr.getAllResponseHeaders()
                      );
                    }
                  }
                };
              };
              xhr.onload = callback();
              errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
              if (xhr.onabort !== void 0) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    window2.setTimeout(function() {
                      if (callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              }
              callback = callback("abort");
              try {
                xhr.send(options.hasContent && options.data || null);
              } catch (e) {
                if (callback) {
                  throw e;
                }
              }
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      jQuery.ajaxPrefilter(function(s) {
        if (s.crossDomain) {
          s.contents.script = false;
        }
      });
      jQuery.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(text) {
            jQuery.globalEval(text);
            return text;
          }
        }
      });
      jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === void 0) {
          s.cache = false;
        }
        if (s.crossDomain) {
          s.type = "GET";
        }
      });
      jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain || s.scriptAttrs) {
          var script, callback;
          return {
            send: function(_, complete) {
              script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                script.remove();
                callback = null;
                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type);
                }
              });
              document.head.appendChild(script[0]);
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
          this[callback] = true;
          return callback;
        }
      });
      jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
          callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
          }
          s.converters["script json"] = function() {
            if (!responseContainer) {
              jQuery.error(callbackName + " was not called");
            }
            return responseContainer[0];
          };
          s.dataTypes[0] = "json";
          overwritten = window2[callbackName];
          window2[callbackName] = function() {
            responseContainer = arguments;
          };
          jqXHR.always(function() {
            if (overwritten === void 0) {
              jQuery(window2).removeProp(callbackName);
            } else {
              window2[callbackName] = overwritten;
            }
            if (s[callbackName]) {
              s.jsonpCallback = originalSettings.jsonpCallback;
              oldCallbacks.push(callbackName);
            }
            if (responseContainer && isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }
            responseContainer = overwritten = void 0;
          });
          return "script";
        }
      });
      support.createHTMLDocument = function() {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      }();
      jQuery.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }
        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }
        var base, parsed, scripts;
        if (!context) {
          if (support.createHTMLDocument) {
            context = document.implementation.createHTMLDocument("");
            base = context.createElement("base");
            base.href = document.location.href;
            context.head.appendChild(base);
          } else {
            context = document;
          }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
          return [context.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
          jQuery(scripts).remove();
        }
        return jQuery.merge([], parsed.childNodes);
      };
      jQuery.fn.load = function(url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        }
        if (isFunction(params)) {
          callback = params;
          params = void 0;
        } else if (params && typeof params === "object") {
          type = "POST";
        }
        if (self.length > 0) {
          jQuery.ajax({
            url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {
            response = arguments;
            self.html(selector ? (
              // If a selector was specified, locate the right elements in a dummy div
              // Exclude scripts to avoid IE 'Permission Denied' errors
              jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector)
            ) : (
              // Otherwise use the full result
              responseText
            ));
          }).always(callback && function(jqXHR, status) {
            self.each(function() {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          });
        }
        return this;
      };
      jQuery.expr.pseudos.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
          return elem === fn.elem;
        }).length;
      };
      jQuery.offset = {
        setOffset: function(elem, options, i) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
          if (position === "static") {
            elem.style.position = "relative";
          }
          curOffset = curElem.offset();
          curCSSTop = jQuery.css(elem, "top");
          curCSSLeft = jQuery.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }
          if (isFunction(options)) {
            options = options.call(elem, i, jQuery.extend({}, curOffset));
          }
          if (options.top != null) {
            props.top = options.top - curOffset.top + curTop;
          }
          if (options.left != null) {
            props.left = options.left - curOffset.left + curLeft;
          }
          if ("using" in options) {
            options.using.call(elem, props);
          } else {
            curElem.css(props);
          }
        }
      };
      jQuery.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(options) {
          if (arguments.length) {
            return options === void 0 ? this : this.each(function(i) {
              jQuery.offset.setOffset(this, options, i);
            });
          }
          var rect, win, elem = this[0];
          if (!elem) {
            return;
          }
          if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
          }
          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
          };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
          if (!this[0]) {
            return;
          }
          var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
          if (jQuery.css(elem, "position") === "fixed") {
            offset = elem.getBoundingClientRect();
          } else {
            offset = this.offset();
            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;
            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.parentNode;
            }
            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
              parentOffset = jQuery(offsetParent).offset();
              parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
              parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
            }
          }
          return {
            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
          };
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
          return this.map(function() {
            var offsetParent = this.offsetParent;
            while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || documentElement;
          });
        }
      });
      jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
          return access(this, function(elem, method2, val2) {
            var win;
            if (isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }
            if (val2 === void 0) {
              return win ? win[prop] : elem[method2];
            }
            if (win) {
              win.scrollTo(
                !top ? val2 : win.pageXOffset,
                top ? val2 : win.pageYOffset
              );
            } else {
              elem[method2] = val2;
            }
          }, method, val, arguments.length);
        };
      });
      jQuery.each(["top", "left"], function(_i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(
          support.pixelPosition,
          function(elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop);
              return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
          }
        );
      });
      jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
        jQuery.each({
          padding: "inner" + name,
          content: type,
          "": "outer" + name
        }, function(defaultExtra, funcName) {
          jQuery.fn[funcName] = function(margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function(elem, type2, value2) {
              var doc;
              if (isWindow(elem)) {
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
              }
              if (elem.nodeType === 9) {
                doc = elem.documentElement;
                return Math.max(
                  elem.body["scroll" + name],
                  doc["scroll" + name],
                  elem.body["offset" + name],
                  doc["offset" + name],
                  doc["client" + name]
                );
              }
              return value2 === void 0 ? (
                // Get width or height on the element, requesting but not forcing parseFloat
                jQuery.css(elem, type2, extra)
              ) : (
                // Set width or height on the element
                jQuery.style(elem, type2, value2, extra)
              );
            }, type, chainable ? margin : void 0, chainable);
          };
        });
      });
      jQuery.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(_i, type) {
        jQuery.fn[type] = function(fn) {
          return this.on(type, fn);
        };
      });
      jQuery.fn.extend({
        bind: function(types, data, fn) {
          return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
          return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
          return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
          return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
        }
      });
      jQuery.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(_i, name) {
          jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
          };
        }
      );
      var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      jQuery.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
          tmp = fn[context];
          context = fn;
          fn = tmp;
        }
        if (!isFunction(fn)) {
          return void 0;
        }
        args = slice.call(arguments, 2);
        proxy = function() {
          return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        return proxy;
      };
      jQuery.holdReady = function(hold) {
        if (hold) {
          jQuery.readyWait++;
        } else {
          jQuery.ready(true);
        }
      };
      jQuery.isArray = Array.isArray;
      jQuery.parseJSON = JSON.parse;
      jQuery.nodeName = nodeName;
      jQuery.isFunction = isFunction;
      jQuery.isWindow = isWindow;
      jQuery.camelCase = camelCase;
      jQuery.type = toType;
      jQuery.now = Date.now;
      jQuery.isNumeric = function(obj) {
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
      };
      jQuery.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "$1");
      };
      if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
          return jQuery;
        });
      }
      var _jQuery = window2.jQuery, _$ = window2.$;
      jQuery.noConflict = function(deep) {
        if (window2.$ === jQuery) {
          window2.$ = _$;
        }
        if (deep && window2.jQuery === jQuery) {
          window2.jQuery = _jQuery;
        }
        return jQuery;
      };
      if (typeof noGlobal === "undefined") {
        window2.jQuery = window2.$ = jQuery;
      }
      return jQuery;
    });
  }
});

// src/recipes/single.ts
var import_jquery = __toESM(require_jquery());
(0, import_jquery.default)(function() {
  let steps = [];
  (0, import_jquery.default)(".steps li").each(function(index) {
    const step = (0, import_jquery.default)(this).text();
    if (step !== "\u83DC\u8C31\u4E00\u89C8" && step !== "\u83DC\u8C31\u603B\u7ED3")
      steps.push(step);
  });
  const e = (0, import_jquery.default)("#cookbook-begin");
  e.attr(
    "src",
    e.attr("src") + "&steps=" + encodeURIComponent(JSON.stringify(steps))
  );
  const observer = new MutationObserver(function(mutationsList, observer2) {
    for (let mutation of mutationsList) {
      if ((0, import_jquery.default)(mutation.target).attr("selected")) {
        if ((0, import_jquery.default)(mutation.target).text() == "\u83DC\u8C31\u4E00\u89C8") {
          iframeRefresh("#cookbook-begin");
        }
        if ((0, import_jquery.default)(mutation.target).text() == "\u83DC\u8C31\u603B\u7ED3") {
          iframeRefresh("#cookbook-end");
        }
      }
    }
  });
  (0, import_jquery.default)(".steps li").each(function(index) {
    observer.observe((0, import_jquery.default)(this).get(0), {
      attributes: true
    });
  });
});
function iframeRefresh(e) {
  var c = (0, import_jquery.default)(e);
  c.attr("src", c.attr("src"));
}
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.7.1
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-08-28T13:37Z
   *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyIsICIuLi8uLi9zcmMvcmVjaXBlcy9zaW5nbGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIVxuICogalF1ZXJ5IEphdmFTY3JpcHQgTGlicmFyeSB2My43LjFcbiAqIGh0dHBzOi8vanF1ZXJ5LmNvbS9cbiAqXG4gKiBDb3B5cmlnaHQgT3BlbkpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMjMtMDgtMjhUMTM6MzdaXG4gKi9cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRpZiAoIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0Ly8gRm9yIENvbW1vbkpTIGFuZCBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB3aGVyZSBhIHByb3BlciBgd2luZG93YFxuXHRcdC8vIGlzIHByZXNlbnQsIGV4ZWN1dGUgdGhlIGZhY3RvcnkgYW5kIGdldCBqUXVlcnkuXG5cdFx0Ly8gRm9yIGVudmlyb25tZW50cyB0aGF0IGRvIG5vdCBoYXZlIGEgYHdpbmRvd2Agd2l0aCBhIGBkb2N1bWVudGBcblx0XHQvLyAoc3VjaCBhcyBOb2RlLmpzKSwgZXhwb3NlIGEgZmFjdG9yeSBhcyBtb2R1bGUuZXhwb3J0cy5cblx0XHQvLyBUaGlzIGFjY2VudHVhdGVzIHRoZSBuZWVkIGZvciB0aGUgY3JlYXRpb24gb2YgYSByZWFsIGB3aW5kb3dgLlxuXHRcdC8vIGUuZy4gdmFyIGpRdWVyeSA9IHJlcXVpcmUoXCJqcXVlcnlcIikod2luZG93KTtcblx0XHQvLyBTZWUgdGlja2V0IHRyYWMtMTQ1NDkgZm9yIG1vcmUgaW5mby5cblx0XHRtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5kb2N1bWVudCA/XG5cdFx0XHRmYWN0b3J5KCBnbG9iYWwsIHRydWUgKSA6XG5cdFx0XHRmdW5jdGlvbiggdyApIHtcblx0XHRcdFx0aWYgKCAhdy5kb2N1bWVudCApIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZhY3RvcnkoIHcgKTtcblx0XHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeSggZ2xvYmFsICk7XG5cdH1cblxuLy8gUGFzcyB0aGlzIGlmIHdpbmRvdyBpcyBub3QgZGVmaW5lZCB5ZXRcbn0gKSggdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCB3aW5kb3csIG5vR2xvYmFsICkge1xuXG4vLyBFZGdlIDw9IDEyIC0gMTMrLCBGaXJlZm94IDw9MTggLSA0NSssIElFIDEwIC0gMTEsIFNhZmFyaSA1LjEgLSA5KywgaU9TIDYgLSA5LjFcbi8vIHRocm93IGV4Y2VwdGlvbnMgd2hlbiBub24tc3RyaWN0IGNvZGUgKGUuZy4sIEFTUC5ORVQgNC41KSBhY2Nlc3NlcyBzdHJpY3QgbW9kZVxuLy8gYXJndW1lbnRzLmNhbGxlZS5jYWxsZXIgKHRyYWMtMTMzMzUpLiBCdXQgYXMgb2YgalF1ZXJ5IDMuMCAoMjAxNiksIHN0cmljdCBtb2RlIHNob3VsZCBiZSBjb21tb25cbi8vIGVub3VnaCB0aGF0IGFsbCBzdWNoIGF0dGVtcHRzIGFyZSBndWFyZGVkIGluIGEgdHJ5IGJsb2NrLlxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhcnIgPSBbXTtcblxudmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG52YXIgc2xpY2UgPSBhcnIuc2xpY2U7XG5cbnZhciBmbGF0ID0gYXJyLmZsYXQgPyBmdW5jdGlvbiggYXJyYXkgKSB7XG5cdHJldHVybiBhcnIuZmxhdC5jYWxsKCBhcnJheSApO1xufSA6IGZ1bmN0aW9uKCBhcnJheSApIHtcblx0cmV0dXJuIGFyci5jb25jYXQuYXBwbHkoIFtdLCBhcnJheSApO1xufTtcblxuXG52YXIgcHVzaCA9IGFyci5wdXNoO1xuXG52YXIgaW5kZXhPZiA9IGFyci5pbmRleE9mO1xuXG52YXIgY2xhc3MydHlwZSA9IHt9O1xuXG52YXIgdG9TdHJpbmcgPSBjbGFzczJ0eXBlLnRvU3RyaW5nO1xuXG52YXIgaGFzT3duID0gY2xhc3MydHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGZuVG9TdHJpbmcgPSBoYXNPd24udG9TdHJpbmc7XG5cbnZhciBPYmplY3RGdW5jdGlvblN0cmluZyA9IGZuVG9TdHJpbmcuY2FsbCggT2JqZWN0ICk7XG5cbnZhciBzdXBwb3J0ID0ge307XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbiggb2JqICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9NTcsIEZpcmVmb3ggPD01MlxuXHRcdC8vIEluIHNvbWUgYnJvd3NlcnMsIHR5cGVvZiByZXR1cm5zIFwiZnVuY3Rpb25cIiBmb3IgSFRNTCA8b2JqZWN0PiBlbGVtZW50c1xuXHRcdC8vIChpLmUuLCBgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwib2JqZWN0XCIgKSA9PT0gXCJmdW5jdGlvblwiYCkuXG5cdFx0Ly8gV2UgZG9uJ3Qgd2FudCB0byBjbGFzc2lmeSAqYW55KiBET00gbm9kZSBhcyBhIGZ1bmN0aW9uLlxuXHRcdC8vIFN1cHBvcnQ6IFF0V2ViIDw9My44LjUsIFdlYktpdCA8PTUzNC4zNCwgd2todG1sdG9wZGYgdG9vbCA8PTAuMTIuNVxuXHRcdC8vIFBsdXMgZm9yIG9sZCBXZWJLaXQsIHR5cGVvZiByZXR1cm5zIFwiZnVuY3Rpb25cIiBmb3IgSFRNTCBjb2xsZWN0aW9uc1xuXHRcdC8vIChlLmcuLCBgdHlwZW9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpID09PSBcImZ1bmN0aW9uXCJgKS4gKGdoLTQ3NTYpXG5cdFx0cmV0dXJuIHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygb2JqLm5vZGVUeXBlICE9PSBcIm51bWJlclwiICYmXG5cdFx0XHR0eXBlb2Ygb2JqLml0ZW0gIT09IFwiZnVuY3Rpb25cIjtcblx0fTtcblxuXG52YXIgaXNXaW5kb3cgPSBmdW5jdGlvbiBpc1dpbmRvdyggb2JqICkge1xuXHRcdHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmogPT09IG9iai53aW5kb3c7XG5cdH07XG5cblxudmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG5cblxuXHR2YXIgcHJlc2VydmVkU2NyaXB0QXR0cmlidXRlcyA9IHtcblx0XHR0eXBlOiB0cnVlLFxuXHRcdHNyYzogdHJ1ZSxcblx0XHRub25jZTogdHJ1ZSxcblx0XHRub01vZHVsZTogdHJ1ZVxuXHR9O1xuXG5cdGZ1bmN0aW9uIERPTUV2YWwoIGNvZGUsIG5vZGUsIGRvYyApIHtcblx0XHRkb2MgPSBkb2MgfHwgZG9jdW1lbnQ7XG5cblx0XHR2YXIgaSwgdmFsLFxuXHRcdFx0c2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoIFwic2NyaXB0XCIgKTtcblxuXHRcdHNjcmlwdC50ZXh0ID0gY29kZTtcblx0XHRpZiAoIG5vZGUgKSB7XG5cdFx0XHRmb3IgKCBpIGluIHByZXNlcnZlZFNjcmlwdEF0dHJpYnV0ZXMgKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA2NCssIEVkZ2UgMTgrXG5cdFx0XHRcdC8vIFNvbWUgYnJvd3NlcnMgZG9uJ3Qgc3VwcG9ydCB0aGUgXCJub25jZVwiIHByb3BlcnR5IG9uIHNjcmlwdHMuXG5cdFx0XHRcdC8vIE9uIHRoZSBvdGhlciBoYW5kLCBqdXN0IHVzaW5nIGBnZXRBdHRyaWJ1dGVgIGlzIG5vdCBlbm91Z2ggYXNcblx0XHRcdFx0Ly8gdGhlIGBub25jZWAgYXR0cmlidXRlIGlzIHJlc2V0IHRvIGFuIGVtcHR5IHN0cmluZyB3aGVuZXZlciBpdFxuXHRcdFx0XHQvLyBiZWNvbWVzIGJyb3dzaW5nLWNvbnRleHQgY29ubmVjdGVkLlxuXHRcdFx0XHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy8yMzY5XG5cdFx0XHRcdC8vIFNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNub25jZS1hdHRyaWJ1dGVzXG5cdFx0XHRcdC8vIFRoZSBgbm9kZS5nZXRBdHRyaWJ1dGVgIGNoZWNrIHdhcyBhZGRlZCBmb3IgdGhlIHNha2Ugb2Zcblx0XHRcdFx0Ly8gYGpRdWVyeS5nbG9iYWxFdmFsYCBzbyB0aGF0IGl0IGNhbiBmYWtlIGEgbm9uY2UtY29udGFpbmluZyBub2RlXG5cdFx0XHRcdC8vIHZpYSBhbiBvYmplY3QuXG5cdFx0XHRcdHZhbCA9IG5vZGVbIGkgXSB8fCBub2RlLmdldEF0dHJpYnV0ZSAmJiBub2RlLmdldEF0dHJpYnV0ZSggaSApO1xuXHRcdFx0XHRpZiAoIHZhbCApIHtcblx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKCBpLCB2YWwgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRkb2MuaGVhZC5hcHBlbmRDaGlsZCggc2NyaXB0ICkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggc2NyaXB0ICk7XG5cdH1cblxuXG5mdW5jdGlvbiB0b1R5cGUoIG9iaiApIHtcblx0aWYgKCBvYmogPT0gbnVsbCApIHtcblx0XHRyZXR1cm4gb2JqICsgXCJcIjtcblx0fVxuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD0yLjMgb25seSAoZnVuY3Rpb25pc2ggUmVnRXhwKVxuXHRyZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIgP1xuXHRcdGNsYXNzMnR5cGVbIHRvU3RyaW5nLmNhbGwoIG9iaiApIF0gfHwgXCJvYmplY3RcIiA6XG5cdFx0dHlwZW9mIG9iajtcbn1cbi8qIGdsb2JhbCBTeW1ib2wgKi9cbi8vIERlZmluaW5nIHRoaXMgZ2xvYmFsIGluIC5lc2xpbnRyYy5qc29uIHdvdWxkIGNyZWF0ZSBhIGRhbmdlciBvZiB1c2luZyB0aGUgZ2xvYmFsXG4vLyB1bmd1YXJkZWQgaW4gYW5vdGhlciBwbGFjZSwgaXQgc2VlbXMgc2FmZXIgdG8gZGVmaW5lIGdsb2JhbCBvbmx5IGZvciB0aGlzIG1vZHVsZVxuXG5cblxudmFyIHZlcnNpb24gPSBcIjMuNy4xXCIsXG5cblx0cmh0bWxTdWZmaXggPSAvSFRNTCQvaSxcblxuXHQvLyBEZWZpbmUgYSBsb2NhbCBjb3B5IG9mIGpRdWVyeVxuXHRqUXVlcnkgPSBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbnRleHQgKSB7XG5cblx0XHQvLyBUaGUgalF1ZXJ5IG9iamVjdCBpcyBhY3R1YWxseSBqdXN0IHRoZSBpbml0IGNvbnN0cnVjdG9yICdlbmhhbmNlZCdcblx0XHQvLyBOZWVkIGluaXQgaWYgalF1ZXJ5IGlzIGNhbGxlZCAoanVzdCBhbGxvdyBlcnJvciB0byBiZSB0aHJvd24gaWYgbm90IGluY2x1ZGVkKVxuXHRcdHJldHVybiBuZXcgalF1ZXJ5LmZuLmluaXQoIHNlbGVjdG9yLCBjb250ZXh0ICk7XG5cdH07XG5cbmpRdWVyeS5mbiA9IGpRdWVyeS5wcm90b3R5cGUgPSB7XG5cblx0Ly8gVGhlIGN1cnJlbnQgdmVyc2lvbiBvZiBqUXVlcnkgYmVpbmcgdXNlZFxuXHRqcXVlcnk6IHZlcnNpb24sXG5cblx0Y29uc3RydWN0b3I6IGpRdWVyeSxcblxuXHQvLyBUaGUgZGVmYXVsdCBsZW5ndGggb2YgYSBqUXVlcnkgb2JqZWN0IGlzIDBcblx0bGVuZ3RoOiAwLFxuXG5cdHRvQXJyYXk6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzbGljZS5jYWxsKCB0aGlzICk7XG5cdH0sXG5cblx0Ly8gR2V0IHRoZSBOdGggZWxlbWVudCBpbiB0aGUgbWF0Y2hlZCBlbGVtZW50IHNldCBPUlxuXHQvLyBHZXQgdGhlIHdob2xlIG1hdGNoZWQgZWxlbWVudCBzZXQgYXMgYSBjbGVhbiBhcnJheVxuXHRnZXQ6IGZ1bmN0aW9uKCBudW0gKSB7XG5cblx0XHQvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBpbiBhIGNsZWFuIGFycmF5XG5cdFx0aWYgKCBudW0gPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiBzbGljZS5jYWxsKCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIGp1c3QgdGhlIG9uZSBlbGVtZW50IGZyb20gdGhlIHNldFxuXHRcdHJldHVybiBudW0gPCAwID8gdGhpc1sgbnVtICsgdGhpcy5sZW5ndGggXSA6IHRoaXNbIG51bSBdO1xuXHR9LFxuXG5cdC8vIFRha2UgYW4gYXJyYXkgb2YgZWxlbWVudHMgYW5kIHB1c2ggaXQgb250byB0aGUgc3RhY2tcblx0Ly8gKHJldHVybmluZyB0aGUgbmV3IG1hdGNoZWQgZWxlbWVudCBzZXQpXG5cdHB1c2hTdGFjazogZnVuY3Rpb24oIGVsZW1zICkge1xuXG5cdFx0Ly8gQnVpbGQgYSBuZXcgalF1ZXJ5IG1hdGNoZWQgZWxlbWVudCBzZXRcblx0XHR2YXIgcmV0ID0galF1ZXJ5Lm1lcmdlKCB0aGlzLmNvbnN0cnVjdG9yKCksIGVsZW1zICk7XG5cblx0XHQvLyBBZGQgdGhlIG9sZCBvYmplY3Qgb250byB0aGUgc3RhY2sgKGFzIGEgcmVmZXJlbmNlKVxuXHRcdHJldC5wcmV2T2JqZWN0ID0gdGhpcztcblxuXHRcdC8vIFJldHVybiB0aGUgbmV3bHktZm9ybWVkIGVsZW1lbnQgc2V0XG5cdFx0cmV0dXJuIHJldDtcblx0fSxcblxuXHQvLyBFeGVjdXRlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgc2V0LlxuXHRlYWNoOiBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5lYWNoKCB0aGlzLCBjYWxsYmFjayApO1xuXHR9LFxuXG5cdG1hcDogZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5Lm1hcCggdGhpcywgZnVuY3Rpb24oIGVsZW0sIGkgKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbCggZWxlbSwgaSwgZWxlbSApO1xuXHRcdH0gKSApO1xuXHR9LFxuXG5cdHNsaWNlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHNsaWNlLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSApO1xuXHR9LFxuXG5cdGZpcnN0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5lcSggMCApO1xuXHR9LFxuXG5cdGxhc3Q6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmVxKCAtMSApO1xuXHR9LFxuXG5cdGV2ZW46IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5LmdyZXAoIHRoaXMsIGZ1bmN0aW9uKCBfZWxlbSwgaSApIHtcblx0XHRcdHJldHVybiAoIGkgKyAxICkgJSAyO1xuXHRcdH0gKSApO1xuXHR9LFxuXG5cdG9kZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqUXVlcnkuZ3JlcCggdGhpcywgZnVuY3Rpb24oIF9lbGVtLCBpICkge1xuXHRcdFx0cmV0dXJuIGkgJSAyO1xuXHRcdH0gKSApO1xuXHR9LFxuXG5cdGVxOiBmdW5jdGlvbiggaSApIHtcblx0XHR2YXIgbGVuID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRqID0gK2kgKyAoIGkgPCAwID8gbGVuIDogMCApO1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggaiA+PSAwICYmIGogPCBsZW4gPyBbIHRoaXNbIGogXSBdIDogW10gKTtcblx0fSxcblxuXHRlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnByZXZPYmplY3QgfHwgdGhpcy5jb25zdHJ1Y3RvcigpO1xuXHR9LFxuXG5cdC8vIEZvciBpbnRlcm5hbCB1c2Ugb25seS5cblx0Ly8gQmVoYXZlcyBsaWtlIGFuIEFycmF5J3MgbWV0aG9kLCBub3QgbGlrZSBhIGpRdWVyeSBtZXRob2QuXG5cdHB1c2g6IHB1c2gsXG5cdHNvcnQ6IGFyci5zb3J0LFxuXHRzcGxpY2U6IGFyci5zcGxpY2Vcbn07XG5cbmpRdWVyeS5leHRlbmQgPSBqUXVlcnkuZm4uZXh0ZW5kID0gZnVuY3Rpb24oKSB7XG5cdHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSxcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbIDAgXSB8fCB7fSxcblx0XHRpID0gMSxcblx0XHRsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuXHRcdGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICggdHlwZW9mIHRhcmdldCA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0ZGVlcCA9IHRhcmdldDtcblxuXHRcdC8vIFNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbIGkgXSB8fCB7fTtcblx0XHRpKys7XG5cdH1cblxuXHQvLyBIYW5kbGUgY2FzZSB3aGVuIHRhcmdldCBpcyBhIHN0cmluZyBvciBzb21ldGhpbmcgKHBvc3NpYmxlIGluIGRlZXAgY29weSlcblx0aWYgKCB0eXBlb2YgdGFyZ2V0ICE9PSBcIm9iamVjdFwiICYmICFpc0Z1bmN0aW9uKCB0YXJnZXQgKSApIHtcblx0XHR0YXJnZXQgPSB7fTtcblx0fVxuXG5cdC8vIEV4dGVuZCBqUXVlcnkgaXRzZWxmIGlmIG9ubHkgb25lIGFyZ3VtZW50IGlzIHBhc3NlZFxuXHRpZiAoIGkgPT09IGxlbmd0aCApIHtcblx0XHR0YXJnZXQgPSB0aGlzO1xuXHRcdGktLTtcblx0fVxuXG5cdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXG5cdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuXHRcdGlmICggKCBvcHRpb25zID0gYXJndW1lbnRzWyBpIF0gKSAhPSBudWxsICkge1xuXG5cdFx0XHQvLyBFeHRlbmQgdGhlIGJhc2Ugb2JqZWN0XG5cdFx0XHRmb3IgKCBuYW1lIGluIG9wdGlvbnMgKSB7XG5cdFx0XHRcdGNvcHkgPSBvcHRpb25zWyBuYW1lIF07XG5cblx0XHRcdFx0Ly8gUHJldmVudCBPYmplY3QucHJvdG90eXBlIHBvbGx1dGlvblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICggbmFtZSA9PT0gXCJfX3Byb3RvX19cIiB8fCB0YXJnZXQgPT09IGNvcHkgKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0aWYgKCBkZWVwICYmIGNvcHkgJiYgKCBqUXVlcnkuaXNQbGFpbk9iamVjdCggY29weSApIHx8XG5cdFx0XHRcdFx0KCBjb3B5SXNBcnJheSA9IEFycmF5LmlzQXJyYXkoIGNvcHkgKSApICkgKSB7XG5cdFx0XHRcdFx0c3JjID0gdGFyZ2V0WyBuYW1lIF07XG5cblx0XHRcdFx0XHQvLyBFbnN1cmUgcHJvcGVyIHR5cGUgZm9yIHRoZSBzb3VyY2UgdmFsdWVcblx0XHRcdFx0XHRpZiAoIGNvcHlJc0FycmF5ICYmICFBcnJheS5pc0FycmF5KCBzcmMgKSApIHtcblx0XHRcdFx0XHRcdGNsb25lID0gW107XG5cdFx0XHRcdFx0fSBlbHNlIGlmICggIWNvcHlJc0FycmF5ICYmICFqUXVlcnkuaXNQbGFpbk9iamVjdCggc3JjICkgKSB7XG5cdFx0XHRcdFx0XHRjbG9uZSA9IHt9O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjbG9uZSA9IHNyYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcblxuXHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdHRhcmdldFsgbmFtZSBdID0galF1ZXJ5LmV4dGVuZCggZGVlcCwgY2xvbmUsIGNvcHkgKTtcblxuXHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG5cdFx0XHRcdH0gZWxzZSBpZiAoIGNvcHkgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHR0YXJnZXRbIG5hbWUgXSA9IGNvcHk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdC8vIFVuaXF1ZSBmb3IgZWFjaCBjb3B5IG9mIGpRdWVyeSBvbiB0aGUgcGFnZVxuXHRleHBhbmRvOiBcImpRdWVyeVwiICsgKCB2ZXJzaW9uICsgTWF0aC5yYW5kb20oKSApLnJlcGxhY2UoIC9cXEQvZywgXCJcIiApLFxuXG5cdC8vIEFzc3VtZSBqUXVlcnkgaXMgcmVhZHkgd2l0aG91dCB0aGUgcmVhZHkgbW9kdWxlXG5cdGlzUmVhZHk6IHRydWUsXG5cblx0ZXJyb3I6IGZ1bmN0aW9uKCBtc2cgKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBtc2cgKTtcblx0fSxcblxuXHRub29wOiBmdW5jdGlvbigpIHt9LFxuXG5cdGlzUGxhaW5PYmplY3Q6IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0dmFyIHByb3RvLCBDdG9yO1xuXG5cdFx0Ly8gRGV0ZWN0IG9idmlvdXMgbmVnYXRpdmVzXG5cdFx0Ly8gVXNlIHRvU3RyaW5nIGluc3RlYWQgb2YgalF1ZXJ5LnR5cGUgdG8gY2F0Y2ggaG9zdCBvYmplY3RzXG5cdFx0aWYgKCAhb2JqIHx8IHRvU3RyaW5nLmNhbGwoIG9iaiApICE9PSBcIltvYmplY3QgT2JqZWN0XVwiICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHByb3RvID0gZ2V0UHJvdG8oIG9iaiApO1xuXG5cdFx0Ly8gT2JqZWN0cyB3aXRoIG5vIHByb3RvdHlwZSAoZS5nLiwgYE9iamVjdC5jcmVhdGUoIG51bGwgKWApIGFyZSBwbGFpblxuXHRcdGlmICggIXByb3RvICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gT2JqZWN0cyB3aXRoIHByb3RvdHlwZSBhcmUgcGxhaW4gaWZmIHRoZXkgd2VyZSBjb25zdHJ1Y3RlZCBieSBhIGdsb2JhbCBPYmplY3QgZnVuY3Rpb25cblx0XHRDdG9yID0gaGFzT3duLmNhbGwoIHByb3RvLCBcImNvbnN0cnVjdG9yXCIgKSAmJiBwcm90by5jb25zdHJ1Y3Rvcjtcblx0XHRyZXR1cm4gdHlwZW9mIEN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBmblRvU3RyaW5nLmNhbGwoIEN0b3IgKSA9PT0gT2JqZWN0RnVuY3Rpb25TdHJpbmc7XG5cdH0sXG5cblx0aXNFbXB0eU9iamVjdDogZnVuY3Rpb24oIG9iaiApIHtcblx0XHR2YXIgbmFtZTtcblxuXHRcdGZvciAoIG5hbWUgaW4gb2JqICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBFdmFsdWF0ZXMgYSBzY3JpcHQgaW4gYSBwcm92aWRlZCBjb250ZXh0OyBmYWxscyBiYWNrIHRvIHRoZSBnbG9iYWwgb25lXG5cdC8vIGlmIG5vdCBzcGVjaWZpZWQuXG5cdGdsb2JhbEV2YWw6IGZ1bmN0aW9uKCBjb2RlLCBvcHRpb25zLCBkb2MgKSB7XG5cdFx0RE9NRXZhbCggY29kZSwgeyBub25jZTogb3B0aW9ucyAmJiBvcHRpb25zLm5vbmNlIH0sIGRvYyApO1xuXHR9LFxuXG5cdGVhY2g6IGZ1bmN0aW9uKCBvYmosIGNhbGxiYWNrICkge1xuXHRcdHZhciBsZW5ndGgsIGkgPSAwO1xuXG5cdFx0aWYgKCBpc0FycmF5TGlrZSggb2JqICkgKSB7XG5cdFx0XHRsZW5ndGggPSBvYmoubGVuZ3RoO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdGlmICggY2FsbGJhY2suY2FsbCggb2JqWyBpIF0sIGksIG9ialsgaSBdICkgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoIGkgaW4gb2JqICkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrLmNhbGwoIG9ialsgaSBdLCBpLCBvYmpbIGkgXSApID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvYmo7XG5cdH0sXG5cblxuXHQvLyBSZXRyaWV2ZSB0aGUgdGV4dCB2YWx1ZSBvZiBhbiBhcnJheSBvZiBET00gbm9kZXNcblx0dGV4dDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0dmFyIG5vZGUsXG5cdFx0XHRyZXQgPSBcIlwiLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRub2RlVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cblx0XHRpZiAoICFub2RlVHlwZSApIHtcblxuXHRcdFx0Ly8gSWYgbm8gbm9kZVR5cGUsIHRoaXMgaXMgZXhwZWN0ZWQgdG8gYmUgYW4gYXJyYXlcblx0XHRcdHdoaWxlICggKCBub2RlID0gZWxlbVsgaSsrIF0gKSApIHtcblxuXHRcdFx0XHQvLyBEbyBub3QgdHJhdmVyc2UgY29tbWVudCBub2Rlc1xuXHRcdFx0XHRyZXQgKz0galF1ZXJ5LnRleHQoIG5vZGUgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCBub2RlVHlwZSA9PT0gMSB8fCBub2RlVHlwZSA9PT0gMTEgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS50ZXh0Q29udGVudDtcblx0XHR9XG5cdFx0aWYgKCBub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdHJldHVybiBlbGVtLmRvY3VtZW50RWxlbWVudC50ZXh0Q29udGVudDtcblx0XHR9XG5cdFx0aWYgKCBub2RlVHlwZSA9PT0gMyB8fCBub2RlVHlwZSA9PT0gNCApIHtcblx0XHRcdHJldHVybiBlbGVtLm5vZGVWYWx1ZTtcblx0XHR9XG5cblx0XHQvLyBEbyBub3QgaW5jbHVkZSBjb21tZW50IG9yIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24gbm9kZXNcblxuXHRcdHJldHVybiByZXQ7XG5cdH0sXG5cblx0Ly8gcmVzdWx0cyBpcyBmb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxuXHRtYWtlQXJyYXk6IGZ1bmN0aW9uKCBhcnIsIHJlc3VsdHMgKSB7XG5cdFx0dmFyIHJldCA9IHJlc3VsdHMgfHwgW107XG5cblx0XHRpZiAoIGFyciAhPSBudWxsICkge1xuXHRcdFx0aWYgKCBpc0FycmF5TGlrZSggT2JqZWN0KCBhcnIgKSApICkge1xuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIHJldCxcblx0XHRcdFx0XHR0eXBlb2YgYXJyID09PSBcInN0cmluZ1wiID9cblx0XHRcdFx0XHRcdFsgYXJyIF0gOiBhcnJcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHB1c2guY2FsbCggcmV0LCBhcnIgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmV0O1xuXHR9LFxuXG5cdGluQXJyYXk6IGZ1bmN0aW9uKCBlbGVtLCBhcnIsIGkgKSB7XG5cdFx0cmV0dXJuIGFyciA9PSBudWxsID8gLTEgOiBpbmRleE9mLmNhbGwoIGFyciwgZWxlbSwgaSApO1xuXHR9LFxuXG5cdGlzWE1MRG9jOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHR2YXIgbmFtZXNwYWNlID0gZWxlbSAmJiBlbGVtLm5hbWVzcGFjZVVSSSxcblx0XHRcdGRvY0VsZW0gPSBlbGVtICYmICggZWxlbS5vd25lckRvY3VtZW50IHx8IGVsZW0gKS5kb2N1bWVudEVsZW1lbnQ7XG5cblx0XHQvLyBBc3N1bWUgSFRNTCB3aGVuIGRvY3VtZW50RWxlbWVudCBkb2Vzbid0IHlldCBleGlzdCwgc3VjaCBhcyBpbnNpZGVcblx0XHQvLyBkb2N1bWVudCBmcmFnbWVudHMuXG5cdFx0cmV0dXJuICFyaHRtbFN1ZmZpeC50ZXN0KCBuYW1lc3BhY2UgfHwgZG9jRWxlbSAmJiBkb2NFbGVtLm5vZGVOYW1lIHx8IFwiSFRNTFwiICk7XG5cdH0sXG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG5cdC8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0bWVyZ2U6IGZ1bmN0aW9uKCBmaXJzdCwgc2Vjb25kICkge1xuXHRcdHZhciBsZW4gPSArc2Vjb25kLmxlbmd0aCxcblx0XHRcdGogPSAwLFxuXHRcdFx0aSA9IGZpcnN0Lmxlbmd0aDtcblxuXHRcdGZvciAoIDsgaiA8IGxlbjsgaisrICkge1xuXHRcdFx0Zmlyc3RbIGkrKyBdID0gc2Vjb25kWyBqIF07XG5cdFx0fVxuXG5cdFx0Zmlyc3QubGVuZ3RoID0gaTtcblxuXHRcdHJldHVybiBmaXJzdDtcblx0fSxcblxuXHRncmVwOiBmdW5jdGlvbiggZWxlbXMsIGNhbGxiYWNrLCBpbnZlcnQgKSB7XG5cdFx0dmFyIGNhbGxiYWNrSW52ZXJzZSxcblx0XHRcdG1hdGNoZXMgPSBbXSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0bGVuZ3RoID0gZWxlbXMubGVuZ3RoLFxuXHRcdFx0Y2FsbGJhY2tFeHBlY3QgPSAhaW52ZXJ0O1xuXG5cdFx0Ly8gR28gdGhyb3VnaCB0aGUgYXJyYXksIG9ubHkgc2F2aW5nIHRoZSBpdGVtc1xuXHRcdC8vIHRoYXQgcGFzcyB0aGUgdmFsaWRhdG9yIGZ1bmN0aW9uXG5cdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRjYWxsYmFja0ludmVyc2UgPSAhY2FsbGJhY2soIGVsZW1zWyBpIF0sIGkgKTtcblx0XHRcdGlmICggY2FsbGJhY2tJbnZlcnNlICE9PSBjYWxsYmFja0V4cGVjdCApIHtcblx0XHRcdFx0bWF0Y2hlcy5wdXNoKCBlbGVtc1sgaSBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hdGNoZXM7XG5cdH0sXG5cblx0Ly8gYXJnIGlzIGZvciBpbnRlcm5hbCB1c2FnZSBvbmx5XG5cdG1hcDogZnVuY3Rpb24oIGVsZW1zLCBjYWxsYmFjaywgYXJnICkge1xuXHRcdHZhciBsZW5ndGgsIHZhbHVlLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRyZXQgPSBbXTtcblxuXHRcdC8vIEdvIHRocm91Z2ggdGhlIGFycmF5LCB0cmFuc2xhdGluZyBlYWNoIG9mIHRoZSBpdGVtcyB0byB0aGVpciBuZXcgdmFsdWVzXG5cdFx0aWYgKCBpc0FycmF5TGlrZSggZWxlbXMgKSApIHtcblx0XHRcdGxlbmd0aCA9IGVsZW1zLmxlbmd0aDtcblx0XHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHR2YWx1ZSA9IGNhbGxiYWNrKCBlbGVtc1sgaSBdLCBpLCBhcmcgKTtcblxuXHRcdFx0XHRpZiAoIHZhbHVlICE9IG51bGwgKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goIHZhbHVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdC8vIEdvIHRocm91Z2ggZXZlcnkga2V5IG9uIHRoZSBvYmplY3QsXG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoIGkgaW4gZWxlbXMgKSB7XG5cdFx0XHRcdHZhbHVlID0gY2FsbGJhY2soIGVsZW1zWyBpIF0sIGksIGFyZyApO1xuXG5cdFx0XHRcdGlmICggdmFsdWUgIT0gbnVsbCApIHtcblx0XHRcdFx0XHRyZXQucHVzaCggdmFsdWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEZsYXR0ZW4gYW55IG5lc3RlZCBhcnJheXNcblx0XHRyZXR1cm4gZmxhdCggcmV0ICk7XG5cdH0sXG5cblx0Ly8gQSBnbG9iYWwgR1VJRCBjb3VudGVyIGZvciBvYmplY3RzXG5cdGd1aWQ6IDEsXG5cblx0Ly8galF1ZXJ5LnN1cHBvcnQgaXMgbm90IHVzZWQgaW4gQ29yZSBidXQgb3RoZXIgcHJvamVjdHMgYXR0YWNoIHRoZWlyXG5cdC8vIHByb3BlcnRpZXMgdG8gaXQgc28gaXQgbmVlZHMgdG8gZXhpc3QuXG5cdHN1cHBvcnQ6IHN1cHBvcnRcbn0gKTtcblxuaWYgKCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgKSB7XG5cdGpRdWVyeS5mblsgU3ltYm9sLml0ZXJhdG9yIF0gPSBhcnJbIFN5bWJvbC5pdGVyYXRvciBdO1xufVxuXG4vLyBQb3B1bGF0ZSB0aGUgY2xhc3MydHlwZSBtYXBcbmpRdWVyeS5lYWNoKCBcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoIFwiIFwiICksXG5cdGZ1bmN0aW9uKCBfaSwgbmFtZSApIHtcblx0XHRjbGFzczJ0eXBlWyBcIltvYmplY3QgXCIgKyBuYW1lICsgXCJdXCIgXSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblx0fSApO1xuXG5mdW5jdGlvbiBpc0FycmF5TGlrZSggb2JqICkge1xuXG5cdC8vIFN1cHBvcnQ6IHJlYWwgaU9TIDguMiBvbmx5IChub3QgcmVwcm9kdWNpYmxlIGluIHNpbXVsYXRvcilcblx0Ly8gYGluYCBjaGVjayB1c2VkIHRvIHByZXZlbnQgSklUIGVycm9yIChnaC0yMTQ1KVxuXHQvLyBoYXNPd24gaXNuJ3QgdXNlZCBoZXJlIGR1ZSB0byBmYWxzZSBuZWdhdGl2ZXNcblx0Ly8gcmVnYXJkaW5nIE5vZGVsaXN0IGxlbmd0aCBpbiBJRVxuXHR2YXIgbGVuZ3RoID0gISFvYmogJiYgXCJsZW5ndGhcIiBpbiBvYmogJiYgb2JqLmxlbmd0aCxcblx0XHR0eXBlID0gdG9UeXBlKCBvYmogKTtcblxuXHRpZiAoIGlzRnVuY3Rpb24oIG9iaiApIHx8IGlzV2luZG93KCBvYmogKSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gdHlwZSA9PT0gXCJhcnJheVwiIHx8IGxlbmd0aCA9PT0gMCB8fFxuXHRcdHR5cGVvZiBsZW5ndGggPT09IFwibnVtYmVyXCIgJiYgbGVuZ3RoID4gMCAmJiAoIGxlbmd0aCAtIDEgKSBpbiBvYmo7XG59XG5cblxuZnVuY3Rpb24gbm9kZU5hbWUoIGVsZW0sIG5hbWUgKSB7XG5cblx0cmV0dXJuIGVsZW0ubm9kZU5hbWUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbn1cbnZhciBwb3AgPSBhcnIucG9wO1xuXG5cbnZhciBzb3J0ID0gYXJyLnNvcnQ7XG5cblxudmFyIHNwbGljZSA9IGFyci5zcGxpY2U7XG5cblxudmFyIHdoaXRlc3BhY2UgPSBcIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCI7XG5cblxudmFyIHJ0cmltQ1NTID0gbmV3IFJlZ0V4cChcblx0XCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiICsgd2hpdGVzcGFjZSArIFwiKyRcIixcblx0XCJnXCJcbik7XG5cblxuXG5cbi8vIE5vdGU6IGFuIGVsZW1lbnQgZG9lcyBub3QgY29udGFpbiBpdHNlbGZcbmpRdWVyeS5jb250YWlucyA9IGZ1bmN0aW9uKCBhLCBiICkge1xuXHR2YXIgYnVwID0gYiAmJiBiLnBhcmVudE5vZGU7XG5cblx0cmV0dXJuIGEgPT09IGJ1cCB8fCAhISggYnVwICYmIGJ1cC5ub2RlVHlwZSA9PT0gMSAmJiAoXG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTErXG5cdFx0Ly8gSUUgZG9lc24ndCBoYXZlIGBjb250YWluc2Agb24gU1ZHLlxuXHRcdGEuY29udGFpbnMgP1xuXHRcdFx0YS5jb250YWlucyggYnVwICkgOlxuXHRcdFx0YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAmJiBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBidXAgKSAmIDE2XG5cdCkgKTtcbn07XG5cblxuXG5cbi8vIENTUyBzdHJpbmcvaWRlbnRpZmllciBzZXJpYWxpemF0aW9uXG4vLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20vI2NvbW1vbi1zZXJpYWxpemluZy1pZGlvbXNcbnZhciByY3NzZXNjYXBlID0gLyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFx4ODAtXFx1RkZGRlxcdy1dL2c7XG5cbmZ1bmN0aW9uIGZjc3Nlc2NhcGUoIGNoLCBhc0NvZGVQb2ludCApIHtcblx0aWYgKCBhc0NvZGVQb2ludCApIHtcblxuXHRcdC8vIFUrMDAwMCBOVUxMIGJlY29tZXMgVStGRkZEIFJFUExBQ0VNRU5UIENIQVJBQ1RFUlxuXHRcdGlmICggY2ggPT09IFwiXFwwXCIgKSB7XG5cdFx0XHRyZXR1cm4gXCJcXHVGRkZEXCI7XG5cdFx0fVxuXG5cdFx0Ly8gQ29udHJvbCBjaGFyYWN0ZXJzIGFuZCAoZGVwZW5kZW50IHVwb24gcG9zaXRpb24pIG51bWJlcnMgZ2V0IGVzY2FwZWQgYXMgY29kZSBwb2ludHNcblx0XHRyZXR1cm4gY2guc2xpY2UoIDAsIC0xICkgKyBcIlxcXFxcIiArIGNoLmNoYXJDb2RlQXQoIGNoLmxlbmd0aCAtIDEgKS50b1N0cmluZyggMTYgKSArIFwiIFwiO1xuXHR9XG5cblx0Ly8gT3RoZXIgcG90ZW50aWFsbHktc3BlY2lhbCBBU0NJSSBjaGFyYWN0ZXJzIGdldCBiYWNrc2xhc2gtZXNjYXBlZFxuXHRyZXR1cm4gXCJcXFxcXCIgKyBjaDtcbn1cblxualF1ZXJ5LmVzY2FwZVNlbGVjdG9yID0gZnVuY3Rpb24oIHNlbCApIHtcblx0cmV0dXJuICggc2VsICsgXCJcIiApLnJlcGxhY2UoIHJjc3Nlc2NhcGUsIGZjc3Nlc2NhcGUgKTtcbn07XG5cblxuXG5cbnZhciBwcmVmZXJyZWREb2MgPSBkb2N1bWVudCxcblx0cHVzaE5hdGl2ZSA9IHB1c2g7XG5cbiggZnVuY3Rpb24oKSB7XG5cbnZhciBpLFxuXHRFeHByLFxuXHRvdXRlcm1vc3RDb250ZXh0LFxuXHRzb3J0SW5wdXQsXG5cdGhhc0R1cGxpY2F0ZSxcblx0cHVzaCA9IHB1c2hOYXRpdmUsXG5cblx0Ly8gTG9jYWwgZG9jdW1lbnQgdmFyc1xuXHRkb2N1bWVudCxcblx0ZG9jdW1lbnRFbGVtZW50LFxuXHRkb2N1bWVudElzSFRNTCxcblx0cmJ1Z2d5UVNBLFxuXHRtYXRjaGVzLFxuXG5cdC8vIEluc3RhbmNlLXNwZWNpZmljIGRhdGFcblx0ZXhwYW5kbyA9IGpRdWVyeS5leHBhbmRvLFxuXHRkaXJydW5zID0gMCxcblx0ZG9uZSA9IDAsXG5cdGNsYXNzQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuXHR0b2tlbkNhY2hlID0gY3JlYXRlQ2FjaGUoKSxcblx0Y29tcGlsZXJDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG5cdG5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuXHRzb3J0T3JkZXIgPSBmdW5jdGlvbiggYSwgYiApIHtcblx0XHRpZiAoIGEgPT09IGIgKSB7XG5cdFx0XHRoYXNEdXBsaWNhdGUgPSB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gMDtcblx0fSxcblxuXHRib29sZWFucyA9IFwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfFwiICtcblx0XHRcImxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixcblxuXHQvLyBSZWd1bGFyIGV4cHJlc3Npb25zXG5cblx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zeW50YXgtMy8jaWRlbnQtdG9rZW4tZGlhZ3JhbVxuXHRpZGVudGlmaWVyID0gXCIoPzpcXFxcXFxcXFtcXFxcZGEtZkEtRl17MSw2fVwiICsgd2hpdGVzcGFjZSArXG5cdFx0XCI/fFxcXFxcXFxcW15cXFxcclxcXFxuXFxcXGZdfFtcXFxcdy1dfFteXFwwLVxcXFx4N2ZdKStcIixcblxuXHQvLyBBdHRyaWJ1dGUgc2VsZWN0b3JzOiBodHRwczovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNhdHRyaWJ1dGUtc2VsZWN0b3JzXG5cdGF0dHJpYnV0ZXMgPSBcIlxcXFxbXCIgKyB3aGl0ZXNwYWNlICsgXCIqKFwiICsgaWRlbnRpZmllciArIFwiKSg/OlwiICsgd2hpdGVzcGFjZSArXG5cblx0XHQvLyBPcGVyYXRvciAoY2FwdHVyZSAyKVxuXHRcdFwiKihbKl4kfCF+XT89KVwiICsgd2hpdGVzcGFjZSArXG5cblx0XHQvLyBcIkF0dHJpYnV0ZSB2YWx1ZXMgbXVzdCBiZSBDU1MgaWRlbnRpZmllcnMgW2NhcHR1cmUgNV0gb3Igc3RyaW5ncyBbY2FwdHVyZSAzIG9yIGNhcHR1cmUgNF1cIlxuXHRcdFwiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIgKyBpZGVudGlmaWVyICsgXCIpKXwpXCIgK1xuXHRcdHdoaXRlc3BhY2UgKyBcIipcXFxcXVwiLFxuXG5cdHBzZXVkb3MgPSBcIjooXCIgKyBpZGVudGlmaWVyICsgXCIpKD86XFxcXCgoXCIgK1xuXG5cdFx0Ly8gVG8gcmVkdWNlIHRoZSBudW1iZXIgb2Ygc2VsZWN0b3JzIG5lZWRpbmcgdG9rZW5pemUgaW4gdGhlIHByZUZpbHRlciwgcHJlZmVyIGFyZ3VtZW50czpcblx0XHQvLyAxLiBxdW90ZWQgKGNhcHR1cmUgMzsgY2FwdHVyZSA0IG9yIGNhcHR1cmUgNSlcblx0XHRcIignKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfFwiICtcblxuXHRcdC8vIDIuIHNpbXBsZSAoY2FwdHVyZSA2KVxuXHRcdFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiICsgYXR0cmlidXRlcyArIFwiKSopfFwiICtcblxuXHRcdC8vIDMuIGFueXRoaW5nIGVsc2UgKGNhcHR1cmUgMilcblx0XHRcIi4qXCIgK1xuXHRcdFwiKVxcXFwpfClcIixcblxuXHQvLyBMZWFkaW5nIGFuZCBub24tZXNjYXBlZCB0cmFpbGluZyB3aGl0ZXNwYWNlLCBjYXB0dXJpbmcgc29tZSBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXJzIHByZWNlZGluZyB0aGUgbGF0dGVyXG5cdHJ3aGl0ZXNwYWNlID0gbmV3IFJlZ0V4cCggd2hpdGVzcGFjZSArIFwiK1wiLCBcImdcIiApLFxuXG5cdHJjb21tYSA9IG5ldyBSZWdFeHAoIFwiXlwiICsgd2hpdGVzcGFjZSArIFwiKixcIiArIHdoaXRlc3BhY2UgKyBcIipcIiApLFxuXHRybGVhZGluZ0NvbWJpbmF0b3IgPSBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgKyBcIiooWz4rfl18XCIgKyB3aGl0ZXNwYWNlICsgXCIpXCIgK1xuXHRcdHdoaXRlc3BhY2UgKyBcIipcIiApLFxuXHRyZGVzY2VuZCA9IG5ldyBSZWdFeHAoIHdoaXRlc3BhY2UgKyBcInw+XCIgKSxcblxuXHRycHNldWRvID0gbmV3IFJlZ0V4cCggcHNldWRvcyApLFxuXHRyaWRlbnRpZmllciA9IG5ldyBSZWdFeHAoIFwiXlwiICsgaWRlbnRpZmllciArIFwiJFwiICksXG5cblx0bWF0Y2hFeHByID0ge1xuXHRcdElEOiBuZXcgUmVnRXhwKCBcIl4jKFwiICsgaWRlbnRpZmllciArIFwiKVwiICksXG5cdFx0Q0xBU1M6IG5ldyBSZWdFeHAoIFwiXlxcXFwuKFwiICsgaWRlbnRpZmllciArIFwiKVwiICksXG5cdFx0VEFHOiBuZXcgUmVnRXhwKCBcIl4oXCIgKyBpZGVudGlmaWVyICsgXCJ8WypdKVwiICksXG5cdFx0QVRUUjogbmV3IFJlZ0V4cCggXCJeXCIgKyBhdHRyaWJ1dGVzICksXG5cdFx0UFNFVURPOiBuZXcgUmVnRXhwKCBcIl5cIiArIHBzZXVkb3MgKSxcblx0XHRDSElMRDogbmV3IFJlZ0V4cChcblx0XHRcdFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIiArXG5cdFx0XHRcdHdoaXRlc3BhY2UgKyBcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiICsgd2hpdGVzcGFjZSArIFwiKig/OihbKy1dfClcIiArXG5cdFx0XHRcdHdoaXRlc3BhY2UgKyBcIiooXFxcXGQrKXwpKVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFwpfClcIiwgXCJpXCIgKSxcblx0XHRib29sOiBuZXcgUmVnRXhwKCBcIl4oPzpcIiArIGJvb2xlYW5zICsgXCIpJFwiLCBcImlcIiApLFxuXG5cdFx0Ly8gRm9yIHVzZSBpbiBsaWJyYXJpZXMgaW1wbGVtZW50aW5nIC5pcygpXG5cdFx0Ly8gV2UgdXNlIHRoaXMgZm9yIFBPUyBtYXRjaGluZyBpbiBgc2VsZWN0YFxuXHRcdG5lZWRzQ29udGV4dDogbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICtcblx0XHRcdFwiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIiArIHdoaXRlc3BhY2UgK1xuXHRcdFx0XCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFwpfCkoPz1bXi1dfCQpXCIsIFwiaVwiIClcblx0fSxcblxuXHRyaW5wdXRzID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxcblx0cmhlYWRlciA9IC9eaFxcZCQvaSxcblxuXHQvLyBFYXNpbHktcGFyc2VhYmxlL3JldHJpZXZhYmxlIElEIG9yIFRBRyBvciBDTEFTUyBzZWxlY3RvcnNcblx0cnF1aWNrRXhwciA9IC9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLFxuXG5cdHJzaWJsaW5nID0gL1srfl0vLFxuXG5cdC8vIENTUyBlc2NhcGVzXG5cdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9DU1MyMS9zeW5kYXRhLmh0bWwjZXNjYXBlZC1jaGFyYWN0ZXJzXG5cdHJ1bmVzY2FwZSA9IG5ldyBSZWdFeHAoIFwiXFxcXFxcXFxbXFxcXGRhLWZBLUZdezEsNn1cIiArIHdoaXRlc3BhY2UgK1xuXHRcdFwiP3xcXFxcXFxcXChbXlxcXFxyXFxcXG5cXFxcZl0pXCIsIFwiZ1wiICksXG5cdGZ1bmVzY2FwZSA9IGZ1bmN0aW9uKCBlc2NhcGUsIG5vbkhleCApIHtcblx0XHR2YXIgaGlnaCA9IFwiMHhcIiArIGVzY2FwZS5zbGljZSggMSApIC0gMHgxMDAwMDtcblxuXHRcdGlmICggbm9uSGV4ICkge1xuXG5cdFx0XHQvLyBTdHJpcCB0aGUgYmFja3NsYXNoIHByZWZpeCBmcm9tIGEgbm9uLWhleCBlc2NhcGUgc2VxdWVuY2Vcblx0XHRcdHJldHVybiBub25IZXg7XG5cdFx0fVxuXG5cdFx0Ly8gUmVwbGFjZSBhIGhleGFkZWNpbWFsIGVzY2FwZSBzZXF1ZW5jZSB3aXRoIHRoZSBlbmNvZGVkIFVuaWNvZGUgY29kZSBwb2ludFxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9MTErXG5cdFx0Ly8gRm9yIHZhbHVlcyBvdXRzaWRlIHRoZSBCYXNpYyBNdWx0aWxpbmd1YWwgUGxhbmUgKEJNUCksIG1hbnVhbGx5IGNvbnN0cnVjdCBhXG5cdFx0Ly8gc3Vycm9nYXRlIHBhaXJcblx0XHRyZXR1cm4gaGlnaCA8IDAgP1xuXHRcdFx0U3RyaW5nLmZyb21DaGFyQ29kZSggaGlnaCArIDB4MTAwMDAgKSA6XG5cdFx0XHRTdHJpbmcuZnJvbUNoYXJDb2RlKCBoaWdoID4+IDEwIHwgMHhEODAwLCBoaWdoICYgMHgzRkYgfCAweERDMDAgKTtcblx0fSxcblxuXHQvLyBVc2VkIGZvciBpZnJhbWVzOyBzZWUgYHNldERvY3VtZW50YC5cblx0Ly8gU3VwcG9ydDogSUUgOSAtIDExKywgRWRnZSAxMiAtIDE4K1xuXHQvLyBSZW1vdmluZyB0aGUgZnVuY3Rpb24gd3JhcHBlciBjYXVzZXMgYSBcIlBlcm1pc3Npb24gRGVuaWVkXCJcblx0Ly8gZXJyb3IgaW4gSUUvRWRnZS5cblx0dW5sb2FkSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXHRcdHNldERvY3VtZW50KCk7XG5cdH0sXG5cblx0aW5EaXNhYmxlZEZpZWxkc2V0ID0gYWRkQ29tYmluYXRvcihcblx0XHRmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtLmRpc2FibGVkID09PSB0cnVlICYmIG5vZGVOYW1lKCBlbGVtLCBcImZpZWxkc2V0XCIgKTtcblx0XHR9LFxuXHRcdHsgZGlyOiBcInBhcmVudE5vZGVcIiwgbmV4dDogXCJsZWdlbmRcIiB9XG5cdCk7XG5cbi8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4vLyBBY2Nlc3NpbmcgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBjYW4gdGhyb3cgdW5leHBlY3RlZGx5XG4vLyBodHRwczovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTMzOTNcbmZ1bmN0aW9uIHNhZmVBY3RpdmVFbGVtZW50KCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHR9IGNhdGNoICggZXJyICkgeyB9XG59XG5cbi8vIE9wdGltaXplIGZvciBwdXNoLmFwcGx5KCBfLCBOb2RlTGlzdCApXG50cnkge1xuXHRwdXNoLmFwcGx5KFxuXHRcdCggYXJyID0gc2xpY2UuY2FsbCggcHJlZmVycmVkRG9jLmNoaWxkTm9kZXMgKSApLFxuXHRcdHByZWZlcnJlZERvYy5jaGlsZE5vZGVzXG5cdCk7XG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMFxuXHQvLyBEZXRlY3Qgc2lsZW50bHkgZmFpbGluZyBwdXNoLmFwcGx5XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0YXJyWyBwcmVmZXJyZWREb2MuY2hpbGROb2Rlcy5sZW5ndGggXS5ub2RlVHlwZTtcbn0gY2F0Y2ggKCBlICkge1xuXHRwdXNoID0ge1xuXHRcdGFwcGx5OiBmdW5jdGlvbiggdGFyZ2V0LCBlbHMgKSB7XG5cdFx0XHRwdXNoTmF0aXZlLmFwcGx5KCB0YXJnZXQsIHNsaWNlLmNhbGwoIGVscyApICk7XG5cdFx0fSxcblx0XHRjYWxsOiBmdW5jdGlvbiggdGFyZ2V0ICkge1xuXHRcdFx0cHVzaE5hdGl2ZS5hcHBseSggdGFyZ2V0LCBzbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSApO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gZmluZCggc2VsZWN0b3IsIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQgKSB7XG5cdHZhciBtLCBpLCBlbGVtLCBuaWQsIG1hdGNoLCBncm91cHMsIG5ld1NlbGVjdG9yLFxuXHRcdG5ld0NvbnRleHQgPSBjb250ZXh0ICYmIGNvbnRleHQub3duZXJEb2N1bWVudCxcblxuXHRcdC8vIG5vZGVUeXBlIGRlZmF1bHRzIHRvIDksIHNpbmNlIGNvbnRleHQgZGVmYXVsdHMgdG8gZG9jdW1lbnRcblx0XHRub2RlVHlwZSA9IGNvbnRleHQgPyBjb250ZXh0Lm5vZGVUeXBlIDogOTtcblxuXHRyZXN1bHRzID0gcmVzdWx0cyB8fCBbXTtcblxuXHQvLyBSZXR1cm4gZWFybHkgZnJvbSBjYWxscyB3aXRoIGludmFsaWQgc2VsZWN0b3Igb3IgY29udGV4dFxuXHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiB8fCAhc2VsZWN0b3IgfHxcblx0XHRub2RlVHlwZSAhPT0gMSAmJiBub2RlVHlwZSAhPT0gOSAmJiBub2RlVHlwZSAhPT0gMTEgKSB7XG5cblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fVxuXG5cdC8vIFRyeSB0byBzaG9ydGN1dCBmaW5kIG9wZXJhdGlvbnMgKGFzIG9wcG9zZWQgdG8gZmlsdGVycykgaW4gSFRNTCBkb2N1bWVudHNcblx0aWYgKCAhc2VlZCApIHtcblx0XHRzZXREb2N1bWVudCggY29udGV4dCApO1xuXHRcdGNvbnRleHQgPSBjb250ZXh0IHx8IGRvY3VtZW50O1xuXG5cdFx0aWYgKCBkb2N1bWVudElzSFRNTCApIHtcblxuXHRcdFx0Ly8gSWYgdGhlIHNlbGVjdG9yIGlzIHN1ZmZpY2llbnRseSBzaW1wbGUsIHRyeSB1c2luZyBhIFwiZ2V0KkJ5KlwiIERPTSBtZXRob2Rcblx0XHRcdC8vIChleGNlcHRpbmcgRG9jdW1lbnRGcmFnbWVudCBjb250ZXh0LCB3aGVyZSB0aGUgbWV0aG9kcyBkb24ndCBleGlzdClcblx0XHRcdGlmICggbm9kZVR5cGUgIT09IDExICYmICggbWF0Y2ggPSBycXVpY2tFeHByLmV4ZWMoIHNlbGVjdG9yICkgKSApIHtcblxuXHRcdFx0XHQvLyBJRCBzZWxlY3RvclxuXHRcdFx0XHRpZiAoICggbSA9IG1hdGNoWyAxIF0gKSApIHtcblxuXHRcdFx0XHRcdC8vIERvY3VtZW50IGNvbnRleHRcblx0XHRcdFx0XHRpZiAoIG5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoIGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKCBtICkgKSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA5IG9ubHlcblx0XHRcdFx0XHRcdFx0Ly8gZ2V0RWxlbWVudEJ5SWQgY2FuIG1hdGNoIGVsZW1lbnRzIGJ5IG5hbWUgaW5zdGVhZCBvZiBJRFxuXHRcdFx0XHRcdFx0XHRpZiAoIGVsZW0uaWQgPT09IG0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0cHVzaC5jYWxsKCByZXN1bHRzLCBlbGVtICk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRWxlbWVudCBjb250ZXh0XG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgOSBvbmx5XG5cdFx0XHRcdFx0XHQvLyBnZXRFbGVtZW50QnlJZCBjYW4gbWF0Y2ggZWxlbWVudHMgYnkgbmFtZSBpbnN0ZWFkIG9mIElEXG5cdFx0XHRcdFx0XHRpZiAoIG5ld0NvbnRleHQgJiYgKCBlbGVtID0gbmV3Q29udGV4dC5nZXRFbGVtZW50QnlJZCggbSApICkgJiZcblx0XHRcdFx0XHRcdFx0ZmluZC5jb250YWlucyggY29udGV4dCwgZWxlbSApICYmXG5cdFx0XHRcdFx0XHRcdGVsZW0uaWQgPT09IG0gKSB7XG5cblx0XHRcdFx0XHRcdFx0cHVzaC5jYWxsKCByZXN1bHRzLCBlbGVtICk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUeXBlIHNlbGVjdG9yXG5cdFx0XHRcdH0gZWxzZSBpZiAoIG1hdGNoWyAyIF0gKSB7XG5cdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggc2VsZWN0b3IgKSApO1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXG5cdFx0XHRcdC8vIENsYXNzIHNlbGVjdG9yXG5cdFx0XHRcdH0gZWxzZSBpZiAoICggbSA9IG1hdGNoWyAzIF0gKSAmJiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgKSB7XG5cdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBtICkgKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBUYWtlIGFkdmFudGFnZSBvZiBxdWVyeVNlbGVjdG9yQWxsXG5cdFx0XHRpZiAoICFub25uYXRpdmVTZWxlY3RvckNhY2hlWyBzZWxlY3RvciArIFwiIFwiIF0gJiZcblx0XHRcdFx0KCAhcmJ1Z2d5UVNBIHx8ICFyYnVnZ3lRU0EudGVzdCggc2VsZWN0b3IgKSApICkge1xuXG5cdFx0XHRcdG5ld1NlbGVjdG9yID0gc2VsZWN0b3I7XG5cdFx0XHRcdG5ld0NvbnRleHQgPSBjb250ZXh0O1xuXG5cdFx0XHRcdC8vIHFTQSBjb25zaWRlcnMgZWxlbWVudHMgb3V0c2lkZSBhIHNjb3Bpbmcgcm9vdCB3aGVuIGV2YWx1YXRpbmcgY2hpbGQgb3Jcblx0XHRcdFx0Ly8gZGVzY2VuZGFudCBjb21iaW5hdG9ycywgd2hpY2ggaXMgbm90IHdoYXQgd2Ugd2FudC5cblx0XHRcdFx0Ly8gSW4gc3VjaCBjYXNlcywgd2Ugd29yayBhcm91bmQgdGhlIGJlaGF2aW9yIGJ5IHByZWZpeGluZyBldmVyeSBzZWxlY3RvciBpbiB0aGVcblx0XHRcdFx0Ly8gbGlzdCB3aXRoIGFuIElEIHNlbGVjdG9yIHJlZmVyZW5jaW5nIHRoZSBzY29wZSBjb250ZXh0LlxuXHRcdFx0XHQvLyBUaGUgdGVjaG5pcXVlIGhhcyB0byBiZSB1c2VkIGFzIHdlbGwgd2hlbiBhIGxlYWRpbmcgY29tYmluYXRvciBpcyB1c2VkXG5cdFx0XHRcdC8vIGFzIHN1Y2ggc2VsZWN0b3JzIGFyZSBub3QgcmVjb2duaXplZCBieSBxdWVyeVNlbGVjdG9yQWxsLlxuXHRcdFx0XHQvLyBUaGFua3MgdG8gQW5kcmV3IER1cG9udCBmb3IgdGhpcyB0ZWNobmlxdWUuXG5cdFx0XHRcdGlmICggbm9kZVR5cGUgPT09IDEgJiZcblx0XHRcdFx0XHQoIHJkZXNjZW5kLnRlc3QoIHNlbGVjdG9yICkgfHwgcmxlYWRpbmdDb21iaW5hdG9yLnRlc3QoIHNlbGVjdG9yICkgKSApIHtcblxuXHRcdFx0XHRcdC8vIEV4cGFuZCBjb250ZXh0IGZvciBzaWJsaW5nIHNlbGVjdG9yc1xuXHRcdFx0XHRcdG5ld0NvbnRleHQgPSByc2libGluZy50ZXN0KCBzZWxlY3RvciApICYmIHRlc3RDb250ZXh0KCBjb250ZXh0LnBhcmVudE5vZGUgKSB8fFxuXHRcdFx0XHRcdFx0Y29udGV4dDtcblxuXHRcdFx0XHRcdC8vIFdlIGNhbiB1c2UgOnNjb3BlIGluc3RlYWQgb2YgdGhlIElEIGhhY2sgaWYgdGhlIGJyb3dzZXJcblx0XHRcdFx0XHQvLyBzdXBwb3J0cyBpdCAmIGlmIHdlJ3JlIG5vdCBjaGFuZ2luZyB0aGUgY29udGV4dC5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0XHRcdFx0XHQvLyBJRS9FZGdlIHNvbWV0aW1lcyB0aHJvdyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuXG5cdFx0XHRcdFx0Ly8gc3RyaWN0LWNvbXBhcmluZyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdFx0XHRcdGlmICggbmV3Q29udGV4dCAhPSBjb250ZXh0IHx8ICFzdXBwb3J0LnNjb3BlICkge1xuXG5cdFx0XHRcdFx0XHQvLyBDYXB0dXJlIHRoZSBjb250ZXh0IElELCBzZXR0aW5nIGl0IGZpcnN0IGlmIG5lY2Vzc2FyeVxuXHRcdFx0XHRcdFx0aWYgKCAoIG5pZCA9IGNvbnRleHQuZ2V0QXR0cmlidXRlKCBcImlkXCIgKSApICkge1xuXHRcdFx0XHRcdFx0XHRuaWQgPSBqUXVlcnkuZXNjYXBlU2VsZWN0b3IoIG5pZCApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29udGV4dC5zZXRBdHRyaWJ1dGUoIFwiaWRcIiwgKCBuaWQgPSBleHBhbmRvICkgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBQcmVmaXggZXZlcnkgc2VsZWN0b3IgaW4gdGhlIGxpc3Rcblx0XHRcdFx0XHRncm91cHMgPSB0b2tlbml6ZSggc2VsZWN0b3IgKTtcblx0XHRcdFx0XHRpID0gZ3JvdXBzLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRcdGdyb3Vwc1sgaSBdID0gKCBuaWQgPyBcIiNcIiArIG5pZCA6IFwiOnNjb3BlXCIgKSArIFwiIFwiICtcblx0XHRcdFx0XHRcdFx0dG9TZWxlY3RvciggZ3JvdXBzWyBpIF0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bmV3U2VsZWN0b3IgPSBncm91cHMuam9pbiggXCIsXCIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cyxcblx0XHRcdFx0XHRcdG5ld0NvbnRleHQucXVlcnlTZWxlY3RvckFsbCggbmV3U2VsZWN0b3IgKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdH0gY2F0Y2ggKCBxc2FFcnJvciApIHtcblx0XHRcdFx0XHRub25uYXRpdmVTZWxlY3RvckNhY2hlKCBzZWxlY3RvciwgdHJ1ZSApO1xuXHRcdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRcdGlmICggbmlkID09PSBleHBhbmRvICkge1xuXHRcdFx0XHRcdFx0Y29udGV4dC5yZW1vdmVBdHRyaWJ1dGUoIFwiaWRcIiApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEFsbCBvdGhlcnNcblx0cmV0dXJuIHNlbGVjdCggc2VsZWN0b3IucmVwbGFjZSggcnRyaW1DU1MsIFwiJDFcIiApLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkICk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGtleS12YWx1ZSBjYWNoZXMgb2YgbGltaXRlZCBzaXplXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oc3RyaW5nLCBvYmplY3QpfSBSZXR1cm5zIHRoZSBPYmplY3QgZGF0YSBhZnRlciBzdG9yaW5nIGl0IG9uIGl0c2VsZiB3aXRoXG4gKlx0cHJvcGVydHkgbmFtZSB0aGUgKHNwYWNlLXN1ZmZpeGVkKSBzdHJpbmcgYW5kIChpZiB0aGUgY2FjaGUgaXMgbGFyZ2VyIHRoYW4gRXhwci5jYWNoZUxlbmd0aClcbiAqXHRkZWxldGluZyB0aGUgb2xkZXN0IGVudHJ5XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhY2hlKCkge1xuXHR2YXIga2V5cyA9IFtdO1xuXG5cdGZ1bmN0aW9uIGNhY2hlKCBrZXksIHZhbHVlICkge1xuXG5cdFx0Ly8gVXNlIChrZXkgKyBcIiBcIikgdG8gYXZvaWQgY29sbGlzaW9uIHdpdGggbmF0aXZlIHByb3RvdHlwZSBwcm9wZXJ0aWVzXG5cdFx0Ly8gKHNlZSBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L3NpenpsZS9pc3N1ZXMvMTU3KVxuXHRcdGlmICgga2V5cy5wdXNoKCBrZXkgKyBcIiBcIiApID4gRXhwci5jYWNoZUxlbmd0aCApIHtcblxuXHRcdFx0Ly8gT25seSBrZWVwIHRoZSBtb3N0IHJlY2VudCBlbnRyaWVzXG5cdFx0XHRkZWxldGUgY2FjaGVbIGtleXMuc2hpZnQoKSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gKCBjYWNoZVsga2V5ICsgXCIgXCIgXSA9IHZhbHVlICk7XG5cdH1cblx0cmV0dXJuIGNhY2hlO1xufVxuXG4vKipcbiAqIE1hcmsgYSBmdW5jdGlvbiBmb3Igc3BlY2lhbCB1c2UgYnkgalF1ZXJ5IHNlbGVjdG9yIG1vZHVsZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIG1hcmtcbiAqL1xuZnVuY3Rpb24gbWFya0Z1bmN0aW9uKCBmbiApIHtcblx0Zm5bIGV4cGFuZG8gXSA9IHRydWU7XG5cdHJldHVybiBmbjtcbn1cblxuLyoqXG4gKiBTdXBwb3J0IHRlc3RpbmcgdXNpbmcgYW4gZWxlbWVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gUGFzc2VkIHRoZSBjcmVhdGVkIGVsZW1lbnQgYW5kIHJldHVybnMgYSBib29sZWFuIHJlc3VsdFxuICovXG5mdW5jdGlvbiBhc3NlcnQoIGZuICkge1xuXHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImZpZWxkc2V0XCIgKTtcblxuXHR0cnkge1xuXHRcdHJldHVybiAhIWZuKCBlbCApO1xuXHR9IGNhdGNoICggZSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cblx0XHQvLyBSZW1vdmUgZnJvbSBpdHMgcGFyZW50IGJ5IGRlZmF1bHRcblx0XHRpZiAoIGVsLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBlbCApO1xuXHRcdH1cblxuXHRcdC8vIHJlbGVhc2UgbWVtb3J5IGluIElFXG5cdFx0ZWwgPSBudWxsO1xuXHR9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciBpbnB1dCB0eXBlc1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5wdXRQc2V1ZG8oIHR5cGUgKSB7XG5cdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gbm9kZU5hbWUoIGVsZW0sIFwiaW5wdXRcIiApICYmIGVsZW0udHlwZSA9PT0gdHlwZTtcblx0fTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIGJ1dHRvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvblBzZXVkbyggdHlwZSApIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiAoIG5vZGVOYW1lKCBlbGVtLCBcImlucHV0XCIgKSB8fCBub2RlTmFtZSggZWxlbSwgXCJidXR0b25cIiApICkgJiZcblx0XHRcdGVsZW0udHlwZSA9PT0gdHlwZTtcblx0fTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIDplbmFibGVkLzpkaXNhYmxlZFxuICogQHBhcmFtIHtCb29sZWFufSBkaXNhYmxlZCB0cnVlIGZvciA6ZGlzYWJsZWQ7IGZhbHNlIGZvciA6ZW5hYmxlZFxuICovXG5mdW5jdGlvbiBjcmVhdGVEaXNhYmxlZFBzZXVkbyggZGlzYWJsZWQgKSB7XG5cblx0Ly8gS25vd24gOmRpc2FibGVkIGZhbHNlIHBvc2l0aXZlczogZmllbGRzZXRbZGlzYWJsZWRdID4gbGVnZW5kOm50aC1vZi10eXBlKG4rMikgOmNhbi1kaXNhYmxlXG5cdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdC8vIE9ubHkgY2VydGFpbiBlbGVtZW50cyBjYW4gbWF0Y2ggOmVuYWJsZWQgb3IgOmRpc2FibGVkXG5cdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2NyaXB0aW5nLmh0bWwjc2VsZWN0b3ItZW5hYmxlZFxuXHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NjcmlwdGluZy5odG1sI3NlbGVjdG9yLWRpc2FibGVkXG5cdFx0aWYgKCBcImZvcm1cIiBpbiBlbGVtICkge1xuXG5cdFx0XHQvLyBDaGVjayBmb3IgaW5oZXJpdGVkIGRpc2FibGVkbmVzcyBvbiByZWxldmFudCBub24tZGlzYWJsZWQgZWxlbWVudHM6XG5cdFx0XHQvLyAqIGxpc3RlZCBmb3JtLWFzc29jaWF0ZWQgZWxlbWVudHMgaW4gYSBkaXNhYmxlZCBmaWVsZHNldFxuXHRcdFx0Ly8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NhdGVnb3J5LWxpc3RlZFxuXHRcdFx0Ly8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NvbmNlcHQtZmUtZGlzYWJsZWRcblx0XHRcdC8vICogb3B0aW9uIGVsZW1lbnRzIGluIGEgZGlzYWJsZWQgb3B0Z3JvdXBcblx0XHRcdC8vICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCNjb25jZXB0LW9wdGlvbi1kaXNhYmxlZFxuXHRcdFx0Ly8gQWxsIHN1Y2ggZWxlbWVudHMgaGF2ZSBhIFwiZm9ybVwiIHByb3BlcnR5LlxuXHRcdFx0aWYgKCBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbS5kaXNhYmxlZCA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0Ly8gT3B0aW9uIGVsZW1lbnRzIGRlZmVyIHRvIGEgcGFyZW50IG9wdGdyb3VwIGlmIHByZXNlbnRcblx0XHRcdFx0aWYgKCBcImxhYmVsXCIgaW4gZWxlbSApIHtcblx0XHRcdFx0XHRpZiAoIFwibGFiZWxcIiBpbiBlbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS5wYXJlbnROb2RlLmRpc2FibGVkID09PSBkaXNhYmxlZDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDYgLSAxMStcblx0XHRcdFx0Ly8gVXNlIHRoZSBpc0Rpc2FibGVkIHNob3J0Y3V0IHByb3BlcnR5IHRvIGNoZWNrIGZvciBkaXNhYmxlZCBmaWVsZHNldCBhbmNlc3RvcnNcblx0XHRcdFx0cmV0dXJuIGVsZW0uaXNEaXNhYmxlZCA9PT0gZGlzYWJsZWQgfHxcblxuXHRcdFx0XHRcdC8vIFdoZXJlIHRoZXJlIGlzIG5vIGlzRGlzYWJsZWQsIGNoZWNrIG1hbnVhbGx5XG5cdFx0XHRcdFx0ZWxlbS5pc0Rpc2FibGVkICE9PSAhZGlzYWJsZWQgJiZcblx0XHRcdFx0XHRcdGluRGlzYWJsZWRGaWVsZHNldCggZWxlbSApID09PSBkaXNhYmxlZDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXG5cdFx0Ly8gVHJ5IHRvIHdpbm5vdyBvdXQgZWxlbWVudHMgdGhhdCBjYW4ndCBiZSBkaXNhYmxlZCBiZWZvcmUgdHJ1c3RpbmcgdGhlIGRpc2FibGVkIHByb3BlcnR5LlxuXHRcdC8vIFNvbWUgdmljdGltcyBnZXQgY2F1Z2h0IGluIG91ciBuZXQgKGxhYmVsLCBsZWdlbmQsIG1lbnUsIHRyYWNrKSwgYnV0IGl0IHNob3VsZG4ndFxuXHRcdC8vIGV2ZW4gZXhpc3Qgb24gdGhlbSwgbGV0IGFsb25lIGhhdmUgYSBib29sZWFuIHZhbHVlLlxuXHRcdH0gZWxzZSBpZiAoIFwibGFiZWxcIiBpbiBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXHRcdH1cblxuXHRcdC8vIFJlbWFpbmluZyBlbGVtZW50cyBhcmUgbmVpdGhlciA6ZW5hYmxlZCBub3IgOmRpc2FibGVkXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgcG9zaXRpb25hbHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oIGZuICkge1xuXHRyZXR1cm4gbWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggYXJndW1lbnQgKSB7XG5cdFx0YXJndW1lbnQgPSArYXJndW1lbnQ7XG5cdFx0cmV0dXJuIG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIHNlZWQsIG1hdGNoZXMgKSB7XG5cdFx0XHR2YXIgaixcblx0XHRcdFx0bWF0Y2hJbmRleGVzID0gZm4oIFtdLCBzZWVkLmxlbmd0aCwgYXJndW1lbnQgKSxcblx0XHRcdFx0aSA9IG1hdGNoSW5kZXhlcy5sZW5ndGg7XG5cblx0XHRcdC8vIE1hdGNoIGVsZW1lbnRzIGZvdW5kIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhlc1xuXHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdGlmICggc2VlZFsgKCBqID0gbWF0Y2hJbmRleGVzWyBpIF0gKSBdICkge1xuXHRcdFx0XHRcdHNlZWRbIGogXSA9ICEoIG1hdGNoZXNbIGogXSA9IHNlZWRbIGogXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9ICk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGEgbm9kZSBmb3IgdmFsaWRpdHkgYXMgYSBqUXVlcnkgc2VsZWN0b3IgY29udGV4dFxuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdD19IGNvbnRleHRcbiAqIEByZXR1cm5zIHtFbGVtZW50fE9iamVjdHxCb29sZWFufSBUaGUgaW5wdXQgbm9kZSBpZiBhY2NlcHRhYmxlLCBvdGhlcndpc2UgYSBmYWxzeSB2YWx1ZVxuICovXG5mdW5jdGlvbiB0ZXN0Q29udGV4dCggY29udGV4dCApIHtcblx0cmV0dXJuIGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29udGV4dDtcbn1cblxuLyoqXG4gKiBTZXRzIGRvY3VtZW50LXJlbGF0ZWQgdmFyaWFibGVzIG9uY2UgYmFzZWQgb24gdGhlIGN1cnJlbnQgZG9jdW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3R9IFtub2RlXSBBbiBlbGVtZW50IG9yIGRvY3VtZW50IG9iamVjdCB0byB1c2UgdG8gc2V0IHRoZSBkb2N1bWVudFxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY3VycmVudCBkb2N1bWVudFxuICovXG5mdW5jdGlvbiBzZXREb2N1bWVudCggbm9kZSApIHtcblx0dmFyIHN1YldpbmRvdyxcblx0XHRkb2MgPSBub2RlID8gbm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGUgOiBwcmVmZXJyZWREb2M7XG5cblx0Ly8gUmV0dXJuIGVhcmx5IGlmIGRvYyBpcyBpbnZhbGlkIG9yIGFscmVhZHkgc2VsZWN0ZWRcblx0Ly8gU3VwcG9ydDogSUUgMTErLCBFZGdlIDE3IC0gMTgrXG5cdC8vIElFL0VkZ2Ugc29tZXRpbWVzIHRocm93IGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0aWYgKCBkb2MgPT0gZG9jdW1lbnQgfHwgZG9jLm5vZGVUeXBlICE9PSA5IHx8ICFkb2MuZG9jdW1lbnRFbGVtZW50ICkge1xuXHRcdHJldHVybiBkb2N1bWVudDtcblx0fVxuXG5cdC8vIFVwZGF0ZSBnbG9iYWwgdmFyaWFibGVzXG5cdGRvY3VtZW50ID0gZG9jO1xuXHRkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdGRvY3VtZW50SXNIVE1MID0gIWpRdWVyeS5pc1hNTERvYyggZG9jdW1lbnQgKTtcblxuXHQvLyBTdXBwb3J0OiBpT1MgNyBvbmx5LCBJRSA5IC0gMTErXG5cdC8vIE9sZGVyIGJyb3dzZXJzIGRpZG4ndCBzdXBwb3J0IHVucHJlZml4ZWQgYG1hdGNoZXNgLlxuXHRtYXRjaGVzID0gZG9jdW1lbnRFbGVtZW50Lm1hdGNoZXMgfHxcblx0XHRkb2N1bWVudEVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG5cdFx0ZG9jdW1lbnRFbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSssIEVkZ2UgMTIgLSAxOCtcblx0Ly8gQWNjZXNzaW5nIGlmcmFtZSBkb2N1bWVudHMgYWZ0ZXIgdW5sb2FkIHRocm93cyBcInBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3JzXG5cdC8vIChzZWUgdHJhYy0xMzkzNikuXG5cdC8vIExpbWl0IHRoZSBmaXggdG8gSUUgJiBFZGdlIExlZ2FjeTsgZGVzcGl0ZSBFZGdlIDE1KyBpbXBsZW1lbnRpbmcgYG1hdGNoZXNgLFxuXHQvLyBhbGwgSUUgOSsgYW5kIEVkZ2UgTGVnYWN5IHZlcnNpb25zIGltcGxlbWVudCBgbXNNYXRjaGVzU2VsZWN0b3JgIGFzIHdlbGwuXG5cdGlmICggZG9jdW1lbnRFbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yICYmXG5cblx0XHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0XHQvLyBJRS9FZGdlIHNvbWV0aW1lcyB0aHJvdyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIHN0cmljdC1jb21wYXJpbmdcblx0XHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdHByZWZlcnJlZERvYyAhPSBkb2N1bWVudCAmJlxuXHRcdCggc3ViV2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcgKSAmJiBzdWJXaW5kb3cudG9wICE9PSBzdWJXaW5kb3cgKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTErLCBFZGdlIDEyIC0gMTgrXG5cdFx0c3ViV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwidW5sb2FkXCIsIHVubG9hZEhhbmRsZXIgKTtcblx0fVxuXG5cdC8vIFN1cHBvcnQ6IElFIDwxMFxuXHQvLyBDaGVjayBpZiBnZXRFbGVtZW50QnlJZCByZXR1cm5zIGVsZW1lbnRzIGJ5IG5hbWVcblx0Ly8gVGhlIGJyb2tlbiBnZXRFbGVtZW50QnlJZCBtZXRob2RzIGRvbid0IHBpY2sgdXAgcHJvZ3JhbW1hdGljYWxseS1zZXQgbmFtZXMsXG5cdC8vIHNvIHVzZSBhIHJvdW5kYWJvdXQgZ2V0RWxlbWVudHNCeU5hbWUgdGVzdFxuXHRzdXBwb3J0LmdldEJ5SWQgPSBhc3NlcnQoIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRkb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoIGVsICkuaWQgPSBqUXVlcnkuZXhwYW5kbztcblx0XHRyZXR1cm4gIWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lIHx8XG5cdFx0XHQhZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoIGpRdWVyeS5leHBhbmRvICkubGVuZ3RoO1xuXHR9ICk7XG5cblx0Ly8gU3VwcG9ydDogSUUgOSBvbmx5XG5cdC8vIENoZWNrIHRvIHNlZSBpZiBpdCdzIHBvc3NpYmxlIHRvIGRvIG1hdGNoZXNTZWxlY3RvclxuXHQvLyBvbiBhIGRpc2Nvbm5lY3RlZCBub2RlLlxuXHRzdXBwb3J0LmRpc2Nvbm5lY3RlZE1hdGNoID0gYXNzZXJ0KCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0cmV0dXJuIG1hdGNoZXMuY2FsbCggZWwsIFwiKlwiICk7XG5cdH0gKTtcblxuXHQvLyBTdXBwb3J0OiBJRSA5IC0gMTErLCBFZGdlIDEyIC0gMTgrXG5cdC8vIElFL0VkZ2UgZG9uJ3Qgc3VwcG9ydCB0aGUgOnNjb3BlIHBzZXVkby1jbGFzcy5cblx0c3VwcG9ydC5zY29wZSA9IGFzc2VydCggZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIFwiOnNjb3BlXCIgKTtcblx0fSApO1xuXG5cdC8vIFN1cHBvcnQ6IENocm9tZSAxMDUgLSAxMTEgb25seSwgU2FmYXJpIDE1LjQgLSAxNi4zIG9ubHlcblx0Ly8gTWFrZSBzdXJlIHRoZSBgOmhhcygpYCBhcmd1bWVudCBpcyBwYXJzZWQgdW5mb3JnaXZpbmdseS5cblx0Ly8gV2UgaW5jbHVkZSBgKmAgaW4gdGhlIHRlc3QgdG8gZGV0ZWN0IGJ1Z2d5IGltcGxlbWVudGF0aW9ucyB0aGF0IGFyZVxuXHQvLyBfc2VsZWN0aXZlbHlfIGZvcmdpdmluZyAoc3BlY2lmaWNhbGx5IHdoZW4gdGhlIGxpc3QgaW5jbHVkZXMgYXQgbGVhc3Rcblx0Ly8gb25lIHZhbGlkIHNlbGVjdG9yKS5cblx0Ly8gTm90ZSB0aGF0IHdlIHRyZWF0IGNvbXBsZXRlIGxhY2sgb2Ygc3VwcG9ydCBmb3IgYDpoYXMoKWAgYXMgaWYgaXQgd2VyZVxuXHQvLyBzcGVjLWNvbXBsaWFudCBzdXBwb3J0LCB3aGljaCBpcyBmaW5lIGJlY2F1c2UgdXNlIG9mIGA6aGFzKClgIGluIHN1Y2hcblx0Ly8gZW52aXJvbm1lbnRzIHdpbGwgZmFpbCBpbiB0aGUgcVNBIHBhdGggYW5kIGZhbGwgYmFjayB0byBqUXVlcnkgdHJhdmVyc2FsXG5cdC8vIGFueXdheS5cblx0c3VwcG9ydC5jc3NIYXMgPSBhc3NlcnQoIGZ1bmN0aW9uKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcIjpoYXMoKiw6anFmYWtlKVwiICk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSBjYXRjaCAoIGUgKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH0gKTtcblxuXHQvLyBJRCBmaWx0ZXIgYW5kIGZpbmRcblx0aWYgKCBzdXBwb3J0LmdldEJ5SWQgKSB7XG5cdFx0RXhwci5maWx0ZXIuSUQgPSBmdW5jdGlvbiggaWQgKSB7XG5cdFx0XHR2YXIgYXR0cklkID0gaWQucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCBcImlkXCIgKSA9PT0gYXR0cklkO1xuXHRcdFx0fTtcblx0XHR9O1xuXHRcdEV4cHIuZmluZC5JRCA9IGZ1bmN0aW9uKCBpZCwgY29udGV4dCApIHtcblx0XHRcdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnRJc0hUTUwgKSB7XG5cdFx0XHRcdHZhciBlbGVtID0gY29udGV4dC5nZXRFbGVtZW50QnlJZCggaWQgKTtcblx0XHRcdFx0cmV0dXJuIGVsZW0gPyBbIGVsZW0gXSA6IFtdO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0RXhwci5maWx0ZXIuSUQgPSAgZnVuY3Rpb24oIGlkICkge1xuXHRcdFx0dmFyIGF0dHJJZCA9IGlkLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHZhciBub2RlID0gdHlwZW9mIGVsZW0uZ2V0QXR0cmlidXRlTm9kZSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuXHRcdFx0XHRcdGVsZW0uZ2V0QXR0cmlidXRlTm9kZSggXCJpZFwiICk7XG5cdFx0XHRcdHJldHVybiBub2RlICYmIG5vZGUudmFsdWUgPT09IGF0dHJJZDtcblx0XHRcdH07XG5cdFx0fTtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDYgLSA3IG9ubHlcblx0XHQvLyBnZXRFbGVtZW50QnlJZCBpcyBub3QgcmVsaWFibGUgYXMgYSBmaW5kIHNob3J0Y3V0XG5cdFx0RXhwci5maW5kLklEID0gZnVuY3Rpb24oIGlkLCBjb250ZXh0ICkge1xuXHRcdFx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50QnlJZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCApIHtcblx0XHRcdFx0dmFyIG5vZGUsIGksIGVsZW1zLFxuXHRcdFx0XHRcdGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKCBpZCApO1xuXG5cdFx0XHRcdGlmICggZWxlbSApIHtcblxuXHRcdFx0XHRcdC8vIFZlcmlmeSB0aGUgaWQgYXR0cmlidXRlXG5cdFx0XHRcdFx0bm9kZSA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZSggXCJpZFwiICk7XG5cdFx0XHRcdFx0aWYgKCBub2RlICYmIG5vZGUudmFsdWUgPT09IGlkICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFsgZWxlbSBdO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEZhbGwgYmFjayBvbiBnZXRFbGVtZW50c0J5TmFtZVxuXHRcdFx0XHRcdGVsZW1zID0gY29udGV4dC5nZXRFbGVtZW50c0J5TmFtZSggaWQgKTtcblx0XHRcdFx0XHRpID0gMDtcblx0XHRcdFx0XHR3aGlsZSAoICggZWxlbSA9IGVsZW1zWyBpKysgXSApICkge1xuXHRcdFx0XHRcdFx0bm9kZSA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZSggXCJpZFwiICk7XG5cdFx0XHRcdFx0XHRpZiAoIG5vZGUgJiYgbm9kZS52YWx1ZSA9PT0gaWQgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBbIGVsZW0gXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdC8vIFRhZ1xuXHRFeHByLmZpbmQuVEFHID0gZnVuY3Rpb24oIHRhZywgY29udGV4dCApIHtcblx0XHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdFx0cmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHRhZyApO1xuXG5cdFx0Ly8gRG9jdW1lbnRGcmFnbWVudCBub2RlcyBkb24ndCBoYXZlIGdFQlROXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoIHRhZyApO1xuXHRcdH1cblx0fTtcblxuXHQvLyBDbGFzc1xuXHRFeHByLmZpbmQuQ0xBU1MgPSBmdW5jdGlvbiggY2xhc3NOYW1lLCBjb250ZXh0ICkge1xuXHRcdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCApIHtcblx0XHRcdHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIGNsYXNzTmFtZSApO1xuXHRcdH1cblx0fTtcblxuXHQvKiBRU0EvbWF0Y2hlc1NlbGVjdG9yXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXHQvLyBRU0EgYW5kIG1hdGNoZXNTZWxlY3RvciBzdXBwb3J0XG5cblx0cmJ1Z2d5UVNBID0gW107XG5cblx0Ly8gQnVpbGQgUVNBIHJlZ2V4XG5cdC8vIFJlZ2V4IHN0cmF0ZWd5IGFkb3B0ZWQgZnJvbSBEaWVnbyBQZXJpbmlcblx0YXNzZXJ0KCBmdW5jdGlvbiggZWwgKSB7XG5cblx0XHR2YXIgaW5wdXQ7XG5cblx0XHRkb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoIGVsICkuaW5uZXJIVE1MID1cblx0XHRcdFwiPGEgaWQ9J1wiICsgZXhwYW5kbyArIFwiJyBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPlwiICtcblx0XHRcdFwiPHNlbGVjdCBpZD0nXCIgKyBleHBhbmRvICsgXCItXFxyXFxcXCcgZGlzYWJsZWQ9J2Rpc2FibGVkJz5cIiArXG5cdFx0XHRcIjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCI7XG5cblx0XHQvLyBTdXBwb3J0OiBpT1MgPD03IC0gOCBvbmx5XG5cdFx0Ly8gQm9vbGVhbiBhdHRyaWJ1dGVzIGFuZCBcInZhbHVlXCIgYXJlIG5vdCB0cmVhdGVkIGNvcnJlY3RseSBpbiBzb21lIFhNTCBkb2N1bWVudHNcblx0XHRpZiAoICFlbC5xdWVyeVNlbGVjdG9yQWxsKCBcIltzZWxlY3RlZF1cIiApLmxlbmd0aCApIHtcblx0XHRcdHJidWdneVFTQS5wdXNoKCBcIlxcXFxbXCIgKyB3aGl0ZXNwYWNlICsgXCIqKD86dmFsdWV8XCIgKyBib29sZWFucyArIFwiKVwiICk7XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydDogaU9TIDw9NyAtIDggb25seVxuXHRcdGlmICggIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoIFwiW2lkfj1cIiArIGV4cGFuZG8gKyBcIi1dXCIgKS5sZW5ndGggKSB7XG5cdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJ+PVwiICk7XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydDogaU9TIDggb25seVxuXHRcdC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzY4NTFcblx0XHQvLyBJbi1wYWdlIGBzZWxlY3RvciNpZCBzaWJsaW5nLWNvbWJpbmF0b3Igc2VsZWN0b3JgIGZhaWxzXG5cdFx0aWYgKCAhZWwucXVlcnlTZWxlY3RvckFsbCggXCJhI1wiICsgZXhwYW5kbyArIFwiKypcIiApLmxlbmd0aCApIHtcblx0XHRcdHJidWdneVFTQS5wdXNoKCBcIi4jLitbK35dXCIgKTtcblx0XHR9XG5cblx0XHQvLyBTdXBwb3J0OiBDaHJvbWUgPD0xMDUrLCBGaXJlZm94IDw9MTA0KywgU2FmYXJpIDw9MTUuNCtcblx0XHQvLyBJbiBzb21lIG9mIHRoZSBkb2N1bWVudCBraW5kcywgdGhlc2Ugc2VsZWN0b3JzIHdvdWxkbid0IHdvcmsgbmF0aXZlbHkuXG5cdFx0Ly8gVGhpcyBpcyBwcm9iYWJseSBPSyBidXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdlIHdhbnQgdG8gbWFpbnRhaW5cblx0XHQvLyBoYW5kbGluZyB0aGVtIHRocm91Z2ggalF1ZXJ5IHRyYXZlcnNhbCBpbiBqUXVlcnkgMy54LlxuXHRcdGlmICggIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoIFwiOmNoZWNrZWRcIiApLmxlbmd0aCApIHtcblx0XHRcdHJidWdneVFTQS5wdXNoKCBcIjpjaGVja2VkXCIgKTtcblx0XHR9XG5cblx0XHQvLyBTdXBwb3J0OiBXaW5kb3dzIDggTmF0aXZlIEFwcHNcblx0XHQvLyBUaGUgdHlwZSBhbmQgbmFtZSBhdHRyaWJ1dGVzIGFyZSByZXN0cmljdGVkIGR1cmluZyAuaW5uZXJIVE1MIGFzc2lnbm1lbnRcblx0XHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApO1xuXHRcdGlucHV0LnNldEF0dHJpYnV0ZSggXCJ0eXBlXCIsIFwiaGlkZGVuXCIgKTtcblx0XHRlbC5hcHBlbmRDaGlsZCggaW5wdXQgKS5zZXRBdHRyaWJ1dGUoIFwibmFtZVwiLCBcIkRcIiApO1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgOSAtIDExK1xuXHRcdC8vIElFJ3MgOmRpc2FibGVkIHNlbGVjdG9yIGRvZXMgbm90IHBpY2sgdXAgdGhlIGNoaWxkcmVuIG9mIGRpc2FibGVkIGZpZWxkc2V0c1xuXHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTEwNSssIEZpcmVmb3ggPD0xMDQrLCBTYWZhcmkgPD0xNS40K1xuXHRcdC8vIEluIHNvbWUgb2YgdGhlIGRvY3VtZW50IGtpbmRzLCB0aGVzZSBzZWxlY3RvcnMgd291bGRuJ3Qgd29yayBuYXRpdmVseS5cblx0XHQvLyBUaGlzIGlzIHByb2JhYmx5IE9LIGJ1dCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2Ugd2FudCB0byBtYWludGFpblxuXHRcdC8vIGhhbmRsaW5nIHRoZW0gdGhyb3VnaCBqUXVlcnkgdHJhdmVyc2FsIGluIGpRdWVyeSAzLnguXG5cdFx0ZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKCBlbCApLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRpZiAoIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoIFwiOmRpc2FibGVkXCIgKS5sZW5ndGggIT09IDIgKSB7XG5cdFx0XHRyYnVnZ3lRU0EucHVzaCggXCI6ZW5hYmxlZFwiLCBcIjpkaXNhYmxlZFwiICk7XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydDogSUUgMTErLCBFZGdlIDE1IC0gMTgrXG5cdFx0Ly8gSUUgMTEvRWRnZSBkb24ndCBmaW5kIGVsZW1lbnRzIG9uIGEgYFtuYW1lPScnXWAgcXVlcnkgaW4gc29tZSBjYXNlcy5cblx0XHQvLyBBZGRpbmcgYSB0ZW1wb3JhcnkgYXR0cmlidXRlIHRvIHRoZSBkb2N1bWVudCBiZWZvcmUgdGhlIHNlbGVjdGlvbiB3b3Jrc1xuXHRcdC8vIGFyb3VuZCB0aGUgaXNzdWUuXG5cdFx0Ly8gSW50ZXJlc3RpbmdseSwgSUUgMTAgJiBvbGRlciBkb24ndCBzZWVtIHRvIGhhdmUgdGhlIGlzc3VlLlxuXHRcdGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICk7XG5cdFx0aW5wdXQuc2V0QXR0cmlidXRlKCBcIm5hbWVcIiwgXCJcIiApO1xuXHRcdGVsLmFwcGVuZENoaWxkKCBpbnB1dCApO1xuXHRcdGlmICggIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoIFwiW25hbWU9JyddXCIgKS5sZW5ndGggKSB7XG5cdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJcXFxcW1wiICsgd2hpdGVzcGFjZSArIFwiKm5hbWVcIiArIHdoaXRlc3BhY2UgKyBcIio9XCIgK1xuXHRcdFx0XHR3aGl0ZXNwYWNlICsgXCIqKD86Jyd8XFxcIlxcXCIpXCIgKTtcblx0XHR9XG5cdH0gKTtcblxuXHRpZiAoICFzdXBwb3J0LmNzc0hhcyApIHtcblxuXHRcdC8vIFN1cHBvcnQ6IENocm9tZSAxMDUgLSAxMTArLCBTYWZhcmkgMTUuNCAtIDE2LjMrXG5cdFx0Ly8gT3VyIHJlZ3VsYXIgYHRyeS1jYXRjaGAgbWVjaGFuaXNtIGZhaWxzIHRvIGRldGVjdCBuYXRpdmVseS11bnN1cHBvcnRlZFxuXHRcdC8vIHBzZXVkby1jbGFzc2VzIGluc2lkZSBgOmhhcygpYCAoc3VjaCBhcyBgOmhhcyg6Y29udGFpbnMoXCJGb29cIikpYClcblx0XHQvLyBpbiBicm93c2VycyB0aGF0IHBhcnNlIHRoZSBgOmhhcygpYCBhcmd1bWVudCBhcyBhIGZvcmdpdmluZyBzZWxlY3RvciBsaXN0LlxuXHRcdC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9zZWxlY3RvcnMvI3JlbGF0aW9uYWwgbm93IHJlcXVpcmVzIHRoZSBhcmd1bWVudFxuXHRcdC8vIHRvIGJlIHBhcnNlZCB1bmZvcmdpdmluZ2x5LCBidXQgYnJvd3NlcnMgaGF2ZSBub3QgeWV0IGZ1bGx5IGFkanVzdGVkLlxuXHRcdHJidWdneVFTQS5wdXNoKCBcIjpoYXNcIiApO1xuXHR9XG5cblx0cmJ1Z2d5UVNBID0gcmJ1Z2d5UVNBLmxlbmd0aCAmJiBuZXcgUmVnRXhwKCByYnVnZ3lRU0Euam9pbiggXCJ8XCIgKSApO1xuXG5cdC8qIFNvcnRpbmdcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdC8vIERvY3VtZW50IG9yZGVyIHNvcnRpbmdcblx0c29ydE9yZGVyID0gZnVuY3Rpb24oIGEsIGIgKSB7XG5cblx0XHQvLyBGbGFnIGZvciBkdXBsaWNhdGUgcmVtb3ZhbFxuXHRcdGlmICggYSA9PT0gYiApIHtcblx0XHRcdGhhc0R1cGxpY2F0ZSA9IHRydWU7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHQvLyBTb3J0IG9uIG1ldGhvZCBleGlzdGVuY2UgaWYgb25seSBvbmUgaW5wdXQgaGFzIGNvbXBhcmVEb2N1bWVudFBvc2l0aW9uXG5cdFx0dmFyIGNvbXBhcmUgPSAhYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAtICFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO1xuXHRcdGlmICggY29tcGFyZSApIHtcblx0XHRcdHJldHVybiBjb21wYXJlO1xuXHRcdH1cblxuXHRcdC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBpZiBib3RoIGlucHV0cyBiZWxvbmcgdG8gdGhlIHNhbWUgZG9jdW1lbnRcblx0XHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0XHQvLyBJRS9FZGdlIHNvbWV0aW1lcyB0aHJvdyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIHN0cmljdC1jb21wYXJpbmdcblx0XHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdGNvbXBhcmUgPSAoIGEub3duZXJEb2N1bWVudCB8fCBhICkgPT0gKCBiLm93bmVyRG9jdW1lbnQgfHwgYiApID9cblx0XHRcdGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGIgKSA6XG5cblx0XHRcdC8vIE90aGVyd2lzZSB3ZSBrbm93IHRoZXkgYXJlIGRpc2Nvbm5lY3RlZFxuXHRcdFx0MTtcblxuXHRcdC8vIERpc2Nvbm5lY3RlZCBub2Rlc1xuXHRcdGlmICggY29tcGFyZSAmIDEgfHxcblx0XHRcdCggIXN1cHBvcnQuc29ydERldGFjaGVkICYmIGIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGEgKSA9PT0gY29tcGFyZSApICkge1xuXG5cdFx0XHQvLyBDaG9vc2UgdGhlIGZpcnN0IGVsZW1lbnQgdGhhdCBpcyByZWxhdGVkIHRvIG91ciBwcmVmZXJyZWQgZG9jdW1lbnRcblx0XHRcdC8vIFN1cHBvcnQ6IElFIDExKywgRWRnZSAxNyAtIDE4K1xuXHRcdFx0Ly8gSUUvRWRnZSBzb21ldGltZXMgdGhyb3cgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdFx0XHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdFx0XHRpZiAoIGEgPT09IGRvY3VtZW50IHx8IGEub3duZXJEb2N1bWVudCA9PSBwcmVmZXJyZWREb2MgJiZcblx0XHRcdFx0ZmluZC5jb250YWlucyggcHJlZmVycmVkRG9jLCBhICkgKSB7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgMTErLCBFZGdlIDE3IC0gMTgrXG5cdFx0XHQvLyBJRS9FZGdlIHNvbWV0aW1lcyB0aHJvdyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIHN0cmljdC1jb21wYXJpbmdcblx0XHRcdC8vIHR3byBkb2N1bWVudHM7IHNoYWxsb3cgY29tcGFyaXNvbnMgd29yay5cblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0XHRcdGlmICggYiA9PT0gZG9jdW1lbnQgfHwgYi5vd25lckRvY3VtZW50ID09IHByZWZlcnJlZERvYyAmJlxuXHRcdFx0XHRmaW5kLmNvbnRhaW5zKCBwcmVmZXJyZWREb2MsIGIgKSApIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE1haW50YWluIG9yaWdpbmFsIG9yZGVyXG5cdFx0XHRyZXR1cm4gc29ydElucHV0ID9cblx0XHRcdFx0KCBpbmRleE9mLmNhbGwoIHNvcnRJbnB1dCwgYSApIC0gaW5kZXhPZi5jYWxsKCBzb3J0SW5wdXQsIGIgKSApIDpcblx0XHRcdFx0MDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29tcGFyZSAmIDQgPyAtMSA6IDE7XG5cdH07XG5cblx0cmV0dXJuIGRvY3VtZW50O1xufVxuXG5maW5kLm1hdGNoZXMgPSBmdW5jdGlvbiggZXhwciwgZWxlbWVudHMgKSB7XG5cdHJldHVybiBmaW5kKCBleHByLCBudWxsLCBudWxsLCBlbGVtZW50cyApO1xufTtcblxuZmluZC5tYXRjaGVzU2VsZWN0b3IgPSBmdW5jdGlvbiggZWxlbSwgZXhwciApIHtcblx0c2V0RG9jdW1lbnQoIGVsZW0gKTtcblxuXHRpZiAoIGRvY3VtZW50SXNIVE1MICYmXG5cdFx0IW5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGVbIGV4cHIgKyBcIiBcIiBdICYmXG5cdFx0KCAhcmJ1Z2d5UVNBIHx8ICFyYnVnZ3lRU0EudGVzdCggZXhwciApICkgKSB7XG5cblx0XHR0cnkge1xuXHRcdFx0dmFyIHJldCA9IG1hdGNoZXMuY2FsbCggZWxlbSwgZXhwciApO1xuXG5cdFx0XHQvLyBJRSA5J3MgbWF0Y2hlc1NlbGVjdG9yIHJldHVybnMgZmFsc2Ugb24gZGlzY29ubmVjdGVkIG5vZGVzXG5cdFx0XHRpZiAoIHJldCB8fCBzdXBwb3J0LmRpc2Nvbm5lY3RlZE1hdGNoIHx8XG5cblx0XHRcdFx0XHQvLyBBcyB3ZWxsLCBkaXNjb25uZWN0ZWQgbm9kZXMgYXJlIHNhaWQgdG8gYmUgaW4gYSBkb2N1bWVudFxuXHRcdFx0XHRcdC8vIGZyYWdtZW50IGluIElFIDlcblx0XHRcdFx0XHRlbGVtLmRvY3VtZW50ICYmIGVsZW0uZG9jdW1lbnQubm9kZVR5cGUgIT09IDExICkge1xuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKCBlICkge1xuXHRcdFx0bm9ubmF0aXZlU2VsZWN0b3JDYWNoZSggZXhwciwgdHJ1ZSApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmaW5kKCBleHByLCBkb2N1bWVudCwgbnVsbCwgWyBlbGVtIF0gKS5sZW5ndGggPiAwO1xufTtcblxuZmluZC5jb250YWlucyA9IGZ1bmN0aW9uKCBjb250ZXh0LCBlbGVtICkge1xuXG5cdC8vIFNldCBkb2N1bWVudCB2YXJzIGlmIG5lZWRlZFxuXHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0Ly8gSUUvRWRnZSBzb21ldGltZXMgdGhyb3cgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdC8vIHR3byBkb2N1bWVudHM7IHNoYWxsb3cgY29tcGFyaXNvbnMgd29yay5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRpZiAoICggY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQgKSAhPSBkb2N1bWVudCApIHtcblx0XHRzZXREb2N1bWVudCggY29udGV4dCApO1xuXHR9XG5cdHJldHVybiBqUXVlcnkuY29udGFpbnMoIGNvbnRleHQsIGVsZW0gKTtcbn07XG5cblxuZmluZC5hdHRyID0gZnVuY3Rpb24oIGVsZW0sIG5hbWUgKSB7XG5cblx0Ly8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG5cdC8vIFN1cHBvcnQ6IElFIDExKywgRWRnZSAxNyAtIDE4K1xuXHQvLyBJRS9FZGdlIHNvbWV0aW1lcyB0aHJvdyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIHN0cmljdC1jb21wYXJpbmdcblx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdGlmICggKCBlbGVtLm93bmVyRG9jdW1lbnQgfHwgZWxlbSApICE9IGRvY3VtZW50ICkge1xuXHRcdHNldERvY3VtZW50KCBlbGVtICk7XG5cdH1cblxuXHR2YXIgZm4gPSBFeHByLmF0dHJIYW5kbGVbIG5hbWUudG9Mb3dlckNhc2UoKSBdLFxuXG5cdFx0Ly8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBPYmplY3QucHJvdG90eXBlIHByb3BlcnRpZXMgKHNlZSB0cmFjLTEzODA3KVxuXHRcdHZhbCA9IGZuICYmIGhhc093bi5jYWxsKCBFeHByLmF0dHJIYW5kbGUsIG5hbWUudG9Mb3dlckNhc2UoKSApID9cblx0XHRcdGZuKCBlbGVtLCBuYW1lLCAhZG9jdW1lbnRJc0hUTUwgKSA6XG5cdFx0XHR1bmRlZmluZWQ7XG5cblx0aWYgKCB2YWwgIT09IHVuZGVmaW5lZCApIHtcblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCBuYW1lICk7XG59O1xuXG5maW5kLmVycm9yID0gZnVuY3Rpb24oIG1zZyApIHtcblx0dGhyb3cgbmV3IEVycm9yKCBcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiICsgbXNnICk7XG59O1xuXG4vKipcbiAqIERvY3VtZW50IHNvcnRpbmcgYW5kIHJlbW92aW5nIGR1cGxpY2F0ZXNcbiAqIEBwYXJhbSB7QXJyYXlMaWtlfSByZXN1bHRzXG4gKi9cbmpRdWVyeS51bmlxdWVTb3J0ID0gZnVuY3Rpb24oIHJlc3VsdHMgKSB7XG5cdHZhciBlbGVtLFxuXHRcdGR1cGxpY2F0ZXMgPSBbXSxcblx0XHRqID0gMCxcblx0XHRpID0gMDtcblxuXHQvLyBVbmxlc3Mgd2UgKmtub3cqIHdlIGNhbiBkZXRlY3QgZHVwbGljYXRlcywgYXNzdW1lIHRoZWlyIHByZXNlbmNlXG5cdC8vXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjArXG5cdC8vIFRlc3RpbmcgZm9yIGRldGVjdGluZyBkdXBsaWNhdGVzIGlzIHVucHJlZGljdGFibGUgc28gaW5zdGVhZCBhc3N1bWUgd2UgY2FuJ3Rcblx0Ly8gZGVwZW5kIG9uIGR1cGxpY2F0ZSBkZXRlY3Rpb24gaW4gYWxsIGJyb3dzZXJzIHdpdGhvdXQgYSBzdGFibGUgc29ydC5cblx0aGFzRHVwbGljYXRlID0gIXN1cHBvcnQuc29ydFN0YWJsZTtcblx0c29ydElucHV0ID0gIXN1cHBvcnQuc29ydFN0YWJsZSAmJiBzbGljZS5jYWxsKCByZXN1bHRzLCAwICk7XG5cdHNvcnQuY2FsbCggcmVzdWx0cywgc29ydE9yZGVyICk7XG5cblx0aWYgKCBoYXNEdXBsaWNhdGUgKSB7XG5cdFx0d2hpbGUgKCAoIGVsZW0gPSByZXN1bHRzWyBpKysgXSApICkge1xuXHRcdFx0aWYgKCBlbGVtID09PSByZXN1bHRzWyBpIF0gKSB7XG5cdFx0XHRcdGogPSBkdXBsaWNhdGVzLnB1c2goIGkgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0d2hpbGUgKCBqLS0gKSB7XG5cdFx0XHRzcGxpY2UuY2FsbCggcmVzdWx0cywgZHVwbGljYXRlc1sgaiBdLCAxICk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2xlYXIgaW5wdXQgYWZ0ZXIgc29ydGluZyB0byByZWxlYXNlIG9iamVjdHNcblx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvc2l6emxlL3B1bGwvMjI1XG5cdHNvcnRJbnB1dCA9IG51bGw7XG5cblx0cmV0dXJuIHJlc3VsdHM7XG59O1xuXG5qUXVlcnkuZm4udW5pcXVlU29ydCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIGpRdWVyeS51bmlxdWVTb3J0KCBzbGljZS5hcHBseSggdGhpcyApICkgKTtcbn07XG5cbkV4cHIgPSBqUXVlcnkuZXhwciA9IHtcblxuXHQvLyBDYW4gYmUgYWRqdXN0ZWQgYnkgdGhlIHVzZXJcblx0Y2FjaGVMZW5ndGg6IDUwLFxuXG5cdGNyZWF0ZVBzZXVkbzogbWFya0Z1bmN0aW9uLFxuXG5cdG1hdGNoOiBtYXRjaEV4cHIsXG5cblx0YXR0ckhhbmRsZToge30sXG5cblx0ZmluZDoge30sXG5cblx0cmVsYXRpdmU6IHtcblx0XHRcIj5cIjogeyBkaXI6IFwicGFyZW50Tm9kZVwiLCBmaXJzdDogdHJ1ZSB9LFxuXHRcdFwiIFwiOiB7IGRpcjogXCJwYXJlbnROb2RlXCIgfSxcblx0XHRcIitcIjogeyBkaXI6IFwicHJldmlvdXNTaWJsaW5nXCIsIGZpcnN0OiB0cnVlIH0sXG5cdFx0XCJ+XCI6IHsgZGlyOiBcInByZXZpb3VzU2libGluZ1wiIH1cblx0fSxcblxuXHRwcmVGaWx0ZXI6IHtcblx0XHRBVFRSOiBmdW5jdGlvbiggbWF0Y2ggKSB7XG5cdFx0XHRtYXRjaFsgMSBdID0gbWF0Y2hbIDEgXS5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXG5cdFx0XHQvLyBNb3ZlIHRoZSBnaXZlbiB2YWx1ZSB0byBtYXRjaFszXSB3aGV0aGVyIHF1b3RlZCBvciB1bnF1b3RlZFxuXHRcdFx0bWF0Y2hbIDMgXSA9ICggbWF0Y2hbIDMgXSB8fCBtYXRjaFsgNCBdIHx8IG1hdGNoWyA1IF0gfHwgXCJcIiApXG5cdFx0XHRcdC5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXG5cdFx0XHRpZiAoIG1hdGNoWyAyIF0gPT09IFwifj1cIiApIHtcblx0XHRcdFx0bWF0Y2hbIDMgXSA9IFwiIFwiICsgbWF0Y2hbIDMgXSArIFwiIFwiO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbWF0Y2guc2xpY2UoIDAsIDQgKTtcblx0XHR9LFxuXG5cdFx0Q0hJTEQ6IGZ1bmN0aW9uKCBtYXRjaCApIHtcblxuXHRcdFx0LyogbWF0Y2hlcyBmcm9tIG1hdGNoRXhwcltcIkNISUxEXCJdXG5cdFx0XHRcdDEgdHlwZSAob25seXxudGh8Li4uKVxuXHRcdFx0XHQyIHdoYXQgKGNoaWxkfG9mLXR5cGUpXG5cdFx0XHRcdDMgYXJndW1lbnQgKGV2ZW58b2RkfFxcZCp8XFxkKm4oWystXVxcZCspP3wuLi4pXG5cdFx0XHRcdDQgeG4tY29tcG9uZW50IG9mIHhuK3kgYXJndW1lbnQgKFsrLV0/XFxkKm58KVxuXHRcdFx0XHQ1IHNpZ24gb2YgeG4tY29tcG9uZW50XG5cdFx0XHRcdDYgeCBvZiB4bi1jb21wb25lbnRcblx0XHRcdFx0NyBzaWduIG9mIHktY29tcG9uZW50XG5cdFx0XHRcdDggeSBvZiB5LWNvbXBvbmVudFxuXHRcdFx0Ki9cblx0XHRcdG1hdGNoWyAxIF0gPSBtYXRjaFsgMSBdLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRcdGlmICggbWF0Y2hbIDEgXS5zbGljZSggMCwgMyApID09PSBcIm50aFwiICkge1xuXG5cdFx0XHRcdC8vIG50aC0qIHJlcXVpcmVzIGFyZ3VtZW50XG5cdFx0XHRcdGlmICggIW1hdGNoWyAzIF0gKSB7XG5cdFx0XHRcdFx0ZmluZC5lcnJvciggbWF0Y2hbIDAgXSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gbnVtZXJpYyB4IGFuZCB5IHBhcmFtZXRlcnMgZm9yIEV4cHIuZmlsdGVyLkNISUxEXG5cdFx0XHRcdC8vIHJlbWVtYmVyIHRoYXQgZmFsc2UvdHJ1ZSBjYXN0IHJlc3BlY3RpdmVseSB0byAwLzFcblx0XHRcdFx0bWF0Y2hbIDQgXSA9ICsoIG1hdGNoWyA0IF0gP1xuXHRcdFx0XHRcdG1hdGNoWyA1IF0gKyAoIG1hdGNoWyA2IF0gfHwgMSApIDpcblx0XHRcdFx0XHQyICogKCBtYXRjaFsgMyBdID09PSBcImV2ZW5cIiB8fCBtYXRjaFsgMyBdID09PSBcIm9kZFwiIClcblx0XHRcdFx0KTtcblx0XHRcdFx0bWF0Y2hbIDUgXSA9ICsoICggbWF0Y2hbIDcgXSArIG1hdGNoWyA4IF0gKSB8fCBtYXRjaFsgMyBdID09PSBcIm9kZFwiICk7XG5cblx0XHRcdC8vIG90aGVyIHR5cGVzIHByb2hpYml0IGFyZ3VtZW50c1xuXHRcdFx0fSBlbHNlIGlmICggbWF0Y2hbIDMgXSApIHtcblx0XHRcdFx0ZmluZC5lcnJvciggbWF0Y2hbIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0fSxcblxuXHRcdFBTRVVETzogZnVuY3Rpb24oIG1hdGNoICkge1xuXHRcdFx0dmFyIGV4Y2Vzcyxcblx0XHRcdFx0dW5xdW90ZWQgPSAhbWF0Y2hbIDYgXSAmJiBtYXRjaFsgMiBdO1xuXG5cdFx0XHRpZiAoIG1hdGNoRXhwci5DSElMRC50ZXN0KCBtYXRjaFsgMCBdICkgKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBY2NlcHQgcXVvdGVkIGFyZ3VtZW50cyBhcy1pc1xuXHRcdFx0aWYgKCBtYXRjaFsgMyBdICkge1xuXHRcdFx0XHRtYXRjaFsgMiBdID0gbWF0Y2hbIDQgXSB8fCBtYXRjaFsgNSBdIHx8IFwiXCI7XG5cblx0XHRcdC8vIFN0cmlwIGV4Y2VzcyBjaGFyYWN0ZXJzIGZyb20gdW5xdW90ZWQgYXJndW1lbnRzXG5cdFx0XHR9IGVsc2UgaWYgKCB1bnF1b3RlZCAmJiBycHNldWRvLnRlc3QoIHVucXVvdGVkICkgJiZcblxuXHRcdFx0XHQvLyBHZXQgZXhjZXNzIGZyb20gdG9rZW5pemUgKHJlY3Vyc2l2ZWx5KVxuXHRcdFx0XHQoIGV4Y2VzcyA9IHRva2VuaXplKCB1bnF1b3RlZCwgdHJ1ZSApICkgJiZcblxuXHRcdFx0XHQvLyBhZHZhbmNlIHRvIHRoZSBuZXh0IGNsb3NpbmcgcGFyZW50aGVzaXNcblx0XHRcdFx0KCBleGNlc3MgPSB1bnF1b3RlZC5pbmRleE9mKCBcIilcIiwgdW5xdW90ZWQubGVuZ3RoIC0gZXhjZXNzICkgLSB1bnF1b3RlZC5sZW5ndGggKSApIHtcblxuXHRcdFx0XHQvLyBleGNlc3MgaXMgYSBuZWdhdGl2ZSBpbmRleFxuXHRcdFx0XHRtYXRjaFsgMCBdID0gbWF0Y2hbIDAgXS5zbGljZSggMCwgZXhjZXNzICk7XG5cdFx0XHRcdG1hdGNoWyAyIF0gPSB1bnF1b3RlZC5zbGljZSggMCwgZXhjZXNzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJldHVybiBvbmx5IGNhcHR1cmVzIG5lZWRlZCBieSB0aGUgcHNldWRvIGZpbHRlciBtZXRob2QgKHR5cGUgYW5kIGFyZ3VtZW50KVxuXHRcdFx0cmV0dXJuIG1hdGNoLnNsaWNlKCAwLCAzICk7XG5cdFx0fVxuXHR9LFxuXG5cdGZpbHRlcjoge1xuXG5cdFx0VEFHOiBmdW5jdGlvbiggbm9kZU5hbWVTZWxlY3RvciApIHtcblx0XHRcdHZhciBleHBlY3RlZE5vZGVOYW1lID0gbm9kZU5hbWVTZWxlY3Rvci5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRyZXR1cm4gbm9kZU5hbWVTZWxlY3RvciA9PT0gXCIqXCIgP1xuXHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSA6XG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRcdHJldHVybiBub2RlTmFtZSggZWxlbSwgZXhwZWN0ZWROb2RlTmFtZSApO1xuXHRcdFx0XHR9O1xuXHRcdH0sXG5cblx0XHRDTEFTUzogZnVuY3Rpb24oIGNsYXNzTmFtZSApIHtcblx0XHRcdHZhciBwYXR0ZXJuID0gY2xhc3NDYWNoZVsgY2xhc3NOYW1lICsgXCIgXCIgXTtcblxuXHRcdFx0cmV0dXJuIHBhdHRlcm4gfHxcblx0XHRcdFx0KCBwYXR0ZXJuID0gbmV3IFJlZ0V4cCggXCIoXnxcIiArIHdoaXRlc3BhY2UgKyBcIilcIiArIGNsYXNzTmFtZSArXG5cdFx0XHRcdFx0XCIoXCIgKyB3aGl0ZXNwYWNlICsgXCJ8JClcIiApICkgJiZcblx0XHRcdFx0Y2xhc3NDYWNoZSggY2xhc3NOYW1lLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0XHRyZXR1cm4gcGF0dGVybi50ZXN0KFxuXHRcdFx0XHRcdFx0dHlwZW9mIGVsZW0uY2xhc3NOYW1lID09PSBcInN0cmluZ1wiICYmIGVsZW0uY2xhc3NOYW1lIHx8XG5cdFx0XHRcdFx0XHRcdHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuXHRcdFx0XHRcdFx0XHRcdGVsZW0uZ2V0QXR0cmlidXRlKCBcImNsYXNzXCIgKSB8fFxuXHRcdFx0XHRcdFx0XHRcIlwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSApO1xuXHRcdH0sXG5cblx0XHRBVFRSOiBmdW5jdGlvbiggbmFtZSwgb3BlcmF0b3IsIGNoZWNrICkge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gZmluZC5hdHRyKCBlbGVtLCBuYW1lICk7XG5cblx0XHRcdFx0aWYgKCByZXN1bHQgPT0gbnVsbCApIHtcblx0XHRcdFx0XHRyZXR1cm4gb3BlcmF0b3IgPT09IFwiIT1cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoICFvcGVyYXRvciApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlc3VsdCArPSBcIlwiO1xuXG5cdFx0XHRcdGlmICggb3BlcmF0b3IgPT09IFwiPVwiICkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQgPT09IGNoZWNrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggb3BlcmF0b3IgPT09IFwiIT1cIiApIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0ICE9PSBjaGVjaztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIG9wZXJhdG9yID09PSBcIl49XCIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNoZWNrICYmIHJlc3VsdC5pbmRleE9mKCBjaGVjayApID09PSAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggb3BlcmF0b3IgPT09IFwiKj1cIiApIHtcblx0XHRcdFx0XHRyZXR1cm4gY2hlY2sgJiYgcmVzdWx0LmluZGV4T2YoIGNoZWNrICkgPiAtMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIG9wZXJhdG9yID09PSBcIiQ9XCIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNoZWNrICYmIHJlc3VsdC5zbGljZSggLWNoZWNrLmxlbmd0aCApID09PSBjaGVjaztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIG9wZXJhdG9yID09PSBcIn49XCIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuICggXCIgXCIgKyByZXN1bHQucmVwbGFjZSggcndoaXRlc3BhY2UsIFwiIFwiICkgKyBcIiBcIiApXG5cdFx0XHRcdFx0XHQuaW5kZXhPZiggY2hlY2sgKSA+IC0xO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggb3BlcmF0b3IgPT09IFwifD1cIiApIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0ID09PSBjaGVjayB8fCByZXN1bHQuc2xpY2UoIDAsIGNoZWNrLmxlbmd0aCArIDEgKSA9PT0gY2hlY2sgKyBcIi1cIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH07XG5cdFx0fSxcblxuXHRcdENISUxEOiBmdW5jdGlvbiggdHlwZSwgd2hhdCwgX2FyZ3VtZW50LCBmaXJzdCwgbGFzdCApIHtcblx0XHRcdHZhciBzaW1wbGUgPSB0eXBlLnNsaWNlKCAwLCAzICkgIT09IFwibnRoXCIsXG5cdFx0XHRcdGZvcndhcmQgPSB0eXBlLnNsaWNlKCAtNCApICE9PSBcImxhc3RcIixcblx0XHRcdFx0b2ZUeXBlID0gd2hhdCA9PT0gXCJvZi10eXBlXCI7XG5cblx0XHRcdHJldHVybiBmaXJzdCA9PT0gMSAmJiBsYXN0ID09PSAwID9cblxuXHRcdFx0XHQvLyBTaG9ydGN1dCBmb3IgOm50aC0qKG4pXG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRcdHJldHVybiAhIWVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdFx0fSA6XG5cblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0sIF9jb250ZXh0LCB4bWwgKSB7XG5cdFx0XHRcdFx0dmFyIGNhY2hlLCBvdXRlckNhY2hlLCBub2RlLCBub2RlSW5kZXgsIHN0YXJ0LFxuXHRcdFx0XHRcdFx0ZGlyID0gc2ltcGxlICE9PSBmb3J3YXJkID8gXCJuZXh0U2libGluZ1wiIDogXCJwcmV2aW91c1NpYmxpbmdcIixcblx0XHRcdFx0XHRcdHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZSxcblx0XHRcdFx0XHRcdG5hbWUgPSBvZlR5cGUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0XHRcdFx0dXNlQ2FjaGUgPSAheG1sICYmICFvZlR5cGUsXG5cdFx0XHRcdFx0XHRkaWZmID0gZmFsc2U7XG5cblx0XHRcdFx0XHRpZiAoIHBhcmVudCApIHtcblxuXHRcdFx0XHRcdFx0Ly8gOihmaXJzdHxsYXN0fG9ubHkpLShjaGlsZHxvZi10eXBlKVxuXHRcdFx0XHRcdFx0aWYgKCBzaW1wbGUgKSB7XG5cdFx0XHRcdFx0XHRcdHdoaWxlICggZGlyICkge1xuXHRcdFx0XHRcdFx0XHRcdG5vZGUgPSBlbGVtO1xuXHRcdFx0XHRcdFx0XHRcdHdoaWxlICggKCBub2RlID0gbm9kZVsgZGlyIF0gKSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggb2ZUeXBlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZU5hbWUoIG5vZGUsIG5hbWUgKSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGUubm9kZVR5cGUgPT09IDEgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdC8vIFJldmVyc2UgZGlyZWN0aW9uIGZvciA6b25seS0qIChpZiB3ZSBoYXZlbid0IHlldCBkb25lIHNvKVxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0ID0gZGlyID0gdHlwZSA9PT0gXCJvbmx5XCIgJiYgIXN0YXJ0ICYmIFwibmV4dFNpYmxpbmdcIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0c3RhcnQgPSBbIGZvcndhcmQgPyBwYXJlbnQuZmlyc3RDaGlsZCA6IHBhcmVudC5sYXN0Q2hpbGQgXTtcblxuXHRcdFx0XHRcdFx0Ly8gbm9uLXhtbCA6bnRoLWNoaWxkKC4uLikgc3RvcmVzIGNhY2hlIGRhdGEgb24gYHBhcmVudGBcblx0XHRcdFx0XHRcdGlmICggZm9yd2FyZCAmJiB1c2VDYWNoZSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBTZWVrIGBlbGVtYCBmcm9tIGEgcHJldmlvdXNseS1jYWNoZWQgaW5kZXhcblx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZSA9IHBhcmVudFsgZXhwYW5kbyBdIHx8ICggcGFyZW50WyBleHBhbmRvIF0gPSB7fSApO1xuXHRcdFx0XHRcdFx0XHRjYWNoZSA9IG91dGVyQ2FjaGVbIHR5cGUgXSB8fCBbXTtcblx0XHRcdFx0XHRcdFx0bm9kZUluZGV4ID0gY2FjaGVbIDAgXSA9PT0gZGlycnVucyAmJiBjYWNoZVsgMSBdO1xuXHRcdFx0XHRcdFx0XHRkaWZmID0gbm9kZUluZGV4ICYmIGNhY2hlWyAyIF07XG5cdFx0XHRcdFx0XHRcdG5vZGUgPSBub2RlSW5kZXggJiYgcGFyZW50LmNoaWxkTm9kZXNbIG5vZGVJbmRleCBdO1xuXG5cdFx0XHRcdFx0XHRcdHdoaWxlICggKCBub2RlID0gKytub2RlSW5kZXggJiYgbm9kZSAmJiBub2RlWyBkaXIgXSB8fFxuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gRmFsbGJhY2sgdG8gc2Vla2luZyBgZWxlbWAgZnJvbSB0aGUgc3RhcnRcblx0XHRcdFx0XHRcdFx0XHQoIGRpZmYgPSBub2RlSW5kZXggPSAwICkgfHwgc3RhcnQucG9wKCkgKSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFdoZW4gZm91bmQsIGNhY2hlIGluZGV4ZXMgb24gYHBhcmVudGAgYW5kIGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBub2RlLm5vZGVUeXBlID09PSAxICYmICsrZGlmZiAmJiBub2RlID09PSBlbGVtICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZVsgdHlwZSBdID0gWyBkaXJydW5zLCBub2RlSW5kZXgsIGRpZmYgXTtcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFVzZSBwcmV2aW91c2x5LWNhY2hlZCBlbGVtZW50IGluZGV4IGlmIGF2YWlsYWJsZVxuXHRcdFx0XHRcdFx0XHRpZiAoIHVzZUNhY2hlICkge1xuXHRcdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBlbGVtWyBleHBhbmRvIF0gfHwgKCBlbGVtWyBleHBhbmRvIF0gPSB7fSApO1xuXHRcdFx0XHRcdFx0XHRcdGNhY2hlID0gb3V0ZXJDYWNoZVsgdHlwZSBdIHx8IFtdO1xuXHRcdFx0XHRcdFx0XHRcdG5vZGVJbmRleCA9IGNhY2hlWyAwIF0gPT09IGRpcnJ1bnMgJiYgY2FjaGVbIDEgXTtcblx0XHRcdFx0XHRcdFx0XHRkaWZmID0gbm9kZUluZGV4O1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Ly8geG1sIDpudGgtY2hpbGQoLi4uKVxuXHRcdFx0XHRcdFx0XHQvLyBvciA6bnRoLWxhc3QtY2hpbGQoLi4uKSBvciA6bnRoKC1sYXN0KT8tb2YtdHlwZSguLi4pXG5cdFx0XHRcdFx0XHRcdGlmICggZGlmZiA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBVc2UgdGhlIHNhbWUgbG9vcCBhcyBhYm92ZSB0byBzZWVrIGBlbGVtYCBmcm9tIHRoZSBzdGFydFxuXHRcdFx0XHRcdFx0XHRcdHdoaWxlICggKCBub2RlID0gKytub2RlSW5kZXggJiYgbm9kZSAmJiBub2RlWyBkaXIgXSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0KCBkaWZmID0gbm9kZUluZGV4ID0gMCApIHx8IHN0YXJ0LnBvcCgpICkgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmICggKCBvZlR5cGUgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRub2RlTmFtZSggbm9kZSwgbmFtZSApIDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZS5ub2RlVHlwZSA9PT0gMSApICYmXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCsrZGlmZiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBDYWNoZSB0aGUgaW5kZXggb2YgZWFjaCBlbmNvdW50ZXJlZCBlbGVtZW50XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggdXNlQ2FjaGUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZSA9IG5vZGVbIGV4cGFuZG8gXSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KCBub2RlWyBleHBhbmRvIF0gPSB7fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGVbIHR5cGUgXSA9IFsgZGlycnVucywgZGlmZiBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBub2RlID09PSBlbGVtICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEluY29ycG9yYXRlIHRoZSBvZmZzZXQsIHRoZW4gY2hlY2sgYWdhaW5zdCBjeWNsZSBzaXplXG5cdFx0XHRcdFx0XHRkaWZmIC09IGxhc3Q7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZGlmZiA9PT0gZmlyc3QgfHwgKCBkaWZmICUgZmlyc3QgPT09IDAgJiYgZGlmZiAvIGZpcnN0ID49IDAgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0fSxcblxuXHRcdFBTRVVETzogZnVuY3Rpb24oIHBzZXVkbywgYXJndW1lbnQgKSB7XG5cblx0XHRcdC8vIHBzZXVkby1jbGFzcyBuYW1lcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZVxuXHRcdFx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jcHNldWRvLWNsYXNzZXNcblx0XHRcdC8vIFByaW9yaXRpemUgYnkgY2FzZSBzZW5zaXRpdml0eSBpbiBjYXNlIGN1c3RvbSBwc2V1ZG9zIGFyZSBhZGRlZCB3aXRoIHVwcGVyY2FzZSBsZXR0ZXJzXG5cdFx0XHQvLyBSZW1lbWJlciB0aGF0IHNldEZpbHRlcnMgaW5oZXJpdHMgZnJvbSBwc2V1ZG9zXG5cdFx0XHR2YXIgYXJncyxcblx0XHRcdFx0Zm4gPSBFeHByLnBzZXVkb3NbIHBzZXVkbyBdIHx8IEV4cHIuc2V0RmlsdGVyc1sgcHNldWRvLnRvTG93ZXJDYXNlKCkgXSB8fFxuXHRcdFx0XHRcdGZpbmQuZXJyb3IoIFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIiArIHBzZXVkbyApO1xuXG5cdFx0XHQvLyBUaGUgdXNlciBtYXkgdXNlIGNyZWF0ZVBzZXVkbyB0byBpbmRpY2F0ZSB0aGF0XG5cdFx0XHQvLyBhcmd1bWVudHMgYXJlIG5lZWRlZCB0byBjcmVhdGUgdGhlIGZpbHRlciBmdW5jdGlvblxuXHRcdFx0Ly8ganVzdCBhcyBqUXVlcnkgZG9lc1xuXHRcdFx0aWYgKCBmblsgZXhwYW5kbyBdICkge1xuXHRcdFx0XHRyZXR1cm4gZm4oIGFyZ3VtZW50ICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEJ1dCBtYWludGFpbiBzdXBwb3J0IGZvciBvbGQgc2lnbmF0dXJlc1xuXHRcdFx0aWYgKCBmbi5sZW5ndGggPiAxICkge1xuXHRcdFx0XHRhcmdzID0gWyBwc2V1ZG8sIHBzZXVkbywgXCJcIiwgYXJndW1lbnQgXTtcblx0XHRcdFx0cmV0dXJuIEV4cHIuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eSggcHNldWRvLnRvTG93ZXJDYXNlKCkgKSA/XG5cdFx0XHRcdFx0bWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggc2VlZCwgbWF0Y2hlcyApIHtcblx0XHRcdFx0XHRcdHZhciBpZHgsXG5cdFx0XHRcdFx0XHRcdG1hdGNoZWQgPSBmbiggc2VlZCwgYXJndW1lbnQgKSxcblx0XHRcdFx0XHRcdFx0aSA9IG1hdGNoZWQubGVuZ3RoO1xuXHRcdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRcdGlkeCA9IGluZGV4T2YuY2FsbCggc2VlZCwgbWF0Y2hlZFsgaSBdICk7XG5cdFx0XHRcdFx0XHRcdHNlZWRbIGlkeCBdID0gISggbWF0Y2hlc1sgaWR4IF0gPSBtYXRjaGVkWyBpIF0gKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9ICkgOlxuXHRcdFx0XHRcdGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZuKCBlbGVtLCAwLCBhcmdzICk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZuO1xuXHRcdH1cblx0fSxcblxuXHRwc2V1ZG9zOiB7XG5cblx0XHQvLyBQb3RlbnRpYWxseSBjb21wbGV4IHBzZXVkb3Ncblx0XHRub3Q6IG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXG5cdFx0XHQvLyBUcmltIHRoZSBzZWxlY3RvciBwYXNzZWQgdG8gY29tcGlsZVxuXHRcdFx0Ly8gdG8gYXZvaWQgdHJlYXRpbmcgbGVhZGluZyBhbmQgdHJhaWxpbmdcblx0XHRcdC8vIHNwYWNlcyBhcyBjb21iaW5hdG9yc1xuXHRcdFx0dmFyIGlucHV0ID0gW10sXG5cdFx0XHRcdHJlc3VsdHMgPSBbXSxcblx0XHRcdFx0bWF0Y2hlciA9IGNvbXBpbGUoIHNlbGVjdG9yLnJlcGxhY2UoIHJ0cmltQ1NTLCBcIiQxXCIgKSApO1xuXG5cdFx0XHRyZXR1cm4gbWF0Y2hlclsgZXhwYW5kbyBdID9cblx0XHRcdFx0bWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggc2VlZCwgbWF0Y2hlcywgX2NvbnRleHQsIHhtbCApIHtcblx0XHRcdFx0XHR2YXIgZWxlbSxcblx0XHRcdFx0XHRcdHVubWF0Y2hlZCA9IG1hdGNoZXIoIHNlZWQsIG51bGwsIHhtbCwgW10gKSxcblx0XHRcdFx0XHRcdGkgPSBzZWVkLmxlbmd0aDtcblxuXHRcdFx0XHRcdC8vIE1hdGNoIGVsZW1lbnRzIHVubWF0Y2hlZCBieSBgbWF0Y2hlcmBcblx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRcdGlmICggKCBlbGVtID0gdW5tYXRjaGVkWyBpIF0gKSApIHtcblx0XHRcdFx0XHRcdFx0c2VlZFsgaSBdID0gISggbWF0Y2hlc1sgaSBdID0gZWxlbSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApIDpcblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0sIF9jb250ZXh0LCB4bWwgKSB7XG5cdFx0XHRcdFx0aW5wdXRbIDAgXSA9IGVsZW07XG5cdFx0XHRcdFx0bWF0Y2hlciggaW5wdXQsIG51bGwsIHhtbCwgcmVzdWx0cyApO1xuXG5cdFx0XHRcdFx0Ly8gRG9uJ3Qga2VlcCB0aGUgZWxlbWVudFxuXHRcdFx0XHRcdC8vIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9zaXp6bGUvaXNzdWVzLzI5OSlcblx0XHRcdFx0XHRpbnB1dFsgMCBdID0gbnVsbDtcblx0XHRcdFx0XHRyZXR1cm4gIXJlc3VsdHMucG9wKCk7XG5cdFx0XHRcdH07XG5cdFx0fSApLFxuXG5cdFx0aGFzOiBtYXJrRnVuY3Rpb24oIGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuIGZpbmQoIHNlbGVjdG9yLCBlbGVtICkubGVuZ3RoID4gMDtcblx0XHRcdH07XG5cdFx0fSApLFxuXG5cdFx0Y29udGFpbnM6IG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIHRleHQgKSB7XG5cdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRyZXR1cm4gKCBlbGVtLnRleHRDb250ZW50IHx8IGpRdWVyeS50ZXh0KCBlbGVtICkgKS5pbmRleE9mKCB0ZXh0ICkgPiAtMTtcblx0XHRcdH07XG5cdFx0fSApLFxuXG5cdFx0Ly8gXCJXaGV0aGVyIGFuIGVsZW1lbnQgaXMgcmVwcmVzZW50ZWQgYnkgYSA6bGFuZygpIHNlbGVjdG9yXG5cdFx0Ly8gaXMgYmFzZWQgc29sZWx5IG9uIHRoZSBlbGVtZW50J3MgbGFuZ3VhZ2UgdmFsdWVcblx0XHQvLyBiZWluZyBlcXVhbCB0byB0aGUgaWRlbnRpZmllciBDLFxuXHRcdC8vIG9yIGJlZ2lubmluZyB3aXRoIHRoZSBpZGVudGlmaWVyIEMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgXCItXCIuXG5cdFx0Ly8gVGhlIG1hdGNoaW5nIG9mIEMgYWdhaW5zdCB0aGUgZWxlbWVudCdzIGxhbmd1YWdlIHZhbHVlIGlzIHBlcmZvcm1lZCBjYXNlLWluc2Vuc2l0aXZlbHkuXG5cdFx0Ly8gVGhlIGlkZW50aWZpZXIgQyBkb2VzIG5vdCBoYXZlIHRvIGJlIGEgdmFsaWQgbGFuZ3VhZ2UgbmFtZS5cIlxuXHRcdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2xhbmctcHNldWRvXG5cdFx0bGFuZzogbWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggbGFuZyApIHtcblxuXHRcdFx0Ly8gbGFuZyB2YWx1ZSBtdXN0IGJlIGEgdmFsaWQgaWRlbnRpZmllclxuXHRcdFx0aWYgKCAhcmlkZW50aWZpZXIudGVzdCggbGFuZyB8fCBcIlwiICkgKSB7XG5cdFx0XHRcdGZpbmQuZXJyb3IoIFwidW5zdXBwb3J0ZWQgbGFuZzogXCIgKyBsYW5nICk7XG5cdFx0XHR9XG5cdFx0XHRsYW5nID0gbGFuZy5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHZhciBlbGVtTGFuZztcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdGlmICggKCBlbGVtTGFuZyA9IGRvY3VtZW50SXNIVE1MID9cblx0XHRcdFx0XHRcdGVsZW0ubGFuZyA6XG5cdFx0XHRcdFx0XHRlbGVtLmdldEF0dHJpYnV0ZSggXCJ4bWw6bGFuZ1wiICkgfHwgZWxlbS5nZXRBdHRyaWJ1dGUoIFwibGFuZ1wiICkgKSApIHtcblxuXHRcdFx0XHRcdFx0ZWxlbUxhbmcgPSBlbGVtTGFuZy50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1MYW5nID09PSBsYW5nIHx8IGVsZW1MYW5nLmluZGV4T2YoIGxhbmcgKyBcIi1cIiApID09PSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSB3aGlsZSAoICggZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSApICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fTtcblx0XHR9ICksXG5cblx0XHQvLyBNaXNjZWxsYW5lb3VzXG5cdFx0dGFyZ2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXHRcdFx0cmV0dXJuIGhhc2ggJiYgaGFzaC5zbGljZSggMSApID09PSBlbGVtLmlkO1xuXHRcdH0sXG5cblx0XHRyb290OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtID09PSBkb2N1bWVudEVsZW1lbnQ7XG5cdFx0fSxcblxuXHRcdGZvY3VzOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtID09PSBzYWZlQWN0aXZlRWxlbWVudCgpICYmXG5cdFx0XHRcdGRvY3VtZW50Lmhhc0ZvY3VzKCkgJiZcblx0XHRcdFx0ISEoIGVsZW0udHlwZSB8fCBlbGVtLmhyZWYgfHwgfmVsZW0udGFiSW5kZXggKTtcblx0XHR9LFxuXG5cdFx0Ly8gQm9vbGVhbiBwcm9wZXJ0aWVzXG5cdFx0ZW5hYmxlZDogY3JlYXRlRGlzYWJsZWRQc2V1ZG8oIGZhbHNlICksXG5cdFx0ZGlzYWJsZWQ6IGNyZWF0ZURpc2FibGVkUHNldWRvKCB0cnVlICksXG5cblx0XHRjaGVja2VkOiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0Ly8gSW4gQ1NTMywgOmNoZWNrZWQgc2hvdWxkIHJldHVybiBib3RoIGNoZWNrZWQgYW5kIHNlbGVjdGVkIGVsZW1lbnRzXG5cdFx0XHQvLyBodHRwczovL3d3dy53My5vcmcvVFIvMjAxMS9SRUMtY3NzMy1zZWxlY3RvcnMtMjAxMTA5MjkvI2NoZWNrZWRcblx0XHRcdHJldHVybiAoIG5vZGVOYW1lKCBlbGVtLCBcImlucHV0XCIgKSAmJiAhIWVsZW0uY2hlY2tlZCApIHx8XG5cdFx0XHRcdCggbm9kZU5hbWUoIGVsZW0sIFwib3B0aW9uXCIgKSAmJiAhIWVsZW0uc2VsZWN0ZWQgKTtcblx0XHR9LFxuXG5cdFx0c2VsZWN0ZWQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTExK1xuXHRcdFx0Ly8gQWNjZXNzaW5nIHRoZSBzZWxlY3RlZEluZGV4IHByb3BlcnR5XG5cdFx0XHQvLyBmb3JjZXMgdGhlIGJyb3dzZXIgdG8gdHJlYXQgdGhlIGRlZmF1bHQgb3B0aW9uIGFzXG5cdFx0XHQvLyBzZWxlY3RlZCB3aGVuIGluIGFuIG9wdGdyb3VwLlxuXHRcdFx0aWYgKCBlbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHRcdFx0ZWxlbS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBlbGVtLnNlbGVjdGVkID09PSB0cnVlO1xuXHRcdH0sXG5cblx0XHQvLyBDb250ZW50c1xuXHRcdGVtcHR5OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jZW1wdHktcHNldWRvXG5cdFx0XHQvLyA6ZW1wdHkgaXMgbmVnYXRlZCBieSBlbGVtZW50ICgxKSBvciBjb250ZW50IG5vZGVzICh0ZXh0OiAzOyBjZGF0YTogNDsgZW50aXR5IHJlZjogNSksXG5cdFx0XHQvLyAgIGJ1dCBub3QgYnkgb3RoZXJzIChjb21tZW50OiA4OyBwcm9jZXNzaW5nIGluc3RydWN0aW9uOiA3OyBldGMuKVxuXHRcdFx0Ly8gbm9kZVR5cGUgPCA2IHdvcmtzIGJlY2F1c2UgYXR0cmlidXRlcyAoMikgZG8gbm90IGFwcGVhciBhcyBjaGlsZHJlblxuXHRcdFx0Zm9yICggZWxlbSA9IGVsZW0uZmlyc3RDaGlsZDsgZWxlbTsgZWxlbSA9IGVsZW0ubmV4dFNpYmxpbmcgKSB7XG5cdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA8IDYgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0cGFyZW50OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiAhRXhwci5wc2V1ZG9zLmVtcHR5KCBlbGVtICk7XG5cdFx0fSxcblxuXHRcdC8vIEVsZW1lbnQvaW5wdXQgdHlwZXNcblx0XHRoZWFkZXI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIHJoZWFkZXIudGVzdCggZWxlbS5ub2RlTmFtZSApO1xuXHRcdH0sXG5cblx0XHRpbnB1dDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gcmlucHV0cy50ZXN0KCBlbGVtLm5vZGVOYW1lICk7XG5cdFx0fSxcblxuXHRcdGJ1dHRvbjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gbm9kZU5hbWUoIGVsZW0sIFwiaW5wdXRcIiApICYmIGVsZW0udHlwZSA9PT0gXCJidXR0b25cIiB8fFxuXHRcdFx0XHRub2RlTmFtZSggZWxlbSwgXCJidXR0b25cIiApO1xuXHRcdH0sXG5cblx0XHR0ZXh0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHZhciBhdHRyO1xuXHRcdFx0cmV0dXJuIG5vZGVOYW1lKCBlbGVtLCBcImlucHV0XCIgKSAmJiBlbGVtLnR5cGUgPT09IFwidGV4dFwiICYmXG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPDEwIG9ubHlcblx0XHRcdFx0Ly8gTmV3IEhUTUw1IGF0dHJpYnV0ZSB2YWx1ZXMgKGUuZy4sIFwic2VhcmNoXCIpIGFwcGVhclxuXHRcdFx0XHQvLyB3aXRoIGVsZW0udHlwZSA9PT0gXCJ0ZXh0XCJcblx0XHRcdFx0KCAoIGF0dHIgPSBlbGVtLmdldEF0dHJpYnV0ZSggXCJ0eXBlXCIgKSApID09IG51bGwgfHxcblx0XHRcdFx0XHRhdHRyLnRvTG93ZXJDYXNlKCkgPT09IFwidGV4dFwiICk7XG5cdFx0fSxcblxuXHRcdC8vIFBvc2l0aW9uLWluLWNvbGxlY3Rpb25cblx0XHRmaXJzdDogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gWyAwIF07XG5cdFx0fSApLFxuXG5cdFx0bGFzdDogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oIF9tYXRjaEluZGV4ZXMsIGxlbmd0aCApIHtcblx0XHRcdHJldHVybiBbIGxlbmd0aCAtIDEgXTtcblx0XHR9ICksXG5cblx0XHRlcTogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oIF9tYXRjaEluZGV4ZXMsIGxlbmd0aCwgYXJndW1lbnQgKSB7XG5cdFx0XHRyZXR1cm4gWyBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50IF07XG5cdFx0fSApLFxuXG5cdFx0ZXZlbjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xuXHRcdFx0dmFyIGkgPSAwO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpICs9IDIgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0gKSxcblxuXHRcdG9kZDogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xuXHRcdFx0dmFyIGkgPSAxO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpICs9IDIgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0gKSxcblxuXHRcdGx0OiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKCBmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuXHRcdFx0dmFyIGk7XG5cblx0XHRcdGlmICggYXJndW1lbnQgPCAwICkge1xuXHRcdFx0XHRpID0gYXJndW1lbnQgKyBsZW5ndGg7XG5cdFx0XHR9IGVsc2UgaWYgKCBhcmd1bWVudCA+IGxlbmd0aCApIHtcblx0XHRcdFx0aSA9IGxlbmd0aDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGkgPSBhcmd1bWVudDtcblx0XHRcdH1cblxuXHRcdFx0Zm9yICggOyAtLWkgPj0gMDsgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0gKSxcblxuXHRcdGd0OiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKCBmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuXHRcdFx0dmFyIGkgPSBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50O1xuXHRcdFx0Zm9yICggOyArK2kgPCBsZW5ndGg7ICkge1xuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHR9IClcblx0fVxufTtcblxuRXhwci5wc2V1ZG9zLm50aCA9IEV4cHIucHNldWRvcy5lcTtcblxuLy8gQWRkIGJ1dHRvbi9pbnB1dCB0eXBlIHBzZXVkb3NcbmZvciAoIGkgaW4geyByYWRpbzogdHJ1ZSwgY2hlY2tib3g6IHRydWUsIGZpbGU6IHRydWUsIHBhc3N3b3JkOiB0cnVlLCBpbWFnZTogdHJ1ZSB9ICkge1xuXHRFeHByLnBzZXVkb3NbIGkgXSA9IGNyZWF0ZUlucHV0UHNldWRvKCBpICk7XG59XG5mb3IgKCBpIGluIHsgc3VibWl0OiB0cnVlLCByZXNldDogdHJ1ZSB9ICkge1xuXHRFeHByLnBzZXVkb3NbIGkgXSA9IGNyZWF0ZUJ1dHRvblBzZXVkbyggaSApO1xufVxuXG4vLyBFYXN5IEFQSSBmb3IgY3JlYXRpbmcgbmV3IHNldEZpbHRlcnNcbmZ1bmN0aW9uIHNldEZpbHRlcnMoKSB7fVxuc2V0RmlsdGVycy5wcm90b3R5cGUgPSBFeHByLmZpbHRlcnMgPSBFeHByLnBzZXVkb3M7XG5FeHByLnNldEZpbHRlcnMgPSBuZXcgc2V0RmlsdGVycygpO1xuXG5mdW5jdGlvbiB0b2tlbml6ZSggc2VsZWN0b3IsIHBhcnNlT25seSApIHtcblx0dmFyIG1hdGNoZWQsIG1hdGNoLCB0b2tlbnMsIHR5cGUsXG5cdFx0c29GYXIsIGdyb3VwcywgcHJlRmlsdGVycyxcblx0XHRjYWNoZWQgPSB0b2tlbkNhY2hlWyBzZWxlY3RvciArIFwiIFwiIF07XG5cblx0aWYgKCBjYWNoZWQgKSB7XG5cdFx0cmV0dXJuIHBhcnNlT25seSA/IDAgOiBjYWNoZWQuc2xpY2UoIDAgKTtcblx0fVxuXG5cdHNvRmFyID0gc2VsZWN0b3I7XG5cdGdyb3VwcyA9IFtdO1xuXHRwcmVGaWx0ZXJzID0gRXhwci5wcmVGaWx0ZXI7XG5cblx0d2hpbGUgKCBzb0ZhciApIHtcblxuXHRcdC8vIENvbW1hIGFuZCBmaXJzdCBydW5cblx0XHRpZiAoICFtYXRjaGVkIHx8ICggbWF0Y2ggPSByY29tbWEuZXhlYyggc29GYXIgKSApICkge1xuXHRcdFx0aWYgKCBtYXRjaCApIHtcblxuXHRcdFx0XHQvLyBEb24ndCBjb25zdW1lIHRyYWlsaW5nIGNvbW1hcyBhcyB2YWxpZFxuXHRcdFx0XHRzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaFsgMCBdLmxlbmd0aCApIHx8IHNvRmFyO1xuXHRcdFx0fVxuXHRcdFx0Z3JvdXBzLnB1c2goICggdG9rZW5zID0gW10gKSApO1xuXHRcdH1cblxuXHRcdG1hdGNoZWQgPSBmYWxzZTtcblxuXHRcdC8vIENvbWJpbmF0b3JzXG5cdFx0aWYgKCAoIG1hdGNoID0gcmxlYWRpbmdDb21iaW5hdG9yLmV4ZWMoIHNvRmFyICkgKSApIHtcblx0XHRcdG1hdGNoZWQgPSBtYXRjaC5zaGlmdCgpO1xuXHRcdFx0dG9rZW5zLnB1c2goIHtcblx0XHRcdFx0dmFsdWU6IG1hdGNoZWQsXG5cblx0XHRcdFx0Ly8gQ2FzdCBkZXNjZW5kYW50IGNvbWJpbmF0b3JzIHRvIHNwYWNlXG5cdFx0XHRcdHR5cGU6IG1hdGNoWyAwIF0ucmVwbGFjZSggcnRyaW1DU1MsIFwiIFwiIClcblx0XHRcdH0gKTtcblx0XHRcdHNvRmFyID0gc29GYXIuc2xpY2UoIG1hdGNoZWQubGVuZ3RoICk7XG5cdFx0fVxuXG5cdFx0Ly8gRmlsdGVyc1xuXHRcdGZvciAoIHR5cGUgaW4gRXhwci5maWx0ZXIgKSB7XG5cdFx0XHRpZiAoICggbWF0Y2ggPSBtYXRjaEV4cHJbIHR5cGUgXS5leGVjKCBzb0ZhciApICkgJiYgKCAhcHJlRmlsdGVyc1sgdHlwZSBdIHx8XG5cdFx0XHRcdCggbWF0Y2ggPSBwcmVGaWx0ZXJzWyB0eXBlIF0oIG1hdGNoICkgKSApICkge1xuXHRcdFx0XHRtYXRjaGVkID0gbWF0Y2guc2hpZnQoKTtcblx0XHRcdFx0dG9rZW5zLnB1c2goIHtcblx0XHRcdFx0XHR2YWx1ZTogbWF0Y2hlZCxcblx0XHRcdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0XHRcdG1hdGNoZXM6IG1hdGNoXG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0c29GYXIgPSBzb0Zhci5zbGljZSggbWF0Y2hlZC5sZW5ndGggKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICFtYXRjaGVkICkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIGludmFsaWQgZXhjZXNzXG5cdC8vIGlmIHdlJ3JlIGp1c3QgcGFyc2luZ1xuXHQvLyBPdGhlcndpc2UsIHRocm93IGFuIGVycm9yIG9yIHJldHVybiB0b2tlbnNcblx0aWYgKCBwYXJzZU9ubHkgKSB7XG5cdFx0cmV0dXJuIHNvRmFyLmxlbmd0aDtcblx0fVxuXG5cdHJldHVybiBzb0ZhciA/XG5cdFx0ZmluZC5lcnJvciggc2VsZWN0b3IgKSA6XG5cblx0XHQvLyBDYWNoZSB0aGUgdG9rZW5zXG5cdFx0dG9rZW5DYWNoZSggc2VsZWN0b3IsIGdyb3VwcyApLnNsaWNlKCAwICk7XG59XG5cbmZ1bmN0aW9uIHRvU2VsZWN0b3IoIHRva2VucyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IHRva2Vucy5sZW5ndGgsXG5cdFx0c2VsZWN0b3IgPSBcIlwiO1xuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRzZWxlY3RvciArPSB0b2tlbnNbIGkgXS52YWx1ZTtcblx0fVxuXHRyZXR1cm4gc2VsZWN0b3I7XG59XG5cbmZ1bmN0aW9uIGFkZENvbWJpbmF0b3IoIG1hdGNoZXIsIGNvbWJpbmF0b3IsIGJhc2UgKSB7XG5cdHZhciBkaXIgPSBjb21iaW5hdG9yLmRpcixcblx0XHRza2lwID0gY29tYmluYXRvci5uZXh0LFxuXHRcdGtleSA9IHNraXAgfHwgZGlyLFxuXHRcdGNoZWNrTm9uRWxlbWVudHMgPSBiYXNlICYmIGtleSA9PT0gXCJwYXJlbnROb2RlXCIsXG5cdFx0ZG9uZU5hbWUgPSBkb25lKys7XG5cblx0cmV0dXJuIGNvbWJpbmF0b3IuZmlyc3QgP1xuXG5cdFx0Ly8gQ2hlY2sgYWdhaW5zdCBjbG9zZXN0IGFuY2VzdG9yL3ByZWNlZGluZyBlbGVtZW50XG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcblx0XHRcdHdoaWxlICggKCBlbGVtID0gZWxlbVsgZGlyIF0gKSApIHtcblx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSA6XG5cblx0XHQvLyBDaGVjayBhZ2FpbnN0IGFsbCBhbmNlc3Rvci9wcmVjZWRpbmcgZWxlbWVudHNcblx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0dmFyIG9sZENhY2hlLCBvdXRlckNhY2hlLFxuXHRcdFx0XHRuZXdDYWNoZSA9IFsgZGlycnVucywgZG9uZU5hbWUgXTtcblxuXHRcdFx0Ly8gV2UgY2FuJ3Qgc2V0IGFyYml0cmFyeSBkYXRhIG9uIFhNTCBub2Rlcywgc28gdGhleSBkb24ndCBiZW5lZml0IGZyb20gY29tYmluYXRvciBjYWNoaW5nXG5cdFx0XHRpZiAoIHhtbCApIHtcblx0XHRcdFx0d2hpbGUgKCAoIGVsZW0gPSBlbGVtWyBkaXIgXSApICkge1xuXHRcdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBjaGVja05vbkVsZW1lbnRzICkge1xuXHRcdFx0XHRcdFx0aWYgKCBtYXRjaGVyKCBlbGVtLCBjb250ZXh0LCB4bWwgKSApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aGlsZSAoICggZWxlbSA9IGVsZW1bIGRpciBdICkgKSB7XG5cdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XG5cdFx0XHRcdFx0XHRvdXRlckNhY2hlID0gZWxlbVsgZXhwYW5kbyBdIHx8ICggZWxlbVsgZXhwYW5kbyBdID0ge30gKTtcblxuXHRcdFx0XHRcdFx0aWYgKCBza2lwICYmIG5vZGVOYW1lKCBlbGVtLCBza2lwICkgKSB7XG5cdFx0XHRcdFx0XHRcdGVsZW0gPSBlbGVtWyBkaXIgXSB8fCBlbGVtO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICggKCBvbGRDYWNoZSA9IG91dGVyQ2FjaGVbIGtleSBdICkgJiZcblx0XHRcdFx0XHRcdFx0b2xkQ2FjaGVbIDAgXSA9PT0gZGlycnVucyAmJiBvbGRDYWNoZVsgMSBdID09PSBkb25lTmFtZSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBBc3NpZ24gdG8gbmV3Q2FjaGUgc28gcmVzdWx0cyBiYWNrLXByb3BhZ2F0ZSB0byBwcmV2aW91cyBlbGVtZW50c1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKCBuZXdDYWNoZVsgMiBdID0gb2xkQ2FjaGVbIDIgXSApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBSZXVzZSBuZXdjYWNoZSBzbyByZXN1bHRzIGJhY2stcHJvcGFnYXRlIHRvIHByZXZpb3VzIGVsZW1lbnRzXG5cdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGVbIGtleSBdID0gbmV3Q2FjaGU7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQSBtYXRjaCBtZWFucyB3ZSdyZSBkb25lOyBhIGZhaWwgbWVhbnMgd2UgaGF2ZSB0byBrZWVwIGNoZWNraW5nXG5cdFx0XHRcdFx0XHRcdGlmICggKCBuZXdDYWNoZVsgMiBdID0gbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICkgKSApIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApIHtcblx0cmV0dXJuIG1hdGNoZXJzLmxlbmd0aCA+IDEgP1xuXHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHR2YXIgaSA9IG1hdGNoZXJzLmxlbmd0aDtcblx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRpZiAoICFtYXRjaGVyc1sgaSBdKCBlbGVtLCBjb250ZXh0LCB4bWwgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gOlxuXHRcdG1hdGNoZXJzWyAwIF07XG59XG5cbmZ1bmN0aW9uIG11bHRpcGxlQ29udGV4dHMoIHNlbGVjdG9yLCBjb250ZXh0cywgcmVzdWx0cyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IGNvbnRleHRzLmxlbmd0aDtcblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0ZmluZCggc2VsZWN0b3IsIGNvbnRleHRzWyBpIF0sIHJlc3VsdHMgKTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gY29uZGVuc2UoIHVubWF0Y2hlZCwgbWFwLCBmaWx0ZXIsIGNvbnRleHQsIHhtbCApIHtcblx0dmFyIGVsZW0sXG5cdFx0bmV3VW5tYXRjaGVkID0gW10sXG5cdFx0aSA9IDAsXG5cdFx0bGVuID0gdW5tYXRjaGVkLmxlbmd0aCxcblx0XHRtYXBwZWQgPSBtYXAgIT0gbnVsbDtcblxuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRpZiAoICggZWxlbSA9IHVubWF0Y2hlZFsgaSBdICkgKSB7XG5cdFx0XHRpZiAoICFmaWx0ZXIgfHwgZmlsdGVyKCBlbGVtLCBjb250ZXh0LCB4bWwgKSApIHtcblx0XHRcdFx0bmV3VW5tYXRjaGVkLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0aWYgKCBtYXBwZWQgKSB7XG5cdFx0XHRcdFx0bWFwLnB1c2goIGkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBuZXdVbm1hdGNoZWQ7XG59XG5cbmZ1bmN0aW9uIHNldE1hdGNoZXIoIHByZUZpbHRlciwgc2VsZWN0b3IsIG1hdGNoZXIsIHBvc3RGaWx0ZXIsIHBvc3RGaW5kZXIsIHBvc3RTZWxlY3RvciApIHtcblx0aWYgKCBwb3N0RmlsdGVyICYmICFwb3N0RmlsdGVyWyBleHBhbmRvIF0gKSB7XG5cdFx0cG9zdEZpbHRlciA9IHNldE1hdGNoZXIoIHBvc3RGaWx0ZXIgKTtcblx0fVxuXHRpZiAoIHBvc3RGaW5kZXIgJiYgIXBvc3RGaW5kZXJbIGV4cGFuZG8gXSApIHtcblx0XHRwb3N0RmluZGVyID0gc2V0TWF0Y2hlciggcG9zdEZpbmRlciwgcG9zdFNlbGVjdG9yICk7XG5cdH1cblx0cmV0dXJuIG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIHNlZWQsIHJlc3VsdHMsIGNvbnRleHQsIHhtbCApIHtcblx0XHR2YXIgdGVtcCwgaSwgZWxlbSwgbWF0Y2hlck91dCxcblx0XHRcdHByZU1hcCA9IFtdLFxuXHRcdFx0cG9zdE1hcCA9IFtdLFxuXHRcdFx0cHJlZXhpc3RpbmcgPSByZXN1bHRzLmxlbmd0aCxcblxuXHRcdFx0Ly8gR2V0IGluaXRpYWwgZWxlbWVudHMgZnJvbSBzZWVkIG9yIGNvbnRleHRcblx0XHRcdGVsZW1zID0gc2VlZCB8fFxuXHRcdFx0XHRtdWx0aXBsZUNvbnRleHRzKCBzZWxlY3RvciB8fCBcIipcIixcblx0XHRcdFx0XHRjb250ZXh0Lm5vZGVUeXBlID8gWyBjb250ZXh0IF0gOiBjb250ZXh0LCBbXSApLFxuXG5cdFx0XHQvLyBQcmVmaWx0ZXIgdG8gZ2V0IG1hdGNoZXIgaW5wdXQsIHByZXNlcnZpbmcgYSBtYXAgZm9yIHNlZWQtcmVzdWx0cyBzeW5jaHJvbml6YXRpb25cblx0XHRcdG1hdGNoZXJJbiA9IHByZUZpbHRlciAmJiAoIHNlZWQgfHwgIXNlbGVjdG9yICkgP1xuXHRcdFx0XHRjb25kZW5zZSggZWxlbXMsIHByZU1hcCwgcHJlRmlsdGVyLCBjb250ZXh0LCB4bWwgKSA6XG5cdFx0XHRcdGVsZW1zO1xuXG5cdFx0aWYgKCBtYXRjaGVyICkge1xuXG5cdFx0XHQvLyBJZiB3ZSBoYXZlIGEgcG9zdEZpbmRlciwgb3IgZmlsdGVyZWQgc2VlZCwgb3Igbm9uLXNlZWQgcG9zdEZpbHRlclxuXHRcdFx0Ly8gb3IgcHJlZXhpc3RpbmcgcmVzdWx0cyxcblx0XHRcdG1hdGNoZXJPdXQgPSBwb3N0RmluZGVyIHx8ICggc2VlZCA/IHByZUZpbHRlciA6IHByZWV4aXN0aW5nIHx8IHBvc3RGaWx0ZXIgKSA/XG5cblx0XHRcdFx0Ly8gLi4uaW50ZXJtZWRpYXRlIHByb2Nlc3NpbmcgaXMgbmVjZXNzYXJ5XG5cdFx0XHRcdFtdIDpcblxuXHRcdFx0XHQvLyAuLi5vdGhlcndpc2UgdXNlIHJlc3VsdHMgZGlyZWN0bHlcblx0XHRcdFx0cmVzdWx0cztcblxuXHRcdFx0Ly8gRmluZCBwcmltYXJ5IG1hdGNoZXNcblx0XHRcdG1hdGNoZXIoIG1hdGNoZXJJbiwgbWF0Y2hlck91dCwgY29udGV4dCwgeG1sICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1hdGNoZXJPdXQgPSBtYXRjaGVySW47XG5cdFx0fVxuXG5cdFx0Ly8gQXBwbHkgcG9zdEZpbHRlclxuXHRcdGlmICggcG9zdEZpbHRlciApIHtcblx0XHRcdHRlbXAgPSBjb25kZW5zZSggbWF0Y2hlck91dCwgcG9zdE1hcCApO1xuXHRcdFx0cG9zdEZpbHRlciggdGVtcCwgW10sIGNvbnRleHQsIHhtbCApO1xuXG5cdFx0XHQvLyBVbi1tYXRjaCBmYWlsaW5nIGVsZW1lbnRzIGJ5IG1vdmluZyB0aGVtIGJhY2sgdG8gbWF0Y2hlckluXG5cdFx0XHRpID0gdGVtcC5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0aWYgKCAoIGVsZW0gPSB0ZW1wWyBpIF0gKSApIHtcblx0XHRcdFx0XHRtYXRjaGVyT3V0WyBwb3N0TWFwWyBpIF0gXSA9ICEoIG1hdGNoZXJJblsgcG9zdE1hcFsgaSBdIF0gPSBlbGVtICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIHNlZWQgKSB7XG5cdFx0XHRpZiAoIHBvc3RGaW5kZXIgfHwgcHJlRmlsdGVyICkge1xuXHRcdFx0XHRpZiAoIHBvc3RGaW5kZXIgKSB7XG5cblx0XHRcdFx0XHQvLyBHZXQgdGhlIGZpbmFsIG1hdGNoZXJPdXQgYnkgY29uZGVuc2luZyB0aGlzIGludGVybWVkaWF0ZSBpbnRvIHBvc3RGaW5kZXIgY29udGV4dHNcblx0XHRcdFx0XHR0ZW1wID0gW107XG5cdFx0XHRcdFx0aSA9IG1hdGNoZXJPdXQubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoIGVsZW0gPSBtYXRjaGVyT3V0WyBpIF0gKSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBSZXN0b3JlIG1hdGNoZXJJbiBzaW5jZSBlbGVtIGlzIG5vdCB5ZXQgYSBmaW5hbCBtYXRjaFxuXHRcdFx0XHRcdFx0XHR0ZW1wLnB1c2goICggbWF0Y2hlckluWyBpIF0gPSBlbGVtICkgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cG9zdEZpbmRlciggbnVsbCwgKCBtYXRjaGVyT3V0ID0gW10gKSwgdGVtcCwgeG1sICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBNb3ZlIG1hdGNoZWQgZWxlbWVudHMgZnJvbSBzZWVkIHRvIHJlc3VsdHMgdG8ga2VlcCB0aGVtIHN5bmNocm9uaXplZFxuXHRcdFx0XHRpID0gbWF0Y2hlck91dC5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdGlmICggKCBlbGVtID0gbWF0Y2hlck91dFsgaSBdICkgJiZcblx0XHRcdFx0XHRcdCggdGVtcCA9IHBvc3RGaW5kZXIgPyBpbmRleE9mLmNhbGwoIHNlZWQsIGVsZW0gKSA6IHByZU1hcFsgaSBdICkgPiAtMSApIHtcblxuXHRcdFx0XHRcdFx0c2VlZFsgdGVtcCBdID0gISggcmVzdWx0c1sgdGVtcCBdID0gZWxlbSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0Ly8gQWRkIGVsZW1lbnRzIHRvIHJlc3VsdHMsIHRocm91Z2ggcG9zdEZpbmRlciBpZiBkZWZpbmVkXG5cdFx0fSBlbHNlIHtcblx0XHRcdG1hdGNoZXJPdXQgPSBjb25kZW5zZShcblx0XHRcdFx0bWF0Y2hlck91dCA9PT0gcmVzdWx0cyA/XG5cdFx0XHRcdFx0bWF0Y2hlck91dC5zcGxpY2UoIHByZWV4aXN0aW5nLCBtYXRjaGVyT3V0Lmxlbmd0aCApIDpcblx0XHRcdFx0XHRtYXRjaGVyT3V0XG5cdFx0XHQpO1xuXHRcdFx0aWYgKCBwb3N0RmluZGVyICkge1xuXHRcdFx0XHRwb3N0RmluZGVyKCBudWxsLCByZXN1bHRzLCBtYXRjaGVyT3V0LCB4bWwgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsIG1hdGNoZXJPdXQgKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gKTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hlckZyb21Ub2tlbnMoIHRva2VucyApIHtcblx0dmFyIGNoZWNrQ29udGV4dCwgbWF0Y2hlciwgaixcblx0XHRsZW4gPSB0b2tlbnMubGVuZ3RoLFxuXHRcdGxlYWRpbmdSZWxhdGl2ZSA9IEV4cHIucmVsYXRpdmVbIHRva2Vuc1sgMCBdLnR5cGUgXSxcblx0XHRpbXBsaWNpdFJlbGF0aXZlID0gbGVhZGluZ1JlbGF0aXZlIHx8IEV4cHIucmVsYXRpdmVbIFwiIFwiIF0sXG5cdFx0aSA9IGxlYWRpbmdSZWxhdGl2ZSA/IDEgOiAwLFxuXG5cdFx0Ly8gVGhlIGZvdW5kYXRpb25hbCBtYXRjaGVyIGVuc3VyZXMgdGhhdCBlbGVtZW50cyBhcmUgcmVhY2hhYmxlIGZyb20gdG9wLWxldmVsIGNvbnRleHQocylcblx0XHRtYXRjaENvbnRleHQgPSBhZGRDb21iaW5hdG9yKCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtID09PSBjaGVja0NvbnRleHQ7XG5cdFx0fSwgaW1wbGljaXRSZWxhdGl2ZSwgdHJ1ZSApLFxuXHRcdG1hdGNoQW55Q29udGV4dCA9IGFkZENvbWJpbmF0b3IoIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGluZGV4T2YuY2FsbCggY2hlY2tDb250ZXh0LCBlbGVtICkgPiAtMTtcblx0XHR9LCBpbXBsaWNpdFJlbGF0aXZlLCB0cnVlICksXG5cdFx0bWF0Y2hlcnMgPSBbIGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFIDExKywgRWRnZSAxNyAtIDE4K1xuXHRcdFx0Ly8gSUUvRWRnZSBzb21ldGltZXMgdGhyb3cgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdFx0XHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdFx0XHR2YXIgcmV0ID0gKCAhbGVhZGluZ1JlbGF0aXZlICYmICggeG1sIHx8IGNvbnRleHQgIT0gb3V0ZXJtb3N0Q29udGV4dCApICkgfHwgKFxuXHRcdFx0XHQoIGNoZWNrQ29udGV4dCA9IGNvbnRleHQgKS5ub2RlVHlwZSA/XG5cdFx0XHRcdFx0bWF0Y2hDb250ZXh0KCBlbGVtLCBjb250ZXh0LCB4bWwgKSA6XG5cdFx0XHRcdFx0bWF0Y2hBbnlDb250ZXh0KCBlbGVtLCBjb250ZXh0LCB4bWwgKSApO1xuXG5cdFx0XHQvLyBBdm9pZCBoYW5naW5nIG9udG8gZWxlbWVudFxuXHRcdFx0Ly8gKHNlZSBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L3NpenpsZS9pc3N1ZXMvMjk5KVxuXHRcdFx0Y2hlY2tDb250ZXh0ID0gbnVsbDtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSBdO1xuXG5cdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdGlmICggKCBtYXRjaGVyID0gRXhwci5yZWxhdGl2ZVsgdG9rZW5zWyBpIF0udHlwZSBdICkgKSB7XG5cdFx0XHRtYXRjaGVycyA9IFsgYWRkQ29tYmluYXRvciggZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICksIG1hdGNoZXIgKSBdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYXRjaGVyID0gRXhwci5maWx0ZXJbIHRva2Vuc1sgaSBdLnR5cGUgXS5hcHBseSggbnVsbCwgdG9rZW5zWyBpIF0ubWF0Y2hlcyApO1xuXG5cdFx0XHQvLyBSZXR1cm4gc3BlY2lhbCB1cG9uIHNlZWluZyBhIHBvc2l0aW9uYWwgbWF0Y2hlclxuXHRcdFx0aWYgKCBtYXRjaGVyWyBleHBhbmRvIF0gKSB7XG5cblx0XHRcdFx0Ly8gRmluZCB0aGUgbmV4dCByZWxhdGl2ZSBvcGVyYXRvciAoaWYgYW55KSBmb3IgcHJvcGVyIGhhbmRsaW5nXG5cdFx0XHRcdGogPSArK2k7XG5cdFx0XHRcdGZvciAoIDsgaiA8IGxlbjsgaisrICkge1xuXHRcdFx0XHRcdGlmICggRXhwci5yZWxhdGl2ZVsgdG9rZW5zWyBqIF0udHlwZSBdICkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBzZXRNYXRjaGVyKFxuXHRcdFx0XHRcdGkgPiAxICYmIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApLFxuXHRcdFx0XHRcdGkgPiAxICYmIHRvU2VsZWN0b3IoXG5cblx0XHRcdFx0XHRcdC8vIElmIHRoZSBwcmVjZWRpbmcgdG9rZW4gd2FzIGEgZGVzY2VuZGFudCBjb21iaW5hdG9yLCBpbnNlcnQgYW4gaW1wbGljaXQgYW55LWVsZW1lbnQgYCpgXG5cdFx0XHRcdFx0XHR0b2tlbnMuc2xpY2UoIDAsIGkgLSAxIClcblx0XHRcdFx0XHRcdFx0LmNvbmNhdCggeyB2YWx1ZTogdG9rZW5zWyBpIC0gMiBdLnR5cGUgPT09IFwiIFwiID8gXCIqXCIgOiBcIlwiIH0gKVxuXHRcdFx0XHRcdCkucmVwbGFjZSggcnRyaW1DU1MsIFwiJDFcIiApLFxuXHRcdFx0XHRcdG1hdGNoZXIsXG5cdFx0XHRcdFx0aSA8IGogJiYgbWF0Y2hlckZyb21Ub2tlbnMoIHRva2Vucy5zbGljZSggaSwgaiApICksXG5cdFx0XHRcdFx0aiA8IGxlbiAmJiBtYXRjaGVyRnJvbVRva2VucyggKCB0b2tlbnMgPSB0b2tlbnMuc2xpY2UoIGogKSApICksXG5cdFx0XHRcdFx0aiA8IGxlbiAmJiB0b1NlbGVjdG9yKCB0b2tlbnMgKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0bWF0Y2hlcnMucHVzaCggbWF0Y2hlciApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlbGVtZW50TWF0Y2hlciggbWF0Y2hlcnMgKTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hlckZyb21Hcm91cE1hdGNoZXJzKCBlbGVtZW50TWF0Y2hlcnMsIHNldE1hdGNoZXJzICkge1xuXHR2YXIgYnlTZXQgPSBzZXRNYXRjaGVycy5sZW5ndGggPiAwLFxuXHRcdGJ5RWxlbWVudCA9IGVsZW1lbnRNYXRjaGVycy5sZW5ndGggPiAwLFxuXHRcdHN1cGVyTWF0Y2hlciA9IGZ1bmN0aW9uKCBzZWVkLCBjb250ZXh0LCB4bWwsIHJlc3VsdHMsIG91dGVybW9zdCApIHtcblx0XHRcdHZhciBlbGVtLCBqLCBtYXRjaGVyLFxuXHRcdFx0XHRtYXRjaGVkQ291bnQgPSAwLFxuXHRcdFx0XHRpID0gXCIwXCIsXG5cdFx0XHRcdHVubWF0Y2hlZCA9IHNlZWQgJiYgW10sXG5cdFx0XHRcdHNldE1hdGNoZWQgPSBbXSxcblx0XHRcdFx0Y29udGV4dEJhY2t1cCA9IG91dGVybW9zdENvbnRleHQsXG5cblx0XHRcdFx0Ly8gV2UgbXVzdCBhbHdheXMgaGF2ZSBlaXRoZXIgc2VlZCBlbGVtZW50cyBvciBvdXRlcm1vc3QgY29udGV4dFxuXHRcdFx0XHRlbGVtcyA9IHNlZWQgfHwgYnlFbGVtZW50ICYmIEV4cHIuZmluZC5UQUcoIFwiKlwiLCBvdXRlcm1vc3QgKSxcblxuXHRcdFx0XHQvLyBVc2UgaW50ZWdlciBkaXJydW5zIGlmZiB0aGlzIGlzIHRoZSBvdXRlcm1vc3QgbWF0Y2hlclxuXHRcdFx0XHRkaXJydW5zVW5pcXVlID0gKCBkaXJydW5zICs9IGNvbnRleHRCYWNrdXAgPT0gbnVsbCA/IDEgOiBNYXRoLnJhbmRvbSgpIHx8IDAuMSApLFxuXHRcdFx0XHRsZW4gPSBlbGVtcy5sZW5ndGg7XG5cblx0XHRcdGlmICggb3V0ZXJtb3N0ICkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDExKywgRWRnZSAxNyAtIDE4K1xuXHRcdFx0XHQvLyBJRS9FZGdlIHNvbWV0aW1lcyB0aHJvdyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIHN0cmljdC1jb21wYXJpbmdcblx0XHRcdFx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdFx0XHRcdG91dGVybW9zdENvbnRleHQgPSBjb250ZXh0ID09IGRvY3VtZW50IHx8IGNvbnRleHQgfHwgb3V0ZXJtb3N0O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgZWxlbWVudHMgcGFzc2luZyBlbGVtZW50TWF0Y2hlcnMgZGlyZWN0bHkgdG8gcmVzdWx0c1xuXHRcdFx0Ly8gU3VwcG9ydDogaU9TIDw9NyAtIDkgb25seVxuXHRcdFx0Ly8gVG9sZXJhdGUgTm9kZUxpc3QgcHJvcGVydGllcyAoSUU6IFwibGVuZ3RoXCI7IFNhZmFyaTogPG51bWJlcj4pIG1hdGNoaW5nXG5cdFx0XHQvLyBlbGVtZW50cyBieSBpZC4gKHNlZSB0cmFjLTE0MTQyKVxuXHRcdFx0Zm9yICggOyBpICE9PSBsZW4gJiYgKCBlbGVtID0gZWxlbXNbIGkgXSApICE9IG51bGw7IGkrKyApIHtcblx0XHRcdFx0aWYgKCBieUVsZW1lbnQgJiYgZWxlbSApIHtcblx0XHRcdFx0XHRqID0gMDtcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDExKywgRWRnZSAxNyAtIDE4K1xuXHRcdFx0XHRcdC8vIElFL0VkZ2Ugc29tZXRpbWVzIHRocm93IGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHRcdFx0XHRcdC8vIHR3byBkb2N1bWVudHM7IHNoYWxsb3cgY29tcGFyaXNvbnMgd29yay5cblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdFx0XHRcdFx0aWYgKCAhY29udGV4dCAmJiBlbGVtLm93bmVyRG9jdW1lbnQgIT0gZG9jdW1lbnQgKSB7XG5cdFx0XHRcdFx0XHRzZXREb2N1bWVudCggZWxlbSApO1xuXHRcdFx0XHRcdFx0eG1sID0gIWRvY3VtZW50SXNIVE1MO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR3aGlsZSAoICggbWF0Y2hlciA9IGVsZW1lbnRNYXRjaGVyc1sgaisrIF0gKSApIHtcblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlciggZWxlbSwgY29udGV4dCB8fCBkb2N1bWVudCwgeG1sICkgKSB7XG5cdFx0XHRcdFx0XHRcdHB1c2guY2FsbCggcmVzdWx0cywgZWxlbSApO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBvdXRlcm1vc3QgKSB7XG5cdFx0XHRcdFx0XHRkaXJydW5zID0gZGlycnVuc1VuaXF1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUcmFjayB1bm1hdGNoZWQgZWxlbWVudHMgZm9yIHNldCBmaWx0ZXJzXG5cdFx0XHRcdGlmICggYnlTZXQgKSB7XG5cblx0XHRcdFx0XHQvLyBUaGV5IHdpbGwgaGF2ZSBnb25lIHRocm91Z2ggYWxsIHBvc3NpYmxlIG1hdGNoZXJzXG5cdFx0XHRcdFx0aWYgKCAoIGVsZW0gPSAhbWF0Y2hlciAmJiBlbGVtICkgKSB7XG5cdFx0XHRcdFx0XHRtYXRjaGVkQ291bnQtLTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBMZW5ndGhlbiB0aGUgYXJyYXkgZm9yIGV2ZXJ5IGVsZW1lbnQsIG1hdGNoZWQgb3Igbm90XG5cdFx0XHRcdFx0aWYgKCBzZWVkICkge1xuXHRcdFx0XHRcdFx0dW5tYXRjaGVkLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gYGlgIGlzIG5vdyB0aGUgY291bnQgb2YgZWxlbWVudHMgdmlzaXRlZCBhYm92ZSwgYW5kIGFkZGluZyBpdCB0byBgbWF0Y2hlZENvdW50YFxuXHRcdFx0Ly8gbWFrZXMgdGhlIGxhdHRlciBub25uZWdhdGl2ZS5cblx0XHRcdG1hdGNoZWRDb3VudCArPSBpO1xuXG5cdFx0XHQvLyBBcHBseSBzZXQgZmlsdGVycyB0byB1bm1hdGNoZWQgZWxlbWVudHNcblx0XHRcdC8vIE5PVEU6IFRoaXMgY2FuIGJlIHNraXBwZWQgaWYgdGhlcmUgYXJlIG5vIHVubWF0Y2hlZCBlbGVtZW50cyAoaS5lLiwgYG1hdGNoZWRDb3VudGBcblx0XHRcdC8vIGVxdWFscyBgaWApLCB1bmxlc3Mgd2UgZGlkbid0IHZpc2l0IF9hbnlfIGVsZW1lbnRzIGluIHRoZSBhYm92ZSBsb29wIGJlY2F1c2Ugd2UgaGF2ZVxuXHRcdFx0Ly8gbm8gZWxlbWVudCBtYXRjaGVycyBhbmQgbm8gc2VlZC5cblx0XHRcdC8vIEluY3JlbWVudGluZyBhbiBpbml0aWFsbHktc3RyaW5nIFwiMFwiIGBpYCBhbGxvd3MgYGlgIHRvIHJlbWFpbiBhIHN0cmluZyBvbmx5IGluIHRoYXRcblx0XHRcdC8vIGNhc2UsIHdoaWNoIHdpbGwgcmVzdWx0IGluIGEgXCIwMFwiIGBtYXRjaGVkQ291bnRgIHRoYXQgZGlmZmVycyBmcm9tIGBpYCBidXQgaXMgYWxzb1xuXHRcdFx0Ly8gbnVtZXJpY2FsbHkgemVyby5cblx0XHRcdGlmICggYnlTZXQgJiYgaSAhPT0gbWF0Y2hlZENvdW50ICkge1xuXHRcdFx0XHRqID0gMDtcblx0XHRcdFx0d2hpbGUgKCAoIG1hdGNoZXIgPSBzZXRNYXRjaGVyc1sgaisrIF0gKSApIHtcblx0XHRcdFx0XHRtYXRjaGVyKCB1bm1hdGNoZWQsIHNldE1hdGNoZWQsIGNvbnRleHQsIHhtbCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBzZWVkICkge1xuXG5cdFx0XHRcdFx0Ly8gUmVpbnRlZ3JhdGUgZWxlbWVudCBtYXRjaGVzIHRvIGVsaW1pbmF0ZSB0aGUgbmVlZCBmb3Igc29ydGluZ1xuXHRcdFx0XHRcdGlmICggbWF0Y2hlZENvdW50ID4gMCApIHtcblx0XHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoICEoIHVubWF0Y2hlZFsgaSBdIHx8IHNldE1hdGNoZWRbIGkgXSApICkge1xuXHRcdFx0XHRcdFx0XHRcdHNldE1hdGNoZWRbIGkgXSA9IHBvcC5jYWxsKCByZXN1bHRzICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBEaXNjYXJkIGluZGV4IHBsYWNlaG9sZGVyIHZhbHVlcyB0byBnZXQgb25seSBhY3R1YWwgbWF0Y2hlc1xuXHRcdFx0XHRcdHNldE1hdGNoZWQgPSBjb25kZW5zZSggc2V0TWF0Y2hlZCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQWRkIG1hdGNoZXMgdG8gcmVzdWx0c1xuXHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBzZXRNYXRjaGVkICk7XG5cblx0XHRcdFx0Ly8gU2VlZGxlc3Mgc2V0IG1hdGNoZXMgc3VjY2VlZGluZyBtdWx0aXBsZSBzdWNjZXNzZnVsIG1hdGNoZXJzIHN0aXB1bGF0ZSBzb3J0aW5nXG5cdFx0XHRcdGlmICggb3V0ZXJtb3N0ICYmICFzZWVkICYmIHNldE1hdGNoZWQubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRcdCggbWF0Y2hlZENvdW50ICsgc2V0TWF0Y2hlcnMubGVuZ3RoICkgPiAxICkge1xuXG5cdFx0XHRcdFx0alF1ZXJ5LnVuaXF1ZVNvcnQoIHJlc3VsdHMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBPdmVycmlkZSBtYW5pcHVsYXRpb24gb2YgZ2xvYmFscyBieSBuZXN0ZWQgbWF0Y2hlcnNcblx0XHRcdGlmICggb3V0ZXJtb3N0ICkge1xuXHRcdFx0XHRkaXJydW5zID0gZGlycnVuc1VuaXF1ZTtcblx0XHRcdFx0b3V0ZXJtb3N0Q29udGV4dCA9IGNvbnRleHRCYWNrdXA7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB1bm1hdGNoZWQ7XG5cdFx0fTtcblxuXHRyZXR1cm4gYnlTZXQgP1xuXHRcdG1hcmtGdW5jdGlvbiggc3VwZXJNYXRjaGVyICkgOlxuXHRcdHN1cGVyTWF0Y2hlcjtcbn1cblxuZnVuY3Rpb24gY29tcGlsZSggc2VsZWN0b3IsIG1hdGNoIC8qIEludGVybmFsIFVzZSBPbmx5ICovICkge1xuXHR2YXIgaSxcblx0XHRzZXRNYXRjaGVycyA9IFtdLFxuXHRcdGVsZW1lbnRNYXRjaGVycyA9IFtdLFxuXHRcdGNhY2hlZCA9IGNvbXBpbGVyQ2FjaGVbIHNlbGVjdG9yICsgXCIgXCIgXTtcblxuXHRpZiAoICFjYWNoZWQgKSB7XG5cblx0XHQvLyBHZW5lcmF0ZSBhIGZ1bmN0aW9uIG9mIHJlY3Vyc2l2ZSBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgdXNlZCB0byBjaGVjayBlYWNoIGVsZW1lbnRcblx0XHRpZiAoICFtYXRjaCApIHtcblx0XHRcdG1hdGNoID0gdG9rZW5pemUoIHNlbGVjdG9yICk7XG5cdFx0fVxuXHRcdGkgPSBtYXRjaC5sZW5ndGg7XG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRjYWNoZWQgPSBtYXRjaGVyRnJvbVRva2VucyggbWF0Y2hbIGkgXSApO1xuXHRcdFx0aWYgKCBjYWNoZWRbIGV4cGFuZG8gXSApIHtcblx0XHRcdFx0c2V0TWF0Y2hlcnMucHVzaCggY2FjaGVkICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50TWF0Y2hlcnMucHVzaCggY2FjaGVkICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2FjaGUgdGhlIGNvbXBpbGVkIGZ1bmN0aW9uXG5cdFx0Y2FjaGVkID0gY29tcGlsZXJDYWNoZSggc2VsZWN0b3IsXG5cdFx0XHRtYXRjaGVyRnJvbUdyb3VwTWF0Y2hlcnMoIGVsZW1lbnRNYXRjaGVycywgc2V0TWF0Y2hlcnMgKSApO1xuXG5cdFx0Ly8gU2F2ZSBzZWxlY3RvciBhbmQgdG9rZW5pemF0aW9uXG5cdFx0Y2FjaGVkLnNlbGVjdG9yID0gc2VsZWN0b3I7XG5cdH1cblx0cmV0dXJuIGNhY2hlZDtcbn1cblxuLyoqXG4gKiBBIGxvdy1sZXZlbCBzZWxlY3Rpb24gZnVuY3Rpb24gdGhhdCB3b3JrcyB3aXRoIGpRdWVyeSdzIGNvbXBpbGVkXG4gKiAgc2VsZWN0b3IgZnVuY3Rpb25zXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gc2VsZWN0b3IgQSBzZWxlY3RvciBvciBhIHByZS1jb21waWxlZFxuICogIHNlbGVjdG9yIGZ1bmN0aW9uIGJ1aWx0IHdpdGggalF1ZXJ5IHNlbGVjdG9yIGNvbXBpbGVcbiAqIEBwYXJhbSB7RWxlbWVudH0gY29udGV4dFxuICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdHNdXG4gKiBAcGFyYW0ge0FycmF5fSBbc2VlZF0gQSBzZXQgb2YgZWxlbWVudHMgdG8gbWF0Y2ggYWdhaW5zdFxuICovXG5mdW5jdGlvbiBzZWxlY3QoIHNlbGVjdG9yLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkICkge1xuXHR2YXIgaSwgdG9rZW5zLCB0b2tlbiwgdHlwZSwgZmluZCxcblx0XHRjb21waWxlZCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJmdW5jdGlvblwiICYmIHNlbGVjdG9yLFxuXHRcdG1hdGNoID0gIXNlZWQgJiYgdG9rZW5pemUoICggc2VsZWN0b3IgPSBjb21waWxlZC5zZWxlY3RvciB8fCBzZWxlY3RvciApICk7XG5cblx0cmVzdWx0cyA9IHJlc3VsdHMgfHwgW107XG5cblx0Ly8gVHJ5IHRvIG1pbmltaXplIG9wZXJhdGlvbnMgaWYgdGhlcmUgaXMgb25seSBvbmUgc2VsZWN0b3IgaW4gdGhlIGxpc3QgYW5kIG5vIHNlZWRcblx0Ly8gKHRoZSBsYXR0ZXIgb2Ygd2hpY2ggZ3VhcmFudGVlcyB1cyBjb250ZXh0KVxuXHRpZiAoIG1hdGNoLmxlbmd0aCA9PT0gMSApIHtcblxuXHRcdC8vIFJlZHVjZSBjb250ZXh0IGlmIHRoZSBsZWFkaW5nIGNvbXBvdW5kIHNlbGVjdG9yIGlzIGFuIElEXG5cdFx0dG9rZW5zID0gbWF0Y2hbIDAgXSA9IG1hdGNoWyAwIF0uc2xpY2UoIDAgKTtcblx0XHRpZiAoIHRva2Vucy5sZW5ndGggPiAyICYmICggdG9rZW4gPSB0b2tlbnNbIDAgXSApLnR5cGUgPT09IFwiSURcIiAmJlxuXHRcdFx0XHRjb250ZXh0Lm5vZGVUeXBlID09PSA5ICYmIGRvY3VtZW50SXNIVE1MICYmIEV4cHIucmVsYXRpdmVbIHRva2Vuc1sgMSBdLnR5cGUgXSApIHtcblxuXHRcdFx0Y29udGV4dCA9ICggRXhwci5maW5kLklEKFxuXHRcdFx0XHR0b2tlbi5tYXRjaGVzWyAwIF0ucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKSxcblx0XHRcdFx0Y29udGV4dFxuXHRcdFx0KSB8fCBbXSApWyAwIF07XG5cdFx0XHRpZiAoICFjb250ZXh0ICkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblxuXHRcdFx0Ly8gUHJlY29tcGlsZWQgbWF0Y2hlcnMgd2lsbCBzdGlsbCB2ZXJpZnkgYW5jZXN0cnksIHNvIHN0ZXAgdXAgYSBsZXZlbFxuXHRcdFx0fSBlbHNlIGlmICggY29tcGlsZWQgKSB7XG5cdFx0XHRcdGNvbnRleHQgPSBjb250ZXh0LnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cblx0XHRcdHNlbGVjdG9yID0gc2VsZWN0b3Iuc2xpY2UoIHRva2Vucy5zaGlmdCgpLnZhbHVlLmxlbmd0aCApO1xuXHRcdH1cblxuXHRcdC8vIEZldGNoIGEgc2VlZCBzZXQgZm9yIHJpZ2h0LXRvLWxlZnQgbWF0Y2hpbmdcblx0XHRpID0gbWF0Y2hFeHByLm5lZWRzQ29udGV4dC50ZXN0KCBzZWxlY3RvciApID8gMCA6IHRva2Vucy5sZW5ndGg7XG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHR0b2tlbiA9IHRva2Vuc1sgaSBdO1xuXG5cdFx0XHQvLyBBYm9ydCBpZiB3ZSBoaXQgYSBjb21iaW5hdG9yXG5cdFx0XHRpZiAoIEV4cHIucmVsYXRpdmVbICggdHlwZSA9IHRva2VuLnR5cGUgKSBdICkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmICggKCBmaW5kID0gRXhwci5maW5kWyB0eXBlIF0gKSApIHtcblxuXHRcdFx0XHQvLyBTZWFyY2gsIGV4cGFuZGluZyBjb250ZXh0IGZvciBsZWFkaW5nIHNpYmxpbmcgY29tYmluYXRvcnNcblx0XHRcdFx0aWYgKCAoIHNlZWQgPSBmaW5kKFxuXHRcdFx0XHRcdHRva2VuLm1hdGNoZXNbIDAgXS5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApLFxuXHRcdFx0XHRcdHJzaWJsaW5nLnRlc3QoIHRva2Vuc1sgMCBdLnR5cGUgKSAmJlxuXHRcdFx0XHRcdFx0dGVzdENvbnRleHQoIGNvbnRleHQucGFyZW50Tm9kZSApIHx8IGNvbnRleHRcblx0XHRcdFx0KSApICkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgc2VlZCBpcyBlbXB0eSBvciBubyB0b2tlbnMgcmVtYWluLCB3ZSBjYW4gcmV0dXJuIGVhcmx5XG5cdFx0XHRcdFx0dG9rZW5zLnNwbGljZSggaSwgMSApO1xuXHRcdFx0XHRcdHNlbGVjdG9yID0gc2VlZC5sZW5ndGggJiYgdG9TZWxlY3RvciggdG9rZW5zICk7XG5cdFx0XHRcdFx0aWYgKCAhc2VsZWN0b3IgKSB7XG5cdFx0XHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBzZWVkICk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIENvbXBpbGUgYW5kIGV4ZWN1dGUgYSBmaWx0ZXJpbmcgZnVuY3Rpb24gaWYgb25lIGlzIG5vdCBwcm92aWRlZFxuXHQvLyBQcm92aWRlIGBtYXRjaGAgdG8gYXZvaWQgcmV0b2tlbml6YXRpb24gaWYgd2UgbW9kaWZpZWQgdGhlIHNlbGVjdG9yIGFib3ZlXG5cdCggY29tcGlsZWQgfHwgY29tcGlsZSggc2VsZWN0b3IsIG1hdGNoICkgKShcblx0XHRzZWVkLFxuXHRcdGNvbnRleHQsXG5cdFx0IWRvY3VtZW50SXNIVE1MLFxuXHRcdHJlc3VsdHMsXG5cdFx0IWNvbnRleHQgfHwgcnNpYmxpbmcudGVzdCggc2VsZWN0b3IgKSAmJiB0ZXN0Q29udGV4dCggY29udGV4dC5wYXJlbnROb2RlICkgfHwgY29udGV4dFxuXHQpO1xuXHRyZXR1cm4gcmVzdWx0cztcbn1cblxuLy8gT25lLXRpbWUgYXNzaWdubWVudHNcblxuLy8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCAtIDQuMStcbi8vIFNvcnQgc3RhYmlsaXR5XG5zdXBwb3J0LnNvcnRTdGFibGUgPSBleHBhbmRvLnNwbGl0KCBcIlwiICkuc29ydCggc29ydE9yZGVyICkuam9pbiggXCJcIiApID09PSBleHBhbmRvO1xuXG4vLyBJbml0aWFsaXplIGFnYWluc3QgdGhlIGRlZmF1bHQgZG9jdW1lbnRcbnNldERvY3VtZW50KCk7XG5cbi8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgLSA0LjErXG4vLyBEZXRhY2hlZCBub2RlcyBjb25mb3VuZGluZ2x5IGZvbGxvdyAqZWFjaCBvdGhlcipcbnN1cHBvcnQuc29ydERldGFjaGVkID0gYXNzZXJ0KCBmdW5jdGlvbiggZWwgKSB7XG5cblx0Ly8gU2hvdWxkIHJldHVybiAxLCBidXQgcmV0dXJucyA0IChmb2xsb3dpbmcpXG5cdHJldHVybiBlbC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJmaWVsZHNldFwiICkgKSAmIDE7XG59ICk7XG5cbmpRdWVyeS5maW5kID0gZmluZDtcblxuLy8gRGVwcmVjYXRlZFxualF1ZXJ5LmV4cHJbIFwiOlwiIF0gPSBqUXVlcnkuZXhwci5wc2V1ZG9zO1xualF1ZXJ5LnVuaXF1ZSA9IGpRdWVyeS51bmlxdWVTb3J0O1xuXG4vLyBUaGVzZSBoYXZlIGFsd2F5cyBiZWVuIHByaXZhdGUsIGJ1dCB0aGV5IHVzZWQgdG8gYmUgZG9jdW1lbnRlZCBhcyBwYXJ0IG9mXG4vLyBTaXp6bGUgc28gbGV0J3MgbWFpbnRhaW4gdGhlbSBmb3Igbm93IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBwdXJwb3Nlcy5cbmZpbmQuY29tcGlsZSA9IGNvbXBpbGU7XG5maW5kLnNlbGVjdCA9IHNlbGVjdDtcbmZpbmQuc2V0RG9jdW1lbnQgPSBzZXREb2N1bWVudDtcbmZpbmQudG9rZW5pemUgPSB0b2tlbml6ZTtcblxuZmluZC5lc2NhcGUgPSBqUXVlcnkuZXNjYXBlU2VsZWN0b3I7XG5maW5kLmdldFRleHQgPSBqUXVlcnkudGV4dDtcbmZpbmQuaXNYTUwgPSBqUXVlcnkuaXNYTUxEb2M7XG5maW5kLnNlbGVjdG9ycyA9IGpRdWVyeS5leHByO1xuZmluZC5zdXBwb3J0ID0galF1ZXJ5LnN1cHBvcnQ7XG5maW5kLnVuaXF1ZVNvcnQgPSBqUXVlcnkudW5pcXVlU29ydDtcblxuXHQvKiBlc2xpbnQtZW5hYmxlICovXG5cbn0gKSgpO1xuXG5cbnZhciBkaXIgPSBmdW5jdGlvbiggZWxlbSwgZGlyLCB1bnRpbCApIHtcblx0dmFyIG1hdGNoZWQgPSBbXSxcblx0XHR0cnVuY2F0ZSA9IHVudGlsICE9PSB1bmRlZmluZWQ7XG5cblx0d2hpbGUgKCAoIGVsZW0gPSBlbGVtWyBkaXIgXSApICYmIGVsZW0ubm9kZVR5cGUgIT09IDkgKSB7XG5cdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0aWYgKCB0cnVuY2F0ZSAmJiBqUXVlcnkoIGVsZW0gKS5pcyggdW50aWwgKSApIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRtYXRjaGVkLnB1c2goIGVsZW0gKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG1hdGNoZWQ7XG59O1xuXG5cbnZhciBzaWJsaW5ncyA9IGZ1bmN0aW9uKCBuLCBlbGVtICkge1xuXHR2YXIgbWF0Y2hlZCA9IFtdO1xuXG5cdGZvciAoIDsgbjsgbiA9IG4ubmV4dFNpYmxpbmcgKSB7XG5cdFx0aWYgKCBuLm5vZGVUeXBlID09PSAxICYmIG4gIT09IGVsZW0gKSB7XG5cdFx0XHRtYXRjaGVkLnB1c2goIG4gKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbWF0Y2hlZDtcbn07XG5cblxudmFyIHJuZWVkc0NvbnRleHQgPSBqUXVlcnkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7XG5cbnZhciByc2luZ2xlVGFnID0gKCAvXjwoW2Etel1bXlxcL1xcMD46XFx4MjBcXHRcXHJcXG5cXGZdKilbXFx4MjBcXHRcXHJcXG5cXGZdKlxcLz8+KD86PFxcL1xcMT58KSQvaSApO1xuXG5cblxuLy8gSW1wbGVtZW50IHRoZSBpZGVudGljYWwgZnVuY3Rpb25hbGl0eSBmb3IgZmlsdGVyIGFuZCBub3RcbmZ1bmN0aW9uIHdpbm5vdyggZWxlbWVudHMsIHF1YWxpZmllciwgbm90ICkge1xuXHRpZiAoIGlzRnVuY3Rpb24oIHF1YWxpZmllciApICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtLCBpICkge1xuXHRcdFx0cmV0dXJuICEhcXVhbGlmaWVyLmNhbGwoIGVsZW0sIGksIGVsZW0gKSAhPT0gbm90O1xuXHRcdH0gKTtcblx0fVxuXG5cdC8vIFNpbmdsZSBlbGVtZW50XG5cdGlmICggcXVhbGlmaWVyLm5vZGVUeXBlICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuICggZWxlbSA9PT0gcXVhbGlmaWVyICkgIT09IG5vdDtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBBcnJheWxpa2Ugb2YgZWxlbWVudHMgKGpRdWVyeSwgYXJndW1lbnRzLCBBcnJheSlcblx0aWYgKCB0eXBlb2YgcXVhbGlmaWVyICE9PSBcInN0cmluZ1wiICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuICggaW5kZXhPZi5jYWxsKCBxdWFsaWZpZXIsIGVsZW0gKSA+IC0xICkgIT09IG5vdDtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBGaWx0ZXJlZCBkaXJlY3RseSBmb3IgYm90aCBzaW1wbGUgYW5kIGNvbXBsZXggc2VsZWN0b3JzXG5cdHJldHVybiBqUXVlcnkuZmlsdGVyKCBxdWFsaWZpZXIsIGVsZW1lbnRzLCBub3QgKTtcbn1cblxualF1ZXJ5LmZpbHRlciA9IGZ1bmN0aW9uKCBleHByLCBlbGVtcywgbm90ICkge1xuXHR2YXIgZWxlbSA9IGVsZW1zWyAwIF07XG5cblx0aWYgKCBub3QgKSB7XG5cdFx0ZXhwciA9IFwiOm5vdChcIiArIGV4cHIgKyBcIilcIjtcblx0fVxuXG5cdGlmICggZWxlbXMubGVuZ3RoID09PSAxICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvciggZWxlbSwgZXhwciApID8gWyBlbGVtIF0gOiBbXTtcblx0fVxuXG5cdHJldHVybiBqUXVlcnkuZmluZC5tYXRjaGVzKCBleHByLCBqUXVlcnkuZ3JlcCggZWxlbXMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBlbGVtLm5vZGVUeXBlID09PSAxO1xuXHR9ICkgKTtcbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0ZmluZDogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHZhciBpLCByZXQsXG5cdFx0XHRsZW4gPSB0aGlzLmxlbmd0aCxcblx0XHRcdHNlbGYgPSB0aGlzO1xuXG5cdFx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIGpRdWVyeSggc2VsZWN0b3IgKS5maWx0ZXIoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHRcdGlmICggalF1ZXJ5LmNvbnRhaW5zKCBzZWxmWyBpIF0sIHRoaXMgKSApIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApICk7XG5cdFx0fVxuXG5cdFx0cmV0ID0gdGhpcy5wdXNoU3RhY2soIFtdICk7XG5cblx0XHRmb3IgKCBpID0gMDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0alF1ZXJ5LmZpbmQoIHNlbGVjdG9yLCBzZWxmWyBpIF0sIHJldCApO1xuXHRcdH1cblxuXHRcdHJldHVybiBsZW4gPiAxID8galF1ZXJ5LnVuaXF1ZVNvcnQoIHJldCApIDogcmV0O1xuXHR9LFxuXHRmaWx0ZXI6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHdpbm5vdyggdGhpcywgc2VsZWN0b3IgfHwgW10sIGZhbHNlICkgKTtcblx0fSxcblx0bm90OiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCB3aW5ub3coIHRoaXMsIHNlbGVjdG9yIHx8IFtdLCB0cnVlICkgKTtcblx0fSxcblx0aXM6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gISF3aW5ub3coXG5cdFx0XHR0aGlzLFxuXG5cdFx0XHQvLyBJZiB0aGlzIGlzIGEgcG9zaXRpb25hbC9yZWxhdGl2ZSBzZWxlY3RvciwgY2hlY2sgbWVtYmVyc2hpcCBpbiB0aGUgcmV0dXJuZWQgc2V0XG5cdFx0XHQvLyBzbyAkKFwicDpmaXJzdFwiKS5pcyhcInA6bGFzdFwiKSB3b24ndCByZXR1cm4gdHJ1ZSBmb3IgYSBkb2Mgd2l0aCB0d28gXCJwXCIuXG5cdFx0XHR0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgJiYgcm5lZWRzQ29udGV4dC50ZXN0KCBzZWxlY3RvciApID9cblx0XHRcdFx0alF1ZXJ5KCBzZWxlY3RvciApIDpcblx0XHRcdFx0c2VsZWN0b3IgfHwgW10sXG5cdFx0XHRmYWxzZVxuXHRcdCkubGVuZ3RoO1xuXHR9XG59ICk7XG5cblxuLy8gSW5pdGlhbGl6ZSBhIGpRdWVyeSBvYmplY3RcblxuXG4vLyBBIGNlbnRyYWwgcmVmZXJlbmNlIHRvIHRoZSByb290IGpRdWVyeShkb2N1bWVudClcbnZhciByb290alF1ZXJ5LFxuXG5cdC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXG5cdC8vIFByaW9yaXRpemUgI2lkIG92ZXIgPHRhZz4gdG8gYXZvaWQgWFNTIHZpYSBsb2NhdGlvbi5oYXNoICh0cmFjLTk1MjEpXG5cdC8vIFN0cmljdCBIVE1MIHJlY29nbml0aW9uICh0cmFjLTExMjkwOiBtdXN0IHN0YXJ0IHdpdGggPClcblx0Ly8gU2hvcnRjdXQgc2ltcGxlICNpZCBjYXNlIGZvciBzcGVlZFxuXHRycXVpY2tFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC8sXG5cblx0aW5pdCA9IGpRdWVyeS5mbi5pbml0ID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0LCByb290ICkge1xuXHRcdHZhciBtYXRjaCwgZWxlbTtcblxuXHRcdC8vIEhBTkRMRTogJChcIlwiKSwgJChudWxsKSwgJCh1bmRlZmluZWQpLCAkKGZhbHNlKVxuXHRcdGlmICggIXNlbGVjdG9yICkge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0Ly8gTWV0aG9kIGluaXQoKSBhY2NlcHRzIGFuIGFsdGVybmF0ZSByb290alF1ZXJ5XG5cdFx0Ly8gc28gbWlncmF0ZSBjYW4gc3VwcG9ydCBqUXVlcnkuc3ViIChnaC0yMTAxKVxuXHRcdHJvb3QgPSByb290IHx8IHJvb3RqUXVlcnk7XG5cblx0XHQvLyBIYW5kbGUgSFRNTCBzdHJpbmdzXG5cdFx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRpZiAoIHNlbGVjdG9yWyAwIF0gPT09IFwiPFwiICYmXG5cdFx0XHRcdHNlbGVjdG9yWyBzZWxlY3Rvci5sZW5ndGggLSAxIF0gPT09IFwiPlwiICYmXG5cdFx0XHRcdHNlbGVjdG9yLmxlbmd0aCA+PSAzICkge1xuXG5cdFx0XHRcdC8vIEFzc3VtZSB0aGF0IHN0cmluZ3MgdGhhdCBzdGFydCBhbmQgZW5kIHdpdGggPD4gYXJlIEhUTUwgYW5kIHNraXAgdGhlIHJlZ2V4IGNoZWNrXG5cdFx0XHRcdG1hdGNoID0gWyBudWxsLCBzZWxlY3RvciwgbnVsbCBdO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtYXRjaCA9IHJxdWlja0V4cHIuZXhlYyggc2VsZWN0b3IgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTWF0Y2ggaHRtbCBvciBtYWtlIHN1cmUgbm8gY29udGV4dCBpcyBzcGVjaWZpZWQgZm9yICNpZFxuXHRcdFx0aWYgKCBtYXRjaCAmJiAoIG1hdGNoWyAxIF0gfHwgIWNvbnRleHQgKSApIHtcblxuXHRcdFx0XHQvLyBIQU5ETEU6ICQoaHRtbCkgLT4gJChhcnJheSlcblx0XHRcdFx0aWYgKCBtYXRjaFsgMSBdICkge1xuXHRcdFx0XHRcdGNvbnRleHQgPSBjb250ZXh0IGluc3RhbmNlb2YgalF1ZXJ5ID8gY29udGV4dFsgMCBdIDogY29udGV4dDtcblxuXHRcdFx0XHRcdC8vIE9wdGlvbiB0byBydW4gc2NyaXB0cyBpcyB0cnVlIGZvciBiYWNrLWNvbXBhdFxuXHRcdFx0XHRcdC8vIEludGVudGlvbmFsbHkgbGV0IHRoZSBlcnJvciBiZSB0aHJvd24gaWYgcGFyc2VIVE1MIGlzIG5vdCBwcmVzZW50XG5cdFx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCB0aGlzLCBqUXVlcnkucGFyc2VIVE1MKFxuXHRcdFx0XHRcdFx0bWF0Y2hbIDEgXSxcblx0XHRcdFx0XHRcdGNvbnRleHQgJiYgY29udGV4dC5ub2RlVHlwZSA/IGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0IDogZG9jdW1lbnQsXG5cdFx0XHRcdFx0XHR0cnVlXG5cdFx0XHRcdFx0KSApO1xuXG5cdFx0XHRcdFx0Ly8gSEFORExFOiAkKGh0bWwsIHByb3BzKVxuXHRcdFx0XHRcdGlmICggcnNpbmdsZVRhZy50ZXN0KCBtYXRjaFsgMSBdICkgJiYgalF1ZXJ5LmlzUGxhaW5PYmplY3QoIGNvbnRleHQgKSApIHtcblx0XHRcdFx0XHRcdGZvciAoIG1hdGNoIGluIGNvbnRleHQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gUHJvcGVydGllcyBvZiBjb250ZXh0IGFyZSBjYWxsZWQgYXMgbWV0aG9kcyBpZiBwb3NzaWJsZVxuXHRcdFx0XHRcdFx0XHRpZiAoIGlzRnVuY3Rpb24oIHRoaXNbIG1hdGNoIF0gKSApIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzWyBtYXRjaCBdKCBjb250ZXh0WyBtYXRjaCBdICk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gLi4uYW5kIG90aGVyd2lzZSBzZXQgYXMgYXR0cmlidXRlc1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuYXR0ciggbWF0Y2gsIGNvbnRleHRbIG1hdGNoIF0gKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0XHRcdC8vIEhBTkRMRTogJCgjaWQpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBtYXRjaFsgMiBdICk7XG5cblx0XHRcdFx0XHRpZiAoIGVsZW0gKSB7XG5cblx0XHRcdFx0XHRcdC8vIEluamVjdCB0aGUgZWxlbWVudCBkaXJlY3RseSBpbnRvIHRoZSBqUXVlcnkgb2JqZWN0XG5cdFx0XHRcdFx0XHR0aGlzWyAwIF0gPSBlbGVtO1xuXHRcdFx0XHRcdFx0dGhpcy5sZW5ndGggPSAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBIQU5ETEU6ICQoZXhwciwgJCguLi4pKVxuXHRcdFx0fSBlbHNlIGlmICggIWNvbnRleHQgfHwgY29udGV4dC5qcXVlcnkgKSB7XG5cdFx0XHRcdHJldHVybiAoIGNvbnRleHQgfHwgcm9vdCApLmZpbmQoIHNlbGVjdG9yICk7XG5cblx0XHRcdC8vIEhBTkRMRTogJChleHByLCBjb250ZXh0KVxuXHRcdFx0Ly8gKHdoaWNoIGlzIGp1c3QgZXF1aXZhbGVudCB0bzogJChjb250ZXh0KS5maW5kKGV4cHIpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvciggY29udGV4dCApLmZpbmQoIHNlbGVjdG9yICk7XG5cdFx0XHR9XG5cblx0XHQvLyBIQU5ETEU6ICQoRE9NRWxlbWVudClcblx0XHR9IGVsc2UgaWYgKCBzZWxlY3Rvci5ub2RlVHlwZSApIHtcblx0XHRcdHRoaXNbIDAgXSA9IHNlbGVjdG9yO1xuXHRcdFx0dGhpcy5sZW5ndGggPSAxO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHQvLyBIQU5ETEU6ICQoZnVuY3Rpb24pXG5cdFx0Ly8gU2hvcnRjdXQgZm9yIGRvY3VtZW50IHJlYWR5XG5cdFx0fSBlbHNlIGlmICggaXNGdW5jdGlvbiggc2VsZWN0b3IgKSApIHtcblx0XHRcdHJldHVybiByb290LnJlYWR5ICE9PSB1bmRlZmluZWQgP1xuXHRcdFx0XHRyb290LnJlYWR5KCBzZWxlY3RvciApIDpcblxuXHRcdFx0XHQvLyBFeGVjdXRlIGltbWVkaWF0ZWx5IGlmIHJlYWR5IGlzIG5vdCBwcmVzZW50XG5cdFx0XHRcdHNlbGVjdG9yKCBqUXVlcnkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4galF1ZXJ5Lm1ha2VBcnJheSggc2VsZWN0b3IsIHRoaXMgKTtcblx0fTtcblxuLy8gR2l2ZSB0aGUgaW5pdCBmdW5jdGlvbiB0aGUgalF1ZXJ5IHByb3RvdHlwZSBmb3IgbGF0ZXIgaW5zdGFudGlhdGlvblxuaW5pdC5wcm90b3R5cGUgPSBqUXVlcnkuZm47XG5cbi8vIEluaXRpYWxpemUgY2VudHJhbCByZWZlcmVuY2VcbnJvb3RqUXVlcnkgPSBqUXVlcnkoIGRvY3VtZW50ICk7XG5cblxudmFyIHJwYXJlbnRzcHJldiA9IC9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLFxuXG5cdC8vIE1ldGhvZHMgZ3VhcmFudGVlZCB0byBwcm9kdWNlIGEgdW5pcXVlIHNldCB3aGVuIHN0YXJ0aW5nIGZyb20gYSB1bmlxdWUgc2V0XG5cdGd1YXJhbnRlZWRVbmlxdWUgPSB7XG5cdFx0Y2hpbGRyZW46IHRydWUsXG5cdFx0Y29udGVudHM6IHRydWUsXG5cdFx0bmV4dDogdHJ1ZSxcblx0XHRwcmV2OiB0cnVlXG5cdH07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0aGFzOiBmdW5jdGlvbiggdGFyZ2V0ICkge1xuXHRcdHZhciB0YXJnZXRzID0galF1ZXJ5KCB0YXJnZXQsIHRoaXMgKSxcblx0XHRcdGwgPSB0YXJnZXRzLmxlbmd0aDtcblxuXHRcdHJldHVybiB0aGlzLmZpbHRlciggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdGlmICggalF1ZXJ5LmNvbnRhaW5zKCB0aGlzLCB0YXJnZXRzWyBpIF0gKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRjbG9zZXN0OiBmdW5jdGlvbiggc2VsZWN0b3JzLCBjb250ZXh0ICkge1xuXHRcdHZhciBjdXIsXG5cdFx0XHRpID0gMCxcblx0XHRcdGwgPSB0aGlzLmxlbmd0aCxcblx0XHRcdG1hdGNoZWQgPSBbXSxcblx0XHRcdHRhcmdldHMgPSB0eXBlb2Ygc2VsZWN0b3JzICE9PSBcInN0cmluZ1wiICYmIGpRdWVyeSggc2VsZWN0b3JzICk7XG5cblx0XHQvLyBQb3NpdGlvbmFsIHNlbGVjdG9ycyBuZXZlciBtYXRjaCwgc2luY2UgdGhlcmUncyBubyBfc2VsZWN0aW9uXyBjb250ZXh0XG5cdFx0aWYgKCAhcm5lZWRzQ29udGV4dC50ZXN0KCBzZWxlY3RvcnMgKSApIHtcblx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0Zm9yICggY3VyID0gdGhpc1sgaSBdOyBjdXIgJiYgY3VyICE9PSBjb250ZXh0OyBjdXIgPSBjdXIucGFyZW50Tm9kZSApIHtcblxuXHRcdFx0XHRcdC8vIEFsd2F5cyBza2lwIGRvY3VtZW50IGZyYWdtZW50c1xuXHRcdFx0XHRcdGlmICggY3VyLm5vZGVUeXBlIDwgMTEgJiYgKCB0YXJnZXRzID9cblx0XHRcdFx0XHRcdHRhcmdldHMuaW5kZXgoIGN1ciApID4gLTEgOlxuXG5cdFx0XHRcdFx0XHQvLyBEb24ndCBwYXNzIG5vbi1lbGVtZW50cyB0byBqUXVlcnkjZmluZFxuXHRcdFx0XHRcdFx0Y3VyLm5vZGVUeXBlID09PSAxICYmXG5cdFx0XHRcdFx0XHRcdGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvciggY3VyLCBzZWxlY3RvcnMgKSApICkge1xuXG5cdFx0XHRcdFx0XHRtYXRjaGVkLnB1c2goIGN1ciApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBtYXRjaGVkLmxlbmd0aCA+IDEgPyBqUXVlcnkudW5pcXVlU29ydCggbWF0Y2hlZCApIDogbWF0Y2hlZCApO1xuXHR9LFxuXG5cdC8vIERldGVybWluZSB0aGUgcG9zaXRpb24gb2YgYW4gZWxlbWVudCB3aXRoaW4gdGhlIHNldFxuXHRpbmRleDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHQvLyBObyBhcmd1bWVudCwgcmV0dXJuIGluZGV4IGluIHBhcmVudFxuXHRcdGlmICggIWVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gKCB0aGlzWyAwIF0gJiYgdGhpc1sgMCBdLnBhcmVudE5vZGUgKSA/IHRoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoIDogLTE7XG5cdFx0fVxuXG5cdFx0Ly8gSW5kZXggaW4gc2VsZWN0b3Jcblx0XHRpZiAoIHR5cGVvZiBlbGVtID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0cmV0dXJuIGluZGV4T2YuY2FsbCggalF1ZXJ5KCBlbGVtICksIHRoaXNbIDAgXSApO1xuXHRcdH1cblxuXHRcdC8vIExvY2F0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGRlc2lyZWQgZWxlbWVudFxuXHRcdHJldHVybiBpbmRleE9mLmNhbGwoIHRoaXMsXG5cblx0XHRcdC8vIElmIGl0IHJlY2VpdmVzIGEgalF1ZXJ5IG9iamVjdCwgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdXNlZFxuXHRcdFx0ZWxlbS5qcXVlcnkgPyBlbGVtWyAwIF0gOiBlbGVtXG5cdFx0KTtcblx0fSxcblxuXHRhZGQ6IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCApIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soXG5cdFx0XHRqUXVlcnkudW5pcXVlU29ydChcblx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCB0aGlzLmdldCgpLCBqUXVlcnkoIHNlbGVjdG9yLCBjb250ZXh0ICkgKVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0YWRkQmFjazogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiB0aGlzLmFkZCggc2VsZWN0b3IgPT0gbnVsbCA/XG5cdFx0XHR0aGlzLnByZXZPYmplY3QgOiB0aGlzLnByZXZPYmplY3QuZmlsdGVyKCBzZWxlY3RvciApXG5cdFx0KTtcblx0fVxufSApO1xuXG5mdW5jdGlvbiBzaWJsaW5nKCBjdXIsIGRpciApIHtcblx0d2hpbGUgKCAoIGN1ciA9IGN1clsgZGlyIF0gKSAmJiBjdXIubm9kZVR5cGUgIT09IDEgKSB7fVxuXHRyZXR1cm4gY3VyO1xufVxuXG5qUXVlcnkuZWFjaCgge1xuXHRwYXJlbnQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cdFx0cmV0dXJuIHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgIT09IDExID8gcGFyZW50IDogbnVsbDtcblx0fSxcblx0cGFyZW50czogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJwYXJlbnROb2RlXCIgKTtcblx0fSxcblx0cGFyZW50c1VudGlsOiBmdW5jdGlvbiggZWxlbSwgX2ksIHVudGlsICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwicGFyZW50Tm9kZVwiLCB1bnRpbCApO1xuXHR9LFxuXHRuZXh0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gc2libGluZyggZWxlbSwgXCJuZXh0U2libGluZ1wiICk7XG5cdH0sXG5cdHByZXY6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBzaWJsaW5nKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiICk7XG5cdH0sXG5cdG5leHRBbGw6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwibmV4dFNpYmxpbmdcIiApO1xuXHR9LFxuXHRwcmV2QWxsOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiICk7XG5cdH0sXG5cdG5leHRVbnRpbDogZnVuY3Rpb24oIGVsZW0sIF9pLCB1bnRpbCApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcIm5leHRTaWJsaW5nXCIsIHVudGlsICk7XG5cdH0sXG5cdHByZXZVbnRpbDogZnVuY3Rpb24oIGVsZW0sIF9pLCB1bnRpbCApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiLCB1bnRpbCApO1xuXHR9LFxuXHRzaWJsaW5nczogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIHNpYmxpbmdzKCAoIGVsZW0ucGFyZW50Tm9kZSB8fCB7fSApLmZpcnN0Q2hpbGQsIGVsZW0gKTtcblx0fSxcblx0Y2hpbGRyZW46IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBzaWJsaW5ncyggZWxlbS5maXJzdENoaWxkICk7XG5cdH0sXG5cdGNvbnRlbnRzOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRpZiAoIGVsZW0uY29udGVudERvY3VtZW50ICE9IG51bGwgJiZcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgMTErXG5cdFx0XHQvLyA8b2JqZWN0PiBlbGVtZW50cyB3aXRoIG5vIGBkYXRhYCBhdHRyaWJ1dGUgaGFzIGFuIG9iamVjdFxuXHRcdFx0Ly8gYGNvbnRlbnREb2N1bWVudGAgd2l0aCBhIGBudWxsYCBwcm90b3R5cGUuXG5cdFx0XHRnZXRQcm90byggZWxlbS5jb250ZW50RG9jdW1lbnQgKSApIHtcblxuXHRcdFx0cmV0dXJuIGVsZW0uY29udGVudERvY3VtZW50O1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSBvbmx5LCBpT1MgNyBvbmx5LCBBbmRyb2lkIEJyb3dzZXIgPD00LjMgb25seVxuXHRcdC8vIFRyZWF0IHRoZSB0ZW1wbGF0ZSBlbGVtZW50IGFzIGEgcmVndWxhciBvbmUgaW4gYnJvd3NlcnMgdGhhdFxuXHRcdC8vIGRvbid0IHN1cHBvcnQgaXQuXG5cdFx0aWYgKCBub2RlTmFtZSggZWxlbSwgXCJ0ZW1wbGF0ZVwiICkgKSB7XG5cdFx0XHRlbGVtID0gZWxlbS5jb250ZW50IHx8IGVsZW07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGpRdWVyeS5tZXJnZSggW10sIGVsZW0uY2hpbGROb2RlcyApO1xuXHR9XG59LCBmdW5jdGlvbiggbmFtZSwgZm4gKSB7XG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIHVudGlsLCBzZWxlY3RvciApIHtcblx0XHR2YXIgbWF0Y2hlZCA9IGpRdWVyeS5tYXAoIHRoaXMsIGZuLCB1bnRpbCApO1xuXG5cdFx0aWYgKCBuYW1lLnNsaWNlKCAtNSApICE9PSBcIlVudGlsXCIgKSB7XG5cdFx0XHRzZWxlY3RvciA9IHVudGlsO1xuXHRcdH1cblxuXHRcdGlmICggc2VsZWN0b3IgJiYgdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0bWF0Y2hlZCA9IGpRdWVyeS5maWx0ZXIoIHNlbGVjdG9yLCBtYXRjaGVkICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLmxlbmd0aCA+IDEgKSB7XG5cblx0XHRcdC8vIFJlbW92ZSBkdXBsaWNhdGVzXG5cdFx0XHRpZiAoICFndWFyYW50ZWVkVW5pcXVlWyBuYW1lIF0gKSB7XG5cdFx0XHRcdGpRdWVyeS51bmlxdWVTb3J0KCBtYXRjaGVkICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJldmVyc2Ugb3JkZXIgZm9yIHBhcmVudHMqIGFuZCBwcmV2LWRlcml2YXRpdmVzXG5cdFx0XHRpZiAoIHJwYXJlbnRzcHJldi50ZXN0KCBuYW1lICkgKSB7XG5cdFx0XHRcdG1hdGNoZWQucmV2ZXJzZSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggbWF0Y2hlZCApO1xuXHR9O1xufSApO1xudmFyIHJub3RodG1sd2hpdGUgPSAoIC9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZyApO1xuXG5cblxuLy8gQ29udmVydCBTdHJpbmctZm9ybWF0dGVkIG9wdGlvbnMgaW50byBPYmplY3QtZm9ybWF0dGVkIG9uZXNcbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMoIG9wdGlvbnMgKSB7XG5cdHZhciBvYmplY3QgPSB7fTtcblx0alF1ZXJ5LmVhY2goIG9wdGlvbnMubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXSwgZnVuY3Rpb24oIF8sIGZsYWcgKSB7XG5cdFx0b2JqZWN0WyBmbGFnIF0gPSB0cnVlO1xuXHR9ICk7XG5cdHJldHVybiBvYmplY3Q7XG59XG5cbi8qXG4gKiBDcmVhdGUgYSBjYWxsYmFjayBsaXN0IHVzaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcbiAqXG4gKlx0b3B0aW9uczogYW4gb3B0aW9uYWwgbGlzdCBvZiBzcGFjZS1zZXBhcmF0ZWQgb3B0aW9ucyB0aGF0IHdpbGwgY2hhbmdlIGhvd1xuICpcdFx0XHR0aGUgY2FsbGJhY2sgbGlzdCBiZWhhdmVzIG9yIGEgbW9yZSB0cmFkaXRpb25hbCBvcHRpb24gb2JqZWN0XG4gKlxuICogQnkgZGVmYXVsdCBhIGNhbGxiYWNrIGxpc3Qgd2lsbCBhY3QgbGlrZSBhbiBldmVudCBjYWxsYmFjayBsaXN0IGFuZCBjYW4gYmVcbiAqIFwiZmlyZWRcIiBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBQb3NzaWJsZSBvcHRpb25zOlxuICpcbiAqXHRvbmNlOlx0XHRcdHdpbGwgZW5zdXJlIHRoZSBjYWxsYmFjayBsaXN0IGNhbiBvbmx5IGJlIGZpcmVkIG9uY2UgKGxpa2UgYSBEZWZlcnJlZClcbiAqXG4gKlx0bWVtb3J5Olx0XHRcdHdpbGwga2VlcCB0cmFjayBvZiBwcmV2aW91cyB2YWx1ZXMgYW5kIHdpbGwgY2FsbCBhbnkgY2FsbGJhY2sgYWRkZWRcbiAqXHRcdFx0XHRcdGFmdGVyIHRoZSBsaXN0IGhhcyBiZWVuIGZpcmVkIHJpZ2h0IGF3YXkgd2l0aCB0aGUgbGF0ZXN0IFwibWVtb3JpemVkXCJcbiAqXHRcdFx0XHRcdHZhbHVlcyAobGlrZSBhIERlZmVycmVkKVxuICpcbiAqXHR1bmlxdWU6XHRcdFx0d2lsbCBlbnN1cmUgYSBjYWxsYmFjayBjYW4gb25seSBiZSBhZGRlZCBvbmNlIChubyBkdXBsaWNhdGUgaW4gdGhlIGxpc3QpXG4gKlxuICpcdHN0b3BPbkZhbHNlOlx0aW50ZXJydXB0IGNhbGxpbmdzIHdoZW4gYSBjYWxsYmFjayByZXR1cm5zIGZhbHNlXG4gKlxuICovXG5qUXVlcnkuQ2FsbGJhY2tzID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cblx0Ly8gQ29udmVydCBvcHRpb25zIGZyb20gU3RyaW5nLWZvcm1hdHRlZCB0byBPYmplY3QtZm9ybWF0dGVkIGlmIG5lZWRlZFxuXHQvLyAod2UgY2hlY2sgaW4gY2FjaGUgZmlyc3QpXG5cdG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiA/XG5cdFx0Y3JlYXRlT3B0aW9ucyggb3B0aW9ucyApIDpcblx0XHRqUXVlcnkuZXh0ZW5kKCB7fSwgb3B0aW9ucyApO1xuXG5cdHZhciAvLyBGbGFnIHRvIGtub3cgaWYgbGlzdCBpcyBjdXJyZW50bHkgZmlyaW5nXG5cdFx0ZmlyaW5nLFxuXG5cdFx0Ly8gTGFzdCBmaXJlIHZhbHVlIGZvciBub24tZm9yZ2V0dGFibGUgbGlzdHNcblx0XHRtZW1vcnksXG5cblx0XHQvLyBGbGFnIHRvIGtub3cgaWYgbGlzdCB3YXMgYWxyZWFkeSBmaXJlZFxuXHRcdGZpcmVkLFxuXG5cdFx0Ly8gRmxhZyB0byBwcmV2ZW50IGZpcmluZ1xuXHRcdGxvY2tlZCxcblxuXHRcdC8vIEFjdHVhbCBjYWxsYmFjayBsaXN0XG5cdFx0bGlzdCA9IFtdLFxuXG5cdFx0Ly8gUXVldWUgb2YgZXhlY3V0aW9uIGRhdGEgZm9yIHJlcGVhdGFibGUgbGlzdHNcblx0XHRxdWV1ZSA9IFtdLFxuXG5cdFx0Ly8gSW5kZXggb2YgY3VycmVudGx5IGZpcmluZyBjYWxsYmFjayAobW9kaWZpZWQgYnkgYWRkL3JlbW92ZSBhcyBuZWVkZWQpXG5cdFx0ZmlyaW5nSW5kZXggPSAtMSxcblxuXHRcdC8vIEZpcmUgY2FsbGJhY2tzXG5cdFx0ZmlyZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBFbmZvcmNlIHNpbmdsZS1maXJpbmdcblx0XHRcdGxvY2tlZCA9IGxvY2tlZCB8fCBvcHRpb25zLm9uY2U7XG5cblx0XHRcdC8vIEV4ZWN1dGUgY2FsbGJhY2tzIGZvciBhbGwgcGVuZGluZyBleGVjdXRpb25zLFxuXHRcdFx0Ly8gcmVzcGVjdGluZyBmaXJpbmdJbmRleCBvdmVycmlkZXMgYW5kIHJ1bnRpbWUgY2hhbmdlc1xuXHRcdFx0ZmlyZWQgPSBmaXJpbmcgPSB0cnVlO1xuXHRcdFx0Zm9yICggOyBxdWV1ZS5sZW5ndGg7IGZpcmluZ0luZGV4ID0gLTEgKSB7XG5cdFx0XHRcdG1lbW9yeSA9IHF1ZXVlLnNoaWZ0KCk7XG5cdFx0XHRcdHdoaWxlICggKytmaXJpbmdJbmRleCA8IGxpc3QubGVuZ3RoICkge1xuXG5cdFx0XHRcdFx0Ly8gUnVuIGNhbGxiYWNrIGFuZCBjaGVjayBmb3IgZWFybHkgdGVybWluYXRpb25cblx0XHRcdFx0XHRpZiAoIGxpc3RbIGZpcmluZ0luZGV4IF0uYXBwbHkoIG1lbW9yeVsgMCBdLCBtZW1vcnlbIDEgXSApID09PSBmYWxzZSAmJlxuXHRcdFx0XHRcdFx0b3B0aW9ucy5zdG9wT25GYWxzZSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gSnVtcCB0byBlbmQgYW5kIGZvcmdldCB0aGUgZGF0YSBzbyAuYWRkIGRvZXNuJ3QgcmUtZmlyZVxuXHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXggPSBsaXN0Lmxlbmd0aDtcblx0XHRcdFx0XHRcdG1lbW9yeSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3JnZXQgdGhlIGRhdGEgaWYgd2UncmUgZG9uZSB3aXRoIGl0XG5cdFx0XHRpZiAoICFvcHRpb25zLm1lbW9yeSApIHtcblx0XHRcdFx0bWVtb3J5ID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGZpcmluZyA9IGZhbHNlO1xuXG5cdFx0XHQvLyBDbGVhbiB1cCBpZiB3ZSdyZSBkb25lIGZpcmluZyBmb3IgZ29vZFxuXHRcdFx0aWYgKCBsb2NrZWQgKSB7XG5cblx0XHRcdFx0Ly8gS2VlcCBhbiBlbXB0eSBsaXN0IGlmIHdlIGhhdmUgZGF0YSBmb3IgZnV0dXJlIGFkZCBjYWxsc1xuXHRcdFx0XHRpZiAoIG1lbW9yeSApIHtcblx0XHRcdFx0XHRsaXN0ID0gW107XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCB0aGlzIG9iamVjdCBpcyBzcGVudFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxpc3QgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIEFjdHVhbCBDYWxsYmFja3Mgb2JqZWN0XG5cdFx0c2VsZiA9IHtcblxuXHRcdFx0Ly8gQWRkIGEgY2FsbGJhY2sgb3IgYSBjb2xsZWN0aW9uIG9mIGNhbGxiYWNrcyB0byB0aGUgbGlzdFxuXHRcdFx0YWRkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBsaXN0ICkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBtZW1vcnkgZnJvbSBhIHBhc3QgcnVuLCB3ZSBzaG91bGQgZmlyZSBhZnRlciBhZGRpbmdcblx0XHRcdFx0XHRpZiAoIG1lbW9yeSAmJiAhZmlyaW5nICkge1xuXHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXggPSBsaXN0Lmxlbmd0aCAtIDE7XG5cdFx0XHRcdFx0XHRxdWV1ZS5wdXNoKCBtZW1vcnkgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQoIGZ1bmN0aW9uIGFkZCggYXJncyApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5lYWNoKCBhcmdzLCBmdW5jdGlvbiggXywgYXJnICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIGlzRnVuY3Rpb24oIGFyZyApICkge1xuXHRcdFx0XHRcdFx0XHRcdGlmICggIW9wdGlvbnMudW5pcXVlIHx8ICFzZWxmLmhhcyggYXJnICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0LnB1c2goIGFyZyApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggYXJnICYmIGFyZy5sZW5ndGggJiYgdG9UeXBlKCBhcmcgKSAhPT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIEluc3BlY3QgcmVjdXJzaXZlbHlcblx0XHRcdFx0XHRcdFx0XHRhZGQoIGFyZyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fSApKCBhcmd1bWVudHMgKTtcblxuXHRcdFx0XHRcdGlmICggbWVtb3J5ICYmICFmaXJpbmcgKSB7XG5cdFx0XHRcdFx0XHRmaXJlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gUmVtb3ZlIGEgY2FsbGJhY2sgZnJvbSB0aGUgbGlzdFxuXHRcdFx0cmVtb3ZlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5LmVhY2goIGFyZ3VtZW50cywgZnVuY3Rpb24oIF8sIGFyZyApIHtcblx0XHRcdFx0XHR2YXIgaW5kZXg7XG5cdFx0XHRcdFx0d2hpbGUgKCAoIGluZGV4ID0galF1ZXJ5LmluQXJyYXkoIGFyZywgbGlzdCwgaW5kZXggKSApID4gLTEgKSB7XG5cdFx0XHRcdFx0XHRsaXN0LnNwbGljZSggaW5kZXgsIDEgKTtcblxuXHRcdFx0XHRcdFx0Ly8gSGFuZGxlIGZpcmluZyBpbmRleGVzXG5cdFx0XHRcdFx0XHRpZiAoIGluZGV4IDw9IGZpcmluZ0luZGV4ICkge1xuXHRcdFx0XHRcdFx0XHRmaXJpbmdJbmRleC0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIENoZWNrIGlmIGEgZ2l2ZW4gY2FsbGJhY2sgaXMgaW4gdGhlIGxpc3QuXG5cdFx0XHQvLyBJZiBubyBhcmd1bWVudCBpcyBnaXZlbiwgcmV0dXJuIHdoZXRoZXIgb3Igbm90IGxpc3QgaGFzIGNhbGxiYWNrcyBhdHRhY2hlZC5cblx0XHRcdGhhczogZnVuY3Rpb24oIGZuICkge1xuXHRcdFx0XHRyZXR1cm4gZm4gP1xuXHRcdFx0XHRcdGpRdWVyeS5pbkFycmF5KCBmbiwgbGlzdCApID4gLTEgOlxuXHRcdFx0XHRcdGxpc3QubGVuZ3RoID4gMDtcblx0XHRcdH0sXG5cblx0XHRcdC8vIFJlbW92ZSBhbGwgY2FsbGJhY2tzIGZyb20gdGhlIGxpc3Rcblx0XHRcdGVtcHR5OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBsaXN0ICkge1xuXHRcdFx0XHRcdGxpc3QgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIERpc2FibGUgLmZpcmUgYW5kIC5hZGRcblx0XHRcdC8vIEFib3J0IGFueSBjdXJyZW50L3BlbmRpbmcgZXhlY3V0aW9uc1xuXHRcdFx0Ly8gQ2xlYXIgYWxsIGNhbGxiYWNrcyBhbmQgdmFsdWVzXG5cdFx0XHRkaXNhYmxlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0bG9ja2VkID0gcXVldWUgPSBbXTtcblx0XHRcdFx0bGlzdCA9IG1lbW9yeSA9IFwiXCI7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblx0XHRcdGRpc2FibGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICFsaXN0O1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gRGlzYWJsZSAuZmlyZVxuXHRcdFx0Ly8gQWxzbyBkaXNhYmxlIC5hZGQgdW5sZXNzIHdlIGhhdmUgbWVtb3J5IChzaW5jZSBpdCB3b3VsZCBoYXZlIG5vIGVmZmVjdClcblx0XHRcdC8vIEFib3J0IGFueSBwZW5kaW5nIGV4ZWN1dGlvbnNcblx0XHRcdGxvY2s6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsb2NrZWQgPSBxdWV1ZSA9IFtdO1xuXHRcdFx0XHRpZiAoICFtZW1vcnkgJiYgIWZpcmluZyApIHtcblx0XHRcdFx0XHRsaXN0ID0gbWVtb3J5ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHRsb2NrZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISFsb2NrZWQ7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBDYWxsIGFsbCBjYWxsYmFja3Mgd2l0aCB0aGUgZ2l2ZW4gY29udGV4dCBhbmQgYXJndW1lbnRzXG5cdFx0XHRmaXJlV2l0aDogZnVuY3Rpb24oIGNvbnRleHQsIGFyZ3MgKSB7XG5cdFx0XHRcdGlmICggIWxvY2tlZCApIHtcblx0XHRcdFx0XHRhcmdzID0gYXJncyB8fCBbXTtcblx0XHRcdFx0XHRhcmdzID0gWyBjb250ZXh0LCBhcmdzLnNsaWNlID8gYXJncy5zbGljZSgpIDogYXJncyBdO1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goIGFyZ3MgKTtcblx0XHRcdFx0XHRpZiAoICFmaXJpbmcgKSB7XG5cdFx0XHRcdFx0XHRmaXJlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gQ2FsbCBhbGwgdGhlIGNhbGxiYWNrcyB3aXRoIHRoZSBnaXZlbiBhcmd1bWVudHNcblx0XHRcdGZpcmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZWxmLmZpcmVXaXRoKCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBUbyBrbm93IGlmIHRoZSBjYWxsYmFja3MgaGF2ZSBhbHJlYWR5IGJlZW4gY2FsbGVkIGF0IGxlYXN0IG9uY2Vcblx0XHRcdGZpcmVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhZmlyZWQ7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRyZXR1cm4gc2VsZjtcbn07XG5cblxuZnVuY3Rpb24gSWRlbnRpdHkoIHYgKSB7XG5cdHJldHVybiB2O1xufVxuZnVuY3Rpb24gVGhyb3dlciggZXggKSB7XG5cdHRocm93IGV4O1xufVxuXG5mdW5jdGlvbiBhZG9wdFZhbHVlKCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0LCBub1ZhbHVlICkge1xuXHR2YXIgbWV0aG9kO1xuXG5cdHRyeSB7XG5cblx0XHQvLyBDaGVjayBmb3IgcHJvbWlzZSBhc3BlY3QgZmlyc3QgdG8gcHJpdmlsZWdlIHN5bmNocm9ub3VzIGJlaGF2aW9yXG5cdFx0aWYgKCB2YWx1ZSAmJiBpc0Z1bmN0aW9uKCAoIG1ldGhvZCA9IHZhbHVlLnByb21pc2UgKSApICkge1xuXHRcdFx0bWV0aG9kLmNhbGwoIHZhbHVlICkuZG9uZSggcmVzb2x2ZSApLmZhaWwoIHJlamVjdCApO1xuXG5cdFx0Ly8gT3RoZXIgdGhlbmFibGVzXG5cdFx0fSBlbHNlIGlmICggdmFsdWUgJiYgaXNGdW5jdGlvbiggKCBtZXRob2QgPSB2YWx1ZS50aGVuICkgKSApIHtcblx0XHRcdG1ldGhvZC5jYWxsKCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0ICk7XG5cblx0XHQvLyBPdGhlciBub24tdGhlbmFibGVzXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gQ29udHJvbCBgcmVzb2x2ZWAgYXJndW1lbnRzIGJ5IGxldHRpbmcgQXJyYXkjc2xpY2UgY2FzdCBib29sZWFuIGBub1ZhbHVlYCB0byBpbnRlZ2VyOlxuXHRcdFx0Ly8gKiBmYWxzZTogWyB2YWx1ZSBdLnNsaWNlKCAwICkgPT4gcmVzb2x2ZSggdmFsdWUgKVxuXHRcdFx0Ly8gKiB0cnVlOiBbIHZhbHVlIF0uc2xpY2UoIDEgKSA9PiByZXNvbHZlKClcblx0XHRcdHJlc29sdmUuYXBwbHkoIHVuZGVmaW5lZCwgWyB2YWx1ZSBdLnNsaWNlKCBub1ZhbHVlICkgKTtcblx0XHR9XG5cblx0Ly8gRm9yIFByb21pc2VzL0ErLCBjb252ZXJ0IGV4Y2VwdGlvbnMgaW50byByZWplY3Rpb25zXG5cdC8vIFNpbmNlIGpRdWVyeS53aGVuIGRvZXNuJ3QgdW53cmFwIHRoZW5hYmxlcywgd2UgY2FuIHNraXAgdGhlIGV4dHJhIGNoZWNrcyBhcHBlYXJpbmcgaW5cblx0Ly8gRGVmZXJyZWQjdGhlbiB0byBjb25kaXRpb25hbGx5IHN1cHByZXNzIHJlamVjdGlvbi5cblx0fSBjYXRjaCAoIHZhbHVlICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgb25seVxuXHRcdC8vIFN0cmljdCBtb2RlIGZ1bmN0aW9ucyBpbnZva2VkIHdpdGhvdXQgLmNhbGwvLmFwcGx5IGdldCBnbG9iYWwtb2JqZWN0IGNvbnRleHRcblx0XHRyZWplY3QuYXBwbHkoIHVuZGVmaW5lZCwgWyB2YWx1ZSBdICk7XG5cdH1cbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdERlZmVycmVkOiBmdW5jdGlvbiggZnVuYyApIHtcblx0XHR2YXIgdHVwbGVzID0gW1xuXG5cdFx0XHRcdC8vIGFjdGlvbiwgYWRkIGxpc3RlbmVyLCBjYWxsYmFja3MsXG5cdFx0XHRcdC8vIC4uLiAudGhlbiBoYW5kbGVycywgYXJndW1lbnQgaW5kZXgsIFtmaW5hbCBzdGF0ZV1cblx0XHRcdFx0WyBcIm5vdGlmeVwiLCBcInByb2dyZXNzXCIsIGpRdWVyeS5DYWxsYmFja3MoIFwibWVtb3J5XCIgKSxcblx0XHRcdFx0XHRqUXVlcnkuQ2FsbGJhY2tzKCBcIm1lbW9yeVwiICksIDIgXSxcblx0XHRcdFx0WyBcInJlc29sdmVcIiwgXCJkb25lXCIsIGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLFxuXHRcdFx0XHRcdGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLCAwLCBcInJlc29sdmVkXCIgXSxcblx0XHRcdFx0WyBcInJlamVjdFwiLCBcImZhaWxcIiwgalF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksXG5cdFx0XHRcdFx0alF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksIDEsIFwicmVqZWN0ZWRcIiBdXG5cdFx0XHRdLFxuXHRcdFx0c3RhdGUgPSBcInBlbmRpbmdcIixcblx0XHRcdHByb21pc2UgPSB7XG5cdFx0XHRcdHN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsd2F5czogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQuZG9uZSggYXJndW1lbnRzICkuZmFpbCggYXJndW1lbnRzICk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiY2F0Y2hcIjogZnVuY3Rpb24oIGZuICkge1xuXHRcdFx0XHRcdHJldHVybiBwcm9taXNlLnRoZW4oIG51bGwsIGZuICk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gS2VlcCBwaXBlIGZvciBiYWNrLWNvbXBhdFxuXHRcdFx0XHRwaXBlOiBmdW5jdGlvbiggLyogZm5Eb25lLCBmbkZhaWwsIGZuUHJvZ3Jlc3MgKi8gKSB7XG5cdFx0XHRcdFx0dmFyIGZucyA9IGFyZ3VtZW50cztcblxuXHRcdFx0XHRcdHJldHVybiBqUXVlcnkuRGVmZXJyZWQoIGZ1bmN0aW9uKCBuZXdEZWZlciApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5lYWNoKCB0dXBsZXMsIGZ1bmN0aW9uKCBfaSwgdHVwbGUgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gTWFwIHR1cGxlcyAocHJvZ3Jlc3MsIGRvbmUsIGZhaWwpIHRvIGFyZ3VtZW50cyAoZG9uZSwgZmFpbCwgcHJvZ3Jlc3MpXG5cdFx0XHRcdFx0XHRcdHZhciBmbiA9IGlzRnVuY3Rpb24oIGZuc1sgdHVwbGVbIDQgXSBdICkgJiYgZm5zWyB0dXBsZVsgNCBdIF07XG5cblx0XHRcdFx0XHRcdFx0Ly8gZGVmZXJyZWQucHJvZ3Jlc3MoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIubm90aWZ5IH0pXG5cdFx0XHRcdFx0XHRcdC8vIGRlZmVycmVkLmRvbmUoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIucmVzb2x2ZSB9KVxuXHRcdFx0XHRcdFx0XHQvLyBkZWZlcnJlZC5mYWlsKGZ1bmN0aW9uKCkgeyBiaW5kIHRvIG5ld0RlZmVyIG9yIG5ld0RlZmVyLnJlamVjdCB9KVxuXHRcdFx0XHRcdFx0XHRkZWZlcnJlZFsgdHVwbGVbIDEgXSBdKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmV0dXJuZWQgPSBmbiAmJiBmbi5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCByZXR1cm5lZCAmJiBpc0Z1bmN0aW9uKCByZXR1cm5lZC5wcm9taXNlICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZC5wcm9taXNlKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LnByb2dyZXNzKCBuZXdEZWZlci5ub3RpZnkgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuZG9uZSggbmV3RGVmZXIucmVzb2x2ZSApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5mYWlsKCBuZXdEZWZlci5yZWplY3QgKTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXJbIHR1cGxlWyAwIF0gKyBcIldpdGhcIiBdKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbiA/IFsgcmV0dXJuZWQgXSA6IGFyZ3VtZW50c1xuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdGZucyA9IG51bGw7XG5cdFx0XHRcdFx0fSApLnByb21pc2UoKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dGhlbjogZnVuY3Rpb24oIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBvblByb2dyZXNzICkge1xuXHRcdFx0XHRcdHZhciBtYXhEZXB0aCA9IDA7XG5cdFx0XHRcdFx0ZnVuY3Rpb24gcmVzb2x2ZSggZGVwdGgsIGRlZmVycmVkLCBoYW5kbGVyLCBzcGVjaWFsICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdGhhdCA9IHRoaXMsXG5cdFx0XHRcdFx0XHRcdFx0YXJncyA9IGFyZ3VtZW50cyxcblx0XHRcdFx0XHRcdFx0XHRtaWdodFRocm93ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgcmV0dXJuZWQsIHRoZW47XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjMuMy4zXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC01OVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gSWdub3JlIGRvdWJsZS1yZXNvbHV0aW9uIGF0dGVtcHRzXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGRlcHRoIDwgbWF4RGVwdGggKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQgPSBoYW5kbGVyLmFwcGx5KCB0aGF0LCBhcmdzICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjFcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTQ4XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIHJldHVybmVkID09PSBkZWZlcnJlZC5wcm9taXNlKCkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoIFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIgKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbnMgMi4zLjMuMSwgMy41XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC01NFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNzVcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFJldHJpZXZlIGB0aGVuYCBvbmx5IG9uY2Vcblx0XHRcdFx0XHRcdFx0XHRcdHRoZW4gPSByZXR1cm5lZCAmJlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNjRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gT25seSBjaGVjayBvYmplY3RzIGFuZCBmdW5jdGlvbnMgZm9yIHRoZW5hYmlsaXR5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCggdHlwZW9mIHJldHVybmVkID09PSBcIm9iamVjdFwiIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZW9mIHJldHVybmVkID09PSBcImZ1bmN0aW9uXCIgKSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZC50aGVuO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBIYW5kbGUgYSByZXR1cm5lZCB0aGVuYWJsZVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBpc0Z1bmN0aW9uKCB0aGVuICkgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3BlY2lhbCBwcm9jZXNzb3JzIChub3RpZnkpIGp1c3Qgd2FpdCBmb3IgcmVzb2x1dGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIHNwZWNpYWwgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhlbi5jYWxsKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCBtYXhEZXB0aCwgZGVmZXJyZWQsIElkZW50aXR5LCBzcGVjaWFsICksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCBtYXhEZXB0aCwgZGVmZXJyZWQsIFRocm93ZXIsIHNwZWNpYWwgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gTm9ybWFsIHByb2Nlc3NvcnMgKHJlc29sdmUpIGFsc28gaG9vayBpbnRvIHByb2dyZXNzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyAuLi5hbmQgZGlzcmVnYXJkIG9sZGVyIHJlc29sdXRpb24gdmFsdWVzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4RGVwdGgrKztcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoZW4uY2FsbChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybmVkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSwgc3BlY2lhbCApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBUaHJvd2VyLCBzcGVjaWFsICksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCBtYXhEZXB0aCwgZGVmZXJyZWQsIElkZW50aXR5LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZlcnJlZC5ub3RpZnlXaXRoIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIEhhbmRsZSBhbGwgb3RoZXIgcmV0dXJuZWQgdmFsdWVzXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE9ubHkgc3Vic3RpdHV0ZSBoYW5kbGVycyBwYXNzIG9uIGNvbnRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gYW5kIG11bHRpcGxlIHZhbHVlcyAobm9uLXNwZWMgYmVoYXZpb3IpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggaGFuZGxlciAhPT0gSWRlbnRpdHkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdCA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmdzID0gWyByZXR1cm5lZCBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gUHJvY2VzcyB0aGUgdmFsdWUocylcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gRGVmYXVsdCBwcm9jZXNzIGlzIHJlc29sdmVcblx0XHRcdFx0XHRcdFx0XHRcdFx0KCBzcGVjaWFsIHx8IGRlZmVycmVkLnJlc29sdmVXaXRoICkoIHRoYXQsIGFyZ3MgKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gT25seSBub3JtYWwgcHJvY2Vzc29ycyAocmVzb2x2ZSkgY2F0Y2ggYW5kIHJlamVjdCBleGNlcHRpb25zXG5cdFx0XHRcdFx0XHRcdFx0cHJvY2VzcyA9IHNwZWNpYWwgP1xuXHRcdFx0XHRcdFx0XHRcdFx0bWlnaHRUaHJvdyA6XG5cdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtaWdodFRocm93KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBqUXVlcnkuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rKCBlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9jZXNzLmVycm9yICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjQuMVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTYxXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gSWdub3JlIHBvc3QtcmVzb2x1dGlvbiBleGNlcHRpb25zXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBkZXB0aCArIDEgPj0gbWF4RGVwdGggKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE9ubHkgc3Vic3RpdHV0ZSBoYW5kbGVycyBwYXNzIG9uIGNvbnRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGFuZCBtdWx0aXBsZSB2YWx1ZXMgKG5vbi1zcGVjIGJlaGF2aW9yKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBoYW5kbGVyICE9PSBUaHJvd2VyICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmdzID0gWyBlIF07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdFdpdGgoIHRoYXQsIGFyZ3MgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjFcblx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTdcblx0XHRcdFx0XHRcdFx0Ly8gUmUtcmVzb2x2ZSBwcm9taXNlcyBpbW1lZGlhdGVseSB0byBkb2RnZSBmYWxzZSByZWplY3Rpb24gZnJvbVxuXHRcdFx0XHRcdFx0XHQvLyBzdWJzZXF1ZW50IGVycm9yc1xuXHRcdFx0XHRcdFx0XHRpZiAoIGRlcHRoICkge1xuXHRcdFx0XHRcdFx0XHRcdHByb2Nlc3MoKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIENhbGwgYW4gb3B0aW9uYWwgaG9vayB0byByZWNvcmQgdGhlIGVycm9yLCBpbiBjYXNlIG9mIGV4Y2VwdGlvblxuXHRcdFx0XHRcdFx0XHRcdC8vIHNpbmNlIGl0J3Mgb3RoZXJ3aXNlIGxvc3Qgd2hlbiBleGVjdXRpb24gZ29lcyBhc3luY1xuXHRcdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5LkRlZmVycmVkLmdldEVycm9ySG9vayApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHByb2Nlc3MuZXJyb3IgPSBqUXVlcnkuRGVmZXJyZWQuZ2V0RXJyb3JIb29rKCk7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBUaGUgZGVwcmVjYXRlZCBhbGlhcyBvZiB0aGUgYWJvdmUuIFdoaWxlIHRoZSBuYW1lIHN1Z2dlc3RzXG5cdFx0XHRcdFx0XHRcdFx0Ly8gcmV0dXJuaW5nIHRoZSBzdGFjaywgbm90IGFuIGVycm9yIGluc3RhbmNlLCBqUXVlcnkganVzdCBwYXNzZXNcblx0XHRcdFx0XHRcdFx0XHQvLyBpdCBkaXJlY3RseSB0byBgY29uc29sZS53YXJuYCBzbyBib3RoIHdpbGwgd29yazsgYW4gaW5zdGFuY2Vcblx0XHRcdFx0XHRcdFx0XHQvLyBqdXN0IGJldHRlciBjb29wZXJhdGVzIHdpdGggc291cmNlIG1hcHMuXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggalF1ZXJ5LkRlZmVycmVkLmdldFN0YWNrSG9vayApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHByb2Nlc3MuZXJyb3IgPSBqUXVlcnkuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCBwcm9jZXNzICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIGpRdWVyeS5EZWZlcnJlZCggZnVuY3Rpb24oIG5ld0RlZmVyICkge1xuXG5cdFx0XHRcdFx0XHQvLyBwcm9ncmVzc19oYW5kbGVycy5hZGQoIC4uLiApXG5cdFx0XHRcdFx0XHR0dXBsZXNbIDAgXVsgMyBdLmFkZChcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShcblx0XHRcdFx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyLFxuXHRcdFx0XHRcdFx0XHRcdGlzRnVuY3Rpb24oIG9uUHJvZ3Jlc3MgKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRvblByb2dyZXNzIDpcblx0XHRcdFx0XHRcdFx0XHRcdElkZW50aXR5LFxuXHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyLm5vdGlmeVdpdGhcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0Ly8gZnVsZmlsbGVkX2hhbmRsZXJzLmFkZCggLi4uIClcblx0XHRcdFx0XHRcdHR1cGxlc1sgMSBdWyAzIF0uYWRkKFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKFxuXHRcdFx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXIsXG5cdFx0XHRcdFx0XHRcdFx0aXNGdW5jdGlvbiggb25GdWxmaWxsZWQgKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkZ1bGZpbGxlZCA6XG5cdFx0XHRcdFx0XHRcdFx0XHRJZGVudGl0eVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHQvLyByZWplY3RlZF9oYW5kbGVycy5hZGQoIC4uLiApXG5cdFx0XHRcdFx0XHR0dXBsZXNbIDIgXVsgMyBdLmFkZChcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShcblx0XHRcdFx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyLFxuXHRcdFx0XHRcdFx0XHRcdGlzRnVuY3Rpb24oIG9uUmVqZWN0ZWQgKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRvblJlamVjdGVkIDpcblx0XHRcdFx0XHRcdFx0XHRcdFRocm93ZXJcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9ICkucHJvbWlzZSgpO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIEdldCBhIHByb21pc2UgZm9yIHRoaXMgZGVmZXJyZWRcblx0XHRcdFx0Ly8gSWYgb2JqIGlzIHByb3ZpZGVkLCB0aGUgcHJvbWlzZSBhc3BlY3QgaXMgYWRkZWQgdG8gdGhlIG9iamVjdFxuXHRcdFx0XHRwcm9taXNlOiBmdW5jdGlvbiggb2JqICkge1xuXHRcdFx0XHRcdHJldHVybiBvYmogIT0gbnVsbCA/IGpRdWVyeS5leHRlbmQoIG9iaiwgcHJvbWlzZSApIDogcHJvbWlzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGRlZmVycmVkID0ge307XG5cblx0XHQvLyBBZGQgbGlzdC1zcGVjaWZpYyBtZXRob2RzXG5cdFx0alF1ZXJ5LmVhY2goIHR1cGxlcywgZnVuY3Rpb24oIGksIHR1cGxlICkge1xuXHRcdFx0dmFyIGxpc3QgPSB0dXBsZVsgMiBdLFxuXHRcdFx0XHRzdGF0ZVN0cmluZyA9IHR1cGxlWyA1IF07XG5cblx0XHRcdC8vIHByb21pc2UucHJvZ3Jlc3MgPSBsaXN0LmFkZFxuXHRcdFx0Ly8gcHJvbWlzZS5kb25lID0gbGlzdC5hZGRcblx0XHRcdC8vIHByb21pc2UuZmFpbCA9IGxpc3QuYWRkXG5cdFx0XHRwcm9taXNlWyB0dXBsZVsgMSBdIF0gPSBsaXN0LmFkZDtcblxuXHRcdFx0Ly8gSGFuZGxlIHN0YXRlXG5cdFx0XHRpZiAoIHN0YXRlU3RyaW5nICkge1xuXHRcdFx0XHRsaXN0LmFkZChcblx0XHRcdFx0XHRmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdFx0Ly8gc3RhdGUgPSBcInJlc29sdmVkXCIgKGkuZS4sIGZ1bGZpbGxlZClcblx0XHRcdFx0XHRcdC8vIHN0YXRlID0gXCJyZWplY3RlZFwiXG5cdFx0XHRcdFx0XHRzdGF0ZSA9IHN0YXRlU3RyaW5nO1xuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQvLyByZWplY3RlZF9jYWxsYmFja3MuZGlzYWJsZVxuXHRcdFx0XHRcdC8vIGZ1bGZpbGxlZF9jYWxsYmFja3MuZGlzYWJsZVxuXHRcdFx0XHRcdHR1cGxlc1sgMyAtIGkgXVsgMiBdLmRpc2FibGUsXG5cblx0XHRcdFx0XHQvLyByZWplY3RlZF9oYW5kbGVycy5kaXNhYmxlXG5cdFx0XHRcdFx0Ly8gZnVsZmlsbGVkX2hhbmRsZXJzLmRpc2FibGVcblx0XHRcdFx0XHR0dXBsZXNbIDMgLSBpIF1bIDMgXS5kaXNhYmxlLFxuXG5cdFx0XHRcdFx0Ly8gcHJvZ3Jlc3NfY2FsbGJhY2tzLmxvY2tcblx0XHRcdFx0XHR0dXBsZXNbIDAgXVsgMiBdLmxvY2ssXG5cblx0XHRcdFx0XHQvLyBwcm9ncmVzc19oYW5kbGVycy5sb2NrXG5cdFx0XHRcdFx0dHVwbGVzWyAwIF1bIDMgXS5sb2NrXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHByb2dyZXNzX2hhbmRsZXJzLmZpcmVcblx0XHRcdC8vIGZ1bGZpbGxlZF9oYW5kbGVycy5maXJlXG5cdFx0XHQvLyByZWplY3RlZF9oYW5kbGVycy5maXJlXG5cdFx0XHRsaXN0LmFkZCggdHVwbGVbIDMgXS5maXJlICk7XG5cblx0XHRcdC8vIGRlZmVycmVkLm5vdGlmeSA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5ub3RpZnlXaXRoKC4uLikgfVxuXHRcdFx0Ly8gZGVmZXJyZWQucmVzb2x2ZSA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5yZXNvbHZlV2l0aCguLi4pIH1cblx0XHRcdC8vIGRlZmVycmVkLnJlamVjdCA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5yZWplY3RXaXRoKC4uLikgfVxuXHRcdFx0ZGVmZXJyZWRbIHR1cGxlWyAwIF0gXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkZWZlcnJlZFsgdHVwbGVbIDAgXSArIFwiV2l0aFwiIF0oIHRoaXMgPT09IGRlZmVycmVkID8gdW5kZWZpbmVkIDogdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gZGVmZXJyZWQubm90aWZ5V2l0aCA9IGxpc3QuZmlyZVdpdGhcblx0XHRcdC8vIGRlZmVycmVkLnJlc29sdmVXaXRoID0gbGlzdC5maXJlV2l0aFxuXHRcdFx0Ly8gZGVmZXJyZWQucmVqZWN0V2l0aCA9IGxpc3QuZmlyZVdpdGhcblx0XHRcdGRlZmVycmVkWyB0dXBsZVsgMCBdICsgXCJXaXRoXCIgXSA9IGxpc3QuZmlyZVdpdGg7XG5cdFx0fSApO1xuXG5cdFx0Ly8gTWFrZSB0aGUgZGVmZXJyZWQgYSBwcm9taXNlXG5cdFx0cHJvbWlzZS5wcm9taXNlKCBkZWZlcnJlZCApO1xuXG5cdFx0Ly8gQ2FsbCBnaXZlbiBmdW5jIGlmIGFueVxuXHRcdGlmICggZnVuYyApIHtcblx0XHRcdGZ1bmMuY2FsbCggZGVmZXJyZWQsIGRlZmVycmVkICk7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsIGRvbmUhXG5cdFx0cmV0dXJuIGRlZmVycmVkO1xuXHR9LFxuXG5cdC8vIERlZmVycmVkIGhlbHBlclxuXHR3aGVuOiBmdW5jdGlvbiggc2luZ2xlVmFsdWUgKSB7XG5cdFx0dmFyXG5cblx0XHRcdC8vIGNvdW50IG9mIHVuY29tcGxldGVkIHN1Ym9yZGluYXRlc1xuXHRcdFx0cmVtYWluaW5nID0gYXJndW1lbnRzLmxlbmd0aCxcblxuXHRcdFx0Ly8gY291bnQgb2YgdW5wcm9jZXNzZWQgYXJndW1lbnRzXG5cdFx0XHRpID0gcmVtYWluaW5nLFxuXG5cdFx0XHQvLyBzdWJvcmRpbmF0ZSBmdWxmaWxsbWVudCBkYXRhXG5cdFx0XHRyZXNvbHZlQ29udGV4dHMgPSBBcnJheSggaSApLFxuXHRcdFx0cmVzb2x2ZVZhbHVlcyA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApLFxuXG5cdFx0XHQvLyB0aGUgcHJpbWFyeSBEZWZlcnJlZFxuXHRcdFx0cHJpbWFyeSA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuXG5cdFx0XHQvLyBzdWJvcmRpbmF0ZSBjYWxsYmFjayBmYWN0b3J5XG5cdFx0XHR1cGRhdGVGdW5jID0gZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRcdFx0cmVzb2x2ZUNvbnRleHRzWyBpIF0gPSB0aGlzO1xuXHRcdFx0XHRcdHJlc29sdmVWYWx1ZXNbIGkgXSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gc2xpY2UuY2FsbCggYXJndW1lbnRzICkgOiB2YWx1ZTtcblx0XHRcdFx0XHRpZiAoICEoIC0tcmVtYWluaW5nICkgKSB7XG5cdFx0XHRcdFx0XHRwcmltYXJ5LnJlc29sdmVXaXRoKCByZXNvbHZlQ29udGV4dHMsIHJlc29sdmVWYWx1ZXMgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXG5cdFx0Ly8gU2luZ2xlLSBhbmQgZW1wdHkgYXJndW1lbnRzIGFyZSBhZG9wdGVkIGxpa2UgUHJvbWlzZS5yZXNvbHZlXG5cdFx0aWYgKCByZW1haW5pbmcgPD0gMSApIHtcblx0XHRcdGFkb3B0VmFsdWUoIHNpbmdsZVZhbHVlLCBwcmltYXJ5LmRvbmUoIHVwZGF0ZUZ1bmMoIGkgKSApLnJlc29sdmUsIHByaW1hcnkucmVqZWN0LFxuXHRcdFx0XHQhcmVtYWluaW5nICk7XG5cblx0XHRcdC8vIFVzZSAudGhlbigpIHRvIHVud3JhcCBzZWNvbmRhcnkgdGhlbmFibGVzIChjZi4gZ2gtMzAwMClcblx0XHRcdGlmICggcHJpbWFyeS5zdGF0ZSgpID09PSBcInBlbmRpbmdcIiB8fFxuXHRcdFx0XHRpc0Z1bmN0aW9uKCByZXNvbHZlVmFsdWVzWyBpIF0gJiYgcmVzb2x2ZVZhbHVlc1sgaSBdLnRoZW4gKSApIHtcblxuXHRcdFx0XHRyZXR1cm4gcHJpbWFyeS50aGVuKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gTXVsdGlwbGUgYXJndW1lbnRzIGFyZSBhZ2dyZWdhdGVkIGxpa2UgUHJvbWlzZS5hbGwgYXJyYXkgZWxlbWVudHNcblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdGFkb3B0VmFsdWUoIHJlc29sdmVWYWx1ZXNbIGkgXSwgdXBkYXRlRnVuYyggaSApLCBwcmltYXJ5LnJlamVjdCApO1xuXHRcdH1cblxuXHRcdHJldHVybiBwcmltYXJ5LnByb21pc2UoKTtcblx0fVxufSApO1xuXG5cbi8vIFRoZXNlIHVzdWFsbHkgaW5kaWNhdGUgYSBwcm9ncmFtbWVyIG1pc3Rha2UgZHVyaW5nIGRldmVsb3BtZW50LFxuLy8gd2FybiBhYm91dCB0aGVtIEFTQVAgcmF0aGVyIHRoYW4gc3dhbGxvd2luZyB0aGVtIGJ5IGRlZmF1bHQuXG52YXIgcmVycm9yTmFtZXMgPSAvXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLztcblxuLy8gSWYgYGpRdWVyeS5EZWZlcnJlZC5nZXRFcnJvckhvb2tgIGlzIGRlZmluZWQsIGBhc3luY0Vycm9yYCBpcyBhbiBlcnJvclxuLy8gY2FwdHVyZWQgYmVmb3JlIHRoZSBhc3luYyBiYXJyaWVyIHRvIGdldCB0aGUgb3JpZ2luYWwgZXJyb3IgY2F1c2Vcbi8vIHdoaWNoIG1heSBvdGhlcndpc2UgYmUgaGlkZGVuLlxualF1ZXJ5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2sgPSBmdW5jdGlvbiggZXJyb3IsIGFzeW5jRXJyb3IgKSB7XG5cblx0Ly8gU3VwcG9ydDogSUUgOCAtIDkgb25seVxuXHQvLyBDb25zb2xlIGV4aXN0cyB3aGVuIGRldiB0b29scyBhcmUgb3Blbiwgd2hpY2ggY2FuIGhhcHBlbiBhdCBhbnkgdGltZVxuXHRpZiAoIHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLndhcm4gJiYgZXJyb3IgJiYgcmVycm9yTmFtZXMudGVzdCggZXJyb3IubmFtZSApICkge1xuXHRcdHdpbmRvdy5jb25zb2xlLndhcm4oIFwialF1ZXJ5LkRlZmVycmVkIGV4Y2VwdGlvbjogXCIgKyBlcnJvci5tZXNzYWdlLFxuXHRcdFx0ZXJyb3Iuc3RhY2ssIGFzeW5jRXJyb3IgKTtcblx0fVxufTtcblxuXG5cblxualF1ZXJ5LnJlYWR5RXhjZXB0aW9uID0gZnVuY3Rpb24oIGVycm9yICkge1xuXHR3aW5kb3cuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gKTtcbn07XG5cblxuXG5cbi8vIFRoZSBkZWZlcnJlZCB1c2VkIG9uIERPTSByZWFkeVxudmFyIHJlYWR5TGlzdCA9IGpRdWVyeS5EZWZlcnJlZCgpO1xuXG5qUXVlcnkuZm4ucmVhZHkgPSBmdW5jdGlvbiggZm4gKSB7XG5cblx0cmVhZHlMaXN0XG5cdFx0LnRoZW4oIGZuIClcblxuXHRcdC8vIFdyYXAgalF1ZXJ5LnJlYWR5RXhjZXB0aW9uIGluIGEgZnVuY3Rpb24gc28gdGhhdCB0aGUgbG9va3VwXG5cdFx0Ly8gaGFwcGVucyBhdCB0aGUgdGltZSBvZiBlcnJvciBoYW5kbGluZyBpbnN0ZWFkIG9mIGNhbGxiYWNrXG5cdFx0Ly8gcmVnaXN0cmF0aW9uLlxuXHRcdC5jYXRjaCggZnVuY3Rpb24oIGVycm9yICkge1xuXHRcdFx0alF1ZXJ5LnJlYWR5RXhjZXB0aW9uKCBlcnJvciApO1xuXHRcdH0gKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbmpRdWVyeS5leHRlbmQoIHtcblxuXHQvLyBJcyB0aGUgRE9NIHJlYWR5IHRvIGJlIHVzZWQ/IFNldCB0byB0cnVlIG9uY2UgaXQgb2NjdXJzLlxuXHRpc1JlYWR5OiBmYWxzZSxcblxuXHQvLyBBIGNvdW50ZXIgdG8gdHJhY2sgaG93IG1hbnkgaXRlbXMgdG8gd2FpdCBmb3IgYmVmb3JlXG5cdC8vIHRoZSByZWFkeSBldmVudCBmaXJlcy4gU2VlIHRyYWMtNjc4MVxuXHRyZWFkeVdhaXQ6IDEsXG5cblx0Ly8gSGFuZGxlIHdoZW4gdGhlIERPTSBpcyByZWFkeVxuXHRyZWFkeTogZnVuY3Rpb24oIHdhaXQgKSB7XG5cblx0XHQvLyBBYm9ydCBpZiB0aGVyZSBhcmUgcGVuZGluZyBob2xkcyBvciB3ZSdyZSBhbHJlYWR5IHJlYWR5XG5cdFx0aWYgKCB3YWl0ID09PSB0cnVlID8gLS1qUXVlcnkucmVhZHlXYWl0IDogalF1ZXJ5LmlzUmVhZHkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gUmVtZW1iZXIgdGhhdCB0aGUgRE9NIGlzIHJlYWR5XG5cdFx0alF1ZXJ5LmlzUmVhZHkgPSB0cnVlO1xuXG5cdFx0Ly8gSWYgYSBub3JtYWwgRE9NIFJlYWR5IGV2ZW50IGZpcmVkLCBkZWNyZW1lbnQsIGFuZCB3YWl0IGlmIG5lZWQgYmVcblx0XHRpZiAoIHdhaXQgIT09IHRydWUgJiYgLS1qUXVlcnkucmVhZHlXYWl0ID4gMCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSBhcmUgZnVuY3Rpb25zIGJvdW5kLCB0byBleGVjdXRlXG5cdFx0cmVhZHlMaXN0LnJlc29sdmVXaXRoKCBkb2N1bWVudCwgWyBqUXVlcnkgXSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5yZWFkeS50aGVuID0gcmVhZHlMaXN0LnRoZW47XG5cbi8vIFRoZSByZWFkeSBldmVudCBoYW5kbGVyIGFuZCBzZWxmIGNsZWFudXAgbWV0aG9kXG5mdW5jdGlvbiBjb21wbGV0ZWQoKSB7XG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiRE9NQ29udGVudExvYWRlZFwiLCBjb21wbGV0ZWQgKTtcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibG9hZFwiLCBjb21wbGV0ZWQgKTtcblx0alF1ZXJ5LnJlYWR5KCk7XG59XG5cbi8vIENhdGNoIGNhc2VzIHdoZXJlICQoZG9jdW1lbnQpLnJlYWR5KCkgaXMgY2FsbGVkXG4vLyBhZnRlciB0aGUgYnJvd3NlciBldmVudCBoYXMgYWxyZWFkeSBvY2N1cnJlZC5cbi8vIFN1cHBvcnQ6IElFIDw9OSAtIDEwIG9ubHlcbi8vIE9sZGVyIElFIHNvbWV0aW1lcyBzaWduYWxzIFwiaW50ZXJhY3RpdmVcIiB0b28gc29vblxuaWYgKCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgfHxcblx0KCBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIiAmJiAhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsICkgKSB7XG5cblx0Ly8gSGFuZGxlIGl0IGFzeW5jaHJvbm91c2x5IHRvIGFsbG93IHNjcmlwdHMgdGhlIG9wcG9ydHVuaXR5IHRvIGRlbGF5IHJlYWR5XG5cdHdpbmRvdy5zZXRUaW1lb3V0KCBqUXVlcnkucmVhZHkgKTtcblxufSBlbHNlIHtcblxuXHQvLyBVc2UgdGhlIGhhbmR5IGV2ZW50IGNhbGxiYWNrXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwiRE9NQ29udGVudExvYWRlZFwiLCBjb21wbGV0ZWQgKTtcblxuXHQvLyBBIGZhbGxiYWNrIHRvIHdpbmRvdy5vbmxvYWQsIHRoYXQgd2lsbCBhbHdheXMgd29ya1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJsb2FkXCIsIGNvbXBsZXRlZCApO1xufVxuXG5cblxuXG4vLyBNdWx0aWZ1bmN0aW9uYWwgbWV0aG9kIHRvIGdldCBhbmQgc2V0IHZhbHVlcyBvZiBhIGNvbGxlY3Rpb25cbi8vIFRoZSB2YWx1ZS9zIGNhbiBvcHRpb25hbGx5IGJlIGV4ZWN1dGVkIGlmIGl0J3MgYSBmdW5jdGlvblxudmFyIGFjY2VzcyA9IGZ1bmN0aW9uKCBlbGVtcywgZm4sIGtleSwgdmFsdWUsIGNoYWluYWJsZSwgZW1wdHlHZXQsIHJhdyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IGVsZW1zLmxlbmd0aCxcblx0XHRidWxrID0ga2V5ID09IG51bGw7XG5cblx0Ly8gU2V0cyBtYW55IHZhbHVlc1xuXHRpZiAoIHRvVHlwZSgga2V5ICkgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0Y2hhaW5hYmxlID0gdHJ1ZTtcblx0XHRmb3IgKCBpIGluIGtleSApIHtcblx0XHRcdGFjY2VzcyggZWxlbXMsIGZuLCBpLCBrZXlbIGkgXSwgdHJ1ZSwgZW1wdHlHZXQsIHJhdyApO1xuXHRcdH1cblxuXHQvLyBTZXRzIG9uZSB2YWx1ZVxuXHR9IGVsc2UgaWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdGNoYWluYWJsZSA9IHRydWU7XG5cblx0XHRpZiAoICFpc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmF3ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoIGJ1bGsgKSB7XG5cblx0XHRcdC8vIEJ1bGsgb3BlcmF0aW9ucyBydW4gYWdhaW5zdCB0aGUgZW50aXJlIHNldFxuXHRcdFx0aWYgKCByYXcgKSB7XG5cdFx0XHRcdGZuLmNhbGwoIGVsZW1zLCB2YWx1ZSApO1xuXHRcdFx0XHRmbiA9IG51bGw7XG5cblx0XHRcdC8vIC4uLmV4Y2VwdCB3aGVuIGV4ZWN1dGluZyBmdW5jdGlvbiB2YWx1ZXNcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJ1bGsgPSBmbjtcblx0XHRcdFx0Zm4gPSBmdW5jdGlvbiggZWxlbSwgX2tleSwgdmFsdWUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGJ1bGsuY2FsbCggalF1ZXJ5KCBlbGVtICksIHZhbHVlICk7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBmbiApIHtcblx0XHRcdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHRmbihcblx0XHRcdFx0XHRlbGVtc1sgaSBdLCBrZXksIHJhdyA/XG5cdFx0XHRcdFx0XHR2YWx1ZSA6XG5cdFx0XHRcdFx0XHR2YWx1ZS5jYWxsKCBlbGVtc1sgaSBdLCBpLCBmbiggZWxlbXNbIGkgXSwga2V5ICkgKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICggY2hhaW5hYmxlICkge1xuXHRcdHJldHVybiBlbGVtcztcblx0fVxuXG5cdC8vIEdldHNcblx0aWYgKCBidWxrICkge1xuXHRcdHJldHVybiBmbi5jYWxsKCBlbGVtcyApO1xuXHR9XG5cblx0cmV0dXJuIGxlbiA/IGZuKCBlbGVtc1sgMCBdLCBrZXkgKSA6IGVtcHR5R2V0O1xufTtcblxuXG4vLyBNYXRjaGVzIGRhc2hlZCBzdHJpbmcgZm9yIGNhbWVsaXppbmdcbnZhciBybXNQcmVmaXggPSAvXi1tcy0vLFxuXHRyZGFzaEFscGhhID0gLy0oW2Etel0pL2c7XG5cbi8vIFVzZWQgYnkgY2FtZWxDYXNlIGFzIGNhbGxiYWNrIHRvIHJlcGxhY2UoKVxuZnVuY3Rpb24gZmNhbWVsQ2FzZSggX2FsbCwgbGV0dGVyICkge1xuXHRyZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG59XG5cbi8vIENvbnZlcnQgZGFzaGVkIHRvIGNhbWVsQ2FzZTsgdXNlZCBieSB0aGUgY3NzIGFuZCBkYXRhIG1vZHVsZXNcbi8vIFN1cHBvcnQ6IElFIDw9OSAtIDExLCBFZGdlIDEyIC0gMTVcbi8vIE1pY3Jvc29mdCBmb3Jnb3QgdG8gaHVtcCB0aGVpciB2ZW5kb3IgcHJlZml4ICh0cmFjLTk1NzIpXG5mdW5jdGlvbiBjYW1lbENhc2UoIHN0cmluZyApIHtcblx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKCBybXNQcmVmaXgsIFwibXMtXCIgKS5yZXBsYWNlKCByZGFzaEFscGhhLCBmY2FtZWxDYXNlICk7XG59XG52YXIgYWNjZXB0RGF0YSA9IGZ1bmN0aW9uKCBvd25lciApIHtcblxuXHQvLyBBY2NlcHRzIG9ubHk6XG5cdC8vICAtIE5vZGVcblx0Ly8gICAgLSBOb2RlLkVMRU1FTlRfTk9ERVxuXHQvLyAgICAtIE5vZGUuRE9DVU1FTlRfTk9ERVxuXHQvLyAgLSBPYmplY3Rcblx0Ly8gICAgLSBBbnlcblx0cmV0dXJuIG93bmVyLm5vZGVUeXBlID09PSAxIHx8IG93bmVyLm5vZGVUeXBlID09PSA5IHx8ICEoICtvd25lci5ub2RlVHlwZSApO1xufTtcblxuXG5cblxuZnVuY3Rpb24gRGF0YSgpIHtcblx0dGhpcy5leHBhbmRvID0galF1ZXJ5LmV4cGFuZG8gKyBEYXRhLnVpZCsrO1xufVxuXG5EYXRhLnVpZCA9IDE7XG5cbkRhdGEucHJvdG90eXBlID0ge1xuXG5cdGNhY2hlOiBmdW5jdGlvbiggb3duZXIgKSB7XG5cblx0XHQvLyBDaGVjayBpZiB0aGUgb3duZXIgb2JqZWN0IGFscmVhZHkgaGFzIGEgY2FjaGVcblx0XHR2YXIgdmFsdWUgPSBvd25lclsgdGhpcy5leHBhbmRvIF07XG5cblx0XHQvLyBJZiBub3QsIGNyZWF0ZSBvbmVcblx0XHRpZiAoICF2YWx1ZSApIHtcblx0XHRcdHZhbHVlID0ge307XG5cblx0XHRcdC8vIFdlIGNhbiBhY2NlcHQgZGF0YSBmb3Igbm9uLWVsZW1lbnQgbm9kZXMgaW4gbW9kZXJuIGJyb3dzZXJzLFxuXHRcdFx0Ly8gYnV0IHdlIHNob3VsZCBub3QsIHNlZSB0cmFjLTgzMzUuXG5cdFx0XHQvLyBBbHdheXMgcmV0dXJuIGFuIGVtcHR5IG9iamVjdC5cblx0XHRcdGlmICggYWNjZXB0RGF0YSggb3duZXIgKSApIHtcblxuXHRcdFx0XHQvLyBJZiBpdCBpcyBhIG5vZGUgdW5saWtlbHkgdG8gYmUgc3RyaW5naWZ5LWVkIG9yIGxvb3BlZCBvdmVyXG5cdFx0XHRcdC8vIHVzZSBwbGFpbiBhc3NpZ25tZW50XG5cdFx0XHRcdGlmICggb3duZXIubm9kZVR5cGUgKSB7XG5cdFx0XHRcdFx0b3duZXJbIHRoaXMuZXhwYW5kbyBdID0gdmFsdWU7XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIHNlY3VyZSBpdCBpbiBhIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5XG5cdFx0XHRcdC8vIGNvbmZpZ3VyYWJsZSBtdXN0IGJlIHRydWUgdG8gYWxsb3cgdGhlIHByb3BlcnR5IHRvIGJlXG5cdFx0XHRcdC8vIGRlbGV0ZWQgd2hlbiBkYXRhIGlzIHJlbW92ZWRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIG93bmVyLCB0aGlzLmV4cGFuZG8sIHtcblx0XHRcdFx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0c2V0OiBmdW5jdGlvbiggb3duZXIsIGRhdGEsIHZhbHVlICkge1xuXHRcdHZhciBwcm9wLFxuXHRcdFx0Y2FjaGUgPSB0aGlzLmNhY2hlKCBvd25lciApO1xuXG5cdFx0Ly8gSGFuZGxlOiBbIG93bmVyLCBrZXksIHZhbHVlIF0gYXJnc1xuXHRcdC8vIEFsd2F5cyB1c2UgY2FtZWxDYXNlIGtleSAoZ2gtMjI1Nylcblx0XHRpZiAoIHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0Y2FjaGVbIGNhbWVsQ2FzZSggZGF0YSApIF0gPSB2YWx1ZTtcblxuXHRcdC8vIEhhbmRsZTogWyBvd25lciwgeyBwcm9wZXJ0aWVzIH0gXSBhcmdzXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gQ29weSB0aGUgcHJvcGVydGllcyBvbmUtYnktb25lIHRvIHRoZSBjYWNoZSBvYmplY3Rcblx0XHRcdGZvciAoIHByb3AgaW4gZGF0YSApIHtcblx0XHRcdFx0Y2FjaGVbIGNhbWVsQ2FzZSggcHJvcCApIF0gPSBkYXRhWyBwcm9wIF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjYWNoZTtcblx0fSxcblx0Z2V0OiBmdW5jdGlvbiggb3duZXIsIGtleSApIHtcblx0XHRyZXR1cm4ga2V5ID09PSB1bmRlZmluZWQgP1xuXHRcdFx0dGhpcy5jYWNoZSggb3duZXIgKSA6XG5cblx0XHRcdC8vIEFsd2F5cyB1c2UgY2FtZWxDYXNlIGtleSAoZ2gtMjI1Nylcblx0XHRcdG93bmVyWyB0aGlzLmV4cGFuZG8gXSAmJiBvd25lclsgdGhpcy5leHBhbmRvIF1bIGNhbWVsQ2FzZSgga2V5ICkgXTtcblx0fSxcblx0YWNjZXNzOiBmdW5jdGlvbiggb3duZXIsIGtleSwgdmFsdWUgKSB7XG5cblx0XHQvLyBJbiBjYXNlcyB3aGVyZSBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIE5vIGtleSB3YXMgc3BlY2lmaWVkXG5cdFx0Ly8gICAyLiBBIHN0cmluZyBrZXkgd2FzIHNwZWNpZmllZCwgYnV0IG5vIHZhbHVlIHByb3ZpZGVkXG5cdFx0Ly9cblx0XHQvLyBUYWtlIHRoZSBcInJlYWRcIiBwYXRoIGFuZCBhbGxvdyB0aGUgZ2V0IG1ldGhvZCB0byBkZXRlcm1pbmVcblx0XHQvLyB3aGljaCB2YWx1ZSB0byByZXR1cm4sIHJlc3BlY3RpdmVseSBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIFRoZSBlbnRpcmUgY2FjaGUgb2JqZWN0XG5cdFx0Ly8gICAyLiBUaGUgZGF0YSBzdG9yZWQgYXQgdGhlIGtleVxuXHRcdC8vXG5cdFx0aWYgKCBrZXkgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHQoICgga2V5ICYmIHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgKSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkICkgKSB7XG5cblx0XHRcdHJldHVybiB0aGlzLmdldCggb3duZXIsIGtleSApO1xuXHRcdH1cblxuXHRcdC8vIFdoZW4gdGhlIGtleSBpcyBub3QgYSBzdHJpbmcsIG9yIGJvdGggYSBrZXkgYW5kIHZhbHVlXG5cdFx0Ly8gYXJlIHNwZWNpZmllZCwgc2V0IG9yIGV4dGVuZCAoZXhpc3Rpbmcgb2JqZWN0cykgd2l0aCBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIEFuIG9iamVjdCBvZiBwcm9wZXJ0aWVzXG5cdFx0Ly8gICAyLiBBIGtleSBhbmQgdmFsdWVcblx0XHQvL1xuXHRcdHRoaXMuc2V0KCBvd25lciwga2V5LCB2YWx1ZSApO1xuXG5cdFx0Ly8gU2luY2UgdGhlIFwic2V0XCIgcGF0aCBjYW4gaGF2ZSB0d28gcG9zc2libGUgZW50cnkgcG9pbnRzXG5cdFx0Ly8gcmV0dXJuIHRoZSBleHBlY3RlZCBkYXRhIGJhc2VkIG9uIHdoaWNoIHBhdGggd2FzIHRha2VuWypdXG5cdFx0cmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IGtleTtcblx0fSxcblx0cmVtb3ZlOiBmdW5jdGlvbiggb3duZXIsIGtleSApIHtcblx0XHR2YXIgaSxcblx0XHRcdGNhY2hlID0gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXG5cdFx0aWYgKCBjYWNoZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICgga2V5ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdC8vIFN1cHBvcnQgYXJyYXkgb3Igc3BhY2Ugc2VwYXJhdGVkIHN0cmluZyBvZiBrZXlzXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIGtleSApICkge1xuXG5cdFx0XHRcdC8vIElmIGtleSBpcyBhbiBhcnJheSBvZiBrZXlzLi4uXG5cdFx0XHRcdC8vIFdlIGFsd2F5cyBzZXQgY2FtZWxDYXNlIGtleXMsIHNvIHJlbW92ZSB0aGF0LlxuXHRcdFx0XHRrZXkgPSBrZXkubWFwKCBjYW1lbENhc2UgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGtleSA9IGNhbWVsQ2FzZSgga2V5ICk7XG5cblx0XHRcdFx0Ly8gSWYgYSBrZXkgd2l0aCB0aGUgc3BhY2VzIGV4aXN0cywgdXNlIGl0LlxuXHRcdFx0XHQvLyBPdGhlcndpc2UsIGNyZWF0ZSBhbiBhcnJheSBieSBtYXRjaGluZyBub24td2hpdGVzcGFjZVxuXHRcdFx0XHRrZXkgPSBrZXkgaW4gY2FjaGUgP1xuXHRcdFx0XHRcdFsga2V5IF0gOlxuXHRcdFx0XHRcdCgga2V5Lm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW10gKTtcblx0XHRcdH1cblxuXHRcdFx0aSA9IGtleS5sZW5ndGg7XG5cblx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRkZWxldGUgY2FjaGVbIGtleVsgaSBdIF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBleHBhbmRvIGlmIHRoZXJlJ3Mgbm8gbW9yZSBkYXRhXG5cdFx0aWYgKCBrZXkgPT09IHVuZGVmaW5lZCB8fCBqUXVlcnkuaXNFbXB0eU9iamVjdCggY2FjaGUgKSApIHtcblxuXHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NVxuXHRcdFx0Ly8gV2Via2l0ICYgQmxpbmsgcGVyZm9ybWFuY2Ugc3VmZmVycyB3aGVuIGRlbGV0aW5nIHByb3BlcnRpZXNcblx0XHRcdC8vIGZyb20gRE9NIG5vZGVzLCBzbyBzZXQgdG8gdW5kZWZpbmVkIGluc3RlYWRcblx0XHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTM3ODYwNyAoYnVnIHJlc3RyaWN0ZWQpXG5cdFx0XHRpZiAoIG93bmVyLm5vZGVUeXBlICkge1xuXHRcdFx0XHRvd25lclsgdGhpcy5leHBhbmRvIF0gPSB1bmRlZmluZWQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWxldGUgb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0aGFzRGF0YTogZnVuY3Rpb24oIG93bmVyICkge1xuXHRcdHZhciBjYWNoZSA9IG93bmVyWyB0aGlzLmV4cGFuZG8gXTtcblx0XHRyZXR1cm4gY2FjaGUgIT09IHVuZGVmaW5lZCAmJiAhalF1ZXJ5LmlzRW1wdHlPYmplY3QoIGNhY2hlICk7XG5cdH1cbn07XG52YXIgZGF0YVByaXYgPSBuZXcgRGF0YSgpO1xuXG52YXIgZGF0YVVzZXIgPSBuZXcgRGF0YSgpO1xuXG5cblxuLy9cdEltcGxlbWVudGF0aW9uIFN1bW1hcnlcbi8vXG4vL1x0MS4gRW5mb3JjZSBBUEkgc3VyZmFjZSBhbmQgc2VtYW50aWMgY29tcGF0aWJpbGl0eSB3aXRoIDEuOS54IGJyYW5jaFxuLy9cdDIuIEltcHJvdmUgdGhlIG1vZHVsZSdzIG1haW50YWluYWJpbGl0eSBieSByZWR1Y2luZyB0aGUgc3RvcmFnZVxuLy9cdFx0cGF0aHMgdG8gYSBzaW5nbGUgbWVjaGFuaXNtLlxuLy9cdDMuIFVzZSB0aGUgc2FtZSBzaW5nbGUgbWVjaGFuaXNtIHRvIHN1cHBvcnQgXCJwcml2YXRlXCIgYW5kIFwidXNlclwiIGRhdGEuXG4vL1x0NC4gX05ldmVyXyBleHBvc2UgXCJwcml2YXRlXCIgZGF0YSB0byB1c2VyIGNvZGUgKFRPRE86IERyb3AgX2RhdGEsIF9yZW1vdmVEYXRhKVxuLy9cdDUuIEF2b2lkIGV4cG9zaW5nIGltcGxlbWVudGF0aW9uIGRldGFpbHMgb24gdXNlciBvYmplY3RzIChlZy4gZXhwYW5kbyBwcm9wZXJ0aWVzKVxuLy9cdDYuIFByb3ZpZGUgYSBjbGVhciBwYXRoIGZvciBpbXBsZW1lbnRhdGlvbiB1cGdyYWRlIHRvIFdlYWtNYXAgaW4gMjAxNFxuXG52YXIgcmJyYWNlID0gL14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFxuXHRybXVsdGlEYXNoID0gL1tBLVpdL2c7XG5cbmZ1bmN0aW9uIGdldERhdGEoIGRhdGEgKSB7XG5cdGlmICggZGF0YSA9PT0gXCJ0cnVlXCIgKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoIGRhdGEgPT09IFwiZmFsc2VcIiApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpZiAoIGRhdGEgPT09IFwibnVsbFwiICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Ly8gT25seSBjb252ZXJ0IHRvIGEgbnVtYmVyIGlmIGl0IGRvZXNuJ3QgY2hhbmdlIHRoZSBzdHJpbmdcblx0aWYgKCBkYXRhID09PSArZGF0YSArIFwiXCIgKSB7XG5cdFx0cmV0dXJuICtkYXRhO1xuXHR9XG5cblx0aWYgKCByYnJhY2UudGVzdCggZGF0YSApICkge1xuXHRcdHJldHVybiBKU09OLnBhcnNlKCBkYXRhICk7XG5cdH1cblxuXHRyZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZGF0YUF0dHIoIGVsZW0sIGtleSwgZGF0YSApIHtcblx0dmFyIG5hbWU7XG5cblx0Ly8gSWYgbm90aGluZyB3YXMgZm91bmQgaW50ZXJuYWxseSwgdHJ5IHRvIGZldGNoIGFueVxuXHQvLyBkYXRhIGZyb20gdGhlIEhUTUw1IGRhdGEtKiBhdHRyaWJ1dGVcblx0aWYgKCBkYXRhID09PSB1bmRlZmluZWQgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRuYW1lID0gXCJkYXRhLVwiICsga2V5LnJlcGxhY2UoIHJtdWx0aURhc2gsIFwiLSQmXCIgKS50b0xvd2VyQ2FzZSgpO1xuXHRcdGRhdGEgPSBlbGVtLmdldEF0dHJpYnV0ZSggbmFtZSApO1xuXG5cdFx0aWYgKCB0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRhdGEgPSBnZXREYXRhKCBkYXRhICk7XG5cdFx0XHR9IGNhdGNoICggZSApIHt9XG5cblx0XHRcdC8vIE1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGRhdGEgc28gaXQgaXNuJ3QgY2hhbmdlZCBsYXRlclxuXHRcdFx0ZGF0YVVzZXIuc2V0KCBlbGVtLCBrZXksIGRhdGEgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGRhdGE7XG59XG5cbmpRdWVyeS5leHRlbmQoIHtcblx0aGFzRGF0YTogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGRhdGFVc2VyLmhhc0RhdGEoIGVsZW0gKSB8fCBkYXRhUHJpdi5oYXNEYXRhKCBlbGVtICk7XG5cdH0sXG5cblx0ZGF0YTogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGRhdGEgKSB7XG5cdFx0cmV0dXJuIGRhdGFVc2VyLmFjY2VzcyggZWxlbSwgbmFtZSwgZGF0YSApO1xuXHR9LFxuXG5cdHJlbW92ZURhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuXHRcdGRhdGFVc2VyLnJlbW92ZSggZWxlbSwgbmFtZSApO1xuXHR9LFxuXG5cdC8vIFRPRE86IE5vdyB0aGF0IGFsbCBjYWxscyB0byBfZGF0YSBhbmQgX3JlbW92ZURhdGEgaGF2ZSBiZWVuIHJlcGxhY2VkXG5cdC8vIHdpdGggZGlyZWN0IGNhbGxzIHRvIGRhdGFQcml2IG1ldGhvZHMsIHRoZXNlIGNhbiBiZSBkZXByZWNhdGVkLlxuXHRfZGF0YTogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGRhdGEgKSB7XG5cdFx0cmV0dXJuIGRhdGFQcml2LmFjY2VzcyggZWxlbSwgbmFtZSwgZGF0YSApO1xuXHR9LFxuXG5cdF9yZW1vdmVEYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcblx0XHRkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIG5hbWUgKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGRhdGE6IGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuXHRcdHZhciBpLCBuYW1lLCBkYXRhLFxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXSxcblx0XHRcdGF0dHJzID0gZWxlbSAmJiBlbGVtLmF0dHJpYnV0ZXM7XG5cblx0XHQvLyBHZXRzIGFsbCB2YWx1ZXNcblx0XHRpZiAoIGtleSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0aWYgKCB0aGlzLmxlbmd0aCApIHtcblx0XHRcdFx0ZGF0YSA9IGRhdGFVc2VyLmdldCggZWxlbSApO1xuXG5cdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAhZGF0YVByaXYuZ2V0KCBlbGVtLCBcImhhc0RhdGFBdHRyc1wiICkgKSB7XG5cdFx0XHRcdFx0aSA9IGF0dHJzLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgMTEgb25seVxuXHRcdFx0XHRcdFx0Ly8gVGhlIGF0dHJzIGVsZW1lbnRzIGNhbiBiZSBudWxsICh0cmFjLTE0ODk0KVxuXHRcdFx0XHRcdFx0aWYgKCBhdHRyc1sgaSBdICkge1xuXHRcdFx0XHRcdFx0XHRuYW1lID0gYXR0cnNbIGkgXS5uYW1lO1xuXHRcdFx0XHRcdFx0XHRpZiAoIG5hbWUuaW5kZXhPZiggXCJkYXRhLVwiICkgPT09IDAgKSB7XG5cdFx0XHRcdFx0XHRcdFx0bmFtZSA9IGNhbWVsQ2FzZSggbmFtZS5zbGljZSggNSApICk7XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YUF0dHIoIGVsZW0sIG5hbWUsIGRhdGFbIG5hbWUgXSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRhdGFQcml2LnNldCggZWxlbSwgXCJoYXNEYXRhQXR0cnNcIiwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH1cblxuXHRcdC8vIFNldHMgbXVsdGlwbGUgdmFsdWVzXG5cdFx0aWYgKCB0eXBlb2Yga2V5ID09PSBcIm9iamVjdFwiICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRhdGFVc2VyLnNldCggdGhpcywga2V5ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0dmFyIGRhdGE7XG5cblx0XHRcdC8vIFRoZSBjYWxsaW5nIGpRdWVyeSBvYmplY3QgKGVsZW1lbnQgbWF0Y2hlcykgaXMgbm90IGVtcHR5XG5cdFx0XHQvLyAoYW5kIHRoZXJlZm9yZSBoYXMgYW4gZWxlbWVudCBhcHBlYXJzIGF0IHRoaXNbIDAgXSkgYW5kIHRoZVxuXHRcdFx0Ly8gYHZhbHVlYCBwYXJhbWV0ZXIgd2FzIG5vdCB1bmRlZmluZWQuIEFuIGVtcHR5IGpRdWVyeSBvYmplY3Rcblx0XHRcdC8vIHdpbGwgcmVzdWx0IGluIGB1bmRlZmluZWRgIGZvciBlbGVtID0gdGhpc1sgMCBdIHdoaWNoIHdpbGxcblx0XHRcdC8vIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhbiBhdHRlbXB0IHRvIHJlYWQgYSBkYXRhIGNhY2hlIGlzIG1hZGUuXG5cdFx0XHRpZiAoIGVsZW0gJiYgdmFsdWUgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHQvLyBBdHRlbXB0IHRvIGdldCBkYXRhIGZyb20gdGhlIGNhY2hlXG5cdFx0XHRcdC8vIFRoZSBrZXkgd2lsbCBhbHdheXMgYmUgY2FtZWxDYXNlZCBpbiBEYXRhXG5cdFx0XHRcdGRhdGEgPSBkYXRhVXNlci5nZXQoIGVsZW0sIGtleSApO1xuXHRcdFx0XHRpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEF0dGVtcHQgdG8gXCJkaXNjb3ZlclwiIHRoZSBkYXRhIGluXG5cdFx0XHRcdC8vIEhUTUw1IGN1c3RvbSBkYXRhLSogYXR0cnNcblx0XHRcdFx0ZGF0YSA9IGRhdGFBdHRyKCBlbGVtLCBrZXkgKTtcblx0XHRcdFx0aWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXZSB0cmllZCByZWFsbHkgaGFyZCwgYnV0IHRoZSBkYXRhIGRvZXNuJ3QgZXhpc3QuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IHRoZSBkYXRhLi4uXG5cdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdC8vIFdlIGFsd2F5cyBzdG9yZSB0aGUgY2FtZWxDYXNlZCBrZXlcblx0XHRcdFx0ZGF0YVVzZXIuc2V0KCB0aGlzLCBrZXksIHZhbHVlICk7XG5cdFx0XHR9ICk7XG5cdFx0fSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxLCBudWxsLCB0cnVlICk7XG5cdH0sXG5cblx0cmVtb3ZlRGF0YTogZnVuY3Rpb24oIGtleSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGRhdGFVc2VyLnJlbW92ZSggdGhpcywga2V5ICk7XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cblxualF1ZXJ5LmV4dGVuZCgge1xuXHRxdWV1ZTogZnVuY3Rpb24oIGVsZW0sIHR5cGUsIGRhdGEgKSB7XG5cdFx0dmFyIHF1ZXVlO1xuXG5cdFx0aWYgKCBlbGVtICkge1xuXHRcdFx0dHlwZSA9ICggdHlwZSB8fCBcImZ4XCIgKSArIFwicXVldWVcIjtcblx0XHRcdHF1ZXVlID0gZGF0YVByaXYuZ2V0KCBlbGVtLCB0eXBlICk7XG5cblx0XHRcdC8vIFNwZWVkIHVwIGRlcXVldWUgYnkgZ2V0dGluZyBvdXQgcXVpY2tseSBpZiB0aGlzIGlzIGp1c3QgYSBsb29rdXBcblx0XHRcdGlmICggZGF0YSApIHtcblx0XHRcdFx0aWYgKCAhcXVldWUgfHwgQXJyYXkuaXNBcnJheSggZGF0YSApICkge1xuXHRcdFx0XHRcdHF1ZXVlID0gZGF0YVByaXYuYWNjZXNzKCBlbGVtLCB0eXBlLCBqUXVlcnkubWFrZUFycmF5KCBkYXRhICkgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRxdWV1ZS5wdXNoKCBkYXRhICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBxdWV1ZSB8fCBbXTtcblx0XHR9XG5cdH0sXG5cblx0ZGVxdWV1ZTogZnVuY3Rpb24oIGVsZW0sIHR5cGUgKSB7XG5cdFx0dHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xuXG5cdFx0dmFyIHF1ZXVlID0galF1ZXJ5LnF1ZXVlKCBlbGVtLCB0eXBlICksXG5cdFx0XHRzdGFydExlbmd0aCA9IHF1ZXVlLmxlbmd0aCxcblx0XHRcdGZuID0gcXVldWUuc2hpZnQoKSxcblx0XHRcdGhvb2tzID0galF1ZXJ5Ll9xdWV1ZUhvb2tzKCBlbGVtLCB0eXBlICksXG5cdFx0XHRuZXh0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeS5kZXF1ZXVlKCBlbGVtLCB0eXBlICk7XG5cdFx0XHR9O1xuXG5cdFx0Ly8gSWYgdGhlIGZ4IHF1ZXVlIGlzIGRlcXVldWVkLCBhbHdheXMgcmVtb3ZlIHRoZSBwcm9ncmVzcyBzZW50aW5lbFxuXHRcdGlmICggZm4gPT09IFwiaW5wcm9ncmVzc1wiICkge1xuXHRcdFx0Zm4gPSBxdWV1ZS5zaGlmdCgpO1xuXHRcdFx0c3RhcnRMZW5ndGgtLTtcblx0XHR9XG5cblx0XHRpZiAoIGZuICkge1xuXG5cdFx0XHQvLyBBZGQgYSBwcm9ncmVzcyBzZW50aW5lbCB0byBwcmV2ZW50IHRoZSBmeCBxdWV1ZSBmcm9tIGJlaW5nXG5cdFx0XHQvLyBhdXRvbWF0aWNhbGx5IGRlcXVldWVkXG5cdFx0XHRpZiAoIHR5cGUgPT09IFwiZnhcIiApIHtcblx0XHRcdFx0cXVldWUudW5zaGlmdCggXCJpbnByb2dyZXNzXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2xlYXIgdXAgdGhlIGxhc3QgcXVldWUgc3RvcCBmdW5jdGlvblxuXHRcdFx0ZGVsZXRlIGhvb2tzLnN0b3A7XG5cdFx0XHRmbi5jYWxsKCBlbGVtLCBuZXh0LCBob29rcyApO1xuXHRcdH1cblxuXHRcdGlmICggIXN0YXJ0TGVuZ3RoICYmIGhvb2tzICkge1xuXHRcdFx0aG9va3MuZW1wdHkuZmlyZSgpO1xuXHRcdH1cblx0fSxcblxuXHQvLyBOb3QgcHVibGljIC0gZ2VuZXJhdGUgYSBxdWV1ZUhvb2tzIG9iamVjdCwgb3IgcmV0dXJuIHRoZSBjdXJyZW50IG9uZVxuXHRfcXVldWVIb29rczogZnVuY3Rpb24oIGVsZW0sIHR5cGUgKSB7XG5cdFx0dmFyIGtleSA9IHR5cGUgKyBcInF1ZXVlSG9va3NcIjtcblx0XHRyZXR1cm4gZGF0YVByaXYuZ2V0KCBlbGVtLCBrZXkgKSB8fCBkYXRhUHJpdi5hY2Nlc3MoIGVsZW0sIGtleSwge1xuXHRcdFx0ZW1wdHk6IGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLmFkZCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRhdGFQcml2LnJlbW92ZSggZWxlbSwgWyB0eXBlICsgXCJxdWV1ZVwiLCBrZXkgXSApO1xuXHRcdFx0fSApXG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0cXVldWU6IGZ1bmN0aW9uKCB0eXBlLCBkYXRhICkge1xuXHRcdHZhciBzZXR0ZXIgPSAyO1xuXG5cdFx0aWYgKCB0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGRhdGEgPSB0eXBlO1xuXHRcdFx0dHlwZSA9IFwiZnhcIjtcblx0XHRcdHNldHRlci0tO1xuXHRcdH1cblxuXHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCA8IHNldHRlciApIHtcblx0XHRcdHJldHVybiBqUXVlcnkucXVldWUoIHRoaXNbIDAgXSwgdHlwZSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBkYXRhID09PSB1bmRlZmluZWQgP1xuXHRcdFx0dGhpcyA6XG5cdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgcXVldWUgPSBqUXVlcnkucXVldWUoIHRoaXMsIHR5cGUsIGRhdGEgKTtcblxuXHRcdFx0XHQvLyBFbnN1cmUgYSBob29rcyBmb3IgdGhpcyBxdWV1ZVxuXHRcdFx0XHRqUXVlcnkuX3F1ZXVlSG9va3MoIHRoaXMsIHR5cGUgKTtcblxuXHRcdFx0XHRpZiAoIHR5cGUgPT09IFwiZnhcIiAmJiBxdWV1ZVsgMCBdICE9PSBcImlucHJvZ3Jlc3NcIiApIHtcblx0XHRcdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgdHlwZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdH0sXG5cdGRlcXVldWU6IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIHR5cGUgKTtcblx0XHR9ICk7XG5cdH0sXG5cdGNsZWFyUXVldWU6IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdHJldHVybiB0aGlzLnF1ZXVlKCB0eXBlIHx8IFwiZnhcIiwgW10gKTtcblx0fSxcblxuXHQvLyBHZXQgYSBwcm9taXNlIHJlc29sdmVkIHdoZW4gcXVldWVzIG9mIGEgY2VydGFpbiB0eXBlXG5cdC8vIGFyZSBlbXB0aWVkIChmeCBpcyB0aGUgdHlwZSBieSBkZWZhdWx0KVxuXHRwcm9taXNlOiBmdW5jdGlvbiggdHlwZSwgb2JqICkge1xuXHRcdHZhciB0bXAsXG5cdFx0XHRjb3VudCA9IDEsXG5cdFx0XHRkZWZlciA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuXHRcdFx0ZWxlbWVudHMgPSB0aGlzLFxuXHRcdFx0aSA9IHRoaXMubGVuZ3RoLFxuXHRcdFx0cmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoICEoIC0tY291bnQgKSApIHtcblx0XHRcdFx0XHRkZWZlci5yZXNvbHZlV2l0aCggZWxlbWVudHMsIFsgZWxlbWVudHMgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0aWYgKCB0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdG9iaiA9IHR5cGU7XG5cdFx0XHR0eXBlID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdHRtcCA9IGRhdGFQcml2LmdldCggZWxlbWVudHNbIGkgXSwgdHlwZSArIFwicXVldWVIb29rc1wiICk7XG5cdFx0XHRpZiAoIHRtcCAmJiB0bXAuZW1wdHkgKSB7XG5cdFx0XHRcdGNvdW50Kys7XG5cdFx0XHRcdHRtcC5lbXB0eS5hZGQoIHJlc29sdmUgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVzb2x2ZSgpO1xuXHRcdHJldHVybiBkZWZlci5wcm9taXNlKCBvYmogKTtcblx0fVxufSApO1xudmFyIHBudW0gPSAoIC9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvICkuc291cmNlO1xuXG52YXIgcmNzc051bSA9IG5ldyBSZWdFeHAoIFwiXig/OihbKy1dKT18KShcIiArIHBudW0gKyBcIikoW2EteiVdKikkXCIsIFwiaVwiICk7XG5cblxudmFyIGNzc0V4cGFuZCA9IFsgXCJUb3BcIiwgXCJSaWdodFwiLCBcIkJvdHRvbVwiLCBcIkxlZnRcIiBdO1xuXG52YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuXHR2YXIgaXNBdHRhY2hlZCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5jb250YWlucyggZWxlbS5vd25lckRvY3VtZW50LCBlbGVtICk7XG5cdFx0fSxcblx0XHRjb21wb3NlZCA9IHsgY29tcG9zZWQ6IHRydWUgfTtcblxuXHQvLyBTdXBwb3J0OiBJRSA5IC0gMTErLCBFZGdlIDEyIC0gMTgrLCBpT1MgMTAuMCAtIDEwLjIgb25seVxuXHQvLyBDaGVjayBhdHRhY2htZW50IGFjcm9zcyBzaGFkb3cgRE9NIGJvdW5kYXJpZXMgd2hlbiBwb3NzaWJsZSAoZ2gtMzUwNClcblx0Ly8gU3VwcG9ydDogaU9TIDEwLjAtMTAuMiBvbmx5XG5cdC8vIEVhcmx5IGlPUyAxMCB2ZXJzaW9ucyBzdXBwb3J0IGBhdHRhY2hTaGFkb3dgIGJ1dCBub3QgYGdldFJvb3ROb2RlYCxcblx0Ly8gbGVhZGluZyB0byBlcnJvcnMuIFdlIG5lZWQgdG8gY2hlY2sgZm9yIGBnZXRSb290Tm9kZWAuXG5cdGlmICggZG9jdW1lbnRFbGVtZW50LmdldFJvb3ROb2RlICkge1xuXHRcdGlzQXR0YWNoZWQgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBqUXVlcnkuY29udGFpbnMoIGVsZW0ub3duZXJEb2N1bWVudCwgZWxlbSApIHx8XG5cdFx0XHRcdGVsZW0uZ2V0Um9vdE5vZGUoIGNvbXBvc2VkICkgPT09IGVsZW0ub3duZXJEb2N1bWVudDtcblx0XHR9O1xuXHR9XG52YXIgaXNIaWRkZW5XaXRoaW5UcmVlID0gZnVuY3Rpb24oIGVsZW0sIGVsICkge1xuXG5cdFx0Ly8gaXNIaWRkZW5XaXRoaW5UcmVlIG1pZ2h0IGJlIGNhbGxlZCBmcm9tIGpRdWVyeSNmaWx0ZXIgZnVuY3Rpb247XG5cdFx0Ly8gaW4gdGhhdCBjYXNlLCBlbGVtZW50IHdpbGwgYmUgc2Vjb25kIGFyZ3VtZW50XG5cdFx0ZWxlbSA9IGVsIHx8IGVsZW07XG5cblx0XHQvLyBJbmxpbmUgc3R5bGUgdHJ1bXBzIGFsbFxuXHRcdHJldHVybiBlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiIHx8XG5cdFx0XHRlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwiXCIgJiZcblxuXHRcdFx0Ly8gT3RoZXJ3aXNlLCBjaGVjayBjb21wdXRlZCBzdHlsZVxuXHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA8PTQzIC0gNDVcblx0XHRcdC8vIERpc2Nvbm5lY3RlZCBlbGVtZW50cyBjYW4gaGF2ZSBjb21wdXRlZCBkaXNwbGF5OiBub25lLCBzbyBmaXJzdCBjb25maXJtIHRoYXQgZWxlbSBpc1xuXHRcdFx0Ly8gaW4gdGhlIGRvY3VtZW50LlxuXHRcdFx0aXNBdHRhY2hlZCggZWxlbSApICYmXG5cblx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiICkgPT09IFwibm9uZVwiO1xuXHR9O1xuXG5cblxuZnVuY3Rpb24gYWRqdXN0Q1NTKCBlbGVtLCBwcm9wLCB2YWx1ZVBhcnRzLCB0d2VlbiApIHtcblx0dmFyIGFkanVzdGVkLCBzY2FsZSxcblx0XHRtYXhJdGVyYXRpb25zID0gMjAsXG5cdFx0Y3VycmVudFZhbHVlID0gdHdlZW4gP1xuXHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB0d2Vlbi5jdXIoKTtcblx0XHRcdH0gOlxuXHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBqUXVlcnkuY3NzKCBlbGVtLCBwcm9wLCBcIlwiICk7XG5cdFx0XHR9LFxuXHRcdGluaXRpYWwgPSBjdXJyZW50VmFsdWUoKSxcblx0XHR1bml0ID0gdmFsdWVQYXJ0cyAmJiB2YWx1ZVBhcnRzWyAzIF0gfHwgKCBqUXVlcnkuY3NzTnVtYmVyWyBwcm9wIF0gPyBcIlwiIDogXCJweFwiICksXG5cblx0XHQvLyBTdGFydGluZyB2YWx1ZSBjb21wdXRhdGlvbiBpcyByZXF1aXJlZCBmb3IgcG90ZW50aWFsIHVuaXQgbWlzbWF0Y2hlc1xuXHRcdGluaXRpYWxJblVuaXQgPSBlbGVtLm5vZGVUeXBlICYmXG5cdFx0XHQoIGpRdWVyeS5jc3NOdW1iZXJbIHByb3AgXSB8fCB1bml0ICE9PSBcInB4XCIgJiYgK2luaXRpYWwgKSAmJlxuXHRcdFx0cmNzc051bS5leGVjKCBqUXVlcnkuY3NzKCBlbGVtLCBwcm9wICkgKTtcblxuXHRpZiAoIGluaXRpYWxJblVuaXQgJiYgaW5pdGlhbEluVW5pdFsgMyBdICE9PSB1bml0ICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA8PTU0XG5cdFx0Ly8gSGFsdmUgdGhlIGl0ZXJhdGlvbiB0YXJnZXQgdmFsdWUgdG8gcHJldmVudCBpbnRlcmZlcmVuY2UgZnJvbSBDU1MgdXBwZXIgYm91bmRzIChnaC0yMTQ0KVxuXHRcdGluaXRpYWwgPSBpbml0aWFsIC8gMjtcblxuXHRcdC8vIFRydXN0IHVuaXRzIHJlcG9ydGVkIGJ5IGpRdWVyeS5jc3Ncblx0XHR1bml0ID0gdW5pdCB8fCBpbml0aWFsSW5Vbml0WyAzIF07XG5cblx0XHQvLyBJdGVyYXRpdmVseSBhcHByb3hpbWF0ZSBmcm9tIGEgbm9uemVybyBzdGFydGluZyBwb2ludFxuXHRcdGluaXRpYWxJblVuaXQgPSAraW5pdGlhbCB8fCAxO1xuXG5cdFx0d2hpbGUgKCBtYXhJdGVyYXRpb25zLS0gKSB7XG5cblx0XHRcdC8vIEV2YWx1YXRlIGFuZCB1cGRhdGUgb3VyIGJlc3QgZ3Vlc3MgKGRvdWJsaW5nIGd1ZXNzZXMgdGhhdCB6ZXJvIG91dCkuXG5cdFx0XHQvLyBGaW5pc2ggaWYgdGhlIHNjYWxlIGVxdWFscyBvciBjcm9zc2VzIDEgKG1ha2luZyB0aGUgb2xkKm5ldyBwcm9kdWN0IG5vbi1wb3NpdGl2ZSkuXG5cdFx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AsIGluaXRpYWxJblVuaXQgKyB1bml0ICk7XG5cdFx0XHRpZiAoICggMSAtIHNjYWxlICkgKiAoIDEgLSAoIHNjYWxlID0gY3VycmVudFZhbHVlKCkgLyBpbml0aWFsIHx8IDAuNSApICkgPD0gMCApIHtcblx0XHRcdFx0bWF4SXRlcmF0aW9ucyA9IDA7XG5cdFx0XHR9XG5cdFx0XHRpbml0aWFsSW5Vbml0ID0gaW5pdGlhbEluVW5pdCAvIHNjYWxlO1xuXG5cdFx0fVxuXG5cdFx0aW5pdGlhbEluVW5pdCA9IGluaXRpYWxJblVuaXQgKiAyO1xuXHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgcHJvcCwgaW5pdGlhbEluVW5pdCArIHVuaXQgKTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB3ZSB1cGRhdGUgdGhlIHR3ZWVuIHByb3BlcnRpZXMgbGF0ZXIgb25cblx0XHR2YWx1ZVBhcnRzID0gdmFsdWVQYXJ0cyB8fCBbXTtcblx0fVxuXG5cdGlmICggdmFsdWVQYXJ0cyApIHtcblx0XHRpbml0aWFsSW5Vbml0ID0gK2luaXRpYWxJblVuaXQgfHwgK2luaXRpYWwgfHwgMDtcblxuXHRcdC8vIEFwcGx5IHJlbGF0aXZlIG9mZnNldCAoKz0vLT0pIGlmIHNwZWNpZmllZFxuXHRcdGFkanVzdGVkID0gdmFsdWVQYXJ0c1sgMSBdID9cblx0XHRcdGluaXRpYWxJblVuaXQgKyAoIHZhbHVlUGFydHNbIDEgXSArIDEgKSAqIHZhbHVlUGFydHNbIDIgXSA6XG5cdFx0XHQrdmFsdWVQYXJ0c1sgMiBdO1xuXHRcdGlmICggdHdlZW4gKSB7XG5cdFx0XHR0d2Vlbi51bml0ID0gdW5pdDtcblx0XHRcdHR3ZWVuLnN0YXJ0ID0gaW5pdGlhbEluVW5pdDtcblx0XHRcdHR3ZWVuLmVuZCA9IGFkanVzdGVkO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gYWRqdXN0ZWQ7XG59XG5cblxudmFyIGRlZmF1bHREaXNwbGF5TWFwID0ge307XG5cbmZ1bmN0aW9uIGdldERlZmF1bHREaXNwbGF5KCBlbGVtICkge1xuXHR2YXIgdGVtcCxcblx0XHRkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQsXG5cdFx0bm9kZU5hbWUgPSBlbGVtLm5vZGVOYW1lLFxuXHRcdGRpc3BsYXkgPSBkZWZhdWx0RGlzcGxheU1hcFsgbm9kZU5hbWUgXTtcblxuXHRpZiAoIGRpc3BsYXkgKSB7XG5cdFx0cmV0dXJuIGRpc3BsYXk7XG5cdH1cblxuXHR0ZW1wID0gZG9jLmJvZHkuYXBwZW5kQ2hpbGQoIGRvYy5jcmVhdGVFbGVtZW50KCBub2RlTmFtZSApICk7XG5cdGRpc3BsYXkgPSBqUXVlcnkuY3NzKCB0ZW1wLCBcImRpc3BsYXlcIiApO1xuXG5cdHRlbXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdGVtcCApO1xuXG5cdGlmICggZGlzcGxheSA9PT0gXCJub25lXCIgKSB7XG5cdFx0ZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0fVxuXHRkZWZhdWx0RGlzcGxheU1hcFsgbm9kZU5hbWUgXSA9IGRpc3BsYXk7XG5cblx0cmV0dXJuIGRpc3BsYXk7XG59XG5cbmZ1bmN0aW9uIHNob3dIaWRlKCBlbGVtZW50cywgc2hvdyApIHtcblx0dmFyIGRpc3BsYXksIGVsZW0sXG5cdFx0dmFsdWVzID0gW10sXG5cdFx0aW5kZXggPSAwLFxuXHRcdGxlbmd0aCA9IGVsZW1lbnRzLmxlbmd0aDtcblxuXHQvLyBEZXRlcm1pbmUgbmV3IGRpc3BsYXkgdmFsdWUgZm9yIGVsZW1lbnRzIHRoYXQgbmVlZCB0byBjaGFuZ2Vcblx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRlbGVtID0gZWxlbWVudHNbIGluZGV4IF07XG5cdFx0aWYgKCAhZWxlbS5zdHlsZSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGRpc3BsYXkgPSBlbGVtLnN0eWxlLmRpc3BsYXk7XG5cdFx0aWYgKCBzaG93ICkge1xuXG5cdFx0XHQvLyBTaW5jZSB3ZSBmb3JjZSB2aXNpYmlsaXR5IHVwb24gY2FzY2FkZS1oaWRkZW4gZWxlbWVudHMsIGFuIGltbWVkaWF0ZSAoYW5kIHNsb3cpXG5cdFx0XHQvLyBjaGVjayBpcyByZXF1aXJlZCBpbiB0aGlzIGZpcnN0IGxvb3AgdW5sZXNzIHdlIGhhdmUgYSBub25lbXB0eSBkaXNwbGF5IHZhbHVlIChlaXRoZXJcblx0XHRcdC8vIGlubGluZSBvciBhYm91dC10by1iZS1yZXN0b3JlZClcblx0XHRcdGlmICggZGlzcGxheSA9PT0gXCJub25lXCIgKSB7XG5cdFx0XHRcdHZhbHVlc1sgaW5kZXggXSA9IGRhdGFQcml2LmdldCggZWxlbSwgXCJkaXNwbGF5XCIgKSB8fCBudWxsO1xuXHRcdFx0XHRpZiAoICF2YWx1ZXNbIGluZGV4IF0gKSB7XG5cdFx0XHRcdFx0ZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCBlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwiXCIgJiYgaXNIaWRkZW5XaXRoaW5UcmVlKCBlbGVtICkgKSB7XG5cdFx0XHRcdHZhbHVlc1sgaW5kZXggXSA9IGdldERlZmF1bHREaXNwbGF5KCBlbGVtICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICggZGlzcGxheSAhPT0gXCJub25lXCIgKSB7XG5cdFx0XHRcdHZhbHVlc1sgaW5kZXggXSA9IFwibm9uZVwiO1xuXG5cdFx0XHRcdC8vIFJlbWVtYmVyIHdoYXQgd2UncmUgb3ZlcndyaXRpbmdcblx0XHRcdFx0ZGF0YVByaXYuc2V0KCBlbGVtLCBcImRpc3BsYXlcIiwgZGlzcGxheSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFNldCB0aGUgZGlzcGxheSBvZiB0aGUgZWxlbWVudHMgaW4gYSBzZWNvbmQgbG9vcCB0byBhdm9pZCBjb25zdGFudCByZWZsb3dcblx0Zm9yICggaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRpZiAoIHZhbHVlc1sgaW5kZXggXSAhPSBudWxsICkge1xuXHRcdFx0ZWxlbWVudHNbIGluZGV4IF0uc3R5bGUuZGlzcGxheSA9IHZhbHVlc1sgaW5kZXggXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWxlbWVudHM7XG59XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0c2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHNob3dIaWRlKCB0aGlzLCB0cnVlICk7XG5cdH0sXG5cdGhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzaG93SGlkZSggdGhpcyApO1xuXHR9LFxuXHR0b2dnbGU6IGZ1bmN0aW9uKCBzdGF0ZSApIHtcblx0XHRpZiAoIHR5cGVvZiBzdGF0ZSA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGUgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCBpc0hpZGRlbldpdGhpblRyZWUoIHRoaXMgKSApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuc2hvdygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufSApO1xudmFyIHJjaGVja2FibGVUeXBlID0gKCAvXig/OmNoZWNrYm94fHJhZGlvKSQvaSApO1xuXG52YXIgcnRhZ05hbWUgPSAoIC88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKikvaSApO1xuXG52YXIgcnNjcmlwdFR5cGUgPSAoIC9eJHxebW9kdWxlJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2kgKTtcblxuXG5cbiggZnVuY3Rpb24oKSB7XG5cdHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcblx0XHRkaXYgPSBmcmFnbWVudC5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApICksXG5cdFx0aW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImlucHV0XCIgKTtcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCAtIDQuMyBvbmx5XG5cdC8vIENoZWNrIHN0YXRlIGxvc3QgaWYgdGhlIG5hbWUgaXMgc2V0ICh0cmFjLTExMjE3KVxuXHQvLyBTdXBwb3J0OiBXaW5kb3dzIFdlYiBBcHBzIChXV0EpXG5cdC8vIGBuYW1lYCBhbmQgYHR5cGVgIG11c3QgdXNlIC5zZXRBdHRyaWJ1dGUgZm9yIFdXQSAodHJhYy0xNDkwMSlcblx0aW5wdXQuc2V0QXR0cmlidXRlKCBcInR5cGVcIiwgXCJyYWRpb1wiICk7XG5cdGlucHV0LnNldEF0dHJpYnV0ZSggXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiICk7XG5cdGlucHV0LnNldEF0dHJpYnV0ZSggXCJuYW1lXCIsIFwidFwiICk7XG5cblx0ZGl2LmFwcGVuZENoaWxkKCBpbnB1dCApO1xuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjEgb25seVxuXHQvLyBPbGRlciBXZWJLaXQgZG9lc24ndCBjbG9uZSBjaGVja2VkIHN0YXRlIGNvcnJlY3RseSBpbiBmcmFnbWVudHNcblx0c3VwcG9ydC5jaGVja0Nsb25lID0gZGl2LmNsb25lTm9kZSggdHJ1ZSApLmNsb25lTm9kZSggdHJ1ZSApLmxhc3RDaGlsZC5jaGVja2VkO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHQvLyBNYWtlIHN1cmUgdGV4dGFyZWEgKGFuZCBjaGVja2JveCkgZGVmYXVsdFZhbHVlIGlzIHByb3Blcmx5IGNsb25lZFxuXHRkaXYuaW5uZXJIVE1MID0gXCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCI7XG5cdHN1cHBvcnQubm9DbG9uZUNoZWNrZWQgPSAhIWRpdi5jbG9uZU5vZGUoIHRydWUgKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdC8vIElFIDw9OSByZXBsYWNlcyA8b3B0aW9uPiB0YWdzIHdpdGggdGhlaXIgY29udGVudHMgd2hlbiBpbnNlcnRlZCBvdXRzaWRlIG9mXG5cdC8vIHRoZSBzZWxlY3QgZWxlbWVudC5cblx0ZGl2LmlubmVySFRNTCA9IFwiPG9wdGlvbj48L29wdGlvbj5cIjtcblx0c3VwcG9ydC5vcHRpb24gPSAhIWRpdi5sYXN0Q2hpbGQ7XG59ICkoKTtcblxuXG4vLyBXZSBoYXZlIHRvIGNsb3NlIHRoZXNlIHRhZ3MgdG8gc3VwcG9ydCBYSFRNTCAodHJhYy0xMzIwMClcbnZhciB3cmFwTWFwID0ge1xuXG5cdC8vIFhIVE1MIHBhcnNlcnMgZG8gbm90IG1hZ2ljYWxseSBpbnNlcnQgZWxlbWVudHMgaW4gdGhlXG5cdC8vIHNhbWUgd2F5IHRoYXQgdGFnIHNvdXAgcGFyc2VycyBkby4gU28gd2UgY2Fubm90IHNob3J0ZW5cblx0Ly8gdGhpcyBieSBvbWl0dGluZyA8dGJvZHk+IG9yIG90aGVyIHJlcXVpcmVkIGVsZW1lbnRzLlxuXHR0aGVhZDogWyAxLCBcIjx0YWJsZT5cIiwgXCI8L3RhYmxlPlwiIF0sXG5cdGNvbDogWyAyLCBcIjx0YWJsZT48Y29sZ3JvdXA+XCIsIFwiPC9jb2xncm91cD48L3RhYmxlPlwiIF0sXG5cdHRyOiBbIDIsIFwiPHRhYmxlPjx0Ym9keT5cIiwgXCI8L3Rib2R5PjwvdGFibGU+XCIgXSxcblx0dGQ6IFsgMywgXCI8dGFibGU+PHRib2R5Pjx0cj5cIiwgXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIiBdLFxuXG5cdF9kZWZhdWx0OiBbIDAsIFwiXCIsIFwiXCIgXVxufTtcblxud3JhcE1hcC50Ym9keSA9IHdyYXBNYXAudGZvb3QgPSB3cmFwTWFwLmNvbGdyb3VwID0gd3JhcE1hcC5jYXB0aW9uID0gd3JhcE1hcC50aGVhZDtcbndyYXBNYXAudGggPSB3cmFwTWFwLnRkO1xuXG4vLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuaWYgKCAhc3VwcG9ydC5vcHRpb24gKSB7XG5cdHdyYXBNYXAub3B0Z3JvdXAgPSB3cmFwTWFwLm9wdGlvbiA9IFsgMSwgXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsIFwiPC9zZWxlY3Q+XCIgXTtcbn1cblxuXG5mdW5jdGlvbiBnZXRBbGwoIGNvbnRleHQsIHRhZyApIHtcblxuXHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG5cdC8vIFVzZSB0eXBlb2YgdG8gYXZvaWQgemVyby1hcmd1bWVudCBtZXRob2QgaW52b2NhdGlvbiBvbiBob3N0IG9iamVjdHMgKHRyYWMtMTUxNTEpXG5cdHZhciByZXQ7XG5cblx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRyZXQgPSBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCB0YWcgfHwgXCIqXCIgKTtcblxuXHR9IGVsc2UgaWYgKCB0eXBlb2YgY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdHJldCA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCggdGFnIHx8IFwiKlwiICk7XG5cblx0fSBlbHNlIHtcblx0XHRyZXQgPSBbXTtcblx0fVxuXG5cdGlmICggdGFnID09PSB1bmRlZmluZWQgfHwgdGFnICYmIG5vZGVOYW1lKCBjb250ZXh0LCB0YWcgKSApIHtcblx0XHRyZXR1cm4galF1ZXJ5Lm1lcmdlKCBbIGNvbnRleHQgXSwgcmV0ICk7XG5cdH1cblxuXHRyZXR1cm4gcmV0O1xufVxuXG5cbi8vIE1hcmsgc2NyaXB0cyBhcyBoYXZpbmcgYWxyZWFkeSBiZWVuIGV2YWx1YXRlZFxuZnVuY3Rpb24gc2V0R2xvYmFsRXZhbCggZWxlbXMsIHJlZkVsZW1lbnRzICkge1xuXHR2YXIgaSA9IDAsXG5cdFx0bCA9IGVsZW1zLmxlbmd0aDtcblxuXHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0ZGF0YVByaXYuc2V0KFxuXHRcdFx0ZWxlbXNbIGkgXSxcblx0XHRcdFwiZ2xvYmFsRXZhbFwiLFxuXHRcdFx0IXJlZkVsZW1lbnRzIHx8IGRhdGFQcml2LmdldCggcmVmRWxlbWVudHNbIGkgXSwgXCJnbG9iYWxFdmFsXCIgKVxuXHRcdCk7XG5cdH1cbn1cblxuXG52YXIgcmh0bWwgPSAvPHwmIz9cXHcrOy87XG5cbmZ1bmN0aW9uIGJ1aWxkRnJhZ21lbnQoIGVsZW1zLCBjb250ZXh0LCBzY3JpcHRzLCBzZWxlY3Rpb24sIGlnbm9yZWQgKSB7XG5cdHZhciBlbGVtLCB0bXAsIHRhZywgd3JhcCwgYXR0YWNoZWQsIGosXG5cdFx0ZnJhZ21lbnQgPSBjb250ZXh0LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcblx0XHRub2RlcyA9IFtdLFxuXHRcdGkgPSAwLFxuXHRcdGwgPSBlbGVtcy5sZW5ndGg7XG5cblx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdGVsZW0gPSBlbGVtc1sgaSBdO1xuXG5cdFx0aWYgKCBlbGVtIHx8IGVsZW0gPT09IDAgKSB7XG5cblx0XHRcdC8vIEFkZCBub2RlcyBkaXJlY3RseVxuXHRcdFx0aWYgKCB0b1R5cGUoIGVsZW0gKSA9PT0gXCJvYmplY3RcIiApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHRcdFx0Ly8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIG5vZGVzLCBlbGVtLm5vZGVUeXBlID8gWyBlbGVtIF0gOiBlbGVtICk7XG5cblx0XHRcdC8vIENvbnZlcnQgbm9uLWh0bWwgaW50byBhIHRleHQgbm9kZVxuXHRcdFx0fSBlbHNlIGlmICggIXJodG1sLnRlc3QoIGVsZW0gKSApIHtcblx0XHRcdFx0bm9kZXMucHVzaCggY29udGV4dC5jcmVhdGVUZXh0Tm9kZSggZWxlbSApICk7XG5cblx0XHRcdC8vIENvbnZlcnQgaHRtbCBpbnRvIERPTSBub2Rlc1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG1wID0gdG1wIHx8IGZyYWdtZW50LmFwcGVuZENoaWxkKCBjb250ZXh0LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSApO1xuXG5cdFx0XHRcdC8vIERlc2VyaWFsaXplIGEgc3RhbmRhcmQgcmVwcmVzZW50YXRpb25cblx0XHRcdFx0dGFnID0gKCBydGFnTmFtZS5leGVjKCBlbGVtICkgfHwgWyBcIlwiLCBcIlwiIF0gKVsgMSBdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdHdyYXAgPSB3cmFwTWFwWyB0YWcgXSB8fCB3cmFwTWFwLl9kZWZhdWx0O1xuXHRcdFx0XHR0bXAuaW5uZXJIVE1MID0gd3JhcFsgMSBdICsgalF1ZXJ5Lmh0bWxQcmVmaWx0ZXIoIGVsZW0gKSArIHdyYXBbIDIgXTtcblxuXHRcdFx0XHQvLyBEZXNjZW5kIHRocm91Z2ggd3JhcHBlcnMgdG8gdGhlIHJpZ2h0IGNvbnRlbnRcblx0XHRcdFx0aiA9IHdyYXBbIDAgXTtcblx0XHRcdFx0d2hpbGUgKCBqLS0gKSB7XG5cdFx0XHRcdFx0dG1wID0gdG1wLmxhc3RDaGlsZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuXHRcdFx0XHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0XHRcdGpRdWVyeS5tZXJnZSggbm9kZXMsIHRtcC5jaGlsZE5vZGVzICk7XG5cblx0XHRcdFx0Ly8gUmVtZW1iZXIgdGhlIHRvcC1sZXZlbCBjb250YWluZXJcblx0XHRcdFx0dG1wID0gZnJhZ21lbnQuZmlyc3RDaGlsZDtcblxuXHRcdFx0XHQvLyBFbnN1cmUgdGhlIGNyZWF0ZWQgbm9kZXMgYXJlIG9ycGhhbmVkICh0cmFjLTEyMzkyKVxuXHRcdFx0XHR0bXAudGV4dENvbnRlbnQgPSBcIlwiO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJlbW92ZSB3cmFwcGVyIGZyb20gZnJhZ21lbnRcblx0ZnJhZ21lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG5cdGkgPSAwO1xuXHR3aGlsZSAoICggZWxlbSA9IG5vZGVzWyBpKysgXSApICkge1xuXG5cdFx0Ly8gU2tpcCBlbGVtZW50cyBhbHJlYWR5IGluIHRoZSBjb250ZXh0IGNvbGxlY3Rpb24gKHRyYWMtNDA4Nylcblx0XHRpZiAoIHNlbGVjdGlvbiAmJiBqUXVlcnkuaW5BcnJheSggZWxlbSwgc2VsZWN0aW9uICkgPiAtMSApIHtcblx0XHRcdGlmICggaWdub3JlZCApIHtcblx0XHRcdFx0aWdub3JlZC5wdXNoKCBlbGVtICk7XG5cdFx0XHR9XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRhdHRhY2hlZCA9IGlzQXR0YWNoZWQoIGVsZW0gKTtcblxuXHRcdC8vIEFwcGVuZCB0byBmcmFnbWVudFxuXHRcdHRtcCA9IGdldEFsbCggZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGVsZW0gKSwgXCJzY3JpcHRcIiApO1xuXG5cdFx0Ly8gUHJlc2VydmUgc2NyaXB0IGV2YWx1YXRpb24gaGlzdG9yeVxuXHRcdGlmICggYXR0YWNoZWQgKSB7XG5cdFx0XHRzZXRHbG9iYWxFdmFsKCB0bXAgKTtcblx0XHR9XG5cblx0XHQvLyBDYXB0dXJlIGV4ZWN1dGFibGVzXG5cdFx0aWYgKCBzY3JpcHRzICkge1xuXHRcdFx0aiA9IDA7XG5cdFx0XHR3aGlsZSAoICggZWxlbSA9IHRtcFsgaisrIF0gKSApIHtcblx0XHRcdFx0aWYgKCByc2NyaXB0VHlwZS50ZXN0KCBlbGVtLnR5cGUgfHwgXCJcIiApICkge1xuXHRcdFx0XHRcdHNjcmlwdHMucHVzaCggZWxlbSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZyYWdtZW50O1xufVxuXG5cbnZhciBydHlwZW5hbWVzcGFjZSA9IC9eKFteLl0qKSg/OlxcLiguKyl8KS87XG5cbmZ1bmN0aW9uIHJldHVyblRydWUoKSB7XG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZXR1cm5GYWxzZSgpIHtcblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBvbiggZWxlbSwgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiwgb25lICkge1xuXHR2YXIgb3JpZ0ZuLCB0eXBlO1xuXG5cdC8vIFR5cGVzIGNhbiBiZSBhIG1hcCBvZiB0eXBlcy9oYW5kbGVyc1xuXHRpZiAoIHR5cGVvZiB0eXBlcyA9PT0gXCJvYmplY3RcIiApIHtcblxuXHRcdC8vICggdHlwZXMtT2JqZWN0LCBzZWxlY3RvciwgZGF0YSApXG5cdFx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIgKSB7XG5cblx0XHRcdC8vICggdHlwZXMtT2JqZWN0LCBkYXRhIClcblx0XHRcdGRhdGEgPSBkYXRhIHx8IHNlbGVjdG9yO1xuXHRcdFx0c2VsZWN0b3IgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdGZvciAoIHR5cGUgaW4gdHlwZXMgKSB7XG5cdFx0XHRvbiggZWxlbSwgdHlwZSwgc2VsZWN0b3IsIGRhdGEsIHR5cGVzWyB0eXBlIF0sIG9uZSApO1xuXHRcdH1cblx0XHRyZXR1cm4gZWxlbTtcblx0fVxuXG5cdGlmICggZGF0YSA9PSBudWxsICYmIGZuID09IG51bGwgKSB7XG5cblx0XHQvLyAoIHR5cGVzLCBmbiApXG5cdFx0Zm4gPSBzZWxlY3Rvcjtcblx0XHRkYXRhID0gc2VsZWN0b3IgPSB1bmRlZmluZWQ7XG5cdH0gZWxzZSBpZiAoIGZuID09IG51bGwgKSB7XG5cdFx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgKSB7XG5cblx0XHRcdC8vICggdHlwZXMsIHNlbGVjdG9yLCBmbiApXG5cdFx0XHRmbiA9IGRhdGE7XG5cdFx0XHRkYXRhID0gdW5kZWZpbmVkO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vICggdHlwZXMsIGRhdGEsIGZuIClcblx0XHRcdGZuID0gZGF0YTtcblx0XHRcdGRhdGEgPSBzZWxlY3Rvcjtcblx0XHRcdHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0fVxuXHRpZiAoIGZuID09PSBmYWxzZSApIHtcblx0XHRmbiA9IHJldHVybkZhbHNlO1xuXHR9IGVsc2UgaWYgKCAhZm4gKSB7XG5cdFx0cmV0dXJuIGVsZW07XG5cdH1cblxuXHRpZiAoIG9uZSA9PT0gMSApIHtcblx0XHRvcmlnRm4gPSBmbjtcblx0XHRmbiA9IGZ1bmN0aW9uKCBldmVudCApIHtcblxuXHRcdFx0Ly8gQ2FuIHVzZSBhbiBlbXB0eSBzZXQsIHNpbmNlIGV2ZW50IGNvbnRhaW5zIHRoZSBpbmZvXG5cdFx0XHRqUXVlcnkoKS5vZmYoIGV2ZW50ICk7XG5cdFx0XHRyZXR1cm4gb3JpZ0ZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHR9O1xuXG5cdFx0Ly8gVXNlIHNhbWUgZ3VpZCBzbyBjYWxsZXIgY2FuIHJlbW92ZSB1c2luZyBvcmlnRm5cblx0XHRmbi5ndWlkID0gb3JpZ0ZuLmd1aWQgfHwgKCBvcmlnRm4uZ3VpZCA9IGpRdWVyeS5ndWlkKysgKTtcblx0fVxuXHRyZXR1cm4gZWxlbS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRqUXVlcnkuZXZlbnQuYWRkKCB0aGlzLCB0eXBlcywgZm4sIGRhdGEsIHNlbGVjdG9yICk7XG5cdH0gKTtcbn1cblxuLypcbiAqIEhlbHBlciBmdW5jdGlvbnMgZm9yIG1hbmFnaW5nIGV2ZW50cyAtLSBub3QgcGFydCBvZiB0aGUgcHVibGljIGludGVyZmFjZS5cbiAqIFByb3BzIHRvIERlYW4gRWR3YXJkcycgYWRkRXZlbnQgbGlicmFyeSBmb3IgbWFueSBvZiB0aGUgaWRlYXMuXG4gKi9cbmpRdWVyeS5ldmVudCA9IHtcblxuXHRnbG9iYWw6IHt9LFxuXG5cdGFkZDogZnVuY3Rpb24oIGVsZW0sIHR5cGVzLCBoYW5kbGVyLCBkYXRhLCBzZWxlY3RvciApIHtcblxuXHRcdHZhciBoYW5kbGVPYmpJbiwgZXZlbnRIYW5kbGUsIHRtcCxcblx0XHRcdGV2ZW50cywgdCwgaGFuZGxlT2JqLFxuXHRcdFx0c3BlY2lhbCwgaGFuZGxlcnMsIHR5cGUsIG5hbWVzcGFjZXMsIG9yaWdUeXBlLFxuXHRcdFx0ZWxlbURhdGEgPSBkYXRhUHJpdi5nZXQoIGVsZW0gKTtcblxuXHRcdC8vIE9ubHkgYXR0YWNoIGV2ZW50cyB0byBvYmplY3RzIHRoYXQgYWNjZXB0IGRhdGFcblx0XHRpZiAoICFhY2NlcHREYXRhKCBlbGVtICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsbGVyIGNhbiBwYXNzIGluIGFuIG9iamVjdCBvZiBjdXN0b20gZGF0YSBpbiBsaWV1IG9mIHRoZSBoYW5kbGVyXG5cdFx0aWYgKCBoYW5kbGVyLmhhbmRsZXIgKSB7XG5cdFx0XHRoYW5kbGVPYmpJbiA9IGhhbmRsZXI7XG5cdFx0XHRoYW5kbGVyID0gaGFuZGxlT2JqSW4uaGFuZGxlcjtcblx0XHRcdHNlbGVjdG9yID0gaGFuZGxlT2JqSW4uc2VsZWN0b3I7XG5cdFx0fVxuXG5cdFx0Ly8gRW5zdXJlIHRoYXQgaW52YWxpZCBzZWxlY3RvcnMgdGhyb3cgZXhjZXB0aW9ucyBhdCBhdHRhY2ggdGltZVxuXHRcdC8vIEV2YWx1YXRlIGFnYWluc3QgZG9jdW1lbnRFbGVtZW50IGluIGNhc2UgZWxlbSBpcyBhIG5vbi1lbGVtZW50IG5vZGUgKGUuZy4sIGRvY3VtZW50KVxuXHRcdGlmICggc2VsZWN0b3IgKSB7XG5cdFx0XHRqUXVlcnkuZmluZC5tYXRjaGVzU2VsZWN0b3IoIGRvY3VtZW50RWxlbWVudCwgc2VsZWN0b3IgKTtcblx0XHR9XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhhdCB0aGUgaGFuZGxlciBoYXMgYSB1bmlxdWUgSUQsIHVzZWQgdG8gZmluZC9yZW1vdmUgaXQgbGF0ZXJcblx0XHRpZiAoICFoYW5kbGVyLmd1aWQgKSB7XG5cdFx0XHRoYW5kbGVyLmd1aWQgPSBqUXVlcnkuZ3VpZCsrO1xuXHRcdH1cblxuXHRcdC8vIEluaXQgdGhlIGVsZW1lbnQncyBldmVudCBzdHJ1Y3R1cmUgYW5kIG1haW4gaGFuZGxlciwgaWYgdGhpcyBpcyB0aGUgZmlyc3Rcblx0XHRpZiAoICEoIGV2ZW50cyA9IGVsZW1EYXRhLmV2ZW50cyApICkge1xuXHRcdFx0ZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzID0gT2JqZWN0LmNyZWF0ZSggbnVsbCApO1xuXHRcdH1cblx0XHRpZiAoICEoIGV2ZW50SGFuZGxlID0gZWxlbURhdGEuaGFuZGxlICkgKSB7XG5cdFx0XHRldmVudEhhbmRsZSA9IGVsZW1EYXRhLmhhbmRsZSA9IGZ1bmN0aW9uKCBlICkge1xuXG5cdFx0XHRcdC8vIERpc2NhcmQgdGhlIHNlY29uZCBldmVudCBvZiBhIGpRdWVyeS5ldmVudC50cmlnZ2VyKCkgYW5kXG5cdFx0XHRcdC8vIHdoZW4gYW4gZXZlbnQgaXMgY2FsbGVkIGFmdGVyIGEgcGFnZSBoYXMgdW5sb2FkZWRcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiBqUXVlcnkgIT09IFwidW5kZWZpbmVkXCIgJiYgalF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCAhPT0gZS50eXBlID9cblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQuZGlzcGF0Y2guYXBwbHkoIGVsZW0sIGFyZ3VtZW50cyApIDogdW5kZWZpbmVkO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyBIYW5kbGUgbXVsdGlwbGUgZXZlbnRzIHNlcGFyYXRlZCBieSBhIHNwYWNlXG5cdFx0dHlwZXMgPSAoIHR5cGVzIHx8IFwiXCIgKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFsgXCJcIiBdO1xuXHRcdHQgPSB0eXBlcy5sZW5ndGg7XG5cdFx0d2hpbGUgKCB0LS0gKSB7XG5cdFx0XHR0bXAgPSBydHlwZW5hbWVzcGFjZS5leGVjKCB0eXBlc1sgdCBdICkgfHwgW107XG5cdFx0XHR0eXBlID0gb3JpZ1R5cGUgPSB0bXBbIDEgXTtcblx0XHRcdG5hbWVzcGFjZXMgPSAoIHRtcFsgMiBdIHx8IFwiXCIgKS5zcGxpdCggXCIuXCIgKS5zb3J0KCk7XG5cblx0XHRcdC8vIFRoZXJlICptdXN0KiBiZSBhIHR5cGUsIG5vIGF0dGFjaGluZyBuYW1lc3BhY2Utb25seSBoYW5kbGVyc1xuXHRcdFx0aWYgKCAhdHlwZSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIGV2ZW50IGNoYW5nZXMgaXRzIHR5cGUsIHVzZSB0aGUgc3BlY2lhbCBldmVudCBoYW5kbGVycyBmb3IgdGhlIGNoYW5nZWQgdHlwZVxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XG5cblx0XHRcdC8vIElmIHNlbGVjdG9yIGRlZmluZWQsIGRldGVybWluZSBzcGVjaWFsIGV2ZW50IGFwaSB0eXBlLCBvdGhlcndpc2UgZ2l2ZW4gdHlwZVxuXHRcdFx0dHlwZSA9ICggc2VsZWN0b3IgPyBzcGVjaWFsLmRlbGVnYXRlVHlwZSA6IHNwZWNpYWwuYmluZFR5cGUgKSB8fCB0eXBlO1xuXG5cdFx0XHQvLyBVcGRhdGUgc3BlY2lhbCBiYXNlZCBvbiBuZXdseSByZXNldCB0eXBlXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblxuXHRcdFx0Ly8gaGFuZGxlT2JqIGlzIHBhc3NlZCB0byBhbGwgZXZlbnQgaGFuZGxlcnNcblx0XHRcdGhhbmRsZU9iaiA9IGpRdWVyeS5leHRlbmQoIHtcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0b3JpZ1R5cGU6IG9yaWdUeXBlLFxuXHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHRoYW5kbGVyOiBoYW5kbGVyLFxuXHRcdFx0XHRndWlkOiBoYW5kbGVyLmd1aWQsXG5cdFx0XHRcdHNlbGVjdG9yOiBzZWxlY3Rvcixcblx0XHRcdFx0bmVlZHNDb250ZXh0OiBzZWxlY3RvciAmJiBqUXVlcnkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3IgKSxcblx0XHRcdFx0bmFtZXNwYWNlOiBuYW1lc3BhY2VzLmpvaW4oIFwiLlwiIClcblx0XHRcdH0sIGhhbmRsZU9iakluICk7XG5cblx0XHRcdC8vIEluaXQgdGhlIGV2ZW50IGhhbmRsZXIgcXVldWUgaWYgd2UncmUgdGhlIGZpcnN0XG5cdFx0XHRpZiAoICEoIGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0gKSApIHtcblx0XHRcdFx0aGFuZGxlcnMgPSBldmVudHNbIHR5cGUgXSA9IFtdO1xuXHRcdFx0XHRoYW5kbGVycy5kZWxlZ2F0ZUNvdW50ID0gMDtcblxuXHRcdFx0XHQvLyBPbmx5IHVzZSBhZGRFdmVudExpc3RlbmVyIGlmIHRoZSBzcGVjaWFsIGV2ZW50cyBoYW5kbGVyIHJldHVybnMgZmFsc2Vcblx0XHRcdFx0aWYgKCAhc3BlY2lhbC5zZXR1cCB8fFxuXHRcdFx0XHRcdHNwZWNpYWwuc2V0dXAuY2FsbCggZWxlbSwgZGF0YSwgbmFtZXNwYWNlcywgZXZlbnRIYW5kbGUgKSA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0XHRpZiAoIGVsZW0uYWRkRXZlbnRMaXN0ZW5lciApIHtcblx0XHRcdFx0XHRcdGVsZW0uYWRkRXZlbnRMaXN0ZW5lciggdHlwZSwgZXZlbnRIYW5kbGUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzcGVjaWFsLmFkZCApIHtcblx0XHRcdFx0c3BlY2lhbC5hZGQuY2FsbCggZWxlbSwgaGFuZGxlT2JqICk7XG5cblx0XHRcdFx0aWYgKCAhaGFuZGxlT2JqLmhhbmRsZXIuZ3VpZCApIHtcblx0XHRcdFx0XHRoYW5kbGVPYmouaGFuZGxlci5ndWlkID0gaGFuZGxlci5ndWlkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCB0byB0aGUgZWxlbWVudCdzIGhhbmRsZXIgbGlzdCwgZGVsZWdhdGVzIGluIGZyb250XG5cdFx0XHRpZiAoIHNlbGVjdG9yICkge1xuXHRcdFx0XHRoYW5kbGVycy5zcGxpY2UoIGhhbmRsZXJzLmRlbGVnYXRlQ291bnQrKywgMCwgaGFuZGxlT2JqICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoYW5kbGVycy5wdXNoKCBoYW5kbGVPYmogKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gS2VlcCB0cmFjayBvZiB3aGljaCBldmVudHMgaGF2ZSBldmVyIGJlZW4gdXNlZCwgZm9yIGV2ZW50IG9wdGltaXphdGlvblxuXHRcdFx0alF1ZXJ5LmV2ZW50Lmdsb2JhbFsgdHlwZSBdID0gdHJ1ZTtcblx0XHR9XG5cblx0fSxcblxuXHQvLyBEZXRhY2ggYW4gZXZlbnQgb3Igc2V0IG9mIGV2ZW50cyBmcm9tIGFuIGVsZW1lbnRcblx0cmVtb3ZlOiBmdW5jdGlvbiggZWxlbSwgdHlwZXMsIGhhbmRsZXIsIHNlbGVjdG9yLCBtYXBwZWRUeXBlcyApIHtcblxuXHRcdHZhciBqLCBvcmlnQ291bnQsIHRtcCxcblx0XHRcdGV2ZW50cywgdCwgaGFuZGxlT2JqLFxuXHRcdFx0c3BlY2lhbCwgaGFuZGxlcnMsIHR5cGUsIG5hbWVzcGFjZXMsIG9yaWdUeXBlLFxuXHRcdFx0ZWxlbURhdGEgPSBkYXRhUHJpdi5oYXNEYXRhKCBlbGVtICkgJiYgZGF0YVByaXYuZ2V0KCBlbGVtICk7XG5cblx0XHRpZiAoICFlbGVtRGF0YSB8fCAhKCBldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBPbmNlIGZvciBlYWNoIHR5cGUubmFtZXNwYWNlIGluIHR5cGVzOyB0eXBlIG1heSBiZSBvbWl0dGVkXG5cdFx0dHlwZXMgPSAoIHR5cGVzIHx8IFwiXCIgKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFsgXCJcIiBdO1xuXHRcdHQgPSB0eXBlcy5sZW5ndGg7XG5cdFx0d2hpbGUgKCB0LS0gKSB7XG5cdFx0XHR0bXAgPSBydHlwZW5hbWVzcGFjZS5leGVjKCB0eXBlc1sgdCBdICkgfHwgW107XG5cdFx0XHR0eXBlID0gb3JpZ1R5cGUgPSB0bXBbIDEgXTtcblx0XHRcdG5hbWVzcGFjZXMgPSAoIHRtcFsgMiBdIHx8IFwiXCIgKS5zcGxpdCggXCIuXCIgKS5zb3J0KCk7XG5cblx0XHRcdC8vIFVuYmluZCBhbGwgZXZlbnRzIChvbiB0aGlzIG5hbWVzcGFjZSwgaWYgcHJvdmlkZWQpIGZvciB0aGUgZWxlbWVudFxuXHRcdFx0aWYgKCAhdHlwZSApIHtcblx0XHRcdFx0Zm9yICggdHlwZSBpbiBldmVudHMgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnJlbW92ZSggZWxlbSwgdHlwZSArIHR5cGVzWyB0IF0sIGhhbmRsZXIsIHNlbGVjdG9yLCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9O1xuXHRcdFx0dHlwZSA9ICggc2VsZWN0b3IgPyBzcGVjaWFsLmRlbGVnYXRlVHlwZSA6IHNwZWNpYWwuYmluZFR5cGUgKSB8fCB0eXBlO1xuXHRcdFx0aGFuZGxlcnMgPSBldmVudHNbIHR5cGUgXSB8fCBbXTtcblx0XHRcdHRtcCA9IHRtcFsgMiBdICYmXG5cdFx0XHRcdG5ldyBSZWdFeHAoIFwiKF58XFxcXC4pXCIgKyBuYW1lc3BhY2VzLmpvaW4oIFwiXFxcXC4oPzouKlxcXFwufClcIiApICsgXCIoXFxcXC58JClcIiApO1xuXG5cdFx0XHQvLyBSZW1vdmUgbWF0Y2hpbmcgZXZlbnRzXG5cdFx0XHRvcmlnQ291bnQgPSBqID0gaGFuZGxlcnMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKCBqLS0gKSB7XG5cdFx0XHRcdGhhbmRsZU9iaiA9IGhhbmRsZXJzWyBqIF07XG5cblx0XHRcdFx0aWYgKCAoIG1hcHBlZFR5cGVzIHx8IG9yaWdUeXBlID09PSBoYW5kbGVPYmoub3JpZ1R5cGUgKSAmJlxuXHRcdFx0XHRcdCggIWhhbmRsZXIgfHwgaGFuZGxlci5ndWlkID09PSBoYW5kbGVPYmouZ3VpZCApICYmXG5cdFx0XHRcdFx0KCAhdG1wIHx8IHRtcC50ZXN0KCBoYW5kbGVPYmoubmFtZXNwYWNlICkgKSAmJlxuXHRcdFx0XHRcdCggIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSBoYW5kbGVPYmouc2VsZWN0b3IgfHxcblx0XHRcdFx0XHRcdHNlbGVjdG9yID09PSBcIioqXCIgJiYgaGFuZGxlT2JqLnNlbGVjdG9yICkgKSB7XG5cdFx0XHRcdFx0aGFuZGxlcnMuc3BsaWNlKCBqLCAxICk7XG5cblx0XHRcdFx0XHRpZiAoIGhhbmRsZU9iai5zZWxlY3RvciApIHtcblx0XHRcdFx0XHRcdGhhbmRsZXJzLmRlbGVnYXRlQ291bnQtLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBzcGVjaWFsLnJlbW92ZSApIHtcblx0XHRcdFx0XHRcdHNwZWNpYWwucmVtb3ZlLmNhbGwoIGVsZW0sIGhhbmRsZU9iaiApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZW1vdmUgZ2VuZXJpYyBldmVudCBoYW5kbGVyIGlmIHdlIHJlbW92ZWQgc29tZXRoaW5nIGFuZCBubyBtb3JlIGhhbmRsZXJzIGV4aXN0XG5cdFx0XHQvLyAoYXZvaWRzIHBvdGVudGlhbCBmb3IgZW5kbGVzcyByZWN1cnNpb24gZHVyaW5nIHJlbW92YWwgb2Ygc3BlY2lhbCBldmVudCBoYW5kbGVycylcblx0XHRcdGlmICggb3JpZ0NvdW50ICYmICFoYW5kbGVycy5sZW5ndGggKSB7XG5cdFx0XHRcdGlmICggIXNwZWNpYWwudGVhcmRvd24gfHxcblx0XHRcdFx0XHRzcGVjaWFsLnRlYXJkb3duLmNhbGwoIGVsZW0sIG5hbWVzcGFjZXMsIGVsZW1EYXRhLmhhbmRsZSApID09PSBmYWxzZSApIHtcblxuXHRcdFx0XHRcdGpRdWVyeS5yZW1vdmVFdmVudCggZWxlbSwgdHlwZSwgZWxlbURhdGEuaGFuZGxlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkZWxldGUgZXZlbnRzWyB0eXBlIF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIGRhdGEgYW5kIHRoZSBleHBhbmRvIGlmIGl0J3Mgbm8gbG9uZ2VyIHVzZWRcblx0XHRpZiAoIGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBldmVudHMgKSApIHtcblx0XHRcdGRhdGFQcml2LnJlbW92ZSggZWxlbSwgXCJoYW5kbGUgZXZlbnRzXCIgKTtcblx0XHR9XG5cdH0sXG5cblx0ZGlzcGF0Y2g6IGZ1bmN0aW9uKCBuYXRpdmVFdmVudCApIHtcblxuXHRcdHZhciBpLCBqLCByZXQsIG1hdGNoZWQsIGhhbmRsZU9iaiwgaGFuZGxlclF1ZXVlLFxuXHRcdFx0YXJncyA9IG5ldyBBcnJheSggYXJndW1lbnRzLmxlbmd0aCApLFxuXG5cdFx0XHQvLyBNYWtlIGEgd3JpdGFibGUgalF1ZXJ5LkV2ZW50IGZyb20gdGhlIG5hdGl2ZSBldmVudCBvYmplY3Rcblx0XHRcdGV2ZW50ID0galF1ZXJ5LmV2ZW50LmZpeCggbmF0aXZlRXZlbnQgKSxcblxuXHRcdFx0aGFuZGxlcnMgPSAoXG5cdFx0XHRcdGRhdGFQcml2LmdldCggdGhpcywgXCJldmVudHNcIiApIHx8IE9iamVjdC5jcmVhdGUoIG51bGwgKVxuXHRcdFx0KVsgZXZlbnQudHlwZSBdIHx8IFtdLFxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyBldmVudC50eXBlIF0gfHwge307XG5cblx0XHQvLyBVc2UgdGhlIGZpeC1lZCBqUXVlcnkuRXZlbnQgcmF0aGVyIHRoYW4gdGhlIChyZWFkLW9ubHkpIG5hdGl2ZSBldmVudFxuXHRcdGFyZ3NbIDAgXSA9IGV2ZW50O1xuXG5cdFx0Zm9yICggaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRhcmdzWyBpIF0gPSBhcmd1bWVudHNbIGkgXTtcblx0XHR9XG5cblx0XHRldmVudC5kZWxlZ2F0ZVRhcmdldCA9IHRoaXM7XG5cblx0XHQvLyBDYWxsIHRoZSBwcmVEaXNwYXRjaCBob29rIGZvciB0aGUgbWFwcGVkIHR5cGUsIGFuZCBsZXQgaXQgYmFpbCBpZiBkZXNpcmVkXG5cdFx0aWYgKCBzcGVjaWFsLnByZURpc3BhdGNoICYmIHNwZWNpYWwucHJlRGlzcGF0Y2guY2FsbCggdGhpcywgZXZlbnQgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZXJtaW5lIGhhbmRsZXJzXG5cdFx0aGFuZGxlclF1ZXVlID0galF1ZXJ5LmV2ZW50LmhhbmRsZXJzLmNhbGwoIHRoaXMsIGV2ZW50LCBoYW5kbGVycyApO1xuXG5cdFx0Ly8gUnVuIGRlbGVnYXRlcyBmaXJzdDsgdGhleSBtYXkgd2FudCB0byBzdG9wIHByb3BhZ2F0aW9uIGJlbmVhdGggdXNcblx0XHRpID0gMDtcblx0XHR3aGlsZSAoICggbWF0Y2hlZCA9IGhhbmRsZXJRdWV1ZVsgaSsrIF0gKSAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblx0XHRcdGV2ZW50LmN1cnJlbnRUYXJnZXQgPSBtYXRjaGVkLmVsZW07XG5cblx0XHRcdGogPSAwO1xuXHRcdFx0d2hpbGUgKCAoIGhhbmRsZU9iaiA9IG1hdGNoZWQuaGFuZGxlcnNbIGorKyBdICkgJiZcblx0XHRcdFx0IWV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGV2ZW50IGlzIG5hbWVzcGFjZWQsIHRoZW4gZWFjaCBoYW5kbGVyIGlzIG9ubHkgaW52b2tlZCBpZiBpdCBpc1xuXHRcdFx0XHQvLyBzcGVjaWFsbHkgdW5pdmVyc2FsIG9yIGl0cyBuYW1lc3BhY2VzIGFyZSBhIHN1cGVyc2V0IG9mIHRoZSBldmVudCdzLlxuXHRcdFx0XHRpZiAoICFldmVudC5ybmFtZXNwYWNlIHx8IGhhbmRsZU9iai5uYW1lc3BhY2UgPT09IGZhbHNlIHx8XG5cdFx0XHRcdFx0ZXZlbnQucm5hbWVzcGFjZS50ZXN0KCBoYW5kbGVPYmoubmFtZXNwYWNlICkgKSB7XG5cblx0XHRcdFx0XHRldmVudC5oYW5kbGVPYmogPSBoYW5kbGVPYmo7XG5cdFx0XHRcdFx0ZXZlbnQuZGF0YSA9IGhhbmRsZU9iai5kYXRhO1xuXG5cdFx0XHRcdFx0cmV0ID0gKCAoIGpRdWVyeS5ldmVudC5zcGVjaWFsWyBoYW5kbGVPYmoub3JpZ1R5cGUgXSB8fCB7fSApLmhhbmRsZSB8fFxuXHRcdFx0XHRcdFx0aGFuZGxlT2JqLmhhbmRsZXIgKS5hcHBseSggbWF0Y2hlZC5lbGVtLCBhcmdzICk7XG5cblx0XHRcdFx0XHRpZiAoIHJldCAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoIGV2ZW50LnJlc3VsdCA9IHJldCApID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsbCB0aGUgcG9zdERpc3BhdGNoIGhvb2sgZm9yIHRoZSBtYXBwZWQgdHlwZVxuXHRcdGlmICggc3BlY2lhbC5wb3N0RGlzcGF0Y2ggKSB7XG5cdFx0XHRzcGVjaWFsLnBvc3REaXNwYXRjaC5jYWxsKCB0aGlzLCBldmVudCApO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmVudC5yZXN1bHQ7XG5cdH0sXG5cblx0aGFuZGxlcnM6IGZ1bmN0aW9uKCBldmVudCwgaGFuZGxlcnMgKSB7XG5cdFx0dmFyIGksIGhhbmRsZU9iaiwgc2VsLCBtYXRjaGVkSGFuZGxlcnMsIG1hdGNoZWRTZWxlY3RvcnMsXG5cdFx0XHRoYW5kbGVyUXVldWUgPSBbXSxcblx0XHRcdGRlbGVnYXRlQ291bnQgPSBoYW5kbGVycy5kZWxlZ2F0ZUNvdW50LFxuXHRcdFx0Y3VyID0gZXZlbnQudGFyZ2V0O1xuXG5cdFx0Ly8gRmluZCBkZWxlZ2F0ZSBoYW5kbGVyc1xuXHRcdGlmICggZGVsZWdhdGVDb3VudCAmJlxuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTlcblx0XHRcdC8vIEJsYWNrLWhvbGUgU1ZHIDx1c2U+IGluc3RhbmNlIHRyZWVzICh0cmFjLTEzMTgwKVxuXHRcdFx0Y3VyLm5vZGVUeXBlICYmXG5cblx0XHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD00MlxuXHRcdFx0Ly8gU3VwcHJlc3Mgc3BlYy12aW9sYXRpbmcgY2xpY2tzIGluZGljYXRpbmcgYSBub24tcHJpbWFyeSBwb2ludGVyIGJ1dHRvbiAodHJhYy0zODYxKVxuXHRcdFx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUV2ZW50cy8jZXZlbnQtdHlwZS1jbGlja1xuXHRcdFx0Ly8gU3VwcG9ydDogSUUgMTEgb25seVxuXHRcdFx0Ly8gLi4uYnV0IG5vdCBhcnJvdyBrZXkgXCJjbGlja3NcIiBvZiByYWRpbyBpbnB1dHMsIHdoaWNoIGNhbiBoYXZlIGBidXR0b25gIC0xIChnaC0yMzQzKVxuXHRcdFx0ISggZXZlbnQudHlwZSA9PT0gXCJjbGlja1wiICYmIGV2ZW50LmJ1dHRvbiA+PSAxICkgKSB7XG5cblx0XHRcdGZvciAoIDsgY3VyICE9PSB0aGlzOyBjdXIgPSBjdXIucGFyZW50Tm9kZSB8fCB0aGlzICkge1xuXG5cdFx0XHRcdC8vIERvbid0IGNoZWNrIG5vbi1lbGVtZW50cyAodHJhYy0xMzIwOClcblx0XHRcdFx0Ly8gRG9uJ3QgcHJvY2VzcyBjbGlja3Mgb24gZGlzYWJsZWQgZWxlbWVudHMgKHRyYWMtNjkxMSwgdHJhYy04MTY1LCB0cmFjLTExMzgyLCB0cmFjLTExNzY0KVxuXHRcdFx0XHRpZiAoIGN1ci5ub2RlVHlwZSA9PT0gMSAmJiAhKCBldmVudC50eXBlID09PSBcImNsaWNrXCIgJiYgY3VyLmRpc2FibGVkID09PSB0cnVlICkgKSB7XG5cdFx0XHRcdFx0bWF0Y2hlZEhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0bWF0Y2hlZFNlbGVjdG9ycyA9IHt9O1xuXHRcdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgZGVsZWdhdGVDb3VudDsgaSsrICkge1xuXHRcdFx0XHRcdFx0aGFuZGxlT2JqID0gaGFuZGxlcnNbIGkgXTtcblxuXHRcdFx0XHRcdFx0Ly8gRG9uJ3QgY29uZmxpY3Qgd2l0aCBPYmplY3QucHJvdG90eXBlIHByb3BlcnRpZXMgKHRyYWMtMTMyMDMpXG5cdFx0XHRcdFx0XHRzZWwgPSBoYW5kbGVPYmouc2VsZWN0b3IgKyBcIiBcIjtcblxuXHRcdFx0XHRcdFx0aWYgKCBtYXRjaGVkU2VsZWN0b3JzWyBzZWwgXSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0XHRtYXRjaGVkU2VsZWN0b3JzWyBzZWwgXSA9IGhhbmRsZU9iai5uZWVkc0NvbnRleHQgP1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggc2VsLCB0aGlzICkuaW5kZXgoIGN1ciApID4gLTEgOlxuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5maW5kKCBzZWwsIHRoaXMsIG51bGwsIFsgY3VyIF0gKS5sZW5ndGg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZWRTZWxlY3RvcnNbIHNlbCBdICkge1xuXHRcdFx0XHRcdFx0XHRtYXRjaGVkSGFuZGxlcnMucHVzaCggaGFuZGxlT2JqICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggbWF0Y2hlZEhhbmRsZXJzLmxlbmd0aCApIHtcblx0XHRcdFx0XHRcdGhhbmRsZXJRdWV1ZS5wdXNoKCB7IGVsZW06IGN1ciwgaGFuZGxlcnM6IG1hdGNoZWRIYW5kbGVycyB9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQWRkIHRoZSByZW1haW5pbmcgKGRpcmVjdGx5LWJvdW5kKSBoYW5kbGVyc1xuXHRcdGN1ciA9IHRoaXM7XG5cdFx0aWYgKCBkZWxlZ2F0ZUNvdW50IDwgaGFuZGxlcnMubGVuZ3RoICkge1xuXHRcdFx0aGFuZGxlclF1ZXVlLnB1c2goIHsgZWxlbTogY3VyLCBoYW5kbGVyczogaGFuZGxlcnMuc2xpY2UoIGRlbGVnYXRlQ291bnQgKSB9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGhhbmRsZXJRdWV1ZTtcblx0fSxcblxuXHRhZGRQcm9wOiBmdW5jdGlvbiggbmFtZSwgaG9vayApIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIGpRdWVyeS5FdmVudC5wcm90b3R5cGUsIG5hbWUsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cblx0XHRcdGdldDogaXNGdW5jdGlvbiggaG9vayApID9cblx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLm9yaWdpbmFsRXZlbnQgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaG9vayggdGhpcy5vcmlnaW5hbEV2ZW50ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IDpcblx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLm9yaWdpbmFsRXZlbnQgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50WyBuYW1lIF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0aGlzLCBuYW1lLCB7XG5cdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0d3JpdGFibGU6IHRydWUsXG5cdFx0XHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0Zml4OiBmdW5jdGlvbiggb3JpZ2luYWxFdmVudCApIHtcblx0XHRyZXR1cm4gb3JpZ2luYWxFdmVudFsgalF1ZXJ5LmV4cGFuZG8gXSA/XG5cdFx0XHRvcmlnaW5hbEV2ZW50IDpcblx0XHRcdG5ldyBqUXVlcnkuRXZlbnQoIG9yaWdpbmFsRXZlbnQgKTtcblx0fSxcblxuXHRzcGVjaWFsOiB7XG5cdFx0bG9hZDoge1xuXG5cdFx0XHQvLyBQcmV2ZW50IHRyaWdnZXJlZCBpbWFnZS5sb2FkIGV2ZW50cyBmcm9tIGJ1YmJsaW5nIHRvIHdpbmRvdy5sb2FkXG5cdFx0XHRub0J1YmJsZTogdHJ1ZVxuXHRcdH0sXG5cdFx0Y2xpY2s6IHtcblxuXHRcdFx0Ly8gVXRpbGl6ZSBuYXRpdmUgZXZlbnQgdG8gZW5zdXJlIGNvcnJlY3Qgc3RhdGUgZm9yIGNoZWNrYWJsZSBpbnB1dHNcblx0XHRcdHNldHVwOiBmdW5jdGlvbiggZGF0YSApIHtcblxuXHRcdFx0XHQvLyBGb3IgbXV0dWFsIGNvbXByZXNzaWJpbGl0eSB3aXRoIF9kZWZhdWx0LCByZXBsYWNlIGB0aGlzYCBhY2Nlc3Mgd2l0aCBhIGxvY2FsIHZhci5cblx0XHRcdFx0Ly8gYHx8IGRhdGFgIGlzIGRlYWQgY29kZSBtZWFudCBvbmx5IHRvIHByZXNlcnZlIHRoZSB2YXJpYWJsZSB0aHJvdWdoIG1pbmlmaWNhdGlvbi5cblx0XHRcdFx0dmFyIGVsID0gdGhpcyB8fCBkYXRhO1xuXG5cdFx0XHRcdC8vIENsYWltIHRoZSBmaXJzdCBoYW5kbGVyXG5cdFx0XHRcdGlmICggcmNoZWNrYWJsZVR5cGUudGVzdCggZWwudHlwZSApICYmXG5cdFx0XHRcdFx0ZWwuY2xpY2sgJiYgbm9kZU5hbWUoIGVsLCBcImlucHV0XCIgKSApIHtcblxuXHRcdFx0XHRcdC8vIGRhdGFQcml2LnNldCggZWwsIFwiY2xpY2tcIiwgLi4uIClcblx0XHRcdFx0XHRsZXZlcmFnZU5hdGl2ZSggZWwsIFwiY2xpY2tcIiwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmV0dXJuIGZhbHNlIHRvIGFsbG93IG5vcm1hbCBwcm9jZXNzaW5nIGluIHRoZSBjYWxsZXJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSxcblx0XHRcdHRyaWdnZXI6IGZ1bmN0aW9uKCBkYXRhICkge1xuXG5cdFx0XHRcdC8vIEZvciBtdXR1YWwgY29tcHJlc3NpYmlsaXR5IHdpdGggX2RlZmF1bHQsIHJlcGxhY2UgYHRoaXNgIGFjY2VzcyB3aXRoIGEgbG9jYWwgdmFyLlxuXHRcdFx0XHQvLyBgfHwgZGF0YWAgaXMgZGVhZCBjb2RlIG1lYW50IG9ubHkgdG8gcHJlc2VydmUgdGhlIHZhcmlhYmxlIHRocm91Z2ggbWluaWZpY2F0aW9uLlxuXHRcdFx0XHR2YXIgZWwgPSB0aGlzIHx8IGRhdGE7XG5cblx0XHRcdFx0Ly8gRm9yY2Ugc2V0dXAgYmVmb3JlIHRyaWdnZXJpbmcgYSBjbGlja1xuXHRcdFx0XHRpZiAoIHJjaGVja2FibGVUeXBlLnRlc3QoIGVsLnR5cGUgKSAmJlxuXHRcdFx0XHRcdGVsLmNsaWNrICYmIG5vZGVOYW1lKCBlbCwgXCJpbnB1dFwiICkgKSB7XG5cblx0XHRcdFx0XHRsZXZlcmFnZU5hdGl2ZSggZWwsIFwiY2xpY2tcIiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmV0dXJuIG5vbi1mYWxzZSB0byBhbGxvdyBub3JtYWwgZXZlbnQtcGF0aCBwcm9wYWdhdGlvblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0sXG5cblx0XHRcdC8vIEZvciBjcm9zcy1icm93c2VyIGNvbnNpc3RlbmN5LCBzdXBwcmVzcyBuYXRpdmUgLmNsaWNrKCkgb24gbGlua3Ncblx0XHRcdC8vIEFsc28gcHJldmVudCBpdCBpZiB3ZSdyZSBjdXJyZW50bHkgaW5zaWRlIGEgbGV2ZXJhZ2VkIG5hdGl2ZS1ldmVudCBzdGFja1xuXHRcdFx0X2RlZmF1bHQ6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0dmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0XHRcdFx0cmV0dXJuIHJjaGVja2FibGVUeXBlLnRlc3QoIHRhcmdldC50eXBlICkgJiZcblx0XHRcdFx0XHR0YXJnZXQuY2xpY2sgJiYgbm9kZU5hbWUoIHRhcmdldCwgXCJpbnB1dFwiICkgJiZcblx0XHRcdFx0XHRkYXRhUHJpdi5nZXQoIHRhcmdldCwgXCJjbGlja1wiICkgfHxcblx0XHRcdFx0XHRub2RlTmFtZSggdGFyZ2V0LCBcImFcIiApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRiZWZvcmV1bmxvYWQ6IHtcblx0XHRcdHBvc3REaXNwYXRjaDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggMjArXG5cdFx0XHRcdC8vIEZpcmVmb3ggZG9lc24ndCBhbGVydCBpZiB0aGUgcmV0dXJuVmFsdWUgZmllbGQgaXMgbm90IHNldC5cblx0XHRcdFx0aWYgKCBldmVudC5yZXN1bHQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5vcmlnaW5hbEV2ZW50ICkge1xuXHRcdFx0XHRcdGV2ZW50Lm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWUgPSBldmVudC5yZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbi8vIEVuc3VyZSB0aGUgcHJlc2VuY2Ugb2YgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCBoYW5kbGVzIG1hbnVhbGx5LXRyaWdnZXJlZFxuLy8gc3ludGhldGljIGV2ZW50cyBieSBpbnRlcnJ1cHRpbmcgcHJvZ3Jlc3MgdW50aWwgcmVpbnZva2VkIGluIHJlc3BvbnNlIHRvXG4vLyAqbmF0aXZlKiBldmVudHMgdGhhdCBpdCBmaXJlcyBkaXJlY3RseSwgZW5zdXJpbmcgdGhhdCBzdGF0ZSBjaGFuZ2VzIGhhdmVcbi8vIGFscmVhZHkgb2NjdXJyZWQgYmVmb3JlIG90aGVyIGxpc3RlbmVycyBhcmUgaW52b2tlZC5cbmZ1bmN0aW9uIGxldmVyYWdlTmF0aXZlKCBlbCwgdHlwZSwgaXNTZXR1cCApIHtcblxuXHQvLyBNaXNzaW5nIGBpc1NldHVwYCBpbmRpY2F0ZXMgYSB0cmlnZ2VyIGNhbGwsIHdoaWNoIG11c3QgZm9yY2Ugc2V0dXAgdGhyb3VnaCBqUXVlcnkuZXZlbnQuYWRkXG5cdGlmICggIWlzU2V0dXAgKSB7XG5cdFx0aWYgKCBkYXRhUHJpdi5nZXQoIGVsLCB0eXBlICkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGpRdWVyeS5ldmVudC5hZGQoIGVsLCB0eXBlLCByZXR1cm5UcnVlICk7XG5cdFx0fVxuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFJlZ2lzdGVyIHRoZSBjb250cm9sbGVyIGFzIGEgc3BlY2lhbCB1bml2ZXJzYWwgaGFuZGxlciBmb3IgYWxsIGV2ZW50IG5hbWVzcGFjZXNcblx0ZGF0YVByaXYuc2V0KCBlbCwgdHlwZSwgZmFsc2UgKTtcblx0alF1ZXJ5LmV2ZW50LmFkZCggZWwsIHR5cGUsIHtcblx0XHRuYW1lc3BhY2U6IGZhbHNlLFxuXHRcdGhhbmRsZXI6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdHZhciByZXN1bHQsXG5cdFx0XHRcdHNhdmVkID0gZGF0YVByaXYuZ2V0KCB0aGlzLCB0eXBlICk7XG5cblx0XHRcdGlmICggKCBldmVudC5pc1RyaWdnZXIgJiAxICkgJiYgdGhpc1sgdHlwZSBdICkge1xuXG5cdFx0XHRcdC8vIEludGVycnVwdCBwcm9jZXNzaW5nIG9mIHRoZSBvdXRlciBzeW50aGV0aWMgLnRyaWdnZXIoKWVkIGV2ZW50XG5cdFx0XHRcdGlmICggIXNhdmVkICkge1xuXG5cdFx0XHRcdFx0Ly8gU3RvcmUgYXJndW1lbnRzIGZvciB1c2Ugd2hlbiBoYW5kbGluZyB0aGUgaW5uZXIgbmF0aXZlIGV2ZW50XG5cdFx0XHRcdFx0Ly8gVGhlcmUgd2lsbCBhbHdheXMgYmUgYXQgbGVhc3Qgb25lIGFyZ3VtZW50IChhbiBldmVudCBvYmplY3QpLCBzbyB0aGlzIGFycmF5XG5cdFx0XHRcdFx0Ly8gd2lsbCBub3QgYmUgY29uZnVzZWQgd2l0aCBhIGxlZnRvdmVyIGNhcHR1cmUgb2JqZWN0LlxuXHRcdFx0XHRcdHNhdmVkID0gc2xpY2UuY2FsbCggYXJndW1lbnRzICk7XG5cdFx0XHRcdFx0ZGF0YVByaXYuc2V0KCB0aGlzLCB0eXBlLCBzYXZlZCApO1xuXG5cdFx0XHRcdFx0Ly8gVHJpZ2dlciB0aGUgbmF0aXZlIGV2ZW50IGFuZCBjYXB0dXJlIGl0cyByZXN1bHRcblx0XHRcdFx0XHR0aGlzWyB0eXBlIF0oKTtcblx0XHRcdFx0XHRyZXN1bHQgPSBkYXRhUHJpdi5nZXQoIHRoaXMsIHR5cGUgKTtcblx0XHRcdFx0XHRkYXRhUHJpdi5zZXQoIHRoaXMsIHR5cGUsIGZhbHNlICk7XG5cblx0XHRcdFx0XHRpZiAoIHNhdmVkICE9PSByZXN1bHQgKSB7XG5cblx0XHRcdFx0XHRcdC8vIENhbmNlbCB0aGUgb3V0ZXIgc3ludGhldGljIGV2ZW50XG5cdFx0XHRcdFx0XHRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoaXMgaXMgYW4gaW5uZXIgc3ludGhldGljIGV2ZW50IGZvciBhbiBldmVudCB3aXRoIGEgYnViYmxpbmcgc3Vycm9nYXRlXG5cdFx0XHRcdC8vIChmb2N1cyBvciBibHVyKSwgYXNzdW1lIHRoYXQgdGhlIHN1cnJvZ2F0ZSBhbHJlYWR5IHByb3BhZ2F0ZWQgZnJvbSB0cmlnZ2VyaW5nXG5cdFx0XHRcdC8vIHRoZSBuYXRpdmUgZXZlbnQgYW5kIHByZXZlbnQgdGhhdCBmcm9tIGhhcHBlbmluZyBhZ2FpbiBoZXJlLlxuXHRcdFx0XHQvLyBUaGlzIHRlY2huaWNhbGx5IGdldHMgdGhlIG9yZGVyaW5nIHdyb25nIHcuci50LiB0byBgLnRyaWdnZXIoKWAgKGluIHdoaWNoIHRoZVxuXHRcdFx0XHQvLyBidWJibGluZyBzdXJyb2dhdGUgcHJvcGFnYXRlcyAqYWZ0ZXIqIHRoZSBub24tYnViYmxpbmcgYmFzZSksIGJ1dCB0aGF0IHNlZW1zXG5cdFx0XHRcdC8vIGxlc3MgYmFkIHRoYW4gZHVwbGljYXRpb24uXG5cdFx0XHRcdH0gZWxzZSBpZiAoICggalF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fSApLmRlbGVnYXRlVHlwZSApIHtcblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGlzIGlzIGEgbmF0aXZlIGV2ZW50IHRyaWdnZXJlZCBhYm92ZSwgZXZlcnl0aGluZyBpcyBub3cgaW4gb3JkZXJcblx0XHRcdC8vIEZpcmUgYW4gaW5uZXIgc3ludGhldGljIGV2ZW50IHdpdGggdGhlIG9yaWdpbmFsIGFyZ3VtZW50c1xuXHRcdFx0fSBlbHNlIGlmICggc2F2ZWQgKSB7XG5cblx0XHRcdFx0Ly8gLi4uYW5kIGNhcHR1cmUgdGhlIHJlc3VsdFxuXHRcdFx0XHRkYXRhUHJpdi5zZXQoIHRoaXMsIHR5cGUsIGpRdWVyeS5ldmVudC50cmlnZ2VyKFxuXHRcdFx0XHRcdHNhdmVkWyAwIF0sXG5cdFx0XHRcdFx0c2F2ZWQuc2xpY2UoIDEgKSxcblx0XHRcdFx0XHR0aGlzXG5cdFx0XHRcdCkgKTtcblxuXHRcdFx0XHQvLyBBYm9ydCBoYW5kbGluZyBvZiB0aGUgbmF0aXZlIGV2ZW50IGJ5IGFsbCBqUXVlcnkgaGFuZGxlcnMgd2hpbGUgYWxsb3dpbmdcblx0XHRcdFx0Ly8gbmF0aXZlIGhhbmRsZXJzIG9uIHRoZSBzYW1lIGVsZW1lbnQgdG8gcnVuLiBPbiB0YXJnZXQsIHRoaXMgaXMgYWNoaWV2ZWRcblx0XHRcdFx0Ly8gYnkgc3RvcHBpbmcgaW1tZWRpYXRlIHByb3BhZ2F0aW9uIGp1c3Qgb24gdGhlIGpRdWVyeSBldmVudC4gSG93ZXZlcixcblx0XHRcdFx0Ly8gdGhlIG5hdGl2ZSBldmVudCBpcyByZS13cmFwcGVkIGJ5IGEgalF1ZXJ5IG9uZSBvbiBlYWNoIGxldmVsIG9mIHRoZVxuXHRcdFx0XHQvLyBwcm9wYWdhdGlvbiBzbyB0aGUgb25seSB3YXkgdG8gc3RvcCBpdCBmb3IgalF1ZXJ5IGlzIHRvIHN0b3AgaXQgZm9yXG5cdFx0XHRcdC8vIGV2ZXJ5b25lIHZpYSBuYXRpdmUgYHN0b3BQcm9wYWdhdGlvbigpYC4gVGhpcyBpcyBub3QgYSBwcm9ibGVtIGZvclxuXHRcdFx0XHQvLyBmb2N1cy9ibHVyIHdoaWNoIGRvbid0IGJ1YmJsZSwgYnV0IGl0IGRvZXMgYWxzbyBzdG9wIGNsaWNrIG9uIGNoZWNrYm94ZXNcblx0XHRcdFx0Ly8gYW5kIHJhZGlvcy4gV2UgYWNjZXB0IHRoaXMgbGltaXRhdGlvbi5cblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdGV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH0gKTtcbn1cblxualF1ZXJ5LnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24oIGVsZW0sIHR5cGUsIGhhbmRsZSApIHtcblxuXHQvLyBUaGlzIFwiaWZcIiBpcyBuZWVkZWQgZm9yIHBsYWluIG9iamVjdHNcblx0aWYgKCBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0ZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCB0eXBlLCBoYW5kbGUgKTtcblx0fVxufTtcblxualF1ZXJ5LkV2ZW50ID0gZnVuY3Rpb24oIHNyYywgcHJvcHMgKSB7XG5cblx0Ly8gQWxsb3cgaW5zdGFudGlhdGlvbiB3aXRob3V0IHRoZSAnbmV3JyBrZXl3b3JkXG5cdGlmICggISggdGhpcyBpbnN0YW5jZW9mIGpRdWVyeS5FdmVudCApICkge1xuXHRcdHJldHVybiBuZXcgalF1ZXJ5LkV2ZW50KCBzcmMsIHByb3BzICk7XG5cdH1cblxuXHQvLyBFdmVudCBvYmplY3Rcblx0aWYgKCBzcmMgJiYgc3JjLnR5cGUgKSB7XG5cdFx0dGhpcy5vcmlnaW5hbEV2ZW50ID0gc3JjO1xuXHRcdHRoaXMudHlwZSA9IHNyYy50eXBlO1xuXG5cdFx0Ly8gRXZlbnRzIGJ1YmJsaW5nIHVwIHRoZSBkb2N1bWVudCBtYXkgaGF2ZSBiZWVuIG1hcmtlZCBhcyBwcmV2ZW50ZWRcblx0XHQvLyBieSBhIGhhbmRsZXIgbG93ZXIgZG93biB0aGUgdHJlZTsgcmVmbGVjdCB0aGUgY29ycmVjdCB2YWx1ZS5cblx0XHR0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IHNyYy5kZWZhdWx0UHJldmVudGVkIHx8XG5cdFx0XHRcdHNyYy5kZWZhdWx0UHJldmVudGVkID09PSB1bmRlZmluZWQgJiZcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9Mi4zIG9ubHlcblx0XHRcdFx0c3JjLnJldHVyblZhbHVlID09PSBmYWxzZSA/XG5cdFx0XHRyZXR1cm5UcnVlIDpcblx0XHRcdHJldHVybkZhbHNlO1xuXG5cdFx0Ly8gQ3JlYXRlIHRhcmdldCBwcm9wZXJ0aWVzXG5cdFx0Ly8gU3VwcG9ydDogU2FmYXJpIDw9NiAtIDcgb25seVxuXHRcdC8vIFRhcmdldCBzaG91bGQgbm90IGJlIGEgdGV4dCBub2RlICh0cmFjLTUwNCwgdHJhYy0xMzE0Mylcblx0XHR0aGlzLnRhcmdldCA9ICggc3JjLnRhcmdldCAmJiBzcmMudGFyZ2V0Lm5vZGVUeXBlID09PSAzICkgP1xuXHRcdFx0c3JjLnRhcmdldC5wYXJlbnROb2RlIDpcblx0XHRcdHNyYy50YXJnZXQ7XG5cblx0XHR0aGlzLmN1cnJlbnRUYXJnZXQgPSBzcmMuY3VycmVudFRhcmdldDtcblx0XHR0aGlzLnJlbGF0ZWRUYXJnZXQgPSBzcmMucmVsYXRlZFRhcmdldDtcblxuXHQvLyBFdmVudCB0eXBlXG5cdH0gZWxzZSB7XG5cdFx0dGhpcy50eXBlID0gc3JjO1xuXHR9XG5cblx0Ly8gUHV0IGV4cGxpY2l0bHkgcHJvdmlkZWQgcHJvcGVydGllcyBvbnRvIHRoZSBldmVudCBvYmplY3Rcblx0aWYgKCBwcm9wcyApIHtcblx0XHRqUXVlcnkuZXh0ZW5kKCB0aGlzLCBwcm9wcyApO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGEgdGltZXN0YW1wIGlmIGluY29taW5nIGV2ZW50IGRvZXNuJ3QgaGF2ZSBvbmVcblx0dGhpcy50aW1lU3RhbXAgPSBzcmMgJiYgc3JjLnRpbWVTdGFtcCB8fCBEYXRlLm5vdygpO1xuXG5cdC8vIE1hcmsgaXQgYXMgZml4ZWRcblx0dGhpc1sgalF1ZXJ5LmV4cGFuZG8gXSA9IHRydWU7XG59O1xuXG4vLyBqUXVlcnkuRXZlbnQgaXMgYmFzZWQgb24gRE9NMyBFdmVudHMgYXMgc3BlY2lmaWVkIGJ5IHRoZSBFQ01BU2NyaXB0IExhbmd1YWdlIEJpbmRpbmdcbi8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDAzL1dELURPTS1MZXZlbC0zLUV2ZW50cy0yMDAzMDMzMS9lY21hLXNjcmlwdC1iaW5kaW5nLmh0bWxcbmpRdWVyeS5FdmVudC5wcm90b3R5cGUgPSB7XG5cdGNvbnN0cnVjdG9yOiBqUXVlcnkuRXZlbnQsXG5cdGlzRGVmYXVsdFByZXZlbnRlZDogcmV0dXJuRmFsc2UsXG5cdGlzUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcblx0aXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXHRpc1NpbXVsYXRlZDogZmFsc2UsXG5cblx0cHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuXG5cdFx0dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlO1xuXG5cdFx0aWYgKCBlICYmICF0aGlzLmlzU2ltdWxhdGVkICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblx0fSxcblx0c3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcblxuXHRcdHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuXG5cdFx0aWYgKCBlICYmICF0aGlzLmlzU2ltdWxhdGVkICkge1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cdH0sXG5cdHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG5cblx0XHR0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcblxuXHRcdGlmICggZSAmJiAhdGhpcy5pc1NpbXVsYXRlZCApIHtcblx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcblx0fVxufTtcblxuLy8gSW5jbHVkZXMgYWxsIGNvbW1vbiBldmVudCBwcm9wcyBpbmNsdWRpbmcgS2V5RXZlbnQgYW5kIE1vdXNlRXZlbnQgc3BlY2lmaWMgcHJvcHNcbmpRdWVyeS5lYWNoKCB7XG5cdGFsdEtleTogdHJ1ZSxcblx0YnViYmxlczogdHJ1ZSxcblx0Y2FuY2VsYWJsZTogdHJ1ZSxcblx0Y2hhbmdlZFRvdWNoZXM6IHRydWUsXG5cdGN0cmxLZXk6IHRydWUsXG5cdGRldGFpbDogdHJ1ZSxcblx0ZXZlbnRQaGFzZTogdHJ1ZSxcblx0bWV0YUtleTogdHJ1ZSxcblx0cGFnZVg6IHRydWUsXG5cdHBhZ2VZOiB0cnVlLFxuXHRzaGlmdEtleTogdHJ1ZSxcblx0dmlldzogdHJ1ZSxcblx0XCJjaGFyXCI6IHRydWUsXG5cdGNvZGU6IHRydWUsXG5cdGNoYXJDb2RlOiB0cnVlLFxuXHRrZXk6IHRydWUsXG5cdGtleUNvZGU6IHRydWUsXG5cdGJ1dHRvbjogdHJ1ZSxcblx0YnV0dG9uczogdHJ1ZSxcblx0Y2xpZW50WDogdHJ1ZSxcblx0Y2xpZW50WTogdHJ1ZSxcblx0b2Zmc2V0WDogdHJ1ZSxcblx0b2Zmc2V0WTogdHJ1ZSxcblx0cG9pbnRlcklkOiB0cnVlLFxuXHRwb2ludGVyVHlwZTogdHJ1ZSxcblx0c2NyZWVuWDogdHJ1ZSxcblx0c2NyZWVuWTogdHJ1ZSxcblx0dGFyZ2V0VG91Y2hlczogdHJ1ZSxcblx0dG9FbGVtZW50OiB0cnVlLFxuXHR0b3VjaGVzOiB0cnVlLFxuXHR3aGljaDogdHJ1ZVxufSwgalF1ZXJ5LmV2ZW50LmFkZFByb3AgKTtcblxualF1ZXJ5LmVhY2goIHsgZm9jdXM6IFwiZm9jdXNpblwiLCBibHVyOiBcImZvY3Vzb3V0XCIgfSwgZnVuY3Rpb24oIHR5cGUsIGRlbGVnYXRlVHlwZSApIHtcblxuXHRmdW5jdGlvbiBmb2N1c01hcHBlZEhhbmRsZXIoIG5hdGl2ZUV2ZW50ICkge1xuXHRcdGlmICggZG9jdW1lbnQuZG9jdW1lbnRNb2RlICkge1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSAxMStcblx0XHRcdC8vIEF0dGFjaCBhIHNpbmdsZSBmb2N1c2luL2ZvY3Vzb3V0IGhhbmRsZXIgb24gdGhlIGRvY3VtZW50IHdoaWxlIHNvbWVvbmUgd2FudHNcblx0XHRcdC8vIGZvY3VzL2JsdXIuIFRoaXMgaXMgYmVjYXVzZSB0aGUgZm9ybWVyIGFyZSBzeW5jaHJvbm91cyBpbiBJRSB3aGlsZSB0aGUgbGF0dGVyXG5cdFx0XHQvLyBhcmUgYXN5bmMuIEluIG90aGVyIGJyb3dzZXJzLCBhbGwgdGhvc2UgaGFuZGxlcnMgYXJlIGludm9rZWQgc3luY2hyb25vdXNseS5cblxuXHRcdFx0Ly8gYGhhbmRsZWAgZnJvbSBwcml2YXRlIGRhdGEgd291bGQgYWxyZWFkeSB3cmFwIHRoZSBldmVudCwgYnV0IHdlIG5lZWRcblx0XHRcdC8vIHRvIGNoYW5nZSB0aGUgYHR5cGVgIGhlcmUuXG5cdFx0XHR2YXIgaGFuZGxlID0gZGF0YVByaXYuZ2V0KCB0aGlzLCBcImhhbmRsZVwiICksXG5cdFx0XHRcdGV2ZW50ID0galF1ZXJ5LmV2ZW50LmZpeCggbmF0aXZlRXZlbnQgKTtcblx0XHRcdGV2ZW50LnR5cGUgPSBuYXRpdmVFdmVudC50eXBlID09PSBcImZvY3VzaW5cIiA/IFwiZm9jdXNcIiA6IFwiYmx1clwiO1xuXHRcdFx0ZXZlbnQuaXNTaW11bGF0ZWQgPSB0cnVlO1xuXG5cdFx0XHQvLyBGaXJzdCwgaGFuZGxlIGZvY3VzaW4vZm9jdXNvdXRcblx0XHRcdGhhbmRsZSggbmF0aXZlRXZlbnQgKTtcblxuXHRcdFx0Ly8gLi4udGhlbiwgaGFuZGxlIGZvY3VzL2JsdXJcblx0XHRcdC8vXG5cdFx0XHQvLyBmb2N1cy9ibHVyIGRvbid0IGJ1YmJsZSB3aGlsZSBmb2N1c2luL2ZvY3Vzb3V0IGRvOyBzaW11bGF0ZSB0aGUgZm9ybWVyIGJ5IG9ubHlcblx0XHRcdC8vIGludm9raW5nIHRoZSBoYW5kbGVyIGF0IHRoZSBsb3dlciBsZXZlbC5cblx0XHRcdGlmICggZXZlbnQudGFyZ2V0ID09PSBldmVudC5jdXJyZW50VGFyZ2V0ICkge1xuXG5cdFx0XHRcdC8vIFRoZSBzZXR1cCBwYXJ0IGNhbGxzIGBsZXZlcmFnZU5hdGl2ZWAsIHdoaWNoLCBpbiB0dXJuLCBjYWxsc1xuXHRcdFx0XHQvLyBgalF1ZXJ5LmV2ZW50LmFkZGAsIHNvIGV2ZW50IGhhbmRsZSB3aWxsIGFscmVhZHkgaGF2ZSBiZWVuIHNldFxuXHRcdFx0XHQvLyBieSB0aGlzIHBvaW50LlxuXHRcdFx0XHRoYW5kbGUoIGV2ZW50ICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gRm9yIG5vbi1JRSBicm93c2VycywgYXR0YWNoIGEgc2luZ2xlIGNhcHR1cmluZyBoYW5kbGVyIG9uIHRoZSBkb2N1bWVudFxuXHRcdFx0Ly8gd2hpbGUgc29tZW9uZSB3YW50cyBmb2N1c2luL2ZvY3Vzb3V0LlxuXHRcdFx0alF1ZXJ5LmV2ZW50LnNpbXVsYXRlKCBkZWxlZ2F0ZVR5cGUsIG5hdGl2ZUV2ZW50LnRhcmdldCxcblx0XHRcdFx0alF1ZXJ5LmV2ZW50LmZpeCggbmF0aXZlRXZlbnQgKSApO1xuXHRcdH1cblx0fVxuXG5cdGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gPSB7XG5cblx0XHQvLyBVdGlsaXplIG5hdGl2ZSBldmVudCBpZiBwb3NzaWJsZSBzbyBibHVyL2ZvY3VzIHNlcXVlbmNlIGlzIGNvcnJlY3Rcblx0XHRzZXR1cDogZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciBhdHRhY2hlcztcblxuXHRcdFx0Ly8gQ2xhaW0gdGhlIGZpcnN0IGhhbmRsZXJcblx0XHRcdC8vIGRhdGFQcml2LnNldCggdGhpcywgXCJmb2N1c1wiLCAuLi4gKVxuXHRcdFx0Ly8gZGF0YVByaXYuc2V0KCB0aGlzLCBcImJsdXJcIiwgLi4uIClcblx0XHRcdGxldmVyYWdlTmF0aXZlKCB0aGlzLCB0eXBlLCB0cnVlICk7XG5cblx0XHRcdGlmICggZG9jdW1lbnQuZG9jdW1lbnRNb2RlICkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMStcblx0XHRcdFx0Ly8gV2UgdXNlIHRoZSBzYW1lIG5hdGl2ZSBoYW5kbGVyIGZvciBmb2N1c2luICYgZm9jdXMgKGFuZCBmb2N1c291dCAmIGJsdXIpXG5cdFx0XHRcdC8vIHNvIHdlIG5lZWQgdG8gY29vcmRpbmF0ZSBzZXR1cCAmIHRlYXJkb3duIHBhcnRzIGJldHdlZW4gdGhvc2UgZXZlbnRzLlxuXHRcdFx0XHQvLyBVc2UgYGRlbGVnYXRlVHlwZWAgYXMgdGhlIGtleSBhcyBgdHlwZWAgaXMgYWxyZWFkeSB1c2VkIGJ5IGBsZXZlcmFnZU5hdGl2ZWAuXG5cdFx0XHRcdGF0dGFjaGVzID0gZGF0YVByaXYuZ2V0KCB0aGlzLCBkZWxlZ2F0ZVR5cGUgKTtcblx0XHRcdFx0aWYgKCAhYXR0YWNoZXMgKSB7XG5cdFx0XHRcdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKCBkZWxlZ2F0ZVR5cGUsIGZvY3VzTWFwcGVkSGFuZGxlciApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRhdGFQcml2LnNldCggdGhpcywgZGVsZWdhdGVUeXBlLCAoIGF0dGFjaGVzIHx8IDAgKSArIDEgKTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUmV0dXJuIGZhbHNlIHRvIGFsbG93IG5vcm1hbCBwcm9jZXNzaW5nIGluIHRoZSBjYWxsZXJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0dHJpZ2dlcjogZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIEZvcmNlIHNldHVwIGJlZm9yZSB0cmlnZ2VyXG5cdFx0XHRsZXZlcmFnZU5hdGl2ZSggdGhpcywgdHlwZSApO1xuXG5cdFx0XHQvLyBSZXR1cm4gbm9uLWZhbHNlIHRvIGFsbG93IG5vcm1hbCBldmVudC1wYXRoIHByb3BhZ2F0aW9uXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0dGVhcmRvd246IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGF0dGFjaGVzO1xuXG5cdFx0XHRpZiAoIGRvY3VtZW50LmRvY3VtZW50TW9kZSApIHtcblx0XHRcdFx0YXR0YWNoZXMgPSBkYXRhUHJpdi5nZXQoIHRoaXMsIGRlbGVnYXRlVHlwZSApIC0gMTtcblx0XHRcdFx0aWYgKCAhYXR0YWNoZXMgKSB7XG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCBkZWxlZ2F0ZVR5cGUsIGZvY3VzTWFwcGVkSGFuZGxlciApO1xuXHRcdFx0XHRcdGRhdGFQcml2LnJlbW92ZSggdGhpcywgZGVsZWdhdGVUeXBlICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGF0YVByaXYuc2V0KCB0aGlzLCBkZWxlZ2F0ZVR5cGUsIGF0dGFjaGVzICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUmV0dXJuIGZhbHNlIHRvIGluZGljYXRlIHN0YW5kYXJkIHRlYXJkb3duIHNob3VsZCBiZSBhcHBsaWVkXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gU3VwcHJlc3MgbmF0aXZlIGZvY3VzIG9yIGJsdXIgaWYgd2UncmUgY3VycmVudGx5IGluc2lkZVxuXHRcdC8vIGEgbGV2ZXJhZ2VkIG5hdGl2ZS1ldmVudCBzdGFja1xuXHRcdF9kZWZhdWx0OiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRyZXR1cm4gZGF0YVByaXYuZ2V0KCBldmVudC50YXJnZXQsIHR5cGUgKTtcblx0XHR9LFxuXG5cdFx0ZGVsZWdhdGVUeXBlOiBkZWxlZ2F0ZVR5cGVcblx0fTtcblxuXHQvLyBTdXBwb3J0OiBGaXJlZm94IDw9NDRcblx0Ly8gRmlyZWZveCBkb2Vzbid0IGhhdmUgZm9jdXMoaW4gfCBvdXQpIGV2ZW50c1xuXHQvLyBSZWxhdGVkIHRpY2tldCAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY4Nzc4N1xuXHQvL1xuXHQvLyBTdXBwb3J0OiBDaHJvbWUgPD00OCAtIDQ5LCBTYWZhcmkgPD05LjAgLSA5LjFcblx0Ly8gZm9jdXMoaW4gfCBvdXQpIGV2ZW50cyBmaXJlIGFmdGVyIGZvY3VzICYgYmx1ciBldmVudHMsXG5cdC8vIHdoaWNoIGlzIHNwZWMgdmlvbGF0aW9uIC0gaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtRXZlbnRzLyNldmVudHMtZm9jdXNldmVudC1ldmVudC1vcmRlclxuXHQvLyBSZWxhdGVkIHRpY2tldCAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ0OTg1N1xuXHQvL1xuXHQvLyBTdXBwb3J0OiBJRSA5IC0gMTErXG5cdC8vIFRvIHByZXNlcnZlIHJlbGF0aXZlIGZvY3VzaW4vZm9jdXMgJiBmb2N1c291dC9ibHVyIGV2ZW50IG9yZGVyIGd1YXJhbnRlZWQgb24gdGhlIDMueCBicmFuY2gsXG5cdC8vIGF0dGFjaCBhIHNpbmdsZSBoYW5kbGVyIGZvciBib3RoIGV2ZW50cyBpbiBJRS5cblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWxbIGRlbGVnYXRlVHlwZSBdID0ge1xuXHRcdHNldHVwOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gSGFuZGxlOiByZWd1bGFyIG5vZGVzICh2aWEgYHRoaXMub3duZXJEb2N1bWVudGApLCB3aW5kb3dcblx0XHRcdC8vICh2aWEgYHRoaXMuZG9jdW1lbnRgKSAmIGRvY3VtZW50ICh2aWEgYHRoaXNgKS5cblx0XHRcdHZhciBkb2MgPSB0aGlzLm93bmVyRG9jdW1lbnQgfHwgdGhpcy5kb2N1bWVudCB8fCB0aGlzLFxuXHRcdFx0XHRkYXRhSG9sZGVyID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlID8gdGhpcyA6IGRvYyxcblx0XHRcdFx0YXR0YWNoZXMgPSBkYXRhUHJpdi5nZXQoIGRhdGFIb2xkZXIsIGRlbGVnYXRlVHlwZSApO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTErXG5cdFx0XHQvLyBXZSB1c2UgdGhlIHNhbWUgbmF0aXZlIGhhbmRsZXIgZm9yIGZvY3VzaW4gJiBmb2N1cyAoYW5kIGZvY3Vzb3V0ICYgYmx1cilcblx0XHRcdC8vIHNvIHdlIG5lZWQgdG8gY29vcmRpbmF0ZSBzZXR1cCAmIHRlYXJkb3duIHBhcnRzIGJldHdlZW4gdGhvc2UgZXZlbnRzLlxuXHRcdFx0Ly8gVXNlIGBkZWxlZ2F0ZVR5cGVgIGFzIHRoZSBrZXkgYXMgYHR5cGVgIGlzIGFscmVhZHkgdXNlZCBieSBgbGV2ZXJhZ2VOYXRpdmVgLlxuXHRcdFx0aWYgKCAhYXR0YWNoZXMgKSB7XG5cdFx0XHRcdGlmICggZG9jdW1lbnQuZG9jdW1lbnRNb2RlICkge1xuXHRcdFx0XHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggZGVsZWdhdGVUeXBlLCBmb2N1c01hcHBlZEhhbmRsZXIgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkb2MuYWRkRXZlbnRMaXN0ZW5lciggdHlwZSwgZm9jdXNNYXBwZWRIYW5kbGVyLCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGRhdGFQcml2LnNldCggZGF0YUhvbGRlciwgZGVsZWdhdGVUeXBlLCAoIGF0dGFjaGVzIHx8IDAgKSArIDEgKTtcblx0XHR9LFxuXHRcdHRlYXJkb3duOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkb2MgPSB0aGlzLm93bmVyRG9jdW1lbnQgfHwgdGhpcy5kb2N1bWVudCB8fCB0aGlzLFxuXHRcdFx0XHRkYXRhSG9sZGVyID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlID8gdGhpcyA6IGRvYyxcblx0XHRcdFx0YXR0YWNoZXMgPSBkYXRhUHJpdi5nZXQoIGRhdGFIb2xkZXIsIGRlbGVnYXRlVHlwZSApIC0gMTtcblxuXHRcdFx0aWYgKCAhYXR0YWNoZXMgKSB7XG5cdFx0XHRcdGlmICggZG9jdW1lbnQuZG9jdW1lbnRNb2RlICkge1xuXHRcdFx0XHRcdHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggZGVsZWdhdGVUeXBlLCBmb2N1c01hcHBlZEhhbmRsZXIgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lciggdHlwZSwgZm9jdXNNYXBwZWRIYW5kbGVyLCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGF0YVByaXYucmVtb3ZlKCBkYXRhSG9sZGVyLCBkZWxlZ2F0ZVR5cGUgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRhdGFQcml2LnNldCggZGF0YUhvbGRlciwgZGVsZWdhdGVUeXBlLCBhdHRhY2hlcyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn0gKTtcblxuLy8gQ3JlYXRlIG1vdXNlZW50ZXIvbGVhdmUgZXZlbnRzIHVzaW5nIG1vdXNlb3Zlci9vdXQgYW5kIGV2ZW50LXRpbWUgY2hlY2tzXG4vLyBzbyB0aGF0IGV2ZW50IGRlbGVnYXRpb24gd29ya3MgaW4galF1ZXJ5LlxuLy8gRG8gdGhlIHNhbWUgZm9yIHBvaW50ZXJlbnRlci9wb2ludGVybGVhdmUgYW5kIHBvaW50ZXJvdmVyL3BvaW50ZXJvdXRcbi8vXG4vLyBTdXBwb3J0OiBTYWZhcmkgNyBvbmx5XG4vLyBTYWZhcmkgc2VuZHMgbW91c2VlbnRlciB0b28gb2Z0ZW47IHNlZTpcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ3MDI1OFxuLy8gZm9yIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYnVnIChpdCBleGlzdGVkIGluIG9sZGVyIENocm9tZSB2ZXJzaW9ucyBhcyB3ZWxsKS5cbmpRdWVyeS5lYWNoKCB7XG5cdG1vdXNlZW50ZXI6IFwibW91c2VvdmVyXCIsXG5cdG1vdXNlbGVhdmU6IFwibW91c2VvdXRcIixcblx0cG9pbnRlcmVudGVyOiBcInBvaW50ZXJvdmVyXCIsXG5cdHBvaW50ZXJsZWF2ZTogXCJwb2ludGVyb3V0XCJcbn0sIGZ1bmN0aW9uKCBvcmlnLCBmaXggKSB7XG5cdGpRdWVyeS5ldmVudC5zcGVjaWFsWyBvcmlnIF0gPSB7XG5cdFx0ZGVsZWdhdGVUeXBlOiBmaXgsXG5cdFx0YmluZFR5cGU6IGZpeCxcblxuXHRcdGhhbmRsZTogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0dmFyIHJldCxcblx0XHRcdFx0dGFyZ2V0ID0gdGhpcyxcblx0XHRcdFx0cmVsYXRlZCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQsXG5cdFx0XHRcdGhhbmRsZU9iaiA9IGV2ZW50LmhhbmRsZU9iajtcblxuXHRcdFx0Ly8gRm9yIG1vdXNlZW50ZXIvbGVhdmUgY2FsbCB0aGUgaGFuZGxlciBpZiByZWxhdGVkIGlzIG91dHNpZGUgdGhlIHRhcmdldC5cblx0XHRcdC8vIE5COiBObyByZWxhdGVkVGFyZ2V0IGlmIHRoZSBtb3VzZSBsZWZ0L2VudGVyZWQgdGhlIGJyb3dzZXIgd2luZG93XG5cdFx0XHRpZiAoICFyZWxhdGVkIHx8ICggcmVsYXRlZCAhPT0gdGFyZ2V0ICYmICFqUXVlcnkuY29udGFpbnMoIHRhcmdldCwgcmVsYXRlZCApICkgKSB7XG5cdFx0XHRcdGV2ZW50LnR5cGUgPSBoYW5kbGVPYmoub3JpZ1R5cGU7XG5cdFx0XHRcdHJldCA9IGhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0ZXZlbnQudHlwZSA9IGZpeDtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXHR9O1xufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cblx0b246IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiBvbiggdGhpcywgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiApO1xuXHR9LFxuXHRvbmU6IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiBvbiggdGhpcywgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiwgMSApO1xuXHR9LFxuXHRvZmY6IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGZuICkge1xuXHRcdHZhciBoYW5kbGVPYmosIHR5cGU7XG5cdFx0aWYgKCB0eXBlcyAmJiB0eXBlcy5wcmV2ZW50RGVmYXVsdCAmJiB0eXBlcy5oYW5kbGVPYmogKSB7XG5cblx0XHRcdC8vICggZXZlbnQgKSAgZGlzcGF0Y2hlZCBqUXVlcnkuRXZlbnRcblx0XHRcdGhhbmRsZU9iaiA9IHR5cGVzLmhhbmRsZU9iajtcblx0XHRcdGpRdWVyeSggdHlwZXMuZGVsZWdhdGVUYXJnZXQgKS5vZmYoXG5cdFx0XHRcdGhhbmRsZU9iai5uYW1lc3BhY2UgP1xuXHRcdFx0XHRcdGhhbmRsZU9iai5vcmlnVHlwZSArIFwiLlwiICsgaGFuZGxlT2JqLm5hbWVzcGFjZSA6XG5cdFx0XHRcdFx0aGFuZGxlT2JqLm9yaWdUeXBlLFxuXHRcdFx0XHRoYW5kbGVPYmouc2VsZWN0b3IsXG5cdFx0XHRcdGhhbmRsZU9iai5oYW5kbGVyXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdGlmICggdHlwZW9mIHR5cGVzID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0XHQvLyAoIHR5cGVzLW9iamVjdCBbLCBzZWxlY3Rvcl0gKVxuXHRcdFx0Zm9yICggdHlwZSBpbiB0eXBlcyApIHtcblx0XHRcdFx0dGhpcy5vZmYoIHR5cGUsIHNlbGVjdG9yLCB0eXBlc1sgdHlwZSBdICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aWYgKCBzZWxlY3RvciA9PT0gZmFsc2UgfHwgdHlwZW9mIHNlbGVjdG9yID09PSBcImZ1bmN0aW9uXCIgKSB7XG5cblx0XHRcdC8vICggdHlwZXMgWywgZm5dIClcblx0XHRcdGZuID0gc2VsZWN0b3I7XG5cdFx0XHRzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0aWYgKCBmbiA9PT0gZmFsc2UgKSB7XG5cdFx0XHRmbiA9IHJldHVybkZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIHRoaXMsIHR5cGVzLCBmbiwgc2VsZWN0b3IgKTtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxuXG52YXJcblxuXHQvLyBTdXBwb3J0OiBJRSA8PTEwIC0gMTEsIEVkZ2UgMTIgLSAxMyBvbmx5XG5cdC8vIEluIElFL0VkZ2UgdXNpbmcgcmVnZXggZ3JvdXBzIGhlcmUgY2F1c2VzIHNldmVyZSBzbG93ZG93bnMuXG5cdC8vIFNlZSBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzE3MzY1MTIvXG5cdHJub0lubmVyaHRtbCA9IC88c2NyaXB0fDxzdHlsZXw8bGluay9pLFxuXG5cdC8vIGNoZWNrZWQ9XCJjaGVja2VkXCIgb3IgY2hlY2tlZFxuXHRyY2hlY2tlZCA9IC9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksXG5cblx0cmNsZWFuU2NyaXB0ID0gL15cXHMqPCFcXFtDREFUQVxcW3xcXF1cXF0+XFxzKiQvZztcblxuLy8gUHJlZmVyIGEgdGJvZHkgb3ZlciBpdHMgcGFyZW50IHRhYmxlIGZvciBjb250YWluaW5nIG5ldyByb3dzXG5mdW5jdGlvbiBtYW5pcHVsYXRpb25UYXJnZXQoIGVsZW0sIGNvbnRlbnQgKSB7XG5cdGlmICggbm9kZU5hbWUoIGVsZW0sIFwidGFibGVcIiApICYmXG5cdFx0bm9kZU5hbWUoIGNvbnRlbnQubm9kZVR5cGUgIT09IDExID8gY29udGVudCA6IGNvbnRlbnQuZmlyc3RDaGlsZCwgXCJ0clwiICkgKSB7XG5cblx0XHRyZXR1cm4galF1ZXJ5KCBlbGVtICkuY2hpbGRyZW4oIFwidGJvZHlcIiApWyAwIF0gfHwgZWxlbTtcblx0fVxuXG5cdHJldHVybiBlbGVtO1xufVxuXG4vLyBSZXBsYWNlL3Jlc3RvcmUgdGhlIHR5cGUgYXR0cmlidXRlIG9mIHNjcmlwdCBlbGVtZW50cyBmb3Igc2FmZSBET00gbWFuaXB1bGF0aW9uXG5mdW5jdGlvbiBkaXNhYmxlU2NyaXB0KCBlbGVtICkge1xuXHRlbGVtLnR5cGUgPSAoIGVsZW0uZ2V0QXR0cmlidXRlKCBcInR5cGVcIiApICE9PSBudWxsICkgKyBcIi9cIiArIGVsZW0udHlwZTtcblx0cmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiByZXN0b3JlU2NyaXB0KCBlbGVtICkge1xuXHRpZiAoICggZWxlbS50eXBlIHx8IFwiXCIgKS5zbGljZSggMCwgNSApID09PSBcInRydWUvXCIgKSB7XG5cdFx0ZWxlbS50eXBlID0gZWxlbS50eXBlLnNsaWNlKCA1ICk7XG5cdH0gZWxzZSB7XG5cdFx0ZWxlbS5yZW1vdmVBdHRyaWJ1dGUoIFwidHlwZVwiICk7XG5cdH1cblxuXHRyZXR1cm4gZWxlbTtcbn1cblxuZnVuY3Rpb24gY2xvbmVDb3B5RXZlbnQoIHNyYywgZGVzdCApIHtcblx0dmFyIGksIGwsIHR5cGUsIHBkYXRhT2xkLCB1ZGF0YU9sZCwgdWRhdGFDdXIsIGV2ZW50cztcblxuXHRpZiAoIGRlc3Qubm9kZVR5cGUgIT09IDEgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gMS4gQ29weSBwcml2YXRlIGRhdGE6IGV2ZW50cywgaGFuZGxlcnMsIGV0Yy5cblx0aWYgKCBkYXRhUHJpdi5oYXNEYXRhKCBzcmMgKSApIHtcblx0XHRwZGF0YU9sZCA9IGRhdGFQcml2LmdldCggc3JjICk7XG5cdFx0ZXZlbnRzID0gcGRhdGFPbGQuZXZlbnRzO1xuXG5cdFx0aWYgKCBldmVudHMgKSB7XG5cdFx0XHRkYXRhUHJpdi5yZW1vdmUoIGRlc3QsIFwiaGFuZGxlIGV2ZW50c1wiICk7XG5cblx0XHRcdGZvciAoIHR5cGUgaW4gZXZlbnRzICkge1xuXHRcdFx0XHRmb3IgKCBpID0gMCwgbCA9IGV2ZW50c1sgdHlwZSBdLmxlbmd0aDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQuYWRkKCBkZXN0LCB0eXBlLCBldmVudHNbIHR5cGUgXVsgaSBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyAyLiBDb3B5IHVzZXIgZGF0YVxuXHRpZiAoIGRhdGFVc2VyLmhhc0RhdGEoIHNyYyApICkge1xuXHRcdHVkYXRhT2xkID0gZGF0YVVzZXIuYWNjZXNzKCBzcmMgKTtcblx0XHR1ZGF0YUN1ciA9IGpRdWVyeS5leHRlbmQoIHt9LCB1ZGF0YU9sZCApO1xuXG5cdFx0ZGF0YVVzZXIuc2V0KCBkZXN0LCB1ZGF0YUN1ciApO1xuXHR9XG59XG5cbi8vIEZpeCBJRSBidWdzLCBzZWUgc3VwcG9ydCB0ZXN0c1xuZnVuY3Rpb24gZml4SW5wdXQoIHNyYywgZGVzdCApIHtcblx0dmFyIG5vZGVOYW1lID0gZGVzdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdC8vIEZhaWxzIHRvIHBlcnNpc3QgdGhlIGNoZWNrZWQgc3RhdGUgb2YgYSBjbG9uZWQgY2hlY2tib3ggb3IgcmFkaW8gYnV0dG9uLlxuXHRpZiAoIG5vZGVOYW1lID09PSBcImlucHV0XCIgJiYgcmNoZWNrYWJsZVR5cGUudGVzdCggc3JjLnR5cGUgKSApIHtcblx0XHRkZXN0LmNoZWNrZWQgPSBzcmMuY2hlY2tlZDtcblxuXHQvLyBGYWlscyB0byByZXR1cm4gdGhlIHNlbGVjdGVkIG9wdGlvbiB0byB0aGUgZGVmYXVsdCBzZWxlY3RlZCBzdGF0ZSB3aGVuIGNsb25pbmcgb3B0aW9uc1xuXHR9IGVsc2UgaWYgKCBub2RlTmFtZSA9PT0gXCJpbnB1dFwiIHx8IG5vZGVOYW1lID09PSBcInRleHRhcmVhXCIgKSB7XG5cdFx0ZGVzdC5kZWZhdWx0VmFsdWUgPSBzcmMuZGVmYXVsdFZhbHVlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRvbU1hbmlwKCBjb2xsZWN0aW9uLCBhcmdzLCBjYWxsYmFjaywgaWdub3JlZCApIHtcblxuXHQvLyBGbGF0dGVuIGFueSBuZXN0ZWQgYXJyYXlzXG5cdGFyZ3MgPSBmbGF0KCBhcmdzICk7XG5cblx0dmFyIGZyYWdtZW50LCBmaXJzdCwgc2NyaXB0cywgaGFzU2NyaXB0cywgbm9kZSwgZG9jLFxuXHRcdGkgPSAwLFxuXHRcdGwgPSBjb2xsZWN0aW9uLmxlbmd0aCxcblx0XHRpTm9DbG9uZSA9IGwgLSAxLFxuXHRcdHZhbHVlID0gYXJnc1sgMCBdLFxuXHRcdHZhbHVlSXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24oIHZhbHVlICk7XG5cblx0Ly8gV2UgY2FuJ3QgY2xvbmVOb2RlIGZyYWdtZW50cyB0aGF0IGNvbnRhaW4gY2hlY2tlZCwgaW4gV2ViS2l0XG5cdGlmICggdmFsdWVJc0Z1bmN0aW9uIHx8XG5cdFx0XHQoIGwgPiAxICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHQhc3VwcG9ydC5jaGVja0Nsb25lICYmIHJjaGVja2VkLnRlc3QoIHZhbHVlICkgKSApIHtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5lYWNoKCBmdW5jdGlvbiggaW5kZXggKSB7XG5cdFx0XHR2YXIgc2VsZiA9IGNvbGxlY3Rpb24uZXEoIGluZGV4ICk7XG5cdFx0XHRpZiAoIHZhbHVlSXNGdW5jdGlvbiApIHtcblx0XHRcdFx0YXJnc1sgMCBdID0gdmFsdWUuY2FsbCggdGhpcywgaW5kZXgsIHNlbGYuaHRtbCgpICk7XG5cdFx0XHR9XG5cdFx0XHRkb21NYW5pcCggc2VsZiwgYXJncywgY2FsbGJhY2ssIGlnbm9yZWQgKTtcblx0XHR9ICk7XG5cdH1cblxuXHRpZiAoIGwgKSB7XG5cdFx0ZnJhZ21lbnQgPSBidWlsZEZyYWdtZW50KCBhcmdzLCBjb2xsZWN0aW9uWyAwIF0ub3duZXJEb2N1bWVudCwgZmFsc2UsIGNvbGxlY3Rpb24sIGlnbm9yZWQgKTtcblx0XHRmaXJzdCA9IGZyYWdtZW50LmZpcnN0Q2hpbGQ7XG5cblx0XHRpZiAoIGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICkge1xuXHRcdFx0ZnJhZ21lbnQgPSBmaXJzdDtcblx0XHR9XG5cblx0XHQvLyBSZXF1aXJlIGVpdGhlciBuZXcgY29udGVudCBvciBhbiBpbnRlcmVzdCBpbiBpZ25vcmVkIGVsZW1lbnRzIHRvIGludm9rZSB0aGUgY2FsbGJhY2tcblx0XHRpZiAoIGZpcnN0IHx8IGlnbm9yZWQgKSB7XG5cdFx0XHRzY3JpcHRzID0galF1ZXJ5Lm1hcCggZ2V0QWxsKCBmcmFnbWVudCwgXCJzY3JpcHRcIiApLCBkaXNhYmxlU2NyaXB0ICk7XG5cdFx0XHRoYXNTY3JpcHRzID0gc2NyaXB0cy5sZW5ndGg7XG5cblx0XHRcdC8vIFVzZSB0aGUgb3JpZ2luYWwgZnJhZ21lbnQgZm9yIHRoZSBsYXN0IGl0ZW1cblx0XHRcdC8vIGluc3RlYWQgb2YgdGhlIGZpcnN0IGJlY2F1c2UgaXQgY2FuIGVuZCB1cFxuXHRcdFx0Ly8gYmVpbmcgZW1wdGllZCBpbmNvcnJlY3RseSBpbiBjZXJ0YWluIHNpdHVhdGlvbnMgKHRyYWMtODA3MCkuXG5cdFx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdG5vZGUgPSBmcmFnbWVudDtcblxuXHRcdFx0XHRpZiAoIGkgIT09IGlOb0Nsb25lICkge1xuXHRcdFx0XHRcdG5vZGUgPSBqUXVlcnkuY2xvbmUoIG5vZGUsIHRydWUsIHRydWUgKTtcblxuXHRcdFx0XHRcdC8vIEtlZXAgcmVmZXJlbmNlcyB0byBjbG9uZWQgc2NyaXB0cyBmb3IgbGF0ZXIgcmVzdG9yYXRpb25cblx0XHRcdFx0XHRpZiAoIGhhc1NjcmlwdHMgKSB7XG5cblx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuXHRcdFx0XHRcdFx0Ly8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXHRcdFx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCBzY3JpcHRzLCBnZXRBbGwoIG5vZGUsIFwic2NyaXB0XCIgKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhbGxiYWNrLmNhbGwoIGNvbGxlY3Rpb25bIGkgXSwgbm9kZSwgaSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGhhc1NjcmlwdHMgKSB7XG5cdFx0XHRcdGRvYyA9IHNjcmlwdHNbIHNjcmlwdHMubGVuZ3RoIC0gMSBdLm93bmVyRG9jdW1lbnQ7XG5cblx0XHRcdFx0Ly8gUmUtZW5hYmxlIHNjcmlwdHNcblx0XHRcdFx0alF1ZXJ5Lm1hcCggc2NyaXB0cywgcmVzdG9yZVNjcmlwdCApO1xuXG5cdFx0XHRcdC8vIEV2YWx1YXRlIGV4ZWN1dGFibGUgc2NyaXB0cyBvbiBmaXJzdCBkb2N1bWVudCBpbnNlcnRpb25cblx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBoYXNTY3JpcHRzOyBpKysgKSB7XG5cdFx0XHRcdFx0bm9kZSA9IHNjcmlwdHNbIGkgXTtcblx0XHRcdFx0XHRpZiAoIHJzY3JpcHRUeXBlLnRlc3QoIG5vZGUudHlwZSB8fCBcIlwiICkgJiZcblx0XHRcdFx0XHRcdCFkYXRhUHJpdi5hY2Nlc3MoIG5vZGUsIFwiZ2xvYmFsRXZhbFwiICkgJiZcblx0XHRcdFx0XHRcdGpRdWVyeS5jb250YWlucyggZG9jLCBub2RlICkgKSB7XG5cblx0XHRcdFx0XHRcdGlmICggbm9kZS5zcmMgJiYgKCBub2RlLnR5cGUgfHwgXCJcIiApLnRvTG93ZXJDYXNlKCkgICE9PSBcIm1vZHVsZVwiICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIE9wdGlvbmFsIEFKQVggZGVwZW5kZW5jeSwgYnV0IHdvbid0IHJ1biBzY3JpcHRzIGlmIG5vdCBwcmVzZW50XG5cdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5Ll9ldmFsVXJsICYmICFub2RlLm5vTW9kdWxlICkge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5fZXZhbFVybCggbm9kZS5zcmMsIHtcblx0XHRcdFx0XHRcdFx0XHRcdG5vbmNlOiBub2RlLm5vbmNlIHx8IG5vZGUuZ2V0QXR0cmlidXRlKCBcIm5vbmNlXCIgKVxuXHRcdFx0XHRcdFx0XHRcdH0sIGRvYyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFVud3JhcCBhIENEQVRBIHNlY3Rpb24gY29udGFpbmluZyBzY3JpcHQgY29udGVudHMuIFRoaXMgc2hvdWxkbid0IGJlXG5cdFx0XHRcdFx0XHRcdC8vIG5lZWRlZCBhcyBpbiBYTUwgZG9jdW1lbnRzIHRoZXkncmUgYWxyZWFkeSBub3QgdmlzaWJsZSB3aGVuXG5cdFx0XHRcdFx0XHRcdC8vIGluc3BlY3RpbmcgZWxlbWVudCBjb250ZW50cyBhbmQgaW4gSFRNTCBkb2N1bWVudHMgdGhleSBoYXZlIG5vXG5cdFx0XHRcdFx0XHRcdC8vIG1lYW5pbmcgYnV0IHdlJ3JlIHByZXNlcnZpbmcgdGhhdCBsb2dpYyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5cdFx0XHRcdFx0XHRcdC8vIFRoaXMgd2lsbCBiZSByZW1vdmVkIGNvbXBsZXRlbHkgaW4gNC4wLiBTZWUgZ2gtNDkwNC5cblx0XHRcdFx0XHRcdFx0RE9NRXZhbCggbm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKCByY2xlYW5TY3JpcHQsIFwiXCIgKSwgbm9kZSwgZG9jICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNvbGxlY3Rpb247XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSggZWxlbSwgc2VsZWN0b3IsIGtlZXBEYXRhICkge1xuXHR2YXIgbm9kZSxcblx0XHRub2RlcyA9IHNlbGVjdG9yID8galF1ZXJ5LmZpbHRlciggc2VsZWN0b3IsIGVsZW0gKSA6IGVsZW0sXG5cdFx0aSA9IDA7XG5cblx0Zm9yICggOyAoIG5vZGUgPSBub2Rlc1sgaSBdICkgIT0gbnVsbDsgaSsrICkge1xuXHRcdGlmICggIWtlZXBEYXRhICYmIG5vZGUubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIG5vZGUgKSApO1xuXHRcdH1cblxuXHRcdGlmICggbm9kZS5wYXJlbnROb2RlICkge1xuXHRcdFx0aWYgKCBrZWVwRGF0YSAmJiBpc0F0dGFjaGVkKCBub2RlICkgKSB7XG5cdFx0XHRcdHNldEdsb2JhbEV2YWwoIGdldEFsbCggbm9kZSwgXCJzY3JpcHRcIiApICk7XG5cdFx0XHR9XG5cdFx0XHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIG5vZGUgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWxlbTtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXHRodG1sUHJlZmlsdGVyOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHRyZXR1cm4gaHRtbDtcblx0fSxcblxuXHRjbG9uZTogZnVuY3Rpb24oIGVsZW0sIGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuXHRcdHZhciBpLCBsLCBzcmNFbGVtZW50cywgZGVzdEVsZW1lbnRzLFxuXHRcdFx0Y2xvbmUgPSBlbGVtLmNsb25lTm9kZSggdHJ1ZSApLFxuXHRcdFx0aW5QYWdlID0gaXNBdHRhY2hlZCggZWxlbSApO1xuXG5cdFx0Ly8gRml4IElFIGNsb25pbmcgaXNzdWVzXG5cdFx0aWYgKCAhc3VwcG9ydC5ub0Nsb25lQ2hlY2tlZCAmJiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgZWxlbS5ub2RlVHlwZSA9PT0gMTEgKSAmJlxuXHRcdFx0XHQhalF1ZXJ5LmlzWE1MRG9jKCBlbGVtICkgKSB7XG5cblx0XHRcdC8vIFdlIGVzY2hldyBqUXVlcnkjZmluZCBoZXJlIGZvciBwZXJmb3JtYW5jZSByZWFzb25zOlxuXHRcdFx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL2dldGFsbC12cy1zaXp6bGUvMlxuXHRcdFx0ZGVzdEVsZW1lbnRzID0gZ2V0QWxsKCBjbG9uZSApO1xuXHRcdFx0c3JjRWxlbWVudHMgPSBnZXRBbGwoIGVsZW0gKTtcblxuXHRcdFx0Zm9yICggaSA9IDAsIGwgPSBzcmNFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdGZpeElucHV0KCBzcmNFbGVtZW50c1sgaSBdLCBkZXN0RWxlbWVudHNbIGkgXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvcHkgdGhlIGV2ZW50cyBmcm9tIHRoZSBvcmlnaW5hbCB0byB0aGUgY2xvbmVcblx0XHRpZiAoIGRhdGFBbmRFdmVudHMgKSB7XG5cdFx0XHRpZiAoIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuXHRcdFx0XHRzcmNFbGVtZW50cyA9IHNyY0VsZW1lbnRzIHx8IGdldEFsbCggZWxlbSApO1xuXHRcdFx0XHRkZXN0RWxlbWVudHMgPSBkZXN0RWxlbWVudHMgfHwgZ2V0QWxsKCBjbG9uZSApO1xuXG5cdFx0XHRcdGZvciAoIGkgPSAwLCBsID0gc3JjRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRcdGNsb25lQ29weUV2ZW50KCBzcmNFbGVtZW50c1sgaSBdLCBkZXN0RWxlbWVudHNbIGkgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbG9uZUNvcHlFdmVudCggZWxlbSwgY2xvbmUgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG5cdFx0ZGVzdEVsZW1lbnRzID0gZ2V0QWxsKCBjbG9uZSwgXCJzY3JpcHRcIiApO1xuXHRcdGlmICggZGVzdEVsZW1lbnRzLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRzZXRHbG9iYWxFdmFsKCBkZXN0RWxlbWVudHMsICFpblBhZ2UgJiYgZ2V0QWxsKCBlbGVtLCBcInNjcmlwdFwiICkgKTtcblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gdGhlIGNsb25lZCBzZXRcblx0XHRyZXR1cm4gY2xvbmU7XG5cdH0sXG5cblx0Y2xlYW5EYXRhOiBmdW5jdGlvbiggZWxlbXMgKSB7XG5cdFx0dmFyIGRhdGEsIGVsZW0sIHR5cGUsXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWwsXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgKCBlbGVtID0gZWxlbXNbIGkgXSApICE9PSB1bmRlZmluZWQ7IGkrKyApIHtcblx0XHRcdGlmICggYWNjZXB0RGF0YSggZWxlbSApICkge1xuXHRcdFx0XHRpZiAoICggZGF0YSA9IGVsZW1bIGRhdGFQcml2LmV4cGFuZG8gXSApICkge1xuXHRcdFx0XHRcdGlmICggZGF0YS5ldmVudHMgKSB7XG5cdFx0XHRcdFx0XHRmb3IgKCB0eXBlIGluIGRhdGEuZXZlbnRzICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIHNwZWNpYWxbIHR5cGUgXSApIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuZXZlbnQucmVtb3ZlKCBlbGVtLCB0eXBlICk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gVGhpcyBpcyBhIHNob3J0Y3V0IHRvIGF2b2lkIGpRdWVyeS5ldmVudC5yZW1vdmUncyBvdmVyaGVhZFxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5yZW1vdmVFdmVudCggZWxlbSwgdHlwZSwgZGF0YS5oYW5kbGUgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTM1IC0gNDUrXG5cdFx0XHRcdFx0Ly8gQXNzaWduIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIHVzaW5nIGRlbGV0ZSwgc2VlIERhdGEjcmVtb3ZlXG5cdFx0XHRcdFx0ZWxlbVsgZGF0YVByaXYuZXhwYW5kbyBdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggZWxlbVsgZGF0YVVzZXIuZXhwYW5kbyBdICkge1xuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NStcblx0XHRcdFx0XHQvLyBBc3NpZ24gdW5kZWZpbmVkIGluc3RlYWQgb2YgdXNpbmcgZGVsZXRlLCBzZWUgRGF0YSNyZW1vdmVcblx0XHRcdFx0XHRlbGVtWyBkYXRhVXNlci5leHBhbmRvIF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRkZXRhY2g6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gcmVtb3ZlKCB0aGlzLCBzZWxlY3RvciwgdHJ1ZSApO1xuXHR9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiByZW1vdmUoIHRoaXMsIHNlbGVjdG9yICk7XG5cdH0sXG5cblx0dGV4dDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID9cblx0XHRcdFx0alF1ZXJ5LnRleHQoIHRoaXMgKSA6XG5cdFx0XHRcdHRoaXMuZW1wdHkoKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMubm9kZVR5cGUgPT09IDEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gMTEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0XHRcdHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHR9LCBudWxsLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCApO1xuXHR9LFxuXG5cdGFwcGVuZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdHZhciB0YXJnZXQgPSBtYW5pcHVsYXRpb25UYXJnZXQoIHRoaXMsIGVsZW0gKTtcblx0XHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKCBlbGVtICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdHByZXBlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gbWFuaXB1bGF0aW9uVGFyZ2V0KCB0aGlzLCBlbGVtICk7XG5cdFx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoIGVsZW0sIHRhcmdldC5maXJzdENoaWxkICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGJlZm9yZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIGVsZW0sIHRoaXMgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0YWZ0ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5wYXJlbnROb2RlICkge1xuXHRcdFx0XHR0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBlbGVtLCB0aGlzLm5leHRTaWJsaW5nICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGVtcHR5OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZWxlbSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0Zm9yICggOyAoIGVsZW0gPSB0aGlzWyBpIF0gKSAhPSBudWxsOyBpKysgKSB7XG5cdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cblx0XHRcdFx0Ly8gUHJldmVudCBtZW1vcnkgbGVha3Ncblx0XHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCBlbGVtLCBmYWxzZSApICk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIGFueSByZW1haW5pbmcgbm9kZXNcblx0XHRcdFx0ZWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Y2xvbmU6IGZ1bmN0aW9uKCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApIHtcblx0XHRkYXRhQW5kRXZlbnRzID0gZGF0YUFuZEV2ZW50cyA9PSBudWxsID8gZmFsc2UgOiBkYXRhQW5kRXZlbnRzO1xuXHRcdGRlZXBEYXRhQW5kRXZlbnRzID0gZGVlcERhdGFBbmRFdmVudHMgPT0gbnVsbCA/IGRhdGFBbmRFdmVudHMgOiBkZWVwRGF0YUFuZEV2ZW50cztcblxuXHRcdHJldHVybiB0aGlzLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LmNsb25lKCB0aGlzLCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApO1xuXHRcdH0gKTtcblx0fSxcblxuXHRodG1sOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0dmFyIGVsZW0gPSB0aGlzWyAwIF0gfHwge30sXG5cdFx0XHRcdGkgPSAwLFxuXHRcdFx0XHRsID0gdGhpcy5sZW5ndGg7XG5cblx0XHRcdGlmICggdmFsdWUgPT09IHVuZGVmaW5lZCAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRyZXR1cm4gZWxlbS5pbm5lckhUTUw7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNlZSBpZiB3ZSBjYW4gdGFrZSBhIHNob3J0Y3V0IGFuZCBqdXN0IHVzZSBpbm5lckhUTUxcblx0XHRcdGlmICggdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmICFybm9Jbm5lcmh0bWwudGVzdCggdmFsdWUgKSAmJlxuXHRcdFx0XHQhd3JhcE1hcFsgKCBydGFnTmFtZS5leGVjKCB2YWx1ZSApIHx8IFsgXCJcIiwgXCJcIiBdIClbIDEgXS50b0xvd2VyQ2FzZSgpIF0gKSB7XG5cblx0XHRcdFx0dmFsdWUgPSBqUXVlcnkuaHRtbFByZWZpbHRlciggdmFsdWUgKTtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRcdGVsZW0gPSB0aGlzWyBpIF0gfHwge307XG5cblx0XHRcdFx0XHRcdC8vIFJlbW92ZSBlbGVtZW50IG5vZGVzIGFuZCBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuXHRcdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRcdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIGVsZW0sIGZhbHNlICkgKTtcblx0XHRcdFx0XHRcdFx0ZWxlbS5pbm5lckhUTUwgPSB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRlbGVtID0gMDtcblxuXHRcdFx0XHQvLyBJZiB1c2luZyBpbm5lckhUTUwgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgdXNlIHRoZSBmYWxsYmFjayBtZXRob2Rcblx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHRcdHRoaXMuZW1wdHkoKS5hcHBlbmQoIHZhbHVlICk7XG5cdFx0XHR9XG5cdFx0fSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggKTtcblx0fSxcblxuXHRyZXBsYWNlV2l0aDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGlnbm9yZWQgPSBbXTtcblxuXHRcdC8vIE1ha2UgdGhlIGNoYW5nZXMsIHJlcGxhY2luZyBlYWNoIG5vbi1pZ25vcmVkIGNvbnRleHQgZWxlbWVudCB3aXRoIHRoZSBuZXcgY29udGVudFxuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cblx0XHRcdGlmICggalF1ZXJ5LmluQXJyYXkoIHRoaXMsIGlnbm9yZWQgKSA8IDAgKSB7XG5cdFx0XHRcdGpRdWVyeS5jbGVhbkRhdGEoIGdldEFsbCggdGhpcyApICk7XG5cdFx0XHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQoIGVsZW0sIHRoaXMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0Ly8gRm9yY2UgY2FsbGJhY2sgaW52b2NhdGlvblxuXHRcdH0sIGlnbm9yZWQgKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCgge1xuXHRhcHBlbmRUbzogXCJhcHBlbmRcIixcblx0cHJlcGVuZFRvOiBcInByZXBlbmRcIixcblx0aW5zZXJ0QmVmb3JlOiBcImJlZm9yZVwiLFxuXHRpbnNlcnRBZnRlcjogXCJhZnRlclwiLFxuXHRyZXBsYWNlQWxsOiBcInJlcGxhY2VXaXRoXCJcbn0sIGZ1bmN0aW9uKCBuYW1lLCBvcmlnaW5hbCApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dmFyIGVsZW1zLFxuXHRcdFx0cmV0ID0gW10sXG5cdFx0XHRpbnNlcnQgPSBqUXVlcnkoIHNlbGVjdG9yICksXG5cdFx0XHRsYXN0ID0gaW5zZXJ0Lmxlbmd0aCAtIDEsXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgaSA8PSBsYXN0OyBpKysgKSB7XG5cdFx0XHRlbGVtcyA9IGkgPT09IGxhc3QgPyB0aGlzIDogdGhpcy5jbG9uZSggdHJ1ZSApO1xuXHRcdFx0alF1ZXJ5KCBpbnNlcnRbIGkgXSApWyBvcmlnaW5hbCBdKCBlbGVtcyApO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHRcdC8vIC5nZXQoKSBiZWNhdXNlIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0XHRcdHB1c2guYXBwbHkoIHJldCwgZWxlbXMuZ2V0KCkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHJldCApO1xuXHR9O1xufSApO1xudmFyIHJudW1ub25weCA9IG5ldyBSZWdFeHAoIFwiXihcIiArIHBudW0gKyBcIikoPyFweClbYS16JV0rJFwiLCBcImlcIiApO1xuXG52YXIgcmN1c3RvbVByb3AgPSAvXi0tLztcblxuXG52YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHksIEZpcmVmb3ggPD0zMCAodHJhYy0xNTA5OCwgdHJhYy0xNDE1MClcblx0XHQvLyBJRSB0aHJvd3Mgb24gZWxlbWVudHMgY3JlYXRlZCBpbiBwb3B1cHNcblx0XHQvLyBGRiBtZWFud2hpbGUgdGhyb3dzIG9uIGZyYW1lIGVsZW1lbnRzIHRocm91Z2ggXCJkZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlXCJcblx0XHR2YXIgdmlldyA9IGVsZW0ub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcblxuXHRcdGlmICggIXZpZXcgfHwgIXZpZXcub3BlbmVyICkge1xuXHRcdFx0dmlldyA9IHdpbmRvdztcblx0XHR9XG5cblx0XHRyZXR1cm4gdmlldy5nZXRDb21wdXRlZFN0eWxlKCBlbGVtICk7XG5cdH07XG5cbnZhciBzd2FwID0gZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIGNhbGxiYWNrICkge1xuXHR2YXIgcmV0LCBuYW1lLFxuXHRcdG9sZCA9IHt9O1xuXG5cdC8vIFJlbWVtYmVyIHRoZSBvbGQgdmFsdWVzLCBhbmQgaW5zZXJ0IHRoZSBuZXcgb25lc1xuXHRmb3IgKCBuYW1lIGluIG9wdGlvbnMgKSB7XG5cdFx0b2xkWyBuYW1lIF0gPSBlbGVtLnN0eWxlWyBuYW1lIF07XG5cdFx0ZWxlbS5zdHlsZVsgbmFtZSBdID0gb3B0aW9uc1sgbmFtZSBdO1xuXHR9XG5cblx0cmV0ID0gY2FsbGJhY2suY2FsbCggZWxlbSApO1xuXG5cdC8vIFJldmVydCB0aGUgb2xkIHZhbHVlc1xuXHRmb3IgKCBuYW1lIGluIG9wdGlvbnMgKSB7XG5cdFx0ZWxlbS5zdHlsZVsgbmFtZSBdID0gb2xkWyBuYW1lIF07XG5cdH1cblxuXHRyZXR1cm4gcmV0O1xufTtcblxuXG52YXIgcmJveFN0eWxlID0gbmV3IFJlZ0V4cCggY3NzRXhwYW5kLmpvaW4oIFwifFwiICksIFwiaVwiICk7XG5cblxuXG4oIGZ1bmN0aW9uKCkge1xuXG5cdC8vIEV4ZWN1dGluZyBib3RoIHBpeGVsUG9zaXRpb24gJiBib3hTaXppbmdSZWxpYWJsZSB0ZXN0cyByZXF1aXJlIG9ubHkgb25lIGxheW91dFxuXHQvLyBzbyB0aGV5J3JlIGV4ZWN1dGVkIGF0IHRoZSBzYW1lIHRpbWUgdG8gc2F2ZSB0aGUgc2Vjb25kIGNvbXB1dGF0aW9uLlxuXHRmdW5jdGlvbiBjb21wdXRlU3R5bGVUZXN0cygpIHtcblxuXHRcdC8vIFRoaXMgaXMgYSBzaW5nbGV0b24sIHdlIG5lZWQgdG8gZXhlY3V0ZSBpdCBvbmx5IG9uY2Vcblx0XHRpZiAoICFkaXYgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHg7d2lkdGg6NjBweDtcIiArXG5cdFx0XHRcIm1hcmdpbi10b3A6MXB4O3BhZGRpbmc6MDtib3JkZXI6MFwiO1xuXHRcdGRpdi5zdHlsZS5jc3NUZXh0ID1cblx0XHRcdFwicG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6c2Nyb2xsO1wiICtcblx0XHRcdFwibWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDtcIiArXG5cdFx0XHRcIndpZHRoOjYwJTt0b3A6MSVcIjtcblx0XHRkb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoIGNvbnRhaW5lciApLmFwcGVuZENoaWxkKCBkaXYgKTtcblxuXHRcdHZhciBkaXZTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBkaXYgKTtcblx0XHRwaXhlbFBvc2l0aW9uVmFsID0gZGl2U3R5bGUudG9wICE9PSBcIjElXCI7XG5cblx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCAtIDQuMyBvbmx5LCBGaXJlZm94IDw9MyAtIDQ0XG5cdFx0cmVsaWFibGVNYXJnaW5MZWZ0VmFsID0gcm91bmRQaXhlbE1lYXN1cmVzKCBkaXZTdHlsZS5tYXJnaW5MZWZ0ICkgPT09IDEyO1xuXG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgLSA0LjMgb25seSwgU2FmYXJpIDw9OS4xIC0gMTAuMSwgaU9TIDw9Ny4wIC0gOS4zXG5cdFx0Ly8gU29tZSBzdHlsZXMgY29tZSBiYWNrIHdpdGggcGVyY2VudGFnZSB2YWx1ZXMsIGV2ZW4gdGhvdWdoIHRoZXkgc2hvdWxkbid0XG5cdFx0ZGl2LnN0eWxlLnJpZ2h0ID0gXCI2MCVcIjtcblx0XHRwaXhlbEJveFN0eWxlc1ZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyggZGl2U3R5bGUucmlnaHQgKSA9PT0gMzY7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seVxuXHRcdC8vIERldGVjdCBtaXNyZXBvcnRpbmcgb2YgY29udGVudCBkaW1lbnNpb25zIGZvciBib3gtc2l6aW5nOmJvcmRlci1ib3ggZWxlbWVudHNcblx0XHRib3hTaXppbmdSZWxpYWJsZVZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyggZGl2U3R5bGUud2lkdGggKSA9PT0gMzY7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IG9ubHlcblx0XHQvLyBEZXRlY3Qgb3ZlcmZsb3c6c2Nyb2xsIHNjcmV3aW5lc3MgKGdoLTM2OTkpXG5cdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9NjRcblx0XHQvLyBEb24ndCBnZXQgdHJpY2tlZCB3aGVuIHpvb20gYWZmZWN0cyBvZmZzZXRXaWR0aCAoZ2gtNDAyOSlcblx0XHRkaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cdFx0c2Nyb2xsYm94U2l6ZVZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyggZGl2Lm9mZnNldFdpZHRoIC8gMyApID09PSAxMjtcblxuXHRcdGRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZCggY29udGFpbmVyICk7XG5cblx0XHQvLyBOdWxsaWZ5IHRoZSBkaXYgc28gaXQgd291bGRuJ3QgYmUgc3RvcmVkIGluIHRoZSBtZW1vcnkgYW5kXG5cdFx0Ly8gaXQgd2lsbCBhbHNvIGJlIGEgc2lnbiB0aGF0IGNoZWNrcyBhbHJlYWR5IHBlcmZvcm1lZFxuXHRcdGRpdiA9IG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiByb3VuZFBpeGVsTWVhc3VyZXMoIG1lYXN1cmUgKSB7XG5cdFx0cmV0dXJuIE1hdGgucm91bmQoIHBhcnNlRmxvYXQoIG1lYXN1cmUgKSApO1xuXHR9XG5cblx0dmFyIHBpeGVsUG9zaXRpb25WYWwsIGJveFNpemluZ1JlbGlhYmxlVmFsLCBzY3JvbGxib3hTaXplVmFsLCBwaXhlbEJveFN0eWxlc1ZhbCxcblx0XHRyZWxpYWJsZVRyRGltZW5zaW9uc1ZhbCwgcmVsaWFibGVNYXJnaW5MZWZ0VmFsLFxuXHRcdGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSxcblx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICk7XG5cblx0Ly8gRmluaXNoIGVhcmx5IGluIGxpbWl0ZWQgKG5vbi1icm93c2VyKSBlbnZpcm9ubWVudHNcblx0aWYgKCAhZGl2LnN0eWxlICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcblx0Ly8gU3R5bGUgb2YgY2xvbmVkIGVsZW1lbnQgYWZmZWN0cyBzb3VyY2UgZWxlbWVudCBjbG9uZWQgKHRyYWMtODkwOClcblx0ZGl2LnN0eWxlLmJhY2tncm91bmRDbGlwID0gXCJjb250ZW50LWJveFwiO1xuXHRkaXYuY2xvbmVOb2RlKCB0cnVlICkuc3R5bGUuYmFja2dyb3VuZENsaXAgPSBcIlwiO1xuXHRzdXBwb3J0LmNsZWFyQ2xvbmVTdHlsZSA9IGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9PT0gXCJjb250ZW50LWJveFwiO1xuXG5cdGpRdWVyeS5leHRlbmQoIHN1cHBvcnQsIHtcblx0XHRib3hTaXppbmdSZWxpYWJsZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIGJveFNpemluZ1JlbGlhYmxlVmFsO1xuXHRcdH0sXG5cdFx0cGl4ZWxCb3hTdHlsZXM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcblx0XHRcdHJldHVybiBwaXhlbEJveFN0eWxlc1ZhbDtcblx0XHR9LFxuXHRcdHBpeGVsUG9zaXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcblx0XHRcdHJldHVybiBwaXhlbFBvc2l0aW9uVmFsO1xuXHRcdH0sXG5cdFx0cmVsaWFibGVNYXJnaW5MZWZ0OiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbXB1dGVTdHlsZVRlc3RzKCk7XG5cdFx0XHRyZXR1cm4gcmVsaWFibGVNYXJnaW5MZWZ0VmFsO1xuXHRcdH0sXG5cdFx0c2Nyb2xsYm94U2l6ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIHNjcm9sbGJveFNpemVWYWw7XG5cdFx0fSxcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSssIEVkZ2UgMTUgLSAxOCtcblx0XHQvLyBJRS9FZGdlIG1pc3JlcG9ydCBgZ2V0Q29tcHV0ZWRTdHlsZWAgb2YgdGFibGUgcm93cyB3aXRoIHdpZHRoL2hlaWdodFxuXHRcdC8vIHNldCBpbiBDU1Mgd2hpbGUgYG9mZnNldCpgIHByb3BlcnRpZXMgcmVwb3J0IGNvcnJlY3QgdmFsdWVzLlxuXHRcdC8vIEJlaGF2aW9yIGluIElFIDkgaXMgbW9yZSBzdWJ0bGUgdGhhbiBpbiBuZXdlciB2ZXJzaW9ucyAmIGl0IHBhc3Nlc1xuXHRcdC8vIHNvbWUgdmVyc2lvbnMgb2YgdGhpcyB0ZXN0OyBtYWtlIHN1cmUgbm90IHRvIG1ha2UgaXQgcGFzcyB0aGVyZSFcblx0XHQvL1xuXHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggNzArXG5cdFx0Ly8gT25seSBGaXJlZm94IGluY2x1ZGVzIGJvcmRlciB3aWR0aHNcblx0XHQvLyBpbiBjb21wdXRlZCBkaW1lbnNpb25zLiAoZ2gtNDUyOSlcblx0XHRyZWxpYWJsZVRyRGltZW5zaW9uczogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdGFibGUsIHRyLCB0ckNoaWxkLCB0clN0eWxlO1xuXHRcdFx0aWYgKCByZWxpYWJsZVRyRGltZW5zaW9uc1ZhbCA9PSBudWxsICkge1xuXHRcdFx0XHR0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwidGFibGVcIiApO1xuXHRcdFx0XHR0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwidHJcIiApO1xuXHRcdFx0XHR0ckNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApO1xuXG5cdFx0XHRcdHRhYmxlLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHg7Ym9yZGVyLWNvbGxhcHNlOnNlcGFyYXRlXCI7XG5cdFx0XHRcdHRyLnN0eWxlLmNzc1RleHQgPSBcImJveC1zaXppbmc6Y29udGVudC1ib3g7Ym9yZGVyOjFweCBzb2xpZFwiO1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZSA4Nitcblx0XHRcdFx0Ly8gSGVpZ2h0IHNldCB0aHJvdWdoIGNzc1RleHQgZG9lcyBub3QgZ2V0IGFwcGxpZWQuXG5cdFx0XHRcdC8vIENvbXB1dGVkIGhlaWdodCB0aGVuIGNvbWVzIGJhY2sgYXMgMC5cblx0XHRcdFx0dHIuc3R5bGUuaGVpZ2h0ID0gXCIxcHhcIjtcblx0XHRcdFx0dHJDaGlsZC5zdHlsZS5oZWlnaHQgPSBcIjlweFwiO1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgOCBDaHJvbWUgODYrXG5cdFx0XHRcdC8vIEluIG91ciBib2R5QmFja2dyb3VuZC5odG1sIGlmcmFtZSxcblx0XHRcdFx0Ly8gZGlzcGxheSBmb3IgYWxsIGRpdiBlbGVtZW50cyBpcyBzZXQgdG8gXCJpbmxpbmVcIixcblx0XHRcdFx0Ly8gd2hpY2ggY2F1c2VzIGEgcHJvYmxlbSBvbmx5IGluIEFuZHJvaWQgOCBDaHJvbWUgODYuXG5cdFx0XHRcdC8vIEVuc3VyaW5nIHRoZSBkaXYgaXMgYGRpc3BsYXk6IGJsb2NrYFxuXHRcdFx0XHQvLyBnZXRzIGFyb3VuZCB0aGlzIGlzc3VlLlxuXHRcdFx0XHR0ckNoaWxkLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cblx0XHRcdFx0ZG9jdW1lbnRFbGVtZW50XG5cdFx0XHRcdFx0LmFwcGVuZENoaWxkKCB0YWJsZSApXG5cdFx0XHRcdFx0LmFwcGVuZENoaWxkKCB0ciApXG5cdFx0XHRcdFx0LmFwcGVuZENoaWxkKCB0ckNoaWxkICk7XG5cblx0XHRcdFx0dHJTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCB0ciApO1xuXHRcdFx0XHRyZWxpYWJsZVRyRGltZW5zaW9uc1ZhbCA9ICggcGFyc2VJbnQoIHRyU3R5bGUuaGVpZ2h0LCAxMCApICtcblx0XHRcdFx0XHRwYXJzZUludCggdHJTdHlsZS5ib3JkZXJUb3BXaWR0aCwgMTAgKSArXG5cdFx0XHRcdFx0cGFyc2VJbnQoIHRyU3R5bGUuYm9yZGVyQm90dG9tV2lkdGgsIDEwICkgKSA9PT0gdHIub2Zmc2V0SGVpZ2h0O1xuXG5cdFx0XHRcdGRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZCggdGFibGUgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZWxpYWJsZVRyRGltZW5zaW9uc1ZhbDtcblx0XHR9XG5cdH0gKTtcbn0gKSgpO1xuXG5cbmZ1bmN0aW9uIGN1ckNTUyggZWxlbSwgbmFtZSwgY29tcHV0ZWQgKSB7XG5cdHZhciB3aWR0aCwgbWluV2lkdGgsIG1heFdpZHRoLCByZXQsXG5cdFx0aXNDdXN0b21Qcm9wID0gcmN1c3RvbVByb3AudGVzdCggbmFtZSApLFxuXG5cdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA1MStcblx0XHQvLyBSZXRyaWV2aW5nIHN0eWxlIGJlZm9yZSBjb21wdXRlZCBzb21laG93XG5cdFx0Ly8gZml4ZXMgYW4gaXNzdWUgd2l0aCBnZXR0aW5nIHdyb25nIHZhbHVlc1xuXHRcdC8vIG9uIGRldGFjaGVkIGVsZW1lbnRzXG5cdFx0c3R5bGUgPSBlbGVtLnN0eWxlO1xuXG5cdGNvbXB1dGVkID0gY29tcHV0ZWQgfHwgZ2V0U3R5bGVzKCBlbGVtICk7XG5cblx0Ly8gZ2V0UHJvcGVydHlWYWx1ZSBpcyBuZWVkZWQgZm9yOlxuXHQvLyAgIC5jc3MoJ2ZpbHRlcicpIChJRSA5IG9ubHksIHRyYWMtMTI1MzcpXG5cdC8vICAgLmNzcygnLS1jdXN0b21Qcm9wZXJ0eSkgKGdoLTMxNDQpXG5cdGlmICggY29tcHV0ZWQgKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMStcblx0XHQvLyBJRSBvbmx5IHN1cHBvcnRzIGBcImZsb2F0XCJgIGluIGBnZXRQcm9wZXJ0eVZhbHVlYDsgaW4gY29tcHV0ZWQgc3R5bGVzXG5cdFx0Ly8gaXQncyBvbmx5IGF2YWlsYWJsZSBhcyBgXCJjc3NGbG9hdFwiYC4gV2Ugbm8gbG9uZ2VyIG1vZGlmeSBwcm9wZXJ0aWVzXG5cdFx0Ly8gc2VudCB0byBgLmNzcygpYCBhcGFydCBmcm9tIGNhbWVsQ2FzaW5nLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIGJvdGguXG5cdFx0Ly8gTm9ybWFsbHksIHRoaXMgd291bGQgY3JlYXRlIGRpZmZlcmVuY2UgaW4gYmVoYXZpb3I6IGlmXG5cdFx0Ly8gYGdldFByb3BlcnR5VmFsdWVgIHJldHVybnMgYW4gZW1wdHkgc3RyaW5nLCB0aGUgdmFsdWUgcmV0dXJuZWRcblx0XHQvLyBieSBgLmNzcygpYCB3b3VsZCBiZSBgdW5kZWZpbmVkYC4gVGhpcyBpcyB1c3VhbGx5IHRoZSBjYXNlIGZvclxuXHRcdC8vIGRpc2Nvbm5lY3RlZCBlbGVtZW50cy4gSG93ZXZlciwgaW4gSUUgZXZlbiBkaXNjb25uZWN0ZWQgZWxlbWVudHNcblx0XHQvLyB3aXRoIG5vIHN0eWxlcyByZXR1cm4gYFwibm9uZVwiYCBmb3IgYGdldFByb3BlcnR5VmFsdWUoIFwiZmxvYXRcIiApYFxuXHRcdHJldCA9IGNvbXB1dGVkLmdldFByb3BlcnR5VmFsdWUoIG5hbWUgKSB8fCBjb21wdXRlZFsgbmFtZSBdO1xuXG5cdFx0aWYgKCBpc0N1c3RvbVByb3AgJiYgcmV0ICkge1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDEwNSssIENocm9tZSA8PTEwNStcblx0XHRcdC8vIFNwZWMgcmVxdWlyZXMgdHJpbW1pbmcgd2hpdGVzcGFjZSBmb3IgY3VzdG9tIHByb3BlcnRpZXMgKGdoLTQ5MjYpLlxuXHRcdFx0Ly8gRmlyZWZveCBvbmx5IHRyaW1zIGxlYWRpbmcgd2hpdGVzcGFjZS4gQ2hyb21lIGp1c3QgY29sbGFwc2VzXG5cdFx0XHQvLyBib3RoIGxlYWRpbmcgJiB0cmFpbGluZyB3aGl0ZXNwYWNlIHRvIGEgc2luZ2xlIHNwYWNlLlxuXHRcdFx0Ly9cblx0XHRcdC8vIEZhbGwgYmFjayB0byBgdW5kZWZpbmVkYCBpZiBlbXB0eSBzdHJpbmcgcmV0dXJuZWQuXG5cdFx0XHQvLyBUaGlzIGNvbGxhcHNlcyBhIG1pc3NpbmcgZGVmaW5pdGlvbiB3aXRoIHByb3BlcnR5IGRlZmluZWRcblx0XHRcdC8vIGFuZCBzZXQgdG8gYW4gZW1wdHkgc3RyaW5nIGJ1dCB0aGVyZSdzIG5vIHN0YW5kYXJkIEFQSVxuXHRcdFx0Ly8gYWxsb3dpbmcgdXMgdG8gZGlmZmVyZW50aWF0ZSB0aGVtIHdpdGhvdXQgYSBwZXJmb3JtYW5jZSBwZW5hbHR5XG5cdFx0XHQvLyBhbmQgcmV0dXJuaW5nIGB1bmRlZmluZWRgIGFsaWducyB3aXRoIG9sZGVyIGpRdWVyeS5cblx0XHRcdC8vXG5cdFx0XHQvLyBydHJpbUNTUyB0cmVhdHMgVSswMDBEIENBUlJJQUdFIFJFVFVSTiBhbmQgVSswMDBDIEZPUk0gRkVFRFxuXHRcdFx0Ly8gYXMgd2hpdGVzcGFjZSB3aGlsZSBDU1MgZG9lcyBub3QsIGJ1dCB0aGlzIGlzIG5vdCBhIHByb2JsZW1cblx0XHRcdC8vIGJlY2F1c2UgQ1NTIHByZXByb2Nlc3NpbmcgcmVwbGFjZXMgdGhlbSB3aXRoIFUrMDAwQSBMSU5FIEZFRURcblx0XHRcdC8vICh3aGljaCAqaXMqIENTUyB3aGl0ZXNwYWNlKVxuXHRcdFx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zeW50YXgtMy8jaW5wdXQtcHJlcHJvY2Vzc2luZ1xuXHRcdFx0cmV0ID0gcmV0LnJlcGxhY2UoIHJ0cmltQ1NTLCBcIiQxXCIgKSB8fCB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKCByZXQgPT09IFwiXCIgJiYgIWlzQXR0YWNoZWQoIGVsZW0gKSApIHtcblx0XHRcdHJldCA9IGpRdWVyeS5zdHlsZSggZWxlbSwgbmFtZSApO1xuXHRcdH1cblxuXHRcdC8vIEEgdHJpYnV0ZSB0byB0aGUgXCJhd2Vzb21lIGhhY2sgYnkgRGVhbiBFZHdhcmRzXCJcblx0XHQvLyBBbmRyb2lkIEJyb3dzZXIgcmV0dXJucyBwZXJjZW50YWdlIGZvciBzb21lIHZhbHVlcyxcblx0XHQvLyBidXQgd2lkdGggc2VlbXMgdG8gYmUgcmVsaWFibHkgcGl4ZWxzLlxuXHRcdC8vIFRoaXMgaXMgYWdhaW5zdCB0aGUgQ1NTT00gZHJhZnQgc3BlYzpcblx0XHQvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20vI3Jlc29sdmVkLXZhbHVlc1xuXHRcdGlmICggIXN1cHBvcnQucGl4ZWxCb3hTdHlsZXMoKSAmJiBybnVtbm9ucHgudGVzdCggcmV0ICkgJiYgcmJveFN0eWxlLnRlc3QoIG5hbWUgKSApIHtcblxuXHRcdFx0Ly8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuXHRcdFx0d2lkdGggPSBzdHlsZS53aWR0aDtcblx0XHRcdG1pbldpZHRoID0gc3R5bGUubWluV2lkdGg7XG5cdFx0XHRtYXhXaWR0aCA9IHN0eWxlLm1heFdpZHRoO1xuXG5cdFx0XHQvLyBQdXQgaW4gdGhlIG5ldyB2YWx1ZXMgdG8gZ2V0IGEgY29tcHV0ZWQgdmFsdWUgb3V0XG5cdFx0XHRzdHlsZS5taW5XaWR0aCA9IHN0eWxlLm1heFdpZHRoID0gc3R5bGUud2lkdGggPSByZXQ7XG5cdFx0XHRyZXQgPSBjb21wdXRlZC53aWR0aDtcblxuXHRcdFx0Ly8gUmV2ZXJ0IHRoZSBjaGFuZ2VkIHZhbHVlc1xuXHRcdFx0c3R5bGUud2lkdGggPSB3aWR0aDtcblx0XHRcdHN0eWxlLm1pbldpZHRoID0gbWluV2lkdGg7XG5cdFx0XHRzdHlsZS5tYXhXaWR0aCA9IG1heFdpZHRoO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXQgIT09IHVuZGVmaW5lZCA/XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG5cdFx0Ly8gSUUgcmV0dXJucyB6SW5kZXggdmFsdWUgYXMgYW4gaW50ZWdlci5cblx0XHRyZXQgKyBcIlwiIDpcblx0XHRyZXQ7XG59XG5cblxuZnVuY3Rpb24gYWRkR2V0SG9va0lmKCBjb25kaXRpb25GbiwgaG9va0ZuICkge1xuXG5cdC8vIERlZmluZSB0aGUgaG9vaywgd2UnbGwgY2hlY2sgb24gdGhlIGZpcnN0IHJ1biBpZiBpdCdzIHJlYWxseSBuZWVkZWQuXG5cdHJldHVybiB7XG5cdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggY29uZGl0aW9uRm4oKSApIHtcblxuXHRcdFx0XHQvLyBIb29rIG5vdCBuZWVkZWQgKG9yIGl0J3Mgbm90IHBvc3NpYmxlIHRvIHVzZSBpdCBkdWVcblx0XHRcdFx0Ly8gdG8gbWlzc2luZyBkZXBlbmRlbmN5KSwgcmVtb3ZlIGl0LlxuXHRcdFx0XHRkZWxldGUgdGhpcy5nZXQ7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSG9vayBuZWVkZWQ7IHJlZGVmaW5lIGl0IHNvIHRoYXQgdGhlIHN1cHBvcnQgdGVzdCBpcyBub3QgZXhlY3V0ZWQgYWdhaW4uXG5cdFx0XHRyZXR1cm4gKCB0aGlzLmdldCA9IGhvb2tGbiApLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHR9XG5cdH07XG59XG5cblxudmFyIGNzc1ByZWZpeGVzID0gWyBcIldlYmtpdFwiLCBcIk1velwiLCBcIm1zXCIgXSxcblx0ZW1wdHlTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKS5zdHlsZSxcblx0dmVuZG9yUHJvcHMgPSB7fTtcblxuLy8gUmV0dXJuIGEgdmVuZG9yLXByZWZpeGVkIHByb3BlcnR5IG9yIHVuZGVmaW5lZFxuZnVuY3Rpb24gdmVuZG9yUHJvcE5hbWUoIG5hbWUgKSB7XG5cblx0Ly8gQ2hlY2sgZm9yIHZlbmRvciBwcmVmaXhlZCBuYW1lc1xuXHR2YXIgY2FwTmFtZSA9IG5hbWVbIDAgXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSggMSApLFxuXHRcdGkgPSBjc3NQcmVmaXhlcy5sZW5ndGg7XG5cblx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0bmFtZSA9IGNzc1ByZWZpeGVzWyBpIF0gKyBjYXBOYW1lO1xuXHRcdGlmICggbmFtZSBpbiBlbXB0eVN0eWxlICkge1xuXHRcdFx0cmV0dXJuIG5hbWU7XG5cdFx0fVxuXHR9XG59XG5cbi8vIFJldHVybiBhIHBvdGVudGlhbGx5LW1hcHBlZCBqUXVlcnkuY3NzUHJvcHMgb3IgdmVuZG9yIHByZWZpeGVkIHByb3BlcnR5XG5mdW5jdGlvbiBmaW5hbFByb3BOYW1lKCBuYW1lICkge1xuXHR2YXIgZmluYWwgPSBqUXVlcnkuY3NzUHJvcHNbIG5hbWUgXSB8fCB2ZW5kb3JQcm9wc1sgbmFtZSBdO1xuXG5cdGlmICggZmluYWwgKSB7XG5cdFx0cmV0dXJuIGZpbmFsO1xuXHR9XG5cdGlmICggbmFtZSBpbiBlbXB0eVN0eWxlICkge1xuXHRcdHJldHVybiBuYW1lO1xuXHR9XG5cdHJldHVybiB2ZW5kb3JQcm9wc1sgbmFtZSBdID0gdmVuZG9yUHJvcE5hbWUoIG5hbWUgKSB8fCBuYW1lO1xufVxuXG5cbnZhclxuXG5cdC8vIFN3YXBwYWJsZSBpZiBkaXNwbGF5IGlzIG5vbmUgb3Igc3RhcnRzIHdpdGggdGFibGVcblx0Ly8gZXhjZXB0IFwidGFibGVcIiwgXCJ0YWJsZS1jZWxsXCIsIG9yIFwidGFibGUtY2FwdGlvblwiXG5cdC8vIFNlZSBoZXJlIGZvciBkaXNwbGF5IHZhbHVlczogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9DU1MvZGlzcGxheVxuXHRyZGlzcGxheXN3YXAgPSAvXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sXG5cdGNzc1Nob3cgPSB7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiB9LFxuXHRjc3NOb3JtYWxUcmFuc2Zvcm0gPSB7XG5cdFx0bGV0dGVyU3BhY2luZzogXCIwXCIsXG5cdFx0Zm9udFdlaWdodDogXCI0MDBcIlxuXHR9O1xuXG5mdW5jdGlvbiBzZXRQb3NpdGl2ZU51bWJlciggX2VsZW0sIHZhbHVlLCBzdWJ0cmFjdCApIHtcblxuXHQvLyBBbnkgcmVsYXRpdmUgKCsvLSkgdmFsdWVzIGhhdmUgYWxyZWFkeSBiZWVuXG5cdC8vIG5vcm1hbGl6ZWQgYXQgdGhpcyBwb2ludFxuXHR2YXIgbWF0Y2hlcyA9IHJjc3NOdW0uZXhlYyggdmFsdWUgKTtcblx0cmV0dXJuIG1hdGNoZXMgP1xuXG5cdFx0Ly8gR3VhcmQgYWdhaW5zdCB1bmRlZmluZWQgXCJzdWJ0cmFjdFwiLCBlLmcuLCB3aGVuIHVzZWQgYXMgaW4gY3NzSG9va3Ncblx0XHRNYXRoLm1heCggMCwgbWF0Y2hlc1sgMiBdIC0gKCBzdWJ0cmFjdCB8fCAwICkgKSArICggbWF0Y2hlc1sgMyBdIHx8IFwicHhcIiApIDpcblx0XHR2YWx1ZTtcbn1cblxuZnVuY3Rpb24gYm94TW9kZWxBZGp1c3RtZW50KCBlbGVtLCBkaW1lbnNpb24sIGJveCwgaXNCb3JkZXJCb3gsIHN0eWxlcywgY29tcHV0ZWRWYWwgKSB7XG5cdHZhciBpID0gZGltZW5zaW9uID09PSBcIndpZHRoXCIgPyAxIDogMCxcblx0XHRleHRyYSA9IDAsXG5cdFx0ZGVsdGEgPSAwLFxuXHRcdG1hcmdpbkRlbHRhID0gMDtcblxuXHQvLyBBZGp1c3RtZW50IG1heSBub3QgYmUgbmVjZXNzYXJ5XG5cdGlmICggYm94ID09PSAoIGlzQm9yZGVyQm94ID8gXCJib3JkZXJcIiA6IFwiY29udGVudFwiICkgKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRmb3IgKCA7IGkgPCA0OyBpICs9IDIgKSB7XG5cblx0XHQvLyBCb3RoIGJveCBtb2RlbHMgZXhjbHVkZSBtYXJnaW5cblx0XHQvLyBDb3VudCBtYXJnaW4gZGVsdGEgc2VwYXJhdGVseSB0byBvbmx5IGFkZCBpdCBhZnRlciBzY3JvbGwgZ3V0dGVyIGFkanVzdG1lbnQuXG5cdFx0Ly8gVGhpcyBpcyBuZWVkZWQgdG8gbWFrZSBuZWdhdGl2ZSBtYXJnaW5zIHdvcmsgd2l0aCBgb3V0ZXJIZWlnaHQoIHRydWUgKWAgKGdoLTM5ODIpLlxuXHRcdGlmICggYm94ID09PSBcIm1hcmdpblwiICkge1xuXHRcdFx0bWFyZ2luRGVsdGEgKz0galF1ZXJ5LmNzcyggZWxlbSwgYm94ICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuXHRcdH1cblxuXHRcdC8vIElmIHdlIGdldCBoZXJlIHdpdGggYSBjb250ZW50LWJveCwgd2UncmUgc2Vla2luZyBcInBhZGRpbmdcIiBvciBcImJvcmRlclwiIG9yIFwibWFyZ2luXCJcblx0XHRpZiAoICFpc0JvcmRlckJveCApIHtcblxuXHRcdFx0Ly8gQWRkIHBhZGRpbmdcblx0XHRcdGRlbHRhICs9IGpRdWVyeS5jc3MoIGVsZW0sIFwicGFkZGluZ1wiICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuXG5cdFx0XHQvLyBGb3IgXCJib3JkZXJcIiBvciBcIm1hcmdpblwiLCBhZGQgYm9yZGVyXG5cdFx0XHRpZiAoIGJveCAhPT0gXCJwYWRkaW5nXCIgKSB7XG5cdFx0XHRcdGRlbHRhICs9IGpRdWVyeS5jc3MoIGVsZW0sIFwiYm9yZGVyXCIgKyBjc3NFeHBhbmRbIGkgXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzICk7XG5cblx0XHRcdC8vIEJ1dCBzdGlsbCBrZWVwIHRyYWNrIG9mIGl0IG90aGVyd2lzZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZXh0cmEgKz0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFsgaSBdICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMgKTtcblx0XHRcdH1cblxuXHRcdC8vIElmIHdlIGdldCBoZXJlIHdpdGggYSBib3JkZXItYm94IChjb250ZW50ICsgcGFkZGluZyArIGJvcmRlciksIHdlJ3JlIHNlZWtpbmcgXCJjb250ZW50XCIgb3Jcblx0XHQvLyBcInBhZGRpbmdcIiBvciBcIm1hcmdpblwiXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gRm9yIFwiY29udGVudFwiLCBzdWJ0cmFjdCBwYWRkaW5nXG5cdFx0XHRpZiAoIGJveCA9PT0gXCJjb250ZW50XCIgKSB7XG5cdFx0XHRcdGRlbHRhIC09IGpRdWVyeS5jc3MoIGVsZW0sIFwicGFkZGluZ1wiICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3IgXCJjb250ZW50XCIgb3IgXCJwYWRkaW5nXCIsIHN1YnRyYWN0IGJvcmRlclxuXHRcdFx0aWYgKCBib3ggIT09IFwibWFyZ2luXCIgKSB7XG5cdFx0XHRcdGRlbHRhIC09IGpRdWVyeS5jc3MoIGVsZW0sIFwiYm9yZGVyXCIgKyBjc3NFeHBhbmRbIGkgXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQWNjb3VudCBmb3IgcG9zaXRpdmUgY29udGVudC1ib3ggc2Nyb2xsIGd1dHRlciB3aGVuIHJlcXVlc3RlZCBieSBwcm92aWRpbmcgY29tcHV0ZWRWYWxcblx0aWYgKCAhaXNCb3JkZXJCb3ggJiYgY29tcHV0ZWRWYWwgPj0gMCApIHtcblxuXHRcdC8vIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBpcyBhIHJvdW5kZWQgc3VtIG9mIGNvbnRlbnQsIHBhZGRpbmcsIHNjcm9sbCBndXR0ZXIsIGFuZCBib3JkZXJcblx0XHQvLyBBc3N1bWluZyBpbnRlZ2VyIHNjcm9sbCBndXR0ZXIsIHN1YnRyYWN0IHRoZSByZXN0IGFuZCByb3VuZCBkb3duXG5cdFx0ZGVsdGEgKz0gTWF0aC5tYXgoIDAsIE1hdGguY2VpbChcblx0XHRcdGVsZW1bIFwib2Zmc2V0XCIgKyBkaW1lbnNpb25bIDAgXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKCAxICkgXSAtXG5cdFx0XHRjb21wdXRlZFZhbCAtXG5cdFx0XHRkZWx0YSAtXG5cdFx0XHRleHRyYSAtXG5cdFx0XHQwLjVcblxuXHRcdC8vIElmIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBpcyB1bmtub3duLCB0aGVuIHdlIGNhbid0IGRldGVybWluZSBjb250ZW50LWJveCBzY3JvbGwgZ3V0dGVyXG5cdFx0Ly8gVXNlIGFuIGV4cGxpY2l0IHplcm8gdG8gYXZvaWQgTmFOIChnaC0zOTY0KVxuXHRcdCkgKSB8fCAwO1xuXHR9XG5cblx0cmV0dXJuIGRlbHRhICsgbWFyZ2luRGVsdGE7XG59XG5cbmZ1bmN0aW9uIGdldFdpZHRoT3JIZWlnaHQoIGVsZW0sIGRpbWVuc2lvbiwgZXh0cmEgKSB7XG5cblx0Ly8gU3RhcnQgd2l0aCBjb21wdXRlZCBzdHlsZVxuXHR2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKCBlbGVtICksXG5cblx0XHQvLyBUbyBhdm9pZCBmb3JjaW5nIGEgcmVmbG93LCBvbmx5IGZldGNoIGJveFNpemluZyBpZiB3ZSBuZWVkIGl0IChnaC00MzIyKS5cblx0XHQvLyBGYWtlIGNvbnRlbnQtYm94IHVudGlsIHdlIGtub3cgaXQncyBuZWVkZWQgdG8ga25vdyB0aGUgdHJ1ZSB2YWx1ZS5cblx0XHRib3hTaXppbmdOZWVkZWQgPSAhc3VwcG9ydC5ib3hTaXppbmdSZWxpYWJsZSgpIHx8IGV4dHJhLFxuXHRcdGlzQm9yZGVyQm94ID0gYm94U2l6aW5nTmVlZGVkICYmXG5cdFx0XHRqUXVlcnkuY3NzKCBlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzICkgPT09IFwiYm9yZGVyLWJveFwiLFxuXHRcdHZhbHVlSXNCb3JkZXJCb3ggPSBpc0JvcmRlckJveCxcblxuXHRcdHZhbCA9IGN1ckNTUyggZWxlbSwgZGltZW5zaW9uLCBzdHlsZXMgKSxcblx0XHRvZmZzZXRQcm9wID0gXCJvZmZzZXRcIiArIGRpbWVuc2lvblsgMCBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoIDEgKTtcblxuXHQvLyBTdXBwb3J0OiBGaXJlZm94IDw9NTRcblx0Ly8gUmV0dXJuIGEgY29uZm91bmRpbmcgbm9uLXBpeGVsIHZhbHVlIG9yIGZlaWduIGlnbm9yYW5jZSwgYXMgYXBwcm9wcmlhdGUuXG5cdGlmICggcm51bW5vbnB4LnRlc3QoIHZhbCApICkge1xuXHRcdGlmICggIWV4dHJhICkge1xuXHRcdFx0cmV0dXJuIHZhbDtcblx0XHR9XG5cdFx0dmFsID0gXCJhdXRvXCI7XG5cdH1cblxuXG5cdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSBvbmx5XG5cdC8vIFVzZSBvZmZzZXRXaWR0aC9vZmZzZXRIZWlnaHQgZm9yIHdoZW4gYm94IHNpemluZyBpcyB1bnJlbGlhYmxlLlxuXHQvLyBJbiB0aG9zZSBjYXNlcywgdGhlIGNvbXB1dGVkIHZhbHVlIGNhbiBiZSB0cnVzdGVkIHRvIGJlIGJvcmRlci1ib3guXG5cdGlmICggKCAhc3VwcG9ydC5ib3hTaXppbmdSZWxpYWJsZSgpICYmIGlzQm9yZGVyQm94IHx8XG5cblx0XHQvLyBTdXBwb3J0OiBJRSAxMCAtIDExKywgRWRnZSAxNSAtIDE4K1xuXHRcdC8vIElFL0VkZ2UgbWlzcmVwb3J0IGBnZXRDb21wdXRlZFN0eWxlYCBvZiB0YWJsZSByb3dzIHdpdGggd2lkdGgvaGVpZ2h0XG5cdFx0Ly8gc2V0IGluIENTUyB3aGlsZSBgb2Zmc2V0KmAgcHJvcGVydGllcyByZXBvcnQgY29ycmVjdCB2YWx1ZXMuXG5cdFx0Ly8gSW50ZXJlc3RpbmdseSwgaW4gc29tZSBjYXNlcyBJRSA5IGRvZXNuJ3Qgc3VmZmVyIGZyb20gdGhpcyBpc3N1ZS5cblx0XHQhc3VwcG9ydC5yZWxpYWJsZVRyRGltZW5zaW9ucygpICYmIG5vZGVOYW1lKCBlbGVtLCBcInRyXCIgKSB8fFxuXG5cdFx0Ly8gRmFsbCBiYWNrIHRvIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCB3aGVuIHZhbHVlIGlzIFwiYXV0b1wiXG5cdFx0Ly8gVGhpcyBoYXBwZW5zIGZvciBpbmxpbmUgZWxlbWVudHMgd2l0aCBubyBleHBsaWNpdCBzZXR0aW5nIChnaC0zNTcxKVxuXHRcdHZhbCA9PT0gXCJhdXRvXCIgfHxcblxuXHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjEgLSA0LjMgb25seVxuXHRcdC8vIEFsc28gdXNlIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBmb3IgbWlzcmVwb3J0ZWQgaW5saW5lIGRpbWVuc2lvbnMgKGdoLTM2MDIpXG5cdFx0IXBhcnNlRmxvYXQoIHZhbCApICYmIGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiLCBmYWxzZSwgc3R5bGVzICkgPT09IFwiaW5saW5lXCIgKSAmJlxuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzIHZpc2libGUgJiBjb25uZWN0ZWRcblx0XHRlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoICkge1xuXG5cdFx0aXNCb3JkZXJCb3ggPSBqUXVlcnkuY3NzKCBlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzICkgPT09IFwiYm9yZGVyLWJveFwiO1xuXG5cdFx0Ly8gV2hlcmUgYXZhaWxhYmxlLCBvZmZzZXRXaWR0aC9vZmZzZXRIZWlnaHQgYXBwcm94aW1hdGUgYm9yZGVyIGJveCBkaW1lbnNpb25zLlxuXHRcdC8vIFdoZXJlIG5vdCBhdmFpbGFibGUgKGUuZy4sIFNWRyksIGFzc3VtZSB1bnJlbGlhYmxlIGJveC1zaXppbmcgYW5kIGludGVycHJldCB0aGVcblx0XHQvLyByZXRyaWV2ZWQgdmFsdWUgYXMgYSBjb250ZW50IGJveCBkaW1lbnNpb24uXG5cdFx0dmFsdWVJc0JvcmRlckJveCA9IG9mZnNldFByb3AgaW4gZWxlbTtcblx0XHRpZiAoIHZhbHVlSXNCb3JkZXJCb3ggKSB7XG5cdFx0XHR2YWwgPSBlbGVtWyBvZmZzZXRQcm9wIF07XG5cdFx0fVxuXHR9XG5cblx0Ly8gTm9ybWFsaXplIFwiXCIgYW5kIGF1dG9cblx0dmFsID0gcGFyc2VGbG9hdCggdmFsICkgfHwgMDtcblxuXHQvLyBBZGp1c3QgZm9yIHRoZSBlbGVtZW50J3MgYm94IG1vZGVsXG5cdHJldHVybiAoIHZhbCArXG5cdFx0Ym94TW9kZWxBZGp1c3RtZW50KFxuXHRcdFx0ZWxlbSxcblx0XHRcdGRpbWVuc2lvbixcblx0XHRcdGV4dHJhIHx8ICggaXNCb3JkZXJCb3ggPyBcImJvcmRlclwiIDogXCJjb250ZW50XCIgKSxcblx0XHRcdHZhbHVlSXNCb3JkZXJCb3gsXG5cdFx0XHRzdHlsZXMsXG5cblx0XHRcdC8vIFByb3ZpZGUgdGhlIGN1cnJlbnQgY29tcHV0ZWQgc2l6ZSB0byByZXF1ZXN0IHNjcm9sbCBndXR0ZXIgY2FsY3VsYXRpb24gKGdoLTM1ODkpXG5cdFx0XHR2YWxcblx0XHQpXG5cdCkgKyBcInB4XCI7XG59XG5cbmpRdWVyeS5leHRlbmQoIHtcblxuXHQvLyBBZGQgaW4gc3R5bGUgcHJvcGVydHkgaG9va3MgZm9yIG92ZXJyaWRpbmcgdGhlIGRlZmF1bHRcblx0Ly8gYmVoYXZpb3Igb2YgZ2V0dGluZyBhbmQgc2V0dGluZyBhIHN0eWxlIHByb3BlcnR5XG5cdGNzc0hvb2tzOiB7XG5cdFx0b3BhY2l0eToge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQgKSB7XG5cdFx0XHRcdGlmICggY29tcHV0ZWQgKSB7XG5cblx0XHRcdFx0XHQvLyBXZSBzaG91bGQgYWx3YXlzIGdldCBhIG51bWJlciBiYWNrIGZyb20gb3BhY2l0eVxuXHRcdFx0XHRcdHZhciByZXQgPSBjdXJDU1MoIGVsZW0sIFwib3BhY2l0eVwiICk7XG5cdFx0XHRcdFx0cmV0dXJuIHJldCA9PT0gXCJcIiA/IFwiMVwiIDogcmV0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdC8vIERvbid0IGF1dG9tYXRpY2FsbHkgYWRkIFwicHhcIiB0byB0aGVzZSBwb3NzaWJseS11bml0bGVzcyBwcm9wZXJ0aWVzXG5cdGNzc051bWJlcjoge1xuXHRcdGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiB0cnVlLFxuXHRcdGFzcGVjdFJhdGlvOiB0cnVlLFxuXHRcdGJvcmRlckltYWdlU2xpY2U6IHRydWUsXG5cdFx0Y29sdW1uQ291bnQ6IHRydWUsXG5cdFx0ZmxleEdyb3c6IHRydWUsXG5cdFx0ZmxleFNocmluazogdHJ1ZSxcblx0XHRmb250V2VpZ2h0OiB0cnVlLFxuXHRcdGdyaWRBcmVhOiB0cnVlLFxuXHRcdGdyaWRDb2x1bW46IHRydWUsXG5cdFx0Z3JpZENvbHVtbkVuZDogdHJ1ZSxcblx0XHRncmlkQ29sdW1uU3RhcnQ6IHRydWUsXG5cdFx0Z3JpZFJvdzogdHJ1ZSxcblx0XHRncmlkUm93RW5kOiB0cnVlLFxuXHRcdGdyaWRSb3dTdGFydDogdHJ1ZSxcblx0XHRsaW5lSGVpZ2h0OiB0cnVlLFxuXHRcdG9wYWNpdHk6IHRydWUsXG5cdFx0b3JkZXI6IHRydWUsXG5cdFx0b3JwaGFuczogdHJ1ZSxcblx0XHRzY2FsZTogdHJ1ZSxcblx0XHR3aWRvd3M6IHRydWUsXG5cdFx0ekluZGV4OiB0cnVlLFxuXHRcdHpvb206IHRydWUsXG5cblx0XHQvLyBTVkctcmVsYXRlZFxuXHRcdGZpbGxPcGFjaXR5OiB0cnVlLFxuXHRcdGZsb29kT3BhY2l0eTogdHJ1ZSxcblx0XHRzdG9wT3BhY2l0eTogdHJ1ZSxcblx0XHRzdHJva2VNaXRlcmxpbWl0OiB0cnVlLFxuXHRcdHN0cm9rZU9wYWNpdHk6IHRydWVcblx0fSxcblxuXHQvLyBBZGQgaW4gcHJvcGVydGllcyB3aG9zZSBuYW1lcyB5b3Ugd2lzaCB0byBmaXggYmVmb3JlXG5cdC8vIHNldHRpbmcgb3IgZ2V0dGluZyB0aGUgdmFsdWVcblx0Y3NzUHJvcHM6IHt9LFxuXG5cdC8vIEdldCBhbmQgc2V0IHRoZSBzdHlsZSBwcm9wZXJ0eSBvbiBhIERPTSBOb2RlXG5cdHN0eWxlOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUsIGV4dHJhICkge1xuXG5cdFx0Ly8gRG9uJ3Qgc2V0IHN0eWxlcyBvbiB0ZXh0IGFuZCBjb21tZW50IG5vZGVzXG5cdFx0aWYgKCAhZWxlbSB8fCBlbGVtLm5vZGVUeXBlID09PSAzIHx8IGVsZW0ubm9kZVR5cGUgPT09IDggfHwgIWVsZW0uc3R5bGUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lXG5cdFx0dmFyIHJldCwgdHlwZSwgaG9va3MsXG5cdFx0XHRvcmlnTmFtZSA9IGNhbWVsQ2FzZSggbmFtZSApLFxuXHRcdFx0aXNDdXN0b21Qcm9wID0gcmN1c3RvbVByb3AudGVzdCggbmFtZSApLFxuXHRcdFx0c3R5bGUgPSBlbGVtLnN0eWxlO1xuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lLiBXZSBkb24ndFxuXHRcdC8vIHdhbnQgdG8gcXVlcnkgdGhlIHZhbHVlIGlmIGl0IGlzIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eVxuXHRcdC8vIHNpbmNlIHRoZXkgYXJlIHVzZXItZGVmaW5lZC5cblx0XHRpZiAoICFpc0N1c3RvbVByb3AgKSB7XG5cdFx0XHRuYW1lID0gZmluYWxQcm9wTmFtZSggb3JpZ05hbWUgKTtcblx0XHR9XG5cblx0XHQvLyBHZXRzIGhvb2sgZm9yIHRoZSBwcmVmaXhlZCB2ZXJzaW9uLCB0aGVuIHVucHJlZml4ZWQgdmVyc2lvblxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF0gfHwgalF1ZXJ5LmNzc0hvb2tzWyBvcmlnTmFtZSBdO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgd2UncmUgc2V0dGluZyBhIHZhbHVlXG5cdFx0aWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0dHlwZSA9IHR5cGVvZiB2YWx1ZTtcblxuXHRcdFx0Ly8gQ29udmVydCBcIis9XCIgb3IgXCItPVwiIHRvIHJlbGF0aXZlIG51bWJlcnMgKHRyYWMtNzM0NSlcblx0XHRcdGlmICggdHlwZSA9PT0gXCJzdHJpbmdcIiAmJiAoIHJldCA9IHJjc3NOdW0uZXhlYyggdmFsdWUgKSApICYmIHJldFsgMSBdICkge1xuXHRcdFx0XHR2YWx1ZSA9IGFkanVzdENTUyggZWxlbSwgbmFtZSwgcmV0ICk7XG5cblx0XHRcdFx0Ly8gRml4ZXMgYnVnIHRyYWMtOTIzN1xuXHRcdFx0XHR0eXBlID0gXCJudW1iZXJcIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTWFrZSBzdXJlIHRoYXQgbnVsbCBhbmQgTmFOIHZhbHVlcyBhcmVuJ3Qgc2V0ICh0cmFjLTcxMTYpXG5cdFx0XHRpZiAoIHZhbHVlID09IG51bGwgfHwgdmFsdWUgIT09IHZhbHVlICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIGEgbnVtYmVyIHdhcyBwYXNzZWQgaW4sIGFkZCB0aGUgdW5pdCAoZXhjZXB0IGZvciBjZXJ0YWluIENTUyBwcm9wZXJ0aWVzKVxuXHRcdFx0Ly8gVGhlIGlzQ3VzdG9tUHJvcCBjaGVjayBjYW4gYmUgcmVtb3ZlZCBpbiBqUXVlcnkgNC4wIHdoZW4gd2Ugb25seSBhdXRvLWFwcGVuZFxuXHRcdFx0Ly8gXCJweFwiIHRvIGEgZmV3IGhhcmRjb2RlZCB2YWx1ZXMuXG5cdFx0XHRpZiAoIHR5cGUgPT09IFwibnVtYmVyXCIgJiYgIWlzQ3VzdG9tUHJvcCApIHtcblx0XHRcdFx0dmFsdWUgKz0gcmV0ICYmIHJldFsgMyBdIHx8ICggalF1ZXJ5LmNzc051bWJlclsgb3JpZ05hbWUgXSA/IFwiXCIgOiBcInB4XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYmFja2dyb3VuZC0qIHByb3BzIGFmZmVjdCBvcmlnaW5hbCBjbG9uZSdzIHZhbHVlc1xuXHRcdFx0aWYgKCAhc3VwcG9ydC5jbGVhckNsb25lU3R5bGUgJiYgdmFsdWUgPT09IFwiXCIgJiYgbmFtZS5pbmRleE9mKCBcImJhY2tncm91bmRcIiApID09PSAwICkge1xuXHRcdFx0XHRzdHlsZVsgbmFtZSBdID0gXCJpbmhlcml0XCI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQsIHVzZSB0aGF0IHZhbHVlLCBvdGhlcndpc2UganVzdCBzZXQgdGhlIHNwZWNpZmllZCB2YWx1ZVxuXHRcdFx0aWYgKCAhaG9va3MgfHwgISggXCJzZXRcIiBpbiBob29rcyApIHx8XG5cdFx0XHRcdCggdmFsdWUgPSBob29rcy5zZXQoIGVsZW0sIHZhbHVlLCBleHRyYSApICkgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRpZiAoIGlzQ3VzdG9tUHJvcCApIHtcblx0XHRcdFx0XHRzdHlsZS5zZXRQcm9wZXJ0eSggbmFtZSwgdmFsdWUgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdHlsZVsgbmFtZSBdID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQgZ2V0IHRoZSBub24tY29tcHV0ZWQgdmFsdWUgZnJvbSB0aGVyZVxuXHRcdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmXG5cdFx0XHRcdCggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBmYWxzZSwgZXh0cmEgKSApICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gT3RoZXJ3aXNlIGp1c3QgZ2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBzdHlsZSBvYmplY3Rcblx0XHRcdHJldHVybiBzdHlsZVsgbmFtZSBdO1xuXHRcdH1cblx0fSxcblxuXHRjc3M6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBleHRyYSwgc3R5bGVzICkge1xuXHRcdHZhciB2YWwsIG51bSwgaG9va3MsXG5cdFx0XHRvcmlnTmFtZSA9IGNhbWVsQ2FzZSggbmFtZSApLFxuXHRcdFx0aXNDdXN0b21Qcm9wID0gcmN1c3RvbVByb3AudGVzdCggbmFtZSApO1xuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lLiBXZSBkb24ndFxuXHRcdC8vIHdhbnQgdG8gbW9kaWZ5IHRoZSB2YWx1ZSBpZiBpdCBpcyBhIENTUyBjdXN0b20gcHJvcGVydHlcblx0XHQvLyBzaW5jZSB0aGV5IGFyZSB1c2VyLWRlZmluZWQuXG5cdFx0aWYgKCAhaXNDdXN0b21Qcm9wICkge1xuXHRcdFx0bmFtZSA9IGZpbmFsUHJvcE5hbWUoIG9yaWdOYW1lICk7XG5cdFx0fVxuXG5cdFx0Ly8gVHJ5IHByZWZpeGVkIG5hbWUgZm9sbG93ZWQgYnkgdGhlIHVucHJlZml4ZWQgbmFtZVxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF0gfHwgalF1ZXJ5LmNzc0hvb2tzWyBvcmlnTmFtZSBdO1xuXG5cdFx0Ly8gSWYgYSBob29rIHdhcyBwcm92aWRlZCBnZXQgdGhlIGNvbXB1dGVkIHZhbHVlIGZyb20gdGhlcmVcblx0XHRpZiAoIGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgKSB7XG5cdFx0XHR2YWwgPSBob29rcy5nZXQoIGVsZW0sIHRydWUsIGV4dHJhICk7XG5cdFx0fVxuXG5cdFx0Ly8gT3RoZXJ3aXNlLCBpZiBhIHdheSB0byBnZXQgdGhlIGNvbXB1dGVkIHZhbHVlIGV4aXN0cywgdXNlIHRoYXRcblx0XHRpZiAoIHZhbCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0dmFsID0gY3VyQ1NTKCBlbGVtLCBuYW1lLCBzdHlsZXMgKTtcblx0XHR9XG5cblx0XHQvLyBDb252ZXJ0IFwibm9ybWFsXCIgdG8gY29tcHV0ZWQgdmFsdWVcblx0XHRpZiAoIHZhbCA9PT0gXCJub3JtYWxcIiAmJiBuYW1lIGluIGNzc05vcm1hbFRyYW5zZm9ybSApIHtcblx0XHRcdHZhbCA9IGNzc05vcm1hbFRyYW5zZm9ybVsgbmFtZSBdO1xuXHRcdH1cblxuXHRcdC8vIE1ha2UgbnVtZXJpYyBpZiBmb3JjZWQgb3IgYSBxdWFsaWZpZXIgd2FzIHByb3ZpZGVkIGFuZCB2YWwgbG9va3MgbnVtZXJpY1xuXHRcdGlmICggZXh0cmEgPT09IFwiXCIgfHwgZXh0cmEgKSB7XG5cdFx0XHRudW0gPSBwYXJzZUZsb2F0KCB2YWwgKTtcblx0XHRcdHJldHVybiBleHRyYSA9PT0gdHJ1ZSB8fCBpc0Zpbml0ZSggbnVtICkgPyBudW0gfHwgMCA6IHZhbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5lYWNoKCBbIFwiaGVpZ2h0XCIsIFwid2lkdGhcIiBdLCBmdW5jdGlvbiggX2ksIGRpbWVuc2lvbiApIHtcblx0alF1ZXJ5LmNzc0hvb2tzWyBkaW1lbnNpb24gXSA9IHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtLCBjb21wdXRlZCwgZXh0cmEgKSB7XG5cdFx0XHRpZiAoIGNvbXB1dGVkICkge1xuXG5cdFx0XHRcdC8vIENlcnRhaW4gZWxlbWVudHMgY2FuIGhhdmUgZGltZW5zaW9uIGluZm8gaWYgd2UgaW52aXNpYmx5IHNob3cgdGhlbVxuXHRcdFx0XHQvLyBidXQgaXQgbXVzdCBoYXZlIGEgY3VycmVudCBkaXNwbGF5IHN0eWxlIHRoYXQgd291bGQgYmVuZWZpdFxuXHRcdFx0XHRyZXR1cm4gcmRpc3BsYXlzd2FwLnRlc3QoIGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiICkgKSAmJlxuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogU2FmYXJpIDgrXG5cdFx0XHRcdFx0Ly8gVGFibGUgY29sdW1ucyBpbiBTYWZhcmkgaGF2ZSBub24temVybyBvZmZzZXRXaWR0aCAmIHplcm9cblx0XHRcdFx0XHQvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCB1bmxlc3MgZGlzcGxheSBpcyBjaGFuZ2VkLlxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHRcdFx0XHRcdC8vIFJ1bm5pbmcgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGEgZGlzY29ubmVjdGVkIG5vZGVcblx0XHRcdFx0XHQvLyBpbiBJRSB0aHJvd3MgYW4gZXJyb3IuXG5cdFx0XHRcdFx0KCAhZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCB8fCAhZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCApID9cblx0XHRcdFx0XHRzd2FwKCBlbGVtLCBjc3NTaG93LCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHJldHVybiBnZXRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBkaW1lbnNpb24sIGV4dHJhICk7XG5cdFx0XHRcdFx0fSApIDpcblx0XHRcdFx0XHRnZXRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBkaW1lbnNpb24sIGV4dHJhICk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlLCBleHRyYSApIHtcblx0XHRcdHZhciBtYXRjaGVzLFxuXHRcdFx0XHRzdHlsZXMgPSBnZXRTdHlsZXMoIGVsZW0gKSxcblxuXHRcdFx0XHQvLyBPbmx5IHJlYWQgc3R5bGVzLnBvc2l0aW9uIGlmIHRoZSB0ZXN0IGhhcyBhIGNoYW5jZSB0byBmYWlsXG5cdFx0XHRcdC8vIHRvIGF2b2lkIGZvcmNpbmcgYSByZWZsb3cuXG5cdFx0XHRcdHNjcm9sbGJveFNpemVCdWdneSA9ICFzdXBwb3J0LnNjcm9sbGJveFNpemUoKSAmJlxuXHRcdFx0XHRcdHN0eWxlcy5wb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiLFxuXG5cdFx0XHRcdC8vIFRvIGF2b2lkIGZvcmNpbmcgYSByZWZsb3csIG9ubHkgZmV0Y2ggYm94U2l6aW5nIGlmIHdlIG5lZWQgaXQgKGdoLTM5OTEpXG5cdFx0XHRcdGJveFNpemluZ05lZWRlZCA9IHNjcm9sbGJveFNpemVCdWdneSB8fCBleHRyYSxcblx0XHRcdFx0aXNCb3JkZXJCb3ggPSBib3hTaXppbmdOZWVkZWQgJiZcblx0XHRcdFx0XHRqUXVlcnkuY3NzKCBlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzICkgPT09IFwiYm9yZGVyLWJveFwiLFxuXHRcdFx0XHRzdWJ0cmFjdCA9IGV4dHJhID9cblx0XHRcdFx0XHRib3hNb2RlbEFkanVzdG1lbnQoXG5cdFx0XHRcdFx0XHRlbGVtLFxuXHRcdFx0XHRcdFx0ZGltZW5zaW9uLFxuXHRcdFx0XHRcdFx0ZXh0cmEsXG5cdFx0XHRcdFx0XHRpc0JvcmRlckJveCxcblx0XHRcdFx0XHRcdHN0eWxlc1xuXHRcdFx0XHRcdCkgOlxuXHRcdFx0XHRcdDA7XG5cblx0XHRcdC8vIEFjY291bnQgZm9yIHVucmVsaWFibGUgYm9yZGVyLWJveCBkaW1lbnNpb25zIGJ5IGNvbXBhcmluZyBvZmZzZXQqIHRvIGNvbXB1dGVkIGFuZFxuXHRcdFx0Ly8gZmFraW5nIGEgY29udGVudC1ib3ggdG8gZ2V0IGJvcmRlciBhbmQgcGFkZGluZyAoZ2gtMzY5OSlcblx0XHRcdGlmICggaXNCb3JkZXJCb3ggJiYgc2Nyb2xsYm94U2l6ZUJ1Z2d5ICkge1xuXHRcdFx0XHRzdWJ0cmFjdCAtPSBNYXRoLmNlaWwoXG5cdFx0XHRcdFx0ZWxlbVsgXCJvZmZzZXRcIiArIGRpbWVuc2lvblsgMCBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoIDEgKSBdIC1cblx0XHRcdFx0XHRwYXJzZUZsb2F0KCBzdHlsZXNbIGRpbWVuc2lvbiBdICkgLVxuXHRcdFx0XHRcdGJveE1vZGVsQWRqdXN0bWVudCggZWxlbSwgZGltZW5zaW9uLCBcImJvcmRlclwiLCBmYWxzZSwgc3R5bGVzICkgLVxuXHRcdFx0XHRcdDAuNVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb252ZXJ0IHRvIHBpeGVscyBpZiB2YWx1ZSBhZGp1c3RtZW50IGlzIG5lZWRlZFxuXHRcdFx0aWYgKCBzdWJ0cmFjdCAmJiAoIG1hdGNoZXMgPSByY3NzTnVtLmV4ZWMoIHZhbHVlICkgKSAmJlxuXHRcdFx0XHQoIG1hdGNoZXNbIDMgXSB8fCBcInB4XCIgKSAhPT0gXCJweFwiICkge1xuXG5cdFx0XHRcdGVsZW0uc3R5bGVbIGRpbWVuc2lvbiBdID0gdmFsdWU7XG5cdFx0XHRcdHZhbHVlID0galF1ZXJ5LmNzcyggZWxlbSwgZGltZW5zaW9uICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZXRQb3NpdGl2ZU51bWJlciggZWxlbSwgdmFsdWUsIHN1YnRyYWN0ICk7XG5cdFx0fVxuXHR9O1xufSApO1xuXG5qUXVlcnkuY3NzSG9va3MubWFyZ2luTGVmdCA9IGFkZEdldEhvb2tJZiggc3VwcG9ydC5yZWxpYWJsZU1hcmdpbkxlZnQsXG5cdGZ1bmN0aW9uKCBlbGVtLCBjb21wdXRlZCApIHtcblx0XHRpZiAoIGNvbXB1dGVkICkge1xuXHRcdFx0cmV0dXJuICggcGFyc2VGbG9hdCggY3VyQ1NTKCBlbGVtLCBcIm1hcmdpbkxlZnRcIiApICkgfHxcblx0XHRcdFx0ZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC1cblx0XHRcdFx0XHRzd2FwKCBlbGVtLCB7IG1hcmdpbkxlZnQ6IDAgfSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuXHRcdFx0XHRcdH0gKVxuXHRcdFx0KSArIFwicHhcIjtcblx0XHR9XG5cdH1cbik7XG5cbi8vIFRoZXNlIGhvb2tzIGFyZSB1c2VkIGJ5IGFuaW1hdGUgdG8gZXhwYW5kIHByb3BlcnRpZXNcbmpRdWVyeS5lYWNoKCB7XG5cdG1hcmdpbjogXCJcIixcblx0cGFkZGluZzogXCJcIixcblx0Ym9yZGVyOiBcIldpZHRoXCJcbn0sIGZ1bmN0aW9uKCBwcmVmaXgsIHN1ZmZpeCApIHtcblx0alF1ZXJ5LmNzc0hvb2tzWyBwcmVmaXggKyBzdWZmaXggXSA9IHtcblx0XHRleHBhbmQ6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHZhciBpID0gMCxcblx0XHRcdFx0ZXhwYW5kZWQgPSB7fSxcblxuXHRcdFx0XHQvLyBBc3N1bWVzIGEgc2luZ2xlIG51bWJlciBpZiBub3QgYSBzdHJpbmdcblx0XHRcdFx0cGFydHMgPSB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgPyB2YWx1ZS5zcGxpdCggXCIgXCIgKSA6IFsgdmFsdWUgXTtcblxuXHRcdFx0Zm9yICggOyBpIDwgNDsgaSsrICkge1xuXHRcdFx0XHRleHBhbmRlZFsgcHJlZml4ICsgY3NzRXhwYW5kWyBpIF0gKyBzdWZmaXggXSA9XG5cdFx0XHRcdFx0cGFydHNbIGkgXSB8fCBwYXJ0c1sgaSAtIDIgXSB8fCBwYXJ0c1sgMCBdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZXhwYW5kZWQ7XG5cdFx0fVxuXHR9O1xuXG5cdGlmICggcHJlZml4ICE9PSBcIm1hcmdpblwiICkge1xuXHRcdGpRdWVyeS5jc3NIb29rc1sgcHJlZml4ICsgc3VmZml4IF0uc2V0ID0gc2V0UG9zaXRpdmVOdW1iZXI7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRjc3M6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUgKSB7XG5cdFx0XHR2YXIgc3R5bGVzLCBsZW4sXG5cdFx0XHRcdG1hcCA9IHt9LFxuXHRcdFx0XHRpID0gMDtcblxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBuYW1lICkgKSB7XG5cdFx0XHRcdHN0eWxlcyA9IGdldFN0eWxlcyggZWxlbSApO1xuXHRcdFx0XHRsZW4gPSBuYW1lLmxlbmd0aDtcblxuXHRcdFx0XHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0XHRtYXBbIG5hbWVbIGkgXSBdID0galF1ZXJ5LmNzcyggZWxlbSwgbmFtZVsgaSBdLCBmYWxzZSwgc3R5bGVzICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbWFwO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgbmFtZSwgdmFsdWUgKSA6XG5cdFx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIG5hbWUgKTtcblx0XHR9LCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgKTtcblx0fVxufSApO1xuXG5cbmZ1bmN0aW9uIFR3ZWVuKCBlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZyApIHtcblx0cmV0dXJuIG5ldyBUd2Vlbi5wcm90b3R5cGUuaW5pdCggZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcgKTtcbn1cbmpRdWVyeS5Ud2VlbiA9IFR3ZWVuO1xuXG5Ud2Vlbi5wcm90b3R5cGUgPSB7XG5cdGNvbnN0cnVjdG9yOiBUd2Vlbixcblx0aW5pdDogZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIHByb3AsIGVuZCwgZWFzaW5nLCB1bml0ICkge1xuXHRcdHRoaXMuZWxlbSA9IGVsZW07XG5cdFx0dGhpcy5wcm9wID0gcHJvcDtcblx0XHR0aGlzLmVhc2luZyA9IGVhc2luZyB8fCBqUXVlcnkuZWFzaW5nLl9kZWZhdWx0O1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy5zdGFydCA9IHRoaXMubm93ID0gdGhpcy5jdXIoKTtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblx0XHR0aGlzLnVuaXQgPSB1bml0IHx8ICggalF1ZXJ5LmNzc051bWJlclsgcHJvcCBdID8gXCJcIiA6IFwicHhcIiApO1xuXHR9LFxuXHRjdXI6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBob29rcyA9IFR3ZWVuLnByb3BIb29rc1sgdGhpcy5wcm9wIF07XG5cblx0XHRyZXR1cm4gaG9va3MgJiYgaG9va3MuZ2V0ID9cblx0XHRcdGhvb2tzLmdldCggdGhpcyApIDpcblx0XHRcdFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5nZXQoIHRoaXMgKTtcblx0fSxcblx0cnVuOiBmdW5jdGlvbiggcGVyY2VudCApIHtcblx0XHR2YXIgZWFzZWQsXG5cdFx0XHRob29rcyA9IFR3ZWVuLnByb3BIb29rc1sgdGhpcy5wcm9wIF07XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5kdXJhdGlvbiApIHtcblx0XHRcdHRoaXMucG9zID0gZWFzZWQgPSBqUXVlcnkuZWFzaW5nWyB0aGlzLmVhc2luZyBdKFxuXHRcdFx0XHRwZXJjZW50LCB0aGlzLm9wdGlvbnMuZHVyYXRpb24gKiBwZXJjZW50LCAwLCAxLCB0aGlzLm9wdGlvbnMuZHVyYXRpb25cblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucG9zID0gZWFzZWQgPSBwZXJjZW50O1xuXHRcdH1cblx0XHR0aGlzLm5vdyA9ICggdGhpcy5lbmQgLSB0aGlzLnN0YXJ0ICkgKiBlYXNlZCArIHRoaXMuc3RhcnQ7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5zdGVwICkge1xuXHRcdFx0dGhpcy5vcHRpb25zLnN0ZXAuY2FsbCggdGhpcy5lbGVtLCB0aGlzLm5vdywgdGhpcyApO1xuXHRcdH1cblxuXHRcdGlmICggaG9va3MgJiYgaG9va3Muc2V0ICkge1xuXHRcdFx0aG9va3Muc2V0KCB0aGlzICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5zZXQoIHRoaXMgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG5cblR3ZWVuLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZSA9IFR3ZWVuLnByb3RvdHlwZTtcblxuVHdlZW4ucHJvcEhvb2tzID0ge1xuXHRfZGVmYXVsdDoge1xuXHRcdGdldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXHRcdFx0dmFyIHJlc3VsdDtcblxuXHRcdFx0Ly8gVXNlIGEgcHJvcGVydHkgb24gdGhlIGVsZW1lbnQgZGlyZWN0bHkgd2hlbiBpdCBpcyBub3QgYSBET00gZWxlbWVudCxcblx0XHRcdC8vIG9yIHdoZW4gdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc3R5bGUgcHJvcGVydHkgdGhhdCBleGlzdHMuXG5cdFx0XHRpZiAoIHR3ZWVuLmVsZW0ubm9kZVR5cGUgIT09IDEgfHxcblx0XHRcdFx0dHdlZW4uZWxlbVsgdHdlZW4ucHJvcCBdICE9IG51bGwgJiYgdHdlZW4uZWxlbS5zdHlsZVsgdHdlZW4ucHJvcCBdID09IG51bGwgKSB7XG5cdFx0XHRcdHJldHVybiB0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF07XG5cdFx0XHR9XG5cblx0XHRcdC8vIFBhc3NpbmcgYW4gZW1wdHkgc3RyaW5nIGFzIGEgM3JkIHBhcmFtZXRlciB0byAuY3NzIHdpbGwgYXV0b21hdGljYWxseVxuXHRcdFx0Ly8gYXR0ZW1wdCBhIHBhcnNlRmxvYXQgYW5kIGZhbGxiYWNrIHRvIGEgc3RyaW5nIGlmIHRoZSBwYXJzZSBmYWlscy5cblx0XHRcdC8vIFNpbXBsZSB2YWx1ZXMgc3VjaCBhcyBcIjEwcHhcIiBhcmUgcGFyc2VkIHRvIEZsb2F0O1xuXHRcdFx0Ly8gY29tcGxleCB2YWx1ZXMgc3VjaCBhcyBcInJvdGF0ZSgxcmFkKVwiIGFyZSByZXR1cm5lZCBhcy1pcy5cblx0XHRcdHJlc3VsdCA9IGpRdWVyeS5jc3MoIHR3ZWVuLmVsZW0sIHR3ZWVuLnByb3AsIFwiXCIgKTtcblxuXHRcdFx0Ly8gRW1wdHkgc3RyaW5ncywgbnVsbCwgdW5kZWZpbmVkIGFuZCBcImF1dG9cIiBhcmUgY29udmVydGVkIHRvIDAuXG5cdFx0XHRyZXR1cm4gIXJlc3VsdCB8fCByZXN1bHQgPT09IFwiYXV0b1wiID8gMCA6IHJlc3VsdDtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXG5cdFx0XHQvLyBVc2Ugc3RlcCBob29rIGZvciBiYWNrIGNvbXBhdC5cblx0XHRcdC8vIFVzZSBjc3NIb29rIGlmIGl0cyB0aGVyZS5cblx0XHRcdC8vIFVzZSAuc3R5bGUgaWYgYXZhaWxhYmxlIGFuZCB1c2UgcGxhaW4gcHJvcGVydGllcyB3aGVyZSBhdmFpbGFibGUuXG5cdFx0XHRpZiAoIGpRdWVyeS5meC5zdGVwWyB0d2Vlbi5wcm9wIF0gKSB7XG5cdFx0XHRcdGpRdWVyeS5meC5zdGVwWyB0d2Vlbi5wcm9wIF0oIHR3ZWVuICk7XG5cdFx0XHR9IGVsc2UgaWYgKCB0d2Vlbi5lbGVtLm5vZGVUeXBlID09PSAxICYmIChcblx0XHRcdFx0alF1ZXJ5LmNzc0hvb2tzWyB0d2Vlbi5wcm9wIF0gfHxcblx0XHRcdFx0XHR0d2Vlbi5lbGVtLnN0eWxlWyBmaW5hbFByb3BOYW1lKCB0d2Vlbi5wcm9wICkgXSAhPSBudWxsICkgKSB7XG5cdFx0XHRcdGpRdWVyeS5zdHlsZSggdHdlZW4uZWxlbSwgdHdlZW4ucHJvcCwgdHdlZW4ubm93ICsgdHdlZW4udW5pdCApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dHdlZW4uZWxlbVsgdHdlZW4ucHJvcCBdID0gdHdlZW4ubm93O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbi8vIFBhbmljIGJhc2VkIGFwcHJvYWNoIHRvIHNldHRpbmcgdGhpbmdzIG9uIGRpc2Nvbm5lY3RlZCBub2Rlc1xuVHdlZW4ucHJvcEhvb2tzLnNjcm9sbFRvcCA9IFR3ZWVuLnByb3BIb29rcy5zY3JvbGxMZWZ0ID0ge1xuXHRzZXQ6IGZ1bmN0aW9uKCB0d2VlbiApIHtcblx0XHRpZiAoIHR3ZWVuLmVsZW0ubm9kZVR5cGUgJiYgdHdlZW4uZWxlbS5wYXJlbnROb2RlICkge1xuXHRcdFx0dHdlZW4uZWxlbVsgdHdlZW4ucHJvcCBdID0gdHdlZW4ubm93O1xuXHRcdH1cblx0fVxufTtcblxualF1ZXJ5LmVhc2luZyA9IHtcblx0bGluZWFyOiBmdW5jdGlvbiggcCApIHtcblx0XHRyZXR1cm4gcDtcblx0fSxcblx0c3dpbmc6IGZ1bmN0aW9uKCBwICkge1xuXHRcdHJldHVybiAwLjUgLSBNYXRoLmNvcyggcCAqIE1hdGguUEkgKSAvIDI7XG5cdH0sXG5cdF9kZWZhdWx0OiBcInN3aW5nXCJcbn07XG5cbmpRdWVyeS5meCA9IFR3ZWVuLnByb3RvdHlwZS5pbml0O1xuXG4vLyBCYWNrIGNvbXBhdCA8MS44IGV4dGVuc2lvbiBwb2ludFxualF1ZXJ5LmZ4LnN0ZXAgPSB7fTtcblxuXG5cblxudmFyXG5cdGZ4Tm93LCBpblByb2dyZXNzLFxuXHRyZnh0eXBlcyA9IC9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxcblx0cnJ1biA9IC9xdWV1ZUhvb2tzJC87XG5cbmZ1bmN0aW9uIHNjaGVkdWxlKCkge1xuXHRpZiAoIGluUHJvZ3Jlc3MgKSB7XG5cdFx0aWYgKCBkb2N1bWVudC5oaWRkZW4gPT09IGZhbHNlICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKSB7XG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBzY2hlZHVsZSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dCggc2NoZWR1bGUsIGpRdWVyeS5meC5pbnRlcnZhbCApO1xuXHRcdH1cblxuXHRcdGpRdWVyeS5meC50aWNrKCk7XG5cdH1cbn1cblxuLy8gQW5pbWF0aW9ucyBjcmVhdGVkIHN5bmNocm9ub3VzbHkgd2lsbCBydW4gc3luY2hyb25vdXNseVxuZnVuY3Rpb24gY3JlYXRlRnhOb3coKSB7XG5cdHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRmeE5vdyA9IHVuZGVmaW5lZDtcblx0fSApO1xuXHRyZXR1cm4gKCBmeE5vdyA9IERhdGUubm93KCkgKTtcbn1cblxuLy8gR2VuZXJhdGUgcGFyYW1ldGVycyB0byBjcmVhdGUgYSBzdGFuZGFyZCBhbmltYXRpb25cbmZ1bmN0aW9uIGdlbkZ4KCB0eXBlLCBpbmNsdWRlV2lkdGggKSB7XG5cdHZhciB3aGljaCxcblx0XHRpID0gMCxcblx0XHRhdHRycyA9IHsgaGVpZ2h0OiB0eXBlIH07XG5cblx0Ly8gSWYgd2UgaW5jbHVkZSB3aWR0aCwgc3RlcCB2YWx1ZSBpcyAxIHRvIGRvIGFsbCBjc3NFeHBhbmQgdmFsdWVzLFxuXHQvLyBvdGhlcndpc2Ugc3RlcCB2YWx1ZSBpcyAyIHRvIHNraXAgb3ZlciBMZWZ0IGFuZCBSaWdodFxuXHRpbmNsdWRlV2lkdGggPSBpbmNsdWRlV2lkdGggPyAxIDogMDtcblx0Zm9yICggOyBpIDwgNDsgaSArPSAyIC0gaW5jbHVkZVdpZHRoICkge1xuXHRcdHdoaWNoID0gY3NzRXhwYW5kWyBpIF07XG5cdFx0YXR0cnNbIFwibWFyZ2luXCIgKyB3aGljaCBdID0gYXR0cnNbIFwicGFkZGluZ1wiICsgd2hpY2ggXSA9IHR5cGU7XG5cdH1cblxuXHRpZiAoIGluY2x1ZGVXaWR0aCApIHtcblx0XHRhdHRycy5vcGFjaXR5ID0gYXR0cnMud2lkdGggPSB0eXBlO1xuXHR9XG5cblx0cmV0dXJuIGF0dHJzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUd2VlbiggdmFsdWUsIHByb3AsIGFuaW1hdGlvbiApIHtcblx0dmFyIHR3ZWVuLFxuXHRcdGNvbGxlY3Rpb24gPSAoIEFuaW1hdGlvbi50d2VlbmVyc1sgcHJvcCBdIHx8IFtdICkuY29uY2F0KCBBbmltYXRpb24udHdlZW5lcnNbIFwiKlwiIF0gKSxcblx0XHRpbmRleCA9IDAsXG5cdFx0bGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XG5cdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0aWYgKCAoIHR3ZWVuID0gY29sbGVjdGlvblsgaW5kZXggXS5jYWxsKCBhbmltYXRpb24sIHByb3AsIHZhbHVlICkgKSApIHtcblxuXHRcdFx0Ly8gV2UncmUgZG9uZSB3aXRoIHRoaXMgcHJvcGVydHlcblx0XHRcdHJldHVybiB0d2Vlbjtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByZWZpbHRlciggZWxlbSwgcHJvcHMsIG9wdHMgKSB7XG5cdHZhciBwcm9wLCB2YWx1ZSwgdG9nZ2xlLCBob29rcywgb2xkZmlyZSwgcHJvcFR3ZWVuLCByZXN0b3JlRGlzcGxheSwgZGlzcGxheSxcblx0XHRpc0JveCA9IFwid2lkdGhcIiBpbiBwcm9wcyB8fCBcImhlaWdodFwiIGluIHByb3BzLFxuXHRcdGFuaW0gPSB0aGlzLFxuXHRcdG9yaWcgPSB7fSxcblx0XHRzdHlsZSA9IGVsZW0uc3R5bGUsXG5cdFx0aGlkZGVuID0gZWxlbS5ub2RlVHlwZSAmJiBpc0hpZGRlbldpdGhpblRyZWUoIGVsZW0gKSxcblx0XHRkYXRhU2hvdyA9IGRhdGFQcml2LmdldCggZWxlbSwgXCJmeHNob3dcIiApO1xuXG5cdC8vIFF1ZXVlLXNraXBwaW5nIGFuaW1hdGlvbnMgaGlqYWNrIHRoZSBmeCBob29rc1xuXHRpZiAoICFvcHRzLnF1ZXVlICkge1xuXHRcdGhvb2tzID0galF1ZXJ5Ll9xdWV1ZUhvb2tzKCBlbGVtLCBcImZ4XCIgKTtcblx0XHRpZiAoIGhvb2tzLnVucXVldWVkID09IG51bGwgKSB7XG5cdFx0XHRob29rcy51bnF1ZXVlZCA9IDA7XG5cdFx0XHRvbGRmaXJlID0gaG9va3MuZW1wdHkuZmlyZTtcblx0XHRcdGhvb2tzLmVtcHR5LmZpcmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCAhaG9va3MudW5xdWV1ZWQgKSB7XG5cdFx0XHRcdFx0b2xkZmlyZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRob29rcy51bnF1ZXVlZCsrO1xuXG5cdFx0YW5pbS5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBFbnN1cmUgdGhlIGNvbXBsZXRlIGhhbmRsZXIgaXMgY2FsbGVkIGJlZm9yZSB0aGlzIGNvbXBsZXRlc1xuXHRcdFx0YW5pbS5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRob29rcy51bnF1ZXVlZC0tO1xuXHRcdFx0XHRpZiAoICFqUXVlcnkucXVldWUoIGVsZW0sIFwiZnhcIiApLmxlbmd0aCApIHtcblx0XHRcdFx0XHRob29rcy5lbXB0eS5maXJlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBEZXRlY3Qgc2hvdy9oaWRlIGFuaW1hdGlvbnNcblx0Zm9yICggcHJvcCBpbiBwcm9wcyApIHtcblx0XHR2YWx1ZSA9IHByb3BzWyBwcm9wIF07XG5cdFx0aWYgKCByZnh0eXBlcy50ZXN0KCB2YWx1ZSApICkge1xuXHRcdFx0ZGVsZXRlIHByb3BzWyBwcm9wIF07XG5cdFx0XHR0b2dnbGUgPSB0b2dnbGUgfHwgdmFsdWUgPT09IFwidG9nZ2xlXCI7XG5cdFx0XHRpZiAoIHZhbHVlID09PSAoIGhpZGRlbiA/IFwiaGlkZVwiIDogXCJzaG93XCIgKSApIHtcblxuXHRcdFx0XHQvLyBQcmV0ZW5kIHRvIGJlIGhpZGRlbiBpZiB0aGlzIGlzIGEgXCJzaG93XCIgYW5kXG5cdFx0XHRcdC8vIHRoZXJlIGlzIHN0aWxsIGRhdGEgZnJvbSBhIHN0b3BwZWQgc2hvdy9oaWRlXG5cdFx0XHRcdGlmICggdmFsdWUgPT09IFwic2hvd1wiICYmIGRhdGFTaG93ICYmIGRhdGFTaG93WyBwcm9wIF0gIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRoaWRkZW4gPSB0cnVlO1xuXG5cdFx0XHRcdC8vIElnbm9yZSBhbGwgb3RoZXIgbm8tb3Agc2hvdy9oaWRlIGRhdGFcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0b3JpZ1sgcHJvcCBdID0gZGF0YVNob3cgJiYgZGF0YVNob3dbIHByb3AgXSB8fCBqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBCYWlsIG91dCBpZiB0aGlzIGlzIGEgbm8tb3AgbGlrZSAuaGlkZSgpLmhpZGUoKVxuXHRwcm9wVHdlZW4gPSAhalF1ZXJ5LmlzRW1wdHlPYmplY3QoIHByb3BzICk7XG5cdGlmICggIXByb3BUd2VlbiAmJiBqUXVlcnkuaXNFbXB0eU9iamVjdCggb3JpZyApICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFJlc3RyaWN0IFwib3ZlcmZsb3dcIiBhbmQgXCJkaXNwbGF5XCIgc3R5bGVzIGR1cmluZyBib3ggYW5pbWF0aW9uc1xuXHRpZiAoIGlzQm94ICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSwgRWRnZSAxMiAtIDE1XG5cdFx0Ly8gUmVjb3JkIGFsbCAzIG92ZXJmbG93IGF0dHJpYnV0ZXMgYmVjYXVzZSBJRSBkb2VzIG5vdCBpbmZlciB0aGUgc2hvcnRoYW5kXG5cdFx0Ly8gZnJvbSBpZGVudGljYWxseS12YWx1ZWQgb3ZlcmZsb3dYIGFuZCBvdmVyZmxvd1kgYW5kIEVkZ2UganVzdCBtaXJyb3JzXG5cdFx0Ly8gdGhlIG92ZXJmbG93WCB2YWx1ZSB0aGVyZS5cblx0XHRvcHRzLm92ZXJmbG93ID0gWyBzdHlsZS5vdmVyZmxvdywgc3R5bGUub3ZlcmZsb3dYLCBzdHlsZS5vdmVyZmxvd1kgXTtcblxuXHRcdC8vIElkZW50aWZ5IGEgZGlzcGxheSB0eXBlLCBwcmVmZXJyaW5nIG9sZCBzaG93L2hpZGUgZGF0YSBvdmVyIHRoZSBDU1MgY2FzY2FkZVxuXHRcdHJlc3RvcmVEaXNwbGF5ID0gZGF0YVNob3cgJiYgZGF0YVNob3cuZGlzcGxheTtcblx0XHRpZiAoIHJlc3RvcmVEaXNwbGF5ID09IG51bGwgKSB7XG5cdFx0XHRyZXN0b3JlRGlzcGxheSA9IGRhdGFQcml2LmdldCggZWxlbSwgXCJkaXNwbGF5XCIgKTtcblx0XHR9XG5cdFx0ZGlzcGxheSA9IGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiICk7XG5cdFx0aWYgKCBkaXNwbGF5ID09PSBcIm5vbmVcIiApIHtcblx0XHRcdGlmICggcmVzdG9yZURpc3BsYXkgKSB7XG5cdFx0XHRcdGRpc3BsYXkgPSByZXN0b3JlRGlzcGxheTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gR2V0IG5vbmVtcHR5IHZhbHVlKHMpIGJ5IHRlbXBvcmFyaWx5IGZvcmNpbmcgdmlzaWJpbGl0eVxuXHRcdFx0XHRzaG93SGlkZSggWyBlbGVtIF0sIHRydWUgKTtcblx0XHRcdFx0cmVzdG9yZURpc3BsYXkgPSBlbGVtLnN0eWxlLmRpc3BsYXkgfHwgcmVzdG9yZURpc3BsYXk7XG5cdFx0XHRcdGRpc3BsYXkgPSBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApO1xuXHRcdFx0XHRzaG93SGlkZSggWyBlbGVtIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBBbmltYXRlIGlubGluZSBlbGVtZW50cyBhcyBpbmxpbmUtYmxvY2tcblx0XHRpZiAoIGRpc3BsYXkgPT09IFwiaW5saW5lXCIgfHwgZGlzcGxheSA9PT0gXCJpbmxpbmUtYmxvY2tcIiAmJiByZXN0b3JlRGlzcGxheSAhPSBudWxsICkge1xuXHRcdFx0aWYgKCBqUXVlcnkuY3NzKCBlbGVtLCBcImZsb2F0XCIgKSA9PT0gXCJub25lXCIgKSB7XG5cblx0XHRcdFx0Ly8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgZGlzcGxheSB2YWx1ZSBhdCB0aGUgZW5kIG9mIHB1cmUgc2hvdy9oaWRlIGFuaW1hdGlvbnNcblx0XHRcdFx0aWYgKCAhcHJvcFR3ZWVuICkge1xuXHRcdFx0XHRcdGFuaW0uZG9uZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRzdHlsZS5kaXNwbGF5ID0gcmVzdG9yZURpc3BsYXk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGlmICggcmVzdG9yZURpc3BsYXkgPT0gbnVsbCApIHtcblx0XHRcdFx0XHRcdGRpc3BsYXkgPSBzdHlsZS5kaXNwbGF5O1xuXHRcdFx0XHRcdFx0cmVzdG9yZURpc3BsYXkgPSBkaXNwbGF5ID09PSBcIm5vbmVcIiA/IFwiXCIgOiBkaXNwbGF5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRzdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoIG9wdHMub3ZlcmZsb3cgKSB7XG5cdFx0c3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXHRcdGFuaW0uYWx3YXlzKCBmdW5jdGlvbigpIHtcblx0XHRcdHN0eWxlLm92ZXJmbG93ID0gb3B0cy5vdmVyZmxvd1sgMCBdO1xuXHRcdFx0c3R5bGUub3ZlcmZsb3dYID0gb3B0cy5vdmVyZmxvd1sgMSBdO1xuXHRcdFx0c3R5bGUub3ZlcmZsb3dZID0gb3B0cy5vdmVyZmxvd1sgMiBdO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8vIEltcGxlbWVudCBzaG93L2hpZGUgYW5pbWF0aW9uc1xuXHRwcm9wVHdlZW4gPSBmYWxzZTtcblx0Zm9yICggcHJvcCBpbiBvcmlnICkge1xuXG5cdFx0Ly8gR2VuZXJhbCBzaG93L2hpZGUgc2V0dXAgZm9yIHRoaXMgZWxlbWVudCBhbmltYXRpb25cblx0XHRpZiAoICFwcm9wVHdlZW4gKSB7XG5cdFx0XHRpZiAoIGRhdGFTaG93ICkge1xuXHRcdFx0XHRpZiAoIFwiaGlkZGVuXCIgaW4gZGF0YVNob3cgKSB7XG5cdFx0XHRcdFx0aGlkZGVuID0gZGF0YVNob3cuaGlkZGVuO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkYXRhU2hvdyA9IGRhdGFQcml2LmFjY2VzcyggZWxlbSwgXCJmeHNob3dcIiwgeyBkaXNwbGF5OiByZXN0b3JlRGlzcGxheSB9ICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN0b3JlIGhpZGRlbi92aXNpYmxlIGZvciB0b2dnbGUgc28gYC5zdG9wKCkudG9nZ2xlKClgIFwicmV2ZXJzZXNcIlxuXHRcdFx0aWYgKCB0b2dnbGUgKSB7XG5cdFx0XHRcdGRhdGFTaG93LmhpZGRlbiA9ICFoaWRkZW47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNob3cgZWxlbWVudHMgYmVmb3JlIGFuaW1hdGluZyB0aGVtXG5cdFx0XHRpZiAoIGhpZGRlbiApIHtcblx0XHRcdFx0c2hvd0hpZGUoIFsgZWxlbSBdLCB0cnVlICk7XG5cdFx0XHR9XG5cblx0XHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWxvb3AtZnVuYyAqL1xuXG5cdFx0XHRhbmltLmRvbmUoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdC8qIGVzbGludC1lbmFibGUgbm8tbG9vcC1mdW5jICovXG5cblx0XHRcdFx0Ly8gVGhlIGZpbmFsIHN0ZXAgb2YgYSBcImhpZGVcIiBhbmltYXRpb24gaXMgYWN0dWFsbHkgaGlkaW5nIHRoZSBlbGVtZW50XG5cdFx0XHRcdGlmICggIWhpZGRlbiApIHtcblx0XHRcdFx0XHRzaG93SGlkZSggWyBlbGVtIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIFwiZnhzaG93XCIgKTtcblx0XHRcdFx0Zm9yICggcHJvcCBpbiBvcmlnICkge1xuXHRcdFx0XHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgcHJvcCwgb3JpZ1sgcHJvcCBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHQvLyBQZXItcHJvcGVydHkgc2V0dXBcblx0XHRwcm9wVHdlZW4gPSBjcmVhdGVUd2VlbiggaGlkZGVuID8gZGF0YVNob3dbIHByb3AgXSA6IDAsIHByb3AsIGFuaW0gKTtcblx0XHRpZiAoICEoIHByb3AgaW4gZGF0YVNob3cgKSApIHtcblx0XHRcdGRhdGFTaG93WyBwcm9wIF0gPSBwcm9wVHdlZW4uc3RhcnQ7XG5cdFx0XHRpZiAoIGhpZGRlbiApIHtcblx0XHRcdFx0cHJvcFR3ZWVuLmVuZCA9IHByb3BUd2Vlbi5zdGFydDtcblx0XHRcdFx0cHJvcFR3ZWVuLnN0YXJ0ID0gMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gcHJvcEZpbHRlciggcHJvcHMsIHNwZWNpYWxFYXNpbmcgKSB7XG5cdHZhciBpbmRleCwgbmFtZSwgZWFzaW5nLCB2YWx1ZSwgaG9va3M7XG5cblx0Ly8gY2FtZWxDYXNlLCBzcGVjaWFsRWFzaW5nIGFuZCBleHBhbmQgY3NzSG9vayBwYXNzXG5cdGZvciAoIGluZGV4IGluIHByb3BzICkge1xuXHRcdG5hbWUgPSBjYW1lbENhc2UoIGluZGV4ICk7XG5cdFx0ZWFzaW5nID0gc3BlY2lhbEVhc2luZ1sgbmFtZSBdO1xuXHRcdHZhbHVlID0gcHJvcHNbIGluZGV4IF07XG5cdFx0aWYgKCBBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdFx0ZWFzaW5nID0gdmFsdWVbIDEgXTtcblx0XHRcdHZhbHVlID0gcHJvcHNbIGluZGV4IF0gPSB2YWx1ZVsgMCBdO1xuXHRcdH1cblxuXHRcdGlmICggaW5kZXggIT09IG5hbWUgKSB7XG5cdFx0XHRwcm9wc1sgbmFtZSBdID0gdmFsdWU7XG5cdFx0XHRkZWxldGUgcHJvcHNbIGluZGV4IF07XG5cdFx0fVxuXG5cdFx0aG9va3MgPSBqUXVlcnkuY3NzSG9va3NbIG5hbWUgXTtcblx0XHRpZiAoIGhvb2tzICYmIFwiZXhwYW5kXCIgaW4gaG9va3MgKSB7XG5cdFx0XHR2YWx1ZSA9IGhvb2tzLmV4cGFuZCggdmFsdWUgKTtcblx0XHRcdGRlbGV0ZSBwcm9wc1sgbmFtZSBdO1xuXG5cdFx0XHQvLyBOb3QgcXVpdGUgJC5leHRlbmQsIHRoaXMgd29uJ3Qgb3ZlcndyaXRlIGV4aXN0aW5nIGtleXMuXG5cdFx0XHQvLyBSZXVzaW5nICdpbmRleCcgYmVjYXVzZSB3ZSBoYXZlIHRoZSBjb3JyZWN0IFwibmFtZVwiXG5cdFx0XHRmb3IgKCBpbmRleCBpbiB2YWx1ZSApIHtcblx0XHRcdFx0aWYgKCAhKCBpbmRleCBpbiBwcm9wcyApICkge1xuXHRcdFx0XHRcdHByb3BzWyBpbmRleCBdID0gdmFsdWVbIGluZGV4IF07XG5cdFx0XHRcdFx0c3BlY2lhbEVhc2luZ1sgaW5kZXggXSA9IGVhc2luZztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzcGVjaWFsRWFzaW5nWyBuYW1lIF0gPSBlYXNpbmc7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIEFuaW1hdGlvbiggZWxlbSwgcHJvcGVydGllcywgb3B0aW9ucyApIHtcblx0dmFyIHJlc3VsdCxcblx0XHRzdG9wcGVkLFxuXHRcdGluZGV4ID0gMCxcblx0XHRsZW5ndGggPSBBbmltYXRpb24ucHJlZmlsdGVycy5sZW5ndGgsXG5cdFx0ZGVmZXJyZWQgPSBqUXVlcnkuRGVmZXJyZWQoKS5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBEb24ndCBtYXRjaCBlbGVtIGluIHRoZSA6YW5pbWF0ZWQgc2VsZWN0b3Jcblx0XHRcdGRlbGV0ZSB0aWNrLmVsZW07XG5cdFx0fSApLFxuXHRcdHRpY2sgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggc3RvcHBlZCApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGN1cnJlbnRUaW1lID0gZnhOb3cgfHwgY3JlYXRlRnhOb3coKSxcblx0XHRcdFx0cmVtYWluaW5nID0gTWF0aC5tYXgoIDAsIGFuaW1hdGlvbi5zdGFydFRpbWUgKyBhbmltYXRpb24uZHVyYXRpb24gLSBjdXJyZW50VGltZSApLFxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgMi4zIG9ubHlcblx0XHRcdFx0Ly8gQXJjaGFpYyBjcmFzaCBidWcgd29uJ3QgYWxsb3cgdXMgdG8gdXNlIGAxIC0gKCAwLjUgfHwgMCApYCAodHJhYy0xMjQ5Nylcblx0XHRcdFx0dGVtcCA9IHJlbWFpbmluZyAvIGFuaW1hdGlvbi5kdXJhdGlvbiB8fCAwLFxuXHRcdFx0XHRwZXJjZW50ID0gMSAtIHRlbXAsXG5cdFx0XHRcdGluZGV4ID0gMCxcblx0XHRcdFx0bGVuZ3RoID0gYW5pbWF0aW9uLnR3ZWVucy5sZW5ndGg7XG5cblx0XHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRcdGFuaW1hdGlvbi50d2VlbnNbIGluZGV4IF0ucnVuKCBwZXJjZW50ICk7XG5cdFx0XHR9XG5cblx0XHRcdGRlZmVycmVkLm5vdGlmeVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCBwZXJjZW50LCByZW1haW5pbmcgXSApO1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIG1vcmUgdG8gZG8sIHlpZWxkXG5cdFx0XHRpZiAoIHBlcmNlbnQgPCAxICYmIGxlbmd0aCApIHtcblx0XHRcdFx0cmV0dXJuIHJlbWFpbmluZztcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhpcyB3YXMgYW4gZW1wdHkgYW5pbWF0aW9uLCBzeW50aGVzaXplIGEgZmluYWwgcHJvZ3Jlc3Mgbm90aWZpY2F0aW9uXG5cdFx0XHRpZiAoICFsZW5ndGggKSB7XG5cdFx0XHRcdGRlZmVycmVkLm5vdGlmeVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCAxLCAwIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVzb2x2ZSB0aGUgYW5pbWF0aW9uIGFuZCByZXBvcnQgaXRzIGNvbmNsdXNpb25cblx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiBdICk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHRhbmltYXRpb24gPSBkZWZlcnJlZC5wcm9taXNlKCB7XG5cdFx0XHRlbGVtOiBlbGVtLFxuXHRcdFx0cHJvcHM6IGpRdWVyeS5leHRlbmQoIHt9LCBwcm9wZXJ0aWVzICksXG5cdFx0XHRvcHRzOiBqUXVlcnkuZXh0ZW5kKCB0cnVlLCB7XG5cdFx0XHRcdHNwZWNpYWxFYXNpbmc6IHt9LFxuXHRcdFx0XHRlYXNpbmc6IGpRdWVyeS5lYXNpbmcuX2RlZmF1bHRcblx0XHRcdH0sIG9wdGlvbnMgKSxcblx0XHRcdG9yaWdpbmFsUHJvcGVydGllczogcHJvcGVydGllcyxcblx0XHRcdG9yaWdpbmFsT3B0aW9uczogb3B0aW9ucyxcblx0XHRcdHN0YXJ0VGltZTogZnhOb3cgfHwgY3JlYXRlRnhOb3coKSxcblx0XHRcdGR1cmF0aW9uOiBvcHRpb25zLmR1cmF0aW9uLFxuXHRcdFx0dHdlZW5zOiBbXSxcblx0XHRcdGNyZWF0ZVR3ZWVuOiBmdW5jdGlvbiggcHJvcCwgZW5kICkge1xuXHRcdFx0XHR2YXIgdHdlZW4gPSBqUXVlcnkuVHdlZW4oIGVsZW0sIGFuaW1hdGlvbi5vcHRzLCBwcm9wLCBlbmQsXG5cdFx0XHRcdFx0YW5pbWF0aW9uLm9wdHMuc3BlY2lhbEVhc2luZ1sgcHJvcCBdIHx8IGFuaW1hdGlvbi5vcHRzLmVhc2luZyApO1xuXHRcdFx0XHRhbmltYXRpb24udHdlZW5zLnB1c2goIHR3ZWVuICk7XG5cdFx0XHRcdHJldHVybiB0d2Vlbjtcblx0XHRcdH0sXG5cdFx0XHRzdG9wOiBmdW5jdGlvbiggZ290b0VuZCApIHtcblx0XHRcdFx0dmFyIGluZGV4ID0gMCxcblxuXHRcdFx0XHRcdC8vIElmIHdlIGFyZSBnb2luZyB0byB0aGUgZW5kLCB3ZSB3YW50IHRvIHJ1biBhbGwgdGhlIHR3ZWVuc1xuXHRcdFx0XHRcdC8vIG90aGVyd2lzZSB3ZSBza2lwIHRoaXMgcGFydFxuXHRcdFx0XHRcdGxlbmd0aCA9IGdvdG9FbmQgPyBhbmltYXRpb24udHdlZW5zLmxlbmd0aCA6IDA7XG5cdFx0XHRcdGlmICggc3RvcHBlZCApIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0XHRzdG9wcGVkID0gdHJ1ZTtcblx0XHRcdFx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRcdFx0XHRhbmltYXRpb24udHdlZW5zWyBpbmRleCBdLnJ1biggMSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVzb2x2ZSB3aGVuIHdlIHBsYXllZCB0aGUgbGFzdCBmcmFtZTsgb3RoZXJ3aXNlLCByZWplY3Rcblx0XHRcdFx0aWYgKCBnb3RvRW5kICkge1xuXHRcdFx0XHRcdGRlZmVycmVkLm5vdGlmeVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCAxLCAwIF0gKTtcblx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlV2l0aCggZWxlbSwgWyBhbmltYXRpb24sIGdvdG9FbmQgXSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdFdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCBnb3RvRW5kIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHR9ICksXG5cdFx0cHJvcHMgPSBhbmltYXRpb24ucHJvcHM7XG5cblx0cHJvcEZpbHRlciggcHJvcHMsIGFuaW1hdGlvbi5vcHRzLnNwZWNpYWxFYXNpbmcgKTtcblxuXHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdHJlc3VsdCA9IEFuaW1hdGlvbi5wcmVmaWx0ZXJzWyBpbmRleCBdLmNhbGwoIGFuaW1hdGlvbiwgZWxlbSwgcHJvcHMsIGFuaW1hdGlvbi5vcHRzICk7XG5cdFx0aWYgKCByZXN1bHQgKSB7XG5cdFx0XHRpZiAoIGlzRnVuY3Rpb24oIHJlc3VsdC5zdG9wICkgKSB7XG5cdFx0XHRcdGpRdWVyeS5fcXVldWVIb29rcyggYW5pbWF0aW9uLmVsZW0sIGFuaW1hdGlvbi5vcHRzLnF1ZXVlICkuc3RvcCA9XG5cdFx0XHRcdFx0cmVzdWx0LnN0b3AuYmluZCggcmVzdWx0ICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0fVxuXG5cdGpRdWVyeS5tYXAoIHByb3BzLCBjcmVhdGVUd2VlbiwgYW5pbWF0aW9uICk7XG5cblx0aWYgKCBpc0Z1bmN0aW9uKCBhbmltYXRpb24ub3B0cy5zdGFydCApICkge1xuXHRcdGFuaW1hdGlvbi5vcHRzLnN0YXJ0LmNhbGwoIGVsZW0sIGFuaW1hdGlvbiApO1xuXHR9XG5cblx0Ly8gQXR0YWNoIGNhbGxiYWNrcyBmcm9tIG9wdGlvbnNcblx0YW5pbWF0aW9uXG5cdFx0LnByb2dyZXNzKCBhbmltYXRpb24ub3B0cy5wcm9ncmVzcyApXG5cdFx0LmRvbmUoIGFuaW1hdGlvbi5vcHRzLmRvbmUsIGFuaW1hdGlvbi5vcHRzLmNvbXBsZXRlIClcblx0XHQuZmFpbCggYW5pbWF0aW9uLm9wdHMuZmFpbCApXG5cdFx0LmFsd2F5cyggYW5pbWF0aW9uLm9wdHMuYWx3YXlzICk7XG5cblx0alF1ZXJ5LmZ4LnRpbWVyKFxuXHRcdGpRdWVyeS5leHRlbmQoIHRpY2ssIHtcblx0XHRcdGVsZW06IGVsZW0sXG5cdFx0XHRhbmltOiBhbmltYXRpb24sXG5cdFx0XHRxdWV1ZTogYW5pbWF0aW9uLm9wdHMucXVldWVcblx0XHR9IClcblx0KTtcblxuXHRyZXR1cm4gYW5pbWF0aW9uO1xufVxuXG5qUXVlcnkuQW5pbWF0aW9uID0galF1ZXJ5LmV4dGVuZCggQW5pbWF0aW9uLCB7XG5cblx0dHdlZW5lcnM6IHtcblx0XHRcIipcIjogWyBmdW5jdGlvbiggcHJvcCwgdmFsdWUgKSB7XG5cdFx0XHR2YXIgdHdlZW4gPSB0aGlzLmNyZWF0ZVR3ZWVuKCBwcm9wLCB2YWx1ZSApO1xuXHRcdFx0YWRqdXN0Q1NTKCB0d2Vlbi5lbGVtLCBwcm9wLCByY3NzTnVtLmV4ZWMoIHZhbHVlICksIHR3ZWVuICk7XG5cdFx0XHRyZXR1cm4gdHdlZW47XG5cdFx0fSBdXG5cdH0sXG5cblx0dHdlZW5lcjogZnVuY3Rpb24oIHByb3BzLCBjYWxsYmFjayApIHtcblx0XHRpZiAoIGlzRnVuY3Rpb24oIHByb3BzICkgKSB7XG5cdFx0XHRjYWxsYmFjayA9IHByb3BzO1xuXHRcdFx0cHJvcHMgPSBbIFwiKlwiIF07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHByb3BzID0gcHJvcHMubWF0Y2goIHJub3RodG1sd2hpdGUgKTtcblx0XHR9XG5cblx0XHR2YXIgcHJvcCxcblx0XHRcdGluZGV4ID0gMCxcblx0XHRcdGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuXHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRwcm9wID0gcHJvcHNbIGluZGV4IF07XG5cdFx0XHRBbmltYXRpb24udHdlZW5lcnNbIHByb3AgXSA9IEFuaW1hdGlvbi50d2VlbmVyc1sgcHJvcCBdIHx8IFtdO1xuXHRcdFx0QW5pbWF0aW9uLnR3ZWVuZXJzWyBwcm9wIF0udW5zaGlmdCggY2FsbGJhY2sgKTtcblx0XHR9XG5cdH0sXG5cblx0cHJlZmlsdGVyczogWyBkZWZhdWx0UHJlZmlsdGVyIF0sXG5cblx0cHJlZmlsdGVyOiBmdW5jdGlvbiggY2FsbGJhY2ssIHByZXBlbmQgKSB7XG5cdFx0aWYgKCBwcmVwZW5kICkge1xuXHRcdFx0QW5pbWF0aW9uLnByZWZpbHRlcnMudW5zaGlmdCggY2FsbGJhY2sgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0QW5pbWF0aW9uLnByZWZpbHRlcnMucHVzaCggY2FsbGJhY2sgKTtcblx0XHR9XG5cdH1cbn0gKTtcblxualF1ZXJ5LnNwZWVkID0gZnVuY3Rpb24oIHNwZWVkLCBlYXNpbmcsIGZuICkge1xuXHR2YXIgb3B0ID0gc3BlZWQgJiYgdHlwZW9mIHNwZWVkID09PSBcIm9iamVjdFwiID8galF1ZXJ5LmV4dGVuZCgge30sIHNwZWVkICkgOiB7XG5cdFx0Y29tcGxldGU6IGZuIHx8ICFmbiAmJiBlYXNpbmcgfHxcblx0XHRcdGlzRnVuY3Rpb24oIHNwZWVkICkgJiYgc3BlZWQsXG5cdFx0ZHVyYXRpb246IHNwZWVkLFxuXHRcdGVhc2luZzogZm4gJiYgZWFzaW5nIHx8IGVhc2luZyAmJiAhaXNGdW5jdGlvbiggZWFzaW5nICkgJiYgZWFzaW5nXG5cdH07XG5cblx0Ly8gR28gdG8gdGhlIGVuZCBzdGF0ZSBpZiBmeCBhcmUgb2ZmXG5cdGlmICggalF1ZXJ5LmZ4Lm9mZiApIHtcblx0XHRvcHQuZHVyYXRpb24gPSAwO1xuXG5cdH0gZWxzZSB7XG5cdFx0aWYgKCB0eXBlb2Ygb3B0LmR1cmF0aW9uICE9PSBcIm51bWJlclwiICkge1xuXHRcdFx0aWYgKCBvcHQuZHVyYXRpb24gaW4galF1ZXJ5LmZ4LnNwZWVkcyApIHtcblx0XHRcdFx0b3B0LmR1cmF0aW9uID0galF1ZXJ5LmZ4LnNwZWVkc1sgb3B0LmR1cmF0aW9uIF07XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9wdC5kdXJhdGlvbiA9IGpRdWVyeS5meC5zcGVlZHMuX2RlZmF1bHQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gTm9ybWFsaXplIG9wdC5xdWV1ZSAtIHRydWUvdW5kZWZpbmVkL251bGwgLT4gXCJmeFwiXG5cdGlmICggb3B0LnF1ZXVlID09IG51bGwgfHwgb3B0LnF1ZXVlID09PSB0cnVlICkge1xuXHRcdG9wdC5xdWV1ZSA9IFwiZnhcIjtcblx0fVxuXG5cdC8vIFF1ZXVlaW5nXG5cdG9wdC5vbGQgPSBvcHQuY29tcGxldGU7XG5cblx0b3B0LmNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCBvcHQub2xkICkgKSB7XG5cdFx0XHRvcHQub2xkLmNhbGwoIHRoaXMgKTtcblx0XHR9XG5cblx0XHRpZiAoIG9wdC5xdWV1ZSApIHtcblx0XHRcdGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCBvcHQucXVldWUgKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIG9wdDtcbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0ZmFkZVRvOiBmdW5jdGlvbiggc3BlZWQsIHRvLCBlYXNpbmcsIGNhbGxiYWNrICkge1xuXG5cdFx0Ly8gU2hvdyBhbnkgaGlkZGVuIGVsZW1lbnRzIGFmdGVyIHNldHRpbmcgb3BhY2l0eSB0byAwXG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyKCBpc0hpZGRlbldpdGhpblRyZWUgKS5jc3MoIFwib3BhY2l0eVwiLCAwICkuc2hvdygpXG5cblx0XHRcdC8vIEFuaW1hdGUgdG8gdGhlIHZhbHVlIHNwZWNpZmllZFxuXHRcdFx0LmVuZCgpLmFuaW1hdGUoIHsgb3BhY2l0eTogdG8gfSwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKTtcblx0fSxcblx0YW5pbWF0ZTogZnVuY3Rpb24oIHByb3AsIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICkge1xuXHRcdHZhciBlbXB0eSA9IGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBwcm9wICksXG5cdFx0XHRvcHRhbGwgPSBqUXVlcnkuc3BlZWQoIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICksXG5cdFx0XHRkb0FuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdC8vIE9wZXJhdGUgb24gYSBjb3B5IG9mIHByb3Agc28gcGVyLXByb3BlcnR5IGVhc2luZyB3b24ndCBiZSBsb3N0XG5cdFx0XHRcdHZhciBhbmltID0gQW5pbWF0aW9uKCB0aGlzLCBqUXVlcnkuZXh0ZW5kKCB7fSwgcHJvcCApLCBvcHRhbGwgKTtcblxuXHRcdFx0XHQvLyBFbXB0eSBhbmltYXRpb25zLCBvciBmaW5pc2hpbmcgcmVzb2x2ZXMgaW1tZWRpYXRlbHlcblx0XHRcdFx0aWYgKCBlbXB0eSB8fCBkYXRhUHJpdi5nZXQoIHRoaXMsIFwiZmluaXNoXCIgKSApIHtcblx0XHRcdFx0XHRhbmltLnN0b3AoIHRydWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdGRvQW5pbWF0aW9uLmZpbmlzaCA9IGRvQW5pbWF0aW9uO1xuXG5cdFx0cmV0dXJuIGVtcHR5IHx8IG9wdGFsbC5xdWV1ZSA9PT0gZmFsc2UgP1xuXHRcdFx0dGhpcy5lYWNoKCBkb0FuaW1hdGlvbiApIDpcblx0XHRcdHRoaXMucXVldWUoIG9wdGFsbC5xdWV1ZSwgZG9BbmltYXRpb24gKTtcblx0fSxcblx0c3RvcDogZnVuY3Rpb24oIHR5cGUsIGNsZWFyUXVldWUsIGdvdG9FbmQgKSB7XG5cdFx0dmFyIHN0b3BRdWV1ZSA9IGZ1bmN0aW9uKCBob29rcyApIHtcblx0XHRcdHZhciBzdG9wID0gaG9va3Muc3RvcDtcblx0XHRcdGRlbGV0ZSBob29rcy5zdG9wO1xuXHRcdFx0c3RvcCggZ290b0VuZCApO1xuXHRcdH07XG5cblx0XHRpZiAoIHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0Z290b0VuZCA9IGNsZWFyUXVldWU7XG5cdFx0XHRjbGVhclF1ZXVlID0gdHlwZTtcblx0XHRcdHR5cGUgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdGlmICggY2xlYXJRdWV1ZSApIHtcblx0XHRcdHRoaXMucXVldWUoIHR5cGUgfHwgXCJmeFwiLCBbXSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGRlcXVldWUgPSB0cnVlLFxuXHRcdFx0XHRpbmRleCA9IHR5cGUgIT0gbnVsbCAmJiB0eXBlICsgXCJxdWV1ZUhvb2tzXCIsXG5cdFx0XHRcdHRpbWVycyA9IGpRdWVyeS50aW1lcnMsXG5cdFx0XHRcdGRhdGEgPSBkYXRhUHJpdi5nZXQoIHRoaXMgKTtcblxuXHRcdFx0aWYgKCBpbmRleCApIHtcblx0XHRcdFx0aWYgKCBkYXRhWyBpbmRleCBdICYmIGRhdGFbIGluZGV4IF0uc3RvcCApIHtcblx0XHRcdFx0XHRzdG9wUXVldWUoIGRhdGFbIGluZGV4IF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yICggaW5kZXggaW4gZGF0YSApIHtcblx0XHRcdFx0XHRpZiAoIGRhdGFbIGluZGV4IF0gJiYgZGF0YVsgaW5kZXggXS5zdG9wICYmIHJydW4udGVzdCggaW5kZXggKSApIHtcblx0XHRcdFx0XHRcdHN0b3BRdWV1ZSggZGF0YVsgaW5kZXggXSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKCBpbmRleCA9IHRpbWVycy5sZW5ndGg7IGluZGV4LS07ICkge1xuXHRcdFx0XHRpZiAoIHRpbWVyc1sgaW5kZXggXS5lbGVtID09PSB0aGlzICYmXG5cdFx0XHRcdFx0KCB0eXBlID09IG51bGwgfHwgdGltZXJzWyBpbmRleCBdLnF1ZXVlID09PSB0eXBlICkgKSB7XG5cblx0XHRcdFx0XHR0aW1lcnNbIGluZGV4IF0uYW5pbS5zdG9wKCBnb3RvRW5kICk7XG5cdFx0XHRcdFx0ZGVxdWV1ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdHRpbWVycy5zcGxpY2UoIGluZGV4LCAxICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gU3RhcnQgdGhlIG5leHQgaW4gdGhlIHF1ZXVlIGlmIHRoZSBsYXN0IHN0ZXAgd2Fzbid0IGZvcmNlZC5cblx0XHRcdC8vIFRpbWVycyBjdXJyZW50bHkgd2lsbCBjYWxsIHRoZWlyIGNvbXBsZXRlIGNhbGxiYWNrcywgd2hpY2hcblx0XHRcdC8vIHdpbGwgZGVxdWV1ZSBidXQgb25seSBpZiB0aGV5IHdlcmUgZ290b0VuZC5cblx0XHRcdGlmICggZGVxdWV1ZSB8fCAhZ290b0VuZCApIHtcblx0XHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIHR5cGUgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cdGZpbmlzaDogZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0aWYgKCB0eXBlICE9PSBmYWxzZSApIHtcblx0XHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW5kZXgsXG5cdFx0XHRcdGRhdGEgPSBkYXRhUHJpdi5nZXQoIHRoaXMgKSxcblx0XHRcdFx0cXVldWUgPSBkYXRhWyB0eXBlICsgXCJxdWV1ZVwiIF0sXG5cdFx0XHRcdGhvb2tzID0gZGF0YVsgdHlwZSArIFwicXVldWVIb29rc1wiIF0sXG5cdFx0XHRcdHRpbWVycyA9IGpRdWVyeS50aW1lcnMsXG5cdFx0XHRcdGxlbmd0aCA9IHF1ZXVlID8gcXVldWUubGVuZ3RoIDogMDtcblxuXHRcdFx0Ly8gRW5hYmxlIGZpbmlzaGluZyBmbGFnIG9uIHByaXZhdGUgZGF0YVxuXHRcdFx0ZGF0YS5maW5pc2ggPSB0cnVlO1xuXG5cdFx0XHQvLyBFbXB0eSB0aGUgcXVldWUgZmlyc3Rcblx0XHRcdGpRdWVyeS5xdWV1ZSggdGhpcywgdHlwZSwgW10gKTtcblxuXHRcdFx0aWYgKCBob29rcyAmJiBob29rcy5zdG9wICkge1xuXHRcdFx0XHRob29rcy5zdG9wLmNhbGwoIHRoaXMsIHRydWUgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9vayBmb3IgYW55IGFjdGl2ZSBhbmltYXRpb25zLCBhbmQgZmluaXNoIHRoZW1cblx0XHRcdGZvciAoIGluZGV4ID0gdGltZXJzLmxlbmd0aDsgaW5kZXgtLTsgKSB7XG5cdFx0XHRcdGlmICggdGltZXJzWyBpbmRleCBdLmVsZW0gPT09IHRoaXMgJiYgdGltZXJzWyBpbmRleCBdLnF1ZXVlID09PSB0eXBlICkge1xuXHRcdFx0XHRcdHRpbWVyc1sgaW5kZXggXS5hbmltLnN0b3AoIHRydWUgKTtcblx0XHRcdFx0XHR0aW1lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvb2sgZm9yIGFueSBhbmltYXRpb25zIGluIHRoZSBvbGQgcXVldWUgYW5kIGZpbmlzaCB0aGVtXG5cdFx0XHRmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdFx0XHRpZiAoIHF1ZXVlWyBpbmRleCBdICYmIHF1ZXVlWyBpbmRleCBdLmZpbmlzaCApIHtcblx0XHRcdFx0XHRxdWV1ZVsgaW5kZXggXS5maW5pc2guY2FsbCggdGhpcyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFR1cm4gb2ZmIGZpbmlzaGluZyBmbGFnXG5cdFx0XHRkZWxldGUgZGF0YS5maW5pc2g7XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5lYWNoKCBbIFwidG9nZ2xlXCIsIFwic2hvd1wiLCBcImhpZGVcIiBdLCBmdW5jdGlvbiggX2ksIG5hbWUgKSB7XG5cdHZhciBjc3NGbiA9IGpRdWVyeS5mblsgbmFtZSBdO1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4gc3BlZWQgPT0gbnVsbCB8fCB0eXBlb2Ygc3BlZWQgPT09IFwiYm9vbGVhblwiID9cblx0XHRcdGNzc0ZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSA6XG5cdFx0XHR0aGlzLmFuaW1hdGUoIGdlbkZ4KCBuYW1lLCB0cnVlICksIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICk7XG5cdH07XG59ICk7XG5cbi8vIEdlbmVyYXRlIHNob3J0Y3V0cyBmb3IgY3VzdG9tIGFuaW1hdGlvbnNcbmpRdWVyeS5lYWNoKCB7XG5cdHNsaWRlRG93bjogZ2VuRngoIFwic2hvd1wiICksXG5cdHNsaWRlVXA6IGdlbkZ4KCBcImhpZGVcIiApLFxuXHRzbGlkZVRvZ2dsZTogZ2VuRngoIFwidG9nZ2xlXCIgKSxcblx0ZmFkZUluOiB7IG9wYWNpdHk6IFwic2hvd1wiIH0sXG5cdGZhZGVPdXQ6IHsgb3BhY2l0eTogXCJoaWRlXCIgfSxcblx0ZmFkZVRvZ2dsZTogeyBvcGFjaXR5OiBcInRvZ2dsZVwiIH1cbn0sIGZ1bmN0aW9uKCBuYW1lLCBwcm9wcyApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIHRoaXMuYW5pbWF0ZSggcHJvcHMsIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICk7XG5cdH07XG59ICk7XG5cbmpRdWVyeS50aW1lcnMgPSBbXTtcbmpRdWVyeS5meC50aWNrID0gZnVuY3Rpb24oKSB7XG5cdHZhciB0aW1lcixcblx0XHRpID0gMCxcblx0XHR0aW1lcnMgPSBqUXVlcnkudGltZXJzO1xuXG5cdGZ4Tm93ID0gRGF0ZS5ub3coKTtcblxuXHRmb3IgKCA7IGkgPCB0aW1lcnMubGVuZ3RoOyBpKysgKSB7XG5cdFx0dGltZXIgPSB0aW1lcnNbIGkgXTtcblxuXHRcdC8vIFJ1biB0aGUgdGltZXIgYW5kIHNhZmVseSByZW1vdmUgaXQgd2hlbiBkb25lIChhbGxvd2luZyBmb3IgZXh0ZXJuYWwgcmVtb3ZhbClcblx0XHRpZiAoICF0aW1lcigpICYmIHRpbWVyc1sgaSBdID09PSB0aW1lciApIHtcblx0XHRcdHRpbWVycy5zcGxpY2UoIGktLSwgMSApO1xuXHRcdH1cblx0fVxuXG5cdGlmICggIXRpbWVycy5sZW5ndGggKSB7XG5cdFx0alF1ZXJ5LmZ4LnN0b3AoKTtcblx0fVxuXHRmeE5vdyA9IHVuZGVmaW5lZDtcbn07XG5cbmpRdWVyeS5meC50aW1lciA9IGZ1bmN0aW9uKCB0aW1lciApIHtcblx0alF1ZXJ5LnRpbWVycy5wdXNoKCB0aW1lciApO1xuXHRqUXVlcnkuZnguc3RhcnQoKTtcbn07XG5cbmpRdWVyeS5meC5pbnRlcnZhbCA9IDEzO1xualF1ZXJ5LmZ4LnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG5cdGlmICggaW5Qcm9ncmVzcyApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpblByb2dyZXNzID0gdHJ1ZTtcblx0c2NoZWR1bGUoKTtcbn07XG5cbmpRdWVyeS5meC5zdG9wID0gZnVuY3Rpb24oKSB7XG5cdGluUHJvZ3Jlc3MgPSBudWxsO1xufTtcblxualF1ZXJ5LmZ4LnNwZWVkcyA9IHtcblx0c2xvdzogNjAwLFxuXHRmYXN0OiAyMDAsXG5cblx0Ly8gRGVmYXVsdCBzcGVlZFxuXHRfZGVmYXVsdDogNDAwXG59O1xuXG5cbi8vIEJhc2VkIG9mZiBvZiB0aGUgcGx1Z2luIGJ5IENsaW50IEhlbGZlcnMsIHdpdGggcGVybWlzc2lvbi5cbmpRdWVyeS5mbi5kZWxheSA9IGZ1bmN0aW9uKCB0aW1lLCB0eXBlICkge1xuXHR0aW1lID0galF1ZXJ5LmZ4ID8galF1ZXJ5LmZ4LnNwZWVkc1sgdGltZSBdIHx8IHRpbWUgOiB0aW1lO1xuXHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cblx0cmV0dXJuIHRoaXMucXVldWUoIHR5cGUsIGZ1bmN0aW9uKCBuZXh0LCBob29rcyApIHtcblx0XHR2YXIgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCBuZXh0LCB0aW1lICk7XG5cdFx0aG9va3Muc3RvcCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dCggdGltZW91dCApO1xuXHRcdH07XG5cdH0gKTtcbn07XG5cblxuKCBmdW5jdGlvbigpIHtcblx0dmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICksXG5cdFx0c2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJzZWxlY3RcIiApLFxuXHRcdG9wdCA9IHNlbGVjdC5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJvcHRpb25cIiApICk7XG5cblx0aW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4zIG9ubHlcblx0Ly8gRGVmYXVsdCB2YWx1ZSBmb3IgYSBjaGVja2JveCBzaG91bGQgYmUgXCJvblwiXG5cdHN1cHBvcnQuY2hlY2tPbiA9IGlucHV0LnZhbHVlICE9PSBcIlwiO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHQvLyBNdXN0IGFjY2VzcyBzZWxlY3RlZEluZGV4IHRvIG1ha2UgZGVmYXVsdCBvcHRpb25zIHNlbGVjdFxuXHRzdXBwb3J0Lm9wdFNlbGVjdGVkID0gb3B0LnNlbGVjdGVkO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHQvLyBBbiBpbnB1dCBsb3NlcyBpdHMgdmFsdWUgYWZ0ZXIgYmVjb21pbmcgYSByYWRpb1xuXHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApO1xuXHRpbnB1dC52YWx1ZSA9IFwidFwiO1xuXHRpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuXHRzdXBwb3J0LnJhZGlvVmFsdWUgPSBpbnB1dC52YWx1ZSA9PT0gXCJ0XCI7XG59ICkoKTtcblxuXG52YXIgYm9vbEhvb2ssXG5cdGF0dHJIYW5kbGUgPSBqUXVlcnkuZXhwci5hdHRySGFuZGxlO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGF0dHI6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBqUXVlcnkuYXR0ciwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XG5cdH0sXG5cblx0cmVtb3ZlQXR0cjogZnVuY3Rpb24oIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkucmVtb3ZlQXR0ciggdGhpcywgbmFtZSApO1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdGF0dHI6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCB2YWx1ZSApIHtcblx0XHR2YXIgcmV0LCBob29rcyxcblx0XHRcdG5UeXBlID0gZWxlbS5ub2RlVHlwZTtcblxuXHRcdC8vIERvbid0IGdldC9zZXQgYXR0cmlidXRlcyBvbiB0ZXh0LCBjb21tZW50IGFuZCBhdHRyaWJ1dGUgbm9kZXNcblx0XHRpZiAoIG5UeXBlID09PSAzIHx8IG5UeXBlID09PSA4IHx8IG5UeXBlID09PSAyICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIEZhbGxiYWNrIHRvIHByb3Agd2hlbiBhdHRyaWJ1dGVzIGFyZSBub3Qgc3VwcG9ydGVkXG5cdFx0aWYgKCB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGUgPT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LnByb3AoIGVsZW0sIG5hbWUsIHZhbHVlICk7XG5cdFx0fVxuXG5cdFx0Ly8gQXR0cmlidXRlIGhvb2tzIGFyZSBkZXRlcm1pbmVkIGJ5IHRoZSBsb3dlcmNhc2UgdmVyc2lvblxuXHRcdC8vIEdyYWIgbmVjZXNzYXJ5IGhvb2sgaWYgb25lIGlzIGRlZmluZWRcblx0XHRpZiAoIG5UeXBlICE9PSAxIHx8ICFqUXVlcnkuaXNYTUxEb2MoIGVsZW0gKSApIHtcblx0XHRcdGhvb2tzID0galF1ZXJ5LmF0dHJIb29rc1sgbmFtZS50b0xvd2VyQ2FzZSgpIF0gfHxcblx0XHRcdFx0KCBqUXVlcnkuZXhwci5tYXRjaC5ib29sLnRlc3QoIG5hbWUgKSA/IGJvb2xIb29rIDogdW5kZWZpbmVkICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gbnVsbCApIHtcblx0XHRcdFx0alF1ZXJ5LnJlbW92ZUF0dHIoIGVsZW0sIG5hbWUgKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGhvb2tzICYmIFwic2V0XCIgaW4gaG9va3MgJiZcblx0XHRcdFx0KCByZXQgPSBob29rcy5zZXQoIGVsZW0sIHZhbHVlLCBuYW1lICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSggbmFtZSwgdmFsdWUgKyBcIlwiICk7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmICggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBuYW1lICkgKSAhPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXG5cdFx0cmV0ID0galF1ZXJ5LmZpbmQuYXR0ciggZWxlbSwgbmFtZSApO1xuXG5cdFx0Ly8gTm9uLWV4aXN0ZW50IGF0dHJpYnV0ZXMgcmV0dXJuIG51bGwsIHdlIG5vcm1hbGl6ZSB0byB1bmRlZmluZWRcblx0XHRyZXR1cm4gcmV0ID09IG51bGwgPyB1bmRlZmluZWQgOiByZXQ7XG5cdH0sXG5cblx0YXR0ckhvb2tzOiB7XG5cdFx0dHlwZToge1xuXHRcdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG5cdFx0XHRcdGlmICggIXN1cHBvcnQucmFkaW9WYWx1ZSAmJiB2YWx1ZSA9PT0gXCJyYWRpb1wiICYmXG5cdFx0XHRcdFx0bm9kZU5hbWUoIGVsZW0sIFwiaW5wdXRcIiApICkge1xuXHRcdFx0XHRcdHZhciB2YWwgPSBlbGVtLnZhbHVlO1xuXHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBcInR5cGVcIiwgdmFsdWUgKTtcblx0XHRcdFx0XHRpZiAoIHZhbCApIHtcblx0XHRcdFx0XHRcdGVsZW0udmFsdWUgPSB2YWw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRyZW1vdmVBdHRyOiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG5cdFx0dmFyIG5hbWUsXG5cdFx0XHRpID0gMCxcblxuXHRcdFx0Ly8gQXR0cmlidXRlIG5hbWVzIGNhbiBjb250YWluIG5vbi1IVE1MIHdoaXRlc3BhY2UgY2hhcmFjdGVyc1xuXHRcdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjYXR0cmlidXRlcy0yXG5cdFx0XHRhdHRyTmFtZXMgPSB2YWx1ZSAmJiB2YWx1ZS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApO1xuXG5cdFx0aWYgKCBhdHRyTmFtZXMgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdHdoaWxlICggKCBuYW1lID0gYXR0ck5hbWVzWyBpKysgXSApICkge1xuXHRcdFx0XHRlbGVtLnJlbW92ZUF0dHJpYnV0ZSggbmFtZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSApO1xuXG4vLyBIb29rcyBmb3IgYm9vbGVhbiBhdHRyaWJ1dGVzXG5ib29sSG9vayA9IHtcblx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUsIG5hbWUgKSB7XG5cdFx0aWYgKCB2YWx1ZSA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdC8vIFJlbW92ZSBib29sZWFuIGF0dHJpYnV0ZXMgd2hlbiBzZXQgdG8gZmFsc2Vcblx0XHRcdGpRdWVyeS5yZW1vdmVBdHRyKCBlbGVtLCBuYW1lICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBuYW1lLCBuYW1lICk7XG5cdFx0fVxuXHRcdHJldHVybiBuYW1lO1xuXHR9XG59O1xuXG5qUXVlcnkuZWFjaCggalF1ZXJ5LmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goIC9cXHcrL2cgKSwgZnVuY3Rpb24oIF9pLCBuYW1lICkge1xuXHR2YXIgZ2V0dGVyID0gYXR0ckhhbmRsZVsgbmFtZSBdIHx8IGpRdWVyeS5maW5kLmF0dHI7XG5cblx0YXR0ckhhbmRsZVsgbmFtZSBdID0gZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGlzWE1MICkge1xuXHRcdHZhciByZXQsIGhhbmRsZSxcblx0XHRcdGxvd2VyY2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRpZiAoICFpc1hNTCApIHtcblxuXHRcdFx0Ly8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcCBieSB0ZW1wb3JhcmlseSByZW1vdmluZyB0aGlzIGZ1bmN0aW9uIGZyb20gdGhlIGdldHRlclxuXHRcdFx0aGFuZGxlID0gYXR0ckhhbmRsZVsgbG93ZXJjYXNlTmFtZSBdO1xuXHRcdFx0YXR0ckhhbmRsZVsgbG93ZXJjYXNlTmFtZSBdID0gcmV0O1xuXHRcdFx0cmV0ID0gZ2V0dGVyKCBlbGVtLCBuYW1lLCBpc1hNTCApICE9IG51bGwgP1xuXHRcdFx0XHRsb3dlcmNhc2VOYW1lIDpcblx0XHRcdFx0bnVsbDtcblx0XHRcdGF0dHJIYW5kbGVbIGxvd2VyY2FzZU5hbWUgXSA9IGhhbmRsZTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcbn0gKTtcblxuXG5cblxudmFyIHJmb2N1c2FibGUgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFxuXHRyY2xpY2thYmxlID0gL14oPzphfGFyZWEpJC9pO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHByb3A6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBqUXVlcnkucHJvcCwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XG5cdH0sXG5cblx0cmVtb3ZlUHJvcDogZnVuY3Rpb24oIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRkZWxldGUgdGhpc1sgalF1ZXJ5LnByb3BGaXhbIG5hbWUgXSB8fCBuYW1lIF07XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5leHRlbmQoIHtcblx0cHJvcDogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlICkge1xuXHRcdHZhciByZXQsIGhvb2tzLFxuXHRcdFx0blR5cGUgPSBlbGVtLm5vZGVUeXBlO1xuXG5cdFx0Ly8gRG9uJ3QgZ2V0L3NldCBwcm9wZXJ0aWVzIG9uIHRleHQsIGNvbW1lbnQgYW5kIGF0dHJpYnV0ZSBub2Rlc1xuXHRcdGlmICggblR5cGUgPT09IDMgfHwgblR5cGUgPT09IDggfHwgblR5cGUgPT09IDIgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBuVHlwZSAhPT0gMSB8fCAhalF1ZXJ5LmlzWE1MRG9jKCBlbGVtICkgKSB7XG5cblx0XHRcdC8vIEZpeCBuYW1lIGFuZCBhdHRhY2ggaG9va3Ncblx0XHRcdG5hbWUgPSBqUXVlcnkucHJvcEZpeFsgbmFtZSBdIHx8IG5hbWU7XG5cdFx0XHRob29rcyA9IGpRdWVyeS5wcm9wSG9va3NbIG5hbWUgXTtcblx0XHR9XG5cblx0XHRpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRpZiAoIGhvb2tzICYmIFwic2V0XCIgaW4gaG9va3MgJiZcblx0XHRcdFx0KCByZXQgPSBob29rcy5zZXQoIGVsZW0sIHZhbHVlLCBuYW1lICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKCBlbGVtWyBuYW1lIF0gPSB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdGlmICggaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAoIHJldCA9IGhvb2tzLmdldCggZWxlbSwgbmFtZSApICkgIT09IG51bGwgKSB7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblxuXHRcdHJldHVybiBlbGVtWyBuYW1lIF07XG5cdH0sXG5cblx0cHJvcEhvb2tzOiB7XG5cdFx0dGFiSW5kZXg6IHtcblx0XHRcdGdldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuXHRcdFx0XHQvLyBlbGVtLnRhYkluZGV4IGRvZXNuJ3QgYWx3YXlzIHJldHVybiB0aGVcblx0XHRcdFx0Ly8gY29ycmVjdCB2YWx1ZSB3aGVuIGl0IGhhc24ndCBiZWVuIGV4cGxpY2l0bHkgc2V0XG5cdFx0XHRcdC8vIFVzZSBwcm9wZXIgYXR0cmlidXRlIHJldHJpZXZhbCAodHJhYy0xMjA3Milcblx0XHRcdFx0dmFyIHRhYmluZGV4ID0galF1ZXJ5LmZpbmQuYXR0ciggZWxlbSwgXCJ0YWJpbmRleFwiICk7XG5cblx0XHRcdFx0aWYgKCB0YWJpbmRleCApIHtcblx0XHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQoIHRhYmluZGV4LCAxMCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHJmb2N1c2FibGUudGVzdCggZWxlbS5ub2RlTmFtZSApIHx8XG5cdFx0XHRcdFx0cmNsaWNrYWJsZS50ZXN0KCBlbGVtLm5vZGVOYW1lICkgJiZcblx0XHRcdFx0XHRlbGVtLmhyZWZcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdHByb3BGaXg6IHtcblx0XHRcImZvclwiOiBcImh0bWxGb3JcIixcblx0XHRcImNsYXNzXCI6IFwiY2xhc3NOYW1lXCJcblx0fVxufSApO1xuXG4vLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcbi8vIEFjY2Vzc2luZyB0aGUgc2VsZWN0ZWRJbmRleCBwcm9wZXJ0eVxuLy8gZm9yY2VzIHRoZSBicm93c2VyIHRvIHJlc3BlY3Qgc2V0dGluZyBzZWxlY3RlZFxuLy8gb24gdGhlIG9wdGlvblxuLy8gVGhlIGdldHRlciBlbnN1cmVzIGEgZGVmYXVsdCBvcHRpb24gaXMgc2VsZWN0ZWRcbi8vIHdoZW4gaW4gYW4gb3B0Z3JvdXBcbi8vIGVzbGludCBydWxlIFwibm8tdW51c2VkLWV4cHJlc3Npb25zXCIgaXMgZGlzYWJsZWQgZm9yIHRoaXMgY29kZVxuLy8gc2luY2UgaXQgY29uc2lkZXJzIHN1Y2ggYWNjZXNzaW9ucyBub29wXG5pZiAoICFzdXBwb3J0Lm9wdFNlbGVjdGVkICkge1xuXHRqUXVlcnkucHJvcEhvb2tzLnNlbGVjdGVkID0ge1xuXHRcdGdldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdC8qIGVzbGludCBuby11bnVzZWQtZXhwcmVzc2lvbnM6IFwib2ZmXCIgKi9cblxuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdGlmICggcGFyZW50ICYmIHBhcmVudC5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRwYXJlbnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSxcblx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0XHQvKiBlc2xpbnQgbm8tdW51c2VkLWV4cHJlc3Npb25zOiBcIm9mZlwiICovXG5cblx0XHRcdHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cdFx0XHRpZiAoIHBhcmVudCApIHtcblx0XHRcdFx0cGFyZW50LnNlbGVjdGVkSW5kZXg7XG5cblx0XHRcdFx0aWYgKCBwYXJlbnQucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0XHRwYXJlbnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5qUXVlcnkuZWFjaCggW1xuXHRcInRhYkluZGV4XCIsXG5cdFwicmVhZE9ubHlcIixcblx0XCJtYXhMZW5ndGhcIixcblx0XCJjZWxsU3BhY2luZ1wiLFxuXHRcImNlbGxQYWRkaW5nXCIsXG5cdFwicm93U3BhblwiLFxuXHRcImNvbFNwYW5cIixcblx0XCJ1c2VNYXBcIixcblx0XCJmcmFtZUJvcmRlclwiLFxuXHRcImNvbnRlbnRFZGl0YWJsZVwiXG5dLCBmdW5jdGlvbigpIHtcblx0alF1ZXJ5LnByb3BGaXhbIHRoaXMudG9Mb3dlckNhc2UoKSBdID0gdGhpcztcbn0gKTtcblxuXG5cblxuXHQvLyBTdHJpcCBhbmQgY29sbGFwc2Ugd2hpdGVzcGFjZSBhY2NvcmRpbmcgdG8gSFRNTCBzcGVjXG5cdC8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNzdHJpcC1hbmQtY29sbGFwc2UtYXNjaWktd2hpdGVzcGFjZVxuXHRmdW5jdGlvbiBzdHJpcEFuZENvbGxhcHNlKCB2YWx1ZSApIHtcblx0XHR2YXIgdG9rZW5zID0gdmFsdWUubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXTtcblx0XHRyZXR1cm4gdG9rZW5zLmpvaW4oIFwiIFwiICk7XG5cdH1cblxuXG5mdW5jdGlvbiBnZXRDbGFzcyggZWxlbSApIHtcblx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlICYmIGVsZW0uZ2V0QXR0cmlidXRlKCBcImNsYXNzXCIgKSB8fCBcIlwiO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VzVG9BcnJheSggdmFsdWUgKSB7XG5cdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0aWYgKCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0cmV0dXJuIHZhbHVlLm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW107XG5cdH1cblx0cmV0dXJuIFtdO1xufVxuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGFkZENsYXNzOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGNsYXNzTmFtZXMsIGN1ciwgY3VyVmFsdWUsIGNsYXNzTmFtZSwgaSwgZmluYWxWYWx1ZTtcblxuXHRcdGlmICggaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBqICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5hZGRDbGFzcyggdmFsdWUuY2FsbCggdGhpcywgaiwgZ2V0Q2xhc3MoIHRoaXMgKSApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0Y2xhc3NOYW1lcyA9IGNsYXNzZXNUb0FycmF5KCB2YWx1ZSApO1xuXG5cdFx0aWYgKCBjbGFzc05hbWVzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjdXJWYWx1ZSA9IGdldENsYXNzKCB0aGlzICk7XG5cdFx0XHRcdGN1ciA9IHRoaXMubm9kZVR5cGUgPT09IDEgJiYgKCBcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoIGN1clZhbHVlICkgKyBcIiBcIiApO1xuXG5cdFx0XHRcdGlmICggY3VyICkge1xuXHRcdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgY2xhc3NOYW1lcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZXNbIGkgXTtcblx0XHRcdFx0XHRcdGlmICggY3VyLmluZGV4T2YoIFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCIgKSA8IDAgKSB7XG5cdFx0XHRcdFx0XHRcdGN1ciArPSBjbGFzc05hbWUgKyBcIiBcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBPbmx5IGFzc2lnbiBpZiBkaWZmZXJlbnQgdG8gYXZvaWQgdW5uZWVkZWQgcmVuZGVyaW5nLlxuXHRcdFx0XHRcdGZpbmFsVmFsdWUgPSBzdHJpcEFuZENvbGxhcHNlKCBjdXIgKTtcblx0XHRcdFx0XHRpZiAoIGN1clZhbHVlICE9PSBmaW5hbFZhbHVlICkge1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIiwgZmluYWxWYWx1ZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHJlbW92ZUNsYXNzOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGNsYXNzTmFtZXMsIGN1ciwgY3VyVmFsdWUsIGNsYXNzTmFtZSwgaSwgZmluYWxWYWx1ZTtcblxuXHRcdGlmICggaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBqICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5yZW1vdmVDbGFzcyggdmFsdWUuY2FsbCggdGhpcywgaiwgZ2V0Q2xhc3MoIHRoaXMgKSApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhYXJndW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiB0aGlzLmF0dHIoIFwiY2xhc3NcIiwgXCJcIiApO1xuXHRcdH1cblxuXHRcdGNsYXNzTmFtZXMgPSBjbGFzc2VzVG9BcnJheSggdmFsdWUgKTtcblxuXHRcdGlmICggY2xhc3NOYW1lcy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y3VyVmFsdWUgPSBnZXRDbGFzcyggdGhpcyApO1xuXG5cdFx0XHRcdC8vIFRoaXMgZXhwcmVzc2lvbiBpcyBoZXJlIGZvciBiZXR0ZXIgY29tcHJlc3NpYmlsaXR5IChzZWUgYWRkQ2xhc3MpXG5cdFx0XHRcdGN1ciA9IHRoaXMubm9kZVR5cGUgPT09IDEgJiYgKCBcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoIGN1clZhbHVlICkgKyBcIiBcIiApO1xuXG5cdFx0XHRcdGlmICggY3VyICkge1xuXHRcdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgY2xhc3NOYW1lcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZXNbIGkgXTtcblxuXHRcdFx0XHRcdFx0Ly8gUmVtb3ZlICphbGwqIGluc3RhbmNlc1xuXHRcdFx0XHRcdFx0d2hpbGUgKCBjdXIuaW5kZXhPZiggXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIiApID4gLTEgKSB7XG5cdFx0XHRcdFx0XHRcdGN1ciA9IGN1ci5yZXBsYWNlKCBcIiBcIiArIGNsYXNzTmFtZSArIFwiIFwiLCBcIiBcIiApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIE9ubHkgYXNzaWduIGlmIGRpZmZlcmVudCB0byBhdm9pZCB1bm5lZWRlZCByZW5kZXJpbmcuXG5cdFx0XHRcdFx0ZmluYWxWYWx1ZSA9IHN0cmlwQW5kQ29sbGFwc2UoIGN1ciApO1xuXHRcdFx0XHRcdGlmICggY3VyVmFsdWUgIT09IGZpbmFsVmFsdWUgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSggXCJjbGFzc1wiLCBmaW5hbFZhbHVlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0dG9nZ2xlQ2xhc3M6IGZ1bmN0aW9uKCB2YWx1ZSwgc3RhdGVWYWwgKSB7XG5cdFx0dmFyIGNsYXNzTmFtZXMsIGNsYXNzTmFtZSwgaSwgc2VsZixcblx0XHRcdHR5cGUgPSB0eXBlb2YgdmFsdWUsXG5cdFx0XHRpc1ZhbGlkVmFsdWUgPSB0eXBlID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkoIHZhbHVlICk7XG5cblx0XHRpZiAoIGlzRnVuY3Rpb24oIHZhbHVlICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkudG9nZ2xlQ2xhc3MoXG5cdFx0XHRcdFx0dmFsdWUuY2FsbCggdGhpcywgaSwgZ2V0Q2xhc3MoIHRoaXMgKSwgc3RhdGVWYWwgKSxcblx0XHRcdFx0XHRzdGF0ZVZhbFxuXHRcdFx0XHQpO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdGlmICggdHlwZW9mIHN0YXRlVmFsID09PSBcImJvb2xlYW5cIiAmJiBpc1ZhbGlkVmFsdWUgKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGVWYWwgPyB0aGlzLmFkZENsYXNzKCB2YWx1ZSApIDogdGhpcy5yZW1vdmVDbGFzcyggdmFsdWUgKTtcblx0XHR9XG5cblx0XHRjbGFzc05hbWVzID0gY2xhc3Nlc1RvQXJyYXkoIHZhbHVlICk7XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggaXNWYWxpZFZhbHVlICkge1xuXG5cdFx0XHRcdC8vIFRvZ2dsZSBpbmRpdmlkdWFsIGNsYXNzIG5hbWVzXG5cdFx0XHRcdHNlbGYgPSBqUXVlcnkoIHRoaXMgKTtcblxuXHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IGNsYXNzTmFtZXMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lc1sgaSBdO1xuXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgZWFjaCBjbGFzc05hbWUgZ2l2ZW4sIHNwYWNlIHNlcGFyYXRlZCBsaXN0XG5cdFx0XHRcdFx0aWYgKCBzZWxmLmhhc0NsYXNzKCBjbGFzc05hbWUgKSApIHtcblx0XHRcdFx0XHRcdHNlbGYucmVtb3ZlQ2xhc3MoIGNsYXNzTmFtZSApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzZWxmLmFkZENsYXNzKCBjbGFzc05hbWUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gVG9nZ2xlIHdob2xlIGNsYXNzIG5hbWVcblx0XHRcdH0gZWxzZSBpZiAoIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdHlwZSA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGdldENsYXNzKCB0aGlzICk7XG5cdFx0XHRcdGlmICggY2xhc3NOYW1lICkge1xuXG5cdFx0XHRcdFx0Ly8gU3RvcmUgY2xhc3NOYW1lIGlmIHNldFxuXHRcdFx0XHRcdGRhdGFQcml2LnNldCggdGhpcywgXCJfX2NsYXNzTmFtZV9fXCIsIGNsYXNzTmFtZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGVsZW1lbnQgaGFzIGEgY2xhc3MgbmFtZSBvciBpZiB3ZSdyZSBwYXNzZWQgYGZhbHNlYCxcblx0XHRcdFx0Ly8gdGhlbiByZW1vdmUgdGhlIHdob2xlIGNsYXNzbmFtZSAoaWYgdGhlcmUgd2FzIG9uZSwgdGhlIGFib3ZlIHNhdmVkIGl0KS5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGJyaW5nIGJhY2sgd2hhdGV2ZXIgd2FzIHByZXZpb3VzbHkgc2F2ZWQgKGlmIGFueXRoaW5nKSxcblx0XHRcdFx0Ly8gZmFsbGluZyBiYWNrIHRvIHRoZSBlbXB0eSBzdHJpbmcgaWYgbm90aGluZyB3YXMgc3RvcmVkLlxuXHRcdFx0XHRpZiAoIHRoaXMuc2V0QXR0cmlidXRlICkge1xuXHRcdFx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCBcImNsYXNzXCIsXG5cdFx0XHRcdFx0XHRjbGFzc05hbWUgfHwgdmFsdWUgPT09IGZhbHNlID9cblx0XHRcdFx0XHRcdFx0XCJcIiA6XG5cdFx0XHRcdFx0XHRcdGRhdGFQcml2LmdldCggdGhpcywgXCJfX2NsYXNzTmFtZV9fXCIgKSB8fCBcIlwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRoYXNDbGFzczogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHZhciBjbGFzc05hbWUsIGVsZW0sXG5cdFx0XHRpID0gMDtcblxuXHRcdGNsYXNzTmFtZSA9IFwiIFwiICsgc2VsZWN0b3IgKyBcIiBcIjtcblx0XHR3aGlsZSAoICggZWxlbSA9IHRoaXNbIGkrKyBdICkgKSB7XG5cdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgJiZcblx0XHRcdFx0KCBcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoIGdldENsYXNzKCBlbGVtICkgKSArIFwiIFwiICkuaW5kZXhPZiggY2xhc3NOYW1lICkgPiAtMSApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59ICk7XG5cblxuXG5cbnZhciBycmV0dXJuID0gL1xcci9nO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHZhbDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhciBob29rcywgcmV0LCB2YWx1ZUlzRnVuY3Rpb24sXG5cdFx0XHRlbGVtID0gdGhpc1sgMCBdO1xuXG5cdFx0aWYgKCAhYXJndW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdGlmICggZWxlbSApIHtcblx0XHRcdFx0aG9va3MgPSBqUXVlcnkudmFsSG9va3NbIGVsZW0udHlwZSBdIHx8XG5cdFx0XHRcdFx0alF1ZXJ5LnZhbEhvb2tzWyBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgXTtcblxuXHRcdFx0XHRpZiAoIGhvb2tzICYmXG5cdFx0XHRcdFx0XCJnZXRcIiBpbiBob29rcyAmJlxuXHRcdFx0XHRcdCggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBcInZhbHVlXCIgKSApICE9PSB1bmRlZmluZWRcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldCA9IGVsZW0udmFsdWU7XG5cblx0XHRcdFx0Ly8gSGFuZGxlIG1vc3QgY29tbW9uIHN0cmluZyBjYXNlc1xuXHRcdFx0XHRpZiAoIHR5cGVvZiByZXQgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJldC5yZXBsYWNlKCBycmV0dXJuLCBcIlwiICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBIYW5kbGUgY2FzZXMgd2hlcmUgdmFsdWUgaXMgbnVsbC91bmRlZiBvciBudW1iZXJcblx0XHRcdFx0cmV0dXJuIHJldCA9PSBudWxsID8gXCJcIiA6IHJldDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhbHVlSXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24oIHZhbHVlICk7XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdHZhciB2YWw7XG5cblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSAhPT0gMSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHZhbHVlSXNGdW5jdGlvbiApIHtcblx0XHRcdFx0dmFsID0gdmFsdWUuY2FsbCggdGhpcywgaSwgalF1ZXJ5KCB0aGlzICkudmFsKCkgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbCA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUcmVhdCBudWxsL3VuZGVmaW5lZCBhcyBcIlwiOyBjb252ZXJ0IG51bWJlcnMgdG8gc3RyaW5nXG5cdFx0XHRpZiAoIHZhbCA9PSBudWxsICkge1xuXHRcdFx0XHR2YWwgPSBcIlwiO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiICkge1xuXHRcdFx0XHR2YWwgKz0gXCJcIjtcblxuXHRcdFx0fSBlbHNlIGlmICggQXJyYXkuaXNBcnJheSggdmFsICkgKSB7XG5cdFx0XHRcdHZhbCA9IGpRdWVyeS5tYXAoIHZhbCwgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZSA9PSBudWxsID8gXCJcIiA6IHZhbHVlICsgXCJcIjtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0XHRob29rcyA9IGpRdWVyeS52YWxIb29rc1sgdGhpcy50eXBlIF0gfHwgalF1ZXJ5LnZhbEhvb2tzWyB0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgXTtcblxuXHRcdFx0Ly8gSWYgc2V0IHJldHVybnMgdW5kZWZpbmVkLCBmYWxsIGJhY2sgdG8gbm9ybWFsIHNldHRpbmdcblx0XHRcdGlmICggIWhvb2tzIHx8ICEoIFwic2V0XCIgaW4gaG9va3MgKSB8fCBob29rcy5zZXQoIHRoaXMsIHZhbCwgXCJ2YWx1ZVwiICkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHZhbDtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXHR2YWxIb29rczoge1xuXHRcdG9wdGlvbjoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0XHR2YXIgdmFsID0galF1ZXJ5LmZpbmQuYXR0ciggZWxlbSwgXCJ2YWx1ZVwiICk7XG5cdFx0XHRcdHJldHVybiB2YWwgIT0gbnVsbCA/XG5cdFx0XHRcdFx0dmFsIDpcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9MTAgLSAxMSBvbmx5XG5cdFx0XHRcdFx0Ly8gb3B0aW9uLnRleHQgdGhyb3dzIGV4Y2VwdGlvbnMgKHRyYWMtMTQ2ODYsIHRyYWMtMTQ4NTgpXG5cdFx0XHRcdFx0Ly8gU3RyaXAgYW5kIGNvbGxhcHNlIHdoaXRlc3BhY2Vcblx0XHRcdFx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNzdHJpcC1hbmQtY29sbGFwc2Utd2hpdGVzcGFjZVxuXHRcdFx0XHRcdHN0cmlwQW5kQ29sbGFwc2UoIGpRdWVyeS50ZXh0KCBlbGVtICkgKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHNlbGVjdDoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIHZhbHVlLCBvcHRpb24sIGksXG5cdFx0XHRcdFx0b3B0aW9ucyA9IGVsZW0ub3B0aW9ucyxcblx0XHRcdFx0XHRpbmRleCA9IGVsZW0uc2VsZWN0ZWRJbmRleCxcblx0XHRcdFx0XHRvbmUgPSBlbGVtLnR5cGUgPT09IFwic2VsZWN0LW9uZVwiLFxuXHRcdFx0XHRcdHZhbHVlcyA9IG9uZSA/IG51bGwgOiBbXSxcblx0XHRcdFx0XHRtYXggPSBvbmUgPyBpbmRleCArIDEgOiBvcHRpb25zLmxlbmd0aDtcblxuXHRcdFx0XHRpZiAoIGluZGV4IDwgMCApIHtcblx0XHRcdFx0XHRpID0gbWF4O1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aSA9IG9uZSA/IGluZGV4IDogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIHNlbGVjdGVkIG9wdGlvbnNcblx0XHRcdFx0Zm9yICggOyBpIDwgbWF4OyBpKysgKSB7XG5cdFx0XHRcdFx0b3B0aW9uID0gb3B0aW9uc1sgaSBdO1xuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0XHRcdFx0XHQvLyBJRTgtOSBkb2Vzbid0IHVwZGF0ZSBzZWxlY3RlZCBhZnRlciBmb3JtIHJlc2V0ICh0cmFjLTI1NTEpXG5cdFx0XHRcdFx0aWYgKCAoIG9wdGlvbi5zZWxlY3RlZCB8fCBpID09PSBpbmRleCApICYmXG5cblx0XHRcdFx0XHRcdFx0Ly8gRG9uJ3QgcmV0dXJuIG9wdGlvbnMgdGhhdCBhcmUgZGlzYWJsZWQgb3IgaW4gYSBkaXNhYmxlZCBvcHRncm91cFxuXHRcdFx0XHRcdFx0XHQhb3B0aW9uLmRpc2FibGVkICYmXG5cdFx0XHRcdFx0XHRcdCggIW9wdGlvbi5wYXJlbnROb2RlLmRpc2FibGVkIHx8XG5cdFx0XHRcdFx0XHRcdFx0IW5vZGVOYW1lKCBvcHRpb24ucGFyZW50Tm9kZSwgXCJvcHRncm91cFwiICkgKSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gR2V0IHRoZSBzcGVjaWZpYyB2YWx1ZSBmb3IgdGhlIG9wdGlvblxuXHRcdFx0XHRcdFx0dmFsdWUgPSBqUXVlcnkoIG9wdGlvbiApLnZhbCgpO1xuXG5cdFx0XHRcdFx0XHQvLyBXZSBkb24ndCBuZWVkIGFuIGFycmF5IGZvciBvbmUgc2VsZWN0c1xuXHRcdFx0XHRcdFx0aWYgKCBvbmUgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTXVsdGktU2VsZWN0cyByZXR1cm4gYW4gYXJyYXlcblx0XHRcdFx0XHRcdHZhbHVlcy5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHRcdFx0dmFyIG9wdGlvblNldCwgb3B0aW9uLFxuXHRcdFx0XHRcdG9wdGlvbnMgPSBlbGVtLm9wdGlvbnMsXG5cdFx0XHRcdFx0dmFsdWVzID0galF1ZXJ5Lm1ha2VBcnJheSggdmFsdWUgKSxcblx0XHRcdFx0XHRpID0gb3B0aW9ucy5sZW5ndGg7XG5cblx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0b3B0aW9uID0gb3B0aW9uc1sgaSBdO1xuXG5cdFx0XHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cblxuXHRcdFx0XHRcdGlmICggb3B0aW9uLnNlbGVjdGVkID1cblx0XHRcdFx0XHRcdGpRdWVyeS5pbkFycmF5KCBqUXVlcnkudmFsSG9va3Mub3B0aW9uLmdldCggb3B0aW9uICksIHZhbHVlcyApID4gLTFcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdG9wdGlvblNldCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRm9yY2UgYnJvd3NlcnMgdG8gYmVoYXZlIGNvbnNpc3RlbnRseSB3aGVuIG5vbi1tYXRjaGluZyB2YWx1ZSBpcyBzZXRcblx0XHRcdFx0aWYgKCAhb3B0aW9uU2V0ICkge1xuXHRcdFx0XHRcdGVsZW0uc2VsZWN0ZWRJbmRleCA9IC0xO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59ICk7XG5cbi8vIFJhZGlvcyBhbmQgY2hlY2tib3hlcyBnZXR0ZXIvc2V0dGVyXG5qUXVlcnkuZWFjaCggWyBcInJhZGlvXCIsIFwiY2hlY2tib3hcIiBdLCBmdW5jdGlvbigpIHtcblx0alF1ZXJ5LnZhbEhvb2tzWyB0aGlzIF0gPSB7XG5cdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0XHRcdHJldHVybiAoIGVsZW0uY2hlY2tlZCA9IGpRdWVyeS5pbkFycmF5KCBqUXVlcnkoIGVsZW0gKS52YWwoKSwgdmFsdWUgKSA+IC0xICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRpZiAoICFzdXBwb3J0LmNoZWNrT24gKSB7XG5cdFx0alF1ZXJ5LnZhbEhvb2tzWyB0aGlzIF0uZ2V0ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoIFwidmFsdWVcIiApID09PSBudWxsID8gXCJvblwiIDogZWxlbS52YWx1ZTtcblx0XHR9O1xuXHR9XG59ICk7XG5cblxuXG5cbi8vIFJldHVybiBqUXVlcnkgZm9yIGF0dHJpYnV0ZXMtb25seSBpbmNsdXNpb25cbnZhciBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcblxudmFyIG5vbmNlID0geyBndWlkOiBEYXRlLm5vdygpIH07XG5cbnZhciBycXVlcnkgPSAoIC9cXD8vICk7XG5cblxuXG4vLyBDcm9zcy1icm93c2VyIHhtbCBwYXJzaW5nXG5qUXVlcnkucGFyc2VYTUwgPSBmdW5jdGlvbiggZGF0YSApIHtcblx0dmFyIHhtbCwgcGFyc2VyRXJyb3JFbGVtO1xuXHRpZiAoICFkYXRhIHx8IHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Ly8gU3VwcG9ydDogSUUgOSAtIDExIG9ubHlcblx0Ly8gSUUgdGhyb3dzIG9uIHBhcnNlRnJvbVN0cmluZyB3aXRoIGludmFsaWQgaW5wdXQuXG5cdHRyeSB7XG5cdFx0eG1sID0gKCBuZXcgd2luZG93LkRPTVBhcnNlcigpICkucGFyc2VGcm9tU3RyaW5nKCBkYXRhLCBcInRleHQveG1sXCIgKTtcblx0fSBjYXRjaCAoIGUgKSB7fVxuXG5cdHBhcnNlckVycm9yRWxlbSA9IHhtbCAmJiB4bWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwicGFyc2VyZXJyb3JcIiApWyAwIF07XG5cdGlmICggIXhtbCB8fCBwYXJzZXJFcnJvckVsZW0gKSB7XG5cdFx0alF1ZXJ5LmVycm9yKCBcIkludmFsaWQgWE1MOiBcIiArIChcblx0XHRcdHBhcnNlckVycm9yRWxlbSA/XG5cdFx0XHRcdGpRdWVyeS5tYXAoIHBhcnNlckVycm9yRWxlbS5jaGlsZE5vZGVzLCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsLnRleHRDb250ZW50O1xuXHRcdFx0XHR9ICkuam9pbiggXCJcXG5cIiApIDpcblx0XHRcdFx0ZGF0YVxuXHRcdCkgKTtcblx0fVxuXHRyZXR1cm4geG1sO1xufTtcblxuXG52YXIgcmZvY3VzTW9ycGggPSAvXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8sXG5cdHN0b3BQcm9wYWdhdGlvbkNhbGxiYWNrID0gZnVuY3Rpb24oIGUgKSB7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0fTtcblxualF1ZXJ5LmV4dGVuZCggalF1ZXJ5LmV2ZW50LCB7XG5cblx0dHJpZ2dlcjogZnVuY3Rpb24oIGV2ZW50LCBkYXRhLCBlbGVtLCBvbmx5SGFuZGxlcnMgKSB7XG5cblx0XHR2YXIgaSwgY3VyLCB0bXAsIGJ1YmJsZVR5cGUsIG9udHlwZSwgaGFuZGxlLCBzcGVjaWFsLCBsYXN0RWxlbWVudCxcblx0XHRcdGV2ZW50UGF0aCA9IFsgZWxlbSB8fCBkb2N1bWVudCBdLFxuXHRcdFx0dHlwZSA9IGhhc093bi5jYWxsKCBldmVudCwgXCJ0eXBlXCIgKSA/IGV2ZW50LnR5cGUgOiBldmVudCxcblx0XHRcdG5hbWVzcGFjZXMgPSBoYXNPd24uY2FsbCggZXZlbnQsIFwibmFtZXNwYWNlXCIgKSA/IGV2ZW50Lm5hbWVzcGFjZS5zcGxpdCggXCIuXCIgKSA6IFtdO1xuXG5cdFx0Y3VyID0gbGFzdEVsZW1lbnQgPSB0bXAgPSBlbGVtID0gZWxlbSB8fCBkb2N1bWVudDtcblxuXHRcdC8vIERvbid0IGRvIGV2ZW50cyBvbiB0ZXh0IGFuZCBjb21tZW50IG5vZGVzXG5cdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAzIHx8IGVsZW0ubm9kZVR5cGUgPT09IDggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gZm9jdXMvYmx1ciBtb3JwaHMgdG8gZm9jdXNpbi9vdXQ7IGVuc3VyZSB3ZSdyZSBub3QgZmlyaW5nIHRoZW0gcmlnaHQgbm93XG5cdFx0aWYgKCByZm9jdXNNb3JwaC50ZXN0KCB0eXBlICsgalF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdHlwZS5pbmRleE9mKCBcIi5cIiApID4gLTEgKSB7XG5cblx0XHRcdC8vIE5hbWVzcGFjZWQgdHJpZ2dlcjsgY3JlYXRlIGEgcmVnZXhwIHRvIG1hdGNoIGV2ZW50IHR5cGUgaW4gaGFuZGxlKClcblx0XHRcdG5hbWVzcGFjZXMgPSB0eXBlLnNwbGl0KCBcIi5cIiApO1xuXHRcdFx0dHlwZSA9IG5hbWVzcGFjZXMuc2hpZnQoKTtcblx0XHRcdG5hbWVzcGFjZXMuc29ydCgpO1xuXHRcdH1cblx0XHRvbnR5cGUgPSB0eXBlLmluZGV4T2YoIFwiOlwiICkgPCAwICYmIFwib25cIiArIHR5cGU7XG5cblx0XHQvLyBDYWxsZXIgY2FuIHBhc3MgaW4gYSBqUXVlcnkuRXZlbnQgb2JqZWN0LCBPYmplY3QsIG9yIGp1c3QgYW4gZXZlbnQgdHlwZSBzdHJpbmdcblx0XHRldmVudCA9IGV2ZW50WyBqUXVlcnkuZXhwYW5kbyBdID9cblx0XHRcdGV2ZW50IDpcblx0XHRcdG5ldyBqUXVlcnkuRXZlbnQoIHR5cGUsIHR5cGVvZiBldmVudCA9PT0gXCJvYmplY3RcIiAmJiBldmVudCApO1xuXG5cdFx0Ly8gVHJpZ2dlciBiaXRtYXNrOiAmIDEgZm9yIG5hdGl2ZSBoYW5kbGVyczsgJiAyIGZvciBqUXVlcnkgKGFsd2F5cyB0cnVlKVxuXHRcdGV2ZW50LmlzVHJpZ2dlciA9IG9ubHlIYW5kbGVycyA/IDIgOiAzO1xuXHRcdGV2ZW50Lm5hbWVzcGFjZSA9IG5hbWVzcGFjZXMuam9pbiggXCIuXCIgKTtcblx0XHRldmVudC5ybmFtZXNwYWNlID0gZXZlbnQubmFtZXNwYWNlID9cblx0XHRcdG5ldyBSZWdFeHAoIFwiKF58XFxcXC4pXCIgKyBuYW1lc3BhY2VzLmpvaW4oIFwiXFxcXC4oPzouKlxcXFwufClcIiApICsgXCIoXFxcXC58JClcIiApIDpcblx0XHRcdG51bGw7XG5cblx0XHQvLyBDbGVhbiB1cCB0aGUgZXZlbnQgaW4gY2FzZSBpdCBpcyBiZWluZyByZXVzZWRcblx0XHRldmVudC5yZXN1bHQgPSB1bmRlZmluZWQ7XG5cdFx0aWYgKCAhZXZlbnQudGFyZ2V0ICkge1xuXHRcdFx0ZXZlbnQudGFyZ2V0ID0gZWxlbTtcblx0XHR9XG5cblx0XHQvLyBDbG9uZSBhbnkgaW5jb21pbmcgZGF0YSBhbmQgcHJlcGVuZCB0aGUgZXZlbnQsIGNyZWF0aW5nIHRoZSBoYW5kbGVyIGFyZyBsaXN0XG5cdFx0ZGF0YSA9IGRhdGEgPT0gbnVsbCA/XG5cdFx0XHRbIGV2ZW50IF0gOlxuXHRcdFx0alF1ZXJ5Lm1ha2VBcnJheSggZGF0YSwgWyBldmVudCBdICk7XG5cblx0XHQvLyBBbGxvdyBzcGVjaWFsIGV2ZW50cyB0byBkcmF3IG91dHNpZGUgdGhlIGxpbmVzXG5cdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XG5cdFx0aWYgKCAhb25seUhhbmRsZXJzICYmIHNwZWNpYWwudHJpZ2dlciAmJiBzcGVjaWFsLnRyaWdnZXIuYXBwbHkoIGVsZW0sIGRhdGEgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZXJtaW5lIGV2ZW50IHByb3BhZ2F0aW9uIHBhdGggaW4gYWR2YW5jZSwgcGVyIFczQyBldmVudHMgc3BlYyAodHJhYy05OTUxKVxuXHRcdC8vIEJ1YmJsZSB1cCB0byBkb2N1bWVudCwgdGhlbiB0byB3aW5kb3c7IHdhdGNoIGZvciBhIGdsb2JhbCBvd25lckRvY3VtZW50IHZhciAodHJhYy05NzI0KVxuXHRcdGlmICggIW9ubHlIYW5kbGVycyAmJiAhc3BlY2lhbC5ub0J1YmJsZSAmJiAhaXNXaW5kb3coIGVsZW0gKSApIHtcblxuXHRcdFx0YnViYmxlVHlwZSA9IHNwZWNpYWwuZGVsZWdhdGVUeXBlIHx8IHR5cGU7XG5cdFx0XHRpZiAoICFyZm9jdXNNb3JwaC50ZXN0KCBidWJibGVUeXBlICsgdHlwZSApICkge1xuXHRcdFx0XHRjdXIgPSBjdXIucGFyZW50Tm9kZTtcblx0XHRcdH1cblx0XHRcdGZvciAoIDsgY3VyOyBjdXIgPSBjdXIucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0ZXZlbnRQYXRoLnB1c2goIGN1ciApO1xuXHRcdFx0XHR0bXAgPSBjdXI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE9ubHkgYWRkIHdpbmRvdyBpZiB3ZSBnb3QgdG8gZG9jdW1lbnQgKGUuZy4sIG5vdCBwbGFpbiBvYmogb3IgZGV0YWNoZWQgRE9NKVxuXHRcdFx0aWYgKCB0bXAgPT09ICggZWxlbS5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50ICkgKSB7XG5cdFx0XHRcdGV2ZW50UGF0aC5wdXNoKCB0bXAuZGVmYXVsdFZpZXcgfHwgdG1wLnBhcmVudFdpbmRvdyB8fCB3aW5kb3cgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBGaXJlIGhhbmRsZXJzIG9uIHRoZSBldmVudCBwYXRoXG5cdFx0aSA9IDA7XG5cdFx0d2hpbGUgKCAoIGN1ciA9IGV2ZW50UGF0aFsgaSsrIF0gKSAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblx0XHRcdGxhc3RFbGVtZW50ID0gY3VyO1xuXHRcdFx0ZXZlbnQudHlwZSA9IGkgPiAxID9cblx0XHRcdFx0YnViYmxlVHlwZSA6XG5cdFx0XHRcdHNwZWNpYWwuYmluZFR5cGUgfHwgdHlwZTtcblxuXHRcdFx0Ly8galF1ZXJ5IGhhbmRsZXJcblx0XHRcdGhhbmRsZSA9ICggZGF0YVByaXYuZ2V0KCBjdXIsIFwiZXZlbnRzXCIgKSB8fCBPYmplY3QuY3JlYXRlKCBudWxsICkgKVsgZXZlbnQudHlwZSBdICYmXG5cdFx0XHRcdGRhdGFQcml2LmdldCggY3VyLCBcImhhbmRsZVwiICk7XG5cdFx0XHRpZiAoIGhhbmRsZSApIHtcblx0XHRcdFx0aGFuZGxlLmFwcGx5KCBjdXIsIGRhdGEgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTmF0aXZlIGhhbmRsZXJcblx0XHRcdGhhbmRsZSA9IG9udHlwZSAmJiBjdXJbIG9udHlwZSBdO1xuXHRcdFx0aWYgKCBoYW5kbGUgJiYgaGFuZGxlLmFwcGx5ICYmIGFjY2VwdERhdGEoIGN1ciApICkge1xuXHRcdFx0XHRldmVudC5yZXN1bHQgPSBoYW5kbGUuYXBwbHkoIGN1ciwgZGF0YSApO1xuXHRcdFx0XHRpZiAoIGV2ZW50LnJlc3VsdCA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRldmVudC50eXBlID0gdHlwZTtcblxuXHRcdC8vIElmIG5vYm9keSBwcmV2ZW50ZWQgdGhlIGRlZmF1bHQgYWN0aW9uLCBkbyBpdCBub3dcblx0XHRpZiAoICFvbmx5SGFuZGxlcnMgJiYgIWV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpICkge1xuXG5cdFx0XHRpZiAoICggIXNwZWNpYWwuX2RlZmF1bHQgfHxcblx0XHRcdFx0c3BlY2lhbC5fZGVmYXVsdC5hcHBseSggZXZlbnRQYXRoLnBvcCgpLCBkYXRhICkgPT09IGZhbHNlICkgJiZcblx0XHRcdFx0YWNjZXB0RGF0YSggZWxlbSApICkge1xuXG5cdFx0XHRcdC8vIENhbGwgYSBuYXRpdmUgRE9NIG1ldGhvZCBvbiB0aGUgdGFyZ2V0IHdpdGggdGhlIHNhbWUgbmFtZSBhcyB0aGUgZXZlbnQuXG5cdFx0XHRcdC8vIERvbid0IGRvIGRlZmF1bHQgYWN0aW9ucyBvbiB3aW5kb3csIHRoYXQncyB3aGVyZSBnbG9iYWwgdmFyaWFibGVzIGJlICh0cmFjLTYxNzApXG5cdFx0XHRcdGlmICggb250eXBlICYmIGlzRnVuY3Rpb24oIGVsZW1bIHR5cGUgXSApICYmICFpc1dpbmRvdyggZWxlbSApICkge1xuXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgcmUtdHJpZ2dlciBhbiBvbkZPTyBldmVudCB3aGVuIHdlIGNhbGwgaXRzIEZPTygpIG1ldGhvZFxuXHRcdFx0XHRcdHRtcCA9IGVsZW1bIG9udHlwZSBdO1xuXG5cdFx0XHRcdFx0aWYgKCB0bXAgKSB7XG5cdFx0XHRcdFx0XHRlbGVtWyBvbnR5cGUgXSA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gUHJldmVudCByZS10cmlnZ2VyaW5nIG9mIHRoZSBzYW1lIGV2ZW50LCBzaW5jZSB3ZSBhbHJlYWR5IGJ1YmJsZWQgaXQgYWJvdmVcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlcmVkID0gdHlwZTtcblxuXHRcdFx0XHRcdGlmICggZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblx0XHRcdFx0XHRcdGxhc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoIHR5cGUsIHN0b3BQcm9wYWdhdGlvbkNhbGxiYWNrICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZWxlbVsgdHlwZSBdKCk7XG5cblx0XHRcdFx0XHRpZiAoIGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cdFx0XHRcdFx0XHRsYXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCB0eXBlLCBzdG9wUHJvcGFnYXRpb25DYWxsYmFjayApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgPSB1bmRlZmluZWQ7XG5cblx0XHRcdFx0XHRpZiAoIHRtcCApIHtcblx0XHRcdFx0XHRcdGVsZW1bIG9udHlwZSBdID0gdG1wO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBldmVudC5yZXN1bHQ7XG5cdH0sXG5cblx0Ly8gUGlnZ3liYWNrIG9uIGEgZG9ub3IgZXZlbnQgdG8gc2ltdWxhdGUgYSBkaWZmZXJlbnQgb25lXG5cdC8vIFVzZWQgb25seSBmb3IgYGZvY3VzKGluIHwgb3V0KWAgZXZlbnRzXG5cdHNpbXVsYXRlOiBmdW5jdGlvbiggdHlwZSwgZWxlbSwgZXZlbnQgKSB7XG5cdFx0dmFyIGUgPSBqUXVlcnkuZXh0ZW5kKFxuXHRcdFx0bmV3IGpRdWVyeS5FdmVudCgpLFxuXHRcdFx0ZXZlbnQsXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdGlzU2ltdWxhdGVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCBlLCBudWxsLCBlbGVtICk7XG5cdH1cblxufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cblx0dHJpZ2dlcjogZnVuY3Rpb24oIHR5cGUsIGRhdGEgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlciggdHlwZSwgZGF0YSwgdGhpcyApO1xuXHRcdH0gKTtcblx0fSxcblx0dHJpZ2dlckhhbmRsZXI6IGZ1bmN0aW9uKCB0eXBlLCBkYXRhICkge1xuXHRcdHZhciBlbGVtID0gdGhpc1sgMCBdO1xuXHRcdGlmICggZWxlbSApIHtcblx0XHRcdHJldHVybiBqUXVlcnkuZXZlbnQudHJpZ2dlciggdHlwZSwgZGF0YSwgZWxlbSwgdHJ1ZSApO1xuXHRcdH1cblx0fVxufSApO1xuXG5cbnZhclxuXHRyYnJhY2tldCA9IC9cXFtcXF0kLyxcblx0ckNSTEYgPSAvXFxyP1xcbi9nLFxuXHRyc3VibWl0dGVyVHlwZXMgPSAvXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksXG5cdHJzdWJtaXR0YWJsZSA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtcblxuZnVuY3Rpb24gYnVpbGRQYXJhbXMoIHByZWZpeCwgb2JqLCB0cmFkaXRpb25hbCwgYWRkICkge1xuXHR2YXIgbmFtZTtcblxuXHRpZiAoIEFycmF5LmlzQXJyYXkoIG9iaiApICkge1xuXG5cdFx0Ly8gU2VyaWFsaXplIGFycmF5IGl0ZW0uXG5cdFx0alF1ZXJ5LmVhY2goIG9iaiwgZnVuY3Rpb24oIGksIHYgKSB7XG5cdFx0XHRpZiAoIHRyYWRpdGlvbmFsIHx8IHJicmFja2V0LnRlc3QoIHByZWZpeCApICkge1xuXG5cdFx0XHRcdC8vIFRyZWF0IGVhY2ggYXJyYXkgaXRlbSBhcyBhIHNjYWxhci5cblx0XHRcdFx0YWRkKCBwcmVmaXgsIHYgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBJdGVtIGlzIG5vbi1zY2FsYXIgKGFycmF5IG9yIG9iamVjdCksIGVuY29kZSBpdHMgbnVtZXJpYyBpbmRleC5cblx0XHRcdFx0YnVpbGRQYXJhbXMoXG5cdFx0XHRcdFx0cHJlZml4ICsgXCJbXCIgKyAoIHR5cGVvZiB2ID09PSBcIm9iamVjdFwiICYmIHYgIT0gbnVsbCA/IGkgOiBcIlwiICkgKyBcIl1cIixcblx0XHRcdFx0XHR2LFxuXHRcdFx0XHRcdHRyYWRpdGlvbmFsLFxuXHRcdFx0XHRcdGFkZFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHR9IGVsc2UgaWYgKCAhdHJhZGl0aW9uYWwgJiYgdG9UeXBlKCBvYmogKSA9PT0gXCJvYmplY3RcIiApIHtcblxuXHRcdC8vIFNlcmlhbGl6ZSBvYmplY3QgaXRlbS5cblx0XHRmb3IgKCBuYW1lIGluIG9iaiApIHtcblx0XHRcdGJ1aWxkUGFyYW1zKCBwcmVmaXggKyBcIltcIiArIG5hbWUgKyBcIl1cIiwgb2JqWyBuYW1lIF0sIHRyYWRpdGlvbmFsLCBhZGQgKTtcblx0XHR9XG5cblx0fSBlbHNlIHtcblxuXHRcdC8vIFNlcmlhbGl6ZSBzY2FsYXIgaXRlbS5cblx0XHRhZGQoIHByZWZpeCwgb2JqICk7XG5cdH1cbn1cblxuLy8gU2VyaWFsaXplIGFuIGFycmF5IG9mIGZvcm0gZWxlbWVudHMgb3IgYSBzZXQgb2Zcbi8vIGtleS92YWx1ZXMgaW50byBhIHF1ZXJ5IHN0cmluZ1xualF1ZXJ5LnBhcmFtID0gZnVuY3Rpb24oIGEsIHRyYWRpdGlvbmFsICkge1xuXHR2YXIgcHJlZml4LFxuXHRcdHMgPSBbXSxcblx0XHRhZGQgPSBmdW5jdGlvbigga2V5LCB2YWx1ZU9yRnVuY3Rpb24gKSB7XG5cblx0XHRcdC8vIElmIHZhbHVlIGlzIGEgZnVuY3Rpb24sIGludm9rZSBpdCBhbmQgdXNlIGl0cyByZXR1cm4gdmFsdWVcblx0XHRcdHZhciB2YWx1ZSA9IGlzRnVuY3Rpb24oIHZhbHVlT3JGdW5jdGlvbiApID9cblx0XHRcdFx0dmFsdWVPckZ1bmN0aW9uKCkgOlxuXHRcdFx0XHR2YWx1ZU9yRnVuY3Rpb247XG5cblx0XHRcdHNbIHMubGVuZ3RoIF0gPSBlbmNvZGVVUklDb21wb25lbnQoIGtleSApICsgXCI9XCIgK1xuXHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnQoIHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKTtcblx0XHR9O1xuXG5cdGlmICggYSA9PSBudWxsICkge1xuXHRcdHJldHVybiBcIlwiO1xuXHR9XG5cblx0Ly8gSWYgYW4gYXJyYXkgd2FzIHBhc3NlZCBpbiwgYXNzdW1lIHRoYXQgaXQgaXMgYW4gYXJyYXkgb2YgZm9ybSBlbGVtZW50cy5cblx0aWYgKCBBcnJheS5pc0FycmF5KCBhICkgfHwgKCBhLmpxdWVyeSAmJiAhalF1ZXJ5LmlzUGxhaW5PYmplY3QoIGEgKSApICkge1xuXG5cdFx0Ly8gU2VyaWFsaXplIHRoZSBmb3JtIGVsZW1lbnRzXG5cdFx0alF1ZXJ5LmVhY2goIGEsIGZ1bmN0aW9uKCkge1xuXHRcdFx0YWRkKCB0aGlzLm5hbWUsIHRoaXMudmFsdWUgKTtcblx0XHR9ICk7XG5cblx0fSBlbHNlIHtcblxuXHRcdC8vIElmIHRyYWRpdGlvbmFsLCBlbmNvZGUgdGhlIFwib2xkXCIgd2F5ICh0aGUgd2F5IDEuMy4yIG9yIG9sZGVyXG5cdFx0Ly8gZGlkIGl0KSwgb3RoZXJ3aXNlIGVuY29kZSBwYXJhbXMgcmVjdXJzaXZlbHkuXG5cdFx0Zm9yICggcHJlZml4IGluIGEgKSB7XG5cdFx0XHRidWlsZFBhcmFtcyggcHJlZml4LCBhWyBwcmVmaXggXSwgdHJhZGl0aW9uYWwsIGFkZCApO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgcmVzdWx0aW5nIHNlcmlhbGl6YXRpb25cblx0cmV0dXJuIHMuam9pbiggXCImXCIgKTtcbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0c2VyaWFsaXplOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4galF1ZXJ5LnBhcmFtKCB0aGlzLnNlcmlhbGl6ZUFycmF5KCkgKTtcblx0fSxcblx0c2VyaWFsaXplQXJyYXk6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcCggZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIENhbiBhZGQgcHJvcEhvb2sgZm9yIFwiZWxlbWVudHNcIiB0byBmaWx0ZXIgb3IgYWRkIGZvcm0gZWxlbWVudHNcblx0XHRcdHZhciBlbGVtZW50cyA9IGpRdWVyeS5wcm9wKCB0aGlzLCBcImVsZW1lbnRzXCIgKTtcblx0XHRcdHJldHVybiBlbGVtZW50cyA/IGpRdWVyeS5tYWtlQXJyYXkoIGVsZW1lbnRzICkgOiB0aGlzO1xuXHRcdH0gKS5maWx0ZXIoIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHR5cGUgPSB0aGlzLnR5cGU7XG5cblx0XHRcdC8vIFVzZSAuaXMoIFwiOmRpc2FibGVkXCIgKSBzbyB0aGF0IGZpZWxkc2V0W2Rpc2FibGVkXSB3b3Jrc1xuXHRcdFx0cmV0dXJuIHRoaXMubmFtZSAmJiAhalF1ZXJ5KCB0aGlzICkuaXMoIFwiOmRpc2FibGVkXCIgKSAmJlxuXHRcdFx0XHRyc3VibWl0dGFibGUudGVzdCggdGhpcy5ub2RlTmFtZSApICYmICFyc3VibWl0dGVyVHlwZXMudGVzdCggdHlwZSApICYmXG5cdFx0XHRcdCggdGhpcy5jaGVja2VkIHx8ICFyY2hlY2thYmxlVHlwZS50ZXN0KCB0eXBlICkgKTtcblx0XHR9ICkubWFwKCBmdW5jdGlvbiggX2ksIGVsZW0gKSB7XG5cdFx0XHR2YXIgdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cblx0XHRcdGlmICggdmFsID09IG51bGwgKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbCApICkge1xuXHRcdFx0XHRyZXR1cm4galF1ZXJ5Lm1hcCggdmFsLCBmdW5jdGlvbiggdmFsICkge1xuXHRcdFx0XHRcdHJldHVybiB7IG5hbWU6IGVsZW0ubmFtZSwgdmFsdWU6IHZhbC5yZXBsYWNlKCByQ1JMRiwgXCJcXHJcXG5cIiApIH07XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHsgbmFtZTogZWxlbS5uYW1lLCB2YWx1ZTogdmFsLnJlcGxhY2UoIHJDUkxGLCBcIlxcclxcblwiICkgfTtcblx0XHR9ICkuZ2V0KCk7XG5cdH1cbn0gKTtcblxuXG52YXJcblx0cjIwID0gLyUyMC9nLFxuXHRyaGFzaCA9IC8jLiokLyxcblx0cmFudGlDYWNoZSA9IC8oWz8mXSlfPVteJl0qLyxcblx0cmhlYWRlcnMgPSAvXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL21nLFxuXG5cdC8vIHRyYWMtNzY1MywgdHJhYy04MTI1LCB0cmFjLTgxNTI6IGxvY2FsIHByb3RvY29sIGRldGVjdGlvblxuXHRybG9jYWxQcm90b2NvbCA9IC9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLFxuXHRybm9Db250ZW50ID0gL14oPzpHRVR8SEVBRCkkLyxcblx0cnByb3RvY29sID0gL15cXC9cXC8vLFxuXG5cdC8qIFByZWZpbHRlcnNcblx0ICogMSkgVGhleSBhcmUgdXNlZnVsIHRvIGludHJvZHVjZSBjdXN0b20gZGF0YVR5cGVzIChzZWUgYWpheC9qc29ucC5qcyBmb3IgYW4gZXhhbXBsZSlcblx0ICogMikgVGhlc2UgYXJlIGNhbGxlZDpcblx0ICogICAgLSBCRUZPUkUgYXNraW5nIGZvciBhIHRyYW5zcG9ydFxuXHQgKiAgICAtIEFGVEVSIHBhcmFtIHNlcmlhbGl6YXRpb24gKHMuZGF0YSBpcyBhIHN0cmluZyBpZiBzLnByb2Nlc3NEYXRhIGlzIHRydWUpXG5cdCAqIDMpIGtleSBpcyB0aGUgZGF0YVR5cGVcblx0ICogNCkgdGhlIGNhdGNoYWxsIHN5bWJvbCBcIipcIiBjYW4gYmUgdXNlZFxuXHQgKiA1KSBleGVjdXRpb24gd2lsbCBzdGFydCB3aXRoIHRyYW5zcG9ydCBkYXRhVHlwZSBhbmQgVEhFTiBjb250aW51ZSBkb3duIHRvIFwiKlwiIGlmIG5lZWRlZFxuXHQgKi9cblx0cHJlZmlsdGVycyA9IHt9LFxuXG5cdC8qIFRyYW5zcG9ydHMgYmluZGluZ3Ncblx0ICogMSkga2V5IGlzIHRoZSBkYXRhVHlwZVxuXHQgKiAyKSB0aGUgY2F0Y2hhbGwgc3ltYm9sIFwiKlwiIGNhbiBiZSB1c2VkXG5cdCAqIDMpIHNlbGVjdGlvbiB3aWxsIHN0YXJ0IHdpdGggdHJhbnNwb3J0IGRhdGFUeXBlIGFuZCBUSEVOIGdvIHRvIFwiKlwiIGlmIG5lZWRlZFxuXHQgKi9cblx0dHJhbnNwb3J0cyA9IHt9LFxuXG5cdC8vIEF2b2lkIGNvbW1lbnQtcHJvbG9nIGNoYXIgc2VxdWVuY2UgKHRyYWMtMTAwOTgpOyBtdXN0IGFwcGVhc2UgbGludCBhbmQgZXZhZGUgY29tcHJlc3Npb25cblx0YWxsVHlwZXMgPSBcIiovXCIuY29uY2F0KCBcIipcIiApLFxuXG5cdC8vIEFuY2hvciB0YWcgZm9yIHBhcnNpbmcgdGhlIGRvY3VtZW50IG9yaWdpblxuXHRvcmlnaW5BbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImFcIiApO1xuXG5vcmlnaW5BbmNob3IuaHJlZiA9IGxvY2F0aW9uLmhyZWY7XG5cbi8vIEJhc2UgXCJjb25zdHJ1Y3RvclwiIGZvciBqUXVlcnkuYWpheFByZWZpbHRlciBhbmQgalF1ZXJ5LmFqYXhUcmFuc3BvcnRcbmZ1bmN0aW9uIGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyggc3RydWN0dXJlICkge1xuXG5cdC8vIGRhdGFUeXBlRXhwcmVzc2lvbiBpcyBvcHRpb25hbCBhbmQgZGVmYXVsdHMgdG8gXCIqXCJcblx0cmV0dXJuIGZ1bmN0aW9uKCBkYXRhVHlwZUV4cHJlc3Npb24sIGZ1bmMgKSB7XG5cblx0XHRpZiAoIHR5cGVvZiBkYXRhVHlwZUV4cHJlc3Npb24gIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRmdW5jID0gZGF0YVR5cGVFeHByZXNzaW9uO1xuXHRcdFx0ZGF0YVR5cGVFeHByZXNzaW9uID0gXCIqXCI7XG5cdFx0fVxuXG5cdFx0dmFyIGRhdGFUeXBlLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRkYXRhVHlwZXMgPSBkYXRhVHlwZUV4cHJlc3Npb24udG9Mb3dlckNhc2UoKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFtdO1xuXG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCBmdW5jICkgKSB7XG5cblx0XHRcdC8vIEZvciBlYWNoIGRhdGFUeXBlIGluIHRoZSBkYXRhVHlwZUV4cHJlc3Npb25cblx0XHRcdHdoaWxlICggKCBkYXRhVHlwZSA9IGRhdGFUeXBlc1sgaSsrIF0gKSApIHtcblxuXHRcdFx0XHQvLyBQcmVwZW5kIGlmIHJlcXVlc3RlZFxuXHRcdFx0XHRpZiAoIGRhdGFUeXBlWyAwIF0gPT09IFwiK1wiICkge1xuXHRcdFx0XHRcdGRhdGFUeXBlID0gZGF0YVR5cGUuc2xpY2UoIDEgKSB8fCBcIipcIjtcblx0XHRcdFx0XHQoIHN0cnVjdHVyZVsgZGF0YVR5cGUgXSA9IHN0cnVjdHVyZVsgZGF0YVR5cGUgXSB8fCBbXSApLnVuc2hpZnQoIGZ1bmMgKTtcblxuXHRcdFx0XHQvLyBPdGhlcndpc2UgYXBwZW5kXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0KCBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gPSBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gfHwgW10gKS5wdXNoKCBmdW5jICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbi8vIEJhc2UgaW5zcGVjdGlvbiBmdW5jdGlvbiBmb3IgcHJlZmlsdGVycyBhbmQgdHJhbnNwb3J0c1xuZnVuY3Rpb24gaW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHN0cnVjdHVyZSwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zLCBqcVhIUiApIHtcblxuXHR2YXIgaW5zcGVjdGVkID0ge30sXG5cdFx0c2Vla2luZ1RyYW5zcG9ydCA9ICggc3RydWN0dXJlID09PSB0cmFuc3BvcnRzICk7XG5cblx0ZnVuY3Rpb24gaW5zcGVjdCggZGF0YVR5cGUgKSB7XG5cdFx0dmFyIHNlbGVjdGVkO1xuXHRcdGluc3BlY3RlZFsgZGF0YVR5cGUgXSA9IHRydWU7XG5cdFx0alF1ZXJ5LmVhY2goIHN0cnVjdHVyZVsgZGF0YVR5cGUgXSB8fCBbXSwgZnVuY3Rpb24oIF8sIHByZWZpbHRlck9yRmFjdG9yeSApIHtcblx0XHRcdHZhciBkYXRhVHlwZU9yVHJhbnNwb3J0ID0gcHJlZmlsdGVyT3JGYWN0b3J5KCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMsIGpxWEhSICk7XG5cdFx0XHRpZiAoIHR5cGVvZiBkYXRhVHlwZU9yVHJhbnNwb3J0ID09PSBcInN0cmluZ1wiICYmXG5cdFx0XHRcdCFzZWVraW5nVHJhbnNwb3J0ICYmICFpbnNwZWN0ZWRbIGRhdGFUeXBlT3JUcmFuc3BvcnQgXSApIHtcblxuXHRcdFx0XHRvcHRpb25zLmRhdGFUeXBlcy51bnNoaWZ0KCBkYXRhVHlwZU9yVHJhbnNwb3J0ICk7XG5cdFx0XHRcdGluc3BlY3QoIGRhdGFUeXBlT3JUcmFuc3BvcnQgKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSBlbHNlIGlmICggc2Vla2luZ1RyYW5zcG9ydCApIHtcblx0XHRcdFx0cmV0dXJuICEoIHNlbGVjdGVkID0gZGF0YVR5cGVPclRyYW5zcG9ydCApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0XHRyZXR1cm4gc2VsZWN0ZWQ7XG5cdH1cblxuXHRyZXR1cm4gaW5zcGVjdCggb3B0aW9ucy5kYXRhVHlwZXNbIDAgXSApIHx8ICFpbnNwZWN0ZWRbIFwiKlwiIF0gJiYgaW5zcGVjdCggXCIqXCIgKTtcbn1cblxuLy8gQSBzcGVjaWFsIGV4dGVuZCBmb3IgYWpheCBvcHRpb25zXG4vLyB0aGF0IHRha2VzIFwiZmxhdFwiIG9wdGlvbnMgKG5vdCB0byBiZSBkZWVwIGV4dGVuZGVkKVxuLy8gRml4ZXMgdHJhYy05ODg3XG5mdW5jdGlvbiBhamF4RXh0ZW5kKCB0YXJnZXQsIHNyYyApIHtcblx0dmFyIGtleSwgZGVlcCxcblx0XHRmbGF0T3B0aW9ucyA9IGpRdWVyeS5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnMgfHwge307XG5cblx0Zm9yICgga2V5IGluIHNyYyApIHtcblx0XHRpZiAoIHNyY1sga2V5IF0gIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdCggZmxhdE9wdGlvbnNbIGtleSBdID8gdGFyZ2V0IDogKCBkZWVwIHx8ICggZGVlcCA9IHt9ICkgKSApWyBrZXkgXSA9IHNyY1sga2V5IF07XG5cdFx0fVxuXHR9XG5cdGlmICggZGVlcCApIHtcblx0XHRqUXVlcnkuZXh0ZW5kKCB0cnVlLCB0YXJnZXQsIGRlZXAgKTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbi8qIEhhbmRsZXMgcmVzcG9uc2VzIHRvIGFuIGFqYXggcmVxdWVzdDpcbiAqIC0gZmluZHMgdGhlIHJpZ2h0IGRhdGFUeXBlIChtZWRpYXRlcyBiZXR3ZWVuIGNvbnRlbnQtdHlwZSBhbmQgZXhwZWN0ZWQgZGF0YVR5cGUpXG4gKiAtIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcmVzcG9uc2VcbiAqL1xuZnVuY3Rpb24gYWpheEhhbmRsZVJlc3BvbnNlcyggcywganFYSFIsIHJlc3BvbnNlcyApIHtcblxuXHR2YXIgY3QsIHR5cGUsIGZpbmFsRGF0YVR5cGUsIGZpcnN0RGF0YVR5cGUsXG5cdFx0Y29udGVudHMgPSBzLmNvbnRlbnRzLFxuXHRcdGRhdGFUeXBlcyA9IHMuZGF0YVR5cGVzO1xuXG5cdC8vIFJlbW92ZSBhdXRvIGRhdGFUeXBlIGFuZCBnZXQgY29udGVudC10eXBlIGluIHRoZSBwcm9jZXNzXG5cdHdoaWxlICggZGF0YVR5cGVzWyAwIF0gPT09IFwiKlwiICkge1xuXHRcdGRhdGFUeXBlcy5zaGlmdCgpO1xuXHRcdGlmICggY3QgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGN0ID0gcy5taW1lVHlwZSB8fCBqcVhIUi5nZXRSZXNwb25zZUhlYWRlciggXCJDb250ZW50LVR5cGVcIiApO1xuXHRcdH1cblx0fVxuXG5cdC8vIENoZWNrIGlmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIGtub3duIGNvbnRlbnQtdHlwZVxuXHRpZiAoIGN0ICkge1xuXHRcdGZvciAoIHR5cGUgaW4gY29udGVudHMgKSB7XG5cdFx0XHRpZiAoIGNvbnRlbnRzWyB0eXBlIF0gJiYgY29udGVudHNbIHR5cGUgXS50ZXN0KCBjdCApICkge1xuXHRcdFx0XHRkYXRhVHlwZXMudW5zaGlmdCggdHlwZSApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBDaGVjayB0byBzZWUgaWYgd2UgaGF2ZSBhIHJlc3BvbnNlIGZvciB0aGUgZXhwZWN0ZWQgZGF0YVR5cGVcblx0aWYgKCBkYXRhVHlwZXNbIDAgXSBpbiByZXNwb25zZXMgKSB7XG5cdFx0ZmluYWxEYXRhVHlwZSA9IGRhdGFUeXBlc1sgMCBdO1xuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gVHJ5IGNvbnZlcnRpYmxlIGRhdGFUeXBlc1xuXHRcdGZvciAoIHR5cGUgaW4gcmVzcG9uc2VzICkge1xuXHRcdFx0aWYgKCAhZGF0YVR5cGVzWyAwIF0gfHwgcy5jb252ZXJ0ZXJzWyB0eXBlICsgXCIgXCIgKyBkYXRhVHlwZXNbIDAgXSBdICkge1xuXHRcdFx0XHRmaW5hbERhdGFUeXBlID0gdHlwZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICFmaXJzdERhdGFUeXBlICkge1xuXHRcdFx0XHRmaXJzdERhdGFUeXBlID0gdHlwZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBPciBqdXN0IHVzZSBmaXJzdCBvbmVcblx0XHRmaW5hbERhdGFUeXBlID0gZmluYWxEYXRhVHlwZSB8fCBmaXJzdERhdGFUeXBlO1xuXHR9XG5cblx0Ly8gSWYgd2UgZm91bmQgYSBkYXRhVHlwZVxuXHQvLyBXZSBhZGQgdGhlIGRhdGFUeXBlIHRvIHRoZSBsaXN0IGlmIG5lZWRlZFxuXHQvLyBhbmQgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlXG5cdGlmICggZmluYWxEYXRhVHlwZSApIHtcblx0XHRpZiAoIGZpbmFsRGF0YVR5cGUgIT09IGRhdGFUeXBlc1sgMCBdICkge1xuXHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoIGZpbmFsRGF0YVR5cGUgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3BvbnNlc1sgZmluYWxEYXRhVHlwZSBdO1xuXHR9XG59XG5cbi8qIENoYWluIGNvbnZlcnNpb25zIGdpdmVuIHRoZSByZXF1ZXN0IGFuZCB0aGUgb3JpZ2luYWwgcmVzcG9uc2VcbiAqIEFsc28gc2V0cyB0aGUgcmVzcG9uc2VYWFggZmllbGRzIG9uIHRoZSBqcVhIUiBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBhamF4Q29udmVydCggcywgcmVzcG9uc2UsIGpxWEhSLCBpc1N1Y2Nlc3MgKSB7XG5cdHZhciBjb252MiwgY3VycmVudCwgY29udiwgdG1wLCBwcmV2LFxuXHRcdGNvbnZlcnRlcnMgPSB7fSxcblxuXHRcdC8vIFdvcmsgd2l0aCBhIGNvcHkgb2YgZGF0YVR5cGVzIGluIGNhc2Ugd2UgbmVlZCB0byBtb2RpZnkgaXQgZm9yIGNvbnZlcnNpb25cblx0XHRkYXRhVHlwZXMgPSBzLmRhdGFUeXBlcy5zbGljZSgpO1xuXG5cdC8vIENyZWF0ZSBjb252ZXJ0ZXJzIG1hcCB3aXRoIGxvd2VyY2FzZWQga2V5c1xuXHRpZiAoIGRhdGFUeXBlc1sgMSBdICkge1xuXHRcdGZvciAoIGNvbnYgaW4gcy5jb252ZXJ0ZXJzICkge1xuXHRcdFx0Y29udmVydGVyc1sgY29udi50b0xvd2VyQ2FzZSgpIF0gPSBzLmNvbnZlcnRlcnNbIGNvbnYgXTtcblx0XHR9XG5cdH1cblxuXHRjdXJyZW50ID0gZGF0YVR5cGVzLnNoaWZ0KCk7XG5cblx0Ly8gQ29udmVydCB0byBlYWNoIHNlcXVlbnRpYWwgZGF0YVR5cGVcblx0d2hpbGUgKCBjdXJyZW50ICkge1xuXG5cdFx0aWYgKCBzLnJlc3BvbnNlRmllbGRzWyBjdXJyZW50IF0gKSB7XG5cdFx0XHRqcVhIUlsgcy5yZXNwb25zZUZpZWxkc1sgY3VycmVudCBdIF0gPSByZXNwb25zZTtcblx0XHR9XG5cblx0XHQvLyBBcHBseSB0aGUgZGF0YUZpbHRlciBpZiBwcm92aWRlZFxuXHRcdGlmICggIXByZXYgJiYgaXNTdWNjZXNzICYmIHMuZGF0YUZpbHRlciApIHtcblx0XHRcdHJlc3BvbnNlID0gcy5kYXRhRmlsdGVyKCByZXNwb25zZSwgcy5kYXRhVHlwZSApO1xuXHRcdH1cblxuXHRcdHByZXYgPSBjdXJyZW50O1xuXHRcdGN1cnJlbnQgPSBkYXRhVHlwZXMuc2hpZnQoKTtcblxuXHRcdGlmICggY3VycmVudCApIHtcblxuXHRcdFx0Ly8gVGhlcmUncyBvbmx5IHdvcmsgdG8gZG8gaWYgY3VycmVudCBkYXRhVHlwZSBpcyBub24tYXV0b1xuXHRcdFx0aWYgKCBjdXJyZW50ID09PSBcIipcIiApIHtcblxuXHRcdFx0XHRjdXJyZW50ID0gcHJldjtcblxuXHRcdFx0Ly8gQ29udmVydCByZXNwb25zZSBpZiBwcmV2IGRhdGFUeXBlIGlzIG5vbi1hdXRvIGFuZCBkaWZmZXJzIGZyb20gY3VycmVudFxuXHRcdFx0fSBlbHNlIGlmICggcHJldiAhPT0gXCIqXCIgJiYgcHJldiAhPT0gY3VycmVudCApIHtcblxuXHRcdFx0XHQvLyBTZWVrIGEgZGlyZWN0IGNvbnZlcnRlclxuXHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgcHJldiArIFwiIFwiICsgY3VycmVudCBdIHx8IGNvbnZlcnRlcnNbIFwiKiBcIiArIGN1cnJlbnQgXTtcblxuXHRcdFx0XHQvLyBJZiBub25lIGZvdW5kLCBzZWVrIGEgcGFpclxuXHRcdFx0XHRpZiAoICFjb252ICkge1xuXHRcdFx0XHRcdGZvciAoIGNvbnYyIGluIGNvbnZlcnRlcnMgKSB7XG5cblx0XHRcdFx0XHRcdC8vIElmIGNvbnYyIG91dHB1dHMgY3VycmVudFxuXHRcdFx0XHRcdFx0dG1wID0gY29udjIuc3BsaXQoIFwiIFwiICk7XG5cdFx0XHRcdFx0XHRpZiAoIHRtcFsgMSBdID09PSBjdXJyZW50ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIElmIHByZXYgY2FuIGJlIGNvbnZlcnRlZCB0byBhY2NlcHRlZCBpbnB1dFxuXHRcdFx0XHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgcHJldiArIFwiIFwiICsgdG1wWyAwIF0gXSB8fFxuXHRcdFx0XHRcdFx0XHRcdGNvbnZlcnRlcnNbIFwiKiBcIiArIHRtcFsgMCBdIF07XG5cdFx0XHRcdFx0XHRcdGlmICggY29udiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIENvbmRlbnNlIGVxdWl2YWxlbmNlIGNvbnZlcnRlcnNcblx0XHRcdFx0XHRcdFx0XHRpZiAoIGNvbnYgPT09IHRydWUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgY29udjIgXTtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIE90aGVyd2lzZSwgaW5zZXJ0IHRoZSBpbnRlcm1lZGlhdGUgZGF0YVR5cGVcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBjb252ZXJ0ZXJzWyBjb252MiBdICE9PSB0cnVlICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudCA9IHRtcFsgMCBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoIHRtcFsgMSBdICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQXBwbHkgY29udmVydGVyIChpZiBub3QgYW4gZXF1aXZhbGVuY2UpXG5cdFx0XHRcdGlmICggY29udiAhPT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRcdC8vIFVubGVzcyBlcnJvcnMgYXJlIGFsbG93ZWQgdG8gYnViYmxlLCBjYXRjaCBhbmQgcmV0dXJuIHRoZW1cblx0XHRcdFx0XHRpZiAoIGNvbnYgJiYgcy50aHJvd3MgKSB7XG5cdFx0XHRcdFx0XHRyZXNwb25zZSA9IGNvbnYoIHJlc3BvbnNlICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlID0gY29udiggcmVzcG9uc2UgKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdHN0YXRlOiBcInBhcnNlcmVycm9yXCIsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGNvbnYgPyBlIDogXCJObyBjb252ZXJzaW9uIGZyb20gXCIgKyBwcmV2ICsgXCIgdG8gXCIgKyBjdXJyZW50XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHsgc3RhdGU6IFwic3VjY2Vzc1wiLCBkYXRhOiByZXNwb25zZSB9O1xufVxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0Ly8gQ291bnRlciBmb3IgaG9sZGluZyB0aGUgbnVtYmVyIG9mIGFjdGl2ZSBxdWVyaWVzXG5cdGFjdGl2ZTogMCxcblxuXHQvLyBMYXN0LU1vZGlmaWVkIGhlYWRlciBjYWNoZSBmb3IgbmV4dCByZXF1ZXN0XG5cdGxhc3RNb2RpZmllZDoge30sXG5cdGV0YWc6IHt9LFxuXG5cdGFqYXhTZXR0aW5nczoge1xuXHRcdHVybDogbG9jYXRpb24uaHJlZixcblx0XHR0eXBlOiBcIkdFVFwiLFxuXHRcdGlzTG9jYWw6IHJsb2NhbFByb3RvY29sLnRlc3QoIGxvY2F0aW9uLnByb3RvY29sICksXG5cdFx0Z2xvYmFsOiB0cnVlLFxuXHRcdHByb2Nlc3NEYXRhOiB0cnVlLFxuXHRcdGFzeW5jOiB0cnVlLFxuXHRcdGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLFxuXG5cdFx0Lypcblx0XHR0aW1lb3V0OiAwLFxuXHRcdGRhdGE6IG51bGwsXG5cdFx0ZGF0YVR5cGU6IG51bGwsXG5cdFx0dXNlcm5hbWU6IG51bGwsXG5cdFx0cGFzc3dvcmQ6IG51bGwsXG5cdFx0Y2FjaGU6IG51bGwsXG5cdFx0dGhyb3dzOiBmYWxzZSxcblx0XHR0cmFkaXRpb25hbDogZmFsc2UsXG5cdFx0aGVhZGVyczoge30sXG5cdFx0Ki9cblxuXHRcdGFjY2VwdHM6IHtcblx0XHRcdFwiKlwiOiBhbGxUeXBlcyxcblx0XHRcdHRleHQ6IFwidGV4dC9wbGFpblwiLFxuXHRcdFx0aHRtbDogXCJ0ZXh0L2h0bWxcIixcblx0XHRcdHhtbDogXCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsXG5cdFx0XHRqc29uOiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwiXG5cdFx0fSxcblxuXHRcdGNvbnRlbnRzOiB7XG5cdFx0XHR4bWw6IC9cXGJ4bWxcXGIvLFxuXHRcdFx0aHRtbDogL1xcYmh0bWwvLFxuXHRcdFx0anNvbjogL1xcYmpzb25cXGIvXG5cdFx0fSxcblxuXHRcdHJlc3BvbnNlRmllbGRzOiB7XG5cdFx0XHR4bWw6IFwicmVzcG9uc2VYTUxcIixcblx0XHRcdHRleHQ6IFwicmVzcG9uc2VUZXh0XCIsXG5cdFx0XHRqc29uOiBcInJlc3BvbnNlSlNPTlwiXG5cdFx0fSxcblxuXHRcdC8vIERhdGEgY29udmVydGVyc1xuXHRcdC8vIEtleXMgc2VwYXJhdGUgc291cmNlIChvciBjYXRjaGFsbCBcIipcIikgYW5kIGRlc3RpbmF0aW9uIHR5cGVzIHdpdGggYSBzaW5nbGUgc3BhY2Vcblx0XHRjb252ZXJ0ZXJzOiB7XG5cblx0XHRcdC8vIENvbnZlcnQgYW55dGhpbmcgdG8gdGV4dFxuXHRcdFx0XCIqIHRleHRcIjogU3RyaW5nLFxuXG5cdFx0XHQvLyBUZXh0IHRvIGh0bWwgKHRydWUgPSBubyB0cmFuc2Zvcm1hdGlvbilcblx0XHRcdFwidGV4dCBodG1sXCI6IHRydWUsXG5cblx0XHRcdC8vIEV2YWx1YXRlIHRleHQgYXMgYSBqc29uIGV4cHJlc3Npb25cblx0XHRcdFwidGV4dCBqc29uXCI6IEpTT04ucGFyc2UsXG5cblx0XHRcdC8vIFBhcnNlIHRleHQgYXMgeG1sXG5cdFx0XHRcInRleHQgeG1sXCI6IGpRdWVyeS5wYXJzZVhNTFxuXHRcdH0sXG5cblx0XHQvLyBGb3Igb3B0aW9ucyB0aGF0IHNob3VsZG4ndCBiZSBkZWVwIGV4dGVuZGVkOlxuXHRcdC8vIHlvdSBjYW4gYWRkIHlvdXIgb3duIGN1c3RvbSBvcHRpb25zIGhlcmUgaWZcblx0XHQvLyBhbmQgd2hlbiB5b3UgY3JlYXRlIG9uZSB0aGF0IHNob3VsZG4ndCBiZVxuXHRcdC8vIGRlZXAgZXh0ZW5kZWQgKHNlZSBhamF4RXh0ZW5kKVxuXHRcdGZsYXRPcHRpb25zOiB7XG5cdFx0XHR1cmw6IHRydWUsXG5cdFx0XHRjb250ZXh0OiB0cnVlXG5cdFx0fVxuXHR9LFxuXG5cdC8vIENyZWF0ZXMgYSBmdWxsIGZsZWRnZWQgc2V0dGluZ3Mgb2JqZWN0IGludG8gdGFyZ2V0XG5cdC8vIHdpdGggYm90aCBhamF4U2V0dGluZ3MgYW5kIHNldHRpbmdzIGZpZWxkcy5cblx0Ly8gSWYgdGFyZ2V0IGlzIG9taXR0ZWQsIHdyaXRlcyBpbnRvIGFqYXhTZXR0aW5ncy5cblx0YWpheFNldHVwOiBmdW5jdGlvbiggdGFyZ2V0LCBzZXR0aW5ncyApIHtcblx0XHRyZXR1cm4gc2V0dGluZ3MgP1xuXG5cdFx0XHQvLyBCdWlsZGluZyBhIHNldHRpbmdzIG9iamVjdFxuXHRcdFx0YWpheEV4dGVuZCggYWpheEV4dGVuZCggdGFyZ2V0LCBqUXVlcnkuYWpheFNldHRpbmdzICksIHNldHRpbmdzICkgOlxuXG5cdFx0XHQvLyBFeHRlbmRpbmcgYWpheFNldHRpbmdzXG5cdFx0XHRhamF4RXh0ZW5kKCBqUXVlcnkuYWpheFNldHRpbmdzLCB0YXJnZXQgKTtcblx0fSxcblxuXHRhamF4UHJlZmlsdGVyOiBhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHByZWZpbHRlcnMgKSxcblx0YWpheFRyYW5zcG9ydDogYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCB0cmFuc3BvcnRzICksXG5cblx0Ly8gTWFpbiBtZXRob2Rcblx0YWpheDogZnVuY3Rpb24oIHVybCwgb3B0aW9ucyApIHtcblxuXHRcdC8vIElmIHVybCBpcyBhbiBvYmplY3QsIHNpbXVsYXRlIHByZS0xLjUgc2lnbmF0dXJlXG5cdFx0aWYgKCB0eXBlb2YgdXJsID09PSBcIm9iamVjdFwiICkge1xuXHRcdFx0b3B0aW9ucyA9IHVybDtcblx0XHRcdHVybCA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvLyBGb3JjZSBvcHRpb25zIHRvIGJlIGFuIG9iamVjdFxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdFx0dmFyIHRyYW5zcG9ydCxcblxuXHRcdFx0Ly8gVVJMIHdpdGhvdXQgYW50aS1jYWNoZSBwYXJhbVxuXHRcdFx0Y2FjaGVVUkwsXG5cblx0XHRcdC8vIFJlc3BvbnNlIGhlYWRlcnNcblx0XHRcdHJlc3BvbnNlSGVhZGVyc1N0cmluZyxcblx0XHRcdHJlc3BvbnNlSGVhZGVycyxcblxuXHRcdFx0Ly8gdGltZW91dCBoYW5kbGVcblx0XHRcdHRpbWVvdXRUaW1lcixcblxuXHRcdFx0Ly8gVXJsIGNsZWFudXAgdmFyXG5cdFx0XHR1cmxBbmNob3IsXG5cblx0XHRcdC8vIFJlcXVlc3Qgc3RhdGUgKGJlY29tZXMgZmFsc2UgdXBvbiBzZW5kIGFuZCB0cnVlIHVwb24gY29tcGxldGlvbilcblx0XHRcdGNvbXBsZXRlZCxcblxuXHRcdFx0Ly8gVG8ga25vdyBpZiBnbG9iYWwgZXZlbnRzIGFyZSB0byBiZSBkaXNwYXRjaGVkXG5cdFx0XHRmaXJlR2xvYmFscyxcblxuXHRcdFx0Ly8gTG9vcCB2YXJpYWJsZVxuXHRcdFx0aSxcblxuXHRcdFx0Ly8gdW5jYWNoZWQgcGFydCBvZiB0aGUgdXJsXG5cdFx0XHR1bmNhY2hlZCxcblxuXHRcdFx0Ly8gQ3JlYXRlIHRoZSBmaW5hbCBvcHRpb25zIG9iamVjdFxuXHRcdFx0cyA9IGpRdWVyeS5hamF4U2V0dXAoIHt9LCBvcHRpb25zICksXG5cblx0XHRcdC8vIENhbGxiYWNrcyBjb250ZXh0XG5cdFx0XHRjYWxsYmFja0NvbnRleHQgPSBzLmNvbnRleHQgfHwgcyxcblxuXHRcdFx0Ly8gQ29udGV4dCBmb3IgZ2xvYmFsIGV2ZW50cyBpcyBjYWxsYmFja0NvbnRleHQgaWYgaXQgaXMgYSBET00gbm9kZSBvciBqUXVlcnkgY29sbGVjdGlvblxuXHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0ID0gcy5jb250ZXh0ICYmXG5cdFx0XHRcdCggY2FsbGJhY2tDb250ZXh0Lm5vZGVUeXBlIHx8IGNhbGxiYWNrQ29udGV4dC5qcXVlcnkgKSA/XG5cdFx0XHRcdGpRdWVyeSggY2FsbGJhY2tDb250ZXh0ICkgOlxuXHRcdFx0XHRqUXVlcnkuZXZlbnQsXG5cblx0XHRcdC8vIERlZmVycmVkc1xuXHRcdFx0ZGVmZXJyZWQgPSBqUXVlcnkuRGVmZXJyZWQoKSxcblx0XHRcdGNvbXBsZXRlRGVmZXJyZWQgPSBqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSxcblxuXHRcdFx0Ly8gU3RhdHVzLWRlcGVuZGVudCBjYWxsYmFja3Ncblx0XHRcdHN0YXR1c0NvZGUgPSBzLnN0YXR1c0NvZGUgfHwge30sXG5cblx0XHRcdC8vIEhlYWRlcnMgKHRoZXkgYXJlIHNlbnQgYWxsIGF0IG9uY2UpXG5cdFx0XHRyZXF1ZXN0SGVhZGVycyA9IHt9LFxuXHRcdFx0cmVxdWVzdEhlYWRlcnNOYW1lcyA9IHt9LFxuXG5cdFx0XHQvLyBEZWZhdWx0IGFib3J0IG1lc3NhZ2Vcblx0XHRcdHN0ckFib3J0ID0gXCJjYW5jZWxlZFwiLFxuXG5cdFx0XHQvLyBGYWtlIHhoclxuXHRcdFx0anFYSFIgPSB7XG5cdFx0XHRcdHJlYWR5U3RhdGU6IDAsXG5cblx0XHRcdFx0Ly8gQnVpbGRzIGhlYWRlcnMgaGFzaHRhYmxlIGlmIG5lZWRlZFxuXHRcdFx0XHRnZXRSZXNwb25zZUhlYWRlcjogZnVuY3Rpb24oIGtleSApIHtcblx0XHRcdFx0XHR2YXIgbWF0Y2g7XG5cdFx0XHRcdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRcdFx0XHRpZiAoICFyZXNwb25zZUhlYWRlcnMgKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlSGVhZGVycyA9IHt9O1xuXHRcdFx0XHRcdFx0XHR3aGlsZSAoICggbWF0Y2ggPSByaGVhZGVycy5leGVjKCByZXNwb25zZUhlYWRlcnNTdHJpbmcgKSApICkge1xuXHRcdFx0XHRcdFx0XHRcdHJlc3BvbnNlSGVhZGVyc1sgbWF0Y2hbIDEgXS50b0xvd2VyQ2FzZSgpICsgXCIgXCIgXSA9XG5cdFx0XHRcdFx0XHRcdFx0XHQoIHJlc3BvbnNlSGVhZGVyc1sgbWF0Y2hbIDEgXS50b0xvd2VyQ2FzZSgpICsgXCIgXCIgXSB8fCBbXSApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5jb25jYXQoIG1hdGNoWyAyIF0gKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bWF0Y2ggPSByZXNwb25zZUhlYWRlcnNbIGtleS50b0xvd2VyQ2FzZSgpICsgXCIgXCIgXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoID09IG51bGwgPyBudWxsIDogbWF0Y2guam9pbiggXCIsIFwiICk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gUmF3IHN0cmluZ1xuXHRcdFx0XHRnZXRBbGxSZXNwb25zZUhlYWRlcnM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiBjb21wbGV0ZWQgPyByZXNwb25zZUhlYWRlcnNTdHJpbmcgOiBudWxsO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIENhY2hlcyB0aGUgaGVhZGVyXG5cdFx0XHRcdHNldFJlcXVlc3RIZWFkZXI6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCA9PSBudWxsICkge1xuXHRcdFx0XHRcdFx0bmFtZSA9IHJlcXVlc3RIZWFkZXJzTmFtZXNbIG5hbWUudG9Mb3dlckNhc2UoKSBdID1cblx0XHRcdFx0XHRcdFx0cmVxdWVzdEhlYWRlcnNOYW1lc1sgbmFtZS50b0xvd2VyQ2FzZSgpIF0gfHwgbmFtZTtcblx0XHRcdFx0XHRcdHJlcXVlc3RIZWFkZXJzWyBuYW1lIF0gPSB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gT3ZlcnJpZGVzIHJlc3BvbnNlIGNvbnRlbnQtdHlwZSBoZWFkZXJcblx0XHRcdFx0b3ZlcnJpZGVNaW1lVHlwZTogZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0XHRcdFx0aWYgKCBjb21wbGV0ZWQgPT0gbnVsbCApIHtcblx0XHRcdFx0XHRcdHMubWltZVR5cGUgPSB0eXBlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuXHRcdFx0XHRzdGF0dXNDb2RlOiBmdW5jdGlvbiggbWFwICkge1xuXHRcdFx0XHRcdHZhciBjb2RlO1xuXHRcdFx0XHRcdGlmICggbWFwICkge1xuXHRcdFx0XHRcdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gRXhlY3V0ZSB0aGUgYXBwcm9wcmlhdGUgY2FsbGJhY2tzXG5cdFx0XHRcdFx0XHRcdGpxWEhSLmFsd2F5cyggbWFwWyBqcVhIUi5zdGF0dXMgXSApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBMYXp5LWFkZCB0aGUgbmV3IGNhbGxiYWNrcyBpbiBhIHdheSB0aGF0IHByZXNlcnZlcyBvbGQgb25lc1xuXHRcdFx0XHRcdFx0XHRmb3IgKCBjb2RlIGluIG1hcCApIHtcblx0XHRcdFx0XHRcdFx0XHRzdGF0dXNDb2RlWyBjb2RlIF0gPSBbIHN0YXR1c0NvZGVbIGNvZGUgXSwgbWFwWyBjb2RlIF0gXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBDYW5jZWwgdGhlIHJlcXVlc3Rcblx0XHRcdFx0YWJvcnQ6IGZ1bmN0aW9uKCBzdGF0dXNUZXh0ICkge1xuXHRcdFx0XHRcdHZhciBmaW5hbFRleHQgPSBzdGF0dXNUZXh0IHx8IHN0ckFib3J0O1xuXHRcdFx0XHRcdGlmICggdHJhbnNwb3J0ICkge1xuXHRcdFx0XHRcdFx0dHJhbnNwb3J0LmFib3J0KCBmaW5hbFRleHQgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZG9uZSggMCwgZmluYWxUZXh0ICk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHQvLyBBdHRhY2ggZGVmZXJyZWRzXG5cdFx0ZGVmZXJyZWQucHJvbWlzZSgganFYSFIgKTtcblxuXHRcdC8vIEFkZCBwcm90b2NvbCBpZiBub3QgcHJvdmlkZWQgKHByZWZpbHRlcnMgbWlnaHQgZXhwZWN0IGl0KVxuXHRcdC8vIEhhbmRsZSBmYWxzeSB1cmwgaW4gdGhlIHNldHRpbmdzIG9iamVjdCAodHJhYy0xMDA5MzogY29uc2lzdGVuY3kgd2l0aCBvbGQgc2lnbmF0dXJlKVxuXHRcdC8vIFdlIGFsc28gdXNlIHRoZSB1cmwgcGFyYW1ldGVyIGlmIGF2YWlsYWJsZVxuXHRcdHMudXJsID0gKCAoIHVybCB8fCBzLnVybCB8fCBsb2NhdGlvbi5ocmVmICkgKyBcIlwiIClcblx0XHRcdC5yZXBsYWNlKCBycHJvdG9jb2wsIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICk7XG5cblx0XHQvLyBBbGlhcyBtZXRob2Qgb3B0aW9uIHRvIHR5cGUgYXMgcGVyIHRpY2tldCB0cmFjLTEyMDA0XG5cdFx0cy50eXBlID0gb3B0aW9ucy5tZXRob2QgfHwgb3B0aW9ucy50eXBlIHx8IHMubWV0aG9kIHx8IHMudHlwZTtcblxuXHRcdC8vIEV4dHJhY3QgZGF0YVR5cGVzIGxpc3Rcblx0XHRzLmRhdGFUeXBlcyA9ICggcy5kYXRhVHlwZSB8fCBcIipcIiApLnRvTG93ZXJDYXNlKCkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbIFwiXCIgXTtcblxuXHRcdC8vIEEgY3Jvc3MtZG9tYWluIHJlcXVlc3QgaXMgaW4gb3JkZXIgd2hlbiB0aGUgb3JpZ2luIGRvZXNuJ3QgbWF0Y2ggdGhlIGN1cnJlbnQgb3JpZ2luLlxuXHRcdGlmICggcy5jcm9zc0RvbWFpbiA9PSBudWxsICkge1xuXHRcdFx0dXJsQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJhXCIgKTtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgPD04IC0gMTEsIEVkZ2UgMTIgLSAxNVxuXHRcdFx0Ly8gSUUgdGhyb3dzIGV4Y2VwdGlvbiBvbiBhY2Nlc3NpbmcgdGhlIGhyZWYgcHJvcGVydHkgaWYgdXJsIGlzIG1hbGZvcm1lZCxcblx0XHRcdC8vIGUuZy4gaHR0cDovL2V4YW1wbGUuY29tOjgweC9cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHVybEFuY2hvci5ocmVmID0gcy51cmw7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD04IC0gMTEgb25seVxuXHRcdFx0XHQvLyBBbmNob3IncyBob3N0IHByb3BlcnR5IGlzbid0IGNvcnJlY3RseSBzZXQgd2hlbiBzLnVybCBpcyByZWxhdGl2ZVxuXHRcdFx0XHR1cmxBbmNob3IuaHJlZiA9IHVybEFuY2hvci5ocmVmO1xuXHRcdFx0XHRzLmNyb3NzRG9tYWluID0gb3JpZ2luQW5jaG9yLnByb3RvY29sICsgXCIvL1wiICsgb3JpZ2luQW5jaG9yLmhvc3QgIT09XG5cdFx0XHRcdFx0dXJsQW5jaG9yLnByb3RvY29sICsgXCIvL1wiICsgdXJsQW5jaG9yLmhvc3Q7XG5cdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHQvLyBJZiB0aGVyZSBpcyBhbiBlcnJvciBwYXJzaW5nIHRoZSBVUkwsIGFzc3VtZSBpdCBpcyBjcm9zc0RvbWFpbixcblx0XHRcdFx0Ly8gaXQgY2FuIGJlIHJlamVjdGVkIGJ5IHRoZSB0cmFuc3BvcnQgaWYgaXQgaXMgaW52YWxpZFxuXHRcdFx0XHRzLmNyb3NzRG9tYWluID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDb252ZXJ0IGRhdGEgaWYgbm90IGFscmVhZHkgYSBzdHJpbmdcblx0XHRpZiAoIHMuZGF0YSAmJiBzLnByb2Nlc3NEYXRhICYmIHR5cGVvZiBzLmRhdGEgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRzLmRhdGEgPSBqUXVlcnkucGFyYW0oIHMuZGF0YSwgcy50cmFkaXRpb25hbCApO1xuXHRcdH1cblxuXHRcdC8vIEFwcGx5IHByZWZpbHRlcnNcblx0XHRpbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyggcHJlZmlsdGVycywgcywgb3B0aW9ucywganFYSFIgKTtcblxuXHRcdC8vIElmIHJlcXVlc3Qgd2FzIGFib3J0ZWQgaW5zaWRlIGEgcHJlZmlsdGVyLCBzdG9wIHRoZXJlXG5cdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRyZXR1cm4ganFYSFI7XG5cdFx0fVxuXG5cdFx0Ly8gV2UgY2FuIGZpcmUgZ2xvYmFsIGV2ZW50cyBhcyBvZiBub3cgaWYgYXNrZWQgdG9cblx0XHQvLyBEb24ndCBmaXJlIGV2ZW50cyBpZiBqUXVlcnkuZXZlbnQgaXMgdW5kZWZpbmVkIGluIGFuIEFNRC11c2FnZSBzY2VuYXJpbyAodHJhYy0xNTExOClcblx0XHRmaXJlR2xvYmFscyA9IGpRdWVyeS5ldmVudCAmJiBzLmdsb2JhbDtcblxuXHRcdC8vIFdhdGNoIGZvciBhIG5ldyBzZXQgb2YgcmVxdWVzdHNcblx0XHRpZiAoIGZpcmVHbG9iYWxzICYmIGpRdWVyeS5hY3RpdmUrKyA9PT0gMCApIHtcblx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCBcImFqYXhTdGFydFwiICk7XG5cdFx0fVxuXG5cdFx0Ly8gVXBwZXJjYXNlIHRoZSB0eXBlXG5cdFx0cy50eXBlID0gcy50eXBlLnRvVXBwZXJDYXNlKCk7XG5cblx0XHQvLyBEZXRlcm1pbmUgaWYgcmVxdWVzdCBoYXMgY29udGVudFxuXHRcdHMuaGFzQ29udGVudCA9ICFybm9Db250ZW50LnRlc3QoIHMudHlwZSApO1xuXG5cdFx0Ly8gU2F2ZSB0aGUgVVJMIGluIGNhc2Ugd2UncmUgdG95aW5nIHdpdGggdGhlIElmLU1vZGlmaWVkLVNpbmNlXG5cdFx0Ly8gYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyIGxhdGVyIG9uXG5cdFx0Ly8gUmVtb3ZlIGhhc2ggdG8gc2ltcGxpZnkgdXJsIG1hbmlwdWxhdGlvblxuXHRcdGNhY2hlVVJMID0gcy51cmwucmVwbGFjZSggcmhhc2gsIFwiXCIgKTtcblxuXHRcdC8vIE1vcmUgb3B0aW9ucyBoYW5kbGluZyBmb3IgcmVxdWVzdHMgd2l0aCBubyBjb250ZW50XG5cdFx0aWYgKCAhcy5oYXNDb250ZW50ICkge1xuXG5cdFx0XHQvLyBSZW1lbWJlciB0aGUgaGFzaCBzbyB3ZSBjYW4gcHV0IGl0IGJhY2tcblx0XHRcdHVuY2FjaGVkID0gcy51cmwuc2xpY2UoIGNhY2hlVVJMLmxlbmd0aCApO1xuXG5cdFx0XHQvLyBJZiBkYXRhIGlzIGF2YWlsYWJsZSBhbmQgc2hvdWxkIGJlIHByb2Nlc3NlZCwgYXBwZW5kIGRhdGEgdG8gdXJsXG5cdFx0XHRpZiAoIHMuZGF0YSAmJiAoIHMucHJvY2Vzc0RhdGEgfHwgdHlwZW9mIHMuZGF0YSA9PT0gXCJzdHJpbmdcIiApICkge1xuXHRcdFx0XHRjYWNoZVVSTCArPSAoIHJxdWVyeS50ZXN0KCBjYWNoZVVSTCApID8gXCImXCIgOiBcIj9cIiApICsgcy5kYXRhO1xuXG5cdFx0XHRcdC8vIHRyYWMtOTY4MjogcmVtb3ZlIGRhdGEgc28gdGhhdCBpdCdzIG5vdCB1c2VkIGluIGFuIGV2ZW50dWFsIHJldHJ5XG5cdFx0XHRcdGRlbGV0ZSBzLmRhdGE7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBvciB1cGRhdGUgYW50aS1jYWNoZSBwYXJhbSBpZiBuZWVkZWRcblx0XHRcdGlmICggcy5jYWNoZSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdGNhY2hlVVJMID0gY2FjaGVVUkwucmVwbGFjZSggcmFudGlDYWNoZSwgXCIkMVwiICk7XG5cdFx0XHRcdHVuY2FjaGVkID0gKCBycXVlcnkudGVzdCggY2FjaGVVUkwgKSA/IFwiJlwiIDogXCI/XCIgKSArIFwiXz1cIiArICggbm9uY2UuZ3VpZCsrICkgK1xuXHRcdFx0XHRcdHVuY2FjaGVkO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQdXQgaGFzaCBhbmQgYW50aS1jYWNoZSBvbiB0aGUgVVJMIHRoYXQgd2lsbCBiZSByZXF1ZXN0ZWQgKGdoLTE3MzIpXG5cdFx0XHRzLnVybCA9IGNhY2hlVVJMICsgdW5jYWNoZWQ7XG5cblx0XHQvLyBDaGFuZ2UgJyUyMCcgdG8gJysnIGlmIHRoaXMgaXMgZW5jb2RlZCBmb3JtIGJvZHkgY29udGVudCAoZ2gtMjY1OClcblx0XHR9IGVsc2UgaWYgKCBzLmRhdGEgJiYgcy5wcm9jZXNzRGF0YSAmJlxuXHRcdFx0KCBzLmNvbnRlbnRUeXBlIHx8IFwiXCIgKS5pbmRleE9mKCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiICkgPT09IDAgKSB7XG5cdFx0XHRzLmRhdGEgPSBzLmRhdGEucmVwbGFjZSggcjIwLCBcIitcIiApO1xuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyLCBpZiBpbiBpZk1vZGlmaWVkIG1vZGUuXG5cdFx0aWYgKCBzLmlmTW9kaWZpZWQgKSB7XG5cdFx0XHRpZiAoIGpRdWVyeS5sYXN0TW9kaWZpZWRbIGNhY2hlVVJMIF0gKSB7XG5cdFx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIFwiSWYtTW9kaWZpZWQtU2luY2VcIiwgalF1ZXJ5Lmxhc3RNb2RpZmllZFsgY2FjaGVVUkwgXSApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBqUXVlcnkuZXRhZ1sgY2FjaGVVUkwgXSApIHtcblx0XHRcdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlciggXCJJZi1Ob25lLU1hdGNoXCIsIGpRdWVyeS5ldGFnWyBjYWNoZVVSTCBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBjb3JyZWN0IGhlYWRlciwgaWYgZGF0YSBpcyBiZWluZyBzZW50XG5cdFx0aWYgKCBzLmRhdGEgJiYgcy5oYXNDb250ZW50ICYmIHMuY29udGVudFR5cGUgIT09IGZhbHNlIHx8IG9wdGlvbnMuY29udGVudFR5cGUgKSB7XG5cdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBcIkNvbnRlbnQtVHlwZVwiLCBzLmNvbnRlbnRUeXBlICk7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBBY2NlcHRzIGhlYWRlciBmb3IgdGhlIHNlcnZlciwgZGVwZW5kaW5nIG9uIHRoZSBkYXRhVHlwZVxuXHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoXG5cdFx0XHRcIkFjY2VwdFwiLFxuXHRcdFx0cy5kYXRhVHlwZXNbIDAgXSAmJiBzLmFjY2VwdHNbIHMuZGF0YVR5cGVzWyAwIF0gXSA/XG5cdFx0XHRcdHMuYWNjZXB0c1sgcy5kYXRhVHlwZXNbIDAgXSBdICtcblx0XHRcdFx0XHQoIHMuZGF0YVR5cGVzWyAwIF0gIT09IFwiKlwiID8gXCIsIFwiICsgYWxsVHlwZXMgKyBcIjsgcT0wLjAxXCIgOiBcIlwiICkgOlxuXHRcdFx0XHRzLmFjY2VwdHNbIFwiKlwiIF1cblx0XHQpO1xuXG5cdFx0Ly8gQ2hlY2sgZm9yIGhlYWRlcnMgb3B0aW9uXG5cdFx0Zm9yICggaSBpbiBzLmhlYWRlcnMgKSB7XG5cdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBpLCBzLmhlYWRlcnNbIGkgXSApO1xuXHRcdH1cblxuXHRcdC8vIEFsbG93IGN1c3RvbSBoZWFkZXJzL21pbWV0eXBlcyBhbmQgZWFybHkgYWJvcnRcblx0XHRpZiAoIHMuYmVmb3JlU2VuZCAmJlxuXHRcdFx0KCBzLmJlZm9yZVNlbmQuY2FsbCggY2FsbGJhY2tDb250ZXh0LCBqcVhIUiwgcyApID09PSBmYWxzZSB8fCBjb21wbGV0ZWQgKSApIHtcblxuXHRcdFx0Ly8gQWJvcnQgaWYgbm90IGRvbmUgYWxyZWFkeSBhbmQgcmV0dXJuXG5cdFx0XHRyZXR1cm4ganFYSFIuYWJvcnQoKTtcblx0XHR9XG5cblx0XHQvLyBBYm9ydGluZyBpcyBubyBsb25nZXIgYSBjYW5jZWxsYXRpb25cblx0XHRzdHJBYm9ydCA9IFwiYWJvcnRcIjtcblxuXHRcdC8vIEluc3RhbGwgY2FsbGJhY2tzIG9uIGRlZmVycmVkc1xuXHRcdGNvbXBsZXRlRGVmZXJyZWQuYWRkKCBzLmNvbXBsZXRlICk7XG5cdFx0anFYSFIuZG9uZSggcy5zdWNjZXNzICk7XG5cdFx0anFYSFIuZmFpbCggcy5lcnJvciApO1xuXG5cdFx0Ly8gR2V0IHRyYW5zcG9ydFxuXHRcdHRyYW5zcG9ydCA9IGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCB0cmFuc3BvcnRzLCBzLCBvcHRpb25zLCBqcVhIUiApO1xuXG5cdFx0Ly8gSWYgbm8gdHJhbnNwb3J0LCB3ZSBhdXRvLWFib3J0XG5cdFx0aWYgKCAhdHJhbnNwb3J0ICkge1xuXHRcdFx0ZG9uZSggLTEsIFwiTm8gVHJhbnNwb3J0XCIgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0anFYSFIucmVhZHlTdGF0ZSA9IDE7XG5cblx0XHRcdC8vIFNlbmQgZ2xvYmFsIGV2ZW50XG5cdFx0XHRpZiAoIGZpcmVHbG9iYWxzICkge1xuXHRcdFx0XHRnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlciggXCJhamF4U2VuZFwiLCBbIGpxWEhSLCBzIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgcmVxdWVzdCB3YXMgYWJvcnRlZCBpbnNpZGUgYWpheFNlbmQsIHN0b3AgdGhlcmVcblx0XHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0XHRyZXR1cm4ganFYSFI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRpbWVvdXRcblx0XHRcdGlmICggcy5hc3luYyAmJiBzLnRpbWVvdXQgPiAwICkge1xuXHRcdFx0XHR0aW1lb3V0VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0anFYSFIuYWJvcnQoIFwidGltZW91dFwiICk7XG5cdFx0XHRcdH0sIHMudGltZW91dCApO1xuXHRcdFx0fVxuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb21wbGV0ZWQgPSBmYWxzZTtcblx0XHRcdFx0dHJhbnNwb3J0LnNlbmQoIHJlcXVlc3RIZWFkZXJzLCBkb25lICk7XG5cdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHQvLyBSZXRocm93IHBvc3QtY29tcGxldGlvbiBleGNlcHRpb25zXG5cdFx0XHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0XHRcdHRocm93IGU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm9wYWdhdGUgb3RoZXJzIGFzIHJlc3VsdHNcblx0XHRcdFx0ZG9uZSggLTEsIGUgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDYWxsYmFjayBmb3Igd2hlbiBldmVyeXRoaW5nIGlzIGRvbmVcblx0XHRmdW5jdGlvbiBkb25lKCBzdGF0dXMsIG5hdGl2ZVN0YXR1c1RleHQsIHJlc3BvbnNlcywgaGVhZGVycyApIHtcblx0XHRcdHZhciBpc1N1Y2Nlc3MsIHN1Y2Nlc3MsIGVycm9yLCByZXNwb25zZSwgbW9kaWZpZWQsXG5cdFx0XHRcdHN0YXR1c1RleHQgPSBuYXRpdmVTdGF0dXNUZXh0O1xuXG5cdFx0XHQvLyBJZ25vcmUgcmVwZWF0IGludm9jYXRpb25zXG5cdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb21wbGV0ZWQgPSB0cnVlO1xuXG5cdFx0XHQvLyBDbGVhciB0aW1lb3V0IGlmIGl0IGV4aXN0c1xuXHRcdFx0aWYgKCB0aW1lb3V0VGltZXIgKSB7XG5cdFx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoIHRpbWVvdXRUaW1lciApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBEZXJlZmVyZW5jZSB0cmFuc3BvcnQgZm9yIGVhcmx5IGdhcmJhZ2UgY29sbGVjdGlvblxuXHRcdFx0Ly8gKG5vIG1hdHRlciBob3cgbG9uZyB0aGUganFYSFIgb2JqZWN0IHdpbGwgYmUgdXNlZClcblx0XHRcdHRyYW5zcG9ydCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0Ly8gQ2FjaGUgcmVzcG9uc2UgaGVhZGVyc1xuXHRcdFx0cmVzcG9uc2VIZWFkZXJzU3RyaW5nID0gaGVhZGVycyB8fCBcIlwiO1xuXG5cdFx0XHQvLyBTZXQgcmVhZHlTdGF0ZVxuXHRcdFx0anFYSFIucmVhZHlTdGF0ZSA9IHN0YXR1cyA+IDAgPyA0IDogMDtcblxuXHRcdFx0Ly8gRGV0ZXJtaW5lIGlmIHN1Y2Nlc3NmdWxcblx0XHRcdGlzU3VjY2VzcyA9IHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwIHx8IHN0YXR1cyA9PT0gMzA0O1xuXG5cdFx0XHQvLyBHZXQgcmVzcG9uc2UgZGF0YVxuXHRcdFx0aWYgKCByZXNwb25zZXMgKSB7XG5cdFx0XHRcdHJlc3BvbnNlID0gYWpheEhhbmRsZVJlc3BvbnNlcyggcywganFYSFIsIHJlc3BvbnNlcyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBVc2UgYSBub29wIGNvbnZlcnRlciBmb3IgbWlzc2luZyBzY3JpcHQgYnV0IG5vdCBpZiBqc29ucFxuXHRcdFx0aWYgKCAhaXNTdWNjZXNzICYmXG5cdFx0XHRcdGpRdWVyeS5pbkFycmF5KCBcInNjcmlwdFwiLCBzLmRhdGFUeXBlcyApID4gLTEgJiZcblx0XHRcdFx0alF1ZXJ5LmluQXJyYXkoIFwianNvblwiLCBzLmRhdGFUeXBlcyApIDwgMCApIHtcblx0XHRcdFx0cy5jb252ZXJ0ZXJzWyBcInRleHQgc2NyaXB0XCIgXSA9IGZ1bmN0aW9uKCkge307XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvbnZlcnQgbm8gbWF0dGVyIHdoYXQgKHRoYXQgd2F5IHJlc3BvbnNlWFhYIGZpZWxkcyBhcmUgYWx3YXlzIHNldClcblx0XHRcdHJlc3BvbnNlID0gYWpheENvbnZlcnQoIHMsIHJlc3BvbnNlLCBqcVhIUiwgaXNTdWNjZXNzICk7XG5cblx0XHRcdC8vIElmIHN1Y2Nlc3NmdWwsIGhhbmRsZSB0eXBlIGNoYWluaW5nXG5cdFx0XHRpZiAoIGlzU3VjY2VzcyApIHtcblxuXHRcdFx0XHQvLyBTZXQgdGhlIElmLU1vZGlmaWVkLVNpbmNlIGFuZC9vciBJZi1Ob25lLU1hdGNoIGhlYWRlciwgaWYgaW4gaWZNb2RpZmllZCBtb2RlLlxuXHRcdFx0XHRpZiAoIHMuaWZNb2RpZmllZCApIHtcblx0XHRcdFx0XHRtb2RpZmllZCA9IGpxWEhSLmdldFJlc3BvbnNlSGVhZGVyKCBcIkxhc3QtTW9kaWZpZWRcIiApO1xuXHRcdFx0XHRcdGlmICggbW9kaWZpZWQgKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkubGFzdE1vZGlmaWVkWyBjYWNoZVVSTCBdID0gbW9kaWZpZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG1vZGlmaWVkID0ganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoIFwiZXRhZ1wiICk7XG5cdFx0XHRcdFx0aWYgKCBtb2RpZmllZCApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5ldGFnWyBjYWNoZVVSTCBdID0gbW9kaWZpZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gaWYgbm8gY29udGVudFxuXHRcdFx0XHRpZiAoIHN0YXR1cyA9PT0gMjA0IHx8IHMudHlwZSA9PT0gXCJIRUFEXCIgKSB7XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IFwibm9jb250ZW50XCI7XG5cblx0XHRcdFx0Ly8gaWYgbm90IG1vZGlmaWVkXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHN0YXR1cyA9PT0gMzA0ICkge1xuXHRcdFx0XHRcdHN0YXR1c1RleHQgPSBcIm5vdG1vZGlmaWVkXCI7XG5cblx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBkYXRhLCBsZXQncyBjb252ZXJ0IGl0XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXRlO1xuXHRcdFx0XHRcdHN1Y2Nlc3MgPSByZXNwb25zZS5kYXRhO1xuXHRcdFx0XHRcdGVycm9yID0gcmVzcG9uc2UuZXJyb3I7XG5cdFx0XHRcdFx0aXNTdWNjZXNzID0gIWVycm9yO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIEV4dHJhY3QgZXJyb3IgZnJvbSBzdGF0dXNUZXh0IGFuZCBub3JtYWxpemUgZm9yIG5vbi1hYm9ydHNcblx0XHRcdFx0ZXJyb3IgPSBzdGF0dXNUZXh0O1xuXHRcdFx0XHRpZiAoIHN0YXR1cyB8fCAhc3RhdHVzVGV4dCApIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gXCJlcnJvclwiO1xuXHRcdFx0XHRcdGlmICggc3RhdHVzIDwgMCApIHtcblx0XHRcdFx0XHRcdHN0YXR1cyA9IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCBkYXRhIGZvciB0aGUgZmFrZSB4aHIgb2JqZWN0XG5cdFx0XHRqcVhIUi5zdGF0dXMgPSBzdGF0dXM7XG5cdFx0XHRqcVhIUi5zdGF0dXNUZXh0ID0gKCBuYXRpdmVTdGF0dXNUZXh0IHx8IHN0YXR1c1RleHQgKSArIFwiXCI7XG5cblx0XHRcdC8vIFN1Y2Nlc3MvRXJyb3Jcblx0XHRcdGlmICggaXNTdWNjZXNzICkge1xuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlV2l0aCggY2FsbGJhY2tDb250ZXh0LCBbIHN1Y2Nlc3MsIHN0YXR1c1RleHQsIGpxWEhSIF0gKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRlZmVycmVkLnJlamVjdFdpdGgoIGNhbGxiYWNrQ29udGV4dCwgWyBqcVhIUiwgc3RhdHVzVGV4dCwgZXJyb3IgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuXHRcdFx0anFYSFIuc3RhdHVzQ29kZSggc3RhdHVzQ29kZSApO1xuXHRcdFx0c3RhdHVzQ29kZSA9IHVuZGVmaW5lZDtcblxuXHRcdFx0aWYgKCBmaXJlR2xvYmFscyApIHtcblx0XHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0LnRyaWdnZXIoIGlzU3VjY2VzcyA/IFwiYWpheFN1Y2Nlc3NcIiA6IFwiYWpheEVycm9yXCIsXG5cdFx0XHRcdFx0WyBqcVhIUiwgcywgaXNTdWNjZXNzID8gc3VjY2VzcyA6IGVycm9yIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29tcGxldGVcblx0XHRcdGNvbXBsZXRlRGVmZXJyZWQuZmlyZVdpdGgoIGNhbGxiYWNrQ29udGV4dCwgWyBqcVhIUiwgc3RhdHVzVGV4dCBdICk7XG5cblx0XHRcdGlmICggZmlyZUdsb2JhbHMgKSB7XG5cdFx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKCBcImFqYXhDb21wbGV0ZVwiLCBbIGpxWEhSLCBzIF0gKTtcblxuXHRcdFx0XHQvLyBIYW5kbGUgdGhlIGdsb2JhbCBBSkFYIGNvdW50ZXJcblx0XHRcdFx0aWYgKCAhKCAtLWpRdWVyeS5hY3RpdmUgKSApIHtcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlciggXCJhamF4U3RvcFwiICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ganFYSFI7XG5cdH0sXG5cblx0Z2V0SlNPTjogZnVuY3Rpb24oIHVybCwgZGF0YSwgY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5nZXQoIHVybCwgZGF0YSwgY2FsbGJhY2ssIFwianNvblwiICk7XG5cdH0sXG5cblx0Z2V0U2NyaXB0OiBmdW5jdGlvbiggdXJsLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdldCggdXJsLCB1bmRlZmluZWQsIGNhbGxiYWNrLCBcInNjcmlwdFwiICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmVhY2goIFsgXCJnZXRcIiwgXCJwb3N0XCIgXSwgZnVuY3Rpb24oIF9pLCBtZXRob2QgKSB7XG5cdGpRdWVyeVsgbWV0aG9kIF0gPSBmdW5jdGlvbiggdXJsLCBkYXRhLCBjYWxsYmFjaywgdHlwZSApIHtcblxuXHRcdC8vIFNoaWZ0IGFyZ3VtZW50cyBpZiBkYXRhIGFyZ3VtZW50IHdhcyBvbWl0dGVkXG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCBkYXRhICkgKSB7XG5cdFx0XHR0eXBlID0gdHlwZSB8fCBjYWxsYmFjaztcblx0XHRcdGNhbGxiYWNrID0gZGF0YTtcblx0XHRcdGRhdGEgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gVGhlIHVybCBjYW4gYmUgYW4gb3B0aW9ucyBvYmplY3QgKHdoaWNoIHRoZW4gbXVzdCBoYXZlIC51cmwpXG5cdFx0cmV0dXJuIGpRdWVyeS5hamF4KCBqUXVlcnkuZXh0ZW5kKCB7XG5cdFx0XHR1cmw6IHVybCxcblx0XHRcdHR5cGU6IG1ldGhvZCxcblx0XHRcdGRhdGFUeXBlOiB0eXBlLFxuXHRcdFx0ZGF0YTogZGF0YSxcblx0XHRcdHN1Y2Nlc3M6IGNhbGxiYWNrXG5cdFx0fSwgalF1ZXJ5LmlzUGxhaW5PYmplY3QoIHVybCApICYmIHVybCApICk7XG5cdH07XG59ICk7XG5cbmpRdWVyeS5hamF4UHJlZmlsdGVyKCBmdW5jdGlvbiggcyApIHtcblx0dmFyIGk7XG5cdGZvciAoIGkgaW4gcy5oZWFkZXJzICkge1xuXHRcdGlmICggaS50b0xvd2VyQ2FzZSgpID09PSBcImNvbnRlbnQtdHlwZVwiICkge1xuXHRcdFx0cy5jb250ZW50VHlwZSA9IHMuaGVhZGVyc1sgaSBdIHx8IFwiXCI7XG5cdFx0fVxuXHR9XG59ICk7XG5cblxualF1ZXJ5Ll9ldmFsVXJsID0gZnVuY3Rpb24oIHVybCwgb3B0aW9ucywgZG9jICkge1xuXHRyZXR1cm4galF1ZXJ5LmFqYXgoIHtcblx0XHR1cmw6IHVybCxcblxuXHRcdC8vIE1ha2UgdGhpcyBleHBsaWNpdCwgc2luY2UgdXNlciBjYW4gb3ZlcnJpZGUgdGhpcyB0aHJvdWdoIGFqYXhTZXR1cCAodHJhYy0xMTI2NClcblx0XHR0eXBlOiBcIkdFVFwiLFxuXHRcdGRhdGFUeXBlOiBcInNjcmlwdFwiLFxuXHRcdGNhY2hlOiB0cnVlLFxuXHRcdGFzeW5jOiBmYWxzZSxcblx0XHRnbG9iYWw6IGZhbHNlLFxuXG5cdFx0Ly8gT25seSBldmFsdWF0ZSB0aGUgcmVzcG9uc2UgaWYgaXQgaXMgc3VjY2Vzc2Z1bCAoZ2gtNDEyNilcblx0XHQvLyBkYXRhRmlsdGVyIGlzIG5vdCBpbnZva2VkIGZvciBmYWlsdXJlIHJlc3BvbnNlcywgc28gdXNpbmcgaXQgaW5zdGVhZFxuXHRcdC8vIG9mIHRoZSBkZWZhdWx0IGNvbnZlcnRlciBpcyBrbHVkZ3kgYnV0IGl0IHdvcmtzLlxuXHRcdGNvbnZlcnRlcnM6IHtcblx0XHRcdFwidGV4dCBzY3JpcHRcIjogZnVuY3Rpb24oKSB7fVxuXHRcdH0sXG5cdFx0ZGF0YUZpbHRlcjogZnVuY3Rpb24oIHJlc3BvbnNlICkge1xuXHRcdFx0alF1ZXJ5Lmdsb2JhbEV2YWwoIHJlc3BvbnNlLCBvcHRpb25zLCBkb2MgKTtcblx0XHR9XG5cdH0gKTtcbn07XG5cblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHR3cmFwQWxsOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHR2YXIgd3JhcDtcblxuXHRcdGlmICggdGhpc1sgMCBdICkge1xuXHRcdFx0aWYgKCBpc0Z1bmN0aW9uKCBodG1sICkgKSB7XG5cdFx0XHRcdGh0bWwgPSBodG1sLmNhbGwoIHRoaXNbIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUaGUgZWxlbWVudHMgdG8gd3JhcCB0aGUgdGFyZ2V0IGFyb3VuZFxuXHRcdFx0d3JhcCA9IGpRdWVyeSggaHRtbCwgdGhpc1sgMCBdLm93bmVyRG9jdW1lbnQgKS5lcSggMCApLmNsb25lKCB0cnVlICk7XG5cblx0XHRcdGlmICggdGhpc1sgMCBdLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdHdyYXAuaW5zZXJ0QmVmb3JlKCB0aGlzWyAwIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0d3JhcC5tYXAoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgZWxlbSA9IHRoaXM7XG5cblx0XHRcdFx0d2hpbGUgKCBlbGVtLmZpcnN0RWxlbWVudENoaWxkICkge1xuXHRcdFx0XHRcdGVsZW0gPSBlbGVtLmZpcnN0RWxlbWVudENoaWxkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGVsZW07XG5cdFx0XHR9ICkuYXBwZW5kKCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0d3JhcElubmVyOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHRpZiAoIGlzRnVuY3Rpb24oIGh0bWwgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS53cmFwSW5uZXIoIGh0bWwuY2FsbCggdGhpcywgaSApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZiA9IGpRdWVyeSggdGhpcyApLFxuXHRcdFx0XHRjb250ZW50cyA9IHNlbGYuY29udGVudHMoKTtcblxuXHRcdFx0aWYgKCBjb250ZW50cy5sZW5ndGggKSB7XG5cdFx0XHRcdGNvbnRlbnRzLndyYXBBbGwoIGh0bWwgKTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi5hcHBlbmQoIGh0bWwgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0d3JhcDogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0dmFyIGh0bWxJc0Z1bmN0aW9uID0gaXNGdW5jdGlvbiggaHRtbCApO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS53cmFwQWxsKCBodG1sSXNGdW5jdGlvbiA/IGh0bWwuY2FsbCggdGhpcywgaSApIDogaHRtbCApO1xuXHRcdH0gKTtcblx0fSxcblxuXHR1bndyYXA6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHR0aGlzLnBhcmVudCggc2VsZWN0b3IgKS5ub3QoIFwiYm9keVwiICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5yZXBsYWNlV2l0aCggdGhpcy5jaGlsZE5vZGVzICk7XG5cdFx0fSApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59ICk7XG5cblxualF1ZXJ5LmV4cHIucHNldWRvcy5oaWRkZW4gPSBmdW5jdGlvbiggZWxlbSApIHtcblx0cmV0dXJuICFqUXVlcnkuZXhwci5wc2V1ZG9zLnZpc2libGUoIGVsZW0gKTtcbn07XG5qUXVlcnkuZXhwci5wc2V1ZG9zLnZpc2libGUgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0cmV0dXJuICEhKCBlbGVtLm9mZnNldFdpZHRoIHx8IGVsZW0ub2Zmc2V0SGVpZ2h0IHx8IGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggKTtcbn07XG5cblxuXG5cbmpRdWVyeS5hamF4U2V0dGluZ3MueGhyID0gZnVuY3Rpb24oKSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKTtcblx0fSBjYXRjaCAoIGUgKSB7fVxufTtcblxudmFyIHhoclN1Y2Nlc3NTdGF0dXMgPSB7XG5cblx0XHQvLyBGaWxlIHByb3RvY29sIGFsd2F5cyB5aWVsZHMgc3RhdHVzIGNvZGUgMCwgYXNzdW1lIDIwMFxuXHRcdDA6IDIwMCxcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdFx0Ly8gdHJhYy0xNDUwOiBzb21ldGltZXMgSUUgcmV0dXJucyAxMjIzIHdoZW4gaXQgc2hvdWxkIGJlIDIwNFxuXHRcdDEyMjM6IDIwNFxuXHR9LFxuXHR4aHJTdXBwb3J0ZWQgPSBqUXVlcnkuYWpheFNldHRpbmdzLnhocigpO1xuXG5zdXBwb3J0LmNvcnMgPSAhIXhoclN1cHBvcnRlZCAmJiAoIFwid2l0aENyZWRlbnRpYWxzXCIgaW4geGhyU3VwcG9ydGVkICk7XG5zdXBwb3J0LmFqYXggPSB4aHJTdXBwb3J0ZWQgPSAhIXhoclN1cHBvcnRlZDtcblxualF1ZXJ5LmFqYXhUcmFuc3BvcnQoIGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXHR2YXIgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s7XG5cblx0Ly8gQ3Jvc3MgZG9tYWluIG9ubHkgYWxsb3dlZCBpZiBzdXBwb3J0ZWQgdGhyb3VnaCBYTUxIdHRwUmVxdWVzdFxuXHRpZiAoIHN1cHBvcnQuY29ycyB8fCB4aHJTdXBwb3J0ZWQgJiYgIW9wdGlvbnMuY3Jvc3NEb21haW4gKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlbmQ6IGZ1bmN0aW9uKCBoZWFkZXJzLCBjb21wbGV0ZSApIHtcblx0XHRcdFx0dmFyIGksXG5cdFx0XHRcdFx0eGhyID0gb3B0aW9ucy54aHIoKTtcblxuXHRcdFx0XHR4aHIub3Blbihcblx0XHRcdFx0XHRvcHRpb25zLnR5cGUsXG5cdFx0XHRcdFx0b3B0aW9ucy51cmwsXG5cdFx0XHRcdFx0b3B0aW9ucy5hc3luYyxcblx0XHRcdFx0XHRvcHRpb25zLnVzZXJuYW1lLFxuXHRcdFx0XHRcdG9wdGlvbnMucGFzc3dvcmRcblx0XHRcdFx0KTtcblxuXHRcdFx0XHQvLyBBcHBseSBjdXN0b20gZmllbGRzIGlmIHByb3ZpZGVkXG5cdFx0XHRcdGlmICggb3B0aW9ucy54aHJGaWVsZHMgKSB7XG5cdFx0XHRcdFx0Zm9yICggaSBpbiBvcHRpb25zLnhockZpZWxkcyApIHtcblx0XHRcdFx0XHRcdHhoclsgaSBdID0gb3B0aW9ucy54aHJGaWVsZHNbIGkgXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBPdmVycmlkZSBtaW1lIHR5cGUgaWYgbmVlZGVkXG5cdFx0XHRcdGlmICggb3B0aW9ucy5taW1lVHlwZSAmJiB4aHIub3ZlcnJpZGVNaW1lVHlwZSApIHtcblx0XHRcdFx0XHR4aHIub3ZlcnJpZGVNaW1lVHlwZSggb3B0aW9ucy5taW1lVHlwZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gWC1SZXF1ZXN0ZWQtV2l0aCBoZWFkZXJcblx0XHRcdFx0Ly8gRm9yIGNyb3NzLWRvbWFpbiByZXF1ZXN0cywgc2VlaW5nIGFzIGNvbmRpdGlvbnMgZm9yIGEgcHJlZmxpZ2h0IGFyZVxuXHRcdFx0XHQvLyBha2luIHRvIGEgamlnc2F3IHB1enpsZSwgd2Ugc2ltcGx5IG5ldmVyIHNldCBpdCB0byBiZSBzdXJlLlxuXHRcdFx0XHQvLyAoaXQgY2FuIGFsd2F5cyBiZSBzZXQgb24gYSBwZXItcmVxdWVzdCBiYXNpcyBvciBldmVuIHVzaW5nIGFqYXhTZXR1cClcblx0XHRcdFx0Ly8gRm9yIHNhbWUtZG9tYWluIHJlcXVlc3RzLCB3b24ndCBjaGFuZ2UgaGVhZGVyIGlmIGFscmVhZHkgcHJvdmlkZWQuXG5cdFx0XHRcdGlmICggIW9wdGlvbnMuY3Jvc3NEb21haW4gJiYgIWhlYWRlcnNbIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiIF0gKSB7XG5cdFx0XHRcdFx0aGVhZGVyc1sgXCJYLVJlcXVlc3RlZC1XaXRoXCIgXSA9IFwiWE1MSHR0cFJlcXVlc3RcIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFNldCBoZWFkZXJzXG5cdFx0XHRcdGZvciAoIGkgaW4gaGVhZGVycyApIHtcblx0XHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlciggaSwgaGVhZGVyc1sgaSBdICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDYWxsYmFja1xuXHRcdFx0XHRjYWxsYmFjayA9IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrID0gZXJyb3JDYWxsYmFjayA9IHhoci5vbmxvYWQgPVxuXHRcdFx0XHRcdFx0XHRcdHhoci5vbmVycm9yID0geGhyLm9uYWJvcnQgPSB4aHIub250aW1lb3V0ID1cblx0XHRcdFx0XHRcdFx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuXG5cdFx0XHRcdFx0XHRcdGlmICggdHlwZSA9PT0gXCJhYm9ydFwiICkge1xuXHRcdFx0XHRcdFx0XHRcdHhoci5hYm9ydCgpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCB0eXBlID09PSBcImVycm9yXCIgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHRcdFx0XHRcdFx0XHRcdC8vIE9uIGEgbWFudWFsIG5hdGl2ZSBhYm9ydCwgSUU5IHRocm93c1xuXHRcdFx0XHRcdFx0XHRcdC8vIGVycm9ycyBvbiBhbnkgcHJvcGVydHkgYWNjZXNzIHRoYXQgaXMgbm90IHJlYWR5U3RhdGVcblx0XHRcdFx0XHRcdFx0XHRpZiAoIHR5cGVvZiB4aHIuc3RhdHVzICE9PSBcIm51bWJlclwiICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcGxldGUoIDAsIFwiZXJyb3JcIiApO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZShcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBGaWxlOiBwcm90b2NvbCBhbHdheXMgeWllbGRzIHN0YXR1cyAwOyBzZWUgdHJhYy04NjA1LCB0cmFjLTE0MjA3XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHhoci5zdGF0dXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHhoci5zdGF0dXNUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZShcblx0XHRcdFx0XHRcdFx0XHRcdHhoclN1Y2Nlc3NTdGF0dXNbIHhoci5zdGF0dXMgXSB8fCB4aHIuc3RhdHVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1c1RleHQsXG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBJRTkgaGFzIG5vIFhIUjIgYnV0IHRocm93cyBvbiBiaW5hcnkgKHRyYWMtMTE0MjYpXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBGb3IgWEhSMiBub24tdGV4dCwgbGV0IHRoZSBjYWxsZXIgaGFuZGxlIGl0IChnaC0yNDk4KVxuXHRcdFx0XHRcdFx0XHRcdFx0KCB4aHIucmVzcG9uc2VUeXBlIHx8IFwidGV4dFwiICkgIT09IFwidGV4dFwiICB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZW9mIHhoci5yZXNwb25zZVRleHQgIT09IFwic3RyaW5nXCIgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGJpbmFyeTogeGhyLnJlc3BvbnNlIH0gOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IHRleHQ6IHhoci5yZXNwb25zZVRleHQgfSxcblx0XHRcdFx0XHRcdFx0XHRcdHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdC8vIExpc3RlbiB0byBldmVudHNcblx0XHRcdFx0eGhyLm9ubG9hZCA9IGNhbGxiYWNrKCk7XG5cdFx0XHRcdGVycm9yQ2FsbGJhY2sgPSB4aHIub25lcnJvciA9IHhoci5vbnRpbWVvdXQgPSBjYWxsYmFjayggXCJlcnJvclwiICk7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgOSBvbmx5XG5cdFx0XHRcdC8vIFVzZSBvbnJlYWR5c3RhdGVjaGFuZ2UgdG8gcmVwbGFjZSBvbmFib3J0XG5cdFx0XHRcdC8vIHRvIGhhbmRsZSB1bmNhdWdodCBhYm9ydHNcblx0XHRcdFx0aWYgKCB4aHIub25hYm9ydCAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdHhoci5vbmFib3J0ID0gZXJyb3JDYWxsYmFjaztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRcdC8vIENoZWNrIHJlYWR5U3RhdGUgYmVmb3JlIHRpbWVvdXQgYXMgaXQgY2hhbmdlc1xuXHRcdFx0XHRcdFx0aWYgKCB4aHIucmVhZHlTdGF0ZSA9PT0gNCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBBbGxvdyBvbmVycm9yIHRvIGJlIGNhbGxlZCBmaXJzdCxcblx0XHRcdFx0XHRcdFx0Ly8gYnV0IHRoYXQgd2lsbCBub3QgaGFuZGxlIGEgbmF0aXZlIGFib3J0XG5cdFx0XHRcdFx0XHRcdC8vIEFsc28sIHNhdmUgZXJyb3JDYWxsYmFjayB0byBhIHZhcmlhYmxlXG5cdFx0XHRcdFx0XHRcdC8vIGFzIHhoci5vbmVycm9yIGNhbm5vdCBiZSBhY2Nlc3NlZFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yQ2FsbGJhY2soKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ3JlYXRlIHRoZSBhYm9ydCBjYWxsYmFja1xuXHRcdFx0XHRjYWxsYmFjayA9IGNhbGxiYWNrKCBcImFib3J0XCIgKTtcblxuXHRcdFx0XHR0cnkge1xuXG5cdFx0XHRcdFx0Ly8gRG8gc2VuZCB0aGUgcmVxdWVzdCAodGhpcyBtYXkgcmFpc2UgYW4gZXhjZXB0aW9uKVxuXHRcdFx0XHRcdHhoci5zZW5kKCBvcHRpb25zLmhhc0NvbnRlbnQgJiYgb3B0aW9ucy5kYXRhIHx8IG51bGwgKTtcblx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cblx0XHRcdFx0XHQvLyB0cmFjLTE0NjgzOiBPbmx5IHJldGhyb3cgaWYgdGhpcyBoYXNuJ3QgYmVlbiBub3RpZmllZCBhcyBhbiBlcnJvciB5ZXRcblx0XHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdGFib3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufSApO1xuXG5cblxuXG4vLyBQcmV2ZW50IGF1dG8tZXhlY3V0aW9uIG9mIHNjcmlwdHMgd2hlbiBubyBleHBsaWNpdCBkYXRhVHlwZSB3YXMgcHJvdmlkZWQgKFNlZSBnaC0yNDMyKVxualF1ZXJ5LmFqYXhQcmVmaWx0ZXIoIGZ1bmN0aW9uKCBzICkge1xuXHRpZiAoIHMuY3Jvc3NEb21haW4gKSB7XG5cdFx0cy5jb250ZW50cy5zY3JpcHQgPSBmYWxzZTtcblx0fVxufSApO1xuXG4vLyBJbnN0YWxsIHNjcmlwdCBkYXRhVHlwZVxualF1ZXJ5LmFqYXhTZXR1cCgge1xuXHRhY2NlcHRzOiB7XG5cdFx0c2NyaXB0OiBcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgXCIgK1xuXHRcdFx0XCJhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIlxuXHR9LFxuXHRjb250ZW50czoge1xuXHRcdHNjcmlwdDogL1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvXG5cdH0sXG5cdGNvbnZlcnRlcnM6IHtcblx0XHRcInRleHQgc2NyaXB0XCI6IGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRcdFx0alF1ZXJ5Lmdsb2JhbEV2YWwoIHRleHQgKTtcblx0XHRcdHJldHVybiB0ZXh0O1xuXHRcdH1cblx0fVxufSApO1xuXG4vLyBIYW5kbGUgY2FjaGUncyBzcGVjaWFsIGNhc2UgYW5kIGNyb3NzRG9tYWluXG5qUXVlcnkuYWpheFByZWZpbHRlciggXCJzY3JpcHRcIiwgZnVuY3Rpb24oIHMgKSB7XG5cdGlmICggcy5jYWNoZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdHMuY2FjaGUgPSBmYWxzZTtcblx0fVxuXHRpZiAoIHMuY3Jvc3NEb21haW4gKSB7XG5cdFx0cy50eXBlID0gXCJHRVRcIjtcblx0fVxufSApO1xuXG4vLyBCaW5kIHNjcmlwdCB0YWcgaGFjayB0cmFuc3BvcnRcbmpRdWVyeS5hamF4VHJhbnNwb3J0KCBcInNjcmlwdFwiLCBmdW5jdGlvbiggcyApIHtcblxuXHQvLyBUaGlzIHRyYW5zcG9ydCBvbmx5IGRlYWxzIHdpdGggY3Jvc3MgZG9tYWluIG9yIGZvcmNlZC1ieS1hdHRycyByZXF1ZXN0c1xuXHRpZiAoIHMuY3Jvc3NEb21haW4gfHwgcy5zY3JpcHRBdHRycyApIHtcblx0XHR2YXIgc2NyaXB0LCBjYWxsYmFjaztcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VuZDogZnVuY3Rpb24oIF8sIGNvbXBsZXRlICkge1xuXHRcdFx0XHRzY3JpcHQgPSBqUXVlcnkoIFwiPHNjcmlwdD5cIiApXG5cdFx0XHRcdFx0LmF0dHIoIHMuc2NyaXB0QXR0cnMgfHwge30gKVxuXHRcdFx0XHRcdC5wcm9wKCB7IGNoYXJzZXQ6IHMuc2NyaXB0Q2hhcnNldCwgc3JjOiBzLnVybCB9IClcblx0XHRcdFx0XHQub24oIFwibG9hZCBlcnJvclwiLCBjYWxsYmFjayA9IGZ1bmN0aW9uKCBldnQgKSB7XG5cdFx0XHRcdFx0XHRzY3JpcHQucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayA9IG51bGw7XG5cdFx0XHRcdFx0XHRpZiAoIGV2dCApIHtcblx0XHRcdFx0XHRcdFx0Y29tcGxldGUoIGV2dC50eXBlID09PSBcImVycm9yXCIgPyA0MDQgOiAyMDAsIGV2dC50eXBlICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdC8vIFVzZSBuYXRpdmUgRE9NIG1hbmlwdWxhdGlvbiB0byBhdm9pZCBvdXIgZG9tTWFuaXAgQUpBWCB0cmlja2VyeVxuXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCBzY3JpcHRbIDAgXSApO1xuXHRcdFx0fSxcblx0XHRcdGFib3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufSApO1xuXG5cblxuXG52YXIgb2xkQ2FsbGJhY2tzID0gW10sXG5cdHJqc29ucCA9IC8oPSlcXD8oPz0mfCQpfFxcP1xcPy87XG5cbi8vIERlZmF1bHQganNvbnAgc2V0dGluZ3NcbmpRdWVyeS5hamF4U2V0dXAoIHtcblx0anNvbnA6IFwiY2FsbGJhY2tcIixcblx0anNvbnBDYWxsYmFjazogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGNhbGxiYWNrID0gb2xkQ2FsbGJhY2tzLnBvcCgpIHx8ICggalF1ZXJ5LmV4cGFuZG8gKyBcIl9cIiArICggbm9uY2UuZ3VpZCsrICkgKTtcblx0XHR0aGlzWyBjYWxsYmFjayBdID0gdHJ1ZTtcblx0XHRyZXR1cm4gY2FsbGJhY2s7XG5cdH1cbn0gKTtcblxuLy8gRGV0ZWN0LCBub3JtYWxpemUgb3B0aW9ucyBhbmQgaW5zdGFsbCBjYWxsYmFja3MgZm9yIGpzb25wIHJlcXVlc3RzXG5qUXVlcnkuYWpheFByZWZpbHRlciggXCJqc29uIGpzb25wXCIsIGZ1bmN0aW9uKCBzLCBvcmlnaW5hbFNldHRpbmdzLCBqcVhIUiApIHtcblxuXHR2YXIgY2FsbGJhY2tOYW1lLCBvdmVyd3JpdHRlbiwgcmVzcG9uc2VDb250YWluZXIsXG5cdFx0anNvblByb3AgPSBzLmpzb25wICE9PSBmYWxzZSAmJiAoIHJqc29ucC50ZXN0KCBzLnVybCApID9cblx0XHRcdFwidXJsXCIgOlxuXHRcdFx0dHlwZW9mIHMuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHQoIHMuY29udGVudFR5cGUgfHwgXCJcIiApXG5cdFx0XHRcdFx0LmluZGV4T2YoIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgKSA9PT0gMCAmJlxuXHRcdFx0XHRyanNvbnAudGVzdCggcy5kYXRhICkgJiYgXCJkYXRhXCJcblx0XHQpO1xuXG5cdC8vIEhhbmRsZSBpZmYgdGhlIGV4cGVjdGVkIGRhdGEgdHlwZSBpcyBcImpzb25wXCIgb3Igd2UgaGF2ZSBhIHBhcmFtZXRlciB0byBzZXRcblx0aWYgKCBqc29uUHJvcCB8fCBzLmRhdGFUeXBlc1sgMCBdID09PSBcImpzb25wXCIgKSB7XG5cblx0XHQvLyBHZXQgY2FsbGJhY2sgbmFtZSwgcmVtZW1iZXJpbmcgcHJlZXhpc3RpbmcgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIGl0XG5cdFx0Y2FsbGJhY2tOYW1lID0gcy5qc29ucENhbGxiYWNrID0gaXNGdW5jdGlvbiggcy5qc29ucENhbGxiYWNrICkgP1xuXHRcdFx0cy5qc29ucENhbGxiYWNrKCkgOlxuXHRcdFx0cy5qc29ucENhbGxiYWNrO1xuXG5cdFx0Ly8gSW5zZXJ0IGNhbGxiYWNrIGludG8gdXJsIG9yIGZvcm0gZGF0YVxuXHRcdGlmICgganNvblByb3AgKSB7XG5cdFx0XHRzWyBqc29uUHJvcCBdID0gc1sganNvblByb3AgXS5yZXBsYWNlKCByanNvbnAsIFwiJDFcIiArIGNhbGxiYWNrTmFtZSApO1xuXHRcdH0gZWxzZSBpZiAoIHMuanNvbnAgIT09IGZhbHNlICkge1xuXHRcdFx0cy51cmwgKz0gKCBycXVlcnkudGVzdCggcy51cmwgKSA/IFwiJlwiIDogXCI/XCIgKSArIHMuanNvbnAgKyBcIj1cIiArIGNhbGxiYWNrTmFtZTtcblx0XHR9XG5cblx0XHQvLyBVc2UgZGF0YSBjb252ZXJ0ZXIgdG8gcmV0cmlldmUganNvbiBhZnRlciBzY3JpcHQgZXhlY3V0aW9uXG5cdFx0cy5jb252ZXJ0ZXJzWyBcInNjcmlwdCBqc29uXCIgXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCAhcmVzcG9uc2VDb250YWluZXIgKSB7XG5cdFx0XHRcdGpRdWVyeS5lcnJvciggY2FsbGJhY2tOYW1lICsgXCIgd2FzIG5vdCBjYWxsZWRcIiApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlQ29udGFpbmVyWyAwIF07XG5cdFx0fTtcblxuXHRcdC8vIEZvcmNlIGpzb24gZGF0YVR5cGVcblx0XHRzLmRhdGFUeXBlc1sgMCBdID0gXCJqc29uXCI7XG5cblx0XHQvLyBJbnN0YWxsIGNhbGxiYWNrXG5cdFx0b3ZlcndyaXR0ZW4gPSB3aW5kb3dbIGNhbGxiYWNrTmFtZSBdO1xuXHRcdHdpbmRvd1sgY2FsbGJhY2tOYW1lIF0gPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlc3BvbnNlQ29udGFpbmVyID0gYXJndW1lbnRzO1xuXHRcdH07XG5cblx0XHQvLyBDbGVhbi11cCBmdW5jdGlvbiAoZmlyZXMgYWZ0ZXIgY29udmVydGVycylcblx0XHRqcVhIUi5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBJZiBwcmV2aW91cyB2YWx1ZSBkaWRuJ3QgZXhpc3QgLSByZW1vdmUgaXRcblx0XHRcdGlmICggb3ZlcndyaXR0ZW4gPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0alF1ZXJ5KCB3aW5kb3cgKS5yZW1vdmVQcm9wKCBjYWxsYmFja05hbWUgKTtcblxuXHRcdFx0Ly8gT3RoZXJ3aXNlIHJlc3RvcmUgcHJlZXhpc3RpbmcgdmFsdWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvd1sgY2FsbGJhY2tOYW1lIF0gPSBvdmVyd3JpdHRlbjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2F2ZSBiYWNrIGFzIGZyZWVcblx0XHRcdGlmICggc1sgY2FsbGJhY2tOYW1lIF0gKSB7XG5cblx0XHRcdFx0Ly8gTWFrZSBzdXJlIHRoYXQgcmUtdXNpbmcgdGhlIG9wdGlvbnMgZG9lc24ndCBzY3JldyB0aGluZ3MgYXJvdW5kXG5cdFx0XHRcdHMuanNvbnBDYWxsYmFjayA9IG9yaWdpbmFsU2V0dGluZ3MuanNvbnBDYWxsYmFjaztcblxuXHRcdFx0XHQvLyBTYXZlIHRoZSBjYWxsYmFjayBuYW1lIGZvciBmdXR1cmUgdXNlXG5cdFx0XHRcdG9sZENhbGxiYWNrcy5wdXNoKCBjYWxsYmFja05hbWUgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2FsbCBpZiBpdCB3YXMgYSBmdW5jdGlvbiBhbmQgd2UgaGF2ZSBhIHJlc3BvbnNlXG5cdFx0XHRpZiAoIHJlc3BvbnNlQ29udGFpbmVyICYmIGlzRnVuY3Rpb24oIG92ZXJ3cml0dGVuICkgKSB7XG5cdFx0XHRcdG92ZXJ3cml0dGVuKCByZXNwb25zZUNvbnRhaW5lclsgMCBdICk7XG5cdFx0XHR9XG5cblx0XHRcdHJlc3BvbnNlQ29udGFpbmVyID0gb3ZlcndyaXR0ZW4gPSB1bmRlZmluZWQ7XG5cdFx0fSApO1xuXG5cdFx0Ly8gRGVsZWdhdGUgdG8gc2NyaXB0XG5cdFx0cmV0dXJuIFwic2NyaXB0XCI7XG5cdH1cbn0gKTtcblxuXG5cblxuLy8gU3VwcG9ydDogU2FmYXJpIDggb25seVxuLy8gSW4gU2FmYXJpIDggZG9jdW1lbnRzIGNyZWF0ZWQgdmlhIGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudFxuLy8gY29sbGFwc2Ugc2libGluZyBmb3JtczogdGhlIHNlY29uZCBvbmUgYmVjb21lcyBhIGNoaWxkIG9mIHRoZSBmaXJzdCBvbmUuXG4vLyBCZWNhdXNlIG9mIHRoYXQsIHRoaXMgc2VjdXJpdHkgbWVhc3VyZSBoYXMgdG8gYmUgZGlzYWJsZWQgaW4gU2FmYXJpIDguXG4vLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM3MzM3XG5zdXBwb3J0LmNyZWF0ZUhUTUxEb2N1bWVudCA9ICggZnVuY3Rpb24oKSB7XG5cdHZhciBib2R5ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCBcIlwiICkuYm9keTtcblx0Ym9keS5pbm5lckhUTUwgPSBcIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCI7XG5cdHJldHVybiBib2R5LmNoaWxkTm9kZXMubGVuZ3RoID09PSAyO1xufSApKCk7XG5cblxuLy8gQXJndW1lbnQgXCJkYXRhXCIgc2hvdWxkIGJlIHN0cmluZyBvZiBodG1sXG4vLyBjb250ZXh0IChvcHRpb25hbCk6IElmIHNwZWNpZmllZCwgdGhlIGZyYWdtZW50IHdpbGwgYmUgY3JlYXRlZCBpbiB0aGlzIGNvbnRleHQsXG4vLyBkZWZhdWx0cyB0byBkb2N1bWVudFxuLy8ga2VlcFNjcmlwdHMgKG9wdGlvbmFsKTogSWYgdHJ1ZSwgd2lsbCBpbmNsdWRlIHNjcmlwdHMgcGFzc2VkIGluIHRoZSBodG1sIHN0cmluZ1xualF1ZXJ5LnBhcnNlSFRNTCA9IGZ1bmN0aW9uKCBkYXRhLCBjb250ZXh0LCBrZWVwU2NyaXB0cyApIHtcblx0aWYgKCB0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblx0aWYgKCB0eXBlb2YgY29udGV4dCA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0a2VlcFNjcmlwdHMgPSBjb250ZXh0O1xuXHRcdGNvbnRleHQgPSBmYWxzZTtcblx0fVxuXG5cdHZhciBiYXNlLCBwYXJzZWQsIHNjcmlwdHM7XG5cblx0aWYgKCAhY29udGV4dCApIHtcblxuXHRcdC8vIFN0b3Agc2NyaXB0cyBvciBpbmxpbmUgZXZlbnQgaGFuZGxlcnMgZnJvbSBiZWluZyBleGVjdXRlZCBpbW1lZGlhdGVseVxuXHRcdC8vIGJ5IHVzaW5nIGRvY3VtZW50LmltcGxlbWVudGF0aW9uXG5cdFx0aWYgKCBzdXBwb3J0LmNyZWF0ZUhUTUxEb2N1bWVudCApIHtcblx0XHRcdGNvbnRleHQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoIFwiXCIgKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSBiYXNlIGhyZWYgZm9yIHRoZSBjcmVhdGVkIGRvY3VtZW50XG5cdFx0XHQvLyBzbyBhbnkgcGFyc2VkIGVsZW1lbnRzIHdpdGggVVJMc1xuXHRcdFx0Ly8gYXJlIGJhc2VkIG9uIHRoZSBkb2N1bWVudCdzIFVSTCAoZ2gtMjk2NSlcblx0XHRcdGJhc2UgPSBjb250ZXh0LmNyZWF0ZUVsZW1lbnQoIFwiYmFzZVwiICk7XG5cdFx0XHRiYXNlLmhyZWYgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuXHRcdFx0Y29udGV4dC5oZWFkLmFwcGVuZENoaWxkKCBiYXNlICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRleHQgPSBkb2N1bWVudDtcblx0XHR9XG5cdH1cblxuXHRwYXJzZWQgPSByc2luZ2xlVGFnLmV4ZWMoIGRhdGEgKTtcblx0c2NyaXB0cyA9ICFrZWVwU2NyaXB0cyAmJiBbXTtcblxuXHQvLyBTaW5nbGUgdGFnXG5cdGlmICggcGFyc2VkICkge1xuXHRcdHJldHVybiBbIGNvbnRleHQuY3JlYXRlRWxlbWVudCggcGFyc2VkWyAxIF0gKSBdO1xuXHR9XG5cblx0cGFyc2VkID0gYnVpbGRGcmFnbWVudCggWyBkYXRhIF0sIGNvbnRleHQsIHNjcmlwdHMgKTtcblxuXHRpZiAoIHNjcmlwdHMgJiYgc2NyaXB0cy5sZW5ndGggKSB7XG5cdFx0alF1ZXJ5KCBzY3JpcHRzICkucmVtb3ZlKCk7XG5cdH1cblxuXHRyZXR1cm4galF1ZXJ5Lm1lcmdlKCBbXSwgcGFyc2VkLmNoaWxkTm9kZXMgKTtcbn07XG5cblxuLyoqXG4gKiBMb2FkIGEgdXJsIGludG8gYSBwYWdlXG4gKi9cbmpRdWVyeS5mbi5sb2FkID0gZnVuY3Rpb24oIHVybCwgcGFyYW1zLCBjYWxsYmFjayApIHtcblx0dmFyIHNlbGVjdG9yLCB0eXBlLCByZXNwb25zZSxcblx0XHRzZWxmID0gdGhpcyxcblx0XHRvZmYgPSB1cmwuaW5kZXhPZiggXCIgXCIgKTtcblxuXHRpZiAoIG9mZiA+IC0xICkge1xuXHRcdHNlbGVjdG9yID0gc3RyaXBBbmRDb2xsYXBzZSggdXJsLnNsaWNlKCBvZmYgKSApO1xuXHRcdHVybCA9IHVybC5zbGljZSggMCwgb2ZmICk7XG5cdH1cblxuXHQvLyBJZiBpdCdzIGEgZnVuY3Rpb25cblx0aWYgKCBpc0Z1bmN0aW9uKCBwYXJhbXMgKSApIHtcblxuXHRcdC8vIFdlIGFzc3VtZSB0aGF0IGl0J3MgdGhlIGNhbGxiYWNrXG5cdFx0Y2FsbGJhY2sgPSBwYXJhbXM7XG5cdFx0cGFyYW1zID0gdW5kZWZpbmVkO1xuXG5cdC8vIE90aGVyd2lzZSwgYnVpbGQgYSBwYXJhbSBzdHJpbmdcblx0fSBlbHNlIGlmICggcGFyYW1zICYmIHR5cGVvZiBwYXJhbXMgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0dHlwZSA9IFwiUE9TVFwiO1xuXHR9XG5cblx0Ly8gSWYgd2UgaGF2ZSBlbGVtZW50cyB0byBtb2RpZnksIG1ha2UgdGhlIHJlcXVlc3Rcblx0aWYgKCBzZWxmLmxlbmd0aCA+IDAgKSB7XG5cdFx0alF1ZXJ5LmFqYXgoIHtcblx0XHRcdHVybDogdXJsLFxuXG5cdFx0XHQvLyBJZiBcInR5cGVcIiB2YXJpYWJsZSBpcyB1bmRlZmluZWQsIHRoZW4gXCJHRVRcIiBtZXRob2Qgd2lsbCBiZSB1c2VkLlxuXHRcdFx0Ly8gTWFrZSB2YWx1ZSBvZiB0aGlzIGZpZWxkIGV4cGxpY2l0IHNpbmNlXG5cdFx0XHQvLyB1c2VyIGNhbiBvdmVycmlkZSBpdCB0aHJvdWdoIGFqYXhTZXR1cCBtZXRob2Rcblx0XHRcdHR5cGU6IHR5cGUgfHwgXCJHRVRcIixcblx0XHRcdGRhdGFUeXBlOiBcImh0bWxcIixcblx0XHRcdGRhdGE6IHBhcmFtc1xuXHRcdH0gKS5kb25lKCBmdW5jdGlvbiggcmVzcG9uc2VUZXh0ICkge1xuXG5cdFx0XHQvLyBTYXZlIHJlc3BvbnNlIGZvciB1c2UgaW4gY29tcGxldGUgY2FsbGJhY2tcblx0XHRcdHJlc3BvbnNlID0gYXJndW1lbnRzO1xuXG5cdFx0XHRzZWxmLmh0bWwoIHNlbGVjdG9yID9cblxuXHRcdFx0XHQvLyBJZiBhIHNlbGVjdG9yIHdhcyBzcGVjaWZpZWQsIGxvY2F0ZSB0aGUgcmlnaHQgZWxlbWVudHMgaW4gYSBkdW1teSBkaXZcblx0XHRcdFx0Ly8gRXhjbHVkZSBzY3JpcHRzIHRvIGF2b2lkIElFICdQZXJtaXNzaW9uIERlbmllZCcgZXJyb3JzXG5cdFx0XHRcdGpRdWVyeSggXCI8ZGl2PlwiICkuYXBwZW5kKCBqUXVlcnkucGFyc2VIVE1MKCByZXNwb25zZVRleHQgKSApLmZpbmQoIHNlbGVjdG9yICkgOlxuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSB1c2UgdGhlIGZ1bGwgcmVzdWx0XG5cdFx0XHRcdHJlc3BvbnNlVGV4dCApO1xuXG5cdFx0Ly8gSWYgdGhlIHJlcXVlc3Qgc3VjY2VlZHMsIHRoaXMgZnVuY3Rpb24gZ2V0cyBcImRhdGFcIiwgXCJzdGF0dXNcIiwgXCJqcVhIUlwiXG5cdFx0Ly8gYnV0IHRoZXkgYXJlIGlnbm9yZWQgYmVjYXVzZSByZXNwb25zZSB3YXMgc2V0IGFib3ZlLlxuXHRcdC8vIElmIGl0IGZhaWxzLCB0aGlzIGZ1bmN0aW9uIGdldHMgXCJqcVhIUlwiLCBcInN0YXR1c1wiLCBcImVycm9yXCJcblx0XHR9ICkuYWx3YXlzKCBjYWxsYmFjayAmJiBmdW5jdGlvbigganFYSFIsIHN0YXR1cyApIHtcblx0XHRcdHNlbGYuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNhbGxiYWNrLmFwcGx5KCB0aGlzLCByZXNwb25zZSB8fCBbIGpxWEhSLnJlc3BvbnNlVGV4dCwgc3RhdHVzLCBqcVhIUiBdICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5cblxuXG5qUXVlcnkuZXhwci5wc2V1ZG9zLmFuaW1hdGVkID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdHJldHVybiBqUXVlcnkuZ3JlcCggalF1ZXJ5LnRpbWVycywgZnVuY3Rpb24oIGZuICkge1xuXHRcdHJldHVybiBlbGVtID09PSBmbi5lbGVtO1xuXHR9ICkubGVuZ3RoO1xufTtcblxuXG5cblxualF1ZXJ5Lm9mZnNldCA9IHtcblx0c2V0T2Zmc2V0OiBmdW5jdGlvbiggZWxlbSwgb3B0aW9ucywgaSApIHtcblx0XHR2YXIgY3VyUG9zaXRpb24sIGN1ckxlZnQsIGN1ckNTU1RvcCwgY3VyVG9wLCBjdXJPZmZzZXQsIGN1ckNTU0xlZnQsIGNhbGN1bGF0ZVBvc2l0aW9uLFxuXHRcdFx0cG9zaXRpb24gPSBqUXVlcnkuY3NzKCBlbGVtLCBcInBvc2l0aW9uXCIgKSxcblx0XHRcdGN1ckVsZW0gPSBqUXVlcnkoIGVsZW0gKSxcblx0XHRcdHByb3BzID0ge307XG5cblx0XHQvLyBTZXQgcG9zaXRpb24gZmlyc3QsIGluLWNhc2UgdG9wL2xlZnQgYXJlIHNldCBldmVuIG9uIHN0YXRpYyBlbGVtXG5cdFx0aWYgKCBwb3NpdGlvbiA9PT0gXCJzdGF0aWNcIiApIHtcblx0XHRcdGVsZW0uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cdFx0fVxuXG5cdFx0Y3VyT2Zmc2V0ID0gY3VyRWxlbS5vZmZzZXQoKTtcblx0XHRjdXJDU1NUb3AgPSBqUXVlcnkuY3NzKCBlbGVtLCBcInRvcFwiICk7XG5cdFx0Y3VyQ1NTTGVmdCA9IGpRdWVyeS5jc3MoIGVsZW0sIFwibGVmdFwiICk7XG5cdFx0Y2FsY3VsYXRlUG9zaXRpb24gPSAoIHBvc2l0aW9uID09PSBcImFic29sdXRlXCIgfHwgcG9zaXRpb24gPT09IFwiZml4ZWRcIiApICYmXG5cdFx0XHQoIGN1ckNTU1RvcCArIGN1ckNTU0xlZnQgKS5pbmRleE9mKCBcImF1dG9cIiApID4gLTE7XG5cblx0XHQvLyBOZWVkIHRvIGJlIGFibGUgdG8gY2FsY3VsYXRlIHBvc2l0aW9uIGlmIGVpdGhlclxuXHRcdC8vIHRvcCBvciBsZWZ0IGlzIGF1dG8gYW5kIHBvc2l0aW9uIGlzIGVpdGhlciBhYnNvbHV0ZSBvciBmaXhlZFxuXHRcdGlmICggY2FsY3VsYXRlUG9zaXRpb24gKSB7XG5cdFx0XHRjdXJQb3NpdGlvbiA9IGN1ckVsZW0ucG9zaXRpb24oKTtcblx0XHRcdGN1clRvcCA9IGN1clBvc2l0aW9uLnRvcDtcblx0XHRcdGN1ckxlZnQgPSBjdXJQb3NpdGlvbi5sZWZ0O1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1clRvcCA9IHBhcnNlRmxvYXQoIGN1ckNTU1RvcCApIHx8IDA7XG5cdFx0XHRjdXJMZWZ0ID0gcGFyc2VGbG9hdCggY3VyQ1NTTGVmdCApIHx8IDA7XG5cdFx0fVxuXG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCBvcHRpb25zICkgKSB7XG5cblx0XHRcdC8vIFVzZSBqUXVlcnkuZXh0ZW5kIGhlcmUgdG8gYWxsb3cgbW9kaWZpY2F0aW9uIG9mIGNvb3JkaW5hdGVzIGFyZ3VtZW50IChnaC0xODQ4KVxuXHRcdFx0b3B0aW9ucyA9IG9wdGlvbnMuY2FsbCggZWxlbSwgaSwgalF1ZXJ5LmV4dGVuZCgge30sIGN1ck9mZnNldCApICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBvcHRpb25zLnRvcCAhPSBudWxsICkge1xuXHRcdFx0cHJvcHMudG9wID0gKCBvcHRpb25zLnRvcCAtIGN1ck9mZnNldC50b3AgKSArIGN1clRvcDtcblx0XHR9XG5cdFx0aWYgKCBvcHRpb25zLmxlZnQgIT0gbnVsbCApIHtcblx0XHRcdHByb3BzLmxlZnQgPSAoIG9wdGlvbnMubGVmdCAtIGN1ck9mZnNldC5sZWZ0ICkgKyBjdXJMZWZ0O1xuXHRcdH1cblxuXHRcdGlmICggXCJ1c2luZ1wiIGluIG9wdGlvbnMgKSB7XG5cdFx0XHRvcHRpb25zLnVzaW5nLmNhbGwoIGVsZW0sIHByb3BzICk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VyRWxlbS5jc3MoIHByb3BzICk7XG5cdFx0fVxuXHR9XG59O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cblx0Ly8gb2Zmc2V0KCkgcmVsYXRlcyBhbiBlbGVtZW50J3MgYm9yZGVyIGJveCB0byB0aGUgZG9jdW1lbnQgb3JpZ2luXG5cdG9mZnNldDogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cblx0XHQvLyBQcmVzZXJ2ZSBjaGFpbmluZyBmb3Igc2V0dGVyXG5cdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnMgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdHRoaXMgOlxuXHRcdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRcdGpRdWVyeS5vZmZzZXQuc2V0T2Zmc2V0KCB0aGlzLCBvcHRpb25zLCBpICk7XG5cdFx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHR2YXIgcmVjdCwgd2luLFxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXTtcblxuXHRcdGlmICggIWVsZW0gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHplcm9zIGZvciBkaXNjb25uZWN0ZWQgYW5kIGhpZGRlbiAoZGlzcGxheTogbm9uZSkgZWxlbWVudHMgKGdoLTIzMTApXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdFx0Ly8gUnVubmluZyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gYVxuXHRcdC8vIGRpc2Nvbm5lY3RlZCBub2RlIGluIElFIHRocm93cyBhbiBlcnJvclxuXHRcdGlmICggIWVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAgfTtcblx0XHR9XG5cblx0XHQvLyBHZXQgZG9jdW1lbnQtcmVsYXRpdmUgcG9zaXRpb24gYnkgYWRkaW5nIHZpZXdwb3J0IHNjcm9sbCB0byB2aWV3cG9ydC1yZWxhdGl2ZSBnQkNSXG5cdFx0cmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0d2luID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0LFxuXHRcdFx0bGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0XG5cdFx0fTtcblx0fSxcblxuXHQvLyBwb3NpdGlvbigpIHJlbGF0ZXMgYW4gZWxlbWVudCdzIG1hcmdpbiBib3ggdG8gaXRzIG9mZnNldCBwYXJlbnQncyBwYWRkaW5nIGJveFxuXHQvLyBUaGlzIGNvcnJlc3BvbmRzIHRvIHRoZSBiZWhhdmlvciBvZiBDU1MgYWJzb2x1dGUgcG9zaXRpb25pbmdcblx0cG9zaXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggIXRoaXNbIDAgXSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgb2Zmc2V0UGFyZW50LCBvZmZzZXQsIGRvYyxcblx0XHRcdGVsZW0gPSB0aGlzWyAwIF0sXG5cdFx0XHRwYXJlbnRPZmZzZXQgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuXG5cdFx0Ly8gcG9zaXRpb246Zml4ZWQgZWxlbWVudHMgYXJlIG9mZnNldCBmcm9tIHRoZSB2aWV3cG9ydCwgd2hpY2ggaXRzZWxmIGFsd2F5cyBoYXMgemVybyBvZmZzZXRcblx0XHRpZiAoIGpRdWVyeS5jc3MoIGVsZW0sIFwicG9zaXRpb25cIiApID09PSBcImZpeGVkXCIgKSB7XG5cblx0XHRcdC8vIEFzc3VtZSBwb3NpdGlvbjpmaXhlZCBpbXBsaWVzIGF2YWlsYWJpbGl0eSBvZiBnZXRCb3VuZGluZ0NsaWVudFJlY3Rcblx0XHRcdG9mZnNldCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0b2Zmc2V0ID0gdGhpcy5vZmZzZXQoKTtcblxuXHRcdFx0Ly8gQWNjb3VudCBmb3IgdGhlICpyZWFsKiBvZmZzZXQgcGFyZW50LCB3aGljaCBjYW4gYmUgdGhlIGRvY3VtZW50IG9yIGl0cyByb290IGVsZW1lbnRcblx0XHRcdC8vIHdoZW4gYSBzdGF0aWNhbGx5IHBvc2l0aW9uZWQgZWxlbWVudCBpcyBpZGVudGlmaWVkXG5cdFx0XHRkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG5cdFx0XHRvZmZzZXRQYXJlbnQgPSBlbGVtLm9mZnNldFBhcmVudCB8fCBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXHRcdFx0d2hpbGUgKCBvZmZzZXRQYXJlbnQgJiZcblx0XHRcdFx0KCBvZmZzZXRQYXJlbnQgPT09IGRvYy5ib2R5IHx8IG9mZnNldFBhcmVudCA9PT0gZG9jLmRvY3VtZW50RWxlbWVudCApICYmXG5cdFx0XHRcdGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudCwgXCJwb3NpdGlvblwiICkgPT09IFwic3RhdGljXCIgKSB7XG5cblx0XHRcdFx0b2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50LnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQgIT09IGVsZW0gJiYgb2Zmc2V0UGFyZW50Lm5vZGVUeXBlID09PSAxICkge1xuXG5cdFx0XHRcdC8vIEluY29ycG9yYXRlIGJvcmRlcnMgaW50byBpdHMgb2Zmc2V0LCBzaW5jZSB0aGV5IGFyZSBvdXRzaWRlIGl0cyBjb250ZW50IG9yaWdpblxuXHRcdFx0XHRwYXJlbnRPZmZzZXQgPSBqUXVlcnkoIG9mZnNldFBhcmVudCApLm9mZnNldCgpO1xuXHRcdFx0XHRwYXJlbnRPZmZzZXQudG9wICs9IGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudCwgXCJib3JkZXJUb3BXaWR0aFwiLCB0cnVlICk7XG5cdFx0XHRcdHBhcmVudE9mZnNldC5sZWZ0ICs9IGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudCwgXCJib3JkZXJMZWZ0V2lkdGhcIiwgdHJ1ZSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFN1YnRyYWN0IHBhcmVudCBvZmZzZXRzIGFuZCBlbGVtZW50IG1hcmdpbnNcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9wOiBvZmZzZXQudG9wIC0gcGFyZW50T2Zmc2V0LnRvcCAtIGpRdWVyeS5jc3MoIGVsZW0sIFwibWFyZ2luVG9wXCIsIHRydWUgKSxcblx0XHRcdGxlZnQ6IG9mZnNldC5sZWZ0IC0gcGFyZW50T2Zmc2V0LmxlZnQgLSBqUXVlcnkuY3NzKCBlbGVtLCBcIm1hcmdpbkxlZnRcIiwgdHJ1ZSApXG5cdFx0fTtcblx0fSxcblxuXHQvLyBUaGlzIG1ldGhvZCB3aWxsIHJldHVybiBkb2N1bWVudEVsZW1lbnQgaW4gdGhlIGZvbGxvd2luZyBjYXNlczpcblx0Ly8gMSkgRm9yIHRoZSBlbGVtZW50IGluc2lkZSB0aGUgaWZyYW1lIHdpdGhvdXQgb2Zmc2V0UGFyZW50LCB0aGlzIG1ldGhvZCB3aWxsIHJldHVyblxuXHQvLyAgICBkb2N1bWVudEVsZW1lbnQgb2YgdGhlIHBhcmVudCB3aW5kb3dcblx0Ly8gMikgRm9yIHRoZSBoaWRkZW4gb3IgZGV0YWNoZWQgZWxlbWVudFxuXHQvLyAzKSBGb3IgYm9keSBvciBodG1sIGVsZW1lbnQsIGkuZS4gaW4gY2FzZSBvZiB0aGUgaHRtbCBub2RlIC0gaXQgd2lsbCByZXR1cm4gaXRzZWxmXG5cdC8vXG5cdC8vIGJ1dCB0aG9zZSBleGNlcHRpb25zIHdlcmUgbmV2ZXIgcHJlc2VudGVkIGFzIGEgcmVhbCBsaWZlIHVzZS1jYXNlc1xuXHQvLyBhbmQgbWlnaHQgYmUgY29uc2lkZXJlZCBhcyBtb3JlIHByZWZlcmFibGUgcmVzdWx0cy5cblx0Ly9cblx0Ly8gVGhpcyBsb2dpYywgaG93ZXZlciwgaXMgbm90IGd1YXJhbnRlZWQgYW5kIGNhbiBjaGFuZ2UgYXQgYW55IHBvaW50IGluIHRoZSBmdXR1cmVcblx0b2Zmc2V0UGFyZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG9mZnNldFBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50O1xuXG5cdFx0XHR3aGlsZSAoIG9mZnNldFBhcmVudCAmJiBqUXVlcnkuY3NzKCBvZmZzZXRQYXJlbnQsIFwicG9zaXRpb25cIiApID09PSBcInN0YXRpY1wiICkge1xuXHRcdFx0XHRvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGRvY3VtZW50RWxlbWVudDtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxuLy8gQ3JlYXRlIHNjcm9sbExlZnQgYW5kIHNjcm9sbFRvcCBtZXRob2RzXG5qUXVlcnkuZWFjaCggeyBzY3JvbGxMZWZ0OiBcInBhZ2VYT2Zmc2V0XCIsIHNjcm9sbFRvcDogXCJwYWdlWU9mZnNldFwiIH0sIGZ1bmN0aW9uKCBtZXRob2QsIHByb3AgKSB7XG5cdHZhciB0b3AgPSBcInBhZ2VZT2Zmc2V0XCIgPT09IHByb3A7XG5cblx0alF1ZXJ5LmZuWyBtZXRob2QgXSA9IGZ1bmN0aW9uKCB2YWwgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIGVsZW0sIG1ldGhvZCwgdmFsICkge1xuXG5cdFx0XHQvLyBDb2FsZXNjZSBkb2N1bWVudHMgYW5kIHdpbmRvd3Ncblx0XHRcdHZhciB3aW47XG5cdFx0XHRpZiAoIGlzV2luZG93KCBlbGVtICkgKSB7XG5cdFx0XHRcdHdpbiA9IGVsZW07XG5cdFx0XHR9IGVsc2UgaWYgKCBlbGVtLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHR3aW4gPSBlbGVtLmRlZmF1bHRWaWV3O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHZhbCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRyZXR1cm4gd2luID8gd2luWyBwcm9wIF0gOiBlbGVtWyBtZXRob2QgXTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB3aW4gKSB7XG5cdFx0XHRcdHdpbi5zY3JvbGxUbyhcblx0XHRcdFx0XHQhdG9wID8gdmFsIDogd2luLnBhZ2VYT2Zmc2V0LFxuXHRcdFx0XHRcdHRvcCA/IHZhbCA6IHdpbi5wYWdlWU9mZnNldFxuXHRcdFx0XHQpO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtWyBtZXRob2QgXSA9IHZhbDtcblx0XHRcdH1cblx0XHR9LCBtZXRob2QsIHZhbCwgYXJndW1lbnRzLmxlbmd0aCApO1xuXHR9O1xufSApO1xuXG4vLyBTdXBwb3J0OiBTYWZhcmkgPD03IC0gOS4xLCBDaHJvbWUgPD0zNyAtIDQ5XG4vLyBBZGQgdGhlIHRvcC9sZWZ0IGNzc0hvb2tzIHVzaW5nIGpRdWVyeS5mbi5wb3NpdGlvblxuLy8gV2Via2l0IGJ1ZzogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MDg0XG4vLyBCbGluayBidWc6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTU4OTM0N1xuLy8gZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIHBlcmNlbnQgd2hlbiBzcGVjaWZpZWQgZm9yIHRvcC9sZWZ0L2JvdHRvbS9yaWdodDtcbi8vIHJhdGhlciB0aGFuIG1ha2UgdGhlIGNzcyBtb2R1bGUgZGVwZW5kIG9uIHRoZSBvZmZzZXQgbW9kdWxlLCBqdXN0IGNoZWNrIGZvciBpdCBoZXJlXG5qUXVlcnkuZWFjaCggWyBcInRvcFwiLCBcImxlZnRcIiBdLCBmdW5jdGlvbiggX2ksIHByb3AgKSB7XG5cdGpRdWVyeS5jc3NIb29rc1sgcHJvcCBdID0gYWRkR2V0SG9va0lmKCBzdXBwb3J0LnBpeGVsUG9zaXRpb24sXG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xuXHRcdFx0aWYgKCBjb21wdXRlZCApIHtcblx0XHRcdFx0Y29tcHV0ZWQgPSBjdXJDU1MoIGVsZW0sIHByb3AgKTtcblxuXHRcdFx0XHQvLyBJZiBjdXJDU1MgcmV0dXJucyBwZXJjZW50YWdlLCBmYWxsYmFjayB0byBvZmZzZXRcblx0XHRcdFx0cmV0dXJuIHJudW1ub25weC50ZXN0KCBjb21wdXRlZCApID9cblx0XHRcdFx0XHRqUXVlcnkoIGVsZW0gKS5wb3NpdGlvbigpWyBwcm9wIF0gKyBcInB4XCIgOlxuXHRcdFx0XHRcdGNvbXB1dGVkO1xuXHRcdFx0fVxuXHRcdH1cblx0KTtcbn0gKTtcblxuXG4vLyBDcmVhdGUgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGgsIGhlaWdodCwgd2lkdGgsIG91dGVySGVpZ2h0IGFuZCBvdXRlcldpZHRoIG1ldGhvZHNcbmpRdWVyeS5lYWNoKCB7IEhlaWdodDogXCJoZWlnaHRcIiwgV2lkdGg6IFwid2lkdGhcIiB9LCBmdW5jdGlvbiggbmFtZSwgdHlwZSApIHtcblx0alF1ZXJ5LmVhY2goIHtcblx0XHRwYWRkaW5nOiBcImlubmVyXCIgKyBuYW1lLFxuXHRcdGNvbnRlbnQ6IHR5cGUsXG5cdFx0XCJcIjogXCJvdXRlclwiICsgbmFtZVxuXHR9LCBmdW5jdGlvbiggZGVmYXVsdEV4dHJhLCBmdW5jTmFtZSApIHtcblxuXHRcdC8vIE1hcmdpbiBpcyBvbmx5IGZvciBvdXRlckhlaWdodCwgb3V0ZXJXaWR0aFxuXHRcdGpRdWVyeS5mblsgZnVuY05hbWUgXSA9IGZ1bmN0aW9uKCBtYXJnaW4sIHZhbHVlICkge1xuXHRcdFx0dmFyIGNoYWluYWJsZSA9IGFyZ3VtZW50cy5sZW5ndGggJiYgKCBkZWZhdWx0RXh0cmEgfHwgdHlwZW9mIG1hcmdpbiAhPT0gXCJib29sZWFuXCIgKSxcblx0XHRcdFx0ZXh0cmEgPSBkZWZhdWx0RXh0cmEgfHwgKCBtYXJnaW4gPT09IHRydWUgfHwgdmFsdWUgPT09IHRydWUgPyBcIm1hcmdpblwiIDogXCJib3JkZXJcIiApO1xuXG5cdFx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgdHlwZSwgdmFsdWUgKSB7XG5cdFx0XHRcdHZhciBkb2M7XG5cblx0XHRcdFx0aWYgKCBpc1dpbmRvdyggZWxlbSApICkge1xuXG5cdFx0XHRcdFx0Ly8gJCggd2luZG93ICkub3V0ZXJXaWR0aC9IZWlnaHQgcmV0dXJuIHcvaCBpbmNsdWRpbmcgc2Nyb2xsYmFycyAoZ2gtMTcyOSlcblx0XHRcdFx0XHRyZXR1cm4gZnVuY05hbWUuaW5kZXhPZiggXCJvdXRlclwiICkgPT09IDAgP1xuXHRcdFx0XHRcdFx0ZWxlbVsgXCJpbm5lclwiICsgbmFtZSBdIDpcblx0XHRcdFx0XHRcdGVsZW0uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50WyBcImNsaWVudFwiICsgbmFtZSBdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gR2V0IGRvY3VtZW50IHdpZHRoIG9yIGhlaWdodFxuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdFx0ZG9jID0gZWxlbS5kb2N1bWVudEVsZW1lbnQ7XG5cblx0XHRcdFx0XHQvLyBFaXRoZXIgc2Nyb2xsW1dpZHRoL0hlaWdodF0gb3Igb2Zmc2V0W1dpZHRoL0hlaWdodF0gb3IgY2xpZW50W1dpZHRoL0hlaWdodF0sXG5cdFx0XHRcdFx0Ly8gd2hpY2hldmVyIGlzIGdyZWF0ZXN0XG5cdFx0XHRcdFx0cmV0dXJuIE1hdGgubWF4KFxuXHRcdFx0XHRcdFx0ZWxlbS5ib2R5WyBcInNjcm9sbFwiICsgbmFtZSBdLCBkb2NbIFwic2Nyb2xsXCIgKyBuYW1lIF0sXG5cdFx0XHRcdFx0XHRlbGVtLmJvZHlbIFwib2Zmc2V0XCIgKyBuYW1lIF0sIGRvY1sgXCJvZmZzZXRcIiArIG5hbWUgXSxcblx0XHRcdFx0XHRcdGRvY1sgXCJjbGllbnRcIiArIG5hbWUgXVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/XG5cblx0XHRcdFx0XHQvLyBHZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50LCByZXF1ZXN0aW5nIGJ1dCBub3QgZm9yY2luZyBwYXJzZUZsb2F0XG5cdFx0XHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgdHlwZSwgZXh0cmEgKSA6XG5cblx0XHRcdFx0XHQvLyBTZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50XG5cdFx0XHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCB0eXBlLCB2YWx1ZSwgZXh0cmEgKTtcblx0XHRcdH0sIHR5cGUsIGNoYWluYWJsZSA/IG1hcmdpbiA6IHVuZGVmaW5lZCwgY2hhaW5hYmxlICk7XG5cdFx0fTtcblx0fSApO1xufSApO1xuXG5cbmpRdWVyeS5lYWNoKCBbXG5cdFwiYWpheFN0YXJ0XCIsXG5cdFwiYWpheFN0b3BcIixcblx0XCJhamF4Q29tcGxldGVcIixcblx0XCJhamF4RXJyb3JcIixcblx0XCJhamF4U3VjY2Vzc1wiLFxuXHRcImFqYXhTZW5kXCJcbl0sIGZ1bmN0aW9uKCBfaSwgdHlwZSApIHtcblx0alF1ZXJ5LmZuWyB0eXBlIF0gPSBmdW5jdGlvbiggZm4gKSB7XG5cdFx0cmV0dXJuIHRoaXMub24oIHR5cGUsIGZuICk7XG5cdH07XG59ICk7XG5cblxuXG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblxuXHRiaW5kOiBmdW5jdGlvbiggdHlwZXMsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlcywgbnVsbCwgZGF0YSwgZm4gKTtcblx0fSxcblx0dW5iaW5kOiBmdW5jdGlvbiggdHlwZXMsIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9mZiggdHlwZXMsIG51bGwsIGZuICk7XG5cdH0sXG5cblx0ZGVsZWdhdGU6IGZ1bmN0aW9uKCBzZWxlY3RvciwgdHlwZXMsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICk7XG5cdH0sXG5cdHVuZGVsZWdhdGU6IGZ1bmN0aW9uKCBzZWxlY3RvciwgdHlwZXMsIGZuICkge1xuXG5cdFx0Ly8gKCBuYW1lc3BhY2UgKSBvciAoIHNlbGVjdG9yLCB0eXBlcyBbLCBmbl0gKVxuXHRcdHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID9cblx0XHRcdHRoaXMub2ZmKCBzZWxlY3RvciwgXCIqKlwiICkgOlxuXHRcdFx0dGhpcy5vZmYoIHR5cGVzLCBzZWxlY3RvciB8fCBcIioqXCIsIGZuICk7XG5cdH0sXG5cblx0aG92ZXI6IGZ1bmN0aW9uKCBmbk92ZXIsIGZuT3V0ICkge1xuXHRcdHJldHVybiB0aGlzXG5cdFx0XHQub24oIFwibW91c2VlbnRlclwiLCBmbk92ZXIgKVxuXHRcdFx0Lm9uKCBcIm1vdXNlbGVhdmVcIiwgZm5PdXQgfHwgZm5PdmVyICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmVhY2goXG5cdCggXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgcmVzaXplIHNjcm9sbCBjbGljayBkYmxjbGljayBcIiArXG5cdFwibW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgXCIgK1xuXHRcImNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIiApLnNwbGl0KCBcIiBcIiApLFxuXHRmdW5jdGlvbiggX2ksIG5hbWUgKSB7XG5cblx0XHQvLyBIYW5kbGUgZXZlbnQgYmluZGluZ1xuXHRcdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIGRhdGEsIGZuICkge1xuXHRcdFx0cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAwID9cblx0XHRcdFx0dGhpcy5vbiggbmFtZSwgbnVsbCwgZGF0YSwgZm4gKSA6XG5cdFx0XHRcdHRoaXMudHJpZ2dlciggbmFtZSApO1xuXHRcdH07XG5cdH1cbik7XG5cblxuXG5cbi8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seVxuLy8gTWFrZSBzdXJlIHdlIHRyaW0gQk9NIGFuZCBOQlNQXG4vLyBSZXF1aXJlIHRoYXQgdGhlIFwid2hpdGVzcGFjZSBydW5cIiBzdGFydHMgZnJvbSBhIG5vbi13aGl0ZXNwYWNlXG4vLyB0byBhdm9pZCBPKE5eMikgYmVoYXZpb3Igd2hlbiB0aGUgZW5naW5lIHdvdWxkIHRyeSBtYXRjaGluZyBcIlxccyskXCIgYXQgZWFjaCBzcGFjZSBwb3NpdGlvbi5cbnZhciBydHJpbSA9IC9eW1xcc1xcdUZFRkZcXHhBMF0rfChbXlxcc1xcdUZFRkZcXHhBMF0pW1xcc1xcdUZFRkZcXHhBMF0rJC9nO1xuXG4vLyBCaW5kIGEgZnVuY3Rpb24gdG8gYSBjb250ZXh0LCBvcHRpb25hbGx5IHBhcnRpYWxseSBhcHBseWluZyBhbnlcbi8vIGFyZ3VtZW50cy5cbi8vIGpRdWVyeS5wcm94eSBpcyBkZXByZWNhdGVkIHRvIHByb21vdGUgc3RhbmRhcmRzIChzcGVjaWZpY2FsbHkgRnVuY3Rpb24jYmluZClcbi8vIEhvd2V2ZXIsIGl0IGlzIG5vdCBzbGF0ZWQgZm9yIHJlbW92YWwgYW55IHRpbWUgc29vblxualF1ZXJ5LnByb3h5ID0gZnVuY3Rpb24oIGZuLCBjb250ZXh0ICkge1xuXHR2YXIgdG1wLCBhcmdzLCBwcm94eTtcblxuXHRpZiAoIHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiICkge1xuXHRcdHRtcCA9IGZuWyBjb250ZXh0IF07XG5cdFx0Y29udGV4dCA9IGZuO1xuXHRcdGZuID0gdG1wO1xuXHR9XG5cblx0Ly8gUXVpY2sgY2hlY2sgdG8gZGV0ZXJtaW5lIGlmIHRhcmdldCBpcyBjYWxsYWJsZSwgaW4gdGhlIHNwZWNcblx0Ly8gdGhpcyB0aHJvd3MgYSBUeXBlRXJyb3IsIGJ1dCB3ZSB3aWxsIGp1c3QgcmV0dXJuIHVuZGVmaW5lZC5cblx0aWYgKCAhaXNGdW5jdGlvbiggZm4gKSApIHtcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG5cblx0Ly8gU2ltdWxhdGVkIGJpbmRcblx0YXJncyA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMiApO1xuXHRwcm94eSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBmbi5hcHBseSggY29udGV4dCB8fCB0aGlzLCBhcmdzLmNvbmNhdCggc2xpY2UuY2FsbCggYXJndW1lbnRzICkgKSApO1xuXHR9O1xuXG5cdC8vIFNldCB0aGUgZ3VpZCBvZiB1bmlxdWUgaGFuZGxlciB0byB0aGUgc2FtZSBvZiBvcmlnaW5hbCBoYW5kbGVyLCBzbyBpdCBjYW4gYmUgcmVtb3ZlZFxuXHRwcm94eS5ndWlkID0gZm4uZ3VpZCA9IGZuLmd1aWQgfHwgalF1ZXJ5Lmd1aWQrKztcblxuXHRyZXR1cm4gcHJveHk7XG59O1xuXG5qUXVlcnkuaG9sZFJlYWR5ID0gZnVuY3Rpb24oIGhvbGQgKSB7XG5cdGlmICggaG9sZCApIHtcblx0XHRqUXVlcnkucmVhZHlXYWl0Kys7XG5cdH0gZWxzZSB7XG5cdFx0alF1ZXJ5LnJlYWR5KCB0cnVlICk7XG5cdH1cbn07XG5qUXVlcnkuaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5qUXVlcnkucGFyc2VKU09OID0gSlNPTi5wYXJzZTtcbmpRdWVyeS5ub2RlTmFtZSA9IG5vZGVOYW1lO1xualF1ZXJ5LmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xualF1ZXJ5LmlzV2luZG93ID0gaXNXaW5kb3c7XG5qUXVlcnkuY2FtZWxDYXNlID0gY2FtZWxDYXNlO1xualF1ZXJ5LnR5cGUgPSB0b1R5cGU7XG5cbmpRdWVyeS5ub3cgPSBEYXRlLm5vdztcblxualF1ZXJ5LmlzTnVtZXJpYyA9IGZ1bmN0aW9uKCBvYmogKSB7XG5cblx0Ly8gQXMgb2YgalF1ZXJ5IDMuMCwgaXNOdW1lcmljIGlzIGxpbWl0ZWQgdG9cblx0Ly8gc3RyaW5ncyBhbmQgbnVtYmVycyAocHJpbWl0aXZlcyBvciBvYmplY3RzKVxuXHQvLyB0aGF0IGNhbiBiZSBjb2VyY2VkIHRvIGZpbml0ZSBudW1iZXJzIChnaC0yNjYyKVxuXHR2YXIgdHlwZSA9IGpRdWVyeS50eXBlKCBvYmogKTtcblx0cmV0dXJuICggdHlwZSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlID09PSBcInN0cmluZ1wiICkgJiZcblxuXHRcdC8vIHBhcnNlRmxvYXQgTmFOcyBudW1lcmljLWNhc3QgZmFsc2UgcG9zaXRpdmVzIChcIlwiKVxuXHRcdC8vIC4uLmJ1dCBtaXNpbnRlcnByZXRzIGxlYWRpbmctbnVtYmVyIHN0cmluZ3MsIHBhcnRpY3VsYXJseSBoZXggbGl0ZXJhbHMgKFwiMHguLi5cIilcblx0XHQvLyBzdWJ0cmFjdGlvbiBmb3JjZXMgaW5maW5pdGllcyB0byBOYU5cblx0XHQhaXNOYU4oIG9iaiAtIHBhcnNlRmxvYXQoIG9iaiApICk7XG59O1xuXG5qUXVlcnkudHJpbSA9IGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRyZXR1cm4gdGV4dCA9PSBudWxsID9cblx0XHRcIlwiIDpcblx0XHQoIHRleHQgKyBcIlwiICkucmVwbGFjZSggcnRyaW0sIFwiJDFcIiApO1xufTtcblxuXG5cbi8vIFJlZ2lzdGVyIGFzIGEgbmFtZWQgQU1EIG1vZHVsZSwgc2luY2UgalF1ZXJ5IGNhbiBiZSBjb25jYXRlbmF0ZWQgd2l0aCBvdGhlclxuLy8gZmlsZXMgdGhhdCBtYXkgdXNlIGRlZmluZSwgYnV0IG5vdCB2aWEgYSBwcm9wZXIgY29uY2F0ZW5hdGlvbiBzY3JpcHQgdGhhdFxuLy8gdW5kZXJzdGFuZHMgYW5vbnltb3VzIEFNRCBtb2R1bGVzLiBBIG5hbWVkIEFNRCBpcyBzYWZlc3QgYW5kIG1vc3Qgcm9idXN0XG4vLyB3YXkgdG8gcmVnaXN0ZXIuIExvd2VyY2FzZSBqcXVlcnkgaXMgdXNlZCBiZWNhdXNlIEFNRCBtb2R1bGUgbmFtZXMgYXJlXG4vLyBkZXJpdmVkIGZyb20gZmlsZSBuYW1lcywgYW5kIGpRdWVyeSBpcyBub3JtYWxseSBkZWxpdmVyZWQgaW4gYSBsb3dlcmNhc2Vcbi8vIGZpbGUgbmFtZS4gRG8gdGhpcyBhZnRlciBjcmVhdGluZyB0aGUgZ2xvYmFsIHNvIHRoYXQgaWYgYW4gQU1EIG1vZHVsZSB3YW50c1xuLy8gdG8gY2FsbCBub0NvbmZsaWN0IHRvIGhpZGUgdGhpcyB2ZXJzaW9uIG9mIGpRdWVyeSwgaXQgd2lsbCB3b3JrLlxuXG4vLyBOb3RlIHRoYXQgZm9yIG1heGltdW0gcG9ydGFiaWxpdHksIGxpYnJhcmllcyB0aGF0IGFyZSBub3QgalF1ZXJ5IHNob3VsZFxuLy8gZGVjbGFyZSB0aGVtc2VsdmVzIGFzIGFub255bW91cyBtb2R1bGVzLCBhbmQgYXZvaWQgc2V0dGluZyBhIGdsb2JhbCBpZiBhblxuLy8gQU1EIGxvYWRlciBpcyBwcmVzZW50LiBqUXVlcnkgaXMgYSBzcGVjaWFsIGNhc2UuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcmJ1cmtlL3JlcXVpcmVqcy93aWtpL1VwZGF0aW5nLWV4aXN0aW5nLWxpYnJhcmllcyN3aWtpLWFub25cblxuaWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblx0ZGVmaW5lKCBcImpxdWVyeVwiLCBbXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGpRdWVyeTtcblx0fSApO1xufVxuXG5cblxuXG52YXJcblxuXHQvLyBNYXAgb3ZlciBqUXVlcnkgaW4gY2FzZSBvZiBvdmVyd3JpdGVcblx0X2pRdWVyeSA9IHdpbmRvdy5qUXVlcnksXG5cblx0Ly8gTWFwIG92ZXIgdGhlICQgaW4gY2FzZSBvZiBvdmVyd3JpdGVcblx0XyQgPSB3aW5kb3cuJDtcblxualF1ZXJ5Lm5vQ29uZmxpY3QgPSBmdW5jdGlvbiggZGVlcCApIHtcblx0aWYgKCB3aW5kb3cuJCA9PT0galF1ZXJ5ICkge1xuXHRcdHdpbmRvdy4kID0gXyQ7XG5cdH1cblxuXHRpZiAoIGRlZXAgJiYgd2luZG93LmpRdWVyeSA9PT0galF1ZXJ5ICkge1xuXHRcdHdpbmRvdy5qUXVlcnkgPSBfalF1ZXJ5O1xuXHR9XG5cblx0cmV0dXJuIGpRdWVyeTtcbn07XG5cbi8vIEV4cG9zZSBqUXVlcnkgYW5kICQgaWRlbnRpZmllcnMsIGV2ZW4gaW4gQU1EXG4vLyAodHJhYy03MTAyI2NvbW1lbnQ6MTAsIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L3B1bGwvNTU3KVxuLy8gYW5kIENvbW1vbkpTIGZvciBicm93c2VyIGVtdWxhdG9ycyAodHJhYy0xMzU2NilcbmlmICggdHlwZW9mIG5vR2xvYmFsID09PSBcInVuZGVmaW5lZFwiICkge1xuXHR3aW5kb3cualF1ZXJ5ID0gd2luZG93LiQgPSBqUXVlcnk7XG59XG5cblxuXG5cbnJldHVybiBqUXVlcnk7XG59ICk7XG4iLCAiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc3RlcHMgPSBbXVxyXG4gICAgJCgnLnN0ZXBzIGxpJykuZWFjaChmdW5jdGlvbiAoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHN0ZXAgPSAkKHRoaXMpLnRleHQoKVxyXG4gICAgICAgIGlmIChzdGVwICE9PSAnXHU4M0RDXHU4QzMxXHU0RTAwXHU4OUM4JyAmJiBzdGVwICE9PSAnXHU4M0RDXHU4QzMxXHU2MDNCXHU3RUQzJykgc3RlcHMucHVzaChzdGVwKVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGUgPSAkKCcjY29va2Jvb2stYmVnaW4nKVxyXG4gICAgZS5hdHRyKFxyXG4gICAgICAgICdzcmMnLFxyXG4gICAgICAgIGUuYXR0cignc3JjJykgKyAnJnN0ZXBzPScgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc3RlcHMpKVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbXV0YXRpb24gb2YgbXV0YXRpb25zTGlzdCkge1xyXG4gICAgICAgICAgICBpZiAoJChtdXRhdGlvbi50YXJnZXQpLmF0dHIoJ3NlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKG11dGF0aW9uLnRhcmdldCkudGV4dCgpID09ICdcdTgzRENcdThDMzFcdTRFMDBcdTg5QzgnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWZyYW1lUmVmcmVzaCgnI2Nvb2tib29rLWJlZ2luJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgkKG11dGF0aW9uLnRhcmdldCkudGV4dCgpID09ICdcdTgzRENcdThDMzFcdTYwM0JcdTdFRDMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWZyYW1lUmVmcmVzaCgnI2Nvb2tib29rLWVuZCcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoJy5zdGVwcyBsaScpLmVhY2goZnVuY3Rpb24gKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKCQodGhpcykuZ2V0KDApLCB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSlcclxuXHJcbmZ1bmN0aW9uIGlmcmFtZVJlZnJlc2goZSkge1xyXG4gICAgdmFyIGMgPSAkKGUpXHJcbiAgICBjLmF0dHIoJ3NyYycsIGMuYXR0cignc3JjJykpXHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSx1Q0FBQUEsVUFBQUMsU0FBQTtBQVVBLEtBQUUsU0FBVSxRQUFRLFNBQVU7QUFFN0I7QUFFQSxVQUFLLE9BQU9BLFlBQVcsWUFBWSxPQUFPQSxRQUFPLFlBQVksVUFBVztBQVN2RSxRQUFBQSxRQUFPLFVBQVUsT0FBTyxXQUN2QixRQUFTLFFBQVEsSUFBSyxJQUN0QixTQUFVLEdBQUk7QUFDYixjQUFLLENBQUMsRUFBRSxVQUFXO0FBQ2xCLGtCQUFNLElBQUksTUFBTywwQ0FBMkM7QUFBQSxVQUM3RDtBQUNBLGlCQUFPLFFBQVMsQ0FBRTtBQUFBLFFBQ25CO0FBQUEsTUFDRixPQUFPO0FBQ04sZ0JBQVMsTUFBTztBQUFBLE1BQ2pCO0FBQUEsSUFHRCxHQUFLLE9BQU8sV0FBVyxjQUFjLFNBQVNELFVBQU0sU0FBVUUsU0FBUSxVQUFXO0FBTWpGO0FBRUEsVUFBSSxNQUFNLENBQUM7QUFFWCxVQUFJLFdBQVcsT0FBTztBQUV0QixVQUFJLFFBQVEsSUFBSTtBQUVoQixVQUFJLE9BQU8sSUFBSSxPQUFPLFNBQVUsT0FBUTtBQUN2QyxlQUFPLElBQUksS0FB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TyxJQUFJO0FBQUEsTUFDNUI7QUFLQSxhQUFPO0FBQUEsSUFDUCxDQUFFO0FBQUE7QUFBQTs7O0FDMzlVRixvQkFBYztBQUFBLElBRWQsY0FBQXlCLFNBQUUsV0FBWTtBQUNWLE1BQUksUUFBUSxDQUFDO0FBQ2Isb0JBQUFBLFNBQUUsV0FBVyxFQUFFLEtBQUssU0FBVSxPQUFlO0FBQ3pDLFVBQU0sV0FBTyxjQUFBQSxTQUFFLElBQUksRUFBRSxLQUFLO0FBQzFCLFFBQUksU0FBUyw4QkFBVSxTQUFTO0FBQVEsWUFBTSxLQUFLLElBQUk7QUFBQSxFQUMzRCxDQUFDO0FBQ0QsUUFBTSxRQUFJLGNBQUFBLFNBQUUsaUJBQWlCO0FBQzdCLElBQUU7QUFBQSxJQUNFO0FBQUEsSUFDQSxFQUFFLEtBQUssS0FBSyxJQUFJLFlBQVksbUJBQW1CLEtBQUssVUFBVSxLQUFLLENBQUM7QUFBQSxFQUN4RTtBQUVBLFFBQU0sV0FBVyxJQUFJLGlCQUFpQixTQUFVLGVBQWVDLFdBQVU7QUFDckUsYUFBUyxZQUFZLGVBQWU7QUFDaEMsY0FBSSxjQUFBRCxTQUFFLFNBQVMsTUFBTSxFQUFFLEtBQUssVUFBVSxHQUFHO0FBQ3JDLGdCQUFJLGNBQUFBLFNBQUUsU0FBUyxNQUFNLEVBQUUsS0FBSyxLQUFLLDRCQUFRO0FBQ3JDLHdCQUFjLGlCQUFpQjtBQUFBLFFBQ25DO0FBQ0EsZ0JBQUksY0FBQUEsU0FBRSxTQUFTLE1BQU0sRUFBRSxLQUFLLEtBQUssNEJBQVE7QUFDckMsd0JBQWMsZUFBZTtBQUFBLFFBQ2pDO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxFQUNKLENBQUM7QUFFRCxvQkFBQUEsU0FBRSxXQUFXLEVBQUUsS0FBSyxTQUFVLE9BQWU7QUFDekMsYUFBUyxZQUFRLGNBQUFBLFNBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHO0FBQUEsTUFDN0IsWUFBWTtBQUFBLElBQ2hCLENBQUM7QUFBQSxFQUNMLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxjQUFjLEdBQUc7QUFDdEIsTUFBSSxRQUFJLGNBQUFBLFNBQUUsQ0FBQztBQUNYLElBQUUsS0FBSyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUM7QUFDL0I7IiwKICAibmFtZXMiOiBbImV4cG9ydHMiLCAibW9kdWxlIiwgIndpbmRvdyIsICJpc0Z1bmN0aW9uIiwgImlzV2luZG93IiwgImFyciIsICJwdXNoIiwgImRvY3VtZW50IiwgImRvY3VtZW50RWxlbWVudCIsICJycXVpY2tFeHByIiwgImkiLCAibWF0Y2hlcyIsICJub2RlIiwgImRpciIsICJmaW5kIiwgImVsZW0iLCAidmFsdWUiLCAiZGVmZXJyZWQiLCAiZGF0YSIsICJub2RlTmFtZSIsICJuYW1lIiwgImluZGV4IiwgImxlbmd0aCIsICJ2YWwiLCAiY29tcGxldGVkIiwgIm1ldGhvZCIsICJ0eXBlIiwgIiQiLCAib2JzZXJ2ZXIiXQp9Cg==
