(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/app-routing.module */ "./src/app/routes/app-routing.module.ts");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _components_rolls_rolls_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/rolls/rolls.component */ "./src/app/components/rolls/rolls.component.ts");
/* harmony import */ var _components_shots_shots_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shots/shots.component */ "./src/app/components/shots/shots.component.ts");
/* harmony import */ var _components_rolls_new_roll_new_roll_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/rolls/new-roll/new-roll.component */ "./src/app/components/rolls/new-roll/new-roll.component.ts");
/* harmony import */ var _components_shots_new_shot_new_shot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shots/new-shot/new-shot.component */ "./src/app/components/shots/new-shot/new-shot.component.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_rolls_rolls_component__WEBPACK_IMPORTED_MODULE_5__["RollsComponent"],
        _components_shots_shots_component__WEBPACK_IMPORTED_MODULE_6__["ShotsComponent"],
        _components_rolls_new_roll_new_roll_component__WEBPACK_IMPORTED_MODULE_7__["NewRollComponent"],
        _components_shots_new_shot_new_shot_component__WEBPACK_IMPORTED_MODULE_8__["NewShotComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_rolls_rolls_component__WEBPACK_IMPORTED_MODULE_5__["RollsComponent"],
                    _components_shots_shots_component__WEBPACK_IMPORTED_MODULE_6__["ShotsComponent"],
                    _components_rolls_new_roll_new_roll_component__WEBPACK_IMPORTED_MODULE_7__["NewRollComponent"],
                    _components_shots_new_shot_new_shot_component__WEBPACK_IMPORTED_MODULE_8__["NewShotComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/rolls"]; };
