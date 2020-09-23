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
/* harmony import */ var _ngx_mask_integration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-mask-integration */ "3TrI");





class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngx_mask_integration__WEBPACK_IMPORTED_MODULE_3__["NgxMaskIntegrationModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ngx_mask_integration__WEBPACK_IMPORTED_MODULE_3__["NgxMaskIntegrationModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngx_mask_integration__WEBPACK_IMPORTED_MODULE_3__["NgxMaskIntegrationModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ngx_mask_integration__WEBPACK_IMPORTED_MODULE_3__["NgxMaskIntegrationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngx_mask_integration__WEBPACK_IMPORTED_MODULE_3__["NgxMaskIntegrationModule"]],
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ngx_mask_integration__WEBPACK_IMPORTED_MODULE_3__["NgxMaskIntegrationModule"]],
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









function AppComponent_span_22_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_span_22_span_1_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.goalForm.get("amount").hasError("required"));
} }
function AppComponent_span_31_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_span_31_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Date should be greater or equal than ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r5.goalForm.get("deadline").getError("minDate").min, "MMMM yyyy"), ". ");
} }
function AppComponent_span_31_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Date should not be greater than ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r6.goalForm.get("deadline").getError("maxDate").max, "MMMM yyyy"), ". ");
} }
function AppComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_span_31_span_1_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_span_31_span_2_Template, 3, 4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_span_31_span_3_Template, 3, 4, "span", 19);
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
function AppComponent_div_32_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const summary_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](2, 1, summary_r7.monthlyAmount, "USD", "symbol", "1.0-2"), " ");
} }
function AppComponent_div_32_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "currency");
} if (rf & 2) {
    const summary_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](1, 1, summary_r7.monthlyAmount, "USD", "symbol", "1.2-6"), " ");
} }
function AppComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Monthly ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_32_ng_container_7_Template, 3, 6, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_32_ng_template_8_Template, 2, 6, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
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
    skipMonth(amount) {
        const deadlineField = this.goalForm.get('deadline');
        const currentDate = new Date(deadlineField.value);
        const timeZoneOffset = new Date().getTimezoneOffset() / 60;
        const newDate = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth() + 1 + amount, 1, timeZoneOffset, 0, 0));
        const newMonth = newDate.getMonth() + 1;
        const formatedNewMonth = newMonth < 10 ? `0${newMonth}` : `${newMonth}`;
        deadlineField.setValue(`${newDate.getFullYear()}-${formatedNewMonth}`);
    }
    submitGoal() {
        if (this.goalForm.valid) {
            console.log('done');
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 36, vars: 9, consts: [["href", "/"], ["alt", "Origin", "src", "./assets/icons/logo.svg", "role", "button", "aria-label", "Origin"], [1, "card"], ["src", "./assets/icons/house.svg", "alt", "Goal icon"], [3, "formGroup", "ngSubmit"], [1, "form-field"], ["for", "amount"], ["type", "button", 1, "prefix"], ["type", "text", "name", "amount", "formControlName", "amount", "inputmode", "numeric", "autocomplete", "off", "mask", "separator.2"], ["class", "errors", 4, "ngIf"], ["for", "deadline"], ["type", "button", 1, "prefix", "action-button", 3, "click"], ["src", "./assets/icons/arrow.svg", "alt", "Previous month"], ["type", "button", 1, "sufix", "action-button", 3, "click"], ["src", "./assets/icons/arrow.svg", "alt", "Next month"], ["type", "month", "name", "deadline", "formControlName", "deadline", 3, "min", "max"], ["class", "summary", 4, "ngIf"], ["type", "submit", 3, "disabled"], [1, "errors"], [4, "ngIf"], [1, "summary"], [3, "title"], [4, "ngIf", "ngIfElse"], ["decimals", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_26_listener() { return ctx.skipMonth(-1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_28_listener() { return ctx.skipMonth(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AppComponent_span_31_Template, 4, 3, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AppComponent_div_32_Template, 22, 19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.goalForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.goalForm.get("amount").invalid && (ctx.goalForm.get("amount").dirty || ctx.goalForm.get("amount").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.dateMin)("max", ctx.dateMax);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.goalForm.get("deadline").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 7, ctx.summary$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.goalForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_mask__WEBPACK_IMPORTED_MODULE_5__["MaskDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: ["header[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 1rem;\n}\nheader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  height: 30px;\n}\n@media (min-width: 576px) {\n  header[_ngcontent-%COMP%] {\n    padding: 1.5rem 2rem;\n  }\n}\nmain[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 35rem;\n}\nh1[_ngcontent-%COMP%] {\n  color: #1b31a8;\n  font-size: 18px;\n  font-weight: 400;\n  margin: 0;\n  padding: 1.5rem;\n  text-align: center;\n}\nh1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 1.33;\n  margin: 0;\n}\nh3[_ngcontent-%COMP%] {\n  color: #657786;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.25rem;\n  margin: 0;\n}\n@media (min-width: 576px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n    padding: 2.5rem;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 1.25;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 1.25em;\n  }\n}\n.card[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 2rem;\n}\n@media (min-width: 576px) {\n  .card[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    height: 2.5rem;\n  }\n}\nform[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 1fr;\n  margin-top: 2rem;\n}\nform[_ngcontent-%COMP%]   [type=submit][_ngcontent-%COMP%] {\n  background-color: #1b31a8;\n  border-radius: 100vh;\n  border-style: none;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 1rem;\n}\n@media (min-width: 576px) {\n  form[_ngcontent-%COMP%] {\n    margin-top: 2.5rem;\n  }\n}\nlabel[_ngcontent-%COMP%] {\n  color: #1c1e1f;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.25em;\n}\ninput[_ngcontent-%COMP%] {\n  border: 1px solid #e1e8ed;\n  border-radius: 0.25rem;\n  box-sizing: border-box;\n  font-size: 20px;\n  font-weight: 600;\n  height: 3.5rem;\n  line-height: 1.2;\n  padding: 1rem;\n  width: 100%;\n}\n[type=month][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  font-family: \"Work Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  padding: 0.25rem;\n  position: relative;\n}\n[type=month][_ngcontent-%COMP%]::-webkit-datetime-edit {\n  text-align: center;\n}\n[type=month][_ngcontent-%COMP%]::-webkit-datetime-edit-text {\n  display: none;\n}\n[type=month][_ngcontent-%COMP%]::-webkit-datetime-edit-month-field {\n  display: block;\n  text-transform: capitalize;\n}\n[type=month][_ngcontent-%COMP%]::-webkit-clear-button {\n  display: none;\n}\n[type=month][_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  display: none;\n}\n[type=month][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  bottom: 0;\n  display: block;\n  height: auto;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: auto;\n}\n[type=month][_ngcontent-%COMP%]::-webkit-datetime-edit-year-field {\n  display: block;\n  margin: -0.5rem 0 -1rem;\n  transform: scale(0.8);\n}\n[type=month][_ngcontent-%COMP%]::-webkit-date-and-time-value {\n  margin: 0 auto;\n  text-align: center;\n  white-space: pre-line;\n  width: -webkit-min-content;\n  width: min-content;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  grid-column: 1/4;\n}\n.form-field[_ngcontent-%COMP%]   .errors[_ngcontent-%COMP%] {\n  color: #fe5722;\n  grid-column: 1/4;\n  padding: 0.5rem 0;\n}\n.form-field[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.95);\n}\n.form-field[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%], .form-field[_ngcontent-%COMP%]   .sufix[_ngcontent-%COMP%] {\n  background-color: #f4f8fa;\n  border: 1px solid #e1e8ed;\n  border-radius: 0.25rem;\n  color: #657786;\n  display: inline-block;\n  font-family: \"Work Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1.375rem;\n  height: 3.5rem;\n  line-height: 3.5rem;\n  padding: 0;\n  text-align: center;\n  width: 3.5rem;\n}\n.form-field[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .form-field[_ngcontent-%COMP%]   .sufix[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  height: 1rem;\n  margin: 0 auto;\n}\n.form-field[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 0;\n  border-right-width: 0;\n  border-top-right-radius: 0;\n  grid-column: 1/2;\n}\n.form-field[_ngcontent-%COMP%]   .sufix[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0;\n  border-left-width: 0;\n  border-top-left-radius: 0;\n  grid-column: 3/4;\n}\n.form-field[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]    ~ input[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  grid-column-start: 2;\n  grid-row: 2/3;\n}\n.form-field[_ngcontent-%COMP%]   .sufix[_ngcontent-%COMP%]    ~ input[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  grid-column-end: 3;\n}\n.sufix[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n.summary[_ngcontent-%COMP%] {\n  align-items: center;\n  border: 1px solid #e1e8ed;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 4px 0 rgba(150, 164, 176, 0.1);\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n}\n.summary[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%], .summary[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n}\n.summary[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  padding-right: 0;\n}\n.summary[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: none;\n}\n.summary[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #0079ff;\n  font-size: 40px;\n  font-weight: 500;\n  padding-left: 1rem;\n  text-align: right;\n}\n.summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background-color: #f4f8fa;\n  font-size: 12px;\n  grid-column: 1/3;\n  margin: 0;\n}\n@media (min-width: 576px) {\n  .summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .summary[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%], .summary[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n  .summary[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .summary[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n@media (min-width: 576px) {\n  [_nghost-%COMP%] {\n    grid-template-columns: auto 1fr;\n  }\n\n  a[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    grid-column: 1/3;\n  }\n\n  form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  form[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%], form[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    grid-column: 1/3;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL21peGlucy9fdGV4dC1vdmVyZmxvdy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FDR0E7RUFDRSxzQkRHTTtFQ0ZOLGFBQUE7QUFERjtBQUdFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFESjtBQUtBO0VBQ0U7SUFDRSxvQkFBQTtFQUZGO0FBQ0Y7QUFLQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUhGO0FBTUE7RUFDRSxjRGhCSztFQ2lCTCxlRFdhO0VDVmIsZ0JEY2tCO0VDYmxCLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFIRjtBQUtFO0VBQ0UsZ0JEVWU7QUNibkI7QUFPQTtFQUNFLGVERmE7RUNHYixpQkFBQTtFQUNBLFNBQUE7QUFKRjtBQU9BO0VBQ0UsY0QxQ1U7RUMyQ1YsZUROYTtFQ09iLGdCRExrQjtFQ01sQixvQkFBQTtFQUNBLFNBQUE7QUFKRjtBQU9BO0VBQ0U7SUFDRSxlRGpCVztJQ2tCWCxlQUFBO0VBSkY7O0VBT0E7SUFDRSxlRHhCVztJQ3lCWCxpQkFBQTtFQUpGOztFQU9BO0lBQ0UsZURsQ2E7SUNtQ2IsbUJBQUE7RUFKRjtBQUNGO0FBUUU7RUFDRSxZQUFBO0FBTko7QUFVQTtFQUVJO0lBQ0UsY0FBQTtFQVJKO0FBQ0Y7QUFZQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFNEbkNPO0VDb0NQLDBCQUFBO0VBQ0EsZ0JBQUE7QUFWRjtBQVlFO0VBQ0UseUJEakZHO0VDa0ZILG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXRHRGSTtFQ3VGSixlRHpEVztFQzBEWCxnQkRwRGU7RUNxRGYsYUQ5Q0s7QUNvQ1Q7QUFjQTtFQUNFO0lBQ0Usa0JBQUE7RUFYRjtBQUNGO0FBY0E7RUFDRSxjRDFHYTtFQzJHYixlRC9FZTtFQ2dGZixnQkRuRW1CO0VDb0VuQixtQkFBQTtBQVpGO0FBZUE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JEM0VpQjtFQzRFakIsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFaRjtBQWVBO0VBQ0Usd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0VBQ0Esc0JEeEhNO0VDeUhOLHVLRHRHaUI7RUN1R2pCLGdCQUFBO0VBQ0Esa0JBQUE7QUFaRjtBQWNFO0VBQ0Usa0JBQUE7QUFaSjtBQWVFO0VBQ0UsYUFBQTtBQWJKO0FBZ0JFO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0FBZEo7QUFpQkU7RUFDRSxhQUFBO0FBZko7QUFrQkU7RUFDRSxhQUFBO0FBaEJKO0FBbUJFO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQWpCSjtBQW9CRTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBbEJKO0FBcUJFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUFBLGtCQUFBO0FBbkJKO0FBdUJBO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0FBcEJGO0FBc0JFO0VBQ0UsZ0JBQUE7QUFwQko7QUF1QkU7RUFDRSxjRGxMRTtFQ21MRixnQkFBQTtFQUNBLGlCQUFBO0FBckJKO0FBeUJJO0VBQ0Usd0JBQUE7QUF2Qk47QUEyQkU7O0VBRUUseUJEbk1jO0VDb01kLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjRDFNUTtFQzJNUixxQkFBQTtFQUNBLHVLRHBMZTtFQ3FMZixtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUF6Qko7QUEyQkk7O0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBeEJOO0FBNEJFO0VBQ0UsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUExQko7QUE2QkU7RUFDRSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQTNCSjtBQThCRTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUE1Qko7QUErQkU7RUFDRSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUE3Qko7QUFpQ0E7RUFDRSxxQkFBQTtBQTlCRjtBQWlDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkRoTWM7RUNpTWQsZ0REaE1XO0VDaU1YLGFBQUE7RUFDQSw4QkFBQTtBQTlCRjtBQWdDRTs7O0VBR0Usb0JBQUE7QUE5Qko7QUFpQ0U7RUFDRSxlRC9PYTtFQ2dQYixnQkRuT2lCO0VDb09qQixnQkFBQTtBQS9CSjtBQWlDSTtFQUNFLGFBQUE7QUEvQk47QUFtQ0U7RUNqUkEsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VEaVJFLGNEL1FTO0VDZ1JULGVEMVBZO0VDMlBaLGdCRC9PaUI7RUNnUGpCLGtCQUFBO0VBQ0EsaUJBQUE7QUEvQko7QUFrQ0U7RUFDRSx5QkR6UmM7RUMwUmQsZURoUVc7RUNpUVgsZ0JBQUE7RUFDQSxTQUFBO0FBaENKO0FBbUNBO0VBQ0U7SUFDRSw4QkFBQTtFQWhDRjtFQWtDRTs7O0lBR0UsYUFBQTtFQWhDSjtFQW1DRTtJQUNFLGVEM1FTO0VDME9iO0VBbUNJO0lBQ0UscUJBQUE7RUFqQ047QUFDRjtBQXNDQTtFQUNFO0lBQ0UsK0JBQUE7RUFwQ0Y7O0VBdUNBO0lBQ0UsY0FBQTtFQXBDRjs7RUF1Q0E7SUFDRSxnQkFBQTtFQXBDRjs7RUF1Q0E7SUFDRSw4QkFBQTtFQXBDRjtFQXNDRTs7SUFFRSxnQkFBQTtFQXBDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29sb3IgcGFsZXR0ZSAqL1xuJGFsbW9zdC1ibGFjazogIzFjMWUxZjtcbiRkYXJrLWdyZXk6ICM2NTc3ODY7XG4kZGFya2lzaC1ncmV5OiAjOTZhNGIwO1xuJGdyZXk6ICNhYWI4YzI7XG4kbGlnaHQtZ3JleTogI2UxZThlZDtcbiRzdXBlcmxpZ2h0LWdyZXk6ICNmNGY4ZmE7XG4kd2hpdGU6ICNmZmY7XG4kbGlnaHQtYmx1ZTogIzAwNzlmZjtcbiRibHVlOiAjMWIzMWE4O1xuJHJlZDogI2ZlNTcyMjtcblxuLy8gQm9keVxuJGJvZHktYmc6ICRsaWdodC1ncmV5O1xuJGJvZHktY29sb3I6ICRhbG1vc3QtYmxhY2s7XG5cbi8vIExpbmtzXG4kbGluay1jb2xvcjogJGJsdWU7XG4kbGluay1kZWNvcmF0aW9uOiBub25lO1xuJGxpbmstaG92ZXItY29sb3I6IGRhcmtlbigkbGluay1jb2xvciwgMTUlKTtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246IHVuZGVybGluZTtcblxuLy8gUGFyYWdyYXBoc1xuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4vLyBGb250c1xuJGZvbnQtZmFtaWx5LWJhc2U6ICdXb3JrIFNhbnMnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJyxcbiAgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCc7XG5cbiRmb250LXNpemUtYmFzZTogMTZweDtcbiRmb250LXNpemUteGxnOiAkZm9udC1zaXplLWJhc2UgKiAyLjU7XG4kZm9udC1zaXplLWxnOiAkZm9udC1zaXplLWJhc2UgKiAxLjU7XG4kZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2UgKiAwLjc1O1xuXG4kaDEtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAyO1xuJGgyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS42MjU7XG4kaDMtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjU7XG4kaDQtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjEyNTtcbiRoNS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcbiRoNi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDAuODc1O1xuXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDQwMDtcbiRmb250LXdlaWdodC1ub3JtYWw6IDUwMDtcbiRmb250LXdlaWdodC1ib2xkOiA2MDA7XG5cbiRmb250LXdlaWdodC1iYXNlOiAkZm9udC13ZWlnaHQtbGlnaHQ7XG4kbGluZS1oZWlnaHQtYmFzZTogMS4zO1xuXG4kdGV4dC1tdXRlZDogJGdyZXk7XG4kbGlzdC1pbmxpbmUtcGFkZGluZzogMC41cmVtO1xuJHNwYWNlcjogMXJlbTtcblxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICgkc3BhY2VyIC8gMik7XG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ib2xkO1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjI7XG4kaGVhZGluZ3MtY29sb3I6IGluaGVyaXQ7XG5cbiRtb2JpbGUtYnJlYWtwb2ludDogNTc2cHg7XG4kdGFibGV0LWJyZWFrcG9pbnQ6IDc2OHB4O1xuJHNtLWJyZWFrcG9pbnQ6IDEyODBweDtcbiRtZC1icmVha3BvaW50OiAxMzY2cHg7XG4kbGctYnJlYWtwb2ludDogMTkyMHB4O1xuXG4kYm9yZGVyLXJhZGl1czogMC41cmVtO1xuJGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMTUwLCAxNjQsIDE3NiwgMC4xKTtcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gIHBhZGRpbmc6IDFyZW07XG5cbiAgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6ICRtb2JpbGUtYnJlYWtwb2ludCkge1xuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICB9XG59XG5cbm1haW4ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAzNXJlbTtcbn1cblxuaDEge1xuICBjb2xvcjogJGJsdWU7XG4gIGZvbnQtc2l6ZTogJGg0LWZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1iYXNlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHN0cm9uZyB7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ib2xkO1xuICB9XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAkaDMtZm9udC1zaXplO1xuICBsaW5lLWhlaWdodDogMS4zMztcbiAgbWFyZ2luOiAwO1xufVxuXG5oMyB7XG4gIGNvbG9yOiAkZGFyay1ncmV5O1xuICBmb250LXNpemU6ICRoNi1mb250LXNpemU7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYmFzZTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gIG1hcmdpbjogMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6ICRtb2JpbGUtYnJlYWtwb2ludCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAkaDMtZm9udC1zaXplO1xuICAgIHBhZGRpbmc6IDIuNXJlbTtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6ICRoMS1mb250LXNpemU7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAkaDUtZm9udC1zaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIH1cbn1cblxuLmNhcmQge1xuICA+IGltZyB7XG4gICAgaGVpZ2h0OiAycmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAkbW9iaWxlLWJyZWFrcG9pbnQpIHtcbiAgLmNhcmQge1xuICAgID4gaW1nIHtcbiAgICAgIGhlaWdodDogMi41cmVtO1xuICAgIH1cbiAgfVxufVxuXG5mb3JtIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogJHNwYWNlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIG1hcmdpbi10b3A6ICRzcGFjZXIgKiAyO1xuXG4gIFt0eXBlPSdzdWJtaXQnXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwdmg7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgZm9udC1zaXplOiAkaDQtZm9udC1zaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYm9sZDtcbiAgICBwYWRkaW5nOiAkc3BhY2VyO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAkbW9iaWxlLWJyZWFrcG9pbnQpIHtcbiAgZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogJHNwYWNlciAqIDIuNTtcbiAgfVxufVxuXG5sYWJlbCB7XG4gIGNvbG9yOiAkYWxtb3N0LWJsYWNrO1xuICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0LWdyZXk7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzIC8gMjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjI1O1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJvbGQ7XG4gIGhlaWdodDogMy41cmVtO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuW3R5cGU9J21vbnRoJ10ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYmFzZTtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXRleHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAmOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbW9udGgtZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1jbGVhci1idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXllYXItZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogLTAuNXJlbSAwIC0xcmVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxuXG4gICY6Oi13ZWJraXQtZGF0ZS1hbmQtdGltZS12YWx1ZSB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gIH1cbn1cblxuLmZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG5cbiAgbGFiZWwge1xuICAgIGdyaWQtY29sdW1uOiAxLzQ7XG4gIH1cblxuICAuZXJyb3JzIHtcbiAgICBjb2xvcjogJHJlZDtcbiAgICBncmlkLWNvbHVtbjogMS80O1xuICAgIHBhZGRpbmc6ICRzcGFjZXIgLyAyIDA7XG4gIH1cblxuICAuYWN0aW9uLWJ1dHRvbiB7XG4gICAgJjpob3ZlciB7XG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG4gICAgfVxuICB9XG5cbiAgLnByZWZpeCxcbiAgLnN1Zml4IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VwZXJsaWdodC1ncmV5O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodC1ncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzIC8gMjtcbiAgICBjb2xvcjogJGRhcmstZ3JleTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1iYXNlO1xuICAgIGZvbnQtc2l6ZTogMS4zNzVyZW07XG4gICAgaGVpZ2h0OiAzLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMy41cmVtO1xuXG4gICAgaW1nIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICB9XG5cbiAgLnByZWZpeCB7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gIH1cblxuICAuc3VmaXgge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBncmlkLWNvbHVtbjogMy80O1xuICB9XG5cbiAgLnByZWZpeCB+IGlucHV0IHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgZ3JpZC1yb3c6IDIvMztcbiAgfVxuXG4gIC5zdWZpeCB+IGlucHV0IHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gIH1cbn1cblxuLnN1Zml4IGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cblxuLnN1bW1hcnkge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHQtZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG5cbiAgPiBzdHJvbmcsXG4gID4gc3BhbixcbiAgcCB7XG4gICAgcGFkZGluZzogJHNwYWNlciAkc3BhY2VyICogMS41O1xuICB9XG5cbiAgPiBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogJGg1LWZvbnQtc2l6ZTtcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuXG4gICAgPiBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgPiBzcGFuIHtcbiAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93O1xuICAgIGNvbG9yOiAkbGlnaHQtYmx1ZTtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteGxnO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gIHAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdXBlcmxpZ2h0LWdyZXk7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogJG1vYmlsZS1icmVha3BvaW50KSB7XG4gIC5zdW1tYXJ5IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG5cbiAgICA+IHN0cm9uZyxcbiAgICA+IHNwYW4sXG4gICAgcCB7XG4gICAgICBwYWRkaW5nOiAkc3BhY2VyICogMjtcbiAgICB9XG5cbiAgICA+IHN0cm9uZyB7XG4gICAgICBmb250LXNpemU6ICRoNC1mb250LXNpemU7XG5cbiAgICAgID4gc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6ICRtb2JpbGUtYnJlYWtwb2ludCkge1xuICA6aG9zdCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgfVxuXG4gIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmNhcmQge1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gIH1cblxuICBmb3JtIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG5cbiAgICAuc3VtbWFyeSxcbiAgICA+IGJ1dHRvbiB7XG4gICAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gVGV4dCBvdmVyZmxvd1xuLy8gUmVxdWlyZXMgaW5saW5lLWJsb2NrIG9yIGJsb2NrIGZvciBwcm9wZXIgc3R5bGluZ1xuXG5AbWl4aW4gdGV4dC1vdmVyZmxvdyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIl19 */"] });
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