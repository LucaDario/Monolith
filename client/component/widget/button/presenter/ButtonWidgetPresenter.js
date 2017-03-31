/**
 * The presenter of ButtonWidget
 * Created by diego on 22/03/17.
 * Version 1.0.0 -
 */

import {ButtonGraphics} from "../options/ButtonGraphics"

export class ButtonWidgetPresenter {

    /**
     * @type {Object}: DOM element that allows to change CSS
     */
    _dom;

    /**
     * @type {Object}: DefineMap element that allows to update view
     */
    _map;

    /**
     * @type {Object} : the ButtonWidgetView element for the presenter
     */
    _view;

    /**
     * @type {string} : the text contained by the ButtonWidget.
     */
    _text;

    /**
     * @type {Object} : the function to be performed on the click of the ButtonWidget
     */
    _onClickAction;

    /**
     * @type {Object} : the function to be performed on the extended click of the ButtonWidget
     */
    _onLongClickAction;

    /**
     * @type {number} : the number of milliseconds that are needed to keep the ButtonWidget clicked before the long click action triggers
     */
    _millisecondsBeforeOnLongClickActs;

    /**
     * @type {Object} : the object that contains the style options of the ButtonWidget
     */
    _graphics;

    /**
     * @constructor
     * Constructor of ButtonWidgetPresenter
     * @param {Object} view
     * @return {Object}
     */
    constructor(view) {
        this._view= view;
        this._text= '';
        this._graphics= new ButtonGraphics();
        this._millisecondsBeforeOnLongClickActs = 0;
        this._onClickAction = null;
        this._onLongClickAction = null;
        this._map = null;
        this._dom= null;
    }

    /**
     * @method
     * Allows to set the text contained in the ButtonWidget
     * @param text {string}
     */
    setText(text) {
        if (typeof text === "string") {
            this._dom.innerHTML = text;
        }
        else
            throw new TypeError("Parameter text type must be a string");
    }

    /**
     * @method
     * Returns the text contained in the ButtonWidget.
     * @return {string}
     */
    getText() {
        return this._text;
    }

    /**
     * @method
     * Allows to set the width of the ButtonWidget
     * @param width {string}
     */
    setWidth(width) {
        this._graphics.setWidth(width);
        this._dom.style.width = width;

    }

    /**
     * @method
     * Allows to set the height of the ButtonWidget
     * @param height {string}
     */
    setHeight(height) {
        this._graphics.setHeight(height);
        this._dom.style.height = height;
    }

    /**
     * @method
     * Allows to set the color of the ButtonWidget
     * @param color {string}
     */
    setBackgroundColor(color) {
        this._graphics.setColor(color);
        this._dom.style.backgroundColor = color;
    }

    /**
     * @method
     * Allows to set a function to be performed on the click of the ButtonWidget
     * @param action {Object}
     */
    setOnClickAction(action) {
        this._onClickAction = action;
    }

    /**
     * @method
     * Allows to set a function to be performed on the extended click of the ButtonWidget
     * @param action {Object}
     */
    setOnLongClickAction(action) {
        this._onLongClickAction = action;
    }

    /**
     * @method
     * Allows to set the number of milliseconds that is needed to keep the ButtonWidget clicked before the long click action triggers
     * @param milliseconds {number}
     */
    setOnLongClickActionTimer(milliseconds) {
        this._millisecondsBeforeOnLongClickActs = milliseconds;
    }

    /**
     * @method
     * Returns HTML, CSS and JS code that is necessary to display the ButtonWidget
     * @return {Object}
     */
    renderView() {
        let _this = this;

        let ldom= document.createElement("div");
        ldom.className= "button btn";
        ldom.innerHTML = _this.getText();

        ldom.style.width= _this._graphics.getWidth();
        ldom.style.height= _this._graphics.getHeight();

        //this is the only way to make it work
        let c = _this._graphics.getColor().split("");

        ldom.style.backgroundColor= c[0] + c[1] + c[2] + c[3] + c[4] + c[5] + c[6];

        let longpress = false;

        /*  this function is bound to the onclick of the button
            it calls onClickAction and onLongClickAction
         */
        ldom.onclick= function(e) {
            if (longpress) {
                e.preventDefault();
            }
        };

        let startTime, endTime;
        ldom.onmousedown = function () {
            startTime = new Date().getTime();
        };

        ldom.onmouseup =  function () {
            endTime = new Date().getTime();

            if (endTime - startTime < _this._millisecondsBeforeOnLongClickActs) {
                longpress = false;
                if (_this._onClickAction!==null) {
                    _this._onClickAction();
                }
            }

            else {
                longpress = true;
                if (_this._onLongClickAction!==null) {
                    _this._onLongClickAction();
                }

            }

        };
        _this._dom = ldom;

        return _this._dom;
    }
}