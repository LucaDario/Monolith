/**
 * Created by Diego Cavestro on 21/03/2017.
 * Version 1.0.0 - Completed
 * Unit tests for ButtonWidgetView
 */
import {ButtonWidgetView} from './ButtonWidgetView'

describe('ButtonWidgetView', function () {
    it('Check that is not instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ButtonWidgetView(); //NOSONAR
            }
        ).to.throw();
    });

});
