/**
 * This class represents an item of a checklist.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 - 1.0.0
 */

export class CheckOption {
    /**
     * @type {String}: Item's id of a checklist
     */
    _id;

    /**
     * @type {boolean}: It represents if an item is checked
     */
    _isChecked;

    /**
     * @type {function}: It's a function that will be executed after a normal click on item
     */
    _onClick;

    /**
     * @type {function}: It's a function that will be executed after a long click on item
     */
    _onLongClick;

    /**
     * @type {String}: It represents the text associated to an item of a checklist
     */
    _text;


    /**
     * @constructor
     * Constructor of CheckStyle
     */
    constructor(){
        this._id = Math.round(Math.round(Number.MAX_SAFE_INTEGER)*Math.random()).toString();
        this._isChecked = false;
        this._onClick = function(){};
        this._onLongClick = function(){};
        this._text ="";
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
    getOnClick(){
        return this._onClick;
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
    getOnLongClick(){
        return this._onLongClick;
    }

    /**
     * @method
     * _text getter
     * @return {String}
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
     * @param text {String}
     */
    setText(text){
        if(typeof(text) !== String){
            throw new TypeError("Cannot set item's text. String value required.");
        }
        this._text = text;
    }
}
