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

export class ChecklistItemWidgetPresenter{

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
     * A CheckOption object that represents the status of the widget
     */
    _options;

    /**
     * @type {function}
     * The function that will be called when normal click on a checklist item is performed
     */
    _onClick;

    /**
     * @type {function}
     * The function that will be called when longClick on a checklist item is performed
     */
    _onLongClick;

    /**
     * Public Constructor
     * @param text {string}: The text of the option
     * @param check {boolean}: A boolean value that represents the status of the item: checked or not
     * @param id {string}: The id of the new option
     */
    constructor(text,check,id){
        this._view = null;
        this._dom = document.createElement('div');
        this._dom.setAttribute('class', 'checkbox-m');
        this._options = new CheckOption(id);
        this._onLongClick = ()=>{}; //NOSONAR
        this._onClick = ()=>{}; //NOSONAR
        this._style = new CheckStyle();
        this._createOption(text,check);
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
        const symbol = this._style.getSelectionCharacter();
        const color = this._style.getSelectionColor();
        const text = this._options.getText();

        //Generate html
        const label = document.createElement('label');
        const input = document.createElement('input');
        const box = document.createElement('div');
        const symbolSpan = document.createElement('span');
        const textDiv = document.createElement('div');

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
                this._onClick(this._view);
            }
            else {
                this._view.getChecklistUpdate().emitOnUpdate(this.getId(),'long');
                this._onLongClick(this._view);
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
     * It allows you to add a reference of the view to the presenter
     * @param view {Object}: The reference of the view that will be associated to this presenter
     */
    setView(view){
        this._view = view;
    }

    /**
     * @method
     * It allows you to modify the text of an item
     * @param text {string}: The text that will be replaced to the existing one
     */
    setText(text){
        this._options.setText(text);
        const itemText = this._dom.childNodes[0].childNodes[2];
        itemText.innerHTML = text;
    }

    /**
     * @method
     * It allows you to check an item on the checklist or to remove a tick from it.
     * @param checked {boolean}: A boolean value that represents the state of the item: checked or not
     */
    setChecked(checked){
        this._options.setChecked(checked);
        this._setDomStyle();
    }

    /**
     * Private
     * @method
     * It allows you to update the DOM style
     */
    _setDomStyle(){
        const symbol = this._style.getSelectionCharacter();
        const boxbgcolor = this._style.getSelectionColor();
        const input = this._dom.childNodes[0].childNodes[0];
        const box = this._dom.childNodes[0].childNodes[1];
        const symbolSpan = this._dom.childNodes[0].childNodes[1].childNodes[0];
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
        this._setDomStyle();
    }

    /**
     * @method
     * Sets the visualization of tick with a character or with a color.
     * @param useMark {boolean}: Check-mark will be shown by a symbol if this field is true; if this field is false the check-mark
     * will be shown by a color
     */
    setUseSelectionMark(useMark){
        this._style.setUseSelectionMark(useMark);
        this._setDomStyle();
    }

    /**
     * @method
     * Sets the color of check-marks
     * @param color {String}: It represents the color of the check-mark
     */
    setSelectionColor(color){
        this._style.setSelectionColor(color);
        this._setDomStyle();
    }

    /**
     * @method
     * Generates HTML CSS JS needed to display the widget.
     * @return {Object}: The dom fragment used to generate html
     */
    renderView() {
        this._setDomStyle();
        return this._dom;
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
     * It allows you to set the function that will be called when a normal click on a checklist item is performed
     * @param func {function}
     */
    setOnClick(func){
        this._onClick = func;
    }

    /**
     * @method
     * It returns the name of the itemwidget
     * @return  {String}
     */
    getText(){
        this._options.getText();
    }
}
