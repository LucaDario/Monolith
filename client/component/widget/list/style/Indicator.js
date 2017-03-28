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
    }

    get characterBegin() {
        return this._characterBegin;
    }

    get characterEnd() {
        return this._characterEnd;
    }

    get character(){
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
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
}