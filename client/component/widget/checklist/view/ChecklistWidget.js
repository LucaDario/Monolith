/**
 * The concrete class of ChecklistWidget.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 - 1.0.0
 */


import {ChecklistWidgetView} from '../ChecklistWidgetView'
import {ChecklistWidgetPresenter} from '../presenter/ChecklistWidgetPresenter';
import {ClickCheckEvent} from '../../../../event/ClickCheckEvent';
import {container, inject} from 'dependency-injection-es6';
export class ChecklistWidget extends ChecklistWidgetView{

    /**
     * @constructor
     * Constructor of ChecklistWidget
     */
    constructor(){
        super();
        //TODO inject
        this._presenter = new ChecklistWidgetPresenter();
        this._presenter.setView(this);
        this._event = container.resolve(ClickCheckEvent);

        let click = function () {
            this.update();
        };
        this._event.on('clickCheckEvent', click.bind(this));

        let longClick = function(){
            console.log('Long Click Performed!');
        };
        this._event.on('longClickCheckEvent',longClick.bind(this));
    }

    /**
     *@method
     * It allows you to add a new item into checklist
     * @param optionText {string}
     * @param check {boolean}
     */
    addOption(optionText,check = false) {
        this._presenter.addOption(optionText,check);
    }

    /**
     * @method
     * It allows you to assign to all items of the checklist the function that will be performed on normal click
     * @param onClick {function}
     */
    setOptionsOnClick(onClick){
        this._presenter.setOptionsOnClick();
    }
    /**
     * @method
     * It allows you to assign to all items of the checklist the function that will be performed on long click
     * @param onLongClick {function}
     */
    setOptionsOnLongClick(onLongClick){
        this._presenter.setOptionsOnLongClick();
    }

    /**
     *@method
     * It allows you to remove an item from a checklist
     * @param id {String,number} If it's an Integer value the method removes the item in the specified position.
     * If it's a String value the method removes the item with the specified id.
     */
    removeOption(id){
        this._presenter.removeOption(id);
    }

    /**
     *@method
     *Sets the visualization of tick with a character or with a color.
     * @param useMark {boolean}
     */
    setUseSelectionMark(useMark){
        this._presenter.setUseSelectionMark(useMark);
    }

    /**
     *@method
     *Sets the color of checkmarks.
     * @param color {String}
     */
    setSelectionColor(color) {
        this._presenter.setSelectionColor(color);
    }

    /**
     * @method
     *Sets the symbol of checkmarks.
     * @param character {String}
     */
    setSelectionCharacter(character){
        this._presenter.setSelectionCharacter(character);
    }

    /**
     *@method
     *It allows you to check an item on the checklist or to remove a tick from it.
     * @param checked {boolean}
     * @param position {Number}
     */
    setChecked(checked,position){
        this._presenter.setChecked(checked,position);
    }

    /**
     *@method
     *Sets the completion message appears when all of the list options are checked.
     * @param message {String}
     */
    setCompletionMessage(message){
        this._presenter.setCompletionMessage(message);
    }

    /**
     * @method
     *Generates HTML CSS JS needed to display the widget.
     * @return {Object}
     */
    renderView(){
        return this._presenter.renderView();
    }

    update(){
        this._presenter.update();
    }
}
