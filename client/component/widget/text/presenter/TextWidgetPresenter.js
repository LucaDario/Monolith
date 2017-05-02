/**
 * The presenter of TextWidget
 *
 * Created by Diego on 21/03/17
 * Version 1.0.0 - Completed and instantiable
 */

import {TextStyle} from '../options/TextStyle';
import {UrlStyle} from '../options/UrlStyle';

export class TextWidgetPresenter {

    /**
     * @type {Object}: DOM element that allows to change CSS
     */
    _dom;

    /**
     * @type {Object} : the view needed by the presenter
     */
    _view;

    /**
     * @type {TextStyle} : the TextStyle object that contains the visual options for the text in the TextWidget
     */
    _textstyle;

    /**
     * @type {UrlStyle} : the UrlStyle object that contains the visual options for URLs contained in the text in the TextWidget
     */
    _urlstyle;

    /**
     * @constructor
     * The constructor of TextWidgetPresenter
     * @param {Object} view
     * @return {Object}
     */
    constructor(view) {
        this._view = view;
        this._dom = null;
        this._textstyle = new TextStyle();
        this._urlstyle = new UrlStyle();
        this._marked = require('marked');
    }

    /**
     * @method
     * Returns the text of the widget
     * @return {string} : text of the widget
     */
    getText(){
        return this._textstyle.getText();
    }

    /**
     * @method
     * Returns the color of the text
     * @return {string} : color of the text
     */

    getColor(){
        return this._textstyle.getColor();
    }

    /**
     * @method
     * Allows to set the text in the TextWidget
     * @param text {string}
     */
    setText(text) {
        this._textstyle.setText(text);
        if (this._dom !== null) {
            this._updateText();
        }
    }

    /**
     * @method
     * Allows to set the color of the text in the TextWidget
     * @param color {string}
     */
    setTextColor(color) {
        this._textstyle.setColor(color);
        if(this._dom !== null){
            this._updateText();
        }
    }

    /**
     * @method
     * Allows to choose if format the text contained in the TextWidget with markdown or not
     * @param format {boolean}
     */
    setFormatText(format) {
        this._textstyle.setFormatted(format);
        this._urlstyle.setHighligh(format);
        if(this._dom !== null){
            this._updateText();
        }
    }

    /**
     * @method
     * Allows to set the color of the URLs contained in the text of the TextWidget
     * @param color {string}
     */
    setUrlHighlightColor(color) {
        this._urlstyle.setHighlightColor(color);
        if(this._dom !== null && this._textstyle.isFormatted()){
            this._updateLinkColor();
        }
    }

    /**
     * @method
     * Allows to set the size of the text contained in the TextWidget
     * @param size {number}
     */
    setTextSize(size) {
        this._textstyle.setSize(size);
        if(this._dom !== null){
            this._updateText();
        }
    }

    /**
     * @method
     * Returns the HTML, CSS and JS needed to render the TextWidget
     * @return {Object}
     */
    renderView() {
        if(this._dom === null || this._dom === undefined){
            this._dom = document.createElement('div');
            this._dom.setAttribute('class', 'markdown');
            this._updateText();
            this._updateLinkColor();
        }

        if(!this._textstyle.getVisibility()){
            this._dom.style.display = "none";
        }
        return this._dom;
    }

    /**
     * Updates all the text inside the widget recomputing text size, color and url color
     * @private
     */
    _updateText(){
        // If is formatted get the html from marked
        if(this._textstyle.isFormatted()){
            this._dom.innerHTML = this._marked(this._textstyle.getText());
        }
        else{
            // Otherwise clear the inner html in case that te view contains formatted tex
            this._dom.innerHTML = '';
            // Create an empty paragraph
            const paragraph = document.createElement('p');
            // Sets the paragraph text
            paragraph.innerText = this._textstyle.getText();
            // Add the paragraph to the view
            this._dom.appendChild(paragraph);
        }
        // This loop setup the text color and size
        // Gets all paragraphs
        const paragraph = this._dom.getElementsByTagName('p');
        // Get the font size
        const font_size = this._textstyle.getSize() === 0 ? '1em' : this._textstyle.getSize() + 'px';
        // Iterate over all the paragraph
        for(let i = 0; i < paragraph.length; i++){
            // Sets the text color
            paragraph[i].style.color = this._textstyle.getColor();
            // Sets the text size
            paragraph[i].style.fontSize = font_size;
        }

        this._updateLinkColor();
    }

    /**
     * Update the url style
     * @private
     */
    _updateLinkColor(){
        if(this._urlstyle.isHighlightEnabled()) {
            // Gets all the links inside the view
            const links = this._dom.getElementsByTagName('a');
            // Iterate over all the links
            for (let i = 0; i < links.length; i++) {
                // Sets the url color.
                links[i].style.color = this._urlstyle.getHighlighColor();
            }
        }
    }

    /**
     * @method
     * It allows you to get the visibility value of the TextStyle
     */
    getVisibility(){
        return this._textstyle.getVisibility();
    }

    /**
     * @method
     * It allows you to set the visibility value of the TextStyle
     * @param value {boolean}
     */
    setVisibility(value){
        let visibility = "none";
        if(!value){
            visibility = "block";
        }

        this._textstyle.setVisibility(value);

        if(this._dom !== null){
            this._dom.style.display = visibility;
        }
    }
}
