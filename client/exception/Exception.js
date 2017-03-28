/**
 * Created by nicolo on 25/03/17.
 */


export class Exception  extends Error {

    _message;

    /**
     * @constructor
     * The constructor of class Exception with one or zero parameter
     * @param message {string}
     */


    constructor(message){
        super(message);
        this.name = this.constructor.name;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }

    /**
     * @method
     * The method that allows to set the message in the exception
     * @param message {string}
     */

    setMessage(message){
        this._message=message;

    }

    /**
     * @method
     * The method that return the message
     */

    getMessage(){
        return this._message;
    }


}