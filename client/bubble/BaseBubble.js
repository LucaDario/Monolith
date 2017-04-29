/**
 * Abstract class represents all kind of bubble.
 * Created by Francesco Bazzerla on 23/03/2017
 * Version 1.0.0 - Completed
 */

import {VerticalLayoutView} from '../component/layout/vertical/VerticalLayoutView';
import './bubble.less';

export class BaseBubble{
    /**
     * @type {Object}: VerticalLayout which contains and place component on bubble.
     */
    _layout;

    /**
     * @constructor
     * Constructor of BaseBubble
     */
    constructor(){
        if(this.constructor === BaseBubble){
            throw new TypeError("Cannot construct BaseBubble instances directly");
        }
        this._layout = new VerticalLayoutView();
    }

    /**
     * @method
     * It allows you to add a component to the VerticalLayout of the bubble.
     * @param component
     */
    addComponent(component){
        this._layout.addItem(component);
    }

    /**
     * @method
     * Generates HTML CSS JS needed to display the widget.
     * @return {Element}
     */
    renderView(){
        return this._layout.renderView();
    }
}
