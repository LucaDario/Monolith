/**
 * class ChecklistWidget
 * The concrete class of ChecklistWidget.
 *
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.8 - Completed and instantiable
 */

import {container,inject,singleton} from 'dependency-injection-es6';
import {ChecklistWidgetItemView} from '../ChecklistWidgetItemView'
import {ChecklistWidgetItemPresenter} from '../presenter/ChecklistWidgetItemPresenter';
import {ChecklistUpdateEmitter} from '../../../../event/ChecklistUpdateEmitter';
import {ChecklistCompleteEmitter} from '../../../../event/ChecklistCompleteEmitter';
export class ChecklistWidgetItem extends ChecklistWidgetItemView{

    /**
     * @type {Object}
     * The presenter associated to the view
     */
    _presenter;

    /**
     * @type {Object}
     * The ClickCheckEvent object that allows you to handle the events clickCheckEvent and longClickCheckEvent
     */
    _checklistUpdate;

    /**
     * Public constructor
     */
    constructor(text,check = false){
        super();
        this._presenter = new ChecklistWidgetItemPresenter(text,check);
        this.setView(this);
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
     * It allows you to add a reference of the view to the presenter
     * @param view {Object}: The reference of the view that will be associated to this presenter
     */
    setView(view){
        this._presenter.setView(view);
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
     * @return {Object}: The ClickCheckEvent object associated to the checklist
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
     * Generates HTML CSS JS needed to display the widget.
     * @return {Object}: The dom fragment used to generate html of the checklist
     */
    renderView(){
        return this._presenter.renderView();
    }
}
