/**
 * Created by Riccardo Montagnin on 21/03/2017.
 */

import {BaseWidget} from '../BaseWidget'

export class ListWidgetView extends BaseWidget{
    constructor(){
        super();
        if (this.constructor === ListWidgetView) {
            throw new TypeError("Cannot construct ListWidgetView instances directly");
        }
    }

    addItem(item) {};
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
    setColor(color) {};
    getColor(){}
    getOptions(){}
    getCharacter(){}

}
