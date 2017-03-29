
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


    it("Check if the immage have a valid path", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(() => {

                let immagine = new ImageWidget();

                immagine.renderView();

        }).to.throw();
    });


});
