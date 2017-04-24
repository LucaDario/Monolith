/**
 * class CheckStyle
 * This class contains the style options for a ChecklistWidget.
 *
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.1 - Completed and instantiable
 */

export class CheckStyle {
    /**
     * @type {string}
     * It represents the symbol used to check an item
     */
    _selectionCharacter;

    /**
     * @type {boolean}
     * Check-mark will be shown by a symbol if this field is true; if this field is false the check-mark
     * wiil be shown by a color
     */
    _useSelectionMark;

    /**
     * @type {string}
     * It represents the color of the check-mark if _useSelectionMark is false
     */
    _selectionColor;


    /**
     * Public constructor
     */
    constructor(){
        this._useSelectionMark = true;
        this._selectionColor = '#fff';
        this._selectionCharacter = '&#x2713;';
    }

    /**
     * @method
     * _selectionCharacter setter
     * @param character {string}: the symbol used to check an item
     */
    setSelectionCharacter(character) {
        if(typeof(character) !== "string"){
            throw new TypeError("Cannot set select character. String value required.");
        }
        if(this.getUseSelectionMark()) {
            this._selectionCharacter = character;
            this._selectionColor = '#fff';
        }
    }

    /**
     * @method
     * _useSelectionMark setter
     * @param useMark {boolean}: boolean value that will be assigned to _useSelectionMark
     */
    setUseSelectionMark(useMark) {
        if(typeof(useMark) !== "boolean"){
            throw new TypeError("Cannot set select mark. Boolean value required.");
        }
        if(useMark === true){
            this._selectionCharacter = '&#x2713';
            this._selectionColor = '#fff';
        }
        else{
            this._selectionCharacter = '';
            this._selectionColor = '#060';
        }
        this._useSelectionMark = useMark;
    }

    /**
     * @method
     * _selectionColor setter
     * @param color {string}: It represents the color that will be assigned to _selectionColor
     */
    setSelectionColor(color){
        const pat= new RegExp('#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');
        if (typeof color === "string" && pat.test(color)) {
                if(!this.getUseSelectionMark()) {
                    this._selectionColor = color;
                    this._selectionCharacter = '';
                }
        }
        else {
            throw new TypeError("Parameter color type must be a string that represents a hex color code");
        }
    }

    /**
     * @method
     * _selectionCharacter getter
     * @return {string}: The selection character
     */
    getSelectionCharacter() {
        return this._selectionCharacter;
    }

    /**
     * @method
     * _useSelectionMark getter
     * @return {boolean}: The boolean value stored into _useSelectionMark
     */
    getUseSelectionMark() {
        return this._useSelectionMark;
    }

    /**
     * @method
     * _selectionColor getter
     * @return {string}: The string represents the color stored into _selectionColor
     */
    getSelectionColor(){
        return this._selectionColor;
    }
}
