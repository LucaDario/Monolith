/**
 * Created by Manuel Turetta on 26/03/2017.
 * Version 1.0.2 - Completed
 * Unit tests for BaseBubble
 */
import {BaseBubble} from './BaseBubble'

describe('BaseBubble', function () {
    it('Check that is not instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new BaseBubble(); //NOSONAR
            }
        ).to.throw();
    });

});
