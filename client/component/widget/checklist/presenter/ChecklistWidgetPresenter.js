/**
 * The presenter of ChecklistWidget.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 -
 */


import {ChecklistWidgetView} from '../view/ChecklistWidgetView';
import {CheckStyle} from '../style/CheckStyle';
import {CheckOption} from '../option/CheckOption';

export class ChecklistWidgetPresenter{

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
        this._completionMessage = "";
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
        this._options.push(new CheckOption(option,onClick,onLongClick));
    }

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
            for(let i of this._options){
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
     */
    renderView(){
        // TODO: CSS checkbox style (mark, symbol , color) and completionMessage
        let html = '';
        let mark = '';
        let symbol = '';
        let color = '';
        let completionMessage = '';

        if(!this._style.getUseSelectionMark()){
            mark = '';
            color = this._style.getSelectionColor();
            symbol = this._style.getSelectionCharacter();
        }
        else{
            mark = '';
        }

        for(let i of this._options){
            let check = '';
            if(this._options[i].isChecked()){
                check = ' checked="checked"';
            }
            let id = this._options[i].getId();
            let text = this._options[i].getText();
            html = html +
                    '<div class="checkbox">' +
                            '<input type="checkbox" id="' + id + '"' + check + '/>' +
                            '<label for="' + id + '">' +
                                text +
                            '</label>' +
                    '</div>';
        }
        return html;
    }
}
