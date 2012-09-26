goog.provide('ol.layer.TileLayer');

goog.require('ol.TileSource');
goog.require('ol.layer.Layer');



/**
 * @constructor
 * @extends {ol.layer.Layer}
 * @param {ol.TileSource} tileSource Tile source.
 * @param {Object.<string, *>=} opt_values Values.
 */
ol.layer.TileLayer = function(tileSource, opt_values) {
  goog.base(this, tileSource, opt_values);
};
goog.inherits(ol.layer.TileLayer, ol.layer.Layer);


/**
 * @inheritDoc
 * @return {ol.TileSource} Source.
 */
ol.layer.TileLayer.prototype.getSource = function() {
  return /** @type {ol.TileSource} */ goog.base(this, 'getSource');
};