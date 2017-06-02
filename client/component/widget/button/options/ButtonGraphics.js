/**
 * This class contains the style options for a ButtonWidget.
 *
 * Created by diego on 22/03/17.
 * Version 1.0.0 - Completed and instantiable
 */

export class ButtonGraphics {

    /**
     * @constructor
     * Constructor of ButtonGraphics.
     * @return {Object}
     */
    constructor() {
        //default values
        this._color = "#d3d3d3";
        this._height = "wrap-content";
        this._width = "wrap-content";
    }

    /**
     * @method
     * Returns the color set for the ButtonGraphics.
     * @return {string}
     */
    getColor() {
        return this._color;
    }

    /**
     * @method
     * Allows to set the color for the ButtonGraphics object.
     * @param color {string}
     */
    setColor(color) {
        const pat= new RegExp('#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');
        if (typeof color === "string" && pat.test(color))
            this._color = color;
        else
            throw new TypeError("Parameter color type must be a string that represents a hex color code");
    }

    /**
     * @method
     * Returns the height set for the ButtonGraphics.
     * @return {string}
     */
    getHeight() {
        return this._height;
    }

    /**
     * @method
     * Allows to set the height for the ButtonGraphics object.
     * @param height {string}
     */
    setHeight(height) {
        if (typeof height === "string")
            this._height = height;
        else
            throw new TypeError("Parameter height type must be a string");
    }

    /**
     * @method
     * Returns the width set for the ButtonGraphics.
     * @return {string}
     */
    getWidth() {
        return this._width;
    }

    /**
     * @method
     * Allows to set the width for the ButtonGraphics object.
     * @param width {string}
     */
    setWidth(width) {
        if (typeof width === "string")
            this._width = width;
        else
            throw new TypeError("Parameter width type must be a string");
    }
}
