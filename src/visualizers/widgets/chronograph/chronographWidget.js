/*globals define, WebGMEGlobal*/
/*jshint browser: true*/

/**
 * Generated by VisualizerGenerator 1.7.0 from webgme on Fri Dec 15 2017 17:08:10 GMT+0000 (UTC).
 */

define(['css!./styles/chronographWidget.css'], function () {
    'use strict';

    var chronographWidget,
        WIDGET_CLASS = 'chronograph';

    chronographWidget = function (logger, container) {
        this._logger = logger.fork('Widget');

        this._el = container;
        this._el.css({
            padding: '0'
        });

        this.nodes = {};
        this._initialize();

        this._logger.debug('ctor finished');
    };

    chronographWidget.prototype._initialize = function () {
        var width = this._el.width(),
            height = this._el.height(),
            self = this;

        // set widget class
        //this._el.addClass(WIDGET_CLASS);

        // Create a dummy header 
        //this._el.append('<h3>chronograph Events:</h3>');

        // Registering to events can be done with jQuery (as normal)
        //this._el.on('dblclick', function (event) {
        //    event.stopPropagation();
        //    event.preventDefault();
        //    self.onBackgroundDblClick();
        //});
    };

    chronographWidget.prototype.onWidgetContainerResize = function (width, height) {
        this._logger.debug('Widget is resizing...');
    };

    // Adding/Removing/Updating items
    chronographWidget.prototype.addNode = function (desc) {
        if (desc) {
           let iframe = $('<iframe/>', {
                src: desc.url
           });

           iframe.css({
            width: '100%',
            height: '100%'
           });

            this._el.append(iframe);
        }
    };

    chronographWidget.prototype.removeNode = function (gmeId) {

    };

    chronographWidget.prototype.updateNode = function (desc) {
        if (desc) {
            // Check if the url is still the same - if not replace the iframe
        }
    };

    /* * * * * * * * Visualizer event handlers * * * * * * * */

    chronographWidget.prototype.onNodeClick = function (/*id*/) {
        // This currently changes the active node to the given id and
        // this is overridden in the controller.
    };

    chronographWidget.prototype.onBackgroundDblClick = function () {
        this._el.append('<div>Background was double-clicked!!</div>');
    };

    /* * * * * * * * Visualizer life cycle callbacks * * * * * * * */
    chronographWidget.prototype.destroy = function () {
    };

    chronographWidget.prototype.onActivate = function () {
        this._logger.debug('chronographWidget has been activated');
    };

    chronographWidget.prototype.onDeactivate = function () {
        this._logger.debug('chronographWidget has been deactivated');
    };

    return chronographWidget;
});
