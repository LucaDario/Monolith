/**
 * class BaseComponent
 * Base abstract class which represents a generic component that will be used inside a bubble.
 *
 * Created by Riccardo Montagnin on 21/03/17.
 * Version 1.0.1 - Completed
 */
export class BaseComponent {

    /**
     * Public constructor. If called directly it will produce an exception as this class is abstract.
     */
    constructor() {
        if (this.constructor === BaseComponent) {
            throw new TypeError("Cannot construct BaseComponent instances directly");
        }
    }

    /**
     * @method
     * Generates HTML CSS JS needed to display the widget.
     * @return {Object}: The dom fragment used to generate html of the checklist
     */
    renderView(){}
}
