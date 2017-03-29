/**
 * The presenter of ChecklistWidget.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 - 1.0.0
 */

import {ChecklistWidgetView} from '../ChecklistWidgetView';
import {CheckStyle} from '../style/CheckStyle';
import {CheckOption} from '../options/CheckOption';
import './checklist.css';

export class ChecklistWidgetPresenter{

    /**
     * @type {Object}: DOM element that allows to change CSS
     */
    _dom;

    /**
     * @type {Object}: DefineMap element that allows to update view
     */
    _map;

    /**
     * @type {Object}: ChecklistWidget element for the presenter
     */
    _view;

    /**
     * @type {Array}: It contains all items of the checklist
     */
    _options;

    /**
     * @type {Object}: CheckStyle element that allows you to personalize check-marks
     */
    _style;

    /**
     * @type {String}: It contains the completion message of the checklist
     */
    _completionMessage;

    /**
     * @constructor
     * Constructor of ChecklistWidgetPresenter
     * @param view {Object}
     * the view associated with the presenter
     */
    constructor(view){
        this._view = view;
        this._options = [];
        this._style = new CheckStyle();
        this._completionMessage = '';
        this._map = new Monolith.can.DefineMap({
            checkbox: ''
        });
    }

    /**
     * @method
     * It allows you to add a new item into the checklist assigning its also the events for normal or long click on
     * check.
     * @param option {Object}
     * @param onClick {function}
     * @param onLongClick {function}
     */
    addOption(option,onClick,onLongClick){
        option.setOnClick(onClick);
        option.setOnLongClick(onLongClick);
        this._options.push(option);
    }

    //TODO: test it
    /**
     *@method
     * It allows you to remove an item from a checklist
     * @param id {String,number} If it's an Integer value the method removes the item in the specified position.
     * If it's a String value the method removes the item with the specified id.
     */
    removeOption(id){
        if(Number.isInteger(id)){
            if(id>=1) {
                if(id === this._options.length-1){
                    this._options = this._options.slice(0,this._options.length-1);
                }
                else{
                    let optionsFirstSlice = this._options.slice(0, id - 1);
                    let optionsSecondSlice = this._options.slice(id + 1, this._options.length);
                    this._options = optionsFirstSlice.concat(optionsSecondSlice);
                }
            }
            if(id==0){
                this._options = this._options.slice(1, this._options.length);
            }
        }
        else{
            for(let i in this._options){
                if(this._options[i].getId() === id){
                    if(i >= 1) {
                        if(i === this._options.length-1){
                            this._options = this._options.slice(0,this._options.length-1);
                        }
                        else{
                            let optionsFirstSlice = this._options.slice(0, i - 1);
                            let optionsSecondSlice = this._options.slice(i + 1, this._options.length);
                            this._options = optionsFirstSlice.concat(optionsSecondSlice);
                        }
                    }
                    if(i === 0){
                        this._options = this._options.slice(1, this._options.length);
                    }
                    break;
                }
            }
        }
    }

    /**
     *@method
     *It allows you to check an item on the checklist or to remove a tick from it.
     * @param checked {boolean}
     * @param position {number}
     */
    setChecked(checked,position){
        this._options[position].setChecked(checked,position);
    }

    /**
     *@method
     *Sets the symbol of checkmarks.
     * @param character {String}
     */
    setSelectionCharacter(character){
        this._style.setSelectionCharacter(character);
    }

    /**
     * @method
     *Sets the visualization of tick with a character or with a color.
     * @param useMark {boolean}
     */
    setUseSelectionMark(useMark){
        this._style.setUseSelectionMark(useMark);
    }

    /**
     *@method
     *Sets the color of checkmarks.
     * @param color {String}
     */
    setSelectionColor(color){
        this._style.setSelectionColor(color);
    }

    /**
     *@method
     *Sets the completion message appears when all of the list options are checked.
     * @param message {String}
     */
    setCompletionMessage(message){
        this._completionMessage = message;
    }

