/**
 * The concrete class that represents the indicator for the ListWidget
 *
 * Created by Riccardo Montagnin on 21/03/2017.
 * Version 1.0.0 - Completed
 */

export class Indicator {
    /**
     * Public constructor
     */
    constructor(){
        this._character = '&#8226;';
        this._color = '#000';
    }

    getCharacter(){
        return this._character;
    }

    /**
     * @method
     * It changes the indicator of the list in numbers. The result will be an ordered list.
     */
    setCharacterNumber(){
        this._character = "decimal"
    }
    /**
     * @method
     * It changes the indicator of the list in circle. The result will be a list with circles.
     */
    setCharacterCircle() {
        this._character = "&#8226;";
    }
    /**
     * @method
     * It changes the indicator of the list in dash. The result will be a list with dashes.
     */
    setCharacterDash(){
        this._character = "&ndash;";
    }

    /**
     * @method
     * It return the color associated to indicator
     * @return {string}: the color associated to indicator
     */
    getColor() {
        return this._color;
    }

    /**
     * @method
     * It allows you to set the color associated to indicator
     */
    setColor(color) {
        this._color = color;
    }
}
