(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alist\Git\frontend-take-home-assignment\src\main.ts */"zUnb");


/***/ }),

/***/ "3TrI":
/*!******************************************************!*\
  !*** ./src/app/shared/ngx-mask-integration/index.ts ***!
  \******************************************************/
/*! exports provided: options, NgxMaskIntegrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngx_mask_integration_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngx-mask-integration.module */ "yIAX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "options", function() { return _ngx_mask_integration_module__WEBPACK_IMPORTED_MODULE_0__["options"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxMaskIntegrationModule", function() { return _ngx_mask_integration_module__WEBPACK_IMPORTED_MODULE_0__["NgxMaskIntegrationModule"]; });




/***/ }),

/***/ "5SKJ":
/*!***************************************************************!*\
  !*** ./src/app/shared/month-picker/month-picker.component.ts ***!
  \***************************************************************/
/*! exports provided: MonthPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthPickerComponent", function() { return MonthPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class MonthPickerComponent {
    constructor(injector) {
        this.injector = injector;
    }
    get control() {
        return this.formControl || this.controlContainer.control.get(this.formControlName);
    }
    get controlContainer() {
        return this.injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]);
    }
    registerOnTouched(fn) {
        this.formControlDirective.valueAccessor.registerOnTouched(fn);
    }
    registerOnChange(fn) {
        this.formControlDirective.valueAccessor.registerOnChange(fn);
    }
    writeValue(obj) {
        this.formControlDirective.valueAccessor.writeValue(obj);
    }
    setDisabledState(isDisabled) {
        this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
    }
    skipMonth(amount) {
        const currentDate = new Date(this.control.value);
        const timeZoneOffset = new Date().getTimezoneOffset() / 60;
        const newDate = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth() + 1 + amount, 1, timeZoneOffset, 0, 0));
        const newMonth = newDate.getMonth() + 1;
        const formatedNewMonth = newMonth < 10 ? `0${newMonth}` : `${newMonth}`;
        this.control.setValue(`${newDate.getFullYear()}-${formatedNewMonth}`);
    }
}
MonthPickerComponent.ɵfac = function MonthPickerComponent_Factory(t) { return new (t || MonthPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
MonthPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonthPickerComponent, selectors: [["app-month-picker"]], viewQuery: function MonthPickerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formControlDirective = _t.first);
    } }, inputs: { min: "min", max: "max", formControl: "formControl", formControlName: "formControlName" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => MonthPickerComponent),
                multi: true,
            },
        ])], decls: 5, vars: 3, consts: [["type", "button", 1, "prefix", "action-button", 3, "click"], ["src", "./assets/icons/arrow.svg", "alt", "Previous month"], ["type", "button", 1, "sufix", "action-button", 3, "click"], ["src", "./assets/icons/arrow.svg", "alt", "Next month"], ["type", "month", 3, "min", "max", "formControl"]], template: function MonthPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthPickerComponent_Template_button_click_0_listener() { return ctx.skipMonth(-1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthPickerComponent_Template_button_click_2_listener() { return ctx.skipMonth(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.min)("max", ctx.max)("formControl", ctx.control);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n}\n.sufix[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n[type=month][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  font-family: \"Work Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  grid-column: 2/3;\n  grid-row: 1/2;\n  padding: 0.25rem;\n  position: relative;\n}\n[type=month][_ngcontent-%COMP%]::-webkit-datetime-edit {\n  text-align: center;\n}\n[type=month][_ngcontent-%COMP%]::-webkit-datetime-edit-text {\n  display: none;\n}\n[type=month][_ngcontent-%COMP%]::-webkit-datetime-edit-month-field {\n  display: block;\n  text-transform: capitalize;\n}\n[type=month][_ngcontent-%COMP%]::-webkit-clear-button {\n  display: none;\n}\n[type=month][_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  display: none;\n}\n[type=month][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  bottom: 0;\n  display: block;\n  height: auto;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: auto;\n}\n[type=month][_ngcontent-%COMP%]::-webkit-datetime-edit-year-field {\n  display: block;\n  margin: -0.5rem 0 -1rem;\n  transform: scale(0.8);\n}\n[type=month][_ngcontent-%COMP%]::-webkit-date-and-time-value {\n  margin: 0 auto;\n  text-align: center;\n  white-space: pre-line;\n  width: -webkit-min-content;\n  width: min-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbW9udGgtcGlja2VyL21vbnRoLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQ0dBO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0FBREY7QUFJQTtFQUNFLHFCQUFBO0FBREY7QUFJQTtFQUNFLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLHNCRFBNO0VDUU4sdUtEV2lCO0VDVmpCLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdFO0VBQ0Usa0JBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtBQUZKO0FBS0U7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtBQUpKO0FBT0U7RUFDRSxhQUFBO0FBTEo7QUFRRTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFOSjtBQVNFO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFQSjtBQVVFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUFBLGtCQUFBO0FBUkoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbW9udGgtcGlja2VyL21vbnRoLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbG9yIHBhbGV0dGUgKi9cbiRhbG1vc3QtYmxhY2s6ICMxYzFlMWY7XG4kZGFyay1ncmV5OiAjNjU3Nzg2O1xuJGRhcmtpc2gtZ3JleTogIzk2YTRiMDtcbiRncmV5OiAjYWFiOGMyO1xuJGxpZ2h0LWdyZXk6ICNlMWU4ZWQ7XG4kc3VwZXJsaWdodC1ncmV5OiAjZjRmOGZhO1xuJHdoaXRlOiAjZmZmO1xuJGxpZ2h0LWJsdWU6ICMwMDc5ZmY7XG4kYmx1ZTogIzFiMzFhODtcbiRyZWQ6ICNmZTU3MjI7XG5cbi8vIEJvZHlcbiRib2R5LWJnOiAkbGlnaHQtZ3JleTtcbiRib2R5LWNvbG9yOiAkYWxtb3N0LWJsYWNrO1xuXG4vLyBMaW5rc1xuJGxpbmstY29sb3I6ICRibHVlO1xuJGxpbmstZGVjb3JhdGlvbjogbm9uZTtcbiRsaW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGxpbmstY29sb3IsIDE1JSk7XG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cbi8vIFBhcmFncmFwaHNcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuLy8gRm9udHNcbiRmb250LWZhbWlseS1iYXNlOiAnV29yayBTYW5zJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsXG4gICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnO1xuXG4kZm9udC1zaXplLWJhc2U6IDE2cHg7XG4kZm9udC1zaXplLXhsZzogJGZvbnQtc2l6ZS1iYXNlICogMi41O1xuJGZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlICogMS41O1xuJGZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlICogMC43NTtcblxuJGgxLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMjtcbiRoMi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNjI1O1xuJGgzLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS41O1xuJGg0LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4xMjU7XG4kaDUtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XG4kaDYtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAwLjg3NTtcblxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiA0MDA7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiA1MDA7XG4kZm9udC13ZWlnaHQtYm9sZDogNjAwO1xuXG4kZm9udC13ZWlnaHQtYmFzZTogJGZvbnQtd2VpZ2h0LWxpZ2h0O1xuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuMztcblxuJHRleHQtbXV0ZWQ6ICRncmV5O1xuJGxpc3QtaW5saW5lLXBhZGRpbmc6IDAuNXJlbTtcbiRzcGFjZXI6IDFyZW07XG5cbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAoJHNwYWNlciAvIDIpO1xuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBpbmhlcml0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS4yO1xuJGhlYWRpbmdzLWNvbG9yOiBpbmhlcml0O1xuXG4kbW9iaWxlLWJyZWFrcG9pbnQ6IDU3NnB4O1xuJHRhYmxldC1icmVha3BvaW50OiA3NjhweDtcbiRzbS1icmVha3BvaW50OiAxMjgwcHg7XG4kbWQtYnJlYWtwb2ludDogMTM2NnB4O1xuJGxnLWJyZWFrcG9pbnQ6IDE5MjBweDtcblxuJGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiRib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDE1MCwgMTY0LCAxNzYsIDAuMSk7XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbWl4aW5zJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG59XG5cbi5zdWZpeCBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG59XG5cblt0eXBlPSdtb250aCddIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gIGdyaWQtY29sdW1uOiAyLzM7XG4gIGdyaWQtcm93OiAxLzI7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOjotd2Via2l0LWRhdGV0aW1lLWVkaXQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICY6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC10ZXh0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1vbnRoLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuXG4gICY6Oi13ZWJraXQtY2xlYXItYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICY6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gICY6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC15ZWFyLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IC0wLjVyZW0gMCAtMXJlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIH1cblxuICAmOjotd2Via2l0LWRhdGUtYW5kLXRpbWUtdmFsdWUge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonthPickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-month-picker',
                templateUrl: './month-picker.component.html',
                styleUrls: ['./month-picker.component.scss'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => MonthPickerComponent),
                        multi: true,
                    },
                ],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, { formControlDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], { static: true }]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formControlName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FDju":
/*!*****************************************************!*\
  !*** ./src/app/shared/validators/date.validator.ts ***!
  \*****************************************************/
