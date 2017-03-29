/**
 * Created by Nicolo on 23/03/17
 * Version 1.0.0 -
 */
import {ImageOption} from '../options/ImageOption'
import {Exception} from '../../../../exception/Exception'


export class ImageWidgetPresenter {

    /**
     * @type {Object}
     */
    _view;

    /**
     * @type {Object}
     */
    _imageOption;

    /**
     * @type {Object}
     */

    _map;

    constructor(view) {
        this._view= view;
        this._imageOption= new ImageOption();
        this._map = new Monolith.can.DefineMap({
            width: '',height: '', path:''
        });
    }


    /**
     * @method
     * this method allows to set the path where is present the image
     * @param {number} width
     */

    setWidth(width) {
        this._imageOption.setWidth(width);
    }

    /**
     * @method
     * this method allows to set the path where is present the image
     * @param {number} height
     */

    setHeight(height) {
        this._imageOption.setHeight(height);
    }

    /**
     * @method
     * this method allows to set the path where is present the image
     * @param {string} path
     */

    setImage(path) {
        this._imageOption.setPath(path);
    }

    /**
     * @method
     * this method return the path where is present the image
     * @return {string} path
     */

    returnPath() {
        this._imageOption.returnPath();
    }

    /**
     * @method
     * Returns the HTML, CSS and JS needed to render the ImageWidget
     * @return {object}
     */





    renderView() {

        let msg= '';


        //.can.stache dovrebbe avere il path del file html MA js non ce la fa a farlo
        let renderer = Monolith.can.stache('<div> <img src={{path}} width="{{width}}"  height="{{height}}" > </div>');
        this._map.path= this._imageOption.returnPath();
        this._map.width= this._imageOption.returnWidth();
        this._map.height= this._imageOption.returnHeight();

        this._dom = renderer(this._map);


        this._dom.firstChild.childNodes[1].onerror=function () { console.log (" errore nel immagine");
            throw new Exception('Im Evil');};



        return this._dom;
    }






}