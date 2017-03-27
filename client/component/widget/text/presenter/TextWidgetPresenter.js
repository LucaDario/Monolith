/**
 * The presenter of TextWidget
 * Created by Diego on 21/03/17
 * Version 1.0.0 -
 */

import {TextStyle} from '../options/TextStyle';
import {UrlStyle} from '../options/UrlStyle';

export class TextWidgetPresenter {

    /**
     * @type {Object}: DOM element that allows to change CSS
     */
    _dom;

    /**
     * @type {Object}: DefineMap element that allows to update view
     */
    _map;

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
        this._map = new Monolith.can.DefineMap({
            text: ''
        });
    }

    /**
     * @method
     * Allows to set the text in the TextWidget
     * @param text {string}
     */
    setText(text) {
        this._textstyle.setText(text);
        this._map.text = text;
    }

    /**
     * @method
     * Allows to set the color of the text in the TextWidget
     * @param color {string}
     */
    setTextColor(color) {
        this._textstyle.setColor(color);
        this._dom.style.color = color;
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

    // TODO: this is hard
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
        this._dom.style.fontSize = size;
    }

    /**
     * @method
     * Returns the HTML, CSS and JS needed to render the TextWidget
     * @return {Object}
     */
    renderView() {

        let msg= '';
        if (this._textstyle.isFormatted()) {
            let markdown = require( "markdown" ).markdown;
            msg=markdown.toHTML(this._textstyle.getText());
        }
        else
            msg = this._textstyle.getText();

        //.can.stache dovrebbe avere il path del file html MA js non ce la fa a farlo
        let renderer = Monolith.can.stache("<h1>{{text}}</h1>");
        this._map.text = msg;

        this._dom = renderer(this._map);

        return this._dom
    }
}