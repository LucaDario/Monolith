/**
 * class ChecklistWidgetPresenter
 * The presenter of ChecklistWidget.
 *
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.22 - Completed and instantiable
 */

import {container, singleton, inject} from 'dependency-injection-es6';
import {CheckStyle} from '../style/CheckStyle';
import {CheckOption} from '../options/CheckOption';
import './checklist.css';

export class ChecklistWidgetPresenter{

    /**
     * @type {string}
     * The id of the checklist
     */
    _id;

    /**
     * @type {Object}
     * The view associated to the presenter
     */
    _view;

    /**
     * @type {Object}
     * The dom fragment used to generate html
     */
    _dom;

    /**
     * @type {Object}
     * The CheckStyle associated to the checklist that allows to personalize the view of the checklist
     */
    _style;

    /**
     * @type {Array}
     * An array that contains all the items of the checklist
     */
    _options;

    /**
     * @type {string}
     * The completion message that will be shown when all the checkbox of a checklist are checked
     */
    _completionMessage;

    /**
     * Public Constructor
     */
    constructor(){
        ObjectID = Mongo.ObjectID;
        this._id = new ObjectID().toString();
        this._view = null;
        this._dom = document.createElement('div');
        this._dom.setAttribute('class', 'checkbox');
        this._options = [];
        this._style = new CheckStyle();
        this._completionMessage = 'Checklist Completed!';
    }

    /**
     * @method
     * It allows you to add a reference of the view to the presenter
     * @param view {Object}: The reference of the view that will be associated to this presenter
     */
    setView(view){
        this._view = view;
    }

    /**
     * @method
     * It returns the _id of the checklist
     * @return {string}: The id of the checklist
     */
    getId(){
        return this._id;
    }

    /**
     * @method
     * It allows you to add a new item into the checklist
     * @param optionText {string}: The text of the option
     * @param check {boolean}: A boolean value that represents the status of the item: checked or not
     */
    addOption(optionText,check){
        //Create new CheckOption and set its attributes
        let opt = new CheckOption();
        opt.setText(optionText);
        opt.setChecked(check);
        this._options.push(opt);

        //Temporary variables
        let symbol = this._style.getSelectionCharacter();
        let color = this._style.getSelectionColor();
        let text = opt.getText();

        //Generate html
        let div = document.createElement('div');
        let label = document.createElement('label');
        let input = document.createElement('input');
        let box = document.createElement('div');
        let symbolCheck = document.createElement('span');
        let textDiv = document.createElement('div');

        //set tag's attributes
        div.setAttribute('class', 'checkbox-m');
        textDiv.setAttribute('class', 'spanEmpty');
        textDiv.innerHTML = text;
        input.type = 'checkbox';

        //set the attributes of the checkbox
        if (opt.isChecked()) {
            input.setAttribute('checked', 'checked');
            box.setAttribute('class', 'spanCheckBef spanEmptyBef');
            box.style.backgroundColor = color;
            symbolCheck.setAttribute('class', 'symbolSpanCheckBef');
            symbolCheck.innerHTML = symbol;
            symbolCheck.style.backgroundColor = color;
        }
        else {
            box.setAttribute('class', 'spanNotCheckBef spanEmptyBef');
        }

        label.appendChild(input);
        box.appendChild(symbolCheck);
        label.appendChild(box);
        label.appendChild(textDiv);
        div.appendChild(label);
        this._dom.appendChild(div);

        //Assign to all label the listener of html on click.
        let startTime, endTime;
        label.onmousedown = ()=> {
            startTime = new Date().getTime();
        };
        label.onmouseup = ()=>{
            endTime = new Date().getTime();
            if (endTime - startTime < 350) {
                opt.onClick(this._view._eventClick);
            }
            else {
                let index = this._options.indexOf(opt);
                optRem = this._options[index];
                opt.onLongClick(this._view._eventClick);
            }
        };

        //Check if all items are checked and if all items are checked emit an EVENT representing completion of list
        this._isComplete();
    }

