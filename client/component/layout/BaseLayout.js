/**
 * Base abstract class which represents a generic layout.
 *
 * Created by Riccardo Montagnin on 21/03/2017.
 * Version 1.0.0 - Completed
 */

import {BaseComponent} from "../BaseComponent"
import {Exception} from "../../exception/Exception"

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
     * @param {BaseComponent} component: Component to be added to the layout.
     */
    addItem (component) {
        if(component === this){
            throw new Exception("Can't add itself");
        }
        if(!(component instanceof BaseComponent)){
            throw new Exception("Can't add item that don't implements BaseComponent interface");
        }
        this._items.push(component);
    }

    /**
     * Adds the last item from the layout.
     */
    removeLast(){
        this._items.pop();
    }

    /**
     * Gets the current items inside the layout.
     * @returns {Array} components: Components added in the layout.
     */
    getItems(){
        return this._items;
    }
}
