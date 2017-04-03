/**
 * class ClickCheckEvent
 * This class exstends from EventEmitter (es6-event-emitter) and represents the event
 * to be emitted when a checkbox is clicked.
 *
 * Created by Francesco Bazzerla on 30/03/17.
 * Version 1.0.2 - Completed
 */

const EventEmitter = require('events');

import {container, singleton, inject} from 'dependency-injection-es6';

export class ClickCheckEvent extends EventEmitter{

    /**
     * Public constructor
     */
    constructor() {
        super();
    }

    /**
     * @method
     * This method emit an event with 'clickCheckEvent'
     */

    emitClickCheckEvent(){
        this.emit('clickCheckEvent');
    }

    /**
     * @method
     * This method emit an event with 'longClickCheckEvent'
     * @param option {Object}: the reference to the CheckOption object that will be notified
     */

    emitLongClickCheckEvent(option){
        this.emit('longClickCheckEvent',option);
    }
}
// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(ClickCheckEvent);
