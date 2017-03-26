/**
 * This class contains the visual options for the text in a TextWidget
 * Created by Diego on 21/03/17
 * Version 1.0.0 -
 */

export class TextStyle {

    /**
     * @type {number} : the size of the text
     */
    _size;

    /**
     * @type {string} : the color of the text
     */
    _color;

    /**
     * @type {string} : the text itself
     */
    _text;

    /**
     * @type {boolean} : set at true this boolean indicates that the text is to be formatted, at false otherwise
     */
    _formatted;

    /**
     * @return {Object}
     * The constructor of TextStyle
     * @return {Object}
     */
    constructor() {}

    /**
     * @method
     * Allows to set the size of the text contained in the TextWidget
     * @param size {number}
     */
    setSize(size) {
        if (typeof size === "number")
            this._size=size;
        else
            throw new TypeError("Parameter size type must be a number");
    }

    /**
     * @method
     * Allows to set the color of the text in the TextWidget
     * @param color {string}
     */
    setColor(color) {
        let pat= new RegExp('#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');
        if (typeof color === "string" && pat.test(color))
            this._color=color;
        else
            throw new TypeError("Parameter color type must be a string that represents a hex color code");
    }

    /**
     * @method
     * Allows to set the text in the TextWidget
     * @param text {string}
     */
    setText(text) {
        if (typeof text === "string")
            this._text=text;
        else
            throw new TypeError("Parameter text type must be a string");
    }

    /**
     * @method
     * Allows to choose if format the text contained in the TextWidget with markdown or not
     * @param formatted {boolean}
     */
    setFormatted(formatted) {
        if (typeof formatted === "boolean")
            this._formatted=formatted;
        else
            throw new TypeError("Parameter formatted type must be a boolean");
    }

    /**
     * @method
     * returns the size of the text
     * @return {number}
     */
    getSize() {
        return _size;
    }

    /**
     * @method
     * returns the color of the text
     * @return {string}
     */
    getColor() {
        return _color;
    }

    /**
     * @method
     * returns the text itself
     * @return {string}
     */
    getText() {
        return this._text;
    }

    /**
     * @method
     * returns the boolean that represents if the text is formatted or not
     * @return {boolean}
     */
    isFormatted() {
        return _formatted;
    }
}