/**
 * Created by Diego Cavestro on 21/03/2017.
 * Version 1.0.0 - Completed
 * Unit tests for ButtonWidget
 */
import {ButtonWidget} from './ButtonWidget';

describe('ButtonWidget', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ButtonWidget(); //NOSONAR
            }
        ).to.not.throw();
    });
});
