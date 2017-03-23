/**
 * Created by Nicolo on 23/03/17
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
    _imageOption;

    /**
     * @type {Object}
     */

    constructor(view) {
        this._view= view;
        this._imageOption= new ImageOption();
    }


    setText(width) {
        this._textstyle.setText(text);
    }
}