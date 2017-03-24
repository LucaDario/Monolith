/**
 * The concrete class of ChecklistWidget.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 -
 */


import {ChecklistWidgetView} from './ChecklistWidgetView'
import {ChecklistWidgetPresenter} from '../presenter/ChecklistWidgetPresenter';

export class ChecklistWidget extends ChecklistWidgetView{

    /**
     * @type {Object}: Presenter of ChecklistWidget
     */
    _presenter;

    /**
     * @constructor
     * Constructor of ChecklistWidget
     */
    constructor(){
        super();
        //TODO inject
        this._presenter = new ChecklistWidgetPresenter(this);
    }

    /**
     *@method
     * It allows you to add a new item into checklist
     * @param option {Object}
     * @param onClick {function}
     * @param onLongClick {function}
     */
    addOption(option,onClick = function(){},onLongClick = function(){}) {
        this._presenter.addOption(option,onClick,onLongClick);
    }

    /**
     *@method
     * It allows you to remove an item from a checklist
     * @param id {String,number} If it's an Integer value the method removes the item in the specified position.
     * If it's a String value the method removes the item with the specified id.
     */
    removeOption(id){
        this._presenter.removeOption(id);
    }

    /**
     *@method
     *Sets the visualization of tick with a character or with a color.
     * @param useMark {boolean}
     */
    setUseSelectionMark(useMark){
        this._presenter.setUseSelectionMark(useMark);
    }

    /**
     *@method
     *Sets the color of checkmarks.
     * @param color {String}
     */
    setSelectionColor(color) {
        this._presenter.setSelectionColor(color);
    }

    /**
     * @method
     *Sets the symbol of checkmarks.
     * @param character {String}
     */
    setSelectionCharacter(character){
        this._presenter.setSelectionCharacter(character);
    }

    /**
     *@method
     *It allows you to check an item on the checklist or to remove a tick from it.
     * @param checked {boolean}
     * @param position {Number}
     */
    setChecked(checked,position){
        this._presenter.setChecked(checked,position);
    }

    /**
     *@method
     *Sets the completion message appears when all of the list options are checked.
     * @param message {String}
     */
    setCompletionMessage(message){
        this._presenter.setCompletionMessage(message);
    }

    /**
     * @method
     *It allows you to throw the event onListCompleted().
     */
    emitOnListCompletedEvent(){

    }

    /**
     * @method
     *Generates HTML CSS JS needed to display the widget.
     * @return {String}
     */
    renderView(){
        return this._presenter.renderView();
    }

    /**
     * Events
     */
    // TODO : IMPLEMENT EVENTS

    onItemClicked(itemId){

    }

    onItemLongClicked(itemId){

    }
}
