/**
 * Created by Stefano Lia on 21/03/2017
 * Version 1.0.0 - 1.0.0
 * */
import {BaseLayout} from '../BaseLayout';

import './HorizontalLayout.css';

export class HorizontalLayoutView extends BaseLayout{

    /**
     * @constructor
     * Constructor of HorizontalLayoutView.
     */
    constructor(){
        super();
        this._dom = null;
    }

    /**
     * @method
     * This function create HTML to render an Horizontal Layout for a Bubble.
     * @return {DocumentFragment} Returns the rendered view as a string.
     */
    renderView(){
        if(this._dom == null){
            this._dom = document.createElement("div");
            this._dom.setAttribute('class', 'hl');
            const childs = this.getItems();
            for(let i = 0; i < childs.length; i++){
                const column = this._createColumn();
                column.appendChild(childs[i].renderView());
                this._dom.appendChild(column);
            }
        }
        return this._dom;
    }

    /**
     *
     * @param component
     * @returns {*}
     */
    addItem(component) {
        super.addItem(component);
        if(this._dom !== null){
            const column = this._createColumn();
            column.appendChild(component.renderView());
            this._dom.appendChild(column);
        }
    }

    /**
     *
     * @returns {Element}
     * @private
     */
    _createColumn(){
        const item = document.createElement("div");
        item.setAttribute('class', 'hl-column');
        return item;
    }
}