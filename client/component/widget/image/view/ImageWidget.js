/**
 * Created by nicolo on 25/03/17.
 */

import {ImageWidgetView} from '../ImageWidgetView'
import {ImageWidgetPresenter} from '../presenter/ImageWidgetPresenter'
import {Exception} from '../../../../exception/Exception'


export class ImageWidget extends ImageWidgetView {

    /**
     * @type {Object} : The presenter needed by this class
     */
    _presenter;

    /**
     * @constructor
     * The constructor of TextWidget
     */
    constructor(){
        //noinspection JSAnnotator
        super();
        this._presenter = new ImageWidgetPresenter(this);
    }

    /**
     * @method
     * Allows to set the image in the bubble
     * @param imagePath {string}
     */
    setImage(imagePath){
        this._presenter.setImage(imagePath);
    }

    /**
     * @method
     * Set the width of the image
     * @param width {number}
     */
    setWidth(width) {
        this._presenter.setWidth(width);
    }

    /**
     * @method
     * Set the height of the image
     * @param height {number}
     */
    setHeight(height) {
        this._presenter.setHeight(height);
    }


    getPath () {
        return this._presenter.getPath();
    }

    /**
     * @method
     * this method return the width of the image
     * @return {string}
     */

    getWidth () {
        return this._presenter.getWidth();
    }

    /**
     * @method
     * this method return the height of the image
     * @return {string}
     */

    getHeight () {
        return this._presenter.getHeight();
    }

    /**
     * @method
     * Returns the HTML, CSS and JS needed to render the ImageView
     * @return {object}
     */

    renderView() {
        return this._presenter.renderView();
    }
}