class AppComponent {
    constructor() {
        this.title = 'Film Journal';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 4, consts: [[3, "title", "routerLink"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Home")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/rolls/new-roll/new-roll.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/rolls/new-roll/new-roll.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewRollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRollComponent", function() { return NewRollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_roll_roll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/roll/roll.service */ "./src/app/services/roll/roll.service.ts");
/* harmony import */ var _services_camera_camera_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/camera/camera.service */ "./src/app/services/camera/camera.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function NewRollComponent_option_25_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NewRollComponent_option_25_Template_option_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const camera_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.changeSelectedCamera(camera_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const camera_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", camera_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", camera_r14.manufacturer + " " + camera_r14.brand + " " + camera_r14.model_number, " ");
} }
function NewRollComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewRollComponent_div_34_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const roll_r17 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.loadPreviousRoll(roll_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const roll_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", roll_r17.manufacturer + " " + roll_r17.brand + " " + roll_r17.iso + " " + roll_r17.date_loaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", roll_r17.manufacturer + " " + roll_r17.brand + " " + roll_r17.iso + " " + roll_r17.date_loaded.toLocaleString("en-NZ"), " ");
} }
class NewRollComponent {
    constructor(rollService, cameraService, formBuilder) {
        this.rollService = rollService;
        this.cameraService = cameraService;
        this.formBuilder = formBuilder;
        this.rolls = this.getRollsDateSorted();
        this.cameras = this.cameraService.getCameras();
        this.newRollForm = this.formBuilder.group({
            manufacturer: '',
            brand: '',
            iso: '',
            width: '',
            camera: null,
            date_loaded: ''
        });
    }
    ngOnInit() {
    }
    getRollsDateSorted() {
        return this.rollService.getRolls().sort((a, b) => b.date_loaded.getTime() - a.date_loaded.getTime());
    }
    changeSelectedCamera(camera) {
    }
    loadPreviousRoll(roll) {
        console.log(roll);
        this.newRollForm.controls['manufacturer'].setValue(roll.manufacturer);
        this.newRollForm.controls['brand'].setValue(roll.brand);
        this.newRollForm.controls['iso'].setValue(roll.iso);
        this.newRollForm.controls['width'].setValue(roll.width);
        //this.newRollForm.manufacturer.setValue(roll.manufacturer);
    }
    onSubmit(rollData) {
        this.newRollForm.reset();
        console.log('Your order has been submitted', rollData);
        var roll = {
            manufacturer: rollData.manufacturer,
            brand: rollData.brand,
            width: rollData.width,
            iso: Number(rollData.iso),
            camera_id: Number(rollData.camera.id),
            date_loaded: new Date(rollData.date_loaded)
        };
        this.rollService.addRoll(roll);
        this.rolls = this.getRollsDateSorted();
    }
}
NewRollComponent.ɵfac = function NewRollComponent_Factory(t) { return new (t || NewRollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_roll_roll_service__WEBPACK_IMPORTED_MODULE_1__["RollService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_2__["CameraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
NewRollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewRollComponent, selectors: [["app-new-roll"]], decls: 35, vars: 3, consts: [[3, "formGroup", "ngSubmit"], ["for", "manufacturer"], ["id", "manufacturer", "type", "text", "formControlName", "manufacturer"], ["for", "brand"], ["id", "brand", "type", "text", "formControlName", "brand"], ["for", "iso"], ["id", "iso", "type", "number", "formControlName", "iso"], ["for", "width"], ["id", "width", "type", "text", "formControlName", "width"], ["for", "date_loaded"], ["formControlName", "camera"], ["value", ""], [3, "ngValue", "change", 4, "ngFor", "ngForOf"], ["id", "date_loaded", "type", "date", "formControlName", "date_loaded"], ["type", "submit", 1, "button"], [4, "ngFor", "ngForOf"], [3, "ngValue", "change"], [3, "title", "click"]], template: function NewRollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "new-roll works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewRollComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(ctx.newRollForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Manufacturer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Brand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ISO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Width ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Select Camera ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Select Camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NewRollComponent_option_25_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Date Loaded ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Add New Roll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Roll History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, NewRollComponent_div_34_Template, 3, 2, "div", 15);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newRollForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cameras);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rolls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm9sbHMvbmV3LXJvbGwvbmV3LXJvbGwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewRollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-roll',
                templateUrl: './new-roll.component.html',
                styleUrls: ['./new-roll.component.scss']
            }]
    }], function () { return [{ type: _services_roll_roll_service__WEBPACK_IMPORTED_MODULE_1__["RollService"] }, { type: _services_camera_camera_service__WEBPACK_IMPORTED_MODULE_2__["CameraService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/rolls/rolls.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/rolls/rolls.component.ts ***!
  \*****************************************************/
/*! exports provided: RollsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollsComponent", function() { return RollsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_roll_roll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/roll/roll.service */ "./src/app/services/roll/roll.service.ts");
/* harmony import */ var _services_camera_camera_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/camera/camera.service */ "./src/app/services/camera/camera.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = function (a1) { return ["/rolls", a1]; };
function RollsComponent_div_0_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const roll_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", roll_r4.manufacturer + " " + roll_r4.brand + " " + roll_r4.iso + " " + roll_r4.date_loaded)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, roll_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", roll_r4.manufacturer + " " + roll_r4.brand + " " + roll_r4.iso + " " + roll_r4.date_loaded, " ");
} }
function RollsComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RollsComponent_div_0_div_3_ng_container_1_Template, 3, 5, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const roll_r4 = ctx.$implicit;
    const camera_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", roll_r4.camera_id === camera_r1.id);
} }
function RollsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RollsComponent_div_0_div_3_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const camera_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", camera_r1.manufacturer + " " + camera_r1.brand + " " + camera_r1.model_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.rolls);
} }
const _c1 = function () { return ["/rolls/new"]; };
class RollsComponent {
    constructor(rollService, cameraService) {
        this.rollService = rollService;
        this.cameraService = cameraService;
        this.rolls = this.rollService.getRolls();
        this.cameras = this.cameraService.getCameras();
    }
    ngOnInit() {
    }
}
RollsComponent.ɵfac = function RollsComponent_Factory(t) { return new (t || RollsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_roll_roll_service__WEBPACK_IMPORTED_MODULE_1__["RollService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_2__["CameraService"])); };
RollsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RollsComponent, selectors: [["app-rolls"]], decls: 4, vars: 3, consts: [[4, "ngFor", "ngForOf"], [3, "routerLink"], [4, "ngIf"], [3, "title", "routerLink"]], template: function RollsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RollsComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Roll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cameras);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm9sbHMvcm9sbHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RollsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rolls',
                templateUrl: './rolls.component.html',
                styleUrls: ['./rolls.component.scss']
            }]
    }], function () { return [{ type: _services_roll_roll_service__WEBPACK_IMPORTED_MODULE_1__["RollService"] }, { type: _services_camera_camera_service__WEBPACK_IMPORTED_MODULE_2__["CameraService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/shots/new-shot/new-shot.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/shots/new-shot/new-shot.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewShotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewShotComponent", function() { return NewShotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NewShotComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NewShotComponent.ɵfac = function NewShotComponent_Factory(t) { return new (t || NewShotComponent)(); };
NewShotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewShotComponent, selectors: [["app-new-shot"]], decls: 2, vars: 0, template: function NewShotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "new-shot works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvdHMvbmV3LXNob3QvbmV3LXNob3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewShotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-shot',
                templateUrl: './new-shot.component.html',
                styleUrls: ['./new-shot.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/shots/shots.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/shots/shots.component.ts ***!
  \*****************************************************/
/*! exports provided: ShotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShotsComponent", function() { return ShotsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_shot_shot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shot/shot.service */ "./src/app/services/shot/shot.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ShotsComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shot_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](shot_r10.date_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](shot_r10.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](shot_r10.aperture);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](shot_r10.shutter_speed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](shot_r10.lighting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](shot_r10.lens.width);
} }
class ShotsComponent {
    constructor(route, shotService) {
        this.route = route;
        this.shotService = shotService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.shots = this.shotService.getShots().filter(x => x.roll_id === +params.get('rollID'));
        });
    }
}
ShotsComponent.ɵfac = function ShotsComponent_Factory(t) { return new (t || ShotsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shot_shot_service__WEBPACK_IMPORTED_MODULE_2__["ShotService"])); };
ShotsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShotsComponent, selectors: [["app-shots"]], decls: 26, vars: 1, consts: [["border", "1"], ["span", "1", 2, "width", "30%"], ["span", "1", 2, "width", "10%"], [4, "ngFor", "ngForOf"]], template: function ShotsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "shots works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "colgroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date/Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Aperture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Shutter Speed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lighting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Lens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ShotsComponent_tr_23_Template, 13, 6, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shots);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvdHMvc2hvdHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShotsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shots',
                templateUrl: './shots.component.html',
                styleUrls: ['./shots.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_shot_shot_service__WEBPACK_IMPORTED_MODULE_2__["ShotService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dummydata/dummycameras.ts":
/*!*******************************************!*\
  !*** ./src/app/dummydata/dummycameras.ts ***!
  \*******************************************/
/*! exports provided: cameras */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cameras", function() { return cameras; });
const cameras = [
    {
        id: '1',
        manufacturer: 'Canon',
        brand: 'Rebel',
        model_number: '600D',
        lens_mounting: 'EF',
        film: '35mm',
        style: 'DSLR'
    },
    {
        id: '2',
        manufacturer: 'Canon',
        brand: 'Rebel',
        model_number: '3000N',
        lens_mounting: 'EF',
        film: '35mm',
        style: 'DSLR'
    }
];


/***/ }),

