/**
 * The view for ChecklistWidget.
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
        if (this instanceof ChecklistWidgetView) {
            throw new TypeError("Cannot construct ChecklistWidgetView instances directly");
        }
    }

    /**
     *@method
     * It allows you to add a new item into checklist
     * @param option {Object}
     * @param onClick {Function}
     * @param onLongClick {Function}
     */
    addOption(option,onClick = function(){},onLongClick = function(){}){}

    /**
     *@method
     * It allows you to remove an item from a checklist
     * @param id {String,number} If it's an Integer value the method removes the item in the specified position.
     * If it's a String value the method removes the item with the specified id.
     */
    removeOption(id){}

    /**
     *@method
     *Sets the visualization of tick with a character or with a color.
     * @param useMark {Boolean}
     */
    setUseSelectionMark(useMark){}

    /**
     *@method
     *Sets the color of checkmarks.
     * @param color {String}
     */
    setSelectionColor(color){}

    /**
     * @method
     *Sets the symbol of checkmarks.
     * @param character {String}
     */
    setSelectionCharacter(character){}

    /**
     *@method
     *It allows you to check an item on the checklist or to remove a tick from it.
     * @param checked {Boolean}
     * @param position {Number}
     */
    setChecked(checked,position){}

    /**
     *@method
     *Sets the completion message appears when all of the list options are checked.
     * @param message {String}
     */
    setCompletionMessage(message){}

    /**
     * @method
     *It allows you to emit the event onListCompleted().
     */
    emitOnListCompletedEvent(){}

    /**
     * Events
     */

    onItemClicked(itemId){}
    onItemLongClicked(itemId){}

    // TODO : IMPLEMENT EVENT

    onListCompleted(){}

}
