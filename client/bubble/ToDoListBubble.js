/**
 * class ToDoListBubble
 * Concrete bubble ToDoListBubble
 *
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.6 - Completed and instantiable
 */

import {ChecklistUpdateEmitter} from '../event/ChecklistUpdateEmitter';
import {ChecklistCompleteEmitter} from '../event/ChecklistCompleteEmitter';
import {container,inject,singleton} from 'dependency-injection-es6';
import {ChecklistWidgetItem} from '../component/widget/checklist/view/ChecklistWidgetItem';
import {TextWidget} from '../component/widget/text/view/TextWidget';
import {BaseBubble} from './BaseBubble';
import './libraries.html';

export class ToDoListBubble extends BaseBubble{

    /**
     * @type {string}
     * The id of the ToDoListBubble
     */
    _id;

    /**
     * @type {Object}
     * The TextWidget object used to generate the title of the bubble
     */
    _textView;

    /**
     * @type {Array}
     * The ChecklistWidgetItem object used to generate the checklist of the bubble
     */
    _checklist;

    /**
     * @type {Object}
     * The ChecklistComplete object that allows you to handle the event checklistComplete
     */
    _eventComplete;

    /**
     * @type {string}
     * The completion message that will be shown when all the checkbox of a checklist are checked
     */
    _completionMessage;

    /**
     * @type {function}
     * The function that will be called when longClick on a checklist item is performed
     */
    _onLongClick;

    /**
     * Public constructor
     */
    constructor() {
        super();
        this._id = ('_' + Math.random().toString(36).substr(2, 9)).toString();
        this._textView = new TextWidget();
        this._checklist = [];
        this._onLongClick = ()=>{};
        this._completionMessage = 'Checklist Completed!';
        super.addComponent(this._textView);

        this._checklistUpdate = container.resolve(ChecklistUpdateEmitter);
        this._checklistUpdate.on('checklistUpdate',(itemId,string)=>{
            if(string === 'normal'){
                let isOwn = true;
                for(let i=0;i<this._checklist.length && isOwn;i++){
                    if(this._checklist[i].getId() === itemId){
                        this._isComplete();
                        isOwn = false;
                    }
                }
            }
            if(string === 'long'){
                let isOwn = true;
                for(let i=0;i<this._checklist.length && isOwn;i++){
                    if(this._checklist[i].getId() === itemId){
                        this._onLongClick(i);
                        isOwn = false;
                    }
                }
            }
        });

        this._eventComplete = container.resolve(ChecklistCompleteEmitter);
        this._eventComplete.on('checklistComplete', (index) => {
            if (index === this.getId()) {
                global.jQuery = require('bootstrap-jquery');
                window.$ = $;
                let title = this._textView.renderView().childNodes[0].innerHTML;
                let message = this.getCompletionMessage();
                global.bootbox = require('bootbox');
                bootbox.alert({
                    size: "small",
                    title: title,
                    message: message,
                    backdrop: true,
                    closeButton: true,
                    onEscape: false
                });
                document.getElementsByClassName('modal-dialog')[0].style.zIndex = "1500";
                document.getElementsByClassName('modal-content')[0].style.color = "#fff";
                document.getElementsByClassName('modal-header')[0].style.backgroundColor = "#0b406a";
                document.getElementsByClassName('modal-body')[0].style.backgroundColor = "#044b76";
                document.getElementsByClassName('modal-footer')[0].style.backgroundColor = "#044b76";
                document.getElementsByClassName('bootbox-body')[0].style.opacity = "0.6";
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
        let opt = new ChecklistWidgetItem();
        opt.createOption(item,check);
        this._checklist.push(opt);
        let index = this._checklist.indexOf(opt);
        super.addComponent(this._checklist[index]);
    }

    /**
     * @method
     * It allows you to remove an item into checklist.
     * @param index {number}: The index of the item that will be removed from the checklist
     */
    removeItem(index) {
        this._checklist[index].removeOption();
        if (index >= 1) {
            if (index === this._checklist.length - 1) {
                this._checklist = this._checklist.slice(0, this._checklist.length - 1);
            }
            else {
                let optionsFirstSlice = this._checklist.slice(0, index - 1);
                let optionsSecondSlice = this._checklist.slice(index + 1, this._checklist.length);
                this._checklist = optionsFirstSlice.concat(optionsSecondSlice);
            }
        }
        if (index === 0) {
            this._checklist = this._checklist.slice(1, this._checklist.length);
        }
        //Check if all items are checked and if all items are checked emit an EVENT
        //representing completion of checklist
        this._isComplete();
    }

    /**
     * @method
     * Sets the visualization of tick with a character or with a color.
     * @param useMark {boolean}: Check-mark will be shown by a symbol if this field is true; if this field is false the check-mark
     * will be shown by a color
     */
    setUseSelectionMark(useMark){
        for(let i in this._checklist){
            this._checklist[i].setUseSelectionMark(useMark);
        }
    }

    /**
     * @method
     * Sets the color of check-marks
     * @param color {String}: It represents the color of the check-mark
     */
    setSelectionColor(color) {
        for(let i in this._checklist){
            this._checklist[i].setSelectionColor(color);
        }
    }

    /**
     * @method
     * It allows you to set the function that will be called when a longClick on a checklist item is performed
     * @param func {function}
     */
    setOnLongClick(func){
        this._onLongClick = func;
    }

    /**
     * @method
     * Sets the symbol of checkmarks.
     * @param character {String}: The symbol to represent the selection
     */
    setSelectionCharacter(character){
        for(let i in this._checklist){
            this._checklist[i].setSelectionCharacter(character);
        }
    }

    /**
     * @method
     * It allows you to check an item on the checklist or to remove a tick from it.
     * @param checked {boolean}: A boolean value that represents the state of the item: checked or not
     * @param position {number}: The index of the item the index of the element to which you want to change the status
     */
    setChecked(checked,position){
        this._checklist[position].setChecked(checked);
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

    /**
     * @method
     * Bubble's _id getter
     */
    getId(){
        return this._id;
    }

    /**
     * Private
     * @method
     * It allows you to know if checklist is completed and if it's completed emit an event with checklistComplete
     */
    _isComplete(){
        let completed = true;
        for (let i in this._checklist) {
            completed = completed && this._checklist[i].isChecked();
        }
        if (completed === true) {
            this._eventComplete.emitChecklistComplete(this.getId());
        }
    }

    /**
     * @method
     * It allows you to modify the text of an item
     * @param text {string}: The text that will be replaced to the existing one
     * @param index {number}: The index of the item to be modified
     */
    setItemText(text,index){
        this._checklist[index].setText(text);
    }

    /**
     * @method
     * Sets the completion message appears when all of the list options are checked.
     * @param message {String}: the completion message that will be replaced to the existing
     */
    setCompletionMessage(message){
        this._completionMessage = message;
    }

    /**
     * @method
     * _completionMessage getter
     * @return {string}: The completion message associated to the checklist
     */
    getCompletionMessage(){
        return this._completionMessage;
    }

}
