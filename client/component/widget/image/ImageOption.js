/**
 * Created by Nicolo on 23/03/17
 * Version 1.0.0 -
 */


export class ImageOptions {
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
     * @param {string} path
     */

    setPath(path){
        this._path= path;
    }

    /**
     * @param {number} width
     */


    setWidth(width) {
        this._width= width;
    }

    /**
     * @param {number} height
     */

    setHeight(height) {
        this._height= height;
    }
}