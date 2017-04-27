/**
 * Created by Nicolò Dovico on 27/04/2017
 * Version 1.0.1 - Lack tte TU9 TU11 TU12 tests
 */

import {ImageWidget} from '../view/ImageWidget'
import {ImageWidgetPresenter} from './ImageWidgetPresenter';

describe('ImageWidgetPresenter', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ImageWidgetPresenter(new ImageWidget()); //NOSONAR
            }
        ).to.not.throw();
    });

    it("Check if the image have a valid path [TU9]", function (done) {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        const immagine = new ImageWidget();
        immagine._presenter.setImage("http://nemboweb.com/images/corsi/webmaster-tutorial/cicciogatto.jpg");
        immagine._presenter.renderView();

        immagine._presenter._dom.firstChild.childNodes[1].addEventListener("load", function(e) { //NOSONAR
            done();
        });
    });

    it("Check if the image that don't  have a valid path launch an exception [TU10]", function (done) {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        const immagine = new ImageWidget();
        immagine._presenter.setImage("/proof_of_error");
        immagine._presenter.renderView();

        immagine._presenter._dom.firstChild.childNodes[1].addEventListener("error", function(e) { //NOSONAR
            done();
        });
        done();
    });

    it("Check if the Widget set the exact dimension of the image [TU11]", function () {
        //throw new TypeError("NOT IMPLEMENTED");
    });

    it("Check if the Widget have the default dimensions [TU12]", function () {
        //throw new TypeError("NOT IMPLEMENTED");
    });

    it("Check if the Widget have correct dimensions [TU13]", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        const immagine = new ImageWidget();
        immagine._presenter.setImage("http://nemboweb.com/images/corsi/webmaster-tutorial/cicciogatto.jpg");
        immagine._presenter.setHeight(50);
        immagine._presenter.setWidth(50);
        immagine._presenter.renderView();
        const x =immagine._presenter._dom.firstChild.childNodes[1].width;
        const y= immagine._presenter._dom.firstChild.childNodes[1].height;
        const z=immagine._presenter.getWidth();
        const w=immagine._presenter.getHeight();

        expect(y).to.be.eq(50).and.to.be.eq(x).and.to.be.eq(w).and.to.be.eq(z);


    });

});
