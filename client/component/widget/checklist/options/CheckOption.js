/**
 * This class represents an item of a checklist.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 - 1.0.0
 */

export class CheckOption {

    /**
     * @constructor
     * Constructor of CheckStyle
     */
    constructor(){
        this._id = Math.round(Math.round(Number.MAX_SAFE_INTEGER)*Math.random()).toString();
        this._isChecked = false;

        this._onClick = function(){
            this._isChecked = !(this._isChecked);
        };

        this._onLongClick = function(){
            alert('Long Click performed!')
        };
        this._text = '';
    }

    /**
     * @method
     * _id getter
     * @return {String}
     */
    getId(){
        return this._id;
    }

    /**
     * @method
     * _onClick getter
     * @return {function}
     */
    onClick(event){
        this._onClick();
        event.emitClickCheckEvent();
    }

    /**
     * @method
     * _isChecked getter
     * @return {boolean}
     */
    isChecked(){
        return this._isChecked;
    }

    /**
     * @method
     * _onLongClick getter
     * return {function}
     */
    onLongClick(){
        this._onLongClick();
    }

    /**
     * @method
     * _text getter
     * @return {Object}
     */
    getText(){
        return this._text;
    }

    /**
     * @method
     * _id setter
     * @param id {String}
     */
    setId(id) {
        if(typeof(id) !== String){
            throw new TypeError("Cannot set item's id. String value required.");
        }
        this._id = id;
    }

    /**
     * @method
     * _isChecked setter
     * @param checked {boolean}
     */
    setChecked(checked) {
        if(typeof(checked) !== "boolean"){
            throw new TypeError("Cannot set item's check. Boolean value required.");
        }
        this._isChecked = checked;
    }

    /**
     * @method
     * _onClick setter
     * @param action {function}
     */
    setOnClick(action) {
        if(typeof(action) !== "function"){
            throw new TypeError("Cannot set onClick function. Function required.");
        }
        this._onClick = action;
    }

    /**
     * @method
     * _onLongClick setter
     * @param action {function}
     */
    setOnLongClick(action) {
        if(typeof(action) !== "function"){
            throw new TypeError("Cannot set onLongClick function. Function required.");
        }
        this._onLongClick = action;
    }

    /**
     * @method
     * _text setter
     * @param text {string}
     */
    setText(text){
        this._text = text;
    }
}
