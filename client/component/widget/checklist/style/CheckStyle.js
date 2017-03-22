/**
 * Created by Francesco Bazzerla on 21/03/2017.
 */

export class CheckStyle {
    /**
     * @type {String}
     */
    _selectionCharacter;

    /**
     * @type {boolean}
     */
    _useSelectionMark;

    /**
     * @type {String}
     */
    _selectionColor;


    /**
     * @constructor
     * Constructor of CheckStyle
     */
    constructor(){
        this._useSelectionMark = false;
        this._selectionColor = "green";
        this._selectionCharacter = "";
    }

    /**
     * @method
     * _selectionCharacter setter
     * @param character {String}
     */
    set selectionCharacter(character) {
        if(typeof(character) !== String){
            throw new TypeError("Cannot set select character. String value required.");
        }
        this._selectionCharacter = character;
    }

    /**
     * @method
     * _useSelectionMark setter
     * @param useMark {boolean}
     */
    set useSelectionMark(useMark) {
        if(typeof(useMark) !== "boolean"){
            throw new TypeError("Cannot set select mark. Boolean value required.");
        }
        this._useSelectionMark = useMark;
    }

    /**
     * @method
     * _selectionColor setter
     * @param color {String}
     */
    set selectionColor(color){
        if(typeof(color) !== String){
            throw new TypeError("Cannot set selection color. String value required.");
        }
        this._selectionColor = color;
    }

    /**
     * @method
     * _selectionCharacter getter
     * @return {String}
     */
    get selectionCharacter() {
        return this._selectionCharacter;
    }

    /**
     * @method
     * _useSelectionMark getter
     * @return {boolean}
     */
    get useSelectionMark() {
        return this._useSelectionMark;
    }

    /**
     * @method
     * _selectionColor getter
     * @return {String}
     */
    get selectionColor(){
        return this._selectionColor;
    }
}