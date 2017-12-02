(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng['ngx-google-places-autocomplete'] = global.ng['ngx-google-places-autocomplete'] || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Options = (function () {
    function Options(opt) {
        if (!opt)
            return;
        Object.assign(this, opt);
    }
    return Options;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GooglePlaceDirective = (function () {
    function GooglePlaceDirective(el, ngZone) {
        this.el = el;
        this.ngZone = ngZone;
        this.onAddressChange = new _angular_core.EventEmitter();
    }
    /**
     * @return {?}
     */
    GooglePlaceDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (!this.options)
            this.options = new Options();
        this.initialize();
    };
    /**
     * @return {?}
     */
    GooglePlaceDirective.prototype.isGoogleLibExists = /**
     * @return {?}
     */
    function () {
        return !(!google || !google.maps || !google.maps.places);
    };
    /**
     * @return {?}
     */
    GooglePlaceDirective.prototype.initialize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.autocomplete != null) {
            google.maps.event.trigger(this.autocomplete, 'remove');
            this.autocomplete = null;
            this.eventListener = null;
        }
        if (!this.isGoogleLibExists())
            throw new Error("Google maps library can not be found");
        this.autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement, this.options);
        if (!this.autocomplete)
            throw new Error("Autocomplete is not initialized");
        this.eventListener = this.autocomplete.addListener('place_changed', function () {
            _this.handleChangeEvent();
        });
    };
    /**
     * @return {?}
     */
    GooglePlaceDirective.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.initialize();
    };
    /**
     * @return {?}
     */
    GooglePlaceDirective.prototype.handleChangeEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.place = _this.autocomplete.getPlace();
            if (_this.place && _this.place.place_id) {
                _this.onAddressChange.emit(_this.place);
            }
        });
    };
    GooglePlaceDirective.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[ngx-google-places-autocomplete]',
                    exportAs: 'ngx-places'
                },] },
    ];
    /** @nocollapse */
    GooglePlaceDirective.ctorParameters = function () { return [
        { type: _angular_core.ElementRef, },
        { type: _angular_core.NgZone, },
    ]; };
    GooglePlaceDirective.propDecorators = {
        "options": [{ type: _angular_core.Input, args: ['options',] },],
        "onAddressChange": [{ type: _angular_core.Output },],
    };
    return GooglePlaceDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GooglePlaceModule = (function () {
    function GooglePlaceModule() {
    }
    GooglePlaceModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [GooglePlaceDirective],
                    exports: [GooglePlaceDirective]
                },] },
    ];
    /** @nocollapse */
    GooglePlaceModule.ctorParameters = function () { return []; };
    return GooglePlaceModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

exports.GooglePlaceModule = GooglePlaceModule;
exports.GooglePlaceDirective = GooglePlaceDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
