/**
 * class ChecklistComplete
 * This class exstends from EventEmitter (es6-event-emitter) and represents the event
 * to be emitted when all the checkbox of a checklist are checked.
 *
 * Created by Francesco Bazzerla on 30/03/17.
 * Version 1.0.0 - Completed
 */

const EventEmitter = require('events');
export class ChecklistComplete extends EventEmitter{

    /**
     * Public constructor
     */
    constructor() {
        super();
    }

    /**
     * @method
     * This method emit an event with 'checklistComplete'
     */
    emitChecklistComplete(){
        this.emit('checklistComplete');
    }
}
