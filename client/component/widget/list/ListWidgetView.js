/**
 * Created by Riccardo Montagnin on 21/03/2017.
 * Version 1.0.2 - Completed
 */

import {BaseWidget} from '../BaseWidget'

export class ListWidgetView extends BaseWidget{
    constructor(){
        super();
        if (this.constructor === ListWidgetView) {
            throw new TypeError("Cannot construct ListWidgetView instances directly");
        }
    }

    addItem(item) {}; //NOSONAR
    /**
     * @method
     * It changes the indicator of the list in numbers. The result will be an ordered list.
     */
    setCharacterNumber() {};
    /**
     * @method
     * It changes the indicator of the list in circle. The result will be a list with circles.
     */
    setCharacterCircle() {};
    /**
     * @method
     * It changes the indicator of the list in dash. The result will be a list with dashes.
     */
    setCharacterDash() {};

    /**
     * @method
     * Sets the color of the character used for the list
     * @param color {string} : the color chosen by the user
     */

    setColor(color) {}; //NOSONAR

    /**
     * @method
     * returns the color of the character
     * @return {string}: the color of the character
     */

    getColor(){}

    /**
     * @method
     * returns the array of item in the list
     * @return {array} : it returns the items in the list
     */
    getOptions(){}

    /**
     * @method
     * returns the character used for the list
     * @return {string} : represents the character
     */
    getCharacter(){}

    /**
     * @method
     * returns the HTML and CSS of the ListWidget
     * @return {dom} : returns the dom element in which there are HTML and CSS for the list
     */
    renderView(){}

}
