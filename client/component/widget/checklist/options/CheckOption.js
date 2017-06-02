/**
 * class CheckOption
 * This class represents an item of a checklist.
 *
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.7 - CheckOption is completed
 */

export class CheckOption {

    /**
     * @type {boolean}
     * Represents the status of the option
     */
    _isChecked;

    /**
     * @type {string}
     * Represents the id of the option
     */
    _id;

    /**
     * @type {string}
     * Represents the text content
     */
    _text;

    /**
     * Public constructor
     * @param id {string}: the id of the new option
     */
    constructor(id){
        this._id = '';
        if(id === ''){
            this._id = ('_' + Math.random().toString(36).substr(2, 9)).toString();
        }
        else{
            this._id = id;
        }
        this._isChecked = false;
        this._text = '';
    }

    /**
     * @method
     * _id getter
     * @return {String}: The id of the option
     */
    getId(){
        return this._id;
    }

    /**
     * @method
     * _isChecked getter
     * @return {boolean}: The boolean status of the option
     */
    isChecked(){
        return this._isChecked;
    }

    /**
     * @method
     * _text getter
     * @return {string}: The text content of the option
     */
    getText(){
        return this._text;
    }

    /**
     * @method
     * _isChecked setter
     * @param checked {boolean}: The boolean value that will be assigned to _isChecked
     */
    setChecked(checked) {
        if(typeof(checked) !== "boolean"){
            throw new TypeError("Cannot set item's check. Boolean value required.");
        }
        this._isChecked = checked;
    }

    /**
     * @method
     * _text setter
     * @param text {string}: The text that will be replaced into _text
     */
    setText(text){
        this._text = text;
    }

    /**
     * @method
     * It allows you to change the status of _isChecked
     * @return {boolean}: The value of _isChecked after changing status
     */
    changeStatus(){
        this._isChecked = !(this._isChecked);
        return this.isChecked();
    }
}
