/**
 * The presenter of ChecklistWidget.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 -
 */


import {ChecklistWidgetView} from '../view/ChecklistWidgetView';
import {CheckStyle} from '../style/CheckStyle';
import {CheckOption} from '../option/CheckOption';

export class ChecklistWidgetPresenter{

    /**
     * @type {Object}: ChecklistWidget element for the presenter
     */
    _view;

    /**
     * @type {Array}: It contains all items of the checklist
     */
    _options;

    /**
     * @type {Object}: CheckStyle element that allows you to personalize check-marks
     */
    _style;

    /**
     * @type {String}: It contains the completion message of the checklist
     */
    _completionMessage;

    /**
     * @constructor
     * Constructor of ChecklistWidgetPresenter
     * @param view {Object}
     * the view associated with the presenter
     */
    constructor(view){
        this._view = view;
        this._options = [];
        this._style = new CheckStyle();
        this._completionMessage = "";
    }

    /**
     * @method
     * It allows you to add a new item into the checklist assigning its also the events for normal or long click on
     * check.
     * @param option {Object}
     * @param onClick {function}
     * @param onLongClick {function}
     */
    addOption(option,onClick,onLongClick){
        this._options.push(new CheckOption(option,onClick,onLongClick));
    }

    /**
     *@method
     *It allows you to check an item on the checklist or to remove a tick from it.
     * @param checked {boolean}
     * @param position {number}
     */
    setChecked(checked,position){
        this._options[position].setChecked(checked,position);
    }

    /**
     *@method
     *Sets the symbol of checkmarks.
     * @param character {String}
     */
    setSelectionCharacter(character){
        this._style.setSelectionCharacter(character);
    }

    /**
     * @method
     *Sets the visualization of tick with a character or with a color.
     * @param useMark {boolean}
     */
    setUseSelectionMark(useMark){
        this._style.setUseSelectionMark(useMark);
    }

    /**
     *@method
     *Sets the color of checkmarks.
     * @param color {String}
     */
    setSelectionColor(color){
        this._style.setSelectionColor(color);
    }

    /**
     *@method
     *Sets the completion message appears when all of the list options are checked.
     * @param message {String}
     */
    setCompletionMessage(message){
        this._completionMessage = message;
    }

    /**
     * @method
     * Generates HTML CSS JS needed to display the widget.
     */
    renderView(){
        // TODO: Implement this
    }
}