    /**
     * @method
     * It allows you to remove an item from a checklist
     * @param option {Object}: The reference of the option to remove
     */
    removeOption(option){
        if(this._options.includes(option)) {
            let index = this._options.indexOf(option,this._options);
            if (index >= 1) {
                if (index === this._options.length - 1) {
                    this._options = this._options.slice(0, this._options.length - 1);
                }
                else {
                    let optionsFirstSlice = this._options.slice(0, index - 1);
                    let optionsSecondSlice = this._options.slice(index + 1, this._options.length);
                    this._options = optionsFirstSlice.concat(optionsSecondSlice);
                }
            }
            if (index == 0) {
                this._options = this._options.slice(1, this._options.length);
            }
            this._dom.removeChild(this._dom.childNodes[index]);
        }
        //Check if all items are checked and if all items are checked emit an EVENT representing completion of list
        this._isComplete();
    }

    /**
     * @method
     * It allows you to check an item on the checklist or to remove a tick from it.
     * @param checked {boolean}: A boolean value that represents the state of the item: checked or not
     * @param position {number}: The index of the item the index of the element to which you want to change the status
     */
    setChecked(checked,position){
        this._options[position].setChecked(checked);
    }

    /**
     * @method
     * Sets the symbol of checkmarks.
     * @param character {String}: The symbol to represent the selection
     */
    setSelectionCharacter(character){
        this._style.setSelectionCharacter(character);
    }

    /**
     * @method
     * Sets the visualization of tick with a character or with a color.
     * @param useMark {boolean}: Check-mark will be shown by a symbol if this field is true; if this field is false the check-mark
     * will be shown by a color
     */
    setUseSelectionMark(useMark){
        this._style.setUseSelectionMark(useMark);
    }

    /**
     * @method
     * Sets the color of check-marks
     * @param color {String}: It represents the color of the check-mark
     */
    setSelectionColor(color){
        this._style.setSelectionColor(color);
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
     * It allows you to get the completion message defined in the presenter
     * @return {string}: The completion message fof the checklist
     */
    getCompletionMessage(){
        return this._completionMessage;
    }

    /**
     * Private
     * @method
     * It allows you to know if checklist is completed and if it's completed emit an event with checklistComplete
     */
    _isComplete(){
        let completed = true;
        for (let i in this._options) {
            completed = completed && this._options[i].isChecked();
        }
        if (completed === true) {
            this._view.getEventComplete().emitChecklistComplete(this.getId());
        }
    }

    /**
     * @method
     * Generates HTML CSS JS needed to display the widget.
     * @return {Object}: The dom fragment used to generate html
     */
    renderView() {
        return this._dom;
    }

    /**
     * @method
     * It allows you to update the html of the checklist
     */
    update() {
        for (let i in this._options) {
            let symbol = this._style.getSelectionCharacter();
            let boxbgcolor = this._style.getSelectionColor();
            if (this._options[i].isChecked()) {
                this._dom.childNodes[i].childNodes[0].childNodes[1].setAttribute('class','spanCheckBef spanEmptyBef');
                this._dom.childNodes[i].childNodes[0].childNodes[1].childNodes[0].setAttribute('class','symbolSpanCheckBef');
                this._dom.childNodes[i].childNodes[0].childNodes[1].style.backgroundColor = boxbgcolor;
                this._dom.childNodes[i].childNodes[0].childNodes[1].childNodes[0].style.backgroundColor = boxbgcolor;
                this._dom.childNodes[i].childNodes[0].childNodes[1].childNodes[0].innerHTML = symbol;
            }
            else{
                this._dom.childNodes[i].childNodes[0].childNodes[1].setAttribute('class','spanNotCheckBef spanEmptyBef');
                this._dom.childNodes[i].childNodes[0].childNodes[1].childNodes[0].innerHTML = '';
                this._dom.childNodes[i].childNodes[0].childNodes[1].style.backgroundColor = '#fff';
                this._dom.childNodes[i].childNodes[0].childNodes[1].childNodes[0].style.backgroundColor = '#fff';
            }
        }

        //Check if all items are checked and if all items are checked emit an EVENT representing completion of list
        this._isComplete();
    }
}
