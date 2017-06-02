/**
 * The view for ButtonWidget
 *
 * Created by diego on 22/03/17.
 * Version 1.0.0 - Completed
 */

import {BaseWidget} from '../BaseWidget';

export class ButtonWidgetView extends BaseWidget {

    /**
     * @constructor
     * Constructor of ButtonWidgetView
     * @return {Object}
     */
    constructor(){
        super();
        if (this.constructor ===  ButtonWidgetView) {
            throw new TypeError("Cannot construct ButtonWidgetView instances directly");
        }
    }

    /**
     * @method
     * Returns the text contained in the ButtonWidget.
     * @return {string}
     */
    getText(){}

    /**
     * @method
     * Returns the width of the button.
     * @return {string}
     */
    getWidth() {}

    /**
     * @method
     * Returns the height of the button.
     * @return {string}
     */
    getHeight() {}

    /**
     * @method
     * Returns the color of the button.
     * @return {string}
     */
    getColor() {}

    /**
     * @method
     * Allows to set the text contained in the ButtonWidget
     * @param text {string}
     */
    setText(text) {} //NOSONAR

    /**
     * @method
     * Allows to set the width of the ButtonWidget
     * @param width {string}
     */
    setWidth(width) {} //NOSONAR

    /**
     * @method
     * Allows to set the height of the ButtonWidget
     * @param height {string}
     */
    setHeight(height) {} //NOSONAR

    /**
     * @method
     * Allows to set the color of the ButtonWidget
     * @param color {string}
     */
    setBackgroundColor(color) {} //NOSONAR

    /**
     * @method
     * Allows to set a function to be performed on the click of the ButtonWidget
     * @param action {Object}
     */
    setOnClickAction(action) {} //NOSONAR

    /**
     * @method
     * Allows to set a function to be performed on the extended click of the ButtonWidget
     * @param action {Object}
     */
    setOnLongClickAction(action) {} //NOSONAR

    /**
     * @method
     * Allows to set the number of milliseconds that is needed to keep the ButtonWidget clicked before the long click action triggers
     * @param milliseconds {number}
     */
    setOnLongClickActionTimer(milliseconds) {} //NOSONAR
}
