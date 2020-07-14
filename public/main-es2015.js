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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _components_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/lobby/lobby.component */ "./src/app/components/lobby/lobby.component.ts");
/* harmony import */ var _components_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/chat-window/chat-window.component */ "./src/app/components/chat-window/chat-window.component.ts");
/* harmony import */ var _services_session_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/session-manager.service */ "./src/app/services/session-manager.service.ts");








const routes = [
    { path: '', component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"] },
    { path: 'lobby', component: _components_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_3__["LobbyComponent"], canActivate: [_services_session_manager_service__WEBPACK_IMPORTED_MODULE_5__["SessionManagerService"]] },
    { path: 'chat/:user', component: _components_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_4__["ChatWindowComponent"], canActivate: [_services_session_manager_service__WEBPACK_IMPORTED_MODULE_5__["SessionManagerService"]] },
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
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/theme.service */ "./src/app/services/theme.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = function (a0, a1) { return { "dark-theme": a0, "ligth-theme": a1 }; };
class AppComponent {
    constructor(themeService) {
        this.themeService = themeService;
        this.title = 'angular-chat';
        this.darkTheme = true;
    }
    ngOnInit() {
        this.themeService.toggleTheme.subscribe(data => {
            this.darkTheme = !this.darkTheme;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]])], decls: 2, vars: 4, consts: [[1, "main-component", 3, "ngClass"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.darkTheme == true, ctx.darkTheme == false));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".main-component[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbi9QZXJzb25hbC9jaGF0LWFuZ3VsYXItbm9kZWpzL2FuZ3VsYXItY2hhdC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb21wb25lbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn0iLCIubWFpbi1jb21wb25lbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                providers: [_services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]]
            }]
    }], function () { return [{ type: _services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"] }]; }, null); })();


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
/* harmony import */ var ng_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-material-icon */ "./node_modules/ng-material-icon/__ivy_ngcc__/fesm2015/ng-material-icon.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/message/message.component */ "./src/app/components/message/message.component.ts");
/* harmony import */ var _components_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/chat-window/chat-window.component */ "./src/app/components/chat-window/chat-window.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _components_message_scroll_message_scroll_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/message-scroll/message-scroll.component */ "./src/app/components/message-scroll/message-scroll.component.ts");
/* harmony import */ var _directives_add_component_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/add-component.directive */ "./src/app/directives/add-component.directive.ts");
/* harmony import */ var _components_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/lobby/lobby.component */ "./src/app/components/lobby/lobby.component.ts");
/* harmony import */ var _components_toggle_theme_icon_toggle_theme_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/toggle-theme-icon/toggle-theme-icon.component */ "./src/app/components/toggle-theme-icon/toggle-theme-icon.component.ts");
/* harmony import */ var _services_session_manager_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/session-manager.service */ "./src/app/services/session-manager.service.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_session_manager_service__WEBPACK_IMPORTED_MODULE_12__["SessionManagerService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ng_material_icon__WEBPACK_IMPORTED_MODULE_2__["NgMaterialIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"],
        _components_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_6__["ChatWindowComponent"],
        _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
        _components_message_scroll_message_scroll_component__WEBPACK_IMPORTED_MODULE_8__["MessageScrollComponent"],
        _directives_add_component_directive__WEBPACK_IMPORTED_MODULE_9__["AddComponentDirective"],
        _components_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_10__["LobbyComponent"],
        _components_toggle_theme_icon_toggle_theme_icon_component__WEBPACK_IMPORTED_MODULE_11__["ToggleThemeIconComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ng_material_icon__WEBPACK_IMPORTED_MODULE_2__["NgMaterialIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"],
                    _components_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_6__["ChatWindowComponent"],
                    _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
                    _components_message_scroll_message_scroll_component__WEBPACK_IMPORTED_MODULE_8__["MessageScrollComponent"],
                    _directives_add_component_directive__WEBPACK_IMPORTED_MODULE_9__["AddComponentDirective"],
                    _components_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_10__["LobbyComponent"],
                    _components_toggle_theme_icon_toggle_theme_icon_component__WEBPACK_IMPORTED_MODULE_11__["ToggleThemeIconComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    ng_material_icon__WEBPACK_IMPORTED_MODULE_2__["NgMaterialIconModule"]
                ],
                providers: [_services_session_manager_service__WEBPACK_IMPORTED_MODULE_12__["SessionManagerService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/chat-window/chat-window.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/chat-window/chat-window.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChatWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWindowComponent", function() { return ChatWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-material-icon */ "./node_modules/ng-material-icon/__ivy_ngcc__/fesm2015/ng-material-icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _toggle_theme_icon_toggle_theme_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toggle-theme-icon/toggle-theme-icon.component */ "./src/app/components/toggle-theme-icon/toggle-theme-icon.component.ts");
/* harmony import */ var _message_scroll_message_scroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../message-scroll/message-scroll.component */ "./src/app/components/message-scroll/message-scroll.component.ts");








const _c0 = ["messageInput"];
function ChatWindowComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.typingMessage);
} }
class ChatWindowComponent {
    constructor(socketService, route, router) {
        this.socketService = socketService;
        this.route = route;
        this.router = router;
        this.userTyping = false;
        this.typingMessage = 'escribiendo...';
        this.socketService.socket.on('typing', username => {
            if (this.username == username) {
                this.userTyping = true;
            }
        });
        this.socketService.socket.on('stop typing', username => {
            if (this.username == username) {
                this.userTyping = false;
            }
        });
    }
    ngOnInit() {
        this.input.nativeElement.focus();
        this.route.params.subscribe((params) => {
            this.username = params.user;
        });
        this.socketService.currentConversation = this.username;
    }
    toLobby() {
        this.router.navigate(['lobby']);
    }
    typing() {
        this.socketService.socket.emit('typing', this.username);
    }
    stopTyping() {
        this.socketService.socket.emit('stop typing', this.username);
    }
    sendMessage(message) {
        this.socketService.socket.emit('stop typing', this.username);
        this.socketService.sendMessage(this.username, message);
        this.input.nativeElement.value = '';
    }
}
ChatWindowComponent.ɵfac = function ChatWindowComponent_Factory(t) { return new (t || ChatWindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ChatWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatWindowComponent, selectors: [["app-chat-window"]], viewQuery: function ChatWindowComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, decls: 16, vars: 3, consts: [[1, "chat-container"], [1, "header"], [1, "icon-container", "left", 3, "click"], ["icon", "arrow_back", "size", "2"], [1, "username-area"], [1, "username"], ["class", "typing-message", 4, "ngIf"], [1, "icon-container", "rigth"], [1, "chat", 3, "fromUser"], [1, "writter"], ["type", "text", "placeholder", "Mensaje", 1, "textbox", 3, "keyup.enter", "input", "blur"], ["messageInput", ""], [1, "send-message", 3, "click"], ["icon", "send", "size", "2"], [1, "typing-message"]], template: function ChatWindowComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatWindowComponent_Template_div_click_2_listener() { return ctx.toLobby(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ng-material-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatWindowComponent_span_7_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-toggle-theme-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-message-scroll", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "footer", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ChatWindowComponent_Template_input_keyup_enter_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx.sendMessage(_r1.value); })("input", function ChatWindowComponent_Template_input_input_12_listener() { return ctx.typing(); })("blur", function ChatWindowComponent_Template_input_blur_12_listener() { return ctx.stopTyping(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatWindowComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx.sendMessage(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ng-material-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userTyping);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fromUser", ctx.username);
    } }, directives: [ng_material_icon__WEBPACK_IMPORTED_MODULE_3__["NgMaterialIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _toggle_theme_icon_toggle_theme_icon_component__WEBPACK_IMPORTED_MODULE_5__["ToggleThemeIconComponent"], _message_scroll_message_scroll_component__WEBPACK_IMPORTED_MODULE_6__["MessageScrollComponent"]], styles: [".chat-container[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 100%;\n  grid-template-rows: 50px 1fr 45px;\n  grid-template-areas: \"header\" \"chat\" \"writter\";\n}\n.chat-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-area: header;\n  background-color: var(--accent);\n  grid-template-columns: 40px auto 40px;\n  grid-template-rows: auto;\n  grid-template-areas: \"back-button username more\";\n  align-items: center;\n  color: white;\n}\n.chat-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .username-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.chat-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .username-area[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 300;\n  justify-self: center;\n}\n.chat-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .username-area[_ngcontent-%COMP%]   .typing-message[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 200;\n  color: #c5c5c5;\n}\n.chat-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  justify-self: center;\n}\n.chat-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .icon-container.left[_ngcontent-%COMP%] {\n  grid-area: back-button;\n  cursor: pointer;\n}\n.chat-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .icon-container.rigth[_ngcontent-%COMP%] {\n  grid-area: more;\n}\n.chat-container[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n  grid-area: chat;\n  overflow: hidden;\n}\n.chat-container[_ngcontent-%COMP%]   .writter[_ngcontent-%COMP%] {\n  grid-area: writter;\n  display: grid;\n  align-items: center;\n  grid-template-columns: auto 45px;\n  grid-row: 100%;\n  box-sizing: border-box;\n  background-color: var(--background-accent);\n  grid-template-areas: \"text-area send\";\n}\n.chat-container[_ngcontent-%COMP%]   .textbox[_ngcontent-%COMP%] {\n  grid-area: text-area;\n  font-size: 1.1rem;\n  padding-left: 5px;\n  background-color: transparent;\n  border: none;\n  color: var(--text);\n}\n.chat-container[_ngcontent-%COMP%]   .textbox[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.chat-container[_ngcontent-%COMP%]   .send-message[_ngcontent-%COMP%] {\n  grid-area: send;\n  justify-self: end;\n  height: 43px;\n  width: 43px;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  color: var(--accent);\n  line-height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbi9QZXJzb25hbC9jaGF0LWFuZ3VsYXItbm9kZWpzL2FuZ3VsYXItY2hhdC9zcmMvYXBwL2NvbXBvbmVudHMvY2hhdC13aW5kb3cvY2hhdC13aW5kb3cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC13aW5kb3cvY2hhdC13aW5kb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSw4Q0FDRTtBQ0FKO0FER0U7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0RKO0FERUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNBTjtBRENNO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDQ1I7QURDTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ1I7QURFSTtFQUNFLG9CQUFBO0FDQU47QURDTTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQ0NSO0FEQ007RUFDRSxlQUFBO0FDQ1I7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0RKO0FER0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsMENBQUE7RUFDQSxxQ0FBQTtBQ0RKO0FER0U7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0RKO0FERUk7RUFDRSxhQUFBO0FDQU47QURHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXdpbmRvdy9jaGF0LXdpbmRvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnIgNDVweDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgXCJoZWFkZXJcIlxuICAgIFwiY2hhdFwiXG4gICAgXCJ3cml0dGVyXCI7XG4gIC5oZWFkZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCBhdXRvIDQwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYmFjay1idXR0b24gdXNlcm5hbWUgbW9yZVwiO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC51c2VybmFtZS1hcmVhIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLnVzZXJuYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnR5cGluZy1tZXNzYWdlIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIGNvbG9yOiAjYzVjNWM1O1xuICAgICAgfVxuICAgIH1cbiAgICAuaWNvbi1jb250YWluZXJ7XG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICYubGVmdCB7XG4gICAgICAgIGdyaWQtYXJlYTogYmFjay1idXR0b247XG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgfVxuICAgICAgJi5yaWd0aCB7XG4gICAgICAgIGdyaWQtYXJlYTogbW9yZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmNoYXR7XG4gICAgZ3JpZC1hcmVhOiBjaGF0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLndyaXR0ZXIge1xuICAgIGdyaWQtYXJlYTogd3JpdHRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDQ1cHg7XG4gICAgZ3JpZC1yb3c6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWFjY2VudCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJ0ZXh0LWFyZWEgc2VuZFwiO1xuICB9XG4gIC50ZXh0Ym94IHtcbiAgICBncmlkLWFyZWE6IHRleHQtYXJlYTtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgICY6Zm9jdXN7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgfVxuICAuc2VuZC1tZXNzYWdlIHtcbiAgICBncmlkLWFyZWE6IHNlbmQ7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgaGVpZ2h0OiA0M3B4O1xuICAgIHdpZHRoOiA0M3B4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gIH1cbn0iLCIuY2hhdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmciA0NXB4O1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImhlYWRlclwiIFwiY2hhdFwiIFwid3JpdHRlclwiO1xufVxuLmNoYXQtY29udGFpbmVyIC5oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IGF1dG8gNDBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImJhY2stYnV0dG9uIHVzZXJuYW1lIG1vcmVcIjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNoYXQtY29udGFpbmVyIC5oZWFkZXIgLnVzZXJuYW1lLWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNoYXQtY29udGFpbmVyIC5oZWFkZXIgLnVzZXJuYW1lLWFyZWEgLnVzZXJuYW1lIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuLmNoYXQtY29udGFpbmVyIC5oZWFkZXIgLnVzZXJuYW1lLWFyZWEgLnR5cGluZy1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGNvbG9yOiAjYzVjNWM1O1xufVxuLmNoYXQtY29udGFpbmVyIC5oZWFkZXIgLmljb24tY29udGFpbmVyIHtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG4uY2hhdC1jb250YWluZXIgLmhlYWRlciAuaWNvbi1jb250YWluZXIubGVmdCB7XG4gIGdyaWQtYXJlYTogYmFjay1idXR0b247XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jaGF0LWNvbnRhaW5lciAuaGVhZGVyIC5pY29uLWNvbnRhaW5lci5yaWd0aCB7XG4gIGdyaWQtYXJlYTogbW9yZTtcbn1cbi5jaGF0LWNvbnRhaW5lciAuY2hhdCB7XG4gIGdyaWQtYXJlYTogY2hhdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jaGF0LWNvbnRhaW5lciAud3JpdHRlciB7XG4gIGdyaWQtYXJlYTogd3JpdHRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDQ1cHg7XG4gIGdyaWQtcm93OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWFjY2VudCk7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwidGV4dC1hcmVhIHNlbmRcIjtcbn1cbi5jaGF0LWNvbnRhaW5lciAudGV4dGJveCB7XG4gIGdyaWQtYXJlYTogdGV4dC1hcmVhO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cbi5jaGF0LWNvbnRhaW5lciAudGV4dGJveDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uY2hhdC1jb250YWluZXIgLnNlbmQtbWVzc2FnZSB7XG4gIGdyaWQtYXJlYTogc2VuZDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGhlaWdodDogNDNweDtcbiAgd2lkdGg6IDQzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIGxpbmUtaGVpZ2h0OiAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatWindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-window',
                templateUrl: './chat-window.component.html',
                styleUrls: ['./chat-window.component.scss']
            }]
    }], function () { return [{ type: src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['messageInput', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/lobby/lobby.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/lobby/lobby.component.ts ***!
  \*****************************************************/
/*! exports provided: LobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobbyComponent", function() { return LobbyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/history.service */ "./src/app/services/history.service.ts");
/* harmony import */ var _toggle_theme_icon_toggle_theme_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toggle-theme-icon/toggle-theme-icon.component */ "./src/app/components/toggle-theme-icon/toggle-theme-icon.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function LobbyComponent_div_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usernameOfList_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.historyNotifications[usernameOfList_r2]);
} }
function LobbyComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LobbyComponent_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const usernameOfList_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.messageTo(usernameOfList_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LobbyComponent_div_7_span_3_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usernameOfList_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@", usernameOfList_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.historyNotifications[usernameOfList_r2]);
} }
function LobbyComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.lobbyEmptyMessage, " ");
} }
class LobbyComponent {
    constructor(socketService, router, history) {
        this.socketService = socketService;
        this.router = router;
        this.history = history;
        this.userlist = [];
        this.historyNotifications = {};
        this.lobbyEmptyMessage = ':( Lo sentimos, no hay más usuarios, invita a tus amigos a unirse';
        this.userlist = socketService.usersList;
        this.socket = socketService.socket;
        history.notifications.on('one unread more', username => {
            this.historyNotifications[username] = (this.historyNotifications[username] || 0) + 1;
        });
        history.notifications.on('all readed', username => {
            delete (this.historyNotifications[username]);
        });
    }
    ngOnInit() {
        this.socketService.currentConversation = '';
    }
    messageTo(username) {
        this.router.navigate(['chat', username]);
    }
}
LobbyComponent.ɵfac = function LobbyComponent_Factory(t) { return new (t || LobbyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"])); };
LobbyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LobbyComponent, selectors: [["app-lobby"]], decls: 9, vars: 2, consts: [[1, "lobby-container"], [1, "header"], [1, "title"], [1, "icon-container"], [1, "userlist"], ["class", "user-element", 3, "click", 4, "ngFor", "ngForOf"], ["class", "nobody-at-lobby", 4, "ngIf"], [1, "user-element", 3, "click"], [1, "username"], ["class", "notification", 4, "ngIf"], [1, "notification"], [1, "nobody-at-lobby"]], template: function LobbyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Angular Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-toggle-theme-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LobbyComponent_div_7_Template, 4, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LobbyComponent_span_8_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userlist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userlist.length);
    } }, directives: [_toggle_theme_icon_toggle_theme_icon_component__WEBPACK_IMPORTED_MODULE_4__["ToggleThemeIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".lobby-container[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  width: 100%;\n  grid-template-columns: 100%;\n  grid-template-rows: 50px auto;\n  grid-template-areas: \"nav\" \"list\";\n}\n.lobby-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-area: nav;\n  background-color: var(--accent);\n  grid-template-columns: auto 40px;\n  grid-template-rows: auto;\n  grid-template-areas: \"title theme-action\";\n  align-items: center;\n  color: white;\n}\n.lobby-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  grid-area: title;\n  padding-left: 10px;\n  font-size: 1.2rem;\n  font-weight: 300;\n  box-sizing: border-box;\n}\n.lobby-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  grid-area: theme-action;\n}\n.lobby-container[_ngcontent-%COMP%]   .userlist[_ngcontent-%COMP%] {\n  grid-area: list;\n  height: 100%;\n  overflow-y: scroll;\n  background-color: var(--background);\n}\n.lobby-container[_ngcontent-%COMP%]   .userlist[_ngcontent-%COMP%]   .user-element[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  height: 40px;\n  align-items: center;\n  cursor: pointer;\n  color: var(--text);\n}\n.lobby-container[_ngcontent-%COMP%]   .userlist[_ngcontent-%COMP%]   .user-element[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  padding: 5px;\n  box-sizing: border-box;\n}\n.lobby-container[_ngcontent-%COMP%]   .userlist[_ngcontent-%COMP%]   .user-element[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  background-color: var(--warning);\n  height: 25px;\n  width: 25px;\n  text-align: center;\n  line-height: 25px;\n  margin-right: 10px;\n  border-radius: 50%;\n  color: white;\n}\n.lobby-container[_ngcontent-%COMP%]   .userlist[_ngcontent-%COMP%]   .user-element[_ngcontent-%COMP%]:hover {\n  background-color: var(--secondary-accent);\n}\n.lobby-container[_ngcontent-%COMP%]   .userlist[_ngcontent-%COMP%]   .nobody-at-lobby[_ngcontent-%COMP%] {\n  color: var(--text);\n  height: 100%;\n  width: 100%;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbi9QZXJzb25hbC9jaGF0LWFuZ3VsYXItbm9kZWpzL2FuZ3VsYXItY2hhdC9zcmMvYXBwL2NvbXBvbmVudHMvbG9iYnkvbG9iYnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9iYnkvbG9iYnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUNBQ0U7QUNBSjtBREVFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKO0FEQ0k7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDQ047QURDSTtFQUNFLHVCQUFBO0FDQ047QURFRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtBQ0FKO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ047QURBTTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtBQ0VSO0FEQU07RUFDRSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRVI7QURBTTtFQUNFLHlDQUFBO0FDRVI7QURDSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2JieS9sb2JieS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2JieS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICBcIm5hdlwiXG4gICAgXCJsaXN0XCI7XG4gIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiBuYXY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNDBweDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJ0aXRsZSB0aGVtZS1hY3Rpb25cIjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAudGl0bGUge1xuICAgICAgZ3JpZC1hcmVhOiB0aXRsZTtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICAgIC5pY29uLWNvbnRhaW5lcntcbiAgICAgIGdyaWQtYXJlYTogdGhlbWUtYWN0aW9uO1xuICAgIH1cbiAgfVxuICAudXNlcmxpc3Qge1xuICAgIGdyaWQtYXJlYTogbGlzdDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICAgIC51c2VyLWVsZW1lbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICAgIC51c2VybmFtZSB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYWNjZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLm5vYm9keS1hdC1sb2JieSB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG59IiwiLmxvYmJ5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibmF2XCIgXCJsaXN0XCI7XG59XG4ubG9iYnktY29udGFpbmVyIC5oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IG5hdjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDQwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJ0aXRsZSB0aGVtZS1hY3Rpb25cIjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmxvYmJ5LWNvbnRhaW5lciAuaGVhZGVyIC50aXRsZSB7XG4gIGdyaWQtYXJlYTogdGl0bGU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubG9iYnktY29udGFpbmVyIC5oZWFkZXIgLmljb24tY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiB0aGVtZS1hY3Rpb247XG59XG4ubG9iYnktY29udGFpbmVyIC51c2VybGlzdCB7XG4gIGdyaWQtYXJlYTogbGlzdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xufVxuLmxvYmJ5LWNvbnRhaW5lciAudXNlcmxpc3QgLnVzZXItZWxlbWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG4ubG9iYnktY29udGFpbmVyIC51c2VybGlzdCAudXNlci1lbGVtZW50IC51c2VybmFtZSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5sb2JieS1jb250YWluZXIgLnVzZXJsaXN0IC51c2VyLWVsZW1lbnQgLm5vdGlmaWNhdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmxvYmJ5LWNvbnRhaW5lciAudXNlcmxpc3QgLnVzZXItZWxlbWVudDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1hY2NlbnQpO1xufVxuLmxvYmJ5LWNvbnRhaW5lciAudXNlcmxpc3QgLm5vYm9keS1hdC1sb2JieSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LobbyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lobby',
                templateUrl: './lobby.component.html',
                styleUrls: ['./lobby.component.scss']
            }]
    }], function () { return [{ type: src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/message-scroll/message-scroll.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/message-scroll/message-scroll.component.ts ***!
  \***********************************************************************/
/*! exports provided: MessageScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageScrollComponent", function() { return MessageScrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_directives_add_component_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/directives/add-component.directive */ "./src/app/directives/add-component.directive.ts");
/* harmony import */ var src_app_utils_add_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/add-item */ "./src/app/utils/add-item.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message/message.component */ "./src/app/components/message/message.component.ts");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var src_app_services_history_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/history.service */ "./src/app/services/history.service.ts");








function MessageScrollComponent_ng_template_1_Template(rf, ctx) { }
class MessageScrollComponent {
    constructor(socketService, componentFactoryResolver, history) {
        this.socketService = socketService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.history = history;
        this.socketService.localEmitter.on('local message outcome', data => {
            if (data.username == this.fromUser) {
                const messageObject = {
                    isResponse: false,
                    message: data.message,
                    date: data.date
                };
                this.loadMessageOnView(new src_app_utils_add_item__WEBPACK_IMPORTED_MODULE_2__["AddItem"](_message_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"], messageObject));
                this.history.addMessage(this.fromUser, messageObject, true);
            }
        });
        this.socketService.localEmitter.on('local message income', data => {
            if (data.username == this.fromUser) {
                const messageObject = {
                    isResponse: true,
                    message: data.message,
                    date: data.date
                };
                this.loadMessageOnView(new src_app_utils_add_item__WEBPACK_IMPORTED_MODULE_2__["AddItem"](_message_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"], messageObject));
                this.history.addMessage(this.fromUser, messageObject, true);
            }
        });
    }
    loadMessageOnView(message) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(message.component);
        const viewContainerRef = this.addMessage.viewContainerRef;
        const componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = message.data;
    }
    ngOnInit() {
        let messagesFromHistory = this.history.getHistory(this.fromUser);
        if (messagesFromHistory != undefined) {
            messagesFromHistory.forEach(e => {
                this.loadMessageOnView(new src_app_utils_add_item__WEBPACK_IMPORTED_MODULE_2__["AddItem"](_message_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"], {
                    isResponse: e.isResponse,
                    message: e.message,
                    date: e.date
                }));
            });
        }
    }
    ngOnDestroy() {
        this.socketService.localEmitter.removeAllListeners('local message outcome');
        this.socketService.localEmitter.removeAllListeners('local message income');
    }
}
MessageScrollComponent.ɵfac = function MessageScrollComponent_Factory(t) { return new (t || MessageScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_history_service__WEBPACK_IMPORTED_MODULE_5__["HistoryService"])); };
MessageScrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageScrollComponent, selectors: [["app-message-scroll"]], viewQuery: function MessageScrollComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](src_app_directives_add_component_directive__WEBPACK_IMPORTED_MODULE_1__["AddComponentDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addMessage = _t.first);
    } }, inputs: { fromUser: "fromUser" }, decls: 2, vars: 0, consts: [[1, "message-scroll-container"], ["add-component", ""]], template: function MessageScrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessageScrollComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [src_app_directives_add_component_directive__WEBPACK_IMPORTED_MODULE_1__["AddComponentDirective"]], styles: [".message-scroll-container[_ngcontent-%COMP%] {\n  padding: 5px;\n  overflow-y: scroll;\n  height: 100%;\n  box-sizing: border-box;\n  background-color: var(--background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbi9QZXJzb25hbC9jaGF0LWFuZ3VsYXItbm9kZWpzL2FuZ3VsYXItY2hhdC9zcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZS1zY3JvbGwvbWVzc2FnZS1zY3JvbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZS1zY3JvbGwvbWVzc2FnZS1zY3JvbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlLXNjcm9sbC9tZXNzYWdlLXNjcm9sbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlLXNjcm9sbC1jb250YWluZXIge1xuICBwYWRkaW5nOiA1cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbn0iLCIubWVzc2FnZS1zY3JvbGwtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageScrollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-message-scroll',
                templateUrl: './message-scroll.component.html',
                styleUrls: ['./message-scroll.component.scss']
            }]
    }], function () { return [{ type: src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: src_app_services_history_service__WEBPACK_IMPORTED_MODULE_5__["HistoryService"] }]; }, { fromUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [src_app_directives_add_component_directive__WEBPACK_IMPORTED_MODULE_1__["AddComponentDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/message/message.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/message/message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MessageComponent {
}
MessageComponent.ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(); };
MessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageComponent, selectors: [["app-message"]], inputs: { data: "data" }, decls: 6, vars: 4, consts: [[1, "message-container"], [1, "message"], [1, "message-content"], [1, "date"]], template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("response", ctx.data.isResponse == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.date);
    } }, styles: [".message-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  margin: 5px 0;\n}\n.message-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(55px, auto) 40px;\n  grid-template-rows: auto;\n  grid-template-areas: \"message date\";\n  grid-gap: 5px;\n  background-color: var(--secondary);\n  border-radius: 3px;\n  max-width: 85%;\n  min-width: 100px;\n  box-shadow: 0 0 1px darkslategrey;\n}\n.message-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  grid-area: message;\n  color: var(--text);\n  margin: 2px 5px;\n}\n.message-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  grid-area: date;\n  font-size: 0.8em;\n  font-weight: 300;\n  color: var(--text-secondary);\n  align-self: end;\n  margin-bottom: 2px;\n  margin-right: 2px;\n  justify-self: end;\n}\n.message-container.response[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.message-container.response[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  background-color: var(--secondary-accent);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbi9QZXJzb25hbC9jaGF0LWFuZ3VsYXItbm9kZWpzL2FuZ3VsYXItY2hhdC9zcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSw4Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FDRUo7QURESTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDR047QURESTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDR047QURBRTtFQUNFLDJCQUFBO0FDRUo7QURESTtFQUNFLHlDQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgLm1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoNTVweCwgYXV0bykgNDBweDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJtZXNzYWdlIGRhdGVcIjtcbiAgICBncmlkLWdhcDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1heC13aWR0aDogODUlO1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCBkYXJrc2xhdGVncmV5O1xuICAgIC5tZXNzYWdlLWNvbnRlbnQge1xuICAgICAgZ3JpZC1hcmVhOiBtZXNzYWdlO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgICAgbWFyZ2luOiAycHggNXB4O1xuICAgIH1cbiAgICAuZGF0ZSB7XG4gICAgICBncmlkLWFyZWE6IGRhdGU7XG4gICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIH1cbiAgfVxuICAmLnJlc3BvbnNlIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgLm1lc3NhZ2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWFjY2VudCk7XG4gICAgfVxuICB9XG59IiwiLm1lc3NhZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW46IDVweCAwO1xufVxuLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoNTVweCwgYXV0bykgNDBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm1lc3NhZ2UgZGF0ZVwiO1xuICBncmlkLWdhcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1heC13aWR0aDogODUlO1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMXB4IGRhcmtzbGF0ZWdyZXk7XG59XG4ubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UgLm1lc3NhZ2UtY29udGVudCB7XG4gIGdyaWQtYXJlYTogbWVzc2FnZTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBtYXJnaW46IDJweCA1cHg7XG59XG4ubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UgLmRhdGUge1xuICBncmlkLWFyZWE6IGRhdGU7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG4ubWVzc2FnZS1jb250YWluZXIucmVzcG9uc2Uge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ubWVzc2FnZS1jb250YWluZXIucmVzcG9uc2UgLm1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYWNjZW50KTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-message',
                template: `
  <div [class.response]="this.data.isResponse == true" class="message-container">
    <div class="message">
      <p class="message-content">{{data.message}}</p>
      <span class="date">{{data.date}}</span>
    </div>
  </div>
  `,
                styleUrls: ['./message.component.scss']
            }]
    }], null, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/toggle-theme-icon/toggle-theme-icon.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/toggle-theme-icon/toggle-theme-icon.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ToggleThemeIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleThemeIconComponent", function() { return ToggleThemeIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/theme.service */ "./src/app/services/theme.service.ts");
