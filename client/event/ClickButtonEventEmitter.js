/**
 * Class Event that extends from EventEmitter (es6-event-emitter) and represents the event
 * to be emitted when a button is clicked.
 * Created by diego on 02/04/17.
 * 1.0.0  -
 */

const EventEmitter = require('events');

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