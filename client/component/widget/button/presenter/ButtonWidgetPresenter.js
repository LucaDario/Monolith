/**
 * The presenter of ButtonWidget
 * Created by diego on 22/03/17.
 * Version 1.0.0 -
 */

import {ButtonGraphics} from "../options/ButtonGraphics"

export class ButtonWidgetPresenter {

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
        this._dom= document.createElement("div");

        let longpress = false;

        const _this=this;

        /*  this function is bound to the onclick of the button
         it calls onClickAction and onLongClickAction
         */
        this._dom.onclick= function(e) {
                if (longpress) {
                    e.preventDefault();
                }
        };

        let startTime, endTime;
        this._dom.onmousedown = function () {
            startTime = new Date().getTime();
        };

        this._dom.onmouseup =  function () {
            endTime = new Date().getTime();
            if (endTime - startTime < _this._millisecondsBeforeOnLongClickActs || _this._millisecondsBeforeOnLongClickActs===0) {
                longpress = false;
                if (_this._onClickAction!==null) {
                    _this._onClickAction();
                    _this._view.getEvent().emitClickButtonEvent();
                }
            }
            else {
                longpress = true;
                if (_this._onLongClickAction!==null) {
                    _this._onLongClickAction();
                    _this._view.getEvent().emitLongClickButtonEvent();
                }
            }
        };
    }

    /**
     * @method
     * Allows to set the text contained in the ButtonWidget
     * @param text {string}
     */
    setText(text) {
        if (typeof text === "string") {
            this._text= text;
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
     * Returns the width of the button.
     * @return {string}
     */
    getWidth() {
        return this._graphics.getWidth();
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
     * Returns the height of the button.
     * @return {string}
     */
    getHeight() {
        return this._graphics.getHeight();
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
     * Returns the color of the button.
     * @return {string}
     */
    getColor() {
        return this._graphics.getColor();
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
        const _this = this;

        const ldom= _this._dom;
        ldom.className= "button btn";
        ldom.innerHTML = _this.getText();

        ldom.style.width= _this.getWidth();
        ldom.style.height= _this.getHeight();

        //this is the only way to make it work
        const c = _this.getColor().split("");
        //two options for 3 or 6 hex number for color
        if (c.length === 7) {
            ldom.style.backgroundColor = c[0] + c[1] + c[2] + c[3] + c[4] + c[5] + c[6];
        }
        else {
            ldom.style.backgroundColor = c[0] + c[1] + c[2] + c[3];
        }


        _this._dom = ldom;

        return _this._dom;
    }
}
