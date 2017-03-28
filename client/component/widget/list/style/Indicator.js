/**
 * Created by Riccardo Montagnin on 21/03/2017.
 */
export class Indicator {
    /**
     * @type {String}
     */
    _character;

    /**
     * @type {String}
     */
    _color;

    constructor(){
        this._character = '&#8226;';
        this._color = '#000';
    }

    getCharacter(){
        return this._character;
    }

    setCharacterNumber(){
        this._character = "decimal"
    }
    setCharacterPoint() {
        this._character = "&#8226;";
        //this._character = '&middot;';
    }
    setCharacterSign(){
        this._character = "&ndash;";
    }
    getColor() {
        return this._color;
    }
    setColor(color) {
        this._color = color;
    }
}