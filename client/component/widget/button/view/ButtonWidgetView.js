/**
 * The view for ButtonWidget
 * Created by diego on 22/03/17.
 * Version 1.0.0 -
 */

import {BaseWidget} from '../../BaseWidget';

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
     * Allows to set the text contained in the ButtonWidget
     * @param text {string}
     */
    setText(text) {}

    /**
     * @method
     * Allows to set the width of the ButtonWidget
     * @param width {number}
     */
    setWidth(width) {}

    /**
     * @method
     * Allows to set the height of the ButtonWidget
     * @param height {number}
     */
    setHeight(height) {}

    /**
     * @method
     * Allows to set the color of the ButtonWidget
     * @param color {number}
     */
    setBackgroundColor(color) {}

    /**
     * @method
     * Allows to set a function to be performed on the click of the ButtonWidget
     * @param action {Object}
     */
    setOnClickAction(action) {}

    /**
     * @method
     * Allows to set a function to be performed on the extended click of the ButtonWidget
     * @param action {Object}
     */
    setOnLongClickAction(action) {}

    /**
     * @method
     * Allows to set the number of milliseconds that is needed to keep the ButtonWidget clicked before the long click action triggers
     * @param milliseconds {number}
     */
    setOnLongClickActionTimer(milliseconds) {}
}