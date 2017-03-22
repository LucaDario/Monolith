/**
 * Base abstract class which represents a generic component that will be used inside a bubble.
 * Created by Riccardo Montagnin on 21/03/2017.
 */
class BaseComponent {

    /**
     * Public constructor. If called directly it will produce an exception as this class is abstract.
     */
    constructor() {
        if (new.target === BaseComponent) {
            throw new TypeError("Cannot construct BaseComponent instances directly");
        }
    }

    /**
     * Renders the view of the component.
     * @return {String} Returns the rendered view as a string.
     */
    renderView() {}
}