/*! exports provided: DateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateValidator", function() { return DateValidator; });
class DateValidator {
    static min(date) {
        return (control) => {
            const inputDate = new Date(control.value);
            const minDate = new Date(date);
            if (minDate <= inputDate) {
                return null;
            }
            else {
                const timezoneOffset = minDate.getTimezoneOffset() / 60;
                const minDateWithTimezone = new Date(Date.UTC(minDate.getFullYear(), minDate.getMonth() + 1, 1, timezoneOffset, 0, 0));
                return { minDate: { min: minDateWithTimezone, actual: inputDate } };
            }
        };
    }
    static max(date) {
        return (control) => {
            const inputDate = new Date(control.value);
            const maxDate = new Date(date);
            if (maxDate >= inputDate) {
                return null;
            }
            else {
                const timezoneOffset = maxDate.getTimezoneOffset() / 60;
                const maxDateWithTimezone = new Date(Date.UTC(maxDate.getFullYear(), maxDate.getMonth() + 1, 1, timezoneOffset, 0, 0));
                return { maxDate: { max: maxDateWithTimezone, actual: inputDate } };
            }
        };
    }
}


/***/ }),

/***/ "M0ag":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "PCNd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });




/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _month_picker_month_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./month-picker/month-picker.component */ "5SKJ");
/* harmony import */ var _ngx_mask_integration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngx-mask-integration */ "3TrI");






