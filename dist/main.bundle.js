webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_center_video_center_component__ = __webpack_require__("../../../../../src/app/video-center/video-center.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'videos', component: __WEBPACK_IMPORTED_MODULE_3__video_center_video_center_component__["a" /* VideoCenterComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\">Title</a>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\">\n        <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n      </li>\n      <li>\n        <a routerLink=\"/videos\" routerLinkActive=\"active\">PlayList</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__video_center_video_center_component__ = __webpack_require__("../../../../../src/app/video-center/video-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__video_list_video_list_component__ = __webpack_require__("../../../../../src/app/video-list/video-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__video_details_video_details_component__ = __webpack_require__("../../../../../src/app/video-details/video-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__safe_pipe__ = __webpack_require__("../../../../../src/app/safe.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__video_center_video_center_component__["a" /* VideoCenterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__video_list_video_list_component__["a" /* VideoListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__video_details_video_details_component__["a" /* VideoDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__safe_pipe__["a" /* SafePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n\t<h1>Video Player</h1>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'safe' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=safe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/video-center/video-center.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-center/video-center.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-sm-9\">\n\t\t<div *ngIf=\"!hideNewVideo\">\n\t\t\t<h2>New Video</h2>\n\t\t\t<form #form=\"ngForm\" (ngSubmit)=\"onSubmitAddVideo(form.value)\" class=\"well\">\n\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"input\" class=\"form-control\" name=\"title\" placeholder=\"title\" required ngModel>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"input\" class=\"form-control\" name=\"url\" placeholder=\"url\" ngModel required>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<textarea class=\"form-control\" rows=\"5\" name=\"dec\" placeholder=\"description\" ngModel required ></textarea>\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Save</button>\n\t\t\t</form>\n\t\t</div>\n\t\t<video-details (updateVideoEvent)=\"onUpdateVideoEvent($event)\"\n\t\t\t\t\t\t(deleteVideoEvent)=\"onDeleteVideoEvent($event)\"\n\t\t*ngIf=\"selectedVideo && hideNewVideo\" [video]=\"selectedVideo\"></video-details>\n\t</div>\n\t<div class=\"col-sm-3\">\n\t\t<button (click)=\"newVideo()\" style=\"margin-bottom: 2px;\" class=\"btn btn-success btn-block\">+ New Video</button>\n\t\t<video-list (SelectVideo)= \"onSelectVideo($event)\" [videos]=\"videos\"></video-list>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/video-center/video-center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video_service__ = __webpack_require__("../../../../../src/app/video.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoCenterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoCenterComponent = (function () {
    function VideoCenterComponent(_videoService) {
        this._videoService = _videoService;
        this.hideNewVideo = true;
    }
    VideoCenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._videoService.getVideos()
            .subscribe(function (resVideoData) { return _this.videos = resVideoData; });
    };
    VideoCenterComponent.prototype.onSelectVideo = function (video) {
        this.selectedVideo = video;
        this.hideNewVideo = true;
        console.log(this.selectedVideo);
    };
    VideoCenterComponent.prototype.onSubmitAddVideo = function (video) {
        var _this = this;
        this._videoService.addVideo(video)
            .subscribe(function (resNewVideo) {
            _this.videos.push(resNewVideo);
            _this.hideNewVideo = true;
            _this.selectedVideo = resNewVideo;
        });
    };
    VideoCenterComponent.prototype.onDeleteVideoEvent = function (video) {
        var videoArray = this.videos;
        this._videoService.deleteVideo(video)
            .subscribe(function (resDeleteVideo) {
            for (var i = 0; i < videoArray.length; i++) {
                if (videoArray[i]._id === video._id) {
                    videoArray.splice(i, 1);
                }
            }
        });
        this.selectedVideo = null;
    };
    ;
    VideoCenterComponent.prototype.onUpdateVideoEvent = function (video) {
        this._videoService.updateVideo(video)
            .subscribe(function (resUpdateVideo) { return video = resUpdateVideo; });
        this.selectedVideo = null;
    };
    ;
    VideoCenterComponent.prototype.newVideo = function () {
        this.hideNewVideo = false;
    };
    return VideoCenterComponent;
}());
VideoCenterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-video-center',
        template: __webpack_require__("../../../../../src/app/video-center/video-center.component.html"),
        styles: [__webpack_require__("../../../../../src/app/video-center/video-center.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__video_service__["a" /* VideoService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__video_service__["a" /* VideoService */]) === "function" && _a || Object])
], VideoCenterComponent);

var _a;
//# sourceMappingURL=video-center.component.js.map

/***/ }),

