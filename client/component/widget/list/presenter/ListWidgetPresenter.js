/**
 * Created by Riccardo Montagnin on 21/03/2017.
 * Version 1.0.2 - ListWidgetPresenter is completed and instantiable
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

    setColor(color){
        this._indicator.setColor(color);
    }

    getCharacter(){
        return this._indicator.getCharacter();
    }

    getColor(){
        return this._indicator.getColor();
    }

    getOptions(){
        return this._options;
    }

    /**
     * @method
     * return the HTML and CSS of the ListWidget
     */
    renderView(){
        if(!this._map) {
            var renderer = Monolith.can.stache('<dl>' + '{{text}}' + '</dl>');
            let html = ""; //variable that represents the html that will be returned by this function
            if (this._indicator.getCharacter() == "decimal") {
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
        }

        if(!this._dom){
            this._dom = renderer(this._map); // DOM OBJECT    <.... style = '.classe' .../>
        }

        return this._dom;
    }



}