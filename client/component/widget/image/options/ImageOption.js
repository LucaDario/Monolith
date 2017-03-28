/**
 * Created by Nicolo on 23/03/17
 * Version 1.0.0 -
 */


export class ImageOption {
    /**
     * @type {String}
     */

    _path;

    /**
     * @type {number}
     */
    _width;
    /**
     * @type {number}
     */

    _height;

    /**
     * @return {Object}
     */

    constructor(){
        this._path= "/";
        this._width= 0;
        this._height= 0;
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


    returnPath () {
        return this._path;
    }

    /**
     * @method
     * this method return the width of the image
     * @return {number}
     */

    returnWidth () {
        return this._width;
    }

    /**
     * @method
     * this method return the height of the image
     * @return {number}
     */

    returnHeight () {
        return this._height;
    }
}