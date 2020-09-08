(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!************************************!*\
  !*** D:/project/read_demo/main.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 28));\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 29));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 32));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_vue.default.prototype.$store = _store.default;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwicHJvdG90eXBlIiwiJHN0b3JlIiwic3RvcmUiLCJBcHAiLCJtcFR5cGUiLCJhcHAiLCIkbW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFtQjtBQUNuQjtBQUNBLHdFOztBQUVBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7O0FBRUFGLGFBQUlHLFNBQUosQ0FBY0MsTUFBZCxHQUF1QkMsY0FBdkI7O0FBRUFDLGFBQUlDLE1BQUosR0FBYSxLQUFiOztBQUVBLElBQU1DLEdBQUcsR0FBRyxJQUFJUixZQUFKO0FBQ0xNLFlBREssRUFBWjs7QUFHQUUsR0FBRyxDQUFDQyxNQUFKIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7aW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5cclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuXHJcblZ1ZS5wcm90b3R5cGUuJHN0b3JlID0gc3RvcmVcclxuXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICAuLi5BcHBcclxufSlcclxuYXBwLiRtb3VudCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***************************************!*\
  !*** D:/project/read_demo/pages.json ***!
  \***************************************/
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
/*!**************************************************************!*\
  !*** D:/project/read_demo/pages/index/index.vue?mpType=page ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzRLO0FBQzVLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!********************************************************************************************!*\
  !*** D:/project/read_demo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/project/read_demo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!**************************************************************************************!*\
  !*** D:/project/read_demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdsQixDQUFnQiwwbUJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/project/read_demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!************************************************************!*\
  !*** D:/project/read_demo/pages/read/read.vue?mpType=page ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _read_vue_vue_type_template_id_1126b716_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./read.vue?vue&type=template&id=1126b716&scoped=true&mpType=page */ 9);\n/* harmony import */ var _read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _read_vue_vue_type_template_id_1126b716_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _read_vue_vue_type_template_id_1126b716_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"1126b716\",\n  null,\n  false,\n  _read_vue_vue_type_template_id_1126b716_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/read/read.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQzRLO0FBQzVLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vcmVhZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTEyNmI3MTYmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3JlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxMTI2YjcxNlwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9yZWFkL3JlYWQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!******************************************************************************************************!*\
  !*** D:/project/read_demo/pages/read/read.vue?vue&type=template&id=1126b716&scoped=true&mpType=page ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_template_id_1126b716_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./read.vue?vue&type=template&id=1126b716&scoped=true&mpType=page */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_template_id_1126b716_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_template_id_1126b716_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_template_id_1126b716_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_template_id_1126b716_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/project/read_demo/pages/read/read.vue?vue&type=template&id=1126b716&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", [
    _c("view", {
      staticClass: _vm._$s(1, "sc", "action"),
      style: _vm._$s(1, "s", { zIndex: 200 }),
      attrs: { _i: 1 },
      on: {
        touchstart: _vm.touchStart,
        touchend: _vm.touchEnd,
        touchmove: _vm.touchMove
      }
    }),
    _vm._$s(2, "i", _vm.cover.show)
      ? _c("view", {
          staticClass: _vm._$s(2, "sc", "action"),
          style: _vm._$s(2, "s", { zIndex: 202 }),
          attrs: { _i: 2 },
          on: {
            touchstart: _vm.coverTouchStart,
            touchend: _vm.coverTouchEnd,
            touchmove: _vm.coverTouchMove
          }
        })
      : _vm._e(),
    _c(
      "view",
      { staticClass: _vm._$s(3, "sc", "container hidden"), attrs: { _i: 3 } },
      [
        _c("view", {
          staticClass: _vm._$s(4, "sc", "chapter"),
          attrs: { _i: 4 }
        }),
        _c(
          "view",
          {
            staticClass: _vm._$s(5, "sc", "content"),
            attrs: { id: "content", _i: 5 }
          },
          [
            _c("view", {
              staticClass: _vm._$s(6, "sc", "book-inner"),
              style: _vm._$s(6, "s", {
                fontSize: _vm.fontSize + "px",
                lineHeight: _vm.lineHeight * _vm.fontSize + "px"
              }),
              attrs: { id: "bookInner", _i: 6 },
              domProps: {
                innerHTML: _vm._s(_vm._$s(6, "v-html", _vm.calcText))
              }
            })
          ]
        ),
        _c("view", {
          staticClass: _vm._$s(7, "sc", "bottom-bar"),
          attrs: { _i: 7 }
        })
      ]
    ),
    _c(
      "view",
      {
        staticClass: _vm._$s(8, "sc", "cover container"),
        class: _vm._$s(8, "c", {
          container0: _vm.background === 1,
          container1: _vm.background === 2
        }),
        style: _vm._$s(8, "s", {
          zIndex: 201,
          transform: "translate" + _vm.cover.pageTranslate[_vm.turnType],
          transition:
            "transform " + (_vm.showAnimation ? _vm.turnPageTime : 0) + "s",
          boxShadow:
            _vm.showShadow && _vm.turnType === 0
              ? "0 0 10px 0 rgba(0,0,0,.4)"
              : ""
        }),
        attrs: { _i: 8 }
      },
      [_c("image"), _c("view")]
    ),
    _c(
      "view",
      {
        staticClass: _vm._$s(11, "sc", "container"),
        class: _vm._$s(11, "c", {
          container0: _vm.background === 1,
          container1: _vm.background === 2
        }),
        style: _vm._$s(11, "s", {
          zIndex: 102,
          transform: "translate" + _vm.prePage.pageTranslate[_vm.turnType],
          transition:
            "transform " + (_vm.showAnimation ? _vm.turnPageTime : 0) + "s",
          boxShadow: _vm.showShadow ? "0 0 10px 0 rgba(0,0,0,.4)" : ""
        }),
        attrs: { _i: 11 }
      },
      [
        _c(
          "view",
          { staticClass: _vm._$s(12, "sc", "chapter"), attrs: { _i: 12 } },
          [_vm._v(_vm._$s(12, "t0-0", _vm._s(_vm.prePage.chapterName)))]
        ),
        _c(
          "view",
          {
            staticClass: _vm._$s(13, "sc", "content"),
            style: _vm._$s(13, "s", {
              fontSize: _vm.fontSize + "px",
              color: "" + _vm.colorList[_vm.background - 1]
            }),
            attrs: { _i: 13 }
          },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(14, "sc", "inner-box"),
                style: _vm._$s(14, "s", { height: _vm.innerHeight + "px" }),
                attrs: { _i: 14 }
              },
              [
                _c("view", {
                  staticClass: _vm._$s(15, "sc", "book-inner"),
                  style: _vm._$s(15, "s", {
                    fontSize: _vm.fontSize + "px",
                    lineHeight: _vm.lineHeight * _vm.fontSize + "px",
                    transform:
                      "translateY(-" +
                      _vm.prePage.pageNum * _vm.innerHeight +
                      "px)"
                  }),
                  attrs: { _i: 15 },
                  domProps: {
                    innerHTML: _vm._s(_vm._$s(15, "v-html", _vm.prePage.text))
                  }
                })
              ]
            )
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(16, "sc", "bottom-bar"), attrs: { _i: 16 } },
          [
            _c("view", [
              _vm._v(_vm._$s(17, "t0-0", _vm._s(_vm.systemTimeStr)))
            ]),
            _c("view", [
              _vm._v(
                _vm._$s(18, "t0-0", _vm._s(_vm.prePage.pageNum + 1)) +
                  _vm._$s(18, "t0-1", _vm._s(_vm.prePage.totalPage))
              )
            ]),
            _c(
              "view",
              [
                _c("battery", {
                  attrs: {
                    level: _vm.batteryLevel,
                    charging: _vm.batteryState === 2,
                    _i: 20
                  }
                })
              ],
              1
            )
          ]
        )
      ]
    ),
    _c(
      "view",
      {
        staticClass: _vm._$s(21, "sc", "container"),
        class: _vm._$s(21, "c", {
          container0: _vm.background === 1,
          container1: _vm.background === 2
        }),
        style: _vm._$s(21, "s", {
          zIndex: 101,
          transform: "translate" + _vm.curPage.pageTranslate[_vm.turnType],
          transition:
            "transform " + (_vm.showAnimation ? _vm.turnPageTime : 0) + "s",
          boxShadow:
            _vm.showShadow && _vm.turnType === 0
              ? "0 0 10px 0 rgba(0,0,0,.4)"
              : ""
        }),
        attrs: { _i: 21 }
      },
      [
        _c(
          "view",
          { staticClass: _vm._$s(22, "sc", "chapter"), attrs: { _i: 22 } },
          [_vm._v(_vm._$s(22, "t0-0", _vm._s(_vm.curPage.chapterName)))]
        ),
        _c(
          "view",
          {
            staticClass: _vm._$s(23, "sc", "content"),
            style: _vm._$s(23, "s", {
              fontSize: _vm.fontSize + "px",
              color: "" + _vm.colorList[_vm.background - 1]
            }),
            attrs: { _i: 23 }
          },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(24, "sc", "inner-box"),
                style: _vm._$s(24, "s", { height: _vm.innerHeight + "px" }),
                attrs: { _i: 24 }
              },
              [
                _c("view", {
                  staticClass: _vm._$s(25, "sc", "book-inner"),
                  style: _vm._$s(25, "s", {
                    fontSize: _vm.fontSize + "px",
                    lineHeight: _vm.lineHeight * _vm.fontSize + "px",
                    transform:
                      "translateY(-" +
                      _vm.curPage.pageNum * _vm.innerHeight +
                      "px)"
                  }),
                  attrs: { _i: 25 },
                  domProps: {
                    innerHTML: _vm._s(_vm._$s(25, "v-html", _vm.curPage.text))
                  }
                })
              ]
            )
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(26, "sc", "bottom-bar"), attrs: { _i: 26 } },
          [
            _c("view", [
              _vm._v(_vm._$s(27, "t0-0", _vm._s(_vm.systemTimeStr)))
            ]),
            _c("view", [
              _vm._v(
                _vm._$s(28, "t0-0", _vm._s(_vm.curPage.pageNum + 1)) +
                  _vm._$s(28, "t0-1", _vm._s(_vm.curPage.totalPage))
              )
            ]),
            _c(
              "view",
              [
                _c("battery", {
                  attrs: {
                    level: _vm.batteryLevel,
                    charging: _vm.batteryState === 2,
                    _i: 30
                  }
                })
              ],
              1
            )
          ]
        )
      ]
    ),
    _c(
      "view",
      {
        staticClass: _vm._$s(31, "sc", "container"),
        class: _vm._$s(31, "c", {
          container0: _vm.background === 1,
          container1: _vm.background === 2
        }),
        style: _vm._$s(31, "s", {
          zIndex: 100,
          transform: "translate" + _vm.nextPage.pageTranslate[_vm.turnType],
          transition:
            "transform " + (_vm.showAnimation ? _vm.turnPageTime : 0) + "s",
          boxShadow:
            _vm.showShadow && _vm.turnType === 0
              ? "0 0 10px 0 rgba(0,0,0,.4)"
              : ""
        }),
        attrs: { _i: 31 }
      },
      [
        _c(
          "view",
          { staticClass: _vm._$s(32, "sc", "chapter"), attrs: { _i: 32 } },
          [_vm._v(_vm._$s(32, "t0-0", _vm._s(_vm.nextPage.chapterName)))]
        ),
        _c(
          "view",
          {
            staticClass: _vm._$s(33, "sc", "content"),
            style: _vm._$s(33, "s", {
              fontSize: _vm.fontSize + "px",
              color: "" + _vm.colorList[_vm.background - 1]
            }),
            attrs: { _i: 33 }
          },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(34, "sc", "inner-box"),
                style: _vm._$s(34, "s", { height: _vm.innerHeight + "px" }),
                attrs: { _i: 34 }
              },
              [
                _c("view", {
                  staticClass: _vm._$s(35, "sc", "book-inner"),
                  style: _vm._$s(35, "s", {
                    fontSize: _vm.fontSize + "px",
                    lineHeight: _vm.lineHeight * _vm.fontSize + "px",
                    transform:
                      "translateY(-" +
                      _vm.nextPage.pageNum * _vm.innerHeight +
                      "px)"
                  }),
                  attrs: { _i: 35 },
                  domProps: {
                    innerHTML: _vm._s(_vm._$s(35, "v-html", _vm.nextPage.text))
                  }
                })
              ]
            )
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(36, "sc", "bottom-bar"), attrs: { _i: 36 } },
          [
            _c("view", [
              _vm._v(_vm._$s(37, "t0-0", _vm._s(_vm.systemTimeStr)))
            ]),
            _c("view", [
              _vm._v(
                _vm._$s(38, "t0-0", _vm._s(_vm.nextPage.pageNum + 1)) +
                  _vm._$s(38, "t0-1", _vm._s(_vm.nextPage.totalPage))
              )
            ]),
            _c(
              "view",
              [
                _c("battery", {
                  attrs: {
                    level: _vm.batteryLevel,
                    charging: _vm.batteryState === 2,
                    _i: 40
                  }
                })
              ],
              1
            )
          ]
        )
      ]
    ),
    _vm._$s(41, "i", _vm.menuShow)
      ? _c(
          "view",
          {
            staticClass: _vm._$s(41, "sc", "menu"),
            style: _vm._$s(41, "s", {
              height: "100%",
              width: _vm.windowWidth + "px",
              background: _vm.directoryShow ? "rgba(0, 0, 0, .5)" : ""
            }),
            attrs: { _i: 41 },
            on: { touchend: _vm.closeMenu }
          },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(42, "sc", "menu-top"),
                style: _vm._$s(42, "s", {
                  height: _vm.statusBarHeight + 40 + "px",
                  top: _vm.itemShow ? 0 : "-100%"
                }),
                attrs: { _i: 42 },
                on: {
                  touchend: function($event) {
                    $event.stopPropagation()
                  }
                }
              },
              [
                _c("view", {
                  style: _vm._$s(43, "s", {
                    height: _vm.statusBarHeight + "px"
                  }),
                  attrs: { _i: 43 }
                }),
                _c(
                  "view",
                  { staticClass: _vm._$s(44, "sc", "head"), attrs: { _i: 44 } },
                  [
                    _c("text", {
                      staticClass: _vm._$s(45, "sc", "iconfont back"),
                      attrs: { _i: 45 },
                      on: { click: _vm.back }
                    })
                  ]
                )
              ]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s(46, "sc", "menu-bottom"),
                style: _vm._$s(46, "s", { bottom: _vm.itemShow ? 0 : "-100%" }),
                attrs: { _i: 46 },
                on: {
                  touchend: function($event) {
                    $event.stopPropagation()
                  }
                }
              },
              [
                _vm._$s(47, "i", _vm.progressTouched)
                  ? _c(
                      "view",
                      {
                        staticClass: _vm._$s(47, "sc", "show-chapter"),
                        attrs: { _i: 47 }
                      },
                      [
                        _vm._v(
                          _vm._$s(
                            47,
                            "t0-0",
                            _vm._s(_vm.directoryList[_vm.chapterProgress].name)
                          )
                        )
                      ]
                    )
                  : _c(
                      "view",
                      {
                        staticClass: _vm._$s(48, "sc", "show-chapter"),
                        attrs: { _i: 48 }
                      },
                      [
                        _vm._v(
                          _vm._$s(
                            48,
                            "t0-0",
                            _vm._s(_vm.curChapter.chapterName)
                          )
                        )
                      ]
                    ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(49, "sc", "progress-box"),
                    attrs: { _i: 49 }
                  },
                  [
                    _c("text", {
                      attrs: { _i: 50 },
                      on: { click: _vm.goPreChapter }
                    }),
                    _c(
                      "view",
                      [
                        _c("my-progress", {
                          attrs: {
                            total: _vm.directoryList.length - 1,
                            index: _vm.curChapter.chapterIndex,
                            _i: 52
                          },
                          on: {
                            indexChange: _vm.indexChange,
                            progressEnd: _vm.progressEnd,
                            progressStart: _vm.progressStart
                          }
                        })
                      ],
                      1
                    ),
                    _c("text", {
                      attrs: { _i: 53 },
                      on: { click: _vm.goNextChapter }
                    })
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(54, "sc", "items-box"),
                    attrs: { _i: 54 }
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(55, "sc", "item-box"),
                        attrs: { _i: 55 },
                        on: { click: _vm.openDirectory }
                      },
                      [
                        _c("text", {
                          staticClass: _vm._$s(56, "sc", "iconfont"),
                          attrs: { _i: 56 }
                        }),
                        _c("text")
                      ]
                    ),
                    _vm._$s(58, "i", _vm.background === 2)
                      ? _c(
                          "view",
                          {
                            staticClass: _vm._$s(58, "sc", "item-box"),
                            attrs: { _i: 58 },
                            on: {
                              click: function($event) {
                                return _vm.changeBackground(1)
                              }
                            }
                          },
                          [
                            _c("text", {
                              staticClass: _vm._$s(59, "sc", "iconfont"),
                              attrs: { _i: 59 }
                            }),
                            _c("text")
                          ]
                        )
                      : _vm._e(),
                    _vm._$s(61, "i", _vm.background === 1)
                      ? _c(
                          "view",
                          {
                            staticClass: _vm._$s(61, "sc", "item-box"),
                            attrs: { _i: 61 },
                            on: {
                              click: function($event) {
                                return _vm.changeBackground(2)
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
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(64, "sc", "item-box"),
                        attrs: { _i: 64 },
                        on: { click: _vm.openSetting }
                      },
                      [
                        _c("text", {
                          staticClass: _vm._$s(65, "sc", "iconfont"),
                          attrs: { _i: 65 }
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
                staticClass: _vm._$s(67, "sc", "setting"),
                style: _vm._$s(67, "s", {
                  bottom: _vm.settingShow ? 0 : "-100%"
                }),
                attrs: { _i: 67 },
                on: {
                  touchend: function($event) {
                    $event.stopPropagation()
                  }
                }
              },
              [
                _c(
                  "view",
                  { staticClass: _vm._$s(68, "sc", "item"), attrs: { _i: 68 } },
                  [
                    _c("view", {
                      staticClass: _vm._$s(69, "sc", "item-name"),
                      attrs: { _i: 69 }
                    }),
                    _vm._$s(70, "i", _vm.fontSize < _vm.maxFontSize)
                      ? _c("view", {
                          staticClass: _vm._$s(70, "sc", "icon"),
                          attrs: { _i: 70 },
                          on: { click: _vm.bigSize }
                        })
                      : _c("view", {
                          staticClass: _vm._$s(71, "sc", "icon"),
                          attrs: { _i: 71 }
                        }),
                    _vm._$s(72, "i", _vm.fontSize > _vm.minFontSize)
                      ? _c("view", {
                          staticClass: _vm._$s(72, "sc", "icon"),
                          attrs: { _i: 72 },
                          on: { click: _vm.smallSize }
                        })
                      : _c("view", {
                          staticClass: _vm._$s(73, "sc", "icon"),
                          attrs: { _i: 73 }
                        }),
                    _vm._$s(74, "i", _vm.simplified)
                      ? _c("view", {
                          staticClass: _vm._$s(74, "sc", "icon"),
                          attrs: { _i: 74 },
                          on: {
                            click: function($event) {
                              return _vm.changeFont(false)
                            }
                          }
                        })
                      : _c("view", {
                          staticClass: _vm._$s(75, "sc", "icon"),
                          attrs: { _i: 75 },
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
                  { staticClass: _vm._$s(76, "sc", "item"), attrs: { _i: 76 } },
                  [
                    _c("view", {
                      staticClass: _vm._$s(77, "sc", "item-name"),
                      attrs: { _i: 77 }
                    }),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(78, "sc", "type-setting"),
                        class: _vm._$s(78, "c", {
                          active: _vm.lineHeight === 1
                        }),
                        attrs: { _i: 78 },
                        on: {
                          click: function($event) {
                            return _vm.changeLineHeight(1)
                          }
                        }
                      },
                      _vm._l(5, function(i, $10, $20, $30) {
                        return _c("view", {
                          key: i,
                          staticClass: _vm._$s("79-" + $30, "sc", "line"),
                          class: _vm._$s("79-" + $30, "c", {
                            lineActive: _vm.lineHeight === 1
                          }),
                          attrs: { _i: "79-" + $30 }
                        })
                      }),
                      0
                    ),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(80, "sc", "type-setting"),
                        class: _vm._$s(80, "c", {
                          active: _vm.lineHeight === 1.5
                        }),
                        attrs: { _i: 80 },
                        on: {
                          click: function($event) {
                            return _vm.changeLineHeight(1.5)
                          }
                        }
                      },
                      _vm._l(4, function(i, $11, $21, $31) {
                        return _c("view", {
                          key: i,
                          staticClass: _vm._$s("81-" + $31, "sc", "line"),
                          class: _vm._$s("81-" + $31, "c", {
                            lineActive: _vm.lineHeight === 1.5
                          }),
                          attrs: { _i: "81-" + $31 }
                        })
                      }),
                      0
                    ),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(82, "sc", "type-setting"),
                        class: _vm._$s(82, "c", {
                          active: _vm.lineHeight === 2
                        }),
                        attrs: { _i: 82 },
                        on: {
                          click: function($event) {
                            return _vm.changeLineHeight(2)
                          }
                        }
                      },
                      _vm._l(3, function(i, $12, $22, $32) {
                        return _c("view", {
                          key: i,
                          staticClass: _vm._$s("83-" + $32, "sc", "line"),
                          class: _vm._$s("83-" + $32, "c", {
                            lineActive: _vm.lineHeight === 2
                          }),
                          attrs: { _i: "83-" + $32 }
                        })
                      }),
                      0
                    )
                  ]
                ),
                _c(
                  "view",
                  { staticClass: _vm._$s(84, "sc", "item"), attrs: { _i: 84 } },
                  [
                    _c("view", {
                      staticClass: _vm._$s(85, "sc", "item-name"),
                      attrs: { _i: 85 }
                    }),
                    _c("view", {
                      staticClass: _vm._$s(86, "sc", "icon"),
                      class: _vm._$s(86, "c", { active: _vm.turnType === 0 }),
                      attrs: { _i: 86 },
                      on: {
                        click: function($event) {
                          return _vm.changeTurnType(0)
                        }
                      }
                    }),
                    _c("view", {
                      staticClass: _vm._$s(87, "sc", "icon"),
                      class: _vm._$s(87, "c", { active: _vm.turnType === 1 }),
                      attrs: { _i: 87 },
                      on: {
                        click: function($event) {
                          return _vm.changeTurnType(1)
                        }
                      }
                    }),
                    _c("view", {
                      staticClass: _vm._$s(88, "sc", "icon"),
                      class: _vm._$s(88, "c", { active: _vm.turnType === 2 }),
                      attrs: { _i: 88 },
                      on: {
                        click: function($event) {
                          return _vm.changeTurnType(2)
                        }
                      }
                    })
                  ]
                ),
                _c(
                  "view",
                  { staticClass: _vm._$s(89, "sc", "item"), attrs: { _i: 89 } },
                  [
                    _c("view", {
                      staticClass: _vm._$s(90, "sc", "item-name"),
                      attrs: { _i: 90 }
                    }),
                    _c("view", {
                      staticClass: _vm._$s(91, "sc", "icon"),
                      class: _vm._$s(91, "c", { active: _vm.background === 1 }),
                      attrs: { _i: 91 },
                      on: {
                        click: function($event) {
                          return _vm.changeBackground(1)
                        }
                      }
                    }),
                    _c("view", {
                      staticClass: _vm._$s(92, "sc", "icon"),
                      class: _vm._$s(92, "c", { active: _vm.background === 2 }),
                      attrs: { _i: 92 },
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
                staticClass: _vm._$s(93, "sc", "directory"),
                class: _vm._$s(93, "c", {
                  container0: _vm.background === 1,
                  container1: _vm.background === 2
                }),
                style: _vm._$s(93, "s", {
                  left: _vm.directoryShow ? 0 : "-100%",
                  color: "" + _vm.colorList[_vm.background - 1]
                }),
                attrs: { _i: 93 },
                on: {
                  touchend: function($event) {
                    $event.stopPropagation()
                  }
                }
              },
              [
                _c("view", {
                  staticClass: _vm._$s(94, "sc", "bookname"),
                  attrs: { _i: 94 }
                }),
                _c(
                  "scroll-view",
                  {
                    staticClass: _vm._$s(95, "sc", "directory-list"),
                    attrs: {
                      "scroll-into-view": _vm._$s(
                        95,
                        "a-scroll-into-view",
                        "chapter" + _vm.curChapter.chapterIndex
                      ),
                      _i: 95
                    }
                  },
                  _vm._l(
                    _vm._$s(96, "f", { forItems: _vm.directoryList }),
                    function(item, index, $23, $33) {
                      return _c(
                        "view",
                        {
                          key: _vm._$s(96, "f", {
                            forIndex: $23,
                            key: item.chapterId
                          }),
                          staticClass: _vm._$s(
                            "96-" + $33,
                            "sc",
                            "directory-listItem"
                          ),
                          class: _vm._$s("96-" + $33, "c", {
                            active: index === _vm.curChapter.chapterIndex
                          }),
                          attrs: {
                            id: _vm._$s("96-" + $33, "a-id", "chapter" + index),
                            _i: "96-" + $33
                          },
                          on: {
                            click: function($event) {
                              return _vm.goToChapter(index)
                            }
                          }
                        },
                        [
                          _vm._v(
                            _vm._$s("96-" + $33, "t0-0", _vm._s(item.name))
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
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!************************************************************************************!*\
  !*** D:/project/read_demo/pages/read/read.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./read.vue?vue&type=script&lang=js&mpType=page */ 12);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStrQixDQUFnQix5bUJBQUcsRUFBQyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/project/read_demo/pages/read/read.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 14));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _myProgress = _interopRequireDefault(__webpack_require__(/*! ../../components/myProgress.vue */ 17));\nvar _battery = _interopRequireDefault(__webpack_require__(/*! ../../components/battery.vue */ 22));\nvar _utils = __webpack_require__(/*! ../../utils/utils.js */ 27);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n{\n  components: {\n    myProgress: _myProgress.default,\n    battery: _battery.default },\n\n  data: function data() {\n    return {\n      bookName: '我是书名',\n      chapterIndexHistory: 0, //用于记录阅读章节的index \n      pageHistory: 0, //用于记录章节的阅读进度\n      text: \"<p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p><p>\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\uFF0C\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u3002</p>\",\n      directoryList: [], //目录列表\n      currentPage: 0, //当前页\n\n      calcText: '', //用于计算高度的文本\n      innerHeight: 0, //截取至整行的最大高度\n\n      preChapter: { //上一章数据\n        ready: false, //是否准备完毕\n        chapterIndex: '',\n        chapterName: '',\n        text: '',\n        totalPage: '' },\n\n\n      curChapter: { //本一章数据\n        chapterIndex: '',\n        chapterName: '',\n        text: '',\n        totalPage: '' },\n\n\n      nextChapter: { //下一章数据\n        ready: false, //是否准备完毕\n        chapterIndex: '',\n        chapterName: '',\n        text: '',\n        totalPage: '' },\n\n\n      tmpChapter: {}, //暂存章节内容\n\n      cover: { //封面的状态\n        pageTranslate: ['', '', ''], //页面位移，三个数对应三种翻页方式\n        show: false //是否显示\n      },\n\n      prePage: { //上一页数据\n        ready: false, //是否准备完毕\n        chapterName: '',\n        text: '',\n        pageNum: '',\n        totalPage: 1,\n        pageTranslate: ['', '', ''] //页面位移，三个数对应三种翻页方式\n      },\n\n      curPage: { //本页数据\n        ready: false, //是否准备完毕\n        chapterName: '',\n        text: '',\n        pageNum: 1,\n        totalPage: 1,\n        pageTranslate: ['', '', ''] //页面位移，三个数对应三种翻页方式\n      },\n\n      nextPage: { //下一页数据\n        ready: false, //是否准备完毕\n        chapterName: '',\n        text: '',\n        pageNum: '',\n        totalPage: '',\n        pageTranslate: ['', '', ''] //页面位移，三个数对应三种翻页方式\n      },\n\n\n      next: false, //用户是否正在翻下一页\n      pre: false, //用户是否正在翻上一页\n\n      waitForNext: false, //是否正在等待下一页准备完毕后跳转\n      waitForPre: false, //是否正在等待上一页准备完毕后跳转\n      waitForNextChapter: false, //是否正在等待下一章准备完毕后跳转\n      waitForPreChapter: false, //是否正在等待上一章准备完毕后跳转\n\n      showAnimation: false, //是否开启动画\n      showShadow: false, //是否显示页面阴影\n\n      windowWidth: 0, //可用屏幕宽度\n      windowHeight: 0, //可用屏幕高度\n      contentHeight: 0, //阅读区域高度\n\n      platform: '', //设备\n      batteryState: '', //电池状态\n      batteryLevel: 100, //电量\n      systemTime: '', //系统时间\n      systemTimeStr: '', //系统时间字符串\n      statusBarHeight: 0, //状态栏高度\n\n      touchStartX: 0, // 触屏起始点x\n      touchX: 0, // 瞬时触屏点x\n      delta: 0, // 手指瞬时位移\n\n      touchStartY: 0, // 触屏起始点y\n      touchY: 0, // 瞬时触屏点y\n\n      menuShow: false, //菜单栏box是否渲染\n      itemShow: false, // 菜单栏动画控制\n      settingShow: false, //设置栏动画控制\n      directoryShow: false, //目录动画控制\n      turnPageTime: .5, //翻页动画时间\n\n      maxFontSize: 25, //最大字体大小，px\n      minFontSize: 14, //最小字体大小，px\n      turnType: 0, //翻页方式\n      fontSize: '', //字体大小，\n      simplified: '', //是否简体\n      lineHeight: '', //行高，注意是fontSize的倍数\n      background: '', //背景\n      colorList: ['#000', '#666'], //与背景对应的字体颜色\n\n      chapterProgress: 0, //‘章节进度条’的参数\n      progressTouched: false //是否正在点击‘章节进度条’\n    };\n\n  },\n  onLoad: function onLoad() {\n    this.getSystemInfo();\n  },\n  mounted: function mounted() {\n    this.initPage();\n  },\n  computed: {\n    progress: function progress() {//章节的阅读进度\n      if (this.curChapter.totalPage === 1) {\n        return 0;\n      }\n      return this.currentPage / (this.curChapter.totalPage - 1);\n    } },\n\n  methods: {\n\n    /**\r\n             * 返回上一页面\r\n             **/\n    back: function back() {\n      uni.navigateBack();\n    },\n\n    /**\r\n       * 获取设备信息\r\n       **/\n    getSystemInfo: function getSystemInfo() {var _this = this;var _uni$getSystemInfoSyn =\n\n      uni.getSystemInfoSync(),windowWidth = _uni$getSystemInfoSyn.windowWidth,windowHeight = _uni$getSystemInfoSyn.windowHeight,statusBarHeight = _uni$getSystemInfoSyn.statusBarHeight,platform = _uni$getSystemInfoSyn.platform;\n\n      //获取一些必要的设备参数\n      this.statusBarHeight = statusBarHeight;\n      this.windowWidth = windowWidth;\n      this.windowHeight = windowHeight;\n      this.platform = platform;\n\n      // 全屏\n      plus.navigator.setFullscreen(true);\n      // 取消ios左滑返回\n      var page = this.$mp.page.$getAppWebview();\n      page.setStyle({ popGesture: 'none' });\n\n      if (this.platform === 'ios') {\n        // 获取ios电量\n        var UIDevice = plus.ios.import(\"UIDevice\");\n        var dev = UIDevice.currentDevice();\n        if (!dev.isBatteryMonitoringEnabled()) {\n          dev.setBatteryMonitoringEnabled(true);\n        }\n        setInterval(function () {\n          _this.batteryState = dev.batteryState();\n          _this.batteryLevel = dev.batteryLevel() * 100;\n        }, 1000);\n\n      } else\n      {\n        // 获取安卓电量\n        var main = plus.android.runtimeMainActivity();\n        var Intent = plus.android.importClass('android.content.Intent');\n        var recevier = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', {\n          onReceive: function onReceive(context, intent) {\n            var action = intent.getAction();\n            if (action == Intent.ACTION_BATTERY_CHANGED) {\n              _this.batteryState = intent.getIntExtra(\"status\", 0); //电池状态  \n              _this.batteryLevel = intent.getIntExtra(\"level\", 0); //电量\n            }\n          } });\n\n        var IntentFilter = plus.android.importClass('android.content.IntentFilter');\n        var filter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);\n        main.registerReceiver(recevier, filter);\n      }\n\n\n\n      // 设置时间\n      var date = new Date();\n      this.systemTime = Date.parse(date);\n      this.systemTimeStr = (0, _utils.dateToStr)(this.systemTime);\n      setInterval(function () {\n        _this.systemTime += 60000;\n        _this.systemTimeStr = (0, _utils.dateToStr)(_this.systemTime);\n      }, 60000);\n\n      // 获取字体、排版等信息\n\n      /*****************************************/\n      /**********    根据需要更改    ************/\n      /*****************************************/\n\n      //可能缓存在前端可能从后端拿，如果是异步注意同步处理\n      this.fontSize = uni.getStorageSync('fontSize') || 16;\n      this.simplified = uni.getStorageSync('simplified');\n      this.lineHeight = uni.getStorageSync('lineHeight') || 1.5;\n      this.background = uni.getStorageSync('background') || 1;\n      this.turnType = uni.getStorageSync('turnType') || 0;\n      this.chapterIndexHistory = uni.getStorageSync('chapterIndexHistory') || 0;\n      this.progressHistory = uni.getStorageSync('progressHistory') || 0;\n      /*****************************************/\n      /*****************************************/\n      /*****************************************/\n\n    },\n\n    /**\r\n       * 获取数据并计算页面\r\n       **/\n    initPage: function initPage() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var page;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                uni.showLoading({\n                  title: '加载中' });\n\n                _this2.cover.pageTranslate = [\"(\".concat(\n                -_this2.windowWidth, \"px,0)\"), \"(\".concat(\n                -_this2.windowWidth, \"px,0)\"), \"(0,\".concat(\n                -_this2.windowHeight, \"px)\")];_context.next = 4;return (\n\n                  _this2.calcHeight());case 4:_context.next = 6;return (\n                  _this2.getDirectoryList());case 6:_context.next = 8;return (\n                  _this2.getThreeChapter(_this2.chapterIndexHistory));case 8:\n                page = Math.floor((_this2.curChapter.totalPage - 1) * _this2.progressHistory);\n                _this2.goToPage(page);\n                uni.hideLoading();case 11:case \"end\":return _context.stop();}}}, _callee);}))();\n\n    },\n\n    /**\r\n       * 计算innerHeight，用于截取至整行\r\n       **/\n    calcHeight: function calcHeight() {var _this3 = this;\n      if (this.contentHeight) {\n        var lineHeight = Math.floor(this.fontSize * this.lineHeight);\n        var lineNum = Math.floor((this.contentHeight + (lineHeight - this.fontSize) / 2) / lineHeight);\n        this.innerHeight = lineNum * lineHeight;\n      } else\n      {\n        return new Promise(function (resolve, reject) {\n          _this3.$nextTick(function () {\n            var query = uni.createSelectorQuery().in(_this3);\n            query.select('#content').boundingClientRect(function (data) {\n              var height = data.height;\n              _this3.contentHeight = height;\n              var lineHeight = Math.floor(_this3.fontSize * _this3.lineHeight);\n              var lineNum = Math.floor((height + (lineHeight - _this3.fontSize) / 2) / lineHeight);\n              _this3.innerHeight = lineNum * lineHeight;\n              resolve();\n            }).exec();\n          });\n\n        });\n      }\n\n    },\n\n    /**\r\n       * 计算本章页数\r\n       **/\n    calcCurChapter: function calcCurChapter() {var _this4 = this;\n      this.calcText = this.curChapter.text;\n      return new Promise(function (resolve, reject) {\n        _this4.$nextTick(function () {\n          var query = uni.createSelectorQuery().in(_this4);\n          query.select('#bookInner').boundingClientRect(function (data) {\n            var height = data.height;\n            _this4.curChapter.totalPage = Math.ceil(height / _this4.innerHeight);\n            _this4.curChapter.ready = true; //章节准备完毕\n            resolve();\n          }).exec();\n        });\n\n      });\n    },\n\n    /**\r\n       * 计算上一章页数,并翻页（如果有）\r\n       **/\n    calcPreChapter: function calcPreChapter() {var _this5 = this;\n      this.calcText = this.preChapter.text;\n      return new Promise(function (resolve, reject) {\n        _this5.$nextTick(function () {\n          var query = uni.createSelectorQuery().in(_this5);\n          query.select('#bookInner').boundingClientRect(function (data) {\n            var height = data.height;\n            _this5.preChapter.totalPage = Math.ceil(height / _this5.innerHeight);\n            _this5.preChapter.ready = true; //章节准备完毕\n            if (_this5.waitForPre) {//发生在用户翻至上一章，但是上一章数据未准备完毕时\n              uni.hideLoading(); //把loading关掉\n              _this5.waitForPre = false;\n              //页面准备完毕\n              _this5.prePage = {\n                ready: _this5.preChapter.ready,\n                chapterName: _this5.preChapter.chapterName,\n                text: _this5.preChapter.text,\n                pageNum: _this5.preChapter.totalPage - 1,\n                totalPage: _this5.preChapter.totalPage,\n                pageTranslate: [\"(\".concat(\n                -_this5.windowWidth, \"px,0)\"), \"(\".concat(\n                -_this5.windowWidth, \"px,0)\"), \"(0,\".concat(\n                -_this5.windowHeight, \"px)\")] };\n\n\n              _this5.goPrePage();\n            }\n            if (_this5.waitForPreChapter) {\n              uni.hideLoading();\n              _this5.waitForPreChapter = false;\n              _this5.goPreChapter();\n            }\n            resolve();\n          }).exec();\n        });\n\n      });\n\n    },\n\n    /**\r\n       * 计算下一章页数,并翻页（如果有）\r\n       **/\n    calcNextChapter: function calcNextChapter() {var _this6 = this;\n      this.calcText = this.nextChapter.text;\n      return new Promise(function (resolve, reject) {\n        _this6.$nextTick(function () {\n          var query = uni.createSelectorQuery().in(_this6);\n          query.select('#bookInner').boundingClientRect(function (data) {\n            var height = data.height;\n            _this6.nextChapter.totalPage = Math.ceil(height / _this6.innerHeight);\n            _this6.nextChapter.ready = true; //章节准备完毕\n            if (_this6.waitForNext) {//发生在用户翻至下一章，但是下一章数据未准备完毕时\n              uni.hideLoading(); //把loading关掉\n              _this6.waitForNext = false;\n              //页面准备完毕\n              _this6.nextPage = {\n                ready: _this6.nextChapter.ready,\n                chapterName: _this6.nextChapter.chapterName,\n                text: _this6.nextChapter.text,\n                pageNum: 0,\n                totalPage: _this6.nextChapter.totalPage,\n                pageTranslate: [\"(0,0)\", \"(\".concat(\n\n                _this6.windowWidth, \"px,0)\"), \"(0,\".concat(\n                _this6.windowHeight, \"px)\")] };\n\n\n\n              _this6.goNextPage();\n            }\n            if (_this6.waitForNextChapter) {\n              uni.hideLoading();\n              _this6.waitForNextChapter = false;\n              _this6.goNextChapter();\n            }\n            resolve();\n          }).exec();\n\n        });\n\n      });\n\n    },\n\n    /**\r\n       * 触摸开始（封面）\r\n       **/\n    coverTouchStart: function coverTouchStart(e) {\n      this.showAnimation = false; //关掉动画，否则翻页会很慢\n      this.touchX = e.touches[0].clientX;\n      this.touchStartX = e.touches[0].clientX;\n      this.touchY = e.touches[0].clientY;\n      this.touchStartY = e.touches[0].clientY;\n    },\n\n    /**\r\n       * 触摸（封面）\r\n       **/\n    coverTouchMove: function coverTouchMove(e) {\n      this.showShadow = true;\n      if (this.turnType === 0 || this.turnType === 1) {//翻页方式为‘覆盖’或者‘左右平移’\n        var deltaX = e.touches[0].clientX - this.touchStartX;\n        this.delta = e.touches[0].clientX - this.touchX;\n        this.touchX = e.touches[0].clientX;\n        if (this.next) {//首次左滑后\n          this.cover.pageTranslate = [\"(\".concat(\n          deltaX, \"px,0)\"), \"(\".concat(\n          deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n          this.curPage.pageTranslate = [\"(0,0)\", \"(\".concat(\n\n          this.windowWidth + deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n        } else\n        if (!this.pre && deltaX < 0) {//首次左滑\n          this.next = true;\n          this.cover.pageTranslate = [\"(\".concat(\n          deltaX, \"px,0)\"), \"(\".concat(\n          deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n          this.curPage.pageTranslate = [\"(0,0)\", \"(\".concat(\n\n          this.windowWidth + deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n        }\n        if (this.pre) {//首次右滑后，由于是封面不做任何操作\n          return;\n        } else\n        if (!this.next && deltaX > 0) {//首次右滑\n          this.pre = true;\n          uni.showToast({\n            title: '已经是第一页了',\n            icon: 'none' });\n\n        }\n      } else\n      {//翻页方式为‘上下平移’\n        var deltaY = e.touches[0].clientY - this.touchStartY;\n        this.delta = e.touches[0].clientY - this.touchY;\n        this.touchY = e.touches[0].clientY;\n        if (this.next) {//首次上滑后\n          this.cover.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n          deltaY, \"px)\")];\n\n          this.curPage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n          this.windowHeight + deltaY, \"px)\")];\n\n        } else\n        if (!this.pre && deltaY < 0) {//首次上滑\n          this.next = true;\n          this.cover.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n          deltaY, \"px)\")];\n\n          this.curPage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n          this.windowHeight + deltaY, \"px)\")];\n\n        }\n        if (this.pre) {//首次下滑后，由于是封面不做任何操作\n          return;\n        } else\n        if (!this.next && deltaY > 0) {//首次下滑\n          this.pre = true;\n          uni.showToast({\n            title: '已经是第一页了',\n            icon: 'none' });\n\n\n        }\n      }\n\n\n    },\n\n    /**\r\n       * 触摸结束（封面）\r\n       **/\n    coverTouchEnd: function coverTouchEnd(e) {\n      this.showAnimation = true;\n      this.showShadow = false;\n      var delta = 0;\n      if (this.turnType === 0 || this.turnType === 1) {//翻页方式为‘覆盖’或者‘左右平移’\n        delta = e.changedTouches[0].clientX - this.touchStartX;\n      } else\n      {\n        delta = e.changedTouches[0].clientY - this.touchStartY;\n      }\n      if (delta === 0) {\n        if (e.changedTouches[0].clientX < this.windowWidth / 3) {//点击屏幕左1/3为上一页\n          uni.showToast({\n            title: '已经是第一页了',\n            icon: 'none' });\n\n        } else\n        if (e.changedTouches[0].clientX > this.windowWidth / 3 * 2) {//点击屏幕右1/3为下一页\n          this.cover.show = false;\n          this.cover.pageTranslate = [\"(\".concat(\n          -this.windowWidth, \"px,0)\"), \"(\".concat(\n          -this.windowWidth, \"px,0)\"), \"(0,\".concat(\n          -this.windowHeight, \"px)\")];\n\n          this.curPage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,0)\"];\n\n\n\n\n        } else\n        if (e.changedTouches[0].clientX <= this.windowWidth / 3 * 2 && e.changedTouches[0].clientX >= this.windowWidth / 3) {//点击屏幕中间1/3为呼出菜单\n          this.showMenu();\n        }\n      } else\n      {//翻页方式为‘上下平移’\n        if (this.next && this.delta <= 0) {//下一页\n          this.cover.pageTranslate = [\"(\".concat(\n          -this.windowWidth, \"px,0)\"), \"(\".concat(\n          -this.windowWidth, \"px,0)\"), \"(0,\".concat(\n          -this.windowHeight, \"px)\")];\n\n          this.curPage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,0)\"];\n\n\n\n\n          this.cover.show = false;\n        } else\n        if (this.next && this.delta > 0) {//取消翻页\n          this.cover.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,0)\"];\n\n\n\n\n          this.curPage.pageTranslate = [\"(0,0)\", \"(\".concat(\n\n          this.windowWidth, \"px,0)\"), \"(0,\".concat(\n          this.windowHeight, \"px)\")];\n\n        }\n      }\n      this.next = false;\n      this.pre = false;\n\n    },\n\n    /**\r\n       * 触摸开始, 页面轮换\r\n       **/\n    touchStart: function touchStart(e) {\n      this.showAnimation = false;\n      this.touchX = e.touches[0].clientX;\n      this.touchStartX = e.touches[0].clientX;\n      this.touchY = e.touches[0].clientY;\n      this.touchStartY = e.touches[0].clientY;\n      if (this.waitForNext || this.waitForPre) {\n        return;\n      }\n      //重置页面状态\n      this.goToPage(this.currentPage);\n\n    },\n\n    /**\r\n       * 触摸\r\n       **/\n    touchMove: function touchMove(e) {\n      this.showShadow = true;\n      if (this.turnType === 0 || this.turnType === 1) {//翻页方式为‘覆盖’或者‘左右平移’\n        var deltaX = e.touches[0].clientX - this.touchStartX;\n        this.delta = e.touches[0].clientX - this.touchX;\n        this.touchX = e.touches[0].clientX;\n        if (this.waitForNext || this.waitForPre) {\n          return;\n        }\n        if (this.next) {//首次左滑后\n          if (this.nextPage.isEnd) {\n            return;\n          }\n          this.prePage.pageTranslate = [\"(\".concat(\n          -this.windowWidth, \"px,0)\"), \"(\".concat(\n          -this.windowWidth + deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n          this.curPage.pageTranslate = [\"(\".concat(\n          deltaX, \"px,0)\"), \"(\".concat(\n          deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n          this.nextPage.pageTranslate = [\"(0,0)\", \"(\".concat(\n\n          this.windowWidth + deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n        } else\n        if (!this.pre && deltaX < 0) {//首次左滑\n          this.next = true;\n          if (this.nextPage.ready) {//页面准备好了\n            if (this.nextPage.isEnd) {\n\n\n              /*****************************************/\n              /**********    根据需要更改    ************/\n              /*****************************************/\n              uni.showToast({\n                title: '跳转推荐页',\n                icon: 'none' });\n\n              /*****************************************/\n              /*****************************************/\n              /*****************************************/\n\n\n            } else\n            {\n              this.prePage.pageTranslate = [\"(\".concat(\n              -this.windowWidth, \"px,0)\"), \"(\".concat(\n              -this.windowWidth + deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n              this.curPage.pageTranslate = [\"(\".concat(\n              deltaX, \"px,0)\"), \"(\".concat(\n              deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n              this.nextPage.pageTranslate = [\"(0,0)\", \"(\".concat(\n\n              this.windowWidth + deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n            }\n          } else\n          {\n            this.waitForNext = true; //等待下一页准备完毕后跳转\n            uni.showLoading({\n              title: '正在准备下一章' });\n\n          }\n        }\n        if (this.pre) {//首次右滑后\n          if (this.prePage.isCover) {//上一页是封面\n            this.cover.pageTranslate = [\"(\".concat(\n            -this.windowWidth + deltaX, \"px,0)\"), \"(\".concat(\n            -this.windowWidth + deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n            this.curPage.pageTranslate = [\"(0,0)\", \"(\".concat(\n\n            deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n          } else\n          {\n            this.prePage.pageTranslate = [\"(\".concat(\n            -this.windowWidth + deltaX, \"px,0)\"), \"(\".concat(\n            -this.windowWidth + deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n            this.curPage.pageTranslate = [\"(0,0)\", \"(\".concat(\n\n            deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n            this.nextPage.pageTranslate = [\"(0,0)\", \"(\".concat(\n\n            this.windowWidth + deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n          }\n        } else\n        if (!this.next && deltaX > 0) {//首次右滑\n          this.pre = true;\n          if (this.prePage.ready) {//页面准备好了\n            if (this.prePage.isCover) {//上一页是封面\n              this.cover.pageTranslate = [\"(\".concat(\n              -this.windowWidth + deltaX, \"px,0)\"), \"(\".concat(\n              -this.windowWidth + deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n              this.curPage.pageTranslate = [\"(0,0)\", \"(\".concat(\n\n              deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n            } else\n            {\n              this.prePage.pageTranslate = [\"(\".concat(\n              -this.windowWidth + deltaX, \"px,0)\"), \"(\".concat(\n              -this.windowWidth + deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n              this.curPage.pageTranslate = [\"(0,0)\", \"(\".concat(\n\n              deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n              this.nextPage.pageTranslate = [\"(0,0)\", \"(\".concat(\n\n              this.windowWidth + deltaX, \"px,0)\"), \"(0,0)\"];\n\n\n            }\n          } else\n          {\n            this.waitForPre = true; //等待上一页准备完毕后跳转\n            uni.showLoading({\n              title: '正在准备上一章' });\n\n          }\n\n        }\n      } else\n      {//翻页方式为‘上下平移’\n        var deltaY = e.touches[0].clientY - this.touchStartY;\n        this.delta = e.touches[0].clientY - this.touchY;\n        this.touchY = e.touches[0].clientY;\n        if (this.waitForNext || this.waitForPre) {\n          return;\n        }\n        if (this.next) {//首次上滑后\n          if (this.nextPage.isEnd) {\n            return;\n          }\n          this.prePage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n          -this.windowHeight + deltaY, \"px)\")];\n\n          this.curPage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n          deltaY, \"px)\")];\n\n          this.nextPage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n          this.windowHeight + deltaY, \"px)\")];\n\n        } else\n        if (!this.pre && deltaY < 0) {//首次上滑\n          this.next = true;\n          if (this.nextPage.ready) {//页面准备好了\n            if (this.nextPage.isEnd) {\n\n              /*****************************************/\n              /**********    根据需要更改    ************/\n              /*****************************************/\n              uni.showToast({\n                title: '跳转推荐页',\n                icon: 'none' });\n\n              /*****************************************/\n              /*****************************************/\n              /*****************************************/\n\n            } else\n            {\n              this.prePage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n              -this.windowHeight + deltaY, \"px)\")];\n\n              this.curPage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n              deltaY, \"px)\")];\n\n              this.nextPage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n              this.windowHeight + deltaY, \"px)\")];\n\n            }\n          } else\n          {\n            this.waitForNext = true; //等待下一页准备完毕后跳转\n            uni.showLoading({\n              title: '正在准备下一章' });\n\n          }\n        }\n        if (this.pre) {//首次下滑后\n          if (this.prePage.isCover) {//上一页是封面\n            this.cover.pageTranslate = this.cover.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n            -this.windowHeight + deltaY, \"px)\")];\n\n            this.curPage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n            deltaY, \"px)\")];\n\n          } else\n          {\n            this.prePage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n            -this.windowHeight + deltaY, \"px)\")];\n\n            this.curPage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n            deltaY, \"px)\")];\n\n            this.nextPage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n            this.windowHeight + deltaY, \"px)\")];\n\n          }\n        } else\n        if (!this.next && deltaY > 0) {//首次下滑\n          this.pre = true;\n          if (this.prePage.ready) {//页面准备好了\n            if (this.prePage.isCover) {//上一页是封面\n              this.cover.pageTranslate = this.cover.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n              -this.windowHeight + deltaY, \"px)\")];\n\n              this.curPage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n              deltaY, \"px)\")];\n\n            } else\n            {\n              this.prePage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n              -this.windowHeight + deltaY, \"px)\")];\n\n              this.curPage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n              deltaY, \"px)\")];\n\n              this.nextPage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,\".concat(\n\n\n              this.windowHeight + deltaY, \"px)\")];\n\n            }\n          } else\n          {\n            this.waitForPre = true; //等待上一页准备完毕后跳转\n            uni.showLoading({\n              title: '正在准备上一章' });\n\n          }\n\n        }\n      }\n\n    },\n\n    /**\r\n       * 触摸结束\r\n       **/\n    touchEnd: function touchEnd(e) {\n      this.showAnimation = true;\n      this.showShadow = false;\n      var delta = 0;\n      if (this.turnType === 0 || this.turnType === 1) {\n        delta = e.changedTouches[0].clientX - this.touchStartX;\n      } else\n      {\n        delta = e.changedTouches[0].clientY - this.touchStartY;\n      }\n      if (delta === 0) {\n        if (e.changedTouches[0].clientX < this.windowWidth / 3 && !this.waitForNext && !this.waitForPre) {//点击屏幕左1/3为上一页\n          if (this.prePage.ready) {\n            this.goPrePage();\n          } else\n          {\n            this.waitForPre = true; //等待上一页准备完毕后跳转\n            uni.showLoading({\n              title: '正在准备上一章' });\n\n          }\n        } else\n        if (e.changedTouches[0].clientX > this.windowWidth / 3 * 2 && !this.waitForNext && !this.waitForPre) {//点击屏幕右1/3为下一页\n\n          if (this.nextPage.ready) {\n            this.goNextPage();\n          } else\n          {\n            this.waitForNext = true; //等待下一页准备完毕后跳转\n            uni.showLoading({\n              title: '正在准备下一章' });\n\n          }\n        } else\n        if (e.changedTouches[0].clientX <= this.windowWidth / 3 * 2 && e.changedTouches[0].clientX >= this.windowWidth / 3) {//点击屏幕中间1/3为呼出菜单\n          this.showMenu();\n        }\n      } else\n      if (!this.waitForNext && !this.waitForPre) {\n        if (this.next && this.delta <= 0) {//下一页\n          this.goNextPage();\n        } else\n        if (this.next && this.delta > 0) {//取消翻页\n          this.prePage.pageTranslate = [\"(\".concat(\n          -this.windowWidth, \"px,0)\"), \"(\".concat(\n          -this.windowWidth, \"px,0)\"), \"(0,\".concat(\n          -this.windowHeight, \"px)\")];\n\n          this.curPage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,0)\"];\n\n\n\n\n          this.nextPage.pageTranslate = [\"(0,0)\", \"(\".concat(\n\n          this.windowWidth, \"px,0)\"), \"(0,\".concat(\n          this.windowHeight, \"px)\")];\n\n        } else\n        if (this.pre && this.delta >= 0) {//上一页\n          this.goPrePage();\n        } else\n        if (this.pre && this.delta < 0) {//取消翻页\n          this.prePage.pageTranslate = [\"(\".concat(\n          -this.windowWidth, \"px,0)\"), \"(\".concat(\n          -this.windowWidth, \"px,0)\"), \"(0,\".concat(\n          -this.windowHeight, \"px)\")];\n\n          this.curPage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,0)\"];\n\n\n\n\n          this.nextPage.pageTranslate = [\"(0,0)\", \"(\".concat(\n\n          this.windowWidth, \"px,0)\"), \"(0,\".concat(\n          this.windowHeight, \"px)\")];\n\n          this.cover.pageTranslate = [\"(\".concat(\n          -this.windowWidth, \"px,0)\"), \"(\".concat(\n          -this.windowWidth, \"px,0)\"), \"(0,\".concat(\n          -this.windowHeight, \"px)\")];\n\n        }\n      }\n      this.next = false;\n      this.pre = false;\n\n    },\n\n\n\n    /**\r\n       * 呼出菜单\r\n       **/\n    showMenu: function showMenu() {var _this7 = this;\n\n      plus.navigator.setFullscreen(false);\n\n      this.menuShow = true;\n      setTimeout(function () {\n        _this7.itemShow = true;\n      }, 100);\n    },\n\n    /**\r\n       * 关闭菜单\r\n       **/\n    closeMenu: function closeMenu() {var _this8 = this;\n\n      plus.navigator.setFullscreen(true);\n\n      this.itemShow = false;\n      this.settingShow = false;\n      this.directoryShow = false;\n      setTimeout(function () {\n        _this8.menuShow = false;\n      }, 300);\n    },\n\n    /**\r\n       * 关闭菜单栏，呼出设置栏\r\n       **/\n    openSetting: function openSetting() {var _this9 = this;\n\n      this.itemShow = false;\n      setTimeout(function () {\n        _this9.settingShow = true;\n      }, 300);\n    },\n\n    /**\r\n       * 关闭菜单栏，呼出目录栏\r\n       **/\n    openDirectory: function openDirectory() {var _this10 = this;\n\n      plus.navigator.setFullscreen(true);\n\n      this.itemShow = false;\n      setTimeout(function () {\n        _this10.directoryShow = true;\n      }, 300);\n    },\n\n    /**\r\n       * 开始拖动进度条\r\n       **/\n    progressStart: function progressStart() {\n      this.progressTouched = true;\n    },\n\n    /**\r\n       * 结束拖动进度条\r\n       **/\n    progressEnd: function progressEnd(index) {var _this11 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n\n                _this11.chapterProgress = index;\n                uni.showLoading({\n                  title: '加载中' });_context2.next = 4;return (\n\n                  _this11.getThreeChapter(index));case 4:\n                _this11.progressTouched = false;\n                _this11.goToPage(0);\n                uni.hideLoading();\n                uni.setStorageSync('chapterIndexHistory', index);\n                uni.setStorageSync('progressHistory', 0);case 9:case \"end\":return _context2.stop();}}}, _callee2);}))();\n    },\n\n    /**\r\n       * 拖动进度条\r\n       **/\n    indexChange: function indexChange(index) {\n      this.chapterProgress = index;\n    },\n\n    /**\r\n       * 上一页\r\n       **/\n    goPrePage: function goPrePage() {var _this12 = this;\n      if (this.prePage.isCover) {//如果是首页\n        this.cover.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,0)\"];\n\n\n\n\n        this.curPage.pageTranslate = [\"(0,0)\", \"(\".concat(\n\n        this.windowWidth, \"px,0)\"), \"(0,\".concat(\n        this.windowHeight, \"px)\")];\n\n        this.cover.show = true;\n        return;\n      }\n      this.currentPage -= 1;\n      this.prePage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,0)\"];\n\n\n\n\n      this.curPage.pageTranslate = [\"(0,0)\", \"(\".concat(\n\n      this.windowWidth, \"px,0)\"), \"(0,\".concat(\n      this.windowHeight, \"px)\")];\n\n      this.nextPage.pageTranslate = [\"(0,0)\", \"(\".concat(\n\n      2 * this.windowWidth, \"px,0)\"), \"(0,\".concat(\n      2 * this.windowHeight, \"px)\")];\n\n\n      if (this.currentPage === -1) {//翻至上一章了\n        uni.showToast({\n          title: this.preChapter.chapterName,\n          icon: 'none' });\n\n        this.currentPage = this.preChapter.totalPage - 1;\n        this.chapterRotate('pre');\n      }\n\n      this.$nextTick(function () {\n        uni.setStorageSync('progressHistory', _this12.progress);\n      });\n    },\n\n\n    /**\r\n       * 下一页\r\n       **/\n    goNextPage: function goNextPage() {var _this13 = this;\n      if (this.nextPage.isEnd) {//如果翻至本书末尾\n\n        /*****************************************/\n        /**********    根据需要更改    ************/\n        /*****************************************/\n        uni.showToast({\n          title: '跳转推荐页',\n          icon: 'none' });\n\n        /*****************************************/\n        /*****************************************/\n        /*****************************************/\n        return;\n      }\n      this.currentPage += 1;\n      this.prePage.pageTranslate = [\"(\".concat(\n      -this.windowWidth, \"px,0)\"), \"(\".concat(\n      -2 * this.windowWidth, \"px,0)\"), \"(0,\".concat(\n      -2 * this.windowHeight, \"px)\")];\n\n      this.curPage.pageTranslate = [\"(\".concat(\n      -this.windowWidth, \"px,0)\"), \"(\".concat(\n      -this.windowWidth, \"px,0)\"), \"(0,\".concat(\n      -this.windowHeight, \"px)\")];\n\n      this.nextPage.pageTranslate = [\"(0,0)\", \"(0,0)\", \"(0,0)\"];\n\n\n\n\n\n      if (this.currentPage === this.curChapter.totalPage) {//翻至下一章了\n        uni.showToast({\n          title: this.nextChapter.chapterName,\n          icon: 'none' });\n\n        this.currentPage = 0;\n        this.chapterRotate('next');\n      }\n\n      this.$nextTick(function () {\n        uni.setStorageSync('progressHistory', _this13.progress);\n      });\n    },\n\n    /**\r\n       * 章节轮换\r\n       **/\n    chapterRotate: function chapterRotate(type) {var _this14 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:if (!(\n                type === 'next')) {_context3.next = 12;break;}\n                _this14.preChapter = Object.assign({}, _this14.curChapter);\n                _this14.curChapter = Object.assign({}, _this14.nextChapter);if (!(\n                _this14.curChapter.chapterIndex !== _this14.directoryList.length - 1)) {_context3.next = 11;break;} //最后一章是根据目录列表长度判断\n                _this14.nextChapter = {\n                  ready: false,\n                  chapterIndex: _this14.curChapter.chapterIndex + 1,\n                  chapterName: _this14.directoryList[_this14.curChapter.chapterIndex + 1].name };_context3.next = 7;return (\n\n                  _this14.getOneChapter(_this14.directoryList[_this14.curChapter.chapterIndex + 1].chapterId));case 7:\n                _this14.$set(_this14.nextChapter, 'text', _this14.tmpChapter.text);\n                _this14.calcNextChapter();_context3.next = 12;break;case 11:\n\n\n                _this14.nextChapter = { ready: true, isEnd: true };case 12:if (!(\n\n\n                type === 'pre')) {_context3.next = 24;break;}\n                _this14.nextChapter = Object.assign({}, _this14.curChapter);\n                _this14.curChapter = Object.assign({}, _this14.preChapter);if (!(\n                _this14.curChapter.chapterIndex !== 0)) {_context3.next = 23;break;}\n                _this14.preChapter = {\n                  ready: false,\n                  chapterIndex: _this14.curChapter.chapterIndex - 1,\n                  chapterName: _this14.directoryList[_this14.curChapter.chapterIndex - 1].name };_context3.next = 19;return (\n\n                  _this14.getOneChapter(_this14.directoryList[_this14.curChapter.chapterIndex - 1].chapterId));case 19:\n                _this14.$set(_this14.preChapter, 'text', _this14.tmpChapter.text);\n                _this14.calcPreChapter();_context3.next = 24;break;case 23:\n\n\n                _this14.preChapter = { ready: true, isCover: true };case 24:\n\n\n                uni.setStorageSync('chapterIndexHistory', _this14.curChapter.chapterIndex);case 25:case \"end\":return _context3.stop();}}}, _callee3);}))();\n    },\n\n\n    /**\r\n       * 跳转下一章\r\n       **/\n    goNextChapter: function goNextChapter() {\n      if (this.curChapter.chapterIndex === this.directoryList.length - 1) {\n        uni.showToast({\n          title: '已经是最后一章了',\n          icon: 'none' });\n\n        return;\n      }\n      if (this.waitForNext || this.waitForPre) {\n        return;\n      }\n      if (this.nextChapter.ready) {\n        this.chapterRotate('next');\n        this.goToPage(0);\n      } else\n      {\n        uni.showLoading({\n          title: '正在准备下一章' });\n\n        this.waitForNextChapter = true;\n      }\n\n    },\n\n    /**\r\n       * 跳转上一章\r\n       **/\n    goPreChapter: function goPreChapter(page) {\n      if (this.curChapter.chapterIndex === 0) {\n        uni.showToast({\n          title: '这是第一章',\n          icon: 'none' });\n\n        return;\n      }\n      if (this.waitForNext || this.waitForPre) {\n        return;\n      }\n      if (this.preChapter.ready) {\n        this.chapterRotate('pre');\n        this.goToPage(0);\n      } else\n      {\n        uni.showLoading({\n          title: '正在准备上一章' });\n\n        this.waitForPreChapter = true;\n      }\n    },\n\n\n    /**\r\n       * 根据页码跳转\r\n       **/\n    goToPage: function goToPage(page) {var _this15 = this;\n\n      this.currentPage = page;\n      this.pageStatus = 0;\n      this.showAnimation = false;\n      this.curPage = {\n        ready: this.curChapter.ready,\n        chapterName: this.curChapter.chapterName,\n        text: this.curChapter.text,\n        pageNum: this.currentPage,\n        totalPage: this.curChapter.totalPage,\n        pageTranslate: [\"(0,0)\", \"(0,0)\", \"(0,0)\"] };\n\n\n\n\n\n      if (this.currentPage === 0) {\n        if (this.preChapter.ready && this.preChapter.isCover) {//翻至封面了\n          this.prePage = {\n            ready: true,\n            isCover: true,\n            pageTranslate: [\"(\".concat(\n            -this.windowWidth, \"px,0)\"), \"(\".concat(\n            -this.windowWidth, \"px,0)\"), \"(0,\".concat(\n            -this.windowHeight, \"px)\")] };\n\n\n        } else\n        {\n          this.prePage = {\n            ready: this.preChapter.ready,\n            chapterName: this.preChapter.chapterName,\n            text: this.preChapter.text,\n            pageNum: this.preChapter.totalPage - 1,\n            totalPage: this.preChapter.totalPage,\n            pageTranslate: [\"(\".concat(\n            -this.windowWidth, \"px,0)\"), \"(\".concat(\n            -this.windowWidth, \"px,0)\"), \"(0,\".concat(\n            -this.windowHeight, \"px)\")] };\n\n\n        }\n      } else\n      {\n        this.prePage = {\n          ready: true,\n          chapterName: this.curChapter.chapterName,\n          text: this.curChapter.text,\n          pageNum: this.currentPage - 1,\n          totalPage: this.curChapter.totalPage,\n          pageTranslate: [\"(\".concat(\n          -this.windowWidth, \"px,0)\"), \"(\".concat(\n          -this.windowWidth, \"px,0)\"), \"(0,\".concat(\n          -this.windowHeight, \"px)\")] };\n\n\n      }\n      if (this.currentPage >= this.curChapter.totalPage - 1) {\n        if (this.nextChapter.ready && this.nextChapter.isEnd) {//翻至最后一章了\n          this.nextPage = {\n            ready: true,\n            isEnd: true,\n            pageTranslate: [\"(0,0)\", \"(\".concat(\n\n            this.windowWidth, \"px,0)\"), \"(0,\".concat(\n            this.windowHeight, \"px)\")] };\n\n\n        } else\n        {\n          this.nextPage = {\n            ready: this.nextChapter.ready,\n            chapterName: this.nextChapter.chapterName,\n            text: this.nextChapter.text,\n            pageNum: 0,\n            totalPage: this.nextChapter.totalPage,\n            pageTranslate: [\"(0,0)\", \"(\".concat(\n\n            this.windowWidth, \"px,0)\"), \"(0,\".concat(\n            this.windowHeight, \"px)\")] };\n\n\n        }\n      } else\n      {\n        this.nextPage = {\n          ready: true,\n          chapterName: this.curChapter.chapterName,\n          text: this.curChapter.text,\n          pageNum: this.currentPage + 1,\n          totalPage: this.curChapter.totalPage,\n          pageTranslate: [\"(0,0)\", \"(\".concat(\n\n          this.windowWidth, \"px,0)\"), \"(0,\".concat(\n          this.windowHeight, \"px)\")] };\n\n\n      }\n      this.$nextTick(function () {\n        uni.setStorageSync('progressHistory', _this15.progress);\n      });\n    },\n\n    /**\r\n       * 跳转到指定章节\r\n       **/\n    goToChapter: function goToChapter(index) {var _this16 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n                _this16.progressTouched = false;\n                _this16.closeMenu();\n                uni.showLoading({\n                  title: '加载中' });_context4.next = 5;return (\n\n                  _this16.getThreeChapter(index));case 5:\n                _this16.goToPage(0);\n                uni.hideLoading();\n                uni.setStorageSync('chapterIndexHistory', index);case 8:case \"end\":return _context4.stop();}}}, _callee4);}))();\n    },\n\n\n    /**\r\n       * 加大字体\r\n       **/\n    bigSize: function bigSize() {var _this17 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var progress, page;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:\n                progress = _this17.progress; //记录阅读进度用于调整字体后跳转\n                _this17.fontSize++;\n                uni.setStorageSync('fontSize', _this17.fontSize);\n                _this17.calcHeight();_context5.next = 6;return (\n                  _this17.calcCurChapter());case 6:if (!(\n                _this17.preChapter.ready && !_this17.preChapter.isCover)) {_context5.next = 10;break;}\n                _this17.preChapter.ready = false;_context5.next = 10;return (\n                  _this17.calcPreChapter());case 10:if (!(\n\n                _this17.nextChapter.ready && !_this17.nextChapter.isEnd)) {_context5.next = 14;break;}\n                _this17.nextChapter.ready = false;_context5.next = 14;return (\n                  _this17.calcNextChapter());case 14:\n\n                page = Math.floor((_this17.curChapter.totalPage - 1) * progress);\n                _this17.goToPage(page);case 16:case \"end\":return _context5.stop();}}}, _callee5);}))();\n\n\n    },\n\n    /**\r\n       * 缩小字体\r\n       **/\n    smallSize: function smallSize() {var _this18 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var progress, page;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:\n                progress = _this18.progress;\n                _this18.fontSize--;\n                uni.setStorageSync('fontSize', _this18.fontSize);\n                _this18.calcHeight();_context6.next = 6;return (\n                  _this18.calcCurChapter());case 6:if (!(\n                _this18.preChapter.ready && !_this18.preChapter.isCover)) {_context6.next = 10;break;}\n                _this18.preChapter.ready = false;_context6.next = 10;return (\n                  _this18.calcPreChapter());case 10:if (!(\n\n                _this18.nextChapter.ready && !_this18.nextChapter.isEnd)) {_context6.next = 14;break;}\n                _this18.nextChapter.ready = false;_context6.next = 14;return (\n                  _this18.calcNextChapter());case 14:\n\n                page = Math.floor((_this18.curChapter.totalPage - 1) * progress);\n                _this18.goToPage(page);case 16:case \"end\":return _context6.stop();}}}, _callee6);}))();\n    },\n\n    /**\r\n       * 切换繁体简体\r\n       **/\n    changeFont: function changeFont(type) {\n      if (!type) {//切换为繁体\n        this.preChapter.text = (0, _utils.traditionalized)(this.preChapter.text);\n        this.curChapter.text = (0, _utils.traditionalized)(this.curChapter.text);\n        this.nextChapter.text = (0, _utils.traditionalized)(this.nextChapter.text);\n        this.prePage.text = (0, _utils.traditionalized)(this.prePage.text);\n        this.curPage.text = (0, _utils.traditionalized)(this.curPage.text);\n        this.nextPage.text = (0, _utils.traditionalized)(this.nextPage.text);\n        this.simplified = false;\n        uni.setStorageSync('simplified', false);\n      } else\n      {//切换为简体\n        this.preChapter.text = (0, _utils.simplized)(this.preChapter.text);\n        this.curChapter.text = (0, _utils.simplized)(this.curChapter.text);\n        this.nextChapter.text = (0, _utils.simplized)(this.nextChapter.text);\n        this.prePage.text = (0, _utils.simplized)(this.prePage.text);\n        this.curPage.text = (0, _utils.simplized)(this.curPage.text);\n        this.nextPage.text = (0, _utils.simplized)(this.nextPage.text);\n        this.simplified = true;\n        uni.setStorageSync('simplified', true);\n      }\n    },\n\n\n    /**\r\n       * 改变行距\r\n       **/\n    changeLineHeight: function changeLineHeight(lineHeight) {var _this19 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var progress, page;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:\n                progress = _this19.progress;if (!(\n                lineHeight === _this19.lineHeight)) {_context7.next = 5;break;}return _context7.abrupt(\"return\");case 5:\n\n\n\n                _this19.lineHeight = lineHeight;\n                uni.setStorageSync('lineHeight', _this19.lineHeight);\n                _this19.calcHeight();_context7.next = 10;return (\n                  _this19.calcCurChapter());case 10:if (!(\n                _this19.preChapter.ready && !_this19.preChapter.isCover)) {_context7.next = 14;break;}\n                _this19.preChapter.ready = false;_context7.next = 14;return (\n                  _this19.calcPreChapter());case 14:if (!(\n\n                _this19.nextChapter.ready && !_this19.nextChapter.isEnd)) {_context7.next = 18;break;}\n                _this19.nextChapter.ready = false;_context7.next = 18;return (\n                  _this19.calcNextChapter());case 18:\n\n                page = Math.floor((_this19.curChapter.totalPage - 1) * progress);\n                _this19.goToPage(page);case 20:case \"end\":return _context7.stop();}}}, _callee7);}))();\n\n    },\n\n    /**\r\n       * 改变翻页方式\r\n       **/\n    changeTurnType: function changeTurnType(turnType) {\n      if (turnType === this.turnType) {\n        return;\n      } else\n      {\n        this.showAnimation = false;\n        this.turnType = turnType;\n        uni.setStorageSync('turnType', this.turnType);\n      }\n    },\n\n    /**\r\n       * 改变背景\r\n       **/\n    changeBackground: function changeBackground(background) {\n      if (background === this.background) {\n        return;\n      } else\n      {\n        this.background = background;\n        uni.setStorageSync('background', this.background);\n      }\n    },\n\n    /**\r\n       * 获取目录\r\n       **/\n    getDirectoryList: function getDirectoryList() {var _this20 = this;\n\n      /*****************************************/\n      /**********    根据需要更改    ************/\n      /*****************************************/\n\n\n      return new Promise(function (resolve, reject) {\n        // 模拟网络时间\n        setTimeout(function () {\n          // 生成目录，正常是后端传过来\n          for (var i = 1; i <= 100; i++) {\n            _this20.directoryList.push({\n              chapterId: i, //注意：这个chapterId用于获取章节内容而不是index\n              name: \"\\u7B2C\".concat(i, \"\\u7AE0 \\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\\u8BD5\\u6D4B\") });\n\n          }\n          resolve();\n        }, 1000);\n\n      });\n      /*****************************************/\n      /*****************************************/\n      /*****************************************/\n    },\n\n\n    /**\r\n       * 获取一章数据\r\n       **/\n    getOneChapter: function getOneChapter(chapterId) {var _this21 = this;\n\n      /*****************************************/\n      /**********    根据需要更改    ************/\n      /*****************************************/\n      return new Promise(function (resolve, reject) {\n        // 模拟网络时间\n        setTimeout(function () {\n\n          _this21.tmpChapter.text = \"<p>\".concat(chapterId, \"</p>\") + _this21.text; //模拟数据\n\n          if (!_this21.simplified) {//切换为繁体  注意：这里默认数据库中是简体字\n            _this21.tmpChapter.text = (0, _utils.traditionalized)(_this21.tmpChapter.text);\n          }\n\n          resolve();\n        }, 300);\n      });\n      /*****************************************/\n      /*****************************************/\n      /*****************************************/\n    },\n\n\n    /**\r\n       * 获取三章数据\r\n       **/\n    getThreeChapter: function getThreeChapter(index) {var _this22 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_context8.next = 2;return (\n                  _this22.getOneChapter(_this22.directoryList[index].chapterId));case 2:\n                _this22.curChapter = {\n                  chapterIndex: index,\n                  chapterName: _this22.directoryList[index].name,\n                  text: _this22.tmpChapter.text };if (!(\n\n\n                _this22.curChapter.chapterIndex !== 0)) {_context8.next = 9;break;}_context8.next = 6;return (\n                  _this22.getOneChapter(_this22.directoryList[index - 1].chapterId));case 6:\n                _this22.preChapter = {\n                  chapterIndex: index - 1,\n                  chapterName: _this22.directoryList[index - 1].name,\n                  text: _this22.tmpChapter.text };_context8.next = 10;break;case 9:\n\n\n\n                _this22.preChapter = { ready: true, isCover: true };case 10:if (!(\n\n\n                _this22.curChapter.chapterIndex !== _this22.directoryList.length - 1)) {_context8.next = 16;break;}_context8.next = 13;return (\n                  _this22.getOneChapter(_this22.directoryList[index + 1].chapterId));case 13:\n                _this22.nextChapter = {\n                  chapterIndex: index + 1,\n                  chapterName: _this22.directoryList[index + 1].name,\n                  text: _this22.tmpChapter.text };_context8.next = 17;break;case 16:\n\n\n\n                _this22.nextChapter = { ready: true, isEnd: true };case 17:_context8.next = 19;return (\n\n                  _this22.calcCurChapter());case 19:_context8.next = 21;return (\n                  _this22.calcPreChapter());case 21:_context8.next = 23;return (\n                  _this22.calcNextChapter());case 23:case \"end\":return _context8.stop();}}}, _callee8);}))();\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcmVhZC9yZWFkLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNFFBO0FBQ0E7QUFDQSxpRTtBQUNBO0FBQ0E7QUFDQSxtQ0FEQTtBQUVBLDZCQUZBLEVBREE7O0FBS0EsTUFMQSxrQkFLQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSw0QkFGQSxFQUVBO0FBQ0Esb0JBSEEsRUFHQTtBQUNBLCt6T0FKQTtBQUtBLHVCQUxBLEVBS0E7QUFDQSxvQkFOQSxFQU1BOztBQUVBLGtCQVJBLEVBUUE7QUFDQSxvQkFUQSxFQVNBOztBQUVBO0FBQ0Esb0JBREEsRUFDQTtBQUNBLHdCQUZBO0FBR0EsdUJBSEE7QUFJQSxnQkFKQTtBQUtBLHFCQUxBLEVBWEE7OztBQW1CQTtBQUNBLHdCQURBO0FBRUEsdUJBRkE7QUFHQSxnQkFIQTtBQUlBLHFCQUpBLEVBbkJBOzs7QUEwQkE7QUFDQSxvQkFEQSxFQUNBO0FBQ0Esd0JBRkE7QUFHQSx1QkFIQTtBQUlBLGdCQUpBO0FBS0EscUJBTEEsRUExQkE7OztBQWtDQSxvQkFsQ0EsRUFrQ0E7O0FBRUE7QUFDQSxtQ0FEQSxFQUNBO0FBQ0EsbUJBRkEsQ0FFQTtBQUZBLE9BcENBOztBQXlDQTtBQUNBLG9CQURBLEVBQ0E7QUFDQSx1QkFGQTtBQUdBLGdCQUhBO0FBSUEsbUJBSkE7QUFLQSxvQkFMQTtBQU1BLG1DQU5BLENBTUE7QUFOQSxPQXpDQTs7QUFrREE7QUFDQSxvQkFEQSxFQUNBO0FBQ0EsdUJBRkE7QUFHQSxnQkFIQTtBQUlBLGtCQUpBO0FBS0Esb0JBTEE7QUFNQSxtQ0FOQSxDQU1BO0FBTkEsT0FsREE7O0FBMkRBO0FBQ0Esb0JBREEsRUFDQTtBQUNBLHVCQUZBO0FBR0EsZ0JBSEE7QUFJQSxtQkFKQTtBQUtBLHFCQUxBO0FBTUEsbUNBTkEsQ0FNQTtBQU5BLE9BM0RBOzs7QUFxRUEsaUJBckVBLEVBcUVBO0FBQ0EsZ0JBdEVBLEVBc0VBOztBQUVBLHdCQXhFQSxFQXdFQTtBQUNBLHVCQXpFQSxFQXlFQTtBQUNBLCtCQTFFQSxFQTBFQTtBQUNBLDhCQTNFQSxFQTJFQTs7QUFFQSwwQkE3RUEsRUE2RUE7QUFDQSx1QkE5RUEsRUE4RUE7O0FBRUEsb0JBaEZBLEVBZ0ZBO0FBQ0EscUJBakZBLEVBaUZBO0FBQ0Esc0JBbEZBLEVBa0ZBOztBQUVBLGtCQXBGQSxFQW9GQTtBQUNBLHNCQXJGQSxFQXFGQTtBQUNBLHVCQXRGQSxFQXNGQTtBQUNBLG9CQXZGQSxFQXVGQTtBQUNBLHVCQXhGQSxFQXdGQTtBQUNBLHdCQXpGQSxFQXlGQTs7QUFFQSxvQkEzRkEsRUEyRkE7QUFDQSxlQTVGQSxFQTRGQTtBQUNBLGNBN0ZBLEVBNkZBOztBQUVBLG9CQS9GQSxFQStGQTtBQUNBLGVBaEdBLEVBZ0dBOztBQUVBLHFCQWxHQSxFQWtHQTtBQUNBLHFCQW5HQSxFQW1HQTtBQUNBLHdCQXBHQSxFQW9HQTtBQUNBLDBCQXJHQSxFQXFHQTtBQUNBLHNCQXRHQSxFQXNHQTs7QUFFQSxxQkF4R0EsRUF3R0E7QUFDQSxxQkF6R0EsRUF5R0E7QUFDQSxpQkExR0EsRUEwR0E7QUFDQSxrQkEzR0EsRUEyR0E7QUFDQSxvQkE1R0EsRUE0R0E7QUFDQSxvQkE3R0EsRUE2R0E7QUFDQSxvQkE5R0EsRUE4R0E7QUFDQSxpQ0EvR0EsRUErR0E7O0FBRUEsd0JBakhBLEVBaUhBO0FBQ0EsNEJBbEhBLENBa0hBO0FBbEhBOztBQXFIQSxHQTNIQTtBQTRIQSxRQTVIQSxvQkE0SEE7QUFDQTtBQUNBLEdBOUhBO0FBK0hBLFNBL0hBLHFCQStIQTtBQUNBO0FBQ0EsR0FqSUE7QUFrSUE7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQU5BLEVBbElBOztBQTBJQTs7QUFFQTs7O0FBR0EsUUFMQSxrQkFLQTtBQUNBO0FBQ0EsS0FQQTs7QUFTQTs7O0FBR0EsaUJBWkEsMkJBWUE7O0FBRUEsNkJBRkEsQ0FFQSxXQUZBLHlCQUVBLFdBRkEsQ0FFQSxZQUZBLHlCQUVBLFlBRkEsQ0FFQSxlQUZBLHlCQUVBLGVBRkEsQ0FFQSxRQUZBLHlCQUVBLFFBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQSxFQUdBLElBSEE7O0FBS0EsT0FaQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFEQSxDQUNBO0FBQ0Esa0VBRkEsQ0FFQTtBQUNBO0FBQ0EsV0FQQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxFQUdBLEtBSEE7O0FBS0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0F4RkE7O0FBMEZBOzs7QUFHQSxZQTdGQSxzQkE2RkE7QUFDQTtBQUNBLDhCQURBOztBQUdBO0FBQ0EsbUNBREE7QUFFQSxtQ0FGQTtBQUdBLG9DQUhBLFVBSkE7O0FBU0EscUNBVEE7QUFVQSwyQ0FWQTtBQVdBLG9FQVhBO0FBWUEsb0JBWkEsR0FZQSxzRUFaQTtBQWFBO0FBQ0Esa0NBZEE7O0FBZ0JBLEtBN0dBOztBQStHQTs7O0FBR0EsY0FsSEEsd0JBa0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBUEEsRUFPQSxJQVBBO0FBUUEsV0FWQTs7QUFZQSxTQWJBO0FBY0E7O0FBRUEsS0F6SUE7O0FBMklBOzs7QUFHQSxrQkE5SUEsNEJBOElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FIQSxDQUdBO0FBQ0E7QUFDQSxXQUxBLEVBS0EsSUFMQTtBQU1BLFNBUkE7O0FBVUEsT0FYQTtBQVlBLEtBNUpBOztBQThKQTs7O0FBR0Esa0JBaktBLDRCQWlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBSEEsQ0FHQTtBQUNBO0FBQ0EsZ0NBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQURBO0FBRUEsMERBRkE7QUFHQSw0Q0FIQTtBQUlBLHdEQUpBO0FBS0Esc0RBTEE7QUFNQTtBQUNBLG1DQURBO0FBRUEsbUNBRkE7QUFHQSxvQ0FIQSxTQU5BOzs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0E1QkEsRUE0QkEsSUE1QkE7QUE2QkEsU0EvQkE7O0FBaUNBLE9BbENBOztBQW9DQSxLQXZNQTs7QUF5TUE7OztBQUdBLG1CQTVNQSw2QkE0TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUhBLENBR0E7QUFDQTtBQUNBLGdDQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FEQTtBQUVBLDJEQUZBO0FBR0EsNkNBSEE7QUFJQSwwQkFKQTtBQUtBLHVEQUxBO0FBTUE7O0FBRUEsa0NBRkE7QUFHQSxtQ0FIQSxTQU5BOzs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBN0JBLEVBNkJBLElBN0JBOztBQStCQSxTQWpDQTs7QUFtQ0EsT0FwQ0E7O0FBc0NBLEtBcFBBOztBQXNQQTs7O0FBR0EsbUJBelBBLDJCQXlQQSxDQXpQQSxFQXlQQTtBQUNBLGlDQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBL1BBOztBQWlRQTs7O0FBR0Esa0JBcFFBLDBCQW9RQSxDQXBRQSxFQW9RQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxnQkFGQTs7O0FBS0E7O0FBRUEsbUNBRkE7OztBQUtBLFNBWEE7QUFZQTtBQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLGdCQUZBOzs7QUFLQTs7QUFFQSxtQ0FGQTs7O0FBS0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUEsd0JBRkE7O0FBSUE7QUFDQSxPQXZDQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGdCQUhBOztBQUtBOzs7QUFHQSxvQ0FIQTs7QUFLQSxTQVhBO0FBWUE7QUFDQTtBQUNBOzs7QUFHQSxnQkFIQTs7QUFLQTs7O0FBR0Esb0NBSEE7O0FBS0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUEsd0JBRkE7OztBQUtBO0FBQ0E7OztBQUdBLEtBelZBOztBQTJWQTs7O0FBR0EsaUJBOVZBLHlCQThWQSxDQTlWQSxFQThWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSx3QkFGQTs7QUFJQSxTQUxBO0FBTUE7QUFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSwyQkFGQTtBQUdBLDRCQUhBOztBQUtBOzs7OztBQUtBLFNBWkE7QUFhQTtBQUNBO0FBQ0E7QUFDQSxPQXZCQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLDJCQUZBO0FBR0EsNEJBSEE7O0FBS0E7Ozs7O0FBS0E7QUFDQSxTQVpBO0FBYUE7QUFDQTs7Ozs7QUFLQTs7QUFFQSwwQkFGQTtBQUdBLDJCQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBOVpBOztBQWdhQTs7O0FBR0EsY0FuYUEsc0JBbWFBLENBbmFBLEVBbWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0EvYUE7O0FBaWJBOzs7QUFHQSxhQXBiQSxxQkFvYkEsQ0FwYkEsRUFvYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsb0NBRkE7OztBQUtBO0FBQ0EsZ0JBREE7QUFFQSxnQkFGQTs7O0FBS0E7O0FBRUEsbUNBRkE7OztBQUtBLFNBbkJBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQURBO0FBRUEsNEJBRkE7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQSxhQWZBO0FBZ0JBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLHdDQUZBOzs7QUFLQTtBQUNBLG9CQURBO0FBRUEsb0JBRkE7OztBQUtBOztBQUVBLHVDQUZBOzs7QUFLQTtBQUNBLFdBbENBO0FBbUNBO0FBQ0Esb0NBREEsQ0FDQTtBQUNBO0FBQ0EsOEJBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQURBO0FBRUEsc0NBRkE7OztBQUtBOztBQUVBLGtCQUZBOzs7QUFLQSxXQVhBO0FBWUE7QUFDQTtBQUNBLHNDQURBO0FBRUEsc0NBRkE7OztBQUtBOztBQUVBLGtCQUZBOzs7QUFLQTs7QUFFQSxxQ0FGQTs7O0FBS0E7QUFDQSxTQTlCQTtBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBREE7QUFFQSx3Q0FGQTs7O0FBS0E7O0FBRUEsb0JBRkE7OztBQUtBLGFBWEE7QUFZQTtBQUNBO0FBQ0Esd0NBREE7QUFFQSx3Q0FGQTs7O0FBS0E7O0FBRUEsb0JBRkE7OztBQUtBOztBQUVBLHVDQUZBOzs7QUFLQTtBQUNBLFdBOUJBO0FBK0JBO0FBQ0EsbUNBREEsQ0FDQTtBQUNBO0FBQ0EsOEJBREE7O0FBR0E7O0FBRUE7QUFDQSxPQS9JQTtBQWdKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLHFDQUhBOztBQUtBOzs7QUFHQSxnQkFIQTs7QUFLQTs7O0FBR0Esb0NBSEE7O0FBS0EsU0FuQkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLDRCQUZBOztBQUlBO0FBQ0E7QUFDQTs7QUFFQSxhQWJBO0FBY0E7QUFDQTs7O0FBR0EseUNBSEE7O0FBS0E7OztBQUdBLG9CQUhBOztBQUtBOzs7QUFHQSx3Q0FIQTs7QUFLQTtBQUNBLFdBaENBO0FBaUNBO0FBQ0Esb0NBREEsQ0FDQTtBQUNBO0FBQ0EsOEJBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsdUNBSEE7O0FBS0E7OztBQUdBLGtCQUhBOztBQUtBLFdBWEE7QUFZQTtBQUNBOzs7QUFHQSx1Q0FIQTs7QUFLQTs7O0FBR0Esa0JBSEE7O0FBS0E7OztBQUdBLHNDQUhBOztBQUtBO0FBQ0EsU0E5QkE7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EseUNBSEE7O0FBS0E7OztBQUdBLG9CQUhBOztBQUtBLGFBWEE7QUFZQTtBQUNBOzs7QUFHQSx5Q0FIQTs7QUFLQTs7O0FBR0Esb0JBSEE7O0FBS0E7OztBQUdBLHdDQUhBOztBQUtBO0FBQ0EsV0E5QkE7QUErQkE7QUFDQSxtQ0FEQSxDQUNBO0FBQ0E7QUFDQSw4QkFEQTs7QUFHQTs7QUFFQTtBQUNBOztBQUVBLEtBcnRCQTs7QUF1dEJBOzs7QUFHQSxZQTF0QkEsb0JBMHRCQSxDQTF0QkEsRUEwdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkE7QUFHQTtBQUNBLG1DQURBLENBQ0E7QUFDQTtBQUNBLDhCQURBOztBQUdBO0FBQ0EsU0FWQTtBQVdBOztBQUVBO0FBQ0E7QUFDQSxXQUZBO0FBR0E7QUFDQSxvQ0FEQSxDQUNBO0FBQ0E7QUFDQSw4QkFEQTs7QUFHQTtBQUNBLFNBWEE7QUFZQTtBQUNBO0FBQ0E7QUFDQSxPQTNCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsMkJBRkE7QUFHQSw0QkFIQTs7QUFLQTs7Ozs7QUFLQTs7QUFFQSwwQkFGQTtBQUdBLDJCQUhBOztBQUtBLFNBaEJBO0FBaUJBO0FBQ0E7QUFDQSxTQUZBO0FBR0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsMkJBRkE7QUFHQSw0QkFIQTs7QUFLQTs7Ozs7QUFLQTs7QUFFQSwwQkFGQTtBQUdBLDJCQUhBOztBQUtBO0FBQ0EsMkJBREE7QUFFQSwyQkFGQTtBQUdBLDRCQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBbHpCQTs7OztBQXN6QkE7OztBQUdBLFlBenpCQSxzQkF5ekJBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxHQUZBO0FBR0EsS0FqMEJBOztBQW0wQkE7OztBQUdBLGFBdDBCQSx1QkFzMEJBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsR0FGQTtBQUdBLEtBaDFCQTs7QUFrMUJBOzs7QUFHQSxlQXIxQkEseUJBcTFCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsR0FGQTtBQUdBLEtBMzFCQTs7QUE2MUJBOzs7QUFHQSxpQkFoMkJBLDJCQWcyQkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7QUFHQSxLQXgyQkE7O0FBMDJCQTs7O0FBR0EsaUJBNzJCQSwyQkE2MkJBO0FBQ0E7QUFDQSxLQS8yQkE7O0FBaTNCQTs7O0FBR0EsZUFwM0JBLHVCQW8zQkEsS0FwM0JBLEVBbzNCQTs7QUFFQTtBQUNBO0FBQ0EsOEJBREEsSUFIQTs7QUFNQSxnREFOQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBWEE7QUFZQSxLQWg0QkE7O0FBazRCQTs7O0FBR0EsZUFyNEJBLHVCQXE0QkEsS0FyNEJBLEVBcTRCQTtBQUNBO0FBQ0EsS0F2NEJBOztBQXk0QkE7OztBQUdBLGFBNTRCQSx1QkE0NEJBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQSx3QkFGQTtBQUdBLHlCQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUEsc0JBRkE7QUFHQSx1QkFIQTs7QUFLQTs7QUFFQSwwQkFGQTtBQUdBLDJCQUhBOzs7QUFNQTtBQUNBO0FBQ0EsNENBREE7QUFFQSxzQkFGQTs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQXg3QkE7OztBQTI3QkE7OztBQUdBLGNBOTdCQSx3QkE4N0JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLHNCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSwyQkFGQTtBQUdBLDRCQUhBOztBQUtBO0FBQ0EsdUJBREE7QUFFQSx1QkFGQTtBQUdBLHdCQUhBOztBQUtBOzs7Ozs7QUFNQTtBQUNBO0FBQ0EsNkNBREE7QUFFQSxzQkFGQTs7O0FBS0E7QUFDQTs7QUFFQTs7QUFFQSxPQUZBO0FBR0EsS0ExK0JBOztBQTQrQkE7OztBQUdBLGlCQS8rQkEseUJBKytCQSxJQS8rQkEsRUErK0JBO0FBQ0EsK0JBREE7QUFFQTtBQUNBLDRFQUhBO0FBSUEsb0ZBSkEsZ0NBSUE7QUFDQTtBQUNBLDhCQURBO0FBRUEsbUVBRkE7QUFHQSw4RkFIQSxHQUxBOztBQVVBLDZHQVZBO0FBV0E7QUFDQSwwQ0FaQTs7O0FBZUEsbUVBZkE7OztBQWtCQSw4QkFsQkE7QUFtQkE7QUFDQSwyRUFwQkE7QUFxQkEscURBckJBO0FBc0JBO0FBQ0EsOEJBREE7QUFFQSxtRUFGQTtBQUdBLDhGQUhBLEdBdEJBOztBQTJCQSw2R0EzQkE7QUE0QkE7QUFDQSx5Q0E3QkE7OztBQWdDQSxvRUFoQ0E7OzsyRkFBQTtBQW9DQSxLQW5oQ0E7OztBQXNoQ0E7OztBQUdBLGlCQXpoQ0EsMkJBeWhDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLHNCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUE7QUFDQTtBQUNBLDBCQURBOztBQUdBOzs7QUFHQSxLQS9pQ0E7O0FBaWpDQTs7O0FBR0EsZ0JBcGpDQSx3QkFvakNBLElBcGpDQSxFQW9qQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSxzQkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQTtBQUlBO0FBQ0E7QUFDQSwwQkFEQTs7OztBQUtBLEtBemtDQTs7O0FBNGtDQTs7O0FBR0EsWUEva0NBLG9CQStrQ0EsSUEva0NBLEVBK2tDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQURBO0FBRUEsZ0RBRkE7QUFHQSxrQ0FIQTtBQUlBLGlDQUpBO0FBS0EsNENBTEE7QUFNQSxrREFOQTs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSx5QkFGQTtBQUdBO0FBQ0EsNkJBREE7QUFFQSw2QkFGQTtBQUdBLDhCQUhBLFNBSEE7OztBQVNBLFNBVkE7QUFXQTtBQUNBO0FBQ0Esd0NBREE7QUFFQSxvREFGQTtBQUdBLHNDQUhBO0FBSUEsa0RBSkE7QUFLQSxnREFMQTtBQU1BO0FBQ0EsNkJBREE7QUFFQSw2QkFGQTtBQUdBLDhCQUhBLFNBTkE7OztBQVlBO0FBQ0EsT0ExQkE7QUEyQkE7QUFDQTtBQUNBLHFCQURBO0FBRUEsa0RBRkE7QUFHQSxvQ0FIQTtBQUlBLHVDQUpBO0FBS0EsOENBTEE7QUFNQTtBQUNBLDJCQURBO0FBRUEsMkJBRkE7QUFHQSw0QkFIQSxTQU5BOzs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUEsdUJBRkE7QUFHQTs7QUFFQSw0QkFGQTtBQUdBLDZCQUhBLFNBSEE7OztBQVNBLFNBVkE7QUFXQTtBQUNBO0FBQ0EseUNBREE7QUFFQSxxREFGQTtBQUdBLHVDQUhBO0FBSUEsc0JBSkE7QUFLQSxpREFMQTtBQU1BOztBQUVBLDRCQUZBO0FBR0EsNkJBSEEsU0FOQTs7O0FBWUE7QUFDQSxPQTFCQTtBQTJCQTtBQUNBO0FBQ0EscUJBREE7QUFFQSxrREFGQTtBQUdBLG9DQUhBO0FBSUEsdUNBSkE7QUFLQSw4Q0FMQTtBQU1BOztBQUVBLDBCQUZBO0FBR0EsMkJBSEEsU0FOQTs7O0FBWUE7QUFDQTs7QUFFQSxPQUZBO0FBR0EsS0FyckNBOztBQXVyQ0E7OztBQUdBLGVBMXJDQSx1QkEwckNBLEtBMXJDQSxFQTByQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFEQSxJQUhBOztBQU1BLGdEQU5BO0FBT0E7O2lFQVBBO0FBVUEsS0Fwc0NBOzs7QUF1c0NBOzs7QUFHQSxXQTFzQ0EscUJBMHNDQTtBQUNBLHdCQURBLEdBQ0EsZ0JBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FKQTtBQUtBLDBDQUxBO0FBTUEsdUVBTkE7QUFPQSxpREFQQTtBQVFBLDBDQVJBOztBQVVBLHVFQVZBO0FBV0Esa0RBWEE7QUFZQSwyQ0FaQTs7b0JBQUEsRyx5REFBQTtBQWVBLHVDQWZBOzs7QUFrQkEsS0E1dENBOztBQTh0Q0E7OztBQUdBLGFBanVDQSx1QkFpdUNBO0FBQ0Esd0JBREEsR0FDQSxnQkFEQTtBQUVBO0FBQ0E7QUFDQSxxQ0FKQTtBQUtBLDBDQUxBO0FBTUEsdUVBTkE7QUFPQSxpREFQQTtBQVFBLDBDQVJBOztBQVVBLHVFQVZBO0FBV0Esa0RBWEE7QUFZQSwyQ0FaQTs7b0JBQUEsRyx5REFBQTtBQWVBLHVDQWZBO0FBZ0JBLEtBanZDQTs7QUFtdkNBOzs7QUFHQSxjQXR2Q0Esc0JBc3ZDQSxJQXR2Q0EsRUFzdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FUQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEtBM3dDQTs7O0FBOHdDQTs7O0FBR0Esb0JBanhDQSw0QkFpeENBLFVBanhDQSxFQWl4Q0E7QUFDQSx3QkFEQSxHQUNBLGdCQURBO0FBRUEsaURBRkE7Ozs7QUFNQTtBQUNBO0FBQ0EscUNBUkE7QUFTQSwwQ0FUQTtBQVVBLHVFQVZBO0FBV0EsaURBWEE7QUFZQSwwQ0FaQTs7QUFjQSx1RUFkQTtBQWVBLGtEQWZBO0FBZ0JBLDJDQWhCQTs7QUFrQkEsb0JBbEJBLEdBa0JBLHlEQWxCQTt1Q0FBQTs7QUFxQkEsS0F0eUNBOztBQXd5Q0E7OztBQUdBLGtCQTN5Q0EsMEJBMnlDQSxRQTN5Q0EsRUEyeUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQXB6Q0E7O0FBc3pDQTs7O0FBR0Esb0JBenpDQSw0QkF5ekNBLFVBenpDQSxFQXl6Q0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQSxLQWowQ0E7O0FBbTBDQTs7O0FBR0Esb0JBdDBDQSw4QkFzMENBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQURBLEVBQ0E7QUFDQSx1R0FGQTs7O0FBS0E7QUFDQSxTQVRBLEVBU0EsSUFUQTs7QUFXQSxPQWJBO0FBY0E7OztBQUdBLEtBOTFDQTs7O0FBaTJDQTs7O0FBR0EsaUJBcDJDQSx5QkFvMkNBLFNBcDJDQSxFQW8yQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxtRixDQUFBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0EsUyxFQUFBLEc7QUFDQSxPO0FBQ0E7OztBQUdBLEtBejNDQTs7O0FBNDNDQTs7O0FBR0EsbUJBLzNDQSwyQkErM0NBLEtBLzNDQSxFQSszQ0E7QUFDQSwrRUFEQTtBQUVBO0FBQ0EscUNBREE7Z0VBQUE7QUFHQSwrQ0FIQSxHQUZBOzs7QUFRQSxxREFSQTtBQVNBLG1GQVRBO0FBVUE7QUFDQSx5Q0FEQTtBQUVBLG9FQUZBO0FBR0EsK0NBSEEsR0FWQTs7OztBQWlCQSxvRUFqQkE7OztBQW9CQSxvRkFwQkE7QUFxQkEsbUZBckJBO0FBc0JBO0FBQ0EseUNBREE7QUFFQSxvRUFGQTtBQUdBLCtDQUhBLEdBdEJBOzs7O0FBNkJBLG1FQTdCQTs7QUErQkEsMENBL0JBOzBDQUFBOzJDQUFBO0FBa0NBLEtBajZDQSxFQTFJQSxFIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjwhLS0g5pCc4oCY5qC55o2u6ZyA6KaB5pu05pS54oCZ77yM6ZyA6KaB5qC55o2u5a6e6ZmF6aG555uu5pu05pS555qE5bey57uP5YiX5Ye65p2l5LqGIC0tPlxyXG48IS0tIOmHjeimgeS6i+mhue+8mueUseS6jumYheivu+mhteaIquWPluaVtOihjOeahOmcgOimge+8jOivt+ehruS/neaWh+acrOagvOW8j+WSjOacrOaPkuS7tuS4reeahHRleHTlj5jph4/miYDnpLrkuIDoh7TvvIzljbPvvJrvvIHvvIHvvIHmr4/kuIDooYznmoTpq5jluqbopoHkuIDoh7TvvIHvvIHvvIFcclxuXHTlpoLmnpzopoHliqDlhoXlrrnvvIzkvovlpoLmr4/kuIDnq6DlvIDlpLTliqDkuIrnq6DoioLlkI06JzxoMT7nq6DoioLlkI08L2gxPics6K+356Gu5L+d5omA5Yqg55qE5YaF5a655piv5Y2V6KGM6auY5bqm55qE5pW05pWw5YCN77yB77yBXHJcbiAtLT5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBzdHlsZT1cImhlaWdodDogMTAwJTtcIj5cclxuXHRcdFxyXG5cdFx0PCEtLSDmk43kvZzlsYIg5bemMS8z57+75LiK6aG177yM5LitMS8z5ZG85Ye66I+c5Y2V5qCP77yM5Y+zMS8z57+75LiL6aG1IC0tPlxyXG5cdFx0PCEtLSDmk43kvZzlsYIx77yM5pON5L2c5YaF5a6557+76aG1IC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIiA6c3R5bGU9XCJ7ekluZGV4OiAyMDB9XCIgQHRvdWNoc3RhcnQ9XCJ0b3VjaFN0YXJ0XCIgQHRvdWNoZW5kPVwidG91Y2hFbmRcIiBAdG91Y2htb3ZlPVwidG91Y2hNb3ZlXCI+PC92aWV3PlxyXG5cdFx0PCEtLSDmk43kvZzlsYIy77yM5pON5L2c5bCB6Z2iIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIiA6c3R5bGU9XCJ7ekluZGV4OiAyMDJ9XCIgIEB0b3VjaHN0YXJ0PVwiY292ZXJUb3VjaFN0YXJ0XCIgQHRvdWNoZW5kPVwiY292ZXJUb3VjaEVuZFwiIEB0b3VjaG1vdmU9XCJjb3ZlclRvdWNoTW92ZVwiIHYtaWY9XCJjb3Zlci5zaG93XCI+PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8IS0tIOS7heeUqOS6juiuoeeulyAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY29udGFpbmVyIGhpZGRlblwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNoYXB0ZXJcIj5cclxuXHRcdFx0XHTnq6DoioLlkI1cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBpZD1cImNvbnRlbnRcIiBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvb2staW5uZXJcIiBpZD1cImJvb2tJbm5lclwiIHYtaHRtbD1cImNhbGNUZXh0XCJcclxuXHRcdFx0XHRcdDpzdHlsZT1cIntmb250U2l6ZTogYCR7Zm9udFNpemV9cHhgLCBsaW5lSGVpZ2h0OiBgJHtsaW5lSGVpZ2h0KmZvbnRTaXplfXB4YH1cIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJib3R0b20tYmFyXCI+XHJcblx0XHRcdFx05pi+56S655S16YeP44CB6aG156CBXHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PCEtLSAqKioqKioqKioqKioqKioqKioqKioqKioqKiAtLT5cclxuXHRcdDwhLS0gICAgIOagueaNrumcgOimgeabtOaUue+8iOWwgemdou+8iSAgICAgLS0+XHJcblx0XHQ8IS0tICoqKioqKioqKioqKioqKioqKioqKioqKioqIC0tPlxyXG5cdFx0PCEtLSDlsIHpnaIgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvdmVyIGNvbnRhaW5lclwiIDpjbGFzcz1cIntjb250YWluZXIwOiBiYWNrZ3JvdW5kID09PSAxLCBjb250YWluZXIxOiBiYWNrZ3JvdW5kID09PSAyfVwiXHJcblx0XHRcdDpzdHlsZT1cInt6SW5kZXg6IDIwMSwgdHJhbnNmb3JtOiBgdHJhbnNsYXRlJHtjb3Zlci5wYWdlVHJhbnNsYXRlW3R1cm5UeXBlXX1gLCB0cmFuc2l0aW9uOiBgdHJhbnNmb3JtICR7c2hvd0FuaW1hdGlvbj90dXJuUGFnZVRpbWU6MH1zYCxcclxuXHRcdFx0Ym94U2hhZG93OnNob3dTaGFkb3cmJnR1cm5UeXBlPT09MD8nMCAwIDEwcHggMCByZ2JhKDAsMCwwLC40KSc6Jyd9XCJcclxuXHRcdD5cclxuXHRcdFx0PGltYWdlPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8L2ltYWdlPlxyXG5cdFx0XHQ8dmlldz5cclxuXHRcdFx0XHTmiJHmmK/lsIHpnaJcclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSAqKioqKioqKioqKioqKioqKioqKioqKioqKiAtLT5cclxuXHRcdDwhLS0qKioqKioqKioqKioqKioqKioqKioqKioqKioqLS0+XHJcblx0XHQ8IS0tICoqKioqKioqKioqKioqKioqKioqKioqKioqIC0tPlxyXG5cdFx0XHJcblx0XHRcclxuXHRcdDwhLS0g6ZiF6K+76aG1IC0tPlxyXG5cdFx0PCEtLSDkuIrkuIDpobUgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbnRhaW5lclwiIDpjbGFzcz1cIntjb250YWluZXIwOiBiYWNrZ3JvdW5kID09PSAxLCBjb250YWluZXIxOiBiYWNrZ3JvdW5kID09PSAyfVwiXHJcblx0XHRcdDpzdHlsZT1cInt6SW5kZXg6IDEwMiwgdHJhbnNmb3JtOiBgdHJhbnNsYXRlJHtwcmVQYWdlLnBhZ2VUcmFuc2xhdGVbdHVyblR5cGVdfWAsIHRyYW5zaXRpb246IGB0cmFuc2Zvcm0gJHtzaG93QW5pbWF0aW9uP3R1cm5QYWdlVGltZTowfXNgLFxyXG5cdFx0XHRib3hTaGFkb3c6c2hvd1NoYWRvdz8nMCAwIDEwcHggMCByZ2JhKDAsMCwwLC40KSc6Jyd9XCJcclxuXHRcdD5cclxuXHRcdFx0PCEtLSDnq6DoioLlkI0gLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhcHRlclwiPlxyXG5cdFx0XHRcdHt7cHJlUGFnZS5jaGFwdGVyTmFtZX19XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHJcblx0XHRcdDwhLS0g5aSW5bGCY2xhc3M9XCJjb250ZW50XCLnlKjkuo7orqHnrpfpmIXor7vpg6jliIbnmoTpq5jluqYgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiXHJcblx0XHRcdFx0OnN0eWxlPVwie2ZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsY29sb3I6IGAke2NvbG9yTGlzdFtiYWNrZ3JvdW5kIC0gMV19YH1cIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PCEtLSDlhoXlsYJjbGFzcz1cImlubmVyLWJveFwi5Yip55SoaW5uZXJIZWlnaHTlsIblhoXlrrnmiKrlj5boh7PmlbTooYzvvIzpmLLmraLmloflrZfkuI3lrozmlbTnmoTmg4XlhrXlh7rnjrAgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbm5lci1ib3hcIiA6c3R5bGU9XCJ7aGVpZ2h0OiBgJHtpbm5lckhlaWdodH1weGB9XCI+XHJcblx0XHRcdFx0XHQ8IS0tIOacgOmHjOWxgmNsYXNzPVwiYm9vay1pbm5lclwi55qE55So5LqO6I635Y+W5paH5pys5oC76auY5bqm77yM6K6h566X5oC76aG15pWw77yM5rOo5oSP5LiN5Y+v5Lulb3ZlcmZsb3c6aGlkZGVuIC0tPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJib29rLWlubmVyXCIgdi1odG1sPVwicHJlUGFnZS50ZXh0XCJcclxuXHRcdFx0XHRcdFx0OnN0eWxlPVwie2ZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsIGxpbmVIZWlnaHQ6IGAke2xpbmVIZWlnaHQqZm9udFNpemV9cHhgLFxyXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0ke3ByZVBhZ2UucGFnZU51bSppbm5lckhlaWdodH1weClgfVwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tLWJhclwiPlxyXG5cdFx0XHRcdDwhLS0g5pe26Ze0IC0tPlxyXG5cdFx0XHRcdDx2aWV3PlxyXG5cdFx0XHRcdFx0e3tzeXN0ZW1UaW1lU3RyfX1cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDpobXnoIEgLS0+XHJcblx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHR7e3ByZVBhZ2UucGFnZU51bSArIDF9fS97e3ByZVBhZ2UudG90YWxQYWdlfX1cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDnlLXph48gLS0+XHJcblx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHQ8YmF0dGVyeSA6bGV2ZWw9XCJiYXR0ZXJ5TGV2ZWxcIiA6Y2hhcmdpbmc9XCJiYXR0ZXJ5U3RhdGUgPT09IDJcIj48L2JhdHRlcnk+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8IS0tIOacrOmhtSAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY29udGFpbmVyXCIgOmNsYXNzPVwie2NvbnRhaW5lcjA6IGJhY2tncm91bmQgPT09IDEsIGNvbnRhaW5lcjE6IGJhY2tncm91bmQgPT09IDJ9XCJcclxuXHRcdFx0OnN0eWxlPVwie3pJbmRleDogMTAxLCB0cmFuc2Zvcm06IGB0cmFuc2xhdGUke2N1clBhZ2UucGFnZVRyYW5zbGF0ZVt0dXJuVHlwZV19YCwgdHJhbnNpdGlvbjogYHRyYW5zZm9ybSAke3Nob3dBbmltYXRpb24/dHVyblBhZ2VUaW1lOjB9c2AsXHJcblx0XHRcdGJveFNoYWRvdzpzaG93U2hhZG93JiZ0dXJuVHlwZT09PTA/JzAgMCAxMHB4IDAgcmdiYSgwLDAsMCwuNCknOicnfVwiXHJcblx0XHQ+XHJcblx0XHRcdDwhLS0g56ug6IqC5ZCNIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNoYXB0ZXJcIj5cclxuXHRcdFx0XHR7e2N1clBhZ2UuY2hhcHRlck5hbWV9fVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiXHJcblx0XHRcdFx0OnN0eWxlPVwie2ZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsY29sb3I6IGAke2NvbG9yTGlzdFtiYWNrZ3JvdW5kIC0gMV19YH1cIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbm5lci1ib3hcIiA6c3R5bGU9XCJ7aGVpZ2h0OiBgJHtpbm5lckhlaWdodH1weGB9XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvb2staW5uZXJcIiB2LWh0bWw9XCJjdXJQYWdlLnRleHRcIlxyXG5cdFx0XHRcdFx0XHQ6c3R5bGU9XCJ7Zm9udFNpemU6IGAke2ZvbnRTaXplfXB4YCwgbGluZUhlaWdodDogYCR7bGluZUhlaWdodCpmb250U2l6ZX1weGAsXHJcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLSR7Y3VyUGFnZS5wYWdlTnVtKmlubmVySGVpZ2h0fXB4KWB9XCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJib3R0b20tYmFyXCI+XHJcblx0XHRcdFx0PCEtLSDml7bpl7QgLS0+XHJcblx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHR7e3N5c3RlbVRpbWVTdHJ9fVxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOmhteeggSAtLT5cclxuXHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdHt7Y3VyUGFnZS5wYWdlTnVtICsgMX19L3t7Y3VyUGFnZS50b3RhbFBhZ2V9fVxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOeUtemHjyAtLT5cclxuXHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdDxiYXR0ZXJ5IDpsZXZlbD1cImJhdHRlcnlMZXZlbFwiIDpjaGFyZ2luZz1cImJhdHRlcnlTdGF0ZSA9PT0gMlwiPjwvYmF0dGVyeT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDwhLS0g5LiL5LiA6aG1IC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjb250YWluZXJcIiA6Y2xhc3M9XCJ7Y29udGFpbmVyMDogYmFja2dyb3VuZCA9PT0gMSwgY29udGFpbmVyMTogYmFja2dyb3VuZCA9PT0gMn1cIlxyXG5cdFx0XHQ6c3R5bGU9XCJ7ekluZGV4OiAxMDAsIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSR7bmV4dFBhZ2UucGFnZVRyYW5zbGF0ZVt0dXJuVHlwZV19YCx0cmFuc2l0aW9uOiBgdHJhbnNmb3JtICR7c2hvd0FuaW1hdGlvbj90dXJuUGFnZVRpbWU6MH1zYCxcclxuXHRcdFx0Ym94U2hhZG93OnNob3dTaGFkb3cmJnR1cm5UeXBlPT09MD8nMCAwIDEwcHggMCByZ2JhKDAsMCwwLC40KSc6Jyd9XCJcclxuXHRcdD5cclxuXHRcdFx0PCEtLSDnq6DoioLlkI0gLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhcHRlclwiPlxyXG5cdFx0XHRcdHt7bmV4dFBhZ2UuY2hhcHRlck5hbWV9fVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiXHJcblx0XHRcdFx0OnN0eWxlPVwie2ZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsY29sb3I6IGAke2NvbG9yTGlzdFtiYWNrZ3JvdW5kIC0gMV19YH1cIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbm5lci1ib3hcIiA6c3R5bGU9XCJ7aGVpZ2h0OiBgJHtpbm5lckhlaWdodH1weGB9XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvb2staW5uZXJcIiB2LWh0bWw9XCJuZXh0UGFnZS50ZXh0XCJcclxuXHRcdFx0XHRcdFx0OnN0eWxlPVwie2ZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsIGxpbmVIZWlnaHQ6IGAke2xpbmVIZWlnaHQqZm9udFNpemV9cHhgLFxyXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0ke25leHRQYWdlLnBhZ2VOdW0qaW5uZXJIZWlnaHR9cHgpYH1cIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJvdHRvbS1iYXJcIj5cclxuXHRcdFx0XHQ8IS0tIOaXtumXtCAtLT5cclxuXHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdHt7c3lzdGVtVGltZVN0cn19XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0g6aG156CBIC0tPlxyXG5cdFx0XHRcdDx2aWV3PlxyXG5cdFx0XHRcdFx0e3tuZXh0UGFnZS5wYWdlTnVtICsgMX19L3t7bmV4dFBhZ2UudG90YWxQYWdlfX1cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDnlLXph48gLS0+XHJcblx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHQ8YmF0dGVyeSA6bGV2ZWw9XCJiYXR0ZXJ5TGV2ZWxcIiA6Y2hhcmdpbmc9XCJiYXR0ZXJ5U3RhdGUgPT09IDJcIj48L2JhdHRlcnk+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8IS0tIOiPnOWNleWxgiAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwibWVudVwiIDpzdHlsZT1cIntoZWlnaHQ6IGAxMDAlYCwgd2lkdGg6IGAke3dpbmRvd1dpZHRofXB4YCxiYWNrZ3JvdW5kOiBkaXJlY3RvcnlTaG93PydyZ2JhKDAsIDAsIDAsIC41KSc6Jyd9XCIgXHJcblx0XHR2LWlmPVwibWVudVNob3dcIiBAdG91Y2hlbmQ9XCJjbG9zZU1lbnVcIj5cclxuXHRcdFx0PCEtLSDoj5zljZXlsYLljIXlkKvov5Tlm57mjInpkq7nmoTkuIrljYrpg6jliIYgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibWVudS10b3BcIiA6c3R5bGU9XCJ7aGVpZ2h0OiBgJHtzdGF0dXNCYXJIZWlnaHQgKyA0MH1weGAsIHRvcDogaXRlbVNob3cgPyAwIDogYC0xMDAlYH1cIiBAdG91Y2hlbmQuc3RvcD5cclxuXHRcdFx0XHQ8dmlldyA6c3R5bGU9XCJ7aGVpZ2h0OiBgJHtzdGF0dXNCYXJIZWlnaHR9cHhgfVwiPjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnQgYmFja1wiIEBjbGljaz1cImJhY2tcIj4mI3hlNzFhOzwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSDoj5zljZXkuLvkvZMgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibWVudS1ib3R0b21cIiA6c3R5bGU9XCJ7Ym90dG9tOiBpdGVtU2hvdyA/IDAgOiAnLTEwMCUnfVwiIEB0b3VjaGVuZC5zdG9wPlxyXG5cdFx0XHRcdDwhLS0g55So5LqO5pi+56S656ug6IqC6L+b5bqmIC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvdy1jaGFwdGVyXCIgdi1pZj1cInByb2dyZXNzVG91Y2hlZFwiPnt7ZGlyZWN0b3J5TGlzdFtjaGFwdGVyUHJvZ3Jlc3NdLm5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3ctY2hhcHRlclwiIHYtZWxzZT57e2N1ckNoYXB0ZXIuY2hhcHRlck5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8IS0tIOeroOiKgui/m+W6puadoSAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2dyZXNzLWJveFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgQGNsaWNrPVwiZ29QcmVDaGFwdGVyXCI+5LiK5LiA56ugPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHZpZXcgc3R5bGU9XCJmbGV4OiAxO2hlaWdodDogMTAwJTtwYWRkaW5nOiAwIDEwcHg7XCI+XHJcblx0XHRcdFx0XHRcdDxteS1wcm9ncmVzcyA6dG90YWw9XCJkaXJlY3RvcnlMaXN0Lmxlbmd0aCAtIDFcIiA6aW5kZXg9XCJjdXJDaGFwdGVyLmNoYXB0ZXJJbmRleFwiIEBpbmRleENoYW5nZT1cImluZGV4Q2hhbmdlXCJcclxuXHRcdFx0XHRcdFx0QHByb2dyZXNzRW5kPVwicHJvZ3Jlc3NFbmRcIiBAcHJvZ3Jlc3NTdGFydD1cInByb2dyZXNzU3RhcnRcIiA+PC9teS1wcm9ncmVzcz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx0ZXh0IEBjbGljaz1cImdvTmV4dENoYXB0ZXJcIj7kuIvkuIDnq6A8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbXMtYm94XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tYm94XCIgQGNsaWNrPVwib3BlbkRpcmVjdG9yeVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250XCIgc3R5bGU9XCJmb250LXNpemU6IDI1cHg7XCI+JiN4ZTYwMTs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAxM3B4O1wiPuebruW9lTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1ib3hcIiB2LWlmPVwiYmFja2dyb3VuZCA9PT0gMlwiIEBjbGljaz1cImNoYW5nZUJhY2tncm91bmQoMSlcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udFwiIHN0eWxlPVwiZm9udC1zaXplOiAyNXB4O1wiPiYjeGU2M2U7PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMTNweDtcIj7lpJzpl7Q8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tYm94XCIgdi1pZj1cImJhY2tncm91bmQgPT09IDFcIiBAY2xpY2s9XCJjaGFuZ2VCYWNrZ3JvdW5kKDIpXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIiBzdHlsZT1cImZvbnQtc2l6ZTogMjVweDtcIj4mI3hlNjRjOzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXNpemU6IDEzcHg7XCI+5pel6Ze0PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLWJveFwiIEBjbGljaz1cIm9wZW5TZXR0aW5nXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIiBzdHlsZT1cImZvbnQtc2l6ZTogMjVweDtcIj4mI3hlNjFkOzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXNpemU6IDEzcHg7XCI+6K6+572uPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInNldHRpbmdcIiA6c3R5bGU9XCJ7Ym90dG9tOiBzZXR0aW5nU2hvdyA/IDAgOiBgLTEwMCVgfVwiIEB0b3VjaGVuZC5zdG9wPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLW5hbWVcIj7lrZflj7c8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25cIiBAY2xpY2s9XCJiaWdTaXplXCIgdi1pZj1cImZvbnRTaXplPG1heEZvbnRTaXplXCI+QSs8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25cIiBzdHlsZT1cImNvbG9yOiAjYzBjNGNjOyBib3JkZXI6ICNjMGM0Y2Mgc29saWQgMXB4O1wiIHYtZWxzZT5BKzwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvblwiIEBjbGljaz1cInNtYWxsU2l6ZVwiIHYtaWY9XCJmb250U2l6ZT5taW5Gb250U2l6ZVwiPkEtPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uXCIgc3R5bGU9XCJjb2xvcjogI2MwYzRjYztib3JkZXI6ICNjMGM0Y2Mgc29saWQgMXB4O1wiIHYtZWxzZT5BLTwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvblwiIEBjbGljaz1cImNoYW5nZUZvbnQoZmFsc2UpXCIgdi1pZj1cInNpbXBsaWZpZWRcIj7nuYHpq5Q8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25cIiBAY2xpY2s9XCJjaGFuZ2VGb250KHRydWUpXCIgdi1lbHNlIHN0eWxlPVwiYm9yZGVyOiAjRkY5OTAwIHNvbGlkIDFweDtjb2xvcjogI0ZGOTkwMFwiPue5gemrlDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tbmFtZVwiPuaOkueJiDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidHlwZS1zZXR0aW5nXCIgOmNsYXNzPVwie2FjdGl2ZTogbGluZUhlaWdodCA9PT0gMX1cIiBAY2xpY2s9XCJjaGFuZ2VMaW5lSGVpZ2h0KDEpXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZVwiIDpjbGFzcz1cIntsaW5lQWN0aXZlOiBsaW5lSGVpZ2h0ID09PSAxfVwiIHYtZm9yPVwiaSBpbiA1XCIgOmtleT1cImlcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInR5cGUtc2V0dGluZ1wiIDpjbGFzcz1cInthY3RpdmU6IGxpbmVIZWlnaHQgPT09IDEuNX1cIiBAY2xpY2s9XCJjaGFuZ2VMaW5lSGVpZ2h0KDEuNSlcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCIgOmNsYXNzPVwie2xpbmVBY3RpdmU6IGxpbmVIZWlnaHQgPT09IDEuNX1cIiB2LWZvcj1cImkgaW4gNFwiIDprZXk9XCJpXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0eXBlLXNldHRpbmdcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBsaW5lSGVpZ2h0ID09PSAyfVwiIEBjbGljaz1cImNoYW5nZUxpbmVIZWlnaHQoMilcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCIgOmNsYXNzPVwie2xpbmVBY3RpdmU6IGxpbmVIZWlnaHQgPT09IDJ9XCIgdi1mb3I9XCJpIGluIDNcIiA6a2V5PVwiaVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tbmFtZVwiPue/u+mhtTwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvblwiIDpjbGFzcz1cInthY3RpdmU6IHR1cm5UeXBlID09PSAwfVwiIHN0eWxlPVwicGFkZGluZzogNXB4IDhweDtcIiBAY2xpY2s9XCJjaGFuZ2VUdXJuVHlwZSgwKVwiPuimhuebljwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvblwiIDpjbGFzcz1cInthY3RpdmU6IHR1cm5UeXBlID09PSAxfVwiIHN0eWxlPVwicGFkZGluZzogNXB4IDhweDtcIiBAY2xpY2s9XCJjaGFuZ2VUdXJuVHlwZSgxKVwiPuW3puWPs+W5s+enuzwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvblwiIDpjbGFzcz1cInthY3RpdmU6IHR1cm5UeXBlID09PSAyfVwiIHN0eWxlPVwicGFkZGluZzogNXB4IDhweDtcIiBAY2xpY2s9XCJjaGFuZ2VUdXJuVHlwZSgyKVwiPuS4iuS4i+W5s+enuzwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tbmFtZVwiPuiDjOaZrzwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvblwiIHN0eWxlPVwiYmFja2dyb3VuZDogdXJsKC4uLy4uL3N0YXRpYy9iYWNrZ3JvdW5kMS5qcGcpO1wiIDpjbGFzcz1cInthY3RpdmU6IGJhY2tncm91bmQgPT09IDF9XCIgQGNsaWNrPVwiY2hhbmdlQmFja2dyb3VuZCgxKVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBiYWNrZ3JvdW5kID09PSAyfVwiIEBjbGljaz1cImNoYW5nZUJhY2tncm91bmQoMilcIj48L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0XHQ8IS0tIOebruW9leWxgiAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJkaXJlY3RvcnlcIiA6Y2xhc3M9XCJ7Y29udGFpbmVyMDogYmFja2dyb3VuZCA9PT0gMSwgY29udGFpbmVyMTogYmFja2dyb3VuZCA9PT0gMn1cIlxyXG5cdFx0XHQgOnN0eWxlPVwie2xlZnQ6IGRpcmVjdG9yeVNob3cgPyAwIDogJy0xMDAlJyxjb2xvcjogYCR7Y29sb3JMaXN0W2JhY2tncm91bmQgLSAxXX1gfVwiICBAdG91Y2hlbmQuc3RvcD5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvb2tuYW1lXCI+5Lmm5ZCNPC92aWV3PlxyXG5cdFx0XHRcdDxzY3JvbGwtdmlldyBzY3JvbGwteT1cInRydWVcIiBjbGFzcz1cImRpcmVjdG9yeS1saXN0XCIgOnNjcm9sbC1pbnRvLXZpZXc9XCJgY2hhcHRlciR7Y3VyQ2hhcHRlci5jaGFwdGVySW5kZXh9YFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIG9mIGRpcmVjdG9yeUxpc3RcIiA6a2V5PVwiaXRlbS5jaGFwdGVySWRcIiBjbGFzcz1cImRpcmVjdG9yeS1saXN0SXRlbVwiIDpjbGFzcz1cInthY3RpdmU6IGluZGV4ID09PSBjdXJDaGFwdGVyLmNoYXB0ZXJJbmRleH1cIlxyXG5cdFx0XHRcdFx0IDppZD1cImBjaGFwdGVyJHtpbmRleH1gXCIgQGNsaWNrPVwiZ29Ub0NoYXB0ZXIoaW5kZXgpXCI+XHJcblx0XHRcdFx0XHRcdHt7aXRlbS5uYW1lfX1cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBteVByb2dyZXNzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbXlQcm9ncmVzcy52dWUnXHJcblx0aW1wb3J0IGJhdHRlcnkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXR0ZXJ5LnZ1ZSdcclxuXHRpbXBvcnQgeyB0cmFkaXRpb25hbGl6ZWQsIHNpbXBsaXplZCwgZGF0ZVRvU3RyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMuanMnXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czp7XHJcblx0XHRcdG15UHJvZ3Jlc3MsXHJcblx0XHRcdGJhdHRlcnlcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGJvb2tOYW1lOiAn5oiR5piv5Lmm5ZCNJyxcclxuXHRcdFx0XHRjaGFwdGVySW5kZXhIaXN0b3J5OiAwLCAgICAvL+eUqOS6juiusOW9lemYheivu+eroOiKgueahGluZGV4IFxyXG5cdFx0XHRcdHBhZ2VIaXN0b3J5OiAwLCAgICAgLy/nlKjkuo7orrDlvZXnq6DoioLnmoTpmIXor7vov5vluqZcclxuXHRcdFx0XHR0ZXh0OmA8cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD48cD7mtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvor5XmtYvor5XmtYvor5XvvIzmtYvor5XmtYvor5XmtYvjgII8L3A+PHA+5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V77yM5rWL6K+V5rWL6K+V5rWL44CCPC9wPjxwPua1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+ivlea1i+ivlea1i+ivle+8jOa1i+ivlea1i+ivlea1i+OAgjwvcD5gLFxyXG5cdFx0XHRcdGRpcmVjdG9yeUxpc3Q6IFtdLCAgLy/nm67lvZXliJfooahcclxuXHRcdFx0XHRjdXJyZW50UGFnZTogMCwgICAvL+W9k+WJjemhtVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNhbGNUZXh0OiAnJywgICAvL+eUqOS6juiuoeeul+mrmOW6pueahOaWh+acrFxyXG5cdFx0XHRcdGlubmVySGVpZ2h0OiAwLCAgIC8v5oiq5Y+W6Iez5pW06KGM55qE5pyA5aSn6auY5bqmXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0cHJlQ2hhcHRlcjogeyAgIC8v5LiK5LiA56ug5pWw5o2uXHJcblx0XHRcdFx0XHRyZWFkeTogZmFsc2UsICAvL+aYr+WQpuWHhuWkh+WujOavlVxyXG5cdFx0XHRcdFx0Y2hhcHRlckluZGV4OiAnJyxcclxuXHRcdFx0XHRcdGNoYXB0ZXJOYW1lOiAnJyxcclxuXHRcdFx0XHRcdHRleHQ6ICcnLFxyXG5cdFx0XHRcdFx0dG90YWxQYWdlOiAnJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y3VyQ2hhcHRlcjogeyAgIC8v5pys5LiA56ug5pWw5o2uXHJcblx0XHRcdFx0XHRjaGFwdGVySW5kZXg6ICcnLFxyXG5cdFx0XHRcdFx0Y2hhcHRlck5hbWU6ICcnLFxyXG5cdFx0XHRcdFx0dGV4dDogJycsXHJcblx0XHRcdFx0XHR0b3RhbFBhZ2U6ICcnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRuZXh0Q2hhcHRlcjogeyAgIC8v5LiL5LiA56ug5pWw5o2uXHJcblx0XHRcdFx0XHRyZWFkeTogZmFsc2UsICAvL+aYr+WQpuWHhuWkh+WujOavlVxyXG5cdFx0XHRcdFx0Y2hhcHRlckluZGV4OiAnJyxcclxuXHRcdFx0XHRcdGNoYXB0ZXJOYW1lOiAnJyxcclxuXHRcdFx0XHRcdHRleHQ6ICcnLFxyXG5cdFx0XHRcdFx0dG90YWxQYWdlOiAnJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dG1wQ2hhcHRlcjoge30sICAvL+aaguWtmOeroOiKguWGheWuuVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNvdmVyOiB7ICAgIC8v5bCB6Z2i55qE54q25oCBXHJcblx0XHRcdFx0XHRwYWdlVHJhbnNsYXRlOiBbJycsICcnLCAnJ10sICAvL+mhtemdouS9jeenu++8jOS4ieS4quaVsOWvueW6lOS4ieenjee/u+mhteaWueW8j1xyXG5cdFx0XHRcdFx0c2hvdzogZmFsc2UgICAvL+aYr+WQpuaYvuekulxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0cHJlUGFnZTogeyAgICAvL+S4iuS4gOmhteaVsOaNrlxyXG5cdFx0XHRcdFx0cmVhZHk6IGZhbHNlLCAgLy/mmK/lkKblh4blpIflrozmr5VcclxuXHRcdFx0XHRcdGNoYXB0ZXJOYW1lOiAnJyxcclxuXHRcdFx0XHRcdHRleHQ6ICcnLFxyXG5cdFx0XHRcdFx0cGFnZU51bTogJycsXHJcblx0XHRcdFx0XHR0b3RhbFBhZ2U6IDEsXHJcblx0XHRcdFx0XHRwYWdlVHJhbnNsYXRlOiBbJycsICcnLCAnJ10sICAvL+mhtemdouS9jeenu++8jOS4ieS4quaVsOWvueW6lOS4ieenjee/u+mhteaWueW8j1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y3VyUGFnZTogeyAgIC8v5pys6aG15pWw5o2uXHJcblx0XHRcdFx0XHRyZWFkeTogZmFsc2UsICAvL+aYr+WQpuWHhuWkh+WujOavlVxyXG5cdFx0XHRcdFx0Y2hhcHRlck5hbWU6ICcnLFxyXG5cdFx0XHRcdFx0dGV4dDogJycsXHJcblx0XHRcdFx0XHRwYWdlTnVtOiAxLFxyXG5cdFx0XHRcdFx0dG90YWxQYWdlOiAxLFxyXG5cdFx0XHRcdFx0cGFnZVRyYW5zbGF0ZTogWycnLCAnJywgJyddLCAgLy/pobXpnaLkvY3np7vvvIzkuInkuKrmlbDlr7nlupTkuInnp43nv7vpobXmlrnlvI9cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdG5leHRQYWdlOiB7ICAgLy/kuIvkuIDpobXmlbDmja5cclxuXHRcdFx0XHRcdHJlYWR5OiBmYWxzZSwgIC8v5piv5ZCm5YeG5aSH5a6M5q+VXHJcblx0XHRcdFx0XHRjaGFwdGVyTmFtZTogJycsXHJcblx0XHRcdFx0XHR0ZXh0OiAnJyxcclxuXHRcdFx0XHRcdHBhZ2VOdW06ICcnLFxyXG5cdFx0XHRcdFx0dG90YWxQYWdlOiAnJyxcclxuXHRcdFx0XHRcdHBhZ2VUcmFuc2xhdGU6IFsnJywgJycsICcnXSwgIC8v6aG16Z2i5L2N56e777yM5LiJ5Liq5pWw5a+55bqU5LiJ56eN57+76aG15pa55byPXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRuZXh0OiBmYWxzZSwgIC8v55So5oi35piv5ZCm5q2j5Zyo57+75LiL5LiA6aG1XHJcblx0XHRcdFx0cHJlOiBmYWxzZSwgIC8v55So5oi35piv5ZCm5q2j5Zyo57+75LiK5LiA6aG1XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0d2FpdEZvck5leHQ6IGZhbHNlLCAgLy/mmK/lkKbmraPlnKjnrYnlvoXkuIvkuIDpobXlh4blpIflrozmr5XlkI7ot7PovaxcclxuXHRcdFx0XHR3YWl0Rm9yUHJlOiBmYWxzZSwgIC8v5piv5ZCm5q2j5Zyo562J5b6F5LiK5LiA6aG15YeG5aSH5a6M5q+V5ZCO6Lez6L2sXHJcblx0XHRcdFx0d2FpdEZvck5leHRDaGFwdGVyOiBmYWxzZSwgIC8v5piv5ZCm5q2j5Zyo562J5b6F5LiL5LiA56ug5YeG5aSH5a6M5q+V5ZCO6Lez6L2sXHJcblx0XHRcdFx0d2FpdEZvclByZUNoYXB0ZXI6IGZhbHNlLCAgLy/mmK/lkKbmraPlnKjnrYnlvoXkuIrkuIDnq6Dlh4blpIflrozmr5XlkI7ot7PovaxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzaG93QW5pbWF0aW9uOiBmYWxzZSwgLy/mmK/lkKblvIDlkK/liqjnlLtcclxuXHRcdFx0XHRzaG93U2hhZG93OiBmYWxzZSwgLy/mmK/lkKbmmL7npLrpobXpnaLpmLTlvbFcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR3aW5kb3dXaWR0aDogMCwgICAvL+WPr+eUqOWxj+W5leWuveW6plxyXG5cdFx0XHRcdHdpbmRvd0hlaWdodDogMCwgICAvL+WPr+eUqOWxj+W5lemrmOW6plxyXG5cdFx0XHRcdGNvbnRlbnRIZWlnaHQ6IDAsICAvL+mYheivu+WMuuWfn+mrmOW6plxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHBsYXRmb3JtOiAnJywgIC8v6K6+5aSHXHJcblx0XHRcdFx0YmF0dGVyeVN0YXRlOiAnJywgLy/nlLXmsaDnirbmgIFcclxuXHRcdFx0XHRiYXR0ZXJ5TGV2ZWw6IDEwMCwgLy/nlLXph49cclxuXHRcdFx0XHRzeXN0ZW1UaW1lOiAnJywgICAvL+ezu+e7n+aXtumXtFxyXG5cdFx0XHRcdHN5c3RlbVRpbWVTdHI6ICcnLCAgIC8v57O757uf5pe26Ze05a2X56ym5LiyXHJcblx0XHRcdFx0c3RhdHVzQmFySGVpZ2h0OiAwLCAvL+eKtuaAgeagj+mrmOW6plxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRvdWNoU3RhcnRYOiAwLCAgLy8g6Kem5bGP6LW35aeL54K5eFxyXG5cdFx0XHRcdHRvdWNoWDogMCwgIC8vIOeerOaXtuinpuWxj+eCuXhcclxuXHRcdFx0XHRkZWx0YTogMCwgIC8vIOaJi+aMh+eerOaXtuS9jeenu1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRvdWNoU3RhcnRZOiAwLCAgLy8g6Kem5bGP6LW35aeL54K5eVxyXG5cdFx0XHRcdHRvdWNoWTogMCwgIC8vIOeerOaXtuinpuWxj+eCuXlcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRtZW51U2hvdzogZmFsc2UsICAvL+iPnOWNleagj2JveOaYr+WQpua4suafk1xyXG5cdFx0XHRcdGl0ZW1TaG93OiBmYWxzZSwgIC8vIOiPnOWNleagj+WKqOeUu+aOp+WItlxyXG5cdFx0XHRcdHNldHRpbmdTaG93OiBmYWxzZSwgIC8v6K6+572u5qCP5Yqo55S75o6n5Yi2XHJcblx0XHRcdFx0ZGlyZWN0b3J5U2hvdzogZmFsc2UsICAvL+ebruW9leWKqOeUu+aOp+WItlxyXG5cdFx0XHRcdHR1cm5QYWdlVGltZTogLjUsICAvL+e/u+mhteWKqOeUu+aXtumXtFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdG1heEZvbnRTaXplOiAyNSwgICAvL+acgOWkp+Wtl+S9k+Wkp+Wwj++8jHB4XHJcblx0XHRcdFx0bWluRm9udFNpemU6IDE0LCAgIC8v5pyA5bCP5a2X5L2T5aSn5bCP77yMcHhcclxuXHRcdFx0XHR0dXJuVHlwZTogMCwgIC8v57+76aG15pa55byPXHJcblx0XHRcdFx0Zm9udFNpemU6ICcnLCAgIC8v5a2X5L2T5aSn5bCP77yMXHJcblx0XHRcdFx0c2ltcGxpZmllZDogJycsICAgLy/mmK/lkKbnroDkvZNcclxuXHRcdFx0XHRsaW5lSGVpZ2h0OiAnJywgICAvL+ihjOmrmO+8jOazqOaEj+aYr2ZvbnRTaXpl55qE5YCN5pWwXHJcblx0XHRcdFx0YmFja2dyb3VuZDogJycsICAgIC8v6IOM5pmvXHJcblx0XHRcdFx0Y29sb3JMaXN0OiBbJyMwMDAnLCAnIzY2NiddLCAgIC8v5LiO6IOM5pmv5a+55bqU55qE5a2X5L2T6aKc6ImyXHJcblxyXG5cdFx0XHRcdGNoYXB0ZXJQcm9ncmVzczogMCwgICAvL+KAmOeroOiKgui/m+W6puadoeKAmeeahOWPguaVsFxyXG5cdFx0XHRcdHByb2dyZXNzVG91Y2hlZDogZmFsc2UgICAvL+aYr+WQpuato+WcqOeCueWHu+KAmOeroOiKgui/m+W6puadoeKAmVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHR0aGlzLmdldFN5c3RlbUluZm8oKVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMuaW5pdFBhZ2UoKVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOntcclxuXHRcdFx0cHJvZ3Jlc3MoKSB7ICAgICAgLy/nq6DoioLnmoTpmIXor7vov5vluqZcclxuXHRcdFx0XHRpZiAodGhpcy5jdXJDaGFwdGVyLnRvdGFsUGFnZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDBcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY3VycmVudFBhZ2UgLyAodGhpcy5jdXJDaGFwdGVyLnRvdGFsUGFnZSAtIDEpXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDov5Tlm57kuIrkuIDpobXpnaJcclxuXHRcdFx0KiovXHJcblx0XHRcdGJhY2soKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDojrflj5borr7lpIfkv6Hmga9cclxuXHRcdFx0KiovXHJcblx0XHRcdGdldFN5c3RlbUluZm8oKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y29uc3QgeyB3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0LCBzdGF0dXNCYXJIZWlnaHQsIHBsYXRmb3JtIH0gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8v6I635Y+W5LiA5Lqb5b+F6KaB55qE6K6+5aSH5Y+C5pWwXHJcblx0XHRcdFx0dGhpcy5zdGF0dXNCYXJIZWlnaHQgPSBzdGF0dXNCYXJIZWlnaHRcclxuXHRcdFx0XHR0aGlzLndpbmRvd1dpZHRoID0gd2luZG93V2lkdGhcclxuXHRcdFx0XHR0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvd0hlaWdodFxyXG5cdFx0XHRcdHRoaXMucGxhdGZvcm0gPSBwbGF0Zm9ybVxyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHRcdFx0Ly8g5YWo5bGPXHJcblx0XHRcdFx0XHRwbHVzLm5hdmlnYXRvci5zZXRGdWxsc2NyZWVuKHRydWUpXHJcblx0XHRcdFx0XHQvLyDlj5bmtohpb3Plt6bmu5Hov5Tlm55cclxuXHRcdFx0XHRcdGxldCBwYWdlID0gdGhpcy4kbXAucGFnZS4kZ2V0QXBwV2VidmlldygpXHJcblx0XHRcdFx0XHRwYWdlLnNldFN0eWxlKHsgcG9wR2VzdHVyZTogJ25vbmUnIH0pXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICh0aGlzLnBsYXRmb3JtID09PSAnaW9zJykge1xyXG5cdFx0XHRcdFx0XHQvLyDojrflj5Zpb3PnlLXph49cclxuXHRcdFx0XHRcdFx0bGV0IFVJRGV2aWNlID0gcGx1cy5pb3MuaW1wb3J0KFwiVUlEZXZpY2VcIilcclxuXHRcdFx0XHRcdFx0bGV0IGRldiA9IFVJRGV2aWNlLmN1cnJlbnREZXZpY2UoKVxyXG5cdFx0XHRcdFx0XHRpZiAoIWRldi5pc0JhdHRlcnlNb25pdG9yaW5nRW5hYmxlZCgpKSB7ICBcclxuXHRcdFx0XHRcdFx0ICAgIGRldi5zZXRCYXR0ZXJ5TW9uaXRvcmluZ0VuYWJsZWQodHJ1ZSkgXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuYmF0dGVyeVN0YXRlID0gZGV2LmJhdHRlcnlTdGF0ZSgpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5iYXR0ZXJ5TGV2ZWwgPSBkZXYuYmF0dGVyeUxldmVsKCkgKiAxMDBcclxuXHRcdFx0XHRcdFx0fSwgMTAwMClcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8g6I635Y+W5a6J5Y2T55S16YePXHJcblx0XHRcdFx0XHRcdGxldCBtYWluID0gcGx1cy5hbmRyb2lkLnJ1bnRpbWVNYWluQWN0aXZpdHkoKTtcclxuXHRcdFx0XHRcdFx0bGV0IEludGVudCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcygnYW5kcm9pZC5jb250ZW50LkludGVudCcpOyAgXHJcblx0XHRcdFx0XHRcdGxldCByZWNldmllciA9IHBsdXMuYW5kcm9pZC5pbXBsZW1lbnRzKCdpby5kY2xvdWQuZmVhdHVyZS5pbnRlcm5hbC5yZWZsZWN0LkJyb2FkY2FzdFJlY2VpdmVyJywgeyAgXHJcblx0XHRcdFx0XHRcdCAgICBvblJlY2VpdmU6IChjb250ZXh0LCBpbnRlbnQpID0+IHsgIFxyXG5cdFx0XHRcdFx0XHQgICAgICAgIGxldCBhY3Rpb24gPSBpbnRlbnQuZ2V0QWN0aW9uKCk7ICBcclxuXHRcdFx0XHRcdFx0ICAgICAgICBpZiAoYWN0aW9uID09IEludGVudC5BQ1RJT05fQkFUVEVSWV9DSEFOR0VEKSB7ICBcclxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgdGhpcy5iYXR0ZXJ5U3RhdGUgPSBpbnRlbnQuZ2V0SW50RXh0cmEoXCJzdGF0dXNcIiwgMCk7IC8v55S15rGg54q25oCBICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5iYXR0ZXJ5TGV2ZWwgPSBpbnRlbnQuZ2V0SW50RXh0cmEoXCJsZXZlbFwiLCAwKTsgLy/nlLXph49cclxuXHRcdFx0XHRcdFx0ICAgICAgICB9ICBcclxuXHRcdFx0XHRcdFx0ICAgIH0gIFxyXG5cdFx0XHRcdFx0XHQgfSk7ICBcclxuXHRcdFx0XHRcdFx0bGV0IEludGVudEZpbHRlciA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcygnYW5kcm9pZC5jb250ZW50LkludGVudEZpbHRlcicpOyAgXHJcblx0XHRcdFx0XHRcdGxldCBmaWx0ZXIgPSBuZXcgSW50ZW50RmlsdGVyKEludGVudC5BQ1RJT05fQkFUVEVSWV9DSEFOR0VEKTsgIFxyXG5cdFx0XHRcdFx0XHRtYWluLnJlZ2lzdGVyUmVjZWl2ZXIocmVjZXZpZXIsIGZpbHRlcik7IFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8g6K6+572u5pe26Ze0XHJcblx0XHRcdFx0bGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcdHRoaXMuc3lzdGVtVGltZSA9IERhdGUucGFyc2UoZGF0ZSk7XHJcblx0XHRcdFx0dGhpcy5zeXN0ZW1UaW1lU3RyID0gZGF0ZVRvU3RyKHRoaXMuc3lzdGVtVGltZSk7XHJcblx0XHRcdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zeXN0ZW1UaW1lICs9IDYwMDAwO1xyXG5cdFx0XHRcdFx0dGhpcy5zeXN0ZW1UaW1lU3RyID0gZGF0ZVRvU3RyKHRoaXMuc3lzdGVtVGltZSk7XHJcblx0XHRcdFx0fSwgNjAwMDApXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8g6I635Y+W5a2X5L2T44CB5o6S54mI562J5L+h5oGvXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdFx0XHRcdC8qKioqKioqKioqICAgIOagueaNrumcgOimgeabtOaUuSAgICAqKioqKioqKioqKiovXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8v5Y+v6IO957yT5a2Y5Zyo5YmN56uv5Y+v6IO95LuO5ZCO56uv5ou/77yM5aaC5p6c5piv5byC5q2l5rOo5oSP5ZCM5q2l5aSE55CGXHJcblx0XHRcdFx0dGhpcy5mb250U2l6ZSA9IHVuaS5nZXRTdG9yYWdlU3luYygnZm9udFNpemUnKSB8fCAxNjtcclxuXHRcdFx0XHR0aGlzLnNpbXBsaWZpZWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3NpbXBsaWZpZWQnKTtcclxuXHRcdFx0XHR0aGlzLmxpbmVIZWlnaHQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2xpbmVIZWlnaHQnKSB8fCAxLjU7XHJcblx0XHRcdFx0dGhpcy5iYWNrZ3JvdW5kID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdiYWNrZ3JvdW5kJykgfHwgMTtcclxuXHRcdFx0XHR0aGlzLnR1cm5UeXBlID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd0dXJuVHlwZScpIHx8IDA7XHJcblx0XHRcdFx0dGhpcy5jaGFwdGVySW5kZXhIaXN0b3J5ID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdjaGFwdGVySW5kZXhIaXN0b3J5JykgfHwgMDtcclxuXHRcdFx0XHR0aGlzLnByb2dyZXNzSGlzdG9yeSA9IHVuaS5nZXRTdG9yYWdlU3luYygncHJvZ3Jlc3NIaXN0b3J5JykgfHwgMDtcclxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOiOt+WPluaVsOaNruW5tuiuoeeul+mhtemdolxyXG5cdFx0XHQqKi9cclxuXHRcdFx0YXN5bmMgaW5pdFBhZ2UoKSB7XHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5Yqg6L295LitJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0dGhpcy5jb3Zlci5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0YCgkey10aGlzLndpbmRvd1dpZHRofXB4LDApYCxcclxuXHRcdFx0XHRcdGAoJHstdGhpcy53aW5kb3dXaWR0aH1weCwwKWAsXHJcblx0XHRcdFx0XHRgKDAsJHstdGhpcy53aW5kb3dIZWlnaHR9cHgpYFxyXG5cdFx0XHRcdF1cclxuXHRcdFx0XHRhd2FpdCB0aGlzLmNhbGNIZWlnaHQoKVxyXG5cdFx0XHRcdGF3YWl0IHRoaXMuZ2V0RGlyZWN0b3J5TGlzdCgpXHJcblx0XHRcdFx0YXdhaXQgdGhpcy5nZXRUaHJlZUNoYXB0ZXIodGhpcy5jaGFwdGVySW5kZXhIaXN0b3J5KVxyXG5cdFx0XHRcdGxldCBwYWdlID0gTWF0aC5mbG9vcigodGhpcy5jdXJDaGFwdGVyLnRvdGFsUGFnZSAtIDEpICogdGhpcy5wcm9ncmVzc0hpc3RvcnkpXHJcblx0XHRcdFx0dGhpcy5nb1RvUGFnZShwYWdlKVxyXG5cdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDorqHnrpdpbm5lckhlaWdodO+8jOeUqOS6juaIquWPluiHs+aVtOihjFxyXG5cdFx0XHQqKi9cclxuXHRcdFx0Y2FsY0hlaWdodCgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb250ZW50SGVpZ2h0KSB7XHJcblx0XHRcdFx0XHRsZXQgbGluZUhlaWdodCA9IE1hdGguZmxvb3IodGhpcy5mb250U2l6ZSAqIHRoaXMubGluZUhlaWdodCk7XHJcblx0XHRcdFx0XHRsZXQgbGluZU51bSA9IE1hdGguZmxvb3IoKHRoaXMuY29udGVudEhlaWdodCArIChsaW5lSGVpZ2h0IC0gdGhpcy5mb250U2l6ZSkvMikgLyBsaW5lSGVpZ2h0KVxyXG5cdFx0XHRcdFx0dGhpcy5pbm5lckhlaWdodCA9IGxpbmVOdW0gKiBsaW5lSGVpZ2h0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdFx0XHRcdFx0XHRxdWVyeS5zZWxlY3QoJyNjb250ZW50JykuYm91bmRpbmdDbGllbnRSZWN0KGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IGhlaWdodCA9IGRhdGEuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5jb250ZW50SGVpZ2h0ID0gaGVpZ2h0O1xyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IGxpbmVIZWlnaHQgPSBNYXRoLmZsb29yKHRoaXMuZm9udFNpemUgKiB0aGlzLmxpbmVIZWlnaHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IGxpbmVOdW0gPSBNYXRoLmZsb29yKChoZWlnaHQgKyAobGluZUhlaWdodCAtIHRoaXMuZm9udFNpemUpLzIpIC8gbGluZUhlaWdodClcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuaW5uZXJIZWlnaHQgPSBsaW5lTnVtICogbGluZUhlaWdodFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpXHJcblx0XHRcdFx0XHRcdFx0fSkuZXhlYygpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6K6h566X5pys56ug6aG15pWwXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRjYWxjQ3VyQ2hhcHRlcigpIHtcclxuXHRcdFx0XHR0aGlzLmNhbGNUZXh0ID0gdGhpcy5jdXJDaGFwdGVyLnRleHRcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBxdWVyeSA9IHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcyk7XHJcblx0XHRcdFx0XHRcdHF1ZXJ5LnNlbGVjdCgnI2Jvb2tJbm5lcicpLmJvdW5kaW5nQ2xpZW50UmVjdChkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jdXJDaGFwdGVyLnRvdGFsUGFnZSA9IE1hdGguY2VpbChoZWlnaHQvdGhpcy5pbm5lckhlaWdodClcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmN1ckNoYXB0ZXIucmVhZHkgPSB0cnVlICAgLy/nq6DoioLlh4blpIflrozmr5VcclxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKClcclxuXHRcdFx0XHRcdFx0fSkuZXhlYygpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDorqHnrpfkuIrkuIDnq6DpobXmlbAs5bm257+76aG177yI5aaC5p6c5pyJ77yJXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRjYWxjUHJlQ2hhcHRlcigpIHtcclxuXHRcdFx0XHR0aGlzLmNhbGNUZXh0ID0gdGhpcy5wcmVDaGFwdGVyLnRleHRcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBxdWVyeSA9IHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcyk7XHJcblx0XHRcdFx0XHRcdHF1ZXJ5LnNlbGVjdCgnI2Jvb2tJbm5lcicpLmJvdW5kaW5nQ2xpZW50UmVjdChkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wcmVDaGFwdGVyLnRvdGFsUGFnZSA9IE1hdGguY2VpbChoZWlnaHQvdGhpcy5pbm5lckhlaWdodClcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnByZUNoYXB0ZXIucmVhZHkgPSB0cnVlICAgLy/nq6DoioLlh4blpIflrozmr5VcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy53YWl0Rm9yUHJlKSB7ICAgIC8v5Y+R55Sf5Zyo55So5oi357+76Iez5LiK5LiA56ug77yM5L2G5piv5LiK5LiA56ug5pWw5o2u5pyq5YeG5aSH5a6M5q+V5pe2XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKSAgIC8v5oqKbG9hZGluZ+WFs+aOiVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy53YWl0Rm9yUHJlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHQvL+mhtemdouWHhuWkh+WujOavlVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcmVQYWdlID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWFkeTogdGhpcy5wcmVDaGFwdGVyLnJlYWR5LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGFwdGVyTmFtZTogdGhpcy5wcmVDaGFwdGVyLmNoYXB0ZXJOYW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiB0aGlzLnByZUNoYXB0ZXIudGV4dCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFnZU51bTogdGhpcy5wcmVDaGFwdGVyLnRvdGFsUGFnZSAtIDEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRvdGFsUGFnZTogdGhpcy5wcmVDaGFwdGVyLnRvdGFsUGFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFnZVRyYW5zbGF0ZTogW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGAoJHstdGhpcy53aW5kb3dXaWR0aH1weCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YCgkey10aGlzLndpbmRvd1dpZHRofXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRgKDAsJHstdGhpcy53aW5kb3dIZWlnaHR9cHgpYFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmdvUHJlUGFnZSgpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLndhaXRGb3JQcmVDaGFwdGVyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy53YWl0Rm9yUHJlQ2hhcHRlciA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmdvUHJlQ2hhcHRlcigpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoKVxyXG5cdFx0XHRcdFx0XHR9KS5leGVjKCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOiuoeeul+S4i+S4gOeroOmhteaVsCzlubbnv7vpobXvvIjlpoLmnpzmnInvvIlcclxuXHRcdFx0KiovXHJcblx0XHRcdGNhbGNOZXh0Q2hhcHRlcigpIHtcclxuXHRcdFx0XHR0aGlzLmNhbGNUZXh0ID0gdGhpcy5uZXh0Q2hhcHRlci50ZXh0XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xyXG5cdFx0XHRcdFx0XHRxdWVyeS5zZWxlY3QoJyNib29rSW5uZXInKS5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGhlaWdodCA9IGRhdGEuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMubmV4dENoYXB0ZXIudG90YWxQYWdlID0gTWF0aC5jZWlsKGhlaWdodC90aGlzLmlubmVySGVpZ2h0KVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMubmV4dENoYXB0ZXIucmVhZHkgPSB0cnVlICAgLy/nq6DoioLlh4blpIflrozmr5VcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy53YWl0Rm9yTmV4dCkgeyAgIC8v5Y+R55Sf5Zyo55So5oi357+76Iez5LiL5LiA56ug77yM5L2G5piv5LiL5LiA56ug5pWw5o2u5pyq5YeG5aSH5a6M5q+V5pe2XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKSAgICAvL+aKimxvYWRpbmflhbPmjolcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMud2FpdEZvck5leHQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdC8v6aG16Z2i5YeG5aSH5a6M5q+VXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm5leHRQYWdlID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWFkeTogdGhpcy5uZXh0Q2hhcHRlci5yZWFkeSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhcHRlck5hbWU6IHRoaXMubmV4dENoYXB0ZXIuY2hhcHRlck5hbWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IHRoaXMubmV4dENoYXB0ZXIudGV4dCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFnZU51bTogMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dG90YWxQYWdlOiB0aGlzLm5leHRDaGFwdGVyLnRvdGFsUGFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFnZVRyYW5zbGF0ZTogW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YCgke3RoaXMud2luZG93V2lkdGh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGAoMCwke3RoaXMud2luZG93SGVpZ2h0fXB4KWBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmdvTmV4dFBhZ2UoKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy53YWl0Rm9yTmV4dENoYXB0ZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLndhaXRGb3JOZXh0Q2hhcHRlciA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmdvTmV4dENoYXB0ZXIoKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKClcclxuXHRcdFx0XHRcdFx0fSkuZXhlYygpO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6Kem5pG45byA5aeL77yI5bCB6Z2i77yJXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRjb3ZlclRvdWNoU3RhcnQoZSkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd0FuaW1hdGlvbiA9IGZhbHNlICAgIC8v5YWz5o6J5Yqo55S777yM5ZCm5YiZ57+76aG15Lya5b6I5oWiXHJcblx0XHRcdFx0dGhpcy50b3VjaFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WFxyXG5cdFx0XHRcdHRoaXMudG91Y2hTdGFydFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WFxyXG5cdFx0XHRcdHRoaXMudG91Y2hZID0gZS50b3VjaGVzWzBdLmNsaWVudFlcclxuXHRcdFx0XHR0aGlzLnRvdWNoU3RhcnRZID0gZS50b3VjaGVzWzBdLmNsaWVudFlcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOinpuaRuO+8iOWwgemdou+8iVxyXG5cdFx0XHQqKi9cclxuXHRcdFx0Y292ZXJUb3VjaE1vdmUoZSkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd1NoYWRvdyA9IHRydWVcclxuXHRcdFx0XHRpZiAodGhpcy50dXJuVHlwZSA9PT0gMCB8fCB0aGlzLnR1cm5UeXBlID09PSAxKSB7ICAvL+e/u+mhteaWueW8j+S4uuKAmOimhuebluKAmeaIluiAheKAmOW3puWPs+W5s+enu+KAmVxyXG5cdFx0XHRcdFx0bGV0IGRlbHRhWCA9IGUudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy50b3VjaFN0YXJ0WFxyXG5cdFx0XHRcdFx0dGhpcy5kZWx0YSA9IGUudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy50b3VjaFhcclxuXHRcdFx0XHRcdHRoaXMudG91Y2hYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5uZXh0KSB7ICAgLy/pppbmrKHlt6bmu5HlkI5cclxuXHRcdFx0XHRcdFx0dGhpcy5jb3Zlci5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRcdGAoJHtkZWx0YVh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoJHtkZWx0YVh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoMCwwKWBcclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHR0aGlzLmN1clBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoJHt0aGlzLndpbmRvd1dpZHRoICsgZGVsdGFYfXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRgKDAsMClgXHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYgKCF0aGlzLnByZSAmJiAgZGVsdGFYIDwgMCkgeyAgLy/pppbmrKHlt6bmu5FcclxuXHRcdFx0XHRcdFx0dGhpcy5uZXh0ID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvdmVyLnBhZ2VUcmFuc2xhdGUgPSBbXHJcblx0XHRcdFx0XHRcdFx0YCgke2RlbHRhWH1weCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgke2RlbHRhWH1weCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgwLDApYFxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdHRoaXMuY3VyUGFnZS5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgke3RoaXMud2luZG93V2lkdGggKyBkZWx0YVh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoMCwwKWBcclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMucHJlKSB7ICAgLy/pppbmrKHlj7Pmu5HlkI7vvIznlLHkuo7mmK/lsIHpnaLkuI3lgZrku7vkvZXmk43kvZxcclxuXHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmICghdGhpcy5uZXh0ICYmIGRlbHRhWCA+IDApIHsgIC8v6aaW5qyh5Y+z5ruRXHJcblx0XHRcdFx0XHRcdHRoaXMucHJlID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+W3sue7j+aYr+esrOS4gOmhteS6hicsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgeyAgICAgLy/nv7vpobXmlrnlvI/kuLrigJjkuIrkuIvlubPnp7vigJlcclxuXHRcdFx0XHRcdGxldCBkZWx0YVkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WSAtIHRoaXMudG91Y2hTdGFydFk7XHJcblx0XHRcdFx0XHR0aGlzLmRlbHRhID0gZS50b3VjaGVzWzBdLmNsaWVudFkgLSB0aGlzLnRvdWNoWTtcclxuXHRcdFx0XHRcdHRoaXMudG91Y2hZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5uZXh0KSB7ICAgLy/pppbmrKHkuIrmu5HlkI5cclxuXHRcdFx0XHRcdFx0dGhpcy5jb3Zlci5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRgKDAsJHtkZWx0YVl9cHgpYFxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdHRoaXMuY3VyUGFnZS5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRgKDAsJHt0aGlzLndpbmRvd0hlaWdodCArIGRlbHRhWX1weClgXHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYgKCF0aGlzLnByZSAmJiAgZGVsdGFZIDwgMCkgeyAgLy/pppbmrKHkuIrmu5FcclxuXHRcdFx0XHRcdFx0dGhpcy5uZXh0ID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvdmVyLnBhZ2VUcmFuc2xhdGUgPSBbXHJcblx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoMCwke2RlbHRhWX1weClgXHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0dGhpcy5jdXJQYWdlLnBhZ2VUcmFuc2xhdGUgPSBbXHJcblx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoMCwke3RoaXMud2luZG93SGVpZ2h0ICsgZGVsdGFZfXB4KWBcclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMucHJlKSB7ICAgLy/pppbmrKHkuIvmu5HlkI7vvIznlLHkuo7mmK/lsIHpnaLkuI3lgZrku7vkvZXmk43kvZxcclxuXHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmICghdGhpcy5uZXh0ICYmIGRlbHRhWSA+IDApIHsgIC8v6aaW5qyh5LiL5ruRXHJcblx0XHRcdFx0XHRcdHRoaXMucHJlID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+W3sue7j+aYr+esrOS4gOmhteS6hicsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOinpuaRuOe7k+adn++8iOWwgemdou+8iVxyXG5cdFx0XHQqKi9cclxuXHRcdFx0Y292ZXJUb3VjaEVuZChlKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93QW5pbWF0aW9uID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMuc2hvd1NoYWRvdyA9IGZhbHNlO1xyXG5cdFx0XHRcdGxldCBkZWx0YSA9IDBcclxuXHRcdFx0XHRpZiAodGhpcy50dXJuVHlwZSA9PT0gMCB8fCB0aGlzLnR1cm5UeXBlID09PSAxKSB7ICAvL+e/u+mhteaWueW8j+S4uuKAmOimhuebluKAmeaIluiAheKAmOW3puWPs+W5s+enu+KAmVxyXG5cdFx0XHRcdFx0ZGVsdGEgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLnRvdWNoU3RhcnRYO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdGRlbHRhID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIC0gdGhpcy50b3VjaFN0YXJ0WTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGRlbHRhID09PSAwKSB7XHJcblx0XHRcdFx0XHRpZiAoZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYPHRoaXMud2luZG93V2lkdGgvMykgeyAvL+eCueWHu+Wxj+W5leW3pjEvM+S4uuS4iuS4gOmhtVxyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+W3sue7j+aYr+esrOS4gOmhteS6hicsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmIChlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg+dGhpcy53aW5kb3dXaWR0aC8zKjIpIHsgLy/ngrnlh7vlsY/luZXlj7MxLzPkuLrkuIvkuIDpobVcclxuXHRcdFx0XHRcdFx0dGhpcy5jb3Zlci5zaG93ID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0dGhpcy5jb3Zlci5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRcdGAoJHstdGhpcy53aW5kb3dXaWR0aH1weCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgkey10aGlzLndpbmRvd1dpZHRofXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRgKDAsJHstdGhpcy53aW5kb3dIZWlnaHR9cHgpYFxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdHRoaXMuY3VyUGFnZS5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRgKDAsMClgXHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYgKGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDw9dGhpcy53aW5kb3dXaWR0aC8zKjIgJiYgZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYPj10aGlzLndpbmRvd1dpZHRoLzMpIHsgLy/ngrnlh7vlsY/luZXkuK3pl7QxLzPkuLrlkbzlh7roj5zljZVcclxuXHRcdFx0XHRcdFx0dGhpcy5zaG93TWVudSgpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgeyAgICAvL+e/u+mhteaWueW8j+S4uuKAmOS4iuS4i+W5s+enu+KAmVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMubmV4dCAmJiB0aGlzLmRlbHRhIDw9IDApIHsgIC8v5LiL5LiA6aG1XHJcblx0XHRcdFx0XHRcdHRoaXMuY292ZXIucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRgKCR7LXRoaXMud2luZG93V2lkdGh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoJHstdGhpcy53aW5kb3dXaWR0aH1weCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgwLCR7LXRoaXMud2luZG93SGVpZ2h0fXB4KWBcclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHR0aGlzLmN1clBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgwLDApYFxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdHRoaXMuY292ZXIuc2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmICh0aGlzLm5leHQgJiYgdGhpcy5kZWx0YSA+IDApIHsgIC8v5Y+W5raI57+76aG1XHJcblx0XHRcdFx0XHRcdHRoaXMuY292ZXIucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgwLDApYFxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdHRoaXMuY3VyUGFnZS5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgke3RoaXMud2luZG93V2lkdGh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoMCwke3RoaXMud2luZG93SGVpZ2h0fXB4KWBcclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLm5leHQgPSBmYWxzZVxyXG5cdFx0XHRcdHRoaXMucHJlID0gZmFsc2VcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOinpuaRuOW8gOWniywg6aG16Z2i6L2u5o2iXHJcblx0XHRcdCoqL1xyXG5cdFx0XHR0b3VjaFN0YXJ0KGUpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dBbmltYXRpb24gPSBmYWxzZVxyXG5cdFx0XHRcdHRoaXMudG91Y2hYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XHJcblx0XHRcdFx0dGhpcy50b3VjaFN0YXJ0WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xyXG5cdFx0XHRcdHRoaXMudG91Y2hZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XHJcblx0XHRcdFx0dGhpcy50b3VjaFN0YXJ0WSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xyXG5cdFx0XHRcdGlmICh0aGlzLndhaXRGb3JOZXh0IHx8IHRoaXMud2FpdEZvclByZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8v6YeN572u6aG16Z2i54q25oCBXHJcblx0XHRcdFx0dGhpcy5nb1RvUGFnZSh0aGlzLmN1cnJlbnRQYWdlKVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6Kem5pG4XHJcblx0XHRcdCoqL1xyXG5cdFx0XHR0b3VjaE1vdmUoZSkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd1NoYWRvdyA9IHRydWU7XHJcblx0XHRcdFx0aWYgKHRoaXMudHVyblR5cGUgPT09IDAgfHwgdGhpcy50dXJuVHlwZSA9PT0gMSkgeyAgLy/nv7vpobXmlrnlvI/kuLrigJjopobnm5bigJnmiJbogIXigJjlt6blj7PlubPnp7vigJlcclxuXHRcdFx0XHRcdGxldCBkZWx0YVggPSBlLnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFg7XHJcblx0XHRcdFx0XHR0aGlzLmRlbHRhID0gZS50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLnRvdWNoWDtcclxuXHRcdFx0XHRcdHRoaXMudG91Y2hYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XHJcblx0XHRcdFx0XHRpZiAodGhpcy53YWl0Rm9yTmV4dCB8fCB0aGlzLndhaXRGb3JQcmUpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodGhpcy5uZXh0KSB7ICAgLy/pppbmrKHlt6bmu5HlkI5cclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMubmV4dFBhZ2UuaXNFbmQpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGlzLnByZVBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRgKCR7LXRoaXMud2luZG93V2lkdGh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoJHstdGhpcy53aW5kb3dXaWR0aCtkZWx0YVh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoMCwwKWBcclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHR0aGlzLmN1clBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRgKCR7ZGVsdGFYfXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRgKCR7ZGVsdGFYfXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRgKDAsMClgXHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0dGhpcy5uZXh0UGFnZS5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgke3RoaXMud2luZG93V2lkdGgrZGVsdGFYfXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRgKDAsMClgXHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYgKCF0aGlzLnByZSAmJiAgZGVsdGFYIDwgMCkgeyAgLy/pppbmrKHlt6bmu5FcclxuXHRcdFx0XHRcdFx0dGhpcy5uZXh0ID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5uZXh0UGFnZS5yZWFkeSkgeyAgLy/pobXpnaLlh4blpIflpb3kuoZcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5uZXh0UGFnZS5pc0VuZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHRcdFx0XHRcdFx0XHRcdC8qKioqKioqKioqICAgIOagueaNrumcgOimgeabtOaUuSAgICAqKioqKioqKioqKiovXHJcblx0XHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6J+i3s+i9rOaOqOiNkOmhtScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdFx0XHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdFx0XHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByZVBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgkey10aGlzLndpbmRvd1dpZHRofXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgkey10aGlzLndpbmRvd1dpZHRoK2RlbHRhWH1weCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGAoMCwwKWBcclxuXHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY3VyUGFnZS5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRgKCR7ZGVsdGFYfXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgke2RlbHRhWH1weCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGAoMCwwKWBcclxuXHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubmV4dFBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgke3RoaXMud2luZG93V2lkdGgrZGVsdGFYfXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgwLDApYFxyXG5cdFx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLndhaXRGb3JOZXh0ID0gdHJ1ZSAgIC8v562J5b6F5LiL5LiA6aG15YeG5aSH5a6M5q+V5ZCO6Lez6L2sXHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5q2j5Zyo5YeG5aSH5LiL5LiA56ugJ1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh0aGlzLnByZSkgeyAgIC8v6aaW5qyh5Y+z5ruR5ZCOXHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLnByZVBhZ2UuaXNDb3ZlcikgeyAgLy/kuIrkuIDpobXmmK/lsIHpnaJcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmNvdmVyLnBhZ2VUcmFuc2xhdGUgPSBbXHJcblx0XHRcdFx0XHRcdFx0XHRgKCR7LXRoaXMud2luZG93V2lkdGgrZGVsdGFYfXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdGAoJHstdGhpcy53aW5kb3dXaWR0aCtkZWx0YVh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0YCgwLDApYFxyXG5cdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLmN1clBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRgKCR7ZGVsdGFYfXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdGAoMCwwKWBcclxuXHRcdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wcmVQYWdlLnBhZ2VUcmFuc2xhdGUgPSBbXHJcblx0XHRcdFx0XHRcdFx0XHRgKCR7LXRoaXMud2luZG93V2lkdGgrZGVsdGFYfXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdGAoJHstdGhpcy53aW5kb3dXaWR0aCtkZWx0YVh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0YCgwLDApYFxyXG5cdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLmN1clBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRgKCR7ZGVsdGFYfXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdGAoMCwwKWBcclxuXHRcdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5uZXh0UGFnZS5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdGAoJHt0aGlzLndpbmRvd1dpZHRoK2RlbHRhWH1weCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRgKDAsMClgXHJcblx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmICghdGhpcy5uZXh0ICYmIGRlbHRhWCA+IDApIHsgIC8v6aaW5qyh5Y+z5ruRXHJcblx0XHRcdFx0XHRcdHRoaXMucHJlID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5wcmVQYWdlLnJlYWR5KSB7ICAvL+mhtemdouWHhuWkh+WlveS6hlxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnByZVBhZ2UuaXNDb3ZlcikgeyAgLy/kuIrkuIDpobXmmK/lsIHpnaJcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY292ZXIucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgkey10aGlzLndpbmRvd1dpZHRoK2RlbHRhWH1weCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGAoJHstdGhpcy53aW5kb3dXaWR0aCtkZWx0YVh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRgKDAsMClgXHJcblx0XHRcdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmN1clBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgke2RlbHRhWH1weCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGAoMCwwKWBcclxuXHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByZVBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgkey10aGlzLndpbmRvd1dpZHRoK2RlbHRhWH1weCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGAoJHstdGhpcy53aW5kb3dXaWR0aCtkZWx0YVh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRgKDAsMClgXHJcblx0XHRcdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmN1clBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgke2RlbHRhWH1weCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGAoMCwwKWBcclxuXHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubmV4dFBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgke3RoaXMud2luZG93V2lkdGgrZGVsdGFYfXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgwLDApYFxyXG5cdFx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLndhaXRGb3JQcmUgPSB0cnVlICAgLy/nrYnlvoXkuIrkuIDpobXlh4blpIflrozmr5XlkI7ot7PovaxcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmraPlnKjlh4blpIfkuIrkuIDnq6AnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7ICAgICAvL+e/u+mhteaWueW8j+S4uuKAmOS4iuS4i+W5s+enu+KAmVxyXG5cdFx0XHRcdFx0bGV0IGRlbHRhWSA9IGUudG91Y2hlc1swXS5jbGllbnRZIC0gdGhpcy50b3VjaFN0YXJ0WTtcclxuXHRcdFx0XHRcdHRoaXMuZGVsdGEgPSBlLnRvdWNoZXNbMF0uY2xpZW50WSAtIHRoaXMudG91Y2hZO1xyXG5cdFx0XHRcdFx0dGhpcy50b3VjaFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcclxuXHRcdFx0XHRcdGlmICh0aGlzLndhaXRGb3JOZXh0IHx8IHRoaXMud2FpdEZvclByZSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh0aGlzLm5leHQpIHsgICAvL+mmluasoeS4iua7keWQjlxyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5uZXh0UGFnZS5pc0VuZCkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoaXMucHJlUGFnZS5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRgKDAsJHstdGhpcy53aW5kb3dIZWlnaHQgKyBkZWx0YVl9cHgpYFxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdHRoaXMuY3VyUGFnZS5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRgKDAsJHtkZWx0YVl9cHgpYFxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdHRoaXMubmV4dFBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgwLCR7dGhpcy53aW5kb3dIZWlnaHQgKyBkZWx0YVl9cHgpYFxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmICghdGhpcy5wcmUgJiYgIGRlbHRhWSA8IDApIHsgIC8v6aaW5qyh5LiK5ruRXHJcblx0XHRcdFx0XHRcdHRoaXMubmV4dCA9IHRydWVcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMubmV4dFBhZ2UucmVhZHkpIHsgIC8v6aG16Z2i5YeG5aSH5aW95LqGXHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMubmV4dFBhZ2UuaXNFbmQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdFx0XHRcdFx0XHRcdFx0LyoqKioqKioqKiogICAg5qC55o2u6ZyA6KaB5pu05pS5ICAgICoqKioqKioqKioqKi9cclxuXHRcdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTon6Lez6L2s5o6o6I2Q6aG1JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjonbm9uZSdcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblx0XHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblx0XHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByZVBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgwLCR7LXRoaXMud2luZG93SGVpZ2h0ICsgZGVsdGFZfXB4KWBcclxuXHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY3VyUGFnZS5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRgKDAsJHtkZWx0YVl9cHgpYFxyXG5cdFx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5uZXh0UGFnZS5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRgKDAsJHt0aGlzLndpbmRvd0hlaWdodCArIGRlbHRhWX1weClgXHJcblx0XHRcdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMud2FpdEZvck5leHQgPSB0cnVlICAgLy/nrYnlvoXkuIvkuIDpobXlh4blpIflrozmr5XlkI7ot7PovaxcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmraPlnKjlh4blpIfkuIvkuIDnq6AnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMucHJlKSB7ICAgLy/pppbmrKHkuIvmu5HlkI5cclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMucHJlUGFnZS5pc0NvdmVyKSB7ICAvL+S4iuS4gOmhteaYr+WwgemdolxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY292ZXIucGFnZVRyYW5zbGF0ZSA9IHRoaXMuY292ZXIucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0YCgwLCR7LXRoaXMud2luZG93SGVpZ2h0ICsgZGVsdGFZfXB4KWBcclxuXHRcdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jdXJQYWdlLnBhZ2VUcmFuc2xhdGUgPSBbXHJcblx0XHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdGAoMCwke2RlbHRhWX1weClgXHJcblx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucHJlUGFnZS5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRgKDAsJHstdGhpcy53aW5kb3dIZWlnaHQgKyBkZWx0YVl9cHgpYFxyXG5cdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLmN1clBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0YCgwLCR7ZGVsdGFZfXB4KWBcclxuXHRcdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5uZXh0UGFnZS5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRgKDAsJHt0aGlzLndpbmRvd0hlaWdodCArIGRlbHRhWX1weClgXHJcblx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmICghdGhpcy5uZXh0ICYmIGRlbHRhWSA+IDApIHsgIC8v6aaW5qyh5LiL5ruRXHJcblx0XHRcdFx0XHRcdHRoaXMucHJlID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5wcmVQYWdlLnJlYWR5KSB7ICAvL+mhtemdouWHhuWkh+WlveS6hlxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnByZVBhZ2UuaXNDb3ZlcikgeyAgLy/kuIrkuIDpobXmmK/lsIHpnaJcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY292ZXIucGFnZVRyYW5zbGF0ZSA9IHRoaXMuY292ZXIucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0YCgwLCR7LXRoaXMud2luZG93SGVpZ2h0ICsgZGVsdGFZfXB4KWBcclxuXHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY3VyUGFnZS5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRgKDAsJHtkZWx0YVl9cHgpYFxyXG5cdFx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJlUGFnZS5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRgKDAsJHstdGhpcy53aW5kb3dIZWlnaHQgKyBkZWx0YVl9cHgpYFxyXG5cdFx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5jdXJQYWdlLnBhZ2VUcmFuc2xhdGUgPSBbXHJcblx0XHRcdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGAoMCwke2RlbHRhWX1weClgXHJcblx0XHRcdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm5leHRQYWdlLnBhZ2VUcmFuc2xhdGUgPSBbXHJcblx0XHRcdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGAoMCwke3RoaXMud2luZG93SGVpZ2h0ICsgZGVsdGFZfXB4KWBcclxuXHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy53YWl0Rm9yUHJlID0gdHJ1ZSAgIC8v562J5b6F5LiK5LiA6aG15YeG5aSH5a6M5q+V5ZCO6Lez6L2sXHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5q2j5Zyo5YeG5aSH5LiK5LiA56ugJ1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6Kem5pG457uT5p2fXHJcblx0XHRcdCoqL1xyXG5cdFx0XHR0b3VjaEVuZChlKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93QW5pbWF0aW9uID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMuc2hvd1NoYWRvdyA9IGZhbHNlO1xyXG5cdFx0XHRcdGxldCBkZWx0YSA9IDBcclxuXHRcdFx0XHRpZiAodGhpcy50dXJuVHlwZSA9PT0gMCB8fCB0aGlzLnR1cm5UeXBlID09PSAxKSB7XHJcblx0XHRcdFx0XHRkZWx0YSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0ZGVsdGEgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgLSB0aGlzLnRvdWNoU3RhcnRZO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZGVsdGEgPT09IDApIHtcclxuXHRcdFx0XHRcdGlmIChlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg8dGhpcy53aW5kb3dXaWR0aC8zICYmICF0aGlzLndhaXRGb3JOZXh0ICYmICF0aGlzLndhaXRGb3JQcmUpIHsgLy/ngrnlh7vlsY/luZXlt6YxLzPkuLrkuIrkuIDpobVcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMucHJlUGFnZS5yZWFkeSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZ29QcmVQYWdlKClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLndhaXRGb3JQcmUgPSB0cnVlICAgLy/nrYnlvoXkuIrkuIDpobXlh4blpIflrozmr5XlkI7ot7PovaxcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmraPlnKjlh4blpIfkuIrkuIDnq6AnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBpZiAoZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYPnRoaXMud2luZG93V2lkdGgvMyoyICYmICF0aGlzLndhaXRGb3JOZXh0ICYmICF0aGlzLndhaXRGb3JQcmUpIHsgLy/ngrnlh7vlsY/luZXlj7MxLzPkuLrkuIvkuIDpobVcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5uZXh0UGFnZS5yZWFkeSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZ29OZXh0UGFnZSgpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy53YWl0Rm9yTmV4dCA9IHRydWUgICAvL+etieW+heS4i+S4gOmhteWHhuWkh+WujOavleWQjui3s+i9rFxyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+ato+WcqOWHhuWkh+S4i+S4gOeroCdcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmIChlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg8PXRoaXMud2luZG93V2lkdGgvMyoyICYmIGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WD49dGhpcy53aW5kb3dXaWR0aC8zKSB7IC8v54K55Ye75bGP5bmV5Lit6Ze0MS8z5Li65ZG85Ye66I+c5Y2VXHJcblx0XHRcdFx0XHRcdHRoaXMuc2hvd01lbnUoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmICghdGhpcy53YWl0Rm9yTmV4dCAmJiAhdGhpcy53YWl0Rm9yUHJlKSB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5uZXh0ICYmIHRoaXMuZGVsdGEgPD0gMCkgeyAgLy/kuIvkuIDpobVcclxuXHRcdFx0XHRcdFx0dGhpcy5nb05leHRQYWdlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYgKHRoaXMubmV4dCAmJiB0aGlzLmRlbHRhID4gMCkgeyAgLy/lj5bmtojnv7vpobVcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmVQYWdlLnBhZ2VUcmFuc2xhdGUgPSBbXHJcblx0XHRcdFx0XHRcdFx0YCgkey10aGlzLndpbmRvd1dpZHRofXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRgKCR7LXRoaXMud2luZG93V2lkdGh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoMCwkey10aGlzLndpbmRvd0hlaWdodH1weClgXHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0dGhpcy5jdXJQYWdlLnBhZ2VUcmFuc2xhdGUgPSBbXHJcblx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoMCwwKWBcclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHR0aGlzLm5leHRQYWdlLnBhZ2VUcmFuc2xhdGUgPSBbXHJcblx0XHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0XHRgKCR7dGhpcy53aW5kb3dXaWR0aH1weCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgwLCR7dGhpcy53aW5kb3dIZWlnaHR9cHgpYFxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmICh0aGlzLnByZSAmJiB0aGlzLmRlbHRhID49IDApIHsgIC8v5LiK5LiA6aG1XHJcblx0XHRcdFx0XHRcdHRoaXMuZ29QcmVQYWdlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYgKHRoaXMucHJlICYmIHRoaXMuZGVsdGEgPCAwKSB7ICAvL+WPlua2iOe/u+mhtVxyXG5cdFx0XHRcdFx0XHR0aGlzLnByZVBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRgKCR7LXRoaXMud2luZG93V2lkdGh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoJHstdGhpcy53aW5kb3dXaWR0aH1weCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgwLCR7LXRoaXMud2luZG93SGVpZ2h0fXB4KWBcclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHR0aGlzLmN1clBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgwLDApYFxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdHRoaXMubmV4dFBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoJHt0aGlzLndpbmRvd1dpZHRofXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRgKDAsJHt0aGlzLndpbmRvd0hlaWdodH1weClgXHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0dGhpcy5jb3Zlci5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRcdGAoJHstdGhpcy53aW5kb3dXaWR0aH1weCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgkey10aGlzLndpbmRvd1dpZHRofXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRgKDAsJHstdGhpcy53aW5kb3dIZWlnaHR9cHgpYFxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMubmV4dCA9IGZhbHNlXHJcblx0XHRcdFx0dGhpcy5wcmUgPSBmYWxzZVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDlkbzlh7roj5zljZVcclxuXHRcdFx0KiovXHJcblx0XHRcdHNob3dNZW51KCkge1xyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHRcdFx0cGx1cy5uYXZpZ2F0b3Iuc2V0RnVsbHNjcmVlbihmYWxzZSk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0dGhpcy5tZW51U2hvdyA9IHRydWU7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLml0ZW1TaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdH0sMTAwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog5YWz6Zet6I+c5Y2VXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRjbG9zZU1lbnUoKSB7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0XHRwbHVzLm5hdmlnYXRvci5zZXRGdWxsc2NyZWVuKHRydWUpO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdHRoaXMuaXRlbVNob3cgPSBmYWxzZVxyXG5cdFx0XHRcdHRoaXMuc2V0dGluZ1Nob3cgPSBmYWxzZVxyXG5cdFx0XHRcdHRoaXMuZGlyZWN0b3J5U2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLm1lbnVTaG93ID0gZmFsc2VcclxuXHRcdFx0XHR9LDMwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOWFs+mXreiPnOWNleagj++8jOWRvOWHuuiuvue9ruagj1xyXG5cdFx0XHQqKi9cclxuXHRcdFx0b3BlblNldHRpbmcoKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5pdGVtU2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNldHRpbmdTaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdH0sMzAwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog5YWz6Zet6I+c5Y2V5qCP77yM5ZG85Ye655uu5b2V5qCPXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRvcGVuRGlyZWN0b3J5KCkge1xyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHRcdFx0cGx1cy5uYXZpZ2F0b3Iuc2V0RnVsbHNjcmVlbih0cnVlKTtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHR0aGlzLml0ZW1TaG93ID0gZmFsc2VcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZGlyZWN0b3J5U2hvdyA9IHRydWVcclxuXHRcdFx0XHR9LDMwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOW8gOWni+aLluWKqOi/m+W6puadoVxyXG5cdFx0XHQqKi9cclxuXHRcdFx0cHJvZ3Jlc3NTdGFydCgpIHtcclxuXHRcdFx0XHR0aGlzLnByb2dyZXNzVG91Y2hlZCA9IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOe7k+adn+aLluWKqOi/m+W6puadoVxyXG5cdFx0XHQqKi9cclxuXHRcdFx0YXN5bmMgcHJvZ3Jlc3NFbmQoaW5kZXgpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLmNoYXB0ZXJQcm9ncmVzcyA9IGluZGV4XHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5Yqg6L295LitJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0YXdhaXQgdGhpcy5nZXRUaHJlZUNoYXB0ZXIoaW5kZXgpXHJcblx0XHRcdFx0dGhpcy5wcm9ncmVzc1RvdWNoZWQgPSBmYWxzZVxyXG5cdFx0XHRcdHRoaXMuZ29Ub1BhZ2UoMClcclxuXHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnY2hhcHRlckluZGV4SGlzdG9yeScsIGluZGV4KVxyXG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygncHJvZ3Jlc3NIaXN0b3J5JywgMClcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOaLluWKqOi/m+W6puadoVxyXG5cdFx0XHQqKi9cclxuXHRcdFx0aW5kZXhDaGFuZ2UoaW5kZXgpIHtcclxuXHRcdFx0XHR0aGlzLmNoYXB0ZXJQcm9ncmVzcyA9IGluZGV4XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDkuIrkuIDpobVcclxuXHRcdFx0KiovXHJcblx0XHRcdGdvUHJlUGFnZSgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5wcmVQYWdlLmlzQ292ZXIpIHsgICAvL+WmguaenOaYr+mmlumhtVxyXG5cdFx0XHRcdFx0dGhpcy5jb3Zlci5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRgKDAsMClgXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR0aGlzLmN1clBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0YCgke3RoaXMud2luZG93V2lkdGh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRgKDAsJHt0aGlzLndpbmRvd0hlaWdodH1weClgXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR0aGlzLmNvdmVyLnNob3cgPSB0cnVlXHJcblx0XHRcdFx0XHRyZXR1cm4gXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuY3VycmVudFBhZ2UgLT0gMVxyXG5cdFx0XHRcdHRoaXMucHJlUGFnZS5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRgKDAsMClgXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRcdHRoaXMuY3VyUGFnZS5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdGAoJHt0aGlzLndpbmRvd1dpZHRofXB4LDApYCxcclxuXHRcdFx0XHRcdGAoMCwke3RoaXMud2luZG93SGVpZ2h0fXB4KWBcclxuXHRcdFx0XHRdXHJcblx0XHRcdFx0dGhpcy5uZXh0UGFnZS5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdGAoJHsyKnRoaXMud2luZG93V2lkdGh9cHgsMClgLFxyXG5cdFx0XHRcdFx0YCgwLCR7Mip0aGlzLndpbmRvd0hlaWdodH1weClgXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0aGlzLmN1cnJlbnRQYWdlID09PSAtMSkgeyAgIC8v57+76Iez5LiK5LiA56ug5LqGXHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IHRoaXMucHJlQ2hhcHRlci5jaGFwdGVyTmFtZSxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50UGFnZSA9IHRoaXMucHJlQ2hhcHRlci50b3RhbFBhZ2UgLSAxXHJcblx0XHRcdFx0XHR0aGlzLmNoYXB0ZXJSb3RhdGUoJ3ByZScpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpPT4ge1xyXG5cdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdwcm9ncmVzc0hpc3RvcnknLCB0aGlzLnByb2dyZXNzKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog5LiL5LiA6aG1XHJcblx0XHRcdCoqL1xyXG5cdFx0XHRnb05leHRQYWdlKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLm5leHRQYWdlLmlzRW5kKSB7ICAgLy/lpoLmnpznv7voh7PmnKzkuabmnKvlsL5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHRcdFx0XHRcdC8qKioqKioqKioqICAgIOagueaNrumcgOimgeabtOaUuSAgICAqKioqKioqKioqKiovXHJcblx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclx0XHRcdFx0XHRcdHRpdGxlOifot7PovazmjqjojZDpobUnLFxyXHRcdFx0XHRcdFx0aWNvbjonbm9uZSdcclx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdFx0XHRcdFx0cmV0dXJuIFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRQYWdlICs9IDFcclxuXHRcdFx0XHR0aGlzLnByZVBhZ2UucGFnZVRyYW5zbGF0ZSA9IFtcclxuXHRcdFx0XHRcdGAoJHstdGhpcy53aW5kb3dXaWR0aH1weCwwKWAsXHJcblx0XHRcdFx0XHRgKCR7LTIqdGhpcy53aW5kb3dXaWR0aH1weCwwKWAsXHJcblx0XHRcdFx0XHRgKDAsJHstMip0aGlzLndpbmRvd0hlaWdodH1weClgXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRcdHRoaXMuY3VyUGFnZS5wYWdlVHJhbnNsYXRlID0gW1xyXG5cdFx0XHRcdFx0YCgkey10aGlzLndpbmRvd1dpZHRofXB4LDApYCxcclxuXHRcdFx0XHRcdGAoJHstdGhpcy53aW5kb3dXaWR0aH1weCwwKWAsXHJcblx0XHRcdFx0XHRgKDAsJHstdGhpcy53aW5kb3dIZWlnaHR9cHgpYFxyXG5cdFx0XHRcdF1cclxuXHRcdFx0XHR0aGlzLm5leHRQYWdlLnBhZ2VUcmFuc2xhdGUgPSBbXHJcblx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdGAoMCwwKWBcclxuXHRcdFx0XHRdXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRoaXMuY3VycmVudFBhZ2UgPT09IHRoaXMuY3VyQ2hhcHRlci50b3RhbFBhZ2UpIHsgICAvL+e/u+iHs+S4i+S4gOeroOS6hlxyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiB0aGlzLm5leHRDaGFwdGVyLmNoYXB0ZXJOYW1lLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRQYWdlID0gMFxyXG5cdFx0XHRcdFx0dGhpcy5jaGFwdGVyUm90YXRlKCduZXh0JylcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCk9PiB7XHJcblx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3Byb2dyZXNzSGlzdG9yeScsIHRoaXMucHJvZ3Jlc3MpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOeroOiKgui9ruaNolxyXG5cdFx0XHQqKi9cclxuXHRcdFx0YXN5bmMgY2hhcHRlclJvdGF0ZSh0eXBlKSB7XHJcblx0XHRcdFx0aWYgKHR5cGUgPT09ICduZXh0Jykge1xyXG5cdFx0XHRcdFx0dGhpcy5wcmVDaGFwdGVyID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jdXJDaGFwdGVyKVxyXG5cdFx0XHRcdFx0dGhpcy5jdXJDaGFwdGVyID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5uZXh0Q2hhcHRlcilcclxuXHRcdFx0XHRcdGlmICh0aGlzLmN1ckNoYXB0ZXIuY2hhcHRlckluZGV4ICE9PSB0aGlzLmRpcmVjdG9yeUxpc3QubGVuZ3RoIC0gMSkgey8v5pyA5ZCO5LiA56ug5piv5qC55o2u55uu5b2V5YiX6KGo6ZW/5bqm5Yik5patXHJcblx0XHRcdFx0XHRcdHRoaXMubmV4dENoYXB0ZXIgPSB7XHJcblx0XHRcdFx0XHRcdFx0cmVhZHk6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdGNoYXB0ZXJJbmRleDogdGhpcy5jdXJDaGFwdGVyLmNoYXB0ZXJJbmRleCArIDEsXHJcblx0XHRcdFx0XHRcdFx0Y2hhcHRlck5hbWU6IHRoaXMuZGlyZWN0b3J5TGlzdFt0aGlzLmN1ckNoYXB0ZXIuY2hhcHRlckluZGV4ICsgMV0ubmFtZSxcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRhd2FpdCB0aGlzLmdldE9uZUNoYXB0ZXIodGhpcy5kaXJlY3RvcnlMaXN0W3RoaXMuY3VyQ2hhcHRlci5jaGFwdGVySW5kZXggKyAxXS5jaGFwdGVySWQpXHJcblx0XHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLm5leHRDaGFwdGVyLCAndGV4dCcsIHRoaXMudG1wQ2hhcHRlci50ZXh0KVxyXG5cdFx0XHRcdFx0XHR0aGlzLmNhbGNOZXh0Q2hhcHRlcigpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5uZXh0Q2hhcHRlciA9IHtyZWFkeTogdHJ1ZSxpc0VuZDogdHJ1ZX1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHR5cGUgPT09ICdwcmUnKSB7XHJcblx0XHRcdFx0XHR0aGlzLm5leHRDaGFwdGVyID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jdXJDaGFwdGVyKVxyXG5cdFx0XHRcdFx0dGhpcy5jdXJDaGFwdGVyID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcmVDaGFwdGVyKVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuY3VyQ2hhcHRlci5jaGFwdGVySW5kZXggIT09IDApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmVDaGFwdGVyID0ge1xyXG5cdFx0XHRcdFx0XHRcdHJlYWR5OiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRjaGFwdGVySW5kZXg6IHRoaXMuY3VyQ2hhcHRlci5jaGFwdGVySW5kZXggLSAxLFxyXG5cdFx0XHRcdFx0XHRcdGNoYXB0ZXJOYW1lOiB0aGlzLmRpcmVjdG9yeUxpc3RbdGhpcy5jdXJDaGFwdGVyLmNoYXB0ZXJJbmRleCAtIDFdLm5hbWUsXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YXdhaXQgdGhpcy5nZXRPbmVDaGFwdGVyKHRoaXMuZGlyZWN0b3J5TGlzdFt0aGlzLmN1ckNoYXB0ZXIuY2hhcHRlckluZGV4IC0gMV0uY2hhcHRlcklkKVxyXG5cdFx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5wcmVDaGFwdGVyLCAndGV4dCcsIHRoaXMudG1wQ2hhcHRlci50ZXh0KVxyXG5cdFx0XHRcdFx0XHR0aGlzLmNhbGNQcmVDaGFwdGVyKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnByZUNoYXB0ZXIgPSB7cmVhZHk6IHRydWUsaXNDb3ZlcjogdHJ1ZX1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdjaGFwdGVySW5kZXhIaXN0b3J5JywgdGhpcy5jdXJDaGFwdGVyLmNoYXB0ZXJJbmRleClcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDot7PovazkuIvkuIDnq6BcclxuXHRcdFx0KiovXHJcblx0XHRcdGdvTmV4dENoYXB0ZXIoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY3VyQ2hhcHRlci5jaGFwdGVySW5kZXggPT09IHRoaXMuZGlyZWN0b3J5TGlzdC5sZW5ndGggLSAxKSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICflt7Lnu4/mmK/mnIDlkI7kuIDnq6DkuoYnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMud2FpdEZvck5leHQgfHwgdGhpcy53YWl0Rm9yUHJlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGlzLm5leHRDaGFwdGVyLnJlYWR5KSB7XHJcblx0XHRcdFx0XHR0aGlzLmNoYXB0ZXJSb3RhdGUoJ25leHQnKVxyXG5cdFx0XHRcdFx0dGhpcy5nb1RvUGFnZSgwKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5q2j5Zyo5YeG5aSH5LiL5LiA56ugJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdHRoaXMud2FpdEZvck5leHRDaGFwdGVyID0gdHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOi3s+i9rOS4iuS4gOeroFxyXG5cdFx0XHQqKi9cclxuXHRcdFx0Z29QcmVDaGFwdGVyKHBhZ2UpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jdXJDaGFwdGVyLmNoYXB0ZXJJbmRleCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn6L+Z5piv56ys5LiA56ugJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGlzLndhaXRGb3JOZXh0IHx8IHRoaXMud2FpdEZvclByZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodGhpcy5wcmVDaGFwdGVyLnJlYWR5KSB7XHJcblx0XHRcdFx0XHR0aGlzLmNoYXB0ZXJSb3RhdGUoJ3ByZScpXHJcblx0XHRcdFx0XHR0aGlzLmdvVG9QYWdlKDApXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmraPlnKjlh4blpIfkuIrkuIDnq6AnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0dGhpcy53YWl0Rm9yUHJlQ2hhcHRlciA9IHRydWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog5qC55o2u6aG156CB6Lez6L2sXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRnb1RvUGFnZShwYWdlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50UGFnZSA9IHBhZ2VcclxuXHRcdFx0XHR0aGlzLnBhZ2VTdGF0dXMgPSAwXHJcblx0XHRcdFx0dGhpcy5zaG93QW5pbWF0aW9uID0gZmFsc2VcclxuXHRcdFx0XHR0aGlzLmN1clBhZ2UgPSB7XHJcblx0XHRcdFx0XHRyZWFkeTogdGhpcy5jdXJDaGFwdGVyLnJlYWR5LFxyXG5cdFx0XHRcdFx0Y2hhcHRlck5hbWU6IHRoaXMuY3VyQ2hhcHRlci5jaGFwdGVyTmFtZSxcclxuXHRcdFx0XHRcdHRleHQ6IHRoaXMuY3VyQ2hhcHRlci50ZXh0LFxyXG5cdFx0XHRcdFx0cGFnZU51bTogdGhpcy5jdXJyZW50UGFnZSxcclxuXHRcdFx0XHRcdHRvdGFsUGFnZTogdGhpcy5jdXJDaGFwdGVyLnRvdGFsUGFnZSxcclxuXHRcdFx0XHRcdHBhZ2VUcmFuc2xhdGU6IFtcclxuXHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0YCgwLDApYCxcclxuXHRcdFx0XHRcdFx0YCgwLDApYFxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodGhpcy5jdXJyZW50UGFnZSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMucHJlQ2hhcHRlci5yZWFkeSAmJiB0aGlzLnByZUNoYXB0ZXIuaXNDb3ZlcikgeyAgICAvL+e/u+iHs+WwgemdouS6hlxyXG5cdFx0XHRcdFx0XHR0aGlzLnByZVBhZ2UgPSB7XHJcblx0XHRcdFx0XHRcdFx0cmVhZHk6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0aXNDb3ZlcjogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRwYWdlVHJhbnNsYXRlOiBbXHJcblx0XHRcdFx0XHRcdFx0XHRgKCR7LXRoaXMud2luZG93V2lkdGh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0YCgkey10aGlzLndpbmRvd1dpZHRofXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdGAoMCwkey10aGlzLndpbmRvd0hlaWdodH1weClgXHJcblx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmVQYWdlID0ge1xyXG5cdFx0XHRcdFx0XHRcdHJlYWR5OiB0aGlzLnByZUNoYXB0ZXIucmVhZHksXHJcblx0XHRcdFx0XHRcdFx0Y2hhcHRlck5hbWU6IHRoaXMucHJlQ2hhcHRlci5jaGFwdGVyTmFtZSxcclxuXHRcdFx0XHRcdFx0XHR0ZXh0OiB0aGlzLnByZUNoYXB0ZXIudGV4dCxcclxuXHRcdFx0XHRcdFx0XHRwYWdlTnVtOiB0aGlzLnByZUNoYXB0ZXIudG90YWxQYWdlIC0gMSxcclxuXHRcdFx0XHRcdFx0XHR0b3RhbFBhZ2U6IHRoaXMucHJlQ2hhcHRlci50b3RhbFBhZ2UsXHJcblx0XHRcdFx0XHRcdFx0cGFnZVRyYW5zbGF0ZTogW1xyXG5cdFx0XHRcdFx0XHRcdFx0YCgkey10aGlzLndpbmRvd1dpZHRofXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRcdGAoJHstdGhpcy53aW5kb3dXaWR0aH1weCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0XHRgKDAsJHstdGhpcy53aW5kb3dIZWlnaHR9cHgpYFxyXG5cdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMucHJlUGFnZSA9IHtcclxuXHRcdFx0XHRcdFx0cmVhZHk6IHRydWUsXHJcblx0XHRcdFx0XHRcdGNoYXB0ZXJOYW1lOiB0aGlzLmN1ckNoYXB0ZXIuY2hhcHRlck5hbWUsXHJcblx0XHRcdFx0XHRcdHRleHQ6IHRoaXMuY3VyQ2hhcHRlci50ZXh0LFxyXG5cdFx0XHRcdFx0XHRwYWdlTnVtOiB0aGlzLmN1cnJlbnRQYWdlIC0gMSxcclxuXHRcdFx0XHRcdFx0dG90YWxQYWdlOiB0aGlzLmN1ckNoYXB0ZXIudG90YWxQYWdlLFxyXG5cdFx0XHRcdFx0XHRwYWdlVHJhbnNsYXRlOiBbXHJcblx0XHRcdFx0XHRcdFx0YCgkey10aGlzLndpbmRvd1dpZHRofXB4LDApYCxcclxuXHRcdFx0XHRcdFx0XHRgKCR7LXRoaXMud2luZG93V2lkdGh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoMCwkey10aGlzLndpbmRvd0hlaWdodH1weClgXHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMuY3VycmVudFBhZ2UgPj0gdGhpcy5jdXJDaGFwdGVyLnRvdGFsUGFnZSAtIDEpIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLm5leHRDaGFwdGVyLnJlYWR5ICYmIHRoaXMubmV4dENoYXB0ZXIuaXNFbmQpIHsgICAgLy/nv7voh7PmnIDlkI7kuIDnq6DkuoZcclxuXHRcdFx0XHRcdFx0dGhpcy5uZXh0UGFnZSA9IHtcclxuXHRcdFx0XHRcdFx0XHRyZWFkeTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRpc0VuZDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRwYWdlVHJhbnNsYXRlOiBbXHJcblx0XHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0YCgke3RoaXMud2luZG93V2lkdGh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0YCgwLCR7dGhpcy53aW5kb3dIZWlnaHR9cHgpYFxyXG5cdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubmV4dFBhZ2UgPSB7XHJcblx0XHRcdFx0XHRcdFx0cmVhZHk6IHRoaXMubmV4dENoYXB0ZXIucmVhZHksXHJcblx0XHRcdFx0XHRcdFx0Y2hhcHRlck5hbWU6IHRoaXMubmV4dENoYXB0ZXIuY2hhcHRlck5hbWUsXHJcblx0XHRcdFx0XHRcdFx0dGV4dDogdGhpcy5uZXh0Q2hhcHRlci50ZXh0LFxyXG5cdFx0XHRcdFx0XHRcdHBhZ2VOdW06IDAsXHJcblx0XHRcdFx0XHRcdFx0dG90YWxQYWdlOiB0aGlzLm5leHRDaGFwdGVyLnRvdGFsUGFnZSxcclxuXHRcdFx0XHRcdFx0XHRwYWdlVHJhbnNsYXRlOiBbXHJcblx0XHRcdFx0XHRcdFx0XHRgKDAsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0YCgke3RoaXMud2luZG93V2lkdGh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRcdFx0YCgwLCR7dGhpcy53aW5kb3dIZWlnaHR9cHgpYFxyXG5cdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMubmV4dFBhZ2UgPSB7XHJcblx0XHRcdFx0XHRcdHJlYWR5OiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRjaGFwdGVyTmFtZTogdGhpcy5jdXJDaGFwdGVyLmNoYXB0ZXJOYW1lLFxyXG5cdFx0XHRcdFx0XHR0ZXh0OiB0aGlzLmN1ckNoYXB0ZXIudGV4dCxcclxuXHRcdFx0XHRcdFx0cGFnZU51bTogdGhpcy5jdXJyZW50UGFnZSArIDEsXHJcblx0XHRcdFx0XHRcdHRvdGFsUGFnZTogdGhpcy5jdXJDaGFwdGVyLnRvdGFsUGFnZSxcclxuXHRcdFx0XHRcdFx0cGFnZVRyYW5zbGF0ZTogW1xyXG5cdFx0XHRcdFx0XHRcdGAoMCwwKWAsXHJcblx0XHRcdFx0XHRcdFx0YCgke3RoaXMud2luZG93V2lkdGh9cHgsMClgLFxyXG5cdFx0XHRcdFx0XHRcdGAoMCwke3RoaXMud2luZG93SGVpZ2h0fXB4KWBcclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKT0+IHtcclxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygncHJvZ3Jlc3NIaXN0b3J5JywgdGhpcy5wcm9ncmVzcylcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6Lez6L2s5Yiw5oyH5a6a56ug6IqCXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRhc3luYyBnb1RvQ2hhcHRlcihpbmRleCkge1xyXG5cdFx0XHRcdHRoaXMucHJvZ3Jlc3NUb3VjaGVkID0gZmFsc2VcclxuXHRcdFx0XHR0aGlzLmNsb3NlTWVudSgpXHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5Yqg6L295LitJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0YXdhaXQgdGhpcy5nZXRUaHJlZUNoYXB0ZXIoaW5kZXgpXHJcblx0XHRcdFx0dGhpcy5nb1RvUGFnZSgwKVxyXG5cdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdjaGFwdGVySW5kZXhIaXN0b3J5JywgaW5kZXgpXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog5Yqg5aSn5a2X5L2TXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRhc3luYyBiaWdTaXplKCkge1xyXG5cdFx0XHRcdGxldCBwcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3MgICAvL+iusOW9lemYheivu+i/m+W6pueUqOS6juiwg+aVtOWtl+S9k+WQjui3s+i9rFxyXG5cdFx0XHRcdHRoaXMuZm9udFNpemUrKztcclxuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ2ZvbnRTaXplJywgdGhpcy5mb250U2l6ZSlcclxuXHRcdFx0XHR0aGlzLmNhbGNIZWlnaHQoKVxyXG5cdFx0XHRcdGF3YWl0IHRoaXMuY2FsY0N1ckNoYXB0ZXIoKVxyXG5cdFx0XHRcdGlmICh0aGlzLnByZUNoYXB0ZXIucmVhZHkgJiYgIXRoaXMucHJlQ2hhcHRlci5pc0NvdmVyKSB7XHJcblx0XHRcdFx0XHR0aGlzLnByZUNoYXB0ZXIucmVhZHkgPSBmYWxzZVxyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5jYWxjUHJlQ2hhcHRlcigpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGlzLm5leHRDaGFwdGVyLnJlYWR5ICYmICF0aGlzLm5leHRDaGFwdGVyLmlzRW5kKSB7XHJcblx0XHRcdFx0XHR0aGlzLm5leHRDaGFwdGVyLnJlYWR5ID0gZmFsc2VcclxuXHRcdFx0XHRcdGF3YWl0IHRoaXMuY2FsY05leHRDaGFwdGVyKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IHBhZ2UgPSBNYXRoLmZsb29yKCh0aGlzLmN1ckNoYXB0ZXIudG90YWxQYWdlIC0gMSkgKiBwcm9ncmVzcylcclxuXHRcdFx0XHR0aGlzLmdvVG9QYWdlKHBhZ2UpXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDnvKnlsI/lrZfkvZNcclxuXHRcdFx0KiovXHJcblx0XHRcdGFzeW5jIHNtYWxsU2l6ZSgpIHtcclxuXHRcdFx0XHRsZXQgcHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzXHJcblx0XHRcdFx0dGhpcy5mb250U2l6ZS0tO1xyXG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnZm9udFNpemUnLCB0aGlzLmZvbnRTaXplKVxyXG5cdFx0XHRcdHRoaXMuY2FsY0hlaWdodCgpXHJcblx0XHRcdFx0YXdhaXQgdGhpcy5jYWxjQ3VyQ2hhcHRlcigpXHJcblx0XHRcdFx0aWYgKHRoaXMucHJlQ2hhcHRlci5yZWFkeSAmJiAhdGhpcy5wcmVDaGFwdGVyLmlzQ292ZXIpIHtcclxuXHRcdFx0XHRcdHRoaXMucHJlQ2hhcHRlci5yZWFkeSA9IGZhbHNlXHJcblx0XHRcdFx0XHRhd2FpdCB0aGlzLmNhbGNQcmVDaGFwdGVyKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMubmV4dENoYXB0ZXIucmVhZHkgJiYgIXRoaXMubmV4dENoYXB0ZXIuaXNFbmQpIHtcclxuXHRcdFx0XHRcdHRoaXMubmV4dENoYXB0ZXIucmVhZHkgPSBmYWxzZVxyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5jYWxjTmV4dENoYXB0ZXIoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgcGFnZSA9IE1hdGguZmxvb3IoKHRoaXMuY3VyQ2hhcHRlci50b3RhbFBhZ2UgLSAxKSAqIHByb2dyZXNzKVxyXG5cdFx0XHRcdHRoaXMuZ29Ub1BhZ2UocGFnZSlcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOWIh+aNoue5geS9k+eugOS9k1xyXG5cdFx0XHQqKi9cclxuXHRcdFx0Y2hhbmdlRm9udCh0eXBlKSB7XHJcblx0XHRcdFx0aWYgKCF0eXBlKSB7ICAgLy/liIfmjaLkuLrnuYHkvZNcclxuXHRcdFx0XHRcdHRoaXMucHJlQ2hhcHRlci50ZXh0ID0gdHJhZGl0aW9uYWxpemVkKHRoaXMucHJlQ2hhcHRlci50ZXh0KVxyXG5cdFx0XHRcdFx0dGhpcy5jdXJDaGFwdGVyLnRleHQgPSB0cmFkaXRpb25hbGl6ZWQodGhpcy5jdXJDaGFwdGVyLnRleHQpXHJcblx0XHRcdFx0XHR0aGlzLm5leHRDaGFwdGVyLnRleHQgPSB0cmFkaXRpb25hbGl6ZWQodGhpcy5uZXh0Q2hhcHRlci50ZXh0KVxyXG5cdFx0XHRcdFx0dGhpcy5wcmVQYWdlLnRleHQgPSB0cmFkaXRpb25hbGl6ZWQodGhpcy5wcmVQYWdlLnRleHQpXHJcblx0XHRcdFx0XHR0aGlzLmN1clBhZ2UudGV4dCA9IHRyYWRpdGlvbmFsaXplZCh0aGlzLmN1clBhZ2UudGV4dClcclxuXHRcdFx0XHRcdHRoaXMubmV4dFBhZ2UudGV4dCA9IHRyYWRpdGlvbmFsaXplZCh0aGlzLm5leHRQYWdlLnRleHQpXHJcblx0XHRcdFx0XHR0aGlzLnNpbXBsaWZpZWQgPSBmYWxzZVxyXG5cdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdzaW1wbGlmaWVkJywgZmFsc2UpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgeyAgIC8v5YiH5o2i5Li6566A5L2TXHJcblx0XHRcdFx0XHR0aGlzLnByZUNoYXB0ZXIudGV4dCA9IHNpbXBsaXplZCh0aGlzLnByZUNoYXB0ZXIudGV4dClcclxuXHRcdFx0XHRcdHRoaXMuY3VyQ2hhcHRlci50ZXh0ID0gc2ltcGxpemVkKHRoaXMuY3VyQ2hhcHRlci50ZXh0KVxyXG5cdFx0XHRcdFx0dGhpcy5uZXh0Q2hhcHRlci50ZXh0ID0gc2ltcGxpemVkKHRoaXMubmV4dENoYXB0ZXIudGV4dClcclxuXHRcdFx0XHRcdHRoaXMucHJlUGFnZS50ZXh0ID0gc2ltcGxpemVkKHRoaXMucHJlUGFnZS50ZXh0KVxyXG5cdFx0XHRcdFx0dGhpcy5jdXJQYWdlLnRleHQgPSBzaW1wbGl6ZWQodGhpcy5jdXJQYWdlLnRleHQpXHJcblx0XHRcdFx0XHR0aGlzLm5leHRQYWdlLnRleHQgPSBzaW1wbGl6ZWQodGhpcy5uZXh0UGFnZS50ZXh0KVxyXG5cdFx0XHRcdFx0dGhpcy5zaW1wbGlmaWVkID0gdHJ1ZVxyXG5cdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdzaW1wbGlmaWVkJywgdHJ1ZSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog5pS55Y+Y6KGM6LedXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRhc3luYyBjaGFuZ2VMaW5lSGVpZ2h0KGxpbmVIZWlnaHQpIHtcclxuXHRcdFx0XHRsZXQgcHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzXHJcblx0XHRcdFx0aWYgKGxpbmVIZWlnaHQgPT09IHRoaXMubGluZUhlaWdodCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcclxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnbGluZUhlaWdodCcsIHRoaXMubGluZUhlaWdodClcclxuXHRcdFx0XHRcdHRoaXMuY2FsY0hlaWdodCgpXHJcblx0XHRcdFx0XHRhd2FpdCB0aGlzLmNhbGNDdXJDaGFwdGVyKClcclxuXHRcdFx0XHRcdGlmICh0aGlzLnByZUNoYXB0ZXIucmVhZHkgJiYgIXRoaXMucHJlQ2hhcHRlci5pc0NvdmVyKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJlQ2hhcHRlci5yZWFkeSA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdGF3YWl0IHRoaXMuY2FsY1ByZUNoYXB0ZXIoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMubmV4dENoYXB0ZXIucmVhZHkgJiYgIXRoaXMubmV4dENoYXB0ZXIuaXNFbmQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5uZXh0Q2hhcHRlci5yZWFkeSA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdGF3YWl0IHRoaXMuY2FsY05leHRDaGFwdGVyKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGxldCBwYWdlID0gTWF0aC5mbG9vcigodGhpcy5jdXJDaGFwdGVyLnRvdGFsUGFnZSAtIDEpICogcHJvZ3Jlc3MpXHJcblx0XHRcdFx0XHR0aGlzLmdvVG9QYWdlKHBhZ2UpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog5pS55Y+Y57+76aG15pa55byPXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRjaGFuZ2VUdXJuVHlwZSh0dXJuVHlwZSkge1xyXG5cdFx0XHRcdGlmICh0dXJuVHlwZSA9PT0gdGhpcy50dXJuVHlwZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93QW5pbWF0aW9uID0gZmFsc2VcclxuXHRcdFx0XHRcdHRoaXMudHVyblR5cGUgPSB0dXJuVHlwZTtcclxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygndHVyblR5cGUnLCB0aGlzLnR1cm5UeXBlKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOaUueWPmOiDjOaZr1xyXG5cdFx0XHQqKi9cclxuXHRcdFx0Y2hhbmdlQmFja2dyb3VuZChiYWNrZ3JvdW5kKSB7XHJcblx0XHRcdFx0aWYgKGJhY2tncm91bmQgPT09IHRoaXMuYmFja2dyb3VuZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcclxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnYmFja2dyb3VuZCcsIHRoaXMuYmFja2dyb3VuZClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDojrflj5bnm67lvZVcclxuXHRcdFx0KiovXHJcblx0XHRcdGdldERpcmVjdG9yeUxpc3QoKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdFx0XHRcdC8qKioqKioqKioqICAgIOagueaNrumcgOimgeabtOaUuSAgICAqKioqKioqKioqKiovXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0XHQvLyDmqKHmi5/nvZHnu5zml7bpl7RcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHQvLyDnlJ/miJDnm67lvZXvvIzmraPluLjmmK/lkI7nq6/kvKDov4fmnaVcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaT0xO2k8PTEwMDtpKyspIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRpcmVjdG9yeUxpc3QucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0XHRjaGFwdGVySWQ6IGksICAgLy/ms6jmhI/vvJrov5nkuKpjaGFwdGVySWTnlKjkuo7ojrflj5bnq6DoioLlhoXlrrnogIzkuI3mmK9pbmRleFxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZTogYOesrCR7aX3nq6Ag5rWL6K+V5rWL6K+V5rWL6K+V5rWL6K+V5rWLYFxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpXHJcblx0XHRcdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDojrflj5bkuIDnq6DmlbDmja5cclxuXHRcdFx0KiovXHJcblx0XHRcdGdldE9uZUNoYXB0ZXIoY2hhcHRlcklkKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdFx0XHRcdC8qKioqKioqKioqICAgIOagueaNrumcgOimgeabtOaUuSAgICAqKioqKioqKioqKiovXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0XHQvLyDmqKHmi5/nvZHnu5zml7bpl7RcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dGhpcy50bXBDaGFwdGVyLnRleHQgPSBgPHA+JHtjaGFwdGVySWR9PC9wPmAgKyB0aGlzLnRleHQgIC8v5qih5ouf5pWw5o2uXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMuc2ltcGxpZmllZCkgeyAgIC8v5YiH5o2i5Li657mB5L2TICDms6jmhI/vvJrov5nph4zpu5jorqTmlbDmja7lupPkuK3mmK/nroDkvZPlrZdcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnRtcENoYXB0ZXIudGV4dCA9IHRyYWRpdGlvbmFsaXplZCh0aGlzLnRtcENoYXB0ZXIudGV4dClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpXHJcblx0XHRcdFx0XHR9LCAzMDApXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDojrflj5bkuInnq6DmlbDmja5cclxuXHRcdFx0KiovXHJcblx0XHRcdGFzeW5jIGdldFRocmVlQ2hhcHRlcihpbmRleCkge1xyXG5cdFx0XHRcdGF3YWl0IHRoaXMuZ2V0T25lQ2hhcHRlcih0aGlzLmRpcmVjdG9yeUxpc3RbaW5kZXhdLmNoYXB0ZXJJZClcclxuXHRcdFx0XHR0aGlzLmN1ckNoYXB0ZXIgPSB7XHJcblx0XHRcdFx0XHRjaGFwdGVySW5kZXg6IGluZGV4LFxyXG5cdFx0XHRcdFx0Y2hhcHRlck5hbWU6IHRoaXMuZGlyZWN0b3J5TGlzdFtpbmRleF0ubmFtZSxcclxuXHRcdFx0XHRcdHRleHQ6IHRoaXMudG1wQ2hhcHRlci50ZXh0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0aGlzLmN1ckNoYXB0ZXIuY2hhcHRlckluZGV4ICE9PSAwKSB7XHJcblx0XHRcdFx0XHRhd2FpdCB0aGlzLmdldE9uZUNoYXB0ZXIodGhpcy5kaXJlY3RvcnlMaXN0W2luZGV4IC0gMV0uY2hhcHRlcklkKVxyXG5cdFx0XHRcdFx0dGhpcy5wcmVDaGFwdGVyID0ge1xyXG5cdFx0XHRcdFx0XHRjaGFwdGVySW5kZXg6IGluZGV4IC0gMSxcclxuXHRcdFx0XHRcdFx0Y2hhcHRlck5hbWU6IHRoaXMuZGlyZWN0b3J5TGlzdFtpbmRleCAtIDFdLm5hbWUsXHJcblx0XHRcdFx0XHRcdHRleHQ6IHRoaXMudG1wQ2hhcHRlci50ZXh0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5wcmVDaGFwdGVyID0ge3JlYWR5OiB0cnVlLGlzQ292ZXI6IHRydWV9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0aGlzLmN1ckNoYXB0ZXIuY2hhcHRlckluZGV4ICE9PSB0aGlzLmRpcmVjdG9yeUxpc3QubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5nZXRPbmVDaGFwdGVyKHRoaXMuZGlyZWN0b3J5TGlzdFtpbmRleCArIDFdLmNoYXB0ZXJJZClcclxuXHRcdFx0XHRcdHRoaXMubmV4dENoYXB0ZXIgPSB7XHJcblx0XHRcdFx0XHRcdGNoYXB0ZXJJbmRleDogaW5kZXggKyAxLFxyXG5cdFx0XHRcdFx0XHRjaGFwdGVyTmFtZTogdGhpcy5kaXJlY3RvcnlMaXN0W2luZGV4ICsgMV0ubmFtZSxcclxuXHRcdFx0XHRcdFx0dGV4dDogdGhpcy50bXBDaGFwdGVyLnRleHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLm5leHRDaGFwdGVyID0ge3JlYWR5OiB0cnVlLGlzRW5kOiB0cnVlfVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRhd2FpdCB0aGlzLmNhbGNDdXJDaGFwdGVyKClcclxuXHRcdFx0XHRhd2FpdCB0aGlzLmNhbGNQcmVDaGFwdGVyKClcclxuXHRcdFx0XHRhd2FpdCB0aGlzLmNhbGNOZXh0Q2hhcHRlcigpXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0cGFnZXtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHQuaGlkZGVue1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHR9XHJcblx0LmFjdGlvbntcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdC5pdGVte1xyXG5cdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5jb250YWluZXJ7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDBweCAyMHB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdC5jaGFwdGVye1xyXG5cdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdGNvbG9yOiAkbWlub3ItdGV4dC1jb2xvcjtcclxuXHRcdFx0aGVpZ2h0OjMwcHg7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMzBweDtcclxuXHRcdH1cclxuXHRcdC5ib3R0b20tYmFye1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0Y29sb3I6ICRtaW5vci10ZXh0LWNvbG9yO1xyXG5cdFx0XHRoZWlnaHQ6MzBweDtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR9XHJcblx0XHQuY29udGVudHtcclxuXHRcdFx0ZmxleDogMSAxIGF1dG87XHJcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdC5pbm5lci1ib3h7XHJcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0XHQuYm9vay1pbm5lcntcclxuXHRcdFx0XHRcdHRleHQtaW5kZW50OiAyZW07XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOmp1c3RpZnk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblx0LmNvbnRhaW5lcjB7XHJcblx0XHRiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vc3RhdGljL2JhY2tncm91bmQxLmpwZyk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblx0fVxyXG5cdC5jb250YWluZXIxe1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuXHR9XHJcblx0Lm1lbnV7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0ei1pbmRleDogMzAwO1xyXG5cdFx0Ly8gdHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHRcdC5tZW51LXRvcHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuXHRcdFx0dHJhbnNpdGlvbjogdG9wIC4zcztcclxuXHRcdFx0LmhlYWR7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDQwcHg7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdFx0LmJhY2t7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRsZWZ0OiAxMHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuZGlyZWN0b3J5e1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0XHRcdHdpZHRoOiA2MDBycHg7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0dHJhbnNpdGlvbjogbGVmdCAuM3M7XHJcblx0XHRcdC5ib29rbmFtZXtcclxuXHRcdFx0XHRwYWRkaW5nOiAyMHB4IDAgMjBweCAxMHB4O1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQuZGlyZWN0b3J5LWxpc3R7XHJcblx0XHRcdFx0ZmxleDoxO1xyXG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG5cdFx0XHRcdC5kaXJlY3RvcnktbGlzdEl0ZW17XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMTBweDtcclxuXHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDQwcHg7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAjZWVlIHNvbGlkIDFweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmFjdGl2ZXtcclxuXHRcdFx0XHRcdGNvbG9yOiByZWRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5tZW51LWJvdHRvbXtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuXHRcdFx0dHJhbnNpdGlvbjogYm90dG9tIC4zcztcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdC5zaG93LWNoYXB0ZXJ7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6IDUwJTtcclxuXHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTExMCUpO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5wcm9ncmVzcy1ib3h7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRwYWRkaW5nOiAwIDIwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQuaXRlbXMtYm94e1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRoZWlnaHQ6IDgwcHg7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0Lml0ZW0tYm94e1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LnNldHRpbmd7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHRcdHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG5cdFx0XHR0cmFuc2l0aW9uOiBib3R0b20gLjNzO1xyXG5cdFx0XHQuaXRlbXtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0aGVpZ2h0OiA3MHB4O1xyXG5cdFx0XHRcdC5pdGVtLW5hbWV7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5pY29ue1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdFx0XHRcdFx0cGFkZGluZzogNXB4IDIwcHg7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDMycHg7XHJcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRcdFx0XHRcdHdpZHRoOiBhdXRvO1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxuXHRcdFx0XHRcdGJvcmRlcjogI2ZmZiBzb2xpZCAxcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC50eXBlLXNldHRpbmd7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDVweDtcclxuXHRcdFx0XHRcdGhlaWdodDogMzBweDtcclxuXHRcdFx0XHRcdHdpZHRoOiAzMHB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyOiAjZmZmIHNvbGlkIDFweDtcclxuXHRcdFx0XHRcdC5saW5le1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogI2ZmZiBzb2xpZCAxcHg7IFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmxpbmVBY3RpdmV7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAjRkY5OTAwIHNvbGlkIDFweDsgXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5hY3RpdmV7XHJcblx0XHRcdFx0XHRjb2xvcjogI0ZGOTkwMDtcclxuXHRcdFx0XHRcdGJvcmRlcjogI0ZGOTkwMCBzb2xpZCAxcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5jb3ZlcntcclxuXHRcdGltYWdle1xyXG5cdFx0XHRoZWlnaHQ6IDQwMHJweDtcclxuXHRcdFx0d2lkdGg6IDMwMHJweDtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuXHRcdH1cclxuXHR9XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

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
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
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
/*!******************************************************!*\
  !*** D:/project/read_demo/components/myProgress.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myProgress.vue?vue&type=template&id=3c753af4&scoped=true& */ 18);\n/* harmony import */ var _myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myProgress.vue?vue&type=script&lang=js& */ 20);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"3c753af4\",\n  null,\n  false,\n  _myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/myProgress.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUk7QUFDbkk7QUFDOEQ7QUFDTDs7O0FBR3pEO0FBQ3lLO0FBQ3pLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL215UHJvZ3Jlc3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjNzUzYWY0JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbXlQcm9ncmVzcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL215UHJvZ3Jlc3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiM2M3NTNhZjRcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9teVByb2dyZXNzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*************************************************************************************************!*\
  !*** D:/project/read_demo/components/myProgress.vue?vue&type=template&id=3c753af4&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./myProgress.vue?vue&type=template&id=3c753af4&scoped=true& */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_template_id_3c753af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 19 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/project/read_demo/components/myProgress.vue?vue&type=template&id=3c753af4&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!*******************************************************************************!*\
  !*** D:/project/read_demo/components/myProgress.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./myProgress.vue?vue&type=script&lang=js& */ 21);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_myProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThqQixDQUFnQixvbUJBQUcsRUFBQyIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL215UHJvZ3Jlc3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9teVByb2dyZXNzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/project/read_demo/components/myProgress.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    total: {\n      type: Number,\n      default: 1 },\n\n    index: {\n      type: Number,\n      default: 0 } },\n\n\n  data: function data() {\n    return {\n      left: 0, //进度条最左侧位置\n      right: 0, //进度条最右侧位置\n      isTouch: false,\n      // touchTimer: null,  //用于触摸节流\n      percent: 0 };\n\n  },\n  watch: {\n    index: function index() {\n      this.percent = this.index / this.total * 100;\n    } },\n\n  mounted: function mounted() {\n    this.percent = this.index / this.total * 100;\n    this.getLocation();\n  },\n  methods: {\n\n    getLocation: function getLocation() {var _this = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.select('#progress').boundingClientRect(function (data) {\n        _this.left = data.left;\n        _this.right = data.right;\n      }).exec();\n    },\n\n    touchstart: function touchstart() {\n      this.isTouch = true;\n      this.$emit('progressStart');\n    },\n\n    touchend: function touchend(e) {\n      this.isTouch = false;\n      var index = this.calcIndex(e.changedTouches[0].clientX);\n      this.$emit('progressEnd', index);\n      this.percent = index / this.total * 100;\n    },\n\n    touchmove: function touchmove(e) {\n      // if (!this.touchTimer) {\n      var index = this.calcIndex(e.touches[0].clientX);\n      this.$emit('indexChange', index);\n      this.percent = index / this.total * 100;\n      // this.touchTimer = setTimeout(() => {\n      // \tthis.touchTimer = null;\n      // }, 100)\n      // }\n    },\n\n    /**\n       * 输入位置计算index\n       **/\n    calcIndex: function calcIndex(px) {\n      var single = (this.right - this.left) / this.total;\n      var index = Math.round((px - this.left) / single);\n      index = index < 0 ? 0 : index;\n      index = index > this.total ? this.total : index;\n      return index;\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9teVByb2dyZXNzLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQURBOztBQUtBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQUxBLEVBREE7OztBQVdBLE1BWEEsa0JBV0E7QUFDQTtBQUNBLGFBREEsRUFDQTtBQUNBLGNBRkEsRUFFQTtBQUNBLG9CQUhBO0FBSUE7QUFDQSxnQkFMQTs7QUFPQSxHQW5CQTtBQW9CQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBLEtBSEEsRUFwQkE7O0FBeUJBLFNBekJBLHFCQXlCQTtBQUNBO0FBQ0E7QUFDQSxHQTVCQTtBQTZCQTs7QUFFQSxlQUZBLHlCQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLEVBR0EsSUFIQTtBQUlBLEtBUkE7O0FBVUEsY0FWQSx3QkFVQTtBQUNBO0FBQ0E7QUFDQSxLQWJBOztBQWVBLFlBZkEsb0JBZUEsQ0FmQSxFQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXBCQTs7QUFzQkEsYUF0QkEscUJBc0JBLENBdEJBLEVBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBL0JBOztBQWlDQTs7O0FBR0EsYUFwQ0EscUJBb0NBLEVBcENBLEVBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBMUNBLEVBN0JBLEUiLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJwcm9ncmVzcy1jb250YWluZXJcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwicHJvZ3Jlc3MtY29udGFpbmVyMlwiIGlkPVwicHJvZ3Jlc3NcIiBAdG91Y2hzdGFydD1cInRvdWNoc3RhcnRcIiBAdG91Y2hlbmQ9XCJ0b3VjaGVuZFwiIEB0b3VjaG1vdmU9XCJ0b3VjaG1vdmVcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9ncmVzcy1ib3hcIj5cclxuXHRcdFx0XHQ8cHJvZ3Jlc3MgOnBlcmNlbnQ9XCJwZXJjZW50XCIgYWN0aXZlQ29sb3I9XCIjMDAwXCIgYmFja2dyb3VuZENvbG9yPVwiIzFjMWMxY1wiIHN0cm9rZS13aWR0aD1cIjNcIi8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJiYWxsLWJveFwiIDpjbGFzcz1cIntiaWdnZXI6IGlzVG91Y2gsIHNoYWRvdzogaXNUb3VjaH1cIiA6c3R5bGU9XCJ7bGVmdDogYCR7cGVyY2VudH0lYH1cIj48L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOntcclxuXHRcdFx0dG90YWw6IHtcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpbmRleDoge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiAwXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4geyBcclxuXHRcdFx0XHRsZWZ0OiAwLCAgLy/ov5vluqbmnaHmnIDlt6bkvqfkvY3nva5cclxuXHRcdFx0XHRyaWdodDogMCwgIC8v6L+b5bqm5p2h5pyA5Y+z5L6n5L2N572uXHJcblx0XHRcdFx0aXNUb3VjaDogZmFsc2UsICBcclxuXHRcdFx0XHQvLyB0b3VjaFRpbWVyOiBudWxsLCAgLy/nlKjkuo7op6bmkbjoioLmtYFcclxuXHRcdFx0XHRwZXJjZW50OiAwLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6e1xyXG5cdFx0XHRpbmRleCgpIHtcclxuXHRcdFx0XHR0aGlzLnBlcmNlbnQgPSB0aGlzLmluZGV4IC8gdGhpcy50b3RhbCAqIDEwMFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy5wZXJjZW50ID0gdGhpcy5pbmRleCAvIHRoaXMudG90YWwgKiAxMDBcclxuXHRcdFx0dGhpcy5nZXRMb2NhdGlvbigpXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRcclxuXHRcdFx0Z2V0TG9jYXRpb24oKSB7XHJcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xyXG5cdFx0XHRcdHF1ZXJ5LnNlbGVjdCgnI3Byb2dyZXNzJykuYm91bmRpbmdDbGllbnRSZWN0KGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5sZWZ0ID0gZGF0YS5sZWZ0XHJcblx0XHRcdFx0XHR0aGlzLnJpZ2h0ID0gZGF0YS5yaWdodFxyXG5cdFx0XHRcdH0pLmV4ZWMoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdHRvdWNoc3RhcnQoKSB7XHJcblx0XHRcdFx0dGhpcy5pc1RvdWNoID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3Byb2dyZXNzU3RhcnQnKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0dG91Y2hlbmQoZSkge1xyXG5cdFx0XHRcdHRoaXMuaXNUb3VjaCA9IGZhbHNlXHJcblx0XHRcdFx0bGV0IGluZGV4ID0gdGhpcy5jYWxjSW5kZXgoZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3Byb2dyZXNzRW5kJywgaW5kZXgpXHJcblx0XHRcdFx0dGhpcy5wZXJjZW50ID0gaW5kZXggLyB0aGlzLnRvdGFsICogMTAwXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHR0b3VjaG1vdmUoZSkge1xyXG5cdFx0XHRcdC8vIGlmICghdGhpcy50b3VjaFRpbWVyKSB7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSB0aGlzLmNhbGNJbmRleChlLnRvdWNoZXNbMF0uY2xpZW50WCkgXHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdpbmRleENoYW5nZScsIGluZGV4KVxyXG5cdFx0XHRcdFx0dGhpcy5wZXJjZW50ID0gaW5kZXggLyB0aGlzLnRvdGFsICogMTAwXHJcblx0XHRcdFx0XHQvLyB0aGlzLnRvdWNoVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdC8vIFx0dGhpcy50b3VjaFRpbWVyID0gbnVsbDtcclxuXHRcdFx0XHRcdC8vIH0sIDEwMClcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDovpPlhaXkvY3nva7orqHnrpdpbmRleFxyXG5cdFx0XHQqKi9cclxuXHRcdFx0Y2FsY0luZGV4KHB4KSB7XHJcblx0XHRcdFx0bGV0IHNpbmdsZSA9ICh0aGlzLnJpZ2h0IC0gdGhpcy5sZWZ0KSAvIHRoaXMudG90YWxcclxuXHRcdFx0XHRsZXQgaW5kZXggPSBNYXRoLnJvdW5kKChweCAtIHRoaXMubGVmdCkgLyBzaW5nbGUpXHJcblx0XHRcdFx0aW5kZXggPSBpbmRleCA8IDAgPyAwIDogaW5kZXhcclxuXHRcdFx0XHRpbmRleCA9IGluZGV4ID4gdGhpcy50b3RhbCA/IHRoaXMudG90YWwgOiBpbmRleFxyXG5cdFx0XHRcdHJldHVybiBpbmRleFxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0LnByb2dyZXNzLWNvbnRhaW5lcntcclxuXHRcdHBhZGRpbmc6IDAgMTBweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0LnByb2dyZXNzLWNvbnRhaW5lcjJ7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdC5wcm9ncmVzcy1ib3h7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdH1cclxuXHRcdFx0LmJhbGwtYm94e1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHR3aWR0aDogMTBweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDEwcHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5zaGFkb3d7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDBweCAxcHggNXB4IHJnYmEoIzg4OCwuNCk7XHJcblx0XHRcdH1cclxuXHRcdFx0LmJpZ2dlcntcclxuXHRcdFx0XHR3aWR0aDogMjBweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!***************************************************!*\
  !*** D:/project/read_demo/components/battery.vue ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _battery_vue_vue_type_template_id_0a161022_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battery.vue?vue&type=template&id=0a161022&scoped=true& */ 23);\n/* harmony import */ var _battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battery.vue?vue&type=script&lang=js& */ 25);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _battery_vue_vue_type_template_id_0a161022_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _battery_vue_vue_type_template_id_0a161022_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0a161022\",\n  null,\n  false,\n  _battery_vue_vue_type_template_id_0a161022_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/battery.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDMkQ7QUFDTDs7O0FBR3REO0FBQ3lLO0FBQ3pLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2JhdHRlcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhMTYxMDIyJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYmF0dGVyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2JhdHRlcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMGExNjEwMjJcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9iYXR0ZXJ5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!**********************************************************************************************!*\
  !*** D:/project/read_demo/components/battery.vue?vue&type=template&id=0a161022&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_template_id_0a161022_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./battery.vue?vue&type=template&id=0a161022&scoped=true& */ 24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_template_id_0a161022_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_template_id_0a161022_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_template_id_0a161022_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_template_id_0a161022_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 24 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/project/read_demo/components/battery.vue?vue&type=template&id=0a161022&scoped=true& ***!
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
/*!****************************************************************************!*\
  !*** D:/project/read_demo/components/battery.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./battery.vue?vue&type=script&lang=js& */ 26);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_battery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJqQixDQUFnQixpbUJBQUcsRUFBQyIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2JhdHRlcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9iYXR0ZXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/project/read_demo/components/battery.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    level: {\n      type: Number,\n      default: 0 },\n\n    charging: {\n      type: Boolean,\n      default: false } },\n\n\n  data: function data() {\n    return {};\n\n  },\n  mounted: function mounted() {\n  },\n  methods: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9iYXR0ZXJ5LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUFEQTs7QUFLQTtBQUNBLG1CQURBO0FBRUEsb0JBRkEsRUFMQSxFQURBOzs7QUFXQSxNQVhBLGtCQVdBO0FBQ0E7O0FBRUEsR0FkQTtBQWVBLFNBZkEscUJBZUE7QUFDQSxHQWhCQTtBQWlCQSxhQWpCQSxFIiwiZmlsZSI6IjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiYmF0dGVyeS1jb250YWluZXJcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYmF0dGVyeS1ib2R5XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmF0dGVyeVwiIDpzdHlsZT1cInt3aWR0aDogYCR7bGV2ZWx9JWB9XCI+PC92aWV3PlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250IGNoYXJnaW5nXCIgdi1pZj1cImNoYXJnaW5nXCI+JiN4ZTYyNTs8L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImJhdHRlcnktaGVhZFwiPjwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOntcclxuXHRcdFx0bGV2ZWw6IHtcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGFyZ2luZzoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7IFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdC5iYXR0ZXJ5LWNvbnRhaW5lcntcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR3aWR0aDogMjVweDtcclxuXHRcdGhlaWdodDogMTBweDtcclxuXHRcdC5iYXR0ZXJ5LWJvZHl7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0cGFkZGluZzogMXB4O1xyXG5cdFx0XHR3aWR0aDogMjJweDtcclxuXHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxcHg7XHJcblx0XHRcdGJvcmRlcjogJG1pbm9yLXRleHQtY29sb3Igc29saWQgMXB4O1xyXG5cdFx0XHQuYmF0dGVyeXtcclxuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJG1pbm9yLXRleHQtY29sb3I7XHJcblx0XHRcdH1cclxuXHRcdFx0LmNoYXJnaW5ne1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRsZWZ0OiA1MCU7XHJcblx0XHRcdFx0dG9wOiA1MCU7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMnB4O1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdFx0XHRjb2xvcjogIzMzMztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LmJhdHRlcnktaGVhZHtcclxuXHRcdFx0d2lkdGg6IDJweDtcclxuXHRcdFx0aGVpZ2h0OiA2cHg7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRtaW5vci10ZXh0LWNvbG9yO1xyXG5cdFx0fVxyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!*******************************************!*\
  !*** D:/project/read_demo/utils/utils.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.dateToStr = dateToStr;exports.traditionalized = traditionalized;exports.simplized = simplized; /**\r\n                                                                                                                                                                                   * date转化为hh:mm\r\n                                                                                                                                                                                   */\nfunction dateToStr(date) {\n  if (typeof date !== 'number') {\n    return '';\n  }\n  date = new Date(date);\n  var hh = date.getHours();\n  var mm = date.getMinutes();\n  if (hh < 10) {\n    hh = '0' + hh;\n  }\n  if (mm < 10) {\n    mm = '0' + mm;\n  }\n  return hh + ':' + mm;\n}\nfunction simpPYStr() {\n  return '啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽劲荆兢觉决诀绝均菌钧军君峻俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座锕嗳嫒瑷暧霭谙铵鹌媪骜鳌钯呗钣鸨龅鹎贲锛荜哔滗铋筚跸苄缏笾骠飑飙镖镳鳔傧缤槟殡膑镔髌鬓禀饽钹鹁钸骖黪恻锸侪钗冁谄谶蒇忏婵骣觇禅镡伥苌怅阊鲳砗伧谌榇碜龀枨柽铖铛饬鸱铳俦帱雠刍绌蹰钏怆缍鹑辍龊鹚苁骢枞辏撺锉鹾哒鞑骀绐殚赕瘅箪谠砀裆焘镫籴诋谛绨觌镝巅钿癫铫鲷鲽铤铥岽鸫窦渎椟牍笃黩簖怼镦炖趸铎谔垩阏轭锇锷鹗颚颛鳄诶迩铒鸸鲕钫鲂绯镄鲱偾沣凫驸绂绋赙麸鲋鳆钆赅尴擀绀戆睾诰缟锆纥镉颍亘赓绠鲠诟缑觏诂毂钴锢鸪鹄鹘鸹掴诖掼鹳鳏犷匦刿妫桧鲑鳜衮绲鲧埚呙帼椁蝈铪阚绗颉灏颢诃阖蛎黉讧荭闳鲎浒鹕骅桦铧奂缳锾鲩鳇诙荟哕浍缋珲晖诨馄阍钬镬讦诘荠叽哜骥玑觊齑矶羁虿跻霁鲚鲫郏浃铗镓蛲谏缣戋戬睑鹣笕鲣鞯绛缰挢峤鹪鲛疖颌鲒卺荩馑缙赆觐刭泾迳弪胫靓阄鸠鹫讵屦榉飓钜锔窭龃锩镌隽谲珏皲剀垲忾恺铠锴龛闶钪铐骒缂轲钶锞颔龈铿喾郐哙脍狯髋诓诳邝圹纩贶匮蒉愦聩篑阃锟鲲蛴崃徕涞濑赉睐铼癞籁岚榄斓镧褴阆锒唠崂铑铹痨鳓诔缧俪郦坜苈莅蓠呖逦骊缡枥栎轹砺锂鹂疠粝跞雳鲡鳢蔹奁潋琏殓裢裣鲢魉缭钌鹩蔺廪檩辚躏绫棂蛏鲮浏骝绺镏鹨茏泷珑栊胧砻偻蒌喽嵝镂瘘耧蝼髅垆撸噜闾泸渌栌橹轳辂辘氇胪鸬鹭舻鲈脔娈栾鸾銮囵荦猡泺椤脶镙榈褛锊呒唛嬷杩劢缦镘颡鳗麽扪焖懑钔芈谧猕祢渑腼黾缈缪闵缗谟蓦馍殁镆钼铙讷铌鲵辇鲶茑袅陧蘖嗫颟蹑苎咛聍侬哝驽钕傩讴怄瓯蹒疱辔纰罴铍谝骈缥嫔钋镤镨蕲骐绮桤碛颀颃鳍佥荨悭骞缱椠钤嫱樯戗炝锖锵镪羟跄诮谯荞缲硗跷惬锲箧锓揿鲭茕蛱巯赇虮鳅诎岖阒觑鸲诠绻辁铨阕阙悫荛娆桡饪轫嵘蝾缛铷颦蚬飒毵糁缫啬铯穑铩鲨酾讪姗骟钐鳝垧殇觞厍滠畲诜谂渖谥埘莳弑轼贳铈鲥绶摅纾闩铄厮驷缌锶鸶薮馊飕锼谡稣谇荪狲唢睃闼铊鳎钛鲐昙钽锬顸傥饧铴镗韬铽缇鹈阗粜龆鲦恸钭钍抟饨箨鼍娲腽纨绾辋诿帏闱沩涠玮韪炜鲔阌莴龌邬庑怃妩骛鹉鹜饩阋玺觋硖苋莶藓岘猃娴鹇痫蚝籼跹芗饷骧缃飨哓潇骁绡枭箫亵撷绁缬陉荥馐鸺诩顼谖铉镟谑泶鳕埙浔鲟垭娅桠氩厣赝俨兖谳恹闫酽魇餍鼹炀轺鹞鳐靥谒邺晔烨诒呓峄饴怿驿缢轶贻钇镒镱瘗舣铟瘾茔莺萦蓥撄嘤滢潆璎鹦瘿颏罂镛莸铕鱿伛俣谀谕蓣嵛饫阈妪纡觎欤钰鹆鹬龉橼鸢鼋钺郓芸恽愠纭韫殒氲瓒趱錾驵赜啧帻箦谮缯谵诏钊谪辄鹧浈缜桢轸赈祯鸩诤峥钲铮筝骘栉栀轵轾贽鸷蛳絷踬踯觯锺纣绉伫槠铢啭馔颞骓缒诼镯谘缁辎赀眦锱龇鲻偬诹驺鲰镞缵躜鳟讠谫郄勐凼坂垅垴埯埝苘荬荮莜莼菰藁揸吒吣咔咝咴噘噼嚯幞岙嵴彷徼犸狍馀馇馓馕愣憷懔丬溆滟溷漤潴澹甯纟绔绱珉枧桊桉槔橥轱轷赍肷胨飚煳煅熘愍淼砜磙眍钚钷铘铞锃锍锎锏锘锝锪锫锿镅镎镢镥镩镲稆鹋鹛鹱疬疴痖癯裥襁耢颥螨麴鲅鲆鲇鲞鲴鲺鲼鳊鳋鳘鳙鞒鞴齄';\n}\nfunction ftPYStr() {\n  return '啊阿埃挨哎唉哀皚癌藹矮艾礙愛隘鞍氨安俺按暗岸胺案骯昂盎凹敖熬翺襖傲奧懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙壩霸罷爸白柏百擺佰敗拜稗斑班搬扳般頒板版扮拌伴瓣半辦絆邦幫梆榜膀綁棒磅蚌鎊傍謗苞胞包褒剝薄雹保堡飽寶抱報暴豹鮑爆杯碑悲卑北輩背貝鋇倍狽備憊焙被奔苯本笨崩繃甭泵蹦迸逼鼻比鄙筆彼碧蓖蔽畢斃毖幣庇痹閉敝弊必辟壁臂避陛鞭邊編貶扁便變卞辨辯辮遍標彪膘表鱉憋別癟彬斌瀕濱賓擯兵冰柄丙秉餅炳病並玻菠播撥缽波博勃搏鉑箔伯帛舶脖膊渤泊駁捕蔔哺補埠不布步簿部怖擦猜裁材才財睬踩采彩菜蔡餐參蠶殘慚慘燦蒼艙倉滄藏操糙槽曹草廁策側冊測層蹭插叉茬茶查碴搽察岔差詫拆柴豺攙摻蟬饞讒纏鏟產闡顫昌猖場嘗常長償腸廠敞暢唱倡超抄鈔朝嘲潮巢吵炒車扯撤掣徹澈郴臣辰塵晨忱沈陳趁襯撐稱城橙成呈乘程懲澄誠承逞騁秤吃癡持匙池遲弛馳恥齒侈尺赤翅斥熾充沖蟲崇寵抽酬疇躊稠愁籌仇綢瞅醜臭初出櫥廚躇鋤雛滁除楚礎儲矗搐觸處揣川穿椽傳船喘串瘡窗幢床闖創吹炊捶錘垂春椿醇唇淳純蠢戳綽疵茨磁雌辭慈瓷詞此刺賜次聰蔥囪匆從叢湊粗醋簇促躥篡竄摧崔催脆瘁粹淬翠村存寸磋撮搓措挫錯搭達答瘩打大呆歹傣戴帶殆代貸袋待逮怠耽擔丹單鄲撣膽旦氮但憚淡誕彈蛋當擋黨蕩檔刀搗蹈倒島禱導到稻悼道盜德得的蹬燈登等瞪凳鄧堤低滴迪敵笛狄滌翟嫡抵底地蒂第帝弟遞締顛掂滇碘點典靛墊電佃甸店惦奠澱殿碉叼雕雕刁掉吊釣調跌爹碟蝶叠諜疊丁盯叮釘頂鼎錠定訂丟東冬董懂動棟侗恫凍洞兜抖鬥陡豆逗痘都督毒犢獨讀堵睹賭杜鍍肚度渡妒端短鍛段斷緞堆兌隊對墩噸蹲敦頓囤鈍盾遁掇哆多奪垛躲朵跺舵剁惰墮蛾峨鵝俄額訛娥惡厄扼遏鄂餓恩而兒耳爾餌洱二貳發罰筏伐乏閥法琺藩帆番翻樊礬釩繁凡煩反返範販犯飯泛坊芳方肪房防妨仿訪紡放菲非啡飛肥匪誹吠肺廢沸費芬酚吩氛分紛墳焚汾粉奮份忿憤糞豐封楓蜂峰鋒風瘋烽逢馮縫諷奉鳳佛否夫敷膚孵扶拂輻幅氟符伏俘服浮涪福袱弗甫撫輔俯釜斧脯腑府腐赴副覆賦復傅付阜父腹負富訃附婦縛咐噶嘎該改概鈣蓋溉幹甘桿柑竿肝趕感稈敢贛岡剛鋼缸肛綱崗港杠篙臯高膏羔糕搞鎬稿告哥歌擱戈鴿胳疙割革葛格蛤閣隔鉻個各給根跟耕更庚羹埂耿梗工攻功恭龔供躬公宮弓鞏汞拱貢共鉤勾溝茍狗垢構購夠辜菇咕箍估沽孤姑鼓古蠱骨谷股故顧固雇刮瓜剮寡掛褂乖拐怪棺關官冠觀管館罐慣灌貫光廣逛瑰規圭矽歸龜閨軌鬼詭癸桂櫃跪貴劊輥滾棍鍋郭國果裹過哈骸孩海氦亥害駭酣憨邯韓含涵寒函喊罕翰撼捍旱憾悍焊汗漢夯杭航壕嚎豪毫郝好耗號浩呵喝荷菏核禾和何合盒貉閡河涸赫褐鶴賀嘿黑痕很狠恨哼亨橫衡恒轟哄烘虹鴻洪宏弘紅喉侯猴吼厚候後呼乎忽瑚壺葫胡蝴狐糊湖弧虎唬護互滬戶花嘩華猾滑畫劃化話槐徊懷淮壞歡環桓還緩換患喚瘓豢煥渙宦幻荒慌黃磺蝗簧皇凰惶煌晃幌恍謊灰揮輝徽恢蛔回毀悔慧卉惠晦賄穢會燴匯諱誨繪葷昏婚魂渾混豁活夥火獲或惑霍貨禍擊圾基機畸稽積箕肌饑跡激譏雞姬績緝吉極棘輯籍集及急疾汲即嫉級擠幾脊己薊技冀季伎祭劑悸濟寄寂計記既忌際繼紀嘉枷夾佳家加莢頰賈甲鉀假稼價架駕嫁殲監堅尖箋間煎兼肩艱奸緘繭檢柬堿鹼揀撿簡儉剪減薦檻鑒踐賤見鍵箭件健艦劍餞漸濺澗建僵姜將漿江疆蔣槳獎講匠醬降蕉椒礁焦膠交郊澆驕嬌嚼攪鉸矯僥腳狡角餃繳絞剿教酵轎較叫窖揭接皆稭街階截劫節莖睛晶鯨京驚精粳經井警景頸靜境敬鏡徑痙靖竟競凈炯窘揪究糾玖韭久灸九酒廄救舊臼舅咎就疚鞠拘狙疽居駒菊局咀矩舉沮聚拒據巨具距踞鋸俱句懼炬劇捐鵑娟倦眷卷絹撅攫抉掘倔爵桔傑捷睫竭潔結解姐戒藉芥界借介疥誡屆巾筋斤金今津襟緊錦僅謹進靳晉禁近燼浸盡勁荊兢覺決訣絕均菌鈞軍君峻俊竣浚郡駿喀咖卡咯開揩楷凱慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕顆科殼咳可渴克刻客課肯啃墾懇坑吭空恐孔控摳口扣寇枯哭窟苦酷庫褲誇垮挎跨胯塊筷儈快寬款匡筐狂框礦眶曠況虧盔巋窺葵奎魁傀饋愧潰坤昆捆困括擴廓闊垃拉喇蠟臘辣啦萊來賴藍婪欄攔籃闌蘭瀾讕攬覽懶纜爛濫瑯榔狼廊郎朗浪撈勞牢老佬姥酪烙澇勒樂雷鐳蕾磊累儡壘擂肋類淚棱楞冷厘梨犁黎籬貍離漓理李裏鯉禮莉荔吏栗麗厲勵礫歷利傈例俐痢立粒瀝隸力璃哩倆聯蓮連鐮廉憐漣簾斂臉鏈戀煉練糧涼梁粱良兩輛量晾亮諒撩聊僚療燎寥遼潦了撂鐐廖料列裂烈劣獵琳林磷霖臨鄰鱗淋凜賃吝拎玲菱零齡鈴伶羚淩靈陵嶺領另令溜琉榴硫餾留劉瘤流柳六龍聾嚨籠窿隆壟攏隴樓婁摟簍漏陋蘆盧顱廬爐擄鹵虜魯麓碌露路賂鹿潞祿錄陸戮驢呂鋁侶旅履屢縷慮氯律率濾綠巒攣孿灤卵亂掠略掄輪倫侖淪綸論蘿螺羅邏鑼籮騾裸落洛駱絡媽麻瑪碼螞馬罵嘛嗎埋買麥賣邁脈瞞饅蠻滿蔓曼慢漫謾芒茫盲氓忙莽貓茅錨毛矛鉚卯茂冒帽貌貿麽玫枚梅酶黴煤沒眉媒鎂每美昧寐妹媚門悶們萌蒙檬盟錳猛夢孟瞇醚靡糜迷謎彌米秘覓泌蜜密冪棉眠綿冕免勉娩緬面苗描瞄藐秒渺廟妙蔑滅民抿皿敏憫閩明螟鳴銘名命謬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌謀牟某拇牡畝姆母墓暮幕募慕木目睦牧穆拿哪吶鈉那娜納氖乃奶耐奈南男難囊撓腦惱鬧淖呢餒內嫩能妮霓倪泥尼擬妳匿膩逆溺蔫拈年碾攆撚念娘釀鳥尿捏聶孽嚙鑷鎳涅您檸獰凝寧擰濘牛扭鈕紐膿濃農弄奴努怒女暖虐瘧挪懦糯諾哦歐鷗毆藕嘔偶漚啪趴爬帕怕琶拍排牌徘湃派攀潘盤磐盼畔判叛乓龐旁耪胖拋咆刨炮袍跑泡呸胚培裴賠陪配佩沛噴盆砰抨烹澎彭蓬棚硼篷膨朋鵬捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片騙飄漂瓢票撇瞥拼頻貧品聘乒坪蘋萍平憑瓶評屏坡潑頗婆破魄迫粕剖撲鋪仆莆葡菩蒲埔樸圃普浦譜曝瀑期欺棲戚妻七淒漆柒沏其棋奇歧畦崎臍齊旗祈祁騎起豈乞企啟契砌器氣迄棄汽泣訖掐洽牽扡釬鉛千遷簽仟謙乾黔錢鉗前潛遣淺譴塹嵌欠歉槍嗆腔羌墻薔強搶橇鍬敲悄橋瞧喬僑巧鞘撬翹峭俏竅切茄且怯竊欽侵親秦琴勤芹擒禽寢沁青輕氫傾卿清擎晴氰情頃請慶瓊窮秋丘邱球求囚酋泅趨區蛆曲軀屈驅渠取娶齲趣去圈顴權醛泉全痊拳犬券勸缺炔瘸卻鵲榷確雀裙群然燃冉染瓤壤攘嚷讓饒擾繞惹熱壬仁人忍韌任認刃妊紉扔仍日戎茸蓉榮融熔溶容絨冗揉柔肉茹蠕儒孺如辱乳汝入褥軟阮蕊瑞銳閏潤若弱撒灑薩腮鰓塞賽三三傘散桑嗓喪搔騷掃嫂瑟色澀森僧莎砂殺剎沙紗傻啥煞篩曬珊苫杉山刪煽衫閃陜擅贍膳善汕扇繕墑傷商賞晌上尚裳梢捎稍燒芍勺韶少哨邵紹奢賒蛇舌舍赦攝射懾涉社設砷申呻伸身深娠紳神沈審嬸甚腎慎滲聲生甥牲升繩省盛剩勝聖師失獅施濕詩屍虱十石拾時什食蝕實識史矢使屎駛始式示士世柿事拭誓逝勢是嗜噬適仕侍釋飾氏市恃室視試收手首守壽授售受瘦獸蔬樞梳殊抒輸叔舒淑疏書贖孰熟薯暑曙署蜀黍鼠屬術述樹束戍豎墅庶數漱恕刷耍摔衰甩帥栓拴霜雙爽誰水睡稅吮瞬順舜說碩朔爍斯撕嘶思私司絲死肆寺嗣四伺似飼巳松聳慫頌送宋訟誦搜艘擻嗽蘇酥俗素速粟僳塑溯宿訴肅酸蒜算雖隋隨綏髓碎歲穗遂隧祟孫損筍蓑梭唆縮瑣索鎖所塌他它她塔獺撻蹋踏胎苔擡臺泰酞太態汰坍攤貪癱灘壇檀痰潭譚談坦毯袒碳探嘆炭湯塘搪堂棠膛唐糖倘躺淌趟燙掏濤滔絳萄桃逃淘陶討套特藤騰疼謄梯剔踢銻提題蹄啼體替嚏惕涕剃屜天添填田甜恬舔腆挑條迢眺跳貼鐵帖廳聽烴汀廷停亭庭挺艇通桐酮瞳同銅彤童桶捅筒統痛偷投頭透凸禿突圖徒途塗屠土吐兔湍團推頹腿蛻褪退吞屯臀拖托脫鴕陀馱駝橢妥拓唾挖哇蛙窪娃瓦襪歪外豌彎灣玩頑丸烷完碗挽晚皖惋宛婉萬腕汪王亡枉網往旺望忘妄威巍微危韋違桅圍唯惟為濰維葦萎委偉偽尾緯未蔚味畏胃餵魏位渭謂尉慰衛瘟溫蚊文聞紋吻穩紊問嗡翁甕撾蝸渦窩我斡臥握沃巫嗚鎢烏汙誣屋無蕪梧吾吳毋武五捂午舞伍侮塢戊霧晤物勿務悟誤昔熙析西硒矽晰嘻吸錫犧稀息希悉膝夕惜熄烯溪汐犀檄襲席習媳喜銑洗系隙戲細瞎蝦匣霞轄暇峽俠狹下廈夏嚇掀鍁先仙鮮纖鹹賢銜舷閑涎弦嫌顯險現獻縣腺餡羨憲陷限線相廂鑲香箱襄湘鄉翔祥詳想響享項巷橡像向象蕭硝霄削哮囂銷消宵淆曉小孝校肖嘯笑效楔些歇蠍鞋協挾攜邪斜脅諧寫械卸蟹懈泄瀉謝屑薪芯鋅欣辛新忻心信釁星腥猩惺興刑型形邢行醒幸杏性姓兄兇胸匈洶雄熊休修羞朽嗅銹秀袖繡墟戌需虛噓須徐許蓄酗敘旭序畜恤絮婿緒續軒喧宣懸旋玄選癬眩絢靴薛學穴雪血勛熏循旬詢尋馴巡殉汛訓訊遜迅壓押鴉鴨呀丫芽牙蚜崖衙涯雅啞亞訝焉咽閹煙淹鹽嚴研蜒巖延言顏閻炎沿奄掩眼衍演艷堰燕厭硯雁唁彥焰宴諺驗殃央鴦秧楊揚佯瘍羊洋陽氧仰癢養樣漾邀腰妖瑤搖堯遙窯謠姚咬舀藥要耀椰噎耶爺野冶也頁掖業葉曳腋夜液壹壹醫揖銥依伊衣頤夷遺移儀胰疑沂宜姨彜椅蟻倚已乙矣以藝抑易邑屹億役臆逸肄疫亦裔意毅憶義益溢詣議誼譯異翼翌繹茵蔭因殷音陰姻吟銀淫寅飲尹引隱印英櫻嬰鷹應纓瑩螢營熒蠅迎贏盈影穎硬映喲擁傭臃癰庸雍踴蛹詠泳湧永恿勇用幽優悠憂尤由郵鈾猶油遊酉有友右佑釉誘又幼迂淤於盂榆虞愚輿余俞逾魚愉渝漁隅予娛雨與嶼禹宇語羽玉域芋郁籲遇喻峪禦愈欲獄育譽浴寓裕預豫馭鴛淵冤元垣袁原援轅園員圓猿源緣遠苑願怨院曰約越躍鑰嶽粵月悅閱耘雲鄖勻隕允運蘊醞暈韻孕匝砸雜栽哉災宰載再在咱攢暫贊贓臟葬遭糟鑿藻棗早澡蚤躁噪造皂竈燥責擇則澤賊怎增憎曾贈紮喳渣劄軋鍘閘眨柵榨咋乍炸詐摘齋宅窄債寨瞻氈詹粘沾盞斬輾嶄展蘸棧占戰站湛綻樟章彰漳張掌漲杖丈帳賬仗脹瘴障招昭找沼趙照罩兆肇召遮折哲蟄轍者鍺蔗這浙珍斟真甄砧臻貞針偵枕疹診震振鎮陣蒸掙睜征猙爭怔整拯正政幀癥鄭證芝枝支吱蜘知肢脂汁之織職直植殖執值侄址指止趾只旨紙誌摯擲至致置幟峙制智秩稚質炙痔滯治窒中盅忠鐘衷終種腫重仲眾舟周州洲謅粥軸肘帚咒皺宙晝驟珠株蛛朱豬諸誅逐竹燭煮拄矚囑主著柱助蛀貯鑄築住註祝駐抓爪拽專磚轉撰賺篆樁莊裝妝撞壯狀椎錐追贅墜綴諄準捉拙卓桌琢茁酌啄著灼濁茲咨資姿滋淄孜紫仔籽滓子自漬字鬃棕蹤宗綜總縱鄒走奏揍租足卒族祖詛阻組鉆纂嘴醉最罪尊遵昨左佐柞做作坐座錒噯嬡璦曖靄諳銨鵪媼驁鰲鈀唄鈑鴇齙鵯賁錛蓽嗶潷鉍篳蹕芐緶籩驃颮飆鏢鑣鰾儐繽檳殯臏鑌髕鬢稟餑鈸鵓鈽驂黲惻鍤儕釵囅諂讖蕆懺嬋驏覘禪鐔倀萇悵閶鯧硨傖諶櫬磣齔棖檉鋮鐺飭鴟銃儔幬讎芻絀躕釧愴綞鶉輟齪鶿蓯驄樅輳攛銼鹺噠韃駘紿殫賧癉簞讜碭襠燾鐙糴詆諦綈覿鏑巔鈿癲銚鯛鰈鋌銩崠鶇竇瀆櫝牘篤黷籪懟鐓燉躉鐸諤堊閼軛鋨鍔鶚顎顓鱷誒邇鉺鴯鮞鈁魴緋鐨鯡僨灃鳧駙紱紼賻麩鮒鰒釓賅尷搟紺戇睪誥縞鋯紇鎘潁亙賡綆鯁詬緱覯詁轂鈷錮鴣鵠鶻鴰摑詿摜鸛鰥獷匭劌媯檜鮭鱖袞緄鯀堝咼幗槨蟈鉿闞絎頡灝顥訶闔蠣黌訌葒閎鱟滸鶘驊樺鏵奐繯鍰鯇鰉詼薈噦澮繢琿暉諢餛閽鈥鑊訐詰薺嘰嚌驥璣覬齏磯羈蠆躋霽鱭鯽郟浹鋏鎵蟯諫縑戔戩瞼鶼筧鰹韉絳韁撟嶠鷦鮫癤頜鮚巹藎饉縉贐覲剄涇逕弳脛靚鬮鳩鷲詎屨櫸颶鉅鋦窶齟錈鐫雋譎玨皸剴塏愾愷鎧鍇龕閌鈧銬騍緙軻鈳錁頷齦鏗嚳鄶噲膾獪髖誆誑鄺壙纊貺匱蕢憒聵簣閫錕鯤蠐崍徠淶瀨賚睞錸癩籟嵐欖斕鑭襤閬鋃嘮嶗銠鐒癆鰳誄縲儷酈壢藶蒞蘺嚦邐驪縭櫪櫟轢礪鋰鸝癘糲躒靂鱺鱧蘞奩瀲璉殮褳襝鰱魎繚釕鷯藺廩檁轔躪綾欞蟶鯪瀏騮綹鎦鷚蘢瀧瓏櫳朧礱僂蔞嘍嶁鏤瘺耬螻髏壚擼嚕閭瀘淥櫨櫓轤輅轆氌臚鸕鷺艫鱸臠孌欒鸞鑾圇犖玀濼欏腡鏍櫚褸鋝嘸嘜嬤榪勱縵鏝顙鰻麼捫燜懣鍆羋謐獼禰澠靦黽緲繆閔緡謨驀饃歿鏌鉬鐃訥鈮鯢輦鯰蔦裊隉蘗囁顢躡苧嚀聹儂噥駑釹儺謳慪甌蹣皰轡紕羆鈹諞駢縹嬪釙鏷鐠蘄騏綺榿磧頎頏鰭僉蕁慳騫繾槧鈐嬙檣戧熗錆鏘鏹羥蹌誚譙蕎繰磽蹺愜鍥篋鋟撳鯖煢蛺巰賕蟣鰍詘嶇闃覷鴝詮綣輇銓闋闕愨蕘嬈橈飪軔嶸蠑縟銣顰蜆颯毿糝繅嗇銫穡鎩鯊釃訕姍騸釤鱔坰殤觴厙灄畬詵諗瀋謚塒蒔弒軾貰鈰鰣綬攄紓閂鑠廝駟緦鍶鷥藪餿颼鎪謖穌誶蓀猻嗩脧闥鉈鰨鈦鮐曇鉭錟頇儻餳鐋鏜韜鋱緹鵜闐糶齠鰷慟鈄釷摶飩籜鼉媧膃紈綰輞諉幃闈溈潿瑋韙煒鮪閿萵齷鄔廡憮嫵騖鵡鶩餼鬩璽覡硤莧薟蘚峴獫嫻鷴癇蠔秈躚薌餉驤緗饗嘵瀟驍綃梟簫褻擷紲纈陘滎饈鵂詡頊諼鉉鏇謔澩鱈塤潯鱘埡婭椏氬厴贗儼兗讞懨閆釅魘饜鼴煬軺鷂鰩靨謁鄴曄燁詒囈嶧飴懌驛縊軼貽釔鎰鐿瘞艤銦癮塋鶯縈鎣攖嚶瀅瀠瓔鸚癭頦罌鏞蕕銪魷傴俁諛諭蕷崳飫閾嫗紆覦歟鈺鵒鷸齬櫞鳶黿鉞鄆蕓惲慍紜韞殞氳瓚趲鏨駔賾嘖幘簀譖繒譫詔釗謫輒鷓湞縝楨軫賑禎鴆諍崢鉦錚箏騭櫛梔軹輊贄鷙螄縶躓躑觶鍾紂縐佇櫧銖囀饌顳騅縋諑鐲諮緇輜貲眥錙齜鯔傯諏騶鯫鏃纘躦鱒訁譾郤猛氹阪壟堖垵墊檾蕒葤蓧蒓菇槁摣咤唚哢噝噅撅劈謔襆嶴脊仿僥獁麅餘餷饊饢楞怵懍爿漵灩混濫瀦淡寧糸絝緔瑉梘棬案橰櫫軲軤賫膁腖飈糊煆溜湣渺碸滾瞘鈈鉕鋣銱鋥鋶鐦鐧鍩鍀鍃錇鎄鎇鎿鐝鑥鑹鑔穭鶓鶥鸌癧屙瘂臒襇繈耮顬蟎麯鮁鮃鮎鯗鯝鯴鱝鯿鰠鰵鱅鞽韝齇';\n}\nfunction qqPYStr()\n{\n  return '娿婀埃挨餀呃哀皑癌蔼婑銰碍嬡隘鞍氨鮟唵洝暗岸胺案肮昻盎凹獓熬翱仸謸奧襖奧妑捌朳朳妑笆仈疤妑菝柭靶妑耙坝覇罢妑皛柏咟擺佰敗湃稗癍癍搬扳瘢頒闆蝂汾絆柈瓣柈刅绊綁幇梆徬嫎垹蜯嫎蚌镑徬谤苞菢笣褒剝薄雹湺堡怉寶砲蕔懪豹鲍嚗柸碑蕜萆苝輩揹赑钡俻狈備惫焙被渀苯夲苯镚绷甭泵嘣逬腷嬶仳啚毣彼碧蓖幣滭斃毖币庇痹閉獙弊怭澼壁臂鐴陛鞭笾揙貶碥楩變卞辧辮辮猵摽滮鏢錶鳖憋莂癟彬斌濒璸濱摈娦栤窉眪秉饼炳疒並箥菠譒妭钵菠博勃搏铂箔伯帛舶脖膊渤泊訤峬卜誧卟埠芣鈽荹簿蔀怖攃猜裁財財財棌棌采埰婇蔡爘傪蛬殘慙參灿芲舱仺獊蔵懆鐰槽蓸愺厠憡側冊恻層竲揷紁茬嗏楂楂搽镲岔槎诧拆枈豺搀傪蝉镵谗瀍铲浐闡顫誯猖畼甞瑺萇偿肠廠敞畅晿倡趫莏鈔謿謿謿漅訬炒車扯徹掣沏瞮郴烥宸尘曟忱冗陳趁衬撐稱峸橙荿珵塖珵懲僜諴承浧骋秤阣痴歭匙肔呎肔肔恥歯侈呎哧趐斥炽茺沖蟲漴寵菗絒帱帱婤僽薵仇皗瞅忸溴初炪廚廚躇鋤雛蒢篨椘绌储矗搐触處遄巛瑏椽伝船遄賗疮囱幢床闖創欥炊腄腄箠舂椿錞脣錞蒓蠢戥焯疵垐濨雌辭濨瓷詞泚剌賜佽聪茐囱茐苁苁凑粗齰簇娖蹿篡窜凗慛慛脆瘁濢濢濢籿洊籿磋撮髊措挫措溚垯荅瘩咑汏槑歹傣瀻帶殆笩贷袋待曃怠耽泹冄啴郸掸狚狚氮泹惮惔诞弹疍當澢黨蕩澢叨搗稲箌島祷导菿稲悼檤盜徳嘚哋簦燈憕等簦凳郰諟彽嘀廸敵廸狄涤翟嫡抵疧哋渧苐渧弚递缔颠掂滇碘點敟靛垫電佃甸扂惦奠淀殿淍汈鵰蜩刁鋽铞銱蜩瓞嗲渫渫迭媟疉玎饤汀町嵿鼎锭萣忊丟崬笗蓳慬憅崬侗恫岽狪兠鬦乧跿荳浢哣嘟督毐渎獨渎陼睹帾荰镀肚喥喥妒鍴短葮葮斷葮碓兌隊怼墩沌壿敦頓囤沌盾遁掇哆哆奪垛躱朶跺舵剁媠憜睋睋鹅皒额讹皒悪苊扼遏鄂皒慁洏ル洱尒聶洱②贰潑藅筏浌疺阀琺珐藩汎畨飜樊矾钒瀿汎煩反返笵贩氾粄疺汸淓汸肪房汸妨汸汸汸倣婔悱啡飛萉厞诽吠腓廢沸曊棼酚玢氛汾妢墳焚汾帉奮妢忿濆粪仹崶猦蜂峯峯颩瘋烽漨溤漨讽唪鳯仏娝玞敷膚孵荴拂辐諨氟苻茯俘棴捊涪湢袱弗甫抚辅椨釜釡脯腑椨腐赴諨覆賦復傅苻阜父腹萯冨讣胕妇缚咐噶嗄姟妀漑鈣葢漑迀苷杆柑芉肝迀憾秆噉赣罓碙鋼矼釭罁罓港釭禞皋滈膏餻溔鎬鎬鎬哠滒戨擱戈鸽胳疙剨愅噶咯蛤阁隔铬個茖给艮茛畊浭菮羹埂耿梗笁糼糼塨龚栱匑厷営弖巩汞珙貢珙溝芶芶苟豞垢媾媾夠辜菇咕箍诂钴箛菇鼔咕蛊嗗唂骰诂顧凅雇剮呱剮寡啩啩乖枴怪菅関菅蒄觀涫菅潅遦潅遦洸広迋瑰規圭硅歸亀閨匦媿詭癸蓕匱蛫貴刽辊蔉輥煱漷國淉裹過铪骸陔嗨氦亥嗐骇酣憨邯韓浛凾寒凾諴癷翰撼捍猂憾悍猂汙漢夯忼航壕嚎濠毫郝恏秏呺滘哬曷嗬菏劾秝啝哬匼盉貉阂菏涸赫褐鹤哿潶嫼痕佷哏悢涥悙橫蘅恆轟晎烘渱鴻葓宖宖葒糇糇糇犼厚糇後苸苸唿瑚壺煳箶箶狐煳煳弧唬唬戶沍戶戶埖蕐澕磆磆畵劃囮話槐佪懷准壞歡寰桓還緩換漶喚痪豢焕涣宦抝巟巟曂磺蝗簧瑝瑝瑝瑝愰縨恍巟洃媈媈幑恢蛔冋毇珻慧卉惠珻贿秽浍烩匯讳诲浍荤涽殙魂渾婫豁萿钬焱镬戓惑靃貨禍击圾樭僟畸稽積箕肌饥迹噭讥鶏姬绩缉咭极棘辑籍潗彶喼疾汲旣嫉级哜凢脊己蓟技冀悸伎祭剂悸哜寄寂計汜旣忌漈继汜嘉枷夾佳傢咖荚颊贾曱钾徦糘價泇駕糘姧盬堅尖笺簡煎凲肩艰奷缄茧撿柬碱硷拣撿彅倹彅諴薦槛鉴践濺見楗箭件揵舰劍饯渐溅涧踺壃葁將槳茳彊蔣桨奨講匠醬夅蕉椒礁潐烄茭郊浇嬌嬌嚼搅铰矫侥腳烄角饺儌烄剿嘋酵轿珓嘂窖揭帹湝秸街阶截劫兯莖聙瞐鯨倞驚棈粳經丼檠憬頸靜璄擏傹徑痉靖獍競凈泂僒啾究糾玖韭玖灸勼氿厩慦舊臼舅咎僦咎鞠佝狙疽劇驹匊挶咀怇舉沮藂岠琚姖倶岠踞涺倶呴惧岠涺涓鵑涓惓眷捲涓瘚攫決崛崛嚼桔傑啑睫竭洁結解姐悈藉芥鎅徣夰疥诫屆凧荕釿唫妗珒噤緊婂僅殣琎靳晉噤菦烬锓浕勁荊兢覺吷吷蕝汮箘呁軍焄浚浚浚浚郡浚喀咖鉲咯閞揩揩剀慨刋堪勘坎歃看嫝嵻嵻摃忼囥忼栲洘栲靠坷岢柯錁溘錁萪涜嗑妸渇尅尅愙錁肻肻恳垦妔妔涳恐芤啌摳囗釦簆喖哭崫楛酷厙褲洿垮挎跨胯赽筷侩赽寬窾匡筺誑框纩洭纩況扝盔岿窺葵喹魁傀潰隗潰堒崐涃涃葀拡霩闊柆菈喇臘臘辣菈莱唻攋藍漤孄拦藍阑蘭瀾谰灠灠攋灠灡嚂哴蓈哴蓢蓢蓢烺崂崂窂荖佬粩絡絡崂嘞泺檑檑檑藞蔂儡垒檑叻類汨棱楞唥厘悡犁黎篱狸蓠漓理李里鲤礼莉荔吏栗婯疠励砾呖悡傈唎俐痢竝粒沥隶劦璃哩唡聅嗹涟镰廉憐涟帘潋臉嗹戀煉煉悢涼樑粱悢倆唡糧涼煷涼嫽窷獠療獠寥辽潦孒撂镣漻料烮煭烮挘獵啉啉潾霖臨鄰潾啉凛賃悋柃玪夌蕶齡玪伶玪夌靈夌玪領叧泠媹琉媹硫馏畱嚠媹蓅栁陸瀧聾茏茏窿湰泷泷茏溇溇嵝溇屚陋廬盧颅廬爐掳卤虏噜麓碌蕗蕗赂蔍潞禄淥陸戮馿焒焒佀膂履屢缕慮氯侓卛慮淥欒孌孿滦卵亂稤畧囵囵囵仑囵纶囵囉螺囉羅囉儸骡裸落詻詻絡媽嫲犸犸犸骉罵嫲嬤埋荬麥賣邁霡慲獌蠻慲嫚嫚嫚嫚谩笀汒吂氓杧漭貓罞锚毝罞铆茆茂萺萺邈貿庅坆枚烸酶苺湈莈葿媒镁烸羙昧寐妺媚閄悶們萠懞檬擝锰掹夢掹侎醚靡糜洣洣弥洣秘觅泌滵滵幂婂眠婂冕凂勉娩缅媔媌媌媌邈仯緲庿仯篾搣姄抿皿勄悯閩眀螟嘄佲洺掵繆嗼摹嚤嗼嗼嚤嚤嚤沬沬嗼嚜默沬嗼寞帞湈哞湈拇牡畝姆毋募暮募募慕朩朩睦牧穆嗱哪妠妠哪哪妠氖釢艿恧柰遖莮難灢撓悩悩閙淖迡浽禸嫰能妮霓淣狔胒抳沵嫟膩屰溺蔫秥姩碾撵捻淰娘酿茑杘涅嗫糵啮嗫镍涅您柠狞凝苧拧泞犇沑妞狃哝哝哝挵伮怓伮囡煖疟疟挪穤穤喏呃瓯瓯瓯耦嘔耦沤啪汃瓟啪啪琶啪棑簰棑湃哌襻瀋盤磐昐溿叛判乓厐臱耪眫拋垉铇垉垉垉垉怌胚掊裴婄婄蓜姵沛濆湓泙抨烹澎憉莑堋硼篷膨萠鵬唪湴坯砒噼纰怶噼琵毗啤裨疲怶苉痞僻庇譬萹媥爿騙彯慓瓢嘌潎潎拚頻貧闆娉乒岼泙泙岼憑甁评屛岥秡櫇嘙岥魄廹粕剖圤舗圤莆匍箁蒲逋圤圃普浦鐠曝鑤剘剘栖嘁悽⑦凄漆柒沏娸諆渏忮畦崎脐斉旗祈祁騏起豈阣佱晵契砌噐氣迄棄汽淇讫拤洽撁扦钎鉛芉迁簽仟嗛墘黔錢钳湔濳遣淺谴堑嵌芡嗛熗濸腔羌嫱嫱強熗橇锹毃佾喬趭喬喬巧鞘毳趬峭佾竅苆苆苴愜苆钦埐儭蓁噖懄芹檎噙寑沁圊輕氢傾卿凊擎啨氰凊頃埥庆琼窮偢坵邱浗浗囚媨泅趋岖蛆浀軀屈駆渠掫婜龋趣厾圜颧權醛葲洤痊拳吠券勧蒛炔瘸卻鹊榷確雀峮羣嘫嘫姌媣瓤壤攘孃讓隢擾隢惹慹壬芢亾涊韧姙認刄妊纫扔仍ㄖ戎茸嫆荣瀜嫆嫆嫆絨冗渘渘禸筎蠕濡孺洳媷乳肗叺褥軟朊惢瑞銳潤潤婼弜潵灑蕯腮鳃噻噻彡叁傘潵鎟鎟喪搔騒掃溲瑟脃澀潹僧莏唦摋閷乷纱傻倽繺篩曬姍苫杉屾剼煽釤閁陝擅赡膳僐訕傓缮墒傷啇賞晌仩尙裳哨哨哨燒芍汋韶仯哨卲袑奢赊虵舙舎赦摂射慑渉涻蔎砷妽呻訷裑堔娠訷鉮瀋谉嬸卙腎慎椮殸泩甥狌圱繩渻墭乗夝聖溮妷浉湤濕詩迉虱拾坧湁溡什喰蚀實識史矢使屍馶始鉽沶仕迣枾倳拭誓迣勢湜嗜噬适仕侍释飾氏巿恃厔視鉽荍掱渞垨壽涭售辤痩獣蔬枢梳姝杼瀭埱忬蔋疏書赎孰孰薯濐曙署蜀黍癙屬朮沭樹娕戍竪墅庶薮漱恕唰耍摔缞甩帥拴拴灀叒摤誰渁腄挩吮橓順橓説碩朔爍凘凘凘偲俬呞噝屍肆峙嗣④伺姒饲巳菘聳怂頌鎹浨讼誦溲艘擞嗽蘇酥俗嫊趚粟僳愬溯蹜訴歗酸祘匴虽陏隨浽髓誶嵗穗嬘隧祟孫損笋蓑逡逡縮鎖鎍鎻葰禢彵咜咜嗒獭挞蹋沓胎苔孡珆溙酞忲忲呔坍摊貪瘫滩墵檀痰憛谭談钽毯袒湠探嘆湠饧溏搪漟橖膛瑭溏倘躺淌趟烫匋濤瑫绦匋洮洮匋匋討套特駦駦庝誊珶剔踢锑諟趧渧渧軆櫕嚏惕珶珶屟兲婖瑱甶甛恬婖睓狣條迢眺朓萜鉄萜廰厛烃汀侹渟渟侹侹艇嗵秱酮瞳哃恫浵僮硧硧茼統痌偸投頭透凸禿湥圖徙蒤凃廜汢汢兎湍團蓷颓蹆蜕蹆蹆昋屯臀柂仛脫袉拕駞袉椭鋖沰唾挖哇蛙哇哇咓襪歪迯豌塆塆琓顽汍烷唍涴梚脕皖惋宛啘萭腕忹迋匄忹蛧暀忹朢莣妄媙蘶嶶佹韦違桅圍惟惟潙潍惟苇崣逶偉沩屗纬沬墛菋嵔媦嵔蘶莅渭媦墛墛衞瘟溫螡妏聞鈫沕穏紊問滃暡瓮挝窩煱窉莪斡臥楃沃莁嗚钨烏汚莁偓嘸蕪梧圄呉毋娬伍圄吘橆⑤侮坞戊霚晤粅匢務圄誤厝凞唽覀硒矽晰嘻扱唶犠浠息唏悉膝汐厝熄烯渓汐犀檄袭席習媳禧铣冼係隙戱細磍虾匣葭轄叚浹浹浹芐厦嗄圷锨锨姺佡鮮汘咸賢銜舷娴涎妶溓显険哯獻縣腺陥羨宪陥限線楿厢镶萫葙襄湘芗翔祥詳想姠啍頙巷潒潒姠潒簘硝霄萷涍嚣销消宵淆哓尒涍校肖啸笑效楔些歇蝎嚡拹挾携峫斜脅喈冩悈啣蟹澥绁瀉塮屑蕲芯锌俽厗噺忻杺信衅暒睲睲瑆興鉶侀形郉垳瑆圉莕悻狌兇兇洶匈汹雄熋咻俢饈朽溴琇莠袖绣歔戌濡歔歔湏俆汻蓄酗溆旮垿畜恤絮胥緒續蓒媗媗悬嫙玆選癣妶絢靴薛敩泬膤洫勛熏揗洵咰浔紃廵咰卂訓卂遜卂壓呷鴉鴨吖吖厊厊蚜崖衙涯蕥啞亞冴漹咽阉煙殗鹽嚴妍蜒啱娫訁顔閻烾沿奄殗眼衍湮滟堰嬿厭砚雁唁彦熖匽谚験殃姎鴦秧昜婸佯疡咩樣陽氧卬癢養樣羕撽崾岆愮愮尧滛窰愮烑吆舀葯婹耀倻噎倻爺嘢冶竾頁掖鄴旪曳腋液液①壹悘揖铱畩吚扆颐夷遗簃儀胰寲沂宜侇彝掎蚁掎巳乁矣姒兿抑昜邑屹億役臆逸肄疫洂裔嬑藙忆義谥溢诣议谊譯異翼翌绎筃荫洇殷堷隂絪荶檭婬夤飮吚吲陻茚渶璎璎鹰應缨瑩萤營荧蝇迊赢盁影颕哽眏喲砽砽臃痈滽澭踊蛹怺怺悀怺恿湧鼡豳沋滺沋尤甴邮铀沋怞遊酉洧伖祐祐釉诱叒孧扜菸纡盂榆虞愚舆悇揄揄渔揄揄渔隅予娯雨玙屿禹荢娪羽砡域芋喐吁喁喻峪御匬慾獄唷謍浴寓裕預豫驭鴛棩寃沅垣媴厡瑗辕圎園園猿羱緣逺夗蒝葾阮曰箹樾跞钥捳粵仴哾閱秐囩郧枃殒狁運藴酝暈韻夃匝咂卆酨酨災宰酨侢茬洎瓒暫瓒賍賍髒蹧蹧凿藻栆皁璪蚤璪璪慥唣灶璪嫧萚荝澤賊怎熷璔嶒熷紥喳碴札轧铡閘喳栅搾咋咋怍怍擿斋宅搾債寨瞻毡詹秥跕盏斬辗崭蹍蘸棧颭戰跕偡綻樟嶂彰漳張礃涨粀扙賬账扙胀瘴障妱昭找沼趙燳罩狣肇佋嗻菥悊蛰辙鍺锗蔗適淅沴斟嫃甄砧臻浈針浈忱疹沴震桭鎮俥篜諍諍姃狰踭姃整拯囸炡帧症鄭姃芷汥伎汥倁倁汥脂汥と枳轵矗淔殖秇惪侄歮栺圵趾呮旨衹梽挚掷臸臸置帜峙淛潪秩雉質炙痔滞菭窒狆盅筗妕衷蔠種妕偅仲衆洀淍詶詶诌粥轴肘帚咒皺宙昼骤咮株咮咮蕏渚诛豩艸烛煑拄瞩瞩炷著炷莇蛀贮铸茿炷炷柷驻抓爪跩抟磚啭撰賺篆桩圧裝妝獞匨匨椎锥搥赘墜綴谆痽浞炪婥棹琢茁酌啄着灼浊兹恣粢恣稵淄孜橴仔籽滓ふ洎渍牸鬃琮琮崈琮縂枞邹趉楱楱蒩娖卒蔟袓蒩蒩蒩鑽纂觜酔朂嶵澊噂葃咗佐柞莋莋唑蓙錒噯嬡璦曖靄諳銨鵪媼驁鰲鈀唄鈑鴇齙鵯賁錛蓽嗶潷鉍篳蹕芐緶籩驃颮飆鏢鑣鰾儐繽檳殯臏鑌髕鬢稟餑鈸鵓鈽驂黲惻鍤儕釵囅諂讖蕆懺嬋驏覘禪鐔倀萇悵閶鯧硨傖諶櫬磣齔棖檉鋮鐺飭鴟銃儔幬讎芻絀躕釧愴綞鶉輟齪鶿蓯驄樅輳攛銼鹺噠韃駘紿殫賧癉簞讜碭襠燾鐙糴詆諦綈覿鏑巔鈿癲銚鯛鰈鋌銩崠鶇竇瀆櫝牘篤黷籪懟鐓燉躉鐸諤堊閼軛鋨鍔鶚顎顓鱷誒邇鉺鴯鮞鈁魴緋鐨鯡僨灃鳧駙紱紼賻麩鮒鰒釓賅尷搟紺戇睪誥縞鋯紇鎘潁亙賡綆鯁詬緱覯詁轂鈷錮鴣鵠鶻鴰摑詿摜鸛鰥獷匭劌媯檜鮭鱖袞緄鯀堝咼幗槨蟈鉿闞絎頡灝顥訶闔蠣黌訌葒閎鱟滸鶘驊樺鏵奐繯鍰鯇鰉詼薈噦澮繢琿暉諢餛閽鈥鑊訐詰薺嘰嚌驥璣覬齏磯羈蠆躋霽鱭鯽郟浹鋏鎵蟯諫縑戔戩瞼鶼筧鰹韉絳韁撟嶠鷦鮫癤頜鮚巹藎饉縉贐覲剄涇逕弳脛靚鬮鳩鷲詎屨櫸颶鉅鋦窶齟錈鐫雋譎玨皸剴塏愾愷鎧鍇龕閌鈧銬騍緙軻鈳錁頷齦鏗嚳鄶噲膾獪髖誆誑鄺壙纊貺匱蕢憒聵簣閫錕鯤蠐崍徠淶瀨賚睞錸癩籟嵐欖斕鑭襤閬鋃嘮嶗銠鐒癆鰳誄縲儷酈壢藶蒞蘺嚦邐驪縭櫪櫟轢礪鋰鸝癘糲躒靂鱺鱧蘞奩瀲璉殮褳襝鰱魎繚釕鷯藺廩檁轔躪綾欞蟶鯪瀏騮綹鎦鷚蘢瀧瓏櫳朧礱僂蔞嘍嶁鏤瘺耬螻髏壚擼嚕閭瀘淥櫨櫓轤輅轆氌臚鸕鷺艫鱸臠孌欒鸞鑾圇犖玀濼欏腡鏍櫚褸鋝嘸嘜嬤榪勱縵鏝顙鰻麼捫燜懣鍆羋謐獼禰澠靦黽緲繆閔緡謨驀饃歿鏌鉬鐃訥鈮鯢輦鯰蔦裊隉蘗囁顢躡苧嚀聹儂噥駑釹儺謳慪甌蹣皰轡紕羆鈹諞駢縹嬪釙鏷鐠蘄騏綺榿磧頎頏鰭僉蕁慳騫繾槧鈐嬙檣戧熗錆鏘鏹羥蹌誚譙蕎繰磽蹺愜鍥篋鋟撳鯖煢蛺巰賕蟣鰍詘嶇闃覷鴝詮綣輇銓闋闕愨蕘嬈橈飪軔嶸蠑縟銣顰蜆颯毿糝繅嗇銫穡鎩鯊釃訕姍騸釤鱔坰殤觴厙灄畬詵諗瀋謚塒蒔弒軾貰鈰鰣綬攄紓閂鑠廝駟緦鍶鷥藪餿颼鎪謖穌誶蓀猻嗩脧闥鉈鰨鈦鮐曇鉭錟頇儻餳鐋鏜韜鋱緹鵜闐糶齠鰷慟鈄釷摶飩籜鼉媧膃紈綰輞諉幃闈溈潿瑋韙煒鮪閿萵齷鄔廡憮嫵騖鵡鶩餼鬩璽覡硤莧薟蘚峴獫嫻鷴癇蠔秈躚薌餉驤緗饗嘵瀟驍綃梟簫褻擷紲纈陘滎饈鵂詡頊諼鉉鏇謔澩鱈塤潯鱘埡婭椏氬厴贗儼兗讞懨閆釅魘饜鼴煬軺鷂鰩靨謁鄴曄燁詒囈嶧飴懌驛縊軼貽釔鎰鐿瘞艤銦癮塋鶯縈鎣攖嚶瀅瀠瓔鸚癭頦罌鏞蕕銪魷傴俁諛諭蕷崳飫閾嫗紆覦歟鈺鵒鷸齬櫞鳶黿鉞鄆蕓惲慍紜韞殞氳瓚趲鏨駔賾嘖幘簀譖繒譫詔釗謫輒鷓湞縝楨軫賑禎鴆諍崢鉦錚箏騭櫛梔軹輊贄鷙螄縶躓躑觶鍾紂縐佇櫧銖囀饌顳騅縋諑鐲諮緇輜貲眥錙齜鯔傯諏騶鯫鏃纘躦鱒訁譾郤猛氹阪壟堖垵墊檾蕒葤蓧蒓菇槁摣咤唚哢噝噅撅劈謔襆嶴脊仿僥獁麅餘餷饊饢楞怵懍爿漵灩混濫瀦淡寧糸絝緔瑉梘棬案橰櫫軲軤賫膁腖飈糊煆溜湣渺碸滾瞘鈈鉕鋣銱鋥鋶鐦鐧鍩鍀鍃錇鎄鎇鎿鐝鑥鑹鑔穭鶓鶥鸌癧屙瘂臒襇繈耮顬蟎麯鮁鮃鮎鯗鯝鯴鱝鯿鰠鰵鱅鞽韝齇';\n}\nfunction traditionalized(cc) {\n  var str = '';\n  if (cc) {\n    for (var i = 0; i < cc.length; i++) {\n      if (simpPYStr().indexOf(cc.charAt(i)) != -1)\n      str += ftPYStr().charAt(simpPYStr().indexOf(cc.charAt(i)));else\n      if (qqPYStr().indexOf(cc.charAt(i)) != -1)\n      str += ftPYStr().charAt(qqPYStr().indexOf(cc.charAt(i)));else\n\n      str += cc.charAt(i);\n    }\n  }\n  return str;\n}\nfunction simplized(cc) {\n  var str = '';\n  if (cc) {\n    for (var i = 0; i < cc.length; i++) {\n      if (ftPYStr().indexOf(cc.charAt(i)) != -1)\n      str += simpPYStr().charAt(ftPYStr().indexOf(cc.charAt(i)));else\n      if (qqPYStr().indexOf(cc.charAt(i)) != -1)\n      str += simpPYStr().charAt(qqPYStr().indexOf(cc.charAt(i)));else\n\n      str += cc.charAt(i);\n    }\n  }\n  return str;\n}\nfunction qqlized(cc) {\n  var str = '';\n  for (var i = 0; i < cc.length; i++) {\n    if (ftPYStr().indexOf(cc.charAt(i)) != -1)\n    str += qqPYStr().charAt(ftPYStr().indexOf(cc.charAt(i)));else\n    if (simpPYStr().indexOf(cc.charAt(i)) != -1)\n    str += qqPYStr().charAt(simpPYStr().indexOf(cc.charAt(i)));else\n\n    str += cc.charAt(i);\n  }\n  return str;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvdXRpbHMuanMiXSwibmFtZXMiOlsiZGF0ZVRvU3RyIiwiZGF0ZSIsIkRhdGUiLCJoaCIsImdldEhvdXJzIiwibW0iLCJnZXRNaW51dGVzIiwic2ltcFBZU3RyIiwiZnRQWVN0ciIsInFxUFlTdHIiLCJ0cmFkaXRpb25hbGl6ZWQiLCJjYyIsInN0ciIsImkiLCJsZW5ndGgiLCJpbmRleE9mIiwiY2hhckF0Iiwic2ltcGxpemVkIiwicXFsaXplZCJdLCJtYXBwaW5ncyI6InFLQUFBOzs7QUFHTyxTQUFTQSxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUMvQixNQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDN0IsV0FBTyxFQUFQO0FBQ0E7QUFDREEsTUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU0QsSUFBVCxDQUFQO0FBQ0EsTUFBSUUsRUFBRSxHQUFHRixJQUFJLENBQUNHLFFBQUwsRUFBVDtBQUNBLE1BQUlDLEVBQUUsR0FBR0osSUFBSSxDQUFDSyxVQUFMLEVBQVQ7QUFDQSxNQUFJSCxFQUFFLEdBQUMsRUFBUCxFQUFXO0FBQ1ZBLE1BQUUsR0FBRyxNQUFNQSxFQUFYO0FBQ0E7QUFDRCxNQUFJRSxFQUFFLEdBQUMsRUFBUCxFQUFXO0FBQ1ZBLE1BQUUsR0FBRyxNQUFNQSxFQUFYO0FBQ0E7QUFDRCxTQUFPRixFQUFFLEdBQUcsR0FBTCxHQUFXRSxFQUFsQjtBQUNBO0FBQ0QsU0FBU0UsU0FBVCxHQUFvQjtBQUNoQixTQUFPLDBySkFBUDtBQUNIO0FBQ0QsU0FBU0MsT0FBVCxHQUFrQjtBQUNkLFNBQU8sMHJKQUFQO0FBQ0g7QUFDRCxTQUFTQyxPQUFUO0FBQ0E7QUFDQSxTQUFPLDBySkFBUDtBQUNDO0FBQ00sU0FBU0MsZUFBVCxDQUF5QkMsRUFBekIsRUFBNEI7QUFDbEMsTUFBSUMsR0FBRyxHQUFDLEVBQVI7QUFDQSxNQUFJRCxFQUFKLEVBQVE7QUFDUCxTQUFJLElBQUlFLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ0YsRUFBRSxDQUFDRyxNQUFqQixFQUF3QkQsQ0FBQyxFQUF6QixFQUE0QjtBQUN4QixVQUFHTixTQUFTLEdBQUdRLE9BQVosQ0FBb0JKLEVBQUUsQ0FBQ0ssTUFBSCxDQUFVSCxDQUFWLENBQXBCLEtBQW1DLENBQUMsQ0FBdkM7QUFDSUQsU0FBRyxJQUFFSixPQUFPLEdBQUdRLE1BQVYsQ0FBaUJULFNBQVMsR0FBR1EsT0FBWixDQUFvQkosRUFBRSxDQUFDSyxNQUFILENBQVVILENBQVYsQ0FBcEIsQ0FBakIsQ0FBTCxDQURKO0FBRUssVUFBR0osT0FBTyxHQUFHTSxPQUFWLENBQWtCSixFQUFFLENBQUNLLE1BQUgsQ0FBVUgsQ0FBVixDQUFsQixLQUFpQyxDQUFDLENBQXJDO0FBQ0RELFNBQUcsSUFBRUosT0FBTyxHQUFHUSxNQUFWLENBQWlCUCxPQUFPLEdBQUdNLE9BQVYsQ0FBa0JKLEVBQUUsQ0FBQ0ssTUFBSCxDQUFVSCxDQUFWLENBQWxCLENBQWpCLENBQUwsQ0FEQzs7QUFHREQsU0FBRyxJQUFFRCxFQUFFLENBQUNLLE1BQUgsQ0FBVUgsQ0FBVixDQUFMO0FBQ1A7QUFDRDtBQUNFLFNBQU9ELEdBQVA7QUFDSDtBQUNNLFNBQVNLLFNBQVQsQ0FBbUJOLEVBQW5CLEVBQXNCO0FBQ3pCLE1BQUlDLEdBQUcsR0FBQyxFQUFSO0FBQ0gsTUFBSUQsRUFBSixFQUFRO0FBQ1AsU0FBSSxJQUFJRSxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNGLEVBQUUsQ0FBQ0csTUFBakIsRUFBd0JELENBQUMsRUFBekIsRUFBNEI7QUFDeEIsVUFBR0wsT0FBTyxHQUFHTyxPQUFWLENBQWtCSixFQUFFLENBQUNLLE1BQUgsQ0FBVUgsQ0FBVixDQUFsQixLQUFpQyxDQUFDLENBQXJDO0FBQ0lELFNBQUcsSUFBRUwsU0FBUyxHQUFHUyxNQUFaLENBQW1CUixPQUFPLEdBQUdPLE9BQVYsQ0FBa0JKLEVBQUUsQ0FBQ0ssTUFBSCxDQUFVSCxDQUFWLENBQWxCLENBQW5CLENBQUwsQ0FESjtBQUVLLFVBQUdKLE9BQU8sR0FBR00sT0FBVixDQUFrQkosRUFBRSxDQUFDSyxNQUFILENBQVVILENBQVYsQ0FBbEIsS0FBaUMsQ0FBQyxDQUFyQztBQUNERCxTQUFHLElBQUVMLFNBQVMsR0FBR1MsTUFBWixDQUFtQlAsT0FBTyxHQUFHTSxPQUFWLENBQWtCSixFQUFFLENBQUNLLE1BQUgsQ0FBVUgsQ0FBVixDQUFsQixDQUFuQixDQUFMLENBREM7O0FBR0RELFNBQUcsSUFBRUQsRUFBRSxDQUFDSyxNQUFILENBQVVILENBQVYsQ0FBTDtBQUNQO0FBQ0Q7QUFDRSxTQUFPRCxHQUFQO0FBQ0g7QUFDRCxTQUFTTSxPQUFULENBQWlCUCxFQUFqQixFQUFvQjtBQUNoQixNQUFJQyxHQUFHLEdBQUMsRUFBUjtBQUNBLE9BQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDRixFQUFFLENBQUNHLE1BQWpCLEVBQXdCRCxDQUFDLEVBQXpCLEVBQTRCO0FBQ3hCLFFBQUdMLE9BQU8sR0FBR08sT0FBVixDQUFrQkosRUFBRSxDQUFDSyxNQUFILENBQVVILENBQVYsQ0FBbEIsS0FBaUMsQ0FBQyxDQUFyQztBQUNJRCxPQUFHLElBQUVILE9BQU8sR0FBR08sTUFBVixDQUFpQlIsT0FBTyxHQUFHTyxPQUFWLENBQWtCSixFQUFFLENBQUNLLE1BQUgsQ0FBVUgsQ0FBVixDQUFsQixDQUFqQixDQUFMLENBREo7QUFFSyxRQUFHTixTQUFTLEdBQUdRLE9BQVosQ0FBb0JKLEVBQUUsQ0FBQ0ssTUFBSCxDQUFVSCxDQUFWLENBQXBCLEtBQW1DLENBQUMsQ0FBdkM7QUFDREQsT0FBRyxJQUFFSCxPQUFPLEdBQUdPLE1BQVYsQ0FBaUJULFNBQVMsR0FBR1EsT0FBWixDQUFvQkosRUFBRSxDQUFDSyxNQUFILENBQVVILENBQVYsQ0FBcEIsQ0FBakIsQ0FBTCxDQURDOztBQUdERCxPQUFHLElBQUVELEVBQUUsQ0FBQ0ssTUFBSCxDQUFVSCxDQUFWLENBQUw7QUFDUDtBQUNELFNBQU9ELEdBQVA7QUFDSCIsImZpbGUiOiIyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBkYXRl6L2s5YyW5Li6aGg6bW1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXRlVG9TdHIoZGF0ZSkge1xyXG5cdGlmICh0eXBlb2YgZGF0ZSAhPT0gJ251bWJlcicpIHtcclxuXHRcdHJldHVybiAnJ1xyXG5cdH1cclxuXHRkYXRlID0gbmV3IERhdGUoZGF0ZSlcclxuXHRsZXQgaGggPSBkYXRlLmdldEhvdXJzKClcclxuXHRsZXQgbW0gPSBkYXRlLmdldE1pbnV0ZXMoKVxyXG5cdGlmIChoaDwxMCkge1xyXG5cdFx0aGggPSAnMCcgKyBoaFxyXG5cdH1cclxuXHRpZiAobW08MTApIHtcclxuXHRcdG1tID0gJzAnICsgbW1cclxuXHR9XHJcblx0cmV0dXJuIGhoICsgJzonICsgbW1cclxufVxyXG5mdW5jdGlvbiBzaW1wUFlTdHIoKXtcclxuICAgIHJldHVybiAn5ZWK6Zi/5Z+D5oyo5ZOO5ZSJ5ZOA55qR55mM6JS855+u6Im+56KN54ix6ZqY6Z6N5rCo5a6J5L+65oyJ5pqX5bK46IO65qGI6IKu5piC55uO5Ye55pWW54as57+x6KKE5YKy5aWl5oeK5r6z6Iqt5o2M5omS5Y+t5ZCn56yG5YWr55ak5be05ouU6LeL6Z225oqK6ICZ5Z2d6Zy4572i54i455m95p+P55m+5pGG5L2w6LSl5ouc56iX5paR54+t5pCs5omz6Iis6aKB5p2/54mI5omu5ouM5Ly055Oj5Y2K5Yqe57uK6YKm5biu5qKG5qac6IaA57uR5qOS56OF6JqM6ZWR5YKN6LCk6Iue6IOe5YyF6KSS5Yml6JaE6Zu55L+d5aCh6aWx5a6d5oqx5oql5pq06LG56bKN54iG5p2v56KR5oKy5Y2R5YyX6L6I6IOM6LSd6ZKh5YCN54uI5aSH5oOr54SZ6KKr5aWU6Iuv5pys56yo5bSp57u355St5rO16Lmm6L+46YC86by75q+U6YSZ56yU5b2856Kn6JOW6JS95q+V5q+Z5q+W5biB5bqH55e56Zet5pWd5byK5b+F6L6f5aOB6IeC6YG/6Zmb6Z6t6L6557yW6LSs5omB5L6/5Y+Y5Y2e6L6o6L6p6L6r6YGN5qCH5b2q6IaY6KGo6bOW5oaL5Yir55iq5b2s5paM5r+S5ruo5a6+5pGI5YW15Yaw5p+E5LiZ56eJ6aW854Kz55eF5bm254676I+g5pKt5ouo6ZK15rOi5Y2a5YuD5pCP6ZOC566U5Lyv5bib6Ii26ISW6IaK5rik5rOK6amz5o2V5Y2c5ZO66KGl5Z+g5LiN5biD5q2l57C/6YOo5oCW5pOm54yc6KOB5p2Q5omN6LSi552s6Lip6YeH5b2p6I+c6JSh6aSQ5Y+C6JqV5q6L5oOt5oOo54G/6IuN6Iix5LuT5rKn6JeP5pON57OZ5qe95pu56I2J5Y6V562W5L6n5YaM5rWL5bGC6Lmt5o+S5Y+J6Iys6Iy25p+l56K05pC95a+f5bKU5beu6K+n5ouG5p+06LG65pCA5o666J2J6aaL6LCX57yg6ZOy5Lqn6ZiQ6aKk5piM54yW5Zy65bCd5bi46ZW/5YG/6IKg5Y6C5pWe55WF5ZSx5YCh6LaF5oqE6ZKe5pyd5Ziy5r2u5bei5ZC154KS6L2m5omv5pKk5o6j5b275r6I6YO06Iej6L6w5bCY5pmo5b+x5rKJ6ZmI6LaB6KGs5pKR56ew5Z+O5qmZ5oiQ5ZGI5LmY56iL5oOp5r6E6K+a5om/6YCe6aqL56ek5ZCD55e05oyB5YyZ5rGg6L+f5byb6amw6IC76b2/5L6I5bC66LWk57+F5pal54K95YWF5Yay6Jmr5bSH5a6g5oq96YWs55W06LiM56ig5oSB56255LuH57u4556F5LiR6Iet5Yid5Ye65qmx5Y6o6LqH6ZSE6ZuP5ruB6Zmk5qWa56GA5YKo55+X5pCQ6Kem5aSE5o+j5bed56m/5qS95Lyg6Ii55ZaY5Liy55au56qX5bmi5bqK6Zev5Yib5ZC554KK5o226ZSk5Z6C5pil5qS/6YaH5ZSH5rez57qv6KCi5oiz57uw55a16Iyo56OB6ZuM6L6e5oWI55O36K+N5q2k5Yi66LWQ5qyh6IGq6JGx5Zux5YyG5LuO5Lib5YeR57KX6YaL57CH5L+D6Lm/56+h56qc5pGn5bSU5YKs6ISG55iB57K55res57+g5p2R5a2Y5a+456OL5pKu5pCT5o6q5oyr6ZSZ5pCt6L6+562U55ip5omT5aSn5ZGG5q255YKj5oi05bim5q6G5Luj6LS36KKL5b6F6YCu5oCg6IC95ouF5Li55Y2V6YO45o646IOG5pem5rCu5L2G5oOu5reh6K+e5by56JuL5b2T5oyh5YWa6I2h5qGj5YiA5o2j6LmI5YCS5bKb56W35a+85Yiw56i75oK86YGT55uX5b635b6X55qE6Lms54Gv55m7562J556q5Yez6YKT5aCk5L2O5ru06L+q5pWM56yb54uE5rak57+f5auh5oq15bqV5Zyw6JKC56ys5bid5byf6YCS57yU6aKg5o6C5ruH56KY54K55YW46Z2b5Z6r55S15L2D55S45bqX5oOm5aWg5reA5q6/56KJ5Y+86ZuV5YeL5YiB5o6J5ZCK6ZKT6LCD6LeM54i556Kf6J226L+t6LCN5Y+g5LiB55uv5Y+u6ZKJ6aG26byO6ZSt5a6a6K6i5Lii5Lic5Yas6JGj5oeC5Yqo5qCL5L6X5oGr5Ya75rSe5YWc5oqW5paX6Zmh6LGG6YCX55eY6YO9552j5q+S54qK54us6K+75aC155256LWM5p2c6ZWA6IKa5bqm5rih5aaS56uv55+t6ZS75q615pat57yO5aCG5YWR6Zif5a+55aKp5ZCo6Lmy5pWm6aG/5Zuk6ZKd55u+6YGB5o6H5ZOG5aSa5aS65Z6b6Lqy5py16Le66Ii15YmB5oOw5aCV6Ju+5bOo6bmF5L+E6aKd6K655ail5oG25Y6E5om86YGP6YSC6aW/5oGp6ICM5YS/6ICz5bCU6aW15rSx5LqM6LSw5Y+R572a562P5LyQ5LmP6ZiA5rOV54+Q6Jep5biG55Wq57+75qiK55++6ZKS57mB5Yeh54Om5Y+N6L+U6IyD6LSp54qv6aWt5rOb5Z2K6Iqz5pa56IKq5oi/6Ziy5aao5Lu/6K6/57q65pS+6I+y6Z2e5ZWh6aOe6IKl5Yyq6K+95ZCg6IK65bqf5rK46LS56Iqs6YWa5ZCp5rCb5YiG57q35Z2f54Sa5rG+57KJ5aWL5Lu95b+/5oSk57Kq5Liw5bCB5p6r6JyC5bOw6ZSL6aOO55av54O96YCi5Yav57yd6K695aWJ5Yek5L2b5ZCm5aSr5pW36IKk5a215om25ouC6L6Q5bmF5rCf56ym5LyP5L+Y5pyN5rWu5raq56aP6KKx5byX55Sr5oqa6L6F5L+v6Yec5pan6ISv6IWR5bqc6IWQ6LW05Ymv6KaG6LWL5aSN5YKF5LuY6Zic54i26IW56LSf5a+M6K6j6ZmE5aaH57ya5ZKQ5Zm25ZiO6K+l5pS55qaC6ZKZ55uW5rqJ5bmy55SY5p2G5p+R56u/6IKd6LW25oSf56eG5pWi6LWj5YaI5Yia6ZKi57y46IKb57qy5bKX5riv5p2g56+Z55qL6auY6IaP576U57OV5pCe6ZWQ56i/5ZGK5ZOl5q2M5pCB5oiI6bi96IOz55aZ5Ymy6Z2p6JGb5qC86Juk6ZiB6ZqU6ZOs5Liq5ZCE57uZ5qC56Lef6ICV5pu05bqa57655Z+C6IC/5qKX5bel5pS75Yqf5oGt6b6a5L6b6Lqs5YWs5a6r5byT5bep5rGe5oux6LSh5YWx6ZKp5Yu+5rKf6Iuf54uX5Z6i5p6E6LSt5aSf6L6c6I+H5ZKV566N5Lyw5rK95a2k5aeR6byT5Y+k6JuK6aqo6LC36IKh5pWF6aG+5Zu66ZuH5Yiu55Oc5YmQ5a+h5oyC6KSC5LmW5ouQ5oCq5qO65YWz5a6Y5Yag6KeC566h6aaG572Q5oOv54GM6LSv5YWJ5bm/6YCb55Gw6KeE5Zyt56GF5b2S6b6f6Ze66L2o6ay86K+h55m45qGC5p+c6Leq6LS15Yi96L6K5rua5qON6ZSF6YOt5Zu95p6c6KO56L+H5ZOI6aq45a2p5rW35rCm5Lql5a6z6aqH6YWj5oao6YKv6Z+p5ZCr5ra15a+S5Ye95ZaK572V57+w5pK85o2N5pex5oa+5oKN54SK5rGX5rGJ5aSv5p2t6Iiq5aOV5ZqO6LGq5q+r6YOd5aW96ICX5Y+35rWp5ZG15Zad6I236I+P5qC456a+5ZKM5L2V5ZCI55uS6LKJ6ZiC5rKz5ra46LWr6KSQ6bmk6LS65Zi/6buR55eV5b6I54ug5oGo5ZO85Lqo5qiq6KGh5oGS6L2w5ZOE54OY6Jm56bi/5rSq5a6P5byY57qi5ZaJ5L6v54y05ZC85Y6a5YCZ5ZCO5ZG85LmO5b+955Ga5aO26JGr6IOh6J2054uQ57OK5rmW5byn6JmO5ZSs5oqk5LqS5rKq5oi36Iqx5ZOX5Y2O54y+5ruR55S75YiS5YyW6K+d5qeQ5b6K5oCA5reu5Z2P5qyi546v5qGT6L+Y57yT5o2i5oKj5ZSk55eq6LGi54SV5raj5a6m5bm76I2S5oWM6buE56O66J2X57Cn55qH5Yew5oO254WM5pmD5bmM5oGN6LCO54Gw5oyl6L6J5b695oGi6JuU5Zue5q+B5oKU5oWn5Y2J5oOg5pmm6LS/56e95Lya54Op5rGH6K6z6K+y57uY6I2k5piP5ama6a2C5rWR5re36LGB5rS75LyZ54Gr6I635oiW5oOR6ZyN6LSn56W45Ye75Zy+5Z+65py655W456i956ev566V6IKM6aWl6L+55r+A6K6l6bih5aes57up57yJ5ZCJ5p6B5qOY6L6R57GN6ZuG5Y+K5oCl55a+5rGy5Y2z5auJ57qn5oyk5Yeg6ISK5bex6JOf5oqA5YaA5a2j5LyO56Wt5YmC5oK45rWO5a+E5a+C6K6h6K6w5pei5b+M6ZmF57un57qq5ZiJ5p635aS55L2z5a625Yqg6I2a6aKK6LS+55Sy6ZK+5YGH56i85Lu35p626am+5auB5q2855uR5Z2a5bCW56y66Ze054WO5YW86IKp6Imw5aW457yE6Iyn5qOA5p+s56Kx56G35ouj5o2h566A5L+t5Ymq5YeP6I2Q5qeb6Ym06Le16LSx6KeB6ZSu566t5Lu25YGl6Iiw5YmR6aWv5riQ5rqF5ran5bu65YO15aec5bCG5rWG5rGf55aG6JKL5qGo5aWW6K6y5Yyg6YWx6ZmN6JWJ5qSS56SB54Sm6IO25Lqk6YOK5rWH6aqE5aiH5Zq85pCF6ZOw55+r5L6l6ISa54uh6KeS6aW657y057ue5Ym/5pWZ6YW16L2/6L6D5Y+r56qW5o+t5o6l55qG56e46KGX6Zi25oiq5Yqr6IqC6IyO552b5pm26bK45Lqs5oOK57K+57Kz57uP5LqV6K2m5pmv6aKI6Z2Z5aKD5pWs6ZWc5b6E55eJ6Z2W56uf56ue5YeA54Kv56qY5o+q56m257qg546W6Z+t5LmF54G45Lmd6YWS5Y6p5pWR5pen6Ie86IiF5ZKO5bCx55aa6Z6g5ouY54uZ55a95bGF6am56I+K5bGA5ZKA55+p5Li+5rKu6IGa5ouS5o2u5beo5YW36Led6Lie6ZSv5L+x5Y+l5oOn54Ks5Ymn5o2Q6bmD5aif5YCm55y35Y2357ui5pKF5pSr5oqJ5o6Y5YCU54i15qGU5p2w5o23552r56ut5rSB57uT6Kej5aeQ5oiS6JeJ6Iql55WM5YCf5LuL55al6K+r5bGK5be+562L5pak6YeR5LuK5rSl6KWf57Sn6ZSm5LuF6LCo6L+b6Z2z5pmL56aB6L+R54Os5rW45bC95Yqy6I2G5YWi6KeJ5Yaz6K+A57ud5Z2H6I+M6ZKn5Yab5ZCb5bO75L+K56uj5rWa6YOh6aqP5ZaA5ZKW5Y2h5ZKv5byA5o+p5qW35Yev5oWo5YiK5aCq5YuY5Z2O56CN55yL5bq35oW357Og5omb5oqX5Lqi54KV6ICD5ou354Ok6Z2g5Z236Iub5p+v5qO156OV6aKX56eR5aOz5ZKz5Y+v5ri05YWL5Yi75a6i6K++6IKv5ZWD5Z6m5oGz5Z2R5ZCt56m65oGQ5a2U5o6n5oqg5Y+j5omj5a+H5p6v5ZOt56qf6Ium6YW35bqT6KOk5aS45Z6u5oyO6Leo6IOv5Z2X56235L6p5b+r5a695qy+5Yyh562Q54uC5qGG55+/55y25pe35Ya15LqP55uU5bK/56ql6JG15aWO6a2B5YKA6aaI5oSn5rqD5Z2k5piG5o2G5Zuw5ous5omp5buT6ZiU5Z6D5ouJ5ZaH6Jyh6IWK6L6j5ZWm6I6x5p2l6LWW6JOd5amq5qCP5oum56+u6ZiR5YWw5r6c6LCw5o+96KeI5oeS57yG54OC5rul55CF5qaU54u85buK6YOO5pyX5rWq5o2e5Yqz54mi6ICB5L2s5ael6YWq54OZ5rad5YuS5LmQ6Zu36ZWt6JW+56OK57Sv5YSh5Z6S5pOC6IKL57G75rOq5qOx5qWe5Ya35Y6Y5qKo54qB6buO56+x54u456a75ryT55CG5p2O6YeM6bKk56S86I6J6I2U5ZCP5qCX5Li95Y6J5Yqx56C+5Y6G5Yip5YKI5L6L5L+Q55ei56uL57KS5rKl6Zq25Yqb55KD5ZOp5L+p6IGU6I6y6L+e6ZWw5buJ5oCc5raf5biY5pWb6IS46ZO+5oGL54K857uD57Ku5YeJ5qKB57Kx6Imv5Lik6L6G6YeP5pm+5Lqu6LCF5pKp6IGK5YOa55aX54eO5a+l6L695r2m5LqG5pKC6ZWj5buW5paZ5YiX6KOC54OI5Yqj54yO55Cz5p6X56O36ZyW5Li06YK76bOe5reL5Yeb6LWB5ZCd5ouO546y6I+x6Zu26b6E6ZOD5Ly2576a5YeM54G16Zm15bKt6aKG5Y+m5Luk5rqc55CJ5qa056Gr6aaP55WZ5YiY55ik5rWB5p+z5YWt6b6Z6IGL5ZKZ56y856q/6ZqG5Z6E5oui6ZmH5qW85aiE5pCC56+T5ryP6ZmL6Iqm5Y2i6aKF5bqQ54KJ5o6z5Y2k6JmP6bKB6bqT56KM6Zyy6Lev6LWC6bm/5r2e56aE5b2V6ZmG5oiu6am05ZCV6ZOd5L6j5peF5bGl5bGh57yV6JmR5rCv5b6L546H5ruk57u/5bOm5oyb5a2q5rum5Y215Lmx5o6g55Wl5oqh6L2u5Lym5LuR5rKm57q26K666JCd6J66572X6YC76ZSj566p6aqh6KO46JC95rSb6aqG57uc5aaI6bq7546b56CB6JqC6ams6aqC5Zib5ZCX5Z+L5Lmw6bqm5Y2W6L+I6ISJ556S6aaS6Juu5ruh6JST5pu85oWi5ryr6LCp6IqS6Iyr55uy5rCT5b+Z6I6954yr6IyF6ZSa5q+b55+b6ZOG5Y2v6IyC5YaS5bi96LKM6LS45LmI546r5p6a5qKF6YW26ZyJ54Wk5rKh55yJ5aqS6ZWB5q+P576O5pin5a+Q5aa55aqa6Zeo6Ze35Lus6JCM6JKZ5qqs55uf6ZSw54yb5qKm5a2f55yv6Yaa6Z2h57Oc6L+36LCc5byl57Gz56eY6KeF5rOM6Jyc5a+G5bmC5qOJ55yg57u15YaV5YWN5YuJ5aip57yF6Z2i6IuX5o+P556E6JeQ56eS5ri65bqZ5aaZ6JSR54Gt5rCR5oq/55q/5pWP5oKv6Ze95piO6J6f6bij6ZOt5ZCN5ZG96LCs5pG45pG56JiR5qih6Iac56Oo5pGp6a2U5oq55pyr6I6r5aKo6buY5rKr5ryg5a+e6ZmM6LCL54mf5p+Q5ouH54mh5Lqp5aeG5q+N5aKT5pqu5bmV5Yuf5oWV5pyo55uu552m54mn56mG5ou/5ZOq5ZGQ6ZKg6YKj5aic57qz5rCW5LmD5aW26ICQ5aWI5Y2X55S36Zq+5ZuK5oyg6ISR5oG86Ze55reW5ZGi6aaB5YaF5aup6IO95aau6ZyT5YCq5rOl5bC85ouf5L2g5Yy/6IW76YCG5rq66JSr5ouI5bm056K+5pK15o275b+15aiY6YW/6bif5bC/5o2P6IGC5a295ZWu6ZWK6ZWN5raF5oKo5p+g54ue5Yed5a6B5oun5rOe54mb5omt6ZKu57q96IST5rWT5Yac5byE5aW05Yqq5oCS5aWz5pqW6JmQ55af5oyq5oem57Ov6K+65ZOm5qyn6bil5q606JeV5ZGV5YG25rKk5ZWq6La054is5biV5oCV55C25ouN5o6S54mM5b6Y5rmD5rS+5pSA5r2Y55uY56OQ55u855WU5Yik5Y+b5LmT5bqe5peB6ICq6IOW5oqb5ZKG5Yio54Ku6KKN6LeR5rOh5ZG46IOa5Z+56KO06LWU6Zmq6YWN5L2p5rKb5Za355uG56Cw5oqo54O55r6O5b2t6JOs5qOa56G856+36Iao5pyL6bmP5o2n56Kw5Z2v56CS6Zy55om55oqr5YqI55C15q+X5ZWk6IS+55ay55qu5Yy555ee5YO75bGB6K2s56+H5YGP54mH6aqX6aOY5ryC55Oi56Wo5pKH556l5ou86aKR6LSr5ZOB6IGY5LmS5Z2q6Iu56JCN5bmz5Yet55O26K+E5bGP5Z2h5rO86aKH5amG56C06a2E6L+r57KV5YmW5omR6ZO65LuG6I6G6JGh6I+p6JKy5Z+U5py05ZyD5pmu5rWm6LCx5pud54CR5pyf5qy65qCW5oia5aa75LiD5YeE5ryG5p+S5rKP5YW25qOL5aWH5q2n55Wm5bSO6ISQ6b2Q5peX56WI56WB6aqR6LW35bKC5Lme5LyB5ZCv5aWR56CM5Zmo5rCU6L+E5byD5rG95rOj6K6r5o6Q5rS954m15omm6ZKO6ZOF5Y2D6L+B562+5Luf6LCm5Lm+6buU6ZKx6ZKz5YmN5r2c6YGj5rWF6LC05aCR5bWM5qyg5q2J5p6q5ZGb6IWU576M5aKZ6JS35by65oqi5qmH6ZS55pWy5oKE5qGl556n5LmU5L6o5ben6Z6Y5pKs57+Y5bOt5L+P56qN5YiH6IyE5LiU5oCv56qD6ZKm5L615Lqy56em55C05Yuk6Iq55pOS56a95a+d5rKB6Z2S6L275rCi5YC+5Y2/5riF5pOO5pm05rCw5oOF6aG36K+35bqG55C856m356eL5LiY6YKx55CD5rGC5Zua6YWL5rOF6LaL5Yy66JuG5puy6Lqv5bGI6amx5rig5Y+W5ai26b6L6Laj5Y675ZyI6aKn5p2D6Yab5rOJ5YWo55eK5ouz54qs5Yi45Yqd57y654KU55i45Y206bmK5qa356Gu6ZuA6KOZ576k54S254eD5YaJ5p+T55Ok5aOk5pSY5Zq36K6p6aW25omw57uV5oO554Ot5aOs5LuB5Lq65b+N6Z+n5Lu76K6k5YiD5aaK57qr5omU5LuN5pel5oiO6Iy46JOJ6I2j6J6N54aU5rq25a6557uS5YaX5o+J5p+U6IKJ6Iy56KCV5YSS5a265aaC6L6x5Lmz5rGd5YWl6KSl6L2v6Ziu6JWK55Ge6ZSQ6Zew5ram6Iul5byx5pKS5rSS6JCo6IWu6bOD5aGe6LWb5LiJ5Y+B5Lye5pWj5qGR5ZeT5Lin5pCU6aqa5omr5auC55Gf6Imy5rap5qOu5YOn6I6O56CC5p2A5Yi55rKZ57qx5YK75ZWl54We562b5pmS54+K6Iur5p2J5bGx5Yig54W96KGr6Zeq6ZmV5pOF6LWh6Iaz5ZaE5rGV5omH57yu5aKS5Lyk5ZWG6LWP5pmM5LiK5bCa6KOz5qKi5o2O56iN54On6IqN5Yu66Z+25bCR5ZOo6YK157uN5aWi6LWK6JuH6IiM6IiN6LWm5pGE5bCE5oWR5raJ56S+6K6+56C355Sz5ZG75Ly46Lqr5rex5aig57uF56We5rKI5a6h5am255Sa6IK+5oWO5riX5aOw55Sf55Sl54my5Y2H57uz55yB55ub5Ymp6IOc5Zyj5biI5aSx54uu5pa95rm/6K+X5bC46Jmx5Y2B55+z5ou+5pe25LuA6aOf6JqA5a6e6K+G5Y+y55+i5L2/5bGO6am25aeL5byP56S65aOr5LiW5p+/5LqL5out6KqT6YCd5Yq/5piv5Zec5Zms6YCC5LuV5L6N6YeK6aWw5rCP5biC5oGD5a6k6KeG6K+V5pS25omL6aaW5a6I5a+/5o6I5ZSu5Y+X55im5YW96JSs5p6i5qKz5q6K5oqS6L6T5Y+U6IiS5reR55aP5Lmm6LWO5a2w54af6Jav5pqR5puZ572y6JyA6buN6byg5bGe5pyv6L+w5qCR5p2f5oiN56uW5aKF5bq25pWw5ryx5oGV5Yi36ICN5pGU6KGw55Sp5biF5qCT5ou06Zyc5Y+M54i96LCB5rC0552h56iO5ZCu556s6aG66Iic6K+056GV5pyU54OB5pav5pKV5Zi25oCd56eB5Y+45Lid5q276IKG5a+65Zej5Zub5Ly65Ly86aWy5bez5p2+6IC45oCC6aKC6YCB5a6L6K686K+15pCc6ImY5pOe5Ze96IuP6YWl5L+X57Sg6YCf57Kf5YOz5aGR5rqv5a6/6K+J6IKD6YW46JKc566X6Jm96ZqL6ZqP57ul6auT56KO5bKB56mX6YGC6Zqn56Wf5a2Z5o2f56yL6JOR5qKt5ZSG57yp55CQ57Si6ZSB5omA5aGM5LuW5a6D5aW55aGU542t5oye6LmL6LiP6IOO6IuU5oqs5Y+w5rOw6YWe5aSq5oCB5rGw5Z2N5pGK6LSq55ir5rup5Z2b5qqA55ew5r2t6LCt6LCI5Z2m5q+v6KKS56Kz5o6i5Y+554Kt5rGk5aGY5pCq5aCC5qOg6Iab5ZSQ57OW5YCY6Lq65reM6Laf54Or5o6P5rab5ruU57um6JCE5qGD6YCD5reY6Zm26K6o5aWX54m56Jek6IW+55a86KqK5qKv5YmU6Lii6ZSR5o+Q6aKY6LmE5ZW85L2T5pu/5ZqP5oOV5raV5YmD5bGJ5aSp5re75aGr55Sw55Sc5oGs6IiU6IWG5oyR5p2h6L+i55y66Lez6LS06ZOB5biW5Y6F5ZCs54OD5rGA5bu35YGc5Lqt5bqt5oy66ImH6YCa5qGQ6YWu556z5ZCM6ZOc5b2k56ul5qG25o2F562S57uf55eb5YG35oqV5aS06YCP5Ye456eD56qB5Zu+5b6S6YCU5raC5bGg5Zyf5ZCQ5YWU5rmN5Zui5o6o6aKT6IW/6JyV6KSq6YCA5ZCe5bGv6IeA5ouW5omY6ISx6bi16ZmA6amu6am85qSt5aal5ouT5ZS+5oyW5ZOH6JuZ5rS85aiD55Om6KKc5q2q5aSW6LGM5byv5rm+546p6aG95Li454O35a6M56KX5oy95pma55qW5oOL5a6b5amJ5LiH6IWV5rGq546L5Lqh5p6J572R5b6A5pe65pyb5b+Y5aaE5aiB5beN5b6u5Y2x6Z+m6L+d5qGF5Zu05ZSv5oOf5Li65r2N57u06IuH6JCO5aeU5Lyf5Lyq5bC+57qs5pyq6JSa5ZGz55WP6IOD5ZaC6a2P5L2N5rit6LCT5bCJ5oWw5Y2r55if5rip6JqK5paH6Ze757q55ZC756iz57SK6Zeu5Zeh57+B55Ou5oyd6JyX5rah56qd5oiR5pah5Y2n5o+h5rKD5ber5ZGc6ZKo5LmM5rGh6K+s5bGL5peg6Iqc5qKn5ZC+5ZC05q+L5q2m5LqU5o2C5Y2I6Iie5LyN5L6u5Z2e5oiK6Zu+5pmk54mp5Yu/5Yqh5oKf6K+v5piU54aZ5p6Q6KW/56GS55+95pmw5Zi75ZC46ZSh54m656iA5oGv5biM5oKJ6Iad5aSV5oOc54aE54Ov5rqq5rGQ54qA5qqE6KKt5bit5Lmg5aqz5Zac6ZOj5rSX57O76ZqZ5oiP57uG556O6Jm+5Yyj6Zye6L6W5pqH5bOh5L6g54ut5LiL5Y6m5aSP5ZCT5o6A6ZSo5YWI5LuZ6bKc57qk5ZK46LSk6KGU6Ii36Zey5raO5bym5auM5pi+6Zmp546w54yu5Y6/6IW66aaF576h5a6q6Zm36ZmQ57q/55u45Y6i6ZW26aaZ566x6KWE5rmY5Lmh57+U56Wl6K+m5oOz5ZON5Lqr6aG55be35qmh5YOP5ZCR6LGh6JCn56Gd6ZyE5YmK5ZOu5Zqj6ZSA5raI5a615reG5pmT5bCP5a2d5qCh6IKW5ZW456yR5pWI5qWU5Lqb5q2H6J2O6Z6L5Y2P5oyf5pC66YKq5pac6IOB6LCQ5YaZ5qKw5Y246J+55oeI5rOE5rO76LCi5bGR6Jaq6Iqv6ZSM5qyj6L6b5paw5b+75b+D5L+h6KGF5pif6IWl54yp5oO65YW05YiR5Z6L5b2i6YKi6KGM6YaS5bm45p2P5oCn5aeT5YWE5Ye26IO45YyI5rG56ZuE54aK5LyR5L+u576e5py95ZeF6ZSI56eA6KKW57uj5aKf5oiM6ZyA6Jma5ZiY6aG75b6Q6K646JOE6YWX5Y+Z5pet5bqP55Wc5oGk57Wu5am/57uq57ut6L2p5Zan5a6j5oKs5peL546E6YCJ55mj55yp57ua6Z206Jab5a2m56m06Zuq6KGA5YuL54aP5b6q5pes6K+i5a+76amv5beh5q6J5rGb6K6t6K6v6YCK6L+F5Y6L5oq86bim6bit5ZGA5Lir6Iq954mZ6Jqc5bSW6KGZ5rav6ZuF5ZOR5Lqa6K6254SJ5ZK96ZiJ54Of5re555uQ5Lil56CU6JyS5bKp5bu26KiA6aKc6ZiO54KO5rK/5aWE5o6p55y86KGN5ryU6Imz5aCw54eV5Y6M56Ca6ZuB5ZSB5b2m54Sw5a606LCa6aqM5q6D5aSu6biv56en5p2o5oms5L2v55ah576K5rSL6Ziz5rCn5Luw55eS5YW75qC35ry+6YKA6IWw5aaW55G25pGH5bCn6YGl56qR6LCj5aea5ZKs6IiA6I2v6KaB6ICA5qSw5ZmO6IC254i36YeO5Ya25Lmf6aG15o6W5Lia5Y+25puz6IWL5aSc5ray5LiA5aO55Yy75o+W6ZOx5L6d5LyK6KGj6aKQ5aS36YGX56e75Luq6IOw55aR5rKC5a6c5aeo5b2d5qSF6JqB5YCa5bey5LmZ55+j5Lul6Im65oqR5piT6YKR5bG55Lq/5b256IeG6YC46IKE55ar5Lqm6KOU5oSP5q+F5b+G5LmJ55uK5rqi6K+j6K6u6LCK6K+R5byC57+857+M57uO6Iy16I2r5Zug5q636Z+z6Zi05ae75ZCf6ZO25rer5a+F6aWu5bC55byV6ZqQ5Y2w6Iux5qix5am06bmw5bqU57yo6I656JCk6JCl6I2n6J2H6L+O6LWi55uI5b2x6aKW56Gs5pig5ZOf5oul5L2j6IeD55eI5bq46ZuN6LiK6Ju55ZKP5rOz5raM5rC45oG/5YuH55So5bm95LyY5oKg5b+n5bCk55Sx6YKu6ZOA54q55rK55ri46YWJ5pyJ5Y+L5Y+z5L2R6YeJ6K+x5Y+I5bm86L+C5rek5LqO55uC5qaG6Jme5oSa6IiG5L2Z5L+e6YC+6bG85oSJ5rid5riU6ZqF5LqI5aix6Zuo5LiO5bG/56a55a6H6K+t5769546J5Z+f6IqL6YOB5ZCB6YGH5Za75bOq5b6h5oSI5qyy54ux6IKy6KqJ5rW05a+T6KOV6aKE6LGr6amt6biz5riK5Yak5YWD5Z6j6KKB5Y6f5o+06L6V5Zut5ZGY5ZyG54y/5rqQ57yY6L+c6IuR5oS/5oCo6Zmi5puw57qm6LaK6LeD6ZKl5bKz57Kk5pyI5oKm6ZiF6ICY5LqR6YOn5YyA6Zmo5YWB6L+Q6JW06YWd5pmV6Z+15a2V5Yyd56C45p2C5qC95ZOJ54G+5a6w6L295YaN5Zyo5ZKx5pSS5pqC6LWe6LWD6ISP6JGs6YGt57Of5Ye/6Je75p6j5pep5r6h6Jqk6LqB5Zmq6YCg55qC54G254el6LSj5oup5YiZ5rO96LS85oCO5aKe5oaO5pu+6LWg5omO5Zaz5rij5pyt6L2n6ZOh6Ze455yo5qCF5qao5ZKL5LmN54K46K+I5pGY5paL5a6F56qE5YC65a+o55675q+h6Km557KY5rK+55uP5pap6L6X5bSt5bGV6Ji45qCI5Y2g5oiY56uZ5rmb57u95qif56ug5b2w5ryz5byg5o6M5rao5p2W5LiI5biQ6LSm5LuX6IOA55i06Zqc5oub5pit5om+5rK86LW154Wn572p5YWG6IKH5Y+s6YGu5oqY5ZOy6Juw6L6Z6ICF6ZSX6JSX6L+Z5rWZ54+N5paf55yf55SE56Cn6Ie76LSe6ZKI5L6m5p6V55a56K+K6ZyH5oyv6ZWH6Zi16JK45oyj552B5b6B54uw5LqJ5oCU5pW05ouv5q2j5pS/5bin55eH6YOR6K+B6Iqd5p6d5pSv5ZCx6JyY55+l6IKi6ISC5rGB5LmL57uH6IGM55u05qSN5q6W5omn5YC85L6E5Z2A5oyH5q2i6La+5Y+q5peo57q45b+X5oya5o636Iez6Ie0572u5bic5bOZ5Yi25pm656ep56ia6LSo54KZ55eU5rue5rK756qS5Lit55uF5b+g6ZKf6KG357uI56eN6IK/6YeN5Luy5LyX6Iif5ZGo5bee5rSy6K+M57Kl6L206IKY5bia5ZKS55qx5a6Z5pi86aqk54+g5qCq6Jub5pyx54yq6K+46K+b6YCQ56u554Ob54Wu5ouE556p5Zix5Li76JGX5p+x5Yqp6JuA6LSu6ZO4562R5L2P5rOo56Wd6am75oqT54iq5ou95LiT56CW6L2s5pKw6LWa56+G5qGp5bqE6KOF5aaG5pKe5aOu54q25qSO6ZSl6L+96LWY5Z2g57yA6LCG5YeG5o2J5ouZ5Y2T5qGM55Ci6IyB6YWM5ZWE552A54G85rWK5YW55ZKo6LWE5ae/5ruL5reE5a2c57Sr5LuU57G95ruT5a2Q6Ieq5riN5a2X6ayD5qOV6Liq5a6X57u85oC757q16YK56LWw5aWP5o+N56ef6Laz5Y2S5peP56WW6K+F6Zi757uE6ZK757qC5Zi06YaJ5pyA572q5bCK6YG15pio5bem5L2Q5p+e5YGa5L2c5Z2Q5bqn6ZSV5Zez5auS55G35pqn6Zyt6LCZ6ZO16bmM5aqq6aqc6bOM6ZKv5ZGX6ZKj6bio6b6F6bmO6LSy6ZSb6I2c5ZOU5ruX6ZOL562a6Le46IuE57yP56y+6aqg6aOR6aOZ6ZWW6ZWz6bOU5YKn57yk5qef5q6h6IaR6ZWU6auM6ayT56aA6aW96ZK56bmB6ZK46aqW6buq5oG76ZS45L6q6ZKX5YaB6LCE6LC26JKH5b+P5am16aqj6KeH56aF6ZWh5Lyl6IuM5oCF6ZiK6bKz56CX5Lyn6LCM5qaH56Kc6b6A5p6o5p+96ZOW6ZOb6aWs6bix6ZOz5L+m5bix6Zug5YiN57uM6Lmw6ZKP5oCG57yN6bmR6L6N6b6K6bma6IuB6aqi5p6e6L6P5pK66ZSJ6bm+5ZOS6Z6R6aqA57uQ5q6a6LWV55iF566q6LCg56CA6KOG54SY6ZWr57G06K+L6LCb57uo6KeM6ZWd5beF6ZK/55mr6ZOr6bK36bK96ZOk6ZOl5bK96bir56qm5riO5qSf54mN56yD6bup57CW5oC86ZWm54KW6La46ZOO6LCU5Z6p6ZiP6L2t6ZSH6ZS36bmX6aKa6aKb6bOE6K+26L+p6ZOS6bi46bKV6ZKr6bKC57uv6ZWE6bKx5YG+5rKj5Yer6am457uC57uL6LWZ6bq46bKL6bOG6ZKG6LWF5bC05pOA57uA5oiG552+6K+w57yf6ZSG57ql6ZWJ6aKN5LqY6LWT57ug6bKg6K+f57yR6KeP6K+C5q+C6ZK06ZSi6biq6bmE6bmY6bi55o606K+W5o686bmz6bOP54q35Yym5Yi/5aar5qGn6bKR6bOc6KGu57uy6bKn5Z+a5ZGZ5bi85qSB6J2I6ZOq6Zia57uX6aKJ54GP6aKi6K+D6ZiW6JuO6buJ6K6n6I2t6Zez6bKO5rWS6bmV6aqF5qGm6ZOn5aWC57yz6ZS+6bKp6bOH6K+Z6I2f5ZOV5rWN57yL54+y5pmW6K+o6aaE6ZiN6ZKs6ZWs6K6m6K+Y6I2g5Y+95ZOc6aql546R6KeK6b2R55+2576B6Jm/6Le76ZyB6bKa6bKr6YOP5rWD6ZOX6ZWT6Juy6LCP57yj5oiL5ois552R6bmj56yV6bKj6Z6v57ub57yw5oyi5bOk6bmq6bKb55aW6aKM6bKS5Y266I2p6aaR57yZ6LWG6KeQ5Yit5rO+6L+z5byq6IOr6Z2T6ZiE6big6bmr6K615bGm5qaJ6aOT6ZKc6ZSU56qt6b6D6ZSp6ZWM6Zq96LCy54+P55qy5YmA5Z6y5b++5oG66ZOg6ZS06b6b6Ze26ZKq6ZOQ6aqS57yC6L2y6ZK26ZSe6aKU6b6I6ZO/5Za+6YOQ5ZOZ6ISN54uv6auL6K+T6K+z6YKd5Zy557qp6LS25Yyu6JKJ5oSm6IGp56+R6ZiD6ZSf6bKy6Ju05bSD5b6V5rae5r+R6LWJ552Q6ZO855me57GB5bKa5qaE5paT6ZWn6KS06ZiG6ZSS5ZSg5bSC6ZOR6ZO555eo6bOT6K+U57yn5L+q6YOm5Z2c6IuI6I6F6JOg5ZGW6YCm6aqK57yh5p6l5qCO6L2556C66ZSC6bmC55ag57Kd6Lee6Zuz6bKh6bOi6JS55aWB5r2L55CP5q6T6KOi6KOj6bKi6a2J57yt6ZKM6bmp6JS65buq5qqp6L6a6LqP57ur5qOC6JuP6bKu5rWP6aqd57u66ZWP6bmo6IyP5rO354+R5qCK6IOn56C75YG76JKM5Za95bWd6ZWC55iY6ICn6J286auF5Z6G5pK45Zmc6Ze+5rO45riM5qCM5qm56L2z6L6C6L6Y5rCH6IOq6bis6bmt6Ii76bKI6ISU5aiI5qC+6bi+6Yqu5Zu16I2m54yh5rO65qSk6IS26ZWZ5qaI6KSb6ZSK5ZGS5ZSb5ay35p2p5Yqi57ym6ZWY6aKh6bOX6bq95omq54SW5oeR6ZKU6IqI6LCn54yV56Wi5riR6IW86bu+57yI57yq6Ze157yX6LCf6JOm6aaN5q6B6ZWG6ZK86ZOZ6K636ZOM6bK16L6H6bK26IyR6KKF6Zmn6JiW5Zer6aKf6LmR6IuO5ZKb6IGN5L6s5ZOd6am96ZKV5YKp6K605oCE55Ov6LmS55ax6L6U57qw57206ZON6LCd6aqI57yl5auU6ZKL6ZWk6ZWo6JWy6aqQ57uu5qGk56Kb6aKA6aKD6bON5L2l6I2o5oKt6aqe57yx5qSg6ZKk5aux5qiv5oiX54Kd6ZSW6ZS16ZWq576f6LeE6K+u6LCv6I2e57yy56GX6Le35oOs6ZSy566n6ZST5o+/6bKt6IyV6Jux5bev6LWH6Jmu6bOF6K+O5bKW6ZiS6KeR6biy6K+g57u76L6B6ZOo6ZiV6ZiZ5oKr6I2b5aiG5qGh6aWq6L2r5bWY6J2+57yb6ZO36aKm6Jqs6aOS5q+157OB57yr5ZWs6ZOv56mR6ZOp6bKo6YW+6K6q5aeX6aqf6ZKQ6bOd5Z6n5q6H6Kee5Y6N5rug55Wy6K+c6LCC5riW6LCl5Z+Y6I6z5byR6L286LSz6ZOI6bKl57u25pGF57q+6Zep6ZOE5Y6u6am357yM6ZS26bi26Jau6aaK6aOV6ZS86LCh56ij6LCH6I2q54uy5ZSi552D6Ze86ZOK6bOO6ZKb6bKQ5piZ6ZK96ZSs6aG45YKl6aWn6ZO06ZWX6Z+s6ZO957yH6bmI6ZiX57Kc6b6G6bKm5oG46ZKt6ZKN5oqf6aWo566o6byN5aiy6IW957qo57u+6L6L6K+/5biP6Zex5rKp5rag546u6Z+q54Kc6bKU6ZiM6I606b6M6YKs5bqR5oCD5aap6aqb6bmJ6bmc6aWp6ZiL54666KeL56GW6IuL6I626JeT5bKY54yD5ai06bmH55er6Jqd57G86Le56IqX6aW36aqn57yD6aOo5ZOT5r2H6aqB57uh5p6t566r5Lq15pK357uB57ys6ZmJ6I2l6aaQ6bi66K+p6aG86LCW6ZOJ6ZWf6LCR5rO26bOV5Z+Z5rWU6bKf5Z6t5aiF5qGg5rCp5Y6j6LWd5L+o5YWW6LCz5oG56Zer6YW96a2H6aSN6by554KA6L266bme6bOQ6Z2l6LCS6YK65pmU54Oo6K+S5ZGT5bOE6aW05oC/6am/57yi6L226LS76ZKH6ZWS6ZWx55iX6Iij6ZOf55i+6IyU6I666JCm6JOl5pKE5Zik5rui5r2G55KO6bmm55i/6aKP572C6ZWb6I646ZOV6bG/5Lyb5L+j6LCA6LCV6JOj5bWb6aWr6ZiI5aaq57qh6KeO5qyk6ZKw6bmG6bms6b6J5qm86bii6byL6ZK66YOT6Iq45oG95oSg57qt6Z+r5q6S5rCy55OS6Lax6Yy+6am16LWc5ZWn5bi7566m6LCu57yv6LC16K+P6ZKK6LCq6L6E6bmn5rWI57yc5qGi6L246LWI56Wv6bip6K+k5bOl6ZKy6ZOu562d6aqY5qCJ5qCA6L216L2+6LS96bi36Juz57W36Lis6Liv6Kev6ZS657qj57uJ5Lyr5qeg6ZOi5ZWt6aaU6aKe6aqT57yS6K+86ZWv6LCY57yB6L6O6LWA55ym6ZSx6b6H6bK75YGs6K+56am66bKw6ZWe57y16Lqc6bOf6K6g6LCr6YOE5YuQ5Ye85Z2C5Z6F5Z605Z+v5Z+d6IuY6I2s6I2u6I6c6I686I+w6JeB5o+45ZCS5ZCj5ZKU5ZKd5ZK05ZmY5Zm85Zqv5bme5bKZ5bW05b235b6854q454uN6aaA6aaH6aaT6aaV5oSj5oa35oeU5Lis5rqG5ruf5rq35ryk5r205r6555Sv57qf57uU57ux54+J5p6n5qGK5qGJ5qeU5qml6L2x6L236LWN6IK36IOo6aOa54Wz54WF54aY5oSN5re856Cc56OZ55yN6ZKa6ZK36ZOY6ZOe6ZSD6ZSN6ZSO6ZSP6ZSY6ZSd6ZSq6ZSr6ZS/6ZWF6ZWO6ZWi6ZWl6ZWp6ZWy56iG6bmL6bmb6bmx55as55a055eW55mv6KOl6KWB6ICi6aKl6J6o6bq06bKF6bKG6bKH6bKe6bK06bK66bK86bOK6bOL6bOY6bOZ6Z6S6Z606b2EJztcclxufVxyXG5mdW5jdGlvbiBmdFBZU3RyKCl7XHJcbiAgICByZXR1cm4gJ+WViumYv+Wfg+aMqOWTjuWUieWTgOeamueZjOiXueefruiJvuekmeaEm+mamOmejeawqOWuieS/uuaMieaal+WyuOiDuuahiOmqr+aYguebjuWHueaVlueGrOe/uuilluWCsuWlp+aHiua+s+iKreaNjOaJkuWPreWQp+eshuWFq+eWpOW3tOaLlOi3i+mdtuaKiuiAmeWjqemcuOe9t+eIuOeZveafj+eZvuaTuuS9sOaVl+aLnOeol+aWkeePreaQrOaJs+iIrOmgkuadv+eJiOaJruaLjOS8tOeTo+WNiui+pue1humCpuW5q+aihuamnOiGgOe2geajkuejheiajOmOiuWCjeisl+iLnuiDnuWMheikkuWJneiWhOmbueS/neWgoemjveWvtuaKseWgseaatOixuemukeeIhuadr+eikeaCsuWNkeWMl+i8qeiDjOiynemLh+WAjeeLveWCmeaGiueEmeiiq+WllOiLr+acrOesqOW0qee5g+eUreaztei5pui/uOmAvOm8u+avlOmEmeethuW9vOeip+iTluiUveeVouaWg+avluW5o+W6h+eXuemWieaVneW8iuW/hei+n+WjgeiHgumBv+mZm+meremCiue3qOiytuaJgeS+v+iuiuWNnui+qOi+r+i+rumBjeaomeW9quiGmOihqOmxieaGi+WIpeeZn+W9rOaWjOeAlea/seizk+aTr+WFteWGsOafhOS4meeniemkheeCs+eXheS4pueOu+iPoOaSreaSpee8veazouWNmuWLg+aQj+mJkeeulOS8r+W4m+iItuiEluiGiua4pOaziumngeaNleiUlOWTuuijnOWfoOS4jeW4g+atpeewv+mDqOaAluaTpueMnOijgeadkOaJjeiyoeedrOi4qemHh+W9qeiPnOiUoemkkOWPg+igtuaumOaFmuaFmOeHpuiSvOiJmeWAiea7hOiXj+aTjeezmeanveabueiNieW7geetluWBtOWGiua4rOWxpOi5reaPkuWPieiMrOiMtuafpeeitOaQveWvn+WylOW3ruipq+aLhuaftOixuuaUmeaRu+ifrOmlnuiukue6j+mPn+eUoumXoemhq+aYjOeMluWgtOWYl+W4uOmVt+WEn+iFuOW7oOaVnuaaouWUseWAoei2heaKhOmIlOacneWYsua9ruW3ouWQteeCkui7iuaJr+aSpOaOo+W+uea+iOmDtOiHo+i+sOWhteaZqOW/seayiOmZs+i2geilr+aSkOeoseWfjuapmeaIkOWRiOS5mOeoi+aHsua+hOiqoOaJv+mAnumogeenpOWQg+eZoeaMgeWMmeaxoOmBsuW8m+mms+aBpem9kuS+iOWwuui1pOe/heaWpeeGvuWFheayluifsuW0h+WvteaKvemFrOeWh+i6iueooOaEgeexjOS7h+e2oueehemGnOiHreWIneWHuuarpeW7mui6h+mLpOmbm+a7gemZpOalmuekjuWEsuefl+aQkOinuOiZleaPo+W3neepv+akveWCs+iIueWWmOS4sueYoeeql+W5ouW6iumXluWJteWQueeCiuaNtumMmOWeguaYpeakv+mGh+WUh+a3s+e0lOigouaIs+e2veeWteiMqOejgembjOi+reaFiOeTt+ipnuatpOWIuuiznOasoeiBsOiUpeWbquWMhuW+nuWPoua5iueyl+mGi+ewh+S/g+i6peevoeerhOaRp+W0lOWCrOiEhueYgeeyuea3rOe/oOadkeWtmOWvuOeji+aSruaQk+aOquaMq+mMr+aQremBlOetlOeYqeaJk+Wkp+WRhuatueWCo+aItOW4tuauhuS7o+iyuOiii+W+hemAruaAoOiAveaTlOS4ueWWrumEsuaSo+iGveaXpuawruS9huaGmua3oeiqleW9iOibi+eVtuaTi+m7qOiVqeaqlOWIgOaQl+i5iOWAkuWztuemseWwjuWIsOeou+aCvOmBk+ebnOW+t+W+l+eahOi5rOeHiOeZu+etieeequWHs+mEp+WgpOS9jua7tOi/quaVteesm+eLhOa7jOe/n+WroeaKteW6leWcsOiSguesrOW4neW8n+mBnue3oOmhm+aOgua7h+eimOm7nuWFuOmdm+Wiiumbu+S9g+eUuOW6l+aDpuWloOa+seauv+eiieWPvOmblembleWIgeaOieWQiumHo+iqv+i3jOeIueein+idtuWPoOirnOeWiuS4geebr+WPrumHmOmggum8jumMoOWumuioguS4n+adseWGrOiRo+aHguWLleajn+S+l+aBq+WHjea0nuWFnOaKlumspemZoeixhumAl+eXmOmDveedo+avkueKoueNqOiugOWgteedueizreadnOmNjeiCmuW6pua4oeWmkuerr+efremNm+auteaWt+e3nuWghuWFjOmaiuWwjeWiqeWZuOi5suaVpumgk+WbpOmIjeebvumBgeaOh+WThuWkmuWlquWem+i6suactei3uuiIteWJgeaDsOWiruibvuWzqOm1neS/hOmhjeiom+WopeaDoeWOhOaJvOmBj+mEgumkk+aBqeiAjOWFkuiAs+eIvumkjOa0seS6jOiys+eZvOe9sOetj+S8kOS5j+mWpeazleeQuuiXqeW4hueVque/u+aoiuekrOmHqee5geWHoeeFqeWPjei/lOevhOiyqeeKr+mjr+azm+WdiuiKs+aWueiCquaIv+mYsuWmqOS7v+ioque0oeaUvuiPsumdnuWVoemjm+iCpeWMquiqueWQoOiCuuW7ouayuOiyu+iKrOmFmuWQqeawm+WIhue0m+Wis+eEmuaxvueyieWlruS7veW/v+aGpOeznuixkOWwgealk+icguWzsOmLkumiqOeYi+eDvemAoummrue4q+irt+Wliemzs+S9m+WQpuWkq+aVt+iGmuWtteaJtuaLgui8u+W5heawn+espuS8j+S/mOacjea1rua2quemj+iiseW8l+eUq+aSq+i8lOS/r+mHnOaWp+iEr+iFkeW6nOiFkOi1tOWJr+imhuizpuW+qeWCheS7mOmYnOeItuiFueiyoOWvjOiog+mZhOWppue4m+WSkOWZtuWYjuipsuaUueamgumIo+iTi+a6ieW5ueeUmOahv+afkeerv+iCnei2leaEn+eoiOaVoui0m+WyoeWJm+mLvOe8uOiCm+e2seW0l+a4r+adoOevmeiHr+mrmOiGj+e+lOezleaQnumOrOeov+WRiuWTpeatjOaTseaIiOm0v+iDs+eWmeWJsumdqeiRm+agvOibpOmWo+malOmJu+WAi+WQhOe1puaguei3n+iAleabtOW6mue+ueWfguiAv+ail+W3peaUu+WKn+aBrem+lOS+m+i6rOWFrOWuruW8k+mej+axnuaLseiyouWFsemJpOWLvua6neiMjeeLl+Weouani+izvOWkoOi+nOiPh+WSleeujeS8sOayveWtpOWnkem8k+WPpOigsemqqOiwt+iCoeaVhemhp+Wbuumbh+WIrueTnOWJruWvoeaOm+ikguS5luaLkOaAquajuumXnOWumOWGoOingOeuoemkqOe9kOaFo+eBjOiyq+WFieW7o+mAm+eRsOimj+WcreefveatuOm+nOmWqOi7jOmsvOipreeZuOahguarg+i3quiytOWKiui8pea7vuajjemNi+mDreWci+aenOijuemBjuWTiOmquOWtqea1t+awpuS6peWus+mnremFo+aGqOmCr+mfk+WQq+a2teWvkuWHveWWiue9lee/sOaSvOaNjeaXseaGvuaCjeeEiuaxl+a8ouWkr+adreiIquWjleWajuixquavq+mDneWlveiAl+iZn+a1qeWRteWWneiNt+iPj+aguOemvuWSjOS9leWQiOebkuiyiemWoeays+a2uOi1q+ikkOm2tOizgOWYv+m7keeXleW+iOeLoOaBqOWTvOS6qOapq+ihoeaBkui9n+WThOeDmOiZuem0u+a0quWuj+W8mOe0heWWieS+r+eMtOWQvOWOmuWAmeW+jOWRvOS5juW/veeRmuWjuuiRq+iDoeidtOeLkOeziua5luW8p+iZjuWUrOitt+S6kua7rOaItuiKseWYqeiPr+eMvua7keeVq+WKg+WMluipseankOW+iuaHt+a3ruWjnuatoeeSsOahk+mChOe3qeaPm+aCo+WWmueYk+ixoueFpea4meWupuW5u+iNkuaFjOm7g+ejuuidl+ewp+eah+WHsOaDtueFjOaZg+W5jOaBjeisiueBsOaPrui8neW+veaBouiblOWbnuavgOaClOaFp+WNieaDoOaZpuizhOepouacg+eHtOWMr+irseiqqOe5quiRt+aYj+Wpmumtgua4vua3t+ixgea0u+WkpeeBq+eNsuaIluaDkemcjeiyqOemjeaTiuWcvuWfuuapn+eVuOeoveepjeeuleiCjOmlkei3oea/gOitj+mbnuWnrOe4vue3neWQiealteajmOi8r+exjembhuWPiuaApeeWvuaxsuWNs+Wriee0muaToOW5vuiEiuW3seiWiuaKgOWGgOWto+S8juelreWKkeaCuOa/n+WvhOWvguioiOiomOaXouW/jOmam+e5vOe0gOWYieaet+WkvuS9s+WutuWKoOiOoumgsOiziOeUsumJgOWBh+eovOWDueaetumnleWrgeausuebo+WgheWwlueui+mWk+eFjuWFvOiCqeiJseWluOe3mOe5reaqouafrOWgv+m5vOaPgOaSv+ewoeWEieWJqua4m+iWpuaqu+mRkui4kOizpOimi+mNteeureS7tuWBpeiJpuWKjemknua8uOa/uua+l+W7uuWDteWnnOWwh+a8v+axn+eWhuiUo+ans+eNjuism+WMoOmGrOmZjeiVieakkuekgeeEpuiGoOS6pOmDiua+humpleWsjOWavOaUqumJuOefr+WDpeiFs+eLoeinkumkg+e5s+e1nuWJv+aVmemFtei9jui8g+WPq+eqluaPreaOpeeahueoreihl+majuaIquWKq+evgOiOluedm+aZtumvqOS6rOmpmueyvueys+e2k+S6leitpuaZr+mguOmdnOWig+aVrOmPoeW+keeXmemdluern+ertuWHiOeCr+eqmOaPqueptuezvueOlumfreS5heeBuOS5nemFkuW7hOaVkeiIiuiHvOiIheWSjuWwseeWmumeoOaLmOeLmeeWveWxhemnkuiPiuWxgOWSgOefqeiIieayruiBmuaLkuaTmuW3qOWFt+i3nei4numLuOS/seWPpeaHvOeCrOWKh+aNkOm1keWon+WApuect+WNt+e1ueaSheaUq+aKieaOmOWAlOeIteahlOWCkeaNt+edq+errea9lOe1kOino+WnkOaIkuiXieiKpeeVjOWAn+S7i+eWpeiqoeWxhuW3vueti+aWpOmHkeS7iua0peiln+e3iumMpuWDheisuemAsumds+aZieemgei/keeHvOa1uOeboeWLgeiNiuWFouimuuaxuuioo+e1leWdh+iPjOmInui7jeWQm+Wzu+S/iuero+a1mumDoemnv+WWgOWSluWNoeWSr+mWi+aPqealt+WHseaFqOWIiuWgquWLmOWdjuegjeeci+W6t+aFt+ezoOaJm+aKl+S6oueCleiAg+aLt+eDpOmdoOWdt+iLm+afr+ajteejlemhhuenkeauvOWSs+WPr+a4tOWFi+WIu+WuouiqsuiCr+WVg+WivuaHh+WdkeWQreepuuaBkOWtlOaOp+aRs+WPo+aJo+Wvh+aer+WTreeqn+iLpumFt+W6q+iksuiqh+WeruaMjui3qOiDr+Whiuett+WEiOW/q+WvrOasvuWMoeetkOeLguahhuekpuectuaboOazgeiZp+eblOW3i+equuiRteWljumtgeWCgOmli+aEp+a9sOWdpOaYhuaNhuWbsOaLrOaTtOW7k+mXiuWeg+aLieWWh+ign+iHmOi+o+WVpuiQiuS+huiztOiXjeWpquashOaUlOexg+mXjOiYreeAvuiuleaUrOimveaHtue6nOeIm+a/q+eRr+amlOeLvOW7iumDjuacl+a1quaSiOWLnueJouiAgeS9rOWnpemFqueDmea+h+WLkuaogumbt+mQs+iVvuejiue0r+WEoeWjmOaTguiCi+mhnua3muajsealnuWGt+WOmOaiqOeKgem7juexrOiyjemboua8k+eQhuadjuijj+mvieemruiOieiNlOWQj+agl+m6l+WOsuWLteekq+att+WIqeWCiOS+i+S/kOeXoueri+eykueAnemauOWKm+eSg+WTqeWAhuiBr+iTrumAo+mQruW7ieaGkOa8o+ewvuaWguiHiemPiOaIgOeFiee3tOezp+a2vOaigeeyseiJr+WFqei8m+mHj+aZvuS6ruirkuaSqeiBiuWDmueZgueHjuWvpemBvOa9puS6huaSgumQkOW7luaWmeWIl+ijgueDiOWKo+eNteeQs+ael+ejt+mcluiHqOmEsOmxl+a3i+WHnOizg+WQneaLjueOsuiPsembtum9oemItOS8tue+mua3qemdiOmZteW2uumgmOWPpuS7pOa6nOeQieamtOehq+mkvueVmeWKieeYpOa1geafs+WFrem+jeiBvuWaqOexoOeqv+mahuWjn+aUj+matOaok+WpgeaRn+ewjea8j+mZi+iYhuebp+mhseW7rOeIkOaThOm5teiZnOmtr+m6k+eijOmcsui3r+izgum5v+a9nuelv+mMhOmZuOaIrumpouWRgumLgeS+tuaXheWxpeWxoue4t+aFruawr+W+i+eOh+a/vue2oOW3kuaUo+Wtv+eBpOWNteS6guaOoOeVpeaOhOi8quWAq+S+lua3que2uOirluiYv+ieuue+hemCj+mRvOexrumovuijuOiQvea0m+mnsee1oeWqvem6u+eRqueivOienummrOe9teWYm+WXjuWfi+iyt+m6peizo+mCgeiEiOeenumlheigu+a7v+iUk+abvOaFoua8q+isvuiKkuiMq+ebsuawk+W/meiOveiyk+iMhemMqOavm+efm+mJmuWNr+iMguWGkuW4veiyjOiyv+m6veeOq+aemuaihemFtum7tOeFpOaykuecieWqkumOguavj+e+juaYp+WvkOWmueWqmumWgOaCtuWAkeiQjOiSmeaqrOebn+mMs+eMm+WkouWtn+eeh+mGmumdoeeznOi/t+isjuW9jOexs+enmOimk+azjOicnOWvhuWGquajieecoOe2v+WGleWFjeWLieWoqee3rOmdouiLl+aPj+eehOiXkOenkua4uuW7n+WmmeiUkea7heawkeaKv+eav+aVj+aGq+mWqeaYjuien+mztOmKmOWQjeWRveisrOaRuOaRueiYkeaooeiGnOejqOaRqemtlOaKueacq+iOq+WiqOm7mOayq+a8oOWvnumZjOisgOeJn+afkOaLh+eJoeeVneWnhuavjeWik+aaruW5leWLn+aFleacqOebruedpueJp+ephuaLv+WTquWQtumIiemCo+WonOe0jeawluS5g+WltuiAkOWliOWNl+eUt+mbo+WbiuaSk+iFpuaDsemsp+a3luWRoumkkuWFp+WrqeiDveWmrumck+WAquazpeWwvOaTrOWms+WMv+iGqemAhua6uuiUq+aLiOW5tOeivuaUhuaSmuW/teWomOmHgOmzpeWwv+aNj+iBtuWtveWamemRt+mOs+a2heaCqOaquOeNsOWHneWvp+aTsOa/mOeJm+aJremIlee0kOiGv+a/g+i+suW8hOWltOWKquaAkuWls+aaluiZkOeYp+aMquaHpuezr+irvuWTpuatkOm3l+avhuiXleWYlOWBtua8muWVqui2tOeIrOW4leaAleeQtuaLjeaOkueJjOW+mOa5g+a0vuaUgOa9mOebpOejkOebvOeVlOWIpOWPm+S5k+m+kOaXgeiAquiDluaLi+WShuWIqOeCruiijei3keazoeWRuOiDmuWfueijtOizoOmZqumFjeS9qeaym+WZtOebhuegsOaKqOeDuea+juW9reiTrOajmuehvOevt+iGqOaci+m1rOaNp+eisOWdr+egkumcueaJueaKq+WKiOeQteavl+WVpOiEvueWsuearuWMueeXnuWDu+WxgeitrOevh+WBj+eJh+momemjhOa8gueTouelqOaSh+eepeaLvOmgu+iyp+WTgeiBmOS5kuWdquiYi+iQjeW5s+aGkeeTtuipleWxj+Wdoea9kemgl+WphuegtOmthOi/q+eyleWJluaSsumLquS7huiOhuiRoeiPqeiSsuWflOaouOWcg+aZrua1puitnOabneeAkeacn+asuuajsuaImuWmu+S4g+a3kua8huafkuayj+WFtuaji+Wlh+atp+eVpuW0juiHjem9iuaXl+eliOelgemojui1t+ixiOS5nuS8geWVn+WlkeegjOWZqOawo+i/hOajhOaxveazo+ioluaOkOa0veeJveaJoemHrOmJm+WNg+mBt+ewveS7n+ismeS5vum7lOmMoumJl+WJjea9m+mBo+a3uuittOWhueW1jOasoOatieanjeWXhuiFlOe+jOWiu+iWlOW8t+aQtuaph+mNrOaVsuaChOapi+eep+WWrOWDkeW3p+memOaSrOe/ueWzreS/j+erheWIh+iMhOS4lOaAr+eriuasveS+teimquenpueQtOWLpOiKueaTkuemveWvouaygemdkui8leawq+WCvuWNv+a4heaTjuaZtOawsOaDhemgg+iri+aFtueTiueqrueni+S4mOmCseeQg+axguWbmumFi+azhei2qOWNgOibhuabsui7gOWxiOmphea4oOWPluWotum9sui2o+WOu+WciOmhtOasiumGm+azieWFqOeXiuaLs+eKrOWIuOWLuOe8uueClOeYuOWNu+m1suamt+eiuumbgOijmee+pOeEtueHg+WGieafk+eTpOWjpOaUmOWat+iuk+mlkuaTvue5nuaDueeGseWjrOS7geS6uuW/jemfjOS7u+iqjeWIg+Wmiue0ieaJlOS7jeaXpeaIjuiMuOiTieamruiejeeGlOa6tuWuuee1qOWGl+aPieaflOiCieiMueigleWEkuWtuuWmgui+seS5s+axneWFpeikpei7n+mYruiViueRnumKs+mWj+a9pOiLpeW8seaSkueBkeiWqeiFrumwk+WhnuizveS4ieS4ieWCmOaVo+ahkeWXk+WWquaQlOmot+aOg+WrgueRn+iJsua+gOajruWDp+iOjuegguauuuWJjuaymee0l+WCu+WVpeeFnuevqeabrOePiuiLq+adieWxseWIqueFveihq+mWg+mZnOaThei0jeiGs+WWhOaxleaJh+e5leWikeWCt+WVhuiznuaZjOS4iuWwmuijs+aiouaNjueojeeHkuiKjeWLuumftuWwkeWTqOmCtee0ueWlouizkuibh+iIjOiIjei1puaUneWwhOaHvua2ieekvuioreegt+eUs+WRu+S8uOi6q+a3seWooOe0s+elnuayiOWvqeWsuOeUmuiFjuaFjua7suiBsueUn+eUpeeJsuWNh+e5qeecgeebm+WJqeWLneiBluW4q+WkseeNheaWvea/leipqeWxjeiZseWNgeefs+aLvuaZguS7gOmjn+idleWvpuitmOWPsuefouS9v+Wxjumnm+Wni+W8j+ekuuWjq+S4luafv+S6i+aLreiqk+mAneWLouaYr+WXnOWZrOmBqeS7leS+jemHi+mjvuawj+W4guaBg+WupOimluippuaUtuaJi+mmluWuiOWjveaOiOWUruWPl+eYpueNuOiUrOaonuais+auiuaKkui8uOWPlOiIkua3keeWj+abuOi0luWtsOeGn+iWr+aakeabmee9suicgOm7jem8oOWxrOihk+i/sOaoueadn+aIjeixjuWiheW6tuaVuOa8seaBleWIt+iAjeaRlOihsOeUqeW4peagk+aLtOmcnOmbmeeIveiqsOawtOedoeeoheWQrueerOmghuiInOiqqueiqeaclOeIjeaWr+aSleWYtuaAneengeWPuOe1suatu+iChuWvuuWXo+Wbm+S8uuS8vOmjvOW3s+advuiBs+aFq+mgjOmAgeWui+ion+iqpuaQnOiJmOaTu+WXveiYh+mFpeS/l+e0oOmAn+eyn+WDs+Whkea6r+Wuv+iotOiChemFuOiSnOeul+mblumai+maqOe2j+mrk+eijuatsuepl+mBgumap+eln+Wtq+aQjeetjeiTkeaireWUhue4rueRo+e0oumOluaJgOWhjOS7luWug+WlueWhlOeNuuaSu+i5i+i4j+iDjuiLlOaToeiHuuazsOmFnuWkquaFi+axsOWdjeaUpOiyqueZseeBmOWjh+aqgOeXsOa9reitmuirh+Wdpuavr+iikueis+aOouWYhueCrea5r+WhmOaQquWgguajoOiGm+WUkOezluWAmOi6uua3jOi2n+eHmeaOj+a/pOa7lOe1s+iQhOahg+mAg+a3mOmZtuiojuWll+eJueiXpOmosOeWvOishOair+WJlOi4oumKu+aPkOmhjOi5hOWVvOmrlOabv+Waj+aDlea2leWJg+WxnOWkqea3u+Whq+eUsOeUnOaBrOiIlOiFhuaMkeainei/ouecuui3s+iyvOmQteW4luW7s+iBveeDtOaxgOW7t+WBnOS6reW6reaMuuiJh+mAmuahkOmFruees+WQjOmKheW9pOerpeahtuaNheetkue1seeXm+WBt+aKlemgremAj+WHuOemv+eqgeWcluW+kumAlOWhl+WxoOWcn+WQkOWFlOa5jeWcmOaOqOmgueiFv+ibu+ikqumAgOWQnuWxr+iHgOaLluaJmOiEq+m0lemZgOmmsemnneapouWmpeaLk+WUvuaMluWTh+ibmeeqquWog+eTpuilquatquWkluixjOW9jueBo+eOqemgkeS4uOeDt+WujOeil+aMveaZmuealuaDi+Wum+WpieiQrOiFleaxqueOi+S6oeaeiee2suW+gOaXuuacm+W/mOWmhOWogeW3jeW+ruWNsemfi+mBleahheWcjeWUr+aDn+eCuua/sOe2reiRpuiQjuWnlOWBieWBveWwvue3r+acquiUmuWRs+eVj+iDg+mktemtj+S9jea4reisguWwieaFsOihm+eYn+a6q+iaiuaWh+iBnue0i+WQu+epqee0iuWVj+WXoee/geeUleaSvuiduOa4pueqqeaIkeaWoeiHpeaPoeayg+W3q+WXmumOoueDj+axmeiqo+Wxi+eEoeiVquaip+WQvuWQs+avi+atpuS6lOaNguWNiOiInuS8jeS+ruWhouaIiumcp+aZpOeJqeWLv+WLmeaCn+iqpOaYlOeGmeaekOilv+ehkuefveaZsOWYu+WQuOmMq+eKp+eogOaBr+W4jOaCieiGneWkleaDnOeGhOeDr+a6quaxkOeKgOaqhOilsuW4ree/kuWqs+WWnOmKkea0l+ezu+mameaIsue0sOeejuidpuWMo+mcnui9hOaah+WzveS/oOeLueS4i+W7iOWkj+Wah+aOgOmNgeWFiOS7memurue6lum5ueizoumKnOiIt+mWkea2juW8puWrjOmhr+maquePvueNu+e4o+iFuumkoee+qOaGsumZt+mZkOe3muebuOW7gumRsummmeeuseilhOa5mOmEiee/lOelpeips+aDs+mfv+S6q+mgheW3t+apoeWDj+WQkeixoeiVreehnemchOWJiuWTruWbgumKt+a2iOWutea3huabieWwj+WtneagoeiCluWYr+eskeaViOallOS6m+ath+igjemei+WNlOaMvuaUnOmCquaWnOiEheirp+Wvq+aisOWNuOifueaHiOazhOeAieisneWxkeiWquiKr+mLheaso+i+m+aWsOW/u+W/g+S/oemHgeaYn+iFpeeMqeaDuuiIiOWIkeWei+W9oumCouihjOmGkuW5uOadj+aAp+Wnk+WFhOWFh+iDuOWMiOa0tumbhOeGiuS8keS/rue+nuacveWXhemKueengOiilue5oeWin+aIjOmcgOiZm+WZk+mgiOW+kOioseiThOmFl+aVmOaXreW6j+eVnOaBpOe1ruWpv+e3kue6jOi7kuWWp+Wuo+aHuOaXi+eOhOmBuOeZrOecqee1oumdtOiWm+WtuOeptOmbquihgOWLm+eGj+W+quaXrOipouWwi+mmtOW3oeauieaxm+iok+ioiumBnOi/heWjk+aKvOm0iem0qOWRgOS4q+iKveeJmeianOW0luihmea2r+mbheWVnuS6nuioneeEieWSvemWueeFmea3uem5veWatOeglOickuW3luW7tuiogOmhj+mWu+eCjuayv+WlhOaOqeecvOihjea8lOiJt+WgsOeHleWOreehr+mbgeWUgeW9peeEsOWutOiruumpl+aug+Wkrum0puenp+aliuaPmuS9r+eYjee+iua0i+mZveawp+S7sOeZoumkiuaoo+a8vumCgOiFsOWmlueRpOaQluWgr+mBmeeqr+isoOWnmuWSrOiIgOiXpeimgeiAgOaksOWZjuiAtueIuumHjuWGtuS5n+mggeaOlualreiRieabs+iFi+WknOa2suWjueWjuemGq+aPlumKpeS+neS8iuiho+mgpOWkt+mBuuenu+WEgOiDsOeWkeayguWunOWnqOW9nOakheifu+WAmuW3suS5meefo+S7peiXneaKkeaYk+mCkeWxueWEhOW9ueiHhumAuOiChOeWq+S6puijlOaEj+avheaGtue+qeebiua6ouipo+itsOiqvOitr+eVsOe/vOe/jOe5ueiMteiUreWboOaut+mfs+mZsOWnu+WQn+mKgOa3q+WvhemjsuWwueW8lemaseWNsOiLsearu+WssOm3ueaHiee6k+eRqeieoueHn+eGkuighei/jui0j+ebiOW9seepjuehrOaYoOWWsuaTgeWCreiHg+eZsOW6uOmbjei4tOibueipoOazs+a5p+awuOaBv+WLh+eUqOW5veWEquaCoOaGguWwpOeUsemDtemIvueMtuayuemBiumFieacieWPi+WPs+S9kemHieiqmOWPiOW5vOi/gua3pOaWvOebguamhuiZnuaEmui8v+S9meS/numAvumtmuaEiea4nea8gemaheS6iOWom+mbqOiIh+W2vOemueWuh+iqnue+veeOieWfn+iKi+mDgeexsumBh+WWu+WzquempuaEiOassueNhOiCsuitvea1tOWvk+ijlemgkOixq+mmrem0m+a3teWGpOWFg+Weo+iigeWOn+aPtOi9heWckuWToeWck+eMv+a6kOe3o+mBoOiLkemhmOaAqOmZouabsOe0hOi2iui6jemRsOW2veeyteaciOaChemWseiAmOmbsumEluWLu+maleWFgemBi+iYiumGnuaaiOmfu+WtleWMneeguOmbnOagveWTieeBveWusOi8ieWGjeWcqOWSseaUouaaq+i0iui0k+iHn+iRrOmBreezn+mRv+iXu+ajl+aXqea+oeiapOi6geWZqumAoOeagueriOeHpeiyrOaTh+WJh+a+pOiziuaAjuWinuaGjuabvui0iOe0ruWWs+a4o+WKhOi7i+mNmOmWmOecqOafteamqOWSi+S5jeeCuOipkOaRmOm9i+WuheeqhOWCteWvqOeeu+awiOipueeymOayvuebnuaWrOi8vuW2hOWxleiYuOajp+WNoOaIsOermea5m+e2u+aon+eroOW9sOa8s+W8teaOjOa8suadluS4iOW4s+izrOS7l+iEueeYtOmanOaLm+aYreaJvuayvOi2meeFp+e9qeWFhuiCh+WPrOmBruaKmOWTsuifhOi9jeiAhemNuuiUl+mAmea1meePjeaWn+ecn+eUhOegp+iHu+iynumHneWBteaeleeWueiouumch+aMr+mOrumZo+iSuOaOmeednOW+geeMmeeIreaAlOaVtOaLr+ato+aUv+W5gOeZpemEreitieiKneaeneaUr+WQseicmOefpeiCouiEguaxgeS5i+e5lOiBt+ebtOakjeauluWft+WAvOS+hOWdgOaMh+atoui2vuWPquaXqOe0meiqjOaRr+aTsuiHs+iHtOe9ruW5n+WzmeWItuaZuuenqeeomuizqueCmeeXlOa7r+ayu+eqkuS4reebheW/oOmQmOiht+e1gueoruiFq+mHjeS7suecvuiIn+WRqOW3nua0suisheeypei7uOiCmOW4muWSkueauuWumeaZnempn+ePoOagquibm+acseixrOiruOiqhemAkOerueeHreeFruaLhOefmuWbkeS4u+iRl+afseWKqeibgOiyr+mRhOevieS9j+iou+elnemnkOaKk+eIquaLveWwiOejmui9ieaSsOizuuevhuaogeiOiuijneWmneaSnuWjr+eLgOakjumMkOi/vei0heWinOe2tOirhOa6luaNieaLmeWNk+ahjOeQouiMgemFjOWVhOiRl+eBvOa/geiMsuWSqOizh+Wnv+a7i+a3hOWtnOe0q+S7lOexvea7k+WtkOiHqua8rOWtl+msg+ajlei5pOWul+e2nOe4vee4semEkui1sOWlj+aPjeenn+i2s+WNkuaXj+elluipm+mYu+e1hOmJhue6guWYtOmGieacgOe9quWwiumBteaYqOW3puS9kOafnuWBmuS9nOWdkOW6p+mMkuWZr+WsoeeSpuablumdhOirs+mKqOm1quWqvOmpgemwsumIgOWUhOmIkem0h+m9mem1r+izgemMm+iTveWXtua9t+mJjeevs+i5leiKkOe3tuexqempg+mirumjhumPoumRo+mwvuWEkOe5veaqs+aur+iHj+mRjOmrlemsoueon+mkkemIuOm1k+mIvempgum7suaDu+mNpOWElemHteWbheirguiuluiVhuaHuuWsi+mpj+immOemqumQlOWAgOiQh+aCtemWtumvp+ehqOWCluirtuarrOejo+m9lOajluaqiemLrumQuumjrem0n+mKg+WElOW5rOiujuiKu+e1gOi6lemHp+aEtOe2num2iei8n+m9qum2v+iTr+mphOaohei8s+aUm+mKvOm5uuWZoOmfg+mnmOe0v+auq+izp+eZieewnuiunOeireiloOeHvumQmeeztOiphuirpue2iOimv+mPkeW3lOmIv+eZsumKmumvm+mwiOmLjOmKqeW0oOm2h+erh+eAhuarneeJmOevpOm7t+exquaHn+mQk+eHiei6iemQuOirpOWgiumWvOi7m+mLqOmNlOm2mumhjumhk+mxt+iqkumCh+mJuum0r+munumIgemttOe3i+mQqOmvoeWDqOeBg+mzp+mnmee0see0vOizu+m6qemukumwkumHk+izheWwt+aQn+e0uuaIh+edquiqpee4numLr+e0h+mOmOa9geS6meizoee2humvgeiprOe3seimr+ipgei9gumIt+mMrum0o+m1oOm2u+m0sOaRkeipv+aRnOm4m+mwpeeNt+WMreWKjOWqr+aqnOmuremxluiinue3hOmvgOWgneWSvOW5l+anqOifiOmJv+mXnue1jumgoeeBnemhpeiotumXlOigo+m7jOiojOiRkumWjumxn+a7uOm2mOmpiuaouumPteWlkOe5r+mNsOmvh+mwieipvOiWiOWZpua+rue5oueQv+aaieiroumkm+mWvemIpemRiuiokOipsOiWuuWYsOWajOmppeeSo+imrOm9j+ejr+e+iOighui6i+mcvemxremvvemDn+a1uemLj+mOteifr+irq+e4keaIlOaIqeeevOm2vOetp+mwuemfiee1s+mfgeaSn+W2oOm3pumuq+eZpOmgnOmumuW3ueiXjumliee4iei0kOimsuWJhOa2h+mAleW8s+iEm+mdmumsrumzqem3suipjuWxqOaruOmitumJhemLpueqtum9n+mMiOmQq+mbi+itjueOqOeauOWJtOWhj+aEvuaEt+mOp+mNh+m+lemWjOmIp+mKrOmojee3mei7u+mIs+mMgemgt+m9pumPl+Was+mEtuWZsuiGvueNqumrluiqhuiqkemEuuWjmee6iuiyuuWMseiVouaGkuiBteewo+mWq+mMlemvpOigkOW0jeW+oOa3tueAqOizmuednumMuOeZqeexn+W1kOasluaWlemRreilpOmWrOmLg+WYruW2l+mKoOmQkueZhumws+iqhOe4suWEt+mFiOWjouiXtuiSnuiYuuWapumCkOmpque4rearquarn+i9ouekqumLsOm4neeZmOezsui6kumdgumxuumxp+iYnuWlqeeAsueSieauruiks+ilnemwsemtjue5mumHlem3r+iXuuW7qeaqgei9lOi6que2vuasnuiftumvqueAj+morue2uemOpum3muiYoueAp+eTj+ars+acp+ekseWDguiUnuWYjeW2gemPpOeYuuiArOieu+mrj+WjmuaTvOWalemWreeAmOa3pearqOark+i9pOi8hei9huawjOiHmum4lem3uuiJq+mxuOiHoOWtjOaskum4numRvuWch+eKlueOgOa/vOasj+iFoemPjearmuikuOmLneWYuOWYnOWspOamquWLsee4temPnemhmemwu+m6vOaNq+eHnOaHo+mNhue+i+iskOeNvOemsOa+oOmdpum7vee3sue5humWlOe3oeisqOmpgOmlg+atv+mPjOmJrOmQg+iopemIrumvoui8pumvsOiUpuijiumaieiYl+Wbgemhoui6oeiLp+WagOiBueWEguWZpemnkemHueWEuuiss+aFqueUjOi5o+easOi9oee0lee+humIueirnumnoue4ueWsqumHmemPt+mQoOiYhOmoj+e2uuamv+ejp+mgjumgj+mwreWDieiVgeaFs+moq+e5vuanp+mIkOWsmeaqo+aIp+eGl+mMhumPmOmPuee+pei5jOiqmuitmeiVjue5sOejvei5uuaEnOmNpeevi+mLn+aSs+mvlueFouibuuW3sOizleifo+mwjeipmOW2h+mXg+imt+m0neiprue2o+i8h+mKk+mXi+mXleaEqOiVmOWsiOapiOmjqui7lOW2uOigkee4n+mKo+mhsOichumir+avv+eznee5heWXh+mKq+epoemOqemviumHg+ioleWnjemouOmHpOmxlOWdsOaupOintOWOmeeBhOeVrOipteirl+eAi+ismuWhkuiSlOW8kui7vuiysOmIsOmwo+e2rOaUhOe0k+mWgumRoOW7nemnn+e3pumNtum3peiXqumkv+mivOmOquisluepjOiqtuiTgOeMu+WXqeiEp+mXpemJiOmwqOmIpumukOabh+mJremMn+mgh+WEu+mks+mQi+mPnOmfnOmLsee3uem1nOmXkOeztum9oOmwt+aFn+mIhOmHt+aRtumjqeexnOm8ieWqp+iGg+e0iOe2sOi8nuirieW5g+mXiOa6iOa9v+eRi+mfmeeFkumuqumWv+iQtem9t+mElOW7oeaGruWrtemolum1oem2qemkvOmsqeeSveimoeehpOiOp+iWn+iYmuWztOeNq+Wru+m3tOeZh+iglOeniOi6muiWjOmkiemppOe3l+mll+WYteeAn+mpjee2g+ain+ewq+iku+aTt+e0sue6iOmZmOa7jumliOm1guipoemgiuirvOmJiemPh+islOa+qemxiOWhpOa9r+mxmOWfoeWpreakj+awrOWOtOi0l+WEvOWFl+iunuaHqOmWhumHhemtmOmlnOm8tOeFrOi7uum3gumwqemdqOisgemEtOabhOeHgeipkuWbiOW2p+mjtOaHjOmpm+e4iui7vOiyvemHlOmOsOmQv+eYnuiJpOmKpueZruWhi+m2r+e4iOmOo+aUluWatueAheeAoOeTlOm4mueZremgpue9jOmPnuiVlemKqumtt+WCtOS/geirm+irreiVt+W0s+mjq+mWvuWrl+e0huimpuatn+mIuum1kum3uOm9rOarnumztum7v+mJnumEhuiVk+aDsuaFjee0nOmfnuaunuaws+eTmui2sumPqOmnlOizvuWYluW5mOewgOitlue5kuitq+iplOmHl+isq+i8kum3k+a5nue4nealqOi7q+izkeemjum0huirjeW0oumJpumMmueuj+morearm+ailOi7uei8iui0hOm3meiehOe4tui6k+i6keintumNvue0gue4kOS9h+arp+mKluWbgOmljOmhs+mohee4i+irkemQsuirrue3h+i8nOiysuecpemMmem9nOmvlOWCr+irj+motumvq+mPg+e6mOi6pumxkuiogeitvumDpOeMm+awuemYquWjn+WgluWeteWiiuaqvuiVkuiRpOiTp+iSk+iPh+angeaRo+WSpOWUmuWTouWZneWZheaSheWKiOislOilhuW2tOiEiuS7v+WDpeeNgem6hemkmOmkt+mliumloualnuaAteaHjeeIv+a8teeBqea3t+a/q+eApua3oeWvp+ezuOe1nee3lOeRieaimOajrOahiOapsOarq+i7sui7pOizq+iGgeiFlumjiOeziueFhua6nOa5o+a4uueiuOa7vueemOmIiOmJlemLo+mKsemLpemLtumQpumQp+mNqemNgOmNg+mMh+mOhOmOh+mOv+mQnemRpemRuemRlOeprem2k+m2pem4jOeZp+WxmeeYguiHkuilh+e5iOiArumhrOifjum6r+mugemug+mujumvl+mvnemvtOmxnemvv+mwoOmwtemxhemevemfnem9hyc7XHJcbn1cclxuZnVuY3Rpb24gcXFQWVN0cigpXHJcbnsgXHJcbnJldHVybiAn5ai/5amA5Z+D5oyo6aSA5ZGD5ZOA55qR55mM6JS85amR6Yqw56KN5ayh6ZqY6Z6N5rCo6a6f5ZS15rSd5pqX5bK46IO65qGI6IKu5pi755uO5Ye5542T54as57+x5Lu46Ky45aWn6KWW5aWn5aaR5o2M5pyz5pyz5aaR56yG5LuI55ak5aaR6I+d5p+t6Z225aaR6ICZ5Z2d6KaH572i5aaR55qb5p+P5ZKf5pO65L2w5pWX5rmD56iX55mN55mN5pCs5omz55ii6aCS6ZeG6J2C5rG+57WG5p+I55Oj5p+I5YiF57uK57aB5bmH5qKG5b6s5auO5Z656Jyv5auO6JqM6ZWR5b6s6LCk6Iue6I+i56yj6KSS5Ymd6JaE6Zu55rm65aCh5oCJ5a+256Cy6JWU5oeq6LG56bKN5ZqX5p+456KR6JWc6JCG6Iud6Lyp5o+56LWR6ZKh5L+754uI5YKZ5oOr54SZ6KKr5riA6Iuv5aSy6Iuv6ZWa57u355St5rO15Zij6YCs6IW35ay25Luz5ZWa5q+j5b2856Kn6JOW5bmj5rut5paD5q+W5biB5bqH55e56ZaJ542Z5byK5oCt5r685aOB6IeC6ZC06Zmb6Z6t56y+5o+Z6LK256Kl5qWp6K6K5Y2e6L6n6L6u6L6u54y15pG95ruu6Y+i6Yy26bOW5oaL6I6C55mf5b2s5paM5r+S55K45r+x5pGI5aim5qCk56qJ55yq56eJ6aW854Kz55aS5Lim566l6I+g6K2S5aat6ZK16I+g5Y2a5YuD5pCP6ZOC566U5Lyv5bib6Ii26ISW6IaK5rik5rOK6Kik5bOs5Y2c6Kqn5Y2f5Z+g6Iqj6Yi96I2557C/6JSA5oCW5pSD54yc6KOB6LKh6LKh6LKh5qOM5qOM6YeH5Z+w5amH6JSh54iY5YKq6Jus5q6Y5oWZ5Y+D54G/6Iqy6Iix5Lu6542K6JS15oeG6ZCw5qe96JO45oS65Y6g5oah5YG05YaK5oG75bGk56uy5o+357SB6Iys5ZeP5qWC5qWC5pC96ZWy5bKU5qeO6K+n5ouG5p6I6LG65pCA5YKq6J2J6ZW16LCX54CN6ZOy5rWQ6Zeh6aGr6Kqv54yW55W855Se55G66JCH5YG/6IKg5bug5pWe55WF5pm/5YCh6Lar6I6P6YiU6Ky/6Ky/6Ky/5ryF6Kis54KS6LuK5omv5b655o6j5rKP556u6YO054Ol5a645bCY5puf5b+x5YaX6Zmz6LaB6KGs5pKQ56ix5bO45qmZ6I2/54+15aGW54+15oey5YOc6Ku05om/5rWn6aqL56ek6Zij55e05q2t5YyZ6IKU5ZGO6IKU6IKU5oGl5q2v5L6I5ZGO5ZOn6LaQ5pal54K96Iy65rKW6J+y5ry05a+16I+X57WS5bix5bix5amk5YO96Ja15LuH55qX556F5b+45rq05Yid54Kq5bua5bua6LqH6Yuk6Zub6JKi56+o5qSY57uM5YKo55+X5pCQ6Kem6JmV6YGE5beb55GP5qS95Lyd6Ii56YGE6LOX55au5Zux5bmi5bqK6ZeW5Ym15qyl54KK6IWE6IWE566g6IiC5qS/6Yye6ISj6Yye6JKT6KCi5oil54Sv55a15Z6Q5r+o6ZuM6L6t5r+o55O36Kme5rOa5YmM6LOc5L296IGq6IyQ5Zux6IyQ6IuB6IuB5YeR57KX6b2w57CH5aiW6Lm/56+h56qc5YeX5oWb5oWb6ISG55iB5r+i5r+i5r+i57G/5rSK57G/56OL5pKu6auK5o6q5oyr5o6q5rqa5Z6v6I2F55ip5ZKR5rGP5qeR5q255YKj54C75bi25q6G56yp6LS36KKL5b6F5puD5oCg6IC95rO55YaE5ZW06YO45o6454ua54ua5rCu5rO55oOu5oOU6K+e5by555aN55W25r6i6buo6JWp5r6i5Y+o5pCX56iy566M5bO256W35a+86I+/56iy5oK85qqk55uc5b6z5Zia5ZOL57Cm54eI5oaV562J57Cm5Yez6YOw6Kuf5b295ZiA5bu45pW15bu454uE5rak57+f5auh5oq155an5ZOL5rin6IuQ5rin5bya6YCS57yU6aKg5o6C5ruH56KY6bue5pWf6Z2b5Z6r6Zu75L2D55S45omC5oOm5aWg5reA5q6/5reN5rGI6bWw6Jyp5YiB6Yu96ZOe6Yqx6Jyp55Oe5Zey5rir5rir6L+t5aqf55aJ546O6aWk5rGA55S65bW/6byO6ZSt6JCj5b+K5Lif5bSs56yX6JOz5oWs5oaF5bSs5L6X5oGr5bK954uq5YWg6aym5Lmn6Le/6I2z5rWi5ZOj5Zif552j5q+Q5riO542o5riO6Zm855255bi+6I2w6ZWA6IKa5Zal5Zal5aaS6Y2055+t6JGu6JGu5pa36JGu56KT5YWM6ZqK5oC85aKp5rKM5aO/5pWm6aCT5Zuk5rKM55u+6YGB5o6H5ZOG5ZOG5aWq5Z6b6Lqx5py26Le66Ii15YmB5aqg5oac552L552L6bmF55qS6aKd6K6555qS5oKq6IuK5om86YGP6YSC55qS5oWB5rSP44Or5rSx5bCS6IG25rSx4pGh6LSw5r2R6JeF562P5rWM55a66ZiA55C654+Q6Jep5rGO55Wo6aOc5qiK55++6ZKS54C/5rGO54Wp5Y+N6L+U56y16LSp5rC+57KE55a65rG45reT5rG46IKq5oi/5rG45aao5rG45rG45rG45YCj5amU5oKx5ZWh6aOb6JCJ5Y6e6K+95ZCg6IWT5bui5rK45puK5qO86YWa546i5rCb5rG+5aai5aKz54Sa5rG+5biJ5aWu5aai5b+/5r+G57Kq5Lu55bS254ym6JyC5bOv5bOv6aKp55iL54O95ryo5rqk5ryo6K695ZSq6bOv5LuP5aid546e5pW36Iaa5a216I205ouC6L6Q6Kuo5rCf6Iu76Iyv5L+Y5qO05o2K5raq5rmi6KKx5byX55Sr5oqa6L6F5qSo6Yec6Yeh6ISv6IWR5qSo6IWQ6LW06Kuo6KaG6LOm5b6p5YKF6Iu76Zic54i26IW56JCv5Yao6K6j6IOV5aaH57ya5ZKQ5Zm25ZeE5aef5aaA5ryR6Yij6JGi5ryR6L+A6Iu35p2G5p+R6IqJ6IKd6L+A5oa+56eG5ZmJ6LWj572T56KZ6Yu855+86Yet572B572T5riv6Yet56ae55qL5ruI6IaP6aS75rqU6Y6s6Y6s6Y6s5ZOg5ruS5oio5pOx5oiI6bi96IOz55aZ5Ymo5oSF5Zm25ZKv6Juk6ZiB6ZqU6ZOs5YCL6IyW57uZ6Imu6Iyb55WK5rWt6I+u57655Z+C6IC/5qKX56yB57O857O85aGo6b6a5qCx5YyR5Y635Za25byW5bep5rGe54+Z6LKi54+Z5rqd6Iq26Iq26Iuf6LGe5Z6i5aq+5aq+5aSg6L6c6I+H5ZKV566N6K+C6ZK0566b6I+H6byU5ZKV6JuK5ZeX5ZSC6aqw6K+C6aGn5YeF6ZuH5Ymu5ZGx5Ymu5a+h5ZWp5ZWp5LmW5p605oCq6I+F6Zai6I+F6JKE6KeA5rar6I+F5r2F6YGm5r2F6YGm5rS45bqD6L+L55Gw6KaP5Zyt56GF5q245LqA6Zao5Yym5aq/6Kmt55m46JOV5Yyx6Jur6LK05Yi96L6K6JSJ6Lyl54Wx5ry35ZyL5reJ6KO56YGO6ZOq6aq46ZmU5Zeo5rCm5Lql5ZeQ6aqH6YWj5oao6YKv6Z+T5rWb5Ye+5a+S5Ye+6Ku055m357+w5pK85o2N54yC5oa+5oKN54yC5rGZ5ryi5aSv5b+86Iiq5aOV5ZqO5r+g5q+r6YOd5oGP56eP5ZG65ruY5ZOs5pu35Zes6I+P5Yq+56ed5ZWd5ZOs5Yy855uJ6LKJ6ZiC6I+P5ra46LWr6KSQ6bmk5ZO/5r225au855eV5L235ZOP5oKi5ral5oKZ5qmr6JiF5oGG6L2f5pmO54OY5rix6bS76JGT5a6W5a6W6JGS57OH57OH57OH54q85Y6a57OH5b6M6Iu46Iu45ZS/55Ga5aO654Wz5662566254uQ54Wz54Wz5byn5ZSs5ZSs5oi25rKN5oi25oi25Z+W6JWQ5r6V56OG56OG55W15YqD5Zuu6Kmx5qeQ5L2q5oe35YeG5aOe5q2h5a+w5qGT6YKE57ep5o+b5ry25Zaa55eq6LGi54SV5raj5a6m5oqd5bef5bef5puC56O66J2X57Cn55Gd55Gd55Gd55Gd5oSw57io5oGN5bef5rSD5aqI5aqI5bmR5oGi6JuU5YaL5q+H54+75oWn5Y2J5oOg54+76LS/56e95rWN54Op5Yyv6K6z6K+y5rWN6I2k5ra95q6Z6a2C5ri+5amr6LGB6JC/6ZKs54Sx6ZWs5oiT5oOR6Z2D6LKo56aN5Ye75Zy+5qit5YOf55W456i956mN566V6IKM6aWl6L+55Zmt6K6l6baP5aes57up57yJ5ZKt5p6B5qOY6L6R57GN5r2X5b225Za855a+5rGy5pej5auJ57qn5ZOc5Yei6ISK5bex6JOf5oqA5YaA5oK45LyO56Wt5YmC5oK45ZOc5a+E5a+C6KiI5rGc5pej5b+M5ryI57un5rGc5ZiJ5p635aS+5L2z5YKi5ZKW6I2a6aKK6LS+5pux6ZK+5b6m57OY5YO55rOH6aeV57OY5aen55us5aCF5bCW56y657Ch54WO5Yey6IKp6Imw5aW357yE6Iyn5pK/5p+s56Kx56G35ouj5pK/5b2F5YC55b2F6Ku06Jam5qeb6Ym06Le15r+66KaL5qWX566t5Lu25o+16Iiw5YqN6aWv5riQ5rqF5ran6Li65aOD6JGB5bCH5qez6Iyz5b2K6JSj5qGo5aWo6Kyb5Yyg6Yas5aSF6JWJ5qSS56SB5r2Q54OE6Iyt6YOK5rWH5ayM5ayM5Zq85pCF6ZOw55+r5L6l6IWz54OE6KeS6aW65YSM54OE5Ym/5ZiL6YW16L2/54+T5ZiC56qW5o+t5bi55rmd56e46KGX6Zi25oiq5Yqr5YWv6I6W6IGZ556Q6a+o5YCe6ama5qOI57Kz57aT5Li85qqg5oas6aC46Z2c55KE5pOP5YK55b6R55eJ6Z2W542N56u25YeI5rOC5YOS5ZW+56m257O+546W6Z+t546W54G45Yu85rC/5Y6p5oWm6IiK6Ie86IiF5ZKO5YOm5ZKO6Z6g5L2d54uZ55a95YqH6am55YyK5oy25ZKA5oCH6IiJ5rKu6JeC5bKg55Ca5aeW5YC25bKg6Lie5ra65YC25ZG05oOn5bKg5ra65raT6bWR5raT5oOT55y35o2y5raT55ia5pSr5rG65bSb5bSb5Zq85qGU5YKR5ZWR552r56ut5rSB57WQ6Kej5aeQ5oKI6JeJ6Iql6Y6F5b6j5aSw55al6K+r5bGG5Yen6I2V6Ye/5ZSr5aaX54+S5Zmk57eK5amC5YOF5q6j55CO6Z2z5pmJ5Zmk6I+m54Os6ZST5rWV5YuB6I2K5YWi6Ka65ZC35ZC36JWd5rGu566Y5ZGB6LuN54SE5rWa5rWa5rWa5rWa6YOh5rWa5ZaA5ZKW6Ymy5ZKv6Zae5o+p5o+p5YmA5oWo5YiL5aCq5YuY5Z2O5q2D55yL5aud5bW75bW75pGD5b+85Zul5b+85qCy5rSY5qCy6Z2g5Z235bKi5p+v6YyB5rqY6YyB6JCq5rac5ZeR5aa45riH5bCF5bCF5oSZ6YyB6IK76IK75oGz5Z6m5aaU5aaU5raz5oGQ6Iqk5ZWM5pGz5ZuX6Yem57CG5ZaW5ZOt5bSr5qWb6YW35Y6Z6KSy5rS/5Z6u5oyO6Leo6IOv6LW956235L6p6LW95a+s56q+5Yyh56266KqR5qGG57qp5rSt57qp5rOB5omd55uU5bK/56q66JG15Za56a2B5YKA5r2w6ZqX5r2w5aCS5bSQ5raD5raD6JGA5ouh6Zyp6ZeK5p+G6I+I5ZaH6IeY6IeY6L6j6I+I6I6x5ZS75pSL6JeN5ryk5a2E5oum6JeN6ZiR6Jit54C+6LCw54Gg54Gg5pSL54Gg54Gh5ZqC5ZO06JOI5ZO06JOi6JOi6JOi54O65bSC5bSC56qC6I2W5L2s57Kp57Wh57Wh5bSC5Zie5rO65qqR5qqR5qqR6Jee6JSC5YSh5Z6S5qqR5Y+76aGe5rGo5qOx5qWe5ZSl5Y6Y5oKh54qB6buO56+x54u46JOg5ryT55CG5p2O6YeM6bKk56S86I6J6I2U5ZCP5qCX5amv55ag5Yqx56C+5ZGW5oKh5YKI5ZSO5L+Q55ei56ud57KS5rKl6Zq25Yqm55KD5ZOp5ZSh6IGF5Ze55raf6ZWw5buJ5oaQ5raf5biY5r2L6IeJ5Ze55oiA54WJ54WJ5oKi5ra85qiR57Kx5oKi5YCG5ZSh57On5ra854W35ra85au956q3542g55mC542g5a+l6L695r2m5a2S5pKC6ZWj5ry75paZ54Ou54Wt54Ou5oyY54215ZWJ5ZWJ5r2+6ZyW6Ieo6YSw5r2+5ZWJ5Yeb6LOD5oKL5p+D546q5aSM6JW26b2h546q5Ly2546q5aSM6Z2I5aSM546q6aCY5Y+n5rOg5aq555CJ5aq556Gr6aaP55Wx5Zqg5aq56JOF5qCB6Zm454Cn6IG+6IyP6IyP56q/5rmw5rO35rO36IyP5rqH5rqH5bWd5rqH5bGa6ZmL5bus55un6aKF5bus54iQ5o6z5Y2k6JmP5Zmc6bqT56KM6JWX6JWX6LWC6JSN5r2e56aE5rel6Zm45oiu6aa/54SS54SS5L2A6IaC5bGl5bGi57yV5oWu5rCv5L6T5Y2b5oWu5rel5qyS5a2M5a2/5rum5Y215LqC56ik55Wn5Zu15Zu15Zu15LuR5Zu157q25Zu15ZuJ6J665ZuJ576F5ZuJ5YS46aqh6KO46JC96Km76Km757Wh5aq95auy54q454q454q46aqJ57215auy5ayk5Z+L6I2s6bql6LOj6YKB6Zyh5oWy542M6KC75oWy5aua5aua5aua5aua6LCp56yA5rGS5ZCC5rCT5p2n5ryt6LKT572e6ZSa5q+d572e6ZOG6IyG6IyC6JC66JC66YKI6LK/5bqF5Z2G5p6a54O46YW26Iu65rmI6I6I6JG/5aqS6ZWB54O4576Z5pin5a+Q5aa65aqa6ZaE5oK25YCR6JCg5oee5qqs5pOd6ZSw5o655aSi5o655L6O6Yaa6Z2h57Oc5rSj5rSj5byl5rSj56eY6KeF5rOM5ru15ru15bmC5amC55yg5amC5YaV5YeC5YuJ5aip57yF5aqU5aqM5aqM5aqM6YKI5Luv57ey5bq/5Luv56++5pCj5aeE5oq/55q/5YuE5oKv6Zap55yA6J6f5ZiE5L2y5rS65o6157mG5Ze85pG55Zqk5Ze85Ze85Zqk5Zqk5Zqk5rKs5rKs5Ze85Zqc6buY5rKs5Ze85a+e5bie5rmI5ZOe5rmI5ouH54mh55Wd5aeG5q+L5Yuf5pqu5Yuf5Yuf5oWV5pyp5pyp552m54mn56mG5Zex5ZOq5aag5aag5ZOq5ZOq5aag5rCW6Yei6Im/5oGn5p+w6YGW6I6u6Zuj54Gi5pKT5oKp5oKp6ZaZ5reW6L+h5rW956a45auw6IO95aau6ZyT5rej54uU6IOS5oqz5rK15auf6Iap5bGw5rq66JSr56el5aep56K+5pK15o275rew5aiY6YW/6IyR5p2Y5raF5Zer57O15ZWu5Zer6ZWN5raF5oKo5p+g54ue5Yed6Iun5oun5rOe54qH5rKR5aae54uD5ZOd5ZOd5ZOd5oy15Lyu5oCT5Lyu5Zuh54WW55af55af5oyq56mk56mk5ZaP5ZGD55Ov55Ov55Ov6ICm5ZiU6ICm5rKk5ZWq5rGD55Of5ZWq5ZWq55C25ZWq5qOR57Cw5qOR5rmD5ZOM6KW754CL55uk56OQ5piQ5rq/5Y+b5Yik5LmT5Y6Q6Iex6ICq55yr5ouL5Z6J6ZOH5Z6J5Z6J5Z6J5Z6J5oCM6IOa5o6K6KO05amE5amE6JOc5ae15rKb5r+G5rmT5rOZ5oqo54O55r6O5oaJ6I6R5aCL56G856+36Iao6JCg6bWs5ZSq5rm05Z2v56CS5Zm857qw5oC25Zm855C15q+X5ZWk6KOo55ay5oC26IuJ55ee5YO75bqH6K2s6JC55aql54i/6aiZ5b2v5oWT55Oi5ZiM5r2O5r2O5oua6aC76LKn6ZeG5aiJ5LmS5bK85rOZ5rOZ5bK85oaR55SB6K+E5bGb5bKl56eh5quH5ZiZ5bKl6a2E5bu557KV5YmW5Zyk6IiX5Zyk6I6G5YyN566B6JKy6YCL5Zyk5ZyD5pmu5rWm6ZCg5pud6ZGk5YmY5YmY5qCW5ZiB5oK94pGm5YeE5ryG5p+S5rKP5ai46KuG5riP5b+u55Wm5bSO6ISQ5paJ5peX56WI56WB6aiP6LW36LGI6Zij5L2x5pm15aWR56CM5ZmQ5rCj6L+E5qOE5rG95reH6K6r5ouk5rS95pKB5omm6ZKO6Ymb6IqJ6L+B57C95Luf5Zeb5aKY6buU6Yyi6ZKz5rmU5r+z6YGj5re66LC05aCR5bWM6Iqh5Zeb54aX5r+46IWU576M5aux5aux5by354aX5qmH6ZS55q+D5L2+5Zas6Lat5Zas5Zas5ben6Z6Y5q+z6Las5bOt5L2+56uF6IuG6IuG6Iu05oSc6IuG6ZKm5Z+Q5YSt6JOB5ZmW5oeE6Iq55qqO5ZmZ5a+R5rKB5ZyK6LyV5rCi5YK+5Y2/5YeK5pOO5ZWo5rCw5YeK6aCD5Z+l5bqG55C856qu5YGi5Z216YKx5rWX5rWX5Zua5aqo5rOF6LaL5bKW6JuG5rWA6LuA5bGI6aeG5rig5o6r5amc6b6L6Laj5Y6+5Zyc6aKn5qyK6Yab6JGy5rSk55eK5ouz5ZCg5Yi45Yun6JKb54KU55i45Y276bmK5qa356K66ZuA5bOu576j5Zir5Zir5aeM5aqj55Ok5aOk5pSY5a2D6K6T6Zqi5pO+6Zqi5oO55oW55aOs6Iqi5Lq+5raK6Z+n5aeZ6KqN5YiE5aaK57qr5omU5LuN44SW5oiO6Iy45auG6I2j54Cc5auG5auG5auG57Wo5YaX5riY5riY56a4562O6KCV5r+h5a265rSz5aq35Lmz6IKX5Y+66KSl6Luf5pyK5oOi55Ge6Yqz5r2k5r2k5am85byc5r2154GR6JWv6IWu6bOD5Zm75Zm75b2h5Y+B5YKY5r216Y6f6Y6f5Zaq5pCU6aiS5o6D5rqy55Gf6ISD5r6A5r255YOn6I6P5ZSm5pGL6Za35Lm357qx5YK75YC957m656+p5pus5aeN6Iur5p2J5bG+5Ym854W96Yek6ZaB6Zmd5pOF6LWh6Iaz5YOQ6KiV5YKT57yu5aKS5YK35ZWH6LOe5pmM5Lup5bCZ6KOz5ZOo5ZOo5ZOo54eS6IqN5rGL6Z+25Luv5ZOo5Y2y6KKR5aWi6LWK6Jm16IiZ6IiO6LWm5pGC5bCE5oWR5riJ5ra76JSO56C35aa95ZG76Ki36KOR5aCU5aig6Ki36Ymu54CL6LCJ5ay45Y2Z6IWO5oWO5qSu5q645rOp55Sl54uM5Zyx57mp5ri75aKt5LmX5aSd6IGW5rqu5aa35rWJ5rmk5r+V6Kmp6L+J6Jmx5ou+5Z2n5rmB5rqh5LuA5Zaw6JqA5a+m6K2Y5Y+y55+i5L2/5bGN6aa25aeL6Ym95rK25LuV6L+j5p6+5YCz5out6KqT6L+j5Yui5rmc5Zec5Zms6YCC5LuV5L6N6YeK6aO+5rCP5be/5oGD5Y6U6KaW6Ym96I2N5o6x5rie5Z6o5aO95rat5ZSu6L6k55ep542j6JSs5p6i5qKz5aed5p2854Ct5Z+x5b+s6JSL55aP5pu46LWO5a2w5a2w6Jav5r+Q5puZ572y6JyA6buN55mZ5bGs5pyu5rKt5qi55aiV5oiN56uq5aKF5bq26Jau5ryx5oGV5ZSw6ICN5pGU57ye55Sp5bil5ou05ou054GA5Y+S5pGk6Kqw5riB6IWE5oyp5ZCu5qmT6aCG5qmT6Kqs56Kp5pyU54iN5YeY5YeY5YeY5YGy5L+s5ZGe5Zmd5bGN6IKG5bOZ5Zej4pGj5Ly65aeS6aWy5bez6I+Y6IGz5oCC6aCM6Y655rWo6K686Kqm5rqy6ImY5pOe5Ze96JiH6YWl5L+X5auK6Laa57Kf5YOz5oSs5rqv6Lmc6Ki05q2X6YW456WY5Yy06Jm96ZmP6Zqo5rW96auT6Kq25bWX56mX5ayY6Zqn56Wf5a2r5pCN56yL6JOR6YCh6YCh57iu6Y6W6Y6N6Y676JGw56ai5b215ZKc5ZKc5ZeS542t5oye6LmL5rKT6IOO6IuU5a2h54+G5rqZ6YWe5b+y5b+y5ZGU5Z2N5pGK6LKq55ir5rup5aK15qqA55ew5oab6LCt6KuH6ZK95q+v6KKS5rmg5o6i5ZiG5rmg6aWn5rqP5pCq5ryf5qmW6Iab55Gt5rqP5YCY6Lq65reM6Laf54Or5YyL5r+k55Gr57um5YyL5rSu5rSu5YyL5YyL6KiO5aWX54m56aem6aem5bqd6KqK54+25YmU6Lii6ZSR6Kuf6Lan5rin5rin6LuG5quV5ZqP5oOV54+254+25bGf5YWy5amW55Gx55S255Sb5oGs5amW552T54uj5qKd6L+i55y65pyT6JCc6YmE6JCc5buw5Y6b54OD5rGA5L655rif5rif5L655L656ImH5Ze156ex6YWu556z5ZOD5oGr5rW15YOu56Gn56Gn6Iy857Wx55eM5YG45oqV6aCt6YCP5Ye456a/5rml5ZyW5b6Z6JKk5YeD5buc5rGi5rGi5YWO5rmN5ZyY6JO36aKT6LmG6JyV6LmG6LmG5piL5bGv6IeA5p+C5Lub6ISr6KKJ5ouV6aee6KKJ5qSt6YuW5rKw5ZS+5oyW5ZOH6JuZ5ZOH5ZOH5ZKT6KWq5q2q6L+v6LGM5aGG5aGG55CT6aG95rGN54O35ZSN5ra05qKa6ISV55qW5oOL5a6b5ZWY6JCt6IWV5b+56L+L5YyE5b+56Jun5pqA5b+55pyi6I6j5aaE5aqZ6Ji25ba25L256Z+m6YGV5qGF5ZyN5oOf5oOf5r2Z5r2N5oOf6IuH5bSj6YC25YGJ5rKp5bGX57qs5rKs5aKb6I+L5bWU5aqm5bWU6Ji26I6F5rit5aqm5aKb5aKb6KGe55if5rqr6J6h5aaP6IGe6Yir5rKV56mP57SK5ZWP5ruD5pqh55Ou5oyd56qp54Wx56qJ6I6q5pah6Iel5qWD5rKD6I6B5Zea6ZKo54OP5rGa6I6B5YGT5Zi46JWq5qKn5ZyE5ZGJ5q+L5ais5LyN5ZyE5ZCY5qmG4pGk5L6u5Z2e5oiK6Zya5pmk57KF5Yyi5YuZ5ZyE6Kqk5Y6d5Yee5ZS96KaA56GS55+95pmw5Zi75omx5ZS254qg5rWg5oGv5ZSP5oKJ6Iad5rGQ5Y6d54aE54Ov5riT5rGQ54qA5qqE6KKt5bit57+S5aqz56an6ZOj5Ya85L+C6ZqZ5oix57Sw56ON6Jm+5Yyj6JGt6L2E5Y+a5rW55rW55rW56IqQ5Y6m5ZeE5Zy36ZSo6ZSo5ae65L2h6a6u5rGY5ZK46LOi6Yqc6Ii35ai05raO5aa25rqT5pi+6Zm65ZOv542757ij6IW66Zml576o5a6q6Zml6ZmQ57ea5qW/5Y6i6ZW26JCr6JGZ6KWE5rmY6IqX57+U56Wl6Kmz5oOz5aeg5ZWN6aCZ5be35r2S5r2S5aeg5r2S57CY56Gd6ZyE6JC35raN5Zqj6ZSA5raI5a615reG5ZOT5bCS5raN5qCh6IKW5ZW456yR5pWI5qWU5Lqb5q2H6J2O5Zqh5ou55oy+5pC65bOr5pac6ISF5ZaI5Yap5oKI5ZWj6J+55r6l57uB54CJ5aGu5bGR6JWy6Iqv6ZSM5L+95Y6X5Zm65b+75p265L+h6KGF5pqS552y552y55GG6IiI6Ym25L6A5b2i6YOJ5Z6z55GG5ZyJ6I6V5oK754uM5YWH5YWH5rS25YyI5rG56ZuE54aL5ZK75L+i6aWI5py95rq055CH6I6g6KKW57uj5q2U5oiM5r+h5q2U5q2U5rmP5L+G5rG76JOE6YWX5rqG5peu5Z6/55Wc5oGk57Wu6IOl57eS57qM6JOS5aqX5aqX5oKs5auZ546G6YG455mj5aa257Wi6Z206Jab5pWp5rOs6Iak5rSr5Yub54aP5o+X5rS15ZKw5rWU57SD5bu15ZKw5Y2C6KiT5Y2C6YGc5Y2C5aOT5ZG36bSJ6bSo5ZCW5ZCW5Y6K5Y6K6Jqc5bSW6KGZ5rav6JWl5ZWe5Lqe5Ya05ry55ZK96ZiJ54WZ5q6X6bm95Zq05aaN6JyS5ZWx5air6KiB6aGU6Za754O+5rK/5aWE5q6X55y86KGN5rmu5ruf5aCw5ay/5Y6t56Ca6ZuB5ZSB5b2m54aW5Yy96LCa6aiT5q6D5aeO6bSm56en5pic5am45L2v55ah5ZKp5qij6Zm95rCn5Y2s55mi6aSK5qij576V5pK95bS+5bKG5oSu5oSu5bCn5rub56qw5oSu54OR5ZCG6IiA6JGv5am56ICA5YC75ZmO5YC754i65Zii5Ya256u+6aCB5o6W6YS05peq5puz6IWL5ray5ray4pGg5aO55oKY5o+W6ZOx55Wp5ZCa5omG6aKQ5aS36YGX57CD5YSA6IOw5a+y5rKC5a6c5L6H5b2d5o6O6JqB5o6O5bez5LmB55+j5aeS5YW/5oqR5pic6YKR5bG55YSE5b256IeG6YC46IKE55ar5rSC6KOU5ayR6JeZ5b+G576p6LCl5rqi6K+j6K6u6LCK6K2v55Ww57+857+M57uO562D6I2r5rSH5q635aC36ZqC57Wq6I225qqt5ams5aSk6aOu5ZCa5ZCy6Zm76Iya5ri255KO55KO6bmw5oeJ57yo55Gp6JCk54ef6I2n6J2H6L+K6LWi55uB5b2x6aKV5ZO955yP5Zay56C956C96IeD55eI5ru95r6t6LiK6Ju55oC65oC65oKA5oC65oG/5rmn6byh6LGz5rKL5ru65rKL5bCk55S06YKu6ZOA5rKL5oCe6YGK6YWJ5rSn5LyW56WQ56WQ6YeJ6K+x5Y+S5a2n5omc6I+457qh55uC5qaG6Jme5oSa6IiG5oKH5o+E5o+E5riU5o+E5o+E5riU6ZqF5LqI5aiv6Zuo546Z5bG/56a56I2i5aiq576956Ch5Z+f6IqL5ZaQ5ZCB5ZaB5Za75bOq5b6h5Yys5oW+542E5ZS36KyN5rW05a+T6KOV6aCQ6LGr6amt6bSb5qOp5a+D5rKF5Z6j5aq05Y6h55GX6L6V5ZyO5ZyS5ZyS54y/576x57ej6YC65aSX6JKd6JG+6Ziu5puw56655qi+6Lee6ZKl5o2z57K15Lu05ZO+6Zax56eQ5Zup6YOn5p6D5q6S54uB6YGL6Je06YWd5pqI6Z+75aSD5Yyd5ZKC5Y2G6YWo6YWo54G95a6w6YWo5L6i6Iys5rSO55OS5pqr55OS6LON6LON6auS6Lmn6Lmn5Ye/6Je75qCG55qB55Kq6Jqk55Kq55Kq5oWl5ZSj54G255Kq5aun6JCa6I2d5r6k6LOK5oCO54a355KU5baS54a357Sl5Zaz56K05pyt6L2n6ZOh6ZaY5Zaz5qCF5pC+5ZKL5ZKL5oCN5oCN5pO/5paL5a6F5pC+5YK15a+o55675q+h6Km556el6LeV55uP5pas6L6X5bSt6LmN6Ji45qOn6aKt5oiw6LeV5YGh57a75qif5baC5b2w5ryz5by156SD5rao57KA5omZ6LOs6LSm5omZ6IOA55i06Zqc5aax5pit5om+5rK86LaZ54ez572p54uj6IKH5L2L5Ze76I+l5oKK6Juw6L6Z6Y266ZSX6JSX6YGp5reF5rK05paf5auD55SE56Cn6Ie75rWI6Yed5rWI5b+x55a55rK06ZyH5qGt6Y6u5L+l56+c6KuN6KuN5aeD54uw6Lit5aeD5pW05ouv5Zu454Kh5bin55eH6YSt5aeD6Iq35rGl5LyO5rGl5YCB5YCB5rGl6ISC5rGl44Go5p6z6L2155+X5reU5q6W56eH5oOq5L6E5q2u5qC65Zy16La+5ZGu5peo6KG55qK95oya5o636Ie46Ie4572u5bic5bOZ5reb5r2q56ep6ZuJ6LOq54KZ55eU5rue6I+t56qS54uG55uF562X5aaV6KG36JSg56iu5aaV5YGF5Luy6KGG5rSA5reN6Km26Km26K+M57Kl6L206IKY5bia5ZKS55q65a6Z5pi86aqk5ZKu5qCq5ZKu5ZKu6JWP5ria6K+b6LGp6Im454Ob54WR5ouE556p556p54K36JGX54K36I6H6JuA6LSu6ZO46Iy/54K354K35p+36am75oqT54iq6Lep5oqf56Oa5ZWt5pKw6LO656+G5qGp5Zyn6KOd5aad542e5Yyo5Yyo5qSO6ZSl5pCl6LWY5aKc57a06LCG55e95rWe54Kq5aml5qO555Ci6IyB6YWM5ZWE552A54G85rWK5YW55oGj57Ki5oGj56i15reE5a2c5qm05LuU57G95ruT44G15rSO5riN54m46ayD55Cu55Cu5bSI55Cu57iC5p6e6YK56LaJ5qWx5qWx6JKp5aiW5Y2S6JSf6KKT6JKp6JKp6JKp6ZG957qC6Kec6YWU5pyC5ba15r6K5ZmC6JGD5ZKX5L2Q5p+e6I6L6I6L5ZSR6JOZ6YyS5Zmv5ayh55Km5puW6Z2E6Kuz6Yqo6bWq5aq86amB6bCy6YiA5ZSE6YiR6bSH6b2Z6bWv6LOB6Yyb6JO95Ze25r236YmN56+z6LmV6IqQ57e257Gp6amD6aKu6aOG6Y+i6ZGj6bC+5YSQ57m95qqz5q6v6IeP6ZGM6auV6ayi56if6aSR6Yi46bWT6Yi96amC6buy5oO76Y2k5YSV6Ye15ZuF6KuC6K6W6JWG5oe65ayL6amP6KaY56aq6ZCU5YCA6JCH5oK16Za26a+n56Go5YKW6Ku25qus56Oj6b2U5qOW5qqJ6Yuu6ZC66aOt6bSf6YqD5YSU5bms6K6O6Iq757WA6LqV6Yen5oS057ae6baJ6Lyf6b2q6ba/6JOv6amE5qiF6Lyz5pSb6Yq86bm65Zmg6Z+D6aeY57S/5q6r6LOn55mJ57Ce6K6c56Kt6KWg54e+6ZCZ57O06KmG6Kum57aI6Ka/6Y+R5beU6Yi/55my6Yqa6a+b6bCI6YuM6Yqp5bSg6baH56uH54CG5qud54mY56+k6bu357Gq5oef6ZCT54eJ6LqJ6ZC46Kuk5aCK6Za86Lub6Yuo6Y2U6baa6aGO6aGT6bG36KqS6YKH6Ym66bSv6a6e6YiB6a2057eL6ZCo6a+h5YOo54GD6bOn6aeZ57Sx57S86LO76bqp6a6S6bCS6YeT6LOF5bC35pCf57S65oiH552q6Kql57ie6Yuv57SH6Y6Y5r2B5LqZ6LOh57aG6a+B6Kms57ex6Kav6KmB6L2C6Yi36Yyu6bSj6bWg6ba76bSw5pGR6Km/5pGc6bib6bCl54235Yyt5YqM5aqv5qqc6a6t6bGW6KKe57eE6a+A5aCd5ZK85bmX5qeo6J+I6Ym/6Zee57WO6aCh54Gd6aGl6Ki26ZeU6KCj6buM6KiM6JGS6ZaO6bGf5ru46baY6amK5qi66Y+15aWQ57mv6Y2w6a+H6bCJ6Km86JaI5Zmm5r6u57mi55C/5pqJ6Kui6aSb6Za96Yil6ZGK6KiQ6Kmw6Ja65Ziw5ZqM6aml55Kj6Kas6b2P56Ov576I6KCG6LqL6Zy96bGt6a+96YOf5rW56YuP6Y616J+v6Kur57iR5oiU5oip55686ba8562n6bC56Z+J57Wz6Z+B5pKf5bag6bem6a6r55mk6aCc6a6a5be56JeO6aWJ57iJ6LSQ6Kay5YmE5raH6YCV5byz6ISb6Z2a6ayu6bOp6bey6KmO5bGo5qu46aK26YmF6Yum56q26b2f6YyI6ZCr6ZuL6K2O546o55q45Ym05aGP5oS+5oS36Y6n6Y2H6b6V6ZaM6Yin6Yqs6aiN57eZ6Lu76Yiz6YyB6aC36b2m6Y+X5Zqz6YS25Zmy6Ia+542q6auW6KqG6KqR6YS65aOZ57qK6LK65Yyx6JWi5oaS6IG157Cj6Zar6YyV6a+k6KCQ5bSN5b6g5re254Co6LOa552e6Yy455mp57Gf5bWQ5qyW5paV6ZGt6KWk6Zas6YuD5Ziu5baX6Yqg6ZCS55mG6bCz6KqE57iy5YS36YWI5aOi6Je26JKe6Ji65Zqm6YKQ6amq57it5quq5quf6L2i56Sq6Yuw6bid55mY57Oy6LqS6Z2C6bG66bGn6Jie5aWp54Cy55KJ5q6u6KSz6KWd6bCx6a2O57ma6YeV6bev6Je65bup5qqB6L2U6Lqq57a+5qye6J+26a+q54CP6aiu57a56Y6m6bea6Jii54Cn55OP5quz5pyn56Sx5YOC6JSe5ZiN5baB6Y+k55i66ICs6J676auP5aOa5pO85ZqV6Zat54CY5rel5quo5quT6L2k6LyF6L2G5rCM6Iea6biV6be66Imr6bG46Ieg5a2M5qyS6bie6ZG+5ZyH54qW546A5r+85qyP6IWh6Y+N5qua6KS46Yud5Zi45Zic5ayk5qaq5Yux57i16Y+d6aGZ6bC76bq85o2r54ec5oej6Y2G576L6KyQ542856aw5r6g6Z2m6bu957ey57mG6ZaU57eh6Kyo6amA6aWD5q2/6Y+M6Yms6ZCD6Kil6Yiu6a+i6Lym6a+w6JSm6KOK6ZqJ6JiX5ZuB6aGi6Lqh6Iun5ZqA6IG55YSC5Zml6aeR6Ye55YS66Kyz5oWq55SM6Lmj55qw6L2h57SV576G6Yi56Kue6aei57i55ayq6YeZ6Y+36ZCg6JiE6aiP57a65qa/56On6aCO6aCP6bCt5YOJ6JWB5oWz6air57m+5qen6YiQ5ayZ5qqj5oin54aX6YyG6Y+Y6Y+5576l6LmM6Kqa6K2Z6JWO57mw56O96Lm65oSc6Y2l56+L6Yuf5pKz6a+W54Wi6Ju65bew6LOV6J+j6bCN6KmY5baH6ZeD6Ka36bSd6Kmu57aj6LyH6YqT6ZeL6ZeV5oSo6JWY5ayI5qmI6aOq6LuU5ba46KCR57if6Yqj6aGw6JyG6aKv5q+/57Od57mF5ZeH6Yqr56mh6Y6p6a+K6YeD6KiV5aeN6ai46Yek6bGU5Z2w5q6k6Ke05Y6Z54GE55Ws6Km16KuX54CL6Kya5aGS6JKU5byS6Lu+6LKw6Yiw6bCj57as5pSE57ST6ZaC6ZGg5bud6aef57em6Y226bel6Jeq6aS/6aK86Y6q6KyW56mM6Kq26JOA54y75Zep6ISn6Zel6YmI6bCo6Yim6a6Q5puH6Ymt6Yyf6aCH5YS76aSz6ZCL6Y+c6Z+c6Yux57e56bWc6ZeQ57O26b2g6bC35oWf6YiE6Ye35pG26aOp57Gc6byJ5aqn6IaD57SI57aw6Lye6KuJ5bmD6ZeI5rqI5r2/55GL6Z+Z54WS6a6q6Za/6JC16b236YSU5buh5oau5au16aiW6bWh6bap6aS86ayp55K96Kah56Gk6I6n6Jaf6Jia5bO0542r5au76be055mH6KCU56eI6Lqa6JaM6aSJ6amk57eX6aWX5Zi154Cf6amN57aD5qKf57Cr6KS75pO357Sy57qI6ZmY5ruO6aWI6bWC6Kmh6aCK6Ku86YmJ6Y+H6KyU5r6p6bGI5aGk5r2v6bGY5Z+h5amt5qSP5rCs5Y606LSX5YS85YWX6K6e5oeo6ZaG6YeF6a2Y6aWc6by054Ws6Lu66beC6bCp6Z2o6KyB6YS05puE54eB6KmS5ZuI5ban6aO05oeM6amb57iK6Lu86LK96YeU6Y6w6ZC/55ie6Imk6Yqm55mu5aGL6bav57iI6Y6j5pSW5Zq254CF54Cg55OU6bia55mt6aCm572M6Y+e6JWV6Yqq6a235YK05L+B6Kub6Kut6JW35bSz6aOr6Za+5auX57SG6Kam5q2f6Yi66bWS6be46b2s5que6bO26bu/6Yme6YSG6JWT5oOy5oWN57Sc6Z+e5q6e5rCz55Oa6Lay6Y+o6aeU6LO+5ZiW5bmY57CA6K2W57mS6K2r6KmU6YeX6Kyr6LyS6beT5rme57id5qWo6Lur6LOR56aO6bSG6KuN5bSi6Ymm6Yya566P6ait5qub5qKU6Lu56LyK6LSE6beZ6J6E57i26LqT6LqR6Ke26Y2+57SC57iQ5L2H5qun6YqW5ZuA6aWM6aGz6aiF57iL6KuR6ZCy6Kuu57eH6Lyc6LKy55yl6YyZ6b2c6a+U5YKv6KuP6ai26a+r6Y+D57qY6Lqm6bGS6KiB6K2+6YOk54yb5rC56Ziq5aOf5aCW5Z615aKK5qq+6JWS6JGk6JOn6JKT6I+H5qeB5pGj5ZKk5ZSa5ZOi5Zmd5ZmF5pKF5YqI6KyU6KWG5ba06ISK5Lu/5YOl542B6bqF6aSY6aS36aWK6aWi5qWe5oC15oeN54i/5ry154Gp5re35r+r54Cm5reh5a+n57O457Wd57eU55GJ5qKY5qOs5qGI5qmw5qur6Luy6Luk6LOr6IaB6IWW6aOI57OK54WG5rqc5rmj5ri656K45ru+556Y6YiI6YmV6Yuj6Yqx6Yul6Yu26ZCm6ZCn6Y2p6Y2A6Y2D6YyH6Y6E6Y6H6Y6/6ZCd6ZGl6ZG56ZGU56mt6baT6bal6biM55mn5bGZ55iC6IeS6KWH57mI6ICu6aGs6J+O6bqv6a6B6a6D6a6O6a+X6a+d6a+06bGd6a+/6bCg6bC16bGF6Z696Z+d6b2HJztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdHJhZGl0aW9uYWxpemVkKGNjKXtcclxuXHR2YXIgc3RyPScnO1xyXG5cdGlmIChjYykge1xyXG5cdFx0Zm9yKHZhciBpPTA7aTxjYy5sZW5ndGg7aSsrKXtcclxuXHRcdCAgICBpZihzaW1wUFlTdHIoKS5pbmRleE9mKGNjLmNoYXJBdChpKSkhPS0xKVxyXG5cdFx0ICAgICAgICBzdHIrPWZ0UFlTdHIoKS5jaGFyQXQoc2ltcFBZU3RyKCkuaW5kZXhPZihjYy5jaGFyQXQoaSkpKTtcclxuXHRcdCAgICBlbHNlIGlmKHFxUFlTdHIoKS5pbmRleE9mKGNjLmNoYXJBdChpKSkhPS0xKVxyXG5cdFx0ICAgICAgICBzdHIrPWZ0UFlTdHIoKS5jaGFyQXQocXFQWVN0cigpLmluZGV4T2YoY2MuY2hhckF0KGkpKSk7XHJcblx0XHQgICAgZWxzZVxyXG5cdFx0ICAgICAgICBzdHIrPWNjLmNoYXJBdChpKTtcclxuXHRcdH1cclxuXHR9XHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzaW1wbGl6ZWQoY2Mpe1xyXG4gICAgdmFyIHN0cj0nJztcclxuXHRpZiAoY2MpIHtcclxuXHRcdGZvcih2YXIgaT0wO2k8Y2MubGVuZ3RoO2krKyl7XHJcblx0XHQgICAgaWYoZnRQWVN0cigpLmluZGV4T2YoY2MuY2hhckF0KGkpKSE9LTEpXHJcblx0XHQgICAgICAgIHN0cis9c2ltcFBZU3RyKCkuY2hhckF0KGZ0UFlTdHIoKS5pbmRleE9mKGNjLmNoYXJBdChpKSkpO1xyXG5cdFx0ICAgIGVsc2UgaWYocXFQWVN0cigpLmluZGV4T2YoY2MuY2hhckF0KGkpKSE9LTEpXHJcblx0XHQgICAgICAgIHN0cis9c2ltcFBZU3RyKCkuY2hhckF0KHFxUFlTdHIoKS5pbmRleE9mKGNjLmNoYXJBdChpKSkpO1xyXG5cdFx0ICAgIGVsc2VcclxuXHRcdCAgICAgICAgc3RyKz1jYy5jaGFyQXQoaSk7XHJcblx0XHR9XHJcblx0fVxyXG4gICAgcmV0dXJuIHN0cjtcclxufVxyXG5mdW5jdGlvbiBxcWxpemVkKGNjKXtcclxuICAgIHZhciBzdHI9Jyc7XHJcbiAgICBmb3IodmFyIGk9MDtpPGNjLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIGlmKGZ0UFlTdHIoKS5pbmRleE9mKGNjLmNoYXJBdChpKSkhPS0xKVxyXG4gICAgICAgICAgICBzdHIrPXFxUFlTdHIoKS5jaGFyQXQoZnRQWVN0cigpLmluZGV4T2YoY2MuY2hhckF0KGkpKSk7XHJcbiAgICAgICAgZWxzZSBpZihzaW1wUFlTdHIoKS5pbmRleE9mKGNjLmNoYXJBdChpKSkhPS0xKVxyXG4gICAgICAgICAgICBzdHIrPXFxUFlTdHIoKS5jaGFyQXQoc2ltcFBZU3RyKCkuaW5kZXhPZihjYy5jaGFyQXQoaSkpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHN0cis9Y2MuY2hhckF0KGkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///27\n");

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
/*!*******************************************!*\
  !*** D:/project/read_demo/store/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 28));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 30));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue.default.use(_vuex.default);\n\nvar store = new _vuex.default.Store({\n  state: {},\n\n  mutations: {},\n\n  actions: {} });var _default =\n\n\n\n\nstore;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJzdGF0ZSIsIm11dGF0aW9ucyIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiJ1RkFBQTtBQUNBLHdFOztBQUVBQSxhQUFJQyxHQUFKLENBQVFDLGFBQVI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLElBQUlELGNBQUtFLEtBQVQsQ0FBZTtBQUM1QkMsT0FBSyxFQUFFLEVBRHFCOztBQUc1QkMsV0FBUyxFQUFFLEVBSGlCOztBQUs1QkMsU0FBTyxFQUFFLEVBTG1CLEVBQWYsQ0FBZCxDOzs7OztBQVVlSixLIiwiZmlsZSI6IjI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXHJcblxyXG5WdWUudXNlKFZ1ZXgpXHJcblxyXG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcclxuXHRzdGF0ZToge1xyXG5cdH0sXHJcblx0bXV0YXRpb25zOiB7XHJcblx0fSxcclxuXHRhY3Rpb25zOiB7XHJcblx0XHRcclxuXHR9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
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
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
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

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
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

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
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

Object.defineProperties( Module.prototype, prototypeAccessors );

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

  if ((true)) {
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

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key)
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
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

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

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
  this._makeLocalGettersCache = Object.create(null);

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

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
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
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
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
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
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

  if ((true)) {
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

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
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

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
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
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
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
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
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
        if (( true) && !store._actions[type]) {
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
        if (( true) && !store._mutations[type]) {
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
  if (!store._makeLocalGettersCache[namespace]) {
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
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
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
    if ((true)) {
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
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
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

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
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

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
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

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
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

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
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

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 31)))

/***/ }),
/* 31 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 32 */
/*!************************************!*\
  !*** D:/project/read_demo/App.vue ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 33);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDc0s7QUFDdEssZ0JBQWdCLHNMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*************************************************************!*\
  !*** D:/project/read_demo/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 34);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw2bEJBQUcsRUFBQyIsImZpbGUiOiIzMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/project/read_demo/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///34\n");

/***/ })
],[[0,"app-config"]]]);