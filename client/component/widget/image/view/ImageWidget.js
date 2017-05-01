/**
 * The concrete class ImageWidget
 *
 * Created by Nicolo on 25/03/17
 * Version 1.0.4 - Completed and instantiable
 */

import {ImageWidgetView} from '../ImageWidgetView'
import {ImageWidgetPresenter} from '../presenter/ImageWidgetPresenter'
import {Exception} from '../../../../exception/Exception'


export class ImageWidget extends ImageWidgetView {
    /**
     * Public constructor
     */
    constructor(){
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
     * path's image getter
     * @return {string}: The path of the image
     */
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

    setVisibility(value){
        this._presenter.setVisibility(value);
    }


}
