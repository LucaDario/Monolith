/**
 * Created by Riccardo Montagnin on 21/03/2017.
 * Version 1.0.2 - ListWidget is completed and instantiable
 */

import {ListWidgetView} from "../ListWidgetView"
import {ListWidgetPresenter} from "../presenter/ListWidgetPresenter"

export class ListWidget extends ListWidgetView{
    /**
     * Public constructor
     */
    constructor(){
        super();
        this._presenter = new ListWidgetPresenter(this);
    }

    /**
     * @method
     * It adds an item in the list
     * @param item [string}: represents the item that will be added in the list
     */
    addItem(item) {
        this._presenter.addItem(item);
    }
    /**
     * @method
     * It changes the indicator of the list in numbers. The result will be an ordered list.
     */
    setCharacterNumber() {
        this._presenter.setCharacterNumber();
    }
    /**
     * @method
     * It changes the indicator of the list in circle. The result will be a list with circles.
     */
    setCharacterCircle() {
        this._presenter.setCharacterCircle();
    }
    /**
     * @method
     * It changes the indicator of the list in dash. The result will be a list with dashes.
     */
    setCharacterDash() {
        this._presenter.setCharacterDash();
    }

    /**
     * @method
     * Sets the color of the character used for the list
     * @param color {string} : the color chosen by the user
     */

    setColor(color) {
        this._presenter.setColor(color);
    }

    /**
     * @method
     * returns the color of the character
     * @return {string}: the color of the character
     */

    getColor(){
        return this._presenter.getColor();
    }

    /**
     * @method
     * returns the array of item in the list
     * @return {array} : it returns the items in the list
     */

    getOptions(){
        return this._presenter.getOptions();
    }

    /**
     * @method
     * returns the character used for the list
     * @return {string} : represents the character
     */

    getCharacter(){
        return this._presenter.getCharacter();
    }
    /**
     * @method
     * returns the HTML and CSS of the ListWidget
     * @return {dom} : returns the dom element in which there are HTML and CSS for the list
     */
    renderView(){
        return this._presenter.renderView();
    }
}