(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!****************************!*\
  !*** D:/read_demo/main.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 16));\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 17));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_vue.default.prototype.$store = _store.default;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwicHJvdG90eXBlIiwiJHN0b3JlIiwic3RvcmUiLCJBcHAiLCJtcFR5cGUiLCJhcHAiLCIkbW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFtQjtBQUNuQjtBQUNBLHdFOztBQUVBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7O0FBRUFGLGFBQUlHLFNBQUosQ0FBY0MsTUFBZCxHQUF1QkMsY0FBdkI7O0FBRUFDLGFBQUlDLE1BQUosR0FBYSxLQUFiOztBQUVBLElBQU1DLEdBQUcsR0FBRyxJQUFJUixZQUFKO0FBQ0xNLFlBREssRUFBWjs7QUFHQUUsR0FBRyxDQUFDQyxNQUFKIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7aW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5cclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuXHJcblZ1ZS5wcm90b3R5cGUuJHN0b3JlID0gc3RvcmVcclxuXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICAuLi5BcHBcclxufSlcclxuYXBwLiRtb3VudCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

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
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      title: '点击开始阅读' };\n\n  },\n  onLoad: function onLoad() {\n\n  },\n  methods: {\n    read: function read() {\n      uni.navigateTo({\n        url: '/pages/read/read' });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJ0aXRsZSIsIm9uTG9hZCIsIm1ldGhvZHMiLCJyZWFkIiwidW5pIiwibmF2aWdhdGVUbyIsInVybCJdLCJtYXBwaW5ncyI6IndGQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNkQSxNQURjLGtCQUNQO0FBQ04sV0FBTztBQUNOQyxXQUFLLEVBQUUsUUFERCxFQUFQOztBQUdBLEdBTGE7QUFNZEMsUUFOYyxvQkFNTDs7QUFFUixHQVJhO0FBU2RDLFNBQU8sRUFBRTtBQUNSQyxRQURRLGtCQUNEO0FBQ05DLFNBQUcsQ0FBQ0MsVUFBSixDQUFlO0FBQ2RDLFdBQUcsRUFBRSxrQkFEUyxFQUFmOztBQUdBLEtBTE8sRUFUSyxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGl0bGU6ICfngrnlh7vlvIDlp4vpmIXor7snXG5cdFx0fVxuXHR9LFxuXHRvbkxvYWQoKSB7XG5cblx0fSxcblx0bWV0aG9kczoge1xuXHRcdHJlYWQoKSB7XG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdHVybDogJy9wYWdlcy9yZWFkL3JlYWQnXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _read_vue_vue_type_template_id_1126b716_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./read.vue?vue&type=template&id=1126b716&mpType=page */ 9);\n/* harmony import */ var _read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _read_vue_vue_type_template_id_1126b716_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _read_vue_vue_type_template_id_1126b716_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _read_vue_vue_type_template_id_1126b716_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/read/read.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQ3lLO0FBQ3pLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vcmVhZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTEyNmI3MTYmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3JlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcmVhZC9yZWFkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**********************************************************************************!*\
  !*** D:/read_demo/pages/read/read.vue?vue&type=template&id=1126b716&mpType=page ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_template_id_1126b716_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./read.vue?vue&type=template&id=1126b716&mpType=page */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_template_id_1126b716_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_template_id_1126b716_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_template_id_1126b716_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_template_id_1126b716_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/read_demo/pages/read/read.vue?vue&type=template&id=1126b716&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "action"),
          attrs: { _i: 1 },
          on: {
            touchstart: function($event) {
              $event.stopPropagation()
              return _vm.touchStart($event)
            },
            touchend: function($event) {
              $event.stopPropagation()
              return _vm.touchEnd($event)
            },
            touchmove: function($event) {
              $event.stopPropagation()
              return _vm.touchMove($event)
            }
          }
        },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "item left"),
            attrs: { _i: 2 },
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.prePage($event)
              }
            }
          }),
          _c("view", {
            staticClass: _vm._$s(3, "sc", "item mid"),
            attrs: { _i: 3 },
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.showMenu($event)
              }
            }
          }),
          _c("view", {
            staticClass: _vm._$s(4, "sc", "item right"),
            attrs: { _i: 4 },
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.nextPage($event)
              }
            }
          })
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(5, "sc", "container hidden"), attrs: { _i: 5 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(6, "sc", "chapter"), attrs: { _i: 6 } },
            [_vm._v(_vm._$s(6, "t0-0", _vm._s(_vm.chapterName)))]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(7, "sc", "content"),
              style: _vm._$s(7, "s", {
                height: _vm.contentHeight + "px",
                width: _vm.contentWidth + "px",
                columns: _vm.contentWidth + "px",
                columnGap: _vm.columnGap + "px"
              }),
              attrs: { id: "content", _i: 7 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(8, "sc", "book-inner"),
                style: _vm._$s(8, "s", {
                  fontSize: _vm.fontSize + "px",
                  lineHeight: _vm.lineHeight * _vm.fontSize + "px"
                }),
                attrs: { id: "text", _i: 8 },
                domProps: { innerHTML: _vm._s(_vm._$s(8, "v-html", _vm.text)) }
              })
            ]
          ),
          _c("view", {
            staticClass: _vm._$s(9, "sc", "bottom-bar"),
            attrs: { _i: 9 }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(10, "sc", "container hidden"),
          attrs: { _i: 10 }
        },
        [
          _c(
            "view",
            { staticClass: _vm._$s(11, "sc", "chapter"), attrs: { _i: 11 } },
            [_vm._v(_vm._$s(11, "t0-0", _vm._s(_vm.chapterName)))]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(12, "sc", "content"),
              style: _vm._$s(12, "s", {
                height: _vm.contentHeight + "px",
                width: _vm.contentWidth + "px",
                columns: _vm.contentWidth + "px",
                columnGap: _vm.columnGap + "px"
              }),
              attrs: { id: "content", _i: 12 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(13, "sc", "book-inner"),
                style: _vm._$s(13, "s", {
                  fontSize: _vm.fontSize + "px",
                  lineHeight: _vm.lineHeight * _vm.fontSize + "px"
                }),
                attrs: { id: "preText", _i: 13 },
                domProps: {
                  innerHTML: _vm._s(_vm._$s(13, "v-html", _vm.preText))
                }
              })
            ]
          ),
          _c("view", {
            staticClass: _vm._$s(14, "sc", "bottom-bar"),
            attrs: { _i: 14 }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(15, "sc", "container hidden"),
          attrs: { _i: 15 }
        },
        [
          _c(
            "view",
            { staticClass: _vm._$s(16, "sc", "chapter"), attrs: { _i: 16 } },
            [_vm._v(_vm._$s(16, "t0-0", _vm._s(_vm.chapterName)))]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(17, "sc", "content"),
              style: _vm._$s(17, "s", {
                height: _vm.contentHeight + "px",
                width: _vm.contentWidth + "px",
                columns: _vm.contentWidth + "px",
                columnGap: _vm.columnGap + "px"
              }),
              attrs: { id: "content", _i: 17 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(18, "sc", "book-inner"),
                style: _vm._$s(18, "s", {
                  fontSize: _vm.fontSize + "px",
                  lineHeight: _vm.lineHeight * _vm.fontSize + "px"
                }),
                attrs: { id: "nextText", _i: 18 },
                domProps: {
                  innerHTML: _vm._s(_vm._$s(18, "v-html", _vm.nextText))
                }
              })
            ]
          ),
          _c("view", {
            staticClass: _vm._$s(19, "sc", "bottom-bar"),
            attrs: { _i: 19 }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(20, "sc", "container"),
          class: _vm._$s(20, "c", {
            container0: _vm.background === 0,
            container1: _vm.background === 1
          }),
          style: _vm._$s(20, "s", {
            zIndex: 300,
            transform: "translateX(" + _vm.preTranslateX + "px)",
            transition:
              "all " + (_vm.showAnimation ? _vm.turnPageTime : 0) + "s"
          }),
          attrs: { _i: 20 }
        },
        [
          _c(
            "view",
            { staticClass: _vm._$s(21, "sc", "chapter"), attrs: { _i: 21 } },
            [_vm._v(_vm._$s(21, "t0-0", _vm._s(_vm.preChapterName)))]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(22, "sc", "content"),
              style: _vm._$s(22, "s", {
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
              attrs: { _i: 22 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(23, "sc", "book-inner"),
                style: _vm._$s(23, "s", {
                  fontSize: _vm.fontSize + "px",
                  lineHeight: _vm.lineHeight * _vm.fontSize + "px"
                }),
                attrs: { _i: 23 },
                domProps: { innerHTML: _vm._s(_vm._$s(23, "v-html", _vm.text)) }
              })
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(24, "sc", "bottom-bar"), attrs: { _i: 24 } },
            [
              _vm._v(
                _vm._$s(24, "t0-0", _vm._s(_vm.prePages.length)) +
                  _vm._$s(24, "t0-1", _vm._s(_vm.prePages.length))
              )
            ]
          )
        ]
      ),
      _vm._l(_vm._$s(25, "f", { forItems: _vm.pages }), function(
        item,
        $10,
        $20,
        $30
      ) {
        return _c(
          "view",
          {
            key: _vm._$s(25, "f", { forIndex: $20, key: item.id }),
            staticClass: _vm._$s("25-" + $30, "sc", "container"),
            class: _vm._$s("25-" + $30, "c", {
              container0: _vm.background === 0,
              container1: _vm.background === 1
            }),
            style: _vm._$s("25-" + $30, "s", {
              zIndex: item.zIndex,
              transform: "translateX(" + item.translateX + "px)",
              transition:
                "all " + (_vm.showAnimation ? _vm.turnPageTime : 0) + "s"
            }),
            attrs: { _i: "25-" + $30 }
          },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s("26-" + $30, "sc", "chapter"),
                attrs: { _i: "26-" + $30 }
              },
              [_vm._v(_vm._$s("26-" + $30, "t0-0", _vm._s(_vm.chapterName)))]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s("27-" + $30, "sc", "content"),
                style: _vm._$s("27-" + $30, "s", {
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
                attrs: { _i: "27-" + $30 }
              },
              [
                _c("view", {
                  staticClass: _vm._$s("28-" + $30, "sc", "book-inner"),
                  style: _vm._$s("28-" + $30, "s", {
                    fontSize: _vm.fontSize + "px",
                    lineHeight: _vm.lineHeight * _vm.fontSize + "px"
                  }),
                  attrs: { _i: "28-" + $30 },
                  domProps: {
                    innerHTML: _vm._s(_vm._$s("28-" + $30, "v-html", _vm.text))
                  }
                })
              ]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s("29-" + $30, "sc", "bottom-bar"),
                attrs: { _i: "29-" + $30 }
              },
              [
                _vm._v(
                  _vm._$s("29-" + $30, "t0-0", _vm._s(item.id + 1)) +
                    _vm._$s("29-" + $30, "t0-1", _vm._s(_vm.pages.length))
                )
              ]
            )
          ]
        )
      }),
      _vm._$s(30, "i", _vm.pages.length)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(30, "sc", "container"),
              class: _vm._$s(30, "c", {
                container0: _vm.background === 0,
                container1: _vm.background === 1
              }),
              style: _vm._$s(30, "s", {
                zIndex: 100,
                transform: "translateX(0px)"
              }),
              attrs: { _i: 30 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(31, "sc", "chapter"),
                  attrs: { _i: 31 }
                },
                [_vm._v(_vm._$s(31, "t0-0", _vm._s(_vm.nextChapterName)))]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(32, "sc", "content"),
                  style: _vm._$s(32, "s", {
                    height: _vm.contentHeight + "px",
                    width: _vm.contentWidth + "px",
                    fontSize: _vm.fontSize + "px",
                    color: "" + _vm.colorList[_vm.background],
                    transform: "translateX(0px)",
                    columns: _vm.contentWidth + "px",
                    columnGap: _vm.columnGap + "px"
                  }),
                  attrs: { _i: 32 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(33, "sc", "book-inner"),
                    style: _vm._$s(33, "s", {
                      fontSize: _vm.fontSize + "px",
                      lineHeight: _vm.lineHeight * _vm.fontSize + "px"
                    }),
                    attrs: { _i: 33 },
                    domProps: {
                      innerHTML: _vm._s(_vm._$s(33, "v-html", _vm.nextText))
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(34, "sc", "bottom-bar"),
                  attrs: { _i: 34 }
                },
                [_vm._v(_vm._$s(34, "t0-0", _vm._s(_vm.nextPages.length)))]
              )
            ]
          )
        : _vm._e(),
      _c(
        "view",
        {
          staticClass: _vm._$s(35, "sc", "top"),
          style: _vm._$s(35, "s", {
            height: _vm.statusBarHeight + 30 + "px",
            top: _vm.menuShow ? 0 : "-" + (_vm.statusBarHeight + 30) + "px"
          }),
          attrs: { _i: 35 }
        },
        [
          _c("view", {
            style: _vm._$s(36, "s", { height: _vm.statusBarHeight + "px" }),
            attrs: { _i: 36 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(37, "sc", "head"), attrs: { _i: 37 } },
            [
              _c("view", {
                staticClass: _vm._$s(38, "sc", "back"),
                attrs: { _i: 38 },
                on: { click: _vm.back }
              }),
              _c("view", [_vm._v(_vm._$s(39, "t0-0", _vm._s(_vm.chapterName)))])
            ]
          )
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(40, "sc", "bottom"),
          style: _vm._$s(40, "s", { bottom: _vm.menuShow ? 0 : "-300px" }),
          attrs: { _i: 40 }
        },
        [
          _c(
            "view",
            { staticClass: _vm._$s(41, "sc", "item"), attrs: { _i: 41 } },
            [
              _c("view", {
                staticClass: _vm._$s(42, "sc", "item-name"),
                attrs: { _i: 42 }
              }),
              _c("view", {
                staticClass: _vm._$s(43, "sc", "icon"),
                attrs: { _i: 43 },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.bigSize($event)
                  }
                }
              }),
              _c("view", {
                staticClass: _vm._$s(44, "sc", "icon"),
                attrs: { _i: 44 },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.smallSize($event)
                  }
                }
              })
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(45, "sc", "item"), attrs: { _i: 45 } },
            [
              _c("view", {
                staticClass: _vm._$s(46, "sc", "item-name"),
                attrs: { _i: 46 }
              }),
              _c(
                "view",
                {
                  staticClass: _vm._$s(47, "sc", "type-setting"),
                  class: _vm._$s(47, "c", { active: _vm.lineHeight === 1 }),
                  attrs: { _i: 47 },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.changeLineHeight(1)
                    }
                  }
                },
                _vm._l(5, function(i, $11, $21, $31) {
                  return _c("view", {
                    key: i,
                    staticClass: _vm._$s("48-" + $31, "sc", "line"),
                    class: _vm._$s("48-" + $31, "c", {
                      active: _vm.lineHeight === 1
                    }),
                    attrs: { _i: "48-" + $31 }
                  })
                }),
                0
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(49, "sc", "type-setting"),
                  class: _vm._$s(49, "c", { active: _vm.lineHeight === 1.5 }),
                  attrs: { _i: 49 },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.changeLineHeight(1.5)
                    }
                  }
                },
                _vm._l(4, function(i, $12, $22, $32) {
                  return _c("view", {
                    key: i,
                    staticClass: _vm._$s("50-" + $32, "sc", "line"),
                    class: _vm._$s("50-" + $32, "c", {
                      active: _vm.lineHeight === 1.5
                    }),
                    attrs: { _i: "50-" + $32 }
                  })
                }),
                0
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(51, "sc", "type-setting"),
                  class: _vm._$s(51, "c", { active: _vm.lineHeight === 2 }),
                  attrs: { _i: 51 },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.changeLineHeight(2)
                    }
                  }
                },
                _vm._l(3, function(i, $13, $23, $33) {
                  return _c("view", {
                    key: i,
                    staticClass: _vm._$s("52-" + $33, "sc", "line"),
                    class: _vm._$s("52-" + $33, "c", {
                      active: _vm.lineHeight === 2
                    }),
                    attrs: { _i: "52-" + $33 }
                  })
                }),
                0
              )
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(53, "sc", "item"), attrs: { _i: 53 } },
            [
              _c("view", {
                staticClass: _vm._$s(54, "sc", "item-name"),
                attrs: { _i: 54 }
              }),
              _c("view", {
                staticClass: _vm._$s(55, "sc", "icon"),
                class: _vm._$s(55, "c", { active: _vm.background === 0 }),
                attrs: { _i: 55 },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.changeBackground(0)
                  }
                }
              }),
              _c("view", {
                staticClass: _vm._$s(56, "sc", "icon"),
                class: _vm._$s(56, "c", { active: _vm.background === 1 }),
                attrs: { _i: 56 },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.changeBackground(1)
                  }
                }
              })
            ]
          )
        ]
      )
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
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      chapterId: '',\n      chapterName: '',\n      preChapterName: '',\n      nextChapterName: '',\n      textFixed: \"<p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p>\",\n      text: '',\n      nextText: '',\n      preText: '',\n      preTranslateX: 0, //上一章的位移\n\n      showAnimation: false, //是否开启动画\n      pages: [],\n      prePages: [],\n      nextPages: [],\n      contentWidth: 0,\n      contentHeight: 0,\n      windowWidth: 0,\n      windowHeight: 0,\n      platform: '', //设备\n      batteryState: '', //电池状态\n      batteryLevel: '', //电量\n\n      statusBarHeight: 0, //状态栏高度\n      columnGap: 40,\n      currentPage: 0,\n      touchStartX: 0, // 触屏起始点\n      touchStartT: 0, //触屏起始时间\n      touchTimer: null, //用于触摸节流\n      menuShow: false,\n      turnPageTime: 0.5, //翻页动画时间\n\n      fontSize: '',\n      lineHeight: '',\n      background: '',\n      colorList: ['#000', '#666'],\n\n      wait: false, //翻至章节交接时，会导致翻至空白页bug,需要等待章节轮换\n      nextPageLoaded: false, //下一章是否加载完毕\n      prePageLoaded: false, //上一章是否加载完毕\n      turePage: false //加载章节后是否跳转页面\n    };\n  },\n  onLoad: function onLoad() {\n    this.getSystemInfo();\n  },\n  mounted: function mounted() {\n    this.initPage();\n  },\n  computed: {\n    progress: function progress() {\n      return this.currentPage / (this.pages.length - 1);\n    } },\n\n  methods: {\n\n    /**\n             * 返回上一页面\n             **/\n    back: function back() {\n      uni.navigateBack();\n    },\n\n    /**\n       * 获取设备信息\n       **/\n    getSystemInfo: function getSystemInfo() {var _this = this;var _uni$getSystemInfoSyn =\n\n      uni.getSystemInfoSync(),windowWidth = _uni$getSystemInfoSyn.windowWidth,windowHeight = _uni$getSystemInfoSyn.windowHeight,statusBarHeight = _uni$getSystemInfoSyn.statusBarHeight,platform = _uni$getSystemInfoSyn.platform;\n      this.statusBarHeight = statusBarHeight;\n      this.windowWidth = windowWidth;\n      this.windowHeight = windowHeight;\n      this.contentWidth = windowWidth - 40;\n      this.contentHeight = windowHeight - 60;\n      this.platform = platform;\n\n\n      plus.navigator.setFullscreen(true);\n      // 获取安卓电量\n      if (this.platform === 'ios') {\n        var UIDevice = plus.ios.import(\"UIDevice\");\n        var dev = UIDevice.currentDevice();\n        if (!dev.isBatteryMonitoringEnabled()) {\n          dev.setBatteryMonitoringEnabled(true);\n        }\n        this.batteryState = dev.batteryState();\n        this.batteryLevel = dev.batteryLevel();\n      } else\n      {\n        var main = plus.android.runtimeMainActivity();\n        var Intent = plus.android.importClass('android.content.Intent');\n        var recevier = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', {\n          onReceive: function onReceive(context, intent) {\n            var action = intent.getAction();\n            if (action == Intent.ACTION_BATTERY_CHANGED) {\n              _this.batteryState = intent.getIntExtra(\"status\", 0); //电池状态  \n              _this.batteryLevel = intent.getIntExtra(\"level\", 0); //电量\n            }\n          } });\n\n        var IntentFilter = plus.android.importClass('android.content.IntentFilter');\n        var filter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);\n        main.registerReceiver(recevier, filter);\n      }\n\n\n\n      // 获取字体、排版等信息\n      this.fontSize = uni.getStorageSync('fontSize') || 16;\n      this.lineHeight = uni.getStorageSync('lineHeight') || 1.5;\n      this.background = uni.getStorageSync('background') || 0;\n    },\n\n    /**\n       * 获取数据初始化页面\n       **/\n    initPage: function initPage() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                _this2.preTranslateX = -_this2.windowWidth - 20;_context.next = 3;return (\n                  _this2.getData());case 3:\n                _this2.$nextTick(function () {\n                  _this2.calcPages();\n                });case 4:case \"end\":return _context.stop();}}}, _callee);}))();\n    },\n\n    /**\n       * 计算阅读页长度,并生成pages,并跳转至某页（如果有）\n       **/\n    calcPages: function calcPages(type, progress) {var _this3 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.select('#text').boundingClientRect(function (data) {\n        var width = data.width;\n        var height = data.height;\n        _this3.pages = _this3.genPages(width, height);\n        if (type === 1) {\n          _this3.currentPage = Math.floor((_this3.pages.length - 1) * progress);\n          _this3.goToPage(_this3.currentPage);\n        }\n      }).exec();\n      this.calcPrePages();\n      this.calcNextPages();\n    },\n\n    /**\n       * 计算上一章阅读页长度,并生成pages,并跳转至某页（如果有）\n       **/\n    calcPrePages: function calcPrePages() {var _this4 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.select('#preText').boundingClientRect(function (data) {\n        var width = data.width;\n        var height = data.height;\n        _this4.prePages = _this4.genPages(width, height);\n        if (_this4.turePage) {\n          _this4.turePage = false;\n          _this4.prePage();\n        }\n      }).exec();\n    },\n\n    /**\n       * 计算下一章阅读页长度,并生成pages,并跳转至某页（如果有）\n       **/\n    calcNextPages: function calcNextPages() {var _this5 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.select('#nextText').boundingClientRect(function (data) {\n        var width = data.width;\n        var height = data.height;\n        _this5.nextPages = _this5.genPages(width, height);\n        if (_this5.turePage) {\n          _this5.turePage = false;\n          _this5.nextPage();\n        }\n      }).exec();\n    },\n\n\n    /**\n       * 生成阅读页pages\n       **/\n    genPages: function genPages(width, height) {\n      var arr = [];\n      var id = 0;\n      if (this.platform === 'ios') {\n        while (height > 0) {\n          arr.push({\n            id: id,\n            zIndex: 200 - id,\n            translateX: 0 });\n\n          id++;\n          height -= this.contentHeight;\n        }\n      } else\n      {\n        while (width > 0) {\n          arr.push({\n            id: id,\n            zIndex: 200 - id,\n            translateX: 0 });\n\n          id++;\n          width -= this.contentWidth + this.columnGap;\n        }\n      }\n      return arr;\n    },\n\n    /**\n       * 触摸开始\n       **/\n    touchStart: function touchStart(e) {\n      this.showAnimation = false;\n      this.touchStartX = e.touches[0].clientX;\n      this.touchStartT = e.timeStamp;\n    },\n\n    /**\n       * 触摸结束\n       **/\n    touchEnd: function touchEnd(e) {\n      this.showAnimation = true;\n      var deltaX = e.changedTouches[0].clientX - this.touchStartX;\n      if (deltaX > this.windowWidth / 2) {\n        this.prePage();\n      } else\n      if (deltaX < -this.windowWidth / 2) {\n        this.nextPage();\n      } else\n      {\n        var v = 0;\n        v = deltaX / (e.timeStamp - this.touchStartT);\n        if (v <= 0.1 && v > 0) {//翻页速度慢，取消翻页\n          if (this.currentPage !== 0) {\n            this.pages[this.currentPage - 1].translateX = -this.windowWidth - 20;\n          } else\n          {\n            this.preTranslateX = -this.windowWidth - 20;\n          }\n        } else\n        if (v >= -0.1 && v < 0) {//翻页速度慢，取消翻页\n          this.pages[this.currentPage].translateX = 0;\n        } else\n        if (v > 0.1) {\n          this.prePage();\n        } else\n        if (v < -0.1) {\n          this.nextPage();\n        }\n      }\n    },\n\n    /**\n       * 触摸\n       **/\n    touchMove: function touchMove(e) {var _this6 = this;\n\n      if (!this.touchTimer) {\n        var deltaX = e.touches[0].clientX - this.touchStartX;\n        if (deltaX < 0) {\n          if (this.currentPage === this.pages.length - 1) {//如果翻至最后一页\n            if (!this.nextPageLoaded) {\n              this.turePage = true;\n              uni.showLoading({\n                mask: true,\n                title: '正在加载中请稍候' });\n\n              return;\n            }\n            if (this.nextText.length === 0) {//如果没有下一章\n              uni.showToast({\n                title: '这是最后一章',\n                icon: 'none' });\n\n            } else\n            {\n              this.pages[this.currentPage].translateX = deltaX;\n            }\n          } else\n          {\n            this.pages[this.currentPage].translateX = deltaX;\n          }\n        } else\n        {\n          if (this.currentPage === 0) {//如果是第一页\n            if (!this.prePageLoaded) {\n              this.turePage = true;\n              uni.showLoading({\n                mask: true,\n                title: '正在加载中请稍候' });\n\n              return;\n            }\n            if (this.preText.length === 0) {//如果没有上一章\n              uni.showToast({\n                title: '这是第一章',\n                icon: 'none' });\n\n            } else\n            {\n              this.preTranslateX = -this.windowWidth + deltaX;\n            }\n          } else\n          {\n            this.pages[this.currentPage - 1].translateX = -this.windowWidth + deltaX;\n          }\n        }\n        this.touchTimer = setTimeout(function () {\n          _this6.touchTimer = null;\n        }, 100);\n      }\n    },\n\n    /**\n       * 呼出菜单\n       **/\n    showMenu: function showMenu() {\n\n      // plus.navigator.setFullscreen(this.menuShow);\n\n      this.menuShow = !this.menuShow;\n    },\n\n\n    /**\n       * 上一页\n       **/\n    prePage: function prePage() {var _this7 = this;\n      if (this.menuShow) {\n        this.menuShow = false;\n\n        // plus.navigator.setFullscreen(true);\n\n        return;\n      }\n      if (this.currentPage === 0) {\n        if (!this.prePageLoaded) {\n          this.turePage = true;\n          uni.showLoading({\n            mask: true,\n            title: '正在加载中请稍候' });\n\n          return;\n        }\n        if (this.preText.length === 0) {\n          uni.showToast({\n            title: '这是第一章',\n            icon: 'none' });\n\n        } else\n        if (!this.wait) {\n          this.wait = true;\n          uni.showToast({\n            title: this.preChapterName,\n            icon: 'none' });\n\n          this.preTranslateX = 0;\n          // 动画结束后获取上一章,重置页面\n          setTimeout(function () {\n            _this7.preChapter();\n          }, this.turnPageTime * 1000);\n        }\n      } else\n      {\n        this.pages[this.currentPage - 1].translateX = 0;\n        this.currentPage--;\n      }\n    },\n\n    /**\n       * 下一页\n       **/\n    nextPage: function nextPage() {var _this8 = this;\n      if (this.menuShow) {\n        this.menuShow = false;\n\n        // plus.navigator.setFullscreen(true);\n\n        return;\n      }\n      if (this.currentPage === this.pages.length - 1) {\n        if (!this.nextPageLoaded) {\n          this.turePage = true;\n          uni.showLoading({\n            mask: true,\n            title: '正在加载中请稍候' });\n\n          return;\n        }\n        if (this.nextText.length === 0) {\n          uni.showToast({\n            title: '这是最后一章',\n            icon: 'none' });\n\n        } else\n        if (!this.wait) {\n          this.wait = true;\n          uni.showToast({\n            title: this.nextChapterName,\n            icon: 'none' });\n\n          this.pages[this.currentPage].translateX = -this.windowWidth - 20;\n          // 动画结束后获取下一章,重置页面\n          setTimeout(function () {\n            _this8.nextChapter();\n          }, this.turnPageTime * 1000);\n        }\n      } else\n      {\n        this.pages[this.currentPage].translateX = -this.windowWidth - 20;\n        this.currentPage++;\n      }\n\n    },\n\n    /**\n       * 获取下一章,重置页面，将本章变为前一章，将下一章变为本章，获取下一章内容\n       **/\n    nextChapter: function nextChapter() {\n      this.chapterId++;\n      this.preText = this.text;\n      this.text = this.nextText;\n      this.nextText = '';\n      this.getText(this.chapterId + 1, 'next');\n      this.prePages = this.pages.map(function (value) {\n        value.translateX = 0;\n        return value;\n      });\n      this.pages = [].concat(this.nextPages);\n      this.nextPages = [];\n      this.preChapterName = this.chapterName;\n      this.chapterName = this.nextChapterName;\n      this.nextChapterName = '';\n      this.wait = false;\n      this.currentPage = 0;\n      this.goToPage(this.currentPage);\n\n    },\n\n    /**\n       * 获取上一章,重置页面，将本章变为后一章，将上一章变为本章，获取上一章内容\n       **/\n    preChapter: function preChapter() {\n      this.preTranslateX = -this.windowWidth - 20;\n      this.chapterId--;\n      this.nextText = this.text;\n      this.text = this.preText;\n      this.preText = '';\n      this.getText(this.chapterId - 1, 'pre');\n      this.nextPages = this.pages.map(function (value) {\n        value.translateX = 0;\n        return value;\n      });\n      this.pages = [].concat(this.prePages);\n      this.prePages = [];\n      this.nextChapterName = this.chapterName;\n      this.chapterName = this.preChapterName;\n      this.preChapterName = '';\n      this.wait = false;\n\n      this.currentPage = this.pages.length - 1;\n      this.goToPage(this.currentPage);\n    },\n\n    /**\n       * 根据页码跳转\n       **/\n    goToPage: function goToPage(page) {var _this9 = this;\n      if (page > this.pages.length - 1) {\n        page = this.pages.length - 1;\n      }\n      this.showAnimation = false;\n      this.pages.forEach(function (value, index) {\n        if (index < page) {\n          value.translateX = -_this9.windowWidth - 20;\n        }\n      });\n    },\n\n    /**\n       * 加大字体\n       **/\n    bigSize: function bigSize() {var _this10 = this;\n      if (this.fontSize < 25) {\n        var progress = this.progress;\n        this.fontSize++;\n        uni.setStorageSync('fontSize', this.fontSize);\n        this.$nextTick(function () {\n          _this10.calcPages(1, progress);\n        });\n      } else\n      {\n        uni.showToast({\n          title: '最大字体',\n          icon: 'none' });\n\n      }\n\n\n    },\n\n    /**\n       * 缩小字体\n       **/\n    smallSize: function smallSize() {var _this11 = this;\n      if (this.fontSize > 14) {\n        var progress = this.progress;\n        this.fontSize--;\n        uni.setStorageSync('fontSize', this.fontSize);\n        this.$nextTick(function () {\n          _this11.calcPages(1, progress);\n        });\n      } else\n      {\n        uni.showToast({\n          title: '最小字体',\n          icon: 'none' });\n\n      }\n    },\n\n    /**\n       * 改变行距\n       **/\n    changeLineHeight: function changeLineHeight(lineHeight) {var _this12 = this;\n      if (lineHeight === this.lineHeight) {\n        return;\n      } else\n      {\n        var progress = this.progress;\n        this.lineHeight = lineHeight;\n        uni.setStorageSync('lineHeight', this.lineHeight);\n        this.$nextTick(function () {\n          _this12.calcPages(1, progress);\n        });\n      }\n    },\n\n    /**\n       * 改变背景\n       **/\n    changeBackground: function changeBackground(background) {\n      if (background === this.background) {\n        return;\n      } else\n      {\n        this.background = background;\n        uni.setStorageSync('background', this.background);\n      }\n    },\n\n    /**\n       * 获取数据，包括阅读到第几章，以及前中后三章内容\n       **/\n    getData: function getData() {var _this13 = this;\n      uni.showLoading({ mask: true });\n      return new Promise(function (resolve, reject) {\n        // 模拟网络时间\n        _this13.nextPageLoaded = true;\n        _this13.prePageLoaded = true;\n        setTimeout(function () {\n          uni.hideLoading();\n          _this13.chapterId = 2;\n          _this13.chapterName = \"\\u7B2C\".concat(_this13.chapterId, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n          _this13.preChapterName = \"\\u7B2C\".concat(_this13.chapterId - 1, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n          _this13.nextChapterName = \"\\u7B2C\".concat(_this13.chapterId + 1, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n          _this13.text = _this13.chapterId + _this13.textFixed;\n          _this13.preText = _this13.chapterId - 1 + _this13.textFixed;\n          _this13.nextText = _this13.chapterId + 1 + _this13.textFixed;\n          resolve();\n        }, 1000);\n      });\n\n    },\n\n    /**\n       * 获取上一章或下一章数据\n       **/\n    getText: function getText(chapterId, type) {var _this14 = this;\n      if (type === 'next') {\n        this.nextPageLoaded = false;\n      } else\n      {\n        this.prePageLoaded = false;\n      }\n      // 模拟网络时间\n      setTimeout(function () {\n        uni.hideLoading();\n        if (type === 'next') {\n          _this14.nextPageLoaded = true;\n          _this14.nextText = chapterId + _this14.textFixed;\n          _this14.nextChapterName = \"\\u7B2C\".concat(chapterId, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n          _this14.$nextTick(function () {\n            _this14.calcNextPages();\n          });\n        } else\n        {\n          _this14.prePageLoaded = true;\n          if (chapterId === 0) {\n            _this14.preText = '';\n            _this14.preChapterName = '';\n          } else\n          {\n            _this14.preText = chapterId + _this14.textFixed;\n            _this14.preChapterName = \"\\u7B2C\".concat(chapterId, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\");\n            _this14.$nextTick(function () {\n              _this14.calcPrePages();\n            });\n          }\n        }\n\n      }, 500);\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcmVhZC9yZWFkLnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwiY2hhcHRlcklkIiwiY2hhcHRlck5hbWUiLCJwcmVDaGFwdGVyTmFtZSIsIm5leHRDaGFwdGVyTmFtZSIsInRleHRGaXhlZCIsInRleHQiLCJuZXh0VGV4dCIsInByZVRleHQiLCJwcmVUcmFuc2xhdGVYIiwic2hvd0FuaW1hdGlvbiIsInBhZ2VzIiwicHJlUGFnZXMiLCJuZXh0UGFnZXMiLCJjb250ZW50V2lkdGgiLCJjb250ZW50SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJwbGF0Zm9ybSIsImJhdHRlcnlTdGF0ZSIsImJhdHRlcnlMZXZlbCIsInN0YXR1c0JhckhlaWdodCIsImNvbHVtbkdhcCIsImN1cnJlbnRQYWdlIiwidG91Y2hTdGFydFgiLCJ0b3VjaFN0YXJ0VCIsInRvdWNoVGltZXIiLCJtZW51U2hvdyIsInR1cm5QYWdlVGltZSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImJhY2tncm91bmQiLCJjb2xvckxpc3QiLCJ3YWl0IiwibmV4dFBhZ2VMb2FkZWQiLCJwcmVQYWdlTG9hZGVkIiwidHVyZVBhZ2UiLCJvbkxvYWQiLCJnZXRTeXN0ZW1JbmZvIiwibW91bnRlZCIsImluaXRQYWdlIiwiY29tcHV0ZWQiLCJwcm9ncmVzcyIsImxlbmd0aCIsIm1ldGhvZHMiLCJiYWNrIiwidW5pIiwibmF2aWdhdGVCYWNrIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJwbHVzIiwibmF2aWdhdG9yIiwic2V0RnVsbHNjcmVlbiIsIlVJRGV2aWNlIiwiaW9zIiwiaW1wb3J0IiwiZGV2IiwiY3VycmVudERldmljZSIsImlzQmF0dGVyeU1vbml0b3JpbmdFbmFibGVkIiwic2V0QmF0dGVyeU1vbml0b3JpbmdFbmFibGVkIiwibWFpbiIsImFuZHJvaWQiLCJydW50aW1lTWFpbkFjdGl2aXR5IiwiSW50ZW50IiwiaW1wb3J0Q2xhc3MiLCJyZWNldmllciIsImltcGxlbWVudHMiLCJvblJlY2VpdmUiLCJjb250ZXh0IiwiaW50ZW50IiwiYWN0aW9uIiwiZ2V0QWN0aW9uIiwiQUNUSU9OX0JBVFRFUllfQ0hBTkdFRCIsImdldEludEV4dHJhIiwiSW50ZW50RmlsdGVyIiwiZmlsdGVyIiwicmVnaXN0ZXJSZWNlaXZlciIsImdldFN0b3JhZ2VTeW5jIiwiZ2V0RGF0YSIsIiRuZXh0VGljayIsImNhbGNQYWdlcyIsInR5cGUiLCJxdWVyeSIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJpbiIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2VuUGFnZXMiLCJNYXRoIiwiZmxvb3IiLCJnb1RvUGFnZSIsImV4ZWMiLCJjYWxjUHJlUGFnZXMiLCJjYWxjTmV4dFBhZ2VzIiwicHJlUGFnZSIsIm5leHRQYWdlIiwiYXJyIiwiaWQiLCJwdXNoIiwiekluZGV4IiwidHJhbnNsYXRlWCIsInRvdWNoU3RhcnQiLCJlIiwidG91Y2hlcyIsImNsaWVudFgiLCJ0aW1lU3RhbXAiLCJ0b3VjaEVuZCIsImRlbHRhWCIsImNoYW5nZWRUb3VjaGVzIiwidiIsInRvdWNoTW92ZSIsInNob3dMb2FkaW5nIiwibWFzayIsInRpdGxlIiwic2hvd1RvYXN0IiwiaWNvbiIsInNldFRpbWVvdXQiLCJzaG93TWVudSIsInByZUNoYXB0ZXIiLCJuZXh0Q2hhcHRlciIsImdldFRleHQiLCJtYXAiLCJ2YWx1ZSIsImNvbmNhdCIsInBhZ2UiLCJmb3JFYWNoIiwiaW5kZXgiLCJiaWdTaXplIiwic2V0U3RvcmFnZVN5bmMiLCJzbWFsbFNpemUiLCJjaGFuZ2VMaW5lSGVpZ2h0IiwiY2hhbmdlQmFja2dyb3VuZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaGlkZUxvYWRpbmciXSwibWFwcGluZ3MiOiI4N0JBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2RBLE1BRGMsa0JBQ1A7QUFDTixXQUFPO0FBQ05DLGVBQVMsRUFBRSxFQURMO0FBRU5DLGlCQUFXLEVBQUUsRUFGUDtBQUdOQyxv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QzBGLFdBQUo7QUFDQSxZQUFJeEQsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDcEIsaUJBQUksQ0FBQzlDLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxpQkFBSSxDQUFDM0IsUUFBTCxHQUFnQk4sU0FBUyxHQUFHLE9BQUksQ0FBQ0ksU0FBakM7QUFDQSxpQkFBSSxDQUFDRCxlQUFMLG1CQUEyQkgsU0FBM0I7QUFDQSxpQkFBSSxDQUFDNkUsU0FBTCxDQUFlLFlBQU07QUFDcEIsbUJBQUksQ0FBQ2dCLGFBQUw7QUFDQSxXQUZEO0FBR0EsU0FQRDtBQVFLO0FBQ0osaUJBQUksQ0FBQzNELGFBQUwsR0FBcUIsSUFBckI7QUFDQSxjQUFJbEMsU0FBUyxLQUFLLENBQWxCLEVBQXFCO0FBQ3BCLG1CQUFJLENBQUNPLE9BQUwsR0FBZSxFQUFmO0FBQ0EsbUJBQUksQ0FBQ0wsY0FBTCxHQUFzQixFQUF0QjtBQUNBLFdBSEQ7QUFJSztBQUNKLG1CQUFJLENBQUNLLE9BQUwsR0FBZVAsU0FBUyxHQUFHLE9BQUksQ0FBQ0ksU0FBaEM7QUFDQSxtQkFBSSxDQUFDRixjQUFMLG1CQUEwQkYsU0FBMUI7QUFDQSxtQkFBSSxDQUFDNkUsU0FBTCxDQUFlLFlBQU07QUFDcEIscUJBQUksQ0FBQ2UsWUFBTDtBQUNBLGFBRkQ7QUFHQTtBQUNEOztBQUVELE9BekJTLEVBeUJQLEdBekJPLENBQVY7QUEwQkEsS0E1aUJPLEVBeERLLEUiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hhcHRlcklkOiAnJyxcblx0XHRcdGNoYXB0ZXJOYW1lOiAnJyxcblx0XHRcdHByZUNoYXB0ZXJOYW1lOiAnJyxcblx0XHRcdG5leHRDaGFwdGVyTmFtZTogJycsXG5cdFx0XHR0ZXh0Rml4ZWQ6YDxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPmAsXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdG5leHRUZXh0OiAnJyxcblx0XHRcdHByZVRleHQ6ICcnLFxuXHRcdFx0cHJlVHJhbnNsYXRlWDogMCwgIC8v5LiK5LiA56ug55qE5L2N56e7XG5cdFx0XHRcblx0XHRcdHNob3dBbmltYXRpb246IGZhbHNlLCAvL+aYr+WQpuW8gOWQr+WKqOeUu1xuXHRcdFx0cGFnZXM6IFtdLFxuXHRcdFx0cHJlUGFnZXM6IFtdLFxuXHRcdFx0bmV4dFBhZ2VzOiBbXSxcblx0XHRcdGNvbnRlbnRXaWR0aDogMCxcblx0XHRcdGNvbnRlbnRIZWlnaHQ6IDAsXG5cdFx0XHR3aW5kb3dXaWR0aDogMCxcblx0XHRcdHdpbmRvd0hlaWdodDogMCxcblx0XHRcdHBsYXRmb3JtOiAnJywgIC8v6K6+5aSHXG5cdFx0XHRiYXR0ZXJ5U3RhdGU6ICcnLCAvL+eUteaxoOeKtuaAgVxuXHRcdFx0YmF0dGVyeUxldmVsOiAnJywgLy/nlLXph49cblx0XHRcdFxuXHRcdFx0c3RhdHVzQmFySGVpZ2h0OiAwLCAvL+eKtuaAgeagj+mrmOW6plxuXHRcdFx0Y29sdW1uR2FwOiA0MCxcblx0XHRcdGN1cnJlbnRQYWdlOiAwLFxuXHRcdFx0dG91Y2hTdGFydFg6IDAsICAvLyDop6blsY/otbflp4vngrlcblx0XHRcdHRvdWNoU3RhcnRUOiAwLCAgLy/op6blsY/otbflp4vml7bpl7Rcblx0XHRcdHRvdWNoVGltZXI6IG51bGwgICwvL+eUqOS6juinpuaRuOiKgua1gVxuXHRcdFx0bWVudVNob3c6IGZhbHNlLFxuXHRcdFx0dHVyblBhZ2VUaW1lOiAwLjUsICAvL+e/u+mhteWKqOeUu+aXtumXtFxuXHRcdFx0XG5cdFx0XHRmb250U2l6ZTogJycsXG5cdFx0XHRsaW5lSGVpZ2h0OiAnJyxcblx0XHRcdGJhY2tncm91bmQ6ICcnLFxuXHRcdFx0Y29sb3JMaXN0OiBbJyMwMDAnLCAnIzY2NiddLFxuXHRcdFx0XG5cdFx0XHR3YWl0OiBmYWxzZSAgICwvL+e/u+iHs+eroOiKguS6pOaOpeaXtu+8jOS8muWvvOiHtOe/u+iHs+epuueZvemhtWJ1ZyzpnIDopoHnrYnlvoXnq6DoioLova7mjaJcblx0XHRcdG5leHRQYWdlTG9hZGVkOiBmYWxzZSwgICAvL+S4i+S4gOeroOaYr+WQpuWKoOi9veWujOavlVxuXHRcdFx0cHJlUGFnZUxvYWRlZDogZmFsc2UsICAgLy/kuIrkuIDnq6DmmK/lkKbliqDovb3lrozmr5Vcblx0XHRcdHR1cmVQYWdlOiBmYWxzZSwgICAvL+WKoOi9veeroOiKguWQjuaYr+WQpui3s+i9rOmhtemdolxuXHRcdH1cblx0fSxcblx0b25Mb2FkKCkge1xuXHRcdHRoaXMuZ2V0U3lzdGVtSW5mbygpXG5cdH0sXG5cdG1vdW50ZWQoKSB7XG5cdFx0dGhpcy5pbml0UGFnZSgpXG5cdH0sXG5cdGNvbXB1dGVkOntcblx0XHRwcm9ncmVzcygpIHtcblx0XHRcdHJldHVybiB0aGlzLmN1cnJlbnRQYWdlIC8gKHRoaXMucGFnZXMubGVuZ3RoIC0gMSk7XG5cdFx0fVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0XG5cdFx0LyoqXG5cdFx0KiDov5Tlm57kuIrkuIDpobXpnaJcblx0XHQqKi9cblx0XHRiYWNrKCkge1xuXHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpXG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQqIOiOt+WPluiuvuWkh+S/oeaBr1xuXHRcdCoqL1xuXHRcdGdldFN5c3RlbUluZm8oKSB7XG5cdFx0XHRcblx0XHRcdGNvbnN0IHsgd2luZG93V2lkdGgsIHdpbmRvd0hlaWdodCwgc3RhdHVzQmFySGVpZ2h0LCBwbGF0Zm9ybSB9ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XG5cdFx0XHR0aGlzLnN0YXR1c0JhckhlaWdodCA9IHN0YXR1c0JhckhlaWdodDtcblx0XHRcdHRoaXMud2luZG93V2lkdGggPSB3aW5kb3dXaWR0aDtcblx0XHRcdHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93SGVpZ2h0O1xuXHRcdFx0dGhpcy5jb250ZW50V2lkdGggPSB3aW5kb3dXaWR0aCAtIDQwO1xuXHRcdFx0dGhpcy5jb250ZW50SGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gNjA7XG5cdFx0XHR0aGlzLnBsYXRmb3JtID0gcGxhdGZvcm07XG5cdFx0XHRcblxuXHRcdFx0XHRwbHVzLm5hdmlnYXRvci5zZXRGdWxsc2NyZWVuKHRydWUpO1xuXHRcdFx0XHQvLyDojrflj5blronljZPnlLXph49cblx0XHRcdFx0aWYgKHRoaXMucGxhdGZvcm0gPT09ICdpb3MnKSB7XG5cdFx0XHRcdFx0bGV0IFVJRGV2aWNlID0gcGx1cy5pb3MuaW1wb3J0KFwiVUlEZXZpY2VcIik7ICBcblx0XHRcdFx0XHRsZXQgZGV2ID0gVUlEZXZpY2UuY3VycmVudERldmljZSgpOyAgXG5cdFx0XHRcdFx0aWYgKCFkZXYuaXNCYXR0ZXJ5TW9uaXRvcmluZ0VuYWJsZWQoKSkgeyAgXG5cdFx0XHRcdFx0ICAgIGRldi5zZXRCYXR0ZXJ5TW9uaXRvcmluZ0VuYWJsZWQodHJ1ZSk7ICBcblx0XHRcdFx0XHR9ICBcblx0XHRcdFx0XHR0aGlzLmJhdHRlcnlTdGF0ZSA9IGRldi5iYXR0ZXJ5U3RhdGUoKTtcblx0XHRcdFx0XHR0aGlzLmJhdHRlcnlMZXZlbCA9IGRldi5iYXR0ZXJ5TGV2ZWwoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRsZXQgbWFpbiA9IHBsdXMuYW5kcm9pZC5ydW50aW1lTWFpbkFjdGl2aXR5KCk7XG5cdFx0XHRcdFx0bGV0IEludGVudCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcygnYW5kcm9pZC5jb250ZW50LkludGVudCcpOyAgXG5cdFx0XHRcdFx0bGV0IHJlY2V2aWVyID0gcGx1cy5hbmRyb2lkLmltcGxlbWVudHMoJ2lvLmRjbG91ZC5mZWF0dXJlLmludGVybmFsLnJlZmxlY3QuQnJvYWRjYXN0UmVjZWl2ZXInLCB7ICBcblx0XHRcdFx0XHQgICAgb25SZWNlaXZlOiAoY29udGV4dCwgaW50ZW50KSA9PiB7ICBcblx0XHRcdFx0XHQgICAgICAgIGxldCBhY3Rpb24gPSBpbnRlbnQuZ2V0QWN0aW9uKCk7ICBcblx0XHRcdFx0XHQgICAgICAgIGlmIChhY3Rpb24gPT0gSW50ZW50LkFDVElPTl9CQVRURVJZX0NIQU5HRUQpIHsgIFxuXHRcdFx0XHRcdCAgICAgICAgICAgIHRoaXMuYmF0dGVyeVN0YXRlID0gaW50ZW50LmdldEludEV4dHJhKFwic3RhdHVzXCIsIDApOyAvL+eUteaxoOeKtuaAgSAgXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5iYXR0ZXJ5TGV2ZWwgPSBpbnRlbnQuZ2V0SW50RXh0cmEoXCJsZXZlbFwiLCAwKTsgLy/nlLXph49cblx0XHRcdFx0XHQgICAgICAgIH0gIFxuXHRcdFx0XHRcdCAgICB9ICBcblx0XHRcdFx0XHQgfSk7ICBcblx0XHRcdFx0XHRsZXQgSW50ZW50RmlsdGVyID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKCdhbmRyb2lkLmNvbnRlbnQuSW50ZW50RmlsdGVyJyk7ICBcblx0XHRcdFx0XHRsZXQgZmlsdGVyID0gbmV3IEludGVudEZpbHRlcihJbnRlbnQuQUNUSU9OX0JBVFRFUllfQ0hBTkdFRCk7ICBcblx0XHRcdFx0XHRtYWluLnJlZ2lzdGVyUmVjZWl2ZXIocmVjZXZpZXIsIGZpbHRlcik7IFxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXG5cdFx0XHRcblx0XHRcdC8vIOiOt+WPluWtl+S9k+OAgeaOkueJiOetieS/oeaBr1xuXHRcdFx0dGhpcy5mb250U2l6ZSA9IHVuaS5nZXRTdG9yYWdlU3luYygnZm9udFNpemUnKSB8fCAxNjtcblx0XHRcdHRoaXMubGluZUhlaWdodCA9IHVuaS5nZXRTdG9yYWdlU3luYygnbGluZUhlaWdodCcpIHx8IDEuNTtcblx0XHRcdHRoaXMuYmFja2dyb3VuZCA9IHVuaS5nZXRTdG9yYWdlU3luYygnYmFja2dyb3VuZCcpIHx8IDA7XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQqIOiOt+WPluaVsOaNruWIneWni+WMlumhtemdolxuXHRcdCoqL1xuXHRcdGFzeW5jIGluaXRQYWdlKCkge1xuXHRcdFx0dGhpcy5wcmVUcmFuc2xhdGVYID0gLXRoaXMud2luZG93V2lkdGggLSAyMDtcblx0XHRcdGF3YWl0IHRoaXMuZ2V0RGF0YSgpXG5cdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2FsY1BhZ2VzKClcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQqIOiuoeeul+mYheivu+mhtemVv+W6pizlubbnlJ/miJBwYWdlcyzlubbot7Povazoh7Pmn5DpobXvvIjlpoLmnpzmnInvvIlcblx0XHQqKi9cblx0XHRjYWxjUGFnZXModHlwZSwgcHJvZ3Jlc3MpIHtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcblx0XHRcdHF1ZXJ5LnNlbGVjdCgnI3RleHQnKS5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XG5cdFx0XHRcdGxldCB3aWR0aCA9IGRhdGEud2lkdGg7XG5cdFx0XHRcdGxldCBoZWlnaHQgPSBkYXRhLmhlaWdodDtcblx0XHRcdFx0dGhpcy5wYWdlcyA9IHRoaXMuZ2VuUGFnZXMod2lkdGgsIGhlaWdodClcblx0XHRcdFx0aWYgKHR5cGUgPT09IDEpIHtcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRQYWdlID0gTWF0aC5mbG9vcigodGhpcy5wYWdlcy5sZW5ndGggLSAxKSAqIHByb2dyZXNzKVxuXHRcdFx0XHRcdHRoaXMuZ29Ub1BhZ2UodGhpcy5jdXJyZW50UGFnZSlcblx0XHRcdFx0fVxuXHRcdFx0fSkuZXhlYygpO1xuXHRcdFx0dGhpcy5jYWxjUHJlUGFnZXMoKVxuXHRcdFx0dGhpcy5jYWxjTmV4dFBhZ2VzKClcblx0XHR9LFxuXHRcdFxuXHRcdC8qKlxuXHRcdCog6K6h566X5LiK5LiA56ug6ZiF6K+76aG16ZW/5bqmLOW5tueUn+aIkHBhZ2VzLOW5tui3s+i9rOiHs+afkOmhte+8iOWmguaenOacie+8iVxuXHRcdCoqL1xuXHRcdGNhbGNQcmVQYWdlcygpIHtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcblx0XHRcdHF1ZXJ5LnNlbGVjdCgnI3ByZVRleHQnKS5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XG5cdFx0XHRcdGxldCB3aWR0aCA9IGRhdGEud2lkdGg7XG5cdFx0XHRcdGxldCBoZWlnaHQgPSBkYXRhLmhlaWdodDtcblx0XHRcdFx0dGhpcy5wcmVQYWdlcyA9IHRoaXMuZ2VuUGFnZXMod2lkdGgsIGhlaWdodClcblx0XHRcdFx0aWYgKHRoaXMudHVyZVBhZ2UpIHtcblx0XHRcdFx0XHR0aGlzLnR1cmVQYWdlID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy5wcmVQYWdlKClcblx0XHRcdFx0fVxuXHRcdFx0fSkuZXhlYygpO1xuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0KiDorqHnrpfkuIvkuIDnq6DpmIXor7vpobXplb/luqYs5bm255Sf5oiQcGFnZXMs5bm26Lez6L2s6Iez5p+Q6aG177yI5aaC5p6c5pyJ77yJXG5cdFx0KiovXG5cdFx0Y2FsY05leHRQYWdlcygpIHtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcblx0XHRcdHF1ZXJ5LnNlbGVjdCgnI25leHRUZXh0JykuYm91bmRpbmdDbGllbnRSZWN0KGRhdGEgPT4ge1xuXHRcdFx0XHRsZXQgd2lkdGggPSBkYXRhLndpZHRoO1xuXHRcdFx0XHRsZXQgaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG5cdFx0XHRcdHRoaXMubmV4dFBhZ2VzID0gdGhpcy5nZW5QYWdlcyh3aWR0aCwgaGVpZ2h0KVxuXHRcdFx0XHRpZiAodGhpcy50dXJlUGFnZSkge1xuXHRcdFx0XHRcdHRoaXMudHVyZVBhZ2UgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLm5leHRQYWdlKClcblx0XHRcdFx0fVxuXHRcdFx0fSkuZXhlYygpO1xuXHRcdH0sXG5cdFx0XG5cdFx0XG5cdFx0LyoqXG5cdFx0KiDnlJ/miJDpmIXor7vpobVwYWdlc1xuXHRcdCoqL1xuXHRcdGdlblBhZ2VzKHdpZHRoLCBoZWlnaHQpIHtcblx0XHRcdGxldCBhcnIgPSBbXTtcblx0XHRcdGxldCBpZCA9IDA7XG5cdFx0XHRpZiAodGhpcy5wbGF0Zm9ybSA9PT0gJ2lvcycpIHtcblx0XHRcdFx0d2hpbGUgKGhlaWdodCA+IDApIHtcblx0XHRcdFx0XHRhcnIucHVzaCh7XG5cdFx0XHRcdFx0XHRpZCxcblx0XHRcdFx0XHRcdHpJbmRleDogMjAwIC0gaWQsXG5cdFx0XHRcdFx0XHR0cmFuc2xhdGVYOiAwXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0aWQrKztcblx0XHRcdFx0XHRoZWlnaHQgLT0gdGhpcy5jb250ZW50SGVpZ2h0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR3aGlsZSAod2lkdGggPiAwKSB7XG5cdFx0XHRcdFx0YXJyLnB1c2goe1xuXHRcdFx0XHRcdFx0aWQsXG5cdFx0XHRcdFx0XHR6SW5kZXg6IDIwMCAtIGlkLFxuXHRcdFx0XHRcdFx0dHJhbnNsYXRlWDogMFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGlkKys7XG5cdFx0XHRcdFx0d2lkdGggLT0gdGhpcy5jb250ZW50V2lkdGggKyB0aGlzLmNvbHVtbkdhcFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYXJyO1xuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0KiDop6bmkbjlvIDlp4tcblx0XHQqKi9cblx0XHR0b3VjaFN0YXJ0KGUpIHtcblx0XHRcdHRoaXMuc2hvd0FuaW1hdGlvbiA9IGZhbHNlO1xuXHRcdFx0dGhpcy50b3VjaFN0YXJ0WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuXHRcdFx0dGhpcy50b3VjaFN0YXJ0VCA9IGUudGltZVN0YW1wO1xuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0KiDop6bmkbjnu5PmnZ9cblx0XHQqKi9cblx0XHR0b3VjaEVuZChlKSB7XG5cdFx0XHR0aGlzLnNob3dBbmltYXRpb24gPSB0cnVlO1xuXHRcdFx0bGV0IGRlbHRhWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFg7XG5cdFx0XHRpZiAoZGVsdGFYID4gdGhpcy53aW5kb3dXaWR0aC8yKSB7XG5cdFx0XHRcdHRoaXMucHJlUGFnZSgpXG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChkZWx0YVggPCAtdGhpcy53aW5kb3dXaWR0aC8yKSB7XG5cdFx0XHRcdHRoaXMubmV4dFBhZ2UoKVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGxldCB2ID0gMDtcblx0XHRcdFx0diA9IGRlbHRhWCAvIChlLnRpbWVTdGFtcCAtIHRoaXMudG91Y2hTdGFydFQpO1xuXHRcdFx0XHRpZiAodiA8PSAwLjEgJiYgdiA+IDApIHsgIC8v57+76aG16YCf5bqm5oWi77yM5Y+W5raI57+76aG1XG5cdFx0XHRcdFx0aWYgKHRoaXMuY3VycmVudFBhZ2UgIT09IDApIHtcblx0XHRcdFx0XHRcdHRoaXMucGFnZXNbdGhpcy5jdXJyZW50UGFnZSAtIDFdLnRyYW5zbGF0ZVggPSAtdGhpcy53aW5kb3dXaWR0aCAtIDIwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMucHJlVHJhbnNsYXRlWCA9IC10aGlzLndpbmRvd1dpZHRoIC0gMjA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKHYgPj0gLTAuMSAmJiB2IDwgMCkgeyAgLy/nv7vpobXpgJ/luqbmhaLvvIzlj5bmtojnv7vpobVcblx0XHRcdFx0XHR0aGlzLnBhZ2VzW3RoaXMuY3VycmVudFBhZ2VdLnRyYW5zbGF0ZVggPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYodiA+IDAuMSkge1xuXHRcdFx0XHRcdHRoaXMucHJlUGFnZSgpXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAodiA8IC0wLjEpIHtcblx0XHRcdFx0XHR0aGlzLm5leHRQYWdlKClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0KiDop6bmkbhcblx0XHQqKi9cblx0XHR0b3VjaE1vdmUoZSkge1xuXHRcdFx0XG5cdFx0XHRpZiAoIXRoaXMudG91Y2hUaW1lcikge1xuXHRcdFx0XHRsZXQgZGVsdGFYID0gZS50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLnRvdWNoU3RhcnRYO1xuXHRcdFx0XHRpZiAoZGVsdGFYIDwgMCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmN1cnJlbnRQYWdlID09PSB0aGlzLnBhZ2VzLmxlbmd0aCAtIDEpIHsgIC8v5aaC5p6c57+76Iez5pyA5ZCO5LiA6aG1XG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMubmV4dFBhZ2VMb2FkZWQpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy50dXJlUGFnZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XG5cdFx0XHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+ato+WcqOWKoOi9veS4reivt+eojeWAmSdcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5uZXh0VGV4dC5sZW5ndGggPT09IDApIHsgIC8v5aaC5p6c5rKh5pyJ5LiL5LiA56ugXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn6L+Z5piv5pyA5ZCO5LiA56ugJyxcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnBhZ2VzW3RoaXMuY3VycmVudFBhZ2VdLnRyYW5zbGF0ZVggPSBkZWx0YVg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlXS50cmFuc2xhdGVYID0gZGVsdGFYO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRpZiAodGhpcy5jdXJyZW50UGFnZSA9PT0gMCkgeyAgLy/lpoLmnpzmmK/nrKzkuIDpobVcblx0XHRcdFx0XHRcdGlmICghdGhpcy5wcmVQYWdlTG9hZGVkKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudHVyZVBhZ2UgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xuXHRcdFx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmraPlnKjliqDovb3kuK3or7fnqI3lgJknXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHRoaXMucHJlVGV4dC5sZW5ndGggPT09IDApIHsgIC8v5aaC5p6c5rKh5pyJ5LiK5LiA56ugXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn6L+Z5piv56ys5LiA56ugJyxcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByZVRyYW5zbGF0ZVggPSAtdGhpcy53aW5kb3dXaWR0aCArIGRlbHRhWDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnBhZ2VzW3RoaXMuY3VycmVudFBhZ2UgLSAxXS50cmFuc2xhdGVYID0gLXRoaXMud2luZG93V2lkdGggKyBkZWx0YVg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudG91Y2hUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMudG91Y2hUaW1lciA9IG51bGw7XG5cdFx0XHRcdH0sIDEwMClcblx0XHRcdH1cblx0XHR9LFxuXHRcdFxuXHRcdC8qKlxuXHRcdCog5ZG85Ye66I+c5Y2VXG5cdFx0KiovXG5cdFx0c2hvd01lbnUoKSB7XG5cblx0XHRcdFx0Ly8gcGx1cy5uYXZpZ2F0b3Iuc2V0RnVsbHNjcmVlbih0aGlzLm1lbnVTaG93KTtcblxuXHRcdFx0dGhpcy5tZW51U2hvdyA9ICF0aGlzLm1lbnVTaG93O1xuXHRcdH0sXG5cdFx0XG5cdFx0XG5cdFx0LyoqXG5cdFx0KiDkuIrkuIDpobVcblx0XHQqKi9cblx0XHRwcmVQYWdlKCkge1xuXHRcdFx0aWYgKHRoaXMubWVudVNob3cpIHtcblx0XHRcdFx0dGhpcy5tZW51U2hvdyA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0Ly8gcGx1cy5uYXZpZ2F0b3Iuc2V0RnVsbHNjcmVlbih0cnVlKTtcblxuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmN1cnJlbnRQYWdlID09PSAwKSB7XG5cdFx0XHRcdGlmICghdGhpcy5wcmVQYWdlTG9hZGVkKSB7XG5cdFx0XHRcdFx0dGhpcy50dXJlUGFnZSA9IHRydWU7XG5cdFx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcblx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+ato+WcqOWKoOi9veS4reivt+eojeWAmSdcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggdGhpcy5wcmVUZXh0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0dGl0bGU6ICfov5nmmK/nrKzkuIDnq6AnLFxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICghdGhpcy53YWl0KSB7XG5cdFx0XHRcdFx0dGhpcy53YWl0ID0gdHJ1ZTtcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOiB0aGlzLnByZUNoYXB0ZXJOYW1lLFxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR0aGlzLnByZVRyYW5zbGF0ZVggPSAwO1xuXHRcdFx0XHRcdC8vIOWKqOeUu+e7k+adn+WQjuiOt+WPluS4iuS4gOeroCzph43nva7pobXpnaJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMucHJlQ2hhcHRlcigpXG5cdFx0XHRcdFx0fSwgdGhpcy50dXJuUGFnZVRpbWUqMTAwMClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0dGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlIC0gMV0udHJhbnNsYXRlWCA9IDA7XG5cdFx0XHRcdHRoaXMuY3VycmVudFBhZ2UtLTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdFxuXHRcdC8qKlxuXHRcdCog5LiL5LiA6aG1XG5cdFx0KiovXG5cdFx0bmV4dFBhZ2UoKSB7XG5cdFx0XHRpZiAodGhpcy5tZW51U2hvdykge1xuXHRcdFx0XHR0aGlzLm1lbnVTaG93ID0gZmFsc2U7XG5cblx0XHRcdFx0XHQvLyBwbHVzLm5hdmlnYXRvci5zZXRGdWxsc2NyZWVuKHRydWUpO1xuXG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuY3VycmVudFBhZ2UgPT09IHRoaXMucGFnZXMubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRpZiAoIXRoaXMubmV4dFBhZ2VMb2FkZWQpIHtcblx0XHRcdFx0XHR0aGlzLnR1cmVQYWdlID0gdHJ1ZTtcblx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0XHRcdHRpdGxlOiAn5q2j5Zyo5Yqg6L295Lit6K+356iN5YCZJ1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCB0aGlzLm5leHRUZXh0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0dGl0bGU6ICfov5nmmK/mnIDlkI7kuIDnq6AnLFxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICghdGhpcy53YWl0KSB7XG5cdFx0XHRcdFx0dGhpcy53YWl0ID0gdHJ1ZTtcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOiB0aGlzLm5leHRDaGFwdGVyTmFtZSxcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0dGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlXS50cmFuc2xhdGVYID0gLXRoaXMud2luZG93V2lkdGggLSAyMDtcblx0XHRcdFx0XHQvLyDliqjnlLvnu5PmnZ/lkI7ojrflj5bkuIvkuIDnq6As6YeN572u6aG16Z2iXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLm5leHRDaGFwdGVyKClcblx0XHRcdFx0XHR9LCB0aGlzLnR1cm5QYWdlVGltZSoxMDAwKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlXS50cmFuc2xhdGVYID0gLXRoaXMud2luZG93V2lkdGggLSAyMDtcblx0XHRcdFx0dGhpcy5jdXJyZW50UGFnZSsrO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQqIOiOt+WPluS4i+S4gOeroCzph43nva7pobXpnaLvvIzlsIbmnKznq6Dlj5jkuLrliY3kuIDnq6DvvIzlsIbkuIvkuIDnq6Dlj5jkuLrmnKznq6DvvIzojrflj5bkuIvkuIDnq6DlhoXlrrlcblx0XHQqKi9cblx0XHRuZXh0Q2hhcHRlcigpIHtcblx0XHRcdHRoaXMuY2hhcHRlcklkKys7XG5cdFx0XHR0aGlzLnByZVRleHQgPSB0aGlzLnRleHQ7XG5cdFx0XHR0aGlzLnRleHQgPSB0aGlzLm5leHRUZXh0O1xuXHRcdFx0dGhpcy5uZXh0VGV4dCA9ICcnO1xuXHRcdFx0dGhpcy5nZXRUZXh0KHRoaXMuY2hhcHRlcklkICsgMSwgJ25leHQnKVxuXHRcdFx0dGhpcy5wcmVQYWdlcyA9IHRoaXMucGFnZXMubWFwKCh2YWx1ZSkgPT4ge1xuXHRcdFx0XHR2YWx1ZS50cmFuc2xhdGVYID0gMDtcblx0XHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMucGFnZXMgPSBbXS5jb25jYXQodGhpcy5uZXh0UGFnZXMpO1xuXHRcdFx0dGhpcy5uZXh0UGFnZXMgPSBbXTtcblx0XHRcdHRoaXMucHJlQ2hhcHRlck5hbWUgPSB0aGlzLmNoYXB0ZXJOYW1lO1xuXHRcdFx0dGhpcy5jaGFwdGVyTmFtZSA9IHRoaXMubmV4dENoYXB0ZXJOYW1lO1xuXHRcdFx0dGhpcy5uZXh0Q2hhcHRlck5hbWUgPSAnJztcblx0XHRcdHRoaXMud2FpdCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5jdXJyZW50UGFnZSA9IDA7XG5cdFx0XHR0aGlzLmdvVG9QYWdlKHRoaXMuY3VycmVudFBhZ2UpXG5cdFx0XHRcblx0XHR9LFxuXHRcdFxuXHRcdC8qKlxuXHRcdCog6I635Y+W5LiK5LiA56ugLOmHjee9rumhtemdou+8jOWwhuacrOeroOWPmOS4uuWQjuS4gOeroO+8jOWwhuS4iuS4gOeroOWPmOS4uuacrOeroO+8jOiOt+WPluS4iuS4gOeroOWGheWuuVxuXHRcdCoqL1xuXHRcdHByZUNoYXB0ZXIoKSB7XG5cdFx0XHR0aGlzLnByZVRyYW5zbGF0ZVggPSAtdGhpcy53aW5kb3dXaWR0aCAtIDIwO1xuXHRcdFx0dGhpcy5jaGFwdGVySWQtLTtcblx0XHRcdHRoaXMubmV4dFRleHQgPSB0aGlzLnRleHQ7XG5cdFx0XHR0aGlzLnRleHQgPSB0aGlzLnByZVRleHQ7XG5cdFx0XHR0aGlzLnByZVRleHQgPSAnJztcblx0XHRcdHRoaXMuZ2V0VGV4dCh0aGlzLmNoYXB0ZXJJZCAtIDEsICdwcmUnKVxuXHRcdFx0dGhpcy5uZXh0UGFnZXMgPSB0aGlzLnBhZ2VzLm1hcCgodmFsdWUpID0+IHtcblx0XHRcdFx0dmFsdWUudHJhbnNsYXRlWCA9IDA7XG5cdFx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnBhZ2VzID0gW10uY29uY2F0KHRoaXMucHJlUGFnZXMpO1xuXHRcdFx0dGhpcy5wcmVQYWdlcyA9IFtdO1xuXHRcdFx0dGhpcy5uZXh0Q2hhcHRlck5hbWUgPSB0aGlzLmNoYXB0ZXJOYW1lO1xuXHRcdFx0dGhpcy5jaGFwdGVyTmFtZSA9IHRoaXMucHJlQ2hhcHRlck5hbWU7XG5cdFx0XHR0aGlzLnByZUNoYXB0ZXJOYW1lID0gJyc7XG5cdFx0XHR0aGlzLndhaXQgPSBmYWxzZTtcblx0XHRcdFxuXHRcdFx0dGhpcy5jdXJyZW50UGFnZSA9IHRoaXMucGFnZXMubGVuZ3RoIC0gMTtcblx0XHRcdHRoaXMuZ29Ub1BhZ2UodGhpcy5jdXJyZW50UGFnZSlcblx0XHR9LFxuXHRcdFxuXHRcdC8qKlxuXHRcdCog5qC55o2u6aG156CB6Lez6L2sXG5cdFx0KiovXG5cdFx0Z29Ub1BhZ2UocGFnZSkge1xuXHRcdFx0aWYgKHBhZ2UgPiB0aGlzLnBhZ2VzLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0cGFnZSA9IHRoaXMucGFnZXMubGVuZ3RoIC0gMTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2hvd0FuaW1hdGlvbiA9IGZhbHNlO1xuXHRcdFx0dGhpcy5wYWdlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcblx0XHRcdFx0aWYgKGluZGV4IDwgcGFnZSkge1xuXHRcdFx0XHRcdHZhbHVlLnRyYW5zbGF0ZVggPSAtdGhpcy53aW5kb3dXaWR0aCAtIDIwXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQqIOWKoOWkp+Wtl+S9k1xuXHRcdCoqL1xuXHRcdGJpZ1NpemUoKSB7XG5cdFx0XHRpZiAodGhpcy5mb250U2l6ZSA8IDI1KSB7XG5cdFx0XHRcdGxldCBwcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3M7XG5cdFx0XHRcdHRoaXMuZm9udFNpemUrKztcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdmb250U2l6ZScsIHRoaXMuZm9udFNpemUpXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmNhbGNQYWdlcygxLCBwcm9ncmVzcylcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHR0aXRsZTogJ+acgOWkp+Wtl+S9kycsXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdFxuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0KiDnvKnlsI/lrZfkvZNcblx0XHQqKi9cblx0XHRzbWFsbFNpemUoKSB7XG5cdFx0XHRpZiAodGhpcy5mb250U2l6ZSA+IDE0KSB7XG5cdFx0XHRcdGxldCBwcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3M7XG5cdFx0XHRcdHRoaXMuZm9udFNpemUtLTtcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdmb250U2l6ZScsIHRoaXMuZm9udFNpemUpXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmNhbGNQYWdlcygxLCBwcm9ncmVzcylcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHR0aXRsZTogJ+acgOWwj+Wtl+S9kycsXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQqIOaUueWPmOihjOi3nVxuXHRcdCoqL1xuXHRcdGNoYW5nZUxpbmVIZWlnaHQobGluZUhlaWdodCkge1xuXHRcdFx0aWYgKGxpbmVIZWlnaHQgPT09IHRoaXMubGluZUhlaWdodCkge1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRsZXQgcHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzO1xuXHRcdFx0XHR0aGlzLmxpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0O1xuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ2xpbmVIZWlnaHQnLCB0aGlzLmxpbmVIZWlnaHQpXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmNhbGNQYWdlcygxLCBwcm9ncmVzcylcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9LFxuXHRcdFxuXHRcdC8qKlxuXHRcdCog5pS55Y+Y6IOM5pmvXG5cdFx0KiovXG5cdFx0Y2hhbmdlQmFja2dyb3VuZChiYWNrZ3JvdW5kKSB7XG5cdFx0XHRpZiAoYmFja2dyb3VuZCA9PT0gdGhpcy5iYWNrZ3JvdW5kKSB7XG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuYmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnYmFja2dyb3VuZCcsIHRoaXMuYmFja2dyb3VuZClcblx0XHRcdH1cblx0XHR9LFxuXHRcdFxuXHRcdC8qKlxuXHRcdCog6I635Y+W5pWw5o2u77yM5YyF5ous6ZiF6K+75Yiw56ys5Yeg56ug77yM5Lul5Y+K5YmN5Lit5ZCO5LiJ56ug5YaF5a65XG5cdFx0KiovXG5cdFx0Z2V0RGF0YSgpIHtcblx0XHRcdHVuaS5zaG93TG9hZGluZyh7bWFzazogdHJ1ZX0pXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHQvLyDmqKHmi5/nvZHnu5zml7bpl7Rcblx0XHRcdFx0dGhpcy5uZXh0UGFnZUxvYWRlZCA9IHRydWU7XG5cdFx0XHRcdHRoaXMucHJlUGFnZUxvYWRlZCA9IHRydWU7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXG5cdFx0XHRcdFx0dGhpcy5jaGFwdGVySWQgPSAyO1xuXHRcdFx0XHRcdHRoaXMuY2hhcHRlck5hbWUgPSBg56ysJHt0aGlzLmNoYXB0ZXJJZH3nq6Ag5rWL6K+V5rWL6K+VYDtcblx0XHRcdFx0XHR0aGlzLnByZUNoYXB0ZXJOYW1lID0gYOesrCR7dGhpcy5jaGFwdGVySWQgLSAxfeeroCDmtYvor5XmtYvor5VgO1xuXHRcdFx0XHRcdHRoaXMubmV4dENoYXB0ZXJOYW1lID0gYOesrCR7dGhpcy5jaGFwdGVySWQgKyAxfeeroCDmtYvor5XmtYvor5VgO1xuXHRcdFx0XHRcdHRoaXMudGV4dCA9IHRoaXMuY2hhcHRlcklkICsgdGhpcy50ZXh0Rml4ZWQ7XG5cdFx0XHRcdFx0dGhpcy5wcmVUZXh0ID0gdGhpcy5jaGFwdGVySWQgLSAxICsgdGhpcy50ZXh0Rml4ZWQ7XG5cdFx0XHRcdFx0dGhpcy5uZXh0VGV4dCA9IHRoaXMuY2hhcHRlcklkICsgMSArIHRoaXMudGV4dEZpeGVkO1xuXHRcdFx0XHRcdHJlc29sdmUoKVxuXHRcdFx0XHR9LCAxMDAwKVxuXHRcdFx0fSlcblx0XHRcdFxuXHRcdH0sXG5cdFx0XG5cdFx0LyoqXG5cdFx0KiDojrflj5bkuIrkuIDnq6DmiJbkuIvkuIDnq6DmlbDmja5cblx0XHQqKi9cblx0XHRnZXRUZXh0KGNoYXB0ZXJJZCwgdHlwZSkge1xuXHRcdFx0aWYgKHR5cGUgPT09ICduZXh0Jykge1xuXHRcdFx0XHR0aGlzLm5leHRQYWdlTG9hZGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5wcmVQYWdlTG9hZGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHQvLyDmqKHmi5/nvZHnu5zml7bpl7Rcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ25leHQnKSB7XG5cdFx0XHRcdFx0dGhpcy5uZXh0UGFnZUxvYWRlZCA9IHRydWU7XG5cdFx0XHRcdFx0dGhpcy5uZXh0VGV4dCA9IGNoYXB0ZXJJZCArIHRoaXMudGV4dEZpeGVkO1xuXHRcdFx0XHRcdHRoaXMubmV4dENoYXB0ZXJOYW1lID0gYOesrCR7Y2hhcHRlcklkfeeroCDmtYvor5XmtYvor5VgO1xuXHRcdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuY2FsY05leHRQYWdlcygpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnByZVBhZ2VMb2FkZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGlmIChjaGFwdGVySWQgPT09IDApIHtcblx0XHRcdFx0XHRcdHRoaXMucHJlVGV4dCA9ICcnO1xuXHRcdFx0XHRcdFx0dGhpcy5wcmVDaGFwdGVyTmFtZSA9ICcnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMucHJlVGV4dCA9IGNoYXB0ZXJJZCArIHRoaXMudGV4dEZpeGVkO1xuXHRcdFx0XHRcdFx0dGhpcy5wcmVDaGFwdGVyTmFtZSA9IGDnrKwke2NoYXB0ZXJJZH3nq6Ag5rWL6K+V5rWL6K+VYDtcblx0XHRcdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0dGhpcy5jYWxjUHJlUGFnZXMoKVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9LCA1MDApXG5cdFx0fVxuXHRcdFxuXHRcdFxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

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
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 17 */
/*!***********************************!*\
  !*** D:/read_demo/store/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 16));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue.default.use(_vuex.default);\n\nvar store = new _vuex.default.Store({\n  state: {\n    fontSize: '',\n    lineHeight: '',\n    background: '' },\n\n  mutations: {\n    setFontSize: function setFontSize(state, res) {\n      state.fontSize = res;\n    },\n    setLineHeight: function setLineHeight(state, res) {\n      state.lineHeight = res;\n    },\n    setBackground: function setBackground(state, res) {\n      state.background = res;\n    } },\n\n  actions: {} });var _default =\n\n\n\n\nstore;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJzdGF0ZSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImJhY2tncm91bmQiLCJtdXRhdGlvbnMiLCJzZXRGb250U2l6ZSIsInJlcyIsInNldExpbmVIZWlnaHQiLCJzZXRCYWNrZ3JvdW5kIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6InVGQUFBO0FBQ0Esd0U7O0FBRUFBLGFBQUlDLEdBQUosQ0FBUUMsYUFBUjs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsSUFBSUQsY0FBS0UsS0FBVCxDQUFlO0FBQzVCQyxPQUFLLEVBQUU7QUFDTkMsWUFBUSxFQUFFLEVBREo7QUFFTkMsY0FBVSxFQUFFLEVBRk47QUFHTkMsY0FBVSxFQUFFLEVBSE4sRUFEcUI7O0FBTTVCQyxXQUFTLEVBQUU7QUFDVkMsZUFEVSx1QkFDRUwsS0FERixFQUNTTSxHQURULEVBQ2M7QUFDdkJOLFdBQUssQ0FBQ0MsUUFBTixHQUFpQkssR0FBakI7QUFDQSxLQUhTO0FBSVZDLGlCQUpVLHlCQUlJUCxLQUpKLEVBSVdNLEdBSlgsRUFJZ0I7QUFDekJOLFdBQUssQ0FBQ0UsVUFBTixHQUFtQkksR0FBbkI7QUFDQSxLQU5TO0FBT1ZFLGlCQVBVLHlCQU9JUixLQVBKLEVBT1dNLEdBUFgsRUFPZ0I7QUFDekJOLFdBQUssQ0FBQ0csVUFBTixHQUFtQkcsR0FBbkI7QUFDQSxLQVRTLEVBTmlCOztBQWlCNUJHLFNBQU8sRUFBRSxFQWpCbUIsRUFBZixDQUFkLEM7Ozs7O0FBc0JlWCxLIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXHJcblxyXG5WdWUudXNlKFZ1ZXgpXHJcblxyXG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcclxuXHRzdGF0ZToge1xyXG5cdFx0Zm9udFNpemU6ICcnLFxyXG5cdFx0bGluZUhlaWdodDogJycsXHJcblx0XHRiYWNrZ3JvdW5kOiAnJ1xyXG5cdH0sXHJcblx0bXV0YXRpb25zOiB7XHJcblx0XHRzZXRGb250U2l6ZShzdGF0ZSwgcmVzKSB7XHJcblx0XHRcdHN0YXRlLmZvbnRTaXplID0gcmVzO1xyXG5cdFx0fSxcclxuXHRcdHNldExpbmVIZWlnaHQoc3RhdGUsIHJlcykge1xyXG5cdFx0XHRzdGF0ZS5saW5lSGVpZ2h0ID0gcmVzO1xyXG5cdFx0fSxcclxuXHRcdHNldEJhY2tncm91bmQoc3RhdGUsIHJlcykge1xyXG5cdFx0XHRzdGF0ZS5iYWNrZ3JvdW5kID0gcmVzO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0YWN0aW9uczoge1xyXG5cdFx0XHJcblx0fVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
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
/* 19 */
/*!****************************!*\
  !*** D:/read_demo/App.vue ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 20);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDbUs7QUFDbkssZ0JBQWdCLHNMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!*****************************************************!*\
  !*** D:/read_demo/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 21);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStoQixDQUFnQiw2bEJBQUcsRUFBQyIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/read_demo/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 22)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
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


/***/ })
],[[0,"app-config"]]]);