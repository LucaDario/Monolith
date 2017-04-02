/**
 * The concrete class of ChecklistWidget.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 - 1.0.0
 */


import {ChecklistWidgetView} from '../ChecklistWidgetView'
import {ChecklistWidgetPresenter} from '../presenter/ChecklistWidgetPresenter';
import {ClickCheckEvent} from '../../../../event/ClickCheckEvent';
import {ChecklistComplete} from '../../../../event/ChecklistComplete';
import {container, inject} from 'dependency-injection-es6';
export class ChecklistWidget extends ChecklistWidgetView{

    /**
     * @type {Object}
     */
    _presenter;

    /**
     * @type {Object}
     */
    _eventClick;

    /**
     * @type {Object}
     */
    _eventComplete;

    /**
     * Public constructor
     */
    constructor(){
        super();
        //TODO inject
        this._presenter = new ChecklistWidgetPresenter();
        this.setView(this);
        this._eventClick = container.resolve(ClickCheckEvent);
        this._eventComplete = container.resolve(ChecklistComplete);

        let click = function () {
            this.update();
        };
        this._eventClick.on('clickCheckEvent', click.bind(this));
    }

    /**
     *@method
     * It allows you to add a new item into checklist
     * @param optionText {string}:
     * @param check {boolean}:
     */
    addOption(optionText,check = false) {
        this._presenter.addOption(optionText,check);
    }

    /**
     *@method
     * It allows you to remove an item from a checklist
     * @param option {Object}: The reference of the option to remove.
     */
    removeOption(option){
        this._presenter.removeOption(option);
    }

    /**
     * @method
     * It returns the _id of the checklist
     * @return {string}: The id of the checklist
     */
    getId(){
        return this._presenter.getId();
    }

    /**
     * @method
     * It allows you to add a reference of the view to the presenter
     * @param view {Object}: The reference of the view that will be associated to this presenter
     */
    setView(view){
        this._presenter.setView(view);
    }

    /**
     * @method
     * _eventClick getter
     * @return {Object}:
     */
    getEventClick(){
        return this._eventClick;
    }

    /**
     *@method
     * _eventComplete getter
     * @return {Object}:
     */
    getEventComplete(){
        return this._eventComplete;
    }

    /**
     *@method
     *Sets the visualization of tick with a character or with a color.
     * @param useMark {boolean}:
     */
    setUseSelectionMark(useMark){
        this._presenter.setUseSelectionMark(useMark);
    }

    /**
     *@method
     *Sets the color of checkmarks.
     * @param color {string}:
     */
    setSelectionColor(color) {
        this._presenter.setSelectionColor(color);
    }

    /**
     * @method
     *Sets the symbol of checkmarks.
     * @param character {string}:
     */
    setSelectionCharacter(character){
        this._presenter.setSelectionCharacter(character);
    }

    /**
     *@method
     *It allows you to check an item on the checklist or to remove a tick from it.
     * @param checked {boolean}
     * @param position {number}:
     */
    setChecked(checked,position){
        this._presenter.setChecked(checked,position);
    }

    /**
     *@method
     *Sets the completion message appears when all of the list options are checked.
     * @param message {string}
     */
    setCompletionMessage(message){
        this._presenter.setCompletionMessage(message);
    }

    /**
     * @method
     * _completionMessage getter
     * @return {string}:
     */
    getCompletionMessage(){
        return this._presenter.getCompletionMessage();
    }

    /**
     * @method
     *Generates HTML CSS JS needed to display the widget.
     * @return {Object}:
     */
    renderView(){
        return this._presenter.renderView();
    }

    /**
     * @method
     * It allows you to update the html of the checklist
     */
    update(){
        this._presenter.update();
    }
}
