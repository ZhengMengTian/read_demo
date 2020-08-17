(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!****************************!*\
  !*** D:/read_demo/main.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 21));\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 22));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_vue.default.prototype.$store = _store.default;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwicHJvdG90eXBlIiwiJHN0b3JlIiwic3RvcmUiLCJBcHAiLCJtcFR5cGUiLCJhcHAiLCIkbW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFtQjtBQUNuQjtBQUNBLHdFOztBQUVBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7O0FBRUFGLGFBQUlHLFNBQUosQ0FBY0MsTUFBZCxHQUF1QkMsY0FBdkI7O0FBRUFDLGFBQUlDLE1BQUosR0FBYSxLQUFiOztBQUVBLElBQU1DLEdBQUcsR0FBRyxJQUFJUixZQUFKO0FBQ0xNLFlBREssRUFBWjs7QUFHQUUsR0FBRyxDQUFDQyxNQUFKIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7aW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5cclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuXHJcblZ1ZS5wcm90b3R5cGUuJHN0b3JlID0gc3RvcmVcclxuXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICAuLi5BcHBcclxufSlcclxuYXBwLiRtb3VudCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************!*\
  !*** D:/read_demo/pages.json ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});
__definePage('pages/read/read', function () {return Vue.extend(__webpack_require__(/*! pages/read/read.vue?mpType=page */ 8).default);});

/***/ }),
/* 2 */
/*!******************************************************!*\
  !*** D:/read_demo/pages/index/index.vue?mpType=page ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3lLO0FBQ3pLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!************************************************************************************!*\
  !*** D:/read_demo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/read_demo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "content"),
      attrs: { _i: 0 },
      on: { click: _vm.read }
    },
    [
      _c("image", { staticClass: _vm._$s(1, "sc", "logo"), attrs: { _i: 1 } }),
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "text-area"), attrs: { _i: 2 } },
        [
          _c(
            "text",
            { staticClass: _vm._$s(3, "sc", "title"), attrs: { _i: 3 } },
            [_vm._v(_vm._$s(3, "t0-0", _vm._s(_vm.title)))]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!******************************************************************************!*\
  !*** D:/read_demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9rQixDQUFnQiwwbUJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/read_demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      title: '点击开始阅读' };\n\n  },\n  onLoad: function onLoad() {\n\n  },\n  methods: {\n    read: function read() {\n      uni.navigateTo({\n        url: '/pages/read/read' });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFVQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLHFCQURBOztBQUdBLEdBTEE7QUFNQSxRQU5BLG9CQU1BOztBQUVBLEdBUkE7QUFTQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBLCtCQURBOztBQUdBLEtBTEEsRUFUQSxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCIgQGNsaWNrPVwicmVhZFwiPlxyXG5cdFx0PGltYWdlIGNsYXNzPVwibG9nb1wiIHNyYz1cIi9zdGF0aWMvbG9nby5wbmdcIj48L2ltYWdlPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWFyZWFcIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZVwiPnt7dGl0bGV9fTwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGl0bGU6ICfngrnlh7vlvIDlp4vpmIXor7snXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0cmVhZCgpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvcmVhZC9yZWFkJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5jb250ZW50IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmxvZ28ge1xyXG5cdFx0aGVpZ2h0OiAyMDBycHg7XHJcblx0XHR3aWR0aDogMjAwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjAwcnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0XHRtYXJnaW4tYm90dG9tOiA1MHJweDtcclxuXHR9XHJcblxyXG5cdC50ZXh0LWFyZWEge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMzZycHg7XHJcblx0XHRjb2xvcjogIzhmOGY5NDtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/*!****************************************************!*\
  !*** D:/read_demo/pages/read/read.vue?mpType=page ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _read_vue_vue_type_template_id_1126b716_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./read.vue?vue&type=template&id=1126b716&scoped=true&mpType=page */ 9);\n/* harmony import */ var _read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _read_vue_vue_type_template_id_1126b716_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _read_vue_vue_type_template_id_1126b716_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"1126b716\",\n  null,\n  false,\n  _read_vue_vue_type_template_id_1126b716_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/read/read.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQ3lLO0FBQ3pLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vcmVhZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTEyNmI3MTYmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3JlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxMTI2YjcxNlwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9yZWFkL3JlYWQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**********************************************************************************************!*\
  !*** D:/read_demo/pages/read/read.vue?vue&type=template&id=1126b716&scoped=true&mpType=page ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_template_id_1126b716_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./read.vue?vue&type=template&id=1126b716&scoped=true&mpType=page */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_template_id_1126b716_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_template_id_1126b716_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_template_id_1126b716_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_template_id_1126b716_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/read_demo/pages/read/read.vue?vue&type=template&id=1126b716&scoped=true&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c("view", {
        staticClass: _vm._$s(1, "sc", "action"),
        attrs: { _i: 1 },
        on: {
          touchstart: _vm.touchStart,
          touchend: _vm.touchEnd,
          touchmove: _vm.touchMove
        }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "container hidden"), attrs: { _i: 2 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "chapter"), attrs: { _i: 3 } },
            [_vm._v(_vm._$s(3, "t0-0", _vm._s(_vm.chapterName)))]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(4, "sc", "content"),
              style: _vm._$s(4, "s", {
                height: _vm.contentHeight + "px",
                width: _vm.contentWidth + "px",
                columns: _vm.contentWidth + "px",
                columnGap: _vm.columnGap + "px"
              }),
              attrs: { id: "content", _i: 4 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(5, "sc", "book-inner"),
                style: _vm._$s(5, "s", {
                  fontSize: _vm.fontSize + "px",
                  lineHeight: _vm.lineHeight * _vm.fontSize + "px"
                }),
                attrs: { id: "text", _i: 5 },
                domProps: { innerHTML: _vm._s(_vm._$s(5, "v-html", _vm.text)) }
              })
            ]
          ),
          _c("view", {
            staticClass: _vm._$s(6, "sc", "bottom-bar"),
            attrs: { _i: 6 }
          })
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(7, "sc", "container hidden"), attrs: { _i: 7 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(8, "sc", "chapter"), attrs: { _i: 8 } },
            [_vm._v(_vm._$s(8, "t0-0", _vm._s(_vm.chapterName)))]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(9, "sc", "content"),
              style: _vm._$s(9, "s", {
                height: _vm.contentHeight + "px",
                width: _vm.contentWidth + "px",
                columns: _vm.contentWidth + "px",
                columnGap: _vm.columnGap + "px"
              }),
              attrs: { id: "content", _i: 9 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(10, "sc", "book-inner"),
                style: _vm._$s(10, "s", {
                  fontSize: _vm.fontSize + "px",
                  lineHeight: _vm.lineHeight * _vm.fontSize + "px"
                }),
                attrs: { id: "preText", _i: 10 },
                domProps: {
                  innerHTML: _vm._s(_vm._$s(10, "v-html", _vm.preText))
                }
              })
            ]
          ),
          _c("view", {
            staticClass: _vm._$s(11, "sc", "bottom-bar"),
            attrs: { _i: 11 }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(12, "sc", "container hidden"),
          attrs: { _i: 12 }
        },
        [
          _c(
            "view",
            { staticClass: _vm._$s(13, "sc", "chapter"), attrs: { _i: 13 } },
            [_vm._v(_vm._$s(13, "t0-0", _vm._s(_vm.chapterName)))]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(14, "sc", "content"),
              style: _vm._$s(14, "s", {
                height: _vm.contentHeight + "px",
                width: _vm.contentWidth + "px",
                columns: _vm.contentWidth + "px",
                columnGap: _vm.columnGap + "px"
              }),
              attrs: { id: "content", _i: 14 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(15, "sc", "book-inner"),
                style: _vm._$s(15, "s", {
                  fontSize: _vm.fontSize + "px",
                  lineHeight: _vm.lineHeight * _vm.fontSize + "px"
                }),
                attrs: { id: "nextText", _i: 15 },
                domProps: {
                  innerHTML: _vm._s(_vm._$s(15, "v-html", _vm.nextText))
                }
              })
            ]
          ),
          _c("view", {
            staticClass: _vm._$s(16, "sc", "bottom-bar"),
            attrs: { _i: 16 }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(17, "sc", "container"),
          class: _vm._$s(17, "c", {
            container0: _vm.background === 0,
            container1: _vm.background === 1
          }),
          style: _vm._$s(17, "s", {
            zIndex: 300,
            transform: "translateX(" + _vm.preTranslateX + "px)",
            transition:
              "all " + (_vm.showAnimation ? _vm.turnPageTime : 0) + "s"
          }),
          attrs: { _i: 17 }
        },
        [
          _c(
            "view",
            { staticClass: _vm._$s(18, "sc", "chapter"), attrs: { _i: 18 } },
            [_vm._v(_vm._$s(18, "t0-0", _vm._s(_vm.preChapterName)))]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(19, "sc", "content"),
              style: _vm._$s(19, "s", {
                height: _vm.contentHeight + "px",
                width: _vm.contentWidth + "px",
                fontSize: _vm.fontSize + "px",
                color: "" + _vm.colorList[_vm.background],
                transform:
                  "translateX(-" +
                  (_vm.prePages.length - 1) *
                    (_vm.contentWidth + _vm.columnGap) +
                  "px)",
                columns: _vm.contentWidth + "px",
                columnGap: _vm.columnGap + "px"
              }),
              attrs: { _i: 19 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(20, "sc", "book-inner"),
                style: _vm._$s(20, "s", {
                  fontSize: _vm.fontSize + "px",
                  lineHeight: _vm.lineHeight * _vm.fontSize + "px"
                }),
                attrs: { _i: 20 },
                domProps: { innerHTML: _vm._s(_vm._$s(20, "v-html", _vm.text)) }
              })
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(21, "sc", "bottom-bar"), attrs: { _i: 21 } },
            [
              _vm._v(
                _vm._$s(21, "t0-0", _vm._s(_vm.prePages.length)) +
                  _vm._$s(21, "t0-1", _vm._s(_vm.prePages.length))
              )
            ]
          )
        ]
      ),
      _vm._l(_vm._$s(22, "f", { forItems: _vm.pages }), function(
        item,
        $10,
        $20,
        $30
      ) {
        return _c(
          "view",
          {
            key: _vm._$s(22, "f", { forIndex: $20, key: item.id }),
            staticClass: _vm._$s("22-" + $30, "sc", "container"),
            class: _vm._$s("22-" + $30, "c", {
              container0: _vm.background === 0,
              container1: _vm.background === 1
            }),
            style: _vm._$s("22-" + $30, "s", {
              zIndex: item.zIndex,
              transform: "translateX(" + item.translateX + "px)",
              transition:
                "all " + (_vm.showAnimation ? _vm.turnPageTime : 0) + "s"
            }),
            attrs: { _i: "22-" + $30 }
          },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s("23-" + $30, "sc", "chapter"),
                attrs: { _i: "23-" + $30 }
              },
              [_vm._v(_vm._$s("23-" + $30, "t0-0", _vm._s(_vm.chapterName)))]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s("24-" + $30, "sc", "content"),
                style: _vm._$s("24-" + $30, "s", {
                  height: _vm.contentHeight + "px",
                  width: _vm.contentWidth + "px",
                  fontSize: _vm.fontSize + "px",
                  color: "" + _vm.colorList[_vm.background],
                  transform:
                    "translateX(-" +
                    item.id * (_vm.contentWidth + _vm.columnGap) +
                    "px)",
                  columns: _vm.contentWidth + "px",
                  columnGap: _vm.columnGap + "px"
                }),
                attrs: { _i: "24-" + $30 }
              },
              [
                _c("view", {
                  staticClass: _vm._$s("25-" + $30, "sc", "book-inner"),
                  style: _vm._$s("25-" + $30, "s", {
                    fontSize: _vm.fontSize + "px",
                    lineHeight: _vm.lineHeight * _vm.fontSize + "px"
                  }),
                  attrs: { _i: "25-" + $30 },
                  domProps: {
                    innerHTML: _vm._s(_vm._$s("25-" + $30, "v-html", _vm.text))
                  }
                })
              ]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s("26-" + $30, "sc", "bottom-bar"),
                attrs: { _i: "26-" + $30 }
              },
              [
                _vm._v(
                  _vm._$s("26-" + $30, "t0-0", _vm._s(item.id + 1)) +
                    _vm._$s("26-" + $30, "t0-1", _vm._s(_vm.pages.length))
                )
              ]
            )
          ]
        )
      }),
      _vm._$s(27, "i", _vm.pages.length)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(27, "sc", "container"),
              class: _vm._$s(27, "c", {
                container0: _vm.background === 0,
                container1: _vm.background === 1
              }),
              style: _vm._$s(27, "s", {
                zIndex: 100,
                transform: "translateX(0px)"
              }),
              attrs: { _i: 27 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(28, "sc", "chapter"),
                  attrs: { _i: 28 }
                },
                [_vm._v(_vm._$s(28, "t0-0", _vm._s(_vm.nextChapterName)))]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(29, "sc", "content"),
                  style: _vm._$s(29, "s", {
                    height: _vm.contentHeight + "px",
                    width: _vm.contentWidth + "px",
                    fontSize: _vm.fontSize + "px",
                    color: "" + _vm.colorList[_vm.background],
                    transform: "translateX(0px)",
                    columns: _vm.contentWidth + "px",
                    columnGap: _vm.columnGap + "px"
                  }),
                  attrs: { _i: 29 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(30, "sc", "book-inner"),
                    style: _vm._$s(30, "s", {
                      fontSize: _vm.fontSize + "px",
                      lineHeight: _vm.lineHeight * _vm.fontSize + "px"
                    }),
                    attrs: { _i: 30 },
                    domProps: {
                      innerHTML: _vm._s(_vm._$s(30, "v-html", _vm.nextText))
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(31, "sc", "bottom-bar"),
                  attrs: { _i: 31 }
                },
                [_vm._v(_vm._$s(31, "t0-0", _vm._s(_vm.nextPages.length)))]
              )
            ]
          )
        : _vm._e(),
      _vm._$s(32, "i", _vm.menuShow)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(32, "sc", "menu"),
              style: _vm._$s(32, "s", {
                height: _vm.windowHeight + "px",
                width: _vm.windowWidth + "px",
                background: _vm.directoryShow ? "rgba(0, 0, 0, .5)" : ""
              }),
              attrs: { _i: 32 },
              on: { touchend: _vm.closeMenu }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(33, "sc", "menu-top"),
                  style: _vm._$s(33, "s", {
                    height: _vm.statusBarHeight + 40 + "px",
                    top: _vm.itemShow ? 0 : "-100%"
                  }),
                  attrs: { _i: 33 },
                  on: {
                    touchend: function($event) {
                      $event.stopPropagation()
                    }
                  }
                },
                [
                  _c("view", {
                    style: _vm._$s(34, "s", {
                      height: _vm.statusBarHeight + "px"
                    }),
                    attrs: { _i: 34 }
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(35, "sc", "head"),
                      attrs: { _i: 35 }
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(36, "sc", "iconfont back"),
                        attrs: { _i: 36 },
                        on: { click: _vm.back }
                      }),
                      _c("view", [
                        _vm._v(_vm._$s(37, "t0-0", _vm._s(_vm.chapterName)))
                      ])
                    ]
                  )
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(38, "sc", "menu-bottom"),
                  style: _vm._$s(38, "s", {
                    bottom: _vm.itemShow ? 0 : "-100%"
                  }),
                  attrs: { _i: 38 },
                  on: {
                    touchend: function($event) {
                      $event.stopPropagation()
                    }
                  }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(39, "sc", "show-page"),
                      attrs: { _i: 39 }
                    },
                    [
                      _vm._v(
                        _vm._$s(39, "t0-0", _vm._s(_vm.currentPage + 1)) +
                          _vm._$s(39, "t0-1", _vm._s(_vm.pages.length))
                      )
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(40, "sc", "progress-box"),
                      attrs: { _i: 40 }
                    },
                    [
                      _c("text", {
                        attrs: { _i: 41 },
                        on: { click: _vm.preChapter }
                      }),
                      _c(
                        "view",
                        [
                          _c("my-progress", {
                            attrs: {
                              total: _vm.pages.length - 1 || 1,
                              index: _vm.currentPage,
                              _i: 43
                            },
                            on: { indexChange: _vm.goToPage }
                          })
                        ],
                        1
                      ),
                      _c("text", {
                        attrs: { _i: 44 },
                        on: { click: _vm.nextChapter }
                      })
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(45, "sc", "items-box"),
                      attrs: { _i: 45 }
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(46, "sc", "item-box"),
                          attrs: { _i: 46 },
                          on: { click: _vm.openDirectory }
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(47, "sc", "iconfont"),
                            attrs: { _i: 47 }
                          }),
                          _c("text")
                        ]
                      ),
                      _vm._$s(49, "i", _vm.background === 1)
                        ? _c(
                            "view",
                            {
                              staticClass: _vm._$s(49, "sc", "item-box"),
                              attrs: { _i: 49 },
                              on: {
                                click: function($event) {
                                  return _vm.changeBackground(0)
                                }
                              }
                            },
                            [
                              _c("text", {
                                staticClass: _vm._$s(50, "sc", "iconfont"),
                                attrs: { _i: 50 }
                              }),
                              _c("text")
                            ]
                          )
                        : _c(
                            "view",
                            {
                              staticClass: _vm._$s(52, "sc", "item-box"),
                              attrs: { _i: 52 },
                              on: {
                                click: function($event) {
                                  return _vm.changeBackground(1)
                                }
                              }
                            },
                            [
                              _c("text", {
                                staticClass: _vm._$s(53, "sc", "iconfont"),
                                attrs: { _i: 53 }
                              }),
                              _c("text")
                            ]
                          ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(55, "sc", "item-box"),
                          attrs: { _i: 55 },
                          on: { click: _vm.openSetting }
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(56, "sc", "iconfont"),
                            attrs: { _i: 56 }
                          }),
                          _c("text")
                        ]
                      )
                    ]
                  )
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(58, "sc", "setting"),
                  style: _vm._$s(58, "s", {
                    bottom: _vm.settingShow ? 0 : "-100%"
                  }),
                  attrs: { _i: 58 },
                  on: {
                    touchend: function($event) {
                      $event.stopPropagation()
                    }
                  }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(59, "sc", "item"),
                      attrs: { _i: 59 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(60, "sc", "item-name"),
                        attrs: { _i: 60 }
                      }),
                      _c("view", {
                        staticClass: _vm._$s(61, "sc", "icon"),
                        attrs: { _i: 61 },
                        on: { click: _vm.bigSize }
                      }),
                      _c("view", {
                        staticClass: _vm._$s(62, "sc", "icon"),
                        attrs: { _i: 62 },
                        on: { click: _vm.smallSize }
                      })
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(63, "sc", "item"),
                      attrs: { _i: 63 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(64, "sc", "item-name"),
                        attrs: { _i: 64 }
                      }),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(65, "sc", "type-setting"),
                          class: _vm._$s(65, "c", {
                            active: _vm.lineHeight === 1
                          }),
                          attrs: { _i: 65 },
                          on: {
                            click: function($event) {
                              return _vm.changeLineHeight(1)
                            }
                          }
                        },
                        _vm._l(5, function(i, $11, $21, $31) {
                          return _c("view", {
                            key: i,
                            staticClass: _vm._$s("66-" + $31, "sc", "line"),
                            class: _vm._$s("66-" + $31, "c", {
                              active: _vm.lineHeight === 1
                            }),
                            attrs: { _i: "66-" + $31 }
                          })
                        }),
                        0
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(67, "sc", "type-setting"),
                          class: _vm._$s(67, "c", {
                            active: _vm.lineHeight === 1.5
                          }),
                          attrs: { _i: 67 },
                          on: {
                            click: function($event) {
                              return _vm.changeLineHeight(1.5)
                            }
                          }
                        },
                        _vm._l(4, function(i, $12, $22, $32) {
                          return _c("view", {
                            key: i,
                            staticClass: _vm._$s("68-" + $32, "sc", "line"),
                            class: _vm._$s("68-" + $32, "c", {
                              active: _vm.lineHeight === 1.5
                            }),
                            attrs: { _i: "68-" + $32 }
                          })
                        }),
                        0
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(69, "sc", "type-setting"),
                          class: _vm._$s(69, "c", {
                            active: _vm.lineHeight === 2
                          }),
                          attrs: { _i: 69 },
                          on: {
                            click: function($event) {
                              return _vm.changeLineHeight(2)
                            }
                          }
                        },
                        _vm._l(3, function(i, $13, $23, $33) {
                          return _c("view", {
                            key: i,
                            staticClass: _vm._$s("70-" + $33, "sc", "line"),
                            class: _vm._$s("70-" + $33, "c", {
                              active: _vm.lineHeight === 2
                            }),
                            attrs: { _i: "70-" + $33 }
                          })
                        }),
                        0
                      )
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(71, "sc", "item"),
                      attrs: { _i: 71 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(72, "sc", "item-name"),
                        attrs: { _i: 72 }
                      }),
                      _c("view", {
                        staticClass: _vm._$s(73, "sc", "icon"),
                        class: _vm._$s(73, "c", {
                          active: _vm.background === 0
                        }),
                        attrs: { _i: 73 },
                        on: {
                          click: function($event) {
                            return _vm.changeBackground(0)
                          }
                        }
                      }),
                      _c("view", {
                        staticClass: _vm._$s(74, "sc", "icon"),
                        class: _vm._$s(74, "c", {
                          active: _vm.background === 1
                        }),
                        attrs: { _i: 74 },
                        on: {
                          click: function($event) {
                            return _vm.changeBackground(1)
                          }
                        }
                      })
                    ]
                  )
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(75, "sc", "directory"),
                  class: _vm._$s(75, "c", {
                    container0: _vm.background === 0,
                    container1: _vm.background === 1
                  }),
                  style: _vm._$s(75, "s", {
                    left: _vm.directoryShow ? 0 : "-100%",
                    color: "" + _vm.colorList[_vm.background]
                  }),
                  attrs: { _i: 75 },
                  on: {
                    touchend: function($event) {
                      $event.stopPropagation()
                    }
                  }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(76, "sc", "bookname"),
                    attrs: { _i: 76 }
                  }),
                  _c(
                    "scroll-view",
                    {
                      staticClass: _vm._$s(77, "sc", "directory-list"),
                      attrs: {
                        "scroll-into-view": _vm._$s(
                          77,
                          "a-scroll-into-view",
                          "chapter" + _vm.chapterId
                        ),
                        _i: 77
                      }
                    },
                    _vm._l(
                      _vm._$s(78, "f", { forItems: _vm.directoryList }),
                      function(item, $14, $24, $34) {
                        return _c(
                          "view",
                          {
                            key: _vm._$s(78, "f", {
                              forIndex: $24,
                              key: item.chapterId
                            }),
                            staticClass: _vm._$s(
                              "78-" + $34,
                              "sc",
                              "directory-listItem"
                            ),
                            class: _vm._$s("78-" + $34, "c", {
                              active: item.chapterId === _vm.chapterId
                            }),
                            attrs: {
                              id: _vm._$s(
                                "78-" + $34,
                                "a-id",
                                "chapter" + item.chapterId
                              ),
                              _i: "78-" + $34
                            },
                            on: {
                              click: function($event) {
                                return _vm.goToChapter(item.chapterId)
                              }
                            }
                          },
                          [
                            _vm._v(
                              _vm._$s("78-" + $34, "t0-0", _vm._s(item.name))
                            )
                          ]
                        )
                      }
                    ),
                    0
                  )
                ]
              )
            ]
          )
        : _vm._e()
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!****************************************************************************!*\
  !*** D:/read_demo/pages/read/read.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./read.vue?vue&type=script&lang=js&mpType=page */ 12);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1rQixDQUFnQix5bUJBQUcsRUFBQyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/read_demo/pages/read/read.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 13));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _myProgress = _interopRequireDefault(__webpack_require__(/*! ../../components/myProgress.vue */ 16));\nvar _utils = __webpack_require__(/*! ../../utils/utils.js */ 28);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n{\n  components: {\n    myProgress: _myProgress.default },\n\n  data: function data() {\n    return {\n      chapterId: '',\n      chapterName: '',\n      preChapterName: '',\n      nextChapterName: '',\n      textFixed: \"<p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p>\",\n      text: '',\n      nextText: '',\n      preText: '',\n      directoryList: [], //目录列表\n      preTranslateX: 0, //上一章的位移\n\n      showAnimation: false, //是否开启动画\n      pages: [],\n      prePages: [],\n      nextPages: [],\n      contentWidth: 0,\n      contentHeight: 0,\n      windowWidth: 0,\n      windowHeight: 0,\n      platform: '', //设备\n      batteryState: '', //电池状态\n      batteryLevel: '', //电量\n      statusBarHeight: 0, //状态栏高度\n\n      columnGap: 40,\n      currentPage: 0,\n      touchStartX: 0, // 触屏起始点\n      touchStartT: 0, //触屏起始时间\n      touchTimer: null, //用于触摸节流\n      menuShow: false, //菜单栏box是否渲染\n      itemShow: false, // 菜单栏动画控制\n      settingShow: false, //设置栏动画控制\n      directoryShow: false, //目录动画控制\n      turnPageTime: 0.5, //翻页动画时间\n\n      fontSize: '',\n      lineHeight: '',\n      background: '',\n      colorList: ['#000', '#666'],\n\n      nextChapterLoaded: false, //下一章是否加载完毕\n      prechapterLoaded: false, //上一章是否加载完毕\n      turnChapter: false //加载章节后是否跳转页面\n    };\n  },\n  onLoad: function onLoad() {\n    this.getSystemInfo();\n  },\n  mounted: function mounted() {\n    this.initPage();\n  },\n  computed: {\n    progress: function progress() {\n      return this.currentPage / (this.pages.length - 1);\n    } },\n\n  methods: {\n\n    /**\n             * 返回上一页面\n             **/\n    back: function back() {\n      uni.navigateBack();\n    },\n\n    /**\n       * 获取设备信息\n       **/\n    getSystemInfo: function getSystemInfo() {var _this = this;var _uni$getSystemInfoSyn =\n\n      uni.getSystemInfoSync(),windowWidth = _uni$getSystemInfoSyn.windowWidth,windowHeight = _uni$getSystemInfoSyn.windowHeight,statusBarHeight = _uni$getSystemInfoSyn.statusBarHeight,platform = _uni$getSystemInfoSyn.platform;\n      this.statusBarHeight = statusBarHeight;\n      this.windowWidth = windowWidth;\n      this.windowHeight = windowHeight;\n      this.contentWidth = windowWidth - 40;\n      this.contentHeight = windowHeight - 60;\n      this.platform = platform;\n\n\n      plus.navigator.setFullscreen(true);\n      // 获取安卓电量\n      if (this.platform === 'ios') {\n        var UIDevice = plus.ios.import(\"UIDevice\");\n        var dev = UIDevice.currentDevice();\n        if (!dev.isBatteryMonitoringEnabled()) {\n          dev.setBatteryMonitoringEnabled(true);\n        }\n        this.batteryState = dev.batteryState();\n        this.batteryLevel = dev.batteryLevel();\n      } else\n      {\n        var main = plus.android.runtimeMainActivity();\n        var Intent = plus.android.importClass('android.content.Intent');\n        var recevier = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', {\n          onReceive: function onReceive(context, intent) {\n            var action = intent.getAction();\n            if (action == Intent.ACTION_BATTERY_CHANGED) {\n              _this.batteryState = intent.getIntExtra(\"status\", 0); //电池状态  \n              _this.batteryLevel = intent.getIntExtra(\"level\", 0); //电量\n            }\n          } });\n\n        var IntentFilter = plus.android.importClass('android.content.IntentFilter');\n        var filter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);\n        main.registerReceiver(recevier, filter);\n      }\n\n\n\n      // 获取字体、排版等信息\n      this.fontSize = uni.getStorageSync('fontSize') || 16;\n      this.lineHeight = uni.getStorageSync('lineHeight') || 1.5;\n      this.background = uni.getStorageSync('background') || 0;\n    },\n\n    /**\n       * 获取数据初始化页面\n       **/\n    initPage: function initPage() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                _this2.preTranslateX = -_this2.windowWidth - 20;_context.next = 3;return (\n                  _this2.getData());case 3:\n                _this2.$nextTick(function () {\n                  _this2.calcPages();\n                });case 4:case \"end\":return _context.stop();}}}, _callee);}))();\n    },\n\n    /**\n       * 计算阅读页长度,并生成pages,并跳转至某页（如果有）\n       **/\n    calcPages: function calcPages(type, progress) {var _this3 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.select('#text').boundingClientRect(function (data) {\n        var width = data.width;\n        var height = data.height;\n        _this3.pages = _this3.genPages(width, height);\n        if (type === 1) {\n          _this3.currentPage = Math.floor((_this3.pages.length - 1) * progress);\n          _this3.goToPage(_this3.currentPage);\n        }\n      }).exec();\n      this.calcPrePages();\n      this.calcNextPages();\n    },\n\n    /**\n       * 计算上一章阅读页长度,并生成pages,并跳转至某页（如果有）\n       **/\n    calcPrePages: function calcPrePages() {var _this4 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.select('#preText').boundingClientRect(function (data) {\n        var width = data.width;\n        var height = data.height;\n        _this4.prePages = _this4.genPages(width, height);\n        if (_this4.turnChapter) {\n          _this4.turnChapter = false;\n          _this4.preChapter();\n        }\n      }).exec();\n    },\n\n    /**\n       * 计算下一章阅读页长度,并生成pages,并跳转至某页（如果有）\n       **/\n    calcNextPages: function calcNextPages() {var _this5 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.select('#nextText').boundingClientRect(function (data) {\n        var width = data.width;\n        var height = data.height;\n        _this5.nextPages = _this5.genPages(width, height);\n        if (_this5.turnChapter) {\n          _this5.turnChapter = false;\n          _this5.nextChapter();\n        }\n      }).exec();\n    },\n\n\n    /**\n       * 生成阅读页pages\n       **/\n    genPages: function genPages(width, height) {\n      var arr = [];\n      var id = 0;\n\n      if (this.platform === 'ios') {\n        while (height > 0) {\n          arr.push({\n            id: id,\n            zIndex: 200 - id,\n            translateX: 0 });\n\n          id++;\n          height -= this.contentHeight;\n        }\n      } else\n      {\n        while (width > 0) {\n          arr.push({\n            id: id,\n            zIndex: 200 - id,\n            translateX: 0 });\n\n          id++;\n          width -= this.contentWidth + this.columnGap;\n        }\n      }\n\n\n\n\n\n\n\n\n\n\n\n\n      return arr;\n    },\n\n    /**\n       * 触摸开始\n       **/\n    touchStart: function touchStart(e) {\n      this.showAnimation = false;\n      this.touchStartX = e.touches[0].clientX;\n      this.touchStartT = e.timeStamp;\n    },\n\n    /**\n       * 触摸结束\n       **/\n    touchEnd: function touchEnd(e) {\n      this.showAnimation = true;\n      var deltaX = e.changedTouches[0].clientX - this.touchStartX;\n      if (deltaX === 0) {//deltaX === 0为点击\n        if (e.changedTouches[0].clientX < this.windowWidth / 3) {\n          this.prePage();\n        } else\n        if (e.changedTouches[0].clientX > this.windowWidth / 3 * 2) {\n          this.nextPage();\n        } else\n        {\n          this.showMenu();\n        }\n      } else\n      {\n        if (deltaX > this.windowWidth / 2) {\n          this.prePage();\n        } else\n        if (deltaX < -this.windowWidth / 2) {\n          this.nextPage();\n        } else\n        {\n          var v = 0;\n          v = deltaX / (e.timeStamp - this.touchStartT);\n          if (v <= 0.1 && v > 0) {//翻页速度慢，取消翻页\n            if (this.currentPage !== 0) {\n              this.pages[this.currentPage - 1].translateX = -this.windowWidth - 20;\n            } else\n            {\n              this.preTranslateX = -this.windowWidth - 20;\n            }\n          } else\n          if (v >= -0.1 && v < 0) {//翻页速度慢，取消翻页\n            this.pages[this.currentPage].translateX = 0;\n          } else\n          if (v > 0.1) {\n            this.prePage();\n          } else\n          if (v < -0.1) {\n            this.nextPage();\n          }\n        }\n      }\n    },\n\n    /**\n       * 触摸\n       **/\n    touchMove: function touchMove(e) {var _this6 = this;\n      if (!this.touchTimer) {\n        var deltaX = e.touches[0].clientX - this.touchStartX;\n        if (deltaX < 0) {\n          if (this.currentPage === this.pages.length - 1) {//如果翻至最后一页\n            if (!this.nextChapterLoaded) {\n              this.turnChapter = true;\n              uni.showLoading({\n                mask: true,\n                title: '正在加载中请稍候' });\n\n              return;\n            }\n            if (this.nextText.length === 0) {//如果没有下一章\n              uni.showToast({\n                title: '这是最后一章',\n                icon: 'none' });\n\n            } else\n            {\n              this.pages[this.currentPage].translateX = deltaX;\n            }\n          } else\n          {\n            this.pages[this.currentPage].translateX = deltaX;\n          }\n        } else\n        {\n          if (this.currentPage === 0) {//如果是第一页\n            if (!this.prechapterLoaded) {\n              this.turnChapter = true;\n              uni.showLoading({\n                mask: true,\n                title: '正在加载中请稍候' });\n\n              return;\n            }\n            if (this.preText.length === 0) {//如果没有上一章\n              uni.showToast({\n                title: '这是第一章',\n                icon: 'none' });\n\n            } else\n            {\n              this.preTranslateX = -this.windowWidth + deltaX;\n            }\n          } else\n          {\n            this.pages[this.currentPage - 1].translateX = -this.windowWidth + deltaX;\n          }\n        }\n        this.touchTimer = setTimeout(function () {\n          _this6.touchTimer = null;\n        }, 100);\n      }\n    },\n\n    /**\n       * 呼出菜单\n       **/\n    showMenu: function showMenu() {var _this7 = this;\n\n      plus.navigator.setFullscreen(false);\n\n      this.menuShow = true;\n      setTimeout(function () {\n        _this7.itemShow = true;\n      }, 100);\n    },\n\n    /**\n       * 关闭菜单\n       **/\n    closeMenu: function closeMenu() {var _this8 = this;\n\n      plus.navigator.setFullscreen(true);\n\n      this.itemShow = false;\n      this.settingShow = false;\n      this.directoryShow = false;\n      setTimeout(function () {\n        _this8.menuShow = false;\n      }, 300);\n    },\n\n    /**\n       * 关闭菜单栏，呼出设置栏\n       **/\n    openSetting: function openSetting() {var _this9 = this;\n\n      this.itemShow = false;\n      setTimeout(function () {\n        _this9.settingShow = true;\n      }, 300);\n    },\n\n    /**\n       * 关闭菜单栏，呼出目录栏\n       **/\n    openDirectory: function openDirectory() {var _this10 = this;\n\n      plus.navigator.setFullscreen(true);\n\n      this.itemShow = false;\n      setTimeout(function () {\n        _this10.directoryShow = true;\n      }, 300);\n    },\n\n    /**\n       * 上一页\n       **/\n    prePage: function prePage() {var _this11 = this;\n      if (this.currentPage === 0) {\n        if (!this.prechapterLoaded) {\n          this.preChapter();\n          return;\n        }\n        if (this.preText.length === 0) {\n          uni.showToast({\n            title: '这是第一章',\n            icon: 'none' });\n\n        } else\n        {\n          uni.showToast({\n            title: this.preChapterName,\n            icon: 'none' });\n\n          this.preTranslateX = 0;\n          // 动画结束后获取上一章,重置页面\n          setTimeout(function () {\n            _this11.preChapter();\n          }, this.turnPageTime * 1000);\n        }\n      } else\n      {\n        this.pages[this.currentPage - 1].translateX = 0;\n        this.currentPage--;\n      }\n    },\n\n    /**\n       * 下一页\n       **/\n    nextPage: function nextPage() {var _this12 = this;\n      if (this.currentPage === this.pages.length - 1) {\n        if (!this.nextChapterLoaded) {//下一章未加载完毕\n          this.nextChapter();\n          return;\n        }\n        if (this.nextText.length === 0) {\n          uni.showToast({\n            title: '这是最后一章',\n            icon: 'none' });\n\n        } else\n        {\n          uni.showToast({\n            title: this.nextChapterName,\n            icon: 'none' });\n\n          this.pages[this.currentPage].translateX = -this.windowWidth - 20;\n          // 动画结束后获取下一章,重置页面\n          setTimeout(function () {\n            _this12.nextChapter();\n          }, this.turnPageTime * 1000);\n        }\n      } else\n      {\n        this.pages[this.currentPage].translateX = -this.windowWidth - 20;\n        this.currentPage++;\n      }\n\n    },\n\n    /**\n       * 获取下一章,重置页面，将本章变为前一章，将下一章变为本章，获取下一章内容\n       **/\n    nextChapter: function nextChapter() {\n      if (!this.nextChapterLoaded) {\n        this.turnChapter = true;\n        uni.showLoading({\n          mask: true,\n          title: '正在加载中请稍候' });\n\n        return;\n      }\n      this.chapterId++;\n      this.preText = this.text;\n      this.text = this.nextText;\n      this.nextText = '';\n      this.getText(this.chapterId + 1, 'next');\n      this.prePages = this.pages.map(function (value) {\n        value.translateX = 0;\n        return value;\n      });\n      this.pages = [].concat(this.nextPages);\n      this.nextPages = [];\n      this.preChapterName = this.chapterName;\n      this.chapterName = this.nextChapterName;\n      this.nextChapterName = '';\n      this.currentPage = 0;\n      this.goToPage(this.currentPage);\n\n    },\n\n    /**\n       * 获取上一章,重置页面，将本章变为后一章，将上一章变为本章，获取上一章内容\n       **/\n    preChapter: function preChapter() {\n      if (!this.preChapterLoaded) {\n        this.turnChapter = true;\n        uni.showLoading({\n          mask: true,\n          title: '正在加载中请稍候' });\n\n        return;\n      }\n      this.preTranslateX = -this.windowWidth - 20;\n      this.chapterId--;\n      this.nextText = this.text;\n      this.text = this.preText;\n      this.preText = '';\n      this.getText(this.chapterId - 1, 'pre');\n      this.nextPages = this.pages.map(function (value) {\n        value.translateX = 0;\n        return value;\n      });\n      this.pages = [].concat(this.prePages);\n      this.prePages = [];\n      this.nextChapterName = this.chapterName;\n      this.chapterName = this.preChapterName;\n      this.preChapterName = '';\n\n      this.currentPage = this.pages.length - 1;\n      this.goToPage(this.currentPage);\n    },\n\n    /**\n       * 根据页码跳转\n       **/\n    goToPage: function goToPage(page) {var _this13 = this;\n      if (page > this.pages.length - 1) {\n        page = this.pages.length - 1;\n      }\n      this.showAnimation = false;\n      this.currentPage = page;\n      this.pages.forEach(function (value, index) {\n        if (index < page) {\n          value.translateX = -_this13.windowWidth - 20;\n        } else\n        {\n          value.translateX = 0;\n        }\n      });\n    },\n\n    /**\n       * 加大字体\n       **/\n    bigSize: function bigSize() {var _this14 = this;\n      if (this.fontSize < 25) {\n        var progress = this.progress;\n        this.fontSize++;\n        uni.setStorageSync('fontSize', this.fontSize);\n        this.$nextTick(function () {\n          _this14.calcPages(1, progress);\n        });\n      } else\n      {\n        uni.showToast({\n          title: '最大字体',\n          icon: 'none' });\n\n      }\n\n\n    },\n\n    /**\n       * 缩小字体\n       **/\n    smallSize: function smallSize() {var _this15 = this;\n      if (this.fontSize > 14) {\n        var progress = this.progress;\n        this.fontSize--;\n        uni.setStorageSync('fontSize', this.fontSize);\n        this.$nextTick(function () {\n          _this15.calcPages(1, progress);\n        });\n      } else\n      {\n        uni.showToast({\n          title: '最小字体',\n          icon: 'none' });\n\n      }\n    },\n\n    /**\n       * 改变行距\n       **/\n    changeLineHeight: function changeLineHeight(lineHeight) {var _this16 = this;\n      if (lineHeight === this.lineHeight) {\n        return;\n      } else\n      {\n        var progress = this.progress;\n        this.lineHeight = lineHeight;\n        uni.setStorageSync('lineHeight', this.lineHeight);\n        this.$nextTick(function () {\n          _this16.calcPages(1, progress);\n        });\n      }\n    },\n\n    /**\n       * 改变背景\n       **/\n    changeBackground: function changeBackground(background) {\n      if (background === this.background) {\n        return;\n      } else\n      {\n        this.background = background;\n        uni.setStorageSync('background', this.background);\n      }\n    },\n\n    /**\n       * 获取数据，包括阅读到第几章，以及前中后三章内容\n       **/\n    getData: function getData() {var _this17 = this;\n      uni.showLoading({ mask: true });\n      return new Promise(function (resolve, reject) {\n        // 模拟网络时间\n        setTimeout(function () {\n          uni.hideLoading();\n          _this17.nextChapterLoaded = true;\n          _this17.prechapterLoaded = true;\n          _this17.chapterId = 2;\n          _this17.chapterName = \"\\u7B2C\".concat(_this17.chapterId, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n          _this17.preChapterName = \"\\u7B2C\".concat(_this17.chapterId - 1, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n          _this17.nextChapterName = \"\\u7B2C\".concat(_this17.chapterId + 1, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n          _this17.text = _this17.chapterId + _this17.textFixed;\n          _this17.preText = _this17.chapterId - 1 + _this17.textFixed;\n          _this17.nextText = _this17.chapterId + 1 + _this17.textFixed;\n          // 生成目录，正常是后端传过来\n          for (var i = 1; i <= 100; i++) {\n            _this17.directoryList.push({\n              chapterId: i,\n              name: \"\\u7B2C\".concat(i, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\") });\n\n          }\n          resolve();\n        }, 1000);\n      });\n\n    },\n\n    /**\n       * 获取上一章或下一章数据\n       **/\n    getText: function getText(chapterId, type) {var _this18 = this;\n      if (type === 'next') {\n        this.nextChapterLoaded = false;\n      } else\n      {\n        this.prechapterLoaded = false;\n      }\n      // 模拟网络时间\n      setTimeout(function () {\n        if (_this18.turnChapter) {\n          uni.hideLoading();\n        }\n        if (type === 'next') {\n          _this18.nextChapterLoaded = true;\n          _this18.nextText = chapterId + _this18.textFixed;\n          _this18.nextChapterName = \"\\u7B2C\".concat(chapterId, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n          _this18.$nextTick(function () {\n            _this18.calcNextPages();\n          });\n        } else\n        {\n          _this18.prechapterLoaded = true;\n          if (chapterId === 0) {\n            _this18.preText = '';\n            _this18.preChapterName = '';\n          } else\n          {\n            _this18.preText = chapterId + _this18.textFixed;\n            _this18.preChapterName = \"\\u7B2C\".concat(chapterId, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n            _this18.$nextTick(function () {\n              _this18.calcPrePages();\n            });\n          }\n        }\n\n      }, 1000);\n    },\n\n    /**\n       * 跳转到指定章节\n       **/\n    goToChapter: function goToChapter(chapterId) {var _this19 = this;\n      this.closeMenu();\n      uni.showLoading({ mask: true });\n      return new Promise(function (resolve, reject) {\n        // 模拟网络时间\n\n        setTimeout(function () {\n          uni.hideLoading();\n          _this19.nextChapterLoaded = true;\n          _this19.prechapterLoaded = true;\n          _this19.chapterId = chapterId;\n          _this19.chapterName = \"\\u7B2C\".concat(_this19.chapterId, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n          _this19.preChapterName = \"\\u7B2C\".concat(_this19.chapterId - 1, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n          _this19.nextChapterName = \"\\u7B2C\".concat(_this19.chapterId + 1, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n          _this19.text = _this19.chapterId + _this19.textFixed;\n          _this19.preText = _this19.chapterId - 1 + _this19.textFixed;\n          _this19.nextText = _this19.chapterId + 1 + _this19.textFixed;\n          _this19.$nextTick(function () {\n            _this19.calcPages(1, 0);\n          });\n          resolve();\n        }, 1000);\n      });\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcmVhZC9yZWFkLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdPQTtBQUNBLGlFO0FBQ0E7QUFDQTtBQUNBLG1DQURBLEVBREE7O0FBSUEsTUFKQSxrQkFJQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxxQkFGQTtBQUdBLHdCQUhBO0FBSUEseUJBSkE7QUFLQSxvME9BTEE7QUFNQSxjQU5BO0FBT0Esa0JBUEE7QUFRQSxpQkFSQTtBQVNBLHVCQVRBLEVBU0E7QUFDQSxzQkFWQSxFQVVBOztBQUVBLDBCQVpBLEVBWUE7QUFDQSxlQWJBO0FBY0Esa0JBZEE7QUFlQSxtQkFmQTtBQWdCQSxxQkFoQkE7QUFpQkEsc0JBakJBO0FBa0JBLG9CQWxCQTtBQW1CQSxxQkFuQkE7QUFvQkEsa0JBcEJBLEVBb0JBO0FBQ0Esc0JBckJBLEVBcUJBO0FBQ0Esc0JBdEJBLEVBc0JBO0FBQ0Esd0JBdkJBLEVBdUJBOztBQUVBLG1CQXpCQTtBQTBCQSxvQkExQkE7QUEyQkEsb0JBM0JBLEVBMkJBO0FBQ0Esb0JBNUJBLEVBNEJBO0FBQ0Esc0JBN0JBLEVBNkJBO0FBQ0EscUJBOUJBLEVBOEJBO0FBQ0EscUJBL0JBLEVBK0JBO0FBQ0Esd0JBaENBLEVBZ0NBO0FBQ0EsMEJBakNBLEVBaUNBO0FBQ0EsdUJBbENBLEVBa0NBOztBQUVBLGtCQXBDQTtBQXFDQSxvQkFyQ0E7QUFzQ0Esb0JBdENBO0FBdUNBLGlDQXZDQTs7QUF5Q0EsOEJBekNBLEVBeUNBO0FBQ0EsNkJBMUNBLEVBMENBO0FBQ0Esd0JBM0NBLENBMkNBO0FBM0NBO0FBNkNBLEdBbERBO0FBbURBLFFBbkRBLG9CQW1EQTtBQUNBO0FBQ0EsR0FyREE7QUFzREEsU0F0REEscUJBc0RBO0FBQ0E7QUFDQSxHQXhEQTtBQXlEQTtBQUNBLFlBREEsc0JBQ0E7QUFDQTtBQUNBLEtBSEEsRUF6REE7O0FBOERBOztBQUVBOzs7QUFHQSxRQUxBLGtCQUtBO0FBQ0E7QUFDQSxLQVBBOztBQVNBOzs7QUFHQSxpQkFaQSwyQkFZQTs7QUFFQSw2QkFGQSxDQUVBLFdBRkEseUJBRUEsV0FGQSxDQUVBLFlBRkEseUJBRUEsWUFGQSxDQUVBLGVBRkEseUJBRUEsZUFGQSxDQUVBLFFBRkEseUJBRUEsUUFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVJBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFEQSxDQUNBO0FBQ0Esa0VBRkEsQ0FFQTtBQUNBO0FBQ0EsV0FQQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F6REE7O0FBMkRBOzs7QUFHQSxZQTlEQSxzQkE4REE7QUFDQSxnRUFEQTtBQUVBLGtDQUZBO0FBR0E7QUFDQTtBQUNBLGlCQUZBLEVBSEE7QUFNQSxLQXBFQTs7QUFzRUE7OztBQUdBLGFBekVBLHFCQXlFQSxJQXpFQSxFQXlFQSxRQXpFQSxFQXlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BUkEsRUFRQSxJQVJBO0FBU0E7QUFDQTtBQUNBLEtBdEZBOztBQXdGQTs7O0FBR0EsZ0JBM0ZBLDBCQTJGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BUkEsRUFRQSxJQVJBO0FBU0EsS0F0R0E7O0FBd0dBOzs7QUFHQSxpQkEzR0EsMkJBMkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FSQSxFQVFBLElBUkE7QUFTQSxLQXRIQTs7O0FBeUhBOzs7QUFHQSxZQTVIQSxvQkE0SEEsS0E1SEEsRUE0SEEsTUE1SEEsRUE0SEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsNEJBRkE7QUFHQSx5QkFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQSxPQVZBO0FBV0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSw0QkFGQTtBQUdBLHlCQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQSxLQW5LQTs7QUFxS0E7OztBQUdBLGNBeEtBLHNCQXdLQSxDQXhLQSxFQXdLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBNUtBOztBQThLQTs7O0FBR0EsWUFqTEEsb0JBaUxBLENBakxBLEVBaUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQTtBQUNBO0FBQ0EsU0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLE9BVkE7QUFXQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0E7QUFDQTtBQUNBLFNBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FQQTtBQVFBO0FBQ0E7QUFDQSxXQUZBO0FBR0E7QUFDQTtBQUNBLFdBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E1TkE7O0FBOE5BOzs7QUFHQSxhQWpPQSxxQkFpT0EsQ0FqT0EsRUFpT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEsaUNBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLDRCQUZBOztBQUlBLGFBTEE7QUFNQTtBQUNBO0FBQ0E7QUFDQSxXQWxCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQSxTQXZCQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSxpQ0FGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQURBO0FBRUEsNEJBRkE7O0FBSUEsYUFMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBLFdBbEJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQSxHQUZBO0FBR0E7QUFDQSxLQXhSQTs7QUEwUkE7OztBQUdBLFlBN1JBLHNCQTZSQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsR0FGQTtBQUdBLEtBclNBOztBQXVTQTs7O0FBR0EsYUExU0EsdUJBMFNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsR0FGQTtBQUdBLEtBcFRBOztBQXNUQTs7O0FBR0EsZUF6VEEseUJBeVRBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxHQUZBO0FBR0EsS0EvVEE7O0FBaVVBOzs7QUFHQSxpQkFwVUEsMkJBb1VBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxHQUZBO0FBR0EsS0E1VUE7O0FBOFVBOzs7QUFHQSxXQWpWQSxxQkFpVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEsd0JBRkE7O0FBSUEsU0FMQTtBQU1BO0FBQ0E7QUFDQSxzQ0FEQTtBQUVBLHdCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxFQUVBLHdCQUZBO0FBR0E7QUFDQSxPQXRCQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBN1dBOztBQStXQTs7O0FBR0EsWUFsWEEsc0JBa1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLHdCQUZBOztBQUlBLFNBTEE7QUFNQTtBQUNBO0FBQ0EsdUNBREE7QUFFQSx3QkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsRUFFQSx3QkFGQTtBQUdBO0FBQ0EsT0F0QkE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0EvWUE7O0FBaVpBOzs7QUFHQSxlQXBaQSx5QkFvWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLDJCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBOWFBOztBQWdiQTs7O0FBR0EsY0FuYkEsd0JBbWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSwyQkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBOWNBOztBQWdkQTs7O0FBR0EsWUFuZEEsb0JBbWRBLElBbmRBLEVBbWRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQVBBO0FBUUEsS0FqZUE7O0FBbWVBOzs7QUFHQSxXQXRlQSxxQkFzZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0EsT0FQQTtBQVFBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLHNCQUZBOztBQUlBOzs7QUFHQSxLQXZmQTs7QUF5ZkE7OztBQUdBLGFBNWZBLHVCQTRmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQSxPQVBBO0FBUUE7QUFDQTtBQUNBLHVCQURBO0FBRUEsc0JBRkE7O0FBSUE7QUFDQSxLQTNnQkE7O0FBNmdCQTs7O0FBR0Esb0JBaGhCQSw0QkFnaEJBLFVBaGhCQSxFQWdoQkE7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQTtBQUNBLEtBNWhCQTs7QUE4aEJBOzs7QUFHQSxvQkFqaUJBLDRCQWlpQkEsVUFqaUJBLEVBaWlCQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXppQkE7O0FBMmlCQTs7O0FBR0EsV0E5aUJBLHFCQThpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSx5RUFGQTs7QUFJQTtBQUNBO0FBQ0EsU0FuQkEsRUFtQkEsSUFuQkE7QUFvQkEsT0F0QkE7O0FBd0JBLEtBeGtCQTs7QUEwa0JBOzs7QUFHQSxXQTdrQkEsbUJBNmtCQSxTQTdrQkEsRUE2a0JBLElBN2tCQSxFQTZrQkE7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBO0FBR0EsU0FQQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRkE7QUFHQTtBQUNBOztBQUVBLE9BM0JBLEVBMkJBLElBM0JBO0FBNEJBLEtBam5CQTs7QUFtbkJBOzs7QUFHQSxlQXRuQkEsdUJBc25CQSxTQXRuQkEsRUFzbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBO0FBR0E7QUFDQSxTQWZBLEVBZUEsSUFmQTtBQWdCQSxPQW5CQTtBQW9CQSxLQTdvQkEsRUE5REEsRSIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8IS0tIOazqOaEj++8muacgOWkmjEwMOmhte+8jOWkmuS6huimgeaUuXotaW5kZXjmnIDlpKflgLwgLS0+XHJcblx0PHZpZXc+XHJcblx0XHRcclxuXHRcdDwhLS0g5pON5L2c5bGCIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIiBAdG91Y2hzdGFydD1cInRvdWNoU3RhcnRcIiBAdG91Y2hlbmQ9XCJ0b3VjaEVuZFwiIEB0b3VjaG1vdmU9XCJ0b3VjaE1vdmVcIj5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PCEtLSDku4XnlKjkuo7orqHnrpcgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbnRhaW5lciBoaWRkZW5cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFwdGVyXCI+XHJcblx0XHRcdFx0e3tjaGFwdGVyTmFtZX19XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgaWQ9XCJjb250ZW50XCIgY2xhc3M9XCJjb250ZW50XCJcclxuXHRcdFx0XHQ6c3R5bGU9XCJ7aGVpZ2h0OmAke2NvbnRlbnRIZWlnaHR9cHhgLCB3aWR0aDogYCR7Y29udGVudFdpZHRofXB4YCxcclxuXHRcdFx0XHQgY29sdW1uczogYCR7Y29udGVudFdpZHRofXB4YCwgY29sdW1uR2FwOmAke2NvbHVtbkdhcH1weGB9XCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm9vay1pbm5lclwiIGlkPVwidGV4dFwiIHYtaHRtbD1cInRleHRcIlxyXG5cdFx0XHRcdFx0OnN0eWxlPVwie2ZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsIGxpbmVIZWlnaHQ6IGAke2xpbmVIZWlnaHQqZm9udFNpemV9cHhgfVwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJvdHRvbS1iYXJcIj5cclxuXHRcdFx0XHTmmL7npLrnlLXph4/jgIHpobXnoIFcclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbnRhaW5lciBoaWRkZW5cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFwdGVyXCI+XHJcblx0XHRcdFx0e3tjaGFwdGVyTmFtZX19XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgaWQ9XCJjb250ZW50XCIgY2xhc3M9XCJjb250ZW50XCJcclxuXHRcdFx0XHQ6c3R5bGU9XCJ7aGVpZ2h0OmAke2NvbnRlbnRIZWlnaHR9cHhgLCB3aWR0aDogYCR7Y29udGVudFdpZHRofXB4YCxcclxuXHRcdFx0XHQgY29sdW1uczogYCR7Y29udGVudFdpZHRofXB4YCwgY29sdW1uR2FwOmAke2NvbHVtbkdhcH1weGB9XCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm9vay1pbm5lclwiIGlkPVwicHJlVGV4dFwiIHYtaHRtbD1cInByZVRleHRcIlxyXG5cdFx0XHRcdFx0OnN0eWxlPVwie2ZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsIGxpbmVIZWlnaHQ6IGAke2xpbmVIZWlnaHQqZm9udFNpemV9cHhgfVwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJvdHRvbS1iYXJcIj5cclxuXHRcdFx0XHTmmL7npLrnlLXph4/jgIHpobXnoIFcclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbnRhaW5lciBoaWRkZW5cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFwdGVyXCI+XHJcblx0XHRcdFx0e3tjaGFwdGVyTmFtZX19XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgaWQ9XCJjb250ZW50XCIgY2xhc3M9XCJjb250ZW50XCJcclxuXHRcdFx0XHQ6c3R5bGU9XCJ7aGVpZ2h0OmAke2NvbnRlbnRIZWlnaHR9cHhgLCB3aWR0aDogYCR7Y29udGVudFdpZHRofXB4YCxcclxuXHRcdFx0XHQgY29sdW1uczogYCR7Y29udGVudFdpZHRofXB4YCwgY29sdW1uR2FwOmAke2NvbHVtbkdhcH1weGB9XCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm9vay1pbm5lclwiIGlkPVwibmV4dFRleHRcIiB2LWh0bWw9XCJuZXh0VGV4dFwiXHJcblx0XHRcdFx0XHQ6c3R5bGU9XCJ7Zm9udFNpemU6IGAke2ZvbnRTaXplfXB4YCwgbGluZUhlaWdodDogYCR7bGluZUhlaWdodCpmb250U2l6ZX1weGB9XCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tLWJhclwiPlxyXG5cdFx0XHRcdOaYvuekuueUtemHj+OAgemhteeggVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDwhLS0g6ZiF6K+76aG1IC0tPlxyXG5cdFx0XHJcblx0XHQ8IS0tIOS4iuS4gOeroCAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY29udGFpbmVyXCIgOmNsYXNzPVwie2NvbnRhaW5lcjA6IGJhY2tncm91bmQgPT09IDAsIGNvbnRhaW5lcjE6IGJhY2tncm91bmQgPT09IDF9XCJcclxuXHRcdFx0OnN0eWxlPVwie3pJbmRleDogMzAwLCB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7cHJlVHJhbnNsYXRlWH1weClgLCB0cmFuc2l0aW9uOiBgYWxsICR7c2hvd0FuaW1hdGlvbj90dXJuUGFnZVRpbWU6MH1zYH1cIlxyXG5cdFx0PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNoYXB0ZXJcIj5cclxuXHRcdFx0XHR7e3ByZUNoYXB0ZXJOYW1lfX1cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIlxyXG5cdFx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6YCR7Y29udGVudEhlaWdodH1weGAsIHdpZHRoOiBgJHtjb250ZW50V2lkdGh9cHhgLFxyXG5cdFx0XHRcdGZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsY29sb3I6IGAke2NvbG9yTGlzdFtiYWNrZ3JvdW5kXX1gLFxyXG5cdFx0XHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7KHByZVBhZ2VzLmxlbmd0aC0xKSooY29udGVudFdpZHRoK2NvbHVtbkdhcCl9cHgpYCxcclxuXHRcdFx0XHRjb2x1bW5zOiBgJHtjb250ZW50V2lkdGh9cHhgLCBjb2x1bW5HYXA6YCR7Y29sdW1uR2FwfXB4YH1cIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJib29rLWlubmVyXCIgdi1odG1sPVwidGV4dFwiXHJcblx0XHRcdFx0XHQ6c3R5bGU9XCJ7Zm9udFNpemU6IGAke2ZvbnRTaXplfXB4YCwgbGluZUhlaWdodDogYCR7bGluZUhlaWdodCpmb250U2l6ZX1weGB9XCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tLWJhclwiPlxyXG5cdFx0XHRcdHt7cHJlUGFnZXMubGVuZ3RofX0ve3twcmVQYWdlcy5sZW5ndGh9fVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDwhLS0g5pys56ugIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjb250YWluZXJcIiA6Y2xhc3M9XCJ7Y29udGFpbmVyMDogYmFja2dyb3VuZCA9PT0gMCwgY29udGFpbmVyMTogYmFja2dyb3VuZCA9PT0gMX1cIlxyXG5cdFx0XHR2LWZvcj1cIml0ZW0gb2YgcGFnZXNcIiA6a2V5PVwiaXRlbS5pZFwiIFxyXG5cdFx0XHQ6c3R5bGU9XCJ7ekluZGV4OiBpdGVtLnpJbmRleCwgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke2l0ZW0udHJhbnNsYXRlWH1weClgLCB0cmFuc2l0aW9uOiBgYWxsICR7c2hvd0FuaW1hdGlvbj90dXJuUGFnZVRpbWU6MH1zYH1cIlxyXG5cdFx0PlxyXG5cdFx0PCEtLSB2LWlmPVwiaXRlbS5pZCAtIGN1cnJlbnRQYWdlIDwgMiAmJiBpdGVtLmlkIC0gY3VycmVudFBhZ2UgPiAtMlwiIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNoYXB0ZXJcIj5cclxuXHRcdFx0XHR7e2NoYXB0ZXJOYW1lfX1cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIlxyXG5cdFx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6YCR7Y29udGVudEhlaWdodH1weGAsIHdpZHRoOiBgJHtjb250ZW50V2lkdGh9cHhgLFxyXG5cdFx0XHRcdGZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsY29sb3I6IGAke2NvbG9yTGlzdFtiYWNrZ3JvdW5kXX1gLFxyXG5cdFx0XHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7aXRlbS5pZCooY29udGVudFdpZHRoK2NvbHVtbkdhcCl9cHgpYCxcclxuXHRcdFx0XHRjb2x1bW5zOiBgJHtjb250ZW50V2lkdGh9cHhgLCBjb2x1bW5HYXA6YCR7Y29sdW1uR2FwfXB4YH1cIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJib29rLWlubmVyXCIgdi1odG1sPVwidGV4dFwiXHJcblx0XHRcdFx0XHQ6c3R5bGU9XCJ7Zm9udFNpemU6IGAke2ZvbnRTaXplfXB4YCwgbGluZUhlaWdodDogYCR7bGluZUhlaWdodCpmb250U2l6ZX1weGB9XCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tLWJhclwiPlxyXG5cdFx0XHRcdHt7aXRlbS5pZCArIDEgfX0ve3twYWdlcy5sZW5ndGh9fVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDwhLS0g5LiL5LiA56ugIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjb250YWluZXJcIiA6Y2xhc3M9XCJ7Y29udGFpbmVyMDogYmFja2dyb3VuZCA9PT0gMCwgY29udGFpbmVyMTogYmFja2dyb3VuZCA9PT0gMX1cIlxyXG5cdFx0XHQ6c3R5bGU9XCJ7ekluZGV4OiAxMDAsIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMHB4KWB9XCJcclxuXHRcdFx0di1pZj1cInBhZ2VzLmxlbmd0aFwiXHJcblx0XHQ+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhcHRlclwiPlxyXG5cdFx0XHRcdHt7bmV4dENoYXB0ZXJOYW1lfX1cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIlxyXG5cdFx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6YCR7Y29udGVudEhlaWdodH1weGAsIHdpZHRoOiBgJHtjb250ZW50V2lkdGh9cHhgLFxyXG5cdFx0XHRcdGZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsY29sb3I6IGAke2NvbG9yTGlzdFtiYWNrZ3JvdW5kXX1gLFxyXG5cdFx0XHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMHB4KWAsXHJcblx0XHRcdFx0Y29sdW1uczogYCR7Y29udGVudFdpZHRofXB4YCwgY29sdW1uR2FwOmAke2NvbHVtbkdhcH1weGB9XCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm9vay1pbm5lclwiIHYtaHRtbD1cIm5leHRUZXh0XCJcclxuXHRcdFx0XHRcdDpzdHlsZT1cIntmb250U2l6ZTogYCR7Zm9udFNpemV9cHhgLCBsaW5lSGVpZ2h0OiBgJHtsaW5lSGVpZ2h0KmZvbnRTaXplfXB4YH1cIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJib3R0b20tYmFyXCI+XHJcblx0XHRcdFx0MS97e25leHRQYWdlcy5sZW5ndGh9fVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDwhLS0g6I+c5Y2V5bGCIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJtZW51XCIgOnN0eWxlPVwie2hlaWdodDogYCR7d2luZG93SGVpZ2h0fXB4YCwgd2lkdGg6IGAke3dpbmRvd1dpZHRofXB4YCxiYWNrZ3JvdW5kOiBkaXJlY3RvcnlTaG93PydyZ2JhKDAsIDAsIDAsIC41KSc6Jyd9XCIgXHJcblx0XHR2LWlmPVwibWVudVNob3dcIiBAdG91Y2hlbmQ9XCJjbG9zZU1lbnVcIj5cclxuXHRcdFx0XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibWVudS10b3BcIiA6c3R5bGU9XCJ7aGVpZ2h0OiBgJHtzdGF0dXNCYXJIZWlnaHQgKyA0MH1weGAsIHRvcDogaXRlbVNob3cgPyAwIDogYC0xMDAlYH1cIiBAdG91Y2hlbmQuc3RvcD5cclxuXHRcdFx0XHQ8dmlldyA6c3R5bGU9XCJ7aGVpZ2h0OiBgJHtzdGF0dXNCYXJIZWlnaHR9cHhgfVwiPjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnQgYmFja1wiIEBjbGljaz1cImJhY2tcIj4mI3hlNzFhOzwvdGV4dD5cclxuXHRcdFx0XHRcdDx2aWV3PlxyXG5cdFx0XHRcdFx0XHR7e2NoYXB0ZXJOYW1lfX1cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibWVudS1ib3R0b21cIiA6c3R5bGU9XCJ7Ym90dG9tOiBpdGVtU2hvdyA/IDAgOiAnLTEwMCUnfVwiIEB0b3VjaGVuZC5zdG9wPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvdy1wYWdlXCI+e3tjdXJyZW50UGFnZSArIDEgfX0ve3twYWdlcy5sZW5ndGh9fTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2dyZXNzLWJveFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgQGNsaWNrPVwicHJlQ2hhcHRlclwiPuS4iuS4gOeroDwvdGV4dD5cclxuXHRcdFx0XHRcdDx2aWV3IHN0eWxlPVwiZmxleDogMTtoZWlnaHQ6IDEwMCU7cGFkZGluZzogMCAxMHB4O1wiPlxyXG5cdFx0XHRcdFx0XHQ8bXktcHJvZ3Jlc3MgOnRvdGFsPVwicGFnZXMubGVuZ3RoIC0gMSB8fCAxXCIgOmluZGV4PVwiY3VycmVudFBhZ2VcIiBAaW5kZXhDaGFuZ2U9XCJnb1RvUGFnZVwiPjwvbXktcHJvZ3Jlc3M+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dGV4dCBAY2xpY2s9XCJuZXh0Q2hhcHRlclwiPuS4i+S4gOeroDwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtcy1ib3hcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1ib3hcIiBAY2xpY2s9XCJvcGVuRGlyZWN0b3J5XCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIiBzdHlsZT1cImZvbnQtc2l6ZTogMjVweDtcIj4mI3hlNjAxOzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXNpemU6IDEzcHg7XCI+55uu5b2VPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLWJveFwiIHYtaWY9XCJiYWNrZ3JvdW5kID09PSAxXCIgQGNsaWNrPVwiY2hhbmdlQmFja2dyb3VuZCgwKVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250XCIgc3R5bGU9XCJmb250LXNpemU6IDI1cHg7XCI+JiN4ZTYzZTs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAxM3B4O1wiPuWknOmXtDwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1ib3hcIiB2LWVsc2UgQGNsaWNrPVwiY2hhbmdlQmFja2dyb3VuZCgxKVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250XCIgc3R5bGU9XCJmb250LXNpemU6IDI1cHg7XCI+JiN4ZTY0Yzs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAxM3B4O1wiPuaXpemXtDwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1ib3hcIiBAY2xpY2s9XCJvcGVuU2V0dGluZ1wiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250XCIgc3R5bGU9XCJmb250LXNpemU6IDI1cHg7XCI+JiN4ZTYxZDs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAxM3B4O1wiPuiuvue9rjwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzZXR0aW5nXCIgOnN0eWxlPVwie2JvdHRvbTogc2V0dGluZ1Nob3cgPyAwIDogYC0xMDAlYH1cIiBAdG91Y2hlbmQuc3RvcD5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1uYW1lXCI+5a2X5Y+3PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uXCIgQGNsaWNrPVwiYmlnU2l6ZVwiPkErPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uXCIgQGNsaWNrPVwic21hbGxTaXplXCI+QS08L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLW5hbWVcIj7mjpLniYg8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInR5cGUtc2V0dGluZ1wiIDpjbGFzcz1cInthY3RpdmU6IGxpbmVIZWlnaHQgPT09IDF9XCIgQGNsaWNrPVwiY2hhbmdlTGluZUhlaWdodCgxKVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBsaW5lSGVpZ2h0ID09PSAxfVwiIHYtZm9yPVwiaSBpbiA1XCIgOmtleT1cImlcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInR5cGUtc2V0dGluZ1wiIDpjbGFzcz1cInthY3RpdmU6IGxpbmVIZWlnaHQgPT09IDEuNX1cIiBAY2xpY2s9XCJjaGFuZ2VMaW5lSGVpZ2h0KDEuNSlcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCIgOmNsYXNzPVwie2FjdGl2ZTogbGluZUhlaWdodCA9PT0gMS41fVwiIHYtZm9yPVwiaSBpbiA0XCIgOmtleT1cImlcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInR5cGUtc2V0dGluZ1wiIDpjbGFzcz1cInthY3RpdmU6IGxpbmVIZWlnaHQgPT09IDJ9XCIgQGNsaWNrPVwiY2hhbmdlTGluZUhlaWdodCgyKVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBsaW5lSGVpZ2h0ID09PSAyfVwiIHYtZm9yPVwiaSBpbiAzXCIgOmtleT1cImlcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLW5hbWVcIj7og4zmma88L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25cIiBzdHlsZT1cImJhY2tncm91bmQ6IHVybCguLi8uLi9zdGF0aWMvYmFja2dyb3VuZDEuanBnKTtcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBiYWNrZ3JvdW5kID09PSAwfVwiIEBjbGljaz1cImNoYW5nZUJhY2tncm91bmQoMClcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICMwMDA7XCIgOmNsYXNzPVwie2FjdGl2ZTogYmFja2dyb3VuZCA9PT0gMX1cIiBAY2xpY2s9XCJjaGFuZ2VCYWNrZ3JvdW5kKDEpXCI+PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcclxuXHRcdFx0PCEtLSDnm67lvZXlsYIgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZGlyZWN0b3J5XCIgOmNsYXNzPVwie2NvbnRhaW5lcjA6IGJhY2tncm91bmQgPT09IDAsIGNvbnRhaW5lcjE6IGJhY2tncm91bmQgPT09IDF9XCJcclxuXHRcdFx0IDpzdHlsZT1cIntsZWZ0OiBkaXJlY3RvcnlTaG93ID8gMCA6ICctMTAwJScsY29sb3I6IGAke2NvbG9yTGlzdFtiYWNrZ3JvdW5kXX1gfVwiICBAdG91Y2hlbmQuc3RvcD5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvb2tuYW1lXCI+5Lmm5ZCNPC92aWV3PlxyXG5cdFx0XHRcdDxzY3JvbGwtdmlldyBzY3JvbGwteT1cInRydWVcIiBjbGFzcz1cImRpcmVjdG9yeS1saXN0XCIgOnNjcm9sbC1pbnRvLXZpZXc9XCJgY2hhcHRlciR7Y2hhcHRlcklkfWBcIj5cclxuXHRcdFx0XHRcdDx2aWV3IHYtZm9yPVwiaXRlbSBvZiBkaXJlY3RvcnlMaXN0XCIgOmtleT1cIml0ZW0uY2hhcHRlcklkXCIgY2xhc3M9XCJkaXJlY3RvcnktbGlzdEl0ZW1cIiA6Y2xhc3M9XCJ7YWN0aXZlOiBpdGVtLmNoYXB0ZXJJZCA9PT0gY2hhcHRlcklkfVwiXHJcblx0XHRcdFx0XHQgOmlkPVwiYGNoYXB0ZXIke2l0ZW0uY2hhcHRlcklkfWBcIiBAY2xpY2s9XCJnb1RvQ2hhcHRlcihpdGVtLmNoYXB0ZXJJZClcIj5cclxuXHRcdFx0XHRcdFx0e3tpdGVtLm5hbWV9fVxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBteVByb2dyZXNzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbXlQcm9ncmVzcy52dWUnXHJcblx0aW1wb3J0IHt0cmFkaXRpb25hbGl6ZWR9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzLmpzJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6e1xyXG5cdFx0XHRteVByb2dyZXNzXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRjaGFwdGVySWQ6ICcnLFxyXG5cdFx0XHRcdGNoYXB0ZXJOYW1lOiAnJyxcclxuXHRcdFx0XHRwcmVDaGFwdGVyTmFtZTogJycsXHJcblx0XHRcdFx0bmV4dENoYXB0ZXJOYW1lOiAnJyxcclxuXHRcdFx0XHR0ZXh0Rml4ZWQ6YDxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPmAsXHJcblx0XHRcdFx0dGV4dDogJycsXHJcblx0XHRcdFx0bmV4dFRleHQ6ICcnLFxyXG5cdFx0XHRcdHByZVRleHQ6ICcnLFxyXG5cdFx0XHRcdGRpcmVjdG9yeUxpc3Q6IFtdLCAgLy/nm67lvZXliJfooahcclxuXHRcdFx0XHRwcmVUcmFuc2xhdGVYOiAwLCAgLy/kuIrkuIDnq6DnmoTkvY3np7tcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzaG93QW5pbWF0aW9uOiBmYWxzZSwgLy/mmK/lkKblvIDlkK/liqjnlLtcclxuXHRcdFx0XHRwYWdlczogW10sXHJcblx0XHRcdFx0cHJlUGFnZXM6IFtdLFxyXG5cdFx0XHRcdG5leHRQYWdlczogW10sXHJcblx0XHRcdFx0Y29udGVudFdpZHRoOiAwLFxyXG5cdFx0XHRcdGNvbnRlbnRIZWlnaHQ6IDAsXHJcblx0XHRcdFx0d2luZG93V2lkdGg6IDAsXHJcblx0XHRcdFx0d2luZG93SGVpZ2h0OiAwLFxyXG5cdFx0XHRcdHBsYXRmb3JtOiAnJywgIC8v6K6+5aSHXHJcblx0XHRcdFx0YmF0dGVyeVN0YXRlOiAnJywgLy/nlLXmsaDnirbmgIFcclxuXHRcdFx0XHRiYXR0ZXJ5TGV2ZWw6ICcnLCAvL+eUtemHj1xyXG5cdFx0XHRcdHN0YXR1c0JhckhlaWdodDogMCwgLy/nirbmgIHmoI/pq5jluqZcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjb2x1bW5HYXA6IDQwLFxyXG5cdFx0XHRcdGN1cnJlbnRQYWdlOiAwLFxyXG5cdFx0XHRcdHRvdWNoU3RhcnRYOiAwLCAgLy8g6Kem5bGP6LW35aeL54K5XHJcblx0XHRcdFx0dG91Y2hTdGFydFQ6IDAsICAvL+inpuWxj+i1t+Wni+aXtumXtFxyXG5cdFx0XHRcdHRvdWNoVGltZXI6IG51bGwgICwvL+eUqOS6juinpuaRuOiKgua1gVxyXG5cdFx0XHRcdG1lbnVTaG93OiBmYWxzZSwgIC8v6I+c5Y2V5qCPYm945piv5ZCm5riy5p+TXHJcblx0XHRcdFx0aXRlbVNob3c6IGZhbHNlLCAgLy8g6I+c5Y2V5qCP5Yqo55S75o6n5Yi2XHJcblx0XHRcdFx0c2V0dGluZ1Nob3c6IGZhbHNlLCAgLy/orr7nva7moI/liqjnlLvmjqfliLZcclxuXHRcdFx0XHRkaXJlY3RvcnlTaG93OiBmYWxzZSwgIC8v55uu5b2V5Yqo55S75o6n5Yi2XHJcblx0XHRcdFx0dHVyblBhZ2VUaW1lOiAwLjUsICAvL+e/u+mhteWKqOeUu+aXtumXtFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvbnRTaXplOiAnJyxcclxuXHRcdFx0XHRsaW5lSGVpZ2h0OiAnJyxcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAnJyxcclxuXHRcdFx0XHRjb2xvckxpc3Q6IFsnIzAwMCcsICcjNjY2J10sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bmV4dENoYXB0ZXJMb2FkZWQ6IGZhbHNlLCAgIC8v5LiL5LiA56ug5piv5ZCm5Yqg6L295a6M5q+VXHJcblx0XHRcdFx0cHJlY2hhcHRlckxvYWRlZDogZmFsc2UsICAgLy/kuIrkuIDnq6DmmK/lkKbliqDovb3lrozmr5VcclxuXHRcdFx0XHR0dXJuQ2hhcHRlcjogZmFsc2UsICAgLy/liqDovb3nq6DoioLlkI7mmK/lkKbot7PovazpobXpnaJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0dGhpcy5nZXRTeXN0ZW1JbmZvKClcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLmluaXRQYWdlKClcclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDp7XHJcblx0XHRcdHByb2dyZXNzKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmN1cnJlbnRQYWdlIC8gKHRoaXMucGFnZXMubGVuZ3RoIC0gMSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDov5Tlm57kuIrkuIDpobXpnaJcclxuXHRcdFx0KiovXHJcblx0XHRcdGJhY2soKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDojrflj5borr7lpIfkv6Hmga9cclxuXHRcdFx0KiovXHJcblx0XHRcdGdldFN5c3RlbUluZm8oKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y29uc3QgeyB3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0LCBzdGF0dXNCYXJIZWlnaHQsIHBsYXRmb3JtIH0gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHRcdFx0XHR0aGlzLnN0YXR1c0JhckhlaWdodCA9IHN0YXR1c0JhckhlaWdodDtcclxuXHRcdFx0XHR0aGlzLndpbmRvd1dpZHRoID0gd2luZG93V2lkdGg7XHJcblx0XHRcdFx0dGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3dIZWlnaHQ7XHJcblx0XHRcdFx0dGhpcy5jb250ZW50V2lkdGggPSB3aW5kb3dXaWR0aCAtIDQwO1xyXG5cdFx0XHRcdHRoaXMuY29udGVudEhlaWdodCA9IHdpbmRvd0hlaWdodCAtIDYwO1xyXG5cdFx0XHRcdHRoaXMucGxhdGZvcm0gPSBwbGF0Zm9ybTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcclxuXHRcdFx0XHRcdHBsdXMubmF2aWdhdG9yLnNldEZ1bGxzY3JlZW4odHJ1ZSk7XHJcblx0XHRcdFx0XHQvLyDojrflj5blronljZPnlLXph49cclxuXHRcdFx0XHRcdGlmICh0aGlzLnBsYXRmb3JtID09PSAnaW9zJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgVUlEZXZpY2UgPSBwbHVzLmlvcy5pbXBvcnQoXCJVSURldmljZVwiKTsgIFxyXG5cdFx0XHRcdFx0XHRsZXQgZGV2ID0gVUlEZXZpY2UuY3VycmVudERldmljZSgpOyAgXHJcblx0XHRcdFx0XHRcdGlmICghZGV2LmlzQmF0dGVyeU1vbml0b3JpbmdFbmFibGVkKCkpIHsgIFxyXG5cdFx0XHRcdFx0XHQgICAgZGV2LnNldEJhdHRlcnlNb25pdG9yaW5nRW5hYmxlZCh0cnVlKTsgIFxyXG5cdFx0XHRcdFx0XHR9ICBcclxuXHRcdFx0XHRcdFx0dGhpcy5iYXR0ZXJ5U3RhdGUgPSBkZXYuYmF0dGVyeVN0YXRlKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuYmF0dGVyeUxldmVsID0gZGV2LmJhdHRlcnlMZXZlbCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdGxldCBtYWluID0gcGx1cy5hbmRyb2lkLnJ1bnRpbWVNYWluQWN0aXZpdHkoKTtcclxuXHRcdFx0XHRcdFx0bGV0IEludGVudCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcygnYW5kcm9pZC5jb250ZW50LkludGVudCcpOyAgXHJcblx0XHRcdFx0XHRcdGxldCByZWNldmllciA9IHBsdXMuYW5kcm9pZC5pbXBsZW1lbnRzKCdpby5kY2xvdWQuZmVhdHVyZS5pbnRlcm5hbC5yZWZsZWN0LkJyb2FkY2FzdFJlY2VpdmVyJywgeyAgXHJcblx0XHRcdFx0XHRcdCAgICBvblJlY2VpdmU6IChjb250ZXh0LCBpbnRlbnQpID0+IHsgIFxyXG5cdFx0XHRcdFx0XHQgICAgICAgIGxldCBhY3Rpb24gPSBpbnRlbnQuZ2V0QWN0aW9uKCk7ICBcclxuXHRcdFx0XHRcdFx0ICAgICAgICBpZiAoYWN0aW9uID09IEludGVudC5BQ1RJT05fQkFUVEVSWV9DSEFOR0VEKSB7ICBcclxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgdGhpcy5iYXR0ZXJ5U3RhdGUgPSBpbnRlbnQuZ2V0SW50RXh0cmEoXCJzdGF0dXNcIiwgMCk7IC8v55S15rGg54q25oCBICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5iYXR0ZXJ5TGV2ZWwgPSBpbnRlbnQuZ2V0SW50RXh0cmEoXCJsZXZlbFwiLCAwKTsgLy/nlLXph49cclxuXHRcdFx0XHRcdFx0ICAgICAgICB9ICBcclxuXHRcdFx0XHRcdFx0ICAgIH0gIFxyXG5cdFx0XHRcdFx0XHQgfSk7ICBcclxuXHRcdFx0XHRcdFx0bGV0IEludGVudEZpbHRlciA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcygnYW5kcm9pZC5jb250ZW50LkludGVudEZpbHRlcicpOyAgXHJcblx0XHRcdFx0XHRcdGxldCBmaWx0ZXIgPSBuZXcgSW50ZW50RmlsdGVyKEludGVudC5BQ1RJT05fQkFUVEVSWV9DSEFOR0VEKTsgIFxyXG5cdFx0XHRcdFx0XHRtYWluLnJlZ2lzdGVyUmVjZWl2ZXIocmVjZXZpZXIsIGZpbHRlcik7IFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8g6I635Y+W5a2X5L2T44CB5o6S54mI562J5L+h5oGvXHJcblx0XHRcdFx0dGhpcy5mb250U2l6ZSA9IHVuaS5nZXRTdG9yYWdlU3luYygnZm9udFNpemUnKSB8fCAxNjtcclxuXHRcdFx0XHR0aGlzLmxpbmVIZWlnaHQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2xpbmVIZWlnaHQnKSB8fCAxLjU7XHJcblx0XHRcdFx0dGhpcy5iYWNrZ3JvdW5kID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdiYWNrZ3JvdW5kJykgfHwgMDtcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOiOt+WPluaVsOaNruWIneWni+WMlumhtemdolxyXG5cdFx0XHQqKi9cclxuXHRcdFx0YXN5bmMgaW5pdFBhZ2UoKSB7XHJcblx0XHRcdFx0dGhpcy5wcmVUcmFuc2xhdGVYID0gLXRoaXMud2luZG93V2lkdGggLSAyMDtcclxuXHRcdFx0XHRhd2FpdCB0aGlzLmdldERhdGEoKVxyXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuY2FsY1BhZ2VzKClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6K6h566X6ZiF6K+76aG16ZW/5bqmLOW5tueUn+aIkHBhZ2VzLOW5tui3s+i9rOiHs+afkOmhte+8iOWmguaenOacie+8iVxyXG5cdFx0XHQqKi9cclxuXHRcdFx0Y2FsY1BhZ2VzKHR5cGUsIHByb2dyZXNzKSB7XHJcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xyXG5cdFx0XHRcdHF1ZXJ5LnNlbGVjdCgnI3RleHQnKS5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgd2lkdGggPSBkYXRhLndpZHRoO1xyXG5cdFx0XHRcdFx0bGV0IGhlaWdodCA9IGRhdGEuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0dGhpcy5wYWdlcyA9IHRoaXMuZ2VuUGFnZXMod2lkdGgsIGhlaWdodClcclxuXHRcdFx0XHRcdGlmICh0eXBlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudFBhZ2UgPSBNYXRoLmZsb29yKCh0aGlzLnBhZ2VzLmxlbmd0aCAtIDEpICogcHJvZ3Jlc3MpXHJcblx0XHRcdFx0XHRcdHRoaXMuZ29Ub1BhZ2UodGhpcy5jdXJyZW50UGFnZSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KS5leGVjKCk7XHJcblx0XHRcdFx0dGhpcy5jYWxjUHJlUGFnZXMoKVxyXG5cdFx0XHRcdHRoaXMuY2FsY05leHRQYWdlcygpXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDorqHnrpfkuIrkuIDnq6DpmIXor7vpobXplb/luqYs5bm255Sf5oiQcGFnZXMs5bm26Lez6L2s6Iez5p+Q6aG177yI5aaC5p6c5pyJ77yJXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRjYWxjUHJlUGFnZXMoKSB7XHJcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xyXG5cdFx0XHRcdHF1ZXJ5LnNlbGVjdCgnI3ByZVRleHQnKS5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgd2lkdGggPSBkYXRhLndpZHRoO1xyXG5cdFx0XHRcdFx0bGV0IGhlaWdodCA9IGRhdGEuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0dGhpcy5wcmVQYWdlcyA9IHRoaXMuZ2VuUGFnZXMod2lkdGgsIGhlaWdodClcclxuXHRcdFx0XHRcdGlmICh0aGlzLnR1cm5DaGFwdGVyKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudHVybkNoYXB0ZXIgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmVDaGFwdGVyKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KS5leGVjKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDorqHnrpfkuIvkuIDnq6DpmIXor7vpobXplb/luqYs5bm255Sf5oiQcGFnZXMs5bm26Lez6L2s6Iez5p+Q6aG177yI5aaC5p6c5pyJ77yJXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRjYWxjTmV4dFBhZ2VzKCkge1xyXG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdFx0XHRxdWVyeS5zZWxlY3QoJyNuZXh0VGV4dCcpLmJvdW5kaW5nQ2xpZW50UmVjdChkYXRhID0+IHtcclxuXHRcdFx0XHRcdGxldCB3aWR0aCA9IGRhdGEud2lkdGg7XHJcblx0XHRcdFx0XHRsZXQgaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XHJcblx0XHRcdFx0XHR0aGlzLm5leHRQYWdlcyA9IHRoaXMuZ2VuUGFnZXMod2lkdGgsIGhlaWdodClcclxuXHRcdFx0XHRcdGlmICh0aGlzLnR1cm5DaGFwdGVyKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudHVybkNoYXB0ZXIgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5uZXh0Q2hhcHRlcigpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSkuZXhlYygpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOeUn+aIkOmYheivu+mhtXBhZ2VzXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRnZW5QYWdlcyh3aWR0aCwgaGVpZ2h0KSB7XHJcblx0XHRcdFx0bGV0IGFyciA9IFtdO1xyXG5cdFx0XHRcdGxldCBpZCA9IDA7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0aWYgKHRoaXMucGxhdGZvcm0gPT09ICdpb3MnKSB7XHJcblx0XHRcdFx0XHR3aGlsZSAoaGVpZ2h0ID4gMCkge1xyXG5cdFx0XHRcdFx0XHRhcnIucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0aWQsXHJcblx0XHRcdFx0XHRcdFx0ekluZGV4OiAyMDAgLSBpZCxcclxuXHRcdFx0XHRcdFx0XHR0cmFuc2xhdGVYOiAwXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRpZCsrO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQgLT0gdGhpcy5jb250ZW50SGVpZ2h0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0d2hpbGUgKHdpZHRoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRhcnIucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0aWQsXHJcblx0XHRcdFx0XHRcdFx0ekluZGV4OiAyMDAgLSBpZCxcclxuXHRcdFx0XHRcdFx0XHR0cmFuc2xhdGVYOiAwXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRpZCsrO1xyXG5cdFx0XHRcdFx0XHR3aWR0aCAtPSB0aGlzLmNvbnRlbnRXaWR0aCArIHRoaXMuY29sdW1uR2FwXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdC8vICNpZm5kZWYgQVBQLVBMVVNcclxuXHRcdFx0XHR3aGlsZSAod2lkdGggPiAwKSB7XHJcblx0XHRcdFx0XHRhcnIucHVzaCh7XHJcblx0XHRcdFx0XHRcdGlkLFxyXG5cdFx0XHRcdFx0XHR6SW5kZXg6IDIwMCAtIGlkLFxyXG5cdFx0XHRcdFx0XHR0cmFuc2xhdGVYOiAwXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdGlkKys7XHJcblx0XHRcdFx0XHR3aWR0aCAtPSB0aGlzLmNvbnRlbnRXaWR0aCArIHRoaXMuY29sdW1uR2FwXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdHJldHVybiBhcnI7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDop6bmkbjlvIDlp4tcclxuXHRcdFx0KiovXHJcblx0XHRcdHRvdWNoU3RhcnQoZSkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd0FuaW1hdGlvbiA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMudG91Y2hTdGFydFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcclxuXHRcdFx0XHR0aGlzLnRvdWNoU3RhcnRUID0gZS50aW1lU3RhbXA7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDop6bmkbjnu5PmnZ9cclxuXHRcdFx0KiovXHJcblx0XHRcdHRvdWNoRW5kKGUpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dBbmltYXRpb24gPSB0cnVlO1xyXG5cdFx0XHRcdGxldCBkZWx0YVggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLnRvdWNoU3RhcnRYO1xyXG5cdFx0XHRcdGlmIChkZWx0YVggPT09IDApIHsgIC8vZGVsdGFYID09PSAw5Li654K55Ye7XHJcblx0XHRcdFx0XHRpZiAoZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYPHRoaXMud2luZG93V2lkdGgvMykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnByZVBhZ2UoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBpZiAoZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYPnRoaXMud2luZG93V2lkdGgvMyoyKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubmV4dFBhZ2UoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2hvd01lbnUoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdGlmIChkZWx0YVggPiB0aGlzLndpbmRvd1dpZHRoLzIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmVQYWdlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYgKGRlbHRhWCA8IC10aGlzLndpbmRvd1dpZHRoLzIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5uZXh0UGFnZSgpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0bGV0IHYgPSAwO1xyXG5cdFx0XHRcdFx0XHR2ID0gZGVsdGFYIC8gKGUudGltZVN0YW1wIC0gdGhpcy50b3VjaFN0YXJ0VCk7XHJcblx0XHRcdFx0XHRcdGlmICh2IDw9IDAuMSAmJiB2ID4gMCkgeyAgLy/nv7vpobXpgJ/luqbmhaLvvIzlj5bmtojnv7vpobVcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5jdXJyZW50UGFnZSAhPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlIC0gMV0udHJhbnNsYXRlWCA9IC10aGlzLndpbmRvd1dpZHRoIC0gMjA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcmVUcmFuc2xhdGVYID0gLXRoaXMud2luZG93V2lkdGggLSAyMDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSBpZiAodiA+PSAtMC4xICYmIHYgPCAwKSB7ICAvL+e/u+mhtemAn+W6puaFou+8jOWPlua2iOe/u+mhtVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMucGFnZXNbdGhpcy5jdXJyZW50UGFnZV0udHJhbnNsYXRlWCA9IDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSBpZih2ID4gMC4xKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wcmVQYWdlKClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIGlmICh2IDwgLTAuMSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMubmV4dFBhZ2UoKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6Kem5pG4XHJcblx0XHRcdCoqL1xyXG5cdFx0XHR0b3VjaE1vdmUoZSkge1xyXG5cdFx0XHRcdGlmICghdGhpcy50b3VjaFRpbWVyKSB7XHJcblx0XHRcdFx0XHRsZXQgZGVsdGFYID0gZS50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLnRvdWNoU3RhcnRYO1xyXG5cdFx0XHRcdFx0aWYgKGRlbHRhWCA8IDApIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuY3VycmVudFBhZ2UgPT09IHRoaXMucGFnZXMubGVuZ3RoIC0gMSkgeyAgLy/lpoLmnpznv7voh7PmnIDlkI7kuIDpobVcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXRoaXMubmV4dENoYXB0ZXJMb2FkZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMudHVybkNoYXB0ZXIgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmraPlnKjliqDovb3kuK3or7fnqI3lgJknXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLm5leHRUZXh0Lmxlbmd0aCA9PT0gMCkgeyAgLy/lpoLmnpzmsqHmnInkuIvkuIDnq6BcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+i/meaYr+acgOWQjuS4gOeroCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnBhZ2VzW3RoaXMuY3VycmVudFBhZ2VdLnRyYW5zbGF0ZVggPSBkZWx0YVg7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucGFnZXNbdGhpcy5jdXJyZW50UGFnZV0udHJhbnNsYXRlWCA9IGRlbHRhWDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmN1cnJlbnRQYWdlID09PSAwKSB7ICAvL+WmguaenOaYr+esrOS4gOmhtVxyXG5cdFx0XHRcdFx0XHRcdGlmICghdGhpcy5wcmVjaGFwdGVyTG9hZGVkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnR1cm5DaGFwdGVyID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5q2j5Zyo5Yqg6L295Lit6K+356iN5YCZJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5wcmVUZXh0Lmxlbmd0aCA9PT0gMCkgeyAgLy/lpoLmnpzmsqHmnInkuIrkuIDnq6BcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+i/meaYr+esrOS4gOeroCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByZVRyYW5zbGF0ZVggPSAtdGhpcy53aW5kb3dXaWR0aCArIGRlbHRhWDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlIC0gMV0udHJhbnNsYXRlWCA9IC10aGlzLndpbmRvd1dpZHRoICsgZGVsdGFYO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLnRvdWNoVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy50b3VjaFRpbWVyID0gbnVsbDtcclxuXHRcdFx0XHRcdH0sIDEwMClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDlkbzlh7roj5zljZVcclxuXHRcdFx0KiovXHJcblx0XHRcdHNob3dNZW51KCkge1xyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHRcdFx0cGx1cy5uYXZpZ2F0b3Iuc2V0RnVsbHNjcmVlbihmYWxzZSk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0dGhpcy5tZW51U2hvdyA9IHRydWU7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLml0ZW1TaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdH0sMTAwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog5YWz6Zet6I+c5Y2VXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRjbG9zZU1lbnUoKSB7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0XHRwbHVzLm5hdmlnYXRvci5zZXRGdWxsc2NyZWVuKHRydWUpO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdHRoaXMuaXRlbVNob3cgPSBmYWxzZVxyXG5cdFx0XHRcdHRoaXMuc2V0dGluZ1Nob3cgPSBmYWxzZVxyXG5cdFx0XHRcdHRoaXMuZGlyZWN0b3J5U2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLm1lbnVTaG93ID0gZmFsc2VcclxuXHRcdFx0XHR9LDMwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOWFs+mXreiPnOWNleagj++8jOWRvOWHuuiuvue9ruagj1xyXG5cdFx0XHQqKi9cclxuXHRcdFx0b3BlblNldHRpbmcoKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5pdGVtU2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNldHRpbmdTaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdH0sMzAwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog5YWz6Zet6I+c5Y2V5qCP77yM5ZG85Ye655uu5b2V5qCPXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRvcGVuRGlyZWN0b3J5KCkge1xyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHRcdFx0cGx1cy5uYXZpZ2F0b3Iuc2V0RnVsbHNjcmVlbih0cnVlKTtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHR0aGlzLml0ZW1TaG93ID0gZmFsc2VcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZGlyZWN0b3J5U2hvdyA9IHRydWVcclxuXHRcdFx0XHR9LDMwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOS4iuS4gOmhtVxyXG5cdFx0XHQqKi9cclxuXHRcdFx0cHJlUGFnZSgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jdXJyZW50UGFnZSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLnByZWNoYXB0ZXJMb2FkZWQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmVDaGFwdGVyKClcclxuXHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAoIHRoaXMucHJlVGV4dC5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfov5nmmK/nrKzkuIDnq6AnLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSAge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogdGhpcy5wcmVDaGFwdGVyTmFtZSxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmVUcmFuc2xhdGVYID0gMDtcclxuXHRcdFx0XHRcdFx0Ly8g5Yqo55S757uT5p2f5ZCO6I635Y+W5LiK5LiA56ugLOmHjee9rumhtemdolxyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnByZUNoYXB0ZXIoKVxyXG5cdFx0XHRcdFx0XHR9LCB0aGlzLnR1cm5QYWdlVGltZSoxMDAwKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0dGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlIC0gMV0udHJhbnNsYXRlWCA9IDA7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRQYWdlLS07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog5LiL5LiA6aG1XHJcblx0XHRcdCoqL1xyXG5cdFx0XHRuZXh0UGFnZSgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jdXJyZW50UGFnZSA9PT0gdGhpcy5wYWdlcy5sZW5ndGggLSAxKSB7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMubmV4dENoYXB0ZXJMb2FkZWQpIHsgIC8v5LiL5LiA56ug5pyq5Yqg6L295a6M5q+VXHJcblx0XHRcdFx0XHRcdHRoaXMubmV4dENoYXB0ZXIoKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICggdGhpcy5uZXh0VGV4dC5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfov5nmmK/mnIDlkI7kuIDnq6AnLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiB0aGlzLm5leHRDaGFwdGVyTmFtZSxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0dGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlXS50cmFuc2xhdGVYID0gLXRoaXMud2luZG93V2lkdGggLSAyMDtcclxuXHRcdFx0XHRcdFx0Ly8g5Yqo55S757uT5p2f5ZCO6I635Y+W5LiL5LiA56ugLOmHjee9rumhtemdolxyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm5leHRDaGFwdGVyKClcclxuXHRcdFx0XHRcdFx0fSwgdGhpcy50dXJuUGFnZVRpbWUqMTAwMClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnBhZ2VzW3RoaXMuY3VycmVudFBhZ2VdLnRyYW5zbGF0ZVggPSAtdGhpcy53aW5kb3dXaWR0aCAtIDIwO1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50UGFnZSsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOiOt+WPluS4i+S4gOeroCzph43nva7pobXpnaLvvIzlsIbmnKznq6Dlj5jkuLrliY3kuIDnq6DvvIzlsIbkuIvkuIDnq6Dlj5jkuLrmnKznq6DvvIzojrflj5bkuIvkuIDnq6DlhoXlrrlcclxuXHRcdFx0KiovXHJcblx0XHRcdG5leHRDaGFwdGVyKCkge1xyXG5cdFx0XHRcdGlmICghdGhpcy5uZXh0Q2hhcHRlckxvYWRlZCkge1xyXG5cdFx0XHRcdFx0dGhpcy50dXJuQ2hhcHRlciA9IHRydWU7XHJcblx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+ato+WcqOWKoOi9veS4reivt+eojeWAmSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5jaGFwdGVySWQrKztcclxuXHRcdFx0XHR0aGlzLnByZVRleHQgPSB0aGlzLnRleHQ7XHJcblx0XHRcdFx0dGhpcy50ZXh0ID0gdGhpcy5uZXh0VGV4dDtcclxuXHRcdFx0XHR0aGlzLm5leHRUZXh0ID0gJyc7XHJcblx0XHRcdFx0dGhpcy5nZXRUZXh0KHRoaXMuY2hhcHRlcklkICsgMSwgJ25leHQnKVxyXG5cdFx0XHRcdHRoaXMucHJlUGFnZXMgPSB0aGlzLnBhZ2VzLm1hcCgodmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdHZhbHVlLnRyYW5zbGF0ZVggPSAwO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy5wYWdlcyA9IFtdLmNvbmNhdCh0aGlzLm5leHRQYWdlcyk7XHJcblx0XHRcdFx0dGhpcy5uZXh0UGFnZXMgPSBbXTtcclxuXHRcdFx0XHR0aGlzLnByZUNoYXB0ZXJOYW1lID0gdGhpcy5jaGFwdGVyTmFtZTtcclxuXHRcdFx0XHR0aGlzLmNoYXB0ZXJOYW1lID0gdGhpcy5uZXh0Q2hhcHRlck5hbWU7XHJcblx0XHRcdFx0dGhpcy5uZXh0Q2hhcHRlck5hbWUgPSAnJztcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRQYWdlID0gMDtcclxuXHRcdFx0XHR0aGlzLmdvVG9QYWdlKHRoaXMuY3VycmVudFBhZ2UpXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDojrflj5bkuIrkuIDnq6As6YeN572u6aG16Z2i77yM5bCG5pys56ug5Y+Y5Li65ZCO5LiA56ug77yM5bCG5LiK5LiA56ug5Y+Y5Li65pys56ug77yM6I635Y+W5LiK5LiA56ug5YaF5a65XHJcblx0XHRcdCoqL1xyXG5cdFx0XHRwcmVDaGFwdGVyKCkge1xyXG5cdFx0XHRcdGlmICghdGhpcy5wcmVDaGFwdGVyTG9hZGVkKSB7XHJcblx0XHRcdFx0XHR0aGlzLnR1cm5DaGFwdGVyID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5q2j5Zyo5Yqg6L295Lit6K+356iN5YCZJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnByZVRyYW5zbGF0ZVggPSAtdGhpcy53aW5kb3dXaWR0aCAtIDIwO1xyXG5cdFx0XHRcdHRoaXMuY2hhcHRlcklkLS07XHJcblx0XHRcdFx0dGhpcy5uZXh0VGV4dCA9IHRoaXMudGV4dDtcclxuXHRcdFx0XHR0aGlzLnRleHQgPSB0aGlzLnByZVRleHQ7XHJcblx0XHRcdFx0dGhpcy5wcmVUZXh0ID0gJyc7XHJcblx0XHRcdFx0dGhpcy5nZXRUZXh0KHRoaXMuY2hhcHRlcklkIC0gMSwgJ3ByZScpXHJcblx0XHRcdFx0dGhpcy5uZXh0UGFnZXMgPSB0aGlzLnBhZ2VzLm1hcCgodmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdHZhbHVlLnRyYW5zbGF0ZVggPSAwO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy5wYWdlcyA9IFtdLmNvbmNhdCh0aGlzLnByZVBhZ2VzKTtcclxuXHRcdFx0XHR0aGlzLnByZVBhZ2VzID0gW107XHJcblx0XHRcdFx0dGhpcy5uZXh0Q2hhcHRlck5hbWUgPSB0aGlzLmNoYXB0ZXJOYW1lO1xyXG5cdFx0XHRcdHRoaXMuY2hhcHRlck5hbWUgPSB0aGlzLnByZUNoYXB0ZXJOYW1lO1xyXG5cdFx0XHRcdHRoaXMucHJlQ2hhcHRlck5hbWUgPSAnJztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5wYWdlcy5sZW5ndGggLSAxO1xyXG5cdFx0XHRcdHRoaXMuZ29Ub1BhZ2UodGhpcy5jdXJyZW50UGFnZSlcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOagueaNrumhteeggei3s+i9rFxyXG5cdFx0XHQqKi9cclxuXHRcdFx0Z29Ub1BhZ2UocGFnZSkge1xyXG5cdFx0XHRcdGlmIChwYWdlID4gdGhpcy5wYWdlcy5sZW5ndGggLSAxKSB7XHJcblx0XHRcdFx0XHRwYWdlID0gdGhpcy5wYWdlcy5sZW5ndGggLSAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnNob3dBbmltYXRpb24gPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRQYWdlID0gcGFnZVxyXG5cdFx0XHRcdHRoaXMucGFnZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoaW5kZXggPCBwYWdlKSB7XHJcblx0XHRcdFx0XHRcdHZhbHVlLnRyYW5zbGF0ZVggPSAtdGhpcy53aW5kb3dXaWR0aCAtIDIwXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0dmFsdWUudHJhbnNsYXRlWCA9IDBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog5Yqg5aSn5a2X5L2TXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRiaWdTaXplKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmZvbnRTaXplIDwgMjUpIHtcclxuXHRcdFx0XHRcdGxldCBwcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3M7XHJcblx0XHRcdFx0XHR0aGlzLmZvbnRTaXplKys7XHJcblx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ2ZvbnRTaXplJywgdGhpcy5mb250U2l6ZSlcclxuXHRcdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jYWxjUGFnZXMoMSwgcHJvZ3Jlc3MpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+acgOWkp+Wtl+S9kycsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDnvKnlsI/lrZfkvZNcclxuXHRcdFx0KiovXHJcblx0XHRcdHNtYWxsU2l6ZSgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5mb250U2l6ZSA+IDE0KSB7XHJcblx0XHRcdFx0XHRsZXQgcHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzO1xyXG5cdFx0XHRcdFx0dGhpcy5mb250U2l6ZS0tO1xyXG5cdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdmb250U2l6ZScsIHRoaXMuZm9udFNpemUpXHJcblx0XHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2FsY1BhZ2VzKDEsIHByb2dyZXNzKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmnIDlsI/lrZfkvZMnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog5pS55Y+Y6KGM6LedXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRjaGFuZ2VMaW5lSGVpZ2h0KGxpbmVIZWlnaHQpIHtcclxuXHRcdFx0XHRpZiAobGluZUhlaWdodCA9PT0gdGhpcy5saW5lSGVpZ2h0KSB7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRsZXQgcHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzO1xyXG5cdFx0XHRcdFx0dGhpcy5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcclxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnbGluZUhlaWdodCcsIHRoaXMubGluZUhlaWdodClcclxuXHRcdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jYWxjUGFnZXMoMSwgcHJvZ3Jlc3MpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOaUueWPmOiDjOaZr1xyXG5cdFx0XHQqKi9cclxuXHRcdFx0Y2hhbmdlQmFja2dyb3VuZChiYWNrZ3JvdW5kKSB7XHJcblx0XHRcdFx0aWYgKGJhY2tncm91bmQgPT09IHRoaXMuYmFja2dyb3VuZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcclxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnYmFja2dyb3VuZCcsIHRoaXMuYmFja2dyb3VuZClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDojrflj5bmlbDmja7vvIzljIXmi6zpmIXor7vliLDnrKzlh6Dnq6DvvIzku6Xlj4rliY3kuK3lkI7kuInnq6DlhoXlrrlcclxuXHRcdFx0KiovXHJcblx0XHRcdGdldERhdGEoKSB7XHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHttYXNrOiB0cnVlfSlcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8g5qih5ouf572R57uc5pe26Ze0XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHRcdFx0dGhpcy5uZXh0Q2hhcHRlckxvYWRlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJlY2hhcHRlckxvYWRlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2hhcHRlcklkID0gMjtcclxuXHRcdFx0XHRcdFx0dGhpcy5jaGFwdGVyTmFtZSA9IGDnrKwke3RoaXMuY2hhcHRlcklkfeeroCDmtYvor5XmtYvor5VgO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnByZUNoYXB0ZXJOYW1lID0gYOesrCR7dGhpcy5jaGFwdGVySWQgLSAxfeeroCDmtYvor5XmtYvor5VgO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5leHRDaGFwdGVyTmFtZSA9IGDnrKwke3RoaXMuY2hhcHRlcklkICsgMX3nq6Ag5rWL6K+V5rWL6K+VYDtcclxuXHRcdFx0XHRcdFx0dGhpcy50ZXh0ID0gdGhpcy5jaGFwdGVySWQgKyB0aGlzLnRleHRGaXhlZDtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmVUZXh0ID0gdGhpcy5jaGFwdGVySWQgLSAxICsgdGhpcy50ZXh0Rml4ZWQ7XHJcblx0XHRcdFx0XHRcdHRoaXMubmV4dFRleHQgPSB0aGlzLmNoYXB0ZXJJZCArIDEgKyB0aGlzLnRleHRGaXhlZDtcclxuXHRcdFx0XHRcdFx0Ly8g55Sf5oiQ55uu5b2V77yM5q2j5bi45piv5ZCO56uv5Lyg6L+H5p2lXHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGk9MTtpPD0xMDA7aSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kaXJlY3RvcnlMaXN0LnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2hhcHRlcklkOiBpLFxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZTogYOesrCR7aX3nq6Ag5rWL6K+V5rWL6K+VYFxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpXHJcblx0XHRcdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDojrflj5bkuIrkuIDnq6DmiJbkuIvkuIDnq6DmlbDmja5cclxuXHRcdFx0KiovXHJcblx0XHRcdGdldFRleHQoY2hhcHRlcklkLCB0eXBlKSB7XHJcblx0XHRcdFx0aWYgKHR5cGUgPT09ICduZXh0Jykge1xyXG5cdFx0XHRcdFx0dGhpcy5uZXh0Q2hhcHRlckxvYWRlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMucHJlY2hhcHRlckxvYWRlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyDmqKHmi5/nvZHnu5zml7bpl7RcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLnR1cm5DaGFwdGVyKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodHlwZSA9PT0gJ25leHQnKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubmV4dENoYXB0ZXJMb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5leHRUZXh0ID0gY2hhcHRlcklkICsgdGhpcy50ZXh0Rml4ZWQ7XHJcblx0XHRcdFx0XHRcdHRoaXMubmV4dENoYXB0ZXJOYW1lID0gYOesrCR7Y2hhcHRlcklkfeeroCDmtYvor5XmtYvor5VgO1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jYWxjTmV4dFBhZ2VzKClcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnByZWNoYXB0ZXJMb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRpZiAoY2hhcHRlcklkID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wcmVUZXh0ID0gJyc7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wcmVDaGFwdGVyTmFtZSA9ICcnO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucHJlVGV4dCA9IGNoYXB0ZXJJZCArIHRoaXMudGV4dEZpeGVkO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucHJlQ2hhcHRlck5hbWUgPSBg56ysJHtjaGFwdGVySWR956ugIOa1i+ivlea1i+ivlWA7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5jYWxjUHJlUGFnZXMoKVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDot7PovazliLDmjIflrprnq6DoioJcclxuXHRcdFx0KiovXHJcblx0XHRcdGdvVG9DaGFwdGVyKGNoYXB0ZXJJZCkge1xyXG5cdFx0XHRcdHRoaXMuY2xvc2VNZW51KClcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe21hc2s6IHRydWV9KVxyXG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0XHQvLyDmqKHmi5/nvZHnu5zml7bpl7RcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0XHRcdHRoaXMubmV4dENoYXB0ZXJMb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnByZWNoYXB0ZXJMb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNoYXB0ZXJJZCA9IGNoYXB0ZXJJZDtcclxuXHRcdFx0XHRcdFx0dGhpcy5jaGFwdGVyTmFtZSA9IGDnrKwke3RoaXMuY2hhcHRlcklkfeeroCDmtYvor5XmtYvor5VgO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnByZUNoYXB0ZXJOYW1lID0gYOesrCR7dGhpcy5jaGFwdGVySWQgLSAxfeeroCDmtYvor5XmtYvor5VgO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5leHRDaGFwdGVyTmFtZSA9IGDnrKwke3RoaXMuY2hhcHRlcklkICsgMX3nq6Ag5rWL6K+V5rWL6K+VYDtcclxuXHRcdFx0XHRcdFx0dGhpcy50ZXh0ID0gdGhpcy5jaGFwdGVySWQgKyB0aGlzLnRleHRGaXhlZDtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmVUZXh0ID0gdGhpcy5jaGFwdGVySWQgLSAxICsgdGhpcy50ZXh0Rml4ZWQ7XHJcblx0XHRcdFx0XHRcdHRoaXMubmV4dFRleHQgPSB0aGlzLmNoYXB0ZXJJZCArIDEgKyB0aGlzLnRleHRGaXhlZDtcclxuXHRcdFx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY2FsY1BhZ2VzKDEsIDApXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHJlc29sdmUoKVxyXG5cdFx0XHRcdFx0fSwgMTAwMClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdHBhZ2V7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblx0LmhpZGRlbntcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0fVxyXG5cdC5pY29ue1xyXG5cdFx0XHJcblx0fVxyXG5cdC5hY3Rpb257XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHR6LWluZGV4OiAzMDE7XHJcblx0XHQuaXRlbXtcclxuXHRcdFx0ZmxleDogMTtcclxuXHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuY29udGFpbmVye1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0cGFkZGluZzogMHB4IDIwcHg7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0XHRib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwwLDAsLjQpO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdC5jaGFwdGVye1xyXG5cdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdGNvbG9yOiAkbWlub3ItdGV4dC1jb2xvcjtcclxuXHRcdFx0aGVpZ2h0OjMwcHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdFx0fVxyXG5cdFx0LmJvdHRvbS1iYXJ7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0Y29sb3I6ICRtaW5vci10ZXh0LWNvbG9yO1xyXG5cdFx0XHRoZWlnaHQ6MzBweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0XHR9XHJcblx0XHQuY29udGVudHtcclxuXHRcdFx0LmJvb2staW5uZXJ7XHJcblx0XHRcdFx0dGV4dC1pbmRlbnQ6IDJlbTtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOmp1c3RpZnk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0LmNvbnRhaW5lcjB7XHJcblx0XHRiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vc3RhdGljL2JhY2tncm91bmQxLmpwZyk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblx0fVxyXG5cdC5jb250YWluZXIxe1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuXHR9XHJcblx0Lm1lbnV7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0ei1pbmRleDogMzAyO1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHRcdC5tZW51LXRvcHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuXHRcdFx0dHJhbnNpdGlvbjogdG9wIC4zcztcclxuXHRcdFx0LmhlYWR7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDQwcHg7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdFx0LmJhY2t7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRsZWZ0OiAxMHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuZGlyZWN0b3J5e1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0XHRcdHdpZHRoOiA2MDBycHg7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0dHJhbnNpdGlvbjogbGVmdCAuM3M7XHJcblx0XHRcdC5ib29rbmFtZXtcclxuXHRcdFx0XHRwYWRkaW5nOiAyMHB4IDAgMjBweCAxMHB4O1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQuZGlyZWN0b3J5LWxpc3R7XHJcblx0XHRcdFx0ZmxleDoxO1xyXG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG5cdFx0XHRcdC5kaXJlY3RvcnktbGlzdEl0ZW17XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMTBweDtcclxuXHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDQwcHg7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAjZWVlIHNvbGlkIDFweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmFjdGl2ZXtcclxuXHRcdFx0XHRcdGNvbG9yOiByZWRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5tZW51LWJvdHRvbXtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuXHRcdFx0dHJhbnNpdGlvbjogYm90dG9tIC4zcztcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdC5zaG93LXBhZ2V7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6IDUwJTtcclxuXHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTExMCUpO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cdFx0XHRcdGhlaWdodDogMzBweDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuXHRcdFx0fVxyXG5cdFx0XHQucHJvZ3Jlc3MtYm94e1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0cGFkZGluZzogMCAyMHB4O1xyXG5cdFx0XHRcdGhlaWdodDogNTBweDtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0Lml0ZW1zLWJveHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0aGVpZ2h0OiA4MHB4O1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdC5pdGVtLWJveHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5zZXR0aW5ne1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0XHRwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuXHRcdFx0dHJhbnNpdGlvbjogYm90dG9tIC4zcztcclxuXHRcdFx0Lml0ZW17XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGhlaWdodDogNzBweDtcclxuXHRcdFx0XHQuaXRlbS1uYW1le1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMTBweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuaWNvbntcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDVweCAyMHB4O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAzMnB4O1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0XHR3aWR0aDogYXV0bztcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHRcdFx0XHRib3JkZXI6ICNmZmYgc29saWQgMXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQudHlwZS1zZXR0aW5ne1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiA1cHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHRcdFx0XHR3aWR0aDogMzBweDtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdFx0XHRcdGJvcmRlcjogI2ZmZiBzb2xpZCAxcHg7XHJcblx0XHRcdFx0XHQubGluZXtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206ICNmZmYgc29saWQgMXB4OyBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5hY3RpdmV7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206ICNGRjk5MDAgc29saWQgMXB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuYWN0aXZle1xyXG5cdFx0XHRcdFx0Ym9yZGVyOiAjRkY5OTAwIHNvbGlkIDJweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*********************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 14);

/***/ }),
/* 14 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 15);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 15 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 16 */
/*!**********************************************!*\
  !*** D:/read_demo/components/myProgress.vue ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myProgress.vue?vue&type=template&id=3c753af4&scoped=true& */ 17);\n/* harmony import */ var _myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myProgress.vue?vue&type=script&lang=js& */ 19);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"3c753af4\",\n  null,\n  false,\n  _myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/myProgress.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUk7QUFDbkk7QUFDOEQ7QUFDTDs7O0FBR3pEO0FBQ3NLO0FBQ3RLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL215UHJvZ3Jlc3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjNzUzYWY0JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbXlQcm9ncmVzcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL215UHJvZ3Jlc3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiM2M3NTNhZjRcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9teVByb2dyZXNzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*****************************************************************************************!*\
  !*** D:/read_demo/components/myProgress.vue?vue&type=template&id=3c753af4&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./myProgress.vue?vue&type=template&id=3c753af4&scoped=true& */ 18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 18 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/read_demo/components/myProgress.vue?vue&type=template&id=3c753af4&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "progress-container"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "progress-container2"),
          attrs: { id: "progress", _i: 1 },
          on: {
            touchstart: _vm.touchstart,
            touchend: _vm.touchend,
            touchmove: _vm.touchmove
          }
        },
        [
          _c(
            "view",
            { staticClass: _vm._$s(2, "sc", "progress-box"), attrs: { _i: 2 } },
            [
              _c("progress", {
                attrs: { percent: _vm._$s(3, "a-percent", _vm.percent), _i: 3 }
              })
            ]
          ),
          _c("view", {
            staticClass: _vm._$s(4, "sc", "ball-box"),
            class: _vm._$s(4, "c", {
              bigger: _vm.isTouch,
              shadow: _vm.isTouch
            }),
            style: _vm._$s(4, "s", { left: _vm.percent + "%" }),
            attrs: { _i: 4 }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 19 */
/*!***********************************************************************!*\
  !*** D:/read_demo/components/myProgress.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./myProgress.vue?vue&type=script&lang=js& */ 20);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtqQixDQUFnQixvbUJBQUcsRUFBQyIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL215UHJvZ3Jlc3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9teVByb2dyZXNzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/read_demo/components/myProgress.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    total: {\n      type: Number,\n      default: 1 },\n\n    index: {\n      type: Number,\n      default: 0 } },\n\n\n  data: function data() {\n    return {\n      left: 0, //进度条最左侧位置\n      right: 0, //进度条最右侧位置\n      isTouch: false,\n      touchTimer: null, //用于触摸节流\n      percent: 0 };\n\n  },\n  mounted: function mounted() {\n    this.percent = this.index / this.total * 100;\n    this.getLocation();\n  },\n  methods: {\n\n    getLocation: function getLocation() {var _this = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.select('#progress').boundingClientRect(function (data) {\n        _this.left = data.left;\n        _this.right = data.right;\n      }).exec();\n    },\n\n    touchstart: function touchstart() {\n      this.isTouch = true;\n    },\n\n    touchend: function touchend(e) {\n      this.isTouch = false;\n      var index = this.calcIndex(e.changedTouches[0].clientX);\n      this.$emit('indexChange', index);\n      this.percent = index / this.total * 100;\n    },\n\n    touchmove: function touchmove(e) {var _this2 = this;\n      if (!this.touchTimer) {\n        var index = this.calcIndex(e.touches[0].clientX);\n        this.$emit('indexChange', index);\n        this.percent = index / this.total * 100;\n        this.touchTimer = setTimeout(function () {\n          _this2.touchTimer = null;\n        }, 100);\n      }\n    },\n\n    /**\n       * 输入位置计算index\n       **/\n    calcIndex: function calcIndex(px) {\n      var single = (this.right - this.left) / this.total;\n      var index = Math.round((px - this.left) / single);\n      index = index < 0 ? 0 : index;\n      index = index > this.total ? this.total : index;\n      return index;\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9teVByb2dyZXNzLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQURBOztBQUtBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQUxBLEVBREE7OztBQVdBLE1BWEEsa0JBV0E7QUFDQTtBQUNBLGFBREEsRUFDQTtBQUNBLGNBRkEsRUFFQTtBQUNBLG9CQUhBO0FBSUEsc0JBSkEsRUFJQTtBQUNBLGdCQUxBOztBQU9BLEdBbkJBO0FBb0JBLFNBcEJBLHFCQW9CQTtBQUNBO0FBQ0E7QUFDQSxHQXZCQTtBQXdCQTs7QUFFQSxlQUZBLHlCQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLEVBR0EsSUFIQTtBQUlBLEtBUkE7O0FBVUEsY0FWQSx3QkFVQTtBQUNBO0FBQ0EsS0FaQTs7QUFjQSxZQWRBLG9CQWNBLENBZEEsRUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FuQkE7O0FBcUJBLGFBckJBLHFCQXFCQSxDQXJCQSxFQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQSxHQUZBO0FBR0E7QUFDQSxLQTlCQTs7QUFnQ0E7OztBQUdBLGFBbkNBLHFCQW1DQSxFQW5DQSxFQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXpDQSxFQXhCQSxFIiwiZmlsZSI6IjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwicHJvZ3Jlc3MtY29udGFpbmVyXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInByb2dyZXNzLWNvbnRhaW5lcjJcIiBpZD1cInByb2dyZXNzXCIgQHRvdWNoc3RhcnQ9XCJ0b3VjaHN0YXJ0XCIgQHRvdWNoZW5kPVwidG91Y2hlbmRcIiBAdG91Y2htb3ZlPVwidG91Y2htb3ZlXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZ3Jlc3MtYm94XCI+XHJcblx0XHRcdFx0PHByb2dyZXNzIDpwZXJjZW50PVwicGVyY2VudFwiIGFjdGl2ZUNvbG9yPVwiIzAwMFwiIGJhY2tncm91bmRDb2xvcj1cIiMxYzFjMWNcIiBzdHJva2Utd2lkdGg9XCIzXCIvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmFsbC1ib3hcIiA6Y2xhc3M9XCJ7YmlnZ2VyOiBpc1RvdWNoLCBzaGFkb3c6IGlzVG91Y2h9XCIgOnN0eWxlPVwie2xlZnQ6IGAke3BlcmNlbnR9JWB9XCI+PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczp7XHJcblx0XHRcdHRvdGFsOiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0aW5kZXg6IHtcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogMFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHsgXHJcblx0XHRcdFx0bGVmdDogMCwgIC8v6L+b5bqm5p2h5pyA5bem5L6n5L2N572uXHJcblx0XHRcdFx0cmlnaHQ6IDAsICAvL+i/m+W6puadoeacgOWPs+S+p+S9jee9rlxyXG5cdFx0XHRcdGlzVG91Y2g6IGZhbHNlLCAgXHJcblx0XHRcdFx0dG91Y2hUaW1lcjogbnVsbCwgIC8v55So5LqO6Kem5pG46IqC5rWBXHJcblx0XHRcdFx0cGVyY2VudDogMCxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMucGVyY2VudCA9IHRoaXMuaW5kZXggLyB0aGlzLnRvdGFsICogMTAwXHJcblx0XHRcdHRoaXMuZ2V0TG9jYXRpb24oKVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0XHJcblx0XHRcdGdldExvY2F0aW9uKCkge1xyXG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdFx0XHRxdWVyeS5zZWxlY3QoJyNwcm9ncmVzcycpLmJvdW5kaW5nQ2xpZW50UmVjdChkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMubGVmdCA9IGRhdGEubGVmdFxyXG5cdFx0XHRcdFx0dGhpcy5yaWdodCA9IGRhdGEucmlnaHRcclxuXHRcdFx0XHR9KS5leGVjKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHR0b3VjaHN0YXJ0KCkge1xyXG5cdFx0XHRcdHRoaXMuaXNUb3VjaCA9IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdHRvdWNoZW5kKGUpIHtcclxuXHRcdFx0XHR0aGlzLmlzVG91Y2ggPSBmYWxzZVxyXG5cdFx0XHRcdGxldCBpbmRleCA9IHRoaXMuY2FsY0luZGV4KGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WClcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdpbmRleENoYW5nZScsIGluZGV4KVxyXG5cdFx0XHRcdHRoaXMucGVyY2VudCA9IGluZGV4IC8gdGhpcy50b3RhbCAqIDEwMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0dG91Y2htb3ZlKGUpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMudG91Y2hUaW1lcikge1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gdGhpcy5jYWxjSW5kZXgoZS50b3VjaGVzWzBdLmNsaWVudFgpIFxyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnaW5kZXhDaGFuZ2UnLCBpbmRleClcclxuXHRcdFx0XHRcdHRoaXMucGVyY2VudCA9IGluZGV4IC8gdGhpcy50b3RhbCAqIDEwMFxyXG5cdFx0XHRcdFx0dGhpcy50b3VjaFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMudG91Y2hUaW1lciA9IG51bGw7XHJcblx0XHRcdFx0XHR9LCAxMDApXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6L6T5YWl5L2N572u6K6h566XaW5kZXhcclxuXHRcdFx0KiovXHJcblx0XHRcdGNhbGNJbmRleChweCkge1xyXG5cdFx0XHRcdGxldCBzaW5nbGUgPSAodGhpcy5yaWdodCAtIHRoaXMubGVmdCkgLyB0aGlzLnRvdGFsXHJcblx0XHRcdFx0bGV0IGluZGV4ID0gTWF0aC5yb3VuZCgocHggLSB0aGlzLmxlZnQpIC8gc2luZ2xlKVxyXG5cdFx0XHRcdGluZGV4ID0gaW5kZXggPCAwID8gMCA6IGluZGV4XHJcblx0XHRcdFx0aW5kZXggPSBpbmRleCA+IHRoaXMudG90YWwgPyB0aGlzLnRvdGFsIDogaW5kZXhcclxuXHRcdFx0XHRyZXR1cm4gaW5kZXhcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdC5wcm9ncmVzcy1jb250YWluZXJ7XHJcblx0XHRwYWRkaW5nOiAwIDEwcHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdC5wcm9ncmVzcy1jb250YWluZXIye1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHQucHJvZ3Jlc3MtYm94e1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5iYWxsLWJveHtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0d2lkdGg6IDEwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMHB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQuc2hhZG93e1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDVweCByZ2JhKCM4ODgsLjQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5iaWdnZXJ7XHJcblx0XHRcdFx0d2lkdGg6IDIwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 22 */
/*!***********************************!*\
  !*** D:/read_demo/store/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 21));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue.default.use(_vuex.default);\n\nvar store = new _vuex.default.Store({\n  state: {\n    fontSize: '',\n    lineHeight: '',\n    background: '' },\n\n  mutations: {\n    setFontSize: function setFontSize(state, res) {\n      state.fontSize = res;\n    },\n    setLineHeight: function setLineHeight(state, res) {\n      state.lineHeight = res;\n    },\n    setBackground: function setBackground(state, res) {\n      state.background = res;\n    } },\n\n  actions: {} });var _default =\n\n\n\n\nstore;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJzdGF0ZSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImJhY2tncm91bmQiLCJtdXRhdGlvbnMiLCJzZXRGb250U2l6ZSIsInJlcyIsInNldExpbmVIZWlnaHQiLCJzZXRCYWNrZ3JvdW5kIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6InVGQUFBO0FBQ0Esd0U7O0FBRUFBLGFBQUlDLEdBQUosQ0FBUUMsYUFBUjs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsSUFBSUQsY0FBS0UsS0FBVCxDQUFlO0FBQzVCQyxPQUFLLEVBQUU7QUFDTkMsWUFBUSxFQUFFLEVBREo7QUFFTkMsY0FBVSxFQUFFLEVBRk47QUFHTkMsY0FBVSxFQUFFLEVBSE4sRUFEcUI7O0FBTTVCQyxXQUFTLEVBQUU7QUFDVkMsZUFEVSx1QkFDRUwsS0FERixFQUNTTSxHQURULEVBQ2M7QUFDdkJOLFdBQUssQ0FBQ0MsUUFBTixHQUFpQkssR0FBakI7QUFDQSxLQUhTO0FBSVZDLGlCQUpVLHlCQUlJUCxLQUpKLEVBSVdNLEdBSlgsRUFJZ0I7QUFDekJOLFdBQUssQ0FBQ0UsVUFBTixHQUFtQkksR0FBbkI7QUFDQSxLQU5TO0FBT1ZFLGlCQVBVLHlCQU9JUixLQVBKLEVBT1dNLEdBUFgsRUFPZ0I7QUFDekJOLFdBQUssQ0FBQ0csVUFBTixHQUFtQkcsR0FBbkI7QUFDQSxLQVRTLEVBTmlCOztBQWlCNUJHLFNBQU8sRUFBRSxFQWpCbUIsRUFBZixDQUFkLEM7Ozs7O0FBc0JlWCxLIiwiZmlsZSI6IjIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXHJcblxyXG5WdWUudXNlKFZ1ZXgpXHJcblxyXG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcclxuXHRzdGF0ZToge1xyXG5cdFx0Zm9udFNpemU6ICcnLFxyXG5cdFx0bGluZUhlaWdodDogJycsXHJcblx0XHRiYWNrZ3JvdW5kOiAnJ1xyXG5cdH0sXHJcblx0bXV0YXRpb25zOiB7XHJcblx0XHRzZXRGb250U2l6ZShzdGF0ZSwgcmVzKSB7XHJcblx0XHRcdHN0YXRlLmZvbnRTaXplID0gcmVzO1xyXG5cdFx0fSxcclxuXHRcdHNldExpbmVIZWlnaHQoc3RhdGUsIHJlcykge1xyXG5cdFx0XHRzdGF0ZS5saW5lSGVpZ2h0ID0gcmVzO1xyXG5cdFx0fSxcclxuXHRcdHNldEJhY2tncm91bmQoc3RhdGUsIHJlcykge1xyXG5cdFx0XHRzdGF0ZS5iYWNrZ3JvdW5kID0gcmVzO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0YWN0aW9uczoge1xyXG5cdFx0XHJcblx0fVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
     true &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ( true && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),
/* 24 */
/*!****************************!*\
  !*** D:/read_demo/App.vue ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 25);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDbUs7QUFDbkssZ0JBQWdCLHNMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!*****************************************************!*\
  !*** D:/read_demo/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 26);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStoQixDQUFnQiw2bEJBQUcsRUFBQyIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/read_demo/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 27)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---'
      } catch (e) {
        v = '[object object]'
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 28 */
/*!***********************************!*\
  !*** D:/read_demo/utils/utils.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.traditionalized = traditionalized;function simpPYStr() {\n  return '啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽劲荆兢觉决诀绝均菌钧军君峻俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座锕嗳嫒瑷暧霭谙铵鹌媪骜鳌钯呗钣鸨龅鹎贲锛荜哔滗铋筚跸苄缏笾骠飑飙镖镳鳔傧缤槟殡膑镔髌鬓禀饽钹鹁钸骖黪恻锸侪钗冁谄谶蒇忏婵骣觇禅镡伥苌怅阊鲳砗伧谌榇碜龀枨柽铖铛饬鸱铳俦帱雠刍绌蹰钏怆缍鹑辍龊鹚苁骢枞辏撺锉鹾哒鞑骀绐殚赕瘅箪谠砀裆焘镫籴诋谛绨觌镝巅钿癫铫鲷鲽铤铥岽鸫窦渎椟牍笃黩簖怼镦炖趸铎谔垩阏轭锇锷鹗颚颛鳄诶迩铒鸸鲕钫鲂绯镄鲱偾沣凫驸绂绋赙麸鲋鳆钆赅尴擀绀戆睾诰缟锆纥镉颍亘赓绠鲠诟缑觏诂毂钴锢鸪鹄鹘鸹掴诖掼鹳鳏犷匦刿妫桧鲑鳜衮绲鲧埚呙帼椁蝈铪阚绗颉灏颢诃阖蛎黉讧荭闳鲎浒鹕骅桦铧奂缳锾鲩鳇诙荟哕浍缋珲晖诨馄阍钬镬讦诘荠叽哜骥玑觊齑矶羁虿跻霁鲚鲫郏浃铗镓蛲谏缣戋戬睑鹣笕鲣鞯绛缰挢峤鹪鲛疖颌鲒卺荩馑缙赆觐刭泾迳弪胫靓阄鸠鹫讵屦榉飓钜锔窭龃锩镌隽谲珏皲剀垲忾恺铠锴龛闶钪铐骒缂轲钶锞颔龈铿喾郐哙脍狯髋诓诳邝圹纩贶匮蒉愦聩篑阃锟鲲蛴崃徕涞濑赉睐铼癞籁岚榄斓镧褴阆锒唠崂铑铹痨鳓诔缧俪郦坜苈莅蓠呖逦骊缡枥栎轹砺锂鹂疠粝跞雳鲡鳢蔹奁潋琏殓裢裣鲢魉缭钌鹩蔺廪檩辚躏绫棂蛏鲮浏骝绺镏鹨茏泷珑栊胧砻偻蒌喽嵝镂瘘耧蝼髅垆撸噜闾泸渌栌橹轳辂辘氇胪鸬鹭舻鲈脔娈栾鸾銮囵荦猡泺椤脶镙榈褛锊呒唛嬷杩劢缦镘颡鳗麽扪焖懑钔芈谧猕祢渑腼黾缈缪闵缗谟蓦馍殁镆钼铙讷铌鲵辇鲶茑袅陧蘖嗫颟蹑苎咛聍侬哝驽钕傩讴怄瓯蹒疱辔纰罴铍谝骈缥嫔钋镤镨蕲骐绮桤碛颀颃鳍佥荨悭骞缱椠钤嫱樯戗炝锖锵镪羟跄诮谯荞缲硗跷惬锲箧锓揿鲭茕蛱巯赇虮鳅诎岖阒觑鸲诠绻辁铨阕阙悫荛娆桡饪轫嵘蝾缛铷颦蚬飒毵糁缫啬铯穑铩鲨酾讪姗骟钐鳝垧殇觞厍滠畲诜谂渖谥埘莳弑轼贳铈鲥绶摅纾闩铄厮驷缌锶鸶薮馊飕锼谡稣谇荪狲唢睃闼铊鳎钛鲐昙钽锬顸傥饧铴镗韬铽缇鹈阗粜龆鲦恸钭钍抟饨箨鼍娲腽纨绾辋诿帏闱沩涠玮韪炜鲔阌莴龌邬庑怃妩骛鹉鹜饩阋玺觋硖苋莶藓岘猃娴鹇痫蚝籼跹芗饷骧缃飨哓潇骁绡枭箫亵撷绁缬陉荥馐鸺诩顼谖铉镟谑泶鳕埙浔鲟垭娅桠氩厣赝俨兖谳恹闫酽魇餍鼹炀轺鹞鳐靥谒邺晔烨诒呓峄饴怿驿缢轶贻钇镒镱瘗舣铟瘾茔莺萦蓥撄嘤滢潆璎鹦瘿颏罂镛莸铕鱿伛俣谀谕蓣嵛饫阈妪纡觎欤钰鹆鹬龉橼鸢鼋钺郓芸恽愠纭韫殒氲瓒趱錾驵赜啧帻箦谮缯谵诏钊谪辄鹧浈缜桢轸赈祯鸩诤峥钲铮筝骘栉栀轵轾贽鸷蛳絷踬踯觯锺纣绉伫槠铢啭馔颞骓缒诼镯谘缁辎赀眦锱龇鲻偬诹驺鲰镞缵躜鳟讠谫郄勐凼坂垅垴埯埝苘荬荮莜莼菰藁揸吒吣咔咝咴噘噼嚯幞岙嵴彷徼犸狍馀馇馓馕愣憷懔丬溆滟溷漤潴澹甯纟绔绱珉枧桊桉槔橥轱轷赍肷胨飚煳煅熘愍淼砜磙眍钚钷铘铞锃锍锎锏锘锝锪锫锿镅镎镢镥镩镲稆鹋鹛鹱疬疴痖癯裥襁耢颥螨麴鲅鲆鲇鲞鲴鲺鲼鳊鳋鳘鳙鞒鞴齄';\n}\nfunction ftPYStr() {\n  return '啊阿埃挨哎唉哀皚癌藹矮艾礙愛隘鞍氨安俺按暗岸胺案骯昂盎凹敖熬翺襖傲奧懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙壩霸罷爸白柏百擺佰敗拜稗斑班搬扳般頒板版扮拌伴瓣半辦絆邦幫梆榜膀綁棒磅蚌鎊傍謗苞胞包褒剝薄雹保堡飽寶抱報暴豹鮑爆杯碑悲卑北輩背貝鋇倍狽備憊焙被奔苯本笨崩繃甭泵蹦迸逼鼻比鄙筆彼碧蓖蔽畢斃毖幣庇痹閉敝弊必辟壁臂避陛鞭邊編貶扁便變卞辨辯辮遍標彪膘表鱉憋別癟彬斌瀕濱賓擯兵冰柄丙秉餅炳病並玻菠播撥缽波博勃搏鉑箔伯帛舶脖膊渤泊駁捕蔔哺補埠不布步簿部怖擦猜裁材才財睬踩采彩菜蔡餐參蠶殘慚慘燦蒼艙倉滄藏操糙槽曹草廁策側冊測層蹭插叉茬茶查碴搽察岔差詫拆柴豺攙摻蟬饞讒纏鏟產闡顫昌猖場嘗常長償腸廠敞暢唱倡超抄鈔朝嘲潮巢吵炒車扯撤掣徹澈郴臣辰塵晨忱沈陳趁襯撐稱城橙成呈乘程懲澄誠承逞騁秤吃癡持匙池遲弛馳恥齒侈尺赤翅斥熾充沖蟲崇寵抽酬疇躊稠愁籌仇綢瞅醜臭初出櫥廚躇鋤雛滁除楚礎儲矗搐觸處揣川穿椽傳船喘串瘡窗幢床闖創吹炊捶錘垂春椿醇唇淳純蠢戳綽疵茨磁雌辭慈瓷詞此刺賜次聰蔥囪匆從叢湊粗醋簇促躥篡竄摧崔催脆瘁粹淬翠村存寸磋撮搓措挫錯搭達答瘩打大呆歹傣戴帶殆代貸袋待逮怠耽擔丹單鄲撣膽旦氮但憚淡誕彈蛋當擋黨蕩檔刀搗蹈倒島禱導到稻悼道盜德得的蹬燈登等瞪凳鄧堤低滴迪敵笛狄滌翟嫡抵底地蒂第帝弟遞締顛掂滇碘點典靛墊電佃甸店惦奠澱殿碉叼雕雕刁掉吊釣調跌爹碟蝶叠諜疊丁盯叮釘頂鼎錠定訂丟東冬董懂動棟侗恫凍洞兜抖鬥陡豆逗痘都督毒犢獨讀堵睹賭杜鍍肚度渡妒端短鍛段斷緞堆兌隊對墩噸蹲敦頓囤鈍盾遁掇哆多奪垛躲朵跺舵剁惰墮蛾峨鵝俄額訛娥惡厄扼遏鄂餓恩而兒耳爾餌洱二貳發罰筏伐乏閥法琺藩帆番翻樊礬釩繁凡煩反返範販犯飯泛坊芳方肪房防妨仿訪紡放菲非啡飛肥匪誹吠肺廢沸費芬酚吩氛分紛墳焚汾粉奮份忿憤糞豐封楓蜂峰鋒風瘋烽逢馮縫諷奉鳳佛否夫敷膚孵扶拂輻幅氟符伏俘服浮涪福袱弗甫撫輔俯釜斧脯腑府腐赴副覆賦復傅付阜父腹負富訃附婦縛咐噶嘎該改概鈣蓋溉幹甘桿柑竿肝趕感稈敢贛岡剛鋼缸肛綱崗港杠篙臯高膏羔糕搞鎬稿告哥歌擱戈鴿胳疙割革葛格蛤閣隔鉻個各給根跟耕更庚羹埂耿梗工攻功恭龔供躬公宮弓鞏汞拱貢共鉤勾溝茍狗垢構購夠辜菇咕箍估沽孤姑鼓古蠱骨谷股故顧固雇刮瓜剮寡掛褂乖拐怪棺關官冠觀管館罐慣灌貫光廣逛瑰規圭矽歸龜閨軌鬼詭癸桂櫃跪貴劊輥滾棍鍋郭國果裹過哈骸孩海氦亥害駭酣憨邯韓含涵寒函喊罕翰撼捍旱憾悍焊汗漢夯杭航壕嚎豪毫郝好耗號浩呵喝荷菏核禾和何合盒貉閡河涸赫褐鶴賀嘿黑痕很狠恨哼亨橫衡恒轟哄烘虹鴻洪宏弘紅喉侯猴吼厚候後呼乎忽瑚壺葫胡蝴狐糊湖弧虎唬護互滬戶花嘩華猾滑畫劃化話槐徊懷淮壞歡環桓還緩換患喚瘓豢煥渙宦幻荒慌黃磺蝗簧皇凰惶煌晃幌恍謊灰揮輝徽恢蛔回毀悔慧卉惠晦賄穢會燴匯諱誨繪葷昏婚魂渾混豁活夥火獲或惑霍貨禍擊圾基機畸稽積箕肌饑跡激譏雞姬績緝吉極棘輯籍集及急疾汲即嫉級擠幾脊己薊技冀季伎祭劑悸濟寄寂計記既忌際繼紀嘉枷夾佳家加莢頰賈甲鉀假稼價架駕嫁殲監堅尖箋間煎兼肩艱奸緘繭檢柬堿鹼揀撿簡儉剪減薦檻鑒踐賤見鍵箭件健艦劍餞漸濺澗建僵姜將漿江疆蔣槳獎講匠醬降蕉椒礁焦膠交郊澆驕嬌嚼攪鉸矯僥腳狡角餃繳絞剿教酵轎較叫窖揭接皆稭街階截劫節莖睛晶鯨京驚精粳經井警景頸靜境敬鏡徑痙靖竟競凈炯窘揪究糾玖韭久灸九酒廄救舊臼舅咎就疚鞠拘狙疽居駒菊局咀矩舉沮聚拒據巨具距踞鋸俱句懼炬劇捐鵑娟倦眷卷絹撅攫抉掘倔爵桔傑捷睫竭潔結解姐戒藉芥界借介疥誡屆巾筋斤金今津襟緊錦僅謹進靳晉禁近燼浸盡勁荊兢覺決訣絕均菌鈞軍君峻俊竣浚郡駿喀咖卡咯開揩楷凱慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕顆科殼咳可渴克刻客課肯啃墾懇坑吭空恐孔控摳口扣寇枯哭窟苦酷庫褲誇垮挎跨胯塊筷儈快寬款匡筐狂框礦眶曠況虧盔巋窺葵奎魁傀饋愧潰坤昆捆困括擴廓闊垃拉喇蠟臘辣啦萊來賴藍婪欄攔籃闌蘭瀾讕攬覽懶纜爛濫瑯榔狼廊郎朗浪撈勞牢老佬姥酪烙澇勒樂雷鐳蕾磊累儡壘擂肋類淚棱楞冷厘梨犁黎籬貍離漓理李裏鯉禮莉荔吏栗麗厲勵礫歷利傈例俐痢立粒瀝隸力璃哩倆聯蓮連鐮廉憐漣簾斂臉鏈戀煉練糧涼梁粱良兩輛量晾亮諒撩聊僚療燎寥遼潦了撂鐐廖料列裂烈劣獵琳林磷霖臨鄰鱗淋凜賃吝拎玲菱零齡鈴伶羚淩靈陵嶺領另令溜琉榴硫餾留劉瘤流柳六龍聾嚨籠窿隆壟攏隴樓婁摟簍漏陋蘆盧顱廬爐擄鹵虜魯麓碌露路賂鹿潞祿錄陸戮驢呂鋁侶旅履屢縷慮氯律率濾綠巒攣孿灤卵亂掠略掄輪倫侖淪綸論蘿螺羅邏鑼籮騾裸落洛駱絡媽麻瑪碼螞馬罵嘛嗎埋買麥賣邁脈瞞饅蠻滿蔓曼慢漫謾芒茫盲氓忙莽貓茅錨毛矛鉚卯茂冒帽貌貿麽玫枚梅酶黴煤沒眉媒鎂每美昧寐妹媚門悶們萌蒙檬盟錳猛夢孟瞇醚靡糜迷謎彌米秘覓泌蜜密冪棉眠綿冕免勉娩緬面苗描瞄藐秒渺廟妙蔑滅民抿皿敏憫閩明螟鳴銘名命謬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌謀牟某拇牡畝姆母墓暮幕募慕木目睦牧穆拿哪吶鈉那娜納氖乃奶耐奈南男難囊撓腦惱鬧淖呢餒內嫩能妮霓倪泥尼擬妳匿膩逆溺蔫拈年碾攆撚念娘釀鳥尿捏聶孽嚙鑷鎳涅您檸獰凝寧擰濘牛扭鈕紐膿濃農弄奴努怒女暖虐瘧挪懦糯諾哦歐鷗毆藕嘔偶漚啪趴爬帕怕琶拍排牌徘湃派攀潘盤磐盼畔判叛乓龐旁耪胖拋咆刨炮袍跑泡呸胚培裴賠陪配佩沛噴盆砰抨烹澎彭蓬棚硼篷膨朋鵬捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片騙飄漂瓢票撇瞥拼頻貧品聘乒坪蘋萍平憑瓶評屏坡潑頗婆破魄迫粕剖撲鋪仆莆葡菩蒲埔樸圃普浦譜曝瀑期欺棲戚妻七淒漆柒沏其棋奇歧畦崎臍齊旗祈祁騎起豈乞企啟契砌器氣迄棄汽泣訖掐洽牽扡釬鉛千遷簽仟謙乾黔錢鉗前潛遣淺譴塹嵌欠歉槍嗆腔羌墻薔強搶橇鍬敲悄橋瞧喬僑巧鞘撬翹峭俏竅切茄且怯竊欽侵親秦琴勤芹擒禽寢沁青輕氫傾卿清擎晴氰情頃請慶瓊窮秋丘邱球求囚酋泅趨區蛆曲軀屈驅渠取娶齲趣去圈顴權醛泉全痊拳犬券勸缺炔瘸卻鵲榷確雀裙群然燃冉染瓤壤攘嚷讓饒擾繞惹熱壬仁人忍韌任認刃妊紉扔仍日戎茸蓉榮融熔溶容絨冗揉柔肉茹蠕儒孺如辱乳汝入褥軟阮蕊瑞銳閏潤若弱撒灑薩腮鰓塞賽三三傘散桑嗓喪搔騷掃嫂瑟色澀森僧莎砂殺剎沙紗傻啥煞篩曬珊苫杉山刪煽衫閃陜擅贍膳善汕扇繕墑傷商賞晌上尚裳梢捎稍燒芍勺韶少哨邵紹奢賒蛇舌舍赦攝射懾涉社設砷申呻伸身深娠紳神沈審嬸甚腎慎滲聲生甥牲升繩省盛剩勝聖師失獅施濕詩屍虱十石拾時什食蝕實識史矢使屎駛始式示士世柿事拭誓逝勢是嗜噬適仕侍釋飾氏市恃室視試收手首守壽授售受瘦獸蔬樞梳殊抒輸叔舒淑疏書贖孰熟薯暑曙署蜀黍鼠屬術述樹束戍豎墅庶數漱恕刷耍摔衰甩帥栓拴霜雙爽誰水睡稅吮瞬順舜說碩朔爍斯撕嘶思私司絲死肆寺嗣四伺似飼巳松聳慫頌送宋訟誦搜艘擻嗽蘇酥俗素速粟僳塑溯宿訴肅酸蒜算雖隋隨綏髓碎歲穗遂隧祟孫損筍蓑梭唆縮瑣索鎖所塌他它她塔獺撻蹋踏胎苔擡臺泰酞太態汰坍攤貪癱灘壇檀痰潭譚談坦毯袒碳探嘆炭湯塘搪堂棠膛唐糖倘躺淌趟燙掏濤滔絳萄桃逃淘陶討套特藤騰疼謄梯剔踢銻提題蹄啼體替嚏惕涕剃屜天添填田甜恬舔腆挑條迢眺跳貼鐵帖廳聽烴汀廷停亭庭挺艇通桐酮瞳同銅彤童桶捅筒統痛偷投頭透凸禿突圖徒途塗屠土吐兔湍團推頹腿蛻褪退吞屯臀拖托脫鴕陀馱駝橢妥拓唾挖哇蛙窪娃瓦襪歪外豌彎灣玩頑丸烷完碗挽晚皖惋宛婉萬腕汪王亡枉網往旺望忘妄威巍微危韋違桅圍唯惟為濰維葦萎委偉偽尾緯未蔚味畏胃餵魏位渭謂尉慰衛瘟溫蚊文聞紋吻穩紊問嗡翁甕撾蝸渦窩我斡臥握沃巫嗚鎢烏汙誣屋無蕪梧吾吳毋武五捂午舞伍侮塢戊霧晤物勿務悟誤昔熙析西硒矽晰嘻吸錫犧稀息希悉膝夕惜熄烯溪汐犀檄襲席習媳喜銑洗系隙戲細瞎蝦匣霞轄暇峽俠狹下廈夏嚇掀鍁先仙鮮纖鹹賢銜舷閑涎弦嫌顯險現獻縣腺餡羨憲陷限線相廂鑲香箱襄湘鄉翔祥詳想響享項巷橡像向象蕭硝霄削哮囂銷消宵淆曉小孝校肖嘯笑效楔些歇蠍鞋協挾攜邪斜脅諧寫械卸蟹懈泄瀉謝屑薪芯鋅欣辛新忻心信釁星腥猩惺興刑型形邢行醒幸杏性姓兄兇胸匈洶雄熊休修羞朽嗅銹秀袖繡墟戌需虛噓須徐許蓄酗敘旭序畜恤絮婿緒續軒喧宣懸旋玄選癬眩絢靴薛學穴雪血勛熏循旬詢尋馴巡殉汛訓訊遜迅壓押鴉鴨呀丫芽牙蚜崖衙涯雅啞亞訝焉咽閹煙淹鹽嚴研蜒巖延言顏閻炎沿奄掩眼衍演艷堰燕厭硯雁唁彥焰宴諺驗殃央鴦秧楊揚佯瘍羊洋陽氧仰癢養樣漾邀腰妖瑤搖堯遙窯謠姚咬舀藥要耀椰噎耶爺野冶也頁掖業葉曳腋夜液壹壹醫揖銥依伊衣頤夷遺移儀胰疑沂宜姨彜椅蟻倚已乙矣以藝抑易邑屹億役臆逸肄疫亦裔意毅憶義益溢詣議誼譯異翼翌繹茵蔭因殷音陰姻吟銀淫寅飲尹引隱印英櫻嬰鷹應纓瑩螢營熒蠅迎贏盈影穎硬映喲擁傭臃癰庸雍踴蛹詠泳湧永恿勇用幽優悠憂尤由郵鈾猶油遊酉有友右佑釉誘又幼迂淤於盂榆虞愚輿余俞逾魚愉渝漁隅予娛雨與嶼禹宇語羽玉域芋郁籲遇喻峪禦愈欲獄育譽浴寓裕預豫馭鴛淵冤元垣袁原援轅園員圓猿源緣遠苑願怨院曰約越躍鑰嶽粵月悅閱耘雲鄖勻隕允運蘊醞暈韻孕匝砸雜栽哉災宰載再在咱攢暫贊贓臟葬遭糟鑿藻棗早澡蚤躁噪造皂竈燥責擇則澤賊怎增憎曾贈紮喳渣劄軋鍘閘眨柵榨咋乍炸詐摘齋宅窄債寨瞻氈詹粘沾盞斬輾嶄展蘸棧占戰站湛綻樟章彰漳張掌漲杖丈帳賬仗脹瘴障招昭找沼趙照罩兆肇召遮折哲蟄轍者鍺蔗這浙珍斟真甄砧臻貞針偵枕疹診震振鎮陣蒸掙睜征猙爭怔整拯正政幀癥鄭證芝枝支吱蜘知肢脂汁之織職直植殖執值侄址指止趾只旨紙誌摯擲至致置幟峙制智秩稚質炙痔滯治窒中盅忠鐘衷終種腫重仲眾舟周州洲謅粥軸肘帚咒皺宙晝驟珠株蛛朱豬諸誅逐竹燭煮拄矚囑主著柱助蛀貯鑄築住註祝駐抓爪拽專磚轉撰賺篆樁莊裝妝撞壯狀椎錐追贅墜綴諄準捉拙卓桌琢茁酌啄著灼濁茲咨資姿滋淄孜紫仔籽滓子自漬字鬃棕蹤宗綜總縱鄒走奏揍租足卒族祖詛阻組鉆纂嘴醉最罪尊遵昨左佐柞做作坐座錒噯嬡璦曖靄諳銨鵪媼驁鰲鈀唄鈑鴇齙鵯賁錛蓽嗶潷鉍篳蹕芐緶籩驃颮飆鏢鑣鰾儐繽檳殯臏鑌髕鬢稟餑鈸鵓鈽驂黲惻鍤儕釵囅諂讖蕆懺嬋驏覘禪鐔倀萇悵閶鯧硨傖諶櫬磣齔棖檉鋮鐺飭鴟銃儔幬讎芻絀躕釧愴綞鶉輟齪鶿蓯驄樅輳攛銼鹺噠韃駘紿殫賧癉簞讜碭襠燾鐙糴詆諦綈覿鏑巔鈿癲銚鯛鰈鋌銩崠鶇竇瀆櫝牘篤黷籪懟鐓燉躉鐸諤堊閼軛鋨鍔鶚顎顓鱷誒邇鉺鴯鮞鈁魴緋鐨鯡僨灃鳧駙紱紼賻麩鮒鰒釓賅尷搟紺戇睪誥縞鋯紇鎘潁亙賡綆鯁詬緱覯詁轂鈷錮鴣鵠鶻鴰摑詿摜鸛鰥獷匭劌媯檜鮭鱖袞緄鯀堝咼幗槨蟈鉿闞絎頡灝顥訶闔蠣黌訌葒閎鱟滸鶘驊樺鏵奐繯鍰鯇鰉詼薈噦澮繢琿暉諢餛閽鈥鑊訐詰薺嘰嚌驥璣覬齏磯羈蠆躋霽鱭鯽郟浹鋏鎵蟯諫縑戔戩瞼鶼筧鰹韉絳韁撟嶠鷦鮫癤頜鮚巹藎饉縉贐覲剄涇逕弳脛靚鬮鳩鷲詎屨櫸颶鉅鋦窶齟錈鐫雋譎玨皸剴塏愾愷鎧鍇龕閌鈧銬騍緙軻鈳錁頷齦鏗嚳鄶噲膾獪髖誆誑鄺壙纊貺匱蕢憒聵簣閫錕鯤蠐崍徠淶瀨賚睞錸癩籟嵐欖斕鑭襤閬鋃嘮嶗銠鐒癆鰳誄縲儷酈壢藶蒞蘺嚦邐驪縭櫪櫟轢礪鋰鸝癘糲躒靂鱺鱧蘞奩瀲璉殮褳襝鰱魎繚釕鷯藺廩檁轔躪綾欞蟶鯪瀏騮綹鎦鷚蘢瀧瓏櫳朧礱僂蔞嘍嶁鏤瘺耬螻髏壚擼嚕閭瀘淥櫨櫓轤輅轆氌臚鸕鷺艫鱸臠孌欒鸞鑾圇犖玀濼欏腡鏍櫚褸鋝嘸嘜嬤榪勱縵鏝顙鰻麼捫燜懣鍆羋謐獼禰澠靦黽緲繆閔緡謨驀饃歿鏌鉬鐃訥鈮鯢輦鯰蔦裊隉蘗囁顢躡苧嚀聹儂噥駑釹儺謳慪甌蹣皰轡紕羆鈹諞駢縹嬪釙鏷鐠蘄騏綺榿磧頎頏鰭僉蕁慳騫繾槧鈐嬙檣戧熗錆鏘鏹羥蹌誚譙蕎繰磽蹺愜鍥篋鋟撳鯖煢蛺巰賕蟣鰍詘嶇闃覷鴝詮綣輇銓闋闕愨蕘嬈橈飪軔嶸蠑縟銣顰蜆颯毿糝繅嗇銫穡鎩鯊釃訕姍騸釤鱔坰殤觴厙灄畬詵諗瀋謚塒蒔弒軾貰鈰鰣綬攄紓閂鑠廝駟緦鍶鷥藪餿颼鎪謖穌誶蓀猻嗩脧闥鉈鰨鈦鮐曇鉭錟頇儻餳鐋鏜韜鋱緹鵜闐糶齠鰷慟鈄釷摶飩籜鼉媧膃紈綰輞諉幃闈溈潿瑋韙煒鮪閿萵齷鄔廡憮嫵騖鵡鶩餼鬩璽覡硤莧薟蘚峴獫嫻鷴癇蠔秈躚薌餉驤緗饗嘵瀟驍綃梟簫褻擷紲纈陘滎饈鵂詡頊諼鉉鏇謔澩鱈塤潯鱘埡婭椏氬厴贗儼兗讞懨閆釅魘饜鼴煬軺鷂鰩靨謁鄴曄燁詒囈嶧飴懌驛縊軼貽釔鎰鐿瘞艤銦癮塋鶯縈鎣攖嚶瀅瀠瓔鸚癭頦罌鏞蕕銪魷傴俁諛諭蕷崳飫閾嫗紆覦歟鈺鵒鷸齬櫞鳶黿鉞鄆蕓惲慍紜韞殞氳瓚趲鏨駔賾嘖幘簀譖繒譫詔釗謫輒鷓湞縝楨軫賑禎鴆諍崢鉦錚箏騭櫛梔軹輊贄鷙螄縶躓躑觶鍾紂縐佇櫧銖囀饌顳騅縋諑鐲諮緇輜貲眥錙齜鯔傯諏騶鯫鏃纘躦鱒訁譾郤猛氹阪壟堖垵墊檾蕒葤蓧蒓菇槁摣咤唚哢噝噅撅劈謔襆嶴脊仿僥獁麅餘餷饊饢楞怵懍爿漵灩混濫瀦淡寧糸絝緔瑉梘棬案橰櫫軲軤賫膁腖飈糊煆溜湣渺碸滾瞘鈈鉕鋣銱鋥鋶鐦鐧鍩鍀鍃錇鎄鎇鎿鐝鑥鑹鑔穭鶓鶥鸌癧屙瘂臒襇繈耮顬蟎麯鮁鮃鮎鯗鯝鯴鱝鯿鰠鰵鱅鞽韝齇';\n}\nfunction qqPYStr()\n{\n  return '娿婀埃挨餀呃哀皑癌蔼婑銰碍嬡隘鞍氨鮟唵洝暗岸胺案肮昻盎凹獓熬翱仸謸奧襖奧妑捌朳朳妑笆仈疤妑菝柭靶妑耙坝覇罢妑皛柏咟擺佰敗湃稗癍癍搬扳瘢頒闆蝂汾絆柈瓣柈刅绊綁幇梆徬嫎垹蜯嫎蚌镑徬谤苞菢笣褒剝薄雹湺堡怉寶砲蕔懪豹鲍嚗柸碑蕜萆苝輩揹赑钡俻狈備惫焙被渀苯夲苯镚绷甭泵嘣逬腷嬶仳啚毣彼碧蓖幣滭斃毖币庇痹閉獙弊怭澼壁臂鐴陛鞭笾揙貶碥楩變卞辧辮辮猵摽滮鏢錶鳖憋莂癟彬斌濒璸濱摈娦栤窉眪秉饼炳疒並箥菠譒妭钵菠博勃搏铂箔伯帛舶脖膊渤泊訤峬卜誧卟埠芣鈽荹簿蔀怖攃猜裁財財財棌棌采埰婇蔡爘傪蛬殘慙參灿芲舱仺獊蔵懆鐰槽蓸愺厠憡側冊恻層竲揷紁茬嗏楂楂搽镲岔槎诧拆枈豺搀傪蝉镵谗瀍铲浐闡顫誯猖畼甞瑺萇偿肠廠敞畅晿倡趫莏鈔謿謿謿漅訬炒車扯徹掣沏瞮郴烥宸尘曟忱冗陳趁衬撐稱峸橙荿珵塖珵懲僜諴承浧骋秤阣痴歭匙肔呎肔肔恥歯侈呎哧趐斥炽茺沖蟲漴寵菗絒帱帱婤僽薵仇皗瞅忸溴初炪廚廚躇鋤雛蒢篨椘绌储矗搐触處遄巛瑏椽伝船遄賗疮囱幢床闖創欥炊腄腄箠舂椿錞脣錞蒓蠢戥焯疵垐濨雌辭濨瓷詞泚剌賜佽聪茐囱茐苁苁凑粗齰簇娖蹿篡窜凗慛慛脆瘁濢濢濢籿洊籿磋撮髊措挫措溚垯荅瘩咑汏槑歹傣瀻帶殆笩贷袋待曃怠耽泹冄啴郸掸狚狚氮泹惮惔诞弹疍當澢黨蕩澢叨搗稲箌島祷导菿稲悼檤盜徳嘚哋簦燈憕等簦凳郰諟彽嘀廸敵廸狄涤翟嫡抵疧哋渧苐渧弚递缔颠掂滇碘點敟靛垫電佃甸扂惦奠淀殿淍汈鵰蜩刁鋽铞銱蜩瓞嗲渫渫迭媟疉玎饤汀町嵿鼎锭萣忊丟崬笗蓳慬憅崬侗恫岽狪兠鬦乧跿荳浢哣嘟督毐渎獨渎陼睹帾荰镀肚喥喥妒鍴短葮葮斷葮碓兌隊怼墩沌壿敦頓囤沌盾遁掇哆哆奪垛躱朶跺舵剁媠憜睋睋鹅皒额讹皒悪苊扼遏鄂皒慁洏ル洱尒聶洱②贰潑藅筏浌疺阀琺珐藩汎畨飜樊矾钒瀿汎煩反返笵贩氾粄疺汸淓汸肪房汸妨汸汸汸倣婔悱啡飛萉厞诽吠腓廢沸曊棼酚玢氛汾妢墳焚汾帉奮妢忿濆粪仹崶猦蜂峯峯颩瘋烽漨溤漨讽唪鳯仏娝玞敷膚孵荴拂辐諨氟苻茯俘棴捊涪湢袱弗甫抚辅椨釜釡脯腑椨腐赴諨覆賦復傅苻阜父腹萯冨讣胕妇缚咐噶嗄姟妀漑鈣葢漑迀苷杆柑芉肝迀憾秆噉赣罓碙鋼矼釭罁罓港釭禞皋滈膏餻溔鎬鎬鎬哠滒戨擱戈鸽胳疙剨愅噶咯蛤阁隔铬個茖给艮茛畊浭菮羹埂耿梗笁糼糼塨龚栱匑厷営弖巩汞珙貢珙溝芶芶苟豞垢媾媾夠辜菇咕箍诂钴箛菇鼔咕蛊嗗唂骰诂顧凅雇剮呱剮寡啩啩乖枴怪菅関菅蒄觀涫菅潅遦潅遦洸広迋瑰規圭硅歸亀閨匦媿詭癸蓕匱蛫貴刽辊蔉輥煱漷國淉裹過铪骸陔嗨氦亥嗐骇酣憨邯韓浛凾寒凾諴癷翰撼捍猂憾悍猂汙漢夯忼航壕嚎濠毫郝恏秏呺滘哬曷嗬菏劾秝啝哬匼盉貉阂菏涸赫褐鹤哿潶嫼痕佷哏悢涥悙橫蘅恆轟晎烘渱鴻葓宖宖葒糇糇糇犼厚糇後苸苸唿瑚壺煳箶箶狐煳煳弧唬唬戶沍戶戶埖蕐澕磆磆畵劃囮話槐佪懷准壞歡寰桓還緩換漶喚痪豢焕涣宦抝巟巟曂磺蝗簧瑝瑝瑝瑝愰縨恍巟洃媈媈幑恢蛔冋毇珻慧卉惠珻贿秽浍烩匯讳诲浍荤涽殙魂渾婫豁萿钬焱镬戓惑靃貨禍击圾樭僟畸稽積箕肌饥迹噭讥鶏姬绩缉咭极棘辑籍潗彶喼疾汲旣嫉级哜凢脊己蓟技冀悸伎祭剂悸哜寄寂計汜旣忌漈继汜嘉枷夾佳傢咖荚颊贾曱钾徦糘價泇駕糘姧盬堅尖笺簡煎凲肩艰奷缄茧撿柬碱硷拣撿彅倹彅諴薦槛鉴践濺見楗箭件揵舰劍饯渐溅涧踺壃葁將槳茳彊蔣桨奨講匠醬夅蕉椒礁潐烄茭郊浇嬌嬌嚼搅铰矫侥腳烄角饺儌烄剿嘋酵轿珓嘂窖揭帹湝秸街阶截劫兯莖聙瞐鯨倞驚棈粳經丼檠憬頸靜璄擏傹徑痉靖獍競凈泂僒啾究糾玖韭玖灸勼氿厩慦舊臼舅咎僦咎鞠佝狙疽劇驹匊挶咀怇舉沮藂岠琚姖倶岠踞涺倶呴惧岠涺涓鵑涓惓眷捲涓瘚攫決崛崛嚼桔傑啑睫竭洁結解姐悈藉芥鎅徣夰疥诫屆凧荕釿唫妗珒噤緊婂僅殣琎靳晉噤菦烬锓浕勁荊兢覺吷吷蕝汮箘呁軍焄浚浚浚浚郡浚喀咖鉲咯閞揩揩剀慨刋堪勘坎歃看嫝嵻嵻摃忼囥忼栲洘栲靠坷岢柯錁溘錁萪涜嗑妸渇尅尅愙錁肻肻恳垦妔妔涳恐芤啌摳囗釦簆喖哭崫楛酷厙褲洿垮挎跨胯赽筷侩赽寬窾匡筺誑框纩洭纩況扝盔岿窺葵喹魁傀潰隗潰堒崐涃涃葀拡霩闊柆菈喇臘臘辣菈莱唻攋藍漤孄拦藍阑蘭瀾谰灠灠攋灠灡嚂哴蓈哴蓢蓢蓢烺崂崂窂荖佬粩絡絡崂嘞泺檑檑檑藞蔂儡垒檑叻類汨棱楞唥厘悡犁黎篱狸蓠漓理李里鲤礼莉荔吏栗婯疠励砾呖悡傈唎俐痢竝粒沥隶劦璃哩唡聅嗹涟镰廉憐涟帘潋臉嗹戀煉煉悢涼樑粱悢倆唡糧涼煷涼嫽窷獠療獠寥辽潦孒撂镣漻料烮煭烮挘獵啉啉潾霖臨鄰潾啉凛賃悋柃玪夌蕶齡玪伶玪夌靈夌玪領叧泠媹琉媹硫馏畱嚠媹蓅栁陸瀧聾茏茏窿湰泷泷茏溇溇嵝溇屚陋廬盧颅廬爐掳卤虏噜麓碌蕗蕗赂蔍潞禄淥陸戮馿焒焒佀膂履屢缕慮氯侓卛慮淥欒孌孿滦卵亂稤畧囵囵囵仑囵纶囵囉螺囉羅囉儸骡裸落詻詻絡媽嫲犸犸犸骉罵嫲嬤埋荬麥賣邁霡慲獌蠻慲嫚嫚嫚嫚谩笀汒吂氓杧漭貓罞锚毝罞铆茆茂萺萺邈貿庅坆枚烸酶苺湈莈葿媒镁烸羙昧寐妺媚閄悶們萠懞檬擝锰掹夢掹侎醚靡糜洣洣弥洣秘觅泌滵滵幂婂眠婂冕凂勉娩缅媔媌媌媌邈仯緲庿仯篾搣姄抿皿勄悯閩眀螟嘄佲洺掵繆嗼摹嚤嗼嗼嚤嚤嚤沬沬嗼嚜默沬嗼寞帞湈哞湈拇牡畝姆毋募暮募募慕朩朩睦牧穆嗱哪妠妠哪哪妠氖釢艿恧柰遖莮難灢撓悩悩閙淖迡浽禸嫰能妮霓淣狔胒抳沵嫟膩屰溺蔫秥姩碾撵捻淰娘酿茑杘涅嗫糵啮嗫镍涅您柠狞凝苧拧泞犇沑妞狃哝哝哝挵伮怓伮囡煖疟疟挪穤穤喏呃瓯瓯瓯耦嘔耦沤啪汃瓟啪啪琶啪棑簰棑湃哌襻瀋盤磐昐溿叛判乓厐臱耪眫拋垉铇垉垉垉垉怌胚掊裴婄婄蓜姵沛濆湓泙抨烹澎憉莑堋硼篷膨萠鵬唪湴坯砒噼纰怶噼琵毗啤裨疲怶苉痞僻庇譬萹媥爿騙彯慓瓢嘌潎潎拚頻貧闆娉乒岼泙泙岼憑甁评屛岥秡櫇嘙岥魄廹粕剖圤舗圤莆匍箁蒲逋圤圃普浦鐠曝鑤剘剘栖嘁悽⑦凄漆柒沏娸諆渏忮畦崎脐斉旗祈祁騏起豈阣佱晵契砌噐氣迄棄汽淇讫拤洽撁扦钎鉛芉迁簽仟嗛墘黔錢钳湔濳遣淺谴堑嵌芡嗛熗濸腔羌嫱嫱強熗橇锹毃佾喬趭喬喬巧鞘毳趬峭佾竅苆苆苴愜苆钦埐儭蓁噖懄芹檎噙寑沁圊輕氢傾卿凊擎啨氰凊頃埥庆琼窮偢坵邱浗浗囚媨泅趋岖蛆浀軀屈駆渠掫婜龋趣厾圜颧權醛葲洤痊拳吠券勧蒛炔瘸卻鹊榷確雀峮羣嘫嘫姌媣瓤壤攘孃讓隢擾隢惹慹壬芢亾涊韧姙認刄妊纫扔仍ㄖ戎茸嫆荣瀜嫆嫆嫆絨冗渘渘禸筎蠕濡孺洳媷乳肗叺褥軟朊惢瑞銳潤潤婼弜潵灑蕯腮鳃噻噻彡叁傘潵鎟鎟喪搔騒掃溲瑟脃澀潹僧莏唦摋閷乷纱傻倽繺篩曬姍苫杉屾剼煽釤閁陝擅赡膳僐訕傓缮墒傷啇賞晌仩尙裳哨哨哨燒芍汋韶仯哨卲袑奢赊虵舙舎赦摂射慑渉涻蔎砷妽呻訷裑堔娠訷鉮瀋谉嬸卙腎慎椮殸泩甥狌圱繩渻墭乗夝聖溮妷浉湤濕詩迉虱拾坧湁溡什喰蚀實識史矢使屍馶始鉽沶仕迣枾倳拭誓迣勢湜嗜噬适仕侍释飾氏巿恃厔視鉽荍掱渞垨壽涭售辤痩獣蔬枢梳姝杼瀭埱忬蔋疏書赎孰孰薯濐曙署蜀黍癙屬朮沭樹娕戍竪墅庶薮漱恕唰耍摔缞甩帥拴拴灀叒摤誰渁腄挩吮橓順橓説碩朔爍凘凘凘偲俬呞噝屍肆峙嗣④伺姒饲巳菘聳怂頌鎹浨讼誦溲艘擞嗽蘇酥俗嫊趚粟僳愬溯蹜訴歗酸祘匴虽陏隨浽髓誶嵗穗嬘隧祟孫損笋蓑逡逡縮鎖鎍鎻葰禢彵咜咜嗒獭挞蹋沓胎苔孡珆溙酞忲忲呔坍摊貪瘫滩墵檀痰憛谭談钽毯袒湠探嘆湠饧溏搪漟橖膛瑭溏倘躺淌趟烫匋濤瑫绦匋洮洮匋匋討套特駦駦庝誊珶剔踢锑諟趧渧渧軆櫕嚏惕珶珶屟兲婖瑱甶甛恬婖睓狣條迢眺朓萜鉄萜廰厛烃汀侹渟渟侹侹艇嗵秱酮瞳哃恫浵僮硧硧茼統痌偸投頭透凸禿湥圖徙蒤凃廜汢汢兎湍團蓷颓蹆蜕蹆蹆昋屯臀柂仛脫袉拕駞袉椭鋖沰唾挖哇蛙哇哇咓襪歪迯豌塆塆琓顽汍烷唍涴梚脕皖惋宛啘萭腕忹迋匄忹蛧暀忹朢莣妄媙蘶嶶佹韦違桅圍惟惟潙潍惟苇崣逶偉沩屗纬沬墛菋嵔媦嵔蘶莅渭媦墛墛衞瘟溫螡妏聞鈫沕穏紊問滃暡瓮挝窩煱窉莪斡臥楃沃莁嗚钨烏汚莁偓嘸蕪梧圄呉毋娬伍圄吘橆⑤侮坞戊霚晤粅匢務圄誤厝凞唽覀硒矽晰嘻扱唶犠浠息唏悉膝汐厝熄烯渓汐犀檄袭席習媳禧铣冼係隙戱細磍虾匣葭轄叚浹浹浹芐厦嗄圷锨锨姺佡鮮汘咸賢銜舷娴涎妶溓显険哯獻縣腺陥羨宪陥限線楿厢镶萫葙襄湘芗翔祥詳想姠啍頙巷潒潒姠潒簘硝霄萷涍嚣销消宵淆哓尒涍校肖啸笑效楔些歇蝎嚡拹挾携峫斜脅喈冩悈啣蟹澥绁瀉塮屑蕲芯锌俽厗噺忻杺信衅暒睲睲瑆興鉶侀形郉垳瑆圉莕悻狌兇兇洶匈汹雄熋咻俢饈朽溴琇莠袖绣歔戌濡歔歔湏俆汻蓄酗溆旮垿畜恤絮胥緒續蓒媗媗悬嫙玆選癣妶絢靴薛敩泬膤洫勛熏揗洵咰浔紃廵咰卂訓卂遜卂壓呷鴉鴨吖吖厊厊蚜崖衙涯蕥啞亞冴漹咽阉煙殗鹽嚴妍蜒啱娫訁顔閻烾沿奄殗眼衍湮滟堰嬿厭砚雁唁彦熖匽谚験殃姎鴦秧昜婸佯疡咩樣陽氧卬癢養樣羕撽崾岆愮愮尧滛窰愮烑吆舀葯婹耀倻噎倻爺嘢冶竾頁掖鄴旪曳腋液液①壹悘揖铱畩吚扆颐夷遗簃儀胰寲沂宜侇彝掎蚁掎巳乁矣姒兿抑昜邑屹億役臆逸肄疫洂裔嬑藙忆義谥溢诣议谊譯異翼翌绎筃荫洇殷堷隂絪荶檭婬夤飮吚吲陻茚渶璎璎鹰應缨瑩萤營荧蝇迊赢盁影颕哽眏喲砽砽臃痈滽澭踊蛹怺怺悀怺恿湧鼡豳沋滺沋尤甴邮铀沋怞遊酉洧伖祐祐釉诱叒孧扜菸纡盂榆虞愚舆悇揄揄渔揄揄渔隅予娯雨玙屿禹荢娪羽砡域芋喐吁喁喻峪御匬慾獄唷謍浴寓裕預豫驭鴛棩寃沅垣媴厡瑗辕圎園園猿羱緣逺夗蒝葾阮曰箹樾跞钥捳粵仴哾閱秐囩郧枃殒狁運藴酝暈韻夃匝咂卆酨酨災宰酨侢茬洎瓒暫瓒賍賍髒蹧蹧凿藻栆皁璪蚤璪璪慥唣灶璪嫧萚荝澤賊怎熷璔嶒熷紥喳碴札轧铡閘喳栅搾咋咋怍怍擿斋宅搾債寨瞻毡詹秥跕盏斬辗崭蹍蘸棧颭戰跕偡綻樟嶂彰漳張礃涨粀扙賬账扙胀瘴障妱昭找沼趙燳罩狣肇佋嗻菥悊蛰辙鍺锗蔗適淅沴斟嫃甄砧臻浈針浈忱疹沴震桭鎮俥篜諍諍姃狰踭姃整拯囸炡帧症鄭姃芷汥伎汥倁倁汥脂汥と枳轵矗淔殖秇惪侄歮栺圵趾呮旨衹梽挚掷臸臸置帜峙淛潪秩雉質炙痔滞菭窒狆盅筗妕衷蔠種妕偅仲衆洀淍詶詶诌粥轴肘帚咒皺宙昼骤咮株咮咮蕏渚诛豩艸烛煑拄瞩瞩炷著炷莇蛀贮铸茿炷炷柷驻抓爪跩抟磚啭撰賺篆桩圧裝妝獞匨匨椎锥搥赘墜綴谆痽浞炪婥棹琢茁酌啄着灼浊兹恣粢恣稵淄孜橴仔籽滓ふ洎渍牸鬃琮琮崈琮縂枞邹趉楱楱蒩娖卒蔟袓蒩蒩蒩鑽纂觜酔朂嶵澊噂葃咗佐柞莋莋唑蓙錒噯嬡璦曖靄諳銨鵪媼驁鰲鈀唄鈑鴇齙鵯賁錛蓽嗶潷鉍篳蹕芐緶籩驃颮飆鏢鑣鰾儐繽檳殯臏鑌髕鬢稟餑鈸鵓鈽驂黲惻鍤儕釵囅諂讖蕆懺嬋驏覘禪鐔倀萇悵閶鯧硨傖諶櫬磣齔棖檉鋮鐺飭鴟銃儔幬讎芻絀躕釧愴綞鶉輟齪鶿蓯驄樅輳攛銼鹺噠韃駘紿殫賧癉簞讜碭襠燾鐙糴詆諦綈覿鏑巔鈿癲銚鯛鰈鋌銩崠鶇竇瀆櫝牘篤黷籪懟鐓燉躉鐸諤堊閼軛鋨鍔鶚顎顓鱷誒邇鉺鴯鮞鈁魴緋鐨鯡僨灃鳧駙紱紼賻麩鮒鰒釓賅尷搟紺戇睪誥縞鋯紇鎘潁亙賡綆鯁詬緱覯詁轂鈷錮鴣鵠鶻鴰摑詿摜鸛鰥獷匭劌媯檜鮭鱖袞緄鯀堝咼幗槨蟈鉿闞絎頡灝顥訶闔蠣黌訌葒閎鱟滸鶘驊樺鏵奐繯鍰鯇鰉詼薈噦澮繢琿暉諢餛閽鈥鑊訐詰薺嘰嚌驥璣覬齏磯羈蠆躋霽鱭鯽郟浹鋏鎵蟯諫縑戔戩瞼鶼筧鰹韉絳韁撟嶠鷦鮫癤頜鮚巹藎饉縉贐覲剄涇逕弳脛靚鬮鳩鷲詎屨櫸颶鉅鋦窶齟錈鐫雋譎玨皸剴塏愾愷鎧鍇龕閌鈧銬騍緙軻鈳錁頷齦鏗嚳鄶噲膾獪髖誆誑鄺壙纊貺匱蕢憒聵簣閫錕鯤蠐崍徠淶瀨賚睞錸癩籟嵐欖斕鑭襤閬鋃嘮嶗銠鐒癆鰳誄縲儷酈壢藶蒞蘺嚦邐驪縭櫪櫟轢礪鋰鸝癘糲躒靂鱺鱧蘞奩瀲璉殮褳襝鰱魎繚釕鷯藺廩檁轔躪綾欞蟶鯪瀏騮綹鎦鷚蘢瀧瓏櫳朧礱僂蔞嘍嶁鏤瘺耬螻髏壚擼嚕閭瀘淥櫨櫓轤輅轆氌臚鸕鷺艫鱸臠孌欒鸞鑾圇犖玀濼欏腡鏍櫚褸鋝嘸嘜嬤榪勱縵鏝顙鰻麼捫燜懣鍆羋謐獼禰澠靦黽緲繆閔緡謨驀饃歿鏌鉬鐃訥鈮鯢輦鯰蔦裊隉蘗囁顢躡苧嚀聹儂噥駑釹儺謳慪甌蹣皰轡紕羆鈹諞駢縹嬪釙鏷鐠蘄騏綺榿磧頎頏鰭僉蕁慳騫繾槧鈐嬙檣戧熗錆鏘鏹羥蹌誚譙蕎繰磽蹺愜鍥篋鋟撳鯖煢蛺巰賕蟣鰍詘嶇闃覷鴝詮綣輇銓闋闕愨蕘嬈橈飪軔嶸蠑縟銣顰蜆颯毿糝繅嗇銫穡鎩鯊釃訕姍騸釤鱔坰殤觴厙灄畬詵諗瀋謚塒蒔弒軾貰鈰鰣綬攄紓閂鑠廝駟緦鍶鷥藪餿颼鎪謖穌誶蓀猻嗩脧闥鉈鰨鈦鮐曇鉭錟頇儻餳鐋鏜韜鋱緹鵜闐糶齠鰷慟鈄釷摶飩籜鼉媧膃紈綰輞諉幃闈溈潿瑋韙煒鮪閿萵齷鄔廡憮嫵騖鵡鶩餼鬩璽覡硤莧薟蘚峴獫嫻鷴癇蠔秈躚薌餉驤緗饗嘵瀟驍綃梟簫褻擷紲纈陘滎饈鵂詡頊諼鉉鏇謔澩鱈塤潯鱘埡婭椏氬厴贗儼兗讞懨閆釅魘饜鼴煬軺鷂鰩靨謁鄴曄燁詒囈嶧飴懌驛縊軼貽釔鎰鐿瘞艤銦癮塋鶯縈鎣攖嚶瀅瀠瓔鸚癭頦罌鏞蕕銪魷傴俁諛諭蕷崳飫閾嫗紆覦歟鈺鵒鷸齬櫞鳶黿鉞鄆蕓惲慍紜韞殞氳瓚趲鏨駔賾嘖幘簀譖繒譫詔釗謫輒鷓湞縝楨軫賑禎鴆諍崢鉦錚箏騭櫛梔軹輊贄鷙螄縶躓躑觶鍾紂縐佇櫧銖囀饌顳騅縋諑鐲諮緇輜貲眥錙齜鯔傯諏騶鯫鏃纘躦鱒訁譾郤猛氹阪壟堖垵墊檾蕒葤蓧蒓菇槁摣咤唚哢噝噅撅劈謔襆嶴脊仿僥獁麅餘餷饊饢楞怵懍爿漵灩混濫瀦淡寧糸絝緔瑉梘棬案橰櫫軲軤賫膁腖飈糊煆溜湣渺碸滾瞘鈈鉕鋣銱鋥鋶鐦鐧鍩鍀鍃錇鎄鎇鎿鐝鑥鑹鑔穭鶓鶥鸌癧屙瘂臒襇繈耮顬蟎麯鮁鮃鮎鯗鯝鯴鱝鯿鰠鰵鱅鞽韝齇';\n}\nfunction traditionalized(cc) {\n  var str = '';\n  for (var i = 0; i < cc.length; i++) {\n    if (simpPYStr().indexOf(cc.charAt(i)) != -1)\n    str += ftPYStr().charAt(simpPYStr().indexOf(cc.charAt(i)));else\n    if (qqPYStr().indexOf(cc.charAt(i)) != -1)\n    str += ftPYStr().charAt(qqPYStr().indexOf(cc.charAt(i)));else\n\n    str += cc.charAt(i);\n  }\n  return str;\n}\nfunction simplized(cc) {\n  var str = '';\n  for (var i = 0; i < cc.length; i++) {\n    if (ftPYStr().indexOf(cc.charAt(i)) != -1)\n    str += simpPYStr().charAt(ftPYStr().indexOf(cc.charAt(i)));else\n    if (qqPYStr().indexOf(cc.charAt(i)) != -1)\n    str += simpPYStr().charAt(qqPYStr().indexOf(cc.charAt(i)));else\n\n    str += cc.charAt(i);\n  }\n  return str;\n}\nfunction qqlized(cc) {\n  var str = '';\n  for (var i = 0; i < cc.length; i++) {\n    if (ftPYStr().indexOf(cc.charAt(i)) != -1)\n    str += qqPYStr().charAt(ftPYStr().indexOf(cc.charAt(i)));else\n    if (simpPYStr().indexOf(cc.charAt(i)) != -1)\n    str += qqPYStr().charAt(simpPYStr().indexOf(cc.charAt(i)));else\n\n    str += cc.charAt(i);\n  }\n  return str;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvdXRpbHMuanMiXSwibmFtZXMiOlsic2ltcFBZU3RyIiwiZnRQWVN0ciIsInFxUFlTdHIiLCJ0cmFkaXRpb25hbGl6ZWQiLCJjYyIsInN0ciIsImkiLCJsZW5ndGgiLCJpbmRleE9mIiwiY2hhckF0Iiwic2ltcGxpemVkIiwicXFsaXplZCJdLCJtYXBwaW5ncyI6IndHQUFBLFNBQVNBLFNBQVQsR0FBb0I7QUFDaEIsU0FBTywwckpBQVA7QUFDSDtBQUNELFNBQVNDLE9BQVQsR0FBa0I7QUFDZCxTQUFPLDBySkFBUDtBQUNIO0FBQ0QsU0FBU0MsT0FBVDtBQUNBO0FBQ0EsU0FBTywwckpBQVA7QUFDQztBQUNNLFNBQVNDLGVBQVQsQ0FBeUJDLEVBQXpCLEVBQTRCO0FBQy9CLE1BQUlDLEdBQUcsR0FBQyxFQUFSO0FBQ0EsT0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNGLEVBQUUsQ0FBQ0csTUFBakIsRUFBd0JELENBQUMsRUFBekIsRUFBNEI7QUFDeEIsUUFBR04sU0FBUyxHQUFHUSxPQUFaLENBQW9CSixFQUFFLENBQUNLLE1BQUgsQ0FBVUgsQ0FBVixDQUFwQixLQUFtQyxDQUFDLENBQXZDO0FBQ0lELE9BQUcsSUFBRUosT0FBTyxHQUFHUSxNQUFWLENBQWlCVCxTQUFTLEdBQUdRLE9BQVosQ0FBb0JKLEVBQUUsQ0FBQ0ssTUFBSCxDQUFVSCxDQUFWLENBQXBCLENBQWpCLENBQUwsQ0FESjtBQUVLLFFBQUdKLE9BQU8sR0FBR00sT0FBVixDQUFrQkosRUFBRSxDQUFDSyxNQUFILENBQVVILENBQVYsQ0FBbEIsS0FBaUMsQ0FBQyxDQUFyQztBQUNERCxPQUFHLElBQUVKLE9BQU8sR0FBR1EsTUFBVixDQUFpQlAsT0FBTyxHQUFHTSxPQUFWLENBQWtCSixFQUFFLENBQUNLLE1BQUgsQ0FBVUgsQ0FBVixDQUFsQixDQUFqQixDQUFMLENBREM7O0FBR0RELE9BQUcsSUFBRUQsRUFBRSxDQUFDSyxNQUFILENBQVVILENBQVYsQ0FBTDtBQUNQO0FBQ0QsU0FBT0QsR0FBUDtBQUNIO0FBQ0QsU0FBU0ssU0FBVCxDQUFtQk4sRUFBbkIsRUFBc0I7QUFDbEIsTUFBSUMsR0FBRyxHQUFDLEVBQVI7QUFDQSxPQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ0YsRUFBRSxDQUFDRyxNQUFqQixFQUF3QkQsQ0FBQyxFQUF6QixFQUE0QjtBQUN4QixRQUFHTCxPQUFPLEdBQUdPLE9BQVYsQ0FBa0JKLEVBQUUsQ0FBQ0ssTUFBSCxDQUFVSCxDQUFWLENBQWxCLEtBQWlDLENBQUMsQ0FBckM7QUFDSUQsT0FBRyxJQUFFTCxTQUFTLEdBQUdTLE1BQVosQ0FBbUJSLE9BQU8sR0FBR08sT0FBVixDQUFrQkosRUFBRSxDQUFDSyxNQUFILENBQVVILENBQVYsQ0FBbEIsQ0FBbkIsQ0FBTCxDQURKO0FBRUssUUFBR0osT0FBTyxHQUFHTSxPQUFWLENBQWtCSixFQUFFLENBQUNLLE1BQUgsQ0FBVUgsQ0FBVixDQUFsQixLQUFpQyxDQUFDLENBQXJDO0FBQ0RELE9BQUcsSUFBRUwsU0FBUyxHQUFHUyxNQUFaLENBQW1CUCxPQUFPLEdBQUdNLE9BQVYsQ0FBa0JKLEVBQUUsQ0FBQ0ssTUFBSCxDQUFVSCxDQUFWLENBQWxCLENBQW5CLENBQUwsQ0FEQzs7QUFHREQsT0FBRyxJQUFFRCxFQUFFLENBQUNLLE1BQUgsQ0FBVUgsQ0FBVixDQUFMO0FBQ1A7QUFDRCxTQUFPRCxHQUFQO0FBQ0g7QUFDRCxTQUFTTSxPQUFULENBQWlCUCxFQUFqQixFQUFvQjtBQUNoQixNQUFJQyxHQUFHLEdBQUMsRUFBUjtBQUNBLE9BQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDRixFQUFFLENBQUNHLE1BQWpCLEVBQXdCRCxDQUFDLEVBQXpCLEVBQTRCO0FBQ3hCLFFBQUdMLE9BQU8sR0FBR08sT0FBVixDQUFrQkosRUFBRSxDQUFDSyxNQUFILENBQVVILENBQVYsQ0FBbEIsS0FBaUMsQ0FBQyxDQUFyQztBQUNJRCxPQUFHLElBQUVILE9BQU8sR0FBR08sTUFBVixDQUFpQlIsT0FBTyxHQUFHTyxPQUFWLENBQWtCSixFQUFFLENBQUNLLE1BQUgsQ0FBVUgsQ0FBVixDQUFsQixDQUFqQixDQUFMLENBREo7QUFFSyxRQUFHTixTQUFTLEdBQUdRLE9BQVosQ0FBb0JKLEVBQUUsQ0FBQ0ssTUFBSCxDQUFVSCxDQUFWLENBQXBCLEtBQW1DLENBQUMsQ0FBdkM7QUFDREQsT0FBRyxJQUFFSCxPQUFPLEdBQUdPLE1BQVYsQ0FBaUJULFNBQVMsR0FBR1EsT0FBWixDQUFvQkosRUFBRSxDQUFDSyxNQUFILENBQVVILENBQVYsQ0FBcEIsQ0FBakIsQ0FBTCxDQURDOztBQUdERCxPQUFHLElBQUVELEVBQUUsQ0FBQ0ssTUFBSCxDQUFVSCxDQUFWLENBQUw7QUFDUDtBQUNELFNBQU9ELEdBQVA7QUFDSCIsImZpbGUiOiIyOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNpbXBQWVN0cigpe1xuICAgIHJldHVybiAn5ZWK6Zi/5Z+D5oyo5ZOO5ZSJ5ZOA55qR55mM6JS855+u6Im+56KN54ix6ZqY6Z6N5rCo5a6J5L+65oyJ5pqX5bK46IO65qGI6IKu5piC55uO5Ye55pWW54as57+x6KKE5YKy5aWl5oeK5r6z6Iqt5o2M5omS5Y+t5ZCn56yG5YWr55ak5be05ouU6LeL6Z225oqK6ICZ5Z2d6Zy4572i54i455m95p+P55m+5pGG5L2w6LSl5ouc56iX5paR54+t5pCs5omz6Iis6aKB5p2/54mI5omu5ouM5Ly055Oj5Y2K5Yqe57uK6YKm5biu5qKG5qac6IaA57uR5qOS56OF6JqM6ZWR5YKN6LCk6Iue6IOe5YyF6KSS5Yml6JaE6Zu55L+d5aCh6aWx5a6d5oqx5oql5pq06LG56bKN54iG5p2v56KR5oKy5Y2R5YyX6L6I6IOM6LSd6ZKh5YCN54uI5aSH5oOr54SZ6KKr5aWU6Iuv5pys56yo5bSp57u355St5rO16Lmm6L+46YC86by75q+U6YSZ56yU5b2856Kn6JOW6JS95q+V5q+Z5q+W5biB5bqH55e56Zet5pWd5byK5b+F6L6f5aOB6IeC6YG/6Zmb6Z6t6L6557yW6LSs5omB5L6/5Y+Y5Y2e6L6o6L6p6L6r6YGN5qCH5b2q6IaY6KGo6bOW5oaL5Yir55iq5b2s5paM5r+S5ruo5a6+5pGI5YW15Yaw5p+E5LiZ56eJ6aW854Kz55eF5bm254676I+g5pKt5ouo6ZK15rOi5Y2a5YuD5pCP6ZOC566U5Lyv5bib6Ii26ISW6IaK5rik5rOK6amz5o2V5Y2c5ZO66KGl5Z+g5LiN5biD5q2l57C/6YOo5oCW5pOm54yc6KOB5p2Q5omN6LSi552s6Lip6YeH5b2p6I+c6JSh6aSQ5Y+C6JqV5q6L5oOt5oOo54G/6IuN6Iix5LuT5rKn6JeP5pON57OZ5qe95pu56I2J5Y6V562W5L6n5YaM5rWL5bGC6Lmt5o+S5Y+J6Iys6Iy25p+l56K05pC95a+f5bKU5beu6K+n5ouG5p+06LG65pCA5o666J2J6aaL6LCX57yg6ZOy5Lqn6ZiQ6aKk5piM54yW5Zy65bCd5bi46ZW/5YG/6IKg5Y6C5pWe55WF5ZSx5YCh6LaF5oqE6ZKe5pyd5Ziy5r2u5bei5ZC154KS6L2m5omv5pKk5o6j5b275r6I6YO06Iej6L6w5bCY5pmo5b+x5rKJ6ZmI6LaB6KGs5pKR56ew5Z+O5qmZ5oiQ5ZGI5LmY56iL5oOp5r6E6K+a5om/6YCe6aqL56ek5ZCD55e05oyB5YyZ5rGg6L+f5byb6amw6IC76b2/5L6I5bC66LWk57+F5pal54K95YWF5Yay6Jmr5bSH5a6g5oq96YWs55W06LiM56ig5oSB56255LuH57u4556F5LiR6Iet5Yid5Ye65qmx5Y6o6LqH6ZSE6ZuP5ruB6Zmk5qWa56GA5YKo55+X5pCQ6Kem5aSE5o+j5bed56m/5qS95Lyg6Ii55ZaY5Liy55au56qX5bmi5bqK6Zev5Yib5ZC554KK5o226ZSk5Z6C5pil5qS/6YaH5ZSH5rez57qv6KCi5oiz57uw55a16Iyo56OB6ZuM6L6e5oWI55O36K+N5q2k5Yi66LWQ5qyh6IGq6JGx5Zux5YyG5LuO5Lib5YeR57KX6YaL57CH5L+D6Lm/56+h56qc5pGn5bSU5YKs6ISG55iB57K55res57+g5p2R5a2Y5a+456OL5pKu5pCT5o6q5oyr6ZSZ5pCt6L6+562U55ip5omT5aSn5ZGG5q255YKj5oi05bim5q6G5Luj6LS36KKL5b6F6YCu5oCg6IC95ouF5Li55Y2V6YO45o646IOG5pem5rCu5L2G5oOu5reh6K+e5by56JuL5b2T5oyh5YWa6I2h5qGj5YiA5o2j6LmI5YCS5bKb56W35a+85Yiw56i75oK86YGT55uX5b635b6X55qE6Lms54Gv55m7562J556q5Yez6YKT5aCk5L2O5ru06L+q5pWM56yb54uE5rak57+f5auh5oq15bqV5Zyw6JKC56ys5bid5byf6YCS57yU6aKg5o6C5ruH56KY54K55YW46Z2b5Z6r55S15L2D55S45bqX5oOm5aWg5reA5q6/56KJ5Y+86ZuV5YeL5YiB5o6J5ZCK6ZKT6LCD6LeM54i556Kf6J226L+t6LCN5Y+g5LiB55uv5Y+u6ZKJ6aG26byO6ZSt5a6a6K6i5Lii5Lic5Yas6JGj5oeC5Yqo5qCL5L6X5oGr5Ya75rSe5YWc5oqW5paX6Zmh6LGG6YCX55eY6YO9552j5q+S54qK54us6K+75aC155256LWM5p2c6ZWA6IKa5bqm5rih5aaS56uv55+t6ZS75q615pat57yO5aCG5YWR6Zif5a+55aKp5ZCo6Lmy5pWm6aG/5Zuk6ZKd55u+6YGB5o6H5ZOG5aSa5aS65Z6b6Lqy5py16Le66Ii15YmB5oOw5aCV6Ju+5bOo6bmF5L+E6aKd6K655ail5oG25Y6E5om86YGP6YSC6aW/5oGp6ICM5YS/6ICz5bCU6aW15rSx5LqM6LSw5Y+R572a562P5LyQ5LmP6ZiA5rOV54+Q6Jep5biG55Wq57+75qiK55++6ZKS57mB5Yeh54Om5Y+N6L+U6IyD6LSp54qv6aWt5rOb5Z2K6Iqz5pa56IKq5oi/6Ziy5aao5Lu/6K6/57q65pS+6I+y6Z2e5ZWh6aOe6IKl5Yyq6K+95ZCg6IK65bqf5rK46LS56Iqs6YWa5ZCp5rCb5YiG57q35Z2f54Sa5rG+57KJ5aWL5Lu95b+/5oSk57Kq5Liw5bCB5p6r6JyC5bOw6ZSL6aOO55av54O96YCi5Yav57yd6K695aWJ5Yek5L2b5ZCm5aSr5pW36IKk5a215om25ouC6L6Q5bmF5rCf56ym5LyP5L+Y5pyN5rWu5raq56aP6KKx5byX55Sr5oqa6L6F5L+v6Yec5pan6ISv6IWR5bqc6IWQ6LW05Ymv6KaG6LWL5aSN5YKF5LuY6Zic54i26IW56LSf5a+M6K6j6ZmE5aaH57ya5ZKQ5Zm25ZiO6K+l5pS55qaC6ZKZ55uW5rqJ5bmy55SY5p2G5p+R56u/6IKd6LW25oSf56eG5pWi6LWj5YaI5Yia6ZKi57y46IKb57qy5bKX5riv5p2g56+Z55qL6auY6IaP576U57OV5pCe6ZWQ56i/5ZGK5ZOl5q2M5pCB5oiI6bi96IOz55aZ5Ymy6Z2p6JGb5qC86Juk6ZiB6ZqU6ZOs5Liq5ZCE57uZ5qC56Lef6ICV5pu05bqa57655Z+C6IC/5qKX5bel5pS75Yqf5oGt6b6a5L6b6Lqs5YWs5a6r5byT5bep5rGe5oux6LSh5YWx6ZKp5Yu+5rKf6Iuf54uX5Z6i5p6E6LSt5aSf6L6c6I+H5ZKV566N5Lyw5rK95a2k5aeR6byT5Y+k6JuK6aqo6LC36IKh5pWF6aG+5Zu66ZuH5Yiu55Oc5YmQ5a+h5oyC6KSC5LmW5ouQ5oCq5qO65YWz5a6Y5Yag6KeC566h6aaG572Q5oOv54GM6LSv5YWJ5bm/6YCb55Gw6KeE5Zyt56GF5b2S6b6f6Ze66L2o6ay86K+h55m45qGC5p+c6Leq6LS15Yi96L6K5rua5qON6ZSF6YOt5Zu95p6c6KO56L+H5ZOI6aq45a2p5rW35rCm5Lql5a6z6aqH6YWj5oao6YKv6Z+p5ZCr5ra15a+S5Ye95ZaK572V57+w5pK85o2N5pex5oa+5oKN54SK5rGX5rGJ5aSv5p2t6Iiq5aOV5ZqO6LGq5q+r6YOd5aW96ICX5Y+35rWp5ZG15Zad6I236I+P5qC456a+5ZKM5L2V5ZCI55uS6LKJ6ZiC5rKz5ra46LWr6KSQ6bmk6LS65Zi/6buR55eV5b6I54ug5oGo5ZO85Lqo5qiq6KGh5oGS6L2w5ZOE54OY6Jm56bi/5rSq5a6P5byY57qi5ZaJ5L6v54y05ZC85Y6a5YCZ5ZCO5ZG85LmO5b+955Ga5aO26JGr6IOh6J2054uQ57OK5rmW5byn6JmO5ZSs5oqk5LqS5rKq5oi36Iqx5ZOX5Y2O54y+5ruR55S75YiS5YyW6K+d5qeQ5b6K5oCA5reu5Z2P5qyi546v5qGT6L+Y57yT5o2i5oKj5ZSk55eq6LGi54SV5raj5a6m5bm76I2S5oWM6buE56O66J2X57Cn55qH5Yew5oO254WM5pmD5bmM5oGN6LCO54Gw5oyl6L6J5b695oGi6JuU5Zue5q+B5oKU5oWn5Y2J5oOg5pmm6LS/56e95Lya54Op5rGH6K6z6K+y57uY6I2k5piP5ama6a2C5rWR5re36LGB5rS75LyZ54Gr6I635oiW5oOR6ZyN6LSn56W45Ye75Zy+5Z+65py655W456i956ev566V6IKM6aWl6L+55r+A6K6l6bih5aes57up57yJ5ZCJ5p6B5qOY6L6R57GN6ZuG5Y+K5oCl55a+5rGy5Y2z5auJ57qn5oyk5Yeg6ISK5bex6JOf5oqA5YaA5a2j5LyO56Wt5YmC5oK45rWO5a+E5a+C6K6h6K6w5pei5b+M6ZmF57un57qq5ZiJ5p635aS55L2z5a625Yqg6I2a6aKK6LS+55Sy6ZK+5YGH56i85Lu35p626am+5auB5q2855uR5Z2a5bCW56y66Ze054WO5YW86IKp6Imw5aW457yE6Iyn5qOA5p+s56Kx56G35ouj5o2h566A5L+t5Ymq5YeP6I2Q5qeb6Ym06Le16LSx6KeB6ZSu566t5Lu25YGl6Iiw5YmR6aWv5riQ5rqF5ran5bu65YO15aec5bCG5rWG5rGf55aG6JKL5qGo5aWW6K6y5Yyg6YWx6ZmN6JWJ5qSS56SB54Sm6IO25Lqk6YOK5rWH6aqE5aiH5Zq85pCF6ZOw55+r5L6l6ISa54uh6KeS6aW657y057ue5Ym/5pWZ6YW16L2/6L6D5Y+r56qW5o+t5o6l55qG56e46KGX6Zi25oiq5Yqr6IqC6IyO552b5pm26bK45Lqs5oOK57K+57Kz57uP5LqV6K2m5pmv6aKI6Z2Z5aKD5pWs6ZWc5b6E55eJ6Z2W56uf56ue5YeA54Kv56qY5o+q56m257qg546W6Z+t5LmF54G45Lmd6YWS5Y6p5pWR5pen6Ie86IiF5ZKO5bCx55aa6Z6g5ouY54uZ55a95bGF6am56I+K5bGA5ZKA55+p5Li+5rKu6IGa5ouS5o2u5beo5YW36Led6Lie6ZSv5L+x5Y+l5oOn54Ks5Ymn5o2Q6bmD5aif5YCm55y35Y2357ui5pKF5pSr5oqJ5o6Y5YCU54i15qGU5p2w5o23552r56ut5rSB57uT6Kej5aeQ5oiS6JeJ6Iql55WM5YCf5LuL55al6K+r5bGK5be+562L5pak6YeR5LuK5rSl6KWf57Sn6ZSm5LuF6LCo6L+b6Z2z5pmL56aB6L+R54Os5rW45bC95Yqy6I2G5YWi6KeJ5Yaz6K+A57ud5Z2H6I+M6ZKn5Yab5ZCb5bO75L+K56uj5rWa6YOh6aqP5ZaA5ZKW5Y2h5ZKv5byA5o+p5qW35Yev5oWo5YiK5aCq5YuY5Z2O56CN55yL5bq35oW357Og5omb5oqX5Lqi54KV6ICD5ou354Ok6Z2g5Z236Iub5p+v5qO156OV6aKX56eR5aOz5ZKz5Y+v5ri05YWL5Yi75a6i6K++6IKv5ZWD5Z6m5oGz5Z2R5ZCt56m65oGQ5a2U5o6n5oqg5Y+j5omj5a+H5p6v5ZOt56qf6Ium6YW35bqT6KOk5aS45Z6u5oyO6Leo6IOv5Z2X56235L6p5b+r5a695qy+5Yyh562Q54uC5qGG55+/55y25pe35Ya15LqP55uU5bK/56ql6JG15aWO6a2B5YKA6aaI5oSn5rqD5Z2k5piG5o2G5Zuw5ous5omp5buT6ZiU5Z6D5ouJ5ZaH6Jyh6IWK6L6j5ZWm6I6x5p2l6LWW6JOd5amq5qCP5oum56+u6ZiR5YWw5r6c6LCw5o+96KeI5oeS57yG54OC5rul55CF5qaU54u85buK6YOO5pyX5rWq5o2e5Yqz54mi6ICB5L2s5ael6YWq54OZ5rad5YuS5LmQ6Zu36ZWt6JW+56OK57Sv5YSh5Z6S5pOC6IKL57G75rOq5qOx5qWe5Ya35Y6Y5qKo54qB6buO56+x54u456a75ryT55CG5p2O6YeM6bKk56S86I6J6I2U5ZCP5qCX5Li95Y6J5Yqx56C+5Y6G5Yip5YKI5L6L5L+Q55ei56uL57KS5rKl6Zq25Yqb55KD5ZOp5L+p6IGU6I6y6L+e6ZWw5buJ5oCc5raf5biY5pWb6IS46ZO+5oGL54K857uD57Ku5YeJ5qKB57Kx6Imv5Lik6L6G6YeP5pm+5Lqu6LCF5pKp6IGK5YOa55aX54eO5a+l6L695r2m5LqG5pKC6ZWj5buW5paZ5YiX6KOC54OI5Yqj54yO55Cz5p6X56O36ZyW5Li06YK76bOe5reL5Yeb6LWB5ZCd5ouO546y6I+x6Zu26b6E6ZOD5Ly2576a5YeM54G16Zm15bKt6aKG5Y+m5Luk5rqc55CJ5qa056Gr6aaP55WZ5YiY55ik5rWB5p+z5YWt6b6Z6IGL5ZKZ56y856q/6ZqG5Z6E5oui6ZmH5qW85aiE5pCC56+T5ryP6ZmL6Iqm5Y2i6aKF5bqQ54KJ5o6z5Y2k6JmP6bKB6bqT56KM6Zyy6Lev6LWC6bm/5r2e56aE5b2V6ZmG5oiu6am05ZCV6ZOd5L6j5peF5bGl5bGh57yV6JmR5rCv5b6L546H5ruk57u/5bOm5oyb5a2q5rum5Y215Lmx5o6g55Wl5oqh6L2u5Lym5LuR5rKm57q26K666JCd6J66572X6YC76ZSj566p6aqh6KO46JC95rSb6aqG57uc5aaI6bq7546b56CB6JqC6ams6aqC5Zib5ZCX5Z+L5Lmw6bqm5Y2W6L+I6ISJ556S6aaS6Juu5ruh6JST5pu85oWi5ryr6LCp6IqS6Iyr55uy5rCT5b+Z6I6954yr6IyF6ZSa5q+b55+b6ZOG5Y2v6IyC5YaS5bi96LKM6LS45LmI546r5p6a5qKF6YW26ZyJ54Wk5rKh55yJ5aqS6ZWB5q+P576O5pin5a+Q5aa55aqa6Zeo6Ze35Lus6JCM6JKZ5qqs55uf6ZSw54yb5qKm5a2f55yv6Yaa6Z2h57Oc6L+36LCc5byl57Gz56eY6KeF5rOM6Jyc5a+G5bmC5qOJ55yg57u15YaV5YWN5YuJ5aip57yF6Z2i6IuX5o+P556E6JeQ56eS5ri65bqZ5aaZ6JSR54Gt5rCR5oq/55q/5pWP5oKv6Ze95piO6J6f6bij6ZOt5ZCN5ZG96LCs5pG45pG56JiR5qih6Iac56Oo5pGp6a2U5oq55pyr6I6r5aKo6buY5rKr5ryg5a+e6ZmM6LCL54mf5p+Q5ouH54mh5Lqp5aeG5q+N5aKT5pqu5bmV5Yuf5oWV5pyo55uu552m54mn56mG5ou/5ZOq5ZGQ6ZKg6YKj5aic57qz5rCW5LmD5aW26ICQ5aWI5Y2X55S36Zq+5ZuK5oyg6ISR5oG86Ze55reW5ZGi6aaB5YaF5aup6IO95aau6ZyT5YCq5rOl5bC85ouf5L2g5Yy/6IW76YCG5rq66JSr5ouI5bm056K+5pK15o275b+15aiY6YW/6bif5bC/5o2P6IGC5a295ZWu6ZWK6ZWN5raF5oKo5p+g54ue5Yed5a6B5oun5rOe54mb5omt6ZKu57q96IST5rWT5Yac5byE5aW05Yqq5oCS5aWz5pqW6JmQ55af5oyq5oem57Ov6K+65ZOm5qyn6bil5q606JeV5ZGV5YG25rKk5ZWq6La054is5biV5oCV55C25ouN5o6S54mM5b6Y5rmD5rS+5pSA5r2Y55uY56OQ55u855WU5Yik5Y+b5LmT5bqe5peB6ICq6IOW5oqb5ZKG5Yio54Ku6KKN6LeR5rOh5ZG46IOa5Z+56KO06LWU6Zmq6YWN5L2p5rKb5Za355uG56Cw5oqo54O55r6O5b2t6JOs5qOa56G856+36Iao5pyL6bmP5o2n56Kw5Z2v56CS6Zy55om55oqr5YqI55C15q+X5ZWk6IS+55ay55qu5Yy555ee5YO75bGB6K2s56+H5YGP54mH6aqX6aOY5ryC55Oi56Wo5pKH556l5ou86aKR6LSr5ZOB6IGY5LmS5Z2q6Iu56JCN5bmz5Yet55O26K+E5bGP5Z2h5rO86aKH5amG56C06a2E6L+r57KV5YmW5omR6ZO65LuG6I6G6JGh6I+p6JKy5Z+U5py05ZyD5pmu5rWm6LCx5pud54CR5pyf5qy65qCW5oia5aa75LiD5YeE5ryG5p+S5rKP5YW25qOL5aWH5q2n55Wm5bSO6ISQ6b2Q5peX56WI56WB6aqR6LW35bKC5Lme5LyB5ZCv5aWR56CM5Zmo5rCU6L+E5byD5rG95rOj6K6r5o6Q5rS954m15omm6ZKO6ZOF5Y2D6L+B562+5Luf6LCm5Lm+6buU6ZKx6ZKz5YmN5r2c6YGj5rWF6LC05aCR5bWM5qyg5q2J5p6q5ZGb6IWU576M5aKZ6JS35by65oqi5qmH6ZS55pWy5oKE5qGl556n5LmU5L6o5ben6Z6Y5pKs57+Y5bOt5L+P56qN5YiH6IyE5LiU5oCv56qD6ZKm5L615Lqy56em55C05Yuk6Iq55pOS56a95a+d5rKB6Z2S6L275rCi5YC+5Y2/5riF5pOO5pm05rCw5oOF6aG36K+35bqG55C856m356eL5LiY6YKx55CD5rGC5Zua6YWL5rOF6LaL5Yy66JuG5puy6Lqv5bGI6amx5rig5Y+W5ai26b6L6Laj5Y675ZyI6aKn5p2D6Yab5rOJ5YWo55eK5ouz54qs5Yi45Yqd57y654KU55i45Y206bmK5qa356Gu6ZuA6KOZ576k54S254eD5YaJ5p+T55Ok5aOk5pSY5Zq36K6p6aW25omw57uV5oO554Ot5aOs5LuB5Lq65b+N6Z+n5Lu76K6k5YiD5aaK57qr5omU5LuN5pel5oiO6Iy46JOJ6I2j6J6N54aU5rq25a6557uS5YaX5o+J5p+U6IKJ6Iy56KCV5YSS5a265aaC6L6x5Lmz5rGd5YWl6KSl6L2v6Ziu6JWK55Ge6ZSQ6Zew5ram6Iul5byx5pKS5rSS6JCo6IWu6bOD5aGe6LWb5LiJ5Y+B5Lye5pWj5qGR5ZeT5Lin5pCU6aqa5omr5auC55Gf6Imy5rap5qOu5YOn6I6O56CC5p2A5Yi55rKZ57qx5YK75ZWl54We562b5pmS54+K6Iur5p2J5bGx5Yig54W96KGr6Zeq6ZmV5pOF6LWh6Iaz5ZaE5rGV5omH57yu5aKS5Lyk5ZWG6LWP5pmM5LiK5bCa6KOz5qKi5o2O56iN54On6IqN5Yu66Z+25bCR5ZOo6YK157uN5aWi6LWK6JuH6IiM6IiN6LWm5pGE5bCE5oWR5raJ56S+6K6+56C355Sz5ZG75Ly46Lqr5rex5aig57uF56We5rKI5a6h5am255Sa6IK+5oWO5riX5aOw55Sf55Sl54my5Y2H57uz55yB55ub5Ymp6IOc5Zyj5biI5aSx54uu5pa95rm/6K+X5bC46Jmx5Y2B55+z5ou+5pe25LuA6aOf6JqA5a6e6K+G5Y+y55+i5L2/5bGO6am25aeL5byP56S65aOr5LiW5p+/5LqL5out6KqT6YCd5Yq/5piv5Zec5Zms6YCC5LuV5L6N6YeK6aWw5rCP5biC5oGD5a6k6KeG6K+V5pS25omL6aaW5a6I5a+/5o6I5ZSu5Y+X55im5YW96JSs5p6i5qKz5q6K5oqS6L6T5Y+U6IiS5reR55aP5Lmm6LWO5a2w54af6Jav5pqR5puZ572y6JyA6buN6byg5bGe5pyv6L+w5qCR5p2f5oiN56uW5aKF5bq25pWw5ryx5oGV5Yi36ICN5pGU6KGw55Sp5biF5qCT5ou06Zyc5Y+M54i96LCB5rC0552h56iO5ZCu556s6aG66Iic6K+056GV5pyU54OB5pav5pKV5Zi25oCd56eB5Y+45Lid5q276IKG5a+65Zej5Zub5Ly65Ly86aWy5bez5p2+6IC45oCC6aKC6YCB5a6L6K686K+15pCc6ImY5pOe5Ze96IuP6YWl5L+X57Sg6YCf57Kf5YOz5aGR5rqv5a6/6K+J6IKD6YW46JKc566X6Jm96ZqL6ZqP57ul6auT56KO5bKB56mX6YGC6Zqn56Wf5a2Z5o2f56yL6JOR5qKt5ZSG57yp55CQ57Si6ZSB5omA5aGM5LuW5a6D5aW55aGU542t5oye6LmL6LiP6IOO6IuU5oqs5Y+w5rOw6YWe5aSq5oCB5rGw5Z2N5pGK6LSq55ir5rup5Z2b5qqA55ew5r2t6LCt6LCI5Z2m5q+v6KKS56Kz5o6i5Y+554Kt5rGk5aGY5pCq5aCC5qOg6Iab5ZSQ57OW5YCY6Lq65reM6Laf54Or5o6P5rab5ruU57um6JCE5qGD6YCD5reY6Zm26K6o5aWX54m56Jek6IW+55a86KqK5qKv5YmU6Lii6ZSR5o+Q6aKY6LmE5ZW85L2T5pu/5ZqP5oOV5raV5YmD5bGJ5aSp5re75aGr55Sw55Sc5oGs6IiU6IWG5oyR5p2h6L+i55y66Lez6LS06ZOB5biW5Y6F5ZCs54OD5rGA5bu35YGc5Lqt5bqt5oy66ImH6YCa5qGQ6YWu556z5ZCM6ZOc5b2k56ul5qG25o2F562S57uf55eb5YG35oqV5aS06YCP5Ye456eD56qB5Zu+5b6S6YCU5raC5bGg5Zyf5ZCQ5YWU5rmN5Zui5o6o6aKT6IW/6JyV6KSq6YCA5ZCe5bGv6IeA5ouW5omY6ISx6bi16ZmA6amu6am85qSt5aal5ouT5ZS+5oyW5ZOH6JuZ5rS85aiD55Om6KKc5q2q5aSW6LGM5byv5rm+546p6aG95Li454O35a6M56KX5oy95pma55qW5oOL5a6b5amJ5LiH6IWV5rGq546L5Lqh5p6J572R5b6A5pe65pyb5b+Y5aaE5aiB5beN5b6u5Y2x6Z+m6L+d5qGF5Zu05ZSv5oOf5Li65r2N57u06IuH6JCO5aeU5Lyf5Lyq5bC+57qs5pyq6JSa5ZGz55WP6IOD5ZaC6a2P5L2N5rit6LCT5bCJ5oWw5Y2r55if5rip6JqK5paH6Ze757q55ZC756iz57SK6Zeu5Zeh57+B55Ou5oyd6JyX5rah56qd5oiR5pah5Y2n5o+h5rKD5ber5ZGc6ZKo5LmM5rGh6K+s5bGL5peg6Iqc5qKn5ZC+5ZC05q+L5q2m5LqU5o2C5Y2I6Iie5LyN5L6u5Z2e5oiK6Zu+5pmk54mp5Yu/5Yqh5oKf6K+v5piU54aZ5p6Q6KW/56GS55+95pmw5Zi75ZC46ZSh54m656iA5oGv5biM5oKJ6Iad5aSV5oOc54aE54Ov5rqq5rGQ54qA5qqE6KKt5bit5Lmg5aqz5Zac6ZOj5rSX57O76ZqZ5oiP57uG556O6Jm+5Yyj6Zye6L6W5pqH5bOh5L6g54ut5LiL5Y6m5aSP5ZCT5o6A6ZSo5YWI5LuZ6bKc57qk5ZK46LSk6KGU6Ii36Zey5raO5bym5auM5pi+6Zmp546w54yu5Y6/6IW66aaF576h5a6q6Zm36ZmQ57q/55u45Y6i6ZW26aaZ566x6KWE5rmY5Lmh57+U56Wl6K+m5oOz5ZON5Lqr6aG55be35qmh5YOP5ZCR6LGh6JCn56Gd6ZyE5YmK5ZOu5Zqj6ZSA5raI5a615reG5pmT5bCP5a2d5qCh6IKW5ZW456yR5pWI5qWU5Lqb5q2H6J2O6Z6L5Y2P5oyf5pC66YKq5pac6IOB6LCQ5YaZ5qKw5Y246J+55oeI5rOE5rO76LCi5bGR6Jaq6Iqv6ZSM5qyj6L6b5paw5b+75b+D5L+h6KGF5pif6IWl54yp5oO65YW05YiR5Z6L5b2i6YKi6KGM6YaS5bm45p2P5oCn5aeT5YWE5Ye26IO45YyI5rG56ZuE54aK5LyR5L+u576e5py95ZeF6ZSI56eA6KKW57uj5aKf5oiM6ZyA6Jma5ZiY6aG75b6Q6K646JOE6YWX5Y+Z5pet5bqP55Wc5oGk57Wu5am/57uq57ut6L2p5Zan5a6j5oKs5peL546E6YCJ55mj55yp57ua6Z206Jab5a2m56m06Zuq6KGA5YuL54aP5b6q5pes6K+i5a+76amv5beh5q6J5rGb6K6t6K6v6YCK6L+F5Y6L5oq86bim6bit5ZGA5Lir6Iq954mZ6Jqc5bSW6KGZ5rav6ZuF5ZOR5Lqa6K6254SJ5ZK96ZiJ54Of5re555uQ5Lil56CU6JyS5bKp5bu26KiA6aKc6ZiO54KO5rK/5aWE5o6p55y86KGN5ryU6Imz5aCw54eV5Y6M56Ca6ZuB5ZSB5b2m54Sw5a606LCa6aqM5q6D5aSu6biv56en5p2o5oms5L2v55ah576K5rSL6Ziz5rCn5Luw55eS5YW75qC35ry+6YKA6IWw5aaW55G25pGH5bCn6YGl56qR6LCj5aea5ZKs6IiA6I2v6KaB6ICA5qSw5ZmO6IC254i36YeO5Ya25Lmf6aG15o6W5Lia5Y+25puz6IWL5aSc5ray5LiA5aO55Yy75o+W6ZOx5L6d5LyK6KGj6aKQ5aS36YGX56e75Luq6IOw55aR5rKC5a6c5aeo5b2d5qSF6JqB5YCa5bey5LmZ55+j5Lul6Im65oqR5piT6YKR5bG55Lq/5b256IeG6YC46IKE55ar5Lqm6KOU5oSP5q+F5b+G5LmJ55uK5rqi6K+j6K6u6LCK6K+R5byC57+857+M57uO6Iy16I2r5Zug5q636Z+z6Zi05ae75ZCf6ZO25rer5a+F6aWu5bC55byV6ZqQ5Y2w6Iux5qix5am06bmw5bqU57yo6I656JCk6JCl6I2n6J2H6L+O6LWi55uI5b2x6aKW56Gs5pig5ZOf5oul5L2j6IeD55eI5bq46ZuN6LiK6Ju55ZKP5rOz5raM5rC45oG/5YuH55So5bm95LyY5oKg5b+n5bCk55Sx6YKu6ZOA54q55rK55ri46YWJ5pyJ5Y+L5Y+z5L2R6YeJ6K+x5Y+I5bm86L+C5rek5LqO55uC5qaG6Jme5oSa6IiG5L2Z5L+e6YC+6bG85oSJ5rid5riU6ZqF5LqI5aix6Zuo5LiO5bG/56a55a6H6K+t5769546J5Z+f6IqL6YOB5ZCB6YGH5Za75bOq5b6h5oSI5qyy54ux6IKy6KqJ5rW05a+T6KOV6aKE6LGr6amt6biz5riK5Yak5YWD5Z6j6KKB5Y6f5o+06L6V5Zut5ZGY5ZyG54y/5rqQ57yY6L+c6IuR5oS/5oCo6Zmi5puw57qm6LaK6LeD6ZKl5bKz57Kk5pyI5oKm6ZiF6ICY5LqR6YOn5YyA6Zmo5YWB6L+Q6JW06YWd5pmV6Z+15a2V5Yyd56C45p2C5qC95ZOJ54G+5a6w6L295YaN5Zyo5ZKx5pSS5pqC6LWe6LWD6ISP6JGs6YGt57Of5Ye/6Je75p6j5pep5r6h6Jqk6LqB5Zmq6YCg55qC54G254el6LSj5oup5YiZ5rO96LS85oCO5aKe5oaO5pu+6LWg5omO5Zaz5rij5pyt6L2n6ZOh6Ze455yo5qCF5qao5ZKL5LmN54K46K+I5pGY5paL5a6F56qE5YC65a+o55675q+h6Km557KY5rK+55uP5pap6L6X5bSt5bGV6Ji45qCI5Y2g5oiY56uZ5rmb57u95qif56ug5b2w5ryz5byg5o6M5rao5p2W5LiI5biQ6LSm5LuX6IOA55i06Zqc5oub5pit5om+5rK86LW154Wn572p5YWG6IKH5Y+s6YGu5oqY5ZOy6Juw6L6Z6ICF6ZSX6JSX6L+Z5rWZ54+N5paf55yf55SE56Cn6Ie76LSe6ZKI5L6m5p6V55a56K+K6ZyH5oyv6ZWH6Zi16JK45oyj552B5b6B54uw5LqJ5oCU5pW05ouv5q2j5pS/5bin55eH6YOR6K+B6Iqd5p6d5pSv5ZCx6JyY55+l6IKi6ISC5rGB5LmL57uH6IGM55u05qSN5q6W5omn5YC85L6E5Z2A5oyH5q2i6La+5Y+q5peo57q45b+X5oya5o636Iez6Ie0572u5bic5bOZ5Yi25pm656ep56ia6LSo54KZ55eU5rue5rK756qS5Lit55uF5b+g6ZKf6KG357uI56eN6IK/6YeN5Luy5LyX6Iif5ZGo5bee5rSy6K+M57Kl6L206IKY5bia5ZKS55qx5a6Z5pi86aqk54+g5qCq6Jub5pyx54yq6K+46K+b6YCQ56u554Ob54Wu5ouE556p5Zix5Li76JGX5p+x5Yqp6JuA6LSu6ZO4562R5L2P5rOo56Wd6am75oqT54iq5ou95LiT56CW6L2s5pKw6LWa56+G5qGp5bqE6KOF5aaG5pKe5aOu54q25qSO6ZSl6L+96LWY5Z2g57yA6LCG5YeG5o2J5ouZ5Y2T5qGM55Ci6IyB6YWM5ZWE552A54G85rWK5YW55ZKo6LWE5ae/5ruL5reE5a2c57Sr5LuU57G95ruT5a2Q6Ieq5riN5a2X6ayD5qOV6Liq5a6X57u85oC757q16YK56LWw5aWP5o+N56ef6Laz5Y2S5peP56WW6K+F6Zi757uE6ZK757qC5Zi06YaJ5pyA572q5bCK6YG15pio5bem5L2Q5p+e5YGa5L2c5Z2Q5bqn6ZSV5Zez5auS55G35pqn6Zyt6LCZ6ZO16bmM5aqq6aqc6bOM6ZKv5ZGX6ZKj6bio6b6F6bmO6LSy6ZSb6I2c5ZOU5ruX6ZOL562a6Le46IuE57yP56y+6aqg6aOR6aOZ6ZWW6ZWz6bOU5YKn57yk5qef5q6h6IaR6ZWU6auM6ayT56aA6aW96ZK56bmB6ZK46aqW6buq5oG76ZS45L6q6ZKX5YaB6LCE6LC26JKH5b+P5am16aqj6KeH56aF6ZWh5Lyl6IuM5oCF6ZiK6bKz56CX5Lyn6LCM5qaH56Kc6b6A5p6o5p+96ZOW6ZOb6aWs6bix6ZOz5L+m5bix6Zug5YiN57uM6Lmw6ZKP5oCG57yN6bmR6L6N6b6K6bma6IuB6aqi5p6e6L6P5pK66ZSJ6bm+5ZOS6Z6R6aqA57uQ5q6a6LWV55iF566q6LCg56CA6KOG54SY6ZWr57G06K+L6LCb57uo6KeM6ZWd5beF6ZK/55mr6ZOr6bK36bK96ZOk6ZOl5bK96bir56qm5riO5qSf54mN56yD6bup57CW5oC86ZWm54KW6La46ZOO6LCU5Z6p6ZiP6L2t6ZSH6ZS36bmX6aKa6aKb6bOE6K+26L+p6ZOS6bi46bKV6ZKr6bKC57uv6ZWE6bKx5YG+5rKj5Yer6am457uC57uL6LWZ6bq46bKL6bOG6ZKG6LWF5bC05pOA57uA5oiG552+6K+w57yf6ZSG57ql6ZWJ6aKN5LqY6LWT57ug6bKg6K+f57yR6KeP6K+C5q+C6ZK06ZSi6biq6bmE6bmY6bi55o606K+W5o686bmz6bOP54q35Yym5Yi/5aar5qGn6bKR6bOc6KGu57uy6bKn5Z+a5ZGZ5bi85qSB6J2I6ZOq6Zia57uX6aKJ54GP6aKi6K+D6ZiW6JuO6buJ6K6n6I2t6Zez6bKO5rWS6bmV6aqF5qGm6ZOn5aWC57yz6ZS+6bKp6bOH6K+Z6I2f5ZOV5rWN57yL54+y5pmW6K+o6aaE6ZiN6ZKs6ZWs6K6m6K+Y6I2g5Y+95ZOc6aql546R6KeK6b2R55+2576B6Jm/6Le76ZyB6bKa6bKr6YOP5rWD6ZOX6ZWT6Juy6LCP57yj5oiL5ois552R6bmj56yV6bKj6Z6v57ub57yw5oyi5bOk6bmq6bKb55aW6aKM6bKS5Y266I2p6aaR57yZ6LWG6KeQ5Yit5rO+6L+z5byq6IOr6Z2T6ZiE6big6bmr6K615bGm5qaJ6aOT6ZKc6ZSU56qt6b6D6ZSp6ZWM6Zq96LCy54+P55qy5YmA5Z6y5b++5oG66ZOg6ZS06b6b6Ze26ZKq6ZOQ6aqS57yC6L2y6ZK26ZSe6aKU6b6I6ZO/5Za+6YOQ5ZOZ6ISN54uv6auL6K+T6K+z6YKd5Zy557qp6LS25Yyu6JKJ5oSm6IGp56+R6ZiD6ZSf6bKy6Ju05bSD5b6V5rae5r+R6LWJ552Q6ZO855me57GB5bKa5qaE5paT6ZWn6KS06ZiG6ZSS5ZSg5bSC6ZOR6ZO555eo6bOT6K+U57yn5L+q6YOm5Z2c6IuI6I6F6JOg5ZGW6YCm6aqK57yh5p6l5qCO6L2556C66ZSC6bmC55ag57Kd6Lee6Zuz6bKh6bOi6JS55aWB5r2L55CP5q6T6KOi6KOj6bKi6a2J57yt6ZKM6bmp6JS65buq5qqp6L6a6LqP57ur5qOC6JuP6bKu5rWP6aqd57u66ZWP6bmo6IyP5rO354+R5qCK6IOn56C75YG76JKM5Za95bWd6ZWC55iY6ICn6J286auF5Z6G5pK45Zmc6Ze+5rO45riM5qCM5qm56L2z6L6C6L6Y5rCH6IOq6bis6bmt6Ii76bKI6ISU5aiI5qC+6bi+6Yqu5Zu16I2m54yh5rO65qSk6IS26ZWZ5qaI6KSb6ZSK5ZGS5ZSb5ay35p2p5Yqi57ym6ZWY6aKh6bOX6bq95omq54SW5oeR6ZKU6IqI6LCn54yV56Wi5riR6IW86bu+57yI57yq6Ze157yX6LCf6JOm6aaN5q6B6ZWG6ZK86ZOZ6K636ZOM6bK16L6H6bK26IyR6KKF6Zmn6JiW5Zer6aKf6LmR6IuO5ZKb6IGN5L6s5ZOd6am96ZKV5YKp6K605oCE55Ov6LmS55ax6L6U57qw57206ZON6LCd6aqI57yl5auU6ZKL6ZWk6ZWo6JWy6aqQ57uu5qGk56Kb6aKA6aKD6bON5L2l6I2o5oKt6aqe57yx5qSg6ZKk5aux5qiv5oiX54Kd6ZSW6ZS16ZWq576f6LeE6K+u6LCv6I2e57yy56GX6Le35oOs6ZSy566n6ZST5o+/6bKt6IyV6Jux5bev6LWH6Jmu6bOF6K+O5bKW6ZiS6KeR6biy6K+g57u76L6B6ZOo6ZiV6ZiZ5oKr6I2b5aiG5qGh6aWq6L2r5bWY6J2+57yb6ZO36aKm6Jqs6aOS5q+157OB57yr5ZWs6ZOv56mR6ZOp6bKo6YW+6K6q5aeX6aqf6ZKQ6bOd5Z6n5q6H6Kee5Y6N5rug55Wy6K+c6LCC5riW6LCl5Z+Y6I6z5byR6L286LSz6ZOI6bKl57u25pGF57q+6Zep6ZOE5Y6u6am357yM6ZS26bi26Jau6aaK6aOV6ZS86LCh56ij6LCH6I2q54uy5ZSi552D6Ze86ZOK6bOO6ZKb6bKQ5piZ6ZK96ZSs6aG45YKl6aWn6ZO06ZWX6Z+s6ZO957yH6bmI6ZiX57Kc6b6G6bKm5oG46ZKt6ZKN5oqf6aWo566o6byN5aiy6IW957qo57u+6L6L6K+/5biP6Zex5rKp5rag546u6Z+q54Kc6bKU6ZiM6I606b6M6YKs5bqR5oCD5aap6aqb6bmJ6bmc6aWp6ZiL54666KeL56GW6IuL6I626JeT5bKY54yD5ai06bmH55er6Jqd57G86Le56IqX6aW36aqn57yD6aOo5ZOT5r2H6aqB57uh5p6t566r5Lq15pK357uB57ys6ZmJ6I2l6aaQ6bi66K+p6aG86LCW6ZOJ6ZWf6LCR5rO26bOV5Z+Z5rWU6bKf5Z6t5aiF5qGg5rCp5Y6j6LWd5L+o5YWW6LCz5oG56Zer6YW96a2H6aSN6by554KA6L266bme6bOQ6Z2l6LCS6YK65pmU54Oo6K+S5ZGT5bOE6aW05oC/6am/57yi6L226LS76ZKH6ZWS6ZWx55iX6Iij6ZOf55i+6IyU6I666JCm6JOl5pKE5Zik5rui5r2G55KO6bmm55i/6aKP572C6ZWb6I646ZOV6bG/5Lyb5L+j6LCA6LCV6JOj5bWb6aWr6ZiI5aaq57qh6KeO5qyk6ZKw6bmG6bms6b6J5qm86bii6byL6ZK66YOT6Iq45oG95oSg57qt6Z+r5q6S5rCy55OS6Lax6Yy+6am16LWc5ZWn5bi7566m6LCu57yv6LC16K+P6ZKK6LCq6L6E6bmn5rWI57yc5qGi6L246LWI56Wv6bip6K+k5bOl6ZKy6ZOu562d6aqY5qCJ5qCA6L216L2+6LS96bi36Juz57W36Lis6Liv6Kev6ZS657qj57uJ5Lyr5qeg6ZOi5ZWt6aaU6aKe6aqT57yS6K+86ZWv6LCY57yB6L6O6LWA55ym6ZSx6b6H6bK75YGs6K+56am66bKw6ZWe57y16Lqc6bOf6K6g6LCr6YOE5YuQ5Ye85Z2C5Z6F5Z605Z+v5Z+d6IuY6I2s6I2u6I6c6I686I+w6JeB5o+45ZCS5ZCj5ZKU5ZKd5ZK05ZmY5Zm85Zqv5bme5bKZ5bW05b235b6854q454uN6aaA6aaH6aaT6aaV5oSj5oa35oeU5Lis5rqG5ruf5rq35ryk5r205r6555Sv57qf57uU57ux54+J5p6n5qGK5qGJ5qeU5qml6L2x6L236LWN6IK36IOo6aOa54Wz54WF54aY5oSN5re856Cc56OZ55yN6ZKa6ZK36ZOY6ZOe6ZSD6ZSN6ZSO6ZSP6ZSY6ZSd6ZSq6ZSr6ZS/6ZWF6ZWO6ZWi6ZWl6ZWp6ZWy56iG6bmL6bmb6bmx55as55a055eW55mv6KOl6KWB6ICi6aKl6J6o6bq06bKF6bKG6bKH6bKe6bK06bK66bK86bOK6bOL6bOY6bOZ6Z6S6Z606b2EJztcbn1cbmZ1bmN0aW9uIGZ0UFlTdHIoKXtcbiAgICByZXR1cm4gJ+WViumYv+Wfg+aMqOWTjuWUieWTgOeamueZjOiXueefruiJvuekmeaEm+mamOmejeawqOWuieS/uuaMieaal+WyuOiDuuahiOmqr+aYguebjuWHueaVlueGrOe/uuilluWCsuWlp+aHiua+s+iKreaNjOaJkuWPreWQp+eshuWFq+eWpOW3tOaLlOi3i+mdtuaKiuiAmeWjqemcuOe9t+eIuOeZveafj+eZvuaTuuS9sOaVl+aLnOeol+aWkeePreaQrOaJs+iIrOmgkuadv+eJiOaJruaLjOS8tOeTo+WNiui+pue1humCpuW5q+aihuamnOiGgOe2geajkuejheiajOmOiuWCjeisl+iLnuiDnuWMheikkuWJneiWhOmbueS/neWgoemjveWvtuaKseWgseaatOixuemukeeIhuadr+eikeaCsuWNkeWMl+i8qeiDjOiynemLh+WAjeeLveWCmeaGiueEmeiiq+WllOiLr+acrOesqOW0qee5g+eUreaztei5pui/uOmAvOm8u+avlOmEmeethuW9vOeip+iTluiUveeVouaWg+avluW5o+W6h+eXuemWieaVneW8iuW/hei+n+WjgeiHgumBv+mZm+meremCiue3qOiytuaJgeS+v+iuiuWNnui+qOi+r+i+rumBjeaomeW9quiGmOihqOmxieaGi+WIpeeZn+W9rOaWjOeAlea/seizk+aTr+WFteWGsOafhOS4meeniemkheeCs+eXheS4pueOu+iPoOaSreaSpee8veazouWNmuWLg+aQj+mJkeeulOS8r+W4m+iItuiEluiGiua4pOaziumngeaNleiUlOWTuuijnOWfoOS4jeW4g+atpeewv+mDqOaAluaTpueMnOijgeadkOaJjeiyoeedrOi4qemHh+W9qeiPnOiUoemkkOWPg+igtuaumOaFmuaFmOeHpuiSvOiJmeWAiea7hOiXj+aTjeezmeanveabueiNieW7geetluWBtOWGiua4rOWxpOi5reaPkuWPieiMrOiMtuafpeeitOaQveWvn+WylOW3ruipq+aLhuaftOixuuaUmeaRu+ifrOmlnuiukue6j+mPn+eUoumXoemhq+aYjOeMluWgtOWYl+W4uOmVt+WEn+iFuOW7oOaVnuaaouWUseWAoei2heaKhOmIlOacneWYsua9ruW3ouWQteeCkui7iuaJr+aSpOaOo+W+uea+iOmDtOiHo+i+sOWhteaZqOW/seayiOmZs+i2geilr+aSkOeoseWfjuapmeaIkOWRiOS5mOeoi+aHsua+hOiqoOaJv+mAnumogeenpOWQg+eZoeaMgeWMmeaxoOmBsuW8m+mms+aBpem9kuS+iOWwuui1pOe/heaWpeeGvuWFheayluifsuW0h+WvteaKvemFrOeWh+i6iueooOaEgeexjOS7h+e2oueehemGnOiHreWIneWHuuarpeW7mui6h+mLpOmbm+a7gemZpOalmuekjuWEsuefl+aQkOinuOiZleaPo+W3neepv+akveWCs+iIueWWmOS4sueYoeeql+W5ouW6iumXluWJteWQueeCiuaNtumMmOWeguaYpeakv+mGh+WUh+a3s+e0lOigouaIs+e2veeWteiMqOejgembjOi+reaFiOeTt+ipnuatpOWIuuiznOasoeiBsOiUpeWbquWMhuW+nuWPoua5iueyl+mGi+ewh+S/g+i6peevoeerhOaRp+W0lOWCrOiEhueYgeeyuea3rOe/oOadkeWtmOWvuOeji+aSruaQk+aOquaMq+mMr+aQremBlOetlOeYqeaJk+Wkp+WRhuatueWCo+aItOW4tuauhuS7o+iyuOiii+W+hemAruaAoOiAveaTlOS4ueWWrumEsuaSo+iGveaXpuawruS9huaGmua3oeiqleW9iOibi+eVtuaTi+m7qOiVqeaqlOWIgOaQl+i5iOWAkuWztuemseWwjuWIsOeou+aCvOmBk+ebnOW+t+W+l+eahOi5rOeHiOeZu+etieeequWHs+mEp+WgpOS9jua7tOi/quaVteesm+eLhOa7jOe/n+WroeaKteW6leWcsOiSguesrOW4neW8n+mBnue3oOmhm+aOgua7h+eimOm7nuWFuOmdm+Wiiumbu+S9g+eUuOW6l+aDpuWloOa+seauv+eiieWPvOmblembleWIgeaOieWQiumHo+iqv+i3jOeIueein+idtuWPoOirnOeWiuS4geebr+WPrumHmOmggum8jumMoOWumuioguS4n+adseWGrOiRo+aHguWLleajn+S+l+aBq+WHjea0nuWFnOaKlumspemZoeixhumAl+eXmOmDveedo+avkueKoueNqOiugOWgteedueizreadnOmNjeiCmuW6pua4oeWmkuerr+efremNm+auteaWt+e3nuWghuWFjOmaiuWwjeWiqeWZuOi5suaVpumgk+WbpOmIjeebvumBgeaOh+WThuWkmuWlquWem+i6suactei3uuiIteWJgeaDsOWiruibvuWzqOm1neS/hOmhjeiom+WopeaDoeWOhOaJvOmBj+mEgumkk+aBqeiAjOWFkuiAs+eIvumkjOa0seS6jOiys+eZvOe9sOetj+S8kOS5j+mWpeazleeQuuiXqeW4hueVque/u+aoiuekrOmHqee5geWHoeeFqeWPjei/lOevhOiyqeeKr+mjr+azm+WdiuiKs+aWueiCquaIv+mYsuWmqOS7v+ioque0oeaUvuiPsumdnuWVoemjm+iCpeWMquiqueWQoOiCuuW7ouayuOiyu+iKrOmFmuWQqeawm+WIhue0m+Wis+eEmuaxvueyieWlruS7veW/v+aGpOeznuixkOWwgealk+icguWzsOmLkumiqOeYi+eDvemAoummrue4q+irt+Wliemzs+S9m+WQpuWkq+aVt+iGmuWtteaJtuaLgui8u+W5heawn+espuS8j+S/mOacjea1rua2quemj+iiseW8l+eUq+aSq+i8lOS/r+mHnOaWp+iEr+iFkeW6nOiFkOi1tOWJr+imhuizpuW+qeWCheS7mOmYnOeItuiFueiyoOWvjOiog+mZhOWppue4m+WSkOWZtuWYjuipsuaUueamgumIo+iTi+a6ieW5ueeUmOahv+afkeerv+iCnei2leaEn+eoiOaVoui0m+WyoeWJm+mLvOe8uOiCm+e2seW0l+a4r+adoOevmeiHr+mrmOiGj+e+lOezleaQnumOrOeov+WRiuWTpeatjOaTseaIiOm0v+iDs+eWmeWJsumdqeiRm+agvOibpOmWo+malOmJu+WAi+WQhOe1puaguei3n+iAleabtOW6mue+ueWfguiAv+ail+W3peaUu+WKn+aBrem+lOS+m+i6rOWFrOWuruW8k+mej+axnuaLseiyouWFsemJpOWLvua6neiMjeeLl+Weouani+izvOWkoOi+nOiPh+WSleeujeS8sOayveWtpOWnkem8k+WPpOigsemqqOiwt+iCoeaVhemhp+Wbuumbh+WIrueTnOWJruWvoeaOm+ikguS5luaLkOaAquajuumXnOWumOWGoOingOeuoemkqOe9kOaFo+eBjOiyq+WFieW7o+mAm+eRsOimj+WcreefveatuOm+nOmWqOi7jOmsvOipreeZuOahguarg+i3quiytOWKiui8pea7vuajjemNi+mDreWci+aenOijuemBjuWTiOmquOWtqea1t+awpuS6peWus+mnremFo+aGqOmCr+mfk+WQq+a2teWvkuWHveWWiue9lee/sOaSvOaNjeaXseaGvuaCjeeEiuaxl+a8ouWkr+adreiIquWjleWajuixquavq+mDneWlveiAl+iZn+a1qeWRteWWneiNt+iPj+aguOemvuWSjOS9leWQiOebkuiyiemWoeays+a2uOi1q+ikkOm2tOizgOWYv+m7keeXleW+iOeLoOaBqOWTvOS6qOapq+ihoeaBkui9n+WThOeDmOiZuem0u+a0quWuj+W8mOe0heWWieS+r+eMtOWQvOWOmuWAmeW+jOWRvOS5juW/veeRmuWjuuiRq+iDoeidtOeLkOeziua5luW8p+iZjuWUrOitt+S6kua7rOaItuiKseWYqeiPr+eMvua7keeVq+WKg+WMluipseankOW+iuaHt+a3ruWjnuatoeeSsOahk+mChOe3qeaPm+aCo+WWmueYk+ixoueFpea4meWupuW5u+iNkuaFjOm7g+ejuuidl+ewp+eah+WHsOaDtueFjOaZg+W5jOaBjeisiueBsOaPrui8neW+veaBouiblOWbnuavgOaClOaFp+WNieaDoOaZpuizhOepouacg+eHtOWMr+irseiqqOe5quiRt+aYj+Wpmumtgua4vua3t+ixgea0u+WkpeeBq+eNsuaIluaDkemcjeiyqOemjeaTiuWcvuWfuuapn+eVuOeoveepjeeuleiCjOmlkei3oea/gOitj+mbnuWnrOe4vue3neWQiealteajmOi8r+exjembhuWPiuaApeeWvuaxsuWNs+Wriee0muaToOW5vuiEiuW3seiWiuaKgOWGgOWto+S8juelreWKkeaCuOa/n+WvhOWvguioiOiomOaXouW/jOmam+e5vOe0gOWYieaet+WkvuS9s+WutuWKoOiOoumgsOiziOeUsumJgOWBh+eovOWDueaetumnleWrgeausuebo+WgheWwlueui+mWk+eFjuWFvOiCqeiJseWluOe3mOe5reaqouafrOWgv+m5vOaPgOaSv+ewoeWEieWJqua4m+iWpuaqu+mRkui4kOizpOimi+mNteeureS7tuWBpeiJpuWKjemknua8uOa/uua+l+W7uuWDteWnnOWwh+a8v+axn+eWhuiUo+ans+eNjuism+WMoOmGrOmZjeiVieakkuekgeeEpuiGoOS6pOmDiua+humpleWsjOWavOaUqumJuOefr+WDpeiFs+eLoeinkumkg+e5s+e1nuWJv+aVmemFtei9jui8g+WPq+eqluaPreaOpeeahueoreihl+majuaIquWKq+evgOiOluedm+aZtumvqOS6rOmpmueyvueys+e2k+S6leitpuaZr+mguOmdnOWig+aVrOmPoeW+keeXmemdluern+ertuWHiOeCr+eqmOaPqueptuezvueOlumfreS5heeBuOS5nemFkuW7hOaVkeiIiuiHvOiIheWSjuWwseeWmumeoOaLmOeLmeeWveWxhemnkuiPiuWxgOWSgOefqeiIieayruiBmuaLkuaTmuW3qOWFt+i3nei4numLuOS/seWPpeaHvOeCrOWKh+aNkOm1keWon+WApuect+WNt+e1ueaSheaUq+aKieaOmOWAlOeIteahlOWCkeaNt+edq+errea9lOe1kOino+WnkOaIkuiXieiKpeeVjOWAn+S7i+eWpeiqoeWxhuW3vueti+aWpOmHkeS7iua0peiln+e3iumMpuWDheisuemAsumds+aZieemgei/keeHvOa1uOeboeWLgeiNiuWFouimuuaxuuioo+e1leWdh+iPjOmInui7jeWQm+Wzu+S/iuero+a1mumDoemnv+WWgOWSluWNoeWSr+mWi+aPqealt+WHseaFqOWIiuWgquWLmOWdjuegjeeci+W6t+aFt+ezoOaJm+aKl+S6oueCleiAg+aLt+eDpOmdoOWdt+iLm+afr+ajteejlemhhuenkeauvOWSs+WPr+a4tOWFi+WIu+WuouiqsuiCr+WVg+WivuaHh+WdkeWQreepuuaBkOWtlOaOp+aRs+WPo+aJo+Wvh+aer+WTreeqn+iLpumFt+W6q+iksuiqh+WeruaMjui3qOiDr+Whiuett+WEiOW/q+WvrOasvuWMoeetkOeLguahhuekpuectuaboOazgeiZp+eblOW3i+equuiRteWljumtgeWCgOmli+aEp+a9sOWdpOaYhuaNhuWbsOaLrOaTtOW7k+mXiuWeg+aLieWWh+ign+iHmOi+o+WVpuiQiuS+huiztOiXjeWpquashOaUlOexg+mXjOiYreeAvuiuleaUrOimveaHtue6nOeIm+a/q+eRr+amlOeLvOW7iumDjuacl+a1quaSiOWLnueJouiAgeS9rOWnpemFqueDmea+h+WLkuaogumbt+mQs+iVvuejiue0r+WEoeWjmOaTguiCi+mhnua3muajsealnuWGt+WOmOaiqOeKgem7juexrOiyjemboua8k+eQhuadjuijj+mvieemruiOieiNlOWQj+agl+m6l+WOsuWLteekq+att+WIqeWCiOS+i+S/kOeXoueri+eykueAnemauOWKm+eSg+WTqeWAhuiBr+iTrumAo+mQruW7ieaGkOa8o+ewvuaWguiHiemPiOaIgOeFiee3tOezp+a2vOaigeeyseiJr+WFqei8m+mHj+aZvuS6ruirkuaSqeiBiuWDmueZgueHjuWvpemBvOa9puS6huaSgumQkOW7luaWmeWIl+ijgueDiOWKo+eNteeQs+ael+ejt+mcluiHqOmEsOmxl+a3i+WHnOizg+WQneaLjueOsuiPsembtum9oemItOS8tue+mua3qemdiOmZteW2uumgmOWPpuS7pOa6nOeQieamtOehq+mkvueVmeWKieeYpOa1geafs+WFrem+jeiBvuWaqOexoOeqv+mahuWjn+aUj+matOaok+WpgeaRn+ewjea8j+mZi+iYhuebp+mhseW7rOeIkOaThOm5teiZnOmtr+m6k+eijOmcsui3r+izgum5v+a9nuelv+mMhOmZuOaIrumpouWRgumLgeS+tuaXheWxpeWxoue4t+aFruawr+W+i+eOh+a/vue2oOW3kuaUo+Wtv+eBpOWNteS6guaOoOeVpeaOhOi8quWAq+S+lua3que2uOirluiYv+ieuue+hemCj+mRvOexrumovuijuOiQvea0m+mnsee1oeWqvem6u+eRqueivOienummrOe9teWYm+WXjuWfi+iyt+m6peizo+mCgeiEiOeenumlheigu+a7v+iUk+abvOaFoua8q+isvuiKkuiMq+ebsuawk+W/meiOveiyk+iMhemMqOavm+efm+mJmuWNr+iMguWGkuW4veiyjOiyv+m6veeOq+aemuaihemFtum7tOeFpOaykuecieWqkumOguavj+e+juaYp+WvkOWmueWqmumWgOaCtuWAkeiQjOiSmeaqrOebn+mMs+eMm+WkouWtn+eeh+mGmumdoeeznOi/t+isjuW9jOexs+enmOimk+azjOicnOWvhuWGquajieecoOe2v+WGleWFjeWLieWoqee3rOmdouiLl+aPj+eehOiXkOenkua4uuW7n+WmmeiUkea7heawkeaKv+eav+aVj+aGq+mWqeaYjuien+mztOmKmOWQjeWRveisrOaRuOaRueiYkeaooeiGnOejqOaRqemtlOaKueacq+iOq+WiqOm7mOayq+a8oOWvnumZjOisgOeJn+afkOaLh+eJoeeVneWnhuavjeWik+aaruW5leWLn+aFleacqOebruedpueJp+ephuaLv+WTquWQtumIiemCo+WonOe0jeawluS5g+WltuiAkOWliOWNl+eUt+mbo+WbiuaSk+iFpuaDsemsp+a3luWRoumkkuWFp+WrqeiDveWmrumck+WAquazpeWwvOaTrOWms+WMv+iGqemAhua6uuiUq+aLiOW5tOeivuaUhuaSmuW/teWomOmHgOmzpeWwv+aNj+iBtuWtveWamemRt+mOs+a2heaCqOaquOeNsOWHneWvp+aTsOa/mOeJm+aJremIlee0kOiGv+a/g+i+suW8hOWltOWKquaAkuWls+aaluiZkOeYp+aMquaHpuezr+irvuWTpuatkOm3l+avhuiXleWYlOWBtua8muWVqui2tOeIrOW4leaAleeQtuaLjeaOkueJjOW+mOa5g+a0vuaUgOa9mOebpOejkOebvOeVlOWIpOWPm+S5k+m+kOaXgeiAquiDluaLi+WShuWIqOeCruiijei3keazoeWRuOiDmuWfueijtOizoOmZqumFjeS9qeaym+WZtOebhuegsOaKqOeDuea+juW9reiTrOajmuehvOevt+iGqOaci+m1rOaNp+eisOWdr+egkumcueaJueaKq+WKiOeQteavl+WVpOiEvueWsuearuWMueeXnuWDu+WxgeitrOevh+WBj+eJh+momemjhOa8gueTouelqOaSh+eepeaLvOmgu+iyp+WTgeiBmOS5kuWdquiYi+iQjeW5s+aGkeeTtuipleWxj+Wdoea9kemgl+WphuegtOmthOi/q+eyleWJluaSsumLquS7huiOhuiRoeiPqeiSsuWflOaouOWcg+aZrua1puitnOabneeAkeacn+asuuajsuaImuWmu+S4g+a3kua8huafkuayj+WFtuaji+Wlh+atp+eVpuW0juiHjem9iuaXl+eliOelgemojui1t+ixiOS5nuS8geWVn+WlkeegjOWZqOawo+i/hOajhOaxveazo+ioluaOkOa0veeJveaJoemHrOmJm+WNg+mBt+ewveS7n+ismeS5vum7lOmMoumJl+WJjea9m+mBo+a3uuittOWhueW1jOasoOatieanjeWXhuiFlOe+jOWiu+iWlOW8t+aQtuaph+mNrOaVsuaChOapi+eep+WWrOWDkeW3p+memOaSrOe/ueWzreS/j+erheWIh+iMhOS4lOaAr+eriuasveS+teimquenpueQtOWLpOiKueaTkuemveWvouaygemdkui8leawq+WCvuWNv+a4heaTjuaZtOawsOaDhemgg+iri+aFtueTiueqrueni+S4mOmCseeQg+axguWbmumFi+azhei2qOWNgOibhuabsui7gOWxiOmphea4oOWPluWotum9sui2o+WOu+WciOmhtOasiumGm+azieWFqOeXiuaLs+eKrOWIuOWLuOe8uueClOeYuOWNu+m1suamt+eiuumbgOijmee+pOeEtueHg+WGieafk+eTpOWjpOaUmOWat+iuk+mlkuaTvue5nuaDueeGseWjrOS7geS6uuW/jemfjOS7u+iqjeWIg+Wmiue0ieaJlOS7jeaXpeaIjuiMuOiTieamruiejeeGlOa6tuWuuee1qOWGl+aPieaflOiCieiMueigleWEkuWtuuWmgui+seS5s+axneWFpeikpei7n+mYruiViueRnumKs+mWj+a9pOiLpeW8seaSkueBkeiWqeiFrumwk+WhnuizveS4ieS4ieWCmOaVo+ahkeWXk+WWquaQlOmot+aOg+WrgueRn+iJsua+gOajruWDp+iOjuegguauuuWJjuaymee0l+WCu+WVpeeFnuevqeabrOePiuiLq+adieWxseWIqueFveihq+mWg+mZnOaThei0jeiGs+WWhOaxleaJh+e5leWikeWCt+WVhuiznuaZjOS4iuWwmuijs+aiouaNjueojeeHkuiKjeWLuumftuWwkeWTqOmCtee0ueWlouizkuibh+iIjOiIjei1puaUneWwhOaHvua2ieekvuioreegt+eUs+WRu+S8uOi6q+a3seWooOe0s+elnuayiOWvqeWsuOeUmuiFjuaFjua7suiBsueUn+eUpeeJsuWNh+e5qeecgeebm+WJqeWLneiBluW4q+WkseeNheaWvea/leipqeWxjeiZseWNgeefs+aLvuaZguS7gOmjn+idleWvpuitmOWPsuefouS9v+Wxjumnm+Wni+W8j+ekuuWjq+S4luafv+S6i+aLreiqk+mAneWLouaYr+WXnOWZrOmBqeS7leS+jemHi+mjvuawj+W4guaBg+WupOimluippuaUtuaJi+mmluWuiOWjveaOiOWUruWPl+eYpueNuOiUrOaonuais+auiuaKkui8uOWPlOiIkua3keeWj+abuOi0luWtsOeGn+iWr+aakeabmee9suicgOm7jem8oOWxrOihk+i/sOaoueadn+aIjeixjuWiheW6tuaVuOa8seaBleWIt+iAjeaRlOihsOeUqeW4peagk+aLtOmcnOmbmeeIveiqsOawtOedoeeoheWQrueerOmghuiInOiqqueiqeaclOeIjeaWr+aSleWYtuaAneengeWPuOe1suatu+iChuWvuuWXo+Wbm+S8uuS8vOmjvOW3s+advuiBs+aFq+mgjOmAgeWui+ion+iqpuaQnOiJmOaTu+WXveiYh+mFpeS/l+e0oOmAn+eyn+WDs+Whkea6r+Wuv+iotOiChemFuOiSnOeul+mblumai+maqOe2j+mrk+eijuatsuepl+mBgumap+eln+Wtq+aQjeetjeiTkeaireWUhue4rueRo+e0oumOluaJgOWhjOS7luWug+WlueWhlOeNuuaSu+i5i+i4j+iDjuiLlOaToeiHuuazsOmFnuWkquaFi+axsOWdjeaUpOiyqueZseeBmOWjh+aqgOeXsOa9reitmuirh+Wdpuavr+iikueis+aOouWYhueCrea5r+WhmOaQquWgguajoOiGm+WUkOezluWAmOi6uua3jOi2n+eHmeaOj+a/pOa7lOe1s+iQhOahg+mAg+a3mOmZtuiojuWll+eJueiXpOmosOeWvOishOair+WJlOi4oumKu+aPkOmhjOi5hOWVvOmrlOabv+Waj+aDlea2leWJg+WxnOWkqea3u+Whq+eUsOeUnOaBrOiIlOiFhuaMkeainei/ouecuui3s+iyvOmQteW4luW7s+iBveeDtOaxgOW7t+WBnOS6reW6reaMuuiJh+mAmuahkOmFruees+WQjOmKheW9pOerpeahtuaNheetkue1seeXm+WBt+aKlemgremAj+WHuOemv+eqgeWcluW+kumAlOWhl+WxoOWcn+WQkOWFlOa5jeWcmOaOqOmgueiFv+ibu+ikqumAgOWQnuWxr+iHgOaLluaJmOiEq+m0lemZgOmmsemnneapouWmpeaLk+WUvuaMluWTh+ibmeeqquWog+eTpuilquatquWkluixjOW9jueBo+eOqemgkeS4uOeDt+WujOeil+aMveaZmuealuaDi+Wum+WpieiQrOiFleaxqueOi+S6oeaeiee2suW+gOaXuuacm+W/mOWmhOWogeW3jeW+ruWNsemfi+mBleahheWcjeWUr+aDn+eCuua/sOe2reiRpuiQjuWnlOWBieWBveWwvue3r+acquiUmuWRs+eVj+iDg+mktemtj+S9jea4reisguWwieaFsOihm+eYn+a6q+iaiuaWh+iBnue0i+WQu+epqee0iuWVj+WXoee/geeUleaSvuiduOa4pueqqeaIkeaWoeiHpeaPoeayg+W3q+WXmumOoueDj+axmeiqo+Wxi+eEoeiVquaip+WQvuWQs+avi+atpuS6lOaNguWNiOiInuS8jeS+ruWhouaIiumcp+aZpOeJqeWLv+WLmeaCn+iqpOaYlOeGmeaekOilv+ehkuefveaZsOWYu+WQuOmMq+eKp+eogOaBr+W4jOaCieiGneWkleaDnOeGhOeDr+a6quaxkOeKgOaqhOilsuW4ree/kuWqs+WWnOmKkea0l+ezu+mameaIsue0sOeejuidpuWMo+mcnui9hOaah+WzveS/oOeLueS4i+W7iOWkj+Wah+aOgOmNgeWFiOS7memurue6lum5ueizoumKnOiIt+mWkea2juW8puWrjOmhr+maquePvueNu+e4o+iFuumkoee+qOaGsumZt+mZkOe3muebuOW7gumRsummmeeuseilhOa5mOmEiee/lOelpeips+aDs+mfv+S6q+mgheW3t+apoeWDj+WQkeixoeiVreehnemchOWJiuWTruWbgumKt+a2iOWutea3huabieWwj+WtneagoeiCluWYr+eskeaViOallOS6m+ath+igjemei+WNlOaMvuaUnOmCquaWnOiEheirp+Wvq+aisOWNuOifueaHiOazhOeAieisneWxkeiWquiKr+mLheaso+i+m+aWsOW/u+W/g+S/oemHgeaYn+iFpeeMqeaDuuiIiOWIkeWei+W9oumCouihjOmGkuW5uOadj+aAp+Wnk+WFhOWFh+iDuOWMiOa0tumbhOeGiuS8keS/rue+nuacveWXhemKueengOiilue5oeWin+aIjOmcgOiZm+WZk+mgiOW+kOioseiThOmFl+aVmOaXreW6j+eVnOaBpOe1ruWpv+e3kue6jOi7kuWWp+Wuo+aHuOaXi+eOhOmBuOeZrOecqee1oumdtOiWm+WtuOeptOmbquihgOWLm+eGj+W+quaXrOipouWwi+mmtOW3oeauieaxm+iok+ioiumBnOi/heWjk+aKvOm0iem0qOWRgOS4q+iKveeJmeianOW0luihmea2r+mbheWVnuS6nuioneeEieWSvemWueeFmea3uem5veWatOeglOickuW3luW7tuiogOmhj+mWu+eCjuayv+WlhOaOqeecvOihjea8lOiJt+WgsOeHleWOreehr+mbgeWUgeW9peeEsOWutOiruumpl+aug+Wkrum0puenp+aliuaPmuS9r+eYjee+iua0i+mZveawp+S7sOeZoumkiuaoo+a8vumCgOiFsOWmlueRpOaQluWgr+mBmeeqr+isoOWnmuWSrOiIgOiXpeimgeiAgOaksOWZjuiAtueIuumHjuWGtuS5n+mggeaOlualreiRieabs+iFi+WknOa2suWjueWjuemGq+aPlumKpeS+neS8iuiho+mgpOWkt+mBuuenu+WEgOiDsOeWkeayguWunOWnqOW9nOakheifu+WAmuW3suS5meefo+S7peiXneaKkeaYk+mCkeWxueWEhOW9ueiHhumAuOiChOeWq+S6puijlOaEj+avheaGtue+qeebiua6ouipo+itsOiqvOitr+eVsOe/vOe/jOe5ueiMteiUreWboOaut+mfs+mZsOWnu+WQn+mKgOa3q+WvhemjsuWwueW8lemaseWNsOiLsearu+WssOm3ueaHiee6k+eRqeieoueHn+eGkuighei/jui0j+ebiOW9seepjuehrOaYoOWWsuaTgeWCreiHg+eZsOW6uOmbjei4tOibueipoOazs+a5p+awuOaBv+WLh+eUqOW5veWEquaCoOaGguWwpOeUsemDtemIvueMtuayuemBiumFieacieWPi+WPs+S9kemHieiqmOWPiOW5vOi/gua3pOaWvOebguamhuiZnuaEmui8v+S9meS/numAvumtmuaEiea4nea8gemaheS6iOWom+mbqOiIh+W2vOemueWuh+iqnue+veeOieWfn+iKi+mDgeexsumBh+WWu+WzquempuaEiOassueNhOiCsuitvea1tOWvk+ijlemgkOixq+mmrem0m+a3teWGpOWFg+Weo+iigeWOn+aPtOi9heWckuWToeWck+eMv+a6kOe3o+mBoOiLkemhmOaAqOmZouabsOe0hOi2iui6jemRsOW2veeyteaciOaChemWseiAmOmbsumEluWLu+maleWFgemBi+iYiumGnuaaiOmfu+WtleWMneeguOmbnOagveWTieeBveWusOi8ieWGjeWcqOWSseaUouaaq+i0iui0k+iHn+iRrOmBreezn+mRv+iXu+ajl+aXqea+oeiapOi6geWZqumAoOeagueriOeHpeiyrOaTh+WJh+a+pOiziuaAjuWinuaGjuabvui0iOe0ruWWs+a4o+WKhOi7i+mNmOmWmOecqOafteamqOWSi+S5jeeCuOipkOaRmOm9i+WuheeqhOWCteWvqOeeu+awiOipueeymOayvuebnuaWrOi8vuW2hOWxleiYuOajp+WNoOaIsOermea5m+e2u+aon+eroOW9sOa8s+W8teaOjOa8suadluS4iOW4s+izrOS7l+iEueeYtOmanOaLm+aYreaJvuayvOi2meeFp+e9qeWFhuiCh+WPrOmBruaKmOWTsuifhOi9jeiAhemNuuiUl+mAmea1meePjeaWn+ecn+eUhOegp+iHu+iynumHneWBteaeleeWueiouumch+aMr+mOrumZo+iSuOaOmeednOW+geeMmeeIreaAlOaVtOaLr+ato+aUv+W5gOeZpemEreitieiKneaeneaUr+WQseicmOefpeiCouiEguaxgeS5i+e5lOiBt+ebtOakjeauluWft+WAvOS+hOWdgOaMh+atoui2vuWPquaXqOe0meiqjOaRr+aTsuiHs+iHtOe9ruW5n+WzmeWItuaZuuenqeeomuizqueCmeeXlOa7r+ayu+eqkuS4reebheW/oOmQmOiht+e1gueoruiFq+mHjeS7suecvuiIn+WRqOW3nua0suisheeypei7uOiCmOW4muWSkueauuWumeaZnempn+ePoOagquibm+acseixrOiruOiqhemAkOerueeHreeFruaLhOefmuWbkeS4u+iRl+afseWKqeibgOiyr+mRhOevieS9j+iou+elnemnkOaKk+eIquaLveWwiOejmui9ieaSsOizuuevhuaogeiOiuijneWmneaSnuWjr+eLgOakjumMkOi/vei0heWinOe2tOirhOa6luaNieaLmeWNk+ahjOeQouiMgemFjOWVhOiRl+eBvOa/geiMsuWSqOizh+Wnv+a7i+a3hOWtnOe0q+S7lOexvea7k+WtkOiHqua8rOWtl+msg+ajlei5pOWul+e2nOe4vee4semEkui1sOWlj+aPjeenn+i2s+WNkuaXj+elluipm+mYu+e1hOmJhue6guWYtOmGieacgOe9quWwiumBteaYqOW3puS9kOafnuWBmuS9nOWdkOW6p+mMkuWZr+WsoeeSpuablumdhOirs+mKqOm1quWqvOmpgemwsumIgOWUhOmIkem0h+m9mem1r+izgemMm+iTveWXtua9t+mJjeevs+i5leiKkOe3tuexqempg+mirumjhumPoumRo+mwvuWEkOe5veaqs+aur+iHj+mRjOmrlemsoueon+mkkemIuOm1k+mIvempgum7suaDu+mNpOWElemHteWbheirguiuluiVhuaHuuWsi+mpj+immOemqumQlOWAgOiQh+aCtemWtumvp+ehqOWCluirtuarrOejo+m9lOajluaqiemLrumQuumjrem0n+mKg+WElOW5rOiujuiKu+e1gOi6lemHp+aEtOe2num2iei8n+m9qum2v+iTr+mphOaohei8s+aUm+mKvOm5uuWZoOmfg+mnmOe0v+auq+izp+eZieewnuiunOeireiloOeHvumQmeeztOiphuirpue2iOimv+mPkeW3lOmIv+eZsumKmumvm+mwiOmLjOmKqeW0oOm2h+erh+eAhuarneeJmOevpOm7t+exquaHn+mQk+eHiei6iemQuOirpOWgiumWvOi7m+mLqOmNlOm2mumhjumhk+mxt+iqkumCh+mJuum0r+munumIgemttOe3i+mQqOmvoeWDqOeBg+mzp+mnmee0see0vOizu+m6qemukumwkumHk+izheWwt+aQn+e0uuaIh+edquiqpee4numLr+e0h+mOmOa9geS6meizoee2humvgeiprOe3seimr+ipgei9gumIt+mMrum0o+m1oOm2u+m0sOaRkeipv+aRnOm4m+mwpeeNt+WMreWKjOWqr+aqnOmuremxluiinue3hOmvgOWgneWSvOW5l+anqOifiOmJv+mXnue1jumgoeeBnemhpeiotumXlOigo+m7jOiojOiRkumWjumxn+a7uOm2mOmpiuaouumPteWlkOe5r+mNsOmvh+mwieipvOiWiOWZpua+rue5oueQv+aaieiroumkm+mWvemIpemRiuiokOipsOiWuuWYsOWajOmppeeSo+imrOm9j+ejr+e+iOighui6i+mcvemxremvvemDn+a1uemLj+mOteifr+irq+e4keaIlOaIqeeevOm2vOetp+mwuemfiee1s+mfgeaSn+W2oOm3pumuq+eZpOmgnOmumuW3ueiXjumliee4iei0kOimsuWJhOa2h+mAleW8s+iEm+mdmumsrumzqem3suipjuWxqOaruOmitumJhemLpueqtum9n+mMiOmQq+mbi+itjueOqOeauOWJtOWhj+aEvuaEt+mOp+mNh+m+lemWjOmIp+mKrOmojee3mei7u+mIs+mMgemgt+m9pumPl+Was+mEtuWZsuiGvueNqumrluiqhuiqkemEuuWjmee6iuiyuuWMseiVouaGkuiBteewo+mWq+mMlemvpOigkOW0jeW+oOa3tueAqOizmuednumMuOeZqeexn+W1kOasluaWlemRreilpOmWrOmLg+WYruW2l+mKoOmQkueZhumws+iqhOe4suWEt+mFiOWjouiXtuiSnuiYuuWapumCkOmpque4rearquarn+i9ouekqumLsOm4neeZmOezsui6kumdgumxuumxp+iYnuWlqeeAsueSieauruiks+ilnemwsemtjue5mumHlem3r+iXuuW7qeaqgei9lOi6que2vuasnuiftumvqueAj+morue2uemOpum3muiYoueAp+eTj+ars+acp+ekseWDguiUnuWYjeW2gemPpOeYuuiArOieu+mrj+WjmuaTvOWalemWreeAmOa3pearqOark+i9pOi8hei9huawjOiHmum4lem3uuiJq+mxuOiHoOWtjOaskum4numRvuWch+eKlueOgOa/vOasj+iFoemPjearmuikuOmLneWYuOWYnOWspOamquWLsee4temPnemhmemwu+m6vOaNq+eHnOaHo+mNhue+i+iskOeNvOemsOa+oOmdpum7vee3sue5humWlOe3oeisqOmpgOmlg+atv+mPjOmJrOmQg+iopemIrumvoui8pumvsOiUpuijiumaieiYl+Wbgemhoui6oeiLp+WagOiBueWEguWZpemnkemHueWEuuiss+aFqueUjOi5o+easOi9oee0lee+humIueirnumnoue4ueWsqumHmemPt+mQoOiYhOmoj+e2uuamv+ejp+mgjumgj+mwreWDieiVgeaFs+moq+e5vuanp+mIkOWsmeaqo+aIp+eGl+mMhumPmOmPuee+pei5jOiqmuitmeiVjue5sOejvei5uuaEnOmNpeevi+mLn+aSs+mvlueFouibuuW3sOizleifo+mwjeipmOW2h+mXg+imt+m0neiprue2o+i8h+mKk+mXi+mXleaEqOiVmOWsiOapiOmjqui7lOW2uOigkee4n+mKo+mhsOichumir+avv+eznee5heWXh+mKq+epoemOqemviumHg+ioleWnjemouOmHpOmxlOWdsOaupOintOWOmeeBhOeVrOipteirl+eAi+ismuWhkuiSlOW8kui7vuiysOmIsOmwo+e2rOaUhOe0k+mWgumRoOW7nemnn+e3pumNtum3peiXqumkv+mivOmOquisluepjOiqtuiTgOeMu+WXqeiEp+mXpemJiOmwqOmIpumukOabh+mJremMn+mgh+WEu+mks+mQi+mPnOmfnOmLsee3uem1nOmXkOeztum9oOmwt+aFn+mIhOmHt+aRtumjqeexnOm8ieWqp+iGg+e0iOe2sOi8nuirieW5g+mXiOa6iOa9v+eRi+mfmeeFkumuqumWv+iQtem9t+mElOW7oeaGruWrtemolum1oem2qemkvOmsqeeSveimoeehpOiOp+iWn+iYmuWztOeNq+Wru+m3tOeZh+iglOeniOi6muiWjOmkiemppOe3l+mll+WYteeAn+mpjee2g+ain+ewq+iku+aTt+e0sue6iOmZmOa7jumliOm1guipoemgiuirvOmJiemPh+islOa+qemxiOWhpOa9r+mxmOWfoeWpreakj+awrOWOtOi0l+WEvOWFl+iunuaHqOmWhumHhemtmOmlnOm8tOeFrOi7uum3gumwqemdqOisgemEtOabhOeHgeipkuWbiOW2p+mjtOaHjOmpm+e4iui7vOiyvemHlOmOsOmQv+eYnuiJpOmKpueZruWhi+m2r+e4iOmOo+aUluWatueAheeAoOeTlOm4mueZremgpue9jOmPnuiVlemKqumtt+WCtOS/geirm+irreiVt+W0s+mjq+mWvuWrl+e0huimpuatn+mIuum1kum3uOm9rOarnumztum7v+mJnumEhuiVk+aDsuaFjee0nOmfnuaunuaws+eTmui2sumPqOmnlOizvuWYluW5mOewgOitlue5kuitq+iplOmHl+isq+i8kum3k+a5nue4nealqOi7q+izkeemjum0huirjeW0oumJpumMmueuj+morearm+ailOi7uei8iui0hOm3meiehOe4tui6k+i6keintumNvue0gue4kOS9h+arp+mKluWbgOmljOmhs+mohee4i+irkemQsuirrue3h+i8nOiysuecpemMmem9nOmvlOWCr+irj+motumvq+mPg+e6mOi6pumxkuiogeitvumDpOeMm+awuemYquWjn+WgluWeteWiiuaqvuiVkuiRpOiTp+iSk+iPh+angeaRo+WSpOWUmuWTouWZneWZheaSheWKiOislOilhuW2tOiEiuS7v+WDpeeNgem6hemkmOmkt+mliumloualnuaAteaHjeeIv+a8teeBqea3t+a/q+eApua3oeWvp+ezuOe1nee3lOeRieaimOajrOahiOapsOarq+i7sui7pOizq+iGgeiFlumjiOeziueFhua6nOa5o+a4uueiuOa7vueemOmIiOmJlemLo+mKsemLpemLtumQpumQp+mNqemNgOmNg+mMh+mOhOmOh+mOv+mQnemRpemRuemRlOeprem2k+m2pem4jOeZp+WxmeeYguiHkuilh+e5iOiArumhrOifjum6r+mugemug+mujumvl+mvnemvtOmxnemvv+mwoOmwtemxhemevemfnem9hyc7XG59XG5mdW5jdGlvbiBxcVBZU3RyKClcbnsgXG5yZXR1cm4gJ+Wov+WpgOWfg+aMqOmkgOWRg+WTgOeakeeZjOiUvOWpkemKsOeijeWsoemamOmejeawqOmun+WUtea0neaal+WyuOiDuuahiOiCruaYu+ebjuWHueeNk+eGrOe/seS7uOisuOWlp+illuWlp+WmkeaNjOacs+acs+WmkeeshuS7iOeWpOWmkeiPneafremdtuWmkeiAmeWdneimh+e9ouWmkeeam+afj+WSn+aTuuS9sOaVl+a5g+eol+eZjeeZjeaQrOaJs+eYoumgkumXhuidguaxvue1huafiOeTo+afiOWIhee7iue2geW5h+aihuW+rOWrjuWeueicr+WrjuiajOmVkeW+rOiwpOiLnuiPoueso+ikkuWJneiWhOmbuea5uuWgoeaAieWvtuegsuiVlOaHquixuemyjeWal+afuOeikeiVnOiQhuiLnei8qeaPuei1kemSoeS/u+eLiOWCmeaDq+eEmeiiq+a4gOiLr+WksuiLr+mVmue7t+eUreazteWYo+mArOiFt+WstuS7s+WVmuavo+W9vOeip+iTluW5o+a7reaWg+avluW4geW6h+eXuemWieeNmeW8iuaArea+vOWjgeiHgumQtOmZm+mereesvuaPmeiytueipealqeiuiuWNnui+p+i+rui+rueMteaRvea7rumPoumMtumzluaGi+iOgueZn+W9rOaWjOa/kueSuOa/seaRiOWopuagpOeqieecqueniemlvOeCs+eWkuS4pueupeiPoOitkuWmremSteiPoOWNmuWLg+aQj+mTgueulOS8r+W4m+iItuiEluiGiua4pOaziuiopOWzrOWNnOiqp+WNn+WfoOiKo+mIveiNueewv+iUgOaAluaUg+eMnOijgeiyoeiyoeiyoeajjOajjOmHh+WfsOWph+iUoeeImOWCquibrOaumOaFmeWPg+eBv+iKsuiIseS7uueNiuiUteaHhumQsOanveiTuOaEuuWOoOaGoeWBtOWGiuaBu+WxpOersuaPt+e0geiMrOWXj+algualguaQvemVsuWylOanjuivp+aLhuaeiOixuuaQgOWCquidiemVteiwl+eAjemTsua1kOmXoemhq+iqr+eMlueVvOeUnueRuuiQh+WBv+iCoOW7oOaVnueVheaZv+WAoei2q+iOj+mIlOisv+isv+isv+a8heiorOeCkui7iuaJr+W+ueaOo+ayj+eerumDtOeDpeWuuOWwmOabn+W/seWGl+mZs+i2geihrOaSkOeoseWzuOapmeiNv+ePteWhluePteaHsuWDnOirtOaJv+a1p+mqi+enpOmYo+eXtOatreWMmeiClOWRjuiClOiClOaBpeatr+S+iOWRjuWTp+i2kOaWpeeCveiMuuayluifsua8tOWvteiPl+e1kuW4seW4seWppOWDveiWteS7h+eal+eeheW/uOa6tOWIneeCquW7muW7mui6h+mLpOmbm+iSouevqOakmOe7jOWCqOefl+aQkOinpuiZlemBhOW3m+eRj+akveS8neiIuemBhOizl+eWruWbseW5ouW6iumXluWJteaspeeCiuiFhOiFhOeuoOiIguakv+mMnuiEo+mMnuiSk+igouaIpeeEr+eWteWekOa/qOmbjOi+rea/qOeTt+ipnuazmuWJjOiznOS9veiBquiMkOWbseiMkOiLgeiLgeWHkeeyl+m9sOewh+Wolui5v+evoeeqnOWHl+aFm+aFm+iEhueYgea/oua/oua/ouexv+a0iuexv+eji+aSrumriuaOquaMq+aOqua6muWer+iNheeYqeWSkeaxj+ankeatueWCo+eAu+W4tuauhuesqei0t+iii+W+heabg+aAoOiAveazueWGhOWVtOmDuOaOuOeLmueLmuawruazueaDruaDlOivnuW8ueeWjeeVtua+oum7qOiVqea+ouWPqOaQl+eosueujOWztuelt+WvvOiPv+eosuaCvOaqpOebnOW+s+WYmuWTi+ewpueHiOaGleetieewpuWHs+mDsOirn+W9veWYgOW7uOaVteW7uOeLhOa2pOe/n+WroeaKteeWp+WTi+a4p+iLkOa4p+W8mumAkue8lOmioOaOgua7h+eimOm7nuaVn+mdm+Weq+mbu+S9g+eUuOaJguaDpuWloOa3gOauv+a3jeaxiOm1sOicqeWIgemLvemTnumKseicqeeTnuWXsua4q+a4q+i/reWqn+eWieeOjumlpOaxgOeUuuW1v+m8jumUreiQo+W/iuS4n+W0rOesl+iTs+aFrOaGheW0rOS+l+aBq+WyveeLquWFoOmspuS5p+i3v+iNs+a1ouWTo+WYn+edo+avkOa4jueNqOa4jumZvOedueW4vuiNsOmVgOiCmuWWpeWWpeWmkumNtOefreiRruiRruaWt+iRrueik+WFjOmaiuaAvOWiqeayjOWjv+aVpumgk+WbpOayjOebvumBgeaOh+WThuWThuWlquWem+i6seactui3uuiIteWJgeWqoOaGnOedi+edi+m5heeakumineiuueeakuaCquiLiuaJvOmBj+mEgueakuaFgea0j+ODq+a0seWwkuiBtua0seKRoei0sOa9keiXheetj+a1jOeWuumYgOeQuuePkOiXqeaxjueVqOmjnOaoiuefvumSkueAv+axjueFqeWPjei/lOestei0qeawvueyhOeWuuaxuOa3k+axuOiCquaIv+axuOWmqOaxuOaxuOaxuOWAo+WplOaCseWVoemjm+iQieWOnuivveWQoOiFk+W7ouayuOabiuajvOmFmueOouawm+axvuWmouWis+eEmuaxvuW4ieWlruWmouW/v+a/hueyquS7ueW0tueMpuicguWzr+Wzr+miqeeYi+eDvea8qOa6pOa8qOiuveWUqumzr+S7j+WoneeOnuaVt+iGmuWtteiNtOaLgui+kOirqOawn+iLu+iMr+S/mOajtOaNiua2qua5ouiiseW8l+eUq+aKmui+heakqOmHnOmHoeiEr+iFkeakqOiFkOi1tOirqOimhuizpuW+qeWCheiLu+mYnOeItuiFueiQr+WGqOiuo+iDleWmh+e8muWSkOWZtuWXhOWnn+WmgOa8kemIo+iRoua8kei/gOiLt+adhuafkeiKieiCnei/gOaGvuenhuWZiei1o+e9k+eimemLvOefvOmHree9gee9k+a4r+mHreemnueai+a7iOiGj+mku+a6lOmOrOmOrOmOrOWToOa7kuaIqOaTseaIiOm4veiDs+eWmeWJqOaEheWZtuWSr+ibpOmYgemalOmTrOWAi+iMlue7meiJruiMm+eViua1reiPrue+ueWfguiAv+ail+esgeezvOezvOWhqOm+muagseWMkeWOt+WWtuW8luW3qeaxnuePmeiyouePmea6neiKtuiKtuiLn+ixnuWeouWqvuWqvuWkoOi+nOiPh+WSleeujeivgumStOeum+iPh+m8lOWSleibiuWXl+WUgumqsOivgumhp+WHhembh+WJruWRseWJruWvoeWVqeWVqeS5luaetOaAquiPhemWouiPheiShOingOa2q+iPhea9hemBpua9hemBpua0uOW6g+i/i+eRsOimj+WcreehheatuOS6gOmWqOWMpuWqv+ipreeZuOiTleWMseibq+iytOWIvei+iuiUiei8peeFsea8t+Wci+a3ieijuemBjumTqumquOmZlOWXqOawpuS6peWXkOmqh+mFo+aGqOmCr+mfk+a1m+WHvuWvkuWHvuirtOeZt+e/sOaSvOaNjeeMguaGvuaCjeeMguaxmea8ouWkr+W/vOiIquWjleWajua/oOavq+mDneaBj+enj+WRuua7mOWTrOabt+WXrOiPj+WKvuenneWVneWTrOWMvOebieiyiemYguiPj+a2uOi1q+ikkOm5pOWTv+a9tuWrvOeXleS9t+WTj+aCoua2peaCmeapq+iYheaBhui9n+aZjueDmOa4sem0u+iRk+WuluWuluiRkuezh+ezh+ezh+eKvOWOmuezh+W+jOiLuOiLuOWUv+eRmuWjuueFs+eutueutueLkOeFs+eFs+W8p+WUrOWUrOaItuayjeaItuaItuWfluiVkOa+leejhuejhueVteWKg+WbruipseankOS9quaHt+WHhuWjnuatoeWvsOahk+mChOe3qeaPm+a8tuWWmueXquixoueElea2o+WupuaKneW3n+W3n+abguejuuidl+ewp+eRneeRneeRneeRneaEsOe4qOaBjeW3n+a0g+WqiOWqiOW5keaBouiblOWGi+avh+ePu+aFp+WNieaDoOePu+i0v+envea1jeeDqeWMr+ius+ivsua1jeiNpOa2veaumemtgua4vuWpq+ixgeiQv+mSrOeEsemVrOaIk+aDkemdg+iyqOemjeWHu+WcvuaoreWDn+eVuOeoveepjeeuleiCjOmlpei/ueWZreiupem2j+WnrOe7qee8ieWSreaegeajmOi+keexjea9l+W9tuWWvOeWvuaxsuaXo+Wriee6p+WTnOWHouiEiuW3seiTn+aKgOWGgOaCuOS8juelreWJguaCuOWTnOWvhOWvguioiOaxnOaXo+W/jOa8iOe7p+axnOWYieaet+WkvuS9s+WCouWSluiNmumiiui0vuabsemSvuW+puezmOWDueazh+mnleezmOWnp+ebrOWgheWwluesuuewoeeFjuWHsuiCqeiJsOWlt+e8hOiMp+aSv+afrOeiseeht+aLo+aSv+W9heWAueW9heirtOiWpuanm+mJtOi3tea/uuimi+all+eureS7tuaPteiIsOWKjemlr+a4kOa6hea2p+i4uuWjg+iRgeWwh+ans+iMs+W9iuiUo+ahqOWlqOism+WMoOmGrOWkheiVieakkuekgea9kOeDhOiMremDiua1h+WsjOWsjOWavOaQhemTsOefq+S+peiFs+eDhOinkumluuWEjOeDhOWJv+WYi+mFtei9v+ePk+WYgueqluaPreW4uea5neenuOihl+mYtuaIquWKq+WFr+iOluiBmeeekOmvqOWAnumpmuajiOeys+e2k+S4vOaqoOaGrOmguOmdnOeShOaTj+WCueW+keeXiemdlueNjeertuWHiOazguWDkuWVvueptuezvueOlumfreeOlueBuOWLvOawv+WOqeaFpuiIiuiHvOiIheWSjuWDpuWSjumeoOS9neeLmeeWveWKh+mpueWMiuaMtuWSgOaAh+iIieayruiXguWyoOeQmuWnluWAtuWyoOi4nua2uuWAtuWRtOaDp+WyoOa2uua2k+m1kea2k+aDk+ect+aNsua2k+eYmuaUq+axuuW0m+W0m+WavOahlOWCkeWVkeedq+errea0gee1kOino+WnkOaCiOiXieiKpemOheW+o+WksOeWpeivq+WxhuWHp+iNlemHv+WUq+Wml+ePkuWZpOe3iuWpguWDheauo+eQjumds+aZieWZpOiPpueDrOmUk+a1leWLgeiNiuWFouimuuWQt+WQt+iVneaxrueumOWRgei7jeeEhOa1mua1mua1mua1mumDoea1muWWgOWSlumJsuWSr+mWnuaPqeaPqeWJgOaFqOWIi+WgquWLmOWdjuatg+eci+WrneW1u+W1u+aRg+W/vOWbpeW/vOagsua0mOagsumdoOWdt+Wyouafr+mMgea6mOmMgeiQqua2nOWXkeWmuOa4h+WwheWwheaEmemMgeiCu+iCu+aBs+WepuWmlOWmlOa2s+aBkOiKpOWVjOaRs+Wbl+mHpuewhuWWluWTreW0q+alm+mFt+WOmeiksua0v+WeruaMjui3qOiDr+i1veett+S+qei1veWvrOeqvuWMoeetuuiqkeahhue6qea0ree6qeazgeaJneeblOWyv+equuiRteWWuemtgeWCgOa9sOmal+a9sOWgkuW0kOa2g+a2g+iRgOaLoemcqemXiuafhuiPiOWWh+iHmOiHmOi+o+iPiOiOseWUu+aUi+iXjea8pOWthOaLpuiXjemYkeiYreeAvuiwsOeBoOeBoOaUi+eBoOeBoeWaguWTtOiTiOWTtOiTouiTouiToueDuuW0guW0gueqguiNluS9rOeyqee1oee1oeW0guWYnuazuuaqkeaqkeaqkeiXnuiUguWEoeWekuaqkeWPu+mhnuaxqOajsealnuWUpeWOmOaCoeeKgem7juevseeLuOiToOa8k+eQhuadjumHjOmypOekvOiOieiNlOWQj+agl+Wpr+eWoOWKseegvuWRluaCoeWCiOWUjuS/kOeXouerneeykuaypematuWKpueSg+WTqeWUoeiBheWXuea2n+mVsOW7ieaGkOa2n+W4mOa9i+iHieWXueaIgOeFieeFieaCoua2vOaokeeyseaCouWAhuWUoeezp+a2vOeFt+a2vOWrveeqt+eNoOeZgueNoOWvpei+vea9puWtkuaSgumVo+a8u+aWmeeDrueFreeDruaMmOeNteWVieWViea9vumcluiHqOmEsOa9vuWVieWHm+izg+aCi+afg+eOquWkjOiVtum9oeeOquS8tueOquWkjOmdiOWkjOeOqumgmOWPp+azoOWqueeQieWqueehq+mmj+eVseWaoOWqueiTheaggemZuOeAp+iBvuiMj+iMj+eqv+a5sOazt+azt+iMj+a6h+a6h+W1nea6h+WxmumZi+W7rOebp+miheW7rOeIkOaOs+WNpOiZj+WZnOm6k+eijOiVl+iVl+i1guiUjea9nuemhOa3pemZuOaIrummv+eEkueEkuS9gOiGguWxpeWxoue8leaFruawr+S+k+WNm+aFrua3peaskuWtjOWtv+a7puWNteS6gueopOeVp+WbteWbteWbteS7keWbtee6tuWbteWbieieuuWbiee+heWbieWEuOmqoeijuOiQveipu+ipu+e1oeWqveWrsueKuOeKuOeKuOmqiee9teWrsuWspOWfi+iNrOm6peizo+mCgemcoeaFsueNjOigu+aFsuWrmuWrmuWrmuWrmuiwqeesgOaxkuWQguawk+adp+a8reiyk+e9numUmuavnee9numThuiMhuiMguiQuuiQuumCiOiyv+W6heWdhuaemueDuOmFtuiLuua5iOiOiOiRv+WqkumVgeeDuOe+meaYp+WvkOWmuuWqmumWhOaCtuWAkeiQoOaHnuaqrOaTnemUsOaOueWkouaOueS+jumGmumdoeeznOa0o+a0o+W8pea0o+enmOinheazjOa7tea7teW5guWpguecoOWpguWGleWHguWLieWoqee8heWqlOWqjOWqjOWqjOmCiOS7r+e3suW6v+S7r+evvuaQo+WnhOaKv+eav+WLhOaCr+mWqeecgOien+WYhOS9sua0uuaOtee5huWXvOaRueWapOWXvOWXvOWapOWapOWapOayrOayrOWXvOWanOm7mOayrOWXvOWvnuW4nua5iOWTnua5iOaLh+eJoeeVneWnhuavi+WLn+aaruWLn+WLn+aFleacqeacqeedpueJp+ephuWXseWTquWmoOWmoOWTquWTquWmoOawlumHouiJv+aBp+afsOmBluiOrumbo+eBouaSk+aCqeaCqemWmea3lui/oea1veemuOWrsOiDveWmrumck+a3o+eLlOiDkuaKs+ayteWrn+iGqeWxsOa6uuiUq+enpeWnqeeivuaSteaNu+a3sOWomOmFv+iMkeadmOa2heWXq+ezteWVruWXq+mVjea2heaCqOafoOeLnuWHneiLp+aLp+aznueKh+aykeWmnueLg+WTneWTneWTneaMteS8ruaAk+S8ruWboeeFlueWn+eWn+aMqueppOeppOWWj+WRg+eTr+eTr+eTr+iApuWYlOiApuaypOWVquaxg+eTn+WVquWVqueQtuWVquajkeewsOajkea5g+WTjOilu+eAi+ebpOejkOaYkOa6v+WPm+WIpOS5k+WOkOiHseiAquecq+aLi+WeiemTh+WeieWeieWeieWeieaAjOiDmuaOiuijtOWphOWphOiTnOWnteaym+a/hua5k+azmeaKqOeDuea+juaGieiOkeWgi+ehvOevt+iGqOiQoOm1rOWUqua5tOWdr+egkuWZvOe6sOaAtuWZvOeQteavl+WVpOijqOeWsuaAtuiLieeXnuWDu+W6h+itrOiQueWqpeeIv+momeW9r+aFk+eTouWYjOa9jua9juaLmumgu+iyp+mXhuWoieS5kuWyvOazmeazmeWyvOaGkeeUgeivhOWxm+Wypeenoearh+WYmeWypemthOW7ueeyleWJluWcpOiIl+WcpOiOhuWMjeeugeiSsumAi+WcpOWcg+aZrua1pumQoOabnemRpOWJmOWJmOagluWYgeaCveKRpuWHhOa8huafkuayj+WouOirhua4j+W/rueVpuW0juiEkOaWieaXl+eliOelgemoj+i1t+ixiOmYo+S9seaZteWlkeegjOWZkOawo+i/hOajhOaxvea3h+iuq+aLpOa0veaSgeaJpumSjumJm+iKiei/geewveS7n+WXm+WimOm7lOmMoumSs+a5lOa/s+mBo+a3uuiwtOWgkeW1jOiKoeWXm+eGl+a/uOiFlOe+jOWrseWrseW8t+eGl+aph+mUueavg+S9vuWWrOi2reWWrOWWrOW3p+memOavs+i2rOWzreS9vuerheiLhuiLhuiLtOaEnOiLhumSpuWfkOWEreiTgeWZluaHhOiKueaqjuWZmeWvkeaygeWciui8leawouWCvuWNv+WHiuaTjuWVqOawsOWHiumgg+WfpeW6hueQvOeqruWBouWdtemCsea1l+a1l+WbmuWqqOazhei2i+Wyluibhua1gOi7gOWxiOmnhua4oOaOq+WpnOm+i+i2o+WOvuWcnOmip+asiumGm+iRsua0pOeXiuaLs+WQoOWIuOWLp+iSm+eClOeYuOWNu+m5iuamt+eiuumbgOWzrue+o+WYq+WYq+WnjOWqo+eTpOWjpOaUmOWtg+iuk+maouaTvumaouaDueaFueWjrOiKouS6vua2iumfp+WnmeiqjeWIhOWmiue6q+aJlOS7jeOEluaIjuiMuOWrhuiNo+eAnOWrhuWrhuWrhue1qOWGl+a4mOa4mOemuOetjuiglea/oeWtuua0s+Wqt+S5s+iCl+WPuuikpei7n+aciuaDoueRnumKs+a9pOa9pOWpvOW8nOa9teeBkeiVr+iFrumzg+WZu+WZu+W9oeWPgeWCmOa9temOn+mOn+WWquaQlOmokuaOg+a6sueRn+iEg+a+gOa9ueWDp+iOj+WUpuaRi+mWt+S5t+e6seWCu+WAvee5uuevqeabrOWnjeiLq+adieWxvuWJvOeFvemHpOmWgemZneaThei1oeiGs+WDkOioleWCk+e8ruWikuWCt+WVh+iznuaZjOS7qeWwmeijs+WTqOWTqOWTqOeHkuiKjeaxi+mftuS7r+WTqOWNsuiikeWloui1iuiZteiImeiIjui1puaRguWwhOaFkea4iea2u+iUjuegt+WmveWRu+iot+ijkeWglOWooOiot+mJrueAi+iwieWsuOWNmeiFjuaFjuakruauuOazqeeUpeeLjOWcsee5qea4u+WireS5l+WkneiBlua6ruWmt+a1iea5pOa/leipqei/ieiZseaLvuWdp+a5gea6oeS7gOWWsOiagOWvpuitmOWPsuefouS9v+WxjemmtuWni+mJveaytuS7lei/o+aevuWAs+aLreiqk+i/o+WLoua5nOWXnOWZrOmAguS7leS+jemHiumjvuawj+W3v+aBg+WOlOimlumJveiNjeaOsea4nuWeqOWjvea2reWUrui+pOeXqeeNo+iUrOaeouais+WnneadvOeAreWfseW/rOiUi+eWj+abuOi1juWtsOWtsOiWr+a/kOabmee9suicgOm7jeeZmeWxrOacruayreaoueWoleaIjeerquWiheW6tuiWrua8seaBleWUsOiAjeaRlOe8nueUqeW4peaLtOaLtOeBgOWPkuaRpOiqsOa4geiFhOaMqeWQruapk+mghuapk+iqrOeiqeaclOeIjeWHmOWHmOWHmOWBsuS/rOWRnuWZneWxjeiChuWzmeWXo+KRo+S8uuWnkumlsuW3s+iPmOiBs+aAgumgjOmOuea1qOiuvOiqpua6suiJmOaTnuWXveiYh+mFpeS/l+Wriui2mueyn+WDs+aErOa6r+i5nOiotOatl+mFuOelmOWMtOiZvemZj+maqOa1vemrk+iqtuW1l+epl+WsmOmap+eln+Wtq+aQjeesi+iTkemAoemAoee4rumOlumOjemOu+iRsOemouW9teWSnOWSnOWXkueNreaMnui5i+ayk+iDjuiLlOWtoeePhua6memFnuW/suW/suWRlOWdjeaRiuiyqueYq+a7qeWiteaqgOeXsOaGm+iwreirh+mSveavr+iikua5oOaOouWYhua5oOmlp+a6j+aQqua8n+apluiGm+eRrea6j+WAmOi6uua3jOi2n+eDq+WMi+a/pOeRq+e7puWMi+a0rua0ruWMi+WMi+iojuWll+eJuemnpumnpuW6neiqiuePtuWJlOi4oumUkeirn+i2p+a4p+a4p+i7huarleWaj+aDleePtuePtuWxn+WFsuWplueRseeUtueUm+aBrOWpluedk+eLo+ainei/ouecuuack+iQnOmJhOiQnOW7sOWOm+eDg+axgOS+uea4n+a4n+S+ueS+ueiJh+WXteensemFruees+WTg+aBq+a1teWDruehp+ehp+iMvOe1seeXjOWBuOaKlemgremAj+WHuOemv+a5peWcluW+meiSpOWHg+W7nOaxouaxouWFjua5jeWcmOiTt+mik+i5huiclei5hui5huaYi+Wxr+iHgOafguS7m+iEq+iiieaLlemnnuiiieakremLluaysOWUvuaMluWTh+ibmeWTh+WTh+WSk+ilquatqui/r+ixjOWhhuWhhueQk+mhveaxjeeDt+WUjea2tOaimuiEleealuaDi+Wum+WVmOiQreiFleW/uei/i+WMhOW/ueibp+aagOW/ueacouiOo+WmhOWqmeiYtuW2tuS9uemfpumBleahheWcjeaDn+aDn+a9mea9jeaDn+iLh+W0o+mAtuWBieayqeWxl+e6rOayrOWim+iPi+W1lOWqpuW1lOiYtuiOhea4reWqpuWim+Wim+ihnueYn+a6q+ieoeWmj+iBnumIq+ayleepj+e0iuWVj+a7g+aaoeeTruaMneeqqeeFseeqieiOquaWoeiHpealg+ayg+iOgeWXmumSqOeDj+axmuiOgeWBk+WYuOiVquaip+WchOWRieavi+WorOS8jeWchOWQmOaphuKRpOS+ruWdnuaIiumcmuaZpOeyheWMouWLmeWchOiqpOWOneWHnuWUveimgOehkuefveaZsOWYu+aJseWUtueKoOa1oOaBr+WUj+aCieiGneaxkOWOneeGhOeDr+a4k+axkOeKgOaqhOiireW4ree/kuWqs+emp+mTo+WGvOS/gumameaIsee0sOejjeiZvuWMo+iRrei9hOWPmua1uea1uea1ueiKkOWOpuWXhOWct+mUqOmUqOWnuuS9oemuruaxmOWSuOizoumKnOiIt+WotOa2juWmtua6k+aYvumZuuWTr+eNu+e4o+iFuumZpee+qOWuqumZpemZkOe3mualv+WOoumVtuiQq+iRmeilhOa5mOiKl+e/lOelpeips+aDs+WnoOWVjemgmeW3t+a9kua9kuWnoOa9kuewmOehnemchOiQt+a2jeWao+mUgOa2iOWutea3huWTk+Wwkua2jeagoeiCluWVuOeskeaViOallOS6m+ath+idjuWaoeaLueaMvuaQuuWzq+aWnOiEheWWiOWGqeaCiOWVo+ifuea+pee7geeAieWhruWxkeiVsuiKr+mUjOS/veWOl+WZuuW/u+aduuS/oeihheaakuedsuedsueRhuiIiOmJtuS+gOW9oumDieWes+eRhuWcieiOleaCu+eLjOWFh+WFh+a0tuWMiOaxuembhOeGi+WSu+S/oumliOacvea6tOeQh+iOoOiilue7o+atlOaIjOa/oeatlOatlOa5j+S/huaxu+iThOmFl+a6huaXruWev+eVnOaBpOe1ruiDpee3kue6jOiTkuWql+Wql+aCrOWrmeeOhumBuOeZo+Wmtue1oumdtOiWm+aVqeazrOiGpOa0q+WLm+eGj+aPl+a0teWSsOa1lOe0g+W7teWSsOWNguiok+WNgumBnOWNguWjk+WRt+m0iem0qOWQluWQluWOiuWOiuianOW0luihmea2r+iVpeWVnuS6nuWGtOa8ueWSvemYieeFmeaul+m5veWatOWmjeickuWVseWoq+iogemhlOmWu+eDvuayv+WlhOaul+ecvOihjea5rua7n+WgsOWsv+WOreegmumbgeWUgeW9pueGluWMveiwmumok+aug+Wnjum0puenp+aYnOWpuOS9r+eWoeWSqeaoo+mZveawp+WNrOeZoumkiuaoo+e+leaSveW0vuWyhuaEruaEruWwp+a7m+eqsOaErueDkeWQhuiIgOiRr+WpueiAgOWAu+WZjuWAu+eIuuWYouWGtuervumggeaOlumEtOaXquabs+iFi+a2sua2suKRoOWjueaCmOaPlumTseeVqeWQmuaJhumikOWkt+mBl+ewg+WEgOiDsOWvsuayguWunOS+h+W9neaOjuiageaOjuW3s+S5geefo+WnkuWFv+aKkeaYnOmCkeWxueWEhOW9ueiHhumAuOiChOeWq+a0guijlOWskeiXmeW/hue+qeiwpea6ouivo+iuruiwiuitr+eVsOe/vOe/jOe7juetg+iNq+a0h+aut+Wgt+mague1quiNtuaqreWprOWkpOmjruWQmuWQsumZu+iMmua4tueSjueSjum5sOaHiee8qOeRqeiQpOeHn+iNp+idh+i/iui1ouebgeW9semileWTveecj+WWsuegveegveiHg+eXiOa7vea+rei4iuibueaAuuaAuuaCgOaAuuaBv+a5p+m8oeixs+ayi+a7uuayi+WwpOeUtOmCrumTgOayi+aAnumBiumFiea0p+S8luelkOelkOmHieivseWPkuWtp+aJnOiPuOe6oeebguamhuiZnuaEmuiIhuaCh+aPhOaPhOa4lOaPhOaPhOa4lOmaheS6iOWor+mbqOeOmeWxv+emueiNouWoque+veegoeWfn+iKi+WWkOWQgeWWgeWWu+WzquW+oeWMrOaFvueNhOWUt+isjea1tOWvk+ijlemgkOixq+mprem0m+ajqeWvg+ayheWeo+WqtOWOoeeRl+i+leWcjuWckuWckueMv+e+see3o+mAuuWkl+iSneiRvumYruabsOeuueaovui3numSpeaNs+eyteS7tOWTvumWseenkOWbqemDp+aeg+aukueLgemBi+iXtOmFneaaiOmfu+Wkg+WMneWSguWNhumFqOmFqOeBveWusOmFqOS+ouiMrOa0jueTkuaaq+eTkuizjeizjemrkui5p+i5p+WHv+iXu+aghueageeSquiapOeSqueSquaFpeWUo+eBtueSquWrp+iQmuiNnea+pOiziuaAjueGt+eSlOW2kueGt+e0peWWs+eitOacrei9p+mToemWmOWWs+agheaQvuWSi+WSi+aAjeaAjeaTv+aWi+WuheaQvuWCteWvqOeeu+avoeipueenpei3leebj+aWrOi+l+W0rei5jeiYuOajp+mireaIsOi3leWBoee2u+aon+W2guW9sOa8s+W8teekg+a2qOeygOaJmeizrOi0puaJmeiDgOeYtOmanOWmseaYreaJvuayvOi2meeHs+e9qeeLo+iCh+S9i+WXu+iPpeaCiuibsOi+memNuumUl+iUl+mBqea3heaytOaWn+Wrg+eUhOegp+iHu+a1iOmHnea1iOW/seeWueaytOmch+ahremOruS/peevnOirjeirjeWng+eLsOi4reWng+aVtOaLr+WbuOeCoeW4p+eXh+mEreWng+iKt+axpeS8juaxpeWAgeWAgeaxpeiEguaxpeOBqOaes+i9teefl+a3lOauluenh+aDquS+hOatruaguuWctei2vuWRruaXqOihueaiveaMmuaOt+iHuOiHuOe9ruW4nOWzmea3m+a9quenqembieizqueCmeeXlOa7nuiPreeqkueLhuebheetl+Wmleiht+iUoOeoruWmleWBheS7suihhua0gOa3jeiptuiptuivjOeypei9tOiCmOW4muWSkueauuWumeaYvOmqpOWSruagquWSruWSruiVj+a4muivm+ixqeiJuOeDm+eFkeaLhOeeqeeeqeeCt+iRl+eCt+iOh+ibgOi0rumTuOiMv+eCt+eCt+aft+mpu+aKk+eIqui3qeaKn+ejmuWVreaSsOizuuevhuahqeWcp+ijneWmneeNnuWMqOWMqOakjumUpeaQpei1mOWinOe2tOiwhueXvea1nueCquWppeajueeQouiMgemFjOWVhOedgOeBvOa1iuWFueaBo+eyouaBo+eotea3hOWtnOaptOS7lOexvea7k+OBtea0jua4jeeJuOmsg+eQrueQruW0iOeQrue4guaenumCuei2iealsealseiSqeWoluWNkuiUn+iik+iSqeiSqeiSqemRvee6guinnOmFlOacguW2tea+iuWZguiRg+WSl+S9kOafnuiOi+iOi+WUkeiTmemMkuWZr+WsoeeSpuablumdhOirs+mKqOm1quWqvOmpgemwsumIgOWUhOmIkem0h+m9mem1r+izgemMm+iTveWXtua9t+mJjeevs+i5leiKkOe3tuexqempg+mirumjhumPoumRo+mwvuWEkOe5veaqs+aur+iHj+mRjOmrlemsoueon+mkkemIuOm1k+mIvempgum7suaDu+mNpOWElemHteWbheirguiuluiVhuaHuuWsi+mpj+immOemqumQlOWAgOiQh+aCtemWtumvp+ehqOWCluirtuarrOejo+m9lOajluaqiemLrumQuumjrem0n+mKg+WElOW5rOiujuiKu+e1gOi6lemHp+aEtOe2num2iei8n+m9qum2v+iTr+mphOaohei8s+aUm+mKvOm5uuWZoOmfg+mnmOe0v+auq+izp+eZieewnuiunOeireiloOeHvumQmeeztOiphuirpue2iOimv+mPkeW3lOmIv+eZsumKmumvm+mwiOmLjOmKqeW0oOm2h+erh+eAhuarneeJmOevpOm7t+exquaHn+mQk+eHiei6iemQuOirpOWgiumWvOi7m+mLqOmNlOm2mumhjumhk+mxt+iqkumCh+mJuum0r+munumIgemttOe3i+mQqOmvoeWDqOeBg+mzp+mnmee0see0vOizu+m6qemukumwkumHk+izheWwt+aQn+e0uuaIh+edquiqpee4numLr+e0h+mOmOa9geS6meizoee2humvgeiprOe3seimr+ipgei9gumIt+mMrum0o+m1oOm2u+m0sOaRkeipv+aRnOm4m+mwpeeNt+WMreWKjOWqr+aqnOmuremxluiinue3hOmvgOWgneWSvOW5l+anqOifiOmJv+mXnue1jumgoeeBnemhpeiotumXlOigo+m7jOiojOiRkumWjumxn+a7uOm2mOmpiuaouumPteWlkOe5r+mNsOmvh+mwieipvOiWiOWZpua+rue5oueQv+aaieiroumkm+mWvemIpemRiuiokOipsOiWuuWYsOWajOmppeeSo+imrOm9j+ejr+e+iOighui6i+mcvemxremvvemDn+a1uemLj+mOteifr+irq+e4keaIlOaIqeeevOm2vOetp+mwuemfiee1s+mfgeaSn+W2oOm3pumuq+eZpOmgnOmumuW3ueiXjumliee4iei0kOimsuWJhOa2h+mAleW8s+iEm+mdmumsrumzqem3suipjuWxqOaruOmitumJhemLpueqtum9n+mMiOmQq+mbi+itjueOqOeauOWJtOWhj+aEvuaEt+mOp+mNh+m+lemWjOmIp+mKrOmojee3mei7u+mIs+mMgemgt+m9pumPl+Was+mEtuWZsuiGvueNqumrluiqhuiqkemEuuWjmee6iuiyuuWMseiVouaGkuiBteewo+mWq+mMlemvpOigkOW0jeW+oOa3tueAqOizmuednumMuOeZqeexn+W1kOasluaWlemRreilpOmWrOmLg+WYruW2l+mKoOmQkueZhumws+iqhOe4suWEt+mFiOWjouiXtuiSnuiYuuWapumCkOmpque4rearquarn+i9ouekqumLsOm4neeZmOezsui6kumdgumxuumxp+iYnuWlqeeAsueSieauruiks+ilnemwsemtjue5mumHlem3r+iXuuW7qeaqgei9lOi6que2vuasnuiftumvqueAj+morue2uemOpum3muiYoueAp+eTj+ars+acp+ekseWDguiUnuWYjeW2gemPpOeYuuiArOieu+mrj+WjmuaTvOWalemWreeAmOa3pearqOark+i9pOi8hei9huawjOiHmum4lem3uuiJq+mxuOiHoOWtjOaskum4numRvuWch+eKlueOgOa/vOasj+iFoemPjearmuikuOmLneWYuOWYnOWspOamquWLsee4temPnemhmemwu+m6vOaNq+eHnOaHo+mNhue+i+iskOeNvOemsOa+oOmdpum7vee3sue5humWlOe3oeisqOmpgOmlg+atv+mPjOmJrOmQg+iopemIrumvoui8pumvsOiUpuijiumaieiYl+Wbgemhoui6oeiLp+WagOiBueWEguWZpemnkemHueWEuuiss+aFqueUjOi5o+easOi9oee0lee+humIueirnumnoue4ueWsqumHmemPt+mQoOiYhOmoj+e2uuamv+ejp+mgjumgj+mwreWDieiVgeaFs+moq+e5vuanp+mIkOWsmeaqo+aIp+eGl+mMhumPmOmPuee+pei5jOiqmuitmeiVjue5sOejvei5uuaEnOmNpeevi+mLn+aSs+mvlueFouibuuW3sOizleifo+mwjeipmOW2h+mXg+imt+m0neiprue2o+i8h+mKk+mXi+mXleaEqOiVmOWsiOapiOmjqui7lOW2uOigkee4n+mKo+mhsOichumir+avv+eznee5heWXh+mKq+epoemOqemviumHg+ioleWnjemouOmHpOmxlOWdsOaupOintOWOmeeBhOeVrOipteirl+eAi+ismuWhkuiSlOW8kui7vuiysOmIsOmwo+e2rOaUhOe0k+mWgumRoOW7nemnn+e3pumNtum3peiXqumkv+mivOmOquisluepjOiqtuiTgOeMu+WXqeiEp+mXpemJiOmwqOmIpumukOabh+mJremMn+mgh+WEu+mks+mQi+mPnOmfnOmLsee3uem1nOmXkOeztum9oOmwt+aFn+mIhOmHt+aRtumjqeexnOm8ieWqp+iGg+e0iOe2sOi8nuirieW5g+mXiOa6iOa9v+eRi+mfmeeFkumuqumWv+iQtem9t+mElOW7oeaGruWrtemolum1oem2qemkvOmsqeeSveimoeehpOiOp+iWn+iYmuWztOeNq+Wru+m3tOeZh+iglOeniOi6muiWjOmkiemppOe3l+mll+WYteeAn+mpjee2g+ain+ewq+iku+aTt+e0sue6iOmZmOa7jumliOm1guipoemgiuirvOmJiemPh+islOa+qemxiOWhpOa9r+mxmOWfoeWpreakj+awrOWOtOi0l+WEvOWFl+iunuaHqOmWhumHhemtmOmlnOm8tOeFrOi7uum3gumwqemdqOisgemEtOabhOeHgeipkuWbiOW2p+mjtOaHjOmpm+e4iui7vOiyvemHlOmOsOmQv+eYnuiJpOmKpueZruWhi+m2r+e4iOmOo+aUluWatueAheeAoOeTlOm4mueZremgpue9jOmPnuiVlemKqumtt+WCtOS/geirm+irreiVt+W0s+mjq+mWvuWrl+e0huimpuatn+mIuum1kum3uOm9rOarnumztum7v+mJnumEhuiVk+aDsuaFjee0nOmfnuaunuaws+eTmui2sumPqOmnlOizvuWYluW5mOewgOitlue5kuitq+iplOmHl+isq+i8kum3k+a5nue4nealqOi7q+izkeemjum0huirjeW0oumJpumMmueuj+morearm+ailOi7uei8iui0hOm3meiehOe4tui6k+i6keintumNvue0gue4kOS9h+arp+mKluWbgOmljOmhs+mohee4i+irkemQsuirrue3h+i8nOiysuecpemMmem9nOmvlOWCr+irj+motumvq+mPg+e6mOi6pumxkuiogeitvumDpOeMm+awuemYquWjn+WgluWeteWiiuaqvuiVkuiRpOiTp+iSk+iPh+angeaRo+WSpOWUmuWTouWZneWZheaSheWKiOislOilhuW2tOiEiuS7v+WDpeeNgem6hemkmOmkt+mliumloualnuaAteaHjeeIv+a8teeBqea3t+a/q+eApua3oeWvp+ezuOe1nee3lOeRieaimOajrOahiOapsOarq+i7sui7pOizq+iGgeiFlumjiOeziueFhua6nOa5o+a4uueiuOa7vueemOmIiOmJlemLo+mKsemLpemLtumQpumQp+mNqemNgOmNg+mMh+mOhOmOh+mOv+mQnemRpemRuemRlOeprem2k+m2pem4jOeZp+WxmeeYguiHkuilh+e5iOiArumhrOifjum6r+mugemug+mujumvl+mvnemvtOmxnemvv+mwoOmwtemxhemevemfnem9hyc7XG59XG5leHBvcnQgZnVuY3Rpb24gdHJhZGl0aW9uYWxpemVkKGNjKXtcbiAgICB2YXIgc3RyPScnO1xuICAgIGZvcih2YXIgaT0wO2k8Y2MubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmKHNpbXBQWVN0cigpLmluZGV4T2YoY2MuY2hhckF0KGkpKSE9LTEpXG4gICAgICAgICAgICBzdHIrPWZ0UFlTdHIoKS5jaGFyQXQoc2ltcFBZU3RyKCkuaW5kZXhPZihjYy5jaGFyQXQoaSkpKTtcbiAgICAgICAgZWxzZSBpZihxcVBZU3RyKCkuaW5kZXhPZihjYy5jaGFyQXQoaSkpIT0tMSlcbiAgICAgICAgICAgIHN0cis9ZnRQWVN0cigpLmNoYXJBdChxcVBZU3RyKCkuaW5kZXhPZihjYy5jaGFyQXQoaSkpKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc3RyKz1jYy5jaGFyQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5mdW5jdGlvbiBzaW1wbGl6ZWQoY2Mpe1xuICAgIHZhciBzdHI9Jyc7XG4gICAgZm9yKHZhciBpPTA7aTxjYy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYoZnRQWVN0cigpLmluZGV4T2YoY2MuY2hhckF0KGkpKSE9LTEpXG4gICAgICAgICAgICBzdHIrPXNpbXBQWVN0cigpLmNoYXJBdChmdFBZU3RyKCkuaW5kZXhPZihjYy5jaGFyQXQoaSkpKTtcbiAgICAgICAgZWxzZSBpZihxcVBZU3RyKCkuaW5kZXhPZihjYy5jaGFyQXQoaSkpIT0tMSlcbiAgICAgICAgICAgIHN0cis9c2ltcFBZU3RyKCkuY2hhckF0KHFxUFlTdHIoKS5pbmRleE9mKGNjLmNoYXJBdChpKSkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzdHIrPWNjLmNoYXJBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cbmZ1bmN0aW9uIHFxbGl6ZWQoY2Mpe1xuICAgIHZhciBzdHI9Jyc7XG4gICAgZm9yKHZhciBpPTA7aTxjYy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYoZnRQWVN0cigpLmluZGV4T2YoY2MuY2hhckF0KGkpKSE9LTEpXG4gICAgICAgICAgICBzdHIrPXFxUFlTdHIoKS5jaGFyQXQoZnRQWVN0cigpLmluZGV4T2YoY2MuY2hhckF0KGkpKSk7XG4gICAgICAgIGVsc2UgaWYoc2ltcFBZU3RyKCkuaW5kZXhPZihjYy5jaGFyQXQoaSkpIT0tMSlcbiAgICAgICAgICAgIHN0cis9cXFQWVN0cigpLmNoYXJBdChzaW1wUFlTdHIoKS5pbmRleE9mKGNjLmNoYXJBdChpKSkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzdHIrPWNjLmNoYXJBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///28\n");

/***/ })
],[[0,"app-config"]]]);