class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngx_mask_integration__WEBPACK_IMPORTED_MODULE_4__["NgxMaskIntegrationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ngx_mask_integration__WEBPACK_IMPORTED_MODULE_4__["NgxMaskIntegrationModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_month_picker_month_picker_component__WEBPACK_IMPORTED_MODULE_3__["MonthPickerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngx_mask_integration__WEBPACK_IMPORTED_MODULE_4__["NgxMaskIntegrationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ngx_mask_integration__WEBPACK_IMPORTED_MODULE_4__["NgxMaskIntegrationModule"], _month_picker_month_picker_component__WEBPACK_IMPORTED_MODULE_3__["MonthPickerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngx_mask_integration__WEBPACK_IMPORTED_MODULE_4__["NgxMaskIntegrationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ngx_mask_integration__WEBPACK_IMPORTED_MODULE_4__["NgxMaskIntegrationModule"], _month_picker_month_picker_component__WEBPACK_IMPORTED_MODULE_3__["MonthPickerComponent"]],
                declarations: [_month_picker_month_picker_component__WEBPACK_IMPORTED_MODULE_3__["MonthPickerComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_shared_validators_date_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/validators/date.validator */ "FDju");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_month_picker_month_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/month-picker/month-picker.component */ "5SKJ");










function AppComponent_span_22_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_span_22_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.goalForm.get("amount").hasError("required"));
} }
function AppComponent_span_27_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_span_27_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Date should be greater or equal than ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r5.goalForm.get("deadline").getError("minDate").min, "MMMM yyyy"), ". ");
} }
function AppComponent_span_27_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Date should not be greater than ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r6.goalForm.get("deadline").getError("maxDate").max, "MMMM yyyy"), ". ");
} }
function AppComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_span_27_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_span_27_span_2_Template, 3, 4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_span_27_span_3_Template, 3, 4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.goalForm.get("deadline").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.goalForm.get("deadline").hasError("minDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.goalForm.get("deadline").hasError("maxDate"));
} }
function AppComponent_div_28_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const summary_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](2, 1, summary_r7.monthlyAmount, "USD", "symbol", "1.0-2"), " ");
} }
function AppComponent_div_28_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "currency");
} if (rf & 2) {
    const summary_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](1, 1, summary_r7.monthlyAmount, "USD", "symbol", "1.2-6"), " ");
} }
function AppComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Monthly ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_28_ng_container_7_Template, 3, 6, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_28_ng_template_8_Template, 2, 6, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " You're planning ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " to reach your ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " goal by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const summary_r7 = ctx.ngIf;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](6, 6, summary_r7.monthlyAmount, "USD", "symbol", "1.2-6"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", summary_r7.monthlyAmount >= 1)("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", summary_r7.remainingMonths, " monthly deposits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](17, 11, summary_r7.goalAmount, "USD", "symbol", "1.0-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 16, summary_r7.goalDeadline, "MMMM yyyy"), ".");
} }
class AppComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.setMonthPickerMinAndMaxValues();
        this.buildForm();
    }
    setMonthPickerMinAndMaxValues() {
        const initialValue = this.getMonthPickerInitialValue();
        this.dateMin = `${initialValue.year}-${initialValue.month}`;
        this.dateMax = `${+initialValue.year + 100}-12`;
    }
    getMonthPickerInitialValue() {
        const now = new Date();
        const year = now.getFullYear().toString();
        const currentMonth = now.getMonth() + 2;
        const month = currentMonth < 10 ? `0${currentMonth}` : `${currentMonth}`;
        return {
            year,
            month,
        };
    }
    buildForm() {
        const initialValue = this.getMonthPickerInitialValue();
        this.goalForm = this.fb.group({
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            deadline: [
                `${initialValue.year}-${initialValue.month}`,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _app_shared_validators_date_validator__WEBPACK_IMPORTED_MODULE_2__["DateValidator"].min(this.dateMin), _app_shared_validators_date_validator__WEBPACK_IMPORTED_MODULE_2__["DateValidator"].max(this.dateMax)],
            ],
        });
        this.bindForm();
    }
    bindForm() {
        const $amount = this.goalForm.get('amount').valueChanges;
        const $deadline = this.goalForm.get('deadline').valueChanges;
        $amount.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(() => {
            const amountField = this.goalForm.get('deadline');
            amountField.setValue(amountField.value);
        });
        this.summary$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([$amount, $deadline]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([amount, deadline]) => {
            const timeZoneOffset = new Date().getTimezoneOffset() / 60;
            const splitedDeadline = deadline.split('-').map((dateFragment) => +dateFragment);
            return this.getSummary(+amount, new Date(Date.UTC(splitedDeadline[0], splitedDeadline[1] - 1, 1, timeZoneOffset, 0, 0)));
        }));
    }
    getSummary(goalAmount, goalDeadline) {
        const remainingMonths = this.getRemainingMonths(goalDeadline);
        const monthlyAmount = goalAmount / remainingMonths;
        return {
            goalAmount,
            goalDeadline,
            monthlyAmount,
            remainingMonths,
        };
    }
    getRemainingMonths(goalDeadline) {
        const now = new Date();
        const years = goalDeadline.getFullYear() - now.getFullYear();
        const months = years * 12 + (goalDeadline.getMonth() - now.getMonth());
        return months > 0 ? months : 1;
    }
    submitGoal() {
        if (this.goalForm.valid) {
            console.log('Done!');
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 32, vars: 9, consts: [["href", "/"], ["alt", "Origin", "src", "./assets/icons/logo.svg", "role", "button", "aria-label", "Origin"], [1, "card"], ["src", "./assets/icons/house.svg", "alt", "Goal icon"], [3, "formGroup", "ngSubmit"], [1, "form-field"], ["for", "amount"], ["type", "button", 1, "prefix"], ["type", "text", "id", "amount", "formControlName", "amount", "inputmode", "numeric", "autocomplete", "off", "mask", "separator.2"], ["class", "errors", 4, "ngIf"], ["for", "deadline"], ["formControlName", "deadline", "id", "deadline", 3, "min", "max"], ["class", "summary", 4, "ngIf"], ["type", "submit", 3, "disabled"], [1, "errors"], [4, "ngIf"], [1, "summary"], [3, "title"], [4, "ngIf", "ngIfElse"], ["decimals", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Let's plan your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "saving goal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Buy a house");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Saving goal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_15_listener() { return ctx.submitGoal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Total amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppComponent_span_22_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Reach goal by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-month-picker", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AppComponent_span_27_Template, 4, 3, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AppComponent_div_28_Template, 22, 19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.goalForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.goalForm.get("amount").invalid && (ctx.goalForm.get("amount").dirty || ctx.goalForm.get("amount").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.dateMin)("max", ctx.dateMax);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.goalForm.get("deadline").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 7, ctx.summary$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.goalForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_mask__WEBPACK_IMPORTED_MODULE_5__["MaskDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_month_picker_month_picker_component__WEBPACK_IMPORTED_MODULE_7__["MonthPickerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: ["h1[_ngcontent-%COMP%] {\n  color: #1b31a8;\n  font-size: 18px;\n  font-weight: 400;\n  margin: 0;\n  padding: 1.5rem;\n  text-align: center;\n}\nh1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 1.33;\n  margin: 0;\n}\nh3[_ngcontent-%COMP%] {\n  color: #657786;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.25rem;\n  margin: 0;\n}\n@media (min-width: 576px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n    padding: 2.5rem;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 1.25;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 1.25em;\n  }\n}\n.card[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 2rem;\n}\n@media (min-width: 576px) {\n  .card[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    height: 2.5rem;\n  }\n}\nform[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 1fr;\n  margin-top: 2rem;\n}\nform[_ngcontent-%COMP%]   [type=submit][_ngcontent-%COMP%] {\n  background-color: #1b31a8;\n  border-radius: 100vh;\n  border-style: none;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5rem;\n  padding: 1rem;\n}\n@media (min-width: 576px) {\n  form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    margin-top: 2.5rem;\n  }\n  form[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%], form[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    grid-column: 1/3;\n  }\n}\n.summary[_ngcontent-%COMP%] {\n  align-items: center;\n  border: 1px solid #e1e8ed;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 4px 0 rgba(150, 164, 176, 0.1);\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n}\n.summary[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%], .summary[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n}\n.summary[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  padding-right: 0;\n}\n.summary[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: none;\n}\n.summary[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #0079ff;\n  font-size: 40px;\n  font-weight: 500;\n  padding-left: 1rem;\n  text-align: right;\n}\n.summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background-color: #f4f8fa;\n  font-size: 12px;\n  grid-column: 1/3;\n  margin: 0;\n}\n@media (min-width: 576px) {\n  .summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .summary[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%], .summary[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n  .summary[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .summary[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUE7QUNHQTtFQUNFLGNES0s7RUNKTCxlRGdDYTtFQy9CYixnQkRtQ2tCO0VDbENsQixTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBREY7QUFHRTtFQUNFLGdCRCtCZTtBQ2hDbkI7QUFLQTtFQUNFLGVEbUJhO0VDbEJiLGlCQUFBO0VBQ0EsU0FBQTtBQUZGO0FBS0E7RUFDRSxjRHJCVTtFQ3NCVixlRGVhO0VDZGIsZ0JEZ0JrQjtFQ2ZsQixvQkFBQTtFQUNBLFNBQUE7QUFGRjtBQUtBO0VBQ0U7SUFDRSxlRElXO0lDSFgsZUFBQTtFQUZGOztFQUtBO0lBQ0UsZURIVztJQ0lYLGlCQUFBO0VBRkY7O0VBS0E7SUFDRSxlRGJhO0lDY2IsbUJBQUE7RUFGRjtBQUNGO0FBTUU7RUFDRSxZQUFBO0FBSko7QUFRQTtFQUVJO0lBQ0UsY0FBQTtFQU5KO0FBQ0Y7QUFVQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFNEZE87RUNlUCwwQkFBQTtFQUNBLGdCQUFBO0FBUkY7QUFVRTtFQUNFLHlCRDVERztFQzZESCxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0RqRUk7RUNrRUosZURwQ1c7RUNxQ1gsZ0JEL0JlO0VDZ0NmLG1CQUFBO0VBQ0EsYUQxQks7QUNrQlQ7QUFZQTtFQUNFO0lBQ0UsOEJBQUE7SUFDQSxrQkFBQTtFQVRGO0VBV0U7O0lBRUUsZ0JBQUE7RUFUSjtBQUNGO0FBYUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJEL0JjO0VDZ0NkLGdERC9CVztFQ2dDWCxhQUFBO0VBQ0EsOEJBQUE7QUFYRjtBQWFFOzs7RUFHRSxvQkFBQTtBQVhKO0FBY0U7RUFDRSxlRDlFYTtFQytFYixnQkRsRWlCO0VDbUVqQixnQkFBQTtBQVpKO0FBY0k7RUFDRSxhQUFBO0FBWk47QUFnQkU7RUFDRSxjRDdHUztFQzhHVCxlRHhGWTtFQ3lGWixnQkQ3RWlCO0VDOEVqQixrQkFBQTtFQUNBLGlCQUFBO0FBZEo7QUFpQkU7RUFDRSx5QkR2SGM7RUN3SGQsZUQ5Rlc7RUMrRlgsZ0JBQUE7RUFDQSxTQUFBO0FBZko7QUFrQkE7RUFDRTtJQUNFLDhCQUFBO0VBZkY7RUFpQkU7OztJQUdFLGFBQUE7RUFmSjtFQWtCRTtJQUNFLGVEekdTO0VDeUZiO0VBa0JJO0lBQ0UscUJBQUE7RUFoQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbG9yIHBhbGV0dGUgKi9cbiRhbG1vc3QtYmxhY2s6ICMxYzFlMWY7XG4kZGFyay1ncmV5OiAjNjU3Nzg2O1xuJGRhcmtpc2gtZ3JleTogIzk2YTRiMDtcbiRncmV5OiAjYWFiOGMyO1xuJGxpZ2h0LWdyZXk6ICNlMWU4ZWQ7XG4kc3VwZXJsaWdodC1ncmV5OiAjZjRmOGZhO1xuJHdoaXRlOiAjZmZmO1xuJGxpZ2h0LWJsdWU6ICMwMDc5ZmY7XG4kYmx1ZTogIzFiMzFhODtcbiRyZWQ6ICNmZTU3MjI7XG5cbi8vIEJvZHlcbiRib2R5LWJnOiAkbGlnaHQtZ3JleTtcbiRib2R5LWNvbG9yOiAkYWxtb3N0LWJsYWNrO1xuXG4vLyBMaW5rc1xuJGxpbmstY29sb3I6ICRibHVlO1xuJGxpbmstZGVjb3JhdGlvbjogbm9uZTtcbiRsaW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGxpbmstY29sb3IsIDE1JSk7XG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cbi8vIFBhcmFncmFwaHNcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuLy8gRm9udHNcbiRmb250LWZhbWlseS1iYXNlOiAnV29yayBTYW5zJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsXG4gICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnO1xuXG4kZm9udC1zaXplLWJhc2U6IDE2cHg7XG4kZm9udC1zaXplLXhsZzogJGZvbnQtc2l6ZS1iYXNlICogMi41O1xuJGZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlICogMS41O1xuJGZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlICogMC43NTtcblxuJGgxLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMjtcbiRoMi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNjI1O1xuJGgzLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS41O1xuJGg0LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4xMjU7XG4kaDUtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XG4kaDYtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAwLjg3NTtcblxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiA0MDA7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiA1MDA7XG4kZm9udC13ZWlnaHQtYm9sZDogNjAwO1xuXG4kZm9udC13ZWlnaHQtYmFzZTogJGZvbnQtd2VpZ2h0LWxpZ2h0O1xuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuMztcblxuJHRleHQtbXV0ZWQ6ICRncmV5O1xuJGxpc3QtaW5saW5lLXBhZGRpbmc6IDAuNXJlbTtcbiRzcGFjZXI6IDFyZW07XG5cbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAoJHNwYWNlciAvIDIpO1xuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBpbmhlcml0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS4yO1xuJGhlYWRpbmdzLWNvbG9yOiBpbmhlcml0O1xuXG4kbW9iaWxlLWJyZWFrcG9pbnQ6IDU3NnB4O1xuJHRhYmxldC1icmVha3BvaW50OiA3NjhweDtcbiRzbS1icmVha3BvaW50OiAxMjgwcHg7XG4kbWQtYnJlYWtwb2ludDogMTM2NnB4O1xuJGxnLWJyZWFrcG9pbnQ6IDE5MjBweDtcblxuJGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiRib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDE1MCwgMTY0LCAxNzYsIDAuMSk7XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbWl4aW5zJztcblxuaDEge1xuICBjb2xvcjogJGJsdWU7XG4gIGZvbnQtc2l6ZTogJGg0LWZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1iYXNlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHN0cm9uZyB7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ib2xkO1xuICB9XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAkaDMtZm9udC1zaXplO1xuICBsaW5lLWhlaWdodDogMS4zMztcbiAgbWFyZ2luOiAwO1xufVxuXG5oMyB7XG4gIGNvbG9yOiAkZGFyay1ncmV5O1xuICBmb250LXNpemU6ICRoNi1mb250LXNpemU7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYmFzZTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gIG1hcmdpbjogMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6ICRtb2JpbGUtYnJlYWtwb2ludCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAkaDMtZm9udC1zaXplO1xuICAgIHBhZGRpbmc6IDIuNXJlbTtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6ICRoMS1mb250LXNpemU7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAkaDUtZm9udC1zaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIH1cbn1cblxuLmNhcmQge1xuICA+IGltZyB7XG4gICAgaGVpZ2h0OiAycmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAkbW9iaWxlLWJyZWFrcG9pbnQpIHtcbiAgLmNhcmQge1xuICAgID4gaW1nIHtcbiAgICAgIGhlaWdodDogMi41cmVtO1xuICAgIH1cbiAgfVxufVxuXG5mb3JtIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogJHNwYWNlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIG1hcmdpbi10b3A6ICRzcGFjZXIgKiAyO1xuXG4gIFt0eXBlPSdzdWJtaXQnXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwdmg7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgZm9udC1zaXplOiAkaDQtZm9udC1zaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIHBhZGRpbmc6ICRzcGFjZXI7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6ICRtb2JpbGUtYnJlYWtwb2ludCkge1xuICBmb3JtIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgbWFyZ2luLXRvcDogJHNwYWNlciAqIDIuNTtcblxuICAgIC5zdW1tYXJ5LFxuICAgID4gYnV0dG9uIHtcbiAgICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gICAgfVxuICB9XG59XG5cbi5zdW1tYXJ5IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0LWdyZXk7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuXG4gID4gc3Ryb25nLFxuICA+IHNwYW4sXG4gIHAge1xuICAgIHBhZGRpbmc6ICRzcGFjZXIgJHNwYWNlciAqIDEuNTtcbiAgfVxuXG4gID4gc3Ryb25nIHtcbiAgICBmb250LXNpemU6ICRoNS1mb250LXNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XG4gICAgcGFkZGluZy1yaWdodDogMDtcblxuICAgID4gc3BhbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gID4gc3BhbiB7XG4gICAgY29sb3I6ICRsaWdodC1ibHVlO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14bGc7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG5cbiAgcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN1cGVybGlnaHQtZ3JleTtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgZ3JpZC1jb2x1bW46IDEvMztcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAkbW9iaWxlLWJyZWFrcG9pbnQpIHtcbiAgLnN1bW1hcnkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcblxuICAgID4gc3Ryb25nLFxuICAgID4gc3BhbixcbiAgICBwIHtcbiAgICAgIHBhZGRpbmc6ICRzcGFjZXIgKiAyO1xuICAgIH1cblxuICAgID4gc3Ryb25nIHtcbiAgICAgIGZvbnQtc2l6ZTogJGg0LWZvbnQtc2l6ZTtcblxuICAgICAgPiBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "M0ag");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "yIAX":
/*!****************************************************************************!*\
  !*** ./src/app/shared/ngx-mask-integration/ngx-mask-integration.module.ts ***!
  \****************************************************************************/
/*! exports provided: options, NgxMaskIntegrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaskIntegrationModule", function() { return NgxMaskIntegrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-mask */ "tmjD");




const options = {
    thousandSeparator: ',',
};
class NgxMaskIntegrationModule {
}
NgxMaskIntegrationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxMaskIntegrationModule });
NgxMaskIntegrationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxMaskIntegrationModule_Factory(t) { return new (t || NgxMaskIntegrationModule)(); }, imports: [[ngx_mask__WEBPACK_IMPORTED_MODULE_1__["NgxMaskModule"].forRoot(options)], ngx_mask__WEBPACK_IMPORTED_MODULE_1__["NgxMaskModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxMaskIntegrationModule, { imports: [ngx_mask__WEBPACK_IMPORTED_MODULE_1__["NgxMaskModule"]], exports: [ngx_mask__WEBPACK_IMPORTED_MODULE_1__["NgxMaskModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMaskIntegrationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [ngx_mask__WEBPACK_IMPORTED_MODULE_1__["NgxMaskModule"].forRoot(options)],
                exports: [ngx_mask__WEBPACK_IMPORTED_MODULE_1__["NgxMaskModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map