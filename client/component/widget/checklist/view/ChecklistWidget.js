/**
 * Created by Francesco Bazzerla on 21/03/2017.
 */

import {ChecklistWidgetView} from './ChecklistWidgetView'
import {ChecklistWidgetPresenter} from '../presenter/ChecklistWidgetPresenter';

export class ChecklistWidget extends ChecklistWidgetView{

    /**
     * @type {ChecklistWidgetPresenter}
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
     * @param option {CheckOption}
     * @param onClick {function}
     * @param onLongClick {function}
     */
    addOption(option,onClick = function(){},onLongClick = function(){}) {
        this._presenter.addOption(option,onClick,onLongClick);
    }

    /**
     *@method
     *Sets the visualization of tick with a character or with a color.
     * @param useMark {boolean}
     */
    set useSelectionMark(useMark){
        this._presenter.useSelectionMark(useMark);
    }

    /**
     *@method
     *Sets the color of checkmarks.
     * @param color {String}
     */
    set selectionColor(color) {
        this._presenter.selectionColor(color);
    }

    /**
     * @method
     *Sets the font of checkmarks.
     * @param character {String}
     */
    set selectionCharacter(character){
        this._presenter.selectionCharacter(character);
    }

    /**
     *@method
     *It allows you to check an item on the checklist or to remove a tick from it.
     * @param checked {boolean}
     * @param position {number}
     */
    setChecked(checked,position){
        this._presenter.setChecked(checked,position);
    }

    /**
     *@method
     *Sets the completion message appears when all of the list options are checked.
     * @param message {String}
     */
    set completionMessage(message){
        this._presenter.completionMessage(message);
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
     * @event onItemClicked
     *
     * @param itemId {String}
     */
    onItemClicked(itemId){

    }

    /**
     * @event onItemLongClicked
     *
     * @param itemId {String}
     */
    onItemLongClicked(itemId){

    }
}
