/**
 * Created by Nicolo on 23/03/17
 * Version 1.0.0 -
 */
import {ImageOption} from '../options/ImageOption'
import {Exception} from '../../../../exception/Exception'


export class ImageWidgetPresenter {

    /**
     * @type {Object}
     */
    _view;

    /**
     * @type {Object}
     */
    _imageOption;

    /**
     * @type {Object}
     */

    _map;

    constructor(view) {
        this._view= view;
        this._imageOption= new ImageOption();
        this._map = new Monolith.can.DefineMap({
            width: '',height: '', path:''
        });
    }


    /**
     * @method
     * this method allows to set the path where is present the image
     * @param {number} width
     */

    setWidth(width) {
        this._imageOption.setWidth(width);
    }

    /**
     * @method
     * this method allows to set the path where is present the image
     * @param {number} height
     */

    setHeight(height) {
        this._imageOption.setHeight(height);
    }

    /**
     * @method
     * this method allows to set the path where is present the image
     * @param {string} path
     */

    setImage(path) {
        if (typeof path === "string" && path !== '') {
            this._imageOption.setPath(path);
        }
        else
            throw new TypeError("Parameter path type must be a string and mustn't be empty");
    }

    /**
     * @method
     * this method return the path where is present the image
     * @return {string} path
     */

    getPath() {
        return this._imageOption.getPath();
    }

    /**
     * @method
     * this method return the width of the  image
     * @return {number} width
     */

    getWidth() {
        return this._imageOption.getWidth();
    }

    /**
     * @method
     * this method return the height of the  image
     * @return {number} heigh
     */

    getHeight() {
        return this._imageOption.getHeight();
    }

    /**
     * @method
     * Returns the HTML, CSS and JS needed to render the ImageWidget
     * @return {object}
     */





    renderView() {
            //.can.stache dovrebbe avere il path del file html MA js non ce la fa a farlo
        const renderer = Monolith.can.stache('<div> <img src="{{path}}" width="{{width}}" height="{{height}}" > </div>');
        this._map.path = this.getPath();
        this._map.width = this.getWidth();
        this._map.height = this.getHeight();
        if (!this._dom) {
            this._dom = renderer(this._map);
        };
        this._dom.firstChild.childNodes[1].onerror = function (e) { //NOSONAR
            throw new Exception("Error during the rendering of the image");
        };
        return this._dom;
    }
};
