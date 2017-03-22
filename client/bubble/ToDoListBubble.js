    /**
    * Created by Francesco Bazzerla on 21/03/17.
    */

import "../component/widget/checklist/view/ChecklistWidgetView.js";
import "..component/widget/text/view/TextWidgetView.js";

class ToDoListBubble extends BaseBubble{

    /**
     * @type {TextWidgetView}
     */
    _textView;

    /**
     * @type {ChecklistWidgetView}
     */
    _checklist;

    /**
     * @constructor
     * Constructor of ToDoListBubble
     */
    constructor() {
        super();
        this._textView = new TextWidgetView();
        this._checklist = new ChecklistWidgetView();
    }

    /**
     * @method
     * It allows you to add an item into checklist.
     * @param item {String}
     */
    addItem(item) {
        this._checklist.addOption(item);
    }


    /**
     * @method
     * It allows you to set the ToDoListBubble's text
     * @param text {String}
     */
    setText(text){
        this._textView.setText(text);
    }

    /**
     * @method
     * It allows you to set the color of ToDoListBubble's text
     * @param color {String}
     */
    setTextColor(color){
        this._textView.setTextColor(color);
    }

    /**
     * @method
     * It allows you to set the format of ToDoListBubble's text
     * @param format {boolean}
     */
    setFormatText(format){
        this._textView.setFormatText(format);
    }

    /**
     * @method
     * It allows you to set the color of ToDoListBubble's url
     * @param color {String}
     */
    setUrlHighLightColor(color){
        this._textView.setUrlHighlightColor(color);
    }

    /**
     * @method
     * It allows you to set the size of ToDoListBubble's text
     * @param size {number}
     */
    setTextSize(size){
        this._textView.setTextSize(size);
    }
}