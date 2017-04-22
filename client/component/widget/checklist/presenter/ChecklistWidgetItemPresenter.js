/**
 * class ChecklistWidgetPresenter
 * The presenter of ChecklistWidget.
 *
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.22 - Completed and instantiable
 */

import {CheckStyle} from '../style/CheckStyle';
import {CheckOption} from '../options/CheckOption';
import './checklist.css';

export class ChecklistWidgetItemPresenter{

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
     * @type {Object}
     * An array that contains all the items of the checklist
     */
    _options;

    /**
     * Public Constructor
     * @param text {string}: The text of the option
     * @param check {boolean}: A boolean value that represents the status of the item: checked or not
     */
    constructor(text,check){
        this._view = null;
        this._dom = document.createElement('div');
        this._dom.setAttribute('class', 'checkbox-m');
        this._options = new CheckOption();
        this._style = new CheckStyle();
        this._createOption(text,check);
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
     * Private
     * @method
     * It allows you to create a new checklist item
     * @param optionText {string}: The text of the option
     * @param check {boolean}: A boolean value that represents the status of the item: checked or not
     */
    _createOption(optionText,check){
        //Create new CheckOption and set its attributes
        this._options.setText(optionText);
        this._options.setChecked(check);

        //Temporary variables
        let symbol = this._style.getSelectionCharacter();
        let color = this._style.getSelectionColor();
        let text = this._options.getText();

        //Generate html
        let label = document.createElement('label');
        let input = document.createElement('input');
        let box = document.createElement('div');
        let symbolSpan = document.createElement('span');
        let textDiv = document.createElement('div');

        //Set tag's attributes
        textDiv.setAttribute('class', 'spanEmpty');
        textDiv.innerHTML = text;
        input.type = 'checkbox';

        //Set the css class and the content of the checkbox
        if (this._options.isChecked()) {
            input.setAttribute('checked', 'checked');
            box.setAttribute('class', 'spanCheckBef spanEmptyBef');
            box.style.backgroundColor = color;
            symbolSpan.setAttribute('class', 'symbolSpanCheckBef');
            symbolSpan.innerHTML = symbol;
            symbolSpan.style.backgroundColor = color;
        }
        else {
            box.setAttribute('class', 'spanNotCheckBef spanEmptyBef');
            box.style.backgroundColor = '#fff';
            symbolSpan.style.backgroundColor = '#fff';
            symbolSpan.innerHTML = '';
        }

        //Append the option to _dom
        label.appendChild(input);
        box.appendChild(symbolSpan);
        label.appendChild(box);
        label.appendChild(textDiv);
        this._dom.appendChild(label);

        //Assign to all label the listener of html on click.
        let startTime, endTime;
        label.onmousedown = ()=> {
            startTime = new Date().getTime();
        };
        label.onmouseup = ()=>{
            endTime = new Date().getTime();
            if (endTime - startTime < 1000) {
                this.setChecked(this._options.changeStatus());
                this._view.getChecklistUpdate().emitOnUpdate(this.getId(),'normal');
            }
            else {
                this._view.getChecklistUpdate().emitOnUpdate(this.getId(),'long');
            }
        };
    }

    /**
     * @method
     * It allows you to retrieve the checklist item id
     * @return {string}: The id of the checklist item
     */
    getId(){
        return this._options.getId();
    }

    /**
     * @method
     * It allows you to remove an item from a checklist
     */
    removeOption(){
        this._options = null;
        this._dom.parentNode.removeChild(this._dom);
    }

    /**
     * @method
     * _isChecked getter
     * @return {boolean}: The boolean status of the option
     */
    isChecked(){
        return this._options.isChecked();
    }

    /**
     * @method
     * It allows you to modify the text of an item
     * @param text {string}: The text that will be replaced to the existing one
     */
    setText(text){
        this._options.setText(text);
        console.log(this._dom);
        let itemText = this._dom.childNodes[0].childNodes[2];
        itemText.innerHTML = text;
    }

    /**
     * @method
     * It allows you to check an item on the checklist or to remove a tick from it.
     * @param checked {boolean}: A boolean value that represents the state of the item: checked or not
     */
    setChecked(checked){
        this._options.setChecked(checked);
        let symbol = this._style.getSelectionCharacter();
        let boxbgcolor = this._style.getSelectionColor();
        let input = this._dom.childNodes[0].childNodes[0];
        let box = this._dom.childNodes[0].childNodes[1];
        let symbolSpan = this._dom.childNodes[0].childNodes[1].childNodes[0];
        if (this._options.isChecked()) {
            input.setAttribute('checked','checked');
            box.setAttribute('class','spanCheckBef spanEmptyBef');
            symbolSpan.setAttribute('class','symbolSpanCheckBef');
            box.style.backgroundColor = boxbgcolor;
            symbolSpan.style.backgroundColor = boxbgcolor;
            symbolSpan.innerHTML = symbol;
        }
        else{
            input.removeAttribute('checked');
            box.setAttribute('class','spanNotCheckBef spanEmptyBef');
            symbolSpan.removeAttribute('class');
            symbolSpan.innerHTML = '';
            box.style.backgroundColor = '#fff';
            symbolSpan.style.backgroundColor = '#fff';
        }
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
     * Generates HTML CSS JS needed to display the widget.
     * @return {Object}: The dom fragment used to generate html
     */
    renderView() {
        return this._dom;
    }
}
