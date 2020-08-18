(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!****************************!*\
  !*** D:/read_demo/main.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 28));\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 29));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 31));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_vue.default.prototype.$store = _store.default;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwicHJvdG90eXBlIiwiJHN0b3JlIiwic3RvcmUiLCJBcHAiLCJtcFR5cGUiLCJhcHAiLCIkbW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFtQjtBQUNuQjtBQUNBLHdFOztBQUVBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7O0FBRUFGLGFBQUlHLFNBQUosQ0FBY0MsTUFBZCxHQUF1QkMsY0FBdkI7O0FBRUFDLGFBQUlDLE1BQUosR0FBYSxLQUFiOztBQUVBLElBQU1DLEdBQUcsR0FBRyxJQUFJUixZQUFKO0FBQ0xNLFlBREssRUFBWjs7QUFHQUUsR0FBRyxDQUFDQyxNQUFKIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7aW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5cclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuXHJcblZ1ZS5wcm90b3R5cGUuJHN0b3JlID0gc3RvcmVcclxuXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICAuLi5BcHBcclxufSlcclxuYXBwLiRtb3VudCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

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
            container0: _vm.background === 1,
            container1: _vm.background === 2
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
                color: "" + _vm.colorList[_vm.background - 1],
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
              _c("view", [
                _vm._v(_vm._$s(22, "t0-0", _vm._s(_vm.systemTimeStr)))
              ]),
              _c("view", [
                _vm._v(
                  _vm._$s(23, "t0-0", _vm._s(_vm.prePages.length)) +
                    _vm._$s(23, "t0-1", _vm._s(_vm.prePages.length))
                )
              ]),
              _c(
                "view",
                [
                  _c("battery", {
                    attrs: {
                      level: _vm.batteryLevel,
                      charging: _vm.batteryState === 2,
                      _i: 25
                    }
                  })
                ],
                1
              )
            ]
          )
        ]
      ),
      _vm._l(_vm._$s(26, "f", { forItems: _vm.pages }), function(
        item,
        $10,
        $20,
        $30
      ) {
        return _c(
          "view",
          {
            key: _vm._$s(26, "f", { forIndex: $20, key: item.id }),
            staticClass: _vm._$s("26-" + $30, "sc", "container"),
            class: _vm._$s("26-" + $30, "c", {
              container0: _vm.background === 1,
              container1: _vm.background === 2
            }),
            style: _vm._$s("26-" + $30, "s", {
              zIndex: item.zIndex,
              transform: "translateX(" + item.translateX + "px)",
              transition:
                "all " + (_vm.showAnimation ? _vm.turnPageTime : 0) + "s"
            }),
            attrs: { _i: "26-" + $30 }
          },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s("27-" + $30, "sc", "chapter"),
                attrs: { _i: "27-" + $30 }
              },
              [_vm._v(_vm._$s("27-" + $30, "t0-0", _vm._s(_vm.chapterName)))]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s("28-" + $30, "sc", "content"),
                style: _vm._$s("28-" + $30, "s", {
                  height: _vm.contentHeight + "px",
                  width: _vm.contentWidth + "px",
                  fontSize: _vm.fontSize + "px",
                  color: "" + _vm.colorList[_vm.background - 1],
                  transform:
                    "translateX(-" +
                    item.id * (_vm.contentWidth + _vm.columnGap) +
                    "px)",
                  columns: _vm.contentWidth + "px",
                  columnGap: _vm.columnGap + "px"
                }),
                attrs: { _i: "28-" + $30 }
              },
              [
                _c("view", {
                  staticClass: _vm._$s("29-" + $30, "sc", "book-inner"),
                  style: _vm._$s("29-" + $30, "s", {
                    fontSize: _vm.fontSize + "px",
                    lineHeight: _vm.lineHeight * _vm.fontSize + "px"
                  }),
                  attrs: { _i: "29-" + $30 },
                  domProps: {
                    innerHTML: _vm._s(_vm._$s("29-" + $30, "v-html", _vm.text))
                  }
                })
              ]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s("30-" + $30, "sc", "bottom-bar"),
                attrs: { _i: "30-" + $30 }
              },
              [
                _c("view", [
                  _vm._v(
                    _vm._$s("31-" + $30, "t0-0", _vm._s(_vm.systemTimeStr))
                  )
                ]),
                _c("view", [
                  _vm._v(
                    _vm._$s("32-" + $30, "t0-0", _vm._s(item.id + 1)) +
                      _vm._$s("32-" + $30, "t0-1", _vm._s(_vm.pages.length))
                  )
                ]),
                _c(
                  "view",
                  [
                    _c("battery", {
                      attrs: {
                        level: _vm.batteryLevel,
                        charging: _vm.batteryState === 2,
                        _i: "34-" + $30
                      }
                    })
                  ],
                  1
                )
              ]
            )
          ]
        )
      }),
      _vm._$s(35, "i", _vm.pages.length)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(35, "sc", "container"),
              class: _vm._$s(35, "c", {
                container0: _vm.background === 1,
                container1: _vm.background === 2
              }),
              style: _vm._$s(35, "s", {
                zIndex: 100,
                transform: "translateX(0px)"
              }),
              attrs: { _i: 35 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(36, "sc", "chapter"),
                  attrs: { _i: 36 }
                },
                [_vm._v(_vm._$s(36, "t0-0", _vm._s(_vm.nextChapterName)))]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(37, "sc", "content"),
                  style: _vm._$s(37, "s", {
                    height: _vm.contentHeight + "px",
                    width: _vm.contentWidth + "px",
                    fontSize: _vm.fontSize + "px",
                    color: "" + _vm.colorList[_vm.background - 1],
                    transform: "translateX(0px)",
                    columns: _vm.contentWidth + "px",
                    columnGap: _vm.columnGap + "px"
                  }),
                  attrs: { _i: 37 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(38, "sc", "book-inner"),
                    style: _vm._$s(38, "s", {
                      fontSize: _vm.fontSize + "px",
                      lineHeight: _vm.lineHeight * _vm.fontSize + "px"
                    }),
                    attrs: { _i: 38 },
                    domProps: {
                      innerHTML: _vm._s(_vm._$s(38, "v-html", _vm.nextText))
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(39, "sc", "bottom-bar"),
                  attrs: { _i: 39 }
                },
                [
                  _c("view", [
                    _vm._v(_vm._$s(40, "t0-0", _vm._s(_vm.systemTimeStr)))
                  ]),
                  _c("view", [
                    _vm._v(_vm._$s(41, "t0-0", _vm._s(_vm.pages.length)))
                  ]),
                  _c(
                    "view",
                    [
                      _c("battery", {
                        attrs: {
                          level: _vm.batteryLevel,
                          charging: _vm.batteryState === 2,
                          _i: 43
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._$s(44, "i", _vm.menuShow)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(44, "sc", "menu"),
              style: _vm._$s(44, "s", {
                height: _vm.windowHeight + "px",
                width: _vm.windowWidth + "px",
                background: _vm.directoryShow ? "rgba(0, 0, 0, .5)" : ""
              }),
              attrs: { _i: 44 },
              on: { touchend: _vm.closeMenu }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(45, "sc", "menu-top"),
                  style: _vm._$s(45, "s", {
                    height: _vm.statusBarHeight + 40 + "px",
                    top: _vm.itemShow ? 0 : "-100%"
                  }),
                  attrs: { _i: 45 },
                  on: {
                    touchend: function($event) {
                      $event.stopPropagation()
                    }
                  }
                },
                [
                  _c("view", {
                    style: _vm._$s(46, "s", {
                      height: _vm.statusBarHeight + "px"
                    }),
                    attrs: { _i: 46 }
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(47, "sc", "head"),
                      attrs: { _i: 47 }
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(48, "sc", "iconfont back"),
                        attrs: { _i: 48 },
                        on: { click: _vm.back }
                      }),
                      _c("view", [
                        _vm._v(_vm._$s(49, "t0-0", _vm._s(_vm.chapterName)))
                      ])
                    ]
                  )
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(50, "sc", "menu-bottom"),
                  style: _vm._$s(50, "s", {
                    bottom: _vm.itemShow ? 0 : "-100%"
                  }),
                  attrs: { _i: 50 },
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
                      staticClass: _vm._$s(51, "sc", "show-page"),
                      attrs: { _i: 51 }
                    },
                    [
                      _vm._v(
                        _vm._$s(51, "t0-0", _vm._s(_vm.currentPage + 1)) +
                          _vm._$s(51, "t0-1", _vm._s(_vm.pages.length))
                      )
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(52, "sc", "progress-box"),
                      attrs: { _i: 52 }
                    },
                    [
                      _c("text", {
                        attrs: { _i: 53 },
                        on: { click: _vm.preChapter }
                      }),
                      _c(
                        "view",
                        [
                          _c("my-progress", {
                            attrs: {
                              total: _vm.pages.length - 1 || 1,
                              index: _vm.currentPage,
                              _i: 55
                            },
                            on: { indexChange: _vm.goToPage }
                          })
                        ],
                        1
                      ),
                      _c("text", {
                        attrs: { _i: 56 },
                        on: { click: _vm.nextChapter }
                      })
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(57, "sc", "items-box"),
                      attrs: { _i: 57 }
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(58, "sc", "item-box"),
                          attrs: { _i: 58 },
                          on: { click: _vm.openDirectory }
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(59, "sc", "iconfont"),
                            attrs: { _i: 59 }
                          }),
                          _c("text")
                        ]
                      ),
                      _vm._$s(61, "i", _vm.background === 2)
                        ? _c(
                            "view",
                            {
                              staticClass: _vm._$s(61, "sc", "item-box"),
                              attrs: { _i: 61 },
                              on: {
                                click: function($event) {
                                  return _vm.changeBackground(1)
                                }
                              }
                            },
                            [
                              _c("text", {
                                staticClass: _vm._$s(62, "sc", "iconfont"),
                                attrs: { _i: 62 }
                              }),
                              _c("text")
                            ]
                          )
                        : _vm._e(),
                      _vm._$s(64, "i", _vm.background === 1)
                        ? _c(
                            "view",
                            {
                              staticClass: _vm._$s(64, "sc", "item-box"),
                              attrs: { _i: 64 },
                              on: {
                                click: function($event) {
                                  return _vm.changeBackground(2)
                                }
                              }
                            },
                            [
                              _c("text", {
                                staticClass: _vm._$s(65, "sc", "iconfont"),
                                attrs: { _i: 65 }
                              }),
                              _c("text")
                            ]
                          )
                        : _vm._e(),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(67, "sc", "item-box"),
                          attrs: { _i: 67 },
                          on: { click: _vm.openSetting }
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(68, "sc", "iconfont"),
                            attrs: { _i: 68 }
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
                  staticClass: _vm._$s(70, "sc", "setting"),
                  style: _vm._$s(70, "s", {
                    bottom: _vm.settingShow ? 0 : "-100%"
                  }),
                  attrs: { _i: 70 },
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
                        attrs: { _i: 73 },
                        on: { click: _vm.bigSize }
                      }),
                      _c("view", {
                        staticClass: _vm._$s(74, "sc", "icon"),
                        attrs: { _i: 74 },
                        on: { click: _vm.smallSize }
                      }),
                      _vm._$s(75, "i", _vm.simplified)
                        ? _c("view", {
                            staticClass: _vm._$s(75, "sc", "icon"),
                            attrs: { _i: 75 },
                            on: {
                              click: function($event) {
                                return _vm.changeFont(false)
                              }
                            }
                          })
                        : _c("view", {
                            staticClass: _vm._$s(76, "sc", "icon"),
                            attrs: { _i: 76 },
                            on: {
                              click: function($event) {
                                return _vm.changeFont(true)
                              }
                            }
                          })
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(77, "sc", "item"),
                      attrs: { _i: 77 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(78, "sc", "item-name"),
                        attrs: { _i: 78 }
                      }),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(79, "sc", "type-setting"),
                          class: _vm._$s(79, "c", {
                            active: _vm.lineHeight === 1
                          }),
                          attrs: { _i: 79 },
                          on: {
                            click: function($event) {
                              return _vm.changeLineHeight(1)
                            }
                          }
                        },
                        _vm._l(5, function(i, $11, $21, $31) {
                          return _c("view", {
                            key: i,
                            staticClass: _vm._$s("80-" + $31, "sc", "line"),
                            class: _vm._$s("80-" + $31, "c", {
                              active: _vm.lineHeight === 1
                            }),
                            attrs: { _i: "80-" + $31 }
                          })
                        }),
                        0
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(81, "sc", "type-setting"),
                          class: _vm._$s(81, "c", {
                            active: _vm.lineHeight === 1.5
                          }),
                          attrs: { _i: 81 },
                          on: {
                            click: function($event) {
                              return _vm.changeLineHeight(1.5)
                            }
                          }
                        },
                        _vm._l(4, function(i, $12, $22, $32) {
                          return _c("view", {
                            key: i,
                            staticClass: _vm._$s("82-" + $32, "sc", "line"),
                            class: _vm._$s("82-" + $32, "c", {
                              active: _vm.lineHeight === 1.5
                            }),
                            attrs: { _i: "82-" + $32 }
                          })
                        }),
                        0
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(83, "sc", "type-setting"),
                          class: _vm._$s(83, "c", {
                            active: _vm.lineHeight === 2
                          }),
                          attrs: { _i: 83 },
                          on: {
                            click: function($event) {
                              return _vm.changeLineHeight(2)
                            }
                          }
                        },
                        _vm._l(3, function(i, $13, $23, $33) {
                          return _c("view", {
                            key: i,
                            staticClass: _vm._$s("84-" + $33, "sc", "line"),
                            class: _vm._$s("84-" + $33, "c", {
                              active: _vm.lineHeight === 2
                            }),
                            attrs: { _i: "84-" + $33 }
                          })
                        }),
                        0
                      )
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(85, "sc", "item"),
                      attrs: { _i: 85 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(86, "sc", "item-name"),
                        attrs: { _i: 86 }
                      }),
                      _c("view", {
                        staticClass: _vm._$s(87, "sc", "icon"),
                        class: _vm._$s(87, "c", {
                          active: _vm.background === 1
                        }),
                        attrs: { _i: 87 },
                        on: {
                          click: function($event) {
                            return _vm.changeBackground(1)
                          }
                        }
                      }),
                      _c("view", {
                        staticClass: _vm._$s(88, "sc", "icon"),
                        class: _vm._$s(88, "c", {
                          active: _vm.background === 2
                        }),
                        attrs: { _i: 88 },
                        on: {
                          click: function($event) {
                            return _vm.changeBackground(2)
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
                  staticClass: _vm._$s(89, "sc", "directory"),
                  class: _vm._$s(89, "c", {
                    container0: _vm.background === 1,
                    container1: _vm.background === 2
                  }),
                  style: _vm._$s(89, "s", {
                    left: _vm.directoryShow ? 0 : "-100%",
                    color: "" + _vm.colorList[_vm.background - 1]
                  }),
                  attrs: { _i: 89 },
                  on: {
                    touchend: function($event) {
                      $event.stopPropagation()
                    }
                  }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(90, "sc", "bookname"),
                    attrs: { _i: 90 }
                  }),
                  _c(
                    "scroll-view",
                    {
                      staticClass: _vm._$s(91, "sc", "directory-list"),
                      attrs: {
                        "scroll-into-view": _vm._$s(
                          91,
                          "a-scroll-into-view",
                          "chapter" + _vm.chapterId
                        ),
                        _i: 91
                      }
                    },
                    _vm._l(
                      _vm._$s(92, "f", { forItems: _vm.directoryList }),
                      function(item, $14, $24, $34) {
                        return _c(
                          "view",
                          {
                            key: _vm._$s(92, "f", {
                              forIndex: $24,
                              key: item.chapterId
                            }),
                            staticClass: _vm._$s(
                              "92-" + $34,
                              "sc",
                              "directory-listItem"
                            ),
                            class: _vm._$s("92-" + $34, "c", {
                              active: item.chapterId === _vm.chapterId
                            }),
                            attrs: {
                              id: _vm._$s(
                                "92-" + $34,
                                "a-id",
                                "chapter" + item.chapterId
                              ),
                              _i: "92-" + $34
                            },
                            on: {
                              click: function($event) {
                                return _vm.goToChapter(item.chapterId)
                              }
                            }
                          },
                          [
                            _vm._v(
                              _vm._$s("92-" + $34, "t0-0", _vm._s(item.name))
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
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 14));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _myProgress = _interopRequireDefault(__webpack_require__(/*! ../../components/myProgress.vue */ 17));\nvar _battery = _interopRequireDefault(__webpack_require__(/*! ../../components/battery.vue */ 22));\nvar _utils = __webpack_require__(/*! ../../utils/utils.js */ 27);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n{\n  components: {\n    myProgress: _myProgress.default,\n    battery: _battery.default },\n\n  data: function data() {\n    return {\n      chapterId: '',\n      chapterName: '',\n      preChapterName: '',\n      nextChapterName: '',\n      textFixed: \"<p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p>\",\n      text: '',\n      nextText: '',\n      preText: '',\n      directoryList: [], //目录列表\n      preTranslateX: 0, //上一章的位移\n\n      showAnimation: false, //是否开启动画\n      pages: [],\n      prePages: [],\n      nextPages: [],\n      contentWidth: 0,\n      contentHeight: 0,\n      windowWidth: 0,\n      windowHeight: 0,\n      platform: '', //设备\n      batteryState: '', //电池状态\n      batteryLevel: 100, //电量\n      systemTime: '', //系统时间\n      systemTimeStr: '', //系统时间字符串\n      statusBarHeight: 0, //状态栏高度\n\n      columnGap: 40,\n      currentPage: 0,\n      touchStartX: 0, // 触屏起始点\n      touchStartT: 0, //触屏起始时间\n      touchTimer: null, //用于触摸节流\n      menuShow: false, //菜单栏box是否渲染\n      itemShow: false, // 菜单栏动画控制\n      settingShow: false, //设置栏动画控制\n      directoryShow: false, //目录动画控制\n      turnPageTime: 0.5, //翻页动画时间\n\n      fontSize: '',\n      simplified: '',\n      lineHeight: '',\n      background: '',\n      colorList: ['#000', '#666'],\n\n      nextChapterLoaded: false, //下一章是否加载完毕\n      preChapterLoaded: false, //上一章是否加载完毕\n      waitForTurnChapter: false //加载章节后是否跳转页面\n    };\n  },\n  onLoad: function onLoad() {\n    this.getSystemInfo();\n  },\n  mounted: function mounted() {\n    this.initPage();\n  },\n  computed: {\n    progress: function progress() {\n      return this.currentPage / (this.pages.length - 1);\n    } },\n\n  methods: {\n\n    /**\n             * 返回上一页面\n             **/\n    back: function back() {\n      uni.navigateBack();\n    },\n\n    /**\n       * 获取设备信息\n       **/\n    getSystemInfo: function getSystemInfo() {var _this = this;var _uni$getSystemInfoSyn =\n\n      uni.getSystemInfoSync(),windowWidth = _uni$getSystemInfoSyn.windowWidth,windowHeight = _uni$getSystemInfoSyn.windowHeight,statusBarHeight = _uni$getSystemInfoSyn.statusBarHeight,platform = _uni$getSystemInfoSyn.platform;\n      this.statusBarHeight = statusBarHeight;\n      this.windowWidth = windowWidth;\n      this.windowHeight = windowHeight;\n      this.contentWidth = windowWidth - 40;\n      this.contentHeight = windowHeight - 60;\n      this.platform = platform;\n\n      // 全屏\n      plus.navigator.setFullscreen(true);\n      // 取消左滑返回\n      var page = this.$mp.page.$getAppWebview();\n      page.setStyle({ popGesture: 'none' });\n      // 获取ios电量\n      if (this.platform === 'ios') {\n        var UIDevice = plus.ios.import(\"UIDevice\");\n        var dev = UIDevice.currentDevice();\n        if (!dev.isBatteryMonitoringEnabled()) {\n          dev.setBatteryMonitoringEnabled(true);\n        }\n        setInterval(function () {\n          _this.batteryState = dev.batteryState();\n          _this.batteryLevel = dev.batteryLevel() * 100;\n        }, 1000);\n\n      } else\n      {\n        // 获取安卓电量\n        var main = plus.android.runtimeMainActivity();\n        var Intent = plus.android.importClass('android.content.Intent');\n        var recevier = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', {\n          onReceive: function onReceive(context, intent) {\n            var action = intent.getAction();\n            if (action == Intent.ACTION_BATTERY_CHANGED) {\n              _this.batteryState = intent.getIntExtra(\"status\", 0); //电池状态  \n              _this.batteryLevel = intent.getIntExtra(\"level\", 0); //电量\n            }\n          } });\n\n        var IntentFilter = plus.android.importClass('android.content.IntentFilter');\n        var filter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);\n        main.registerReceiver(recevier, filter);\n      }\n\n\n\n      // 设置时间\n      var date = new Date();\n      this.systemTime = Date.parse(date);\n      this.systemTimeStr = (0, _utils.dateToStr)(this.systemTime);\n      setInterval(function () {\n        _this.systemTime += 60000;\n        _this.systemTimeStr = (0, _utils.dateToStr)(_this.systemTime);\n      }, 60000);\n\n      // 获取字体、排版等信息\n      this.fontSize = uni.getStorageSync('fontSize') || 16;\n      this.simplified = uni.getStorageSync('simplified');\n      this.lineHeight = uni.getStorageSync('lineHeight') || 1.5;\n      this.background = uni.getStorageSync('background') || 1;\n\n    },\n\n    /**\n       * 获取数据初始化页面\n       **/\n    initPage: function initPage() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                _this2.preTranslateX = -_this2.windowWidth - 20;_context.next = 3;return (\n                  _this2.getData());case 3:\n                _this2.$nextTick(function () {\n                  _this2.calcPages();\n                });case 4:case \"end\":return _context.stop();}}}, _callee);}))();\n    },\n\n    /**\n       * 计算阅读页长度,并生成pages,并跳转至某页（如果有）\n       **/\n    calcPages: function calcPages(type, progress) {var _this3 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.select('#text').boundingClientRect(function (data) {\n        var width = data.width;\n        var height = data.height;\n        _this3.pages = _this3.genPages(width, height);\n        if (type === 1) {\n          _this3.currentPage = Math.floor((_this3.pages.length - 1) * progress);\n          _this3.goToPage(_this3.currentPage);\n        }\n      }).exec();\n      this.calcPrePages();\n      this.calcNextPages();\n    },\n\n    /**\n       * 计算上一章阅读页长度,并生成pages,并跳转至某页（如果有）\n       **/\n    calcPrePages: function calcPrePages() {var _this4 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.select('#preText').boundingClientRect(function (data) {\n        var width = data.width;\n        var height = data.height;\n        _this4.prePages = _this4.genPages(width, height);\n        _this4.preChapterLoaded = true;\n        if (_this4.waitForTurnChapter) {\n          uni.hideLoading();\n          _this4.waitForTurnChapter = false;\n          _this4.preChapter();\n        }\n      }).exec();\n    },\n\n    /**\n       * 计算下一章阅读页长度,并生成pages,并跳转至某页（如果有）\n       **/\n    calcNextPages: function calcNextPages() {var _this5 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.select('#nextText').boundingClientRect(function (data) {\n        var width = data.width;\n        var height = data.height;\n        _this5.nextPages = _this5.genPages(width, height);\n        _this5.nextChapterLoaded = true;\n        if (_this5.waitForTurnChapter) {\n          uni.hideLoading();\n          _this5.waitForTurnChapter = false;\n          _this5.nextChapter();\n        }\n      }).exec();\n    },\n\n\n    /**\n       * 生成阅读页pages\n       **/\n    genPages: function genPages(width, height) {\n      var arr = [];\n      var id = 0;\n\n      if (this.platform === 'ios') {\n        while (height > 0) {\n          arr.push({\n            id: id,\n            zIndex: 200 - id,\n            translateX: 0 });\n\n          id++;\n          height -= this.contentHeight;\n        }\n      } else\n      {\n        while (width > 0) {\n          arr.push({\n            id: id,\n            zIndex: 200 - id,\n            translateX: 0 });\n\n          id++;\n          width -= this.contentWidth + this.columnGap;\n        }\n      }\n\n\n\n\n\n\n\n\n\n\n\n\n      return arr;\n    },\n\n    /**\n       * 触摸开始\n       **/\n    touchStart: function touchStart(e) {\n      this.showAnimation = false;\n      this.touchStartX = e.touches[0].clientX;\n      this.touchStartT = e.timeStamp;\n    },\n\n    /**\n       * 触摸结束\n       **/\n    touchEnd: function touchEnd(e) {\n      this.showAnimation = true;\n      var deltaX = e.changedTouches[0].clientX - this.touchStartX;\n      if (deltaX === 0) {//deltaX === 0为点击\n        if (e.changedTouches[0].clientX < this.windowWidth / 3) {\n          this.prePage();\n        } else\n        if (e.changedTouches[0].clientX > this.windowWidth / 3 * 2) {\n          this.nextPage();\n        } else\n        {\n          this.showMenu();\n        }\n      } else\n      {\n        if (deltaX > this.windowWidth / 2) {\n          this.prePage();\n        } else\n        if (deltaX < -this.windowWidth / 2) {\n          this.nextPage();\n        } else\n        {\n          var v = 0;\n          v = deltaX / (e.timeStamp - this.touchStartT);\n          if (v <= 0.1 && v > 0) {//翻页速度慢，取消翻页\n            if (this.currentPage !== 0) {\n              this.pages[this.currentPage - 1].translateX = -this.windowWidth - 20;\n            } else\n            {\n              this.preTranslateX = -this.windowWidth - 20;\n            }\n          } else\n          if (v >= -0.1 && v < 0) {//翻页速度慢，取消翻页\n            this.pages[this.currentPage].translateX = 0;\n          } else\n          if (v > 0.1) {\n            this.prePage();\n          } else\n          if (v < -0.1) {\n            this.nextPage();\n          }\n        }\n      }\n    },\n\n    /**\n       * 触摸\n       **/\n    touchMove: function touchMove(e) {var _this6 = this;\n      if (!this.touchTimer) {\n        var deltaX = e.touches[0].clientX - this.touchStartX;\n        if (deltaX < 0) {\n          if (this.currentPage === this.pages.length - 1) {//如果翻至最后一页\n            if (!this.nextChapterLoaded) {\n              this.waitForTurnChapter = true;\n              uni.showLoading({\n                mask: true,\n                title: '正在加载中请稍候' });\n\n              return;\n            }\n            if (this.nextText.length === 0) {//如果没有下一章\n              uni.showToast({\n                title: '这是最后一章',\n                icon: 'none' });\n\n            } else\n            {\n              this.pages[this.currentPage].translateX = deltaX;\n            }\n          } else\n          {\n            this.pages[this.currentPage].translateX = deltaX;\n          }\n        } else\n        {\n          if (this.currentPage === 0) {//如果是第一页\n            if (!this.preChapterLoaded) {\n              this.waitForTurnChapter = true;\n              uni.showLoading({\n                mask: true,\n                title: '正在加载中请稍候' });\n\n              return;\n            }\n            if (this.preText.length === 0) {//如果没有上一章\n              uni.showToast({\n                title: '这是第一章',\n                icon: 'none' });\n\n            } else\n            {\n              this.preTranslateX = -this.windowWidth + deltaX;\n            }\n          } else\n          {\n            this.pages[this.currentPage - 1].translateX = -this.windowWidth + deltaX;\n          }\n        }\n        this.touchTimer = setTimeout(function () {\n          _this6.touchTimer = null;\n        }, 100);\n      }\n    },\n\n    /**\n       * 呼出菜单\n       **/\n    showMenu: function showMenu() {var _this7 = this;\n\n      plus.navigator.setFullscreen(false);\n\n      this.menuShow = true;\n      setTimeout(function () {\n        _this7.itemShow = true;\n      }, 100);\n    },\n\n    /**\n       * 关闭菜单\n       **/\n    closeMenu: function closeMenu() {var _this8 = this;\n\n      plus.navigator.setFullscreen(true);\n\n      this.itemShow = false;\n      this.settingShow = false;\n      this.directoryShow = false;\n      setTimeout(function () {\n        _this8.menuShow = false;\n      }, 300);\n    },\n\n    /**\n       * 关闭菜单栏，呼出设置栏\n       **/\n    openSetting: function openSetting() {var _this9 = this;\n\n      this.itemShow = false;\n      setTimeout(function () {\n        _this9.settingShow = true;\n      }, 300);\n    },\n\n    /**\n       * 关闭菜单栏，呼出目录栏\n       **/\n    openDirectory: function openDirectory() {var _this10 = this;\n\n      plus.navigator.setFullscreen(true);\n\n      this.itemShow = false;\n      setTimeout(function () {\n        _this10.directoryShow = true;\n      }, 300);\n    },\n\n    /**\n       * 上一页\n       **/\n    prePage: function prePage() {var _this11 = this;\n      if (this.currentPage === 0) {\n        if (!this.preChapterLoaded) {\n          this.preChapter();\n          return;\n        }\n        if (this.preText.length === 0) {\n          uni.showToast({\n            title: '这是第一章',\n            icon: 'none' });\n\n        } else\n        {\n          uni.showToast({\n            title: this.preChapterName,\n            icon: 'none' });\n\n          this.preTranslateX = 0;\n          // 动画结束后获取上一章,重置页面\n          setTimeout(function () {\n            _this11.preChapter();\n          }, this.turnPageTime * 1000);\n        }\n      } else\n      {\n        this.pages[this.currentPage - 1].translateX = 0;\n        this.currentPage--;\n      }\n    },\n\n    /**\n       * 下一页\n       **/\n    nextPage: function nextPage() {var _this12 = this;\n      if (this.currentPage === this.pages.length - 1) {\n        if (!this.nextChapterLoaded) {//下一章未加载完毕\n          this.nextChapter();\n          return;\n        }\n        if (this.nextText.length === 0) {\n          uni.showToast({\n            title: '这是最后一章',\n            icon: 'none' });\n\n        } else\n        {\n          uni.showToast({\n            title: this.nextChapterName,\n            icon: 'none' });\n\n          this.pages[this.currentPage].translateX = -this.windowWidth - 20;\n          // 动画结束后获取下一章,重置页面\n          setTimeout(function () {\n            _this12.nextChapter();\n          }, this.turnPageTime * 1000);\n        }\n      } else\n      {\n        this.pages[this.currentPage].translateX = -this.windowWidth - 20;\n        this.currentPage++;\n      }\n\n    },\n\n    /**\n       * 获取下一章,重置页面，将本章变为前一章，将下一章变为本章，获取下一章内容\n       **/\n    nextChapter: function nextChapter() {\n      if (!this.nextChapterLoaded) {\n        this.waitForTurnChapter = true;\n        uni.showLoading({\n          mask: true,\n          title: '正在加载中请稍候' });\n\n        return;\n      }\n      this.chapterId++;\n      this.preText = this.text;\n      this.text = this.nextText;\n      this.nextText = '';\n      this.getText(this.chapterId + 1, 'next');\n      this.prePages = this.pages.map(function (value) {\n        value.translateX = 0;\n        return value;\n      });\n      this.pages = [].concat(this.nextPages);\n      this.nextPages = [];\n      this.preChapterName = this.chapterName;\n      this.chapterName = this.nextChapterName;\n      this.nextChapterName = '';\n      this.currentPage = 0;\n      this.goToPage(this.currentPage);\n\n    },\n\n    /**\n       * 获取上一章,重置页面，将本章变为后一章，将上一章变为本章，获取上一章内容\n       **/\n    preChapter: function preChapter() {\n      if (!this.preChapterLoaded) {\n        this.waitForTurnChapter = true;\n        uni.showLoading({\n          mask: true,\n          title: '正在加载中请稍候' });\n\n        return;\n      }\n      this.preTranslateX = -this.windowWidth - 20;\n      this.chapterId--;\n      this.nextText = this.text;\n      this.text = this.preText;\n      this.preText = '';\n      this.getText(this.chapterId - 1, 'pre');\n      this.nextPages = this.pages.map(function (value) {\n        value.translateX = 0;\n        return value;\n      });\n      this.pages = [].concat(this.prePages);\n      this.prePages = [];\n      this.nextChapterName = this.chapterName;\n      this.chapterName = this.preChapterName;\n      this.preChapterName = '';\n\n      this.currentPage = this.pages.length - 1;\n      this.goToPage(this.currentPage);\n    },\n\n    /**\n       * 根据页码跳转\n       **/\n    goToPage: function goToPage(page) {var _this13 = this;\n      if (page > this.pages.length - 1) {\n        page = this.pages.length - 1;\n      }\n      this.showAnimation = false;\n      this.currentPage = page;\n      this.pages.forEach(function (value, index) {\n        if (index < page) {\n          value.translateX = -_this13.windowWidth - 20;\n        } else\n        {\n          value.translateX = 0;\n        }\n      });\n    },\n\n    /**\n       * 加大字体\n       **/\n    bigSize: function bigSize() {var _this14 = this;\n      if (this.fontSize < 25) {\n        var progress = this.progress;\n        this.fontSize++;\n        uni.setStorageSync('fontSize', this.fontSize);\n        this.$nextTick(function () {\n          _this14.calcPages(1, progress);\n        });\n      } else\n      {\n        uni.showToast({\n          title: '最大字体',\n          icon: 'none' });\n\n      }\n\n\n    },\n\n    /**\n       * 缩小字体\n       **/\n    smallSize: function smallSize() {var _this15 = this;\n      if (this.fontSize > 14) {\n        var progress = this.progress;\n        this.fontSize--;\n        uni.setStorageSync('fontSize', this.fontSize);\n        this.$nextTick(function () {\n          _this15.calcPages(1, progress);\n        });\n      } else\n      {\n        uni.showToast({\n          title: '最小字体',\n          icon: 'none' });\n\n      }\n    },\n\n    /**\n       * 切换繁体简体\n       **/\n    changeFont: function changeFont(type) {\n      if (!type) {//切换为繁体\n        this.text = (0, _utils.traditionalized)(this.text);\n        this.preText = (0, _utils.traditionalized)(this.preText);\n        this.nextText = (0, _utils.traditionalized)(this.nextText);\n        this.simplified = false;\n        uni.setStorageSync('simplified', false);\n      } else\n      {//切换为简体\n        this.text = (0, _utils.simplized)(this.text);\n        this.preText = (0, _utils.simplized)(this.preText);\n        this.nextText = (0, _utils.simplized)(this.nextText);\n        this.simplified = true;\n        uni.setStorageSync('simplified', true);\n      }\n    },\n\n\n    /**\n       * 改变行距\n       **/\n    changeLineHeight: function changeLineHeight(lineHeight) {var _this16 = this;\n      if (lineHeight === this.lineHeight) {\n        return;\n      } else\n      {\n        var progress = this.progress;\n        this.lineHeight = lineHeight;\n        uni.setStorageSync('lineHeight', this.lineHeight);\n        this.$nextTick(function () {\n          _this16.calcPages(1, progress);\n        });\n      }\n    },\n\n    /**\n       * 改变背景\n       **/\n    changeBackground: function changeBackground(background) {\n      if (background === this.background) {\n        return;\n      } else\n      {\n        this.background = background;\n        uni.setStorageSync('background', this.background);\n      }\n    },\n\n    /**\n       * 获取数据，包括阅读到第几章，以及前中后三章内容\n       **/\n    getData: function getData() {var _this17 = this;\n      uni.showLoading({ mask: true });\n      return new Promise(function (resolve, reject) {\n        // 模拟网络时间\n        setTimeout(function () {\n          uni.hideLoading();\n          _this17.nextChapterLoaded = true;\n          _this17.preChapterLoaded = true;\n          _this17.chapterId = 2;\n          _this17.chapterName = \"\\u7B2C\".concat(_this17.chapterId, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n          _this17.preChapterName = \"\\u7B2C\".concat(_this17.chapterId - 1, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n          _this17.nextChapterName = \"\\u7B2C\".concat(_this17.chapterId + 1, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n          _this17.text = _this17.chapterId + _this17.textFixed;\n          _this17.preText = _this17.chapterId - 1 + _this17.textFixed;\n          _this17.nextText = _this17.chapterId + 1 + _this17.textFixed;\n          if (!_this17.simplified) {//切换为繁体\n            _this17.text = (0, _utils.traditionalized)(_this17.text);\n            _this17.preText = (0, _utils.traditionalized)(_this17.preText);\n            _this17.nextText = (0, _utils.traditionalized)(_this17.nextText);\n          }\n\n          // 生成目录，正常是后端传过来\n          for (var i = 1; i <= 100; i++) {\n            _this17.directoryList.push({\n              chapterId: i,\n              name: \"\\u7B2C\".concat(i, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\") });\n\n          }\n          resolve();\n        }, 1000);\n      });\n\n    },\n\n    /**\n       * 获取上一章或下一章数据\n       **/\n    getText: function getText(chapterId, type) {var _this18 = this;\n      if (type === 'next') {\n        this.nextChapterLoaded = false;\n      } else\n      {\n        this.preChapterLoaded = false;\n      }\n      // 模拟网络时间\n      setTimeout(function () {\n        if (type === 'next') {\n\n          _this18.nextText = chapterId + _this18.textFixed;\n          _this18.nextChapterName = \"\\u7B2C\".concat(chapterId, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n          if (!_this18.simplified) {//切换为繁体\n            _this18.nextText = (0, _utils.traditionalized)(_this18.nextText);\n          }\n          _this18.$nextTick(function () {\n            _this18.calcNextPages();\n          });\n        } else\n        {\n          if (chapterId === 0) {\n            _this18.preText = '';\n            _this18.preChapterName = '';\n            _this18.$nextTick(function () {\n              _this18.calcPrePages();\n            });\n          } else\n          {\n            _this18.preText = chapterId + _this18.textFixed;\n            _this18.preChapterName = \"\\u7B2C\".concat(chapterId, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n            if (!_this18.simplified) {//切换为繁体\n              _this18.preText = (0, _utils.traditionalized)(_this18.preText);\n            }\n            _this18.$nextTick(function () {\n              _this18.calcPrePages();\n            });\n          }\n        }\n\n      }, 1000);\n    },\n\n    /**\n       * 跳转到指定章节\n       **/\n    goToChapter: function goToChapter(chapterId) {var _this19 = this;\n      this.closeMenu();\n      uni.showLoading({ mask: true });\n      return new Promise(function (resolve, reject) {\n        // 模拟网络时间\n\n        setTimeout(function () {\n          uni.hideLoading();\n          _this19.nextChapterLoaded = true;\n          _this19.preChapterLoaded = true;\n          _this19.chapterId = chapterId;\n          _this19.chapterName = \"\\u7B2C\".concat(_this19.chapterId, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n          _this19.preChapterName = \"\\u7B2C\".concat(_this19.chapterId - 1, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n          _this19.nextChapterName = \"\\u7B2C\".concat(_this19.chapterId + 1, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n          _this19.text = _this19.chapterId + _this19.textFixed;\n          _this19.preText = _this19.chapterId - 1 + _this19.textFixed;\n          _this19.nextText = _this19.chapterId + 1 + _this19.textFixed;\n          if (!_this19.simplified) {//切换为繁体\n            _this19.text = (0, _utils.traditionalized)(_this19.text);\n            _this19.preText = (0, _utils.traditionalized)(_this19.preText);\n            _this19.nextText = (0, _utils.traditionalized)(_this19.nextText);\n          }\n          _this19.$nextTick(function () {\n            _this19.calcPages(1, 0);\n          });\n          resolve();\n        }, 1000);\n      });\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcmVhZC9yZWFkLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMFBBO0FBQ0E7QUFDQSxpRTtBQUNBO0FBQ0E7QUFDQSxtQ0FEQTtBQUVBLDZCQUZBLEVBREE7O0FBS0EsTUFMQSxrQkFLQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxxQkFGQTtBQUdBLHdCQUhBO0FBSUEseUJBSkE7QUFLQSxvME9BTEE7QUFNQSxjQU5BO0FBT0Esa0JBUEE7QUFRQSxpQkFSQTtBQVNBLHVCQVRBLEVBU0E7QUFDQSxzQkFWQSxFQVVBOztBQUVBLDBCQVpBLEVBWUE7QUFDQSxlQWJBO0FBY0Esa0JBZEE7QUFlQSxtQkFmQTtBQWdCQSxxQkFoQkE7QUFpQkEsc0JBakJBO0FBa0JBLG9CQWxCQTtBQW1CQSxxQkFuQkE7QUFvQkEsa0JBcEJBLEVBb0JBO0FBQ0Esc0JBckJBLEVBcUJBO0FBQ0EsdUJBdEJBLEVBc0JBO0FBQ0Esb0JBdkJBLEVBdUJBO0FBQ0EsdUJBeEJBLEVBd0JBO0FBQ0Esd0JBekJBLEVBeUJBOztBQUVBLG1CQTNCQTtBQTRCQSxvQkE1QkE7QUE2QkEsb0JBN0JBLEVBNkJBO0FBQ0Esb0JBOUJBLEVBOEJBO0FBQ0Esc0JBL0JBLEVBK0JBO0FBQ0EscUJBaENBLEVBZ0NBO0FBQ0EscUJBakNBLEVBaUNBO0FBQ0Esd0JBbENBLEVBa0NBO0FBQ0EsMEJBbkNBLEVBbUNBO0FBQ0EsdUJBcENBLEVBb0NBOztBQUVBLGtCQXRDQTtBQXVDQSxvQkF2Q0E7QUF3Q0Esb0JBeENBO0FBeUNBLG9CQXpDQTtBQTBDQSxpQ0ExQ0E7O0FBNENBLDhCQTVDQSxFQTRDQTtBQUNBLDZCQTdDQSxFQTZDQTtBQUNBLCtCQTlDQSxDQThDQTtBQTlDQTtBQWdEQSxHQXREQTtBQXVEQSxRQXZEQSxvQkF1REE7QUFDQTtBQUNBLEdBekRBO0FBMERBLFNBMURBLHFCQTBEQTtBQUNBO0FBQ0EsR0E1REE7QUE2REE7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQSxLQUhBLEVBN0RBOztBQWtFQTs7QUFFQTs7O0FBR0EsUUFMQSxrQkFLQTtBQUNBO0FBQ0EsS0FQQTs7QUFTQTs7O0FBR0EsaUJBWkEsMkJBWUE7O0FBRUEsNkJBRkEsQ0FFQSxXQUZBLHlCQUVBLFdBRkEsQ0FFQSxZQUZBLHlCQUVBLFlBRkEsQ0FFQSxlQUZBLHlCQUVBLGVBRkEsQ0FFQSxRQUZBLHlCQUVBLFFBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQSxFQUdBLElBSEE7O0FBS0EsT0FYQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFEQSxDQUNBO0FBQ0Esa0VBRkEsQ0FFQTtBQUNBO0FBQ0EsV0FQQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxFQUdBLEtBSEE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQTNFQTs7QUE2RUE7OztBQUdBLFlBaEZBLHNCQWdGQTtBQUNBLGdFQURBO0FBRUEsa0NBRkE7QUFHQTtBQUNBO0FBQ0EsaUJBRkEsRUFIQTtBQU1BLEtBdEZBOztBQXdGQTs7O0FBR0EsYUEzRkEscUJBMkZBLElBM0ZBLEVBMkZBLFFBM0ZBLEVBMkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FSQSxFQVFBLElBUkE7QUFTQTtBQUNBO0FBQ0EsS0F4R0E7O0FBMEdBOzs7QUFHQSxnQkE3R0EsMEJBNkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BVkEsRUFVQSxJQVZBO0FBV0EsS0ExSEE7O0FBNEhBOzs7QUFHQSxpQkEvSEEsMkJBK0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BVkEsRUFVQSxJQVZBO0FBV0EsS0E1SUE7OztBQStJQTs7O0FBR0EsWUFsSkEsb0JBa0pBLEtBbEpBLEVBa0pBLE1BbEpBLEVBa0pBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLDRCQUZBO0FBR0EseUJBSEE7O0FBS0E7QUFDQTtBQUNBO0FBQ0EsT0FWQTtBQVdBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsNEJBRkE7QUFHQSx5QkFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0EsS0F6TEE7O0FBMkxBOzs7QUFHQSxjQTlMQSxzQkE4TEEsQ0E5TEEsRUE4TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWxNQTs7QUFvTUE7OztBQUdBLFlBdk1BLG9CQXVNQSxDQXZNQSxFQXVNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0E7QUFDQTtBQUNBLFNBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQVZBO0FBV0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBO0FBQ0E7QUFDQSxTQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBUEE7QUFRQTtBQUNBO0FBQ0EsV0FGQTtBQUdBO0FBQ0E7QUFDQSxXQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBbFBBOztBQW9QQTs7O0FBR0EsYUF2UEEscUJBdVBBLENBdlBBLEVBdVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLGlDQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSw0QkFGQTs7QUFJQSxhQUxBO0FBTUE7QUFDQTtBQUNBO0FBQ0EsV0FsQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0EsU0F2QkE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEsaUNBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLDRCQUZBOztBQUlBLGFBTEE7QUFNQTtBQUNBO0FBQ0E7QUFDQSxXQWxCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLEVBRUEsR0FGQTtBQUdBO0FBQ0EsS0E5U0E7O0FBZ1RBOzs7QUFHQSxZQW5UQSxzQkFtVEE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7QUFHQSxLQTNUQTs7QUE2VEE7OztBQUdBLGFBaFVBLHVCQWdVQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7QUFHQSxLQTFVQTs7QUE0VUE7OztBQUdBLGVBL1VBLHlCQStVQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsR0FGQTtBQUdBLEtBclZBOztBQXVWQTs7O0FBR0EsaUJBMVZBLDJCQTBWQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsR0FGQTtBQUdBLEtBbFdBOztBQW9XQTs7O0FBR0EsV0F2V0EscUJBdVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLHdCQUZBOztBQUlBLFNBTEE7QUFNQTtBQUNBO0FBQ0Esc0NBREE7QUFFQSx3QkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsRUFFQSx3QkFGQTtBQUdBO0FBQ0EsT0F0QkE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQW5ZQTs7QUFxWUE7OztBQUdBLFlBeFlBLHNCQXdZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSx3QkFGQTs7QUFJQSxTQUxBO0FBTUE7QUFDQTtBQUNBLHVDQURBO0FBRUEsd0JBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLEVBRUEsd0JBRkE7QUFHQTtBQUNBLE9BdEJBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBcmFBOztBQXVhQTs7O0FBR0EsZUExYUEseUJBMGFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSwyQkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQXBjQTs7QUFzY0E7OztBQUdBLGNBemNBLHdCQXljQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsMkJBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQXBlQTs7QUFzZUE7OztBQUdBLFlBemVBLG9CQXllQSxJQXplQSxFQXllQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0EsT0FQQTtBQVFBLEtBdmZBOztBQXlmQTs7O0FBR0EsV0E1ZkEscUJBNGZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBLE9BUEE7QUFRQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSxzQkFGQTs7QUFJQTs7O0FBR0EsS0E3Z0JBOztBQStnQkE7OztBQUdBLGFBbGhCQSx1QkFraEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBLE9BUEE7QUFRQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSxzQkFGQTs7QUFJQTtBQUNBLEtBamlCQTs7QUFtaUJBOzs7QUFHQSxjQXRpQkEsc0JBc2lCQSxJQXRpQkEsRUFzaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FOQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FyakJBOzs7QUF3akJBOzs7QUFHQSxvQkEzakJBLDRCQTJqQkEsVUEzakJBLEVBMmpCQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBO0FBQ0EsS0F2a0JBOztBQXlrQkE7OztBQUdBLG9CQTVrQkEsNEJBNGtCQSxVQTVrQkEsRUE0a0JBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcGxCQTs7QUFzbEJBOzs7QUFHQSxXQXpsQkEscUJBeWxCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEseUVBRkE7O0FBSUE7QUFDQTtBQUNBLFNBekJBLEVBeUJBLElBekJBO0FBMEJBLE9BNUJBOztBQThCQSxLQXpuQkE7O0FBMm5CQTs7O0FBR0EsV0E5bkJBLG1CQThuQkEsU0E5bkJBLEVBOG5CQSxJQTluQkEsRUE4bkJBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBO0FBR0EsU0FWQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRkE7QUFHQSxXQU5BO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRkE7QUFHQTtBQUNBOztBQUVBLE9BaENBLEVBZ0NBLElBaENBO0FBaUNBLEtBdnFCQTs7QUF5cUJBOzs7QUFHQSxlQTVxQkEsdUJBNHFCQSxTQTVxQkEsRUE0cUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQTtBQUdBO0FBQ0EsU0FwQkEsRUFvQkEsSUFwQkE7QUFxQkEsT0F4QkE7QUF5QkEsS0F4c0JBLEVBbEVBLEUiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PCEtLSDms6jmhI/vvJrmnIDlpJoxMDDpobXvvIzlpJrkuobopoHmlLl6LWluZGV45pyA5aSn5YC8IC0tPlxyXG5cdDx2aWV3PlxyXG5cdFx0XHJcblx0XHQ8IS0tIOaTjeS9nOWxgiAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCIgQHRvdWNoc3RhcnQ9XCJ0b3VjaFN0YXJ0XCIgQHRvdWNoZW5kPVwidG91Y2hFbmRcIiBAdG91Y2htb3ZlPVwidG91Y2hNb3ZlXCI+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDwhLS0g5LuF55So5LqO6K6h566XIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjb250YWluZXIgaGlkZGVuXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhcHRlclwiPlxyXG5cdFx0XHRcdHt7Y2hhcHRlck5hbWV9fVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGlkPVwiY29udGVudFwiIGNsYXNzPVwiY29udGVudFwiXHJcblx0XHRcdFx0OnN0eWxlPVwie2hlaWdodDpgJHtjb250ZW50SGVpZ2h0fXB4YCwgd2lkdGg6IGAke2NvbnRlbnRXaWR0aH1weGAsXHJcblx0XHRcdFx0IGNvbHVtbnM6IGAke2NvbnRlbnRXaWR0aH1weGAsIGNvbHVtbkdhcDpgJHtjb2x1bW5HYXB9cHhgfVwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvb2staW5uZXJcIiBpZD1cInRleHRcIiB2LWh0bWw9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdDpzdHlsZT1cIntmb250U2l6ZTogYCR7Zm9udFNpemV9cHhgLCBsaW5lSGVpZ2h0OiBgJHtsaW5lSGVpZ2h0KmZvbnRTaXplfXB4YH1cIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJib3R0b20tYmFyXCI+XHJcblx0XHRcdFx05pi+56S655S16YeP44CB6aG156CBXHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjb250YWluZXIgaGlkZGVuXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhcHRlclwiPlxyXG5cdFx0XHRcdHt7Y2hhcHRlck5hbWV9fVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGlkPVwiY29udGVudFwiIGNsYXNzPVwiY29udGVudFwiXHJcblx0XHRcdFx0OnN0eWxlPVwie2hlaWdodDpgJHtjb250ZW50SGVpZ2h0fXB4YCwgd2lkdGg6IGAke2NvbnRlbnRXaWR0aH1weGAsXHJcblx0XHRcdFx0IGNvbHVtbnM6IGAke2NvbnRlbnRXaWR0aH1weGAsIGNvbHVtbkdhcDpgJHtjb2x1bW5HYXB9cHhgfVwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvb2staW5uZXJcIiBpZD1cInByZVRleHRcIiB2LWh0bWw9XCJwcmVUZXh0XCJcclxuXHRcdFx0XHRcdDpzdHlsZT1cIntmb250U2l6ZTogYCR7Zm9udFNpemV9cHhgLCBsaW5lSGVpZ2h0OiBgJHtsaW5lSGVpZ2h0KmZvbnRTaXplfXB4YH1cIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJib3R0b20tYmFyXCI+XHJcblx0XHRcdFx05pi+56S655S16YeP44CB6aG156CBXHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjb250YWluZXIgaGlkZGVuXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhcHRlclwiPlxyXG5cdFx0XHRcdHt7Y2hhcHRlck5hbWV9fVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGlkPVwiY29udGVudFwiIGNsYXNzPVwiY29udGVudFwiXHJcblx0XHRcdFx0OnN0eWxlPVwie2hlaWdodDpgJHtjb250ZW50SGVpZ2h0fXB4YCwgd2lkdGg6IGAke2NvbnRlbnRXaWR0aH1weGAsXHJcblx0XHRcdFx0IGNvbHVtbnM6IGAke2NvbnRlbnRXaWR0aH1weGAsIGNvbHVtbkdhcDpgJHtjb2x1bW5HYXB9cHhgfVwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvb2staW5uZXJcIiBpZD1cIm5leHRUZXh0XCIgdi1odG1sPVwibmV4dFRleHRcIlxyXG5cdFx0XHRcdFx0OnN0eWxlPVwie2ZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsIGxpbmVIZWlnaHQ6IGAke2xpbmVIZWlnaHQqZm9udFNpemV9cHhgfVwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJvdHRvbS1iYXJcIj5cclxuXHRcdFx0XHTmmL7npLrnlLXph4/jgIHpobXnoIFcclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8IS0tIOmYheivu+mhtSAtLT5cclxuXHRcdFxyXG5cdFx0PCEtLSDkuIrkuIDnq6AgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbnRhaW5lclwiIDpjbGFzcz1cIntjb250YWluZXIwOiBiYWNrZ3JvdW5kID09PSAxLCBjb250YWluZXIxOiBiYWNrZ3JvdW5kID09PSAyfVwiXHJcblx0XHRcdDpzdHlsZT1cInt6SW5kZXg6IDMwMCwgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3ByZVRyYW5zbGF0ZVh9cHgpYCwgdHJhbnNpdGlvbjogYGFsbCAke3Nob3dBbmltYXRpb24/dHVyblBhZ2VUaW1lOjB9c2B9XCJcclxuXHRcdD5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFwdGVyXCI+XHJcblx0XHRcdFx0e3twcmVDaGFwdGVyTmFtZX19XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCJcclxuXHRcdFx0XHQ6c3R5bGU9XCJ7aGVpZ2h0OmAke2NvbnRlbnRIZWlnaHR9cHhgLCB3aWR0aDogYCR7Y29udGVudFdpZHRofXB4YCxcclxuXHRcdFx0XHRmb250U2l6ZTogYCR7Zm9udFNpemV9cHhgLGNvbG9yOiBgJHtjb2xvckxpc3RbYmFja2dyb3VuZCAtIDFdfWAsXHJcblx0XHRcdFx0dHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHsocHJlUGFnZXMubGVuZ3RoLTEpKihjb250ZW50V2lkdGgrY29sdW1uR2FwKX1weClgLFxyXG5cdFx0XHRcdGNvbHVtbnM6IGAke2NvbnRlbnRXaWR0aH1weGAsIGNvbHVtbkdhcDpgJHtjb2x1bW5HYXB9cHhgfVwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvb2staW5uZXJcIiB2LWh0bWw9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdDpzdHlsZT1cIntmb250U2l6ZTogYCR7Zm9udFNpemV9cHhgLCBsaW5lSGVpZ2h0OiBgJHtsaW5lSGVpZ2h0KmZvbnRTaXplfXB4YH1cIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJib3R0b20tYmFyXCI+XHJcblx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHR7e3N5c3RlbVRpbWVTdHJ9fVxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdHt7cHJlUGFnZXMubGVuZ3RofX0ve3twcmVQYWdlcy5sZW5ndGh9fVxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdDxiYXR0ZXJ5IDpsZXZlbD1cImJhdHRlcnlMZXZlbFwiIDpjaGFyZ2luZz1cImJhdHRlcnlTdGF0ZSA9PT0gMlwiPjwvYmF0dGVyeT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PCEtLSDmnKznq6AgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbnRhaW5lclwiIDpjbGFzcz1cIntjb250YWluZXIwOiBiYWNrZ3JvdW5kID09PSAxLCBjb250YWluZXIxOiBiYWNrZ3JvdW5kID09PSAyfVwiXHJcblx0XHRcdHYtZm9yPVwiaXRlbSBvZiBwYWdlc1wiIDprZXk9XCJpdGVtLmlkXCIgXHJcblx0XHRcdDpzdHlsZT1cInt6SW5kZXg6IGl0ZW0uekluZGV4LCB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7aXRlbS50cmFuc2xhdGVYfXB4KWAsIHRyYW5zaXRpb246IGBhbGwgJHtzaG93QW5pbWF0aW9uP3R1cm5QYWdlVGltZTowfXNgfVwiXHJcblx0XHQ+XHJcblx0XHQ8IS0tIHYtaWY9XCJpdGVtLmlkIC0gY3VycmVudFBhZ2UgPCAyICYmIGl0ZW0uaWQgLSBjdXJyZW50UGFnZSA+IC0yXCIgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhcHRlclwiPlxyXG5cdFx0XHRcdHt7Y2hhcHRlck5hbWV9fVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiXHJcblx0XHRcdFx0OnN0eWxlPVwie2hlaWdodDpgJHtjb250ZW50SGVpZ2h0fXB4YCwgd2lkdGg6IGAke2NvbnRlbnRXaWR0aH1weGAsXHJcblx0XHRcdFx0Zm9udFNpemU6IGAke2ZvbnRTaXplfXB4YCxjb2xvcjogYCR7Y29sb3JMaXN0W2JhY2tncm91bmQgLSAxXX1gLFxyXG5cdFx0XHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7aXRlbS5pZCooY29udGVudFdpZHRoK2NvbHVtbkdhcCl9cHgpYCxcclxuXHRcdFx0XHRjb2x1bW5zOiBgJHtjb250ZW50V2lkdGh9cHhgLCBjb2x1bW5HYXA6YCR7Y29sdW1uR2FwfXB4YH1cIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJib29rLWlubmVyXCIgdi1odG1sPVwidGV4dFwiXHJcblx0XHRcdFx0XHQ6c3R5bGU9XCJ7Zm9udFNpemU6IGAke2ZvbnRTaXplfXB4YCwgbGluZUhlaWdodDogYCR7bGluZUhlaWdodCpmb250U2l6ZX1weGB9XCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tLWJhclwiPlxyXG5cdFx0XHRcdDx2aWV3PlxyXG5cdFx0XHRcdFx0e3tzeXN0ZW1UaW1lU3RyfX1cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHR7e2l0ZW0uaWQgKyAxIH19L3t7cGFnZXMubGVuZ3RofX1cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHQ8YmF0dGVyeSA6bGV2ZWw9XCJiYXR0ZXJ5TGV2ZWxcIiA6Y2hhcmdpbmc9XCJiYXR0ZXJ5U3RhdGUgPT09IDJcIj48L2JhdHRlcnk+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDwhLS0g5LiL5LiA56ugIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjb250YWluZXJcIiA6Y2xhc3M9XCJ7Y29udGFpbmVyMDogYmFja2dyb3VuZCA9PT0gMSwgY29udGFpbmVyMTogYmFja2dyb3VuZCA9PT0gMn1cIlxyXG5cdFx0XHQ6c3R5bGU9XCJ7ekluZGV4OiAxMDAsIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMHB4KWB9XCJcclxuXHRcdFx0di1pZj1cInBhZ2VzLmxlbmd0aFwiXHJcblx0XHQ+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhcHRlclwiPlxyXG5cdFx0XHRcdHt7bmV4dENoYXB0ZXJOYW1lfX1cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIlxyXG5cdFx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6YCR7Y29udGVudEhlaWdodH1weGAsIHdpZHRoOiBgJHtjb250ZW50V2lkdGh9cHhgLFxyXG5cdFx0XHRcdGZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsY29sb3I6IGAke2NvbG9yTGlzdFtiYWNrZ3JvdW5kIC0gMV19YCxcclxuXHRcdFx0XHR0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDBweClgLFxyXG5cdFx0XHRcdGNvbHVtbnM6IGAke2NvbnRlbnRXaWR0aH1weGAsIGNvbHVtbkdhcDpgJHtjb2x1bW5HYXB9cHhgfVwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvb2staW5uZXJcIiB2LWh0bWw9XCJuZXh0VGV4dFwiXHJcblx0XHRcdFx0XHQ6c3R5bGU9XCJ7Zm9udFNpemU6IGAke2ZvbnRTaXplfXB4YCwgbGluZUhlaWdodDogYCR7bGluZUhlaWdodCpmb250U2l6ZX1weGB9XCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tLWJhclwiPlxyXG5cdFx0XHRcdDx2aWV3PlxyXG5cdFx0XHRcdFx0e3tzeXN0ZW1UaW1lU3RyfX1cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHQxL3t7cGFnZXMubGVuZ3RofX1cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHQ8YmF0dGVyeSA6bGV2ZWw9XCJiYXR0ZXJ5TGV2ZWxcIiA6Y2hhcmdpbmc9XCJiYXR0ZXJ5U3RhdGUgPT09IDJcIj48L2JhdHRlcnk+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDwhLS0g6I+c5Y2V5bGCIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJtZW51XCIgOnN0eWxlPVwie2hlaWdodDogYCR7d2luZG93SGVpZ2h0fXB4YCwgd2lkdGg6IGAke3dpbmRvd1dpZHRofXB4YCxiYWNrZ3JvdW5kOiBkaXJlY3RvcnlTaG93PydyZ2JhKDAsIDAsIDAsIC41KSc6Jyd9XCIgXHJcblx0XHR2LWlmPVwibWVudVNob3dcIiBAdG91Y2hlbmQ9XCJjbG9zZU1lbnVcIj5cclxuXHRcdFx0XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibWVudS10b3BcIiA6c3R5bGU9XCJ7aGVpZ2h0OiBgJHtzdGF0dXNCYXJIZWlnaHQgKyA0MH1weGAsIHRvcDogaXRlbVNob3cgPyAwIDogYC0xMDAlYH1cIiBAdG91Y2hlbmQuc3RvcD5cclxuXHRcdFx0XHQ8dmlldyA6c3R5bGU9XCJ7aGVpZ2h0OiBgJHtzdGF0dXNCYXJIZWlnaHR9cHhgfVwiPjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnQgYmFja1wiIEBjbGljaz1cImJhY2tcIj4mI3hlNzFhOzwvdGV4dD5cclxuXHRcdFx0XHRcdDx2aWV3PlxyXG5cdFx0XHRcdFx0XHR7e2NoYXB0ZXJOYW1lfX1cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibWVudS1ib3R0b21cIiA6c3R5bGU9XCJ7Ym90dG9tOiBpdGVtU2hvdyA/IDAgOiAnLTEwMCUnfVwiIEB0b3VjaGVuZC5zdG9wPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvdy1wYWdlXCI+e3tjdXJyZW50UGFnZSArIDEgfX0ve3twYWdlcy5sZW5ndGh9fTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2dyZXNzLWJveFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgQGNsaWNrPVwicHJlQ2hhcHRlclwiPuS4iuS4gOeroDwvdGV4dD5cclxuXHRcdFx0XHRcdDx2aWV3IHN0eWxlPVwiZmxleDogMTtoZWlnaHQ6IDEwMCU7cGFkZGluZzogMCAxMHB4O1wiPlxyXG5cdFx0XHRcdFx0XHQ8bXktcHJvZ3Jlc3MgOnRvdGFsPVwicGFnZXMubGVuZ3RoIC0gMSB8fCAxXCIgOmluZGV4PVwiY3VycmVudFBhZ2VcIiBAaW5kZXhDaGFuZ2U9XCJnb1RvUGFnZVwiPjwvbXktcHJvZ3Jlc3M+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dGV4dCBAY2xpY2s9XCJuZXh0Q2hhcHRlclwiPuS4i+S4gOeroDwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtcy1ib3hcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1ib3hcIiBAY2xpY2s9XCJvcGVuRGlyZWN0b3J5XCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIiBzdHlsZT1cImZvbnQtc2l6ZTogMjVweDtcIj4mI3hlNjAxOzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXNpemU6IDEzcHg7XCI+55uu5b2VPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLWJveFwiIHYtaWY9XCJiYWNrZ3JvdW5kID09PSAyXCIgQGNsaWNrPVwiY2hhbmdlQmFja2dyb3VuZCgxKVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250XCIgc3R5bGU9XCJmb250LXNpemU6IDI1cHg7XCI+JiN4ZTYzZTs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAxM3B4O1wiPuWknOmXtDwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1ib3hcIiB2LWlmPVwiYmFja2dyb3VuZCA9PT0gMVwiIEBjbGljaz1cImNoYW5nZUJhY2tncm91bmQoMilcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udFwiIHN0eWxlPVwiZm9udC1zaXplOiAyNXB4O1wiPiYjeGU2NGM7PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMTNweDtcIj7ml6Xpl7Q8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tYm94XCIgQGNsaWNrPVwib3BlblNldHRpbmdcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udFwiIHN0eWxlPVwiZm9udC1zaXplOiAyNXB4O1wiPiYjeGU2MWQ7PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMTNweDtcIj7orr7nva48L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic2V0dGluZ1wiIDpzdHlsZT1cIntib3R0b206IHNldHRpbmdTaG93ID8gMCA6IGAtMTAwJWB9XCIgQHRvdWNoZW5kLnN0b3A+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tbmFtZVwiPuWtl+WPtzwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvblwiIEBjbGljaz1cImJpZ1NpemVcIj5BKzwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvblwiIEBjbGljaz1cInNtYWxsU2l6ZVwiPkEtPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uXCIgQGNsaWNrPVwiY2hhbmdlRm9udChmYWxzZSlcIiB2LWlmPVwic2ltcGxpZmllZFwiPue5gemrlDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvblwiIEBjbGljaz1cImNoYW5nZUZvbnQodHJ1ZSlcIiB2LWVsc2Ugc3R5bGU9XCJib3JkZXI6ICNGRjk5MDAgc29saWQgMXB4O2NvbG9yOiAjRkY5OTAwXCI+57mB6auUPC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1uYW1lXCI+5o6S54mIPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0eXBlLXNldHRpbmdcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBsaW5lSGVpZ2h0ID09PSAxfVwiIEBjbGljaz1cImNoYW5nZUxpbmVIZWlnaHQoMSlcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCIgOmNsYXNzPVwie2FjdGl2ZTogbGluZUhlaWdodCA9PT0gMX1cIiB2LWZvcj1cImkgaW4gNVwiIDprZXk9XCJpXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0eXBlLXNldHRpbmdcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBsaW5lSGVpZ2h0ID09PSAxLjV9XCIgQGNsaWNrPVwiY2hhbmdlTGluZUhlaWdodCgxLjUpXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZVwiIDpjbGFzcz1cInthY3RpdmU6IGxpbmVIZWlnaHQgPT09IDEuNX1cIiB2LWZvcj1cImkgaW4gNFwiIDprZXk9XCJpXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0eXBlLXNldHRpbmdcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBsaW5lSGVpZ2h0ID09PSAyfVwiIEBjbGljaz1cImNoYW5nZUxpbmVIZWlnaHQoMilcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCIgOmNsYXNzPVwie2FjdGl2ZTogbGluZUhlaWdodCA9PT0gMn1cIiB2LWZvcj1cImkgaW4gM1wiIDprZXk9XCJpXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1uYW1lXCI+6IOM5pmvPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vc3RhdGljL2JhY2tncm91bmQxLmpwZyk7XCIgOmNsYXNzPVwie2FjdGl2ZTogYmFja2dyb3VuZCA9PT0gMX1cIiBAY2xpY2s9XCJjaGFuZ2VCYWNrZ3JvdW5kKDEpXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1wiIDpjbGFzcz1cInthY3RpdmU6IGJhY2tncm91bmQgPT09IDJ9XCIgQGNsaWNrPVwiY2hhbmdlQmFja2dyb3VuZCgyKVwiPjwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHJcblx0XHRcdDwhLS0g55uu5b2V5bGCIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImRpcmVjdG9yeVwiIDpjbGFzcz1cIntjb250YWluZXIwOiBiYWNrZ3JvdW5kID09PSAxLCBjb250YWluZXIxOiBiYWNrZ3JvdW5kID09PSAyfVwiXHJcblx0XHRcdCA6c3R5bGU9XCJ7bGVmdDogZGlyZWN0b3J5U2hvdyA/IDAgOiAnLTEwMCUnLGNvbG9yOiBgJHtjb2xvckxpc3RbYmFja2dyb3VuZCAtIDFdfWB9XCIgIEB0b3VjaGVuZC5zdG9wPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm9va25hbWVcIj7kuablkI08L3ZpZXc+XHJcblx0XHRcdFx0PHNjcm9sbC12aWV3IHNjcm9sbC15PVwidHJ1ZVwiIGNsYXNzPVwiZGlyZWN0b3J5LWxpc3RcIiA6c2Nyb2xsLWludG8tdmlldz1cImBjaGFwdGVyJHtjaGFwdGVySWR9YFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgdi1mb3I9XCJpdGVtIG9mIGRpcmVjdG9yeUxpc3RcIiA6a2V5PVwiaXRlbS5jaGFwdGVySWRcIiBjbGFzcz1cImRpcmVjdG9yeS1saXN0SXRlbVwiIDpjbGFzcz1cInthY3RpdmU6IGl0ZW0uY2hhcHRlcklkID09PSBjaGFwdGVySWR9XCJcclxuXHRcdFx0XHRcdCA6aWQ9XCJgY2hhcHRlciR7aXRlbS5jaGFwdGVySWR9YFwiIEBjbGljaz1cImdvVG9DaGFwdGVyKGl0ZW0uY2hhcHRlcklkKVwiPlxyXG5cdFx0XHRcdFx0XHR7e2l0ZW0ubmFtZX19XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IG15UHJvZ3Jlc3MgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9teVByb2dyZXNzLnZ1ZSdcclxuXHRpbXBvcnQgYmF0dGVyeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2JhdHRlcnkudnVlJ1xyXG5cdGltcG9ydCB7IHRyYWRpdGlvbmFsaXplZCwgc2ltcGxpemVkLCBkYXRlVG9TdHIgfSBmcm9tICcuLi8uLi91dGlscy91dGlscy5qcydcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOntcclxuXHRcdFx0bXlQcm9ncmVzcyxcclxuXHRcdFx0YmF0dGVyeVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Y2hhcHRlcklkOiAnJyxcclxuXHRcdFx0XHRjaGFwdGVyTmFtZTogJycsXHJcblx0XHRcdFx0cHJlQ2hhcHRlck5hbWU6ICcnLFxyXG5cdFx0XHRcdG5leHRDaGFwdGVyTmFtZTogJycsXHJcblx0XHRcdFx0dGV4dEZpeGVkOmA8cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD5gLFxyXG5cdFx0XHRcdHRleHQ6ICcnLFxyXG5cdFx0XHRcdG5leHRUZXh0OiAnJyxcclxuXHRcdFx0XHRwcmVUZXh0OiAnJyxcclxuXHRcdFx0XHRkaXJlY3RvcnlMaXN0OiBbXSwgIC8v55uu5b2V5YiX6KGoXHJcblx0XHRcdFx0cHJlVHJhbnNsYXRlWDogMCwgIC8v5LiK5LiA56ug55qE5L2N56e7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2hvd0FuaW1hdGlvbjogZmFsc2UsIC8v5piv5ZCm5byA5ZCv5Yqo55S7XHJcblx0XHRcdFx0cGFnZXM6IFtdLFxyXG5cdFx0XHRcdHByZVBhZ2VzOiBbXSxcclxuXHRcdFx0XHRuZXh0UGFnZXM6IFtdLFxyXG5cdFx0XHRcdGNvbnRlbnRXaWR0aDogMCxcclxuXHRcdFx0XHRjb250ZW50SGVpZ2h0OiAwLFxyXG5cdFx0XHRcdHdpbmRvd1dpZHRoOiAwLFxyXG5cdFx0XHRcdHdpbmRvd0hlaWdodDogMCxcclxuXHRcdFx0XHRwbGF0Zm9ybTogJycsICAvL+iuvuWkh1xyXG5cdFx0XHRcdGJhdHRlcnlTdGF0ZTogJycsIC8v55S15rGg54q25oCBXHJcblx0XHRcdFx0YmF0dGVyeUxldmVsOiAxMDAsIC8v55S16YePXHJcblx0XHRcdFx0c3lzdGVtVGltZTogJycsICAgLy/ns7vnu5/ml7bpl7RcclxuXHRcdFx0XHRzeXN0ZW1UaW1lU3RyOiAnJywgICAvL+ezu+e7n+aXtumXtOWtl+espuS4slxyXG5cdFx0XHRcdHN0YXR1c0JhckhlaWdodDogMCwgLy/nirbmgIHmoI/pq5jluqZcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjb2x1bW5HYXA6IDQwLFxyXG5cdFx0XHRcdGN1cnJlbnRQYWdlOiAwLFxyXG5cdFx0XHRcdHRvdWNoU3RhcnRYOiAwLCAgLy8g6Kem5bGP6LW35aeL54K5XHJcblx0XHRcdFx0dG91Y2hTdGFydFQ6IDAsICAvL+inpuWxj+i1t+Wni+aXtumXtFxyXG5cdFx0XHRcdHRvdWNoVGltZXI6IG51bGwgICwvL+eUqOS6juinpuaRuOiKgua1gVxyXG5cdFx0XHRcdG1lbnVTaG93OiBmYWxzZSwgIC8v6I+c5Y2V5qCPYm945piv5ZCm5riy5p+TXHJcblx0XHRcdFx0aXRlbVNob3c6IGZhbHNlLCAgLy8g6I+c5Y2V5qCP5Yqo55S75o6n5Yi2XHJcblx0XHRcdFx0c2V0dGluZ1Nob3c6IGZhbHNlLCAgLy/orr7nva7moI/liqjnlLvmjqfliLZcclxuXHRcdFx0XHRkaXJlY3RvcnlTaG93OiBmYWxzZSwgIC8v55uu5b2V5Yqo55S75o6n5Yi2XHJcblx0XHRcdFx0dHVyblBhZ2VUaW1lOiAwLjUsICAvL+e/u+mhteWKqOeUu+aXtumXtFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvbnRTaXplOiAnJyxcclxuXHRcdFx0XHRzaW1wbGlmaWVkOiAnJyxcclxuXHRcdFx0XHRsaW5lSGVpZ2h0OiAnJyxcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAnJyxcclxuXHRcdFx0XHRjb2xvckxpc3Q6IFsnIzAwMCcsICcjNjY2J10sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bmV4dENoYXB0ZXJMb2FkZWQ6IGZhbHNlLCAgIC8v5LiL5LiA56ug5piv5ZCm5Yqg6L295a6M5q+VXHJcblx0XHRcdFx0cHJlQ2hhcHRlckxvYWRlZDogZmFsc2UsICAgLy/kuIrkuIDnq6DmmK/lkKbliqDovb3lrozmr5VcclxuXHRcdFx0XHR3YWl0Rm9yVHVybkNoYXB0ZXI6IGZhbHNlLCAgIC8v5Yqg6L2956ug6IqC5ZCO5piv5ZCm6Lez6L2s6aG16Z2iXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdHRoaXMuZ2V0U3lzdGVtSW5mbygpXHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy5pbml0UGFnZSgpXHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6e1xyXG5cdFx0XHRwcm9ncmVzcygpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jdXJyZW50UGFnZSAvICh0aGlzLnBhZ2VzLmxlbmd0aCAtIDEpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6L+U5Zue5LiK5LiA6aG16Z2iXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRiYWNrKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6I635Y+W6K6+5aSH5L+h5oGvXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRnZXRTeXN0ZW1JbmZvKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNvbnN0IHsgd2luZG93V2lkdGgsIHdpbmRvd0hlaWdodCwgc3RhdHVzQmFySGVpZ2h0LCBwbGF0Zm9ybSB9ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblx0XHRcdFx0dGhpcy5zdGF0dXNCYXJIZWlnaHQgPSBzdGF0dXNCYXJIZWlnaHQ7XHJcblx0XHRcdFx0dGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvd1dpZHRoO1xyXG5cdFx0XHRcdHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93SGVpZ2h0O1xyXG5cdFx0XHRcdHRoaXMuY29udGVudFdpZHRoID0gd2luZG93V2lkdGggLSA0MDtcclxuXHRcdFx0XHR0aGlzLmNvbnRlbnRIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSA2MDtcclxuXHRcdFx0XHR0aGlzLnBsYXRmb3JtID0gcGxhdGZvcm07XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0XHQvLyDlhajlsY9cclxuXHRcdFx0XHRcdHBsdXMubmF2aWdhdG9yLnNldEZ1bGxzY3JlZW4odHJ1ZSk7XHJcblx0XHRcdFx0XHQvLyDlj5bmtojlt6bmu5Hov5Tlm55cclxuXHRcdFx0XHRcdGxldCBwYWdlID0gdGhpcy4kbXAucGFnZS4kZ2V0QXBwV2VidmlldygpO1xyXG5cdFx0XHRcdFx0cGFnZS5zZXRTdHlsZSh7IHBvcEdlc3R1cmU6ICdub25lJyB9KTtcclxuXHRcdFx0XHRcdC8vIOiOt+WPlmlvc+eUtemHj1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMucGxhdGZvcm0gPT09ICdpb3MnKSB7XHJcblx0XHRcdFx0XHRcdGxldCBVSURldmljZSA9IHBsdXMuaW9zLmltcG9ydChcIlVJRGV2aWNlXCIpOyAgXHJcblx0XHRcdFx0XHRcdGxldCBkZXYgPSBVSURldmljZS5jdXJyZW50RGV2aWNlKCk7ICBcclxuXHRcdFx0XHRcdFx0aWYgKCFkZXYuaXNCYXR0ZXJ5TW9uaXRvcmluZ0VuYWJsZWQoKSkgeyAgXHJcblx0XHRcdFx0XHRcdCAgICBkZXYuc2V0QmF0dGVyeU1vbml0b3JpbmdFbmFibGVkKHRydWUpOyAgXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuYmF0dGVyeVN0YXRlID0gZGV2LmJhdHRlcnlTdGF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuYmF0dGVyeUxldmVsID0gZGV2LmJhdHRlcnlMZXZlbCgpICogMTAwO1xyXG5cdFx0XHRcdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQvLyDojrflj5blronljZPnlLXph49cclxuXHRcdFx0XHRcdFx0bGV0IG1haW4gPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0XHRcdFx0XHRsZXQgSW50ZW50ID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKCdhbmRyb2lkLmNvbnRlbnQuSW50ZW50Jyk7ICBcclxuXHRcdFx0XHRcdFx0bGV0IHJlY2V2aWVyID0gcGx1cy5hbmRyb2lkLmltcGxlbWVudHMoJ2lvLmRjbG91ZC5mZWF0dXJlLmludGVybmFsLnJlZmxlY3QuQnJvYWRjYXN0UmVjZWl2ZXInLCB7ICBcclxuXHRcdFx0XHRcdFx0ICAgIG9uUmVjZWl2ZTogKGNvbnRleHQsIGludGVudCkgPT4geyAgXHJcblx0XHRcdFx0XHRcdCAgICAgICAgbGV0IGFjdGlvbiA9IGludGVudC5nZXRBY3Rpb24oKTsgIFxyXG5cdFx0XHRcdFx0XHQgICAgICAgIGlmIChhY3Rpb24gPT0gSW50ZW50LkFDVElPTl9CQVRURVJZX0NIQU5HRUQpIHsgIFxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICB0aGlzLmJhdHRlcnlTdGF0ZSA9IGludGVudC5nZXRJbnRFeHRyYShcInN0YXR1c1wiLCAwKTsgLy/nlLXmsaDnirbmgIEgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmJhdHRlcnlMZXZlbCA9IGludGVudC5nZXRJbnRFeHRyYShcImxldmVsXCIsIDApOyAvL+eUtemHj1xyXG5cdFx0XHRcdFx0XHQgICAgICAgIH0gIFxyXG5cdFx0XHRcdFx0XHQgICAgfSAgXHJcblx0XHRcdFx0XHRcdCB9KTsgIFxyXG5cdFx0XHRcdFx0XHRsZXQgSW50ZW50RmlsdGVyID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKCdhbmRyb2lkLmNvbnRlbnQuSW50ZW50RmlsdGVyJyk7ICBcclxuXHRcdFx0XHRcdFx0bGV0IGZpbHRlciA9IG5ldyBJbnRlbnRGaWx0ZXIoSW50ZW50LkFDVElPTl9CQVRURVJZX0NIQU5HRUQpOyAgXHJcblx0XHRcdFx0XHRcdG1haW4ucmVnaXN0ZXJSZWNlaXZlcihyZWNldmllciwgZmlsdGVyKTsgXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyDorr7nva7ml7bpl7RcclxuXHRcdFx0XHRsZXQgZGF0ZSA9IG5ldyBEYXRlKClcclxuXHRcdFx0XHR0aGlzLnN5c3RlbVRpbWUgPSBEYXRlLnBhcnNlKGRhdGUpXHJcblx0XHRcdFx0dGhpcy5zeXN0ZW1UaW1lU3RyID0gZGF0ZVRvU3RyKHRoaXMuc3lzdGVtVGltZSlcclxuXHRcdFx0XHRzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnN5c3RlbVRpbWUgKz0gNjAwMDBcclxuXHRcdFx0XHRcdHRoaXMuc3lzdGVtVGltZVN0ciA9IGRhdGVUb1N0cih0aGlzLnN5c3RlbVRpbWUpXHJcblx0XHRcdFx0fSwgNjAwMDApXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8g6I635Y+W5a2X5L2T44CB5o6S54mI562J5L+h5oGvXHJcblx0XHRcdFx0dGhpcy5mb250U2l6ZSA9IHVuaS5nZXRTdG9yYWdlU3luYygnZm9udFNpemUnKSB8fCAxNjtcclxuXHRcdFx0XHR0aGlzLnNpbXBsaWZpZWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3NpbXBsaWZpZWQnKTtcclxuXHRcdFx0XHR0aGlzLmxpbmVIZWlnaHQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2xpbmVIZWlnaHQnKSB8fCAxLjU7XHJcblx0XHRcdFx0dGhpcy5iYWNrZ3JvdW5kID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdiYWNrZ3JvdW5kJykgfHwgMTtcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOiOt+WPluaVsOaNruWIneWni+WMlumhtemdolxyXG5cdFx0XHQqKi9cclxuXHRcdFx0YXN5bmMgaW5pdFBhZ2UoKSB7XHJcblx0XHRcdFx0dGhpcy5wcmVUcmFuc2xhdGVYID0gLXRoaXMud2luZG93V2lkdGggLSAyMDtcclxuXHRcdFx0XHRhd2FpdCB0aGlzLmdldERhdGEoKVxyXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuY2FsY1BhZ2VzKClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6K6h566X6ZiF6K+76aG16ZW/5bqmLOW5tueUn+aIkHBhZ2VzLOW5tui3s+i9rOiHs+afkOmhte+8iOWmguaenOacie+8iVxyXG5cdFx0XHQqKi9cclxuXHRcdFx0Y2FsY1BhZ2VzKHR5cGUsIHByb2dyZXNzKSB7XHJcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xyXG5cdFx0XHRcdHF1ZXJ5LnNlbGVjdCgnI3RleHQnKS5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgd2lkdGggPSBkYXRhLndpZHRoO1xyXG5cdFx0XHRcdFx0bGV0IGhlaWdodCA9IGRhdGEuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0dGhpcy5wYWdlcyA9IHRoaXMuZ2VuUGFnZXMod2lkdGgsIGhlaWdodClcclxuXHRcdFx0XHRcdGlmICh0eXBlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudFBhZ2UgPSBNYXRoLmZsb29yKCh0aGlzLnBhZ2VzLmxlbmd0aCAtIDEpICogcHJvZ3Jlc3MpXHJcblx0XHRcdFx0XHRcdHRoaXMuZ29Ub1BhZ2UodGhpcy5jdXJyZW50UGFnZSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KS5leGVjKCk7XHJcblx0XHRcdFx0dGhpcy5jYWxjUHJlUGFnZXMoKVxyXG5cdFx0XHRcdHRoaXMuY2FsY05leHRQYWdlcygpXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDorqHnrpfkuIrkuIDnq6DpmIXor7vpobXplb/luqYs5bm255Sf5oiQcGFnZXMs5bm26Lez6L2s6Iez5p+Q6aG177yI5aaC5p6c5pyJ77yJXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRjYWxjUHJlUGFnZXMoKSB7XHJcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xyXG5cdFx0XHRcdHF1ZXJ5LnNlbGVjdCgnI3ByZVRleHQnKS5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgd2lkdGggPSBkYXRhLndpZHRoO1xyXG5cdFx0XHRcdFx0bGV0IGhlaWdodCA9IGRhdGEuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0dGhpcy5wcmVQYWdlcyA9IHRoaXMuZ2VuUGFnZXMod2lkdGgsIGhlaWdodClcclxuXHRcdFx0XHRcdHRoaXMucHJlQ2hhcHRlckxvYWRlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRpZiAodGhpcy53YWl0Rm9yVHVybkNoYXB0ZXIpIHtcclxuXHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHRcdFx0dGhpcy53YWl0Rm9yVHVybkNoYXB0ZXIgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmVDaGFwdGVyKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KS5leGVjKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDorqHnrpfkuIvkuIDnq6DpmIXor7vpobXplb/luqYs5bm255Sf5oiQcGFnZXMs5bm26Lez6L2s6Iez5p+Q6aG177yI5aaC5p6c5pyJ77yJXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRjYWxjTmV4dFBhZ2VzKCkge1xyXG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdFx0XHRxdWVyeS5zZWxlY3QoJyNuZXh0VGV4dCcpLmJvdW5kaW5nQ2xpZW50UmVjdChkYXRhID0+IHtcclxuXHRcdFx0XHRcdGxldCB3aWR0aCA9IGRhdGEud2lkdGg7XHJcblx0XHRcdFx0XHRsZXQgaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XHJcblx0XHRcdFx0XHR0aGlzLm5leHRQYWdlcyA9IHRoaXMuZ2VuUGFnZXMod2lkdGgsIGhlaWdodClcclxuXHRcdFx0XHRcdHRoaXMubmV4dENoYXB0ZXJMb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMud2FpdEZvclR1cm5DaGFwdGVyKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0XHRcdHRoaXMud2FpdEZvclR1cm5DaGFwdGVyID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdHRoaXMubmV4dENoYXB0ZXIoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pLmV4ZWMoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDnlJ/miJDpmIXor7vpobVwYWdlc1xyXG5cdFx0XHQqKi9cclxuXHRcdFx0Z2VuUGFnZXMod2lkdGgsIGhlaWdodCkge1xyXG5cdFx0XHRcdGxldCBhcnIgPSBbXTtcclxuXHRcdFx0XHRsZXQgaWQgPSAwO1xyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHRcdGlmICh0aGlzLnBsYXRmb3JtID09PSAnaW9zJykge1xyXG5cdFx0XHRcdFx0d2hpbGUgKGhlaWdodCA+IDApIHtcclxuXHRcdFx0XHRcdFx0YXJyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdGlkLFxyXG5cdFx0XHRcdFx0XHRcdHpJbmRleDogMjAwIC0gaWQsXHJcblx0XHRcdFx0XHRcdFx0dHJhbnNsYXRlWDogMFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0aWQrKztcclxuXHRcdFx0XHRcdFx0aGVpZ2h0IC09IHRoaXMuY29udGVudEhlaWdodFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHdoaWxlICh3aWR0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0YXJyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdGlkLFxyXG5cdFx0XHRcdFx0XHRcdHpJbmRleDogMjAwIC0gaWQsXHJcblx0XHRcdFx0XHRcdFx0dHJhbnNsYXRlWDogMFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0aWQrKztcclxuXHRcdFx0XHRcdFx0d2lkdGggLT0gdGhpcy5jb250ZW50V2lkdGggKyB0aGlzLmNvbHVtbkdhcFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZuZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0d2hpbGUgKHdpZHRoID4gMCkge1xyXG5cdFx0XHRcdFx0YXJyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRpZCxcclxuXHRcdFx0XHRcdFx0ekluZGV4OiAyMDAgLSBpZCxcclxuXHRcdFx0XHRcdFx0dHJhbnNsYXRlWDogMFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRpZCsrO1xyXG5cdFx0XHRcdFx0d2lkdGggLT0gdGhpcy5jb250ZW50V2lkdGggKyB0aGlzLmNvbHVtbkdhcFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRyZXR1cm4gYXJyO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6Kem5pG45byA5aeLXHJcblx0XHRcdCoqL1xyXG5cdFx0XHR0b3VjaFN0YXJ0KGUpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dBbmltYXRpb24gPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLnRvdWNoU3RhcnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XHJcblx0XHRcdFx0dGhpcy50b3VjaFN0YXJ0VCA9IGUudGltZVN0YW1wO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6Kem5pG457uT5p2fXHJcblx0XHRcdCoqL1xyXG5cdFx0XHR0b3VjaEVuZChlKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93QW5pbWF0aW9uID0gdHJ1ZTtcclxuXHRcdFx0XHRsZXQgZGVsdGFYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy50b3VjaFN0YXJ0WDtcclxuXHRcdFx0XHRpZiAoZGVsdGFYID09PSAwKSB7ICAvL2RlbHRhWCA9PT0gMOS4uueCueWHu1xyXG5cdFx0XHRcdFx0aWYgKGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDx0aGlzLndpbmRvd1dpZHRoLzMpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmVQYWdlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYgKGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WD50aGlzLndpbmRvd1dpZHRoLzMqMikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5leHRQYWdlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNob3dNZW51KClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoZGVsdGFYID4gdGhpcy53aW5kb3dXaWR0aC8yKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJlUGFnZSgpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmIChkZWx0YVggPCAtdGhpcy53aW5kb3dXaWR0aC8yKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubmV4dFBhZ2UoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdGxldCB2ID0gMDtcclxuXHRcdFx0XHRcdFx0diA9IGRlbHRhWCAvIChlLnRpbWVTdGFtcCAtIHRoaXMudG91Y2hTdGFydFQpO1xyXG5cdFx0XHRcdFx0XHRpZiAodiA8PSAwLjEgJiYgdiA+IDApIHsgIC8v57+76aG16YCf5bqm5oWi77yM5Y+W5raI57+76aG1XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuY3VycmVudFBhZ2UgIT09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGFnZXNbdGhpcy5jdXJyZW50UGFnZSAtIDFdLnRyYW5zbGF0ZVggPSAtdGhpcy53aW5kb3dXaWR0aCAtIDIwO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJlVHJhbnNsYXRlWCA9IC10aGlzLndpbmRvd1dpZHRoIC0gMjA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2UgaWYgKHYgPj0gLTAuMSAmJiB2IDwgMCkgeyAgLy/nv7vpobXpgJ/luqbmhaLvvIzlj5bmtojnv7vpobVcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnBhZ2VzW3RoaXMuY3VycmVudFBhZ2VdLnRyYW5zbGF0ZVggPSAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2UgaWYodiA+IDAuMSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucHJlUGFnZSgpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSBpZiAodiA8IC0wLjEpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm5leHRQYWdlKClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOinpuaRuFxyXG5cdFx0XHQqKi9cclxuXHRcdFx0dG91Y2hNb3ZlKGUpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMudG91Y2hUaW1lcikge1xyXG5cdFx0XHRcdFx0bGV0IGRlbHRhWCA9IGUudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy50b3VjaFN0YXJ0WDtcclxuXHRcdFx0XHRcdGlmIChkZWx0YVggPCAwKSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmN1cnJlbnRQYWdlID09PSB0aGlzLnBhZ2VzLmxlbmd0aCAtIDEpIHsgIC8v5aaC5p6c57+76Iez5pyA5ZCO5LiA6aG1XHJcblx0XHRcdFx0XHRcdFx0aWYgKCF0aGlzLm5leHRDaGFwdGVyTG9hZGVkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLndhaXRGb3JUdXJuQ2hhcHRlciA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+ato+WcqOWKoOi9veS4reivt+eojeWAmSdcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMubmV4dFRleHQubGVuZ3RoID09PSAwKSB7ICAvL+WmguaenOayoeacieS4i+S4gOeroFxyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn6L+Z5piv5pyA5ZCO5LiA56ugJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGFnZXNbdGhpcy5jdXJyZW50UGFnZV0udHJhbnNsYXRlWCA9IGRlbHRhWDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlXS50cmFuc2xhdGVYID0gZGVsdGFYO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuY3VycmVudFBhZ2UgPT09IDApIHsgIC8v5aaC5p6c5piv56ys5LiA6aG1XHJcblx0XHRcdFx0XHRcdFx0aWYgKCF0aGlzLnByZUNoYXB0ZXJMb2FkZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMud2FpdEZvclR1cm5DaGFwdGVyID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5q2j5Zyo5Yqg6L295Lit6K+356iN5YCZJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5wcmVUZXh0Lmxlbmd0aCA9PT0gMCkgeyAgLy/lpoLmnpzmsqHmnInkuIrkuIDnq6BcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+i/meaYr+esrOS4gOeroCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByZVRyYW5zbGF0ZVggPSAtdGhpcy53aW5kb3dXaWR0aCArIGRlbHRhWDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlIC0gMV0udHJhbnNsYXRlWCA9IC10aGlzLndpbmRvd1dpZHRoICsgZGVsdGFYO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLnRvdWNoVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy50b3VjaFRpbWVyID0gbnVsbDtcclxuXHRcdFx0XHRcdH0sIDEwMClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDlkbzlh7roj5zljZVcclxuXHRcdFx0KiovXHJcblx0XHRcdHNob3dNZW51KCkge1xyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHRcdFx0cGx1cy5uYXZpZ2F0b3Iuc2V0RnVsbHNjcmVlbihmYWxzZSk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0dGhpcy5tZW51U2hvdyA9IHRydWU7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLml0ZW1TaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdH0sMTAwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog5YWz6Zet6I+c5Y2VXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRjbG9zZU1lbnUoKSB7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0XHRwbHVzLm5hdmlnYXRvci5zZXRGdWxsc2NyZWVuKHRydWUpO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdHRoaXMuaXRlbVNob3cgPSBmYWxzZVxyXG5cdFx0XHRcdHRoaXMuc2V0dGluZ1Nob3cgPSBmYWxzZVxyXG5cdFx0XHRcdHRoaXMuZGlyZWN0b3J5U2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLm1lbnVTaG93ID0gZmFsc2VcclxuXHRcdFx0XHR9LDMwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOWFs+mXreiPnOWNleagj++8jOWRvOWHuuiuvue9ruagj1xyXG5cdFx0XHQqKi9cclxuXHRcdFx0b3BlblNldHRpbmcoKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5pdGVtU2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNldHRpbmdTaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdH0sMzAwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog5YWz6Zet6I+c5Y2V5qCP77yM5ZG85Ye655uu5b2V5qCPXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRvcGVuRGlyZWN0b3J5KCkge1xyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHRcdFx0cGx1cy5uYXZpZ2F0b3Iuc2V0RnVsbHNjcmVlbih0cnVlKTtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHR0aGlzLml0ZW1TaG93ID0gZmFsc2VcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZGlyZWN0b3J5U2hvdyA9IHRydWVcclxuXHRcdFx0XHR9LDMwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOS4iuS4gOmhtVxyXG5cdFx0XHQqKi9cclxuXHRcdFx0cHJlUGFnZSgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jdXJyZW50UGFnZSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLnByZUNoYXB0ZXJMb2FkZWQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmVDaGFwdGVyKClcclxuXHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAoIHRoaXMucHJlVGV4dC5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfov5nmmK/nrKzkuIDnq6AnLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSAge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogdGhpcy5wcmVDaGFwdGVyTmFtZSxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmVUcmFuc2xhdGVYID0gMDtcclxuXHRcdFx0XHRcdFx0Ly8g5Yqo55S757uT5p2f5ZCO6I635Y+W5LiK5LiA56ugLOmHjee9rumhtemdolxyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnByZUNoYXB0ZXIoKVxyXG5cdFx0XHRcdFx0XHR9LCB0aGlzLnR1cm5QYWdlVGltZSoxMDAwKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0dGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlIC0gMV0udHJhbnNsYXRlWCA9IDA7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRQYWdlLS07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog5LiL5LiA6aG1XHJcblx0XHRcdCoqL1xyXG5cdFx0XHRuZXh0UGFnZSgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jdXJyZW50UGFnZSA9PT0gdGhpcy5wYWdlcy5sZW5ndGggLSAxKSB7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMubmV4dENoYXB0ZXJMb2FkZWQpIHsgIC8v5LiL5LiA56ug5pyq5Yqg6L295a6M5q+VXHJcblx0XHRcdFx0XHRcdHRoaXMubmV4dENoYXB0ZXIoKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICggdGhpcy5uZXh0VGV4dC5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfov5nmmK/mnIDlkI7kuIDnq6AnLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiB0aGlzLm5leHRDaGFwdGVyTmFtZSxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0dGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlXS50cmFuc2xhdGVYID0gLXRoaXMud2luZG93V2lkdGggLSAyMDtcclxuXHRcdFx0XHRcdFx0Ly8g5Yqo55S757uT5p2f5ZCO6I635Y+W5LiL5LiA56ugLOmHjee9rumhtemdolxyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm5leHRDaGFwdGVyKClcclxuXHRcdFx0XHRcdFx0fSwgdGhpcy50dXJuUGFnZVRpbWUqMTAwMClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnBhZ2VzW3RoaXMuY3VycmVudFBhZ2VdLnRyYW5zbGF0ZVggPSAtdGhpcy53aW5kb3dXaWR0aCAtIDIwO1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50UGFnZSsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOiOt+WPluS4i+S4gOeroCzph43nva7pobXpnaLvvIzlsIbmnKznq6Dlj5jkuLrliY3kuIDnq6DvvIzlsIbkuIvkuIDnq6Dlj5jkuLrmnKznq6DvvIzojrflj5bkuIvkuIDnq6DlhoXlrrlcclxuXHRcdFx0KiovXHJcblx0XHRcdG5leHRDaGFwdGVyKCkge1xyXG5cdFx0XHRcdGlmICghdGhpcy5uZXh0Q2hhcHRlckxvYWRlZCkge1xyXG5cdFx0XHRcdFx0dGhpcy53YWl0Rm9yVHVybkNoYXB0ZXIgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmraPlnKjliqDovb3kuK3or7fnqI3lgJknXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuY2hhcHRlcklkKys7XHJcblx0XHRcdFx0dGhpcy5wcmVUZXh0ID0gdGhpcy50ZXh0O1xyXG5cdFx0XHRcdHRoaXMudGV4dCA9IHRoaXMubmV4dFRleHQ7XHJcblx0XHRcdFx0dGhpcy5uZXh0VGV4dCA9ICcnO1xyXG5cdFx0XHRcdHRoaXMuZ2V0VGV4dCh0aGlzLmNoYXB0ZXJJZCArIDEsICduZXh0JylcclxuXHRcdFx0XHR0aGlzLnByZVBhZ2VzID0gdGhpcy5wYWdlcy5tYXAoKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHR2YWx1ZS50cmFuc2xhdGVYID0gMDtcclxuXHRcdFx0XHRcdHJldHVybiB2YWx1ZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMucGFnZXMgPSBbXS5jb25jYXQodGhpcy5uZXh0UGFnZXMpO1xyXG5cdFx0XHRcdHRoaXMubmV4dFBhZ2VzID0gW107XHJcblx0XHRcdFx0dGhpcy5wcmVDaGFwdGVyTmFtZSA9IHRoaXMuY2hhcHRlck5hbWU7XHJcblx0XHRcdFx0dGhpcy5jaGFwdGVyTmFtZSA9IHRoaXMubmV4dENoYXB0ZXJOYW1lO1xyXG5cdFx0XHRcdHRoaXMubmV4dENoYXB0ZXJOYW1lID0gJyc7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50UGFnZSA9IDA7XHJcblx0XHRcdFx0dGhpcy5nb1RvUGFnZSh0aGlzLmN1cnJlbnRQYWdlKVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6I635Y+W5LiK5LiA56ugLOmHjee9rumhtemdou+8jOWwhuacrOeroOWPmOS4uuWQjuS4gOeroO+8jOWwhuS4iuS4gOeroOWPmOS4uuacrOeroO+8jOiOt+WPluS4iuS4gOeroOWGheWuuVxyXG5cdFx0XHQqKi9cclxuXHRcdFx0cHJlQ2hhcHRlcigpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMucHJlQ2hhcHRlckxvYWRlZCkge1xyXG5cdFx0XHRcdFx0dGhpcy53YWl0Rm9yVHVybkNoYXB0ZXIgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmraPlnKjliqDovb3kuK3or7fnqI3lgJknXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucHJlVHJhbnNsYXRlWCA9IC10aGlzLndpbmRvd1dpZHRoIC0gMjA7XHJcblx0XHRcdFx0dGhpcy5jaGFwdGVySWQtLTtcclxuXHRcdFx0XHR0aGlzLm5leHRUZXh0ID0gdGhpcy50ZXh0O1xyXG5cdFx0XHRcdHRoaXMudGV4dCA9IHRoaXMucHJlVGV4dDtcclxuXHRcdFx0XHR0aGlzLnByZVRleHQgPSAnJztcclxuXHRcdFx0XHR0aGlzLmdldFRleHQodGhpcy5jaGFwdGVySWQgLSAxLCAncHJlJylcclxuXHRcdFx0XHR0aGlzLm5leHRQYWdlcyA9IHRoaXMucGFnZXMubWFwKCh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0dmFsdWUudHJhbnNsYXRlWCA9IDA7XHJcblx0XHRcdFx0XHRyZXR1cm4gdmFsdWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLnBhZ2VzID0gW10uY29uY2F0KHRoaXMucHJlUGFnZXMpO1xyXG5cdFx0XHRcdHRoaXMucHJlUGFnZXMgPSBbXTtcclxuXHRcdFx0XHR0aGlzLm5leHRDaGFwdGVyTmFtZSA9IHRoaXMuY2hhcHRlck5hbWU7XHJcblx0XHRcdFx0dGhpcy5jaGFwdGVyTmFtZSA9IHRoaXMucHJlQ2hhcHRlck5hbWU7XHJcblx0XHRcdFx0dGhpcy5wcmVDaGFwdGVyTmFtZSA9ICcnO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLnBhZ2VzLmxlbmd0aCAtIDE7XHJcblx0XHRcdFx0dGhpcy5nb1RvUGFnZSh0aGlzLmN1cnJlbnRQYWdlKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog5qC55o2u6aG156CB6Lez6L2sXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRnb1RvUGFnZShwYWdlKSB7XHJcblx0XHRcdFx0aWYgKHBhZ2UgPiB0aGlzLnBhZ2VzLmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0XHRcdHBhZ2UgPSB0aGlzLnBhZ2VzLmxlbmd0aCAtIDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuc2hvd0FuaW1hdGlvbiA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlXHJcblx0XHRcdFx0dGhpcy5wYWdlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA8IHBhZ2UpIHtcclxuXHRcdFx0XHRcdFx0dmFsdWUudHJhbnNsYXRlWCA9IC10aGlzLndpbmRvd1dpZHRoIC0gMjBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YWx1ZS50cmFuc2xhdGVYID0gMFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDliqDlpKflrZfkvZNcclxuXHRcdFx0KiovXHJcblx0XHRcdGJpZ1NpemUoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZm9udFNpemUgPCAyNSkge1xyXG5cdFx0XHRcdFx0bGV0IHByb2dyZXNzID0gdGhpcy5wcm9ncmVzcztcclxuXHRcdFx0XHRcdHRoaXMuZm9udFNpemUrKztcclxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnZm9udFNpemUnLCB0aGlzLmZvbnRTaXplKVxyXG5cdFx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNhbGNQYWdlcygxLCBwcm9ncmVzcylcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5pyA5aSn5a2X5L2TJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOe8qeWwj+Wtl+S9k1xyXG5cdFx0XHQqKi9cclxuXHRcdFx0c21hbGxTaXplKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmZvbnRTaXplID4gMTQpIHtcclxuXHRcdFx0XHRcdGxldCBwcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3M7XHJcblx0XHRcdFx0XHR0aGlzLmZvbnRTaXplLS07XHJcblx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ2ZvbnRTaXplJywgdGhpcy5mb250U2l6ZSlcclxuXHRcdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jYWxjUGFnZXMoMSwgcHJvZ3Jlc3MpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+acgOWwj+Wtl+S9kycsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDliIfmjaLnuYHkvZPnroDkvZNcclxuXHRcdFx0KiovXHJcblx0XHRcdGNoYW5nZUZvbnQodHlwZSkge1xyXG5cdFx0XHRcdGlmICghdHlwZSkgeyAgIC8v5YiH5o2i5Li657mB5L2TXHJcblx0XHRcdFx0XHR0aGlzLnRleHQgPSB0cmFkaXRpb25hbGl6ZWQodGhpcy50ZXh0KVxyXG5cdFx0XHRcdFx0dGhpcy5wcmVUZXh0ID0gdHJhZGl0aW9uYWxpemVkKHRoaXMucHJlVGV4dClcclxuXHRcdFx0XHRcdHRoaXMubmV4dFRleHQgPSB0cmFkaXRpb25hbGl6ZWQodGhpcy5uZXh0VGV4dClcclxuXHRcdFx0XHRcdHRoaXMuc2ltcGxpZmllZCA9IGZhbHNlXHJcblx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3NpbXBsaWZpZWQnLCBmYWxzZSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7ICAgLy/liIfmjaLkuLrnroDkvZNcclxuXHRcdFx0XHRcdHRoaXMudGV4dCA9IHNpbXBsaXplZCh0aGlzLnRleHQpXHJcblx0XHRcdFx0XHR0aGlzLnByZVRleHQgPSBzaW1wbGl6ZWQodGhpcy5wcmVUZXh0KVxyXG5cdFx0XHRcdFx0dGhpcy5uZXh0VGV4dCA9IHNpbXBsaXplZCh0aGlzLm5leHRUZXh0KVxyXG5cdFx0XHRcdFx0dGhpcy5zaW1wbGlmaWVkID0gdHJ1ZVxyXG5cdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdzaW1wbGlmaWVkJywgdHJ1ZSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog5pS55Y+Y6KGM6LedXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRjaGFuZ2VMaW5lSGVpZ2h0KGxpbmVIZWlnaHQpIHtcclxuXHRcdFx0XHRpZiAobGluZUhlaWdodCA9PT0gdGhpcy5saW5lSGVpZ2h0KSB7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRsZXQgcHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzO1xyXG5cdFx0XHRcdFx0dGhpcy5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcclxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnbGluZUhlaWdodCcsIHRoaXMubGluZUhlaWdodClcclxuXHRcdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jYWxjUGFnZXMoMSwgcHJvZ3Jlc3MpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOaUueWPmOiDjOaZr1xyXG5cdFx0XHQqKi9cclxuXHRcdFx0Y2hhbmdlQmFja2dyb3VuZChiYWNrZ3JvdW5kKSB7XHJcblx0XHRcdFx0aWYgKGJhY2tncm91bmQgPT09IHRoaXMuYmFja2dyb3VuZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcclxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnYmFja2dyb3VuZCcsIHRoaXMuYmFja2dyb3VuZClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDojrflj5bmlbDmja7vvIzljIXmi6zpmIXor7vliLDnrKzlh6Dnq6DvvIzku6Xlj4rliY3kuK3lkI7kuInnq6DlhoXlrrlcclxuXHRcdFx0KiovXHJcblx0XHRcdGdldERhdGEoKSB7XHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHttYXNrOiB0cnVlfSlcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8g5qih5ouf572R57uc5pe26Ze0XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHRcdFx0dGhpcy5uZXh0Q2hhcHRlckxvYWRlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJlQ2hhcHRlckxvYWRlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2hhcHRlcklkID0gMjtcclxuXHRcdFx0XHRcdFx0dGhpcy5jaGFwdGVyTmFtZSA9IGDnrKwke3RoaXMuY2hhcHRlcklkfeeroCDmtYvor5XmtYvor5VgO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnByZUNoYXB0ZXJOYW1lID0gYOesrCR7dGhpcy5jaGFwdGVySWQgLSAxfeeroCDmtYvor5XmtYvor5VgO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5leHRDaGFwdGVyTmFtZSA9IGDnrKwke3RoaXMuY2hhcHRlcklkICsgMX3nq6Ag5rWL6K+V5rWL6K+VYDtcclxuXHRcdFx0XHRcdFx0dGhpcy50ZXh0ID0gdGhpcy5jaGFwdGVySWQgKyB0aGlzLnRleHRGaXhlZDtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmVUZXh0ID0gdGhpcy5jaGFwdGVySWQgLSAxICsgdGhpcy50ZXh0Rml4ZWQ7XHJcblx0XHRcdFx0XHRcdHRoaXMubmV4dFRleHQgPSB0aGlzLmNoYXB0ZXJJZCArIDEgKyB0aGlzLnRleHRGaXhlZDtcclxuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLnNpbXBsaWZpZWQpIHsgICAvL+WIh+aNouS4uue5geS9k1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMudGV4dCA9IHRyYWRpdGlvbmFsaXplZCh0aGlzLnRleHQpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wcmVUZXh0ID0gdHJhZGl0aW9uYWxpemVkKHRoaXMucHJlVGV4dClcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm5leHRUZXh0ID0gdHJhZGl0aW9uYWxpemVkKHRoaXMubmV4dFRleHQpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdC8vIOeUn+aIkOebruW9le+8jOato+W4uOaYr+WQjuerr+S8oOi/h+adpVxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpPTE7aTw9MTAwO2krKykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGlyZWN0b3J5TGlzdC5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdGNoYXB0ZXJJZDogaSxcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU6IGDnrKwke2l956ugIOa1i+ivlea1i+ivlWBcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoKVxyXG5cdFx0XHRcdFx0fSwgMTAwMClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6I635Y+W5LiK5LiA56ug5oiW5LiL5LiA56ug5pWw5o2uXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRnZXRUZXh0KGNoYXB0ZXJJZCwgdHlwZSkge1xyXG5cdFx0XHRcdGlmICh0eXBlID09PSAnbmV4dCcpIHtcclxuXHRcdFx0XHRcdHRoaXMubmV4dENoYXB0ZXJMb2FkZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnByZUNoYXB0ZXJMb2FkZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8g5qih5ouf572R57uc5pe26Ze0XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAodHlwZSA9PT0gJ25leHQnKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR0aGlzLm5leHRUZXh0ID0gY2hhcHRlcklkICsgdGhpcy50ZXh0Rml4ZWQ7XHJcblx0XHRcdFx0XHRcdHRoaXMubmV4dENoYXB0ZXJOYW1lID0gYOesrCR7Y2hhcHRlcklkfeeroCDmtYvor5XmtYvor5VgO1xyXG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMuc2ltcGxpZmllZCkgeyAgIC8v5YiH5o2i5Li657mB5L2TXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5uZXh0VGV4dCA9IHRyYWRpdGlvbmFsaXplZCh0aGlzLm5leHRUZXh0KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmNhbGNOZXh0UGFnZXMoKVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmIChjaGFwdGVySWQgPT09IDApIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnByZVRleHQgPSAnJztcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnByZUNoYXB0ZXJOYW1lID0gJyc7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5jYWxjUHJlUGFnZXMoKVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wcmVUZXh0ID0gY2hhcHRlcklkICsgdGhpcy50ZXh0Rml4ZWQ7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wcmVDaGFwdGVyTmFtZSA9IGDnrKwke2NoYXB0ZXJJZH3nq6Ag5rWL6K+V5rWL6K+VYDtcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXRoaXMuc2ltcGxpZmllZCkgeyAgIC8v5YiH5o2i5Li657mB5L2TXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByZVRleHQgPSB0cmFkaXRpb25hbGl6ZWQodGhpcy5wcmVUZXh0KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmNhbGNQcmVQYWdlcygpXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSwgMTAwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOi3s+i9rOWIsOaMh+WumueroOiKglxyXG5cdFx0XHQqKi9cclxuXHRcdFx0Z29Ub0NoYXB0ZXIoY2hhcHRlcklkKSB7XHJcblx0XHRcdFx0dGhpcy5jbG9zZU1lbnUoKVxyXG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7bWFzazogdHJ1ZX0pXHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdC8vIOaooeaLn+e9kee7nOaXtumXtFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHRcdFx0dGhpcy5uZXh0Q2hhcHRlckxvYWRlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJlQ2hhcHRlckxvYWRlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2hhcHRlcklkID0gY2hhcHRlcklkO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNoYXB0ZXJOYW1lID0gYOesrCR7dGhpcy5jaGFwdGVySWR956ugIOa1i+ivlea1i+ivlWA7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJlQ2hhcHRlck5hbWUgPSBg56ysJHt0aGlzLmNoYXB0ZXJJZCAtIDF956ugIOa1i+ivlea1i+ivlWA7XHJcblx0XHRcdFx0XHRcdHRoaXMubmV4dENoYXB0ZXJOYW1lID0gYOesrCR7dGhpcy5jaGFwdGVySWQgKyAxfeeroCDmtYvor5XmtYvor5VgO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRleHQgPSB0aGlzLmNoYXB0ZXJJZCArIHRoaXMudGV4dEZpeGVkO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnByZVRleHQgPSB0aGlzLmNoYXB0ZXJJZCAtIDEgKyB0aGlzLnRleHRGaXhlZDtcclxuXHRcdFx0XHRcdFx0dGhpcy5uZXh0VGV4dCA9IHRoaXMuY2hhcHRlcklkICsgMSArIHRoaXMudGV4dEZpeGVkO1xyXG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMuc2ltcGxpZmllZCkgeyAgIC8v5YiH5o2i5Li657mB5L2TXHJcblx0XHRcdFx0XHRcdFx0dGhpcy50ZXh0ID0gdHJhZGl0aW9uYWxpemVkKHRoaXMudGV4dClcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnByZVRleHQgPSB0cmFkaXRpb25hbGl6ZWQodGhpcy5wcmVUZXh0KVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMubmV4dFRleHQgPSB0cmFkaXRpb25hbGl6ZWQodGhpcy5uZXh0VGV4dClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jYWxjUGFnZXMoMSwgMClcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpXHJcblx0XHRcdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0cGFnZXtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHQuaGlkZGVue1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHR9XHJcblx0Lmljb257XHJcblx0XHRcclxuXHR9XHJcblx0LmFjdGlvbntcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHotaW5kZXg6IDMwMTtcclxuXHRcdC5pdGVte1xyXG5cdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5jb250YWluZXJ7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRwYWRkaW5nOiAwcHggMjBweDtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRcdGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLDAsMCwuNCk7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0LmNoYXB0ZXJ7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0Y29sb3I6ICRtaW5vci10ZXh0LWNvbG9yO1xyXG5cdFx0XHRoZWlnaHQ6MzBweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0XHR9XHJcblx0XHQuYm90dG9tLWJhcntcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdGNvbG9yOiAkbWlub3ItdGV4dC1jb2xvcjtcclxuXHRcdFx0aGVpZ2h0OjMwcHg7XHJcblx0XHR9XHJcblx0XHQuY29udGVudHtcclxuXHRcdFx0LmJvb2staW5uZXJ7XHJcblx0XHRcdFx0dGV4dC1pbmRlbnQ6IDJlbTtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOmp1c3RpZnk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0LmNvbnRhaW5lcjB7XHJcblx0XHRiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vc3RhdGljL2JhY2tncm91bmQxLmpwZyk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblx0fVxyXG5cdC5jb250YWluZXIxe1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuXHR9XHJcblx0Lm1lbnV7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0ei1pbmRleDogMzAyO1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHRcdC5tZW51LXRvcHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuXHRcdFx0dHJhbnNpdGlvbjogdG9wIC4zcztcclxuXHRcdFx0LmhlYWR7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDQwcHg7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdFx0LmJhY2t7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRsZWZ0OiAxMHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuZGlyZWN0b3J5e1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0XHRcdHdpZHRoOiA2MDBycHg7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0dHJhbnNpdGlvbjogbGVmdCAuM3M7XHJcblx0XHRcdC5ib29rbmFtZXtcclxuXHRcdFx0XHRwYWRkaW5nOiAyMHB4IDAgMjBweCAxMHB4O1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQuZGlyZWN0b3J5LWxpc3R7XHJcblx0XHRcdFx0ZmxleDoxO1xyXG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG5cdFx0XHRcdC5kaXJlY3RvcnktbGlzdEl0ZW17XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMTBweDtcclxuXHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDQwcHg7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAjZWVlIHNvbGlkIDFweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmFjdGl2ZXtcclxuXHRcdFx0XHRcdGNvbG9yOiByZWRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5tZW51LWJvdHRvbXtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuXHRcdFx0dHJhbnNpdGlvbjogYm90dG9tIC4zcztcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdC5zaG93LXBhZ2V7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6IDUwJTtcclxuXHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTExMCUpO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cdFx0XHRcdGhlaWdodDogMzBweDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuXHRcdFx0fVxyXG5cdFx0XHQucHJvZ3Jlc3MtYm94e1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0cGFkZGluZzogMCAyMHB4O1xyXG5cdFx0XHRcdGhlaWdodDogNTBweDtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0Lml0ZW1zLWJveHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0aGVpZ2h0OiA4MHB4O1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdC5pdGVtLWJveHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5zZXR0aW5ne1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0XHRwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuXHRcdFx0dHJhbnNpdGlvbjogYm90dG9tIC4zcztcclxuXHRcdFx0Lml0ZW17XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGhlaWdodDogNzBweDtcclxuXHRcdFx0XHQuaXRlbS1uYW1le1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMTBweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuaWNvbntcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDVweCAyMHB4O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAzMnB4O1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0XHR3aWR0aDogYXV0bztcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHRcdFx0XHRib3JkZXI6ICNmZmYgc29saWQgMXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQudHlwZS1zZXR0aW5ne1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiA1cHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHRcdFx0XHR3aWR0aDogMzBweDtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdFx0XHRcdGJvcmRlcjogI2ZmZiBzb2xpZCAxcHg7XHJcblx0XHRcdFx0XHQubGluZXtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206ICNmZmYgc29saWQgMXB4OyBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5hY3RpdmV7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206ICNGRjk5MDAgc29saWQgMXB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuYWN0aXZle1xyXG5cdFx0XHRcdFx0Ym9yZGVyOiAjRkY5OTAwIHNvbGlkIDJweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
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
/* 14 */
/*!*********************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 15);

/***/ }),
/* 15 */
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

module.exports = __webpack_require__(/*! ./runtime */ 16);

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
/* 16 */
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
/* 17 */
/*!**********************************************!*\
  !*** D:/read_demo/components/myProgress.vue ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myProgress.vue?vue&type=template&id=3c753af4&scoped=true& */ 18);\n/* harmony import */ var _myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myProgress.vue?vue&type=script&lang=js& */ 20);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"3c753af4\",\n  null,\n  false,\n  _myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/myProgress.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUk7QUFDbkk7QUFDOEQ7QUFDTDs7O0FBR3pEO0FBQ3NLO0FBQ3RLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL215UHJvZ3Jlc3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjNzUzYWY0JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbXlQcm9ncmVzcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL215UHJvZ3Jlc3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiM2M3NTNhZjRcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9teVByb2dyZXNzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*****************************************************************************************!*\
  !*** D:/read_demo/components/myProgress.vue?vue&type=template&id=3c753af4&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./myProgress.vue?vue&type=template&id=3c753af4&scoped=true& */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 19 */
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
/* 20 */
/*!***********************************************************************!*\
  !*** D:/read_demo/components/myProgress.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./myProgress.vue?vue&type=script&lang=js& */ 21);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtqQixDQUFnQixvbUJBQUcsRUFBQyIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL215UHJvZ3Jlc3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9teVByb2dyZXNzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/read_demo/components/myProgress.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    total: {\n      type: Number,\n      default: 1 },\n\n    index: {\n      type: Number,\n      default: 0 } },\n\n\n  data: function data() {\n    return {\n      left: 0, //进度条最左侧位置\n      right: 0, //进度条最右侧位置\n      isTouch: false,\n      touchTimer: null, //用于触摸节流\n      percent: 0 };\n\n  },\n  mounted: function mounted() {\n    this.percent = this.index / this.total * 100;\n    this.getLocation();\n  },\n  methods: {\n\n    getLocation: function getLocation() {var _this = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.select('#progress').boundingClientRect(function (data) {\n        _this.left = data.left;\n        _this.right = data.right;\n      }).exec();\n    },\n\n    touchstart: function touchstart() {\n      this.isTouch = true;\n    },\n\n    touchend: function touchend(e) {\n      this.isTouch = false;\n      var index = this.calcIndex(e.changedTouches[0].clientX);\n      this.$emit('indexChange', index);\n      this.percent = index / this.total * 100;\n    },\n\n    touchmove: function touchmove(e) {var _this2 = this;\n      if (!this.touchTimer) {\n        var index = this.calcIndex(e.touches[0].clientX);\n        this.$emit('indexChange', index);\n        this.percent = index / this.total * 100;\n        this.touchTimer = setTimeout(function () {\n          _this2.touchTimer = null;\n        }, 100);\n      }\n    },\n\n    /**\n       * 输入位置计算index\n       **/\n    calcIndex: function calcIndex(px) {\n      var single = (this.right - this.left) / this.total;\n      var index = Math.round((px - this.left) / single);\n      index = index < 0 ? 0 : index;\n      index = index > this.total ? this.total : index;\n      return index;\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9teVByb2dyZXNzLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQURBOztBQUtBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQUxBLEVBREE7OztBQVdBLE1BWEEsa0JBV0E7QUFDQTtBQUNBLGFBREEsRUFDQTtBQUNBLGNBRkEsRUFFQTtBQUNBLG9CQUhBO0FBSUEsc0JBSkEsRUFJQTtBQUNBLGdCQUxBOztBQU9BLEdBbkJBO0FBb0JBLFNBcEJBLHFCQW9CQTtBQUNBO0FBQ0E7QUFDQSxHQXZCQTtBQXdCQTs7QUFFQSxlQUZBLHlCQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLEVBR0EsSUFIQTtBQUlBLEtBUkE7O0FBVUEsY0FWQSx3QkFVQTtBQUNBO0FBQ0EsS0FaQTs7QUFjQSxZQWRBLG9CQWNBLENBZEEsRUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FuQkE7O0FBcUJBLGFBckJBLHFCQXFCQSxDQXJCQSxFQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQSxHQUZBO0FBR0E7QUFDQSxLQTlCQTs7QUFnQ0E7OztBQUdBLGFBbkNBLHFCQW1DQSxFQW5DQSxFQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXpDQSxFQXhCQSxFIiwiZmlsZSI6IjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwicHJvZ3Jlc3MtY29udGFpbmVyXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInByb2dyZXNzLWNvbnRhaW5lcjJcIiBpZD1cInByb2dyZXNzXCIgQHRvdWNoc3RhcnQ9XCJ0b3VjaHN0YXJ0XCIgQHRvdWNoZW5kPVwidG91Y2hlbmRcIiBAdG91Y2htb3ZlPVwidG91Y2htb3ZlXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZ3Jlc3MtYm94XCI+XHJcblx0XHRcdFx0PHByb2dyZXNzIDpwZXJjZW50PVwicGVyY2VudFwiIGFjdGl2ZUNvbG9yPVwiIzAwMFwiIGJhY2tncm91bmRDb2xvcj1cIiMxYzFjMWNcIiBzdHJva2Utd2lkdGg9XCIzXCIvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmFsbC1ib3hcIiA6Y2xhc3M9XCJ7YmlnZ2VyOiBpc1RvdWNoLCBzaGFkb3c6IGlzVG91Y2h9XCIgOnN0eWxlPVwie2xlZnQ6IGAke3BlcmNlbnR9JWB9XCI+PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczp7XHJcblx0XHRcdHRvdGFsOiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0aW5kZXg6IHtcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogMFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHsgXHJcblx0XHRcdFx0bGVmdDogMCwgIC8v6L+b5bqm5p2h5pyA5bem5L6n5L2N572uXHJcblx0XHRcdFx0cmlnaHQ6IDAsICAvL+i/m+W6puadoeacgOWPs+S+p+S9jee9rlxyXG5cdFx0XHRcdGlzVG91Y2g6IGZhbHNlLCAgXHJcblx0XHRcdFx0dG91Y2hUaW1lcjogbnVsbCwgIC8v55So5LqO6Kem5pG46IqC5rWBXHJcblx0XHRcdFx0cGVyY2VudDogMCxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMucGVyY2VudCA9IHRoaXMuaW5kZXggLyB0aGlzLnRvdGFsICogMTAwXHJcblx0XHRcdHRoaXMuZ2V0TG9jYXRpb24oKVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0XHJcblx0XHRcdGdldExvY2F0aW9uKCkge1xyXG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdFx0XHRxdWVyeS5zZWxlY3QoJyNwcm9ncmVzcycpLmJvdW5kaW5nQ2xpZW50UmVjdChkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMubGVmdCA9IGRhdGEubGVmdFxyXG5cdFx0XHRcdFx0dGhpcy5yaWdodCA9IGRhdGEucmlnaHRcclxuXHRcdFx0XHR9KS5leGVjKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHR0b3VjaHN0YXJ0KCkge1xyXG5cdFx0XHRcdHRoaXMuaXNUb3VjaCA9IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdHRvdWNoZW5kKGUpIHtcclxuXHRcdFx0XHR0aGlzLmlzVG91Y2ggPSBmYWxzZVxyXG5cdFx0XHRcdGxldCBpbmRleCA9IHRoaXMuY2FsY0luZGV4KGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WClcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdpbmRleENoYW5nZScsIGluZGV4KVxyXG5cdFx0XHRcdHRoaXMucGVyY2VudCA9IGluZGV4IC8gdGhpcy50b3RhbCAqIDEwMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0dG91Y2htb3ZlKGUpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMudG91Y2hUaW1lcikge1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gdGhpcy5jYWxjSW5kZXgoZS50b3VjaGVzWzBdLmNsaWVudFgpIFxyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnaW5kZXhDaGFuZ2UnLCBpbmRleClcclxuXHRcdFx0XHRcdHRoaXMucGVyY2VudCA9IGluZGV4IC8gdGhpcy50b3RhbCAqIDEwMFxyXG5cdFx0XHRcdFx0dGhpcy50b3VjaFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMudG91Y2hUaW1lciA9IG51bGw7XHJcblx0XHRcdFx0XHR9LCAxMDApXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6L6T5YWl5L2N572u6K6h566XaW5kZXhcclxuXHRcdFx0KiovXHJcblx0XHRcdGNhbGNJbmRleChweCkge1xyXG5cdFx0XHRcdGxldCBzaW5nbGUgPSAodGhpcy5yaWdodCAtIHRoaXMubGVmdCkgLyB0aGlzLnRvdGFsXHJcblx0XHRcdFx0bGV0IGluZGV4ID0gTWF0aC5yb3VuZCgocHggLSB0aGlzLmxlZnQpIC8gc2luZ2xlKVxyXG5cdFx0XHRcdGluZGV4ID0gaW5kZXggPCAwID8gMCA6IGluZGV4XHJcblx0XHRcdFx0aW5kZXggPSBpbmRleCA+IHRoaXMudG90YWwgPyB0aGlzLnRvdGFsIDogaW5kZXhcclxuXHRcdFx0XHRyZXR1cm4gaW5kZXhcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdC5wcm9ncmVzcy1jb250YWluZXJ7XHJcblx0XHRwYWRkaW5nOiAwIDEwcHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdC5wcm9ncmVzcy1jb250YWluZXIye1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHQucHJvZ3Jlc3MtYm94e1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5iYWxsLWJveHtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0d2lkdGg6IDEwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMHB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQuc2hhZG93e1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDVweCByZ2JhKCM4ODgsLjQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5iaWdnZXJ7XHJcblx0XHRcdFx0d2lkdGg6IDIwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!*******************************************!*\
  !*** D:/read_demo/components/battery.vue ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _battery_vue_vue_type_template_id_0a161022_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battery.vue?vue&type=template&id=0a161022&scoped=true& */ 23);\n/* harmony import */ var _battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battery.vue?vue&type=script&lang=js& */ 25);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _battery_vue_vue_type_template_id_0a161022_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _battery_vue_vue_type_template_id_0a161022_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0a161022\",\n  null,\n  false,\n  _battery_vue_vue_type_template_id_0a161022_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/battery.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDMkQ7QUFDTDs7O0FBR3REO0FBQ3NLO0FBQ3RLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2JhdHRlcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhMTYxMDIyJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYmF0dGVyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2JhdHRlcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMGExNjEwMjJcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9iYXR0ZXJ5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!**************************************************************************************!*\
  !*** D:/read_demo/components/battery.vue?vue&type=template&id=0a161022&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_template_id_0a161022_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./battery.vue?vue&type=template&id=0a161022&scoped=true& */ 24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_template_id_0a161022_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_template_id_0a161022_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_template_id_0a161022_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_template_id_0a161022_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 24 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/read_demo/components/battery.vue?vue&type=template&id=0a161022&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: _vm._$s(0, "sc", "battery-container"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "battery-body"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "battery"),
            style: _vm._$s(2, "s", { width: _vm.level + "%" }),
            attrs: { _i: 2 }
          }),
          _vm._$s(3, "i", _vm.charging)
            ? _c("text", {
                staticClass: _vm._$s(3, "sc", "iconfont charging"),
                attrs: { _i: 3 }
              })
            : _vm._e()
        ]
      ),
      _c("view", {
        staticClass: _vm._$s(4, "sc", "battery-head"),
        attrs: { _i: 4 }
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 25 */
/*!********************************************************************!*\
  !*** D:/read_demo/components/battery.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./battery.vue?vue&type=script&lang=js& */ 26);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStpQixDQUFnQixpbUJBQUcsRUFBQyIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2JhdHRlcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9iYXR0ZXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/read_demo/components/battery.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    level: {\n      type: Number,\n      default: 0 },\n\n    charging: {\n      type: Boolean,\n      default: false } },\n\n\n  data: function data() {\n    return {};\n\n  },\n  mounted: function mounted() {\n  },\n  methods: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9iYXR0ZXJ5LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUFEQTs7QUFLQTtBQUNBLG1CQURBO0FBRUEsb0JBRkEsRUFMQSxFQURBOzs7QUFXQSxNQVhBLGtCQVdBO0FBQ0E7O0FBRUEsR0FkQTtBQWVBLFNBZkEscUJBZUE7QUFDQSxHQWhCQTtBQWlCQSxhQWpCQSxFIiwiZmlsZSI6IjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiYmF0dGVyeS1jb250YWluZXJcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYmF0dGVyeS1ib2R5XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmF0dGVyeVwiIDpzdHlsZT1cInt3aWR0aDogYCR7bGV2ZWx9JWB9XCI+PC92aWV3PlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250IGNoYXJnaW5nXCIgdi1pZj1cImNoYXJnaW5nXCI+JiN4ZTYyNTs8L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImJhdHRlcnktaGVhZFwiPjwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOntcclxuXHRcdFx0bGV2ZWw6IHtcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGFyZ2luZzoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7IFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdC5iYXR0ZXJ5LWNvbnRhaW5lcntcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR3aWR0aDogMjVweDtcclxuXHRcdGhlaWdodDogMTBweDtcclxuXHRcdC5iYXR0ZXJ5LWJvZHl7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0cGFkZGluZzogMXB4O1xyXG5cdFx0XHR3aWR0aDogMjJweDtcclxuXHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxcHg7XHJcblx0XHRcdGJvcmRlcjogJG1pbm9yLXRleHQtY29sb3Igc29saWQgMXB4O1xyXG5cdFx0XHQuYmF0dGVyeXtcclxuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJG1pbm9yLXRleHQtY29sb3I7XHJcblx0XHRcdH1cclxuXHRcdFx0LmNoYXJnaW5ne1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRsZWZ0OiA1MCU7XHJcblx0XHRcdFx0dG9wOiA1MCU7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMnB4O1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdFx0XHRjb2xvcjogIzMzMztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LmJhdHRlcnktaGVhZHtcclxuXHRcdFx0d2lkdGg6IDJweDtcclxuXHRcdFx0aGVpZ2h0OiA2cHg7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRtaW5vci10ZXh0LWNvbG9yO1xyXG5cdFx0fVxyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!***********************************!*\
  !*** D:/read_demo/utils/utils.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.dateToStr = dateToStr;exports.traditionalized = traditionalized;exports.simplized = simplized; /**\r\n                                                                                                                                                                                   * date转化为hh:mm\r\n                                                                                                                                                                                   */\nfunction dateToStr(date) {\n  if (typeof date !== 'number') {\n    return '';\n  }\n  date = new Date(date);\n  var hh = date.getHours();\n  var mm = date.getMinutes();\n  if (hh < 10) {\n    hh = '0' + hh;\n  }\n  if (mm < 10) {\n    mm = '0' + mm;\n  }\n  return hh + ':' + mm;\n}\nfunction simpPYStr() {\n  return '啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽劲荆兢觉决诀绝均菌钧军君峻俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座锕嗳嫒瑷暧霭谙铵鹌媪骜鳌钯呗钣鸨龅鹎贲锛荜哔滗铋筚跸苄缏笾骠飑飙镖镳鳔傧缤槟殡膑镔髌鬓禀饽钹鹁钸骖黪恻锸侪钗冁谄谶蒇忏婵骣觇禅镡伥苌怅阊鲳砗伧谌榇碜龀枨柽铖铛饬鸱铳俦帱雠刍绌蹰钏怆缍鹑辍龊鹚苁骢枞辏撺锉鹾哒鞑骀绐殚赕瘅箪谠砀裆焘镫籴诋谛绨觌镝巅钿癫铫鲷鲽铤铥岽鸫窦渎椟牍笃黩簖怼镦炖趸铎谔垩阏轭锇锷鹗颚颛鳄诶迩铒鸸鲕钫鲂绯镄鲱偾沣凫驸绂绋赙麸鲋鳆钆赅尴擀绀戆睾诰缟锆纥镉颍亘赓绠鲠诟缑觏诂毂钴锢鸪鹄鹘鸹掴诖掼鹳鳏犷匦刿妫桧鲑鳜衮绲鲧埚呙帼椁蝈铪阚绗颉灏颢诃阖蛎黉讧荭闳鲎浒鹕骅桦铧奂缳锾鲩鳇诙荟哕浍缋珲晖诨馄阍钬镬讦诘荠叽哜骥玑觊齑矶羁虿跻霁鲚鲫郏浃铗镓蛲谏缣戋戬睑鹣笕鲣鞯绛缰挢峤鹪鲛疖颌鲒卺荩馑缙赆觐刭泾迳弪胫靓阄鸠鹫讵屦榉飓钜锔窭龃锩镌隽谲珏皲剀垲忾恺铠锴龛闶钪铐骒缂轲钶锞颔龈铿喾郐哙脍狯髋诓诳邝圹纩贶匮蒉愦聩篑阃锟鲲蛴崃徕涞濑赉睐铼癞籁岚榄斓镧褴阆锒唠崂铑铹痨鳓诔缧俪郦坜苈莅蓠呖逦骊缡枥栎轹砺锂鹂疠粝跞雳鲡鳢蔹奁潋琏殓裢裣鲢魉缭钌鹩蔺廪檩辚躏绫棂蛏鲮浏骝绺镏鹨茏泷珑栊胧砻偻蒌喽嵝镂瘘耧蝼髅垆撸噜闾泸渌栌橹轳辂辘氇胪鸬鹭舻鲈脔娈栾鸾銮囵荦猡泺椤脶镙榈褛锊呒唛嬷杩劢缦镘颡鳗麽扪焖懑钔芈谧猕祢渑腼黾缈缪闵缗谟蓦馍殁镆钼铙讷铌鲵辇鲶茑袅陧蘖嗫颟蹑苎咛聍侬哝驽钕傩讴怄瓯蹒疱辔纰罴铍谝骈缥嫔钋镤镨蕲骐绮桤碛颀颃鳍佥荨悭骞缱椠钤嫱樯戗炝锖锵镪羟跄诮谯荞缲硗跷惬锲箧锓揿鲭茕蛱巯赇虮鳅诎岖阒觑鸲诠绻辁铨阕阙悫荛娆桡饪轫嵘蝾缛铷颦蚬飒毵糁缫啬铯穑铩鲨酾讪姗骟钐鳝垧殇觞厍滠畲诜谂渖谥埘莳弑轼贳铈鲥绶摅纾闩铄厮驷缌锶鸶薮馊飕锼谡稣谇荪狲唢睃闼铊鳎钛鲐昙钽锬顸傥饧铴镗韬铽缇鹈阗粜龆鲦恸钭钍抟饨箨鼍娲腽纨绾辋诿帏闱沩涠玮韪炜鲔阌莴龌邬庑怃妩骛鹉鹜饩阋玺觋硖苋莶藓岘猃娴鹇痫蚝籼跹芗饷骧缃飨哓潇骁绡枭箫亵撷绁缬陉荥馐鸺诩顼谖铉镟谑泶鳕埙浔鲟垭娅桠氩厣赝俨兖谳恹闫酽魇餍鼹炀轺鹞鳐靥谒邺晔烨诒呓峄饴怿驿缢轶贻钇镒镱瘗舣铟瘾茔莺萦蓥撄嘤滢潆璎鹦瘿颏罂镛莸铕鱿伛俣谀谕蓣嵛饫阈妪纡觎欤钰鹆鹬龉橼鸢鼋钺郓芸恽愠纭韫殒氲瓒趱錾驵赜啧帻箦谮缯谵诏钊谪辄鹧浈缜桢轸赈祯鸩诤峥钲铮筝骘栉栀轵轾贽鸷蛳絷踬踯觯锺纣绉伫槠铢啭馔颞骓缒诼镯谘缁辎赀眦锱龇鲻偬诹驺鲰镞缵躜鳟讠谫郄勐凼坂垅垴埯埝苘荬荮莜莼菰藁揸吒吣咔咝咴噘噼嚯幞岙嵴彷徼犸狍馀馇馓馕愣憷懔丬溆滟溷漤潴澹甯纟绔绱珉枧桊桉槔橥轱轷赍肷胨飚煳煅熘愍淼砜磙眍钚钷铘铞锃锍锎锏锘锝锪锫锿镅镎镢镥镩镲稆鹋鹛鹱疬疴痖癯裥襁耢颥螨麴鲅鲆鲇鲞鲴鲺鲼鳊鳋鳘鳙鞒鞴齄';\n}\nfunction ftPYStr() {\n  return '啊阿埃挨哎唉哀皚癌藹矮艾礙愛隘鞍氨安俺按暗岸胺案骯昂盎凹敖熬翺襖傲奧懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙壩霸罷爸白柏百擺佰敗拜稗斑班搬扳般頒板版扮拌伴瓣半辦絆邦幫梆榜膀綁棒磅蚌鎊傍謗苞胞包褒剝薄雹保堡飽寶抱報暴豹鮑爆杯碑悲卑北輩背貝鋇倍狽備憊焙被奔苯本笨崩繃甭泵蹦迸逼鼻比鄙筆彼碧蓖蔽畢斃毖幣庇痹閉敝弊必辟壁臂避陛鞭邊編貶扁便變卞辨辯辮遍標彪膘表鱉憋別癟彬斌瀕濱賓擯兵冰柄丙秉餅炳病並玻菠播撥缽波博勃搏鉑箔伯帛舶脖膊渤泊駁捕蔔哺補埠不布步簿部怖擦猜裁材才財睬踩采彩菜蔡餐參蠶殘慚慘燦蒼艙倉滄藏操糙槽曹草廁策側冊測層蹭插叉茬茶查碴搽察岔差詫拆柴豺攙摻蟬饞讒纏鏟產闡顫昌猖場嘗常長償腸廠敞暢唱倡超抄鈔朝嘲潮巢吵炒車扯撤掣徹澈郴臣辰塵晨忱沈陳趁襯撐稱城橙成呈乘程懲澄誠承逞騁秤吃癡持匙池遲弛馳恥齒侈尺赤翅斥熾充沖蟲崇寵抽酬疇躊稠愁籌仇綢瞅醜臭初出櫥廚躇鋤雛滁除楚礎儲矗搐觸處揣川穿椽傳船喘串瘡窗幢床闖創吹炊捶錘垂春椿醇唇淳純蠢戳綽疵茨磁雌辭慈瓷詞此刺賜次聰蔥囪匆從叢湊粗醋簇促躥篡竄摧崔催脆瘁粹淬翠村存寸磋撮搓措挫錯搭達答瘩打大呆歹傣戴帶殆代貸袋待逮怠耽擔丹單鄲撣膽旦氮但憚淡誕彈蛋當擋黨蕩檔刀搗蹈倒島禱導到稻悼道盜德得的蹬燈登等瞪凳鄧堤低滴迪敵笛狄滌翟嫡抵底地蒂第帝弟遞締顛掂滇碘點典靛墊電佃甸店惦奠澱殿碉叼雕雕刁掉吊釣調跌爹碟蝶叠諜疊丁盯叮釘頂鼎錠定訂丟東冬董懂動棟侗恫凍洞兜抖鬥陡豆逗痘都督毒犢獨讀堵睹賭杜鍍肚度渡妒端短鍛段斷緞堆兌隊對墩噸蹲敦頓囤鈍盾遁掇哆多奪垛躲朵跺舵剁惰墮蛾峨鵝俄額訛娥惡厄扼遏鄂餓恩而兒耳爾餌洱二貳發罰筏伐乏閥法琺藩帆番翻樊礬釩繁凡煩反返範販犯飯泛坊芳方肪房防妨仿訪紡放菲非啡飛肥匪誹吠肺廢沸費芬酚吩氛分紛墳焚汾粉奮份忿憤糞豐封楓蜂峰鋒風瘋烽逢馮縫諷奉鳳佛否夫敷膚孵扶拂輻幅氟符伏俘服浮涪福袱弗甫撫輔俯釜斧脯腑府腐赴副覆賦復傅付阜父腹負富訃附婦縛咐噶嘎該改概鈣蓋溉幹甘桿柑竿肝趕感稈敢贛岡剛鋼缸肛綱崗港杠篙臯高膏羔糕搞鎬稿告哥歌擱戈鴿胳疙割革葛格蛤閣隔鉻個各給根跟耕更庚羹埂耿梗工攻功恭龔供躬公宮弓鞏汞拱貢共鉤勾溝茍狗垢構購夠辜菇咕箍估沽孤姑鼓古蠱骨谷股故顧固雇刮瓜剮寡掛褂乖拐怪棺關官冠觀管館罐慣灌貫光廣逛瑰規圭矽歸龜閨軌鬼詭癸桂櫃跪貴劊輥滾棍鍋郭國果裹過哈骸孩海氦亥害駭酣憨邯韓含涵寒函喊罕翰撼捍旱憾悍焊汗漢夯杭航壕嚎豪毫郝好耗號浩呵喝荷菏核禾和何合盒貉閡河涸赫褐鶴賀嘿黑痕很狠恨哼亨橫衡恒轟哄烘虹鴻洪宏弘紅喉侯猴吼厚候後呼乎忽瑚壺葫胡蝴狐糊湖弧虎唬護互滬戶花嘩華猾滑畫劃化話槐徊懷淮壞歡環桓還緩換患喚瘓豢煥渙宦幻荒慌黃磺蝗簧皇凰惶煌晃幌恍謊灰揮輝徽恢蛔回毀悔慧卉惠晦賄穢會燴匯諱誨繪葷昏婚魂渾混豁活夥火獲或惑霍貨禍擊圾基機畸稽積箕肌饑跡激譏雞姬績緝吉極棘輯籍集及急疾汲即嫉級擠幾脊己薊技冀季伎祭劑悸濟寄寂計記既忌際繼紀嘉枷夾佳家加莢頰賈甲鉀假稼價架駕嫁殲監堅尖箋間煎兼肩艱奸緘繭檢柬堿鹼揀撿簡儉剪減薦檻鑒踐賤見鍵箭件健艦劍餞漸濺澗建僵姜將漿江疆蔣槳獎講匠醬降蕉椒礁焦膠交郊澆驕嬌嚼攪鉸矯僥腳狡角餃繳絞剿教酵轎較叫窖揭接皆稭街階截劫節莖睛晶鯨京驚精粳經井警景頸靜境敬鏡徑痙靖竟競凈炯窘揪究糾玖韭久灸九酒廄救舊臼舅咎就疚鞠拘狙疽居駒菊局咀矩舉沮聚拒據巨具距踞鋸俱句懼炬劇捐鵑娟倦眷卷絹撅攫抉掘倔爵桔傑捷睫竭潔結解姐戒藉芥界借介疥誡屆巾筋斤金今津襟緊錦僅謹進靳晉禁近燼浸盡勁荊兢覺決訣絕均菌鈞軍君峻俊竣浚郡駿喀咖卡咯開揩楷凱慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕顆科殼咳可渴克刻客課肯啃墾懇坑吭空恐孔控摳口扣寇枯哭窟苦酷庫褲誇垮挎跨胯塊筷儈快寬款匡筐狂框礦眶曠況虧盔巋窺葵奎魁傀饋愧潰坤昆捆困括擴廓闊垃拉喇蠟臘辣啦萊來賴藍婪欄攔籃闌蘭瀾讕攬覽懶纜爛濫瑯榔狼廊郎朗浪撈勞牢老佬姥酪烙澇勒樂雷鐳蕾磊累儡壘擂肋類淚棱楞冷厘梨犁黎籬貍離漓理李裏鯉禮莉荔吏栗麗厲勵礫歷利傈例俐痢立粒瀝隸力璃哩倆聯蓮連鐮廉憐漣簾斂臉鏈戀煉練糧涼梁粱良兩輛量晾亮諒撩聊僚療燎寥遼潦了撂鐐廖料列裂烈劣獵琳林磷霖臨鄰鱗淋凜賃吝拎玲菱零齡鈴伶羚淩靈陵嶺領另令溜琉榴硫餾留劉瘤流柳六龍聾嚨籠窿隆壟攏隴樓婁摟簍漏陋蘆盧顱廬爐擄鹵虜魯麓碌露路賂鹿潞祿錄陸戮驢呂鋁侶旅履屢縷慮氯律率濾綠巒攣孿灤卵亂掠略掄輪倫侖淪綸論蘿螺羅邏鑼籮騾裸落洛駱絡媽麻瑪碼螞馬罵嘛嗎埋買麥賣邁脈瞞饅蠻滿蔓曼慢漫謾芒茫盲氓忙莽貓茅錨毛矛鉚卯茂冒帽貌貿麽玫枚梅酶黴煤沒眉媒鎂每美昧寐妹媚門悶們萌蒙檬盟錳猛夢孟瞇醚靡糜迷謎彌米秘覓泌蜜密冪棉眠綿冕免勉娩緬面苗描瞄藐秒渺廟妙蔑滅民抿皿敏憫閩明螟鳴銘名命謬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌謀牟某拇牡畝姆母墓暮幕募慕木目睦牧穆拿哪吶鈉那娜納氖乃奶耐奈南男難囊撓腦惱鬧淖呢餒內嫩能妮霓倪泥尼擬妳匿膩逆溺蔫拈年碾攆撚念娘釀鳥尿捏聶孽嚙鑷鎳涅您檸獰凝寧擰濘牛扭鈕紐膿濃農弄奴努怒女暖虐瘧挪懦糯諾哦歐鷗毆藕嘔偶漚啪趴爬帕怕琶拍排牌徘湃派攀潘盤磐盼畔判叛乓龐旁耪胖拋咆刨炮袍跑泡呸胚培裴賠陪配佩沛噴盆砰抨烹澎彭蓬棚硼篷膨朋鵬捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片騙飄漂瓢票撇瞥拼頻貧品聘乒坪蘋萍平憑瓶評屏坡潑頗婆破魄迫粕剖撲鋪仆莆葡菩蒲埔樸圃普浦譜曝瀑期欺棲戚妻七淒漆柒沏其棋奇歧畦崎臍齊旗祈祁騎起豈乞企啟契砌器氣迄棄汽泣訖掐洽牽扡釬鉛千遷簽仟謙乾黔錢鉗前潛遣淺譴塹嵌欠歉槍嗆腔羌墻薔強搶橇鍬敲悄橋瞧喬僑巧鞘撬翹峭俏竅切茄且怯竊欽侵親秦琴勤芹擒禽寢沁青輕氫傾卿清擎晴氰情頃請慶瓊窮秋丘邱球求囚酋泅趨區蛆曲軀屈驅渠取娶齲趣去圈顴權醛泉全痊拳犬券勸缺炔瘸卻鵲榷確雀裙群然燃冉染瓤壤攘嚷讓饒擾繞惹熱壬仁人忍韌任認刃妊紉扔仍日戎茸蓉榮融熔溶容絨冗揉柔肉茹蠕儒孺如辱乳汝入褥軟阮蕊瑞銳閏潤若弱撒灑薩腮鰓塞賽三三傘散桑嗓喪搔騷掃嫂瑟色澀森僧莎砂殺剎沙紗傻啥煞篩曬珊苫杉山刪煽衫閃陜擅贍膳善汕扇繕墑傷商賞晌上尚裳梢捎稍燒芍勺韶少哨邵紹奢賒蛇舌舍赦攝射懾涉社設砷申呻伸身深娠紳神沈審嬸甚腎慎滲聲生甥牲升繩省盛剩勝聖師失獅施濕詩屍虱十石拾時什食蝕實識史矢使屎駛始式示士世柿事拭誓逝勢是嗜噬適仕侍釋飾氏市恃室視試收手首守壽授售受瘦獸蔬樞梳殊抒輸叔舒淑疏書贖孰熟薯暑曙署蜀黍鼠屬術述樹束戍豎墅庶數漱恕刷耍摔衰甩帥栓拴霜雙爽誰水睡稅吮瞬順舜說碩朔爍斯撕嘶思私司絲死肆寺嗣四伺似飼巳松聳慫頌送宋訟誦搜艘擻嗽蘇酥俗素速粟僳塑溯宿訴肅酸蒜算雖隋隨綏髓碎歲穗遂隧祟孫損筍蓑梭唆縮瑣索鎖所塌他它她塔獺撻蹋踏胎苔擡臺泰酞太態汰坍攤貪癱灘壇檀痰潭譚談坦毯袒碳探嘆炭湯塘搪堂棠膛唐糖倘躺淌趟燙掏濤滔絳萄桃逃淘陶討套特藤騰疼謄梯剔踢銻提題蹄啼體替嚏惕涕剃屜天添填田甜恬舔腆挑條迢眺跳貼鐵帖廳聽烴汀廷停亭庭挺艇通桐酮瞳同銅彤童桶捅筒統痛偷投頭透凸禿突圖徒途塗屠土吐兔湍團推頹腿蛻褪退吞屯臀拖托脫鴕陀馱駝橢妥拓唾挖哇蛙窪娃瓦襪歪外豌彎灣玩頑丸烷完碗挽晚皖惋宛婉萬腕汪王亡枉網往旺望忘妄威巍微危韋違桅圍唯惟為濰維葦萎委偉偽尾緯未蔚味畏胃餵魏位渭謂尉慰衛瘟溫蚊文聞紋吻穩紊問嗡翁甕撾蝸渦窩我斡臥握沃巫嗚鎢烏汙誣屋無蕪梧吾吳毋武五捂午舞伍侮塢戊霧晤物勿務悟誤昔熙析西硒矽晰嘻吸錫犧稀息希悉膝夕惜熄烯溪汐犀檄襲席習媳喜銑洗系隙戲細瞎蝦匣霞轄暇峽俠狹下廈夏嚇掀鍁先仙鮮纖鹹賢銜舷閑涎弦嫌顯險現獻縣腺餡羨憲陷限線相廂鑲香箱襄湘鄉翔祥詳想響享項巷橡像向象蕭硝霄削哮囂銷消宵淆曉小孝校肖嘯笑效楔些歇蠍鞋協挾攜邪斜脅諧寫械卸蟹懈泄瀉謝屑薪芯鋅欣辛新忻心信釁星腥猩惺興刑型形邢行醒幸杏性姓兄兇胸匈洶雄熊休修羞朽嗅銹秀袖繡墟戌需虛噓須徐許蓄酗敘旭序畜恤絮婿緒續軒喧宣懸旋玄選癬眩絢靴薛學穴雪血勛熏循旬詢尋馴巡殉汛訓訊遜迅壓押鴉鴨呀丫芽牙蚜崖衙涯雅啞亞訝焉咽閹煙淹鹽嚴研蜒巖延言顏閻炎沿奄掩眼衍演艷堰燕厭硯雁唁彥焰宴諺驗殃央鴦秧楊揚佯瘍羊洋陽氧仰癢養樣漾邀腰妖瑤搖堯遙窯謠姚咬舀藥要耀椰噎耶爺野冶也頁掖業葉曳腋夜液壹壹醫揖銥依伊衣頤夷遺移儀胰疑沂宜姨彜椅蟻倚已乙矣以藝抑易邑屹億役臆逸肄疫亦裔意毅憶義益溢詣議誼譯異翼翌繹茵蔭因殷音陰姻吟銀淫寅飲尹引隱印英櫻嬰鷹應纓瑩螢營熒蠅迎贏盈影穎硬映喲擁傭臃癰庸雍踴蛹詠泳湧永恿勇用幽優悠憂尤由郵鈾猶油遊酉有友右佑釉誘又幼迂淤於盂榆虞愚輿余俞逾魚愉渝漁隅予娛雨與嶼禹宇語羽玉域芋郁籲遇喻峪禦愈欲獄育譽浴寓裕預豫馭鴛淵冤元垣袁原援轅園員圓猿源緣遠苑願怨院曰約越躍鑰嶽粵月悅閱耘雲鄖勻隕允運蘊醞暈韻孕匝砸雜栽哉災宰載再在咱攢暫贊贓臟葬遭糟鑿藻棗早澡蚤躁噪造皂竈燥責擇則澤賊怎增憎曾贈紮喳渣劄軋鍘閘眨柵榨咋乍炸詐摘齋宅窄債寨瞻氈詹粘沾盞斬輾嶄展蘸棧占戰站湛綻樟章彰漳張掌漲杖丈帳賬仗脹瘴障招昭找沼趙照罩兆肇召遮折哲蟄轍者鍺蔗這浙珍斟真甄砧臻貞針偵枕疹診震振鎮陣蒸掙睜征猙爭怔整拯正政幀癥鄭證芝枝支吱蜘知肢脂汁之織職直植殖執值侄址指止趾只旨紙誌摯擲至致置幟峙制智秩稚質炙痔滯治窒中盅忠鐘衷終種腫重仲眾舟周州洲謅粥軸肘帚咒皺宙晝驟珠株蛛朱豬諸誅逐竹燭煮拄矚囑主著柱助蛀貯鑄築住註祝駐抓爪拽專磚轉撰賺篆樁莊裝妝撞壯狀椎錐追贅墜綴諄準捉拙卓桌琢茁酌啄著灼濁茲咨資姿滋淄孜紫仔籽滓子自漬字鬃棕蹤宗綜總縱鄒走奏揍租足卒族祖詛阻組鉆纂嘴醉最罪尊遵昨左佐柞做作坐座錒噯嬡璦曖靄諳銨鵪媼驁鰲鈀唄鈑鴇齙鵯賁錛蓽嗶潷鉍篳蹕芐緶籩驃颮飆鏢鑣鰾儐繽檳殯臏鑌髕鬢稟餑鈸鵓鈽驂黲惻鍤儕釵囅諂讖蕆懺嬋驏覘禪鐔倀萇悵閶鯧硨傖諶櫬磣齔棖檉鋮鐺飭鴟銃儔幬讎芻絀躕釧愴綞鶉輟齪鶿蓯驄樅輳攛銼鹺噠韃駘紿殫賧癉簞讜碭襠燾鐙糴詆諦綈覿鏑巔鈿癲銚鯛鰈鋌銩崠鶇竇瀆櫝牘篤黷籪懟鐓燉躉鐸諤堊閼軛鋨鍔鶚顎顓鱷誒邇鉺鴯鮞鈁魴緋鐨鯡僨灃鳧駙紱紼賻麩鮒鰒釓賅尷搟紺戇睪誥縞鋯紇鎘潁亙賡綆鯁詬緱覯詁轂鈷錮鴣鵠鶻鴰摑詿摜鸛鰥獷匭劌媯檜鮭鱖袞緄鯀堝咼幗槨蟈鉿闞絎頡灝顥訶闔蠣黌訌葒閎鱟滸鶘驊樺鏵奐繯鍰鯇鰉詼薈噦澮繢琿暉諢餛閽鈥鑊訐詰薺嘰嚌驥璣覬齏磯羈蠆躋霽鱭鯽郟浹鋏鎵蟯諫縑戔戩瞼鶼筧鰹韉絳韁撟嶠鷦鮫癤頜鮚巹藎饉縉贐覲剄涇逕弳脛靚鬮鳩鷲詎屨櫸颶鉅鋦窶齟錈鐫雋譎玨皸剴塏愾愷鎧鍇龕閌鈧銬騍緙軻鈳錁頷齦鏗嚳鄶噲膾獪髖誆誑鄺壙纊貺匱蕢憒聵簣閫錕鯤蠐崍徠淶瀨賚睞錸癩籟嵐欖斕鑭襤閬鋃嘮嶗銠鐒癆鰳誄縲儷酈壢藶蒞蘺嚦邐驪縭櫪櫟轢礪鋰鸝癘糲躒靂鱺鱧蘞奩瀲璉殮褳襝鰱魎繚釕鷯藺廩檁轔躪綾欞蟶鯪瀏騮綹鎦鷚蘢瀧瓏櫳朧礱僂蔞嘍嶁鏤瘺耬螻髏壚擼嚕閭瀘淥櫨櫓轤輅轆氌臚鸕鷺艫鱸臠孌欒鸞鑾圇犖玀濼欏腡鏍櫚褸鋝嘸嘜嬤榪勱縵鏝顙鰻麼捫燜懣鍆羋謐獼禰澠靦黽緲繆閔緡謨驀饃歿鏌鉬鐃訥鈮鯢輦鯰蔦裊隉蘗囁顢躡苧嚀聹儂噥駑釹儺謳慪甌蹣皰轡紕羆鈹諞駢縹嬪釙鏷鐠蘄騏綺榿磧頎頏鰭僉蕁慳騫繾槧鈐嬙檣戧熗錆鏘鏹羥蹌誚譙蕎繰磽蹺愜鍥篋鋟撳鯖煢蛺巰賕蟣鰍詘嶇闃覷鴝詮綣輇銓闋闕愨蕘嬈橈飪軔嶸蠑縟銣顰蜆颯毿糝繅嗇銫穡鎩鯊釃訕姍騸釤鱔坰殤觴厙灄畬詵諗瀋謚塒蒔弒軾貰鈰鰣綬攄紓閂鑠廝駟緦鍶鷥藪餿颼鎪謖穌誶蓀猻嗩脧闥鉈鰨鈦鮐曇鉭錟頇儻餳鐋鏜韜鋱緹鵜闐糶齠鰷慟鈄釷摶飩籜鼉媧膃紈綰輞諉幃闈溈潿瑋韙煒鮪閿萵齷鄔廡憮嫵騖鵡鶩餼鬩璽覡硤莧薟蘚峴獫嫻鷴癇蠔秈躚薌餉驤緗饗嘵瀟驍綃梟簫褻擷紲纈陘滎饈鵂詡頊諼鉉鏇謔澩鱈塤潯鱘埡婭椏氬厴贗儼兗讞懨閆釅魘饜鼴煬軺鷂鰩靨謁鄴曄燁詒囈嶧飴懌驛縊軼貽釔鎰鐿瘞艤銦癮塋鶯縈鎣攖嚶瀅瀠瓔鸚癭頦罌鏞蕕銪魷傴俁諛諭蕷崳飫閾嫗紆覦歟鈺鵒鷸齬櫞鳶黿鉞鄆蕓惲慍紜韞殞氳瓚趲鏨駔賾嘖幘簀譖繒譫詔釗謫輒鷓湞縝楨軫賑禎鴆諍崢鉦錚箏騭櫛梔軹輊贄鷙螄縶躓躑觶鍾紂縐佇櫧銖囀饌顳騅縋諑鐲諮緇輜貲眥錙齜鯔傯諏騶鯫鏃纘躦鱒訁譾郤猛氹阪壟堖垵墊檾蕒葤蓧蒓菇槁摣咤唚哢噝噅撅劈謔襆嶴脊仿僥獁麅餘餷饊饢楞怵懍爿漵灩混濫瀦淡寧糸絝緔瑉梘棬案橰櫫軲軤賫膁腖飈糊煆溜湣渺碸滾瞘鈈鉕鋣銱鋥鋶鐦鐧鍩鍀鍃錇鎄鎇鎿鐝鑥鑹鑔穭鶓鶥鸌癧屙瘂臒襇繈耮顬蟎麯鮁鮃鮎鯗鯝鯴鱝鯿鰠鰵鱅鞽韝齇';\n}\nfunction qqPYStr()\n{\n  return '娿婀埃挨餀呃哀皑癌蔼婑銰碍嬡隘鞍氨鮟唵洝暗岸胺案肮昻盎凹獓熬翱仸謸奧襖奧妑捌朳朳妑笆仈疤妑菝柭靶妑耙坝覇罢妑皛柏咟擺佰敗湃稗癍癍搬扳瘢頒闆蝂汾絆柈瓣柈刅绊綁幇梆徬嫎垹蜯嫎蚌镑徬谤苞菢笣褒剝薄雹湺堡怉寶砲蕔懪豹鲍嚗柸碑蕜萆苝輩揹赑钡俻狈備惫焙被渀苯夲苯镚绷甭泵嘣逬腷嬶仳啚毣彼碧蓖幣滭斃毖币庇痹閉獙弊怭澼壁臂鐴陛鞭笾揙貶碥楩變卞辧辮辮猵摽滮鏢錶鳖憋莂癟彬斌濒璸濱摈娦栤窉眪秉饼炳疒並箥菠譒妭钵菠博勃搏铂箔伯帛舶脖膊渤泊訤峬卜誧卟埠芣鈽荹簿蔀怖攃猜裁財財財棌棌采埰婇蔡爘傪蛬殘慙參灿芲舱仺獊蔵懆鐰槽蓸愺厠憡側冊恻層竲揷紁茬嗏楂楂搽镲岔槎诧拆枈豺搀傪蝉镵谗瀍铲浐闡顫誯猖畼甞瑺萇偿肠廠敞畅晿倡趫莏鈔謿謿謿漅訬炒車扯徹掣沏瞮郴烥宸尘曟忱冗陳趁衬撐稱峸橙荿珵塖珵懲僜諴承浧骋秤阣痴歭匙肔呎肔肔恥歯侈呎哧趐斥炽茺沖蟲漴寵菗絒帱帱婤僽薵仇皗瞅忸溴初炪廚廚躇鋤雛蒢篨椘绌储矗搐触處遄巛瑏椽伝船遄賗疮囱幢床闖創欥炊腄腄箠舂椿錞脣錞蒓蠢戥焯疵垐濨雌辭濨瓷詞泚剌賜佽聪茐囱茐苁苁凑粗齰簇娖蹿篡窜凗慛慛脆瘁濢濢濢籿洊籿磋撮髊措挫措溚垯荅瘩咑汏槑歹傣瀻帶殆笩贷袋待曃怠耽泹冄啴郸掸狚狚氮泹惮惔诞弹疍當澢黨蕩澢叨搗稲箌島祷导菿稲悼檤盜徳嘚哋簦燈憕等簦凳郰諟彽嘀廸敵廸狄涤翟嫡抵疧哋渧苐渧弚递缔颠掂滇碘點敟靛垫電佃甸扂惦奠淀殿淍汈鵰蜩刁鋽铞銱蜩瓞嗲渫渫迭媟疉玎饤汀町嵿鼎锭萣忊丟崬笗蓳慬憅崬侗恫岽狪兠鬦乧跿荳浢哣嘟督毐渎獨渎陼睹帾荰镀肚喥喥妒鍴短葮葮斷葮碓兌隊怼墩沌壿敦頓囤沌盾遁掇哆哆奪垛躱朶跺舵剁媠憜睋睋鹅皒额讹皒悪苊扼遏鄂皒慁洏ル洱尒聶洱②贰潑藅筏浌疺阀琺珐藩汎畨飜樊矾钒瀿汎煩反返笵贩氾粄疺汸淓汸肪房汸妨汸汸汸倣婔悱啡飛萉厞诽吠腓廢沸曊棼酚玢氛汾妢墳焚汾帉奮妢忿濆粪仹崶猦蜂峯峯颩瘋烽漨溤漨讽唪鳯仏娝玞敷膚孵荴拂辐諨氟苻茯俘棴捊涪湢袱弗甫抚辅椨釜釡脯腑椨腐赴諨覆賦復傅苻阜父腹萯冨讣胕妇缚咐噶嗄姟妀漑鈣葢漑迀苷杆柑芉肝迀憾秆噉赣罓碙鋼矼釭罁罓港釭禞皋滈膏餻溔鎬鎬鎬哠滒戨擱戈鸽胳疙剨愅噶咯蛤阁隔铬個茖给艮茛畊浭菮羹埂耿梗笁糼糼塨龚栱匑厷営弖巩汞珙貢珙溝芶芶苟豞垢媾媾夠辜菇咕箍诂钴箛菇鼔咕蛊嗗唂骰诂顧凅雇剮呱剮寡啩啩乖枴怪菅関菅蒄觀涫菅潅遦潅遦洸広迋瑰規圭硅歸亀閨匦媿詭癸蓕匱蛫貴刽辊蔉輥煱漷國淉裹過铪骸陔嗨氦亥嗐骇酣憨邯韓浛凾寒凾諴癷翰撼捍猂憾悍猂汙漢夯忼航壕嚎濠毫郝恏秏呺滘哬曷嗬菏劾秝啝哬匼盉貉阂菏涸赫褐鹤哿潶嫼痕佷哏悢涥悙橫蘅恆轟晎烘渱鴻葓宖宖葒糇糇糇犼厚糇後苸苸唿瑚壺煳箶箶狐煳煳弧唬唬戶沍戶戶埖蕐澕磆磆畵劃囮話槐佪懷准壞歡寰桓還緩換漶喚痪豢焕涣宦抝巟巟曂磺蝗簧瑝瑝瑝瑝愰縨恍巟洃媈媈幑恢蛔冋毇珻慧卉惠珻贿秽浍烩匯讳诲浍荤涽殙魂渾婫豁萿钬焱镬戓惑靃貨禍击圾樭僟畸稽積箕肌饥迹噭讥鶏姬绩缉咭极棘辑籍潗彶喼疾汲旣嫉级哜凢脊己蓟技冀悸伎祭剂悸哜寄寂計汜旣忌漈继汜嘉枷夾佳傢咖荚颊贾曱钾徦糘價泇駕糘姧盬堅尖笺簡煎凲肩艰奷缄茧撿柬碱硷拣撿彅倹彅諴薦槛鉴践濺見楗箭件揵舰劍饯渐溅涧踺壃葁將槳茳彊蔣桨奨講匠醬夅蕉椒礁潐烄茭郊浇嬌嬌嚼搅铰矫侥腳烄角饺儌烄剿嘋酵轿珓嘂窖揭帹湝秸街阶截劫兯莖聙瞐鯨倞驚棈粳經丼檠憬頸靜璄擏傹徑痉靖獍競凈泂僒啾究糾玖韭玖灸勼氿厩慦舊臼舅咎僦咎鞠佝狙疽劇驹匊挶咀怇舉沮藂岠琚姖倶岠踞涺倶呴惧岠涺涓鵑涓惓眷捲涓瘚攫決崛崛嚼桔傑啑睫竭洁結解姐悈藉芥鎅徣夰疥诫屆凧荕釿唫妗珒噤緊婂僅殣琎靳晉噤菦烬锓浕勁荊兢覺吷吷蕝汮箘呁軍焄浚浚浚浚郡浚喀咖鉲咯閞揩揩剀慨刋堪勘坎歃看嫝嵻嵻摃忼囥忼栲洘栲靠坷岢柯錁溘錁萪涜嗑妸渇尅尅愙錁肻肻恳垦妔妔涳恐芤啌摳囗釦簆喖哭崫楛酷厙褲洿垮挎跨胯赽筷侩赽寬窾匡筺誑框纩洭纩況扝盔岿窺葵喹魁傀潰隗潰堒崐涃涃葀拡霩闊柆菈喇臘臘辣菈莱唻攋藍漤孄拦藍阑蘭瀾谰灠灠攋灠灡嚂哴蓈哴蓢蓢蓢烺崂崂窂荖佬粩絡絡崂嘞泺檑檑檑藞蔂儡垒檑叻類汨棱楞唥厘悡犁黎篱狸蓠漓理李里鲤礼莉荔吏栗婯疠励砾呖悡傈唎俐痢竝粒沥隶劦璃哩唡聅嗹涟镰廉憐涟帘潋臉嗹戀煉煉悢涼樑粱悢倆唡糧涼煷涼嫽窷獠療獠寥辽潦孒撂镣漻料烮煭烮挘獵啉啉潾霖臨鄰潾啉凛賃悋柃玪夌蕶齡玪伶玪夌靈夌玪領叧泠媹琉媹硫馏畱嚠媹蓅栁陸瀧聾茏茏窿湰泷泷茏溇溇嵝溇屚陋廬盧颅廬爐掳卤虏噜麓碌蕗蕗赂蔍潞禄淥陸戮馿焒焒佀膂履屢缕慮氯侓卛慮淥欒孌孿滦卵亂稤畧囵囵囵仑囵纶囵囉螺囉羅囉儸骡裸落詻詻絡媽嫲犸犸犸骉罵嫲嬤埋荬麥賣邁霡慲獌蠻慲嫚嫚嫚嫚谩笀汒吂氓杧漭貓罞锚毝罞铆茆茂萺萺邈貿庅坆枚烸酶苺湈莈葿媒镁烸羙昧寐妺媚閄悶們萠懞檬擝锰掹夢掹侎醚靡糜洣洣弥洣秘觅泌滵滵幂婂眠婂冕凂勉娩缅媔媌媌媌邈仯緲庿仯篾搣姄抿皿勄悯閩眀螟嘄佲洺掵繆嗼摹嚤嗼嗼嚤嚤嚤沬沬嗼嚜默沬嗼寞帞湈哞湈拇牡畝姆毋募暮募募慕朩朩睦牧穆嗱哪妠妠哪哪妠氖釢艿恧柰遖莮難灢撓悩悩閙淖迡浽禸嫰能妮霓淣狔胒抳沵嫟膩屰溺蔫秥姩碾撵捻淰娘酿茑杘涅嗫糵啮嗫镍涅您柠狞凝苧拧泞犇沑妞狃哝哝哝挵伮怓伮囡煖疟疟挪穤穤喏呃瓯瓯瓯耦嘔耦沤啪汃瓟啪啪琶啪棑簰棑湃哌襻瀋盤磐昐溿叛判乓厐臱耪眫拋垉铇垉垉垉垉怌胚掊裴婄婄蓜姵沛濆湓泙抨烹澎憉莑堋硼篷膨萠鵬唪湴坯砒噼纰怶噼琵毗啤裨疲怶苉痞僻庇譬萹媥爿騙彯慓瓢嘌潎潎拚頻貧闆娉乒岼泙泙岼憑甁评屛岥秡櫇嘙岥魄廹粕剖圤舗圤莆匍箁蒲逋圤圃普浦鐠曝鑤剘剘栖嘁悽⑦凄漆柒沏娸諆渏忮畦崎脐斉旗祈祁騏起豈阣佱晵契砌噐氣迄棄汽淇讫拤洽撁扦钎鉛芉迁簽仟嗛墘黔錢钳湔濳遣淺谴堑嵌芡嗛熗濸腔羌嫱嫱強熗橇锹毃佾喬趭喬喬巧鞘毳趬峭佾竅苆苆苴愜苆钦埐儭蓁噖懄芹檎噙寑沁圊輕氢傾卿凊擎啨氰凊頃埥庆琼窮偢坵邱浗浗囚媨泅趋岖蛆浀軀屈駆渠掫婜龋趣厾圜颧權醛葲洤痊拳吠券勧蒛炔瘸卻鹊榷確雀峮羣嘫嘫姌媣瓤壤攘孃讓隢擾隢惹慹壬芢亾涊韧姙認刄妊纫扔仍ㄖ戎茸嫆荣瀜嫆嫆嫆絨冗渘渘禸筎蠕濡孺洳媷乳肗叺褥軟朊惢瑞銳潤潤婼弜潵灑蕯腮鳃噻噻彡叁傘潵鎟鎟喪搔騒掃溲瑟脃澀潹僧莏唦摋閷乷纱傻倽繺篩曬姍苫杉屾剼煽釤閁陝擅赡膳僐訕傓缮墒傷啇賞晌仩尙裳哨哨哨燒芍汋韶仯哨卲袑奢赊虵舙舎赦摂射慑渉涻蔎砷妽呻訷裑堔娠訷鉮瀋谉嬸卙腎慎椮殸泩甥狌圱繩渻墭乗夝聖溮妷浉湤濕詩迉虱拾坧湁溡什喰蚀實識史矢使屍馶始鉽沶仕迣枾倳拭誓迣勢湜嗜噬适仕侍释飾氏巿恃厔視鉽荍掱渞垨壽涭售辤痩獣蔬枢梳姝杼瀭埱忬蔋疏書赎孰孰薯濐曙署蜀黍癙屬朮沭樹娕戍竪墅庶薮漱恕唰耍摔缞甩帥拴拴灀叒摤誰渁腄挩吮橓順橓説碩朔爍凘凘凘偲俬呞噝屍肆峙嗣④伺姒饲巳菘聳怂頌鎹浨讼誦溲艘擞嗽蘇酥俗嫊趚粟僳愬溯蹜訴歗酸祘匴虽陏隨浽髓誶嵗穗嬘隧祟孫損笋蓑逡逡縮鎖鎍鎻葰禢彵咜咜嗒獭挞蹋沓胎苔孡珆溙酞忲忲呔坍摊貪瘫滩墵檀痰憛谭談钽毯袒湠探嘆湠饧溏搪漟橖膛瑭溏倘躺淌趟烫匋濤瑫绦匋洮洮匋匋討套特駦駦庝誊珶剔踢锑諟趧渧渧軆櫕嚏惕珶珶屟兲婖瑱甶甛恬婖睓狣條迢眺朓萜鉄萜廰厛烃汀侹渟渟侹侹艇嗵秱酮瞳哃恫浵僮硧硧茼統痌偸投頭透凸禿湥圖徙蒤凃廜汢汢兎湍團蓷颓蹆蜕蹆蹆昋屯臀柂仛脫袉拕駞袉椭鋖沰唾挖哇蛙哇哇咓襪歪迯豌塆塆琓顽汍烷唍涴梚脕皖惋宛啘萭腕忹迋匄忹蛧暀忹朢莣妄媙蘶嶶佹韦違桅圍惟惟潙潍惟苇崣逶偉沩屗纬沬墛菋嵔媦嵔蘶莅渭媦墛墛衞瘟溫螡妏聞鈫沕穏紊問滃暡瓮挝窩煱窉莪斡臥楃沃莁嗚钨烏汚莁偓嘸蕪梧圄呉毋娬伍圄吘橆⑤侮坞戊霚晤粅匢務圄誤厝凞唽覀硒矽晰嘻扱唶犠浠息唏悉膝汐厝熄烯渓汐犀檄袭席習媳禧铣冼係隙戱細磍虾匣葭轄叚浹浹浹芐厦嗄圷锨锨姺佡鮮汘咸賢銜舷娴涎妶溓显険哯獻縣腺陥羨宪陥限線楿厢镶萫葙襄湘芗翔祥詳想姠啍頙巷潒潒姠潒簘硝霄萷涍嚣销消宵淆哓尒涍校肖啸笑效楔些歇蝎嚡拹挾携峫斜脅喈冩悈啣蟹澥绁瀉塮屑蕲芯锌俽厗噺忻杺信衅暒睲睲瑆興鉶侀形郉垳瑆圉莕悻狌兇兇洶匈汹雄熋咻俢饈朽溴琇莠袖绣歔戌濡歔歔湏俆汻蓄酗溆旮垿畜恤絮胥緒續蓒媗媗悬嫙玆選癣妶絢靴薛敩泬膤洫勛熏揗洵咰浔紃廵咰卂訓卂遜卂壓呷鴉鴨吖吖厊厊蚜崖衙涯蕥啞亞冴漹咽阉煙殗鹽嚴妍蜒啱娫訁顔閻烾沿奄殗眼衍湮滟堰嬿厭砚雁唁彦熖匽谚験殃姎鴦秧昜婸佯疡咩樣陽氧卬癢養樣羕撽崾岆愮愮尧滛窰愮烑吆舀葯婹耀倻噎倻爺嘢冶竾頁掖鄴旪曳腋液液①壹悘揖铱畩吚扆颐夷遗簃儀胰寲沂宜侇彝掎蚁掎巳乁矣姒兿抑昜邑屹億役臆逸肄疫洂裔嬑藙忆義谥溢诣议谊譯異翼翌绎筃荫洇殷堷隂絪荶檭婬夤飮吚吲陻茚渶璎璎鹰應缨瑩萤營荧蝇迊赢盁影颕哽眏喲砽砽臃痈滽澭踊蛹怺怺悀怺恿湧鼡豳沋滺沋尤甴邮铀沋怞遊酉洧伖祐祐釉诱叒孧扜菸纡盂榆虞愚舆悇揄揄渔揄揄渔隅予娯雨玙屿禹荢娪羽砡域芋喐吁喁喻峪御匬慾獄唷謍浴寓裕預豫驭鴛棩寃沅垣媴厡瑗辕圎園園猿羱緣逺夗蒝葾阮曰箹樾跞钥捳粵仴哾閱秐囩郧枃殒狁運藴酝暈韻夃匝咂卆酨酨災宰酨侢茬洎瓒暫瓒賍賍髒蹧蹧凿藻栆皁璪蚤璪璪慥唣灶璪嫧萚荝澤賊怎熷璔嶒熷紥喳碴札轧铡閘喳栅搾咋咋怍怍擿斋宅搾債寨瞻毡詹秥跕盏斬辗崭蹍蘸棧颭戰跕偡綻樟嶂彰漳張礃涨粀扙賬账扙胀瘴障妱昭找沼趙燳罩狣肇佋嗻菥悊蛰辙鍺锗蔗適淅沴斟嫃甄砧臻浈針浈忱疹沴震桭鎮俥篜諍諍姃狰踭姃整拯囸炡帧症鄭姃芷汥伎汥倁倁汥脂汥と枳轵矗淔殖秇惪侄歮栺圵趾呮旨衹梽挚掷臸臸置帜峙淛潪秩雉質炙痔滞菭窒狆盅筗妕衷蔠種妕偅仲衆洀淍詶詶诌粥轴肘帚咒皺宙昼骤咮株咮咮蕏渚诛豩艸烛煑拄瞩瞩炷著炷莇蛀贮铸茿炷炷柷驻抓爪跩抟磚啭撰賺篆桩圧裝妝獞匨匨椎锥搥赘墜綴谆痽浞炪婥棹琢茁酌啄着灼浊兹恣粢恣稵淄孜橴仔籽滓ふ洎渍牸鬃琮琮崈琮縂枞邹趉楱楱蒩娖卒蔟袓蒩蒩蒩鑽纂觜酔朂嶵澊噂葃咗佐柞莋莋唑蓙錒噯嬡璦曖靄諳銨鵪媼驁鰲鈀唄鈑鴇齙鵯賁錛蓽嗶潷鉍篳蹕芐緶籩驃颮飆鏢鑣鰾儐繽檳殯臏鑌髕鬢稟餑鈸鵓鈽驂黲惻鍤儕釵囅諂讖蕆懺嬋驏覘禪鐔倀萇悵閶鯧硨傖諶櫬磣齔棖檉鋮鐺飭鴟銃儔幬讎芻絀躕釧愴綞鶉輟齪鶿蓯驄樅輳攛銼鹺噠韃駘紿殫賧癉簞讜碭襠燾鐙糴詆諦綈覿鏑巔鈿癲銚鯛鰈鋌銩崠鶇竇瀆櫝牘篤黷籪懟鐓燉躉鐸諤堊閼軛鋨鍔鶚顎顓鱷誒邇鉺鴯鮞鈁魴緋鐨鯡僨灃鳧駙紱紼賻麩鮒鰒釓賅尷搟紺戇睪誥縞鋯紇鎘潁亙賡綆鯁詬緱覯詁轂鈷錮鴣鵠鶻鴰摑詿摜鸛鰥獷匭劌媯檜鮭鱖袞緄鯀堝咼幗槨蟈鉿闞絎頡灝顥訶闔蠣黌訌葒閎鱟滸鶘驊樺鏵奐繯鍰鯇鰉詼薈噦澮繢琿暉諢餛閽鈥鑊訐詰薺嘰嚌驥璣覬齏磯羈蠆躋霽鱭鯽郟浹鋏鎵蟯諫縑戔戩瞼鶼筧鰹韉絳韁撟嶠鷦鮫癤頜鮚巹藎饉縉贐覲剄涇逕弳脛靚鬮鳩鷲詎屨櫸颶鉅鋦窶齟錈鐫雋譎玨皸剴塏愾愷鎧鍇龕閌鈧銬騍緙軻鈳錁頷齦鏗嚳鄶噲膾獪髖誆誑鄺壙纊貺匱蕢憒聵簣閫錕鯤蠐崍徠淶瀨賚睞錸癩籟嵐欖斕鑭襤閬鋃嘮嶗銠鐒癆鰳誄縲儷酈壢藶蒞蘺嚦邐驪縭櫪櫟轢礪鋰鸝癘糲躒靂鱺鱧蘞奩瀲璉殮褳襝鰱魎繚釕鷯藺廩檁轔躪綾欞蟶鯪瀏騮綹鎦鷚蘢瀧瓏櫳朧礱僂蔞嘍嶁鏤瘺耬螻髏壚擼嚕閭瀘淥櫨櫓轤輅轆氌臚鸕鷺艫鱸臠孌欒鸞鑾圇犖玀濼欏腡鏍櫚褸鋝嘸嘜嬤榪勱縵鏝顙鰻麼捫燜懣鍆羋謐獼禰澠靦黽緲繆閔緡謨驀饃歿鏌鉬鐃訥鈮鯢輦鯰蔦裊隉蘗囁顢躡苧嚀聹儂噥駑釹儺謳慪甌蹣皰轡紕羆鈹諞駢縹嬪釙鏷鐠蘄騏綺榿磧頎頏鰭僉蕁慳騫繾槧鈐嬙檣戧熗錆鏘鏹羥蹌誚譙蕎繰磽蹺愜鍥篋鋟撳鯖煢蛺巰賕蟣鰍詘嶇闃覷鴝詮綣輇銓闋闕愨蕘嬈橈飪軔嶸蠑縟銣顰蜆颯毿糝繅嗇銫穡鎩鯊釃訕姍騸釤鱔坰殤觴厙灄畬詵諗瀋謚塒蒔弒軾貰鈰鰣綬攄紓閂鑠廝駟緦鍶鷥藪餿颼鎪謖穌誶蓀猻嗩脧闥鉈鰨鈦鮐曇鉭錟頇儻餳鐋鏜韜鋱緹鵜闐糶齠鰷慟鈄釷摶飩籜鼉媧膃紈綰輞諉幃闈溈潿瑋韙煒鮪閿萵齷鄔廡憮嫵騖鵡鶩餼鬩璽覡硤莧薟蘚峴獫嫻鷴癇蠔秈躚薌餉驤緗饗嘵瀟驍綃梟簫褻擷紲纈陘滎饈鵂詡頊諼鉉鏇謔澩鱈塤潯鱘埡婭椏氬厴贗儼兗讞懨閆釅魘饜鼴煬軺鷂鰩靨謁鄴曄燁詒囈嶧飴懌驛縊軼貽釔鎰鐿瘞艤銦癮塋鶯縈鎣攖嚶瀅瀠瓔鸚癭頦罌鏞蕕銪魷傴俁諛諭蕷崳飫閾嫗紆覦歟鈺鵒鷸齬櫞鳶黿鉞鄆蕓惲慍紜韞殞氳瓚趲鏨駔賾嘖幘簀譖繒譫詔釗謫輒鷓湞縝楨軫賑禎鴆諍崢鉦錚箏騭櫛梔軹輊贄鷙螄縶躓躑觶鍾紂縐佇櫧銖囀饌顳騅縋諑鐲諮緇輜貲眥錙齜鯔傯諏騶鯫鏃纘躦鱒訁譾郤猛氹阪壟堖垵墊檾蕒葤蓧蒓菇槁摣咤唚哢噝噅撅劈謔襆嶴脊仿僥獁麅餘餷饊饢楞怵懍爿漵灩混濫瀦淡寧糸絝緔瑉梘棬案橰櫫軲軤賫膁腖飈糊煆溜湣渺碸滾瞘鈈鉕鋣銱鋥鋶鐦鐧鍩鍀鍃錇鎄鎇鎿鐝鑥鑹鑔穭鶓鶥鸌癧屙瘂臒襇繈耮顬蟎麯鮁鮃鮎鯗鯝鯴鱝鯿鰠鰵鱅鞽韝齇';\n}\nfunction traditionalized(cc) {\n  var str = '';\n  for (var i = 0; i < cc.length; i++) {\n    if (simpPYStr().indexOf(cc.charAt(i)) != -1)\n    str += ftPYStr().charAt(simpPYStr().indexOf(cc.charAt(i)));else\n    if (qqPYStr().indexOf(cc.charAt(i)) != -1)\n    str += ftPYStr().charAt(qqPYStr().indexOf(cc.charAt(i)));else\n\n    str += cc.charAt(i);\n  }\n  return str;\n}\nfunction simplized(cc) {\n  var str = '';\n  for (var i = 0; i < cc.length; i++) {\n    if (ftPYStr().indexOf(cc.charAt(i)) != -1)\n    str += simpPYStr().charAt(ftPYStr().indexOf(cc.charAt(i)));else\n    if (qqPYStr().indexOf(cc.charAt(i)) != -1)\n    str += simpPYStr().charAt(qqPYStr().indexOf(cc.charAt(i)));else\n\n    str += cc.charAt(i);\n  }\n  return str;\n}\nfunction qqlized(cc) {\n  var str = '';\n  for (var i = 0; i < cc.length; i++) {\n    if (ftPYStr().indexOf(cc.charAt(i)) != -1)\n    str += qqPYStr().charAt(ftPYStr().indexOf(cc.charAt(i)));else\n    if (simpPYStr().indexOf(cc.charAt(i)) != -1)\n    str += qqPYStr().charAt(simpPYStr().indexOf(cc.charAt(i)));else\n\n    str += cc.charAt(i);\n  }\n  return str;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvdXRpbHMuanMiXSwibmFtZXMiOlsiZGF0ZVRvU3RyIiwiZGF0ZSIsIkRhdGUiLCJoaCIsImdldEhvdXJzIiwibW0iLCJnZXRNaW51dGVzIiwic2ltcFBZU3RyIiwiZnRQWVN0ciIsInFxUFlTdHIiLCJ0cmFkaXRpb25hbGl6ZWQiLCJjYyIsInN0ciIsImkiLCJsZW5ndGgiLCJpbmRleE9mIiwiY2hhckF0Iiwic2ltcGxpemVkIiwicXFsaXplZCJdLCJtYXBwaW5ncyI6InFLQUFBOzs7QUFHTyxTQUFTQSxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUMvQixNQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDN0IsV0FBTyxFQUFQO0FBQ0E7QUFDREEsTUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU0QsSUFBVCxDQUFQO0FBQ0EsTUFBSUUsRUFBRSxHQUFHRixJQUFJLENBQUNHLFFBQUwsRUFBVDtBQUNBLE1BQUlDLEVBQUUsR0FBR0osSUFBSSxDQUFDSyxVQUFMLEVBQVQ7QUFDQSxNQUFJSCxFQUFFLEdBQUMsRUFBUCxFQUFXO0FBQ1ZBLE1BQUUsR0FBRyxNQUFNQSxFQUFYO0FBQ0E7QUFDRCxNQUFJRSxFQUFFLEdBQUMsRUFBUCxFQUFXO0FBQ1ZBLE1BQUUsR0FBRyxNQUFNQSxFQUFYO0FBQ0E7QUFDRCxTQUFPRixFQUFFLEdBQUcsR0FBTCxHQUFXRSxFQUFsQjtBQUNBO0FBQ0QsU0FBU0UsU0FBVCxHQUFvQjtBQUNoQixTQUFPLDBySkFBUDtBQUNIO0FBQ0QsU0FBU0MsT0FBVCxHQUFrQjtBQUNkLFNBQU8sMHJKQUFQO0FBQ0g7QUFDRCxTQUFTQyxPQUFUO0FBQ0E7QUFDQSxTQUFPLDBySkFBUDtBQUNDO0FBQ00sU0FBU0MsZUFBVCxDQUF5QkMsRUFBekIsRUFBNEI7QUFDL0IsTUFBSUMsR0FBRyxHQUFDLEVBQVI7QUFDQSxPQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ0YsRUFBRSxDQUFDRyxNQUFqQixFQUF3QkQsQ0FBQyxFQUF6QixFQUE0QjtBQUN4QixRQUFHTixTQUFTLEdBQUdRLE9BQVosQ0FBb0JKLEVBQUUsQ0FBQ0ssTUFBSCxDQUFVSCxDQUFWLENBQXBCLEtBQW1DLENBQUMsQ0FBdkM7QUFDSUQsT0FBRyxJQUFFSixPQUFPLEdBQUdRLE1BQVYsQ0FBaUJULFNBQVMsR0FBR1EsT0FBWixDQUFvQkosRUFBRSxDQUFDSyxNQUFILENBQVVILENBQVYsQ0FBcEIsQ0FBakIsQ0FBTCxDQURKO0FBRUssUUFBR0osT0FBTyxHQUFHTSxPQUFWLENBQWtCSixFQUFFLENBQUNLLE1BQUgsQ0FBVUgsQ0FBVixDQUFsQixLQUFpQyxDQUFDLENBQXJDO0FBQ0RELE9BQUcsSUFBRUosT0FBTyxHQUFHUSxNQUFWLENBQWlCUCxPQUFPLEdBQUdNLE9BQVYsQ0FBa0JKLEVBQUUsQ0FBQ0ssTUFBSCxDQUFVSCxDQUFWLENBQWxCLENBQWpCLENBQUwsQ0FEQzs7QUFHREQsT0FBRyxJQUFFRCxFQUFFLENBQUNLLE1BQUgsQ0FBVUgsQ0FBVixDQUFMO0FBQ1A7QUFDRCxTQUFPRCxHQUFQO0FBQ0g7QUFDTSxTQUFTSyxTQUFULENBQW1CTixFQUFuQixFQUFzQjtBQUN6QixNQUFJQyxHQUFHLEdBQUMsRUFBUjtBQUNBLE9BQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDRixFQUFFLENBQUNHLE1BQWpCLEVBQXdCRCxDQUFDLEVBQXpCLEVBQTRCO0FBQ3hCLFFBQUdMLE9BQU8sR0FBR08sT0FBVixDQUFrQkosRUFBRSxDQUFDSyxNQUFILENBQVVILENBQVYsQ0FBbEIsS0FBaUMsQ0FBQyxDQUFyQztBQUNJRCxPQUFHLElBQUVMLFNBQVMsR0FBR1MsTUFBWixDQUFtQlIsT0FBTyxHQUFHTyxPQUFWLENBQWtCSixFQUFFLENBQUNLLE1BQUgsQ0FBVUgsQ0FBVixDQUFsQixDQUFuQixDQUFMLENBREo7QUFFSyxRQUFHSixPQUFPLEdBQUdNLE9BQVYsQ0FBa0JKLEVBQUUsQ0FBQ0ssTUFBSCxDQUFVSCxDQUFWLENBQWxCLEtBQWlDLENBQUMsQ0FBckM7QUFDREQsT0FBRyxJQUFFTCxTQUFTLEdBQUdTLE1BQVosQ0FBbUJQLE9BQU8sR0FBR00sT0FBVixDQUFrQkosRUFBRSxDQUFDSyxNQUFILENBQVVILENBQVYsQ0FBbEIsQ0FBbkIsQ0FBTCxDQURDOztBQUdERCxPQUFHLElBQUVELEVBQUUsQ0FBQ0ssTUFBSCxDQUFVSCxDQUFWLENBQUw7QUFDUDtBQUNELFNBQU9ELEdBQVA7QUFDSDtBQUNELFNBQVNNLE9BQVQsQ0FBaUJQLEVBQWpCLEVBQW9CO0FBQ2hCLE1BQUlDLEdBQUcsR0FBQyxFQUFSO0FBQ0EsT0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNGLEVBQUUsQ0FBQ0csTUFBakIsRUFBd0JELENBQUMsRUFBekIsRUFBNEI7QUFDeEIsUUFBR0wsT0FBTyxHQUFHTyxPQUFWLENBQWtCSixFQUFFLENBQUNLLE1BQUgsQ0FBVUgsQ0FBVixDQUFsQixLQUFpQyxDQUFDLENBQXJDO0FBQ0lELE9BQUcsSUFBRUgsT0FBTyxHQUFHTyxNQUFWLENBQWlCUixPQUFPLEdBQUdPLE9BQVYsQ0FBa0JKLEVBQUUsQ0FBQ0ssTUFBSCxDQUFVSCxDQUFWLENBQWxCLENBQWpCLENBQUwsQ0FESjtBQUVLLFFBQUdOLFNBQVMsR0FBR1EsT0FBWixDQUFvQkosRUFBRSxDQUFDSyxNQUFILENBQVVILENBQVYsQ0FBcEIsS0FBbUMsQ0FBQyxDQUF2QztBQUNERCxPQUFHLElBQUVILE9BQU8sR0FBR08sTUFBVixDQUFpQlQsU0FBUyxHQUFHUSxPQUFaLENBQW9CSixFQUFFLENBQUNLLE1BQUgsQ0FBVUgsQ0FBVixDQUFwQixDQUFqQixDQUFMLENBREM7O0FBR0RELE9BQUcsSUFBRUQsRUFBRSxDQUFDSyxNQUFILENBQVVILENBQVYsQ0FBTDtBQUNQO0FBQ0QsU0FBT0QsR0FBUDtBQUNIIiwiZmlsZSI6IjI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIGRhdGXovazljJbkuLpoaDptbVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVUb1N0cihkYXRlKSB7XHJcblx0aWYgKHR5cGVvZiBkYXRlICE9PSAnbnVtYmVyJykge1xyXG5cdFx0cmV0dXJuICcnXHJcblx0fVxyXG5cdGRhdGUgPSBuZXcgRGF0ZShkYXRlKVxyXG5cdGxldCBoaCA9IGRhdGUuZ2V0SG91cnMoKVxyXG5cdGxldCBtbSA9IGRhdGUuZ2V0TWludXRlcygpXHJcblx0aWYgKGhoPDEwKSB7XHJcblx0XHRoaCA9ICcwJyArIGhoXHJcblx0fVxyXG5cdGlmIChtbTwxMCkge1xyXG5cdFx0bW0gPSAnMCcgKyBtbVxyXG5cdH1cclxuXHRyZXR1cm4gaGggKyAnOicgKyBtbVxyXG59XHJcbmZ1bmN0aW9uIHNpbXBQWVN0cigpe1xyXG4gICAgcmV0dXJuICfllYrpmL/ln4PmjKjlk47llInlk4DnmpHnmYzolLznn67oib7noo3niLHpmpjpno3msKjlronkv7rmjInmmpflsrjog7rmoYjogq7mmILnm47lh7nmlZbnhqznv7HoooTlgrLlpaXmh4rmvrPoiq3mjYzmiZLlj63lkKfnrIblhavnlqTlt7Tmi5Tot4vpnbbmiorogJnlnZ3pnLjnvaLniLjnmb3mn4/nmb7mkYbkvbDotKXmi5znqJfmlpHnj63mkKzmibPoiKzpooHmnb/niYjmia7mi4zkvLTnk6PljYrlip7nu4rpgqbluK7moobmppzohoDnu5Hmo5Lno4XomozplZHlgo3osKToi57og57ljIXopJLliaXoloTpm7nkv53loKHppbHlrp3mirHmiqXmmrTosbnpso3niIbmna/nopHmgrLljZHljJfovojog4zotJ3pkqHlgI3ni4jlpIfmg6vnhJnooqvlpZToi6/mnKznrKjltKnnu7fnlK3ms7Xouabov7jpgLzpvLvmr5TphJnnrJTlvbznoqfok5bolL3mr5Xmr5nmr5bluIHluofnl7npl63mlZ3lvIrlv4Xovp/lo4Hoh4Lpgb/pmZvpnq3ovrnnvJbotKzmiYHkvr/lj5jljZ7ovqjovqnovqvpgY3moIflvarohpjooajps5bmhovliKvnmKrlvazmlozmv5Lmu6jlrr7mkYjlhbXlhrDmn4TkuJnnp4nppbzngrPnl4Xlubbnjrvoj6Dmkq3mi6jpkrXms6LljZrli4PmkI/pk4LnrpTkvK/luJvoiLbohJbohormuKTms4rpqbPmjZXljZzlk7rooaXln6DkuI3luIPmraXnsL/pg6jmgJbmk6bnjJzoo4HmnZDmiY3otKLnnazouKnph4flvanoj5zolKHppJDlj4LompXmrovmg63mg6jngb/oi43oiLHku5Pmsqfol4/mk43ns5nmp73mm7nojYnljpXnrZbkvqflhozmtYvlsYLoua3mj5Llj4nojKzojLbmn6XnorTmkL3lr5/lspTlt67or6fmi4bmn7TosbrmkIDmjrronYnppovosJfnvKDpk7LkuqfpmJDpoqTmmIznjJblnLrlsJ3luLjplb/lgb/ogqDljoLmlZ7nlYXllLHlgKHotoXmioTpkp7mnJ3lmLLmva7lt6LlkLXngpLovabmia/mkqTmjqPlvbvmvojpg7Toh6PovrDlsJjmmajlv7HmsonpmYjotoHooazmkpHnp7Dln47mqZnmiJDlkYjkuZjnqIvmg6nmvoTor5rmib/pgJ7pqovnp6TlkIPnl7TmjIHljJnmsaDov5/lvJvpqbDogLvpvb/kvojlsLrotaTnv4XmlqXngr3lhYXlhrLomavltIflrqDmir3phaznlbTouIznqKDmhIHnrbnku4fnu7jnnoXkuJHoh63liJ3lh7rmqbHljqjouofplITpm4/mu4HpmaTmpZrnoYDlgqjnn5fmkJDop6blpITmj6Plt53nqb/mpL3kvKDoiLnllpjkuLLnlq7nqpfluaLluorpl6/liJvlkLnngormjbbplKTlnoLmmKXmpL/phofllIfmt7Pnuq/ooKLmiLPnu7DnlrXojKjno4Hpm4zovp7mhYjnk7for43mraTliLrotZDmrKHogarokbHlm7HljIbku47kuJvlh5HnspfphovnsIfkv4Poub/nr6HnqpzmkafltJTlgqzohIbnmIHnsrnmt6znv6DmnZHlrZjlr7jno4vmkq7mkJPmjqrmjKvplJnmkK3ovr7nrZTnmKnmiZPlpKflkYbmrbnlgqPmiLTluKbmrobku6PotLfooovlvoXpgK7mgKDogL3mi4XkuLnljZXpg7jmjrjog4bml6bmsK7kvYbmg67mt6Hor57lvLnom4vlvZPmjKHlhZrojaHmoaPliIDmjaPouYjlgJLlspvnpbflr7zliLDnqLvmgrzpgZPnm5flvrflvpfnmoTouaznga/nmbvnrYnnnqrlh7PpgpPloKTkvY7mu7Tov6rmlYznrJvni4TmtqTnv5/lq6HmirXlupXlnLDokoLnrKzluJ3lvJ/pgJLnvJTpoqDmjoLmu4fnopjngrnlhbjpnZvlnqvnlLXkvYPnlLjlupfmg6blpaDmt4Dmrr/noonlj7zpm5Xlh4vliIHmjonlkIrpkpPosIPot4zniLnnop/onbbov63osI3lj6DkuIHnm6/lj67pkonpobbpvI7plK3lrprorqLkuKLkuJzlhqzokaPmh4LliqjmoIvkvpfmgavlhrvmtJ7lhZzmipbmlpfpmaHosYbpgJfnl5jpg73nnaPmr5Lniorni6zor7vloLXnnbnotYzmnZzplYDogprluqbmuKHlppLnq6/nn63plLvmrrXmlq3nvI7loIblhZHpmJ/lr7nloqnlkKjoubLmlabpob/lm6Tpkp3nm77pgYHmjoflk4blpJrlpLrlnpvourLmnLXot7roiLXliYHmg7DloJXom77ls6jpuYXkv4Tpop3orrnlqKXmgbbljoTmibzpgY/phILppb/mganogIzlhL/ogLPlsJTppbXmtLHkuozotLDlj5HnvZrnrY/kvJDkuY/pmIDms5Xnj5Dol6nluIbnlarnv7vmqIrnn77pkpLnuYHlh6Hng6blj43ov5TojIPotKnniq/ppa3ms5vlnYroirPmlrnogqrmiL/pmLLlpqjku7/orr/nurrmlL7oj7LpnZ7llaHpo57ogqXljKror73lkKDogrrlup/msrjotLnoiqzphZrlkKnmsJvliIbnurflnZ/nhJrmsb7nsonlpYvku73lv7/mhKTnsqrkuLDlsIHmnqvonILls7DplIvpo47nlq/ng73pgKLlhq/nvJ3orr3lpYnlh6TkvZvlkKblpKvmlbfogqTlrbXmibbmi4LovpDluYXmsJ/nrKbkvI/kv5jmnI3mta7mtqrnpo/oorHlvJfnlKvmiprovoXkv6/ph5zmlqfohK/ohZHlupzohZDotbTlia/opobotYvlpI3lgoXku5jpmJzniLbohbnotJ/lr4zorqPpmYTlpofnvJrlkpDlmbblmI7or6XmlLnmpoLpkpnnm5bmuonlubLnlJjmnYbmn5Hnq7/ogp3otbbmhJ/np4bmlaLotaPlhojliJrpkqLnvLjogpvnurLlspfmuK/mnaDnr5nnmovpq5joho/nvpTns5XmkJ7plZDnqL/lkYrlk6XmrYzmkIHmiIjpuL3og7PnlpnlibLpnanokZvmoLzom6TpmIHpmpTpk6zkuKrlkITnu5nmoLnot5/ogJXmm7Tluprnvrnln4LogL/mopflt6XmlLvlip/mga3pvprkvpvouqzlhazlrqvlvJPlt6nmsZ7mi7HotKHlhbHpkqnli77msp/oi5/ni5flnqLmnoTotK3lpJ/ovpzoj4flkpXnro3kvLDmsr3lraTlp5HpvJPlj6Tom4rpqqjosLfogqHmlYXpob7lm7rpm4fliK7nk5zliZDlr6HmjILopILkuZbmi5DmgKrmo7rlhbPlrpjlhqDop4LnrqHppobnvZDmg6/ngYzotK/lhYnlub/pgJvnkbDop4TlnK3noYXlvZLpvp/pl7rovajprLzor6HnmbjmoYLmn5zot6rotLXliL3ovormu5rmo43plIXpg63lm73mnpzoo7nov4flk4jpqrjlranmtbfmsKbkuqXlrrPpqofphaPmhqjpgq/pn6nlkKvmtrXlr5Llh73llornvZXnv7DmkrzmjY3ml7Hmhr7mgo3nhIrmsZfmsYnlpK/mna3oiKrlo5Xlmo7osarmr6vpg53lpb3ogJflj7fmtanlkbXllp3ojbfoj4/moLjnpr7lkozkvZXlkIjnm5LosonpmILmsrPmtrjotavopJDpuaTotLrlmL/pu5Hnl5Xlvojni6Dmgajlk7zkuqjmqKrooaHmgZLovbDlk4Tng5jombnpuL/mtKrlro/lvJjnuqLllonkvq/njLTlkLzljprlgJnlkI7lkbzkuY7lv73nkZrlo7bokavog6HonbTni5Dns4rmuZblvKfomY7llKzmiqTkupLmsqrmiLfoirHlk5fljY7njL7mu5HnlLvliJLljJbor53mp5DlvormgIDmt67lnY/mrKLnjq/moZPov5jnvJPmjaLmgqPllKTnl6rosaLnhJXmtqPlrqblubvojZLmhYzpu4Tno7ronZfnsKfnmoflh7Dmg7bnhYzmmYPluYzmgY3osI7ngbDmjKXovonlvr3mgaLom5Tlm57mr4HmgpTmhafljYnmg6DmmabotL/np73kvJrng6nmsYforrPor7Lnu5jojaTmmI/lqZrprYLmtZHmt7fosYHmtLvkvJnngavojrfmiJbmg5HpnI3otKfnpbjlh7vlnL7ln7rmnLrnlbjnqL3np6/nrpXogozppaXov7nmv4DorqXpuKHlp6znu6nnvInlkInmnoHmo5jovpHnsY3pm4blj4rmgKXnlr7msbLljbPlq4nnuqfmjKTlh6DohIrlt7Hok5/mioDlhoDlraPkvI7npa3liYLmgrjmtY7lr4Tlr4LorqHorrDml6Llv4zpmYXnu6fnuqrlmInmnrflpLnkvbPlrrbliqDojZrpoorotL7nlLLpkr7lgYfnqLzku7fmnrbpqb7lq4Hmrbznm5HlnZrlsJbnrLrpl7TnhY7lhbzogqnoibDlpbjnvITojKfmo4Dmn6znorHnobfmi6PmjaHnroDkv63liarlh4/ojZDmp5vpibTot7XotLHop4HplK7nrq3ku7blgaXoiLDliZHppa/muJDmuoXmtqflu7rlg7Xlp5zlsIbmtYbmsZ/nlobokovmoajlpZborrLljKDphbHpmY3olYnmpJLnpIHnhKbog7bkuqTpg4rmtYfpqoTlqIflmrzmkIXpk7Dnn6vkvqXohJrni6Hop5LppbrnvLTnu57lib/mlZnphbXovb/ovoPlj6vnqpbmj63mjqXnmobnp7jooZfpmLbmiKrliqvoioLojI7nnZvmmbbpsrjkuqzmg4rnsr7nsrPnu4/kupXorabmma/poojpnZnlooPmlazplZzlvoTnl4npnZbnq5/nq57lh4Dngq/nqpjmj6rnqbbnuqDnjpbpn63kuYXngbjkuZ3phZLljqnmlZHml6foh7zoiIXlko7lsLHnlprpnqDmi5jni5nnlr3lsYXpqbnoj4rlsYDlkoDnn6nkuL7msq7ogZrmi5Lmja7lt6jlhbfot53ouJ7plK/kv7Hlj6Xmg6fngqzliafmjZDpuYPlqJ/lgKbnnLfljbfnu6LmkoXmlKvmionmjpjlgJTniLXmoZTmnbDmjbfnnavnq63mtIHnu5Pop6Plp5DmiJLol4noiqXnlYzlgJ/ku4vnlqXor6vlsYrlt77nrYvmlqTph5Hku4rmtKXopZ/ntKfplKbku4XosKjov5vpnbPmmYvnpoHov5Hng6zmtbjlsL3lirLojYblhaLop4nlhrPor4Dnu53lnYfoj4zpkqflhpvlkJvls7vkv4rnq6PmtZrpg6Hpqo/lloDlkpbljaHlkq/lvIDmj6nmpbflh6/mhajliIrloKrli5jlnY7noI3nnIvlurfmhbfns6DmiZvmipfkuqLngpXogIPmi7fng6TpnaDlnbfoi5vmn6/mo7Xno5Xpopfnp5Hlo7PlkrPlj6/muLTlhYvliLvlrqLor77ogq/llYPlnqbmgbPlnZHlkK3nqbrmgZDlrZTmjqfmiqDlj6PmiaPlr4fmnq/lk63nqp/oi6bphbflupPoo6TlpLjlnq7mjI7ot6jog6/lnZfnrbfkvqnlv6vlrr3mrL7ljKHnrZDni4LmoYbnn7/nnLbml7flhrXkuo/nm5Tlsr/nqqXokbXlpY7prYHlgoDppojmhKfmuoPlnaTmmIbmjYblm7Dmi6zmianlu5PpmJTlnoPmi4nllofonKHohYrovqPllabojrHmnaXotZbok53lqarmoI/mi6bnr67pmJHlhbDmvpzosLDmj73op4jmh5LnvIbng4Lmu6XnkIXmppTni7zlu4rpg47mnJfmtarmjZ7lirPniaLogIHkvazlp6Xpharng5nmtp3li5LkuZDpm7fpla3olb7no4rntK/lhKHlnpLmk4Logovnsbvms6rmo7HmpZ7lhrfljpjmoqjnioHpu47nr7Hni7jnprvmvJPnkIbmnY7ph4zpsqTnpLzojonojZTlkI/moJfkuL3ljonlirHnoL7ljobliKnlgojkvovkv5Dnl6Lnq4vnspLmsqXpmrblipvnkoPlk6nkv6nogZTojrLov57plbDlu4nmgJzmtp/luJjmlZvohLjpk77mgYvngrznu4Pnsq7lh4nmooHnsrHoia/kuKTovobph4/mmb7kuq7osIXmkqnogYrlg5rnlpfnh47lr6Xovr3mvabkuobmkoLplaPlu5bmlpnliJfoo4Lng4jliqPnjI7nkLPmnpfno7fpnJbkuLTpgrvps57mt4vlh5votYHlkJ3mi47njrLoj7Hpm7bpvoTpk4PkvLbnvprlh4zngbXpmbXlsq3pooblj6bku6TmupznkInmprTnoavppo/nlZnliJjnmKTmtYHmn7Plha3pvpnogYvlkpnnrLznqr/pmoblnoTmi6LpmYfmpbzlqITmkILnr5PmvI/pmYvoiqbljaLpooXlupDngonmjrPljaTomY/psoHpupPnoozpnLLot6/otYLpub/mvZ7npoTlvZXpmYbmiK7pqbTlkJXpk53kvqPml4XlsaXlsaHnvJXomZHmsK/lvovnjofmu6Tnu7/ls6bmjJvlrarmu6bljbXkubHmjqDnlaXmiqHova7kvKbku5HmsqbnurborrrokJ3onrrnvZfpgLvplKPnrqnpqqHoo7jokL3mtJvpqobnu5zlpojpurvnjpvnoIHomoLpqazpqoLlmJvlkJfln4vkubDpuqbljZbov4johInnnpLpppLom67mu6HolJPmm7zmhaLmvKvosKnoipLojKvnm7LmsJPlv5nojr3njKvojIXplJrmr5vnn5vpk4blja/ojILlhpLluL3osozotLjkuYjnjqvmnprmooXphbbpnInnhaTmsqHnnInlqpLplYHmr4/nvo7mmKflr5Dlprnlqprpl6jpl7fku6zokIzokpnmqqznm5/plLDnjJvmoqblrZ/nnK/phprpnaHns5zov7fosJzlvKXnsbPnp5jop4Xms4zonJzlr4bluYLmo4nnnKDnu7XlhpXlhY3li4nlqKnnvIXpnaLoi5fmj4/nnoTol5Dnp5LmuLrlupnlppnolJHnga3msJHmir/nmr/mlY/mgq/pl73mmI7onp/puKPpk63lkI3lkb3osKzmkbjmkbnomJHmqKHohpzno6jmkanprZTmirnmnKvojqvloqjpu5jmsqvmvKDlr57pmYzosIvniZ/mn5Dmi4fniaHkuqnlp4bmr43lopPmmq7luZXli5/mhZXmnKjnm67nnabniafnqYbmi7/lk6rlkZDpkqDpgqPlqJznurPmsJbkuYPlpbbogJDlpYjljZfnlLfpmr7lm4rmjKDohJHmgbzpl7nmt5blkaLppoHlhoXlq6nog73lpq7pnJPlgKrms6XlsLzmi5/kvaDljL/ohbvpgIbmurrolKvmi4jlubTnor7mkrXmjbvlv7XlqJjphb/puJ/lsL/mjY/ogYLlrb3lla7plYrplY3mtoXmgqjmn6Dni57lh53lroHmi6fms57niZvmia3pkq7nur3ohJPmtZPlhpzlvITlpbTliqrmgJLlpbPmmpbomZDnlp/mjKrmh6bns6/or7rlk6bmrKfpuKXmrrTol5XlkZXlgbbmsqTllarotrTniKzluJXmgJXnkLbmi43mjpLniYzlvpjmuYPmtL7mlIDmvZjnm5jno5Dnm7znlZTliKTlj5vkuZPlup7ml4HogKrog5bmipvlkobliKjngq7ooo3ot5Hms6Hlkbjog5rln7noo7TotZTpmarphY3kvanmspvllrfnm4bnoLDmiqjng7nmvo7lva3ok6zmo5rnobznr7fohqjmnIvpuY/mjafnorDlna/noJLpnLnmibnmiqvliojnkLXmr5fllaTohL7nlrLnmq7ljLnnl57lg7vlsYHoraznr4flgY/niYfpqpfpo5jmvILnk6LnpajmkofnnqXmi7zpopHotKvlk4HogZjkuZLlnaroi7nokI3lubPlh63nk7bor4TlsY/lnaHms7zpooflqYbnoLTprYTov6vnspXliZbmiZHpk7rku4bojobokaHoj6nokrLln5TmnLTlnIPmma7mtabosLHmm53ngJHmnJ/mrLrmoJbmiJrlprvkuIPlh4TmvIbmn5Lmso/lhbbmo4vlpYfmrafnlabltI7ohJDpvZDml5fnpYjnpYHpqpHotbflsoLkuZ7kvIHlkK/lpZHnoIzlmajmsJTov4TlvIPmsb3ms6PorqvmjpDmtL3nibXmiabpko7pk4XljYPov4Hnrb7ku5/osKbkub7pu5TpkrHpkrPliY3mvZzpgaPmtYXosLTloJHltYzmrKDmrYnmnqrlkZvohZTnvozlopnolLflvLrmiqLmqYfplLnmlbLmgoTmoaXnnqfkuZTkvqjlt6fpnpjmkqznv5jls63kv4/nqo3liIfojITkuJTmgK/nqoPpkqbkvrXkurLnp6bnkLTli6Toirnmk5Lnpr3lr53msoHpnZLovbvmsKLlgL7ljb/muIXmk47mmbTmsLDmg4Xpobfor7fluobnkLznqbfnp4vkuJjpgrHnkIPmsYLlm5rphYvms4XotovljLrom4bmm7Louq/lsYjpqbHmuKDlj5blqLbpvovotqPljrvlnIjpoqfmnYPphpvms4nlhajnl4rmi7PniqzliLjlip3nvLrngpTnmLjljbTpuYrmprfnoa7pm4Doo5nnvqTnhLbnh4Plhonmn5Pnk6Tlo6TmlJjlmrforqnppbbmibDnu5Xmg7nng63lo6zku4Hkurrlv43pn6fku7vorqTliIPlpornuqvmiZTku43ml6XmiI7ojLjok4nojaPono3nhpTmurblrrnnu5Llhpfmj4nmn5TogonojLnooJXlhJLlrbrlpoLovrHkubPmsZ3lhaXopKXova/pmK7olYrnkZ7plJDpl7Dmtqboi6XlvLHmkpLmtJLokKjoha7ps4PloZ7otZvkuInlj4HkvJ7mlaPmoZHll5PkuKfmkJTpqprmiavlq4LnkZ/oibLmtqnmo67lg6fojo7noILmnYDliLnmspnnurHlgrvllaXnhZ7nrZvmmZLnj4roi6vmnYnlsbHliKDnhb3ooavpl6rpmZXmk4XotaHohrPlloTmsZXmiYfnvK7lopLkvKTllYbotY/mmYzkuIrlsJroo7PmoqLmjY7nqI3ng6foio3li7rpn7blsJHlk6jpgrXnu43lpaLotYrom4foiIzoiI3otabmkYTlsITmhZHmtonnpL7orr7noLfnlLPlkbvkvLjouqvmt7HlqKDnu4XnpZ7msojlrqHlqbbnlJrogr7mhY7muJflo7DnlJ/nlKXnibLljYfnu7PnnIHnm5vlianog5zlnKPluIjlpLHni67mlr3mub/or5flsLjombHljYHnn7Pmi77ml7bku4Dpo5/omoDlrp7or4blj7Lnn6Lkvb/lsY7pqbblp4vlvI/npLrlo6vkuJbmn7/kuovmi63oqpPpgJ3lir/mmK/ll5zlmazpgILku5Xkvo3ph4rppbDmsI/luILmgYPlrqTop4bor5XmlLbmiYvpppblrojlr7/mjojllK7lj5fnmKblhb3olKzmnqLmorPmrormipLovpPlj5ToiJLmt5Hnlo/kuabotY7lrbDnhp/olq/mmpHmm5nnvbLonIDpu43pvKDlsZ7mnK/ov7DmoJHmnZ/miI3nq5blooXlurbmlbDmvLHmgZXliLfogI3mkZToobDnlKnluIXmoJPmi7TpnJzlj4zniL3osIHmsLTnnaHnqI7lkK7nnqzpobroiJzor7TnoZXmnJTng4Hmlq/mkpXlmLbmgJ3np4Hlj7jkuJ3mrbvogoblr7rll6Plm5vkvLrkvLzppbLlt7Pmnb7ogLjmgILpooLpgIHlrovorrzor7XmkJzoiZjmk57ll73oi4/phaXkv5fntKDpgJ/nsp/lg7PloZHmuq/lrr/or4nogoPphbjokpznrpfomb3pmovpmo/nu6Xpq5Pnoo7lsoHnqZfpgYLpmqfnpZ/lrZnmjZ/nrIvok5Hmoq3llIbnvKnnkJDntKLplIHmiYDloYzku5blroPlpbnloZTnja3mjJ7ouYvouI/og47oi5Tmiqzlj7Dms7DphZ7lpKrmgIHmsbDlnY3mkYrotKrnmKvmu6nlnZvmqoDnl7Dmva3osK3osIjlnabmr6/oopLnorPmjqLlj7nngq3msaTloZjmkKrloILmo6DohpvllJDns5blgJjourrmt4zotp/ng6vmjo/mtpvmu5Tnu6bokITmoYPpgIPmt5jpmbborqjlpZfnibnol6Tohb7nlrzoqormoq/liZTouKLplJHmj5DpopjouYTllbzkvZPmm7/lmo/mg5XmtpXliYPlsYnlpKnmt7vloavnlLDnlJzmgazoiJTohYbmjJHmnaHov6LnnLrot7PotLTpk4HluJbljoXlkKzng4PmsYDlu7flgZzkuq3luq3mjLroiYfpgJrmoZDpha7nnrPlkIzpk5zlvaTnq6XmobbmjYXnrZLnu5/nl5vlgbfmipXlpLTpgI/lh7jnp4PnqoHlm77lvpLpgJTmtoLlsaDlnJ/lkJDlhZTmuY3lm6LmjqjpopPohb/onJXopKrpgIDlkJ7lsa/oh4Dmi5bmiZjohLHpuLXpmYDpqa7pqbzmpK3lpqXmi5PllL7mjJblk4fom5nmtLzlqIPnk6boopzmrarlpJbosYzlvK/mub7njqnpob3kuLjng7flroznopfmjL3mmZrnmpbmg4vlrpvlqYnkuIfohZXmsarnjovkuqHmnonnvZHlvoDml7rmnJvlv5jlpoTlqIHlt43lvq7ljbHpn6bov53moYXlm7TllK/mg5/kuLrmvY3nu7Toi4fokI7lp5TkvJ/kvKrlsL7nuqzmnKrolJrlkbPnlY/og4PlloLprY/kvY3muK3osJPlsInmhbDljavnmJ/muKnomormlofpl7vnurnlkLvnqLPntIrpl67ll6Hnv4Hnk67mjJ3onJfmtqHnqp3miJHmlqHljafmj6HmsoPlt6vlkZzpkqjkuYzmsaHor6zlsYvml6DoipzmoqflkL7lkLTmr4vmrabkupTmjYLljYjoiJ7kvI3kvq7lnZ7miIrpm77mmaTnianli7/liqHmgp/or6/mmJTnhpnmnpDopb/noZLnn73mmbDlmLvlkLjplKHnibrnqIDmga/luIzmgonohp3lpJXmg5znhoTng6/muqrmsZDnioDmqoTooq3luK3kuaDlqrPllpzpk6PmtJfns7vpmpnmiI/nu4bnno7omb7ljKPpnJ7ovpbmmofls6HkvqDni63kuIvljqblpI/lkJPmjoDplKjlhYjku5npspznuqTlkrjotKTooZToiLfpl7Lmto7lvKblq4zmmL7pmannjrDnjK7ljr/ohbrppoXnvqHlrqrpmbfpmZDnur/nm7jljqLplbbpppnnrrHopYTmuZjkuaHnv5TnpaXor6bmg7Plk43kuqvpobnlt7fmqaHlg4/lkJHosaHokKfnoZ3pnITliYrlk67lmqPplIDmtojlrrXmt4bmmZPlsI/lrZ3moKHogpbllbjnrJHmlYjmpZTkupvmrYfonY7pnovljY/mjJ/mkLrpgqrmlpzog4HosJDlhpnmorDljbjon7nmh4jms4Tms7vosKLlsZHolqroiq/plIzmrKPovpvmlrDlv7vlv4Pkv6HooYXmmJ/ohaXnjKnmg7rlhbTliJHlnovlvaLpgqLooYzphpLlubjmnY/mgKflp5PlhYTlh7bog7jljIjmsbnpm4TnhorkvJHkv67nvp7mnL3ll4XplIjnp4Doopbnu6Plop/miIzpnIDomZrlmJjpobvlvpDorrjok4TphZflj5nml63luo/nlZzmgaTnta7lqb/nu6rnu63ovanllqflrqPmgqzml4vnjoTpgInnmaPnnKnnu5rpnbTolpvlrabnqbTpm6rooYDli4vnho/lvqrml6zor6Llr7vpqa/lt6HmronmsZvorq3orq/pgIrov4XljovmirzpuKbpuK3lkYDkuKvoir3niZnompzltJbooZnmtq/pm4Xlk5HkuprorrbnhInlkr3pmInng5/mt7nnm5DkuKXnoJTonJLlsqnlu7boqIDpopzpmI7ngo7msr/lpYTmjqnnnLzooY3mvJToibPloLDnh5XljoznoJrpm4HllIHlvabnhLDlrrTosJrpqozmroPlpK7puK/np6fmnajmiazkva/nlqHnvormtIvpmLPmsKfku7Dnl5LlhbvmoLfmvL7pgoDohbDlppbnkbbmkYflsKfpgaXnqpHosKPlp5rlkqzoiIDoja/opoHogIDmpLDlmY7ogLbniLfph47lhrbkuZ/pobXmjpbkuJrlj7bmm7PohYvlpJzmtrLkuIDlo7nljLvmj5bpk7Hkvp3kvIrooaPpopDlpLfpgZfnp7vku6rog7DnlpHmsoLlrpzlp6jlvZ3mpIXomoHlgJrlt7LkuZnnn6Pku6XoibrmipHmmJPpgpHlsbnkur/lvbnoh4bpgLjogoTnlqvkuqboo5TmhI/mr4Xlv4bkuYnnm4rmuqLor6Porq7osIror5HlvILnv7znv4znu47ojLXojavlm6Dmrrfpn7PpmLTlp7vlkJ/pk7bmt6vlr4Xppa7lsLnlvJXpmpDljbDoi7HmqLHlqbTpubDlupTnvKjojrnokKTokKXojafonYfov47otaLnm4jlvbHpopbnoazmmKDlk5/mi6XkvaPoh4Pnl4jlurjpm43ouIrom7nlko/ms7PmtozmsLjmgb/li4fnlKjlub3kvJjmgqDlv6flsKTnlLHpgq7pk4DnirnmsrnmuLjphYnmnInlj4vlj7PkvZHph4nor7Hlj4jlubzov4Lmt6Tkuo7nm4LmpobomZ7mhJroiIbkvZnkv57pgL7psbzmhInmuJ3muJTpmoXkuojlqLHpm6jkuI7lsb/nprnlrofor63nvr3njonln5/oiovpg4HlkIHpgYfllrvls6rlvqHmhIjmrLLni7HogrLoqonmtbTlr5Poo5XpooTosavpqa3puLPmuIrlhqTlhYPlnqPoooHljp/mj7TovpXlm63lkZjlnIbnjL/mupDnvJjov5zoi5HmhL/mgKjpmaLmm7Dnuqbotorot4PpkqXlsrPnsqTmnIjmgqbpmIXogJjkupHpg6fljIDpmajlhYHov5DolbTphZ3mmZXpn7XlrZXljJ3noLjmnYLmoL3lk4nngb7lrrDovb3lho3lnKjlkrHmlJLmmoLotZ7otYPohI/okazpga3ns5/lh7/ol7vmnqPml6nmvqHomqTouoHlmarpgKDnmoLngbbnh6XotKPmi6nliJnms73otLzmgI7lop7mho7mm77otaDmiY7llrPmuKPmnK3ovafpk6Hpl7jnnKjmoIXmpqjlkovkuY3ngrjor4jmkZjmlovlroXnqoTlgLrlr6jnnrvmr6Hoqbnnspjmsr7nm4/mlqnovpfltK3lsZXomLjmoIjljaDmiJjnq5nmuZvnu73mqJ/nq6DlvbDmvLPlvKDmjozmtqjmnZbkuIjluJDotKbku5fog4DnmLTpmpzmi5vmmK3mib7msrzotbXnhafnvanlhYbogoflj6zpga7mipjlk7Lom7DovpnogIXplJfolJfov5nmtZnnj43mlp/nnJ/nlITnoKfoh7votJ7pkojkvqbmnpXnlrnor4rpnIfmjK/plYfpmLXokrjmjKPnnYHlvoHni7DkuonmgJTmlbTmi6/mraPmlL/luKfnl4fpg5Hor4Hoip3mnp3mlK/lkLHonJjnn6XogqLohILmsYHkuYvnu4fogYznm7TmpI3mrpbmiaflgLzkvoTlnYDmjIfmraLotr7lj6rml6jnurjlv5fmjJrmjrfoh7Poh7Tnva7luJzls5nliLbmmbrnp6nnqJrotKjngpnnl5Tmu57msrvnqpLkuK3nm4Xlv6Dpkp/oobfnu4jnp43ogr/ph43ku7LkvJfoiJ/lkajlt57mtLLor4znsqXovbTogpjluJrlkpLnmrHlrpnmmLzpqqTnj6DmoKrom5vmnLHnjKror7jor5vpgJDnq7nng5vnha7mi4TnnqnlmLHkuLvokZfmn7Hliqnom4DotK7pk7jnrZHkvY/ms6jnpZ3pqbvmipPniKrmi73kuJPnoJbovazmkrDotZrnr4bmoanluoToo4Xlpobmkp7lo67nirbmpI7plKXov73otZjlnaDnvIDosIblh4bmjYnmi5nljZPmoYznkKLojIHphYzllYTnnYDngbzmtYrlhbnlkqjotYTlp7/mu4vmt4TlrZzntKvku5Tnsb3mu5PlrZDoh6rmuI3lrZfprIPmo5XouKrlrpfnu7zmgLvnurXpgrnotbDlpY/mj43np5/otrPljZLml4/npZbor4XpmLvnu4TpkrvnuoLlmLTphonmnIDnvarlsIrpgbXmmKjlt6bkvZDmn57lgZrkvZzlnZDluqfplJXll7Plq5LnkbfmmqfpnK3osJnpk7XpuYzlqqrpqpzps4zpkq/lkZfpkqPpuKjpvoXpuY7otLLplJvojZzlk5Tmu5fpk4vnrZrot7joi4TnvI/nrL7pqqDpo5Hpo5nplZbplbPps5TlgqfnvKTmp5/mrqHohpHplZTpq4zprJPnpoDppb3pkrnpuYHpkrjpqpbpu6rmgbvplLjkvqrpkpflhoHosITosLbokoflv4/lqbXpqqPop4fnpoXplaHkvKXoi4zmgIXpmIrpsrPnoJfkvKfosIzmpofnopzpvoDmnqjmn73pk5bpk5vppazpuLHpk7Pkv6bluLHpm6DliI3nu4zoubDpko/mgIbnvI3puZHovo3pvorpuZroi4HpqqLmnp7ovo/mkrrplInpub7lk5LpnpHpqoDnu5DmrprotZXnmIXnrqrosKDnoIDoo4bnhJjplavnsbTor4vosJvnu6jop4zplZ3lt4Xpkr/nmavpk6vpsrfpsr3pk6Tpk6Xlsr3puKvnqqbmuI7mpJ/niY3nrIPpu6nnsJbmgLzplabngpbotrjpk47osJTlnqnpmI/ova3plIfplLfpuZfpoprpopvps4Tor7bov6npk5LpuLjpspXpkqvpsoLnu6/plYTpsrHlgb7msqPlh6vpqbjnu4Lnu4votZnpurjpsovps4bpkobotYXlsLTmk4Dnu4DmiIbnnb7or7DnvJ/plIbnuqXplYnpoo3kupjotZPnu6DpsqDor5/nvJHop4/or4Lmr4LpkrTplKLpuKrpuYTpuZjpuLnmjrTor5bmjrzpubPps4/nirfljKbliL/lpqvmoafpspHps5zooa7nu7Lpsqfln5rlkZnluLzmpIHonYjpk6rpmJrnu5fpoonngY/poqLor4PpmJbom47pu4norqfoja3pl7Ppso7mtZLpuZXpqoXmoabpk6flpYLnvLPplL7psqnps4for5nojZ/lk5XmtY3nvIvnj7LmmZbor6jppoTpmI3pkqzplazorqbor5jojaDlj73lk5zpqqXnjpHop4rpvZHnn7bnvoHomb/ot7vpnIHpsprpsqvpg4/mtYPpk5fplZPom7LosI/nvKPmiIvmiKznnZHpuaPnrJXpsqPpnq/nu5vnvLDmjKLls6TpuarpspvnlpbpoozpspLljbrojanpppHnvJnotYbop5DliK3ms77ov7PlvKrog6vpnZPpmITpuKDpuavorrXlsabmponpo5PpkpzplJTnqq3pvoPplKnplYzpmr3osLLnj4/nmrLliYDlnrLlv77mgbrpk6DplLTpvpvpl7bpkqrpk5DpqpLnvILovbLpkrbplJ7popTpvojpk7/llr7pg5Dlk5nohI3ni6/pq4vor5Por7Ppgp3lnLnnuqnotLbljK7okonmhKbogannr5HpmIPplJ/psrLom7TltIPlvpXmtp7mv5HotYnnnZDpk7znmZ7nsYHlsprmpoTmlpPplafopLTpmIbplJLllKDltILpk5Hpk7nnl6jps5Por5TnvKfkv6rpg6blnZzoi4jojoXok6DlkZbpgKbpqornvKHmnqXmoI7ovbnnoLrplILpuYLnlqDnsp3ot57pm7PpsqHps6LolLnlpYHmvYvnkI/mrpPoo6Loo6PpsqLprYnnvK3pkozpuanolLrlu6rmqqnovprouo/nu6vmo4Lom4/psq7mtY/pqp3nu7rplY/puajojI/ms7fnj5HmoIrog6fnoLvlgbvokozllr3ltZ3plYLnmJjogKfonbzpq4XlnobmkrjlmZzpl77ms7jmuIzmoIzmqbnovbPovoLovpjmsIfog6rpuKzpua3oiLvpsojohJTlqIjmoL7puL7piq7lm7XojabnjKHms7rmpKTohLbplZnmpojopJvplIrlkZLllJvlrLfmnanliqLnvKbplZjpoqHps5fpur3miarnhJbmh5HpkpToiojosKfnjJXnpaLmuJHohbzpu77nvIjnvKrpl7XnvJfosJ/ok6bppo3mroHplYbpkrzpk5norrfpk4zpsrXovofpsrbojJHoooXpmafomJbll6vpop/ouZHoi47lkpvogY3kvqzlk53pqb3pkpXlgqnorrTmgITnk6/ouZLnlrHovpTnurDnvbTpk43osJ3pqojnvKXlq5TpkovplaTplajolbLpqpDnu67moaTnopvpooDpooPps43kvaXojajmgq3pqp7nvLHmpKDpkqTlq7HmqK/miJfngp3plJbplLXplarnvp/ot4Tor67osK/ojZ7nvLLnoZfot7fmg6zplLLnrqfplJPmj7/psq3ojJXom7Hlt6/otYfoma7ps4Xor47lspbpmJLop5HpuLLor6Dnu7vovoHpk6jpmJXpmJnmgqvojZvlqIbmoaHpparovavltZjonb7nvJvpk7fpoqbomqzpo5Lmr7Xns4HnvKvllazpk6/nqZHpk6npsqjphb7orqrlp5fpqp/pkpDps53lnqfmrofop57ljo3mu6DnlbLor5zosILmuJbosKXln5jojrPlvJHovbzotLPpk4jpsqXnu7bmkYXnur7pl6npk4Tljq7pqbfnvIzplLbpuLbolq7pporpo5XplLzosKHnqKPosIfojarni7LllKLnnYPpl7zpk4rps47pkpvpspDmmJnpkr3plKzpobjlgqXppafpk7TplZfpn6zpk73nvIfpuYjpmJfnspzpvobpsqbmgbjpkq3pko3mip/ppajnrqjpvI3lqLLohb3nuqjnu77ovovor7/luI/pl7HmsqnmtqDnjq7pn6rngpzpspTpmIzojrTpvozpgqzlupHmgIPlpqnpqpvpuYnpuZzppanpmIvnjrrop4vnoZboi4vojrbol5PlspjnjIPlqLTpuYfnl6vomp3nsbzot7noipfppbfpqqfnvIPpo6jlk5PmvYfpqoHnu6Hmnq3nrqvkurXmkrfnu4HnvKzpmYnojaXpppDpuLror6npobzosJbpk4nplZ/osJHms7bps5Xln5nmtZTpsp/lnq3lqIXmoaDmsKnljqPotZ3kv6jlhZbosLPmgbnpl6vphb3prYfppI3pvLnngoDovbrpuZ7ps5DpnaXosJLpgrrmmZTng6jor5LlkZPls4TppbTmgL/pqb/nvKLovbbotLvpkofplZLplbHnmJfoiKPpk5/nmL7ojJTojrrokKbok6XmkoTlmKTmu6LmvYbnko7puabnmL/poo/nvYLplZvojrjpk5Xpsb/kvJvkv6PosIDosJXok6PltZvppavpmIjlpqrnuqHop47mrKTpkrDpuYbpuazpvonmqbzpuKLpvIvpkrrpg5Poirjmgb3mhKDnuq3pn6vmrpLmsLLnk5LotrHpjL7pqbXotZzllafluLvnrqbosK7nvK/osLXor4/pkorosKrovoTpuafmtYjnvJzmoaLovbjotYjnpa/puKnor6Tls6XpkrLpk67nrZ3pqpjmoInmoIDovbXovb7otL3puLfom7PntbfouKzouK/op6/plLrnuqPnu4nkvKvmp6Dpk6Llla3pppTpop7pqpPnvJLor7zpla/osJjnvIHovo7otYDnnKbplLHpvofpsrvlgazor7npqbrpsrDplZ7nvLXoupzps5/orqDosKvpg4Tli5Dlh7zlnYLlnoXlnrTln6/ln53oi5jojazoja7ojpzojrzoj7Dol4Hmj7jlkJLlkKPlkpTlkp3lkrTlmZjlmbzlmq/luZ7lspnltbTlvbflvrznirjni43ppoDppofpppPpppXmhKPmhrfmh5TkuKzmuobmu5/murfmvKTmvbTmvrnnlK/nup/nu5Tnu7Hnj4nmnqfmoYrmoYnmp5TmqaXovbHovbfotY3ogrfog6jpo5rnhbPnhYXnhpjmhI3mt7znoJzno5nnnI3pkprpkrfpk5jpk57plIPplI3plI7plI/plJjplJ3plKrplKvplL/plYXplY7plaLplaXplanplbLnqIbpuYvpuZvpubHnlqznlrTnl5bnma/oo6XopYHogKLpoqXonqjpurTpsoXpsobpsofpsp7psrTpsrrpsrzps4rps4vps5jps5npnpLpnrTpvYQnO1xyXG59XHJcbmZ1bmN0aW9uIGZ0UFlTdHIoKXtcclxuICAgIHJldHVybiAn5ZWK6Zi/5Z+D5oyo5ZOO5ZSJ5ZOA55qa55mM6Je555+u6Im+56SZ5oSb6ZqY6Z6N5rCo5a6J5L+65oyJ5pqX5bK46IO65qGI6aqv5piC55uO5Ye55pWW54as57+66KWW5YKy5aWn5oeK5r6z6Iqt5o2M5omS5Y+t5ZCn56yG5YWr55ak5be05ouU6LeL6Z225oqK6ICZ5aOp6Zy4572354i455m95p+P55m+5pO65L2w5pWX5ouc56iX5paR54+t5pCs5omz6Iis6aCS5p2/54mI5omu5ouM5Ly055Oj5Y2K6L6m57WG6YKm5bmr5qKG5qac6IaA57aB5qOS56OF6JqM6Y6K5YKN6KyX6Iue6IOe5YyF6KSS5Ymd6JaE6Zu55L+d5aCh6aO95a+25oqx5aCx5pq06LG56a6R54iG5p2v56KR5oKy5Y2R5YyX6Lyp6IOM6LKd6YuH5YCN54u95YKZ5oaK54SZ6KKr5aWU6Iuv5pys56yo5bSp57mD55St5rO16Lmm6L+46YC86by75q+U6YSZ562G5b2856Kn6JOW6JS955Wi5paD5q+W5bmj5bqH55e56ZaJ5pWd5byK5b+F6L6f5aOB6IeC6YG/6Zmb6Z6t6YKK57eo6LK25omB5L6/6K6K5Y2e6L6o6L6v6L6u6YGN5qiZ5b2q6IaY6KGo6bGJ5oaL5Yil55mf5b2s5paM54CV5r+x6LOT5pOv5YW15Yaw5p+E5LiZ56eJ6aSF54Kz55eF5Lim54676I+g5pKt5pKl57y95rOi5Y2a5YuD5pCP6YmR566U5Lyv5bib6Ii26ISW6IaK5rik5rOK6aeB5o2V6JSU5ZO66KOc5Z+g5LiN5biD5q2l57C/6YOo5oCW5pOm54yc6KOB5p2Q5omN6LKh552s6Lip6YeH5b2p6I+c6JSh6aSQ5Y+D6KC25q6Y5oWa5oWY54em6JK86ImZ5YCJ5ruE6JeP5pON57OZ5qe95pu56I2J5buB562W5YG05YaK5ris5bGk6Lmt5o+S5Y+J6Iys6Iy25p+l56K05pC95a+f5bKU5beu6Kmr5ouG5p+06LG65pSZ5pG76J+s6aWe6K6S57qP6Y+f55Si6Zeh6aGr5piM54yW5aC05ZiX5bi46ZW35YSf6IW45bug5pWe5pqi5ZSx5YCh6LaF5oqE6YiU5pyd5Ziy5r2u5bei5ZC154KS6LuK5omv5pKk5o6j5b655r6I6YO06Iej6L6w5aG15pmo5b+x5rKI6Zmz6LaB6KWv5pKQ56ix5Z+O5qmZ5oiQ5ZGI5LmY56iL5oey5r6E6Kqg5om/6YCe6aiB56ek5ZCD55mh5oyB5YyZ5rGg6YGy5byb6aaz5oGl6b2S5L6I5bC66LWk57+F5pal54a+5YWF5rKW6J+y5bSH5a+15oq96YWs55aH6LqK56ig5oSB57GM5LuH57ai556F6Yac6Iet5Yid5Ye65qul5bua6LqH6Yuk6Zub5ruB6Zmk5qWa56SO5YSy55+X5pCQ6Ke46JmV5o+j5bed56m/5qS95YKz6Ii55ZaY5Liy55ih56qX5bmi5bqK6ZeW5Ym15ZC554KK5o226YyY5Z6C5pil5qS/6YaH5ZSH5rez57SU6KCi5oiz57a955a16Iyo56OB6ZuM6L6t5oWI55O36Kme5q2k5Yi66LOc5qyh6IGw6JSl5Zuq5YyG5b6e5Y+i5rmK57KX6YaL57CH5L+D6Lql56+h56uE5pGn5bSU5YKs6ISG55iB57K55res57+g5p2R5a2Y5a+456OL5pKu5pCT5o6q5oyr6Yyv5pCt6YGU562U55ip5omT5aSn5ZGG5q255YKj5oi05bi25q6G5Luj6LK46KKL5b6F6YCu5oCg6IC95pOU5Li55Zau6YSy5pKj6Ia95pem5rCu5L2G5oaa5reh6KqV5b2I6JuL55W25pOL6buo6JWp5qqU5YiA5pCX6LmI5YCS5bO256ax5bCO5Yiw56i75oK86YGT55uc5b635b6X55qE6Lms54eI55m7562J556q5Yez6YSn5aCk5L2O5ru06L+q5pW156yb54uE5ruM57+f5auh5oq15bqV5Zyw6JKC56ys5bid5byf6YGe57eg6aGb5o6C5ruH56KY6bue5YW46Z2b5aKK6Zu75L2D55S45bqX5oOm5aWg5r6x5q6/56KJ5Y+86ZuV6ZuV5YiB5o6J5ZCK6Yej6Kq/6LeM54i556Kf6J225Y+g6Kuc55aK5LiB55uv5Y+u6YeY6aCC6byO6Yyg5a6a6KiC5Lif5p2x5Yas6JGj5oeC5YuV5qOf5L6X5oGr5YeN5rSe5YWc5oqW6ayl6Zmh6LGG6YCX55eY6YO9552j5q+S54qi542o6K6A5aC155256LOt5p2c6Y2N6IKa5bqm5rih5aaS56uv55+t6Y2b5q615pa357ee5aCG5YWM6ZqK5bCN5aKp5Zm46Lmy5pWm6aCT5Zuk6YiN55u+6YGB5o6H5ZOG5aSa5aWq5Z6b6Lqy5py16Le66Ii15YmB5oOw5aKu6Ju+5bOo6bWd5L+E6aGN6Kib5ail5oOh5Y6E5om86YGP6YSC6aST5oGp6ICM5YWS6ICz54i+6aSM5rSx5LqM6LKz55m8572w562P5LyQ5LmP6Zal5rOV55C66Jep5biG55Wq57+75qiK56Ss6Yep57mB5Yeh54Wp5Y+N6L+U56+E6LKp54qv6aOv5rOb5Z2K6Iqz5pa56IKq5oi/6Ziy5aao5Lu/6Kiq57Sh5pS+6I+y6Z2e5ZWh6aOb6IKl5Yyq6Kq55ZCg6IK65bui5rK46LK76Iqs6YWa5ZCp5rCb5YiG57Sb5aKz54Sa5rG+57KJ5aWu5Lu95b+/5oak57Oe6LGQ5bCB5qWT6JyC5bOw6YuS6aKo55iL54O96YCi6aau57ir6Ku35aWJ6bOz5L2b5ZCm5aSr5pW36Iaa5a215om25ouC6Ly75bmF5rCf56ym5LyP5L+Y5pyN5rWu5raq56aP6KKx5byX55Sr5pKr6LyU5L+v6Yec5pan6ISv6IWR5bqc6IWQ6LW05Ymv6KaG6LOm5b6p5YKF5LuY6Zic54i26IW56LKg5a+M6KiD6ZmE5amm57ib5ZKQ5Zm25ZiO6Kmy5pS55qaC6Yij6JOL5rqJ5bm555SY5qG/5p+R56u/6IKd6LaV5oSf56iI5pWi6LSb5bKh5Ymb6Yu857y46IKb57ax5bSX5riv5p2g56+Z6Iev6auY6IaP576U57OV5pCe6Y6s56i/5ZGK5ZOl5q2M5pOx5oiI6bS/6IOz55aZ5Ymy6Z2p6JGb5qC86Juk6Zaj6ZqU6Ym75YCL5ZCE57Wm5qC56Lef6ICV5pu05bqa57655Z+C6IC/5qKX5bel5pS75Yqf5oGt6b6U5L6b6Lqs5YWs5a6u5byT6Z6P5rGe5oux6LKi5YWx6Ymk5Yu+5rqd6IyN54uX5Z6i5qeL6LO85aSg6L6c6I+H5ZKV566N5Lyw5rK95a2k5aeR6byT5Y+k6KCx6aqo6LC36IKh5pWF6aGn5Zu66ZuH5Yiu55Oc5Ymu5a+h5o6b6KSC5LmW5ouQ5oCq5qO66Zec5a6Y5Yag6KeA566h6aSo572Q5oWj54GM6LKr5YWJ5buj6YCb55Gw6KaP5Zyt55+95q246b6c6Zao6LuM6ay86Kmt55m45qGC5quD6Leq6LK05YqK6Lyl5ru+5qON6Y2L6YOt5ZyL5p6c6KO56YGO5ZOI6aq45a2p5rW35rCm5Lql5a6z6aet6YWj5oao6YKv6Z+T5ZCr5ra15a+S5Ye95ZaK572V57+w5pK85o2N5pex5oa+5oKN54SK5rGX5ryi5aSv5p2t6Iiq5aOV5ZqO6LGq5q+r6YOd5aW96ICX6Jmf5rWp5ZG15Zad6I236I+P5qC456a+5ZKM5L2V5ZCI55uS6LKJ6Zah5rKz5ra46LWr6KSQ6ba06LOA5Zi/6buR55eV5b6I54ug5oGo5ZO85Lqo5qmr6KGh5oGS6L2f5ZOE54OY6Jm56bS75rSq5a6P5byY57SF5ZaJ5L6v54y05ZC85Y6a5YCZ5b6M5ZG85LmO5b+955Ga5aO66JGr6IOh6J2054uQ57OK5rmW5byn6JmO5ZSs6K235LqS5rus5oi26Iqx5Zip6I+v54y+5ruR55Wr5YqD5YyW6Kmx5qeQ5b6K5oe35reu5aOe5q2h55Kw5qGT6YKE57ep5o+b5oKj5Zaa55iT6LGi54Wl5riZ5a6m5bm76I2S5oWM6buD56O66J2X57Cn55qH5Yew5oO254WM5pmD5bmM5oGN6KyK54Gw5o+u6Lyd5b695oGi6JuU5Zue5q+A5oKU5oWn5Y2J5oOg5pmm6LOE56mi5pyD54e05Yyv6Kux6Kqo57mq6JG35piP5ama6a2C5ri+5re36LGB5rS75aSl54Gr542y5oiW5oOR6ZyN6LKo56aN5pOK5Zy+5Z+65qmf55W456i956mN566V6IKM6aWR6Leh5r+A6K2P6Zue5aes57i+57ed5ZCJ5qW15qOY6Lyv57GN6ZuG5Y+K5oCl55a+5rGy5Y2z5auJ57Sa5pOg5bm+6ISK5bex6JaK5oqA5YaA5a2j5LyO56Wt5YqR5oK45r+f5a+E5a+C6KiI6KiY5pei5b+M6Zqb57m857SA5ZiJ5p635aS+5L2z5a625Yqg6I6i6aCw6LOI55Sy6YmA5YGH56i85YO55p626aeV5auB5q6y55uj5aCF5bCW566L6ZaT54WO5YW86IKp6Imx5aW457eY57mt5qqi5p+s5aC/6bm85o+A5pK/57Ch5YSJ5Ymq5rib6Jam5qq76ZGS6LiQ6LOk6KaL6Y21566t5Lu25YGl6Imm5YqN6aSe5ry45r+65r6X5bu65YO15aec5bCH5ry/5rGf55aG6JSj5qez542O6Kyb5Yyg6Yas6ZmN6JWJ5qSS56SB54Sm6Iag5Lqk6YOK5r6G6amV5ayM5Zq85pSq6Ym455+v5YOl6IWz54uh6KeS6aSD57mz57We5Ym/5pWZ6YW16L2O6LyD5Y+r56qW5o+t5o6l55qG56it6KGX6ZqO5oiq5Yqr56+A6I6W552b5pm26a+o5Lqs6ama57K+57Kz57aT5LqV6K2m5pmv6aC46Z2c5aKD5pWs6Y+h5b6R55eZ6Z2W56uf56u25YeI54Kv56qY5o+q56m257O+546W6Z+t5LmF54G45Lmd6YWS5buE5pWR6IiK6Ie86IiF5ZKO5bCx55aa6Z6g5ouY54uZ55a95bGF6aeS6I+K5bGA5ZKA55+p6IiJ5rKu6IGa5ouS5pOa5beo5YW36Led6Lie6Yu45L+x5Y+l5oe854Ks5YqH5o2Q6bWR5aif5YCm55y35Y2357W55pKF5pSr5oqJ5o6Y5YCU54i15qGU5YKR5o23552r56ut5r2U57WQ6Kej5aeQ5oiS6JeJ6Iql55WM5YCf5LuL55al6Kqh5bGG5be+562L5pak6YeR5LuK5rSl6KWf57eK6Yym5YOF6Ky56YCy6Z2z5pmJ56aB6L+R54e85rW455uh5YuB6I2K5YWi6Ka65rG66Kij57WV5Z2H6I+M6Yie6LuN5ZCb5bO75L+K56uj5rWa6YOh6ae/5ZaA5ZKW5Y2h5ZKv6ZaL5o+p5qW35Yex5oWo5YiK5aCq5YuY5Z2O56CN55yL5bq35oW357Og5omb5oqX5Lqi54KV6ICD5ou354Ok6Z2g5Z236Iub5p+v5qO156OV6aGG56eR5q685ZKz5Y+v5ri05YWL5Yi75a6i6Kqy6IKv5ZWD5aK+5oeH5Z2R5ZCt56m65oGQ5a2U5o6n5pGz5Y+j5omj5a+H5p6v5ZOt56qf6Ium6YW35bqr6KSy6KqH5Z6u5oyO6Leo6IOv5aGK56235YSI5b+r5a+s5qy+5Yyh562Q54uC5qGG56Sm55y25pug5rOB6Jmn55uU5beL56q66JG15aWO6a2B5YKA6aWL5oSn5r2w5Z2k5piG5o2G5Zuw5ous5pO05buT6ZeK5Z6D5ouJ5ZaH6KCf6IeY6L6j5ZWm6JCK5L6G6LO06JeN5amq5qyE5pSU57GD6ZeM6Jit54C+6K6V5pSs6Ka95oe257qc54ib5r+r55Gv5qaU54u85buK6YOO5pyX5rWq5pKI5Yue54mi6ICB5L2s5ael6YWq54OZ5r6H5YuS5qiC6Zu36ZCz6JW+56OK57Sv5YSh5aOY5pOC6IKL6aGe5rea5qOx5qWe5Ya35Y6Y5qKo54qB6buO57Gs6LKN6Zui5ryT55CG5p2O6KOP6a+J56au6I6J6I2U5ZCP5qCX6bqX5Y6y5Yu156Sr5q235Yip5YKI5L6L5L+Q55ei56uL57KS54Cd6Zq45Yqb55KD5ZOp5YCG6IGv6JOu6YCj6ZCu5buJ5oaQ5ryj57C+5paC6IeJ6Y+I5oiA54WJ57e057On5ra85qKB57Kx6Imv5YWp6Lyb6YeP5pm+5Lqu6KuS5pKp6IGK5YOa55mC54eO5a+l6YG85r2m5LqG5pKC6ZCQ5buW5paZ5YiX6KOC54OI5Yqj542155Cz5p6X56O36ZyW6Ieo6YSw6bGX5reL5Yec6LOD5ZCd5ouO546y6I+x6Zu26b2h6Yi05Ly2576a5rep6Z2I6Zm15ba66aCY5Y+m5Luk5rqc55CJ5qa056Gr6aS+55WZ5YqJ55ik5rWB5p+z5YWt6b6N6IG+5Zqo57Gg56q/6ZqG5aOf5pSP6Zq05qiT5amB5pGf57CN5ryP6ZmL6JiG55un6aGx5bus54iQ5pOE6bm16Jmc6a2v6bqT56KM6Zyy6Lev6LOC6bm/5r2e56W/6YyE6Zm45oiu6ami5ZGC6YuB5L625peF5bGl5bGi57i35oWu5rCv5b6L546H5r++57ag5beS5pSj5a2/54Gk5Y215LqC5o6g55Wl5o6E6Lyq5YCr5L6W5req57a46KuW6Ji/6J66576F6YKP6ZG857Gu6ai+6KO46JC95rSb6aex57Wh5aq96bq755Gq56K86J6e6aas57215Zib5ZeO5Z+L6LK36bql6LOj6YKB6ISI556e6aWF6KC75ru/6JST5pu85oWi5ryr6Ky+6IqS6Iyr55uy5rCT5b+Z6I696LKT6IyF6Yyo5q+b55+b6Yma5Y2v6IyC5YaS5bi96LKM6LK/6bq9546r5p6a5qKF6YW26bu054Wk5rKS55yJ5aqS6Y6C5q+P576O5pin5a+Q5aa55aqa6ZaA5oK25YCR6JCM6JKZ5qqs55uf6Yyz54yb5aSi5a2f556H6Yaa6Z2h57Oc6L+36KyO5b2M57Gz56eY6KaT5rOM6Jyc5a+G5Yaq5qOJ55yg57a/5YaV5YWN5YuJ5aip57es6Z2i6IuX5o+P556E6JeQ56eS5ri65buf5aaZ6JSR5ruF5rCR5oq/55q/5pWP5oar6Zap5piO6J6f6bO06YqY5ZCN5ZG96Kys5pG45pG56JiR5qih6Iac56Oo5pGp6a2U5oq55pyr6I6r5aKo6buY5rKr5ryg5a+e6ZmM6KyA54mf5p+Q5ouH54mh55Wd5aeG5q+N5aKT5pqu5bmV5Yuf5oWV5pyo55uu552m54mn56mG5ou/5ZOq5ZC26YiJ6YKj5aic57SN5rCW5LmD5aW26ICQ5aWI5Y2X55S36Zuj5ZuK5pKT6IWm5oOx6ayn5reW5ZGi6aSS5YWn5aup6IO95aau6ZyT5YCq5rOl5bC85pOs5aaz5Yy/6Iap6YCG5rq66JSr5ouI5bm056K+5pSG5pKa5b+15aiY6YeA6bOl5bC/5o2P6IG25a295ZqZ6ZG36Y6z5raF5oKo5qq4542w5Yed5a+n5pOw5r+Y54mb5omt6YiV57SQ6Ia/5r+D6L6y5byE5aW05Yqq5oCS5aWz5pqW6JmQ55in5oyq5oem57Ov6Ku+5ZOm5q2Q6beX5q+G6JeV5ZiU5YG25rya5ZWq6La054is5biV5oCV55C25ouN5o6S54mM5b6Y5rmD5rS+5pSA5r2Y55uk56OQ55u855WU5Yik5Y+b5LmT6b6Q5peB6ICq6IOW5ouL5ZKG5Yio54Ku6KKN6LeR5rOh5ZG46IOa5Z+56KO06LOg6Zmq6YWN5L2p5rKb5Zm055uG56Cw5oqo54O55r6O5b2t6JOs5qOa56G856+36Iao5pyL6bWs5o2n56Kw5Z2v56CS6Zy55om55oqr5YqI55C15q+X5ZWk6IS+55ay55qu5Yy555ee5YO75bGB6K2s56+H5YGP54mH6aiZ6aOE5ryC55Oi56Wo5pKH556l5ou86aC76LKn5ZOB6IGY5LmS5Z2q6JiL6JCN5bmz5oaR55O26KmV5bGP5Z2h5r2R6aCX5amG56C06a2E6L+r57KV5YmW5pKy6Yuq5LuG6I6G6JGh6I+p6JKy5Z+U5qi45ZyD5pmu5rWm6K2c5pud54CR5pyf5qy65qOy5oia5aa75LiD5reS5ryG5p+S5rKP5YW25qOL5aWH5q2n55Wm5bSO6IeN6b2K5peX56WI56WB6aiO6LW36LGI5Lme5LyB5ZWf5aWR56CM5Zmo5rCj6L+E5qOE5rG95rOj6KiW5o6Q5rS954m95omh6Yes6Ymb5Y2D6YG357C95Luf6KyZ5Lm+6buU6Yyi6YmX5YmN5r2b6YGj5re66K205aG55bWM5qyg5q2J5qeN5ZeG6IWU576M5aK76JaU5by35pC25qmH6Y2s5pWy5oKE5qmL556n5Zas5YOR5ben6Z6Y5pKs57+55bOt5L+P56uF5YiH6IyE5LiU5oCv56uK5qy95L616Kaq56em55C05Yuk6Iq55pOS56a95a+i5rKB6Z2S6LyV5rCr5YK+5Y2/5riF5pOO5pm05rCw5oOF6aCD6KuL5oW255OK56qu56eL5LiY6YKx55CD5rGC5Zua6YWL5rOF6Lao5Y2A6JuG5puy6LuA5bGI6amF5rig5Y+W5ai26b2y6Laj5Y675ZyI6aG05qyK6Yab5rOJ5YWo55eK5ouz54qs5Yi45Yu457y654KU55i45Y276bWy5qa356K66ZuA6KOZ576k54S254eD5YaJ5p+T55Ok5aOk5pSY5Zq36K6T6aWS5pO+57me5oO554ax5aOs5LuB5Lq65b+N6Z+M5Lu76KqN5YiD5aaK57SJ5omU5LuN5pel5oiO6Iy46JOJ5qau6J6N54aU5rq25a6557Wo5YaX5o+J5p+U6IKJ6Iy56KCV5YSS5a265aaC6L6x5Lmz5rGd5YWl6KSl6Luf6Ziu6JWK55Ge6Yqz6ZaP5r2k6Iul5byx5pKS54GR6Jap6IWu6bCT5aGe6LO95LiJ5LiJ5YKY5pWj5qGR5ZeT5Zaq5pCU6ai35o6D5auC55Gf6Imy5r6A5qOu5YOn6I6O56CC5q665YmO5rKZ57SX5YK75ZWl54We56+p5pus54+K6Iur5p2J5bGx5Yiq54W96KGr6ZaD6Zmc5pOF6LSN6Iaz5ZaE5rGV5omH57mV5aKR5YK35ZWG6LOe5pmM5LiK5bCa6KOz5qKi5o2O56iN54eS6IqN5Yu66Z+25bCR5ZOo6YK157S55aWi6LOS6JuH6IiM6IiN6LWm5pSd5bCE5oe+5raJ56S+6Kit56C355Sz5ZG75Ly46Lqr5rex5aig57Sz56We5rKI5a+p5ay455Sa6IWO5oWO5ruy6IGy55Sf55Sl54my5Y2H57mp55yB55ub5Ymp5Yud6IGW5bir5aSx542F5pa95r+V6Kmp5bGN6Jmx5Y2B55+z5ou+5pmC5LuA6aOf6J2V5a+m6K2Y5Y+y55+i5L2/5bGO6aeb5aeL5byP56S65aOr5LiW5p+/5LqL5out6KqT6YCd5Yui5piv5Zec5Zms6YGp5LuV5L6N6YeL6aO+5rCP5biC5oGD5a6k6KaW6Kmm5pS25omL6aaW5a6I5aO95o6I5ZSu5Y+X55im54246JSs5qie5qKz5q6K5oqS6Ly45Y+U6IiS5reR55aP5pu46LSW5a2w54af6Jav5pqR5puZ572y6JyA6buN6byg5bGs6KGT6L+w5qi55p2f5oiN6LGO5aKF5bq25pW45ryx5oGV5Yi36ICN5pGU6KGw55Sp5bil5qCT5ou06Zyc6ZuZ54i96Kqw5rC0552h56iF5ZCu556s6aCG6Iic6Kqq56Kp5pyU54iN5pav5pKV5Zi25oCd56eB5Y+457Wy5q276IKG5a+65Zej5Zub5Ly65Ly86aO85bez5p2+6IGz5oWr6aCM6YCB5a6L6Kif6Kqm5pCc6ImY5pO75Ze96JiH6YWl5L+X57Sg6YCf57Kf5YOz5aGR5rqv5a6/6Ki06IKF6YW46JKc566X6ZuW6ZqL6Zqo57aP6auT56KO5q2y56mX6YGC6Zqn56Wf5a2r5pCN562N6JOR5qKt5ZSG57iu55Gj57Si6Y6W5omA5aGM5LuW5a6D5aW55aGU54265pK76LmL6LiP6IOO6IuU5pOh6Ie65rOw6YWe5aSq5oWL5rGw5Z2N5pSk6LKq55mx54GY5aOH5qqA55ew5r2t6K2a6KuH5Z2m5q+v6KKS56Kz5o6i5ZiG54Kt5rmv5aGY5pCq5aCC5qOg6Iab5ZSQ57OW5YCY6Lq65reM6Laf54eZ5o6P5r+k5ruU57Wz6JCE5qGD6YCD5reY6Zm26KiO5aWX54m56Jek6aiw55a86KyE5qKv5YmU6Lii6Yq75o+Q6aGM6LmE5ZW86auU5pu/5ZqP5oOV5raV5YmD5bGc5aSp5re75aGr55Sw55Sc5oGs6IiU6IWG5oyR5qKd6L+i55y66Lez6LK86ZC15biW5buz6IG954O05rGA5bu35YGc5Lqt5bqt5oy66ImH6YCa5qGQ6YWu556z5ZCM6YqF5b2k56ul5qG25o2F562S57Wx55eb5YG35oqV6aCt6YCP5Ye456a/56qB5ZyW5b6S6YCU5aGX5bGg5Zyf5ZCQ5YWU5rmN5ZyY5o6o6aC56IW/6Ju76KSq6YCA5ZCe5bGv6IeA5ouW5omY6ISr6bSV6ZmA6aax6aed5qmi5aal5ouT5ZS+5oyW5ZOH6JuZ56qq5aiD55Om6KWq5q2q5aSW6LGM5b2O54Gj546p6aCR5Li454O35a6M56KX5oy95pma55qW5oOL5a6b5amJ6JCs6IWV5rGq546L5Lqh5p6J57ay5b6A5pe65pyb5b+Y5aaE5aiB5beN5b6u5Y2x6Z+L6YGV5qGF5ZyN5ZSv5oOf54K65r+w57at6JGm6JCO5aeU5YGJ5YG95bC+57ev5pyq6JSa5ZGz55WP6IOD6aS16a2P5L2N5rit6KyC5bCJ5oWw6KGb55if5rqr6JqK5paH6IGe57SL5ZC756mp57SK5ZWP5Zeh57+B55SV5pK+6J245rim56qp5oiR5pah6Iel5o+h5rKD5ber5Zea6Y6i54OP5rGZ6Kqj5bGL54Sh6JWq5qKn5ZC+5ZCz5q+L5q2m5LqU5o2C5Y2I6Iie5LyN5L6u5aGi5oiK6Zyn5pmk54mp5Yu/5YuZ5oKf6Kqk5piU54aZ5p6Q6KW/56GS55+95pmw5Zi75ZC46Yyr54qn56iA5oGv5biM5oKJ6Iad5aSV5oOc54aE54Ov5rqq5rGQ54qA5qqE6KWy5bit57+S5aqz5Zac6YqR5rSX57O76ZqZ5oiy57Sw556O6J2m5Yyj6Zye6L2E5pqH5bO95L+g54u55LiL5buI5aSP5ZqH5o6A6Y2B5YWI5LuZ6a6u57qW6bm56LOi6Yqc6Ii36ZaR5raO5bym5auM6aGv6Zqq54++542757ij6IW66aSh576o5oay6Zm36ZmQ57ea55u45buC6ZGy6aaZ566x6KWE5rmY6YSJ57+U56Wl6Kmz5oOz6Z+/5Lqr6aCF5be35qmh5YOP5ZCR6LGh6JWt56Gd6ZyE5YmK5ZOu5ZuC6Yq35raI5a615reG5puJ5bCP5a2d5qCh6IKW5Ziv56yR5pWI5qWU5Lqb5q2H6KCN6Z6L5Y2U5oy+5pSc6YKq5pac6ISF6Kun5a+r5qKw5Y246J+55oeI5rOE54CJ6Kyd5bGR6Jaq6Iqv6YuF5qyj6L6b5paw5b+75b+D5L+h6YeB5pif6IWl54yp5oO66IiI5YiR5Z6L5b2i6YKi6KGM6YaS5bm45p2P5oCn5aeT5YWE5YWH6IO45YyI5rS26ZuE54aK5LyR5L+u576e5py95ZeF6Yq556eA6KKW57mh5aKf5oiM6ZyA6Jmb5ZmT6aCI5b6Q6Kix6JOE6YWX5pWY5pet5bqP55Wc5oGk57Wu5am/57eS57qM6LuS5Zan5a6j5oe45peL546E6YG455ms55yp57Wi6Z206Jab5a2456m06Zuq6KGA5Yub54aP5b6q5pes6Kmi5bCL6aa05beh5q6J5rGb6KiT6KiK6YGc6L+F5aOT5oq86bSJ6bSo5ZGA5Lir6Iq954mZ6Jqc5bSW6KGZ5rav6ZuF5ZWe5Lqe6Kid54SJ5ZK96Za554WZ5re56bm95Zq056CU6JyS5beW5bu26KiA6aGP6Za754KO5rK/5aWE5o6p55y86KGN5ryU6Im35aCw54eV5Y6t56Gv6ZuB5ZSB5b2l54Sw5a606Ku66amX5q6D5aSu6bSm56en5qWK5o+a5L2v55iN576K5rSL6Zm95rCn5Luw55mi6aSK5qij5ry+6YKA6IWw5aaW55Gk5pCW5aCv6YGZ56qv6Kyg5aea5ZKs6IiA6Jel6KaB6ICA5qSw5ZmO6IC254i66YeO5Ya25Lmf6aCB5o6W5qWt6JGJ5puz6IWL5aSc5ray5aO55aO56Yar5o+W6Yql5L6d5LyK6KGj6aCk5aS36YG656e75YSA6IOw55aR5rKC5a6c5aeo5b2c5qSF6J+75YCa5bey5LmZ55+j5Lul6Jed5oqR5piT6YKR5bG55YSE5b256IeG6YC46IKE55ar5Lqm6KOU5oSP5q+F5oa2576p55uK5rqi6Kmj6K2w6Kq86K2v55Ww57+857+M57m56Iy16JSt5Zug5q636Z+z6Zmw5ae75ZCf6YqA5rer5a+F6aOy5bC55byV6Zqx5Y2w6Iux5qu75ayw6be55oeJ57qT55Gp6J6i54ef54aS6KCF6L+O6LSP55uI5b2x56mO56Gs5pig5Zay5pOB5YKt6IeD55mw5bq46ZuN6Li06Ju56Kmg5rOz5rmn5rC45oG/5YuH55So5bm95YSq5oKg5oaC5bCk55Sx6YO16Yi+54y25rK56YGK6YWJ5pyJ5Y+L5Y+z5L2R6YeJ6KqY5Y+I5bm86L+C5rek5pa855uC5qaG6Jme5oSa6Ly/5L2Z5L+e6YC+6a2a5oSJ5rid5ryB6ZqF5LqI5aib6Zuo6IiH5ba856a55a6H6Kqe5769546J5Z+f6IqL6YOB57Gy6YGH5Za75bOq56am5oSI5qyy542E6IKy6K295rW05a+T6KOV6aCQ6LGr6aat6bSb5re15Yak5YWD5Z6j6KKB5Y6f5o+06L2F5ZyS5ZOh5ZyT54y/5rqQ57ej6YGg6IuR6aGY5oCo6Zmi5puw57SE6LaK6LqN6ZGw5ba957K15pyI5oKF6Zax6ICY6Zuy6YSW5Yu76ZqV5YWB6YGL6JiK6Yae5pqI6Z+75a2V5Yyd56C46Zuc5qC95ZOJ54G95a6w6LyJ5YaN5Zyo5ZKx5pSi5pqr6LSK6LST6Ief6JGs6YGt57Of6ZG/6Je75qOX5pep5r6h6Jqk6LqB5Zmq6YCg55qC56uI54el6LKs5pOH5YmH5r6k6LOK5oCO5aKe5oaO5pu+6LSI57Su5Zaz5rij5YqE6LuL6Y2Y6ZaY55yo5p+15qao5ZKL5LmN54K46KmQ5pGY6b2L5a6F56qE5YK15a+o55675rCI6Km557KY5rK+55ue5pas6Ly+5baE5bGV6Ji45qOn5Y2g5oiw56uZ5rmb57a75qif56ug5b2w5ryz5by15o6M5ryy5p2W5LiI5biz6LOs5LuX6IS555i06Zqc5oub5pit5om+5rK86LaZ54Wn572p5YWG6IKH5Y+s6YGu5oqY5ZOy6J+E6L2N6ICF6Y266JSX6YCZ5rWZ54+N5paf55yf55SE56Cn6Ie76LKe6Yed5YG15p6V55a56Ki66ZyH5oyv6Y6u6Zmj6JK45o6Z552c5b6B54yZ54it5oCU5pW05ouv5q2j5pS/5bmA55ml6YSt6K2J6Iqd5p6d5pSv5ZCx6JyY55+l6IKi6ISC5rGB5LmL57mU6IG355u05qSN5q6W5Z+35YC85L6E5Z2A5oyH5q2i6La+5Y+q5peo57SZ6KqM5pGv5pOy6Iez6Ie0572u5bmf5bOZ5Yi25pm656ep56ia6LOq54KZ55eU5ruv5rK756qS5Lit55uF5b+g6ZCY6KG357WC56iu6IWr6YeN5Luy55y+6Iif5ZGo5bee5rSy6KyF57Kl6Lu46IKY5bia5ZKS55q65a6Z5pmd6amf54+g5qCq6Jub5pyx6LGs6Ku46KqF6YCQ56u554et54Wu5ouE55+a5ZuR5Li76JGX5p+x5Yqp6JuA6LKv6ZGE56+J5L2P6Ki756Wd6aeQ5oqT54iq5ou95bCI56Oa6L2J5pKw6LO656+G5qiB6I6K6KOd5aad5pKe5aOv54uA5qSO6YyQ6L+96LSF5aKc57a06KuE5rqW5o2J5ouZ5Y2T5qGM55Ci6IyB6YWM5ZWE6JGX54G85r+B6Iyy5ZKo6LOH5ae/5ruL5reE5a2c57Sr5LuU57G95ruT5a2Q6Ieq5rys5a2X6ayD5qOV6Lmk5a6X57ac57i957ix6YSS6LWw5aWP5o+N56ef6Laz5Y2S5peP56WW6Kmb6Zi757WE6YmG57qC5Zi06YaJ5pyA572q5bCK6YG15pio5bem5L2Q5p+e5YGa5L2c5Z2Q5bqn6YyS5Zmv5ayh55Km5puW6Z2E6Kuz6Yqo6bWq5aq86amB6bCy6YiA5ZSE6YiR6bSH6b2Z6bWv6LOB6Yyb6JO95Ze25r236YmN56+z6LmV6IqQ57e257Gp6amD6aKu6aOG6Y+i6ZGj6bC+5YSQ57m95qqz5q6v6IeP6ZGM6auV6ayi56if6aSR6Yi46bWT6Yi96amC6buy5oO76Y2k5YSV6Ye15ZuF6KuC6K6W6JWG5oe65ayL6amP6KaY56aq6ZCU5YCA6JCH5oK16Za26a+n56Go5YKW6Ku25qus56Oj6b2U5qOW5qqJ6Yuu6ZC66aOt6bSf6YqD5YSU5bms6K6O6Iq757WA6LqV6Yen5oS057ae6baJ6Lyf6b2q6ba/6JOv6amE5qiF6Lyz5pSb6Yq86bm65Zmg6Z+D6aeY57S/5q6r6LOn55mJ57Ce6K6c56Kt6KWg54e+6ZCZ57O06KmG6Kum57aI6Ka/6Y+R5beU6Yi/55my6Yqa6a+b6bCI6YuM6Yqp5bSg6baH56uH54CG5qud54mY56+k6bu357Gq5oef6ZCT54eJ6LqJ6ZC46Kuk5aCK6Za86Lub6Yuo6Y2U6baa6aGO6aGT6bG36KqS6YKH6Ym66bSv6a6e6YiB6a2057eL6ZCo6a+h5YOo54GD6bOn6aeZ57Sx57S86LO76bqp6a6S6bCS6YeT6LOF5bC35pCf57S65oiH552q6Kql57ie6Yuv57SH6Y6Y5r2B5LqZ6LOh57aG6a+B6Kms57ex6Kav6KmB6L2C6Yi36Yyu6bSj6bWg6ba76bSw5pGR6Km/5pGc6bib6bCl54235Yyt5YqM5aqv5qqc6a6t6bGW6KKe57eE6a+A5aCd5ZK85bmX5qeo6J+I6Ym/6Zee57WO6aCh54Gd6aGl6Ki26ZeU6KCj6buM6KiM6JGS6ZaO6bGf5ru46baY6amK5qi66Y+15aWQ57mv6Y2w6a+H6bCJ6Km86JaI5Zmm5r6u57mi55C/5pqJ6Kui6aSb6Za96Yil6ZGK6KiQ6Kmw6Ja65Ziw5ZqM6aml55Kj6Kas6b2P56Ov576I6KCG6LqL6Zy96bGt6a+96YOf5rW56YuP6Y616J+v6Kur57iR5oiU5oip55686ba8562n6bC56Z+J57Wz6Z+B5pKf5bag6bem6a6r55mk6aCc6a6a5be56JeO6aWJ57iJ6LSQ6Kay5YmE5raH6YCV5byz6ISb6Z2a6ayu6bOp6bey6KmO5bGo5qu46aK26YmF6Yum56q26b2f6YyI6ZCr6ZuL6K2O546o55q45Ym05aGP5oS+5oS36Y6n6Y2H6b6V6ZaM6Yin6Yqs6aiN57eZ6Lu76Yiz6YyB6aC36b2m6Y+X5Zqz6YS25Zmy6Ia+542q6auW6KqG6KqR6YS65aOZ57qK6LK65Yyx6JWi5oaS6IG157Cj6Zar6YyV6a+k6KCQ5bSN5b6g5re254Co6LOa552e6Yy455mp57Gf5bWQ5qyW5paV6ZGt6KWk6Zas6YuD5Ziu5baX6Yqg6ZCS55mG6bCz6KqE57iy5YS36YWI5aOi6Je26JKe6Ji65Zqm6YKQ6amq57it5quq5quf6L2i56Sq6Yuw6bid55mY57Oy6LqS6Z2C6bG66bGn6Jie5aWp54Cy55KJ5q6u6KSz6KWd6bCx6a2O57ma6YeV6bev6Je65bup5qqB6L2U6Lqq57a+5qye6J+26a+q54CP6aiu57a56Y6m6bea6Jii54Cn55OP5quz5pyn56Sx5YOC6JSe5ZiN5baB6Y+k55i66ICs6J676auP5aOa5pO85ZqV6Zat54CY5rel5quo5quT6L2k6LyF6L2G5rCM6Iea6biV6be66Imr6bG46Ieg5a2M5qyS6bie6ZG+5ZyH54qW546A5r+85qyP6IWh6Y+N5qua6KS46Yud5Zi45Zic5ayk5qaq5Yux57i16Y+d6aGZ6bC76bq85o2r54ec5oej6Y2G576L6KyQ542856aw5r6g6Z2m6bu957ey57mG6ZaU57eh6Kyo6amA6aWD5q2/6Y+M6Yms6ZCD6Kil6Yiu6a+i6Lym6a+w6JSm6KOK6ZqJ6JiX5ZuB6aGi6Lqh6Iun5ZqA6IG55YSC5Zml6aeR6Ye55YS66Kyz5oWq55SM6Lmj55qw6L2h57SV576G6Yi56Kue6aei57i55ayq6YeZ6Y+36ZCg6JiE6aiP57a65qa/56On6aCO6aCP6bCt5YOJ6JWB5oWz6air57m+5qen6YiQ5ayZ5qqj5oin54aX6YyG6Y+Y6Y+5576l6LmM6Kqa6K2Z6JWO57mw56O96Lm65oSc6Y2l56+L6Yuf5pKz6a+W54Wi6Ju65bew6LOV6J+j6bCN6KmY5baH6ZeD6Ka36bSd6Kmu57aj6LyH6YqT6ZeL6ZeV5oSo6JWY5ayI5qmI6aOq6LuU5ba46KCR57if6Yqj6aGw6JyG6aKv5q+/57Od57mF5ZeH6Yqr56mh6Y6p6a+K6YeD6KiV5aeN6ai46Yek6bGU5Z2w5q6k6Ke05Y6Z54GE55Ws6Km16KuX54CL6Kya5aGS6JKU5byS6Lu+6LKw6Yiw6bCj57as5pSE57ST6ZaC6ZGg5bud6aef57em6Y226bel6Jeq6aS/6aK86Y6q6KyW56mM6Kq26JOA54y75Zep6ISn6Zel6YmI6bCo6Yim6a6Q5puH6Ymt6Yyf6aCH5YS76aSz6ZCL6Y+c6Z+c6Yux57e56bWc6ZeQ57O26b2g6bC35oWf6YiE6Ye35pG26aOp57Gc6byJ5aqn6IaD57SI57aw6Lye6KuJ5bmD6ZeI5rqI5r2/55GL6Z+Z54WS6a6q6Za/6JC16b236YSU5buh5oau5au16aiW6bWh6bap6aS86ayp55K96Kah56Gk6I6n6Jaf6Jia5bO0542r5au76be055mH6KCU56eI6Lqa6JaM6aSJ6amk57eX6aWX5Zi154Cf6amN57aD5qKf57Cr6KS75pO357Sy57qI6ZmY5ruO6aWI6bWC6Kmh6aCK6Ku86YmJ6Y+H6KyU5r6p6bGI5aGk5r2v6bGY5Z+h5amt5qSP5rCs5Y606LSX5YS85YWX6K6e5oeo6ZaG6YeF6a2Y6aWc6by054Ws6Lu66beC6bCp6Z2o6KyB6YS05puE54eB6KmS5ZuI5ban6aO05oeM6amb57iK6Lu86LK96YeU6Y6w6ZC/55ie6Imk6Yqm55mu5aGL6bav57iI6Y6j5pSW5Zq254CF54Cg55OU6bia55mt6aCm572M6Y+e6JWV6Yqq6a235YK05L+B6Kub6Kut6JW35bSz6aOr6Za+5auX57SG6Kam5q2f6Yi66bWS6be46b2s5que6bO26bu/6Yme6YSG6JWT5oOy5oWN57Sc6Z+e5q6e5rCz55Oa6Lay6Y+o6aeU6LO+5ZiW5bmY57CA6K2W57mS6K2r6KmU6YeX6Kyr6LyS6beT5rme57id5qWo6Lur6LOR56aO6bSG6KuN5bSi6Ymm6Yya566P6ait5qub5qKU6Lu56LyK6LSE6beZ6J6E57i26LqT6LqR6Ke26Y2+57SC57iQ5L2H5qun6YqW5ZuA6aWM6aGz6aiF57iL6KuR6ZCy6Kuu57eH6Lyc6LKy55yl6YyZ6b2c6a+U5YKv6KuP6ai26a+r6Y+D57qY6Lqm6bGS6KiB6K2+6YOk54yb5rC56Ziq5aOf5aCW5Z615aKK5qq+6JWS6JGk6JOn6JKT6I+H5qeB5pGj5ZKk5ZSa5ZOi5Zmd5ZmF5pKF5YqI6KyU6KWG5ba06ISK5Lu/5YOl542B6bqF6aSY6aS36aWK6aWi5qWe5oC15oeN54i/5ry154Gp5re35r+r54Cm5reh5a+n57O457Wd57eU55GJ5qKY5qOs5qGI5qmw5qur6Luy6Luk6LOr6IaB6IWW6aOI57OK54WG5rqc5rmj5ri656K45ru+556Y6YiI6YmV6Yuj6Yqx6Yul6Yu26ZCm6ZCn6Y2p6Y2A6Y2D6YyH6Y6E6Y6H6Y6/6ZCd6ZGl6ZG56ZGU56mt6baT6bal6biM55mn5bGZ55iC6IeS6KWH57mI6ICu6aGs6J+O6bqv6a6B6a6D6a6O6a+X6a+d6a+06bGd6a+/6bCg6bC16bGF6Z696Z+d6b2HJztcclxufVxyXG5mdW5jdGlvbiBxcVBZU3RyKClcclxueyBcclxucmV0dXJuICflqL/lqYDln4PmjKjppIDlkYPlk4DnmpHnmYzolLzlqZHpirDnoo3lrKHpmpjpno3msKjprp/llLXmtJ3mmpflsrjog7rmoYjogq7mmLvnm47lh7nnjZPnhqznv7Hku7jorLjlpafopZblpaflppHmjYzmnLPmnLPlppHnrIbku4jnlqTlppHoj53mn63pnbblppHogJnlnZ3opofnvaLlppHnmpvmn4/lkp/mk7rkvbDmlZfmuYPnqJfnmY3nmY3mkKzmibPnmKLpoJLpl4bonYLmsb7ntYbmn4jnk6Pmn4jliIXnu4rntoHluYfmooblvqzlq47lnrnonK/lq47omozplZHlvqzosKToi57oj6LnrKPopJLliZ3oloTpm7nmubrloKHmgInlr7bnoLLolZTmh6rosbnpso3lmpfmn7jnopHolZzokIboi53ovKnmj7notZHpkqHkv7vni4jlgpnmg6vnhJnooqvmuIDoi6/lpLLoi6/plZrnu7fnlK3ms7XlmKPpgKzohbflrLbku7PllZrmr6Plvbznoqfok5bluaPmu63mloPmr5bluIHluofnl7nplonnjZnlvIrmgK3mvrzlo4Hoh4LpkLTpmZvpnq3nrL7mj5nosrbnoqXmpanororljZ7ovqfovq7ovq7njLXmkb3mu67pj6LpjLbps5bmhovojoLnmZ/lvazmlozmv5Lnkrjmv7HmkYjlqKbmoKTnqonnnKrnp4nppbzngrPnlpLkuKbnrqXoj6DorZLlpq3pkrXoj6DljZrli4PmkI/pk4LnrpTkvK/luJvoiLbohJbohormuKTms4roqKTls6zljZzoqqfljZ/ln6DoiqPpiL3ojbnnsL/olIDmgJbmlIPnjJzoo4HosqHosqHosqHmo4zmo4zph4fln7DlqYfolKHniJjlgqrom6zmrpjmhZnlj4Pngb/oirLoiLHku7rnjYrolLXmh4bpkLDmp73ok7jmhLrljqDmhqHlgbTlhormgbvlsaTnq7Lmj7fntIHojKzll4/mpYLmpYLmkL3plbLlspTmp47or6fmi4bmnojosbrmkIDlgqronYnplbXosJfngI3pk7LmtZDpl6Hpoavoqq/njJbnlbznlJ7nkbrokIflgb/ogqDlu6DmlZ7nlYXmmb/lgKHotqvojo/piJTorL/orL/orL/mvIXoqKzngpLou4rmia/lvrnmjqPmso/nnq7pg7Tng6XlrrjlsJjmm5/lv7HlhpfpmbPotoHooazmkpDnqLHls7jmqZnojb/nj7XloZbnj7Xmh7Llg5zoq7Tmib/mtafpqovnp6TpmKPnl7Tmra3ljJnogpTlkY7ogpTogpTmgaXmra/kvojlkY7lk6fotpDmlqXngr3ojLrmspbon7LmvLTlr7Xoj5fntZLluLHluLHlqaTlg73olrXku4fnmpfnnoXlv7jmurTliJ3ngqrlu5rlu5rouofpi6Tpm5vokqLnr6jmpJjnu4zlgqjnn5fmkJDop6bomZXpgYTlt5vnkY/mpL3kvJ3oiLnpgYTos5fnlq7lm7HluaLluorpl5blibXmrKXngorohYTohYTnrqDoiILmpL/pjJ7ohKPpjJ7okpPooKLmiKXnhK/nlrXlnpDmv6jpm4zovq3mv6jnk7foqZ7ms5rliYzos5zkvb3ogarojJDlm7HojJDoi4Hoi4Hlh5HnspfpvbDnsIflqJboub/nr6Hnqpzlh5fmhZvmhZvohIbnmIHmv6Lmv6Lmv6Lnsb/mtIrnsb/no4vmkq7pq4rmjqrmjKvmjqrmuprlnq/ojYXnmKnlkpHmsY/mp5HmrbnlgqPngLvluLbmrobnrKnotLfooovlvoXmm4PmgKDogL3ms7nlhoTllbTpg7jmjrjni5rni5rmsK7ms7nmg67mg5Tor57lvLnnlo3nlbbmvqLpu6jolanmvqLlj6jmkJfnqLLnrozls7bnpbflr7zoj7/nqLLmgrzmqqTnm5zlvrPlmJrlk4vnsKbnh4jmhpXnrYnnsKblh7Ppg7Doq5/lvb3lmIDlu7jmlbXlu7jni4TmtqTnv5/lq6HmirXnlqflk4vmuKfoi5DmuKflvJrpgJLnvJTpoqDmjoLmu4fnopjpu57mlZ/pnZvlnqvpm7vkvYPnlLjmiYLmg6blpaDmt4Dmrr/mt43msYjptbDonKnliIHpi73pk57pirHonKnnk57ll7LmuKvmuKvov63lqp/nlonnjo7ppaTmsYDnlLrltb/pvI7plK3okKPlv4rkuJ/ltKznrJfok7PmhazmhoXltKzkvpfmgavlsr3ni6rlhaDprKbkuafot7/ojbPmtaLlk6PlmJ/nnaPmr5DmuI7njajmuI7pmbznnbnluL7ojbDplYDogprllqXllqXlppLpjbTnn63oka7oka7mlrfoka7nopPlhYzpmormgLzloqnmsozlo7/mlabpoJPlm6Tmsoznm77pgYHmjoflk4blk4blparlnpvourHmnLbot7roiLXliYHlqqDmhpznnYvnnYvpuYXnmpLpop3orrnnmpLmgqroi4rmibzpgY/phILnmpLmhYHmtI/jg6vmtLHlsJLogbbmtLHikaHotLDmvZHol4XnrY/mtYznlrrpmIDnkLrnj5Dol6nmsY7nlajpo5zmqIrnn77pkpLngL/msY7nhanlj43ov5TnrLXotKnmsL7nsoTnlrrmsbjmt5PmsbjogqrmiL/msbjlpqjmsbjmsbjmsbjlgKPlqZTmgrHllaHpo5vokInljp7or73lkKDohZPlu6Lmsrjmm4rmo7zphZrnjqLmsJvmsb7lpqLlorPnhJrmsb7luInlpa7lpqLlv7/mv4bnsqrku7nltLbnjKbonILls6/ls6/poqnnmIvng73mvKjmuqTmvKjorr3llKrps6/ku4/lqJ3njp7mlbfohprlrbXojbTmi4LovpDoq6jmsJ/oi7vojK/kv5jmo7TmjYrmtqrmuaLoorHlvJfnlKvmiprovoXmpKjph5zph6HohK/ohZHmpKjohZDotbToq6jopobos6blvqnlgoXoi7vpmJzniLbohbnokK/lhqjorqPog5XlpofnvJrlkpDlmbbll4Tlp5/lpoDmvJHpiKPokaLmvJHov4Doi7fmnYbmn5Hoionogp3ov4Dmhr7np4blmYnotaPnvZPnopnpi7znn7zph63nvYHnvZPmuK/ph63npp7nmovmu4joho/ppLvmupTpjqzpjqzpjqzlk6Dmu5LmiKjmk7HmiIjpuL3og7PnlpnliajmhIXlmbblkq/om6TpmIHpmpTpk6zlgIvojJbnu5noia7ojJvnlYrmta3oj67nvrnln4LogL/mopfnrIHns7zns7zloajpvprmoLHljJHljrfllrblvJblt6nmsZ7nj5nosqLnj5nmup3oirboirboi5/osZ7lnqLlqr7lqr7lpKDovpzoj4flkpXnro3or4LpkrTnrpvoj4fpvJTlkpXom4rll5fllILpqrDor4Lpoaflh4Xpm4flia7lkbHlia7lr6HllanllankuZbmnrTmgKroj4XplqLoj4XokoTop4Dmtqvoj4XmvYXpgabmvYXpgabmtLjluoPov4vnkbDopo/lnK3noYXmrbjkuoDplqjljKblqr/oqa3nmbjok5XljLHom6vosrTliL3ovorolInovKXnhbHmvLflnIvmt4noo7npgY7pk6rpqrjpmZTll6jmsKbkuqXll5DpqofphaPmhqjpgq/pn5PmtZvlh77lr5Llh77oq7Tnmbfnv7DmkrzmjY3njILmhr7mgo3njILmsZnmvKLlpK/lv7zoiKrlo5Xlmo7mv6Dmr6vpg53mgY/np4/lkbrmu5jlk6zmm7fll6zoj4/lir7np53llZ3lk6zljLznm4nosonpmILoj4/mtrjotavopJDpuaTlk7/mvbblq7znl5Xkvbflk4/mgqLmtqXmgpnmqavomIXmgYbovZ/mmY7ng5jmuLHptLvokZPlrpblrpbokZLns4fns4fns4fnirzljprns4flvozoi7joi7jllL/nkZrlo7rnhbPnrrbnrrbni5DnhbPnhbPlvKfllKzllKzmiLbmso3miLbmiLbln5bolZDmvpXno4bno4bnlbXlioPlm67oqbHmp5Dkvarmh7flh4blo57mraHlr7DmoZPpgoTnt6nmj5vmvLbllprnl6rosaLnhJXmtqPlrqbmip3lt5/lt5/mm4Lno7ronZfnsKfnkZ3nkZ3nkZ3nkZ3mhLDnuKjmgY3lt5/mtIPlqojlqojluZHmgaLom5Tlhovmr4fnj7vmhafljYnmg6Dnj7votL/np73mtY3ng6nljK/orrPor7LmtY3ojaTmtr3mrpnprYLmuL7lqavosYHokL/pkqznhLHplazmiJPmg5HpnYPosqjnpo3lh7vlnL7mqK3lg5/nlbjnqL3nqY3nrpXogozppaXov7nlma3orqXpto/lp6znu6nnvInlkq3mnoHmo5jovpHnsY3mvZflvbbllrznlr7msbLml6Plq4nnuqflk5zlh6LohIrlt7Hok5/mioDlhoDmgrjkvI7npa3liYLmgrjlk5zlr4Tlr4LoqIjmsZzml6Plv4zmvIjnu6fmsZzlmInmnrflpL7kvbPlgqLlkpbojZrpoorotL7mm7Hpkr7lvqbns5jlg7nms4fpp5Xns5jlp6fnm6zloIXlsJbnrLrnsKHnhY7lh7LogqnoibDlpbfnvITojKfmkr/mn6znorHnobfmi6Pmkr/lvYXlgLnlvYXoq7Tolqbmp5vpibTot7Xmv7ropovmpZfnrq3ku7bmj7XoiLDlio3ppa/muJDmuoXmtqfouLrlo4PokYHlsIfmp7PojLPlvYrolKPmoajlpajorJvljKDphqzlpIXolYnmpJLnpIHmvZDng4TojK3pg4rmtYflrIzlrIzlmrzmkIXpk7Dnn6vkvqXohbPng4Top5LppbrlhIzng4Tlib/lmIvphbXovb/nj5PlmILnqpbmj63luLnmuZ3np7jooZfpmLbmiKrliqvlha/ojpbogZnnnpDpr6jlgJ7pqZrmo4jnsrPntpPkuLzmqqDmhqzpoLjpnZznkoTmk4/lgrnlvpHnl4npnZbnjY3nq7blh4jms4Llg5Lllb7nqbbns77njpbpn63njpbngbjli7zmsL/ljqnmhaboiIroh7zoiIXlko7lg6blko7pnqDkvZ3ni5nnlr3liofpqbnljIrmjLblkoDmgIfoiInmsq7ol4LlsqDnkJrlp5blgLblsqDouJ7mtrrlgLblkbTmg6flsqDmtrrmtpPptZHmtpPmg5PnnLfmjbLmtpPnmJrmlKvmsbrltJvltJvlmrzmoZTlgpHllZHnnavnq63mtIHntZDop6Plp5Dmgojol4noiqXpjoXlvqPlpLDnlqXor6vlsYblh6fojZXph7/llKvlppfnj5LlmaTnt4rlqYLlg4XmrqPnkI7pnbPmmYnlmaToj6bng6zplJPmtZXli4HojYrlhaLoprrlkLflkLfolZ3msa7nrpjlkYHou43nhITmtZrmtZrmtZrmtZrpg6HmtZrlloDlkpbpibLlkq/plp7mj6nmj6nliYDmhajliIvloKrli5jlnY7mrYPnnIvlq53ltbvltbvmkYPlv7zlm6Xlv7zmoLLmtJjmoLLpnaDlnbflsqLmn6/pjIHmupjpjIHokKrmtpzll5HlprjmuIflsIXlsIXmhJnpjIHogrvogrvmgbPlnqblppTlppTmtrPmgZDoiqTllYzmkbPlm5fph6bnsIbllpblk63ltKvmpZvphbfljpnopLLmtL/lnq7mjI7ot6jog6/otb3nrbfkvqnotb3lr6znqr7ljKHnrbroqpHmoYbnuqnmtK3nuqnms4HmiZ3nm5Tlsr/nqrrokbXllrnprYHlgoDmvbDpmpfmvbDloJLltJDmtoPmtoPokYDmi6HpnKnpl4rmn4boj4jllofoh5joh5jovqPoj4jojrHllLvmlIvol43mvKTlrYTmi6bol43pmJHomK3ngL7osLDngaDngaDmlIvngaDngaHlmoLlk7Tok4jlk7Tok6Lok6Lok6Lng7rltILltILnqoLojZbkvaznsqnntaHntaHltILlmJ7ms7rmqpHmqpHmqpHol57olILlhKHlnpLmqpHlj7vpoZ7msajmo7HmpZ7llKXljpjmgqHnioHpu47nr7Hni7jok6DmvJPnkIbmnY7ph4zpsqTnpLzojonojZTlkI/moJflqa/nlqDlirHnoL7lkZbmgqHlgojllI7kv5Dnl6Lnq53nspLmsqXpmrbliqbnkoPlk6nllKHogYXll7nmtp/plbDlu4nmhpDmtp/luJjmvYvoh4nll7nmiIDnhYnnhYnmgqLmtrzmqJHnsrHmgqLlgIbllKHns6fmtrznhbfmtrzlq73nqrfnjaDnmYLnjaDlr6Xovr3mvablrZLmkoLplaPmvLvmlpnng67nha3ng67mjJjnjbXllYnllYnmvb7pnJboh6jphLDmvb7llYnlh5vos4Pmgovmn4PnjqrlpIzolbbpvaHnjqrkvLbnjqrlpIzpnYjlpIznjqrpoJjlj6fms6DlqrnnkInlqrnnoavppo/nlbHlmqDlqrnok4XmoIHpmbjngKfogb7ojI/ojI/nqr/mubDms7fms7fojI/muofmuofltZ3muoflsZrpmYvlu6znm6fpooXlu6zniJDmjrPljaTomY/lmZzpupPnoozolZfolZfotYLolI3mvZ7npoTmt6XpmbjmiK7ppr/nhJLnhJLkvYDohoLlsaXlsaLnvJXmha7msK/kvpPljZvmha7mt6XmrJLlrYzlrb/mu6bljbXkuoLnqKTnlaflm7Xlm7Xlm7Xku5Hlm7Xnurblm7Xlm4nonrrlm4nnvoXlm4nlhLjpqqHoo7jokL3oqbvoqbvntaHlqr3lq7LnirjnirjnirjpqonnvbXlq7LlrKTln4vojazpuqXos6PpgoHpnKHmhbLnjYzooLvmhbLlq5rlq5rlq5rlq5rosKnnrIDmsZLlkILmsJPmnafmvK3ospPnvZ7plJrmr53nvZ7pk4bojIbojILokLrokLrpgojosr/luoXlnYbmnprng7jphbboi7rmuYjojojokb/lqpLplYHng7jnvpnmmKflr5DlprrlqprploTmgrblgJHokKDmh57mqqzmk53plLDmjrnlpKLmjrnkvo7phprpnaHns5zmtKPmtKPlvKXmtKPnp5jop4Xms4zmu7Xmu7XluYLlqYLnnKDlqYLlhpXlh4Lli4nlqKnnvIXlqpTlqozlqozlqozpgojku6/nt7Llur/ku6/nr77mkKPlp4Tmir/nmr/li4Tmgq/plqnnnIDonp/lmITkvbLmtLrmjrXnuYbll7zmkbnlmqTll7zll7zlmqTlmqTlmqTmsqzmsqzll7zlmpzpu5jmsqzll7zlr57luJ7muYjlk57muYjmi4fniaHnlZ3lp4bmr4vli5/mmq7li5/li5/mhZXmnKnmnKnnnabniafnqYbll7Hlk6rlpqDlpqDlk6rlk6rlpqDmsJbph6Loib/mgafmn7DpgZbojq7pm6PngaLmkpPmgqnmgqnplpnmt5bov6Hmtb3nprjlq7Dog73lpq7pnJPmt6Pni5Tog5LmirPmsrXlq5/ohqnlsbDmurrolKvnp6Xlp6nnor7mkrXmjbvmt7DlqJjphb/ojJHmnZjmtoXll6vns7Xlla7ll6vplY3mtoXmgqjmn6Dni57lh53oi6fmi6fms57niofmspHlpp7ni4Plk53lk53lk53mjLXkvK7mgJPkvK7lm6HnhZbnlp/nlp/mjKrnqaTnqaTllo/lkYPnk6/nk6/nk6/ogKblmJTogKbmsqTllarmsYPnk5/llarllarnkLbllarmo5HnsLDmo5HmuYPlk4zopbvngIvnm6Tno5DmmJDmur/lj5vliKTkuZPljpDoh7HogKrnnKvmi4vlnonpk4flnonlnonlnonlnonmgIzog5rmjoroo7TlqYTlqYTok5zlp7Xmspvmv4bmuZPms5nmiqjng7nmvo7mhonojpHloIvnobznr7fohqjokKDptazllKrmubTlna/noJLlmbznurDmgLblmbznkLXmr5fllaToo6jnlrLmgLboi4nnl57lg7vluoforazokLnlqqXniL/pqJnlva/mhZPnk6LlmIzmvY7mvY7mi5rpoLvosqfpl4blqInkuZLlsrzms5nms5nlsrzmhpHnlIHor4TlsZvlsqXnp6Hmq4flmJnlsqXprYTlu7nnspXliZblnKToiJflnKTojobljI3nroHokrLpgIvlnKTlnIPmma7mtabpkKDmm53pkaTliZjliZjmoJblmIHmgr3ikablh4TmvIbmn5Lmso/lqLjoq4bmuI/lv67nlabltI7ohJDmlonml5fnpYjnpYHpqI/otbfosYjpmKPkvbHmmbXlpZHnoIzlmZDmsKPov4Tmo4Tmsb3mt4forqvmi6TmtL3mkoHmiabpko7piZvoionov4HnsL3ku5/ll5vlopjpu5TpjKLpkrPmuZTmv7PpgaPmt7rosLTloJHltYzoiqHll5vnhpfmv7johZTnvozlq7Hlq7HlvLfnhpfmqYfplLnmr4Pkvb7llqzotq3llqzllqzlt6fpnpjmr7Potqzls63kvb7nq4Xoi4boi4boi7TmhJzoi4bpkqbln5DlhK3ok4HlmZbmh4Toirnmqo7lmZnlr5HmsoHlnIrovJXmsKLlgr7ljb/lh4rmk47llajmsLDlh4rpoIPln6XluobnkLznqq7lgaLlnbXpgrHmtZfmtZflm5rlqqjms4Xotovlspbom4bmtYDou4DlsYjpp4bmuKDmjqvlqZzpvovotqPljr7lnJzpoqfmrIrphpvokbLmtKTnl4rmi7PlkKDliLjli6fokpvngpTnmLjljbvpuYrmprfnorrpm4Dls67nvqPlmKvlmKvlp4zlqqPnk6Tlo6TmlJjlrYPorpPpmqLmk77pmqLmg7nmhbnlo6zoiqLkur7mtorpn6flp5noqo3liITlpornuqvmiZTku43jhJbmiI7ojLjlq4bojaPngJzlq4blq4blq4bntajlhpfmuJjmuJjnprjnrY7ooJXmv6HlrbrmtLPlqrfkubPogpflj7ropKXou5/mnIrmg6LnkZ7pirPmvaTmvaTlqbzlvJzmvbXngZHola/oha7ps4PlmbvlmbvlvaHlj4HlgpjmvbXpjp/pjp/llqrmkJTpqJLmjoPmurLnkZ/ohIPmvoDmvbnlg6fojo/llKbmkYvplrfkubfnurHlgrvlgL3nubrnr6nmm6zlp43oi6vmnYnlsb7libznhb3ph6TploHpmZ3mk4XotaHohrPlg5DoqJXlgpPnvK7lopLlgrfllYfos57mmYzku6nlsJnoo7Plk6jlk6jlk6jnh5Loio3msYvpn7bku6/lk6jljbLoopHlpaLotYrombXoiJnoiI7otabmkYLlsITmhZHmuInmtrvolI7noLflpr3lkbvoqLfoo5HloJTlqKDoqLfpia7ngIvosInlrLjljZnohY7mhY7mpK7mrrjms6nnlKXni4zlnLHnuanmuLvloq3kuZflpJ3ogZbmuq7lprfmtYnmuaTmv5Xoqanov4nombHmi77lnafmuYHmuqHku4DllrDomoDlr6borZjlj7Lnn6Lkvb/lsY3pprblp4vpib3msrbku5Xov6Pmnr7lgLPmi63oqpPov6Pli6LmuZzll5zlmazpgILku5Xkvo3ph4rpo77msI/lt7/mgYPljpToppbpib3ojY3mjrHmuJ7lnqjlo73mtq3llK7ovqTnl6nnjaPolKzmnqLmorPlp53mnbzngK3ln7Hlv6zolIvnlo/mm7jotY7lrbDlrbDolq/mv5Dmm5nnvbLonIDpu43nmZnlsazmnK7msq3mqLnlqJXmiI3nq6rlooXlurbolq7mvLHmgZXllLDogI3mkZTnvJ7nlKnluKXmi7Tmi7TngYDlj5LmkaToqrDmuIHohYTmjKnlkK7mqZPpoIbmqZPoqqznoqnmnJTniI3lh5jlh5jlh5jlgbLkv6zlkZ7lmZ3lsY3ogobls5nll6PikaPkvLrlp5LppbLlt7Poj5jogbPmgILpoIzpjrnmtajorrzoqqbmurLoiZjmk57ll73omIfphaXkv5flq4rotprnsp/lg7PmhKzmuq/ouZzoqLTmrZfphbjnpZjljLTomb3pmY/pmqjmtb3pq5PoqrbltZfnqZflrJjpmqfnpZ/lravmkI3nrIvok5HpgKHpgKHnuK7pjpbpjo3pjrvokbDnpqLlvbXlkpzlkpzll5Lnja3mjJ7ouYvmspPog47oi5TlraHnj4bmupnphZ7lv7Llv7LlkZTlnY3mkYrosqrnmKvmu6nlorXmqoDnl7DmhpvosK3oq4fpkr3mr6/oopLmuaDmjqLlmIbmuaDppafmuo/mkKrmvJ/mqZbohpvnka3muo/lgJjourrmt4zotp/ng6vljIvmv6Tnkavnu6bljIvmtK7mtK7ljIvljIvoqI7lpZfnibnpp6bpp6blup3oqornj7bliZTouKLplJHoq5/otqfmuKfmuKfou4bmq5Xlmo/mg5Xnj7bnj7blsZ/lhbLlqZbnkbHnlLbnlJvmgazlqZbnnZPni6Pmop3ov6LnnLrmnJPokJzpiYTokJzlu7Dljpvng4PmsYDkvrnmuJ/muJ/kvrnkvrnoiYfll7Xnp7Hpha7nnrPlk4PmgavmtbXlg67noafnoafojLzntbHnl4zlgbjmipXpoK3pgI/lh7jnpr/muaXlnJblvpnokqTlh4Plu5zmsaLmsaLlhY7muY3lnJjok7fpopPouYbonJXouYbouYbmmIvlsa/oh4Dmn4Lku5vohKvooonmi5Xpp57ooonmpK3pi5bmsrDllL7mjJblk4fom5nlk4flk4flkpPoparmrarov6/osYzloYbloYbnkJPpob3msY3ng7fllI3mtrTmoprohJXnmpbmg4vlrpvllZjokK3ohZXlv7nov4vljITlv7nom6fmmoDlv7nmnKLojqPlpoTlqpnomLbltrbkvbnpn6bpgZXmoYXlnI3mg5/mg5/mvZnmvY3mg5/oi4fltKPpgLblgYnmsqnlsZfnuqzmsqzlopvoj4vltZTlqqbltZTomLbojoXmuK3lqqblopvlopvooZ7nmJ/muqvonqHlpo/ogZ7piKvmspXnqY/ntIrllY/mu4PmmqHnk67mjJ3nqqnnhbHnqonojqrmlqHoh6XmpYPmsoPojoHll5rpkqjng4/msZrojoHlgZPlmLjolarmoqflnITlkYnmr4vlqKzkvI3lnITlkJjmqYbikaTkvq7lnZ7miIrpnJrmmaTnsoXljKLli5nlnIToqqTljp3lh57llL3opoDnoZLnn73mmbDlmLvmibHllLbniqDmtaDmga/llI/mgonohp3msZDljp3nhoTng6/muJPmsZDnioDmqoTooq3luK3nv5LlqrPnpqfpk6Plhrzkv4LpmpnmiLHntLDno43omb7ljKPoka3ovYTlj5rmtbnmtbnmtbnoipDljqbll4TlnLfplKjplKjlp7rkvaHprq7msZjlkrjos6LpipzoiLflqLTmto7lprbmupPmmL7pmbrlk6/njbvnuKPohbrpmaXnvqjlrqrpmaXpmZDnt5rmpb/ljqLplbbokKvokZnopYTmuZjoipfnv5TnpaXoqbPmg7Plp6DllY3poJnlt7fmvZLmvZLlp6DmvZLnsJjnoZ3pnITokLfmto3lmqPplIDmtojlrrXmt4blk5PlsJLmto3moKHogpbllbjnrJHmlYjmpZTkupvmrYfonY7lmqHmi7nmjL7mkLrls6vmlpzohIXllojlhqnmgojllaPon7nmvqXnu4HngInloa7lsZHolbLoiq/plIzkv73ljpflmbrlv7vmnbrkv6HooYXmmpLnnbLnnbLnkYboiIjpibbkvoDlvaLpg4nlnrPnkYblnInojpXmgrvni4zlhYflhYfmtLbljIjmsbnpm4Tnhovlkrvkv6LppYjmnL3murTnkIfojqDoopbnu6PmrZTmiIzmv6HmrZTmrZTmuY/kv4bmsbvok4TphZfmuobml67lnr/nlZzmgaTnta7og6Xnt5Lnuozok5Llqpflqpfmgqzlq5nnjobpgbjnmaPlprbntaLpnbTolpvmlanms6zohqTmtKvli5vnho/mj5fmtLXlkrDmtZTntIPlu7XlkrDljYLoqJPljYLpgZzljYLlo5PlkbfptInptKjlkJblkJbljorljorompzltJbooZnmtq/olaXllZ7kup7lhrTmvLnlkr3pmInnhZnmrpfpub3lmrTlpo3onJLllbHlqKvoqIHpoZTplrvng77msr/lpYTmrpfnnLzooY3mua7mu5/loLDlrL/ljq3noJrpm4HllIHlvabnhpbljL3osJrpqJPmroPlp47ptKbnp6fmmJzlqbjkva/nlqHlkqnmqKPpmb3msKfljaznmaLppIrmqKPnvpXmkr3ltL7lsobmhK7mhK7lsKfmu5vnqrDmhK7ng5HlkIboiIDoka/lqbnogIDlgLvlmY7lgLvniLrlmKLlhrbnq77poIHmjpbphLTml6rmm7PohYvmtrLmtrLikaDlo7nmgpjmj5bpk7HnlanlkJrmiYbpopDlpLfpgZfnsIPlhIDog7Dlr7LmsoLlrpzkvoflvZ3mjo7omoHmjo7lt7PkuYHnn6Plp5Llhb/mipHmmJzpgpHlsbnlhITlvbnoh4bpgLjogoTnlqvmtILoo5TlrJHol5nlv4bnvqnosKXmuqLor6Porq7osIrora/nlbDnv7znv4znu47nrYPojavmtIfmrrfloLfpmoLntarojbbmqq3lqazlpKTpo67lkJrlkLLpmbvojJrmuLbnko7nko7pubDmh4nnvKjnkanokKTnh5/ojafonYfov4rotaLnm4HlvbHpopXlk73nnI/llrLnoL3noL3oh4Pnl4jmu73mvq3ouIrom7nmgLrmgLrmgoDmgLrmgb/muafpvKHosbPmsovmu7rmsovlsKTnlLTpgq7pk4DmsovmgJ7pgYrphYnmtKfkvJbnpZDnpZDph4nor7Hlj5LlrafmiZzoj7jnuqHnm4LmpobomZ7mhJroiIbmgofmj4Tmj4TmuJTmj4Tmj4TmuJTpmoXkuojlqK/pm6jnjpnlsb/nprnojaLlqKrnvr3noKHln5/oiovllpDlkIHlloHllrvls6rlvqHljKzmhb7njYTllLforI3mtbTlr5Poo5XpoJDosavpqa3ptJvmo6nlr4PmsoXlnqPlqrTljqHnkZfovpXlnI7lnJLlnJLnjL/nvrHnt6PpgLrlpJfokp3okb7pmK7mm7DnrrnmqL7ot57pkqXmjbPnsrXku7Tlk77plrHnp5Dlm6npg6fmnoPmrpLni4HpgYvol7TphZ3mmojpn7vlpIPljJ3lkoLljYbphajphajngb3lrrDphajkvqLojKzmtI7nk5Lmmqvnk5Los43os43pq5Louafouaflh7/ol7vmoIbnmoHnkqromqTnkqrnkqrmhaXllKPngbbnkqrlq6fokJrojZ3mvqTos4rmgI7nhrfnkpTltpLnhrfntKXllrPnorTmnK3ovafpk6HplpjllrPmoIXmkL7lkovlkovmgI3mgI3mk7/mlovlroXmkL7lgrXlr6jnnrvmr6Hoqbnnp6Xot5Xnm4/mlqzovpfltK3ouY3omLjmo6fpoq3miLDot5XlgaHntrvmqJ/ltoLlvbDmvLPlvLXnpIPmtqjnsoDmiZnos6zotKbmiZnog4DnmLTpmpzlprHmmK3mib7msrzotpnnh7Pnvanni6PogofkvYvll7voj6Xmgorom7DovpnpjbrplJfolJfpganmt4XmsrTmlp/lq4PnlITnoKfoh7vmtYjph53mtYjlv7HnlrnmsrTpnIfmoa3pjq7kv6Xnr5zoq43oq43lp4Pni7DouK3lp4PmlbTmi6/lm7jngqHluKfnl4fphK3lp4PoirfmsaXkvI7msaXlgIHlgIHmsaXohILmsaXjgajmnrPovbXnn5fmt5Tmrpbnp4fmg6rkvoTmra7moLrlnLXotr7lka7ml6joobnmor3mjJrmjrfoh7joh7jnva7luJzls5nmt5vmvarnp6npm4nos6rngpnnl5Tmu57oj63nqpLni4bnm4XnrZflppXoobfolKDnqK7lppXlgYXku7LooYbmtIDmt43oqbboqbbor4znsqXovbTogpjluJrlkpLnmrrlrpnmmLzpqqTlkq7moKrlkq7lkq7olY/muJror5vosanoibjng5vnhZHmi4TnnqnnnqnngrfokZfngrfojofom4DotK7pk7jojL/ngrfngrfmn7fpqbvmipPniKrot6nmip/no5rlla3mkrDos7rnr4bmoanlnKfoo53lpp3njZ7ljKjljKjmpI7plKXmkKXotZjlopzntrTosIbnl73mtZ7ngqrlqaXmo7nnkKLojIHphYzllYTnnYDngbzmtYrlhbnmgaPnsqLmgaPnqLXmt4TlrZzmqbTku5Tnsb3mu5PjgbXmtI7muI3nibjprIPnkK7nkK7ltIjnkK7nuILmnp7pgrnotonmpbHmpbHokqnlqJbljZLolJ/oopPokqnokqnokqnpkb3nuoLop5zphZTmnILltrXmvorlmYLokYPlkpfkvZDmn57ojovojovllJHok5npjJLlma/lrKHnkqbmm5bpnYToq7PpiqjptarlqrzpqYHpsLLpiIDllITpiJHptIfpvZnpta/os4HpjJvok73ll7bmvbfpiY3nr7PouZXoipDnt7bnsanpqYPpoq7po4bpj6LpkaPpsL7lhJDnub3mqrPmrq/oh4/pkYzpq5XprKLnqJ/ppJHpiLjptZPpiL3pqYLpu7Lmg7vpjaTlhJXph7Xlm4Xoq4LorpbolYbmh7rlrIvpqY/oppjnpqrpkJTlgIDokIfmgrXplrbpr6fnoajlgpboq7bmq6zno6PpvZTmo5bmqonpi67pkLrpo63ptJ/pioPlhJTluazoro7oirvntYDoupXph6fmhLTntp7ptonovJ/pvarptr/ok6/pqYTmqIXovLPmlJvpirzpubrlmaDpn4Ppp5jntL/mrqvos6fnmYnnsJ7orpznoq3opaDnh77pkJnns7ToqYboq6bntojopr/pj5Hlt5TpiL/nmbLpiprpr5vpsIjpi4zpiqnltKDptofnq4fngIbmq53niZjnr6Tpu7fnsarmh5/pkJPnh4nouonpkLjoq6TloIrplrzou5vpi6jpjZTptprpoY7poZPpsbfoqpLpgofpibrptK/prp7piIHprbTnt4vpkKjpr6Hlg6jngYPps6fpp5nntLHntLzos7vpuqnprpLpsJLph5Pos4XlsLfmkJ/ntLrmiIfnnaroqqXnuJ7pi6/ntIfpjpjmvYHkupnos6Hntobpr4Hoqaznt7Hopq/oqYHovYLpiLfpjK7ptKPptaDptrvptLDmkZHoqb/mkZzpuJvpsKXnjbfljK3liozlqq/mqpzprq3psZboop7nt4Tpr4DloJ3lkrzluZfmp6jon4jpib/pl57ntY7poKHngZ3poaXoqLbpl5TooKPpu4zoqIzokZLplo7psZ/mu7jptpjpqYrmqLrpj7XlpZDnua/pjbDpr4fpsInoqbzolojlmabmvq7nuaLnkL/mmonoq6LppJvplr3piKXpkYroqJDoqbDolrrlmLDlmozpqaXnkqPopqzpvY/no6/nvojooIbouovpnL3psa3pr73pg5/mtbnpi4/pjrXon6/oq6vnuJHmiJTmiKnnnrzptrznrafpsLnpn4nntbPpn4Hmkp/ltqDpt6bprqvnmaTpoJzprprlt7nol47ppYnnuInotJDoprLliYTmtofpgJXlvLPohJvpnZrprK7ps6npt7LoqY7lsajmq7jporbpiYXpi6bnqrbpvZ/pjIjpkKvpm4vorY7njqjnmrjlibTloY/mhL7mhLfpjqfpjYfpvpXplozpiKfpiqzpqI3nt5nou7vpiLPpjIHpoLfpvabpj5flmrPphLblmbLohr7njarpq5boqoboqpHphLrlo5nnuorosrrljLHolaLmhpLogbXnsKPplqvpjJXpr6TooJDltI3lvqDmt7bngKjos5rnnZ7pjLjnmannsZ/ltZDmrJbmlpXpka3opaTplqzpi4PlmK7ltpfpiqDpkJLnmYbpsLPoqoTnuLLlhLfphYjlo6Lol7bokp7omLrlmqbpgpDpqarnuK3mq6rmq5/ovaLnpKrpi7DpuJ3nmZjns7LoupLpnYLpsbrpsafomJ7lpanngLLnkonmrq7opLPopZ3psLHprY7nuZrph5Xpt6/ol7rlu6nmqoHovZTouqrntr7mrJ7on7bpr6rngI/pqK7ntrnpjqbpt5romKLngKfnk4/mq7PmnKfnpLHlg4LolJ7lmI3ltoHpj6TnmLrogKzonrvpq4/lo5rmk7zlmpXplq3ngJjmt6Xmq6jmq5PovaTovIXovYbmsIzoh5rpuJXpt7roiavpsbjoh6DlrYzmrJLpuJ7pkb7lnIfnipbnjoDmv7zmrI/ohaHpj43mq5ropLjpi53lmLjlmJzlrKTmpqrli7HnuLXpj53poZnpsLvpurzmjavnh5zmh6PpjYbnvovorJDnjbznprDmvqDpnabpu73nt7LnuYbplpTnt6HorKjpqYDppYPmrb/pj4zpiazpkIPoqKXpiK7pr6LovKbpr7DolKboo4rpmonomJflm4HpoaLouqHoi6flmoDogbnlhILlmaXpp5Hph7nlhLrorLPmharnlIzouaPnmrDovaHntJXnvobpiLnoq57pp6LnuLnlrKrph5npj7fpkKDomITpqI/ntrrmpr/no6fpoI7poI/psK3lg4nolYHmhbPpqKvnub7mp6fpiJDlrJnmqqPmiKfnhpfpjIbpj5jpj7nnvqXouYzoqprorZnolY7nubDno73oubrmhJzpjaXnr4vpi5/mkrPpr5bnhaLom7rlt7Dos5Xon6PpsI3oqZjltofpl4PoprfptJ3oqa7ntqPovIfpipPpl4vpl5XmhKjolZjlrIjmqYjpo6rou5TltrjooJHnuJ/piqPpobDonIbpoq/mr7/ns53nuYXll4fpiqvnqaHpjqnpr4rph4PoqJXlp43pqLjph6TpsZTlnbDmrqTop7TljpnngYTnlazoqbXoq5fngIvorJrloZLokpTlvJLou77osrDpiLDpsKPntqzmlITntJPploLpkaDlu53pp5/nt6bpjbbpt6Xol6rppL/porzpjqrorJbnqYzoqrbok4DnjLvll6nohKfpl6XpiYjpsKjpiKbprpDmm4fpia3pjJ/poIflhLvppLPpkIvpj5zpn5zpi7Hnt7nptZzpl5Dns7bpvaDpsLfmhZ/piITph7fmkbbpo6nnsZzpvInlqqfohoPntIjntrDovJ7oq4nluYPpl4jmuojmvb/nkYvpn5nnhZLprqrplr/okLXpvbfphJTlu6Hmhq7lq7XpqJbptaHptqnppLzprKnnkr3opqHnoaTojqfolp/omJrls7Tnjavlq7vpt7TnmYfooJTnp4jouprolozppInpqaTnt5fppZflmLXngJ/pqY3ntoPmop/nsKvopLvmk7fntLLnuojpmZjmu47ppYjptYLoqaHpoIroq7zpiYnpj4forJTmvqnpsYjloaTmva/psZjln6Hlqa3mpI/msKzljrTotJflhLzlhZforp7mh6jplobph4XprZjppZzpvLTnhazou7rpt4LpsKnpnajorIHphLTmm4Tnh4HoqZLlm4jltqfpo7Tmh4zpqZvnuIrou7zosr3ph5TpjrDpkL/nmJ7oiaTpiqbnma7loYvptq/nuIjpjqPmlJblmrbngIXngKDnk5TpuJrnma3poKbnvYzpj57olZXpiqrprbflgrTkv4Hoq5voq63olbfltLPpo6vplr7lq5fntIbopqbmrZ/piLrptZLpt7jpvazmq57ps7bpu7/piZ7phIbolZPmg7LmhY3ntJzpn57mrp7msLPnk5rotrLpj6jpp5Tos77lmJbluZjnsIDorZbnuZLoravoqZTph5forKvovJLpt5PmuZ7nuJ3mpajou6vos5Hnpo7ptIboq43ltKLpiabpjJrnro/pqK3mq5vmopTou7novIrotITpt5nonoTnuLboupPoupHop7bpjb7ntILnuJDkvYfmq6fpipblm4DppYzpobPpqIXnuIvoq5HpkLLoq67nt4fovJzosrLnnKXpjJnpvZzpr5Tlgq/oq4/pqLbpr6vpj4PnupjouqbpsZLoqIHorb7pg6TnjJvmsLnpmKrlo5/loJblnrXloormqr7olZLokaTok6fokpPoj4fmp4HmkaPlkqTllJrlk6LlmZ3lmYXmkoXliojorJTopYbltrTohIrku7/lg6XnjYHpuoXppJjppLfppYrppaLmpZ7mgLXmh43niL/mvLXnganmt7fmv6vngKbmt6Hlr6fns7jntZ3nt5TnkYnmopjmo6zmoYjmqbDmq6vou7Lou6Tos6vohoHohZbpo4jns4rnhYbmupzmuaPmuLrnorjmu77nnpjpiIjpiZXpi6PpirHpi6Xpi7bpkKbpkKfpjanpjYDpjYPpjIfpjoTpjofpjr/pkJ3pkaXpkbnpkZTnqa3ptpPptqXpuIznmaflsZnnmILoh5LopYfnuYjogK7poazon47puq/proHproPpro7pr5fpr53pr7TpsZ3pr7/psKDpsLXpsYXpnr3pn53pvYcnO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFkaXRpb25hbGl6ZWQoY2Mpe1xyXG4gICAgdmFyIHN0cj0nJztcclxuICAgIGZvcih2YXIgaT0wO2k8Y2MubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgaWYoc2ltcFBZU3RyKCkuaW5kZXhPZihjYy5jaGFyQXQoaSkpIT0tMSlcclxuICAgICAgICAgICAgc3RyKz1mdFBZU3RyKCkuY2hhckF0KHNpbXBQWVN0cigpLmluZGV4T2YoY2MuY2hhckF0KGkpKSk7XHJcbiAgICAgICAgZWxzZSBpZihxcVBZU3RyKCkuaW5kZXhPZihjYy5jaGFyQXQoaSkpIT0tMSlcclxuICAgICAgICAgICAgc3RyKz1mdFBZU3RyKCkuY2hhckF0KHFxUFlTdHIoKS5pbmRleE9mKGNjLmNoYXJBdChpKSkpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc3RyKz1jYy5jaGFyQXQoaSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzaW1wbGl6ZWQoY2Mpe1xyXG4gICAgdmFyIHN0cj0nJztcclxuICAgIGZvcih2YXIgaT0wO2k8Y2MubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgaWYoZnRQWVN0cigpLmluZGV4T2YoY2MuY2hhckF0KGkpKSE9LTEpXHJcbiAgICAgICAgICAgIHN0cis9c2ltcFBZU3RyKCkuY2hhckF0KGZ0UFlTdHIoKS5pbmRleE9mKGNjLmNoYXJBdChpKSkpO1xyXG4gICAgICAgIGVsc2UgaWYocXFQWVN0cigpLmluZGV4T2YoY2MuY2hhckF0KGkpKSE9LTEpXHJcbiAgICAgICAgICAgIHN0cis9c2ltcFBZU3RyKCkuY2hhckF0KHFxUFlTdHIoKS5pbmRleE9mKGNjLmNoYXJBdChpKSkpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc3RyKz1jYy5jaGFyQXQoaSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcbmZ1bmN0aW9uIHFxbGl6ZWQoY2Mpe1xyXG4gICAgdmFyIHN0cj0nJztcclxuICAgIGZvcih2YXIgaT0wO2k8Y2MubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgaWYoZnRQWVN0cigpLmluZGV4T2YoY2MuY2hhckF0KGkpKSE9LTEpXHJcbiAgICAgICAgICAgIHN0cis9cXFQWVN0cigpLmNoYXJBdChmdFBZU3RyKCkuaW5kZXhPZihjYy5jaGFyQXQoaSkpKTtcclxuICAgICAgICBlbHNlIGlmKHNpbXBQWVN0cigpLmluZGV4T2YoY2MuY2hhckF0KGkpKSE9LTEpXHJcbiAgICAgICAgICAgIHN0cis9cXFQWVN0cigpLmNoYXJBdChzaW1wUFlTdHIoKS5pbmRleE9mKGNjLmNoYXJBdChpKSkpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc3RyKz1jYy5jaGFyQXQoaSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 29 */
/*!***********************************!*\
  !*** D:/read_demo/store/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 28));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 30));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue.default.use(_vuex.default);\n\nvar store = new _vuex.default.Store({\n  state: {},\n\n  mutations: {},\n\n  actions: {} });var _default =\n\n\n\n\nstore;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJzdGF0ZSIsIm11dGF0aW9ucyIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiJ1RkFBQTtBQUNBLHdFOztBQUVBQSxhQUFJQyxHQUFKLENBQVFDLGFBQVI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLElBQUlELGNBQUtFLEtBQVQsQ0FBZTtBQUM1QkMsT0FBSyxFQUFFLEVBRHFCOztBQUc1QkMsV0FBUyxFQUFFLEVBSGlCOztBQUs1QkMsU0FBTyxFQUFFLEVBTG1CLEVBQWYsQ0FBZCxDOzs7OztBQVVlSixLIiwiZmlsZSI6IjI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXHJcblxyXG5WdWUudXNlKFZ1ZXgpXHJcblxyXG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcclxuXHRzdGF0ZToge1xyXG5cdH0sXHJcblx0bXV0YXRpb25zOiB7XHJcblx0fSxcclxuXHRhY3Rpb25zOiB7XHJcblx0XHRcclxuXHR9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
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
/* 31 */
/*!****************************!*\
  !*** D:/read_demo/App.vue ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 32);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDbUs7QUFDbkssZ0JBQWdCLHNMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!*****************************************************!*\
  !*** D:/read_demo/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 33);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStoQixDQUFnQiw2bEJBQUcsRUFBQyIsImZpbGUiOiIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/read_demo/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ })
],[[0,"app-config"]]]);