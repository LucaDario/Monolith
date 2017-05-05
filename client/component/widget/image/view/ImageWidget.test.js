/**
 * Created by Nicolò Dovico on 25/03/2017.
 * Version 1.0.0 - Completed
 * Unit tests for ImageWidget
 */
import {ImageWidget} from './ImageWidget'


describe('ImageWidget', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ImageWidget(); //NOSONAR
            }
        ).to.not.throw();
    });

});
