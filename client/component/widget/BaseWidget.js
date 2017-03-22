/**
 * Base abstract class which represents a generic widget.
 * Created by Riccardo Montagnin on 21/03/2017.
 */
import {BaseComponent} from "../BaseComponent"

export class BaseWidget extends BaseComponent{

    /**
     * Public constructor.
     */
    constructor(){
        super();
        if (this instanceof BaseWidget) {
            throw new TypeError("Cannot construct BaseWidget instances directly");
        }
    }

}
