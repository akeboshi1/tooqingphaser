/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var CanvasPool = require('../../display/canvas/CanvasPool');
/**
 * Calculates the ascent, descent and fontSize of a given font style.
 *
 * @function Phaser.GameObjects.Text.MeasureText
 * @since 3.0.0
 *
 * @param {Phaser.GameObjects.Text.TextStyle} textStyle - The TextStyle object to measure.
 *
 * @return {object} An object containing the ascent, descent and fontSize of the TextStyle.
 */
var MeasureText = function (textStyle) {
    // @property {HTMLCanvasElement} canvas - The canvas element that the text is rendered.
    var canvas = CanvasPool.create(this);

    // @property {HTMLCanvasElement} context - The context of the canvas element that the text is rendered to.
    var context = canvas.getContext('2d');

    textStyle.syncFont(canvas, context);

    // Port from phaser4
    var metrics = context.measureText(textStyle.testString);
    var ascent = metrics.actualBoundingBoxAscent;
    var descent = metrics.actualBoundingBoxDescent;

    var output = {
        ascent: ascent,
        descent: descent,
        fontSize: (ascent + descent)
    };

    CanvasPool.remove(canvas);

    return output;
};

module.exports = MeasureText;