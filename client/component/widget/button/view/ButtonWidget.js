/**
 * The concrete class of ButtonWidget
 * Created by diego on 22/03/17.
 * Version 1.0.0 - Completed and instantiable
 */

import {ButtonWidgetView} from '../ButtonWidgetView';
import {ButtonWidgetPresenter} from '../presenter/ButtonWidgetPresenter';
import {ClickButtonEvent} from '../../../../event/ClickButtonEvent';

export class ButtonWidget extends ButtonWidgetView {

    /**
     * @constructor
     * Constructor of ButtonWidget
     * @return {Object}
     */
    constructor(){
        //noinspection JSAnnotator
        super();
        this._presenter = new ButtonWidgetPresenter(this);

        this._eventClick = new ClickButtonEvent();
    }

    /**
     * @method
     * Returns the text contained in the ButtonWidget.
     * @return {string}
     */
    getText(){
        this._presenter.getText();
    }


    /**
     * @method
     * Returns the Object that handles the events of the ButtonWidget.
     * @return {Object}
     */
    getEvent() {
        return this._eventClick;
    }

    /**
     * @method
     * Allows to set the text contained in the ButtonWidget
     * @param text {string}
     */
    setText(text) {
        this._presenter.setText(text);
    }

    /**
     * @method
     * Allows to set the width of the ButtonWidget
     * @param width {string}
     */
    setWidth(width) {
        this._presenter.setWidth(width);
    }

    /**
     * @method
     * Returns the width of the button.
     * @return {string}
     */
    getWidth() {
        return this._presenter.getWidth();
    }

    /**
     * @method
     * Allows to set the height of the ButtonWidget
     * @param height {string}
     */
    setHeight(height) {
        this._presenter.setHeight(height);
    }

    /**
     * @method
     * Returns the height of the button.
     * @return {string}
     */
    getHeight() {
        return this._presenter.getHeight();
    }

    /**
     * @method
     * Allows to set the color of the ButtonWidget
     * @param color {string}
     */
    setBackgroundColor(color) {
        this._presenter.setBackgroundColor(color);
    }

    /**
     * @method
     * Returns the color of the button.
     * @return {string}
     */
    getColor() {
        return this._presenter.getColor();
    }

    /**
     * @method
     * Allows to set a function to be performed on the click of the ButtonWidget
     * @param action {Object}
     */
    setOnClickAction(action) {
        this._presenter.setOnClickAction(action);
    }

    /**
     * @method
     * Allows to set a function to be performed on the extended click of the ButtonWidget
     * @param action {Object}
     */
    setOnLongClickAction(action) {
        this._presenter.setOnLongClickAction(action);
    }

    /**
     * @method
     * Allows to set the number of milliseconds that are needed to keep the ButtonWidget clicked before the long click action triggers
     * @param milliseconds {number}
     */
    setOnLongClickActionTimer(milliseconds) {
        this._presenter.setOnLongClickActionTimer(milliseconds);
    }

    /**
     * @method
     * Returns HTML, CSS and JS code that is necessary to display the ButtonWidget
     * @return {Object}
     */
    renderView() {
        return this._presenter.renderView();
    }


}
