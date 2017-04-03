/**
 * Class Event that extends from EventEmitter (es6-event-emitter) and represents the event
 * to be emitted when a button is clicked.
 * Created by diego on 02/04/17.
 * 1.0.0  -
 */

const EventEmitter = require('events');

import {container, singleton, inject} from 'dependency-injection-es6';

export class ClickButtonEvent extends EventEmitter{

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
     * This method emit an event with 'clickButtonEvent'
     */

    emitClickButtonEvent(){
        this.emit('clickButtonEvent');
    }

    /**
     * Public
     * @method
     * This method emit an event with 'longClickButtonEvent'
     */

    emitLongClickButtonEvent(){
        this.emit('longClickButtonEvent');
    }
}
// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(ClickButtonEvent);
