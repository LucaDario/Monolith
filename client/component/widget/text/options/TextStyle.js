/**
 * Created by Diego on 21/03/17
 * Version 1.0.0 -
 */

export class TextStyle {

    /**
     * @type {number}
     */
    _size;

    /**
     * @type {string}
     */
    _color;

    /**
     * @type {string}
     */
    _text;

    /**
     * @type {boolean}
     */
    _formatted;

    /**
     * @return {Object}
     */
    constructor() {}

    /**
     * @param {number} size
     */
    setSize(size) {
        if (typeof size == "number")
            this._size=size;
        else
            throw new TypeError("Parameter size type must be a number");
    }

    /**
     * @param {string} color
     */
    setColor(color) {
        if (typeof color == "string")
            this._color=color;
        else
            throw new TypeError("Parameter color type must be a string");
    }

    /**
     * @param {string} text
     */
    setText(text) {
        if (typeof text == "string")
            this._text=text;
        else
            throw new TypeError("Parameter text type must be a string");
    }

    /**
     * @param {boolean} formatted
     */
    setFormatted(formatted) {
        if (typeof formatted == "boolean")
            this._formatted=formatted;
        else
            throw new TypeError("Parameter formatted type must be a boolean");
    }

    /**
     * @return {Number}
     */
    getSize() {
        return _size;
    }

    /**
     * @return {string}
     */
    getColor() {
        return _color;
    }

    /**
     * @return {string}
     */
    getText() {
        return _text;
    }

    /**
     * @return {boolean}
     */
    isFormatted() {
        return _formatted;
    }
}