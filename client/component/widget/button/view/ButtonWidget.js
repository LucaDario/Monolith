/**
 * The concrete class of ButtonWidget
 * Created by diego on 22/03/17.
 * Version 1.0.0 -
 */

import {ButtonWidgetView} from '../ButtonWidgetView';
import {ButtonWidgetPresenter} from '../presenter/ButtonWidgetPresenter';

export class ButtonWidget extends ButtonWidgetView {

    /**
     * @type {Object} : The presenter of ButtonWidget
     */
    _presenter;

    /**
     * @constructor
     * Constructor of ButtonWidget
     * @return {Object}
     */
    constructor(){
        //noinspection JSAnnotator
        super();
        this._presenter = new ButtonWidgetPresenter(this);
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
     * Allows to set the height of the ButtonWidget
     * @param height {string}
     */
    setHeight(height) {
        this._presenter.setHeight(height);
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