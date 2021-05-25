(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_dashboard_screens_kunstwerken_maak_vue"],{

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
    },
    toolbar: {
      type: Boolean,
      "default": true
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basis_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basis/content */ "./resources/js/components/dashboard/basis/content.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Form */ "./resources/js/Form.js");
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
  name: "maak",
  data: function data() {
    return {
      forsale: false,
      saving: false,
      createArtist: false,
      createType: false,
      type_id: null,
      artist_id: null,
      artwork: new _Form__WEBPACK_IMPORTED_MODULE_1__.Form({
        name: "test",
        type_id: null,
        artist_id: null,
        thumbnailurl: "",
        price: "",
        length: "1",
        width: "1",
        height: "1",
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
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    types: 'types/types',
    loading: 'types/loading',
    artists: 'artiesten/artiesten'
  })),
  watch: {
    type_id: function type_id() {
      this.artwork.type_id = this.type_id;

      if (this.type_id != null && this.artist_id != null) {
        this.getCode();
      }
    },
    artist_id: function artist_id() {
      this.artwork.artist_id = this.artist_id;

      if (this.type_id != null && this.artist_id != null) {
        this.getCode();
      }
    },
    notitle: function notitle() {
      if (this.notitle) {
        this.artwork.name = "";
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)({
    setTitle: 'aut/setTitle',
    getTypes: 'types/fetch',
    getArtists: 'artiesten/fetch',
    create: 'kunstwerken/create'
  })), {}, {
    createImage: function createImage(item, file) {
      var image = new Image();
      var reader = new FileReader();

      reader.onload = function (e) {
        item.image = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    removeImage: function removeImage(item) {
      item.image = false;
    },
    processFile: function processFile(event) {
      this.artwork.thumbnailurl = event.target.files[0];
      if (!this.artwork.thumbnailurl) return;
      this.createImage(this.item, this.artwork.thumbnailurl);
    },
    save: function save() {
      console.log('saving');
      this.saving = true;
      var formData = new FormData();
      this.notitle ? formData.append('name', 'Zonder titel') : formData.append('name', this.artwork.name);
      formData.append('thumbnailurl', this.artwork.thumbnailurl);
      formData.append('type_id', this.artwork.type_id);
      formData.append('artist_id', this.artwork.artist_id);
      formData.append('price', this.artwork.price);
      formData.append('width', this.artwork.width);
      formData.append('length', this.artwork.length);
      formData.append('height', this.artwork.height);
      formData.append('code', this.code);
      formData.append('forsale', this.artwork.forsale);
      this.create(formData);
      /*                this.$store.dispatch('createArtwork', formData).then(response => {
                          EventBus.$emit('message', {
                              component: 'notificationSnackbar',
                              message: 'Nieuw kunstwerk aangemaakt'
                          })
                           this.saving = false;
                          this.$router.push({name:'artworklist'})
                          // this.$router.push({name: 'artworkdetail', params: {id: response.data.data.id}})
                      }).catch(error => {
                          console.log(error.status)
                           this.saving = false
                           if (error.status == 422) {
                              this.artwork.setErrors(JSON.parse(error.response).errors)
                           }
                          else if(error.status == 500){
                           }
                           else {
                              console.log(error)
                              EventBus.$emit('message', {
                                  component: "notificationSnackbar",
                                  message: "Server error: " + JSON.parse(error.response).message
                              })
                          }
                            this.saving = false
                      })*/
    },
    getCode: function getCode() {
      var _this = this;

      axios.post('/api/artworks/code', {
        type_id: this.type_id,
        artist_id: this.artist_id
      }).then(function (response) {
        _this.code = response.data.code;
        _this.precode = response.data.precode;
      });
    }
  }),
  components: {
    appContent: _basis_content__WEBPACK_IMPORTED_MODULE_0__.default
  },
  mounted: function mounted() {
    this.setTitle('Nieuw Kunstwerk');
    this.getArtists();
    this.getTypes();
  },
  beforeDestroy: function beforeDestroy() {
    this.setTitle('');
  }
});

/***/ }),

/***/ "./resources/js/Errors.js":
/*!********************************!*\
  !*** ./resources/js/Errors.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Errors": () => (/* binding */ Errors)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Errors = /*#__PURE__*/function () {
  function Errors() {
    _classCallCheck(this, Errors);

    this.errors = {};
  }

  _createClass(Errors, [{
    key: "get",
    value: function get(field) {
      if (this.errors[field]) {
        return this.errors[field][0];
      }
    }
  }, {
    key: "record",
    value: function record(errors) {
      this.errors = errors;
    }
  }, {
    key: "clear",
    value: function clear(field) {
      if (field) {
        delete this.errors[field];
        return;
      }

      this.errors = {};
    }
  }, {
    key: "has",
    value: function has(field) {
      return this.errors.hasOwnProperty(field);
    }
  }, {
    key: "any",
    value: function any() {
      return Object.keys(this.errors).length > 0;
    }
  }]);

  return Errors;
}();

/***/ }),

