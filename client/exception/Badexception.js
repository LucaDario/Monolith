/**
 * Created by nicolo on 25/03/17.
 */

import {ImageWidgetView} from './ImageWidgetView'


export class BadException  extends Exceptions{



    /**
     * @constructor
     * The constructor of BadException that can have 0, 1 or two parameters
     * @param  message {string}
     * @param parameter {string}
     */

    constructor(message,parameter){
        //noinspection JSAnnotator
        if (message==undefined)
        {
            message='';
        }

        if (parameter!=undefined){

            message= message + ' il parametro che da errore è il :' + parameter;
        }
        super(message);

    }

}
