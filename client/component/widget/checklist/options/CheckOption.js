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
     *
     */
    _isChecked;

    /**
     * @type {string}
     *
     */
    _id;

    /**
     * @type {string}
     *
     */
    _text;

    /**
     * @type {function}
     *
     */
    _onClick;

    /**
     * Public constructor
     */
    constructor(){
        ObjectID = Mongo.ObjectID;
        this._id = new ObjectID().toString();
        this._isChecked = false;

        this._onClick = function(){
            this._isChecked = !(this._isChecked);
        };

        this._text = '';
    }

    /**
     * @method
     * _id getter
     * @return {String}:
     */
    getId(){
        return this._id;
    }

    /**
     * @method
     * _isChecked getter
     * @return {boolean}:
     */
    isChecked(){
        return this._isChecked;
    }

    /**
     * @method
     * _text getter
     * @return {string}:
     */
    getText(){
        return this._text;
    }

    /**
     * @method
     * _id setter
     * @param id {string}
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
     * _text setter
     * @param text {string}
     */
    setText(text){
        this._text = text;
    }

    /**
     * @method
     * It calls the function stored in _onClick attribute and then emits an event with 'clickCheckEvent'
     * @param event{Object}:
     */
    onClick(event){
        this._onClick();
        event.emitClickCheckEvent();
    }

    /**
     * @method
     * It emits an event with 'longClickCheckEvent' with the option as parameter
     * @param event {Object}:
     */
    onLongClick(event){
        event.emitLongClickCheckEvent(this);
    }
}
