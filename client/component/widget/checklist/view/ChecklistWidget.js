/**
 * class ChecklistWidget
 * The concrete class of ChecklistWidget.
 *
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.8 - Completed and instantiable
 */


import {ChecklistWidgetView} from '../ChecklistWidgetView'
import {ChecklistWidgetPresenter} from '../presenter/ChecklistWidgetPresenter';
import {ClickCheckEvent} from '../../../../event/ClickCheckEvent';
import {ChecklistComplete} from '../../../../event/ChecklistComplete';
export class ChecklistWidget extends ChecklistWidgetView{

    /**
     * @type {Object}
     * The presenter associated to the view
     */
    _presenter;

    /**
     * @type {Object}
     * The ClickCheckEvent object that allows you to handle the events clickCheckEvent and longClickCheckEvent
     */
    _eventClick;

    /**
     * @type {Object}
     * The ChecklistComplete object that allows you to handle the event checklistComplete
     */
    _eventComplete;

    /**
     * Public constructor
     */
    constructor(){
        super();
        //TODO inject
        this._presenter = new ChecklistWidgetPresenter();
        this.setView(this);
        this._eventClick = new ClickCheckEvent();
        this._eventComplete = new ChecklistComplete();

        this._eventClick.on('clickCheckEvent', (status,index)=>{
            this.setChecked(status,index);
        });
    }

    /**
     * @method
     * It allows you to add a new item into the checklist
     * @param optionText {string}: The text of the option
     * @param check {boolean}: A boolean value that represents the status of the item: checked or not
     */
    addOption(optionText,check = false) {
        this._presenter.addOption(optionText,check);
    }

    /**
     * @method
     * It allows you to remove an item from a checklist
     * @param index {number}: The index of the option to remove
     */
    removeOption(index){
        this._presenter.removeOption(index);
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
     * It allows you to add a reference of the view to the presenter
     * @param view {Object}: The reference of the view that will be associated to this presenter
     */
    setView(view){
        this._presenter.setView(view);
    }

    /**
     * @method
     * _eventClick getter
     * @return {Object}: The ClickCheckEvent object associated to the checklist
     */
    getEventClick(){
        return this._eventClick;
    }

    /**
     * @method
     * _eventComplete getter
     * @return {Object}: The ChecklistComplete object associated to the checklist
     */
    getEventComplete(){
        return this._eventComplete;
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
     * @param position {number}: The index of the item the index of the element to which you want to change the status
     */
    setChecked(checked,position){
        this._presenter.setChecked(checked,position);
    }

    /**
     * @method
     * Sets the completion message appears when all of the list options are checked.
     * @param message {String}: the completion message that will be replaced to the existing
     */
    setCompletionMessage(message){
        this._presenter.setCompletionMessage(message);
    }

    /**
     * @method
     * _completionMessage getter
     * @return {string}: The completion message associated to the checklist
     */
    getCompletionMessage(){
        return this._presenter.getCompletionMessage();
    }

    /**
     * @method
     * Generates HTML CSS JS needed to display the widget.
     * @return {Object}: The dom fragment used to generate html of the checklist
     */
    renderView(){
        return this._presenter.renderView();
    }

    /**
     * @method
     * It allows you to update the html of the checklist after a selection
     */
    update(){
        this._presenter.update();
    }
}
