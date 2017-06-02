/**
 * class AlertBubble
 * Concrete bubble AlertBubble
 *
 * Created by Diego on 21/03/17
 * Version 1.0.0 - Completed and instantiable
 */


import {BaseBubble} from "./BaseBubble"
import {TextWidget} from "../component/widget/text/view/TextWidget";

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
        this._titleView = new TextWidget();
        this._titleView.setFormatText(true);
        this._titleView.setTextColor('#f00');
        this._messageView = new TextWidget();
        super.addComponent(this._titleView);
        super.addComponent(this._messageView);
    }

    /**
     * @method
     * @param {string} value
     */
    setTitle(title) {
        this._titleView.setText('**' + title + '**');
    }

    /**
     * @method
     * @param {string} value
     */
    setMessage(message) {
        this._messageView.setText(message);
    }

    /**
     * @method
     * Generates HTML CSS JS needed to display the bubble.
     * @return {Element}
     */
    renderView(){
        return super.renderView();
    }
}
