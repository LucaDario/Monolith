/**
 * This class contains the style options for a ChecklistWidget.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 - 1.0.0
 */

export class CheckStyle {
    /**
     * @type {String}: It represents the symbol used to check an item
     */
    _selectionCharacter;

    /**
     * @type {boolean}: Check-mark will be shown by a symbol if this field is true; if this field is false the check-mark
     * wiil be shown by a color
     */
    _useSelectionMark;

    /**
     * @type {String}: It represents the color of the check-mark if _useSelectionMark is false
     */
    _selectionColor;


    /**
     * @constructor
     * Constructor of CheckStyle
     */
    constructor(){
        this._useSelectionMark = true;
        this._selectionColor = "green";
        this._selectionCharacter = "";
    }

    /**
     * @method
     * _selectionCharacter setter
     * @param character {String}
     */
    setSelectionCharacter(character) {
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
    setUseSelectionMark(useMark) {
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
    setSelectionColor(color){
        let pat= new RegExp('#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');
        if (typeof color === "string" && pat.test(color)) {
            this._selectionColor = color;
        }
        else {
            throw new TypeError("Parameter color type must be a string that represents a hex color code");
        }
    }

    /**
     * @method
     * _selectionCharacter getter
     * @return {String}
     */
    getSelectionCharacter() {
        return this._selectionCharacter;
    }

    /**
     * @method
     * _useSelectionMark getter
     * @return {boolean}
     */
    getUseSelectionMark() {
        return this._useSelectionMark;
    }

    /**
     * @method
     * _selectionColor getter
     * @return {String}
     */
    getSelectionColor(){
        return this._selectionColor;
    }
}
