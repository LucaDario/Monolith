/**
 * Created by Riccardo Montagnin on 21/03/2017.
 */
class Indicator {
    /**
     * @type {String}
     */
    _character;

    /**
     * @type {String}
     */
    _color;

    constructor(){}

    get character() {
        return this._character;
    }
    set character(character) {
        this._character = character;
    }

    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
}