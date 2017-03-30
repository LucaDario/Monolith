/**
 * Created by Stefano Lia on 23/03/2017
 * Version 1.0.0 -
 */

import {TextWidget} from '../component/widget/text/view/TextWidget'
import {BaseBubble} from './BaseBubble'

export class MarkdownBubble extends BaseBubble{
    /**
     * @type {Object}
     */
    _textView;

    /**
     * Public constructor
     * @param text {string}: represents the string which has to be set in the Widget.
     */
    constructor(text){
        super();
        //textView is widget widget of formatted text
        this._textView = new TextWidget();
        this._textView.setFormatText(true);
        this.setText(text);
        //add the widget in the Bubble's Layout
        this.addComponent(this._textView);
    }

    /**
     * @method
     * Set the text for a MarkdownBubble.
     * @param text {string}: represents the string which has to be set in the Widget.
     */
    setText(text){
        this._textView.setText(text);
    }
}