/***/ "../../../../../src/app/video-details/video-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-details/video-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div>\n\t\t<iframe width=\"100%\" height=\"300\" [src]=\"video.url | safe\"></iframe>\n\t</div>\n\t<form >\n\n\n\t\t<div *ngIf=\"editTitle\" class=\"form-group\">\n\t\t\t<input type=\"input\" class=\"form-control\" name=\"title\" placeholder=\"title\" [(ngModel)]=\"video.title\" required>\n\t\t</div>\n\t\t<h3 *ngIf=\"!editTitle\" (click)=\"onTitleClick()\">{{video.title}}</h3>\n\t\t<div class=\"form-group\">\n\t\t\t<input type=\"input\" class=\"form-control\" name=\"url\" placeholder=\"url\" [(ngModel)]=\"video.url\" required>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<textarea class=\"form-control\" rows=\"5\" name=\"dec\" placeholder=\"description\" [(ngModel)]=\"video.description\" required></textarea>\n\t\t</div>\n\n\t\t<button type=\"button\" (click)=\"updateVideo()\" class=\"btn btn-primary\">Update</button>\n\t\t<button type=\"button\" (click)=\"deleteVideo()\" class=\"btn btn-danger\">Delete</button>\n\t</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/video-details/video-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoDetailsComponent = (function () {
    function VideoDetailsComponent() {
        this.editTitle = false;
        this.updateVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.deleteVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    VideoDetailsComponent.prototype.ngOnInit = function () {
    };
    VideoDetailsComponent.prototype.ngOnChanges = function () {
        this.editTitle = false;
    };
    VideoDetailsComponent.prototype.onTitleClick = function () {
        this.editTitle = true;
    };
    VideoDetailsComponent.prototype.updateVideo = function () {
        this.updateVideoEvent.emit(this.video);
    };
    VideoDetailsComponent.prototype.deleteVideo = function () {
        this.deleteVideoEvent.emit(this.video);
    };
    return VideoDetailsComponent;
}());
VideoDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'video-details',
        template: __webpack_require__("../../../../../src/app/video-details/video-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/video-details/video-details.component.css")],
        inputs: ['video'],
        outputs: ['updateVideoEvent', 'deleteVideoEvent']
    }),
    __metadata("design:paramtypes", [])
], VideoDetailsComponent);

//# sourceMappingURL=video-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/video-list/video-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-list/video-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-stacked\">\n\t<li (click)=\"onSelect(video)\" *ngFor=\"let video of videos\"><a>{{video.title}}</a></li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/video-list/video-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoListComponent = (function () {
    function VideoListComponent() {
        this.SelectVideo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    VideoListComponent.prototype.ngOnInit = function () {
    };
    VideoListComponent.prototype.onSelect = function (vid) {
        this.SelectVideo.emit(vid);
    };
    return VideoListComponent;
}());
VideoListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'video-list',
        template: __webpack_require__("../../../../../src/app/video-list/video-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/video-list/video-list.component.css")],
        inputs: ['videos'],
        outputs: ['SelectVideo']
    }),
    __metadata("design:paramtypes", [])
], VideoListComponent);

//# sourceMappingURL=video-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/video.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoService = (function () {
    function VideoService(_http) {
        this._http = _http;
        this._getUrl = "/api/videos";
        this._postUrl = "/api/video";
        this._putUrl = "/api/video/";
        this._deleteUrl = "/api/video/";
    }
    VideoService.prototype.getVideos = function () {
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.addVideo = function (video) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.post(this._postUrl, JSON.stringify(video), options)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.updateVideo = function (video) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.put(this._putUrl + video._id, JSON.stringify(video), options)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.deleteVideo = function (video) {
        return this._http.delete(this._deleteUrl + video._id)
            .map(function (response) { return response.json(); });
    };
    return VideoService;
}());
VideoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], VideoService);

var _a;
//# sourceMappingURL=video.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map