(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_dashboard_screens_kunstwerken_maakKunstwerk_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/basis/content.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/basis/content.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    title: {
      type: String,
      "default": ""
    }
  },
  name: "content",
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)({
    setTitle: 'aut/setTitle'
  })),
  mounted: function mounted() {
    this.setTitle(this.title);
  },
  beforeDestroy: function beforeDestroy() {
    this.setTitle('');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/screens/kunstwerken/maakKunstwerk.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basis_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basis/content */ "./resources/js/components/dashboard/basis/content.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "maakKunstwerk",
  data: function data() {
    return {
      forsale: false,
      saving: false,
      createArtist: false,
      createType: false,
      type_id: null,
      artist_id: null,
      artwork: new Form({
        name: "",
        type_id: null,
        artist_id: null,
        thumbnailurl: "",
        price: "",
        length: "",
        width: "",
        height: "",
        code: "",
        forsale: false
      }),
      item: {
        image: false
      },
      precode: '',
      code: '',
      notitle: false
    };
  },
  components: {
    appContent: _basis_content__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./resources/js/components/dashboard/basis/content.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/dashboard/basis/content.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _content_vue_vue_type_template_id_6c78e71c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.vue?vue&type=template&id=6c78e71c&scoped=true& */ "./resources/js/components/dashboard/basis/content.vue?vue&type=template&id=6c78e71c&scoped=true&");
/* harmony import */ var _content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/basis/content.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _content_vue_vue_type_template_id_6c78e71c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _content_vue_vue_type_template_id_6c78e71c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6c78e71c",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/basis/content.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/screens/kunstwerken/maakKunstwerk.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/dashboard/screens/kunstwerken/maak.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _maakKunstwerk_vue_vue_type_template_id_a0a7bad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maak.vue?vue&type=template&id=a0a7bad4&scoped=true& */ "./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=template&id=a0a7bad4&scoped=true&");
/* harmony import */ var _maakKunstwerk_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maak.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _maakKunstwerk_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _maakKunstwerk_vue_vue_type_template_id_a0a7bad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _maakKunstwerk_vue_vue_type_template_id_a0a7bad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a0a7bad4",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/screens/kunstwerken/maak.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/basis/content.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/dashboard/basis/content.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./content.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/basis/content.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./resources/js/components/dashboard/screens/kunstwerken/maakKunstwerk.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_maakKunstwerk_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./maak.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_maakKunstwerk_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./resources/js/components/dashboard/basis/content.vue?vue&type=template&id=6c78e71c&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/basis/content.vue?vue&type=template&id=6c78e71c&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_template_id_6c78e71c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_template_id_6c78e71c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_template_id_6c78e71c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./content.vue?vue&type=template&id=6c78e71c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/basis/content.vue?vue&type=template&id=6c78e71c&scoped=true&");


/***/ }),

