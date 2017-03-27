/**
 * Created by Diego on 21/03/17
 * Version 1.0.0 -
 */


import {BaseBubble} from "./BaseBubble"
import {TextWidgetView} from "../component/widget/text/TextWidgetView";

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

    /**
     * @method
     * Generates HTML CSS JS needed to display the bubble.
     * @return {String}
     */
    renderView(){
        super.layout.renderView();
    }
}