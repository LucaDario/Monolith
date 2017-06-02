/**
 * Created by Stefano Lia on 24/03/2017.
 * Version 1.0.2 - Completed
 * Unit tests for ListWidget
 */
import {ListWidget} from './ListWidget'

describe('ListWidget', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ListWidget(); //NOSONAR
            }
        ).to.not.throw();
    });
});
