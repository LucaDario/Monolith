/**
 * The presenter of TextWidget
 * Created by Diego on 21/03/17
 * Version 1.0.0 -
 */

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
        this._urlstyle.setHighlighColor(color);
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
     */
    renderView() {
        // TODO: Implement this

        let html= '';

        if (this._textstyle.isFormatted()) {
            api.use('markdown');
            html= '{{#markdown}}' + this._textstyle.getText() + '{{/markdown}}';
        }
        else {
            html= '<p>' + this._textstyle.getText() + '</p>';
        }
        return html;
    }
}