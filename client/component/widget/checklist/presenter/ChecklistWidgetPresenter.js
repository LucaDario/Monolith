/**
 * Created by Francesco Bazzerla on 21/03/2017.
 */

export class ChecklistWidgetPresenter{

    /**
     * @type {ChecklistWidgetView}
     */
    _view;

    /**
     * @type {Array}
     */
    _options;

    /**
     * @type {CheckStyle}
     */
    _style;

    /**
     * @type {String}
     */
    _completionMessage;

    /**
     * @constructor
     * Constructor of ChecklistWidgetPresenter
     * @param view {ChecklistWidgetView}
     * the view associated with the presenter
     */
    constructor(view){
        this._view = view;
        this._options = [];
        this._style = new CheckStyle();
        this._completionMessage = "";
    }

    /**
     * @method
     * It allows you to add a new item into the checklist assigning its also the events for normal or long click on
     * check.
     * @param option {CheckOption}
     * @param onClick {function}
     * @param onLongClick {function}
     */
    addOption(option,onClick,onLongClick){
        this._options.push(new CheckOption(option,onClick,onLongClick));
    }

    /**
     *@method
     *It allows you to check an item on the checklist or to remove a tick from it.
     * @param checked {boolean}
     * @param position {number}
     */
    setChecked(checked,position){
        this._options[position].setChecked(checked,position);
    }

    /**
     *@method
     *Sets the font of checkmarks.
     * @param character {String}
     */
    set selectionCharacter(character){
        this._style.selectionCharacter(character);
    }

    /**
     * @method
     *Sets the visualization of tick with a character or with a color.
     * @param useMark {boolean}
     */
    set useSelectionMark(useMark){
        this._style.useSelectionMark(useMark);
    }

    /**
     *@method
     *Sets the color of checkmarks.
     * @param color {String}
     */
    set selectionColor(color){
        this._style.selectionColor(color);
    }

    /**
     *@method
     *Sets the completion message appears when all of the list options are checked.
     * @param message {String}
     */
    set completionMessage(message){
        this._completionMessage = message;
    }

    /**
     * @method
     * Generates HTML CSS JS needed to display the widget.
     */
    renderView(){
        // TODO: Implement this
    }



}