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

/***/ "./src/app/About/About.component.ts":
/*!******************************************!*\
  !*** ./src/app/About/About.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../configuration */ "./src/app/configuration.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class AboutComponent {
    constructor() {
        this.aboutMe = _configuration__WEBPACK_IMPORTED_MODULE_0__["Configuration"].aboutMe;
        this.skills = _configuration__WEBPACK_IMPORTED_MODULE_0__["Skills"];
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-About"]], decls: 70, vars: 0, consts: [[1, "card1"], [1, "row"], [1, "about-title", "font-subtitle"], ["href", "https://drive.google.com/file/d/1udmEwOfI_nlZmCkzaFbBmTenwX3fJs-d/view", "target", "_blank", 1, "font-subtitle"], ["aria-hidden", "true", 1, "fa", "fa-paperclip", "profile-icon", 2, "color", "white", "margin-left", "10px", "margin-right", "10px"], ["href", "https://github.com/Sergej997", "target", "_blank", 1, "font-subtitle"], ["aria-hidden", "true", 1, "fa", "fa-github", "profile-icon", 2, "color", "white"], [1, "about-title", "font-title"], [1, "about-position", "font-subtitle", 2, "color", "silver"], [1, "about-desc", "font-text"], [1, "row", 2, "border-bottom", "1px solid silver", "padding-bottom", "0px"], [1, "about-title", "font-subtitle", 2, "margin-bottom", "0%"], [1, "row", 2, "margin-top", "10px"], ["align", "center", 1, "col-md-3", "font-text"], [2, "color", "white"], [1, "demo"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Sergej Savic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Junior developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "I am graduate student from Faculty of organizational Sciences, Information Technology department. I have been training athletics for twelve years and during that time I achieved more than ten medals on national championships in all age categories. Athletics helped me at being persistent, hard-working and determined. Also, I am friendly, creative, confident and curious.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Frontend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " HTML ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Css/Sas/Scss ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " JavaScript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " JQuery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Ajax ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Backend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Java ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " NodeJS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " PHP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Firebase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " SQL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " MongoDB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Freamworks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Express ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Ionic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Git(GitHub) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " REST API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".about-title[_ngcontent-%COMP%] {\n  line-height: 30px;\n  color: white;\n}\n\n.about-position[_ngcontent-%COMP%] {\n  line-height: 30px;\n  color: #ffa500;\n}\n\n.about-desc[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 15px;\n  color: grey;\n}\n\n.about-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 55%;\n}\n\n.about-svg[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 550px;\n}\n\n.card1[_ngcontent-%COMP%] {\n  margin: 0px 20px 0px 30px;\n}\n\n.orange[_ngcontent-%COMP%] {\n  color: #ffa500;\n}\n\nul.demo[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n\n@media only screen and (min-width: 767px) {\n  .font-title[_ngcontent-%COMP%] {\n    font-size: 2vw;\n  }\n\n  .font-subtitle[_ngcontent-%COMP%] {\n    font-size: 1.3vw;\n  }\n\n  .font-text[_ngcontent-%COMP%] {\n    font-size: 1.1vw;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .font-title[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  .font-subtitle[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n\n  .font-text[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWJvdXQvYzpcXFVzZXJzXFxXaW5kb3dzIEhEXFxEZXNrdG9wIDVcXHBmXFxhbmd1bGFyUG9ydGZvbGlvLW1haW4vc3JjXFxhcHBcXEFib3V0XFxBYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQWJvdXQvQWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxpQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURFQTtFQUVFLGlCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNHSjs7QUREQTtFQUNFLHlCQUFBO0FDSUY7O0FEREE7RUFDRSxjQUFBO0FDSUY7O0FERkE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUNLRjs7QURIQTtFQUNFO0lBQ0UsY0FBQTtFQ01GOztFREpBO0lBQ0UsZ0JBQUE7RUNPRjs7RURKQTtJQUNFLGdCQUFBO0VDT0Y7QUFDRjs7QURKQTtFQUNBO0lBQ0UsZUFBQTtFQ01BOztFREpGO0lBQ0UsZUFBQTtFQ09BOztFREpGO0lBQ0UsZUFBQTtFQ09BO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9BYm91dC9BYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC10aXRsZSB7XG4gIC8vIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWJvdXQtcG9zaXRpb24ge1xuICAvLyBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICNmZmE1MDA7XG59XG4uYWJvdXQtZGVzYyB7XG4gIHdpZHRoOjEwMCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGdyZXk7XG59XG4uYWJvdXQtY29udGVudHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDU1JTtcbn1cbi5hYm91dC1zdmd7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogNTUwcHg7XG59XG4uY2FyZDF7XG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDMwcHg7XG5cbn1cbi5vcmFuZ2V7XG4gIGNvbG9yOiAjZmZhNTAwO1xufVxudWwuZGVtbyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjdweCkge1xuICAuZm9udC10aXRsZXtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgfVxuICAuZm9udC1zdWJ0aXRsZXtcbiAgICBmb250LXNpemU6IDEuM3Z3O1xuICBcbiAgfVxuICAuZm9udC10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMS4xdnc7XG4gIFxuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcbi5mb250LXRpdGxle1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uZm9udC1zdWJ0aXRsZXtcbiAgZm9udC1zaXplOiAyNXB4O1xuXG59XG4uZm9udC10ZXh0e1xuICBmb250LXNpemU6IDE3cHg7XG5cbn1cbn0iLCIuYWJvdXQtdGl0bGUge1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWJvdXQtcG9zaXRpb24ge1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICNmZmE1MDA7XG59XG5cbi5hYm91dC1kZXNjIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5hYm91dC1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTUlO1xufVxuXG4uYWJvdXQtc3ZnIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDU1MHB4O1xufVxuXG4uY2FyZDEge1xuICBtYXJnaW46IDBweCAyMHB4IDBweCAzMHB4O1xufVxuXG4ub3JhbmdlIHtcbiAgY29sb3I6ICNmZmE1MDA7XG59XG5cbnVsLmRlbW8ge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgLmZvbnQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG5cbiAgLmZvbnQtc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4zdnc7XG4gIH1cblxuICAuZm9udC10ZXh0IHtcbiAgICBmb250LXNpemU6IDEuMXZ3O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb250LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cblxuICAuZm9udC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG5cbiAgLmZvbnQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-About',
                templateUrl: './About.component.html',
                styleUrls: ['./About.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Contact/Contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/Contact/Contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-Contact"]], decls: 39, vars: 0, consts: [[1, "card1"], [1, "row"], [1, "about-title", "font-title"], [1, "row", "font-subtitle"], [1, "fa", "fa-envelope", 2, "color", "white"], [1, "row", 2, "border-bottom", "1px solid silver", "padding-bottom", "0px"], [1, "about-title", "font-subtitle", 2, "margin-bottom", "0%"], [1, "font-subtitle", 2, "margin-top", "15px", "line-height", "normal"], [2, "color", "grey", "margin-bottom", "5px"], [1, "fa", "fa-phone", 2, "color", "white"], [1, "font-text", 2, "margin-top", "15px", "line-height", "normal"], [1, "row", "font-title"], [1, "fa", "fa-location-arrow", 2, "color", "white"], [2, "color", "gray"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "sergej.savi@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "+381652399971");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Country: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Serbia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "City: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Belgrade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Postal code: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "11000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-title[_ngcontent-%COMP%] {\n  \n  line-height: 30px;\n  color: white;\n}\n.about-position[_ngcontent-%COMP%] {\n   \n  line-height: 30px;\n  color: #ffa500;\n}\n.about-desc[_ngcontent-%COMP%] {\n  width:100%;\n  font-size: 15px;\n  color: grey;\n}\n.about-content[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 55%;\n}\n.about-svg[_ngcontent-%COMP%]{\n    width: 300px;\n    height: 550px;\n}\n.card1[_ngcontent-%COMP%]{\n  margin: 0px 20px 0px 30px;\n\n}\n.orange[_ngcontent-%COMP%]{\n  color: #ffa500;\n}\nul.demo[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n@media only screen and (min-width:767px) {\n  .font-title[_ngcontent-%COMP%]{\n    font-size: 2vw;\n  }\n  .font-subtitle[_ngcontent-%COMP%]{\n    font-size: 1.3vw;\n  \n  }\n  .font-text[_ngcontent-%COMP%]{\n    font-size: 1.3vw;\n  \n  }\n}\n@media only screen and (max-width:767px) {\n.font-title[_ngcontent-%COMP%]{\n  font-size: 30px;\n}\n.font-subtitle[_ngcontent-%COMP%]{\n  font-size: 25px;\n\n}\n.font-text[_ngcontent-%COMP%]{\n  font-size: 17px;\n\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29udGFjdC9Db250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBc0M7RUFDdEMsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUNBO0dBQ0csc0NBQXNDO0VBQ3ZDLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtFQUNFLHlCQUF5Qjs7QUFFM0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7QUFDQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZ0JBQWdCOztFQUVsQjtFQUNBO0lBQ0UsZ0JBQWdCOztFQUVsQjtBQUNGO0FBQ0E7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7O0FBRWpCO0FBQ0E7RUFDRSxlQUFlOztBQUVqQjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvQ29udGFjdC9Db250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtdGl0bGUge1xuICAvKiBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmOyAqL1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFib3V0LXBvc2l0aW9uIHtcbiAgIC8qIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7ICovXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogI2ZmYTUwMDtcbn1cbi5hYm91dC1kZXNjIHtcbiAgd2lkdGg6MTAwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogZ3JleTtcbn1cbi5hYm91dC1jb250ZW50e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTUlO1xufVxuLmFib3V0LXN2Z3tcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA1NTBweDtcbn1cbi5jYXJkMXtcbiAgbWFyZ2luOiAwcHggMjBweCAwcHggMzBweDtcblxufVxuLm9yYW5nZXtcbiAgY29sb3I6ICNmZmE1MDA7XG59XG51bC5kZW1vIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2N3B4KSB7XG4gIC5mb250LXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG4gIC5mb250LXN1YnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMS4zdnc7XG4gIFxuICB9XG4gIC5mb250LXRleHR7XG4gICAgZm9udC1zaXplOiAxLjN2dztcbiAgXG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuLmZvbnQtdGl0bGV7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5mb250LXN1YnRpdGxle1xuICBmb250LXNpemU6IDI1cHg7XG5cbn1cbi5mb250LXRleHR7XG4gIGZvbnQtc2l6ZTogMTdweDtcblxufVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-Contact',
                templateUrl: './Contact.component.html',
                styleUrls: ['./Contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Nav/Nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/Nav/Nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function () { return ["/about"]; };
const _c1 = function (a0, a1) { return { "nav-link1": a0, "nav-link2": a1 }; };
const _c2 = function () { return ["/resume"]; };
const _c3 = function () { return ["/services"]; };
const _c4 = function () { return ["/contact"]; };
class NavComponent {
    constructor(router) {
        this.router = router;
        this.about = true;
        this.projects = false;
        this.education = false;
        this.contact = false;
    }
    ngOnInit() {
        if (window.location.href.toString() === 'http://localhost:4200/about' || window.location.href.toString() === 'http://localhost:4200') {
            this.about = true;
            this.projects = false;
            this.education = false;
            this.contact = false;
        }
        else {
            if (window.location.href.toString() === 'http://localhost:4200/resume') {
                this.about = false;
                this.projects = true;
                this.education = false;
                this.contact = false;
            }
            else {
                if (window.location.href.toString() === 'http://localhost:4200/services') {
                    this.about = false;
                    this.projects = false;
                    this.education = true;
                    this.contact = false;
                }
                else {
                    if (window.location.href.toString() === 'http://localhost:4200/contact') {
                        this.about = false;
                        this.projects = false;
                        this.education = false;
                        this.contact = true;
                    }
                    else {
                        if (window.location.href.substring(0, window.location.href.toString().lastIndexOf("/")) === 'http://localhost:4200') {
                            this.about = true;
                            this.projects = false;
                            this.education = false;
                            this.contact = false;
                        }
                        else {
                            this.about = false;
                            this.projects = true;
                            this.education = false;
                            this.contact = false;
                        }
                        // console.log(window.location.href.substring(0,window.location.href.toString().lastIndexOf("/")))
                    }
                }
            }
        }
    }
    onChange(ruta) {
        console.log(ruta);
        if (ruta == 'about') {
            this.about = true;
            this.projects = false;
            this.education = false;
            this.contact = false;
        }
        if (ruta == 'resume') {
            this.about = false;
            this.projects = true;
            this.education = false;
            this.contact = false;
        }
        if (ruta == 'services') {
            this.about = false;
            this.projects = false;
            this.education = true;
            this.contact = false;
        }
        if (ruta == 'contact') {
            this.about = false;
            this.projects = false;
            this.education = false;
            this.contact = true;
        }
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-Nav"]], decls: 14, vars: 24, consts: [[1, "navbar", "navbar-expand", "navbar-light", "justify-content-center", 2, "background-color", "#1a1b1d"], [1, "nav", "navbar-nav"], [1, "nav-item", 3, "click"], ["routerLinkActive", "active", "data-toggle", "tooltip", "title", "About", "data-placement", "top", 1, "nav-link", "font-text", 2, "border-bottom", "1px solid white", 3, "routerLink"], [1, "fa", "fa-user", 3, "ngClass"], ["routerLinkActive", "active", "data-toggle", "tooltip", "title", "Projects", 1, "nav-link", "font-text", 2, "border-bottom", "1px solid white", 3, "routerLink"], [1, "fa", "fa-tasks", 3, "ngClass"], ["routerLinkActive", "active", "data-toggle", "tooltip", "title", "Education", 1, "nav-link", "font-text", 2, "border-bottom", "1px solid white", 3, "routerLink"], [1, "fa", "fa-book", 3, "ngClass"], ["r", "", "outerLinkActive", "active", "data-toggle", "tooltip", "title", "Contact", 1, "nav-link", "font-text", 2, "border-bottom", "1px solid white", 3, "routerLink"], [1, "fa", "fa-phone", 3, "ngClass"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_2_listener() { return ctx.onChange("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_5_listener() { return ctx.onChange("resume"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_8_listener() { return ctx.onChange("services"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_11_listener() { return ctx.onChange("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c1, ctx.about, !ctx.about));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c1, ctx.projects, !ctx.projects));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c1, ctx.education, !ctx.education));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c1, ctx.contact, !ctx.contact));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".nav-link1[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.nav-link2[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n@media only screen and (min-width: 767px) {\n  .font-text[_ngcontent-%COMP%] {\n    font-size: 2vw;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .font-text[_ngcontent-%COMP%] {\n    margin-top: -20px;\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTmF2L2M6XFxVc2Vyc1xcV2luZG93cyBIRFxcRGVza3RvcCA1XFxwZlxcYW5ndWxhclBvcnRmb2xpby1tYWluL3NyY1xcYXBwXFxOYXZcXE5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvTmF2L05hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7QUNFRjs7QURBQTtFQUNFO0lBQ0UsY0FBQTtFQ0dGO0FBQ0Y7O0FEREE7RUFDQTtJQUNBLGlCQUFBO0lBQW9CLGVBQUE7RUNJbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL05hdi9OYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmsxe1xuICBjb2xvcjogd2hpdGU7XG59XG4ubmF2LWxpbmsye1xuICBjb2xvcjogZ3JheTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjdweCkge1xuICAuZm9udC10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG4gIH1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuLmZvbnQtdGV4dHtcbm1hcmdpbi10b3A6IC0yMHB4OyAgZm9udC1zaXplOiAzMHB4O1xufVxuXG59IiwiLm5hdi1saW5rMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5hdi1saW5rMiB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gIC5mb250LXRleHQge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb250LXRleHQge1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-Nav',
                templateUrl: './Nav.component.html',
                styleUrls: ['./Nav.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Profile/Profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/Profile/Profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function () { return ["/about"]; };
const _c1 = function (a0, a1) { return { "nav-link1": a0, "nav-link2": a1 }; };
const _c2 = function () { return ["/resume"]; };
const _c3 = function () { return ["/services"]; };
const _c4 = function () { return ["/contact"]; };
class ProfileComponent {
    constructor(router) {
        this.router = router;
        this.about = true;
        this.projects = false;
        this.education = false;
        this.contact = false;
    }
    ngOnInit() {
        if (window.location.href.toString() === 'http://localhost:4200/about' || window.location.href.toString() === 'http://localhost:4200') {
            this.about = true;
            this.projects = false;
            this.education = false;
            this.contact = false;
        }
        else {
            if (window.location.href.toString() === 'http://localhost:4200/resume') {
                this.about = false;
                this.projects = true;
                this.education = false;
                this.contact = false;
            }
            else {
                if (window.location.href.toString() === 'http://localhost:4200/services') {
                    this.about = false;
                    this.projects = false;
                    this.education = true;
                    this.contact = false;
                }
                else {
                    if (window.location.href.toString() === 'http://localhost:4200/contact') {
                        this.about = false;
                        this.projects = false;
                        this.education = false;
                        this.contact = true;
                    }
                    else {
                        if (window.location.href.substring(0, window.location.href.toString().lastIndexOf("/")) === 'http://localhost:4200') {
                            this.about = true;
                            this.projects = false;
                            this.education = false;
                            this.contact = false;
                        }
                        else {
                            this.about = false;
                            this.projects = true;
                            this.education = false;
                            this.contact = false;
                        }
                        // console.log(window.location.href.substring(0,window.location.href.toString().lastIndexOf("/")))
                    }
                }
            }
        }
    }
    onChange(ruta) {
        console.log(ruta);
        if (ruta == 'about') {
            this.about = true;
            this.projects = false;
            this.education = false;
            this.contact = false;
        }
        if (ruta == 'resume') {
            this.about = false;
            this.projects = true;
            this.education = false;
            this.contact = false;
        }
        if (ruta == 'services') {
            this.about = false;
            this.projects = false;
            this.education = true;
            this.contact = false;
        }
        if (ruta == 'contact') {
            this.about = false;
            this.projects = false;
            this.education = false;
            this.contact = true;
        }
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-Profile"]], decls: 15, vars: 24, consts: [[1, "klasa", 2, "justify-content", "center", "margin-top", "0px"], [1, "navbar", "navbar-expand", "navbar-light", 2, "background-color", "#122023"], [1, "nav", 2, "justify-content", "center", "width", "100%", "padding-right", "0%"], [1, "nav-item", 3, "click"], ["routerLinkActive", "active", "data-toggle", "tooltip", "title", "About", "data-placement", "top", 1, "nav-link", 2, "text-align", "center", 3, "routerLink"], [1, "fa", "fa-user", 2, "font-size", "40px", 3, "ngClass"], ["routerLinkActive", "active", "data-toggle", "tooltip", "title", "Projects", 1, "nav-link", 2, "text-align", "center", 3, "routerLink"], [1, "fa", "fa-tasks", 2, "font-size", "40px", 3, "ngClass"], ["routerLinkActive", "active", "data-toggle", "tooltip", "title", "Education", 1, "nav-link", 2, "text-align", "center", 3, "routerLink"], [1, "fa", "fa-book", 2, "font-size", "40px", 3, "ngClass"], ["routerLinkActive", "active", "data-toggle", "tooltip", "title", "Contact", 1, "nav-link", 2, "text-align", "center", 3, "routerLink"], [1, "fa", "fa-phone", 2, "font-size", "40px", 3, "ngClass"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_li_click_3_listener() { return ctx.onChange("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_li_click_6_listener() { return ctx.onChange("resume"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_li_click_9_listener() { return ctx.onChange("services"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_li_click_12_listener() { return ctx.onChange("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c1, ctx.about, !ctx.about));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c1, ctx.projects, !ctx.projects));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c1, ctx.education, !ctx.education));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c1, ctx.contact, !ctx.contact));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".profile-icon[_ngcontent-%COMP%]{\n  height: 30px;\n  width: 30px;\n  color:black;\n  padding: 2px;\n  text-align: center;\n}\n.social-media[_ngcontent-%COMP%]{\n  margin:20px 0px 0px 0px;\n  text-align: center;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n  padding: 5px;\n}\n.about-me[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{\n  margin-bottom:5px;\n  margin-right: 5px;\n  width: 30px;\n}\n.about-me[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n  font-size: 0.7vw;\n}\n.container-fluid[_ngcontent-%COMP%]{\n  margin-left: -15px !important;\n}\n@media only screen and (max-width:767px) {\n .klasa[_ngcontent-%COMP%]{\n   display:inline;\n }\n .nav[_ngcontent-%COMP%]{\n }\n}\n@media only screen and (min-width:767px) {\n    .profile[_ngcontent-%COMP%]{\n      display: none;\n    }\n    .klasa[_ngcontent-%COMP%]{\n        padding-top: 50%;\n    }\n    .tekst[_ngcontent-%COMP%]{\n      position:absolute; bottom:20px;\n      justify-content: center;\n    }\n    .nav[_ngcontent-%COMP%]{\n      display:block;\n    }\n}\n.nav-link1[_ngcontent-%COMP%]{\n  color: white;\n}\n.nav-link2[_ngcontent-%COMP%]{\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJvZmlsZS9Qcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtDQUNDO0dBQ0UsY0FBYztDQUNoQjtDQUNBO0NBQ0E7QUFDRDtBQUNBO0lBQ0k7TUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO01BQ0UsaUJBQWlCLEVBQUUsV0FBVztNQUM5Qix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGFBQWE7SUFDZjtBQUNKO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL1Byb2ZpbGUvUHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaWNvbntcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgY29sb3I6YmxhY2s7XG4gIHBhZGRpbmc6IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNvY2lhbC1tZWRpYXtcbiAgbWFyZ2luOjIwcHggMHB4IDBweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uYWJvdXQtbWU+cD5pe1xuICBtYXJnaW4tYm90dG9tOjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuLmFib3V0LW1lPnB7XG4gIGZvbnQtc2l6ZTogMC43dnc7XG59XG4uY29udGFpbmVyLWZsdWlke1xuICBtYXJnaW4tbGVmdDogLTE1cHggIWltcG9ydGFudDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuIC5rbGFzYXtcbiAgIGRpc3BsYXk6aW5saW5lO1xuIH1cbiAubmF2e1xuIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjdweCkge1xuICAgIC5wcm9maWxle1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmtsYXNhe1xuICAgICAgICBwYWRkaW5nLXRvcDogNTAlO1xuICAgIH1cbiAgICAudGVrc3R7XG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTsgYm90dG9tOjIwcHg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLm5hdntcbiAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgfVxufVxuLm5hdi1saW5rMXtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm5hdi1saW5rMntcbiAgY29sb3I6IGdyYXk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-Profile',
                templateUrl: './Profile.component.html',
                styleUrls: ['./Profile.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Resume/Resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/Resume/Resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ResumeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-Resume"]], decls: 0, vars: 0, template: function ResumeComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Jlc3VtZS9SZXN1bWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-Resume',
                templateUrl: './Resume.component.html',
                styleUrls: ['./Resume.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Services/Services.component.ts":
/*!************************************************!*\
  !*** ./src/app/Services/Services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ServicesComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-Services"]], decls: 80, vars: 0, consts: [[1, "card1"], [1, "row"], [1, "about-title", "font-title"], [1, "row", "font-subtitle"], [1, "fa", "fa-graduation-cap", 2, "color", "white"], [1, "row", 2, "border-bottom", "1px solid Silver", "padding-bottom", "0px"], [1, "about-title", "font-subtitle", 2, "margin-bottom", "0%"], [1, "font-text", 2, "margin-top", "15px", "line-height", "normal"], [2, "color", "white", "margin-bottom", "5px"], [2, "color", "gray"], [1, "fa", "fa-book", 2, "color", "white"], [1, "row", 2, "border-bottom", "1px solid silver", "padding-bottom", "0px"], [1, "fa", "fa-university", 2, "color", "white"], [1, "about-title", 2, "margin-bottom", "0%"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Faculty of Organizational Sciences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Field of learning: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Information systems and technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "4 years");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Start year: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "End year: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Platform: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Udenmy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Number of couses: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Name of courses: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Angular - The complete Guide by maximillian Schwarzmuller, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Ionic-Build iOS, Android & Web Apps with Ionic & Angular by Maximillian Schwarzmuller, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " The Web Developer Bootcamp 2020 by Colt Steele ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Java Programming Masterclass for Software Developers by Tim Buchalka ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Servlets and JSPs Tutorial by John Purcell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " JavaScript Algoritms and Data Structures Masterclass by Colt Steele ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "High school");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Name of school: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\"IX Beogradska gimnazija \"Mihailo Petrovic Alas\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Grade: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "High");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "4 years");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Start year: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "2012");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "End year: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-title[_ngcontent-%COMP%] {\n  line-height: 30px;\n  color: white;\n}\n\n.about-position[_ngcontent-%COMP%] {\n  line-height: 30px;\n  color: #ffa500;\n}\n\n.about-desc[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 15px;\n  color: grey;\n}\n\n.about-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 55%;\n}\n\n.about-svg[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 550px;\n}\n\n.card1[_ngcontent-%COMP%] {\n  margin: 0px 20px 0px 30px;\n}\n\n.orange[_ngcontent-%COMP%] {\n  color: #ffa500;\n}\n\nul.demo[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n\n@media only screen and (min-width: 767px) {\n  .font-title[_ngcontent-%COMP%] {\n    font-size: 2vw;\n  }\n\n  .font-subtitle[_ngcontent-%COMP%] {\n    font-size: 1.3vw;\n  }\n\n  .font-text[_ngcontent-%COMP%] {\n    font-size: 1.1vw;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .font-title[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  .font-subtitle[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .font-text[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2VydmljZXMvYzpcXFVzZXJzXFxXaW5kb3dzIEhEXFxEZXNrdG9wIDVcXHBmXFxhbmd1bGFyUG9ydGZvbGlvLW1haW4vc3JjXFxhcHBcXFNlcnZpY2VzXFxTZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvU2VydmljZXMvU2VydmljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxpQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURFQTtFQUVFLGlCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNHSjs7QUREQTtFQUNFLHlCQUFBO0FDSUY7O0FEREE7RUFDRSxjQUFBO0FDSUY7O0FERkE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUNLRjs7QURIQTtFQUNFO0lBQ0UsY0FBQTtFQ01GOztFREpBO0lBQ0UsZ0JBQUE7RUNPRjs7RURKQTtJQUNFLGdCQUFBO0VDT0Y7QUFDRjs7QURKQTtFQUNBO0lBQ0UsZUFBQTtFQ01BOztFREpGO0lBQ0UsZUFBQTtFQ09BOztFREpGO0lBQ0UsZUFBQTtFQ09BO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9TZXJ2aWNlcy9TZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC10aXRsZSB7XG4gIC8vIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWJvdXQtcG9zaXRpb24ge1xuICAvLyBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICNmZmE1MDA7XG59XG4uYWJvdXQtZGVzYyB7XG4gIHdpZHRoOjEwMCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGdyZXk7XG59XG4uYWJvdXQtY29udGVudHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDU1JTtcbn1cbi5hYm91dC1zdmd7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogNTUwcHg7XG59XG4uY2FyZDF7XG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDMwcHg7XG5cbn1cbi5vcmFuZ2V7XG4gIGNvbG9yOiAjZmZhNTAwO1xufVxudWwuZGVtbyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjdweCkge1xuICAuZm9udC10aXRsZXtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgfVxuICAuZm9udC1zdWJ0aXRsZXtcbiAgICBmb250LXNpemU6IDEuM3Z3O1xuICBcbiAgfVxuICAuZm9udC10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMS4xdnc7XG4gIFxuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcbi5mb250LXRpdGxle1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uZm9udC1zdWJ0aXRsZXtcbiAgZm9udC1zaXplOiAyMHB4O1xuXG59XG4uZm9udC10ZXh0e1xuICBmb250LXNpemU6IDE3cHg7XG5cbn1cbn1cbiIsIi5hYm91dC10aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hYm91dC1wb3NpdGlvbiB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogI2ZmYTUwMDtcbn1cblxuLmFib3V0LWRlc2Mge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogZ3JleTtcbn1cblxuLmFib3V0LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbi5hYm91dC1zdmcge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNTUwcHg7XG59XG5cbi5jYXJkMSB7XG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDMwcHg7XG59XG5cbi5vcmFuZ2Uge1xuICBjb2xvcjogI2ZmYTUwMDtcbn1cblxudWwuZGVtbyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xuICAuZm9udC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAydnc7XG4gIH1cblxuICAuZm9udC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjN2dztcbiAgfVxuXG4gIC5mb250LXRleHQge1xuICAgIGZvbnQtc2l6ZTogMS4xdnc7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvbnQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gIC5mb250LXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAuZm9udC10ZXh0IHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-Services',
                templateUrl: './Services.component.html',
                styleUrls: ['./Services.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Testimonials/Testimonials.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Testimonials/Testimonials.component.ts ***!
  \********************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration */ "./src/app/configuration.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function TestimonialsComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r2.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r2.name, " - ", item_r2.company, " ");
} }
function TestimonialsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestimonialsComponent_div_2_div_1_Template, 7, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const indexElement_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", indexElement_r3 % 2 == 0);
} }
function TestimonialsComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r6.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r6.name, " - ", item_r6.company, " ");
} }
function TestimonialsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestimonialsComponent_div_4_div_1_Template, 7, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const indexElement_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", indexElement_r7 % 2 == 0);
} }
class TestimonialsComponent {
    constructor() {
        this._testimonials = _configuration__WEBPACK_IMPORTED_MODULE_1__["Testimonials"];
    }
    ngOnInit() {
    }
}
TestimonialsComponent.ɵfac = function TestimonialsComponent_Factory(t) { return new (t || TestimonialsComponent)(); };
TestimonialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimonialsComponent, selectors: [["app-Testimonials"]], decls: 8, vars: 2, consts: [[1, "row", "ml-1"], [1, "col", "d-flex", "flex-column"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col"], ["src", "../assets/images/Reference.svg", 1, "img-fluid", "testimonial-image"], ["class", "testimonial-card ", 4, "ngIf"], [1, "testimonial-card"], [1, "testimonial-text", 2, "float", "left"], ["aria-hidden", "true", 1, "fa", "fa-quote-left", "mr-2"], ["aria-hidden", "true", 1, "fa", "fa-quote-right", "ml-2"], [1, "testimonial-text", 2, "float", "right"]], template: function TestimonialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TestimonialsComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TestimonialsComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._testimonials);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._testimonials);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 600px;\n  justify-content: center;\n  align-items: center;\n}\n\n.testimonial-icon[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100px;\n}\n\n.icon-text[_ngcontent-%COMP%] {\n  color: blue;\n  margin-left: 20px;\n  margin-top: -20px;\n  float: left;\n}\n\n.testimonial-card[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 130px;\n  background-color: #f1ebeb;\n  margin: 20px 0px;\n  padding: 10px;\n  border-radius: 13px;\n}\n\n.testimonial-text[_ngcontent-%COMP%] {\n  font-family: \"Inter\", sans-serif;\n  font-size: small;\n  color: #000000;\n}\n\n.testimonial-image[_ngcontent-%COMP%] {\n  width: 370px;\n  height: 370px;\n  display: block;\n  margin: auto;\n  padding-bottom: 40px;\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVGVzdGltb25pYWxzL2M6XFxVc2Vyc1xcV2luZG93cyBIRFxcRGVza3RvcCA1XFxwZlxcYW5ndWxhclBvcnRmb2xpby1tYWluL3NyY1xcYXBwXFxUZXN0aW1vbmlhbHNcXFRlc3RpbW9uaWFscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvVGVzdGltb25pYWxzL1Rlc3RpbW9uaWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNLRjs7QURIQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9UZXN0aW1vbmlhbHMvVGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50ZXN0aW1vbmlhbC1pY29uIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwcHg7XG59XG4uaWNvbi10ZXh0IHtcbiAgY29sb3I6IGJsdWU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4udGVzdGltb25pYWwtY2FyZCB7XG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZWJlYjtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbn1cbi50ZXN0aW1vbmlhbC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnRlc3RpbW9uaWFsLWltYWdle1xuICAgIHdpZHRoOiAzNzBweDtcbiAgICBoZWlnaHQ6IDM3MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59IiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRlc3RpbW9uaWFsLWljb24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmljb24tdGV4dCB7XG4gIGNvbG9yOiBibHVlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udGVzdGltb25pYWwtY2FyZCB7XG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZWJlYjtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbn1cblxuLnRlc3RpbW9uaWFsLXRleHQge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnRlc3RpbW9uaWFsLWltYWdlIHtcbiAgd2lkdGg6IDM3MHB4O1xuICBoZWlnaHQ6IDM3MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-Testimonials',
                templateUrl: './Testimonials.component.html',
                styleUrls: ['./Testimonials.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile/Profile.component */ "./src/app/Profile/Profile.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 0, consts: [[1, "row"], [1, "col", "pom"], [1, "col-md-1", "ped", 2, "padding-top", "0px"], [1, "klasa", "back", 2, "justify-content", "center"], [1, "card-body", "align-self-flex-start", 2, "padding", "0%"], [1, "col-md-6", "ped", 2, "align-items", "center"], [1, "card", "klasa", 2, "border", "none", "border-radius", "0%"], [1, "card-body", "main", 2, "position", "relative", "padding-top", "40px"], [1, "col"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_Profile_Profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@media only screen and (max-width:767px) {\n  .klasa[_ngcontent-%COMP%] {\n    width:100vw;\n    overflow: hidden;\n    background-color:#122023;\n\n  }\n  .ped[_ngcontent-%COMP%]{\n    padding: 0 15px;\n  }\n  .back[_ngcontent-%COMP%]{\n    background-image: none;\n  }\n  .main[_ngcontent-%COMP%]{\n    background-color:#122023; \n    padding: 0%;\n     overflow: scroll; \n     overflow-x:hidden; \n     overflow-y: hidden;\n  }\n  .row[_ngcontent-%COMP%]{\n    background-color: #122023;\n    height: 100vh; \n    display: inline-block;   \n  }\n  .pom[_ngcontent-%COMP%]{\n    display: none;\n  }\n}\n@media only screen and (min-width:767px) {\n  .klasa[_ngcontent-%COMP%] {\n    height:80vh;\n    background-color:#122023;\n  }\n  .back[_ngcontent-%COMP%]{\n    \n  }\n  .ped[_ngcontent-%COMP%]{\n    padding: 0 0;\n  }\n  .main[_ngcontent-%COMP%]{\n    background-color: #122023; \n    border-left: 1px solid gray ; \n    padding: 0%;\n     overflow: scroll; \n     overflow-x:hidden; \n     margin:15px 15px 15px 0px;\n  }\n  .row[_ngcontent-%COMP%]{\n    height: 100vh;\n    align-items: center;\n    display: flex;\n  }\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\nwidth: 15px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\nbox-shadow: inset 0 0 5px grey;\nborder-radius: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\nbackground: #0c0c0c;\nborder-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsd0JBQXdCOztFQUUxQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsV0FBVztLQUNWLGdCQUFnQjtLQUNoQixpQkFBaUI7S0FDakIsa0JBQWtCO0VBQ3JCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsaU9BQWlPO0VBQ25PO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsV0FBVztLQUNWLGdCQUFnQjtLQUNoQixpQkFBaUI7S0FDakIseUJBQXlCO0VBQzVCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7RUFDZjtBQUNGO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsV0FBVztBQUNYO0FBRUEsVUFBVTtBQUNWO0FBQ0EsOEJBQThCO0FBQzlCLG1CQUFtQjtBQUNuQjtBQUVBLFdBQVc7QUFDWDtBQUNBLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuICAua2xhc2Ege1xuICAgIHdpZHRoOjEwMHZ3O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTIyMDIzO1xuXG4gIH1cbiAgLnBlZHtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gIH1cbiAgLmJhY2t7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgfVxuICAubWFpbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxMjIwMjM7IFxuICAgIHBhZGRpbmc6IDAlO1xuICAgICBvdmVyZmxvdzogc2Nyb2xsOyBcbiAgICAgb3ZlcmZsb3cteDpoaWRkZW47IFxuICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIH1cbiAgLnJvd3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIyMDIzO1xuICAgIGhlaWdodDogMTAwdmg7IFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgICBcbiAgfVxuICAucG9te1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjdweCkge1xuICAua2xhc2Ege1xuICAgIGhlaWdodDo4MHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzEyMjAyMztcbiAgfVxuICAuYmFja3tcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTk1MDEwMjUyNjQtNjViYTE1YTgyMzkwP2l4bGliPXJiLTEuMi4xJnc9MTAwMCZxPTgwKTtiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7IGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICovXG4gIH1cbiAgLnBlZHtcbiAgICBwYWRkaW5nOiAwIDA7XG4gIH1cbiAgLm1haW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMjAyMzsgXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5IDsgXG4gICAgcGFkZGluZzogMCU7XG4gICAgIG92ZXJmbG93OiBzY3JvbGw7IFxuICAgICBvdmVyZmxvdy14OmhpZGRlbjsgXG4gICAgIG1hcmdpbjoxNXB4IDE1cHggMTVweCAwcHg7XG4gIH1cbiAgLnJvd3tcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuLyogd2lkdGggKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xud2lkdGg6IDE1cHg7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbmJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTtcbmJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG5iYWNrZ3JvdW5kOiAjMGMwYzBjO1xuYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _About_About_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About/About.component */ "./src/app/About/About.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _appRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appRoutes */ "./src/app/appRoutes.ts");
/* harmony import */ var _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Profile/Profile.component */ "./src/app/Profile/Profile.component.ts");
/* harmony import */ var _Nav_Nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Nav/Nav.component */ "./src/app/Nav/Nav.component.ts");
/* harmony import */ var _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Contact/Contact.component */ "./src/app/Contact/Contact.component.ts");
/* harmony import */ var _Services_Services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Services/Services.component */ "./src/app/Services/Services.component.ts");
/* harmony import */ var _Testimonials_Testimonials_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Testimonials/Testimonials.component */ "./src/app/Testimonials/Testimonials.component.ts");
/* harmony import */ var _Resume_Resume_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Resume/Resume.component */ "./src/app/Resume/Resume.component.ts");
/* harmony import */ var _projects_projects_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects/projects.service */ "./src/app/projects/projects.service.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_projects_projects_service__WEBPACK_IMPORTED_MODULE_12__["ProjectsService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_appRoutes__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _About_About_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
        _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
        _Nav_Nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
        _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
        _Services_Services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"],
        _Testimonials_Testimonials_component__WEBPACK_IMPORTED_MODULE_10__["TestimonialsComponent"],
        _Resume_Resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _About_About_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
                    _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                    _Nav_Nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                    _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                    _Services_Services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"],
                    _Testimonials_Testimonials_component__WEBPACK_IMPORTED_MODULE_10__["TestimonialsComponent"],
                    _Resume_Resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_appRoutes__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"]),
                ],
                providers: [_projects_projects_service__WEBPACK_IMPORTED_MODULE_12__["ProjectsService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/appRoutes.ts":
/*!******************************!*\
  !*** ./src/app/appRoutes.ts ***!
  \******************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _Services_Services_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services/Services.component */ "./src/app/Services/Services.component.ts");
/* harmony import */ var _Testimonials_Testimonials_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Testimonials/Testimonials.component */ "./src/app/Testimonials/Testimonials.component.ts");
/* harmony import */ var _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact/Contact.component */ "./src/app/Contact/Contact.component.ts");
/* harmony import */ var _About_About_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About/About.component */ "./src/app/About/About.component.ts");




