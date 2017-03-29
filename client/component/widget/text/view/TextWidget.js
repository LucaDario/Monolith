/**
 * The concrete class of TextWidget
 * Created by Diego on 21/03/17
 * Version 1.0.0 - 
 */

import {TextWidgetView} from '../TextWidgetView'
import {TextWidgetPresenter} from '../presenter/TextWidgetPresenter';

export class TextWidget extends TextWidgetView {

    /**
     * @type {Object} : The presenter needed by this class
     */
    _presenter;

    /**
     * @constructor
     * The constructor of TextWidget
     * @return {Object}
     */
    constructor(){
        //noinspection JSAnnotator
        super();
        this._presenter = new TextWidgetPresenter(this);
    }

    /**
     * @method
     * Allows to set the text in the TextWidget
     * @param text {string}
     */
    setText(text){
        this._presenter.setText(text);
    }

    /**
     * @method
     * Allows to set the color of the text in the TextWidget
     * @param color {string}
     */
    setTextColor(color) {
        this._presenter.setTextColor(color);
    }

    /**
     * @method
     * Allows to choose if format the text contained in the TextWidget with markdown or not
     * @param format {boolean}
     */
    setFormatText(format) {
        this._presenter.setFormatText(format);
    }

    /**
     * @method
     * Allows to set the color of the URLs contained in the text of the TextWidget
     * @param color {string}
     */
    setUrlHighlightColor(color) {
        this._presenter.setUrlHighlightColor(color);
    }

    /**
     * @method
     * Allows to set the size of the text contained in the TextWidget
     * @param size {number}
     */
    setTextSize(size) {
        this._presenter.setTextSize(size);
    }

    /**
     * @method
     * Returns the HTML, CSS and JS needed to render the TextWidget
     * @return {Element}
     */
    renderView() {
        return this._presenter.renderView();
    }
}
