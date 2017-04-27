
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
