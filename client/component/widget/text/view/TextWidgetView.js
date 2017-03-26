/**
 * The view for TextWidget
 * Created by Diego on 21/03/17
 * Version 1.0.0 -
 */

import {BaseWidget} from '../../BaseWidget'

export class TextWidgetView extends BaseWidget{

    /**
     * @constructor
     * The constructor of TextWidgetView
     * @return {Object}
     */
    constructor(){
        //noinspection JSAnnotator,JSAnnotator,JSAnnotator
        super();
        //noinspection JSPotentiallyInvalidConstructorUsage
        /*if (this instanceof TextWidgetView) {
            throw new TypeError("Cannot construct TextWidgetView instances directly");
        }*/
    }

    /**
     * @method
     * Allows to set the text in the TextWidget
     * @param text {string}
     */
    setText(text) {}

    /**
     * @method
     * Allows to set the color of the text in the TextWidget
     * @param color {string}
     */
    setTextColor(color) {}

    /**
     * @method
     * Allows to choose if format the text contained in the TextWidget with markdown or not
     * @param format {boolean}
     */
    setFormatText(format) {}

    /**
     * @method
     * Allows to set the color of the URLs contained in the text of the TextWidget
     * @param color {string}
     */
    setUrlHighlightColor(color) {}

    /**
     * @method
     * Allows to set the size of the text contained in the TextWidget
     * @param size {number}
     */
    setTextSize(size) {}
}
