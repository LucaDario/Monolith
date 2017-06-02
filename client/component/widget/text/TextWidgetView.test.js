/**
 * Created by Manuel Turetta on 26/03/2017.
 * Version 1.0.2 - Completed
 * Unit tests for TextWidgetView
 */
import {TextWidgetView} from './TextWidgetView'

describe('TextWidgetView', function () {
    it('Check that is not instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new TextWidgetView(); //NOSONAR
            }
        ).to.throw();
    });

});