    /**
     * @method
     * Generates HTML CSS JS needed to display the widget.
     * @return {Object}
     */
    renderView(){
        let DefineMap = new Monolith.can.DefineMap;
        let renderer = Monolith.can.stache('<div class="checkbox">{{checkbox}}</div>');

        /**
         * Temporary variables
         */
        let html = '';
        let mark = '';
        let symbol = '';
        let color = '';
        let completionMessage = '';

        /**
         * Generate html
         */
        for(let i in this._options){
            let check = '';
            let id = this._options[i].getId();
            if(this._options[i].isChecked()){
                check = ' checked="checked"';
            }
            let text = this._options[i].getText().toString();
            html = html +
                '<div class="checkbox-m">' +
                '<label>' +
                '<input type="checkbox"' + check + '/>' +
                '<span>' + text + '</span>' +
                '</label>' +
                '</div>';
        }

        html = $(html);

        //let renderer = Monolith.can.stache('<div class="checkbox">{{checkbox}}</div>');

        /**
         *Replacement placeholders in html
         */
        this._map = new Monolith.can.DefineMap({
            checkbox: html
        });

        /**
         * Create DOM element
         */
        this._dom = renderer(this._map);

        /**
         * Modify the CSS according to the developer's preferences
         */
        if(!this._style.getUseSelectionMark()){
            mark = '';
            color = this._style.getSelectionColor();
            symbol = this._style.getSelectionCharacter();
        }
        else{
            mark = '\\2714';
        }



        //TODO: completionMessage
/*
        if(mark === ''){
            let x = document.createElement('STYLE');
            let t = document.createTextNode('label span{padding-left:2em;}label span{padding-left:3em;}.checkbox-m label {width: 100%;border-radius: 5px;font-weight: normal;}.checkbox-m {clear: both;overflow: auto;height:3em;} label input[type=\"checkbox\"]:empty {display: none;} label input[type=\"checkbox\"]:empty ~ span {position: relative;line-height: 2em;text-indent: 3.25em;margin-top: 2em;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;} label input[type=\"checkbox\"]:empty ~ span:before {position: absolute;display: block;top: 0;bottom: 0;left: 0;content: \'\';width: 2em;height:2em;background: #D1D3D4;border:1px solid #333;border-radius: 5px;} label input[type=\"checkbox\"]:hover:not(:checked) ~ span {color: #333;} label input[type=\"checkbox\"]:hover:not(:checked) ~ span:before {content: \'\';text-indent: .5em;color: #C2C2C2;} label input[type=\"checkbox\"]:checked ~ span {color: #777;}  label input[type=\"checkbox\"]:checked ~ span:before {content: \'\';text-indent: .6em;color: #333;background-color: #ccc;} label input[type=\"checkbox\"]:focus ~ span:before {box-shadow: 0 0 0 3px #999;} label input[type=\"checkbox\"]:checked ~ span:before {color: #fff;background-color: green;}');
            x.appendChild(t);
            document.head.appendChild(x);
        }
        else{
            let x = document.createElement("STYLE");
            let t = document.createTextNode('label span{padding-left:3em;} .checkbox-m label{width: 100%; height:2em;font-weight: normal;}.checkbox-m {clear: both;overflow: auto;height:3em;} label input[type=\"checkbox\"]:empty {display: none;} label input[type=\"checkbox\"]:empty ~ span {position: relative;line-height: 2em;height:2em;text-indent: 3.25em;margin-top: 2em;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;} label input[type=\"checkbox\"]:empty ~ span:before {position: absolute;display: block;top: 0;bottom: 0;left: 0;content: \'\';width: 2em;height:2em;background: #D1D3D4;border:1px solid #333;border-radius: 5px;} label input[type=\"checkbox\"]:hover:not(:checked) ~ span {color: #333;} label input[type=\"checkbox\"]:hover:not(:checked) ~ span:before {content: \'\';text-indent: .4em;color: #C2C2C2;} label input[type=\"checkbox\"]:checked ~ span {color: #777;}  label input[type=\"checkbox\"]:checked ~ span:before {content: \'\\2714\';text-indent: .4em; color: #333;background-color: #ccc;} label input[type=\"checkbox\"]:focus ~ span:before {box-shadow: 0 0 0 3px #999;} label input[type=\"checkbox\"]:checked ~ span:before {color: #fff;background-color: green;}');
            x.appendChild(t);
            document.head.appendChild(x);
        }*/
        return this._dom;
    }
}