/***/ "./resources/js/components/dashboard/screens/kunstwerken/maakKunstwerk.vue?vue&type=template&id=a0a7bad4&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=template&id=a0a7bad4&scoped=true& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_maakKunstwerk_vue_vue_type_template_id_a0a7bad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_maakKunstwerk_vue_vue_type_template_id_a0a7bad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_maakKunstwerk_vue_vue_type_template_id_a0a7bad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./maak.vue?vue&type=template&id=a0a7bad4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=template&id=a0a7bad4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/basis/content.vue?vue&type=template&id=6c78e71c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/basis/content.vue?vue&type=template&id=6c78e71c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { flat: "" } },
    [
      _c("v-toolbar", { attrs: { flat: "" } }, [_vm._t("toolbar")], 2),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-container",
            [_c("v-card", { attrs: { flat: "" } }, [_vm._t("text")], 2)],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/screens/kunstwerken/maakKunstwerk.vue?vue&type=template&id=a0a7bad4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=template&id=a0a7bad4&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "app-content",
    { attrs: { title: "Nieuw kunstwerk" } },
    [
      _c(
        "template",
        { slot: "toolbar" },
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-btn", { attrs: { text: "" } }, [_vm._v("Opslaan")]),
          _vm._v(" "),
          _c("v-btn", { attrs: { text: "" } }, [_vm._v("Annuleren")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "template",
        { slot: "content" },
        [
          _c(
            "app-content",
            [
              _c(
                "template",
                { slot: "toolbar" },
                [_c("v-toolbar-title", [_vm._v("Nieuw Kunstwerk")])],
                1
              ),
              _vm._v(" "),
              _c(
                "template",
                { attrs: { text: "" }, slot: "text" },
                [
                  _c(
                    "v-form",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-layout",
                            { attrs: { row: "", wrap: "" } },
                            [
                              _c(
                                "v-flex",
                                { attrs: { xs12: "", md3: "" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      error: _vm.artwork.hasError("name"),
                                      "error-messages": _vm.artwork.error(
                                        "name",
                                        "Titel"
                                      ),
                                      label: "Titel"
                                    },
                                    on: {
                                      focus: function($event) {
                                        return _vm.artwork.clearError("name")
                                      }
                                    },
                                    model: {
                                      value: _vm.artwork.name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.artwork, "name", $$v)
                                      },
                                      expression: "artwork.name"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs12: "", md3: "" } },
                                [
                                  _c("v-checkbox", {
                                    attrs: { label: "Zonder titel" },
                                    model: {
                                      value: _vm.notitle,
                                      callback: function($$v) {
                                        _vm.notitle = $$v
                                      },
                                      expression: "notitle"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                {
                                  attrs: { xs12: "", md5: "", "offset-md1": "" }
                                },
                                [
                                  _c(
                                    "v-layout",
                                    { attrs: { row: "" } },
                                    [
                                      _c(
                                        "v-flex",
                                        { attrs: { xs4: "" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              readonly: "",
                                              label: "code"
                                            },
                                            model: {
                                              value: _vm.precode,
                                              callback: function($$v) {
                                                _vm.precode = $$v
                                              },
                                              expression: "precode"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-flex",
                                        { attrs: { xs2: "" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: { readonly: "", value: "-" }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-flex",
                                        { attrs: { xs4: "" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              error: _vm.artwork.hasError(
                                                "code"
                                              ),
                                              "error-messages": _vm.artwork.error(
                                                "code"
                                              ),
                                              "append-icon":
                                                _vm.artist_id != null &&
                                                _vm.type_id != null
                                                  ? "refresh"
                                                  : "",
                                              type: "number"
                                            },
                                            on: {
                                              focus: function($event) {
                                                return _vm.artwork.clearError(
                                                  "code"
                                                )
                                              },
                                              "click:append": _vm.getCode
                                            },
                                            model: {
                                              value: _vm.code,
                                              callback: function($$v) {
                                                _vm.code = $$v
                                              },
                                              expression: "code"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-layout",
                            { attrs: { row: "", wrap: "" } },
                            [
                              _c(
                                "v-flex",
                                { attrs: { xs12: "", sm6: "" } },
                                [
                                  _c(
                                    "v-layout",
                                    { attrs: { row: "", wrap: "" } },
                                    [
                                      _c(
                                        "v-flex",
                                        {
                                          staticClass: "pr-2",
                                          attrs: { xs4: "" }
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "breedte in millimeter",
                                              error: _vm.artwork.hasError(
                                                "width"
                                              ),
                                              "error-messages": _vm.artwork.error(
                                                "width",
                                                "Breedte"
                                              )
                                            },
                                            on: {
                                              focus: function($event) {
                                                return _vm.artwork.clearError(
                                                  "width"
                                                )
                                              }
                                            },
                                            model: {
                                              value: _vm.artwork.width,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.artwork,
                                                  "width",
                                                  $$v
                                                )
                                              },
                                              expression: "artwork.width"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-flex",
                                        { attrs: { xs4: "" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "hoogte in millimeter",
                                              error: _vm.artwork.hasError(
                                                "height"
                                              ),
                                              "error-messages": _vm.artwork.error(
                                                "height",
                                                "Hoogte"
                                              )
                                            },
                                            on: {
                                              focus: function($event) {
                                                return _vm.artwork.clearError(
                                                  "height"
                                                )
                                              }
                                            },
                                            model: {
                                              value: _vm.artwork.height,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.artwork,
                                                  "height",
                                                  $$v
                                                )
                                              },
                                              expression: "artwork.height"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-flex",
                                        {
                                          staticClass: "pr-2",
                                          attrs: { xs4: "" }
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "diepte in millimeter",
                                              error: _vm.artwork.hasError(
                                                "length"
                                              ),
                                              "error-messages": _vm.artwork.error(
                                                "length",
                                                "Lengte"
                                              )
                                            },
                                            on: {
                                              focus: function($event) {
                                                return _vm.artwork.clearError(
                                                  "length"
                                                )
                                              }
                                            },
                                            model: {
                                              value: _vm.artwork.length,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.artwork,
                                                  "length",
                                                  $$v
                                                )
                                              },
                                              expression: "artwork.length"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-layout",
                                    { attrs: { row: "", wrap: "" } },
                                    [
                                      _c(
                                        "v-flex",
                                        { attrs: { xs4: "" } },
                                        [
                                          _c("v-checkbox", {
                                            attrs: { label: "te koop" },
                                            model: {
                                              value: _vm.artwork.forsale,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.artwork,
                                                  "forsale",
                                                  $$v
                                                )
                                              },
                                              expression: "artwork.forsale"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-flex",
                                        { attrs: { xs8: "" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Prijs",
                                              error: _vm.artwork.hasError(
                                                "price"
                                              ),
                                              "error-messages": _vm.artwork.error(
                                                "price",
                                                "Prijs"
                                              )
                                            },
                                            on: {
                                              focus: function($event) {
                                                return _vm.artwork.clearError(
                                                  "price"
                                                )
                                              }
                                            },
                                            model: {
                                              value: _vm.artwork.price,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.artwork,
                                                  "price",
                                                  $$v
                                                )
                                              },
                                              expression: "artwork.price"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { xs12: "" } },
                                    [
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.types,
                                          "item-text": "name",
                                          "item-value": "id",
                                          label: "Type",
                                          "prepend-icon": "add",
                                          error: _vm.artwork.hasError(
                                            "type_id"
                                          ),
                                          "error-messages": _vm.artwork.error(
                                            "type_id",
                                            "Type"
                                          )
                                        },
                                        on: { "click:prepend": _vm.addType },
                                        model: {
                                          value: _vm.type_id,
                                          callback: function($$v) {
                                            _vm.type_id = $$v
                                          },
                                          expression: "type_id"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { xs12: "" } },
                                    [
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.artists,
                                          "item-text": "name",
                                          "item-value": "id",
                                          label: "Artiest",
                                          "prepend-icon": "add",
                                          error: _vm.artwork.hasError(
                                            "artist_id"
                                          ),
                                          "error-messages": _vm.artwork.error(
                                            "artist_id",
                                            "Artiest"
                                          )
                                        },
                                        on: { "click:prepend": _vm.addArtist },
                                        model: {
                                          value: _vm.artist_id,
                                          callback: function($$v) {
                                            _vm.artist_id = $$v
                                          },
                                          expression: "artist_id"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    {
                                      staticClass: "mt-3",
                                      attrs: { "d-flex": "", xs6: "", sm6: "" }
                                    },
                                    [
                                      _c("input", {
                                        attrs: {
                                          type: "file",
                                          id: "Afbeelding"
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.processFile($event)
                                          }
                                        }
                                      })
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-flex", { attrs: { xs12: "", sm6: "" } }, [
                                _vm.item.image
                                  ? _c(
                                      "div",
                                      [
                                        _c("v-img", {
                                          attrs: {
                                            src: _vm.item.image,
                                            alt: "no image selected",
                                            height: "300px",
                                            contain: ""
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-item-group",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "", loading: _vm.saving },
                              on: { click: _vm.saveArtwork }
                            },
                            [_vm._v("Opslaan")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "" },
                              on: {
                                click: function($event) {
                                  return _vm.$router.push({
                                    name: "artworklist"
                                  })
                                }
                              }
                            },
                            [_vm._v("Terug")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("create-artist-dialog", {
                    attrs: { dialog: _vm.createArtist },
                    on: {
                      close: function($event) {
                        return _vm.artistCreated($event)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("create-type-dialog", {
                    attrs: { dialog: _vm.createType },
                    on: {
                      close: function($event) {
                        _vm.createType = false
                      }
                    }
                  })
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
