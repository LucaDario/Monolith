/**
 * Created by Nicolò Dovico on 27/04/2017
 * Version 1.0.2 - Completed
 */

import {ImageWidget} from '../view/ImageWidget'
import {ImageWidgetPresenter} from './ImageWidgetPresenter';

describe('ImageWidgetPresenter', function () {
    it('Check that is instantiable', function () {
        expect(
            () => {
                new ImageWidgetPresenter(new ImageWidget()); //NOSONAR
            }
        ).to.not.throw();
    });

    it("Check if the image have a valid path [TU9]", function (done) {
        const image = new ImageWidget();
        image._presenter.setImage("http://nemboweb.com/images/corsi/webmaster-tutorial/cicciogatto.jpg");
        image._presenter.renderView();

        image._presenter._dom.firstChild.childNodes[1].addEventListener("load", function(e) { //NOSONAR
            done();
        });
    });

    it("Check if the image that don't  have a valid path launch an exception [TU10]", function (done) {
        const image = new ImageWidget();
        image._presenter.setImage("/proof_of_error");
        image._presenter.renderView();

        image._presenter._dom.firstChild.childNodes[1].addEventListener("error", function(e) { //NOSONAR
            done();
        });
        done();
    });

    it("Check if the Widget set the exact dimension of the image [TU11]", function () {
        const image = new ImageWidget();
        image.setWidth(100);
        image.setHeight(100);
        const view = image.renderView().firstChild.childNodes[1];
        expect(view.width).to.be.eq(100);
        expect(view.height).to.be.eq(100);
    });

    it("Check if the Widget have the default dimensions [TU12]", function () {
        const image = new ImageWidget();
        const view = image.renderView().firstChild.childNodes[1];
        expect(view.width).to.be.eq(250);
        expect(view.height).to.be.eq(210);
    });

    it("Check if the Widget have correct dimensions [TU13]", function () {

        const image = new ImageWidget();
        image._presenter.setImage("http://nemboweb.com/images/corsi/webmaster-tutorial/cicciogatto.jpg");
        image._presenter.setHeight(50);
        image._presenter.setWidth(50);
        image._presenter.renderView();
        const x =image._presenter._dom.firstChild.childNodes[1].width;
        const y= image._presenter._dom.firstChild.childNodes[1].height;
        const z=image._presenter.getWidth();
        const w=image._presenter.getHeight();

        expect(y).to.be.eq(50).and.to.be.eq(x).and.to.be.eq(w).and.to.be.eq(z);


    });

});
