/**
 * Base abstract class which represents a generic widget.
 * Created by Riccardo Montagnin on 21/03/2017.
 */
class BaseWidget extends BaseComponent{

    /**
     * Public constructor.
     */
    constructor(){
        super();
        if (new.target === BaseWidget) {
            throw new TypeError("Cannot construct BaseWidget instances directly");
        }
    }

}