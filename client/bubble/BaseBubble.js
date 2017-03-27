/**
 * Abstract class represents all kind of bubble.
 * Created by Francesco Bazzerla on 23/03/2017
 * Version 1.0.0 - 1.0.0
 */

import {VerticalLayoutView} from '../component/layout/vertical/VerticalLayoutView';

export class BaseBubble{
    /**
     * @type {Object}: VerticalLayout which contains and place component on bubble.
     */
    layout;

    /**
     * @constructor
     * Constructor of BaseBubble
     */
    constructor(){
        if(this.constructor === BaseBubble){
            throw new TypeError("Cannot construct BaseBubble instances directly");
        }
        layout = new VerticalLayoutView();
    }

    addComponent(component){
        this.layout.addItem(component);
    }

    /**
     * @method
     * Generates HTML CSS JS needed to display the widget.
     * @return {String}
     */
    renderView(){
        this.layout.renderView();
    }
}
