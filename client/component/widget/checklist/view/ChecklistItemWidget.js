/**
 * class ChecklistWidget
 * The concrete class of ChecklistWidget.
 *
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.8 - Completed and instantiable
 */

import {container,inject,singleton} from 'dependency-injection-es6';
import {ChecklistItemWidgetView} from '../ChecklistItemWidgetView'
import {ChecklistItemWidgetPresenter} from '../presenter/ChecklistItemWidgetPresenter';
import {ChecklistUpdateEmitter} from '../../../../event/ChecklistUpdateEmitter';
import {ChecklistCompleteEmitter} from '../../../../event/ChecklistCompleteEmitter';
export class ChecklistItemWidget extends ChecklistItemWidgetView{

    /**
     * @type {Object}
     * The presenter associated to the view
     */
    _presenter;

    /**
     * @type {Object}
     * The ChecklistUpdateEmitter object that allows you to handle the events clickCheckEvent and longClickCheckEvent
     */
    _checklistUpdate;

    /**
     * Public constructor
     * @param text {string}: the text of the new option
     * @param check {boolean}: the status of the new option
     * @param id {string}: the id of the new option
     */
    constructor(text,check = false,id = ''){
        super();
        this._presenter = new ChecklistItemWidgetPresenter(text,check,id);
        this._presenter.setView(this);
        this._checklistUpdate = container.resolve(ChecklistUpdateEmitter);
    }

    /**
     * @method
     * It allows you to remove an item from a checklist
     */
    removeOption(){
        this._presenter.removeOption();
    }

    /**
     * @method
     * It returns the _id of the checklist
     * @return {string}: The id of the checklist
     */
    getId(){
        return this._presenter.getId();
    }

    /**
     * @method
     * _isChecked getter
     * @return {boolean}: The boolean status of the option
     */
    isChecked(){
        return this._presenter.isChecked();
    }

    /**
     * @method
     * It allows you to modify the text of an item
     * @param text {string}: The text that will be replaced to the existing one
     */
    setText(text){
        this._presenter.setText(text);
    }

    /**
     * @method
     * _eventClick getter
     * @return {Object}: The ChecklistUpdateEmitter object associated to the checklist
     */
    getChecklistUpdate(){
        return this._checklistUpdate;
    }

    /**
     * @method
     * Sets the visualization of tick with a character or with a color.
     * @param useMark {boolean}: Check-mark will be shown by a symbol if this field is true; if this field is false the check-mark
     * wiil be shown by a color
     */
    setUseSelectionMark(useMark){
        this._presenter.setUseSelectionMark(useMark);
    }

    /**
     * @method
     * Sets the color of checkmarks.
     * @param color {String}: It represents the color of the check-mark
     */
    setSelectionColor(color) {
        this._presenter.setSelectionColor(color);
    }

    /**
     * @method
     * Sets the symbol of checkmarks.
     * @param character {String}: The symbol to represent the selection
     */
    setSelectionCharacter(character){
        this._presenter.setSelectionCharacter(character);
    }

    /**
     * @method
     * It allows you to check an item on the checklist or to remove a tick from it.
     * @param checked {boolean}: A boolean value that represents the state of the item: checked or not
     */
    setChecked(checked){
        this._presenter.setChecked(checked);
    }

    /**
     * @method
     * Sets the color of checkbox when it's not selected.
     * @param color {string}: It represents the color that will be assigned to checkbox when it's not selected.
     */
    setNotSelectedColor(color){
        this._presenter.setNotSelectedColor(color);
    }

    /**
     * @method
     * _notSelectedColor getter
     * @return {string}: The string represents the color stored into _notSelectedColor
     */
    getNotSelectedColor(){
        return this._presenter.getNotSelectedColor();
    }

    /**
     * @method
     * It allows you to set the function that will be called when a longClick on a checklist item is performed
     * @param func {function}
     */
    setOnLongClick(func){
        this._presenter.setOnLongClick(func);
    }

    /**
     * @method
     * It allows you to set the function that will be called when a normal click on a checklist item is performed
     * @param func {function}
     */
    setOnClick(func){
        this._presenter.setOnClick(func);
    }

    /**
     * @method
     * Sets the color of text
     * @param color {String}: It represents the color of text
     */
    setTextColor(color){
        this._presenter.setTextColor(color);
    }

    /**
     * @method
     * _textColor getter
     * @return {string}: The string represents the color stored into _textColor
     */
    getTextColor(){
        return this._presenter.getTextColor();
    }

    /**
     * @method
     * Generates HTML CSS JS needed to display the widget.
     * @return {HTMLElement}: The dom fragment used to generate html of the checklist
     */
    renderView(){
        return this._presenter.renderView();
    }

    /**
     * @method
     * It returns the name of the itemwidget
     * @return  {String}
     */
    getText(){
        this._presenter.getText();
    }

}
