/**
 * Concrete bubble ToDoListBubble.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 - 1.0.0
 */

import {ChecklistWidgetView} from '../component/widget/checklist/ChecklistWidgetView';
import {TextWidgetView} from '../component/widget/text/TextWidgetView';
import {BaseBubble} from './BaseBubble';

export class ToDoListBubble extends BaseBubble{

    /**
     * @type {Object}: The TextWidget which represents bubble's information.
     */
    _textView;

    /**
     * @type {Object}: The ChecklistWidget which represents the checklist.
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
        super.addComponent(this._textView);
        super.addComponent(this._checklist);
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
    setUrlHighlightColor(color){
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

    /**
     * @method
     * Generates HTML CSS JS needed to display the widget.
     * @return {String}
     */
    renderView(){
        super.layout.renderView();
    }
}
