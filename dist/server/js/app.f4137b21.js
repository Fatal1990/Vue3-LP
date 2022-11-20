module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9169");


/***/ }),

/***/ "126e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return provideStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useStore; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("51e9");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5880");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);



const StoreSymbol = Symbol('vuex-store');
function _createStore() {
  return Object(vuex__WEBPACK_IMPORTED_MODULE_1__["createStore"])({
    state() {
      return {
        users: []
      };
    },

    mutations: {
      setUsers(state, users) {
        users.forEach(u => {
          state.users.push(u);
        });
      }

    }
  });
}
function provideStore(store) {
  Object(vue__WEBPACK_IMPORTED_MODULE_2__["provide"])(StoreSymbol, store);
}
function useStore() {
  const store = Object(vue__WEBPACK_IMPORTED_MODULE_2__["inject"])(StoreSymbol);

  if (!store) {
    throw Error('no store provided');
  }

  return store;
}

/***/ }),

/***/ "5109":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "51e9":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol.description");

/***/ }),

/***/ "5880":
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),

/***/ "6389":
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),

/***/ "70d2":
/***/ (function(module, exports) {

module.exports = require("@vue/server-renderer");

/***/ }),

/***/ "7170":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return provideStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useStore; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("51e9");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);


const StoreSymbol = Symbol('store');
function _createStore() {
  return Object(vue__WEBPACK_IMPORTED_MODULE_1__["reactive"])({
    cpt: 1
  });
}
function provideStore(store) {
  Object(vue__WEBPACK_IMPORTED_MODULE_1__["provide"])(StoreSymbol, store);
}
function useStore() {
  const store = Object(vue__WEBPACK_IMPORTED_MODULE_1__["inject"])(StoreSymbol);

  if (!store) {
    throw Error('no store provided');
  }

  return store;
}

/***/ }),

/***/ "8495":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.promise");

/***/ }),

/***/ "8497":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_loader_v16_dist_index_js_ref_0_0_HelloWorld_vue_vue_type_style_index_0_id_b9167eee_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d24b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_loader_v16_dist_index_js_ref_0_0_HelloWorld_vue_vue_type_style_index_0_id_b9167eee_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_loader_v16_dist_index_js_ref_0_0_HelloWorld_vue_vue_type_style_index_0_id_b9167eee_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "9169":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./src/_base/isSSR.js
const isSSR = typeof window === 'undefined';
/* harmony default export */ var _base_isSSR = (isSSR);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/App.vue?vue&type=template&id=0e61c9dd&bindings={}


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = Object(external_vue_["resolveComponent"])("router-link");

  const _component_router_view = Object(external_vue_["resolveComponent"])("router-view");

  _push(`<div${Object(server_renderer_["ssrRenderAttrs"])(Object(external_vue_["mergeProps"])({
    id: "app"
  }, _attrs))}><ul><li>`);

  _push(Object(server_renderer_["ssrRenderComponent"])(_component_router_link, {
    to: {
      name: 'home'
    }
  }, {
    default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Go to home`);
      } else {
        return [Object(external_vue_["createTextVNode"])("Go to home")];
      }
    }),
    _: 1
  }, _parent));

  _push(`</li><li>`);

  _push(Object(server_renderer_["ssrRenderComponent"])(_component_router_link, {
    to: {
      name: 'page',
      params: {
        id: 2
      }
    }
  }, {
    default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Go to other page`);
      } else {
        return [Object(external_vue_["createTextVNode"])("Go to other page")];
      }
    }),
    _: 1
  }, _parent));

  _push(`</li></ul>`);

  _push(Object(server_renderer_["ssrRenderComponent"])(_component_router_view, null, null, _parent));

  _push(`</div>`);
}
// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=0e61c9dd&bindings={}

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist??ref--0-0!./src/App.vue?vue&type=script&lang=ts

/* harmony default export */ var Appvue_type_script_lang_ts = ({
  name: 'App',
});

// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/App.vue



Appvue_type_script_lang_ts.ssrRender = ssrRender

/* harmony default export */ var App = (Appvue_type_script_lang_ts);
// EXTERNAL MODULE: external "core-js/modules/es.promise"
var es_promise_ = __webpack_require__("8495");

// CONCATENATED MODULE: ./src/router/index.js


const {
  createRouter,
  createMemoryHistory,
  createWebHistory
} = __webpack_require__("6389");