/***/ "./resources/js/Form.js":
/*!******************************!*\
  !*** ./resources/js/Form.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors.js */ "./resources/js/Errors.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Form = /*#__PURE__*/function () {
  function Form(data) {
    _classCallCheck(this, Form);

    this.originalData = data;
    this.fields = [];

    for (var field in data) {
      this[field] = data[field];
      this.fields.push(field);
    }

    this._errors = new _Errors_js__WEBPACK_IMPORTED_MODULE_0__.Errors();
  }

  _createClass(Form, [{
    key: "data",
    value: function data() {
      var data = Object.assign({}, this);
      delete data.originalData;
      delete data._errors;
      delete data.fields;
      return data;
    }
  }, {
    key: "reset",
    value: function reset() {
      for (var field in this.originalData) {
        this[field] = "";
      }
    }
  }, {
    key: "set",
    value: function set(data) {
      for (var field in data) {
        if (this.hasOwnProperty(field)) {
          this[field] = data[field];
        }
      }
    }
  }, {
    key: "error",
    value: function error(field, label) {
      var message = this._errors.get(field);

      if (message != undefined && label != undefined) {
        return message.toString().replace(field, label);
      }

      return message;
    }
  }, {
    key: "setErrors",
    value: function setErrors(value) {
      this._errors.record(value);
    }
  }, {
    key: "clearErrors",
    value: function clearErrors() {
      this._errors.clear();
    }
  }, {
    key: "clearError",
    value: function clearError(field) {
      this._errors.clear(field);
    }
  }, {
    key: "hasError",
    value: function hasError(field) {
      return this._errors.has(field);
    }
  }, {
    key: "hasErrors",
    value: function hasErrors() {
      return this._errors.any();
    }
  }, {
    key: "onSuccess",
    value: function onSuccess(data) {
      this._errors.clear();

      this.reset();
    }
  }, {
    key: "onError",
    value: function onError(errors) {
      this._errors.record(errors);
    }
  }]);

  return Form;
}();

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

/***/ "./resources/js/components/dashboard/screens/kunstwerken/maak.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/dashboard/screens/kunstwerken/maak.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _maak_vue_vue_type_template_id_9c972e34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maak.vue?vue&type=template&id=9c972e34&scoped=true& */ "./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=template&id=9c972e34&scoped=true&");
/* harmony import */ var _maak_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maak.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _maak_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _maak_vue_vue_type_template_id_9c972e34_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _maak_vue_vue_type_template_id_9c972e34_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9c972e34",
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

/***/ "./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_maak_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./maak.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_maak_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=template&id=9c972e34&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=template&id=9c972e34&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_maak_vue_vue_type_template_id_9c972e34_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_maak_vue_vue_type_template_id_9c972e34_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_maak_vue_vue_type_template_id_9c972e34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./maak.vue?vue&type=template&id=9c972e34&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=template&id=9c972e34&scoped=true&");


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
      _vm.toolbar
        ? _c("v-toolbar", { attrs: { flat: "" } }, [_vm._t("toolbar")], 2)
        : _vm._e(),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=template&id=9c972e34&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/screens/kunstwerken/maak.vue?vue&type=template&id=9c972e34&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-card-text",
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
                        { attrs: { xs12: "", md5: "", "offset-md1": "" } },
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
                                    attrs: { readonly: "", label: "code" },
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
                                      error: _vm.artwork.hasError("code"),
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
                                        return _vm.artwork.clearError("code")
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
                                { staticClass: "pr-2", attrs: { xs4: "" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "breedte in millimeter",
                                      error: _vm.artwork.hasError("width"),
                                      "error-messages": _vm.artwork.error(
                                        "width",
                                        "Breedte"
                                      )
                                    },
                                    on: {
                                      focus: function($event) {
                                        return _vm.artwork.clearError("width")
                                      }
                                    },
                                    model: {
                                      value: _vm.artwork.width,
                                      callback: function($$v) {
                                        _vm.$set(_vm.artwork, "width", $$v)
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
                                      error: _vm.artwork.hasError("height"),
                                      "error-messages": _vm.artwork.error(
                                        "height",
                                        "Hoogte"
                                      )
                                    },
                                    on: {
                                      focus: function($event) {
                                        return _vm.artwork.clearError("height")
                                      }
                                    },
                                    model: {
                                      value: _vm.artwork.height,
                                      callback: function($$v) {
                                        _vm.$set(_vm.artwork, "height", $$v)
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
                                { staticClass: "pr-2", attrs: { xs4: "" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "diepte in millimeter",
                                      error: _vm.artwork.hasError("length"),
                                      "error-messages": _vm.artwork.error(
                                        "length",
                                        "Lengte"
                                      )
                                    },
                                    on: {
                                      focus: function($event) {
                                        return _vm.artwork.clearError("length")
                                      }
                                    },
                                    model: {
                                      value: _vm.artwork.length,
                                      callback: function($$v) {
                                        _vm.$set(_vm.artwork, "length", $$v)
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
                                        _vm.$set(_vm.artwork, "forsale", $$v)
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
                                      error: _vm.artwork.hasError("price"),
                                      "error-messages": _vm.artwork.error(
                                        "price",
                                        "Prijs"
                                      )
                                    },
                                    on: {
                                      focus: function($event) {
                                        return _vm.artwork.clearError("price")
                                      }
                                    },
                                    model: {
                                      value: _vm.artwork.price,
                                      callback: function($$v) {
                                        _vm.$set(_vm.artwork, "price", $$v)
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
                                  error: _vm.artwork.hasError("type_id"),
                                  "error-messages": _vm.artwork.error(
                                    "type_id",
                                    "Type"
                                  )
                                },
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
                                  "item-text": "fullname",
                                  "item-value": "id",
                                  label: "Artiest",
                                  error: _vm.artwork.hasError("artist_id"),
                                  "error-messages": _vm.artwork.error(
                                    "artist_id",
                                    "Artiest"
                                  )
                                },
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
                                attrs: { type: "file", id: "Afbeelding" },
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
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c("v-btn", { attrs: { outlined: "" }, on: { click: _vm.save } }, [
            _vm._v("Opslaan")
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);