/**
 * The presenter of ListWidget
 *
 * Created by Riccardo Montagnin on 21/03/2017.
 * Version 1.0.2 - Completed and instantiable
 */

import {Indicator} from "../style/Indicator";
import "../view/ListWidget.css";

export class ListWidgetPresenter {
    /**
     * Public constructor
     * @param view Object : represents the view of ListWidget
     */
    constructor(view){
        this._view = view;
        this._options = [];
        this._indicator = new Indicator();
        this._dom = null;
        this._map = null;
    }

    /**
     * @method
     * It adds an item in the list
     * @param item Object : represents the item that will be added in the list
     */
    addItem(item){
        this._options.push(item);
    }

    /**
     * @method
     * It changes the indicator of the list in numbers. The result will be an ordered list.
     */
    setCharacterNumber(){
        this._indicator.setCharacterNumber();
    }
    /**
     * @method
     * It changes the indicator of the list in circle. The result will be a list with circles.
     */
    setCharacterCircle(){
        this._indicator.setCharacterCircle();
    }
    /**
     * @method
     * It changes the indicator of the list in dash. The result will be a list with dashes.
     */
    setCharacterDash(){
        this._indicator.setCharacterDash();
    }

    /**
     * @method
     * Sets the color of the character used for the list
     * @param color {string} : the color chosen by the user
     */

    setColor(color){
        this._indicator.setColor(color);
    }

    /**
     * @method
     * returns the character used for the list
     * @return {string} : represents the character
     */

    getCharacter(){
        return this._indicator.getCharacter();
    }

    /**
     * @method
     * returns the color of the character
     * @return {string}: the color of the character
     */

    getColor(){
        return this._indicator.getColor();
    }

    /**
     * @method
     * returns the array of item in the list
     * @return {Array} : it returns the items in the list
     */

    getOptions(){
        return this._options;
    }

    /**
     * @method
     * returns the HTML and CSS of the ListWidget
     * @return {dom} : returns the dom element in which there are HTML and CSS for the list
     */
    renderView(){
            let renderer = Monolith.can.stache('<dl>' + '{{text}}' + '</dl>');
            let html = ""; //variable that represents the html that will be returned by this function
            if (this._indicator.getCharacter() === "decimal") {
                for (let i = 1; i <= this._options.length; i++) {
                    //<dd> <span> 1) </span> Example </dd>
                    html = html + '<dd>' + '<span style="color:'+ this._indicator.getColor()+'">'
                        + i + ') ' + '</span>' + this._options[i-1] + '</dd>';
                }
            }
            else {
                for (let i = 0; i < this._options.length; i++) {
                    //<dd> <span style="color:..."> indicatore </span> Example </dd>
                    html = html + '<dd>' + '<span style="color:'+ this._indicator.getColor()+'">'
                       + this._indicator.getCharacter() + ' ' + '</span>' + this._options[i] + '</dd>';
                }
            }
            html = $(html); //remove the escape included by can.js
            this._map = new Monolith.can.DefineMap({
                text: html
            });

        this._dom = renderer(this._map);
        return this._dom;
    }
}