const AppRoutes = [
    { path: "about", component: _About_About_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: "testimonials", component: _Testimonials_Testimonials_component__WEBPACK_IMPORTED_MODULE_1__["TestimonialsComponent"] },
    { path: "services", component: _Services_Services_component__WEBPACK_IMPORTED_MODULE_0__["ServicesComponent"] },
    { path: "contact", component: _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] },
    { path: "resume",
        loadChildren: () => __webpack_require__.e(/*! import() | projects-projects-module */ "projects-projects-module").then(__webpack_require__.bind(null, /*! ./projects/projects.module */ "./src/app/projects/projects.module.ts")).then((mod) => mod.ProjectsModule),
    },
    { path: "**", component: _About_About_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], pathMatch: "full" },
];


/***/ }),

/***/ "./src/app/configuration.ts":
/*!**********************************!*\
  !*** ./src/app/configuration.ts ***!
  \**********************************/
/*! exports provided: Configuration, Skills, JobExperience, Education, Services, Testimonials, SocialMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skills", function() { return Skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobExperience", function() { return JobExperience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Education", function() { return Education; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Testimonials", function() { return Testimonials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMedia", function() { return SocialMedia; });
const Configuration = {
    profileUrl: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    userName: "Abdullah Öztürk",
    userJob: "Software Developer",
    userLocation: "İstanbul",
    userEmail: "test@abdullah.com",
    userDateOfBirth: "12/12/2012",
    userAddress: "Chesterwood Dr Spotsylvania, Virginia(VA), 22553",
    userPhone: "(540) 479-2232 10500",
    aboutMe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed aliquam felis, quis pellentesque erat. Curabitur vel sodales purus. Nulla nibh mi, porttitor nec purus et, sagittis maximus justo. Suspendisse aliquam mauris id velit congue, vel volutpat nibh commodo. Pellentesque imperdiet enim id elementum commodo.",
};
//Personal Informations
const Skills = [
    "C#", ".Net Core", "Angular", "Asp.Net", "Typescript", "Javascript"
];
//Max skills limit is 6 . If you add more than 6 skill , you may be disappointed.
const JobExperience = [
    { company: "Facebook", rank: "Software Developer Intern", date: "09/2018 - 07/2018", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { company: "Instagram", rank: "Software Developer ", date: "09/2018- 07/2019", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { company: "Uber", rank: "Software Development Consultant", date: "09/2019 - Present", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
];
//Max job experiences limit is 3 . If you add more than 3 skill , you may be disappointed.
const Education = [
    { school: "Carnegie Mellon University", date: "09/2006 - 07/2010", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { school: "University of Chicago", date: "09/2010 - 07/2014", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { school: "Middlebury College", date: "09/2016 - Present", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
];
//Max education limit is 3 . If you add more than 3 skill , you may be disappointed.
const Services = [
    { serviceName: "Web Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { serviceName: "Desktop Management", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { serviceName: "Mobile Development", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { serviceName: "Software Architecture", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { serviceName: "Social Media Management", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { serviceName: "Logo Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
];
//Max services limit is 6 . If you add more than 6 skill , you may be disappointed.
const Testimonials = [
    { name: "Person X", company: "Facebook", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam aliquet dui at ultricies. Donec fermentum lorem sit amet massa vestibulum, vel pellentesque lectus vestibulum.", review: 85 },
    { name: "Person Y", company: "Instagram", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam aliquet dui at ultricies. Donec fermentum lorem sit amet massa vestibulum, vel pellentesque lectus vestibulum.", review: 80 },
    { name: "Person Z", company: "Uber", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam aliquet dui at ultricies. Donec fermentum lorem sit amet massa vestibulum, vel pellentesque lectus vestibulum.", review: 79 },
    { name: "Person W", company: "Airbnb", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam aliquet dui at ultricies. Donec fermentum lorem sit amet massa vestibulum, vel pellentesque lectus vestibulum.", review: 99 }
];
//Max testimonials limit is 4 . If you add more than 4 skill , you may be disappointed.
const SocialMedia = {
    github: "github.com",
    instagram: "instagram.com",
    twitter: "twitter.com",
    linkedin: "linkedin.com",
    medium: "medium.com",
    facebook: "facebook.com"
};


/***/ }),

