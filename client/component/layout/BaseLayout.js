/**
 * Base abstract class which represents a generic layout.
 * Created by Riccardo Montagnin on 21/03/2017.
 */

import {BaseComponent} from "../BaseComponent"

export class BaseLayout extends BaseComponent{

    /**
     * @type {Array}: List of items that are contained inside the layout.
     */
    _items;

    /**
     * Public constructor.
     */
    constructor(){
        super();
        if (this.constructor ===  BaseLayout) {
            throw new TypeError("Cannot construct BaseLayout instances directly");
        }
        this._items = [];
    }

    /**
     * Adds an item to the layout.
     * @param {Object} component: Component to be added to the layout.
     */
    addItem (component) {
        this._items.push(component);
    }
}
