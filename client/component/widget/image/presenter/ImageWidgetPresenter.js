/**
 * Created by Nicolo on 23/03/17
 * Version 1.0.0 -
 */

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

    constructor(view) {
        this._view= view;
        this._imageOption= new ImageOption();
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
        this._imageOption.setPath(path);
    }

    /**
     * @method
     * this method return the path where is present the image
     * @return {string} path
     */

    returnPath() {
        this._imageOption.returnPath();
    }

    /**
     * @method
     * Returns the HTML, CSS and JS needed to render the ImageWidget
     * @return {object}
     */

    renderView() {
        let html= '<p>  <img src="'+ returnPath() +'"> </p>';
        return html;
    }


}