/**
 * Created by Diego on 21/03/17
 * Version 1.0.0 -
 */

export class TextWidgetPresenter {

    /**
     * @type {Object}
     */
    _view;

    /**
     * @type {Object}
     */
    _textstyle;

    /**
     * @type {Object}
     */
    _urlstyle;

    /**
     * @return {Object}
     * @param {Object} view
     */
    constructor(view) {
        this._view= view;
        this._textstyle= new TextStyle();
        this._urlstyle = new UrlStyle();
    }

    /**
     * @param {string} text
     */
    setText(text) {
        this._textstyle.setText(text);
    }

    /**
     * @param {string} color
     */
    setTextColor(color) {
        this._textstyle.setColor(color);
    }

    /**
     * @param {boolean} format
     */
    setFormatText(format) {
        this._textstyle.setFormatted(format);
        this._urlstyle.setHighligh(format);
    }

    /**
     * @param {string} color
     */
    setUrlHighlightColor(color) {
        this._urlstyle.setHighlighColor(color);
    }

    /**
     * @param {number} size
     */
    setTextSize(size) {
        this._textstyle.setSize(size);
    }
    renderView() {
        // TODO: Implement this
    }
}