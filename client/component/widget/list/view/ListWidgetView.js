/**
 * Created by Riccardo Montagnin on 21/03/2017.
 */
class ListWidgetView extends BaseWidget{
    constructor(){
        super();
        if (new.target === ListWidgetView) {
            throw new TypeError("Cannot construct ListWidgetView instances directly");
        }
    }
    
    addItem(item) {};
    setCharacter(character) {};
    setColor(color) {};

}
