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

    /**
     * @method
     * Returns the HTML, CSS and JS needed to render the ImageView
     * @return {object}
     */
    renderView() {
        console.log("image widget renderView");
        return this._presenter.renderView();
    }
}
