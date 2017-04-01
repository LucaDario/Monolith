/**
 * Class Event that exstends from EventEmitter (es6-event-emitter) and represents the event
 * to be emitted when a checkbox is clicked.
 * Created by Francesco Bazzerla on 30/03/17.
 * Version 1.0.0 - 1.0.0
 */

const EventEmitter = require('events');

import {container, singleton, inject} from 'dependency-injection-es6';

export class ClickCheckEvent extends EventEmitter{

    /**
     * @constructor
     * Public constructor
     */
    constructor() {
        super();
    }

    /**
     * Public
     * @method
     * This method emit an event with 'clickCheckEvent'
     */

    emitClickCheckEvent(){
        this.emit('clickCheckEvent');
    }

    /**
     * Public
     * @method
     * This method emit an event with 'clickCheckEvent'
     */

    emitLongClickCheckEvent(){
        this.emit('longClickCheckEvent');
    }
}
// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(ClickCheckEvent);
