/**
 * Created by Diego on 21/03/17
 * Version 1.0.0 -
 */

export class UrlStyle {

    /**
     * @type {boolean}
     */
    _highlight;

    /**
     * @type {string}
     */
    _highlightColor;

    constructor() {}

    /**
     * @param {boolean} highlight
     */
    setHighligh(highlight) {
        if (typeof highlight == "boolean")
            this._highlight=highlight;
        else
            throw new TypeError("Parameter highlight type must be a boolean");
    }

    /**
     * @param {string} color
     */
    setHighlighColor(color) {
        if (typeof color == "string")
            this._highlightColor=color;
        else
            throw new TypeError("Parameter color type must be a string");
    }

    /**
     * @return {boolean}
     */
    isHighlightEnabled() {
        return _highlight;
    }

    /**
     * @return {string}
     */
    getHighlighColor() {
        return _highlightColor;
    }
}