/**
* Created by Francesco Bazzerla on 21/03/2017.
*/

import {BaseWidget} from '../../BaseWidget.js'

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

    addOption(option,onClick = function(){},onLongClick = function(){}){}
    set useSelectionMark(useMark) {}
    set selectionColor(color) {}
    set selectionCharacter(character){}
    setChecked(checked,position){}
    set completionMessage(message){}
    emitOnListCompletedEvent(){}

    /**
     * Events
     */
    onItemClicked(itemId){}
    onItemLongClicked(itemId){}
    onListCompleted(){}

}
