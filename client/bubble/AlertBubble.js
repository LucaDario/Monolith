/**
 * Created by Diego on 21/03/17
 * Version 1.0.0 -
 */


import "..component/widget/text/view/TextWidgetView";

export class AlertBubble extends BaseBubble{

    /**
     * @type {Object}
     */
    _titleView;

    /**
     * @type {Object}
     */
    _messageView;

    constructor() {
        super();
        this._titleView = new TextWidgetView();
        this._messageView = new TextWidgetView();
    }

    /**
     * @param {string} value
     */
    set titleView(title) {
        this._titleView.setText(title);
    }

    /**
     * @param {string} value
     */
    set messageView(message) {
        this._messageView.setText(message);
    }
}