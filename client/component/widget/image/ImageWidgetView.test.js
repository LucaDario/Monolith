/**
 * Created by Nicolò Dovico on 25/03/2017.
 * Version 1.0.0 - Completed
 * Unit tests for ImageWidgetView
 */
import {ImageWidgetView} from './ImageWidgetView'


describe('ImageWidgetView', function () {
    it('Check that is not instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ImageWidgetView(); //NOSONAR
            }
        ).to.throw();
    });

});

