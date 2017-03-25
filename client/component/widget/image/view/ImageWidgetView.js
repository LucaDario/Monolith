/**
 * Created by nicolo on 25/03/17.
 */


import {BaseWidget} from '../../BaseWidget'



export class TextWidgetView extends BaseWidget{

    /**
     * @constructor
     * The constructor of TextWidgetView
     */
    constructor() {
        //noinspection JSAnnotator,JSAnnotator,JSAnnotator
        super();
        //noinspection JSPotentiallyInvalidConstructorUsage
        if (this instanceof ImageWidgetView) {
            throw new TypeError("Cannot construct ImageWidgetView instances directly");
        }
    }

    /**
     * @method
     * Allows to set the path in the bubble image
     * @param imagePath {string}
     */

    setImage(imagePath) {}


    /**
     * @method
     * Allows to set the width in the immage
     * @param width {number}
     */

    setWidth(width) {}

    /**
     * @method
     * Allows to set the height in the  immage
     * @param width {number}
     */

    setHeight(width) {}


}