/***/ "./src/app/dummydata/dummylenses.ts":
/*!******************************************!*\
  !*** ./src/app/dummydata/dummylenses.ts ***!
  \******************************************/
/*! exports provided: lenses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lenses", function() { return lenses; });
const lenses = [
    {
        id: '1',
        manufacturer: 'Canon',
        width: '50mm',
        aperture: '1.8',
        mounting: 'EF'
    },
    {
        id: '2',
        manufacturer: 'Canon',
        width: '18-55mm',
        aperture: '3.5-5.6',
        mounting: 'EF'
    }
];


/***/ }),

/***/ "./src/app/dummydata/dummyrolls.ts":
/*!*****************************************!*\
  !*** ./src/app/dummydata/dummyrolls.ts ***!
  \*****************************************/
/*! exports provided: rolls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rolls", function() { return rolls; });
const rolls = [
    {
        id: '2',
        manufacturer: 'Kodak',
        brand: 'Colorplus',
        iso: '200',
        camera_id: '1',
        width: '35mm',
        date_loaded: '2020-03-16'
    },
    {
        id: '1',
        manufacturer: 'Kodak',
        brand: 'Colorplus',
        iso: '200',
        camera_id: '2',
        width: '35mm',
        date_loaded: '2019-12-26'
    },
];


/***/ }),

