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
     */

    emitClickCheckEvent(){
        this.emit('clickCheckEvent');
    }

    /**
     * @method
     * This method emit an event with 'longClickCheckEvent'
     * @param index {number}: the index of the option that will emit the event
     */

    emitLongClickCheckEvent(index){
        this.emit('longClickCheckEvent',index);
    }
}
