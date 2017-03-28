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
        this._map= null;
        this._dom= null;
    }

    /**
     * @method
     * Allows to set the text contained in the ButtonWidget
     * @param text {string}
     */
    setText(text) {
        if (typeof text === "string") {
            this._map.text = text;
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
        // TODO: events, temporary Html to see button at work

        Html= '<div class="button btn">' +'ciao' + '</div>';

        //path text idk
        let renderer = Monolith.can.stache(Html);
        let map = new Monolith.can.DefineMap({
            text: this.getText()
        });

        this._map= map;
        this._dom= renderer(map);
        // TODO: work in progress of damned long click

        /*
        altro tentativo di longpress

         var longpress = false;

         $(".TPGSW-wrapper").on('click', function (e) {
         (longpress) ?  e.preventDefault() : alert("clicked");
         });

         var startTime, endTime;
         $(".TPGSW-wrapper").on('mousedown', function () {
         startTime = new Date().getTime();
         });

         $(".TPGSW-wrapper").on('mouseup', function () {
         endTime = new Date().getTime();

         if (endTime - startTime < 250) {
         longpress = false;
         console.log('< 250');
         }

         });

        dove 250 è il milliseconds before long click
         TPGSW-wrapper è la classe del bottone

         http://jsfiddle.net/arcm111/Makgq/ demo
         */

        return this._dom;
    }
}