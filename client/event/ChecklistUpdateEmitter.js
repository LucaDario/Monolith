/**
 * class ClickCheckEvent
 * This class exstends from EventEmitter (es6-event-emitter) and represents the event
 * to be emitted when a checkbox is clicked.
 *
 * Created by Francesco Bazzerla on 30/03/17.
 * Version 1.0.2 - Completed
 */

const EventEmitter = require('events');

import {container,inject,singleton} from 'dependency-injection-es6';

export class ChecklistUpdateEmitter extends EventEmitter{

    /**
     * Public constructor
     */
    constructor() {
        super();
    }

    /**
     * @method
     * This method emit an event with 'clickCheckEvent'
     * @param id {string}: The id of the checklist that will emit the event
     */

    emitOnUpdate(id,string){
        this.emit('checklistUpdate',id,string);
    }
}
container.registerAsSingleton(ChecklistUpdateEmitter);
