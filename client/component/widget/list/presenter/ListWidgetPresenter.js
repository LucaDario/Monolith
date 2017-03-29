/**
 * Created by Riccardo Montagnin on 21/03/2017.
 */

import {Indicator} from "../style/Indicator";
import "../view/ListWidget.css";

export class ListWidgetPresenter {

    /**
     * @type {Object}
     */
    _view;

    /**
     * @type {Array}
     */
    _options;

    /**
     * @type {Object}
     */
    _indicator;

    constructor(view){
        this._view = view;
        this._options = [];
        this._indicator = new Indicator();
    }

    addItem(item){
        this._options.push(item);
    }

    setCharacterNumber(){
        this._indicator.setCharacterNumber();
    }

    setCharacterPoint(){
        this._indicator.setCharacterPoint();
    }

    setCharacterSign(){
        this._indicator.setCharacterSign();
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

    renderView(){
        if(!this._map) {
            //var DefineMap = require("can-define/map/map");
            var renderer = Monolith.can.stache('<dl>' + '{{text}}' + '</dl>');
            let html = "";
            if (this._indicator.getCharacter() == "decimal") {
                for (let i = 1; i <= this._options.length; i++) {
                    //<dd> <span> 1) </span> Example </dd>
                    html = html + '<dd>' + '<span style="color:'+ this._indicator.getColor()+'">'
                        + i + ') ' + '</span>' + this._options[i-1] + '</dd>';
                }
            }
            else {
                for (let i = 0; i < this._options.length; i++) {
                   html = html + '<dd>' + '<span style="color:'+ this._indicator.getColor()+'">'
                       + this._indicator.getCharacter() + ' ' + '</span>' + this._options[i] + '</dd>';
                }
            }
            html = $(html);
            this._map = new Monolith.can.DefineMap({
                text: html
            });
        }

        if(!this._dom){
            this._dom = renderer(this._map); // DOM OBJECT    <.... style = '.classe' .../>
            //this._dom.style.color = this._indicator.color;
        }

        return this._dom;
    }



}