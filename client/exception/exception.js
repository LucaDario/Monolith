/**
 * Created by nicolo on 25/03/17.
 */



export class Exception  {

    _message;

   // /**
     //* @constructor
     //* The constructor of class Exception
//     */

   // constructor() {
        //noinspection JSAnnotator,JSAnnotator,JSAnnotator
        //noinspection JSPotentiallyInvalidConstructorUsage
     //   if (this instanceof exception) {
       //     throw new TypeError("Cannot construct ImageWidgetView instances directly");
        //}
    //}
    /**
     * @constructor
     * The constructor of class Exception with one or zero parameter
     * @param message {string}
     */


    constructor(message){
    //noinspection JSAnnotator,JSAnnotator,JSAnnotator
    //noinspection JSPotentiallyInvalidConstructorUsage
        if ( message==undefined ){
            _messagge='';
        }
        else {
            _message = message
        }
        if (this instanceof exception) {
            throw new TypeError("Cannot construct ImageWidgetView instances directly");
        }
    }

    /**
     * @method
     * The method that allows to set the message in the exception
     * @param message {string}
     */

    setMessage(message){
        _message=message;

    }

    /**
     * @method
     * The method that return the message
     */

    getMessage(){
        return this._message;
    }


}