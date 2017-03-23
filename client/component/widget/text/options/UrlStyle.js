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

    constructor() {}

    /**
     * @method
     * Allows to set the highlight of the URLs or remove it
     * @param {boolean} highlight
     */
    setHighligh(highlight) {
        if (typeof highlight == "boolean")
            this._highlight=highlight;
        else
            throw new TypeError("Parameter highlight type must be a boolean");
    }

    /**
     * @method
     * Allows to set the color of the URLs contained in the text of the TextWidget
     * @param color {string}
     */
    setHighlighColor(color) {
        if (typeof color == "string")
            this._highlightColor=color;
        else
            throw new TypeError("Parameter color type must be a string");
    }

    /**
     * @method
     * returns the boolean that represents if the URLs in the textare to be highlighted or not
     */
    isHighlightEnabled() {
        return _highlight;
    }

    /**
     * @method
     * returns the color of the highlighted URLs
     */
    getHighlighColor() {
        return _highlightColor;
    }
}