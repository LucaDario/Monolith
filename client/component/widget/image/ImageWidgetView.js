/**
 * The view of ImageWidget
 *
 * Created by Nicolo on 24/03/17
 * Version 1.0.4 - Completed and instantiable
 */


import {BaseWidget} from '../BaseWidget'

export class ImageWidgetView extends BaseWidget{

    /**
     * @constructor
     * The constructor of ImageWidgetView
     */
    constructor() {
        //noinspection JSAnnotator,JSAnnotator,JSAnnotator
        super();
        //noinspection JSPotentiallyInvalidConstructorUsage
        if (this.constructor ===  ImageWidgetView) {
            throw new TypeError("Cannot construct ImageWidgetView instances directly");
        }
    }

    /**
     * @method
     * Allows to set the path in the bubble image
     * @param imagePath {string}
     */

    setImage(imagePath) {} //NOSONAR


    /**
     * @method
     * Allows to set the width in the image
     * @param width {number}
     */
    setWidth(width) {} //NOSONAR

    /**
     * @method
     * Allows to set the height in the  image
     * @param height {number}
     */
    setHeight(height) {} //NOSONAR

    /**
     * @method
     * path's image getter
     * @return {string}: The path of the image
     */
    getPath () {}   //NOSONAR

    /**
     * @method
     * this method return the width of the image
     * @return {string}
     */
    getWidth () {}  //NOSONAR

    /**
     * @method
     * this method return the height of the image
     * @return {string}
     */
    getHeight () {} //NOSONAR

}
