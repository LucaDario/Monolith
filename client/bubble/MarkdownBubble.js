/**
 * Created by Stefano Lia on 23/03/2017
 * Version 1.0.0 - 1.0.0
 */

class MarkdownBubble extends BaseBubble{
    /**
     * @type {Object}
     */
    _textView;

    /**
     * @constructor
     * Constructor of MarkdownBubble
     */
    constructor(){
        super();
        this._textView = new TextWidgetView();
    }

    /**
     * @method
     * Set the text for a MarkdownBubble.
     * @param (String): represents the string which has to be set in the Widget.
     * @return
     */
    setText(text){
        this._textView.setText(text);
    }
}

