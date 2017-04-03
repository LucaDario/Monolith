/**
 * class ChecklistWidgetView
 * The view for ChecklistWidget.
 *
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 - 1.0.0
*/

import {BaseWidget} from '../BaseWidget'

export class ChecklistWidgetView extends BaseWidget{

    /**
     * @constructor
     * Constructor of ChecklistWidgetView
     */
    constructor(){
        super();
        if (this.constructor ===  ChecklistWidgetView) {
            throw new TypeError("Cannot construct ChecklistWidgetView instances directly");
        }
    }

    /**
     *@method
     * It allows you to add a new item into checklist
     * @param optionText {string}
     * @param check {boolean}
     */
    addOption(optionText,check){}

    /**
     *@method
     * It allows you to remove an item from a checklist
     * @param option {Object}:
     */
    removeOption(option){}

    /**
     *@method
     *Sets the visualization of tick with a character or with a color.
     * @param useMark {boolean}:
     */
    setUseSelectionMark(useMark){}

    /**
     *@method
     *Sets the color of checkmarks.
     * @param color {string}:
     */
    setSelectionColor(color){}

    /**
     * @method
     *Sets the symbol of checkmarks.
     * @param character {string}:
     */
    setSelectionCharacter(character){}

    /**
     *@method
     *It allows you to check an item on the checklist or to remove a tick from it.
     * @param checked {boolean}:
     * @param position {number}:
     */
    setChecked(checked,position){}

    /**
     *@method
     *Sets the completion message appears when all of the list options are checked.
     * @param message {string}:
     */
    setCompletionMessage(message){}

}