/***/ "./src/app/dummydata/dummyshots.ts":
/*!*****************************************!*\
  !*** ./src/app/dummydata/dummyshots.ts ***!
  \*****************************************/
/*! exports provided: shots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shots", function() { return shots; });
const shots = [
    {
        id: '1',
        roll_id: '2',
        aperture: '1.8',
        shutter_speed: '350',
        lighting: 'dusk',
        date_time: '2020-03-17T15:45:00',
        location: '-36.844805199999996, 174.7542183',
        description: 'Eleanor on the Porch',
        lens_id: '1'
    },
    {
        id: '2',
        roll_id: '2',
        aperture: '1.8',
        shutter_speed: '350',
        lighting: 'dusk',
        date_time: '2020-03-17T15:45:00',
        location: '-36.844805199999996, 174.7542183',
        description: 'Eleanor on the Porch',
        lens_id: '2'
    },
    {
        id: '3',
        roll_id: '1',
        aperture: '1.8',
        shutter_speed: '350',
        lighting: 'dusk',
        date_time: '2020-03-17T15:45:00',
        location: '-36.844805199999996, 174.7542183',
        description: 'Me at the Window',
        lens_id: '1'
    },
    {
        id: '4',
        roll_id: '1',
        aperture: '1.8',
        shutter_speed: '350',
        lighting: 'dusk',
        date_time: '2020-03-17T15:45:00',
        location: '-36.844805199999996, 174.7542183',
        description: 'Dinner with the Guys',
        lens_id: '2'
    }
];


/***/ }),

/***/ "./src/app/routes/app-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/routes/app-routing.module.ts ***!
  \**********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_rolls_rolls_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/rolls/rolls.component */ "./src/app/components/rolls/rolls.component.ts");
/* harmony import */ var _components_shots_shots_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shots/shots.component */ "./src/app/components/shots/shots.component.ts");
/* harmony import */ var _components_rolls_new_roll_new_roll_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/rolls/new-roll/new-roll.component */ "./src/app/components/rolls/new-roll/new-roll.component.ts");
/* harmony import */ var _components_shots_new_shot_new_shot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shots/new-shot/new-shot.component */ "./src/app/components/shots/new-shot/new-shot.component.ts");








const routes = [{ path: 'rolls', component: _components_rolls_rolls_component__WEBPACK_IMPORTED_MODULE_2__["RollsComponent"] },
    { path: 'rolls/new', component: _components_rolls_new_roll_new_roll_component__WEBPACK_IMPORTED_MODULE_4__["NewRollComponent"] },
    { path: 'rolls/:rollID/new', component: _components_shots_new_shot_new_shot_component__WEBPACK_IMPORTED_MODULE_5__["NewShotComponent"] },
    { path: 'rolls/:rollID', component: _components_shots_shots_component__WEBPACK_IMPORTED_MODULE_3__["ShotsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/camera/camera.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/camera/camera.service.ts ***!
  \***************************************************/
/*! exports provided: CameraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraService", function() { return CameraService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dummydata_dummycameras__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dummydata/dummycameras */ "./src/app/dummydata/dummycameras.ts");



class CameraService {
    constructor() {
    }
    getCameras() {
        return _dummydata_dummycameras__WEBPACK_IMPORTED_MODULE_1__["cameras"].map(camera => ({
            id: Number(camera.id),
            manufacturer: camera.manufacturer,
            brand: camera.brand,
            model_number: camera.model_number,
            lens_mounting: camera.lens_mounting,
            film: camera.film,
            style: camera.style,
        }));
    }
    getCamera(cameraID) {
        return this.getCameras().find(camera => camera.id === cameraID);
    }
}
CameraService.ɵfac = function CameraService_Factory(t) { return new (t || CameraService)(); };
CameraService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CameraService, factory: CameraService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CameraService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/lens/lens.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/lens/lens.service.ts ***!
  \***********************************************/
/*! exports provided: LensService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LensService", function() { return LensService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dummydata_dummylenses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dummydata/dummylenses */ "./src/app/dummydata/dummylenses.ts");



class LensService {
    constructor() {
    }
    getLenses() {
        return _dummydata_dummylenses__WEBPACK_IMPORTED_MODULE_1__["lenses"].map(lens => ({
            id: Number(lens.id),
            manufacturer: lens.manufacturer,
            width: lens.width,
            aperture: lens.aperture,
            mounting: lens.mounting,
        }));
    }
    getLens(lensId) {
        return this.getLenses().find(lens => lens.id === lensId);
    }
}
LensService.ɵfac = function LensService_Factory(t) { return new (t || LensService)(); };
LensService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LensService, factory: LensService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LensService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/roll/roll.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/roll/roll.service.ts ***!
  \***********************************************/
/*! exports provided: RollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollService", function() { return RollService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dummydata_dummyrolls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dummydata/dummyrolls */ "./src/app/dummydata/dummyrolls.ts");
/* harmony import */ var _camera_camera_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../camera/camera.service */ "./src/app/services/camera/camera.service.ts");




