/**
 * class ClickCheckEvent
 * This class exstends from EventEmitter (es6-event-emitter) and represents the event
 * to be emitted when a checkbox is clicked.
 *
 * Created by Francesco Bazzerla on 30/03/17.
 * Version 1.0.2 - Completed
 */

const EventEmitter = require('events');
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
     * @param status {boolean}: The value of the option that emitted the event
     * @param index {index}: The index of the option that emitted the event
     */

    emitClickCheckEvent(status,index){
        this.emit('clickCheckEvent',status,index);
    }

    /**
     * @method
     * This method emit an event with 'longClickCheckEvent'
     * @param index {number}: The index of the option that emitted the event
     */

    emitLongClickCheckEvent(index){
        this.emit('longClickCheckEvent',index);
    }
}
