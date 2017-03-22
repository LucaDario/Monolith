/**
 * Created by Diego on 21/03/17
 * Version 1.0.0 -
 */

import {BaseWidget} from '../../BaseWidget'

export class TextWidgetView extends BaseWidget{
    constructor(){
        //noinspection JSAnnotator,JSAnnotator,JSAnnotator
        super();
        //noinspection JSPotentiallyInvalidConstructorUsage
        if (this instanceof TextWidgetView) {
            throw new TypeError("Cannot construct TextWidgetView instances directly");
        }
    }

    setText(text) {}
    setTextColor(color) {}
    setFormatText(format) {}
    setUrlHighlightColor(color) {}
    setTextSize(size) {}
}
