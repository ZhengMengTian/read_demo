(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!***************************!*\
  !*** D:/readDemo/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 16));\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 17));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_vue.default.prototype.$store = _store.default;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwicHJvdG90eXBlIiwiJHN0b3JlIiwic3RvcmUiLCJBcHAiLCJtcFR5cGUiLCJhcHAiLCIkbW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFtQjtBQUNuQjtBQUNBLHdFOztBQUVBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7O0FBRUFGLGFBQUlHLFNBQUosQ0FBY0MsTUFBZCxHQUF1QkMsY0FBdkI7O0FBRUFDLGFBQUlDLE1BQUosR0FBYSxLQUFiOztBQUVBLElBQU1DLEdBQUcsR0FBRyxJQUFJUixZQUFKO0FBQ0xNLFlBREssRUFBWjs7QUFHQUUsR0FBRyxDQUFDQyxNQUFKIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7aW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5cclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuXHJcblZ1ZS5wcm90b3R5cGUuJHN0b3JlID0gc3RvcmVcclxuXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICAuLi5BcHBcclxufSlcclxuYXBwLiRtb3VudCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************!*\
  !*** D:/readDemo/pages.json ***!
  \******************************/
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
/*!*****************************************************!*\
  !*** D:/readDemo/pages/index/index.vue?mpType=page ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3lLO0FBQ3pLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***********************************************************************************!*\
  !*** D:/readDemo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \***********************************************************************************/
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
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/readDemo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!*****************************************************************************!*\
  !*** D:/readDemo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9rQixDQUFnQiwwbUJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/readDemo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!***************************************************!*\
  !*** D:/readDemo/pages/read/read.vue?mpType=page ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _read_vue_vue_type_template_id_1126b716_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./read.vue?vue&type=template&id=1126b716&mpType=page */ 9);\n/* harmony import */ var _read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _read_vue_vue_type_template_id_1126b716_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _read_vue_vue_type_template_id_1126b716_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _read_vue_vue_type_template_id_1126b716_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/read/read.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQ3lLO0FBQ3pLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vcmVhZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTEyNmI3MTYmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3JlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcmVhZC9yZWFkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************************!*\
  !*** D:/readDemo/pages/read/read.vue?vue&type=template&id=1126b716&mpType=page ***!
  \*********************************************************************************/
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
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/readDemo/pages/read/read.vue?vue&type=template&id=1126b716&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
            [_vm._v(_vm._$s(37, "t0-0", _vm._s(_vm.chapterName)))]
          )
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(38, "sc", "bottom"),
          style: _vm._$s(38, "s", { bottom: _vm.menuShow ? 0 : "-300px" }),
          attrs: { _i: 38 }
        },
        [
          _c(
            "view",
            { staticClass: _vm._$s(39, "sc", "item"), attrs: { _i: 39 } },
            [
              _c("view", {
                staticClass: _vm._$s(40, "sc", "item-name"),
                attrs: { _i: 40 }
              }),
              _c("view", {
                staticClass: _vm._$s(41, "sc", "icon"),
                attrs: { _i: 41 },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.bigSize($event)
                  }
                }
              }),
              _c("view", {
                staticClass: _vm._$s(42, "sc", "icon"),
                attrs: { _i: 42 },
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
            { staticClass: _vm._$s(43, "sc", "item"), attrs: { _i: 43 } },
            [
              _c("view", {
                staticClass: _vm._$s(44, "sc", "item-name"),
                attrs: { _i: 44 }
              }),
              _c(
                "view",
                {
                  staticClass: _vm._$s(45, "sc", "type-setting"),
                  class: _vm._$s(45, "c", { active: _vm.lineHeight === 1 }),
                  attrs: { _i: 45 },
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
                    staticClass: _vm._$s("46-" + $31, "sc", "line"),
                    class: _vm._$s("46-" + $31, "c", {
                      active: _vm.lineHeight === 1
                    }),
                    attrs: { _i: "46-" + $31 }
                  })
                }),
                0
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(47, "sc", "type-setting"),
                  class: _vm._$s(47, "c", { active: _vm.lineHeight === 1.5 }),
                  attrs: { _i: 47 },
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
                    staticClass: _vm._$s("48-" + $32, "sc", "line"),
                    class: _vm._$s("48-" + $32, "c", {
                      active: _vm.lineHeight === 1.5
                    }),
                    attrs: { _i: "48-" + $32 }
                  })
                }),
                0
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(49, "sc", "type-setting"),
                  class: _vm._$s(49, "c", { active: _vm.lineHeight === 2 }),
                  attrs: { _i: 49 },
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
                    staticClass: _vm._$s("50-" + $33, "sc", "line"),
                    class: _vm._$s("50-" + $33, "c", {
                      active: _vm.lineHeight === 2
                    }),
                    attrs: { _i: "50-" + $33 }
                  })
                }),
                0
              )
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(51, "sc", "item"), attrs: { _i: 51 } },
            [
              _c("view", {
                staticClass: _vm._$s(52, "sc", "item-name"),
                attrs: { _i: 52 }
              }),
              _c("view", {
                staticClass: _vm._$s(53, "sc", "icon"),
                class: _vm._$s(53, "c", { active: _vm.background === 0 }),
                attrs: { _i: 53 },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.changeBackground(0)
                  }
                }
              }),
              _c("view", {
                staticClass: _vm._$s(54, "sc", "icon"),
                class: _vm._$s(54, "c", { active: _vm.background === 1 }),
                attrs: { _i: 54 },
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
/*!***************************************************************************!*\
  !*** D:/readDemo/pages/read/read.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./read.vue?vue&type=script&lang=js&mpType=page */ 12);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1rQixDQUFnQix5bUJBQUcsRUFBQyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/readDemo/pages/read/read.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      chapterId: '',\n      chapterName: '',\n      preChapterName: '',\n      nextChapterName: '',\n      textFixed: \"<p>\\u706F\\u706B\\u901A\\u660E\\u7684\\u5185\\u6BBF\\u4E4B\\u4E2D\\uFF0C\\u91D1\\u78A7\\u8F89\\u714C\\uFF0C\\u6C14\\u52BF\\u5A01\\u4E25\\uFF0C\\u6BBF\\u5185\\u6709\\u7740\\u957F\\u660E\\u706F\\u71C3\\u70E7\\uFF0C\\u5176\\u4E2D\\u71C3\\u70E7\\u7740\\u4E00\\u9897\\u9752\\u77F3\\uFF0C\\u8885\\u8885\\u7684\\u9752\\u70DF\\u5347\\u817E\\u800C\\u8D77\\uFF0C\\u76D8\\u7ED5\\u5728\\u6BBF\\u5185\\u3002</p><p>\\u90A3\\u662F\\u9752\\u6A80\\u77F3\\uFF0C\\u71C3\\u70E7\\u8D77\\u6765\\u4F1A\\u91CA\\u653E\\u51FA\\u5F02\\u9999\\uFF0C\\u6709\\u7740\\u51DD\\u795E\\u9759\\u5FC3\\u4E4B\\u6548\\uFF0C\\u4E43\\u662F\\u4FEE\\u70BC\\u65F6\\u5FC5\\u5907\\u4E4B\\u7269\\uFF0C\\u4E0D\\u8FC7\\u6B64\\u7269\\u4EF7\\u683C\\u4E0D\\u4F4E\\uFF0C\\u80FD\\u591F\\u5F53\\u505A\\u71C3\\u6599\\u822C\\u6765\\u4F7F\\u7528\\uFF0C\\u8DB3\\u4EE5\\u8BF4\\u660E\\u6B64\\u5730\\u4E3B\\u4EBA\\u9887\\u6709\\u5730\\u4F4D\\u3002 </p><p>\\u5185\\u6BBF\\u4E2D\\uFF0C\\u4E00\\u540D\\u8EAB\\u7740\\u660E\\u9EC4\\u888D\\u670D\\u7684\\u4E2D\\u5E74\\u7537\\u5B50\\u8D1F\\u624B\\u800C\\u7ACB\\uFF0C\\u4ED6\\u9762\\u5BB9\\u575A\\u6BC5\\uFF0C\\u773C\\u76EE\\u4E4B\\u95F4\\u6709\\u7740\\u5A01\\u4E25\\u4E4B\\u6C14\\uFF0C\\u663E\\u7136\\u4E45\\u5C45\\u9AD8\\u4F4D\\uFF0C\\u800C\\u5176\\u8EAB\\u540E\\uFF0C\\u9690\\u6709\\u6C14\\u606F\\u5347\\u817E\\uFF0C\\u4F3C\\u708E\\u4F3C\\u96F7\\uFF0C\\u53D1\\u51FA\\u4F4E\\u6C89\\u8F70\\u9E23\\u4E4B\\u58F0\\u3002 </p><p>\\u53EA\\u662F\\u82E5\\u662F\\u770B\\u5411\\u5176\\u53F3\\u81C2\\uFF0C\\u5374\\u662F\\u53D1\\u73B0\\u7A7A\\u7A7A\\u8361\\u8361\\uFF0C\\u7ADF\\u662F\\u4E00\\u53EA\\u65AD\\u81C2\\u3002 </p><p>\\u5728\\u4ED6\\u7684\\u8EAB\\u65C1\\uFF0C\\u8FD8\\u6709\\u7740\\u4E00\\u4F4D\\u5BAB\\u88C5\\u7F8E\\u5987\\uFF0C\\u5979\\u5A07\\u8EAF\\u7EA4\\u7EC6\\uFF0C\\u5BB9\\u8C8C\\u96CD\\u5BB9\\u800C\\u7F8E\\u4E3D\\uFF0C\\u4E0D\\u8FC7\\u5176\\u8138\\u988A\\uFF0C\\u5374\\u662F\\u663E\\u5F97\\u5206\\u5916\\u7684\\u82CD\\u767D\\u4E0E\\u865A\\u5F31\\u3002 </p><p>\\u800C\\u6B64\\u65F6\\u7684\\u8FD9\\u5BF9\\u663E\\u7136\\u5730\\u4F4D\\u4E0D\\u4F4E\\u7684\\u7537\\u5973\\uFF0C\\u90FD\\u662F\\u9762\\u5E26\\u7740\\u4E00\\u4E1D\\u7D27\\u5F20\\u4E4B\\u8272\\u7684\\u671B\\u7740\\u524D\\u65B9\\uFF0C\\u53EA\\u89C1\\u5F97\\u5728\\u90A3\\u91CC\\u7684\\u5E8A\\u69BB\\u4E0A\\uFF0C\\u6709\\u7740\\u4E00\\u540D\\u7EA6\\u83AB\\u5341\\u4E09\\u56DB\\u5C81\\u7684\\u5C11\\u5E74\\u76D8\\u5750\\uFF0C\\u5C11\\u5E74\\u8EAB\\u8EAF\\u7565\\u663E\\u5355\\u8584\\uFF0C\\u53CC\\u76EE\\u7D27\\u95ED\\uFF0C\\u90A3\\u5F20\\u5C5E\\u4E8E\\u5C11\\u5E74\\u4EBA\\u672C\\u5E94\\u8BE5\\u671D\\u6C14\\u84EC\\u52C3\\u7684\\u8138\\u5E9E\\uFF0C\\u5374\\u662F\\u8426\\u7ED5\\u7740\\u4E00\\u80A1\\u8840\\u6C14\\u3002 </p><p>\\u90A3\\u80A1\\u8BE1\\u5F02\\u7684\\u8840\\u6C14\\uFF0C\\u5728\\u4ED6\\u7684\\u76AE\\u80A4\\u4E0B\\u7A9C\\u52A8\\uFF0C\\u9690\\u9690\\u95F4\\uFF0C\\u4EFF\\u4F5B\\u6709\\u7740\\u6028\\u6BD2\\u7684\\u9F99\\u5578\\u58F0\\u4F20\\u51FA\\u3002 </p><p>\\u800C\\u4F34\\u968F\\u7740\\u90A3\\u9053\\u9F99\\u5578\\uFF0C\\u5C11\\u5E74\\u989D\\u5934\\u4E0A\\u9752\\u7B4B\\u8038\\u52A8\\uFF0C\\u8EAB\\u4F53\\u4E0D\\u65AD\\u7684\\u98A4\\u6296\\u7740\\uFF0C\\u9762\\u5E9E\\u53D8\\u5F97\\u72F0\\u72DE\\uFF0C\\u4F3C\\u4E4E\\u662F\\u627F\\u53D7\\u4E86\\u96BE\\u4E8E\\u8A00\\u8BED\\u7684\\u75DB\\u82E6\\u3002 </p><p>\\u5728\\u5C11\\u5E74\\u7684\\u8EAB\\u4FA7\\uFF0C\\u4E00\\u540D\\u767D\\u53D1\\u8001\\u8005\\u624B\\u6301\\u4E00\\u9762\\u94DC\\u955C\\uFF0C\\u94DC\\u955C\\u4E4B\\u4E0A\\uFF0C\\u6709\\u7740\\u67D4\\u548C\\u7684\\u5149\\u8292\\u6563\\u53D1\\u51FA\\u6765\\uFF0C\\u7167\\u8000\\u5728\\u5C11\\u5E74\\u8EAB\\u4F53\\u4E0A\\uFF0C\\u800C\\u5728\\u90A3\\u5149\\u8292\\u7684\\u7167\\u8000\\u4E0B\\uFF0C\\u5C11\\u5E74\\u9762\\u5E9E\\u4E0A\\u7684\\u8BE1\\u5F02\\u8840\\u6C14\\u5219\\u662F\\u5F00\\u59CB\\u6E10\\u6E10\\u7684\\u5E73\\u590D\\u3002 </p><p>\\u8840\\u6C14\\u5728\\u6301\\u7EED\\u4E86\\u4E00\\u70B7\\u9999\\u65F6\\u95F4\\u540E\\uFF0C\\u7EC8\\u662F\\u5C3D\\u6570\\u7684\\u9000\\u53BB\\uFF0C\\u6700\\u540E\\u7F29\\u56DE\\u4E86\\u5C11\\u5E74\\u7684\\u638C\\u5FC3\\u4E4B\\u4E2D\\u3002 </p><p>\\u767D\\u53D1\\u8001\\u8005\\u89C1\\u5230\\u8FD9\\u4E00\\u5E55\\uFF0C\\u987F\\u65F6\\u5982\\u91CA\\u91CD\\u8D1F\\u7684\\u677E\\u4E86\\u4E00\\u53E3\\u6C14\\uFF0C\\u7136\\u540E\\u8F6C\\u8FC7\\u8EAB\\u6765\\uFF0C\\u5BF9\\u7740\\u4E00\\u65C1\\u7D27\\u5F20\\u7B49\\u5F85\\u7684\\u4E2D\\u5E74\\u7537\\u5B50\\u4EE5\\u53CA\\u5BAB\\u88C5\\u7F8E\\u5987\\u5F2F\\u8EAB\\u9053\\uFF1A\\u201C\\u606D\\u559C\\u738B\\u4E0A\\uFF0C\\u738B\\u540E\\uFF0C\\u8FD9\\u4E09\\u5E74\\u4E00\\u9053\\u7684\\u5927\\u574E\\uFF0C\\u6BBF\\u4E0B\\u603B\\u7B97\\u662F\\u71AC\\u4E86\\u8FC7\\u6765\\uFF0C\\u63A5\\u4E0B\\u6765\\u7684\\u4E09\\u5E74\\uFF0C\\u5E94\\u5F53\\u90FD\\u65E0\\u5927\\u788D\\u3002\\u201D </p><p>\\u4E2D\\u5E74\\u7537\\u5B50\\u4E0E\\u5BAB\\u88C5\\u7F8E\\u5987\\u95FB\\u8A00\\uFF0C\\u7686\\u662F\\u9762\\u9732\\u559C\\u8272\\uFF0C\\u7D27\\u63E1\\u7684\\u62F3\\u5934\\u90FD\\u662F\\u6E10\\u6E10\\u7684\\u677E\\u5F00\\u3002 </p><p>\\u201C\\u79E6\\u5E08\\uFF0C\\u5982\\u4ECA\\u5143\\u513F\\u5DF2\\u662F\\u5341\\u4E09\\uFF0C\\u4E00\\u822C\\u8FD9\\u4E2A\\u5E74\\u9F84\\u7684\\u5C11\\u5E74\\uFF0C\\u90FD\\u5DF2\\u516B\\u8109\\u6210\\u5F62\\uFF0C\\u53EF\\u4EE5\\u5F00\\u59CB\\u4FEE\\u70BC\\u4E86\\uFF0C\\u90A3\\u5143\\u513F\\uFF1F\\u201D\\u8EAB\\u7740\\u660E\\u9EC4\\u888D\\u670D\\u7684\\u5A01\\u4E25\\u7537\\u5B50\\uFF0C\\u671F\\u5F85\\u7684\\u671B\\u7740\\u773C\\u524D\\u7684\\u767D\\u53D1\\u8001\\u8005\\uFF0C\\u95EE\\u9053\\u3002 </p><p>\\u542C\\u5230\\u6B64\\u95EE\\uFF0C\\u767D\\u53D1\\u8001\\u8005\\u795E\\u8272\\u987F\\u65F6\\u9EEF\\u6DE1\\u4E86\\u4E00\\u4E9B\\uFF0C\\u4ED6\\u5FAE\\u5FAE\\u6447\\u5934\\uFF0C\\u9053\\uFF1A\\u201C\\u738B\\u4E0A\\uFF0C\\u8FD9\\u4E00\\u6B21\\u8001\\u592B\\u4F9D\\u7136\\u6CA1\\u6709\\u63A2\\u6D4B\\u5230\\u6BBF\\u4E0B\\u4F53\\u5185\\u516B\\u8109...\\u201D </p><p>\\u5A01\\u4E25\\u7537\\u5B50\\u95FB\\u8A00\\uFF0C\\u773C\\u795E\\u540C\\u6837\\u662F\\u9EEF\\u6DE1\\u4E86\\u4E0B\\u6765\\u3002 </p><p>\\u5728\\u8FD9\\u5929\\u5730\\u95F4\\uFF0C\\u4FEE\\u884C\\u4E4B\\u9053\\uFF0C\\u59CB\\u4E8E\\u4EBA\\u4F53\\uFF0C\\u4EBA\\u4F53\\u5185\\u62E5\\u6709\\u7740\\u65E0\\u6570\\u7ECF\\u8109\\uFF0C\\u800C\\u5176\\u4E2D\\u6700\\u4E3A\\u91CD\\u8981\\u7684\\uFF0C\\u4FBF\\u662F\\u516B\\u5927\\u8109\\uFF0C\\u800C\\u9664\\u4E86\\u67D0\\u4E9B\\u7279\\u6B8A\\u7684\\u60C5\\u51B5\\uFF0C\\u4E00\\u822C\\u7684\\u4EBA\\uFF0C\\u4F53\\u5185\\u7684\\u516B\\u8109\\u8981\\u5728\\u5341\\u4E8C\\u4E09\\u5C81\\u5DE6\\u53F3\\u65F6\\uFF0C\\u65B9\\u624D\\u4F1A\\u6E10\\u6E10\\u7684\\u6210\\u5F62\\uFF0C\\u800C\\u8FD9\\u4E2A\\u65F6\\u5019\\uFF0C\\u5C31\\u9700\\u8981\\u5C06\\u8FD9\\u516B\\u8109\\u627E\\u51FA\\u6765\\uFF0C\\u53EA\\u6709\\u627E\\u5230\\u4E86\\u8FD9\\u516B\\u8109\\uFF0C\\u624D\\u80FD\\u591F\\u5F00\\u59CB\\u4FEE\\u70BC\\uFF0C\\u541E\\u7EB3\\u5929\\u5730\\u6E90\\u529B\\uFF0C\\u6253\\u901A\\u516B\\u8109\\u3002 </p><p>\\u8FD9\\u5C31\\u662F\\u5F00\\u8109\\u5883\\uFF0C\\u4E00\\u5207\\u4FEE\\u70BC\\u4E4B\\u59CB\\u3002 </p><p>\\u800C\\u4FEE\\u70BC\\u8005\\u56E0\\u541E\\u5410\\u5929\\u5730\\u672C\\u6E90\\u4E4B\\u529B\\uFF0C\\u8715\\u53D8\\u81EA\\u8EAB\\uFF0C\\u6545\\u800C\\u4E5F\\u88AB\\u79F0\\u4E3A\\u6E90\\u5E08\\u3002 </p><p>\\u79E6\\u5E08\\u77A7\\u5F97\\u4E2D\\u5E74\\u7537\\u5B50\\u9762\\u5E9E\\u4E0A\\u7684\\u9EEF\\u6DE1\\uFF0C\\u4E5F\\u662F\\u6709\\u4E9B\\u4E0D\\u5FCD\\uFF0C\\u8F7B\\u53F9\\u4E00\\u58F0\\uFF0C\\u9053\\uFF1A\\u201C\\u6BBF\\u4E0B\\u672C\\u662F\\u5723\\u9F99\\u4E4B\\u547D\\uFF0C\\u5F53\\u60CA\\u8273\\u4E8E\\u4E16\\uFF0C\\u50B2\\u89C6\\u82CD\\u7A79\\uFF0C\\u600E\\u6599\\u5230\\u5374\\u906D\\u6B64\\u52AB\\u96BE...\\u201D </p><p>\\u4E2D\\u5E74\\u7537\\u5B50\\u53CC\\u638C\\u7D27\\u63E1\\uFF0C\\u4E00\\u65C1\\u7684\\u5BAB\\u88C5\\u7F8E\\u5987\\u4E5F\\u662F\\u773C\\u7736\\u7EA2\\u6DA6\\uFF0C\\u7136\\u540E\\u6342\\u7740\\u5634\\u5267\\u70C8\\u7684\\u54B3\\u55FD\\u4E86\\u4E24\\u58F0\\u3002 </p><p>\\u201C\\u738B\\u540E\\u4FDD\\u91CD\\u8EAB\\u4F53\\uFF0C\\u60A8\\u5148\\u524D\\u635F\\u5931\\u5927\\u91CF\\u7CBE\\u8840\\u4EE5\\u6ECB\\u517B\\u6BBF\\u4E0B\\uFF0C\\u4E0D\\u53EF\\u5FC3\\u7EEA\\u6FC0\\u8361\\u3002\\u201D\\u79E6\\u5E08\\u89C1\\u72B6\\uFF0C\\u8FDE\\u5FD9\\u51FA\\u58F0\\u9053\\u3002</p> <p>\\u5BAB\\u88C5\\u7F8E\\u5987\\u5374\\u662F\\u6446\\u4E86\\u6446\\u624B\\uFF0C\\u773C\\u9732\\u54C0\\u8272\\u7684\\u671B\\u7740\\u90A3\\u76D8\\u5750\\u5728\\u5E8A\\u69BB\\u4E0A\\u7684\\u5C11\\u5E74\\uFF0C\\u9053\\uFF1A\\u201C\\u5143\\u513F\\u4F53\\u5185\\u4E4B\\u6BD2\\uFF0C\\u4E09\\u5E74\\u7206\\u53D1\\u4E00\\u6B21\\uFF0C\\u4E00\\u6B21\\u6BD4\\u4E00\\u6B21\\u5389\\u5BB3\\uFF0C\\u60F3\\u8981\\u6839\\u9664\\uFF0C\\u552F\\u6709\\u4F9D\\u9760\\u4ED6\\u81EA\\u5DF1\\uFF0C\\u53EF\\u5982\\u4ECA\\u4ED6\\u516B\\u8109\\u4E0D\\u663E\\uFF0C\\u4E09\\u5E74\\u4E4B\\u540E\\uFF0C\\u53C8\\u8BE5\\u5982\\u4F55\\uFF1F\\u201D</p><p>\\u79E6\\u5E08\\u6C89\\u9ED8\\u4E86\\u4E00\\u4F1A\\uFF0C\\u7F13\\u7F13\\u7684\\u9053\\uFF1A\\u201C\\u4E09\\u5E74\\u4E4B\\u540E\\uFF0C\\u5916\\u529B\\u538B\\u5236\\u5C06\\u4F1A\\u5931\\u6548\\uFF0C\\u82E5\\u8FD8\\u662F\\u5982\\u6B64\\uFF0C\\u6050\\u6015\\u6BBF\\u4E0B\\uFF0C\\u6027\\u547D\\u582A\\u5FE7\\u3002\\u201D </p><p>\\u6B64\\u8A00\\u4E00\\u51FA\\uFF0C\\u6BBF\\u5185\\u987F\\u65F6\\u4E00\\u7247\\u6C89\\u9ED8\\uFF0C\\u4E2D\\u5E74\\u7537\\u5B50\\u53CC\\u638C\\u7D27\\u63E1\\uFF0C\\u8EAB\\u8EAF\\u5FAE\\u5FAE\\u98A4\\u6296\\uFF0C\\u800C\\u5BAB\\u88C5\\u7F8E\\u5987\\uFF0C\\u66F4\\u662F\\u6342\\u7740\\u5634\\u53D1\\u51FA\\u4F4E\\u4F4E\\u7684\\u6CE3\\u58F0\\u3002 </p><p>\\u201C\\u8FD9\\u4E48\\u8BF4...\\u6211\\u7684\\u5BFF\\u547D\\u53EA\\u5269\\u4E0B\\u4E09\\u5E74\\u4E86\\uFF1F\\u201D\\u6C89\\u9ED8\\u4E4B\\u4E2D\\uFF0C\\u5FFD\\u6709\\u4E00\\u9053\\u7565\\u663E\\u7A1A\\u5AE9\\uFF0C\\u4F46\\u5374\\u5E73\\u9759\\u7684\\u58F0\\u97F3\\uFF0C\\u7A81\\u7136\\u7684\\u54CD\\u8D77\\u3002 </p><p>\\u5927\\u6BBF\\u4E09\\u4EBA\\u95FB\\u8A00\\uFF0C\\u90FD\\u662F\\u4E00\\u60CA\\uFF0C\\u8FDE\\u5FD9\\u62AC\\u5934\\uFF0C\\u53EA\\u89C1\\u5F97\\u5E8A\\u69BB\\u4E0A\\u7684\\u5C11\\u5E74\\u4E0D\\u77E5\\u4F55\\u65F6\\u7741\\u5F00\\u4E86\\u773C\\u775B\\uFF0C\\u6B63\\u671B\\u7740\\u4ED6\\u4EEC\\u3002 </p><p>\\u4E09\\u4EBA\\u9762\\u9762\\u76F8\\u89D1\\u4E00\\u773C\\uFF0C\\u663E\\u7136\\u90FD\\u6CA1\\u60F3\\u5230\\u5C11\\u5E74\\u82CF\\u9192\\u5F97\\u5982\\u6B64\\u4E4B\\u5FEB\\uFF0C\\u8981\\u77E5\\u9053\\u4EE5\\u524D\\uFF0C\\u4ED6\\u53EF\\u662F\\u8981\\u660F\\u7761\\u4E24\\u4E09\\u5929\\u624D\\u80FD\\u7F13\\u8FC7\\u6765\\u3002 </p><p>\\u201C\\u5143\\u513F...\\u201D </p><p>\\u88AB\\u79F0\\u4E3A\\u5143\\u513F\\u7684\\u5C11\\u5E74\\uFF0C\\u540D\\u4E3A\\u5468\\u5143\\uFF0C\\u800C\\u773C\\u524D\\u7684\\u4E2D\\u5E74\\u7537\\u5B50\\u4E0E\\u7F8E\\u5987\\uFF0C\\u4FBF\\u662F\\u8FD9\\u5927\\u5468\\u738B\\u671D\\u7684\\u738B\\u4E0A\\u4E0E\\u738B\\u540E\\uFF0C\\u5468\\u64CE\\uFF0C\\u79E6\\u7389\\u3002 </p><p>\\u5468\\u5143\\u62BF\\u4E86\\u62BF\\u5634\\uFF0C\\u7A1A\\u5AE9\\u7684\\u8138\\u5E9E\\u663E\\u5F97\\u6709\\u4E9B\\u82CD\\u767D\\uFF0C\\u6216\\u8BB8\\u662F\\u56E0\\u4E3A\\u4ECE\\u5C0F\\u8EAB\\u5B50\\u5355\\u8584\\uFF0C\\u4ED6\\u53EA\\u80FD\\u591A\\u8BFB\\u4E66\\u7684\\u7F18\\u6545\\uFF0C\\u770B\\u4E0A\\u53BB\\u6709\\u4E9B\\u4E66\\u5377\\u6C14\\uFF0C\\u4ED6\\u6C89\\u9ED8\\u4E86\\u7247\\u523B\\uFF0C\\u7F13\\u7F13\\u7684\\u4F38\\u51FA\\u624B\\u638C\\u3002 </p><p>\\u53EA\\u89C1\\u5F97\\u5728\\u5176\\u638C\\u5FC3\\u5904\\uFF0C\\u7ADF\\u662F\\u6709\\u7740\\u4E00\\u56E2\\u6697\\u6C89\\u7684\\u8840\\u8272\\uFF0C\\u90A3\\u9053\\u8840\\u8272\\u72B9\\u5982\\u662F\\u70D9\\u5370\\u5230\\u4E86\\u8840\\u8089\\u6700\\u6DF1\\u5904\\uFF0C\\u5B83\\u6162\\u6162\\u7684\\u8815\\u52A8\\u7740\\uFF0C\\u770B\\u4E0A\\u53BB\\u4EFF\\u4F5B\\u4E00\\u6761\\u5F20\\u7259\\u821E\\u722A\\u7684\\u8840\\u9F99\\u4E00\\u822C\\uFF0C\\u9690\\u9690\\u7684\\uFF0C\\u4F3C\\u4E4E\\u6709\\u7740\\u6D53\\u6D53\\u7684\\u6028\\u618E\\u4E4B\\u6C14\\uFF0C\\u81EA\\u90A3\\u5176\\u4E2D\\u6563\\u53D1\\u51FA\\u6765\\uFF0C\\u4EE4\\u4EBA\\u4E0D\\u5BD2\\u800C\\u6817\\u3002 </p><p>\\u201C\\u7236\\u738B\\uFF0C\\u6BCD\\u540E...\\u8FD9\\u4E00\\u6B21\\uFF0C\\u4F60\\u4EEC\\u603B\\u8BE5\\u544A\\u8BC9\\u6211\\uFF0C\\u5728\\u6211\\u8EAB\\u4E0A\\uFF0C\\u7A76\\u7ADF\\u53D1\\u751F\\u4E86\\u4EC0\\u4E48\\u5427\\uFF1F\\u201D </p><p>\\u5468\\u5143\\u76EF\\u7740\\u638C\\u5FC3\\u4E2D\\u8FD9\\u72B9\\u5982\\u4E00\\u6761\\u5C0F\\u5C0F\\u8840\\u9F99\\u822C\\u7684\\u4E1C\\u897F\\uFF0C\\u7259\\u9F7F\\u5FCD\\u4E0D\\u4F4F\\u7684\\u7D27\\u54AC\\u8D77\\u6765\\uFF0C\\u5C31\\u662F\\u8FD9\\u4E2A\\u4E1C\\u897F\\uFF0C\\u8BA9\\u4ED6\\u4F53\\u4F1A\\u5230\\u4E86\\u4EC0\\u4E48\\u53EB\\u505A\\u751F\\u4E0D\\u5982\\u6B7B\\u822C\\u7684\\u75DB\\u82E6\\u3002 </p><p>\\u6BCF\\u8FC7\\u4E09\\u5E74\\uFF0C\\u8FD9\\u4E2A\\u4E1C\\u897F\\u5C31\\u5F00\\u59CB\\u4F5C\\u602A\\uFF0C\\u72B9\\u5982\\u662F\\u8981\\u5C06\\u4ED6\\u6D51\\u8EAB\\u7684\\u8840\\u8089\\u4E00\\u5BF8\\u5BF8\\u7684\\u7ED9\\u541E\\u566C\\u4E86\\u4E00\\u822C\\uFF0C\\u5E26\\u6765\\u65E0\\u8FB9\\u7684\\u75DB\\u82E6\\u3002 </p><p>\\u542C\\u5230\\u5468\\u5143\\u7684\\u8BDD\\uFF0C\\u5468\\u64CE\\u4E0E\\u79E6\\u7389\\u9762\\u8272\\u90FD\\u662F\\u53D8\\u5F97\\u6CA1\\u6709\\u4E86\\u591A\\u5C11\\u8840\\u8272\\uFF0C\\u7279\\u522B\\u662F\\u524D\\u8005\\uFF0C\\u62F3\\u5934\\u7D27\\u63E1\\uFF0C\\u8138\\u5E9E\\u4E0A\\u6D6E\\u73B0\\u7740\\u6D53\\u6D53\\u7684\\u6094\\u6068\\u4E0E\\u81EA\\u8D23\\u4E4B\\u8272\\u3002 </p><p>\\u6C89\\u9ED8\\u6301\\u7EED\\u4E86\\u534A\\u664C\\uFF0C\\u7A7A\\u6C14\\u90FD\\u6709\\u4E9B\\u51DD\\u56FA\\uFF0C\\u5468\\u64CE\\u7EC8\\u4E8E\\u662F\\u6DF1\\u6DF1\\u5438\\u4E86\\u4E00\\u53E3\\u6C14\\uFF0C\\u58F0\\u97F3\\u5636\\u54D1\\u7684\\u9053\\uFF1A\\u201C\\u8FD9\\u662F\\uFF0C\\u6028\\u9F99\\u6BD2\\u3002\\u201D </p><p>\\u201C\\u6028\\u9F99\\u6BD2\\uFF1F\\u201D\\u5468\\u5143\\u7709\\u5934\\u7D27\\u76B1\\uFF0C\\u4E0D\\u660E\\u6240\\u4EE5\\u3002 </p><p>\\u5468\\u64CE\\u624B\\u638C\\u6709\\u4E9B\\u98A4\\u6296\\u7684\\u6478\\u7740\\u5468\\u5143\\u7684\\u8111\\u888B\\uFF0C\\u9053\\uFF1A\\u201C\\u8FD9\\u4E9B\\u4E8B\\uFF0C\\u5982\\u4ECA\\u4F60\\u4E5F\\u5E94\\u8BE5\\u77E5\\u9053\\u4E86\\uFF0C\\u5143\\u513F\\uFF0C\\u4F60\\u77E5\\u9053\\u5417\\uFF0C\\u4F60\\u662F\\u6211\\u5468\\u5BB6\\u5723\\u9F99\\uFF01\\u201D </p><p>\\u5468\\u5143\\u5FCD\\u4E0D\\u4F4F\\u7684\\u82E6\\u7B11\\u4E00\\u58F0\\uFF0C\\u6709\\u8FD9\\u4E48\\u60E8\\u7684\\u5723\\u9F99\\u5417\\uFF1F\\u8FDE\\u4F53\\u5185\\u516B\\u8109\\u90FD\\u627E\\u4E0D\\u5230\\u3002 </p><p>\\u5468\\u64CE\\u5750\\u5728\\u5468\\u5143\\u8EAB\\u65C1\\uFF0C\\u58F0\\u97F3\\u4F4E\\u6C89\\u7684\\u9053\\uFF1A\\u201C\\u5143\\u513F\\uFF0C\\u5982\\u4ECA\\u6211\\u4EEC\\u5927\\u5468\\u738B\\u671D\\uFF0C\\u5728\\u8FD9\\u65E0\\u5C3D\\u7684\\u82CD\\u832B\\u5927\\u9646\\u4E0A\\uFF0C\\u6216\\u8BB8\\u53EA\\u80FD\\u7B97\\u505A\\u504F\\u9685\\u5C0F\\u56FD\\uFF0C\\u4F46\\u4F60\\u5374\\u662F\\u4E0D\\u77E5\\uFF0C\\u5341\\u4E94\\u5E74\\u524D\\uFF0C\\u6211\\u4EEC\\u5927\\u5468\\uFF0C\\u5374\\u662F\\u5DCD\\u5CE8\\u5927\\u56FD\\uFF0C\\u8BF8\\u56FD\\u6765\\u671D\\uFF0C\\u5A01\\u9707\\u56DB\\u65B9\\u3002\\u201D </p><p>\\u5468\\u5143\\u5C0F\\u8138\\u4E0A\\u6D6E\\u73B0\\u4E00\\u4E9B\\u60CA\\u8BB6\\u4E4B\\u8272\\uFF0C\\u8FD9\\u82CD\\u832B\\u5927\\u9646\\u4E0A\\uFF0C\\u738B\\u671D\\u5E1D\\u56FD\\u4F17\\u591A\\uFF0C\\u800C\\u4ED6\\u4EEC\\u5927\\u5468\\u738B\\u671D\\u5728\\u5176\\u4E2D\\u5E76\\u4E0D\\u7B97\\u592A\\u8FC7\\u7684\\u8D77\\u773C\\uFF0C\\u6CA1\\u60F3\\u5230\\u4EE5\\u5F80\\u8FD8\\u6709\\u5982\\u6B64\\u5730\\u4F4D\\uFF1F </p><p>\\u201C\\u4F60\\u53EF\\u77E5\\u90A3\\u5927\\u6B66\\u738B\\u671D\\uFF1F\\u201D\\u5468\\u64CE\\u5728\\u8BF4\\u8D77\\u8FD9\\u4E2A\\u540D\\u5B57\\u7684\\u65F6\\u5019\\uFF0C\\u4E00\\u5B57\\u4E00\\u987F\\uFF0C\\u4EFF\\u4F5B\\u662F\\u523B\\u9AA8\\u94ED\\u5FC3\\u3002 </p><p>\\u201C\\u5927\\u6B66\\u738B\\u671D\\uFF1F\\u201D\\u5468\\u5143\\u70B9\\u4E86\\u70B9\\u5934\\uFF0C\\u5927\\u6B66\\u738B\\u671D\\uFF0C\\u4E43\\u662F\\u8FD9\\u82CD\\u832B\\u5927\\u9646\\u4E2D\\u9876\\u5C16\\u7EA7\\u522B\\u7684\\u738B\\u671D\\uFF0C\\u56FD\\u8FD0\\u9F0E\\u76DB\\uFF0C\\u6E90\\u5E08\\u65E0\\u6570\\uFF0C\\u6BD4\\u8D77\\u4ED6\\u4EEC\\u5927\\u5468\\uFF0C\\u53EF\\u8C13\\u662F\\u5DE8\\u4EBA\\u4E0E\\u77EE\\u5B50\\u3002 </p><p>\\u5468\\u64CE\\u7684\\u773C\\u775B\\uFF0C\\u5374\\u662F\\u5728\\u6B64\\u65F6\\u4E00\\u70B9\\u70B9\\u7684\\u901A\\u7EA2\\u8D77\\u6765\\uFF0C\\u773C\\u4E2D\\u6D41\\u9732\\u51FA\\u6DF1\\u6DF1\\u7684\\u4EC7\\u6068\\uFF1A\\u201C\\u90A3\\u4F60\\u53EF\\u53C8\\u77E5\\u9053\\uFF0C\\u5728\\u5341\\u4E94\\u5E74\\u524D\\uFF0C\\u5982\\u4ECA\\u7684\\u5927\\u6B66\\u7687\\u5BA4\\uFF0C\\u5374\\u53EA\\u662F\\u6211\\u4EEC\\u5927\\u5468\\u738B\\u671D\\u7684\\u81E3\\u5C5E\\uFF1F\\u201D </p><p>\\u5468\\u5143\\u7684\\u773C\\u4E2D\\u7EC8\\u4E8E\\u662F\\u51FA\\u73B0\\u4E86\\u4E00\\u4E1D\\u9707\\u60CA\\u4E4B\\u8272\\uFF0C\\u5982\\u4ECA\\u90A3\\u5927\\u6B66\\u7687\\u5BA4\\uFF0C\\u7ADF\\u7136\\u66FE\\u7ECF\\u662F\\u4ED6\\u4EEC\\u5927\\u5468\\u7684\\u81E3\\u5C5E\\uFF1F\\u4ED6\\u4EEC\\u5927\\u5468\\u5341\\u4E94\\u5E74\\u524D\\uFF0C\\u7ADF\\u7136\\u662F\\u5982\\u6B64\\u7684\\u5F3A\\u5927\\uFF1F </p><p>\\u201C\\u90A3...\\u90A3\\u4E3A\\u4EC0\\u4E48\\u4F1A\\u53D8\\u6210\\u8FD9\\u6837\\uFF1F\\u201D\\u5468\\u5143\\u5FCD\\u4E0D\\u4F4F\\u7684\\u95EE\\u9053\\u3002 </p><p>\\u201C\\u5728\\u6211\\u5927\\u5468\\u6210\\u7ACB\\u7684\\u6570\\u767E\\u5E74\\u95F4\\uFF0C\\u6B66\\u5BB6\\u4E00\\u76F4\\u8DDF\\u968F\\u6211\\u4EEC\\u5468\\u5BB6\\u56DB\\u65B9\\u5F81\\u6218\\uFF0C\\u5FE0\\u5FC3\\u803F\\u803F\\uFF0C\\u540E\\u6765\\u6211\\u4EEC\\u5927\\u5468\\u7ACB\\u56FD\\uFF0C\\u5FF5\\u5176\\u529F\\u52B3\\uFF0C\\u66F4\\u662F\\u5C01\\u6B66\\u5BB6\\u4E3A\\u4E16\\u88AD\\u6B66\\u738B\\uFF0C\\u4EAB\\u53D7\\u65E0\\u8FB9\\u6743\\u5229\\uFF0C\\u800C\\u6B66\\u5BB6\\u4E5F\\u5728\\u767E\\u5E74\\u95F4\\uFF0C\\u5B88\\u62A4\\u5927\\u5468\\u8FB9\\u5883\\uFF0C\\u9707\\u6151\\u56DB\\u65B9\\u3002\\u201D </p><p>\\u5468\\u64CE\\u8EAB\\u4F53\\u5FAE\\u5FAE\\u98A4\\u6296\\uFF0C\\u773C\\u4E2D\\u7684\\u8840\\u4E1D\\u5728\\u6B64\\u65F6\\u6500\\u722C\\u51FA\\u6765\\uFF1A\\u201C\\u7136\\u800C\\uFF0C\\u8C01\\u90FD\\u6CA1\\u60F3\\u5230\\uFF0C\\u5341\\u4E94\\u5E74\\u524D\\uFF0C\\u6B66\\u5BB6\\u5FFD\\u7136\\u53D1\\u52A8\\u53DB\\u4E71\\uFF0C\\u5230\\u5F97\\u6B64\\u65F6\\uFF0C\\u6211\\u4EEC\\u5468\\u6C0F\\u7687\\u65CF\\u65B9\\u624D\\u53D1\\u73B0\\uFF0C\\u7ECF\\u8FC7\\u8FD9\\u4E9B\\u5E74\\u7684\\u97EC\\u5149\\u517B\\u6666\\uFF0C\\u90A3\\u6B66\\u5BB6\\u5DF2\\u7ECF\\u62E5\\u6709\\u4E86\\u6781\\u4E3A\\u5F3A\\u5927\\u7684\\u529B\\u91CF\\uFF0C\\u800C\\u4E14\\u738B\\u671D\\u5185\\u7684\\u8BF8\\u591A\\u5C01\\u738B\\uFF0C\\u90FD\\u662F\\u88AB\\u5176\\u6240\\u62C9\\u62E2\\u3002\\u201D </p><p>\\u201C\\u77ED\\u77ED\\u4E0D\\u5230\\u4E00\\u5E74\\uFF0C\\u6211\\u4EEC\\u5468\\u6C0F\\u6E83\\u8D25\\uFF0C\\u4E00\\u8DEF\\u5357\\u9003\\uFF0C\\u9003\\u5411\\u6211\\u4EEC\\u5468\\u6C0F\\u53D1\\u8FF9\\u7684\\u7956\\u5730\\uFF0C\\u4E5F\\u5C31\\u662F\\u5982\\u4ECA\\u6211\\u4EEC\\u5927\\u5468\\u7684\\u8FD9\\u7247\\u5730\\u57DF\\u3002\\u201D </p><p>\\u201C\\u6211\\u4E0D\\u77E5\\u9053\\u6B66\\u5BB6\\u4E3A\\u4F55\\u4F1A\\u53DB\\u53D8\\uFF0C\\u4ED6\\u4EEC\\u5728\\u6211\\u4EEC\\u5927\\u5468\\u4EAB\\u6709\\u7684\\u5730\\u4F4D\\uFF0C\\u4E1D\\u6BEB\\u4E0D\\u5F31\\u4E8E\\u7687\\u65CF...\\u201D </p><p>\\u201C\\u76F4\\u5230\\u540E\\u6765\\uFF0C\\u5BC6\\u63A2\\u4ECE\\u6B66\\u5BB6\\u5F97\\u5230\\u4E86\\u4E00\\u4E9B\\u60C5\\u62A5\\uFF0C\\u90A3\\u662F\\u4E00\\u53E5\\u6D41\\u4F20\\u5728\\u6B66\\u5BB6\\u5185\\u90E8\\u6570\\u767E\\u5E74\\u7684\\u9884\\u8A00...\\u201D </p><p>\\u201C\\u9884\\u8A00\\uFF1F\\u201D\\u5468\\u5143\\u5FAE\\u6014\\u3002 </p><p>\\u5468\\u64CE\\u54AC\\u7740\\u7259\\u9F7F\\uFF0C\\u4E00\\u5B57\\u5B57\\u7684\\u9053\\uFF1A\\u201C\\u87D2\\u96C0\\u541E\\u9F99\\uFF0C\\u5927\\u6B66\\u5F53\\u5174\\uFF01\\u201D </p><p>\\u201C\\u87D2\\u96C0\\u541E\\u9F99\\uFF0C\\u5927\\u6B66\\u5F53\\u5174\\uFF1F\\u201D\\u5468\\u5143\\u8F7B\\u8F7B\\u7684\\u5FF5\\u4E86\\u4E00\\u6B21\\uFF0C\\u5374\\u662F\\u4E0D\\u660E\\u5176\\u610F\\uFF0C\\u9053\\uFF1A\\u201C\\u8FD9\\u662F\\u4EC0\\u4E48\\u610F\\u601D\\uFF1F\\u201D </p><p>\\u5468\\u64CE\\u7684\\u773C\\u775B\\u5728\\u6B64\\u65F6\\u53D8\\u5F97\\u8D64\\u7EA2\\u8D77\\u6765\\uFF0C\\u4ED6\\u76EF\\u7740\\u5468\\u5143\\uFF0C\\u773C\\u795E\\u65E0\\u6BD4\\u7684\\u54C0\\u75DB\\uFF1A\\u201C\\u5F53\\u521D\\u6211\\u4E5F\\u4E0D\\u77E5\\u9053\\u8FD9\\u7A76\\u7ADF\\u662F\\u4EC0\\u4E48\\u610F\\u601D\\uFF0C\\u76F4\\u5230\\u90A3\\u4E00\\u5929...\\u201D </p><p>\\u201C\\u6211\\u4EEC\\u5927\\u5468\\u6E83\\u8D25\\uFF0C\\u6211\\u7387\\u9886\\u7740\\u5927\\u5468\\u6B8B\\u90E8\\uFF0C\\u4E0D\\u65AD\\u64A4\\u9000\\uFF0C\\u6B66\\u5BB6\\u7D27\\u8FFD\\u4E0D\\u820D\\uFF0C\\u76F4\\u5230\\u8FFD\\u51FB\\u5230\\u6211\\u4EEC\\u811A\\u4E0B\\u8FD9\\u5EA7\\u5927\\u5468\\u57CE\\uFF0C\\u4F46\\u6B66\\u5BB6\\u5374\\u662F\\u56F4\\u800C\\u4E0D\\u653B\\uFF0C\\u4EFF\\u4F5B\\u5728\\u7B49\\u5F85\\u3002\\u201D </p><p>\\u201C\\u7B49\\u5F85\\u4EC0\\u4E48\\uFF1F\\u201D\\u5468\\u5143\\u611F\\u89C9\\u5230\\u4E00\\u80A1\\u4E0D\\u5B89\\u3002 </p><p>\\u5468\\u64CE\\u76EF\\u7740\\u5468\\u5143\\uFF0C\\u8138\\u5E9E\\u4E0A\\u6D6E\\u73B0\\u51FA\\u4E00\\u80A1\\u4F3C\\u54ED\\u975E\\u54ED\\u4E4B\\u8272\\uFF0C\\u90A3\\u79CD\\u7EDD\\u671B\\u4E0E\\u6124\\u6012\\uFF0C\\u8BA9\\u5F97\\u5468\\u5143\\u5FC3\\u90FD\\u662F\\u5728\\u98A4\\u6296\\u3002 </p><p>\\u201C\\u4ED6\\u4EEC\\u5728\\u7B49\\u5F85\\u4F60\\u7684\\u51FA\\u751F\\u3002\\u201D </p><p>\\u5468\\u64CE\\u7684\\u8FD9\\u53E5\\u8BDD\\uFF0C\\u8BA9\\u5F97\\u5468\\u5143\\u5FC3\\u5934\\u5267\\u9707\\uFF0C\\u4E00\\u8138\\u7684\\u63AA\\u624B\\u4E0D\\u53CA\\u3002 </p><p>\\u5728\\u90A3\\u4E00\\u65C1\\uFF0C\\u5468\\u5143\\u7684\\u6BCD\\u4EB2\\uFF0C\\u79E6\\u7389\\u5DF2\\u662F\\u6342\\u7740\\u5634\\uFF0C\\u53D1\\u51FA\\u4E86\\u538B\\u6291\\u5230\\u6781\\u81F4\\u7684\\u54ED\\u6CE3\\u58F0\\u3002 </p><p>\\u201C\\u4F60\\u77E5\\u9053\\u4F60\\u51FA\\u751F\\u7684\\u65F6\\u5019\\u662F\\u600E\\u4E48\\u6837\\u7684\\u5417\\uFF1F\\u201D\\u5468\\u64CE\\u671B\\u7740\\u5468\\u5143\\uFF0C\\u773C\\u775B\\u8840\\u7EA2\\u7684\\u9053\\uFF1A\\u201C\\u5143\\u513F\\uFF0C\\u4F60\\u51FA\\u751F\\u7684\\u90A3\\u4E00\\u523B\\uFF0C\\u5929\\u6709\\u5F02\\u8C61\\uFF0C\\u7D2B\\u6C14\\u84B8\\u817E\\uFF0C\\u6709\\u9F99\\u6C14\\u7F20\\u8EAB\\uFF0C\\u9F99\\u541F\\u9707\\u5929\\u5730\\uFF0C\\u4E43\\u662F\\u5723\\u9F99\\u6C14\\u8C61\\u3002\\u201D </p><p>\\u201C\\u4F60\\u5929\\u751F\\u516B\\u8109\\u81EA\\u5F00\\uFF0C\\u521A\\u521A\\u51FA\\u751F\\uFF0C\\u5C31\\u5DF2\\u8FC8\\u8FC7\\u5F00\\u8109\\u5883\\uFF0C\\u76F4\\u8FBE\\u517B\\u6C14\\u3002\\u201D </p><p>\\u201C\\u8FD9\\u662F\\u4F20\\u8BF4\\u4E2D\\u7684\\u201C\\u5723\\u9F99\\u6C14\\u8FD0\\u201D\\uFF0C\\u4EBF\\u4E07\\u65E0\\u4E00\\uFF0C\\u672A\\u6765\\u53EF\\u5165\\u5927\\u5883\\u754C\\uFF0C\\u4E0E\\u5929\\u5730\\u540C\\u5149\\uFF0C\\u65E5\\u6708\\u540C\\u5BFF\\uFF0C\\u4F60\\u662F\\u6211\\u5468\\u5BB6\\u524D\\u6240\\u672A\\u6709\\u7684\\u5723\\u9F99\\uFF01\\u201D </p><p>\\u5468\\u64CE\\u8BED\\u6C14\\u65E0\\u6BD4\\u7684\\u6FC0\\u52A8\\uFF0C\\u6D51\\u8EAB\\u5267\\u70C8\\u7684\\u98A4\\u6296\\u7740\\uFF0C\\u5F53\\u5468\\u5143\\u51FA\\u751F\\u65F6\\uFF0C\\u53EF\\u4EE5\\u60F3\\u8C61\\u4ED6\\u662F\\u4F55\\u7B49\\u7684\\u6FC0\\u52A8\\uFF0C\\u5929\\u4E0D\\u4EA1\\u5468\\u5BB6\\uFF0C\\u5728\\u8FD9\\u5371\\u96BE\\u65F6\\u523B\\uFF0C\\u8BA9\\u5F97\\u4ED6\\u4EEC\\u5468\\u5BB6\\u8FCE\\u6765\\u4E86\\u5723\\u9F99\\u8BDE\\u751F\\u3002 </p><p>\\u5468\\u5143\\u4E5F\\u662F\\u7741\\u5927\\u4E86\\u773C\\u775B\\uFF0C\\u663E\\u7136\\u662F\\u65E0\\u6CD5\\u60F3\\u8C61\\uFF0C\\u5728\\u4ED6\\u51FA\\u751F\\u4E4B\\u65F6\\uFF0C\\u7ADF\\u7136\\u4F1A\\u6709\\u5982\\u6B64\\u5F02\\u8C61\\u3002 </p><p>\\u201C\\u90A3...\\u90A3\\u4E3A\\u4EC0\\u4E48...\\u201D\\u4ED6\\u624B\\u638C\\u5FAE\\u5FAE\\u6709\\u4E9B\\u98A4\\u6296\\u7684\\u629A\\u6478\\u7740\\u81EA\\u5DF1\\u7684\\u8EAB\\u4F53\\uFF0C\\u65E2\\u7136\\u4ED6\\u662F\\u5929\\u751F\\u516B\\u8109\\u81EA\\u5F00\\u7684\\u8BDD\\uFF0C\\u90A3\\u4E3A\\u4F55\\u5982\\u4ECA\\u5374\\u662F\\u4F53\\u5185\\u8FDE\\u516B\\u8109\\u90FD\\u662F\\u627E\\u4E0D\\u5230\\uFF1F </p><p>\\u5468\\u64CE\\u6FC0\\u52A8\\u7684\\u58F0\\u97F3\\u5676\\u7136\\u800C\\u6B62\\uFF0C\\u4ED6\\u773C\\u4E2D\\u7684\\u5149\\u8292\\uFF0C\\u4EFF\\u4F5B\\u662F\\u5728\\u6B64\\u523B\\u6563\\u5C3D\\uFF0C\\u53EA\\u6709\\u7740\\u6D53\\u6D53\\u7684\\u60B2\\u54C0\\u4E4B\\u8272\\uFF0C\\u4ED6\\u795E\\u8272\\u7070\\u8D25\\u7684\\u9053\\uFF1A\\u201C\\u56E0\\u4E3A\\u5C31\\u5728\\u4F60\\u51FA\\u751F\\u7684\\u90A3\\u4E00\\u523B\\uFF0C\\u57CE\\u5916\\u6B66\\u738B\\u4E4B\\u59BB\\uFF0C\\u4E5F\\u662F\\u8BDE\\u4E0B\\u4E86\\u4E00\\u7537\\u4E00\\u5973\\uFF0C\\u7537\\u5A74\\u8EAB\\u7F20\\u86DF\\u87D2\\u4E4B\\u6C14\\uFF0C\\u5973.\\u5A74\\u5934\\u6709\\u7075\\u96C0\\u4E4B\\u6C14\\uFF0C\\u4E5F\\u662F\\u8EAB\\u5177\\u6C14\\u8FD0\\uFF01\\u201D </p><p>\\u201C\\u800C\\u636E\\u6211\\u4EEC\\u5F97\\u5230\\u7684\\u60C5\\u62A5\\uFF0C\\u90A3\\u6B66\\u738B\\u4E4B\\u59BB\\uFF0C\\u6000\\u80CE\\u5DF2\\u662F\\u8DB3\\u8DB3\\u4E09\\u5E74\\uFF0C\\u5374\\u59CB\\u7EC8\\u672A\\u4EA7\\uFF0C\\u5374\\u662F\\u5728\\u4ECA\\u65E5\\uFF0C\\u7A81\\u7136\\u4EA7\\u4E0B...\\u201D </p><p>\\u201C\\u4EE5\\u5F80\\u6211\\u8FD8\\u5C1A\\u4E0D\\u77E5\\u4E3A\\u4F55\\uFF0C\\u90A3\\u65F6\\u5374\\u662F\\u7EC8\\u4E8E\\u660E\\u767D\\u8FC7\\u6765\\uFF0C\\u4F20\\u95FB\\u540C\\u5E74\\u540C\\u6708\\u540C\\u65E5\\u751F\\u8005\\uFF0C\\u53EF\\u4E92\\u566C\\u6C14\\u8FD0\\uFF0C\\u539F\\u6765\\uFF0C\\u90A3\\u6B66\\u5BB6\\u7B79\\u8C0B\\u591A\\u5E74\\uFF0C\\u6240\\u4E3A\\u7684\\uFF0C\\u5E76\\u4E0D\\u662F\\u7B80\\u5355\\u7684\\u8C0B\\u6211\\u5927\\u5468\\uFF0C\\u800C\\u662F\\u8C0B\\u6211\\u5468\\u5BB6\\u4E4B\\u9F99\\uFF01\\u201D </p><p>\\u5468\\u5143\\u5F20\\u4E86\\u5F20\\u5634\\uFF0C\\u4E00\\u80A1\\u5BD2\\u610F\\u81EA\\u811A\\u5E95\\u51B2\\u4E0A\\u4E86\\u5929\\u7075\\u76D6\\uFF1A\\u201C\\u8FD9\\u662F\\u4E00\\u4E2A\\u9634\\u8C0B\\uFF01\\u201D </p><p>\\u5929\\u4E0B\\u95F4\\u54EA\\u6709\\u8FD9\\u4E48\\u5DE7\\u7684\\u4E8B\\uFF0C\\u8FD9\\u663E\\u7136\\u662F\\u4E00\\u4E2A\\u915D\\u917F\\u767E\\u5E74\\uFF0C\\u5E76\\u4E14\\u9488\\u5BF9\\u7740\\u4ED6\\u4EEC\\u5468\\u6C0F\\uFF0C\\u751A\\u81F3...\\u4E13\\u95E8\\u9488\\u5BF9\\u7740\\u4ED6\\u7684\\u4E00\\u4E2A\\u5927\\u9634\\u8C0B\\u3002 </p><p>\\u4E3A\\u4E86\\u6B64\\uFF0C\\u4ED6\\u4EEC\\u751A\\u81F3\\u4F7F\\u52B2\\u624B\\u6BB5\\uFF0C\\u8BA9\\u90A3\\u6B66\\u738B\\u4E4B\\u59BB\\u4E09\\u5E74\\u4E0D\\u4EA7\\uFF0C\\u5C31\\u662F\\u5728\\u7B49\\u4ED6\\uFF01 </p><p>\\u5468\\u64CE\\u70B9\\u4E86\\u70B9\\u5934\\uFF0C\\u58F0\\u97F3\\u5636\\u54D1\\u7684\\u9053\\uFF1A\\u201C\\u7684\\u786E\\u662F\\u4E00\\u4E2A\\u9634\\u8C0B\\uFF0C\\u6B66\\u5BB6\\u5728\\u6211\\u5927\\u5468\\u9690\\u5FCD\\u6570\\u767E\\u5E74\\uFF0C\\u4E3A\\u6211\\u5927\\u5468\\u5357\\u5F81\\u5317\\u6218\\uFF0C\\u5C3D\\u53D6\\u4FE1\\u4EFB\\uFF0C\\u7136\\u800C\\u8C01\\u90FD\\u6CA1\\u60F3\\u5230\\uFF0C\\u4ED6\\u4EEC\\u7684\\u767E\\u5E74\\u9690\\u5FCD\\uFF0C\\u90FD\\u662F\\u4E3A\\u4E86\\u4F60\\u800C\\u6765\\uFF01\\u201D </p><p>\\u201C\\u90A3\\u4E00\\u65E5\\uFF0C\\u6B66\\u738B\\u5165\\u57CE\\uFF0C\\u4EE5\\u4EBF\\u4E07\\u5927\\u5468\\u5B50\\u6C11\\u4E3A\\u8981\\u631F\\uFF0C\\u8981\\u5728\\u6211\\u4E0E\\u4F60\\u6BCD\\u540E\\u9762\\u524D\\uFF0C\\u593A\\u4F60\\u7684\\u5723\\u9F99\\u6C14\\u8FD0...\\u201D\\u8BF4\\u5230\\u6B64\\u5904\\uFF0C\\u5468\\u64CE\\u7684\\u773C\\u4E2D\\u751A\\u81F3\\u662F\\u6709\\u7740\\u8840\\u6CEA\\u6D41\\u6DCC\\u51FA\\u6765\\u3002 </p><p>\\u5728\\u90A3\\u4E00\\u65C1\\uFF0C\\u79E6\\u5E08\\u4E5F\\u662F\\u9762\\u8272\\u60B2\\u75DB\\uFF0C\\u4ED6\\u58F0\\u97F3\\u4F4E\\u6C89\\u7684\\u9053\\uFF1A\\u201C\\u90A3\\u4E00\\u65E5\\uFF0C\\u738B\\u4E0A\\u4E3A\\u4E86\\u4FDD\\u62A4\\u6BBF\\u4E0B\\uFF0C\\u4E0E\\u6B66\\u738B\\u6218\\u4E8E\\u5927\\u5468\\u5C71\\uFF0C\\u5374\\u662F\\u4E0D\\u654C\\uFF0C\\u88AB\\u5176\\u65A9\\u65AD\\u4E00\\u81C2\\uFF0C\\u82E5\\u4E0D\\u662F\\u90A3\\u6B66\\u738B\\u6015\\u5176\\u4ED6\\u4EBA\\u6BC1\\u4E86\\u6BBF\\u4E0B\\u7684\\u5723\\u9F99\\u6C14\\u8FD0\\u540C\\u5F52\\u4E8E\\u5C3D\\uFF0C\\u6050\\u6015\\u8FDE\\u738B\\u4E0A\\u90FD\\u5F97\\u6218\\u6B7B\\u5176\\u624B\\u3002\\u201D </p><p>\\u201C\\u800C\\u4E3A\\u4E86\\u987A\\u5229\\u7684\\u593A\\u5F97\\u6BBF\\u4E0B\\u7684\\u6C14\\u8FD0\\uFF0C\\u6B66\\u738B\\u7ACB\\u7956\\u8A93\\uFF0C\\u767E\\u5E74\\u5185\\u5927\\u6B66\\u4E0D\\u8E0F\\u8DB3\\u5927\\u5468\\u534A\\u6B65\\u3002\\u201D </p><p>\\u5F53\\u5E74\\u90A3\\u53EF\\u6015\\u7684\\u4E00\\u5E55\\u518D\\u5EA6\\u4ECE\\u8111\\u6D77\\u6DF1\\u5904\\u6D8C\\u4E86\\u51FA\\u6765\\uFF0C\\u4E00\\u65C1\\u7684\\u79E6\\u7389\\uFF0C\\u518D\\u4E5F\\u5FCD\\u53D7\\u4E0D\\u4F4F\\u60C5\\u7EEA\\uFF0C\\u8DEA\\u5012\\u5728\\u4E86\\u5468\\u5143\\u8EAB\\u524D\\uFF0C\\u5C06\\u4ED6\\u7D27\\u7D27\\u7684\\u62B1\\u4F4F\\uFF0C\\u75DB\\u54ED\\u8D77\\u6765\\uFF0C\\u54ED\\u58F0\\u6495\\u5FC3\\u88C2\\u80BA\\u3002 </p><p>\\u201C\\u5143\\u513F\\uFF01\\u6211\\u53EF\\u601C\\u7684\\u513F\\uFF01\\u6BCD\\u540E\\u5BF9\\u4E0D\\u8D77\\u4F60\\uFF01\\u201D </p><p>\\u90A3\\u4E00\\u65E5\\u7684\\u6B8B\\u9177\\u8BB0\\u5FC6\\uFF0C\\u518D\\u5EA6\\u88AB\\u8840\\u6DCB\\u6DCB\\u7684\\u6495\\u5F00\\uFF0C\\u5979\\u6E05\\u6670\\u7684\\u8BB0\\u5F97\\uFF0C\\u521A\\u521A\\u51FA\\u751F\\u7684\\u5468\\u5143\\uFF0C\\u88AB\\u5F53\\u505A\\u9635\\u773C\\uFF0C\\u7F6E\\u4E8E\\u6B66\\u738B\\u6240\\u5E03\\u7F6E\\u7684\\u796D\\u575B\\u4E4B\\u4E0A\\u3002 </p><p>\\u800C\\u5728\\u796D\\u575B\\u4E2D\\uFF0C\\u8FD8\\u6709\\u7740\\u90A3\\u6B66\\u738B\\u521A\\u521A\\u51FA\\u751F\\u7684\\u4E00\\u5BF9\\u513F\\u5973\\u3002 </p><p>\\u53EA\\u4E0D\\u8FC7\\uFF0C\\u4E00\\u4E2A\\u662F\\u88AB\\u593A\\uFF0C\\u4E24\\u4E2A\\u662F\\u5728\\u5F97\\u3002 </p><p>\\u6C14\\u8FD0\\u5265\\u593A\\uFF0C\\u72B9\\u5982\\u8840\\u8089\\u5265\\u79BB\\uFF0C\\u90A3\\u79CD\\u75DB\\u82E6\\u96BE\\u4EE5\\u60F3\\u8C61\\u3002 </p><p>\\u800C\\u90A3\\u65F6\\u5019\\u7684\\u79E6\\u7389\\uFF0C\\u521A\\u521A\\u5F97\\u5B50\\u4E4B\\u559C\\uFF0C\\u4F46\\u5374\\u53EA\\u80FD\\u773C\\u7741\\u7741\\u7684\\u770B\\u7740\\u81EA\\u5BB6\\u5B69\\u513F\\u5728\\u90A3\\u51B0\\u51C9\\u7684\\u796D\\u575B\\u4E2D\\uFF0C\\u627F\\u53D7\\u7740\\u65E0\\u8FB9\\u75DB\\u82E6\\uFF0C\\u5C06\\u7A1A\\u5AE9\\u7684\\u58F0\\u97F3\\u90FD\\u54ED\\u5F97\\u5636\\u54D1\\u8D77\\u6765\\u3002 </p><p>\\u90A3\\u79CD\\u7EDD\\u671B\\u4E0E\\u65E0\\u529B\\uFF0C\\u51E0\\u4E4E\\u662F\\u4EE4\\u5F97\\u90A3\\u65F6\\u5019\\u7684\\u5979\\u60E8\\u4E9B\\u6655\\u6B7B\\u8FC7\\u53BB\\u3002 </p><p>\\u5657\\u55E4\\u3002 </p><p>\\u800C\\u56E0\\u4E3A\\u5FC3\\u60C5\\u6FC0\\u8361\\uFF0C\\u79E6\\u7389\\u8138\\u988A\\u77AC\\u95F4\\u82CD\\u767D\\u8D77\\u6765\\uFF0C\\u4E00\\u53E3\\u9C9C\\u8840\\u5FCD\\u4E0D\\u4F4F\\u7684\\u55B7\\u4E86\\u51FA\\u6765\\uFF0C\\u67D3\\u7EA2\\u4E86\\u5468\\u5143\\u7684\\u5934\\u53D1\\u3002 </p><p>\\u201C\\u6BCD\\u540E\\uFF1F\\uFF01\\u4F60\\u600E\\u4E48\\u4E86\\uFF1F\\u201D\\u5468\\u5143\\u5927\\u60CA\\uFF0C\\u6025\\u5FD9\\u5E2E\\u79E6\\u7389\\u643D\\u53BB\\u5634\\u89D2\\u7684\\u8840\\u8FF9\\u3002 </p><p>\\u4E00\\u65C1\\u7684\\u79E6\\u5E08\\u8D76\\u7D27\\u8D70\\u4E0A\\u6765\\uFF0C\\u638C\\u5FC3\\u6563\\u53D1\\u7740\\u67D4\\u548C\\u4E4B\\u6C14\\uFF0C\\u81EA\\u79E6\\u7389\\u5929\\u7075\\u76D6\\u704C\\u6CE8\\u800C\\u8FDB\\uFF0C\\u5E2E\\u52A9\\u5979\\u7A33\\u4F4F\\u4F53\\u5185\\u7684\\u6C14\\u8840\\uFF0C\\u4ED6\\u770B\\u4E86\\u4E00\\u773C\\u8138\\u8272\\u82CD\\u767D\\u7684\\u79E6\\u7389\\uFF0C\\u7136\\u540E\\u5BF9\\u7740\\u5468\\u5143\\u53F9\\u606F\\u9053\\uFF1A\\u201C\\u6BBF\\u4E0B\\uFF0C\\u4F60\\u4E5F\\u83AB\\u602A\\u738B\\u4E0A\\u4E0E\\u738B\\u540E\\u672A\\u80FD\\u4FDD\\u62A4\\u597D\\u4F60\\uFF0C\\u738B\\u4E0A\\u5F53\\u5E74\\u62FC\\u5C3D\\u4E86\\u4E00\\u5207\\uFF0C\\u9669\\u4E9B\\u6218\\u6B7B\\u3002\\u201D </p><p>\\u201C\\u800C\\u738B\\u540E\\u66F4\\u662F\\u5728\\u5F53\\u521D\\u4F60\\u88AB\\u5265\\u593A\\u6C14\\u8FD0\\u540E\\uFF0C\\u5C06\\u81EA\\u8EAB\\u7CBE\\u8840\\u6CE8\\u5165\\u4F60\\u7684\\u4F53\\u5185\\uFF0C\\u4E4B\\u540E\\u5E74\\u5E74\\u4E3A\\u4F60\\u8F93\\u8840\\uFF0C\\u5982\\u6B64\\u6BBF\\u4E0B\\u624D\\u80FD\\u591F\\u6D3B\\u5230\\u4ECA\\u65E5\\uFF0C\\u4E0D\\u8FC7\\u738B\\u540E\\u4E5F\\u4E3A\\u6B64\\u4ED8\\u51FA\\u4E86\\u6781\\u5927\\u7684\\u4EE3\\u4EF7\\uFF0C\\u5979\\u6BCF\\u8F93\\u8840\\u4E00\\u6B21\\uFF0C\\u90FD\\u5C06\\u4F1A\\u51CF\\u5BFF\\u4E09\\u5E74\\uFF0C\\u5341\\u4E8C\\u5E74\\u91CC\\uFF0C\\u5979\\u5DF2\\u51CF\\u5BFF\\u4E09\\u5341\\u516D\\u5E74\\uFF0C\\u5143\\u6C14\\u5927\\u4F24\\uFF0C\\u5982\\u4ECA\\u5DF2\\u662F\\u4EC5\\u6709\\u4E0D\\u5230\\u5341\\u5E74\\u7684\\u5BFF\\u547D\\u3002\\u201D </p><p>\\u201C\\u4EC0\\u4E48\\uFF1F\\uFF01\\u4F60\\u8BF4\\u4EC0\\u4E48\\uFF1F\\uFF01\\u201D </p><p>\\u5468\\u5143\\u542C\\u5230\\u6B64\\u8BDD\\uFF0C\\u987F\\u65F6\\u5982\\u906D\\u96F7\\u51FB\\uFF0C\\u773C\\u4E2D\\u8840\\u4E1D\\u75AF\\u72C2\\u7684\\u6500\\u722C\\u51FA\\u6765\\uFF0C\\u5148\\u524D\\u5373\\u4FBF\\u662F\\u542C\\u89C1\\u81EA\\u8EAB\\u6C14\\u8FD0\\u88AB\\u593A\\uFF0C\\u4ED6\\u90FD\\u672A\\u66FE\\u6709\\u5982\\u6B64\\u5F3A\\u70C8\\u7684\\u60C5\\u7EEA\\u6CE2\\u52A8\\uFF0C\\u6BD5\\u7ADF\\u8FD9\\u4E9B\\u4E8B\\u53D1\\u751F\\u5728\\u4ED6\\u5E74\\u5E7C\\u4E0D\\u8BB0\\u4E8B\\u65F6\\uFF0C\\u56E0\\u6B64\\u5BF9\\u90A3\\u6240\\u8C13\\u7684\\u201C\\u5723\\u9F99\\u6C14\\u8FD0\\u201D\\u4E5F\\u6CA1\\u6709\\u592A\\u8FC7\\u5F3A\\u70C8\\u7684\\u5F52\\u5C5E\\u611F\\uFF0C\\u5373\\u4FBF\\u88AB\\u8BBE\\u8BA1\\u5265\\u593A\\uFF0C\\u4E5F\\u53EA\\u662F\\u611F\\u5230\\u6709\\u4E9B\\u9707\\u60CA\\u3002 </p><p>\\u6B66\\u5BB6\\u8BBE\\u8BA1\\u4ED6\\u767E\\u5E74\\uFF0C\\u4ED6\\u5FC3\\u4E2D\\u867D\\u6709\\u6CE2\\u6F9C\\uFF0C\\u4F46\\u5374\\u80FD\\u591F\\u538B\\u5236\\u4F4F\\uFF0C\\u4F46\\u4ED6\\u4EEC\\u5C06\\u75BC\\u7231\\u4ED6\\u7684\\u6BCD\\u4EB2\\u903C\\u5230\\u5BFF\\u5143\\u67AF\\u7AED\\uFF0C\\u5374\\u662F\\u8BA9\\u5F97\\u5468\\u5143\\u5FC3\\u4E2D\\u7B2C\\u4E00\\u6B21\\u62E5\\u6709\\u4E86\\u65E0\\u6CD5\\u904F\\u5236\\u7684\\u6740\\u610F\\u3002 </p><p>\\u6240\\u4EE5\\uFF0C\\u5F53\\u6B64\\u65F6\\u542C\\u5230\\u79E6\\u5E08\\u8FD9\\u53E5\\u8BDD\\u65F6\\uFF0C\\u5468\\u5143\\u518D\\u4E5F\\u4FDD\\u6301\\u4E0D\\u4E86\\u60C5\\u7EEA\\uFF0C\\u6D51\\u8EAB\\u8840\\u6DB2\\u90FD\\u5728\\u75AF\\u72C2\\u7684\\u5BF9\\u7740\\u8111\\u5B50\\u6D8C\\u53BB\\uFF0C\\u4EE4\\u5F97\\u4ED6\\u7684\\u8138\\u5E9E\\u53D8\\u5F97\\u8840\\u7EA2\\uFF0C\\u6E05\\u79C0\\u7684\\u7A1A\\u5AE9\\u9762\\u5E9E\\uFF0C\\u7ADF\\u662F\\u663E\\u5F97\\u6709\\u4E9B\\u72F0\\u72DE\\u8D77\\u6765\\u3002 </p><p>\\u201C\\u6B66\\u5BB6\\uFF0C\\u4F60\\u4EEC\\u5B89\\u6562\\u903C\\u5BB3\\u6211\\u6BCD\\u540E\\uFF01\\u771F\\u8BE5\\u6B7B\\uFF01\\u201D </p><p>\\u5468\\u5143\\u6D51\\u8EAB\\u98A4\\u6296\\u7740\\uFF0C\\u773C\\u775B\\u8840\\u7EA2\\uFF0C\\u4E00\\u80A1\\u6ED4\\u5929\\u822C\\u7684\\u9707\\u6012\\u4E0E\\u6740\\u610F\\u81EA\\u5FC3\\u5934\\u6D8C\\u8D77\\u3002 </p><p>\\u5468\\u64CE\\u5C06\\u79E6\\u7389\\u62B1\\u8D77\\uFF0C\\u8BA9\\u5979\\u9760\\u5728\\u7389\\u69BB\\u4E0A\\uFF0C\\u6B64\\u65F6\\u4ED6\\u7684\\u5934\\u53D1\\u4EFF\\u4F5B\\u90FD\\u662F\\u5728\\u6B64\\u65F6\\u82CD\\u767D\\u4E86\\u4E00\\u4E9B\\uFF0C\\u5A01\\u4E25\\u7684\\u6C14\\u52BF\\u8361\\u7136\\u65E0\\u5B58\\uFF0C\\u4ED6\\u8BED\\u6C14\\u6728\\u7136\\u7684\\u9053\\uFF1A\\u201C\\u5929\\u5730\\u95F4\\u6709\\u6C14\\u8FD0\\u4E00\\u8BF4\\uFF0C\\u6B66\\u5BB6\\u5E95\\u8574\\u5355\\u8584\\uFF0C\\u60F3\\u8981\\u7ACB\\u56FD\\uFF0C\\u7EF5\\u5EF6\\u540E\\u4EE3\\uFF0C\\u9707\\u6151\\u56DB\\u65B9\\uFF0C\\u90A3\\u5C31\\u5FC5\\u987B\\u9700\\u8981\\u8DB3\\u591F\\u7684\\u6C14\\u8FD0\\u652F\\u6491\\uFF0C\\u800C\\u4F60\\u7684\\u5723\\u9F99\\u6C14\\u8FD0\\uFF0C\\u5C31\\u662F\\u6700\\u4F73\\u4E4B\\u7269\\u3002\\u201D </p><p>\\u201C\\u6B66\\u738B\\u593A\\u4F60\\u6C14\\u8FD0\\uFF0C\\u8D50\\u4E88\\u5176\\u5B50\\u4E0E\\u5973\\uFF0C\\u81EA\\u6B64\\uFF0C\\u5927\\u6B66\\u6709\\u9F99\\u51E4\\u76F8\\u62A4\\uFF0C\\u56FD\\u8FD0\\u9F0E\\u76DB\\uFF0C\\u5927\\u6B66\\u738B\\u671D\\u7684\\u5174\\u76DB\\uFF0C\\u5168\\u662F\\u56E0\\u4E3A\\u593A\\u4E86\\u4F60\\u7684\\u6C14\\u8FD0\\u3002\\u201D </p><p>\\u201C\\u800C\\u4F60\\u8EAB\\u6000\\u7684\\u5723\\u9F99\\u6C14\\u8FD0\\uFF0C\\u88AB\\u90A3\\u87D2\\u96C0\\u4E4B\\u547D\\u5F3A\\u884C\\u63A0\\u593A\\uFF0C\\u81EA\\u7136\\u5C31\\u4EA7\\u751F\\u4E86\\u5F3A\\u70C8\\u7684\\u6028\\u6068\\u4E4B\\u6C14\\uFF0C\\u90A3\\u6B66\\u738B\\u6545\\u610F\\u5C06\\u8FD9\\u6028\\u6068\\u4E4B\\u6C14\\u5C01\\u4E8E\\u4F60\\u7684\\u4F53\\u5185\\uFF0C\\u4ECE\\u800C\\u5F62\\u6210\\u4E86\\u6028\\u9F99\\u6BD2\\uFF0C\\u5B83\\u541E\\u98DF\\u4F60\\u7684\\u7CBE\\u8840\\u4E0D\\u65AD\\u7684\\u58EE\\u5927\\uFF0C\\u76F4\\u5230\\u67D0\\u4E00\\u5929\\u6210\\u719F\\u7206\\u53D1\\uFF0C\\u5C31\\u4F1A\\u5C06\\u4F60\\u7684\\u751F\\u673A\\u5F7B\\u5E95\\u541E\\u706D\\u3002\\u201D </p><p>\\u201C\\u540C\\u65F6\\u4F60\\u5723\\u9F99.\\u6839\\u88AB\\u7834\\uFF0C\\u5929\\u751F\\u516B\\u8109\\u6D88\\u9000\\uFF0C\\u76F4\\u5230\\u4ECA\\u65E5\\uFF0C\\u516B\\u8109\\u90FD\\u672A\\u66FE\\u518D\\u663E\\uFF0C\\u4FEE\\u884C\\u4E4B\\u8DEF\\u8270\\u96BE...\\u201D </p><p>\\u5468\\u64CE\\u58F0\\u97F3\\u82CD\\u51C9\\uFF0C\\u5176\\u4E2D\\u900F\\u7740\\u65E0\\u8FB9\\u7684\\u65E0\\u529B\\uFF0C\\u96BE\\u4EE5\\u60F3\\u8C61\\uFF0C\\u90A3\\u4E00\\u65E5\\u5BF9\\u4ED6\\u4EEC\\u5468\\u6C0F\\u800C\\u8A00\\uFF0C\\u662F\\u4E00\\u79CD\\u4F55\\u7B49\\u7EDD\\u671B\\u3002 </p><p>\\u90A3\\u4E00\\u65E5\\uFF0C\\u57CE\\u5916\\u87D2\\u96C0\\u9F50\\u9E23\\uFF0C\\u971E\\u5149\\u4E07\\u4E08\\uFF0C\\u501F\\u52BF\\u8715\\u53D8\\u3002 </p><p>\\u90A3\\u4E00\\u65E5\\uFF0C\\u57CE\\u5185\\u5723\\u9F99\\u54C0\\u9E23\\uFF0C\\u5316\\u4E3A\\u9752\\u70DF\\uFF0C\\u8885\\u8885\\u800C\\u6563\\u3002 </p><p>\\u6B64\\u4E3A\\uFF0C\\u87D2\\u96C0\\u541E\\u9F99\\u3002 </p><p></p>\",\n      text: '',\n      nextText: '',\n      preText: '',\n      preTranslateX: 0, //上一章的位移\n\n      showAnimation: false, //是否开启动画\n      pages: [],\n      prePages: [],\n      nextPages: [],\n      contentWidth: 0,\n      contentHeight: 0,\n      windowWidth: 0,\n      windowHeight: 0,\n      platform: '', //设备\n      batteryState: '', //电池状态\n      batteryLevel: '', //电量\n\n      statusBarHeight: 0, //状态栏高度\n      columnGap: 40,\n      currentPage: 0,\n      touchStartX: 0, // 触屏起始点\n      touchStartT: 0, //触屏起始时间\n      touchTimer: null, //用于触摸节流\n      menuShow: false,\n      turnPageTime: 0.5, //翻页动画时间\n\n      fontSize: '',\n      lineHeight: '',\n      background: '',\n      colorList: ['#000', '#666'],\n\n      wait: false //翻至章节交接时，会导致翻至空白页bug,需要等待章节轮换\n    };\n\n  },\n  onLoad: function onLoad() {\n    this.getSystemInfo();\n  },\n  mounted: function mounted() {\n    this.initPage();\n  },\n  computed: {\n    progress: function progress() {\n      return this.currentPage / (this.pages.length - 1);\n    } },\n\n  methods: {\n\n    /**\n             * 获取高度宽度\n             **/\n    getSystemInfo: function getSystemInfo() {var _this = this;var _uni$getSystemInfoSyn =\n\n      uni.getSystemInfoSync(),windowWidth = _uni$getSystemInfoSyn.windowWidth,windowHeight = _uni$getSystemInfoSyn.windowHeight,statusBarHeight = _uni$getSystemInfoSyn.statusBarHeight,platform = _uni$getSystemInfoSyn.platform;\n      this.statusBarHeight = statusBarHeight;\n      this.windowWidth = windowWidth;\n      this.windowHeight = windowHeight;\n      this.contentWidth = windowWidth - 40;\n      this.contentHeight = windowHeight - 60;\n      this.platform = platform;\n\n\n      plus.navigator.setFullscreen(true);\n      // 获取安卓电量\n      if (this.platform === 'ios') {\n        var UIDevice = plus.ios.import(\"UIDevice\");\n        var dev = UIDevice.currentDevice();\n        if (!dev.isBatteryMonitoringEnabled()) {\n          dev.setBatteryMonitoringEnabled(true);\n        }\n        this.batteryState = dev.batteryState();\n        this.batteryLevel = dev.batteryLevel();\n      } else\n      {\n        var main = plus.android.runtimeMainActivity();\n        var Intent = plus.android.importClass('android.content.Intent');\n        var recevier = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', {\n          onReceive: function onReceive(context, intent) {\n            var action = intent.getAction();\n            if (action == Intent.ACTION_BATTERY_CHANGED) {\n              _this.batteryState = intent.getIntExtra(\"status\", 0); //电池状态  \n              _this.batteryLevel = intent.getIntExtra(\"level\", 0); //电量\n            }\n          } });\n\n        var IntentFilter = plus.android.importClass('android.content.IntentFilter');\n        var filter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);\n        main.registerReceiver(recevier, filter);\n      }\n\n\n\n      // 获取字体、排版等信息\n      this.fontSize = uni.getStorageSync('fontSize') || 16;\n      this.lineHeight = uni.getStorageSync('lineHeight') || 1.5;\n      this.background = uni.getStorageSync('background') || 0;\n\n\n\n\n\n    },\n\n    /**\n       * 获取数据初始化页面\n       **/\n    initPage: function initPage() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                _this2.preTranslateX = -_this2.windowWidth - 20;_context.next = 3;return (\n                  _this2.getData());case 3:\n                _this2.$nextTick(function () {\n                  _this2.calcPages();\n                });case 4:case \"end\":return _context.stop();}}}, _callee);}))();\n    },\n\n    /**\n       * 计算阅读页长度,并生成pages,并跳转至某页（如果有）\n       **/\n    calcPages: function calcPages(type, progress) {var _this3 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.select('#text').boundingClientRect(function (data) {\n        var width = data.width;\n        var height = data.height;\n        _this3.pages = _this3.genPages(width, height);\n        if (type === 1) {\n          _this3.currentPage = Math.floor((_this3.pages.length - 1) * progress);\n          _this3.goToPage(_this3.currentPage);\n        }\n      }).exec();\n      this.calcPrePages();\n      this.calcNextPages();\n    },\n\n    /**\n       * 计算上一章阅读页长度,并生成pages\n       **/\n    calcPrePages: function calcPrePages() {var _this4 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.select('#preText').boundingClientRect(function (data) {\n        var width = data.width;\n        var height = data.height;\n        _this4.prePages = _this4.genPages(width, height);\n      }).exec();\n    },\n\n    /**\n       * 计算下一章阅读页长度,并生成pages\n       **/\n    calcNextPages: function calcNextPages() {var _this5 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.select('#nextText').boundingClientRect(function (data) {\n        var width = data.width;\n        var height = data.height;\n        _this5.nextPages = _this5.genPages(width, height);\n      }).exec();\n    },\n\n\n    /**\n       * 生成阅读页pages\n       **/\n    genPages: function genPages(width, height) {\n      var arr = [];\n      var id = 0;\n      if (this.platform === 'ios') {\n        while (height > 0) {\n          arr.push({\n            id: id,\n            zIndex: 200 - id,\n            translateX: 0 });\n\n          id++;\n          height -= this.contentHeight;\n        }\n      } else\n      {\n        while (width > 0) {\n          arr.push({\n            id: id,\n            zIndex: 200 - id,\n            translateX: 0 });\n\n          id++;\n          width -= this.contentWidth + this.columnGap;\n        }\n      }\n      return arr;\n    },\n\n    /**\n       * 触摸开始\n       **/\n    touchStart: function touchStart(e) {\n      this.showAnimation = false;\n      this.touchStartX = e.touches[0].clientX;\n      this.touchStartT = e.timeStamp;\n    },\n\n    /**\n       * 触摸结束\n       **/\n    touchEnd: function touchEnd(e) {\n      this.showAnimation = true;\n      var deltaX = e.changedTouches[0].clientX - this.touchStartX;\n      if (deltaX > this.windowWidth / 2) {\n        this.prePage();\n      } else\n      if (deltaX < -this.windowWidth / 2) {\n        this.nextPage();\n      } else\n      {\n        var v = 0;\n        v = deltaX / (e.timeStamp - this.touchStartT);\n        if (v <= 0.1 && v > 0) {//翻页速度慢，取消翻页\n          if (this.currentPage !== 0) {\n            this.pages[this.currentPage - 1].translateX = -this.windowWidth - 20;\n          } else\n          {\n            this.preTranslateX = -this.windowWidth - 20;\n          }\n        } else\n        if (v >= -0.1 && v < 0) {//翻页速度慢，取消翻页\n          this.pages[this.currentPage].translateX = 0;\n        } else\n        if (v > 0.1) {\n          this.prePage();\n        } else\n        if (v < -0.1) {\n          this.nextPage();\n        }\n      }\n    },\n\n    /**\n       * 触摸\n       **/\n    touchMove: function touchMove(e) {var _this6 = this;\n\n      if (!this.touchTimer) {\n        var deltaX = e.touches[0].clientX - this.touchStartX;\n        if (deltaX < 0) {\n          if (this.currentPage === this.pages.length - 1) {//如果翻至最后一页\n            if (this.nextText.length === 0) {//如果没有下一章\n              uni.showToast({\n                title: '这是最后一章',\n                icon: 'none' });\n\n            } else\n            {\n              this.pages[this.currentPage].translateX = deltaX;\n            }\n          } else\n          {\n            this.pages[this.currentPage].translateX = deltaX;\n          }\n        } else\n        {\n          if (this.currentPage === 0) {//如果是第一页\n            if (this.preText.length === 0) {//如果没有上一章\n              uni.showToast({\n                title: '这是第一章',\n                icon: 'none' });\n\n            } else\n            {\n              this.preTranslateX = -this.windowWidth + deltaX;\n            }\n          } else\n          {\n            this.pages[this.currentPage - 1].translateX = -this.windowWidth + deltaX;\n          }\n        }\n        this.touchTimer = setTimeout(function () {\n          _this6.touchTimer = null;\n        }, 10);\n      }\n    },\n\n    /**\n       * 呼出菜单\n       **/\n    showMenu: function showMenu() {\n\n      // plus.navigator.setFullscreen(this.menuShow);\n\n      this.menuShow = !this.menuShow;\n    },\n\n\n    /**\n       * 上一页\n       **/\n    prePage: function prePage() {var _this7 = this;\n      if (this.menuShow) {\n        this.menuShow = false;\n\n        // plus.navigator.setFullscreen(true);\n\n        return;\n      }\n      if (this.currentPage === 0) {\n        if (this.preText.length === 0) {\n          uni.showToast({\n            title: '这是第一章',\n            icon: 'none' });\n\n        } else\n        if (!this.wait) {\n          this.wait = true;\n          uni.showToast({\n            title: this.preChapterName,\n            icon: 'none' });\n\n          this.preTranslateX = 0;\n          // 动画结束后获取上一章,重置页面\n          setTimeout(function () {\n            _this7.preChapter();\n          }, this.turnPageTime * 1000);\n        }\n      } else\n      {\n        this.pages[this.currentPage - 1].translateX = 0;\n        this.currentPage--;\n      }\n    },\n\n    /**\n       * 下一页\n       **/\n    nextPage: function nextPage() {var _this8 = this;\n      if (this.menuShow) {\n        this.menuShow = false;\n\n        // plus.navigator.setFullscreen(true);\n\n        return;\n      }\n      if (this.currentPage === this.pages.length - 1) {\n        if (this.nextText.length === 0) {\n          uni.showToast({\n            title: '这是最后一章',\n            icon: 'none' });\n\n        } else\n        if (!this.wait) {\n          this.wait = true;\n          uni.showToast({\n            title: this.nextChapterName,\n            icon: 'none' });\n\n          this.pages[this.currentPage].translateX = -this.windowWidth - 20;\n          // 动画结束后获取下一章,重置页面\n          setTimeout(function () {\n            _this8.nextChapter();\n          }, this.turnPageTime * 1000);\n        }\n      } else\n      {\n        this.pages[this.currentPage].translateX = -this.windowWidth - 20;\n        this.currentPage++;\n      }\n\n    },\n\n    /**\n       * 获取下一章,重置页面，将本章变为前一章，将下一章变为本章，获取下一章内容\n       **/\n    nextChapter: function nextChapter() {\n      this.chapterId++;\n      this.preText = this.text;\n      this.text = this.nextText;\n      this.nextText = '';\n      this.getText(this.chapterId + 1, 'next');\n      this.prePages = this.pages.map(function (value) {\n        value.translateX = 0;\n        return value;\n      });\n      this.pages = [].concat(this.nextPages);\n      this.nextPages = [];\n      this.preChapterName = this.chapterName;\n      this.chapterName = this.nextChapterName;\n      this.nextChapterName = '';\n      this.wait = false;\n      this.currentPage = 0;\n      this.goToPage(this.currentPage);\n\n    },\n\n    /**\n       * 获取上一章,重置页面，将本章变为后一章，将上一章变为本章，获取上一章内容\n       **/\n    preChapter: function preChapter() {\n      this.preTranslateX = -this.windowWidth - 20;\n      this.chapterId--;\n      this.nextText = this.text;\n      this.text = this.preText;\n      this.preText = '';\n      this.getText(this.chapterId - 1, 'pre');\n      this.nextPages = this.pages.map(function (value) {\n        value.translateX = 0;\n        return value;\n      });\n      this.pages = [].concat(this.prePages);\n      this.prePages = [];\n      this.nextChapterName = this.chapterName;\n      this.chapterName = this.preChapterName;\n      this.preChapterName = '';\n      this.wait = false;\n\n      this.currentPage = this.pages.length - 1;\n      this.goToPage(this.currentPage);\n    },\n\n    /**\n       * 根据页码跳转\n       **/\n    goToPage: function goToPage(page) {var _this9 = this;\n      if (page > this.pages.length - 1) {\n        page = this.pages.length - 1;\n      }\n      this.showAnimation = false;\n      this.pages.forEach(function (value, index) {\n        if (index < page) {\n          value.translateX = -_this9.windowWidth - 20;\n        }\n      });\n    },\n\n    /**\n       * 加大字体\n       **/\n    bigSize: function bigSize() {var _this10 = this;\n      if (this.fontSize < 25) {\n        var progress = this.progress;\n        this.fontSize++;\n        uni.setStorageSync('fontSize', this.fontSize);\n        this.$nextTick(function () {\n          _this10.calcPages(1, progress);\n        });\n      } else\n      {\n        uni.showToast({\n          title: '最大字体',\n          icon: 'none' });\n\n      }\n\n\n    },\n\n    /**\n       * 缩小字体\n       **/\n    smallSize: function smallSize() {var _this11 = this;\n      if (this.fontSize > 14) {\n        var progress = this.progress;\n        this.fontSize--;\n        uni.setStorageSync('fontSize', this.fontSize);\n        this.$nextTick(function () {\n          _this11.calcPages(1, progress);\n        });\n      } else\n      {\n        uni.showToast({\n          title: '最小字体',\n          icon: 'none' });\n\n      }\n    },\n\n    /**\n       * 改变行距\n       **/\n    changeLineHeight: function changeLineHeight(lineHeight) {var _this12 = this;\n      if (lineHeight === this.lineHeight) {\n        return;\n      } else\n      {\n        var progress = this.progress;\n        this.lineHeight = lineHeight;\n        uni.setStorageSync('lineHeight', this.lineHeight);\n        this.$nextTick(function () {\n          _this12.calcPages(1, progress);\n        });\n      }\n    },\n\n    /**\n       * 改变背景\n       **/\n    changeBackground: function changeBackground(background) {\n      if (background === this.background) {\n        return;\n      } else\n      {\n        this.background = background;\n        uni.setStorageSync('background', this.background);\n      }\n    },\n\n    /**\n       * 获取数据，包括阅读到第几章，以及前中后三章内容\n       **/\n    getData: function getData() {var _this13 = this;\n      uni.showLoading({ mask: true });\n      return new Promise(function (resolve, reject) {\n        // 模拟网络时间\n        setTimeout(function () {\n          uni.hideLoading();\n          _this13.chapterId = 2;\n          _this13.chapterName = \"\\u7B2C\".concat(_this13.chapterId, \"\\u7AE0 \\u87D2\\u96C0\\u541E\\u9F99\");\n          _this13.preChapterName = \"\\u7B2C\".concat(_this13.chapterId - 1, \"\\u7AE0 \\u87D2\\u96C0\\u541E\\u9F99\");\n          _this13.nextChapterName = \"\\u7B2C\".concat(_this13.chapterId + 1, \"\\u7AE0 \\u87D2\\u96C0\\u541E\\u9F99\");\n          _this13.text = _this13.chapterId + _this13.textFixed;\n          _this13.preText = _this13.chapterId - 1 + _this13.textFixed;\n          _this13.nextText = _this13.chapterId + 1 + _this13.textFixed;\n          resolve();\n        }, 1000);\n      });\n\n    },\n\n    /**\n       * 获取数据，包括阅读到第几章，以及前中后三章内容\n       **/\n    getText: function getText(chapterId, type) {var _this14 = this;\n      // 模拟网络时间\n      setTimeout(function () {\n        if (type === 'next') {\n          _this14.nextText = chapterId + _this14.textFixed;\n          _this14.nextChapterName = \"\\u7B2C\".concat(chapterId, \"\\u7AE0 \\u87D2\\u96C0\\u541E\\u9F99\");\n          _this14.$nextTick(function () {\n            _this14.calcNextPages();\n          });\n        } else\n        {\n          if (chapterId === 0) {\n            _this14.preText = '';\n            _this14.preChapterName = '';\n          } else\n          {\n            _this14.preText = chapterId + _this14.textFixed;\n            _this14.preChapterName = \"\\u7B2C\".concat(chapterId, \"\\u7AE0 \\u87D2\\u96C0\\u541E\\u9F99\");\n            _this14.$nextTick(function () {\n              _this14.calcPrePages();\n            });\n          }\n        }\n\n      }, 1000);\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcmVhZC9yZWFkLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0xBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxxQkFGQTtBQUdBLHdCQUhBO0FBSUEseUJBSkE7QUFLQSxpeitCQUxBO0FBTUEsY0FOQTtBQU9BLGtCQVBBO0FBUUEsaUJBUkE7QUFTQSxzQkFUQSxFQVNBOztBQUVBLDBCQVhBLEVBV0E7QUFDQSxlQVpBO0FBYUEsa0JBYkE7QUFjQSxtQkFkQTtBQWVBLHFCQWZBO0FBZ0JBLHNCQWhCQTtBQWlCQSxvQkFqQkE7QUFrQkEscUJBbEJBO0FBbUJBLGtCQW5CQSxFQW1CQTtBQUNBLHNCQXBCQSxFQW9CQTtBQUNBLHNCQXJCQSxFQXFCQTs7QUFFQSx3QkF2QkEsRUF1QkE7QUFDQSxtQkF4QkE7QUF5QkEsb0JBekJBO0FBMEJBLG9CQTFCQSxFQTBCQTtBQUNBLG9CQTNCQSxFQTJCQTtBQUNBLHNCQTVCQSxFQTRCQTtBQUNBLHFCQTdCQTtBQThCQSx1QkE5QkEsRUE4QkE7O0FBRUEsa0JBaENBO0FBaUNBLG9CQWpDQTtBQWtDQSxvQkFsQ0E7QUFtQ0EsaUNBbkNBOztBQXFDQSxpQkFyQ0EsQ0FxQ0E7QUFyQ0E7O0FBd0NBLEdBMUNBO0FBMkNBLFFBM0NBLG9CQTJDQTtBQUNBO0FBQ0EsR0E3Q0E7QUE4Q0EsU0E5Q0EscUJBOENBO0FBQ0E7QUFDQSxHQWhEQTtBQWlEQTtBQUNBLFlBREEsc0JBQ0E7QUFDQTtBQUNBLEtBSEEsRUFqREE7O0FBc0RBOztBQUVBOzs7QUFHQSxpQkFMQSwyQkFLQTs7QUFFQSw2QkFGQSxDQUVBLFdBRkEseUJBRUEsV0FGQSxDQUVBLFlBRkEseUJBRUEsWUFGQSxDQUVBLGVBRkEseUJBRUEsZUFGQSxDQUVBLFFBRkEseUJBRUEsUUFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVJBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFEQSxDQUNBO0FBQ0Esa0VBRkEsQ0FFQTtBQUNBO0FBQ0EsV0FQQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQSxLQXZEQTs7QUF5REE7OztBQUdBLFlBNURBLHNCQTREQTtBQUNBLGdFQURBO0FBRUEsa0NBRkE7QUFHQTtBQUNBO0FBQ0EsaUJBRkEsRUFIQTtBQU1BLEtBbEVBOztBQW9FQTs7O0FBR0EsYUF2RUEscUJBdUVBLElBdkVBLEVBdUVBLFFBdkVBLEVBdUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FSQSxFQVFBLElBUkE7QUFTQTtBQUNBO0FBQ0EsS0FwRkE7O0FBc0ZBOzs7QUFHQSxnQkF6RkEsMEJBeUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkEsRUFJQSxJQUpBO0FBS0EsS0FoR0E7O0FBa0dBOzs7QUFHQSxpQkFyR0EsMkJBcUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkEsRUFJQSxJQUpBO0FBS0EsS0E1R0E7OztBQStHQTs7O0FBR0EsWUFsSEEsb0JBa0hBLEtBbEhBLEVBa0hBLE1BbEhBLEVBa0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsNEJBRkE7QUFHQSx5QkFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQSxPQVZBO0FBV0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSw0QkFGQTtBQUdBLHlCQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTVJQTs7QUE4SUE7OztBQUdBLGNBakpBLHNCQWlKQSxDQWpKQSxFQWlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBckpBOztBQXVKQTs7O0FBR0EsWUExSkEsb0JBMEpBLENBMUpBLEVBMEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FQQTtBQVFBO0FBQ0E7QUFDQSxTQUZBO0FBR0E7QUFDQTtBQUNBLFNBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBeExBOztBQTBMQTs7O0FBR0EsYUE3TEEscUJBNkxBLENBN0xBLEVBNkxBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQURBO0FBRUEsNEJBRkE7O0FBSUEsYUFMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBLFdBVkE7QUFXQTtBQUNBO0FBQ0E7QUFDQSxTQWZBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSw0QkFGQTs7QUFJQSxhQUxBO0FBTUE7QUFDQTtBQUNBO0FBQ0EsV0FWQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQSxFQUZBO0FBR0E7QUFDQSxLQXJPQTs7QUF1T0E7OztBQUdBLFlBMU9BLHNCQTBPQTs7QUFFQTs7QUFFQTtBQUNBLEtBL09BOzs7QUFrUEE7OztBQUdBLFdBclBBLHFCQXFQQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEsd0JBRkE7O0FBSUEsU0FMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBLHNDQURBO0FBRUEsd0JBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLEVBRUEsd0JBRkE7QUFHQTtBQUNBLE9BbkJBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FyUkE7O0FBdVJBOzs7QUFHQSxZQTFSQSxzQkEwUkE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLHdCQUZBOztBQUlBLFNBTEE7QUFNQTtBQUNBO0FBQ0E7QUFDQSx1Q0FEQTtBQUVBLHdCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxFQUVBLHdCQUZBO0FBR0E7QUFDQSxPQW5CQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQTNUQTs7QUE2VEE7OztBQUdBLGVBaFVBLHlCQWdVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQW5WQTs7QUFxVkE7OztBQUdBLGNBeFZBLHdCQXdWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBNVdBOztBQThXQTs7O0FBR0EsWUFqWEEsb0JBaVhBLElBalhBLEVBaVhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFLQSxLQTNYQTs7QUE2WEE7OztBQUdBLFdBaFlBLHFCQWdZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQSxPQVBBO0FBUUE7QUFDQTtBQUNBLHVCQURBO0FBRUEsc0JBRkE7O0FBSUE7OztBQUdBLEtBalpBOztBQW1aQTs7O0FBR0EsYUF0WkEsdUJBc1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBLE9BUEE7QUFRQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSxzQkFGQTs7QUFJQTtBQUNBLEtBcmFBOztBQXVhQTs7O0FBR0Esb0JBMWFBLDRCQTBhQSxVQTFhQSxFQTBhQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBO0FBQ0EsS0F0YkE7O0FBd2JBOzs7QUFHQSxvQkEzYkEsNEJBMmJBLFVBM2JBLEVBMmJBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBbmNBOztBQXFjQTs7O0FBR0EsV0F4Y0EscUJBd2NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVZBLEVBVUEsSUFWQTtBQVdBLE9BYkE7O0FBZUEsS0F6ZEE7O0FBMmRBOzs7QUFHQSxXQTlkQSxtQkE4ZEEsU0E5ZEEsRUE4ZEEsSUE5ZEEsRUE4ZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkE7QUFHQSxTQU5BO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRkE7QUFHQTtBQUNBOztBQUVBLE9BdEJBLEVBc0JBLElBdEJBO0FBdUJBLEtBdmZBLEVBdERBLEUiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PCEtLSDms6jmhI/vvJrmnIDlpJoxMDDpobXvvIzlpJrkuobopoHmlLl6LWluZGV45pyA5aSn5YC8IC0tPlxyXG5cdDx2aWV3PlxyXG5cdFx0XHJcblx0XHQ8IS0tIOaTjeS9nOWxgiAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCIgQHRvdWNoc3RhcnQuc3RvcD1cInRvdWNoU3RhcnRcIiBAdG91Y2hlbmQuc3RvcD1cInRvdWNoRW5kXCIgQHRvdWNobW92ZS5zdG9wPVwidG91Y2hNb3ZlXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbSBsZWZ0XCIgQGNsaWNrLnN0b3A9XCJwcmVQYWdlXCI+PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0gbWlkXCIgQGNsaWNrLnN0b3A9XCJzaG93TWVudVwiPjwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtIHJpZ2h0XCIgQGNsaWNrLnN0b3A9XCJuZXh0UGFnZVwiPjwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PCEtLSDku4XnlKjkuo7orqHnrpcgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbnRhaW5lciBoaWRkZW5cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFwdGVyXCI+XHJcblx0XHRcdFx0e3tjaGFwdGVyTmFtZX19XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgaWQ9XCJjb250ZW50XCIgY2xhc3M9XCJjb250ZW50XCJcclxuXHRcdFx0XHQ6c3R5bGU9XCJ7aGVpZ2h0OmAke2NvbnRlbnRIZWlnaHR9cHhgLCB3aWR0aDogYCR7Y29udGVudFdpZHRofXB4YCxcclxuXHRcdFx0XHQgY29sdW1uczogYCR7Y29udGVudFdpZHRofXB4YCwgY29sdW1uR2FwOmAke2NvbHVtbkdhcH1weGB9XCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm9vay1pbm5lclwiIGlkPVwidGV4dFwiIHYtaHRtbD1cInRleHRcIlxyXG5cdFx0XHRcdFx0OnN0eWxlPVwie2ZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsIGxpbmVIZWlnaHQ6IGAke2xpbmVIZWlnaHQqZm9udFNpemV9cHhgfVwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJvdHRvbS1iYXJcIj5cclxuXHRcdFx0XHTmmL7npLrnlLXph4/jgIHpobXnoIFcclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbnRhaW5lciBoaWRkZW5cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFwdGVyXCI+XHJcblx0XHRcdFx0e3tjaGFwdGVyTmFtZX19XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgaWQ9XCJjb250ZW50XCIgY2xhc3M9XCJjb250ZW50XCJcclxuXHRcdFx0XHQ6c3R5bGU9XCJ7aGVpZ2h0OmAke2NvbnRlbnRIZWlnaHR9cHhgLCB3aWR0aDogYCR7Y29udGVudFdpZHRofXB4YCxcclxuXHRcdFx0XHQgY29sdW1uczogYCR7Y29udGVudFdpZHRofXB4YCwgY29sdW1uR2FwOmAke2NvbHVtbkdhcH1weGB9XCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm9vay1pbm5lclwiIGlkPVwicHJlVGV4dFwiIHYtaHRtbD1cInByZVRleHRcIlxyXG5cdFx0XHRcdFx0OnN0eWxlPVwie2ZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsIGxpbmVIZWlnaHQ6IGAke2xpbmVIZWlnaHQqZm9udFNpemV9cHhgfVwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJvdHRvbS1iYXJcIj5cclxuXHRcdFx0XHTmmL7npLrnlLXph4/jgIHpobXnoIFcclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbnRhaW5lciBoaWRkZW5cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFwdGVyXCI+XHJcblx0XHRcdFx0e3tjaGFwdGVyTmFtZX19XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgaWQ9XCJjb250ZW50XCIgY2xhc3M9XCJjb250ZW50XCJcclxuXHRcdFx0XHQ6c3R5bGU9XCJ7aGVpZ2h0OmAke2NvbnRlbnRIZWlnaHR9cHhgLCB3aWR0aDogYCR7Y29udGVudFdpZHRofXB4YCxcclxuXHRcdFx0XHQgY29sdW1uczogYCR7Y29udGVudFdpZHRofXB4YCwgY29sdW1uR2FwOmAke2NvbHVtbkdhcH1weGB9XCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm9vay1pbm5lclwiIGlkPVwibmV4dFRleHRcIiB2LWh0bWw9XCJuZXh0VGV4dFwiXHJcblx0XHRcdFx0XHQ6c3R5bGU9XCJ7Zm9udFNpemU6IGAke2ZvbnRTaXplfXB4YCwgbGluZUhlaWdodDogYCR7bGluZUhlaWdodCpmb250U2l6ZX1weGB9XCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tLWJhclwiPlxyXG5cdFx0XHRcdOaYvuekuueUtemHj+OAgemhteeggVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDwhLS0g6ZiF6K+76aG1IC0tPlxyXG5cdFx0XHJcblx0XHQ8IS0tIOS4iuS4gOeroCAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY29udGFpbmVyXCIgOmNsYXNzPVwie2NvbnRhaW5lcjA6IGJhY2tncm91bmQgPT09IDAsIGNvbnRhaW5lcjE6IGJhY2tncm91bmQgPT09IDF9XCJcclxuXHRcdFx0OnN0eWxlPVwie3pJbmRleDogMzAwLCB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7cHJlVHJhbnNsYXRlWH1weClgLCB0cmFuc2l0aW9uOiBgYWxsICR7c2hvd0FuaW1hdGlvbj90dXJuUGFnZVRpbWU6MH1zYH1cIlxyXG5cdFx0PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNoYXB0ZXJcIj5cclxuXHRcdFx0XHR7e3ByZUNoYXB0ZXJOYW1lfX1cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIlxyXG5cdFx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6YCR7Y29udGVudEhlaWdodH1weGAsIHdpZHRoOiBgJHtjb250ZW50V2lkdGh9cHhgLFxyXG5cdFx0XHRcdGZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsY29sb3I6IGAke2NvbG9yTGlzdFtiYWNrZ3JvdW5kXX1gLFxyXG5cdFx0XHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7KHByZVBhZ2VzLmxlbmd0aC0xKSooY29udGVudFdpZHRoK2NvbHVtbkdhcCl9cHgpYCxcclxuXHRcdFx0XHRjb2x1bW5zOiBgJHtjb250ZW50V2lkdGh9cHhgLCBjb2x1bW5HYXA6YCR7Y29sdW1uR2FwfXB4YH1cIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJib29rLWlubmVyXCIgdi1odG1sPVwidGV4dFwiXHJcblx0XHRcdFx0XHQ6c3R5bGU9XCJ7Zm9udFNpemU6IGAke2ZvbnRTaXplfXB4YCwgbGluZUhlaWdodDogYCR7bGluZUhlaWdodCpmb250U2l6ZX1weGB9XCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tLWJhclwiPlxyXG5cdFx0XHRcdHt7cHJlUGFnZXMubGVuZ3RofX0ve3twcmVQYWdlcy5sZW5ndGh9fVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDwhLS0g5pys56ugIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjb250YWluZXJcIiA6Y2xhc3M9XCJ7Y29udGFpbmVyMDogYmFja2dyb3VuZCA9PT0gMCwgY29udGFpbmVyMTogYmFja2dyb3VuZCA9PT0gMX1cIlxyXG5cdFx0XHR2LWZvcj1cIml0ZW0gb2YgcGFnZXNcIiA6a2V5PVwiaXRlbS5pZFwiIFxyXG5cdFx0XHQ6c3R5bGU9XCJ7ekluZGV4OiBpdGVtLnpJbmRleCwgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke2l0ZW0udHJhbnNsYXRlWH1weClgLCB0cmFuc2l0aW9uOiBgYWxsICR7c2hvd0FuaW1hdGlvbj90dXJuUGFnZVRpbWU6MH1zYH1cIlxyXG5cdFx0PlxyXG5cdFx0PCEtLSB2LWlmPVwiaXRlbS5pZCAtIGN1cnJlbnRQYWdlIDwgMiAmJiBpdGVtLmlkIC0gY3VycmVudFBhZ2UgPiAtMlwiIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNoYXB0ZXJcIj5cclxuXHRcdFx0XHR7e2NoYXB0ZXJOYW1lfX1cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIlxyXG5cdFx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6YCR7Y29udGVudEhlaWdodH1weGAsIHdpZHRoOiBgJHtjb250ZW50V2lkdGh9cHhgLFxyXG5cdFx0XHRcdGZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsY29sb3I6IGAke2NvbG9yTGlzdFtiYWNrZ3JvdW5kXX1gLFxyXG5cdFx0XHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7aXRlbS5pZCooY29udGVudFdpZHRoK2NvbHVtbkdhcCl9cHgpYCxcclxuXHRcdFx0XHRjb2x1bW5zOiBgJHtjb250ZW50V2lkdGh9cHhgLCBjb2x1bW5HYXA6YCR7Y29sdW1uR2FwfXB4YH1cIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJib29rLWlubmVyXCIgdi1odG1sPVwidGV4dFwiXHJcblx0XHRcdFx0XHQ6c3R5bGU9XCJ7Zm9udFNpemU6IGAke2ZvbnRTaXplfXB4YCwgbGluZUhlaWdodDogYCR7bGluZUhlaWdodCpmb250U2l6ZX1weGB9XCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tLWJhclwiPlxyXG5cdFx0XHRcdHt7aXRlbS5pZCArIDEgfX0ve3twYWdlcy5sZW5ndGh9fVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDwhLS0g5LiL5LiA56ugIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjb250YWluZXJcIiA6Y2xhc3M9XCJ7Y29udGFpbmVyMDogYmFja2dyb3VuZCA9PT0gMCwgY29udGFpbmVyMTogYmFja2dyb3VuZCA9PT0gMX1cIlxyXG5cdFx0XHQ6c3R5bGU9XCJ7ekluZGV4OiAxMDAsIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMHB4KWB9XCJcclxuXHRcdFx0di1pZj1cInBhZ2VzLmxlbmd0aFwiXHJcblx0XHQ+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhcHRlclwiPlxyXG5cdFx0XHRcdHt7bmV4dENoYXB0ZXJOYW1lfX1cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIlxyXG5cdFx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6YCR7Y29udGVudEhlaWdodH1weGAsIHdpZHRoOiBgJHtjb250ZW50V2lkdGh9cHhgLFxyXG5cdFx0XHRcdGZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsY29sb3I6IGAke2NvbG9yTGlzdFtiYWNrZ3JvdW5kXX1gLFxyXG5cdFx0XHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMHB4KWAsXHJcblx0XHRcdFx0Y29sdW1uczogYCR7Y29udGVudFdpZHRofXB4YCwgY29sdW1uR2FwOmAke2NvbHVtbkdhcH1weGB9XCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm9vay1pbm5lclwiIHYtaHRtbD1cIm5leHRUZXh0XCJcclxuXHRcdFx0XHRcdDpzdHlsZT1cIntmb250U2l6ZTogYCR7Zm9udFNpemV9cHhgLCBsaW5lSGVpZ2h0OiBgJHtsaW5lSGVpZ2h0KmZvbnRTaXplfXB4YH1cIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJib3R0b20tYmFyXCI+XHJcblx0XHRcdFx0MS97e25leHRQYWdlcy5sZW5ndGh9fVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDwhLS0g6I+c5Y2V5bGCIC0tPlxyXG5cdFx0XHRcclxuXHRcdDx2aWV3IGNsYXNzPVwidG9wXCIgOnN0eWxlPVwie2hlaWdodDogYCR7c3RhdHVzQmFySGVpZ2h0ICsgMzB9cHhgLCB0b3A6IG1lbnVTaG93ID8gMCA6IGAtJHtzdGF0dXNCYXJIZWlnaHQgKyAzMH1weGB9XCI+XHJcblx0XHRcdDx2aWV3IDpzdHlsZT1cIntoZWlnaHQ6IGAke3N0YXR1c0JhckhlaWdodH1weGB9XCI+PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRcIj5cclxuXHRcdFx0XHR7e2NoYXB0ZXJOYW1lfX1cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJib3R0b21cIiA6c3R5bGU9XCJ7Ym90dG9tOiBtZW51U2hvdyA/IDAgOiBgLTMwMHB4YH1cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLW5hbWVcIj7lrZflj7c8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uXCIgQGNsaWNrLnN0b3A9XCJiaWdTaXplXCI+QSs8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uXCIgQGNsaWNrLnN0b3A9XCJzbWFsbFNpemVcIj5BLTwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tbmFtZVwiPuaOkueJiDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInR5cGUtc2V0dGluZ1wiIDpjbGFzcz1cInthY3RpdmU6IGxpbmVIZWlnaHQgPT09IDF9XCIgQGNsaWNrLnN0b3A9XCJjaGFuZ2VMaW5lSGVpZ2h0KDEpXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBsaW5lSGVpZ2h0ID09PSAxfVwiIHYtZm9yPVwiaSBpbiA1XCIgOmtleT1cImlcIj48L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidHlwZS1zZXR0aW5nXCIgOmNsYXNzPVwie2FjdGl2ZTogbGluZUhlaWdodCA9PT0gMS41fVwiIEBjbGljay5zdG9wPVwiY2hhbmdlTGluZUhlaWdodCgxLjUpXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBsaW5lSGVpZ2h0ID09PSAxLjV9XCIgdi1mb3I9XCJpIGluIDRcIiA6a2V5PVwiaVwiPjwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0eXBlLXNldHRpbmdcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBsaW5lSGVpZ2h0ID09PSAyfVwiIEBjbGljay5zdG9wPVwiY2hhbmdlTGluZUhlaWdodCgyKVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCIgOmNsYXNzPVwie2FjdGl2ZTogbGluZUhlaWdodCA9PT0gMn1cIiB2LWZvcj1cImkgaW4gM1wiIDprZXk9XCJpXCI+PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tbmFtZVwiPuiDjOaZrzwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25cIiBzdHlsZT1cImJhY2tncm91bmQ6IHVybCguLi8uLi9zdGF0aWMvYmFja2dyb3VuZDEuanBnKTtcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBiYWNrZ3JvdW5kID09PSAwfVwiIEBjbGljay5zdG9wPVwiY2hhbmdlQmFja2dyb3VuZCgwKVwiPjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICMwMDA7XCIgOmNsYXNzPVwie2FjdGl2ZTogYmFja2dyb3VuZCA9PT0gMX1cIiBAY2xpY2suc3RvcD1cImNoYW5nZUJhY2tncm91bmQoMSlcIj48L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFx0XHJcblx0XHRcclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Y2hhcHRlcklkOiAnJyxcclxuXHRcdFx0XHRjaGFwdGVyTmFtZTogJycsXHJcblx0XHRcdFx0cHJlQ2hhcHRlck5hbWU6ICcnLFxyXG5cdFx0XHRcdG5leHRDaGFwdGVyTmFtZTogJycsXHJcblx0XHRcdFx0dGV4dEZpeGVkOmA8cD7nga/ngavpgJrmmI7nmoTlhoXmrr/kuYvkuK3vvIzph5HnoqfovonnhYzvvIzmsJTlir/lqIHkuKXvvIzmrr/lhoXmnInnnYDplb/mmI7nga/nh4Png6fvvIzlhbbkuK3nh4Png6fnnYDkuIDpopfpnZLnn7PvvIzoooXoooXnmoTpnZLng5/ljYfohb7ogIzotbfvvIznm5jnu5XlnKjmrr/lhoXjgII8L3A+PHA+6YKj5piv6Z2S5qqA55+z77yM54eD54On6LW35p2l5Lya6YeK5pS+5Ye65byC6aaZ77yM5pyJ552A5Yed56We6Z2Z5b+D5LmL5pWI77yM5LmD5piv5L+u54K85pe25b+F5aSH5LmL54mp77yM5LiN6L+H5q2k54mp5Lu35qC85LiN5L2O77yM6IO95aSf5b2T5YGa54eD5paZ6Iis5p2l5L2/55So77yM6Laz5Lul6K+05piO5q2k5Zyw5Li75Lq66aKH5pyJ5Zyw5L2N44CCIDwvcD48cD7lhoXmrr/kuK3vvIzkuIDlkI3ouqvnnYDmmI7pu4Tooo3mnI3nmoTkuK3lubTnlLflrZDotJ/miYvogIznq4vvvIzku5bpnaLlrrnlnZrmr4XvvIznnLznm67kuYvpl7TmnInnnYDlqIHkuKXkuYvmsJTvvIzmmL7nhLbkuYXlsYXpq5jkvY3vvIzogIzlhbbouqvlkI7vvIzpmpDmnInmsJTmga/ljYfohb7vvIzkvLzngo7kvLzpm7fvvIzlj5Hlh7rkvY7msonovbDpuKPkuYvlo7DjgIIgPC9wPjxwPuWPquaYr+iLpeaYr+eci+WQkeWFtuWPs+iHgu+8jOWNtOaYr+WPkeeOsOepuuepuuiNoeiNoe+8jOern+aYr+S4gOWPquaWreiHguOAgiA8L3A+PHA+5Zyo5LuW55qE6Lqr5peB77yM6L+Y5pyJ552A5LiA5L2N5a6r6KOF576O5aaH77yM5aW55aiH6Lqv57qk57uG77yM5a656LKM6ZuN5a656ICM576O5Li977yM5LiN6L+H5YW26IS46aKK77yM5Y205piv5pi+5b6X5YiG5aSW55qE6IuN55m95LiO6Jma5byx44CCIDwvcD48cD7ogIzmraTml7bnmoTov5nlr7nmmL7nhLblnLDkvY3kuI3kvY7nmoTnlLflpbPvvIzpg73mmK/pnaLluKbnnYDkuIDkuJ3ntKflvKDkuYvoibLnmoTmnJvnnYDliY3mlrnvvIzlj6rop4HlvpflnKjpgqPph4znmoTluormprvkuIrvvIzmnInnnYDkuIDlkI3nuqbojqvljYHkuInlm5vlsoHnmoTlsJHlubTnm5jlnZDvvIzlsJHlubTouqvouq/nlaXmmL7ljZXoloTvvIzlj4znm67ntKfpl63vvIzpgqPlvKDlsZ7kuo7lsJHlubTkurrmnKzlupTor6XmnJ3msJTok6zli4PnmoTohLjlup7vvIzljbTmmK/okKbnu5XnnYDkuIDogqHooYDmsJTjgIIgPC9wPjxwPumCo+iCoeivoeW8gueahOihgOawlO+8jOWcqOS7lueahOearuiCpOS4i+eqnOWKqO+8jOmakOmakOmXtO+8jOS7v+S9m+acieedgOaAqOavkueahOm+meWVuOWjsOS8oOWHuuOAgiA8L3A+PHA+6ICM5Ly06ZqP552A6YKj6YGT6b6Z5ZW477yM5bCR5bm06aKd5aS05LiK6Z2S562L6IC45Yqo77yM6Lqr5L2T5LiN5pat55qE6aKk5oqW552A77yM6Z2i5bqe5Y+Y5b6X54uw54ue77yM5Ly85LmO5piv5om/5Y+X5LqG6Zq+5LqO6KiA6K+t55qE55eb6Ium44CCIDwvcD48cD7lnKjlsJHlubTnmoTouqvkvqfvvIzkuIDlkI3nmb3lj5HogIHogIXmiYvmjIHkuIDpnaLpk5zplZzvvIzpk5zplZzkuYvkuIrvvIzmnInnnYDmn5TlkoznmoTlhYnoipLmlaPlj5Hlh7rmnaXvvIznhafogIDlnKjlsJHlubTouqvkvZPkuIrvvIzogIzlnKjpgqPlhYnoipLnmoTnhafogIDkuIvvvIzlsJHlubTpnaLlup7kuIrnmoTor6HlvILooYDmsJTliJnmmK/lvIDlp4vmuJDmuJDnmoTlubPlpI3jgIIgPC9wPjxwPuihgOawlOWcqOaMgee7reS6huS4gOeCt+mmmeaXtumXtOWQju+8jOe7iOaYr+WwveaVsOeahOmAgOWOu++8jOacgOWQjue8qeWbnuS6huWwkeW5tOeahOaOjOW/g+S5i+S4reOAgiA8L3A+PHA+55m95Y+R6ICB6ICF6KeB5Yiw6L+Z5LiA5bmV77yM6aG/5pe25aaC6YeK6YeN6LSf55qE5p2+5LqG5LiA5Y+j5rCU77yM54S25ZCO6L2s6L+H6Lqr5p2l77yM5a+5552A5LiA5peB57Sn5byg562J5b6F55qE5Lit5bm055S35a2Q5Lul5Y+K5a6r6KOF576O5aaH5byv6Lqr6YGT77ya4oCc5oGt5Zac546L5LiK77yM546L5ZCO77yM6L+Z5LiJ5bm05LiA6YGT55qE5aSn5Z2O77yM5q6/5LiL5oC7566X5piv54as5LqG6L+H5p2l77yM5o6l5LiL5p2l55qE5LiJ5bm077yM5bqU5b2T6YO95peg5aSn56KN44CC4oCdIDwvcD48cD7kuK3lubTnlLflrZDkuI7lrqvoo4Xnvo7lpofpl7voqIDvvIznmobmmK/pnaLpnLLllpzoibLvvIzntKfmj6HnmoTmi7PlpLTpg73mmK/muJDmuJDnmoTmnb7lvIDjgIIgPC9wPjxwPuKAnOenpuW4iO+8jOWmguS7iuWFg+WEv+W3suaYr+WNgeS4ie+8jOS4gOiIrOi/meS4quW5tOm+hOeahOWwkeW5tO+8jOmDveW3suWFq+iEieaIkOW9ou+8jOWPr+S7peW8gOWni+S/rueCvOS6hu+8jOmCo+WFg+WEv++8n+KAnei6q+edgOaYjum7hOiijeacjeeahOWogeS4peeUt+WtkO+8jOacn+W+heeahOacm+edgOecvOWJjeeahOeZveWPkeiAgeiAhe+8jOmXrumBk+OAgiA8L3A+PHA+5ZCs5Yiw5q2k6Zeu77yM55m95Y+R6ICB6ICF56We6Imy6aG/5pe26buv5reh5LqG5LiA5Lqb77yM5LuW5b6u5b6u5pGH5aS077yM6YGT77ya4oCc546L5LiK77yM6L+Z5LiA5qyh6ICB5aSr5L6d54S25rKh5pyJ5o6i5rWL5Yiw5q6/5LiL5L2T5YaF5YWr6ISJLi4u4oCdIDwvcD48cD7lqIHkuKXnlLflrZDpl7voqIDvvIznnLznpZ7lkIzmoLfmmK/pu6/mt6HkuobkuIvmnaXjgIIgPC9wPjxwPuWcqOi/meWkqeWcsOmXtO+8jOS/ruihjOS5i+mBk++8jOWni+S6juS6uuS9k++8jOS6uuS9k+WGheaLpeacieedgOaXoOaVsOe7j+iEie+8jOiAjOWFtuS4reacgOS4uumHjeimgeeahO+8jOS+v+aYr+WFq+Wkp+iEie+8jOiAjOmZpOS6huafkOS6m+eJueauiueahOaDheWGte+8jOS4gOiIrOeahOS6uu+8jOS9k+WGheeahOWFq+iEieimgeWcqOWNgeS6jOS4ieWygeW3puWPs+aXtu+8jOaWueaJjeS8mua4kOa4kOeahOaIkOW9ou+8jOiAjOi/meS4quaXtuWAme+8jOWwsemcgOimgeWwhui/meWFq+iEieaJvuWHuuadpe+8jOWPquacieaJvuWIsOS6hui/meWFq+iEie+8jOaJjeiDveWkn+W8gOWni+S/rueCvO+8jOWQnue6s+WkqeWcsOa6kOWKm++8jOaJk+mAmuWFq+iEieOAgiA8L3A+PHA+6L+Z5bCx5piv5byA6ISJ5aKD77yM5LiA5YiH5L+u54K85LmL5aeL44CCIDwvcD48cD7ogIzkv67ngrzogIXlm6DlkJ7lkJDlpKnlnLDmnKzmupDkuYvlipvvvIzonJXlj5joh6rouqvvvIzmlYXogIzkuZ/ooqvnp7DkuLrmupDluIjjgIIgPC9wPjxwPuenpuW4iOeep+W+l+S4reW5tOeUt+WtkOmdouW6nuS4iueahOm7r+a3oe+8jOS5n+aYr+acieS6m+S4jeW/je+8jOi9u+WPueS4gOWjsO+8jOmBk++8muKAnOauv+S4i+acrOaYr+Wco+m+meS5i+WRve+8jOW9k+aDiuiJs+S6juS4lu+8jOWCsuinhuiLjeepue+8jOaAjuaWmeWIsOWNtOmBreatpOWKq+mavi4uLuKAnSA8L3A+PHA+5Lit5bm055S35a2Q5Y+M5o6M57Sn5o+h77yM5LiA5peB55qE5a6r6KOF576O5aaH5Lmf5piv55y855y257qi5ram77yM54S25ZCO5o2C552A5Zi05Ymn54OI55qE5ZKz5Ze95LqG5Lik5aOw44CCIDwvcD48cD7igJznjovlkI7kv53ph43ouqvkvZPvvIzmgqjlhYjliY3mjZ/lpLHlpKfph4/nsr7ooYDku6Xmu4vlhbvmrr/kuIvvvIzkuI3lj6/lv4Pnu6rmv4DojaHjgILigJ3np6bluIjop4HnirbvvIzov57lv5nlh7rlo7DpgZPjgII8L3A+IDxwPuWuq+ijhee+juWmh+WNtOaYr+aRhuS6huaRhuaJi++8jOecvOmcsuWTgOiJsueahOacm+edgOmCo+ebmOWdkOWcqOW6iuamu+S4iueahOWwkeW5tO+8jOmBk++8muKAnOWFg+WEv+S9k+WGheS5i+avku+8jOS4ieW5tOeIhuWPkeS4gOasoe+8jOS4gOasoeavlOS4gOasoeWOieWus++8jOaDs+imgeaguemZpO+8jOWUr+acieS+nemdoOS7luiHquW3se+8jOWPr+WmguS7iuS7luWFq+iEieS4jeaYvu+8jOS4ieW5tOS5i+WQju+8jOWPiOivpeWmguS9le+8n+KAnTwvcD48cD7np6bluIjmsonpu5jkuobkuIDkvJrvvIznvJPnvJPnmoTpgZPvvJrigJzkuInlubTkuYvlkI7vvIzlpJblipvljovliLblsIbkvJrlpLHmlYjvvIzoi6Xov5jmmK/lpoLmraTvvIzmgZDmgJXmrr/kuIvvvIzmgKflkb3loKrlv6fjgILigJ0gPC9wPjxwPuatpOiogOS4gOWHuu+8jOauv+WGhemhv+aXtuS4gOeJh+ayiem7mO+8jOS4reW5tOeUt+WtkOWPjOaOjOe0p+aPoe+8jOi6q+i6r+W+ruW+rumipOaKlu+8jOiAjOWuq+ijhee+juWmh++8jOabtOaYr+aNguedgOWYtOWPkeWHuuS9juS9jueahOazo+WjsOOAgiA8L3A+PHA+4oCc6L+Z5LmI6K+0Li4u5oiR55qE5a+/5ZG95Y+q5Ymp5LiL5LiJ5bm05LqG77yf4oCd5rKJ6buY5LmL5Lit77yM5b+95pyJ5LiA6YGT55Wl5pi+56ia5aup77yM5L2G5Y205bmz6Z2Z55qE5aOw6Z+z77yM56qB54S255qE5ZON6LW344CCIDwvcD48cD7lpKfmrr/kuInkurrpl7voqIDvvIzpg73mmK/kuIDmg4rvvIzov57lv5nmiqzlpLTvvIzlj6rop4HlvpfluormprvkuIrnmoTlsJHlubTkuI3nn6XkvZXml7bnnYHlvIDkuobnnLznnZvvvIzmraPmnJvnnYDku5bku6zjgIIgPC9wPjxwPuS4ieS6uumdoumdouebuOinkeS4gOecvO+8jOaYvueEtumDveayoeaDs+WIsOWwkeW5tOiLj+mGkuW+l+WmguatpOS5i+W/q++8jOimgeefpemBk+S7peWJje+8jOS7luWPr+aYr+imgeaYj+edoeS4pOS4ieWkqeaJjeiDvee8k+i/h+adpeOAgiA8L3A+PHA+4oCc5YWD5YS/Li4u4oCdIDwvcD48cD7ooqvnp7DkuLrlhYPlhL/nmoTlsJHlubTvvIzlkI3kuLrlkajlhYPvvIzogIznnLzliY3nmoTkuK3lubTnlLflrZDkuI7nvo7lpofvvIzkvr/mmK/ov5nlpKflkajnjovmnJ3nmoTnjovkuIrkuI7njovlkI7vvIzlkajmk47vvIznp6bnjonjgIIgPC9wPjxwPuWRqOWFg+aKv+S6huaKv+WYtO+8jOeomuWrqeeahOiEuOW6nuaYvuW+l+acieS6m+iLjeeZve+8jOaIluiuuOaYr+WboOS4uuS7juWwj+i6q+WtkOWNleiWhO+8jOS7luWPquiDveWkmuivu+S5pueahOe8mOaVhe+8jOeci+S4iuWOu+acieS6m+S5puWNt+awlO+8jOS7luayiem7mOS6hueJh+WIu++8jOe8k+e8k+eahOS8uOWHuuaJi+aOjOOAgiA8L3A+PHA+5Y+q6KeB5b6X5Zyo5YW25o6M5b+D5aSE77yM56uf5piv5pyJ552A5LiA5Zui5pqX5rKJ55qE6KGA6Imy77yM6YKj6YGT6KGA6Imy54q55aaC5piv54OZ5Y2w5Yiw5LqG6KGA6IKJ5pyA5rex5aSE77yM5a6D5oWi5oWi55qE6KCV5Yqo552A77yM55yL5LiK5Y675Lu/5L2b5LiA5p2h5byg54mZ6Iie54iq55qE6KGA6b6Z5LiA6Iis77yM6ZqQ6ZqQ55qE77yM5Ly85LmO5pyJ552A5rWT5rWT55qE5oCo5oaO5LmL5rCU77yM6Ieq6YKj5YW25Lit5pWj5Y+R5Ye65p2l77yM5Luk5Lq65LiN5a+S6ICM5qCX44CCIDwvcD48cD7igJzniLbnjovvvIzmr43lkI4uLi7ov5nkuIDmrKHvvIzkvaDku6zmgLvor6XlkYror4nmiJHvvIzlnKjmiJHouqvkuIrvvIznqbbnq5/lj5HnlJ/kuobku4DkuYjlkKfvvJ/igJ0gPC9wPjxwPuWRqOWFg+ebr+edgOaOjOW/g+S4rei/meeKueWmguS4gOadoeWwj+Wwj+ihgOm+meiIrOeahOS4nOilv++8jOeJmem9v+W/jeS4jeS9j+eahOe0p+WSrOi1t+adpe+8jOWwseaYr+i/meS4quS4nOilv++8jOiuqeS7luS9k+S8muWIsOS6huS7gOS5iOWPq+WBmueUn+S4jeWmguatu+iIrOeahOeXm+iLpuOAgiA8L3A+PHA+5q+P6L+H5LiJ5bm077yM6L+Z5Liq5Lic6KW/5bCx5byA5aeL5L2c5oCq77yM54q55aaC5piv6KaB5bCG5LuW5rWR6Lqr55qE6KGA6IKJ5LiA5a+45a+455qE57uZ5ZCe5Zms5LqG5LiA6Iis77yM5bim5p2l5peg6L6555qE55eb6Ium44CCIDwvcD48cD7lkKzliLDlkajlhYPnmoTor53vvIzlkajmk47kuI7np6bnjonpnaLoibLpg73mmK/lj5jlvpfmsqHmnInkuoblpJrlsJHooYDoibLvvIznibnliKvmmK/liY3ogIXvvIzmi7PlpLTntKfmj6HvvIzohLjlup7kuIrmta7njrDnnYDmtZPmtZPnmoTmgpTmgajkuI7oh6rotKPkuYvoibLjgIIgPC9wPjxwPuayiem7mOaMgee7reS6huWNiuaZjO+8jOepuuawlOmDveacieS6m+WHneWbuu+8jOWRqOaTjue7iOS6juaYr+a3sea3seWQuOS6huS4gOWPo+awlO+8jOWjsOmfs+WYtuWTkeeahOmBk++8muKAnOi/meaYr++8jOaAqOm+meavkuOAguKAnSA8L3A+PHA+4oCc5oCo6b6Z5q+S77yf4oCd5ZGo5YWD55yJ5aS057Sn55qx77yM5LiN5piO5omA5Lul44CCIDwvcD48cD7lkajmk47miYvmjozmnInkupvpoqTmipbnmoTmkbjnnYDlkajlhYPnmoTohJHooovvvIzpgZPvvJrigJzov5nkupvkuovvvIzlpoLku4rkvaDkuZ/lupTor6Xnn6XpgZPkuobvvIzlhYPlhL/vvIzkvaDnn6XpgZPlkJfvvIzkvaDmmK/miJHlkajlrrblnKPpvpnvvIHigJ0gPC9wPjxwPuWRqOWFg+W/jeS4jeS9j+eahOiLpueskeS4gOWjsO+8jOaciei/meS5iOaDqOeahOWco+m+meWQl++8n+i/nuS9k+WGheWFq+iEiemDveaJvuS4jeWIsOOAgiA8L3A+PHA+5ZGo5pOO5Z2Q5Zyo5ZGo5YWD6Lqr5peB77yM5aOw6Z+z5L2O5rKJ55qE6YGT77ya4oCc5YWD5YS/77yM5aaC5LuK5oiR5Lus5aSn5ZGo546L5pyd77yM5Zyo6L+Z5peg5bC955qE6IuN6Iyr5aSn6ZmG5LiK77yM5oiW6K645Y+q6IO9566X5YGa5YGP6ZqF5bCP5Zu977yM5L2G5L2g5Y205piv5LiN55+l77yM5Y2B5LqU5bm05YmN77yM5oiR5Lus5aSn5ZGo77yM5Y205piv5beN5bOo5aSn5Zu977yM6K+45Zu95p2l5pyd77yM5aiB6ZyH5Zub5pa544CC4oCdIDwvcD48cD7lkajlhYPlsI/ohLjkuIrmta7njrDkuIDkupvmg4rorrbkuYvoibLvvIzov5noi43ojKvlpKfpmYbkuIrvvIznjovmnJ3luJ3lm73kvJflpJrvvIzogIzku5bku6zlpKflkajnjovmnJ3lnKjlhbbkuK3lubbkuI3nrpflpKrov4fnmoTotbfnnLzvvIzmsqHmg7PliLDku6XlvoDov5jmnInlpoLmraTlnLDkvY3vvJ8gPC9wPjxwPuKAnOS9oOWPr+efpemCo+Wkp+atpueOi+acne+8n+KAneWRqOaTjuWcqOivtOi1t+i/meS4quWQjeWtl+eahOaXtuWAme+8jOS4gOWtl+S4gOmhv++8jOS7v+S9m+aYr+WIu+mqqOmTreW/g+OAgiA8L3A+PHA+4oCc5aSn5q2m546L5pyd77yf4oCd5ZGo5YWD54K55LqG54K55aS077yM5aSn5q2m546L5pyd77yM5LmD5piv6L+Z6IuN6Iyr5aSn6ZmG5Lit6aG25bCW57qn5Yir55qE546L5pyd77yM5Zu96L+Q6byO55ub77yM5rqQ5biI5peg5pWw77yM5q+U6LW35LuW5Lus5aSn5ZGo77yM5Y+v6LCT5piv5beo5Lq65LiO55+u5a2Q44CCIDwvcD48cD7lkajmk47nmoTnnLznnZvvvIzljbTmmK/lnKjmraTml7bkuIDngrnngrnnmoTpgJrnuqLotbfmnaXvvIznnLzkuK3mtYHpnLLlh7rmt7Hmt7HnmoTku4fmgajvvJrigJzpgqPkvaDlj6/lj4jnn6XpgZPvvIzlnKjljYHkupTlubTliY3vvIzlpoLku4rnmoTlpKfmrabnmoflrqTvvIzljbTlj6rmmK/miJHku6zlpKflkajnjovmnJ3nmoToh6PlsZ7vvJ/igJ0gPC9wPjxwPuWRqOWFg+eahOecvOS4ree7iOS6juaYr+WHuueOsOS6huS4gOS4nemch+aDiuS5i+iJsu+8jOWmguS7iumCo+Wkp+atpueah+WupO+8jOern+eEtuabvue7j+aYr+S7luS7rOWkp+WRqOeahOiHo+Wxnu+8n+S7luS7rOWkp+WRqOWNgeS6lOW5tOWJje+8jOern+eEtuaYr+WmguatpOeahOW8uuWkp++8nyA8L3A+PHA+4oCc6YKjLi4u6YKj5Li65LuA5LmI5Lya5Y+Y5oiQ6L+Z5qC377yf4oCd5ZGo5YWD5b+N5LiN5L2P55qE6Zeu6YGT44CCIDwvcD48cD7igJzlnKjmiJHlpKflkajmiJDnq4vnmoTmlbDnmb7lubTpl7TvvIzmrablrrbkuIDnm7Tot5/pmo/miJHku6zlkajlrrblm5vmlrnlvoHmiJjvvIzlv6Dlv4PogL/ogL/vvIzlkI7mnaXmiJHku6zlpKflkajnq4vlm73vvIzlv7Xlhbblip/lirPvvIzmm7TmmK/lsIHmrablrrbkuLrkuJbooq3mrabnjovvvIzkuqvlj5fml6DovrnmnYPliKnvvIzogIzmrablrrbkuZ/lnKjnmb7lubTpl7TvvIzlrojmiqTlpKflkajovrnlooPvvIzpnIfmhZHlm5vmlrnjgILigJ0gPC9wPjxwPuWRqOaTjui6q+S9k+W+ruW+rumipOaKlu+8jOecvOS4reeahOihgOS4neWcqOatpOaXtuaUgOeIrOWHuuadpe+8muKAnOeEtuiAjO+8jOiwgemDveayoeaDs+WIsO+8jOWNgeS6lOW5tOWJje+8jOatpuWutuW/veeEtuWPkeWKqOWPm+S5se+8jOWIsOW+l+atpOaXtu+8jOaIkeS7rOWRqOawj+eah+aXj+aWueaJjeWPkeeOsO+8jOe7j+i/h+i/meS6m+W5tOeahOmfrOWFieWFu+aZpu+8jOmCo+atpuWutuW3sue7j+aLpeacieS6huaegeS4uuW8uuWkp+eahOWKm+mHj++8jOiAjOS4lOeOi+acneWGheeahOivuOWkmuWwgeeOi++8jOmDveaYr+iiq+WFtuaJgOaLieaLouOAguKAnSA8L3A+PHA+4oCc55+t55+t5LiN5Yiw5LiA5bm077yM5oiR5Lus5ZGo5rCP5rqD6LSl77yM5LiA6Lev5Y2X6YCD77yM6YCD5ZCR5oiR5Lus5ZGo5rCP5Y+R6L+555qE56WW5Zyw77yM5Lmf5bCx5piv5aaC5LuK5oiR5Lus5aSn5ZGo55qE6L+Z54mH5Zyw5Z+f44CC4oCdIDwvcD48cD7igJzmiJHkuI3nn6XpgZPmrablrrbkuLrkvZXkvJrlj5vlj5jvvIzku5bku6zlnKjmiJHku6zlpKflkajkuqvmnInnmoTlnLDkvY3vvIzkuJ3mr6vkuI3lvLHkuo7nmofml48uLi7igJ0gPC9wPjxwPuKAnOebtOWIsOWQjuadpe+8jOWvhuaOouS7juatpuWutuW+l+WIsOS6huS4gOS6m+aDheaKpe+8jOmCo+aYr+S4gOWPpea1geS8oOWcqOatpuWutuWGhemDqOaVsOeZvuW5tOeahOmihOiogC4uLuKAnSA8L3A+PHA+4oCc6aKE6KiA77yf4oCd5ZGo5YWD5b6u5oCU44CCIDwvcD48cD7lkajmk47lkqznnYDniZnpvb/vvIzkuIDlrZflrZfnmoTpgZPvvJrigJzon5Lpm4DlkJ7pvpnvvIzlpKfmrablvZPlhbTvvIHigJ0gPC9wPjxwPuKAnOifkumbgOWQnum+me+8jOWkp+atpuW9k+WFtO+8n+KAneWRqOWFg+i9u+i9u+eahOW/teS6huS4gOasoe+8jOWNtOaYr+S4jeaYjuWFtuaEj++8jOmBk++8muKAnOi/meaYr+S7gOS5iOaEj+aAne+8n+KAnSA8L3A+PHA+5ZGo5pOO55qE55y8552b5Zyo5q2k5pe25Y+Y5b6X6LWk57qi6LW35p2l77yM5LuW55uv552A5ZGo5YWD77yM55y856We5peg5q+U55qE5ZOA55eb77ya4oCc5b2T5Yid5oiR5Lmf5LiN55+l6YGT6L+Z56m256uf5piv5LuA5LmI5oSP5oCd77yM55u05Yiw6YKj5LiA5aSpLi4u4oCdIDwvcD48cD7igJzmiJHku6zlpKflkajmuoPotKXvvIzmiJHnjofpoobnnYDlpKflkajmrovpg6jvvIzkuI3mlq3mkqTpgIDvvIzmrablrrbntKfov73kuI3oiI3vvIznm7TliLDov73lh7vliLDmiJHku6zohJrkuIvov5nluqflpKflkajln47vvIzkvYbmrablrrbljbTmmK/lm7TogIzkuI3mlLvvvIzku7/kvZvlnKjnrYnlvoXjgILigJ0gPC9wPjxwPuKAnOetieW+heS7gOS5iO+8n+KAneWRqOWFg+aEn+inieWIsOS4gOiCoeS4jeWuieOAgiA8L3A+PHA+5ZGo5pOO55uv552A5ZGo5YWD77yM6IS45bqe5LiK5rWu546w5Ye65LiA6IKh5Ly85ZOt6Z2e5ZOt5LmL6Imy77yM6YKj56eN57ud5pyb5LiO5oSk5oCS77yM6K6p5b6X5ZGo5YWD5b+D6YO95piv5Zyo6aKk5oqW44CCIDwvcD48cD7igJzku5bku6zlnKjnrYnlvoXkvaDnmoTlh7rnlJ/jgILigJ0gPC9wPjxwPuWRqOaTjueahOi/meWPpeivne+8jOiuqeW+l+WRqOWFg+W/g+WktOWJp+mch++8jOS4gOiEuOeahOaOquaJi+S4jeWPiuOAgiA8L3A+PHA+5Zyo6YKj5LiA5peB77yM5ZGo5YWD55qE5q+N5Lqy77yM56em546J5bey5piv5o2C552A5Zi077yM5Y+R5Ye65LqG5Y6L5oqR5Yiw5p6B6Ie055qE5ZOt5rOj5aOw44CCIDwvcD48cD7igJzkvaDnn6XpgZPkvaDlh7rnlJ/nmoTml7blgJnmmK/mgI7kuYjmoLfnmoTlkJfvvJ/igJ3lkajmk47mnJvnnYDlkajlhYPvvIznnLznnZvooYDnuqLnmoTpgZPvvJrigJzlhYPlhL/vvIzkvaDlh7rnlJ/nmoTpgqPkuIDliLvvvIzlpKnmnInlvILosaHvvIzntKvmsJTokrjohb7vvIzmnInpvpnmsJTnvKDouqvvvIzpvpnlkJ/pnIflpKnlnLDvvIzkuYPmmK/lnKPpvpnmsJTosaHjgILigJ0gPC9wPjxwPuKAnOS9oOWkqeeUn+WFq+iEieiHquW8gO+8jOWImuWImuWHuueUn++8jOWwseW3sui/iOi/h+W8gOiEieWig++8jOebtOi+vuWFu+awlOOAguKAnSA8L3A+PHA+4oCc6L+Z5piv5Lyg6K+05Lit55qE4oCc5Zyj6b6Z5rCU6L+Q4oCd77yM5Lq/5LiH5peg5LiA77yM5pyq5p2l5Y+v5YWl5aSn5aKD55WM77yM5LiO5aSp5Zyw5ZCM5YWJ77yM5pel5pyI5ZCM5a+/77yM5L2g5piv5oiR5ZGo5a625YmN5omA5pyq5pyJ55qE5Zyj6b6Z77yB4oCdIDwvcD48cD7lkajmk47or63msJTml6Dmr5TnmoTmv4DliqjvvIzmtZHouqvliafng4jnmoTpoqTmipbnnYDvvIzlvZPlkajlhYPlh7rnlJ/ml7bvvIzlj6/ku6Xmg7PosaHku5bmmK/kvZXnrYnnmoTmv4DliqjvvIzlpKnkuI3kuqHlkajlrrbvvIzlnKjov5nljbHpmr7ml7bliLvvvIzorqnlvpfku5bku6zlkajlrrbov47mnaXkuoblnKPpvpnor57nlJ/jgIIgPC9wPjxwPuWRqOWFg+S5n+aYr+edgeWkp+S6huecvOedm++8jOaYvueEtuaYr+aXoOazleaDs+ixoe+8jOWcqOS7luWHuueUn+S5i+aXtu+8jOern+eEtuS8muacieWmguatpOW8guixoeOAgiA8L3A+PHA+4oCc6YKjLi4u6YKj5Li65LuA5LmILi4u4oCd5LuW5omL5o6M5b6u5b6u5pyJ5Lqb6aKk5oqW55qE5oqa5pG4552A6Ieq5bex55qE6Lqr5L2T77yM5pei54S25LuW5piv5aSp55Sf5YWr6ISJ6Ieq5byA55qE6K+d77yM6YKj5Li65L2V5aaC5LuK5Y205piv5L2T5YaF6L+e5YWr6ISJ6YO95piv5om+5LiN5Yiw77yfIDwvcD48cD7lkajmk47mv4DliqjnmoTlo7Dpn7PlmbbnhLbogIzmraLvvIzku5bnnLzkuK3nmoTlhYnoipLvvIzku7/kvZvmmK/lnKjmraTliLvmlaPlsL3vvIzlj6rmnInnnYDmtZPmtZPnmoTmgrLlk4DkuYvoibLvvIzku5bnpZ7oibLngbDotKXnmoTpgZPvvJrigJzlm6DkuLrlsLHlnKjkvaDlh7rnlJ/nmoTpgqPkuIDliLvvvIzln47lpJbmrabnjovkuYvlprvvvIzkuZ/mmK/or57kuIvkuobkuIDnlLfkuIDlpbPvvIznlLflqbTouqvnvKDom5/on5LkuYvmsJTvvIzlpbMu5am05aS05pyJ54G16ZuA5LmL5rCU77yM5Lmf5piv6Lqr5YW35rCU6L+Q77yB4oCdIDwvcD48cD7igJzogIzmja7miJHku6zlvpfliLDnmoTmg4XmiqXvvIzpgqPmrabnjovkuYvlprvvvIzmgIDog47lt7LmmK/otrPotrPkuInlubTvvIzljbTlp4vnu4jmnKrkuqfvvIzljbTmmK/lnKjku4rml6XvvIznqoHnhLbkuqfkuIsuLi7igJ0gPC9wPjxwPuKAnOS7peW+gOaIkei/mOWwmuS4jeefpeS4uuS9le+8jOmCo+aXtuWNtOaYr+e7iOS6juaYjueZvei/h+adpe+8jOS8oOmXu+WQjOW5tOWQjOaciOWQjOaXpeeUn+iAhe+8jOWPr+S6kuWZrOawlOi/kO+8jOWOn+adpe+8jOmCo+atpuWutuetueiwi+WkmuW5tO+8jOaJgOS4uueahO+8jOW5tuS4jeaYr+eugOWNleeahOiwi+aIkeWkp+WRqO+8jOiAjOaYr+iwi+aIkeWRqOWutuS5i+m+me+8geKAnSA8L3A+PHA+5ZGo5YWD5byg5LqG5byg5Zi077yM5LiA6IKh5a+S5oSP6Ieq6ISa5bqV5Yay5LiK5LqG5aSp54G155uW77ya4oCc6L+Z5piv5LiA5Liq6Zi06LCL77yB4oCdIDwvcD48cD7lpKnkuIvpl7Tlk6rmnInov5nkuYjlt6fnmoTkuovvvIzov5nmmL7nhLbmmK/kuIDkuKrphZ3phb/nmb7lubTvvIzlubbkuJTpkojlr7nnnYDku5bku6zlkajmsI/vvIznlJroh7MuLi7kuJPpl6jpkojlr7nnnYDku5bnmoTkuIDkuKrlpKfpmLTosIvjgIIgPC9wPjxwPuS4uuS6huatpO+8jOS7luS7rOeUmuiHs+S9v+WKsuaJi+aute+8jOiuqemCo+atpueOi+S5i+Wmu+S4ieW5tOS4jeS6p++8jOWwseaYr+WcqOetieS7lu+8gSA8L3A+PHA+5ZGo5pOO54K55LqG54K55aS077yM5aOw6Z+z5Zi25ZOR55qE6YGT77ya4oCc55qE56Gu5piv5LiA5Liq6Zi06LCL77yM5q2m5a625Zyo5oiR5aSn5ZGo6ZqQ5b+N5pWw55m+5bm077yM5Li65oiR5aSn5ZGo5Y2X5b6B5YyX5oiY77yM5bC95Y+W5L+h5Lu777yM54S26ICM6LCB6YO95rKh5oOz5Yiw77yM5LuW5Lus55qE55m+5bm06ZqQ5b+N77yM6YO95piv5Li65LqG5L2g6ICM5p2l77yB4oCdIDwvcD48cD7igJzpgqPkuIDml6XvvIzmrabnjovlhaXln47vvIzku6Xkur/kuIflpKflkajlrZDmsJHkuLropoHmjJ/vvIzopoHlnKjmiJHkuI7kvaDmr43lkI7pnaLliY3vvIzlpLrkvaDnmoTlnKPpvpnmsJTov5AuLi7igJ3or7TliLDmraTlpITvvIzlkajmk47nmoTnnLzkuK3nlJroh7PmmK/mnInnnYDooYDms6rmtYHmt4zlh7rmnaXjgIIgPC9wPjxwPuWcqOmCo+S4gOaXge+8jOenpuW4iOS5n+aYr+mdouiJsuaCsueXm++8jOS7luWjsOmfs+S9juayieeahOmBk++8muKAnOmCo+S4gOaXpe+8jOeOi+S4iuS4uuS6huS/neaKpOauv+S4i++8jOS4juatpueOi+aImOS6juWkp+WRqOWxse+8jOWNtOaYr+S4jeaVjO+8jOiiq+WFtuaWqeaWreS4gOiHgu+8jOiLpeS4jeaYr+mCo+atpueOi+aAleWFtuS7luS6uuavgeS6huauv+S4i+eahOWco+m+meawlOi/kOWQjOW9kuS6juWwve+8jOaBkOaAlei/nueOi+S4iumDveW+l+aImOatu+WFtuaJi+OAguKAnSA8L3A+PHA+4oCc6ICM5Li65LqG6aG65Yip55qE5aS65b6X5q6/5LiL55qE5rCU6L+Q77yM5q2m546L56uL56WW6KqT77yM55m+5bm05YaF5aSn5q2m5LiN6LiP6Laz5aSn5ZGo5Y2K5q2l44CC4oCdIDwvcD48cD7lvZPlubTpgqPlj6/mgJXnmoTkuIDluZXlho3luqbku47ohJHmtbfmt7HlpITmtozkuoblh7rmnaXvvIzkuIDml4HnmoTnp6bnjonvvIzlho3kuZ/lv43lj5fkuI3kvY/mg4Xnu6rvvIzot6rlgJLlnKjkuoblkajlhYPouqvliY3vvIzlsIbku5bntKfntKfnmoTmirHkvY/vvIznl5vlk63otbfmnaXvvIzlk63lo7DmkpXlv4Poo4LogrrjgIIgPC9wPjxwPuKAnOWFg+WEv++8geaIkeWPr+aAnOeahOWEv++8geavjeWQjuWvueS4jei1t+S9oO+8geKAnSA8L3A+PHA+6YKj5LiA5pel55qE5q6L6YW36K6w5b+G77yM5YaN5bqm6KKr6KGA5reL5reL55qE5pKV5byA77yM5aW55riF5pmw55qE6K6w5b6X77yM5Yia5Yia5Ye655Sf55qE5ZGo5YWD77yM6KKr5b2T5YGa6Zi155y877yM572u5LqO5q2m546L5omA5biD572u55qE56Wt5Z2b5LmL5LiK44CCIDwvcD48cD7ogIzlnKjnpa3lnZvkuK3vvIzov5jmnInnnYDpgqPmrabnjovliJrliJrlh7rnlJ/nmoTkuIDlr7nlhL/lpbPjgIIgPC9wPjxwPuWPquS4jei/h++8jOS4gOS4quaYr+iiq+Wkuu+8jOS4pOS4quaYr+WcqOW+l+OAgiA8L3A+PHA+5rCU6L+Q5Yml5aS677yM54q55aaC6KGA6IKJ5Yml56a777yM6YKj56eN55eb6Ium6Zq+5Lul5oOz6LGh44CCIDwvcD48cD7ogIzpgqPml7blgJnnmoTnp6bnjonvvIzliJrliJrlvpflrZDkuYvllpzvvIzkvYbljbTlj6rog73nnLznnYHnnYHnmoTnnIvnnYDoh6rlrrblranlhL/lnKjpgqPlhrDlh4nnmoTnpa3lnZvkuK3vvIzmib/lj5fnnYDml6Dovrnnl5voi6bvvIzlsIbnqJrlq6nnmoTlo7Dpn7Ppg73lk63lvpflmLblk5HotbfmnaXjgIIgPC9wPjxwPumCo+enjee7neacm+S4juaXoOWKm++8jOWHoOS5juaYr+S7pOW+l+mCo+aXtuWAmeeahOWlueaDqOS6m+aZleatu+i/h+WOu+OAgiA8L3A+PHA+5ZmX5Zek44CCIDwvcD48cD7ogIzlm6DkuLrlv4Pmg4Xmv4DojaHvvIznp6bnjonohLjpoornnqzpl7Toi43nmb3otbfmnaXvvIzkuIDlj6PpspzooYDlv43kuI3kvY/nmoTllrfkuoblh7rmnaXvvIzmn5PnuqLkuoblkajlhYPnmoTlpLTlj5HjgIIgPC9wPjxwPuKAnOavjeWQju+8n++8geS9oOaAjuS5iOS6hu+8n+KAneWRqOWFg+Wkp+aDiu+8jOaApeW/meW4ruenpueOieaQveWOu+WYtOinkueahOihgOi/ueOAgiA8L3A+PHA+5LiA5peB55qE56em5biI6LW257Sn6LWw5LiK5p2l77yM5o6M5b+D5pWj5Y+R552A5p+U5ZKM5LmL5rCU77yM6Ieq56em546J5aSp54G155uW54GM5rOo6ICM6L+b77yM5biu5Yqp5aW556iz5L2P5L2T5YaF55qE5rCU6KGA77yM5LuW55yL5LqG5LiA55y86IS46Imy6IuN55m955qE56em546J77yM54S25ZCO5a+5552A5ZGo5YWD5Y+55oGv6YGT77ya4oCc5q6/5LiL77yM5L2g5Lmf6I6r5oCq546L5LiK5LiO546L5ZCO5pyq6IO95L+d5oqk5aW95L2g77yM546L5LiK5b2T5bm05ou85bC95LqG5LiA5YiH77yM6Zmp5Lqb5oiY5q2744CC4oCdIDwvcD48cD7igJzogIznjovlkI7mm7TmmK/lnKjlvZPliJ3kvaDooqvliaXlpLrmsJTov5DlkI7vvIzlsIboh6rouqvnsr7ooYDms6jlhaXkvaDnmoTkvZPlhoXvvIzkuYvlkI7lubTlubTkuLrkvaDovpPooYDvvIzlpoLmraTmrr/kuIvmiY3og73lpJ/mtLvliLDku4rml6XvvIzkuI3ov4fnjovlkI7kuZ/kuLrmraTku5jlh7rkuobmnoHlpKfnmoTku6Pku7fvvIzlpbnmr4/ovpPooYDkuIDmrKHvvIzpg73lsIbkvJrlh4/lr7/kuInlubTvvIzljYHkuozlubTph4zvvIzlpbnlt7Llh4/lr7/kuInljYHlha3lubTvvIzlhYPmsJTlpKfkvKTvvIzlpoLku4rlt7LmmK/ku4XmnInkuI3liLDljYHlubTnmoTlr7/lkb3jgILigJ0gPC9wPjxwPuKAnOS7gOS5iO+8n++8geS9oOivtOS7gOS5iO+8n++8geKAnSA8L3A+PHA+5ZGo5YWD5ZCs5Yiw5q2k6K+d77yM6aG/5pe25aaC6YGt6Zu35Ye777yM55y85Lit6KGA5Lid55av54uC55qE5pSA54is5Ye65p2l77yM5YWI5YmN5Y2z5L6/5piv5ZCs6KeB6Ieq6Lqr5rCU6L+Q6KKr5aS677yM5LuW6YO95pyq5pu+5pyJ5aaC5q2k5by654OI55qE5oOF57uq5rOi5Yqo77yM5q+V56uf6L+Z5Lqb5LqL5Y+R55Sf5Zyo5LuW5bm05bm85LiN6K6w5LqL5pe277yM5Zug5q2k5a+56YKj5omA6LCT55qE4oCc5Zyj6b6Z5rCU6L+Q4oCd5Lmf5rKh5pyJ5aSq6L+H5by654OI55qE5b2S5bGe5oSf77yM5Y2z5L6/6KKr6K6+6K6h5Yml5aS677yM5Lmf5Y+q5piv5oSf5Yiw5pyJ5Lqb6ZyH5oOK44CCIDwvcD48cD7mrablrrborr7orqHku5bnmb7lubTvvIzku5blv4PkuK3omb3mnInms6LmvpzvvIzkvYbljbTog73lpJ/ljovliLbkvY/vvIzkvYbku5bku6zlsIbnlrzniLHku5bnmoTmr43kurLpgLzliLDlr7/lhYPmnq/nq63vvIzljbTmmK/orqnlvpflkajlhYPlv4PkuK3nrKzkuIDmrKHmi6XmnInkuobml6Dms5XpgY/liLbnmoTmnYDmhI/jgIIgPC9wPjxwPuaJgOS7pe+8jOW9k+atpOaXtuWQrOWIsOenpuW4iOi/meWPpeivneaXtu+8jOWRqOWFg+WGjeS5n+S/neaMgeS4jeS6huaDhee7qu+8jOa1kei6q+ihgOa2sumDveWcqOeWr+eLgueahOWvueedgOiEkeWtkOa2jOWOu++8jOS7pOW+l+S7lueahOiEuOW6nuWPmOW+l+ihgOe6ou+8jOa4heengOeahOeomuWrqemdouW6nu+8jOern+aYr+aYvuW+l+acieS6m+eLsOeLnui1t+adpeOAgiA8L3A+PHA+4oCc5q2m5a6277yM5L2g5Lus5a6J5pWi6YC85a6z5oiR5q+N5ZCO77yB55yf6K+l5q2777yB4oCdIDwvcD48cD7lkajlhYPmtZHouqvpoqTmipbnnYDvvIznnLznnZvooYDnuqLvvIzkuIDogqHmu5TlpKnoiKznmoTpnIfmgJLkuI7mnYDmhI/oh6rlv4PlpLTmtozotbfjgIIgPC9wPjxwPuWRqOaTjuWwhuenpueOieaKsei1t++8jOiuqeWluemdoOWcqOeOieamu+S4iu+8jOatpOaXtuS7lueahOWktOWPkeS7v+S9m+mDveaYr+WcqOatpOaXtuiLjeeZveS6huS4gOS6m++8jOWogeS4peeahOawlOWKv+iNoeeEtuaXoOWtmO+8jOS7luivreawlOacqOeEtueahOmBk++8muKAnOWkqeWcsOmXtOacieawlOi/kOS4gOivtO+8jOatpuWutuW6leiVtOWNleiWhO+8jOaDs+imgeeri+Wbve+8jOe7teW7tuWQjuS7o++8jOmch+aFkeWbm+aWue+8jOmCo+WwseW/hemhu+mcgOimgei2s+Wkn+eahOawlOi/kOaUr+aSke+8jOiAjOS9oOeahOWco+m+meawlOi/kO+8jOWwseaYr+acgOS9s+S5i+eJqeOAguKAnSA8L3A+PHA+4oCc5q2m546L5aS65L2g5rCU6L+Q77yM6LWQ5LqI5YW25a2Q5LiO5aWz77yM6Ieq5q2k77yM5aSn5q2m5pyJ6b6Z5Yek55u45oqk77yM5Zu96L+Q6byO55ub77yM5aSn5q2m546L5pyd55qE5YW055ub77yM5YWo5piv5Zug5Li65aS65LqG5L2g55qE5rCU6L+Q44CC4oCdIDwvcD48cD7igJzogIzkvaDouqvmgIDnmoTlnKPpvpnmsJTov5DvvIzooqvpgqPon5Lpm4DkuYvlkb3lvLrooYzmjqDlpLrvvIzoh6rnhLblsLHkuqfnlJ/kuoblvLrng4jnmoTmgKjmgajkuYvmsJTvvIzpgqPmrabnjovmlYXmhI/lsIbov5nmgKjmgajkuYvmsJTlsIHkuo7kvaDnmoTkvZPlhoXvvIzku47ogIzlvaLmiJDkuobmgKjpvpnmr5LvvIzlroPlkJ7po5/kvaDnmoTnsr7ooYDkuI3mlq3nmoTlo67lpKfvvIznm7TliLDmn5DkuIDlpKnmiJDnhp/niIblj5HvvIzlsLHkvJrlsIbkvaDnmoTnlJ/mnLrlvbvlupXlkJ7nga3jgILigJ0gPC9wPjxwPuKAnOWQjOaXtuS9oOWco+m+mS7moLnooqvnoLTvvIzlpKnnlJ/lhavohInmtojpgIDvvIznm7TliLDku4rml6XvvIzlhavohInpg73mnKrmm77lho3mmL7vvIzkv67ooYzkuYvot6/oibDpmr4uLi7igJ0gPC9wPjxwPuWRqOaTjuWjsOmfs+iLjeWHie+8jOWFtuS4remAj+edgOaXoOi+ueeahOaXoOWKm++8jOmavuS7peaDs+ixoe+8jOmCo+S4gOaXpeWvueS7luS7rOWRqOawj+iAjOiogO+8jOaYr+S4gOenjeS9leetiee7neacm+OAgiA8L3A+PHA+6YKj5LiA5pel77yM5Z+O5aSW6J+S6ZuA6b2Q6bij77yM6Zye5YWJ5LiH5LiI77yM5YCf5Yq/6JyV5Y+Y44CCIDwvcD48cD7pgqPkuIDml6XvvIzln47lhoXlnKPpvpnlk4DpuKPvvIzljJbkuLrpnZLng5/vvIzoooXoooXogIzmlaPjgIIgPC9wPjxwPuatpOS4uu+8jOifkumbgOWQnum+meOAgiA8L3A+PHA+PC9wPmAsXHJcblx0XHRcdFx0dGV4dDogJycsXHJcblx0XHRcdFx0bmV4dFRleHQ6ICcnLFxyXG5cdFx0XHRcdHByZVRleHQ6ICcnLFxyXG5cdFx0XHRcdHByZVRyYW5zbGF0ZVg6IDAsICAvL+S4iuS4gOeroOeahOS9jeenu1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNob3dBbmltYXRpb246IGZhbHNlLCAvL+aYr+WQpuW8gOWQr+WKqOeUu1xyXG5cdFx0XHRcdHBhZ2VzOiBbXSxcclxuXHRcdFx0XHRwcmVQYWdlczogW10sXHJcblx0XHRcdFx0bmV4dFBhZ2VzOiBbXSxcclxuXHRcdFx0XHRjb250ZW50V2lkdGg6IDAsXHJcblx0XHRcdFx0Y29udGVudEhlaWdodDogMCxcclxuXHRcdFx0XHR3aW5kb3dXaWR0aDogMCxcclxuXHRcdFx0XHR3aW5kb3dIZWlnaHQ6IDAsXHJcblx0XHRcdFx0cGxhdGZvcm06ICcnLCAgLy/orr7lpIdcclxuXHRcdFx0XHRiYXR0ZXJ5U3RhdGU6ICcnLCAvL+eUteaxoOeKtuaAgVxyXG5cdFx0XHRcdGJhdHRlcnlMZXZlbDogJycsIC8v55S16YePXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c3RhdHVzQmFySGVpZ2h0OiAwLCAvL+eKtuaAgeagj+mrmOW6plxyXG5cdFx0XHRcdGNvbHVtbkdhcDogNDAsXHJcblx0XHRcdFx0Y3VycmVudFBhZ2U6IDAsXHJcblx0XHRcdFx0dG91Y2hTdGFydFg6IDAsICAvLyDop6blsY/otbflp4vngrlcclxuXHRcdFx0XHR0b3VjaFN0YXJ0VDogMCwgIC8v6Kem5bGP6LW35aeL5pe26Ze0XHJcblx0XHRcdFx0dG91Y2hUaW1lcjogbnVsbCAgLC8v55So5LqO6Kem5pG46IqC5rWBXHJcblx0XHRcdFx0bWVudVNob3c6IGZhbHNlLFxyXG5cdFx0XHRcdHR1cm5QYWdlVGltZTogMC41LCAgLy/nv7vpobXliqjnlLvml7bpl7RcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRmb250U2l6ZTogJycsXHJcblx0XHRcdFx0bGluZUhlaWdodDogJycsXHJcblx0XHRcdFx0YmFja2dyb3VuZDogJycsXHJcblx0XHRcdFx0Y29sb3JMaXN0OiBbJyMwMDAnLCAnIzY2NiddLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHdhaXQ6IGZhbHNlICAgLy/nv7voh7Pnq6DoioLkuqTmjqXml7bvvIzkvJrlr7zoh7Tnv7voh7Pnqbrnmb3pobVidWcs6ZyA6KaB562J5b6F56ug6IqC6L2u5o2iXHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdHRoaXMuZ2V0U3lzdGVtSW5mbygpXHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy5pbml0UGFnZSgpXHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6e1xyXG5cdFx0XHRwcm9ncmVzcygpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jdXJyZW50UGFnZSAvICh0aGlzLnBhZ2VzLmxlbmd0aCAtIDEpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6I635Y+W6auY5bqm5a695bqmXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRnZXRTeXN0ZW1JbmZvKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNvbnN0IHsgd2luZG93V2lkdGgsIHdpbmRvd0hlaWdodCwgc3RhdHVzQmFySGVpZ2h0LCBwbGF0Zm9ybSB9ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblx0XHRcdFx0dGhpcy5zdGF0dXNCYXJIZWlnaHQgPSBzdGF0dXNCYXJIZWlnaHQ7XHJcblx0XHRcdFx0dGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvd1dpZHRoO1xyXG5cdFx0XHRcdHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93SGVpZ2h0O1xyXG5cdFx0XHRcdHRoaXMuY29udGVudFdpZHRoID0gd2luZG93V2lkdGggLSA0MDtcclxuXHRcdFx0XHR0aGlzLmNvbnRlbnRIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSA2MDtcclxuXHRcdFx0XHR0aGlzLnBsYXRmb3JtID0gcGxhdGZvcm07XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0XHRwbHVzLm5hdmlnYXRvci5zZXRGdWxsc2NyZWVuKHRydWUpO1xyXG5cdFx0XHRcdFx0Ly8g6I635Y+W5a6J5Y2T55S16YePXHJcblx0XHRcdFx0XHRpZiAodGhpcy5wbGF0Zm9ybSA9PT0gJ2lvcycpIHtcclxuXHRcdFx0XHRcdFx0bGV0IFVJRGV2aWNlID0gcGx1cy5pb3MuaW1wb3J0KFwiVUlEZXZpY2VcIik7ICBcclxuXHRcdFx0XHRcdFx0bGV0IGRldiA9IFVJRGV2aWNlLmN1cnJlbnREZXZpY2UoKTsgIFxyXG5cdFx0XHRcdFx0XHRpZiAoIWRldi5pc0JhdHRlcnlNb25pdG9yaW5nRW5hYmxlZCgpKSB7ICBcclxuXHRcdFx0XHRcdFx0ICAgIGRldi5zZXRCYXR0ZXJ5TW9uaXRvcmluZ0VuYWJsZWQodHJ1ZSk7ICBcclxuXHRcdFx0XHRcdFx0fSAgXHJcblx0XHRcdFx0XHRcdHRoaXMuYmF0dGVyeVN0YXRlID0gZGV2LmJhdHRlcnlTdGF0ZSgpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmJhdHRlcnlMZXZlbCA9IGRldi5iYXR0ZXJ5TGV2ZWwoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRsZXQgbWFpbiA9IHBsdXMuYW5kcm9pZC5ydW50aW1lTWFpbkFjdGl2aXR5KCk7XHJcblx0XHRcdFx0XHRcdGxldCBJbnRlbnQgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoJ2FuZHJvaWQuY29udGVudC5JbnRlbnQnKTsgIFxyXG5cdFx0XHRcdFx0XHRsZXQgcmVjZXZpZXIgPSBwbHVzLmFuZHJvaWQuaW1wbGVtZW50cygnaW8uZGNsb3VkLmZlYXR1cmUuaW50ZXJuYWwucmVmbGVjdC5Ccm9hZGNhc3RSZWNlaXZlcicsIHsgIFxyXG5cdFx0XHRcdFx0XHQgICAgb25SZWNlaXZlOiAoY29udGV4dCwgaW50ZW50KSA9PiB7ICBcclxuXHRcdFx0XHRcdFx0ICAgICAgICBsZXQgYWN0aW9uID0gaW50ZW50LmdldEFjdGlvbigpOyAgXHJcblx0XHRcdFx0XHRcdCAgICAgICAgaWYgKGFjdGlvbiA9PSBJbnRlbnQuQUNUSU9OX0JBVFRFUllfQ0hBTkdFRCkgeyAgXHJcblx0XHRcdFx0XHRcdCAgICAgICAgICAgIHRoaXMuYmF0dGVyeVN0YXRlID0gaW50ZW50LmdldEludEV4dHJhKFwic3RhdHVzXCIsIDApOyAvL+eUteaxoOeKtuaAgSAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuYmF0dGVyeUxldmVsID0gaW50ZW50LmdldEludEV4dHJhKFwibGV2ZWxcIiwgMCk7IC8v55S16YePXHJcblx0XHRcdFx0XHRcdCAgICAgICAgfSAgXHJcblx0XHRcdFx0XHRcdCAgICB9ICBcclxuXHRcdFx0XHRcdFx0IH0pOyAgXHJcblx0XHRcdFx0XHRcdGxldCBJbnRlbnRGaWx0ZXIgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoJ2FuZHJvaWQuY29udGVudC5JbnRlbnRGaWx0ZXInKTsgIFxyXG5cdFx0XHRcdFx0XHRsZXQgZmlsdGVyID0gbmV3IEludGVudEZpbHRlcihJbnRlbnQuQUNUSU9OX0JBVFRFUllfQ0hBTkdFRCk7ICBcclxuXHRcdFx0XHRcdFx0bWFpbi5yZWdpc3RlclJlY2VpdmVyKHJlY2V2aWVyLCBmaWx0ZXIpOyBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIOiOt+WPluWtl+S9k+OAgeaOkueJiOetieS/oeaBr1xyXG5cdFx0XHRcdHRoaXMuZm9udFNpemUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2ZvbnRTaXplJykgfHwgMTY7XHJcblx0XHRcdFx0dGhpcy5saW5lSGVpZ2h0ID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdsaW5lSGVpZ2h0JykgfHwgMS41O1xyXG5cdFx0XHRcdHRoaXMuYmFja2dyb3VuZCA9IHVuaS5nZXRTdG9yYWdlU3luYygnYmFja2dyb3VuZCcpIHx8IDA7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDojrflj5bmlbDmja7liJ3lp4vljJbpobXpnaJcclxuXHRcdFx0KiovXHJcblx0XHRcdGFzeW5jIGluaXRQYWdlKCkge1xyXG5cdFx0XHRcdHRoaXMucHJlVHJhbnNsYXRlWCA9IC10aGlzLndpbmRvd1dpZHRoIC0gMjA7XHJcblx0XHRcdFx0YXdhaXQgdGhpcy5nZXREYXRhKClcclxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNhbGNQYWdlcygpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOiuoeeul+mYheivu+mhtemVv+W6pizlubbnlJ/miJBwYWdlcyzlubbot7Povazoh7Pmn5DpobXvvIjlpoLmnpzmnInvvIlcclxuXHRcdFx0KiovXHJcblx0XHRcdGNhbGNQYWdlcyh0eXBlLCBwcm9ncmVzcykge1xyXG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdFx0XHRxdWVyeS5zZWxlY3QoJyN0ZXh0JykuYm91bmRpbmdDbGllbnRSZWN0KGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHdpZHRoID0gZGF0YS53aWR0aDtcclxuXHRcdFx0XHRcdGxldCBoZWlnaHQgPSBkYXRhLmhlaWdodDtcclxuXHRcdFx0XHRcdHRoaXMucGFnZXMgPSB0aGlzLmdlblBhZ2VzKHdpZHRoLCBoZWlnaHQpXHJcblx0XHRcdFx0XHRpZiAodHlwZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRQYWdlID0gTWF0aC5mbG9vcigodGhpcy5wYWdlcy5sZW5ndGggLSAxKSAqIHByb2dyZXNzKVxyXG5cdFx0XHRcdFx0XHR0aGlzLmdvVG9QYWdlKHRoaXMuY3VycmVudFBhZ2UpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSkuZXhlYygpO1xyXG5cdFx0XHRcdHRoaXMuY2FsY1ByZVBhZ2VzKClcclxuXHRcdFx0XHR0aGlzLmNhbGNOZXh0UGFnZXMoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6K6h566X5LiK5LiA56ug6ZiF6K+76aG16ZW/5bqmLOW5tueUn+aIkHBhZ2VzXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRjYWxjUHJlUGFnZXMoKSB7XHJcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xyXG5cdFx0XHRcdHF1ZXJ5LnNlbGVjdCgnI3ByZVRleHQnKS5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgd2lkdGggPSBkYXRhLndpZHRoO1xyXG5cdFx0XHRcdFx0bGV0IGhlaWdodCA9IGRhdGEuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0dGhpcy5wcmVQYWdlcyA9IHRoaXMuZ2VuUGFnZXMod2lkdGgsIGhlaWdodClcclxuXHRcdFx0XHR9KS5leGVjKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDorqHnrpfkuIvkuIDnq6DpmIXor7vpobXplb/luqYs5bm255Sf5oiQcGFnZXNcclxuXHRcdFx0KiovXHJcblx0XHRcdGNhbGNOZXh0UGFnZXMoKSB7XHJcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xyXG5cdFx0XHRcdHF1ZXJ5LnNlbGVjdCgnI25leHRUZXh0JykuYm91bmRpbmdDbGllbnRSZWN0KGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHdpZHRoID0gZGF0YS53aWR0aDtcclxuXHRcdFx0XHRcdGxldCBoZWlnaHQgPSBkYXRhLmhlaWdodDtcclxuXHRcdFx0XHRcdHRoaXMubmV4dFBhZ2VzID0gdGhpcy5nZW5QYWdlcyh3aWR0aCwgaGVpZ2h0KVxyXG5cdFx0XHRcdH0pLmV4ZWMoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDnlJ/miJDpmIXor7vpobVwYWdlc1xyXG5cdFx0XHQqKi9cclxuXHRcdFx0Z2VuUGFnZXMod2lkdGgsIGhlaWdodCkge1xyXG5cdFx0XHRcdGxldCBhcnIgPSBbXTtcclxuXHRcdFx0XHRsZXQgaWQgPSAwO1xyXG5cdFx0XHRcdGlmICh0aGlzLnBsYXRmb3JtID09PSAnaW9zJykge1xyXG5cdFx0XHRcdFx0d2hpbGUgKGhlaWdodCA+IDApIHtcclxuXHRcdFx0XHRcdFx0YXJyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdGlkLFxyXG5cdFx0XHRcdFx0XHRcdHpJbmRleDogMjAwIC0gaWQsXHJcblx0XHRcdFx0XHRcdFx0dHJhbnNsYXRlWDogMFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0aWQrKztcclxuXHRcdFx0XHRcdFx0aGVpZ2h0IC09IHRoaXMuY29udGVudEhlaWdodFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHdoaWxlICh3aWR0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0YXJyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdGlkLFxyXG5cdFx0XHRcdFx0XHRcdHpJbmRleDogMjAwIC0gaWQsXHJcblx0XHRcdFx0XHRcdFx0dHJhbnNsYXRlWDogMFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0aWQrKztcclxuXHRcdFx0XHRcdFx0d2lkdGggLT0gdGhpcy5jb250ZW50V2lkdGggKyB0aGlzLmNvbHVtbkdhcFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gYXJyO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6Kem5pG45byA5aeLXHJcblx0XHRcdCoqL1xyXG5cdFx0XHR0b3VjaFN0YXJ0KGUpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dBbmltYXRpb24gPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLnRvdWNoU3RhcnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XHJcblx0XHRcdFx0dGhpcy50b3VjaFN0YXJ0VCA9IGUudGltZVN0YW1wO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6Kem5pG457uT5p2fXHJcblx0XHRcdCoqL1xyXG5cdFx0XHR0b3VjaEVuZChlKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93QW5pbWF0aW9uID0gdHJ1ZTtcclxuXHRcdFx0XHRsZXQgZGVsdGFYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy50b3VjaFN0YXJ0WDtcclxuXHRcdFx0XHRpZiAoZGVsdGFYID4gdGhpcy53aW5kb3dXaWR0aC8yKSB7XHJcblx0XHRcdFx0XHR0aGlzLnByZVBhZ2UoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChkZWx0YVggPCAtdGhpcy53aW5kb3dXaWR0aC8yKSB7XHJcblx0XHRcdFx0XHR0aGlzLm5leHRQYWdlKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRsZXQgdiA9IDA7XHJcblx0XHRcdFx0XHR2ID0gZGVsdGFYIC8gKGUudGltZVN0YW1wIC0gdGhpcy50b3VjaFN0YXJ0VCk7XHJcblx0XHRcdFx0XHRpZiAodiA8PSAwLjEgJiYgdiA+IDApIHsgIC8v57+76aG16YCf5bqm5oWi77yM5Y+W5raI57+76aG1XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmN1cnJlbnRQYWdlICE9PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlIC0gMV0udHJhbnNsYXRlWCA9IC10aGlzLndpbmRvd1dpZHRoIC0gMjA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wcmVUcmFuc2xhdGVYID0gLXRoaXMud2luZG93V2lkdGggLSAyMDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBpZiAodiA+PSAtMC4xICYmIHYgPCAwKSB7ICAvL+e/u+mhtemAn+W6puaFou+8jOWPlua2iOe/u+mhtVxyXG5cdFx0XHRcdFx0XHR0aGlzLnBhZ2VzW3RoaXMuY3VycmVudFBhZ2VdLnRyYW5zbGF0ZVggPSAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBpZih2ID4gMC4xKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJlUGFnZSgpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmICh2IDwgLTAuMSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5leHRQYWdlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDop6bmkbhcclxuXHRcdFx0KiovXHJcblx0XHRcdHRvdWNoTW92ZShlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCF0aGlzLnRvdWNoVGltZXIpIHtcclxuXHRcdFx0XHRcdGxldCBkZWx0YVggPSBlLnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFg7XHJcblx0XHRcdFx0XHRpZiAoZGVsdGFYIDwgMCkge1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5jdXJyZW50UGFnZSA9PT0gdGhpcy5wYWdlcy5sZW5ndGggLSAxKSB7ICAvL+WmguaenOe/u+iHs+acgOWQjuS4gOmhtVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLm5leHRUZXh0Lmxlbmd0aCA9PT0gMCkgeyAgLy/lpoLmnpzmsqHmnInkuIvkuIDnq6BcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+i/meaYr+acgOWQjuS4gOeroCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnBhZ2VzW3RoaXMuY3VycmVudFBhZ2VdLnRyYW5zbGF0ZVggPSBkZWx0YVg7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucGFnZXNbdGhpcy5jdXJyZW50UGFnZV0udHJhbnNsYXRlWCA9IGRlbHRhWDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmN1cnJlbnRQYWdlID09PSAwKSB7ICAvL+WmguaenOaYr+esrOS4gOmhtVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnByZVRleHQubGVuZ3RoID09PSAwKSB7ICAvL+WmguaenOayoeacieS4iuS4gOeroFxyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn6L+Z5piv56ys5LiA56ugJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJlVHJhbnNsYXRlWCA9IC10aGlzLndpbmRvd1dpZHRoICsgZGVsdGFYO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnBhZ2VzW3RoaXMuY3VycmVudFBhZ2UgLSAxXS50cmFuc2xhdGVYID0gLXRoaXMud2luZG93V2lkdGggKyBkZWx0YVg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMudG91Y2hUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRvdWNoVGltZXIgPSBudWxsO1xyXG5cdFx0XHRcdFx0fSwgMTApXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog5ZG85Ye66I+c5Y2VXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRzaG93TWVudSgpIHtcclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcclxuXHRcdFx0XHRcdC8vIHBsdXMubmF2aWdhdG9yLnNldEZ1bGxzY3JlZW4odGhpcy5tZW51U2hvdyk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0dGhpcy5tZW51U2hvdyA9ICF0aGlzLm1lbnVTaG93O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOS4iuS4gOmhtVxyXG5cdFx0XHQqKi9cclxuXHRcdFx0cHJlUGFnZSgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5tZW51U2hvdykge1xyXG5cdFx0XHRcdFx0dGhpcy5tZW51U2hvdyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0XHRcdC8vIHBsdXMubmF2aWdhdG9yLnNldEZ1bGxzY3JlZW4odHJ1ZSk7XHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodGhpcy5jdXJyZW50UGFnZSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0aWYgKCB0aGlzLnByZVRleHQubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn6L+Z5piv56ys5LiA56ugJyxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYgKCF0aGlzLndhaXQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy53YWl0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IHRoaXMucHJlQ2hhcHRlck5hbWUsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHRoaXMucHJlVHJhbnNsYXRlWCA9IDA7XHJcblx0XHRcdFx0XHRcdC8vIOWKqOeUu+e7k+adn+WQjuiOt+WPluS4iuS4gOeroCzph43nva7pobXpnaJcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wcmVDaGFwdGVyKClcclxuXHRcdFx0XHRcdFx0fSwgdGhpcy50dXJuUGFnZVRpbWUqMTAwMClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdHRoaXMucGFnZXNbdGhpcy5jdXJyZW50UGFnZSAtIDFdLnRyYW5zbGF0ZVggPSAwO1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50UGFnZS0tO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOS4i+S4gOmhtVxyXG5cdFx0XHQqKi9cclxuXHRcdFx0bmV4dFBhZ2UoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMubWVudVNob3cpIHtcclxuXHRcdFx0XHRcdHRoaXMubWVudVNob3cgPSBmYWxzZTtcclxuXHRcdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHRcdFx0XHQvLyBwbHVzLm5hdmlnYXRvci5zZXRGdWxsc2NyZWVuKHRydWUpO1xyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMuY3VycmVudFBhZ2UgPT09IHRoaXMucGFnZXMubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdFx0aWYgKCB0aGlzLm5leHRUZXh0Lmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+i/meaYr+acgOWQjuS4gOeroCcsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmICghdGhpcy53YWl0KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMud2FpdCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiB0aGlzLm5leHRDaGFwdGVyTmFtZSxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0dGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlXS50cmFuc2xhdGVYID0gLXRoaXMud2luZG93V2lkdGggLSAyMDtcclxuXHRcdFx0XHRcdFx0Ly8g5Yqo55S757uT5p2f5ZCO6I635Y+W5LiL5LiA56ugLOmHjee9rumhtemdolxyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm5leHRDaGFwdGVyKClcclxuXHRcdFx0XHRcdFx0fSwgdGhpcy50dXJuUGFnZVRpbWUqMTAwMClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnBhZ2VzW3RoaXMuY3VycmVudFBhZ2VdLnRyYW5zbGF0ZVggPSAtdGhpcy53aW5kb3dXaWR0aCAtIDIwO1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50UGFnZSsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOiOt+WPluS4i+S4gOeroCzph43nva7pobXpnaLvvIzlsIbmnKznq6Dlj5jkuLrliY3kuIDnq6DvvIzlsIbkuIvkuIDnq6Dlj5jkuLrmnKznq6DvvIzojrflj5bkuIvkuIDnq6DlhoXlrrlcclxuXHRcdFx0KiovXHJcblx0XHRcdG5leHRDaGFwdGVyKCkge1xyXG5cdFx0XHRcdHRoaXMuY2hhcHRlcklkKys7XHJcblx0XHRcdFx0dGhpcy5wcmVUZXh0ID0gdGhpcy50ZXh0O1xyXG5cdFx0XHRcdHRoaXMudGV4dCA9IHRoaXMubmV4dFRleHQ7XHJcblx0XHRcdFx0dGhpcy5uZXh0VGV4dCA9ICcnO1xyXG5cdFx0XHRcdHRoaXMuZ2V0VGV4dCh0aGlzLmNoYXB0ZXJJZCArIDEsICduZXh0JylcclxuXHRcdFx0XHR0aGlzLnByZVBhZ2VzID0gdGhpcy5wYWdlcy5tYXAoKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHR2YWx1ZS50cmFuc2xhdGVYID0gMDtcclxuXHRcdFx0XHRcdHJldHVybiB2YWx1ZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMucGFnZXMgPSBbXS5jb25jYXQodGhpcy5uZXh0UGFnZXMpO1xyXG5cdFx0XHRcdHRoaXMubmV4dFBhZ2VzID0gW107XHJcblx0XHRcdFx0dGhpcy5wcmVDaGFwdGVyTmFtZSA9IHRoaXMuY2hhcHRlck5hbWU7XHJcblx0XHRcdFx0dGhpcy5jaGFwdGVyTmFtZSA9IHRoaXMubmV4dENoYXB0ZXJOYW1lO1xyXG5cdFx0XHRcdHRoaXMubmV4dENoYXB0ZXJOYW1lID0gJyc7XHJcblx0XHRcdFx0dGhpcy53YWl0ID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50UGFnZSA9IDA7XHJcblx0XHRcdFx0dGhpcy5nb1RvUGFnZSh0aGlzLmN1cnJlbnRQYWdlKVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6I635Y+W5LiK5LiA56ugLOmHjee9rumhtemdou+8jOWwhuacrOeroOWPmOS4uuWQjuS4gOeroO+8jOWwhuS4iuS4gOeroOWPmOS4uuacrOeroO+8jOiOt+WPluS4iuS4gOeroOWGheWuuVxyXG5cdFx0XHQqKi9cclxuXHRcdFx0cHJlQ2hhcHRlcigpIHtcclxuXHRcdFx0XHR0aGlzLnByZVRyYW5zbGF0ZVggPSAtdGhpcy53aW5kb3dXaWR0aCAtIDIwO1xyXG5cdFx0XHRcdHRoaXMuY2hhcHRlcklkLS07XHJcblx0XHRcdFx0dGhpcy5uZXh0VGV4dCA9IHRoaXMudGV4dDtcclxuXHRcdFx0XHR0aGlzLnRleHQgPSB0aGlzLnByZVRleHQ7XHJcblx0XHRcdFx0dGhpcy5wcmVUZXh0ID0gJyc7XHJcblx0XHRcdFx0dGhpcy5nZXRUZXh0KHRoaXMuY2hhcHRlcklkIC0gMSwgJ3ByZScpXHJcblx0XHRcdFx0dGhpcy5uZXh0UGFnZXMgPSB0aGlzLnBhZ2VzLm1hcCgodmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdHZhbHVlLnRyYW5zbGF0ZVggPSAwO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy5wYWdlcyA9IFtdLmNvbmNhdCh0aGlzLnByZVBhZ2VzKTtcclxuXHRcdFx0XHR0aGlzLnByZVBhZ2VzID0gW107XHJcblx0XHRcdFx0dGhpcy5uZXh0Q2hhcHRlck5hbWUgPSB0aGlzLmNoYXB0ZXJOYW1lO1xyXG5cdFx0XHRcdHRoaXMuY2hhcHRlck5hbWUgPSB0aGlzLnByZUNoYXB0ZXJOYW1lO1xyXG5cdFx0XHRcdHRoaXMucHJlQ2hhcHRlck5hbWUgPSAnJztcclxuXHRcdFx0XHR0aGlzLndhaXQgPSBmYWxzZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5wYWdlcy5sZW5ndGggLSAxO1xyXG5cdFx0XHRcdHRoaXMuZ29Ub1BhZ2UodGhpcy5jdXJyZW50UGFnZSlcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOagueaNrumhteeggei3s+i9rFxyXG5cdFx0XHQqKi9cclxuXHRcdFx0Z29Ub1BhZ2UocGFnZSkge1xyXG5cdFx0XHRcdGlmIChwYWdlID4gdGhpcy5wYWdlcy5sZW5ndGggLSAxKSB7XHJcblx0XHRcdFx0XHRwYWdlID0gdGhpcy5wYWdlcy5sZW5ndGggLSAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnNob3dBbmltYXRpb24gPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLnBhZ2VzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGluZGV4IDwgcGFnZSkge1xyXG5cdFx0XHRcdFx0XHR2YWx1ZS50cmFuc2xhdGVYID0gLXRoaXMud2luZG93V2lkdGggLSAyMFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDliqDlpKflrZfkvZNcclxuXHRcdFx0KiovXHJcblx0XHRcdGJpZ1NpemUoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZm9udFNpemUgPCAyNSkge1xyXG5cdFx0XHRcdFx0bGV0IHByb2dyZXNzID0gdGhpcy5wcm9ncmVzcztcclxuXHRcdFx0XHRcdHRoaXMuZm9udFNpemUrKztcclxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnZm9udFNpemUnLCB0aGlzLmZvbnRTaXplKVxyXG5cdFx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNhbGNQYWdlcygxLCBwcm9ncmVzcylcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5pyA5aSn5a2X5L2TJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOe8qeWwj+Wtl+S9k1xyXG5cdFx0XHQqKi9cclxuXHRcdFx0c21hbGxTaXplKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmZvbnRTaXplID4gMTQpIHtcclxuXHRcdFx0XHRcdGxldCBwcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3M7XHJcblx0XHRcdFx0XHR0aGlzLmZvbnRTaXplLS07XHJcblx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ2ZvbnRTaXplJywgdGhpcy5mb250U2l6ZSlcclxuXHRcdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jYWxjUGFnZXMoMSwgcHJvZ3Jlc3MpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+acgOWwj+Wtl+S9kycsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvKipcclxuXHRcdFx0KiDmlLnlj5jooYzot51cclxuXHRcdFx0KiovXHJcblx0XHRcdGNoYW5nZUxpbmVIZWlnaHQobGluZUhlaWdodCkge1xyXG5cdFx0XHRcdGlmIChsaW5lSGVpZ2h0ID09PSB0aGlzLmxpbmVIZWlnaHQpIHtcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdGxldCBwcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3M7XHJcblx0XHRcdFx0XHR0aGlzLmxpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0O1xyXG5cdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdsaW5lSGVpZ2h0JywgdGhpcy5saW5lSGVpZ2h0KVxyXG5cdFx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNhbGNQYWdlcygxLCBwcm9ncmVzcylcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog5pS55Y+Y6IOM5pmvXHJcblx0XHRcdCoqL1xyXG5cdFx0XHRjaGFuZ2VCYWNrZ3JvdW5kKGJhY2tncm91bmQpIHtcclxuXHRcdFx0XHRpZiAoYmFja2dyb3VuZCA9PT0gdGhpcy5iYWNrZ3JvdW5kKSB7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xyXG5cdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdiYWNrZ3JvdW5kJywgdGhpcy5iYWNrZ3JvdW5kKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQqIOiOt+WPluaVsOaNru+8jOWMheaLrOmYheivu+WIsOesrOWHoOeroO+8jOS7peWPiuWJjeS4reWQjuS4ieeroOWGheWuuVxyXG5cdFx0XHQqKi9cclxuXHRcdFx0Z2V0RGF0YSgpIHtcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe21hc2s6IHRydWV9KVxyXG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0XHQvLyDmqKHmi5/nvZHnu5zml7bpl7RcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdFx0XHR0aGlzLmNoYXB0ZXJJZCA9IDI7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2hhcHRlck5hbWUgPSBg56ysJHt0aGlzLmNoYXB0ZXJJZH3nq6Ag6J+S6ZuA5ZCe6b6ZYDtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmVDaGFwdGVyTmFtZSA9IGDnrKwke3RoaXMuY2hhcHRlcklkIC0gMX3nq6Ag6J+S6ZuA5ZCe6b6ZYDtcclxuXHRcdFx0XHRcdFx0dGhpcy5uZXh0Q2hhcHRlck5hbWUgPSBg56ysJHt0aGlzLmNoYXB0ZXJJZCArIDF956ugIOifkumbgOWQnum+mWA7XHJcblx0XHRcdFx0XHRcdHRoaXMudGV4dCA9IHRoaXMuY2hhcHRlcklkICsgdGhpcy50ZXh0Rml4ZWQ7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJlVGV4dCA9IHRoaXMuY2hhcHRlcklkIC0gMSArIHRoaXMudGV4dEZpeGVkO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5leHRUZXh0ID0gdGhpcy5jaGFwdGVySWQgKyAxICsgdGhpcy50ZXh0Rml4ZWQ7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoKVxyXG5cdFx0XHRcdFx0fSwgMTAwMClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0LyoqXHJcblx0XHRcdCog6I635Y+W5pWw5o2u77yM5YyF5ous6ZiF6K+75Yiw56ys5Yeg56ug77yM5Lul5Y+K5YmN5Lit5ZCO5LiJ56ug5YaF5a65XHJcblx0XHRcdCoqL1xyXG5cdFx0XHRnZXRUZXh0KGNoYXB0ZXJJZCwgdHlwZSkge1xyXG5cdFx0XHRcdC8vIOaooeaLn+e9kee7nOaXtumXtFxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHR5cGUgPT09ICduZXh0Jykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5leHRUZXh0ID0gY2hhcHRlcklkICsgdGhpcy50ZXh0Rml4ZWQ7XHJcblx0XHRcdFx0XHRcdHRoaXMubmV4dENoYXB0ZXJOYW1lID0gYOesrCR7Y2hhcHRlcklkfeeroCDon5Lpm4DlkJ7pvplgO1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jYWxjTmV4dFBhZ2VzKClcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpZiAoY2hhcHRlcklkID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wcmVUZXh0ID0gJyc7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wcmVDaGFwdGVyTmFtZSA9ICcnO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucHJlVGV4dCA9IGNoYXB0ZXJJZCArIHRoaXMudGV4dEZpeGVkO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucHJlQ2hhcHRlck5hbWUgPSBg56ysJHtjaGFwdGVySWR956ugIOifkumbgOWQnum+mWA7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5jYWxjUHJlUGFnZXMoKVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHRwYWdle1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0fVxyXG5cdC5oaWRkZW57XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdH1cclxuXHQuaWNvbntcclxuXHRcdFxyXG5cdH1cclxuXHQuYWN0aW9ue1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0ei1pbmRleDogMjAxO1xyXG5cdFx0Lml0ZW17XHJcblx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdH1cclxuXHR9XHJcblx0LmNvbnRhaW5lcntcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdHBhZGRpbmc6IDBweCAyMHB4O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRcdGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLDAsMCwuNCk7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0LmNoYXB0ZXJ7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0Y29sb3I6ICRtaW5vci10ZXh0LWNvbG9yO1xyXG5cdFx0XHRoZWlnaHQ6MzBweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0XHR9XHJcblx0XHQuYm90dG9tLWJhcntcclxuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRjb2xvcjogJG1pbm9yLXRleHQtY29sb3I7XHJcblx0XHRcdGhlaWdodDozMHB4O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMzBweDtcclxuXHRcdH1cclxuXHRcdC5jb250ZW50e1xyXG5cdFx0XHQuYm9vay1pbm5lcntcclxuXHRcdFx0XHR0ZXh0LWluZGVudDogMmVtO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246anVzdGlmeTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQuY29udGFpbmVyMHtcclxuXHRcdGJhY2tncm91bmQ6IHVybCguLi8uLi9zdGF0aWMvYmFja2dyb3VuZDEuanBnKTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0XHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuXHR9XHJcblx0LmNvbnRhaW5lcjF7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG5cdH1cclxuXHQudG9we1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzY2NjtcclxuXHRcdHotaW5kZXg6IDQwMDtcclxuXHRcdHRyYW5zaXRpb246IHRvcCAuM3M7XHJcblx0XHQuaGVhZHtcclxuXHRcdFx0aGVpZ2h0OiAzMHB4O1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5ib3R0b20taG9sZGVye1xyXG5cdFx0aGVpZ2h0OiAzMDBweDtcclxuXHR9XHJcblx0LmJvdHRvbXtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0cGFkZGluZzogMTBweCAyMHB4O1xyXG5cdFx0aGVpZ2h0OiAzMDBweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzY2NjtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHR6LWluZGV4OiA0MDA7XHJcblx0XHR0cmFuc2l0aW9uOiBib3R0b20gLjNzO1xyXG5cdFx0Lml0ZW17XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdC5pdGVtLW5hbWV7XHJcblx0XHRcdFx0cGFkZGluZzogMTBweDtcclxuXHRcdFx0XHRjb2xvcjogIzAwMDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0Lmljb257XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdFx0XHRcdHBhZGRpbmc6IDVweCAyMHB4O1xyXG5cdFx0XHRcdGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0d2lkdGg6IGF1dG87XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHRcdFx0Ym9yZGVyOiAjZmZmIHNvbGlkIDFweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQudHlwZS1zZXR0aW5ne1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdFx0XHRwYWRkaW5nOiA1cHg7XHJcblx0XHRcdFx0Ym94LXNpemluZzogY29udGVudC1ib3g7XHJcblx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdHdpZHRoOiAyMHB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdFx0XHRib3JkZXI6ICNmZmYgc29saWQgMXB4O1xyXG5cdFx0XHRcdC5saW5le1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAjZmZmIHNvbGlkIDFweDsgXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5hY3RpdmV7XHJcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAjRkY5OTAwIHNvbGlkIDFweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0LmFjdGl2ZXtcclxuXHRcdFx0XHRib3JkZXI6ICNGRjk5MDAgc29saWQgMnB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

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
/*!**********************************!*\
  !*** D:/readDemo/store/index.js ***!
  \**********************************/
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
/*!***************************!*\
  !*** D:/readDemo/App.vue ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 20);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDbUs7QUFDbkssZ0JBQWdCLHNMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!****************************************************!*\
  !*** D:/readDemo/App.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 21);\n/* harmony import */ var _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStoQixDQUFnQiw2bEJBQUcsRUFBQyIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vc29mdHdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9zb2Z0d2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uL3NvZnR3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/readDemo/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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