const isServer = typeof window === 'undefined';
let router_history = isServer ? createMemoryHistory() : createWebHistory();
const routes = [{
  path: '/',
  name: 'home',
  component: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "bc13"))
}, {
  path: '/page/:id',
  name: 'page',
  component: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "a691")),
  props: true
}];
/* harmony default export */ var src_router = (function () {
  return createRouter({
    routes,
    history: router_history
  });
});
// EXTERNAL MODULE: ./src/store/useNativeStore.js
var useNativeStore = __webpack_require__("7170");

// EXTERNAL MODULE: ./src/store/useVuexStore.js
var useVuexStore = __webpack_require__("126e");

// CONCATENATED MODULE: ./src/app.js






/* harmony default export */ var src_app = (function (args) {
  const rootComponent = {
    render: () => Object(external_vue_["h"])(App),
    components: {
      App: App
    },

    setup() {
      useNativeStore["c" /* provideStore */](args.nativeStore);
      useVuexStore["c" /* provideStore */](args.vuexStore);
    }

  };
  const app = (_base_isSSR ? external_vue_["createSSRApp"] : external_vue_["createApp"])(rootComponent);
  const router = src_router();
  app.use(router);
  app.use(args.vuexStore);
  return {
    app,
    router
  };
});
// CONCATENATED MODULE: ./src/server-entry.js



/* harmony default export */ var server_entry = __webpack_exports__["default"] = (function () {
  const _nativeStore = useNativeStore["a" /* _createStore */]();

  const _vuexStore = useVuexStore["a" /* _createStore */]();

  const {
    router,
    app
  } = src_app({
    nativeStore: _nativeStore,
    vuexStore: _vuexStore
  });
  return {
    app,
    router,
    nativeStore: _nativeStore,
    vuexStore: _vuexStore
  };
});

/***/ }),

/***/ "a691":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/pages/Page.vue?vue&type=template&id=f3d4ef50&bindings={}

function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--> Im the page: ${Object(server_renderer_["ssrInterpolate"])(_ctx.id)} <br> Store: ${Object(server_renderer_["ssrInterpolate"])(_ctx.store.cpt)} <button>Cpt + 1</button><!--]-->`);
}
// CONCATENATED MODULE: ./src/pages/Page.vue?vue&type=template&id=f3d4ef50&bindings={}

// EXTERNAL MODULE: external "core-js/modules/es.promise"
var es_promise_ = __webpack_require__("8495");

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: ./src/store/useNativeStore.js
var useNativeStore = __webpack_require__("7170");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist??ref--0-0!./src/pages/Page.vue?vue&type=script&lang=js



/* harmony default export */ var Pagevue_type_script_lang_js = (Object(external_vue_["defineComponent"])({
  props: {
    id: String
  },

  setup() {
    const store = Object(useNativeStore["b" /* default */])();

    const clicked = () => {
      store.cpt += 1;
    };

    return {
      store,
      clicked
    };
  },

  async serverPrefetch() {
    this.store.cpt += 10;
  }

}));
// CONCATENATED MODULE: ./src/pages/Page.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/pages/Page.vue



Pagevue_type_script_lang_js.ssrRender = ssrRender

/* harmony default export */ var Page = __webpack_exports__["default"] = (Pagevue_type_script_lang_js);

/***/ }),

/***/ "bc13":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// EXTERNAL MODULE: ./src/assets/logo.png
var logo = __webpack_require__("cf05");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/pages/Home.vue?vue&type=template&id=b2eaf06e&bindings={}



function Homevue_type_template_id_b2eaf06e_bindings_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HelloWorld = Object(external_vue_["resolveComponent"])("HelloWorld");

  _push(`<!--[--><img alt="Vue logo"${Object(server_renderer_["ssrRenderAttr"])("src", logo_default.a)}>`);

  _push(Object(server_renderer_["ssrRenderComponent"])(_component_HelloWorld, {
    msg: "Welcome to Your Vue.js App"
  }, null, _parent));

  _push(`<div> 123 </div>`);

  if (_ctx.users.length > 0) {
    _push(`<ul${Object(server_renderer_["ssrRenderAttrs"])(_attrs)}><!--[-->`);

    Object(server_renderer_["ssrRenderList"])(_ctx.users, u => {
      _push(`<li${Object(server_renderer_["ssrRenderAttr"])("key", u.id)}>${Object(server_renderer_["ssrInterpolate"])(u.email)}</li>`);
    });

    _push(`<!--]--></ul>`);
  } else {
    _push(`<p${Object(server_renderer_["ssrRenderAttrs"])(_attrs)}>No user</p>`);
  }

  _push(`<!--]-->`);
}
// CONCATENATED MODULE: ./src/pages/Home.vue?vue&type=template&id=b2eaf06e&bindings={}

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("cebe");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./src/store/useVuexStore.js
var useVuexStore = __webpack_require__("126e");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/HelloWorld.vue?vue&type=template&id=b9167eee&scoped=true&bindings={"msg":"props"}



const _withId = /*#__PURE__*/Object(external_vue_["withScopeId"])("data-v-b9167eee");

const HelloWorldvue_type_template_id_b9167eee_scoped_true_bindings_msg_props_ssrRender = /*#__PURE__*/_withId(function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${Object(server_renderer_["ssrRenderAttrs"])(Object(external_vue_["mergeProps"])({
    class: "hello"
  }, _attrs))} data-v-b9167eee><h1 data-v-b9167eee>${Object(server_renderer_["ssrInterpolate"])($props.msg)}</h1><p data-v-b9167eee> For a guide and recipes on how to configure / customize this project,<br data-v-b9167eee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-cli documentation</a>. </p><h3 data-v-b9167eee>Installed CLI Plugins</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-b9167eee>babel</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-b9167eee>eslint</a></li></ul><h3 data-v-b9167eee>Essential Links</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Core Docs</a></li><li data-v-b9167eee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Forum</a></li><li data-v-b9167eee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Community Chat</a></li><li data-v-b9167eee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-b9167eee>Twitter</a></li><li data-v-b9167eee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>News</a></li></ul><h3 data-v-b9167eee>Ecosystem</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-router</a></li><li data-v-b9167eee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vuex</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-b9167eee>vue-devtools</a></li><li data-v-b9167eee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-loader</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-b9167eee>awesome-vue</a></li></ul></div>`);
});
// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=template&id=b9167eee&scoped=true&bindings={"msg":"props"}

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/HelloWorld.vue?vue&type=script&lang=js
/* harmony default export */ var HelloWorldvue_type_script_lang_js = ({
  name: 'HelloWorld',
  props: {
    msg: String
  }
});
// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/HelloWorld.vue?vue&type=style&index=0&id=b9167eee&scoped=true&lang=css
var HelloWorldvue_type_style_index_0_id_b9167eee_scoped_true_lang_css = __webpack_require__("8497");

