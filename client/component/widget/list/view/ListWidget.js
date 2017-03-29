/**
 * Created by Riccardo Montagnin on 21/03/2017.
 */

import {ListWidgetView} from "../ListWidgetView"
import {ListWidgetPresenter} from "../presenter/ListWidgetPresenter"

export class ListWidget extends ListWidgetView{

    /**
     * @type {Object}
     */
    _presenter;

    constructor(){
        super();
        this._presenter = new ListWidgetPresenter(this);
    }

    addItem(item) {
        this._presenter.addItem(item);
    }

    setCharacterNumber() {
        this._presenter.setCharacterNumber();
    }

    setCharacterPoint() {
        this._presenter.setCharacterPoint();
    }
    setCharacterSign() {
        this._presenter.setCharacterSign();
    }

    setColor(color) {
        this._presenter.setColor(color);
    }

    getColor(){
        return this._presenter.getColor();
    }

    getOptions(){
        return this._presenter.getOptions();
    }

    getCharacter(){
        return this._presenter.getCharacter();
    }

    renderView(){
        return this._presenter.renderView();
    }
}