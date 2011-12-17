/// <reference path="jquery-1.7.1-vsdoc.js"/>
/// <reference path="OpenLayers-2.11.min.js"/>

(function ($) {
    $.widget("ui.openMap", {
        // These options will be used as defaults
        options: {
            name: 'openmap',
            imgPath: '/Content/images/',
            center: {
                lon: 37.62428, // y
                lat: 55.75304, // x
                zoom: 9
            }
        },
        // Private options
        _po: {
            div: null,
            map: null,
            mapnik: null,
            vlayer: null,
            controls: {
                toolbar: null,
                mouseposition: null
            }
        },
        // Set up the widget
        _create: function () {
            this._po.div = $('<div/>').attr('id', this.options.name + '-map-generic')
                .css({
                    width: '100%',
                    height: '100%'
                });
            this.element.append(this._po.div);

            this._initMap();
        },
        // Map initializing
        _initMap: function () {
            var self = this;
            OpenLayers.ImgPath = this.options.imgPath;
            var options = {
                theme: null,
                projection: new OpenLayers.Projection("EPSG:900913"), // Spherical Mercator Projection
                displayProjection: new OpenLayers.Projection("EPSG:4326"), // WGS 1984
                units: "m",
                numZoomLevels: 18,
                maxResolution: 156543.0339,
                maxExtent: new OpenLayers.Bounds(-20037508, -20037508, 20037508, 20037508)
            }
            this._po.map = new OpenLayers.Map(this._po.div.attr('id'), options);
            this._po.mapnik = new OpenLayers.Layer.OSM('OSM');
            this._po.vlayer = new OpenLayers.Layer.Vector("Vector");
            this._po.map.addLayers([this._po.mapnik, this._po.vlayer]);

            this._po.controls.toolbar = new OpenLayers.Control.EditingToolbar(this._po.vlayer);
            this._po.controls.mouseposition = new OpenLayers.Control.MousePosition();

            $.each(this._po.controls, function (key, value) {
                self._po.map.addControl(value);
            });

            this._po.map.setCenter(new OpenLayers.LonLat(this.options.center.lon, this.options.center.lat) // Center of the map
                .transform(this._po.map.displayProjection, this._po.map.projection),
                this.options.center.zoom); // zoom level
        },
        // Use the _setOption method to respond to changes to options
        _setOption: function (key, value) {
            this._super(key, value);
        },
        // Use the _destroy method to clean up any modifications your widget has made to the DOM
        _destroy: function () {
        }
    });
} (jQuery));