/***/ "./src/app/projects/project.model.ts":
/*!*******************************************!*\
  !*** ./src/app/projects/project.model.ts ***!
  \*******************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
class Project {
    constructor(title, lenguages, description, github, pictures, freamworks, database, libraries, url) {
        this.title = title;
        this.languages = lenguages;
        this.description = description;
        this.github = github;
        this.pictures = pictures;
        this.freamworks = freamworks;
        this.database = database;
        this.libraries = libraries;
        this.url = url;
    }
}


/***/ }),

/***/ "./src/app/projects/projects.service.ts":
/*!**********************************************!*\
  !*** ./src/app/projects/projects.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "./node_modules/@ks89/angular-modal-gallery/__ivy_ngcc__/fesm2015/ks89-angular-modal-gallery.js");
/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.model */ "./src/app/projects/project.model.ts");




class ProjectsService {
    constructor() {
        this.projekti = [
            new _project_model__WEBPACK_IMPORTED_MODULE_2__["Project"]("BeogradskiRestorani.com", ['NodeJS', 'HTML', 'CSS', 'JavaScript'], "This is web application that gives users preview of best restaurants settled in Belgrade. Application offers authentication, as well as possibilities to add new restaurants, edit and delete existing ones and also write comments and post 1-5 star reviews on every restaurant. There is also search option, which finds all restaurants on a given name or restaurants address. Application was made using MEN stack (Mongo, Express, Node)", "https://github.com/Sergej997/BeogradskiRestorani.com", [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](0, {
                    img: '../../assets/images/beogradskiResstorani/1 .png',
                    description: 'Landing page'
                }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](1, {
                    img: '../../assets/images/beogradskiResstorani/2.png',
                    description: 'Landing page'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](2, {
                    img: '../../assets/images/beogradskiResstorani/3.png',
                    description: 'Home page'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](3, {
                    img: '../../assets/images/beogradskiResstorani/4.png',
                    description: 'Home page'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](4, {
                    img: '../../assets/images/beogradskiResstorani/5.png',
                    description: 'Restaurant page'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](5, {
                    img: '../../assets/images/beogradskiResstorani/6.png',
                    description: 'Reviews'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](6, {
                    img: '../../assets/images/beogradskiResstorani/7.png',
                    description: 'Login form'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](7, {
                    img: '../../assets/images/beogradskiResstorani/8.png',
                    description: 'New restaurant'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](8, {
                    img: '../../assets/images/beogradskiResstorani/9.png',
                    description: 'Search'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](9, {
                    img: '../../assets/images/beogradskiResstorani/10.png',
                    description: 'Restaurant page'
                })
            ], ['Express',], "MongoDB", ["Bootstrap"], "../../assets/images/beogradskiResstorani/slika.PNG"),
            new _project_model__WEBPACK_IMPORTED_MODULE_2__["Project"]("Review of football tournaments in Serbia", ['Java'], "It is JAVA GUI client-server application. It has been done in NetBeans IDE for java. Application provides work with database.E.g. Users can add football teams, competitions, matches,results, players and statistics of players on different matches and save them to database with MySQL used as relational database management system.", "https://github.com/Sergej997/PregledFudbalskihTakmicenjaUSrbiji", [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](0, {
                    img: '../../assets/images/ps/1.png',
                    description: 'Login form'
                }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](1, {
                    img: '../../assets/images/ps/4.png',
                    description: 'Adding new club'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](2, {
                    img: '../../assets/images/ps/2.png',
                    description: 'Login and Registration'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](3, {
                    img: '../../assets/images/ps/3.png',
                    description: 'Home page'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](6, {
                    img: '../../assets/images/ps/5.png',
                    description: 'Adding new tournament '
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](7, {
                    img: '../../assets/images/ps/6.png',
                    description: 'Adding new match'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](8, {
                    img: '../../assets/images/ps/7.png',
                    description: 'Adding new metch result'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](9, {
                    img: '../../assets/images/ps/8.png',
                    description: 'Adding new player'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](10, {
                    img: '../../assets/images/ps/9.png',
                    description: 'Add new player statistics'
                })
            ], [], "MySQL", [], "../../assets/images/ps/4.png"),
            new _project_model__WEBPACK_IMPORTED_MODULE_2__["Project"]("Fit&Sit", ['HTML', 'SCSS', "JavaScript", "TypeScript"], "PWA(progressive web application) made using Angular and Ionic framework. It gives users preview of all the existing recepies as well as possibility to add new recepies, edit and delete their own recepies, add ingredients to their own shopping list and also to get their own calories goals and to track them. Application also allows access to Camera, which is accomplished using Capacitor plugin. Application offers connection to database,which is accomplished using firebase. This project is realised as collaboration of two people.", "https://github.com/NikolaRadivojevic97/eatApp", [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](0, {
                    img: '../../assets/images/ionicApp/1.png',
                    description: 'Signup/Login page'
                }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](1, {
                    img: '../../assets/images/ionicApp/2.png',
                    description: 'All recepies'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](2, {
                    img: '../../assets/images/ionicApp/3.png',
                    description: 'Sweets'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](3, {
                    img: '../../assets/images/ionicApp/4.png',
                    description: 'My recepies'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](6, {
                    img: '../../assets/images/ionicApp/5.png',
                    description: 'New recepie'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](7, {
                    img: '../../assets/images/ionicApp/6.png',
                    description: 'Hamburger'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](8, {
                    img: '../../assets/images/ionicApp/7.png',
                    description: 'Hamburger ingredients'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](9, {
                    img: '../../assets/images/ionicApp/8.png',
                    description: 'Adding ingredient to shopping list'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](10, {
                    img: '../../assets/images/ionicApp/9.png',
                    description: 'Preparation process'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](11, {
                    img: '../../assets/images/ionicApp/10.png',
                    description: 'Shopping list'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](12, {
                    img: '../../assets/images/ionicApp/11.png',
                    description: 'Calories overview'
                })
            ], ["Angular, Ionic"], "Firebase", ["Bootstrap"], "../../assets/images/ionicApp/url.png"),
            new _project_model__WEBPACK_IMPORTED_MODULE_2__["Project"]("Mobile shop(Android version)", ['Java', 'PHP'], "This application represents mobile version of mobile shop application also listed in this portfolio. Application offers authentication, as well as possibilities to add new phones and new packages  for admins, and also options to view those phones and packages for non-admin users. Registered users can also buy phones. There is search option which offers users option to find phones by name, price, ram memory and camera resolution. Application was realised using android studio and java programming language, and was made as collaboration of three people.", "https://github.com/LukaS70/Elektronska-Prodavnica", [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](0, {
                    img: '../../assets/images/mobileShop/1.png',
                    description: 'Home page'
                }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](1, {
                    img: '../../assets/images/mobileShop/2.png',
                    description: 'Shop'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](2, {
                    img: '../../assets/images/mobileShop/3.png',
                    description: 'Side menu'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](3, {
                    img: '../../assets/images/mobileShop/4.png',
                    description: 'Login'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](6, {
                    img: '../../assets/images/mobileShop/5.png',
                    description: 'Mobile phone specification'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](7, {
                    img: '../../assets/images/mobileShop/6.png',
                    description: 'Mobile phone search'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](8, {
                    img: '../../assets/images/mobileShop/7.png',
                    description: 'Contracts overview'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](9, {
                    img: '../../assets/images/mobileShop/8.png',
                    description: 'Adding new phone'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](10, {
                    img: '../../assets/images/mobileShop/9.png',
                    description: 'Statistics'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](11, {
                    img: '../../assets/images/mobileShop/10.png',
                    description: 'Location'
                })
            ], [], "MySQL", [], "../../assets/images/mobileShop/14.png"), new _project_model__WEBPACK_IMPORTED_MODULE_2__["Project"]("Mobile shop", ['HTML', 'CSS', 'JavaScript', 'PHP'], "This web application represents e-commerce which offers mobile phones to users. Application offers authentication, as well as possibilities to add new phones and new packages for admins, and also options to view those phones and packages for non-admin users. Registered users can also buy phones. There is search option which offers users option to find phones by name, price, ram memory and camera resolution. Application's style was created using java script,  bootstrap and html, while backend was made using php and flight framework. This project is realised as collaboration of three people.", "https://github.com/NikolaRadivojevic97/elektronska_prodavnica", [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](0, {
                    img: '../../assets/images/mobileShop/1.png',
                    description: 'Home page'
                }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](1, {
                    img: '../../assets/images/mobileShop/2.png',
                    description: 'Home page'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](2, {
                    img: '../../assets/images/mobileShop/3.png',
                    description: 'Login dropdown'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](3, {
                    img: '../../assets/images/mobileShop/4.png',
                    description: 'Mobile phone search'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](6, {
                    img: '../../assets/images/mobileShop/5.png',
                    description: 'Mobile phone specification'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](7, {
                    img: '../../assets/images/mobileShop/6.png',
                    description: 'Cart'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](8, {
                    img: '../../assets/images/mobileShop/7.png',
                    description: 'Admin panel'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](9, {
                    img: '../../assets/images/mobileShop/8.png',
                    description: 'Contracts overview'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](10, {
                    img: '../../assets/images/mobileShop/9.png',
                    description: 'Statistics'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](11, {
                    img: '../../assets/images/mobileShop/10.png',
                    description: 'Location'
                })
            ], ["Flight"], "MySQL", ["Bootstrap"], "../../assets/images/mobileShop/5.png"),
            new _project_model__WEBPACK_IMPORTED_MODULE_2__["Project"]("RGB Color Game", ['HTML', 'CSS', 'JavaScript'], "This is web application made using HTML5, CSS3 and vanilla JavaScript. Application gives user one randomly selected color written in RGB model and aslo six colored squares. User should figure out which square is colored in that one given RGB color. Goal of this web application is to teach users how RGB color model works", "https://github.com/Sergej997/JavaScript-Color-Game", [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](0, {
                    img: '../../assets/images/rgb/2.png',
                    description: 'Easy mode'
                }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](1, {
                    img: '../../assets/images/rgb/1.png',
                    description: 'Hard mode'
                }),
                new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](2, {
                    img: '../../assets/images/rgb/3.png',
                    description: 'You win!'
                })
            ], [], '', ["Bootstrap"], "../../assets/images/rgb/Capture.PNG")
        ];
    }
    getProject(title) {
        let projekat = null;
        this.projekti.forEach(element => {
            if (element.title === title) {
                // console.log(title);
                console.log(element);
                projekat = element;
            }
        });
        return projekat;
    }
    getAllProjects() {
        return this.projekti;
    }
}
ProjectsService.ɵfac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(); };
ProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectsService, factory: ProjectsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


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

module.exports = __webpack_require__(/*! c:\Users\Windows HD\Desktop 5\pf\angularPortfolio-main\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map