/* harmony import */ var ng_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-material-icon */ "./node_modules/ng-material-icon/__ivy_ngcc__/fesm2015/ng-material-icon.js");




class ToggleThemeIconComponent {
    constructor(themeService) {
        this.themeService = themeService;
    }
    toggleTheme() {
        this.themeService.toggleTheme.emit('toggle');
    }
}
ToggleThemeIconComponent.ɵfac = function ToggleThemeIconComponent_Factory(t) { return new (t || ToggleThemeIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"])); };
ToggleThemeIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleThemeIconComponent, selectors: [["app-toggle-theme-icon"]], decls: 2, vars: 0, consts: [[1, "toggle-theme-icon-container", 3, "click"], ["icon", "brightness_medium", "size", "2"]], template: function ToggleThemeIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleThemeIconComponent_Template_div_click_0_listener() { return ctx.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ng-material-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_material_icon__WEBPACK_IMPORTED_MODULE_2__["NgMaterialIconComponent"]], styles: [".toggle-theme-icon-container[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  cursor: pointer;\n  height: 40px;\n  width: 40px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: var(--text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbi9QZXJzb25hbC9jaGF0LWFuZ3VsYXItbm9kZWpzL2FuZ3VsYXItY2hhdC9zcmMvYXBwL2NvbXBvbmVudHMvdG9nZ2xlLXRoZW1lLWljb24vdG9nZ2xlLXRoZW1lLWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdG9nZ2xlLXRoZW1lLWljb24vdG9nZ2xlLXRoZW1lLWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9nZ2xlLXRoZW1lLWljb24vdG9nZ2xlLXRoZW1lLWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9nZ2xlLXRoZW1lLWljb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59IiwiLnRvZ2dsZS10aGVtZS1pY29uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleThemeIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toggle-theme-icon',
                templateUrl: './toggle-theme-icon.component.html',
                styleUrls: ['./toggle-theme-icon.component.scss']
            }]
    }], function () { return [{ type: src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/welcome/welcome.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _toggle_theme_icon_toggle_theme_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toggle-theme-icon/toggle-theme-icon.component */ "./src/app/components/toggle-theme-icon/toggle-theme-icon.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function WelcomeComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
} }
class WelcomeComponent {
    constructor(socketService, router) {
        this.router = router;
        this.error = false;
        this.errorMessage = 'Nombre de usuario no dispobnible';
        this.socket = socketService.socket;
    }
    ngOnInit() {
        this.socket.on('sign in', () => {
            this.error = false;
        });
        this.socket.on('username not available', () => {
            this.error = true;
        });
    }
    sendUsername(username) {
        this.socket.emit('add user', username);
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 9, vars: 1, consts: [[1, "welcome-container"], [1, "icon-container"], [1, "textarea"], [1, "welcome-title"], ["type", "text", 1, "username-input", 3, "keyup.enter"], ["usernameInput", ""], ["class", "error", 4, "ngIf"], [1, "error"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-toggle-theme-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ingresa tu usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function WelcomeComponent_Template_input_keyup_enter_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.sendUsername(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WelcomeComponent_span_8_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_toggle_theme_icon_toggle_theme_icon_component__WEBPACK_IMPORTED_MODULE_3__["ToggleThemeIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".welcome-container[_ngcontent-%COMP%] {\n  display: grid;\n  position: relative;\n  align-items: center;\n  justify-items: center;\n  height: 100%;\n  width: 100%;\n  background-color: var(--background);\n}\n.welcome-container[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%] {\n  color: var(--text);\n}\n.welcome-container[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.welcome-container[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]   .username-input[_ngcontent-%COMP%] {\n  background-color: transparent;\n  font-size: 1.3rem;\n  margin-top: 15px;\n  font-weight: 200;\n  padding-bottom: 2px;\n  border: none;\n  border-bottom: 1px solid var(--text-secondary);\n  color: var(--text);\n}\n.welcome-container[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]   .username-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.welcome-container[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.welcome-container[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n}\n.welcome-container[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.welcome-container[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbi9QZXJzb25hbC9jaGF0LWFuZ3VsYXItbm9kZWpzL2FuZ3VsYXItY2hhdC9zcmMvYXBwL2NvbXBvbmVudHMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0FDRUo7QURESTtFQUNFLGlCQUFBO0FDR047QURESTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtBQ0dOO0FERk07RUFDRSxhQUFBO0FDSVI7QURESTtFQUNFLGdCQUFBO0FDR047QURESTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0dOO0FEQUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FDRUo7QURBRTtFQUNFLHFCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZ3JpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICAudGV4dGFyZWEge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICAud2VsY29tZS10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG4gICAgLnVzZXJuYW1lLWlucHV0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgICAgJjpmb2N1c3tcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmVycm9yIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgICYgKiB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbiAgLmljb24tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIC5lcnJvciB7XG4gICAgY29sb3I6IHZhcigtLXdhcm5pbmcpXG4gIH1cbn0iLCIud2VsY29tZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG59XG4ud2VsY29tZS1jb250YWluZXIgLnRleHRhcmVhIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuLndlbGNvbWUtY29udGFpbmVyIC50ZXh0YXJlYSAud2VsY29tZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLndlbGNvbWUtY29udGFpbmVyIC50ZXh0YXJlYSAudXNlcm5hbWUtaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuLndlbGNvbWUtY29udGFpbmVyIC50ZXh0YXJlYSAudXNlcm5hbWUtaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLndlbGNvbWUtY29udGFpbmVyIC50ZXh0YXJlYSAuZXJyb3Ige1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLndlbGNvbWUtY29udGFpbmVyIC50ZXh0YXJlYSAqIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi53ZWxjb21lLWNvbnRhaW5lciAuaWNvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59XG4ud2VsY29tZS1jb250YWluZXIgLmVycm9yIHtcbiAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.scss']
            }]
    }], function () { return [{ type: src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/directives/add-component.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/add-component.directive.ts ***!
  \*******************************************************/
/*! exports provided: AddComponentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponentDirective", function() { return AddComponentDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AddComponentDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
AddComponentDirective.ɵfac = function AddComponentDirective_Factory(t) { return new (t || AddComponentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
AddComponentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AddComponentDirective, selectors: [["", "add-component", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddComponentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[add-component]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/history.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/history.service.ts ***!
  \*********************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);



class HistoryService {
    constructor() {
        this._messages = {};
        this.notifications = new events__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    addMessage(fromUser, message, readed = false) {
        this._messages[fromUser] = this._messages[fromUser] || [];
        this._messages[fromUser].push(message);
        if (!readed) {
            this.notifications.emit('one unread more', fromUser);
        }
    }
    getHistory(fromUser) {
        const history = this._messages[fromUser] || undefined;
        this.notifications.emit('all readed', fromUser);
        return history;
    }
}
HistoryService.ɵfac = function HistoryService_Factory(t) { return new (t || HistoryService)(); };
HistoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HistoryService, factory: HistoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/session-manager.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/session-manager.service.ts ***!
  \*****************************************************/
/*! exports provided: SessionManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionManagerService", function() { return SessionManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class SessionManagerService {
    constructor(router) {
        this.router = router;
        this._session = false;
    }
    canActivate() {
        if (!this._session) {
            this.router.navigateByUrl('/');
        }
        return true;
    }
    upSession() {
        this._session = true;
    }
}
SessionManagerService.ɵfac = function SessionManagerService_Factory(t) { return new (t || SessionManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SessionManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionManagerService, factory: SessionManagerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _session_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session-manager.service */ "./src/app/services/session-manager.service.ts");
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history.service */ "./src/app/services/history.service.ts");







class SocketService {
    constructor(_router, _session, _history) {
        this._router = _router;
        this._session = _session;
        this._history = _history;
        this._hasSession = false;
        this._username = '';
        this._usersList = [];
        this._currentConversation = '';
        this._socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()();
        this._localEmmiter = new events__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this._socket.on('sign in', data => {
            this._username = data.username;
            this._usersList = data.usersList;
            this._hasSession = true;
            this._session.upSession();
            this._router.navigate(['lobby']);
        });
        this._socket.on('user added', username => {
            this._usersList.push(username);
        });
        this._socket.on('user left', username => {
            let index = this._usersList.findIndex(e => e == username);
            this._usersList.splice(index, 1);
        });
        this._socket.on('incoming message', data => {
            const messageData = {
                isResponse: true,
                message: data.message,
                date: data.date
            };
            if (data.username != this._currentConversation) {
                this._history.addMessage(data.username, messageData);
            }
            else {
                this._localEmmiter.emit('local message income', data);
            }
        });
    }
    get socket() {
        return this._socket;
    }
    get localEmitter() {
        return this._localEmmiter;
    }
    get usersList() {
        return this._usersList;
    }
    get currentConversation() {
        return this._currentConversation;
    }
    set currentConversation(value) {
        this._currentConversation = value;
    }
    sendMessage(username, message) {
        const now = new Date();
        const nowHour = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        let messageData = {
            username,
            message,
            date: nowHour
        };
        this._socket.emit('message', messageData);
        messageData['isResponse'] = false;
        this._localEmmiter.emit('local message outcome', messageData);
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_session_manager_service__WEBPACK_IMPORTED_MODULE_4__["SessionManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_history_service__WEBPACK_IMPORTED_MODULE_5__["HistoryService"])); };
SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _session_manager_service__WEBPACK_IMPORTED_MODULE_4__["SessionManagerService"] }, { type: _history_service__WEBPACK_IMPORTED_MODULE_5__["HistoryService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/theme.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ThemeService {
    constructor() {
        this.toggleTheme = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/utils/add-item.ts":
/*!***********************************!*\
  !*** ./src/app/utils/add-item.ts ***!
  \***********************************/
/*! exports provided: AddItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItem", function() { return AddItem; });
class AddItem {
    constructor(component, data) {
        this.component = component;
        this.data = data;
    }
}


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
const environment = {
    wsHost: 'http://localhost:5000',
    production: false
};


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

module.exports = __webpack_require__(/*! /Users/aaron/Personal/chat-angular-nodejs/angular-chat/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map