/**
 * class ToDoListBubble
 * Concrete bubble ToDoListBubble
 *
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.6 - Completed and instantiable
 */

import {ChecklistWidget} from '../component/widget/checklist/view/ChecklistWidget';
import {TextWidget} from '../component/widget/text/view/TextWidget';
import {BaseBubble} from './BaseBubble';

export class ToDoListBubble extends BaseBubble{

    /**
     * @type {Object}
     * The TextWidget object used to generate the title of the bubble
     */
    _textView;

    /**
     * @type {Object}
     * The ChecklistWidget object used to generate the checklist of the bubble
     */
    _checklist;

    /**
     * @type {function}
     * The function that will be called when an event ChecklistUpdate is emitted
     */
    _update;

    /**
     * Public constructor
     */
    constructor() {
        super();
        this._textView = new TextWidget();
        this._checklist = new ChecklistWidget();
        super.addComponent(this._textView);
        super.addComponent(this._checklist);
        this._update = ()=>{};
        this._checklist.getChecklistUpdate().on('checklistUpdate',(index)=>{
            this._update();
        });

        this._checklist.getEventComplete().on('checklistComplete', (index) => {
            if (this._checklist.getId() === index) {
                const $ = require('jquery');
                global.jQuery = require("jquery");
                window.$ = $;
                const bootstrap = require('bootstrap');
                const bootbox = require('bootbox');
                bootbox.alert({
                    size: "small",
                    title: "CIAO VEZ",
                    message: "Your message here…",
                    show: 'true',
                    container: '.checkbox'
                });
            }
        });
    }

    /**
     * @method
     * It allows you to add an item into checklist.
     * @param item {string}: The name of the item
     * @param check {boolean}: The initial value for the item
     */
    addItem(item,check = false) {
        this._checklist.addOption(item,check);
    }

    /**
     * @method
     * It allows you to remove an item into checklist.
     * @param index {number}: The index of the item that will be removed from the checklist
     */
    removeItem(index) {
        this._checklist.removeOption(index);
    }

    /**
     * @method
     * It allows you to change the function that will be called when a longClick on an option is performed
     * @param event {function}: function that will be called when a longClick on an option is performed
     */
    setOnLongOptionClick(event){
        this._checklist.setOnLongOptionClick(event);
    }

    /**
     * @method
     * Sets the visualization of tick with a character or with a color.
     * @param useMark {boolean}: Check-mark will be shown by a symbol if this field is true; if this field is false the check-mark
     * will be shown by a color
     */
    setUseSelectionMark(useMark){
        this._checklist.setUseSelectionMark(useMark);
    }

    /**
     * @method
     * Sets the color of check-marks
     * @param color {String}: It represents the color of the check-mark
     */
    setSelectionColor(color) {
        this._checklist.setSelectionColor(color);
    }

    /**
     * @method
     * It allows you to change the function that will be called when an event with checklistUpdate is emitted
     * @param event {function}: The function that will be called when an event with checklistUpdate is emitted
     */
    setOnUpdateEvent(event){
        this._update = event;
    }

    /**
     * @method
     * Sets the symbol of checkmarks.
     * @param character {String}: The symbol to represent the selection
     */
    setSelectionCharacter(character){
        this._checklist.setSelectionCharacter(character);
    }

    /**
     * @method
     * It allows you to check an item on the checklist or to remove a tick from it.
     * @param checked {boolean}: A boolean value that represents the state of the item: checked or not
     * @param position {number}: The index of the item the index of the element to which you want to change the status
     */
    setChecked(checked,position){
        this._checklist.setChecked(checked,position);
    }

    /**
     *@method
     *Sets the completion message appears when all of the list options are checked.
     * @param message {String}: The completion message that will be replaced to the existing
     */
    setCompletionMessage(message){
        this._checklist.setCompletionMessage(message);
    }

    /**
     * @method
     * It allows you to set the ToDoListBubble's text
     * @param text {string}: Set the text of the bubble's title
     */
    setText(text){
        this._textView.setText(text);
    }

    /**
     * @method
     * It allows you to set the color of ToDoListBubble's text
     * @param color {string}: Set the color of the bubble's title
     */
    setTextColor(color){
        this._textView.setTextColor(color);
    }

    /**
     * @method
     * It allows you to set the format of ToDoListBubble's text
     * @param format {boolean}: A boolean value. If it is true it allows you to write text with markdown style.
     */
    setFormatText(format){
        this._textView.setFormatText(format);
    }

    /**
     * @method
     * It allows you to set the color of a possible url
     * @param color {string}: The color to set to a possible url into the title
     */
    setUrlHighlightColor(color){
        this._textView.setUrlHighlightColor(color);
    }

    /**
     * @method
     * It allows you to set the size of  text
     * @param size {number}: The size to set to the text of the title
     */
    setTextSize(size){
        this._textView.setTextSize(size);
    }
}
