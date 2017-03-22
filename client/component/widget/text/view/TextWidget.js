/**
 * Created by Diego on 21/03/17
 * Version 1.0.0 - 
 */

import {TextWidgetView} from './TextWidgetView'

export class TextWidget extends TextWidgetView {

    /**
     * @type {Object}
     */
    _presenter;

    constructor(){
        //noinspection JSAnnotator
        super();
        this._presenter = new ListWidgetPresenter(this);
    }

    setText(text){
        this._presenter.setText(text);
    }
    setTextColor(color) {
        this._presenter.setTextColor(color);
    }
    setFormatText(format) {
        this._presenter.setFormatText(format);
    }
    setUrlHighlightColor(color) {
        this._presenter.setUrlHighlightColor(color);
    }
    setTextSize(size) {
        this._presenter.setTextSize(size);
    }
    renderView() {
        return this._presenter.renderView();
    }
}
