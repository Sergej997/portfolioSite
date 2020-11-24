function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"], {
  /***/
  "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js ***!
    \********************************************************************/

  /*! exports provided: AbstractControl, AbstractControlDirective, AbstractFormGroupDirective, COMPOSITION_BUFFER_MODE, CheckboxControlValueAccessor, CheckboxRequiredValidator, ControlContainer, DefaultValueAccessor, EmailValidator, FormArray, FormArrayName, FormBuilder, FormControl, FormControlDirective, FormControlName, FormGroup, FormGroupDirective, FormGroupName, FormsModule, MaxLengthValidator, MinLengthValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgModel, NgModelGroup, NgSelectOption, NumberValueAccessor, PatternValidator, RadioControlValueAccessor, RangeValueAccessor, ReactiveFormsModule, RequiredValidator, SelectControlValueAccessor, SelectMultipleControlValueAccessor, VERSION, Validators, ɵInternalFormsSharedModule, ɵNgNoValidate, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_ba, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_d, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_y, ɵangular_packages_forms_forms_z */

  /***/
  function node_modulesAngularForms__ivy_ngcc__Fesm2015FormsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractControl", function () {
      return AbstractControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function () {
      return AbstractControlDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function () {
      return AbstractFormGroupDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function () {
      return COMPOSITION_BUFFER_MODE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function () {
      return CheckboxControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function () {
      return CheckboxRequiredValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlContainer", function () {
      return ControlContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function () {
      return DefaultValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailValidator", function () {
      return EmailValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormArray", function () {
      return FormArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormArrayName", function () {
      return FormArrayName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormBuilder", function () {
      return FormBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormControl", function () {
      return FormControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormControlDirective", function () {
      return FormControlDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormControlName", function () {
      return FormControlName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormGroup", function () {
      return FormGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function () {
      return FormGroupDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormGroupName", function () {
      return FormGroupName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsModule", function () {
      return FormsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function () {
      return MaxLengthValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function () {
      return MinLengthValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function () {
      return NG_ASYNC_VALIDATORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function () {
      return NG_VALIDATORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function () {
      return NG_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgControl", function () {
      return NgControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgControlStatus", function () {
      return NgControlStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function () {
      return NgControlStatusGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgForm", function () {
      return NgForm;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgModel", function () {
      return NgModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgModelGroup", function () {
      return NgModelGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSelectOption", function () {
      return NgSelectOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberValueAccessor", function () {
      return NumberValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatternValidator", function () {
      return PatternValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function () {
      return RadioControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RangeValueAccessor", function () {
      return RangeValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function () {
      return ReactiveFormsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequiredValidator", function () {
      return RequiredValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function () {
      return SelectControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function () {
      return SelectMultipleControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Validators", function () {
      return Validators;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵInternalFormsSharedModule", function () {
      return ɵInternalFormsSharedModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵNgNoValidate", function () {
      return ɵNgNoValidate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵNgSelectMultipleOption", function () {
      return ɵNgSelectMultipleOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function () {
      return SHARED_FORM_DIRECTIVES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function () {
      return TEMPLATE_DRIVEN_DIRECTIVES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function () {
      return CHECKBOX_REQUIRED_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function () {
      return EMAIL_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function () {
      return MIN_LENGTH_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function () {
      return MAX_LENGTH_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function () {
      return PATTERN_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function () {
      return REACTIVE_DRIVEN_DIRECTIVES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function () {
      return ɵInternalFormsSharedModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function () {
      return CHECKBOX_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function () {
      return DEFAULT_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function () {
      return AbstractControlStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function () {
      return ngControlStatusHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function () {
      return formDirectiveProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function () {
      return formControlBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function () {
      return modelGroupProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function () {
      return NUMBER_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function () {
      return RADIO_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function () {
      return RadioControlRegistry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function () {
      return RANGE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function () {
      return NG_MODEL_WITH_FORM_CONTROL_WARNING;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function () {
      return formControlBinding$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function () {
      return controlNameBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function () {
      return formDirectiveProvider$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function () {
      return formGroupNameProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function () {
      return formArrayNameProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function () {
      return SELECT_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function () {
      return SELECT_MULTIPLE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function () {
      return ɵNgSelectMultipleOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function () {
      return ɵNgNoValidate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function () {
      return REQUIRED_VALIDATOR;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @license Angular v9.1.12
     * (c) 2010-2020 Google LLC. https://angular.io/
     * License: MIT
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/control_value_accessor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@description
     * Defines an interface that acts as a bridge between the Angular forms API and a
     * native element in the DOM.
     *
     * Implement this interface to create a custom form control directive
     * that integrates with Angular forms.
     *
     * @see DefaultValueAccessor
     *
     * \@publicApi
     * @record
     */


    function ControlValueAccessor() {}

    if (false) {}
    /**
     * Used to provide a `ControlValueAccessor` for form controls.
     *
     * See `DefaultValueAccessor` for how to implement one.
     *
     * \@publicApi
     * @type {?}
     */


    var NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValueAccessor');
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/checkbox_value_accessor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var CHECKBOX_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return CheckboxControlValueAccessor;
      }),
      multi: true
    };
    /**
     * \@description
     * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
     * element.
     *
     * \@usageNotes
     *
     * ### Using a checkbox with a reactive form.
     *
     * The following example shows how to use a checkbox with a reactive form.
     *
     * ```ts
     * const rememberLoginControl = new FormControl();
     * ```
     *
     * ```
     * <input type="checkbox" [formControl]="rememberLoginControl">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var CheckboxControlValueAccessor = /*#__PURE__*/function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       */
      function CheckboxControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, CheckboxControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};
      }
      /**
       * Sets the "checked" property on the input element.
       *
       * @param {?} value The checked value
       * @return {?}
       */


      _createClass(CheckboxControlValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
        }
        /**
         * \@description
         * Registers a function called when the control value changes.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
      }]);

      return CheckboxControlValueAccessor;
    }();

    CheckboxControlValueAccessor.ɵfac = function CheckboxControlValueAccessor_Factory(t) {
      return new (t || CheckboxControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    CheckboxControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CheckboxControlValueAccessor,
      selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
      hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.checked);
          })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CHECKBOX_VALUE_ACCESSOR])]
    });
    /** @nocollapse */

    CheckboxControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxControlValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
          host: {
            '(change)': 'onChange($event.target.checked)',
            '(blur)': 'onTouched()'
          },
          providers: [CHECKBOX_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/default_value_accessor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return DefaultValueAccessor;
      }),
      multi: true
    };
    /**
     * We must check whether the agent is Android because composition events
     * behave differently between iOS and Android.
     * @return {?}
     */

    function _isAndroid() {
      /** @type {?} */
      var userAgent = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])() ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getUserAgent() : '';
      return /android (\d+)/.test(userAgent.toLowerCase());
    }
    /**
     * \@description
     * Provide this token to control if form directives buffer IME input until
     * the "compositionend" event occurs.
     * \@publicApi
     * @type {?}
     */


    var COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CompositionEventMode');
    /**
     * \@description
     * The default `ControlValueAccessor` for writing a value and listening to changes on input
     * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
     * `NgModel` directives.
     *
     * \@usageNotes
     *
     * ### Using the default value accessor
     *
     * The following example shows how to use an input element that activates the default value accessor
     * (in this case, a text field).
     *
     * ```ts
     * const firstNameControl = new FormControl();
     * ```
     *
     * ```
     * <input type="text" [formControl]="firstNameControl">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var DefaultValueAccessor = /*#__PURE__*/function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       * @param {?} _compositionMode
       */
      function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
        _classCallCheck(this, DefaultValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        /**
         * \@description
         * The registered callback function called when an input event occurs on the input element.
         */

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};
        /**
         * Whether the user is creating a composition string (IME events).
         */


        this._composing = false;

        if (this._compositionMode == null) {
          this._compositionMode = !_isAndroid();
        }
      }
      /**
       * Sets the "value" property on the input element.
       *
       * @param {?} value The checked value
       * @return {?}
       */


      _createClass(DefaultValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          /** @type {?} */
          var normalizedValue = value == null ? '' : value;

          this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        }
        /**
         * \@description
         * Registers a function called when the control value changes.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_handleInput",
        value: function _handleInput(value) {
          if (!this._compositionMode || this._compositionMode && !this._composing) {
            this.onChange(value);
          }
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_compositionStart",
        value: function _compositionStart() {
          this._composing = true;
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_compositionEnd",
        value: function _compositionEnd(value) {
          this._composing = false;
          this._compositionMode && this.onChange(value);
        }
      }]);

      return DefaultValueAccessor;
    }();

    DefaultValueAccessor.ɵfac = function DefaultValueAccessor_Factory(t) {
      return new (t || DefaultValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](COMPOSITION_BUFFER_MODE, 8));
    };

    DefaultValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultValueAccessor,
      selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
      hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
            return ctx._handleInput($event.target.value);
          })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
            return ctx._compositionStart();
          })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
            return ctx._compositionEnd($event.target.value);
          });
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([DEFAULT_VALUE_ACCESSOR])]
    });
    /** @nocollapse */

    DefaultValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [COMPOSITION_BUFFER_MODE]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
          // TODO: vsavkin replace the above selector with the one below it once
          // https://github.com/angular/angular/issues/3011 is implemented
          // selector: '[ngModel],[formControl],[formControlName]',
          host: {
            '(input)': '$any(this)._handleInput($event.target.value)',
            '(blur)': 'onTouched()',
            '(compositionstart)': '$any(this)._compositionStart()',
            '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
          },
          providers: [DEFAULT_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [COMPOSITION_BUFFER_MODE]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/abstract_control_directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * \@description
     * Base class for control directives.
     *
     * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
     *
     * \@publicApi
     * @abstract
     */


    var AbstractControlDirective = /*#__PURE__*/function () {
      function AbstractControlDirective() {
        _classCallCheck(this, AbstractControlDirective);
      }

      _createClass(AbstractControlDirective, [{
        key: "reset",

        /**
         * \@description
         * Resets the control with the provided value if the control is present.
         * @param {?=} value
         * @return {?}
         */
        value: function reset() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          if (this.control) this.control.reset(value);
        }
        /**
         * \@description
         * Reports whether the control with the given path has the error specified.
         *
         * \@usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * If no path is given, this method checks for the error on the current control.
         *
         * @param {?} errorCode The code of the error to check
         * @param {?=} path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @return {?} whether the given error is present in the control at the given path.
         *
         * If the control is not present, false is returned.
         */

      }, {
        key: "hasError",
        value: function hasError(errorCode, path) {
          return this.control ? this.control.hasError(errorCode, path) : false;
        }
        /**
         * \@description
         * Reports error data for the control with the given path.
         *
         * \@usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * @param {?} errorCode The code of the error to check
         * @param {?=} path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @return {?} error data for that particular error. If the control or error is not present,
         * null is returned.
         */

      }, {
        key: "getError",
        value: function getError(errorCode, path) {
          return this.control ? this.control.getError(errorCode, path) : null;
        }
      }, {
        key: "value",

        /**
         * \@description
         * Reports the value of the control if it is present, otherwise null.
         * @return {?}
         */
        get: function get() {
          return this.control ? this.control.value : null;
        }
        /**
         * \@description
         * Reports whether the control is valid. A control is considered valid if no
         * validation errors exist with the current value.
         * If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "valid",
        get: function get() {
          return this.control ? this.control.valid : null;
        }
        /**
         * \@description
         * Reports whether the control is invalid, meaning that an error exists in the input value.
         * If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "invalid",
        get: function get() {
          return this.control ? this.control.invalid : null;
        }
        /**
         * \@description
         * Reports whether a control is pending, meaning that that async validation is occurring and
         * errors are not yet available for the input value. If the control is not present, null is
         * returned.
         * @return {?}
         */

      }, {
        key: "pending",
        get: function get() {
          return this.control ? this.control.pending : null;
        }
        /**
         * \@description
         * Reports whether the control is disabled, meaning that the control is disabled
         * in the UI and is exempt from validation checks and excluded from aggregate
         * values of ancestor controls. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this.control ? this.control.disabled : null;
        }
        /**
         * \@description
         * Reports whether the control is enabled, meaning that the control is included in ancestor
         * calculations of validity or value. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "enabled",
        get: function get() {
          return this.control ? this.control.enabled : null;
        }
        /**
         * \@description
         * Reports the control's validation errors. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "errors",
        get: function get() {
          return this.control ? this.control.errors : null;
        }
        /**
         * \@description
         * Reports whether the control is pristine, meaning that the user has not yet changed
         * the value in the UI. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "pristine",
        get: function get() {
          return this.control ? this.control.pristine : null;
        }
        /**
         * \@description
         * Reports whether the control is dirty, meaning that the user has changed
         * the value in the UI. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "dirty",
        get: function get() {
          return this.control ? this.control.dirty : null;
        }
        /**
         * \@description
         * Reports whether the control is touched, meaning that the user has triggered
         * a `blur` event on it. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "touched",
        get: function get() {
          return this.control ? this.control.touched : null;
        }
        /**
         * \@description
         * Reports the validation status of the control. Possible values include:
         * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
         * If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "status",
        get: function get() {
          return this.control ? this.control.status : null;
        }
        /**
         * \@description
         * Reports whether the control is untouched, meaning that the user has not yet triggered
         * a `blur` event on it. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "untouched",
        get: function get() {
          return this.control ? this.control.untouched : null;
        }
        /**
         * \@description
         * Returns a multicasting observable that emits a validation status whenever it is
         * calculated for the control. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "statusChanges",
        get: function get() {
          return this.control ? this.control.statusChanges : null;
        }
        /**
         * \@description
         * Returns a multicasting observable of value changes for the control that emits every time the
         * value of the control changes in the UI or programmatically.
         * If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "valueChanges",
        get: function get() {
          return this.control ? this.control.valueChanges : null;
        }
        /**
         * \@description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         * @return {?}
         */

      }, {
        key: "path",
        get: function get() {
          return null;
        }
      }]);

      return AbstractControlDirective;
    }();

    AbstractControlDirective.ɵfac = function AbstractControlDirective_Factory(t) {
      return new (t || AbstractControlDirective)();
    };

    AbstractControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AbstractControlDirective
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/control_container.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@description
     * A base class for directives that contain multiple registered instances of `NgControl`.
     * Only used by the forms module.
     *
     * \@publicApi
     * @abstract
     */


    var ControlContainer = /*#__PURE__*/function (_AbstractControlDirec) {
      _inherits(ControlContainer, _AbstractControlDirec);

      var _super = _createSuper(ControlContainer);

      function ControlContainer() {
        _classCallCheck(this, ControlContainer);

        return _super.apply(this, arguments);
      }

      _createClass(ControlContainer, [{
        key: "formDirective",

        /**
         * \@description
         * The top-level form directive for the control.
         * @return {?}
         */
        get: function get() {
          return null;
        }
        /**
         * \@description
         * The path to this group.
         * @return {?}
         */

      }, {
        key: "path",
        get: function get() {
          return null;
        }
      }]);

      return ControlContainer;
    }(AbstractControlDirective);

    ControlContainer.ɵfac = function ControlContainer_Factory(t) {
      return ɵControlContainer_BaseFactory(t || ControlContainer);
    };

    ControlContainer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ControlContainer,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵControlContainer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ControlContainer);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/ng_control.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function unimplemented() {
      throw new Error('unimplemented');
    }
    /**
     * \@description
     * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
     * object to a DOM element.
     *
     * \@publicApi
     * @abstract
     */


    var NgControl = /*#__PURE__*/function (_AbstractControlDirec2) {
      _inherits(NgControl, _AbstractControlDirec2);

      var _super2 = _createSuper(NgControl);

      function NgControl() {
        var _this;

        _classCallCheck(this, NgControl);

        _this = _super2.apply(this, arguments);
        /**
         * \@description
         * The parent form for the control.
         *
         * \@internal
         */

        _this._parent = null;
        /**
         * \@description
         * The name for the control
         */

        _this.name = null;
        /**
         * \@description
         * The value accessor for the control
         */

        _this.valueAccessor = null;
        /**
         * \@description
         * The uncomposed array of synchronous validators for the control
         *
         * \@internal
         */

        _this._rawValidators = [];
        /**
         * \@description
         * The uncomposed array of async validators for the control
         *
         * \@internal
         */

        _this._rawAsyncValidators = [];
        return _this;
      }
      /**
       * \@description
       * The registered synchronous validator function for the control
       *
       * @throws An exception that this method is not implemented
       * @return {?}
       */


      _createClass(NgControl, [{
        key: "validator",
        get: function get() {
          return (
            /** @type {?} */
            unimplemented()
          );
        }
        /**
         * \@description
         * The registered async validator function for the control
         *
         * @throws An exception that this method is not implemented
         * @return {?}
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return (
            /** @type {?} */
            unimplemented()
          );
        }
      }]);

      return NgControl;
    }(AbstractControlDirective);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/ng_control_status.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AbstractControlStatus = /*#__PURE__*/function () {
      /**
       * @param {?} cd
       */
      function AbstractControlStatus(cd) {
        _classCallCheck(this, AbstractControlStatus);

        this._cd = cd;
      }
      /**
       * @return {?}
       */


      _createClass(AbstractControlStatus, [{
        key: "ngClassUntouched",
        get: function get() {
          return this._cd.control ? this._cd.control.untouched : false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngClassTouched",
        get: function get() {
          return this._cd.control ? this._cd.control.touched : false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngClassPristine",
        get: function get() {
          return this._cd.control ? this._cd.control.pristine : false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngClassDirty",
        get: function get() {
          return this._cd.control ? this._cd.control.dirty : false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngClassValid",
        get: function get() {
          return this._cd.control ? this._cd.control.valid : false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngClassInvalid",
        get: function get() {
          return this._cd.control ? this._cd.control.invalid : false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngClassPending",
        get: function get() {
          return this._cd.control ? this._cd.control.pending : false;
        }
      }]);

      return AbstractControlStatus;
    }();

    if (false) {}
    /** @type {?} */


    var ngControlStatusHost = {
      '[class.ng-untouched]': 'ngClassUntouched',
      '[class.ng-touched]': 'ngClassTouched',
      '[class.ng-pristine]': 'ngClassPristine',
      '[class.ng-dirty]': 'ngClassDirty',
      '[class.ng-valid]': 'ngClassValid',
      '[class.ng-invalid]': 'ngClassInvalid',
      '[class.ng-pending]': 'ngClassPending'
    };
    /**
     * \@description
     * Directive automatically applied to Angular form controls that sets CSS classes
     * based on control status.
     *
     * \@usageNotes
     *
     * ### CSS classes applied
     *
     * The following classes are applied as the properties become true:
     *
     * * ng-valid
     * * ng-invalid
     * * ng-pending
     * * ng-pristine
     * * ng-dirty
     * * ng-untouched
     * * ng-touched
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var NgControlStatus = /*#__PURE__*/function (_AbstractControlStatu) {
      _inherits(NgControlStatus, _AbstractControlStatu);

      var _super3 = _createSuper(NgControlStatus);

      /**
       * @param {?} cd
       */
      function NgControlStatus(cd) {
        _classCallCheck(this, NgControlStatus);

        return _super3.call(this, cd);
      }

      return NgControlStatus;
    }(AbstractControlStatus);

    NgControlStatus.ɵfac = function NgControlStatus_Factory(t) {
      return new (t || NgControlStatus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgControl, 2));
    };

    NgControlStatus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgControlStatus,
      selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
      hostVars: 14,
      hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-untouched", ctx.ngClassUntouched)("ng-touched", ctx.ngClassTouched)("ng-pristine", ctx.ngClassPristine)("ng-dirty", ctx.ngClassDirty)("ng-valid", ctx.ngClassValid)("ng-invalid", ctx.ngClassInvalid)("ng-pending", ctx.ngClassPending);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    NgControlStatus.ctorParameters = function () {
      return [{
        type: NgControl,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgControlStatus, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[formControlName],[ngModel],[formControl]',
          host: ngControlStatusHost
        }]
      }], function () {
        return [{
          type: NgControl,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      }, null);
    })();
    /**
     * \@description
     * Directive automatically applied to Angular form groups that sets CSS classes
     * based on control status (valid/invalid/dirty/etc).
     *
     * @see `NgControlStatus`
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */


    var NgControlStatusGroup = /*#__PURE__*/function (_AbstractControlStatu2) {
      _inherits(NgControlStatusGroup, _AbstractControlStatu2);

      var _super4 = _createSuper(NgControlStatusGroup);

      /**
       * @param {?} cd
       */
      function NgControlStatusGroup(cd) {
        _classCallCheck(this, NgControlStatusGroup);

        return _super4.call(this, cd);
      }

      return NgControlStatusGroup;
    }(AbstractControlStatus);

    NgControlStatusGroup.ɵfac = function NgControlStatusGroup_Factory(t) {
      return new (t || NgControlStatusGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 2));
    };

    NgControlStatusGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgControlStatusGroup,
      selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
      hostVars: 14,
      hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-untouched", ctx.ngClassUntouched)("ng-touched", ctx.ngClassTouched)("ng-pristine", ctx.ngClassPristine)("ng-dirty", ctx.ngClassDirty)("ng-valid", ctx.ngClassValid)("ng-invalid", ctx.ngClassInvalid)("ng-pending", ctx.ngClassPending);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    NgControlStatusGroup.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgControlStatusGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
          host: ngControlStatusHost
        }]
      }], function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/validators.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} value
     * @return {?}
     */


    function isEmptyInputValue(value) {
      // we don't check for string here so it also works with arrays
      return value == null || value.length === 0;
    }
    /**
     * \@description
     * An `InjectionToken` for registering additional synchronous validators used with
     * `AbstractControl`s.
     *
     * @see `NG_ASYNC_VALIDATORS`
     *
     * \@usageNotes
     *
     * ### Providing a custom validator
     *
     * The following example registers a custom validator directive. Adding the validator to the
     * existing collection of validators requires the `multi: true` option.
     *
     * ```typescript
     * \@Directive({
     *   selector: '[customValidator]',
     *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
     * })
     * class CustomValidatorDirective implements Validator {
     *   validate(control: AbstractControl): ValidationErrors | null {
     *     return { 'custom': true };
     *   }
     * }
     * ```
     *
     * \@publicApi
     * @type {?}
     */


    var NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValidators');
    /**
     * \@description
     * An `InjectionToken` for registering additional asynchronous validators used with
     * `AbstractControl`s.
     *
     * @see `NG_VALIDATORS`
     *
     * \@publicApi
     * @type {?}
     */

    var NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgAsyncValidators');
    /**
     * A regular expression that matches valid e-mail addresses.
     *
     * At a high level, this regexp matches e-mail addresses of the format `local-part\@tld`, where:
     * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
     *   punctuation symbols).
     * - `local-part` cannot begin or end with a period (`.`).
     * - `local-part` cannot be longer than 64 characters.
     * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
     *   `foo.com`.
     * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
     *   periods (`.`)).
     * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
     * - A `label` cannot be longer than 63 characters.
     * - The whole address cannot be longer than 254 characters.
     *
     * ## Implementation background
     *
     * This regexp was ported over from AngularJS (see there for git history):
     * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
     * It is based on the
     * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
     * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
     * lengths of different parts of the address). The main differences from the WHATWG version are:
     *   - Disallow `local-part` to begin or end with a period (`.`).
     *   - Disallow `local-part` length to exceed 64 characters.
     *   - Disallow total address length to exceed 254 characters.
     *
     * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
     * @type {?}
     */

    var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    /**
     * \@description
     * Provides a set of built-in validators that can be used by form controls.
     *
     * A validator is a function that processes a `FormControl` or collection of
     * controls and returns an error map or null. A null map means that validation has passed.
     *
     * @see [Form Validation](/guide/form-validation)
     *
     * \@publicApi
     */

    var Validators = /*#__PURE__*/function () {
      function Validators() {
        _classCallCheck(this, Validators);
      }

      _createClass(Validators, null, [{
        key: "min",

        /**
         * \@description
         * Validator that requires the control's value to be greater than or equal to the provided number.
         * The validator exists only as a function and not as a directive.
         *
         * \@usageNotes
         *
         * ### Validate against a minimum of 3
         *
         * ```typescript
         * const control = new FormControl(2, Validators.min(3));
         *
         * console.log(control.errors); // {min: {min: 3, actual: 2}}
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} min
         * @return {?} A validator function that returns an error map with the
         * `min` property if the validation check fails, otherwise `null`.
         *
         */
        value: function min(_min) {
          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              if (isEmptyInputValue(control.value) || isEmptyInputValue(_min)) {
                return null; // don't validate empty values to allow optional controls
              }
              /** @type {?} */


              var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
              // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min

              return !isNaN(value) && value < _min ? {
                'min': {
                  'min': _min,
                  'actual': control.value
                }
              } : null;
            }
          );
        }
        /**
         * \@description
         * Validator that requires the control's value to be less than or equal to the provided number.
         * The validator exists only as a function and not as a directive.
         *
         * \@usageNotes
         *
         * ### Validate against a maximum of 15
         *
         * ```typescript
         * const control = new FormControl(16, Validators.max(15));
         *
         * console.log(control.errors); // {max: {max: 15, actual: 16}}
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} max
         * @return {?} A validator function that returns an error map with the
         * `max` property if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "max",
        value: function max(_max) {
          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              if (isEmptyInputValue(control.value) || isEmptyInputValue(_max)) {
                return null; // don't validate empty values to allow optional controls
              }
              /** @type {?} */


              var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
              // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max

              return !isNaN(value) && value > _max ? {
                'max': {
                  'max': _max,
                  'actual': control.value
                }
              } : null;
            }
          );
        }
        /**
         * \@description
         * Validator that requires the control have a non-empty value.
         *
         * \@usageNotes
         *
         * ### Validate that the field is non-empty
         *
         * ```typescript
         * const control = new FormControl('', Validators.required);
         *
         * console.log(control.errors); // {required: true}
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} control
         * @return {?} An error map with the `required` property
         * if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "required",
        value: function required(control) {
          return isEmptyInputValue(control.value) ? {
            'required': true
          } : null;
        }
        /**
         * \@description
         * Validator that requires the control's value be true. This validator is commonly
         * used for required checkboxes.
         *
         * \@usageNotes
         *
         * ### Validate that the field value is true
         *
         * ```typescript
         * const control = new FormControl('', Validators.requiredTrue);
         *
         * console.log(control.errors); // {required: true}
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} control
         * @return {?} An error map that contains the `required` property
         * set to `true` if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "requiredTrue",
        value: function requiredTrue(control) {
          return control.value === true ? null : {
            'required': true
          };
        }
        /**
         * \@description
         * Validator that requires the control's value pass an email validation test.
         *
         * Tests the value using a [regular
         * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
         * pattern suitable for common usecases. The pattern is based on the definition of a valid email
         * address in the [WHATWG HTML
         * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
         * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
         * lengths of different parts of the address).
         *
         * The differences from the WHATWG version include:
         * - Disallow `local-part` (the part before the `\@` symbol) to begin or end with a period (`.`).
         * - Disallow `local-part` to be longer than 64 characters.
         * - Disallow the whole address to be longer than 254 characters.
         *
         * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
         * validate the value against a different pattern.
         *
         * \@usageNotes
         *
         * ### Validate that the field matches a valid email pattern
         *
         * ```typescript
         * const control = new FormControl('bad\@', Validators.email);
         *
         * console.log(control.errors); // {email: true}
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} control
         * @return {?} An error map with the `email` property
         * if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "email",
        value: function email(control) {
          if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
          }

          return EMAIL_REGEXP.test(control.value) ? null : {
            'email': true
          };
        }
        /**
         * \@description
         * Validator that requires the length of the control's value to be greater than or equal
         * to the provided minimum length. This validator is also provided by default if you use the
         * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
         * only for types that have a numeric `length` property, such as strings or arrays. The
         * `minLength` validator logic is also not invoked for values when their `length` property is 0
         * (for example in case of an empty string or an empty array), to support optional controls. You
         * can use the standard `required` validator if empty values should not be considered valid.
         *
         * \@usageNotes
         *
         * ### Validate that the field has a minimum of 3 characters
         *
         * ```typescript
         * const control = new FormControl('ng', Validators.minLength(3));
         *
         * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
         * ```
         *
         * ```html
         * <input minlength="5">
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} minLength
         * @return {?} A validator function that returns an error map with the
         * `minlength` if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "minLength",
        value: function minLength(_minLength) {
          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
              }
              /** @type {?} */


              var length = control.value ? control.value.length : 0;
              return length < _minLength ? {
                'minlength': {
                  'requiredLength': _minLength,
                  'actualLength': length
                }
              } : null;
            }
          );
        }
        /**
         * \@description
         * Validator that requires the length of the control's value to be less than or equal
         * to the provided maximum length. This validator is also provided by default if you use the
         * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
         * only for types that have a numeric `length` property, such as strings or arrays.
         *
         * \@usageNotes
         *
         * ### Validate that the field has maximum of 5 characters
         *
         * ```typescript
         * const control = new FormControl('Angular', Validators.maxLength(5));
         *
         * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
         * ```
         *
         * ```html
         * <input maxlength="5">
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} maxLength
         * @return {?} A validator function that returns an error map with the
         * `maxlength` property if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "maxLength",
        value: function maxLength(_maxLength) {
          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              /** @type {?} */
              var length = control.value ? control.value.length : 0;
              return length > _maxLength ? {
                'maxlength': {
                  'requiredLength': _maxLength,
                  'actualLength': length
                }
              } : null;
            }
          );
        }
        /**
         * \@description
         * Validator that requires the control's value to match a regex pattern. This validator is also
         * provided by default if you use the HTML5 `pattern` attribute.
         *
         * \@usageNotes
         *
         * ### Validate that the field only contains letters or spaces
         *
         * ```typescript
         * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
         *
         * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
         * ```
         *
         * ```html
         * <input pattern="[a-zA-Z ]*">
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} pattern A regular expression to be used as is to test the values, or a string.
         * If a string is passed, the `^` character is prepended and the `$` character is
         * appended to the provided string (if not already present), and the resulting regular
         * expression is used to test the values.
         *
         * @return {?} A validator function that returns an error map with the
         * `pattern` property if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "pattern",
        value: function pattern(_pattern) {
          if (!_pattern) return Validators.nullValidator;
          /** @type {?} */

          var regex;
          /** @type {?} */

          var regexStr;

          if (typeof _pattern === 'string') {
            regexStr = '';
            if (_pattern.charAt(0) !== '^') regexStr += '^';
            regexStr += _pattern;
            if (_pattern.charAt(_pattern.length - 1) !== '$') regexStr += '$';
            regex = new RegExp(regexStr);
          } else {
            regexStr = _pattern.toString();
            regex = _pattern;
          }

          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
              }
              /** @type {?} */


              var value = control.value;
              return regex.test(value) ? null : {
                'pattern': {
                  'requiredPattern': regexStr,
                  'actualValue': value
                }
              };
            }
          );
        }
        /**
         * \@description
         * Validator that performs no operation.
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "nullValidator",
        value: function nullValidator(control) {
          return null;
        }
        /**
         * @param {?} validators
         * @return {?}
         */

      }, {
        key: "compose",
        value: function compose(validators) {
          if (!validators) return null;
          /** @type {?} */

          var presentValidators =
          /** @type {?} */
          validators.filter(isPresent);
          if (presentValidators.length == 0) return null;
          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              return _mergeErrors(_executeValidators(control, presentValidators));
            }
          );
        }
        /**
         * \@description
         * Compose multiple async validators into a single function that returns the union
         * of the individual error objects for the provided control.
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} validators
         * @return {?} A validator function that returns an error map with the
         * merged error objects of the async validators if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "composeAsync",
        value: function composeAsync(validators) {
          if (!validators) return null;
          /** @type {?} */

          var presentValidators =
          /** @type {?} */
          validators.filter(isPresent);
          if (presentValidators.length == 0) return null;
          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              /** @type {?} */
              var observables = _executeAsyncValidators(control, presentValidators).map(toObservable);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_mergeErrors));
            }
          );
        }
      }]);

      return Validators;
    }();
    /**
     * @param {?} o
     * @return {?}
     */


    function isPresent(o) {
      return o != null;
    }
    /**
     * @param {?} r
     * @return {?}
     */


    function toObservable(r) {
      /** @type {?} */
      var obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;

      if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisObservable"])(obs)) {
        throw new Error("Expected validator to return Promise or Observable.");
      }

      return obs;
    }
    /**
     * @param {?} control
     * @param {?} validators
     * @return {?}
     */


    function _executeValidators(control, validators) {
      return validators.map(
      /**
      * @param {?} v
      * @return {?}
      */
      function (v) {
        return v(control);
      });
    }
    /**
     * @param {?} control
     * @param {?} validators
     * @return {?}
     */


    function _executeAsyncValidators(control, validators) {
      return validators.map(
      /**
      * @param {?} v
      * @return {?}
      */
      function (v) {
        return v(control);
      });
    }
    /**
     * @param {?} arrayOfErrors
     * @return {?}
     */


    function _mergeErrors(arrayOfErrors) {
      /** @type {?} */
      var res = {}; // Not using Array.reduce here due to a Chrome 80 bug
      // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

      arrayOfErrors.forEach(
      /**
      * @param {?} errors
      * @return {?}
      */
      function (errors) {
        res = errors != null ? Object.assign(Object.assign({},
        /** @type {?} */
        res), errors) :
        /** @type {?} */
        res;
      });
      return Object.keys(res).length === 0 ? null : res;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/normalize_validator.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @param {?} validator
     * @return {?}
     */


    function normalizeValidator(validator) {
      if (
      /** @type {?} */
      validator.validate) {
        return (
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            return (
              /** @type {?} */
              validator.validate(c)
            );
          }
        );
      } else {
        return (
          /** @type {?} */
          validator
        );
      }
    }
    /**
     * @param {?} validator
     * @return {?}
     */


    function normalizeAsyncValidator(validator) {
      if (
      /** @type {?} */
      validator.validate) {
        return (
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            return (
              /** @type {?} */
              validator.validate(c)
            );
          }
        );
      } else {
        return (
          /** @type {?} */
          validator
        );
      }
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/number_value_accessor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var NUMBER_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NumberValueAccessor;
      }),
      multi: true
    };
    /**
     * \@description
     * The `ControlValueAccessor` for writing a number value and listening to number input changes.
     * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
     * directives.
     *
     * \@usageNotes
     *
     * ### Using a number input with a reactive form.
     *
     * The following example shows how to use a number input with a reactive form.
     *
     * ```ts
     * const totalCountControl = new FormControl();
     * ```
     *
     * ```
     * <input type="number" [formControl]="totalCountControl">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var NumberValueAccessor = /*#__PURE__*/function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       */
      function NumberValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, NumberValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};
      }
      /**
       * Sets the "value" property on the input element.
       *
       * @param {?} value The checked value
       * @return {?}
       */


      _createClass(NumberValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          // The value needs to be normalized for IE9, otherwise it is set to 'null' when null

          /** @type {?} */
          var normalizedValue = value == null ? '' : value;

          this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        }
        /**
         * \@description
         * Registers a function called when the control value changes.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange =
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            fn(value == '' ? null : parseFloat(value));
          };
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
      }]);

      return NumberValueAccessor;
    }();

    NumberValueAccessor.ɵfac = function NumberValueAccessor_Factory(t) {
      return new (t || NumberValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    NumberValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NumberValueAccessor,
      selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
      hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NumberValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("input", function NumberValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NUMBER_VALUE_ACCESSOR])]
    });
    /** @nocollapse */

    NumberValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
          host: {
            '(change)': 'onChange($event.target.value)',
            '(input)': 'onChange($event.target.value)',
            '(blur)': 'onTouched()'
          },
          providers: [NUMBER_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/radio_control_value_accessor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var RADIO_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return RadioControlValueAccessor;
      }),
      multi: true
    };
    /**
     * \@description
     * Class used by Angular to track radio buttons. For internal use only.
     */

    var RadioControlRegistry = /*#__PURE__*/function () {
      function RadioControlRegistry() {
        _classCallCheck(this, RadioControlRegistry);

        this._accessors = [];
      }
      /**
       * \@description
       * Adds a control to the internal registry. For internal use only.
       * @param {?} control
       * @param {?} accessor
       * @return {?}
       */


      _createClass(RadioControlRegistry, [{
        key: "add",
        value: function add(control, accessor) {
          this._accessors.push([control, accessor]);
        }
        /**
         * \@description
         * Removes a control from the internal registry. For internal use only.
         * @param {?} accessor
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove(accessor) {
          for (var i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i][1] === accessor) {
              this._accessors.splice(i, 1);

              return;
            }
          }
        }
        /**
         * \@description
         * Selects a radio button. For internal use only.
         * @param {?} accessor
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(accessor) {
          var _this2 = this;

          this._accessors.forEach(
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            if (_this2._isSameGroup(c, accessor) && c[1] !== accessor) {
              c[1].fireUncheck(accessor.value);
            }
          });
        }
        /**
         * @private
         * @param {?} controlPair
         * @param {?} accessor
         * @return {?}
         */

      }, {
        key: "_isSameGroup",
        value: function _isSameGroup(controlPair, accessor) {
          if (!controlPair[0].control) return false;
          return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
        }
      }]);

      return RadioControlRegistry;
    }();

    RadioControlRegistry.ɵfac = function RadioControlRegistry_Factory(t) {
      return new (t || RadioControlRegistry)();
    };

    RadioControlRegistry.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RadioControlRegistry,
      factory: RadioControlRegistry.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioControlRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * \@description
     * The `ControlValueAccessor` for writing radio control values and listening to radio control
     * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
     * `NgModel` directives.
     *
     * \@usageNotes
     *
     * ### Using radio buttons with reactive form directives
     *
     * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
     * a reactive form, radio buttons in the same group should have the same `formControlName`.
     * Providing a `name` attribute is optional.
     *
     * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */


    var RadioControlValueAccessor = /*#__PURE__*/function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       * @param {?} _registry
       * @param {?} _injector
       */
      function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
        _classCallCheck(this, RadioControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        /**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange =
        /**
        * @return {?}
        */
        function () {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};
      }
      /**
       * \@description
       * A lifecycle method called when the directive is initialized. For internal use only.
       * @return {?}
       */


      _createClass(RadioControlValueAccessor, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._control = this._injector.get(NgControl);

          this._checkName();

          this._registry.add(this._control, this);
        }
        /**
         * \@description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._registry.remove(this);
        }
        /**
         * \@description
         * Sets the "checked" property value on the radio input element.
         *
         * @param {?} value The checked value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this._state = value === this.value;

          this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
        }
        /**
         * \@description
         * Registers a function called when the control value changes.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          var _this3 = this;

          this._fn = fn;

          this.onChange =
          /**
          * @return {?}
          */
          function () {
            fn(_this3.value);

            _this3._registry.select(_this3);
          };
        }
        /**
         * Sets the "value" on the radio input element and unchecks it.
         *
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "fireUncheck",
        value: function fireUncheck(value) {
          this.writeValue(value);
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkName",
        value: function _checkName() {
          if (this.name && this.formControlName && this.name !== this.formControlName) {
            this._throwNameError();
          }

          if (!this.name && this.formControlName) this.name = this.formControlName;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_throwNameError",
        value: function _throwNameError() {
          throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
        }
      }]);

      return RadioControlValueAccessor;
    }();

    RadioControlValueAccessor.ɵfac = function RadioControlValueAccessor_Factory(t) {
      return new (t || RadioControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RadioControlRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    RadioControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: RadioControlValueAccessor,
      selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
      hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RadioControlValueAccessor_change_HostBindingHandler() {
            return ctx.onChange();
          })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        name: "name",
        formControlName: "formControlName",
        value: "value"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RADIO_VALUE_ACCESSOR])]
    });
    /** @nocollapse */

    RadioControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: RadioControlRegistry
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }];
    };

    RadioControlValueAccessor.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formControlName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioControlValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
          host: {
            '(change)': 'onChange()',
            '(blur)': 'onTouched()'
          },
          providers: [RADIO_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: RadioControlRegistry
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        formControlName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/range_value_accessor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var RANGE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return RangeValueAccessor;
      }),
      multi: true
    };
    /**
     * \@description
     * The `ControlValueAccessor` for writing a range value and listening to range input changes.
     * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
     * directives.
     *
     * \@usageNotes
     *
     * ### Using a range input with a reactive form
     *
     * The following example shows how to use a range input with a reactive form.
     *
     * ```ts
     * const ageControl = new FormControl();
     * ```
     *
     * ```
     * <input type="range" [formControl]="ageControl">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var RangeValueAccessor = /*#__PURE__*/function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       */
      function RangeValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, RangeValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};
      }
      /**
       * Sets the "value" property on the input element.
       *
       * @param {?} value The checked value
       * @return {?}
       */


      _createClass(RangeValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
        }
        /**
         * \@description
         * Registers a function called when the control value changes.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange =
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            fn(value == '' ? null : parseFloat(value));
          };
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the range input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
      }]);

      return RangeValueAccessor;
    }();

    RangeValueAccessor.ɵfac = function RangeValueAccessor_Factory(t) {
      return new (t || RangeValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    RangeValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: RangeValueAccessor,
      selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
      hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RangeValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RANGE_VALUE_ACCESSOR])]
    });
    /** @nocollapse */

    RangeValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RangeValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
          host: {
            '(change)': 'onChange($event.target.value)',
            '(input)': 'onChange($event.target.value)',
            '(blur)': 'onTouched()'
          },
          providers: [RANGE_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/error_examples.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** @type {?} */


    var FormErrorExamples = {
      formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
      formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
      formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
      ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
      ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/reactive_errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ReactiveErrors = /*#__PURE__*/function () {
      function ReactiveErrors() {
        _classCallCheck(this, ReactiveErrors);
      }

      _createClass(ReactiveErrors, null, [{
        key: "controlParentException",

        /**
         * @return {?}
         */
        value: function controlParentException() {
          throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formControlName));
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngModelGroupException",
        value: function ngModelGroupException() {
          throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ".concat(FormErrorExamples.formGroupName, "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ").concat(FormErrorExamples.ngModelGroup));
        }
        /**
         * @return {?}
         */

      }, {
        key: "missingFormException",
        value: function missingFormException() {
          throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ".concat(FormErrorExamples.formControlName));
        }
        /**
         * @return {?}
         */

      }, {
        key: "groupParentException",
        value: function groupParentException() {
          throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formGroupName));
        }
        /**
         * @return {?}
         */

      }, {
        key: "arrayParentException",
        value: function arrayParentException() {
          throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        ".concat(FormErrorExamples.formArrayName));
        }
        /**
         * @return {?}
         */

      }, {
        key: "disabledAttrWarning",
        value: function disabledAttrWarning() {
          console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
        }
        /**
         * @param {?} directiveName
         * @return {?}
         */

      }, {
        key: "ngModelWarning",
        value: function ngModelWarning(directiveName) {
          console.warn("\n    It looks like you're using ngModel on the same form field as ".concat(directiveName, ". \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/").concat(directiveName === 'formControl' ? 'FormControlDirective' : 'FormControlName', "#use-with-ngmodel\n    "));
        }
      }]);

      return ReactiveErrors;
    }();
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/select_control_value_accessor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var SELECT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return SelectControlValueAccessor;
      }),
      multi: true
    };
    /**
     * @param {?} id
     * @param {?} value
     * @return {?}
     */

    function _buildValueString(id, value) {
      if (id == null) return "".concat(value);
      if (value && typeof value === 'object') value = 'Object';
      return "".concat(id, ": ").concat(value).slice(0, 50);
    }
    /**
     * @param {?} valueString
     * @return {?}
     */


    function _extractId(valueString) {
      return valueString.split(':')[0];
    }
    /**
     * \@description
     * The `ControlValueAccessor` for writing select control values and listening to select control
     * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
     * `NgModel` directives.
     *
     * \@usageNotes
     *
     * ### Using select controls in a reactive form
     *
     * The following examples show how to use a select control in a reactive form.
     *
     * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
     *
     * ### Using select controls in a template-driven form
     *
     * To use a select in a template-driven form, simply add an `ngModel` and a `name`
     * attribute to the main `<select>` tag.
     *
     * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
     *
     * ### Customizing option selection
     *
     * Angular uses object identity to select option. It's possible for the identities of items
     * to change while the data does not. This can happen, for example, if the items are produced
     * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
     * second response will produce objects with different identities.
     *
     * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
     * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
     * If `compareWith` is given, Angular selects option by the return value of the function.
     *
     * ```ts
     * const selectedCountriesControl = new FormControl();
     * ```
     *
     * ```
     * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
     *     <option *ngFor="let country of countries" [ngValue]="country">
     *         {{country.name}}
     *     </option>
     * </select>
     *
     * compareFn(c1: Country, c2: Country): boolean {
     *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
     * }
     * ```
     *
     * **Note:** We listen to the 'change' event because 'input' events aren't fired
     * for selects in Firefox and IE:
     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */


    var SelectControlValueAccessor = /*#__PURE__*/function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       */
      function SelectControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, SelectControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */

        this._optionMap = new Map();
        /**
         * \@internal
         */

        this._idCounter = 0;
        /**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};

        this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"];
      }
      /**
       * \@description
       * Tracks the option comparison algorithm for tracking identities when
       * checking for changes.
       * @param {?} fn
       * @return {?}
       */


      _createClass(SelectControlValueAccessor, [{
        key: "writeValue",

        /**
         * Sets the "value" property on the input element. The "selectedIndex"
         * property is also set if an ID is provided on the option element.
         *
         * @param {?} value The checked value
         * @return {?}
         */
        value: function writeValue(value) {
          this.value = value;
          /** @type {?} */

          var id = this._getOptionId(value);

          if (id == null) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
          }
          /** @type {?} */


          var valueString = _buildValueString(id, value);

          this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
        }
        /**
         * \@description
         * Registers a function called when the control value changes.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          var _this4 = this;

          this.onChange =
          /**
          * @param {?} valueString
          * @return {?}
          */
          function (valueString) {
            _this4.value = _this4._getOptionValue(valueString);
            fn(_this4.value);
          };
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the select input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_registerOption",
        value: function _registerOption() {
          return (this._idCounter++).toString();
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_getOptionId",
        value: function _getOptionId(value) {
          for (var _i = 0, _Array$from = Array.from(this._optionMap.keys()); _i < _Array$from.length; _i++) {
            var id = _Array$from[_i];
            if (this._compareWith(this._optionMap.get(id), value)) return id;
          }

          return null;
        }
        /**
         * \@internal
         * @param {?} valueString
         * @return {?}
         */

      }, {
        key: "_getOptionValue",
        value: function _getOptionValue(valueString) {
          /** @type {?} */
          var id = _extractId(valueString);

          return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
        }
      }, {
        key: "compareWith",
        set: function set(fn) {
          if (typeof fn !== 'function') {
            throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
          }

          this._compareWith = fn;
        }
      }]);

      return SelectControlValueAccessor;
    }();

    SelectControlValueAccessor.ɵfac = function SelectControlValueAccessor_Factory(t) {
      return new (t || SelectControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    SelectControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SelectControlValueAccessor,
      selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
      hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([SELECT_VALUE_ACCESSOR])]
    });
    /** @nocollapse */

    SelectControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    SelectControlValueAccessor.propDecorators = {
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectControlValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
          host: {
            '(change)': 'onChange($event.target.value)',
            '(blur)': 'onTouched()'
          },
          providers: [SELECT_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * \@description
     * Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * @see `SelectControlValueAccessor`
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */


    var NgSelectOption = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?} _renderer
       * @param {?} _select
       */
      function NgSelectOption(_element, _renderer, _select) {
        _classCallCheck(this, NgSelectOption);

        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) this.id = this._select._registerOption();
      }
      /**
       * \@description
       * Tracks the value bound to the option element. Unlike the value binding,
       * ngValue supports binding to objects.
       * @param {?} value
       * @return {?}
       */


      _createClass(NgSelectOption, [{
        key: "_setElementValue",

        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        value: function _setElementValue(value) {
          this._renderer.setProperty(this._element.nativeElement, 'value', value);
        }
        /**
         * \@description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._select) {
            this._select._optionMap["delete"](this.id);

            this._select.writeValue(this._select.value);
          }
        }
      }, {
        key: "ngValue",
        set: function set(value) {
          if (this._select == null) return;

          this._select._optionMap.set(this.id, value);

          this._setElementValue(_buildValueString(this.id, value));

          this._select.writeValue(this._select.value);
        }
        /**
         * \@description
         * Tracks simple string values bound to the option element.
         * For objects, use the `ngValue` input binding.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "value",
        set: function set(value) {
          this._setElementValue(value);

          if (this._select) this._select.writeValue(this._select.value);
        }
      }]);

      return NgSelectOption;
    }();

    NgSelectOption.ɵfac = function NgSelectOption_Factory(t) {
      return new (t || NgSelectOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SelectControlValueAccessor, 9));
    };

    NgSelectOption.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgSelectOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });
    /** @nocollapse */

    NgSelectOption.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: SelectControlValueAccessor,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }];
    };

    NgSelectOption.propDecorators = {
      ngValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngValue']
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['value']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectOption, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'option'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: SelectControlValueAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }];
      }, {
        ngValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngValue']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['value']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/select_multiple_control_value_accessor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var SELECT_MULTIPLE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return SelectMultipleControlValueAccessor;
      }),
      multi: true
    };
    /**
     * @param {?} id
     * @param {?} value
     * @return {?}
     */

    function _buildValueString$1(id, value) {
      if (id == null) return "".concat(value);
      if (typeof value === 'string') value = "'".concat(value, "'");
      if (value && typeof value === 'object') value = 'Object';
      return "".concat(id, ": ").concat(value).slice(0, 50);
    }
    /**
     * @param {?} valueString
     * @return {?}
     */


    function _extractId$1(valueString) {
      return valueString.split(':')[0];
    }
    /**
     * Mock interface for HTML Options
     * @record
     */


    function HTMLOption() {}

    if (false) {}
    /**
     * Mock interface for HTMLCollection
     * @abstract
     */


    var HTMLCollection = function HTMLCollection() {
      _classCallCheck(this, HTMLCollection);
    };

    if (false) {}
    /**
     * \@description
     * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select
     * control changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
     * `NgModel` directives.
     *
     * @see `SelectControlValueAccessor`
     *
     * \@usageNotes
     *
     * ### Using a multi-select control
     *
     * The follow example shows you how to use a multi-select control with a reactive form.
     *
     * ```ts
     * const countryControl = new FormControl();
     * ```
     *
     * ```
     * <select multiple name="countries" [formControl]="countryControl">
     *   <option *ngFor="let country of countries" [ngValue]="country">
     *     {{ country.name }}
     *   </option>
     * </select>
     * ```
     *
     * ### Customizing option selection
     *
     * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
     * See the `SelectControlValueAccessor` for usage.
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */


    var SelectMultipleControlValueAccessor = /*#__PURE__*/function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       */
      function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, SelectMultipleControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */

        this._optionMap = new Map();
        /**
         * \@internal
         */

        this._idCounter = 0;
        /**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};

        this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"];
      }
      /**
       * \@description
       * Tracks the option comparison algorithm for tracking identities when
       * checking for changes.
       * @param {?} fn
       * @return {?}
       */


      _createClass(SelectMultipleControlValueAccessor, [{
        key: "writeValue",

        /**
         * \@description
         * Sets the "value" property on one or of more
         * of the select's options.
         *
         * @param {?} value The value
         * @return {?}
         */
        value: function writeValue(value) {
          var _this5 = this;

          this.value = value;
          /** @type {?} */

          var optionSelectedStateSetter;

          if (Array.isArray(value)) {
            // convert values to ids

            /** @type {?} */
            var ids = value.map(
            /**
            * @param {?} v
            * @return {?}
            */
            function (v) {
              return _this5._getOptionId(v);
            });

            optionSelectedStateSetter =
            /**
            * @param {?} opt
            * @param {?} o
            * @return {?}
            */
            function optionSelectedStateSetter(opt, o) {
              opt._setSelected(ids.indexOf(o.toString()) > -1);
            };
          } else {
            optionSelectedStateSetter =
            /**
            * @param {?} opt
            * @param {?} o
            * @return {?}
            */
            function optionSelectedStateSetter(opt, o) {
              opt._setSelected(false);
            };
          }

          this._optionMap.forEach(optionSelectedStateSetter);
        }
        /**
         * \@description
         * Registers a function called when the control value changes
         * and writes an array of the selected options.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          var _this6 = this;

          this.onChange =
          /**
          * @param {?} _
          * @return {?}
          */
          function (_) {
            /** @type {?} */
            var selected = [];

            if (_.hasOwnProperty('selectedOptions')) {
              /** @type {?} */
              var options = _.selectedOptions;

              for (var i = 0; i < options.length; i++) {
                /** @type {?} */
                var opt = options.item(i);
                /** @type {?} */

                var val = _this6._getOptionValue(opt.value);

                selected.push(val);
              }
            } // Degrade on IE
            else {
                /** @type {?} */
                var _options =
                /** @type {?} */
                _.options;

                for (var _i2 = 0; _i2 < _options.length; _i2++) {
                  /** @type {?} */
                  var _opt = _options.item(_i2);

                  if (_opt.selected) {
                    /** @type {?} */
                    var _val = _this6._getOptionValue(_opt.value);

                    selected.push(_val);
                  }
                }
              }

            _this6.value = selected;
            fn(selected);
          };
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the select input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_registerOption",
        value: function _registerOption(value) {
          /** @type {?} */
          var id = (this._idCounter++).toString();

          this._optionMap.set(id, value);

          return id;
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_getOptionId",
        value: function _getOptionId(value) {
          for (var _i3 = 0, _Array$from2 = Array.from(this._optionMap.keys()); _i3 < _Array$from2.length; _i3++) {
            var id = _Array$from2[_i3];
            if (this._compareWith(
            /** @type {?} */
            this._optionMap.get(id)._value, value)) return id;
          }

          return null;
        }
        /**
         * \@internal
         * @param {?} valueString
         * @return {?}
         */

      }, {
        key: "_getOptionValue",
        value: function _getOptionValue(valueString) {
          /** @type {?} */
          var id = _extractId$1(valueString);

          return this._optionMap.has(id) ?
          /** @type {?} */
          this._optionMap.get(id)._value : valueString;
        }
      }, {
        key: "compareWith",
        set: function set(fn) {
          if (typeof fn !== 'function') {
            throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
          }

          this._compareWith = fn;
        }
      }]);

      return SelectMultipleControlValueAccessor;
    }();

    SelectMultipleControlValueAccessor.ɵfac = function SelectMultipleControlValueAccessor_Factory(t) {
      return new (t || SelectMultipleControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    SelectMultipleControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SelectMultipleControlValueAccessor,
      selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
      hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target);
          })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([SELECT_MULTIPLE_VALUE_ACCESSOR])]
    });
    /** @nocollapse */

    SelectMultipleControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    SelectMultipleControlValueAccessor.propDecorators = {
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectMultipleControlValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
          host: {
            '(change)': 'onChange($event.target)',
            '(blur)': 'onTouched()'
          },
          providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * \@description
     * Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * @see `SelectMultipleControlValueAccessor`
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */


    var ɵNgSelectMultipleOption = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?} _renderer
       * @param {?} _select
       */
      function ɵNgSelectMultipleOption(_element, _renderer, _select) {
        _classCallCheck(this, ɵNgSelectMultipleOption);

        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;

        if (this._select) {
          this.id = this._select._registerOption(this);
        }
      }
      /**
       * \@description
       * Tracks the value bound to the option element. Unlike the value binding,
       * ngValue supports binding to objects.
       * @param {?} value
       * @return {?}
       */


      _createClass(ɵNgSelectMultipleOption, [{
        key: "_setElementValue",

        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        value: function _setElementValue(value) {
          this._renderer.setProperty(this._element.nativeElement, 'value', value);
        }
        /**
         * \@internal
         * @param {?} selected
         * @return {?}
         */

      }, {
        key: "_setSelected",
        value: function _setSelected(selected) {
          this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
        }
        /**
         * \@description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._select) {
            this._select._optionMap["delete"](this.id);

            this._select.writeValue(this._select.value);
          }
        }
      }, {
        key: "ngValue",
        set: function set(value) {
          if (this._select == null) return;
          this._value = value;

          this._setElementValue(_buildValueString$1(this.id, value));

          this._select.writeValue(this._select.value);
        }
        /**
         * \@description
         * Tracks simple string values bound to the option element.
         * For objects, use the `ngValue` input binding.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "value",
        set: function set(value) {
          if (this._select) {
            this._value = value;

            this._setElementValue(_buildValueString$1(this.id, value));

            this._select.writeValue(this._select.value);
          } else {
            this._setElementValue(value);
          }
        }
      }]);

      return ɵNgSelectMultipleOption;
    }();

    ɵNgSelectMultipleOption.ɵfac = function ɵNgSelectMultipleOption_Factory(t) {
      return new (t || ɵNgSelectMultipleOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SelectMultipleControlValueAccessor, 9));
    };

    ɵNgSelectMultipleOption.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ɵNgSelectMultipleOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });
    /** @nocollapse */

    ɵNgSelectMultipleOption.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: SelectMultipleControlValueAccessor,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }];
    };

    ɵNgSelectMultipleOption.propDecorators = {
      ngValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngValue']
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['value']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ɵNgSelectMultipleOption, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'option'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: SelectMultipleControlValueAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }];
      }, {
        ngValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngValue']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['value']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/shared.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} name
     * @param {?} parent
     * @return {?}
     */


    function controlPath(name, parent) {
      return [].concat(_toConsumableArray(
      /** @type {?} */
      parent.path), [
      /** @type {?} */
      name]);
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function setUpControl(control, dir) {
      if (!control) _throwError(dir, 'Cannot find control with');
      if (!dir.valueAccessor) _throwError(dir, 'No value accessor for form control with');
      control.validator = Validators.compose([
      /** @type {?} */
      control.validator, dir.validator]);
      control.asyncValidator = Validators.composeAsync([
      /** @type {?} */
      control.asyncValidator, dir.asyncValidator]);

      /** @type {?} */
      dir.valueAccessor.writeValue(control.value);
      setUpViewChangePipeline(control, dir);
      setUpModelChangePipeline(control, dir);
      setUpBlurPipeline(control, dir);

      if (
      /** @type {?} */
      dir.valueAccessor.setDisabledState) {
        control.registerOnDisabledChange(
        /**
        * @param {?} isDisabled
        * @return {?}
        */
        function (isDisabled) {
          /** @type {?} */

          /** @type {?} */
          dir.valueAccessor.setDisabledState(isDisabled);
        });
      } // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4


      dir._rawValidators.forEach(
      /**
      * @param {?} validator
      * @return {?}
      */
      function (validator) {
        if (
        /** @type {?} */
        validator.registerOnValidatorChange)
        /** @type {?} */

        /** @type {?} */
        validator.registerOnValidatorChange(
        /**
        * @return {?}
        */
        function () {
          return control.updateValueAndValidity();
        });
      });

      dir._rawAsyncValidators.forEach(
      /**
      * @param {?} validator
      * @return {?}
      */
      function (validator) {
        if (
        /** @type {?} */
        validator.registerOnValidatorChange)
        /** @type {?} */

        /** @type {?} */
        validator.registerOnValidatorChange(
        /**
        * @return {?}
        */
        function () {
          return control.updateValueAndValidity();
        });
      });
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function cleanUpControl(control, dir) {
      /** @type {?} */
      dir.valueAccessor.registerOnChange(
      /**
      * @return {?}
      */
      function () {
        return _noControlError(dir);
      });

      /** @type {?} */
      dir.valueAccessor.registerOnTouched(
      /**
      * @return {?}
      */
      function () {
        return _noControlError(dir);
      });

      dir._rawValidators.forEach(
      /**
      * @param {?} validator
      * @return {?}
      */
      function (validator) {
        if (validator.registerOnValidatorChange) {
          validator.registerOnValidatorChange(null);
        }
      });

      dir._rawAsyncValidators.forEach(
      /**
      * @param {?} validator
      * @return {?}
      */
      function (validator) {
        if (validator.registerOnValidatorChange) {
          validator.registerOnValidatorChange(null);
        }
      });

      if (control) control._clearChangeFns();
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function setUpViewChangePipeline(control, dir) {
      /** @type {?} */
      dir.valueAccessor.registerOnChange(
      /**
      * @param {?} newValue
      * @return {?}
      */
      function (newValue) {
        control._pendingValue = newValue;
        control._pendingChange = true;
        control._pendingDirty = true;
        if (control.updateOn === 'change') updateControl(control, dir);
      });
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function setUpBlurPipeline(control, dir) {
      /** @type {?} */
      dir.valueAccessor.registerOnTouched(
      /**
      * @return {?}
      */
      function () {
        control._pendingTouched = true;
        if (control.updateOn === 'blur' && control._pendingChange) updateControl(control, dir);
        if (control.updateOn !== 'submit') control.markAsTouched();
      });
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function updateControl(control, dir) {
      if (control._pendingDirty) control.markAsDirty();
      control.setValue(control._pendingValue, {
        emitModelToViewChange: false
      });
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function setUpModelChangePipeline(control, dir) {
      control.registerOnChange(
      /**
      * @param {?} newValue
      * @param {?} emitModelEvent
      * @return {?}
      */
      function (newValue, emitModelEvent) {
        // control -> view

        /** @type {?} */
        dir.valueAccessor.writeValue(newValue); // control -> ngModel

        if (emitModelEvent) dir.viewToModelUpdate(newValue);
      });
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function setUpFormContainer(control, dir) {
      if (control == null) _throwError(dir, 'Cannot find control with');
      control.validator = Validators.compose([control.validator, dir.validator]);
      control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    }
    /**
     * @param {?} dir
     * @return {?}
     */


    function _noControlError(dir) {
      return _throwError(dir, 'There is no FormControl instance attached to form control element with');
    }
    /**
     * @param {?} dir
     * @param {?} message
     * @return {?}
     */


    function _throwError(dir, message) {
      /** @type {?} */
      var messageEnd;

      if (
      /** @type {?} */
      dir.path.length > 1) {
        messageEnd = "path: '".concat(
        /** @type {?} */
        dir.path.join(' -> '), "'");
      } else if (
      /** @type {?} */
      dir.path[0]) {
        messageEnd = "name: '".concat(dir.path, "'");
      } else {
        messageEnd = 'unspecified name attribute';
      }

      throw new Error("".concat(message, " ").concat(messageEnd));
    }
    /**
     * @param {?} validators
     * @return {?}
     */


    function composeValidators(validators) {
      return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
    }
    /**
     * @param {?} validators
     * @return {?}
     */


    function composeAsyncValidators(validators) {
      return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) : null;
    }
    /**
     * @param {?} changes
     * @param {?} viewModel
     * @return {?}
     */


    function isPropertyUpdated(changes, viewModel) {
      if (!changes.hasOwnProperty('model')) return false;
      /** @type {?} */

      var change = changes['model'];
      if (change.isFirstChange()) return true;
      return !Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"])(viewModel, change.currentValue);
    }
    /** @type {?} */


    var BUILTIN_ACCESSORS = [CheckboxControlValueAccessor, RangeValueAccessor, NumberValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor];
    /**
     * @param {?} valueAccessor
     * @return {?}
     */

    function isBuiltInAccessor(valueAccessor) {
      return BUILTIN_ACCESSORS.some(
      /**
      * @param {?} a
      * @return {?}
      */
      function (a) {
        return valueAccessor.constructor === a;
      });
    }
    /**
     * @param {?} form
     * @param {?} directives
     * @return {?}
     */


    function syncPendingControls(form, directives) {
      form._syncPendingControls();

      directives.forEach(
      /**
      * @param {?} dir
      * @return {?}
      */
      function (dir) {
        /** @type {?} */
        var control =
        /** @type {?} */
        dir.control;

        if (control.updateOn === 'submit' && control._pendingChange) {
          dir.viewToModelUpdate(control._pendingValue);
          control._pendingChange = false;
        }
      });
    } // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented

    /**
     * @param {?} dir
     * @param {?} valueAccessors
     * @return {?}
     */


    function selectValueAccessor(dir, valueAccessors) {
      if (!valueAccessors) return null;
      if (!Array.isArray(valueAccessors)) _throwError(dir, 'Value accessor was not provided as an array for form control with');
      /** @type {?} */

      var defaultAccessor = undefined;
      /** @type {?} */

      var builtinAccessor = undefined;
      /** @type {?} */

      var customAccessor = undefined;
      valueAccessors.forEach(
      /**
      * @param {?} v
      * @return {?}
      */
      function (v) {
        if (v.constructor === DefaultValueAccessor) {
          defaultAccessor = v;
        } else if (isBuiltInAccessor(v)) {
          if (builtinAccessor) _throwError(dir, 'More than one built-in value accessor matches form control with');
          builtinAccessor = v;
        } else {
          if (customAccessor) _throwError(dir, 'More than one custom value accessor matches form control with');
          customAccessor = v;
        }
      });
      if (customAccessor) return customAccessor;
      if (builtinAccessor) return builtinAccessor;
      if (defaultAccessor) return defaultAccessor;

      _throwError(dir, 'No valid value accessor for form control with');

      return null;
    }
    /**
     * @template T
     * @param {?} list
     * @param {?} el
     * @return {?}
     */


    function removeDir(list, el) {
      /** @type {?} */
      var index = list.indexOf(el);
      if (index > -1) list.splice(index, 1);
    } // TODO(kara): remove after deprecation period

    /**
     * @param {?} name
     * @param {?} type
     * @param {?} instance
     * @param {?} warningConfig
     * @return {?}
     */


    function _ngModelWarning(name, type, instance, warningConfig) {
      if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || warningConfig === 'never') return;

      if ((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce || warningConfig === 'always' && !instance._ngModelWarningSent) {
        ReactiveErrors.ngModelWarning(name);
        type._ngModelWarningSentOnce = true;
        instance._ngModelWarningSent = true;
      }
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Reports that a FormControl is valid, meaning that no errors exist in the input value.
     *
     * @see `status`
     * @type {?}
     */


    var VALID = 'VALID';
    /**
     * Reports that a FormControl is invalid, meaning that an error exists in the input value.
     *
     * @see `status`
     * @type {?}
     */

    var INVALID = 'INVALID';
    /**
     * Reports that a FormControl is pending, meaning that that async validation is occurring and
     * errors are not yet available for the input value.
     *
     * @see `markAsPending`
     * @see `status`
     * @type {?}
     */

    var PENDING = 'PENDING';
    /**
     * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
     * calculations of validity or value.
     *
     * @see `markAsDisabled`
     * @see `status`
     * @type {?}
     */

    var DISABLED = 'DISABLED';
    /**
     * @param {?} control
     * @param {?} path
     * @param {?} delimiter
     * @return {?}
     */

    function _find(control, path, delimiter) {
      if (path == null) return null;

      if (!Array.isArray(path)) {
        path = path.split(delimiter);
      }

      if (Array.isArray(path) && path.length === 0) return null; // Not using Array.reduce here due to a Chrome 80 bug
      // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

      /** @type {?} */

      var controlToFind = control;
      path.forEach(
      /**
      * @param {?} name
      * @return {?}
      */
      function (name) {
        if (controlToFind instanceof FormGroup) {
          controlToFind = controlToFind.controls.hasOwnProperty(
          /** @type {?} */
          name) ? controlToFind.controls[name] : null;
        } else if (controlToFind instanceof FormArray) {
          controlToFind = controlToFind.at(
          /** @type {?} */
          name) || null;
        } else {
          controlToFind = null;
        }
      });
      return controlToFind;
    }
    /**
     * @param {?=} validatorOrOpts
     * @return {?}
     */


    function coerceToValidator(validatorOrOpts) {
      /** @type {?} */
      var validator =
      /** @type {?} */
      isOptionsObj(validatorOrOpts) ?
      /** @type {?} */
      validatorOrOpts.validators : validatorOrOpts;
      return Array.isArray(validator) ? composeValidators(validator) : validator || null;
    }
    /**
     * @param {?=} asyncValidator
     * @param {?=} validatorOrOpts
     * @return {?}
     */


    function coerceToAsyncValidator(asyncValidator, validatorOrOpts) {
      /** @type {?} */
      var origAsyncValidator =
      /** @type {?} */
      isOptionsObj(validatorOrOpts) ?
      /** @type {?} */
      validatorOrOpts.asyncValidators : asyncValidator;
      return Array.isArray(origAsyncValidator) ? composeAsyncValidators(origAsyncValidator) : origAsyncValidator || null;
    }
    /**
     * Interface for options provided to an `AbstractControl`.
     *
     * \@publicApi
     * @record
     */


    function AbstractControlOptions() {}

    if (false) {}
    /**
     * @param {?=} validatorOrOpts
     * @return {?}
     */


    function isOptionsObj(validatorOrOpts) {
      return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === 'object';
    }
    /**
     * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
     *
     * It provides some of the shared behavior that all controls and groups of controls have, like
     * running validators, calculating status, and resetting state. It also defines the properties
     * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
     * instantiated directly.
     *
     * @see [Forms Guide](/guide/forms)
     * @see [Reactive Forms Guide](/guide/reactive-forms)
     * @see [Dynamic Forms Guide](/guide/dynamic-form)
     *
     * \@publicApi
     * @abstract
     */


    var AbstractControl = /*#__PURE__*/function () {
      /**
       * Initialize the AbstractControl instance.
       *
       * @param {?} validator The function that determines the synchronous validity of this control.
       * @param {?} asyncValidator The function that determines the asynchronous validity of this
       * control.
       */
      function AbstractControl(validator, asyncValidator) {
        _classCallCheck(this, AbstractControl);

        this.validator = validator;
        this.asyncValidator = asyncValidator;
        /**
         * \@internal
         */

        this._onCollectionChange =
        /**
        * @return {?}
        */
        function () {};
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * @return True if the user has not yet changed the value in the UI; compare `dirty`.
         * Programmatic changes to a control's value do not mark it dirty.
         */


        this.pristine = true;
        /**
         * True if the control is marked as `touched`.
         *
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */

        this.touched = false;
        /**
         * \@internal
         */

        this._onDisabledChange = [];
      }
      /**
       * The parent control.
       * @return {?}
       */


      _createClass(AbstractControl, [{
        key: "setValidators",

        /**
         * Sets the synchronous validators that are active on this control.  Calling
         * this overwrites any existing sync validators.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         * @param {?} newValidator
         * @return {?}
         */
        value: function setValidators(newValidator) {
          this.validator = coerceToValidator(newValidator);
        }
        /**
         * Sets the async validators that are active on this control. Calling this
         * overwrites any existing async validators.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         * @param {?} newValidator
         * @return {?}
         */

      }, {
        key: "setAsyncValidators",
        value: function setAsyncValidators(newValidator) {
          this.asyncValidator = coerceToAsyncValidator(newValidator);
        }
        /**
         * Empties out the sync validator list.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         * @return {?}
         */

      }, {
        key: "clearValidators",
        value: function clearValidators() {
          this.validator = null;
        }
        /**
         * Empties out the async validator list.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         * @return {?}
         */

      }, {
        key: "clearAsyncValidators",
        value: function clearAsyncValidators() {
          this.asyncValidator = null;
        }
        /**
         * Marks the control as `touched`. A control is touched by focus and
         * blur events that do not change the value.
         *
         * @see `markAsUntouched()` / `markAsDirty()` / `markAsPristine()`
         *
         * @param {?=} opts Configuration options that determine how the control propagates changes
         * and emits events after marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         * @return {?}
         */

      }, {
        key: "markAsTouched",
        value: function markAsTouched() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.touched = true;

          if (this._parent && !opts.onlySelf) {
            this._parent.markAsTouched(opts);
          }
        }
        /**
         * Marks the control and all its descendant controls as `touched`.
         * @see `markAsTouched()`
         * @return {?}
         */

      }, {
        key: "markAllAsTouched",
        value: function markAllAsTouched() {
          this.markAsTouched({
            onlySelf: true
          });

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.markAllAsTouched();
          });
        }
        /**
         * Marks the control as `untouched`.
         *
         * If the control has any children, also marks all children as `untouched`
         * and recalculates the `touched` status of all parent controls.
         *
         * @see `markAsTouched()` / `markAsDirty()` / `markAsPristine()`
         *
         * @param {?=} opts Configuration options that determine how the control propagates changes
         * and emits events after the marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         * @return {?}
         */

      }, {
        key: "markAsUntouched",
        value: function markAsUntouched() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.touched = false;
          this._pendingTouched = false;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            control.markAsUntouched({
              onlySelf: true
            });
          });

          if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
          }
        }
        /**
         * Marks the control as `dirty`. A control becomes dirty when
         * the control's value is changed through the UI; compare `markAsTouched`.
         *
         * @see `markAsTouched()` / `markAsUntouched()` / `markAsPristine()`
         *
         * @param {?=} opts Configuration options that determine how the control propagates changes
         * and emits events after marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         * @return {?}
         */

      }, {
        key: "markAsDirty",
        value: function markAsDirty() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.pristine = false;

          if (this._parent && !opts.onlySelf) {
            this._parent.markAsDirty(opts);
          }
        }
        /**
         * Marks the control as `pristine`.
         *
         * If the control has any children, marks all children as `pristine`,
         * and recalculates the `pristine` status of all parent
         * controls.
         *
         * @see `markAsTouched()` / `markAsUntouched()` / `markAsDirty()`
         *
         * @param {?=} opts Configuration options that determine how the control emits events after
         * marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         * @return {?}
         */

      }, {
        key: "markAsPristine",
        value: function markAsPristine() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.pristine = true;
          this._pendingDirty = false;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            control.markAsPristine({
              onlySelf: true
            });
          });

          if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
          }
        }
        /**
         * Marks the control as `pending`.
         *
         * A control is pending while the control performs async validation.
         *
         * @see {\@link AbstractControl.status}
         *
         * @param {?=} opts Configuration options that determine how the control propagates changes and
         * emits events after marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
         * observable emits an event with the latest status the control is marked pending.
         * When false, no events are emitted.
         *
         * @return {?}
         */

      }, {
        key: "markAsPending",
        value: function markAsPending() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.status = PENDING;

          if (opts.emitEvent !== false) {
            /** @type {?} */
            this.statusChanges.emit(this.status);
          }

          if (this._parent && !opts.onlySelf) {
            this._parent.markAsPending(opts);
          }
        }
        /**
         * Disables the control. This means the control is exempt from validation checks and
         * excluded from the aggregate value of any parent. Its status is `DISABLED`.
         *
         * If the control has children, all children are also disabled.
         *
         * @see {\@link AbstractControl.status}
         *
         * @param {?=} opts Configuration options that determine how the control propagates
         * changes and emits events after the control is disabled.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is disabled.
         * When false, no events are emitted.
         * @return {?}
         */

      }, {
        key: "disable",
        value: function disable() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          // If parent has been marked artificially dirty we don't want to re-calculate the
          // parent's dirtiness based on the children.

          /** @type {?} */
          var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

          /** @type {?} */
          this.status = DISABLED;

          /** @type {?} */
          this.errors = null;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            control.disable(Object.assign(Object.assign({}, opts), {
              onlySelf: true
            }));
          });

          this._updateValue();

          if (opts.emitEvent !== false) {
            /** @type {?} */
            this.valueChanges.emit(this.value);

            /** @type {?} */
            this.statusChanges.emit(this.status);
          }

          this._updateAncestors(Object.assign(Object.assign({}, opts), {
            skipPristineCheck: skipPristineCheck
          }));

          this._onDisabledChange.forEach(
          /**
          * @param {?} changeFn
          * @return {?}
          */
          function (changeFn) {
            return changeFn(true);
          });
        }
        /**
         * Enables the control. This means the control is included in validation checks and
         * the aggregate value of its parent. Its status recalculates based on its value and
         * its validators.
         *
         * By default, if the control has children, all children are enabled.
         *
         * @see {\@link AbstractControl.status}
         *
         * @param {?=} opts Configure options that control how the control propagates changes and
         * emits events when marked as untouched
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is enabled.
         * When false, no events are emitted.
         * @return {?}
         */

      }, {
        key: "enable",
        value: function enable() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          // If parent has been marked artificially dirty we don't want to re-calculate the
          // parent's dirtiness based on the children.

          /** @type {?} */
          var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

          /** @type {?} */
          this.status = VALID;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            control.enable(Object.assign(Object.assign({}, opts), {
              onlySelf: true
            }));
          });

          this.updateValueAndValidity({
            onlySelf: true,
            emitEvent: opts.emitEvent
          });

          this._updateAncestors(Object.assign(Object.assign({}, opts), {
            skipPristineCheck: skipPristineCheck
          }));

          this._onDisabledChange.forEach(
          /**
          * @param {?} changeFn
          * @return {?}
          */
          function (changeFn) {
            return changeFn(false);
          });
        }
        /**
         * @private
         * @param {?} opts
         * @return {?}
         */

      }, {
        key: "_updateAncestors",
        value: function _updateAncestors(opts) {
          if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);

            if (!opts.skipPristineCheck) {
              this._parent._updatePristine();
            }

            this._parent._updateTouched();
          }
        }
        /**
         * @param {?} parent Sets the parent of the control
         * @return {?}
         */

      }, {
        key: "setParent",
        value: function setParent(parent) {
          this._parent = parent;
        }
        /**
         * Recalculates the value and validation status of the control.
         *
         * By default, it also updates the value and validity of its ancestors.
         *
         * @param {?=} opts Configuration options determine how the control propagates changes and emits events
         * after updates and validity checks are applied.
         * * `onlySelf`: When true, only update this control. When false or not supplied,
         * update all direct ancestors. Default is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is updated.
         * When false, no events are emitted.
         * @return {?}
         */

      }, {
        key: "updateValueAndValidity",
        value: function updateValueAndValidity() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          this._setInitialStatus();

          this._updateValue();

          if (this.enabled) {
            this._cancelExistingSubscription();

            /** @type {?} */
            this.errors = this._runValidator();

            /** @type {?} */
            this.status = this._calculateStatus();

            if (this.status === VALID || this.status === PENDING) {
              this._runAsyncValidator(opts.emitEvent);
            }
          }

          if (opts.emitEvent !== false) {
            /** @type {?} */
            this.valueChanges.emit(this.value);

            /** @type {?} */
            this.statusChanges.emit(this.status);
          }

          if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
          }
        }
        /**
         * \@internal
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "_updateTreeValidity",
        value: function _updateTreeValidity() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            emitEvent: true
          };

          this._forEachChild(
          /**
          * @param {?} ctrl
          * @return {?}
          */
          function (ctrl) {
            return ctrl._updateTreeValidity(opts);
          });

          this.updateValueAndValidity({
            onlySelf: true,
            emitEvent: opts.emitEvent
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setInitialStatus",
        value: function _setInitialStatus() {
          /** @type {?} */
          this.status = this._allControlsDisabled() ? DISABLED : VALID;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_runValidator",
        value: function _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        /**
         * @private
         * @param {?=} emitEvent
         * @return {?}
         */

      }, {
        key: "_runAsyncValidator",
        value: function _runAsyncValidator(emitEvent) {
          var _this7 = this;

          if (this.asyncValidator) {
            /** @type {?} */
            this.status = PENDING;
            /** @type {?} */

            var obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription = obs.subscribe(
            /**
            * @param {?} errors
            * @return {?}
            */
            function (errors) {
              return _this7.setErrors(errors, {
                emitEvent: emitEvent
              });
            });
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_cancelExistingSubscription",
        value: function _cancelExistingSubscription() {
          if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
          }
        }
        /**
         * Sets errors on a form control when running validations manually, rather than automatically.
         *
         * Calling `setErrors` also updates the validity of the parent control.
         *
         * \@usageNotes
         *
         * ### Manually set the errors for a control
         *
         * ```
         * const login = new FormControl('someLogin');
         * login.setErrors({
         *   notUnique: true
         * });
         *
         * expect(login.valid).toEqual(false);
         * expect(login.errors).toEqual({ notUnique: true });
         *
         * login.setValue('someOtherLogin');
         *
         * expect(login.valid).toEqual(true);
         * ```
         * @param {?} errors
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "setErrors",
        value: function setErrors(errors) {
          var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          /** @type {?} */
          this.errors = errors;

          this._updateControlsErrors(opts.emitEvent !== false);
        }
        /**
         * Retrieves a child control given the control's name or path.
         *
         * \@usageNotes
         * ### Retrieve a nested control
         *
         * For example, to get a `name` control nested within a `person` sub-group:
         *
         * * `this.form.get('person.name');`
         *
         * -OR-
         *
         * * `this.form.get(['person', 'name']);`
         * @param {?} path A dot-delimited string or array of string/number values that define the path to the
         * control.
         *
         * @return {?}
         */

      }, {
        key: "get",
        value: function get(path) {
          return _find(this, path, '.');
        }
        /**
         * \@description
         * Reports error data for the control with the given path.
         *
         * \@usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * @param {?} errorCode The code of the error to check
         * @param {?=} path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @return {?} error data for that particular error. If the control or error is not present,
         * null is returned.
         */

      }, {
        key: "getError",
        value: function getError(errorCode, path) {
          /** @type {?} */
          var control = path ? this.get(path) : this;
          return control && control.errors ? control.errors[errorCode] : null;
        }
        /**
         * \@description
         * Reports whether the control with the given path has the error specified.
         *
         * \@usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * If no path is given, this method checks for the error on the current control.
         *
         * @param {?} errorCode The code of the error to check
         * @param {?=} path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @return {?} whether the given error is present in the control at the given path.
         *
         * If the control is not present, false is returned.
         */

      }, {
        key: "hasError",
        value: function hasError(errorCode, path) {
          return !!this.getError(errorCode, path);
        }
        /**
         * Retrieves the top-level ancestor of this control.
         * @return {?}
         */

      }, {
        key: "_updateControlsErrors",

        /**
         * \@internal
         * @param {?} emitEvent
         * @return {?}
         */
        value: function _updateControlsErrors(emitEvent) {
          /** @type {?} */
          this.status = this._calculateStatus();

          if (emitEvent) {
            /** @type {?} */
            this.statusChanges.emit(this.status);
          }

          if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
          }
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_initObservables",
        value: function _initObservables() {
          /** @type {?} */
          this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

          /** @type {?} */
          this.statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_calculateStatus",
        value: function _calculateStatus() {
          if (this._allControlsDisabled()) return DISABLED;
          if (this.errors) return INVALID;
          if (this._anyControlsHaveStatus(PENDING)) return PENDING;
          if (this._anyControlsHaveStatus(INVALID)) return INVALID;
          return VALID;
        }
        /**
         * \@internal
         * @param {?} status
         * @return {?}
         */

      }, {
        key: "_anyControlsHaveStatus",
        value: function _anyControlsHaveStatus(status) {
          return this._anyControls(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.status === status;
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_anyControlsDirty",
        value: function _anyControlsDirty() {
          return this._anyControls(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.dirty;
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_anyControlsTouched",
        value: function _anyControlsTouched() {
          return this._anyControls(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.touched;
          });
        }
        /**
         * \@internal
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "_updatePristine",
        value: function _updatePristine() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.pristine = !this._anyControlsDirty();

          if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
          }
        }
        /**
         * \@internal
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "_updateTouched",
        value: function _updateTouched() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.touched = this._anyControlsTouched();

          if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
          }
        }
        /**
         * \@internal
         * @param {?} formState
         * @return {?}
         */

      }, {
        key: "_isBoxedValue",
        value: function _isBoxedValue(formState) {
          return typeof formState === 'object' && formState !== null && Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
        }
        /**
         * \@internal
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_registerOnCollectionChange",
        value: function _registerOnCollectionChange(fn) {
          this._onCollectionChange = fn;
        }
        /**
         * \@internal
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "_setUpdateStrategy",
        value: function _setUpdateStrategy(opts) {
          if (isOptionsObj(opts) &&
          /** @type {?} */
          opts.updateOn != null) {
            this._updateOn =
            /** @type {?} */

            /** @type {?} */
            opts.updateOn;
          }
        }
        /**
         * Check to see if parent has been marked artificially dirty.
         *
         * \@internal
         * @private
         * @param {?=} onlySelf
         * @return {?}
         */

      }, {
        key: "_parentMarkedDirty",
        value: function _parentMarkedDirty(onlySelf) {
          /** @type {?} */
          var parentDirty = this._parent && this._parent.dirty;
          return !onlySelf && parentDirty && !this._parent._anyControlsDirty();
        }
      }, {
        key: "parent",
        get: function get() {
          return this._parent;
        }
        /**
         * A control is `valid` when its `status` is `VALID`.
         *
         * @see {\@link AbstractControl.status}
         *
         * @return {?} True if the control has passed all of its validation tests,
         * false otherwise.
         */

      }, {
        key: "valid",
        get: function get() {
          return this.status === VALID;
        }
        /**
         * A control is `invalid` when its `status` is `INVALID`.
         *
         * @see {\@link AbstractControl.status}
         *
         * @return {?} True if this control has failed one or more of its validation checks,
         * false otherwise.
         */

      }, {
        key: "invalid",
        get: function get() {
          return this.status === INVALID;
        }
        /**
         * A control is `pending` when its `status` is `PENDING`.
         *
         * @see {\@link AbstractControl.status}
         *
         * @return {?} True if this control is in the process of conducting a validation check,
         * false otherwise.
         */

      }, {
        key: "pending",
        get: function get() {
          return this.status == PENDING;
        }
        /**
         * A control is `disabled` when its `status` is `DISABLED`.
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         *
         * @see {\@link AbstractControl.status}
         *
         * @return {?} True if the control is disabled, false otherwise.
         */

      }, {
        key: "disabled",
        get: function get() {
          return this.status === DISABLED;
        }
        /**
         * A control is `enabled` as long as its `status` is not `DISABLED`.
         *
         * @see {\@link AbstractControl.status}
         *
         * @return {?} True if the control has any status other than 'DISABLED',
         * false if the status is 'DISABLED'.
         *
         */

      }, {
        key: "enabled",
        get: function get() {
          return this.status !== DISABLED;
        }
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * @return {?} True if the user has changed the value of this control in the UI; compare `pristine`.
         * Programmatic changes to a control's value do not mark it dirty.
         */

      }, {
        key: "dirty",
        get: function get() {
          return !this.pristine;
        }
        /**
         * True if the control has not been marked as touched
         *
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         * @return {?}
         */

      }, {
        key: "untouched",
        get: function get() {
          return !this.touched;
        }
        /**
         * Reports the update strategy of the `AbstractControl` (meaning
         * the event on which the control updates itself).
         * Possible values: `'change'` | `'blur'` | `'submit'`
         * Default value: `'change'`
         * @return {?}
         */

      }, {
        key: "updateOn",
        get: function get() {
          return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
        }
      }, {
        key: "root",
        get: function get() {
          /** @type {?} */
          var x = this;

          while (x._parent) {
            x = x._parent;
          }

          return x;
        }
      }]);

      return AbstractControl;
    }();

    if (false) {}
    /**
     * Tracks the value and validation status of an individual form control.
     *
     * This is one of the three fundamental building blocks of Angular forms, along with
     * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
     * implements most of the base functionality for accessing the value, validation status,
     * user interactions and events. See [usage examples below](#usage-notes).
     *
     * @see `AbstractControl`
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see [Usage Notes](#usage-notes)
     *
     * \@usageNotes
     *
     * ### Initializing Form Controls
     *
     * Instantiate a `FormControl`, with an initial value.
     *
     * ```ts
     * const control = new FormControl('some value');
     * console.log(control.value);     // 'some value'
     * ```
     *
     * The following example initializes the control with a form state object. The `value`
     * and `disabled` keys are required in this case.
     *
     * ```ts
     * const control = new FormControl({ value: 'n/a', disabled: true });
     * console.log(control.value);     // 'n/a'
     * console.log(control.status);    // 'DISABLED'
     * ```
     *
     * The following example initializes the control with a sync validator.
     *
     * ```ts
     * const control = new FormControl('', Validators.required);
     * console.log(control.value);      // ''
     * console.log(control.status);     // 'INVALID'
     * ```
     *
     * The following example initializes the control using an options object.
     *
     * ```ts
     * const control = new FormControl('', {
     *    validators: Validators.required,
     *    asyncValidators: myAsyncValidator
     * });
     * ```
     *
     * ### Configure the control to update on a blur event
     *
     * Set the `updateOn` option to `'blur'` to update on the blur `event`.
     *
     * ```ts
     * const control = new FormControl('', { updateOn: 'blur' });
     * ```
     *
     * ### Configure the control to update on a submit event
     *
     * Set the `updateOn` option to `'submit'` to update on a submit `event`.
     *
     * ```ts
     * const control = new FormControl('', { updateOn: 'submit' });
     * ```
     *
     * ### Reset the control back to an initial value
     *
     * You reset to a specific form state by passing through a standalone
     * value or a form state object that contains both a value and a disabled state
     * (these are the only two properties that cannot be calculated).
     *
     * ```ts
     * const control = new FormControl('Nancy');
     *
     * console.log(control.value); // 'Nancy'
     *
     * control.reset('Drew');
     *
     * console.log(control.value); // 'Drew'
     * ```
     *
     * ### Reset the control back to an initial value and disabled
     *
     * ```
     * const control = new FormControl('Nancy');
     *
     * console.log(control.value); // 'Nancy'
     * console.log(control.status); // 'VALID'
     *
     * control.reset({ value: 'Drew', disabled: true });
     *
     * console.log(control.value); // 'Drew'
     * console.log(control.status); // 'DISABLED'
     * ```
     *
     * \@publicApi
     */


    var FormControl = /*#__PURE__*/function (_AbstractControl) {
      _inherits(FormControl, _AbstractControl);

      var _super5 = _createSuper(FormControl);

      /**
       * Creates a new `FormControl` instance.
       *
       * @param {?=} formState Initializes the control with an initial value,
       * or an object that defines the initial value and disabled state.
       *
       * @param {?=} validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param {?=} asyncValidator A single async validator or array of async validator functions
       *
       */
      function FormControl() {
        var _this8;

        var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var validatorOrOpts = arguments.length > 1 ? arguments[1] : undefined;
        var asyncValidator = arguments.length > 2 ? arguments[2] : undefined;

        _classCallCheck(this, FormControl);

        _this8 = _super5.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        /**
         * \@internal
         */

        _this8._onChange = [];

        _this8._applyFormState(formState);

        _this8._setUpdateStrategy(validatorOrOpts);

        _this8.updateValueAndValidity({
          onlySelf: true,
          emitEvent: false
        });

        _this8._initObservables();

        return _this8;
      }
      /**
       * Sets a new value for the form control.
       *
       * @param {?} value The new value for the control.
       * @param {?=} options Configuration options that determine how the control propagates changes
       * and emits events when the value changes.
       * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
       * false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control value is updated.
       * When false, no events are emitted.
       * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
       * `onChange` event to
       * update the view.
       * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
       * `ngModelChange`
       * event to update the model.
       *
       * @return {?}
       */


      _createClass(FormControl, [{
        key: "setValue",
        value: function setValue(value) {
          var _this9 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          /** @type {?} */
          this.value = this._pendingValue = value;

          if (this._onChange.length && options.emitModelToViewChange !== false) {
            this._onChange.forEach(
            /**
            * @param {?} changeFn
            * @return {?}
            */
            function (changeFn) {
              return changeFn(_this9.value, options.emitViewToModelChange !== false);
            });
          }

          this.updateValueAndValidity(options);
        }
        /**
         * Patches the value of a control.
         *
         * This function is functionally the same as {\@link FormControl#setValue setValue} at this level.
         * It exists for symmetry with {\@link FormGroup#patchValue patchValue} on `FormGroups` and
         * `FormArrays`, where it does behave differently.
         *
         * @see `setValue` for options
         * @param {?} value
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "patchValue",
        value: function patchValue(value) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.setValue(value, options);
        }
        /**
         * Resets the form control, marking it `pristine` and `untouched`, and setting
         * the value to null.
         *
         * @param {?=} formState Resets the control with an initial value,
         * or an object that defines the initial value and disabled state.
         *
         * @param {?=} options Configuration options that determine how the control propagates changes
         * and emits events after the value changes.
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is reset.
         * When false, no events are emitted.
         *
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._applyFormState(formState);

          this.markAsPristine(options);
          this.markAsUntouched(options);
          this.setValue(this.value, options);
          this._pendingChange = false;
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_updateValue",
        value: function _updateValue() {}
        /**
         * \@internal
         * @param {?} condition
         * @return {?}
         */

      }, {
        key: "_anyControls",
        value: function _anyControls(condition) {
          return false;
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_allControlsDisabled",
        value: function _allControlsDisabled() {
          return this.disabled;
        }
        /**
         * Register a listener for change events.
         *
         * @param {?} fn The method that is called when the value changes
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange.push(fn);
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_clearChangeFns",
        value: function _clearChangeFns() {
          this._onChange = [];
          this._onDisabledChange = [];

          this._onCollectionChange =
          /**
          * @return {?}
          */
          function () {};
        }
        /**
         * Register a listener for disabled events.
         *
         * @param {?} fn The method that is called when the disabled status changes.
         * @return {?}
         */

      }, {
        key: "registerOnDisabledChange",
        value: function registerOnDisabledChange(fn) {
          this._onDisabledChange.push(fn);
        }
        /**
         * \@internal
         * @param {?} cb
         * @return {?}
         */

      }, {
        key: "_forEachChild",
        value: function _forEachChild(cb) {}
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_syncPendingControls",
        value: function _syncPendingControls() {
          if (this.updateOn === 'submit') {
            if (this._pendingDirty) this.markAsDirty();
            if (this._pendingTouched) this.markAsTouched();

            if (this._pendingChange) {
              this.setValue(this._pendingValue, {
                onlySelf: true,
                emitModelToViewChange: false
              });
              return true;
            }
          }

          return false;
        }
        /**
         * @private
         * @param {?} formState
         * @return {?}
         */

      }, {
        key: "_applyFormState",
        value: function _applyFormState(formState) {
          if (this._isBoxedValue(formState)) {
            /** @type {?} */
            this.value = this._pendingValue = formState.value;
            formState.disabled ? this.disable({
              onlySelf: true,
              emitEvent: false
            }) : this.enable({
              onlySelf: true,
              emitEvent: false
            });
          } else {
            /** @type {?} */
            this.value = this._pendingValue = formState;
          }
        }
      }]);

      return FormControl;
    }(AbstractControl);

    if (false) {}
    /**
     * Tracks the value and validity state of a group of `FormControl` instances.
     *
     * A `FormGroup` aggregates the values of each child `FormControl` into one object,
     * with each control name as the key.  It calculates its status by reducing the status values
     * of its children. For example, if one of the controls in a group is invalid, the entire
     * group becomes invalid.
     *
     * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
     * along with `FormControl` and `FormArray`.
     *
     * When instantiating a `FormGroup`, pass in a collection of child controls as the first
     * argument. The key for each child registers the name for the control.
     *
     * \@usageNotes
     *
     * ### Create a form group with 2 controls
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('Nancy', Validators.minLength(2)),
     *   last: new FormControl('Drew'),
     * });
     *
     * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
     * console.log(form.status);  // 'VALID'
     * ```
     *
     * ### Create a form group with a group-level validator
     *
     * You include group-level validators as the second arg, or group-level async
     * validators as the third arg. These come in handy when you want to perform validation
     * that considers the value of more than one child control.
     *
     * ```
     * const form = new FormGroup({
     *   password: new FormControl('', Validators.minLength(2)),
     *   passwordConfirm: new FormControl('', Validators.minLength(2)),
     * }, passwordMatchValidator);
     *
     *
     * function passwordMatchValidator(g: FormGroup) {
     *    return g.get('password').value === g.get('passwordConfirm').value
     *       ? null : {'mismatch': true};
     * }
     * ```
     *
     * Like `FormControl` instances, you choose to pass in
     * validators and async validators as part of an options object.
     *
     * ```
     * const form = new FormGroup({
     *   password: new FormControl('')
     *   passwordConfirm: new FormControl('')
     * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
     * ```
     *
     * ### Set the updateOn property for all controls in a form group
     *
     * The options object is used to set a default value for each child
     * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
     * group level, all child controls default to 'blur', unless the child
     * has explicitly specified a different `updateOn` value.
     *
     * ```ts
     * const c = new FormGroup({
     *   one: new FormControl()
     * }, { updateOn: 'blur' });
     * ```
     *
     * \@publicApi
     */


    var FormGroup = /*#__PURE__*/function (_AbstractControl2) {
      _inherits(FormGroup, _AbstractControl2);

      var _super6 = _createSuper(FormGroup);

      /**
       * Creates a new `FormGroup` instance.
       *
       * @param {?} controls A collection of child controls. The key for each child is the name
       * under which it is registered.
       *
       * @param {?=} validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param {?=} asyncValidator A single async validator or array of async validator functions
       *
       */
      function FormGroup(controls, validatorOrOpts, asyncValidator) {
        var _this10;

        _classCallCheck(this, FormGroup);

        _this10 = _super6.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        _this10.controls = controls;

        _this10._initObservables();

        _this10._setUpdateStrategy(validatorOrOpts);

        _this10._setUpControls();

        _this10.updateValueAndValidity({
          onlySelf: true,
          emitEvent: false
        });

        return _this10;
      }
      /**
       * Registers a control with the group's list of controls.
       *
       * This method does not update the value or validity of the control.
       * Use {\@link FormGroup#addControl addControl} instead.
       *
       * @param {?} name The control name to register in the collection
       * @param {?} control Provides the control for the given name
       * @return {?}
       */


      _createClass(FormGroup, [{
        key: "registerControl",
        value: function registerControl(name, control) {
          if (this.controls[name]) return this.controls[name];
          this.controls[name] = control;
          control.setParent(this);

          control._registerOnCollectionChange(this._onCollectionChange);

          return control;
        }
        /**
         * Add a control to this group.
         *
         * This method also updates the value and validity of the control.
         *
         * @param {?} name The control name to add to the collection
         * @param {?} control Provides the control for the given name
         * @return {?}
         */

      }, {
        key: "addControl",
        value: function addControl(name, control) {
          this.registerControl(name, control);
          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Remove a control from this group.
         *
         * @param {?} name The control name to remove from the collection
         * @return {?}
         */

      }, {
        key: "removeControl",
        value: function removeControl(name) {
          if (this.controls[name]) this.controls[name]._registerOnCollectionChange(
          /**
          * @return {?}
          */
          function () {});
          delete this.controls[name];
          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Replace an existing control.
         *
         * @param {?} name The control name to replace in the collection
         * @param {?} control Provides the control for the given name
         * @return {?}
         */

      }, {
        key: "setControl",
        value: function setControl(name, control) {
          if (this.controls[name]) this.controls[name]._registerOnCollectionChange(
          /**
          * @return {?}
          */
          function () {});
          delete this.controls[name];
          if (control) this.registerControl(name, control);
          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Check whether there is an enabled control with the given name in the group.
         *
         * Reports false for disabled controls. If you'd like to check for existence in the group
         * only, use {\@link AbstractControl#get get} instead.
         *
         * @param {?} controlName The control name to check for existence in the collection
         *
         * @return {?} false for disabled controls, true otherwise.
         */

      }, {
        key: "contains",
        value: function contains(controlName) {
          return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
        }
        /**
         * Sets the value of the `FormGroup`. It accepts an object that matches
         * the structure of the group, with control names as keys.
         *
         * \@usageNotes
         * ### Set the complete value for the form group
         *
         * ```
         * const form = new FormGroup({
         *   first: new FormControl(),
         *   last: new FormControl()
         * });
         *
         * console.log(form.value);   // {first: null, last: null}
         *
         * form.setValue({first: 'Nancy', last: 'Drew'});
         * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
         * ```
         *
         * @throws When strict checks fail, such as setting the value of a control
         * that doesn't exist or if you exclude a value of a control that does exist.
         *
         * @param {?} value The new value for the control that matches the structure of the group.
         * @param {?=} options Configuration options that determine how the control propagates changes
         * and emits events after the value changes.
         * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * @return {?}
         */

      }, {
        key: "setValue",
        value: function setValue(value) {
          var _this11 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._checkAllValuesPresent(value);

          Object.keys(value).forEach(
          /**
          * @param {?} name
          * @return {?}
          */
          function (name) {
            _this11._throwIfControlMissing(name);

            _this11.controls[name].setValue(value[name], {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Patches the value of the `FormGroup`. It accepts an object with control
         * names as keys, and does its best to match the values to the correct controls
         * in the group.
         *
         * It accepts both super-sets and sub-sets of the group without throwing an error.
         *
         * \@usageNotes
         * ### Patch the value for a form group
         *
         * ```
         * const form = new FormGroup({
         *    first: new FormControl(),
         *    last: new FormControl()
         * });
         * console.log(form.value);   // {first: null, last: null}
         *
         * form.patchValue({first: 'Nancy'});
         * console.log(form.value);   // {first: 'Nancy', last: null}
         * ```
         *
         * @param {?} value The object that matches the structure of the group.
         * @param {?=} options Configuration options that determine how the control propagates changes and
         * emits events after the value is patched.
         * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
         * true.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         * @return {?}
         */

      }, {
        key: "patchValue",
        value: function patchValue(value) {
          var _this12 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          Object.keys(value).forEach(
          /**
          * @param {?} name
          * @return {?}
          */
          function (name) {
            if (_this12.controls[name]) {
              _this12.controls[name].patchValue(value[name], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            }
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
         * the value of all descendants to null.
         *
         * You reset to a specific form state by passing in a map of states
         * that matches the structure of your form, with control names as keys. The state
         * is a standalone value or a form state object with both a value and a disabled
         * status.
         *
         * \@usageNotes
         *
         * ### Reset the form group values
         *
         * ```ts
         * const form = new FormGroup({
         *   first: new FormControl('first name'),
         *   last: new FormControl('last name')
         * });
         *
         * console.log(form.value);  // {first: 'first name', last: 'last name'}
         *
         * form.reset({ first: 'name', last: 'last name' });
         *
         * console.log(form.value);  // {first: 'name', last: 'last name'}
         * ```
         *
         * ### Reset the form group values and disabled status
         *
         * ```
         * const form = new FormGroup({
         *   first: new FormControl('first name'),
         *   last: new FormControl('last name')
         * });
         *
         * form.reset({
         *   first: {value: 'name', disabled: true},
         *   last: 'last'
         * });
         *
         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
         * console.log(this.form.get('first').status);  // 'DISABLED'
         * ```
         * @param {?=} value Resets the control with an initial value,
         * or an object that defines the initial value and disabled state.
         *
         * @param {?=} options Configuration options that determine how the control propagates changes
         * and emits events when the group is reset.
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is reset.
         * When false, no events are emitted.
         * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         *
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._forEachChild(
          /**
          * @param {?} control
          * @param {?} name
          * @return {?}
          */
          function (control, name) {
            control.reset(value[name], {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });

          this._updatePristine(options);

          this._updateTouched(options);

          this.updateValueAndValidity(options);
        }
        /**
         * The aggregate value of the `FormGroup`, including any disabled controls.
         *
         * Retrieves all values regardless of disabled status.
         * The `value` property is the best way to get the value of the group, because
         * it excludes disabled controls in the `FormGroup`.
         * @return {?}
         */

      }, {
        key: "getRawValue",
        value: function getRawValue() {
          return this._reduceChildren({},
          /**
          * @param {?} acc
          * @param {?} control
          * @param {?} name
          * @return {?}
          */
          function (acc, control, name) {
            acc[name] = control instanceof FormControl ? control.value :
            /** @type {?} */
            control.getRawValue();
            return acc;
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_syncPendingControls",
        value: function _syncPendingControls() {
          /** @type {?} */
          var subtreeUpdated = this._reduceChildren(false,
          /**
          * @param {?} updated
          * @param {?} child
          * @return {?}
          */
          function (updated, child) {
            return child._syncPendingControls() ? true : updated;
          });

          if (subtreeUpdated) this.updateValueAndValidity({
            onlySelf: true
          });
          return subtreeUpdated;
        }
        /**
         * \@internal
         * @param {?} name
         * @return {?}
         */

      }, {
        key: "_throwIfControlMissing",
        value: function _throwIfControlMissing(name) {
          if (!Object.keys(this.controls).length) {
            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
          }

          if (!this.controls[name]) {
            throw new Error("Cannot find form control with name: ".concat(name, "."));
          }
        }
        /**
         * \@internal
         * @param {?} cb
         * @return {?}
         */

      }, {
        key: "_forEachChild",
        value: function _forEachChild(cb) {
          var _this13 = this;

          Object.keys(this.controls).forEach(
          /**
          * @param {?} k
          * @return {?}
          */
          function (k) {
            return cb(_this13.controls[k], k);
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_setUpControls",
        value: function _setUpControls() {
          var _this14 = this;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            control.setParent(_this14);

            control._registerOnCollectionChange(_this14._onCollectionChange);
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_updateValue",
        value: function _updateValue() {
          /** @type {?} */
          this.value = this._reduceValue();
        }
        /**
         * \@internal
         * @param {?} condition
         * @return {?}
         */

      }, {
        key: "_anyControls",
        value: function _anyControls(condition) {
          var _this15 = this;

          /** @type {?} */
          var res = false;

          this._forEachChild(
          /**
          * @param {?} control
          * @param {?} name
          * @return {?}
          */
          function (control, name) {
            res = res || _this15.contains(name) && condition(control);
          });

          return res;
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_reduceValue",
        value: function _reduceValue() {
          var _this16 = this;

          return this._reduceChildren({},
          /**
          * @param {?} acc
          * @param {?} control
          * @param {?} name
          * @return {?}
          */
          function (acc, control, name) {
            if (control.enabled || _this16.disabled) {
              acc[name] = control.value;
            }

            return acc;
          });
        }
        /**
         * \@internal
         * @param {?} initValue
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_reduceChildren",
        value: function _reduceChildren(initValue, fn) {
          /** @type {?} */
          var res = initValue;

          this._forEachChild(
          /**
          * @param {?} control
          * @param {?} name
          * @return {?}
          */
          function (control, name) {
            res = fn(res, control, name);
          });

          return res;
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_allControlsDisabled",
        value: function _allControlsDisabled() {
          for (var _i4 = 0, _Object$keys = Object.keys(this.controls); _i4 < _Object$keys.length; _i4++) {
            var controlName = _Object$keys[_i4];

            if (this.controls[controlName].enabled) {
              return false;
            }
          }

          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_checkAllValuesPresent",
        value: function _checkAllValuesPresent(value) {
          this._forEachChild(
          /**
          * @param {?} control
          * @param {?} name
          * @return {?}
          */
          function (control, name) {
            if (value[name] === undefined) {
              throw new Error("Must supply a value for form control with name: '".concat(name, "'."));
            }
          });
        }
      }]);

      return FormGroup;
    }(AbstractControl);

    if (false) {}
    /**
     * Tracks the value and validity state of an array of `FormControl`,
     * `FormGroup` or `FormArray` instances.
     *
     * A `FormArray` aggregates the values of each child `FormControl` into an array.
     * It calculates its status by reducing the status values of its children. For example, if one of
     * the controls in a `FormArray` is invalid, the entire array becomes invalid.
     *
     * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
     * along with `FormControl` and `FormGroup`.
     *
     * \@usageNotes
     *
     * ### Create an array of form controls
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl('Nancy', Validators.minLength(2)),
     *   new FormControl('Drew'),
     * ]);
     *
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * console.log(arr.status);  // 'VALID'
     * ```
     *
     * ### Create a form array with array-level validators
     *
     * You include array-level validators and async validators. These come in handy
     * when you want to perform validation that considers the value of more than one child
     * control.
     *
     * The two types of validators are passed in separately as the second and third arg
     * respectively, or together as part of an options object.
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl('Nancy'),
     *   new FormControl('Drew')
     * ], {validators: myValidator, asyncValidators: myAsyncValidator});
     * ```
     *
     * ### Set the updateOn property for all controls in a form array
     *
     * The options object is used to set a default value for each child
     * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
     * array level, all child controls default to 'blur', unless the child
     * has explicitly specified a different `updateOn` value.
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl()
     * ], {updateOn: 'blur'});
     * ```
     *
     * ### Adding or removing controls from a form array
     *
     * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
     * in `FormArray` itself. These methods ensure the controls are properly tracked in the
     * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
     * the `FormArray` directly, as that result in strange and unexpected behavior such
     * as broken change detection.
     *
     * \@publicApi
     */


    var FormArray = /*#__PURE__*/function (_AbstractControl3) {
      _inherits(FormArray, _AbstractControl3);

      var _super7 = _createSuper(FormArray);

      /**
       * Creates a new `FormArray` instance.
       *
       * @param {?} controls An array of child controls. Each child control is given an index
       * where it is registered.
       *
       * @param {?=} validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param {?=} asyncValidator A single async validator or array of async validator functions
       *
       */
      function FormArray(controls, validatorOrOpts, asyncValidator) {
        var _this17;

        _classCallCheck(this, FormArray);

        _this17 = _super7.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        _this17.controls = controls;

        _this17._initObservables();

        _this17._setUpdateStrategy(validatorOrOpts);

        _this17._setUpControls();

        _this17.updateValueAndValidity({
          onlySelf: true,
          emitEvent: false
        });

        return _this17;
      }
      /**
       * Get the `AbstractControl` at the given `index` in the array.
       *
       * @param {?} index Index in the array to retrieve the control
       * @return {?}
       */


      _createClass(FormArray, [{
        key: "at",
        value: function at(index) {
          return this.controls[index];
        }
        /**
         * Insert a new `AbstractControl` at the end of the array.
         *
         * @param {?} control Form control to be inserted
         * @return {?}
         */

      }, {
        key: "push",
        value: function push(control) {
          this.controls.push(control);

          this._registerControl(control);

          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Insert a new `AbstractControl` at the given `index` in the array.
         *
         * @param {?} index Index in the array to insert the control
         * @param {?} control Form control to be inserted
         * @return {?}
         */

      }, {
        key: "insert",
        value: function insert(index, control) {
          this.controls.splice(index, 0, control);

          this._registerControl(control);

          this.updateValueAndValidity();
        }
        /**
         * Remove the control at the given `index` in the array.
         *
         * @param {?} index Index in the array to remove the control
         * @return {?}
         */

      }, {
        key: "removeAt",
        value: function removeAt(index) {
          if (this.controls[index]) this.controls[index]._registerOnCollectionChange(
          /**
          * @return {?}
          */
          function () {});
          this.controls.splice(index, 1);
          this.updateValueAndValidity();
        }
        /**
         * Replace an existing control.
         *
         * @param {?} index Index in the array to replace the control
         * @param {?} control The `AbstractControl` control to replace the existing control
         * @return {?}
         */

      }, {
        key: "setControl",
        value: function setControl(index, control) {
          if (this.controls[index]) this.controls[index]._registerOnCollectionChange(
          /**
          * @return {?}
          */
          function () {});
          this.controls.splice(index, 1);

          if (control) {
            this.controls.splice(index, 0, control);

            this._registerControl(control);
          }

          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Length of the control array.
         * @return {?}
         */

      }, {
        key: "setValue",

        /**
         * Sets the value of the `FormArray`. It accepts an array that matches
         * the structure of the control.
         *
         * This method performs strict checks, and throws an error if you try
         * to set the value of a control that doesn't exist or if you exclude the
         * value of a control.
         *
         * \@usageNotes
         * ### Set the values for the controls in the form array
         *
         * ```
         * const arr = new FormArray([
         *   new FormControl(),
         *   new FormControl()
         * ]);
         * console.log(arr.value);   // [null, null]
         *
         * arr.setValue(['Nancy', 'Drew']);
         * console.log(arr.value);   // ['Nancy', 'Drew']
         * ```
         *
         * @param {?} value Array of values for the controls
         * @param {?=} options Configure options that determine how the control propagates changes and
         * emits events after the value changes
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
         * is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         * @return {?}
         */
        value: function setValue(value) {
          var _this18 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._checkAllValuesPresent(value);

          value.forEach(
          /**
          * @param {?} newValue
          * @param {?} index
          * @return {?}
          */
          function (newValue, index) {
            _this18._throwIfControlMissing(index);

            _this18.at(index).setValue(newValue, {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Patches the value of the `FormArray`. It accepts an array that matches the
         * structure of the control, and does its best to match the values to the correct
         * controls in the group.
         *
         * It accepts both super-sets and sub-sets of the array without throwing an error.
         *
         * \@usageNotes
         * ### Patch the values for controls in a form array
         *
         * ```
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         * console.log(arr.value);   // [null, null]
         *
         * arr.patchValue(['Nancy']);
         * console.log(arr.value);   // ['Nancy', null]
         * ```
         *
         * @param {?} value Array of latest values for the controls
         * @param {?=} options Configure options that determine how the control propagates changes and
         * emits events after the value changes
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
         * is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         * @return {?}
         */

      }, {
        key: "patchValue",
        value: function patchValue(value) {
          var _this19 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          value.forEach(
          /**
          * @param {?} newValue
          * @param {?} index
          * @return {?}
          */
          function (newValue, index) {
            if (_this19.at(index)) {
              _this19.at(index).patchValue(newValue, {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            }
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
         * value of all descendants to null or null maps.
         *
         * You reset to a specific form state by passing in an array of states
         * that matches the structure of the control. The state is a standalone value
         * or a form state object with both a value and a disabled status.
         *
         * \@usageNotes
         * ### Reset the values in a form array
         *
         * ```ts
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         * arr.reset(['name', 'last name']);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * ```
         *
         * ### Reset the values in a form array and the disabled status for the first control
         *
         * ```
         * this.arr.reset([
         *   {value: 'name', disabled: true},
         *   'last'
         * ]);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * console.log(this.arr.get(0).status);  // 'DISABLED'
         * ```
         *
         * @param {?=} value Array of values for the controls
         * @param {?=} options Configure options that determine how the control propagates changes and
         * emits events after the value changes
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
         * is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is reset.
         * When false, no events are emitted.
         * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._forEachChild(
          /**
          * @param {?} control
          * @param {?} index
          * @return {?}
          */
          function (control, index) {
            control.reset(value[index], {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });

          this._updatePristine(options);

          this._updateTouched(options);

          this.updateValueAndValidity(options);
        }
        /**
         * The aggregate value of the array, including any disabled controls.
         *
         * Reports all values regardless of disabled status.
         * For enabled controls only, the `value` property is the best way to get the value of the array.
         * @return {?}
         */

      }, {
        key: "getRawValue",
        value: function getRawValue() {
          return this.controls.map(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control instanceof FormControl ? control.value :
            /** @type {?} */
            control.getRawValue();
          });
        }
        /**
         * Remove all controls in the `FormArray`.
         *
         * \@usageNotes
         * ### Remove all elements from a FormArray
         *
         * ```ts
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         * console.log(arr.length);  // 2
         *
         * arr.clear();
         * console.log(arr.length);  // 0
         * ```
         *
         * It's a simpler and more efficient alternative to removing all elements one by one:
         *
         * ```ts
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         *
         * while (arr.length) {
         *    arr.removeAt(0);
         * }
         * ```
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear() {
          if (this.controls.length < 1) return;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control._registerOnCollectionChange(
            /**
            * @return {?}
            */
            function () {});
          });

          this.controls.splice(0);
          this.updateValueAndValidity();
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_syncPendingControls",
        value: function _syncPendingControls() {
          /** @type {?} */
          var subtreeUpdated = this.controls.reduce(
          /**
          * @param {?} updated
          * @param {?} child
          * @return {?}
          */
          function (updated, child) {
            return child._syncPendingControls() ? true : updated;
          }, false);
          if (subtreeUpdated) this.updateValueAndValidity({
            onlySelf: true
          });
          return subtreeUpdated;
        }
        /**
         * \@internal
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_throwIfControlMissing",
        value: function _throwIfControlMissing(index) {
          if (!this.controls.length) {
            throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
          }

          if (!this.at(index)) {
            throw new Error("Cannot find form control at index ".concat(index));
          }
        }
        /**
         * \@internal
         * @param {?} cb
         * @return {?}
         */

      }, {
        key: "_forEachChild",
        value: function _forEachChild(cb) {
          this.controls.forEach(
          /**
          * @param {?} control
          * @param {?} index
          * @return {?}
          */
          function (control, index) {
            cb(control, index);
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_updateValue",
        value: function _updateValue() {
          var _this20 = this;

          /** @type {?} */
          this.value = this.controls.filter(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.enabled || _this20.disabled;
          }).map(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.value;
          });
        }
        /**
         * \@internal
         * @param {?} condition
         * @return {?}
         */

      }, {
        key: "_anyControls",
        value: function _anyControls(condition) {
          return this.controls.some(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.enabled && condition(control);
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_setUpControls",
        value: function _setUpControls() {
          var _this21 = this;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return _this21._registerControl(control);
          });
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_checkAllValuesPresent",
        value: function _checkAllValuesPresent(value) {
          this._forEachChild(
          /**
          * @param {?} control
          * @param {?} i
          * @return {?}
          */
          function (control, i) {
            if (value[i] === undefined) {
              throw new Error("Must supply a value for form control at index: ".concat(i, "."));
            }
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_allControlsDisabled",
        value: function _allControlsDisabled() {
          var _iterator = _createForOfIteratorHelper(this.controls),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var control = _step.value;
              if (control.enabled) return false;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return this.controls.length > 0 || this.disabled;
        }
        /**
         * @private
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "_registerControl",
        value: function _registerControl(control) {
          control.setParent(this);

          control._registerOnCollectionChange(this._onCollectionChange);
        }
      }, {
        key: "length",
        get: function get() {
          return this.controls.length;
        }
      }]);

      return FormArray;
    }(AbstractControl);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/ng_form.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var formDirectiveProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NgForm;
      })
    };

    var ɵ0 =
    /**
    * @return {?}
    */
    function ɵ0() {
      return Promise.resolve(null);
    };
    /** @type {?} */


    var resolvedPromise = ɵ0();
    /**
     * \@description
     * Creates a top-level `FormGroup` instance and binds it to a form
     * to track aggregate form value and validation status.
     *
     * As soon as you import the `FormsModule`, this directive becomes active by default on
     * all `<form>` tags.  You don't need to add a special selector.
     *
     * You optionally export the directive into a local template variable using `ngForm` as the key
     * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
     * `FormGroup` instance are duplicated on the directive itself, so a reference to it
     * gives you access to the aggregate value and validity status of the form, as well as
     * user interaction properties like `dirty` and `touched`.
     *
     * To register child controls with the form, use `NgModel` with a `name`
     * attribute. You may use `NgModelGroup` to create sub-groups within the form.
     *
     * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
     * triggered a form submission. The `ngSubmit` event emits the original form
     * submission event.
     *
     * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
     * To import the `FormsModule` but skip its usage in some forms,
     * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
     * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
     * unnecessary because the `<form>` tags are inert. In that case, you would
     * refrain from using the `formGroup` directive.
     *
     * \@usageNotes
     *
     * ### Listening for form submission
     *
     * The following example shows how to capture the form values from the "ngSubmit" event.
     *
     * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * ### Setting the update options
     *
     * The following example shows you how to change the "updateOn" option from its default using
     * ngFormOptions.
     *
     * ```html
     * <form [ngFormOptions]="{updateOn: 'blur'}">
     *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
     * </form>
     * ```
     *
     * ### Native DOM validation UI
     *
     * In order to prevent the native DOM form validation UI from interfering with Angular's form
     * validation, Angular automatically adds the `novalidate` attribute on any `<form>` whenever
     * `FormModule` or `ReactiveFormModule` are imported into the application.
     * If you want to explicitly enable native DOM validation UI with Angular forms, you can add the
     * `ngNativeValidate` attribute to the `<form>` element:
     *
     * ```html
     * <form ngNativeValidate>
     *   ...
     * </form>
     * ```
     *
     * \@ngModule FormsModule
     * \@publicApi
     */

    var NgForm = /*#__PURE__*/function (_ControlContainer) {
      _inherits(NgForm, _ControlContainer);

      var _super8 = _createSuper(NgForm);

      /**
       * @param {?} validators
       * @param {?} asyncValidators
       */
      function NgForm(validators, asyncValidators) {
        var _this22;

        _classCallCheck(this, NgForm);

        _this22 = _super8.call(this);
        /**
         * \@description
         * Returns whether the form submission has been triggered.
         */

        _this22.submitted = false;
        _this22._directives = [];
        /**
         * \@description
         * Event emitter for the "ngSubmit" event
         */

        _this22.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this22.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
        return _this22;
      }
      /**
       * \@description
       * Lifecycle method called after the view is initialized. For internal use only.
       * @return {?}
       */


      _createClass(NgForm, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._setUpdateStrategy();
        }
        /**
         * \@description
         * The directive instance.
         * @return {?}
         */

      }, {
        key: "addControl",

        /**
         * \@description
         * Method that sets up the control directive in this group, re-calculates its value
         * and validity, and adds the instance to the internal list of directives.
         *
         * @param {?} dir The `NgModel` directive instance.
         * @return {?}
         */
        value: function addControl(dir) {
          var _this23 = this;

          resolvedPromise.then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var container = _this23._findContainer(dir.path);

            /** @type {?} */
            dir.control =
            /** @type {?} */
            container.registerControl(dir.name, dir.control);
            setUpControl(dir.control, dir);
            dir.control.updateValueAndValidity({
              emitEvent: false
            });

            _this23._directives.push(dir);
          });
        }
        /**
         * \@description
         * Retrieves the `FormControl` instance from the provided `NgModel` directive.
         *
         * @param {?} dir The `NgModel` directive instance.
         * @return {?}
         */

      }, {
        key: "getControl",
        value: function getControl(dir) {
          return (
            /** @type {?} */
            this.form.get(dir.path)
          );
        }
        /**
         * \@description
         * Removes the `NgModel` instance from the internal list of directives
         *
         * @param {?} dir The `NgModel` directive instance.
         * @return {?}
         */

      }, {
        key: "removeControl",
        value: function removeControl(dir) {
          var _this24 = this;

          resolvedPromise.then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var container = _this24._findContainer(dir.path);

            if (container) {
              container.removeControl(dir.name);
            }

            removeDir(_this24._directives, dir);
          });
        }
        /**
         * \@description
         * Adds a new `NgModelGroup` directive instance to the form.
         *
         * @param {?} dir The `NgModelGroup` directive instance.
         * @return {?}
         */

      }, {
        key: "addFormGroup",
        value: function addFormGroup(dir) {
          var _this25 = this;

          resolvedPromise.then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var container = _this25._findContainer(dir.path);
            /** @type {?} */


            var group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({
              emitEvent: false
            });
          });
        }
        /**
         * \@description
         * Removes the `NgModelGroup` directive instance from the form.
         *
         * @param {?} dir The `NgModelGroup` directive instance.
         * @return {?}
         */

      }, {
        key: "removeFormGroup",
        value: function removeFormGroup(dir) {
          var _this26 = this;

          resolvedPromise.then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var container = _this26._findContainer(dir.path);

            if (container) {
              container.removeControl(dir.name);
            }
          });
        }
        /**
         * \@description
         * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
         *
         * @param {?} dir The `NgModelGroup` directive instance.
         * @return {?}
         */

      }, {
        key: "getFormGroup",
        value: function getFormGroup(dir) {
          return (
            /** @type {?} */
            this.form.get(dir.path)
          );
        }
        /**
         * Sets the new value for the provided `NgControl` directive.
         *
         * @param {?} dir The `NgControl` directive instance.
         * @param {?} value The new value for the directive's control.
         * @return {?}
         */

      }, {
        key: "updateModel",
        value: function updateModel(dir, value) {
          var _this27 = this;

          resolvedPromise.then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var ctrl =
            /** @type {?} */
            _this27.form.get(
            /** @type {?} */
            dir.path);

            ctrl.setValue(value);
          });
        }
        /**
         * \@description
         * Sets the value for this `FormGroup`.
         *
         * @param {?} value The new value
         * @return {?}
         */

      }, {
        key: "setValue",
        value: function setValue(value) {
          this.control.setValue(value);
        }
        /**
         * \@description
         * Method called when the "submit" event is triggered on the form.
         * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
         *
         * @param {?} $event The "submit" event object
         * @return {?}
         */

      }, {
        key: "onSubmit",
        value: function onSubmit($event) {
          /** @type {?} */
          this.submitted = true;
          syncPendingControls(this.form, this._directives);
          this.ngSubmit.emit($event);
          return false;
        }
        /**
         * \@description
         * Method called when the "reset" event is triggered on the form.
         * @return {?}
         */

      }, {
        key: "onReset",
        value: function onReset() {
          this.resetForm();
        }
        /**
         * \@description
         * Resets the form to an initial value and resets its submitted status.
         *
         * @param {?=} value The new value for the form.
         * @return {?}
         */

      }, {
        key: "resetForm",
        value: function resetForm() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          this.form.reset(value);

          /** @type {?} */
          this.submitted = false;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setUpdateStrategy",
        value: function _setUpdateStrategy() {
          if (this.options && this.options.updateOn != null) {
            this.form._updateOn = this.options.updateOn;
          }
        }
        /**
         * \@internal
         * @param {?} path
         * @return {?}
         */

      }, {
        key: "_findContainer",
        value: function _findContainer(path) {
          path.pop();
          return path.length ?
          /** @type {?} */
          this.form.get(path) : this.form;
        }
      }, {
        key: "formDirective",
        get: function get() {
          return this;
        }
        /**
         * \@description
         * The internal `FormGroup` instance.
         * @return {?}
         */

      }, {
        key: "control",
        get: function get() {
          return this.form;
        }
        /**
         * \@description
         * Returns an array representing the path to this group. Because this directive
         * always lives at the top level of a form, it is always an empty array.
         * @return {?}
         */

      }, {
        key: "path",
        get: function get() {
          return [];
        }
        /**
         * \@description
         * Returns a map of the controls in this group.
         * @return {?}
         */

      }, {
        key: "controls",
        get: function get() {
          return this.form.controls;
        }
      }]);

      return NgForm;
    }(ControlContainer);

    NgForm.ɵfac = function NgForm_Factory(t) {
      return new (t || NgForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
    };

    NgForm.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgForm,
      selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
      hostBindings: function NgForm_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function NgForm_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function NgForm_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        options: ["ngFormOptions", "options"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formDirectiveProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    NgForm.ctorParameters = function () {
      return [{
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    NgForm.propDecorators = {
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngFormOptions']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]',
          providers: [formDirectiveProvider],
          host: {
            '(submit)': 'onSubmit($event)',
            '(reset)': 'onReset()'
          },
          outputs: ['ngSubmit'],
          exportAs: 'ngForm'
        }]
      }], function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      }, {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngFormOptions']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/abstract_form_group_directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@description
     * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
     *
     * \@publicApi
     */


    var AbstractFormGroupDirective = /*#__PURE__*/function (_ControlContainer2) {
      _inherits(AbstractFormGroupDirective, _ControlContainer2);

      var _super9 = _createSuper(AbstractFormGroupDirective);

      function AbstractFormGroupDirective() {
        _classCallCheck(this, AbstractFormGroupDirective);

        return _super9.apply(this, arguments);
      }

      _createClass(AbstractFormGroupDirective, [{
        key: "ngOnInit",

        /**
         * \@description
         * An internal callback method triggered on the instance after the inputs are set.
         * Registers the group with its parent group.
         * @return {?}
         */
        value: function ngOnInit() {
          this._checkParentType();

          /** @type {?} */
          this.formDirective.addFormGroup(this);
        }
        /**
         * \@description
         * An internal callback method triggered before the instance is destroyed.
         * Removes the group from its parent group.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
          }
        }
        /**
         * \@description
         * The `FormGroup` bound to this directive.
         * @return {?}
         */

      }, {
        key: "_checkParentType",

        /**
         * \@internal
         * @return {?}
         */
        value: function _checkParentType() {}
      }, {
        key: "control",
        get: function get() {
          return (
            /** @type {?} */
            this.formDirective.getFormGroup(this)
          );
        }
        /**
         * \@description
         * The path to this group from the top-level directive.
         * @return {?}
         */

      }, {
        key: "path",
        get: function get() {
          return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
        }
        /**
         * \@description
         * The top-level directive for this group if present, otherwise null.
         * @return {?}
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ? this._parent.formDirective : null;
        }
        /**
         * \@description
         * The synchronous validators registered with this group.
         * @return {?}
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._validators);
        }
        /**
         * \@description
         * The async validators registered with this group.
         * @return {?}
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._asyncValidators);
        }
      }]);

      return AbstractFormGroupDirective;
    }(ControlContainer);

    AbstractFormGroupDirective.ɵfac = function AbstractFormGroupDirective_Factory(t) {
      return ɵAbstractFormGroupDirective_BaseFactory(t || AbstractFormGroupDirective);
    };

    AbstractFormGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AbstractFormGroupDirective,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵAbstractFormGroupDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AbstractFormGroupDirective);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/template_driven_errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TemplateDrivenErrors = /*#__PURE__*/function () {
      function TemplateDrivenErrors() {
        _classCallCheck(this, TemplateDrivenErrors);
      }

      _createClass(TemplateDrivenErrors, null, [{
        key: "modelParentException",

        /**
         * @return {?}
         */
        value: function modelParentException() {
          throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      ".concat(FormErrorExamples.formControlName, "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ").concat(FormErrorExamples.ngModelWithFormGroup));
        }
        /**
         * @return {?}
         */

      }, {
        key: "formGroupNameException",
        value: function formGroupNameException() {
          throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
        }
        /**
         * @return {?}
         */

      }, {
        key: "missingNameException",
        value: function missingNameException() {
          throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
        }
        /**
         * @return {?}
         */

      }, {
        key: "modelGroupParentException",
        value: function modelGroupParentException() {
          throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
        }
      }]);

      return TemplateDrivenErrors;
    }();
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/ng_model_group.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var modelGroupProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NgModelGroup;
      })
    };
    /**
     * \@description
     * Creates and binds a `FormGroup` instance to a DOM element.
     *
     * This directive can only be used as a child of `NgForm` (within `<form>` tags).
     *
     * Use this directive to validate a sub-group of your form separately from the
     * rest of your form, or if some values in your domain model make more sense
     * to consume together in a nested object.
     *
     * Provide a name for the sub-group and it will become the key
     * for the sub-group in the form's full value. If you need direct access, export the directive into
     * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
     *
     * \@usageNotes
     *
     * ### Consuming controls in a grouping
     *
     * The following example shows you how to combine controls together in a sub-group
     * of the form.
     *
     * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
     *
     * \@ngModule FormsModule
     * \@publicApi
     */

    var NgModelGroup = /*#__PURE__*/function (_AbstractFormGroupDir) {
      _inherits(NgModelGroup, _AbstractFormGroupDir);

      var _super10 = _createSuper(NgModelGroup);

      /**
       * @param {?} parent
       * @param {?} validators
       * @param {?} asyncValidators
       */
      function NgModelGroup(parent, validators, asyncValidators) {
        var _this28;

        _classCallCheck(this, NgModelGroup);

        _this28 = _super10.call(this);
        _this28._parent = parent;
        _this28._validators = validators;
        _this28._asyncValidators = asyncValidators;
        return _this28;
      }
      /**
       * \@internal
       * @return {?}
       */


      _createClass(NgModelGroup, [{
        key: "_checkParentType",
        value: function _checkParentType() {
          if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelGroupParentException();
          }
        }
      }]);

      return NgModelGroup;
    }(AbstractFormGroupDirective);

    NgModelGroup.ɵfac = function NgModelGroup_Factory(t) {
      return new (t || NgModelGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
    };

    NgModelGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgModelGroup,
      selectors: [["", "ngModelGroup", ""]],
      inputs: {
        name: ["ngModelGroup", "name"]
      },
      exportAs: ["ngModelGroup"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([modelGroupProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    NgModelGroup.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    NgModelGroup.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModelGroup']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgModelGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ngModelGroup]',
          providers: [modelGroupProvider],
          exportAs: 'ngModelGroup'
        }]
      }], function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModelGroup']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/ng_model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var formControlBinding = {
      provide: NgControl,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NgModel;
      })
    };

    var ɵ0$1 =
    /**
    * @return {?}
    */
    function ɵ0$1() {
      return Promise.resolve(null);
    };
    /**
     * `ngModel` forces an additional change detection run when its inputs change:
     * E.g.:
     * ```
     * <div>{{myModel.valid}}</div>
     * <input [(ngModel)]="myValue" #myModel="ngModel">
     * ```
     * I.e. `ngModel` can export itself on the element and then be used in the template.
     * Normally, this would result in expressions before the `input` that use the exported directive
     * to have and old value as they have been
     * dirty checked before. As this is a very common case for `ngModel`, we added this second change
     * detection run.
     *
     * Notes:
     * - this is just one extra run no matter how many `ngModel` have been changed.
     * - this is a general problem when using `exportAs` for directives!
     * @type {?}
     */


    var resolvedPromise$1 = ɵ0$1();
    /**
     * \@description
     * Creates a `FormControl` instance from a domain model and binds it
     * to a form control element.
     *
     * The `FormControl` instance tracks the value, user interaction, and
     * validation status of the control and keeps the view synced with the model. If used
     * within a parent form, the directive also registers itself with the form as a child
     * control.
     *
     * This directive is used by itself or as part of a larger form. Use the
     * `ngModel` selector to activate it.
     *
     * It accepts a domain model as an optional `Input`. If you have a one-way binding
     * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
     * class sets the value in the view. If you have a two-way binding with `[()]` syntax
     * (also known as 'banana-box syntax'), the value in the UI always syncs back to
     * the domain model in your class.
     *
     * To inspect the properties of the associated `FormControl` (like validity state),
     * export the directive into a local template variable using `ngModel` as the key (ex:
     * `#myVar="ngModel"`). You then access the control using the directive's `control` property, but
     * most properties used (like `valid` and `dirty`) fall through to the control anyway for direct
     * access. See a full list of properties directly available in `AbstractControlDirective`.
     *
     * @see `RadioControlValueAccessor`
     * @see `SelectControlValueAccessor`
     *
     * \@usageNotes
     *
     * ### Using ngModel on a standalone control
     *
     * The following examples show a simple standalone control using `ngModel`:
     *
     * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
     *
     * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
     * so that the control can be registered with the parent form under that name.
     *
     * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
     * as the parent form syncs the value for you. You access its properties by exporting it into a
     * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
     * needed on form submission.
     *
     * If you do need to populate initial values into your form, using a one-way binding for
     * `ngModel` tends to be sufficient as long as you use the exported form's value rather
     * than the domain model's value on submit.
     *
     * ### Using ngModel within a form
     *
     * The following example shows controls using `ngModel` within a form:
     *
     * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * ### Using a standalone ngModel within a group
     *
     * The following example shows you how to use a standalone ngModel control
     * within a form. This controls the display of the form, but doesn't contain form data.
     *
     * ```html
     * <form>
     *   <input name="login" ngModel placeholder="Login">
     *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
     * </form>
     * <!-- form value: {login: ''} -->
     * ```
     *
     * ### Setting the ngModel name attribute through options
     *
     * The following example shows you an alternate way to set the name attribute. The name attribute is
     * used within a custom form component, and the name `\@Input` property serves a different purpose.
     *
     * ```html
     * <form>
     *   <my-person-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
     *   </my-person-control>
     * </form>
     * <!-- form value: {user: ''} -->
     * ```
     *
     * \@ngModule FormsModule
     * \@publicApi
     */

    var NgModel = /*#__PURE__*/function (_NgControl) {
      _inherits(NgModel, _NgControl);

      var _super11 = _createSuper(NgModel);

      /**
       * @param {?} parent
       * @param {?} validators
       * @param {?} asyncValidators
       * @param {?} valueAccessors
       */
      function NgModel(parent, validators, asyncValidators, valueAccessors) {
        var _this29;

        _classCallCheck(this, NgModel);

        _this29 = _super11.call(this);
        _this29.control = new FormControl();
        /**
         * \@internal
         */

        _this29._registered = false;
        /**
         * \@description
         * Event emitter for producing the `ngModelChange` event after
         * the view model updates.
         */

        _this29.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this29._parent = parent;
        _this29._rawValidators = validators || [];
        _this29._rawAsyncValidators = asyncValidators || [];
        _this29.valueAccessor = selectValueAccessor(_assertThisInitialized(_this29), valueAccessors);
        return _this29;
      }
      /**
       * \@description
       * A lifecycle method called when the directive's inputs change. For internal use
       * only.
       *
       * @param {?} changes A object of key/value pairs for the set of changed inputs.
       * @return {?}
       */


      _createClass(NgModel, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._checkForErrors();

          if (!this._registered) this._setUpControl();

          if ('isDisabled' in changes) {
            this._updateDisabled(changes);
          }

          if (isPropertyUpdated(changes, this.viewModel)) {
            this._updateValue(this.model);

            this.viewModel = this.model;
          }
        }
        /**
         * \@description
         * Lifecycle method called before the directive's instance is destroyed. For internal
         * use only.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.formDirective && this.formDirective.removeControl(this);
        }
        /**
         * \@description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         * @return {?}
         */

      }, {
        key: "viewToModelUpdate",

        /**
         * \@description
         * Sets the new value for the view model and emits an `ngModelChange` event.
         *
         * @param {?} newValue The new value emitted by `ngModelChange`.
         * @return {?}
         */
        value: function viewToModelUpdate(newValue) {
          this.viewModel = newValue;
          this.update.emit(newValue);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setUpControl",
        value: function _setUpControl() {
          this._setUpdateStrategy();

          this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
          this._registered = true;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setUpdateStrategy",
        value: function _setUpdateStrategy() {
          if (this.options && this.options.updateOn != null) {
            this.control._updateOn = this.options.updateOn;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_isStandalone",
        value: function _isStandalone() {
          return !this._parent || !!(this.options && this.options.standalone);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setUpStandalone",
        value: function _setUpStandalone() {
          setUpControl(this.control, this);
          this.control.updateValueAndValidity({
            emitEvent: false
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkForErrors",
        value: function _checkForErrors() {
          if (!this._isStandalone()) {
            this._checkParentType();
          }

          this._checkName();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkParentType",
        value: function _checkParentType() {
          if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
            TemplateDrivenErrors.formGroupNameException();
          } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelParentException();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkName",
        value: function _checkName() {
          if (this.options && this.options.name) this.name = this.options.name;

          if (!this._isStandalone() && !this.name) {
            TemplateDrivenErrors.missingNameException();
          }
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_updateValue",
        value: function _updateValue(value) {
          var _this30 = this;

          resolvedPromise$1.then(
          /**
          * @return {?}
          */
          function () {
            _this30.control.setValue(value, {
              emitViewToModelChange: false
            });
          });
        }
        /**
         * @private
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "_updateDisabled",
        value: function _updateDisabled(changes) {
          var _this31 = this;

          /** @type {?} */
          var disabledValue = changes['isDisabled'].currentValue;
          /** @type {?} */

          var isDisabled = disabledValue === '' || disabledValue && disabledValue !== 'false';
          resolvedPromise$1.then(
          /**
          * @return {?}
          */
          function () {
            if (isDisabled && !_this31.control.disabled) {
              _this31.control.disable();
            } else if (!isDisabled && _this31.control.disabled) {
              _this31.control.enable();
            }
          });
        }
      }, {
        key: "path",
        get: function get() {
          return this._parent ? controlPath(this.name, this._parent) : [this.name];
        }
        /**
         * \@description
         * The top-level directive for this control if present, otherwise null.
         * @return {?}
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ? this._parent.formDirective : null;
        }
        /**
         * \@description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         * @return {?}
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._rawValidators);
        }
        /**
         * \@description
         * Async validator function composed of all the async validators registered with this
         * directive.
         * @return {?}
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._rawAsyncValidators);
        }
      }]);

      return NgModel;
    }(NgControl);

    NgModel.ɵfac = function NgModel_Factory(t) {
      return new (t || NgModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10));
    };

    NgModel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgModel,
      selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
      inputs: {
        name: "name",
        isDisabled: ["disabled", "isDisabled"],
        model: ["ngModel", "model"],
        options: ["ngModelOptions", "options"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngModel"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formControlBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    NgModel.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALUE_ACCESSOR]
        }]
      }];
    };

    NgModel.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['disabled']
      }],
      model: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModel']
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModelOptions']
      }],
      update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['ngModelChange']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgModel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ngModel]:not([formControlName]):not([formControl])',
          providers: [formControlBinding],
          exportAs: 'ngModel'
        }]
      }], function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALUE_ACCESSOR]
          }]
        }];
      }, {
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['ngModelChange']
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['disabled']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModel']
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModelOptions']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/ng_no_validate_directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@description
     *
     * Adds `novalidate` attribute to all forms by default.
     *
     * `novalidate` is used to disable browser's native form validation.
     *
     * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
     *
     * ```
     * <form ngNativeValidate></form>
     * ```
     *
     * \@publicApi
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     */


    var ɵNgNoValidate = function ɵNgNoValidate() {
      _classCallCheck(this, ɵNgNoValidate);
    };

    ɵNgNoValidate.ɵfac = function ɵNgNoValidate_Factory(t) {
      return new (t || ɵNgNoValidate)();
    };

    ɵNgNoValidate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ɵNgNoValidate,
      selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
      hostAttrs: ["novalidate", ""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ɵNgNoValidate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
          host: {
            'novalidate': ''
          }
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/reactive_directives/form_control_directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Token to provide to turn off the ngModel warning on formControl and formControlName.
     * @type {?}
     */


    var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgModelWithFormControlWarning');
    /** @type {?} */

    var formControlBinding$1 = {
      provide: NgControl,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return FormControlDirective;
      })
    };
    /**
     * \@description
     * Synchronizes a standalone `FormControl` instance to a form control element.
     *
     * Note that support for using the `ngModel` input property and `ngModelChange` event with reactive
     * form directives was deprecated in Angular v6 and is scheduled for removal in
     * a future version of Angular.
     * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `FormControl`
     * @see `AbstractControl`
     *
     * \@usageNotes
     *
     * The following example shows how to register a standalone control and set its value.
     *
     * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
     *
     * \@ngModule ReactiveFormsModule
     * \@publicApi
     */

    var FormControlDirective = /*#__PURE__*/function (_NgControl2) {
      _inherits(FormControlDirective, _NgControl2);

      var _super12 = _createSuper(FormControlDirective);

      /**
       * @param {?} validators
       * @param {?} asyncValidators
       * @param {?} valueAccessors
       * @param {?} _ngModelWarningConfig
       */
      function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        var _this32;

        _classCallCheck(this, FormControlDirective);

        _this32 = _super12.call(this);
        _this32._ngModelWarningConfig = _ngModelWarningConfig;
        /**
         * @deprecated as of v6
         */

        _this32.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular `FormControlDirective` instance. Used to support warning config of "always".
         *
         * \@internal
         */

        _this32._ngModelWarningSent = false;
        _this32._rawValidators = validators || [];
        _this32._rawAsyncValidators = asyncValidators || [];
        _this32.valueAccessor = selectValueAccessor(_assertThisInitialized(_this32), valueAccessors);
        return _this32;
      }
      /**
       * \@description
       * Triggers a warning that this input should not be used with reactive forms.
       * @param {?} isDisabled
       * @return {?}
       */


      _createClass(FormControlDirective, [{
        key: "ngOnChanges",

        /**
         * \@description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param {?} changes A object of key/value pairs for the set of changed inputs.
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (this._isControlChanged(changes)) {
            setUpControl(this.form, this);

            if (this.control.disabled &&
            /** @type {?} */
            this.valueAccessor.setDisabledState) {
              /** @type {?} */

              /** @type {?} */
              this.valueAccessor.setDisabledState(true);
            }

            this.form.updateValueAndValidity({
              emitEvent: false
            });
          }

          if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControl', FormControlDirective, this, this._ngModelWarningConfig);

            this.form.setValue(this.model);
            this.viewModel = this.model;
          }
        }
        /**
         * \@description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         * @return {?}
         */

      }, {
        key: "viewToModelUpdate",

        /**
         * \@description
         * Sets the new value for the view model and emits an `ngModelChange` event.
         *
         * @param {?} newValue The new value for the view model.
         * @return {?}
         */
        value: function viewToModelUpdate(newValue) {
          this.viewModel = newValue;
          this.update.emit(newValue);
        }
        /**
         * @private
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "_isControlChanged",
        value: function _isControlChanged(changes) {
          return changes.hasOwnProperty('form');
        }
      }, {
        key: "isDisabled",
        set: function set(isDisabled) {
          ReactiveErrors.disabledAttrWarning();
        }
      }, {
        key: "path",
        get: function get() {
          return [];
        }
        /**
         * \@description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         * @return {?}
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._rawValidators);
        }
        /**
         * \@description
         * Async validator function composed of all the async validators registered with this
         * directive.
         * @return {?}
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._rawAsyncValidators);
        }
        /**
         * \@description
         * The `FormControl` bound to this directive.
         * @return {?}
         */

      }, {
        key: "control",
        get: function get() {
          return this.form;
        }
      }]);

      return FormControlDirective;
    }(NgControl);

    FormControlDirective.ɵfac = function FormControlDirective_Factory(t) {
      return new (t || FormControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
    };

    FormControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FormControlDirective,
      selectors: [["", "formControl", ""]],
      inputs: {
        isDisabled: ["disabled", "isDisabled"],
        form: ["formControl", "form"],
        model: ["ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngForm"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formControlBinding$1]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /**
     * \@description
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlDirective. Used to support warning config of "once".
     *
     * \@internal
     */

    FormControlDirective._ngModelWarningSentOnce = false;
    /** @nocollapse */

    FormControlDirective.ctorParameters = function () {
      return [{
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALUE_ACCESSOR]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
        }]
      }];
    };

    FormControlDirective.propDecorators = {
      form: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formControl']
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['disabled']
      }],
      model: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModel']
      }],
      update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['ngModelChange']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormControlDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[formControl]',
          providers: [formControlBinding$1],
          exportAs: 'ngForm'
        }]
      }], function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALUE_ACCESSOR]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
          }]
        }];
      }, {
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['ngModelChange']
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['disabled']
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formControl']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModel']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/reactive_directives/form_group_directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var formDirectiveProvider$1 = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return FormGroupDirective;
      })
    };
    /**
     * \@description
     *
     * Binds an existing `FormGroup` to a DOM element.
     *
     * This directive accepts an existing `FormGroup` instance. It will then use this
     * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
     * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
     * and `FormArrayName` directives.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `AbstractControl`
     *
     * ### Register Form Group
     *
     * The following example registers a `FormGroup` with first name and last name controls,
     * and listens for the *ngSubmit* event when the button is clicked.
     *
     * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * \@ngModule ReactiveFormsModule
     * \@publicApi
     */

    var FormGroupDirective = /*#__PURE__*/function (_ControlContainer3) {
      _inherits(FormGroupDirective, _ControlContainer3);

      var _super13 = _createSuper(FormGroupDirective);

      /**
       * @param {?} _validators
       * @param {?} _asyncValidators
       */
      function FormGroupDirective(_validators, _asyncValidators) {
        var _this33;

        _classCallCheck(this, FormGroupDirective);

        _this33 = _super13.call(this);
        _this33._validators = _validators;
        _this33._asyncValidators = _asyncValidators;
        /**
         * \@description
         * Reports whether the form submission has been triggered.
         */

        _this33.submitted = false;
        /**
         * \@description
         * Tracks the list of added `FormControlName` instances
         */

        _this33.directives = [];
        /**
         * \@description
         * Tracks the `FormGroup` bound to this directive.
         */

        _this33.form =
        /** @type {?} */
        null;
        /**
         * \@description
         * Emits an event when the form submission has been triggered.
         */

        _this33.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this33;
      }
      /**
       * \@description
       * A lifecycle method called when the directive's inputs change. For internal use only.
       *
       * @param {?} changes A object of key/value pairs for the set of changed inputs.
       * @return {?}
       */


      _createClass(FormGroupDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._checkFormPresent();

          if (changes.hasOwnProperty('form')) {
            this._updateValidators();

            this._updateDomValue();

            this._updateRegistrations();
          }
        }
        /**
         * \@description
         * Returns this directive's instance.
         * @return {?}
         */

      }, {
        key: "addControl",

        /**
         * \@description
         * Method that sets up the control directive in this group, re-calculates its value
         * and validity, and adds the instance to the internal list of directives.
         *
         * @param {?} dir The `FormControlName` directive instance.
         * @return {?}
         */
        value: function addControl(dir) {
          /** @type {?} */
          var ctrl = this.form.get(dir.path);
          setUpControl(ctrl, dir);
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
          this.directives.push(dir);
          return ctrl;
        }
        /**
         * \@description
         * Retrieves the `FormControl` instance from the provided `FormControlName` directive
         *
         * @param {?} dir The `FormControlName` directive instance.
         * @return {?}
         */

      }, {
        key: "getControl",
        value: function getControl(dir) {
          return (
            /** @type {?} */
            this.form.get(dir.path)
          );
        }
        /**
         * \@description
         * Removes the `FormControlName` instance from the internal list of directives
         *
         * @param {?} dir The `FormControlName` directive instance.
         * @return {?}
         */

      }, {
        key: "removeControl",
        value: function removeControl(dir) {
          removeDir(this.directives, dir);
        }
        /**
         * Adds a new `FormGroupName` directive instance to the form.
         *
         * @param {?} dir The `FormGroupName` directive instance.
         * @return {?}
         */

      }, {
        key: "addFormGroup",
        value: function addFormGroup(dir) {
          /** @type {?} */
          var ctrl = this.form.get(dir.path);
          setUpFormContainer(ctrl, dir);
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
        /**
         * No-op method to remove the form group.
         *
         * @param {?} dir The `FormGroupName` directive instance.
         * @return {?}
         */

      }, {
        key: "removeFormGroup",
        value: function removeFormGroup(dir) {}
        /**
         * \@description
         * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
         *
         * @param {?} dir The `FormGroupName` directive instance.
         * @return {?}
         */

      }, {
        key: "getFormGroup",
        value: function getFormGroup(dir) {
          return (
            /** @type {?} */
            this.form.get(dir.path)
          );
        }
        /**
         * Adds a new `FormArrayName` directive instance to the form.
         *
         * @param {?} dir The `FormArrayName` directive instance.
         * @return {?}
         */

      }, {
        key: "addFormArray",
        value: function addFormArray(dir) {
          /** @type {?} */
          var ctrl = this.form.get(dir.path);
          setUpFormContainer(ctrl, dir);
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
        /**
         * No-op method to remove the form array.
         *
         * @param {?} dir The `FormArrayName` directive instance.
         * @return {?}
         */

      }, {
        key: "removeFormArray",
        value: function removeFormArray(dir) {}
        /**
         * \@description
         * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
         *
         * @param {?} dir The `FormArrayName` directive instance.
         * @return {?}
         */

      }, {
        key: "getFormArray",
        value: function getFormArray(dir) {
          return (
            /** @type {?} */
            this.form.get(dir.path)
          );
        }
        /**
         * Sets the new value for the provided `FormControlName` directive.
         *
         * @param {?} dir The `FormControlName` directive instance.
         * @param {?} value The new value for the directive's control.
         * @return {?}
         */

      }, {
        key: "updateModel",
        value: function updateModel(dir, value) {
          /** @type {?} */
          var ctrl =
          /** @type {?} */
          this.form.get(dir.path);
          ctrl.setValue(value);
        }
        /**
         * \@description
         * Method called with the "submit" event is triggered on the form.
         * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
         *
         * @param {?} $event The "submit" event object
         * @return {?}
         */

      }, {
        key: "onSubmit",
        value: function onSubmit($event) {
          /** @type {?} */
          this.submitted = true;
          syncPendingControls(this.form, this.directives);
          this.ngSubmit.emit($event);
          return false;
        }
        /**
         * \@description
         * Method called when the "reset" event is triggered on the form.
         * @return {?}
         */

      }, {
        key: "onReset",
        value: function onReset() {
          this.resetForm();
        }
        /**
         * \@description
         * Resets the form to an initial value and resets its submitted status.
         *
         * @param {?=} value The new value for the form.
         * @return {?}
         */

      }, {
        key: "resetForm",
        value: function resetForm() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          this.form.reset(value);

          /** @type {?} */
          this.submitted = false;
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_updateDomValue",
        value: function _updateDomValue() {
          var _this34 = this;

          this.directives.forEach(
          /**
          * @param {?} dir
          * @return {?}
          */
          function (dir) {
            /** @type {?} */
            var newCtrl = _this34.form.get(dir.path);

            if (dir.control !== newCtrl) {
              cleanUpControl(dir.control, dir);
              if (newCtrl) setUpControl(newCtrl, dir);

              /** @type {?} */
              dir.control = newCtrl;
            }
          });

          this.form._updateTreeValidity({
            emitEvent: false
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_updateRegistrations",
        value: function _updateRegistrations() {
          var _this35 = this;

          this.form._registerOnCollectionChange(
          /**
          * @return {?}
          */
          function () {
            return _this35._updateDomValue();
          });

          if (this._oldForm) this._oldForm._registerOnCollectionChange(
          /**
          * @return {?}
          */
          function () {});
          this._oldForm = this.form;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_updateValidators",
        value: function _updateValidators() {
          /** @type {?} */
          var sync = composeValidators(this._validators);
          this.form.validator = Validators.compose([
          /** @type {?} */
          this.form.validator,
          /** @type {?} */
          sync]);
          /** @type {?} */

          var async = composeAsyncValidators(this._asyncValidators);
          this.form.asyncValidator = Validators.composeAsync([
          /** @type {?} */
          this.form.asyncValidator,
          /** @type {?} */
          async]);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkFormPresent",
        value: function _checkFormPresent() {
          if (!this.form) {
            ReactiveErrors.missingFormException();
          }
        }
      }, {
        key: "formDirective",
        get: function get() {
          return this;
        }
        /**
         * \@description
         * Returns the `FormGroup` bound to this directive.
         * @return {?}
         */

      }, {
        key: "control",
        get: function get() {
          return this.form;
        }
        /**
         * \@description
         * Returns an array representing the path to this group. Because this directive
         * always lives at the top level of a form, it always an empty array.
         * @return {?}
         */

      }, {
        key: "path",
        get: function get() {
          return [];
        }
      }]);

      return FormGroupDirective;
    }(ControlContainer);

    FormGroupDirective.ɵfac = function FormGroupDirective_Factory(t) {
      return new (t || FormGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
    };

    FormGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FormGroupDirective,
      selectors: [["", "formGroup", ""]],
      hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function FormGroupDirective_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        form: ["formGroup", "form"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formDirectiveProvider$1]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    FormGroupDirective.ctorParameters = function () {
      return [{
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    FormGroupDirective.propDecorators = {
      form: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formGroup']
      }],
      ngSubmit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormGroupDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[formGroup]',
          providers: [formDirectiveProvider$1],
          host: {
            '(submit)': 'onSubmit($event)',
            '(reset)': 'onReset()'
          },
          exportAs: 'ngForm'
        }]
      }], function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      }, {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formGroup']
        }],
        ngSubmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/reactive_directives/form_group_name.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var formGroupNameProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return FormGroupName;
      })
    };
    /**
     * \@description
     *
     * Syncs a nested `FormGroup` to a DOM element.
     *
     * This directive can only be used with a parent `FormGroupDirective`.
     *
     * It accepts the string name of the nested `FormGroup` to link, and
     * looks for a `FormGroup` registered with that name in the parent
     * `FormGroup` instance you passed into `FormGroupDirective`.
     *
     * Use nested form groups to validate a sub-group of a
     * form separately from the rest or to group the values of certain
     * controls into their own nested object.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     *
     * \@usageNotes
     *
     * ### Access the group by name
     *
     * The following example uses the {\@link AbstractControl#get get} method to access the
     * associated `FormGroup`
     *
     * ```ts
     *   this.form.get('name');
     * ```
     *
     * ### Access individual controls in the group
     *
     * The following example uses the {\@link AbstractControl#get get} method to access
     * individual controls within the group using dot syntax.
     *
     * ```ts
     *   this.form.get('name.first');
     * ```
     *
     * ### Register a nested `FormGroup`.
     *
     * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
     * and provides methods to retrieve the nested `FormGroup` and individual controls.
     *
     * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
     *
     * \@ngModule ReactiveFormsModule
     * \@publicApi
     */

    var FormGroupName = /*#__PURE__*/function (_AbstractFormGroupDir2) {
      _inherits(FormGroupName, _AbstractFormGroupDir2);

      var _super14 = _createSuper(FormGroupName);

      /**
       * @param {?} parent
       * @param {?} validators
       * @param {?} asyncValidators
       */
      function FormGroupName(parent, validators, asyncValidators) {
        var _this36;

        _classCallCheck(this, FormGroupName);

        _this36 = _super14.call(this);
        _this36._parent = parent;
        _this36._validators = validators;
        _this36._asyncValidators = asyncValidators;
        return _this36;
      }
      /**
       * \@internal
       * @return {?}
       */


      _createClass(FormGroupName, [{
        key: "_checkParentType",
        value: function _checkParentType() {
          if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.groupParentException();
          }
        }
      }]);

      return FormGroupName;
    }(AbstractFormGroupDirective);

    FormGroupName.ɵfac = function FormGroupName_Factory(t) {
      return new (t || FormGroupName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
    };

    FormGroupName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FormGroupName,
      selectors: [["", "formGroupName", ""]],
      inputs: {
        name: ["formGroupName", "name"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formGroupNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    FormGroupName.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    FormGroupName.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formGroupName']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormGroupName, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[formGroupName]',
          providers: [formGroupNameProvider]
        }]
      }], function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formGroupName']
        }]
      });
    })();

    if (false) {}
    /** @type {?} */


    var formArrayNameProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return FormArrayName;
      })
    };
    /**
     * \@description
     *
     * Syncs a nested `FormArray` to a DOM element.
     *
     * This directive is designed to be used with a parent `FormGroupDirective` (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the nested `FormArray` you want to link, and
     * will look for a `FormArray` registered with that name in the parent
     * `FormGroup` instance you passed into `FormGroupDirective`.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `AbstractControl`
     *
     * \@usageNotes
     *
     * ### Example
     *
     * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
     *
     * \@ngModule ReactiveFormsModule
     * \@publicApi
     */

    var FormArrayName = /*#__PURE__*/function (_ControlContainer4) {
      _inherits(FormArrayName, _ControlContainer4);

      var _super15 = _createSuper(FormArrayName);

      /**
       * @param {?} parent
       * @param {?} validators
       * @param {?} asyncValidators
       */
      function FormArrayName(parent, validators, asyncValidators) {
        var _this37;

        _classCallCheck(this, FormArrayName);

        _this37 = _super15.call(this);
        _this37._parent = parent;
        _this37._validators = validators;
        _this37._asyncValidators = asyncValidators;
        return _this37;
      }
      /**
       * \@description
       * A lifecycle method called when the directive's inputs are initialized. For internal use only.
       *
       * @throws If the directive does not have a valid parent.
       * @return {?}
       */


      _createClass(FormArrayName, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._checkParentType();

          /** @type {?} */
          this.formDirective.addFormArray(this);
        }
        /**
         * \@description
         * A lifecycle method called before the directive's instance is destroyed. For internal use only.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.formDirective) {
            this.formDirective.removeFormArray(this);
          }
        }
        /**
         * \@description
         * The `FormArray` bound to this directive.
         * @return {?}
         */

      }, {
        key: "_checkParentType",

        /**
         * @private
         * @return {?}
         */
        value: function _checkParentType() {
          if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.arrayParentException();
          }
        }
      }, {
        key: "control",
        get: function get() {
          return (
            /** @type {?} */
            this.formDirective.getFormArray(this)
          );
        }
        /**
         * \@description
         * The top-level directive for this group if present, otherwise null.
         * @return {?}
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ?
          /** @type {?} */
          this._parent.formDirective : null;
        }
        /**
         * \@description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         * @return {?}
         */

      }, {
        key: "path",
        get: function get() {
          return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
        }
        /**
         * \@description
         * Synchronous validator function composed of all the synchronous validators registered with this
         * directive.
         * @return {?}
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._validators);
        }
        /**
         * \@description
         * Async validator function composed of all the async validators registered with this directive.
         * @return {?}
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._asyncValidators);
        }
      }]);

      return FormArrayName;
    }(ControlContainer);

    FormArrayName.ɵfac = function FormArrayName_Factory(t) {
      return new (t || FormArrayName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
    };

    FormArrayName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FormArrayName,
      selectors: [["", "formArrayName", ""]],
      inputs: {
        name: ["formArrayName", "name"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formArrayNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    FormArrayName.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    FormArrayName.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formArrayName']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormArrayName, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[formArrayName]',
          providers: [formArrayNameProvider]
        }]
      }], function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formArrayName']
        }]
      });
    })();

    if (false) {}
    /**
     * @param {?} parent
     * @return {?}
     */


    function _hasInvalidParent(parent) {
      return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/reactive_directives/form_control_name.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var controlNameBinding = {
      provide: NgControl,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return FormControlName;
      })
    };
    /**
     * \@description
     * Syncs a `FormControl` in an existing `FormGroup` to a form control
     * element by name.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `FormControl`
     * @see `AbstractControl`
     *
     * \@usageNotes
     *
     * ### Register `FormControl` within a group
     *
     * The following example shows how to register multiple form controls within a form group
     * and set their value.
     *
     * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * To see `formControlName` examples with different form control types, see:
     *
     * * Radio buttons: `RadioControlValueAccessor`
     * * Selects: `SelectControlValueAccessor`
     *
     * ### Use with ngModel is deprecated
     *
     * Support for using the `ngModel` input property and `ngModelChange` event with reactive
     * form directives has been deprecated in Angular v6 and is scheduled for removal in
     * a future version of Angular.
     *
     * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
     *
     * \@ngModule ReactiveFormsModule
     * \@publicApi
     */

    var FormControlName = /*#__PURE__*/function (_NgControl3) {
      _inherits(FormControlName, _NgControl3);

      var _super16 = _createSuper(FormControlName);

      /**
       * @param {?} parent
       * @param {?} validators
       * @param {?} asyncValidators
       * @param {?} valueAccessors
       * @param {?} _ngModelWarningConfig
       */
      function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        var _this38;

        _classCallCheck(this, FormControlName);

        _this38 = _super16.call(this);
        _this38._ngModelWarningConfig = _ngModelWarningConfig;
        _this38._added = false;
        /**
         * @deprecated as of v6
         */

        _this38.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular FormControlName instance. Used to support warning config of "always".
         *
         * \@internal
         */

        _this38._ngModelWarningSent = false;
        _this38._parent = parent;
        _this38._rawValidators = validators || [];
        _this38._rawAsyncValidators = asyncValidators || [];
        _this38.valueAccessor = selectValueAccessor(_assertThisInitialized(_this38), valueAccessors);
        return _this38;
      }
      /**
       * \@description
       * Triggers a warning that this input should not be used with reactive forms.
       * @param {?} isDisabled
       * @return {?}
       */


      _createClass(FormControlName, [{
        key: "ngOnChanges",

        /**
         * \@description
         * A lifecycle method called when the directive's inputs change. For internal use only.
         *
         * @param {?} changes A object of key/value pairs for the set of changed inputs.
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (!this._added) this._setUpControl();

          if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControlName', FormControlName, this, this._ngModelWarningConfig);

            this.viewModel = this.model;
            this.formDirective.updateModel(this, this.model);
          }
        }
        /**
         * \@description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.formDirective) {
            this.formDirective.removeControl(this);
          }
        }
        /**
         * \@description
         * Sets the new value for the view model and emits an `ngModelChange` event.
         *
         * @param {?} newValue The new value for the view model.
         * @return {?}
         */

      }, {
        key: "viewToModelUpdate",
        value: function viewToModelUpdate(newValue) {
          this.viewModel = newValue;
          this.update.emit(newValue);
        }
        /**
         * \@description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         * @return {?}
         */

      }, {
        key: "_checkParentType",

        /**
         * @private
         * @return {?}
         */
        value: function _checkParentType() {
          if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
            ReactiveErrors.ngModelGroupException();
          } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
            ReactiveErrors.controlParentException();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setUpControl",
        value: function _setUpControl() {
          this._checkParentType();

          /** @type {?} */
          this.control = this.formDirective.addControl(this);

          if (this.control.disabled &&
          /** @type {?} */
          this.valueAccessor.setDisabledState) {
            /** @type {?} */

            /** @type {?} */
            this.valueAccessor.setDisabledState(true);
          }

          this._added = true;
        }
      }, {
        key: "isDisabled",
        set: function set(isDisabled) {
          ReactiveErrors.disabledAttrWarning();
        }
      }, {
        key: "path",
        get: function get() {
          return controlPath(this.name == null ? this.name : this.name.toString(),
          /** @type {?} */
          this._parent);
        }
        /**
         * \@description
         * The top-level directive for this group if present, otherwise null.
         * @return {?}
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ? this._parent.formDirective : null;
        }
        /**
         * \@description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         * @return {?}
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._rawValidators);
        }
        /**
         * \@description
         * Async validator function composed of all the async validators registered with this
         * directive.
         * @return {?}
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return (
            /** @type {?} */
            composeAsyncValidators(this._rawAsyncValidators)
          );
        }
      }]);

      return FormControlName;
    }(NgControl);

    FormControlName.ɵfac = function FormControlName_Factory(t) {
      return new (t || FormControlName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
    };

    FormControlName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FormControlName,
      selectors: [["", "formControlName", ""]],
      inputs: {
        isDisabled: ["disabled", "isDisabled"],
        name: ["formControlName", "name"],
        model: ["ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([controlNameBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /**
     * \@description
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlName. Used to support warning config of "once".
     *
     * \@internal
     */

    FormControlName._ngModelWarningSentOnce = false;
    /** @nocollapse */

    FormControlName.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALUE_ACCESSOR]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
        }]
      }];
    };

    FormControlName.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formControlName']
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['disabled']
      }],
      model: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModel']
      }],
      update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['ngModelChange']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormControlName, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[formControlName]',
          providers: [controlNameBinding]
        }]
      }], function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALUE_ACCESSOR]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
          }]
        }];
      }, {
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['ngModelChange']
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['disabled']
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formControlName']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModel']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives/validators.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@description
     * An interface implemented by classes that perform synchronous validation.
     *
     * \@usageNotes
     *
     * ### Provide a custom validator
     *
     * The following example implements the `Validator` interface to create a
     * validator directive with a custom error key.
     *
     * ```typescript
     * \@Directive({
     *   selector: '[customValidator]',
     *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
     * })
     * class CustomValidatorDirective implements Validator {
     *   validate(control: AbstractControl): ValidationErrors|null {
     *     return {'custom': true};
     *   }
     * }
     * ```
     *
     * \@publicApi
     * @record
     */


    function Validator() {}

    if (false) {}
    /**
     * \@description
     * An interface implemented by classes that perform asynchronous validation.
     *
     * \@usageNotes
     *
     * ### Provide a custom async validator directive
     *
     * The following example implements the `AsyncValidator` interface to create an
     * async validator directive with a custom error key.
     *
     * ```typescript
     * import { of } from 'rxjs';
     *
     * \@Directive({
     *   selector: '[customAsyncValidator]',
     *   providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: CustomAsyncValidatorDirective, multi:
     * true}]
     * })
     * class CustomAsyncValidatorDirective implements AsyncValidator {
     *   validate(control: AbstractControl): Observable<ValidationErrors|null> {
     *     return of({'custom': true});
     *   }
     * }
     * ```
     *
     * \@publicApi
     * @record
     */


    function AsyncValidator() {}

    if (false) {}
    /**
     * \@description
     * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
     * @type {?}
     */


    var REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return RequiredValidator;
      }),
      multi: true
    };
    /**
     * \@description
     * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
     * @type {?}
     */

    var CHECKBOX_REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return CheckboxRequiredValidator;
      }),
      multi: true
    };
    /**
     * \@description
     * A directive that adds the `required` validator to any controls marked with the
     * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * \@usageNotes
     *
     * ### Adding a required validator using template-driven forms
     *
     * ```
     * <input name="fullName" ngModel required>
     * ```
     *
     * \@ngModule FormsModule
     * \@ngModule ReactiveFormsModule
     * \@publicApi
     */

    var RequiredValidator = /*#__PURE__*/function () {
      function RequiredValidator() {
        _classCallCheck(this, RequiredValidator);
      }

      _createClass(RequiredValidator, [{
        key: "validate",

        /**
         * \@description
         * Method that validates whether the control is empty.
         * Returns the validation result if enabled, otherwise null.
         * @param {?} control
         * @return {?}
         */
        value: function validate(control) {
          return this.required ? Validators.required(control) : null;
        }
        /**
         * \@description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "required",

        /**
         * \@description
         * Tracks changes to the required attribute bound to this directive.
         * @return {?}
         */
        get: function get() {
          return this._required;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._required = value != null && value !== false && "".concat(value) !== 'false';
          if (this._onChange) this._onChange();
        }
      }]);

      return RequiredValidator;
    }();

    RequiredValidator.ɵfac = function RequiredValidator_Factory(t) {
      return new (t || RequiredValidator)();
    };

    RequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: RequiredValidator,
      selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
      hostVars: 1,
      hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("required", ctx.required ? "" : null);
        }
      },
      inputs: {
        required: "required"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([REQUIRED_VALIDATOR])]
    });
    RequiredValidator.propDecorators = {
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequiredValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
          providers: [REQUIRED_VALIDATOR],
          host: {
            '[attr.required]': 'required ? "" : null'
          }
        }]
      }], null, {
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * A Directive that adds the `required` validator to checkbox controls marked with the
     * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * \@usageNotes
     *
     * ### Adding a required checkbox validator using template-driven forms
     *
     * The following example shows how to add a checkbox required validator to an input attached to an
     * ngModel binding.
     *
     * ```
     * <input type="checkbox" name="active" ngModel required>
     * ```
     *
     * \@publicApi
     * \@ngModule FormsModule
     * \@ngModule ReactiveFormsModule
     */


    var CheckboxRequiredValidator = /*#__PURE__*/function (_RequiredValidator) {
      _inherits(CheckboxRequiredValidator, _RequiredValidator);

      var _super17 = _createSuper(CheckboxRequiredValidator);

      function CheckboxRequiredValidator() {
        _classCallCheck(this, CheckboxRequiredValidator);

        return _super17.apply(this, arguments);
      }

      _createClass(CheckboxRequiredValidator, [{
        key: "validate",

        /**
         * \@description
         * Method that validates whether or not the checkbox has been checked.
         * Returns the validation result if enabled, otherwise null.
         * @param {?} control
         * @return {?}
         */
        value: function validate(control) {
          return this.required ? Validators.requiredTrue(control) : null;
        }
      }]);

      return CheckboxRequiredValidator;
    }(RequiredValidator);

    CheckboxRequiredValidator.ɵfac = function CheckboxRequiredValidator_Factory(t) {
      return ɵCheckboxRequiredValidator_BaseFactory(t || CheckboxRequiredValidator);
    };

    CheckboxRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CheckboxRequiredValidator,
      selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("required", ctx.required ? "" : null);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵCheckboxRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CheckboxRequiredValidator);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxRequiredValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
          providers: [CHECKBOX_REQUIRED_VALIDATOR],
          host: {
            '[attr.required]': 'required ? "" : null'
          }
        }]
      }], null, null);
    })();
    /**
     * \@description
     * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
     * @type {?}
     */


    var EMAIL_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return EmailValidator;
      }),
      multi: true
    };
    /**
     * A directive that adds the `email` validator to controls marked with the
     * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * \@usageNotes
     *
     * ### Adding an email validator
     *
     * The following example shows how to add an email validator to an input attached to an ngModel
     * binding.
     *
     * ```
     * <input type="email" name="email" ngModel email>
     * <input type="email" name="email" ngModel email="true">
     * <input type="email" name="email" ngModel [email]="true">
     * ```
     *
     * \@publicApi
     * \@ngModule FormsModule
     * \@ngModule ReactiveFormsModule
     */

    var EmailValidator = /*#__PURE__*/function () {
      function EmailValidator() {
        _classCallCheck(this, EmailValidator);
      }

      _createClass(EmailValidator, [{
        key: "validate",

        /**
         * \@description
         * Method that validates whether an email address is valid.
         * Returns the validation result if enabled, otherwise null.
         * @param {?} control
         * @return {?}
         */
        value: function validate(control) {
          return this._enabled ? Validators.email(control) : null;
        }
        /**
         * \@description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "email",

        /**
         * \@description
         * Tracks changes to the email attribute bound to this directive.
         * @param {?} value
         * @return {?}
         */
        set: function set(value) {
          this._enabled = value === '' || value === true || value === 'true';
          if (this._onChange) this._onChange();
        }
      }]);

      return EmailValidator;
    }();

    EmailValidator.ɵfac = function EmailValidator_Factory(t) {
      return new (t || EmailValidator)();
    };

    EmailValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: EmailValidator,
      selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
      inputs: {
        email: "email"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([EMAIL_VALIDATOR])]
    });
    EmailValidator.propDecorators = {
      email: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[email][formControlName],[email][formControl],[email][ngModel]',
          providers: [EMAIL_VALIDATOR]
        }]
      }], null, {
        email: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * \@description
     * A function that receives a control and synchronously returns a map of
     * validation errors if present, otherwise null.
     *
     * \@publicApi
     * @record
     */


    function ValidatorFn() {}
    /**
     * \@description
     * A function that receives a control and returns a Promise or observable
     * that emits validation errors if present, otherwise null.
     *
     * \@publicApi
     * @record
     */


    function AsyncValidatorFn() {}
    /**
     * \@description
     * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
     * @type {?}
     */


    var MIN_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MinLengthValidator;
      }),
      multi: true
    };
    /**
     * A directive that adds minimum length validation to controls marked with the
     * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * \@usageNotes
     *
     * ### Adding a minimum length validator
     *
     * The following example shows how to add a minimum length validator to an input attached to an
     * ngModel binding.
     *
     * ```html
     * <input name="firstName" ngModel minlength="4">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var MinLengthValidator = /*#__PURE__*/function () {
      function MinLengthValidator() {
        _classCallCheck(this, MinLengthValidator);
      }

      _createClass(MinLengthValidator, [{
        key: "ngOnChanges",

        /**
         * \@description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param {?} changes A object of key/value pairs for the set of changed inputs.
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if ('minlength' in changes) {
            this._createValidator();

            if (this._onChange) this._onChange();
          }
        }
        /**
         * \@description
         * Method that validates whether the value meets a minimum length
         * requirement. Returns the validation result if enabled, otherwise null.
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "validate",
        value: function validate(control) {
          return this.minlength == null ? null : this._validator(control);
        }
        /**
         * \@description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_createValidator",
        value: function _createValidator() {
          this._validator = Validators.minLength(typeof this.minlength === 'number' ? this.minlength : parseInt(this.minlength, 10));
        }
      }]);

      return MinLengthValidator;
    }();

    MinLengthValidator.ɵfac = function MinLengthValidator_Factory(t) {
      return new (t || MinLengthValidator)();
    };

    MinLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MinLengthValidator,
      selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("minlength", ctx.minlength ? ctx.minlength : null);
        }
      },
      inputs: {
        minlength: "minlength"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MIN_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    MinLengthValidator.propDecorators = {
      minlength: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinLengthValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
          providers: [MIN_LENGTH_VALIDATOR],
          host: {
            '[attr.minlength]': 'minlength ? minlength : null'
          }
        }]
      }], null, {
        minlength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * \@description
     * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
     * @type {?}
     */


    var MAX_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MaxLengthValidator;
      }),
      multi: true
    };
    /**
     * A directive that adds max length validation to controls marked with the
     * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * \@usageNotes
     *
     * ### Adding a maximum length validator
     *
     * The following example shows how to add a maximum length validator to an input attached to an
     * ngModel binding.
     *
     * ```html
     * <input name="firstName" ngModel maxlength="25">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var MaxLengthValidator = /*#__PURE__*/function () {
      function MaxLengthValidator() {
        _classCallCheck(this, MaxLengthValidator);
      }

      _createClass(MaxLengthValidator, [{
        key: "ngOnChanges",

        /**
         * \@description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param {?} changes A object of key/value pairs for the set of changed inputs.
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if ('maxlength' in changes) {
            this._createValidator();

            if (this._onChange) this._onChange();
          }
        }
        /**
         * \@description
         * Method that validates whether the value exceeds
         * the maximum length requirement.
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "validate",
        value: function validate(control) {
          return this.maxlength != null ? this._validator(control) : null;
        }
        /**
         * \@description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_createValidator",
        value: function _createValidator() {
          this._validator = Validators.maxLength(typeof this.maxlength === 'number' ? this.maxlength : parseInt(this.maxlength, 10));
        }
      }]);

      return MaxLengthValidator;
    }();

    MaxLengthValidator.ɵfac = function MaxLengthValidator_Factory(t) {
      return new (t || MaxLengthValidator)();
    };

    MaxLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MaxLengthValidator,
      selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("maxlength", ctx.maxlength ? ctx.maxlength : null);
        }
      },
      inputs: {
        maxlength: "maxlength"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAX_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    MaxLengthValidator.propDecorators = {
      maxlength: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaxLengthValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
          providers: [MAX_LENGTH_VALIDATOR],
          host: {
            '[attr.maxlength]': 'maxlength ? maxlength : null'
          }
        }]
      }], null, {
        maxlength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * \@description
     * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
     * @type {?}
     */


    var PATTERN_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return PatternValidator;
      }),
      multi: true
    };
    /**
     * \@description
     * A directive that adds regex pattern validation to controls marked with the
     * `pattern` attribute. The regex must match the entire control value.
     * The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * \@usageNotes
     *
     * ### Adding a pattern validator
     *
     * The following example shows how to add a pattern validator to an input attached to an
     * ngModel binding.
     *
     * ```html
     * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var PatternValidator = /*#__PURE__*/function () {
      function PatternValidator() {
        _classCallCheck(this, PatternValidator);
      }

      _createClass(PatternValidator, [{
        key: "ngOnChanges",

        /**
         * \@description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param {?} changes A object of key/value pairs for the set of changed inputs.
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if ('pattern' in changes) {
            this._createValidator();

            if (this._onChange) this._onChange();
          }
        }
        /**
         * \@description
         * Method that validates whether the value matches the
         * the pattern requirement.
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "validate",
        value: function validate(control) {
          return this._validator(control);
        }
        /**
         * \@description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_createValidator",
        value: function _createValidator() {
          this._validator = Validators.pattern(this.pattern);
        }
      }]);

      return PatternValidator;
    }();

    PatternValidator.ɵfac = function PatternValidator_Factory(t) {
      return new (t || PatternValidator)();
    };

    PatternValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: PatternValidator,
      selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function PatternValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("pattern", ctx.pattern ? ctx.pattern : null);
        }
      },
      inputs: {
        pattern: "pattern"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PATTERN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    PatternValidator.propDecorators = {
      pattern: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatternValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
          providers: [PATTERN_VALIDATOR],
          host: {
            '[attr.pattern]': 'pattern ? pattern : null'
          }
        }]
      }], null, {
        pattern: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/directives.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var SHARED_FORM_DIRECTIVES = [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator];
    /** @type {?} */

    var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
    /** @type {?} */

    var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
    /**
     * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
     */

    var ɵInternalFormsSharedModule = function ɵInternalFormsSharedModule() {
      _classCallCheck(this, ɵInternalFormsSharedModule);
    };

    ɵInternalFormsSharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ɵInternalFormsSharedModule
    });
    ɵInternalFormsSharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ɵInternalFormsSharedModule_Factory(t) {
        return new (t || ɵInternalFormsSharedModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ɵInternalFormsSharedModule, {
        declarations: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator],
        exports: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ɵInternalFormsSharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: SHARED_FORM_DIRECTIVES,
          exports: SHARED_FORM_DIRECTIVES
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/form_builder.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} options
     * @return {?}
     */


    function isAbstractControlOptions(options) {
      return (
        /** @type {?} */
        options.asyncValidators !== undefined ||
        /** @type {?} */
        options.validators !== undefined ||
        /** @type {?} */
        options.updateOn !== undefined
      );
    }
    /**
     * \@description
     * Creates an `AbstractControl` from a user-specified configuration.
     *
     * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
     * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
     * forms.
     *
     * @see [Reactive Forms Guide](/guide/reactive-forms)
     *
     * \@publicApi
     */


    var FormBuilder = /*#__PURE__*/function () {
      function FormBuilder() {
        _classCallCheck(this, FormBuilder);
      }

      _createClass(FormBuilder, [{
        key: "group",

        /**
         * \@description
         * Construct a new `FormGroup` instance.
         *
         * @param {?} controlsConfig A collection of child controls. The key for each child is the name
         * under which it is registered.
         *
         * @param {?=} options Configuration options object for the `FormGroup`. The object can
         * have two shapes:
         *
         * 1) `AbstractControlOptions` object (preferred), which consists of:
         * * `validators`: A synchronous validator function, or an array of validator functions
         * * `asyncValidators`: A single async validator or array of async validator functions
         * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
         * submit')
         *
         * 2) Legacy configuration object, which consists of:
         * * `validator`: A synchronous validator function, or an array of validator functions
         * * `asyncValidator`: A single async validator or array of async validator functions
         *
         * @return {?}
         */
        value: function group(controlsConfig) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          /** @type {?} */
          var controls = this._reduceControls(controlsConfig);
          /** @type {?} */


          var validators = null;
          /** @type {?} */

          var asyncValidators = null;
          /** @type {?} */

          var updateOn = undefined;

          if (options != null) {
            if (isAbstractControlOptions(options)) {
              // `options` are `AbstractControlOptions`
              validators = options.validators != null ? options.validators : null;
              asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
              updateOn = options.updateOn != null ? options.updateOn : undefined;
            } else {
              // `options` are legacy form group options
              validators = options['validator'] != null ? options['validator'] : null;
              asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
            }
          }

          return new FormGroup(controls, {
            asyncValidators: asyncValidators,
            updateOn: updateOn,
            validators: validators
          });
        }
        /**
         * \@description
         * Construct a new `FormControl` with the given state, validators and options.
         *
         * \@usageNotes
         *
         * ### Initialize a control as disabled
         *
         * The following example returns a control with an initial value in a disabled state.
         *
         * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
         * </code-example>
         * @param {?} formState Initializes the control with an initial state value, or
         * with an object that contains both a value and a disabled status.
         *
         * @param {?=} validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains
         * validation functions and a validation trigger.
         *
         * @param {?=} asyncValidator A single async validator or array of async validator
         * functions.
         *
         * @return {?}
         */

      }, {
        key: "control",
        value: function control(formState, validatorOrOpts, asyncValidator) {
          return new FormControl(formState, validatorOrOpts, asyncValidator);
        }
        /**
         * Constructs a new `FormArray` from the given array of configurations,
         * validators and options.
         *
         * @param {?} controlsConfig An array of child controls or control configs. Each
         * child control is given an index when it is registered.
         *
         * @param {?=} validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains
         * validation functions and a validation trigger.
         *
         * @param {?=} asyncValidator A single async validator or array of async validator
         * functions.
         * @return {?}
         */

      }, {
        key: "array",
        value: function array(controlsConfig, validatorOrOpts, asyncValidator) {
          var _this39 = this;

          /** @type {?} */
          var controls = controlsConfig.map(
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            return _this39._createControl(c);
          });
          return new FormArray(controls, validatorOrOpts, asyncValidator);
        }
        /**
         * \@internal
         * @param {?} controlsConfig
         * @return {?}
         */

      }, {
        key: "_reduceControls",
        value: function _reduceControls(controlsConfig) {
          var _this40 = this;

          /** @type {?} */
          var controls = {};
          Object.keys(controlsConfig).forEach(
          /**
          * @param {?} controlName
          * @return {?}
          */
          function (controlName) {
            controls[controlName] = _this40._createControl(controlsConfig[controlName]);
          });
          return controls;
        }
        /**
         * \@internal
         * @param {?} controlConfig
         * @return {?}
         */

      }, {
        key: "_createControl",
        value: function _createControl(controlConfig) {
          if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup || controlConfig instanceof FormArray) {
            return controlConfig;
          } else if (Array.isArray(controlConfig)) {
            /** @type {?} */
            var value = controlConfig[0];
            /** @type {?} */

            var validator = controlConfig.length > 1 ? controlConfig[1] : null;
            /** @type {?} */

            var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
          } else {
            return this.control(controlConfig);
          }
        }
      }]);

      return FormBuilder;
    }();

    FormBuilder.ɵfac = function FormBuilder_Factory(t) {
      return new (t || FormBuilder)();
    };

    FormBuilder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FormBuilder,
      factory: FormBuilder.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/version.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@publicApi
     * @type {?}
     */


    var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('9.1.12');
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/form_providers.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Exports the required providers and directives for template-driven forms,
     * making them available for import by NgModules that import this module.
     *
     * @see [Forms Overview](/guide/forms-overview)
     * @see [Template-driven Forms Guide](/guide/forms)
     *
     * \@publicApi
     */

    var FormsModule = function FormsModule() {
      _classCallCheck(this, FormsModule);
    };

    FormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FormsModule
    });
    FormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FormsModule_Factory(t) {
        return new (t || FormsModule)();
      },
      providers: [RadioControlRegistry],
      imports: [ɵInternalFormsSharedModule]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormsModule, {
        declarations: [NgModel, NgModelGroup, NgForm],
        exports: [ɵInternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: TEMPLATE_DRIVEN_DIRECTIVES,
          providers: [RadioControlRegistry],
          exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
        }]
      }], null, null);
    })();
    /**
     * Exports the required infrastructure and directives for reactive forms,
     * making them available for import by NgModules that import this module.
     *
     * @see [Forms Overview](guide/forms-overview)
     * @see [Reactive Forms Guide](guide/reactive-forms)
     *
     * \@publicApi
     */


    var ReactiveFormsModule = /*#__PURE__*/function () {
      function ReactiveFormsModule() {
        _classCallCheck(this, ReactiveFormsModule);
      }

      _createClass(ReactiveFormsModule, null, [{
        key: "withConfig",

        /**
         * \@description
         * Provides options for configuring the reactive forms module.
         *
         * @param {?} opts An object of configuration options
         * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
         * binding is used with reactive form directives.
         * @return {?}
         */
        value: function withConfig(opts) {
          return {
            ngModule: ReactiveFormsModule,
            providers: [{
              provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
              useValue: opts.warnOnNgModelWithFormControl
            }]
          };
        }
      }]);

      return ReactiveFormsModule;
    }();

    ReactiveFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ReactiveFormsModule
    });
    ReactiveFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ReactiveFormsModule_Factory(t) {
        return new (t || ReactiveFormsModule)();
      },
      providers: [FormBuilder, RadioControlRegistry],
      imports: [ɵInternalFormsSharedModule]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReactiveFormsModule, {
        declarations: [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName],
        exports: [ɵInternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReactiveFormsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [REACTIVE_DRIVEN_DIRECTIVES],
          providers: [FormBuilder, RadioControlRegistry],
          exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/src/forms.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: packages/forms/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=forms.js.map

    /***/

  },

  /***/
  "./node_modules/angular-gallery/__ivy_ngcc__/fesm2015/angular-gallery.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/angular-gallery/__ivy_ngcc__/fesm2015/angular-gallery.js ***!
    \*******************************************************************************/

  /*! exports provided: Gallery, IvyGalleryModule, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf */

  /***/
  function node_modulesAngularGallery__ivy_ngcc__Fesm2015AngularGalleryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Gallery", function () {
      return Gallery;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IvyGalleryModule", function () {
      return IvyGalleryModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return CarouselComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return EventService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return OverlayModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return OverlayContainerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return AdDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return Overlay;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    function CarouselComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.counter);
      }
    }

    function CarouselComponent_ng_template_5_div_0_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 12);
      }

      if (rf & 2) {
        var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("object-fit", ctx_r6.objectFit);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r6.getFile(i_r4)["image"]["path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function CarouselComponent_ng_template_5_div_0_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_ng_template_5_div_0_ng_template_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r10.toggleVideo(_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "video", 14, 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "source", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("object-fit", ctx_r7.objectFit)("border-radius", ctx_r7.borderRadius + "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loop", ctx_r7.videoProperties.loop)("muted", ctx_r7.videoProperties.muted)("controls", ctx_r7.isSafari);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r7.getFile(i_r4)["path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function CarouselComponent_ng_template_5_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_ng_template_5_div_0_img_1_Template, 1, 3, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CarouselComponent_ng_template_5_div_0_ng_template_2_Template, 4, 8, "ng-template", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r5.getCellWidth() + "px")("border-radius", ctx_r5.borderRadius + "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.getFile(i_r4) && ctx_r5.getFile(i_r4)["image"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.getFile(i_r4) && ctx_r5.getFile(i_r4)["type"] === "video");
      }
    }

    function CarouselComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselComponent_ng_template_5_div_0_Template, 3, 6, "div", 8);
      }

      if (rf & 2) {
        var i_r4 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r4 < ctx_r1.cellLimit);
      }
    }

    function CarouselComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_div_6_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.prev();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_div_6_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r16.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("carousel-arrows-outside", ctx_r2.arrowsOutside)("carousel-dark-arrows", ctx_r2.arrowsTheme === "dark");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("carousel-arrow-disabled", ctx_r2.isPrevArrowDisabled());

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("carousel-arrow-disabled", ctx_r2.isNextArrowDisabled());
      }
    }

    function OverlayContainerComponent_ng_template_0_Template(rf, ctx) {}

    var Touches = /*#__PURE__*/function () {
      function Touches(properties) {
        var _this41 = this;

        _classCallCheck(this, Touches);

        this.eventType = undefined;
        this.handlers = {};
        this.startX = 0;
        this.startY = 0;
        this.lastTap = 0;
        this.doubleTapMinTimeout = 300;
        this.tapMinTimeout = 200;
        this.touchstartTime = 0;
        this.i = 0;
        this.isMousedown = false;
        this.touchListeners = {
          "touchstart": "handleTouchstart",
          "touchmove": "handleTouchmove",
          "touchend": "handleTouchend"
        };
        this.mouseListeners = {
          "mousedown": "handleMousedown",
          "mousemove": "handleMousemove",
          "mouseup": "handleMouseup",
          "wheel": "handleWheel"
        };
        this.otherListeners = {
          "resize": "handleResize"
        };
        /*
         * Listeners
         */

        /* Touchstart */

        this.handleTouchstart = function (event) {
          _this41.elementPosition = _this41.getElementPosition();
          _this41.touchstartTime = new Date().getTime();

          if (_this41.eventType === undefined) {
            _this41.getTouchstartPosition(event);
          }

          _this41.runHandler("touchstart", event);
        };
        /* Touchmove */


        this.handleTouchmove = function (event) {
          var touches = event.touches; // Pan

          if (_this41.detectPan(touches)) {
            _this41.runHandler("pan", event);
          } // Pinch


          if (_this41.detectPinch(event)) {
            _this41.runHandler("pinch", event);
          } // Linear swipe


          switch (_this41.detectLinearSwipe(event)) {
            case "horizontal-swipe":
              event.swipeType = "horizontal-swipe";

              _this41.runHandler("horizontal-swipe", event);

              break;

            case "vertical-swipe":
              event.swipeType = "vertical-swipe";

              _this41.runHandler("vertical-swipe", event);

              break;
          } // Linear swipe


          if (_this41.detectLinearSwipe(event) || _this41.eventType === 'horizontal-swipe' || _this41.eventType === 'vertical-swipe') {
            _this41.handleLinearSwipe(event);
          }
        };
        /* Touchend */


        this.handleTouchend = function (event) {
          var touches = event.touches; // Double Tap

          if (_this41.detectDoubleTap()) {
            _this41.runHandler("double-tap", event);
          } // Tap


          _this41.detectTap();

          _this41.runHandler("touchend", event);

          _this41.eventType = 'touchend';

          if (touches && touches.length === 0) {
            _this41.eventType = undefined;
            _this41.i = 0;
          }
        };
        /* Mousedown */


        this.handleMousedown = function (event) {
          _this41.isMousedown = true;
          _this41.elementPosition = _this41.getElementPosition();
          _this41.touchstartTime = new Date().getTime();

          if (_this41.eventType === undefined) {
            _this41.getMousedownPosition(event);
          }

          _this41.runHandler("mousedown", event);
        };
        /* Mousemove */


        this.handleMousemove = function (event) {
          //event.preventDefault();
          if (!_this41.isMousedown) {
            return;
          } // Pan


          _this41.runHandler("pan", event); // Linear swipe


          switch (_this41.detectLinearSwipe(event)) {
            case "horizontal-swipe":
              event.swipeType = "horizontal-swipe";

              _this41.runHandler("horizontal-swipe", event);

              break;

            case "vertical-swipe":
              event.swipeType = "vertical-swipe";

              _this41.runHandler("vertical-swipe", event);

              break;
          } // Linear swipe


          if (_this41.detectLinearSwipe(event) || _this41.eventType === 'horizontal-swipe' || _this41.eventType === 'vertical-swipe') {
            _this41.handleLinearSwipe(event);
          }
        };
        /* Mouseup */


        this.handleMouseup = function (event) {
          // Tap
          _this41.detectTap();

          _this41.isMousedown = false;

          _this41.runHandler("mouseup", event);

          _this41.eventType = undefined;
          _this41.i = 0;
        };
        /* Wheel */


        this.handleWheel = function (event) {
          _this41.runHandler("wheel", event);
        };
        /* Resize */


        this.handleResize = function (event) {
          _this41.runHandler("resize", event);
        };

        this.properties = properties;
        this.element = this.properties.element;
        this.elementPosition = this.getElementPosition();
        this.toggleEventListeners('addEventListener');
      }

      _createClass(Touches, [{
        key: "destroy",
        value: function destroy() {
          this.toggleEventListeners('removeEventListener');
        }
      }, {
        key: "toggleEventListeners",
        value: function toggleEventListeners(action) {
          var listeners;

          if (this.properties.listeners === 'mouse and touch') {
            listeners = Object.assign(this.touchListeners, this.mouseListeners);
          } else {
            listeners = this.detectTouchScreen() ? this.touchListeners : this.mouseListeners;
          }

          if (this.properties.resize) {
            listeners = Object.assign(listeners, this.otherListeners);
          }

          for (var listener in listeners) {
            var handler = listeners[listener]; // Window

            if (listener === "resize") {
              if (action === 'addEventListener') {
                window.addEventListener(listener, this[handler], false);
              }

              if (action === 'removeEventListener') {
                window.removeEventListener(listener, this[handler], false);
              } // Document

            } else if (listener === 'mouseup' || listener === "mousemove") {
              if (action === 'addEventListener') {
                document.addEventListener(listener, this[handler], false);
              }

              if (action === 'removeEventListener') {
                document.removeEventListener(listener, this[handler], false);
              } // Element

            } else {
              if (action === 'addEventListener') {
                this.element.addEventListener(listener, this[handler], false);
              }

              if (action === 'removeEventListener') {
                this.element.removeEventListener(listener, this[handler], false);
              }
            }
          }
        }
      }, {
        key: "handleLinearSwipe",
        value: function handleLinearSwipe(event) {
          //event.preventDefault();
          this.i++;

          if (this.i > 3) {
            this.eventType = this.getLinearSwipeType(event);
          }

          if (this.eventType === 'horizontal-swipe') {
            this.runHandler('horizontal-swipe', event);
          }

          if (this.eventType === 'vertical-swipe') {
            this.runHandler('vertical-swipe', event);
          }
        }
      }, {
        key: "runHandler",
        value: function runHandler(eventName, response) {
          if (this.handlers[eventName]) {
            this.handlers[eventName](response);
          }
        }
        /*
         * Detection
         */

      }, {
        key: "detectPan",
        value: function detectPan(touches) {
          return touches.length === 1 && !this.eventType || this.eventType === 'pan';
        }
      }, {
        key: "detectDoubleTap",
        value: function detectDoubleTap() {
          var _this42 = this;

          if (this.eventType != undefined) {
            return;
          }

          var currentTime = new Date().getTime();
          var tapLength = currentTime - this.lastTap;
          clearTimeout(this.doubleTapTimeout);

          if (tapLength < this.doubleTapMinTimeout && tapLength > 0) {
            return true;
          } else {
            this.doubleTapTimeout = setTimeout(function () {
              clearTimeout(_this42.doubleTapTimeout);
            }, this.doubleTapMinTimeout);
          }

          this.lastTap = currentTime;
        }
      }, {
        key: "detectTap",
        value: function detectTap() {
          if (this.eventType != undefined) {
            return;
          }

          var currentTime = new Date().getTime();
          var tapLength = currentTime - this.touchstartTime;

          if (tapLength > 0) {
            if (tapLength < this.tapMinTimeout) {
              this.runHandler("tap", event);
            } else {
              this.runHandler("longtap", event);
            }
          }
        }
      }, {
        key: "detectPinch",
        value: function detectPinch(event) {
          var touches = event.touches;
          return touches.length === 2 && this.eventType === undefined || this.eventType === 'pinch';
        }
      }, {
        key: "detectLinearSwipe",
        value: function detectLinearSwipe(event) {
          var touches = event.touches;

          if (touches) {
            if (touches.length === 1 && !this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
              return this.getLinearSwipeType(event);
            }
          } else {
            if (!this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
              return this.getLinearSwipeType(event);
            }
          }
        }
      }, {
        key: "getLinearSwipeType",
        value: function getLinearSwipeType(event) {
          if (this.eventType !== 'horizontal-swipe' && this.eventType !== 'vertical-swipe') {
            var movementX = Math.abs(this.moveLeft(0, event) - this.startX);
            var movementY = Math.abs(this.moveTop(0, event) - this.startY);

            if (movementY * 3 > movementX) {
              return 'vertical-swipe';
            } else {
              return 'horizontal-swipe';
            }
          } else {
            return this.eventType;
          }
        }
      }, {
        key: "getElementPosition",
        value: function getElementPosition() {
          return this.element.getBoundingClientRect();
        }
      }, {
        key: "getTouchstartPosition",
        value: function getTouchstartPosition(event) {
          this.startX = event.touches[0].clientX - this.elementPosition.left;
          this.startY = event.touches[0].clientY - this.elementPosition.top;
        }
      }, {
        key: "getMousedownPosition",
        value: function getMousedownPosition(event) {
          this.startX = event.clientX - this.elementPosition.left;
          this.startY = event.clientY - this.elementPosition.top;
        }
      }, {
        key: "moveLeft",
        value: function moveLeft(index, event) {
          var touches = event.touches;

          if (touches) {
            return touches[index].clientX - this.elementPosition.left;
          } else {
            return event.clientX - this.elementPosition.left;
          }
        }
      }, {
        key: "moveTop",
        value: function moveTop(index, event) {
          var touches = event.touches;

          if (touches) {
            return touches[index].clientY - this.elementPosition.top;
          } else {
            return event.clientY - this.elementPosition.top;
          }
        }
      }, {
        key: "detectTouchScreen",
        value: function detectTouchScreen() {
          var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

          var mq = function mq(query) {
            return window.matchMedia(query).matches;
          };

          if ('ontouchstart' in window) {
            return true;
          } // include the 'heartz' as a way to have a non matching MQ to help terminate the join
          // https://git.io/vznFH


          var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
          return mq(query);
        }
        /* Public properties and methods */

      }, {
        key: "on",
        value: function on(event, handler) {
          if (event) {
            this.handlers[event] = handler;
          }
        }
      }]);

      return Touches;
    }();

    var Carousel = /*#__PURE__*/function () {
      function Carousel(properties) {
        var _this43 = this;

        _classCallCheck(this, Carousel);

        this.initialPositionX = 0;
        this.newContainerPositionIndex = 0; // The index of the new position relative to the active index, for example -1 or +1

        this.preliminarySlideCounter = 0;
        this.slideCounter = 0; // Scrolling Index (counter)

        this.previousSlideCounter = 0;
        this.isContentImages = true;
        this.isLazyLoad = true;
        this.isContainerLocked = false;
        this.alignCells = "left";
        this.initialContainerPosition = 0;

        this.handleTouchstart = function (event) {
          _this43.isTouchstart = true;

          if (_this43.isSlideInProgress) {
            return;
          }

          var touches = event.touches;

          if (touches) {
            _this43.startX = touches[0].clientX - _this43.getCarouselElementPosition()['left'];
          } else {
            _this43.startX = event.clientX - _this43.getCarouselElementPosition()['left'];
          }

          _this43.containerInitialPositionX = _this43.getElementPosition()['left'] - _this43.getCarouselElementPosition()['left'];
          _this43.isMoveInProgress = true;
        };

        this.handleHorizontalSwipe = function (event) {
          if (_this43.isSlideInProgress) {
            return;
          }

          var touches = event.touches;

          if (touches) {
            _this43.moveX = touches[0].clientX - _this43.getCarouselElementPosition()['left'];
          } else {
            _this43.moveX = event.clientX - _this43.getCarouselElementPosition()['left'];
          }

          _this43.distanceAbs = _this43.getDistanceAbs();
          _this43.direction = _this43.getDirection();

          _this43.moveContainer();
        };

        this.handleTouchend = function (event) {
          if (_this43.isSlideInProgress || !_this43.isTouchstart) {
            _this43.isTouchstart = false;
            return;
          }

          _this43.isMoveInProgress = false;

          if (_this43.detectSlide()) {
            _this43.handleSlide();
          } else {
            _this43.newContainerPositionIndex = 0;

            _this43.alignContainer();
          }

          _this43.startX = _this43.moveX = _this43.distanceAbs = undefined;
          _this43.isTouchstart = false;
        };

        this.element = properties.element;
        this.properties = properties;
        this.cells = this.element.children;
        this.visibleWidth = this.properties.visibleWidth || this.element.parentElement.clientWidth;
        this.setContainerWidth();
        this.alignContainer(0);
      }

      _createClass(Carousel, [{
        key: "moveContainer",

        /* Move */
        value: function moveContainer() {
          var positionX = this.getMovePositionX();
          this.transformPositionX(positionX, 0);
        }
      }, {
        key: "getMovePositionX",
        value: function getMovePositionX() {
          var distance = this.getDistance();
          return this.containerInitialPositionX - distance;
        }
        /* Align */

      }, {
        key: "alignContainer",
        value: function alignContainer() {
          var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.transitionDuration;
          var positionX = this.getContainerPosition();
          this.transformPositionX(positionX, duration);
          this.setInitialContainerPosition(positionX);
        }
      }, {
        key: "getContainerPosition",
        value: function getContainerPosition() {
          var correction = this.getContainerPositionCorrection();
          this.isContainerPositionCorrection = correction != 0;
          return this.initialContainerPosition + this.newContainerPositionIndex * this.fullCellWidth + correction;
        }
      }, {
        key: "setInitialContainerPosition",
        value: function setInitialContainerPosition(position) {
          var correction = this.getContainerPositionCorrection();
          this.initialContainerPosition = position - correction;
        }
      }, {
        key: "getContainerPositionCorrection",
        value: function getContainerPositionCorrection() {
          var correction = 0;

          if (this.images.length - this.preliminarySlideCounter < this.visibleCellsCount || this.isSlideLengthLimited) {
            if (this.visibleWidth < this.totalContainerCellsCount * this.fullCellWidth) {
              correction = -(this.visibleCellsCount * this.fullCellWidth - this.visibleWidth - this.margin);
            }

            if (correction >= -this.margin) {
              correction = 0;
            }
          }

          return correction;
        }
        /* Quickly center */

      }, {
        key: "quicklyPositionContainer",
        value: function quicklyPositionContainer() {
          var correction = this.getContainerPositionCorrection();
          var initialPosition = this.getNewContainerPosition() + correction;
          this.transformPositionX(initialPosition, 0);
          this.setInitialContainerPosition(initialPosition);
        }
      }, {
        key: "getNewContainerPosition",
        value: function getNewContainerPosition() {
          if (this.slideCounter > this.overflowCellsLimit) {
            if (this.alignCells === "left") {
              this.lineUpCells();
              return -(this.overflowCellsLimit * this.fullCellWidth);
            }
          }

          if (this.slideCounter <= this.overflowCellsLimit) {
            if (this.previousSlideCounter > this.overflowCellsLimit) {
              this.lineUpCells();
            }

            return -(this.slideCounter * this.fullCellWidth);
          }
        }
      }, {
        key: "setContainerWidth",
        value: function setContainerWidth() {
          var containerWidth = this.getContainerWidth();
          this.element.style.width = containerWidth + "px";
        }
      }, {
        key: "getContainerWidth",
        value: function getContainerWidth() {
          this.totalContainerCellsCount = this.visibleCellsCount + this.overflowCellsLimit * 2;
          var containerWidth = this.totalContainerCellsCount * this.fullCellWidth;
          var totalImageWidth = this.images.length * this.fullCellWidth;

          if (totalImageWidth < containerWidth) {
            containerWidth = totalImageWidth;
          }

          return containerWidth;
        }
      }, {
        key: "getFile",
        value: function getFile(cellIndex) {
          var imageIndex = this.getFileIndex(cellIndex);
          var file = this.images[imageIndex];

          if (file && !file.type) {
            file.type = 'image';
          }

          return {
            image: this.images[imageIndex],
            imageIndex: imageIndex
          };
        }
      }, {
        key: "getFileIndex",
        value: function getFileIndex(cellIndex) {
          var positionIndex = this.getPositionIndex(cellIndex);
          var numberLeftCells = (this.totalContainerCellsCount - 1) / 2;
          var imageIndex;

          if (!this.isContainerLocked) {
            if (this.slideCounter <= this.overflowCellsLimit) {
              return cellIndex;
            } else {
              var cellLimitOverflow = this.slideCounter - this.overflowCellsLimit;
              imageIndex = positionIndex + cellLimitOverflow;
              return imageIndex;
            }
          }

          if (this.alignCells === "left") {
            if (this.slideCounter > this.overflowCellsLimit) {
              var _cellLimitOverflow = this.slideCounter - this.overflowCellsLimit;

              imageIndex = positionIndex + _cellLimitOverflow;
            } else {
              imageIndex = cellIndex;
            }
          }

          if (imageIndex > this.lastCellIndex) {
            return false;
          }

          return imageIndex;
        }
      }, {
        key: "transformPositionX",
        value: function transformPositionX(value) {
          var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.transitionDuration;
          this.element.style.transition = 'transform ' + duration + 'ms ' + this.transitionTimingFunction;
          this.element.style.transform = 'translateX(' + value + 'px)';
        }
      }, {
        key: "detectSlide",
        value: function detectSlide() {
          return this.distanceAbs >= this.minSwipeDistance;
        }
      }, {
        key: "next",
        value: function next() {
          if (this.isSlideInProgress) {
            return;
          }

          this.direction = 'left';
          this.handleSlide(1);
        }
      }, {
        key: "prev",
        value: function prev() {
          if (this.isSlideInProgress) {
            return;
          }

          this.direction = 'right';
          this.handleSlide(1);
        }
      }, {
        key: "select",
        value: function select(index) {
          this.slideCounter = index;
          this.quicklyPositionContainer();
        }
      }, {
        key: "handleSlide",
        value: function handleSlide() {
          var slideLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          this.slideLength = this.getSlideLength();
          this.slideLength = slideLength ? slideLength : this.limitSlideLength(this.slideLength);

          if (this.direction === 'left' && !this.isSlideInProgress) {
            this.preliminarySlideCounter = this.slideCounter + this.slideLength;

            if (!this.detectLastSlide(this.slideCounter + this.slideLength)) {
              this.newContainerPositionIndex = this.newContainerPositionIndex - this.slideLength;
              this.isSlideInProgress = true;

              if (this.isLazyLoad) {
                this.isContainerLocked = this.preliminarySlideCounter > this.overflowCellsLimit;

                if (this.detectContainerUnlock()) {
                  this.isContainerLocked = false;
                }
              }
            }
          }

          if (this.direction === 'right' && !this.isSlideInProgress) {
            if (this.slideCounter - this.slideLength < 0) {
              this.slideLength = this.slideCounter;
            }

            this.preliminarySlideCounter = this.slideCounter - this.slideLength;

            if (!this.isFirstCell) {
              this.newContainerPositionIndex = this.newContainerPositionIndex + this.slideLength;
              this.isSlideInProgress = true;

              if (this.isLazyLoad) {
                if (this.preliminarySlideCounter > this.overflowCellsLimit) {
                  this.isContainerLocked = true;
                } else {
                  this.isContainerLocked = false;
                }

                if (this.detectContainerUnlock()) {
                  this.isContainerLocked = false;
                }
              }
            }
          }

          this.alignContainer();
        }
      }, {
        key: "getSlideLength",
        value: function getSlideLength() {
          var correction = this.getContainerPositionCorrection();
          var length = Math.floor((this.distanceAbs + correction) / this.fullCellWidth);

          if (this.distanceAbs % this.fullCellWidth >= this.minSwipeDistance) {
            length++;
          }

          return length;
        }
      }, {
        key: "limitSlideLength",
        value: function limitSlideLength(slideLength) {
          if (slideLength > 1) {
            for (var i = 0; i < slideLength; i++) {
              var newSlideCounter = this.slideCounter + (slideLength - i);

              if (!this.detectLastSlide(newSlideCounter)) {
                slideLength = slideLength - i;
                this.isSlideLengthLimited = i > 0;
                break;
              }
            }
          }

          return slideLength;
        }
      }, {
        key: "detectLastSlide",
        value: function detectLastSlide(slideCounter) {
          return this.images.length - slideCounter < this.visibleCellsCount;
        }
      }, {
        key: "isNextArrowDisabled",
        value: function isNextArrowDisabled() {
          if (this.visibleCellsOverflowContainer) {
            return this.detectLastSlide(this.slideCounter + 1) && this.isContainerPositionCorrection;
          } else {
            return this.detectLastSlide(this.slideCounter + 1);
          }
        }
      }, {
        key: "isPrevArrowDisabled",
        value: function isPrevArrowDisabled() {
          return this.slideCounter === 0;
        }
      }, {
        key: "detectContainerUnlock",
        value: function detectContainerUnlock() {
          return this.images.length - this.preliminarySlideCounter < this.visibleCellsCount + this.overflowCellsLimit;
        }
      }, {
        key: "handleSlideEnd",
        value: function handleSlideEnd() {
          if (this.isSlideInProgress) {
            this.transformSlideEnd();
            this.isSlideInProgress = false;
            this.newContainerPositionIndex = 0;
            this.isSlideLengthLimited = undefined;
          }
        }
      }, {
        key: "transformSlideEnd",
        value: function transformSlideEnd() {
          if (this.isLazyLoad) {
            this.setSlideCounter();
            this.quicklyPositionContainer();
          }

          this.previousSlideCounter = this.slideCounter;
        }
      }, {
        key: "setSlideCounter",
        value: function setSlideCounter() {
          if (this.direction === 'left') {
            this.slideCounter = this.slideCounter + this.slideLength;
          }

          if (this.direction === 'right') {
            this.slideCounter = this.slideCounter - this.slideLength;
          }

          this.direction = undefined;
          this.slideLength = 0;
        }
      }, {
        key: "resetTransition",
        value: function resetTransition() {
          this.element.style.transition = '';
        }
      }, {
        key: "getElementPosition",
        value: function getElementPosition() {
          return this.element.getBoundingClientRect();
        }
      }, {
        key: "getCarouselElementPosition",
        value: function getCarouselElementPosition() {
          return this.properties.container.getBoundingClientRect();
        }
      }, {
        key: "getDistance",
        value: function getDistance() {
          return this.startX - this.moveX;
        }
      }, {
        key: "getDistanceAbs",
        value: function getDistanceAbs() {
          return Math.abs(this.startX - this.moveX);
        }
      }, {
        key: "getDirection",
        value: function getDirection() {
          var direction = Math.sign(this.startX - this.moveX);

          if (direction === -1) {
            return 'right';
          }

          if (direction === 1) {
            return 'left';
          }
        }
      }, {
        key: "lineUpCells",
        value: function lineUpCells() {
          var cells = this.element.children;

          for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            var positionX = this.getCellPositionX(i);
            cell.style.transform = 'translateX(' + positionX + 'px)';
          }

          ;
        }
      }, {
        key: "getCellPositionX",
        value: function getCellPositionX(index) {
          var positionIndex = this.getPositionIndex(index);
          return positionIndex * this.fullCellWidth;
        }
      }, {
        key: "getPositionIndex",
        value: function getPositionIndex(cellIndex) {
          var slideCounter = this.slideCounter - this.overflowCellsLimit;
          var positionIndex;

          if (slideCounter > this.totalContainerCellsCount) {
            slideCounter = slideCounter % this.totalContainerCellsCount;
          }

          if (slideCounter < 0) {
            return cellIndex;
          } else {
            positionIndex = cellIndex - slideCounter;

            if (positionIndex < 0) {
              positionIndex = this.totalContainerCellsCount + positionIndex;
            }
          }

          return positionIndex;
        }
      }, {
        key: "getCenterPositionIndex",
        value: function getCenterPositionIndex() {
          return (this.totalContainerCellsCount - 1) / 2;
        }
      }, {
        key: "isFirstCell",
        get: function get() {
          return this.slideCounter === 0;
        }
      }, {
        key: "lastCellIndex",
        get: function get() {
          return this.images.length ? this.images.length - 1 : this.cells.length - 1;
        }
      }, {
        key: "overflowCellsLimit",
        get: function get() {
          return this.properties.overflowCellsLimit;
        }
      }, {
        key: "cellLimit",
        get: function get() {
          return this.visibleCellsCount + this.overflowCellsLimit * 2;
        }
      }, {
        key: "images",
        get: function get() {
          return this.properties.images;
        }
      }, {
        key: "margin",
        get: function get() {
          return this.properties.margin;
        }
      }, {
        key: "minSwipeDistance",
        get: function get() {
          return this.properties.minSwipeDistance;
        }
      }, {
        key: "transitionDuration",
        get: function get() {
          return this.properties.transitionDuration;
        }
      }, {
        key: "transitionTimingFunction",
        get: function get() {
          return this.properties.transitionTimingFunction;
        }
      }, {
        key: "fullCellWidth",
        get: function get() {
          return this.properties.cellWidth + this.margin;
        }
      }, {
        key: "visibleCellsCount",
        get: function get() {
          return Math.ceil(this.visibleWidth / this.fullCellWidth);
        }
      }, {
        key: "lapCounter",
        get: function get() {
          return Math.floor(this.slideCounter / this.totalContainerCellsCount);
        }
      }, {
        key: "visibleCellsOverflowContainer",
        get: function get() {
          return this.visibleCellsCount * this.fullCellWidth - this.margin > this.visibleWidth;
        }
      }, {
        key: "containerOverflowRightCount",
        get: function get() {
          var totalOverflowCellsCount = this.images.length - this.totalContainerCellsCount;
          var overflowRight = 0;

          if (totalOverflowCellsCount > 0) {
            overflowRight = totalOverflowCellsCount - (this.previousSlideCounter - this.overflowCellsLimit);

            if (overflowRight > 0) {
              return overflowRight;
            }
          }

          return overflowRight;
        }
      }]);

      return Carousel;
    }();

    var EventService = /*#__PURE__*/function () {
      function EventService() {
        _classCallCheck(this, EventService);

        this.emitter = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
      }

      _createClass(EventService, [{
        key: "emitChangeEvent",
        value: function emitChangeEvent(data) {
          this.emitter.next(data);
        }
      }]);

      return EventService;
    }();

    EventService.ɵfac = function EventService_Factory(t) {
      return new (t || EventService)();
    };

    EventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: EventService,
      factory: EventService.ɵfac
    });

    var CarouselComponent = /*#__PURE__*/function () {
      function CarouselComponent(elementRef, ref, overlayEventService) {
        var _this44 = this;

        _classCallCheck(this, CarouselComponent);

        this.elementRef = elementRef;
        this.ref = ref;
        this.overlayEventService = overlayEventService;
        this.minTimeout = 30;
        this._cellWidth = 200;
        this._transitionDuration = 200;
        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.height = 200;
        this.margin = 10;
        this.objectFit = 'cover';
        this.minSwipeDistance = 50;
        this.transitionTimingFunction = 'ease';
        this.counterSeparator = " / ";
        this.overflowCellsLimit = 3;
        this.listeners = 'mouse and touch';
        this.arrows = true;
        this.arrowsTheme = 'light';
        this.hostClassCarousel = true;
        /* Touchstart */

        this.handleTouchstart = function (event) {
          event.preventDefault();

          _this44.carousel.handleTouchstart(event);

          _this44.isMoving = true;

          _this44.events.emit({
            type: 'touchstart',
            event: event
          });
        };
        /* Touchmove */


        this.handleHorizontalSwipe = function (event) {
          event.preventDefault();

          _this44.carousel.handleHorizontalSwipe(event);

          _this44.events.emit({
            type: 'swipe',
            event: event
          });
        };
        /* Touchend */


        this.handleTouchend = function (event) {
          var touches = event.touches;

          _this44.carousel.handleTouchend(event);

          _this44.isMoving = false;

          _this44.events.emit({
            type: 'touchend',
            event: event
          });
        };
        /* Tap */


        this.handleTap = function (event) {
          var i = _this44.carousel.slideCounter;
          var cellIndex = _this44.carousel.currentCellIndex;

          var fileIndex = _this44.carousel.getFileIndex(i);

          var file = _this44.carousel.getFile(cellIndex);

          _this44.events.emit({
            type: 'click',
            file: file,
            index: fileIndex
          });
        };
      }

      _createClass(CarouselComponent, [{
        key: "onWindowResize",
        value: function onWindowResize(event) {
          this.landscapeMode = this.isLandscape;
          this.ref.detectChanges();
          this.initCarousel();
          this.carousel.lineUpCells();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.touches = new Touches({
            element: this.elementRef.nativeElement.querySelector('.carousel-cells'),
            listeners: this.listeners
          });
          this.touches.on('touchstart', this.handleTouchstart);
          this.touches.on('horizontal-swipe', this.handleHorizontalSwipe);
          this.touches.on('touchend', this.handleTouchend);
          this.touches.on('mousedown', this.handleTouchstart);
          this.touches.on('mouseup', this.handleTouchend);
          this.touches.on('tap', this.handleTap);
          this.initCarousel();
          this.setDimensions();
          this.setInitialIndex();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.carousel.lineUpCells();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.width || changes.height) {
            this.setDimensions();
            this.initCarousel();
            this.carousel.lineUpCells();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.touches.destroy();
        }
      }, {
        key: "initCarousel",
        value: function initCarousel() {
          this.carousel = new Carousel({
            element: this.elementRef.nativeElement.querySelector('.carousel-cells'),
            container: this.elementRef.nativeElement,
            images: this.images,
            cellWidth: this.getCellWidth(),
            overflowCellsLimit: this.overflowCellsLimit,
            visibleWidth: this.width,
            margin: this.margin,
            minSwipeDistance: this.minSwipeDistance,
            transitionDuration: this.transitionDuration,
            transitionTimingFunction: this.transitionTimingFunction,
            videoProperties: this.videoProperties
          });
        }
      }, {
        key: "setDimensions",
        value: function setDimensions() {
          this.hostStyleHeight = this.height + 'px';
          this.hostStyleWidth = this.width + 'px';
        }
      }, {
        key: "getFile",
        value: function getFile(index) {
          return this.carousel.getFile(index);
        }
      }, {
        key: "handleTransitionendCellContainer",
        value: function handleTransitionendCellContainer(event) {
          this.carousel.handleSlideEnd();
        }
      }, {
        key: "toggleVideo",
        value: function toggleVideo(video) {
          event.preventDefault();

          if (this.videoProperties.noPlay) {
            return;
          }

          if (video.paused) {
            video.play();
            this.isVideoPlaying = true;
          } else {
            video.pause();
            this.isVideoPlaying = false;
          }

          this.ref.detectChanges();
        }
      }, {
        key: "getCurrentIndex",
        value: function getCurrentIndex() {
          return this.carousel.slideCounter;
        }
      }, {
        key: "getCellWidth",
        value: function getCellWidth() {
          if (this._cellWidth === '100%') {
            return this.elementRef.nativeElement.clientWidth;
          } else {
            return this._cellWidth;
          }
        }
      }, {
        key: "next",
        value: function next() {
          this.carousel.next(1);
        }
      }, {
        key: "prev",
        value: function prev() {
          this.carousel.prev(1);
        }
      }, {
        key: "select",
        value: function select(index) {
          this.carousel.select(index);
        }
      }, {
        key: "isNextArrowDisabled",
        value: function isNextArrowDisabled() {
          return this.carousel.isNextArrowDisabled();
        }
      }, {
        key: "isPrevArrowDisabled",
        value: function isPrevArrowDisabled() {
          return this.carousel.isPrevArrowDisabled();
        }
      }, {
        key: "close",
        value: function close() {
          this.overlayEventService.emitChangeEvent({
            type: 'Hide'
          });
        }
      }, {
        key: "setInitialIndex",
        value: function setInitialIndex() {
          if (this._properties.metadata.index != undefined) {
            this.select(this._properties.metadata.index);
          }
        }
      }, {
        key: "isLandscape",
        get: function get() {
          return window.innerWidth > window.innerHeight;
        }
      }, {
        key: "isSafari",
        get: function get() {
          var ua = navigator.userAgent.toLowerCase();

          if (ua.indexOf('safari') !== -1) {
            return !(ua.indexOf('chrome') > -1);
          }
        }
      }, {
        key: "counter",
        get: function get() {
          return this.carousel.slideCounter + 1 + this.counterSeparator + this.images.length;
        }
      }, {
        key: "images",
        set: function set(images) {
          this._images = images;
        },
        get: function get() {
          return this._images;
        }
      }, {
        key: "isNgContent",
        get: function get() {
          return this.elementRef.nativeElement.querySelector('.carousel-content-wrapper').children.length > 0;
        }
      }, {
        key: "transitionDuration",
        set: function set(value) {
          this._transitionDuration = value;
        },
        get: function get() {
          if (this._transitionDuration === 0) {
            return 1;
          } else {
            return this._transitionDuration;
          }
        }
      }, {
        key: "cellWidth",
        set: function set(value) {
          if (value) {
            this._cellWidth = value;
          }
        }
      }, {
        key: "isCounter",
        set: function set(value) {
          if (value) {
            this._isCounter = value;
          }
        },
        get: function get() {
          return this._isCounter && this.images.length > 1;
        }
      }, {
        key: "overlayProperties",
        set: function set(properties) {
          this._properties = properties;
          this._images = this._properties.metadata.images;
          this._cellWidth = this._properties.metadata.width;
          this.height = this._properties.metadata.height;
          this.objectFit = this._properties.metadata.objectFit;
          this.margin = this._properties.metadata.margin;
          this.transitionDuration = this._properties.metadata.transitionDuration;
          this.overflowCellsLimit = this._properties.metadata.overflowCellsLimit;
          this.minSwipeDistance = this._properties.metadata.minSwipeDistance;
          this.transitionTimingFunction = this._properties.metadata.transitionTimingFunction;
          this._isCounter = this._properties.metadata.counter;
          this.counterSeparator = this._properties.metadata.counterSeparator;
          this.arrows = this._properties.metadata.arrows;
        }
      }, {
        key: "properties",
        get: function get() {
          return this._properties;
        }
      }, {
        key: "cellLimit",
        get: function get() {
          if (this.carousel) {
            return this.carousel.cellLimit;
          }
        }
      }]);

      return CarouselComponent;
    }();

    CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
      return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](EventService));
    };

    CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CarouselComponent,
      selectors: [["carousel"], ["", "carousel", ""]],
      hostVars: 6,
      hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function CarouselComponent_resize_HostBindingHandler($event) {
            return ctx.onWindowResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.hostStyleHeight)("width", ctx.hostStyleWidth);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("carousel", ctx.hostClassCarousel);
        }
      },
      inputs: {
        height: "height",
        margin: "margin",
        objectFit: "objectFit",
        minSwipeDistance: "minSwipeDistance",
        transitionTimingFunction: "transitionTimingFunction",
        counterSeparator: "counterSeparator",
        overflowCellsLimit: "overflowCellsLimit",
        listeners: "listeners",
        arrows: "arrows",
        arrowsTheme: "arrowsTheme",
        images: "images",
        transitionDuration: "transitionDuration",
        cellWidth: "cellWidth",
        isCounter: ["counter", "isCounter"],
        overlayProperties: "overlayProperties",
        width: "width",
        borderRadius: "borderRadius",
        videoProperties: "videoProperties",
        arrowsOutside: "arrowsOutside"
      },
      outputs: {
        events: "events"
      },
      exportAs: ["carousel"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 7,
      vars: 5,
      consts: [[1, "carousel-backdrop"], [1, "carousel-close", 3, "click"], ["class", "carousel-counter", 4, "ngIf"], [1, "carousel-container"], [1, "carousel-cells", 3, "transitionend"], ["ngFor", "", 3, "ngForOf"], ["class", "carousel-arrows", 3, "carousel-arrows-outside", "carousel-dark-arrows", 4, "ngIf"], [1, "carousel-counter"], ["class", "carousel-cell", 3, "width", "border-radius", 4, "ngIf"], [1, "carousel-cell"], ["draggable", "false", 3, "src", "object-fit", 4, "ngIf"], [3, "ngIf"], ["draggable", "false", 3, "src"], [1, "carousel-play", 3, "click"], [3, "loop", "muted", "controls"], ["video", ""], ["type", "video/mp4", 3, "src"], [1, "carousel-arrows"], [1, "carousel-arrow", "carousel-arrow-prev", 3, "click"], [1, "carousel-arrow", "carousel-arrow-next", 3, "click"]],
      template: function CarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_Template_div_click_1_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CarouselComponent_div_2_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("transitionend", function CarouselComponent_Template_div_transitionend_4_listener($event) {
            return ctx.handleTransitionendCellContainer($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CarouselComponent_ng_template_5_Template, 1, 1, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CarouselComponent_div_6_Template, 3, 8, "div", 6);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCounter);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("carousel-moving", ctx.isMoving);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.arrows);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["[_nghost-%COMP%]{position:relative;display:block;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10000;transform-origin:top left;box-sizing:border-box}[_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%]{overflow:hidden;width:100%;height:100%;cursor:-webkit-grab;cursor:grab}[_nghost-%COMP%]   .carousel-container.carousel-moving[_ngcontent-%COMP%]{cursor:-webkit-grabbing;cursor:grabbing}[_nghost-%COMP%]   .carousel-counter[_ngcontent-%COMP%]{text-align:right;position:absolute;z-index:30;transition:opacity .2s;top:15px;left:10px;border-radius:13px;background-color:rgba(23,37,68,.3);font-size:13px;color:#fff;padding:5px 7px;line-height:initial}[_nghost-%COMP%]   .carousel-cells[_ngcontent-%COMP%]{transition:transform .2s;width:100%;height:100%;display:block}[_nghost-%COMP%]   .carousel-cells[_ngcontent-%COMP%]     .carousel-cell.swiper-prev-image{transform:translate3d(-100%,0,0)}[_nghost-%COMP%]   .carousel-cells[_ngcontent-%COMP%]     .carousel-cell.swiper-next-image{transform:translate3d(100%,0,0)}[_nghost-%COMP%]   .carousel-cells[_ngcontent-%COMP%]     .carousel-cell{width:100%;height:100%;text-align:center;position:absolute;display:flex;align-items:center;justify-content:center;overflow:hidden}[_nghost-%COMP%]   .carousel-cells[_ngcontent-%COMP%]     .carousel-cell img, [_nghost-%COMP%]   .carousel-cells[_ngcontent-%COMP%]     .carousel-cell video{width:100%;height:100%;position:relative;-o-object-fit:contain;object-fit:contain}[_nghost-%COMP%]   .carousel-cells[_ngcontent-%COMP%]     .carousel-cell img.swiper-hide{display:none}[_nghost-%COMP%]   .carousel-cells[_ngcontent-%COMP%]     .carousel-cell .carousel-play{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1}[_nghost-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:center;border-radius:100px;position:absolute;top:50%;margin-top:-20px;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}[_nghost-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{left:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}[_nghost-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{right:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{left:-60px}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{right:-60px}[_nghost-%COMP%]   .carousel-dark-arrows[_ngcontent-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{-webkit-filter:invert(1);filter:invert(1)}[_nghost-%COMP%]   .carousel-arrow-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.5}[_nghost-%COMP%]   .carousel-close[_ngcontent-%COMP%]{position:fixed;top:10px;right:10px;width:40px;height:40px;z-index:100;cursor:pointer;background-repeat:no-repeat;background-size:31px;background-position:center;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);-webkit-filter:invert(1);filter:invert(1)}[_nghost-%COMP%]   .carousel-backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:#000;opacity:.5}"]
    });

    CarouselComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: EventService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "images", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "events", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "height", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "borderRadius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "margin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "objectFit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "minSwipeDistance", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "transitionDuration", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "transitionTimingFunction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "videoProperties", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "counterSeparator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "overflowCellsLimit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "listeners", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cellWidth')], CarouselComponent.prototype, "cellWidth", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('counter')], CarouselComponent.prototype, "isCounter", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "arrows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "arrowsOutside", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "arrowsTheme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "overlayProperties", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.carousel')], CarouselComponent.prototype, "hostClassCarousel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height')], CarouselComponent.prototype, "hostStyleHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width')], CarouselComponent.prototype, "hostStyleWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], CarouselComponent.prototype, "onWindowResize", null);

    var AdDirective = function AdDirective(viewContainerRef) {
      _classCallCheck(this, AdDirective);

      this.viewContainerRef = viewContainerRef;
    };

    AdDirective.ɵfac = function AdDirective_Factory(t) {
      return new (t || AdDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]));
    };

    AdDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AdDirective,
      selectors: [["", "ad-host", ""]]
    });

    AdDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }];
    };

    var OverlayContainerComponent = /*#__PURE__*/function () {
      function OverlayContainerComponent(componentFactoryResolver, elementRef, eventService) {
        var _this45 = this;

        _classCallCheck(this, OverlayContainerComponent);

        this.componentFactoryResolver = componentFactoryResolver;
        this.elementRef = elementRef;
        this.eventService = eventService;
        this.overlayBackdrop = true;
        this.minTimeout = 30;
        this._hostOpacity = 0;
        this.globalEventsSubscription = this.eventService.emitter.subscribe(function (event) {
          _this45.handleGlobalEvents(event);
        });
      }

      _createClass(OverlayContainerComponent, [{
        key: "onClick",
        value: function onClick(event) {
          if (!this.elementRef.nativeElement.contains(event.target)) {
            if (this.hostShown) {
              this.closeOverlay();
            }
          }
        }
      }, {
        key: "transitionEnd",
        value: function transitionEnd(event) {
          if (event.target.tagName.toLowerCase() != "overlay") {
            return;
          }

          if (event.propertyName != "opacity") {
            return;
          }

          if (this.hostShown) {
            this.closeOverlayEnd(); //this.stateEvents.emit("shown");
          } else {
            this.hostShown = true; //this.stateEvents.emit("hidden");
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this46 = this;

          this.loadComponent();
          this.initialOverlay();
          setTimeout(function () {
            _this46.isInitial = true;
          }, this.minTimeout); // Note: not good
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this47 = this;

          setTimeout(function () {
            _this47.showOverlayAnimation();
          }, this.minTimeout);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.globalEventsSubscription) {
            this.globalEventsSubscription.unsubscribe();
          }
        }
      }, {
        key: "initialOverlay",
        value: function initialOverlay() {
          this.hostTransform = 'translateY(' + this.properties.animationTranslateY + ')';
        }
      }, {
        key: "showOverlayAnimation",
        value: function showOverlayAnimation() {
          this.hostOpacity = 1;
          this.hostTransform = 'translateY(0px)';
        }
      }, {
        key: "loadComponent",
        value: function loadComponent() {
          var adItem = this.properties;
          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.mainComponent);
          var viewContainerRef = this.adHost.viewContainerRef;
          viewContainerRef.clear();
          var componentRef = viewContainerRef.createComponent(componentFactory);
          var componentRefElement = componentRef.location.nativeElement; // Set styles

          componentRefElement.style.width = this.properties.width;
          componentRefElement.style.height = this.properties.height; // Set classes

          if (typeof this.popoverClass === 'string') {
            componentRefElement.classList.add(this.popoverClass);
          }

          if (typeof this.popoverClass === 'object') {
            this.popoverClass.forEach(function (className) {
              componentRefElement.classList.add(className);
            });
          } // Pass properties


          componentRef.instance.overlayProperties = this.properties;
        }
      }, {
        key: "closeOverlay",
        value: function closeOverlay() {
          this.hostOpacity = 0;
          this.hostTransform = 'translateY(' + this.properties.animationTranslateY + ')';
        }
      }, {
        key: "closeOverlayEnd",
        value: function closeOverlayEnd() {
          this.hostShown = false;
          this.eventService.emitChangeEvent({
            type: '[Overlay] Hide'
          });
        }
      }, {
        key: "handleGlobalEvents",
        value: function handleGlobalEvents(event) {
          if (event.type === 'Hide') {
            this.closeOverlay();
          }
        }
      }, {
        key: "hostOpacity",
        get: function get() {
          return this.properties.fadeIn ? this._hostOpacity : 1;
        },
        set: function set(value) {
          this._hostOpacity = value;
        }
      }, {
        key: "hostTransition",
        get: function get() {
          var duration = this.properties.animationDuration + 'ms ';
          var esing = this.properties.animationTimingFunction;
          return 'opacity ' + duration + esing + ', transform ' + duration + esing;
        }
      }, {
        key: "hostZIndex",
        get: function get() {
          return this.properties.zIndex;
        }
      }, {
        key: "hostWidth",
        get: function get() {
          return this.properties.wrapperWidth;
        }
      }, {
        key: "hostHeight",
        get: function get() {
          return this.properties.wrapperHeight;
        }
      }, {
        key: "hostPosition",
        get: function get() {
          return this.properties.position;
        }
      }, {
        key: "popoverClass",
        get: function get() {
          if (this.properties.metadata) {
            return this.properties.metadata.popoverClass;
          }
        }
      }]);

      return OverlayContainerComponent;
    }();

    OverlayContainerComponent.ɵfac = function OverlayContainerComponent_Factory(t) {
      return new (t || OverlayContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](EventService));
    };

    OverlayContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: OverlayContainerComponent,
      selectors: [["overlay"]],
      viewQuery: function OverlayContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](AdDirective, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.adHost = _t.first);
        }
      },
      hostVars: 16,
      hostBindings: function OverlayContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OverlayContainerComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("transitionend", function OverlayContainerComponent_transitionend_HostBindingHandler($event) {
            return ctx.transitionEnd($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("opacity", ctx.hostOpacity)("transition", ctx.hostTransition)("z-index", ctx.hostZIndex)("width", ctx.hostWidth)("height", ctx.hostHeight)("position", ctx.hostPosition)("transform", ctx.hostTransform);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("overlay-shown", ctx.hostShown);
        }
      },
      inputs: {
        properties: "properties"
      },
      decls: 1,
      vars: 0,
      consts: [["ad-host", ""]],
      template: function OverlayContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OverlayContainerComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        }
      },
      directives: [AdDirective],
      styles: ["[_nghost-%COMP%]{position:absolute;top:0;left:0}[_nghost-%COMP%]   .overlay-backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:#000;opacity:0;z-index:1000;pointer-events:auto}"]
    });

    OverlayContainerComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: EventService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(AdDirective, {
      "static": true
    })], OverlayContainerComponent.prototype, "adHost", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OverlayContainerComponent.prototype, "properties", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.opacity')], OverlayContainerComponent.prototype, "hostOpacity", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.transition')], OverlayContainerComponent.prototype, "hostTransition", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.transform')], OverlayContainerComponent.prototype, "hostTransform", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.z-index')], OverlayContainerComponent.prototype, "hostZIndex", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width')], OverlayContainerComponent.prototype, "hostWidth", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height')], OverlayContainerComponent.prototype, "hostHeight", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.position')], OverlayContainerComponent.prototype, "hostPosition", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.overlay-shown')], OverlayContainerComponent.prototype, "hostShown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])], OverlayContainerComponent.prototype, "onClick", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('transitionend', ['$event'])], OverlayContainerComponent.prototype, "transitionEnd", null);
    var defaultProperties = {
      animationDuration: 100,
      animationTimingFunction: 'ease-in-out',
      position: 'absolute',
      zIndex: 1000,
      fadeIn: true
    };

    var Overlay = /*#__PURE__*/function () {
      function Overlay(componentFactoryResolver, appRef, injector, eventService) {
        var _this48 = this;

        _classCallCheck(this, Overlay);

        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.eventService = eventService;
        this.componentRefs = {};
        this._properties = {};
        this.globalEventsSubscription = this.eventService.emitter.subscribe(function (event) {
          _this48.handleGlobalEvents(event);
        });
      }

      _createClass(Overlay, [{
        key: "appendComponentToBody",
        value: function appendComponentToBody(properties) {
          var component = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : OverlayContainerComponent;

          //if (this.componentRefs[properties.id]){
          if (this.componentRefs[0]) {
            return;
          }

          var componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector); //this.componentRefs[properties.id] = componentRef;

          this.componentRefs[0] = componentRef;
          componentRef.instance.properties = properties;
          this.appRef.attachView(componentRef.hostView);
          var domElem = componentRef.hostView.rootNodes[0]; // Add to body

          document.body.appendChild(domElem);
        }
        /*
        appendComponentToTag(element: any, tagname: string = ''):void {
            if (tagname){
                document.getElementsByTagName(tagname)[0].appendChild(element);
            } else {
                document.body.appendChild(element);
            }
        }
        */

      }, {
        key: "load",
        value: function load(properties) {
          properties = this.applyPropertieDefaults(defaultProperties, properties);
          this.appendComponentToBody(properties);
        }
      }, {
        key: "close",
        value: function close() {
          /*
          if (this.componentRefs[prop.id]){
              (<ContainerProperties>this.componentRefs[prop.id].instance).closeOverlay();
          }
          */

          var prop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        }
      }, {
        key: "applyPropertieDefaults",
        value: function applyPropertieDefaults(defaultProperties, properties) {
          if (!properties) {
            properties = {};
          }

          if (!properties.index) {
            properties.index = 0;
          }

          this._defaultProperties = Object.assign({}, defaultProperties);
          return Object.assign(this._defaultProperties, properties);
        }
      }, {
        key: "objectLength",
        value: function objectLength(obj) {
          var length = 0,
              key;

          for (key in obj) {
            if (obj.hasOwnProperty(key)) length++;
          }

          return length;
        }
      }, {
        key: "handleGlobalEvents",
        value: function handleGlobalEvents(event) {
          if (event.type === '[Overlay] Hide') {
            this.handleCloseEvent();
          }
        }
      }, {
        key: "handleCloseEvent",
        value: function handleCloseEvent() {
          //const id = 'popover'; // Note: pass id in event
          this.appRef.detachView(this.componentRefs[0].hostView);
          this.componentRefs[0].destroy();
          delete this.componentRefs[0];
        }
      }]);

      return Overlay;
    }();

    Overlay.ɵfac = function Overlay_Factory(t) {
      return new (t || Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](EventService));
    };

    Overlay.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: Overlay,
      factory: Overlay.ɵfac
    });

    Overlay.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: EventService
      }];
    };

    var defaultProperties$1 = {
      transitionDuration: 400,
      minSwipeDistance: 50,
      transitionTimingFunction: 'ease',
      counterSeparator: " / ",
      arrows: true
    };

    var Gallery = /*#__PURE__*/function () {
      function Gallery(overlay, overlayEventService) {
        _classCallCheck(this, Gallery);

        this.overlay = overlay;
        this.overlayEventService = overlayEventService;
      }

      _createClass(Gallery, [{
        key: "load",
        value: function load(properties) {
          properties = this.applyPropertieDefaults(defaultProperties$1, properties);
          this.overlay.load({
            id: 'gallery',
            mainComponent: CarouselComponent,
            width: document.body.clientWidth + 'px',
            overlayBackdrop: true,
            position: 'fixed',
            metadata: {
              images: properties.images,
              index: properties.index,
              width: document.body.clientWidth,
              height: window.innerHeight,
              objectFit: 'none',
              margin: 0,
              transitionDuration: properties.transitionDuration,
              overflowCellsLimit: 1,
              transitionTimingFunction: properties.transitionTimingFunction,
              counter: properties.counter,
              counterSeparator: properties.counterSeparator,
              arrows: properties.arrows,
              minSwipeDistance: properties.minSwipeDistance
            }
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.overlayEventService.emitChangeEvent({
            type: 'Hide'
          });
        }
      }, {
        key: "applyPropertieDefaults",
        value: function applyPropertieDefaults(defaultProperties, properties) {
          if (!properties) {
            properties = {};
          }

          for (var propertie in properties) {
            if (properties[propertie] === undefined) {
              delete properties[propertie];
            }
          }

          this._defaultProperties = Object.assign({}, defaultProperties);
          return Object.assign(this._defaultProperties, properties);
        }
      }]);

      return Gallery;
    }();

    Gallery.ɵfac = function Gallery_Factory(t) {
      return new (t || Gallery)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](EventService));
    };

    Gallery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: Gallery,
      factory: Gallery.ɵfac
    });

    Gallery.ctorParameters = function () {
      return [{
        type: Overlay
      }, {
        type: EventService
      }];
    };

    var OverlayModule = function OverlayModule() {
      _classCallCheck(this, OverlayModule);
    };

    OverlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: OverlayModule
    });
    OverlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function OverlayModule_Factory(t) {
        return new (t || OverlayModule)();
      },
      providers: [Overlay, EventService],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });

    var IvyGalleryModule = function IvyGalleryModule() {
      _classCallCheck(this, IvyGalleryModule);
    };

    IvyGalleryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: IvyGalleryModule
    });
    IvyGalleryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function IvyGalleryModule_Factory(t) {
        return new (t || IvyGalleryModule)();
      },
      providers: [Gallery],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], OverlayModule]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'carousel, [carousel]',
          exportAs: 'carousel',
          template: "<div class=\"carousel-backdrop\"></div>\n\n<div class=\"carousel-close\" (click)=\"close()\"></div>\n\n<div class=\"carousel-counter\" *ngIf=\"isCounter\">{{counter}}</div>\n\n<div class=\"carousel-container\" [class.carousel-moving]=\"isMoving\">\n\t<div class=\"carousel-cells\" (transitionend)=\"handleTransitionendCellContainer($event)\">\n\t\t<ng-template ngFor let-image [ngForOf]=\"images\" let-i=\"index\">\n\t\t\t<div class=\"carousel-cell\" \n\t\t\t\t*ngIf=\"i < cellLimit\" \n\t\t\t\t[style.width]=\"getCellWidth()+'px'\"\n\t\t\t\t[style.border-radius]=\"borderRadius+'px'\">\n\t\t\t\t<!-- Image -->\n\t\t\t\t<img \n\t\t\t\t\t*ngIf=\"getFile(i) && getFile(i)['image']\" \n\t\t\t\t\t[src]=\"getFile(i)['image']['path']\"\n\t\t\t\t\t[style.object-fit]=\"objectFit\"\n\t\t\t\t\tdraggable=\"false\" />\n\n\t\t\t\t<!-- Video -->\n\t\t\t\t<ng-template [ngIf]=\"getFile(i) && getFile(i)['type'] === 'video'\">\n\t\t\t\t\t<div class=\"carousel-play\" (click)=\"toggleVideo(video)\"></div>\n\n\t\t\t\t\t<video #video\n\t\t\t\t\t\t[loop]=\"videoProperties.loop\"\n\t\t\t\t\t\t[muted]=\"videoProperties.muted\"\n\t\t\t\t\t\t[controls]=\"isSafari\"\n\t\t\t\t\t\t[style.object-fit]=\"objectFit\"\n\t\t\t\t\t\t[style.border-radius]=\"borderRadius+'px'\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<source [src]=\"getFile(i)['path']\" type=\"video/mp4\">\n\t\t\t\t\t</video>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</ng-template>\n\t</div>\n</div>\n\n<div class=\"carousel-arrows\" \n\t[class.carousel-arrows-outside]=\"arrowsOutside\" \n\t[class.carousel-dark-arrows]=\"arrowsTheme === 'dark'\"\n\t*ngIf=\"arrows\">\n\t\n\t<div class=\"carousel-arrow carousel-arrow-prev\" [class.carousel-arrow-disabled]=\"isPrevArrowDisabled()\" (click)=\"prev()\"></div>\n\t<div class=\"carousel-arrow carousel-arrow-next\" [class.carousel-arrow-disabled]=\"isNextArrowDisabled()\" (click)=\"next()\"></div>\n</div>",
          styles: [":host{position:relative;display:block;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10000;transform-origin:top left;box-sizing:border-box}:host .carousel-container{overflow:hidden;width:100%;height:100%;cursor:-webkit-grab;cursor:grab}:host .carousel-container.carousel-moving{cursor:-webkit-grabbing;cursor:grabbing}:host .carousel-counter{text-align:right;position:absolute;z-index:30;transition:opacity .2s;top:15px;left:10px;border-radius:13px;background-color:rgba(23,37,68,.3);font-size:13px;color:#fff;padding:5px 7px;line-height:initial}:host .carousel-cells{transition:transform .2s;width:100%;height:100%;display:block}:host .carousel-cells ::ng-deep .carousel-cell.swiper-prev-image{transform:translate3d(-100%,0,0)}:host .carousel-cells ::ng-deep .carousel-cell.swiper-next-image{transform:translate3d(100%,0,0)}:host .carousel-cells ::ng-deep .carousel-cell{width:100%;height:100%;text-align:center;position:absolute;display:flex;align-items:center;justify-content:center;overflow:hidden}:host .carousel-cells ::ng-deep .carousel-cell img,:host .carousel-cells ::ng-deep .carousel-cell video{width:100%;height:100%;position:relative;-o-object-fit:contain;object-fit:contain}:host .carousel-cells ::ng-deep .carousel-cell img.swiper-hide{display:none}:host .carousel-cells ::ng-deep .carousel-cell .carousel-play{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1}:host .carousel-arrow{width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:center;border-radius:100px;position:absolute;top:50%;margin-top:-20px;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}:host .carousel-arrow-prev{left:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}:host .carousel-arrow-next{right:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}:host .carousel-arrows-outside .carousel-arrow-prev{left:-60px}:host .carousel-arrows-outside .carousel-arrow-next{right:-60px}:host .carousel-dark-arrows .carousel-arrow{-webkit-filter:invert(1);filter:invert(1)}:host .carousel-arrow-disabled{cursor:default;opacity:.5}:host .carousel-close{position:fixed;top:10px;right:10px;width:40px;height:40px;z-index:100;cursor:pointer;background-repeat:no-repeat;background-size:31px;background-position:center;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);-webkit-filter:invert(1);filter:invert(1)}:host .carousel-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;background-color:#000;opacity:.5}"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: EventService
        }];
      }, {
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        margin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        objectFit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minSwipeDistance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        transitionTimingFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        counterSeparator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        overflowCellsLimit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        listeners: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        arrows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        arrowsTheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hostClassCarousel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.carousel']
        }],
        images: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        transitionDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cellWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cellWidth']
        }],
        isCounter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['counter']
        }],
        overlayProperties: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onWindowResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:resize', ['$event']]
        }],
        hostStyleHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.height']
        }],
        hostStyleWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.width']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        borderRadius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        videoProperties: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        arrowsOutside: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[ad-host]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'overlay',
          template: "<!--\n<div class=\"overlay-backdrop\" \n\t*ngIf=\"properties.overlayBackdrop\" \n\t(click)=\"onBackdropClick()\" \n\t[ngClass]=\"properties.backdropClass\"></div>\n-->\n<!--\n<div class=\"overlay-container\"\n\t[ngStyle]=\"containerStyles\" \n\t[ngClass]=\"properties.overlayClass\">\n\n\t<ng-template ad-host></ng-template>\n</div>\n-->\n\n<ng-template ad-host></ng-template>",
          styles: [":host{position:absolute;top:0;left:0}:host .overlay-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;background-color:#000;opacity:0;z-index:1000;pointer-events:auto}"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: EventService
        }];
      }, {
        hostOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.opacity']
        }],
        hostTransition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.transition']
        }],
        hostZIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.z-index']
        }],
        hostWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.width']
        }],
        hostHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.height']
        }],
        hostPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.position']
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['document:click', ['$event']]
        }],
        transitionEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['transitionend', ['$event']]
        }],
        hostShown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.overlay-shown']
        }],
        hostTransform: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.transform']
        }],
        adHost: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [AdDirective, {
            "static": true
          }]
        }],
        properties: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Overlay, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: EventService
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Gallery, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: Overlay
        }, {
          type: EventService
        }];
      }, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OverlayModule, {
        declarations: function declarations() {
          return [OverlayContainerComponent, AdDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [OverlayContainerComponent, AdDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          exports: [],
          providers: [Overlay, EventService],
          bootstrap: [],
          entryComponents: [OverlayContainerComponent]
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IvyGalleryModule, {
        declarations: function declarations() {
          return [CarouselComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], OverlayModule];
        },
        exports: function exports() {
          return [CarouselComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IvyGalleryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [CarouselComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], OverlayModule],
          exports: [CarouselComponent],
          providers: [Gallery],
          bootstrap: [],
          entryComponents: [CarouselComponent]
        }]
      }], null, null);
    })();
    /*
     * Public API Surface of angular-gallery
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=angular-gallery.js.map

    /***/

  },

  /***/
  "./node_modules/hammerjs/hammer.js":
  /*!*****************************************!*\
    !*** ./node_modules/hammerjs/hammer.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesHammerjsHammerJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    /*! Hammer.JS - v2.0.7 - 2016-04-22
    * http://hammerjs.github.io/
    *
    * Copyright (c) 2016 Jorik Tangelder;
    * Licensed under the MIT license */


    (function (window, document, exportName, undefined) {
      'use strict';

      var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
      var TEST_ELEMENT = document.createElement('div');
      var TYPE_FUNCTION = 'function';
      var round = Math.round;
      var abs = Math.abs;
      var now = Date.now;
      /**
       * set a timeout with a given scope
       * @param {Function} fn
       * @param {Number} timeout
       * @param {Object} context
       * @returns {number}
       */

      function setTimeoutContext(fn, timeout, context) {
        return setTimeout(bindFn(fn, context), timeout);
      }
      /**
       * if the argument is an array, we want to execute the fn on each entry
       * if it aint an array we don't want to do a thing.
       * this is used by all the methods that accept a single and array argument.
       * @param {*|Array} arg
       * @param {String} fn
       * @param {Object} [context]
       * @returns {Boolean}
       */


      function invokeArrayArg(arg, fn, context) {
        if (Array.isArray(arg)) {
          each(arg, context[fn], context);
          return true;
        }

        return false;
      }
      /**
       * walk objects and arrays
       * @param {Object} obj
       * @param {Function} iterator
       * @param {Object} context
       */


      function each(obj, iterator, context) {
        var i;

        if (!obj) {
          return;
        }

        if (obj.forEach) {
          obj.forEach(iterator, context);
        } else if (obj.length !== undefined) {
          i = 0;

          while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
          }
        } else {
          for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
          }
        }
      }
      /**
       * wrap a method with a deprecation warning and stack trace
       * @param {Function} method
       * @param {String} name
       * @param {String} message
       * @returns {Function} A new function wrapping the supplied method.
       */


      function deprecate(method, name, message) {
        var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
        return function () {
          var e = new Error('get-stack-trace');
          var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
          var log = window.console && (window.console.warn || window.console.log);

          if (log) {
            log.call(window.console, deprecationMessage, stack);
          }

          return method.apply(this, arguments);
        };
      }
      /**
       * extend object.
       * means that properties in dest will be overwritten by the ones in src.
       * @param {Object} target
       * @param {...Object} objects_to_assign
       * @returns {Object} target
       */


      var assign;

      if (typeof Object.assign !== 'function') {
        assign = function assign(target) {
          if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
          }

          var output = Object(target);

          for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];

            if (source !== undefined && source !== null) {
              for (var nextKey in source) {
                if (source.hasOwnProperty(nextKey)) {
                  output[nextKey] = source[nextKey];
                }
              }
            }
          }

          return output;
        };
      } else {
        assign = Object.assign;
      }
      /**
       * extend object.
       * means that properties in dest will be overwritten by the ones in src.
       * @param {Object} dest
       * @param {Object} src
       * @param {Boolean} [merge=false]
       * @returns {Object} dest
       */


      var extend = deprecate(function extend(dest, src, merge) {
        var keys = Object.keys(src);
        var i = 0;

        while (i < keys.length) {
          if (!merge || merge && dest[keys[i]] === undefined) {
            dest[keys[i]] = src[keys[i]];
          }

          i++;
        }

        return dest;
      }, 'extend', 'Use `assign`.');
      /**
       * merge the values from src in the dest.
       * means that properties that exist in dest will not be overwritten by src
       * @param {Object} dest
       * @param {Object} src
       * @returns {Object} dest
       */

      var merge = deprecate(function merge(dest, src) {
        return extend(dest, src, true);
      }, 'merge', 'Use `assign`.');
      /**
       * simple class inheritance
       * @param {Function} child
       * @param {Function} base
       * @param {Object} [properties]
       */

      function inherit(child, base, properties) {
        var baseP = base.prototype,
            childP;
        childP = child.prototype = Object.create(baseP);
        childP.constructor = child;
        childP._super = baseP;

        if (properties) {
          assign(childP, properties);
        }
      }
      /**
       * simple function bind
       * @param {Function} fn
       * @param {Object} context
       * @returns {Function}
       */


      function bindFn(fn, context) {
        return function boundFn() {
          return fn.apply(context, arguments);
        };
      }
      /**
       * let a boolean value also be a function that must return a boolean
       * this first item in args will be used as the context
       * @param {Boolean|Function} val
       * @param {Array} [args]
       * @returns {Boolean}
       */


      function boolOrFn(val, args) {
        if (typeof val == TYPE_FUNCTION) {
          return val.apply(args ? args[0] || undefined : undefined, args);
        }

        return val;
      }
      /**
       * use the val2 when val1 is undefined
       * @param {*} val1
       * @param {*} val2
       * @returns {*}
       */


      function ifUndefined(val1, val2) {
        return val1 === undefined ? val2 : val1;
      }
      /**
       * addEventListener with multiple events at once
       * @param {EventTarget} target
       * @param {String} types
       * @param {Function} handler
       */


      function addEventListeners(target, types, handler) {
        each(splitStr(types), function (type) {
          target.addEventListener(type, handler, false);
        });
      }
      /**
       * removeEventListener with multiple events at once
       * @param {EventTarget} target
       * @param {String} types
       * @param {Function} handler
       */


      function removeEventListeners(target, types, handler) {
        each(splitStr(types), function (type) {
          target.removeEventListener(type, handler, false);
        });
      }
      /**
       * find if a node is in the given parent
       * @method hasParent
       * @param {HTMLElement} node
       * @param {HTMLElement} parent
       * @return {Boolean} found
       */


      function hasParent(node, parent) {
        while (node) {
          if (node == parent) {
            return true;
          }

          node = node.parentNode;
        }

        return false;
      }
      /**
       * small indexOf wrapper
       * @param {String} str
       * @param {String} find
       * @returns {Boolean} found
       */


      function inStr(str, find) {
        return str.indexOf(find) > -1;
      }
      /**
       * split string on whitespace
       * @param {String} str
       * @returns {Array} words
       */


      function splitStr(str) {
        return str.trim().split(/\s+/g);
      }
      /**
       * find if a array contains the object using indexOf or a simple polyFill
       * @param {Array} src
       * @param {String} find
       * @param {String} [findByKey]
       * @return {Boolean|Number} false when not found, or the index
       */


      function inArray(src, find, findByKey) {
        if (src.indexOf && !findByKey) {
          return src.indexOf(find);
        } else {
          var i = 0;

          while (i < src.length) {
            if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
              return i;
            }

            i++;
          }

          return -1;
        }
      }
      /**
       * convert array-like objects to real arrays
       * @param {Object} obj
       * @returns {Array}
       */


      function toArray(obj) {
        return Array.prototype.slice.call(obj, 0);
      }
      /**
       * unique array with objects based on a key (like 'id') or just by the array's value
       * @param {Array} src [{id:1},{id:2},{id:1}]
       * @param {String} [key]
       * @param {Boolean} [sort=False]
       * @returns {Array} [{id:1},{id:2}]
       */


      function uniqueArray(src, key, sort) {
        var results = [];
        var values = [];
        var i = 0;

        while (i < src.length) {
          var val = key ? src[i][key] : src[i];

          if (inArray(values, val) < 0) {
            results.push(src[i]);
          }

          values[i] = val;
          i++;
        }

        if (sort) {
          if (!key) {
            results = results.sort();
          } else {
            results = results.sort(function sortUniqueArray(a, b) {
              return a[key] > b[key];
            });
          }
        }

        return results;
      }
      /**
       * get the prefixed property
       * @param {Object} obj
       * @param {String} property
       * @returns {String|Undefined} prefixed
       */


      function prefixed(obj, property) {
        var prefix, prop;
        var camelProp = property[0].toUpperCase() + property.slice(1);
        var i = 0;

        while (i < VENDOR_PREFIXES.length) {
          prefix = VENDOR_PREFIXES[i];
          prop = prefix ? prefix + camelProp : property;

          if (prop in obj) {
            return prop;
          }

          i++;
        }

        return undefined;
      }
      /**
       * get a unique id
       * @returns {number} uniqueId
       */


      var _uniqueId = 1;

      function uniqueId() {
        return _uniqueId++;
      }
      /**
       * get the window object of an element
       * @param {HTMLElement} element
       * @returns {DocumentView|Window}
       */


      function getWindowForElement(element) {
        var doc = element.ownerDocument || element;
        return doc.defaultView || doc.parentWindow || window;
      }

      var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
      var SUPPORT_TOUCH = ('ontouchstart' in window);
      var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
      var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
      var INPUT_TYPE_TOUCH = 'touch';
      var INPUT_TYPE_PEN = 'pen';
      var INPUT_TYPE_MOUSE = 'mouse';
      var INPUT_TYPE_KINECT = 'kinect';
      var COMPUTE_INTERVAL = 25;
      var INPUT_START = 1;
      var INPUT_MOVE = 2;
      var INPUT_END = 4;
      var INPUT_CANCEL = 8;
      var DIRECTION_NONE = 1;
      var DIRECTION_LEFT = 2;
      var DIRECTION_RIGHT = 4;
      var DIRECTION_UP = 8;
      var DIRECTION_DOWN = 16;
      var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
      var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
      var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
      var PROPS_XY = ['x', 'y'];
      var PROPS_CLIENT_XY = ['clientX', 'clientY'];
      /**
       * create new input type manager
       * @param {Manager} manager
       * @param {Function} callback
       * @returns {Input}
       * @constructor
       */

      function Input(manager, callback) {
        var self = this;
        this.manager = manager;
        this.callback = callback;
        this.element = manager.element;
        this.target = manager.options.inputTarget; // smaller wrapper around the handler, for the scope and the enabled state of the manager,
        // so when disabled the input events are completely bypassed.

        this.domHandler = function (ev) {
          if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
          }
        };

        this.init();
      }

      Input.prototype = {
        /**
         * should handle the inputEvent data and trigger the callback
         * @virtual
         */
        handler: function handler() {},

        /**
         * bind the events
         */
        init: function init() {
          this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
          this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
          this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        },

        /**
         * unbind the events
         */
        destroy: function destroy() {
          this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
          this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
          this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        }
      };
      /**
       * create new input type manager
       * called by the Manager constructor
       * @param {Hammer} manager
       * @returns {Input}
       */

      function createInputInstance(manager) {
        var Type;
        var inputClass = manager.options.inputClass;

        if (inputClass) {
          Type = inputClass;
        } else if (SUPPORT_POINTER_EVENTS) {
          Type = PointerEventInput;
        } else if (SUPPORT_ONLY_TOUCH) {
          Type = TouchInput;
        } else if (!SUPPORT_TOUCH) {
          Type = MouseInput;
        } else {
          Type = TouchMouseInput;
        }

        return new Type(manager, inputHandler);
      }
      /**
       * handle input events
       * @param {Manager} manager
       * @param {String} eventType
       * @param {Object} input
       */


      function inputHandler(manager, eventType, input) {
        var pointersLen = input.pointers.length;
        var changedPointersLen = input.changedPointers.length;
        var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
        var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
        input.isFirst = !!isFirst;
        input.isFinal = !!isFinal;

        if (isFirst) {
          manager.session = {};
        } // source event is the normalized value of the domEvents
        // like 'touchstart, mouseup, pointerdown'


        input.eventType = eventType; // compute scale, rotation etc

        computeInputData(manager, input); // emit secret event

        manager.emit('hammer.input', input);
        manager.recognize(input);
        manager.session.prevInput = input;
      }
      /**
       * extend the data with some usable properties like scale, rotate, velocity etc
       * @param {Object} manager
       * @param {Object} input
       */


      function computeInputData(manager, input) {
        var session = manager.session;
        var pointers = input.pointers;
        var pointersLength = pointers.length; // store the first input to calculate the distance and direction

        if (!session.firstInput) {
          session.firstInput = simpleCloneInputData(input);
        } // to compute scale and rotation we need to store the multiple touches


        if (pointersLength > 1 && !session.firstMultiple) {
          session.firstMultiple = simpleCloneInputData(input);
        } else if (pointersLength === 1) {
          session.firstMultiple = false;
        }

        var firstInput = session.firstInput;
        var firstMultiple = session.firstMultiple;
        var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
        var center = input.center = getCenter(pointers);
        input.timeStamp = now();
        input.deltaTime = input.timeStamp - firstInput.timeStamp;
        input.angle = getAngle(offsetCenter, center);
        input.distance = getDistance(offsetCenter, center);
        computeDeltaXY(session, input);
        input.offsetDirection = getDirection(input.deltaX, input.deltaY);
        var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
        input.overallVelocityX = overallVelocity.x;
        input.overallVelocityY = overallVelocity.y;
        input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
        input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
        input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
        input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
        computeIntervalInputData(session, input); // find the correct target

        var target = manager.element;

        if (hasParent(input.srcEvent.target, target)) {
          target = input.srcEvent.target;
        }

        input.target = target;
      }

      function computeDeltaXY(session, input) {
        var center = input.center;
        var offset = session.offsetDelta || {};
        var prevDelta = session.prevDelta || {};
        var prevInput = session.prevInput || {};

        if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
          prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
          };
          offset = session.offsetDelta = {
            x: center.x,
            y: center.y
          };
        }

        input.deltaX = prevDelta.x + (center.x - offset.x);
        input.deltaY = prevDelta.y + (center.y - offset.y);
      }
      /**
       * velocity is calculated every x ms
       * @param {Object} session
       * @param {Object} input
       */


      function computeIntervalInputData(session, input) {
        var last = session.lastInterval || input,
            deltaTime = input.timeStamp - last.timeStamp,
            velocity,
            velocityX,
            velocityY,
            direction;

        if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
          var deltaX = input.deltaX - last.deltaX;
          var deltaY = input.deltaY - last.deltaY;
          var v = getVelocity(deltaTime, deltaX, deltaY);
          velocityX = v.x;
          velocityY = v.y;
          velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
          direction = getDirection(deltaX, deltaY);
          session.lastInterval = input;
        } else {
          // use latest velocity info if it doesn't overtake a minimum period
          velocity = last.velocity;
          velocityX = last.velocityX;
          velocityY = last.velocityY;
          direction = last.direction;
        }

        input.velocity = velocity;
        input.velocityX = velocityX;
        input.velocityY = velocityY;
        input.direction = direction;
      }
      /**
       * create a simple clone from the input used for storage of firstInput and firstMultiple
       * @param {Object} input
       * @returns {Object} clonedInputData
       */


      function simpleCloneInputData(input) {
        // make a simple copy of the pointers because we will get a reference if we don't
        // we only need clientXY for the calculations
        var pointers = [];
        var i = 0;

        while (i < input.pointers.length) {
          pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
          };
          i++;
        }

        return {
          timeStamp: now(),
          pointers: pointers,
          center: getCenter(pointers),
          deltaX: input.deltaX,
          deltaY: input.deltaY
        };
      }
      /**
       * get the center of all the pointers
       * @param {Array} pointers
       * @return {Object} center contains `x` and `y` properties
       */


      function getCenter(pointers) {
        var pointersLength = pointers.length; // no need to loop when only one touch

        if (pointersLength === 1) {
          return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
          };
        }

        var x = 0,
            y = 0,
            i = 0;

        while (i < pointersLength) {
          x += pointers[i].clientX;
          y += pointers[i].clientY;
          i++;
        }

        return {
          x: round(x / pointersLength),
          y: round(y / pointersLength)
        };
      }
      /**
       * calculate the velocity between two points. unit is in px per ms.
       * @param {Number} deltaTime
       * @param {Number} x
       * @param {Number} y
       * @return {Object} velocity `x` and `y`
       */


      function getVelocity(deltaTime, x, y) {
        return {
          x: x / deltaTime || 0,
          y: y / deltaTime || 0
        };
      }
      /**
       * get the direction between two points
       * @param {Number} x
       * @param {Number} y
       * @return {Number} direction
       */


      function getDirection(x, y) {
        if (x === y) {
          return DIRECTION_NONE;
        }

        if (abs(x) >= abs(y)) {
          return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
        }

        return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
      }
      /**
       * calculate the absolute distance between two points
       * @param {Object} p1 {x, y}
       * @param {Object} p2 {x, y}
       * @param {Array} [props] containing x and y keys
       * @return {Number} distance
       */


      function getDistance(p1, p2, props) {
        if (!props) {
          props = PROPS_XY;
        }

        var x = p2[props[0]] - p1[props[0]],
            y = p2[props[1]] - p1[props[1]];
        return Math.sqrt(x * x + y * y);
      }
      /**
       * calculate the angle between two coordinates
       * @param {Object} p1
       * @param {Object} p2
       * @param {Array} [props] containing x and y keys
       * @return {Number} angle
       */


      function getAngle(p1, p2, props) {
        if (!props) {
          props = PROPS_XY;
        }

        var x = p2[props[0]] - p1[props[0]],
            y = p2[props[1]] - p1[props[1]];
        return Math.atan2(y, x) * 180 / Math.PI;
      }
      /**
       * calculate the rotation degrees between two pointersets
       * @param {Array} start array of pointers
       * @param {Array} end array of pointers
       * @return {Number} rotation
       */


      function getRotation(start, end) {
        return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
      }
      /**
       * calculate the scale factor between two pointersets
       * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
       * @param {Array} start array of pointers
       * @param {Array} end array of pointers
       * @return {Number} scale
       */


      function getScale(start, end) {
        return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
      }

      var MOUSE_INPUT_MAP = {
        mousedown: INPUT_START,
        mousemove: INPUT_MOVE,
        mouseup: INPUT_END
      };
      var MOUSE_ELEMENT_EVENTS = 'mousedown';
      var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
      /**
       * Mouse events input
       * @constructor
       * @extends Input
       */

      function MouseInput() {
        this.evEl = MOUSE_ELEMENT_EVENTS;
        this.evWin = MOUSE_WINDOW_EVENTS;
        this.pressed = false; // mousedown state

        Input.apply(this, arguments);
      }

      inherit(MouseInput, Input, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function MEhandler(ev) {
          var eventType = MOUSE_INPUT_MAP[ev.type]; // on start we want to have the left mouse button down

          if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
          }

          if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
          } // mouse must be down


          if (!this.pressed) {
            return;
          }

          if (eventType & INPUT_END) {
            this.pressed = false;
          }

          this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
          });
        }
      });
      var POINTER_INPUT_MAP = {
        pointerdown: INPUT_START,
        pointermove: INPUT_MOVE,
        pointerup: INPUT_END,
        pointercancel: INPUT_CANCEL,
        pointerout: INPUT_CANCEL
      }; // in IE10 the pointer types is defined as an enum

      var IE10_POINTER_TYPE_ENUM = {
        2: INPUT_TYPE_TOUCH,
        3: INPUT_TYPE_PEN,
        4: INPUT_TYPE_MOUSE,
        5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816

      };
      var POINTER_ELEMENT_EVENTS = 'pointerdown';
      var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel'; // IE10 has prefixed support, and case-sensitive

      if (window.MSPointerEvent && !window.PointerEvent) {
        POINTER_ELEMENT_EVENTS = 'MSPointerDown';
        POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
      }
      /**
       * Pointer events input
       * @constructor
       * @extends Input
       */


      function PointerEventInput() {
        this.evEl = POINTER_ELEMENT_EVENTS;
        this.evWin = POINTER_WINDOW_EVENTS;
        Input.apply(this, arguments);
        this.store = this.manager.session.pointerEvents = [];
      }

      inherit(PointerEventInput, Input, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function PEhandler(ev) {
          var store = this.store;
          var removePointer = false;
          var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
          var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
          var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
          var isTouch = pointerType == INPUT_TYPE_TOUCH; // get index of the event in the store

          var storeIndex = inArray(store, ev.pointerId, 'pointerId'); // start and mouse must be down

          if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
              store.push(ev);
              storeIndex = store.length - 1;
            }
          } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
          } // it not found, so the pointer hasn't been down (so it's probably a hover)


          if (storeIndex < 0) {
            return;
          } // update the event in the store


          store[storeIndex] = ev;
          this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
          });

          if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
          }
        }
      });
      var SINGLE_TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
      };
      var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
      var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
      /**
       * Touch events input
       * @constructor
       * @extends Input
       */

      function SingleTouchInput() {
        this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
        this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
        this.started = false;
        Input.apply(this, arguments);
      }

      inherit(SingleTouchInput, Input, {
        handler: function TEhandler(ev) {
          var type = SINGLE_TOUCH_INPUT_MAP[ev.type]; // should we handle the touch events?

          if (type === INPUT_START) {
            this.started = true;
          }

          if (!this.started) {
            return;
          }

          var touches = normalizeSingleTouches.call(this, ev, type); // when done, reset the started state

          if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
          }

          this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
          });
        }
      });
      /**
       * @this {TouchInput}
       * @param {Object} ev
       * @param {Number} type flag
       * @returns {undefined|Array} [all, changed]
       */

      function normalizeSingleTouches(ev, type) {
        var all = toArray(ev.touches);
        var changed = toArray(ev.changedTouches);

        if (type & (INPUT_END | INPUT_CANCEL)) {
          all = uniqueArray(all.concat(changed), 'identifier', true);
        }

        return [all, changed];
      }

      var TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
      };
      var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
      /**
       * Multi-user touch events input
       * @constructor
       * @extends Input
       */

      function TouchInput() {
        this.evTarget = TOUCH_TARGET_EVENTS;
        this.targetIds = {};
        Input.apply(this, arguments);
      }

      inherit(TouchInput, Input, {
        handler: function MTEhandler(ev) {
          var type = TOUCH_INPUT_MAP[ev.type];
          var touches = getTouches.call(this, ev, type);

          if (!touches) {
            return;
          }

          this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
          });
        }
      });
      /**
       * @this {TouchInput}
       * @param {Object} ev
       * @param {Number} type flag
       * @returns {undefined|Array} [all, changed]
       */

      function getTouches(ev, type) {
        var allTouches = toArray(ev.touches);
        var targetIds = this.targetIds; // when there is only one touch, the process can be simplified

        if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
          targetIds[allTouches[0].identifier] = true;
          return [allTouches, allTouches];
        }

        var i,
            targetTouches,
            changedTouches = toArray(ev.changedTouches),
            changedTargetTouches = [],
            target = this.target; // get target touches from touches

        targetTouches = allTouches.filter(function (touch) {
          return hasParent(touch.target, target);
        }); // collect touches

        if (type === INPUT_START) {
          i = 0;

          while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
          }
        } // filter changed touches to only contain touches that exist in the collected target ids


        i = 0;

        while (i < changedTouches.length) {
          if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
          } // cleanup removed touches


          if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
          }

          i++;
        }

        if (!changedTargetTouches.length) {
          return;
        }

        return [// merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
      }
      /**
       * Combined touch and mouse input
       *
       * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
       * This because touch devices also emit mouse events while doing a touch.
       *
       * @constructor
       * @extends Input
       */


      var DEDUP_TIMEOUT = 2500;
      var DEDUP_DISTANCE = 25;

      function TouchMouseInput() {
        Input.apply(this, arguments);
        var handler = bindFn(this.handler, this);
        this.touch = new TouchInput(this.manager, handler);
        this.mouse = new MouseInput(this.manager, handler);
        this.primaryTouch = null;
        this.lastTouches = [];
      }

      inherit(TouchMouseInput, Input, {
        /**
         * handle mouse and touch events
         * @param {Hammer} manager
         * @param {String} inputEvent
         * @param {Object} inputData
         */
        handler: function TMEhandler(manager, inputEvent, inputData) {
          var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH,
              isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;

          if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
          } // when we're in a touch event, record touches to  de-dupe synthetic mouse event


          if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
          } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
          }

          this.callback(manager, inputEvent, inputData);
        },

        /**
         * remove the event listeners
         */
        destroy: function destroy() {
          this.touch.destroy();
          this.mouse.destroy();
        }
      });

      function recordTouches(eventType, eventData) {
        if (eventType & INPUT_START) {
          this.primaryTouch = eventData.changedPointers[0].identifier;
          setLastTouch.call(this, eventData);
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
          setLastTouch.call(this, eventData);
        }
      }

      function setLastTouch(eventData) {
        var touch = eventData.changedPointers[0];

        if (touch.identifier === this.primaryTouch) {
          var lastTouch = {
            x: touch.clientX,
            y: touch.clientY
          };
          this.lastTouches.push(lastTouch);
          var lts = this.lastTouches;

          var removeLastTouch = function removeLastTouch() {
            var i = lts.indexOf(lastTouch);

            if (i > -1) {
              lts.splice(i, 1);
            }
          };

          setTimeout(removeLastTouch, DEDUP_TIMEOUT);
        }
      }

      function isSyntheticEvent(eventData) {
        var x = eventData.srcEvent.clientX,
            y = eventData.srcEvent.clientY;

        for (var i = 0; i < this.lastTouches.length; i++) {
          var t = this.lastTouches[i];
          var dx = Math.abs(x - t.x),
              dy = Math.abs(y - t.y);

          if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
          }
        }

        return false;
      }

      var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
      var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined; // magical touchAction value

      var TOUCH_ACTION_COMPUTE = 'compute';
      var TOUCH_ACTION_AUTO = 'auto';
      var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented

      var TOUCH_ACTION_NONE = 'none';
      var TOUCH_ACTION_PAN_X = 'pan-x';
      var TOUCH_ACTION_PAN_Y = 'pan-y';
      var TOUCH_ACTION_MAP = getTouchActionProps();
      /**
       * Touch Action
       * sets the touchAction property or uses the js alternative
       * @param {Manager} manager
       * @param {String} value
       * @constructor
       */

      function TouchAction(manager, value) {
        this.manager = manager;
        this.set(value);
      }

      TouchAction.prototype = {
        /**
         * set the touchAction value on the element or enable the polyfill
         * @param {String} value
         */
        set: function set(value) {
          // find out the touch-action by the event handlers
          if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
          }

          if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
          }

          this.actions = value.toLowerCase().trim();
        },

        /**
         * just re-set the touchAction value
         */
        update: function update() {
          this.set(this.manager.options.touchAction);
        },

        /**
         * compute the value for the touchAction property based on the recognizer's settings
         * @returns {String} value
         */
        compute: function compute() {
          var actions = [];
          each(this.manager.recognizers, function (recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
              actions = actions.concat(recognizer.getTouchAction());
            }
          });
          return cleanTouchActions(actions.join(' '));
        },

        /**
         * this method is called on each input cycle and provides the preventing of the browser behavior
         * @param {Object} input
         */
        preventDefaults: function preventDefaults(input) {
          var srcEvent = input.srcEvent;
          var direction = input.offsetDirection; // if the touch action did prevented once this session

          if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
          }

          var actions = this.actions;
          var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
          var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
          var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

          if (hasNone) {
            //do not prevent defaults if this is a tap gesture
            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
              return;
            }
          }

          if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
          }

          if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
            return this.preventSrc(srcEvent);
          }
        },

        /**
         * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
         * @param {Object} srcEvent
         */
        preventSrc: function preventSrc(srcEvent) {
          this.manager.session.prevented = true;
          srcEvent.preventDefault();
        }
      };
      /**
       * when the touchActions are collected they are not a valid value, so we need to clean things up. *
       * @param {String} actions
       * @returns {*}
       */

      function cleanTouchActions(actions) {
        // none
        if (inStr(actions, TOUCH_ACTION_NONE)) {
          return TOUCH_ACTION_NONE;
        }

        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y); // if both pan-x and pan-y are set (different recognizers
        // for different directions, e.g. horizontal pan but vertical swipe?)
        // we need none (as otherwise with pan-x pan-y combined none of these
        // recognizers will work, since the browser would handle all panning

        if (hasPanX && hasPanY) {
          return TOUCH_ACTION_NONE;
        } // pan-x OR pan-y


        if (hasPanX || hasPanY) {
          return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
        } // manipulation


        if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
          return TOUCH_ACTION_MANIPULATION;
        }

        return TOUCH_ACTION_AUTO;
      }

      function getTouchActionProps() {
        if (!NATIVE_TOUCH_ACTION) {
          return false;
        }

        var touchMap = {};
        var cssSupports = window.CSS && window.CSS.supports;
        ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function (val) {
          // If css.supports is not supported but there is native touch-action assume it supports
          // all values. This is the case for IE 10 and 11.
          touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
        });
        return touchMap;
      }
      /**
       * Recognizer flow explained; *
       * All recognizers have the initial state of POSSIBLE when a input session starts.
       * The definition of a input session is from the first input until the last input, with all it's movement in it. *
       * Example session for mouse-input: mousedown -> mousemove -> mouseup
       *
       * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
       * which determines with state it should be.
       *
       * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
       * POSSIBLE to give it another change on the next cycle.
       *
       *               Possible
       *                  |
       *            +-----+---------------+
       *            |                     |
       *      +-----+-----+               |
       *      |           |               |
       *   Failed      Cancelled          |
       *                          +-------+------+
       *                          |              |
       *                      Recognized       Began
       *                                         |
       *                                      Changed
       *                                         |
       *                                  Ended/Recognized
       */


      var STATE_POSSIBLE = 1;
      var STATE_BEGAN = 2;
      var STATE_CHANGED = 4;
      var STATE_ENDED = 8;
      var STATE_RECOGNIZED = STATE_ENDED;
      var STATE_CANCELLED = 16;
      var STATE_FAILED = 32;
      /**
       * Recognizer
       * Every recognizer needs to extend from this class.
       * @constructor
       * @param {Object} options
       */

      function Recognizer(options) {
        this.options = assign({}, this.defaults, options || {});
        this.id = uniqueId();
        this.manager = null; // default is enable true

        this.options.enable = ifUndefined(this.options.enable, true);
        this.state = STATE_POSSIBLE;
        this.simultaneous = {};
        this.requireFail = [];
      }

      Recognizer.prototype = {
        /**
         * @virtual
         * @type {Object}
         */
        defaults: {},

        /**
         * set options
         * @param {Object} options
         * @return {Recognizer}
         */
        set: function set(options) {
          assign(this.options, options); // also update the touchAction, in case something changed about the directions/enabled state

          this.manager && this.manager.touchAction.update();
          return this;
        },

        /**
         * recognize simultaneous with an other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        recognizeWith: function recognizeWith(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
          }

          var simultaneous = this.simultaneous;
          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

          if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
          }

          return this;
        },

        /**
         * drop the simultaneous link. it doesnt remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRecognizeWith: function dropRecognizeWith(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
          }

          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
          delete this.simultaneous[otherRecognizer.id];
          return this;
        },

        /**
         * recognizer can only run when an other is failing
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        requireFailure: function requireFailure(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
          }

          var requireFail = this.requireFail;
          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

          if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
          }

          return this;
        },

        /**
         * drop the requireFailure link. it does not remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRequireFailure: function dropRequireFailure(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
          }

          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
          var index = inArray(this.requireFail, otherRecognizer);

          if (index > -1) {
            this.requireFail.splice(index, 1);
          }

          return this;
        },

        /**
         * has require failures boolean
         * @returns {boolean}
         */
        hasRequireFailures: function hasRequireFailures() {
          return this.requireFail.length > 0;
        },

        /**
         * if the recognizer can recognize simultaneous with an other recognizer
         * @param {Recognizer} otherRecognizer
         * @returns {Boolean}
         */
        canRecognizeWith: function canRecognizeWith(otherRecognizer) {
          return !!this.simultaneous[otherRecognizer.id];
        },

        /**
         * You should use `tryEmit` instead of `emit` directly to check
         * that all the needed recognizers has failed before emitting.
         * @param {Object} input
         */
        emit: function emit(input) {
          var self = this;
          var state = this.state;

          function emit(event) {
            self.manager.emit(event, input);
          } // 'panstart' and 'panmove'


          if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
          }

          emit(self.options.event); // simple 'eventName' events

          if (input.additionalEvent) {
            // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
          } // panend and pancancel


          if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
          }
        },

        /**
         * Check that all the require failure recognizers has failed,
         * if true, it emits a gesture event,
         * otherwise, setup the state to FAILED.
         * @param {Object} input
         */
        tryEmit: function tryEmit(input) {
          if (this.canEmit()) {
            return this.emit(input);
          } // it's failing anyway


          this.state = STATE_FAILED;
        },

        /**
         * can we emit?
         * @returns {boolean}
         */
        canEmit: function canEmit() {
          var i = 0;

          while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
              return false;
            }

            i++;
          }

          return true;
        },

        /**
         * update the recognizer
         * @param {Object} inputData
         */
        recognize: function recognize(inputData) {
          // make a new copy of the inputData
          // so we can change the inputData without messing up the other recognizers
          var inputDataClone = assign({}, inputData); // is is enabled and allow recognizing?

          if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
          } // reset when we've reached the end


          if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
          }

          this.state = this.process(inputDataClone); // the recognizer has recognized a gesture
          // so trigger an event

          if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
          }
        },

        /**
         * return the state of the recognizer
         * the actual recognizing happens in this method
         * @virtual
         * @param {Object} inputData
         * @returns {Const} STATE
         */
        process: function process(inputData) {},
        // jshint ignore:line

        /**
         * return the preferred touch-action
         * @virtual
         * @returns {Array}
         */
        getTouchAction: function getTouchAction() {},

        /**
         * called when the gesture isn't allowed to recognize
         * like when another is being recognized or it is disabled
         * @virtual
         */
        reset: function reset() {}
      };
      /**
       * get a usable string, used as event postfix
       * @param {Const} state
       * @returns {String} state
       */

      function stateStr(state) {
        if (state & STATE_CANCELLED) {
          return 'cancel';
        } else if (state & STATE_ENDED) {
          return 'end';
        } else if (state & STATE_CHANGED) {
          return 'move';
        } else if (state & STATE_BEGAN) {
          return 'start';
        }

        return '';
      }
      /**
       * direction cons to string
       * @param {Const} direction
       * @returns {String}
       */


      function directionStr(direction) {
        if (direction == DIRECTION_DOWN) {
          return 'down';
        } else if (direction == DIRECTION_UP) {
          return 'up';
        } else if (direction == DIRECTION_LEFT) {
          return 'left';
        } else if (direction == DIRECTION_RIGHT) {
          return 'right';
        }

        return '';
      }
      /**
       * get a recognizer by name if it is bound to a manager
       * @param {Recognizer|String} otherRecognizer
       * @param {Recognizer} recognizer
       * @returns {Recognizer}
       */


      function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
        var manager = recognizer.manager;

        if (manager) {
          return manager.get(otherRecognizer);
        }

        return otherRecognizer;
      }
      /**
       * This recognizer is just used as a base for the simple attribute recognizers.
       * @constructor
       * @extends Recognizer
       */


      function AttrRecognizer() {
        Recognizer.apply(this, arguments);
      }

      inherit(AttrRecognizer, Recognizer, {
        /**
         * @namespace
         * @memberof AttrRecognizer
         */
        defaults: {
          /**
           * @type {Number}
           * @default 1
           */
          pointers: 1
        },

        /**
         * Used to check if it the recognizer receives valid input, like input.distance > 10.
         * @memberof AttrRecognizer
         * @param {Object} input
         * @returns {Boolean} recognized
         */
        attrTest: function attrTest(input) {
          var optionPointers = this.options.pointers;
          return optionPointers === 0 || input.pointers.length === optionPointers;
        },

        /**
         * Process the input and return the state for the recognizer
         * @memberof AttrRecognizer
         * @param {Object} input
         * @returns {*} State
         */
        process: function process(input) {
          var state = this.state;
          var eventType = input.eventType;
          var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
          var isValid = this.attrTest(input); // on cancel input and we've recognized before, return STATE_CANCELLED

          if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
          } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
              return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
              return STATE_BEGAN;
            }

            return state | STATE_CHANGED;
          }

          return STATE_FAILED;
        }
      });
      /**
       * Pan
       * Recognized when the pointer is down and moved in the allowed direction.
       * @constructor
       * @extends AttrRecognizer
       */

      function PanRecognizer() {
        AttrRecognizer.apply(this, arguments);
        this.pX = null;
        this.pY = null;
      }

      inherit(PanRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof PanRecognizer
         */
        defaults: {
          event: 'pan',
          threshold: 10,
          pointers: 1,
          direction: DIRECTION_ALL
        },
        getTouchAction: function getTouchAction() {
          var direction = this.options.direction;
          var actions = [];

          if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
          }

          if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
          }

          return actions;
        },
        directionTest: function directionTest(input) {
          var options = this.options;
          var hasMoved = true;
          var distance = input.distance;
          var direction = input.direction;
          var x = input.deltaX;
          var y = input.deltaY; // lock to axis?

          if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
              direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
              hasMoved = x != this.pX;
              distance = Math.abs(input.deltaX);
            } else {
              direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
              hasMoved = y != this.pY;
              distance = Math.abs(input.deltaY);
            }
          }

          input.direction = direction;
          return hasMoved && distance > options.threshold && direction & options.direction;
        },
        attrTest: function attrTest(input) {
          return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
        },
        emit: function emit(input) {
          this.pX = input.deltaX;
          this.pY = input.deltaY;
          var direction = directionStr(input.direction);

          if (direction) {
            input.additionalEvent = this.options.event + direction;
          }

          this._super.emit.call(this, input);
        }
      });
      /**
       * Pinch
       * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
       * @constructor
       * @extends AttrRecognizer
       */

      function PinchRecognizer() {
        AttrRecognizer.apply(this, arguments);
      }

      inherit(PinchRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof PinchRecognizer
         */
        defaults: {
          event: 'pinch',
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function getTouchAction() {
          return [TOUCH_ACTION_NONE];
        },
        attrTest: function attrTest(input) {
          return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
        },
        emit: function emit(input) {
          if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
          }

          this._super.emit.call(this, input);
        }
      });
      /**
       * Press
       * Recognized when the pointer is down for x ms without any movement.
       * @constructor
       * @extends Recognizer
       */

      function PressRecognizer() {
        Recognizer.apply(this, arguments);
        this._timer = null;
        this._input = null;
      }

      inherit(PressRecognizer, Recognizer, {
        /**
         * @namespace
         * @memberof PressRecognizer
         */
        defaults: {
          event: 'press',
          pointers: 1,
          time: 251,
          // minimal time of the pointer to be pressed
          threshold: 9 // a minimal movement is ok, but keep it low

        },
        getTouchAction: function getTouchAction() {
          return [TOUCH_ACTION_AUTO];
        },
        process: function process(input) {
          var options = this.options;
          var validPointers = input.pointers.length === options.pointers;
          var validMovement = input.distance < options.threshold;
          var validTime = input.deltaTime > options.time;
          this._input = input; // we only allow little movement
          // and we've reached an end event, so a tap is possible

          if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
            this.reset();
          } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function () {
              this.state = STATE_RECOGNIZED;
              this.tryEmit();
            }, options.time, this);
          } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
          }

          return STATE_FAILED;
        },
        reset: function reset() {
          clearTimeout(this._timer);
        },
        emit: function emit(input) {
          if (this.state !== STATE_RECOGNIZED) {
            return;
          }

          if (input && input.eventType & INPUT_END) {
            this.manager.emit(this.options.event + 'up', input);
          } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
          }
        }
      });
      /**
       * Rotate
       * Recognized when two or more pointer are moving in a circular motion.
       * @constructor
       * @extends AttrRecognizer
       */

      function RotateRecognizer() {
        AttrRecognizer.apply(this, arguments);
      }

      inherit(RotateRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof RotateRecognizer
         */
        defaults: {
          event: 'rotate',
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function getTouchAction() {
          return [TOUCH_ACTION_NONE];
        },
        attrTest: function attrTest(input) {
          return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
        }
      });
      /**
       * Swipe
       * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
       * @constructor
       * @extends AttrRecognizer
       */

      function SwipeRecognizer() {
        AttrRecognizer.apply(this, arguments);
      }

      inherit(SwipeRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof SwipeRecognizer
         */
        defaults: {
          event: 'swipe',
          threshold: 10,
          velocity: 0.3,
          direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
          pointers: 1
        },
        getTouchAction: function getTouchAction() {
          return PanRecognizer.prototype.getTouchAction.call(this);
        },
        attrTest: function attrTest(input) {
          var direction = this.options.direction;
          var velocity;

          if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
          } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
          } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
          }

          return this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
        },
        emit: function emit(input) {
          var direction = directionStr(input.offsetDirection);

          if (direction) {
            this.manager.emit(this.options.event + direction, input);
          }

          this.manager.emit(this.options.event, input);
        }
      });
      /**
       * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
       * between the given interval and position. The delay option can be used to recognize multi-taps without firing
       * a single tap.
       *
       * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
       * multi-taps being recognized.
       * @constructor
       * @extends Recognizer
       */

      function TapRecognizer() {
        Recognizer.apply(this, arguments); // previous time and center,
        // used for tap counting

        this.pTime = false;
        this.pCenter = false;
        this._timer = null;
        this._input = null;
        this.count = 0;
      }

      inherit(TapRecognizer, Recognizer, {
        /**
         * @namespace
         * @memberof PinchRecognizer
         */
        defaults: {
          event: 'tap',
          pointers: 1,
          taps: 1,
          interval: 300,
          // max time between the multi-tap taps
          time: 250,
          // max time of the pointer to be down (like finger on the screen)
          threshold: 9,
          // a minimal movement is ok, but keep it low
          posThreshold: 10 // a multi-tap can be a bit off the initial position

        },
        getTouchAction: function getTouchAction() {
          return [TOUCH_ACTION_MANIPULATION];
        },
        process: function process(input) {
          var options = this.options;
          var validPointers = input.pointers.length === options.pointers;
          var validMovement = input.distance < options.threshold;
          var validTouchTime = input.deltaTime < options.time;
          this.reset();

          if (input.eventType & INPUT_START && this.count === 0) {
            return this.failTimeout();
          } // we only allow little movement
          // and we've reached an end event, so a tap is possible


          if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
              return this.failTimeout();
            }

            var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
              this.count = 1;
            } else {
              this.count += 1;
            }

            this._input = input; // if tap count matches we have recognized it,
            // else it has began recognizing...

            var tapCount = this.count % options.taps;

            if (tapCount === 0) {
              // no failing requirements, immediately trigger the tap event
              // or wait as long as the multitap interval to trigger
              if (!this.hasRequireFailures()) {
                return STATE_RECOGNIZED;
              } else {
                this._timer = setTimeoutContext(function () {
                  this.state = STATE_RECOGNIZED;
                  this.tryEmit();
                }, options.interval, this);
                return STATE_BEGAN;
              }
            }
          }

          return STATE_FAILED;
        },
        failTimeout: function failTimeout() {
          this._timer = setTimeoutContext(function () {
            this.state = STATE_FAILED;
          }, this.options.interval, this);
          return STATE_FAILED;
        },
        reset: function reset() {
          clearTimeout(this._timer);
        },
        emit: function emit() {
          if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
          }
        }
      });
      /**
       * Simple way to create a manager with a default set of recognizers.
       * @param {HTMLElement} element
       * @param {Object} [options]
       * @constructor
       */

      function Hammer(element, options) {
        options = options || {};
        options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
        return new Manager(element, options);
      }
      /**
       * @const {string}
       */


      Hammer.VERSION = '2.0.7';
      /**
       * default settings
       * @namespace
       */

      Hammer.defaults = {
        /**
         * set if DOM events are being triggered.
         * But this is slower and unused by simple implementations, so disabled by default.
         * @type {Boolean}
         * @default false
         */
        domEvents: false,

        /**
         * The value for the touchAction property/fallback.
         * When set to `compute` it will magically set the correct value based on the added recognizers.
         * @type {String}
         * @default compute
         */
        touchAction: TOUCH_ACTION_COMPUTE,

        /**
         * @type {Boolean}
         * @default true
         */
        enable: true,

        /**
         * EXPERIMENTAL FEATURE -- can be removed/changed
         * Change the parent input target element.
         * If Null, then it is being set the to main element.
         * @type {Null|EventTarget}
         * @default null
         */
        inputTarget: null,

        /**
         * force an input class
         * @type {Null|Function}
         * @default null
         */
        inputClass: null,

        /**
         * Default recognizer setup when calling `Hammer()`
         * When creating a new Manager these will be skipped.
         * @type {Array}
         */
        preset: [// RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {
          enable: false
        }], [PinchRecognizer, {
          enable: false
        }, ['rotate']], [SwipeRecognizer, {
          direction: DIRECTION_HORIZONTAL
        }], [PanRecognizer, {
          direction: DIRECTION_HORIZONTAL
        }, ['swipe']], [TapRecognizer], [TapRecognizer, {
          event: 'doubletap',
          taps: 2
        }, ['tap']], [PressRecognizer]],

        /**
         * Some CSS properties can be used to improve the working of Hammer.
         * Add them to this method and they will be set when creating a new Manager.
         * @namespace
         */
        cssProps: {
          /**
           * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
           * @type {String}
           * @default 'none'
           */
          userSelect: 'none',

          /**
           * Disable the Windows Phone grippers when pressing an element.
           * @type {String}
           * @default 'none'
           */
          touchSelect: 'none',

          /**
           * Disables the default callout shown when you touch and hold a touch target.
           * On iOS, when you touch and hold a touch target such as a link, Safari displays
           * a callout containing information about the link. This property allows you to disable that callout.
           * @type {String}
           * @default 'none'
           */
          touchCallout: 'none',

          /**
           * Specifies whether zooming is enabled. Used by IE10>
           * @type {String}
           * @default 'none'
           */
          contentZooming: 'none',

          /**
           * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
           * @type {String}
           * @default 'none'
           */
          userDrag: 'none',

          /**
           * Overrides the highlight color shown when the user taps a link or a JavaScript
           * clickable element in iOS. This property obeys the alpha value, if specified.
           * @type {String}
           * @default 'rgba(0,0,0,0)'
           */
          tapHighlightColor: 'rgba(0,0,0,0)'
        }
      };
      var STOP = 1;
      var FORCED_STOP = 2;
      /**
       * Manager
       * @param {HTMLElement} element
       * @param {Object} [options]
       * @constructor
       */

      function Manager(element, options) {
        this.options = assign({}, Hammer.defaults, options || {});
        this.options.inputTarget = this.options.inputTarget || element;
        this.handlers = {};
        this.session = {};
        this.recognizers = [];
        this.oldCssProps = {};
        this.element = element;
        this.input = createInputInstance(this);
        this.touchAction = new TouchAction(this, this.options.touchAction);
        toggleCssProps(this, true);
        each(this.options.recognizers, function (item) {
          var recognizer = this.add(new item[0](item[1]));
          item[2] && recognizer.recognizeWith(item[2]);
          item[3] && recognizer.requireFailure(item[3]);
        }, this);
      }

      Manager.prototype = {
        /**
         * set options
         * @param {Object} options
         * @returns {Manager}
         */
        set: function set(options) {
          assign(this.options, options); // Options that need a little more setup

          if (options.touchAction) {
            this.touchAction.update();
          }

          if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
          }

          return this;
        },

        /**
         * stop recognizing for this session.
         * This session will be discarded, when a new [input]start event is fired.
         * When forced, the recognizer cycle is stopped immediately.
         * @param {Boolean} [force]
         */
        stop: function stop(force) {
          this.session.stopped = force ? FORCED_STOP : STOP;
        },

        /**
         * run the recognizers!
         * called by the inputHandler function on every movement of the pointers (touches)
         * it walks through all the recognizers and tries to detect the gesture that is being made
         * @param {Object} inputData
         */
        recognize: function recognize(inputData) {
          var session = this.session;

          if (session.stopped) {
            return;
          } // run the touch-action polyfill


          this.touchAction.preventDefaults(inputData);
          var recognizer;
          var recognizers = this.recognizers; // this holds the recognizer that is being recognized.
          // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
          // if no recognizer is detecting a thing, it is set to `null`

          var curRecognizer = session.curRecognizer; // reset when the last recognizer is recognized
          // or when we're in a new session

          if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
            curRecognizer = session.curRecognizer = null;
          }

          var i = 0;

          while (i < recognizers.length) {
            recognizer = recognizers[i]; // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.

            if (session.stopped !== FORCED_STOP && ( // 1
            !curRecognizer || recognizer == curRecognizer || // 2
            recognizer.canRecognizeWith(curRecognizer))) {
              // 3
              recognizer.recognize(inputData);
            } else {
              recognizer.reset();
            } // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer


            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
              curRecognizer = session.curRecognizer = recognizer;
            }

            i++;
          }
        },

        /**
         * get a recognizer by its event name.
         * @param {Recognizer|String} recognizer
         * @returns {Recognizer|Null}
         */
        get: function get(recognizer) {
          if (recognizer instanceof Recognizer) {
            return recognizer;
          }

          var recognizers = this.recognizers;

          for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
              return recognizers[i];
            }
          }

          return null;
        },

        /**
         * add a recognizer to the manager
         * existing recognizers with the same event name will be removed
         * @param {Recognizer} recognizer
         * @returns {Recognizer|Manager}
         */
        add: function add(recognizer) {
          if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
          } // remove existing


          var existing = this.get(recognizer.options.event);

          if (existing) {
            this.remove(existing);
          }

          this.recognizers.push(recognizer);
          recognizer.manager = this;
          this.touchAction.update();
          return recognizer;
        },

        /**
         * remove a recognizer by name or instance
         * @param {Recognizer|String} recognizer
         * @returns {Manager}
         */
        remove: function remove(recognizer) {
          if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
          }

          recognizer = this.get(recognizer); // let's make sure this recognizer exists

          if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
              recognizers.splice(index, 1);
              this.touchAction.update();
            }
          }

          return this;
        },

        /**
         * bind event
         * @param {String} events
         * @param {Function} handler
         * @returns {EventEmitter} this
         */
        on: function on(events, handler) {
          if (events === undefined) {
            return;
          }

          if (handler === undefined) {
            return;
          }

          var handlers = this.handlers;
          each(splitStr(events), function (event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
          });
          return this;
        },

        /**
         * unbind event, leave emit blank to remove all handlers
         * @param {String} events
         * @param {Function} [handler]
         * @returns {EventEmitter} this
         */
        off: function off(events, handler) {
          if (events === undefined) {
            return;
          }

          var handlers = this.handlers;
          each(splitStr(events), function (event) {
            if (!handler) {
              delete handlers[event];
            } else {
              handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
          });
          return this;
        },

        /**
         * emit event to the listeners
         * @param {String} event
         * @param {Object} data
         */
        emit: function emit(event, data) {
          // we also want to trigger dom events
          if (this.options.domEvents) {
            triggerDomEvent(event, data);
          } // no handlers, so skip it all


          var handlers = this.handlers[event] && this.handlers[event].slice();

          if (!handlers || !handlers.length) {
            return;
          }

          data.type = event;

          data.preventDefault = function () {
            data.srcEvent.preventDefault();
          };

          var i = 0;

          while (i < handlers.length) {
            handlers[i](data);
            i++;
          }
        },

        /**
         * destroy the manager and unbinds all events
         * it doesn't unbind dom events, that is the user own responsibility
         */
        destroy: function destroy() {
          this.element && toggleCssProps(this, false);
          this.handlers = {};
          this.session = {};
          this.input.destroy();
          this.element = null;
        }
      };
      /**
       * add/remove the css properties as defined in manager.options.cssProps
       * @param {Manager} manager
       * @param {Boolean} add
       */

      function toggleCssProps(manager, add) {
        var element = manager.element;

        if (!element.style) {
          return;
        }

        var prop;
        each(manager.options.cssProps, function (value, name) {
          prop = prefixed(element.style, name);

          if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
          } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
          }
        });

        if (!add) {
          manager.oldCssProps = {};
        }
      }
      /**
       * trigger dom event
       * @param {String} event
       * @param {Object} data
       */


      function triggerDomEvent(event, data) {
        var gestureEvent = document.createEvent('Event');
        gestureEvent.initEvent(event, true, true);
        gestureEvent.gesture = data;
        data.target.dispatchEvent(gestureEvent);
      }

      assign(Hammer, {
        INPUT_START: INPUT_START,
        INPUT_MOVE: INPUT_MOVE,
        INPUT_END: INPUT_END,
        INPUT_CANCEL: INPUT_CANCEL,
        STATE_POSSIBLE: STATE_POSSIBLE,
        STATE_BEGAN: STATE_BEGAN,
        STATE_CHANGED: STATE_CHANGED,
        STATE_ENDED: STATE_ENDED,
        STATE_RECOGNIZED: STATE_RECOGNIZED,
        STATE_CANCELLED: STATE_CANCELLED,
        STATE_FAILED: STATE_FAILED,
        DIRECTION_NONE: DIRECTION_NONE,
        DIRECTION_LEFT: DIRECTION_LEFT,
        DIRECTION_RIGHT: DIRECTION_RIGHT,
        DIRECTION_UP: DIRECTION_UP,
        DIRECTION_DOWN: DIRECTION_DOWN,
        DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
        DIRECTION_VERTICAL: DIRECTION_VERTICAL,
        DIRECTION_ALL: DIRECTION_ALL,
        Manager: Manager,
        Input: Input,
        TouchAction: TouchAction,
        TouchInput: TouchInput,
        MouseInput: MouseInput,
        PointerEventInput: PointerEventInput,
        TouchMouseInput: TouchMouseInput,
        SingleTouchInput: SingleTouchInput,
        Recognizer: Recognizer,
        AttrRecognizer: AttrRecognizer,
        Tap: TapRecognizer,
        Pan: PanRecognizer,
        Swipe: SwipeRecognizer,
        Pinch: PinchRecognizer,
        Rotate: RotateRecognizer,
        Press: PressRecognizer,
        on: addEventListeners,
        off: removeEventListeners,
        each: each,
        merge: merge,
        extend: extend,
        assign: assign,
        inherit: inherit,
        bindFn: bindFn,
        prefixed: prefixed
      }); // this prevents errors when Hammer is loaded in the presence of an AMD
      //  style loader but by script tag, not by the loader.

      var freeGlobal = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}; // jshint ignore:line

      freeGlobal.Hammer = Hammer;

      if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return Hammer;
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      } else {}
    })(window, document, 'Hammer');
    /***/

  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/projects/project.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/projects/project.component.ts ***!
    \***********************************************/

  /*! exports provided: ProjectComponent */

  /***/
  function srcAppProjectsProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () {
      return ProjectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProjectComponent = function ProjectComponent() {
      _classCallCheck(this, ProjectComponent);
    };

    ProjectComponent.ɵfac = function ProjectComponent_Factory(t) {
      return new (t || ProjectComponent)();
    };

    ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectComponent,
      selectors: [["projects-root"]],
      decls: 1,
      vars: 0,
      template: function ProjectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'projects-root',
          templateUrl: './project.component.html',
          styleUrls: ['./project.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/project1/project1.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/projects/project1/project1.component.ts ***!
    \*********************************************************/

  /*! exports provided: Project1Component */

  /***/
  function srcAppProjectsProject1Project1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Project1Component", function () {
      return Project1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ks89/angular-modal-gallery */
    "./node_modules/@ks89/angular-modal-gallery/__ivy_ngcc__/fesm2015/ks89-angular-modal-gallery.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../projects.service */
    "./src/app/projects/projects.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function Project1Component_div_0_div_7_span_2_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ",");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Project1Component_div_0_div_7_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Project1Component_div_0_div_7_span_2_span_2_Template, 2, 0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var language_r9 = ctx.$implicit;
        var i_r10 = ctx.index;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](" " + language_r9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r10 != ctx_r8.projekat.languages.length - 1);
      }
    }

    function Project1Component_div_0_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Languages: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Project1Component_div_0_div_7_span_2_Template, 3, 2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.projekat.languages);
      }
    }

    function Project1Component_div_0_div_8_span_2_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ",");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Project1Component_div_0_div_8_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Project1Component_div_0_div_8_span_2_span_2_Template, 2, 0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var freamwork_r13 = ctx.$implicit;
        var i_r14 = ctx.index;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](" " + freamwork_r13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r14 != ctx_r12.projekat.freamworks.length - 1);
      }
    }

    function Project1Component_div_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Freamworks: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Project1Component_div_0_div_8_span_2_Template, 3, 2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.projekat.freamworks);
      }
    }

    function Project1Component_div_0_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Database: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.projekat.database);
      }
    }

    function Project1Component_div_0_div_10_span_2_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ",");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Project1Component_div_0_div_10_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Project1Component_div_0_div_10_span_2_span_2_Template, 2, 0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var library_r17 = ctx.$implicit;
        var i_r18 = ctx.index;

        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](" " + library_r17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r18 != ctx_r16.projekat.libraries.length - 1);
      }
    }

    function Project1Component_div_0_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Library: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Project1Component_div_0_div_10_span_2_Template, 3, 2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.projekat.libraries);
      }
    }

    function Project1Component_div_0_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.projekat.description);
      }
    }

    function Project1Component_div_0_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "GitHub: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r6.projekat.github, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.projekat.github);
      }
    }

    function Project1Component_div_0_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Project1Component_div_0_div_16_Template_img_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var img_r20 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.openImageModalRowDescription(img_r20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r20.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function Project1Component_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Project1Component_div_0_div_7_Template, 3, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Project1Component_div_0_div_8_Template, 3, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Project1Component_div_0_div_9_Template, 4, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Project1Component_div_0_div_10_Template, 3, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Project1Component_div_0_div_11_Template, 4, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Project1Component_div_0_div_12_Template, 4, 2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Gallery\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Project1Component_div_0_div_16_Template, 2, 1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ks-modal-gallery", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.projekat.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.projekat.languages.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.projekat.freamworks.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.projekat.database);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.projekat.libraries.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.projekat.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.projekat.github);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.images);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", 0)("modalImages", ctx_r0.images)("plainGalleryConfig", ctx_r0.customPlainGalleryRowDescConfig);
      }
    }

    var Project1Component = /*#__PURE__*/function () {
      function Project1Component(galleryService, sanitizer, route, router, projectService) {
        _classCallCheck(this, Project1Component);

        this.galleryService = galleryService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.router = router;
        this.projectService = projectService;
        this.imageIndex = 1;
        this.galleryId = 1;
        this.isPlaying = true;
        this.images = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](0, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/img1.jpg',
          extUrl: 'http://www.google.com'
        }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](1, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/img2.png',
          description: 'Description 2'
        }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](2, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/img3.jpg',
          description: 'Description 3',
          extUrl: 'http://www.google.com'
        }, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/thumbs/img3.png',
          title: 'custom title 2',
          alt: 'custom alt 2',
          ariaLabel: 'arial label 2'
        }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](3, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/img4.jpg',
          description: 'Description 4',
          extUrl: 'http://www.google.com'
        }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](4, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/img5.jpg'
        }, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/thumbs/img5.jpg'
        })]; // array of images (obviously with different id) where paths are the same.
        // to prevent caching issues I have to append '?index'.

        this.sameImages = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](0, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/img1.jpg?1',
          extUrl: 'http://www.google.com'
        }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](1, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/img1.jpg?2',
          extUrl: 'http://www.google.com'
        }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](2, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/img1.jpg?3',
          extUrl: 'http://www.google.com'
        })]; // example of a png converted into base64 using https://www.base64-image.de/ or other similar websites

        this.base64String = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABN0lEQV' + 'R4nO3SQQ2AQBDAwAVlaMEhCkAV' + 'b2RcQmcU9NEZAAAAAOD/tvN675k5VoewxLOvLmAtA8QZIM4AcQaIM0CcAeIMEGeAOAPEGSDOAHEGiDNAnAHiDBBngDgDxBkgzgBxBogzQJwB4gwQZ4A4A8QZIM4AcQaIM0C' + 'cAeIMEGeAOAPEGSDOAHEGiDNAnAHiDBBngDgDxBkgzgBxBogzQJwB4gwQZ4A4A8QZIM4AcQaIM0CcAeIMEGeAOAPEGSDOAHEGiDNAnAHiDBBngDgDxBkgzgBxBogzQJwB4g' + 'wQZ4A4A8QZIM4AcQaIM0CcAeIMEGeAOAPEGSDOAHEGiDNAnAHiDBBngDgDxBkgzgBxBogzQJwB4gwQZ4A4A8QZIM4AcQaIM0CcAeIMEGeAOAPEGQAAAAAA4Pc+8asEoPPGq' + 'xUAAAAASUVORK5CYII';
        this.base64RedString = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX/AAD/////WVn/+vr/qan/Nzf/ERH/2tr/s7P/KSn/' + '7+//vr7/0ND/W1v/6+v/m5v/4+P/U1P/HR3/o6P/rq7/g4P/k5P/t7f/dXX/SEj/zMz/ZWX/h4f/bm7/amr/np7/yMhDG/2oAAAC8ElEQVR4nO3dC3KqQBCF4WkHERHFRyKIL/' + 'a/ymDuVYMMFipTbbfnW8H5S4lQVGUMaWe4B3iHQvlQKB8K5UOhfCiUD4XyoVA+FJ7Myijd5dvBO9nmuzQqZ68X2mI9NO9suC7s84VxNuAO6GSQxU8VJvuQe3pn4T55uLDYcK9+' + '0KZ4qDB574vPbej+HF2Fcc499km563p0FAbcQ18QdCi0B+6VLzk0fjtuC0dj7o0vGo/uF064B/agvFcYca/rRdReeOTe1pNjW6HkP6J1gbtQwzV4NnEVJtyrepU0C2M599ldhH' + 'GjcMq9qWfT28KUe1Hv0nrhnHuPB/Na4YJ7jgeLv4UZ9xovsmuhXXKP8WJpL4Ur7i2erC6Fun4Kr8Jz4Rf3Em++/hdKf+htN/5XqOuGtC75LfzmnuHR96nQ6v2SVl9TWxVq/pKevq' + 'aG1twjvFpXhTLeLz1rQMZyb/DMmhH3BM9GRudjxVVmtN51n62M1DdpXeVG2rveR22MxLe9jxgazfdsJ2Oj9en3THsfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAgHba/+98+AFnI+g/30L/GSX6z5nRf1aQ/vOe9J/Zpf/cNf1n533A+Yf6z7DUfw6p/rNkVX9Nkw850/kDzuXWf7Y6ab37Xl0K7ZJ7ixdLeykknQ8YGV0LacG9xo' + 'MF/S2cc8/xYF4rpJR7T+9SqhfSlHtRz6Z0Wxjr+lEM40ahstvThJqFNOFe1aMJuQop4N7Vm4DchXTkXtaTI7UVUsS9rRcRtRequBZLuldII+mPw+MR3S8ke+De+JKDvQ1qFMr+kx' + 'o0cxyFFEt945bHjhpXYXV/I/HN8DBxtrgLiQpp74Y3RUtJW2H1Oe7l3IuHe/fnd7+wuh4zGe+lBpnr+utSWLHF+r0vyeG6aPw+PFT4a1ZG6S7fDt7JNt+lUTnrsL5LoWwolA+F8q' + 'FQPhTKh0L5UCgfCuVDoXw/lnQz7dm7GjoAAAAASUVORK5CYII=';
        this.base64GreenString = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAgMAAADQNkYNAAAADFBMVEUAAAAy/ysy/ysy/ysyTcibAAAAA3RSTlMA2r/af0d' + 'WAAAAQUlEQVRo3u3YMREAMAzEsJAMyZJsMXy3XORdBFySJK3qxFXH1Y1DEARBEARBEARBEARBEARBkNmk436mvSRJ0o4eOKL2P81eyn8AAAAASUVORK5CYII=';
        this.base64Image = this.sanitizer.bypassSecurityTrustResourceUrl(this.base64String);
        this.base64RedImage = this.sanitizer.bypassSecurityTrustResourceUrl(this.base64RedString);
        this.base64GreenImage = this.sanitizer.bypassSecurityTrustResourceUrl(this.base64GreenString);
        this.imagesBase64 = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](0, {
          img: this.base64Image,
          extUrl: 'http://www.google.com'
        }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](1, {
          img: this.base64GreenImage,
          description: 'Description 2'
        }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](2, {
          img: this.base64RedImage,
          description: 'Description 3',
          extUrl: 'http://www.google.com'
        }, {
          img: this.base64RedImage,
          title: 'custom title 2',
          alt: 'custom alt 2',
          ariaLabel: 'arial label 2'
        })];
        this.imagesCustomDownloadFileName = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](0, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/img1.jpg',
          downloadFileName: 'first-img.jpg'
        }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](1, {
          img: this.base64Image,
          downloadFileName: 'second-img-base64.jpg'
        })];
        this.imagesRect = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](0, {
          img: 'https://images.bgit.rs/1581333725/desktop/blog-large/419frontend-blog.jpg',
          description: 'Description 1'
        }, {
          img: 'https://images.bgit.rs/1581333725/desktop/blog-large/419frontend-blog.jpg'
        }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](1, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/pexels-photo-47223.jpeg'
        }, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-47223.jpg'
        }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](2, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/pexels-photo-52062.jpeg',
          description: 'Description 3'
        }, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-52062.jpg',
          description: 'Description 3'
        }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](3, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/pexels-photo-66943.jpeg',
          description: 'Description 4'
        }, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-66943.jpg'
        }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](4, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/pexels-photo-93750.jpeg'
        }, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-93750.jpg'
        }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](5, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/pexels-photo-94420.jpeg',
          description: 'Description 6'
        }, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-94420.jpg'
        })]; // array with a single image inside (the first one)

        this.singleImage = [this.images[0]];
        this.imagesInfiniteAutoAdd = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](0, {
          img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/img1.jpg?1',
          extUrl: 'http://www.google.com'
        })];
        this.dotsConfig = {
          visible: false
        };
        this.customDescription = {
          strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["DescriptionStrategy"].ALWAYS_VISIBLE,
          imageText: 'Look this image ',
          numberSeparator: ' of ',
          beforeTextDescription: ' => '
        };
        this.customDescriptionStyle = {
          strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["DescriptionStrategy"].ALWAYS_VISIBLE,
          imageText: 'Look this image ',
          numberSeparator: ' of ',
          beforeTextDescription: ' => ',
          style: {
            bgColor: 'rgba(255,0,0,.5)',
            textColor: 'blue',
            marginTop: '3px',
            marginBottom: '0px',
            marginLeft: '5px',
            marginRight: '5px',
            position: 'absolute',
            top: '0px',
            height: '25px' // be careful to use width, in particular with % values

          }
        };
        this.customDescriptionHideIfEmpty = {
          strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["DescriptionStrategy"].HIDE_IF_EMPTY,
          imageText: 'Look this image ',
          numberSeparator: ' of ',
          beforeTextDescription: ' => '
        };
        this.customFullDescription = {
          strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["DescriptionStrategy"].ALWAYS_VISIBLE,
          // you should build this value programmaticaly with the result of (show)="..()" event
          customFullDescription: 'Custom description of the current visible image' // if customFullDescription !== undefined, all other fields will be ignored
          // imageText: '',
          // numberSeparator: '',
          // beforeTextDescription: '',

        };
        this.customFullDescriptionHidden = {
          strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["DescriptionStrategy"].ALWAYS_HIDDEN,
          // you should build this value programmaticaly with the result of (show)="..()" event
          customFullDescription: 'Custom description of the current visible image' // if customFullDescription !== undefined, all other fields will be ignored
          // imageText: '',
          // numberSeparator: '',
          // beforeTextDescription: '',

        }; // customButtonsSize: ButtonSize = {
        //   width: 10,
        //   height: 10,
        //   unit: 'px'
        // };

        this.buttonsConfigDefault = {
          visible: true,
          strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonsStrategy"].DEFAULT
        };
        this.buttonsConfigSimple = {
          visible: true,
          strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonsStrategy"].SIMPLE
        };
        this.buttonsConfigAdvanced = {
          visible: true,
          strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonsStrategy"].ADVANCED
        };
        this.buttonsConfigFull = {
          visible: true,
          strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonsStrategy"].FULL
        };
        this.buttonsConfigCustom = {
          visible: true,
          strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonsStrategy"].CUSTOM,
          buttons: [// KS_DEFAULT_BTN_ROTATE,
          _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["KS_DEFAULT_BTN_FULL_SCREEN"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["KS_DEFAULT_BTN_DELETE"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["KS_DEFAULT_BTN_EXTURL"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["KS_DEFAULT_BTN_DOWNLOAD"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["KS_DEFAULT_BTN_CLOSE"]]
        }; // default buttons but extUrl will open the link in a new tab instead of the current one
        // this requires to specify all buttons manually (also if they are not really custom)

        this.customButtonsConfigExtUrlNewTab = {
          visible: true,
          strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonsStrategy"].CUSTOM,
          buttons: [{
            className: 'ext-url-image',
            type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].EXTURL,
            extUrlInNewTab: true // <--- this is the important thing to understand this example

          }, {
            className: 'download-image',
            type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].DOWNLOAD
          }, {
            className: 'close-image',
            type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].CLOSE
          }]
        };
        this.customButtonsFontAwesomeConfig = {
          visible: true,
          strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonsStrategy"].CUSTOM,
          buttons: [{
            className: 'fas fa-plus white',
            type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].CUSTOM,
            ariaLabel: 'custom plus aria label',
            title: 'custom plus title',
            fontSize: '20px'
          }, {
            className: 'fas fa-times white',
            type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].CLOSE,
            ariaLabel: 'custom close aria label',
            title: 'custom close title',
            fontSize: '20px'
          }, {
            className: 'fas fa-download white',
            type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].DOWNLOAD,
            ariaLabel: 'custom download aria label',
            title: 'custom download title',
            fontSize: '20px'
          }, {
            className: 'fas fa-external-link-alt white',
            type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].EXTURL,
            ariaLabel: 'custom exturl aria label',
            title: 'custom exturl title',
            fontSize: '20px'
          }]
        };
        this.previewConfigOneImage = {
          visible: true,
          number: 1
        };
        this.previewConfigFiveImages = {
          visible: true,
          number: 5
        };
        this.previewConfigNoArrows = {
          visible: true,
          arrows: false
        };
        this.previewConfigNoClickable = {
          visible: true,
          clickable: false
        }; // TODO still not implemented

        this.previewConfigAlwaysCenter = {
          visible: true
        };
        this.previewConfigCustomSize = {
          visible: true,
          size: {
            width: '30px',
            height: '30px'
          }
        };
        this.currentImageConfigExperimental = {
          loadingConfig: {
            enable: true,
            type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["LoadingType"].STANDARD
          },
          description: {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["DescriptionStrategy"].ALWAYS_VISIBLE
          }
        };
        this.accessibilityConfig = {
          backgroundAriaLabel: 'CUSTOM Modal gallery full screen background',
          backgroundTitle: 'CUSTOM background title',
          plainGalleryContentAriaLabel: 'CUSTOM Plain gallery content',
          plainGalleryContentTitle: 'CUSTOM plain gallery content title',
          modalGalleryContentAriaLabel: 'CUSTOM Modal gallery content',
          modalGalleryContentTitle: 'CUSTOM modal gallery content title',
          loadingSpinnerAriaLabel: 'CUSTOM The current image is loading. Please be patient.',
          loadingSpinnerTitle: 'CUSTOM The current image is loading. Please be patient.',
          mainContainerAriaLabel: 'CUSTOM Current image and navigation',
          mainContainerTitle: 'CUSTOM main container title',
          mainPrevImageAriaLabel: 'CUSTOM Previous image',
          mainPrevImageTitle: 'CUSTOM Previous image',
          mainNextImageAriaLabel: 'CUSTOM Next image',
          mainNextImageTitle: 'CUSTOM Next image',
          dotsContainerAriaLabel: 'CUSTOM Image navigation dots',
          dotsContainerTitle: 'CUSTOM dots container title',
          dotAriaLabel: 'CUSTOM Navigate to image number',
          previewsContainerAriaLabel: 'CUSTOM Image previews',
          previewsContainerTitle: 'CUSTOM previews title',
          previewScrollPrevAriaLabel: 'CUSTOM Scroll previous previews',
          previewScrollPrevTitle: 'CUSTOM Scroll previous previews',
          previewScrollNextAriaLabel: 'CUSTOM Scroll next previews',
          previewScrollNextTitle: 'CUSTOM Scroll next previews',
          carouselContainerAriaLabel: 'Current image and navigation',
          carouselContainerTitle: '',
          carouselPrevImageAriaLabel: 'Previous image',
          carouselPrevImageTitle: 'Previous image',
          carouselNextImageAriaLabel: 'Next image',
          carouselNextImageTitle: 'Next image',
          carouselPreviewsContainerAriaLabel: 'Image previews',
          carouselPreviewsContainerTitle: '',
          carouselPreviewScrollPrevAriaLabel: 'Scroll previous previews',
          carouselPreviewScrollPrevTitle: 'Scroll previous previews',
          carouselPreviewScrollNextAriaLabel: 'Scroll next previews',
          carouselPreviewScrollNextTitle: 'Scroll next previews'
        };
        this.count = 0; // this variable is used only for example of auto navigation

        this.isShownAutoNavigate = false;
        this.customPlainGalleryRowDescConfig = {
          strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["PlainGalleryStrategy"].CUSTOM,
          layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["AdvancedLayout"](-1, true)
        };
      }

      _createClass(Project1Component, [{
        key: "onButtonBeforeHook",
        value: function onButtonBeforeHook(event) {
          console.log('onButtonBeforeHook ', event);

          if (!event || !event.button) {
            return;
          } // Invoked after a click on a button, but before that the related
          // action is applied.
          // For instance: this method will be invoked after a click
          // of 'close' button, but before that the modal gallery
          // will be really closed.


          if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].DELETE) {
            // remove the current image and reassign all other to the array of images
            console.log('delete in app with images count ' + this.images.length);
            this.images = this.images.filter(function (val) {
              return event.image && val.id !== event.image.id;
            });
          }
        }
      }, {
        key: "onButtonAfterHook",
        value: function onButtonAfterHook(event) {
          console.log('onButtonAfterHook ', event);

          if (!event || !event.button) {
            return;
          } // Invoked after both a click on a button and its related action.
          // For instance: this method will be invoked after a click
          // of 'close' button, but before that the modal gallery
          // will be really closed.

        }
      }, {
        key: "onCustomButtonBeforeHook",
        value: function onCustomButtonBeforeHook(event, galleryId) {
          var _this49 = this;

          console.log('onCustomButtonBeforeHook with galleryId=' + galleryId + ' and event: ', event);

          if (!event || !event.button) {
            return;
          } // Invoked after a click on a button, but before that the related
          // action is applied.


          if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].CUSTOM) {
            console.log('adding a new random image at the end');
            this.addRandomImage();
            setTimeout(function () {
              _this49.galleryService.openGallery(galleryId, _this49.images.length - 1);
            }, 0);
          }
        }
      }, {
        key: "onCustomButtonAfterHook",
        value: function onCustomButtonAfterHook(event, galleryId) {
          console.log('onCustomButtonAfterHook with galleryId=' + galleryId + ' and event: ', event);

          if (!event || !event.button) {
            return;
          } // Invoked after both a click on a button and its related action.

        }
      }, {
        key: "onImageLoaded",
        value: function onImageLoaded(event) {
          // angular-modal-gallery will emit this event if it will load successfully input images
          console.log('onImageLoaded action: ' + _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Action"][event.action]);
          console.log('onImageLoaded result:' + event.result);
        }
      }, {
        key: "onVisibleIndex",
        value: function onVisibleIndex(event) {
          console.log('onVisibleIndex action: ' + _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Action"][event.action]);
          console.log('onVisibleIndex result:' + event.result);
        }
      }, {
        key: "onIsFirstImage",
        value: function onIsFirstImage(event) {
          console.log('onIsFirstImage onfirst action: ' + _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Action"][event.action]);
          console.log('onIsFirstImage onfirst result:' + event.result);
        }
      }, {
        key: "onIsLastImage",
        value: function onIsLastImage(event) {
          console.log('onIsLastImage onlast action: ' + _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Action"][event.action]);
          console.log('onIsLastImage onlast result:' + event.result);
        }
      }, {
        key: "onCloseImageModal",
        value: function onCloseImageModal(event) {
          console.log('onClose action: ' + _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Action"][event.action]);
          console.log('onClose result:' + event.result);
        }
      }, {
        key: "onShowAutoCloseExample",
        value: function onShowAutoCloseExample(event, galleryId) {
          var _this50 = this;

          console.log("onShowAutoCloseExample with id=".concat(galleryId, " action: ") + _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Action"][event.action]);
          console.log('onShowAutoCloseExample result:' + event.result);
          console.log('Starting timeout of 3 second to close modal gallery automatically');
          setTimeout(function () {
            console.log('setTimeout end - closing gallery with id=' + galleryId);

            _this50.galleryService.closeGallery(galleryId);
          }, 3000);
        }
      }, {
        key: "onShowAutoNavigateExample",
        value: function onShowAutoNavigateExample(event, galleryId) {
          var _this51 = this;

          if (this.isShownAutoNavigate) {
            // this prevent multiple triggers of this method
            // this is only an example and shouldn't be done in this way in a real app
            return;
          }

          console.log("onShowAutoNavigateExample with id=".concat(galleryId, " action: ") + _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Action"][event.action]);
          console.log('onShowAutoNavigateExample result:' + event.result);
          console.log('Starting timeout of 3 second to navigate to image 0 and then to the next every second automatically');
          setTimeout(function () {
            _this51.isShownAutoNavigate = true;
            console.log('setTimeout end - navigating to index 0, gallery with id=' + galleryId);

            _this51.galleryService.navigateGallery(galleryId, 0);

            setTimeout(function () {
              console.log('setTimeout end - navigating to index 1, gallery with id=' + galleryId);

              _this51.galleryService.navigateGallery(galleryId, 1);

              setTimeout(function () {
                console.log('setTimeout end - navigating to index 2 (finished :) !), gallery with id=' + galleryId);

                _this51.galleryService.navigateGallery(galleryId, 2);
              }, 3000);
            }, 3000);
          }, 3000);
        }
      }, {
        key: "addRandomImage",
        value: function addRandomImage() {
          var imageToCopy = this.images[Math.floor(Math.random() * this.images.length)];
          var newImage = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](this.images.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
          this.images = [].concat(_toConsumableArray(this.images), [newImage]);
        }
      }, {
        key: "openModalViaService",
        value: function openModalViaService(id, index) {
          console.log('opening gallery with index ' + index);
          this.galleryService.openGallery(id, index);
        }
      }, {
        key: "autoAddImage",
        value: function autoAddImage() {
          var _this52 = this;

          if (this.count !== 0) {
            return;
          }

          var interval = setInterval(function () {
            var imageToCopy = _this52.images[Math.floor(Math.random() * _this52.images.length)];

            var newImage = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](_this52.imagesInfiniteAutoAdd.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
            newImage.modal.img += "?".concat(_this52.imagesInfiniteAutoAdd.length + 1);
            _this52.imagesInfiniteAutoAdd = [].concat(_toConsumableArray(_this52.imagesInfiniteAutoAdd), [newImage]);
            _this52.count++;

            if (_this52.count === 4) {
              clearInterval(interval);
            }
          }, 2000);
        }
      }, {
        key: "autoUpdateImage",
        value: function autoUpdateImage(id, indexToRefresh) {
          var _this53 = this;

          console.log('updating image at index ' + indexToRefresh + ', after 2 seconds');
          var image = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](1, {
            img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/master/examples/systemjs/assets/images/gallery/img5.jpg',
            description: 'Description 2 updated with imag5.jpg'
          });
          setTimeout(function () {
            console.log('image updated');

            _this53.galleryService.updateGallery(id, indexToRefresh, image);
          }, 2000);
        }
      }, {
        key: "trackById",
        value: function trackById(index, item) {
          return item.id;
        }
      }, {
        key: "autoPlayButton",
        value: function autoPlayButton(id) {
          if (this.isPlaying) {
            this.galleryService.stop(id);
          } else {
            this.galleryService.play(id);
          }

          this.isPlaying = !this.isPlaying;
          return this.isPlaying;
        }
      }, {
        key: "openImageModalRowDescription",
        value: function openImageModalRowDescription(image) {
          console.log('Opening modal gallery from custom plain gallery row and description, with image: ', image);
          var index = this.getCurrentIndexCustomLayout(image, this.images);
          this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, {
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["AdvancedLayout"](index, true)
          });
        }
      }, {
        key: "getCurrentIndexCustomLayout",
        value: function getCurrentIndexCustomLayout(image, images) {
          return image ? images.indexOf(image) : -1;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this54 = this;

          this.route.params.subscribe(function (res) {
            var name = res.project;
            _this54.projekat = _this54.projectService.getProject(name);

            if (_this54.projekat === null) {
              _this54.router.navigateByUrl("/resume");
            } else {
              _this54.images = _this54.projekat.pictures;
            }
          });
        }
      }]);

      return Project1Component;
    }();

    Project1Component.ɵfac = function Project1Component_Factory(t) {
      return new (t || Project1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["GalleryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]));
    };

    Project1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Project1Component,
      selectors: [["project1-root"]],
      decls: 1,
      vars: 1,
      consts: [["style", "margin: 0 20px 0px 30px;", 4, "ngIf"], [2, "margin", "0 20px 0px 30px"], ["id", "myDIV", 1, "row", 2, "border-bottom", "1px solid silver", "margin-bottom", "10px"], [1, "col-md-11", "font-title", 2, "padding-left", "0%", "color", "white"], [1, "col-md-1", "back"], ["routerLink", "../", 1, "fa", "fa-arrow-left", 2, "color", "silver", "font-size", "20px", "margin-top", "5px"], [1, "font-text", 2, "margin-top", "15px", "line-height", "normal"], ["style", "color: white; margin-bottom: 5px;", 4, "ngIf"], [1, "position", "font-title", 2, "bottom", "0", "bottom", "0px", "width", "100%", "color", "white", "position", "relative"], ["style", "display:inline-block; flex-wrap: wrap; margin-right: 20px;", 4, "ngFor", "ngForOf"], [2, "font-size", "20px", 3, "id", "modalImages", "plainGalleryConfig"], [2, "color", "white", "margin-bottom", "5px"], ["style", "color:gray", 4, "ngFor", "ngForOf"], [2, "color", "gray"], [4, "ngIf"], ["target", "_blank", 2, "color", "silver", 3, "href"], [2, "display", "inline-block", "flex-wrap", "wrap", "margin-right", "20px"], [1, "pic-size", 2, "margin", "0px 0px 10px 0px", 3, "src", "click"]],
      template: function Project1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Project1Component_div_0_Template, 18, 11, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projekat != null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ɵd"]],
      styles: [".my-app-custom-plain-container-row[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n.my-app-custom-plain-container-row[_ngcontent-%COMP%]   .my-app-custom-image-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: auto;\n  margin-right: 2px;\n  width: 50px;\n}\n.my-app-custom-plain-container-row[_ngcontent-%COMP%]   .my-app-custom-image-row.after[_ngcontent-%COMP%] {\n  border-top: 2px;\n  cursor: pointer;\n  display: none;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.my-app-custom-plain-container-column[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.my-app-custom-plain-container-column[_ngcontent-%COMP%]   .my-app-custom-image-column[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: auto;\n  margin-right: 2px;\n  width: 50px;\n}\n.my-app-custom-plain-container-column[_ngcontent-%COMP%]   .my-app-custom-image-column.after[_ngcontent-%COMP%] {\n  border-top: 2px;\n  cursor: pointer;\n  display: none;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  margin: 0;\n  position: relative;\n}\n.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  cursor: pointer;\n}\n.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  font-size: 85%;\n  padding: 5px;\n  position: absolute;\n  bottom: 3px;\n  left: 0;\n  right: 0;\n}\n.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   .my-app-custom-image-with-desc[_ngcontent-%COMP%] {\n  height: auto;\n  margin-right: 2px;\n  min-width: 80px;\n  align-self: start;\n}\n.more[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n  cursor: pointer;\n  color: #fff;\n  padding-top: 4px;\n  height: 46px;\n  position: absolute;\n  text-align: center;\n  width: 50px;\n}\n.transcluded[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n  font-size: 24px;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  pointer-events: none;\n}\n.title[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\nfigure[_ngcontent-%COMP%] {\n    margin: 0;\n    position: relative;\n  }\nimg[_ngcontent-%COMP%] {\n      max-width: 100%;\n      height: auto;\n      cursor: pointer;\n    }\nfigcaption[_ngcontent-%COMP%] {\n      background: rgba(0, 0, 0, .5);\n      color: #fff;\n      font-size: 85%;\n      padding: 5px;\n      position: absolute;\n      bottom: 3px;\n      left: 0;\n      right: 0;\n    }\n.description[_ngcontent-%COMP%] {\n    font-weight: 400;\n    text-align: center;\n  }\n.my-app-custom-image-with-desc[_ngcontent-%COMP%] {\n    height: auto;\n    margin-right: 2px;\n    width: 200px;\n    align-self: start;\n  }\n.position[_ngcontent-%COMP%]{\n  position: absolute;\n}\n@media only screen and (min-width:767px) {\n  .font-title[_ngcontent-%COMP%]{\n    font-size: 2vw;\n  }\n  .font-subtitle[_ngcontent-%COMP%]{\n    font-size: 1.3vw;\n  \n  }\n  .font-text[_ngcontent-%COMP%]{\n    font-size: 1.1vw;\n  \n  }\n  .pic-size[_ngcontent-%COMP%]{\n    width:8vw; height: 8vh;\n  }\n}\n@media only screen and (max-width:767px) {\n.font-title[_ngcontent-%COMP%]{\n  font-size: 30px;\n}\n.font-subtitle[_ngcontent-%COMP%]{\n  font-size: 25px;\n\n}\n.font-text[_ngcontent-%COMP%]{\n  font-size: 17px;\n\n}\n.position[_ngcontent-%COMP%]{\n  position:unset;\n}\n.back[_ngcontent-%COMP%]{\n  display: none;\n}\n.pic-size[_ngcontent-%COMP%]{\n  width:20vw; height: 10vh;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdDEvcHJvamVjdDEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osT0FBTztFQUNQLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztBQUNiO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7QUFDYjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE9BQU87RUFDUCxRQUFRO0FBQ1Y7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBR0E7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7QUFDRTtJQUNFLFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7QUFDRTtNQUNFLGVBQWU7TUFDZixZQUFZO01BQ1osZUFBZTtJQUNqQjtBQUVBO01BQ0UsNkJBQTZCO01BQzdCLFdBQVc7TUFDWCxjQUFjO01BQ2QsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsT0FBTztNQUNQLFFBQVE7SUFDVjtBQUdGO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0VBQ25CO0FBQ0Y7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZ0JBQWdCOztFQUVsQjtFQUNBO0lBQ0UsZ0JBQWdCOztFQUVsQjtFQUNBO0lBQ0UsU0FBUyxFQUFFLFdBQVc7RUFDeEI7QUFDRjtBQUNBO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlOztBQUVqQjtBQUNBO0VBQ0UsZUFBZTs7QUFFakI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsVUFBVSxFQUFFLFlBQVk7QUFDMUI7QUFDQSIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3QxL3Byb2plY3QxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktYXBwLWN1c3RvbS1wbGFpbi1jb250YWluZXItcm93IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLm15LWFwcC1jdXN0b20tcGxhaW4tY29udGFpbmVyLXJvdyAubXktYXBwLWN1c3RvbS1pbWFnZS1yb3cge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuLm15LWFwcC1jdXN0b20tcGxhaW4tY29udGFpbmVyLXJvdyAubXktYXBwLWN1c3RvbS1pbWFnZS1yb3cuYWZ0ZXIge1xuICBib3JkZXItdG9wOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5teS1hcHAtY3VzdG9tLXBsYWluLWNvbnRhaW5lci1jb2x1bW4ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ubXktYXBwLWN1c3RvbS1wbGFpbi1jb250YWluZXItY29sdW1uIC5teS1hcHAtY3VzdG9tLWltYWdlLWNvbHVtbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgd2lkdGg6IDUwcHg7XG59XG4ubXktYXBwLWN1c3RvbS1wbGFpbi1jb250YWluZXItY29sdW1uIC5teS1hcHAtY3VzdG9tLWltYWdlLWNvbHVtbi5hZnRlciB7XG4gIGJvcmRlci10b3A6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm15LWFwcC1jdXN0b20tcGxhaW4tY29udGFpbmVyLXdpdGgtZGVzYyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5teS1hcHAtY3VzdG9tLXBsYWluLWNvbnRhaW5lci13aXRoLWRlc2MgZmlndXJlIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubXktYXBwLWN1c3RvbS1wbGFpbi1jb250YWluZXItd2l0aC1kZXNjIGZpZ3VyZSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm15LWFwcC1jdXN0b20tcGxhaW4tY29udGFpbmVyLXdpdGgtZGVzYyBmaWd1cmUgZmlnY2FwdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogODUlO1xuICBwYWRkaW5nOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLm15LWFwcC1jdXN0b20tcGxhaW4tY29udGFpbmVyLXdpdGgtZGVzYyAuZGVzY3JpcHRpb24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm15LWFwcC1jdXN0b20tcGxhaW4tY29udGFpbmVyLXdpdGgtZGVzYyAubXktYXBwLWN1c3RvbS1pbWFnZS13aXRoLWRlc2Mge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xufVxuXG4ubW9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi50cmFuc2NsdWRlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuXG4ubXktYXBwLWN1c3RvbS1wbGFpbi1jb250YWluZXItd2l0aC1kZXNjIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuICBmaWd1cmUge1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgICBpbWcge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIGZpZ2NhcHRpb24ge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogODUlO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAzcHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICBcblxuICAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLm15LWFwcC1jdXN0b20taW1hZ2Utd2l0aC1kZXNjIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICB9XG4ucG9zaXRpb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2N3B4KSB7XG4gIC5mb250LXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG4gIC5mb250LXN1YnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMS4zdnc7XG4gIFxuICB9XG4gIC5mb250LXRleHR7XG4gICAgZm9udC1zaXplOiAxLjF2dztcbiAgXG4gIH1cbiAgLnBpYy1zaXple1xuICAgIHdpZHRoOjh2dzsgaGVpZ2h0OiA4dmg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuLmZvbnQtdGl0bGV7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5mb250LXN1YnRpdGxle1xuICBmb250LXNpemU6IDI1cHg7XG5cbn1cbi5mb250LXRleHR7XG4gIGZvbnQtc2l6ZTogMTdweDtcblxufVxuLnBvc2l0aW9ue1xuICBwb3NpdGlvbjp1bnNldDtcbn1cbi5iYWNre1xuICBkaXNwbGF5OiBub25lO1xufVxuLnBpYy1zaXple1xuICB3aWR0aDoyMHZ3OyBoZWlnaHQ6IDEwdmg7XG59XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Project1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'project1-root',
          templateUrl: './project1.component.html',
          styleUrls: ['./project1.component.css']
        }]
      }], function () {
        return [{
          type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["GalleryService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/projects/projects.module.ts ***!
    \*********************************************/

  /*! exports provided: ProjectsModule */

  /***/
  function srcAppProjectsProjectsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsModule", function () {
      return ProjectsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-gallery */
    "./node_modules/angular-gallery/__ivy_ngcc__/fesm2015/angular-gallery.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _project1_project1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./project1/project1.component */
    "./src/app/projects/project1/project1.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects/projects.component.ts");
    /* harmony import */


    var _project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./project.component */
    "./src/app/projects/project.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var mousetrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! mousetrap */
    "./node_modules/mousetrap/mousetrap.js");
    /* harmony import */


    var mousetrap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ks89/angular-modal-gallery */
    "./node_modules/@ks89/angular-modal-gallery/__ivy_ngcc__/fesm2015/ks89-angular-modal-gallery.js"); //
    // ********************** angular-modal-gallery *****************************
    // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
    // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
    // <----------------- angular-modal-gallery library import
    // **************************************************************************
    // ************************ optional font-awesome 5 ************************
    // to install use both `npm i --save @fortawesome/fontawesome-svg-core` and `npm i --save @fortawesome/free-solid-svg-icons`


    var ProjectsModule = function ProjectsModule() {
      _classCallCheck(this, ProjectsModule);
    };

    ProjectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProjectsModule
    });
    ProjectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProjectsModule_Factory(t) {
        return new (t || ProjectsModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_10__["GalleryModule"].forRoot(), angular_gallery__WEBPACK_IMPORTED_MODULE_2__["IvyGalleryModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: '',
        component: _project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"],
        children: [{
          path: '',
          component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]
        }, {
          path: ':project',
          component: _project1_project1_component__WEBPACK_IMPORTED_MODULE_4__["Project1Component"]
        }]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsModule, {
        declarations: [_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], _project1_project1_component__WEBPACK_IMPORTED_MODULE_4__["Project1Component"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_10__["GalleryModule"], // <-------------------------------------------- angular-modal-gallery module import
        angular_gallery__WEBPACK_IMPORTED_MODULE_2__["IvyGalleryModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], _project1_project1_component__WEBPACK_IMPORTED_MODULE_4__["Project1Component"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_10__["GalleryModule"].forRoot(), angular_gallery__WEBPACK_IMPORTED_MODULE_2__["IvyGalleryModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
            path: '',
            component: _project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"],
            children: [{
              path: '',
              component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]
            }, {
              path: ':project',
              component: _project1_project1_component__WEBPACK_IMPORTED_MODULE_4__["Project1Component"]
            }]
          }])],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects/projects.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/projects/projects/projects.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../projects.service */
    "./src/app/projects/projects.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function ProjectsComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "View Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", "url(" + project_r1.url + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"])("background-size", "100% 100%")("padding-bottom", "60%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, project_r1.title));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r1.github, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, project_r1.title));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", project_r1.description.substring(0, 50), "...");
      }
    }

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent(service) {
        _classCallCheck(this, ProjectsComponent);

        this.service = service;
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.projekti = this.service.getAllProjects();
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"]));
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["projects-root"]],
      decls: 6,
      vars: 1,
      consts: [[2, "margin", "0 20px 0px 30px"], [1, "row", 2, "border-bottom", "1px solid silver", "margin-bottom", "10px"], [1, "about-title", "font-title"], [1, "row"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "image-container", 2, "padding-left", "30px", "padding-right", "30px"], [1, "overlay"], [1, "button", "button-primary", "font-subtitle", 2, "color", "white", 3, "routerLink"], ["target", "_blank", 1, "button", "button-primary", "font-title", 2, "color", "white", 3, "href"], [1, "fa", "fa-github"], [1, "product-details", 2, "margin-left", "30px", "margin-right", "30px", "cursor", "pointer", 3, "routerLink"], [1, "product-title", "font-subtitle", 2, "color", "white"], [1, "product-brand", "font-text"], [2, "text-align", "right", "font-size", "20px"], [1, "fa", "fa-angle-right"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsComponent_div_5_Template, 15, 15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projekti);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: [".about-title[_ngcontent-%COMP%] {\n  \n  line-height: 30px;\n  color: white;\n}\n.header-block[_ngcontent-%COMP%] {\nheight: 100%;\nbackground-color: #3A3A35;\ncolor:white;\nwidth: 50%;\nmargin:auto;\nborder-color:white;\nborder-style:solid;\nborder-width: 0 15px;\ndisplay:table;\n}\n.header-text[_ngcontent-%COMP%] {\ntext-align: center;\nvertical-align: middle;\ndisplay: table-cell;\n}\n.header-text-title[_ngcontent-%COMP%] {\ndisplay: inline-block;\nfont-size: 30px;\nfont-weight: 500;\npadding-bottom:10px;\nborder-bottom: 1px solid white;\n}\n.header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\npadding:10px 40px\n}\n.layout-container[_ngcontent-%COMP%] {\nmax-width: 1140px;\npadding-right: 30px;\npadding-left: 30px;\nmargin-right: auto;\nmargin-left: auto;\n}\n.product-grid[_ngcontent-%COMP%] {\npadding-top: 5%;\npadding-bottom: 5%;\n}\n.product-image[_ngcontent-%COMP%] {\n\nheight: 100px;\n\n\nbackground-size: 100% 100%;\n}\n.image-container[_ngcontent-%COMP%] {\nposition: relative;\n}\n.image-container[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]{\nopacity: 0.3;\nbackground-size:120%;\n}\n.image-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{\nopacity: 1;\n}\n.overlay[_ngcontent-%COMP%] {\ntransition: .5s ease;\nopacity: 0;\nposition: absolute;\ntop: 50%;\nleft: 50%;\ntext-align: center;\ntransform: translate(-50%, -50%);\n-ms-transform: translate(-50%, -50%)\n}\n.overlay[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\nwidth: 160px;\nline-height: 38px;\n}\n.overlay[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:first-child {\nmargin-bottom: 2em;\n}\n.product-details[_ngcontent-%COMP%] {\npadding-top: 15px;\ntext-align: center;\nmargin-bottom: 40px;\n}\n.product-brand[_ngcontent-%COMP%] {\ndisplay: block;\nmargin: .5em 0;\ncolor: #7d7d7d;\ntext-align: left;\n}\n.product-title[_ngcontent-%COMP%] {\ntext-transform: uppercase;\nletter-spacing: .05em;\nmargin-top: 0;\nmargin-bottom: .5em;\nfont-size: 1em;\nline-height: 1.2;\nfont-weight: 400;\nfont-family: Roboto;\ntext-align: left;\n\n}\n.product-price[_ngcontent-%COMP%] {\nfont-size: 1.14286em;\ncolor: #9f9f9f;\nfont-family: Playfair Display;\n}\n.klasa[_ngcontent-%COMP%]{\nbackground-size: 100% 100%;\npadding-bottom: 50%;\n}\n@media only screen and (min-width:767px) {\n.font-title[_ngcontent-%COMP%]{\n  font-size: 2vw;\n}\n.font-subtitle[_ngcontent-%COMP%]{\n  font-size: 1.3vw;\n\n}\n.font-text[_ngcontent-%COMP%]{\n  font-size: 1.1vw;\n\n}\n}\n@media only screen and (max-width:767px) {\n.font-title[_ngcontent-%COMP%]{\nfont-size: 30px;\n}\n.font-subtitle[_ngcontent-%COMP%]{\nfont-size: 25px;\n\n}\n.font-text[_ngcontent-%COMP%]{\nfont-size: 17px;\n\n}\n.header-block[_ngcontent-%COMP%] {\nwidth: 100%;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBQ0E7QUFDQSxZQUFZO0FBQ1oseUJBQXlCO0FBQ3pCLFdBQVc7QUFDWCxVQUFVO0FBQ1YsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLGFBQWE7QUFDYjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGVBQWU7QUFDZixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsK0JBQStCO0FBQy9CLGtDQUFrQztBQUNsQywwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsWUFBWTtBQUNaLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsVUFBVTtBQUNWLGtCQUFrQjtBQUNsQixRQUFRO0FBQ1IsU0FBUztBQUNULGtCQUFrQjtBQUNsQixnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsY0FBYztBQUNkLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGFBQWE7QUFDYixtQkFBbUI7QUFDbkIsY0FBYztBQUNkLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixjQUFjO0FBQ2QsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjs7QUFFbEI7QUFDQTtFQUNFLGdCQUFnQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC10aXRsZSB7XG4gIC8qIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7ICovXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uaGVhZGVyLWJsb2NrIHtcbmhlaWdodDogMTAwJTtcbmJhY2tncm91bmQtY29sb3I6ICMzQTNBMzU7XG5jb2xvcjp3aGl0ZTtcbndpZHRoOiA1MCU7XG5tYXJnaW46YXV0bztcbmJvcmRlci1jb2xvcjp3aGl0ZTtcbmJvcmRlci1zdHlsZTpzb2xpZDtcbmJvcmRlci13aWR0aDogMCAxNXB4O1xuZGlzcGxheTp0YWJsZTtcbn1cbi5oZWFkZXItdGV4dCB7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuZGlzcGxheTogdGFibGUtY2VsbDtcbn1cbi5oZWFkZXItdGV4dC10aXRsZSB7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5mb250LXNpemU6IDMwcHg7XG5mb250LXdlaWdodDogNTAwO1xucGFkZGluZy1ib3R0b206MTBweDtcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbn1cbi5oZWFkZXItdGV4dCBwIHtcbnBhZGRpbmc6MTBweCA0MHB4XG59XG4ubGF5b3V0LWNvbnRhaW5lciB7XG5tYXgtd2lkdGg6IDExNDBweDtcbnBhZGRpbmctcmlnaHQ6IDMwcHg7XG5wYWRkaW5nLWxlZnQ6IDMwcHg7XG5tYXJnaW4tcmlnaHQ6IGF1dG87XG5tYXJnaW4tbGVmdDogYXV0bztcbn1cbi5wcm9kdWN0LWdyaWQge1xucGFkZGluZy10b3A6IDUlO1xucGFkZGluZy1ib3R0b206IDUlO1xufVxuLnByb2R1Y3QtaW1hZ2Uge1xuLyogd2lkdGg6IDEwMCU7ICovXG5oZWlnaHQ6IDEwMHB4O1xuLyogcGFkZGluZy1ib3R0b206IDY2LjY2NjY3JTsgKi9cbi8qIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICovXG5iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cbi5pbWFnZS1jb250YWluZXIge1xucG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmltYWdlLWNvbnRhaW5lcjpob3ZlciAucHJvZHVjdC1pbWFnZXtcbm9wYWNpdHk6IDAuMztcbmJhY2tncm91bmQtc2l6ZToxMjAlO1xufVxuLmltYWdlLWNvbnRhaW5lcjpob3ZlciAub3ZlcmxheXtcbm9wYWNpdHk6IDE7XG59XG4ub3ZlcmxheSB7XG50cmFuc2l0aW9uOiAuNXMgZWFzZTtcbm9wYWNpdHk6IDA7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6IDUwJTtcbmxlZnQ6IDUwJTtcbnRleHQtYWxpZ246IGNlbnRlcjtcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXG59XG4ub3ZlcmxheSAuYnV0dG9uIHtcbndpZHRoOiAxNjBweDtcbmxpbmUtaGVpZ2h0OiAzOHB4O1xufVxuLm92ZXJsYXkgLmJ1dHRvbjpmaXJzdC1jaGlsZCB7XG5tYXJnaW4tYm90dG9tOiAyZW07XG59XG4ucHJvZHVjdC1kZXRhaWxzIHtcbnBhZGRpbmctdG9wOiAxNXB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xubWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5wcm9kdWN0LWJyYW5kIHtcbmRpc3BsYXk6IGJsb2NrO1xubWFyZ2luOiAuNWVtIDA7XG5jb2xvcjogIzdkN2Q3ZDtcbnRleHQtYWxpZ246IGxlZnQ7XG59XG4ucHJvZHVjdC10aXRsZSB7XG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xubGV0dGVyLXNwYWNpbmc6IC4wNWVtO1xubWFyZ2luLXRvcDogMDtcbm1hcmdpbi1ib3R0b206IC41ZW07XG5mb250LXNpemU6IDFlbTtcbmxpbmUtaGVpZ2h0OiAxLjI7XG5mb250LXdlaWdodDogNDAwO1xuZm9udC1mYW1pbHk6IFJvYm90bztcbnRleHQtYWxpZ246IGxlZnQ7XG5cbn1cbi5wcm9kdWN0LXByaWNlIHtcbmZvbnQtc2l6ZTogMS4xNDI4NmVtO1xuY29sb3I6ICM5ZjlmOWY7XG5mb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheTtcbn1cbi5rbGFzYXtcbmJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xucGFkZGluZy1ib3R0b206IDUwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjdweCkge1xuLmZvbnQtdGl0bGV7XG4gIGZvbnQtc2l6ZTogMnZ3O1xufVxuLmZvbnQtc3VidGl0bGV7XG4gIGZvbnQtc2l6ZTogMS4zdnc7XG5cbn1cbi5mb250LXRleHR7XG4gIGZvbnQtc2l6ZTogMS4xdnc7XG5cbn1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuLmZvbnQtdGl0bGV7XG5mb250LXNpemU6IDMwcHg7XG59XG4uZm9udC1zdWJ0aXRsZXtcbmZvbnQtc2l6ZTogMjVweDtcblxufVxuLmZvbnQtdGV4dHtcbmZvbnQtc2l6ZTogMTdweDtcblxufVxuLmhlYWRlci1ibG9jayB7XG53aWR0aDogMTAwJTtcbn1cbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'projects-root',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.css']
        }]
      }], function () {
        return [{
          type: _projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=projects-projects-module-es5.js.map