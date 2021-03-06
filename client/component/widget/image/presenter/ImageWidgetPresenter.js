/**
 * The presenter for ImageWidget
 *
 * Created by Nicolo on 23/03/17
 * Version 1.0.5 - Completed and instantiable
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

    /**
     * @type {Object}
     */
    _dom;

    constructor(view) {
        this._view= view;
        this._imageOption= new ImageOption();
        this._map = new Monolith.can.DefineMap({
            width: this._imageOption.getWidth(),
            height: this._imageOption.getHeight(),
            path: this._imageOption.getPath()
        });
        this._dom = null;
    }


    /**
     * @method
     * this method allows to set the path where is present the image
     * @param {number} width
     */
    setWidth(width = 0) {
        this._imageOption.setWidth(width);
        this._map.width = width;
    }

    /**
     * @method
     * this method allows to set the path where is present the image
     * @param {number} height
     */
    setHeight(height = 0) {
        this._imageOption.setHeight(height);
        this._map.height = height;
    }

    /**
     * @method
     * this method allows to set the path where is present the image
     * @param {string} path
     */
    setImage(path) {
        if (typeof path === "string" && path !== '') {
            this._imageOption.setPath(path);
            this._map.path = path;
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
     * @return {DocumentFragment}
     */
    renderView() {
        //.can.stache dovrebbe avere il path del file html MA js non ce la fa a farlo
        const renderer = Monolith.can.stache('<div> <img src="{{path}}" width="{{width}}" height="{{height}}" > </div>');
        this._map.path = this.getPath();
        this._map.width = this.getWidth();
        this._map.height = this.getHeight();
        this._dom = renderer(this._map);
        this._dom.firstChild.childNodes[1].onerror = function (e) { //NOSONAR
            throw new Exception("Error during the rendering of the image");
        };

        if(!this.getVisibility()){
            this._dom.firstChild.style.display = "none";
        }

        return this._dom;
    }

    /**
     * @method
     * Returns the visibility of the widget
     * @return {boolean}
     */
    getVisibility(){
        return this._imageOption.getVisibility();
    }

    /**
     * @method
     * Sets the visibility of the widget.
     * @param value: the boolean value you want to set as visibility
     */
    setVisibility(value){
        let visibility = "none";
        if(value === true){
            visibility = "block";
        }

        this._imageOption.setVisibility(value);

        if(this._dom !== null) {
            this._dom.firstChild.style.display = visibility;

        }

    }
}
