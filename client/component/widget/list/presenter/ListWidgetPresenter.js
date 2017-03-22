/**
 * Created by Riccardo Montagnin on 21/03/2017.
 */
class ListWidgetPresenter {

    /**
     * @type {Object}
     */
    _view;

    /**
     * @type {Array}
     */
    _options;

    /**
     * @type {Object}
     */
    _indicator;

    constructor(view){
        this._view = view;
        this._options = [];
        this._indicator = new Indicator();
    }

    addItem(item){
        this._options.push(item);
    }

    setCharacter(character){
        this._indicator.setCharacter(character);
    }

    setColor(color){
        this._indicator.setColor(color);
    }

    renderView(){
        // TODO: Implement this
    }



}