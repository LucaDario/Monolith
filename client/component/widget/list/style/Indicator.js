/**
 * Created by Riccardo Montagnin on 21/03/2017.
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
    getColor() {
        return this._color;
    }
    setColor(color) {
        this._color = color;
    }
}