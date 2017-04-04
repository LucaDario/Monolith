/**
 * class ChecklistWidgetView
 * The view for ChecklistWidget.
 *
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.7 - Completed
*/

import {BaseWidget} from '../BaseWidget'

export class ChecklistWidgetView extends BaseWidget{

    /**
     * Public constructor
     */
    constructor(){
        super();
        if (this.constructor ===  ChecklistWidgetView) {
            throw new TypeError("Cannot construct ChecklistWidgetView instances directly");
        }
    }

    /**
     * @method
     * It allows you to add a new item into the checklist
     * @param optionText {string}: The text of the option
     * @param check {boolean}: A boolean value that represents the status of the item: checked or not
     */
    addOption(optionText,check = false){}

    /**
     * @method
     * It allows you to remove an item from a checklist
     * @param index {number}: The index of the option to remove
     */
    removeOption(index){}

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
     * _eventClick getter
     * @return {Object}: The ClickCheckEvent object associated to the checklist
     */
    getEventClick(){}

    /**
     * @method
     * _eventComplete getter
     * @return {Object}: The ChecklistComplete object associated to the checklist
     */
    getEventComplete(){}

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
     * @param position {number}: The index of the item the index of the element to which you want to change the status
     */
    setChecked(checked,position){}

    /**
     * @method
     * Sets the completion message appears when all of the list options are checked.
     * @param message {String}: the completion message that will be replaced to the existing
     */
    setCompletionMessage(message){}

    /**
     * @method
     * _completionMessage getter
     * @return {string}: The completion message associated to the checklist
     */
    getCompletionMessage(){}

    /**
     * @method
     * It allows you to update the html of the checklist after a selection
     */
    update(){}

}
