/**
 * class ChecklistWidgetView
 * The view for ChecklistWidget.
 *
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.7 - Completed
*/

import {BaseWidget} from '../BaseWidget'

export class ChecklistWidgetItemView extends BaseWidget{

    /**
     * Public constructor
     */
    constructor(text,check = false){
        super();
        if (this.constructor ===  ChecklistWidgetItemView) {
            throw new TypeError("Cannot construct ChecklistWidgetView instances directly");
        }
    }

    /**
     * @method
     * It allows you to remove an item from a checklist
     */
    removeOption(){}

    /**
     * @method
     * It returns the _id of the checklist
     * @return {string}: The id of the checklist
     */
    getId(){}

    /**
     * @method
     * It allows you to add a reference of the view to the presenter
     * @param view {Object}: The reference of the view that will be associated to this presenter
     */
    setView(view){}

    /**
     * @method
     * It allows you to modify the text of an item
     * @param text {string}: The text that will be replaced to the existing one
     */
    setText(text){}

    /**
     * @method
     * Sets the visualization of tick with a character or with a color.
     * @param useMark {boolean}: Check-mark will be shown by a symbol if this field is true; if this field is false the check-mark
     * wiil be shown by a color
     */
    setUseSelectionMark(useMark){}

    /**
     * @method
     * Sets the color of checkmarks.
     * @param color {String}: It represents the color of the check-mark
     */
    setSelectionColor(color) {}

    /**
     * @method
     * Sets the symbol of checkmarks.
     * @param character {String}: The symbol to represent the selection
     */
    setSelectionCharacter(character){}

    /**
     * @method
     * It allows you to check an item on the checklist or to remove a tick from it.
     * @param checked {boolean}: A boolean value that represents the state of the item: checked or not
     */
    setChecked(checked){}
    /**
     * @method
     * _isChecked getter
     * @return {boolean}: The boolean status of the option
     */
    isChecked(){}

    /**
     * @method
     * _eventClick getter
     * @return {Object}: The ClickCheckEvent object associated to the checklist
     */
    getChecklistUpdate(){}
}
