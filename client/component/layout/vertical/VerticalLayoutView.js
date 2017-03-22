/**
 * Created by Stefano Lia on 21/03/2017
 * Version 1.0.0 - 1.0.0
 */
import {BaseLayout} from "../BaseLayout"

export class VerticalLayoutView extends BaseLayout{

    /**
     * @constructor
     * Constructor of VerticalLayoutView.
     */
    constructor(){
        super();
    }

    /**
     * @method
     * This function create HTML to render an Vertical Layout for a Bubble.
     * @return {String} Returns the rendered view as a string.
     */
    renderView(){

        let text = "";
        for (let i = 0; i < this._items.length; i++) {
            text +=  "<li>" + [i].renderView() + "</li>";
        }
        return "<ul class='list-unstyled'>" + text + "</ul>";
    }
}
