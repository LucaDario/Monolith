/**
 * Created by Riccardo Montagnin on 21/03/2017.
 */

import {Indicator} from "../style/Indicator";

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
    renderView(){
        if(!this._map) {
            //var DefineMap = require("can-define/map/map");
            var renderer = Monolith.can.stache('<ul>' + '{{text}}' + '</ul>');
            let html = "";
            if (this._indicator.character == "decimal") {
                for (let i = 1; i <= this._options.length; i++) {
                    html = html + '<li>' + '<span>' + i + ') ' + '</span>' + this._options[i-1] + '</li>';
                }
            }
            else {
                for (let i = 0; i < this._options.length; i++) {
                    html = html + '<li>' + '<span>' + this._indicator.character + ' ' + '</span>' + this._options[i] + '</li>';
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