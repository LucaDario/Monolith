/**
 * The option for ImageWidget
 *
 * Created by Nicolo on 23/03/17
 * Version 1.0.2 - Completed and instantiable
 */


export class ImageOption {
    /**
     * @type {String}
     */

    _path;

    /**
     * @type {string}
     */
    _width;
    /**
     * @type {string}
     */

    _height;

    /**
     * @return {Object}
     */

    constructor(){
        this._path= "/prova.jpg";
        this._width= 250;
        this._height= 210;
    }

    /**
     * @method
     * this method allows to set the path where is present the image
     * @param {string} path
     */

    setPath(path){
        this._path= path;
    }

    /**
     * @method
     * this method allows to set the width of the image
     * @param {number} width
     */


    setWidth(width) {
        this._width= width;
    }

    /**
     * @method
     * this method allows to set the height of the image
     * @param {number} height
     */

    setHeight(height) {
        this._height= height;
    }

    /**
     * @method
     * this method return the path of the image
     * @return {string}
     */


    getPath () {
        return this._path;
    }

    /**
     * @method
     * this method return the width of the image
     * @return {string}
     */

    getWidth () {
        return this._width;
    }

    /**
     * @method
     * this method return the height of the image
     * @return {string}
     */

    getHeight () {
        return this._height;
    }
}
