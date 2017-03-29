/**
 * This class contains the visual options for the URLs contained in the text in a TextWidget
 * Created by Diego on 21/03/17
 * Version 1.0.0 -
 */

export class UrlStyle {

    /**
     * @type {boolean} : set at true this boolean indicates that the URLs are to be highlighted, at false otherwise
     */
    _highlight;

    /**
     * @type {string} : the color of the highlighted URLs
     */
    _highlightColor;

    /**
     * @constructor
     * The constructor of UrlStyle
     * @return {Object}
     */
    constructor() {
        this._highlight = false;
    }

    /**
     * @method
     * Allows to set the highlight of the URLs or remove it
     * @param {boolean} highlight
     */
    setHighligh(highlight) {
        if (typeof highlight === "boolean")
            this._highlight = highlight;
        else
            throw new TypeError("Parameter highlight type must be a boolean");
    }

    /**
     * @method
     * Allows to set the color of the URLs contained in the text of the TextWidget
     * @param color {string}
     */
    setHighlightColor(color) {
        let pat= new RegExp('#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');
        if (typeof color === "string" && pat.test(color))
            this._highlightColor=color;
        else
            throw new TypeError("Parameter color type must be a string that represents a hex color code");
    }

    /**
     * @method
     * returns the boolean that represents if the URLs in the textare to be highlighted or not
     * @return {boolean}
     */
    isHighlightEnabled() {
        return this._highlight;
    }

    /**
     * @method
     * returns the color of the highlighted URLs
     * @return {string}
     */
    getHighlighColor() {
        return this._highlightColor;
    }
}