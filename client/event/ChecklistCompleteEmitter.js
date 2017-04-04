/**
 * class ChecklistComplete
 * This class exstends from EventEmitter (es6-event-emitter) and represents the event
 * to be emitted when all the checkbox of a checklist are checked.
 *
 * Created by Francesco Bazzerla on 30/03/17.
 * Version 1.0.0 - Completed
 */

const EventEmitter = require('events');

import {container,inject,singleton} from 'dependency-injection-es6';

export class ChecklistCompleteEmitter extends EventEmitter{

    /**
     * Public constructor
     */
    constructor() {
        super();
    }

    /**
     * @method
     * This method emit an event with 'checklistComplete'
     * @param id {string}: The id of the checklist that will emit the event
     */
    emitChecklistComplete(id){
        this.emit('checklistComplete',id);
    }
}
container.registerAsSingleton(ChecklistCompleteEmitter);
