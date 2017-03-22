    /**
    * Created by Francesco Bazzerla on 21/03/17.
    */

    class CheckOption extends BaseWidget{
        /**
         * @type {String}
         */
        _id;

        /**
         * @type {boolean}
         */
        _isChecked;

        /**
         * @type {function}
         */
        _onClick;

        /**
         * @type {function}
         */
        _onLongClick;

        /**
         * @type {String}
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
        get id(){
            return this._id;
        }

        /**
         * @method
         * _onClick getter
         * @return {function}
         */
        get onClick(){
            return this._onClick;
        }

        /**
         * @method
         * _isChecked getter
         * @return {boolean}
         */
        get isChecked(){
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
        get text(){
            return this._text;
        }

        /**
         * @method
         * _id setter
         * @param id {String}
         */
        set id(id) {
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
        set onClick(action) {
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
        set onLongClick(action) {
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
        set text(text){
            if(typeof(text) !== String){
                throw new TypeError("Cannot set item's text. String value required.");
            }
            this._text = text;
        }
    }