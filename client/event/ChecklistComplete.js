/**
 * class ChecklistComplete
 * This class exstends from EventEmitter (es6-event-emitter) and represents the event
 * to be emitted when all the checkbox of a checklist are checked.
 *
 * Created by Francesco Bazzerla on 30/03/17.
 * Version 1.0.0 - Completed
 */

const EventEmitter = require('events');

import {container, singleton, inject} from 'dependency-injection-es6';

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
     * @param checkid {string}: The id of the checklist that is completed
     */
    emitChecklistComplete(checkid){
        this.emit('checklistComplete',checkid);
    }
}
// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(ChecklistComplete);
