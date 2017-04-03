/**
 * class BaseComponent
 * Base abstract class which represents a generic component that will be used inside a bubble.
 *
 * Created by Riccardo Montagnin on 21/03/17.
 * Version 1.0.1 - Completed
 */

import {BaseComponent} from "../BaseComponent"

export class BaseWidget extends BaseComponent{

    /**
     * Public constructor.
     */
    constructor(){
        super();
        if (this.constructor === BaseWidget) {
            throw new TypeError("Cannot construct BaseWidget instances directly");
        }
    }

}
