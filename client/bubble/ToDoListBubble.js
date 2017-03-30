/**
 * Concrete bubble ToDoListBubble.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 - 1.0.0
 */

import {ChecklistWidget} from '../component/widget/checklist/view/ChecklistWidget';
import {TextWidget} from '../component/widget/text/view/TextWidget';
import {BaseBubble} from './BaseBubble';

export class ToDoListBubble extends BaseBubble{

    constructor() {
        super();
        this._textView = new TextWidget();
        this._checklist = new ChecklistWidget();
        super.addComponent(this._textView);
        super.addComponent(this._checklist);
    }

    /**
     * @method
     * It allows you to add an item into checklist.
     * @param item {string}
     * @param check {boolean}
     */
    addItem(item,check = false) {
        this._checklist.addOption(item,check);
    }

    /**
     * @method
     * It allows you to remove an item into checklist.
     * @param item {String}
     */
    removeItem(item) {
        this._checklist.removeOption(id);
    }

    /**
     *@method
     *Sets the visualization of tick with a character or with a color.
     * @param useMark {boolean}
     */
    setUseSelectionMark(useMark){
        this._checklist.setUseSelectionMark(useMark);
    }

    /**
     *@method
     *Sets the color of checkmarks.
     * @param color {String}
     */
    setSelectionColor(color) {
        this._checklist.setSelectionColor(color);
    }

    /**
     * @method
     *Sets the symbol of checkmarks.
     * @param character {String}
     */
    setSelectionCharacter(character){
        this._checklist.setSelectionCharacter(character);
    }

    /**
     *@method
     *It allows you to check an item on the checklist or to remove a tick from it.
     * @param checked {boolean}
     * @param position {Number}
     */
    setChecked(checked,position){
        this._checklist.setChecked(checked,position);
    }

    /**
     *@method
     *Sets the completion message appears when all of the list options are checked.
     * @param message {String}
     */
    setCompletionMessage(message){
        this._checklist.setCompletionMessage(message);
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
}
