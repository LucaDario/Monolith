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
     * @type {function}
     * Represents the function that will be called when a option is clicked. It changes the status of the option by default
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
     * It calls the function stored in _onClick attribute and then emits an event with 'clickCheckEvent'
     * @param event {Object}: The ClickCheckEvent object that allows to emit an event with 'clickCheckEvent'
     * @param index {number}: The index of the option with normal click performed
     */
    onClick(event,index){
        this._onClick();
        let status = this.isChecked();
        event.emitClickCheckEvent(status,index);
    }

    /**
     * @method
     * It emits an event with 'longClickCheckEvent' with the option as parameter
     * @param event {Object}: The ClickCheckEvent object that allows to emit an event with 'longClickCheckEvent'
     * @param index {number}: The index of the option with longClick performed
     */
    onLongClick(event,index){
        event.emitLongClickCheckEvent(index);
    }
}
