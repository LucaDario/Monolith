/**
 * The presenter of TextWidget
 * Created by Diego on 21/03/17
 * Version 1.0.0 -
 */

import {TextStyle} from '../options/TextStyle';
import {UrlStyle} from '../options/UrlStyle';

export class TextWidgetPresenter {

    /**
     * @type {Object} : the view needed by the presenter
     */
    _view;

    /**
     * @type {Object} : the TextStyle object that contains the visual options for the text in the TextWidget
     */
    _textstyle;

    /**
     * @type {Object} : the UrlStyle object that contains the visual options for URLs contained in the text in the TextWidget
     */
    _urlstyle;

    /**
     * @constructor
     * The constructor of TextWidgetPresenter
     * @param {Object} view
     * @return {Object}
     */
    constructor(view) {
        this._view= view;
        this._textstyle= new TextStyle();
        this._urlstyle = new UrlStyle();
    }

    /**
     * @method
     * Allows to set the text in the TextWidget
     * @param text {string}
     */
    setText(text) {
        this._textstyle.setText(text);
    }

    /**
     * @method
     * Allows to set the color of the text in the TextWidget
     * @param color {string}
     */
    setTextColor(color) {
        this._textstyle.setColor(color);
    }

    /**
     * @method
     * Allows to choose if format the text contained in the TextWidget with markdown or not
     * @param format {boolean}
     */
    setFormatText(format) {
        this._textstyle.setFormatted(format);
        this._urlstyle.setHighligh(format);
    }

    /**
     * @method
     * Allows to set the color of the URLs contained in the text of the TextWidget
     * @param color {string}
     */
    setUrlHighlightColor(color) {
        this._urlstyle.setHighlightColor(color);
    }

    /**
     * @method
     * Allows to set the size of the text contained in the TextWidget
     * @param size {number}
     */
    setTextSize(size) {
        this._textstyle.setSize(size);
    }

    /**
     * @method
     * Returns the HTML, CSS and JS needed to render the TextWidget
     * @return {Object}
     */
    renderView() {
        // TODO: Implement this
        let renderer = Monolith.can.stache("<h1>{{subject}}</h1>");
        let map = new Monolith.can.DefineMap({subject: this._textstyle.getText()});
        return renderer(map);
    }
}