// CONCATENATED MODULE: ./src/components/HelloWorld.vue





HelloWorldvue_type_script_lang_js.ssrRender = HelloWorldvue_type_template_id_b9167eee_scoped_true_bindings_msg_props_ssrRender
HelloWorldvue_type_script_lang_js.__scopeId = "data-v-b9167eee"

/* harmony default export */ var HelloWorld = (HelloWorldvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist??ref--0-0!./src/pages/Home.vue?vue&type=script&lang=ts






/* harmony default export */ var Homevue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({
  name: 'Home',
  components: {
    HelloWorld: HelloWorld,
  },
  setup() {
    const store = Object(useVuexStore["b" /* default */])();

    const users = Object(external_vue_["computed"])(() => store.state.users);

    const _fetch = async () => {
      console.log('fetching ...');

      const { data: res } = await external_axios_default.a.get('https://reqres.in/api/users?page=2');

      store.commit('setUsers', res.data);
    };

    if (!users.value.length) {
      _fetch();
    }

    return {
      users,
      _fetch,
    };
  },
  async serverPrefetch() {
    await this._fetch();
  },
}));

// CONCATENATED MODULE: ./src/pages/Home.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./src/pages/Home.vue?vue&type=style&index=0&lang=css
var Homevue_type_style_index_0_lang_css = __webpack_require__("d796");

// CONCATENATED MODULE: ./src/pages/Home.vue





Homevue_type_script_lang_ts.ssrRender = Homevue_type_template_id_b2eaf06e_bindings_ssrRender

/* harmony default export */ var Home = __webpack_exports__["default"] = (Homevue_type_script_lang_ts);

/***/ }),

/***/ "cebe":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "cf05":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.82b9c7a5.png";

/***/ }),

/***/ "d24b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d796":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_loader_v16_dist_index_js_ref_0_0_Home_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5109");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_loader_v16_dist_index_js_ref_0_0_Home_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_loader_v16_dist_index_js_ref_0_0_Home_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

/******/ });
//# sourceMappingURL=app.f4137b21.js.map