class RollService {
    constructor(cameraService) {
        this.cameraService = cameraService;
    }
    getRolls() {
        return _dummydata_dummyrolls__WEBPACK_IMPORTED_MODULE_1__["rolls"].map(roll => ({
            id: Number(roll.id),
            manufacturer: roll.manufacturer,
            brand: roll.brand,
            width: roll.width,
            iso: Number(roll.iso),
            camera_id: Number(roll.camera_id),
            date_loaded: new Date(roll.date_loaded)
        }));
    }
    addRoll(roll) {
        var id = Math.max.apply(Math, this.getRolls().map(function (roll) { return roll.id; })) + 1;
        _dummydata_dummyrolls__WEBPACK_IMPORTED_MODULE_1__["rolls"].push({
            id: id,
            manufacturer: roll.manufacturer,
            brand: roll.brand,
            width: roll.width,
            iso: String(roll.iso),
            camera_id: String(roll.camera_id),
            date_loaded: String(roll.date_loaded)
        });
        console.log("Rolls in DB:");
        console.log(this.getRolls());
    }
}
RollService.ɵfac = function RollService_Factory(t) { return new (t || RollService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_camera_camera_service__WEBPACK_IMPORTED_MODULE_2__["CameraService"])); };
RollService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RollService, factory: RollService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RollService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _camera_camera_service__WEBPACK_IMPORTED_MODULE_2__["CameraService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/shot/shot.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/shot/shot.service.ts ***!
  \***********************************************/
/*! exports provided: ShotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShotService", function() { return ShotService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dummydata_dummyshots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dummydata/dummyshots */ "./src/app/dummydata/dummyshots.ts");
/* harmony import */ var _lens_lens_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lens/lens.service */ "./src/app/services/lens/lens.service.ts");




class ShotService {
    constructor(lensService) {
        this.lensService = lensService;
    }
    getShots() {
        return _dummydata_dummyshots__WEBPACK_IMPORTED_MODULE_1__["shots"].map(shot => ({
            id: Number(shot.id),
            roll_id: Number(shot.roll_id),
            aperture: Number(shot.aperture),
            shutter_speed: Number(shot.shutter_speed),
            lighting: shot.lighting,
            date_time: new Date(shot.date_time),
            location: shot.location,
            description: shot.description,
            lens: this.lensService.getLens(Number(shot.lens_id)),
        }));
    }
}
ShotService.ɵfac = function ShotService_Factory(t) { return new (t || ShotService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_lens_lens_service__WEBPACK_IMPORTED_MODULE_2__["LensService"])); };
ShotService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShotService, factory: ShotService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShotService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _lens_lens_service__WEBPACK_IMPORTED_MODULE_2__["LensService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Code_Workspace\film-journal-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map