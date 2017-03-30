
import {ImageWidget} from './ImageWidget'


describe('ImageWidget', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ImageWidget();
            }
        ).to.not.throw();
    });


    it("Check if the immage dont have a valid path", function (done) {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        let immagine = new ImageWidget();
        immagine.setImage("/proof_of_error");
        immagine.renderView();

        immagine._presenter._dom.firstChild.childNodes[1].addEventListener("error", function(e) {
            done();
        });
    });

    it("Check if the immage dont have a valid path", function (done) {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        let immagine = new ImageWidget();
        immagine.setImage("http://nemboweb.com/images/corsi/webmaster-tutorial/cicciogatto.jpg");
        immagine.renderView();

        immagine._presenter._dom.firstChild.childNodes[1].addEventListener("load", function(e) {
            done();
        });
    });



});
