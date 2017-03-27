/**
 * Created by Riccardo Montagnin on 21/03/2017.
 */

import {BaseWidget} from '../../BaseWidget'

export class ListWidgetView extends BaseWidget{
    constructor(){
        super();
        if (this.constructor === ListWidgetView) {
            throw new TypeError("Cannot construct ListWidgetView instances directly");
        }
    }

    addItem(item) {};
    setCharacter(character) {};
    setColor(color) {};

}
