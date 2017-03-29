/**
 * The presenter of ChecklistWidget.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 - 1.0.0
 */

import {CheckStyle} from '../style/CheckStyle';
import {CheckOption} from '../options/CheckOption';
import './checklist.css';

export class ChecklistWidgetPresenter{

    /**
     * Public Constructor
     */
    constructor(){
        this._dom = null;
        this._options = [];
        this._style = new CheckStyle();
        this._completionMessage = '';
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
        this._options[position].setChecked(checked);
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
    renderView() {
        this._dom = document.createElement('div');
        this._dom.setAttribute('class', 'checkbox');

        /**
         * Temporary variables
         */
        let symbol = this._style.getSelectionCharacter();
        let color = this._style.getSelectionColor();
        let completionMessage = this._completionMessage;

        /**
         * Generate html
         */
        for (let i in this._options) {
            let text = this._options[i].getText();
            let dom1 = document.createElement('div');
            dom1.setAttribute('class', 'checkbox-m');
            let dom2 = document.createElement('label');
            let dom3 = document.createElement('input');
            let dom4 = document.createElement('div');
            let dom5 = document.createElement('span');
            let dom6 = document.createElement('span');
            dom3.type = 'checkbox';
            if (this._options[i].isChecked()){
                dom3.setAttribute('checked', 'checked');
                dom4.setAttribute('class','spanCheckBef spanEmptyBef');
                dom6.setAttribute('class','symbolSpanCheckBef');
                dom6.innerHTML = symbol;
                dom5.setAttribute('class','spanCheck spanEmpty spanNorm');
            }
            else{
                dom4.setAttribute('class','spanNotCheckBef spanEmptyBef');
                dom5.setAttribute('class','spanNotCheck spanEmpty spanNorm');
            }
            dom5.textContent = text;
            dom2.appendChild(dom3);
            dom4.appendChild(dom6);
            dom2.appendChild(dom4);
            dom2.appendChild(dom5);
            dom1.appendChild(dom2);
            this._dom.appendChild(dom1);
        }

        /**
         * Modify the CSS color of the checkbox according to the developer's preferences
         */
        this._dom.childNodes[0].childNodes[0].childNodes[1].style.backgroundColor = color;
        this._dom.childNodes[0].childNodes[0].childNodes[1].childNodes[0].style.backgroundColor = color;

        return this._dom;
    }
}
